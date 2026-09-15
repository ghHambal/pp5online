const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-dashboard-DXzxtYZl.js","assets/api-CnonnVVn.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/sports-portals.js_v_10.22-BUafGoVM.js","assets/ui-DI1UEpN2.js","assets/version.js_v_10.22-DxLTis1W.js","assets/sports-awards-admin-6oCPrlSb.js","assets/azizgames-modal-BVIqoUog.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/browser-JP79f-a9.js","assets/teacher-views-smart-classroom-CE6WSwkB.js","assets/teacher-D3KXWFLQ.js","assets/promptpay-CIuxvxIA.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CIUUKsmF.js","assets/teacher-views-utils-Ceiaeijy.js","assets/wen-sso-CcN06Rhh.js","assets/azfutsal-modal-C49SHklA.js","assets/tutorial-DW5HF32q.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-C8s-TuM0.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-5qGz2lzF.js","assets/teacher-views-attendance-4LvVNsuY.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-BNr4W9tM.js","assets/score-display-BIDpG83o.js","assets/teacher-views-quiz-monitor-5lrNmmkc.js","assets/teacher-views-quiz-analytics-Bbe5qdcq.js","assets/lesson-plan-ai-workspace-BUr-0sOG.js","assets/pp5-doc-tM_R--md.js","assets/confetti-loader-BAN5Lv-C.js","assets/chat-classroom-CfSy9Koo.js","assets/student-api-B9JY02Vu.js","assets/teacher-views-flashcards-BN6SJ7tm.js","assets/teacher-views-attendance-delegate-B0qwYYe8.js"])))=>i.map(i=>d[i]);
import{a as F,g as ce,_ as fe,h as dt}from"./ui-DI1UEpN2.js";import{getSystemConfig as $e,getLifeSkillColumns as vt,getScoreColumns as Oe,createScoreColumn as nt,updateColumnSortOrders as Es,updateScoreColumn as Ls,getMyClasses as ct,setColumnAutoAttendanceSync as Cs,deleteScoreColumn as Tt,getDepartments as qs,getReligionRoomsByGrade as js,getRoomsByGrade as Is,getStudentsByReligionRoom as Ms,getStudentsByRoom as Ts,getMySchedule as Ve,createClass as As,linkClassToSchedule as ot,enrollStudents as Bs,getClassStudents as De,getTeacherClassesForLinking as ht,updateClass as at,getClassrooms as ts,getClassScheduleLinks as St,getPeriods as pt,getMyDonationRequests as Rs,getFlashcardDecks as Ns,deleteClass as ss,getCourseDocLangSettings as Ps,getTeacherRoomColors as Et,assignClassroom as ns,getClassSessionDOWs as Hs,getMySubjects as os,deleteScheduleByTeacher as Os,getClassRosterStudents as Ds,updateClassStudentSpecialResult as Fs,autoEnrollStudentsByRoom as Gs,updateClassStudentActive as zs,removeStudentFromClass as Vs,getStudentByCode as Us,addStudentToClass as Qs,getAttendanceDelegatesForClass as Ys,getClassroomLeaderForRoom as Ws,getClassRandomizerState as Ks,getClassScoreSummary as Js,saveCourseDocLangSettings as Xs,saveCourseDocLangEditors as Zs,getUniqueRooms as as,getUniqueReligionRooms as rs,getStudents as en,getQrReissueRequests as ls,logQrReissue as tn,saveTeacherRoomColor as is,upsertScheduleEntry as ds,updateSystemConfig as Ke,revokeQrReissueManager as sn,findTeacherForQrManagerGrant as nn,grantQrReissueManager as on,unlinkClassFromSchedule as an,deleteQrReissueLog as rn,updateQrReissueLog as ln,getQrReissueLogs as dn,markQrReissueRequestPrinted as At,setQrReissueRequestStatus as cn,deleteQrReissueRequest as pn,getQrReissueManagers as un,removeAttendanceDelegate as mn,addAttendanceDelegate as xn,saveClassRandomizerState as Bt,resetClassRandomizerPicks as Rt,clearClassGroups as gn,getAttendanceByDate as bn,saveClassGroups as fn,deleteScheduleEntry as yn}from"./api-CnonnVVn.js";import{b as tt}from"./browser-JP79f-a9.js";import{l as wt,m as vn}from"./sports-portals.js_v_10.22-BUafGoVM.js";import{s as cs}from"./supabase-BV-W2lsh.js";import{a as ps}from"./pp5-doc-tM_R--md.js";import{o as hn}from"./print-overlay-BVfxEd6n.js";import{uploadQrIssuerSignature as Nt}from"./storage-CuUjCgvI.js";import{a as wn,e as _n}from"./score-display-BIDpG83o.js";import{a as Lt,r as $n,b as kn}from"./teacher-views-grades-BNr4W9tM.js";import{renderAttendanceGrid as Ct,renderAttendance as Sn,renderLifeSkillScore as En,renderPrayerScore as Ln,renderReadingScore as Cn}from"./teacher-views-attendance-4LvVNsuY.js";import{l as qn,f as jn}from"./confetti-loader-BAN5Lv-C.js";import{setActiveNav as je,setTitle as Ie,setContent as _e,_htmlEsc as y,getMainContentRef as In,setMainContentRef as Pt,_nextPeriodMins as Ue,_transparentEdgeDarkLogo as Mn,INPUT_CLS as Ce,_generateSessions as Tn,_resolveGeminiKey as us,SELECT_CLS as _t,_dateInputValue as Ht,_parseDateOnly as An}from"./teacher-views-utils-Ceiaeijy.js";const xt="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",Je="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function Bn(e){document.getElementById("main-content").innerHTML=e}function Rn(e){document.getElementById("page-title").textContent=e}function Nn(e){document.querySelectorAll("[data-nav]").forEach(n=>{const r=n.dataset.nav===e;n.classList.toggle("bg-emerald-800",r),n.classList.toggle("text-white",r),n.classList.toggle("text-emerald-200",!r)})}const gt=["ระหว่างเรียน","กลางภาค","ปลายภาค","คะแนนพิเศษ"],Pn={ระหว่างเรียน:"bg-blue-50 text-blue-700",กลางภาค:"bg-amber-50 text-amber-700",ปลายภาค:"bg-red-50 text-red-700",คะแนนพิเศษ:"bg-purple-50 text-purple-700"},Hn=["คะแนนมาเรียน","คะแนนละหมาด"];function bt(e,n){var p;(p=document.getElementById("sc-confirm-popup"))==null||p.remove();const r=document.createElement("div");r.id="sc-confirm-popup",r.className="fixed inset-0 z-[200] flex items-center justify-center p-6",r.style.background="rgba(0,0,0,0.45)",r.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">${e}</p>
      <div class="flex gap-3">
        <button id="sc-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
        <button id="sc-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold">ลบเลย</button>
      </div>
    </div>`,document.body.appendChild(r),r.querySelector("#sc-conf-no").addEventListener("click",()=>r.remove()),r.querySelector("#sc-conf-yes").addEventListener("click",()=>{r.remove(),n()})}async function On(e,n,r){var p;if(!(!(e!=null&&e.id)||!(r!=null&&r.course_id)))try{const C=(await ct(e.id).catch(()=>[])).filter(g=>g.id!==n&&g.course_id===r.course_id);if(!C.length)return;const N=(await Promise.all(C.map(async g=>{const D=await Oe(g.id).catch(()=>[]);return D.length?{...g,cols:D}:null}))).filter(Boolean);if(!N.length)return;(p=document.getElementById("sc-same-subj-popup"))==null||p.remove();const A=document.createElement("div");A.id="sc-same-subj-popup",A.className="fixed inset-0 z-[190] flex items-center justify-center p-6",A.style.background="rgba(0,0,0,0.45)",A.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
          <p class="text-indigo-100 text-xs mt-1">ต้องการคัดลอกคอลัมน์คะแนนจากห้องที่มีอยู่แล้วไหม?</p>
        </div>
        <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
          ${N.map(g=>`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${g.class_name}</p>
              <p class="text-xs text-gray-400">${g.cols.length} คอลัมน์</p>
            </div>
            <button class="copy-cols-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold" data-src="${g.id}">คัดลอก</button>
          </div>`).join("")}
        </div>
        <div class="px-5 pb-5">
          <button id="sc-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(A),A.querySelector("#sc-ssp-close").addEventListener("click",()=>A.remove()),A.querySelectorAll(".copy-cols-btn").forEach(g=>{g.addEventListener("click",async()=>{var Z;const D=parseInt(g.dataset.src),q=N.find(b=>b.id===D);g.disabled=!0,g.textContent="⏳";try{const b=await Oe(n).catch(()=>[]),T=new Set(b.map(P=>P.assignment_name));let K=0;for(const P of q.cols)T.has(P.assignment_name)||(await nt({class_id:n,assignment_name:P.assignment_name,assignment_type:P.assignment_type,sheet_column:P.sheet_column??"",max_score:P.max_score,column_type:P.column_type??"regular",formula:P.formula??null,formula_refs:P.formula_refs??[]}),K++);F(`คัดลอก ${K} คอลัมน์จาก ${q.class_name} ✅`,"success"),A.remove(),(Z=window._scReload)==null||Z.call(window)}catch(b){F("คัดลอกไม่สำเร็จ: "+ce(b),"error"),g.disabled=!1,g.textContent="คัดลอก"}})})}catch{}}async function Dn(e,n,r,p=null){var Z,b,T;Nn("my-classes"),Rn(`คอลัมน์คะแนน — ${r}`);const B=((p==null?void 0:p.skill_group)??((Z=p==null?void 0:p.master_subjects)==null?void 0:Z.skill_group)??"")==="ชีวิต",C=["AGM","AGMVOC"].includes((b=p==null?void 0:p.master_subjects)==null?void 0:b.subject_group),N=!!(p!=null&&p.google_sheet_id);let A=new Set,g=new Set,D=!1;const q=async()=>{var X,z,se,ae,l,h,L;const K=await Oe(n),P=await $e().catch(()=>({})),re=parseInt(P.academicYear??2568),ne=parseInt(P.semester??1),J=B?(await vt(re,ne,"สามัญ").catch(()=>[])).slice(0,3).map(a=>a.name):C?Hn:[];A=new Set;for(const a of J){const c=K.filter(u=>u.assignment_name===a);c.length>0&&A.add(c[0].id)}window._scoreColCache=Object.fromEntries(K.map(a=>[a.id,a])),g=new Set;const ie=K.filter(a=>(a.column_type??"regular")==="regular"),x=K.filter(a=>a.column_type==="bonus"),j=K.filter(a=>a.column_type==="derived"),v=K.filter(a=>a.column_type==="override"),W=wn(x),R=ie.reduce((a,c)=>a+(Number(c.max_score)||0),0),s=j.reduce((a,c)=>a+(Number(c.max_score)||0),0),o=R+s,t=(a,c="",u=[])=>{var oe;const m=A.has(a.id),E=a.column_type??"regular",ee=u.findIndex(f=>f.id===a.id),U=!m&&ee>0&&!A.has((oe=u[ee-1])==null?void 0:oe.id),G=!m&&ee>=0&&ee<u.length-1;return`
      <tr class="${m?"bg-emerald-50/35":"hover:bg-gray-50"}">
        <td class="px-3 py-2.5 text-center">
          ${m?'<span class="text-emerald-500 text-xs">🔒</span>':`<input type="checkbox" class="sc-row-cb w-4 h-4 rounded accent-red-500" data-id="${a.id}" />`}
        </td>
        <td class="px-3 py-2.5 text-center whitespace-nowrap">
          <button onclick="window._moveScoreCol(${a.id},'up')" ${U?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${U?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▲</button>
          <button onclick="window._moveScoreCol(${a.id},'down')" ${G?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${G?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▼</button>
        </td>
        <td class="px-4 py-2.5 font-medium text-gray-800">
          ${a.assignment_name}
          ${E==="derived"&&a.formula?`<span class="ml-1 text-[10px] text-indigo-400 font-mono">= ${a.formula}</span>`:""}
          ${c}
        </td>
        ${N?`<td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${a.sheet_column??""}</td>`:""}
        <td class="px-4 py-2.5 text-center text-gray-600">${a.max_score??"—"}</td>
        <td class="px-4 py-2.5 text-right whitespace-nowrap">
          ${m?'<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>':`${E==="regular"?`
               <button onclick="window._toggleAutoSync(${a.id})"
                 title="${a.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}"
                 class="text-xs font-medium mr-2 px-2 py-1 rounded-lg ${a.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-100"}">
                 ${a.auto_attendance_sync?"🔄 ดึงจากเช็คชื่ออัตโนมัติ":"🔄 ดึงจากเช็คชื่อ"}
               </button>`:""}
               <button onclick="window._editScoreCol(${a.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
               <button onclick="window._deleteScoreCol(${a.id})" class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
        </td>
      </tr>`},i=(a,c=null)=>a.length?`<table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
          <tr>
            <th class="px-3 py-2 text-center w-8">เลือก</th>
            <th class="px-3 py-2 text-center w-14">เรียง</th>
            <th class="px-4 py-2 text-left">ชื่อ</th>
            ${N?'<th class="px-4 py-2 text-center">Sheet Col</th>':""}
            <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
            <th class="px-4 py-2 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${a.map(u=>t(u,(c==null?void 0:c(u))??"",a)).join("")}
        </tbody>
      </table>`:'<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์</p>',_=gt.map(a=>({type:a,items:ie.filter(c=>c.assignment_type===a)}));document.getElementById("sc-content").innerHTML=`
      <!-- Summary -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400">รวมคะแนน (นับใน 100)</p>
            <p class="text-2xl font-bold ${o>100?"text-red-600":"text-indigo-700"}">${o} คะแนน
              ${o>100?'<span class="text-sm font-normal text-red-500 ml-1">⚠️ เกิน 100</span>':""}
            </p>
          </div>
          <div class="text-xs text-gray-400 text-right">
            <p>คอลัมน์หลัก: ${ie.length} | อ้างอิง: ${j.length} | พิเศษ: ${x.length} | ปรับคะแนน: ${v.length}</p>
            <p class="mt-1">กลางภาค: ${ie.filter(a=>a.assignment_type==="กลางภาค").reduce((a,c)=>a+(Number(c.max_score)||0),0)} |
               ปลายภาค: ${ie.filter(a=>a.assignment_type==="ปลายภาค").reduce((a,c)=>a+(Number(c.max_score)||0),0)}</p>
          </div>
        </div>
      </div>

      <!-- Bulk delete bar -->
      <div id="sc-bulk-bar" class="hidden mb-3 flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
        <p id="sc-bulk-count" class="text-sm font-semibold text-red-700">เลือก 0 รายการ</p>
        <button id="sc-bulk-delete" class="px-4 py-1.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold">🗑️ ลบที่เลือก</button>
      </div>

      <!-- Regular columns (grouped by type) -->
      ${_.map(a=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${Pn[a.type]??""}">${a.type}</span>
            <span class="text-xs text-gray-400">รวม ${a.items.reduce((c,u)=>c+(Number(u.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${a.type}')" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${i(a.items)}
      </div>`).join("")}

      <!-- Derived columns -->
      <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-indigo-50 bg-indigo-50/50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">🧮 คอลัมน์อ้างอิงสูตร</span>
            <span class="text-xs text-gray-400">นับใน 100 · คำนวณจากคอลัมน์พิเศษ</span>
          </div>
          <button onclick="window._addDerivedCol()" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${i(j)}
      </div>

      <!-- Override columns (ปรับคะแนน — เชื่อมกับคอลัมน์หลักไหนก็ได้ ไม่ได้จำกัดแค่กลางภาค) -->
      <div class="bg-white rounded-2xl border border-teal-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-teal-50 bg-teal-50/50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-700">🔄 คอลัมน์ปรับคะแนน</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</span>
          </div>
          <button onclick="window._addOverrideCol()" class="text-xs text-teal-600 hover:text-teal-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${i(v,a=>{var c,u;return(a.link_column_id?` <span class="ml-1 text-[10px] text-teal-500">🔗 → ${((u=(c=window._scoreColCache)==null?void 0:c[a.link_column_id])==null?void 0:u.assignment_name)??"—"}</span>`:' <span class="ml-1 text-[10px] text-red-400">⚠️ ยังไม่ได้เชื่อมคอลัมน์</span>')+(a.override_mode==="add"?' <span class="ml-1 text-[10px] text-amber-500">➕ บวกเพิ่ม</span>':"")})}
      </div>

      <!-- Bonus columns (toggle) -->
      <div class="mb-4">
        <button id="sc-toggle-bonus"
          class="w-full flex items-center justify-between px-5 py-3 bg-white rounded-2xl border border-amber-100 shadow-sm hover:bg-amber-50/30 transition">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">⭐ คอลัมน์พิเศษ (Bonus)</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนเห็นได้</span>
            ${x.length?`<span class="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${x.length}</span>`:""}
          </div>
          <span class="text-gray-400 text-sm">${D?"▲ ซ่อน":"▼ แสดง"}</span>
        </button>
        <div id="sc-bonus-section" class="${D?"":"hidden"} mt-2 bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-amber-50 bg-amber-50/30">
            <div class="text-xs text-gray-500">
              ${W.length?W.map(a=>`<span class="font-mono font-bold text-amber-700">${a.var}</span> = ${a.assignment_name}`).join(" &nbsp;|&nbsp; "):"ยังไม่มีคอลัมน์พิเศษ"}
            </div>
            <button onclick="window._addBonusCol()" class="text-xs text-amber-600 hover:text-amber-800 font-medium flex-shrink-0">＋ เพิ่ม</button>
          </div>
          ${i(x)}
        </div>
      </div>

      <!-- Form เพิ่ม/แก้ไข (regular) -->
      <div id="sc-form-wrap" class="hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
        <h4 id="sc-form-title" class="font-semibold text-gray-700 mb-4">เพิ่มคอลัมน์คะแนน</h4>
        <form id="sc-form" class="grid grid-cols-2 gap-3">
          <input type="hidden" id="sc-edit-id" />
          <input type="hidden" id="sc-edit-ctype" value="regular" />
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อรายการ <span class="text-red-400">*</span></label>
            <input id="sc-name" type="text" placeholder="เช่น คะแนนเก็บ 1" class="${Je}" />
          </div>
          <div id="sc-type-wrap">
            <label class="block text-xs font-medium text-gray-600 mb-1">หมวด <span class="text-red-400">*</span></label>
            <select id="sc-type" class="${xt}">
              ${gt.map(a=>`<option value="${a}">${a}</option>`).join("")}
            </select>
          </div>
          ${N?`
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คอลัมน์ Sheet</label>
            <input id="sc-col" type="text" placeholder="EK" class="${Je} font-mono uppercase" maxlength="4" />
          </div>`:'<input id="sc-col" type="hidden" value="" />'}
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1" id="sc-max-label">คะแนนเต็ม</label>
            <input id="sc-max" type="number" min="0" placeholder="20" class="${Je}" />
          </div>
          <!-- Link column section (shown only for override) -->
          <div id="sc-link-wrap" class="col-span-2 hidden">
            <label class="block text-xs font-medium text-gray-600 mb-1">เชื่อมกับคอลัมน์หลัก <span class="text-red-400">*</span></label>
            <select id="sc-link-col" class="${xt}">
              <option value="">— เลือกคอลัมน์ —</option>
            </select>
            <label class="block text-xs font-medium text-gray-600 mb-1 mt-3">วิธีปรับคะแนน</label>
            <select id="sc-override-mode" class="${xt}">
              <option value="max">ใช้คะแนนที่มากกว่า (เขียนทับเฉพาะตอนคะแนนใหม่สูงกว่า)</option>
              <option value="add">บวกเพิ่มจากคะแนนตั้งต้น (คะแนนใหม่ = คะแนนตั้งต้น + คอลัมน์นี้เสมอ)</option>
            </select>
            <p id="sc-override-mode-hint" class="text-[11px] text-gray-400 mt-1">ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที</p>
          </div>
          <!-- Formula section (shown only for derived) -->
          <div id="sc-formula-section" class="col-span-2 hidden">
            <div class="bg-indigo-50 rounded-xl p-3 mb-3 text-xs text-indigo-700">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้ (จากคอลัมน์พิเศษ):</p>
              <p id="sc-vars-hint" class="font-mono">—</p>
              <p class="mt-1 text-indigo-500">ฟังก์ชัน: MIN, MAX, AVG, SUM, ROUND, FLOOR, CEIL, ABS, SQRT, POW, IF, CLAMP</p>
              <p class="text-indigo-500">เปรียบเทียบ: &gt; &lt; &gt;= &lt;= == !=</p>
            </div>
            <label class="block text-xs font-medium text-gray-600 mb-1">สูตรคำนวณ <span class="text-red-400">*</span></label>
            <div class="flex gap-2">
              <input id="sc-formula" type="text" placeholder="เช่น MIN(A*2,10)+B หรือ IF(A>5,A,0)" class="${Je} font-mono flex-1" />
              <button type="button" id="sc-test-formula" class="px-3 py-2 rounded-xl bg-indigo-100 text-indigo-700 text-xs font-medium hover:bg-indigo-200 whitespace-nowrap">ทดสอบ</button>
            </div>
            <p id="sc-formula-result" class="text-xs mt-1 hidden"></p>
          </div>
          <div class="col-span-2 flex gap-3 pt-1">
            <button type="button" id="sc-form-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="sc-save" type="submit" class="btn-primary flex-1 py-2 rounded-xl text-white text-sm font-semibold">บันทึก</button>
          </div>
        </form>
      </div>`;const I=document.getElementById("sc-bulk-bar"),O=document.getElementById("sc-bulk-count"),k=()=>{const a=g.size;I.classList.toggle("hidden",a===0),O.textContent=`เลือก ${a} รายการ`};document.querySelectorAll(".sc-row-cb").forEach(a=>{a.addEventListener("change",()=>{const c=parseInt(a.dataset.id);a.checked?g.add(c):g.delete(c),k()})}),(X=document.getElementById("sc-bulk-delete"))==null||X.addEventListener("click",()=>{const a=[...g].map(c=>{var u,m;return((m=(u=window._scoreColCache)==null?void 0:u[c])==null?void 0:m.assignment_name)??`ID ${c}`}).join(", ");bt(`ลบ ${g.size} คอลัมน์:<br/><span class="font-semibold">${a}</span>`,async()=>{try{await Promise.all([...g].map(c=>Tt(c))),F(`ลบ ${g.size} คอลัมน์แล้ว ✅`,"success"),g=new Set,await q()}catch(c){F("ลบไม่สำเร็จ: "+ce(c),"error")}})}),(z=document.getElementById("sc-toggle-bonus"))==null||z.addEventListener("click",()=>{D=!D,document.getElementById("sc-bonus-section").classList.toggle("hidden",!D),document.getElementById("sc-toggle-bonus").querySelector("span:last-child").textContent=D?"▲ ซ่อน":"▼ แสดง"}),(se=document.getElementById("sc-test-formula"))==null||se.addEventListener("click",()=>{const a=document.getElementById("sc-formula").value.trim(),c=document.getElementById("sc-formula-result");if(!a){c.classList.add("hidden");return}const u=Object.fromEntries(W.map(E=>[E.var,5])),m=_n(a,u);c.classList.remove("hidden"),m===null?(c.className="text-xs mt-1 text-red-500",c.textContent="⚠️ สูตรไม่ถูกต้อง"):(c.className="text-xs mt-1 text-emerald-600",c.textContent=`✅ ทดสอบด้วย ${W.map(E=>`${E.var}=5`).join(", ")} → ผลลัพธ์ = ${m}`)});const S=(a,c,u=gt[0])=>{document.getElementById("sc-edit-id").value="",document.getElementById("sc-edit-ctype").value=a,document.getElementById("sc-name").value="",document.getElementById("sc-col").value="",document.getElementById("sc-max").value="",document.getElementById("sc-type")&&(document.getElementById("sc-type").value=u),document.getElementById("sc-form-title").textContent=c;const m=a==="bonus",E=a==="derived",ee=a==="override";if(document.getElementById("sc-type-wrap").classList.toggle("hidden",m||E||ee),document.getElementById("sc-formula-section").classList.toggle("hidden",!E),document.getElementById("sc-link-wrap").classList.toggle("hidden",!ee),document.getElementById("sc-max-label").textContent=m?"คะแนนเต็ม (ไม่บังคับ)":ee?"คะแนนเต็ม (auto ตามคอลัมน์ที่เชื่อม)":"คะแนนเต็ม",document.getElementById("sc-max").readOnly=ee,E&&(document.getElementById("sc-formula").value="",document.getElementById("sc-formula-result").classList.add("hidden"),document.getElementById("sc-vars-hint").textContent=W.length?W.map(U=>`${U.var} = "${U.assignment_name}"`).join("  |  "):"ยังไม่มีคอลัมน์พิเศษ — เพิ่มก่อน"),ee){const U=document.getElementById("sc-link-col");U.innerHTML='<option value="">— เลือกคอลัมน์ —</option>'+ie.map(G=>`<option value="${G.id}">${G.assignment_name} (${G.assignment_type??"—"} · เต็ม ${G.max_score??"—"})</option>`).join(""),U.value="",document.getElementById("sc-override-mode").value="max",$()}document.getElementById("sc-form-wrap").classList.remove("hidden"),document.getElementById("sc-name").focus()};window._addScoreCol=a=>S("regular",`เพิ่มคอลัมน์หลัก — ${a}`,a),window._addBonusCol=()=>S("bonus","เพิ่มคอลัมน์พิเศษ (Bonus)"),window._addDerivedCol=()=>S("derived","เพิ่มคอลัมน์อ้างอิงสูตร"),window._addOverrideCol=()=>S("override","เพิ่มคอลัมน์ปรับคะแนน"),(ae=document.getElementById("sc-link-col"))==null||ae.addEventListener("change",a=>{const c=Number(a.target.value),u=ie.find(m=>m.id===c);document.getElementById("sc-max").value=(u==null?void 0:u.max_score)??""});const $=()=>{var u;const a=(u=document.getElementById("sc-override-mode"))==null?void 0:u.value,c=document.getElementById("sc-override-mode-hint");c&&(c.textContent=a==="add"?"คะแนนคอลัมน์หลักใหม่ = คะแนนตั้งต้นของนักเรียนคนนั้น + คะแนนในคอลัมน์นี้เสมอ (ไม่บวกซ้ำสะสมตอนแก้ค่าซ้ำ)":"ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที")};(l=document.getElementById("sc-override-mode"))==null||l.addEventListener("change",$),window._editScoreCol=a=>{var m;const c=(m=window._scoreColCache)==null?void 0:m[a];if(!c)return;if(A.has(a)){F("คอลัมน์ระบบกลาง แก้ไขไม่ได้","warning");return}const u=c.column_type??"regular";S(u,"แก้ไขคอลัมน์",c.assignment_type),document.getElementById("sc-edit-id").value=a,document.getElementById("sc-name").value=c.assignment_name,document.getElementById("sc-col").value=c.sheet_column??"",document.getElementById("sc-max").value=c.max_score??"",u==="derived"&&c.formula&&(document.getElementById("sc-formula").value=c.formula),u==="override"&&c.link_column_id&&(document.getElementById("sc-link-col").value=String(c.link_column_id),document.getElementById("sc-override-mode").value=c.override_mode==="add"?"add":"max",$())},window._moveScoreCol=async(a,c)=>{const u=await Oe(n),m=u.find(M=>M.id===a);if(!m)return;const E=u.filter(M=>M.assignment_type===m.assignment_type&&(M.column_type??"regular")===(m.column_type??"regular")),ee=E.findIndex(M=>M.id===a),U=c==="up"?ee-1:ee+1;if(U<0||U>=E.length||A.has(E[U].id))return;const G=E[ee],oe=E[U],f=G.sort_order??(ee+1)*10,d=oe.sort_order??(U+1)*10;await Es([{id:G.id,sort_order:d},{id:oe.id,sort_order:f}]),await q()},window._deleteScoreCol=a=>{var u,m;if(A.has(a)){F("คอลัมน์ระบบกลาง ลบไม่ได้","warning");return}const c=((m=(u=window._scoreColCache)==null?void 0:u[a])==null?void 0:m.assignment_name)??"คอลัมน์นี้";bt(`ต้องการลบ <span class="font-semibold">"${c}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Tt(a),F("ลบแล้ว ✅","success"),await q()}catch{F("ลบไม่สำเร็จ","error")}})},window._toggleAutoSync=async a=>{var E;const c=(E=window._scoreColCache)==null?void 0:E[a];if(!c)return;const u=!c.auto_attendance_sync,m=async()=>{try{await Cs(a,u),F(u?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน ✅":"ปิดใช้งานแล้ว","success"),await q()}catch{F("บันทึกไม่สำเร็จ","error")}};u?bt(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${c.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้านี้ — ถ้าเคยแก้คะแนนคนไหนด้วยมือไว้ก่อน จะไม่ถูกทับ</span>`,m):await m()},(h=document.getElementById("sc-form-cancel"))==null||h.addEventListener("click",()=>{document.getElementById("sc-form-wrap").classList.add("hidden")}),(L=document.getElementById("sc-form"))==null||L.addEventListener("submit",async a=>{var Y,w,te,H;a.preventDefault();const c=document.getElementById("sc-save"),u=document.getElementById("sc-edit-id").value,m=document.getElementById("sc-edit-ctype").value,E=document.getElementById("sc-name").value.trim(),ee=(((Y=document.getElementById("sc-col"))==null?void 0:Y.value)??"").trim().toUpperCase(),U=((w=document.getElementById("sc-type"))==null?void 0:w.value)??"ระหว่างเรียน",G=document.getElementById("sc-max").value,oe=G&&parseFloat(G)||null,f=m==="derived"&&document.getElementById("sc-formula").value.trim()||null,d=m==="override"&&Number((te=document.getElementById("sc-link-col"))==null?void 0:te.value)||null,M=m==="override"?((H=document.getElementById("sc-override-mode"))==null?void 0:H.value)==="add"?"add":"max":null;if(!E){F("กรุณากรอกชื่อรายการ","warning");return}if(m==="derived"&&!oe){F("คอลัมน์อ้างอิงสูตรต้องระบุคะแนนเต็ม","warning");return}if(m==="derived"&&!f){F("กรุณากรอกสูตรคำนวณ","warning");return}if(m==="override"&&!d){F("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const V=m==="derived"?W.map(Q=>({var:Q.var,col_id:Q.id})):[];c.disabled=!0,c.textContent="กำลังบันทึก...";try{const Q={assignment_name:E,assignment_type:m==="bonus"||m==="derived"||m==="override"?"คะแนนพิเศษ":U,sheet_column:ee,max_score:oe,column_type:m,formula:f,formula_refs:V,link_column_id:d,override_mode:M};u?await Ls(Number(u),Q):await nt({...Q,class_id:n}),F("บันทึกสำเร็จ","success"),document.getElementById("sc-form-wrap").classList.add("hidden"),(m==="bonus"||m==="derived")&&(D=!0),await q()}catch(Q){F("บันทึกไม่สำเร็จ: "+ce(Q),"error")}finally{c.disabled=!1,c.textContent="บันทึก"}})};window._scReload=q,Bn(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-400">${r}</p>
      </div>
      ${B?'<button id="btn-fill-lifeskill" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex-shrink-0">🌱 เติมทักษะชีวิต</button>':""}
    </div>
    <div id="sc-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`),await q(),(T=document.getElementById("btn-fill-lifeskill"))==null||T.addEventListener("click",async()=>{const K=document.getElementById("btn-fill-lifeskill");K.disabled=!0,K.textContent="⏳";try{const P=await $e().catch(()=>({})),re=parseInt(P.academicYear??2568),ne=parseInt(P.semester??1),J=await vt(re,ne,"สามัญ").catch(()=>[]);if(!J.length){F("ยังไม่มีหัวข้อทักษะชีวิต — แอดมินเพิ่มก่อน","warning");return}const ie=await Oe(n),x=new Set(ie.map(v=>v.assignment_name));let j=0;for(const v of J)x.has(v.name)||(await nt({class_id:n,assignment_name:v.name,assignment_type:"กลางภาค",sheet_column:v.sheet_col??"",max_score:v.max_score??20}),j++);F(j>0?`เพิ่ม ${j} คอลัมน์ ✅`:"มีคอลัมน์ทักษะชีวิตอยู่แล้ว",j>0?"success":"info"),await q()}catch{F("เติมไม่สำเร็จ","error")}finally{const P=document.getElementById("btn-fill-lifeskill");P&&(P.disabled=!1,P.textContent="🌱 เติมทักษะชีวิต")}}),setTimeout(()=>On(e,n,p),500)}const Ge="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",He="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function ms(e){document.getElementById("main-content").innerHTML=e}function xs(e){document.getElementById("page-title").textContent=e}function gs(e){document.querySelectorAll("[data-nav]").forEach(n=>{const r=n.dataset.nav===e;n.classList.toggle("bg-emerald-800",r),n.classList.toggle("text-white",r),n.classList.toggle("text-emerald-200",!r)})}function $t(e){if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const n=String(e).match(/^(\d{4})-(\d{2})-(\d{2})/);if(n)return new Date(Number(n[1]),Number(n[2])-1,Number(n[3]));const r=new Date(e);return Number.isNaN(r.getTime())?null:new Date(r.getFullYear(),r.getMonth(),r.getDate())}function rt(e){const n=$t(e);return n?[n.getFullYear(),String(n.getMonth()+1).padStart(2,"0"),String(n.getDate()).padStart(2,"0")].join("-"):""}function bs(e,n){const r=$t(n)??$t(new Date),p=r.getDay(),B=[];for(const A of e){const g=A.span_periods??1;for(let D=0;D<g;D++)B.push({dow:A.day_of_week,pno:(A.period_no??0)+D})}if(B.sort((A,g)=>{const D=(A.dow-p+7)%7,q=(g.dow-p+7)%7;return D!==q?D-q:A.pno-g.pno}),!B.length)return[];const C=[];let N=0;for(;C.length<6;){for(const A of B){const g=new Date(r);if(g.setDate(g.getDate()+(A.dow-p+7)%7+N*7),C.push(g),C.length>=6)break}N++}return C.slice(0,6)}const fs={ACDM:["วิชาการ","ภาษา","ชีวิต"],AGM:["ศาสนามัธยม"],ACDMVOC:["วิชาการ","ภาษา","สามัญปวช"],AGMVOC:["ศาสนาปวช"]};async function Fn(e,n,r={}){var x;const p=r.cloneFrom??null;gs(p?"my-classes":"my-courses"),xs(p?"ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา");const B=await qs().catch(()=>[]),C=await $e().catch(()=>({})),N=C.semester_start??C.term_start_date??rt(new Date),A=fs[n.subject_group]??[],g=A.length===1,D=B.find(j=>j.dept_code===n.dept),q=n.grade_level,Z=/^(PR|อก|อป)/i.test(q??""),b=parseInt(C.academicYear),T=parseInt(C.semester),K=p?new Set((window._classesFlat??[]).filter(j=>j.course_id===n.id&&+j.academic_year===b&&+j.semester===T).map(j=>j.class_name)):new Set,P=q?Z?await js(q).catch(()=>[]):await Is(q).catch(()=>[]):[],re=p?P.filter(j=>!K.has(j)):P,ne=p?r.srcSkill??"":"";ms(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${p?"📋 ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา"}</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${n.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${n.subject_code??"—"} · ${n.credit??"—"} หน่วยกิต · ${n.grade_level??"—"}</p>
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
            class="${He}" />
          <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
        </div>
        <!-- กลุ่มทักษะ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ <span class="text-red-400">*</span></label>
          ${g?`<input type="text" value="${A[0]}" class="${He} bg-gray-50" readonly />
               <input type="hidden" id="cls-skill" value="${A[0]}" />`:`<select id="cls-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${A.map(j=>`<option value="${j}" ${j===ne?"selected":""}>${j}</option>`).join("")}
               </select>`}
        </div>
        <!-- ชั้นเรียน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ชั้นเรียน <span class="text-red-400">*</span></label>
          ${re.length?`<select id="cls-room" class="${Ge}">
                <option value="">— เลือกห้องเรียน —</option>
                ${re.map(j=>`<option value="${j}">${j}</option>`).join("")}
               </select>`:`<input id="cls-room" type="text" placeholder="พิมพ์ชื่อห้อง เช่น PR 1/7 Ikhlas" class="${He}" autocomplete="off" />
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
          <select id="cls-head" class="${Ge}">
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
            ${[1,2,3,4,5,6].map(j=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${j}</p>
              <input id="cls-day${j}" type="date" value="${N}" class="${He} text-xs" />
            </div>`).join("")}
          </div>
        </div>
        <!-- ข้อมูล auto (แสดง readonly) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">ข้อมูลที่ซิงค์ไปยัง Google Sheet</p>
          <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div><span class="text-gray-400">รหัสวิชา:</span> ${n.subject_code??"—"}</div>
            <div><span class="text-gray-400">หน่วยกิต:</span> ${n.credit??"—"}</div>
            <div><span class="text-gray-400">ชั้นปี:</span> ${n.grade_level??"—"}</div>
            <div><span class="text-gray-400">กลุ่มสาระ:</span> ${(D==null?void 0:D.dept_name)??n.dept??"—"}</div>
            <div class="col-span-2"><span class="text-gray-400">หัวหน้าหมวด:</span> ${(D==null?void 0:D.head_name)??"—"}</div>
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
  </div>`);let J=[];document.getElementById("cls-room").addEventListener("change",async j=>{const v=j.target.value;if(!v){document.getElementById("cls-students-section").classList.add("hidden"),document.getElementById("cls-head-section").classList.add("hidden");return}try{J=Z?await Ms(v):await Ts(v),document.getElementById("cls-student-count").textContent=`(${J.length} คน)`,document.getElementById("cls-students-list").innerHTML=J.length?`<table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="px-3 py-2 text-left">รหัส</th>
                <th class="px-3 py-2 text-left">ชื่อ-สกุล</th>
                <th class="px-3 py-2 text-center">ศาสนา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${J.map(s=>`
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
          </table>`:'<p class="text-center py-4 text-gray-400 text-sm">ไม่พบนักเรียนในห้องนี้</p>';const W=document.getElementById("cls-head");W.innerHTML='<option value="">— เลือกหัวหน้าห้อง —</option>'+J.map(s=>`<option value="${s.id}" data-code="${s.student_code}" data-room="${s.main_room??""}" data-img="${s.image_url??""}">${s.full_name} (${s.student_code})</option>`).join(""),document.getElementById("cls-students-section").classList.remove("hidden"),document.getElementById("cls-head-section").classList.remove("hidden");const R=()=>{const s=W.options[W.selectedIndex],o=document.getElementById("cls-head-card");if(!s||!s.value){o==null||o.classList.add("hidden");return}const t=s.text.split(" (")[0],i=s.dataset.code??"",_=s.dataset.room??"",I=s.dataset.img??"";document.getElementById("cls-head-name").textContent=t,document.getElementById("cls-head-code").textContent=`รหัส: ${i}`,document.getElementById("cls-head-room").textContent=_?`ห้อง: ${_}`:"";const O=document.getElementById("cls-head-avatar");O.innerHTML=I?`<img src="${I}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${t.charAt(0)}</div>`,o==null||o.classList.remove("hidden")};W.addEventListener("change",R)}catch{F("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}});let ie=[];(x=document.getElementById("btn-auto-dates"))==null||x.addEventListener("click",async()=>{var W;const j=document.getElementById("btn-auto-dates"),v=document.getElementById("auto-dates-info");j.textContent="⏳ กำลังดึงตาราง...",j.disabled=!0;try{const R=parseInt(C.academicYear??2568),s=parseInt(C.semester??1),o=e?await Ve(e.id,R,s).catch(()=>[]):[];if(!o.length){v.innerHTML='⚠️ ยังไม่มีตารางสอน — <a href="#" id="goto-schedule" class="underline text-indigo-600 font-medium">สร้างตารางสอน</a> หรือกรอกวันเองด้านล่าง',v.classList.remove("hidden"),(W=document.getElementById("goto-schedule"))==null||W.addEventListener("click",O=>{var k;O.preventDefault(),(k=window._navTo)==null||k.call(window,"schedule")}),j.disabled=!1,j.textContent="🗓️ คำนวณจากตารางสอน";return}const t={};o.forEach(O=>{var S,$;const k=`${O.subject_name??((S=O.master_subjects)==null?void 0:S.subject_name)??"?"}|${O.class_name??""}`;t[k]||(t[k]={label:`${O.subject_name??(($=O.master_subjects)==null?void 0:$.subject_name)??"?"}${O.class_name?` — ${O.class_name}`:""}`,entries:[]}),t[k].entries.push(O)});const i=["อา","จ","อ","พ","พฤ","ศ"],_=O=>{const k=[];O.forEach($=>{for(let X=0;X<($.span_periods??1);X++)k.push({dow:$.day_of_week,pno:($.period_no??0)+X})}),k.sort(($,X)=>$.dow!==X.dow?$.dow-X.dow:$.pno-X.pno);const S={};return k.forEach($=>{S[$.dow]||(S[$.dow]=[]),S[$.dow].push($.pno)}),Object.entries(S).map(([$,X])=>`${i[$]} คาบ ${X.join(",")}`).join(" · ")},I=document.createElement("div");I.id="dates-popup",I.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",I.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(t).map(([O,k])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="dates-subj" value="${O}" class="mt-0.5 text-indigo-600 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${k.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${_(k.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(I),I.querySelector("#dates-close").addEventListener("click",()=>I.remove()),I.querySelector("#dates-cancel").addEventListener("click",()=>I.remove()),I.querySelector("#dates-calc").addEventListener("click",()=>{var $;const O=($=I.querySelector('input[name="dates-subj"]:checked'))==null?void 0:$.value;if(!O){alert("กรุณาเลือกวิชาก่อน");return}I.remove();const k=t[O].entries;ie=k,bs(k,N).forEach((X,z)=>{const se=document.getElementById(`cls-day${z+1}`);se&&(se.value=rt(X))}),v.textContent=`✅ คำนวณจาก "${t[O].label}" — ${k.length} ช่องตาราง — ตรวจสอบแล้วแก้ไขได้`,v.classList.remove("hidden")})}catch(R){v.textContent="โหลดตารางไม่สำเร็จ: "+ce(R),v.classList.remove("hidden")}finally{j.textContent="🗓️ คำนวณจากตารางสอน",j.disabled=!1}}),document.getElementById("class-form").addEventListener("submit",async j=>{j.preventDefault();const v=document.getElementById("cls-submit"),W=document.getElementById("cls-sheet-id").value.trim(),R=document.getElementById("cls-skill").value,s=document.getElementById("cls-room").value,o=document.getElementById("cls-head").value;if(!s){F("กรุณาเลือกชั้นเรียน","warning");return}v.disabled=!0,v.textContent="กำลังบันทึก...";try{const t={course_id:n.id,class_name:s,skill_group:R||null,google_sheet_id:W||null,head_student_id:o?Number(o):null,day1_date:document.getElementById("cls-day1").value||null,day2_date:document.getElementById("cls-day2").value||null,day3_date:document.getElementById("cls-day3").value||null,day4_date:document.getElementById("cls-day4").value||null,day5_date:document.getElementById("cls-day5").value||null,day6_date:document.getElementById("cls-day6").value||null},i=await As(t,(e==null?void 0:e.id)??null);i!=null&&i.id&&ie.length&&await Promise.all(ie.map(X=>ot(i.id,X.id).catch(()=>{}))),J.length&&(i!=null&&i.id)&&await Bs(i.id,J.map(X=>X.id));const _=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),I=(r.srcSkill??"")==="ชีวิต",O=["AGM","AGMVOC"].includes(n.subject_group??"");let k=new Set;if(I){const X=await $e().catch(()=>({})),z=await vt(parseInt(X.academicYear??2568),parseInt(X.semester??1),"สามัญ").catch(()=>[]);k=new Set(z.slice(0,3).map(se=>se.name))}let S=0;if(p&&(i!=null&&i.id)){const X=await Oe(p).catch(()=>[]),z=new Set;for(const se of X)O&&_.has(se.assignment_name)||I&&k.has(se.assignment_name)||z.has(se.assignment_name)||(z.add(se.assignment_name),await nt({class_id:i.id,assignment_name:se.assignment_name,assignment_type:se.assignment_type,sheet_column:se.sheet_column,max_score:se.max_score}),S++)}const $=p?`ทำสำเนา "${s}" สำเร็จ — นักเรียน ${J.length} คน · ช่องคะแนน ${S} ช่อง`:`เปิดรายวิชา ${s} สำเร็จ! นักเรียน ${J.length} คน`;F($,"success"),window._goBack()}catch(t){F("บันทึกไม่สำเร็จ: "+ce(t),"error")}finally{v.disabled=!1,v.textContent="บันทึกและเปิดรายวิชา"}})}async function Gn(e,n){var g,D;gs("my-classes"),xs("แก้ไขห้องเรียน");const r=n.master_subjects,p=fs[r==null?void 0:r.subject_group]??[],B=p.length===1,C=await De(n.id).catch(()=>[]);ms(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._navTo?.('my-classes') || history.back()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">แก้ไขห้องเรียน</h2>
    </div>
    <!-- ข้อมูลคงที่ -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5">
      <p class="text-xs text-emerald-500 font-medium mb-1">คอร์สวิชา / ห้องเรียน (เปลี่ยนไม่ได้)</p>
      <p class="font-bold text-emerald-900">${(r==null?void 0:r.subject_name)??"—"}
        <span class="font-mono text-sm ml-2 text-emerald-600">${(r==null?void 0:r.subject_code)??""}</span>
      </p>
      <p class="text-sm text-emerald-700 mt-0.5">ห้อง: <strong>${n.class_name}</strong></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="cls-edit-form" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Google Sheet ID</label>
          <input id="ce-sheet" type="text" value="${n.google_sheet_id??""}"
            placeholder="วาง ID จาก URL ของ Google Sheet" class="${He}" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ</label>
          ${B?`<input type="text" value="${p[0]}" class="${He} bg-gray-50" readonly />
               <input type="hidden" id="ce-skill" value="${p[0]}" />`:`<select id="ce-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${p.map(q=>`<option value="${q}" ${q===n.skill_group?"selected":""}>${q}</option>`).join("")}
               </select>`}
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
          <select id="ce-head" class="${Ge}">
            <option value="">— ยังไม่ระบุหัวหน้าห้อง —</option>
            ${C.map(q=>`
              <option value="${q.id}" ${Number(n.head_student_id)===Number(q.id)?"selected":""}>
                ${q.full_name} (${q.student_code})
              </option>`).join("")}
          </select>
          ${C.length?'<p class="text-xs text-gray-400 mt-1">เลือกได้จากนักเรียนที่อยู่ในห้องนี้</p>':'<p class="text-xs text-amber-500 mt-1">ยังไม่พบนักเรียนในห้องนี้ จึงยังเลือกหัวหน้าห้องไม่ได้</p>'}
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
                value="${n[`day${q}_date`]??""}" class="${He} text-xs" />
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
          <select id="ce-source-class" class="${Ge}">
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
  </div>`),e!=null&&e.id&&ht(e.id,n.id).then(q=>{const Z=document.getElementById("ce-source-class");if(Z&&(q.forEach(b=>{const T=b.master_subjects,K=`${(T==null?void 0:T.subject_name)??"?"} (${(T==null?void 0:T.subject_code)??""}) — ${b.class_name} · ${(T==null?void 0:T.credit)??"?"} หน่วยกิต`,P=new Option(K,b.id,!1,Number(b.id)===Number(n.source_class_id));Z.appendChild(P)}),n.source_class_id)){const b=q.find(T=>Number(T.id)===Number(n.source_class_id));b&&N(b)}}).catch(()=>{});const N=q=>{var K,P;const Z=document.getElementById("ce-source-info");if(!Z||!q)return;const b=((K=q.master_subjects)==null?void 0:K.credit)??1,T=((P=n.master_subjects)==null?void 0:P.credit)??1;b!==T?(Z.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${b} / วิชานี้ ${T}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,Z.classList.remove("hidden")):Z.classList.add("hidden")};(g=document.getElementById("ce-source-class"))==null||g.addEventListener("change",q=>{var T;const b=q.target.selectedOptions[0];if(!(b!=null&&b.value)){(T=document.getElementById("ce-source-info"))==null||T.classList.add("hidden");return}ht(e==null?void 0:e.id,n.id).then(K=>{const P=K.find(re=>Number(re.id)===Number(b.value));P&&N(P)}).catch(()=>{})});let A=[];(D=document.getElementById("ce-btn-auto-dates"))==null||D.addEventListener("click",async()=>{const q=document.getElementById("ce-btn-auto-dates"),Z=document.getElementById("ce-auto-dates-info");q.textContent="⏳ กำลังดึงตาราง...",q.disabled=!0;try{const b=await $e().catch(()=>({})),T=b.semester_start??b.term_start_date??rt(new Date),K=parseInt(b.academicYear??2568),P=parseInt(b.semester??1),re=e?await Ve(e.id,K,P).catch(()=>[]):[];if(!re.length){Z.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",Z.classList.remove("hidden");return}const ne={};re.forEach(j=>{const v=`${j.subject_name??"?"}|${j.class_name??""}`;ne[v]||(ne[v]={label:`${j.subject_name??"?"}${j.class_name?` — ${j.class_name}`:""}`,entries:[]}),ne[v].entries.push(j)});const J=["อา","จ","อ","พ","พฤ","ศ"],ie=j=>{const v=[];j.forEach(R=>{for(let s=0;s<(R.span_periods??1);s++)v.push({dow:R.day_of_week,pno:(R.period_no??0)+s})}),v.sort((R,s)=>R.dow!==s.dow?R.dow-s.dow:R.pno-s.pno);const W={};return v.forEach(R=>{W[R.dow]||(W[R.dow]=[]),W[R.dow].push(R.pno)}),Object.entries(W).map(([R,s])=>`${J[R]} คาบ ${s.join(",")}`).join(" · ")},x=document.createElement("div");x.id="ce-dates-popup",x.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="ce-dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(ne).map(([j,v])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="ce-dates-subj" value="${j}" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${v.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${ie(v.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="ce-dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="ce-dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(x),x.querySelector("#ce-dates-close").addEventListener("click",()=>x.remove()),x.querySelector("#ce-dates-cancel").addEventListener("click",()=>x.remove()),x.querySelector("#ce-dates-calc").addEventListener("click",()=>{var W;const j=(W=x.querySelector('input[name="ce-dates-subj"]:checked'))==null?void 0:W.value;if(!j){F("กรุณาเลือกวิชาก่อน","warning");return}x.remove(),A=ne[j].entries,bs(ne[j].entries,T).forEach((R,s)=>{const o=document.getElementById(`ce-day${s+1}`);o&&(o.value=rt(R))}),Z.textContent=`✅ คำนวณจาก "${ne[j].label}" — ตรวจสอบและแก้ไขได้`,Z.classList.remove("hidden")})}catch(b){Z.textContent="โหลดตารางไม่สำเร็จ: "+ce(b),Z.classList.remove("hidden")}finally{q.textContent="🗓️ คำนวณจากตารางสอน",q.disabled=!1}}),document.getElementById("cls-edit-form").addEventListener("submit",async q=>{var b;q.preventDefault();const Z=document.getElementById("ce-submit");Z.disabled=!0,Z.textContent="กำลังบันทึก...";try{const T=(b=document.getElementById("ce-source-class"))==null?void 0:b.value;await at(n.id,{google_sheet_id:document.getElementById("ce-sheet").value.trim()||null,skill_group:document.getElementById("ce-skill").value||null,head_student_id:document.getElementById("ce-head").value?Number(document.getElementById("ce-head").value):null,day1_date:document.getElementById("ce-day1").value||null,day2_date:document.getElementById("ce-day2").value||null,day3_date:document.getElementById("ce-day3").value||null,day4_date:document.getElementById("ce-day4").value||null,day5_date:document.getElementById("ce-day5").value||null,day6_date:document.getElementById("ce-day6").value||null,source_class_id:T?Number(T):null}),A.length&&(await Promise.all(A.map(K=>ot(n.id,K.id).catch(()=>{}))),A=[]),F("บันทึกสำเร็จ","success"),window._navTo?window._navTo("my-classes"):history.back()}catch(T){F("บันทึกไม่สำเร็จ: "+ce(T),"error")}finally{Z.disabled=!1,Z.textContent="บันทึกการแก้ไข"}})}const Ye=[{cls:"bg-emerald-100 text-emerald-900 font-semibold",hex:"#d1fae5",soft:"#ecfdf5",border:"#6ee7b7",dot:"#6ee7b7"},{cls:"bg-indigo-100 text-indigo-900 font-semibold",hex:"#e0e7ff",soft:"#eef2ff",border:"#a5b4fc",dot:"#a5b4fc"},{cls:"bg-amber-100 text-amber-900 font-semibold",hex:"#fef3c7",soft:"#fffbeb",border:"#fcd34d",dot:"#fcd34d"},{cls:"bg-rose-100 text-rose-900 font-semibold",hex:"#ffe4e6",soft:"#fff1f2",border:"#fda4af",dot:"#fda4af"},{cls:"bg-cyan-100 text-cyan-900 font-semibold",hex:"#cffafe",soft:"#ecfeff",border:"#67e8f9",dot:"#67e8f9"},{cls:"bg-violet-100 text-violet-900 font-semibold",hex:"#ede9fe",soft:"#f5f3ff",border:"#c4b5fd",dot:"#c4b5fd"},{cls:"bg-lime-100 text-lime-900 font-semibold",hex:"#ecfccb",soft:"#f7fee7",border:"#bef264",dot:"#bef264"},{cls:"bg-orange-100 text-orange-900 font-semibold",hex:"#ffedd5",soft:"#fff7ed",border:"#fdba74",dot:"#fdba74"},{cls:"bg-pink-100 text-pink-900 font-semibold",hex:"#fce7f3",soft:"#fdf2f8",border:"#f9a8d4",dot:"#f9a8d4"},{cls:"bg-teal-100 text-teal-900 font-semibold",hex:"#ccfbf1",soft:"#f0fdfa",border:"#5eead4",dot:"#5eead4"},{cls:"bg-sky-100 text-sky-900 font-semibold",hex:"#e0f2fe",soft:"#f0f9ff",border:"#7dd3fc",dot:"#7dd3fc"},{cls:"bg-fuchsia-100 text-fuchsia-900 font-semibold",hex:"#fae8ff",soft:"#fdf4ff",border:"#f0abfc",dot:"#f0abfc"}],st=e=>String(e??"").trim().toLowerCase(),ys=/^#[0-9a-f]{6}$/i;function zn(e){let n=2166136261;for(let r=0;r<e.length;r+=1)n^=e.charCodeAt(r),n=Math.imul(n,16777619);return n>>>0}function Vn({teacherId:e="",className:n="",subjectName:r="",fallbackId:p=""}={}){return`${st(e)}|${ut({className:n,subjectName:r,fallbackId:p})}`}function ut({className:e="",subjectName:n="",fallbackId:r=""}={}){const p=st(e),B=st(n),C=st(r);return p||B||C||"default"}function Ot(e){const n=ys.test(e)?e.slice(1):"e0e7ff";return{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)}}function Un({r:e,g:n,b:r}){return`#${[e,n,r].map(p=>Math.max(0,Math.min(255,Math.round(p))).toString(16).padStart(2,"0")).join("")}`}function ft(e,n,r=.5){const p=Ot(e),B=Ot(n);return Un({r:p.r*(1-r)+B.r*r,g:p.g*(1-r)+B.g*r,b:p.b*(1-r)+B.b*r})}function We(e){const n=ys.test(String(e??""))?String(e).toLowerCase():"#6366f1";return{cls:"",hex:n,soft:ft(n,"#ffffff",.86),border:ft(n,"#ffffff",.45),dot:n,text:ft(n,"#000000",.28)}}function Qn(e={}){const n=Vn(e),r=zn(n)%Ye.length;return{...We(Ye[r].dot),cls:Ye[r].cls,idx:r,key:n}}function ze(e={},n={}){const r=ut(e),p=n instanceof Map?n.get(r):n[r];return p?We(p):Qn(e)}const Dt="pp5_free_timer_count",Ft="pp5_timer_effect_style",lt="pp5_timer_sound",Gt="pp5_timer_break_step",zt="pp5_timer_ambient",Vt="pp5_timer_font_scale",Ut="pp5_timer_show_ambient_countdown",Xe="pp5_timer_last_countdown_sec",Qt="pp5_timer_last_break_sec",Yn="alarm-bell.mp3",qt=[{key:"forest-wind",label:"🌲 ลมป่า",file:"forest-wind.mp3"},{key:"calm-ocean-breeze",label:"🌊 สายลมทะเล",file:"calm-ocean-breeze.mp3"},{key:"path-to-jannah",label:"🕌 Path to Jannah",file:"path-to-jannah.mp3"},{key:"waterfall-nature",label:"💦 น้ำตกธรรมชาติ",file:"waterfall-nature.mp3"},{key:"calm",label:"🧘 สงบ",file:"calm.mp3"},{key:"meditation-01",label:"🎐 สมาธิ 01",file:"meditation-01.mp3"},{key:"meditation-02",label:"🎐 สมาธิ 02",file:"meditation-02.mp3"},{key:"nature-piano",label:"🎹 เปียโนธรรมชาติ",file:"nature-piano.mp3"},{key:"solo-piano",label:"🎹 เปียโนเดี่ยว",file:"solo-piano.mp3"},{key:"rain",label:"🌧️ เสียงฝน",file:"rain.mp3"}];function jt(e){return`/pp5online/sounds/${e}`}function vs(){var n;const e=parseInt((n=window._pp5SystemCfg)==null?void 0:n.freeTimerLimit,10);return Number.isFinite(e)?e:1}function Ze(e,n,r){r=Math.max(0,Math.min(1,r));const p=[1,3,5].map(N=>parseInt(e.slice(N,N+2),16)),B=[1,3,5].map(N=>parseInt(n.slice(N,N+2),16));return`rgb(${p.map((N,A)=>Math.round(N+(B[A]-N)*r)).join(",")})`}function yt(e){const n=Math.max(0,Math.round(e)),r=Math.floor(n/3600),p=Math.floor(n%3600/60),B=n%60;return r>0?`${String(r).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(B).padStart(2,"0")}`:`${String(p).padStart(2,"0")}:${String(B).padStart(2,"0")}`}let Te=null;function Wn(e,n,r="sine",p=.18){if(localStorage.getItem(lt)!=="off")try{Te=Te||new(window.AudioContext||window.webkitAudioContext),Te.state==="suspended"&&Te.resume();const B=Te.createOscillator(),C=Te.createGain();B.type=r,B.frequency.value=e,C.gain.value=p,B.connect(C),C.connect(Te.destination),B.start(),C.gain.exponentialRampToValueAtTime(1e-4,Te.currentTime+n/1e3),B.stop(Te.currentTime+n/1e3)}catch{}}const Kn=()=>Wn(880,120,"square",.12);let Qe=null;function Jn(){if(localStorage.getItem(lt)!=="off")try{Qe=Qe||new Audio(jt(Yn)),Qe.currentTime=0,Qe.volume=.7,Qe.play().catch(()=>{})}catch{}}let Ne=null,Fe=null;function Re(){if(Ne)try{Ne.pause()}catch{}Ne=null,Fe=null}function Xn(e){if(Fe===e){Re();return}Re();const n=qt.find(r=>r.key===e);if(n)try{Ne=new Audio(jt(n.file)),Ne.volume=.5,Ne.play().catch(()=>{}),Ne.addEventListener("ended",()=>{Fe===e&&(Fe=null,Ne=null)}),Fe=e}catch{}}function Zn(){const e=document.createElement("div");e.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="tm-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-700 text-lg">สิทธิ์จับเวลาทดลองใช้งานครบแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์จับเวลาเต็มจอจำกัดการทดลองใช้ฟรี ${vs()} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
      <button id="tm-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(e),e.querySelector("#tm-paywall-close").addEventListener("click",()=>e.remove()),e.querySelector("#tm-upgrade").addEventListener("click",()=>{var n;e.remove(),(n=document.getElementById("btn-donate-float"))==null||n.click()})}function eo(e,n,r){var ne;(ne=document.getElementById("timer-setup-modal"))==null||ne.remove(),Re();let p="countdown",B=localStorage.getItem(Ft)||"shake",C=localStorage.getItem(lt)!=="off",N=localStorage.getItem(Gt)||"60",A=localStorage.getItem(zt)||"none",g=localStorage.getItem(Ut)==="on";const D=J=>{const ie=parseInt(localStorage.getItem(J),10);return Number.isFinite(ie)&&ie>0?ie:300};let q=Math.floor(D(Xe)/60),Z=D(Xe)%60;const b=document.createElement("div");b.id="timer-setup-modal",b.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",document.body.appendChild(b);const T=[1,3,5,10,15,20],K=[{key:"countdown",icon:"⏱️",label:"นับถอยหลัง",sub:"คุมเวลากิจกรรม",grad:"linear-gradient(135deg,#10b981,#0ea5e9);"},{key:"break",icon:"☕",label:"พักเบรค",sub:"มืด→สว่างเตือนหมดเวลา",grad:"linear-gradient(135deg,#334155,#64748b);"},{key:"stopwatch",icon:"⏳",label:"นับเวลา",sub:"นับขึ้นไม่จำกัด",grad:"linear-gradient(135deg,#6366f1,#a855f7);"}];function P(){return`
      <div>
        <p class="text-xs font-semibold text-gray-500 mb-1.5">🎵 เสียงประกอบ <span class="font-normal">(คลิกเพื่อฟังตัวอย่าง คลิกซ้ำเพื่อหยุด)</span></p>
        <div class="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
          <button data-ambient="none" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${A==="none"?"bg-gray-700 text-white":"bg-gray-100 text-gray-600"}">🔇 ไม่มีเสียง</button>
          ${qt.map(J=>`<button data-ambient="${J.key}" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${A===J.key?"bg-teal-600 text-white":"bg-gray-100 text-gray-600"}">${J.label}${Fe===J.key?" ▶️":""}</button>`).join("")}
        </div>
      </div>`}function re(){var x,j;b.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[94vh] flex flex-col">
        <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="min-w-0">
            <h3 class="text-white font-bold text-base">⏱️ จับเวลา</h3>
            <p class="text-white/80 text-xs mt-0.5 truncate">${n!=null&&n.class_name?n.class_name:""}</p>
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
              ${T.map(v=>`<button data-min="${v}" class="tm-preset-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition ${q===v&&Z===0?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}">${v} นาที</button>`).join("")}
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <input id="tm-custom-min" type="number" min="0" max="180" value="${q}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">นาที</span>
              <input id="tm-custom-sec" type="number" min="0" max="59" value="${Z}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">วินาที</span>
            </div>
          </div>
          `:""}

          ${p==="countdown"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">เอฟเฟกต์ตอนใกล้หมดเวลา</p>
            <div class="flex gap-2">
              <button data-eff="shake" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${B==="shake"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">📳 สั่น</button>
              <button data-eff="scale" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${B==="scale"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">🔍 ขยาย</button>
            </div>
          </div>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-sound" type="checkbox" ${C?"checked":""} class="w-4 h-4 rounded" />
            🔊 เปิดเสียงตอนนับถอยหลัง/หมดเวลา (เสียงกริ่งนาฬิกาปลุก)
          </label>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-show-ambient" type="checkbox" ${g?"checked":""} class="w-4 h-4 rounded" />
            🎵 แสดงตัวเลือกเสียงประกอบในโหมดนับถอยหลังด้วย
          </label>
          ${g?P():""}
          `:""}

          ${p==="break"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">หน่วยปรับเวลาระหว่างเบรค</p>
            <div class="flex gap-2">
              <button data-step="60" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${N==="60"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±1 นาที</button>
              <button data-step="30" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${N==="30"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±30 วินาที</button>
            </div>
          </div>
          ${P()}
          `:""}

          <button id="tm-start" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]"
            style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">▶️ เริ่มจับเวลา</button>
        </div>
      </div>`,b.querySelector("#tm-close").addEventListener("click",()=>{Re(),b.remove()}),b.querySelectorAll(".tm-mode-btn").forEach(v=>v.addEventListener("click",()=>{if(p=v.dataset.mode,Re(),p!=="stopwatch"){const W=D(p==="break"?Qt:Xe);q=Math.floor(W/60),Z=W%60}re()})),b.querySelectorAll(".tm-preset-btn").forEach(v=>v.addEventListener("click",()=>{q=parseInt(v.dataset.min,10),Z=0,re()})),(x=b.querySelector("#tm-custom-min"))==null||x.addEventListener("change",v=>{const W=parseInt(v.target.value,10);Number.isFinite(W)&&W>=0&&(q=W)}),(j=b.querySelector("#tm-custom-sec"))==null||j.addEventListener("change",v=>{const W=parseInt(v.target.value,10);Number.isFinite(W)&&W>=0&&(Z=Math.min(59,W))}),b.querySelectorAll(".tm-eff-btn").forEach(v=>v.addEventListener("click",()=>{B=v.dataset.eff,localStorage.setItem(Ft,B),re()})),b.querySelectorAll(".tm-step-btn").forEach(v=>v.addEventListener("click",()=>{N=v.dataset.step,localStorage.setItem(Gt,N),re()})),b.querySelectorAll(".tm-ambient-btn").forEach(v=>v.addEventListener("click",()=>{A=v.dataset.ambient,localStorage.setItem(zt,A),A==="none"?Re():Xn(A),re()}));const J=b.querySelector("#tm-sound");J&&J.addEventListener("change",v=>localStorage.setItem(lt,v.target.checked?"on":"off"));const ie=b.querySelector("#tm-show-ambient");ie&&ie.addEventListener("change",v=>{g=v.target.checked,localStorage.setItem(Ut,g?"on":"off"),re()}),b.querySelector("#tm-start").addEventListener("click",()=>{var o,t;const v=parseInt((o=b.querySelector("#tm-custom-min"))==null?void 0:o.value,10),W=parseInt((t=b.querySelector("#tm-custom-sec"))==null?void 0:t.value,10);Number.isFinite(v)&&v>=0&&(q=v),Number.isFinite(W)&&W>=0&&(Z=Math.min(59,W));const R=q*60+Z;if(p!=="stopwatch"&&R<=0){F("กรุณาตั้งเวลาอย่างน้อย 1 วินาที","warning");return}if(!r){const i=parseInt(localStorage.getItem(Dt)||"0",10);if(i>=vs()){Zn();return}localStorage.setItem(Dt,String(i+1))}p!=="stopwatch"&&localStorage.setItem(p==="break"?Qt:Xe,String(R));const s=p==="break"||p==="countdown"&&g?A:"none";Re(),b.remove(),to(p,p==="stopwatch"?0:R,{effectStyle:B,breakStepSec:parseInt(N,10),ambient:s})})}re(),b.addEventListener("click",J=>{J.target===b&&(Re(),b.remove())})}function to(e,n,{effectStyle:r,breakStepSec:p,ambient:B}){var x,j;(x=document.getElementById("timer-fullscreen-overlay"))==null||x.remove();let C=n,N=n,A=0,g=!1,D=!1,q=null,Z=-1,b=parseFloat(localStorage.getItem(Vt))||1,T=null;if(B&&B!=="none"){const v=qt.find(W=>W.key===B);if(v)try{T=new Audio(jt(v.file)),T.loop=!0,T.volume=.45,T.play().catch(()=>{})}catch{}}const K=document.createElement("div");K.id="timer-fullscreen-overlay",K.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:background-color .6s linear;",K.innerHTML=`
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
      <input id="tm-size-slider" type="range" min="0.5" max="1.8" step="0.1" value="${b}" />
    </div>
    <div id="tm-digits" class="tm-digits" style="font-size:calc(min(28vw,220px) * ${b});line-height:1;">${yt(e==="stopwatch"?0:N)}</div>
    <div id="tm-sub" style="margin-top:12px;font-size:18px;opacity:.75;"></div>
    <div id="tm-mode-controls" style="display:none;margin-top:28px;gap:16px;align-items:center;"></div>
  `,document.body.appendChild(K);try{(j=K.requestFullscreen)==null||j.call(K)}catch{}const P=K.querySelector("#tm-digits"),re=K.querySelector("#tm-sub");K.querySelector("#tm-size-slider").addEventListener("input",v=>{b=parseFloat(v.target.value),localStorage.setItem(Vt,String(b)),P.style.fontSize=`calc(min(28vw,220px) * ${b})`});function ne(){var v;if(q&&cancelAnimationFrame(q),T)try{T.pause()}catch{}document.fullscreenElement&&((v=document.exitFullscreen)==null||v.call(document).catch(()=>{})),K.remove()}if(K.querySelector("#tm-exit").addEventListener("click",ne),e==="break"){const v=K.querySelector("#tm-mode-controls");v.style.display="flex";const W=p===30?"30 วิ":"1 นาที";v.innerHTML=`
      <button id="tm-minus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">− ${W}</button>
      <button id="tm-plus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">+ ${W}</button>
    `,v.querySelector("#tm-minus").addEventListener("click",()=>{N=Math.max(0,N-p)}),v.querySelector("#tm-plus").addEventListener("click",()=>{N+=p,C=Math.max(C,N)}),re.textContent="พักเบรค — จอสว่างเต็มที่ = หมดเวลาพัก"}else if(e==="stopwatch"){const v=K.querySelector("#tm-mode-controls");v.style.display="flex",v.innerHTML=`
      <button id="tm-pause" style="background:rgba(0,0,0,.15);border:none;padding:12px 26px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">⏸️ หยุดชั่วคราว</button>
    `;const W=v.querySelector("#tm-pause");W.addEventListener("click",()=>{D=!D,W.textContent=D?"▶️ เล่นต่อ":"⏸️ หยุดชั่วคราว"}),K.style.backgroundColor="#1e293b",P.style.color="#ffffff",re.textContent="นับเวลา"}else re.textContent="นับถอยหลัง";let J=performance.now();function ie(v){const W=(v-J)/1e3;if(J=v,e==="stopwatch"){D||(A+=W,P.textContent=yt(A)),q=requestAnimationFrame(ie);return}if(!g){N=Math.max(0,N-W);const R=Math.ceil(N),s=C>0?N/C:0,o=1-s;if(P.textContent=yt(N),e==="break")K.style.backgroundColor=Ze("#0f172a","#fef9c3",o),P.style.color=Ze("#94a3b8","#1e293b",o),P.style.animation="";else{let t;if(s>.3?t=Ze("#f59e0b","#10b981",(s-.3)/.7):s>.1?t=Ze("#ef4444","#f59e0b",(s-.1)/.2):t="#ef4444",K.style.backgroundColor=t,P.style.color="#ffffff",s<=.3){const i=1-Math.min(1,s/.3),_=Math.max(.18,.9-i*.7);P.style.animation=`${r==="shake"?"tm-shake":"tm-scale"} ${_}s ease-in-out infinite`}else P.style.animation="";R!==Z&&(Z=R,R>0&&R<=3&&Kn())}N<=0&&(g=!0,P.textContent="00:00",P.style.animation="",e==="break"?(K.style.backgroundColor="#fef9c3",P.style.color="#1e293b",re.textContent="หมดเวลาพักเบรคแล้ว"):(re.textContent="⏰ หมดเวลา!",Jn(),qn().then(()=>jn("mid")).catch(()=>{})))}q=requestAnimationFrame(ie)}q=requestAnimationFrame(ie)}const so="pp5_exam_docs_pending_class_id";function hs(e){window._pendingExamDocClassId=String(e);try{sessionStorage.setItem(so,String(e))}catch{}if(typeof window._navTo=="function"){window._navTo("exam-docs");return}F("ไม่พบเมนูเอกสารช่วงสอบ กรุณาเปิดจากหน้าเมนครู","warning")}async function ws(e,n){var p,B,C,N,A;const r=(p=window._classCache)==null?void 0:p[n];if(r){je("my-classes"),Ie("จัดการนักเรียน","class-students"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายชื่อนักเรียน...
  </div>`);try{const[g,D]=await Promise.all([Ds(n),$e().catch(()=>({}))]),q=`classRosterView_${n}`,Z=localStorage.getItem(q)||"table",b=g.filter(o=>o.is_active).length,T=r.master_subjects??{},K=["AGM","AGMVOC"].includes(T.subject_group),P=T.subject_group==="ACDMVOC",re=D.showStudentHouseColor!=="false",ne=D.showStudentSportsShirtSize!=="false",J=["ข.ร.","ข.ส.","ม.ส.","ข.ป."],ie=o=>`
      <select data-special-enrollment="${o.enrollment_id}" onclick="event.stopPropagation()"
        class="border border-gray-200 rounded-lg px-1.5 py-1 text-xs bg-white text-gray-600">
        <option value="" ${o.special_result?"":"selected"}>ปกติ</option>
        ${J.map(t=>`<option value="${t}" ${o.special_result===t?"selected":""}>${t}</option>`).join("")}
      </select>`,x=o=>K?o.main_room||o.religion_room||"—":o.religion_room||o.main_room||"—",j=o=>`
      ${re?`<span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">สี: ${y(o.house_color||"—")}</span>`:""}
      ${ne?`<span class="inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-medium">เสื้อ: ${y(o.sports_shirt_size||"—")}</span>`:""}`,v=(o,t="w-12 h-16")=>o.image_url?`<img src="${y(o.image_url)}" class="${t} rounded-2xl object-cover bg-gray-100 border border-gray-100 shadow-sm" loading="lazy" />`:`<div class="${t} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold">${y((o.full_name||"?").trim().slice(0,1))}</div>`,W=g.map((o,t)=>`
      <tr class="student-status-target cursor-pointer transition ${o.is_active?"bg-white hover:bg-emerald-50/40":"bg-gray-50 text-gray-400 hover:bg-gray-100"}"
        data-enrollment-id="${o.enrollment_id}" data-next="${o.is_active?"false":"true"}" data-name="${y(o.full_name)}">
        <td class="px-3 py-2 text-center text-xs text-gray-400">${t+1}</td>
        <td class="px-3 py-2">${v(o)}</td>
        <td class="px-3 py-2 font-mono text-sm">${y(o.student_code)}</td>
        <td class="px-3 py-2">
          <p class="font-semibold text-gray-800 ${o.is_active?"":"line-through text-gray-400"}">${y(o.full_name)}</p>
          <p class="text-xs text-gray-400">${y(x(o))}</p>
          <div class="mt-1 flex flex-wrap gap-1">${j(o)}</div>
        </td>
        ${re?`<td class="px-3 py-2 text-center text-sm text-gray-600">${y(o.house_color||"—")}</td>`:""}
        ${ne?`<td class="px-3 py-2 text-center text-sm text-gray-600">${y(o.sports_shirt_size||"—")}</td>`:""}
        ${P?`<td class="px-3 py-2 text-center">${ie(o)}</td>`:""}
        <td class="px-3 py-2 text-center">
          <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold ${o.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${o.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </td>
      </tr>`).join(""),R=g.map(o=>`
      <button type="button"
        class="student-status-target text-left rounded-2xl border p-4 transition ${o.is_active?"border-emerald-300 bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12),0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.18),0_10px_24px_rgba(16,185,129,0.16)]":"border-gray-300 bg-gray-50 opacity-80 hover:opacity-100"}"
        data-enrollment-id="${o.enrollment_id}" data-next="${o.is_active?"false":"true"}" data-name="${y(o.full_name)}">
        <div class="flex items-start justify-between gap-3">
          ${v(o,"w-20 h-28")}
          <span class="px-2 py-1 rounded-full text-[11px] font-semibold ${o.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${o.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </div>
        <p class="mt-3 font-bold text-gray-800 ${o.is_active?"":"line-through text-gray-400"}">${y(o.full_name)}</p>
        <p class="text-xs font-mono text-sky-700 mt-0.5">${y(o.student_code)}</p>
        <p class="text-xs text-gray-400 mt-0.5">${y(x(o))}</p>
        <div class="mt-2 flex flex-wrap gap-1">${j(o)}</div>
      </button>`).join("");_e(`<div class="animate-fade">
      <div id="students-back-placeholder" class="hidden"></div>
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-gray-700">ทั้งหมด ${g.length} คน · กำลังเรียน ${b} คน</p>
            <p class="text-xs text-gray-400 mt-0.5">ปิดสถานะเมื่อนักเรียนออกกลางคัน ระบบจะไม่ดึงไปเช็คชื่อ/ใบรายชื่อ</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${Z==="table"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="table" title="มุมมองตาราง">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4M3 6h4M3 18h4M17 6h4M17 18h4"/></svg>
              </button>
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${Z==="grid"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="grid" title="มุมมองกริด">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </button>
            </div>
            <button id="students-sync-enroll" class="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700" title="รีเฟรชรายชื่อนักเรียนในห้องนี้ตามข้อมูลล่าสุด">🔄 รีเฟรชรายชื่อ</button>
            <button id="students-add" class="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700">＋ เพิ่มนักเรียน</button>
            <button id="students-roster" class="px-3 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700">🖨️ สร้างใบรายชื่อ</button>
            <button id="students-print-qr" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">🖨️ พิมพ์ QR Code</button>
          </div>
        </div>
        ${g.length?Z==="grid"?`
          <div class="p-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            ${R}
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
                  ${P?'<th class="px-3 py-2 text-center w-24">สถานะพิเศษ</th>':""}
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
    </div>`);const s=()=>window._openStudentManager(n);document.querySelectorAll("[data-special-enrollment]").forEach(o=>{o.addEventListener("change",async()=>{try{await Fs(o.dataset.specialEnrollment,o.value),F("บันทึกสถานะพิเศษแล้ว","success")}catch(t){F("บันทึกไม่สำเร็จ: "+ce(t),"error")}})}),(B=document.getElementById("students-roster"))==null||B.addEventListener("click",()=>window._openRosterPicker(n)),(C=document.getElementById("students-print-qr"))==null||C.addEventListener("click",()=>{window._pendingQRClassId=n,window._navTo("student-qr-print")}),(N=document.getElementById("students-sync-enroll"))==null||N.addEventListener("click",async o=>{var _;const t=o.currentTarget,i=t.textContent;t.disabled=!0,t.textContent="กำลังรีเฟรช...";try{await Gs(),F("รีเฟรชรายชื่อสำเร็จ","success"),((_=window._loadClassTab)==null?void 0:_.call(window,"students"))??window._openStudentManager(n)}catch{F("รีเฟรชไม่สำเร็จ","error"),t.disabled=!1,t.textContent=i}}),document.querySelectorAll(".student-view-toggle").forEach(o=>{o.addEventListener("click",()=>{localStorage.setItem(q,o.dataset.view),s()})}),document.querySelectorAll(".student-status-target").forEach(o=>{o.addEventListener("click",()=>{var I;const t=o.dataset.next==="true",i=o.dataset.name||"นักเรียน";(I=document.getElementById("student-status-confirm"))==null||I.remove();const _=document.createElement("div");_.id="student-status-confirm",_.className="fixed inset-0 z-[95] bg-white flex flex-col",t?_.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-emerald-100 text-emerald-700">
                ✓
              </div>
              <h3 class="text-2xl font-bold text-gray-800">เปิดสถานะกำลังเรียน?</h3>
              <p class="mt-3 text-gray-500">${y(i)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะกลับมาอยู่ในเช็คชื่อ/ใบรายชื่อของรายวิชานี้</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-700">ยืนยัน</button>
              </div>
            </div>
          </div>`:_.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-red-50 text-red-500 border border-red-100 shadow-sm">
                🗑️
              </div>
              <h3 class="text-2xl font-bold text-gray-900">ลบนักเรียนออกจากห้องเรียนนี้?</h3>
              <p class="mt-3 text-gray-800 font-semibold text-lg">${y(i)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะถูกลบออกจากรายวิชานี้ และระบบซิงก์หรือปุ่มรีเฟรชจะไม่เพิ่มกลับมาอีก<br/>หากต้องการนำกลับ สามารถใช้ปุ่ม “เพิ่มนักเรียน” ได้ภายหลัง</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700">ยืนยันการลบ</button>
              </div>
            </div>
          </div>`,document.body.appendChild(_),_.querySelector("#student-status-cancel").addEventListener("click",()=>_.remove()),_.querySelector("#student-status-ok").addEventListener("click",async()=>{try{t?(await zs(o.dataset.enrollmentId,!0),F("เปิดสถานะกำลังเรียนแล้ว","success")):(await Vs(o.dataset.enrollmentId),F("ลบนักเรียนออกจากห้องเรียนนี้แล้ว","success")),_.remove(),s()}catch(O){F("ดำเนินการไม่สำเร็จ: "+ce(O),"error")}})})}),(A=document.getElementById("students-add"))==null||A.addEventListener("click",()=>{var X;(X=document.getElementById("add-student-modal"))==null||X.remove();const o=document.createElement("div");o.id="add-student-modal",o.className="fixed inset-0 z-[90] bg-white flex flex-col animate-fade",o.innerHTML=`
        <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 class="text-xl font-bold text-gray-800">เพิ่มนักเรียนเข้ารายวิชา (หลายคน)</h3>
            <p class="text-xs text-gray-500 mt-1">${y(T.subject_name||"")} · ${y(r.class_name||"")}</p>
          </div>
          <button id="add-student-close" class="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold hover:bg-sky-700 shadow transition">เสร็จสิ้น</button>
        </div>
        <div class="flex-1 overflow-auto p-5 max-w-2xl w-full mx-auto space-y-6">
          <div class="bg-gray-50 border border-gray-200 rounded-3xl p-6">
            <label class="block text-sm font-bold text-gray-700 mb-2">ยิงบาร์โค้ด หรือกรอกรหัสนักเรียนเพื่อเพิ่มทันที</label>
            <div class="flex gap-2">
              <input id="add-student-code" class="${Ce} text-lg font-mono flex-1 bg-white" placeholder="กรอกรหัสแล้วกด Enter" autocomplete="off" autofocus />
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
        </div>`,document.body.appendChild(o);const t=o.querySelector("#add-student-code"),i=o.querySelector("#add-student-search-btn"),_=o.querySelector("#add-student-status"),I=o.querySelector("#added-students-list"),O=o.querySelector("#added-count");let k=[];function S(){if(O.textContent=k.length,!k.length){I.innerHTML='<p class="text-xs text-gray-400 italic">ยังไม่มีการเพิ่มในรอบนี้</p>';return}I.innerHTML=k.map((z,se)=>`
          <div class="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl animate-fade">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-100 w-5 h-5 flex items-center justify-center rounded-full">${k.length-se}</span>
            <div class="flex-1">
              <p class="text-sm font-bold text-gray-800">${y(z.full_name)}</p>
              <p class="text-xs font-mono text-gray-500">${y(z.student_code)} · ${y(x(z))}</p>
            </div>
            <span class="text-xs text-emerald-600 font-bold">✓ เพิ่มแล้ว</span>
          </div>
        `).join("")}const $=async()=>{const z=t.value.trim();if(z){_.innerHTML='<span class="text-gray-400">กำลังค้นหาและเพิ่ม...</span>',t.disabled=!0,i.disabled=!0;try{const se=await Us(z);if(!se){_.innerHTML='<span class="text-red-500 font-medium">⚠️ ไม่พบนักเรียนรหัสนี้</span>';return}await Qs(n,se.id),k.unshift(se),S(),_.innerHTML=`<span class="text-emerald-600 font-medium">✓ เพิ่ม ${y(se.full_name)} สำเร็จ!</span>`,t.value=""}catch(se){_.innerHTML=`<span class="text-red-500 font-medium">⚠️ ${se.message||"เกิดข้อผิดพลาด"}</span>`}finally{t.disabled=!1,i.disabled=!1,t.focus()}}};o.querySelector("#add-student-close").addEventListener("click",()=>{o.remove(),s()}),i.addEventListener("click",$),t.addEventListener("keydown",z=>{z.key==="Enter"&&(z.preventDefault(),$())}),setTimeout(()=>t.focus(),50)})}catch(g){F("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ce(g),"error"),Le(e)}}}async function Le(e,n={}){var p,B;const r=n.showAllTerms??!1;if(je("my-classes"),Ie("ห้องเรียนของฉัน","classes"),!(e!=null&&e.id)){_e(`<div class="max-w-md mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">⚠️</p>
      <p class="font-medium text-gray-600">ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p>
    </div>`);return}_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[C,N,A,g]=await Promise.all([ct((e==null?void 0:e.id)??null),$e().catch(()=>({})),e!=null&&e.id?Et(e.id).catch(()=>[]):Promise.resolve([]),ts().catch(()=>[])]),D=Object.fromEntries(g.map(s=>[s.id,s])),q=parseInt(N.academicYear??2568),Z=parseInt(N.semester??1),[b,T,K]=await Promise.all([e!=null&&e.id?Ve(e.id,q,Z).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?St(e.id).catch(()=>[]):Promise.resolve([]),pt().catch(()=>[])]),P={};T.forEach(s=>{P[s.class_id]||(P[s.class_id]=[]),P[s.class_id].push(s.teacher_schedule_id)});const re=Object.fromEntries(b.map(s=>[s.id,s])),ne=Object.fromEntries(K.map(s=>[s.period_no,s])),J=Object.fromEntries((A??[]).map(s=>[s.room_key,s.color_hex]));window._classCache=Object.fromEntries(C.map(s=>[s.id,s])),window._classesFlat=C;const ie=s=>s.academic_year==null||+s.academic_year===q&&+s.semester===Z,x=C.filter(s=>!ie(s)).length,j=r?C:C.filter(ie),v=new Map;j.forEach(s=>{const o=s.master_subjects??{},t=[s.course_id??o.id??"",o.subject_code??"",o.subject_name??"",o.subject_group??""],i=t.some(Boolean)?t.join("|"):`class-${s.id}`;v.has(i)||v.set(i,{key:i,masterSubject:o,classes:[]}),v.get(i).classes.push(s)});const W=[...v.values()].map(s=>({...s,classes:s.classes.sort((o,t)=>{const i=Ue(o.id,P,re,ne),_=Ue(t.id,P,re,ne);return i!==_?i-_:String(o.class_name??"").localeCompare(String(t.class_name??""),"th")})})).sort((s,o)=>{var _,I;const t=Math.min(...s.classes.map(O=>Ue(O.id,P,re,ne))),i=Math.min(...o.classes.map(O=>Ue(O.id,P,re,ne)));return t!==1/0&&i!==1/0&&t!==i?t-i:String(((_=s.masterSubject)==null?void 0:_.subject_name)??"").localeCompare(String(((I=o.masterSubject)==null?void 0:I.subject_name)??""),"th")});_e(`<div class="animate-fade">
      <div class="mb-4">
        ${x>0?`
        <button id="toggle-term-view" type="button"
          class="w-full text-left px-4 py-2.5 rounded-xl border border-dashed text-xs font-semibold transition ${r?"border-indigo-200 bg-indigo-50 text-indigo-700":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
          ${r?"🔼 กำลังแสดงทุกภาคเรียน — คลิกเพื่อแสดงเฉพาะภาคเรียนปัจจุบัน":`🔽 มีห้องเรียนภาคเรียนก่อนหน้าอีก ${x} ห้อง — คลิกเพื่อแสดง (แก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ)`}
        </button>`:""}
      </div>
      ${j.length?`
      <div class="space-y-5">
        ${W.map(s=>{const o=s.masterSubject??{};return`
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
        ${s.classes.map(t=>{var se,ae;const i=t.master_subjects,_=wt(N,t),I=["AGM","AGMVOC"].includes(i==null?void 0:i.subject_group),O={teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:i==null?void 0:i.subject_name,fallbackId:t.id},k=ze(O,J);window._classColorCache||(window._classColorCache={}),window._classColorCache[t.id]=k;const S=I?{text:"กลุ่มวิชาศาสนา",cls:"bg-amber-50 text-amber-700"}:t.skill_group?{text:`กลุ่มทักษะ: ${t.skill_group}`,cls:"bg-blue-50 text-blue-700"}:null,$=t.classroom_id?D[t.classroom_id]:null,X=Ue(t.id,P,re,ne),z=(()=>{if(!(P[t.id]??[]).length)return`<button onclick="event.stopPropagation();window._openCombinedEdit(${t.id},'schedule')"
                class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium hover:underline transition">🔗 เชื่อมตารางสอน</button>`;if(X===1/0)return'<span class="text-[11px] text-gray-400">📅 ไม่พบข้อมูลตาราง</span>';if(X<=0)return'<span class="text-[11px] text-emerald-600 font-semibold">🟢 กำลังสอนอยู่</span>';if(X<60)return`<span class="text-[11px] text-emerald-600">⏱ สอนในอีก ${Math.round(X)} นาที</span>`;const l=Math.floor(X/60),h=Math.round(X%60);return l<24?`<span class="text-[11px] text-blue-600">⏱ สอนในอีก ${l} ชม. ${h} นาที</span>`:`<span class="text-[11px] text-gray-500">⏱ สอนในอีก ${Math.floor(l/24)} วัน</span>`})();return`
          <div class="rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer group"
               style="background:${k.soft}; border-color:${k.border}"
               onclick="window._openClassDetail(${t.id})">
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span class="px-2 py-0.5 bg-white/80 text-emerald-700 text-xs font-mono rounded-full">${(i==null?void 0:i.subject_code)??"—"}</span>
                    ${(i==null?void 0:i.credit)!=null?`<span class="px-2 py-0.5 bg-white/80 text-gray-500 text-xs rounded-full">${i.credit} หน่วยกิต</span>`:""}
                    ${S?`<span class="px-2 py-0.5 ${S.cls} text-xs rounded-full">${S.text}</span>`:""}
                    ${t.google_sheet_id?'<span class="px-2 py-0.5 bg-white/80 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
                  </div>
                  <h3 class="font-bold text-gray-800 text-base">${(i==null?void 0:i.subject_name)??"—"}</h3>
                  <p class="text-sm text-gray-500 mt-0.5">ห้อง: <span class="font-semibold" style="color:${k.text}">${t.class_name}</span>
                    ${$?`<span class="ml-2 text-[11px] text-gray-400">📍 ${$.building} ${$.room_number}</span>`:""}
                  </p>
                </div>
                <div class="flex gap-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onclick="event.stopPropagation();window._openClassDashboard(${t.id})"
                    class="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-white/70 rounded-lg transition text-sm" title="Dashboard ห้องเรียน">📈</button>
                  <button onclick="event.stopPropagation();window._openExamDocsForClass(${t.id})"
                    class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-white/70 rounded-lg transition text-sm" title="เอกสารสอบ">🧾</button>
                  <button onclick="event.stopPropagation();window._copyClass(${t.id},'${((se=t.class_name)==null?void 0:se.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-gray-400 hover:text-violet-600 hover:bg-white/70 rounded-lg transition text-sm" title="ทำสำเนาห้องเรียน">📋</button>
                  <button onclick="event.stopPropagation();window._openCombinedEdit(${t.id})"
                    class="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition text-sm" title="แก้ไข">✏️</button>
                  <button onclick="event.stopPropagation();window._deleteClass(${t.id},'${((ae=t.class_name)==null?void 0:ae.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-red-300 hover:text-red-500 hover:bg-white/70 rounded-lg transition text-sm" title="ลบ">🗑️</button>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between">
                ${z}
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
    </div>`),(p=document.getElementById("toggle-term-view"))==null||p.addEventListener("click",()=>Le(e,{showAllTerms:!r})),window._openPP5Doc=s=>ps(s),window._openExamDocsForClass=s=>hs(s),window._openClassDetail=s=>It(e,s,{classes:C,scheduleMap:re,linksByClass:P,periodMap:ne,classrooms:g,copyCfg:N}),window._openClassDashboard=async s=>{var i;const o=(i=window._classCache)==null?void 0:i[s];if(!o)return;const{openClassDashboard:t}=await fe(async()=>{const{openClassDashboard:_}=await import("./teacher-views-dashboard-DXzxtYZl.js");return{openClassDashboard:_}},__vite__mapDeps([0,1,2,3,4]));t(s,o,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})},window._openCombinedEdit=(s,o="info")=>{var i;const t=(i=window._classCache)==null?void 0:i[s];t&&ks(e,t,g,b,P,ne,re,()=>Le(e),o)},window._assignClassroom=s=>{var O,k,S;const o=(O=window._classCache)==null?void 0:O[s];if(!o)return;const t=[...new Set(g.map($=>$.building))];(k=document.getElementById("assign-room-modal"))==null||k.remove();const i=document.createElement("div");i.id="assign-room-modal",i.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">📍 ระบุห้องสอน</h3>
          <p class="text-xs text-gray-400 mb-4">${o.class_name} · ${((S=o.master_subjects)==null?void 0:S.subject_name)??""}</p>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
              <select id="arm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคาร —</option>
                ${t.map($=>`<option value="${$}">${$}</option>`).join("")}
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
        </div>`,document.body.appendChild(i);const _=i.querySelector("#arm-building"),I=i.querySelector("#arm-room");if(o.classroom_id&&D[o.classroom_id]){const $=D[o.classroom_id];_.value=$.building,_.dispatchEvent(new Event("change"))}_.addEventListener("change",()=>{const $=_.value,X=g.filter(z=>z.building===$);I.innerHTML='<option value="">— เลือกห้อง —</option>'+X.map(z=>{const se=z.name?`${z.room_number} — ${z.name}`:z.room_number,ae=z.id===o.classroom_id?"selected":"";return`<option value="${z.id}" ${ae}>${se}</option>`}).join("")}),i.querySelector("#arm-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#arm-save").addEventListener("click",async()=>{var z;const $=i.querySelector("#arm-save"),X=I.value?parseInt(I.value):null;$.disabled=!0,$.textContent="⏳";try{await ns(s,X),(z=window._classCache)!=null&&z[s]&&(window._classCache[s].classroom_id=X),F("บันทึกห้องสอนแล้ว ✅","success"),i.remove(),Le(e)}catch(se){F("บันทึกไม่สำเร็จ: "+ce(se),"error"),$.disabled=!1,$.textContent="บันทึก"}})},window._openAttendance=s=>{var t;const o=(t=window._classCache)==null?void 0:t[s];o&&Ct(e,o)},window._openGrades=s=>{var t;const o=(t=window._classCache)==null?void 0:t[s];o&&Lt(e,o)},window._openScoreCols=(s,o)=>{var i;const t=(i=window._classCache)==null?void 0:i[s];Dn(e,s,o,t)},window._editClass=s=>{var t;const o=(t=window._classCache)==null?void 0:t[s];o&&Gn(e,o)},window._deleteClass=async(s,o)=>{if(await dt({title:`ลบห้องเรียน "${o}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ss(s),F(`ลบ "${o}" แล้ว`,"success"),Le(e)}catch(i){F("ลบไม่สำเร็จ: "+ce(i),"error")}},window._copyClass=s=>{var _;const o=(_=window._classCache)==null?void 0:_[s];if(!o)return;const t=o.master_subjects??{},i={id:o.course_id,subject_name:t.subject_name??"—",subject_code:t.subject_code??"",credit:t.credit??"",grade_level:t.grade_level??"",dept:t.dept??o.dept??"",subject_group:t.subject_group??""};Fn(e,i,{cloneFrom:s,srcSkill:o.skill_group??""})};const R=async(s,o,t="landscape",i="all")=>{try{const[_,I,O]=await Promise.all([$e().catch(()=>({})),De(s.id),o==="score"?Oe(s.id):Promise.resolve([])]),k=i==="ชาย"||i==="หญิง"?i:"ทั้งหมด",S=k==="ทั้งหมด"?I:I.filter(G=>String(G.gender||"").trim()===k);if(!S.length){F(`ไม่พบนักเรียน${k==="ทั้งหมด"?"":k}ในห้องนี้`,"warning");return}const $=s.master_subjects??{},X=["ACDMVOC","AGMVOC"].includes($.subject_group),z=X?_.porworCollegeName||_.samaiSchoolName||"โรงเรียน":_.samaiSchoolName||_.porworCollegeName||"โรงเรียน",se=X?_.porworLogoBwUrl||_.porworLogoUrl||_.samaiLogoBwUrl||_.samaiLogoUrl||"":_.samaiLogoBwUrl||_.samaiLogoUrl||_.porworLogoBwUrl||_.porworLogoUrl||"",ae=await Mn(se),l=o==="score"?"ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน":"ใบรายชื่อนักเรียนสำหรับเช็คชื่อ",h=t!=="portrait",L=h?"297mm":"210mm",a=h?"210mm":"297mm",c=O.map(G=>{const oe=G.assignment_name||"-";return`
          <th class="score-col ${oe.length>8||O.length>(h?10:6)?"long":""}">
            <div class="score-label" title="${y(oe)}">${y(oe)}</div>
            <small>/${y(G.max_score??"")}</small>
          </th>`}).join(""),u=O.map(()=>'<td class="score-cell"></td>').join(""),m=Array.from({length:12},(G,oe)=>`<th class="check-col">${oe+1}</th>`).join(""),E=Array.from({length:12},()=>'<td class="check-cell"></td>').join(""),ee=S.map((G,oe)=>`
          <tr>
            <td class="no">${oe+1}</td>
            <td class="code">${y(G.student_code)}</td>
            <td class="name">${y(G.full_name)}</td>
            ${o==="score"?u:E}
            <td class="note"></td>
          </tr>`).join(""),U=`<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>${y(l)} - ${y($.subject_name||"")}</title>
  <style>
    @page { size: A4 ${h?"landscape":"portrait"}; margin: 10mm; }
    * { box-sizing: border-box; }
    body { font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; color: #111827; margin: 0; background: #f3f4f6; }
    .page { width: ${L}; min-height: ${a}; margin: 12px auto; padding: 10mm; background: white; }
    .header { display: grid; grid-template-columns: 70px 1fr 150px; align-items: center; gap: 12px; margin-bottom: 10px; }
    .logo-wrap { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: transparent; }
    .logo { width: 58px; height: 58px; object-fit: contain; filter: grayscale(1) contrast(1.18); }
    .school { text-align: center; line-height: 1.3; }
    .school h1 { margin: 0; font-size: 20px; }
    .school h2 { margin: 3px 0 0; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; line-height: 1.7; }
    .meta strong { display: inline-block; min-width: 66px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: ${h?"11px":"10px"}; }
    th, td { border: 1px solid #111827; padding: 3px 4px; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; text-align: center; }
    .no { width: 28px; text-align: center; }
    .code { width: 62px; text-align: center; font-family: monospace; }
    .name { width: ${h?"150px":"120px"}; }
    .check-col, .check-cell { width: ${h?"34px":"24px"}; height: 22px; text-align: center; }
    .score-col, .score-cell { width: ${h?"58px":"42px"}; text-align: center; }
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
      <div class="logo-wrap">${ae?`<img class="logo" src="${y(ae)}" />`:""}</div>
      <div class="school">
        <h1>${y(z)}</h1>
        <h2>${y(l)}${k==="ทั้งหมด"?"":` (${y(k)})`}</h2>
      </div>
      <div class="meta">
        <div><strong>ภาคเรียน</strong> ${y(_.semester||"")}/${y(_.academicYear||"")}</div>
        <div><strong>ห้อง</strong> ${y(s.class_name||"")}</div>
        <div><strong>รายชื่อ</strong> ${y(k)}</div>
        <div><strong>จำนวน</strong> ${S.length} คน</div>
      </div>
    </section>
    <section class="meta" style="margin-bottom:8px">
      <div><strong>รายวิชา</strong> ${y($.subject_name||"")}</div>
      <div><strong>รหัสวิชา</strong> ${y($.subject_code||"")}</div>
      <div><strong>ครูผู้สอน</strong> ${y((e==null?void 0:e.full_name)||"")}</div>
    </section>
    <table>
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="code">รหัส</th>
          <th class="name">ชื่อ-นามสกุล</th>
          ${o==="score"?c:m}
          <th class="note">หมายเหตุ</th>
        </tr>
      </thead>
      <tbody>${ee}</tbody>
    </table>
    <section class="signature">
      <div>
        ลงชื่อ ........................................ ครูผู้สอน<br />
        (${y((e==null?void 0:e.full_name)||"")})
      </div>
    </section>
  </main>
</body>
</html>`;hn(U)}catch(_){F("สร้างใบรายชื่อไม่สำเร็จ: "+ce(_),"error")}};window._openRosterPicker=s=>{var I,O,k;const o=(I=window._classCache)==null?void 0:I[s];if(!o)return;(O=document.getElementById("roster-picker-modal"))==null||O.remove();const t=document.createElement("div");t.id="roster-picker-modal",t.className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">สร้างใบรายชื่อ</h3>
        <p class="text-xs text-gray-400 mb-4">${y(((k=o.master_subjects)==null?void 0:k.subject_name)||"")} · ${y(o.class_name||"")}</p>
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
      </div>`,document.body.appendChild(t);const i=()=>{var S;return((S=t.querySelector(".roster-orientation:checked"))==null?void 0:S.value)||"landscape"},_=()=>{var S;return((S=t.querySelector(".roster-gender:checked"))==null?void 0:S.value)||"all"};t.querySelectorAll(".roster-orientation").forEach(S=>{S.addEventListener("change",()=>{t.querySelectorAll(".roster-orientation-card").forEach($=>{$.className="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600"}),S.nextElementSibling.className="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"})}),t.querySelectorAll(".roster-gender").forEach(S=>{S.addEventListener("change",()=>{t.querySelectorAll(".roster-gender-card").forEach($=>{$.className="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600"}),S.nextElementSibling.className="roster-gender-card block text-center rounded-lg border border-violet-500 bg-violet-50 px-2 py-2 text-sm font-semibold text-violet-700"})}),t.querySelector("#btn-roster-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",S=>{S.target===t&&t.remove()}),t.querySelector("#btn-roster-att").addEventListener("click",()=>{const S=i(),$=_();t.remove(),R(o,"attendance",S,$)}),t.querySelector("#btn-roster-score").addEventListener("click",()=>{const S=i(),$=_();t.remove(),R(o,"score",S,$)})},window._openStudentManager=s=>ws(e,s),window._openClassCopyModal=s=>{var S,$;const o=(S=window._classCache)==null?void 0:S[s];if(!o)return;const t=wt(N,o);if(!(t!=null&&t.id)){F("ยังไม่ได้ตั้งค่าไฟล์ต้นฉบับสำหรับกลุ่มวิชานี้","warning");return}($=document.getElementById("class-copy-modal"))==null||$.remove();const i=o.master_subjects??{},_=`${i.subject_name||"ปพ5"}_${o.class_name||""}_${(e==null?void 0:e.full_name)||""}`.replace(/\s+/g," ").trim(),I=(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||"",O=document.createElement("div");O.id="class-copy-modal",O.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",O.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">🔗 ทำสำเนาชีทสำหรับรายวิชานี้</h3>
        <p class="text-xs text-gray-400 mb-4">${y(t.label||"")} · ${y(i.subject_name||"")} · ${y(o.class_name||"")}</p>
        <label class="block text-sm font-semibold text-gray-700 mb-1">ตั้งชื่อไฟล์สำเนา</label>
        <input id="copy-file-name" class="${Ce}" value="${y(_)}" />
        <label class="block text-sm font-semibold text-gray-700 mt-3 mb-1">อีเมลที่จะให้สิทธิ์ไฟล์</label>
        <input id="copy-target-email" type="email" class="${Ce}" value="${y(I)}" placeholder="teacher@example.com" />
        <p class="text-xs text-gray-400 mt-2">ระบบจะสร้างสำเนาในบัญชีผู้ดูแลและแชร์สิทธิ์แก้ไขให้ email นี้ พร้อมบันทึก Sheet ID กลับเข้ารายวิชาอัตโนมัติ</p>
        <div id="copy-result" class="hidden mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm"></div>
        <div class="flex gap-3 mt-5">
          <button id="copy-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="copy-go" class="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600">สร้างสำเนา</button>
        </div>
      </div>`,document.body.appendChild(O),O.querySelector("#copy-cancel").addEventListener("click",()=>O.remove()),O.addEventListener("click",X=>{X.target===O&&O.remove()});const k=X=>{const z=_sheetCopyUrl(t.id);O.querySelector("#copy-result").innerHTML=`
          <div class="rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p class="font-semibold text-amber-800 mb-1">ใช้วิธีทำสำเนาด้วย Google แทน</p>
            <p class="text-xs text-amber-700 mb-3">${y(X||"หากสร้างอัตโนมัติไม่สำเร็จ ให้กดปุ่มด้านล่างเพื่อทำสำเนา แล้วนำลิงก์ไฟล์ใหม่มาวาง")}</p>
            <a href="${z}" target="_blank" rel="noopener noreferrer"
              class="block w-full py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-700">
              เปิดหน้าทำสำเนาของ Google
            </a>
            <label class="block text-xs font-semibold text-gray-600 mt-3 mb-1">วางลิงก์หรือ ID ของไฟล์ที่ทำสำเนาเสร็จแล้ว</label>
            <input id="manual-sheet-id" class="${Ce}" placeholder="https://docs.google.com/spreadsheets/d/..." />
            <button id="manual-save-sheet" class="mt-3 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
              บันทึก Sheet ID เข้ารายวิชา
            </button>
          </div>`,O.querySelector("#copy-result").classList.remove("hidden"),O.querySelector("#manual-save-sheet").addEventListener("click",async()=>{const se=O.querySelector("#manual-sheet-id"),ae=_extractSheetId(se.value);if(!ae){F("กรุณาวางลิงก์หรือ Sheet ID ของไฟล์สำเนา","warning");return}try{await at(o.id,{google_sheet_id:ae}),o.google_sheet_id=ae,F("บันทึก Sheet ID เข้ารายวิชาแล้ว","success"),O.remove(),Le(e)}catch(l){F("บันทึก Sheet ID ไม่สำเร็จ: "+ce(l),"error")}})};O.querySelector("#copy-go").addEventListener("click",async()=>{const X=O.querySelector("#copy-go"),z=O.querySelector("#copy-file-name").value.trim()||_||"สำเนาไฟล์ ปพ.5",se=O.querySelector("#copy-target-email").value.trim();X.disabled=!0,X.textContent="กำลังสร้าง...";try{const ae=await vn(t.id,z,se),l=ae.newSheetId;if(!l)throw new Error("GAS ไม่ได้ส่ง Sheet ID กลับมา");await at(o.id,{google_sheet_id:l}),o.google_sheet_id=l;const h=ae.url||_sheetUrl(l);O.querySelector("#copy-result").innerHTML=`
            <p class="font-semibold text-emerald-800 mb-2">สร้างไฟล์สำเนาและบันทึกเข้ารายวิชาแล้ว</p>
            <button id="copy-open" class="w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">เปิดไฟล์สำเนา</button>`,O.querySelector("#copy-result").classList.remove("hidden"),O.querySelector("#copy-open").addEventListener("click",()=>window.open(h,"_blank")),X.textContent="สร้างแล้ว",F("สร้างสำเนาและบันทึก Sheet ID แล้ว","success"),setTimeout(()=>Le(e),900)}catch(ae){X.disabled=!1,X.textContent="สร้างสำเนา",F("สร้างอัตโนมัติไม่สำเร็จ เปิดวิธีทำสำเนาด้วย Google แทน","warning"),k(ce(ae))}})},window._openSheetToolsModal=s=>{var _,I,O;const o=(_=window._classCache)==null?void 0:_[s];if(!(o!=null&&o.google_sheet_id))return;(I=document.getElementById("sheet-tools-modal"))==null||I.remove();const t=_sheetUrl(o.google_sheet_id),i=document.createElement("div");i.id="sheet-tools-modal",i.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",i.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${y(((O=o.master_subjects)==null?void 0:O.subject_name)||"")} · ${y(o.class_name||"")}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">🔗 Sync ข้อมูลไปชีท</button>
        </div>
        <button id="btn-sheet-tools-close" class="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>`,document.body.appendChild(i),i.querySelector("#btn-sheet-tools-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",k=>{k.target===i&&i.remove()}),i.querySelector("#btn-open-sheet").addEventListener("click",()=>window.open(t,"_blank")),i.querySelector("#btn-copy-sheet").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t),F("คัดลอกลิงก์ชีทแล้ว","success")}catch{F("คัดลอกไม่สำเร็จ","error")}}),i.querySelector("#btn-share-sheet").addEventListener("click",async()=>{const k=i.querySelector("#btn-share-sheet");k.disabled=!0,k.textContent="⏳ กำลังเปิดสิทธิ์...";try{const{shareSheetForView:S}=await fe(async()=>{const{shareSheetForView:$}=await import("./sports-portals.js_v_10.22-BUafGoVM.js").then(X=>X.n);return{shareSheetForView:$}},__vite__mapDeps([5,6,7,8,2,9,10,11,3,12]));await S(o.google_sheet_id),F("ส่งคำสั่งเปิดสิทธิ์แล้ว กรุณารอสักครู่แล้วลองเปิดลิงก์","success"),k.textContent="✅ ส่งคำสั่งเปิดสิทธิ์แล้ว"}catch(S){k.disabled=!1,k.textContent="🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้",F("เปิดสิทธิ์ไม่สำเร็จ: "+ce(S),"error")}}),i.querySelector("#btn-open-sync").addEventListener("click",()=>{i.remove(),window._openSyncModal(s)})},window._openSyncModal=s=>{var i,_;const o=(i=window._classCache)==null?void 0:i[s];if(!o)return;(_=document.getElementById("sync-modal"))==null||_.remove();const t=document.createElement("div");t.id="sync-modal",t.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`
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
        </div>`,document.body.appendChild(t),t.querySelector("#btn-sync-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",I=>{I.target===t&&t.remove()}),t.querySelector("#btn-sync-go").addEventListener("click",async()=>{var u,m,E,ee,U;const I=t.querySelector("#sync-opt-info").checked,O=t.querySelector("#sync-opt-att").checked,k=t.querySelector("#sync-opt-score").checked;if(!I&&!O&&!k){F("เลือกอย่างน้อย 1 รายการ","warning");return}const S=t.querySelector("#btn-sync-go"),$=t.querySelector("#sync-progress");S.disabled=!0,S.textContent="⏳ กำลัง Sync...",$.classList.remove("hidden");const{syncClassInfo:X,syncAttendance:z,syncScores:se}=await fe(async()=>{const{syncClassInfo:G,syncAttendance:oe,syncScores:f}=await import("./sports-portals.js_v_10.22-BUafGoVM.js").then(d=>d.n);return{syncClassInfo:G,syncAttendance:oe,syncScores:f}},__vite__mapDeps([5,6,7,8,2,9,10,11,3,12])),{getDepartments:ae,getTeachers:l,getScoreColumns:h,getStudentScores:L,getTeacherById:a}=await fe(async()=>{const{getDepartments:G,getTeachers:oe,getScoreColumns:f,getStudentScores:d,getTeacherById:M}=await import("./api-CnonnVVn.js");return{getDepartments:G,getTeachers:oe,getScoreColumns:f,getStudentScores:d,getTeacherById:M}},__vite__mapDeps([1,2,3,4])),c=[];try{if(I){$.textContent="📋 Sync ข้อมูลรายวิชา...";const[G,oe,f]=await Promise.all([ae().catch(()=>[]),l().catch(()=>[]),(u=o.master_subjects)!=null&&u.teacher_id?a(o.master_subjects.teacher_id).catch(()=>null):Promise.resolve(null)]),d=f??e,M=G.find(w=>{var te;return w.dept_name===((te=o.master_subjects)==null?void 0:te.dept)}),V=M!=null&&M.teacher_code?oe.find(w=>w.teacher_code===M.teacher_code):null,Y=(M==null?void 0:M.head_name)||(V==null?void 0:V.full_name)||"";await X(o.google_sheet_id,o,{full_name:(d==null?void 0:d.full_name)??"",phone:(d==null?void 0:d.phone)??""},{headStudentName:((m=o.students)==null?void 0:m.full_name)??"",deptName:((E=o.master_subjects)==null?void 0:E.dept)??"",headDeptName:Y})}}catch(G){c.push("รายวิชา: "+ce(G))}try{if(O){$.textContent="✅ Sync เช็คชื่อ...";const G=((ee=o.master_subjects)==null?void 0:ee.credit)??1,oe=((U=o.master_subjects)==null?void 0:U.subject_group)==="ACDMVOC",f=oe?await Hs(o.id).catch(()=>[]):[],d=Tn(o,G,f.length?f:null,oe),[M,V]=await Promise.all([De(s),getClassAttendanceAll(s)]),Y={};for(const w of V)Y[w.student_id]||(Y[w.student_id]={}),Y[w.student_id][w.session_number]=w.status;await z(o.google_sheet_id,d,Y,M)}}catch(G){c.push("เช็คชื่อ: "+ce(G))}try{if(k){$.textContent="📝 Sync คะแนน...";const[G,oe,f]=await Promise.all([h(s),L(s),De(s)]);G.length&&await se(o.google_sheet_id,G,oe,f)}}catch(G){c.push("คะแนน: "+ce(G))}t.remove(),c.length?F(`Sync บางส่วนไม่สำเร็จ:
`+c.join(`
`),"error"):F(`Sync สำเร็จ — ${o.class_name}`,"success")})}}catch(C){console.error("[renderMyClasses] โหลดข้อมูลห้องเรียนไม่สำเร็จ",C);const N=y((C==null?void 0:C.message)||"ไม่ทราบสาเหตุ");_e(`<div class="max-w-xl mx-auto mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-3xl mb-3">⚠️</p>
      <h3 class="font-bold text-red-700">โหลดข้อมูลห้องเรียนไม่สำเร็จ</h3>
      <p class="mt-2 text-sm text-red-600 break-words">${N}</p>
      <button id="retry-my-classes" class="mt-5 px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">ลองใหม่</button>
    </div>`),(B=document.getElementById("retry-my-classes"))==null||B.addEventListener("click",()=>Le(e)),F("โหลดข้อมูลห้องเรียนไม่สำเร็จ: "+ce(C),"error")}}async function It(e,n,r={}){je("my-classes"),Ie("ห้องเรียน"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[p,B,C]=await Promise.all([r.classes?Promise.resolve(r.classes):ct((e==null?void 0:e.id)??null),$e().catch(()=>({})),ts().catch(()=>[])]),N=p,A=N.find(t=>t.id===n);if(!A){r.supervisorMode||Le(e);return}const g=A.master_subjects??{},D=Object.fromEntries(C.map(t=>[t.id,t])),q=A.classroom_id?D[A.classroom_id]:null;window._classCache=Object.fromEntries(N.map(t=>[t.id,t]));const Z=parseInt(B.academicYear??2568),b=parseInt(B.semester??1),[T,K,P]=await Promise.all([e!=null&&e.id?Ve(e.id,Z,b).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?St(e.id).catch(()=>[]):Promise.resolve([]),pt().catch(()=>[])]),re={};K.forEach(t=>{re[t.class_id]||(re[t.class_id]=[]),re[t.class_id].push(t.teacher_schedule_id)});const ne=Object.fromEntries(T.map(t=>[t.id,t])),J=Object.fromEntries(P.map(t=>[t.period_no,t])),x=(!r.supervisorMode&&(e!=null&&e.id)?await Rs(e.id).catch(()=>[]):[]).some(t=>t.package_type==="donation"&&t.status==="approved"),j=wt(B,A),v=["AGM","AGMVOC"].includes(g.subject_group),W=A.google_sheet_id?`<button onclick="window._openSheetToolsModal(${n})" class="btn-action teal">⚙️ จัดการชีท</button>`:j!=null&&j.id?`<button onclick="window._openClassCopyModal(${n})" class="btn-action amber">🔗 ทำสำเนาชีท</button>`:"";_e(`
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
            <p class="font-bold text-gray-800 text-sm leading-tight truncate">${y(g.subject_name??"—")}</p>
            <p class="text-xs text-gray-500 truncate">
              <span class="font-mono text-emerald-600">${y(g.subject_code??"")}</span>
              <span class="mx-1">·</span>${y(A.class_name??"")}${q?` · 📍 ${y(q.building)} ${y(q.room_number)}`:""}
            </p>
          </div>
          <!-- badges desktop only -->
          <div class="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            ${A.skill_group?`<span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">${y(A.skill_group)}</span>`:""}
            ${v?'<span class="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full">ศาสนา</span>':""}
            ${A.google_sheet_id?'<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
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
          <button onclick="window._openSmartClassroom(${n})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#a9781a,#e6c988);">
            👑 <span>Smart Classroom</span>
          </button>
          <button onclick="window._openClassroomChat(${n})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#f59e0b,#b45309);">
            🏫 <span>แชทห้องเรียน</span>
          </button>

          <div class="flex-shrink-0 w-px bg-gray-200 my-0.5"></div>
          <button onclick="window._openCombinedEdit2(${n})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-50 transition flex items-center gap-1.5">
            ✏️ <span>แก้ไข</span>
          </button>
          <button onclick="event.stopPropagation();window._deleteClass(${n},'${(A.class_name??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'")}')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-red-100 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-1.5">
            🗑️ <span>ลบ</span>
          </button>
        </div>

        <template id="cd-group-tpl-docs">
          <button onclick="window._closeActionGroupPopup();window._openPP5Doc(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">💾 ปพ.5</button>
          <button onclick="window._closeActionGroupPopup();window._openExamDocsForClass(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🧾 เอกสารสอบ</button>
          ${A.google_sheet_id?`
          <button onclick="window._closeActionGroupPopup();window._openSheetToolsModal(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⚙️ จัดการชีท</button>`:j!=null&&j.id?`
          <button onclick="window._closeActionGroupPopup();window._openClassCopyModal(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🔗 ทำสำเนาชีท</button>`:""}
        </template>
        <template id="cd-group-tpl-tools">
          <button onclick="window._closeActionGroupPopup();window._openRandomPickerModal(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🎲 สุ่มรายชื่อ</button>
          <button onclick="window._closeActionGroupPopup();window._openTimerModal(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⏱️ จับเวลา</button>
        </template>
        <template id="cd-group-tpl-assist">
          <button onclick="window._closeActionGroupPopup();window._openClassFlashcardsModal(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🃏 บัตรคำศัพท์</button>
          <button onclick="window._closeActionGroupPopup();window._openPromptGenModal(${n})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">✍️ Prompt AI</button>
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
    </style>`);const R=()=>document.getElementById("cd-tab-content");window._backToClasses=()=>{Le(e)};const s={docs:{title:"📄 เอกสาร",grad:"linear-gradient(135deg,#7c3aed,#6366f1)"},tools:{title:"🛠️ เครื่องมือห้องเรียน",grad:"linear-gradient(135deg,#f59e0b,#ec4899)"},assist:{title:"🤖 ผู้ช่วยครู",grad:"linear-gradient(135deg,#6366f1,#06b6d4)"}};window._closeActionGroupPopup=()=>{var t;return(t=document.getElementById("cd-action-popup"))==null?void 0:t.remove()},window._openActionGroupPopup=t=>{window._closeActionGroupPopup();const i=document.getElementById(`cd-group-tpl-${t}`),_=s[t];if(!i||!_)return;const I=document.createElement("div");I.id="cd-action-popup",I.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 animate-fade",I.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div style="background:${_.grad}" class="px-4 py-3 flex items-center justify-between">
            <h3 class="text-white font-bold text-sm">${_.title}</h3>
            <button id="cd-action-popup-close" class="text-white/90 hover:text-white text-2xl leading-none px-1">&times;</button>
          </div>
          <div class="p-2 flex flex-col gap-0.5">${i.innerHTML}</div>
        </div>`,document.body.appendChild(I),I.querySelector("#cd-action-popup-close").addEventListener("click",window._closeActionGroupPopup),I.addEventListener("click",O=>{O.target===I&&window._closeActionGroupPopup()})},window._openPP5Doc=t=>ps(t),window._openExamDocsForClass=t=>hs(t),r.supervisorMode||(window._openStudentManager=t=>ws(e,t)),window._openCombinedEdit2=t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];i&&ks(e,i,C,T,re,J,ne,()=>It(e,t))},window._openRandomPickerModal=async t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];if(i)try{const I=await De(t);if(!I.length){F("ห้องนี้ยังไม่มีนักเรียน","warning");return}const O=I.map((k,S)=>({...k,seat_no:S+1}));await $s(t,i,O,x)}catch{F("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}},window._openTimerModal=t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];i&&eo(t,i,x)},window._openSmartClassroom=t=>{fe(()=>import("./teacher-views-smart-classroom-CE6WSwkB.js"),__vite__mapDeps([13,6,7,1,2,3,4,14,15,12,5,8,9,10,11,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,0,33,34,35])).then(i=>i.renderSmartClassroom(e,t))},window._openClassroomChat=t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];fe(()=>import("./chat-classroom-CfSy9Koo.js"),__vite__mapDeps([36,1,2,3,4,37,19,6,7,11])).then(I=>I.openTeacherClassroomChat(e,t,i==null?void 0:i.class_name))},window._openClassFlashcardsModal=async t=>{var _;if((_=window._classCache)!=null&&_[t])try{const I=await Ns(e.id);oo(e,t,I)}catch(I){F("โหลดชุดบัตรคำไม่สำเร็จ: "+ce(I),"error")}},window._openPromptGenModal=async t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];i&&await _s(e,t,i,window._pp5SystemCfg??{})},window._deleteClass=async(t,i)=>{if(await dt({title:`ลบห้องเรียน "${i}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ss(t),F(`ลบ "${i}" แล้ว`,"success"),Le(e)}catch{F("ลบไม่สำเร็จ","error")}},window._loadClassTab=async t=>o(t);const o=async t=>{document.querySelectorAll(".cd-tab").forEach(I=>{const O=I.dataset.tab===t;I.className=O?"cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center":"cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center"});const i=document.getElementById("cd-tab-content");if(!i)return;i.innerHTML=`<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>`;const _=In();Pt(i);try{t==="students"?await window._openStudentManager(n):t==="attendance"?await Ct(e,A):t==="grades"&&await Lt(e,A)}catch(I){console.error(I),i.innerHTML='<div class="p-6 text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>'}finally{Pt(_)}je("my-classes"),Ie("ห้องเรียน")};document.querySelectorAll(".cd-tab").forEach(t=>t.addEventListener("click",()=>o(t.dataset.tab))),o(r.defaultTab??"students")}catch(p){console.error(p),F("โหลดข้อมูลไม่สำเร็จ","error")}}const no=[{value:"none",label:"ไม่จำ — สุ่มอิสระทุกครั้ง (มีโอกาสซ้ำ)"},{value:"session",label:"จำเฉพาะตอนนี้ — รีเซ็ตอัตโนมัติเมื่อปิดหน้าต่างนี้"},{value:"cycle",label:"จำจนครบทุกคน แล้ววนรอบใหม่อัตโนมัติ"},{value:"manual",label:"จำตลอดไป จนกว่าจะกดรีเซ็ตเอง"}];function Yt(e){const n=["#f59e0b","#ec4899","#10b981","#6366f1","#ef4444","#06b6d4","#8b5cf6"];e.style.position="relative",e.style.overflow="hidden";for(let r=0;r<26;r++){const p=document.createElement("div"),B=n[Math.floor(Math.random()*n.length)],C=Math.random()*100,N=1.1+Math.random()*.7,A=Math.random()*.25,g=Math.random()*360;p.style.cssText=`position:absolute;top:-12px;left:${C}%;width:7px;height:13px;background:${B};opacity:0.9;border-radius:2px;transform:rotate(${g}deg);pointer-events:none;animation:rp-confetti-fall ${N}s ${A}s ease-in forwards;`,e.appendChild(p),setTimeout(()=>p.remove(),(N+A)*1e3+250)}}function oo(e,n,r){var C;(C=document.getElementById("class-flashcards-modal"))==null||C.remove();const p=document.createElement("div");p.id="class-flashcards-modal",p.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4";let B="";!r||r.length===0?B=`
      <div class="text-center py-8 text-gray-500">
        <p class="text-4xl mb-2">🃏</p>
        <p class="text-sm font-medium">คุณครูยังไม่มีชุดบัตรคำศัพท์เลยครับ</p>
        <p class="text-xs text-gray-400 mt-1">สามารถสร้างชุดบัตรคำศัพท์ใหม่ได้ที่เมนู "บัตรคำศัพท์" ในเมนูหลัก</p>
      </div>
    `:B=`
      <div class="grid gap-3 max-h-[60vh] overflow-y-auto pr-1 w-full">
        ${r.map(N=>`
          <button class="select-deck-btn w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition flex items-center justify-between gap-3 group"
            data-deck-id="${N.id}">
            <div>
              <p class="font-bold text-gray-800 text-sm group-hover:text-indigo-700 transition">${y(N.title)}</p>
              ${N.description?`<p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${y(N.description)}</p>`:""}
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

      ${B}
    </div>
  `,document.body.appendChild(p),p.querySelector("#cf-modal-close").addEventListener("click",()=>p.remove()),p.addEventListener("click",N=>{N.target===p&&p.remove()}),p.querySelectorAll(".select-deck-btn").forEach(N=>{N.addEventListener("click",()=>{const A=N.dataset.deckId,g=r.find(D=>D.id===A);g&&(p.remove(),fe(()=>import("./teacher-views-flashcards-BN6SJ7tm.js"),__vite__mapDeps([38,6,7,1,2,3,4,19])).then(D=>{D.renderFlashcardPlay(e,g,n)}))})})}function ao(e){var n;return((n=String((e==null?void 0:e.donationSpecialFeatures)??"").split(`
`).map(r=>{const p=r.split("|");return{text:p[1]??"",minTier:parseInt(p[2])||1}}).find(r=>r.text.includes("Prompt")))==null?void 0:n.minTier)??1}const Wt=[{value:"บรรยาย",label:"บรรยาย (Lecture)"},{value:"กิจกรรมกลุ่ม",label:"กิจกรรมกลุ่ม (Group Activity)"},{value:"โครงงานเป็นฐาน",label:"โครงงานเป็นฐาน (Project-based)"},{value:"สืบเสาะหาความรู้",label:"สืบเสาะหาความรู้ (Inquiry-based)"},{value:"other",label:"อื่นๆ (พิมพ์เอง)"}],Kt={th:"ภาษาไทย",en:"ภาษาอังกฤษ (English)",ar:"ภาษาอาหรับ (العربية)","ms-rumi":"ภาษามลายู อักษรรูมี (Bahasa Melayu, Rumi)","ms-jawi":"ภาษามลายูปัตตานี อักษรยาวี (Jawi)"},Jt=[{key:"worksheet",text:"ใบงาน/ใบกิจกรรม",imageFormat:"กระดาษ A4 แนวตั้ง พร้อมพิมพ์แจกนักเรียนได้จริง",imageContent:"ใบงาน/ใบกิจกรรมที่มีคำสั่งชัดเจนและเว้นที่ว่างให้กรอกคำตอบ"},{key:"slides",text:"โครงร่างสไลด์นำเสนอ",imageFormat:"สไลด์นำเสนอ อัตราส่วน 16:9",imageContent:"สไลด์นำเสนอแต่ละแผ่น มีข้อความหลักและภาพประกอบที่เหมาะกับเนื้อหาคาบนี้"},{key:"questions",text:"คำถามกระตุ้นความคิด/อภิปราย",imageFormat:"โปสเตอร์/การ์ดคำถามขนาด A4 สำหรับติดในห้องเรียนหรือเปิดฉาย",imageContent:"คำถามกระตุ้นความคิดอย่างน้อย 5 ข้อ เรียงลำดับจากง่ายไปยาก จัดวางให้อ่านง่ายน่าสนใจ"},{key:"rubric",text:"เกณฑ์ให้คะแนน (Rubric)",imageFormat:"ตารางขนาด A4 จัดวางเป็นตารางอ่านง่าย",imageContent:"เกณฑ์การให้คะแนน (Rubric) แบบ 4 ระดับคุณภาพ พร้อมคำอธิบายแต่ละระดับ"},{key:"game",text:"เกม/กิจกรรมเสริมท้ายคาบ",imageFormat:"การ์ด/กระดานกิจกรรมขนาด A4 พร้อมพิมพ์ใช้งานได้จริง",imageContent:"อุปกรณ์/การ์ดเกมหรือกระดานกิจกรรมเสริมท้ายคาบ เพื่อทบทวนเนื้อหา ใช้เวลาไม่เกิน 10 นาที"}],ro={บรรยาย:[],กิจกรรมกลุ่ม:["worksheet","rubric","game"],โครงงานเป็นฐาน:["worksheet","rubric","questions"],สืบเสาะหาความรู้:["questions","worksheet"],other:[]};function lo({subjectName:e,subjectCode:n,gradeLevel:r,className:p,studentCount:B,avgPct:C,topic:N,format:A,periods:g,minutesPerPeriod:D,isReligionSubj:q,mediaItems:Z,langKey:b,langLabel:T}){const K=g*D,P=g>1?`${g} คาบต่อเนื่อง (คาบละ ${D} นาที รวม ${K} นาที)`:`1 คาบ (${D} นาที)`,re=b==="ms-jawi"?" (เขียนด้วยอักขระยาวี Jawi เท่านั้น ห้ามใช้อักษรรูมี)":"",ne=q?["คุณคือผู้ช่วยครูอิสลามศึกษาไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรอิสลามศึกษา พุทธศักราช 2551"]:["คุณคือผู้ช่วยครูไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551 (ฉบับปรับปรุง พ.ศ. 2560)"];return ne.push("","บริบทวิชา:",`- วิชา: ${e} (รหัส ${n})`,`- ระดับชั้น: ${r}   ห้อง: ${p}`,`- จำนวนนักเรียน: ${B} คน`),C!=null&&ne.push(`- คะแนนเฉลี่ยสะสมของห้องนี้ในขณะนี้: ${C}% (ใช้พิจารณาความยาก-ง่ายของกิจกรรม)`),ne.push("",`หัวข้อที่จะสอนคาบนี้: ${N}`,`รูปแบบการสอนที่ต้องการ: ${A}`,`ระยะเวลา: ${P}`,"",`คำสั่งต่อไปนี้เขียนเป็นภาษาไทยเพื่อให้คุณเข้าใจชัดเจน แต่เนื้อหาที่สร้างขึ้นจริงทั้งหมด (แผนการสอน, ใบงาน, สื่อ, ข้อความในภาพ) ต้องเป็น${T}${re}`,"","กรุณาออกแบบแผนการจัดการเรียนรู้ที่ประกอบด้วย:","1. จุดประสงค์การเรียนรู้ (ด้านความรู้ K / ทักษะ P / เจตคติ A)","2. สาระสำคัญ (Key Concept)",`3. กิจกรรมการเรียนรู้ แบ่งเป็น 3 ขั้น พร้อมระบุเวลาแต่ละขั้นตอนชัดเจน (รวม ${K} นาที)${g>1?" — หากมีมากกว่า 1 คาบ กรุณาแบ่งกิจกรรมเป็นรายคาบให้ชัดเจน (คาบที่ 1: ..., คาบที่ 2: ...)":""}:`,"   - นำเข้าสู่บทเรียน","   - กิจกรรมหลัก","   - สรุป/wrap-up","4. สื่อ/อุปกรณ์ที่ต้องใช้","5. วิธีการวัดและประเมินผลในคาบ","6. งาน/การบ้าน (ถ้ามี)","7. หมายเหตุสำหรับครู — สิ่งที่ต้องเตรียมหรือระวังเป็นพิเศษ",`8. เขียนคำสั่งสร้างภาพ (Image Generation Prompt) เป็นภาษาไทย แยกไว้ในกล่องโค้ดของตัวเอง สำหรับสร้างภาพสรุปแผนการจัดการเรียนรู้ทั้งหมดนี้ (ข้อความที่ปรากฏจริงในภาพเป็น${T}${re}) ให้อยู่ในภาพเดียวหน้าเดียว (One-Page Lesson Plan) ขนาดกระดาษ A4 จัดวางให้อ่านง่าย ครบทุกหัวข้อสำคัญ (จุดประสงค์, สาระสำคัญ, กิจกรรม 3 ขั้น, สื่อ/อุปกรณ์, การวัดประเมินผล) ก่อนกล่องโค้ดนี้ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง`,"","หมายเหตุสำคัญ: หากเนื้อหาวิชานี้เกี่ยวข้องกับสมการ สูตร หรือสัญลักษณ์ทางคณิตศาสตร์/วิทยาศาสตร์ กรุณาเขียนด้วยรูปแบบ LaTeX เสมอ (เช่น $y = mx + b$ หรือสมการซับซ้อนใช้ $$...$$) เพื่อให้สมการถูกต้องแม่นยำและอ่านง่าย ห้ามพิมพ์สมการเป็นข้อความธรรมดาที่อาจอ่านผิดเพี้ยน"),Z!=null&&Z.length&&(ne.push("",`สื่อ/เอกสารประกอบเพิ่มเติม (นอกเหนือจากแผนการสอน) — ห้ามเขียนเนื้อหาเป็นข้อความอ่านตรงๆ แต่ให้เขียนเป็น "คำสั่งสร้างภาพ" (Image Generation Prompt) เป็นภาษาไทย สำหรับป้อนให้ AI สร้างรูปภาพต่อ (ข้อความที่ปรากฏจริงในภาพให้เป็น${T}${re}) เพื่อให้ได้ไฟล์ภาพพร้อมใช้งานจริง โดยมีกติกาดังนี้:`,"- แต่ละรายการด้านล่างให้เขียนคำสั่งสร้างภาพแยกเป็นคนละกล่องโค้ด (code block) ต่อ 1 รายการ ไม่ปนกัน","- ออกแบบจำนวนภาพ/หน้าให้เหมาะสมกับเนื้อหา สูงสุดไม่เกิน 10 ภาพต่อกล่องโค้ด 1 กล่อง","- ถ้ารายการใดต้องใช้มากกว่า 10 ภาพ ให้แบ่งเป็นกล่องโค้ดใหม่ต่อจากกัน กล่องละไม่เกิน 10 ภาพ",'- ภายในกล่องโค้ดเดียวกัน ให้ระบุคำสั่งของแต่ละภาพแยกกันให้ครบและชัดเจน (เช่น "ภาพที่ 1: ...", "ภาพที่ 2: ...")',"- แต่ละคำสั่งต้องอธิบายรายละเอียดกราฟิก เค้าโครง และข้อความที่ต้องปรากฏในภาพให้ชัดเจนพอที่ AI สร้างภาพจะสร้างออกมาได้ตรงตามต้องการ","- ก่อนกล่องโค้ดแรกของแต่ละรายการ ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง","","รายการที่ต้องการ:"),Z.forEach((J,ie)=>ne.push(`${ie+1}. ${J.text} — รูปแบบภาพ: ${J.imageFormat} — เนื้อหาที่ต้องปรากฏ: ${J.imageContent}`))),ne.join(`
`)}function et(e){return y(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}function io(e){const n=String(e??"").split(`
`);let r="",p=!1,B=[],C=null;const N=()=>{C&&(r+=`</${C}>`,C=null)};for(const A of n){const g=A.replace(/\r$/,"");if(g.trim().startsWith("```")){p?(r+=`<pre>${y(B.join(`
`))}</pre>`,B=[],p=!1):(N(),p=!0);continue}if(p){B.push(g);continue}const D=g.match(/^(#{1,3})\s+(.*)$/);if(D){N();const b=D[1].length;r+=`<h${b}>${et(D[2])}</h${b}>`;continue}const q=g.match(/^\s*[-*]\s+(.*)$/);if(q){C!=="ul"&&(N(),r+="<ul>",C="ul"),r+=`<li>${et(q[1])}</li>`;continue}const Z=g.match(/^\s*\d+[.)]\s+(.*)$/);if(Z){C!=="ol"&&(N(),r+="<ol>",C="ol"),r+=`<li>${et(Z[1])}</li>`;continue}N(),r+=g.trim()?`<p>${et(g)}</p>`:"<p>&nbsp;</p>"}return N(),p&&B.length&&(r+=`<pre>${y(B.join(`
`))}</pre>`),r}function Xt(e){return String(e??"").replace(/[\\/:*?"<>|]/g," ").trim().slice(0,60)||"เอกสาร"}function co(e,n){const p=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>แผนการจัดการเรียนรู้</title>
    <style>
      body{font-family:'TH Sarabun New','Angsana New',Tahoma,sans-serif;font-size:16pt;line-height:1.6;}
      h1{font-size:22pt;} h2{font-size:19pt;} h3{font-size:17pt;}
      pre{font-family:'Courier New',monospace;font-size:12pt;background:#f5f5f5;padding:10px;border:1px solid #ccc;white-space:pre-wrap;}
    </style></head><body>${io(e)}</body></html>`,B=new Blob(["\uFEFF",p],{type:"application/msword"}),C=URL.createObjectURL(B),N=document.createElement("a");N.href=C,N.download=n,document.body.appendChild(N),N.click(),N.remove(),URL.revokeObjectURL(C)}async function _s(e,n,r,p){var ie;(ie=document.getElementById("prompt-gen-modal"))==null||ie.remove();const B=(r==null?void 0:r.master_subjects)??{},C=window._pp5DonorTierIndex??0,N=ao(p),A=["AGM","AGMVOC"].includes(B.subject_group),g=p==null?void 0:p.freePromptAiLimit;let D=1;if(g!==void 0&&g!==""){const x=parseInt(g,10);Number.isFinite(x)&&(D=x)}const q=parseInt(localStorage.getItem("pp5_free_promptai_count")||"0",10),Z=D>0&&q<D,b=C<N,T=document.createElement("div");if(T.id="prompt-gen-modal",T.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4",b&&!Z){T.innerHTML=`
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="pg-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-800 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${N}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">✍️ ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว<br>ทดลองใช้ฟรีครบ ${D} ครั้งแล้ว<br>สนับสนุนโครงการเพื่อใช้งานต่อแบบไม่จำกัด</p>
        <button id="pg-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`,document.body.appendChild(T),T.querySelector("#pg-close").addEventListener("click",()=>T.remove()),T.querySelector("#pg-upgrade").addEventListener("click",()=>{var x;T.remove(),(x=document.getElementById("btn-donate-float"))==null||x.click()}),T.addEventListener("click",x=>{x.target===T&&T.remove()});return}T.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-fade">
      <div class="flex items-center gap-3 px-6 pt-6 pb-3 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">✍️ สร้าง Prompt สำหรับ AI</h3>
          <p class="text-xs text-gray-400 mt-0.5">นำ Prompt ที่ได้ไปวางใน ChatGPT / Gemini / Claude ของคุณครูเองได้เลย</p>
          ${b?`<span class="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">✨ ทดลองใช้งานฟรี (ครั้งที่ ${q+1}/${D})</span>`:""}
        </div>
        <button id="pg-close" class="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      </div>
      <div class="px-6 pb-6 overflow-y-auto" id="pg-body">
        <div class="flex justify-center py-10 text-gray-400 text-sm">กำลังโหลดข้อมูลห้องเรียน...</div>
      </div>
    </div>`,document.body.appendChild(T),T.querySelector("#pg-close").addEventListener("click",()=>T.remove()),T.addEventListener("click",x=>{x.target===T&&T.remove()});const K=T.querySelector("#pg-body");let P=0,re=null;try{const[x,j]=await Promise.all([De(n).catch(()=>[]),Js(n).catch(()=>({columns:[],scores:[]}))]);P=x.length;const v=(j.columns??[]).reduce((W,R)=>W+(R.max_score??0),0);if(v>0&&P>0){const W=(j.scores??[]).reduce((R,s)=>R+(s.final_score??0),0);re=Math.round(W/P/v*100)}}catch{}const ne=()=>{K.innerHTML=`
      <div class="bg-gray-50 rounded-2xl p-4 mb-4 text-xs text-gray-600 space-y-1">
        <p><strong class="text-gray-800">${y(B.subject_name??"—")}</strong> (${y(B.subject_code??"—")})</p>
        <p>ระดับชั้น ${y(B.grade_level??"—")} · ห้อง ${y(r.class_name??"—")} · นักเรียน ${P} คน</p>
        ${re!=null?`<p>คะแนนเฉลี่ยสะสมปัจจุบัน: <strong class="text-emerald-600">${re}%</strong></p>`:""}
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">หัวข้อที่จะสอนคาบนี้ <span class="text-red-400">*</span></label>
          <textarea id="pg-topic" rows="2" class="${Ce} resize-none" placeholder="เช่น สมการกำลังสอง, การสังเคราะห์แสง"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">รูปแบบการสอนที่ต้องการ</label>
          <select id="pg-format" class="${_t}">
            ${Wt.map(R=>`<option value="${R.value}">${y(R.label)}</option>`).join("")}
          </select>
          <input id="pg-format-other" class="${Ce} mt-2 hidden" placeholder="พิมพ์รูปแบบที่ต้องการ" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">จำนวนคาบ</label>
            <input id="pg-periods" type="number" min="1" max="10" value="1" class="${Ce}" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">นาทีต่อคาบ</label>
            <input id="pg-minutes" type="number" min="10" max="180" value="50" class="${Ce}" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">สื่อ/เอกสารประกอบที่ต้องการให้ AI ช่วยออกแบบเพิ่มเติม (เลือกได้หลายรายการ)</label>
          <p class="text-xs text-gray-400 mb-1.5">รายการที่เลือกจะได้เป็น "คำสั่งสร้างภาพ" ให้นำไปวางในโหมดสร้างรูปภาพของ AI ต่อ (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง</p>
          <div id="pg-media" class="space-y-1.5">
            ${Jt.map(R=>`
              <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" class="pg-media-cb rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" value="${R.key}" />
                ${y(R.text)}
              </label>`).join("")}
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">ภาษาที่ต้องการให้ AI ตอบ</label>
          <select id="pg-lang" class="${_t}">
            ${Object.entries(Kt).map(([R,s])=>`<option value="${R}">${y(s)}</option>`).join("")}
          </select>
        </div>
        <button id="pg-generate" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">
          ✨ สร้าง Prompt
        </button>
      </div>`;const x=K.querySelector("#pg-format"),j=K.querySelector("#pg-format-other"),v=()=>[...K.querySelectorAll(".pg-media-cb")],W=()=>{const R=ro[x.value]??[];v().forEach(s=>{s.checked=R.includes(s.value)})};W(),x.addEventListener("change",()=>{j.classList.toggle("hidden",x.value!=="other"),W()}),K.querySelector("#pg-generate").addEventListener("click",()=>{var k;const R=K.querySelector("#pg-topic").value.trim();if(!R){F("กรุณาระบุหัวข้อที่จะสอนก่อนครับ","warning");return}const s=x.value==="other"?j.value.trim()||"ไม่ระบุ":((k=Wt.find(S=>S.value===x.value))==null?void 0:k.label)??x.value,o=Math.max(1,parseInt(K.querySelector("#pg-periods").value,10)||1),t=Math.max(1,parseInt(K.querySelector("#pg-minutes").value,10)||50),i=v().filter(S=>S.checked).map(S=>Jt.find($=>$.key===S.value)).filter(Boolean),_=K.querySelector("#pg-lang").value,I=Kt[_],O=lo({subjectName:B.subject_name??"—",subjectCode:B.subject_code??"—",gradeLevel:B.grade_level??"—",className:r.class_name??"—",studentCount:P,avgPct:re,topic:R,format:s,periods:o,minutesPerPeriod:t,isReligionSubj:A,mediaItems:i,langKey:_,langLabel:I});b&&localStorage.setItem("pp5_free_promptai_count",String(q+1)),J(O,R)})},J=(x,j)=>{K.innerHTML=`
      <p class="text-xs text-gray-500 mb-2">คัดลอกข้อความด้านล่างไปวางใน ChatGPT / Gemini / Claude ของคุณครูได้เลยครับ</p>
      <textarea id="pg-output" readonly rows="14" class="w-full text-xs font-mono border border-gray-200 rounded-2xl p-3 bg-gray-50 text-gray-700 resize-none">${y(x)}</textarea>
      <div class="flex gap-2 mt-3">
        <button id="pg-copy" class="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">📋 คัดลอก Prompt</button>
        <button id="pg-back" class="px-4 py-3 rounded-2xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition">← แก้ไข</button>
      </div>
      <div class="mt-5 pt-4 border-t border-gray-100">
        <p class="text-xs font-semibold text-gray-700 mb-1">📄 ขั้นตอนถัดไป (ถ้าต้องการ): ดาวน์โหลดเป็นไฟล์ Word</p>
        <p class="text-xs text-gray-400 mb-2">พอ AI ตอบกลับมาแล้ว วางคำตอบทั้งหมดที่ได้ลงในช่องนี้ แล้วกดดาวน์โหลด — จะได้ไฟล์ Word (.doc) ที่เปิดแก้ไขต่อได้เลย</p>
        <textarea id="pg-ai-response" rows="8" class="${Ce} resize-y font-mono text-xs" placeholder="วางคำตอบจาก ChatGPT / Gemini / Claude ที่นี่..."></textarea>
        <button id="pg-download-word" class="w-full mt-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition">📄 ดาวน์โหลดเป็นไฟล์ Word (.doc)</button>
      </div>`,K.querySelector("#pg-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(x),F("คัดลอก Prompt แล้วครับ","success")}catch{F("คัดลอกไม่สำเร็จ กรุณาเลือกข้อความแล้วคัดลอกเองครับ","error")}}),K.querySelector("#pg-back").addEventListener("click",ne),K.querySelector("#pg-download-word").addEventListener("click",()=>{const v=K.querySelector("#pg-ai-response").value.trim();if(!v){F("กรุณาวางคำตอบจาก AI ก่อนดาวน์โหลดครับ","warning");return}const W=`แผนการสอน_${Xt(B.subject_code)}_${Xt(j)}.doc`;co(v,W),F("ดาวน์โหลดไฟล์ Word แล้วครับ","success")})};ne()}async function po(e,n,r,p={}){return _s(e,n,r,p)}async function $s(e,n,r,p){var ae,l;const B=(ae=window._pp5SystemCfg)==null?void 0:ae.freeRandomPickerLimit;let C=1;if(B!==void 0&&B!==""){const h=parseInt(B,10);Number.isFinite(h)&&(C=h)}(l=document.getElementById("random-picker-modal"))==null||l.remove();const N=()=>{ne.innerHTML=`
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="rp-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-700 text-lg">สิทธิ์สุ่มทดลองใช้งานครบแล้ว</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สุ่มรายชื่อและจัดกลุ่มจำกัดการทดลองสุ่มฟรี ${C} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
        <button id="rp-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,ne.querySelector("#rp-paywall-close").addEventListener("click",()=>ne.remove()),ne.querySelector("#rp-upgrade").addEventListener("click",()=>{var h;ne.remove(),(h=document.getElementById("btn-donate-float"))==null||h.click()})};let A;try{A=await Ks(e)}catch{A={mode:"none",picked_student_ids:[]}}let g=A.mode||"none",D=new Set((A.picked_student_ids||[]).map(Number)),q=new Set;const Z=new Map(r.map(h=>[h.id,h]));let b=Array.isArray(A.groups)?A.groups.map(h=>({no:h.no,items:(h.student_ids||[]).map(L=>Z.get(L)).filter(Boolean)})):null,T="pick",K=!1,P=localStorage.getItem("pp5_rp_effect")||"classic";const re=[{key:"classic",icon:"🎯",label:"คลาสสิก"},{key:"grid",icon:"🔦",label:"กริด"},{key:"elimination",icon:"💥",label:"ตัดออก"},{key:"slot",icon:"🎰",label:"สล็อต"}],ne=document.createElement("div");ne.id="random-picker-modal",ne.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",ne.innerHTML=`
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
          <p class="text-white/80 text-xs mt-0.5 truncate">${y(n.class_name||"")} · ทั้งหมด ${r.length} คน</p>
        </div>
        <button id="rp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="pick">🎯 สุ่มรายชื่อ</button>
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="group">👥 สุ่มจัดกลุ่ม</button>
      </div>
      <div id="rp-body" class="p-5 overflow-y-auto flex-1"></div>
    </div>`,document.body.appendChild(ne),ne.addEventListener("click",h=>{h.target===ne&&ne.remove()}),ne.querySelector("#rp-close").addEventListener("click",()=>ne.remove());const J=ne.querySelector("#rp-body"),ie=[...ne.querySelectorAll(".rp-tab")],x=h=>{T=h,ie.forEach(L=>{const a=L.dataset.mode===h;L.className=`rp-tab flex-1 py-2.5 text-sm font-semibold transition ${a?"text-white":"text-gray-500 hover:text-gray-700"}`,L.style.background=a?"linear-gradient(135deg,#f59e0b,#ec4899)":""}),h==="pick"?s():se()};ie.forEach(h=>h.addEventListener("click",()=>{K||x(h.dataset.mode)}));const j=()=>g==="none"?new Set:g==="session"?q:D,v=async h=>{if(g!=="none"){if(g==="session"){q.add(h);return}D.add(h);try{await Bt(e,{mode:g,pickedStudentIds:[...D]})}catch{}}},W=async()=>{D=new Set,q=new Set;try{await Rt(e)}catch{}F("รีเซ็ตการสุ่มแล้ว","success"),T==="pick"&&s()},R=async h=>{if(h!==g){g=h,D=new Set,q=new Set;try{await Bt(e,{mode:h,pickedStudentIds:[]})}catch{}s()}};function s(){const h=j(),L=r.filter(E=>!h.has(E.id)),a=r.length-L.length,c=(E,ee)=>{const U=`hsl(${E.id*47%360},60%,55%)`,G=E.image_url?`<img src="${y(E.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${U}">${y((E.full_name??"?").charAt(0))}</div>`;return`<div class="${ee}" data-id="${E.id}">${G}<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${E.seat_no??""}</div></div>`},u=(E,ee=!1)=>`<div id="rp-reel-${E}" class="rp-reel rounded-2xl border-2 border-gray-200 bg-white" style="width:${ee?104:86}px;height:${ee?148:124}px;flex-shrink:0;"><div class="rp-reel-inner flex flex-col items-center justify-center h-full p-2 gap-1" style="transition:opacity .06s ease;"><div class="flex-1 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-gray-300 text-2xl font-bold">?</div><div class="text-[9px] font-bold text-gray-500 truncate w-full text-center leading-none">—</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">·</div></div></div>`,m=()=>P==="grid"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 text-center pt-3 pb-1.5">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-grid" class="grid gap-1 px-2 pb-2" style="grid-template-columns:repeat(auto-fill,minmax(54px,1fr))">
            ${L.map(E=>c(E,"rp-grid-tile")).join("")}
          </div>
        </div>`:P==="elimination"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <div class="flex items-center justify-between pt-2.5 pb-1 px-3">
            <p id="rp-hint" class="text-xs text-gray-400">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
            <span id="rp-elim-counter" class="text-xs font-bold text-gray-500">${L.length} คน</span>
          </div>
          <div id="rp-elim-grid" class="grid gap-1 px-2 pb-2 overflow-y-auto" style="grid-template-columns:repeat(auto-fill,minmax(48px,1fr));max-height:210px;">
            ${L.map(E=>c(E,"rp-elim-tile")).join("")}
          </div>
        </div>`:P==="slot"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-4 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-4">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div class="flex justify-center items-center gap-2">
            ${u(0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${u(1,!0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${u(2)}
          </div>
        </div>`:`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-6 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-3">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-avatar" class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 items-center justify-center" style="display:none;opacity:0;box-shadow:0 8px 24px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.10);"></div>
          <p id="rp-name" class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2">—</p>
          <p id="rp-code" class="text-xs text-gray-400 mt-1 font-mono"></p>
        </div>`;J.innerHTML=`
      <div class="flex gap-1.5 mb-3">
        ${re.map(E=>`<button class="rp-eff flex-1 py-2 rounded-xl border text-center leading-tight transition ${E.key===P?"border-amber-400 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}" data-eff="${E.key}"><div class="text-base">${E.icon}</div><div class="text-[9px] font-semibold mt-0.5">${E.label}</div></button>`).join("")}
      </div>
      <div class="flex items-center gap-2 mb-3">
        <select id="rp-mode" class="${_t} flex-1 text-xs">
          ${no.map(E=>`<option value="${E.value}" ${E.value===g?"selected":""}>${E.label}</option>`).join("")}
        </select>
        <button id="rp-reset" class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">🔄 รีเซ็ต</button>
      </div>
      ${g!=="none"?`<p id="rp-counter" class="text-[11px] text-gray-400 mb-3">สุ่มไปแล้ว ${a} / ${r.length} คน${L.length===0?" — ครบทุกคนแล้ว!":""}</p>`:""}
      ${m()}
      <button id="rp-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]" style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 สุ่มเลย!</button>`,J.querySelectorAll(".rp-eff").forEach(E=>{E.addEventListener("click",()=>{K||(P=E.dataset.eff,localStorage.setItem("pp5_rp_effect",P),s())})}),J.querySelector("#rp-mode").addEventListener("change",E=>R(E.target.value)),J.querySelector("#rp-reset").addEventListener("click",()=>{K||W()}),J.querySelector("#rp-go").addEventListener("click",()=>o())}function o(){if(K)return;if(!p&&parseInt(localStorage.getItem("pp5_free_random_count")||"0",10)>=C){N();return}let h=r.filter(m=>!j().has(m.id)),L=!1;if(h.length===0){if(g==="manual"){F('สุ่มครบทุกคนแล้ว — กดปุ่ม "รีเซ็ต" เพื่อเริ่มรอบใหม่',"warning");return}h=r,L=g==="cycle"||g==="session"}K=!0;const a=J.querySelector("#rp-go");a.disabled=!0,a.textContent="🎰 กำลังสุ่ม...";const c=h[Math.floor(Math.random()*h.length)],u=async()=>{if(L){D=new Set,q=new Set;try{await Rt(e)}catch{}}if(await v(c.id),!p){const m=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);localStorage.setItem("pp5_free_random_count",String(m+1))}setTimeout(()=>{K=!1;const m=j(),E=r.length-r.filter(G=>!m.has(G.id)).length,ee=J.querySelector("#rp-counter");if(ee){const G=r.length-E;ee.textContent=`สุ่มไปแล้ว ${E} / ${r.length} คน${G===0?" — ครบทุกคนแล้ว!":""}`}const U=J.querySelector("#rp-go");if(U)if(P==="classic")U.disabled=!1,U.textContent="🎲 สุ่มอีกครั้ง";else{U.disabled=!1,U.textContent="🔁 สุ่มใหม่";const G=U.cloneNode(!0);U.replaceWith(G),G.addEventListener("click",()=>s())}},900)};P==="grid"?_(h,c,u):P==="elimination"?I(h,c,u):P==="slot"?O(h,c,u):i(h,c,u)}function t(h,L){h.style.transition="opacity 0.2s ease",h.style.opacity="0",setTimeout(()=>{h.style.borderStyle="solid",h.style.borderColor="#10b981",h.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",h.innerHTML=`<div class="py-5 px-4 text-center">
        <p class="text-xs text-gray-400 mb-3">🎉 ได้คนนี้แหละ!</p>
        <div class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 rp-pop" style="box-shadow:0 8px 24px rgba(0,0,0,.18);">${L.image_url?`<img src="${y(L.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${y((L.full_name??"?").charAt(0))}</div>`}</div>
        <p class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2 rp-pop">${y(L.full_name)}</p>
        <p class="text-xs text-gray-400 mt-1 font-mono">${L.seat_no?`เลขที่ ${L.seat_no}`:""}</p>
      </div>`,h.style.opacity="1",Yt(h)},220)}function i(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-name"),m=J.querySelector("#rp-code"),E=J.querySelector("#rp-hint"),ee=J.querySelector("#rp-avatar");u.classList.remove("rp-pop"),ee==null||ee.classList.remove("rp-pop"),c.style.borderStyle="dashed",c.style.borderColor="#fbbf24",c.style.boxShadow="none";const U=(d,M=!1)=>{ee&&(ee.style.display="flex",ee.style.transition=M?"opacity 0.06s ease":"opacity 0.3s ease",ee.style.opacity="0",setTimeout(()=>{ee.innerHTML=d.image_url?`<img src="${d.image_url}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${(d.full_name??"?").charAt(0)}</div>`,ee.style.opacity="1"},M?30:80))};U(h[Math.floor(Math.random()*h.length)],!0);let G=0,oe=55;const f=()=>{const d=h[Math.floor(Math.random()*h.length)];u.textContent=d.full_name,m.textContent=d.seat_no?`เลขที่ ${d.seat_no}`:"",U(d,!0),G++,G<26?(oe=Math.min(oe*1.13,420),setTimeout(f,oe)):(u.textContent=L.full_name,m.textContent=L.seat_no?`เลขที่ ${L.seat_no}`:"",U(L,!1),ee==null||ee.classList.add("rp-pop"),u.classList.add("rp-pop"),c.style.borderStyle="solid",c.style.borderColor="#10b981",c.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",E&&(E.textContent="🎉 ได้คนนี้แหละ!"),Yt(c),a())};f()}function _(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-hint"),m=J.querySelector("#rp-grid");if(!m)return i(h,L,a);let E=[...m.querySelectorAll(".rp-grid-tile")],ee=E.find(d=>Number(d.dataset.id)===L.id);if(!ee){const d=`hsl(${L.id*47%360},60%,55%)`,M=Math.floor(Math.random()*E.length);E[M].dataset.id=L.id,E[M].innerHTML=(L.image_url?`<img src="${y(L.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${d}">${y((L.full_name??"?").charAt(0))}</div>`)+`<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${L.seat_no??""}</div>`,ee=E[M]}u&&(u.textContent="กำลังสุ่ม..."),c.style.borderColor="#fbbf24";let U=null,G=0,oe=38;const f=()=>{U==null||U.classList.remove("rp-active");const d=E[Math.floor(Math.random()*E.length)];d.classList.add("rp-active"),U=d,G++,G<36?(oe=Math.min(oe*1.1,520),setTimeout(f,oe)):(U==null||U.classList.remove("rp-active"),ee.classList.add("rp-winner"),u&&(u.textContent=`🎉 ที่ ${L.seat_no??""} ${L.full_name}`),ee.scrollIntoView({behavior:"smooth",block:"nearest"}),setTimeout(()=>{t(c,L),a()},900))};f()}function I(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-hint"),m=J.querySelector("#rp-elim-grid"),E=J.querySelector("#rp-elim-counter");if(!m)return i(h,L,a);u&&(u.textContent="กำลังตัดออก...");const ee=h.filter(M=>M.id!==L.id).sort(()=>Math.random()-.5),U=ee.length;let G=h.length,oe=0;const f=M=>M<.55?50:M<.8?50+(M-.55)/.25*260:310+Math.pow((M-.8)/.2,2)*1400,d=()=>{if(oe>=U){const V=m.querySelector(`[data-id="${L.id}"]`);V==null||V.classList.remove("rp-last"),V==null||V.classList.add("rp-winner"),V==null||V.scrollIntoView({behavior:"smooth",block:"nearest"}),u&&(u.textContent=`🎉 ที่ ${L.seat_no??""} ${L.full_name}`),E&&(E.textContent="เหลือ 1 คน!"),setTimeout(()=>{t(c,L),a()},900);return}const M=m.querySelector(`[data-id="${ee[oe].id}"]`);M==null||M.classList.remove("rp-last"),M==null||M.classList.add("rp-eliminated"),G--,E&&(E.textContent=`เหลือ ${G} คน`),G<=4&&m.querySelectorAll(".rp-elim-tile:not(.rp-eliminated)").forEach(V=>V.classList.add("rp-last")),oe++,setTimeout(d,f(oe/(U||1)))};d()}function O(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-hint"),m=[J.querySelector("#rp-reel-0"),J.querySelector("#rp-reel-1"),J.querySelector("#rp-reel-2")];if(!m[0])return i(h,L,a);u&&(u.textContent="กำลังหมุน..."),c.style.borderColor="#fbbf24";const E=[h[Math.floor(Math.random()*h.length)],L,h[Math.floor(Math.random()*h.length)]],ee=[18,28,22],U=[!1,!1,!1],G=(M,V)=>{const Y=M.querySelector(".rp-reel-inner");Y&&(Y.style.opacity="0",setTimeout(()=>{const w=`hsl(${V.id*47%360},60%,55%)`;Y.innerHTML=`<div class="flex-1 w-full rounded-xl overflow-hidden">${V.image_url?`<img src="${y(V.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-xl" style="background:${w}">${y((V.full_name??"?").charAt(0))}</div>`}</div><div class="text-[9px] font-bold text-gray-600 truncate w-full text-center leading-none mt-1">${y(V.full_name)}</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">${V.seat_no?`ที่ ${V.seat_no}`:"·"}</div>`,Y.style.opacity="1"},30))};let oe=0,f=50;const d=()=>{oe++,m.forEach((M,V)=>{U[V]||(oe===ee[V]?(U[V]=!0,setTimeout(()=>{G(M,E[V]),M.classList.add(V===1?"rp-winner-reel":"rp-locked"),V===1&&(u&&(u.textContent="🎉 ได้คนนี้แหละ!"),setTimeout(()=>{t(c,L),a()},900))},200)):G(M,h[Math.floor(Math.random()*h.length)]))}),U[1]||(f=oe<12?50:Math.min(50*Math.pow(1.09,oe-12),450),setTimeout(d,f))};d()}const k=["#f59e0b","#ec4899","#6366f1","#10b981","#06b6d4","#ef4444","#8b5cf6","#f97316"],S=()=>{const h=b.map(L=>({no:L.no,student_ids:L.items.map(a=>a.id)}));fn(e,h).catch(()=>{})},$=(h,L)=>{const a=Number(h);let c=null;if(b.forEach(u=>{const m=u.items.findIndex(E=>E.id===a);m!==-1&&(c=u.items.splice(m,1)[0])}),c||(c=Z.get(a)),!!c){if(L){const u=b.find(m=>m.no===L);u&&u.items.push(c)}X(),S()}};function X(){const h=new Set(b.flatMap(u=>u.items.map(m=>m.id))),L=r.filter(u=>!h.has(u.id)),a=(u,m)=>`
      <div class="relative">
        <select data-move="${u.id}" class="w-full appearance-none text-xs font-medium border border-gray-200 rounded-xl pl-3 pr-7 py-1.5 bg-gray-50 text-gray-600 hover:border-gray-300 focus:border-indigo-400 focus:bg-white outline-none transition cursor-pointer">
          <option value="0" ${m===0?"selected":""}>ยังไม่จัดกลุ่ม</option>
          ${b.map(E=>`<option value="${E.no}" ${E.no===m?"selected":""}>ย้ายไปกลุ่มที่ ${E.no}</option>`).join("")}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[9px]">▾</span>
      </div>`,c=(u,m,E)=>`
      <div class="py-1.5 px-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2.5 min-w-0">
          ${u.image_url?`<img src="${y(u.image_url)}" class="w-8 h-11 rounded-xl object-cover flex-shrink-0" style="box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;" />`:`<div class="w-8 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style="background:linear-gradient(160deg,${E},${E}cc);box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;">${y((u.full_name??"?").charAt(0))}</div>`}
          <span class="text-sm font-medium text-gray-700 truncate flex-1 min-w-0">${y(u.full_name)}</span>
        </div>
        <div class="mt-1.5 pl-[calc(2rem+0.625rem)]">${a(u,m)}</div>
      </div>`;J.innerHTML=`
      <div class="flex items-center justify-between gap-2 mb-1 px-0.5">
        <p class="text-xs text-gray-400 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>บันทึกอัตโนมัติทุกการเปลี่ยนแปลง
        </p>
        <button id="rp-group-regen" class="px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">🎲 จัดกลุ่มใหม่</button>
      </div>
      ${L.length?`
      <div class="mt-3 rounded-2xl border border-amber-200/70 p-3.5" style="background:linear-gradient(135deg,#fffbeb,#fff7ed);">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] flex-shrink-0">!</span>
          <p class="text-xs font-bold text-amber-700">ยังไม่ได้จัดกลุ่ม (${L.length} คน)</p>
        </div>
        <div>${L.map(u=>c(u,0,"#94a3b8")).join("")}</div>
      </div>`:""}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
        ${b.map((u,m)=>{const E=k[m%k.length];return`
          <div class="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
            <div class="px-3.5 py-2.5 text-white flex items-center justify-between" style="background:linear-gradient(135deg,${E},${E}dd);">
              <span class="text-sm font-bold flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center text-xs font-extrabold flex-shrink-0">${u.no}</span>
                กลุ่มที่ ${u.no}
              </span>
              <span class="text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full flex-shrink-0">${u.items.length} คน</span>
            </div>
            <div class="p-2.5 divide-y divide-gray-50">
              ${u.items.length?u.items.map(ee=>c(ee,u.no,E)).join(""):`
                <div class="flex flex-col items-center justify-center py-6 text-gray-300">
                  <span class="text-2xl mb-1">🪄</span>
                  <span class="text-xs">ยังไม่มีใครในกลุ่มนี้</span>
                </div>`}
            </div>
          </div>`}).join("")}
      </div>
    `,J.querySelector("#rp-group-regen").addEventListener("click",async()=>{await dt({title:"จัดกลุ่มใหม่?",message:"การจัดกลุ่มปัจจุบันจะถูกล้างทั้งหมด แล้วเริ่มสุ่มใหม่",confirmText:"จัดกลุ่มใหม่"})&&(b=null,gn(e).catch(()=>{}),z())}),J.querySelectorAll("[data-move]").forEach(u=>{u.addEventListener("change",()=>$(u.dataset.move,Number(u.value)))})}function z(){let h="all",L=null,a=new Set(r.map(f=>f.id)),c="count";const u=()=>h==="present"?L?r.filter(f=>L.has(f.id)):[]:h==="manual"?r.filter(f=>a.has(f.id)):r;J.innerHTML=`
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
    `;const m=f=>{const d=[...f];for(let M=d.length-1;M>0;M--){const V=Math.floor(Math.random()*(M+1));[d[M],d[V]]=[d[V],d[M]]}return d},E=(f,d)=>{const M=m(f);if(!M.length)return[];if(c==="count"){const w=Math.min(d,M.length),te=Array.from({length:w},()=>[]);return M.forEach((H,Q)=>te[Q%w].push(H)),te}const V=Math.min(d,M.length),Y=[];for(let w=0;w<M.length;w+=V)Y.push(M.slice(w,w+V));return Y},ee=()=>{const f=u(),M=new Set(f.map(te=>te.gender).filter(Boolean)).size>1,V=J.querySelector("#rp-count-section");V.innerHTML=`
        <div class="flex items-center gap-2 mb-3">
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="count">📦 กำหนดจำนวนกลุ่ม</button>
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="size">👤 กำหนดคนต่อกลุ่ม</button>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <input id="rp-gnum" type="number" min="1" max="${Math.max(1,f.length)}" value="4"
            class="${Ce} w-24 flex-shrink-0 text-center font-bold text-lg" />
          <span id="rp-gnum-label" class="text-xs text-gray-400">กลุ่ม (จากทั้งหมด ${f.length} คน)</span>
        </div>
        ${M?`
        <label class="flex items-start gap-2.5 mb-4 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 cursor-pointer">
          <input id="rp-gender-split" type="checkbox" class="mt-0.5 w-4 h-4 rounded accent-pink-500" />
          <span class="text-xs text-gray-600 leading-relaxed">⚧ <strong>แยกกลุ่มตามเพศ</strong> — แต่ละกลุ่มจะมีนักเรียนเพศเดียวกันเท่านั้น (ไม่ติ๊ก = คละเพศได้ในกลุ่มเดียวกัน)</span>
        </label>`:""}
      `;const Y=[...V.querySelectorAll(".rp-gmode-btn")],w=te=>{c=te,Y.forEach(Q=>{const le=Q.dataset.gmode===te;Q.className=`rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${le?"border-pink-300 bg-pink-50 text-pink-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`});const H=V.querySelector("#rp-gnum-label");H.textContent=te==="count"?`กลุ่ม (จากทั้งหมด ${f.length} คน)`:`คน/กลุ่ม (จากทั้งหมด ${f.length} คน)`,V.querySelector("#rp-gnum").value=4};Y.forEach(te=>te.addEventListener("click",()=>w(te.dataset.gmode))),w("count")},U=()=>{const f=J.querySelector("#rp-pool-info"),d=u().length;h==="all"?f.textContent=`ทั้งห้อง ${r.length} คน`:h==="present"?f.textContent=L===null?"กำลังโหลดข้อมูลเช็คชื่อวันนี้...":`มาเรียนวันนี้ ${d} คน${d===0?" (ยังไม่ได้เช็คชื่อวันนี้ หรือทุกคนขาด/ลา)":""}`:f.textContent=`เลือกไว้ ${d} คน`},G=()=>{const f=J.querySelector("#rp-pool-manual-list");f.innerHTML=`
        <div class="flex justify-end gap-2 mb-1.5">
          <button id="rp-manual-all" type="button" class="text-[11px] text-indigo-500 hover:underline">เลือกทั้งหมด</button>
          <button id="rp-manual-none" type="button" class="text-[11px] text-gray-400 hover:underline">ไม่เลือกเลย</button>
        </div>
        ${r.map(d=>`
          <label class="flex items-center gap-2 py-1 px-1 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="checkbox" class="rp-manual-cb w-3.5 h-3.5 rounded" data-sid="${d.id}" ${a.has(d.id)?"checked":""} />
            <span class="text-xs text-gray-700 truncate">${y(d.full_name)}</span>
          </label>
        `).join("")}
      `,f.querySelector("#rp-manual-all").addEventListener("click",()=>{a=new Set(r.map(d=>d.id)),G(),U(),ee()}),f.querySelector("#rp-manual-none").addEventListener("click",()=>{a=new Set,G(),U(),ee()}),f.querySelectorAll(".rp-manual-cb").forEach(d=>{d.addEventListener("change",()=>{const M=parseInt(d.dataset.sid,10);d.checked?a.add(M):a.delete(M),U(),ee()})})},oe=async f=>{if(h=f,J.querySelectorAll(".rp-pool-btn").forEach(d=>{const M=d.dataset.pool===f;d.className=`rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${M?"border-amber-300 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`}),J.querySelector("#rp-pool-manual-list").classList.toggle("hidden",f!=="manual"),f==="manual"&&G(),f==="present"&&L===null){U();try{const d=new Date(Date.now()+252e5).toISOString().slice(0,10),M=await bn(e,d);L=new Set(M.filter(V=>V.status==="present"||V.status==="late").map(V=>V.student_id))}catch{L=new Set}}U(),ee()};J.querySelectorAll(".rp-pool-btn").forEach(f=>f.addEventListener("click",()=>oe(f.dataset.pool))),oe("all"),J.querySelector("#rp-group-go").addEventListener("click",()=>{var w;if(!p){const te=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);if(te>=C){N();return}localStorage.setItem("pp5_free_random_count",String(te+1))}const f=u();if(!f.length){F("ยังไม่มีนักเรียนในกลุ่มที่เลือกไว้","warning");return}const d=Math.max(1,parseInt(J.querySelector("#rp-gnum").value,10)||1),M=!!((w=J.querySelector("#rp-gender-split"))!=null&&w.checked);let V;M?V=[f.filter(te=>te.gender==="ชาย"),f.filter(te=>te.gender==="หญิง"),f.filter(te=>te.gender!=="ชาย"&&te.gender!=="หญิง")].filter(te=>te.length):V=[f];let Y=1;b=V.flatMap(te=>E(te,d).map(H=>({no:Y++,items:H}))),X(),S()})}function se(){b?X():z()}x("pick")}async function ks(e,n,r,p,B,C,N,A,g="info"){var h,L;(h=document.getElementById("combined-edit-modal"))==null||h.remove();const[D,q,Z,b]=await Promise.all([De(n.id).catch(()=>[]),$e().catch(()=>({})),Ys(n.id).catch(()=>[]),Ws(n.class_name).catch(()=>null)]);let T=Z.map(a=>a.students).filter(Boolean);const K=a=>a?"cem-tab px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px":"cem-tab px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition",P="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200",re=[...new Set(r.map(a=>a.building))].sort(),ne=n.classroom_id?r.find(a=>a.id===n.classroom_id):null,J=B[n.id]??[],ie=["","จ","อ","พ","พฤ","ศ","ส","อา"],x=document.createElement("div");x.id="combined-edit-modal",x.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขห้องเรียน</h3>
        <button id="cem-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <p class="text-xs text-gray-400 px-6 pb-3 flex-shrink-0">${y(((L=n.master_subjects)==null?void 0:L.subject_name)??"")} · ${y(n.class_name??"")}</p>
      <div class="flex border-b border-gray-100 px-6 flex-shrink-0">
        <button class="${K(!0)}" data-cem="info">ข้อมูลพื้นฐาน</button>
        <button class="${K(!1)}" data-cem="schedule">ตารางสอน</button>
        <button class="${K(!1)}" data-cem="room">ห้องสอน</button>
      </div>
      <div id="cem-content" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="px-6 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="cem-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>
    </div>`,document.body.appendChild(x);let j=!1,v=!1,W=null,R=!1;const s=a=>{const c=x.querySelector("#cem-info-status");if(!c)return;const u={dirty:{cls:"text-amber-500",text:"● มีการเปลี่ยนแปลง"},saving:{cls:"text-indigo-500",text:"⏳ กำลังบันทึก..."},saved:{cls:"text-emerald-600",text:"✅ บันทึกแล้ว"},error:{cls:"text-red-500",text:"⚠️ บันทึกไม่สำเร็จ"}},m=u[a]??u.saved;c.className=`text-xs font-medium ${m.cls}`,c.textContent=m.text,c.classList.remove("hidden")},o=async()=>{var a,c,u,m,E,ee,U;if(x.querySelector("#cem-classname")){v=!0,s("saving");try{const G=(a=x.querySelector("#cem-source-class"))==null?void 0:a.value;await at(n.id,{class_name:x.querySelector("#cem-classname").value.trim()||n.class_name,skill_group:x.querySelector("#cem-skillgroup").value.trim()||null,google_sheet_id:x.querySelector("#cem-sheetid").value.trim()||null,head_student_id:x.querySelector("#cem-head").value?Number(x.querySelector("#cem-head").value):null,day1_date:((c=x.querySelector("#cem-day1"))==null?void 0:c.value)||null,day2_date:((u=x.querySelector("#cem-day2"))==null?void 0:u.value)||null,day3_date:((m=x.querySelector("#cem-day3"))==null?void 0:m.value)||null,day4_date:((E=x.querySelector("#cem-day4"))==null?void 0:E.value)||null,day5_date:((ee=x.querySelector("#cem-day5"))==null?void 0:ee.value)||null,day6_date:((U=x.querySelector("#cem-day6"))==null?void 0:U.value)||null,source_class_id:G?Number(G):null}),j=!1,R=!0,s("saved")}catch{s("error")}finally{v=!1}}},t=(a=!1)=>{j=!0,s("dirty"),clearTimeout(W),W=setTimeout(o,a?0:800)},i=()=>{const a=D.map(c=>`<option value="${c.id}" data-code="${y(c.student_code)}" data-img="${y(c.image_url??"")}" data-room="${y(c.main_room??"")}"
         ${Number(n.head_student_id)===Number(c.id)?"selected":""}>
         ${y(c.full_name)} (${y(c.student_code)})</option>`).join("");return`
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง / ระดับชั้น</label>
        <input id="cem-classname" type="text" value="${y(n.class_name??"")}" class="${P}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">กลุ่มทักษะ</label>
        <input id="cem-skillgroup" type="text" value="${y(n.skill_group??"")}" placeholder="เช่น วิชาการ, ภาษา, ชีวิต" class="${P}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">Google Sheet ID</label>
        <input id="cem-sheetid" type="text" value="${y(n.google_sheet_id??"")}" placeholder="ID จาก URL ของ Sheet" class="${P} font-mono" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">หัวหน้าห้อง</label>
        <select id="cem-head" class="${P} bg-white">
          <option value="">— ยังไม่ระบุ —</option>
          ${a}
        </select>
        ${D.length===0?'<p class="text-xs text-amber-500 mt-1">ยังไม่มีนักเรียนในห้อง จึงยังเลือกหัวหน้าไม่ได้</p>':""}
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
          ${[1,2,3,4,5,6].map(c=>`
          <div>
            <p class="text-xs text-gray-400 mb-1">คาบที่ ${c}</p>
            <input id="cem-day${c}" type="date" value="${n[`day${c}_date`]??""}"
              class="w-full border border-gray-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>`).join("")}
        </div>
      </div>
      <!-- ใช้ข้อมูลจากห้องเรียนอื่น -->
      <div class="border-t border-gray-100 pt-3">
        <label class="block text-xs font-semibold text-gray-600 mb-1">🔗 ใช้ข้อมูลจากห้องเรียนอื่น</label>
        <p class="text-xs text-gray-400 mb-2">สำหรับวิชาที่ไม่ได้สอนจริง — ปพ.5 จะดึงการเช็คชื่อและคะแนน (เฉพาะที่กรอกเอง) จากห้องที่เลือก</p>
        <select id="cem-source-class" class="${P} text-xs">
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
          <input id="cem-attendance-delegate" type="checkbox" class="w-5 h-5 flex-shrink-0" ${n.attendance_delegate_enabled?"checked":""} />
        </label>
        <p id="cem-attendance-delegate-status" class="hidden text-xs font-medium mt-1.5"></p>

        <div class="mt-3 space-y-2">
          <div id="cem-delegate-chips" class="flex flex-wrap gap-1.5"></div>
          <div id="cem-delegate-suggest" class="flex flex-wrap gap-1.5"></div>
          <div class="relative">
            <input id="cem-delegate-search" type="text" placeholder="พิมพ์รหัสหรือชื่อนักเรียนในห้องนี้เพื่อเพิ่ม..."
              class="${P} text-xs" autocomplete="off"
              ${D.length===0?"disabled":""} />
            <div id="cem-delegate-results" class="hidden absolute z-20 left-0 right-0 top-full mt-1 max-h-52 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg"></div>
          </div>
          ${D.length===0?'<p class="text-xs text-amber-500">ยังไม่มีนักเรียนในห้อง จึงยังมอบหมายไม่ได้</p>':""}
        </div>
      </div>
      <p id="cem-info-status" class="hidden text-xs font-medium text-emerald-600"></p>
    </div>`},_=new Set(J),I=new Set(J);e!=null&&e.id&&ht(e.id,n.id).then(a=>{const c=x.querySelector("#cem-source-class");if(!c)return;a.forEach(m=>{const E=m.master_subjects,ee=`${(E==null?void 0:E.subject_name)??"?"} (${(E==null?void 0:E.subject_code)??""}) — ${m.class_name} · ${(E==null?void 0:E.credit)??"?"} หน่วยกิต`,U=new Option(ee,m.id,!1,Number(m.id)===Number(n.source_class_id));c.appendChild(U)});const u=m=>{var oe,f;const E=x.querySelector("#cem-source-info");if(!E)return;const ee=a.find(d=>Number(d.id)===Number(m));if(!ee){E.classList.add("hidden");return}const U=((oe=ee.master_subjects)==null?void 0:oe.credit)??1,G=((f=n.master_subjects)==null?void 0:f.credit)??1;U!==G?(E.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${U} / วิชานี้ ${G}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,E.classList.remove("hidden")):E.classList.add("hidden")};n.source_class_id&&u(n.source_class_id),c.addEventListener("change",()=>{u(c.value),t(!0)})}).catch(()=>{});const O={};Object.entries(B).forEach(([a,c])=>{c.forEach(u=>{O[u]||(O[u]=[]),O[u].push(Number(a))})});const k=Object.fromEntries((window._classesFlat??[]).map(a=>[a.id,a])),S=()=>{const a=p.filter(d=>!d.is_free);if(!a.length)return'<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อน</p>';const u=q.hasFriday==="true"?6:5,m=Array.from({length:u},(d,M)=>M),E=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],ee=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50"],U={};a.forEach(d=>{U[`${d.day_of_week}-${d.period_no}`]=d;const M=d.span_periods??1;for(let V=1;V<M;V++)U[`${d.day_of_week}-${d.period_no+V}`]={...d,_secondary:!0}});const G=Object.values(C).sort((d,M)=>d.period_no-M.period_no),oe=d=>I.has(d)?"selected":(O[d]??[]).filter(V=>V!==n.id).length?"other":"none",f=(d,M)=>{const V=d.subject_name?y(d.subject_name):"",Y=d.class_name?y(d.class_name):"";return M==="selected"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
          <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${V}</p>
          ${Y?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${Y}</p>`:""}
        </div>`:M==="other"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
          style="min-height:52px;border-left:3px solid #60a5fa"
          title="คลิกเพื่อเชื่อมร่วมกับ: ${(O[d.id]??[]).filter(H=>H!==n.id).map(H=>{var Q;return((Q=k[H])==null?void 0:Q.class_name)??`ห้อง ${H}`}).join(", ")}">
          <p class="font-bold text-[11px] leading-tight text-blue-600 break-words w-full">${V}</p>
          ${Y?`<p class="text-[10px] text-blue-400 leading-tight w-full">${Y}</p>`:""}
          <p class="text-[9px] text-blue-400 mt-0.5">+เชื่อมร่วม</p>
        </div>`:`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
        bg-white hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400 transition-all"
        style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${V}</p>
        ${Y?`<p class="text-[10px] text-gray-400 leading-tight w-full">${Y}</p>`:""}
      </div>`};return`
      <p class="text-xs text-gray-400 mb-2">คลิกคาบที่ต้องการเชื่อมโยง — กดบันทึกเพื่อยืนยัน</p>
      <div class="overflow-auto rounded-xl border border-gray-100" style="max-height:55vh">
        <table class="w-full text-xs border-collapse" style="min-width:300px">
          <thead class="sticky top-0 z-10">
            <tr class="bg-gray-50">
              <th class="border border-gray-100 px-2 py-2 text-center text-gray-400 w-16 font-medium text-[10px]">คาบ</th>
              ${m.map(d=>`<th class="border border-gray-100 px-1 py-2 text-center font-semibold text-gray-700 text-[11px] ${ee[d]}">${E[d]}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${G.map(d=>{var M;return`
            <tr>
              <td class="border border-gray-100 px-1 py-2 text-center bg-gray-50 align-middle">
                <p class="font-bold text-gray-700 text-[10px]">คาบ ${d.period_no}</p>
                <p class="text-[9px] text-gray-400">${((M=d.start_time)==null?void 0:M.slice(0,5))??""}</p>
              </td>
              ${m.map(V=>{const Y=`${V}-${d.period_no}`,w=U[Y];if(w!=null&&w._secondary)return"";if(!w)return'<td class="border border-gray-100 p-0" style="min-width:56px;height:1px"></td>';const te=w.span_periods??1,H=oe(w.id);return`<td class="border border-gray-100 p-0 cursor-pointer cem-srow"
                  data-sid="${w.id}" data-state="${H}"
                  style="min-width:56px;height:1px" ${te>1?`rowspan="${te}"`:""}>
                  ${f(w,H)}
                </td>`}).join("")}
            </tr>`}).join("")}
          </tbody>
        </table>
      </div>`},$=a=>{const c=parseInt(a.dataset.sid),u=p.find(G=>G.id===c);if(!u)return;const m=(O[c]??[]).filter(G=>G!==n.id),E=I.has(c)?"selected":m.length?"other":"none";a.dataset.state=E;const ee=u.subject_name?y(u.subject_name):"",U=u.class_name?y(u.class_name):"";if(E==="selected")a.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
        <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${ee}</p>
        ${U?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${U}</p>`:""}
      </div>`;else if(E==="other"){const G=m.map(oe=>{var f;return((f=k[oe])==null?void 0:f.class_name)??`ห้อง ${oe}`}).join(", ");a.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${G}">
        <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${ee}</p>
        ${U?`<p class="text-[10px] text-gray-400 leading-tight w-full">${U}</p>`:""}
      </div>`}else a.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-white hover:bg-emerald-50 transition-all" style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${ee}</p>
        ${U?`<p class="text-[9px] text-gray-400 leading-tight">${U}</p>`:""}
      </div>`},X=()=>{x.querySelectorAll(".cem-srow").forEach(a=>{a.addEventListener("click",async()=>{const c=parseInt(a.dataset.sid),u=a.dataset.state,m=p.find(E=>E.id===c);if(m)if(u==="other"){const ee=(O[c]??[]).filter(f=>f!==n.id).map(f=>{var d;return((d=k[f])==null?void 0:d.class_name)??`ห้อง ${f}`}).join(", "),U=C[m.period_no],G=U!=null&&U.start_time?U.start_time.slice(0,5):`คาบ ${m.period_no}`,oe=document.createElement("div");oe.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",oe.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">🔗</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ใช้กับห้องอื่นอยู่</p>
              <p class="text-sm text-gray-500 mb-1">${ie[m.day_of_week]} ${G} · ${y(m.subject_name??"")}</p>
              <p class="text-xs text-gray-500 mb-1">เชื่อมอยู่กับ: <b>${ee}</b></p>
              <p class="text-xs text-emerald-600 mb-4">สามารถเชื่อมร่วมกันได้ เช่น กรณีสอนสองห้องพร้อมกัน</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">เชื่อมร่วมกัน</button>
              </div>
            </div>`,document.body.appendChild(oe),oe.querySelector(".cfm-cancel").addEventListener("click",()=>oe.remove()),oe.querySelector(".cfm-ok").addEventListener("click",async()=>{oe.remove();try{await ot(n.id,c),I.add(c),_.add(c),R=!0,$(a),F(`เชื่อมร่วมกับ ${ee} แล้ว ✅`,"success")}catch(f){F("เชื่อมไม่สำเร็จ: "+ce(f),"error")}})}else if(u==="selected")try{await an(n.id,c),I.delete(c),_.delete(c),R=!0,$(a),F("ยกเลิกการเชื่อมแล้ว","info")}catch(E){F("ยกเลิกไม่สำเร็จ: "+ce(E),"error")}else try{await ot(n.id,c),I.add(c),_.add(c),R=!0,$(a),F("เชื่อมตารางสอนแล้ว ✅","success")}catch(E){F("เชื่อมไม่สำเร็จ: "+ce(E),"error")}})})},z=()=>`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
        <select id="cem-building" class="${P} bg-white">
          <option value="">— ไม่ระบุ —</option>
          ${re.map(a=>`<option value="${a}" ${(ne==null?void 0:ne.building)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
        <select id="cem-room" class="${P} bg-white">
          <option value="">— เลือกอาคารก่อน —</option>
        </select>
      </div>
    </div>`,se=()=>{var te;const a=x.querySelector("#cem-head"),c=x.querySelector("#cem-head-card"),u=()=>{const H=a==null?void 0:a.options[a.selectedIndex];if(!(H!=null&&H.value)){c==null||c.classList.add("hidden");return}const Q=H.text.split(" (")[0],le=H.dataset.img??"";x.querySelector("#cem-head-name").textContent=Q,x.querySelector("#cem-head-code").textContent=`รหัส: ${H.dataset.code??""}`,x.querySelector("#cem-head-room").textContent=H.dataset.room?`ห้อง: ${H.dataset.room}`:"";const de=x.querySelector("#cem-head-avatar");de.innerHTML=le?`<img src="${le}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${Q.charAt(0)}</div>`,c==null||c.classList.remove("hidden")};a==null||a.addEventListener("change",()=>{u(),t(!0)}),a!=null&&a.value&&u();const m=x.querySelector("#cem-attendance-delegate"),E=x.querySelector("#cem-attendance-delegate-status"),ee=(H,Q)=>{E&&(E.textContent=H,E.className=`text-xs font-medium mt-1.5 ${Q}`,E.classList.remove("hidden"))};m==null||m.addEventListener("change",async()=>{const H=m.checked;m.disabled=!0,ee("⏳ กำลังบันทึก...","text-indigo-500"),fe(()=>import("./teacher-views-attendance-delegate-B0qwYYe8.js"),__vite__mapDeps([39,1,2,3,4,14,6,7,15,12,5,8,9,10,11,16,17,18,19,20,21,22,23,24])).then(Q=>Q.toggleAttendanceDelegateForClass(e,n.id,H,le=>{n.attendance_delegate_enabled=le,m.checked=le,ee(le?"✅ เปิดใช้งานแล้ว":"● ปิดใช้งานแล้ว",le?"text-emerald-600":"text-gray-400")}).catch(()=>{m.checked=!H}).finally(()=>{m.disabled=!1,m.checked!==!!n.attendance_delegate_enabled&&(m.checked=!!n.attendance_delegate_enabled)}))});const U=x.querySelector("#cem-delegate-chips"),G=x.querySelector("#cem-delegate-suggest"),oe=x.querySelector("#cem-delegate-search"),f=x.querySelector("#cem-delegate-results"),d=()=>new Set(T.map(H=>H.id)),M=()=>{U&&(U.innerHTML=T.length?T.map(H=>`
          <span class="delegate-chip inline-flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700" data-sid="${H.id}">
            ${H.image_url?`<img src="${y(H.image_url)}" class="w-5 h-5 rounded-full object-cover" />`:`<span class="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center text-[10px]">${y((H.full_name??"?").charAt(0))}</span>`}
            ${y(H.full_name)}
            <button type="button" class="delegate-remove-btn text-emerald-400 hover:text-red-500 ml-0.5" data-sid="${H.id}">✕</button>
          </span>`).join(""):'<p class="text-xs text-gray-300">ยังไม่ได้มอบหมายใคร</p>')},V=()=>{if(!G)return;const H=d(),Q=[],le=(de,ue)=>{if(!de||H.has(Number(de)))return;const xe=D.find(ye=>Number(ye.id)===Number(de));!xe||Q.some(ye=>ye.id===xe.id)||Q.push({id:xe.id,full_name:xe.full_name,label:ue})};le(b==null?void 0:b.head_student_id,"หัวหน้าห้อง"),le(b==null?void 0:b.vice_head_student_id,"รองหัวหน้าห้อง"),le(n.head_student_id,"หัวหน้าห้องในฟอร์มนี้"),G.innerHTML=Q.map(de=>`
        <button type="button" class="delegate-add-suggest-btn inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-xs text-gray-500 hover:border-emerald-300 hover:text-emerald-600" data-sid="${de.id}">
          ➕ ${y(de.full_name)} <span class="text-gray-300">(${y(de.label)})</span>
        </button>`).join("")},Y=async H=>{const Q=D.find(le=>Number(le.id)===Number(H));if(!(!Q||d().has(Q.id))){T=[...T,Q],M(),V();try{await xn(n.id,Q.id)}catch(le){T=T.filter(de=>de.id!==Q.id),M(),V(),F("เพิ่มไม่สำเร็จ: "+ce(le),"error")}}},w=async H=>{const Q=T.find(le=>Number(le.id)===Number(H));T=T.filter(le=>Number(le.id)!==Number(H)),M(),V();try{await mn(n.id,Number(H))}catch(le){Q&&(T=[...T,Q]),M(),V(),F("ลบไม่สำเร็จ: "+ce(le),"error")}};U==null||U.addEventListener("click",H=>{const Q=H.target.closest(".delegate-remove-btn");Q&&w(Q.dataset.sid)}),G==null||G.addEventListener("click",H=>{const Q=H.target.closest(".delegate-add-suggest-btn");Q&&Y(Q.dataset.sid)}),oe==null||oe.addEventListener("input",()=>{const H=oe.value.trim().toLowerCase();if(!H){f.classList.add("hidden"),f.innerHTML="";return}const Q=d(),le=D.filter(de=>!Q.has(de.id)&&(String(de.student_code??"").toLowerCase().includes(H)||String(de.full_name??"").toLowerCase().includes(H))).slice(0,8);f.innerHTML=le.length?le.map(de=>`
          <button type="button" class="delegate-result-btn w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-50 text-xs" data-sid="${de.id}">
            ${de.image_url?`<img src="${y(de.image_url)}" class="w-6 h-6 rounded-full object-cover" />`:'<span class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">👤</span>'}
            <span class="font-semibold text-gray-700">${y(de.full_name)}</span>
            <span class="text-gray-400">${y(de.student_code)}</span>
          </button>`).join(""):'<p class="text-xs text-gray-300 px-3 py-2">ไม่พบนักเรียนที่ตรงกัน</p>',f.classList.remove("hidden")}),f==null||f.addEventListener("click",H=>{const Q=H.target.closest(".delegate-result-btn");Q&&(Y(Q.dataset.sid),oe.value="",f.classList.add("hidden"),f.innerHTML="")}),M(),V(),["cem-classname","cem-skillgroup","cem-sheetid"].forEach(H=>{var Q;(Q=x.querySelector(`#${H}`))==null||Q.addEventListener("input",()=>t())}),[1,2,3,4,5,6].forEach(H=>{var Q;(Q=x.querySelector(`#cem-day${H}`))==null||Q.addEventListener("change",()=>t(!0))}),(te=x.querySelector("#cem-auto-dates"))==null||te.addEventListener("click",async()=>{const H=x.querySelector("#cem-auto-dates"),Q=x.querySelector("#cem-dates-info");H.textContent="⏳",H.disabled=!0;try{const le=parseInt(q.academicYear??2568),de=parseInt(q.semester??1),ue=q.semester_start??q.term_start_date??Ht(new Date),xe=e?await Ve(e.id,le,de).catch(()=>[]):[];if(!xe.length){Q.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",Q.classList.remove("hidden");return}const ye={};xe.filter(ge=>!ge.is_free).forEach(ge=>{const ve=`${ge.subject_name??"?"}|${ge.class_name??""}`;ye[ve]||(ye[ve]={label:`${ge.subject_name??"?"}${ge.class_name?` — ${ge.class_name}`:""}`,entries:[]}),ye[ve].entries.push(ge)});const mt=["อา","จ","อ","พ","พฤ","ศ","ส"],Ae=ge=>{const ve={};return ge.forEach(Ee=>{ve[Ee.day_of_week]||(ve[Ee.day_of_week]=[]),ve[Ee.day_of_week].push(Ee.period_no)}),Object.entries(ve).map(([Ee,Be])=>`${mt[Ee]} คาบ ${Be.join(",")}`).join(" · ")},ke=document.createElement("div");ke.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",ke.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
            <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
              <button class="ce-close text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
              <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
              ${Object.entries(ye).map(([ge,ve])=>`
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
                <input type="radio" name="cem-dates-subj" value="${y(ge)}" class="mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-800">${y(ve.label)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${Ae(ve.entries)}</p>
                </div>
              </label>`).join("")}
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
              <button class="ce-close flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="cem-calc-btn" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
            </div>
          </div>`,document.body.appendChild(ke),ke.querySelectorAll(".ce-close").forEach(ge=>ge.addEventListener("click",()=>ke.remove())),ke.querySelector("#cem-calc-btn").addEventListener("click",()=>{var we;const ge=(we=ke.querySelector('input[name="cem-dates-subj"]:checked'))==null?void 0:we.value;if(!ge){F("กรุณาเลือกวิชาก่อน","warning");return}ke.remove();const ve=ye[ge];if(!ve)return;const Ee=An(ue)??new Date,Be=Ee.getDay(),pe=[];ve.entries.forEach(he=>{const Se=he.span_periods??1;for(let Me=0;Me<Se;Me++)pe.push({dow:he.day_of_week,pno:(he.period_no??0)+Me})}),pe.sort((he,Se)=>{const Me=(he.dow-Be+7)%7,Mt=(Se.dow-Be+7)%7;return Me!==Mt?Me-Mt:he.pno-Se.pno});const me=[];let be=0;for(;me.length<6;){for(const he of pe){const Se=new Date(Ee);if(Se.setDate(Se.getDate()+(he.dow-Be+7)%7+be*7),me.push(Se),me.length>=6)break}be++}me.slice(0,6).forEach((he,Se)=>{const Me=x.querySelector(`#cem-day${Se+1}`);Me&&(Me.value=Ht(he))}),t(!0),Q.textContent=`✅ คำนวณจาก "${ve.label}" — ตรวจสอบและแก้ไขได้`,Q.classList.remove("hidden")})}catch(le){Q.textContent="โหลดตารางไม่สำเร็จ: "+ce(le),Q.classList.remove("hidden")}finally{H.textContent="🗓️ คำนวณจากตารางสอน",H.disabled=!1}})},ae=a=>{if(v){F("กำลังบันทึกข้อมูล รอสักครู่...","warning");return}if(j){F("มีข้อมูลที่ยังไม่ถูกบันทึก กรุณารอระบบบันทึกก่อน","warning");return}x.querySelectorAll(".cem-tab").forEach(u=>{u.className=K(u.dataset.cem===a)});const c=x.querySelector("#cem-content");if(a==="info")c.innerHTML=i(),se();else if(a==="schedule")c.innerHTML=S(),X();else{c.innerHTML=z();const u=c.querySelector("#cem-building"),m=c.querySelector("#cem-room"),E=ee=>{const U=r.filter(G=>G.building===ee);m.innerHTML='<option value="">— เลือกห้อง —</option>'+U.map(G=>`<option value="${G.id}" ${G.id===n.classroom_id?"selected":""}>${G.room_number}${G.name?` — ${G.name}`:""}</option>`).join("")};ne!=null&&ne.building&&E(ne.building),u.addEventListener("change",()=>E(u.value)),m.addEventListener("change",async()=>{const ee=m.value?parseInt(m.value):null;await ns(n.id,ee).catch(()=>{}),R=!0,F("บันทึกห้องสอนแล้ว ✅","success")})}},l=async()=>{(j||v)&&(clearTimeout(W),await o().catch(()=>{})),x.remove(),R&&A&&A()};ae(g),x.querySelectorAll(".cem-tab").forEach(a=>a.addEventListener("click",()=>ae(a.dataset.cem))),x.querySelector("#cem-close").addEventListener("click",l),x.querySelector("#cem-cancel").addEventListener("click",l),x.addEventListener("click",a=>{a.target===x&&l()})}async function uo(e){je("schedule"),Ie("ตารางสอน","schedule");const n=await $e().catch(()=>({})),r=parseInt(n.academicYear??2568),p=parseInt(n.semester??1);await Pe(e,r,p,n)}async function Pe(e,n,r,p=null){var W,R;je("schedule"),Ie("ตารางสอน","schedule");const B=p??await $e().catch(()=>({})),C=B.hasFriday==="true",N=B.scheduleVisionEnabled==="true",A=us(B,e),[g,D,q,Z,b,T]=await Promise.all([pt().catch(()=>[]),e?os(e.id).catch(()=>[]):Promise.resolve([]),e?Ve(e.id,n,r).catch(()=>[]):Promise.resolve([]),e?Et(e.id).catch(()=>[]):Promise.resolve([]),e?St(e.id).catch(()=>[]):Promise.resolve([]),e?ct(e.id).catch(()=>[]):Promise.resolve([])]),K=Object.fromEntries((Z??[]).map(s=>[s.room_key,s.color_hex])),P=Object.fromEntries(T.map(s=>[s.id,s])),re={};b.forEach(s=>{re[s.teacher_schedule_id]||(re[s.teacher_schedule_id]=P[s.class_id])});const ne=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],J=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50","bg-blue-50"],ie=C?6:5,x=Array.from({length:ie},(s,o)=>o),j={};for(const s of q)j[`${s.day_of_week}-${s.period_no}`]=s,(s.span_periods??1)>1&&(j[`${s.day_of_week}-${s.period_no+1}`]={...s,_secondary:!0});const v=(s={},o=null)=>{var i;const t=s!=null&&s.id?re[s.id]:null;return ze({teacherId:e==null?void 0:e.id,className:(t==null?void 0:t.class_name)??s.class_name,subjectName:((i=t==null?void 0:t.master_subjects)==null?void 0:i.subject_name)??s.subject_name??(o==null?void 0:o.subject_name),fallbackId:(t==null?void 0:t.id)??s.subject_id??(o==null?void 0:o.id)},K)};_e(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${r} / ${n} — คลิกช่องเพื่อกำหนดวิชา</p>
      </div>
      <div class="flex gap-2">
        ${N&&A?`
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
            ${x.map(s=>`
            <th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${J[s]}">
              ${ne[s]}
            </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${g.map(s=>{var o,t;return`
          <tr class="hover:bg-gray-50/50">
            <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50">
              <p class="font-bold text-gray-700">คาบ ${s.period_no}</p>
              <p class="text-[10px] text-gray-400">${(o=s.start_time)==null?void 0:o.slice(0,5)}–${(t=s.end_time)==null?void 0:t.slice(0,5)}</p>
            </td>
            ${x.map(i=>{const _=`${i}-${s.period_no}`,I=j[_];if(I!=null&&I._secondary)return"";const O=I?D.find(se=>se.id===I.subject_id):null,k=(I==null?void 0:I.span_periods)??1,S=(I==null?void 0:I.subject_name)??(O==null?void 0:O.subject_name)??null,$=(I==null?void 0:I.class_name)??null,X=(I==null?void 0:I.teacher_name)??null,z=v(I,O);return`<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${i}" data-period="${s.period_no}"
                ${k>1?`rowspan="${k}"`:""}>
                ${S?`
                <div class="w-full h-full rounded-none flex flex-col justify-center items-center
                  gap-1 px-2 py-2 text-center" style="min-height:64px;background:${z.soft};color:${z.text};border-left:4px solid ${z.dot}">
                  <p class="font-extrabold leading-tight text-sm break-words w-full">${S}</p>
                  ${$?`<p class="text-[11px] font-semibold opacity-90 leading-tight w-full">${$}</p>`:""}
                  ${X?`<p class="text-[10px] opacity-65 leading-tight w-full">${X}</p>`:""}
                </div>`:`
                <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style="min-height:52px">
                  <span class="text-indigo-200 text-2xl">＋</span>
                </div>`}
              </td>`}).join("")}
          </tr>`}).join("")}
        </tbody>
      </table>
    </div>

  </div>`),document.querySelectorAll(".schedule-cell").forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.dataset.dow),t=parseInt(s.dataset.period),i=`${o}-${t}`,_=j[i];_!=null&&_._secondary||mo({teacher:e,dow:o,period:t,periods:g,subjects:D,entry:_,academicYear:n,semester:r,roomColorMap:K,onSave:async I=>{await ds({teacher_id:e.id,...I}),await Pe(e,n,r,B)},onDelete:async()=>{_&&await yn(_.id),await Pe(e,n,r,B)}})})}),(W=document.getElementById("btn-clear-schedule"))==null||W.addEventListener("click",async()=>{confirm("ยืนยันล้างตารางสอนทั้งหมด?")&&(await Os(e.id,n,r),await Pe(e,n,r,B),F("ล้างตารางแล้ว","success"))}),(R=document.getElementById("btn-upload-schedule"))==null||R.addEventListener("click",()=>{Ss(e,D,g,n,r,A,B)})}async function mo({teacher:e,dow:n,period:r,periods:p,subjects:B,entry:C,academicYear:N,semester:A,roomColorMap:g={},onSave:D,onDelete:q}){var I,O;(I=document.getElementById("sched-popup"))==null||I.remove();const Z=await as().catch(()=>[]),b=await rs().catch(()=>[]),T=[...new Set([...Z,...b])].sort(),K=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],P=p.map(k=>k.period_no),re=p.find(k=>k.period_no===r),ne=(C==null?void 0:C.subject_name)??(C!=null&&C.subject_id?((O=B.find(k=>k.id===C.subject_id))==null?void 0:O.subject_name)??"":"");let J=ne,ie=(C==null?void 0:C.class_name)??"",x=(C==null?void 0:C.teacher_name)??"",j=ze({teacherId:e==null?void 0:e.id,className:ie,subjectName:ne,fallbackId:C==null?void 0:C.subject_id},g).dot,v=!1;const W=B.map(k=>`<option value="${k.subject_name}">`).join(""),R=T.map(k=>`<option value="${k}">`).join(""),s=K.map((k,S)=>`<option value="${S}">${k}</option>`).join(""),o=P.map(k=>`<option value="${k}">คาบ ${k}</option>`).join("");let t=C?[{day_of_week:C.day_of_week,period_no:C.period_no,span_periods:C.span_periods??1}]:[{day_of_week:n,period_no:r,span_periods:1}];const i=document.createElement("div");i.id="sched-popup",i.className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",document.body.appendChild(i);function _(){var S,$,X;const k=We(j);i.innerHTML=`
      <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">กำหนดวิชา</h3>
            <p class="text-xs text-gray-400">${K[n]} คาบ ${r}${re?` (${(S=re.start_time)==null?void 0:S.slice(0,5)}–${($=re.end_time)==null?void 0:$.slice(0,5)})`:""}</p>
          </div>
          <button id="sp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <!-- Card body -->
        <div class="overflow-auto flex-1 px-5 py-4">
          <div class="border-2 rounded-xl overflow-hidden" style="border-color:${k.dot}">
            <!-- Subject info -->
            <div class="px-4 py-3 flex items-start gap-3" style="background:${k.dot}18">
              <div class="relative flex-shrink-0 mt-0.5">
                <button id="sp-color" type="button"
                  class="w-11 h-11 rounded-full border-4 border-white shadow-md ring-2 ring-gray-200"
                  style="background:${k.dot}" title="เลือกสีรายวิชา"></button>
                ${v?`
                <div class="absolute left-0 top-14 z-[310] w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
                  <p class="text-xs font-bold text-gray-500 mb-2">สีรายวิชา</p>
                  <div class="grid grid-cols-6 gap-2">
                    ${Ye.map(z=>`
                    <button type="button"
                      class="sp-color-option w-8 h-8 rounded-full border-2 ${z.dot.toLowerCase()===j.toLowerCase()?"border-gray-800":"border-white"} shadow-sm"
                      style="background:${z.dot}"
                      data-color="${z.dot}"
                      title="เลือกสี"></button>`).join("")}
                  </div>
                </div>`:""}
              </div>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${y(J)}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${y(ie)}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${y(x)}" placeholder="ชื่อครู (ไม่บังคับ)" />
                  <button id="sp-hide-teacher" type="button" class="text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap">ไม่แสดง</button>
                </div>
              </div>
            </div>
            <!-- Sessions -->
            <div id="sp-sessions" class="px-4 pt-3 pb-2 space-y-1.5">
              ${t.map((z,se)=>`
              <div class="flex items-center gap-1.5 sp-sess-row" data-si="${se}">
                <select class="sp-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${se}">
                  ${s}
                </select>
                <select class="sp-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${se}">
                  ${o}
                </select>
                <select class="sp-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-si="${se}">
                  <option value="1">1 คาบ</option>
                  <option value="2">2 คาบ</option>
                  <option value="3">3 คาบ</option>
                  <option value="4">4 คาบ</option>
                </select>
                <button type="button" class="sp-del-sess text-red-300 hover:text-red-500 text-base" data-si="${se}">✕</button>
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
                style="background:${k.dot}">บันทึก</button>
              ${C?`<button id="sp-delete" type="button"
                class="py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50">ลบ</button>`:""}
            </div>
          </div>
          <datalist id="sp-subj-list">${W}</datalist>
          <datalist id="sp-room-list">${R}</datalist>
        </div>
        <!-- Global cancel -->
        <div class="px-5 pb-5 pt-2 border-t border-gray-100 flex-shrink-0">
          <button id="sp-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`,t.forEach((z,se)=>{const ae=i.querySelector(`.sp-sess-row[data-si="${se}"]`);ae&&(ae.querySelector(".sp-dow").value=z.day_of_week??n,ae.querySelector(".sp-period").value=z.period_no??r,ae.querySelector(".sp-span").value=z.span_periods??1)}),i.querySelector("#sp-close").addEventListener("click",()=>i.remove()),i.querySelector("#sp-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#sp-subj-name").addEventListener("input",z=>{J=z.target.value}),i.querySelector("#sp-class").addEventListener("input",z=>{ie=z.target.value}),i.querySelector("#sp-teacher").addEventListener("input",z=>{x=z.target.value}),i.querySelector("#sp-color").addEventListener("click",()=>{v=!v,_()}),i.querySelector("#sp-hide-teacher").addEventListener("click",()=>{x="",i.querySelector("#sp-teacher").value=""}),i.querySelectorAll(".sp-color-option").forEach(z=>z.addEventListener("click",()=>{j=z.dataset.color,v=!1,_()})),i.querySelectorAll(".sp-dow").forEach(z=>z.addEventListener("change",()=>{t[+z.dataset.si].day_of_week=+z.value})),i.querySelectorAll(".sp-period").forEach(z=>z.addEventListener("change",()=>{t[+z.dataset.si].period_no=+z.value})),i.querySelectorAll(".sp-span").forEach(z=>z.addEventListener("change",()=>{t[+z.dataset.si].span_periods=+z.value})),i.querySelectorAll(".sp-del-sess").forEach(z=>z.addEventListener("click",()=>{t.splice(+z.dataset.si,1),t.length||t.push({day_of_week:n,period_no:r,span_periods:1}),_()})),i.querySelector("#sp-add-sess").addEventListener("click",()=>{t.push({day_of_week:n,period_no:P[0]??r,span_periods:1}),_()}),(X=i.querySelector("#sp-delete"))==null||X.addEventListener("click",async()=>{i.remove(),await q()}),i.querySelector("#sp-save").addEventListener("click",async()=>{var h,L,a,c;const z=i.querySelector("#sp-subj-name").value.trim()||null,se=i.querySelector("#sp-class").value.trim()||null,ae=i.querySelector("#sp-teacher").value.trim()||null,l=((h=B.find(u=>u.subject_name===z))==null?void 0:h.id)??null;if(se||z||l)try{await is({teacher_id:e.id,room_key:ut({className:se,subjectName:z,fallbackId:l}),class_name:se,color_hex:j})}catch(u){F("บันทึกสีไม่ได้: "+ce(u),"warning")}i.remove(),await D({day_of_week:((L=t[0])==null?void 0:L.day_of_week)??n,period_no:((a=t[0])==null?void 0:a.period_no)??r,span_periods:((c=t[0])==null?void 0:c.span_periods)??1,subject_id:l,subject_name:z,class_name:se,teacher_name:ae,note:null,academic_year:N,semester:A})})}_()}async function Ss(e,n,r,p,B,C,N){var ie;(ie=document.getElementById("vision-upload"))==null||ie.remove();const A=await as().catch(()=>[]),g=await rs().catch(()=>[]),D=[...new Set([...A,...g])].sort(),q=e!=null&&e.id?await Et(e.id).catch(()=>[]):[],Z=Object.fromEntries((q??[]).map(x=>[x.room_key,x.color_hex])),b=document.createElement("div");b.id="vision-upload",b.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",b.innerHTML=`
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
    </div>`,document.body.appendChild(b),b.querySelector("#vision-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#vision-close").addEventListener("click",()=>b.remove());let T=null,K="image/jpeg",P=[];const re=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],ne=r.map(x=>x.period_no);function J(){const x=b.querySelector("#vision-groups");if(!x)return;const j=re.map((s,o)=>`<option value="${o}">${s}</option>`).join(""),v=ne.map(s=>`<option value="${s}">คาบ ${s}</option>`).join(""),W=n.map(s=>`<option value="${s.subject_name}">`).join(""),R=D.map(s=>`<option value="${s}">`).join("");x.innerHTML="",P.forEach((s,o)=>{const t=s.color_hex?We(s.color_hex):ze({teacherId:e==null?void 0:e.id,className:s.class_name,subjectName:s.subject_name,fallbackId:s.subject_id},Z),i=document.createElement("div");i.className="border-2 rounded-xl overflow-hidden vg-card",i.style.borderColor=t.dot,i.innerHTML=`
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
                ${Ye.map(_=>`
                <button type="button"
                  class="vg-color-option w-5 h-5 rounded-full border-2 ${_.dot.toLowerCase()===t.dot.toLowerCase()?"border-gray-700":"border-white"} shadow-sm"
                  style="background:${_.dot}"
                  data-gi="${o}"
                  data-color="${_.dot}"
                  title="เลือกสี"></button>`).join("")}
              </div>
            </div>
          </div>
        </div>
        <!-- Sessions -->
        <div class="px-4 pt-3 pb-2 space-y-1.5 vg-sessions" data-gi="${o}">
          ${s.sessions.map((_,I)=>`
          <div class="flex items-center gap-1.5 vs-row" data-gi="${o}" data-si="${I}">
            <select class="vs-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${o}" data-si="${I}">
              ${j}
            </select>
            <select class="vs-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${o}" data-si="${I}">
              ${v}
            </select>
            <select class="vs-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-gi="${o}" data-si="${I}">
              <option value="1">1 คาบ</option>
              <option value="2">2 คาบ</option>
              <option value="3">3 คาบ</option>
              <option value="4">4 คาบ</option>
            </select>
            <button type="button" class="vs-del text-red-300 hover:text-red-500 text-base" data-gi="${o}" data-si="${I}">✕</button>
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
        <datalist id="subj-list-${o}">${W}</datalist>
        <datalist id="room-list-${o}">${R}</datalist>`,x.appendChild(i),s.sessions.forEach((_,I)=>{const O=i.querySelector(`.vs-row[data-gi="${o}"][data-si="${I}"]`);O&&(O.querySelector(".vs-dow").value=_.day_of_week??0,O.querySelector(".vs-period").value=_.period_no??1,O.querySelector(".vs-span").value=_.span_periods??1)})}),x.querySelectorAll(".vg-subj-name").forEach(s=>s.addEventListener("input",()=>{P[+s.dataset.gi].subject_name=s.value})),x.querySelectorAll(".vg-class").forEach(s=>s.addEventListener("input",()=>{P[+s.dataset.gi].class_name=s.value})),x.querySelectorAll(".vg-teacher").forEach(s=>s.addEventListener("input",()=>{P[+s.dataset.gi].teacher_name=s.value})),x.querySelectorAll(".vg-hide-teacher").forEach(s=>s.addEventListener("click",()=>{const o=+s.dataset.gi;P[o].teacher_name="";const t=x.querySelector(`.vg-teacher[data-gi="${o}"]`);t&&(t.value="")})),x.querySelectorAll(".vg-color-option").forEach(s=>s.addEventListener("click",()=>{P[+s.dataset.gi].color_hex=s.dataset.color,J()})),x.querySelectorAll(".vg-del-group").forEach(s=>s.addEventListener("click",()=>{P.splice(+s.dataset.gi,1),J()})),x.querySelectorAll(".vg-save-group").forEach(s=>s.addEventListener("click",async()=>{var _;const o=+s.dataset.gi,t=P[o],i=s.textContent;s.disabled=!0,s.textContent="⏳ กำลังบันทึก...";try{const I=t.color_hex??ze({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},Z).dot;(t.class_name||t.subject_name||t.subject_id)&&await is({teacher_id:e.id,room_key:ut({className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id}),class_name:((_=t.class_name)==null?void 0:_.trim())||null,color_hex:I}).catch(O=>F("บันทึกสีไม่ได้: "+ce(O),"warning")),await Promise.all(t.sessions.map(O=>{var k,S,$;return ds({teacher_id:e.id,subject_id:t.subject_id??null,subject_name:((k=t.subject_name)==null?void 0:k.trim())||null,class_name:((S=t.class_name)==null?void 0:S.trim())||null,teacher_name:(($=t.teacher_name)==null?void 0:$.trim())||null,day_of_week:O.day_of_week,period_no:O.period_no,span_periods:O.span_periods??1,academic_year:p,semester:B})})),s.textContent="✅ บันทึกแล้ว",s.style.background="#16a34a",setTimeout(()=>{const O=t.color_hex?We(t.color_hex):ze({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},Z);s.disabled=!1,s.textContent=i,s.style.background=O.dot},2e3),Pe(e,p,B,N).catch(()=>{})}catch(I){F("บันทึกกลุ่มนี้ไม่สำเร็จ: "+ce(I),"error"),s.disabled=!1,s.textContent=i}})),x.querySelectorAll(".vs-dow").forEach(s=>s.addEventListener("change",()=>{P[+s.dataset.gi].sessions[+s.dataset.si].day_of_week=+s.value})),x.querySelectorAll(".vs-period").forEach(s=>s.addEventListener("change",()=>{P[+s.dataset.gi].sessions[+s.dataset.si].period_no=+s.value})),x.querySelectorAll(".vs-span").forEach(s=>s.addEventListener("change",()=>{P[+s.dataset.gi].sessions[+s.dataset.si].span_periods=+s.value})),x.querySelectorAll(".vs-del").forEach(s=>s.addEventListener("click",()=>{const o=P[+s.dataset.gi];o.sessions.splice(+s.dataset.si,1),o.sessions.length||P.splice(+s.dataset.gi,1),J()})),x.querySelectorAll(".vg-add-session").forEach(s=>s.addEventListener("click",()=>{P[+s.dataset.gi].sessions.push({day_of_week:0,period_no:ne[0]??1,span_periods:1}),J()}))}b.querySelector("#vision-file").addEventListener("change",x=>{const j=x.target.files[0];if(!j)return;K=j.type||"image/jpeg";const v=new FileReader;v.onload=W=>{T=W.target.result.split(",")[1],b.querySelector("#vision-img").src=W.target.result,b.querySelector("#vision-preview").classList.remove("hidden"),b.querySelector("#vision-analyze").disabled=!1,b.querySelector("#vision-label").classList.add("hidden")},v.readAsDataURL(j)}),b.querySelector("#vision-analyze").addEventListener("click",async()=>{var v,W,R,s,o;if(!T)return;const x=b.querySelector("#vision-analyze"),j=b.querySelector("#vision-status");x.disabled=!0,x.textContent="⏳ กำลังวิเคราะห์...",j.textContent="กำลังส่งรูปไป Gemini AI...",j.classList.remove("hidden");try{const t=n.map(se=>`"${se.subject_name}" (id:${se.id})`).join(", "),_=`วิเคราะห์ตารางสอนในภาพนี้อย่างละเอียด
แต่ละช่องในตารางมี 3 ส่วน: บรรทัด1=ชื่อวิชา(ตัวหนาภาษาอังกฤษ), บรรทัด2=ชั้น/ห้องเรียน, บรรทัด3=ชื่อครู
คาบเรียน: ${r.map(se=>{var ae,l;return`คาบ ${se.period_no}: ${(ae=se.start_time)==null?void 0:ae.slice(0,5)}-${(l=se.end_time)==null?void 0:l.slice(0,5)}`}).join(", ")}
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
- ช่องว่างไม่ต้องใส่`,{data:I,error:O}=await cs.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:_,imageBase64:T,imageMimeType:K}});if(O)throw new Error(O.message??"Edge Function error");if(I!=null&&I.error)throw new Error(`Gemini: ${I.error.message??I.error.status}`);const k=((o=(s=(R=(W=(v=I.candidates)==null?void 0:v[0])==null?void 0:W.content)==null?void 0:R.parts)==null?void 0:s[0])==null?void 0:o.text)??"",S=k.match(/```json\s*([\s\S]*?)```/)||k.match(/(\[[\s\S]*?\])/),$=S?S[1]??S[0]:null;if(!$)throw console.error("Raw:",k),new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");P=JSON.parse($).map(se=>({...se,sessions:(se.sessions??[]).map(ae=>({...ae}))})),J(),b.querySelector("#vision-result").classList.remove("hidden"),b.querySelector("#vision-save").classList.remove("hidden");const z=P.reduce((se,ae)=>se+ae.sessions.length,0);j.textContent=`✅ พบ ${P.length} กลุ่มวิชา ${z} คาบ — ตรวจสอบแล้วกด "บันทึก"`}catch(t){console.error("Vision error:",t);const i=t.message??"ไม่ทราบสาเหตุ";j.innerHTML=`
        <span class="text-red-500 font-medium">❌ ${i}</span>
        <br/><span class="text-gray-400 text-xs">ปัญหานี้ต้องให้แอดมินแก้ไข</span>`;const _="vision-err-feedback";if(!b.querySelector(`#${_}`)){const I=document.createElement("button");I.id=_,I.className="mt-2 w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition",I.textContent="📨 แจ้งปัญหานี้ให้แอดมิน",I.addEventListener("click",()=>{var O;b.remove(),(O=window._openFeedbackWidget)==null||O.call(window,`[ตารางสอน AI] ${i}`)}),j.after(I)}}finally{x.disabled=!1,x.textContent="🔍 วิเคราะห์อีกครั้ง"}}),b.querySelector("#vision-add-group").addEventListener("click",()=>{P.push({subject_name:"",class_name:"",teacher_name:"",subject_id:null,sessions:[{day_of_week:0,period_no:ne[0]??1,span_periods:1}]}),b.querySelector("#vision-result").classList.remove("hidden"),b.querySelector("#vision-save").classList.remove("hidden"),J()}),b.querySelector("#vision-save").addEventListener("click",async()=>{b.remove(),await Pe(e,p,B,N)})}async function xo(e,n){var D,q,Z;const r=await $e().catch(()=>({})),p=parseInt(r.academicYear??2568),B=parseInt(r.semester??1),C=r.scheduleVisionEnabled==="true",N=us(r,e);je("schedule"),Ie("สร้างตารางสอน","schedule"),_e(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-violet-400 text-white
                  text-3xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🗓️
      </div>
      <h2 class="text-2xl font-bold text-gray-800">สร้างตารางสอน</h2>
      <p class="text-gray-500 text-sm mt-1">ภาค ${B} / ${p}</p>
    </div>

    ${C&&N?`
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
  </div>`);const A=e?await os(e.id).catch(()=>[]):[],g=await pt().catch(()=>[]);(D=document.getElementById("btn-open-vision"))==null||D.addEventListener("click",()=>{Ss(e,A,g,p,B,N,r)}),(q=document.getElementById("btn-open-grid"))==null||q.addEventListener("click",()=>{Pe(e,p,B,r)}),(Z=document.getElementById("btn-skip-schedule"))==null||Z.addEventListener("click",()=>{n&&n()})}const it=[{group:"ชื่อแท็บภาษา",fields:[["label","ชื่อแท็บ (แสดงบนปุ่มแท็บทุกจุด)"]]},{group:"หัวตาราง",fields:[["tableTitle","ชื่อตาราง มาตรฐาน/ตัวชี้วัด"],["tableHint","คำอธิบายตาราง (hint)"]]},{group:"คอลัมน์",fields:[["colsBasic","คอลัมน์พื้นฐาน (คั่นด้วย | )"],["colsExtra","คอลัมน์เพิ่มเติม (คั่นด้วย | )"],["tplBasic","ชื่อปุ่มเทมเพลตพื้นฐาน"],["tplExtra","ชื่อปุ่มเทมเพลตเพิ่มเติม"],["rowHeader","หัวคอลัมน์ข้อ/ลำดับ"]]},{group:"คำอธิบายรายวิชา",fields:[["descLabel","Label ช่องคำอธิบายรายวิชา"],["descPlaceholder","Placeholder คำอธิบายรายวิชา"]]},{group:"ผู้ลงนาม",fields:[["signerLabel","Label ผู้ลงนาม"],["signerPlaceholder","Placeholder ผู้ลงนาม"],["signerHint","คำใต้ช่องผู้ลงนาม"]]},{group:"จุดประสงค์วัดผล",fields:[["objTitle","หัวข้อจุดประสงค์"],["between","ป้ายระหว่างภาค"],["mid","ป้ายกลางภาค"],["final","ป้ายปลายภาค"],["pickerTitleBetween","ชื่อ dialog — ระหว่างภาค"],["pickerTitleMid","ชื่อ dialog — กลางภาค"],["pickerTitleFinal","ชื่อ dialog — ปลายภาค"]]},{group:"ส่วนช่วยเติมข้อมูล",fields:[["helpTitle","หัวข้อแผง AI"],["helpSub","คำอธิบายแผง AI"],["topicLabel","Label บท/เรื่อง"],["topicPlaceholder","Placeholder บท/เรื่อง"],["btnCurriculum","ปุ่มค้นหลักสูตร"],["btnAI","ปุ่ม AI ร่าง"],["btnImg","ปุ่มอ่านรูป"]]},{group:"ข้อความปุ่ม/Toast",fields:[["save","ปุ่มบันทึก"],["close","ปุ่มปิด"],["addTopic","ปุ่มเพิ่มบท"],["addCol","ปุ่มเพิ่มคอลัมน์"],["addRow","ปุ่มเพิ่มแถว"],["delRow","ปุ่มลบแถว"],["pickerOk","ปุ่ม OK ใน dialog"],["pickerCancel","ปุ่มยกเลิก ใน dialog"],["toastSaved","Toast บันทึกสำเร็จ"],["toastSearchEmpty","Toast ไม่พบในหลักสูตรแกนกลาง"],["toastAIDone","Toast AI ร่างสำเร็จ"],["toastImgDone","Toast อ่านรูปสำเร็จ"],["noOpts","ข้อความเมื่อยังไม่มีข้อ"],["notSelected","ข้อความยังไม่เลือก"]]}];function Zt(e,n){var B,C,N;const r={...n,...e},p={};for(const{fields:A}of it)for(const[g]of A)g==="colsBasic"?p[g]=(r.colsBasic??[]).join(" | "):g==="colsExtra"?p[g]=(r.colsExtra??[]).join(" | "):g==="pickerTitleBetween"?p[g]=((B=r.pickerTitles)==null?void 0:B.between)??"":g==="pickerTitleMid"?p[g]=((C=r.pickerTitles)==null?void 0:C.mid)??"":g==="pickerTitleFinal"?p[g]=((N=r.pickerTitles)==null?void 0:N.final)??"":p[g]=r[g]??"";return p}function go(e){const n={};for(const{fields:r}of it)for(const[p]of r){const B=String(e[p]??"").trim();p==="colsBasic"?n.colsBasic=B.split("|").map(C=>C.trim()).filter(Boolean):p==="colsExtra"?n.colsExtra=B.split("|").map(C=>C.trim()).filter(Boolean):p==="pickerTitleBetween"?(n.pickerTitles=n.pickerTitles??{},n.pickerTitles.between=B):p==="pickerTitleMid"?(n.pickerTitles=n.pickerTitles??{},n.pickerTitles.mid=B):p==="pickerTitleFinal"?(n.pickerTitles=n.pickerTitles??{},n.pickerTitles.final=B):n[p]=B}return n}async function bo(e,n=!1){je("course-doc-lang"),Ie("ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);const r=["th","jawi","ar","rumi"],p={th:"ภาษาไทย",jawi:"يَاوِي (Jawi)",ar:"العربية",rumi:"Rumi (Melayu)"},B={th:"ltr",jawi:"rtl",ar:"rtl",rumi:"ltr"},[C,N]=await Promise.all([Ps().catch(()=>[]),n?fe(()=>import("./api-CnonnVVn.js"),__vite__mapDeps([1,2,3,4])).then(b=>b.getTeachers()).catch(()=>[]):Promise.resolve([])]),A=Object.fromEntries(C.map(b=>[b.lang_key,b])),g=n?r:r.filter(b=>{const T=A[b];return T&&(e==null?void 0:e.id)&&(T.editor_teacher_ids??[]).includes(e.id)});if(!g.length){_e(`<div class="max-w-lg mx-auto text-center py-20 text-gray-400">
      <p class="text-4xl mb-4">🔒</p>
      <p class="font-medium">ยังไม่มีสิทธิ์แก้ไขภาษาใด</p>
      <p class="text-xs mt-1">ขอสิทธิ์จากแอดมินเพื่อแก้ไขภาษาที่รับผิดชอบ</p>
    </div>`);return}let D=g[0];const q=b=>{var T,K,P;return((K=(T=A[b])==null?void 0:T.settings)==null?void 0:K.label)||((P=COURSE_DOC_LANGS[b])==null?void 0:P.label)||p[b]||b},Z=()=>{var W,R;const b=g.map(s=>`
      <button class="cdl-tab px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap
        ${s===D?"bg-emerald-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
        data-lang="${s}" dir="${B[s]}">${q(s)}</button>`).join(""),T=A[D]??{settings:{},editor_teacher_ids:[]},K=COURSE_DOC_LANGS[D]??{},P=Zt(T.settings??{},K),re=B[D],ne=A.th??{},J=Zt(ne.settings??{},COURSE_DOC_LANGS.th??{}),ie=D!=="th",x=it.map(({group:s,fields:o})=>`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${s}</p>
        ${ie?`
        <div class="flex items-center gap-3 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-t-xl">
          <span class="w-44 flex-shrink-0"></span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ภาษาไทย (อ้างอิง)</span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider" dir="${re}">${q(D)}</span>
        </div>`:""}
        <div class="bg-white rounded-xl ${ie?"rounded-tl-none rounded-tr-none":""} border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          ${o.map(([t,i])=>`
          <div class="flex items-start gap-3 px-4 py-3">
            <label class="w-44 flex-shrink-0 text-xs text-gray-500 pt-1.5 leading-tight">${i}</label>
            ${ie?`
            <div class="flex-1 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100 select-none" dir="ltr">
              ${y(String(J[t]??"—"))}
            </div>`:""}
            <input id="cdl-${t}" type="text" dir="${re}"
              class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              value="${y(String(P[t]??""))}"
              placeholder="${y(String(K[t]??""))}" />
          </div>`).join("")}
        </div>
      </div>`).join(""),j=T.editor_teacher_ids??[],v=n?`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ผู้มีสิทธิ์แก้ไขภาษานี้</p>
        <div class="bg-white rounded-xl border border-gray-200 shadow-md p-4">
          <p class="text-xs text-gray-400 mb-3">เลือกครูที่จะให้แก้ไข <span dir="${re}" class="font-semibold text-emerald-700">${q(D)}</span></p>
          <div class="max-h-48 overflow-y-auto space-y-1" id="cdl-editors">
            ${N.filter(s=>s.id!==(e==null?void 0:e.id)).map(s=>`
              <label class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">
                <input type="checkbox" class="cdl-editor-cb" value="${s.id}" ${j.includes(s.id)?"checked":""}/>
                <span class="font-medium text-gray-800">${y(s.full_name)}</span>
                <span class="text-xs text-gray-400">${y(s.teacher_code??"")} · ${y(s.dept??"—")}</span>
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
      <div class="flex gap-2 flex-wrap mb-6">${b}</div>

      ${x}
      ${v}
    </div>`),document.querySelectorAll(".cdl-tab").forEach(s=>{s.addEventListener("click",()=>{D=s.dataset.lang,Z()})}),(W=document.getElementById("cdl-save-settings"))==null||W.addEventListener("click",async()=>{var i;const s={};for(const{fields:_}of it)for(const[I]of _)s[I]=((i=document.getElementById(`cdl-${I}`))==null?void 0:i.value)??"";const o=go(s),t=document.getElementById("cdl-save-settings");t.disabled=!0,t.textContent="กำลังบันทึก...";try{const _=await Xs(D,o,e==null?void 0:e.id);A[D]={...A[D],..._},F(`บันทึกการตั้งค่า ${q(D)} สำเร็จ`,"success")}catch(_){F("บันทึกไม่สำเร็จ: "+ce(_),"error")}t.disabled=!1,t.innerHTML="💾 บันทึก"}),(R=document.getElementById("cdl-save-editors"))==null||R.addEventListener("click",async()=>{const s=[...document.querySelectorAll(".cdl-editor-cb:checked")].map(t=>Number(t.value)),o=document.getElementById("cdl-save-editors");o.disabled=!0,o.textContent="กำลังบันทึก...";try{const t=await Zs(D,s);A[D]={...A[D],...t},F(`อัปเดตผู้มีสิทธิ์ ${q(D)} สำเร็จ`,"success")}catch(t){F("บันทึกไม่สำเร็จ: "+ce(t),"error")}o.disabled=!1,o.textContent="💾 บันทึกผู้มีสิทธิ์"})};Z()}async function fo(e){je("announcements-view"),Ie("ประกาศ","announcement");const{getAllAnnouncementsForTeacher:n,getMyAcks:r,ackAnnouncement:p,getSupervisorComments:B,getSystemConfig:C,getTeacherBusyPeriodsOnDate:N,incrementAnnouncementView:A,incrementAnnouncementLike:g,getAnnouncementCommentsBulk:D,addAnnouncementComment:q,deleteAnnouncementComment:Z}=await fe(async()=>{const{getAllAnnouncementsForTeacher:l,getMyAcks:h,ackAnnouncement:L,getSupervisorComments:a,getSystemConfig:c,getTeacherBusyPeriodsOnDate:u,incrementAnnouncementView:m,incrementAnnouncementLike:E,getAnnouncementCommentsBulk:ee,addAnnouncementComment:U,deleteAnnouncementComment:G}=await import("./api-CnonnVVn.js");return{getAllAnnouncementsForTeacher:l,getMyAcks:h,ackAnnouncement:L,getSupervisorComments:a,getSystemConfig:c,getTeacherBusyPeriodsOnDate:u,incrementAnnouncementView:m,incrementAnnouncementLike:E,getAnnouncementCommentsBulk:ee,addAnnouncementComment:U,deleteAnnouncementComment:G}},__vite__mapDeps([1,2,3,4]));let b=null;try{b=await C()}catch{}_e(`<div class="animate-fade max-w-2xl mx-auto">
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
  </div>`);const T=l=>String(l??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=l=>new Date(l).toLocaleDateString("th-TH",{dateStyle:"long"}),P=l=>l?new Date(l).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",re=l=>new Date(new Date(l).getTime()+7*36e5).toISOString().slice(0,10),ne={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},J=l=>l?l.startsWith("academic")?"bg-blue-100 text-blue-700":l.startsWith("registrar")?"bg-violet-100 text-violet-700":l==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",ie={general:"ทั่วไป",profile:"โปรไฟล์",schedule:"ตารางสอน",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},x=[{key:"pinned",label:"📌 ปักหมุด",color:"from-amber-400 to-orange-400",filter:l=>l.priority>0},{key:"academic",label:"🎓 ฝ่ายวิชาการ",color:"from-blue-400 to-indigo-400",filter:l=>l.priority===0&&(l.creator_role??"").startsWith("academic")},{key:"registrar",label:"📋 ฝ่ายทะเบียน",color:"from-violet-400 to-purple-400",filter:l=>l.priority===0&&(l.creator_role??"").startsWith("registrar")},{key:"dept_head",label:"🏫 หัวหน้ากลุ่มสาระ",color:"from-emerald-400 to-teal-400",filter:l=>l.priority===0&&l.creator_role==="dept_head"},{key:"admin",label:"⚙️ ทั่วไป",color:"from-gray-300 to-gray-400",filter:l=>l.priority===0&&!l.creator_role}],j=l=>{if(!l)return"";const h=Math.ceil((new Date(l)-new Date)/864e5);return h<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${P(l)}</span>`:h<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${P(l)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${P(l)}</span>`};let v="announce";document.querySelectorAll(".ann-tab").forEach(l=>{l.addEventListener("click",()=>{v=l.dataset.tab,document.querySelectorAll(".ann-tab").forEach(h=>{const L=h.dataset.tab===v;h.className=`ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${L?"bg-white shadow-sm text-gray-800":"text-gray-500 hover:text-gray-700"}`}),document.getElementById("ann-panel-announce").classList.toggle("hidden",v!=="announce"),document.getElementById("ann-panel-myann").classList.toggle("hidden",v!=="myann"),document.getElementById("ann-panel-comments").classList.toggle("hidden",v!=="comments"),v==="myann"&&!R&&t()})});const W={general:{label:"ทั่วไป",icon:"📢",hasDeadline:!1},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",hasDeadline:!0},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",hasDeadline:!1},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",hasDeadline:!1},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",hasDeadline:!1}};let R=!1,s=[];const o=(l,h)=>{var c;const L=W[l.ann_type]??{label:l.ann_type,icon:"📢"},a=(l.target_class_ids??[]).map(u=>{var m;return((m=h.find(E=>E.id===u))==null?void 0:m.class_name)??`#${u}`}).join(", ");return`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 space-y-2" data-myann-id="${l.id}">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">${L.icon} ${L.label}</span>
            ${l.priority>0?'<span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-medium">📌 ปักหมุด</span>':""}
            ${l.is_active?"":'<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>'}
          </div>
          <p class="font-semibold text-gray-800">${T(l.title)}</p>
          ${l.body?`<p class="text-sm text-gray-500 mt-1 line-clamp-2">${T(l.body)}</p>`:""}
          ${l.file_url?`<a href="${T(l.file_url)}" target="_blank" class="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1">📎 ไฟล์แนบ</a>`:""}
          ${(c=l.attachment_urls)!=null&&c.length?`<div class="flex flex-wrap gap-1.5 mt-1">${l.attachment_urls.map(u=>`<a href="${T(u.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${T(u.name)}</a>`).join("")}</div>`:""}
          <p class="text-xs text-gray-400 mt-2">ห้อง: ${T(a)||"—"}</p>
        </div>
        <div class="flex gap-1 flex-shrink-0">
          <button onclick="window._editMyAnn(${l.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600 transition" title="แก้ไข">✏️</button>
          <button onclick="window._togglePinMyAnn(${l.id},${l.priority})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-amber-500 transition" title="${l.priority>0?"เลิกปักหมุด":"ปักหมุด"}">📌</button>
          <button onclick="window._deleteMyAnn(${l.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition" title="ลบ">🗑️</button>
        </div>
      </div>
    </div>`},t=async()=>{R=!0;const l=document.getElementById("ann-panel-myann");if(l){l.innerHTML='<div class="flex justify-center py-8 text-gray-400"><svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> กำลังโหลด...</div>';try{const{getTeacherOwnAnnouncements:h,getMyClasses:L,getTeacherPackageAccess:a}=await fe(async()=>{const{getTeacherOwnAnnouncements:E,getMyClasses:ee,getTeacherPackageAccess:U}=await import("./api-CnonnVVn.js");return{getTeacherOwnAnnouncements:E,getMyClasses:ee,getTeacherPackageAccess:U}},__vite__mapDeps([1,2,3,4])),[c,u,m]=await Promise.all([h(e.id),L(e.id).catch(()=>[]),a(e.id).catch(()=>({hasSemester:!1}))]);s=u,_(c,m.hasSemester)}catch(h){l.innerHTML=`<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${h.message}</p>`}}},i=3,_=(l,h=!1)=>{var u;const L=document.getElementById("ann-panel-myann");if(!L)return;const a=h||l.length<i,c=h?'<span class="text-xs text-emerald-600 font-medium">✨ ไม่จำกัด</span>':`<span class="text-xs text-gray-400">${l.length}/${i} (ฟรี)</span>`;L.innerHTML=`
    <div class="space-y-3">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-gray-700">ประกาศของฉัน (${l.length})</h3>
          ${c}
        </div>
        <button id="btn-create-myann"
          class="px-4 py-2 text-sm rounded-xl font-semibold transition ${a?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}">
          + สร้างประกาศ
        </button>
      </div>
      ${!h&&l.length>=i?`
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <span class="text-2xl flex-shrink-0">⭐</span>
        <div>
          <p class="text-sm font-semibold text-amber-800">ใช้ครบ ${i} ประกาศแล้ว</p>
          <p class="text-xs text-amber-600 mt-1">อัพเกรดเป็นแพ็กเกจโดเนทเพื่อสร้างประกาศได้ไม่จำกัด</p>
        </div>
      </div>`:""}
      ${l.length?l.map(m=>o(m,s)).join(""):`
      <div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📢</p>
        <p class="text-sm">ยังไม่มีประกาศ กดปุ่ม "สร้างประกาศ" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`,(u=document.getElementById("btn-create-myann"))==null||u.addEventListener("click",()=>{if(!a){F(`ใช้ครบ ${i} ประกาศแล้ว — อัพเกรดเพื่อใช้งานไม่จำกัด`,"warning");return}S()})},I=(l,h=[])=>s.map(L=>{var a;return`<label class="flex items-center gap-2 text-xs cursor-pointer hover:text-indigo-700 py-0.5">
        <input type="checkbox" name="myann-cls-${l}" value="${L.id}"
          ${h.includes(L.id)?"checked":""} class="rounded text-indigo-600 flex-shrink-0" />
        <span class="truncate">${T(L.class_name)}</span>
        <span class="text-gray-300 truncate">${T(((a=L.master_subjects)==null?void 0:a.subject_name)??"")}</span>
      </label>`}).join(""),O=(l,h=[],L="",a=[])=>`
    <div class="myann-entry border border-gray-200 rounded-xl p-3 space-y-2" data-entry="${l}" data-kept='${T(JSON.stringify(a)).replace(/'/g,"&#39;")}'>
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-indigo-600">ชุดที่ ${l+1}</span>
        ${l>0?`<button type="button" class="myann-remove-entry text-red-400 hover:text-red-600 text-sm px-2" data-entry="${l}">✕ ลบ</button>`:""}
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ห้องเรียน <span class="text-red-400">*</span></p>
        <div class="border border-gray-100 rounded-lg p-2 max-h-28 overflow-y-auto space-y-0.5">
          ${I(l,h)||'<p class="text-xs text-gray-400">ยังไม่มีห้องเรียน</p>'}
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">แนบไฟล์ (เลือกได้หลายไฟล์ ไม่บังคับ)</p>
        <div class="myann-kept-files flex flex-wrap gap-1.5 mb-1.5" data-entry="${l}"></div>
        <input name="myann-files-${l}" type="file" multiple
          class="w-full text-xs" />
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">หรือลิงก์ไฟล์ (เช่น Google Drive)</p>
        <input name="myann-file-${l}" type="url" value="${T(L)}"
          placeholder="https://drive.google.com/..."
          class="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </div>
    </div>`,k=l=>{l.querySelectorAll(".myann-entry").forEach(h=>{const L=h.dataset.entry,a=JSON.parse(h.dataset.kept||"[]"),c=l.querySelector(`.myann-kept-files[data-entry="${L}"]`);c&&(c.innerHTML=a.map((u,m)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${T(u.name)}
          <button type="button" class="myann-remove-file text-indigo-400 hover:text-red-500 font-bold" data-entry="${L}" data-i="${m}">✕</button>
        </span>`).join(""),c.querySelectorAll(".myann-remove-file").forEach(u=>u.addEventListener("click",()=>{const m=JSON.parse(h.dataset.kept||"[]");m.splice(parseInt(u.dataset.i,10),1),h.dataset.kept=JSON.stringify(m),k(l)})))})},S=(l=null)=>{var c;let h=1;const L=document.createElement("div");L.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",L.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${l?"✏️ แก้ไขประกาศ":"📢 สร้างประกาศใหม่"}</h3>
        <button id="myann-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <!-- ข้อมูลร่วมทุกชุด -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ประเภทประกาศ</label>
          <select id="myann-type" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            ${Object.entries(W).map(([u,m])=>`<option value="${u}" ${(l==null?void 0:l.ann_type)===u?"selected":""}>${m.icon} ${m.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หัวข้อ <span class="text-red-400">*</span></label>
          <input id="myann-title" type="text" value="${T((l==null?void 0:l.title)??"")}"
            placeholder="ระบุหัวข้อประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">รายละเอียด</label>
          <textarea id="myann-body" rows="2"
            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none">${T((l==null?void 0:l.body)??"")}</textarea>
        </div>
        <div id="myann-deadline-wrap" class="${((l==null?void 0:l.ann_type)??"general")==="deadline"?"":"hidden"}">
          <label class="block text-xs font-semibold text-gray-600 mb-1">⏰ วันและเวลากำหนดส่ง/สอบ <span class="text-red-400">*</span></label>
          <input id="myann-deadline" type="datetime-local"
            value="${l!=null&&l.deadline_at?new Date(l.deadline_at).toISOString().slice(0,16):""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-pin" type="checkbox" ${(l==null?void 0:l.priority)>0?"checked":""} class="rounded text-amber-500" />
            <span>📌 ปักหมุด</span>
          </label>
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-active" type="checkbox" ${!l||l!=null&&l.is_active?"checked":""} class="rounded text-emerald-500" />
            <span>เผยแพร่ทันที</span>
          </label>
        </div>
        <!-- ชุดห้อง+ไฟล์ -->
        <div class="border-t border-gray-100 pt-3">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-gray-700">📋 ห้องเรียน + ลิงก์ (แต่ละชุดสร้างประกาศแยก)</p>
            ${l?"":`<button type="button" id="myann-add-entry"
              class="flex items-center gap-1 text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition">
              ＋ เพิ่มชุด
            </button>`}
          </div>
          <div id="myann-entries" class="space-y-3">
            ${O(0,(l==null?void 0:l.target_class_ids)??[],(l==null?void 0:l.file_url)??"",(l==null?void 0:l.attachment_urls)??[])}
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="myann-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="myann-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
          ${l?"บันทึก":"สร้างประกาศ"}
        </button>
      </div>
    </div>`,document.body.appendChild(L),k(L),L.querySelector("#myann-close").addEventListener("click",()=>L.remove()),L.querySelector("#myann-cancel").addEventListener("click",()=>L.remove()),L.querySelector("#myann-type").addEventListener("change",u=>{L.querySelector("#myann-deadline-wrap").classList.toggle("hidden",u.target.value!=="deadline")}),(c=L.querySelector("#myann-add-entry"))==null||c.addEventListener("click",()=>{const u=L.querySelector("#myann-entries"),m=document.createElement("div");m.innerHTML=O(h),u.appendChild(m.firstElementChild),h++,a(),k(L)});const a=()=>{L.querySelectorAll(".myann-remove-entry").forEach(u=>{u.onclick=()=>{var E;const m=Number(u.dataset.entry);(E=L.querySelector(`.myann-entry[data-entry="${m}"]`))==null||E.remove()}})};a(),L.querySelector("#myann-save").addEventListener("click",async()=>{const u=L.querySelector("#myann-title").value.trim(),m=L.querySelector("#myann-body").value.trim(),E=L.querySelector("#myann-type").value,ee=L.querySelector("#myann-pin").checked,U=L.querySelector("#myann-active").checked,G=E==="deadline"&&L.querySelector("#myann-deadline").value||null;if(!u){F("กรุณาระบุหัวข้อ","warning");return}if(E==="deadline"&&!G){F("กรุณาระบุวันและเวลา","warning");return}const oe=[...L.querySelectorAll(".myann-entry")].map(d=>{var H,Q;const M=Number(d.dataset.entry),V=[...d.querySelectorAll(`input[name="myann-cls-${M}"]:checked`)].map(le=>Number(le.value)),Y=((H=d.querySelector(`input[name="myann-file-${M}"]`))==null?void 0:H.value.trim())??"",w=JSON.parse(d.dataset.kept||"[]"),te=[...((Q=d.querySelector(`input[name="myann-files-${M}"]`))==null?void 0:Q.files)??[]];return{classIds:V,fileUrl:Y,keptFiles:w,newFiles:te}}).filter(d=>d.classIds.length>0);if(!oe.length){F("กรุณาเลือกอย่างน้อย 1 ห้องในแต่ละชุด","warning");return}const f=L.querySelector("#myann-save");f.disabled=!0,f.textContent="กำลังบันทึก...";try{const{createAnnouncement:d,updateAnnouncement:M}=await fe(async()=>{const{createAnnouncement:w,updateAnnouncement:te}=await import("./api-CnonnVVn.js");return{createAnnouncement:w,updateAnnouncement:te}},__vite__mapDeps([1,2,3,4])),{uploadAssignmentFile:V}=await fe(async()=>{const{uploadAssignmentFile:w}=await import("./storage-CuUjCgvI.js");return{uploadAssignmentFile:w}},__vite__mapDeps([11,2]));if(l){const{classIds:w,fileUrl:te,keptFiles:H,newFiles:Q}=oe[0],le=[];for(const ue of Q)le.push(await V(ue,`class-${w[0]}/announcements`));const de=[...H,...le];await M(l.id,{title:u,body:m,isActive:U,priority:ee?1:0,annType:E,targetClassIds:w,fileUrl:te,attachmentUrls:de.length?de:null,deadlineAt:G})}else await Promise.all(oe.map(async({classIds:w,fileUrl:te,newFiles:H})=>{const Q=[];for(const le of H)Q.push(await V(le,`class-${w[0]}/announcements`));return d({title:u,body:m,isActive:U,priority:ee?1:0,teacherId:e.id,annType:E,targetClassIds:w,fileUrl:te,attachmentUrls:Q.length?Q:null,deadlineAt:G})}));L.remove();const Y=l?1:oe.length;F(`บันทึก ${Y} ประกาศสำเร็จ ✅`,"success"),R=!1,t()}catch(d){F("บันทึกไม่สำเร็จ: "+ce(d),"error"),f.disabled=!1,f.textContent=l?"บันทึก":"สร้างประกาศ"}})};window._editMyAnn=async l=>{const{getTeacherOwnAnnouncements:h}=await fe(async()=>{const{getTeacherOwnAnnouncements:c}=await import("./api-CnonnVVn.js");return{getTeacherOwnAnnouncements:c}},__vite__mapDeps([1,2,3,4])),a=(await h(e.id).catch(()=>[])).find(c=>c.id===l);a&&S(a)},window._togglePinMyAnn=async(l,h)=>{const{updateAnnouncement:L}=await fe(async()=>{const{updateAnnouncement:a}=await import("./api-CnonnVVn.js");return{updateAnnouncement:a}},__vite__mapDeps([1,2,3,4]));await L(l,{priority:h>0?0:1}).catch(()=>{}),R=!1,t()},window._deleteMyAnn=async l=>{if(!confirm("ลบประกาศนี้?"))return;const{deleteAnnouncement:h}=await fe(async()=>{const{deleteAnnouncement:L}=await import("./api-CnonnVVn.js");return{deleteAnnouncement:L}},__vite__mapDeps([1,2,3,4]));await h(l).catch(()=>{}),F("ลบประกาศแล้ว","success"),R=!1,t()};const $=l=>l?new Date(l+"T00:00:00").toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"",X={yes:{label:"✅ สนใจเข้าร่วมแน่นอน",bg:"bg-emerald-600",ring:"ring-emerald-300"},maybe:{label:"🤔 ไม่แน่ใจ",bg:"bg-amber-500",ring:"ring-amber-300"},no:{label:"❌ ไม่สนใจ",bg:"bg-gray-400",ring:"ring-gray-300"}},z=(l,h,L=null,a=!1,c=0)=>{var G,oe,f;const u=l.requires_ack,m=!!h,E=l.ann_type==="training",ee=h?new Date(h).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"",U=!l.is_active;return`
    <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow
      ${u&&!m&&!U?"border-rose-200":U?"border-dashed border-gray-200":"border-gray-100"}
      ${U?"opacity-60":""}" data-ann-id="${l.id}">
      <div class="h-1 bg-gradient-to-r ${l.priority>0?"from-amber-400 to-orange-400":U?"from-gray-200 to-gray-300":((G=x.find(d=>d.filter(l)))==null?void 0:G.color)??"from-gray-300 to-gray-400"}"></div>
      <div class="p-5">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
            ${u&&!m&&!U?"bg-rose-50":U?"bg-gray-50":"bg-indigo-50"}">
            ${l.priority>0?"📌":u?m?"✅":"🔔":U?"📄":"📢"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${J(l.creator_role)}">
                ${T(ne[l.creator_role]??"แอดมิน")}
              </span>
              ${(oe=l.teachers)!=null&&oe.full_name?`<span class="text-[11px] text-gray-500 font-medium">${T(l.teachers.full_name)}</span>`:""}
              ${U?'<span class="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full text-[11px]">ยกเลิกแล้ว</span>':""}
              ${l.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${u?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${j(l.due_date)}
            </div>
            <h3 class="text-base font-bold text-gray-800 mb-1.5">${T(l.title)}</h3>
            ${l.body?`<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-2">${T(l.body)}</p>`:""}
            ${l.file_url?`<img src="${T(l.file_url)}" class="w-full rounded-xl border border-gray-100 mb-2 cursor-pointer" onclick="window.open('${T(l.file_url)}','_blank')" />`:""}
            ${E&&l.event_date?`
              <div class="mt-3 mb-2 bg-violet-50 border border-violet-100 rounded-xl p-3 space-y-1.5">
                <p class="text-xs font-semibold text-violet-700">🎓 ข้อมูลการอบรม</p>
                <p class="text-sm text-gray-700">📅 ${$(l.event_date)}</p>
                ${(f=l.event_periods)!=null&&f.length?`<p class="text-sm text-gray-700">🕐 คาบที่ ${l.event_periods.sort((d,M)=>d-M).join(", ")}</p>`:""}
                ${l.event_location?`<p class="text-sm text-gray-700">📍 ${T(l.event_location)}</p>`:""}
              </div>`:""}
            <span class="text-[11px] text-gray-400">${K(l.created_at)}</span>
            ${E&&!U?`
              <div class="mt-3">
                <p class="text-xs font-semibold text-gray-500 mb-2">คุณจะเข้าร่วมไหม?</p>
                <div class="flex flex-wrap gap-2">
                  ${Object.entries(X).map(([d,M])=>`
                    <button class="ann-rsvp-btn px-3 py-2 rounded-xl text-sm font-semibold transition border-2
                      ${L===d?`${M.bg} text-white ring-2 ${M.ring} border-transparent`:"bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"}"
                      data-ann-id="${l.id}" data-rsvp="${d}">${M.label}</button>
                  `).join("")}
                </div>
              </div>`:""}
            ${u&&!U?`
              <div class="mt-3">
                ${m?`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold border border-emerald-200">
                      ✅ รับทราบแล้ว · ${ee}
                    </span>`:`<button class="ann-ack-btn px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition shadow-sm"
                      data-id="${l.id}">🔔 กดรับทราบ</button>`}
              </div>`:""}
            <div class="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
              <button class="ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${a?"bg-rose-50 text-rose-600":"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500"}" data-id="${l.id}">
                <span class="ann-like-icon">${a?"❤️":"🤍"}</span><span class="ann-like-count">${l.like_count??0}</span>
              </button>
              <button class="ann-comment-toggle-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-500 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition" data-id="${l.id}">
                💬<span class="ann-comment-count">${c}</span>
              </button>
              <span class="text-[11px] text-gray-400 ml-auto">👁️ เข้าดูแล้ว ${l.view_count??0} คน</span>
            </div>
            <div class="ann-comment-section hidden mt-3 pt-3 border-t border-gray-50" data-id="${l.id}">
              <div class="ann-comment-list space-y-2 mb-2 text-sm text-gray-400">กำลังโหลด...</div>
              <div class="flex gap-2">
                <input type="text" class="ann-comment-input flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="แสดงความคิดเห็น..." data-id="${l.id}" maxlength="500" />
                <button class="ann-comment-send-btn px-3 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition flex-shrink-0" data-id="${l.id}">ส่ง</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`},se=async()=>{const l=document.getElementById("ann-panel-announce");if(!l)return;let h,L,a;try{const{getMyRsvpsForTeacher:w}=await fe(async()=>{const{getMyRsvpsForTeacher:te}=await import("./api-CnonnVVn.js");return{getMyRsvpsForTeacher:te}},__vite__mapDeps([1,2,3,4]));[h,L,a]=await Promise.all([n(),e!=null&&e.id?r(e.id).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?w(e.id).catch(()=>[]):Promise.resolve([])])}catch{l.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(e!=null&&e.id&&b){const w=parseInt(b.academicYear??2568),te=parseInt(b.semester??1),H=h.filter(Q=>{var le;return Q.ann_type==="training"&&Q.event_date&&((le=Q.event_periods)==null?void 0:le.length)});if(H.length){const Q=await Promise.all(H.map(de=>N(e.id,de.event_date,w,te).catch(()=>[]))),le=Object.fromEntries(H.map((de,ue)=>[de.id,Q[ue]]));h=h.filter(de=>{var xe;if(de.ann_type!=="training"||!((xe=de.event_periods)!=null&&xe.length))return!0;const ue=le[de.id]??[];return(de.schedule_filter??"all")==="any"?de.event_periods.some(ye=>!ue.includes(ye)):!de.event_periods.some(ye=>ue.includes(ye))})}}const c=Object.fromEntries(L.map(w=>[w.announcement_id,w.acked_at])),u=Object.fromEntries((a??[]).map(w=>[w.announcement_id,w.response])),m={};try{(await D(h.map(te=>te.id))).forEach(te=>{var H;(m[H=te.announcement_id]??(m[H]=[])).push(te)})}catch{}const E=`pp5_ann_liked_${(e==null?void 0:e.id)??"anon"}`,ee=`pp5_ann_viewed_${(e==null?void 0:e.id)??"anon"}`;let U,G;try{U=new Set(JSON.parse(localStorage.getItem(E)||"[]"))}catch{U=new Set}try{G=new Set(JSON.parse(localStorage.getItem(ee)||"[]"))}catch{G=new Set}const oe=h.map(w=>w.id).filter(w=>!G.has(w));if(oe.length&&(e!=null&&e.id)){oe.forEach(w=>{G.add(w),A(w)});try{localStorage.setItem(ee,JSON.stringify([...G]))}catch{}oe.forEach(w=>{const te=h.find(H=>H.id===w);te&&(te.view_count=(te.view_count??0)+1)})}const f=h.filter(w=>w.is_active),d=h.filter(w=>!w.is_active);if(!h.length){l.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`;return}const M=x.map(w=>({...w,items:f.filter(w.filter)})).filter(w=>w.items.length);let V="";M.length?V+=M.map(w=>`
        <div class="mb-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-bold text-gray-700">${w.label}</span>
            <span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] rounded-full font-semibold">${w.items.length}</span>
            <div class="flex-1 h-px bg-gray-100 ml-1"></div>
          </div>
          <div class="space-y-3">${w.items.map(te=>z(te,c[te.id],u[te.id]??null,U.has(te.id),(m[te.id]||[]).length)).join("")}</div>
        </div>`).join(""):V+=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-400 mb-5">
        <div class="text-4xl mb-3">📭</div><p class="font-semibold text-gray-500">ยังไม่มีประกาศที่แสดงอยู่ในขณะนี้</p>
      </div>`,d.length&&(V+=`<details class="mt-2">
        <summary class="cursor-pointer text-xs text-gray-400 font-semibold py-2 px-1 hover:text-gray-600 transition select-none list-none flex items-center gap-1">
          <span>▸</span> ประวัติประกาศที่ผ่านมา (${d.length} รายการ)
        </summary>
        <div class="space-y-3 mt-3">${d.map(w=>z(w,c[w.id],null,U.has(w.id),(m[w.id]||[]).length)).join("")}</div>
      </details>`),l.innerHTML=V,l.querySelectorAll(".ann-ack-btn").forEach(w=>{w.addEventListener("click",async()=>{if(e!=null&&e.id){w.disabled=!0,w.textContent="กำลังบันทึก...";try{await p(Number(w.dataset.id),e.id),await se()}catch{F("บันทึกไม่สำเร็จ","error"),w.disabled=!1,w.textContent="🔔 กดรับทราบ"}}})}),l.querySelectorAll(".ann-rsvp-btn").forEach(w=>{w.addEventListener("click",async()=>{if(!(e!=null&&e.id))return;const{upsertAnnouncementRsvp:te}=await fe(async()=>{const{upsertAnnouncementRsvp:le}=await import("./api-CnonnVVn.js");return{upsertAnnouncementRsvp:le}},__vite__mapDeps([1,2,3,4])),H=Number(w.dataset.annId),Q=w.dataset.rsvp;w.classList.contains("bg-emerald-600")||w.classList.contains("bg-amber-500")||w.classList.contains("bg-gray-400");try{await te(H,e.id,Q);const{showToast:le}=await fe(async()=>{const{showToast:ue}=await import("./ui-DI1UEpN2.js").then(xe=>xe.u);return{showToast:ue}},__vite__mapDeps([6,7]));le({yes:"บันทึก: สนใจเข้าร่วม ✅",maybe:"บันทึก: ไม่แน่ใจ 🤔",no:"บันทึก: ไม่สนใจ ❌"}[Q]??"บันทึกแล้ว","success"),await se()}catch{F("บันทึกไม่สำเร็จ","error")}})}),l.querySelectorAll(".ann-like-btn").forEach(w=>{w.addEventListener("click",()=>{if(!(e!=null&&e.id))return;const te=Number(w.dataset.id),H=U.has(te),Q=H?-1:1;g(te,Q),H?U.delete(te):U.add(te);try{localStorage.setItem(E,JSON.stringify([...U]))}catch{}const le=w.querySelector(".ann-like-count"),de=w.querySelector(".ann-like-icon");le.textContent=Math.max(0,(parseInt(le.textContent,10)||0)+Q),de.textContent=H?"🤍":"❤️",w.className=`ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${H?"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500":"bg-rose-50 text-rose-600"}`})});const Y=(w,te)=>{const H=m[te]??[];w.innerHTML=H.length?H.map(Q=>{var le,de;return`
          <div class="flex items-start gap-2">
            <div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">${T((((le=Q.teachers)==null?void 0:le.full_name)??"?").charAt(0))}</div>
            <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-1.5">
              <p class="text-[11px] font-semibold text-gray-700">${T(((de=Q.teachers)==null?void 0:de.full_name)??"ครู")}</p>
              <p class="text-xs text-gray-600 whitespace-pre-wrap break-words">${T(Q.comment_text)}</p>
            </div>
          </div>`}).join(""):'<p class="text-xs text-gray-400">ยังไม่มีความคิดเห็น เป็นคนแรกได้เลย!</p>'};l.querySelectorAll(".ann-comment-toggle-btn").forEach(w=>{w.addEventListener("click",()=>{const te=Number(w.dataset.id),H=l.querySelector(`.ann-comment-section[data-id="${te}"]`);if(!H)return;const Q=H.classList.contains("hidden");H.classList.toggle("hidden"),Q&&Y(H.querySelector(".ann-comment-list"),te)})}),l.querySelectorAll(".ann-comment-send-btn").forEach(w=>{const te=async()=>{if(!(e!=null&&e.id))return;const Q=Number(w.dataset.id),le=l.querySelector(`.ann-comment-input[data-id="${Q}"]`),de=le.value.trim();if(de){w.disabled=!0;try{const ue=await q(Q,e.id,de);(m[Q]??(m[Q]=[])).push(ue),le.value="";const xe=l.querySelector(`.ann-comment-section[data-id="${Q}"]`);Y(xe.querySelector(".ann-comment-list"),Q);const ye=l.querySelector(`.ann-comment-toggle-btn[data-id="${Q}"] .ann-comment-count`);ye&&(ye.textContent=m[Q].length)}catch(ue){F("ส่งความคิดเห็นไม่สำเร็จ: "+ce(ue),"error")}w.disabled=!1}};w.addEventListener("click",te);const H=l.querySelector(`.ann-comment-input[data-id="${w.dataset.id}"]`);H==null||H.addEventListener("keydown",Q=>{Q.key==="Enter"&&te()})})},ae=async()=>{const l=document.getElementById("ann-panel-comments");if(!l)return;if(!(e!=null&&e.id)){l.innerHTML='<p class="text-gray-400 text-sm p-4">ไม่พบข้อมูลครู</p>';return}let h;try{h=await B(e.id)}catch{l.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!h.length){l.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">💬</div>
        <p class="font-semibold text-gray-500">ยังไม่มีความคิดเห็น / บันทึก</p>
      </div>`;return}const L=[],a=new Map;for(const m of h){const E=m.round_id?`round__${m.round_id}__${m.supervisor_id}`:`noround__${m.supervisor_id}__${re(m.created_at)}`;if(!a.has(E)){const ee={key:E,supervisor:m.teachers,date:m.created_at,roundEvent:m.work_calendar_events??null,items:[]};a.set(E,ee),L.push(ee)}a.get(E).items.push(m)}const c=m=>m?m.startsWith("academic")?"bg-blue-100 text-blue-700":m.startsWith("registrar")?"bg-violet-100 text-violet-700":m==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",u=m=>m?m.startsWith("academic")?"from-blue-400 to-indigo-400":m.startsWith("registrar")?"from-violet-400 to-purple-400":m==="dept_head"?"from-emerald-400 to-teal-400":"from-gray-300 to-gray-400":"from-gray-300 to-gray-400";l.innerHTML='<div class="space-y-4">'+L.map(m=>{var f,d;const E=(f=m.supervisor)==null?void 0:f.position,ee=((d=m.supervisor)==null?void 0:d.full_name)??"หัวหน้า",U=ne[E]??"ผู้บังคับบัญชา",G=m.roundEvent,oe=G?`<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
             ${G.event_type==="inspection"&&G.round_number?`ตรวจครั้งที่ ${G.round_number}`:G.label}
           </span>`:"";return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-1 bg-gradient-to-r ${u(E)}"></div>
        <div class="p-5">
          <div class="flex items-center gap-2 flex-wrap mb-3">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${c(E)}">${T(U)}</span>
            <span class="text-sm font-semibold text-gray-700">${T(ee)}</span>
            ${oe}
            <span class="text-[11px] text-gray-400 ml-auto">${K(m.date)}</span>
          </div>
          ${G!=null&&G.label&&G.event_type!=="inspection"?`<p class="text-xs text-indigo-600 mb-2 -mt-1">📅 ${T(G.label)}</p>`:""}
          <div class="space-y-2">
            ${m.items.map(M=>`
              <div class="flex items-start gap-2.5">
                <span class="flex-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[11px] font-semibold mt-0.5">${T(ie[M.metric]??M.metric)}</span>
                <p class="text-sm text-gray-700 leading-relaxed">${T(M.comment)}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>`}).join("")+"</div>"};await Promise.all([se(),ae()])}function kt(e){return new Promise(n=>{var B;(B=document.getElementById("qr-receipt-prompt-modal"))==null||B.remove();const r=document.createElement("div");r.id="qr-receipt-prompt-modal",r.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40",r.innerHTML=`
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
    `,document.body.appendChild(r);const p=C=>{r.remove(),n(C)};r.querySelector("#qr-receipt-prompt-yes").addEventListener("click",()=>p(!0)),r.querySelector("#qr-receipt-prompt-no").addEventListener("click",()=>p(!1))})}function es(e,n,r,p=null){var C,N,A,g;const B=p!=null&&p.url?`<span style="display:inline-flex;flex-direction:column;align-items:center;gap:1px">
         <img src="${y(p.url)}" style="height:22px;object-fit:contain" />
         <span style="font-size:8px;color:#374151">${y(p.name||"ผู้ออกให้")}${p.title?" · "+y(p.title):""}</span>
       </span>`:"<span>ผู้ออกให้: .................. (ลงชื่อ)</span>";return`
    <div class="receipt-half">
      <div style="text-align: center; font-weight: bold; font-size: 11px; color: #4338ca; margin-bottom: 6px;">${r}</div>
      <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เลขที่ใบเสร็จ:</td><td style="text-align: right; font-weight: bold;">QR-${String(e.receipt_no).padStart(6,"0")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">วันที่:</td><td style="text-align: right;">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"long"})}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ชื่อ-สกุล:</td><td style="text-align: right;">${y(((C=e.students)==null?void 0:C.full_name)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">รหัสนักเรียน:</td><td style="text-align: right;">${y(((N=e.students)==null?void 0:N.student_code)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ห้อง:</td><td style="text-align: right;">${y(((A=e.students)==null?void 0:A.main_room)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เหตุผล:</td><td style="text-align: right; font-weight: bold;">${y(e.reason)}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ค่าธรรมเนียม:</td><td style="text-align: right; font-weight: bold;">${y(n)} บาท</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ออกให้โดย:</td><td style="text-align: right;">${y(((g=e.teachers)==null?void 0:g.full_name)||"แอดมิน")}</td></tr>
      </table>
      <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #d1d5db; font-size: 9px; color: #6b7280; display: flex; justify-content: space-between; align-items: flex-end; gap: 6px;">
        <span>ผู้รับ: .................. (ลงชื่อ)</span>
        ${B}
      </div>
    </div>
  `}async function qe(e,n,r,p,B,C=[],N="5",A=null){let g=document.getElementById("qr-print-media-styles");g||(g=document.createElement("style"),g.id="qr-print-media-styles",document.head.appendChild(g)),g.textContent=`
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
        grid-template-columns: repeat(${n}, minmax(0, 1fr)) !important;
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
  `;const D=document.createElement("div");D.id="print-qr-area",D.className="hidden",document.body.appendChild(D),D.innerHTML=e.map((q,Z)=>`
    <div class="print-room-block" style="padding: 0; margin: 0;">
      ${q.hideHeader?"":`
        <div class="print-room-header">
          <span>📋 ห้องเรียน: ${y(q.className)}</span>
          <span style="font-size: 11px; font-weight: normal; color: #6b7280;">${y(q.countLabel||`${q.students.length} คน`)}</span>
        </div>
      `}
      <div class="print-grid">
        ${q.students.map((b,T)=>`
          <div class="qr-print-card">
            <div style="width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 5px;">
              <canvas id="print-canvas-${b.id}-${T}-r${Z}" style="width: 100%; max-width: 100%; height: auto;"></canvas>
            </div>
            <div style="width: 100%; text-align: left; font-family: Sarabun, sans-serif; font-size: 11px;">
              <p style="font-weight: bold; color: black; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${y(b.full_name)}</p>
              ${r?`<p style="color: #4b5563; margin: 2px 0 0 0; font-size: 9px;">รหัส: ${y(b.student_code||"-")}</p>`:""}
              <div style="display: flex; justify-content: space-between; margin-top: 3px; font-size: 9px; color: #4b5563;">
                ${B?`<span>ห้อง: ${y(b._roomName||q.className)}</span>`:""}
                ${p?`<span>เลขที่: ${b.seat_no}</span>`:""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("")+(C.length===0?"":`
    <div class="print-room-block">
      <div class="receipt-grid">
        ${C.map(q=>`
          <div class="qr-receipt-slip">
            ${es(q,N,"🏫 ต้นขั้ว (โรงเรียนเก็บ)",A)}
            <div class="receipt-cut-line-v"></div>
            ${es(q,N,"🎓 มอบให้นักเรียน",A)}
          </div>
        `).join("")}
      </div>
    </div>
  `);for(let q=0;q<e.length;q++)for(let Z=0;Z<e[q].students.length;Z++){const b=e[q].students[Z],T=document.getElementById(`print-canvas-${b.id}-${Z}-r${q}`);T&&await tt.toCanvas(T,b.student_code||"",{width:250,margin:1,color:{dark:"#000000",light:"#ffffff"}})}window.print(),D.remove()}async function yo(e,n=null,r={}){var B,C,N,A,g,D;const p=!e||!!r.isQrManager;je("student-qr-print"),Ie("พิมพ์ QR Code นักเรียน"),_e(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูลห้องเรียนทั้งหมด...
    </div>
  `);try{const q=await en(),Z=await $e().catch(()=>({})),b=((C=(B=Z.qrReissueFee)==null?void 0:B.trim)==null?void 0:C.call(B))||"5",T=((A=(N=Z.qrReissueDoneMessage)==null?void 0:N.trim)==null?void 0:A.call(N))||"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง";let K={name:((g=Z.qrIssuerSignatureName)==null?void 0:g.trim())||"",title:((D=Z.qrIssuerSignatureTitle)==null?void 0:D.trim())||"",url:Z.qrIssuerSignatureUrl||""};const{data:P}=await cs.from("classes").select("id, class_name, master_subjects ( id, grade_level, subject_group )").order("class_name").limit(1e4),re=new Map;for(const f of P||[]){const d=f.class_name||"";d&&!re.has(d)&&re.set(d,f)}const ne=f=>{const d=f==="ศาสนา";return[...new Set(q.map(V=>d?V.religion_room:V.main_room).filter(Boolean))].sort((V,Y)=>V.localeCompare(Y,"th")).map(V=>{const Y=re.get(V);return{id:(Y==null?void 0:Y.id)||null,class_name:V,_meta:Y||null}})},J=f=>{const d=f.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return d?d[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},ie=f=>{var M;const d=((M=f._meta)==null?void 0:M.master_subjects)??f.master_subjects;return d?Array.isArray(d)?d.length>0?d[0]:null:d:null},x=f=>{const d=ie(f);return(d==null?void 0:d.grade_level)||J(f.class_name||"")||"อื่น ๆ"},j=f=>{const d=ie(f),M=(d==null?void 0:d.subject_group)||"",V=f.class_name||"";return["AGM"].includes(M)||/^(PR|อก\.|อป\.)/i.test(V)?"ศาสนา":["ACDMVOC","AGMVOC"].includes(M)||/^ปวช\./i.test(V)?"ปวช":"สามัญ"},v={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},W=f=>{const d=ne(f),M=[...new Set(d.map(Y=>x(Y)).filter(Boolean))],V=v[f]||[];return[...new Set([...V,...M])].sort((Y,w)=>Y.localeCompare(w,"th"))};let R="สามัญ",s="",o="",t=null,i=parseInt(localStorage.getItem("qr_print_cols")||"4"),_=localStorage.getItem("qr_print_show_code")!=="false",I=localStorage.getItem("qr_print_show_seat")!=="false",O=localStorage.getItem("qr_print_show_room")!=="false",k="all",S=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(S)||S<1)&&(S=4);let $=[],X=[],z="ทำหาย";const se=()=>{if(t==="individual"&&$.length>0)U();else if(t==="class"&&o)G();else if(t==="level"&&s)oe();else{const f=document.getElementById("qr-preview-section");f&&f.classList.add("hidden")}};if(n){const f=P==null?void 0:P.find(d=>d.id==n);f&&(R=j(f),s=x(f),o=f.id)}const ae=()=>{var Ee,Be;const f=["สามัญ","ศาสนา","ปวช"].map(pe=>`
        <option value="${pe}" ${pe===R?"selected":""}>${pe}</option>
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
                  <option value="ทำหาย" ${z==="ทำหาย"?"selected":""}>ทำหาย</option>
                  <option value="ชำรุด" ${z==="ชำรุด"?"selected":""}>ชำรุด</option>
                  <option value="อื่นๆ" ${z==="อื่นๆ"?"selected":""}>อื่นๆ</option>
                </select>
                <span class="text-xs text-gray-500 font-semibold ml-2">จำนวนซ้ำ:</span>
                <input id="qr-individual-repeat" type="number" min="1" max="40" value="${S}"
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
                  ${f}
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
                  <input type="checkbox" id="show-seat" ${I?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขที่
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-code" ${_?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขประจำตัว
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-room" ${O?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงห้องเรียน
                </label>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 items-center shrink-0">
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">เลือกเพศ:</span>
                <select id="select-print-gender" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="all" ${k==="all"?"selected":""}>ทั้งหมด</option>
                  <option value="ชาย" ${k==="ชาย"?"selected":""}>ชาย 👦</option>
                  <option value="หญิง" ${k==="หญิง"?"selected":""}>หญิง 👧</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">จำนวนคอลัมน์:</span>
                <select id="select-print-cols" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="3" ${i===3?"selected":""}>3 คอลัมน์</option>
                  <option value="4" ${i===4?"selected":""}>4 คอลัมน์</option>
                  <option value="5" ${i===5?"selected":""}>5 คอลัมน์</option>
                  <option value="6" ${i===6?"selected":""}>6 คอลัมน์</option>
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
      `);const d=document.getElementById("qr-filter-category"),M=document.getElementById("qr-filter-level"),V=document.getElementById("qr-filter-class"),Y=document.getElementById("qr-level-info"),w=document.getElementById("btn-print-whole-level"),te=document.getElementById("qr-individual-search"),H=document.getElementById("qr-individual-results"),Q=document.getElementById("qr-individual-repeat"),le=document.getElementById("qr-individual-clear"),de=document.getElementById("qr-individual-code-bulk"),ue=document.getElementById("qr-individual-add-codes"),xe=document.getElementById("qr-reissue-reason");xe.addEventListener("change",()=>{z=xe.value}),(Ee=document.getElementById("btn-qr-issuer-sig"))==null||Ee.addEventListener("click",()=>{wo(K,pe=>{K=pe})});const ye="px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm",mt="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700 relative",Ae={print:{btn:document.getElementById("qr-page-tab-print"),panel:document.getElementById("qr-tab-print")},history:{btn:document.getElementById("qr-page-tab-history"),panel:document.getElementById("qr-tab-history")},requests:{btn:document.getElementById("qr-page-tab-requests"),panel:document.getElementById("qr-tab-requests")}},ke=pe=>{Object.entries(Ae).forEach(([me,be])=>{!be.btn||!be.panel||(be.btn.className=me===pe?ye:mt,be.panel.classList.toggle("hidden",me!==pe))}),pe==="history"&&vo(Ae.history.panel,{cols:i,showCode:_,showSeat:I,showRoom:O,qrReissueFee:b,qrIssuer:K,isAdmin:!e}),pe==="requests"&&p&&_o(Ae.requests.panel,{teacher:e,cols:i,showCode:_,showSeat:I,showRoom:O,qrReissueDoneMessage:T,qrReissueFee:b,qrIssuer:K})};Ae.print.btn.addEventListener("click",()=>ke("print")),Ae.history.btn.addEventListener("click",()=>ke("history")),(Be=Ae.requests.btn)==null||Be.addEventListener("click",()=>ke("requests")),p&&window._pendingQRTab==="requests"&&(window._pendingQRTab=null,ke("requests")),p&&ls({limit:500}).then(pe=>{const me=pe.filter(we=>!we.printed_at).length,be=document.getElementById("qr-requests-badge");be&&me>0&&(be.textContent=String(me),be.classList.remove("hidden"))}).catch(()=>{}),te.addEventListener("input",()=>E(te.value.trim())),le.addEventListener("click",()=>{var pe;$=[],X=[],t=null,te.value="",de.value="",H.classList.add("hidden"),u(),(pe=document.getElementById("qr-preview-section"))==null||pe.classList.add("hidden")}),ue.addEventListener("click",()=>{const pe=a(de.value);if(!pe.length){F("กรุณากรอกรหัสนักเรียนอย่างน้อย 1 รหัส","warning");return}const me=new Map(q.map(he=>[String(he.student_code||"").trim(),he])),be=[],we=[];for(const he of pe){const Se=me.get(he);Se?be.push(Se):we.push(he)}X=we,be.length>0?(c(be),de.value=we.join(`
`),F(`เพิ่มรายชื่อสำหรับพิมพ์ ${be.length} คน`,"success")):(u(),F("ไม่พบรหัสนักเรียนที่ระบุ","warning"))}),Q.addEventListener("change",()=>{const pe=Math.max(1,Math.min(40,parseInt(Q.value)||4));S=pe,Q.value=String(pe),localStorage.setItem("qr_print_individual_repeat",String(S)),u(),se()}),document.getElementById("show-seat").addEventListener("change",pe=>{I=pe.target.checked,localStorage.setItem("qr_print_show_seat",I),se()}),document.getElementById("show-code").addEventListener("change",pe=>{_=pe.target.checked,localStorage.setItem("qr_print_show_code",_),se()}),document.getElementById("show-room").addEventListener("change",pe=>{O=pe.target.checked,localStorage.setItem("qr_print_show_room",O),se()}),document.getElementById("select-print-gender").addEventListener("change",pe=>{k=pe.target.value,se()}),document.getElementById("select-print-cols").addEventListener("change",pe=>{i=parseInt(pe.target.value),localStorage.setItem("qr_print_cols",i),se()});const ge=()=>{R=d.value;const pe=W(R);M.innerHTML=`
          <option value="">-- เลือกระดับชั้น --</option>
          ${pe.map(me=>`<option value="${me}" ${me===s?"selected":""}>${me}</option>`).join("")}
        `,ve()},ve=()=>{s=M.value;const me=ne(R).filter(we=>s?x(we)===s:!0).sort((we,he)=>(we.class_name||"").localeCompare(he.class_name||"","th"));V.innerHTML=`
          <option value="">-- เลือกห้องเรียน (${me.length} ห้อง) --</option>
          ${me.map(we=>`
            <option value="${y(we.class_name)}" ${we.class_name===o?"selected":""}>${y(we.class_name)}</option>
          `).join("")}
        `,s&&me.length>0?(Y.textContent=`ระดับ ${s} มีทั้งหมด ${me.length} ห้อง`,w.textContent=`📚 พิมพ์ทั้งระดับ ${s} (${me.length} ห้อง แยกหน้า)`,w.classList.remove("hidden")):(Y.textContent="เลือกระดับชั้นเพื่อดูตัวเลือกพิมพ์ทั้งชั้น",w.classList.add("hidden"));const be=V.value;be?(o=be,t="class",G()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))};d.addEventListener("change",()=>{s="",o="",t=null,ge()}),M.addEventListener("change",()=>{o="",t=null,ve()}),V.addEventListener("change",()=>{o=V.value,o?(t="class",G()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))}),w.addEventListener("click",()=>{t="level",oe()}),ge()},l=f=>f?R==="ศาสนา"?f.religion_room||f.main_room||"ไม่ระบุห้อง":f.main_room||f.religion_room||"ไม่ระบุห้อง":"ไม่ระบุห้อง",h=f=>{const d=l(f),M=R==="ศาสนา",Y=q.filter(w=>(M?w.religion_room:w.main_room)===d).sort((w,te)=>(w.student_code||"").localeCompare(te.student_code||"")).findIndex(w=>String(w.id)===String(f.id));return Y>=0?Y+1:""},L=()=>{const f=new Map(q.map(d=>[String(d.id),d]));return $.map(d=>f.get(String(d))).filter(Boolean)},a=f=>{const d=new Set;return String(f||"").split(/[\s,，;；|]+/).map(M=>M.trim()).filter(Boolean).filter(M=>d.has(M)?!1:(d.add(M),!0))},c=f=>{const d=[...$],M=new Set(d.map(String));for(const V of f){const Y=String(V.id);M.has(Y)||(M.add(Y),d.push(Y))}$=d,t=$.length>0?"individual":null,u(),$.length>0&&U()},u=()=>{var V;const f=document.getElementById("qr-individual-selected");if(!f)return;const d=L();if(d.length===0&&X.length===0){f.classList.add("hidden"),f.innerHTML="";return}const M=d.length*S;f.classList.remove("hidden"),f.innerHTML=`
        ${d.length>0?`
          <div class="bg-indigo-50 px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-indigo-900">รายการที่เลือก ${d.length} คน</p>
              <p class="text-[11px] text-indigo-700 mt-0.5">พิมพ์รวม ${M} ใบ เมื่อใช้จำนวนซ้ำ ${S} ใบ/คน</p>
            </div>
            <button type="button" id="qr-individual-clear-selected"
              class="px-3 py-1.5 rounded-lg bg-white border border-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs font-bold">
              ล้างรายชื่อ
            </button>
          </div>
          <div class="divide-y divide-indigo-50 bg-white">
            ${d.map(Y=>{const w=Y.main_room||Y.religion_room||"ไม่ระบุห้อง";return`
                <div class="px-4 py-3 flex items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${y(Y.full_name||"ไม่ระบุชื่อ")}</p>
                    <p class="text-xs text-gray-400 font-mono truncate">${y(Y.student_code||"-")} · ${y(w)}</p>
                  </div>
                  <button type="button" data-remove-id="${Y.id}"
                    class="qr-individual-remove px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-bold">
                    ลบ
                  </button>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${X.length>0?`
          <div class="bg-amber-50 border-t border-amber-100 px-4 py-3">
            <p class="text-xs font-bold text-amber-800">ไม่พบรหัส ${X.length} รายการ</p>
            <p class="text-[11px] text-amber-700 font-mono mt-1 break-words">${y(X.join(", "))}</p>
          </div>
        `:""}
      `,(V=f.querySelector("#qr-individual-clear-selected"))==null||V.addEventListener("click",()=>{var Y;$=[],X=[],t=null,u(),(Y=document.getElementById("qr-preview-section"))==null||Y.classList.add("hidden")}),f.querySelectorAll(".qr-individual-remove").forEach(Y=>{Y.addEventListener("click",()=>{var w;$=$.filter(te=>String(te)!==String(Y.dataset.removeId)),t=$.length>0?"individual":null,u(),$.length>0?U():(w=document.getElementById("qr-preview-section"))==null||w.classList.add("hidden")})})},m=f=>[f.student_code,f.full_name,f.main_room,f.religion_room].filter(Boolean).join(" ").toLowerCase(),E=f=>{const d=document.getElementById("qr-individual-results");if(!d)return;const M=f.toLowerCase();if(!M){d.classList.add("hidden"),d.innerHTML="";return}const V=q.filter(Y=>m(Y).includes(M)).sort((Y,w)=>(Y.student_code||"").localeCompare(w.student_code||"")).slice(0,20);if(d.classList.remove("hidden"),!V.length){d.innerHTML='<div class="px-4 py-4 text-center text-xs text-gray-400 bg-gray-50">ไม่พบนักเรียนที่ตรงกับคำค้นหา</div>';return}d.innerHTML=V.map(Y=>{const w=Y.main_room||Y.religion_room||"ไม่ระบุห้อง";return`
          <button type="button" data-student-id="${Y.id}"
            class="qr-individual-pick w-full px-4 py-3 text-left bg-white hover:bg-indigo-50 transition flex items-center justify-between gap-3">
            <span class="min-w-0">
              <span class="block text-sm font-bold text-gray-800 truncate">${y(Y.full_name||"ไม่ระบุชื่อ")}</span>
              <span class="block text-xs text-gray-400 font-mono truncate">${y(Y.student_code||"-")} · ${y(w)}</span>
            </span>
            <span class="text-xs font-bold text-indigo-600 flex-shrink-0">${$.includes(String(Y.id))?"เพิ่มแล้ว":"เพิ่ม"}</span>
          </button>
        `}).join(""),d.querySelectorAll(".qr-individual-pick").forEach(Y=>{Y.addEventListener("click",()=>{const w=Y.dataset.studentId||"",te=q.find(Q=>String(Q.id)===String(w)),H=document.getElementById("qr-individual-search");te&&(X=[],c([te])),d.classList.add("hidden"),H&&(H.value="")})})},ee=async f=>{const d=await tt.toDataURL(f.student_code||"",{width:1e3,margin:2,color:{dark:"#000000",light:"#ffffff"}}),M=document.createElement("a"),V=String(f.student_code||f.id||"student").replace(/[^\w-]+/g,"_");M.href=d,M.download=`qr-${V}.png`,document.body.appendChild(M),M.click(),M.remove()},U=async()=>{var w,te;const f=document.getElementById("qr-preview-section"),d=L();if(!f||d.length===0)return;t="individual",f.classList.remove("hidden");const M=d.flatMap(H=>{const Q=l(H),le=h(H);return Array.from({length:S},(de,ue)=>({...H,seat_no:le,_roomName:Q,_print_copy:ue+1}))}),V=d[0],Y=M.length;f.innerHTML=`
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
          <span class="text-base">💡</span>
          <div>
            <p class="font-bold">พิมพ์รายบุคคลสำหรับกรณี QR Code หาย</p>
            <p class="opacity-90">เลือกไว้ ${d.length} คน วางซ้ำ ${S} ใบ/คน รวม ${Y} ใบ และตอนพิมพ์จะไม่ใส่หัวกระดาษชื่อชั้นเรียน</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">รายบุคคล</p>
              <h4 class="font-extrabold text-gray-800 text-base mt-1">${d.length===1?y(V.full_name||"ไม่ระบุชื่อ"):`พร้อมพิมพ์ ${d.length} คน`}</h4>
              <p class="text-xs text-gray-400 font-mono mt-0.5">${d.length===1?y(V.student_code||"-"):`รวม ${Y} ใบ`}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button id="btn-print-individual-qr" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
                🖨️ พิมพ์ / บันทึก PDF (${Y} ใบ)
              </button>
              ${d.length===1?`
                <button id="btn-download-individual-qr" class="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-950 text-white font-bold text-xs shadow-md transition">
                  ⬇️ ดาวน์โหลด PNG
                </button>
              `:""}
            </div>
          </div>
          <div class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="grid-template-columns: repeat(${i}, minmax(0, 1fr));">
            ${M.map((H,Q)=>`
              <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                  <canvas id="individual-copy-canvas-${Q}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                </div>
                <div class="text-left w-full min-w-0 font-sans">
                  <p class="text-[11px] font-bold text-gray-800 truncate">${y(H.full_name)}</p>
                  ${_?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${y(H.student_code||"-")}</p>`:""}
                  <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                    ${O?`<span>ห้อง: ${y(H._roomName)}</span>`:""}
                    ${I&&H.seat_no?`<span>เลขที่: ${H.seat_no}</span>`:""}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `,M.forEach((H,Q)=>{const le=document.getElementById(`individual-copy-canvas-${Q}`);le&&tt.toCanvas(le,H.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},de=>{de&&console.error("Individual QR error:",de)})}),(w=document.getElementById("btn-print-individual-qr"))==null||w.addEventListener("click",async()=>{const H=document.getElementById("btn-print-individual-qr");H.disabled=!0,H.textContent="กำลังบันทึก...";let Q=[];try{Q=await Promise.all(d.map(le=>tn({studentId:le.id,teacherId:e==null?void 0:e.id,reason:z})))}catch(le){console.error("Failed to log QR reissue:",le),F("บันทึกสถิติการออก QR ใหม่ไม่สำเร็จ: "+ce(le),"warning")}H.disabled=!1,H.textContent=`🖨️ พิมพ์ / บันทึก PDF (${Y} ใบ)`,await qe([{className:"รายบุคคล",countLabel:`${d.length} คน · ${Y} ใบ`,students:M,hideHeader:!0}],i,_,I,O,[]),Q.length>0&&(F(`บันทึกสถิติออก QR ใหม่ ${Q.length} คนแล้ว (${z})`,"success"),await kt(Q.length)&&await qe([],i,_,I,O,Q,b,K))}),(te=document.getElementById("btn-download-individual-qr"))==null||te.addEventListener("click",async()=>{await ee(V)})},G=async()=>{t="class";const f=document.getElementById("qr-preview-section");if(f){f.classList.remove("hidden");try{const d=R==="ศาสนา",M=o,V=q.filter(w=>(d?w.religion_room:w.main_room)===o).sort((w,te)=>(w.student_code||"").localeCompare(te.student_code||"")).map((w,te)=>({...w,seat_no:te+1}));if(V.length===0){f.innerHTML=`
            <div class="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <p class="text-4xl mb-2">👥</p>
              <p class="text-sm font-semibold text-gray-500">ไม่มีนักเรียนที่เปิดใช้งานในห้องเรียนนี้</p>
            </div>
          `;return}const Y=V.filter(w=>k==="all"?!0:w.gender===k);f.innerHTML=`
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
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">พรีวิวการจัดวาง — ${y(M)} (${Y.length} คน)</p>
              <button id="btn-trigger-print" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5" ${Y.length===0?'disabled style="opacity: 0.5; cursor: not-allowed;"':""}>
                🖨️ สั่งพิมพ์ห้องนี้ (Print)
              </button>
            </div>
            <div id="qr-live-grid" class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="${Y.length===0?"":`grid-template-columns: repeat(${i}, minmax(0, 1fr));`}">
              ${Y.length===0?`
                <div class="col-span-full py-12 text-center text-xs text-gray-400 font-semibold bg-white border border-gray-100 rounded-2xl">ไม่มีนักเรียนเพศที่เลือกในห้องเรียนนี้</div>
              `:Y.map(w=>`
                <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                  <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                    <canvas id="live-canvas-${w.id}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                  </div>
                  <div class="text-left w-full min-w-0 font-sans">
                    <p class="text-[11px] font-bold text-gray-800 truncate">${y(w.full_name)}</p>
                    ${_?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${y(w.student_code||"-")}</p>`:""}
                    <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                      ${O?`<span>ห้อง: ${y(M)}</span>`:""}
                      ${I?`<span>เลขที่: ${w.seat_no}</span>`:""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `,Y.forEach(w=>{const te=document.getElementById(`live-canvas-${w.id}`);te&&tt.toCanvas(te,w.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},H=>{H&&console.error("Live QR error:",H)})}),Y.length>0&&document.getElementById("btn-trigger-print").addEventListener("click",async()=>{await qe([{className:M,students:Y}],i,_,I,O)})}catch(d){console.error(d),f.innerHTML='<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาดในการโหลดรายชื่อนักเรียน</div>'}}},oe=async()=>{t="level";const f=document.getElementById("qr-filter-level"),d=document.getElementById("qr-preview-section");if(!s||!d)return;const V=ne(R).filter(Y=>x(Y)===s).sort((Y,w)=>(Y.class_name||"").localeCompare(w.class_name||"","th"));if(V.length!==0){d.classList.remove("hidden"),d.innerHTML=`
        <div class="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div class="flex flex-col items-center gap-4">
            <svg class="animate-spin h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            <p class="text-sm font-bold text-gray-700">กำลังจัดเตรียมรายชื่อนักเรียนทุกห้องในระดับ ${y(s)}...</p>
            <p class="text-xs text-gray-400" id="qr-level-progress">กำลังจัดเตรียม 0 / ${V.length} ห้อง</p>
          </div>
        </div>
      `;try{const Y=[],w=R==="ศาสนา";for(let H=0;H<V.length;H++){const Q=V[H],le=document.getElementById("qr-level-progress");le&&(le.textContent=`กำลังจัดเตรียม ${H+1} / ${V.length} ห้อง — ${Q.class_name}`);const de=q.filter(ue=>(w?ue.religion_room:ue.main_room)===Q.class_name).filter(ue=>k==="all"||ue.gender===k).sort((ue,xe)=>(ue.student_code||"").localeCompare(xe.student_code||"")).map((ue,xe)=>({...ue,seat_no:xe+1}));de.length>0&&Y.push({className:Q.class_name,students:de})}if(Y.length===0){d.innerHTML='<div class="bg-white border border-gray-200 rounded-3xl p-8 text-center text-gray-400 text-sm">ไม่พบนักเรียนในระดับชั้นนี้</div>';return}const te=Y.reduce((H,Q)=>H+Q.students.length,0);d.innerHTML=`
          <div class="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 class="font-bold text-gray-800 text-base">📚 พร้อมพิมพ์ทั้งระดับ ${y(s)}</h4>
                <p class="text-sm text-gray-500 mt-1">${Y.length} ห้อง · ${te} คน · แต่ละห้องจะแยกหน้ากระดาษ</p>
              </div>
              <button id="btn-confirm-whole-level-print" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2">
                🖨️ พิมพ์ / บันทึก PDF ทั้ง ${y(s)}
              </button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${Y.map(H=>`
                <div class="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-center">
                  <p class="text-sm font-bold text-gray-800">${y(H.className)}</p>
                  <p class="text-xs text-gray-500 mt-0.5">${H.students.length} คน</p>
                </div>
              `).join("")}
            </div>
          </div>
        `,document.getElementById("btn-confirm-whole-level-print").addEventListener("click",async()=>{await qe(Y,i,_,I,O)})}catch(Y){console.error(Y),d.innerHTML=`<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาด: ${Y.message}</div>`}}};ae()}catch(q){console.error(q),F("โหลดข้อมูลล้มเหลว: "+ce(q),"error")}}async function vo(e,{cols:n,showCode:r,showSeat:p,showRoom:B,qrReissueFee:C,qrIssuer:N,isAdmin:A}){var ie;if(!e||e.dataset.loaded)return;e.dataset.loaded="1",e.innerHTML=`
    <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-3">
      <div>
        <h4 class="font-bold text-gray-800 text-sm">🧾 ประวัตินักเรียนที่มาติดต่อออก QR Code ใหม่</h4>
        <p class="text-xs text-gray-400 mt-0.5">${A?"ค้นหา ออก QR ซ้ำ ออกใบเสร็จซ้ำ แก้ไขเหตุผล หรือลบรายการได้":"ค้นหา หรือออก QR / ใบเสร็จซ้ำได้ (แก้ไข/ลบได้เฉพาะแอดมิน)"}</p>
      </div>
      <input id="qr-reissue-search" type="search"
        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
        placeholder="ค้นหาชื่อ รหัส หรือห้อง..." />
      <div id="qr-reissue-summary" class="grid grid-cols-2 gap-2"></div>
      <div id="qr-reissue-history" class="bg-gray-50/50 rounded-2xl px-3">
        <p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>
      </div>
    </div>
  `;let g=[],D="",q=null,Z={reason:"ทำหาย",note:""};const b=()=>{const x=e.querySelector("#qr-reissue-history");if(!x)return;const j=D.trim().toLowerCase(),v=j?g.filter(R=>{const s=R.students||{};return String(s.full_name||"").toLowerCase().includes(j)||String(s.student_code||"").toLowerCase().includes(j)||String(s.main_room||"").toLowerCase().includes(j)}):g,W=e.querySelector("#qr-reissue-summary");if(W){const R=Number(C)||0;W.innerHTML=`
        <div class="bg-indigo-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-indigo-500 font-bold">จำนวนรายการ${j?" (ที่กรอง)":""}</p>
          <p class="text-base font-extrabold text-indigo-700">${v.length}</p>
        </div>
        <div class="bg-amber-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-amber-600 font-bold">ยอดค่าธรรมเนียมรวม (${R} บาท/ใบ)</p>
          <p class="text-base font-extrabold text-amber-700">${(v.length*R).toLocaleString("th-TH")} บาท</p>
        </div>`}x.innerHTML=v.length?`
      <div class="divide-y divide-gray-100">
        ${v.map(R=>{var s,o,t,i,_,I;return R.id===q?`
          <div class="py-3 space-y-2">
            <p class="font-bold text-gray-700 text-xs">${y(((s=R.students)==null?void 0:s.full_name)||"-")} <span class="font-normal text-gray-400">(${y(((o=R.students)==null?void 0:o.student_code)||"-")})</span></p>
            <div class="flex flex-wrap gap-2 items-center">
              <select id="reissue-edit-reason" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                <option value="ทำหาย" ${Z.reason==="ทำหาย"?"selected":""}>ทำหาย</option>
                <option value="ชำรุด" ${Z.reason==="ชำรุด"?"selected":""}>ชำรุด</option>
                <option value="อื่นๆ" ${Z.reason==="อื่นๆ"?"selected":""}>อื่นๆ</option>
              </select>
              <input id="reissue-edit-note" type="text" placeholder="หมายเหตุ (ถ้ามี)" value="${y(Z.note||"")}"
                class="flex-1 min-w-[140px] border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500" />
              <button type="button" data-action="save-edit" data-log-id="${R.id}" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">บันทึก</button>
              <button type="button" data-action="cancel-edit" class="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs">ยกเลิก</button>
            </div>
          </div>
        `:`
          <div class="flex items-center justify-between gap-3 py-2.5 text-xs flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 truncate">${y(((t=R.students)==null?void 0:t.full_name)||"-")} <span class="font-normal text-gray-400">(${y(((i=R.students)==null?void 0:i.student_code)||"-")})</span></p>
              <p class="text-gray-400 mt-0.5">เลขที่ QR-${String(R.receipt_no).padStart(6,"0")} · ${y(R.reason)}${R.note?` (${y(R.note)})`:""} · ห้อง ${y(((_=R.students)==null?void 0:_.main_room)||"-")} · ออกโดย ${y(((I=R.teachers)==null?void 0:I.full_name)||"แอดมิน")} · ${new Date(R.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</p>
            </div>
            <div class="flex gap-1.5 shrink-0">
              <button type="button" data-action="reprint-qr" data-log-id="${R.id}" title="ออก QR Code" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]">🖨️ QR</button>
              <button type="button" data-action="reprint-receipt" data-log-id="${R.id}" title="ออกใบเสร็จ" class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-[11px]">🧾 ใบเสร็จ</button>
              ${A?`
                <button type="button" data-action="edit" data-log-id="${R.id}" title="แก้ไข" class="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-[11px]">✏️ แก้ไข</button>
                <button type="button" data-action="delete" data-log-id="${R.id}" title="ลบ" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
              `:""}
            </div>
          </div>
        `}).join("")}
      </div>
    `:`
      <p class="text-xs text-gray-400 text-center py-6">${g.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีประวัติการออก QR ใหม่"}</p>
    `},T=async()=>{const x=e.querySelector("#qr-reissue-history");if(x){x.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>';try{g=await dn({limit:300}),b()}catch(j){console.error("Failed to load QR reissue history:",j),x.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดประวัติไม่สำเร็จ</p>'}}},K=async x=>{const j=x.students;if(!(j!=null&&j.id)){F("ไม่พบข้อมูลนักเรียนสำหรับรายการนี้","warning");return}await qe([{className:"รายบุคคล",countLabel:"1 ใบ",students:[{id:j.id,full_name:j.full_name,student_code:j.student_code,seat_no:null,_roomName:j.main_room}],hideHeader:!0}],n,r,p,B,[])},P=async x=>{await qe([],n,r,p,B,[x],C,N)},re=async x=>{var j;if(A)try{const v=await ln(x,{reason:Z.reason,note:((j=Z.note)==null?void 0:j.trim())||null});g=g.map(W=>W.id===x?v:W),q=null,b(),F("บันทึกการแก้ไขแล้ว","success")}catch(v){console.error("Failed to update QR reissue log:",v),F("บันทึกไม่สำเร็จ: "+ce(v),"error")}},ne=async x=>{var W;if(!A)return;const j=g.find(R=>R.id===x);if(await dt({title:"ลบประวัตินี้?",message:`ลบรายการออก QR ใหม่ของ ${((W=j==null?void 0:j.students)==null?void 0:W.full_name)||"นักเรียน"} (เลขที่ QR-${String((j==null?void 0:j.receipt_no)??0).padStart(6,"0")})`,detail:"ลบแล้วไม่สามารถกู้คืนได้ สถิติรายการนี้จะหายไปถาวร",confirmText:"ลบเลย"}))try{await rn(x),g=g.filter(R=>R.id!==x),b(),F("ลบประวัติแล้ว","success")}catch(R){console.error("Failed to delete QR reissue log:",R),F("ลบไม่สำเร็จ: "+ce(R),"error")}},J=e.querySelector("#qr-reissue-history");J.addEventListener("click",x=>{const j=x.target.closest("[data-action]");if(!j)return;const v=j.dataset.logId,W=g.find(R=>R.id===v);j.dataset.action==="reprint-qr"&&W?K(W):j.dataset.action==="reprint-receipt"&&W?P(W):j.dataset.action==="delete"&&v&&A?ne(v):j.dataset.action==="edit"&&W&&A?(q=v,Z={reason:W.reason,note:W.note||""},b()):j.dataset.action==="cancel-edit"?(q=null,b()):j.dataset.action==="save-edit"&&v&&A&&re(v)}),J.addEventListener("change",x=>{x.target.id==="reissue-edit-reason"&&(Z.reason=x.target.value)}),J.addEventListener("input",x=>{x.target.id==="reissue-edit-note"&&(Z.note=x.target.value)}),(ie=e.querySelector("#qr-reissue-search"))==null||ie.addEventListener("input",x=>{D=x.target.value,b()}),T()}function ho(e){if(!e||e.dataset.bound)return;e.dataset.bound="1";const n=e.getContext("2d");n.lineWidth=2.5,n.lineCap="round",n.lineJoin="round",n.strokeStyle="#111827";let r=!1,p=null;const B=g=>{const D=e.getBoundingClientRect(),q=g.touches?g.touches[0]:g;return{x:(q.clientX-D.left)*(e.width/D.width),y:(q.clientY-D.top)*(e.height/D.height)}},C=g=>{g.preventDefault(),r=!0,p=B(g)},N=g=>{if(!r)return;g.preventDefault();const D=B(g);n.beginPath(),n.moveTo(p.x,p.y),n.lineTo(D.x,D.y),n.stroke(),p=D},A=()=>{r=!1};e.addEventListener("mousedown",C),e.addEventListener("mousemove",N),window.addEventListener("mouseup",A),e.addEventListener("touchstart",C,{passive:!1}),e.addEventListener("touchmove",N,{passive:!1}),e.addEventListener("touchend",A)}function wo(e,n){var B;(B=document.getElementById("qr-issuer-sig-modal"))==null||B.remove();const r=document.createElement("div");r.id="qr-issuer-sig-modal",r.className="fixed inset-0 z-[230] flex items-center justify-center p-4 bg-black/50",r.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <p class="font-bold text-gray-800 text-sm">✍️ ลายเซ็นผู้ออกให้บัตร QR Code</p>
        <button type="button" id="qr-sig-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <p class="text-[11px] text-gray-400">ชื่อ/ตำแหน่ง/ลายเซ็นนี้จะพิมพ์ลงใบเสร็จออก QR ใหม่ทุกใบอัตโนมัติ แทนต้องเซ็นสดด้วยปากกา</p>
      <div class="flex gap-2">
        <input id="qr-sig-name" type="text" value="${y((e==null?void 0:e.name)||"")}" placeholder="ชื่อ-สกุล เช่น นายฮัมบาลีย์ วาจิ" class="flex-1 min-w-0 border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      </div>
      <input id="qr-sig-title" type="text" value="${y((e==null?void 0:e.title)||"")}" placeholder="ตำแหน่ง เช่น ครูฝ่ายปกครอง (ไม่บังคับ)" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      <button type="button" id="qr-sig-save-info" class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">บันทึกชื่อ-ตำแหน่ง</button>

      <div class="pt-2 border-t border-gray-100">
        <p class="text-[11px] font-bold text-gray-500 mb-1.5">ลายเซ็นปัจจุบัน</p>
        <div id="qr-sig-preview">
          ${e!=null&&e.url?`<img src="${y(e.url)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'}
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
    </div>`,document.body.appendChild(r),r.addEventListener("click",C=>{C.target===r&&r.remove()}),r.querySelector("#qr-sig-close").addEventListener("click",()=>r.remove()),ho(r.querySelector("#qr-sig-canvas"));const p=C=>{r.querySelector("#qr-sig-preview").innerHTML=C?`<img src="${y(C)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'};r.querySelector("#qr-sig-save-info").addEventListener("click",async()=>{const C=r.querySelector("#qr-sig-name").value.trim(),N=r.querySelector("#qr-sig-title").value.trim();try{await Promise.all([Ke("qrIssuerSignatureName",C),Ke("qrIssuerSignatureTitle",N)]),e={...e,name:C,title:N},n(e),F("บันทึกชื่อ-ตำแหน่งแล้ว ✅","success")}catch(A){F("บันทึกไม่สำเร็จ: "+ce(A),"error")}}),r.querySelector("#qr-sig-clear").addEventListener("click",()=>{const C=r.querySelector("#qr-sig-canvas");C.getContext("2d").clearRect(0,0,C.width,C.height)}),r.querySelector("#qr-sig-save-drawn").addEventListener("click",async()=>{const C=r.querySelector("#qr-sig-canvas"),N=await new Promise(g=>C.toBlob(g,"image/png"));if(!N){F("ยังไม่มีลายเซ็นให้บันทึก","warning");return}const A=r.querySelector("#qr-sig-save-drawn");A.disabled=!0,A.textContent="กำลังบันทึก...";try{const g=await Nt(N);await Ke("qrIssuerSignatureUrl",g),e={...e,url:g},n(e),p(g),F("บันทึกลายเซ็นแล้ว ✅","success")}catch(g){F("บันทึกไม่สำเร็จ: "+ce(g),"error")}finally{A.disabled=!1,A.textContent="บันทึกลายเซ็นที่วาด"}}),r.querySelector("#qr-sig-upload").addEventListener("click",async()=>{var A;const C=(A=r.querySelector("#qr-sig-file").files)==null?void 0:A[0];if(!C){F("กรุณาเลือกไฟล์รูปลายเซ็น","warning");return}const N=r.querySelector("#qr-sig-upload");N.disabled=!0,N.textContent="กำลังอัปโหลด...";try{const g=await Nt(C);await Ke("qrIssuerSignatureUrl",g),e={...e,url:g},n(e),p(g),F("อัปโหลดลายเซ็นแล้ว ✅","success")}catch(g){F("อัปโหลดไม่สำเร็จ: "+ce(g),"error")}finally{N.disabled=!1,N.textContent="อัปโหลด"}})}async function _o(e,{teacher:n,cols:r,showCode:p,showSeat:B,showRoom:C,qrReissueDoneMessage:N,qrReissueFee:A="5",qrIssuer:g=null}){var o,t,i,_,I,O;if(!e||e.dataset.loaded)return;e.dataset.loaded="1";const D=!n;e.innerHTML=`
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
    ${D?`
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
  `;let q=[],Z="";const b=new Set,T=()=>{const k=e.querySelector("#qr-requests-bulk-bar"),S=e.querySelector("#qr-requests-bulk-count");if(!k||!S)return;b.size>0?(k.classList.remove("hidden"),S.textContent=`เลือกไว้ ${b.size} คน`):k.classList.add("hidden");const $=q.filter(z=>!z.printed_at).map(z=>z.id),X=e.querySelector("#qr-requests-select-all");X&&(X.checked=$.length>0&&$.every(z=>b.has(z)))},K=()=>{const k=e.querySelector("#qr-requests-list");if(!k)return;const S=Z.trim().toLowerCase(),$=S?q.filter(ae=>{const l=ae.students||{};return String(l.full_name||"").toLowerCase().includes(S)||String(l.student_code||"").toLowerCase().includes(S)||String(l.main_room||"").toLowerCase().includes(S)}):q,X=$.filter(ae=>!ae.printed_at),z=$.filter(ae=>ae.printed_at);for(const ae of[...b])X.some(l=>l.id===ae)||b.delete(ae);const se=(ae,l)=>{var h,L,a;return`
      <div class="py-3 flex items-start gap-2 ${l?"bg-amber-50/60 -mx-3 px-3 rounded-xl":""}">
        ${l?`<input type="checkbox" data-select-id="${ae.id}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 flex-shrink-0" ${b.has(ae.id)?"checked":""}>`:'<span class="w-3.5 flex-shrink-0"></span>'}
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 text-xs truncate">${y(((h=ae.students)==null?void 0:h.full_name)||"-")} <span class="font-normal text-gray-400">(${y(((L=ae.students)==null?void 0:L.student_code)||"-")})</span></p>
              <p class="text-gray-400 text-[11px] mt-0.5">ห้อง ${y(((a=ae.students)==null?void 0:a.main_room)||"-")} · แจ้งเมื่อ ${new Date(ae.requested_at).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}</p>
            </div>
            ${l?"":'<span class="text-[11px] font-bold text-emerald-600 flex-shrink-0">✅ ทำเสร็จแล้ว</span>'}
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${l?`<button type="button" data-action="fulfill" data-id="${ae.id}" class="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px]">🖨️ ทำเสร็จแล้ว (พิมพ์บัตร)</button>`:""}
            <button type="button" data-action="toggle-pickup" data-id="${ae.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${ae.picked_up_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">🤝 ${ae.picked_up_at?"มารับแล้ว":"มารับหรือยัง"}</button>
            <button type="button" data-action="toggle-fine" data-id="${ae.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${ae.fine_paid_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">💰 ${ae.fine_paid_at?"ชำระค่าปรับแล้ว":"ชำระค่าปรับหรือยัง"}</button>
            <button type="button" data-action="delete" data-id="${ae.id}" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
          </div>
        </div>
      </div>`};k.innerHTML=$.length?`<div class="divide-y divide-gray-100">${[...X,...z].map(ae=>se(ae,!ae.printed_at)).join("")}</div>`:`
      <p class="text-xs text-gray-400 text-center py-6">${q.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีคำขอจากนักเรียน"}</p>
    `,T()},P=async()=>{const k=e.querySelector("#qr-requests-list");k&&(k.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>');try{q=await ls({limit:500}),K()}catch(S){console.error("Failed to load QR reissue requests:",S),k&&(k.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดรายการไม่สำเร็จ</p>')}},re=k=>{var z,se;const S=q.find(ae=>ae.id===k);if(!((z=S==null?void 0:S.students)!=null&&z.id)){F("ไม่พบข้อมูลนักเรียนสำหรับคำขอนี้","warning");return}(se=document.getElementById("qr-fulfill-modal"))==null||se.remove();let $=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite($)||$<1)&&($=4);const X=document.createElement("div");X.id="qr-fulfill-modal",X.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",X.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${y(S.students.full_name||"-")}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส ${y(S.students.student_code||"-")} · ห้อง ${y(S.students.main_room||"-")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${$}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึก</button>
        </div>
      </div>`,document.body.appendChild(X),X.addEventListener("click",ae=>{ae.target===X&&X.remove()}),X.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>X.remove()),X.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const ae=X.querySelector("#qr-fulfill-reason").value,l=Math.max(1,Math.min(40,parseInt(X.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(l));const h=X.querySelector("#qr-fulfill-ok");h.disabled=!0,h.textContent="กำลังดำเนินการ...";try{const L=await At({requestId:k,studentId:S.students.id,teacherId:(n==null?void 0:n.id)??null,reason:ae,feedbackId:S.feedback_id,message:N}),a=Array.from({length:l},(c,u)=>({id:S.students.id,full_name:S.students.full_name,student_code:S.students.student_code,seat_no:null,_roomName:S.students.main_room,_print_copy:u+1}));await qe([{className:"รายบุคคล",countLabel:`${l} ใบ`,students:a,hideHeader:!0}],r,p,B,C,[]),X.remove(),F("ทำเสร็จแล้ว บันทึกเข้าประวัติ + แจ้งนักเรียนแล้ว ✅","success"),await P(),L&&await kt(1)&&await qe([],r,p,B,C,[L],A,g)}catch(L){h.disabled=!1,h.textContent="🖨️ พิมพ์ + บันทึก",F("บันทึกไม่สำเร็จ: "+ce(L),"error")}})},ne=()=>{var X;const k=q.filter(z=>{var se;return b.has(z.id)&&((se=z.students)==null?void 0:se.id)});if(!k.length)return;(X=document.getElementById("qr-fulfill-modal"))==null||X.remove();let S=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(S)||S<1)&&(S=4);const $=document.createElement("div");$.id="qr-fulfill-modal",$.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",$.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${k.length} คนพร้อมกัน</p>
          <p class="text-xs text-gray-400 mt-0.5">${k.map(z=>y(z.students.full_name||"-")).join(", ")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${S}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึกทั้งหมด</button>
        </div>
      </div>`,document.body.appendChild($),$.addEventListener("click",z=>{z.target===$&&$.remove()}),$.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>$.remove()),$.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const z=$.querySelector("#qr-fulfill-reason").value,se=Math.max(1,Math.min(40,parseInt($.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(se));const ae=$.querySelector("#qr-fulfill-ok");ae.disabled=!0,ae.textContent="กำลังดำเนินการ...";try{const l=await Promise.all(k.map(L=>At({requestId:L.id,studentId:L.students.id,teacherId:(n==null?void 0:n.id)??null,reason:z,feedbackId:L.feedback_id,message:N}))),h=k.flatMap(L=>Array.from({length:se},(a,c)=>({id:L.students.id,full_name:L.students.full_name,student_code:L.students.student_code,seat_no:null,_roomName:L.students.main_room,_print_copy:c+1})));await qe([{className:"คำขอทำบัตรใหม่ (หลายคน)",countLabel:`${k.length} คน · ${h.length} ใบ`,students:h,hideHeader:!0}],r,p,B,C,[]),$.remove(),b.clear(),F(`ทำเสร็จแล้ว ${k.length} คน บันทึกเข้าประวัติ + แจ้งนักเรียนทุกคนแล้ว ✅`,"success"),await P(),l.length&&await kt(l.length)&&await qe([],r,p,B,C,l,A,g)}catch(l){ae.disabled=!1,ae.textContent="🖨️ พิมพ์ + บันทึกทั้งหมด",F("บันทึกไม่สำเร็จ: "+ce(l),"error")}})},J=async(k,S)=>{const $=q.find(z=>z.id===k),X=$!=null&&$[S]?null:new Date().toISOString();try{await cn(k,S,X),$[S]=X,K()}catch(z){F("บันทึกไม่สำเร็จ: "+ce(z),"error")}},ie=async k=>{if(confirm("ลบคำขอนี้?"))try{await pn(k),q=q.filter(S=>S.id!==k),K(),F("ลบแล้ว","success")}catch(S){F("ลบไม่สำเร็จ: "+ce(S),"error")}};if((o=e.querySelector("#qr-requests-search"))==null||o.addEventListener("input",k=>{Z=k.target.value,K()}),(t=e.querySelector("#qr-requests-list"))==null||t.addEventListener("click",k=>{const S=k.target.closest("[data-action]");if(!S)return;const $=parseInt(S.dataset.id);S.dataset.action==="fulfill"?re($):S.dataset.action==="toggle-pickup"?J($,"picked_up_at"):S.dataset.action==="toggle-fine"?J($,"fine_paid_at"):S.dataset.action==="delete"&&ie($)}),(i=e.querySelector("#qr-requests-list"))==null||i.addEventListener("change",k=>{const S=k.target.closest("[data-select-id]");if(!S)return;const $=parseInt(S.dataset.selectId);S.checked?b.add($):b.delete($),T()}),(_=e.querySelector("#qr-requests-select-all"))==null||_.addEventListener("change",k=>{const S=q.filter($=>!$.printed_at).map($=>$.id);k.target.checked?S.forEach($=>b.add($)):S.forEach($=>b.delete($)),K()}),(I=e.querySelector("#qr-requests-bulk-fulfill"))==null||I.addEventListener("click",()=>ne()),P(),!D)return;let x=[];const j=()=>{const k=e.querySelector("#qr-manager-list");k&&(k.innerHTML=x.length?x.map(S=>{var $,X;return`
      <div class="flex items-center justify-between gap-2 py-2 text-xs">
        <span class="font-semibold text-gray-700">${y((($=S.teachers)==null?void 0:$.full_name)||"-")} <span class="font-normal text-gray-400">(${y(((X=S.teachers)==null?void 0:X.teacher_code)||"-")})</span></span>
        <button type="button" data-revoke="${S.profile_id}" class="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">ยกเลิกสิทธิ์</button>
      </div>`}).join(""):`
      <p class="text-xs text-gray-400 text-center py-4">ยังไม่มีครูที่ได้รับสิทธิ์</p>
    `)},v=async()=>{try{x=await un(),j()}catch{const k=e.querySelector("#qr-manager-list");k&&(k.innerHTML='<p class="text-xs text-red-400 text-center py-4">โหลดไม่สำเร็จ</p>')}};(O=e.querySelector("#qr-manager-list"))==null||O.addEventListener("click",async k=>{const S=k.target.closest("[data-revoke]");if(S)try{await sn(S.dataset.revoke),await v(),F("ยกเลิกสิทธิ์แล้ว","success")}catch($){F("ยกเลิกไม่สำเร็จ: "+ce($),"error")}});const W=e.querySelector("#qr-manager-search"),R=e.querySelector("#qr-manager-search-results");let s=null;W==null||W.addEventListener("input",()=>{clearTimeout(s);const k=W.value.trim();if(!k){R.classList.add("hidden"),R.innerHTML="";return}s=setTimeout(async()=>{try{const S=await nn(k);R.classList.toggle("hidden",!S.length),R.innerHTML=S.map($=>`
          <button type="button" data-grant="${$.profile_id}" data-name="${y($.full_name)}" class="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs hover:bg-gray-50 text-left">
            <span class="font-semibold text-gray-700">${y($.full_name)} <span class="font-normal text-gray-400">(${y($.teacher_code||"-")})</span></span>
            <span class="text-indigo-600 font-bold">+ มอบสิทธิ์</span>
          </button>`).join("")}catch{}},300)}),R==null||R.addEventListener("click",async k=>{const S=k.target.closest("[data-grant]");if(S)try{await on(S.dataset.grant),W.value="",R.classList.add("hidden"),R.innerHTML="",await v(),F(`มอบสิทธิ์ให้ ${S.dataset.name} แล้ว ✅`,"success")}catch($){F("มอบสิทธิ์ไม่สำเร็จ: "+ce($),"error")}}),v()}const Ro=Object.freeze(Object.defineProperty({__proto__:null,_openRandomPickerModal:$s,openClassPromptGenModal:po,renderAnnouncementsView:fo,renderAttendance:Sn,renderAttendanceGrid:Ct,renderClassDetail:It,renderCourseDocLangConfig:bo,renderGrades:$n,renderGradesGrid:Lt,renderLifeSkillScore:En,renderMyClasses:Le,renderPrayerScore:Ln,renderReadingScore:Cn,renderRequests:kn,renderSchedule:uo,renderScheduleBuilder:xo,renderScheduleGrid:Pe,renderStudentQRPrint:yo},Symbol.toStringTag,{value:"Module"}));export{$s as _,bo as a,Fn as b,Gn as c,Dn as d,It as e,fo as f,Le as g,uo as h,xo as i,po as j,eo as o,Pe as r,Ro as t};
