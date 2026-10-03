const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-dashboard-B4a2-7-n.js","assets/api-J-Ak1T-Y.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/sync-Bgbsg-ec.js","assets/ui-BRupvAcB.js","assets/teacher-views-smart-classroom-D3DhAsOr.js","assets/teacher-KTKXfqj4.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-DGb4Ysbu.js","assets/teacher-views-utils-D4PCqVsX.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/academic-term-switcher-BnvBvx15.js","assets/sports-portals.js_v_10.22-kVNs_U_9.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/tutorial-C3EpULMT.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-DtUo0XvO.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-VY_3enml.js","assets/teacher-views-attendance-B8qX3FnK.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-BZQUk4FN.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-quiz-monitor-DA1yIqRo.js","assets/teacher-views-quiz-analytics-Cq25asc_.js","assets/lesson-plan-ai-workspace-BYoW1xGl.js","assets/pp5-doc-x5ykYQ5S.js","assets/confetti-loader-BAN5Lv-C.js","assets/chat-classroom-B7UmImuR.js","assets/student-api-CjEjxwy9.js","assets/teacher-views-flashcards-CzNFTJr3.js","assets/teacher-views-attendance-delegate-BXVhmE8_.js"])))=>i.map(i=>d[i]);
import{a as F,g as ce,_ as fe,h as ct}from"./ui-BRupvAcB.js";import{getSystemConfig as $e,getLifeSkillColumns as ht,getScoreColumns as Oe,createScoreColumn as nt,updateColumnSortOrders as Cs,updateScoreColumn as qs,getMyClasses as pt,setColumnAutoAttendanceSync as js,deleteScoreColumn as At,getDepartments as Is,getReligionRoomsByGrade as Ms,getRoomsByGrade as Ts,getStudentsByReligionRoom as As,getStudentsByRoom as Bs,getMySchedule as Ve,createClass as Rs,linkClassToSchedule as ot,enrollStudents as Ns,getClassStudents as De,getTeacherClassesForLinking as wt,updateClass as at,getClassrooms as ss,getClassScheduleLinks as Et,getPeriods as ut,getMyDonationRequests as Ps,getFlashcardDecks as Hs,deleteClass as ns,getCourseDocLangSettings as Os,getTeacherRoomColors as Lt,assignClassroom as os,getClassSessionDOWs as Ds,getMySubjects as as,deleteScheduleByTeacher as Fs,getClassRosterStudents as Gs,updateClassStudentSpecialResult as zs,autoEnrollStudentsByRoom as Vs,updateClassStudentActive as Us,removeStudentFromClass as Qs,getStudentByCode as Ys,addStudentToClass as Ws,getAttendanceDelegatesForClass as Ks,getClassroomLeaderForRoom as Js,getClassRandomizerState as Xs,getClassScoreSummary as Zs,saveCourseDocLangSettings as en,saveCourseDocLangEditors as tn,getUniqueRooms as rs,getUniqueReligionRooms as ls,getStudents as sn,getQrReissueRequests as is,logQrReissue as nn,saveTeacherRoomColor as ds,upsertScheduleEntry as cs,updateSystemConfig as Ke,revokeQrReissueManager as on,findTeacherForQrManagerGrant as an,grantQrReissueManager as rn,unlinkClassFromSchedule as ln,deleteQrReissueLog as dn,updateQrReissueLog as cn,getQrReissueLogs as pn,markQrReissueRequestPrinted as Bt,setQrReissueRequestStatus as un,deleteQrReissueRequest as mn,getQrReissueManagers as xn,removeAttendanceDelegate as gn,addAttendanceDelegate as bn,saveClassRandomizerState as Rt,resetClassRandomizerPicks as Nt,clearClassGroups as fn,getAttendanceByDate as yn,saveClassGroups as vn,deleteScheduleEntry as hn}from"./api-J-Ak1T-Y.js";import{b as tt}from"./browser-JP79f-a9.js";import{getCopyTemplateForClass as _t,copySheetTemplate as wn}from"./sync-Bgbsg-ec.js";import{s as ps}from"./supabase-BV-W2lsh.js";import{openPP5Doc as us}from"./pp5-doc-x5ykYQ5S.js";import{o as _n}from"./print-overlay-BVfxEd6n.js";import{uploadQrIssuerSignature as Pt}from"./storage-CuUjCgvI.js";import{i as ms,n as rt}from"./skill-groups-BY1NTbf4.js";import{b as $n,e as kn}from"./score-display-CQ4dUIPx.js";import{a as Ct,r as Sn,b as En}from"./teacher-views-grades-BZQUk4FN.js";import{renderAttendanceGrid as qt,renderAttendance as Ln,renderLifeSkillScore as Cn,renderPrayerScore as qn,renderReadingScore as jn}from"./teacher-views-attendance-B8qX3FnK.js";import{l as In,f as Mn}from"./confetti-loader-BAN5Lv-C.js";import{setActiveNav as je,setTitle as Ie,setContent as _e,_htmlEsc as h,getMainContentRef as Tn,setMainContentRef as Ht,_nextPeriodMins as Ue,_transparentEdgeDarkLogo as An,INPUT_CLS as Ce,_generateSessions as Bn,_resolveGeminiKey as xs,SELECT_CLS as $t,_dateInputValue as Ot,_parseDateOnly as Rn}from"./teacher-views-utils-D4PCqVsX.js";const gt="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",Je="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function Nn(e){document.getElementById("main-content").innerHTML=e}function Pn(e){document.getElementById("page-title").textContent=e}function Hn(e){document.querySelectorAll("[data-nav]").forEach(s=>{const a=s.dataset.nav===e;s.classList.toggle("bg-emerald-800",a),s.classList.toggle("text-white",a),s.classList.toggle("text-emerald-200",!a)})}const bt=["ระหว่างเรียน","กลางภาค","ปลายภาค","คะแนนพิเศษ"],On={ระหว่างเรียน:"bg-blue-50 text-blue-700",กลางภาค:"bg-amber-50 text-amber-700",ปลายภาค:"bg-red-50 text-red-700",คะแนนพิเศษ:"bg-purple-50 text-purple-700"},Dn=["คะแนนมาเรียน","คะแนนละหมาด"];function ft(e,s){var x;(x=document.getElementById("sc-confirm-popup"))==null||x.remove();const a=document.createElement("div");a.id="sc-confirm-popup",a.className="fixed inset-0 z-[200] flex items-center justify-center p-6",a.style.background="rgba(0,0,0,0.45)",a.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">${e}</p>
      <div class="flex gap-3">
        <button id="sc-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
        <button id="sc-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold">ลบเลย</button>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#sc-conf-no").addEventListener("click",()=>a.remove()),a.querySelector("#sc-conf-yes").addEventListener("click",()=>{a.remove(),s()})}async function Fn(e,s,a){var x;if(!(!(e!=null&&e.id)||!(a!=null&&a.course_id)))try{const I=(await pt(e.id).catch(()=>[])).filter(v=>v.id!==s&&v.course_id===a.course_id);if(!I.length)return;const P=(await Promise.all(I.map(async v=>{const O=await Oe(v.id).catch(()=>[]);return O.length?{...v,cols:O}:null}))).filter(Boolean);if(!P.length)return;(x=document.getElementById("sc-same-subj-popup"))==null||x.remove();const M=document.createElement("div");M.id="sc-same-subj-popup",M.className="fixed inset-0 z-[190] flex items-center justify-center p-6",M.style.background="rgba(0,0,0,0.45)",M.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
          <p class="text-indigo-100 text-xs mt-1">ต้องการคัดลอกคอลัมน์คะแนนจากห้องที่มีอยู่แล้วไหม?</p>
        </div>
        <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
          ${P.map(v=>`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${v.class_name}</p>
              <p class="text-xs text-gray-400">${v.cols.length} คอลัมน์</p>
            </div>
            <button class="copy-cols-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold" data-src="${v.id}">คัดลอก</button>
          </div>`).join("")}
        </div>
        <div class="px-5 pb-5">
          <button id="sc-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(M),M.querySelector("#sc-ssp-close").addEventListener("click",()=>M.remove()),M.querySelectorAll(".copy-cols-btn").forEach(v=>{v.addEventListener("click",async()=>{var K;const O=parseInt(v.dataset.src),D=P.find(y=>y.id===O);v.disabled=!0,v.textContent="⏳";try{const y=await Oe(s).catch(()=>[]),j=new Set(y.map(G=>G.assignment_name));let H=0;for(const G of D.cols)j.has(G.assignment_name)||(await nt({class_id:s,assignment_name:G.assignment_name,assignment_type:G.assignment_type,sheet_column:G.sheet_column??"",max_score:G.max_score,column_type:G.column_type??"regular",formula:G.formula??null,formula_refs:G.formula_refs??[]}),H++);F(`คัดลอก ${H} คอลัมน์จาก ${D.class_name} ✅`,"success"),M.remove(),(K=window._scReload)==null||K.call(window)}catch(y){F("คัดลอกไม่สำเร็จ: "+ce(y),"error"),v.disabled=!1,v.textContent="คัดลอก"}})})}catch{}}async function Gn(e,s,a,x=null){var K,y,j;Hn("my-classes"),Pn(`คอลัมน์คะแนน — ${a}`);const B=ms((x==null?void 0:x.skill_group)??((K=x==null?void 0:x.master_subjects)==null?void 0:K.skill_group)),I=["AGM","AGMVOC"].includes((y=x==null?void 0:x.master_subjects)==null?void 0:y.subject_group),P=!!(x!=null&&x.google_sheet_id);let M=new Set,v=new Set,O=!1;const D=async()=>{var te,W,ne,le,i,E,S;const H=await Oe(s),G=await $e().catch(()=>({})),oe=parseInt(G.academicYear??2568),se=parseInt(G.semester??1),U=B?(await ht(oe,se,"สามัญ").catch(()=>[])).slice(0,3).map(r=>r.name):I?Dn:[];M=new Set;for(const r of U){const g=H.filter(b=>b.assignment_name===r);g.length>0&&M.add(g[0].id)}window._scoreColCache=Object.fromEntries(H.map(r=>[r.id,r])),v=new Set;const ie=H.filter(r=>(r.column_type??"regular")==="regular"),w=H.filter(r=>r.column_type==="bonus"),l=H.filter(r=>r.column_type==="derived"),o=H.filter(r=>r.column_type==="override"),c=$n(w),m=ie.reduce((r,g)=>r+(Number(g.max_score)||0),0),t=l.reduce((r,g)=>r+(Number(g.max_score)||0),0),d=m+t,n=(r,g="",b=[])=>{var ae;const p=M.has(r.id),_=r.column_type??"regular",X=b.findIndex($=>$.id===r.id),z=!p&&X>0&&!M.has((ae=b[X-1])==null?void 0:ae.id),J=!p&&X>=0&&X<b.length-1;return`
      <tr class="${p?"bg-emerald-50/35":"hover:bg-gray-50"}">
        <td class="px-3 py-2.5 text-center">
          ${p?'<span class="text-emerald-500 text-xs">🔒</span>':`<input type="checkbox" class="sc-row-cb w-4 h-4 rounded accent-red-500" data-id="${r.id}" />`}
        </td>
        <td class="px-3 py-2.5 text-center whitespace-nowrap">
          <button onclick="window._moveScoreCol(${r.id},'up')" ${z?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${z?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▲</button>
          <button onclick="window._moveScoreCol(${r.id},'down')" ${J?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${J?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▼</button>
        </td>
        <td class="px-4 py-2.5 font-medium text-gray-800">
          ${r.assignment_name}
          ${_==="derived"&&r.formula?`<span class="ml-1 text-[10px] text-indigo-400 font-mono">= ${r.formula}</span>`:""}
          ${g}
        </td>
        ${P?`<td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${r.sheet_column??""}</td>`:""}
        <td class="px-4 py-2.5 text-center text-gray-600">${r.max_score??"—"}</td>
        <td class="px-4 py-2.5 text-right whitespace-nowrap">
          ${p?'<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>':`${_==="regular"?`
               <button onclick="window._toggleAutoSync(${r.id})"
                 title="${r.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}"
                 class="text-xs font-medium mr-2 px-2 py-1 rounded-lg ${r.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-100"}">
                 ${r.auto_attendance_sync?"🔄 ดึงจากเช็คชื่ออัตโนมัติ":"🔄 ดึงจากเช็คชื่อ"}
               </button>`:""}
               <button onclick="window._editScoreCol(${r.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
               <button onclick="window._deleteScoreCol(${r.id})" class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
        </td>
      </tr>`},f=(r,g=null)=>r.length?`<table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
          <tr>
            <th class="px-3 py-2 text-center w-8">เลือก</th>
            <th class="px-3 py-2 text-center w-14">เรียง</th>
            <th class="px-4 py-2 text-left">ชื่อ</th>
            ${P?'<th class="px-4 py-2 text-center">Sheet Col</th>':""}
            <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
            <th class="px-4 py-2 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${r.map(b=>n(b,(g==null?void 0:g(b))??"",r)).join("")}
        </tbody>
      </table>`:'<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์</p>',C=bt.map(r=>({type:r,items:ie.filter(g=>g.assignment_type===r)}));document.getElementById("sc-content").innerHTML=`
      <!-- Summary -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400">รวมคะแนน (นับใน 100)</p>
            <p class="text-2xl font-bold ${d>100?"text-red-600":"text-indigo-700"}">${d} คะแนน
              ${d>100?'<span class="text-sm font-normal text-red-500 ml-1">⚠️ เกิน 100</span>':""}
            </p>
          </div>
          <div class="text-xs text-gray-400 text-right">
            <p>คอลัมน์หลัก: ${ie.length} | อ้างอิง: ${l.length} | พิเศษ: ${w.length} | ปรับคะแนน: ${o.length}</p>
            <p class="mt-1">กลางภาค: ${ie.filter(r=>r.assignment_type==="กลางภาค").reduce((r,g)=>r+(Number(g.max_score)||0),0)} |
               ปลายภาค: ${ie.filter(r=>r.assignment_type==="ปลายภาค").reduce((r,g)=>r+(Number(g.max_score)||0),0)}</p>
          </div>
        </div>
      </div>

      <!-- Bulk delete bar -->
      <div id="sc-bulk-bar" class="hidden mb-3 flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
        <p id="sc-bulk-count" class="text-sm font-semibold text-red-700">เลือก 0 รายการ</p>
        <button id="sc-bulk-delete" class="px-4 py-1.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold">🗑️ ลบที่เลือก</button>
      </div>

      <!-- Regular columns (grouped by type) -->
      ${C.map(r=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${On[r.type]??""}">${r.type}</span>
            <span class="text-xs text-gray-400">รวม ${r.items.reduce((g,b)=>g+(Number(b.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${r.type}')" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${f(r.items)}
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
        ${f(l)}
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
        ${f(o,r=>{var g,b;return(r.link_column_id?` <span class="ml-1 text-[10px] text-teal-500">🔗 → ${((b=(g=window._scoreColCache)==null?void 0:g[r.link_column_id])==null?void 0:b.assignment_name)??"—"}</span>`:' <span class="ml-1 text-[10px] text-red-400">⚠️ ยังไม่ได้เชื่อมคอลัมน์</span>')+(r.override_mode==="add"?' <span class="ml-1 text-[10px] text-amber-500">➕ บวกเพิ่ม</span>':"")})}
      </div>

      <!-- Bonus columns (toggle) -->
      <div class="mb-4">
        <button id="sc-toggle-bonus"
          class="w-full flex items-center justify-between px-5 py-3 bg-white rounded-2xl border border-amber-100 shadow-sm hover:bg-amber-50/30 transition">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">⭐ คอลัมน์พิเศษ (Bonus)</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนเห็นได้</span>
            ${w.length?`<span class="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${w.length}</span>`:""}
          </div>
          <span class="text-gray-400 text-sm">${O?"▲ ซ่อน":"▼ แสดง"}</span>
        </button>
        <div id="sc-bonus-section" class="${O?"":"hidden"} mt-2 bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-amber-50 bg-amber-50/30">
            <div class="text-xs text-gray-500">
              ${c.length?c.map(r=>`<span class="font-mono font-bold text-amber-700">${r.var}</span> = ${r.assignment_name}`).join(" &nbsp;|&nbsp; "):"ยังไม่มีคอลัมน์พิเศษ"}
            </div>
            <button onclick="window._addBonusCol()" class="text-xs text-amber-600 hover:text-amber-800 font-medium flex-shrink-0">＋ เพิ่ม</button>
          </div>
          ${f(w)}
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
            <select id="sc-type" class="${gt}">
              ${bt.map(r=>`<option value="${r}">${r}</option>`).join("")}
            </select>
          </div>
          ${P?`
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
            <select id="sc-link-col" class="${gt}">
              <option value="">— เลือกคอลัมน์ —</option>
            </select>
            <label class="block text-xs font-medium text-gray-600 mb-1 mt-3">วิธีปรับคะแนน</label>
            <select id="sc-override-mode" class="${gt}">
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
      </div>`;const k=document.getElementById("sc-bulk-bar"),Q=document.getElementById("sc-bulk-count"),q=()=>{const r=v.size;k.classList.toggle("hidden",r===0),Q.textContent=`เลือก ${r} รายการ`};document.querySelectorAll(".sc-row-cb").forEach(r=>{r.addEventListener("change",()=>{const g=parseInt(r.dataset.id);r.checked?v.add(g):v.delete(g),q()})}),(te=document.getElementById("sc-bulk-delete"))==null||te.addEventListener("click",()=>{const r=[...v].map(g=>{var b,p;return((p=(b=window._scoreColCache)==null?void 0:b[g])==null?void 0:p.assignment_name)??`ID ${g}`}).join(", ");ft(`ลบ ${v.size} คอลัมน์:<br/><span class="font-semibold">${r}</span>`,async()=>{try{await Promise.all([...v].map(g=>At(g))),F(`ลบ ${v.size} คอลัมน์แล้ว ✅`,"success"),v=new Set,await D()}catch(g){F("ลบไม่สำเร็จ: "+ce(g),"error")}})}),(W=document.getElementById("sc-toggle-bonus"))==null||W.addEventListener("click",()=>{O=!O,document.getElementById("sc-bonus-section").classList.toggle("hidden",!O),document.getElementById("sc-toggle-bonus").querySelector("span:last-child").textContent=O?"▲ ซ่อน":"▼ แสดง"}),(ne=document.getElementById("sc-test-formula"))==null||ne.addEventListener("click",()=>{const r=document.getElementById("sc-formula").value.trim(),g=document.getElementById("sc-formula-result");if(!r){g.classList.add("hidden");return}const b=Object.fromEntries(c.map(_=>[_.var,5])),p=kn(r,b);g.classList.remove("hidden"),p===null?(g.className="text-xs mt-1 text-red-500",g.textContent="⚠️ สูตรไม่ถูกต้อง"):(g.className="text-xs mt-1 text-emerald-600",g.textContent=`✅ ทดสอบด้วย ${c.map(_=>`${_.var}=5`).join(", ")} → ผลลัพธ์ = ${p}`)});const R=(r,g,b=bt[0])=>{document.getElementById("sc-edit-id").value="",document.getElementById("sc-edit-ctype").value=r,document.getElementById("sc-name").value="",document.getElementById("sc-col").value="",document.getElementById("sc-max").value="",document.getElementById("sc-type")&&(document.getElementById("sc-type").value=b),document.getElementById("sc-form-title").textContent=g;const p=r==="bonus",_=r==="derived",X=r==="override";if(document.getElementById("sc-type-wrap").classList.toggle("hidden",p||_||X),document.getElementById("sc-formula-section").classList.toggle("hidden",!_),document.getElementById("sc-link-wrap").classList.toggle("hidden",!X),document.getElementById("sc-max-label").textContent=p?"คะแนนเต็ม (ไม่บังคับ)":X?"คะแนนเต็ม (auto ตามคอลัมน์ที่เชื่อม)":"คะแนนเต็ม",document.getElementById("sc-max").readOnly=X,_&&(document.getElementById("sc-formula").value="",document.getElementById("sc-formula-result").classList.add("hidden"),document.getElementById("sc-vars-hint").textContent=c.length?c.map(z=>`${z.var} = "${z.assignment_name}"`).join("  |  "):"ยังไม่มีคอลัมน์พิเศษ — เพิ่มก่อน"),X){const z=document.getElementById("sc-link-col");z.innerHTML='<option value="">— เลือกคอลัมน์ —</option>'+ie.map(J=>`<option value="${J.id}">${J.assignment_name} (${J.assignment_type??"—"} · เต็ม ${J.max_score??"—"})</option>`).join(""),z.value="",document.getElementById("sc-override-mode").value="max",T()}document.getElementById("sc-form-wrap").classList.remove("hidden"),document.getElementById("sc-name").focus()};window._addScoreCol=r=>R("regular",`เพิ่มคอลัมน์หลัก — ${r}`,r),window._addBonusCol=()=>R("bonus","เพิ่มคอลัมน์พิเศษ (Bonus)"),window._addDerivedCol=()=>R("derived","เพิ่มคอลัมน์อ้างอิงสูตร"),window._addOverrideCol=()=>R("override","เพิ่มคอลัมน์ปรับคะแนน"),(le=document.getElementById("sc-link-col"))==null||le.addEventListener("change",r=>{const g=Number(r.target.value),b=ie.find(p=>p.id===g);document.getElementById("sc-max").value=(b==null?void 0:b.max_score)??""});const T=()=>{var b;const r=(b=document.getElementById("sc-override-mode"))==null?void 0:b.value,g=document.getElementById("sc-override-mode-hint");g&&(g.textContent=r==="add"?"คะแนนคอลัมน์หลักใหม่ = คะแนนตั้งต้นของนักเรียนคนนั้น + คะแนนในคอลัมน์นี้เสมอ (ไม่บวกซ้ำสะสมตอนแก้ค่าซ้ำ)":"ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที")};(i=document.getElementById("sc-override-mode"))==null||i.addEventListener("change",T),window._editScoreCol=r=>{var p;const g=(p=window._scoreColCache)==null?void 0:p[r];if(!g)return;if(M.has(r)){F("คอลัมน์ระบบกลาง แก้ไขไม่ได้","warning");return}const b=g.column_type??"regular";R(b,"แก้ไขคอลัมน์",g.assignment_type),document.getElementById("sc-edit-id").value=r,document.getElementById("sc-name").value=g.assignment_name,document.getElementById("sc-col").value=g.sheet_column??"",document.getElementById("sc-max").value=g.max_score??"",b==="derived"&&g.formula&&(document.getElementById("sc-formula").value=g.formula),b==="override"&&g.link_column_id&&(document.getElementById("sc-link-col").value=String(g.link_column_id),document.getElementById("sc-override-mode").value=g.override_mode==="add"?"add":"max",T())},window._moveScoreCol=async(r,g)=>{const b=await Oe(s),p=b.find(A=>A.id===r);if(!p)return;const _=b.filter(A=>A.assignment_type===p.assignment_type&&(A.column_type??"regular")===(p.column_type??"regular")),X=_.findIndex(A=>A.id===r),z=g==="up"?X-1:X+1;if(z<0||z>=_.length||M.has(_[z].id))return;const J=_[X],ae=_[z],$=J.sort_order??(X+1)*10,u=ae.sort_order??(z+1)*10;await Cs([{id:J.id,sort_order:u},{id:ae.id,sort_order:$}]),await D()},window._deleteScoreCol=r=>{var b,p;if(M.has(r)){F("คอลัมน์ระบบกลาง ลบไม่ได้","warning");return}const g=((p=(b=window._scoreColCache)==null?void 0:b[r])==null?void 0:p.assignment_name)??"คอลัมน์นี้";ft(`ต้องการลบ <span class="font-semibold">"${g}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await At(r),F("ลบแล้ว ✅","success"),await D()}catch{F("ลบไม่สำเร็จ","error")}})},window._toggleAutoSync=async r=>{var _;const g=(_=window._scoreColCache)==null?void 0:_[r];if(!g)return;const b=!g.auto_attendance_sync,p=async()=>{try{await js(r,b),F(b?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน ✅":"ปิดใช้งานแล้ว","success"),await D()}catch{F("บันทึกไม่สำเร็จ","error")}};b?ft(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${g.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้านี้ — ถ้าเคยแก้คะแนนคนไหนด้วยมือไว้ก่อน จะไม่ถูกทับ</span>`,p):await p()},(E=document.getElementById("sc-form-cancel"))==null||E.addEventListener("click",()=>{document.getElementById("sc-form-wrap").classList.add("hidden")}),(S=document.getElementById("sc-form"))==null||S.addEventListener("submit",async r=>{var Z,L,ee,N;r.preventDefault();const g=document.getElementById("sc-save"),b=document.getElementById("sc-edit-id").value,p=document.getElementById("sc-edit-ctype").value,_=document.getElementById("sc-name").value.trim(),X=(((Z=document.getElementById("sc-col"))==null?void 0:Z.value)??"").trim().toUpperCase(),z=((L=document.getElementById("sc-type"))==null?void 0:L.value)??"ระหว่างเรียน",J=document.getElementById("sc-max").value,ae=J&&parseFloat(J)||null,$=p==="derived"&&document.getElementById("sc-formula").value.trim()||null,u=p==="override"&&Number((ee=document.getElementById("sc-link-col"))==null?void 0:ee.value)||null,A=p==="override"?((N=document.getElementById("sc-override-mode"))==null?void 0:N.value)==="add"?"add":"max":null;if(!_){F("กรุณากรอกชื่อรายการ","warning");return}if(p==="derived"&&!ae){F("คอลัมน์อ้างอิงสูตรต้องระบุคะแนนเต็ม","warning");return}if(p==="derived"&&!$){F("กรุณากรอกสูตรคำนวณ","warning");return}if(p==="override"&&!u){F("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const Y=p==="derived"?c.map(V=>({var:V.var,col_id:V.id})):[];g.disabled=!0,g.textContent="กำลังบันทึก...";try{const V={assignment_name:_,assignment_type:p==="bonus"||p==="derived"||p==="override"?"คะแนนพิเศษ":z,sheet_column:X,max_score:ae,column_type:p,formula:$,formula_refs:Y,link_column_id:u,override_mode:A};b?await qs(Number(b),V):await nt({...V,class_id:s}),F("บันทึกสำเร็จ","success"),document.getElementById("sc-form-wrap").classList.add("hidden"),(p==="bonus"||p==="derived")&&(O=!0),await D()}catch(V){F("บันทึกไม่สำเร็จ: "+ce(V),"error")}finally{g.disabled=!1,g.textContent="บันทึก"}})};window._scReload=D,Nn(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-400">${a}</p>
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
  </div>`),await D(),(j=document.getElementById("btn-fill-lifeskill"))==null||j.addEventListener("click",async()=>{const H=document.getElementById("btn-fill-lifeskill");H.disabled=!0,H.textContent="⏳";try{const G=await $e().catch(()=>({})),oe=parseInt(G.academicYear??2568),se=parseInt(G.semester??1),U=await ht(oe,se,"สามัญ").catch(()=>[]);if(!U.length){F("ยังไม่มีหัวข้อทักษะชีวิต — แอดมินเพิ่มก่อน","warning");return}const ie=await Oe(s),w=new Set(ie.map(o=>o.assignment_name));let l=0;for(const o of U)w.has(o.name)||(await nt({class_id:s,assignment_name:o.name,assignment_type:"กลางภาค",sheet_column:o.sheet_col??"",max_score:o.max_score??20}),l++);F(l>0?`เพิ่ม ${l} คอลัมน์ ✅`:"มีคอลัมน์ทักษะชีวิตอยู่แล้ว",l>0?"success":"info"),await D()}catch{F("เติมไม่สำเร็จ","error")}finally{const G=document.getElementById("btn-fill-lifeskill");G&&(G.disabled=!1,G.textContent="🌱 เติมทักษะชีวิต")}}),setTimeout(()=>Fn(e,s,x),500)}const Ge="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",He="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function gs(e){document.getElementById("main-content").innerHTML=e}function bs(e){document.getElementById("page-title").textContent=e}function fs(e){document.querySelectorAll("[data-nav]").forEach(s=>{const a=s.dataset.nav===e;s.classList.toggle("bg-emerald-800",a),s.classList.toggle("text-white",a),s.classList.toggle("text-emerald-200",!a)})}function kt(e){if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const s=String(e).match(/^(\d{4})-(\d{2})-(\d{2})/);if(s)return new Date(Number(s[1]),Number(s[2])-1,Number(s[3]));const a=new Date(e);return Number.isNaN(a.getTime())?null:new Date(a.getFullYear(),a.getMonth(),a.getDate())}function lt(e){const s=kt(e);return s?[s.getFullYear(),String(s.getMonth()+1).padStart(2,"0"),String(s.getDate()).padStart(2,"0")].join("-"):""}function ys(e,s){const a=kt(s)??kt(new Date),x=a.getDay(),B=[];for(const M of e){const v=M.span_periods??1;for(let O=0;O<v;O++)B.push({dow:M.day_of_week,pno:(M.period_no??0)+O})}if(B.sort((M,v)=>{const O=(M.dow-x+7)%7,D=(v.dow-x+7)%7;return O!==D?O-D:M.pno-v.pno}),!B.length)return[];const I=[];let P=0;for(;I.length<6;){for(const M of B){const v=new Date(a);if(v.setDate(v.getDate()+(M.dow-x+7)%7+P*7),I.push(v),I.length>=6)break}P++}return I.slice(0,6)}const vs={ACDM:["วิชาการ","ภาษา","ชีวิต"],AGM:["ศาสนามัธยม"],ACDMVOC:["วิชาการ","ภาษา","สามัญปวช"],AGMVOC:["ศาสนาปวช"]};async function zn(e,s,a={}){var w;const x=a.cloneFrom??null;fs(x?"my-classes":"my-courses"),bs(x?"ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา");const B=await Is().catch(()=>[]),I=await $e().catch(()=>({})),P=I.semester_start??I.term_start_date??lt(new Date),M=vs[s.subject_group]??[],v=M.length===1,O=B.find(l=>l.dept_code===s.dept),D=s.grade_level,K=/^(PR|อก|อป)/i.test(D??""),y=parseInt(I.academicYear),j=parseInt(I.semester),H=x?new Set((window._classesFlat??[]).filter(l=>l.course_id===s.id&&+l.academic_year===y&&+l.semester===j).map(l=>l.class_name)):new Set,G=D?K?await Ms(D).catch(()=>[]):await Ts(D).catch(()=>[]):[],oe=x?G.filter(l=>!H.has(l)):G,se=x?rt(a.srcSkill):"";gs(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${x?"📋 ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา"}</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${s.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${s.subject_code??"—"} · ${s.credit??"—"} หน่วยกิต · ${s.grade_level??"—"}</p>
      </div>
    </div>
    ${x?`<div class="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 mb-5 text-xs text-violet-700">
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
          ${v?`<input type="text" value="${M[0]}" class="${He} bg-gray-50" readonly />
               <input type="hidden" id="cls-skill" value="${M[0]}" />`:`<select id="cls-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${M.map(l=>`<option value="${l}" ${l===se?"selected":""}>${l}</option>`).join("")}
               </select>`}
        </div>
        <!-- ชั้นเรียน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ชั้นเรียน <span class="text-red-400">*</span></label>
          ${oe.length?`<select id="cls-room" class="${Ge}">
                <option value="">— เลือกห้องเรียน —</option>
                ${oe.map(l=>`<option value="${l}">${l}</option>`).join("")}
               </select>`:`<input id="cls-room" type="text" placeholder="พิมพ์ชื่อห้อง เช่น PR 1/7 Ikhlas" class="${He}" autocomplete="off" />
               <p class="text-xs text-amber-500 mt-1">⚠️ ไม่พบห้อง ${D} — พิมพ์ชื่อห้องตรงๆ หรืออัปโหลดนักเรียนพร้อม column <b>religion_room</b></p>`}
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
            ${[1,2,3,4,5,6].map(l=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${l}</p>
              <input id="cls-day${l}" type="date" value="${P}" class="${He} text-xs" />
            </div>`).join("")}
          </div>
        </div>
        <!-- ข้อมูล auto (แสดง readonly) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">ข้อมูลที่ซิงค์ไปยัง Google Sheet</p>
          <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div><span class="text-gray-400">รหัสวิชา:</span> ${s.subject_code??"—"}</div>
            <div><span class="text-gray-400">หน่วยกิต:</span> ${s.credit??"—"}</div>
            <div><span class="text-gray-400">ชั้นปี:</span> ${s.grade_level??"—"}</div>
            <div><span class="text-gray-400">กลุ่มสาระ:</span> ${(O==null?void 0:O.dept_name)??s.dept??"—"}</div>
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
  </div>`);let U=[];document.getElementById("cls-room").addEventListener("change",async l=>{const o=l.target.value;if(!o){document.getElementById("cls-students-section").classList.add("hidden"),document.getElementById("cls-head-section").classList.add("hidden");return}try{U=K?await As(o):await Bs(o),document.getElementById("cls-student-count").textContent=`(${U.length} คน)`,document.getElementById("cls-students-list").innerHTML=U.length?`<table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="px-3 py-2 text-left">รหัส</th>
                <th class="px-3 py-2 text-left">ชื่อ-สกุล</th>
                <th class="px-3 py-2 text-center">ศาสนา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${U.map(t=>`
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 font-mono text-indigo-600">${t.student_code}</td>
                <td class="px-3 py-2">
                  <div class="flex items-center gap-2">
                    ${t.image_url?`<img src="${t.image_url}" class="w-5 h-6 rounded object-cover flex-shrink-0 border border-gray-200" />`:""}
                    ${t.full_name}
                  </div>
                </td>
                <td class="px-3 py-2 text-center text-gray-400">${t.religion_room??"—"}</td>
              </tr>`).join("")}
            </tbody>
          </table>`:'<p class="text-center py-4 text-gray-400 text-sm">ไม่พบนักเรียนในห้องนี้</p>';const c=document.getElementById("cls-head");c.innerHTML='<option value="">— เลือกหัวหน้าห้อง —</option>'+U.map(t=>`<option value="${t.id}" data-code="${t.student_code}" data-room="${t.main_room??""}" data-img="${t.image_url??""}">${t.full_name} (${t.student_code})</option>`).join(""),document.getElementById("cls-students-section").classList.remove("hidden"),document.getElementById("cls-head-section").classList.remove("hidden");const m=()=>{const t=c.options[c.selectedIndex],d=document.getElementById("cls-head-card");if(!t||!t.value){d==null||d.classList.add("hidden");return}const n=t.text.split(" (")[0],f=t.dataset.code??"",C=t.dataset.room??"",k=t.dataset.img??"";document.getElementById("cls-head-name").textContent=n,document.getElementById("cls-head-code").textContent=`รหัส: ${f}`,document.getElementById("cls-head-room").textContent=C?`ห้อง: ${C}`:"";const Q=document.getElementById("cls-head-avatar");Q.innerHTML=k?`<img src="${k}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${n.charAt(0)}</div>`,d==null||d.classList.remove("hidden")};c.addEventListener("change",m)}catch{F("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}});let ie=[];(w=document.getElementById("btn-auto-dates"))==null||w.addEventListener("click",async()=>{var c;const l=document.getElementById("btn-auto-dates"),o=document.getElementById("auto-dates-info");l.textContent="⏳ กำลังดึงตาราง...",l.disabled=!0;try{const m=parseInt(I.academicYear??2568),t=parseInt(I.semester??1),d=e?await Ve(e.id,m,t).catch(()=>[]):[];if(!d.length){o.innerHTML='⚠️ ยังไม่มีตารางสอน — <a href="#" id="goto-schedule" class="underline text-indigo-600 font-medium">สร้างตารางสอน</a> หรือกรอกวันเองด้านล่าง',o.classList.remove("hidden"),(c=document.getElementById("goto-schedule"))==null||c.addEventListener("click",Q=>{var q;Q.preventDefault(),(q=window._navTo)==null||q.call(window,"schedule")}),l.disabled=!1,l.textContent="🗓️ คำนวณจากตารางสอน";return}const n={};d.forEach(Q=>{var R,T;const q=`${Q.subject_name??((R=Q.master_subjects)==null?void 0:R.subject_name)??"?"}|${Q.class_name??""}`;n[q]||(n[q]={label:`${Q.subject_name??((T=Q.master_subjects)==null?void 0:T.subject_name)??"?"}${Q.class_name?` — ${Q.class_name}`:""}`,entries:[]}),n[q].entries.push(Q)});const f=["อา","จ","อ","พ","พฤ","ศ"],C=Q=>{const q=[];Q.forEach(T=>{for(let te=0;te<(T.span_periods??1);te++)q.push({dow:T.day_of_week,pno:(T.period_no??0)+te})}),q.sort((T,te)=>T.dow!==te.dow?T.dow-te.dow:T.pno-te.pno);const R={};return q.forEach(T=>{R[T.dow]||(R[T.dow]=[]),R[T.dow].push(T.pno)}),Object.entries(R).map(([T,te])=>`${f[T]} คาบ ${te.join(",")}`).join(" · ")},k=document.createElement("div");k.id="dates-popup",k.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",k.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(n).map(([Q,q])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="dates-subj" value="${Q}" class="mt-0.5 text-indigo-600 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${q.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${C(q.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(k),k.querySelector("#dates-close").addEventListener("click",()=>k.remove()),k.querySelector("#dates-cancel").addEventListener("click",()=>k.remove()),k.querySelector("#dates-calc").addEventListener("click",()=>{var T;const Q=(T=k.querySelector('input[name="dates-subj"]:checked'))==null?void 0:T.value;if(!Q){alert("กรุณาเลือกวิชาก่อน");return}k.remove();const q=n[Q].entries;ie=q,ys(q,P).forEach((te,W)=>{const ne=document.getElementById(`cls-day${W+1}`);ne&&(ne.value=lt(te))}),o.textContent=`✅ คำนวณจาก "${n[Q].label}" — ${q.length} ช่องตาราง — ตรวจสอบแล้วแก้ไขได้`,o.classList.remove("hidden")})}catch(m){o.textContent="โหลดตารางไม่สำเร็จ: "+ce(m),o.classList.remove("hidden")}finally{l.textContent="🗓️ คำนวณจากตารางสอน",l.disabled=!1}}),document.getElementById("class-form").addEventListener("submit",async l=>{l.preventDefault();const o=document.getElementById("cls-submit"),c=document.getElementById("cls-sheet-id").value.trim(),m=document.getElementById("cls-skill").value,t=document.getElementById("cls-room").value,d=document.getElementById("cls-head").value;if(!t){F("กรุณาเลือกชั้นเรียน","warning");return}o.disabled=!0,o.textContent="กำลังบันทึก...";try{const n={course_id:s.id,class_name:t,skill_group:rt(m),google_sheet_id:c||null,head_student_id:d?Number(d):null,day1_date:document.getElementById("cls-day1").value||null,day2_date:document.getElementById("cls-day2").value||null,day3_date:document.getElementById("cls-day3").value||null,day4_date:document.getElementById("cls-day4").value||null,day5_date:document.getElementById("cls-day5").value||null,day6_date:document.getElementById("cls-day6").value||null},f=await Rs(n,(e==null?void 0:e.id)??null);f!=null&&f.id&&ie.length&&await Promise.all(ie.map(te=>ot(f.id,te.id).catch(()=>{}))),U.length&&(f!=null&&f.id)&&await Ns(f.id,U.map(te=>te.id));const C=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),k=ms(a.srcSkill),Q=["AGM","AGMVOC"].includes(s.subject_group??"");let q=new Set;if(k){const te=await $e().catch(()=>({})),W=await ht(parseInt(te.academicYear??2568),parseInt(te.semester??1),"สามัญ").catch(()=>[]);q=new Set(W.slice(0,3).map(ne=>ne.name))}let R=0;if(x&&(f!=null&&f.id)){const te=await Oe(x).catch(()=>[]),W=new Set;for(const ne of te)Q&&C.has(ne.assignment_name)||k&&q.has(ne.assignment_name)||W.has(ne.assignment_name)||(W.add(ne.assignment_name),await nt({class_id:f.id,assignment_name:ne.assignment_name,assignment_type:ne.assignment_type,sheet_column:ne.sheet_column,max_score:ne.max_score}),R++)}const T=x?`ทำสำเนา "${t}" สำเร็จ — นักเรียน ${U.length} คน · ช่องคะแนน ${R} ช่อง`:`เปิดรายวิชา ${t} สำเร็จ! นักเรียน ${U.length} คน`;F(T,"success"),window._goBack()}catch(n){F("บันทึกไม่สำเร็จ: "+ce(n),"error")}finally{o.disabled=!1,o.textContent="บันทึกและเปิดรายวิชา"}})}async function Vn(e,s){var O,D;fs("my-classes"),bs("แก้ไขห้องเรียน");const a=s.master_subjects,x=vs[a==null?void 0:a.subject_group]??[],B=x.length===1,I=rt(s.skill_group),P=await De(s.id).catch(()=>[]);gs(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._navTo?.('my-classes') || history.back()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">แก้ไขห้องเรียน</h2>
    </div>
    <!-- ข้อมูลคงที่ -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5">
      <p class="text-xs text-emerald-500 font-medium mb-1">คอร์สวิชา / ห้องเรียน (เปลี่ยนไม่ได้)</p>
      <p class="font-bold text-emerald-900">${(a==null?void 0:a.subject_name)??"—"}
        <span class="font-mono text-sm ml-2 text-emerald-600">${(a==null?void 0:a.subject_code)??""}</span>
      </p>
      <p class="text-sm text-emerald-700 mt-0.5">ห้อง: <strong>${s.class_name}</strong></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="cls-edit-form" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Google Sheet ID</label>
          <input id="ce-sheet" type="text" value="${s.google_sheet_id??""}"
            placeholder="วาง ID จาก URL ของ Google Sheet" class="${He}" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ</label>
          ${B?`<input type="text" value="${x[0]}" class="${He} bg-gray-50" readonly />
               <input type="hidden" id="ce-skill" value="${x[0]}" />`:`<select id="ce-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${x.map(K=>`<option value="${K}" ${K===I?"selected":""}>${K}</option>`).join("")}
               </select>`}
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
          <select id="ce-head" class="${Ge}">
            <option value="">— ยังไม่ระบุหัวหน้าห้อง —</option>
            ${P.map(K=>`
              <option value="${K.id}" ${Number(s.head_student_id)===Number(K.id)?"selected":""}>
                ${K.full_name} (${K.student_code})
              </option>`).join("")}
          </select>
          ${P.length?'<p class="text-xs text-gray-400 mt-1">เลือกได้จากนักเรียนที่อยู่ในห้องนี้</p>':'<p class="text-xs text-amber-500 mt-1">ยังไม่พบนักเรียนในห้องนี้ จึงยังเลือกหัวหน้าห้องไม่ได้</p>'}
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
            ${[1,2,3,4,5,6].map(K=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${K}</p>
              <input id="ce-day${K}" type="date"
                value="${s[`day${K}_date`]??""}" class="${He} text-xs" />
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
  </div>`),e!=null&&e.id&&wt(e.id,s.id).then(K=>{const y=document.getElementById("ce-source-class");if(y&&(K.forEach(j=>{const H=j.master_subjects,G=`${(H==null?void 0:H.subject_name)??"?"} (${(H==null?void 0:H.subject_code)??""}) — ${j.class_name} · ${(H==null?void 0:H.credit)??"?"} หน่วยกิต`,oe=new Option(G,j.id,!1,Number(j.id)===Number(s.source_class_id));y.appendChild(oe)}),s.source_class_id)){const j=K.find(H=>Number(H.id)===Number(s.source_class_id));j&&M(j)}}).catch(()=>{});const M=K=>{var G,oe;const y=document.getElementById("ce-source-info");if(!y||!K)return;const j=((G=K.master_subjects)==null?void 0:G.credit)??1,H=((oe=s.master_subjects)==null?void 0:oe.credit)??1;j!==H?(y.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${j} / วิชานี้ ${H}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,y.classList.remove("hidden")):y.classList.add("hidden")};(O=document.getElementById("ce-source-class"))==null||O.addEventListener("change",K=>{var H;const j=K.target.selectedOptions[0];if(!(j!=null&&j.value)){(H=document.getElementById("ce-source-info"))==null||H.classList.add("hidden");return}wt(e==null?void 0:e.id,s.id).then(G=>{const oe=G.find(se=>Number(se.id)===Number(j.value));oe&&M(oe)}).catch(()=>{})});let v=[];(D=document.getElementById("ce-btn-auto-dates"))==null||D.addEventListener("click",async()=>{const K=document.getElementById("ce-btn-auto-dates"),y=document.getElementById("ce-auto-dates-info");K.textContent="⏳ กำลังดึงตาราง...",K.disabled=!0;try{const j=await $e().catch(()=>({})),H=j.semester_start??j.term_start_date??lt(new Date),G=parseInt(j.academicYear??2568),oe=parseInt(j.semester??1),se=e?await Ve(e.id,G,oe).catch(()=>[]):[];if(!se.length){y.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",y.classList.remove("hidden");return}const U={};se.forEach(o=>{const c=`${o.subject_name??"?"}|${o.class_name??""}`;U[c]||(U[c]={label:`${o.subject_name??"?"}${o.class_name?` — ${o.class_name}`:""}`,entries:[]}),U[c].entries.push(o)});const ie=["อา","จ","อ","พ","พฤ","ศ"],w=o=>{const c=[];o.forEach(t=>{for(let d=0;d<(t.span_periods??1);d++)c.push({dow:t.day_of_week,pno:(t.period_no??0)+d})}),c.sort((t,d)=>t.dow!==d.dow?t.dow-d.dow:t.pno-d.pno);const m={};return c.forEach(t=>{m[t.dow]||(m[t.dow]=[]),m[t.dow].push(t.pno)}),Object.entries(m).map(([t,d])=>`${ie[t]} คาบ ${d.join(",")}`).join(" · ")},l=document.createElement("div");l.id="ce-dates-popup",l.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",l.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="ce-dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(U).map(([o,c])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="ce-dates-subj" value="${o}" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${c.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${w(c.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="ce-dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="ce-dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(l),l.querySelector("#ce-dates-close").addEventListener("click",()=>l.remove()),l.querySelector("#ce-dates-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#ce-dates-calc").addEventListener("click",()=>{var m;const o=(m=l.querySelector('input[name="ce-dates-subj"]:checked'))==null?void 0:m.value;if(!o){F("กรุณาเลือกวิชาก่อน","warning");return}l.remove(),v=U[o].entries,ys(U[o].entries,H).forEach((t,d)=>{const n=document.getElementById(`ce-day${d+1}`);n&&(n.value=lt(t))}),y.textContent=`✅ คำนวณจาก "${U[o].label}" — ตรวจสอบและแก้ไขได้`,y.classList.remove("hidden")})}catch(j){y.textContent="โหลดตารางไม่สำเร็จ: "+ce(j),y.classList.remove("hidden")}finally{K.textContent="🗓️ คำนวณจากตารางสอน",K.disabled=!1}}),document.getElementById("cls-edit-form").addEventListener("submit",async K=>{var j;K.preventDefault();const y=document.getElementById("ce-submit");y.disabled=!0,y.textContent="กำลังบันทึก...";try{const H=(j=document.getElementById("ce-source-class"))==null?void 0:j.value;await at(s.id,{google_sheet_id:document.getElementById("ce-sheet").value.trim()||null,skill_group:rt(document.getElementById("ce-skill").value),head_student_id:document.getElementById("ce-head").value?Number(document.getElementById("ce-head").value):null,day1_date:document.getElementById("ce-day1").value||null,day2_date:document.getElementById("ce-day2").value||null,day3_date:document.getElementById("ce-day3").value||null,day4_date:document.getElementById("ce-day4").value||null,day5_date:document.getElementById("ce-day5").value||null,day6_date:document.getElementById("ce-day6").value||null,source_class_id:H?Number(H):null}),v.length&&(await Promise.all(v.map(G=>ot(s.id,G.id).catch(()=>{}))),v=[]),F("บันทึกสำเร็จ","success"),window._navTo?window._navTo("my-classes"):history.back()}catch(H){F("บันทึกไม่สำเร็จ: "+ce(H),"error")}finally{y.disabled=!1,y.textContent="บันทึกการแก้ไข"}})}const Ye=[{cls:"bg-emerald-100 text-emerald-900 font-semibold",hex:"#d1fae5",soft:"#ecfdf5",border:"#6ee7b7",dot:"#6ee7b7"},{cls:"bg-indigo-100 text-indigo-900 font-semibold",hex:"#e0e7ff",soft:"#eef2ff",border:"#a5b4fc",dot:"#a5b4fc"},{cls:"bg-amber-100 text-amber-900 font-semibold",hex:"#fef3c7",soft:"#fffbeb",border:"#fcd34d",dot:"#fcd34d"},{cls:"bg-rose-100 text-rose-900 font-semibold",hex:"#ffe4e6",soft:"#fff1f2",border:"#fda4af",dot:"#fda4af"},{cls:"bg-cyan-100 text-cyan-900 font-semibold",hex:"#cffafe",soft:"#ecfeff",border:"#67e8f9",dot:"#67e8f9"},{cls:"bg-violet-100 text-violet-900 font-semibold",hex:"#ede9fe",soft:"#f5f3ff",border:"#c4b5fd",dot:"#c4b5fd"},{cls:"bg-lime-100 text-lime-900 font-semibold",hex:"#ecfccb",soft:"#f7fee7",border:"#bef264",dot:"#bef264"},{cls:"bg-orange-100 text-orange-900 font-semibold",hex:"#ffedd5",soft:"#fff7ed",border:"#fdba74",dot:"#fdba74"},{cls:"bg-pink-100 text-pink-900 font-semibold",hex:"#fce7f3",soft:"#fdf2f8",border:"#f9a8d4",dot:"#f9a8d4"},{cls:"bg-teal-100 text-teal-900 font-semibold",hex:"#ccfbf1",soft:"#f0fdfa",border:"#5eead4",dot:"#5eead4"},{cls:"bg-sky-100 text-sky-900 font-semibold",hex:"#e0f2fe",soft:"#f0f9ff",border:"#7dd3fc",dot:"#7dd3fc"},{cls:"bg-fuchsia-100 text-fuchsia-900 font-semibold",hex:"#fae8ff",soft:"#fdf4ff",border:"#f0abfc",dot:"#f0abfc"}],st=e=>String(e??"").trim().toLowerCase(),hs=/^#[0-9a-f]{6}$/i;function Un(e){let s=2166136261;for(let a=0;a<e.length;a+=1)s^=e.charCodeAt(a),s=Math.imul(s,16777619);return s>>>0}function Qn({teacherId:e="",className:s="",subjectName:a="",fallbackId:x=""}={}){return`${st(e)}|${mt({className:s,subjectName:a,fallbackId:x})}`}function mt({className:e="",subjectName:s="",fallbackId:a=""}={}){const x=st(e),B=st(s),I=st(a);return x||B||I||"default"}function Dt(e){const s=hs.test(e)?e.slice(1):"e0e7ff";return{r:parseInt(s.slice(0,2),16),g:parseInt(s.slice(2,4),16),b:parseInt(s.slice(4,6),16)}}function Yn({r:e,g:s,b:a}){return`#${[e,s,a].map(x=>Math.max(0,Math.min(255,Math.round(x))).toString(16).padStart(2,"0")).join("")}`}function yt(e,s,a=.5){const x=Dt(e),B=Dt(s);return Yn({r:x.r*(1-a)+B.r*a,g:x.g*(1-a)+B.g*a,b:x.b*(1-a)+B.b*a})}function We(e){const s=hs.test(String(e??""))?String(e).toLowerCase():"#6366f1";return{cls:"",hex:s,soft:yt(s,"#ffffff",.86),border:yt(s,"#ffffff",.45),dot:s,text:yt(s,"#000000",.28)}}function Wn(e={}){const s=Qn(e),a=Un(s)%Ye.length;return{...We(Ye[a].dot),cls:Ye[a].cls,idx:a,key:s}}function ze(e={},s={}){const a=mt(e),x=s instanceof Map?s.get(a):s[a];return x?We(x):Wn(e)}const Ft="pp5_free_timer_count",Gt="pp5_timer_effect_style",it="pp5_timer_sound",zt="pp5_timer_break_step",Vt="pp5_timer_ambient",Ut="pp5_timer_font_scale",Qt="pp5_timer_show_ambient_countdown",Xe="pp5_timer_last_countdown_sec",Yt="pp5_timer_last_break_sec",Kn="alarm-bell.mp3",jt=[{key:"forest-wind",label:"🌲 ลมป่า",file:"forest-wind.mp3"},{key:"calm-ocean-breeze",label:"🌊 สายลมทะเล",file:"calm-ocean-breeze.mp3"},{key:"path-to-jannah",label:"🕌 Path to Jannah",file:"path-to-jannah.mp3"},{key:"waterfall-nature",label:"💦 น้ำตกธรรมชาติ",file:"waterfall-nature.mp3"},{key:"calm",label:"🧘 สงบ",file:"calm.mp3"},{key:"meditation-01",label:"🎐 สมาธิ 01",file:"meditation-01.mp3"},{key:"meditation-02",label:"🎐 สมาธิ 02",file:"meditation-02.mp3"},{key:"nature-piano",label:"🎹 เปียโนธรรมชาติ",file:"nature-piano.mp3"},{key:"solo-piano",label:"🎹 เปียโนเดี่ยว",file:"solo-piano.mp3"},{key:"rain",label:"🌧️ เสียงฝน",file:"rain.mp3"}];function It(e){return`/pp5online/sounds/${e}`}function ws(){var s;const e=parseInt((s=window._pp5SystemCfg)==null?void 0:s.freeTimerLimit,10);return Number.isFinite(e)?e:1}function Ze(e,s,a){a=Math.max(0,Math.min(1,a));const x=[1,3,5].map(P=>parseInt(e.slice(P,P+2),16)),B=[1,3,5].map(P=>parseInt(s.slice(P,P+2),16));return`rgb(${x.map((P,M)=>Math.round(P+(B[M]-P)*a)).join(",")})`}function vt(e){const s=Math.max(0,Math.round(e)),a=Math.floor(s/3600),x=Math.floor(s%3600/60),B=s%60;return a>0?`${String(a).padStart(2,"0")}:${String(x).padStart(2,"0")}:${String(B).padStart(2,"0")}`:`${String(x).padStart(2,"0")}:${String(B).padStart(2,"0")}`}let Te=null;function Jn(e,s,a="sine",x=.18){if(localStorage.getItem(it)!=="off")try{Te=Te||new(window.AudioContext||window.webkitAudioContext),Te.state==="suspended"&&Te.resume();const B=Te.createOscillator(),I=Te.createGain();B.type=a,B.frequency.value=e,I.gain.value=x,B.connect(I),I.connect(Te.destination),B.start(),I.gain.exponentialRampToValueAtTime(1e-4,Te.currentTime+s/1e3),B.stop(Te.currentTime+s/1e3)}catch{}}const Xn=()=>Jn(880,120,"square",.12);let Qe=null;function Zn(){if(localStorage.getItem(it)!=="off")try{Qe=Qe||new Audio(It(Kn)),Qe.currentTime=0,Qe.volume=.7,Qe.play().catch(()=>{})}catch{}}let Ne=null,Fe=null;function Re(){if(Ne)try{Ne.pause()}catch{}Ne=null,Fe=null}function eo(e){if(Fe===e){Re();return}Re();const s=jt.find(a=>a.key===e);if(s)try{Ne=new Audio(It(s.file)),Ne.volume=.5,Ne.play().catch(()=>{}),Ne.addEventListener("ended",()=>{Fe===e&&(Fe=null,Ne=null)}),Fe=e}catch{}}function to(){const e=document.createElement("div");e.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="tm-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-700 text-lg">สิทธิ์จับเวลาทดลองใช้งานครบแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์จับเวลาเต็มจอจำกัดการทดลองใช้ฟรี ${ws()} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
      <button id="tm-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(e),e.querySelector("#tm-paywall-close").addEventListener("click",()=>e.remove()),e.querySelector("#tm-upgrade").addEventListener("click",()=>{var s;e.remove(),(s=document.getElementById("btn-donate-float"))==null||s.click()})}function so(e,s,a){var se;(se=document.getElementById("timer-setup-modal"))==null||se.remove(),Re();let x="countdown",B=localStorage.getItem(Gt)||"shake",I=localStorage.getItem(it)!=="off",P=localStorage.getItem(zt)||"60",M=localStorage.getItem(Vt)||"none",v=localStorage.getItem(Qt)==="on";const O=U=>{const ie=parseInt(localStorage.getItem(U),10);return Number.isFinite(ie)&&ie>0?ie:300};let D=Math.floor(O(Xe)/60),K=O(Xe)%60;const y=document.createElement("div");y.id="timer-setup-modal",y.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",document.body.appendChild(y);const j=[1,3,5,10,15,20],H=[{key:"countdown",icon:"⏱️",label:"นับถอยหลัง",sub:"คุมเวลากิจกรรม",grad:"linear-gradient(135deg,#10b981,#0ea5e9);"},{key:"break",icon:"☕",label:"พักเบรค",sub:"มืด→สว่างเตือนหมดเวลา",grad:"linear-gradient(135deg,#334155,#64748b);"},{key:"stopwatch",icon:"⏳",label:"นับเวลา",sub:"นับขึ้นไม่จำกัด",grad:"linear-gradient(135deg,#6366f1,#a855f7);"}];function G(){return`
      <div>
        <p class="text-xs font-semibold text-gray-500 mb-1.5">🎵 เสียงประกอบ <span class="font-normal">(คลิกเพื่อฟังตัวอย่าง คลิกซ้ำเพื่อหยุด)</span></p>
        <div class="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
          <button data-ambient="none" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${M==="none"?"bg-gray-700 text-white":"bg-gray-100 text-gray-600"}">🔇 ไม่มีเสียง</button>
          ${jt.map(U=>`<button data-ambient="${U.key}" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${M===U.key?"bg-teal-600 text-white":"bg-gray-100 text-gray-600"}">${U.label}${Fe===U.key?" ▶️":""}</button>`).join("")}
        </div>
      </div>`}function oe(){var w,l;y.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[94vh] flex flex-col">
        <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="min-w-0">
            <h3 class="text-white font-bold text-base">⏱️ จับเวลา</h3>
            <p class="text-white/80 text-xs mt-0.5 truncate">${s!=null&&s.class_name?s.class_name:""}</p>
          </div>
          <button id="tm-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
        </div>
        <div class="p-5 overflow-y-auto flex flex-col gap-4">

          <div class="grid grid-cols-3 gap-1.5">
            ${H.map(o=>`
              <button data-mode="${o.key}" class="tm-mode-btn py-2.5 px-1 rounded-2xl text-xs font-bold transition ${x===o.key?"text-white":"bg-gray-100 text-gray-500"}"
                style="${x===o.key?`background:${o.grad}`:""}">${o.icon}<br>${o.label}<br><span class="font-normal text-[10px] opacity-80">${o.sub}</span></button>
            `).join("")}
          </div>

          ${x!=="stopwatch"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">ระยะเวลา</p>
            <div class="flex flex-wrap gap-1.5">
              ${j.map(o=>`<button data-min="${o}" class="tm-preset-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition ${D===o&&K===0?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}">${o} นาที</button>`).join("")}
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <input id="tm-custom-min" type="number" min="0" max="180" value="${D}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">นาที</span>
              <input id="tm-custom-sec" type="number" min="0" max="59" value="${K}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">วินาที</span>
            </div>
          </div>
          `:""}

          ${x==="countdown"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">เอฟเฟกต์ตอนใกล้หมดเวลา</p>
            <div class="flex gap-2">
              <button data-eff="shake" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${B==="shake"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">📳 สั่น</button>
              <button data-eff="scale" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${B==="scale"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">🔍 ขยาย</button>
            </div>
          </div>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-sound" type="checkbox" ${I?"checked":""} class="w-4 h-4 rounded" />
            🔊 เปิดเสียงตอนนับถอยหลัง/หมดเวลา (เสียงกริ่งนาฬิกาปลุก)
          </label>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-show-ambient" type="checkbox" ${v?"checked":""} class="w-4 h-4 rounded" />
            🎵 แสดงตัวเลือกเสียงประกอบในโหมดนับถอยหลังด้วย
          </label>
          ${v?G():""}
          `:""}

          ${x==="break"?`
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
      </div>`,y.querySelector("#tm-close").addEventListener("click",()=>{Re(),y.remove()}),y.querySelectorAll(".tm-mode-btn").forEach(o=>o.addEventListener("click",()=>{if(x=o.dataset.mode,Re(),x!=="stopwatch"){const c=O(x==="break"?Yt:Xe);D=Math.floor(c/60),K=c%60}oe()})),y.querySelectorAll(".tm-preset-btn").forEach(o=>o.addEventListener("click",()=>{D=parseInt(o.dataset.min,10),K=0,oe()})),(w=y.querySelector("#tm-custom-min"))==null||w.addEventListener("change",o=>{const c=parseInt(o.target.value,10);Number.isFinite(c)&&c>=0&&(D=c)}),(l=y.querySelector("#tm-custom-sec"))==null||l.addEventListener("change",o=>{const c=parseInt(o.target.value,10);Number.isFinite(c)&&c>=0&&(K=Math.min(59,c))}),y.querySelectorAll(".tm-eff-btn").forEach(o=>o.addEventListener("click",()=>{B=o.dataset.eff,localStorage.setItem(Gt,B),oe()})),y.querySelectorAll(".tm-step-btn").forEach(o=>o.addEventListener("click",()=>{P=o.dataset.step,localStorage.setItem(zt,P),oe()})),y.querySelectorAll(".tm-ambient-btn").forEach(o=>o.addEventListener("click",()=>{M=o.dataset.ambient,localStorage.setItem(Vt,M),M==="none"?Re():eo(M),oe()}));const U=y.querySelector("#tm-sound");U&&U.addEventListener("change",o=>localStorage.setItem(it,o.target.checked?"on":"off"));const ie=y.querySelector("#tm-show-ambient");ie&&ie.addEventListener("change",o=>{v=o.target.checked,localStorage.setItem(Qt,v?"on":"off"),oe()}),y.querySelector("#tm-start").addEventListener("click",()=>{var d,n;const o=parseInt((d=y.querySelector("#tm-custom-min"))==null?void 0:d.value,10),c=parseInt((n=y.querySelector("#tm-custom-sec"))==null?void 0:n.value,10);Number.isFinite(o)&&o>=0&&(D=o),Number.isFinite(c)&&c>=0&&(K=Math.min(59,c));const m=D*60+K;if(x!=="stopwatch"&&m<=0){F("กรุณาตั้งเวลาอย่างน้อย 1 วินาที","warning");return}if(!a){const f=parseInt(localStorage.getItem(Ft)||"0",10);if(f>=ws()){to();return}localStorage.setItem(Ft,String(f+1))}x!=="stopwatch"&&localStorage.setItem(x==="break"?Yt:Xe,String(m));const t=x==="break"||x==="countdown"&&v?M:"none";Re(),y.remove(),no(x,x==="stopwatch"?0:m,{effectStyle:B,breakStepSec:parseInt(P,10),ambient:t})})}oe(),y.addEventListener("click",U=>{U.target===y&&(Re(),y.remove())})}function no(e,s,{effectStyle:a,breakStepSec:x,ambient:B}){var w,l;(w=document.getElementById("timer-fullscreen-overlay"))==null||w.remove();let I=s,P=s,M=0,v=!1,O=!1,D=null,K=-1,y=parseFloat(localStorage.getItem(Ut))||1,j=null;if(B&&B!=="none"){const o=jt.find(c=>c.key===B);if(o)try{j=new Audio(It(o.file)),j.loop=!0,j.volume=.45,j.play().catch(()=>{})}catch{}}const H=document.createElement("div");H.id="timer-fullscreen-overlay",H.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:background-color .6s linear;",H.innerHTML=`
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
      <input id="tm-size-slider" type="range" min="0.5" max="1.8" step="0.1" value="${y}" />
    </div>
    <div id="tm-digits" class="tm-digits" style="font-size:calc(min(28vw,220px) * ${y});line-height:1;">${vt(e==="stopwatch"?0:P)}</div>
    <div id="tm-sub" style="margin-top:12px;font-size:18px;opacity:.75;"></div>
    <div id="tm-mode-controls" style="display:none;margin-top:28px;gap:16px;align-items:center;"></div>
  `,document.body.appendChild(H);try{(l=H.requestFullscreen)==null||l.call(H)}catch{}const G=H.querySelector("#tm-digits"),oe=H.querySelector("#tm-sub");H.querySelector("#tm-size-slider").addEventListener("input",o=>{y=parseFloat(o.target.value),localStorage.setItem(Ut,String(y)),G.style.fontSize=`calc(min(28vw,220px) * ${y})`});function se(){var o;if(D&&cancelAnimationFrame(D),j)try{j.pause()}catch{}document.fullscreenElement&&((o=document.exitFullscreen)==null||o.call(document).catch(()=>{})),H.remove()}if(H.querySelector("#tm-exit").addEventListener("click",se),e==="break"){const o=H.querySelector("#tm-mode-controls");o.style.display="flex";const c=x===30?"30 วิ":"1 นาที";o.innerHTML=`
      <button id="tm-minus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">− ${c}</button>
      <button id="tm-plus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">+ ${c}</button>
    `,o.querySelector("#tm-minus").addEventListener("click",()=>{P=Math.max(0,P-x)}),o.querySelector("#tm-plus").addEventListener("click",()=>{P+=x,I=Math.max(I,P)}),oe.textContent="พักเบรค — จอสว่างเต็มที่ = หมดเวลาพัก"}else if(e==="stopwatch"){const o=H.querySelector("#tm-mode-controls");o.style.display="flex",o.innerHTML=`
      <button id="tm-pause" style="background:rgba(0,0,0,.15);border:none;padding:12px 26px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">⏸️ หยุดชั่วคราว</button>
    `;const c=o.querySelector("#tm-pause");c.addEventListener("click",()=>{O=!O,c.textContent=O?"▶️ เล่นต่อ":"⏸️ หยุดชั่วคราว"}),H.style.backgroundColor="#1e293b",G.style.color="#ffffff",oe.textContent="นับเวลา"}else oe.textContent="นับถอยหลัง";let U=performance.now();function ie(o){const c=(o-U)/1e3;if(U=o,e==="stopwatch"){O||(M+=c,G.textContent=vt(M)),D=requestAnimationFrame(ie);return}if(!v){P=Math.max(0,P-c);const m=Math.ceil(P),t=I>0?P/I:0,d=1-t;if(G.textContent=vt(P),e==="break")H.style.backgroundColor=Ze("#0f172a","#fef9c3",d),G.style.color=Ze("#94a3b8","#1e293b",d),G.style.animation="";else{let n;if(t>.3?n=Ze("#f59e0b","#10b981",(t-.3)/.7):t>.1?n=Ze("#ef4444","#f59e0b",(t-.1)/.2):n="#ef4444",H.style.backgroundColor=n,G.style.color="#ffffff",t<=.3){const f=1-Math.min(1,t/.3),C=Math.max(.18,.9-f*.7);G.style.animation=`${a==="shake"?"tm-shake":"tm-scale"} ${C}s ease-in-out infinite`}else G.style.animation="";m!==K&&(K=m,m>0&&m<=3&&Xn())}P<=0&&(v=!0,G.textContent="00:00",G.style.animation="",e==="break"?(H.style.backgroundColor="#fef9c3",G.style.color="#1e293b",oe.textContent="หมดเวลาพักเบรคแล้ว"):(oe.textContent="⏰ หมดเวลา!",Zn(),In().then(()=>Mn("mid")).catch(()=>{})))}D=requestAnimationFrame(ie)}D=requestAnimationFrame(ie)}const oo="pp5_exam_docs_pending_class_id";function _s(e){window._pendingExamDocClassId=String(e);try{sessionStorage.setItem(oo,String(e))}catch{}if(typeof window._navTo=="function"){window._navTo("exam-docs");return}F("ไม่พบเมนูเอกสารช่วงสอบ กรุณาเปิดจากหน้าเมนครู","warning")}async function $s(e,s){var x,B,I,P,M;const a=(x=window._classCache)==null?void 0:x[s];if(a){je("my-classes"),Ie("จัดการนักเรียน","class-students"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายชื่อนักเรียน...
  </div>`);try{const[v,O]=await Promise.all([Gs(s),$e().catch(()=>({}))]),D=`classRosterView_${s}`,K=localStorage.getItem(D)||"table",y=v.filter(d=>d.is_active).length,j=a.master_subjects??{},H=["AGM","AGMVOC"].includes(j.subject_group),G=j.subject_group==="ACDMVOC",oe=O.showStudentHouseColor!=="false",se=O.showStudentSportsShirtSize!=="false",U=["ข.ร.","ข.ส.","ม.ส.","ข.ป."],ie=d=>`
      <select data-special-enrollment="${d.enrollment_id}" onclick="event.stopPropagation()"
        class="border border-gray-200 rounded-lg px-1.5 py-1 text-xs bg-white text-gray-600">
        <option value="" ${d.special_result?"":"selected"}>ปกติ</option>
        ${U.map(n=>`<option value="${n}" ${d.special_result===n?"selected":""}>${n}</option>`).join("")}
      </select>`,w=d=>H?d.main_room||d.religion_room||"—":d.religion_room||d.main_room||"—",l=d=>`
      ${oe?`<span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">สี: ${h(d.house_color||"—")}</span>`:""}
      ${se?`<span class="inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-medium">เสื้อ: ${h(d.sports_shirt_size||"—")}</span>`:""}`,o=(d,n="w-12 h-16")=>d.image_url?`<img src="${h(d.image_url)}" class="${n} rounded-2xl object-cover bg-gray-100 border border-gray-100 shadow-sm" loading="lazy" />`:`<div class="${n} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold">${h((d.full_name||"?").trim().slice(0,1))}</div>`,c=v.map((d,n)=>`
      <tr class="student-status-target cursor-pointer transition ${d.is_active?"bg-white hover:bg-emerald-50/40":"bg-gray-50 text-gray-400 hover:bg-gray-100"}"
        data-enrollment-id="${d.enrollment_id}" data-next="${d.is_active?"false":"true"}" data-name="${h(d.full_name)}">
        <td class="px-3 py-2 text-center text-xs text-gray-400">${n+1}</td>
        <td class="px-3 py-2">${o(d)}</td>
        <td class="px-3 py-2 font-mono text-sm">${h(d.student_code)}</td>
        <td class="px-3 py-2">
          <p class="font-semibold text-gray-800 ${d.is_active?"":"line-through text-gray-400"}">${h(d.full_name)}</p>
          <p class="text-xs text-gray-400">${h(w(d))}</p>
          <div class="mt-1 flex flex-wrap gap-1">${l(d)}</div>
        </td>
        ${oe?`<td class="px-3 py-2 text-center text-sm text-gray-600">${h(d.house_color||"—")}</td>`:""}
        ${se?`<td class="px-3 py-2 text-center text-sm text-gray-600">${h(d.sports_shirt_size||"—")}</td>`:""}
        ${G?`<td class="px-3 py-2 text-center">${ie(d)}</td>`:""}
        <td class="px-3 py-2 text-center">
          <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold ${d.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${d.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </td>
      </tr>`).join(""),m=v.map(d=>`
      <button type="button"
        class="student-status-target text-left rounded-2xl border p-4 transition ${d.is_active?"border-emerald-300 bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12),0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.18),0_10px_24px_rgba(16,185,129,0.16)]":"border-gray-300 bg-gray-50 opacity-80 hover:opacity-100"}"
        data-enrollment-id="${d.enrollment_id}" data-next="${d.is_active?"false":"true"}" data-name="${h(d.full_name)}">
        <div class="flex items-start justify-between gap-3">
          ${o(d,"w-20 h-28")}
          <span class="px-2 py-1 rounded-full text-[11px] font-semibold ${d.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${d.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </div>
        <p class="mt-3 font-bold text-gray-800 ${d.is_active?"":"line-through text-gray-400"}">${h(d.full_name)}</p>
        <p class="text-xs font-mono text-sky-700 mt-0.5">${h(d.student_code)}</p>
        <p class="text-xs text-gray-400 mt-0.5">${h(w(d))}</p>
        <div class="mt-2 flex flex-wrap gap-1">${l(d)}</div>
      </button>`).join("");_e(`<div class="animate-fade">
      <div id="students-back-placeholder" class="hidden"></div>
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-gray-700">ทั้งหมด ${v.length} คน · กำลังเรียน ${y} คน</p>
            <p class="text-xs text-gray-400 mt-0.5">ปิดสถานะเมื่อนักเรียนออกกลางคัน ระบบจะไม่ดึงไปเช็คชื่อ/ใบรายชื่อ</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${K==="table"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="table" title="มุมมองตาราง">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4M3 6h4M3 18h4M17 6h4M17 18h4"/></svg>
              </button>
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${K==="grid"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="grid" title="มุมมองกริด">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </button>
            </div>
            <button id="students-sync-enroll" class="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700" title="รีเฟรชรายชื่อนักเรียนในห้องนี้ตามข้อมูลล่าสุด">🔄 รีเฟรชรายชื่อ</button>
            <button id="students-add" class="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700">＋ เพิ่มนักเรียน</button>
            <button id="students-roster" class="px-3 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700">🖨️ สร้างใบรายชื่อ</button>
            <button id="students-print-qr" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">🖨️ พิมพ์ QR Code</button>
          </div>
        </div>
        ${v.length?K==="grid"?`
          <div class="p-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            ${m}
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
                  ${se?'<th class="px-3 py-2 text-center w-28">ไซด์เสื้อ</th>':""}
                  ${G?'<th class="px-3 py-2 text-center w-24">สถานะพิเศษ</th>':""}
                  <th class="px-3 py-2 text-center w-28">สถานะ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">${c}</tbody>
            </table>
          </div>`:`
          <div class="p-12 text-center text-gray-400">
            <p class="text-4xl mb-3">👥</p>
            <p class="font-medium">ยังไม่มีนักเรียนในรายวิชานี้</p>
          </div>`}
      </div>
    </div>`);const t=()=>{var d;return((d=window._loadClassTab)==null?void 0:d.call(window,"students"))??window._openStudentManager(s)};document.querySelectorAll("[data-special-enrollment]").forEach(d=>{d.addEventListener("change",async()=>{try{await zs(d.dataset.specialEnrollment,d.value),F("บันทึกสถานะพิเศษแล้ว","success")}catch(n){F("บันทึกไม่สำเร็จ: "+ce(n),"error")}})}),(B=document.getElementById("students-roster"))==null||B.addEventListener("click",()=>window._openRosterPicker(s)),(I=document.getElementById("students-print-qr"))==null||I.addEventListener("click",()=>{window._pendingQRClassId=s,window._navTo("student-qr-print")}),(P=document.getElementById("students-sync-enroll"))==null||P.addEventListener("click",async d=>{var C;const n=d.currentTarget,f=n.textContent;n.disabled=!0,n.textContent="กำลังรีเฟรช...";try{await Vs(),F("รีเฟรชรายชื่อสำเร็จ","success"),((C=window._loadClassTab)==null?void 0:C.call(window,"students"))??window._openStudentManager(s)}catch{F("รีเฟรชไม่สำเร็จ","error"),n.disabled=!1,n.textContent=f}}),document.querySelectorAll(".student-view-toggle").forEach(d=>{d.addEventListener("click",()=>{localStorage.setItem(D,d.dataset.view),t()})}),document.querySelectorAll(".student-status-target").forEach(d=>{d.addEventListener("click",()=>{var k;const n=d.dataset.next==="true",f=d.dataset.name||"นักเรียน";(k=document.getElementById("student-status-confirm"))==null||k.remove();const C=document.createElement("div");C.id="student-status-confirm",C.className="fixed inset-0 z-[95] bg-white flex flex-col",n?C.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-emerald-100 text-emerald-700">
                ✓
              </div>
              <h3 class="text-2xl font-bold text-gray-800">เปิดสถานะกำลังเรียน?</h3>
              <p class="mt-3 text-gray-500">${h(f)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะกลับมาอยู่ในเช็คชื่อ/ใบรายชื่อของรายวิชานี้</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-700">ยืนยัน</button>
              </div>
            </div>
          </div>`:C.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-red-50 text-red-500 border border-red-100 shadow-sm">
                🗑️
              </div>
              <h3 class="text-2xl font-bold text-gray-900">ลบนักเรียนออกจากห้องเรียนนี้?</h3>
              <p class="mt-3 text-gray-800 font-semibold text-lg">${h(f)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะถูกลบออกจากรายวิชานี้ และระบบซิงก์หรือปุ่มรีเฟรชจะไม่เพิ่มกลับมาอีก<br/>หากต้องการนำกลับ สามารถใช้ปุ่ม “เพิ่มนักเรียน” ได้ภายหลัง</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700">ยืนยันการลบ</button>
              </div>
            </div>
          </div>`,document.body.appendChild(C),C.querySelector("#student-status-cancel").addEventListener("click",()=>C.remove()),C.querySelector("#student-status-ok").addEventListener("click",async()=>{try{n?(await Us(d.dataset.enrollmentId,!0),F("เปิดสถานะกำลังเรียนแล้ว","success")):(await Qs(d.dataset.enrollmentId),F("ลบนักเรียนออกจากห้องเรียนนี้แล้ว","success")),C.remove(),t()}catch(Q){F("ดำเนินการไม่สำเร็จ: "+ce(Q),"error")}})})}),(M=document.getElementById("students-add"))==null||M.addEventListener("click",()=>{var te;(te=document.getElementById("add-student-modal"))==null||te.remove();const d=document.createElement("div");d.id="add-student-modal",d.className="fixed inset-0 z-[90] bg-white flex flex-col animate-fade",d.innerHTML=`
        <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 class="text-xl font-bold text-gray-800">เพิ่มนักเรียนเข้ารายวิชา (หลายคน)</h3>
            <p class="text-xs text-gray-500 mt-1">${h(j.subject_name||"")} · ${h(a.class_name||"")}</p>
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
        </div>`,document.body.appendChild(d);const n=d.querySelector("#add-student-code"),f=d.querySelector("#add-student-search-btn"),C=d.querySelector("#add-student-status"),k=d.querySelector("#added-students-list"),Q=d.querySelector("#added-count");let q=[];function R(){if(Q.textContent=q.length,!q.length){k.innerHTML='<p class="text-xs text-gray-400 italic">ยังไม่มีการเพิ่มในรอบนี้</p>';return}k.innerHTML=q.map((W,ne)=>`
          <div class="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl animate-fade">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-100 w-5 h-5 flex items-center justify-center rounded-full">${q.length-ne}</span>
            <div class="flex-1">
              <p class="text-sm font-bold text-gray-800">${h(W.full_name)}</p>
              <p class="text-xs font-mono text-gray-500">${h(W.student_code)} · ${h(w(W))}</p>
            </div>
            <span class="text-xs text-emerald-600 font-bold">✓ เพิ่มแล้ว</span>
          </div>
        `).join("")}const T=async()=>{const W=n.value.trim();if(W){C.innerHTML='<span class="text-gray-400">กำลังค้นหาและเพิ่ม...</span>',n.disabled=!0,f.disabled=!0;try{const ne=await Ys(W);if(!ne){C.innerHTML='<span class="text-red-500 font-medium">⚠️ ไม่พบนักเรียนรหัสนี้</span>';return}await Ws(s,ne.id),q.unshift(ne),R(),C.innerHTML=`<span class="text-emerald-600 font-medium">✓ เพิ่ม ${h(ne.full_name)} สำเร็จ!</span>`,n.value=""}catch(ne){C.innerHTML=`<span class="text-red-500 font-medium">⚠️ ${ne.message||"เกิดข้อผิดพลาด"}</span>`}finally{n.disabled=!1,f.disabled=!1,n.focus()}}};d.querySelector("#add-student-close").addEventListener("click",()=>{d.remove(),t()}),f.addEventListener("click",T),n.addEventListener("keydown",W=>{W.key==="Enter"&&(W.preventDefault(),T())}),setTimeout(()=>n.focus(),50)})}catch(v){F("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ce(v),"error"),Le(e)}}}async function Le(e){var s;if(je("my-classes"),Ie("ห้องเรียนของฉัน","classes"),!(e!=null&&e.id)){_e(`<div class="max-w-md mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">⚠️</p>
      <p class="font-medium text-gray-600">ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p>
    </div>`);return}_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[a,x,B,I]=await Promise.all([pt((e==null?void 0:e.id)??null),$e().catch(()=>({})),e!=null&&e.id?Lt(e.id).catch(()=>[]):Promise.resolve([]),ss().catch(()=>[])]),P=Object.fromEntries(I.map(l=>[l.id,l])),M=parseInt(x.academicYear??2568),v=parseInt(x.semester??1),[O,D,K]=await Promise.all([e!=null&&e.id?Ve(e.id,M,v).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?Et(e.id).catch(()=>[]):Promise.resolve([]),ut().catch(()=>[])]),y={};D.forEach(l=>{y[l.class_id]||(y[l.class_id]=[]),y[l.class_id].push(l.teacher_schedule_id)});const j=Object.fromEntries(O.map(l=>[l.id,l])),H=Object.fromEntries(K.map(l=>[l.period_no,l])),G=Object.fromEntries((B??[]).map(l=>[l.room_key,l.color_hex])),oe=l=>l.academic_year==null||+l.academic_year===M&&+l.semester===v,se=a.filter(oe);window._classCache=Object.fromEntries(se.map(l=>[l.id,l])),window._classesFlat=se;const U=new Map;se.forEach(l=>{const o=l.master_subjects??{},c=[l.course_id??o.id??"",o.subject_code??"",o.subject_name??"",o.subject_group??""],m=c.some(Boolean)?c.join("|"):`class-${l.id}`;U.has(m)||U.set(m,{key:m,masterSubject:o,classes:[]}),U.get(m).classes.push(l)});const ie=[...U.values()].map(l=>({...l,classes:l.classes.sort((o,c)=>{const m=Ue(o.id,y,j,H),t=Ue(c.id,y,j,H);return m!==t?m-t:String(o.class_name??"").localeCompare(String(c.class_name??""),"th")})})).sort((l,o)=>{var t,d;const c=Math.min(...l.classes.map(n=>Ue(n.id,y,j,H))),m=Math.min(...o.classes.map(n=>Ue(n.id,y,j,H)));return c!==1/0&&m!==1/0&&c!==m?c-m:String(((t=l.masterSubject)==null?void 0:t.subject_name)??"").localeCompare(String(((d=o.masterSubject)==null?void 0:d.subject_name)??""),"th")});_e(`<div class="animate-fade">
      ${se.length?`
      <div class="space-y-5">
        ${ie.map(l=>{const o=l.masterSubject??{};return`
          <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full">${o.subject_code??"—"}</span>
                  <h3 class="font-bold text-gray-800 text-base">${o.subject_name??"—"}</h3>
                </div>
                <p class="text-xs text-gray-400 mt-1">${l.classes.length} ห้องเรียนในคอร์สนี้</p>
              </div>
            </div>
            <div class="grid gap-3 p-4 md:grid-cols-2">
        ${l.classes.map(c=>{var R,T;const m=c.master_subjects,t=_t(x,c),d=["AGM","AGMVOC"].includes(m==null?void 0:m.subject_group),n={teacherId:e==null?void 0:e.id,className:c.class_name,subjectName:m==null?void 0:m.subject_name,fallbackId:c.id},f=ze(n,G);window._classColorCache||(window._classColorCache={}),window._classColorCache[c.id]=f;const C=d?{text:"กลุ่มวิชาศาสนา",cls:"bg-amber-50 text-amber-700"}:c.skill_group?{text:`กลุ่มทักษะ: ${c.skill_group}`,cls:"bg-blue-50 text-blue-700"}:null,k=c.classroom_id?P[c.classroom_id]:null,Q=Ue(c.id,y,j,H),q=(()=>{if(!(y[c.id]??[]).length)return`<button onclick="event.stopPropagation();window._openCombinedEdit(${c.id},'schedule')"
                class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium hover:underline transition">🔗 เชื่อมตารางสอน</button>`;if(Q===1/0)return'<span class="text-[11px] text-gray-400">📅 ไม่พบข้อมูลตาราง</span>';if(Q<=0)return'<span class="text-[11px] text-emerald-600 font-semibold">🟢 กำลังสอนอยู่</span>';if(Q<60)return`<span class="text-[11px] text-emerald-600">⏱ สอนในอีก ${Math.round(Q)} นาที</span>`;const te=Math.floor(Q/60),W=Math.round(Q%60);return te<24?`<span class="text-[11px] text-blue-600">⏱ สอนในอีก ${te} ชม. ${W} นาที</span>`:`<span class="text-[11px] text-gray-500">⏱ สอนในอีก ${Math.floor(te/24)} วัน</span>`})();return`
          <div class="rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer group"
               style="background:${f.soft}; border-color:${f.border}"
               onclick="window._openClassDetail(${c.id})">
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span class="px-2 py-0.5 bg-white/80 text-emerald-700 text-xs font-mono rounded-full">${(m==null?void 0:m.subject_code)??"—"}</span>
                    ${(m==null?void 0:m.credit)!=null?`<span class="px-2 py-0.5 bg-white/80 text-gray-500 text-xs rounded-full">${m.credit} หน่วยกิต</span>`:""}
                    ${C?`<span class="px-2 py-0.5 ${C.cls} text-xs rounded-full">${C.text}</span>`:""}
                    ${c.google_sheet_id?'<span class="px-2 py-0.5 bg-white/80 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
                  </div>
                  <h3 class="font-bold text-gray-800 text-base">${(m==null?void 0:m.subject_name)??"—"}</h3>
                  <p class="text-sm text-gray-500 mt-0.5">ห้อง: <span class="font-semibold" style="color:${f.text}">${c.class_name}</span>
                    ${k?`<span class="ml-2 text-[11px] text-gray-400">📍 ${k.building} ${k.room_number}</span>`:""}
                  </p>
                </div>
                <div class="flex gap-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onclick="event.stopPropagation();window._openClassDashboard(${c.id})"
                    class="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-white/70 rounded-lg transition text-sm" title="Dashboard ห้องเรียน">📈</button>
                  <button onclick="event.stopPropagation();window._openExamDocsForClass(${c.id})"
                    class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-white/70 rounded-lg transition text-sm" title="เอกสารสอบ">🧾</button>
                  <button onclick="event.stopPropagation();window._copyClass(${c.id},'${((R=c.class_name)==null?void 0:R.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-gray-400 hover:text-violet-600 hover:bg-white/70 rounded-lg transition text-sm" title="ทำสำเนาห้องเรียน">📋</button>
                  <button onclick="event.stopPropagation();window._openCombinedEdit(${c.id})"
                    class="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition text-sm" title="แก้ไข">✏️</button>
                  <button onclick="event.stopPropagation();window._deleteClass(${c.id},'${((T=c.class_name)==null?void 0:T.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-red-300 hover:text-red-500 hover:bg-white/70 rounded-lg transition text-sm" title="ลบ">🗑️</button>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between">
                ${q}
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
    </div>`),window._openPP5Doc=l=>us(l),window._openExamDocsForClass=l=>_s(l),window._openClassDetail=l=>Mt(e,l,{classes:a,scheduleMap:j,linksByClass:y,periodMap:H,classrooms:I,copyCfg:x}),window._openClassDashboard=async l=>{var m;const o=(m=window._classCache)==null?void 0:m[l];if(!o)return;const{openClassDashboard:c}=await fe(async()=>{const{openClassDashboard:t}=await import("./teacher-views-dashboard-B4a2-7-n.js");return{openClassDashboard:t}},__vite__mapDeps([0,1,2,3,4,5]));c(l,o,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})},window._openCombinedEdit=(l,o="info")=>{var m;const c=(m=window._classCache)==null?void 0:m[l];c&&Es(e,c,I,O,y,H,j,()=>Le(e),o)},window._assignClassroom=l=>{var n,f,C;const o=(n=window._classCache)==null?void 0:n[l];if(!o)return;const c=[...new Set(I.map(k=>k.building))];(f=document.getElementById("assign-room-modal"))==null||f.remove();const m=document.createElement("div");m.id="assign-room-modal",m.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">📍 ระบุห้องสอน</h3>
          <p class="text-xs text-gray-400 mb-4">${o.class_name} · ${((C=o.master_subjects)==null?void 0:C.subject_name)??""}</p>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
              <select id="arm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคาร —</option>
                ${c.map(k=>`<option value="${k}">${k}</option>`).join("")}
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
        </div>`,document.body.appendChild(m);const t=m.querySelector("#arm-building"),d=m.querySelector("#arm-room");if(o.classroom_id&&P[o.classroom_id]){const k=P[o.classroom_id];t.value=k.building,t.dispatchEvent(new Event("change"))}t.addEventListener("change",()=>{const k=t.value,Q=I.filter(q=>q.building===k);d.innerHTML='<option value="">— เลือกห้อง —</option>'+Q.map(q=>{const R=q.name?`${q.room_number} — ${q.name}`:q.room_number,T=q.id===o.classroom_id?"selected":"";return`<option value="${q.id}" ${T}>${R}</option>`}).join("")}),m.querySelector("#arm-cancel").addEventListener("click",()=>m.remove()),m.querySelector("#arm-save").addEventListener("click",async()=>{var q;const k=m.querySelector("#arm-save"),Q=d.value?parseInt(d.value):null;k.disabled=!0,k.textContent="⏳";try{await os(l,Q),(q=window._classCache)!=null&&q[l]&&(window._classCache[l].classroom_id=Q),F("บันทึกห้องสอนแล้ว ✅","success"),m.remove(),Le(e)}catch(R){F("บันทึกไม่สำเร็จ: "+ce(R),"error"),k.disabled=!1,k.textContent="บันทึก"}})},window._openAttendance=l=>{var c;const o=(c=window._classCache)==null?void 0:c[l];o&&qt(e,o)},window._openGrades=l=>{var c;const o=(c=window._classCache)==null?void 0:c[l];o&&Ct(e,o)},window._openScoreCols=(l,o)=>{var m;const c=(m=window._classCache)==null?void 0:m[l];Gn(e,l,o,c)},window._editClass=l=>{var c;const o=(c=window._classCache)==null?void 0:c[l];o&&Vn(e,o)},window._deleteClass=async(l,o)=>{if(await ct({title:`ลบห้องเรียน "${o}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ns(l),F(`ลบ "${o}" แล้ว`,"success"),Le(e)}catch(m){F("ลบไม่สำเร็จ: "+ce(m),"error")}},window._copyClass=l=>{var t;const o=(t=window._classCache)==null?void 0:t[l];if(!o)return;const c=o.master_subjects??{},m={id:o.course_id,subject_name:c.subject_name??"—",subject_code:c.subject_code??"",credit:c.credit??"",grade_level:c.grade_level??"",dept:c.dept??o.dept??"",subject_group:c.subject_group??""};zn(e,m,{cloneFrom:l,srcSkill:o.skill_group??""})};const w=async(l,o,c="landscape",m="all")=>{try{const[t,d,n]=await Promise.all([$e().catch(()=>({})),De(l.id),o==="score"?Oe(l.id):Promise.resolve([])]),f=m==="ชาย"||m==="หญิง"?m:"ทั้งหมด",C=f==="ทั้งหมด"?d:d.filter(p=>String(p.gender||"").trim()===f);if(!C.length){F(`ไม่พบนักเรียน${f==="ทั้งหมด"?"":f}ในห้องนี้`,"warning");return}const k=l.master_subjects??{},Q=["ACDMVOC","AGMVOC"].includes(k.subject_group),q=Q?t.porworCollegeName||t.samaiSchoolName||"โรงเรียน":t.samaiSchoolName||t.porworCollegeName||"โรงเรียน",R=Q?t.porworLogoBwUrl||t.porworLogoUrl||t.samaiLogoBwUrl||t.samaiLogoUrl||"":t.samaiLogoBwUrl||t.samaiLogoUrl||t.porworLogoBwUrl||t.porworLogoUrl||"",T=await An(R),te=o==="score"?"ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน":"ใบรายชื่อนักเรียนสำหรับเช็คชื่อ",W=c!=="portrait",ne=W?"297mm":"210mm",le=W?"210mm":"297mm",i=n.map(p=>{const _=p.assignment_name||"-";return`
          <th class="score-col ${_.length>8||n.length>(W?10:6)?"long":""}">
            <div class="score-label" title="${h(_)}">${h(_)}</div>
            <small>/${h(p.max_score??"")}</small>
          </th>`}).join(""),E=n.map(()=>'<td class="score-cell"></td>').join(""),S=Array.from({length:12},(p,_)=>`<th class="check-col">${_+1}</th>`).join(""),r=Array.from({length:12},()=>'<td class="check-cell"></td>').join(""),g=C.map((p,_)=>`
          <tr>
            <td class="no">${_+1}</td>
            <td class="code">${h(p.student_code)}</td>
            <td class="name">${h(p.full_name)}</td>
            ${o==="score"?E:r}
            <td class="note"></td>
          </tr>`).join(""),b=`<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>${h(te)} - ${h(k.subject_name||"")}</title>
  <style>
    @page { size: A4 ${W?"landscape":"portrait"}; margin: 10mm; }
    * { box-sizing: border-box; }
    body { font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; color: #111827; margin: 0; background: #f3f4f6; }
    .page { width: ${ne}; min-height: ${le}; margin: 12px auto; padding: 10mm; background: white; }
    .header { display: grid; grid-template-columns: 70px 1fr 150px; align-items: center; gap: 12px; margin-bottom: 10px; }
    .logo-wrap { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: transparent; }
    .logo { width: 58px; height: 58px; object-fit: contain; filter: grayscale(1) contrast(1.18); }
    .school { text-align: center; line-height: 1.3; }
    .school h1 { margin: 0; font-size: 20px; }
    .school h2 { margin: 3px 0 0; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; line-height: 1.7; }
    .meta strong { display: inline-block; min-width: 66px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: ${W?"11px":"10px"}; }
    th, td { border: 1px solid #111827; padding: 3px 4px; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; text-align: center; }
    .no { width: 28px; text-align: center; }
    .code { width: 62px; text-align: center; font-family: monospace; }
    .name { width: ${W?"150px":"120px"}; }
    .check-col, .check-cell { width: ${W?"34px":"24px"}; height: 22px; text-align: center; }
    .score-col, .score-cell { width: ${W?"58px":"42px"}; text-align: center; }
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
      <div class="logo-wrap">${T?`<img class="logo" src="${h(T)}" />`:""}</div>
      <div class="school">
        <h1>${h(q)}</h1>
        <h2>${h(te)}${f==="ทั้งหมด"?"":` (${h(f)})`}</h2>
      </div>
      <div class="meta">
        <div><strong>ภาคเรียน</strong> ${h(t.semester||"")}/${h(t.academicYear||"")}</div>
        <div><strong>ห้อง</strong> ${h(l.class_name||"")}</div>
        <div><strong>รายชื่อ</strong> ${h(f)}</div>
        <div><strong>จำนวน</strong> ${C.length} คน</div>
      </div>
    </section>
    <section class="meta" style="margin-bottom:8px">
      <div><strong>รายวิชา</strong> ${h(k.subject_name||"")}</div>
      <div><strong>รหัสวิชา</strong> ${h(k.subject_code||"")}</div>
      <div><strong>ครูผู้สอน</strong> ${h((e==null?void 0:e.full_name)||"")}</div>
    </section>
    <table>
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="code">รหัส</th>
          <th class="name">ชื่อ-นามสกุล</th>
          ${o==="score"?i:S}
          <th class="note">หมายเหตุ</th>
        </tr>
      </thead>
      <tbody>${g}</tbody>
    </table>
    <section class="signature">
      <div>
        ลงชื่อ ........................................ ครูผู้สอน<br />
        (${h((e==null?void 0:e.full_name)||"")})
      </div>
    </section>
  </main>
</body>
</html>`;_n(b)}catch(t){F("สร้างใบรายชื่อไม่สำเร็จ: "+ce(t),"error")}};window._openRosterPicker=l=>{var d,n,f;const o=(d=window._classCache)==null?void 0:d[l];if(!o)return;(n=document.getElementById("roster-picker-modal"))==null||n.remove();const c=document.createElement("div");c.id="roster-picker-modal",c.className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40",c.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">สร้างใบรายชื่อ</h3>
        <p class="text-xs text-gray-400 mb-4">${h(((f=o.master_subjects)==null?void 0:f.subject_name)||"")} · ${h(o.class_name||"")}</p>
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
      </div>`,document.body.appendChild(c);const m=()=>{var C;return((C=c.querySelector(".roster-orientation:checked"))==null?void 0:C.value)||"landscape"},t=()=>{var C;return((C=c.querySelector(".roster-gender:checked"))==null?void 0:C.value)||"all"};c.querySelectorAll(".roster-orientation").forEach(C=>{C.addEventListener("change",()=>{c.querySelectorAll(".roster-orientation-card").forEach(k=>{k.className="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600"}),C.nextElementSibling.className="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"})}),c.querySelectorAll(".roster-gender").forEach(C=>{C.addEventListener("change",()=>{c.querySelectorAll(".roster-gender-card").forEach(k=>{k.className="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600"}),C.nextElementSibling.className="roster-gender-card block text-center rounded-lg border border-violet-500 bg-violet-50 px-2 py-2 text-sm font-semibold text-violet-700"})}),c.querySelector("#btn-roster-close").addEventListener("click",()=>c.remove()),c.addEventListener("click",C=>{C.target===c&&c.remove()}),c.querySelector("#btn-roster-att").addEventListener("click",()=>{const C=m(),k=t();c.remove(),w(o,"attendance",C,k)}),c.querySelector("#btn-roster-score").addEventListener("click",()=>{const C=m(),k=t();c.remove(),w(o,"score",C,k)})},window._openStudentManager=l=>$s(e,l),window._openClassCopyModal=l=>{var C,k;const o=(C=window._classCache)==null?void 0:C[l];if(!o)return;const c=_t(x,o);if(!(c!=null&&c.id)){F("ยังไม่ได้ตั้งค่าไฟล์ต้นฉบับสำหรับกลุ่มวิชานี้","warning");return}(k=document.getElementById("class-copy-modal"))==null||k.remove();const m=o.master_subjects??{},t=`${m.subject_name||"ปพ5"}_${o.class_name||""}_${(e==null?void 0:e.full_name)||""}`.replace(/\s+/g," ").trim(),d=(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||"",n=document.createElement("div");n.id="class-copy-modal",n.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",n.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">🔗 ทำสำเนาชีทสำหรับรายวิชานี้</h3>
        <p class="text-xs text-gray-400 mb-4">${h(c.label||"")} · ${h(m.subject_name||"")} · ${h(o.class_name||"")}</p>
        <label class="block text-sm font-semibold text-gray-700 mb-1">ตั้งชื่อไฟล์สำเนา</label>
        <input id="copy-file-name" class="${Ce}" value="${h(t)}" />
        <label class="block text-sm font-semibold text-gray-700 mt-3 mb-1">อีเมลที่จะให้สิทธิ์ไฟล์</label>
        <input id="copy-target-email" type="email" class="${Ce}" value="${h(d)}" placeholder="teacher@example.com" />
        <p class="text-xs text-gray-400 mt-2">ระบบจะสร้างสำเนาในบัญชีผู้ดูแลและแชร์สิทธิ์แก้ไขให้ email นี้ พร้อมบันทึก Sheet ID กลับเข้ารายวิชาอัตโนมัติ</p>
        <div id="copy-result" class="hidden mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm"></div>
        <div class="flex gap-3 mt-5">
          <button id="copy-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="copy-go" class="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600">สร้างสำเนา</button>
        </div>
      </div>`,document.body.appendChild(n),n.querySelector("#copy-cancel").addEventListener("click",()=>n.remove()),n.addEventListener("click",Q=>{Q.target===n&&n.remove()});const f=Q=>{const q=_sheetCopyUrl(c.id);n.querySelector("#copy-result").innerHTML=`
          <div class="rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p class="font-semibold text-amber-800 mb-1">ใช้วิธีทำสำเนาด้วย Google แทน</p>
            <p class="text-xs text-amber-700 mb-3">${h(Q||"หากสร้างอัตโนมัติไม่สำเร็จ ให้กดปุ่มด้านล่างเพื่อทำสำเนา แล้วนำลิงก์ไฟล์ใหม่มาวาง")}</p>
            <a href="${q}" target="_blank" rel="noopener noreferrer"
              class="block w-full py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-700">
              เปิดหน้าทำสำเนาของ Google
            </a>
            <label class="block text-xs font-semibold text-gray-600 mt-3 mb-1">วางลิงก์หรือ ID ของไฟล์ที่ทำสำเนาเสร็จแล้ว</label>
            <input id="manual-sheet-id" class="${Ce}" placeholder="https://docs.google.com/spreadsheets/d/..." />
            <button id="manual-save-sheet" class="mt-3 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
              บันทึก Sheet ID เข้ารายวิชา
            </button>
          </div>`,n.querySelector("#copy-result").classList.remove("hidden"),n.querySelector("#manual-save-sheet").addEventListener("click",async()=>{const R=n.querySelector("#manual-sheet-id"),T=_extractSheetId(R.value);if(!T){F("กรุณาวางลิงก์หรือ Sheet ID ของไฟล์สำเนา","warning");return}try{await at(o.id,{google_sheet_id:T}),o.google_sheet_id=T,F("บันทึก Sheet ID เข้ารายวิชาแล้ว","success"),n.remove(),Le(e)}catch(te){F("บันทึก Sheet ID ไม่สำเร็จ: "+ce(te),"error")}})};n.querySelector("#copy-go").addEventListener("click",async()=>{const Q=n.querySelector("#copy-go"),q=n.querySelector("#copy-file-name").value.trim()||t||"สำเนาไฟล์ ปพ.5",R=n.querySelector("#copy-target-email").value.trim();Q.disabled=!0,Q.textContent="กำลังสร้าง...";try{const T=await wn(c.id,q,R),te=T.newSheetId;if(!te)throw new Error("GAS ไม่ได้ส่ง Sheet ID กลับมา");await at(o.id,{google_sheet_id:te}),o.google_sheet_id=te;const W=T.url||_sheetUrl(te);n.querySelector("#copy-result").innerHTML=`
            <p class="font-semibold text-emerald-800 mb-2">สร้างไฟล์สำเนาและบันทึกเข้ารายวิชาแล้ว</p>
            <button id="copy-open" class="w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">เปิดไฟล์สำเนา</button>`,n.querySelector("#copy-result").classList.remove("hidden"),n.querySelector("#copy-open").addEventListener("click",()=>window.open(W,"_blank")),Q.textContent="สร้างแล้ว",F("สร้างสำเนาและบันทึก Sheet ID แล้ว","success"),setTimeout(()=>Le(e),900)}catch(T){Q.disabled=!1,Q.textContent="สร้างสำเนา",F("สร้างอัตโนมัติไม่สำเร็จ เปิดวิธีทำสำเนาด้วย Google แทน","warning"),f(ce(T))}})},window._openSheetToolsModal=l=>{var t,d,n;const o=(t=window._classCache)==null?void 0:t[l];if(!(o!=null&&o.google_sheet_id))return;(d=document.getElementById("sheet-tools-modal"))==null||d.remove();const c=_sheetUrl(o.google_sheet_id),m=document.createElement("div");m.id="sheet-tools-modal",m.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",m.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${h(((n=o.master_subjects)==null?void 0:n.subject_name)||"")} · ${h(o.class_name||"")}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">🔗 Sync ข้อมูลไปชีท</button>
        </div>
        <button id="btn-sheet-tools-close" class="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>`,document.body.appendChild(m),m.querySelector("#btn-sheet-tools-close").addEventListener("click",()=>m.remove()),m.addEventListener("click",f=>{f.target===m&&m.remove()}),m.querySelector("#btn-open-sheet").addEventListener("click",()=>window.open(c,"_blank")),m.querySelector("#btn-copy-sheet").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),F("คัดลอกลิงก์ชีทแล้ว","success")}catch{F("คัดลอกไม่สำเร็จ","error")}}),m.querySelector("#btn-share-sheet").addEventListener("click",async()=>{const f=m.querySelector("#btn-share-sheet");f.disabled=!0,f.textContent="⏳ กำลังเปิดสิทธิ์...";try{const{shareSheetForView:C}=await fe(async()=>{const{shareSheetForView:k}=await import("./sync-Bgbsg-ec.js");return{shareSheetForView:k}},__vite__mapDeps([6,7,5]));await C(o.google_sheet_id),F("ส่งคำสั่งเปิดสิทธิ์แล้ว กรุณารอสักครู่แล้วลองเปิดลิงก์","success"),f.textContent="✅ ส่งคำสั่งเปิดสิทธิ์แล้ว"}catch(C){f.disabled=!1,f.textContent="🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้",F("เปิดสิทธิ์ไม่สำเร็จ: "+ce(C),"error")}}),m.querySelector("#btn-open-sync").addEventListener("click",()=>{m.remove(),window._openSyncModal(l)})},window._openSyncModal=l=>{var m,t;const o=(m=window._classCache)==null?void 0:m[l];if(!o)return;(t=document.getElementById("sync-modal"))==null||t.remove();const c=document.createElement("div");c.id="sync-modal",c.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",c.innerHTML=`
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
        </div>`,document.body.appendChild(c),c.querySelector("#btn-sync-cancel").addEventListener("click",()=>c.remove()),c.addEventListener("click",d=>{d.target===c&&c.remove()}),c.querySelector("#btn-sync-go").addEventListener("click",async()=>{var E,S,r,g,b;const d=c.querySelector("#sync-opt-info").checked,n=c.querySelector("#sync-opt-att").checked,f=c.querySelector("#sync-opt-score").checked;if(!d&&!n&&!f){F("เลือกอย่างน้อย 1 รายการ","warning");return}const C=c.querySelector("#btn-sync-go"),k=c.querySelector("#sync-progress");C.disabled=!0,C.textContent="⏳ กำลัง Sync...",k.classList.remove("hidden");const{syncClassInfo:Q,syncAttendance:q,syncScores:R}=await fe(async()=>{const{syncClassInfo:p,syncAttendance:_,syncScores:X}=await import("./sync-Bgbsg-ec.js");return{syncClassInfo:p,syncAttendance:_,syncScores:X}},__vite__mapDeps([6,7,5])),{getDepartments:T,getTeachers:te,getScoreColumns:W,getStudentScores:ne,getTeacherById:le}=await fe(async()=>{const{getDepartments:p,getTeachers:_,getScoreColumns:X,getStudentScores:z,getTeacherById:J}=await import("./api-J-Ak1T-Y.js");return{getDepartments:p,getTeachers:_,getScoreColumns:X,getStudentScores:z,getTeacherById:J}},__vite__mapDeps([1,2,3,4,5])),i=[];try{if(d){k.textContent="📋 Sync ข้อมูลรายวิชา...";const[p,_,X]=await Promise.all([T().catch(()=>[]),te().catch(()=>[]),(E=o.master_subjects)!=null&&E.teacher_id?le(o.master_subjects.teacher_id).catch(()=>null):Promise.resolve(null)]),z=X??e,J=p.find(u=>{var A;return u.dept_name===((A=o.master_subjects)==null?void 0:A.dept)}),ae=J!=null&&J.teacher_code?_.find(u=>u.teacher_code===J.teacher_code):null,$=(J==null?void 0:J.head_name)||(ae==null?void 0:ae.full_name)||"";await Q(o.google_sheet_id,o,{full_name:(z==null?void 0:z.full_name)??"",phone:(z==null?void 0:z.phone)??""},{headStudentName:((S=o.students)==null?void 0:S.full_name)??"",deptName:((r=o.master_subjects)==null?void 0:r.dept)??"",headDeptName:$})}}catch(p){i.push("รายวิชา: "+ce(p))}try{if(n){k.textContent="✅ Sync เช็คชื่อ...";const p=((g=o.master_subjects)==null?void 0:g.credit)??1,_=((b=o.master_subjects)==null?void 0:b.subject_group)==="ACDMVOC",X=_?await Ds(o.id).catch(()=>[]):[],z=Bn(o,p,X.length?X:null,_),[J,ae]=await Promise.all([De(l),getClassAttendanceAll(l)]),$={};for(const u of ae)$[u.student_id]||($[u.student_id]={}),$[u.student_id][u.session_number]=u.status;await q(o.google_sheet_id,z,$,J)}}catch(p){i.push("เช็คชื่อ: "+ce(p))}try{if(f){k.textContent="📝 Sync คะแนน...";const[p,_,X]=await Promise.all([W(l),ne(l),De(l)]);p.length&&await R(o.google_sheet_id,p,_,X)}}catch(p){i.push("คะแนน: "+ce(p))}c.remove(),i.length?F(`Sync บางส่วนไม่สำเร็จ:
`+i.join(`
`),"error"):F(`Sync สำเร็จ — ${o.class_name}`,"success")})}}catch(a){console.error("[renderMyClasses] โหลดข้อมูลห้องเรียนไม่สำเร็จ",a);const x=h((a==null?void 0:a.message)||"ไม่ทราบสาเหตุ");_e(`<div class="max-w-xl mx-auto mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-3xl mb-3">⚠️</p>
      <h3 class="font-bold text-red-700">โหลดข้อมูลห้องเรียนไม่สำเร็จ</h3>
      <p class="mt-2 text-sm text-red-600 break-words">${x}</p>
      <button id="retry-my-classes" class="mt-5 px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">ลองใหม่</button>
    </div>`),(s=document.getElementById("retry-my-classes"))==null||s.addEventListener("click",()=>Le(e)),F("โหลดข้อมูลห้องเรียนไม่สำเร็จ: "+ce(a),"error")}}async function Mt(e,s,a={}){je("my-classes"),Ie("ห้องเรียน"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[x,B,I]=await Promise.all([a.classes?Promise.resolve(a.classes):pt((e==null?void 0:e.id)??null),$e().catch(()=>({})),ss().catch(()=>[])]),P=x,M=P.find(n=>n.id===s);if(!M){a.supervisorMode||Le(e);return}const v=M.master_subjects??{},O=Object.fromEntries(I.map(n=>[n.id,n])),D=M.classroom_id?O[M.classroom_id]:null;window._classCache=Object.fromEntries(P.map(n=>[n.id,n]));const K=parseInt(B.academicYear??2568),y=parseInt(B.semester??1),[j,H,G]=await Promise.all([e!=null&&e.id?Ve(e.id,K,y).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?Et(e.id).catch(()=>[]):Promise.resolve([]),ut().catch(()=>[])]),oe={};H.forEach(n=>{oe[n.class_id]||(oe[n.class_id]=[]),oe[n.class_id].push(n.teacher_schedule_id)});const se=Object.fromEntries(j.map(n=>[n.id,n])),U=Object.fromEntries(G.map(n=>[n.period_no,n])),w=(!a.supervisorMode&&(e!=null&&e.id)?await Ps(e.id).catch(()=>[]):[]).some(n=>n.package_type==="donation"&&n.status==="approved"),l=_t(B,M),o=["AGM","AGMVOC"].includes(v.subject_group),c=M.google_sheet_id?`<button onclick="window._openSheetToolsModal(${s})" class="btn-action teal">⚙️ จัดการชีท</button>`:l!=null&&l.id?`<button onclick="window._openClassCopyModal(${s})" class="btn-action amber">🔗 ทำสำเนาชีท</button>`:"";_e(`
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
            <p class="font-bold text-gray-800 text-sm leading-tight truncate">${h(v.subject_name??"—")}</p>
            <p class="text-xs text-gray-500 truncate">
              <span class="font-mono text-emerald-600">${h(v.subject_code??"")}</span>
              <span class="mx-1">·</span>${h(M.class_name??"")}${D?` · 📍 ${h(D.building)} ${h(D.room_number)}`:""}
            </p>
          </div>
          <!-- badges desktop only -->
          <div class="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            ${M.skill_group?`<span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">${h(M.skill_group)}</span>`:""}
            ${o?'<span class="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full">ศาสนา</span>':""}
            ${M.google_sheet_id?'<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
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
          <button onclick="window._openSmartClassroom(${s})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#a9781a,#e6c988);">
            👑 <span>Smart Classroom</span>
          </button>
          <button onclick="window._openClassroomChat(${s})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#f59e0b,#b45309);">
            🏫 <span>แชทห้องเรียน</span>
          </button>

          <div class="flex-shrink-0 w-px bg-gray-200 my-0.5"></div>
          <button onclick="window._openCombinedEdit2(${s})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-50 transition flex items-center gap-1.5">
            ✏️ <span>แก้ไข</span>
          </button>
          <button onclick="event.stopPropagation();window._deleteClass(${s},'${(M.class_name??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'")}')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-red-100 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-1.5">
            🗑️ <span>ลบ</span>
          </button>
        </div>

        <template id="cd-group-tpl-docs">
          <button onclick="window._closeActionGroupPopup();window._openPP5Doc(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">💾 ปพ.5</button>
          <button onclick="window._closeActionGroupPopup();window._openExamDocsForClass(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🧾 เอกสารสอบ</button>
          ${M.google_sheet_id?`
          <button onclick="window._closeActionGroupPopup();window._openSheetToolsModal(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⚙️ จัดการชีท</button>`:l!=null&&l.id?`
          <button onclick="window._closeActionGroupPopup();window._openClassCopyModal(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🔗 ทำสำเนาชีท</button>`:""}
        </template>
        <template id="cd-group-tpl-tools">
          <button onclick="window._closeActionGroupPopup();window._openRandomPickerModal(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🎲 สุ่มรายชื่อ</button>
          <button onclick="window._closeActionGroupPopup();window._openTimerModal(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⏱️ จับเวลา</button>
        </template>
        <template id="cd-group-tpl-assist">
          <button onclick="window._closeActionGroupPopup();window._openClassFlashcardsModal(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🃏 บัตรคำศัพท์</button>
          <button onclick="window._closeActionGroupPopup();window._openPromptGenModal(${s})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">✍️ Prompt AI</button>
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
    </style>`);const m=()=>document.getElementById("cd-tab-content");window._backToClasses=()=>{Le(e)};const t={docs:{title:"📄 เอกสาร",grad:"linear-gradient(135deg,#7c3aed,#6366f1)"},tools:{title:"🛠️ เครื่องมือห้องเรียน",grad:"linear-gradient(135deg,#f59e0b,#ec4899)"},assist:{title:"🤖 ผู้ช่วยครู",grad:"linear-gradient(135deg,#6366f1,#06b6d4)"}};window._closeActionGroupPopup=()=>{var n;return(n=document.getElementById("cd-action-popup"))==null?void 0:n.remove()},window._openActionGroupPopup=n=>{window._closeActionGroupPopup();const f=document.getElementById(`cd-group-tpl-${n}`),C=t[n];if(!f||!C)return;const k=document.createElement("div");k.id="cd-action-popup",k.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 animate-fade",k.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div style="background:${C.grad}" class="px-4 py-3 flex items-center justify-between">
            <h3 class="text-white font-bold text-sm">${C.title}</h3>
            <button id="cd-action-popup-close" class="text-white/90 hover:text-white text-2xl leading-none px-1">&times;</button>
          </div>
          <div class="p-2 flex flex-col gap-0.5">${f.innerHTML}</div>
        </div>`,document.body.appendChild(k),k.querySelector("#cd-action-popup-close").addEventListener("click",window._closeActionGroupPopup),k.addEventListener("click",Q=>{Q.target===k&&window._closeActionGroupPopup()})},window._openPP5Doc=n=>us(n),window._openExamDocsForClass=n=>_s(n),a.supervisorMode||(window._openStudentManager=n=>$s(e,n)),window._openCombinedEdit2=n=>{var C;const f=(C=window._classCache)==null?void 0:C[n];f&&Es(e,f,I,j,oe,U,se,()=>Mt(e,n))},window._openRandomPickerModal=async n=>{var C;const f=(C=window._classCache)==null?void 0:C[n];if(f)try{const k=await De(n);if(!k.length){F("ห้องนี้ยังไม่มีนักเรียน","warning");return}const Q=k.map((q,R)=>({...q,seat_no:R+1}));await Ss(n,f,Q,w)}catch{F("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}},window._openTimerModal=n=>{var C;const f=(C=window._classCache)==null?void 0:C[n];f&&so(n,f,w)},window._openSmartClassroom=n=>{fe(()=>import("./teacher-views-smart-classroom-D3DhAsOr.js"),__vite__mapDeps([8,7,1,2,3,4,5,9,10,11,6,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,0,34,35,36])).then(f=>f.renderSmartClassroom(e,n))},window._openClassroomChat=n=>{var C;const f=(C=window._classCache)==null?void 0:C[n];fe(()=>import("./chat-classroom-B7UmImuR.js"),__vite__mapDeps([37,1,2,3,4,5,38,15,7,31,22])).then(k=>k.openTeacherClassroomChat(e,n,f==null?void 0:f.class_name))},window._openClassFlashcardsModal=async n=>{var C;if((C=window._classCache)!=null&&C[n])try{const k=await Hs(e.id);ro(e,n,k)}catch(k){F("โหลดชุดบัตรคำไม่สำเร็จ: "+ce(k),"error")}},window._openPromptGenModal=async n=>{var C;const f=(C=window._classCache)==null?void 0:C[n];f&&await ks(e,n,f,window._pp5SystemCfg??{})},window._deleteClass=async(n,f)=>{if(await ct({title:`ลบห้องเรียน "${f}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ns(n),F(`ลบ "${f}" แล้ว`,"success"),Le(e)}catch{F("ลบไม่สำเร็จ","error")}},window._loadClassTab=async n=>d(n);const d=async n=>{document.querySelectorAll(".cd-tab").forEach(k=>{const Q=k.dataset.tab===n;k.className=Q?"cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center":"cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center"});const f=document.getElementById("cd-tab-content");if(!f)return;f.innerHTML=`<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>`;const C=Tn();Ht(f);try{n==="students"?await window._openStudentManager(s):n==="attendance"?await qt(e,M):n==="grades"&&await Ct(e,M)}catch(k){console.error(k),f.innerHTML='<div class="p-6 text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>'}finally{Ht(C)}je("my-classes"),Ie("ห้องเรียน")};document.querySelectorAll(".cd-tab").forEach(n=>n.addEventListener("click",()=>d(n.dataset.tab))),d(a.defaultTab??"students")}catch(x){console.error(x),F("โหลดข้อมูลไม่สำเร็จ","error")}}const ao=[{value:"none",label:"ไม่จำ — สุ่มอิสระทุกครั้ง (มีโอกาสซ้ำ)"},{value:"session",label:"จำเฉพาะตอนนี้ — รีเซ็ตอัตโนมัติเมื่อปิดหน้าต่างนี้"},{value:"cycle",label:"จำจนครบทุกคน แล้ววนรอบใหม่อัตโนมัติ"},{value:"manual",label:"จำตลอดไป จนกว่าจะกดรีเซ็ตเอง"}];function Wt(e){const s=["#f59e0b","#ec4899","#10b981","#6366f1","#ef4444","#06b6d4","#8b5cf6"];e.style.position="relative",e.style.overflow="hidden";for(let a=0;a<26;a++){const x=document.createElement("div"),B=s[Math.floor(Math.random()*s.length)],I=Math.random()*100,P=1.1+Math.random()*.7,M=Math.random()*.25,v=Math.random()*360;x.style.cssText=`position:absolute;top:-12px;left:${I}%;width:7px;height:13px;background:${B};opacity:0.9;border-radius:2px;transform:rotate(${v}deg);pointer-events:none;animation:rp-confetti-fall ${P}s ${M}s ease-in forwards;`,e.appendChild(x),setTimeout(()=>x.remove(),(P+M)*1e3+250)}}function ro(e,s,a){var I;(I=document.getElementById("class-flashcards-modal"))==null||I.remove();const x=document.createElement("div");x.id="class-flashcards-modal",x.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4";let B="";!a||a.length===0?B=`
      <div class="text-center py-8 text-gray-500">
        <p class="text-4xl mb-2">🃏</p>
        <p class="text-sm font-medium">คุณครูยังไม่มีชุดบัตรคำศัพท์เลยครับ</p>
        <p class="text-xs text-gray-400 mt-1">สามารถสร้างชุดบัตรคำศัพท์ใหม่ได้ที่เมนู "บัตรคำศัพท์" ในเมนูหลัก</p>
      </div>
    `:B=`
      <div class="grid gap-3 max-h-[60vh] overflow-y-auto pr-1 w-full">
        ${a.map(P=>`
          <button class="select-deck-btn w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition flex items-center justify-between gap-3 group"
            data-deck-id="${P.id}">
            <div>
              <p class="font-bold text-gray-800 text-sm group-hover:text-indigo-700 transition">${h(P.title)}</p>
              ${P.description?`<p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${h(P.description)}</p>`:""}
            </div>
            <span class="text-xs text-indigo-600 font-semibold shrink-0 group-hover:translate-x-1 transition duration-200">เล่นเลย →</span>
          </button>
        `).join("")}
      </div>
    `,x.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col p-6 relative animate-fade">
      <button id="cf-modal-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">🃏 เลือกชุดบัตรคำศัพท์</h3>
        <p class="text-xs text-gray-400 mt-0.5">เลือกชุดบัตรคำศัพท์ที่คุณครูต้องการนำมาจัดกิจกรรมในห้องเรียนนี้</p>
      </div>

      ${B}
    </div>
  `,document.body.appendChild(x),x.querySelector("#cf-modal-close").addEventListener("click",()=>x.remove()),x.addEventListener("click",P=>{P.target===x&&x.remove()}),x.querySelectorAll(".select-deck-btn").forEach(P=>{P.addEventListener("click",()=>{const M=P.dataset.deckId,v=a.find(O=>O.id===M);v&&(x.remove(),fe(()=>import("./teacher-views-flashcards-CzNFTJr3.js"),__vite__mapDeps([39,7,1,2,3,4,5,15])).then(O=>{O.renderFlashcardPlay(e,v,s)}))})})}function lo(e){var s;return((s=String((e==null?void 0:e.donationSpecialFeatures)??"").split(`
`).map(a=>{const x=a.split("|");return{text:x[1]??"",minTier:parseInt(x[2])||1}}).find(a=>a.text.includes("Prompt")))==null?void 0:s.minTier)??1}const Kt=[{value:"บรรยาย",label:"บรรยาย (Lecture)"},{value:"กิจกรรมกลุ่ม",label:"กิจกรรมกลุ่ม (Group Activity)"},{value:"โครงงานเป็นฐาน",label:"โครงงานเป็นฐาน (Project-based)"},{value:"สืบเสาะหาความรู้",label:"สืบเสาะหาความรู้ (Inquiry-based)"},{value:"other",label:"อื่นๆ (พิมพ์เอง)"}],Jt={th:"ภาษาไทย",en:"ภาษาอังกฤษ (English)",ar:"ภาษาอาหรับ (العربية)","ms-rumi":"ภาษามลายู อักษรรูมี (Bahasa Melayu, Rumi)","ms-jawi":"ภาษามลายูปัตตานี อักษรยาวี (Jawi)"},Xt=[{key:"worksheet",text:"ใบงาน/ใบกิจกรรม",imageFormat:"กระดาษ A4 แนวตั้ง พร้อมพิมพ์แจกนักเรียนได้จริง",imageContent:"ใบงาน/ใบกิจกรรมที่มีคำสั่งชัดเจนและเว้นที่ว่างให้กรอกคำตอบ"},{key:"slides",text:"โครงร่างสไลด์นำเสนอ",imageFormat:"สไลด์นำเสนอ อัตราส่วน 16:9",imageContent:"สไลด์นำเสนอแต่ละแผ่น มีข้อความหลักและภาพประกอบที่เหมาะกับเนื้อหาคาบนี้"},{key:"questions",text:"คำถามกระตุ้นความคิด/อภิปราย",imageFormat:"โปสเตอร์/การ์ดคำถามขนาด A4 สำหรับติดในห้องเรียนหรือเปิดฉาย",imageContent:"คำถามกระตุ้นความคิดอย่างน้อย 5 ข้อ เรียงลำดับจากง่ายไปยาก จัดวางให้อ่านง่ายน่าสนใจ"},{key:"rubric",text:"เกณฑ์ให้คะแนน (Rubric)",imageFormat:"ตารางขนาด A4 จัดวางเป็นตารางอ่านง่าย",imageContent:"เกณฑ์การให้คะแนน (Rubric) แบบ 4 ระดับคุณภาพ พร้อมคำอธิบายแต่ละระดับ"},{key:"game",text:"เกม/กิจกรรมเสริมท้ายคาบ",imageFormat:"การ์ด/กระดานกิจกรรมขนาด A4 พร้อมพิมพ์ใช้งานได้จริง",imageContent:"อุปกรณ์/การ์ดเกมหรือกระดานกิจกรรมเสริมท้ายคาบ เพื่อทบทวนเนื้อหา ใช้เวลาไม่เกิน 10 นาที"}],io={บรรยาย:[],กิจกรรมกลุ่ม:["worksheet","rubric","game"],โครงงานเป็นฐาน:["worksheet","rubric","questions"],สืบเสาะหาความรู้:["questions","worksheet"],other:[]};function co({subjectName:e,subjectCode:s,gradeLevel:a,className:x,studentCount:B,avgPct:I,topic:P,format:M,periods:v,minutesPerPeriod:O,isReligionSubj:D,mediaItems:K,langKey:y,langLabel:j}){const H=v*O,G=v>1?`${v} คาบต่อเนื่อง (คาบละ ${O} นาที รวม ${H} นาที)`:`1 คาบ (${O} นาที)`,oe=y==="ms-jawi"?" (เขียนด้วยอักขระยาวี Jawi เท่านั้น ห้ามใช้อักษรรูมี)":"",se=D?["คุณคือผู้ช่วยครูอิสลามศึกษาไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรอิสลามศึกษา พุทธศักราช 2551"]:["คุณคือผู้ช่วยครูไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551 (ฉบับปรับปรุง พ.ศ. 2560)"];return se.push("","บริบทวิชา:",`- วิชา: ${e} (รหัส ${s})`,`- ระดับชั้น: ${a}   ห้อง: ${x}`,`- จำนวนนักเรียน: ${B} คน`),I!=null&&se.push(`- คะแนนเฉลี่ยสะสมของห้องนี้ในขณะนี้: ${I}% (ใช้พิจารณาความยาก-ง่ายของกิจกรรม)`),se.push("",`หัวข้อที่จะสอนคาบนี้: ${P}`,`รูปแบบการสอนที่ต้องการ: ${M}`,`ระยะเวลา: ${G}`,"",`คำสั่งต่อไปนี้เขียนเป็นภาษาไทยเพื่อให้คุณเข้าใจชัดเจน แต่เนื้อหาที่สร้างขึ้นจริงทั้งหมด (แผนการสอน, ใบงาน, สื่อ, ข้อความในภาพ) ต้องเป็น${j}${oe}`,"","กรุณาออกแบบแผนการจัดการเรียนรู้ที่ประกอบด้วย:","1. จุดประสงค์การเรียนรู้ (ด้านความรู้ K / ทักษะ P / เจตคติ A)","2. สาระสำคัญ (Key Concept)",`3. กิจกรรมการเรียนรู้ แบ่งเป็น 3 ขั้น พร้อมระบุเวลาแต่ละขั้นตอนชัดเจน (รวม ${H} นาที)${v>1?" — หากมีมากกว่า 1 คาบ กรุณาแบ่งกิจกรรมเป็นรายคาบให้ชัดเจน (คาบที่ 1: ..., คาบที่ 2: ...)":""}:`,"   - นำเข้าสู่บทเรียน","   - กิจกรรมหลัก","   - สรุป/wrap-up","4. สื่อ/อุปกรณ์ที่ต้องใช้","5. วิธีการวัดและประเมินผลในคาบ","6. งาน/การบ้าน (ถ้ามี)","7. หมายเหตุสำหรับครู — สิ่งที่ต้องเตรียมหรือระวังเป็นพิเศษ",`8. เขียนคำสั่งสร้างภาพ (Image Generation Prompt) เป็นภาษาไทย แยกไว้ในกล่องโค้ดของตัวเอง สำหรับสร้างภาพสรุปแผนการจัดการเรียนรู้ทั้งหมดนี้ (ข้อความที่ปรากฏจริงในภาพเป็น${j}${oe}) ให้อยู่ในภาพเดียวหน้าเดียว (One-Page Lesson Plan) ขนาดกระดาษ A4 จัดวางให้อ่านง่าย ครบทุกหัวข้อสำคัญ (จุดประสงค์, สาระสำคัญ, กิจกรรม 3 ขั้น, สื่อ/อุปกรณ์, การวัดประเมินผล) ก่อนกล่องโค้ดนี้ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง`,"","หมายเหตุสำคัญ: หากเนื้อหาวิชานี้เกี่ยวข้องกับสมการ สูตร หรือสัญลักษณ์ทางคณิตศาสตร์/วิทยาศาสตร์ กรุณาเขียนด้วยรูปแบบ LaTeX เสมอ (เช่น $y = mx + b$ หรือสมการซับซ้อนใช้ $$...$$) เพื่อให้สมการถูกต้องแม่นยำและอ่านง่าย ห้ามพิมพ์สมการเป็นข้อความธรรมดาที่อาจอ่านผิดเพี้ยน"),K!=null&&K.length&&(se.push("",`สื่อ/เอกสารประกอบเพิ่มเติม (นอกเหนือจากแผนการสอน) — ห้ามเขียนเนื้อหาเป็นข้อความอ่านตรงๆ แต่ให้เขียนเป็น "คำสั่งสร้างภาพ" (Image Generation Prompt) เป็นภาษาไทย สำหรับป้อนให้ AI สร้างรูปภาพต่อ (ข้อความที่ปรากฏจริงในภาพให้เป็น${j}${oe}) เพื่อให้ได้ไฟล์ภาพพร้อมใช้งานจริง โดยมีกติกาดังนี้:`,"- แต่ละรายการด้านล่างให้เขียนคำสั่งสร้างภาพแยกเป็นคนละกล่องโค้ด (code block) ต่อ 1 รายการ ไม่ปนกัน","- ออกแบบจำนวนภาพ/หน้าให้เหมาะสมกับเนื้อหา สูงสุดไม่เกิน 10 ภาพต่อกล่องโค้ด 1 กล่อง","- ถ้ารายการใดต้องใช้มากกว่า 10 ภาพ ให้แบ่งเป็นกล่องโค้ดใหม่ต่อจากกัน กล่องละไม่เกิน 10 ภาพ",'- ภายในกล่องโค้ดเดียวกัน ให้ระบุคำสั่งของแต่ละภาพแยกกันให้ครบและชัดเจน (เช่น "ภาพที่ 1: ...", "ภาพที่ 2: ...")',"- แต่ละคำสั่งต้องอธิบายรายละเอียดกราฟิก เค้าโครง และข้อความที่ต้องปรากฏในภาพให้ชัดเจนพอที่ AI สร้างภาพจะสร้างออกมาได้ตรงตามต้องการ","- ก่อนกล่องโค้ดแรกของแต่ละรายการ ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง","","รายการที่ต้องการ:"),K.forEach((U,ie)=>se.push(`${ie+1}. ${U.text} — รูปแบบภาพ: ${U.imageFormat} — เนื้อหาที่ต้องปรากฏ: ${U.imageContent}`))),se.join(`
`)}function et(e){return h(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}function po(e){const s=String(e??"").split(`
`);let a="",x=!1,B=[],I=null;const P=()=>{I&&(a+=`</${I}>`,I=null)};for(const M of s){const v=M.replace(/\r$/,"");if(v.trim().startsWith("```")){x?(a+=`<pre>${h(B.join(`
`))}</pre>`,B=[],x=!1):(P(),x=!0);continue}if(x){B.push(v);continue}const O=v.match(/^(#{1,3})\s+(.*)$/);if(O){P();const y=O[1].length;a+=`<h${y}>${et(O[2])}</h${y}>`;continue}const D=v.match(/^\s*[-*]\s+(.*)$/);if(D){I!=="ul"&&(P(),a+="<ul>",I="ul"),a+=`<li>${et(D[1])}</li>`;continue}const K=v.match(/^\s*\d+[.)]\s+(.*)$/);if(K){I!=="ol"&&(P(),a+="<ol>",I="ol"),a+=`<li>${et(K[1])}</li>`;continue}P(),a+=v.trim()?`<p>${et(v)}</p>`:"<p>&nbsp;</p>"}return P(),x&&B.length&&(a+=`<pre>${h(B.join(`
`))}</pre>`),a}function Zt(e){return String(e??"").replace(/[\\/:*?"<>|]/g," ").trim().slice(0,60)||"เอกสาร"}function uo(e,s){const x=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>แผนการจัดการเรียนรู้</title>
    <style>
      body{font-family:'TH Sarabun New','Angsana New',Tahoma,sans-serif;font-size:16pt;line-height:1.6;}
      h1{font-size:22pt;} h2{font-size:19pt;} h3{font-size:17pt;}
      pre{font-family:'Courier New',monospace;font-size:12pt;background:#f5f5f5;padding:10px;border:1px solid #ccc;white-space:pre-wrap;}
    </style></head><body>${po(e)}</body></html>`,B=new Blob(["\uFEFF",x],{type:"application/msword"}),I=URL.createObjectURL(B),P=document.createElement("a");P.href=I,P.download=s,document.body.appendChild(P),P.click(),P.remove(),URL.revokeObjectURL(I)}async function ks(e,s,a,x){var ie;(ie=document.getElementById("prompt-gen-modal"))==null||ie.remove();const B=(a==null?void 0:a.master_subjects)??{},I=window._pp5DonorTierIndex??0,P=lo(x),M=["AGM","AGMVOC"].includes(B.subject_group),v=x==null?void 0:x.freePromptAiLimit;let O=1;if(v!==void 0&&v!==""){const w=parseInt(v,10);Number.isFinite(w)&&(O=w)}const D=parseInt(localStorage.getItem("pp5_free_promptai_count")||"0",10),K=O>0&&D<O,y=I<P,j=document.createElement("div");if(j.id="prompt-gen-modal",j.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4",y&&!K){j.innerHTML=`
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="pg-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-800 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${P}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">✍️ ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว<br>ทดลองใช้ฟรีครบ ${O} ครั้งแล้ว<br>สนับสนุนโครงการเพื่อใช้งานต่อแบบไม่จำกัด</p>
        <button id="pg-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`,document.body.appendChild(j),j.querySelector("#pg-close").addEventListener("click",()=>j.remove()),j.querySelector("#pg-upgrade").addEventListener("click",()=>{var w;j.remove(),(w=document.getElementById("btn-donate-float"))==null||w.click()}),j.addEventListener("click",w=>{w.target===j&&j.remove()});return}j.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-fade">
      <div class="flex items-center gap-3 px-6 pt-6 pb-3 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">✍️ สร้าง Prompt สำหรับ AI</h3>
          <p class="text-xs text-gray-400 mt-0.5">นำ Prompt ที่ได้ไปวางใน ChatGPT / Gemini / Claude ของคุณครูเองได้เลย</p>
          ${y?`<span class="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">✨ ทดลองใช้งานฟรี (ครั้งที่ ${D+1}/${O})</span>`:""}
        </div>
        <button id="pg-close" class="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      </div>
      <div class="px-6 pb-6 overflow-y-auto" id="pg-body">
        <div class="flex justify-center py-10 text-gray-400 text-sm">กำลังโหลดข้อมูลห้องเรียน...</div>
      </div>
    </div>`,document.body.appendChild(j),j.querySelector("#pg-close").addEventListener("click",()=>j.remove()),j.addEventListener("click",w=>{w.target===j&&j.remove()});const H=j.querySelector("#pg-body");let G=0,oe=null;try{const[w,l]=await Promise.all([De(s).catch(()=>[]),Zs(s).catch(()=>({columns:[],scores:[]}))]);G=w.length;const o=(l.columns??[]).reduce((c,m)=>c+(m.max_score??0),0);if(o>0&&G>0){const c=(l.scores??[]).reduce((m,t)=>m+(t.final_score??0),0);oe=Math.round(c/G/o*100)}}catch{}const se=()=>{H.innerHTML=`
      <div class="bg-gray-50 rounded-2xl p-4 mb-4 text-xs text-gray-600 space-y-1">
        <p><strong class="text-gray-800">${h(B.subject_name??"—")}</strong> (${h(B.subject_code??"—")})</p>
        <p>ระดับชั้น ${h(B.grade_level??"—")} · ห้อง ${h(a.class_name??"—")} · นักเรียน ${G} คน</p>
        ${oe!=null?`<p>คะแนนเฉลี่ยสะสมปัจจุบัน: <strong class="text-emerald-600">${oe}%</strong></p>`:""}
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">หัวข้อที่จะสอนคาบนี้ <span class="text-red-400">*</span></label>
          <textarea id="pg-topic" rows="2" class="${Ce} resize-none" placeholder="เช่น สมการกำลังสอง, การสังเคราะห์แสง"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">รูปแบบการสอนที่ต้องการ</label>
          <select id="pg-format" class="${$t}">
            ${Kt.map(m=>`<option value="${m.value}">${h(m.label)}</option>`).join("")}
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
            ${Xt.map(m=>`
              <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" class="pg-media-cb rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" value="${m.key}" />
                ${h(m.text)}
              </label>`).join("")}
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">ภาษาที่ต้องการให้ AI ตอบ</label>
          <select id="pg-lang" class="${$t}">
            ${Object.entries(Jt).map(([m,t])=>`<option value="${m}">${h(t)}</option>`).join("")}
          </select>
        </div>
        <button id="pg-generate" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">
          ✨ สร้าง Prompt
        </button>
      </div>`;const w=H.querySelector("#pg-format"),l=H.querySelector("#pg-format-other"),o=()=>[...H.querySelectorAll(".pg-media-cb")],c=()=>{const m=io[w.value]??[];o().forEach(t=>{t.checked=m.includes(t.value)})};c(),w.addEventListener("change",()=>{l.classList.toggle("hidden",w.value!=="other"),c()}),H.querySelector("#pg-generate").addEventListener("click",()=>{var q;const m=H.querySelector("#pg-topic").value.trim();if(!m){F("กรุณาระบุหัวข้อที่จะสอนก่อนครับ","warning");return}const t=w.value==="other"?l.value.trim()||"ไม่ระบุ":((q=Kt.find(R=>R.value===w.value))==null?void 0:q.label)??w.value,d=Math.max(1,parseInt(H.querySelector("#pg-periods").value,10)||1),n=Math.max(1,parseInt(H.querySelector("#pg-minutes").value,10)||50),f=o().filter(R=>R.checked).map(R=>Xt.find(T=>T.key===R.value)).filter(Boolean),C=H.querySelector("#pg-lang").value,k=Jt[C],Q=co({subjectName:B.subject_name??"—",subjectCode:B.subject_code??"—",gradeLevel:B.grade_level??"—",className:a.class_name??"—",studentCount:G,avgPct:oe,topic:m,format:t,periods:d,minutesPerPeriod:n,isReligionSubj:M,mediaItems:f,langKey:C,langLabel:k});y&&localStorage.setItem("pp5_free_promptai_count",String(D+1)),U(Q,m)})},U=(w,l)=>{H.innerHTML=`
      <p class="text-xs text-gray-500 mb-2">คัดลอกข้อความด้านล่างไปวางใน ChatGPT / Gemini / Claude ของคุณครูได้เลยครับ</p>
      <textarea id="pg-output" readonly rows="14" class="w-full text-xs font-mono border border-gray-200 rounded-2xl p-3 bg-gray-50 text-gray-700 resize-none">${h(w)}</textarea>
      <div class="flex gap-2 mt-3">
        <button id="pg-copy" class="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">📋 คัดลอก Prompt</button>
        <button id="pg-back" class="px-4 py-3 rounded-2xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition">← แก้ไข</button>
      </div>
      <div class="mt-5 pt-4 border-t border-gray-100">
        <p class="text-xs font-semibold text-gray-700 mb-1">📄 ขั้นตอนถัดไป (ถ้าต้องการ): ดาวน์โหลดเป็นไฟล์ Word</p>
        <p class="text-xs text-gray-400 mb-2">พอ AI ตอบกลับมาแล้ว วางคำตอบทั้งหมดที่ได้ลงในช่องนี้ แล้วกดดาวน์โหลด — จะได้ไฟล์ Word (.doc) ที่เปิดแก้ไขต่อได้เลย</p>
        <textarea id="pg-ai-response" rows="8" class="${Ce} resize-y font-mono text-xs" placeholder="วางคำตอบจาก ChatGPT / Gemini / Claude ที่นี่..."></textarea>
        <button id="pg-download-word" class="w-full mt-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition">📄 ดาวน์โหลดเป็นไฟล์ Word (.doc)</button>
      </div>`,H.querySelector("#pg-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(w),F("คัดลอก Prompt แล้วครับ","success")}catch{F("คัดลอกไม่สำเร็จ กรุณาเลือกข้อความแล้วคัดลอกเองครับ","error")}}),H.querySelector("#pg-back").addEventListener("click",se),H.querySelector("#pg-download-word").addEventListener("click",()=>{const o=H.querySelector("#pg-ai-response").value.trim();if(!o){F("กรุณาวางคำตอบจาก AI ก่อนดาวน์โหลดครับ","warning");return}const c=`แผนการสอน_${Zt(B.subject_code)}_${Zt(l)}.doc`;uo(o,c),F("ดาวน์โหลดไฟล์ Word แล้วครับ","success")})};se()}async function mo(e,s,a,x={}){return ks(e,s,a,x)}async function Ss(e,s,a,x){var le,i;const B=(le=window._pp5SystemCfg)==null?void 0:le.freeRandomPickerLimit;let I=1;if(B!==void 0&&B!==""){const E=parseInt(B,10);Number.isFinite(E)&&(I=E)}(i=document.getElementById("random-picker-modal"))==null||i.remove();const P=()=>{se.innerHTML=`
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="rp-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-700 text-lg">สิทธิ์สุ่มทดลองใช้งานครบแล้ว</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สุ่มรายชื่อและจัดกลุ่มจำกัดการทดลองสุ่มฟรี ${I} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
        <button id="rp-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,se.querySelector("#rp-paywall-close").addEventListener("click",()=>se.remove()),se.querySelector("#rp-upgrade").addEventListener("click",()=>{var E;se.remove(),(E=document.getElementById("btn-donate-float"))==null||E.click()})};let M;try{M=await Xs(e)}catch{M={mode:"none",picked_student_ids:[]}}let v=M.mode||"none",O=new Set((M.picked_student_ids||[]).map(Number)),D=new Set;const K=new Map(a.map(E=>[E.id,E]));let y=Array.isArray(M.groups)?M.groups.map(E=>({no:E.no,items:(E.student_ids||[]).map(S=>K.get(S)).filter(Boolean)})):null,j="pick",H=!1,G=localStorage.getItem("pp5_rp_effect")||"classic";const oe=[{key:"classic",icon:"🎯",label:"คลาสสิก"},{key:"grid",icon:"🔦",label:"กริด"},{key:"elimination",icon:"💥",label:"ตัดออก"},{key:"slot",icon:"🎰",label:"สล็อต"}],se=document.createElement("div");se.id="random-picker-modal",se.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",se.innerHTML=`
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
          <p class="text-white/80 text-xs mt-0.5 truncate">${h(s.class_name||"")} · ทั้งหมด ${a.length} คน</p>
        </div>
        <button id="rp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="pick">🎯 สุ่มรายชื่อ</button>
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="group">👥 สุ่มจัดกลุ่ม</button>
      </div>
      <div id="rp-body" class="p-5 overflow-y-auto flex-1"></div>
    </div>`,document.body.appendChild(se),se.addEventListener("click",E=>{E.target===se&&se.remove()}),se.querySelector("#rp-close").addEventListener("click",()=>se.remove());const U=se.querySelector("#rp-body"),ie=[...se.querySelectorAll(".rp-tab")],w=E=>{j=E,ie.forEach(S=>{const r=S.dataset.mode===E;S.className=`rp-tab flex-1 py-2.5 text-sm font-semibold transition ${r?"text-white":"text-gray-500 hover:text-gray-700"}`,S.style.background=r?"linear-gradient(135deg,#f59e0b,#ec4899)":""}),E==="pick"?t():ne()};ie.forEach(E=>E.addEventListener("click",()=>{H||w(E.dataset.mode)}));const l=()=>v==="none"?new Set:v==="session"?D:O,o=async E=>{if(v!=="none"){if(v==="session"){D.add(E);return}O.add(E);try{await Rt(e,{mode:v,pickedStudentIds:[...O]})}catch{}}},c=async()=>{O=new Set,D=new Set;try{await Nt(e)}catch{}F("รีเซ็ตการสุ่มแล้ว","success"),j==="pick"&&t()},m=async E=>{if(E!==v){v=E,O=new Set,D=new Set;try{await Rt(e,{mode:E,pickedStudentIds:[]})}catch{}t()}};function t(){const E=l(),S=a.filter(_=>!E.has(_.id)),r=a.length-S.length,g=(_,X)=>{const z=`hsl(${_.id*47%360},60%,55%)`,J=_.image_url?`<img src="${h(_.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${z}">${h((_.full_name??"?").charAt(0))}</div>`;return`<div class="${X}" data-id="${_.id}">${J}<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${_.seat_no??""}</div></div>`},b=(_,X=!1)=>`<div id="rp-reel-${_}" class="rp-reel rounded-2xl border-2 border-gray-200 bg-white" style="width:${X?104:86}px;height:${X?148:124}px;flex-shrink:0;"><div class="rp-reel-inner flex flex-col items-center justify-center h-full p-2 gap-1" style="transition:opacity .06s ease;"><div class="flex-1 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-gray-300 text-2xl font-bold">?</div><div class="text-[9px] font-bold text-gray-500 truncate w-full text-center leading-none">—</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">·</div></div></div>`,p=()=>G==="grid"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 text-center pt-3 pb-1.5">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-grid" class="grid gap-1 px-2 pb-2" style="grid-template-columns:repeat(auto-fill,minmax(54px,1fr))">
            ${S.map(_=>g(_,"rp-grid-tile")).join("")}
          </div>
        </div>`:G==="elimination"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <div class="flex items-center justify-between pt-2.5 pb-1 px-3">
            <p id="rp-hint" class="text-xs text-gray-400">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
            <span id="rp-elim-counter" class="text-xs font-bold text-gray-500">${S.length} คน</span>
          </div>
          <div id="rp-elim-grid" class="grid gap-1 px-2 pb-2 overflow-y-auto" style="grid-template-columns:repeat(auto-fill,minmax(48px,1fr));max-height:210px;">
            ${S.map(_=>g(_,"rp-elim-tile")).join("")}
          </div>
        </div>`:G==="slot"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-4 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-4">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div class="flex justify-center items-center gap-2">
            ${b(0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${b(1,!0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${b(2)}
          </div>
        </div>`:`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-6 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-3">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-avatar" class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 items-center justify-center" style="display:none;opacity:0;box-shadow:0 8px 24px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.10);"></div>
          <p id="rp-name" class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2">—</p>
          <p id="rp-code" class="text-xs text-gray-400 mt-1 font-mono"></p>
        </div>`;U.innerHTML=`
      <div class="flex gap-1.5 mb-3">
        ${oe.map(_=>`<button class="rp-eff flex-1 py-2 rounded-xl border text-center leading-tight transition ${_.key===G?"border-amber-400 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}" data-eff="${_.key}"><div class="text-base">${_.icon}</div><div class="text-[9px] font-semibold mt-0.5">${_.label}</div></button>`).join("")}
      </div>
      <div class="flex items-center gap-2 mb-3">
        <select id="rp-mode" class="${$t} flex-1 text-xs">
          ${ao.map(_=>`<option value="${_.value}" ${_.value===v?"selected":""}>${_.label}</option>`).join("")}
        </select>
        <button id="rp-reset" class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">🔄 รีเซ็ต</button>
      </div>
      ${v!=="none"?`<p id="rp-counter" class="text-[11px] text-gray-400 mb-3">สุ่มไปแล้ว ${r} / ${a.length} คน${S.length===0?" — ครบทุกคนแล้ว!":""}</p>`:""}
      ${p()}
      <button id="rp-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]" style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 สุ่มเลย!</button>`,U.querySelectorAll(".rp-eff").forEach(_=>{_.addEventListener("click",()=>{H||(G=_.dataset.eff,localStorage.setItem("pp5_rp_effect",G),t())})}),U.querySelector("#rp-mode").addEventListener("change",_=>m(_.target.value)),U.querySelector("#rp-reset").addEventListener("click",()=>{H||c()}),U.querySelector("#rp-go").addEventListener("click",()=>d())}function d(){if(H)return;if(!x&&parseInt(localStorage.getItem("pp5_free_random_count")||"0",10)>=I){P();return}let E=a.filter(p=>!l().has(p.id)),S=!1;if(E.length===0){if(v==="manual"){F('สุ่มครบทุกคนแล้ว — กดปุ่ม "รีเซ็ต" เพื่อเริ่มรอบใหม่',"warning");return}E=a,S=v==="cycle"||v==="session"}H=!0;const r=U.querySelector("#rp-go");r.disabled=!0,r.textContent="🎰 กำลังสุ่ม...";const g=E[Math.floor(Math.random()*E.length)],b=async()=>{if(S){O=new Set,D=new Set;try{await Nt(e)}catch{}}if(await o(g.id),!x){const p=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);localStorage.setItem("pp5_free_random_count",String(p+1))}setTimeout(()=>{H=!1;const p=l(),_=a.length-a.filter(J=>!p.has(J.id)).length,X=U.querySelector("#rp-counter");if(X){const J=a.length-_;X.textContent=`สุ่มไปแล้ว ${_} / ${a.length} คน${J===0?" — ครบทุกคนแล้ว!":""}`}const z=U.querySelector("#rp-go");if(z)if(G==="classic")z.disabled=!1,z.textContent="🎲 สุ่มอีกครั้ง";else{z.disabled=!1,z.textContent="🔁 สุ่มใหม่";const J=z.cloneNode(!0);z.replaceWith(J),J.addEventListener("click",()=>t())}},900)};G==="grid"?C(E,g,b):G==="elimination"?k(E,g,b):G==="slot"?Q(E,g,b):f(E,g,b)}function n(E,S){E.style.transition="opacity 0.2s ease",E.style.opacity="0",setTimeout(()=>{E.style.borderStyle="solid",E.style.borderColor="#10b981",E.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",E.innerHTML=`<div class="py-5 px-4 text-center">
        <p class="text-xs text-gray-400 mb-3">🎉 ได้คนนี้แหละ!</p>
        <div class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 rp-pop" style="box-shadow:0 8px 24px rgba(0,0,0,.18);">${S.image_url?`<img src="${h(S.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${h((S.full_name??"?").charAt(0))}</div>`}</div>
        <p class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2 rp-pop">${h(S.full_name)}</p>
        <p class="text-xs text-gray-400 mt-1 font-mono">${S.seat_no?`เลขที่ ${S.seat_no}`:""}</p>
      </div>`,E.style.opacity="1",Wt(E)},220)}function f(E,S,r){const g=U.querySelector("#rp-stage"),b=U.querySelector("#rp-name"),p=U.querySelector("#rp-code"),_=U.querySelector("#rp-hint"),X=U.querySelector("#rp-avatar");b.classList.remove("rp-pop"),X==null||X.classList.remove("rp-pop"),g.style.borderStyle="dashed",g.style.borderColor="#fbbf24",g.style.boxShadow="none";const z=(u,A=!1)=>{X&&(X.style.display="flex",X.style.transition=A?"opacity 0.06s ease":"opacity 0.3s ease",X.style.opacity="0",setTimeout(()=>{X.innerHTML=u.image_url?`<img src="${u.image_url}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${(u.full_name??"?").charAt(0)}</div>`,X.style.opacity="1"},A?30:80))};z(E[Math.floor(Math.random()*E.length)],!0);let J=0,ae=55;const $=()=>{const u=E[Math.floor(Math.random()*E.length)];b.textContent=u.full_name,p.textContent=u.seat_no?`เลขที่ ${u.seat_no}`:"",z(u,!0),J++,J<26?(ae=Math.min(ae*1.13,420),setTimeout($,ae)):(b.textContent=S.full_name,p.textContent=S.seat_no?`เลขที่ ${S.seat_no}`:"",z(S,!1),X==null||X.classList.add("rp-pop"),b.classList.add("rp-pop"),g.style.borderStyle="solid",g.style.borderColor="#10b981",g.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",_&&(_.textContent="🎉 ได้คนนี้แหละ!"),Wt(g),r())};$()}function C(E,S,r){const g=U.querySelector("#rp-stage"),b=U.querySelector("#rp-hint"),p=U.querySelector("#rp-grid");if(!p)return f(E,S,r);let _=[...p.querySelectorAll(".rp-grid-tile")],X=_.find(u=>Number(u.dataset.id)===S.id);if(!X){const u=`hsl(${S.id*47%360},60%,55%)`,A=Math.floor(Math.random()*_.length);_[A].dataset.id=S.id,_[A].innerHTML=(S.image_url?`<img src="${h(S.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${u}">${h((S.full_name??"?").charAt(0))}</div>`)+`<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${S.seat_no??""}</div>`,X=_[A]}b&&(b.textContent="กำลังสุ่ม..."),g.style.borderColor="#fbbf24";let z=null,J=0,ae=38;const $=()=>{z==null||z.classList.remove("rp-active");const u=_[Math.floor(Math.random()*_.length)];u.classList.add("rp-active"),z=u,J++,J<36?(ae=Math.min(ae*1.1,520),setTimeout($,ae)):(z==null||z.classList.remove("rp-active"),X.classList.add("rp-winner"),b&&(b.textContent=`🎉 ที่ ${S.seat_no??""} ${S.full_name}`),X.scrollIntoView({behavior:"smooth",block:"nearest"}),setTimeout(()=>{n(g,S),r()},900))};$()}function k(E,S,r){const g=U.querySelector("#rp-stage"),b=U.querySelector("#rp-hint"),p=U.querySelector("#rp-elim-grid"),_=U.querySelector("#rp-elim-counter");if(!p)return f(E,S,r);b&&(b.textContent="กำลังตัดออก...");const X=E.filter(A=>A.id!==S.id).sort(()=>Math.random()-.5),z=X.length;let J=E.length,ae=0;const $=A=>A<.55?50:A<.8?50+(A-.55)/.25*260:310+Math.pow((A-.8)/.2,2)*1400,u=()=>{if(ae>=z){const Y=p.querySelector(`[data-id="${S.id}"]`);Y==null||Y.classList.remove("rp-last"),Y==null||Y.classList.add("rp-winner"),Y==null||Y.scrollIntoView({behavior:"smooth",block:"nearest"}),b&&(b.textContent=`🎉 ที่ ${S.seat_no??""} ${S.full_name}`),_&&(_.textContent="เหลือ 1 คน!"),setTimeout(()=>{n(g,S),r()},900);return}const A=p.querySelector(`[data-id="${X[ae].id}"]`);A==null||A.classList.remove("rp-last"),A==null||A.classList.add("rp-eliminated"),J--,_&&(_.textContent=`เหลือ ${J} คน`),J<=4&&p.querySelectorAll(".rp-elim-tile:not(.rp-eliminated)").forEach(Y=>Y.classList.add("rp-last")),ae++,setTimeout(u,$(ae/(z||1)))};u()}function Q(E,S,r){const g=U.querySelector("#rp-stage"),b=U.querySelector("#rp-hint"),p=[U.querySelector("#rp-reel-0"),U.querySelector("#rp-reel-1"),U.querySelector("#rp-reel-2")];if(!p[0])return f(E,S,r);b&&(b.textContent="กำลังหมุน..."),g.style.borderColor="#fbbf24";const _=[E[Math.floor(Math.random()*E.length)],S,E[Math.floor(Math.random()*E.length)]],X=[18,28,22],z=[!1,!1,!1],J=(A,Y)=>{const Z=A.querySelector(".rp-reel-inner");Z&&(Z.style.opacity="0",setTimeout(()=>{const L=`hsl(${Y.id*47%360},60%,55%)`;Z.innerHTML=`<div class="flex-1 w-full rounded-xl overflow-hidden">${Y.image_url?`<img src="${h(Y.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-xl" style="background:${L}">${h((Y.full_name??"?").charAt(0))}</div>`}</div><div class="text-[9px] font-bold text-gray-600 truncate w-full text-center leading-none mt-1">${h(Y.full_name)}</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">${Y.seat_no?`ที่ ${Y.seat_no}`:"·"}</div>`,Z.style.opacity="1"},30))};let ae=0,$=50;const u=()=>{ae++,p.forEach((A,Y)=>{z[Y]||(ae===X[Y]?(z[Y]=!0,setTimeout(()=>{J(A,_[Y]),A.classList.add(Y===1?"rp-winner-reel":"rp-locked"),Y===1&&(b&&(b.textContent="🎉 ได้คนนี้แหละ!"),setTimeout(()=>{n(g,S),r()},900))},200)):J(A,E[Math.floor(Math.random()*E.length)]))}),z[1]||($=ae<12?50:Math.min(50*Math.pow(1.09,ae-12),450),setTimeout(u,$))};u()}const q=["#f59e0b","#ec4899","#6366f1","#10b981","#06b6d4","#ef4444","#8b5cf6","#f97316"],R=()=>{const E=y.map(S=>({no:S.no,student_ids:S.items.map(r=>r.id)}));vn(e,E).catch(()=>{})},T=(E,S)=>{const r=Number(E);let g=null;if(y.forEach(b=>{const p=b.items.findIndex(_=>_.id===r);p!==-1&&(g=b.items.splice(p,1)[0])}),g||(g=K.get(r)),!!g){if(S){const b=y.find(p=>p.no===S);b&&b.items.push(g)}te(),R()}};function te(){const E=new Set(y.flatMap(b=>b.items.map(p=>p.id))),S=a.filter(b=>!E.has(b.id)),r=(b,p)=>`
      <div class="relative">
        <select data-move="${b.id}" class="w-full appearance-none text-xs font-medium border border-gray-200 rounded-xl pl-3 pr-7 py-1.5 bg-gray-50 text-gray-600 hover:border-gray-300 focus:border-indigo-400 focus:bg-white outline-none transition cursor-pointer">
          <option value="0" ${p===0?"selected":""}>ยังไม่จัดกลุ่ม</option>
          ${y.map(_=>`<option value="${_.no}" ${_.no===p?"selected":""}>ย้ายไปกลุ่มที่ ${_.no}</option>`).join("")}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[9px]">▾</span>
      </div>`,g=(b,p,_)=>`
      <div class="py-1.5 px-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2.5 min-w-0">
          ${b.image_url?`<img src="${h(b.image_url)}" class="w-8 h-11 rounded-xl object-cover flex-shrink-0" style="box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;" />`:`<div class="w-8 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style="background:linear-gradient(160deg,${_},${_}cc);box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;">${h((b.full_name??"?").charAt(0))}</div>`}
          <span class="text-sm font-medium text-gray-700 truncate flex-1 min-w-0">${h(b.full_name)}</span>
        </div>
        <div class="mt-1.5 pl-[calc(2rem+0.625rem)]">${r(b,p)}</div>
      </div>`;U.innerHTML=`
      <div class="flex items-center justify-between gap-2 mb-1 px-0.5">
        <p class="text-xs text-gray-400 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>บันทึกอัตโนมัติทุกการเปลี่ยนแปลง
        </p>
        <button id="rp-group-regen" class="px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">🎲 จัดกลุ่มใหม่</button>
      </div>
      ${S.length?`
      <div class="mt-3 rounded-2xl border border-amber-200/70 p-3.5" style="background:linear-gradient(135deg,#fffbeb,#fff7ed);">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] flex-shrink-0">!</span>
          <p class="text-xs font-bold text-amber-700">ยังไม่ได้จัดกลุ่ม (${S.length} คน)</p>
        </div>
        <div>${S.map(b=>g(b,0,"#94a3b8")).join("")}</div>
      </div>`:""}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
        ${y.map((b,p)=>{const _=q[p%q.length];return`
          <div class="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
            <div class="px-3.5 py-2.5 text-white flex items-center justify-between" style="background:linear-gradient(135deg,${_},${_}dd);">
              <span class="text-sm font-bold flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center text-xs font-extrabold flex-shrink-0">${b.no}</span>
                กลุ่มที่ ${b.no}
              </span>
              <span class="text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full flex-shrink-0">${b.items.length} คน</span>
            </div>
            <div class="p-2.5 divide-y divide-gray-50">
              ${b.items.length?b.items.map(X=>g(X,b.no,_)).join(""):`
                <div class="flex flex-col items-center justify-center py-6 text-gray-300">
                  <span class="text-2xl mb-1">🪄</span>
                  <span class="text-xs">ยังไม่มีใครในกลุ่มนี้</span>
                </div>`}
            </div>
          </div>`}).join("")}
      </div>
    `,U.querySelector("#rp-group-regen").addEventListener("click",async()=>{await ct({title:"จัดกลุ่มใหม่?",message:"การจัดกลุ่มปัจจุบันจะถูกล้างทั้งหมด แล้วเริ่มสุ่มใหม่",confirmText:"จัดกลุ่มใหม่"})&&(y=null,fn(e).catch(()=>{}),W())}),U.querySelectorAll("[data-move]").forEach(b=>{b.addEventListener("change",()=>T(b.dataset.move,Number(b.value)))})}function W(){let E="all",S=null,r=new Set(a.map($=>$.id)),g="count";const b=()=>E==="present"?S?a.filter($=>S.has($.id)):[]:E==="manual"?a.filter($=>r.has($.id)):a;U.innerHTML=`
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
    `;const p=$=>{const u=[...$];for(let A=u.length-1;A>0;A--){const Y=Math.floor(Math.random()*(A+1));[u[A],u[Y]]=[u[Y],u[A]]}return u},_=($,u)=>{const A=p($);if(!A.length)return[];if(g==="count"){const L=Math.min(u,A.length),ee=Array.from({length:L},()=>[]);return A.forEach((N,V)=>ee[V%L].push(N)),ee}const Y=Math.min(u,A.length),Z=[];for(let L=0;L<A.length;L+=Y)Z.push(A.slice(L,L+Y));return Z},X=()=>{const $=b(),A=new Set($.map(ee=>ee.gender).filter(Boolean)).size>1,Y=U.querySelector("#rp-count-section");Y.innerHTML=`
        <div class="flex items-center gap-2 mb-3">
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="count">📦 กำหนดจำนวนกลุ่ม</button>
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="size">👤 กำหนดคนต่อกลุ่ม</button>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <input id="rp-gnum" type="number" min="1" max="${Math.max(1,$.length)}" value="4"
            class="${Ce} w-24 flex-shrink-0 text-center font-bold text-lg" />
          <span id="rp-gnum-label" class="text-xs text-gray-400">กลุ่ม (จากทั้งหมด ${$.length} คน)</span>
        </div>
        ${A?`
        <label class="flex items-start gap-2.5 mb-4 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 cursor-pointer">
          <input id="rp-gender-split" type="checkbox" class="mt-0.5 w-4 h-4 rounded accent-pink-500" />
          <span class="text-xs text-gray-600 leading-relaxed">⚧ <strong>แยกกลุ่มตามเพศ</strong> — แต่ละกลุ่มจะมีนักเรียนเพศเดียวกันเท่านั้น (ไม่ติ๊ก = คละเพศได้ในกลุ่มเดียวกัน)</span>
        </label>`:""}
      `;const Z=[...Y.querySelectorAll(".rp-gmode-btn")],L=ee=>{g=ee,Z.forEach(V=>{const re=V.dataset.gmode===ee;V.className=`rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${re?"border-pink-300 bg-pink-50 text-pink-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`});const N=Y.querySelector("#rp-gnum-label");N.textContent=ee==="count"?`กลุ่ม (จากทั้งหมด ${$.length} คน)`:`คน/กลุ่ม (จากทั้งหมด ${$.length} คน)`,Y.querySelector("#rp-gnum").value=4};Z.forEach(ee=>ee.addEventListener("click",()=>L(ee.dataset.gmode))),L("count")},z=()=>{const $=U.querySelector("#rp-pool-info"),u=b().length;E==="all"?$.textContent=`ทั้งห้อง ${a.length} คน`:E==="present"?$.textContent=S===null?"กำลังโหลดข้อมูลเช็คชื่อวันนี้...":`มาเรียนวันนี้ ${u} คน${u===0?" (ยังไม่ได้เช็คชื่อวันนี้ หรือทุกคนขาด/ลา)":""}`:$.textContent=`เลือกไว้ ${u} คน`},J=()=>{const $=U.querySelector("#rp-pool-manual-list");$.innerHTML=`
        <div class="flex justify-end gap-2 mb-1.5">
          <button id="rp-manual-all" type="button" class="text-[11px] text-indigo-500 hover:underline">เลือกทั้งหมด</button>
          <button id="rp-manual-none" type="button" class="text-[11px] text-gray-400 hover:underline">ไม่เลือกเลย</button>
        </div>
        ${a.map(u=>`
          <label class="flex items-center gap-2 py-1 px-1 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="checkbox" class="rp-manual-cb w-3.5 h-3.5 rounded" data-sid="${u.id}" ${r.has(u.id)?"checked":""} />
            <span class="text-xs text-gray-700 truncate">${h(u.full_name)}</span>
          </label>
        `).join("")}
      `,$.querySelector("#rp-manual-all").addEventListener("click",()=>{r=new Set(a.map(u=>u.id)),J(),z(),X()}),$.querySelector("#rp-manual-none").addEventListener("click",()=>{r=new Set,J(),z(),X()}),$.querySelectorAll(".rp-manual-cb").forEach(u=>{u.addEventListener("change",()=>{const A=parseInt(u.dataset.sid,10);u.checked?r.add(A):r.delete(A),z(),X()})})},ae=async $=>{if(E=$,U.querySelectorAll(".rp-pool-btn").forEach(u=>{const A=u.dataset.pool===$;u.className=`rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${A?"border-amber-300 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`}),U.querySelector("#rp-pool-manual-list").classList.toggle("hidden",$!=="manual"),$==="manual"&&J(),$==="present"&&S===null){z();try{const u=new Date(Date.now()+252e5).toISOString().slice(0,10),A=await yn(e,u);S=new Set(A.filter(Y=>Y.status==="present"||Y.status==="late").map(Y=>Y.student_id))}catch{S=new Set}}z(),X()};U.querySelectorAll(".rp-pool-btn").forEach($=>$.addEventListener("click",()=>ae($.dataset.pool))),ae("all"),U.querySelector("#rp-group-go").addEventListener("click",()=>{var L;if(!x){const ee=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);if(ee>=I){P();return}localStorage.setItem("pp5_free_random_count",String(ee+1))}const $=b();if(!$.length){F("ยังไม่มีนักเรียนในกลุ่มที่เลือกไว้","warning");return}const u=Math.max(1,parseInt(U.querySelector("#rp-gnum").value,10)||1),A=!!((L=U.querySelector("#rp-gender-split"))!=null&&L.checked);let Y;A?Y=[$.filter(ee=>ee.gender==="ชาย"),$.filter(ee=>ee.gender==="หญิง"),$.filter(ee=>ee.gender!=="ชาย"&&ee.gender!=="หญิง")].filter(ee=>ee.length):Y=[$];let Z=1;y=Y.flatMap(ee=>_(ee,u).map(N=>({no:Z++,items:N}))),te(),R()})}function ne(){y?te():W()}w("pick")}async function Es(e,s,a,x,B,I,P,M,v="info"){var E,S;(E=document.getElementById("combined-edit-modal"))==null||E.remove();const[O,D,K,y]=await Promise.all([De(s.id).catch(()=>[]),$e().catch(()=>({})),Ks(s.id).catch(()=>[]),Js(s.class_name).catch(()=>null)]);let j=K.map(r=>r.students).filter(Boolean);const H=r=>r?"cem-tab px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px":"cem-tab px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition",G="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200",oe=[...new Set(a.map(r=>r.building))].sort(),se=s.classroom_id?a.find(r=>r.id===s.classroom_id):null,U=B[s.id]??[],ie=["","จ","อ","พ","พฤ","ศ","ส","อา"],w=document.createElement("div");w.id="combined-edit-modal",w.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 p-4",w.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขห้องเรียน</h3>
        <button id="cem-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <p class="text-xs text-gray-400 px-6 pb-3 flex-shrink-0">${h(((S=s.master_subjects)==null?void 0:S.subject_name)??"")} · ${h(s.class_name??"")}</p>
      <div class="flex border-b border-gray-100 px-6 flex-shrink-0">
        <button class="${H(!0)}" data-cem="info">ข้อมูลพื้นฐาน</button>
        <button class="${H(!1)}" data-cem="schedule">ตารางสอน</button>
        <button class="${H(!1)}" data-cem="room">ห้องสอน</button>
      </div>
      <div id="cem-content" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="px-6 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="cem-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>
    </div>`,document.body.appendChild(w);let l=!1,o=!1,c=null,m=!1;const t=r=>{const g=w.querySelector("#cem-info-status");if(!g)return;const b={dirty:{cls:"text-amber-500",text:"● มีการเปลี่ยนแปลง"},saving:{cls:"text-indigo-500",text:"⏳ กำลังบันทึก..."},saved:{cls:"text-emerald-600",text:"✅ บันทึกแล้ว"},error:{cls:"text-red-500",text:"⚠️ บันทึกไม่สำเร็จ"}},p=b[r]??b.saved;g.className=`text-xs font-medium ${p.cls}`,g.textContent=p.text,g.classList.remove("hidden")},d=async()=>{var r,g,b,p,_,X,z;if(w.querySelector("#cem-classname")){o=!0,t("saving");try{const J=(r=w.querySelector("#cem-source-class"))==null?void 0:r.value;await at(s.id,{class_name:w.querySelector("#cem-classname").value.trim()||s.class_name,skill_group:w.querySelector("#cem-skillgroup").value.trim()||null,google_sheet_id:w.querySelector("#cem-sheetid").value.trim()||null,head_student_id:w.querySelector("#cem-head").value?Number(w.querySelector("#cem-head").value):null,day1_date:((g=w.querySelector("#cem-day1"))==null?void 0:g.value)||null,day2_date:((b=w.querySelector("#cem-day2"))==null?void 0:b.value)||null,day3_date:((p=w.querySelector("#cem-day3"))==null?void 0:p.value)||null,day4_date:((_=w.querySelector("#cem-day4"))==null?void 0:_.value)||null,day5_date:((X=w.querySelector("#cem-day5"))==null?void 0:X.value)||null,day6_date:((z=w.querySelector("#cem-day6"))==null?void 0:z.value)||null,source_class_id:J?Number(J):null}),l=!1,m=!0,t("saved")}catch{t("error")}finally{o=!1}}},n=(r=!1)=>{l=!0,t("dirty"),clearTimeout(c),c=setTimeout(d,r?0:800)},f=()=>{const r=O.map(g=>`<option value="${g.id}" data-code="${h(g.student_code)}" data-img="${h(g.image_url??"")}" data-room="${h(g.main_room??"")}"
         ${Number(s.head_student_id)===Number(g.id)?"selected":""}>
         ${h(g.full_name)} (${h(g.student_code)})</option>`).join("");return`
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง / ระดับชั้น</label>
        <input id="cem-classname" type="text" value="${h(s.class_name??"")}" class="${G}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">กลุ่มทักษะ</label>
        <input id="cem-skillgroup" type="text" value="${h(s.skill_group??"")}" placeholder="เช่น วิชาการ, ภาษา, ชีวิต" class="${G}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">Google Sheet ID</label>
        <input id="cem-sheetid" type="text" value="${h(s.google_sheet_id??"")}" placeholder="ID จาก URL ของ Sheet" class="${G} font-mono" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">หัวหน้าห้อง</label>
        <select id="cem-head" class="${G} bg-white">
          <option value="">— ยังไม่ระบุ —</option>
          ${r}
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
          ${[1,2,3,4,5,6].map(g=>`
          <div>
            <p class="text-xs text-gray-400 mb-1">คาบที่ ${g}</p>
            <input id="cem-day${g}" type="date" value="${s[`day${g}_date`]??""}"
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
          <input id="cem-attendance-delegate" type="checkbox" class="w-5 h-5 flex-shrink-0" ${s.attendance_delegate_enabled?"checked":""} />
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
    </div>`},C=new Set(U),k=new Set(U);e!=null&&e.id&&wt(e.id,s.id).then(r=>{const g=w.querySelector("#cem-source-class");if(!g)return;r.forEach(p=>{const _=p.master_subjects,X=`${(_==null?void 0:_.subject_name)??"?"} (${(_==null?void 0:_.subject_code)??""}) — ${p.class_name} · ${(_==null?void 0:_.credit)??"?"} หน่วยกิต`,z=new Option(X,p.id,!1,Number(p.id)===Number(s.source_class_id));g.appendChild(z)});const b=p=>{var ae,$;const _=w.querySelector("#cem-source-info");if(!_)return;const X=r.find(u=>Number(u.id)===Number(p));if(!X){_.classList.add("hidden");return}const z=((ae=X.master_subjects)==null?void 0:ae.credit)??1,J=(($=s.master_subjects)==null?void 0:$.credit)??1;z!==J?(_.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${z} / วิชานี้ ${J}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,_.classList.remove("hidden")):_.classList.add("hidden")};s.source_class_id&&b(s.source_class_id),g.addEventListener("change",()=>{b(g.value),n(!0)})}).catch(()=>{});const Q={};Object.entries(B).forEach(([r,g])=>{g.forEach(b=>{Q[b]||(Q[b]=[]),Q[b].push(Number(r))})});const q=Object.fromEntries((window._classesFlat??[]).map(r=>[r.id,r])),R=()=>{const r=x.filter(u=>!u.is_free);if(!r.length)return'<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อน</p>';const b=D.hasFriday==="true"?6:5,p=Array.from({length:b},(u,A)=>A),_=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],X=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50"],z={};r.forEach(u=>{z[`${u.day_of_week}-${u.period_no}`]=u;const A=u.span_periods??1;for(let Y=1;Y<A;Y++)z[`${u.day_of_week}-${u.period_no+Y}`]={...u,_secondary:!0}});const J=Object.values(I).sort((u,A)=>u.period_no-A.period_no),ae=u=>k.has(u)?"selected":(Q[u]??[]).filter(Y=>Y!==s.id).length?"other":"none",$=(u,A)=>{const Y=u.subject_name?h(u.subject_name):"",Z=u.class_name?h(u.class_name):"";return A==="selected"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
          <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${Y}</p>
          ${Z?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${Z}</p>`:""}
        </div>`:A==="other"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
          style="min-height:52px;border-left:3px solid #60a5fa"
          title="คลิกเพื่อเชื่อมร่วมกับ: ${(Q[u.id]??[]).filter(N=>N!==s.id).map(N=>{var V;return((V=q[N])==null?void 0:V.class_name)??`ห้อง ${N}`}).join(", ")}">
          <p class="font-bold text-[11px] leading-tight text-blue-600 break-words w-full">${Y}</p>
          ${Z?`<p class="text-[10px] text-blue-400 leading-tight w-full">${Z}</p>`:""}
          <p class="text-[9px] text-blue-400 mt-0.5">+เชื่อมร่วม</p>
        </div>`:`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
        bg-white hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400 transition-all"
        style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${Y}</p>
        ${Z?`<p class="text-[10px] text-gray-400 leading-tight w-full">${Z}</p>`:""}
      </div>`};return`
      <p class="text-xs text-gray-400 mb-2">คลิกคาบที่ต้องการเชื่อมโยง — กดบันทึกเพื่อยืนยัน</p>
      <div class="overflow-auto rounded-xl border border-gray-100" style="max-height:55vh">
        <table class="w-full text-xs border-collapse" style="min-width:300px">
          <thead class="sticky top-0 z-10">
            <tr class="bg-gray-50">
              <th class="border border-gray-100 px-2 py-2 text-center text-gray-400 w-16 font-medium text-[10px]">คาบ</th>
              ${p.map(u=>`<th class="border border-gray-100 px-1 py-2 text-center font-semibold text-gray-700 text-[11px] ${X[u]}">${_[u]}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${J.map(u=>{var A;return`
            <tr>
              <td class="border border-gray-100 px-1 py-2 text-center bg-gray-50 align-middle">
                <p class="font-bold text-gray-700 text-[10px]">คาบ ${u.period_no}</p>
                <p class="text-[9px] text-gray-400">${((A=u.start_time)==null?void 0:A.slice(0,5))??""}</p>
              </td>
              ${p.map(Y=>{const Z=`${Y}-${u.period_no}`,L=z[Z];if(L!=null&&L._secondary)return"";if(!L)return'<td class="border border-gray-100 p-0" style="min-width:56px;height:1px"></td>';const ee=L.span_periods??1,N=ae(L.id);return`<td class="border border-gray-100 p-0 cursor-pointer cem-srow"
                  data-sid="${L.id}" data-state="${N}"
                  style="min-width:56px;height:1px" ${ee>1?`rowspan="${ee}"`:""}>
                  ${$(L,N)}
                </td>`}).join("")}
            </tr>`}).join("")}
          </tbody>
        </table>
      </div>`},T=r=>{const g=parseInt(r.dataset.sid),b=x.find(J=>J.id===g);if(!b)return;const p=(Q[g]??[]).filter(J=>J!==s.id),_=k.has(g)?"selected":p.length?"other":"none";r.dataset.state=_;const X=b.subject_name?h(b.subject_name):"",z=b.class_name?h(b.class_name):"";if(_==="selected")r.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
        <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${X}</p>
        ${z?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${z}</p>`:""}
      </div>`;else if(_==="other"){const J=p.map(ae=>{var $;return(($=q[ae])==null?void 0:$.class_name)??`ห้อง ${ae}`}).join(", ");r.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${J}">
        <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${X}</p>
        ${z?`<p class="text-[10px] text-gray-400 leading-tight w-full">${z}</p>`:""}
      </div>`}else r.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-white hover:bg-emerald-50 transition-all" style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${X}</p>
        ${z?`<p class="text-[9px] text-gray-400 leading-tight">${z}</p>`:""}
      </div>`},te=()=>{w.querySelectorAll(".cem-srow").forEach(r=>{r.addEventListener("click",async()=>{const g=parseInt(r.dataset.sid),b=r.dataset.state,p=x.find(_=>_.id===g);if(p)if(b==="other"){const X=(Q[g]??[]).filter($=>$!==s.id).map($=>{var u;return((u=q[$])==null?void 0:u.class_name)??`ห้อง ${$}`}).join(", "),z=I[p.period_no],J=z!=null&&z.start_time?z.start_time.slice(0,5):`คาบ ${p.period_no}`,ae=document.createElement("div");ae.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",ae.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">🔗</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ใช้กับห้องอื่นอยู่</p>
              <p class="text-sm text-gray-500 mb-1">${ie[p.day_of_week]} ${J} · ${h(p.subject_name??"")}</p>
              <p class="text-xs text-gray-500 mb-1">เชื่อมอยู่กับ: <b>${X}</b></p>
              <p class="text-xs text-emerald-600 mb-4">สามารถเชื่อมร่วมกันได้ เช่น กรณีสอนสองห้องพร้อมกัน</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">เชื่อมร่วมกัน</button>
              </div>
            </div>`,document.body.appendChild(ae),ae.querySelector(".cfm-cancel").addEventListener("click",()=>ae.remove()),ae.querySelector(".cfm-ok").addEventListener("click",async()=>{ae.remove();try{await ot(s.id,g),k.add(g),C.add(g),m=!0,T(r),F(`เชื่อมร่วมกับ ${X} แล้ว ✅`,"success")}catch($){F("เชื่อมไม่สำเร็จ: "+ce($),"error")}})}else if(b==="selected")try{await ln(s.id,g),k.delete(g),C.delete(g),m=!0,T(r),F("ยกเลิกการเชื่อมแล้ว","info")}catch(_){F("ยกเลิกไม่สำเร็จ: "+ce(_),"error")}else try{await ot(s.id,g),k.add(g),C.add(g),m=!0,T(r),F("เชื่อมตารางสอนแล้ว ✅","success")}catch(_){F("เชื่อมไม่สำเร็จ: "+ce(_),"error")}})})},W=()=>`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
        <select id="cem-building" class="${G} bg-white">
          <option value="">— ไม่ระบุ —</option>
          ${oe.map(r=>`<option value="${r}" ${(se==null?void 0:se.building)===r?"selected":""}>${r}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
        <select id="cem-room" class="${G} bg-white">
          <option value="">— เลือกอาคารก่อน —</option>
        </select>
      </div>
    </div>`,ne=()=>{var ee;const r=w.querySelector("#cem-head"),g=w.querySelector("#cem-head-card"),b=()=>{const N=r==null?void 0:r.options[r.selectedIndex];if(!(N!=null&&N.value)){g==null||g.classList.add("hidden");return}const V=N.text.split(" (")[0],re=N.dataset.img??"";w.querySelector("#cem-head-name").textContent=V,w.querySelector("#cem-head-code").textContent=`รหัส: ${N.dataset.code??""}`,w.querySelector("#cem-head-room").textContent=N.dataset.room?`ห้อง: ${N.dataset.room}`:"";const de=w.querySelector("#cem-head-avatar");de.innerHTML=re?`<img src="${re}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${V.charAt(0)}</div>`,g==null||g.classList.remove("hidden")};r==null||r.addEventListener("change",()=>{b(),n(!0)}),r!=null&&r.value&&b();const p=w.querySelector("#cem-attendance-delegate"),_=w.querySelector("#cem-attendance-delegate-status"),X=(N,V)=>{_&&(_.textContent=N,_.className=`text-xs font-medium mt-1.5 ${V}`,_.classList.remove("hidden"))};p==null||p.addEventListener("change",async()=>{const N=p.checked;p.disabled=!0,X("⏳ กำลังบันทึก...","text-indigo-500"),fe(()=>import("./teacher-views-attendance-delegate-BXVhmE8_.js"),__vite__mapDeps([40,1,2,3,4,5,9,7,10,11,6,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then(V=>V.toggleAttendanceDelegateForClass(e,s.id,N,re=>{s.attendance_delegate_enabled=re,p.checked=re,X(re?"✅ เปิดใช้งานแล้ว":"● ปิดใช้งานแล้ว",re?"text-emerald-600":"text-gray-400")}).catch(()=>{p.checked=!N}).finally(()=>{p.disabled=!1,p.checked!==!!s.attendance_delegate_enabled&&(p.checked=!!s.attendance_delegate_enabled)}))});const z=w.querySelector("#cem-delegate-chips"),J=w.querySelector("#cem-delegate-suggest"),ae=w.querySelector("#cem-delegate-search"),$=w.querySelector("#cem-delegate-results"),u=()=>new Set(j.map(N=>N.id)),A=()=>{z&&(z.innerHTML=j.length?j.map(N=>`
          <span class="delegate-chip inline-flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700" data-sid="${N.id}">
            ${N.image_url?`<img src="${h(N.image_url)}" class="w-5 h-5 rounded-full object-cover" />`:`<span class="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center text-[10px]">${h((N.full_name??"?").charAt(0))}</span>`}
            ${h(N.full_name)}
            <button type="button" class="delegate-remove-btn text-emerald-400 hover:text-red-500 ml-0.5" data-sid="${N.id}">✕</button>
          </span>`).join(""):'<p class="text-xs text-gray-300">ยังไม่ได้มอบหมายใคร</p>')},Y=()=>{if(!J)return;const N=u(),V=[],re=(de,ue)=>{if(!de||N.has(Number(de)))return;const xe=O.find(ye=>Number(ye.id)===Number(de));!xe||V.some(ye=>ye.id===xe.id)||V.push({id:xe.id,full_name:xe.full_name,label:ue})};re(y==null?void 0:y.head_student_id,"หัวหน้าห้อง"),re(y==null?void 0:y.vice_head_student_id,"รองหัวหน้าห้อง"),re(s.head_student_id,"หัวหน้าห้องในฟอร์มนี้"),J.innerHTML=V.map(de=>`
        <button type="button" class="delegate-add-suggest-btn inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-xs text-gray-500 hover:border-emerald-300 hover:text-emerald-600" data-sid="${de.id}">
          ➕ ${h(de.full_name)} <span class="text-gray-300">(${h(de.label)})</span>
        </button>`).join("")},Z=async N=>{const V=O.find(re=>Number(re.id)===Number(N));if(!(!V||u().has(V.id))){j=[...j,V],A(),Y();try{await bn(s.id,V.id)}catch(re){j=j.filter(de=>de.id!==V.id),A(),Y(),F("เพิ่มไม่สำเร็จ: "+ce(re),"error")}}},L=async N=>{const V=j.find(re=>Number(re.id)===Number(N));j=j.filter(re=>Number(re.id)!==Number(N)),A(),Y();try{await gn(s.id,Number(N))}catch(re){V&&(j=[...j,V]),A(),Y(),F("ลบไม่สำเร็จ: "+ce(re),"error")}};z==null||z.addEventListener("click",N=>{const V=N.target.closest(".delegate-remove-btn");V&&L(V.dataset.sid)}),J==null||J.addEventListener("click",N=>{const V=N.target.closest(".delegate-add-suggest-btn");V&&Z(V.dataset.sid)}),ae==null||ae.addEventListener("input",()=>{const N=ae.value.trim().toLowerCase();if(!N){$.classList.add("hidden"),$.innerHTML="";return}const V=u(),re=O.filter(de=>!V.has(de.id)&&(String(de.student_code??"").toLowerCase().includes(N)||String(de.full_name??"").toLowerCase().includes(N))).slice(0,8);$.innerHTML=re.length?re.map(de=>`
          <button type="button" class="delegate-result-btn w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-50 text-xs" data-sid="${de.id}">
            ${de.image_url?`<img src="${h(de.image_url)}" class="w-6 h-6 rounded-full object-cover" />`:'<span class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">👤</span>'}
            <span class="font-semibold text-gray-700">${h(de.full_name)}</span>
            <span class="text-gray-400">${h(de.student_code)}</span>
          </button>`).join(""):'<p class="text-xs text-gray-300 px-3 py-2">ไม่พบนักเรียนที่ตรงกัน</p>',$.classList.remove("hidden")}),$==null||$.addEventListener("click",N=>{const V=N.target.closest(".delegate-result-btn");V&&(Z(V.dataset.sid),ae.value="",$.classList.add("hidden"),$.innerHTML="")}),A(),Y(),["cem-classname","cem-skillgroup","cem-sheetid"].forEach(N=>{var V;(V=w.querySelector(`#${N}`))==null||V.addEventListener("input",()=>n())}),[1,2,3,4,5,6].forEach(N=>{var V;(V=w.querySelector(`#cem-day${N}`))==null||V.addEventListener("change",()=>n(!0))}),(ee=w.querySelector("#cem-auto-dates"))==null||ee.addEventListener("click",async()=>{const N=w.querySelector("#cem-auto-dates"),V=w.querySelector("#cem-dates-info");N.textContent="⏳",N.disabled=!0;try{const re=parseInt(D.academicYear??2568),de=parseInt(D.semester??1),ue=D.semester_start??D.term_start_date??Ot(new Date),xe=e?await Ve(e.id,re,de).catch(()=>[]):[];if(!xe.length){V.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",V.classList.remove("hidden");return}const ye={};xe.filter(ge=>!ge.is_free).forEach(ge=>{const ve=`${ge.subject_name??"?"}|${ge.class_name??""}`;ye[ve]||(ye[ve]={label:`${ge.subject_name??"?"}${ge.class_name?` — ${ge.class_name}`:""}`,entries:[]}),ye[ve].entries.push(ge)});const xt=["อา","จ","อ","พ","พฤ","ศ","ส"],Ae=ge=>{const ve={};return ge.forEach(Ee=>{ve[Ee.day_of_week]||(ve[Ee.day_of_week]=[]),ve[Ee.day_of_week].push(Ee.period_no)}),Object.entries(ve).map(([Ee,Be])=>`${xt[Ee]} คาบ ${Be.join(",")}`).join(" · ")},ke=document.createElement("div");ke.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",ke.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
            <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
              <button class="ce-close text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
              <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
              ${Object.entries(ye).map(([ge,ve])=>`
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
                <input type="radio" name="cem-dates-subj" value="${h(ge)}" class="mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-800">${h(ve.label)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${Ae(ve.entries)}</p>
                </div>
              </label>`).join("")}
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
              <button class="ce-close flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="cem-calc-btn" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
            </div>
          </div>`,document.body.appendChild(ke),ke.querySelectorAll(".ce-close").forEach(ge=>ge.addEventListener("click",()=>ke.remove())),ke.querySelector("#cem-calc-btn").addEventListener("click",()=>{var we;const ge=(we=ke.querySelector('input[name="cem-dates-subj"]:checked'))==null?void 0:we.value;if(!ge){F("กรุณาเลือกวิชาก่อน","warning");return}ke.remove();const ve=ye[ge];if(!ve)return;const Ee=Rn(ue)??new Date,Be=Ee.getDay(),pe=[];ve.entries.forEach(he=>{const Se=he.span_periods??1;for(let Me=0;Me<Se;Me++)pe.push({dow:he.day_of_week,pno:(he.period_no??0)+Me})}),pe.sort((he,Se)=>{const Me=(he.dow-Be+7)%7,Tt=(Se.dow-Be+7)%7;return Me!==Tt?Me-Tt:he.pno-Se.pno});const me=[];let be=0;for(;me.length<6;){for(const he of pe){const Se=new Date(Ee);if(Se.setDate(Se.getDate()+(he.dow-Be+7)%7+be*7),me.push(Se),me.length>=6)break}be++}me.slice(0,6).forEach((he,Se)=>{const Me=w.querySelector(`#cem-day${Se+1}`);Me&&(Me.value=Ot(he))}),n(!0),V.textContent=`✅ คำนวณจาก "${ve.label}" — ตรวจสอบและแก้ไขได้`,V.classList.remove("hidden")})}catch(re){V.textContent="โหลดตารางไม่สำเร็จ: "+ce(re),V.classList.remove("hidden")}finally{N.textContent="🗓️ คำนวณจากตารางสอน",N.disabled=!1}})},le=r=>{if(o){F("กำลังบันทึกข้อมูล รอสักครู่...","warning");return}if(l){F("มีข้อมูลที่ยังไม่ถูกบันทึก กรุณารอระบบบันทึกก่อน","warning");return}w.querySelectorAll(".cem-tab").forEach(b=>{b.className=H(b.dataset.cem===r)});const g=w.querySelector("#cem-content");if(r==="info")g.innerHTML=f(),ne();else if(r==="schedule")g.innerHTML=R(),te();else{g.innerHTML=W();const b=g.querySelector("#cem-building"),p=g.querySelector("#cem-room"),_=X=>{const z=a.filter(J=>J.building===X);p.innerHTML='<option value="">— เลือกห้อง —</option>'+z.map(J=>`<option value="${J.id}" ${J.id===s.classroom_id?"selected":""}>${J.room_number}${J.name?` — ${J.name}`:""}</option>`).join("")};se!=null&&se.building&&_(se.building),b.addEventListener("change",()=>_(b.value)),p.addEventListener("change",async()=>{const X=p.value?parseInt(p.value):null;await os(s.id,X).catch(()=>{}),m=!0,F("บันทึกห้องสอนแล้ว ✅","success")})}},i=async()=>{(l||o)&&(clearTimeout(c),await d().catch(()=>{})),w.remove(),m&&M&&M()};le(v),w.querySelectorAll(".cem-tab").forEach(r=>r.addEventListener("click",()=>le(r.dataset.cem))),w.querySelector("#cem-close").addEventListener("click",i),w.querySelector("#cem-cancel").addEventListener("click",i),w.addEventListener("click",r=>{r.target===w&&i()})}async function xo(e){je("schedule"),Ie("ตารางสอน","schedule");const s=await $e().catch(()=>({})),a=parseInt(s.academicYear??2568),x=parseInt(s.semester??1);await Pe(e,a,x,s)}async function Pe(e,s,a,x=null){var c,m;je("schedule"),Ie("ตารางสอน","schedule");const B=x??await $e().catch(()=>({})),I=B.hasFriday==="true",P=B.scheduleVisionEnabled==="true",M=xs(B,e),[v,O,D,K,y,j]=await Promise.all([ut().catch(()=>[]),e?as(e.id).catch(()=>[]):Promise.resolve([]),e?Ve(e.id,s,a).catch(()=>[]):Promise.resolve([]),e?Lt(e.id).catch(()=>[]):Promise.resolve([]),e?Et(e.id).catch(()=>[]):Promise.resolve([]),e?pt(e.id).catch(()=>[]):Promise.resolve([])]),H=Object.fromEntries((K??[]).map(t=>[t.room_key,t.color_hex])),G=Object.fromEntries(j.map(t=>[t.id,t])),oe={};y.forEach(t=>{oe[t.teacher_schedule_id]||(oe[t.teacher_schedule_id]=G[t.class_id])});const se=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],U=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50","bg-blue-50"],ie=I?6:5,w=Array.from({length:ie},(t,d)=>d),l={};for(const t of D)l[`${t.day_of_week}-${t.period_no}`]=t,(t.span_periods??1)>1&&(l[`${t.day_of_week}-${t.period_no+1}`]={...t,_secondary:!0});const o=(t={},d=null)=>{var f;const n=t!=null&&t.id?oe[t.id]:null;return ze({teacherId:e==null?void 0:e.id,className:(n==null?void 0:n.class_name)??t.class_name,subjectName:((f=n==null?void 0:n.master_subjects)==null?void 0:f.subject_name)??t.subject_name??(d==null?void 0:d.subject_name),fallbackId:(n==null?void 0:n.id)??t.subject_id??(d==null?void 0:d.id)},H)};_e(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${a} / ${s} — คลิกช่องเพื่อกำหนดวิชา</p>
      </div>
      <div class="flex gap-2">
        ${P&&M?`
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
            ${w.map(t=>`
            <th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${U[t]}">
              ${se[t]}
            </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${v.map(t=>{var d,n;return`
          <tr class="hover:bg-gray-50/50">
            <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50">
              <p class="font-bold text-gray-700">คาบ ${t.period_no}</p>
              <p class="text-[10px] text-gray-400">${(d=t.start_time)==null?void 0:d.slice(0,5)}–${(n=t.end_time)==null?void 0:n.slice(0,5)}</p>
            </td>
            ${w.map(f=>{const C=`${f}-${t.period_no}`,k=l[C];if(k!=null&&k._secondary)return"";const Q=k?O.find(ne=>ne.id===k.subject_id):null,q=(k==null?void 0:k.span_periods)??1,R=(k==null?void 0:k.subject_name)??(Q==null?void 0:Q.subject_name)??null,T=(k==null?void 0:k.class_name)??null,te=(k==null?void 0:k.teacher_name)??null,W=o(k,Q);return`<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${f}" data-period="${t.period_no}"
                ${q>1?`rowspan="${q}"`:""}>
                ${R?`
                <div class="w-full h-full rounded-none flex flex-col justify-center items-center
                  gap-1 px-2 py-2 text-center" style="min-height:64px;background:${W.soft};color:${W.text};border-left:4px solid ${W.dot}">
                  <p class="font-extrabold leading-tight text-sm break-words w-full">${R}</p>
                  ${T?`<p class="text-[11px] font-semibold opacity-90 leading-tight w-full">${T}</p>`:""}
                  ${te?`<p class="text-[10px] opacity-65 leading-tight w-full">${te}</p>`:""}
                </div>`:`
                <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style="min-height:52px">
                  <span class="text-indigo-200 text-2xl">＋</span>
                </div>`}
              </td>`}).join("")}
          </tr>`}).join("")}
        </tbody>
      </table>
    </div>

  </div>`),document.querySelectorAll(".schedule-cell").forEach(t=>{t.addEventListener("click",()=>{const d=parseInt(t.dataset.dow),n=parseInt(t.dataset.period),f=`${d}-${n}`,C=l[f];C!=null&&C._secondary||go({teacher:e,dow:d,period:n,periods:v,subjects:O,entry:C,academicYear:s,semester:a,roomColorMap:H,onSave:async k=>{await cs({teacher_id:e.id,...k}),await Pe(e,s,a,B)},onDelete:async()=>{C&&await hn(C.id),await Pe(e,s,a,B)}})})}),(c=document.getElementById("btn-clear-schedule"))==null||c.addEventListener("click",async()=>{confirm("ยืนยันล้างตารางสอนทั้งหมด?")&&(await Fs(e.id,s,a),await Pe(e,s,a,B),F("ล้างตารางแล้ว","success"))}),(m=document.getElementById("btn-upload-schedule"))==null||m.addEventListener("click",()=>{Ls(e,O,v,s,a,M,B)})}async function go({teacher:e,dow:s,period:a,periods:x,subjects:B,entry:I,academicYear:P,semester:M,roomColorMap:v={},onSave:O,onDelete:D}){var k,Q;(k=document.getElementById("sched-popup"))==null||k.remove();const K=await rs().catch(()=>[]),y=await ls().catch(()=>[]),j=[...new Set([...K,...y])].sort(),H=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],G=x.map(q=>q.period_no),oe=x.find(q=>q.period_no===a),se=(I==null?void 0:I.subject_name)??(I!=null&&I.subject_id?((Q=B.find(q=>q.id===I.subject_id))==null?void 0:Q.subject_name)??"":"");let U=se,ie=(I==null?void 0:I.class_name)??"",w=(I==null?void 0:I.teacher_name)??"",l=ze({teacherId:e==null?void 0:e.id,className:ie,subjectName:se,fallbackId:I==null?void 0:I.subject_id},v).dot,o=!1;const c=B.map(q=>`<option value="${q.subject_name}">`).join(""),m=j.map(q=>`<option value="${q}">`).join(""),t=H.map((q,R)=>`<option value="${R}">${q}</option>`).join(""),d=G.map(q=>`<option value="${q}">คาบ ${q}</option>`).join("");let n=I?[{day_of_week:I.day_of_week,period_no:I.period_no,span_periods:I.span_periods??1}]:[{day_of_week:s,period_no:a,span_periods:1}];const f=document.createElement("div");f.id="sched-popup",f.className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",document.body.appendChild(f);function C(){var R,T,te;const q=We(l);f.innerHTML=`
      <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">กำหนดวิชา</h3>
            <p class="text-xs text-gray-400">${H[s]} คาบ ${a}${oe?` (${(R=oe.start_time)==null?void 0:R.slice(0,5)}–${(T=oe.end_time)==null?void 0:T.slice(0,5)})`:""}</p>
          </div>
          <button id="sp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <!-- Card body -->
        <div class="overflow-auto flex-1 px-5 py-4">
          <div class="border-2 rounded-xl overflow-hidden" style="border-color:${q.dot}">
            <!-- Subject info -->
            <div class="px-4 py-3 flex items-start gap-3" style="background:${q.dot}18">
              <div class="relative flex-shrink-0 mt-0.5">
                <button id="sp-color" type="button"
                  class="w-11 h-11 rounded-full border-4 border-white shadow-md ring-2 ring-gray-200"
                  style="background:${q.dot}" title="เลือกสีรายวิชา"></button>
                ${o?`
                <div class="absolute left-0 top-14 z-[310] w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
                  <p class="text-xs font-bold text-gray-500 mb-2">สีรายวิชา</p>
                  <div class="grid grid-cols-6 gap-2">
                    ${Ye.map(W=>`
                    <button type="button"
                      class="sp-color-option w-8 h-8 rounded-full border-2 ${W.dot.toLowerCase()===l.toLowerCase()?"border-gray-800":"border-white"} shadow-sm"
                      style="background:${W.dot}"
                      data-color="${W.dot}"
                      title="เลือกสี"></button>`).join("")}
                  </div>
                </div>`:""}
              </div>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${h(U)}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${h(ie)}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${h(w)}" placeholder="ชื่อครู (ไม่บังคับ)" />
                  <button id="sp-hide-teacher" type="button" class="text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap">ไม่แสดง</button>
                </div>
              </div>
            </div>
            <!-- Sessions -->
            <div id="sp-sessions" class="px-4 pt-3 pb-2 space-y-1.5">
              ${n.map((W,ne)=>`
              <div class="flex items-center gap-1.5 sp-sess-row" data-si="${ne}">
                <select class="sp-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${ne}">
                  ${t}
                </select>
                <select class="sp-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${ne}">
                  ${d}
                </select>
                <select class="sp-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-si="${ne}">
                  <option value="1">1 คาบ</option>
                  <option value="2">2 คาบ</option>
                  <option value="3">3 คาบ</option>
                  <option value="4">4 คาบ</option>
                </select>
                <button type="button" class="sp-del-sess text-red-300 hover:text-red-500 text-base" data-si="${ne}">✕</button>
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
                style="background:${q.dot}">บันทึก</button>
              ${I?`<button id="sp-delete" type="button"
                class="py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50">ลบ</button>`:""}
            </div>
          </div>
          <datalist id="sp-subj-list">${c}</datalist>
          <datalist id="sp-room-list">${m}</datalist>
        </div>
        <!-- Global cancel -->
        <div class="px-5 pb-5 pt-2 border-t border-gray-100 flex-shrink-0">
          <button id="sp-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`,n.forEach((W,ne)=>{const le=f.querySelector(`.sp-sess-row[data-si="${ne}"]`);le&&(le.querySelector(".sp-dow").value=W.day_of_week??s,le.querySelector(".sp-period").value=W.period_no??a,le.querySelector(".sp-span").value=W.span_periods??1)}),f.querySelector("#sp-close").addEventListener("click",()=>f.remove()),f.querySelector("#sp-cancel").addEventListener("click",()=>f.remove()),f.querySelector("#sp-subj-name").addEventListener("input",W=>{U=W.target.value}),f.querySelector("#sp-class").addEventListener("input",W=>{ie=W.target.value}),f.querySelector("#sp-teacher").addEventListener("input",W=>{w=W.target.value}),f.querySelector("#sp-color").addEventListener("click",()=>{o=!o,C()}),f.querySelector("#sp-hide-teacher").addEventListener("click",()=>{w="",f.querySelector("#sp-teacher").value=""}),f.querySelectorAll(".sp-color-option").forEach(W=>W.addEventListener("click",()=>{l=W.dataset.color,o=!1,C()})),f.querySelectorAll(".sp-dow").forEach(W=>W.addEventListener("change",()=>{n[+W.dataset.si].day_of_week=+W.value})),f.querySelectorAll(".sp-period").forEach(W=>W.addEventListener("change",()=>{n[+W.dataset.si].period_no=+W.value})),f.querySelectorAll(".sp-span").forEach(W=>W.addEventListener("change",()=>{n[+W.dataset.si].span_periods=+W.value})),f.querySelectorAll(".sp-del-sess").forEach(W=>W.addEventListener("click",()=>{n.splice(+W.dataset.si,1),n.length||n.push({day_of_week:s,period_no:a,span_periods:1}),C()})),f.querySelector("#sp-add-sess").addEventListener("click",()=>{n.push({day_of_week:s,period_no:G[0]??a,span_periods:1}),C()}),(te=f.querySelector("#sp-delete"))==null||te.addEventListener("click",async()=>{f.remove(),await D()}),f.querySelector("#sp-save").addEventListener("click",async()=>{var E,S,r,g;const W=f.querySelector("#sp-subj-name").value.trim()||null,ne=f.querySelector("#sp-class").value.trim()||null,le=f.querySelector("#sp-teacher").value.trim()||null,i=((E=B.find(b=>b.subject_name===W))==null?void 0:E.id)??null;if(ne||W||i)try{await ds({teacher_id:e.id,room_key:mt({className:ne,subjectName:W,fallbackId:i}),class_name:ne,color_hex:l})}catch(b){F("บันทึกสีไม่ได้: "+ce(b),"warning")}f.remove(),await O({day_of_week:((S=n[0])==null?void 0:S.day_of_week)??s,period_no:((r=n[0])==null?void 0:r.period_no)??a,span_periods:((g=n[0])==null?void 0:g.span_periods)??1,subject_id:i,subject_name:W,class_name:ne,teacher_name:le,note:null,academic_year:P,semester:M})})}C()}async function Ls(e,s,a,x,B,I,P){var ie;(ie=document.getElementById("vision-upload"))==null||ie.remove();const M=await rs().catch(()=>[]),v=await ls().catch(()=>[]),O=[...new Set([...M,...v])].sort(),D=e!=null&&e.id?await Lt(e.id).catch(()=>[]):[],K=Object.fromEntries((D??[]).map(w=>[w.room_key,w.color_hex])),y=document.createElement("div");y.id="vision-upload",y.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",y.innerHTML=`
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
    </div>`,document.body.appendChild(y),y.querySelector("#vision-cancel").addEventListener("click",()=>y.remove()),y.querySelector("#vision-close").addEventListener("click",()=>y.remove());let j=null,H="image/jpeg",G=[];const oe=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],se=a.map(w=>w.period_no);function U(){const w=y.querySelector("#vision-groups");if(!w)return;const l=oe.map((t,d)=>`<option value="${d}">${t}</option>`).join(""),o=se.map(t=>`<option value="${t}">คาบ ${t}</option>`).join(""),c=s.map(t=>`<option value="${t.subject_name}">`).join(""),m=O.map(t=>`<option value="${t}">`).join("");w.innerHTML="",G.forEach((t,d)=>{const n=t.color_hex?We(t.color_hex):ze({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},K),f=document.createElement("div");f.className="border-2 rounded-xl overflow-hidden vg-card",f.style.borderColor=n.dot,f.innerHTML=`
        <!-- Group header -->
        <div class="px-4 py-3 flex items-start gap-3" style="background:${n.dot}18">
          <button type="button" class="vg-color w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow mt-0.5"
            style="background:${n.dot}" title="สีประจำห้อง" data-gi="${d}"></button>
          <div class="flex-1 space-y-1.5 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
              <input list="subj-list-${d}" class="vg-subj-name flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                value="${t.subject_name??""}" placeholder="ชื่อวิชา" data-gi="${d}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
              <input list="room-list-${d}" class="vg-class flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                value="${t.class_name??""}" placeholder="ชั้น/ห้อง เช่น ม.6/2" data-gi="${d}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
              <input class="vg-teacher flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                value="${t.teacher_name??""}" placeholder="ชื่อครู (ไม่บังคับ)" data-gi="${d}" />
              <button type="button" class="vg-hide-teacher text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap" data-gi="${d}">
                ไม่แสดงชื่อครู
              </button>
            </div>
            <div class="flex items-center gap-1.5 pt-1">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">สี</span>
              <div class="flex flex-wrap gap-1.5">
                ${Ye.map(C=>`
                <button type="button"
                  class="vg-color-option w-5 h-5 rounded-full border-2 ${C.dot.toLowerCase()===n.dot.toLowerCase()?"border-gray-700":"border-white"} shadow-sm"
                  style="background:${C.dot}"
                  data-gi="${d}"
                  data-color="${C.dot}"
                  title="เลือกสี"></button>`).join("")}
              </div>
            </div>
          </div>
        </div>
        <!-- Sessions -->
        <div class="px-4 pt-3 pb-2 space-y-1.5 vg-sessions" data-gi="${d}">
          ${t.sessions.map((C,k)=>`
          <div class="flex items-center gap-1.5 vs-row" data-gi="${d}" data-si="${k}">
            <select class="vs-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${d}" data-si="${k}">
              ${l}
            </select>
            <select class="vs-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${d}" data-si="${k}">
              ${o}
            </select>
            <select class="vs-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-gi="${d}" data-si="${k}">
              <option value="1">1 คาบ</option>
              <option value="2">2 คาบ</option>
              <option value="3">3 คาบ</option>
              <option value="4">4 คาบ</option>
            </select>
            <button type="button" class="vs-del text-red-300 hover:text-red-500 text-base" data-gi="${d}" data-si="${k}">✕</button>
          </div>`).join("")}
          <button type="button" class="vg-add-session w-full py-1.5 rounded-lg border border-dashed border-gray-200
            text-[11px] text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition" data-gi="${d}">
            + เพิ่มคาบ
          </button>
        </div>
        <!-- Group footer: บันทึกกลุ่มนี้ + ลบกลุ่ม -->
        <div class="px-4 pb-3 flex gap-2">
          <button type="button" class="vg-save-group flex-1 py-2 rounded-xl text-xs font-semibold text-white transition"
            style="background:${n.dot}" data-gi="${d}">
            ✅ บันทึกกลุ่มนี้
          </button>
          <button type="button" class="vg-del-group py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50 transition" data-gi="${d}">
            ลบกลุ่ม
          </button>
        </div>
        <datalist id="subj-list-${d}">${c}</datalist>
        <datalist id="room-list-${d}">${m}</datalist>`,w.appendChild(f),t.sessions.forEach((C,k)=>{const Q=f.querySelector(`.vs-row[data-gi="${d}"][data-si="${k}"]`);Q&&(Q.querySelector(".vs-dow").value=C.day_of_week??0,Q.querySelector(".vs-period").value=C.period_no??1,Q.querySelector(".vs-span").value=C.span_periods??1)})}),w.querySelectorAll(".vg-subj-name").forEach(t=>t.addEventListener("input",()=>{G[+t.dataset.gi].subject_name=t.value})),w.querySelectorAll(".vg-class").forEach(t=>t.addEventListener("input",()=>{G[+t.dataset.gi].class_name=t.value})),w.querySelectorAll(".vg-teacher").forEach(t=>t.addEventListener("input",()=>{G[+t.dataset.gi].teacher_name=t.value})),w.querySelectorAll(".vg-hide-teacher").forEach(t=>t.addEventListener("click",()=>{const d=+t.dataset.gi;G[d].teacher_name="";const n=w.querySelector(`.vg-teacher[data-gi="${d}"]`);n&&(n.value="")})),w.querySelectorAll(".vg-color-option").forEach(t=>t.addEventListener("click",()=>{G[+t.dataset.gi].color_hex=t.dataset.color,U()})),w.querySelectorAll(".vg-del-group").forEach(t=>t.addEventListener("click",()=>{G.splice(+t.dataset.gi,1),U()})),w.querySelectorAll(".vg-save-group").forEach(t=>t.addEventListener("click",async()=>{var C;const d=+t.dataset.gi,n=G[d],f=t.textContent;t.disabled=!0,t.textContent="⏳ กำลังบันทึก...";try{const k=n.color_hex??ze({teacherId:e==null?void 0:e.id,className:n.class_name,subjectName:n.subject_name,fallbackId:n.subject_id},K).dot;(n.class_name||n.subject_name||n.subject_id)&&await ds({teacher_id:e.id,room_key:mt({className:n.class_name,subjectName:n.subject_name,fallbackId:n.subject_id}),class_name:((C=n.class_name)==null?void 0:C.trim())||null,color_hex:k}).catch(Q=>F("บันทึกสีไม่ได้: "+ce(Q),"warning")),await Promise.all(n.sessions.map(Q=>{var q,R,T;return cs({teacher_id:e.id,subject_id:n.subject_id??null,subject_name:((q=n.subject_name)==null?void 0:q.trim())||null,class_name:((R=n.class_name)==null?void 0:R.trim())||null,teacher_name:((T=n.teacher_name)==null?void 0:T.trim())||null,day_of_week:Q.day_of_week,period_no:Q.period_no,span_periods:Q.span_periods??1,academic_year:x,semester:B})})),t.textContent="✅ บันทึกแล้ว",t.style.background="#16a34a",setTimeout(()=>{const Q=n.color_hex?We(n.color_hex):ze({teacherId:e==null?void 0:e.id,className:n.class_name,subjectName:n.subject_name,fallbackId:n.subject_id},K);t.disabled=!1,t.textContent=f,t.style.background=Q.dot},2e3),Pe(e,x,B,P).catch(()=>{})}catch(k){F("บันทึกกลุ่มนี้ไม่สำเร็จ: "+ce(k),"error"),t.disabled=!1,t.textContent=f}})),w.querySelectorAll(".vs-dow").forEach(t=>t.addEventListener("change",()=>{G[+t.dataset.gi].sessions[+t.dataset.si].day_of_week=+t.value})),w.querySelectorAll(".vs-period").forEach(t=>t.addEventListener("change",()=>{G[+t.dataset.gi].sessions[+t.dataset.si].period_no=+t.value})),w.querySelectorAll(".vs-span").forEach(t=>t.addEventListener("change",()=>{G[+t.dataset.gi].sessions[+t.dataset.si].span_periods=+t.value})),w.querySelectorAll(".vs-del").forEach(t=>t.addEventListener("click",()=>{const d=G[+t.dataset.gi];d.sessions.splice(+t.dataset.si,1),d.sessions.length||G.splice(+t.dataset.gi,1),U()})),w.querySelectorAll(".vg-add-session").forEach(t=>t.addEventListener("click",()=>{G[+t.dataset.gi].sessions.push({day_of_week:0,period_no:se[0]??1,span_periods:1}),U()}))}y.querySelector("#vision-file").addEventListener("change",w=>{const l=w.target.files[0];if(!l)return;H=l.type||"image/jpeg";const o=new FileReader;o.onload=c=>{j=c.target.result.split(",")[1],y.querySelector("#vision-img").src=c.target.result,y.querySelector("#vision-preview").classList.remove("hidden"),y.querySelector("#vision-analyze").disabled=!1,y.querySelector("#vision-label").classList.add("hidden")},o.readAsDataURL(l)}),y.querySelector("#vision-analyze").addEventListener("click",async()=>{var o,c,m,t,d;if(!j)return;const w=y.querySelector("#vision-analyze"),l=y.querySelector("#vision-status");w.disabled=!0,w.textContent="⏳ กำลังวิเคราะห์...",l.textContent="กำลังส่งรูปไป Gemini AI...",l.classList.remove("hidden");try{const n=s.map(ne=>`"${ne.subject_name}" (id:${ne.id})`).join(", "),C=`วิเคราะห์ตารางสอนในภาพนี้อย่างละเอียด
แต่ละช่องในตารางมี 3 ส่วน: บรรทัด1=ชื่อวิชา(ตัวหนาภาษาอังกฤษ), บรรทัด2=ชั้น/ห้องเรียน, บรรทัด3=ชื่อครู
คาบเรียน: ${a.map(ne=>{var le,i;return`คาบ ${ne.period_no}: ${(le=ne.start_time)==null?void 0:le.slice(0,5)}-${(i=ne.end_time)==null?void 0:i.slice(0,5)}`}).join(", ")}
วันเรียน: 0=อาทิตย์,1=จันทร์,2=อังคาร,3=พุธ,4=พฤหัส,5=ศุกร์
วิชาที่ครูสอน (อาจตรงกับในตาราง): ${n||"ไม่ระบุ"}

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
- ช่องว่างไม่ต้องใส่`,{data:k,error:Q}=await ps.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:C,imageBase64:j,imageMimeType:H}});if(Q)throw new Error(Q.message??"Edge Function error");if(k!=null&&k.error)throw new Error(`Gemini: ${k.error.message??k.error.status}`);const q=((d=(t=(m=(c=(o=k.candidates)==null?void 0:o[0])==null?void 0:c.content)==null?void 0:m.parts)==null?void 0:t[0])==null?void 0:d.text)??"",R=q.match(/```json\s*([\s\S]*?)```/)||q.match(/(\[[\s\S]*?\])/),T=R?R[1]??R[0]:null;if(!T)throw console.error("Raw:",q),new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");G=JSON.parse(T).map(ne=>({...ne,sessions:(ne.sessions??[]).map(le=>({...le}))})),U(),y.querySelector("#vision-result").classList.remove("hidden"),y.querySelector("#vision-save").classList.remove("hidden");const W=G.reduce((ne,le)=>ne+le.sessions.length,0);l.textContent=`✅ พบ ${G.length} กลุ่มวิชา ${W} คาบ — ตรวจสอบแล้วกด "บันทึก"`}catch(n){console.error("Vision error:",n);const f=n.message??"ไม่ทราบสาเหตุ";l.innerHTML=`
        <span class="text-red-500 font-medium">❌ ${f}</span>
        <br/><span class="text-gray-400 text-xs">ปัญหานี้ต้องให้แอดมินแก้ไข</span>`;const C="vision-err-feedback";if(!y.querySelector(`#${C}`)){const k=document.createElement("button");k.id=C,k.className="mt-2 w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition",k.textContent="📨 แจ้งปัญหานี้ให้แอดมิน",k.addEventListener("click",()=>{var Q;y.remove(),(Q=window._openFeedbackWidget)==null||Q.call(window,`[ตารางสอน AI] ${f}`)}),l.after(k)}}finally{w.disabled=!1,w.textContent="🔍 วิเคราะห์อีกครั้ง"}}),y.querySelector("#vision-add-group").addEventListener("click",()=>{G.push({subject_name:"",class_name:"",teacher_name:"",subject_id:null,sessions:[{day_of_week:0,period_no:se[0]??1,span_periods:1}]}),y.querySelector("#vision-result").classList.remove("hidden"),y.querySelector("#vision-save").classList.remove("hidden"),U()}),y.querySelector("#vision-save").addEventListener("click",async()=>{y.remove(),await Pe(e,x,B,P)})}async function bo(e,s){var O,D,K;const a=await $e().catch(()=>({})),x=parseInt(a.academicYear??2568),B=parseInt(a.semester??1),I=a.scheduleVisionEnabled==="true",P=xs(a,e);je("schedule"),Ie("สร้างตารางสอน","schedule"),_e(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-violet-400 text-white
                  text-3xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🗓️
      </div>
      <h2 class="text-2xl font-bold text-gray-800">สร้างตารางสอน</h2>
      <p class="text-gray-500 text-sm mt-1">ภาค ${B} / ${x}</p>
    </div>

    ${I&&P?`
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
  </div>`);const M=e?await as(e.id).catch(()=>[]):[],v=await ut().catch(()=>[]);(O=document.getElementById("btn-open-vision"))==null||O.addEventListener("click",()=>{Ls(e,M,v,x,B,P,a)}),(D=document.getElementById("btn-open-grid"))==null||D.addEventListener("click",()=>{Pe(e,x,B,a)}),(K=document.getElementById("btn-skip-schedule"))==null||K.addEventListener("click",()=>{s&&s()})}const dt=[{group:"ชื่อแท็บภาษา",fields:[["label","ชื่อแท็บ (แสดงบนปุ่มแท็บทุกจุด)"]]},{group:"หัวตาราง",fields:[["tableTitle","ชื่อตาราง มาตรฐาน/ตัวชี้วัด"],["tableHint","คำอธิบายตาราง (hint)"]]},{group:"คอลัมน์",fields:[["colsBasic","คอลัมน์พื้นฐาน (คั่นด้วย | )"],["colsExtra","คอลัมน์เพิ่มเติม (คั่นด้วย | )"],["tplBasic","ชื่อปุ่มเทมเพลตพื้นฐาน"],["tplExtra","ชื่อปุ่มเทมเพลตเพิ่มเติม"],["rowHeader","หัวคอลัมน์ข้อ/ลำดับ"]]},{group:"คำอธิบายรายวิชา",fields:[["descLabel","Label ช่องคำอธิบายรายวิชา"],["descPlaceholder","Placeholder คำอธิบายรายวิชา"]]},{group:"ผู้ลงนาม",fields:[["signerLabel","Label ผู้ลงนาม"],["signerPlaceholder","Placeholder ผู้ลงนาม"],["signerHint","คำใต้ช่องผู้ลงนาม"]]},{group:"จุดประสงค์วัดผล",fields:[["objTitle","หัวข้อจุดประสงค์"],["between","ป้ายระหว่างภาค"],["mid","ป้ายกลางภาค"],["final","ป้ายปลายภาค"],["pickerTitleBetween","ชื่อ dialog — ระหว่างภาค"],["pickerTitleMid","ชื่อ dialog — กลางภาค"],["pickerTitleFinal","ชื่อ dialog — ปลายภาค"]]},{group:"ส่วนช่วยเติมข้อมูล",fields:[["helpTitle","หัวข้อแผง AI"],["helpSub","คำอธิบายแผง AI"],["topicLabel","Label บท/เรื่อง"],["topicPlaceholder","Placeholder บท/เรื่อง"],["btnCurriculum","ปุ่มค้นหลักสูตร"],["btnAI","ปุ่ม AI ร่าง"],["btnImg","ปุ่มอ่านรูป"]]},{group:"ข้อความปุ่ม/Toast",fields:[["save","ปุ่มบันทึก"],["close","ปุ่มปิด"],["addTopic","ปุ่มเพิ่มบท"],["addCol","ปุ่มเพิ่มคอลัมน์"],["addRow","ปุ่มเพิ่มแถว"],["delRow","ปุ่มลบแถว"],["pickerOk","ปุ่ม OK ใน dialog"],["pickerCancel","ปุ่มยกเลิก ใน dialog"],["toastSaved","Toast บันทึกสำเร็จ"],["toastSearchEmpty","Toast ไม่พบในหลักสูตรแกนกลาง"],["toastAIDone","Toast AI ร่างสำเร็จ"],["toastImgDone","Toast อ่านรูปสำเร็จ"],["noOpts","ข้อความเมื่อยังไม่มีข้อ"],["notSelected","ข้อความยังไม่เลือก"]]}];function es(e,s){var B,I,P;const a={...s,...e},x={};for(const{fields:M}of dt)for(const[v]of M)v==="colsBasic"?x[v]=(a.colsBasic??[]).join(" | "):v==="colsExtra"?x[v]=(a.colsExtra??[]).join(" | "):v==="pickerTitleBetween"?x[v]=((B=a.pickerTitles)==null?void 0:B.between)??"":v==="pickerTitleMid"?x[v]=((I=a.pickerTitles)==null?void 0:I.mid)??"":v==="pickerTitleFinal"?x[v]=((P=a.pickerTitles)==null?void 0:P.final)??"":x[v]=a[v]??"";return x}function fo(e){const s={};for(const{fields:a}of dt)for(const[x]of a){const B=String(e[x]??"").trim();x==="colsBasic"?s.colsBasic=B.split("|").map(I=>I.trim()).filter(Boolean):x==="colsExtra"?s.colsExtra=B.split("|").map(I=>I.trim()).filter(Boolean):x==="pickerTitleBetween"?(s.pickerTitles=s.pickerTitles??{},s.pickerTitles.between=B):x==="pickerTitleMid"?(s.pickerTitles=s.pickerTitles??{},s.pickerTitles.mid=B):x==="pickerTitleFinal"?(s.pickerTitles=s.pickerTitles??{},s.pickerTitles.final=B):s[x]=B}return s}async function yo(e,s=!1){je("course-doc-lang"),Ie("ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);const a=["th","jawi","ar","rumi"],x={th:"ภาษาไทย",jawi:"يَاوِي (Jawi)",ar:"العربية",rumi:"Rumi (Melayu)"},B={th:"ltr",jawi:"rtl",ar:"rtl",rumi:"ltr"},[I,P]=await Promise.all([Os().catch(()=>[]),s?fe(()=>import("./api-J-Ak1T-Y.js"),__vite__mapDeps([1,2,3,4,5])).then(y=>y.getTeachers()).catch(()=>[]):Promise.resolve([])]),M=Object.fromEntries(I.map(y=>[y.lang_key,y])),v=s?a:a.filter(y=>{const j=M[y];return j&&(e==null?void 0:e.id)&&(j.editor_teacher_ids??[]).includes(e.id)});if(!v.length){_e(`<div class="max-w-lg mx-auto text-center py-20 text-gray-400">
      <p class="text-4xl mb-4">🔒</p>
      <p class="font-medium">ยังไม่มีสิทธิ์แก้ไขภาษาใด</p>
      <p class="text-xs mt-1">ขอสิทธิ์จากแอดมินเพื่อแก้ไขภาษาที่รับผิดชอบ</p>
    </div>`);return}let O=v[0];const D=y=>{var j,H,G;return((H=(j=M[y])==null?void 0:j.settings)==null?void 0:H.label)||((G=COURSE_DOC_LANGS[y])==null?void 0:G.label)||x[y]||y},K=()=>{var c,m;const y=v.map(t=>`
      <button class="cdl-tab px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap
        ${t===O?"bg-emerald-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
        data-lang="${t}" dir="${B[t]}">${D(t)}</button>`).join(""),j=M[O]??{settings:{},editor_teacher_ids:[]},H=COURSE_DOC_LANGS[O]??{},G=es(j.settings??{},H),oe=B[O],se=M.th??{},U=es(se.settings??{},COURSE_DOC_LANGS.th??{}),ie=O!=="th",w=dt.map(({group:t,fields:d})=>`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${t}</p>
        ${ie?`
        <div class="flex items-center gap-3 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-t-xl">
          <span class="w-44 flex-shrink-0"></span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ภาษาไทย (อ้างอิง)</span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider" dir="${oe}">${D(O)}</span>
        </div>`:""}
        <div class="bg-white rounded-xl ${ie?"rounded-tl-none rounded-tr-none":""} border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          ${d.map(([n,f])=>`
          <div class="flex items-start gap-3 px-4 py-3">
            <label class="w-44 flex-shrink-0 text-xs text-gray-500 pt-1.5 leading-tight">${f}</label>
            ${ie?`
            <div class="flex-1 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100 select-none" dir="ltr">
              ${h(String(U[n]??"—"))}
            </div>`:""}
            <input id="cdl-${n}" type="text" dir="${oe}"
              class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              value="${h(String(G[n]??""))}"
              placeholder="${h(String(H[n]??""))}" />
          </div>`).join("")}
        </div>
      </div>`).join(""),l=j.editor_teacher_ids??[],o=s?`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ผู้มีสิทธิ์แก้ไขภาษานี้</p>
        <div class="bg-white rounded-xl border border-gray-200 shadow-md p-4">
          <p class="text-xs text-gray-400 mb-3">เลือกครูที่จะให้แก้ไข <span dir="${oe}" class="font-semibold text-emerald-700">${D(O)}</span></p>
          <div class="max-h-48 overflow-y-auto space-y-1" id="cdl-editors">
            ${P.filter(t=>t.id!==(e==null?void 0:e.id)).map(t=>`
              <label class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">
                <input type="checkbox" class="cdl-editor-cb" value="${t.id}" ${l.includes(t.id)?"checked":""}/>
                <span class="font-medium text-gray-800">${h(t.full_name)}</span>
                <span class="text-xs text-gray-400">${h(t.teacher_code??"")} · ${h(t.dept??"—")}</span>
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
      <div class="flex gap-2 flex-wrap mb-6">${y}</div>

      ${w}
      ${o}
    </div>`),document.querySelectorAll(".cdl-tab").forEach(t=>{t.addEventListener("click",()=>{O=t.dataset.lang,K()})}),(c=document.getElementById("cdl-save-settings"))==null||c.addEventListener("click",async()=>{var f;const t={};for(const{fields:C}of dt)for(const[k]of C)t[k]=((f=document.getElementById(`cdl-${k}`))==null?void 0:f.value)??"";const d=fo(t),n=document.getElementById("cdl-save-settings");n.disabled=!0,n.textContent="กำลังบันทึก...";try{const C=await en(O,d,e==null?void 0:e.id);M[O]={...M[O],...C},F(`บันทึกการตั้งค่า ${D(O)} สำเร็จ`,"success")}catch(C){F("บันทึกไม่สำเร็จ: "+ce(C),"error")}n.disabled=!1,n.innerHTML="💾 บันทึก"}),(m=document.getElementById("cdl-save-editors"))==null||m.addEventListener("click",async()=>{const t=[...document.querySelectorAll(".cdl-editor-cb:checked")].map(n=>Number(n.value)),d=document.getElementById("cdl-save-editors");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const n=await tn(O,t);M[O]={...M[O],...n},F(`อัปเดตผู้มีสิทธิ์ ${D(O)} สำเร็จ`,"success")}catch(n){F("บันทึกไม่สำเร็จ: "+ce(n),"error")}d.disabled=!1,d.textContent="💾 บันทึกผู้มีสิทธิ์"})};K()}async function vo(e){je("announcements-view"),Ie("ประกาศ","announcement");const{getAllAnnouncementsForTeacher:s,getMyAcks:a,ackAnnouncement:x,getSupervisorComments:B,getSystemConfig:I,getTeacherBusyPeriodsOnDate:P,incrementAnnouncementView:M,incrementAnnouncementLike:v,getAnnouncementCommentsBulk:O,addAnnouncementComment:D,deleteAnnouncementComment:K}=await fe(async()=>{const{getAllAnnouncementsForTeacher:i,getMyAcks:E,ackAnnouncement:S,getSupervisorComments:r,getSystemConfig:g,getTeacherBusyPeriodsOnDate:b,incrementAnnouncementView:p,incrementAnnouncementLike:_,getAnnouncementCommentsBulk:X,addAnnouncementComment:z,deleteAnnouncementComment:J}=await import("./api-J-Ak1T-Y.js");return{getAllAnnouncementsForTeacher:i,getMyAcks:E,ackAnnouncement:S,getSupervisorComments:r,getSystemConfig:g,getTeacherBusyPeriodsOnDate:b,incrementAnnouncementView:p,incrementAnnouncementLike:_,getAnnouncementCommentsBulk:X,addAnnouncementComment:z,deleteAnnouncementComment:J}},__vite__mapDeps([1,2,3,4,5]));let y=null;try{y=await I()}catch{}_e(`<div class="animate-fade max-w-2xl mx-auto">
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
  </div>`);const j=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),H=i=>new Date(i).toLocaleDateString("th-TH",{dateStyle:"long"}),G=i=>i?new Date(i).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",oe=i=>new Date(new Date(i).getTime()+7*36e5).toISOString().slice(0,10),se={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},U=i=>i?i.startsWith("academic")?"bg-blue-100 text-blue-700":i.startsWith("registrar")?"bg-violet-100 text-violet-700":i==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",ie={general:"ทั่วไป",profile:"โปรไฟล์",schedule:"ตารางสอน",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},w=[{key:"pinned",label:"📌 ปักหมุด",color:"from-amber-400 to-orange-400",filter:i=>i.priority>0},{key:"academic",label:"🎓 ฝ่ายวิชาการ",color:"from-blue-400 to-indigo-400",filter:i=>i.priority===0&&(i.creator_role??"").startsWith("academic")},{key:"registrar",label:"📋 ฝ่ายทะเบียน",color:"from-violet-400 to-purple-400",filter:i=>i.priority===0&&(i.creator_role??"").startsWith("registrar")},{key:"dept_head",label:"🏫 หัวหน้ากลุ่มสาระ",color:"from-emerald-400 to-teal-400",filter:i=>i.priority===0&&i.creator_role==="dept_head"},{key:"admin",label:"⚙️ ทั่วไป",color:"from-gray-300 to-gray-400",filter:i=>i.priority===0&&!i.creator_role}],l=i=>{if(!i)return"";const E=Math.ceil((new Date(i)-new Date)/864e5);return E<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${G(i)}</span>`:E<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${G(i)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${G(i)}</span>`};let o="announce";document.querySelectorAll(".ann-tab").forEach(i=>{i.addEventListener("click",()=>{o=i.dataset.tab,document.querySelectorAll(".ann-tab").forEach(E=>{const S=E.dataset.tab===o;E.className=`ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${S?"bg-white shadow-sm text-gray-800":"text-gray-500 hover:text-gray-700"}`}),document.getElementById("ann-panel-announce").classList.toggle("hidden",o!=="announce"),document.getElementById("ann-panel-myann").classList.toggle("hidden",o!=="myann"),document.getElementById("ann-panel-comments").classList.toggle("hidden",o!=="comments"),o==="myann"&&!m&&n()})});const c={general:{label:"ทั่วไป",icon:"📢",hasDeadline:!1},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",hasDeadline:!0},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",hasDeadline:!1},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",hasDeadline:!1},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",hasDeadline:!1}};let m=!1,t=[];const d=(i,E)=>{var g;const S=c[i.ann_type]??{label:i.ann_type,icon:"📢"},r=(i.target_class_ids??[]).map(b=>{var p;return((p=E.find(_=>_.id===b))==null?void 0:p.class_name)??`#${b}`}).join(", ");return`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 space-y-2" data-myann-id="${i.id}">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">${S.icon} ${S.label}</span>
            ${i.priority>0?'<span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-medium">📌 ปักหมุด</span>':""}
            ${i.is_active?"":'<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>'}
          </div>
          <p class="font-semibold text-gray-800">${j(i.title)}</p>
          ${i.body?`<p class="text-sm text-gray-500 mt-1 line-clamp-2">${j(i.body)}</p>`:""}
          ${i.file_url?`<a href="${j(i.file_url)}" target="_blank" class="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1">📎 ไฟล์แนบ</a>`:""}
          ${(g=i.attachment_urls)!=null&&g.length?`<div class="flex flex-wrap gap-1.5 mt-1">${i.attachment_urls.map(b=>`<a href="${j(b.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${j(b.name)}</a>`).join("")}</div>`:""}
          <p class="text-xs text-gray-400 mt-2">ห้อง: ${j(r)||"—"}</p>
        </div>
        <div class="flex gap-1 flex-shrink-0">
          <button onclick="window._editMyAnn(${i.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600 transition" title="แก้ไข">✏️</button>
          <button onclick="window._togglePinMyAnn(${i.id},${i.priority})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-amber-500 transition" title="${i.priority>0?"เลิกปักหมุด":"ปักหมุด"}">📌</button>
          <button onclick="window._deleteMyAnn(${i.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition" title="ลบ">🗑️</button>
        </div>
      </div>
    </div>`},n=async()=>{m=!0;const i=document.getElementById("ann-panel-myann");if(i){i.innerHTML='<div class="flex justify-center py-8 text-gray-400"><svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> กำลังโหลด...</div>';try{const{getTeacherOwnAnnouncements:E,getMyClasses:S,getTeacherPackageAccess:r}=await fe(async()=>{const{getTeacherOwnAnnouncements:_,getMyClasses:X,getTeacherPackageAccess:z}=await import("./api-J-Ak1T-Y.js");return{getTeacherOwnAnnouncements:_,getMyClasses:X,getTeacherPackageAccess:z}},__vite__mapDeps([1,2,3,4,5])),[g,b,p]=await Promise.all([E(e.id),S(e.id).catch(()=>[]),r(e.id).catch(()=>({hasSemester:!1}))]);t=b,C(g,p.hasSemester)}catch(E){i.innerHTML=`<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${E.message}</p>`}}},f=3,C=(i,E=!1)=>{var b;const S=document.getElementById("ann-panel-myann");if(!S)return;const r=E||i.length<f,g=E?'<span class="text-xs text-emerald-600 font-medium">✨ ไม่จำกัด</span>':`<span class="text-xs text-gray-400">${i.length}/${f} (ฟรี)</span>`;S.innerHTML=`
    <div class="space-y-3">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-gray-700">ประกาศของฉัน (${i.length})</h3>
          ${g}
        </div>
        <button id="btn-create-myann"
          class="px-4 py-2 text-sm rounded-xl font-semibold transition ${r?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}">
          + สร้างประกาศ
        </button>
      </div>
      ${!E&&i.length>=f?`
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <span class="text-2xl flex-shrink-0">⭐</span>
        <div>
          <p class="text-sm font-semibold text-amber-800">ใช้ครบ ${f} ประกาศแล้ว</p>
          <p class="text-xs text-amber-600 mt-1">อัพเกรดเป็นแพ็กเกจโดเนทเพื่อสร้างประกาศได้ไม่จำกัด</p>
        </div>
      </div>`:""}
      ${i.length?i.map(p=>d(p,t)).join(""):`
      <div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📢</p>
        <p class="text-sm">ยังไม่มีประกาศ กดปุ่ม "สร้างประกาศ" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`,(b=document.getElementById("btn-create-myann"))==null||b.addEventListener("click",()=>{if(!r){F(`ใช้ครบ ${f} ประกาศแล้ว — อัพเกรดเพื่อใช้งานไม่จำกัด`,"warning");return}R()})},k=(i,E=[])=>t.map(S=>{var r;return`<label class="flex items-center gap-2 text-xs cursor-pointer hover:text-indigo-700 py-0.5">
        <input type="checkbox" name="myann-cls-${i}" value="${S.id}"
          ${E.includes(S.id)?"checked":""} class="rounded text-indigo-600 flex-shrink-0" />
        <span class="truncate">${j(S.class_name)}</span>
        <span class="text-gray-300 truncate">${j(((r=S.master_subjects)==null?void 0:r.subject_name)??"")}</span>
      </label>`}).join(""),Q=(i,E=[],S="",r=[])=>`
    <div class="myann-entry border border-gray-200 rounded-xl p-3 space-y-2" data-entry="${i}" data-kept='${j(JSON.stringify(r)).replace(/'/g,"&#39;")}'>
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-indigo-600">ชุดที่ ${i+1}</span>
        ${i>0?`<button type="button" class="myann-remove-entry text-red-400 hover:text-red-600 text-sm px-2" data-entry="${i}">✕ ลบ</button>`:""}
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ห้องเรียน <span class="text-red-400">*</span></p>
        <div class="border border-gray-100 rounded-lg p-2 max-h-28 overflow-y-auto space-y-0.5">
          ${k(i,E)||'<p class="text-xs text-gray-400">ยังไม่มีห้องเรียน</p>'}
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">แนบไฟล์ (เลือกได้หลายไฟล์ ไม่บังคับ)</p>
        <div class="myann-kept-files flex flex-wrap gap-1.5 mb-1.5" data-entry="${i}"></div>
        <input name="myann-files-${i}" type="file" multiple
          class="w-full text-xs" />
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">หรือลิงก์ไฟล์ (เช่น Google Drive)</p>
        <input name="myann-file-${i}" type="url" value="${j(S)}"
          placeholder="https://drive.google.com/..."
          class="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </div>
    </div>`,q=i=>{i.querySelectorAll(".myann-entry").forEach(E=>{const S=E.dataset.entry,r=JSON.parse(E.dataset.kept||"[]"),g=i.querySelector(`.myann-kept-files[data-entry="${S}"]`);g&&(g.innerHTML=r.map((b,p)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${j(b.name)}
          <button type="button" class="myann-remove-file text-indigo-400 hover:text-red-500 font-bold" data-entry="${S}" data-i="${p}">✕</button>
        </span>`).join(""),g.querySelectorAll(".myann-remove-file").forEach(b=>b.addEventListener("click",()=>{const p=JSON.parse(E.dataset.kept||"[]");p.splice(parseInt(b.dataset.i,10),1),E.dataset.kept=JSON.stringify(p),q(i)})))})},R=(i=null)=>{var g;let E=1;const S=document.createElement("div");S.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",S.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${i?"✏️ แก้ไขประกาศ":"📢 สร้างประกาศใหม่"}</h3>
        <button id="myann-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <!-- ข้อมูลร่วมทุกชุด -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ประเภทประกาศ</label>
          <select id="myann-type" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            ${Object.entries(c).map(([b,p])=>`<option value="${b}" ${(i==null?void 0:i.ann_type)===b?"selected":""}>${p.icon} ${p.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หัวข้อ <span class="text-red-400">*</span></label>
          <input id="myann-title" type="text" value="${j((i==null?void 0:i.title)??"")}"
            placeholder="ระบุหัวข้อประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">รายละเอียด</label>
          <textarea id="myann-body" rows="2"
            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none">${j((i==null?void 0:i.body)??"")}</textarea>
        </div>
        <div id="myann-deadline-wrap" class="${((i==null?void 0:i.ann_type)??"general")==="deadline"?"":"hidden"}">
          <label class="block text-xs font-semibold text-gray-600 mb-1">⏰ วันและเวลากำหนดส่ง/สอบ <span class="text-red-400">*</span></label>
          <input id="myann-deadline" type="datetime-local"
            value="${i!=null&&i.deadline_at?new Date(i.deadline_at).toISOString().slice(0,16):""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-pin" type="checkbox" ${(i==null?void 0:i.priority)>0?"checked":""} class="rounded text-amber-500" />
            <span>📌 ปักหมุด</span>
          </label>
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-active" type="checkbox" ${!i||i!=null&&i.is_active?"checked":""} class="rounded text-emerald-500" />
            <span>เผยแพร่ทันที</span>
          </label>
        </div>
        <!-- ชุดห้อง+ไฟล์ -->
        <div class="border-t border-gray-100 pt-3">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-gray-700">📋 ห้องเรียน + ลิงก์ (แต่ละชุดสร้างประกาศแยก)</p>
            ${i?"":`<button type="button" id="myann-add-entry"
              class="flex items-center gap-1 text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition">
              ＋ เพิ่มชุด
            </button>`}
          </div>
          <div id="myann-entries" class="space-y-3">
            ${Q(0,(i==null?void 0:i.target_class_ids)??[],(i==null?void 0:i.file_url)??"",(i==null?void 0:i.attachment_urls)??[])}
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="myann-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="myann-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
          ${i?"บันทึก":"สร้างประกาศ"}
        </button>
      </div>
    </div>`,document.body.appendChild(S),q(S),S.querySelector("#myann-close").addEventListener("click",()=>S.remove()),S.querySelector("#myann-cancel").addEventListener("click",()=>S.remove()),S.querySelector("#myann-type").addEventListener("change",b=>{S.querySelector("#myann-deadline-wrap").classList.toggle("hidden",b.target.value!=="deadline")}),(g=S.querySelector("#myann-add-entry"))==null||g.addEventListener("click",()=>{const b=S.querySelector("#myann-entries"),p=document.createElement("div");p.innerHTML=Q(E),b.appendChild(p.firstElementChild),E++,r(),q(S)});const r=()=>{S.querySelectorAll(".myann-remove-entry").forEach(b=>{b.onclick=()=>{var _;const p=Number(b.dataset.entry);(_=S.querySelector(`.myann-entry[data-entry="${p}"]`))==null||_.remove()}})};r(),S.querySelector("#myann-save").addEventListener("click",async()=>{const b=S.querySelector("#myann-title").value.trim(),p=S.querySelector("#myann-body").value.trim(),_=S.querySelector("#myann-type").value,X=S.querySelector("#myann-pin").checked,z=S.querySelector("#myann-active").checked,J=_==="deadline"&&S.querySelector("#myann-deadline").value||null;if(!b){F("กรุณาระบุหัวข้อ","warning");return}if(_==="deadline"&&!J){F("กรุณาระบุวันและเวลา","warning");return}const ae=[...S.querySelectorAll(".myann-entry")].map(u=>{var N,V;const A=Number(u.dataset.entry),Y=[...u.querySelectorAll(`input[name="myann-cls-${A}"]:checked`)].map(re=>Number(re.value)),Z=((N=u.querySelector(`input[name="myann-file-${A}"]`))==null?void 0:N.value.trim())??"",L=JSON.parse(u.dataset.kept||"[]"),ee=[...((V=u.querySelector(`input[name="myann-files-${A}"]`))==null?void 0:V.files)??[]];return{classIds:Y,fileUrl:Z,keptFiles:L,newFiles:ee}}).filter(u=>u.classIds.length>0);if(!ae.length){F("กรุณาเลือกอย่างน้อย 1 ห้องในแต่ละชุด","warning");return}const $=S.querySelector("#myann-save");$.disabled=!0,$.textContent="กำลังบันทึก...";try{const{createAnnouncement:u,updateAnnouncement:A}=await fe(async()=>{const{createAnnouncement:L,updateAnnouncement:ee}=await import("./api-J-Ak1T-Y.js");return{createAnnouncement:L,updateAnnouncement:ee}},__vite__mapDeps([1,2,3,4,5])),{uploadAssignmentFile:Y}=await fe(async()=>{const{uploadAssignmentFile:L}=await import("./storage-CuUjCgvI.js");return{uploadAssignmentFile:L}},__vite__mapDeps([22,2]));if(i){const{classIds:L,fileUrl:ee,keptFiles:N,newFiles:V}=ae[0],re=[];for(const ue of V)re.push(await Y(ue,`class-${L[0]}/announcements`));const de=[...N,...re];await A(i.id,{title:b,body:p,isActive:z,priority:X?1:0,annType:_,targetClassIds:L,fileUrl:ee,attachmentUrls:de.length?de:null,deadlineAt:J})}else await Promise.all(ae.map(async({classIds:L,fileUrl:ee,newFiles:N})=>{const V=[];for(const re of N)V.push(await Y(re,`class-${L[0]}/announcements`));return u({title:b,body:p,isActive:z,priority:X?1:0,teacherId:e.id,annType:_,targetClassIds:L,fileUrl:ee,attachmentUrls:V.length?V:null,deadlineAt:J})}));S.remove();const Z=i?1:ae.length;F(`บันทึก ${Z} ประกาศสำเร็จ ✅`,"success"),m=!1,n()}catch(u){F("บันทึกไม่สำเร็จ: "+ce(u),"error"),$.disabled=!1,$.textContent=i?"บันทึก":"สร้างประกาศ"}})};window._editMyAnn=async i=>{const{getTeacherOwnAnnouncements:E}=await fe(async()=>{const{getTeacherOwnAnnouncements:g}=await import("./api-J-Ak1T-Y.js");return{getTeacherOwnAnnouncements:g}},__vite__mapDeps([1,2,3,4,5])),r=(await E(e.id).catch(()=>[])).find(g=>g.id===i);r&&R(r)},window._togglePinMyAnn=async(i,E)=>{const{updateAnnouncement:S}=await fe(async()=>{const{updateAnnouncement:r}=await import("./api-J-Ak1T-Y.js");return{updateAnnouncement:r}},__vite__mapDeps([1,2,3,4,5]));await S(i,{priority:E>0?0:1}).catch(()=>{}),m=!1,n()},window._deleteMyAnn=async i=>{if(!confirm("ลบประกาศนี้?"))return;const{deleteAnnouncement:E}=await fe(async()=>{const{deleteAnnouncement:S}=await import("./api-J-Ak1T-Y.js");return{deleteAnnouncement:S}},__vite__mapDeps([1,2,3,4,5]));await E(i).catch(()=>{}),F("ลบประกาศแล้ว","success"),m=!1,n()};const T=i=>i?new Date(i+"T00:00:00").toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"",te={yes:{label:"✅ สนใจเข้าร่วมแน่นอน",bg:"bg-emerald-600",ring:"ring-emerald-300"},maybe:{label:"🤔 ไม่แน่ใจ",bg:"bg-amber-500",ring:"ring-amber-300"},no:{label:"❌ ไม่สนใจ",bg:"bg-gray-400",ring:"ring-gray-300"}},W=(i,E,S=null,r=!1,g=0)=>{var J,ae,$;const b=i.requires_ack,p=!!E,_=i.ann_type==="training",X=E?new Date(E).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"",z=!i.is_active;return`
    <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow
      ${b&&!p&&!z?"border-rose-200":z?"border-dashed border-gray-200":"border-gray-100"}
      ${z?"opacity-60":""}" data-ann-id="${i.id}">
      <div class="h-1 bg-gradient-to-r ${i.priority>0?"from-amber-400 to-orange-400":z?"from-gray-200 to-gray-300":((J=w.find(u=>u.filter(i)))==null?void 0:J.color)??"from-gray-300 to-gray-400"}"></div>
      <div class="p-5">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
            ${b&&!p&&!z?"bg-rose-50":z?"bg-gray-50":"bg-indigo-50"}">
            ${i.priority>0?"📌":b?p?"✅":"🔔":z?"📄":"📢"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${U(i.creator_role)}">
                ${j(se[i.creator_role]??"แอดมิน")}
              </span>
              ${(ae=i.teachers)!=null&&ae.full_name?`<span class="text-[11px] text-gray-500 font-medium">${j(i.teachers.full_name)}</span>`:""}
              ${z?'<span class="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full text-[11px]">ยกเลิกแล้ว</span>':""}
              ${i.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${b?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${l(i.due_date)}
            </div>
            <h3 class="text-base font-bold text-gray-800 mb-1.5">${j(i.title)}</h3>
            ${i.body?`<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-2">${j(i.body)}</p>`:""}
            ${i.file_url?`<img src="${j(i.file_url)}" class="w-full rounded-xl border border-gray-100 mb-2 cursor-pointer" onclick="window.open('${j(i.file_url)}','_blank')" />`:""}
            ${_&&i.event_date?`
              <div class="mt-3 mb-2 bg-violet-50 border border-violet-100 rounded-xl p-3 space-y-1.5">
                <p class="text-xs font-semibold text-violet-700">🎓 ข้อมูลการอบรม</p>
                <p class="text-sm text-gray-700">📅 ${T(i.event_date)}</p>
                ${($=i.event_periods)!=null&&$.length?`<p class="text-sm text-gray-700">🕐 คาบที่ ${i.event_periods.sort((u,A)=>u-A).join(", ")}</p>`:""}
                ${i.event_location?`<p class="text-sm text-gray-700">📍 ${j(i.event_location)}</p>`:""}
              </div>`:""}
            <span class="text-[11px] text-gray-400">${H(i.created_at)}</span>
            ${_&&!z?`
              <div class="mt-3">
                <p class="text-xs font-semibold text-gray-500 mb-2">คุณจะเข้าร่วมไหม?</p>
                <div class="flex flex-wrap gap-2">
                  ${Object.entries(te).map(([u,A])=>`
                    <button class="ann-rsvp-btn px-3 py-2 rounded-xl text-sm font-semibold transition border-2
                      ${S===u?`${A.bg} text-white ring-2 ${A.ring} border-transparent`:"bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"}"
                      data-ann-id="${i.id}" data-rsvp="${u}">${A.label}</button>
                  `).join("")}
                </div>
              </div>`:""}
            ${b&&!z?`
              <div class="mt-3">
                ${p?`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold border border-emerald-200">
                      ✅ รับทราบแล้ว · ${X}
                    </span>`:`<button class="ann-ack-btn px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition shadow-sm"
                      data-id="${i.id}">🔔 กดรับทราบ</button>`}
              </div>`:""}
            <div class="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
              <button class="ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${r?"bg-rose-50 text-rose-600":"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500"}" data-id="${i.id}">
                <span class="ann-like-icon">${r?"❤️":"🤍"}</span><span class="ann-like-count">${i.like_count??0}</span>
              </button>
              <button class="ann-comment-toggle-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-500 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition" data-id="${i.id}">
                💬<span class="ann-comment-count">${g}</span>
              </button>
              <span class="text-[11px] text-gray-400 ml-auto">👁️ เข้าดูแล้ว ${i.view_count??0} คน</span>
            </div>
            <div class="ann-comment-section hidden mt-3 pt-3 border-t border-gray-50" data-id="${i.id}">
              <div class="ann-comment-list space-y-2 mb-2 text-sm text-gray-400">กำลังโหลด...</div>
              <div class="flex gap-2">
                <input type="text" class="ann-comment-input flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="แสดงความคิดเห็น..." data-id="${i.id}" maxlength="500" />
                <button class="ann-comment-send-btn px-3 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition flex-shrink-0" data-id="${i.id}">ส่ง</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`},ne=async()=>{const i=document.getElementById("ann-panel-announce");if(!i)return;let E,S,r;try{const{getMyRsvpsForTeacher:L}=await fe(async()=>{const{getMyRsvpsForTeacher:ee}=await import("./api-J-Ak1T-Y.js");return{getMyRsvpsForTeacher:ee}},__vite__mapDeps([1,2,3,4,5]));[E,S,r]=await Promise.all([s(),e!=null&&e.id?a(e.id).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?L(e.id).catch(()=>[]):Promise.resolve([])])}catch{i.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(e!=null&&e.id&&y){const L=parseInt(y.academicYear??2568),ee=parseInt(y.semester??1),N=E.filter(V=>{var re;return V.ann_type==="training"&&V.event_date&&((re=V.event_periods)==null?void 0:re.length)});if(N.length){const V=await Promise.all(N.map(de=>P(e.id,de.event_date,L,ee).catch(()=>[]))),re=Object.fromEntries(N.map((de,ue)=>[de.id,V[ue]]));E=E.filter(de=>{var xe;if(de.ann_type!=="training"||!((xe=de.event_periods)!=null&&xe.length))return!0;const ue=re[de.id]??[];return(de.schedule_filter??"all")==="any"?de.event_periods.some(ye=>!ue.includes(ye)):!de.event_periods.some(ye=>ue.includes(ye))})}}const g=Object.fromEntries(S.map(L=>[L.announcement_id,L.acked_at])),b=Object.fromEntries((r??[]).map(L=>[L.announcement_id,L.response])),p={};try{(await O(E.map(ee=>ee.id))).forEach(ee=>{var N;(p[N=ee.announcement_id]??(p[N]=[])).push(ee)})}catch{}const _=`pp5_ann_liked_${(e==null?void 0:e.id)??"anon"}`,X=`pp5_ann_viewed_${(e==null?void 0:e.id)??"anon"}`;let z,J;try{z=new Set(JSON.parse(localStorage.getItem(_)||"[]"))}catch{z=new Set}try{J=new Set(JSON.parse(localStorage.getItem(X)||"[]"))}catch{J=new Set}const ae=E.map(L=>L.id).filter(L=>!J.has(L));if(ae.length&&(e!=null&&e.id)){ae.forEach(L=>{J.add(L),M(L)});try{localStorage.setItem(X,JSON.stringify([...J]))}catch{}ae.forEach(L=>{const ee=E.find(N=>N.id===L);ee&&(ee.view_count=(ee.view_count??0)+1)})}const $=E.filter(L=>L.is_active),u=E.filter(L=>!L.is_active);if(!E.length){i.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`;return}const A=w.map(L=>({...L,items:$.filter(L.filter)})).filter(L=>L.items.length);let Y="";A.length?Y+=A.map(L=>`
        <div class="mb-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-bold text-gray-700">${L.label}</span>
            <span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] rounded-full font-semibold">${L.items.length}</span>
            <div class="flex-1 h-px bg-gray-100 ml-1"></div>
          </div>
          <div class="space-y-3">${L.items.map(ee=>W(ee,g[ee.id],b[ee.id]??null,z.has(ee.id),(p[ee.id]||[]).length)).join("")}</div>
        </div>`).join(""):Y+=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-400 mb-5">
        <div class="text-4xl mb-3">📭</div><p class="font-semibold text-gray-500">ยังไม่มีประกาศที่แสดงอยู่ในขณะนี้</p>
      </div>`,u.length&&(Y+=`<details class="mt-2">
        <summary class="cursor-pointer text-xs text-gray-400 font-semibold py-2 px-1 hover:text-gray-600 transition select-none list-none flex items-center gap-1">
          <span>▸</span> ประวัติประกาศที่ผ่านมา (${u.length} รายการ)
        </summary>
        <div class="space-y-3 mt-3">${u.map(L=>W(L,g[L.id],null,z.has(L.id),(p[L.id]||[]).length)).join("")}</div>
      </details>`),i.innerHTML=Y,i.querySelectorAll(".ann-ack-btn").forEach(L=>{L.addEventListener("click",async()=>{if(e!=null&&e.id){L.disabled=!0,L.textContent="กำลังบันทึก...";try{await x(Number(L.dataset.id),e.id),await ne()}catch{F("บันทึกไม่สำเร็จ","error"),L.disabled=!1,L.textContent="🔔 กดรับทราบ"}}})}),i.querySelectorAll(".ann-rsvp-btn").forEach(L=>{L.addEventListener("click",async()=>{if(!(e!=null&&e.id))return;const{upsertAnnouncementRsvp:ee}=await fe(async()=>{const{upsertAnnouncementRsvp:re}=await import("./api-J-Ak1T-Y.js");return{upsertAnnouncementRsvp:re}},__vite__mapDeps([1,2,3,4,5])),N=Number(L.dataset.annId),V=L.dataset.rsvp;L.classList.contains("bg-emerald-600")||L.classList.contains("bg-amber-500")||L.classList.contains("bg-gray-400");try{await ee(N,e.id,V);const{showToast:re}=await fe(async()=>{const{showToast:ue}=await import("./ui-BRupvAcB.js").then(xe=>xe.u);return{showToast:ue}},[]);re({yes:"บันทึก: สนใจเข้าร่วม ✅",maybe:"บันทึก: ไม่แน่ใจ 🤔",no:"บันทึก: ไม่สนใจ ❌"}[V]??"บันทึกแล้ว","success"),await ne()}catch{F("บันทึกไม่สำเร็จ","error")}})}),i.querySelectorAll(".ann-like-btn").forEach(L=>{L.addEventListener("click",()=>{if(!(e!=null&&e.id))return;const ee=Number(L.dataset.id),N=z.has(ee),V=N?-1:1;v(ee,V),N?z.delete(ee):z.add(ee);try{localStorage.setItem(_,JSON.stringify([...z]))}catch{}const re=L.querySelector(".ann-like-count"),de=L.querySelector(".ann-like-icon");re.textContent=Math.max(0,(parseInt(re.textContent,10)||0)+V),de.textContent=N?"🤍":"❤️",L.className=`ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${N?"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500":"bg-rose-50 text-rose-600"}`})});const Z=(L,ee)=>{const N=p[ee]??[];L.innerHTML=N.length?N.map(V=>{var re,de;return`
          <div class="flex items-start gap-2">
            <div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">${j((((re=V.teachers)==null?void 0:re.full_name)??"?").charAt(0))}</div>
            <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-1.5">
              <p class="text-[11px] font-semibold text-gray-700">${j(((de=V.teachers)==null?void 0:de.full_name)??"ครู")}</p>
              <p class="text-xs text-gray-600 whitespace-pre-wrap break-words">${j(V.comment_text)}</p>
            </div>
          </div>`}).join(""):'<p class="text-xs text-gray-400">ยังไม่มีความคิดเห็น เป็นคนแรกได้เลย!</p>'};i.querySelectorAll(".ann-comment-toggle-btn").forEach(L=>{L.addEventListener("click",()=>{const ee=Number(L.dataset.id),N=i.querySelector(`.ann-comment-section[data-id="${ee}"]`);if(!N)return;const V=N.classList.contains("hidden");N.classList.toggle("hidden"),V&&Z(N.querySelector(".ann-comment-list"),ee)})}),i.querySelectorAll(".ann-comment-send-btn").forEach(L=>{const ee=async()=>{if(!(e!=null&&e.id))return;const V=Number(L.dataset.id),re=i.querySelector(`.ann-comment-input[data-id="${V}"]`),de=re.value.trim();if(de){L.disabled=!0;try{const ue=await D(V,e.id,de);(p[V]??(p[V]=[])).push(ue),re.value="";const xe=i.querySelector(`.ann-comment-section[data-id="${V}"]`);Z(xe.querySelector(".ann-comment-list"),V);const ye=i.querySelector(`.ann-comment-toggle-btn[data-id="${V}"] .ann-comment-count`);ye&&(ye.textContent=p[V].length)}catch(ue){F("ส่งความคิดเห็นไม่สำเร็จ: "+ce(ue),"error")}L.disabled=!1}};L.addEventListener("click",ee);const N=i.querySelector(`.ann-comment-input[data-id="${L.dataset.id}"]`);N==null||N.addEventListener("keydown",V=>{V.key==="Enter"&&ee()})})},le=async()=>{const i=document.getElementById("ann-panel-comments");if(!i)return;if(!(e!=null&&e.id)){i.innerHTML='<p class="text-gray-400 text-sm p-4">ไม่พบข้อมูลครู</p>';return}let E;try{E=await B(e.id)}catch{i.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!E.length){i.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">💬</div>
        <p class="font-semibold text-gray-500">ยังไม่มีความคิดเห็น / บันทึก</p>
      </div>`;return}const S=[],r=new Map;for(const p of E){const _=p.round_id?`round__${p.round_id}__${p.supervisor_id}`:`noround__${p.supervisor_id}__${oe(p.created_at)}`;if(!r.has(_)){const X={key:_,supervisor:p.teachers,date:p.created_at,roundEvent:p.work_calendar_events??null,items:[]};r.set(_,X),S.push(X)}r.get(_).items.push(p)}const g=p=>p?p.startsWith("academic")?"bg-blue-100 text-blue-700":p.startsWith("registrar")?"bg-violet-100 text-violet-700":p==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",b=p=>p?p.startsWith("academic")?"from-blue-400 to-indigo-400":p.startsWith("registrar")?"from-violet-400 to-purple-400":p==="dept_head"?"from-emerald-400 to-teal-400":"from-gray-300 to-gray-400":"from-gray-300 to-gray-400";i.innerHTML='<div class="space-y-4">'+S.map(p=>{var $,u;const _=($=p.supervisor)==null?void 0:$.position,X=((u=p.supervisor)==null?void 0:u.full_name)??"หัวหน้า",z=se[_]??"ผู้บังคับบัญชา",J=p.roundEvent,ae=J?`<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
             ${J.event_type==="inspection"&&J.round_number?`ตรวจครั้งที่ ${J.round_number}`:J.label}
           </span>`:"";return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-1 bg-gradient-to-r ${b(_)}"></div>
        <div class="p-5">
          <div class="flex items-center gap-2 flex-wrap mb-3">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${g(_)}">${j(z)}</span>
            <span class="text-sm font-semibold text-gray-700">${j(X)}</span>
            ${ae}
            <span class="text-[11px] text-gray-400 ml-auto">${H(p.date)}</span>
          </div>
          ${J!=null&&J.label&&J.event_type!=="inspection"?`<p class="text-xs text-indigo-600 mb-2 -mt-1">📅 ${j(J.label)}</p>`:""}
          <div class="space-y-2">
            ${p.items.map(A=>`
              <div class="flex items-start gap-2.5">
                <span class="flex-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[11px] font-semibold mt-0.5">${j(ie[A.metric]??A.metric)}</span>
                <p class="text-sm text-gray-700 leading-relaxed">${j(A.comment)}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>`}).join("")+"</div>"};await Promise.all([ne(),le()])}function St(e){return new Promise(s=>{var B;(B=document.getElementById("qr-receipt-prompt-modal"))==null||B.remove();const a=document.createElement("div");a.id="qr-receipt-prompt-modal",a.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40",a.innerHTML=`
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
    `,document.body.appendChild(a);const x=I=>{a.remove(),s(I)};a.querySelector("#qr-receipt-prompt-yes").addEventListener("click",()=>x(!0)),a.querySelector("#qr-receipt-prompt-no").addEventListener("click",()=>x(!1))})}function ts(e,s,a,x=null){var I,P,M,v;const B=x!=null&&x.url?`<span style="display:inline-flex;flex-direction:column;align-items:center;gap:1px">
         <img src="${h(x.url)}" style="height:22px;object-fit:contain" />
         <span style="font-size:8px;color:#374151">${h(x.name||"ผู้ออกให้")}${x.title?" · "+h(x.title):""}</span>
       </span>`:"<span>ผู้ออกให้: .................. (ลงชื่อ)</span>";return`
    <div class="receipt-half">
      <div style="text-align: center; font-weight: bold; font-size: 11px; color: #4338ca; margin-bottom: 6px;">${a}</div>
      <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เลขที่ใบเสร็จ:</td><td style="text-align: right; font-weight: bold;">QR-${String(e.receipt_no).padStart(6,"0")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">วันที่:</td><td style="text-align: right;">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"long"})}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ชื่อ-สกุล:</td><td style="text-align: right;">${h(((I=e.students)==null?void 0:I.full_name)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">รหัสนักเรียน:</td><td style="text-align: right;">${h(((P=e.students)==null?void 0:P.student_code)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ห้อง:</td><td style="text-align: right;">${h(((M=e.students)==null?void 0:M.main_room)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เหตุผล:</td><td style="text-align: right; font-weight: bold;">${h(e.reason)}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ค่าธรรมเนียม:</td><td style="text-align: right; font-weight: bold;">${h(s)} บาท</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ออกให้โดย:</td><td style="text-align: right;">${h(((v=e.teachers)==null?void 0:v.full_name)||"แอดมิน")}</td></tr>
      </table>
      <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #d1d5db; font-size: 9px; color: #6b7280; display: flex; justify-content: space-between; align-items: flex-end; gap: 6px;">
        <span>ผู้รับ: .................. (ลงชื่อ)</span>
        ${B}
      </div>
    </div>
  `}async function qe(e,s,a,x,B,I=[],P="5",M=null){let v=document.getElementById("qr-print-media-styles");v||(v=document.createElement("style"),v.id="qr-print-media-styles",document.head.appendChild(v)),v.textContent=`
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
        grid-template-columns: repeat(${s}, minmax(0, 1fr)) !important;
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
  `;const O=document.createElement("div");O.id="print-qr-area",O.className="hidden",document.body.appendChild(O),O.innerHTML=e.map((D,K)=>`
    <div class="print-room-block" style="padding: 0; margin: 0;">
      ${D.hideHeader?"":`
        <div class="print-room-header">
          <span>📋 ห้องเรียน: ${h(D.className)}</span>
          <span style="font-size: 11px; font-weight: normal; color: #6b7280;">${h(D.countLabel||`${D.students.length} คน`)}</span>
        </div>
      `}
      <div class="print-grid">
        ${D.students.map((y,j)=>`
          <div class="qr-print-card">
            <div style="width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 5px;">
              <canvas id="print-canvas-${y.id}-${j}-r${K}" style="width: 100%; max-width: 100%; height: auto;"></canvas>
            </div>
            <div style="width: 100%; text-align: left; font-family: Sarabun, sans-serif; font-size: 11px;">
              <p style="font-weight: bold; color: black; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${h(y.full_name)}</p>
              ${a?`<p style="color: #4b5563; margin: 2px 0 0 0; font-size: 9px;">รหัส: ${h(y.student_code||"-")}</p>`:""}
              <div style="display: flex; justify-content: space-between; margin-top: 3px; font-size: 9px; color: #4b5563;">
                ${B?`<span>ห้อง: ${h(y._roomName||D.className)}</span>`:""}
                ${x?`<span>เลขที่: ${y.seat_no}</span>`:""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("")+(I.length===0?"":`
    <div class="print-room-block">
      <div class="receipt-grid">
        ${I.map(D=>`
          <div class="qr-receipt-slip">
            ${ts(D,P,"🏫 ต้นขั้ว (โรงเรียนเก็บ)",M)}
            <div class="receipt-cut-line-v"></div>
            ${ts(D,P,"🎓 มอบให้นักเรียน",M)}
          </div>
        `).join("")}
      </div>
    </div>
  `);for(let D=0;D<e.length;D++)for(let K=0;K<e[D].students.length;K++){const y=e[D].students[K],j=document.getElementById(`print-canvas-${y.id}-${K}-r${D}`);j&&await tt.toCanvas(j,y.student_code||"",{width:250,margin:1,color:{dark:"#000000",light:"#ffffff"}})}window.print(),O.remove()}async function ho(e,s=null,a={}){var B,I,P,M,v,O;const x=!e||!!a.isQrManager;je("student-qr-print"),Ie("พิมพ์ QR Code นักเรียน"),_e(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูลห้องเรียนทั้งหมด...
    </div>
  `);try{const D=await sn(),K=await $e().catch(()=>({})),y=((I=(B=K.qrReissueFee)==null?void 0:B.trim)==null?void 0:I.call(B))||"5",j=((M=(P=K.qrReissueDoneMessage)==null?void 0:P.trim)==null?void 0:M.call(P))||"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง";let H={name:((v=K.qrIssuerSignatureName)==null?void 0:v.trim())||"",title:((O=K.qrIssuerSignatureTitle)==null?void 0:O.trim())||"",url:K.qrIssuerSignatureUrl||""};const{data:G}=await ps.from("classes").select("id, class_name, master_subjects ( id, grade_level, subject_group )").order("class_name").limit(1e4),oe=new Map;for(const $ of G||[]){const u=$.class_name||"";u&&!oe.has(u)&&oe.set(u,$)}const se=$=>{const u=$==="ศาสนา";return[...new Set(D.map(Y=>u?Y.religion_room:Y.main_room).filter(Boolean))].sort((Y,Z)=>Y.localeCompare(Z,"th")).map(Y=>{const Z=oe.get(Y);return{id:(Z==null?void 0:Z.id)||null,class_name:Y,_meta:Z||null}})},U=$=>{const u=$.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return u?u[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},ie=$=>{var A;const u=((A=$._meta)==null?void 0:A.master_subjects)??$.master_subjects;return u?Array.isArray(u)?u.length>0?u[0]:null:u:null},w=$=>{const u=ie($);return(u==null?void 0:u.grade_level)||U($.class_name||"")||"อื่น ๆ"},l=$=>{const u=ie($),A=(u==null?void 0:u.subject_group)||"",Y=$.class_name||"";return["AGM"].includes(A)||/^(PR|อก\.|อป\.)/i.test(Y)?"ศาสนา":["ACDMVOC","AGMVOC"].includes(A)||/^ปวช\./i.test(Y)?"ปวช":"สามัญ"},o={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},c=$=>{const u=se($),A=[...new Set(u.map(Z=>w(Z)).filter(Boolean))],Y=o[$]||[];return[...new Set([...Y,...A])].sort((Z,L)=>Z.localeCompare(L,"th"))};let m="สามัญ",t="",d="",n=null,f=parseInt(localStorage.getItem("qr_print_cols")||"4"),C=localStorage.getItem("qr_print_show_code")!=="false",k=localStorage.getItem("qr_print_show_seat")!=="false",Q=localStorage.getItem("qr_print_show_room")!=="false",q="all",R=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(R)||R<1)&&(R=4);let T=[],te=[],W="ทำหาย";const ne=()=>{if(n==="individual"&&T.length>0)z();else if(n==="class"&&d)J();else if(n==="level"&&t)ae();else{const $=document.getElementById("qr-preview-section");$&&$.classList.add("hidden")}};if(s){const $=G==null?void 0:G.find(u=>u.id==s);$&&(m=l($),t=w($),d=$.id)}const le=()=>{var Ee,Be;const $=["สามัญ","ศาสนา","ปวช"].map(pe=>`
        <option value="${pe}" ${pe===m?"selected":""}>${pe}</option>
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
            ${x?`
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
                  <option value="ทำหาย" ${W==="ทำหาย"?"selected":""}>ทำหาย</option>
                  <option value="ชำรุด" ${W==="ชำรุด"?"selected":""}>ชำรุด</option>
                  <option value="อื่นๆ" ${W==="อื่นๆ"?"selected":""}>อื่นๆ</option>
                </select>
                <span class="text-xs text-gray-500 font-semibold ml-2">จำนวนซ้ำ:</span>
                <input id="qr-individual-repeat" type="number" min="1" max="40" value="${R}"
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
                  ${$}
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
                  <input type="checkbox" id="show-seat" ${k?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขที่
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-code" ${C?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขประจำตัว
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-room" ${Q?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงห้องเรียน
                </label>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 items-center shrink-0">
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">เลือกเพศ:</span>
                <select id="select-print-gender" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="all" ${q==="all"?"selected":""}>ทั้งหมด</option>
                  <option value="ชาย" ${q==="ชาย"?"selected":""}>ชาย 👦</option>
                  <option value="หญิง" ${q==="หญิง"?"selected":""}>หญิง 👧</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">จำนวนคอลัมน์:</span>
                <select id="select-print-cols" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="3" ${f===3?"selected":""}>3 คอลัมน์</option>
                  <option value="4" ${f===4?"selected":""}>4 คอลัมน์</option>
                  <option value="5" ${f===5?"selected":""}>5 คอลัมน์</option>
                  <option value="6" ${f===6?"selected":""}>6 คอลัมน์</option>
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
          ${x?'<div id="qr-tab-requests" class="hidden"></div>':""}
        </div>
      `);const u=document.getElementById("qr-filter-category"),A=document.getElementById("qr-filter-level"),Y=document.getElementById("qr-filter-class"),Z=document.getElementById("qr-level-info"),L=document.getElementById("btn-print-whole-level"),ee=document.getElementById("qr-individual-search"),N=document.getElementById("qr-individual-results"),V=document.getElementById("qr-individual-repeat"),re=document.getElementById("qr-individual-clear"),de=document.getElementById("qr-individual-code-bulk"),ue=document.getElementById("qr-individual-add-codes"),xe=document.getElementById("qr-reissue-reason");xe.addEventListener("change",()=>{W=xe.value}),(Ee=document.getElementById("btn-qr-issuer-sig"))==null||Ee.addEventListener("click",()=>{$o(H,pe=>{H=pe})});const ye="px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm",xt="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700 relative",Ae={print:{btn:document.getElementById("qr-page-tab-print"),panel:document.getElementById("qr-tab-print")},history:{btn:document.getElementById("qr-page-tab-history"),panel:document.getElementById("qr-tab-history")},requests:{btn:document.getElementById("qr-page-tab-requests"),panel:document.getElementById("qr-tab-requests")}},ke=pe=>{Object.entries(Ae).forEach(([me,be])=>{!be.btn||!be.panel||(be.btn.className=me===pe?ye:xt,be.panel.classList.toggle("hidden",me!==pe))}),pe==="history"&&wo(Ae.history.panel,{cols:f,showCode:C,showSeat:k,showRoom:Q,qrReissueFee:y,qrIssuer:H,isAdmin:!e}),pe==="requests"&&x&&ko(Ae.requests.panel,{teacher:e,cols:f,showCode:C,showSeat:k,showRoom:Q,qrReissueDoneMessage:j,qrReissueFee:y,qrIssuer:H})};Ae.print.btn.addEventListener("click",()=>ke("print")),Ae.history.btn.addEventListener("click",()=>ke("history")),(Be=Ae.requests.btn)==null||Be.addEventListener("click",()=>ke("requests")),x&&window._pendingQRTab==="requests"&&(window._pendingQRTab=null,ke("requests")),x&&is({limit:500}).then(pe=>{const me=pe.filter(we=>!we.printed_at).length,be=document.getElementById("qr-requests-badge");be&&me>0&&(be.textContent=String(me),be.classList.remove("hidden"))}).catch(()=>{}),ee.addEventListener("input",()=>_(ee.value.trim())),re.addEventListener("click",()=>{var pe;T=[],te=[],n=null,ee.value="",de.value="",N.classList.add("hidden"),b(),(pe=document.getElementById("qr-preview-section"))==null||pe.classList.add("hidden")}),ue.addEventListener("click",()=>{const pe=r(de.value);if(!pe.length){F("กรุณากรอกรหัสนักเรียนอย่างน้อย 1 รหัส","warning");return}const me=new Map(D.map(he=>[String(he.student_code||"").trim(),he])),be=[],we=[];for(const he of pe){const Se=me.get(he);Se?be.push(Se):we.push(he)}te=we,be.length>0?(g(be),de.value=we.join(`
`),F(`เพิ่มรายชื่อสำหรับพิมพ์ ${be.length} คน`,"success")):(b(),F("ไม่พบรหัสนักเรียนที่ระบุ","warning"))}),V.addEventListener("change",()=>{const pe=Math.max(1,Math.min(40,parseInt(V.value)||4));R=pe,V.value=String(pe),localStorage.setItem("qr_print_individual_repeat",String(R)),b(),ne()}),document.getElementById("show-seat").addEventListener("change",pe=>{k=pe.target.checked,localStorage.setItem("qr_print_show_seat",k),ne()}),document.getElementById("show-code").addEventListener("change",pe=>{C=pe.target.checked,localStorage.setItem("qr_print_show_code",C),ne()}),document.getElementById("show-room").addEventListener("change",pe=>{Q=pe.target.checked,localStorage.setItem("qr_print_show_room",Q),ne()}),document.getElementById("select-print-gender").addEventListener("change",pe=>{q=pe.target.value,ne()}),document.getElementById("select-print-cols").addEventListener("change",pe=>{f=parseInt(pe.target.value),localStorage.setItem("qr_print_cols",f),ne()});const ge=()=>{m=u.value;const pe=c(m);A.innerHTML=`
          <option value="">-- เลือกระดับชั้น --</option>
          ${pe.map(me=>`<option value="${me}" ${me===t?"selected":""}>${me}</option>`).join("")}
        `,ve()},ve=()=>{t=A.value;const me=se(m).filter(we=>t?w(we)===t:!0).sort((we,he)=>(we.class_name||"").localeCompare(he.class_name||"","th"));Y.innerHTML=`
          <option value="">-- เลือกห้องเรียน (${me.length} ห้อง) --</option>
          ${me.map(we=>`
            <option value="${h(we.class_name)}" ${we.class_name===d?"selected":""}>${h(we.class_name)}</option>
          `).join("")}
        `,t&&me.length>0?(Z.textContent=`ระดับ ${t} มีทั้งหมด ${me.length} ห้อง`,L.textContent=`📚 พิมพ์ทั้งระดับ ${t} (${me.length} ห้อง แยกหน้า)`,L.classList.remove("hidden")):(Z.textContent="เลือกระดับชั้นเพื่อดูตัวเลือกพิมพ์ทั้งชั้น",L.classList.add("hidden"));const be=Y.value;be?(d=be,n="class",J()):(n=null,document.getElementById("qr-preview-section").classList.add("hidden"))};u.addEventListener("change",()=>{t="",d="",n=null,ge()}),A.addEventListener("change",()=>{d="",n=null,ve()}),Y.addEventListener("change",()=>{d=Y.value,d?(n="class",J()):(n=null,document.getElementById("qr-preview-section").classList.add("hidden"))}),L.addEventListener("click",()=>{n="level",ae()}),ge()},i=$=>$?m==="ศาสนา"?$.religion_room||$.main_room||"ไม่ระบุห้อง":$.main_room||$.religion_room||"ไม่ระบุห้อง":"ไม่ระบุห้อง",E=$=>{const u=i($),A=m==="ศาสนา",Z=D.filter(L=>(A?L.religion_room:L.main_room)===u).sort((L,ee)=>(L.student_code||"").localeCompare(ee.student_code||"")).findIndex(L=>String(L.id)===String($.id));return Z>=0?Z+1:""},S=()=>{const $=new Map(D.map(u=>[String(u.id),u]));return T.map(u=>$.get(String(u))).filter(Boolean)},r=$=>{const u=new Set;return String($||"").split(/[\s,，;；|]+/).map(A=>A.trim()).filter(Boolean).filter(A=>u.has(A)?!1:(u.add(A),!0))},g=$=>{const u=[...T],A=new Set(u.map(String));for(const Y of $){const Z=String(Y.id);A.has(Z)||(A.add(Z),u.push(Z))}T=u,n=T.length>0?"individual":null,b(),T.length>0&&z()},b=()=>{var Y;const $=document.getElementById("qr-individual-selected");if(!$)return;const u=S();if(u.length===0&&te.length===0){$.classList.add("hidden"),$.innerHTML="";return}const A=u.length*R;$.classList.remove("hidden"),$.innerHTML=`
        ${u.length>0?`
          <div class="bg-indigo-50 px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-indigo-900">รายการที่เลือก ${u.length} คน</p>
              <p class="text-[11px] text-indigo-700 mt-0.5">พิมพ์รวม ${A} ใบ เมื่อใช้จำนวนซ้ำ ${R} ใบ/คน</p>
            </div>
            <button type="button" id="qr-individual-clear-selected"
              class="px-3 py-1.5 rounded-lg bg-white border border-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs font-bold">
              ล้างรายชื่อ
            </button>
          </div>
          <div class="divide-y divide-indigo-50 bg-white">
            ${u.map(Z=>{const L=Z.main_room||Z.religion_room||"ไม่ระบุห้อง";return`
                <div class="px-4 py-3 flex items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${h(Z.full_name||"ไม่ระบุชื่อ")}</p>
                    <p class="text-xs text-gray-400 font-mono truncate">${h(Z.student_code||"-")} · ${h(L)}</p>
                  </div>
                  <button type="button" data-remove-id="${Z.id}"
                    class="qr-individual-remove px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-bold">
                    ลบ
                  </button>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${te.length>0?`
          <div class="bg-amber-50 border-t border-amber-100 px-4 py-3">
            <p class="text-xs font-bold text-amber-800">ไม่พบรหัส ${te.length} รายการ</p>
            <p class="text-[11px] text-amber-700 font-mono mt-1 break-words">${h(te.join(", "))}</p>
          </div>
        `:""}
      `,(Y=$.querySelector("#qr-individual-clear-selected"))==null||Y.addEventListener("click",()=>{var Z;T=[],te=[],n=null,b(),(Z=document.getElementById("qr-preview-section"))==null||Z.classList.add("hidden")}),$.querySelectorAll(".qr-individual-remove").forEach(Z=>{Z.addEventListener("click",()=>{var L;T=T.filter(ee=>String(ee)!==String(Z.dataset.removeId)),n=T.length>0?"individual":null,b(),T.length>0?z():(L=document.getElementById("qr-preview-section"))==null||L.classList.add("hidden")})})},p=$=>[$.student_code,$.full_name,$.main_room,$.religion_room].filter(Boolean).join(" ").toLowerCase(),_=$=>{const u=document.getElementById("qr-individual-results");if(!u)return;const A=$.toLowerCase();if(!A){u.classList.add("hidden"),u.innerHTML="";return}const Y=D.filter(Z=>p(Z).includes(A)).sort((Z,L)=>(Z.student_code||"").localeCompare(L.student_code||"")).slice(0,20);if(u.classList.remove("hidden"),!Y.length){u.innerHTML='<div class="px-4 py-4 text-center text-xs text-gray-400 bg-gray-50">ไม่พบนักเรียนที่ตรงกับคำค้นหา</div>';return}u.innerHTML=Y.map(Z=>{const L=Z.main_room||Z.religion_room||"ไม่ระบุห้อง";return`
          <button type="button" data-student-id="${Z.id}"
            class="qr-individual-pick w-full px-4 py-3 text-left bg-white hover:bg-indigo-50 transition flex items-center justify-between gap-3">
            <span class="min-w-0">
              <span class="block text-sm font-bold text-gray-800 truncate">${h(Z.full_name||"ไม่ระบุชื่อ")}</span>
              <span class="block text-xs text-gray-400 font-mono truncate">${h(Z.student_code||"-")} · ${h(L)}</span>
            </span>
            <span class="text-xs font-bold text-indigo-600 flex-shrink-0">${T.includes(String(Z.id))?"เพิ่มแล้ว":"เพิ่ม"}</span>
          </button>
        `}).join(""),u.querySelectorAll(".qr-individual-pick").forEach(Z=>{Z.addEventListener("click",()=>{const L=Z.dataset.studentId||"",ee=D.find(V=>String(V.id)===String(L)),N=document.getElementById("qr-individual-search");ee&&(te=[],g([ee])),u.classList.add("hidden"),N&&(N.value="")})})},X=async $=>{const u=await tt.toDataURL($.student_code||"",{width:1e3,margin:2,color:{dark:"#000000",light:"#ffffff"}}),A=document.createElement("a"),Y=String($.student_code||$.id||"student").replace(/[^\w-]+/g,"_");A.href=u,A.download=`qr-${Y}.png`,document.body.appendChild(A),A.click(),A.remove()},z=async()=>{var L,ee;const $=document.getElementById("qr-preview-section"),u=S();if(!$||u.length===0)return;n="individual",$.classList.remove("hidden");const A=u.flatMap(N=>{const V=i(N),re=E(N);return Array.from({length:R},(de,ue)=>({...N,seat_no:re,_roomName:V,_print_copy:ue+1}))}),Y=u[0],Z=A.length;$.innerHTML=`
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
          <span class="text-base">💡</span>
          <div>
            <p class="font-bold">พิมพ์รายบุคคลสำหรับกรณี QR Code หาย</p>
            <p class="opacity-90">เลือกไว้ ${u.length} คน วางซ้ำ ${R} ใบ/คน รวม ${Z} ใบ และตอนพิมพ์จะไม่ใส่หัวกระดาษชื่อชั้นเรียน</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">รายบุคคล</p>
              <h4 class="font-extrabold text-gray-800 text-base mt-1">${u.length===1?h(Y.full_name||"ไม่ระบุชื่อ"):`พร้อมพิมพ์ ${u.length} คน`}</h4>
              <p class="text-xs text-gray-400 font-mono mt-0.5">${u.length===1?h(Y.student_code||"-"):`รวม ${Z} ใบ`}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button id="btn-print-individual-qr" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
                🖨️ พิมพ์ / บันทึก PDF (${Z} ใบ)
              </button>
              ${u.length===1?`
                <button id="btn-download-individual-qr" class="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-950 text-white font-bold text-xs shadow-md transition">
                  ⬇️ ดาวน์โหลด PNG
                </button>
              `:""}
            </div>
          </div>
          <div class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="grid-template-columns: repeat(${f}, minmax(0, 1fr));">
            ${A.map((N,V)=>`
              <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                  <canvas id="individual-copy-canvas-${V}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                </div>
                <div class="text-left w-full min-w-0 font-sans">
                  <p class="text-[11px] font-bold text-gray-800 truncate">${h(N.full_name)}</p>
                  ${C?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${h(N.student_code||"-")}</p>`:""}
                  <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                    ${Q?`<span>ห้อง: ${h(N._roomName)}</span>`:""}
                    ${k&&N.seat_no?`<span>เลขที่: ${N.seat_no}</span>`:""}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `,A.forEach((N,V)=>{const re=document.getElementById(`individual-copy-canvas-${V}`);re&&tt.toCanvas(re,N.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},de=>{de&&console.error("Individual QR error:",de)})}),(L=document.getElementById("btn-print-individual-qr"))==null||L.addEventListener("click",async()=>{const N=document.getElementById("btn-print-individual-qr");N.disabled=!0,N.textContent="กำลังบันทึก...";let V=[];try{V=await Promise.all(u.map(re=>nn({studentId:re.id,teacherId:e==null?void 0:e.id,reason:W})))}catch(re){console.error("Failed to log QR reissue:",re),F("บันทึกสถิติการออก QR ใหม่ไม่สำเร็จ: "+ce(re),"warning")}N.disabled=!1,N.textContent=`🖨️ พิมพ์ / บันทึก PDF (${Z} ใบ)`,await qe([{className:"รายบุคคล",countLabel:`${u.length} คน · ${Z} ใบ`,students:A,hideHeader:!0}],f,C,k,Q,[]),V.length>0&&(F(`บันทึกสถิติออก QR ใหม่ ${V.length} คนแล้ว (${W})`,"success"),await St(V.length)&&await qe([],f,C,k,Q,V,y,H))}),(ee=document.getElementById("btn-download-individual-qr"))==null||ee.addEventListener("click",async()=>{await X(Y)})},J=async()=>{n="class";const $=document.getElementById("qr-preview-section");if($){$.classList.remove("hidden");try{const u=m==="ศาสนา",A=d,Y=D.filter(L=>(u?L.religion_room:L.main_room)===d).sort((L,ee)=>(L.student_code||"").localeCompare(ee.student_code||"")).map((L,ee)=>({...L,seat_no:ee+1}));if(Y.length===0){$.innerHTML=`
            <div class="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <p class="text-4xl mb-2">👥</p>
              <p class="text-sm font-semibold text-gray-500">ไม่มีนักเรียนที่เปิดใช้งานในห้องเรียนนี้</p>
            </div>
          `;return}const Z=Y.filter(L=>q==="all"?!0:L.gender===q);$.innerHTML=`
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
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">พรีวิวการจัดวาง — ${h(A)} (${Z.length} คน)</p>
              <button id="btn-trigger-print" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5" ${Z.length===0?'disabled style="opacity: 0.5; cursor: not-allowed;"':""}>
                🖨️ สั่งพิมพ์ห้องนี้ (Print)
              </button>
            </div>
            <div id="qr-live-grid" class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="${Z.length===0?"":`grid-template-columns: repeat(${f}, minmax(0, 1fr));`}">
              ${Z.length===0?`
                <div class="col-span-full py-12 text-center text-xs text-gray-400 font-semibold bg-white border border-gray-100 rounded-2xl">ไม่มีนักเรียนเพศที่เลือกในห้องเรียนนี้</div>
              `:Z.map(L=>`
                <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                  <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                    <canvas id="live-canvas-${L.id}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                  </div>
                  <div class="text-left w-full min-w-0 font-sans">
                    <p class="text-[11px] font-bold text-gray-800 truncate">${h(L.full_name)}</p>
                    ${C?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${h(L.student_code||"-")}</p>`:""}
                    <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                      ${Q?`<span>ห้อง: ${h(A)}</span>`:""}
                      ${k?`<span>เลขที่: ${L.seat_no}</span>`:""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `,Z.forEach(L=>{const ee=document.getElementById(`live-canvas-${L.id}`);ee&&tt.toCanvas(ee,L.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},N=>{N&&console.error("Live QR error:",N)})}),Z.length>0&&document.getElementById("btn-trigger-print").addEventListener("click",async()=>{await qe([{className:A,students:Z}],f,C,k,Q)})}catch(u){console.error(u),$.innerHTML='<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาดในการโหลดรายชื่อนักเรียน</div>'}}},ae=async()=>{n="level";const $=document.getElementById("qr-filter-level"),u=document.getElementById("qr-preview-section");if(!t||!u)return;const Y=se(m).filter(Z=>w(Z)===t).sort((Z,L)=>(Z.class_name||"").localeCompare(L.class_name||"","th"));if(Y.length!==0){u.classList.remove("hidden"),u.innerHTML=`
        <div class="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div class="flex flex-col items-center gap-4">
            <svg class="animate-spin h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            <p class="text-sm font-bold text-gray-700">กำลังจัดเตรียมรายชื่อนักเรียนทุกห้องในระดับ ${h(t)}...</p>
            <p class="text-xs text-gray-400" id="qr-level-progress">กำลังจัดเตรียม 0 / ${Y.length} ห้อง</p>
          </div>
        </div>
      `;try{const Z=[],L=m==="ศาสนา";for(let N=0;N<Y.length;N++){const V=Y[N],re=document.getElementById("qr-level-progress");re&&(re.textContent=`กำลังจัดเตรียม ${N+1} / ${Y.length} ห้อง — ${V.class_name}`);const de=D.filter(ue=>(L?ue.religion_room:ue.main_room)===V.class_name).filter(ue=>q==="all"||ue.gender===q).sort((ue,xe)=>(ue.student_code||"").localeCompare(xe.student_code||"")).map((ue,xe)=>({...ue,seat_no:xe+1}));de.length>0&&Z.push({className:V.class_name,students:de})}if(Z.length===0){u.innerHTML='<div class="bg-white border border-gray-200 rounded-3xl p-8 text-center text-gray-400 text-sm">ไม่พบนักเรียนในระดับชั้นนี้</div>';return}const ee=Z.reduce((N,V)=>N+V.students.length,0);u.innerHTML=`
          <div class="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 class="font-bold text-gray-800 text-base">📚 พร้อมพิมพ์ทั้งระดับ ${h(t)}</h4>
                <p class="text-sm text-gray-500 mt-1">${Z.length} ห้อง · ${ee} คน · แต่ละห้องจะแยกหน้ากระดาษ</p>
              </div>
              <button id="btn-confirm-whole-level-print" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2">
                🖨️ พิมพ์ / บันทึก PDF ทั้ง ${h(t)}
              </button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${Z.map(N=>`
                <div class="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-center">
                  <p class="text-sm font-bold text-gray-800">${h(N.className)}</p>
                  <p class="text-xs text-gray-500 mt-0.5">${N.students.length} คน</p>
                </div>
              `).join("")}
            </div>
          </div>
        `,document.getElementById("btn-confirm-whole-level-print").addEventListener("click",async()=>{await qe(Z,f,C,k,Q)})}catch(Z){console.error(Z),u.innerHTML=`<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาด: ${Z.message}</div>`}}};le()}catch(D){console.error(D),F("โหลดข้อมูลล้มเหลว: "+ce(D),"error")}}async function wo(e,{cols:s,showCode:a,showSeat:x,showRoom:B,qrReissueFee:I,qrIssuer:P,isAdmin:M}){var ie;if(!e||e.dataset.loaded)return;e.dataset.loaded="1",e.innerHTML=`
    <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-3">
      <div>
        <h4 class="font-bold text-gray-800 text-sm">🧾 ประวัตินักเรียนที่มาติดต่อออก QR Code ใหม่</h4>
        <p class="text-xs text-gray-400 mt-0.5">${M?"ค้นหา ออก QR ซ้ำ ออกใบเสร็จซ้ำ แก้ไขเหตุผล หรือลบรายการได้":"ค้นหา หรือออก QR / ใบเสร็จซ้ำได้ (แก้ไข/ลบได้เฉพาะแอดมิน)"}</p>
      </div>
      <input id="qr-reissue-search" type="search"
        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
        placeholder="ค้นหาชื่อ รหัส หรือห้อง..." />
      <div id="qr-reissue-summary" class="grid grid-cols-2 gap-2"></div>
      <div id="qr-reissue-history" class="bg-gray-50/50 rounded-2xl px-3">
        <p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>
      </div>
    </div>
  `;let v=[],O="",D=null,K={reason:"ทำหาย",note:""};const y=()=>{const w=e.querySelector("#qr-reissue-history");if(!w)return;const l=O.trim().toLowerCase(),o=l?v.filter(m=>{const t=m.students||{};return String(t.full_name||"").toLowerCase().includes(l)||String(t.student_code||"").toLowerCase().includes(l)||String(t.main_room||"").toLowerCase().includes(l)}):v,c=e.querySelector("#qr-reissue-summary");if(c){const m=Number(I)||0;c.innerHTML=`
        <div class="bg-indigo-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-indigo-500 font-bold">จำนวนรายการ${l?" (ที่กรอง)":""}</p>
          <p class="text-base font-extrabold text-indigo-700">${o.length}</p>
        </div>
        <div class="bg-amber-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-amber-600 font-bold">ยอดค่าธรรมเนียมรวม (${m} บาท/ใบ)</p>
          <p class="text-base font-extrabold text-amber-700">${(o.length*m).toLocaleString("th-TH")} บาท</p>
        </div>`}w.innerHTML=o.length?`
      <div class="divide-y divide-gray-100">
        ${o.map(m=>{var t,d,n,f,C,k;return m.id===D?`
          <div class="py-3 space-y-2">
            <p class="font-bold text-gray-700 text-xs">${h(((t=m.students)==null?void 0:t.full_name)||"-")} <span class="font-normal text-gray-400">(${h(((d=m.students)==null?void 0:d.student_code)||"-")})</span></p>
            <div class="flex flex-wrap gap-2 items-center">
              <select id="reissue-edit-reason" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                <option value="ทำหาย" ${K.reason==="ทำหาย"?"selected":""}>ทำหาย</option>
                <option value="ชำรุด" ${K.reason==="ชำรุด"?"selected":""}>ชำรุด</option>
                <option value="อื่นๆ" ${K.reason==="อื่นๆ"?"selected":""}>อื่นๆ</option>
              </select>
              <input id="reissue-edit-note" type="text" placeholder="หมายเหตุ (ถ้ามี)" value="${h(K.note||"")}"
                class="flex-1 min-w-[140px] border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500" />
              <button type="button" data-action="save-edit" data-log-id="${m.id}" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">บันทึก</button>
              <button type="button" data-action="cancel-edit" class="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs">ยกเลิก</button>
            </div>
          </div>
        `:`
          <div class="flex items-center justify-between gap-3 py-2.5 text-xs flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 truncate">${h(((n=m.students)==null?void 0:n.full_name)||"-")} <span class="font-normal text-gray-400">(${h(((f=m.students)==null?void 0:f.student_code)||"-")})</span></p>
              <p class="text-gray-400 mt-0.5">เลขที่ QR-${String(m.receipt_no).padStart(6,"0")} · ${h(m.reason)}${m.note?` (${h(m.note)})`:""} · ห้อง ${h(((C=m.students)==null?void 0:C.main_room)||"-")} · ออกโดย ${h(((k=m.teachers)==null?void 0:k.full_name)||"แอดมิน")} · ${new Date(m.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</p>
            </div>
            <div class="flex gap-1.5 shrink-0">
              <button type="button" data-action="reprint-qr" data-log-id="${m.id}" title="ออก QR Code" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]">🖨️ QR</button>
              <button type="button" data-action="reprint-receipt" data-log-id="${m.id}" title="ออกใบเสร็จ" class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-[11px]">🧾 ใบเสร็จ</button>
              ${M?`
                <button type="button" data-action="edit" data-log-id="${m.id}" title="แก้ไข" class="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-[11px]">✏️ แก้ไข</button>
                <button type="button" data-action="delete" data-log-id="${m.id}" title="ลบ" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
              `:""}
            </div>
          </div>
        `}).join("")}
      </div>
    `:`
      <p class="text-xs text-gray-400 text-center py-6">${v.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีประวัติการออก QR ใหม่"}</p>
    `},j=async()=>{const w=e.querySelector("#qr-reissue-history");if(w){w.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>';try{v=await pn({limit:300}),y()}catch(l){console.error("Failed to load QR reissue history:",l),w.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดประวัติไม่สำเร็จ</p>'}}},H=async w=>{const l=w.students;if(!(l!=null&&l.id)){F("ไม่พบข้อมูลนักเรียนสำหรับรายการนี้","warning");return}await qe([{className:"รายบุคคล",countLabel:"1 ใบ",students:[{id:l.id,full_name:l.full_name,student_code:l.student_code,seat_no:null,_roomName:l.main_room}],hideHeader:!0}],s,a,x,B,[])},G=async w=>{await qe([],s,a,x,B,[w],I,P)},oe=async w=>{var l;if(M)try{const o=await cn(w,{reason:K.reason,note:((l=K.note)==null?void 0:l.trim())||null});v=v.map(c=>c.id===w?o:c),D=null,y(),F("บันทึกการแก้ไขแล้ว","success")}catch(o){console.error("Failed to update QR reissue log:",o),F("บันทึกไม่สำเร็จ: "+ce(o),"error")}},se=async w=>{var c;if(!M)return;const l=v.find(m=>m.id===w);if(await ct({title:"ลบประวัตินี้?",message:`ลบรายการออก QR ใหม่ของ ${((c=l==null?void 0:l.students)==null?void 0:c.full_name)||"นักเรียน"} (เลขที่ QR-${String((l==null?void 0:l.receipt_no)??0).padStart(6,"0")})`,detail:"ลบแล้วไม่สามารถกู้คืนได้ สถิติรายการนี้จะหายไปถาวร",confirmText:"ลบเลย"}))try{await dn(w),v=v.filter(m=>m.id!==w),y(),F("ลบประวัติแล้ว","success")}catch(m){console.error("Failed to delete QR reissue log:",m),F("ลบไม่สำเร็จ: "+ce(m),"error")}},U=e.querySelector("#qr-reissue-history");U.addEventListener("click",w=>{const l=w.target.closest("[data-action]");if(!l)return;const o=l.dataset.logId,c=v.find(m=>m.id===o);l.dataset.action==="reprint-qr"&&c?H(c):l.dataset.action==="reprint-receipt"&&c?G(c):l.dataset.action==="delete"&&o&&M?se(o):l.dataset.action==="edit"&&c&&M?(D=o,K={reason:c.reason,note:c.note||""},y()):l.dataset.action==="cancel-edit"?(D=null,y()):l.dataset.action==="save-edit"&&o&&M&&oe(o)}),U.addEventListener("change",w=>{w.target.id==="reissue-edit-reason"&&(K.reason=w.target.value)}),U.addEventListener("input",w=>{w.target.id==="reissue-edit-note"&&(K.note=w.target.value)}),(ie=e.querySelector("#qr-reissue-search"))==null||ie.addEventListener("input",w=>{O=w.target.value,y()}),j()}function _o(e){if(!e||e.dataset.bound)return;e.dataset.bound="1";const s=e.getContext("2d");s.lineWidth=2.5,s.lineCap="round",s.lineJoin="round",s.strokeStyle="#111827";let a=!1,x=null;const B=v=>{const O=e.getBoundingClientRect(),D=v.touches?v.touches[0]:v;return{x:(D.clientX-O.left)*(e.width/O.width),y:(D.clientY-O.top)*(e.height/O.height)}},I=v=>{v.preventDefault(),a=!0,x=B(v)},P=v=>{if(!a)return;v.preventDefault();const O=B(v);s.beginPath(),s.moveTo(x.x,x.y),s.lineTo(O.x,O.y),s.stroke(),x=O},M=()=>{a=!1};e.addEventListener("mousedown",I),e.addEventListener("mousemove",P),window.addEventListener("mouseup",M),e.addEventListener("touchstart",I,{passive:!1}),e.addEventListener("touchmove",P,{passive:!1}),e.addEventListener("touchend",M)}function $o(e,s){var B;(B=document.getElementById("qr-issuer-sig-modal"))==null||B.remove();const a=document.createElement("div");a.id="qr-issuer-sig-modal",a.className="fixed inset-0 z-[230] flex items-center justify-center p-4 bg-black/50",a.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <p class="font-bold text-gray-800 text-sm">✍️ ลายเซ็นผู้ออกให้บัตร QR Code</p>
        <button type="button" id="qr-sig-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <p class="text-[11px] text-gray-400">ชื่อ/ตำแหน่ง/ลายเซ็นนี้จะพิมพ์ลงใบเสร็จออก QR ใหม่ทุกใบอัตโนมัติ แทนต้องเซ็นสดด้วยปากกา</p>
      <div class="flex gap-2">
        <input id="qr-sig-name" type="text" value="${h((e==null?void 0:e.name)||"")}" placeholder="ชื่อ-สกุล เช่น นายฮัมบาลีย์ วาจิ" class="flex-1 min-w-0 border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      </div>
      <input id="qr-sig-title" type="text" value="${h((e==null?void 0:e.title)||"")}" placeholder="ตำแหน่ง เช่น ครูฝ่ายปกครอง (ไม่บังคับ)" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      <button type="button" id="qr-sig-save-info" class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">บันทึกชื่อ-ตำแหน่ง</button>

      <div class="pt-2 border-t border-gray-100">
        <p class="text-[11px] font-bold text-gray-500 mb-1.5">ลายเซ็นปัจจุบัน</p>
        <div id="qr-sig-preview">
          ${e!=null&&e.url?`<img src="${h(e.url)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'}
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",I=>{I.target===a&&a.remove()}),a.querySelector("#qr-sig-close").addEventListener("click",()=>a.remove()),_o(a.querySelector("#qr-sig-canvas"));const x=I=>{a.querySelector("#qr-sig-preview").innerHTML=I?`<img src="${h(I)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'};a.querySelector("#qr-sig-save-info").addEventListener("click",async()=>{const I=a.querySelector("#qr-sig-name").value.trim(),P=a.querySelector("#qr-sig-title").value.trim();try{await Promise.all([Ke("qrIssuerSignatureName",I),Ke("qrIssuerSignatureTitle",P)]),e={...e,name:I,title:P},s(e),F("บันทึกชื่อ-ตำแหน่งแล้ว ✅","success")}catch(M){F("บันทึกไม่สำเร็จ: "+ce(M),"error")}}),a.querySelector("#qr-sig-clear").addEventListener("click",()=>{const I=a.querySelector("#qr-sig-canvas");I.getContext("2d").clearRect(0,0,I.width,I.height)}),a.querySelector("#qr-sig-save-drawn").addEventListener("click",async()=>{const I=a.querySelector("#qr-sig-canvas"),P=await new Promise(v=>I.toBlob(v,"image/png"));if(!P){F("ยังไม่มีลายเซ็นให้บันทึก","warning");return}const M=a.querySelector("#qr-sig-save-drawn");M.disabled=!0,M.textContent="กำลังบันทึก...";try{const v=await Pt(P);await Ke("qrIssuerSignatureUrl",v),e={...e,url:v},s(e),x(v),F("บันทึกลายเซ็นแล้ว ✅","success")}catch(v){F("บันทึกไม่สำเร็จ: "+ce(v),"error")}finally{M.disabled=!1,M.textContent="บันทึกลายเซ็นที่วาด"}}),a.querySelector("#qr-sig-upload").addEventListener("click",async()=>{var M;const I=(M=a.querySelector("#qr-sig-file").files)==null?void 0:M[0];if(!I){F("กรุณาเลือกไฟล์รูปลายเซ็น","warning");return}const P=a.querySelector("#qr-sig-upload");P.disabled=!0,P.textContent="กำลังอัปโหลด...";try{const v=await Pt(I);await Ke("qrIssuerSignatureUrl",v),e={...e,url:v},s(e),x(v),F("อัปโหลดลายเซ็นแล้ว ✅","success")}catch(v){F("อัปโหลดไม่สำเร็จ: "+ce(v),"error")}finally{P.disabled=!1,P.textContent="อัปโหลด"}})}async function ko(e,{teacher:s,cols:a,showCode:x,showSeat:B,showRoom:I,qrReissueDoneMessage:P,qrReissueFee:M="5",qrIssuer:v=null}){var d,n,f,C,k,Q;if(!e||e.dataset.loaded)return;e.dataset.loaded="1";const O=!s;e.innerHTML=`
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
  `;let D=[],K="";const y=new Set,j=()=>{const q=e.querySelector("#qr-requests-bulk-bar"),R=e.querySelector("#qr-requests-bulk-count");if(!q||!R)return;y.size>0?(q.classList.remove("hidden"),R.textContent=`เลือกไว้ ${y.size} คน`):q.classList.add("hidden");const T=D.filter(W=>!W.printed_at).map(W=>W.id),te=e.querySelector("#qr-requests-select-all");te&&(te.checked=T.length>0&&T.every(W=>y.has(W)))},H=()=>{const q=e.querySelector("#qr-requests-list");if(!q)return;const R=K.trim().toLowerCase(),T=R?D.filter(le=>{const i=le.students||{};return String(i.full_name||"").toLowerCase().includes(R)||String(i.student_code||"").toLowerCase().includes(R)||String(i.main_room||"").toLowerCase().includes(R)}):D,te=T.filter(le=>!le.printed_at),W=T.filter(le=>le.printed_at);for(const le of[...y])te.some(i=>i.id===le)||y.delete(le);const ne=(le,i)=>{var E,S,r;return`
      <div class="py-3 flex items-start gap-2 ${i?"bg-amber-50/60 -mx-3 px-3 rounded-xl":""}">
        ${i?`<input type="checkbox" data-select-id="${le.id}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 flex-shrink-0" ${y.has(le.id)?"checked":""}>`:'<span class="w-3.5 flex-shrink-0"></span>'}
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 text-xs truncate">${h(((E=le.students)==null?void 0:E.full_name)||"-")} <span class="font-normal text-gray-400">(${h(((S=le.students)==null?void 0:S.student_code)||"-")})</span></p>
              <p class="text-gray-400 text-[11px] mt-0.5">ห้อง ${h(((r=le.students)==null?void 0:r.main_room)||"-")} · แจ้งเมื่อ ${new Date(le.requested_at).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}</p>
            </div>
            ${i?"":'<span class="text-[11px] font-bold text-emerald-600 flex-shrink-0">✅ ทำเสร็จแล้ว</span>'}
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${i?`<button type="button" data-action="fulfill" data-id="${le.id}" class="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px]">🖨️ ทำเสร็จแล้ว (พิมพ์บัตร)</button>`:""}
            <button type="button" data-action="toggle-pickup" data-id="${le.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${le.picked_up_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">🤝 ${le.picked_up_at?"มารับแล้ว":"มารับหรือยัง"}</button>
            <button type="button" data-action="toggle-fine" data-id="${le.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${le.fine_paid_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">💰 ${le.fine_paid_at?"ชำระค่าปรับแล้ว":"ชำระค่าปรับหรือยัง"}</button>
            <button type="button" data-action="delete" data-id="${le.id}" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
          </div>
        </div>
      </div>`};q.innerHTML=T.length?`<div class="divide-y divide-gray-100">${[...te,...W].map(le=>ne(le,!le.printed_at)).join("")}</div>`:`
      <p class="text-xs text-gray-400 text-center py-6">${D.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีคำขอจากนักเรียน"}</p>
    `,j()},G=async()=>{const q=e.querySelector("#qr-requests-list");q&&(q.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>');try{D=await is({limit:500}),H()}catch(R){console.error("Failed to load QR reissue requests:",R),q&&(q.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดรายการไม่สำเร็จ</p>')}},oe=q=>{var W,ne;const R=D.find(le=>le.id===q);if(!((W=R==null?void 0:R.students)!=null&&W.id)){F("ไม่พบข้อมูลนักเรียนสำหรับคำขอนี้","warning");return}(ne=document.getElementById("qr-fulfill-modal"))==null||ne.remove();let T=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(T)||T<1)&&(T=4);const te=document.createElement("div");te.id="qr-fulfill-modal",te.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",te.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${h(R.students.full_name||"-")}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส ${h(R.students.student_code||"-")} · ห้อง ${h(R.students.main_room||"-")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${T}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึก</button>
        </div>
      </div>`,document.body.appendChild(te),te.addEventListener("click",le=>{le.target===te&&te.remove()}),te.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>te.remove()),te.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const le=te.querySelector("#qr-fulfill-reason").value,i=Math.max(1,Math.min(40,parseInt(te.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(i));const E=te.querySelector("#qr-fulfill-ok");E.disabled=!0,E.textContent="กำลังดำเนินการ...";try{const S=await Bt({requestId:q,studentId:R.students.id,teacherId:(s==null?void 0:s.id)??null,reason:le,feedbackId:R.feedback_id,message:P}),r=Array.from({length:i},(g,b)=>({id:R.students.id,full_name:R.students.full_name,student_code:R.students.student_code,seat_no:null,_roomName:R.students.main_room,_print_copy:b+1}));await qe([{className:"รายบุคคล",countLabel:`${i} ใบ`,students:r,hideHeader:!0}],a,x,B,I,[]),te.remove(),F("ทำเสร็จแล้ว บันทึกเข้าประวัติ + แจ้งนักเรียนแล้ว ✅","success"),await G(),S&&await St(1)&&await qe([],a,x,B,I,[S],M,v)}catch(S){E.disabled=!1,E.textContent="🖨️ พิมพ์ + บันทึก",F("บันทึกไม่สำเร็จ: "+ce(S),"error")}})},se=()=>{var te;const q=D.filter(W=>{var ne;return y.has(W.id)&&((ne=W.students)==null?void 0:ne.id)});if(!q.length)return;(te=document.getElementById("qr-fulfill-modal"))==null||te.remove();let R=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(R)||R<1)&&(R=4);const T=document.createElement("div");T.id="qr-fulfill-modal",T.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",T.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${q.length} คนพร้อมกัน</p>
          <p class="text-xs text-gray-400 mt-0.5">${q.map(W=>h(W.students.full_name||"-")).join(", ")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${R}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึกทั้งหมด</button>
        </div>
      </div>`,document.body.appendChild(T),T.addEventListener("click",W=>{W.target===T&&T.remove()}),T.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>T.remove()),T.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const W=T.querySelector("#qr-fulfill-reason").value,ne=Math.max(1,Math.min(40,parseInt(T.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(ne));const le=T.querySelector("#qr-fulfill-ok");le.disabled=!0,le.textContent="กำลังดำเนินการ...";try{const i=await Promise.all(q.map(S=>Bt({requestId:S.id,studentId:S.students.id,teacherId:(s==null?void 0:s.id)??null,reason:W,feedbackId:S.feedback_id,message:P}))),E=q.flatMap(S=>Array.from({length:ne},(r,g)=>({id:S.students.id,full_name:S.students.full_name,student_code:S.students.student_code,seat_no:null,_roomName:S.students.main_room,_print_copy:g+1})));await qe([{className:"คำขอทำบัตรใหม่ (หลายคน)",countLabel:`${q.length} คน · ${E.length} ใบ`,students:E,hideHeader:!0}],a,x,B,I,[]),T.remove(),y.clear(),F(`ทำเสร็จแล้ว ${q.length} คน บันทึกเข้าประวัติ + แจ้งนักเรียนทุกคนแล้ว ✅`,"success"),await G(),i.length&&await St(i.length)&&await qe([],a,x,B,I,i,M,v)}catch(i){le.disabled=!1,le.textContent="🖨️ พิมพ์ + บันทึกทั้งหมด",F("บันทึกไม่สำเร็จ: "+ce(i),"error")}})},U=async(q,R)=>{const T=D.find(W=>W.id===q),te=T!=null&&T[R]?null:new Date().toISOString();try{await un(q,R,te),T[R]=te,H()}catch(W){F("บันทึกไม่สำเร็จ: "+ce(W),"error")}},ie=async q=>{if(confirm("ลบคำขอนี้?"))try{await mn(q),D=D.filter(R=>R.id!==q),H(),F("ลบแล้ว","success")}catch(R){F("ลบไม่สำเร็จ: "+ce(R),"error")}};if((d=e.querySelector("#qr-requests-search"))==null||d.addEventListener("input",q=>{K=q.target.value,H()}),(n=e.querySelector("#qr-requests-list"))==null||n.addEventListener("click",q=>{const R=q.target.closest("[data-action]");if(!R)return;const T=parseInt(R.dataset.id);R.dataset.action==="fulfill"?oe(T):R.dataset.action==="toggle-pickup"?U(T,"picked_up_at"):R.dataset.action==="toggle-fine"?U(T,"fine_paid_at"):R.dataset.action==="delete"&&ie(T)}),(f=e.querySelector("#qr-requests-list"))==null||f.addEventListener("change",q=>{const R=q.target.closest("[data-select-id]");if(!R)return;const T=parseInt(R.dataset.selectId);R.checked?y.add(T):y.delete(T),j()}),(C=e.querySelector("#qr-requests-select-all"))==null||C.addEventListener("change",q=>{const R=D.filter(T=>!T.printed_at).map(T=>T.id);q.target.checked?R.forEach(T=>y.add(T)):R.forEach(T=>y.delete(T)),H()}),(k=e.querySelector("#qr-requests-bulk-fulfill"))==null||k.addEventListener("click",()=>se()),G(),!O)return;let w=[];const l=()=>{const q=e.querySelector("#qr-manager-list");q&&(q.innerHTML=w.length?w.map(R=>{var T,te;return`
      <div class="flex items-center justify-between gap-2 py-2 text-xs">
        <span class="font-semibold text-gray-700">${h(((T=R.teachers)==null?void 0:T.full_name)||"-")} <span class="font-normal text-gray-400">(${h(((te=R.teachers)==null?void 0:te.teacher_code)||"-")})</span></span>
        <button type="button" data-revoke="${R.profile_id}" class="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">ยกเลิกสิทธิ์</button>
      </div>`}).join(""):`
      <p class="text-xs text-gray-400 text-center py-4">ยังไม่มีครูที่ได้รับสิทธิ์</p>
    `)},o=async()=>{try{w=await xn(),l()}catch{const q=e.querySelector("#qr-manager-list");q&&(q.innerHTML='<p class="text-xs text-red-400 text-center py-4">โหลดไม่สำเร็จ</p>')}};(Q=e.querySelector("#qr-manager-list"))==null||Q.addEventListener("click",async q=>{const R=q.target.closest("[data-revoke]");if(R)try{await on(R.dataset.revoke),await o(),F("ยกเลิกสิทธิ์แล้ว","success")}catch(T){F("ยกเลิกไม่สำเร็จ: "+ce(T),"error")}});const c=e.querySelector("#qr-manager-search"),m=e.querySelector("#qr-manager-search-results");let t=null;c==null||c.addEventListener("input",()=>{clearTimeout(t);const q=c.value.trim();if(!q){m.classList.add("hidden"),m.innerHTML="";return}t=setTimeout(async()=>{try{const R=await an(q);m.classList.toggle("hidden",!R.length),m.innerHTML=R.map(T=>`
          <button type="button" data-grant="${T.profile_id}" data-name="${h(T.full_name)}" class="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs hover:bg-gray-50 text-left">
            <span class="font-semibold text-gray-700">${h(T.full_name)} <span class="font-normal text-gray-400">(${h(T.teacher_code||"-")})</span></span>
            <span class="text-indigo-600 font-bold">+ มอบสิทธิ์</span>
          </button>`).join("")}catch{}},300)}),m==null||m.addEventListener("click",async q=>{const R=q.target.closest("[data-grant]");if(R)try{await rn(R.dataset.grant),c.value="",m.classList.add("hidden"),m.innerHTML="",await o(),F(`มอบสิทธิ์ให้ ${R.dataset.name} แล้ว ✅`,"success")}catch(T){F("มอบสิทธิ์ไม่สำเร็จ: "+ce(T),"error")}}),o()}const Ho=Object.freeze(Object.defineProperty({__proto__:null,_openRandomPickerModal:Ss,openClassPromptGenModal:mo,renderAnnouncementsView:vo,renderAttendance:Ln,renderAttendanceGrid:qt,renderClassDetail:Mt,renderCourseDocLangConfig:yo,renderGrades:Sn,renderGradesGrid:Ct,renderLifeSkillScore:Cn,renderMyClasses:Le,renderPrayerScore:qn,renderReadingScore:jn,renderRequests:En,renderSchedule:xo,renderScheduleBuilder:bo,renderScheduleGrid:Pe,renderStudentQRPrint:ho},Symbol.toStringTag,{value:"Module"}));export{Ss as _,yo as a,zn as b,Vn as c,Gn as d,Mt as e,vo as f,Le as g,xo as h,bo as i,mo as j,so as o,Pe as r,Ho as t};
