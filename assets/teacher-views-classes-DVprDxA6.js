const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-dashboard-CjblTm--.js","assets/api-C-roKrdU.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/sync-GIjLHUjs.js","assets/ui-CdgrLWzs.js","assets/teacher-views-smart-classroom-u_zD57Di.js","assets/teacher-SS6XmaaI.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/theme-qDnPEUQn.js","assets/version.js_v_10.22-A-Q3FjCD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CDJXdrOK.js","assets/teacher-views-utils-D0Lb_BpE.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/academic-term-switcher-JTnW63gE.js","assets/sports-portals.js_v_10.22-Bl6mvaSs.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/tutorial-D9xKLgCL.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-CbX4L_dw.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-VIO-qDxr.js","assets/teacher-views-attendance-Bf7yzdiF.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-CEAI6LzF.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-quiz-monitor-DzDF5yPE.js","assets/teacher-views-quiz-analytics-B6HbR0sJ.js","assets/lesson-plan-ai-workspace-BkpCRg6Q.js","assets/council-api-DYf7ov7O.js","assets/pp5-doc-DT_3IQge.js","assets/ai-prompt-gate-D6R7FVed.js","assets/confetti-loader-BAN5Lv-C.js","assets/chat-classroom-C3nyYAQB.js","assets/student-api-Pom1H7Xo.js","assets/teacher-views-flashcards-CfWVQWu1.js","assets/teacher-views-attendance-delegate-eIHOAMMA.js"])))=>i.map(i=>d[i]);
import{a as P,g as ce,_ as ye,h as pt}from"./ui-CdgrLWzs.js";import{getSystemConfig as $e,getLifeSkillColumns as _t,getScoreColumns as He,createScoreColumn as nt,updateColumnSortOrders as js,updateScoreColumn as Is,getMyClasses as ut,setColumnAutoAttendanceSync as Ms,deleteScoreColumn as Rt,getDepartments as Ts,getReligionRoomsByGrade as As,getRoomsByGrade as Bs,getStudentsByReligionRoom as Ns,getStudentsByRoom as Rs,getMySchedule as Ve,createClass as Ps,linkClassToSchedule as ot,enrollStudents as Os,getClassStudents as De,getTeacherClassesForLinking as $t,updateClass as at,getClassrooms as rs,getClassScheduleLinks as qt,getPeriods as mt,getMyDonationRequests as Hs,getFlashcardDecks as Ds,deleteClass as ls,getCourseDocLangSettings as Fs,getTeacherRoomColors as jt,assignClassroom as is,getClassSessionDOWs as zs,getMySubjects as ds,deleteScheduleByTeacher as Gs,getClassRosterStudents as Vs,updateClassStudentSpecialResult as Us,autoEnrollStudentsByRoom as Qs,updateClassStudentActive as Js,removeStudentFromClass as Ws,getStudentByCode as Ys,addStudentToClass as Ks,getAttendanceDelegatesForClass as Xs,getClassroomLeaderForRoom as Zs,getClassRandomizerState as en,getClassScoreSummary as tn,saveCourseDocLangSettings as sn,saveCourseDocLangEditors as nn,getUniqueRooms as cs,getUniqueReligionRooms as ps,upsertScheduleEntries as on,saveTeacherRoomColor as us,getStudents as an,getQrReissueRequests as ms,logQrReissue as rn,updateSystemConfig as Ye,revokeQrReissueManager as ln,findTeacherForQrManagerGrant as dn,grantQrReissueManager as cn,unlinkClassFromSchedule as pn,deleteQrReissueLog as un,updateQrReissueLog as mn,getQrReissueLogs as xn,markQrReissueRequestPrinted as Pt,setQrReissueRequestStatus as gn,deleteQrReissueRequest as bn,getQrReissueManagers as fn,removeAttendanceDelegate as yn,addAttendanceDelegate as vn,saveClassRandomizerState as Ot,resetClassRandomizerPicks as Ht,clearClassGroups as hn,getAttendanceByDate as wn,saveClassGroups as _n,upsertScheduleEntry as $n,deleteScheduleEntry as kn}from"./api-C-roKrdU.js";import{b as tt}from"./browser-JP79f-a9.js";import{getCopyTemplateForClass as kt,copySheetTemplate as Sn}from"./sync-GIjLHUjs.js";import{s as rt}from"./supabase-BV-W2lsh.js";import{g as En,M as Ln,O as Cn,P as qn,N as jn}from"./regrade-api-CbX4L_dw.js";import{openPP5Doc as xs}from"./pp5-doc-DT_3IQge.js";import{o as In}from"./print-overlay-BVfxEd6n.js";import{uploadQrIssuerSignature as Dt}from"./storage-CuUjCgvI.js";import{i as gs,n as lt}from"./skill-groups-BY1NTbf4.js";import{b as Mn,e as Tn}from"./score-display-CQ4dUIPx.js";import{c as An}from"./ai-prompt-gate-D6R7FVed.js";import{a as It,r as Bn,b as Nn}from"./teacher-views-grades-CEAI6LzF.js";import{renderAttendanceGrid as Mt,renderAttendance as Rn,renderLifeSkillScore as Pn,renderPrayerScore as On,renderReadingScore as Hn}from"./teacher-views-attendance-Bf7yzdiF.js";import{l as Dn,f as Fn}from"./confetti-loader-BAN5Lv-C.js";import{setActiveNav as je,setTitle as Ie,setContent as _e,_htmlEsc as h,getMainContentRef as zn,setMainContentRef as Ft,_currentWeek as Gn,_nextPeriodMins as Ue,_transparentEdgeDarkLogo as Vn,INPUT_CLS as Ce,_generateSessions as Un,_resolveGeminiKey as bs,SELECT_CLS as St,_dateInputValue as zt,_parseDateOnly as Qn}from"./teacher-views-utils-D0Lb_BpE.js";const ft="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",Ke="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function Jn(e){document.getElementById("main-content").innerHTML=e}function Wn(e){document.getElementById("page-title").textContent=e}function Yn(e){document.querySelectorAll("[data-nav]").forEach(t=>{const a=t.dataset.nav===e;t.classList.toggle("bg-emerald-800",a),t.classList.toggle("text-white",a),t.classList.toggle("text-emerald-200",!a)})}const yt=["ระหว่างเรียน","กลางภาค","ปลายภาค","คะแนนพิเศษ"],Kn={ระหว่างเรียน:"bg-blue-50 text-blue-700",กลางภาค:"bg-amber-50 text-amber-700",ปลายภาค:"bg-red-50 text-red-700",คะแนนพิเศษ:"bg-purple-50 text-purple-700"},Xn=["คะแนนมาเรียน","คะแนนละหมาด"];function vt(e,t){var d;(d=document.getElementById("sc-confirm-popup"))==null||d.remove();const a=document.createElement("div");a.id="sc-confirm-popup",a.className="fixed inset-0 z-[200] flex items-center justify-center p-6",a.style.background="rgba(0,0,0,0.45)",a.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">${e}</p>
      <div class="flex gap-3">
        <button id="sc-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
        <button id="sc-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold">ลบเลย</button>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#sc-conf-no").addEventListener("click",()=>a.remove()),a.querySelector("#sc-conf-yes").addEventListener("click",()=>{a.remove(),t()})}async function Zn(e,t,a){var d;if(!(!(e!=null&&e.id)||!(a!=null&&a.course_id)))try{const q=(await ut(e.id).catch(()=>[])).filter(p=>p.id!==t&&p.course_id===a.course_id);if(!q.length)return;const H=(await Promise.all(q.map(async p=>{const B=await He(p.id).catch(()=>[]);return B.length?{...p,cols:B}:null}))).filter(Boolean);if(!H.length)return;(d=document.getElementById("sc-same-subj-popup"))==null||d.remove();const v=document.createElement("div");v.id="sc-same-subj-popup",v.className="fixed inset-0 z-[190] flex items-center justify-center p-6",v.style.background="rgba(0,0,0,0.45)",v.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
          <p class="text-indigo-100 text-xs mt-1">ต้องการคัดลอกคอลัมน์คะแนนจากห้องที่มีอยู่แล้วไหม?</p>
        </div>
        <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
          ${H.map(p=>`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${p.class_name}</p>
              <p class="text-xs text-gray-400">${p.cols.length} คอลัมน์</p>
            </div>
            <button class="copy-cols-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold" data-src="${p.id}">คัดลอก</button>
          </div>`).join("")}
        </div>
        <div class="px-5 pb-5">
          <button id="sc-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#sc-ssp-close").addEventListener("click",()=>v.remove()),v.querySelectorAll(".copy-cols-btn").forEach(p=>{p.addEventListener("click",async()=>{var Q;const B=parseInt(p.dataset.src),R=H.find(j=>j.id===B);p.disabled=!0,p.textContent="⏳";try{const j=await He(t).catch(()=>[]),b=new Set(j.map(G=>G.assignment_name));let O=0;for(const G of R.cols)b.has(G.assignment_name)||(await nt({class_id:t,assignment_name:G.assignment_name,assignment_type:G.assignment_type,sheet_column:G.sheet_column??"",max_score:G.max_score,column_type:G.column_type??"regular",formula:G.formula??null,formula_refs:G.formula_refs??[]}),O++);P(`คัดลอก ${O} คอลัมน์จาก ${R.class_name} ✅`,"success"),v.remove(),(Q=window._scReload)==null||Q.call(window)}catch(j){P("คัดลอกไม่สำเร็จ: "+ce(j),"error"),p.disabled=!1,p.textContent="คัดลอก"}})})}catch{}}async function eo(e,t,a,d=null){var Q,j,b;Yn("my-classes"),Wn(`คอลัมน์คะแนน — ${a}`);const L=gs((d==null?void 0:d.skill_group)??((Q=d==null?void 0:d.master_subjects)==null?void 0:Q.skill_group)),q=["AGM","AGMVOC"].includes((j=d==null?void 0:d.master_subjects)==null?void 0:j.subject_group),H=!!(d!=null&&d.google_sheet_id);let v=new Set,p=new Set,B=!1;const R=async()=>{var $,I,oe,Y,o,f,y;const O=await He(t),G=await $e().catch(()=>({})),ne=parseInt(G.academicYear??2568),ae=parseInt(G.semester??1),V=L?(await _t(ne,ae,"สามัญ").catch(()=>[])).slice(0,3).map(n=>n.name):q?Xn:[];v=new Set;for(const n of V){const u=O.filter(x=>x.assignment_name===n);u.length>0&&v.add(u[0].id)}window._scoreColCache=Object.fromEntries(O.map(n=>[n.id,n])),p=new Set;const ie=O.filter(n=>(n.column_type??"regular")==="regular"),T=O.filter(n=>n.column_type==="bonus"),C=O.filter(n=>n.column_type==="derived"),w=O.filter(n=>n.column_type==="override"),J=Mn(T),D=ie.reduce((n,u)=>n+(Number(u.max_score)||0),0),M=C.reduce((n,u)=>n+(Number(u.max_score)||0),0),c=D+M,r=(n,u="",x=[])=>{var le;const g=v.has(n.id),E=n.column_type??"regular",K=x.findIndex(k=>k.id===n.id),W=!g&&K>0&&!v.has((le=x[K-1])==null?void 0:le.id),se=!g&&K>=0&&K<x.length-1;return`
      <tr class="${g?"bg-emerald-50/35":"hover:bg-gray-50"}">
        <td class="px-3 py-2.5 text-center">
          ${g?'<span class="text-emerald-500 text-xs">🔒</span>':`<input type="checkbox" class="sc-row-cb w-4 h-4 rounded accent-red-500" data-id="${n.id}" />`}
        </td>
        <td class="px-3 py-2.5 text-center whitespace-nowrap">
          <button onclick="window._moveScoreCol(${n.id},'up')" ${W?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${W?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▲</button>
          <button onclick="window._moveScoreCol(${n.id},'down')" ${se?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${se?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▼</button>
        </td>
        <td class="px-4 py-2.5 font-medium text-gray-800">
          ${n.assignment_name}
          ${E==="derived"&&n.formula?`<span class="ml-1 text-[10px] text-indigo-400 font-mono">= ${n.formula}</span>`:""}
          ${u}
        </td>
        ${H?`<td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${n.sheet_column??""}</td>`:""}
        <td class="px-4 py-2.5 text-center text-gray-600">${n.max_score??"—"}</td>
        <td class="px-4 py-2.5 text-right whitespace-nowrap">
          ${g?'<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>':`${E==="regular"?`
               <button onclick="window._toggleAutoSync(${n.id})"
                 title="${n.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}"
                 class="text-xs font-medium mr-2 px-2 py-1 rounded-lg ${n.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-100"}">
                 ${n.auto_attendance_sync?"🔄 ดึงจากเช็คชื่ออัตโนมัติ":"🔄 ดึงจากเช็คชื่อ"}
               </button>`:""}
               <button onclick="window._editScoreCol(${n.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
               <button onclick="window._deleteScoreCol(${n.id})" class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
        </td>
      </tr>`},S=(n,u=null)=>n.length?`<table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
          <tr>
            <th class="px-3 py-2 text-center w-8">เลือก</th>
            <th class="px-3 py-2 text-center w-14">เรียง</th>
            <th class="px-4 py-2 text-left">ชื่อ</th>
            ${H?'<th class="px-4 py-2 text-center">Sheet Col</th>':""}
            <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
            <th class="px-4 py-2 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${n.map(x=>r(x,(u==null?void 0:u(x))??"",n)).join("")}
        </tbody>
      </table>`:'<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์</p>',F=yt.map(n=>({type:n,items:ie.filter(u=>u.assignment_type===n)}));document.getElementById("sc-content").innerHTML=`
      <!-- Summary -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400">รวมคะแนน (นับใน 100)</p>
            <p class="text-2xl font-bold ${c>100?"text-red-600":"text-indigo-700"}">${c} คะแนน
              ${c>100?'<span class="text-sm font-normal text-red-500 ml-1">⚠️ เกิน 100</span>':""}
            </p>
          </div>
          <div class="text-xs text-gray-400 text-right">
            <p>คอลัมน์หลัก: ${ie.length} | อ้างอิง: ${C.length} | พิเศษ: ${T.length} | ปรับคะแนน: ${w.length}</p>
            <p class="mt-1">กลางภาค: ${ie.filter(n=>n.assignment_type==="กลางภาค").reduce((n,u)=>n+(Number(u.max_score)||0),0)} |
               ปลายภาค: ${ie.filter(n=>n.assignment_type==="ปลายภาค").reduce((n,u)=>n+(Number(u.max_score)||0),0)}</p>
          </div>
        </div>
      </div>

      <!-- Bulk delete bar -->
      <div id="sc-bulk-bar" class="hidden mb-3 flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
        <p id="sc-bulk-count" class="text-sm font-semibold text-red-700">เลือก 0 รายการ</p>
        <button id="sc-bulk-delete" class="px-4 py-1.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold">🗑️ ลบที่เลือก</button>
      </div>

      <!-- Regular columns (grouped by type) -->
      ${F.map(n=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${Kn[n.type]??""}">${n.type}</span>
            <span class="text-xs text-gray-400">รวม ${n.items.reduce((u,x)=>u+(Number(x.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${n.type}')" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${S(n.items)}
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
        ${S(C)}
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
        ${S(w,n=>{var u,x;return(n.link_column_id?` <span class="ml-1 text-[10px] text-teal-500">🔗 → ${((x=(u=window._scoreColCache)==null?void 0:u[n.link_column_id])==null?void 0:x.assignment_name)??"—"}</span>`:' <span class="ml-1 text-[10px] text-red-400">⚠️ ยังไม่ได้เชื่อมคอลัมน์</span>')+(n.override_mode==="add"?' <span class="ml-1 text-[10px] text-amber-500">➕ บวกเพิ่ม</span>':"")})}
      </div>

      <!-- Bonus columns (toggle) -->
      <div class="mb-4">
        <button id="sc-toggle-bonus"
          class="w-full flex items-center justify-between px-5 py-3 bg-white rounded-2xl border border-amber-100 shadow-sm hover:bg-amber-50/30 transition">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">⭐ คอลัมน์พิเศษ (Bonus)</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนเห็นได้</span>
            ${T.length?`<span class="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${T.length}</span>`:""}
          </div>
          <span class="text-gray-400 text-sm">${B?"▲ ซ่อน":"▼ แสดง"}</span>
        </button>
        <div id="sc-bonus-section" class="${B?"":"hidden"} mt-2 bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-amber-50 bg-amber-50/30">
            <div class="text-xs text-gray-500">
              ${J.length?J.map(n=>`<span class="font-mono font-bold text-amber-700">${n.var}</span> = ${n.assignment_name}`).join(" &nbsp;|&nbsp; "):"ยังไม่มีคอลัมน์พิเศษ"}
            </div>
            <button onclick="window._addBonusCol()" class="text-xs text-amber-600 hover:text-amber-800 font-medium flex-shrink-0">＋ เพิ่ม</button>
          </div>
          ${S(T)}
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
            <input id="sc-name" type="text" placeholder="เช่น คะแนนเก็บ 1" class="${Ke}" />
          </div>
          <div id="sc-type-wrap">
            <label class="block text-xs font-medium text-gray-600 mb-1">หมวด <span class="text-red-400">*</span></label>
            <select id="sc-type" class="${ft}">
              ${yt.map(n=>`<option value="${n}">${n}</option>`).join("")}
            </select>
          </div>
          ${H?`
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คอลัมน์ Sheet</label>
            <input id="sc-col" type="text" placeholder="EK" class="${Ke} font-mono uppercase" maxlength="4" />
          </div>`:'<input id="sc-col" type="hidden" value="" />'}
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1" id="sc-max-label">คะแนนเต็ม</label>
            <input id="sc-max" type="number" min="0" placeholder="20" class="${Ke}" />
          </div>
          <!-- Link column section (shown only for override) -->
          <div id="sc-link-wrap" class="col-span-2 hidden">
            <label class="block text-xs font-medium text-gray-600 mb-1">เชื่อมกับคอลัมน์หลัก <span class="text-red-400">*</span></label>
            <select id="sc-link-col" class="${ft}">
              <option value="">— เลือกคอลัมน์ —</option>
            </select>
            <label class="block text-xs font-medium text-gray-600 mb-1 mt-3">วิธีปรับคะแนน</label>
            <select id="sc-override-mode" class="${ft}">
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
              <input id="sc-formula" type="text" placeholder="เช่น MIN(A*2,10)+B หรือ IF(A>5,A,0)" class="${Ke} font-mono flex-1" />
              <button type="button" id="sc-test-formula" class="px-3 py-2 rounded-xl bg-indigo-100 text-indigo-700 text-xs font-medium hover:bg-indigo-200 whitespace-nowrap">ทดสอบ</button>
            </div>
            <p id="sc-formula-result" class="text-xs mt-1 hidden"></p>
          </div>
          <div class="col-span-2 flex gap-3 pt-1">
            <button type="button" id="sc-form-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="sc-save" type="submit" class="btn-primary flex-1 py-2 rounded-xl text-white text-sm font-semibold">บันทึก</button>
          </div>
        </form>
      </div>`;const Z=document.getElementById("sc-bulk-bar"),te=document.getElementById("sc-bulk-count"),s=()=>{const n=p.size;Z.classList.toggle("hidden",n===0),te.textContent=`เลือก ${n} รายการ`};document.querySelectorAll(".sc-row-cb").forEach(n=>{n.addEventListener("change",()=>{const u=parseInt(n.dataset.id);n.checked?p.add(u):p.delete(u),s()})}),($=document.getElementById("sc-bulk-delete"))==null||$.addEventListener("click",()=>{const n=[...p].map(u=>{var x,g;return((g=(x=window._scoreColCache)==null?void 0:x[u])==null?void 0:g.assignment_name)??`ID ${u}`}).join(", ");vt(`ลบ ${p.size} คอลัมน์:<br/><span class="font-semibold">${n}</span>`,async()=>{try{await Promise.all([...p].map(u=>Rt(u))),P(`ลบ ${p.size} คอลัมน์แล้ว ✅`,"success"),p=new Set,await R()}catch(u){P("ลบไม่สำเร็จ: "+ce(u),"error")}})}),(I=document.getElementById("sc-toggle-bonus"))==null||I.addEventListener("click",()=>{B=!B,document.getElementById("sc-bonus-section").classList.toggle("hidden",!B),document.getElementById("sc-toggle-bonus").querySelector("span:last-child").textContent=B?"▲ ซ่อน":"▼ แสดง"}),(oe=document.getElementById("sc-test-formula"))==null||oe.addEventListener("click",()=>{const n=document.getElementById("sc-formula").value.trim(),u=document.getElementById("sc-formula-result");if(!n){u.classList.add("hidden");return}const x=Object.fromEntries(J.map(E=>[E.var,5])),g=Tn(n,x);u.classList.remove("hidden"),g===null?(u.className="text-xs mt-1 text-red-500",u.textContent="⚠️ สูตรไม่ถูกต้อง"):(u.className="text-xs mt-1 text-emerald-600",u.textContent=`✅ ทดสอบด้วย ${J.map(E=>`${E.var}=5`).join(", ")} → ผลลัพธ์ = ${g}`)});const i=(n,u,x=yt[0])=>{document.getElementById("sc-edit-id").value="",document.getElementById("sc-edit-ctype").value=n,document.getElementById("sc-name").value="",document.getElementById("sc-col").value="",document.getElementById("sc-max").value="",document.getElementById("sc-type")&&(document.getElementById("sc-type").value=x),document.getElementById("sc-form-title").textContent=u;const g=n==="bonus",E=n==="derived",K=n==="override";if(document.getElementById("sc-type-wrap").classList.toggle("hidden",g||E||K),document.getElementById("sc-formula-section").classList.toggle("hidden",!E),document.getElementById("sc-link-wrap").classList.toggle("hidden",!K),document.getElementById("sc-max-label").textContent=g?"คะแนนเต็ม (ไม่บังคับ)":K?"คะแนนเต็ม (auto ตามคอลัมน์ที่เชื่อม)":"คะแนนเต็ม",document.getElementById("sc-max").readOnly=K,E&&(document.getElementById("sc-formula").value="",document.getElementById("sc-formula-result").classList.add("hidden"),document.getElementById("sc-vars-hint").textContent=J.length?J.map(W=>`${W.var} = "${W.assignment_name}"`).join("  |  "):"ยังไม่มีคอลัมน์พิเศษ — เพิ่มก่อน"),K){const W=document.getElementById("sc-link-col");W.innerHTML='<option value="">— เลือกคอลัมน์ —</option>'+ie.map(se=>`<option value="${se.id}">${se.assignment_name} (${se.assignment_type??"—"} · เต็ม ${se.max_score??"—"})</option>`).join(""),W.value="",document.getElementById("sc-override-mode").value="max",l()}document.getElementById("sc-form-wrap").classList.remove("hidden"),document.getElementById("sc-name").focus()};window._addScoreCol=n=>i("regular",`เพิ่มคอลัมน์หลัก — ${n}`,n),window._addBonusCol=()=>i("bonus","เพิ่มคอลัมน์พิเศษ (Bonus)"),window._addDerivedCol=()=>i("derived","เพิ่มคอลัมน์อ้างอิงสูตร"),window._addOverrideCol=()=>i("override","เพิ่มคอลัมน์ปรับคะแนน"),(Y=document.getElementById("sc-link-col"))==null||Y.addEventListener("change",n=>{const u=Number(n.target.value),x=ie.find(g=>g.id===u);document.getElementById("sc-max").value=(x==null?void 0:x.max_score)??""});const l=()=>{var x;const n=(x=document.getElementById("sc-override-mode"))==null?void 0:x.value,u=document.getElementById("sc-override-mode-hint");u&&(u.textContent=n==="add"?"คะแนนคอลัมน์หลักใหม่ = คะแนนตั้งต้นของนักเรียนคนนั้น + คะแนนในคอลัมน์นี้เสมอ (ไม่บวกซ้ำสะสมตอนแก้ค่าซ้ำ)":"ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที")};(o=document.getElementById("sc-override-mode"))==null||o.addEventListener("change",l),window._editScoreCol=n=>{var g;const u=(g=window._scoreColCache)==null?void 0:g[n];if(!u)return;if(v.has(n)){P("คอลัมน์ระบบกลาง แก้ไขไม่ได้","warning");return}const x=u.column_type??"regular";i(x,"แก้ไขคอลัมน์",u.assignment_type),document.getElementById("sc-edit-id").value=n,document.getElementById("sc-name").value=u.assignment_name,document.getElementById("sc-col").value=u.sheet_column??"",document.getElementById("sc-max").value=u.max_score??"",x==="derived"&&u.formula&&(document.getElementById("sc-formula").value=u.formula),x==="override"&&u.link_column_id&&(document.getElementById("sc-link-col").value=String(u.link_column_id),document.getElementById("sc-override-mode").value=u.override_mode==="add"?"add":"max",l())},window._moveScoreCol=async(n,u)=>{const x=await He(t),g=x.find(A=>A.id===n);if(!g)return;const E=x.filter(A=>A.assignment_type===g.assignment_type&&(A.column_type??"regular")===(g.column_type??"regular")),K=E.findIndex(A=>A.id===n),W=u==="up"?K-1:K+1;if(W<0||W>=E.length||v.has(E[W].id))return;const se=E[K],le=E[W],k=se.sort_order??(K+1)*10,m=le.sort_order??(W+1)*10;await js([{id:se.id,sort_order:m},{id:le.id,sort_order:k}]),await R()},window._deleteScoreCol=n=>{var x,g;if(v.has(n)){P("คอลัมน์ระบบกลาง ลบไม่ได้","warning");return}const u=((g=(x=window._scoreColCache)==null?void 0:x[n])==null?void 0:g.assignment_name)??"คอลัมน์นี้";vt(`ต้องการลบ <span class="font-semibold">"${u}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Rt(n),P("ลบแล้ว ✅","success"),await R()}catch{P("ลบไม่สำเร็จ","error")}})},window._toggleAutoSync=async n=>{var E;const u=(E=window._scoreColCache)==null?void 0:E[n];if(!u)return;const x=!u.auto_attendance_sync,g=async()=>{try{await Ms(n,x),P(x?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน ✅":"ปิดใช้งานแล้ว","success"),await R()}catch{P("บันทึกไม่สำเร็จ","error")}};x?vt(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${u.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้านี้ — ถ้าเคยแก้คะแนนคนไหนด้วยมือไว้ก่อน จะไม่ถูกทับ</span>`,g):await g()},(f=document.getElementById("sc-form-cancel"))==null||f.addEventListener("click",()=>{document.getElementById("sc-form-wrap").classList.add("hidden")}),(y=document.getElementById("sc-form"))==null||y.addEventListener("submit",async n=>{var ee,_,X,N;n.preventDefault();const u=document.getElementById("sc-save"),x=document.getElementById("sc-edit-id").value,g=document.getElementById("sc-edit-ctype").value,E=document.getElementById("sc-name").value.trim(),K=(((ee=document.getElementById("sc-col"))==null?void 0:ee.value)??"").trim().toUpperCase(),W=((_=document.getElementById("sc-type"))==null?void 0:_.value)??"ระหว่างเรียน",se=document.getElementById("sc-max").value,le=se&&parseFloat(se)||null,k=g==="derived"&&document.getElementById("sc-formula").value.trim()||null,m=g==="override"&&Number((X=document.getElementById("sc-link-col"))==null?void 0:X.value)||null,A=g==="override"?((N=document.getElementById("sc-override-mode"))==null?void 0:N.value)==="add"?"add":"max":null;if(!E){P("กรุณากรอกชื่อรายการ","warning");return}if(g==="derived"&&!le){P("คอลัมน์อ้างอิงสูตรต้องระบุคะแนนเต็ม","warning");return}if(g==="derived"&&!k){P("กรุณากรอกสูตรคำนวณ","warning");return}if(g==="override"&&!m){P("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const U=g==="derived"?J.map(z=>({var:z.var,col_id:z.id})):[];u.disabled=!0,u.textContent="กำลังบันทึก...";try{const z={assignment_name:E,assignment_type:g==="bonus"||g==="derived"||g==="override"?"คะแนนพิเศษ":W,sheet_column:K,max_score:le,column_type:g,formula:k,formula_refs:U,link_column_id:m,override_mode:A};x?await Is(Number(x),z):await nt({...z,class_id:t}),P("บันทึกสำเร็จ","success"),document.getElementById("sc-form-wrap").classList.add("hidden"),(g==="bonus"||g==="derived")&&(B=!0),await R()}catch(z){P("บันทึกไม่สำเร็จ: "+ce(z),"error")}finally{u.disabled=!1,u.textContent="บันทึก"}})};window._scReload=R,Jn(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-400">${a}</p>
      </div>
      ${L?'<button id="btn-fill-lifeskill" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex-shrink-0">🌱 เติมทักษะชีวิต</button>':""}
    </div>
    <div id="sc-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`),await R(),(b=document.getElementById("btn-fill-lifeskill"))==null||b.addEventListener("click",async()=>{const O=document.getElementById("btn-fill-lifeskill");O.disabled=!0,O.textContent="⏳";try{const G=await $e().catch(()=>({})),ne=parseInt(G.academicYear??2568),ae=parseInt(G.semester??1),V=await _t(ne,ae,"สามัญ").catch(()=>[]);if(!V.length){P("ยังไม่มีหัวข้อทักษะชีวิต — แอดมินเพิ่มก่อน","warning");return}const ie=await He(t),T=new Set(ie.map(w=>w.assignment_name));let C=0;for(const w of V)T.has(w.name)||(await nt({class_id:t,assignment_name:w.name,assignment_type:"กลางภาค",sheet_column:w.sheet_col??"",max_score:w.max_score??20}),C++);P(C>0?`เพิ่ม ${C} คอลัมน์ ✅`:"มีคอลัมน์ทักษะชีวิตอยู่แล้ว",C>0?"success":"info"),await R()}catch{P("เติมไม่สำเร็จ","error")}finally{const G=document.getElementById("btn-fill-lifeskill");G&&(G.disabled=!1,G.textContent="🌱 เติมทักษะชีวิต")}}),setTimeout(()=>Zn(e,t,d),500)}const Ge="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",Oe="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function fs(e){document.getElementById("main-content").innerHTML=e}function ys(e){document.getElementById("page-title").textContent=e}function vs(e){document.querySelectorAll("[data-nav]").forEach(t=>{const a=t.dataset.nav===e;t.classList.toggle("bg-emerald-800",a),t.classList.toggle("text-white",a),t.classList.toggle("text-emerald-200",!a)})}function Et(e){if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const t=String(e).match(/^(\d{4})-(\d{2})-(\d{2})/);if(t)return new Date(Number(t[1]),Number(t[2])-1,Number(t[3]));const a=new Date(e);return Number.isNaN(a.getTime())?null:new Date(a.getFullYear(),a.getMonth(),a.getDate())}function it(e){const t=Et(e);return t?[t.getFullYear(),String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0")].join("-"):""}function hs(e,t){const a=Et(t)??Et(new Date),d=a.getDay(),L=[];for(const v of e){const p=v.span_periods??1;for(let B=0;B<p;B++)L.push({dow:v.day_of_week,pno:(v.period_no??0)+B})}if(L.sort((v,p)=>{const B=(v.dow-d+7)%7,R=(p.dow-d+7)%7;return B!==R?B-R:v.pno-p.pno}),!L.length)return[];const q=[];let H=0;for(;q.length<6;){for(const v of L){const p=new Date(a);if(p.setDate(p.getDate()+(v.dow-d+7)%7+H*7),q.push(p),q.length>=6)break}H++}return q.slice(0,6)}const ws={ACDM:["วิชาการ","ภาษา","ชีวิต"],AGM:["ศาสนามัธยม"],ACDMVOC:["วิชาการ","ภาษา","สามัญปวช"],AGMVOC:["ศาสนาปวช"]};async function to(e,t,a={}){var T;if(!(t!=null&&t.id)){P("ไม่พบคอร์สวิชา จึงยังสร้างห้องเรียนไม่ได้","error");return}const d=a.cloneFrom??null;vs(d?"my-classes":"my-courses"),ys(d?"ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา");const L=await Ts().catch(()=>[]),q=await $e().catch(()=>({})),H=q.semester_start??q.term_start_date??it(new Date),v=ws[t.subject_group]??[],p=v.length===1,B=L.find(C=>C.dept_code===t.dept),R=t.grade_level,Q=/^(PR|อก|อป)/i.test(R??""),j=parseInt(q.academicYear),b=parseInt(q.semester),O=d?new Set((window._classesFlat??[]).filter(C=>C.course_id===t.id&&+C.academic_year===j&&+C.semester===b).map(C=>C.class_name)):new Set,G=R?Q?await As(R).catch(()=>[]):await Bs(R).catch(()=>[]):[],ne=d?G.filter(C=>!O.has(C)):G,ae=d?lt(a.srcSkill):"";fs(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${d?"📋 ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา"}</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${t.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${t.subject_code??"—"} · ${t.credit??"—"} หน่วยกิต · ${t.grade_level??"—"}</p>
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
            class="${Oe}" />
          <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
        </div>
        <!-- กลุ่มทักษะ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ <span class="text-red-400">*</span></label>
          ${p?`<input type="text" value="${v[0]}" class="${Oe} bg-gray-50" readonly />
               <input type="hidden" id="cls-skill" value="${v[0]}" />`:`<select id="cls-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${v.map(C=>`<option value="${C}" ${C===ae?"selected":""}>${C}</option>`).join("")}
               </select>`}
        </div>
        <!-- ชั้นเรียน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ชั้นเรียน <span class="text-red-400">*</span></label>
          ${ne.length?`<select id="cls-room" class="${Ge}">
                <option value="">— เลือกห้องเรียน —</option>
                ${ne.map(C=>`<option value="${C}">${C}</option>`).join("")}
               </select>`:`<input id="cls-room" type="text" placeholder="พิมพ์ชื่อห้อง เช่น PR 1/7 Ikhlas" class="${Oe}" autocomplete="off" />
               <p class="text-xs text-amber-500 mt-1">⚠️ ไม่พบห้อง ${R} — พิมพ์ชื่อห้องตรงๆ หรืออัปโหลดนักเรียนพร้อม column <b>religion_room</b></p>`}
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
            ${[1,2,3,4,5,6].map(C=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${C}</p>
              <input id="cls-day${C}" type="date" value="${H}" class="${Oe} text-xs" />
            </div>`).join("")}
          </div>
        </div>
        <!-- ข้อมูล auto (แสดง readonly) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">ข้อมูลที่ซิงค์ไปยัง Google Sheet</p>
          <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div><span class="text-gray-400">รหัสวิชา:</span> ${t.subject_code??"—"}</div>
            <div><span class="text-gray-400">หน่วยกิต:</span> ${t.credit??"—"}</div>
            <div><span class="text-gray-400">ชั้นปี:</span> ${t.grade_level??"—"}</div>
            <div><span class="text-gray-400">กลุ่มสาระ:</span> ${(B==null?void 0:B.dept_name)??t.dept??"—"}</div>
            <div class="col-span-2"><span class="text-gray-400">หัวหน้าหมวด:</span> ${(B==null?void 0:B.head_name)??"—"}</div>
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
  </div>`);let V=[];document.getElementById("cls-room").addEventListener("change",async C=>{const w=C.target.value;if(!w){document.getElementById("cls-students-section").classList.add("hidden"),document.getElementById("cls-head-section").classList.add("hidden");return}try{V=Q?await Ns(w):await Rs(w),document.getElementById("cls-student-count").textContent=`(${V.length} คน)`,document.getElementById("cls-students-list").innerHTML=V.length?`<table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="px-3 py-2 text-left">รหัส</th>
                <th class="px-3 py-2 text-left">ชื่อ-สกุล</th>
                <th class="px-3 py-2 text-center">ศาสนา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${V.map(M=>`
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 font-mono text-indigo-600">${M.student_code}</td>
                <td class="px-3 py-2">
                  <div class="flex items-center gap-2">
                    ${M.image_url?`<img src="${M.image_url}" class="w-5 h-6 rounded object-cover flex-shrink-0 border border-gray-200" />`:""}
                    ${M.full_name}
                  </div>
                </td>
                <td class="px-3 py-2 text-center text-gray-400">${M.religion_room??"—"}</td>
              </tr>`).join("")}
            </tbody>
          </table>`:'<p class="text-center py-4 text-gray-400 text-sm">ไม่พบนักเรียนในห้องนี้</p>';const J=document.getElementById("cls-head");J.innerHTML='<option value="">— เลือกหัวหน้าห้อง —</option>'+V.map(M=>`<option value="${M.id}" data-code="${M.student_code}" data-room="${M.main_room??""}" data-img="${M.image_url??""}">${M.full_name} (${M.student_code})</option>`).join(""),document.getElementById("cls-students-section").classList.remove("hidden"),document.getElementById("cls-head-section").classList.remove("hidden");const D=()=>{const M=J.options[J.selectedIndex],c=document.getElementById("cls-head-card");if(!M||!M.value){c==null||c.classList.add("hidden");return}const r=M.text.split(" (")[0],S=M.dataset.code??"",F=M.dataset.room??"",Z=M.dataset.img??"";document.getElementById("cls-head-name").textContent=r,document.getElementById("cls-head-code").textContent=`รหัส: ${S}`,document.getElementById("cls-head-room").textContent=F?`ห้อง: ${F}`:"";const te=document.getElementById("cls-head-avatar");te.innerHTML=Z?`<img src="${Z}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${r.charAt(0)}</div>`,c==null||c.classList.remove("hidden")};J.addEventListener("change",D)}catch{P("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}});let ie=[];(T=document.getElementById("btn-auto-dates"))==null||T.addEventListener("click",async()=>{var J;const C=document.getElementById("btn-auto-dates"),w=document.getElementById("auto-dates-info");C.textContent="⏳ กำลังดึงตาราง...",C.disabled=!0;try{const D=parseInt(q.academicYear??2568),M=parseInt(q.semester??1),c=e?await Ve(e.id,D,M).catch(()=>[]):[];if(!c.length){w.innerHTML='⚠️ ยังไม่มีตารางสอน — <a href="#" id="goto-schedule" class="underline text-indigo-600 font-medium">สร้างตารางสอน</a> หรือกรอกวันเองด้านล่าง',w.classList.remove("hidden"),(J=document.getElementById("goto-schedule"))==null||J.addEventListener("click",te=>{var s;te.preventDefault(),(s=window._navTo)==null||s.call(window,"schedule")}),C.disabled=!1,C.textContent="🗓️ คำนวณจากตารางสอน";return}const r={};c.forEach(te=>{var i,l;const s=`${te.subject_name??((i=te.master_subjects)==null?void 0:i.subject_name)??"?"}|${te.class_name??""}`;r[s]||(r[s]={label:`${te.subject_name??((l=te.master_subjects)==null?void 0:l.subject_name)??"?"}${te.class_name?` — ${te.class_name}`:""}`,entries:[]}),r[s].entries.push(te)});const S=["อา","จ","อ","พ","พฤ","ศ"],F=te=>{const s=[];te.forEach(l=>{for(let $=0;$<(l.span_periods??1);$++)s.push({dow:l.day_of_week,pno:(l.period_no??0)+$})}),s.sort((l,$)=>l.dow!==$.dow?l.dow-$.dow:l.pno-$.pno);const i={};return s.forEach(l=>{i[l.dow]||(i[l.dow]=[]),i[l.dow].push(l.pno)}),Object.entries(i).map(([l,$])=>`${S[l]} คาบ ${$.join(",")}`).join(" · ")},Z=document.createElement("div");Z.id="dates-popup",Z.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",Z.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(r).map(([te,s])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="dates-subj" value="${te}" class="mt-0.5 text-indigo-600 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${s.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${F(s.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(Z),Z.querySelector("#dates-close").addEventListener("click",()=>Z.remove()),Z.querySelector("#dates-cancel").addEventListener("click",()=>Z.remove()),Z.querySelector("#dates-calc").addEventListener("click",()=>{var l;const te=(l=Z.querySelector('input[name="dates-subj"]:checked'))==null?void 0:l.value;if(!te){alert("กรุณาเลือกวิชาก่อน");return}Z.remove();const s=r[te].entries;ie=s,hs(s,H).forEach(($,I)=>{const oe=document.getElementById(`cls-day${I+1}`);oe&&(oe.value=it($))}),w.textContent=`✅ คำนวณจาก "${r[te].label}" — ${s.length} ช่องตาราง — ตรวจสอบแล้วแก้ไขได้`,w.classList.remove("hidden")})}catch(D){w.textContent="โหลดตารางไม่สำเร็จ: "+ce(D),w.classList.remove("hidden")}finally{C.textContent="🗓️ คำนวณจากตารางสอน",C.disabled=!1}}),document.getElementById("class-form").addEventListener("submit",async C=>{C.preventDefault();const w=document.getElementById("cls-submit"),J=document.getElementById("cls-sheet-id").value.trim(),D=document.getElementById("cls-skill").value,M=document.getElementById("cls-room").value,c=document.getElementById("cls-head").value;if(!M){P("กรุณาเลือกชั้นเรียน","warning");return}w.disabled=!0,w.textContent="กำลังบันทึก...";try{const r={course_id:t.id,class_name:M,skill_group:lt(D),google_sheet_id:J||null,head_student_id:c?Number(c):null,day1_date:document.getElementById("cls-day1").value||null,day2_date:document.getElementById("cls-day2").value||null,day3_date:document.getElementById("cls-day3").value||null,day4_date:document.getElementById("cls-day4").value||null,day5_date:document.getElementById("cls-day5").value||null,day6_date:document.getElementById("cls-day6").value||null},S=await Ps(r,(e==null?void 0:e.id)??null);S!=null&&S.id&&ie.length&&await Promise.all(ie.map($=>ot(S.id,$.id).catch(()=>{}))),V.length&&(S!=null&&S.id)&&await Os(S.id,V.map($=>$.id));const F=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),Z=gs(a.srcSkill),te=["AGM","AGMVOC"].includes(t.subject_group??"");let s=new Set;if(Z){const $=await $e().catch(()=>({})),I=await _t(parseInt($.academicYear??2568),parseInt($.semester??1),"สามัญ").catch(()=>[]);s=new Set(I.slice(0,3).map(oe=>oe.name))}let i=0;if(d&&(S!=null&&S.id)){const $=await He(d).catch(()=>[]),I=new Set;for(const oe of $)te&&F.has(oe.assignment_name)||Z&&s.has(oe.assignment_name)||I.has(oe.assignment_name)||(I.add(oe.assignment_name),await nt({class_id:S.id,assignment_name:oe.assignment_name,assignment_type:oe.assignment_type,sheet_column:oe.sheet_column,max_score:oe.max_score}),i++)}const l=d?`ทำสำเนา "${M}" สำเร็จ — นักเรียน ${V.length} คน · ช่องคะแนน ${i} ช่อง`:`เปิดรายวิชา ${M} สำเร็จ! นักเรียน ${V.length} คน`;P(l,"success"),window._goBack()}catch(r){P("บันทึกไม่สำเร็จ: "+ce(r),"error")}finally{w.disabled=!1,w.textContent="บันทึกและเปิดรายวิชา"}})}async function so(e,t){var B,R;vs("my-classes"),ys("แก้ไขห้องเรียน");const a=t.master_subjects,d=ws[a==null?void 0:a.subject_group]??[],L=d.length===1,q=lt(t.skill_group),H=await De(t.id).catch(()=>[]);fs(`<div class="max-w-2xl mx-auto animate-fade">
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
      <p class="text-sm text-emerald-700 mt-0.5">ห้อง: <strong>${t.class_name}</strong></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="cls-edit-form" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Google Sheet ID</label>
          <input id="ce-sheet" type="text" value="${t.google_sheet_id??""}"
            placeholder="วาง ID จาก URL ของ Google Sheet" class="${Oe}" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ</label>
          ${L?`<input type="text" value="${d[0]}" class="${Oe} bg-gray-50" readonly />
               <input type="hidden" id="ce-skill" value="${d[0]}" />`:`<select id="ce-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${d.map(Q=>`<option value="${Q}" ${Q===q?"selected":""}>${Q}</option>`).join("")}
               </select>`}
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
          <select id="ce-head" class="${Ge}">
            <option value="">— ยังไม่ระบุหัวหน้าห้อง —</option>
            ${H.map(Q=>`
              <option value="${Q.id}" ${Number(t.head_student_id)===Number(Q.id)?"selected":""}>
                ${Q.full_name} (${Q.student_code})
              </option>`).join("")}
          </select>
          ${H.length?'<p class="text-xs text-gray-400 mt-1">เลือกได้จากนักเรียนที่อยู่ในห้องนี้</p>':'<p class="text-xs text-amber-500 mt-1">ยังไม่พบนักเรียนในห้องนี้ จึงยังเลือกหัวหน้าห้องไม่ได้</p>'}
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
            ${[1,2,3,4,5,6].map(Q=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${Q}</p>
              <input id="ce-day${Q}" type="date"
                value="${t[`day${Q}_date`]??""}" class="${Oe} text-xs" />
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
  </div>`),e!=null&&e.id&&$t(e.id,t.id).then(Q=>{const j=document.getElementById("ce-source-class");if(j&&(Q.forEach(b=>{const O=b.master_subjects,G=`${(O==null?void 0:O.subject_name)??"?"} (${(O==null?void 0:O.subject_code)??""}) — ${b.class_name} · ${(O==null?void 0:O.credit)??"?"} หน่วยกิต`,ne=new Option(G,b.id,!1,Number(b.id)===Number(t.source_class_id));j.appendChild(ne)}),t.source_class_id)){const b=Q.find(O=>Number(O.id)===Number(t.source_class_id));b&&v(b)}}).catch(()=>{});const v=Q=>{var G,ne;const j=document.getElementById("ce-source-info");if(!j||!Q)return;const b=((G=Q.master_subjects)==null?void 0:G.credit)??1,O=((ne=t.master_subjects)==null?void 0:ne.credit)??1;b!==O?(j.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${b} / วิชานี้ ${O}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,j.classList.remove("hidden")):j.classList.add("hidden")};(B=document.getElementById("ce-source-class"))==null||B.addEventListener("change",Q=>{var O;const b=Q.target.selectedOptions[0];if(!(b!=null&&b.value)){(O=document.getElementById("ce-source-info"))==null||O.classList.add("hidden");return}$t(e==null?void 0:e.id,t.id).then(G=>{const ne=G.find(ae=>Number(ae.id)===Number(b.value));ne&&v(ne)}).catch(()=>{})});let p=[];(R=document.getElementById("ce-btn-auto-dates"))==null||R.addEventListener("click",async()=>{const Q=document.getElementById("ce-btn-auto-dates"),j=document.getElementById("ce-auto-dates-info");Q.textContent="⏳ กำลังดึงตาราง...",Q.disabled=!0;try{const b=await $e().catch(()=>({})),O=b.semester_start??b.term_start_date??it(new Date),G=parseInt(b.academicYear??2568),ne=parseInt(b.semester??1),ae=e?await Ve(e.id,G,ne).catch(()=>[]):[];if(!ae.length){j.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",j.classList.remove("hidden");return}const V={};ae.forEach(w=>{const J=`${w.subject_name??"?"}|${w.class_name??""}`;V[J]||(V[J]={label:`${w.subject_name??"?"}${w.class_name?` — ${w.class_name}`:""}`,entries:[]}),V[J].entries.push(w)});const ie=["อา","จ","อ","พ","พฤ","ศ"],T=w=>{const J=[];w.forEach(M=>{for(let c=0;c<(M.span_periods??1);c++)J.push({dow:M.day_of_week,pno:(M.period_no??0)+c})}),J.sort((M,c)=>M.dow!==c.dow?M.dow-c.dow:M.pno-c.pno);const D={};return J.forEach(M=>{D[M.dow]||(D[M.dow]=[]),D[M.dow].push(M.pno)}),Object.entries(D).map(([M,c])=>`${ie[M]} คาบ ${c.join(",")}`).join(" · ")},C=document.createElement("div");C.id="ce-dates-popup",C.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",C.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="ce-dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(V).map(([w,J])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="ce-dates-subj" value="${w}" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${J.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${T(J.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="ce-dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="ce-dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(C),C.querySelector("#ce-dates-close").addEventListener("click",()=>C.remove()),C.querySelector("#ce-dates-cancel").addEventListener("click",()=>C.remove()),C.querySelector("#ce-dates-calc").addEventListener("click",()=>{var D;const w=(D=C.querySelector('input[name="ce-dates-subj"]:checked'))==null?void 0:D.value;if(!w){P("กรุณาเลือกวิชาก่อน","warning");return}C.remove(),p=V[w].entries,hs(V[w].entries,O).forEach((M,c)=>{const r=document.getElementById(`ce-day${c+1}`);r&&(r.value=it(M))}),j.textContent=`✅ คำนวณจาก "${V[w].label}" — ตรวจสอบและแก้ไขได้`,j.classList.remove("hidden")})}catch(b){j.textContent="โหลดตารางไม่สำเร็จ: "+ce(b),j.classList.remove("hidden")}finally{Q.textContent="🗓️ คำนวณจากตารางสอน",Q.disabled=!1}}),document.getElementById("cls-edit-form").addEventListener("submit",async Q=>{var b;Q.preventDefault();const j=document.getElementById("ce-submit");j.disabled=!0,j.textContent="กำลังบันทึก...";try{const O=(b=document.getElementById("ce-source-class"))==null?void 0:b.value;await at(t.id,{google_sheet_id:document.getElementById("ce-sheet").value.trim()||null,skill_group:lt(document.getElementById("ce-skill").value),head_student_id:document.getElementById("ce-head").value?Number(document.getElementById("ce-head").value):null,day1_date:document.getElementById("ce-day1").value||null,day2_date:document.getElementById("ce-day2").value||null,day3_date:document.getElementById("ce-day3").value||null,day4_date:document.getElementById("ce-day4").value||null,day5_date:document.getElementById("ce-day5").value||null,day6_date:document.getElementById("ce-day6").value||null,source_class_id:O?Number(O):null}),p.length&&(await Promise.all(p.map(G=>ot(t.id,G.id).catch(()=>{}))),p=[]),P("บันทึกสำเร็จ","success"),window._navTo?window._navTo("my-classes"):history.back()}catch(O){P("บันทึกไม่สำเร็จ: "+ce(O),"error")}finally{j.disabled=!1,j.textContent="บันทึกการแก้ไข"}})}const Je=[{cls:"bg-emerald-100 text-emerald-900 font-semibold",hex:"#d1fae5",soft:"#ecfdf5",border:"#6ee7b7",dot:"#6ee7b7"},{cls:"bg-indigo-100 text-indigo-900 font-semibold",hex:"#e0e7ff",soft:"#eef2ff",border:"#a5b4fc",dot:"#a5b4fc"},{cls:"bg-amber-100 text-amber-900 font-semibold",hex:"#fef3c7",soft:"#fffbeb",border:"#fcd34d",dot:"#fcd34d"},{cls:"bg-rose-100 text-rose-900 font-semibold",hex:"#ffe4e6",soft:"#fff1f2",border:"#fda4af",dot:"#fda4af"},{cls:"bg-cyan-100 text-cyan-900 font-semibold",hex:"#cffafe",soft:"#ecfeff",border:"#67e8f9",dot:"#67e8f9"},{cls:"bg-violet-100 text-violet-900 font-semibold",hex:"#ede9fe",soft:"#f5f3ff",border:"#c4b5fd",dot:"#c4b5fd"},{cls:"bg-lime-100 text-lime-900 font-semibold",hex:"#ecfccb",soft:"#f7fee7",border:"#bef264",dot:"#bef264"},{cls:"bg-orange-100 text-orange-900 font-semibold",hex:"#ffedd5",soft:"#fff7ed",border:"#fdba74",dot:"#fdba74"},{cls:"bg-pink-100 text-pink-900 font-semibold",hex:"#fce7f3",soft:"#fdf2f8",border:"#f9a8d4",dot:"#f9a8d4"},{cls:"bg-teal-100 text-teal-900 font-semibold",hex:"#ccfbf1",soft:"#f0fdfa",border:"#5eead4",dot:"#5eead4"},{cls:"bg-sky-100 text-sky-900 font-semibold",hex:"#e0f2fe",soft:"#f0f9ff",border:"#7dd3fc",dot:"#7dd3fc"},{cls:"bg-fuchsia-100 text-fuchsia-900 font-semibold",hex:"#fae8ff",soft:"#fdf4ff",border:"#f0abfc",dot:"#f0abfc"}],st=e=>String(e??"").trim().toLowerCase(),_s=/^#[0-9a-f]{6}$/i;function no(e){let t=2166136261;for(let a=0;a<e.length;a+=1)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function oo({teacherId:e="",className:t="",subjectName:a="",fallbackId:d=""}={}){return`${st(e)}|${xt({className:t,subjectName:a,fallbackId:d})}`}function xt({className:e="",subjectName:t="",fallbackId:a=""}={}){const d=st(e),L=st(t),q=st(a);return d||L||q||"default"}function Gt(e){const t=_s.test(e)?e.slice(1):"e0e7ff";return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function ao({r:e,g:t,b:a}){return`#${[e,t,a].map(d=>Math.max(0,Math.min(255,Math.round(d))).toString(16).padStart(2,"0")).join("")}`}function ht(e,t,a=.5){const d=Gt(e),L=Gt(t);return ao({r:d.r*(1-a)+L.r*a,g:d.g*(1-a)+L.g*a,b:d.b*(1-a)+L.b*a})}function gt(e){const t=_s.test(String(e??""))?String(e).toLowerCase():"#6366f1";return{cls:"",hex:t,soft:ht(t,"#ffffff",.86),border:ht(t,"#ffffff",.45),dot:t,text:ht(t,"#000000",.28)}}function ro(e={}){const t=oo(e),a=no(t)%Je.length;return{...gt(Je[a].dot),cls:Je[a].cls,idx:a,key:t}}function We(e={},t={}){const a=xt(e),d=t instanceof Map?t.get(a):t[a];return d?gt(d):ro(e)}const $s="pp5.teacher_schedule.v1",Pe=e=>String(e??"").trim(),lo=(...e)=>e.map(Pe).find(Boolean)??"",Vt=e=>Pe(e).toLowerCase().replace(/\s+/g,""),io=e=>Pe(e).replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,"");function co(e,t){const a=Vt(t);return a?e.find(d=>[d.subject_name,d.subject_code,d.code].some(L=>Vt(L)===a))??null:null}function po({teacher:e,subjects:t,periods:a,academicYear:d,semester:L,hasFriday:q}){const H=t.map(p=>({subject_code:p.subject_code??p.code??"",subject_name:p.subject_name??""})).filter(p=>p.subject_code||p.subject_name),v=a.map(p=>({period_no:p.period_no,time:String(p.start_time??"").slice(0,5)+"-"+String(p.end_time??"").slice(0,5)}));return["คุณเป็นผู้ช่วยแปลงภาพตารางสอนของโรงเรียนเป็น JSON สำหรับระบบ ปพ.5 ออนไลน์","ครูจะอัปโหลดภาพตารางสอนจากระบบดูแลของโรงเรียนให้คุณอ่าน ภาพอาจมีหลายวัน หลายคาบ และช่องที่รวมหลายคาบเข้าด้วยกัน","","ข้อควรตรวจสอบจากภาพ:","- ต้องอ่านทั้งตาราง ไม่ใช่เฉพาะบางช่อง","- ต้องใช้หัวคอลัมน์วันและคอลัมน์คาบ/เวลาเป็นตัวอ้างอิงทุกแถว",q?"- หากมีคาบสอนวันศุกร์ ต้องอ่านและส่งข้อมูลวันศุกร์มาด้วย ห้ามตัดคอลัมน์วันศุกร์ออก":"- ตารางระบบนี้เปิดใช้งานถึงวันพฤหัสบดี ไม่ต้องสร้างรายการวันศุกร์","- ช่องที่รวมหลายคาบต่อเนื่อง ให้ใช้ span_periods เป็นจำนวนคาบที่รวมกัน","- ช่องว่างไม่ต้องสร้างรายการ","- รายการประชุมหรือกิจกรรมพิเศษให้ใส่ subject_name เป็นชื่อประชุม/กิจกรรม, subject_id เป็น null และ class_name เป็นค่าว่างได้เมื่อไม่มีห้อง","- class_name ใช้เก็บห้องเรียน/กลุ่มเรียน/สถานที่ถ้ามี เป็นข้อมูลเสริมไม่บังคับ หากในภาพไม่มีห้องหรือสถานที่ให้ส่ง class_name หรือ location เป็นค่าว่าง โดยห้ามเดา","","กติกาสำคัญ:","- สกัดเฉพาะรายการจากภาพ ห้ามเดาชื่อวิชา ห้องเรียน วัน หรือคาบที่มองไม่เห็น","- ใช้ชื่อวิชาและรหัสวิชาจากรายการอ้างอิงเมื่อจับคู่ได้ แต่ห้ามแต่ง subject_id เอง","- ใช้ day_of_week: 0=อาทิตย์, 1=จันทร์, 2=อังคาร, 3=พุธ, 4=พฤหัส, 5=ศุกร์","- period_no ต้องตรงกับรายการคาบ/เวลาที่ระบบให้ไว้","- รวมวิชาและห้องเดียวกันคนละวันไว้ใน groups เดียวกันได้ แต่ต้องแยก sessions ตามวันและคาบ","","บริบทระบบ: ครู "+(Pe(e==null?void 0:e.full_name)||"-")+" · ภาคเรียน "+L+"/"+d,"คาบที่ระบบรองรับ: "+JSON.stringify(v),"รายวิชาที่ครูมีในระบบ: "+JSON.stringify(H),"","ตอบกลับเป็น JSON โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย ```json และปิดด้วย ```) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีคำอธิบายก่อนหรือหลังกล่อง ตาม schema นี้:",JSON.stringify({schema_version:$s,type:"teacher_schedule",academic_year:d,semester:L,groups:[{subject_name:"คณิตศาสตร์พื้นฐาน",class_name:"ม.6/2",teacher_name:Pe(e==null?void 0:e.full_name),sessions:[{day_of_week:1,period_no:1,span_periods:2}]},{subject_name:"ประชุมครู",subject_id:null,class_name:"",location:"",teacher_name:Pe(e==null?void 0:e.full_name),sessions:[{day_of_week:1,period_no:5,span_periods:1}]}]},null,2)].join(`
`)}function uo(e,{subjects:t,periods:a,hasFriday:d}){let L;try{L=JSON.parse(io(e))}catch{throw new Error("JSON ไม่ถูกต้อง กรุณาคัดลอกเฉพาะโค้ด JSON และตรวจเครื่องหมายให้ครบ")}if((L==null?void 0:L.schema_version)!==$s||(L==null?void 0:L.type)!=="teacher_schedule")throw new Error("ต้องเป็น JSON ตารางสอนประเภท teacher_schedule และ schema pp5.teacher_schedule.v1");if(!Array.isArray(L.groups)||!L.groups.length)throw new Error("JSON ต้องมี groups อย่างน้อย 1 กลุ่ม");const q=a.map(v=>Number(v.period_no)).filter(Number.isInteger);if(!q.length)throw new Error("ยังไม่มีรายการคาบเรียนในระบบให้ตรวจสอบ");const H=L.groups.map((v,p)=>{const B=Pe(v==null?void 0:v.subject_name),R=lo(v==null?void 0:v.class_name,v==null?void 0:v.room_name,v==null?void 0:v.room,v==null?void 0:v.location,v==null?void 0:v.venue);if(!B)throw new Error(`กลุ่มที่ ${p+1} ต้องระบุชื่อวิชาหรือชื่อกิจกรรม (ห้องเรียนไม่บังคับ)`);if(!Array.isArray(v==null?void 0:v.sessions)||!v.sessions.length)throw new Error(`กลุ่มที่ ${p+1} ต้องมี sessions`);const Q=co(t,B),j=v.sessions.map((b,O)=>{const G=Number(b==null?void 0:b.day_of_week),ne=Number(b==null?void 0:b.period_no),ae=Number((b==null?void 0:b.span_periods)??1);if(!Number.isInteger(G)||G<0||G>5||!d&&G===5)throw new Error(`กลุ่มที่ ${p+1} ครั้งที่ ${O+1} มีวันเรียนไม่ถูกต้อง`);if(!Number.isInteger(ne)||!q.includes(ne))throw new Error(`กลุ่มที่ ${p+1} ครั้งที่ ${O+1} มีหมายเลขคาบไม่ตรงกับระบบ`);if(!Number.isInteger(ae)||ae<1||ae>4||!Array.from({length:ae},(V,ie)=>ne+ie).every(V=>q.includes(V)))throw new Error(`กลุ่มที่ ${p+1} ครั้งที่ ${O+1} มี span_periods ไม่ถูกต้อง`);return{day_of_week:G,period_no:ne,span_periods:ae}});return{subject_name:B,class_name:R,teacher_name:Pe(v==null?void 0:v.teacher_name),subject_id:(Q==null?void 0:Q.id)??null,sessions:j}});return{...L,groups:H}}function mo({teacher:e,subjects:t=[],periods:a=[],academicYear:d,semester:L,cfg:q={},onImport:H}){var ne;(ne=document.getElementById("external-schedule-ai"))==null||ne.remove();const v=q.hasFriday===!0||q.hasFriday==="true"||q.hasFriday===1||q.hasFriday==="1",p=document.createElement("div");p.id="external-schedule-ai",p.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",p.innerHTML=['<div class="bg-white w-full max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[94vh]">','  <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">','    <div class="flex-1"><h3 class="font-bold text-gray-800">✨ ใช้ AI ของฉันสร้างตารางสอน</h3><p class="text-xs text-gray-400 mt-0.5">คัดลอก Prompt ไปใช้กับ AI ที่ครูเลือก แล้วนำ JSON กลับมาตรวจสอบในระบบ</p></div>','    <button type="button" data-close class="text-gray-400 hover:text-gray-600 text-xl">✕</button>',"  </div>",'  <div class="overflow-auto flex-1 px-5 py-4 space-y-4">','    <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 text-xs text-sky-800 leading-relaxed">','      <p class="font-bold mb-1">📸 วิธีใช้งาน</p>','      <ol class="list-decimal pl-5 space-y-1"><li>เปิดตารางสอนจากระบบดูแลของโรงเรียน แล้วแคปหน้าจอให้เห็นตารางทั้งหมด</li><li>ภาพต้องเห็นคอลัมน์คาบ/เวลาและหัววันครบทุกวัน</li><li>ถ้าครูมีคาบสอนวันศุกร์ ต้องเห็นคอลัมน์วันศุกร์ในภาพด้วย ห้ามตัดออก</li><li>นำภาพนี้พร้อม Prompt ด้านล่างไปสั่ง AI ของครู แล้วคัดลอก JSON กลับมาวาง</li></ol>',"    </div>",'    <div class="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">⚠️ ระบบจะยังไม่บันทึกตารางจนกว่าครูจะตรวจสอบผลลัพธ์และกดบันทึกแต่ละกลุ่ม</div>','    <div class="flex items-center justify-between gap-2"><label class="text-xs font-bold text-gray-500">Prompt สำหรับนำไปใช้กับ AI</label><div class="flex gap-2"><button type="button" data-generate class="min-h-[40px] px-3 rounded-xl bg-violet-700 text-white text-xs font-bold">⚡ สร้าง Prompt</button><button type="button" data-copy hidden disabled aria-disabled="true" class="min-h-[40px] px-3 rounded-xl border border-violet-200 bg-violet-50 text-violet-700 text-xs font-bold disabled:opacity-40">📋 คัดลอก Prompt</button></div></div>','    <textarea data-prompt rows="15" readonly class="w-full border border-gray-200 rounded-xl p-3 text-[11px] leading-relaxed font-mono bg-gray-50"></textarea>','    <div class="border-t border-gray-100 pt-4">','      <div class="flex items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">วาง JSON ที่ได้จาก AI</label><div class="flex gap-2"><button type="button" data-validate class="min-h-[40px] px-3 rounded-xl border border-violet-200 text-violet-700 text-xs font-bold">🔎 ตรวจ JSON</button><button type="button" data-import class="min-h-[40px] px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold">📥 นำเข้าเพื่อตรวจสอบ</button></div></div>','      <textarea data-json rows="12" class="w-full border border-gray-200 rounded-xl p-3 text-[11px] leading-relaxed font-mono" placeholder="วาง JSON ประเภท teacher_schedule ที่นี่"></textarea>','      <div data-result class="hidden mt-2 rounded-xl px-3 py-2 text-xs"></div>',"    </div>","  </div>","  </div>"].join(""),document.body.appendChild(p);const B=p.querySelector("[data-prompt]"),R=p.querySelector("[data-json]"),Q=p.querySelector("[data-result]"),j=An({copyButton:p.querySelector("[data-copy]")}),b=()=>p.remove(),O=(ae,V)=>{Q.className=`mt-2 rounded-xl px-3 py-2 text-xs ${V?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-red-50 text-red-700 border border-red-100"}`,Q.textContent=ae},G=()=>uo(R.value,{subjects:t,periods:a,hasFriday:v});p.querySelector("[data-close]").addEventListener("click",b),p.addEventListener("click",ae=>{ae.target===p&&b()}),p.querySelector("[data-generate]").addEventListener("click",()=>{B.value=po({teacher:e,subjects:t,periods:a,academicYear:d,semester:L,hasFriday:v}),j.markGenerated(),P("สร้าง Prompt ตารางสอนแล้ว","success")}),p.querySelector("[data-copy]").addEventListener("click",async()=>{if(!j.isReady()){P("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(B.value),P("คัดลอก Prompt ตารางสอนแล้ว","success")}catch{B.select(),document.execCommand("copy"),P("คัดลอก Prompt ตารางสอนแล้ว","success")}}),p.querySelector("[data-validate]").addEventListener("click",()=>{try{const ae=G();O(`JSON ถูกต้อง: ${ae.groups.length} กลุ่มวิชา`,!0)}catch(ae){O(ae.message,!1)}}),p.querySelector("[data-import]").addEventListener("click",async()=>{try{const ae=G();b(),await H(ae.groups)}catch(ae){O(ae.message,!1)}})}const Ut="pp5_free_timer_count",Qt="pp5_timer_effect_style",dt="pp5_timer_sound",Jt="pp5_timer_break_step",Wt="pp5_timer_ambient",Yt="pp5_timer_font_scale",Kt="pp5_timer_show_ambient_countdown",Xe="pp5_timer_last_countdown_sec",Xt="pp5_timer_last_break_sec",xo="alarm-bell.mp3",Tt=[{key:"forest-wind",label:"🌲 ลมป่า",file:"forest-wind.mp3"},{key:"calm-ocean-breeze",label:"🌊 สายลมทะเล",file:"calm-ocean-breeze.mp3"},{key:"path-to-jannah",label:"🕌 Path to Jannah",file:"path-to-jannah.mp3"},{key:"waterfall-nature",label:"💦 น้ำตกธรรมชาติ",file:"waterfall-nature.mp3"},{key:"calm",label:"🧘 สงบ",file:"calm.mp3"},{key:"meditation-01",label:"🎐 สมาธิ 01",file:"meditation-01.mp3"},{key:"meditation-02",label:"🎐 สมาธิ 02",file:"meditation-02.mp3"},{key:"nature-piano",label:"🎹 เปียโนธรรมชาติ",file:"nature-piano.mp3"},{key:"solo-piano",label:"🎹 เปียโนเดี่ยว",file:"solo-piano.mp3"},{key:"rain",label:"🌧️ เสียงฝน",file:"rain.mp3"}];function At(e){return`/pp5online/sounds/${e}`}function ks(){var t;const e=parseInt((t=window._pp5SystemCfg)==null?void 0:t.freeTimerLimit,10);return Number.isFinite(e)?e:1}function Ze(e,t,a){a=Math.max(0,Math.min(1,a));const d=[1,3,5].map(H=>parseInt(e.slice(H,H+2),16)),L=[1,3,5].map(H=>parseInt(t.slice(H,H+2),16));return`rgb(${d.map((H,v)=>Math.round(H+(L[v]-H)*a)).join(",")})`}function wt(e){const t=Math.max(0,Math.round(e)),a=Math.floor(t/3600),d=Math.floor(t%3600/60),L=t%60;return a>0?`${String(a).padStart(2,"0")}:${String(d).padStart(2,"0")}:${String(L).padStart(2,"0")}`:`${String(d).padStart(2,"0")}:${String(L).padStart(2,"0")}`}let Te=null;function go(e,t,a="sine",d=.18){if(localStorage.getItem(dt)!=="off")try{Te=Te||new(window.AudioContext||window.webkitAudioContext),Te.state==="suspended"&&Te.resume();const L=Te.createOscillator(),q=Te.createGain();L.type=a,L.frequency.value=e,q.gain.value=d,L.connect(q),q.connect(Te.destination),L.start(),q.gain.exponentialRampToValueAtTime(1e-4,Te.currentTime+t/1e3),L.stop(Te.currentTime+t/1e3)}catch{}}const bo=()=>go(880,120,"square",.12);let Qe=null;function fo(){if(localStorage.getItem(dt)!=="off")try{Qe=Qe||new Audio(At(xo)),Qe.currentTime=0,Qe.volume=.7,Qe.play().catch(()=>{})}catch{}}let Re=null,ze=null;function Ne(){if(Re)try{Re.pause()}catch{}Re=null,ze=null}function yo(e){if(ze===e){Ne();return}Ne();const t=Tt.find(a=>a.key===e);if(t)try{Re=new Audio(At(t.file)),Re.volume=.5,Re.play().catch(()=>{}),Re.addEventListener("ended",()=>{ze===e&&(ze=null,Re=null)}),ze=e}catch{}}function vo(){const e=document.createElement("div");e.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="tm-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-700 text-lg">สิทธิ์จับเวลาทดลองใช้งานครบแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์จับเวลาเต็มจอจำกัดการทดลองใช้ฟรี ${ks()} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
      <button id="tm-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(e),e.querySelector("#tm-paywall-close").addEventListener("click",()=>e.remove()),e.querySelector("#tm-upgrade").addEventListener("click",()=>{var t;e.remove(),(t=document.getElementById("btn-donate-float"))==null||t.click()})}function ho(e,t,a){var ae;(ae=document.getElementById("timer-setup-modal"))==null||ae.remove(),Ne();let d="countdown",L=localStorage.getItem(Qt)||"shake",q=localStorage.getItem(dt)!=="off",H=localStorage.getItem(Jt)||"60",v=localStorage.getItem(Wt)||"none",p=localStorage.getItem(Kt)==="on";const B=V=>{const ie=parseInt(localStorage.getItem(V),10);return Number.isFinite(ie)&&ie>0?ie:300};let R=Math.floor(B(Xe)/60),Q=B(Xe)%60;const j=document.createElement("div");j.id="timer-setup-modal",j.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",document.body.appendChild(j);const b=[1,3,5,10,15,20],O=[{key:"countdown",icon:"⏱️",label:"นับถอยหลัง",sub:"คุมเวลากิจกรรม",grad:"linear-gradient(135deg,#10b981,#0ea5e9);"},{key:"break",icon:"☕",label:"พักเบรค",sub:"มืด→สว่างเตือนหมดเวลา",grad:"linear-gradient(135deg,#334155,#64748b);"},{key:"stopwatch",icon:"⏳",label:"นับเวลา",sub:"นับขึ้นไม่จำกัด",grad:"linear-gradient(135deg,#6366f1,#a855f7);"}];function G(){return`
      <div>
        <p class="text-xs font-semibold text-gray-500 mb-1.5">🎵 เสียงประกอบ <span class="font-normal">(คลิกเพื่อฟังตัวอย่าง คลิกซ้ำเพื่อหยุด)</span></p>
        <div class="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
          <button data-ambient="none" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${v==="none"?"bg-gray-700 text-white":"bg-gray-100 text-gray-600"}">🔇 ไม่มีเสียง</button>
          ${Tt.map(V=>`<button data-ambient="${V.key}" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${v===V.key?"bg-teal-600 text-white":"bg-gray-100 text-gray-600"}">${V.label}${ze===V.key?" ▶️":""}</button>`).join("")}
        </div>
      </div>`}function ne(){var T,C;j.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[94vh] flex flex-col">
        <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="min-w-0">
            <h3 class="text-white font-bold text-base">⏱️ จับเวลา</h3>
            <p class="text-white/80 text-xs mt-0.5 truncate">${t!=null&&t.class_name?t.class_name:""}</p>
          </div>
          <button id="tm-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
        </div>
        <div class="p-5 overflow-y-auto flex flex-col gap-4">

          <div class="grid grid-cols-3 gap-1.5">
            ${O.map(w=>`
              <button data-mode="${w.key}" class="tm-mode-btn py-2.5 px-1 rounded-2xl text-xs font-bold transition ${d===w.key?"text-white":"bg-gray-100 text-gray-500"}"
                style="${d===w.key?`background:${w.grad}`:""}">${w.icon}<br>${w.label}<br><span class="font-normal text-[10px] opacity-80">${w.sub}</span></button>
            `).join("")}
          </div>

          ${d!=="stopwatch"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">ระยะเวลา</p>
            <div class="flex flex-wrap gap-1.5">
              ${b.map(w=>`<button data-min="${w}" class="tm-preset-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition ${R===w&&Q===0?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}">${w} นาที</button>`).join("")}
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <input id="tm-custom-min" type="number" min="0" max="180" value="${R}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">นาที</span>
              <input id="tm-custom-sec" type="number" min="0" max="59" value="${Q}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">วินาที</span>
            </div>
          </div>
          `:""}

          ${d==="countdown"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">เอฟเฟกต์ตอนใกล้หมดเวลา</p>
            <div class="flex gap-2">
              <button data-eff="shake" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${L==="shake"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">📳 สั่น</button>
              <button data-eff="scale" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${L==="scale"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">🔍 ขยาย</button>
            </div>
          </div>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-sound" type="checkbox" ${q?"checked":""} class="w-4 h-4 rounded" />
            🔊 เปิดเสียงตอนนับถอยหลัง/หมดเวลา (เสียงกริ่งนาฬิกาปลุก)
          </label>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-show-ambient" type="checkbox" ${p?"checked":""} class="w-4 h-4 rounded" />
            🎵 แสดงตัวเลือกเสียงประกอบในโหมดนับถอยหลังด้วย
          </label>
          ${p?G():""}
          `:""}

          ${d==="break"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">หน่วยปรับเวลาระหว่างเบรค</p>
            <div class="flex gap-2">
              <button data-step="60" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${H==="60"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±1 นาที</button>
              <button data-step="30" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${H==="30"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±30 วินาที</button>
            </div>
          </div>
          ${G()}
          `:""}

          <button id="tm-start" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]"
            style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">▶️ เริ่มจับเวลา</button>
        </div>
      </div>`,j.querySelector("#tm-close").addEventListener("click",()=>{Ne(),j.remove()}),j.querySelectorAll(".tm-mode-btn").forEach(w=>w.addEventListener("click",()=>{if(d=w.dataset.mode,Ne(),d!=="stopwatch"){const J=B(d==="break"?Xt:Xe);R=Math.floor(J/60),Q=J%60}ne()})),j.querySelectorAll(".tm-preset-btn").forEach(w=>w.addEventListener("click",()=>{R=parseInt(w.dataset.min,10),Q=0,ne()})),(T=j.querySelector("#tm-custom-min"))==null||T.addEventListener("change",w=>{const J=parseInt(w.target.value,10);Number.isFinite(J)&&J>=0&&(R=J)}),(C=j.querySelector("#tm-custom-sec"))==null||C.addEventListener("change",w=>{const J=parseInt(w.target.value,10);Number.isFinite(J)&&J>=0&&(Q=Math.min(59,J))}),j.querySelectorAll(".tm-eff-btn").forEach(w=>w.addEventListener("click",()=>{L=w.dataset.eff,localStorage.setItem(Qt,L),ne()})),j.querySelectorAll(".tm-step-btn").forEach(w=>w.addEventListener("click",()=>{H=w.dataset.step,localStorage.setItem(Jt,H),ne()})),j.querySelectorAll(".tm-ambient-btn").forEach(w=>w.addEventListener("click",()=>{v=w.dataset.ambient,localStorage.setItem(Wt,v),v==="none"?Ne():yo(v),ne()}));const V=j.querySelector("#tm-sound");V&&V.addEventListener("change",w=>localStorage.setItem(dt,w.target.checked?"on":"off"));const ie=j.querySelector("#tm-show-ambient");ie&&ie.addEventListener("change",w=>{p=w.target.checked,localStorage.setItem(Kt,p?"on":"off"),ne()}),j.querySelector("#tm-start").addEventListener("click",()=>{var c,r;const w=parseInt((c=j.querySelector("#tm-custom-min"))==null?void 0:c.value,10),J=parseInt((r=j.querySelector("#tm-custom-sec"))==null?void 0:r.value,10);Number.isFinite(w)&&w>=0&&(R=w),Number.isFinite(J)&&J>=0&&(Q=Math.min(59,J));const D=R*60+Q;if(d!=="stopwatch"&&D<=0){P("กรุณาตั้งเวลาอย่างน้อย 1 วินาที","warning");return}if(!a){const S=parseInt(localStorage.getItem(Ut)||"0",10);if(S>=ks()){vo();return}localStorage.setItem(Ut,String(S+1))}d!=="stopwatch"&&localStorage.setItem(d==="break"?Xt:Xe,String(D));const M=d==="break"||d==="countdown"&&p?v:"none";Ne(),j.remove(),wo(d,d==="stopwatch"?0:D,{effectStyle:L,breakStepSec:parseInt(H,10),ambient:M})})}ne(),j.addEventListener("click",V=>{V.target===j&&(Ne(),j.remove())})}function wo(e,t,{effectStyle:a,breakStepSec:d,ambient:L}){var T,C;(T=document.getElementById("timer-fullscreen-overlay"))==null||T.remove();let q=t,H=t,v=0,p=!1,B=!1,R=null,Q=-1,j=parseFloat(localStorage.getItem(Yt))||1,b=null;if(L&&L!=="none"){const w=Tt.find(J=>J.key===L);if(w)try{b=new Audio(At(w.file)),b.loop=!0,b.volume=.45,b.play().catch(()=>{})}catch{}}const O=document.createElement("div");O.id="timer-fullscreen-overlay",O.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:background-color .6s linear;",O.innerHTML=`
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
      <input id="tm-size-slider" type="range" min="0.5" max="1.8" step="0.1" value="${j}" />
    </div>
    <div id="tm-digits" class="tm-digits" style="font-size:calc(min(28vw,220px) * ${j});line-height:1;">${wt(e==="stopwatch"?0:H)}</div>
    <div id="tm-sub" style="margin-top:12px;font-size:18px;opacity:.75;"></div>
    <div id="tm-mode-controls" style="display:none;margin-top:28px;gap:16px;align-items:center;"></div>
  `,document.body.appendChild(O);try{(C=O.requestFullscreen)==null||C.call(O)}catch{}const G=O.querySelector("#tm-digits"),ne=O.querySelector("#tm-sub");O.querySelector("#tm-size-slider").addEventListener("input",w=>{j=parseFloat(w.target.value),localStorage.setItem(Yt,String(j)),G.style.fontSize=`calc(min(28vw,220px) * ${j})`});function ae(){var w;if(R&&cancelAnimationFrame(R),b)try{b.pause()}catch{}document.fullscreenElement&&((w=document.exitFullscreen)==null||w.call(document).catch(()=>{})),O.remove()}if(O.querySelector("#tm-exit").addEventListener("click",ae),e==="break"){const w=O.querySelector("#tm-mode-controls");w.style.display="flex";const J=d===30?"30 วิ":"1 นาที";w.innerHTML=`
      <button id="tm-minus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">− ${J}</button>
      <button id="tm-plus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">+ ${J}</button>
    `,w.querySelector("#tm-minus").addEventListener("click",()=>{H=Math.max(0,H-d)}),w.querySelector("#tm-plus").addEventListener("click",()=>{H+=d,q=Math.max(q,H)}),ne.textContent="พักเบรค — จอสว่างเต็มที่ = หมดเวลาพัก"}else if(e==="stopwatch"){const w=O.querySelector("#tm-mode-controls");w.style.display="flex",w.innerHTML=`
      <button id="tm-pause" style="background:rgba(0,0,0,.15);border:none;padding:12px 26px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">⏸️ หยุดชั่วคราว</button>
    `;const J=w.querySelector("#tm-pause");J.addEventListener("click",()=>{B=!B,J.textContent=B?"▶️ เล่นต่อ":"⏸️ หยุดชั่วคราว"}),O.style.backgroundColor="#1e293b",G.style.color="#ffffff",ne.textContent="นับเวลา"}else ne.textContent="นับถอยหลัง";let V=performance.now();function ie(w){const J=(w-V)/1e3;if(V=w,e==="stopwatch"){B||(v+=J,G.textContent=wt(v)),R=requestAnimationFrame(ie);return}if(!p){H=Math.max(0,H-J);const D=Math.ceil(H),M=q>0?H/q:0,c=1-M;if(G.textContent=wt(H),e==="break")O.style.backgroundColor=Ze("#0f172a","#fef9c3",c),G.style.color=Ze("#94a3b8","#1e293b",c),G.style.animation="";else{let r;if(M>.3?r=Ze("#f59e0b","#10b981",(M-.3)/.7):M>.1?r=Ze("#ef4444","#f59e0b",(M-.1)/.2):r="#ef4444",O.style.backgroundColor=r,G.style.color="#ffffff",M<=.3){const S=1-Math.min(1,M/.3),F=Math.max(.18,.9-S*.7);G.style.animation=`${a==="shake"?"tm-shake":"tm-scale"} ${F}s ease-in-out infinite`}else G.style.animation="";D!==Q&&(Q=D,D>0&&D<=3&&bo())}H<=0&&(p=!0,G.textContent="00:00",G.style.animation="",e==="break"?(O.style.backgroundColor="#fef9c3",G.style.color="#1e293b",ne.textContent="หมดเวลาพักเบรคแล้ว"):(ne.textContent="⏰ หมดเวลา!",fo(),Dn().then(()=>Fn("mid")).catch(()=>{})))}R=requestAnimationFrame(ie)}R=requestAnimationFrame(ie)}const _o="pp5_exam_docs_pending_class_id";async function $o(e,t,a){var q,H;(q=document.getElementById("teacher-regrade-preview-modal"))==null||q.remove();const d=document.createElement("div");d.id="teacher-regrade-preview-modal",d.className="fixed inset-0 z-[240] flex items-center justify-center bg-black/55 p-4",d.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[88vh] flex flex-col overflow-hidden">
    <div class="px-5 py-4 border-b border-gray-100 flex items-start justify-between gap-3">
      <div class="min-w-0">
        <p class="text-[11px] font-bold text-pink-600">📤 ส่งเข้าระบบแก้ค้างเก่า</p>
        <h3 class="mt-1 font-extrabold text-gray-800 truncate">กำลังตรวจสอบรายชื่อนักเรียน...</h3>
        <p class="text-xs text-gray-400 mt-1">${h(((H=e.master_subjects)==null?void 0:H.subject_name)??"")} · ห้อง ${h(e.class_name??"")}</p>
      </div>
      <button data-regrade-preview-close type="button" class="w-9 h-9 flex-shrink-0 rounded-xl border border-gray-200 text-gray-400 hover:text-gray-700">✕</button>
    </div>
    <div class="flex-1 overflow-y-auto p-5 text-center text-sm text-gray-400">กำลังคำนวณเกรดจากข้อมูลล่าสุด...</div>
  </div>`,document.body.appendChild(d);const L=()=>d.remove();d.querySelector("[data-regrade-preview-close]").addEventListener("click",L),d.addEventListener("click",v=>{v.target===d&&L()});try{const v=await qn(e.id);if(v.already_submitted||(t==null?void 0:t.status)==="submitted"){L(),P("ห้องเรียนนี้ส่งเข้าระบบแก้ค้างเก่าแล้ว","info");return}const p=Array.isArray(v.students)?v.students:[],B=d.querySelector(".flex-1");B.className="flex-1 overflow-y-auto p-5 space-y-4",B.innerHTML=`
      <div class="rounded-xl border ${p.length?"border-amber-200 bg-amber-50":"border-emerald-200 bg-emerald-50"} p-3">
        <p class="text-sm font-bold ${p.length?"text-amber-800":"text-emerald-800"}">
          ${p.length?`พบ ${p.length} คนที่มีผลการเรียนไม่ปกติ`:"ไม่พบผู้เรียนที่มีผลการเรียนไม่ปกติ"}
        </p>
        <p class="text-xs mt-1 ${p.length?"text-amber-700":"text-emerald-700"}">
          ระบบจะส่งสรุปของห้องนี้เข้าระบบแก้ค้างเก่า และบันทึกสถานะการส่งไว้ที่การ์ดวิชา
        </p>
      </div>
      ${p.length?`<div class="rounded-xl border border-gray-200 overflow-hidden">
        <div class="bg-gray-50 px-3 py-2 text-xs font-bold text-gray-600">รายชื่อนักเรียนที่ต้องตรวจสอบ</div>
        <div class="divide-y divide-gray-100 max-h-64 overflow-y-auto">
          ${p.map((R,Q)=>`<div class="px-3 py-2.5 flex items-center justify-between gap-3 text-sm">
            <div class="min-w-0"><span class="text-xs text-gray-400 mr-2">${Q+1}.</span><span class="font-semibold text-gray-800">${h(R.full_name??"ไม่ระบุชื่อ")}</span><span class="block ml-5 text-[11px] text-gray-400">รหัส ${h(R.student_code??"—")}</span></div>
            <span class="flex-shrink-0 px-2 py-1 rounded-lg text-xs font-bold ${R.special_result?"bg-orange-100 text-orange-700":"bg-red-100 text-red-700"}">${h(R.grade_failed_at??"0")}</span>
          </div>`).join("")}
        </div>
      </div>`:""}
      <div class="rounded-xl bg-blue-50 border border-blue-100 px-3 py-2.5 text-xs text-blue-800">
        ℹ️ การส่งจะใช้ข้อมูลเกรดล่าสุดจากฐานข้อมูล และจะไม่ส่งซ้ำรายการเดิม
      </div>
      <div class="flex gap-2 pt-1">
        <button data-regrade-preview-cancel type="button" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button data-regrade-preview-submit type="button" class="flex-1 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">ยืนยันส่งข้อมูล</button>
      </div>`,B.querySelector("[data-regrade-preview-cancel]").addEventListener("click",L),B.querySelector("[data-regrade-preview-submit]").addEventListener("click",async R=>{const Q=R.currentTarget;Q.disabled=!0,Q.textContent="กำลังส่งข้อมูล...";try{const j=await jn(e.id,[]);L(),P(`ส่งข้อมูลสำเร็จ ✅ พบ ${j.total_failing??p.length} คน · เพิ่มรายการใหม่ ${j.submitted??0} คน`,"success"),await(a==null?void 0:a(j))}catch(j){P("ส่งข้อมูลไม่สำเร็จ: "+ce(j),"error"),Q.disabled=!1,Q.textContent="ยืนยันส่งข้อมูล"}})}catch(v){d.querySelector(".flex-1").innerHTML=`<div class="text-center py-8"><p class="text-3xl mb-2">⚠️</p><p class="text-sm text-red-600">ตรวจสอบข้อมูลไม่สำเร็จ</p><p class="text-xs text-gray-400 mt-1">${h(ce(v))}</p><button data-regrade-preview-error-close type="button" class="mt-4 px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600">ปิด</button></div>`,d.querySelector("[data-regrade-preview-error-close]").addEventListener("click",L)}}function Ss(e){window._pendingExamDocClassId=String(e);try{sessionStorage.setItem(_o,String(e))}catch{}if(typeof window._navTo=="function"){window._navTo("exam-docs");return}P("ไม่พบเมนูเอกสารช่วงสอบ กรุณาเปิดจากหน้าเมนครู","warning")}async function Es(e,t){var d,L,q,H,v;const a=(d=window._classCache)==null?void 0:d[t];if(a){je("my-classes"),Ie("จัดการนักเรียน","class-students"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายชื่อนักเรียน...
  </div>`);try{const[p,B]=await Promise.all([Vs(t),$e().catch(()=>({}))]),R=`classRosterView_${t}`,Q=localStorage.getItem(R)||"table",j=p.filter(c=>c.is_active).length,b=a.master_subjects??{},O=["AGM","AGMVOC"].includes(b.subject_group),G=b.subject_group==="ACDMVOC",ne=B.showStudentHouseColor!=="false",ae=B.showStudentSportsShirtSize!=="false",V=["ข.ร.","ข.ส.","ม.ส.","ข.ป."],ie=c=>`
      <select data-special-enrollment="${c.enrollment_id}" onclick="event.stopPropagation()"
        class="border border-gray-200 rounded-lg px-1.5 py-1 text-xs bg-white text-gray-600">
        <option value="" ${c.special_result?"":"selected"}>ปกติ</option>
        ${V.map(r=>`<option value="${r}" ${c.special_result===r?"selected":""}>${r}</option>`).join("")}
      </select>`,T=c=>O?c.main_room||c.religion_room||"—":c.religion_room||c.main_room||"—",C=c=>`
      ${ne?`<span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">สี: ${h(c.house_color||"—")}</span>`:""}
      ${ae?`<span class="inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-medium">เสื้อ: ${h(c.sports_shirt_size||"—")}</span>`:""}`,w=(c,r="w-12 h-16")=>c.image_url?`<img src="${h(c.image_url)}" class="${r} rounded-2xl object-cover bg-gray-100 border border-gray-100 shadow-sm" loading="lazy" />`:`<div class="${r} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold">${h((c.full_name||"?").trim().slice(0,1))}</div>`,J=p.map((c,r)=>`
      <tr class="student-status-target cursor-pointer transition ${c.is_active?"bg-white hover:bg-emerald-50/40":"bg-gray-50 text-gray-400 hover:bg-gray-100"}"
        data-enrollment-id="${c.enrollment_id}" data-next="${c.is_active?"false":"true"}" data-name="${h(c.full_name)}">
        <td class="px-3 py-2 text-center text-xs text-gray-400">${r+1}</td>
        <td class="px-3 py-2">${w(c)}</td>
        <td class="px-3 py-2 font-mono text-sm">${h(c.student_code)}</td>
        <td class="px-3 py-2">
          <p class="font-semibold text-gray-800 ${c.is_active?"":"line-through text-gray-400"}">${h(c.full_name)}</p>
          <p class="text-xs text-gray-400">${h(T(c))}</p>
          <div class="mt-1 flex flex-wrap gap-1">${C(c)}</div>
        </td>
        ${ne?`<td class="px-3 py-2 text-center text-sm text-gray-600">${h(c.house_color||"—")}</td>`:""}
        ${ae?`<td class="px-3 py-2 text-center text-sm text-gray-600">${h(c.sports_shirt_size||"—")}</td>`:""}
        ${G?`<td class="px-3 py-2 text-center">${ie(c)}</td>`:""}
        <td class="px-3 py-2 text-center">
          <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold ${c.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${c.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </td>
      </tr>`).join(""),D=p.map(c=>`
      <button type="button"
        class="student-status-target text-left rounded-2xl border p-4 transition ${c.is_active?"border-emerald-300 bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12),0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.18),0_10px_24px_rgba(16,185,129,0.16)]":"border-gray-300 bg-gray-50 opacity-80 hover:opacity-100"}"
        data-enrollment-id="${c.enrollment_id}" data-next="${c.is_active?"false":"true"}" data-name="${h(c.full_name)}">
        <div class="flex items-start justify-between gap-3">
          ${w(c,"w-20 h-28")}
          <span class="px-2 py-1 rounded-full text-[11px] font-semibold ${c.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${c.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </div>
        <p class="mt-3 font-bold text-gray-800 ${c.is_active?"":"line-through text-gray-400"}">${h(c.full_name)}</p>
        <p class="text-xs font-mono text-sky-700 mt-0.5">${h(c.student_code)}</p>
        <p class="text-xs text-gray-400 mt-0.5">${h(T(c))}</p>
        <div class="mt-2 flex flex-wrap gap-1">${C(c)}</div>
      </button>`).join("");_e(`<div class="animate-fade">
      <div id="students-back-placeholder" class="hidden"></div>
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-gray-700">ทั้งหมด ${p.length} คน · กำลังเรียน ${j} คน</p>
            <p class="text-xs text-gray-400 mt-0.5">ปิดสถานะเมื่อนักเรียนออกกลางคัน ระบบจะไม่ดึงไปเช็คชื่อ/ใบรายชื่อ</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${Q==="table"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="table" title="มุมมองตาราง">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4M3 6h4M3 18h4M17 6h4M17 18h4"/></svg>
              </button>
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${Q==="grid"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="grid" title="มุมมองกริด">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </button>
            </div>
            <button id="students-sync-enroll" class="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700" title="รีเฟรชรายชื่อนักเรียนในห้องนี้ตามข้อมูลล่าสุด">🔄 รีเฟรชรายชื่อ</button>
            <button id="students-add" class="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700">＋ เพิ่มนักเรียน</button>
            <button id="students-roster" class="px-3 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700">🖨️ สร้างใบรายชื่อ</button>
            <button id="students-print-qr" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">🖨️ พิมพ์ QR Code</button>
          </div>
        </div>
        ${p.length?Q==="grid"?`
          <div class="p-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            ${D}
          </div>`:`
          <div class="overflow-auto">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 text-gray-500">
                <tr>
                  <th class="px-3 py-2 text-center w-12">#</th>
                  <th class="px-3 py-2 text-left w-16">รูป</th>
                  <th class="px-3 py-2 text-left w-28">รหัส</th>
                  <th class="px-3 py-2 text-left">นักเรียน</th>
                  ${ne?'<th class="px-3 py-2 text-center w-24">ประจำสี</th>':""}
                  ${ae?'<th class="px-3 py-2 text-center w-28">ไซด์เสื้อ</th>':""}
                  ${G?'<th class="px-3 py-2 text-center w-24">สถานะพิเศษ</th>':""}
                  <th class="px-3 py-2 text-center w-28">สถานะ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">${J}</tbody>
            </table>
          </div>`:`
          <div class="p-12 text-center text-gray-400">
            <p class="text-4xl mb-3">👥</p>
            <p class="font-medium">ยังไม่มีนักเรียนในรายวิชานี้</p>
          </div>`}
      </div>
    </div>`);const M=()=>{var c;return((c=window._loadClassTab)==null?void 0:c.call(window,"students"))??window._openStudentManager(t)};document.querySelectorAll("[data-special-enrollment]").forEach(c=>{c.addEventListener("change",async()=>{try{await Us(c.dataset.specialEnrollment,c.value),P("บันทึกสถานะพิเศษแล้ว","success")}catch(r){P("บันทึกไม่สำเร็จ: "+ce(r),"error")}})}),(L=document.getElementById("students-roster"))==null||L.addEventListener("click",()=>window._openRosterPicker(t)),(q=document.getElementById("students-print-qr"))==null||q.addEventListener("click",()=>{window._pendingQRClassId=t,window._navTo("student-qr-print")}),(H=document.getElementById("students-sync-enroll"))==null||H.addEventListener("click",async c=>{var F;const r=c.currentTarget,S=r.textContent;r.disabled=!0,r.textContent="กำลังรีเฟรช...";try{await Qs(),P("รีเฟรชรายชื่อสำเร็จ","success"),((F=window._loadClassTab)==null?void 0:F.call(window,"students"))??window._openStudentManager(t)}catch{P("รีเฟรชไม่สำเร็จ","error"),r.disabled=!1,r.textContent=S}}),document.querySelectorAll(".student-view-toggle").forEach(c=>{c.addEventListener("click",()=>{localStorage.setItem(R,c.dataset.view),M()})}),document.querySelectorAll(".student-status-target").forEach(c=>{c.addEventListener("click",()=>{var Z;const r=c.dataset.next==="true",S=c.dataset.name||"นักเรียน";(Z=document.getElementById("student-status-confirm"))==null||Z.remove();const F=document.createElement("div");F.id="student-status-confirm",F.className="fixed inset-0 z-[95] bg-white flex flex-col",r?F.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-emerald-100 text-emerald-700">
                ✓
              </div>
              <h3 class="text-2xl font-bold text-gray-800">เปิดสถานะกำลังเรียน?</h3>
              <p class="mt-3 text-gray-500">${h(S)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะกลับมาอยู่ในเช็คชื่อ/ใบรายชื่อของรายวิชานี้</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-700">ยืนยัน</button>
              </div>
            </div>
          </div>`:F.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-red-50 text-red-500 border border-red-100 shadow-sm">
                🗑️
              </div>
              <h3 class="text-2xl font-bold text-gray-900">ลบนักเรียนออกจากห้องเรียนนี้?</h3>
              <p class="mt-3 text-gray-800 font-semibold text-lg">${h(S)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะถูกลบออกจากรายวิชานี้ และระบบซิงก์หรือปุ่มรีเฟรชจะไม่เพิ่มกลับมาอีก<br/>หากต้องการนำกลับ สามารถใช้ปุ่ม “เพิ่มนักเรียน” ได้ภายหลัง</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700">ยืนยันการลบ</button>
              </div>
            </div>
          </div>`,document.body.appendChild(F),F.querySelector("#student-status-cancel").addEventListener("click",()=>F.remove()),F.querySelector("#student-status-ok").addEventListener("click",async()=>{try{r?(await Js(c.dataset.enrollmentId,!0),P("เปิดสถานะกำลังเรียนแล้ว","success")):(await Ws(c.dataset.enrollmentId),P("ลบนักเรียนออกจากห้องเรียนนี้แล้ว","success")),F.remove(),M()}catch(te){P("ดำเนินการไม่สำเร็จ: "+ce(te),"error")}})})}),(v=document.getElementById("students-add"))==null||v.addEventListener("click",()=>{var $;($=document.getElementById("add-student-modal"))==null||$.remove();const c=document.createElement("div");c.id="add-student-modal",c.className="fixed inset-0 z-[90] bg-white flex flex-col animate-fade",c.innerHTML=`
        <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 class="text-xl font-bold text-gray-800">เพิ่มนักเรียนเข้ารายวิชา (หลายคน)</h3>
            <p class="text-xs text-gray-500 mt-1">${h(b.subject_name||"")} · ${h(a.class_name||"")}</p>
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
        </div>`,document.body.appendChild(c);const r=c.querySelector("#add-student-code"),S=c.querySelector("#add-student-search-btn"),F=c.querySelector("#add-student-status"),Z=c.querySelector("#added-students-list"),te=c.querySelector("#added-count");let s=[];function i(){if(te.textContent=s.length,!s.length){Z.innerHTML='<p class="text-xs text-gray-400 italic">ยังไม่มีการเพิ่มในรอบนี้</p>';return}Z.innerHTML=s.map((I,oe)=>`
          <div class="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl animate-fade">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-100 w-5 h-5 flex items-center justify-center rounded-full">${s.length-oe}</span>
            <div class="flex-1">
              <p class="text-sm font-bold text-gray-800">${h(I.full_name)}</p>
              <p class="text-xs font-mono text-gray-500">${h(I.student_code)} · ${h(T(I))}</p>
            </div>
            <span class="text-xs text-emerald-600 font-bold">✓ เพิ่มแล้ว</span>
          </div>
        `).join("")}const l=async()=>{const I=r.value.trim();if(I){F.innerHTML='<span class="text-gray-400">กำลังค้นหาและเพิ่ม...</span>',r.disabled=!0,S.disabled=!0;try{const oe=await Ys(I);if(!oe){F.innerHTML='<span class="text-red-500 font-medium">⚠️ ไม่พบนักเรียนรหัสนี้</span>';return}await Ks(t,oe.id),s.unshift(oe),i(),F.innerHTML=`<span class="text-emerald-600 font-medium">✓ เพิ่ม ${h(oe.full_name)} สำเร็จ!</span>`,r.value=""}catch(oe){F.innerHTML=`<span class="text-red-500 font-medium">⚠️ ${oe.message||"เกิดข้อผิดพลาด"}</span>`}finally{r.disabled=!1,S.disabled=!1,r.focus()}}};c.querySelector("#add-student-close").addEventListener("click",()=>{c.remove(),M()}),S.addEventListener("click",l),r.addEventListener("keydown",I=>{I.key==="Enter"&&(I.preventDefault(),l())}),setTimeout(()=>r.focus(),50)})}catch(p){P("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ce(p),"error"),Le(e)}}}async function Le(e){var t;if(je("my-classes"),Ie("ห้องเรียนของฉัน","classes"),!(e!=null&&e.id)){_e(`<div class="max-w-md mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">⚠️</p>
      <p class="font-medium text-gray-600">ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p>
    </div>`);return}_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[a,d,L,q,H]=await Promise.all([ut((e==null?void 0:e.id)??null),$e().catch(()=>({})),e!=null&&e.id?jt(e.id).catch(()=>[]):Promise.resolve([]),rs().catch(()=>[]),En().catch(()=>({}))]),v=Object.fromEntries(q.map(s=>[s.id,s])),p=parseInt(d.academicYear??2568),B=parseInt(d.semester??1),[R,Q,j]=await Promise.all([e!=null&&e.id?Ve(e.id,p,B).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?qt(e.id).catch(()=>[]):Promise.resolve([]),mt().catch(()=>[])]),b={};Q.forEach(s=>{b[s.class_id]||(b[s.class_id]=[]),b[s.class_id].push(s.teacher_schedule_id)});const O=Object.fromEntries(R.map(s=>[s.id,s])),G=Object.fromEntries(j.map(s=>[s.period_no,s])),ne=Object.fromEntries((L??[]).map(s=>[s.room_key,s.color_hex])),ae=s=>s.academic_year==null||+s.academic_year===p&&+s.semester===B,V=a.filter(ae),ie=Ln(H),T=ie?await Cn(V.map(s=>s.id)).catch(()=>[]):[],C=new Map((T??[]).map(s=>[Number(s.class_id),s])),w=V.map(s=>s.id).filter(Boolean),J=[...new Set(V.map(s=>{var i;return s.course_id??((i=s.master_subjects)==null?void 0:i.id)}).filter(Boolean))],D=Gn(d.semester_start),[M,c]=await Promise.all([w.length?(async()=>{const s=[];for(let l=0;;l+=1e3){const{data:$,error:I}=await rt.from("class_students").select("class_id").in("class_id",w).range(l,l+1e3-1);if(I)throw I;if(s.push(...$??[]),($??[]).length<1e3)break}return s})().catch(s=>(console.warn("[renderMyClasses] โหลดจำนวนนักเรียนไม่สำเร็จ",s),[])):Promise.resolve([]),J.length?rt.from("course_syllabus_items").select("course_id, week_start, week_end, topic, source_json").in("course_id",J).order("week_start",{ascending:!0}).then(({data:s,error:i})=>{if(i)throw i;return s??[]}).catch(s=>(console.warn("[renderMyClasses] โหลดกำหนดการสอนไม่สำเร็จ",s),[])):Promise.resolve([])]),r=M.reduce((s,i)=>(s[i.class_id]=(s[i.class_id]||0)+1,s),{}),S=new Map;c.forEach(s=>{S.has(s.course_id)||S.set(s.course_id,[]),S.get(s.course_id).push(s)}),window._classCache=Object.fromEntries(V.map(s=>[s.id,s])),window._classesFlat=V;const F=new Map;V.forEach(s=>{const i=s.master_subjects??{},l=[s.course_id??i.id??"",i.subject_code??"",i.subject_name??"",i.subject_group??""],$=l.some(Boolean)?l.join("|"):`class-${s.id}`;F.has($)||F.set($,{key:$,masterSubject:i,classes:[]}),F.get($).classes.push(s)});const Z=[...F.values()].map(s=>({...s,classes:s.classes.sort((i,l)=>{const $=Ue(i.id,b,O,G),I=Ue(l.id,b,O,G);return $!==I?$-I:String(i.class_name??"").localeCompare(String(l.class_name??""),"th")})})).sort((s,i)=>{var I,oe;const l=Math.min(...s.classes.map(Y=>Ue(Y.id,b,O,G))),$=Math.min(...i.classes.map(Y=>Ue(Y.id,b,O,G)));return l!==1/0&&$!==1/0&&l!==$?l-$:String(((I=s.masterSubject)==null?void 0:I.subject_name)??"").localeCompare(String(((oe=i.masterSubject)==null?void 0:oe.subject_name)??""),"th")});_e(`<div class="animate-fade">
      ${V.length?`
      <div class="space-y-5">
        ${Z.map(s=>{const i=s.masterSubject??{};return`
          <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full">${i.subject_code??"—"}</span>
                  <h3 class="font-bold text-gray-800 text-base">${i.subject_name??"—"}</h3>
                </div>
                <p class="text-xs text-gray-400 mt-1">${s.classes.length} ห้องเรียนในคอร์สนี้</p>
              </div>
            </div>
            <div class="grid gap-3 p-4 md:grid-cols-2">
        ${s.classes.map(l=>{var se,le,k;const $=l.master_subjects,I=kt(d,l),oe=["AGM","AGMVOC"].includes($==null?void 0:$.subject_group),Y={teacherId:e==null?void 0:e.id,className:l.class_name,subjectName:$==null?void 0:$.subject_name,fallbackId:l.id},o=We(Y,ne);window._classColorCache||(window._classColorCache={}),window._classColorCache[l.id]=o;const f=oe?{text:"กลุ่มวิชาศาสนา",cls:"bg-amber-50 text-amber-700"}:l.skill_group?{text:`กลุ่มทักษะ: ${l.skill_group}`,cls:"bg-blue-50 text-blue-700"}:null,y=l.classroom_id?v[l.classroom_id]:null,n=Ue(l.id,b,O,G),u=l.course_id??($==null?void 0:$.id),x=(S.get(u)??[]).find(m=>{var U;const A=((U=m.source_json)==null?void 0:U.week_type)??"teaching";return D>0&&D>=Number(m.week_start)&&D<=Number(m.week_end??m.week_start)&&A!=="break"}),g=(se=x==null?void 0:x.topic)==null?void 0:se.trim(),E=(()=>{if(!(b[l.id]??[]).length)return`<button onclick="event.stopPropagation();window._openCombinedEdit(${l.id},'schedule')"
                class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium hover:underline transition">🔗 เชื่อมตารางสอน</button>`;if(n===1/0)return'<span class="text-[11px] text-gray-400">📅 ไม่พบข้อมูลตาราง</span>';if(n<=0)return'<span class="text-[11px] text-emerald-600 font-semibold">🟢 กำลังสอนอยู่</span>';if(n<60)return`<span class="text-[11px] text-emerald-600">⏱ สอนในอีก ${Math.round(n)} นาที</span>`;const m=Math.floor(n/60),A=Math.round(n%60);return m<24?`<span class="text-[11px] text-blue-600">⏱ สอนในอีก ${m} ชม. ${A} นาที</span>`:`<span class="text-[11px] text-gray-500">⏱ สอนในอีก ${Math.floor(m/24)} วัน</span>`})(),K=ie?C.get(Number(l.id)):null,W=ie?(K==null?void 0:K.status)==="submitted"?`<div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between gap-2">
                  <span class="text-[11px] font-semibold text-emerald-700">✅ ส่งแก้ค้างเก่าแล้ว${K.submitted_at?` · ${new Date(K.submitted_at).toLocaleDateString("th-TH")}`:""}</span>
                  <span class="text-[10px] text-gray-400">${Number(K.failing_count??0)} คน</span>
                </div>`:`<div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between gap-2">
                  <span class="text-[11px] font-semibold text-amber-700">⏳ ยังไม่ส่งแก้ค้างเก่า</span>
                  <button type="button" data-card-regrade-submit="${l.id}" class="px-2.5 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-[10px] font-bold shadow-sm" onclick="event.stopPropagation()">📤 ส่งข้อมูล</button>
                </div>`:"";return`
          <div class="rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer group"
               style="background:${o.soft}; border-color:${o.border}"
               onclick="window._openClassDetail(${l.id})">
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span class="px-2 py-0.5 bg-white/80 text-emerald-700 text-xs font-mono rounded-full">${($==null?void 0:$.subject_code)??"—"}</span>
                    ${($==null?void 0:$.credit)!=null?`<span class="px-2 py-0.5 bg-white/80 text-gray-500 text-xs rounded-full">${$.credit} หน่วยกิต</span>`:""}
                    ${f?`<span class="px-2 py-0.5 ${f.cls} text-xs rounded-full">${f.text}</span>`:""}
                    ${l.google_sheet_id?'<span class="px-2 py-0.5 bg-white/80 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
                  </div>
                  <h3 class="font-bold text-gray-800 text-base">${($==null?void 0:$.subject_name)??"—"}</h3>
                  <p class="text-sm text-gray-500 mt-0.5">ห้อง: <span class="font-semibold" style="color:${o.text}">${l.class_name}</span>
                    ${y?`<span class="ml-2 text-[11px] text-gray-400">📍 ${y.building} ${y.room_number}</span>`:""}
                  </p>
                  <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500">
                    <span>👥 นักเรียน ${r[l.id]??0} คน</span>
                    ${g?`<span class="min-w-0 truncate" title="${h(g)}">📘 สัปดาห์ ${D}: ${h(g)}</span>`:D>0?`<span class="text-gray-400">📘 ยังไม่มีหัวข้อสัปดาห์ ${D}</span>`:""}
                  </div>
                </div>
                <div class="flex gap-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onclick="event.stopPropagation();window._openClassDashboard(${l.id})"
                    class="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-white/70 rounded-lg transition text-sm" title="Dashboard ห้องเรียน">📈</button>
                  <button onclick="event.stopPropagation();window._openExamDocsForClass(${l.id})"
                    class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-white/70 rounded-lg transition text-sm" title="เอกสารสอบ">🧾</button>
                  <button onclick="event.stopPropagation();window._copyClass(${l.id},'${((le=l.class_name)==null?void 0:le.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-gray-400 hover:text-violet-600 hover:bg-white/70 rounded-lg transition text-sm" title="ทำสำเนาห้องเรียน">📋</button>
                  <button onclick="event.stopPropagation();window._openCombinedEdit(${l.id})"
                    class="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition text-sm" title="แก้ไข">✏️</button>
                  <button onclick="event.stopPropagation();window._deleteClass(${l.id},'${((k=l.class_name)==null?void 0:k.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-red-300 hover:text-red-500 hover:bg-white/70 rounded-lg transition text-sm" title="ลบ">🗑️</button>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between">
                ${E}
                <span class="text-[11px] text-gray-400 group-hover:text-indigo-500 transition">เปิดห้องเรียน →</span>
              </div>
              ${W}
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
    </div>`),document.querySelectorAll("[data-card-regrade-submit]").forEach(s=>{s.addEventListener("click",()=>{var l;const i=(l=window._classCache)==null?void 0:l[Number(s.dataset.cardRegradeSubmit)];i&&$o(i,C.get(Number(i.id)),()=>Le(e))})}),window._openPP5Doc=s=>xs(s),window._openExamDocsForClass=s=>Ss(s),window._openClassDetail=s=>Bt(e,s,{classes:a,scheduleMap:O,linksByClass:b,periodMap:G,classrooms:q,copyCfg:d}),window._openClassDashboard=async s=>{var $;const i=($=window._classCache)==null?void 0:$[s];if(!i)return;const{openClassDashboard:l}=await ye(async()=>{const{openClassDashboard:I}=await import("./teacher-views-dashboard-CjblTm--.js");return{openClassDashboard:I}},__vite__mapDeps([0,1,2,3,4,5]));l(s,i,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})},window._openCombinedEdit=(s,i="info")=>{var $;const l=($=window._classCache)==null?void 0:$[s];l&&qs(e,l,q,R,b,G,O,()=>Le(e),i)},window._assignClassroom=s=>{var Y,o,f;const i=(Y=window._classCache)==null?void 0:Y[s];if(!i)return;const l=[...new Set(q.map(y=>y.building))];(o=document.getElementById("assign-room-modal"))==null||o.remove();const $=document.createElement("div");$.id="assign-room-modal",$.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",$.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">📍 ระบุห้องสอน</h3>
          <p class="text-xs text-gray-400 mb-4">${i.class_name} · ${((f=i.master_subjects)==null?void 0:f.subject_name)??""}</p>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
              <select id="arm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคาร —</option>
                ${l.map(y=>`<option value="${y}">${y}</option>`).join("")}
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
        </div>`,document.body.appendChild($);const I=$.querySelector("#arm-building"),oe=$.querySelector("#arm-room");if(i.classroom_id&&v[i.classroom_id]){const y=v[i.classroom_id];I.value=y.building,I.dispatchEvent(new Event("change"))}I.addEventListener("change",()=>{const y=I.value,n=q.filter(u=>u.building===y);oe.innerHTML='<option value="">— เลือกห้อง —</option>'+n.map(u=>{const x=u.name?`${u.room_number} — ${u.name}`:u.room_number,g=u.id===i.classroom_id?"selected":"";return`<option value="${u.id}" ${g}>${x}</option>`}).join("")}),$.querySelector("#arm-cancel").addEventListener("click",()=>$.remove()),$.querySelector("#arm-save").addEventListener("click",async()=>{var u;const y=$.querySelector("#arm-save"),n=oe.value?parseInt(oe.value):null;y.disabled=!0,y.textContent="⏳";try{await is(s,n),(u=window._classCache)!=null&&u[s]&&(window._classCache[s].classroom_id=n),P("บันทึกห้องสอนแล้ว ✅","success"),$.remove(),Le(e)}catch(x){P("บันทึกไม่สำเร็จ: "+ce(x),"error"),y.disabled=!1,y.textContent="บันทึก"}})},window._openAttendance=s=>{var l;const i=(l=window._classCache)==null?void 0:l[s];i&&Mt(e,i)},window._openGrades=s=>{var l;const i=(l=window._classCache)==null?void 0:l[s];i&&It(e,i)},window._openScoreCols=(s,i)=>{var $;const l=($=window._classCache)==null?void 0:$[s];eo(e,s,i,l)},window._editClass=s=>{var l;const i=(l=window._classCache)==null?void 0:l[s];i&&so(e,i)},window._deleteClass=async(s,i)=>{if(await pt({title:`ลบห้องเรียน "${i}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ls(s),P(`ลบ "${i}" แล้ว`,"success"),Le(e)}catch($){P("ลบไม่สำเร็จ: "+ce($),"error")}},window._copyClass=s=>{var I;const i=(I=window._classCache)==null?void 0:I[s];if(!i)return;const l=i.master_subjects??{},$={id:i.course_id,subject_name:l.subject_name??"—",subject_code:l.subject_code??"",credit:l.credit??"",grade_level:l.grade_level??"",dept:l.dept??i.dept??"",subject_group:l.subject_group??""};to(e,$,{cloneFrom:s,srcSkill:i.skill_group??""})};const te=async(s,i,l="landscape",$="all")=>{try{const[I,oe,Y]=await Promise.all([$e().catch(()=>({})),De(s.id),i==="score"?He(s.id):Promise.resolve([])]),o=$==="ชาย"||$==="หญิง"?$:"ทั้งหมด",f=o==="ทั้งหมด"?oe:oe.filter(_=>String(_.gender||"").trim()===o);if(!f.length){P(`ไม่พบนักเรียน${o==="ทั้งหมด"?"":o}ในห้องนี้`,"warning");return}const y=s.master_subjects??{},n=["ACDMVOC","AGMVOC"].includes(y.subject_group),u=n?I.porworCollegeName||I.samaiSchoolName||"โรงเรียน":I.samaiSchoolName||I.porworCollegeName||"โรงเรียน",x=n?I.porworLogoBwUrl||I.porworLogoUrl||I.samaiLogoBwUrl||I.samaiLogoUrl||"":I.samaiLogoBwUrl||I.samaiLogoUrl||I.porworLogoBwUrl||I.porworLogoUrl||"",g=await Vn(x),E=i==="score"?"ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน":"ใบรายชื่อนักเรียนสำหรับเช็คชื่อ",K=l!=="portrait",W=K?"297mm":"210mm",se=K?"210mm":"297mm",le=Y.map(_=>{const X=_.assignment_name||"-";return`
          <th class="score-col ${X.length>8||Y.length>(K?10:6)?"long":""}">
            <div class="score-label" title="${h(X)}">${h(X)}</div>
            <small>/${h(_.max_score??"")}</small>
          </th>`}).join(""),k=Y.map(()=>'<td class="score-cell"></td>').join(""),m=Array.from({length:12},(_,X)=>`<th class="check-col">${X+1}</th>`).join(""),A=Array.from({length:12},()=>'<td class="check-cell"></td>').join(""),U=f.map((_,X)=>`
          <tr>
            <td class="no">${X+1}</td>
            <td class="code">${h(_.student_code)}</td>
            <td class="name">${h(_.full_name)}</td>
            ${i==="score"?k:A}
            <td class="note"></td>
          </tr>`).join(""),ee=`<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>${h(E)} - ${h(y.subject_name||"")}</title>
  <style>
    @page { size: A4 ${K?"landscape":"portrait"}; margin: 10mm; }
    * { box-sizing: border-box; }
    body { font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; color: #111827; margin: 0; background: #f3f4f6; }
    .page { width: ${W}; min-height: ${se}; margin: 12px auto; padding: 10mm; background: white; }
    .header { display: grid; grid-template-columns: 70px 1fr 150px; align-items: center; gap: 12px; margin-bottom: 10px; }
    .logo-wrap { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: transparent; }
    .logo { width: 58px; height: 58px; object-fit: contain; filter: grayscale(1) contrast(1.18); }
    .school { text-align: center; line-height: 1.3; }
    .school h1 { margin: 0; font-size: 20px; }
    .school h2 { margin: 3px 0 0; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; line-height: 1.7; }
    .meta strong { display: inline-block; min-width: 66px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: ${K?"11px":"10px"}; }
    th, td { border: 1px solid #111827; padding: 3px 4px; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; text-align: center; }
    .no { width: 28px; text-align: center; }
    .code { width: 62px; text-align: center; font-family: monospace; }
    .name { width: ${K?"150px":"120px"}; }
    .check-col, .check-cell { width: ${K?"34px":"24px"}; height: 22px; text-align: center; }
    .score-col, .score-cell { width: ${K?"58px":"42px"}; text-align: center; }
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
      <div class="logo-wrap">${g?`<img class="logo" src="${h(g)}" />`:""}</div>
      <div class="school">
        <h1>${h(u)}</h1>
        <h2>${h(E)}${o==="ทั้งหมด"?"":` (${h(o)})`}</h2>
      </div>
      <div class="meta">
        <div><strong>ภาคเรียน</strong> ${h(I.semester||"")}/${h(I.academicYear||"")}</div>
        <div><strong>ห้อง</strong> ${h(s.class_name||"")}</div>
        <div><strong>รายชื่อ</strong> ${h(o)}</div>
        <div><strong>จำนวน</strong> ${f.length} คน</div>
      </div>
    </section>
    <section class="meta" style="margin-bottom:8px">
      <div><strong>รายวิชา</strong> ${h(y.subject_name||"")}</div>
      <div><strong>รหัสวิชา</strong> ${h(y.subject_code||"")}</div>
      <div><strong>ครูผู้สอน</strong> ${h((e==null?void 0:e.full_name)||"")}</div>
    </section>
    <table>
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="code">รหัส</th>
          <th class="name">ชื่อ-นามสกุล</th>
          ${i==="score"?le:m}
          <th class="note">หมายเหตุ</th>
        </tr>
      </thead>
      <tbody>${U}</tbody>
    </table>
    <section class="signature">
      <div>
        ลงชื่อ ........................................ ครูผู้สอน<br />
        (${h((e==null?void 0:e.full_name)||"")})
      </div>
    </section>
  </main>
</body>
</html>`;In(ee)}catch(I){P("สร้างใบรายชื่อไม่สำเร็จ: "+ce(I),"error")}};window._openRosterPicker=s=>{var oe,Y,o;const i=(oe=window._classCache)==null?void 0:oe[s];if(!i)return;(Y=document.getElementById("roster-picker-modal"))==null||Y.remove();const l=document.createElement("div");l.id="roster-picker-modal",l.className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40",l.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">สร้างใบรายชื่อ</h3>
        <p class="text-xs text-gray-400 mb-4">${h(((o=i.master_subjects)==null?void 0:o.subject_name)||"")} · ${h(i.class_name||"")}</p>
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
      </div>`,document.body.appendChild(l);const $=()=>{var f;return((f=l.querySelector(".roster-orientation:checked"))==null?void 0:f.value)||"landscape"},I=()=>{var f;return((f=l.querySelector(".roster-gender:checked"))==null?void 0:f.value)||"all"};l.querySelectorAll(".roster-orientation").forEach(f=>{f.addEventListener("change",()=>{l.querySelectorAll(".roster-orientation-card").forEach(y=>{y.className="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600"}),f.nextElementSibling.className="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"})}),l.querySelectorAll(".roster-gender").forEach(f=>{f.addEventListener("change",()=>{l.querySelectorAll(".roster-gender-card").forEach(y=>{y.className="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600"}),f.nextElementSibling.className="roster-gender-card block text-center rounded-lg border border-violet-500 bg-violet-50 px-2 py-2 text-sm font-semibold text-violet-700"})}),l.querySelector("#btn-roster-close").addEventListener("click",()=>l.remove()),l.addEventListener("click",f=>{f.target===l&&l.remove()}),l.querySelector("#btn-roster-att").addEventListener("click",()=>{const f=$(),y=I();l.remove(),te(i,"attendance",f,y)}),l.querySelector("#btn-roster-score").addEventListener("click",()=>{const f=$(),y=I();l.remove(),te(i,"score",f,y)})},window._openStudentManager=s=>Es(e,s),window._openClassCopyModal=s=>{var f,y;const i=(f=window._classCache)==null?void 0:f[s];if(!i)return;const l=kt(d,i);if(!(l!=null&&l.id)){P("ยังไม่ได้ตั้งค่าไฟล์ต้นฉบับสำหรับกลุ่มวิชานี้","warning");return}(y=document.getElementById("class-copy-modal"))==null||y.remove();const $=i.master_subjects??{},I=`${$.subject_name||"ปพ5"}_${i.class_name||""}_${(e==null?void 0:e.full_name)||""}`.replace(/\s+/g," ").trim(),oe=(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||"",Y=document.createElement("div");Y.id="class-copy-modal",Y.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",Y.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">🔗 ทำสำเนาชีทสำหรับรายวิชานี้</h3>
        <p class="text-xs text-gray-400 mb-4">${h(l.label||"")} · ${h($.subject_name||"")} · ${h(i.class_name||"")}</p>
        <label class="block text-sm font-semibold text-gray-700 mb-1">ตั้งชื่อไฟล์สำเนา</label>
        <input id="copy-file-name" class="${Ce}" value="${h(I)}" />
        <label class="block text-sm font-semibold text-gray-700 mt-3 mb-1">อีเมลที่จะให้สิทธิ์ไฟล์</label>
        <input id="copy-target-email" type="email" class="${Ce}" value="${h(oe)}" placeholder="teacher@example.com" />
        <p class="text-xs text-gray-400 mt-2">ระบบจะสร้างสำเนาในบัญชีผู้ดูแลและแชร์สิทธิ์แก้ไขให้ email นี้ พร้อมบันทึก Sheet ID กลับเข้ารายวิชาอัตโนมัติ</p>
        <div id="copy-result" class="hidden mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm"></div>
        <div class="flex gap-3 mt-5">
          <button id="copy-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="copy-go" class="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600">สร้างสำเนา</button>
        </div>
      </div>`,document.body.appendChild(Y),Y.querySelector("#copy-cancel").addEventListener("click",()=>Y.remove()),Y.addEventListener("click",n=>{n.target===Y&&Y.remove()});const o=n=>{const u=_sheetCopyUrl(l.id);Y.querySelector("#copy-result").innerHTML=`
          <div class="rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p class="font-semibold text-amber-800 mb-1">ใช้วิธีทำสำเนาด้วย Google แทน</p>
            <p class="text-xs text-amber-700 mb-3">${h(n||"หากสร้างอัตโนมัติไม่สำเร็จ ให้กดปุ่มด้านล่างเพื่อทำสำเนา แล้วนำลิงก์ไฟล์ใหม่มาวาง")}</p>
            <a href="${u}" target="_blank" rel="noopener noreferrer"
              class="block w-full py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-700">
              เปิดหน้าทำสำเนาของ Google
            </a>
            <label class="block text-xs font-semibold text-gray-600 mt-3 mb-1">วางลิงก์หรือ ID ของไฟล์ที่ทำสำเนาเสร็จแล้ว</label>
            <input id="manual-sheet-id" class="${Ce}" placeholder="https://docs.google.com/spreadsheets/d/..." />
            <button id="manual-save-sheet" class="mt-3 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
              บันทึก Sheet ID เข้ารายวิชา
            </button>
          </div>`,Y.querySelector("#copy-result").classList.remove("hidden"),Y.querySelector("#manual-save-sheet").addEventListener("click",async()=>{const x=Y.querySelector("#manual-sheet-id"),g=_extractSheetId(x.value);if(!g){P("กรุณาวางลิงก์หรือ Sheet ID ของไฟล์สำเนา","warning");return}try{await at(i.id,{google_sheet_id:g}),i.google_sheet_id=g,P("บันทึก Sheet ID เข้ารายวิชาแล้ว","success"),Y.remove(),Le(e)}catch(E){P("บันทึก Sheet ID ไม่สำเร็จ: "+ce(E),"error")}})};Y.querySelector("#copy-go").addEventListener("click",async()=>{const n=Y.querySelector("#copy-go"),u=Y.querySelector("#copy-file-name").value.trim()||I||"สำเนาไฟล์ ปพ.5",x=Y.querySelector("#copy-target-email").value.trim();n.disabled=!0,n.textContent="กำลังสร้าง...";try{const g=await Sn(l.id,u,x),E=g.newSheetId;if(!E)throw new Error("GAS ไม่ได้ส่ง Sheet ID กลับมา");await at(i.id,{google_sheet_id:E}),i.google_sheet_id=E;const K=g.url||_sheetUrl(E);Y.querySelector("#copy-result").innerHTML=`
            <p class="font-semibold text-emerald-800 mb-2">สร้างไฟล์สำเนาและบันทึกเข้ารายวิชาแล้ว</p>
            <button id="copy-open" class="w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">เปิดไฟล์สำเนา</button>`,Y.querySelector("#copy-result").classList.remove("hidden"),Y.querySelector("#copy-open").addEventListener("click",()=>window.open(K,"_blank")),n.textContent="สร้างแล้ว",P("สร้างสำเนาและบันทึก Sheet ID แล้ว","success"),setTimeout(()=>Le(e),900)}catch(g){n.disabled=!1,n.textContent="สร้างสำเนา",P("สร้างอัตโนมัติไม่สำเร็จ เปิดวิธีทำสำเนาด้วย Google แทน","warning"),o(ce(g))}})},window._openSheetToolsModal=s=>{var I,oe,Y;const i=(I=window._classCache)==null?void 0:I[s];if(!(i!=null&&i.google_sheet_id))return;(oe=document.getElementById("sheet-tools-modal"))==null||oe.remove();const l=_sheetUrl(i.google_sheet_id),$=document.createElement("div");$.id="sheet-tools-modal",$.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",$.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${h(((Y=i.master_subjects)==null?void 0:Y.subject_name)||"")} · ${h(i.class_name||"")}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">🔗 Sync ข้อมูลไปชีท</button>
        </div>
        <button id="btn-sheet-tools-close" class="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>`,document.body.appendChild($),$.querySelector("#btn-sheet-tools-close").addEventListener("click",()=>$.remove()),$.addEventListener("click",o=>{o.target===$&&$.remove()}),$.querySelector("#btn-open-sheet").addEventListener("click",()=>window.open(l,"_blank")),$.querySelector("#btn-copy-sheet").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l),P("คัดลอกลิงก์ชีทแล้ว","success")}catch{P("คัดลอกไม่สำเร็จ","error")}}),$.querySelector("#btn-share-sheet").addEventListener("click",async()=>{const o=$.querySelector("#btn-share-sheet");o.disabled=!0,o.textContent="⏳ กำลังเปิดสิทธิ์...";try{const{shareSheetForView:f}=await ye(async()=>{const{shareSheetForView:y}=await import("./sync-GIjLHUjs.js");return{shareSheetForView:y}},__vite__mapDeps([6,7,5]));await f(i.google_sheet_id),P("ส่งคำสั่งเปิดสิทธิ์แล้ว กรุณารอสักครู่แล้วลองเปิดลิงก์","success"),o.textContent="✅ ส่งคำสั่งเปิดสิทธิ์แล้ว"}catch(f){o.disabled=!1,o.textContent="🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้",P("เปิดสิทธิ์ไม่สำเร็จ: "+ce(f),"error")}}),$.querySelector("#btn-open-sync").addEventListener("click",()=>{$.remove(),window._openSyncModal(s)})},window._openSyncModal=s=>{var $,I;const i=($=window._classCache)==null?void 0:$[s];if(!i)return;(I=document.getElementById("sync-modal"))==null||I.remove();const l=document.createElement("div");l.id="sync-modal",l.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",l.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 text-base mb-1">🔗 Sync ไปยัง Google Sheet</h3>
          <p class="text-xs text-gray-400 mb-4">ห้อง: ${i.class_name} · Sheet: ✓</p>
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
        </div>`,document.body.appendChild(l),l.querySelector("#btn-sync-cancel").addEventListener("click",()=>l.remove()),l.addEventListener("click",oe=>{oe.target===l&&l.remove()}),l.querySelector("#btn-sync-go").addEventListener("click",async()=>{var k,m,A,U,ee;const oe=l.querySelector("#sync-opt-info").checked,Y=l.querySelector("#sync-opt-att").checked,o=l.querySelector("#sync-opt-score").checked;if(!oe&&!Y&&!o){P("เลือกอย่างน้อย 1 รายการ","warning");return}const f=l.querySelector("#btn-sync-go"),y=l.querySelector("#sync-progress");f.disabled=!0,f.textContent="⏳ กำลัง Sync...",y.classList.remove("hidden");const{syncClassInfo:n,syncAttendance:u,syncScores:x}=await ye(async()=>{const{syncClassInfo:_,syncAttendance:X,syncScores:N}=await import("./sync-GIjLHUjs.js");return{syncClassInfo:_,syncAttendance:X,syncScores:N}},__vite__mapDeps([6,7,5])),{getDepartments:g,getTeachers:E,getScoreColumns:K,getStudentScores:W,getTeacherById:se}=await ye(async()=>{const{getDepartments:_,getTeachers:X,getScoreColumns:N,getStudentScores:z,getTeacherById:re}=await import("./api-C-roKrdU.js");return{getDepartments:_,getTeachers:X,getScoreColumns:N,getStudentScores:z,getTeacherById:re}},__vite__mapDeps([1,2,3,4,5])),le=[];try{if(oe){y.textContent="📋 Sync ข้อมูลรายวิชา...";const[_,X,N]=await Promise.all([g().catch(()=>[]),E().catch(()=>[]),(k=i.master_subjects)!=null&&k.teacher_id?se(i.master_subjects.teacher_id).catch(()=>null):Promise.resolve(null)]),z=N??e,re=_.find(me=>{var ge;return me.dept_name===((ge=i.master_subjects)==null?void 0:ge.dept)}),de=re!=null&&re.teacher_code?X.find(me=>me.teacher_code===re.teacher_code):null,ue=(re==null?void 0:re.head_name)||(de==null?void 0:de.full_name)||"";await n(i.google_sheet_id,i,{full_name:(z==null?void 0:z.full_name)??"",phone:(z==null?void 0:z.phone)??""},{headStudentName:((m=i.students)==null?void 0:m.full_name)??"",deptName:((A=i.master_subjects)==null?void 0:A.dept)??"",headDeptName:ue})}}catch(_){le.push("รายวิชา: "+ce(_))}try{if(Y){y.textContent="✅ Sync เช็คชื่อ...";const _=((U=i.master_subjects)==null?void 0:U.credit)??1,X=((ee=i.master_subjects)==null?void 0:ee.subject_group)==="ACDMVOC",N=X?await zs(i.id).catch(()=>[]):[],z=Un(i,_,N.length?N:null,X),[re,de]=await Promise.all([De(s),getClassAttendanceAll(s)]),ue={};for(const me of de)ue[me.student_id]||(ue[me.student_id]={}),ue[me.student_id][me.session_number]=me.status;await u(i.google_sheet_id,z,ue,re)}}catch(_){le.push("เช็คชื่อ: "+ce(_))}try{if(o){y.textContent="📝 Sync คะแนน...";const[_,X,N]=await Promise.all([K(s),W(s),De(s)]);_.length&&await x(i.google_sheet_id,_,X,N)}}catch(_){le.push("คะแนน: "+ce(_))}l.remove(),le.length?P(`Sync บางส่วนไม่สำเร็จ:
`+le.join(`
`),"error"):P(`Sync สำเร็จ — ${i.class_name}`,"success")})}}catch(a){console.error("[renderMyClasses] โหลดข้อมูลห้องเรียนไม่สำเร็จ",a);const d=h((a==null?void 0:a.message)||"ไม่ทราบสาเหตุ");_e(`<div class="max-w-xl mx-auto mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-3xl mb-3">⚠️</p>
      <h3 class="font-bold text-red-700">โหลดข้อมูลห้องเรียนไม่สำเร็จ</h3>
      <p class="mt-2 text-sm text-red-600 break-words">${d}</p>
      <button id="retry-my-classes" class="mt-5 px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">ลองใหม่</button>
    </div>`),(t=document.getElementById("retry-my-classes"))==null||t.addEventListener("click",()=>Le(e)),P("โหลดข้อมูลห้องเรียนไม่สำเร็จ: "+ce(a),"error")}}async function Bt(e,t,a={}){je("my-classes"),Ie("ห้องเรียน"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[d,L,q]=await Promise.all([a.classes?Promise.resolve(a.classes):ut((e==null?void 0:e.id)??null),$e().catch(()=>({})),rs().catch(()=>[])]),H=d,v=H.find(r=>r.id===t);if(!v){a.supervisorMode||Le(e);return}const p=v.master_subjects??{},B=Object.fromEntries(q.map(r=>[r.id,r])),R=v.classroom_id?B[v.classroom_id]:null;window._classCache=Object.fromEntries(H.map(r=>[r.id,r]));const Q=parseInt(L.academicYear??2568),j=parseInt(L.semester??1),[b,O,G]=await Promise.all([e!=null&&e.id?Ve(e.id,Q,j).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?qt(e.id).catch(()=>[]):Promise.resolve([]),mt().catch(()=>[])]),ne={};O.forEach(r=>{ne[r.class_id]||(ne[r.class_id]=[]),ne[r.class_id].push(r.teacher_schedule_id)});const ae=Object.fromEntries(b.map(r=>[r.id,r])),V=Object.fromEntries(G.map(r=>[r.period_no,r])),T=(!a.supervisorMode&&(e!=null&&e.id)?await Hs(e.id).catch(()=>[]):[]).some(r=>r.package_type==="donation"&&r.status==="approved"),C=kt(L,v),w=["AGM","AGMVOC"].includes(p.subject_group),J=v.google_sheet_id?`<button onclick="window._openSheetToolsModal(${t})" class="btn-action teal">⚙️ จัดการชีท</button>`:C!=null&&C.id?`<button onclick="window._openClassCopyModal(${t})" class="btn-action amber">🔗 ทำสำเนาชีท</button>`:"";_e(`
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
            <p class="font-bold text-gray-800 text-sm leading-tight truncate">${h(p.subject_name??"—")}</p>
            <p class="text-xs text-gray-500 truncate">
              <span class="font-mono text-emerald-600">${h(p.subject_code??"")}</span>
              <span class="mx-1">·</span>${h(v.class_name??"")}${R?` · 📍 ${h(R.building)} ${h(R.room_number)}`:""}
            </p>
          </div>
          <!-- badges desktop only -->
          <div class="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            ${v.skill_group?`<span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">${h(v.skill_group)}</span>`:""}
            ${w?'<span class="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full">ศาสนา</span>':""}
            ${v.google_sheet_id?'<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
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
          <button onclick="window._openSmartClassroom(${t})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#a9781a,#e6c988);">
            👑 <span>Smart Classroom</span>
          </button>
          <button onclick="window._openClassroomChat(${t})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#f59e0b,#b45309);">
            🏫 <span>แชทห้องเรียน</span>
          </button>

          <div class="flex-shrink-0 w-px bg-gray-200 my-0.5"></div>
          <button onclick="window._openCombinedEdit2(${t})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-50 transition flex items-center gap-1.5">
            ✏️ <span>แก้ไข</span>
          </button>
          <button onclick="event.stopPropagation();window._deleteClass(${t},'${(v.class_name??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'")}')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-red-100 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-1.5">
            🗑️ <span>ลบ</span>
          </button>
        </div>

        <template id="cd-group-tpl-docs">
          <button onclick="window._closeActionGroupPopup();window._openPP5Doc(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">💾 ปพ.5</button>
          <button onclick="window._closeActionGroupPopup();window._openExamDocsForClass(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🧾 เอกสารสอบ</button>
          ${v.google_sheet_id?`
          <button onclick="window._closeActionGroupPopup();window._openSheetToolsModal(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⚙️ จัดการชีท</button>`:C!=null&&C.id?`
          <button onclick="window._closeActionGroupPopup();window._openClassCopyModal(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🔗 ทำสำเนาชีท</button>`:""}
        </template>
        <template id="cd-group-tpl-tools">
          <button onclick="window._closeActionGroupPopup();window._openRandomPickerModal(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🎲 สุ่มรายชื่อ</button>
          <button onclick="window._closeActionGroupPopup();window._openTimerModal(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⏱️ จับเวลา</button>
        </template>
        <template id="cd-group-tpl-assist">
          <button onclick="window._closeActionGroupPopup();window._openClassFlashcardsModal(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🃏 บัตรคำศัพท์</button>
          <button onclick="window._closeActionGroupPopup();window._openPromptGenModal(${t})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">✍️ Prompt AI</button>
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
    </style>`);const D=()=>document.getElementById("cd-tab-content");window._backToClasses=()=>{Le(e)};const M={docs:{title:"📄 เอกสาร",grad:"linear-gradient(135deg,#7c3aed,#6366f1)"},tools:{title:"🛠️ เครื่องมือห้องเรียน",grad:"linear-gradient(135deg,#f59e0b,#ec4899)"},assist:{title:"🤖 ผู้ช่วยครู",grad:"linear-gradient(135deg,#6366f1,#06b6d4)"}};window._closeActionGroupPopup=()=>{var r;return(r=document.getElementById("cd-action-popup"))==null?void 0:r.remove()},window._openActionGroupPopup=r=>{window._closeActionGroupPopup();const S=document.getElementById(`cd-group-tpl-${r}`),F=M[r];if(!S||!F)return;const Z=document.createElement("div");Z.id="cd-action-popup",Z.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 animate-fade",Z.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div style="background:${F.grad}" class="px-4 py-3 flex items-center justify-between">
            <h3 class="text-white font-bold text-sm">${F.title}</h3>
            <button id="cd-action-popup-close" class="text-white/90 hover:text-white text-2xl leading-none px-1">&times;</button>
          </div>
          <div class="p-2 flex flex-col gap-0.5">${S.innerHTML}</div>
        </div>`,document.body.appendChild(Z),Z.querySelector("#cd-action-popup-close").addEventListener("click",window._closeActionGroupPopup),Z.addEventListener("click",te=>{te.target===Z&&window._closeActionGroupPopup()})},window._openPP5Doc=r=>xs(r),window._openExamDocsForClass=r=>Ss(r),a.supervisorMode||(window._openStudentManager=r=>Es(e,r)),window._openCombinedEdit2=r=>{var F;const S=(F=window._classCache)==null?void 0:F[r];S&&qs(e,S,q,b,ne,V,ae,()=>Bt(e,r))},window._openRandomPickerModal=async r=>{var F;const S=(F=window._classCache)==null?void 0:F[r];if(S)try{const Z=await De(r);if(!Z.length){P("ห้องนี้ยังไม่มีนักเรียน","warning");return}const te=Z.map((s,i)=>({...s,seat_no:i+1}));await Cs(r,S,te,T)}catch{P("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}},window._openTimerModal=r=>{var F;const S=(F=window._classCache)==null?void 0:F[r];S&&ho(r,S,T)},window._openSmartClassroom=r=>{ye(()=>import("./teacher-views-smart-classroom-u_zD57Di.js"),__vite__mapDeps([8,7,1,2,3,4,5,9,10,11,6,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,0,35,36,37,38,39])).then(S=>S.renderSmartClassroom(e,r))},window._openClassroomChat=r=>{var F;const S=(F=window._classCache)==null?void 0:F[r];ye(()=>import("./chat-classroom-C3nyYAQB.js"),__vite__mapDeps([40,1,2,3,4,5,41,16,7,32,23])).then(Z=>Z.openTeacherClassroomChat(e,r,S==null?void 0:S.class_name))},window._openClassFlashcardsModal=async r=>{var F;if((F=window._classCache)!=null&&F[r])try{const Z=await Ds(e.id);So(e,r,Z)}catch(Z){P("โหลดชุดบัตรคำไม่สำเร็จ: "+ce(Z),"error")}},window._openPromptGenModal=async r=>{var F;const S=(F=window._classCache)==null?void 0:F[r];S&&await Ls(e,r,S,window._pp5SystemCfg??{})},window._deleteClass=async(r,S)=>{if(await pt({title:`ลบห้องเรียน "${S}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ls(r),P(`ลบ "${S}" แล้ว`,"success"),Le(e)}catch{P("ลบไม่สำเร็จ","error")}},window._loadClassTab=async r=>c(r);const c=async r=>{document.querySelectorAll(".cd-tab").forEach(Z=>{const te=Z.dataset.tab===r;Z.className=te?"cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center":"cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center"});const S=document.getElementById("cd-tab-content");if(!S)return;S.innerHTML=`<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>`;const F=zn();Ft(S);try{r==="students"?await window._openStudentManager(t):r==="attendance"?await Mt(e,v):r==="grades"&&await It(e,v)}catch(Z){console.error(Z),S.innerHTML='<div class="p-6 text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>'}finally{Ft(F)}je("my-classes"),Ie("ห้องเรียน")};document.querySelectorAll(".cd-tab").forEach(r=>r.addEventListener("click",()=>c(r.dataset.tab))),c(a.defaultTab??"students")}catch(d){console.error(d),P("โหลดข้อมูลไม่สำเร็จ","error")}}const ko=[{value:"none",label:"ไม่จำ — สุ่มอิสระทุกครั้ง (มีโอกาสซ้ำ)"},{value:"session",label:"จำเฉพาะตอนนี้ — รีเซ็ตอัตโนมัติเมื่อปิดหน้าต่างนี้"},{value:"cycle",label:"จำจนครบทุกคน แล้ววนรอบใหม่อัตโนมัติ"},{value:"manual",label:"จำตลอดไป จนกว่าจะกดรีเซ็ตเอง"}];function Zt(e){const t=["#f59e0b","#ec4899","#10b981","#6366f1","#ef4444","#06b6d4","#8b5cf6"];e.style.position="relative",e.style.overflow="hidden";for(let a=0;a<26;a++){const d=document.createElement("div"),L=t[Math.floor(Math.random()*t.length)],q=Math.random()*100,H=1.1+Math.random()*.7,v=Math.random()*.25,p=Math.random()*360;d.style.cssText=`position:absolute;top:-12px;left:${q}%;width:7px;height:13px;background:${L};opacity:0.9;border-radius:2px;transform:rotate(${p}deg);pointer-events:none;animation:rp-confetti-fall ${H}s ${v}s ease-in forwards;`,e.appendChild(d),setTimeout(()=>d.remove(),(H+v)*1e3+250)}}function So(e,t,a){var q;(q=document.getElementById("class-flashcards-modal"))==null||q.remove();const d=document.createElement("div");d.id="class-flashcards-modal",d.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4";let L="";!a||a.length===0?L=`
      <div class="text-center py-8 text-gray-500">
        <p class="text-4xl mb-2">🃏</p>
        <p class="text-sm font-medium">คุณครูยังไม่มีชุดบัตรคำศัพท์เลยครับ</p>
        <p class="text-xs text-gray-400 mt-1">สามารถสร้างชุดบัตรคำศัพท์ใหม่ได้ที่เมนู "บัตรคำศัพท์" ในเมนูหลัก</p>
      </div>
    `:L=`
      <div class="grid gap-3 max-h-[60vh] overflow-y-auto pr-1 w-full">
        ${a.map(H=>`
          <button class="select-deck-btn w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition flex items-center justify-between gap-3 group"
            data-deck-id="${H.id}">
            <div>
              <p class="font-bold text-gray-800 text-sm group-hover:text-indigo-700 transition">${h(H.title)}</p>
              ${H.description?`<p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${h(H.description)}</p>`:""}
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

      ${L}
    </div>
  `,document.body.appendChild(d),d.querySelector("#cf-modal-close").addEventListener("click",()=>d.remove()),d.addEventListener("click",H=>{H.target===d&&d.remove()}),d.querySelectorAll(".select-deck-btn").forEach(H=>{H.addEventListener("click",()=>{const v=H.dataset.deckId,p=a.find(B=>B.id===v);p&&(d.remove(),ye(()=>import("./teacher-views-flashcards-CfWVQWu1.js"),__vite__mapDeps([42,7,1,2,3,4,5,16])).then(B=>{B.renderFlashcardPlay(e,p,t)}))})})}function Eo(e){var t;return((t=String((e==null?void 0:e.donationSpecialFeatures)??"").split(`
`).map(a=>{const d=a.split("|");return{text:d[1]??"",minTier:parseInt(d[2])||1}}).find(a=>a.text.includes("Prompt")))==null?void 0:t.minTier)??1}const es=[{value:"บรรยาย",label:"บรรยาย (Lecture)"},{value:"กิจกรรมกลุ่ม",label:"กิจกรรมกลุ่ม (Group Activity)"},{value:"โครงงานเป็นฐาน",label:"โครงงานเป็นฐาน (Project-based)"},{value:"สืบเสาะหาความรู้",label:"สืบเสาะหาความรู้ (Inquiry-based)"},{value:"other",label:"อื่นๆ (พิมพ์เอง)"}],ts={th:"ภาษาไทย",en:"ภาษาอังกฤษ (English)",ar:"ภาษาอาหรับ (العربية)","ms-rumi":"ภาษามลายู อักษรรูมี (Bahasa Melayu, Rumi)","ms-jawi":"ภาษามลายูปัตตานี อักษรยาวี (Jawi)"},ss=[{key:"worksheet",text:"ใบงาน/ใบกิจกรรม",imageFormat:"กระดาษ A4 แนวตั้ง พร้อมพิมพ์แจกนักเรียนได้จริง",imageContent:"ใบงาน/ใบกิจกรรมที่มีคำสั่งชัดเจนและเว้นที่ว่างให้กรอกคำตอบ"},{key:"slides",text:"โครงร่างสไลด์นำเสนอ",imageFormat:"สไลด์นำเสนอ อัตราส่วน 16:9",imageContent:"สไลด์นำเสนอแต่ละแผ่น มีข้อความหลักและภาพประกอบที่เหมาะกับเนื้อหาคาบนี้"},{key:"questions",text:"คำถามกระตุ้นความคิด/อภิปราย",imageFormat:"โปสเตอร์/การ์ดคำถามขนาด A4 สำหรับติดในห้องเรียนหรือเปิดฉาย",imageContent:"คำถามกระตุ้นความคิดอย่างน้อย 5 ข้อ เรียงลำดับจากง่ายไปยาก จัดวางให้อ่านง่ายน่าสนใจ"},{key:"rubric",text:"เกณฑ์ให้คะแนน (Rubric)",imageFormat:"ตารางขนาด A4 จัดวางเป็นตารางอ่านง่าย",imageContent:"เกณฑ์การให้คะแนน (Rubric) แบบ 4 ระดับคุณภาพ พร้อมคำอธิบายแต่ละระดับ"},{key:"game",text:"เกม/กิจกรรมเสริมท้ายคาบ",imageFormat:"การ์ด/กระดานกิจกรรมขนาด A4 พร้อมพิมพ์ใช้งานได้จริง",imageContent:"อุปกรณ์/การ์ดเกมหรือกระดานกิจกรรมเสริมท้ายคาบ เพื่อทบทวนเนื้อหา ใช้เวลาไม่เกิน 10 นาที"}],Lo={บรรยาย:[],กิจกรรมกลุ่ม:["worksheet","rubric","game"],โครงงานเป็นฐาน:["worksheet","rubric","questions"],สืบเสาะหาความรู้:["questions","worksheet"],other:[]};function Co({subjectName:e,subjectCode:t,gradeLevel:a,className:d,studentCount:L,avgPct:q,topic:H,format:v,periods:p,minutesPerPeriod:B,isReligionSubj:R,mediaItems:Q,langKey:j,langLabel:b}){const O=p*B,G=p>1?`${p} คาบต่อเนื่อง (คาบละ ${B} นาที รวม ${O} นาที)`:`1 คาบ (${B} นาที)`,ne=j==="ms-jawi"?" (เขียนด้วยอักขระยาวี Jawi เท่านั้น ห้ามใช้อักษรรูมี)":"",ae=R?["คุณคือผู้ช่วยครูอิสลามศึกษาไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรอิสลามศึกษา พุทธศักราช 2551"]:["คุณคือผู้ช่วยครูไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551 (ฉบับปรับปรุง พ.ศ. 2560)"];return ae.push("","บริบทวิชา:",`- วิชา: ${e} (รหัส ${t})`,`- ระดับชั้น: ${a}   ห้อง: ${d}`,`- จำนวนนักเรียน: ${L} คน`),q!=null&&ae.push(`- คะแนนเฉลี่ยสะสมของห้องนี้ในขณะนี้: ${q}% (ใช้พิจารณาความยาก-ง่ายของกิจกรรม)`),ae.push("",`หัวข้อที่จะสอนคาบนี้: ${H}`,`รูปแบบการสอนที่ต้องการ: ${v}`,`ระยะเวลา: ${G}`,"",`คำสั่งต่อไปนี้เขียนเป็นภาษาไทยเพื่อให้คุณเข้าใจชัดเจน แต่เนื้อหาที่สร้างขึ้นจริงทั้งหมด (แผนการสอน, ใบงาน, สื่อ, ข้อความในภาพ) ต้องเป็น${b}${ne}`,"","กรุณาออกแบบแผนการจัดการเรียนรู้ที่ประกอบด้วย:","1. จุดประสงค์การเรียนรู้ (ด้านความรู้ K / ทักษะ P / เจตคติ A)","2. สาระสำคัญ (Key Concept)",`3. กิจกรรมการเรียนรู้ แบ่งเป็น 3 ขั้น พร้อมระบุเวลาแต่ละขั้นตอนชัดเจน (รวม ${O} นาที)${p>1?" — หากมีมากกว่า 1 คาบ กรุณาแบ่งกิจกรรมเป็นรายคาบให้ชัดเจน (คาบที่ 1: ..., คาบที่ 2: ...)":""}:`,"   - นำเข้าสู่บทเรียน","   - กิจกรรมหลัก","   - สรุป/wrap-up","4. สื่อ/อุปกรณ์ที่ต้องใช้","5. วิธีการวัดและประเมินผลในคาบ","6. งาน/การบ้าน (ถ้ามี)","7. หมายเหตุสำหรับครู — สิ่งที่ต้องเตรียมหรือระวังเป็นพิเศษ",`8. เขียนคำสั่งสร้างภาพ (Image Generation Prompt) เป็นภาษาไทย แยกไว้ในกล่องโค้ดของตัวเอง สำหรับสร้างภาพสรุปแผนการจัดการเรียนรู้ทั้งหมดนี้ (ข้อความที่ปรากฏจริงในภาพเป็น${b}${ne}) ให้อยู่ในภาพเดียวหน้าเดียว (One-Page Lesson Plan) ขนาดกระดาษ A4 จัดวางให้อ่านง่าย ครบทุกหัวข้อสำคัญ (จุดประสงค์, สาระสำคัญ, กิจกรรม 3 ขั้น, สื่อ/อุปกรณ์, การวัดประเมินผล) ก่อนกล่องโค้ดนี้ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง`,"","หมายเหตุสำคัญ: หากเนื้อหาวิชานี้เกี่ยวข้องกับสมการ สูตร หรือสัญลักษณ์ทางคณิตศาสตร์/วิทยาศาสตร์ กรุณาเขียนด้วยรูปแบบ LaTeX เสมอ (เช่น $y = mx + b$ หรือสมการซับซ้อนใช้ $$...$$) เพื่อให้สมการถูกต้องแม่นยำและอ่านง่าย ห้ามพิมพ์สมการเป็นข้อความธรรมดาที่อาจอ่านผิดเพี้ยน"),Q!=null&&Q.length&&(ae.push("",`สื่อ/เอกสารประกอบเพิ่มเติม (นอกเหนือจากแผนการสอน) — ห้ามเขียนเนื้อหาเป็นข้อความอ่านตรงๆ แต่ให้เขียนเป็น "คำสั่งสร้างภาพ" (Image Generation Prompt) เป็นภาษาไทย สำหรับป้อนให้ AI สร้างรูปภาพต่อ (ข้อความที่ปรากฏจริงในภาพให้เป็น${b}${ne}) เพื่อให้ได้ไฟล์ภาพพร้อมใช้งานจริง โดยมีกติกาดังนี้:`,"- แต่ละรายการด้านล่างให้เขียนคำสั่งสร้างภาพแยกเป็นคนละกล่องโค้ด (code block) ต่อ 1 รายการ ไม่ปนกัน","- ออกแบบจำนวนภาพ/หน้าให้เหมาะสมกับเนื้อหา สูงสุดไม่เกิน 10 ภาพต่อกล่องโค้ด 1 กล่อง","- ถ้ารายการใดต้องใช้มากกว่า 10 ภาพ ให้แบ่งเป็นกล่องโค้ดใหม่ต่อจากกัน กล่องละไม่เกิน 10 ภาพ",'- ภายในกล่องโค้ดเดียวกัน ให้ระบุคำสั่งของแต่ละภาพแยกกันให้ครบและชัดเจน (เช่น "ภาพที่ 1: ...", "ภาพที่ 2: ...")',"- แต่ละคำสั่งต้องอธิบายรายละเอียดกราฟิก เค้าโครง และข้อความที่ต้องปรากฏในภาพให้ชัดเจนพอที่ AI สร้างภาพจะสร้างออกมาได้ตรงตามต้องการ","- ก่อนกล่องโค้ดแรกของแต่ละรายการ ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง","","รายการที่ต้องการ:"),Q.forEach((V,ie)=>ae.push(`${ie+1}. ${V.text} — รูปแบบภาพ: ${V.imageFormat} — เนื้อหาที่ต้องปรากฏ: ${V.imageContent}`))),ae.join(`
`)}function et(e){return h(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}function qo(e){const t=String(e??"").split(`
`);let a="",d=!1,L=[],q=null;const H=()=>{q&&(a+=`</${q}>`,q=null)};for(const v of t){const p=v.replace(/\r$/,"");if(p.trim().startsWith("```")){d?(a+=`<pre>${h(L.join(`
`))}</pre>`,L=[],d=!1):(H(),d=!0);continue}if(d){L.push(p);continue}const B=p.match(/^(#{1,3})\s+(.*)$/);if(B){H();const j=B[1].length;a+=`<h${j}>${et(B[2])}</h${j}>`;continue}const R=p.match(/^\s*[-*]\s+(.*)$/);if(R){q!=="ul"&&(H(),a+="<ul>",q="ul"),a+=`<li>${et(R[1])}</li>`;continue}const Q=p.match(/^\s*\d+[.)]\s+(.*)$/);if(Q){q!=="ol"&&(H(),a+="<ol>",q="ol"),a+=`<li>${et(Q[1])}</li>`;continue}H(),a+=p.trim()?`<p>${et(p)}</p>`:"<p>&nbsp;</p>"}return H(),d&&L.length&&(a+=`<pre>${h(L.join(`
`))}</pre>`),a}function ns(e){return String(e??"").replace(/[\\/:*?"<>|]/g," ").trim().slice(0,60)||"เอกสาร"}function jo(e,t){const d=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>แผนการจัดการเรียนรู้</title>
    <style>
      body{font-family:'TH Sarabun New','Angsana New',Tahoma,sans-serif;font-size:16pt;line-height:1.6;}
      h1{font-size:22pt;} h2{font-size:19pt;} h3{font-size:17pt;}
      pre{font-family:'Courier New',monospace;font-size:12pt;background:#f5f5f5;padding:10px;border:1px solid #ccc;white-space:pre-wrap;}
    </style></head><body>${qo(e)}</body></html>`,L=new Blob(["\uFEFF",d],{type:"application/msword"}),q=URL.createObjectURL(L),H=document.createElement("a");H.href=q,H.download=t,document.body.appendChild(H),H.click(),H.remove(),URL.revokeObjectURL(q)}async function Ls(e,t,a,d){var ie;(ie=document.getElementById("prompt-gen-modal"))==null||ie.remove();const L=(a==null?void 0:a.master_subjects)??{},q=window._pp5DonorTierIndex??0,H=Eo(d),v=["AGM","AGMVOC"].includes(L.subject_group),p=d==null?void 0:d.freePromptAiLimit;let B=1;if(p!==void 0&&p!==""){const T=parseInt(p,10);Number.isFinite(T)&&(B=T)}const R=parseInt(localStorage.getItem("pp5_free_promptai_count")||"0",10),Q=B>0&&R<B,j=q<H,b=document.createElement("div");if(b.id="prompt-gen-modal",b.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4",j&&!Q){b.innerHTML=`
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="pg-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-800 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${H}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">✍️ ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว<br>ทดลองใช้ฟรีครบ ${B} ครั้งแล้ว<br>สนับสนุนโครงการเพื่อใช้งานต่อแบบไม่จำกัด</p>
        <button id="pg-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`,document.body.appendChild(b),b.querySelector("#pg-close").addEventListener("click",()=>b.remove()),b.querySelector("#pg-upgrade").addEventListener("click",()=>{var T;b.remove(),(T=document.getElementById("btn-donate-float"))==null||T.click()}),b.addEventListener("click",T=>{T.target===b&&b.remove()});return}b.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-fade">
      <div class="flex items-center gap-3 px-6 pt-6 pb-3 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">✍️ สร้าง Prompt สำหรับ AI</h3>
          <p class="text-xs text-gray-400 mt-0.5">นำ Prompt ที่ได้ไปวางใน ChatGPT / Gemini / Claude ของคุณครูเองได้เลย</p>
          ${j?`<span class="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">✨ ทดลองใช้งานฟรี (ครั้งที่ ${R+1}/${B})</span>`:""}
        </div>
        <button id="pg-close" class="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      </div>
      <div class="px-6 pb-6 overflow-y-auto" id="pg-body">
        <div class="flex justify-center py-10 text-gray-400 text-sm">กำลังโหลดข้อมูลห้องเรียน...</div>
      </div>
    </div>`,document.body.appendChild(b),b.querySelector("#pg-close").addEventListener("click",()=>b.remove()),b.addEventListener("click",T=>{T.target===b&&b.remove()});const O=b.querySelector("#pg-body");let G=0,ne=null;try{const[T,C]=await Promise.all([De(t).catch(()=>[]),tn(t).catch(()=>({columns:[],scores:[]}))]);G=T.length;const w=(C.columns??[]).reduce((J,D)=>J+(D.max_score??0),0);if(w>0&&G>0){const J=(C.scores??[]).reduce((D,M)=>D+(M.final_score??0),0);ne=Math.round(J/G/w*100)}}catch{}const ae=()=>{O.innerHTML=`
      <div class="bg-gray-50 rounded-2xl p-4 mb-4 text-xs text-gray-600 space-y-1">
        <p><strong class="text-gray-800">${h(L.subject_name??"—")}</strong> (${h(L.subject_code??"—")})</p>
        <p>ระดับชั้น ${h(L.grade_level??"—")} · ห้อง ${h(a.class_name??"—")} · นักเรียน ${G} คน</p>
        ${ne!=null?`<p>คะแนนเฉลี่ยสะสมปัจจุบัน: <strong class="text-emerald-600">${ne}%</strong></p>`:""}
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">หัวข้อที่จะสอนคาบนี้ <span class="text-red-400">*</span></label>
          <textarea id="pg-topic" rows="2" class="${Ce} resize-none" placeholder="เช่น สมการกำลังสอง, การสังเคราะห์แสง"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">รูปแบบการสอนที่ต้องการ</label>
          <select id="pg-format" class="${St}">
            ${es.map(D=>`<option value="${D.value}">${h(D.label)}</option>`).join("")}
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
            ${ss.map(D=>`
              <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" class="pg-media-cb rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" value="${D.key}" />
                ${h(D.text)}
              </label>`).join("")}
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">ภาษาที่ต้องการให้ AI ตอบ</label>
          <select id="pg-lang" class="${St}">
            ${Object.entries(ts).map(([D,M])=>`<option value="${D}">${h(M)}</option>`).join("")}
          </select>
        </div>
        <button id="pg-generate" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">
          ✨ สร้าง Prompt
        </button>
      </div>`;const T=O.querySelector("#pg-format"),C=O.querySelector("#pg-format-other"),w=()=>[...O.querySelectorAll(".pg-media-cb")],J=()=>{const D=Lo[T.value]??[];w().forEach(M=>{M.checked=D.includes(M.value)})};J(),T.addEventListener("change",()=>{C.classList.toggle("hidden",T.value!=="other"),J()}),O.querySelector("#pg-generate").addEventListener("click",()=>{var s;const D=O.querySelector("#pg-topic").value.trim();if(!D){P("กรุณาระบุหัวข้อที่จะสอนก่อนครับ","warning");return}const M=T.value==="other"?C.value.trim()||"ไม่ระบุ":((s=es.find(i=>i.value===T.value))==null?void 0:s.label)??T.value,c=Math.max(1,parseInt(O.querySelector("#pg-periods").value,10)||1),r=Math.max(1,parseInt(O.querySelector("#pg-minutes").value,10)||50),S=w().filter(i=>i.checked).map(i=>ss.find(l=>l.key===i.value)).filter(Boolean),F=O.querySelector("#pg-lang").value,Z=ts[F],te=Co({subjectName:L.subject_name??"—",subjectCode:L.subject_code??"—",gradeLevel:L.grade_level??"—",className:a.class_name??"—",studentCount:G,avgPct:ne,topic:D,format:M,periods:c,minutesPerPeriod:r,isReligionSubj:v,mediaItems:S,langKey:F,langLabel:Z});j&&localStorage.setItem("pp5_free_promptai_count",String(R+1)),V(te,D)})},V=(T,C)=>{O.innerHTML=`
      <p class="text-xs text-gray-500 mb-2">คัดลอกข้อความด้านล่างไปวางใน ChatGPT / Gemini / Claude ของคุณครูได้เลยครับ</p>
      <textarea id="pg-output" readonly rows="14" class="w-full text-xs font-mono border border-gray-200 rounded-2xl p-3 bg-gray-50 text-gray-700 resize-none">${h(T)}</textarea>
      <div class="flex gap-2 mt-3">
        <button id="pg-copy" class="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">📋 คัดลอก Prompt</button>
        <button id="pg-back" class="px-4 py-3 rounded-2xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition">← แก้ไข</button>
      </div>
      <div class="mt-5 pt-4 border-t border-gray-100">
        <p class="text-xs font-semibold text-gray-700 mb-1">📄 ขั้นตอนถัดไป (ถ้าต้องการ): ดาวน์โหลดเป็นไฟล์ Word</p>
        <p class="text-xs text-gray-400 mb-2">พอ AI ตอบกลับมาแล้ว วางคำตอบทั้งหมดที่ได้ลงในช่องนี้ แล้วกดดาวน์โหลด — จะได้ไฟล์ Word (.doc) ที่เปิดแก้ไขต่อได้เลย</p>
        <textarea id="pg-ai-response" rows="8" class="${Ce} resize-y font-mono text-xs" placeholder="วางคำตอบจาก ChatGPT / Gemini / Claude ที่นี่..."></textarea>
        <button id="pg-download-word" class="w-full mt-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition">📄 ดาวน์โหลดเป็นไฟล์ Word (.doc)</button>
      </div>`,O.querySelector("#pg-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(T),P("คัดลอก Prompt แล้วครับ","success")}catch{P("คัดลอกไม่สำเร็จ กรุณาเลือกข้อความแล้วคัดลอกเองครับ","error")}}),O.querySelector("#pg-back").addEventListener("click",ae),O.querySelector("#pg-download-word").addEventListener("click",()=>{const w=O.querySelector("#pg-ai-response").value.trim();if(!w){P("กรุณาวางคำตอบจาก AI ก่อนดาวน์โหลดครับ","warning");return}const J=`แผนการสอน_${ns(L.subject_code)}_${ns(C)}.doc`;jo(w,J),P("ดาวน์โหลดไฟล์ Word แล้วครับ","success")})};ae()}async function Io(e,t,a,d={}){return Ls(e,t,a,d)}async function Cs(e,t,a,d){var Y,o;const L=(Y=window._pp5SystemCfg)==null?void 0:Y.freeRandomPickerLimit;let q=1;if(L!==void 0&&L!==""){const f=parseInt(L,10);Number.isFinite(f)&&(q=f)}(o=document.getElementById("random-picker-modal"))==null||o.remove();const H=()=>{ae.innerHTML=`
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="rp-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-700 text-lg">สิทธิ์สุ่มทดลองใช้งานครบแล้ว</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สุ่มรายชื่อและจัดกลุ่มจำกัดการทดลองสุ่มฟรี ${q} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
        <button id="rp-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,ae.querySelector("#rp-paywall-close").addEventListener("click",()=>ae.remove()),ae.querySelector("#rp-upgrade").addEventListener("click",()=>{var f;ae.remove(),(f=document.getElementById("btn-donate-float"))==null||f.click()})};let v;try{v=await en(e)}catch{v={mode:"none",picked_student_ids:[]}}let p=v.mode||"none",B=new Set((v.picked_student_ids||[]).map(Number)),R=new Set;const Q=new Map(a.map(f=>[f.id,f]));let j=Array.isArray(v.groups)?v.groups.map(f=>({no:f.no,items:(f.student_ids||[]).map(y=>Q.get(y)).filter(Boolean)})):null,b="pick",O=!1,G=localStorage.getItem("pp5_rp_effect")||"classic";const ne=[{key:"classic",icon:"🎯",label:"คลาสสิก"},{key:"grid",icon:"🔦",label:"กริด"},{key:"elimination",icon:"💥",label:"ตัดออก"},{key:"slot",icon:"🎰",label:"สล็อต"}],ae=document.createElement("div");ae.id="random-picker-modal",ae.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",ae.innerHTML=`
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
          <p class="text-white/80 text-xs mt-0.5 truncate">${h(t.class_name||"")} · ทั้งหมด ${a.length} คน</p>
        </div>
        <button id="rp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="pick">🎯 สุ่มรายชื่อ</button>
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="group">👥 สุ่มจัดกลุ่ม</button>
      </div>
      <div id="rp-body" class="p-5 overflow-y-auto flex-1"></div>
    </div>`,document.body.appendChild(ae),ae.addEventListener("click",f=>{f.target===ae&&ae.remove()}),ae.querySelector("#rp-close").addEventListener("click",()=>ae.remove());const V=ae.querySelector("#rp-body"),ie=[...ae.querySelectorAll(".rp-tab")],T=f=>{b=f,ie.forEach(y=>{const n=y.dataset.mode===f;y.className=`rp-tab flex-1 py-2.5 text-sm font-semibold transition ${n?"text-white":"text-gray-500 hover:text-gray-700"}`,y.style.background=n?"linear-gradient(135deg,#f59e0b,#ec4899)":""}),f==="pick"?M():oe()};ie.forEach(f=>f.addEventListener("click",()=>{O||T(f.dataset.mode)}));const C=()=>p==="none"?new Set:p==="session"?R:B,w=async f=>{if(p!=="none"){if(p==="session"){R.add(f);return}B.add(f);try{await Ot(e,{mode:p,pickedStudentIds:[...B]})}catch{}}},J=async()=>{B=new Set,R=new Set;try{await Ht(e)}catch{}P("รีเซ็ตการสุ่มแล้ว","success"),b==="pick"&&M()},D=async f=>{if(f!==p){p=f,B=new Set,R=new Set;try{await Ot(e,{mode:f,pickedStudentIds:[]})}catch{}M()}};function M(){const f=C(),y=a.filter(E=>!f.has(E.id)),n=a.length-y.length,u=(E,K)=>{const W=`hsl(${E.id*47%360},60%,55%)`,se=E.image_url?`<img src="${h(E.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${W}">${h((E.full_name??"?").charAt(0))}</div>`;return`<div class="${K}" data-id="${E.id}">${se}<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${E.seat_no??""}</div></div>`},x=(E,K=!1)=>`<div id="rp-reel-${E}" class="rp-reel rounded-2xl border-2 border-gray-200 bg-white" style="width:${K?104:86}px;height:${K?148:124}px;flex-shrink:0;"><div class="rp-reel-inner flex flex-col items-center justify-center h-full p-2 gap-1" style="transition:opacity .06s ease;"><div class="flex-1 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-gray-300 text-2xl font-bold">?</div><div class="text-[9px] font-bold text-gray-500 truncate w-full text-center leading-none">—</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">·</div></div></div>`,g=()=>G==="grid"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 text-center pt-3 pb-1.5">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-grid" class="grid gap-1 px-2 pb-2" style="grid-template-columns:repeat(auto-fill,minmax(54px,1fr))">
            ${y.map(E=>u(E,"rp-grid-tile")).join("")}
          </div>
        </div>`:G==="elimination"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <div class="flex items-center justify-between pt-2.5 pb-1 px-3">
            <p id="rp-hint" class="text-xs text-gray-400">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
            <span id="rp-elim-counter" class="text-xs font-bold text-gray-500">${y.length} คน</span>
          </div>
          <div id="rp-elim-grid" class="grid gap-1 px-2 pb-2 overflow-y-auto" style="grid-template-columns:repeat(auto-fill,minmax(48px,1fr));max-height:210px;">
            ${y.map(E=>u(E,"rp-elim-tile")).join("")}
          </div>
        </div>`:G==="slot"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-4 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-4">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div class="flex justify-center items-center gap-2">
            ${x(0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${x(1,!0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${x(2)}
          </div>
        </div>`:`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-6 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-3">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-avatar" class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 items-center justify-center" style="display:none;opacity:0;box-shadow:0 8px 24px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.10);"></div>
          <p id="rp-name" class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2">—</p>
          <p id="rp-code" class="text-xs text-gray-400 mt-1 font-mono"></p>
        </div>`;V.innerHTML=`
      <div class="flex gap-1.5 mb-3">
        ${ne.map(E=>`<button class="rp-eff flex-1 py-2 rounded-xl border text-center leading-tight transition ${E.key===G?"border-amber-400 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}" data-eff="${E.key}"><div class="text-base">${E.icon}</div><div class="text-[9px] font-semibold mt-0.5">${E.label}</div></button>`).join("")}
      </div>
      <div class="flex items-center gap-2 mb-3">
        <select id="rp-mode" class="${St} flex-1 text-xs">
          ${ko.map(E=>`<option value="${E.value}" ${E.value===p?"selected":""}>${E.label}</option>`).join("")}
        </select>
        <button id="rp-reset" class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">🔄 รีเซ็ต</button>
      </div>
      ${p!=="none"?`<p id="rp-counter" class="text-[11px] text-gray-400 mb-3">สุ่มไปแล้ว ${n} / ${a.length} คน${y.length===0?" — ครบทุกคนแล้ว!":""}</p>`:""}
      ${g()}
      <button id="rp-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]" style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 สุ่มเลย!</button>`,V.querySelectorAll(".rp-eff").forEach(E=>{E.addEventListener("click",()=>{O||(G=E.dataset.eff,localStorage.setItem("pp5_rp_effect",G),M())})}),V.querySelector("#rp-mode").addEventListener("change",E=>D(E.target.value)),V.querySelector("#rp-reset").addEventListener("click",()=>{O||J()}),V.querySelector("#rp-go").addEventListener("click",()=>c())}function c(){if(O)return;if(!d&&parseInt(localStorage.getItem("pp5_free_random_count")||"0",10)>=q){H();return}let f=a.filter(g=>!C().has(g.id)),y=!1;if(f.length===0){if(p==="manual"){P('สุ่มครบทุกคนแล้ว — กดปุ่ม "รีเซ็ต" เพื่อเริ่มรอบใหม่',"warning");return}f=a,y=p==="cycle"||p==="session"}O=!0;const n=V.querySelector("#rp-go");n.disabled=!0,n.textContent="🎰 กำลังสุ่ม...";const u=f[Math.floor(Math.random()*f.length)],x=async()=>{if(y){B=new Set,R=new Set;try{await Ht(e)}catch{}}if(await w(u.id),!d){const g=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);localStorage.setItem("pp5_free_random_count",String(g+1))}setTimeout(()=>{O=!1;const g=C(),E=a.length-a.filter(se=>!g.has(se.id)).length,K=V.querySelector("#rp-counter");if(K){const se=a.length-E;K.textContent=`สุ่มไปแล้ว ${E} / ${a.length} คน${se===0?" — ครบทุกคนแล้ว!":""}`}const W=V.querySelector("#rp-go");if(W)if(G==="classic")W.disabled=!1,W.textContent="🎲 สุ่มอีกครั้ง";else{W.disabled=!1,W.textContent="🔁 สุ่มใหม่";const se=W.cloneNode(!0);W.replaceWith(se),se.addEventListener("click",()=>M())}},900)};G==="grid"?F(f,u,x):G==="elimination"?Z(f,u,x):G==="slot"?te(f,u,x):S(f,u,x)}function r(f,y){f.style.transition="opacity 0.2s ease",f.style.opacity="0",setTimeout(()=>{f.style.borderStyle="solid",f.style.borderColor="#10b981",f.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",f.innerHTML=`<div class="py-5 px-4 text-center">
        <p class="text-xs text-gray-400 mb-3">🎉 ได้คนนี้แหละ!</p>
        <div class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 rp-pop" style="box-shadow:0 8px 24px rgba(0,0,0,.18);">${y.image_url?`<img src="${h(y.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${h((y.full_name??"?").charAt(0))}</div>`}</div>
        <p class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2 rp-pop">${h(y.full_name)}</p>
        <p class="text-xs text-gray-400 mt-1 font-mono">${y.seat_no?`เลขที่ ${y.seat_no}`:""}</p>
      </div>`,f.style.opacity="1",Zt(f)},220)}function S(f,y,n){const u=V.querySelector("#rp-stage"),x=V.querySelector("#rp-name"),g=V.querySelector("#rp-code"),E=V.querySelector("#rp-hint"),K=V.querySelector("#rp-avatar");x.classList.remove("rp-pop"),K==null||K.classList.remove("rp-pop"),u.style.borderStyle="dashed",u.style.borderColor="#fbbf24",u.style.boxShadow="none";const W=(m,A=!1)=>{K&&(K.style.display="flex",K.style.transition=A?"opacity 0.06s ease":"opacity 0.3s ease",K.style.opacity="0",setTimeout(()=>{K.innerHTML=m.image_url?`<img src="${m.image_url}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${(m.full_name??"?").charAt(0)}</div>`,K.style.opacity="1"},A?30:80))};W(f[Math.floor(Math.random()*f.length)],!0);let se=0,le=55;const k=()=>{const m=f[Math.floor(Math.random()*f.length)];x.textContent=m.full_name,g.textContent=m.seat_no?`เลขที่ ${m.seat_no}`:"",W(m,!0),se++,se<26?(le=Math.min(le*1.13,420),setTimeout(k,le)):(x.textContent=y.full_name,g.textContent=y.seat_no?`เลขที่ ${y.seat_no}`:"",W(y,!1),K==null||K.classList.add("rp-pop"),x.classList.add("rp-pop"),u.style.borderStyle="solid",u.style.borderColor="#10b981",u.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",E&&(E.textContent="🎉 ได้คนนี้แหละ!"),Zt(u),n())};k()}function F(f,y,n){const u=V.querySelector("#rp-stage"),x=V.querySelector("#rp-hint"),g=V.querySelector("#rp-grid");if(!g)return S(f,y,n);let E=[...g.querySelectorAll(".rp-grid-tile")],K=E.find(m=>Number(m.dataset.id)===y.id);if(!K){const m=`hsl(${y.id*47%360},60%,55%)`,A=Math.floor(Math.random()*E.length);E[A].dataset.id=y.id,E[A].innerHTML=(y.image_url?`<img src="${h(y.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${m}">${h((y.full_name??"?").charAt(0))}</div>`)+`<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${y.seat_no??""}</div>`,K=E[A]}x&&(x.textContent="กำลังสุ่ม..."),u.style.borderColor="#fbbf24";let W=null,se=0,le=38;const k=()=>{W==null||W.classList.remove("rp-active");const m=E[Math.floor(Math.random()*E.length)];m.classList.add("rp-active"),W=m,se++,se<36?(le=Math.min(le*1.1,520),setTimeout(k,le)):(W==null||W.classList.remove("rp-active"),K.classList.add("rp-winner"),x&&(x.textContent=`🎉 ที่ ${y.seat_no??""} ${y.full_name}`),K.scrollIntoView({behavior:"smooth",block:"nearest"}),setTimeout(()=>{r(u,y),n()},900))};k()}function Z(f,y,n){const u=V.querySelector("#rp-stage"),x=V.querySelector("#rp-hint"),g=V.querySelector("#rp-elim-grid"),E=V.querySelector("#rp-elim-counter");if(!g)return S(f,y,n);x&&(x.textContent="กำลังตัดออก...");const K=f.filter(A=>A.id!==y.id).sort(()=>Math.random()-.5),W=K.length;let se=f.length,le=0;const k=A=>A<.55?50:A<.8?50+(A-.55)/.25*260:310+Math.pow((A-.8)/.2,2)*1400,m=()=>{if(le>=W){const U=g.querySelector(`[data-id="${y.id}"]`);U==null||U.classList.remove("rp-last"),U==null||U.classList.add("rp-winner"),U==null||U.scrollIntoView({behavior:"smooth",block:"nearest"}),x&&(x.textContent=`🎉 ที่ ${y.seat_no??""} ${y.full_name}`),E&&(E.textContent="เหลือ 1 คน!"),setTimeout(()=>{r(u,y),n()},900);return}const A=g.querySelector(`[data-id="${K[le].id}"]`);A==null||A.classList.remove("rp-last"),A==null||A.classList.add("rp-eliminated"),se--,E&&(E.textContent=`เหลือ ${se} คน`),se<=4&&g.querySelectorAll(".rp-elim-tile:not(.rp-eliminated)").forEach(U=>U.classList.add("rp-last")),le++,setTimeout(m,k(le/(W||1)))};m()}function te(f,y,n){const u=V.querySelector("#rp-stage"),x=V.querySelector("#rp-hint"),g=[V.querySelector("#rp-reel-0"),V.querySelector("#rp-reel-1"),V.querySelector("#rp-reel-2")];if(!g[0])return S(f,y,n);x&&(x.textContent="กำลังหมุน..."),u.style.borderColor="#fbbf24";const E=[f[Math.floor(Math.random()*f.length)],y,f[Math.floor(Math.random()*f.length)]],K=[18,28,22],W=[!1,!1,!1],se=(A,U)=>{const ee=A.querySelector(".rp-reel-inner");ee&&(ee.style.opacity="0",setTimeout(()=>{const _=`hsl(${U.id*47%360},60%,55%)`;ee.innerHTML=`<div class="flex-1 w-full rounded-xl overflow-hidden">${U.image_url?`<img src="${h(U.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-xl" style="background:${_}">${h((U.full_name??"?").charAt(0))}</div>`}</div><div class="text-[9px] font-bold text-gray-600 truncate w-full text-center leading-none mt-1">${h(U.full_name)}</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">${U.seat_no?`ที่ ${U.seat_no}`:"·"}</div>`,ee.style.opacity="1"},30))};let le=0,k=50;const m=()=>{le++,g.forEach((A,U)=>{W[U]||(le===K[U]?(W[U]=!0,setTimeout(()=>{se(A,E[U]),A.classList.add(U===1?"rp-winner-reel":"rp-locked"),U===1&&(x&&(x.textContent="🎉 ได้คนนี้แหละ!"),setTimeout(()=>{r(u,y),n()},900))},200)):se(A,f[Math.floor(Math.random()*f.length)]))}),W[1]||(k=le<12?50:Math.min(50*Math.pow(1.09,le-12),450),setTimeout(m,k))};m()}const s=["#f59e0b","#ec4899","#6366f1","#10b981","#06b6d4","#ef4444","#8b5cf6","#f97316"],i=()=>{const f=j.map(y=>({no:y.no,student_ids:y.items.map(n=>n.id)}));_n(e,f).catch(()=>{})},l=(f,y)=>{const n=Number(f);let u=null;if(j.forEach(x=>{const g=x.items.findIndex(E=>E.id===n);g!==-1&&(u=x.items.splice(g,1)[0])}),u||(u=Q.get(n)),!!u){if(y){const x=j.find(g=>g.no===y);x&&x.items.push(u)}$(),i()}};function $(){const f=new Set(j.flatMap(x=>x.items.map(g=>g.id))),y=a.filter(x=>!f.has(x.id)),n=(x,g)=>`
      <div class="relative">
        <select data-move="${x.id}" class="w-full appearance-none text-xs font-medium border border-gray-200 rounded-xl pl-3 pr-7 py-1.5 bg-gray-50 text-gray-600 hover:border-gray-300 focus:border-indigo-400 focus:bg-white outline-none transition cursor-pointer">
          <option value="0" ${g===0?"selected":""}>ยังไม่จัดกลุ่ม</option>
          ${j.map(E=>`<option value="${E.no}" ${E.no===g?"selected":""}>ย้ายไปกลุ่มที่ ${E.no}</option>`).join("")}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[9px]">▾</span>
      </div>`,u=(x,g,E)=>`
      <div class="py-1.5 px-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2.5 min-w-0">
          ${x.image_url?`<img src="${h(x.image_url)}" class="w-8 h-11 rounded-xl object-cover flex-shrink-0" style="box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;" />`:`<div class="w-8 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style="background:linear-gradient(160deg,${E},${E}cc);box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;">${h((x.full_name??"?").charAt(0))}</div>`}
          <span class="text-sm font-medium text-gray-700 truncate flex-1 min-w-0">${h(x.full_name)}</span>
        </div>
        <div class="mt-1.5 pl-[calc(2rem+0.625rem)]">${n(x,g)}</div>
      </div>`;V.innerHTML=`
      <div class="flex items-center justify-between gap-2 mb-1 px-0.5">
        <p class="text-xs text-gray-400 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>บันทึกอัตโนมัติทุกการเปลี่ยนแปลง
        </p>
        <button id="rp-group-regen" class="px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">🎲 จัดกลุ่มใหม่</button>
      </div>
      ${y.length?`
      <div class="mt-3 rounded-2xl border border-amber-200/70 p-3.5" style="background:linear-gradient(135deg,#fffbeb,#fff7ed);">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] flex-shrink-0">!</span>
          <p class="text-xs font-bold text-amber-700">ยังไม่ได้จัดกลุ่ม (${y.length} คน)</p>
        </div>
        <div>${y.map(x=>u(x,0,"#94a3b8")).join("")}</div>
      </div>`:""}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
        ${j.map((x,g)=>{const E=s[g%s.length];return`
          <div class="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
            <div class="px-3.5 py-2.5 text-white flex items-center justify-between" style="background:linear-gradient(135deg,${E},${E}dd);">
              <span class="text-sm font-bold flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center text-xs font-extrabold flex-shrink-0">${x.no}</span>
                กลุ่มที่ ${x.no}
              </span>
              <span class="text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full flex-shrink-0">${x.items.length} คน</span>
            </div>
            <div class="p-2.5 divide-y divide-gray-50">
              ${x.items.length?x.items.map(K=>u(K,x.no,E)).join(""):`
                <div class="flex flex-col items-center justify-center py-6 text-gray-300">
                  <span class="text-2xl mb-1">🪄</span>
                  <span class="text-xs">ยังไม่มีใครในกลุ่มนี้</span>
                </div>`}
            </div>
          </div>`}).join("")}
      </div>
    `,V.querySelector("#rp-group-regen").addEventListener("click",async()=>{await pt({title:"จัดกลุ่มใหม่?",message:"การจัดกลุ่มปัจจุบันจะถูกล้างทั้งหมด แล้วเริ่มสุ่มใหม่",confirmText:"จัดกลุ่มใหม่"})&&(j=null,hn(e).catch(()=>{}),I())}),V.querySelectorAll("[data-move]").forEach(x=>{x.addEventListener("change",()=>l(x.dataset.move,Number(x.value)))})}function I(){let f="all",y=null,n=new Set(a.map(k=>k.id)),u="count";const x=()=>f==="present"?y?a.filter(k=>y.has(k.id)):[]:f==="manual"?a.filter(k=>n.has(k.id)):a;V.innerHTML=`
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
    `;const g=k=>{const m=[...k];for(let A=m.length-1;A>0;A--){const U=Math.floor(Math.random()*(A+1));[m[A],m[U]]=[m[U],m[A]]}return m},E=(k,m)=>{const A=g(k);if(!A.length)return[];if(u==="count"){const _=Math.min(m,A.length),X=Array.from({length:_},()=>[]);return A.forEach((N,z)=>X[z%_].push(N)),X}const U=Math.min(m,A.length),ee=[];for(let _=0;_<A.length;_+=U)ee.push(A.slice(_,_+U));return ee},K=()=>{const k=x(),A=new Set(k.map(X=>X.gender).filter(Boolean)).size>1,U=V.querySelector("#rp-count-section");U.innerHTML=`
        <div class="flex items-center gap-2 mb-3">
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="count">📦 กำหนดจำนวนกลุ่ม</button>
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="size">👤 กำหนดคนต่อกลุ่ม</button>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <input id="rp-gnum" type="number" min="1" max="${Math.max(1,k.length)}" value="4"
            class="${Ce} w-24 flex-shrink-0 text-center font-bold text-lg" />
          <span id="rp-gnum-label" class="text-xs text-gray-400">กลุ่ม (จากทั้งหมด ${k.length} คน)</span>
        </div>
        ${A?`
        <label class="flex items-start gap-2.5 mb-4 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 cursor-pointer">
          <input id="rp-gender-split" type="checkbox" class="mt-0.5 w-4 h-4 rounded accent-pink-500" />
          <span class="text-xs text-gray-600 leading-relaxed">⚧ <strong>แยกกลุ่มตามเพศ</strong> — แต่ละกลุ่มจะมีนักเรียนเพศเดียวกันเท่านั้น (ไม่ติ๊ก = คละเพศได้ในกลุ่มเดียวกัน)</span>
        </label>`:""}
      `;const ee=[...U.querySelectorAll(".rp-gmode-btn")],_=X=>{u=X,ee.forEach(z=>{const re=z.dataset.gmode===X;z.className=`rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${re?"border-pink-300 bg-pink-50 text-pink-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`});const N=U.querySelector("#rp-gnum-label");N.textContent=X==="count"?`กลุ่ม (จากทั้งหมด ${k.length} คน)`:`คน/กลุ่ม (จากทั้งหมด ${k.length} คน)`,U.querySelector("#rp-gnum").value=4};ee.forEach(X=>X.addEventListener("click",()=>_(X.dataset.gmode))),_("count")},W=()=>{const k=V.querySelector("#rp-pool-info"),m=x().length;f==="all"?k.textContent=`ทั้งห้อง ${a.length} คน`:f==="present"?k.textContent=y===null?"กำลังโหลดข้อมูลเช็คชื่อวันนี้...":`มาเรียนวันนี้ ${m} คน${m===0?" (ยังไม่ได้เช็คชื่อวันนี้ หรือทุกคนขาด/ลา)":""}`:k.textContent=`เลือกไว้ ${m} คน`},se=()=>{const k=V.querySelector("#rp-pool-manual-list");k.innerHTML=`
        <div class="flex justify-end gap-2 mb-1.5">
          <button id="rp-manual-all" type="button" class="text-[11px] text-indigo-500 hover:underline">เลือกทั้งหมด</button>
          <button id="rp-manual-none" type="button" class="text-[11px] text-gray-400 hover:underline">ไม่เลือกเลย</button>
        </div>
        ${a.map(m=>`
          <label class="flex items-center gap-2 py-1 px-1 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="checkbox" class="rp-manual-cb w-3.5 h-3.5 rounded" data-sid="${m.id}" ${n.has(m.id)?"checked":""} />
            <span class="text-xs text-gray-700 truncate">${h(m.full_name)}</span>
          </label>
        `).join("")}
      `,k.querySelector("#rp-manual-all").addEventListener("click",()=>{n=new Set(a.map(m=>m.id)),se(),W(),K()}),k.querySelector("#rp-manual-none").addEventListener("click",()=>{n=new Set,se(),W(),K()}),k.querySelectorAll(".rp-manual-cb").forEach(m=>{m.addEventListener("change",()=>{const A=parseInt(m.dataset.sid,10);m.checked?n.add(A):n.delete(A),W(),K()})})},le=async k=>{if(f=k,V.querySelectorAll(".rp-pool-btn").forEach(m=>{const A=m.dataset.pool===k;m.className=`rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${A?"border-amber-300 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`}),V.querySelector("#rp-pool-manual-list").classList.toggle("hidden",k!=="manual"),k==="manual"&&se(),k==="present"&&y===null){W();try{const m=new Date(Date.now()+252e5).toISOString().slice(0,10),A=await wn(e,m);y=new Set(A.filter(U=>U.status==="present"||U.status==="late").map(U=>U.student_id))}catch{y=new Set}}W(),K()};V.querySelectorAll(".rp-pool-btn").forEach(k=>k.addEventListener("click",()=>le(k.dataset.pool))),le("all"),V.querySelector("#rp-group-go").addEventListener("click",()=>{var _;if(!d){const X=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);if(X>=q){H();return}localStorage.setItem("pp5_free_random_count",String(X+1))}const k=x();if(!k.length){P("ยังไม่มีนักเรียนในกลุ่มที่เลือกไว้","warning");return}const m=Math.max(1,parseInt(V.querySelector("#rp-gnum").value,10)||1),A=!!((_=V.querySelector("#rp-gender-split"))!=null&&_.checked);let U;A?U=[k.filter(X=>X.gender==="ชาย"),k.filter(X=>X.gender==="หญิง"),k.filter(X=>X.gender!=="ชาย"&&X.gender!=="หญิง")].filter(X=>X.length):U=[k];let ee=1;j=U.flatMap(X=>E(X,m).map(N=>({no:ee++,items:N}))),$(),i()})}function oe(){j?$():I()}T("pick")}async function qs(e,t,a,d,L,q,H,v,p="info"){var f,y;(f=document.getElementById("combined-edit-modal"))==null||f.remove();const[B,R,Q,j]=await Promise.all([De(t.id).catch(()=>[]),$e().catch(()=>({})),Xs(t.id).catch(()=>[]),Zs(t.class_name).catch(()=>null)]);let b=Q.map(n=>n.students).filter(Boolean);const O=n=>n?"cem-tab px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px":"cem-tab px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition",G="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200",ne=[...new Set(a.map(n=>n.building))].sort(),ae=t.classroom_id?a.find(n=>n.id===t.classroom_id):null,V=L[t.id]??[],ie=["","จ","อ","พ","พฤ","ศ","ส","อา"],T=document.createElement("div");T.id="combined-edit-modal",T.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 p-4",T.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขห้องเรียน</h3>
        <button id="cem-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <p class="text-xs text-gray-400 px-6 pb-3 flex-shrink-0">${h(((y=t.master_subjects)==null?void 0:y.subject_name)??"")} · ${h(t.class_name??"")}</p>
      <div class="flex border-b border-gray-100 px-6 flex-shrink-0">
        <button class="${O(!0)}" data-cem="info">ข้อมูลพื้นฐาน</button>
        <button class="${O(!1)}" data-cem="schedule">ตารางสอน</button>
        <button class="${O(!1)}" data-cem="room">ห้องสอน</button>
      </div>
      <div id="cem-content" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="px-6 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="cem-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>
    </div>`,document.body.appendChild(T);let C=!1,w=!1,J=null,D=!1;const M=n=>{const u=T.querySelector("#cem-info-status");if(!u)return;const x={dirty:{cls:"text-amber-500",text:"● มีการเปลี่ยนแปลง"},saving:{cls:"text-indigo-500",text:"⏳ กำลังบันทึก..."},saved:{cls:"text-emerald-600",text:"✅ บันทึกแล้ว"},error:{cls:"text-red-500",text:"⚠️ บันทึกไม่สำเร็จ"}},g=x[n]??x.saved;u.className=`text-xs font-medium ${g.cls}`,u.textContent=g.text,u.classList.remove("hidden")},c=async()=>{var n,u,x,g,E,K,W;if(T.querySelector("#cem-classname")){w=!0,M("saving");try{const se=(n=T.querySelector("#cem-source-class"))==null?void 0:n.value;await at(t.id,{class_name:T.querySelector("#cem-classname").value.trim()||t.class_name,skill_group:T.querySelector("#cem-skillgroup").value.trim()||null,google_sheet_id:T.querySelector("#cem-sheetid").value.trim()||null,head_student_id:T.querySelector("#cem-head").value?Number(T.querySelector("#cem-head").value):null,day1_date:((u=T.querySelector("#cem-day1"))==null?void 0:u.value)||null,day2_date:((x=T.querySelector("#cem-day2"))==null?void 0:x.value)||null,day3_date:((g=T.querySelector("#cem-day3"))==null?void 0:g.value)||null,day4_date:((E=T.querySelector("#cem-day4"))==null?void 0:E.value)||null,day5_date:((K=T.querySelector("#cem-day5"))==null?void 0:K.value)||null,day6_date:((W=T.querySelector("#cem-day6"))==null?void 0:W.value)||null,source_class_id:se?Number(se):null}),C=!1,D=!0,M("saved")}catch{M("error")}finally{w=!1}}},r=(n=!1)=>{C=!0,M("dirty"),clearTimeout(J),J=setTimeout(c,n?0:800)},S=()=>{const n=B.map(u=>`<option value="${u.id}" data-code="${h(u.student_code)}" data-img="${h(u.image_url??"")}" data-room="${h(u.main_room??"")}"
         ${Number(t.head_student_id)===Number(u.id)?"selected":""}>
         ${h(u.full_name)} (${h(u.student_code)})</option>`).join("");return`
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง / ระดับชั้น</label>
        <input id="cem-classname" type="text" value="${h(t.class_name??"")}" class="${G}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">กลุ่มทักษะ</label>
        <input id="cem-skillgroup" type="text" value="${h(t.skill_group??"")}" placeholder="เช่น วิชาการ, ภาษา, ชีวิต" class="${G}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">Google Sheet ID</label>
        <input id="cem-sheetid" type="text" value="${h(t.google_sheet_id??"")}" placeholder="ID จาก URL ของ Sheet" class="${G} font-mono" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">หัวหน้าห้อง</label>
        <select id="cem-head" class="${G} bg-white">
          <option value="">— ยังไม่ระบุ —</option>
          ${n}
        </select>
        ${B.length===0?'<p class="text-xs text-amber-500 mt-1">ยังไม่มีนักเรียนในห้อง จึงยังเลือกหัวหน้าไม่ได้</p>':""}
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
          ${[1,2,3,4,5,6].map(u=>`
          <div>
            <p class="text-xs text-gray-400 mb-1">คาบที่ ${u}</p>
            <input id="cem-day${u}" type="date" value="${t[`day${u}_date`]??""}"
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
          <input id="cem-attendance-delegate" type="checkbox" class="w-5 h-5 flex-shrink-0" ${t.attendance_delegate_enabled?"checked":""} />
        </label>
        <p id="cem-attendance-delegate-status" class="hidden text-xs font-medium mt-1.5"></p>

        <div class="mt-3 space-y-2">
          <div id="cem-delegate-chips" class="flex flex-wrap gap-1.5"></div>
          <div id="cem-delegate-suggest" class="flex flex-wrap gap-1.5"></div>
          <div class="relative">
            <input id="cem-delegate-search" type="text" placeholder="พิมพ์รหัสหรือชื่อนักเรียนในห้องนี้เพื่อเพิ่ม..."
              class="${G} text-xs" autocomplete="off"
              ${B.length===0?"disabled":""} />
            <div id="cem-delegate-results" class="hidden absolute z-20 left-0 right-0 top-full mt-1 max-h-52 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg"></div>
          </div>
          ${B.length===0?'<p class="text-xs text-amber-500">ยังไม่มีนักเรียนในห้อง จึงยังมอบหมายไม่ได้</p>':""}
        </div>
      </div>
      <p id="cem-info-status" class="hidden text-xs font-medium text-emerald-600"></p>
    </div>`},F=new Set(V),Z=new Set(V);e!=null&&e.id&&$t(e.id,t.id).then(n=>{const u=T.querySelector("#cem-source-class");if(!u)return;n.forEach(g=>{const E=g.master_subjects,K=`${(E==null?void 0:E.subject_name)??"?"} (${(E==null?void 0:E.subject_code)??""}) — ${g.class_name} · ${(E==null?void 0:E.credit)??"?"} หน่วยกิต`,W=new Option(K,g.id,!1,Number(g.id)===Number(t.source_class_id));u.appendChild(W)});const x=g=>{var le,k;const E=T.querySelector("#cem-source-info");if(!E)return;const K=n.find(m=>Number(m.id)===Number(g));if(!K){E.classList.add("hidden");return}const W=((le=K.master_subjects)==null?void 0:le.credit)??1,se=((k=t.master_subjects)==null?void 0:k.credit)??1;W!==se?(E.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${W} / วิชานี้ ${se}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,E.classList.remove("hidden")):E.classList.add("hidden")};t.source_class_id&&x(t.source_class_id),u.addEventListener("change",()=>{x(u.value),r(!0)})}).catch(()=>{});const te={};Object.entries(L).forEach(([n,u])=>{u.forEach(x=>{te[x]||(te[x]=[]),te[x].push(Number(n))})});const s=Object.fromEntries((window._classesFlat??[]).map(n=>[n.id,n])),i=()=>{const n=d.filter(m=>!m.is_free);if(!n.length)return'<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อน</p>';const x=R.hasFriday==="true"?6:5,g=Array.from({length:x},(m,A)=>A),E=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],K=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50"],W={};n.forEach(m=>{W[`${m.day_of_week}-${m.period_no}`]=m;const A=m.span_periods??1;for(let U=1;U<A;U++)W[`${m.day_of_week}-${m.period_no+U}`]={...m,_secondary:!0}});const se=Object.values(q).sort((m,A)=>m.period_no-A.period_no),le=m=>Z.has(m)?"selected":(te[m]??[]).filter(U=>U!==t.id).length?"other":"none",k=(m,A)=>{const U=m.subject_name?h(m.subject_name):"",ee=m.class_name?h(m.class_name):"";return A==="selected"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
          <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${U}</p>
          ${ee?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${ee}</p>`:""}
        </div>`:A==="other"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
          style="min-height:52px;border-left:3px solid #60a5fa"
          title="คลิกเพื่อเชื่อมร่วมกับ: ${(te[m.id]??[]).filter(N=>N!==t.id).map(N=>{var z;return((z=s[N])==null?void 0:z.class_name)??`ห้อง ${N}`}).join(", ")}">
          <p class="font-bold text-[11px] leading-tight text-blue-600 break-words w-full">${U}</p>
          ${ee?`<p class="text-[10px] text-blue-400 leading-tight w-full">${ee}</p>`:""}
          <p class="text-[9px] text-blue-400 mt-0.5">+เชื่อมร่วม</p>
        </div>`:`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
        bg-white hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400 transition-all"
        style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${U}</p>
        ${ee?`<p class="text-[10px] text-gray-400 leading-tight w-full">${ee}</p>`:""}
      </div>`};return`
      <p class="text-xs text-gray-400 mb-2">คลิกคาบที่ต้องการเชื่อมโยง — กดบันทึกเพื่อยืนยัน</p>
      <div class="overflow-auto rounded-xl border border-gray-100" style="max-height:55vh">
        <table class="w-full text-xs border-collapse" style="min-width:300px">
          <thead class="sticky top-0 z-10">
            <tr class="bg-gray-50">
              <th class="border border-gray-100 px-2 py-2 text-center text-gray-400 w-16 font-medium text-[10px]">คาบ</th>
              ${g.map(m=>`<th class="border border-gray-100 px-1 py-2 text-center font-semibold text-gray-700 text-[11px] ${K[m]}">${E[m]}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${se.map(m=>{var A;return`
            <tr>
              <td class="border border-gray-100 px-1 py-2 text-center bg-gray-50 align-middle">
                <p class="font-bold text-gray-700 text-[10px]">คาบ ${m.period_no}</p>
                <p class="text-[9px] text-gray-400">${((A=m.start_time)==null?void 0:A.slice(0,5))??""}</p>
              </td>
              ${g.map(U=>{const ee=`${U}-${m.period_no}`,_=W[ee];if(_!=null&&_._secondary)return"";if(!_)return'<td class="border border-gray-100 p-0" style="min-width:56px;height:1px"></td>';const X=_.span_periods??1,N=le(_.id);return`<td class="border border-gray-100 p-0 cursor-pointer cem-srow"
                  data-sid="${_.id}" data-state="${N}"
                  style="min-width:56px;height:1px" ${X>1?`rowspan="${X}"`:""}>
                  ${k(_,N)}
                </td>`}).join("")}
            </tr>`}).join("")}
          </tbody>
        </table>
      </div>`},l=n=>{const u=parseInt(n.dataset.sid),x=d.find(se=>se.id===u);if(!x)return;const g=(te[u]??[]).filter(se=>se!==t.id),E=Z.has(u)?"selected":g.length?"other":"none";n.dataset.state=E;const K=x.subject_name?h(x.subject_name):"",W=x.class_name?h(x.class_name):"";if(E==="selected")n.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
        <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${K}</p>
        ${W?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${W}</p>`:""}
      </div>`;else if(E==="other"){const se=g.map(le=>{var k;return((k=s[le])==null?void 0:k.class_name)??`ห้อง ${le}`}).join(", ");n.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${se}">
        <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${K}</p>
        ${W?`<p class="text-[10px] text-gray-400 leading-tight w-full">${W}</p>`:""}
      </div>`}else n.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-white hover:bg-emerald-50 transition-all" style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${K}</p>
        ${W?`<p class="text-[9px] text-gray-400 leading-tight">${W}</p>`:""}
      </div>`},$=()=>{T.querySelectorAll(".cem-srow").forEach(n=>{n.addEventListener("click",async()=>{const u=parseInt(n.dataset.sid),x=n.dataset.state,g=d.find(E=>E.id===u);if(g)if(x==="other"){const K=(te[u]??[]).filter(k=>k!==t.id).map(k=>{var m;return((m=s[k])==null?void 0:m.class_name)??`ห้อง ${k}`}).join(", "),W=q[g.period_no],se=W!=null&&W.start_time?W.start_time.slice(0,5):`คาบ ${g.period_no}`,le=document.createElement("div");le.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",le.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">🔗</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ใช้กับห้องอื่นอยู่</p>
              <p class="text-sm text-gray-500 mb-1">${ie[g.day_of_week]} ${se} · ${h(g.subject_name??"")}</p>
              <p class="text-xs text-gray-500 mb-1">เชื่อมอยู่กับ: <b>${K}</b></p>
              <p class="text-xs text-emerald-600 mb-4">สามารถเชื่อมร่วมกันได้ เช่น กรณีสอนสองห้องพร้อมกัน</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">เชื่อมร่วมกัน</button>
              </div>
            </div>`,document.body.appendChild(le),le.querySelector(".cfm-cancel").addEventListener("click",()=>le.remove()),le.querySelector(".cfm-ok").addEventListener("click",async()=>{le.remove();try{await ot(t.id,u),Z.add(u),F.add(u),D=!0,l(n),P(`เชื่อมร่วมกับ ${K} แล้ว ✅`,"success")}catch(k){P("เชื่อมไม่สำเร็จ: "+ce(k),"error")}})}else if(x==="selected")try{await pn(t.id,u),Z.delete(u),F.delete(u),D=!0,l(n),P("ยกเลิกการเชื่อมแล้ว","info")}catch(E){P("ยกเลิกไม่สำเร็จ: "+ce(E),"error")}else try{await ot(t.id,u),Z.add(u),F.add(u),D=!0,l(n),P("เชื่อมตารางสอนแล้ว ✅","success")}catch(E){P("เชื่อมไม่สำเร็จ: "+ce(E),"error")}})})},I=()=>`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
        <select id="cem-building" class="${G} bg-white">
          <option value="">— ไม่ระบุ —</option>
          ${ne.map(n=>`<option value="${n}" ${(ae==null?void 0:ae.building)===n?"selected":""}>${n}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
        <select id="cem-room" class="${G} bg-white">
          <option value="">— เลือกอาคารก่อน —</option>
        </select>
      </div>
    </div>`,oe=()=>{var X;const n=T.querySelector("#cem-head"),u=T.querySelector("#cem-head-card"),x=()=>{const N=n==null?void 0:n.options[n.selectedIndex];if(!(N!=null&&N.value)){u==null||u.classList.add("hidden");return}const z=N.text.split(" (")[0],re=N.dataset.img??"";T.querySelector("#cem-head-name").textContent=z,T.querySelector("#cem-head-code").textContent=`รหัส: ${N.dataset.code??""}`,T.querySelector("#cem-head-room").textContent=N.dataset.room?`ห้อง: ${N.dataset.room}`:"";const de=T.querySelector("#cem-head-avatar");de.innerHTML=re?`<img src="${re}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${z.charAt(0)}</div>`,u==null||u.classList.remove("hidden")};n==null||n.addEventListener("change",()=>{x(),r(!0)}),n!=null&&n.value&&x();const g=T.querySelector("#cem-attendance-delegate"),E=T.querySelector("#cem-attendance-delegate-status"),K=(N,z)=>{E&&(E.textContent=N,E.className=`text-xs font-medium mt-1.5 ${z}`,E.classList.remove("hidden"))};g==null||g.addEventListener("change",async()=>{const N=g.checked;g.disabled=!0,K("⏳ กำลังบันทึก...","text-indigo-500"),ye(()=>import("./teacher-views-attendance-delegate-eIHOAMMA.js"),__vite__mapDeps([43,1,2,3,4,5,9,7,10,11,6,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then(z=>z.toggleAttendanceDelegateForClass(e,t.id,N,re=>{t.attendance_delegate_enabled=re,g.checked=re,K(re?"✅ เปิดใช้งานแล้ว":"● ปิดใช้งานแล้ว",re?"text-emerald-600":"text-gray-400")}).catch(()=>{g.checked=!N}).finally(()=>{g.disabled=!1,g.checked!==!!t.attendance_delegate_enabled&&(g.checked=!!t.attendance_delegate_enabled)}))});const W=T.querySelector("#cem-delegate-chips"),se=T.querySelector("#cem-delegate-suggest"),le=T.querySelector("#cem-delegate-search"),k=T.querySelector("#cem-delegate-results"),m=()=>new Set(b.map(N=>N.id)),A=()=>{W&&(W.innerHTML=b.length?b.map(N=>`
          <span class="delegate-chip inline-flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700" data-sid="${N.id}">
            ${N.image_url?`<img src="${h(N.image_url)}" class="w-5 h-5 rounded-full object-cover" />`:`<span class="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center text-[10px]">${h((N.full_name??"?").charAt(0))}</span>`}
            ${h(N.full_name)}
            <button type="button" class="delegate-remove-btn text-emerald-400 hover:text-red-500 ml-0.5" data-sid="${N.id}">✕</button>
          </span>`).join(""):'<p class="text-xs text-gray-300">ยังไม่ได้มอบหมายใคร</p>')},U=()=>{if(!se)return;const N=m(),z=[],re=(de,ue)=>{if(!de||N.has(Number(de)))return;const me=B.find(ge=>Number(ge.id)===Number(de));!me||z.some(ge=>ge.id===me.id)||z.push({id:me.id,full_name:me.full_name,label:ue})};re(j==null?void 0:j.head_student_id,"หัวหน้าห้อง"),re(j==null?void 0:j.vice_head_student_id,"รองหัวหน้าห้อง"),re(t.head_student_id,"หัวหน้าห้องในฟอร์มนี้"),se.innerHTML=z.map(de=>`
        <button type="button" class="delegate-add-suggest-btn inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-xs text-gray-500 hover:border-emerald-300 hover:text-emerald-600" data-sid="${de.id}">
          ➕ ${h(de.full_name)} <span class="text-gray-300">(${h(de.label)})</span>
        </button>`).join("")},ee=async N=>{const z=B.find(re=>Number(re.id)===Number(N));if(!(!z||m().has(z.id))){b=[...b,z],A(),U();try{await vn(t.id,z.id)}catch(re){b=b.filter(de=>de.id!==z.id),A(),U(),P("เพิ่มไม่สำเร็จ: "+ce(re),"error")}}},_=async N=>{const z=b.find(re=>Number(re.id)===Number(N));b=b.filter(re=>Number(re.id)!==Number(N)),A(),U();try{await yn(t.id,Number(N))}catch(re){z&&(b=[...b,z]),A(),U(),P("ลบไม่สำเร็จ: "+ce(re),"error")}};W==null||W.addEventListener("click",N=>{const z=N.target.closest(".delegate-remove-btn");z&&_(z.dataset.sid)}),se==null||se.addEventListener("click",N=>{const z=N.target.closest(".delegate-add-suggest-btn");z&&ee(z.dataset.sid)}),le==null||le.addEventListener("input",()=>{const N=le.value.trim().toLowerCase();if(!N){k.classList.add("hidden"),k.innerHTML="";return}const z=m(),re=B.filter(de=>!z.has(de.id)&&(String(de.student_code??"").toLowerCase().includes(N)||String(de.full_name??"").toLowerCase().includes(N))).slice(0,8);k.innerHTML=re.length?re.map(de=>`
          <button type="button" class="delegate-result-btn w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-50 text-xs" data-sid="${de.id}">
            ${de.image_url?`<img src="${h(de.image_url)}" class="w-6 h-6 rounded-full object-cover" />`:'<span class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">👤</span>'}
            <span class="font-semibold text-gray-700">${h(de.full_name)}</span>
            <span class="text-gray-400">${h(de.student_code)}</span>
          </button>`).join(""):'<p class="text-xs text-gray-300 px-3 py-2">ไม่พบนักเรียนที่ตรงกัน</p>',k.classList.remove("hidden")}),k==null||k.addEventListener("click",N=>{const z=N.target.closest(".delegate-result-btn");z&&(ee(z.dataset.sid),le.value="",k.classList.add("hidden"),k.innerHTML="")}),A(),U(),["cem-classname","cem-skillgroup","cem-sheetid"].forEach(N=>{var z;(z=T.querySelector(`#${N}`))==null||z.addEventListener("input",()=>r())}),[1,2,3,4,5,6].forEach(N=>{var z;(z=T.querySelector(`#cem-day${N}`))==null||z.addEventListener("change",()=>r(!0))}),(X=T.querySelector("#cem-auto-dates"))==null||X.addEventListener("click",async()=>{const N=T.querySelector("#cem-auto-dates"),z=T.querySelector("#cem-dates-info");N.textContent="⏳",N.disabled=!0;try{const re=parseInt(R.academicYear??2568),de=parseInt(R.semester??1),ue=R.semester_start??R.term_start_date??zt(new Date),me=e?await Ve(e.id,re,de).catch(()=>[]):[];if(!me.length){z.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",z.classList.remove("hidden");return}const ge={};me.filter(be=>!be.is_free).forEach(be=>{const ve=`${be.subject_name??"?"}|${be.class_name??""}`;ge[ve]||(ge[ve]={label:`${be.subject_name??"?"}${be.class_name?` — ${be.class_name}`:""}`,entries:[]}),ge[ve].entries.push(be)});const bt=["อา","จ","อ","พ","พฤ","ศ","ส"],Ae=be=>{const ve={};return be.forEach(Ee=>{ve[Ee.day_of_week]||(ve[Ee.day_of_week]=[]),ve[Ee.day_of_week].push(Ee.period_no)}),Object.entries(ve).map(([Ee,Be])=>`${bt[Ee]} คาบ ${Be.join(",")}`).join(" · ")},ke=document.createElement("div");ke.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",ke.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
            <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
              <button class="ce-close text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
              <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
              ${Object.entries(ge).map(([be,ve])=>`
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
                <input type="radio" name="cem-dates-subj" value="${h(be)}" class="mt-0.5 flex-shrink-0" />
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
          </div>`,document.body.appendChild(ke),ke.querySelectorAll(".ce-close").forEach(be=>be.addEventListener("click",()=>ke.remove())),ke.querySelector("#cem-calc-btn").addEventListener("click",()=>{var we;const be=(we=ke.querySelector('input[name="cem-dates-subj"]:checked'))==null?void 0:we.value;if(!be){P("กรุณาเลือกวิชาก่อน","warning");return}ke.remove();const ve=ge[be];if(!ve)return;const Ee=Qn(ue)??new Date,Be=Ee.getDay(),pe=[];ve.entries.forEach(he=>{const Se=he.span_periods??1;for(let Me=0;Me<Se;Me++)pe.push({dow:he.day_of_week,pno:(he.period_no??0)+Me})}),pe.sort((he,Se)=>{const Me=(he.dow-Be+7)%7,Nt=(Se.dow-Be+7)%7;return Me!==Nt?Me-Nt:he.pno-Se.pno});const xe=[];let fe=0;for(;xe.length<6;){for(const he of pe){const Se=new Date(Ee);if(Se.setDate(Se.getDate()+(he.dow-Be+7)%7+fe*7),xe.push(Se),xe.length>=6)break}fe++}xe.slice(0,6).forEach((he,Se)=>{const Me=T.querySelector(`#cem-day${Se+1}`);Me&&(Me.value=zt(he))}),r(!0),z.textContent=`✅ คำนวณจาก "${ve.label}" — ตรวจสอบและแก้ไขได้`,z.classList.remove("hidden")})}catch(re){z.textContent="โหลดตารางไม่สำเร็จ: "+ce(re),z.classList.remove("hidden")}finally{N.textContent="🗓️ คำนวณจากตารางสอน",N.disabled=!1}})},Y=n=>{if(w){P("กำลังบันทึกข้อมูล รอสักครู่...","warning");return}if(C){P("มีข้อมูลที่ยังไม่ถูกบันทึก กรุณารอระบบบันทึกก่อน","warning");return}T.querySelectorAll(".cem-tab").forEach(x=>{x.className=O(x.dataset.cem===n)});const u=T.querySelector("#cem-content");if(n==="info")u.innerHTML=S(),oe();else if(n==="schedule")u.innerHTML=i(),$();else{u.innerHTML=I();const x=u.querySelector("#cem-building"),g=u.querySelector("#cem-room"),E=K=>{const W=a.filter(se=>se.building===K);g.innerHTML='<option value="">— เลือกห้อง —</option>'+W.map(se=>`<option value="${se.id}" ${se.id===t.classroom_id?"selected":""}>${se.room_number}${se.name?` — ${se.name}`:""}</option>`).join("")};ae!=null&&ae.building&&E(ae.building),x.addEventListener("change",()=>E(x.value)),g.addEventListener("change",async()=>{const K=g.value?parseInt(g.value):null;await is(t.id,K).catch(()=>{}),D=!0,P("บันทึกห้องสอนแล้ว ✅","success")})}},o=async()=>{(C||w)&&(clearTimeout(J),await c().catch(()=>{})),T.remove(),D&&v&&v()};Y(p),T.querySelectorAll(".cem-tab").forEach(n=>n.addEventListener("click",()=>Y(n.dataset.cem))),T.querySelector("#cem-close").addEventListener("click",o),T.querySelector("#cem-cancel").addEventListener("click",o),T.addEventListener("click",n=>{n.target===T&&o()})}async function Mo(e){je("schedule"),Ie("ตารางสอน","schedule");const t=await $e().catch(()=>({})),a=parseInt(t.academicYear??2568),d=parseInt(t.semester??1);await Fe(e,a,d,t)}async function Fe(e,t,a,d=null){var D,M,c;je("schedule"),Ie("ตารางสอน","schedule");const L=d??await $e().catch(()=>({})),q=L.hasFriday===!0||L.hasFriday==="true",H=L.scheduleVisionEnabled==="true",v=bs(L,e),[p,B,R,Q,j,b]=await Promise.all([mt().catch(()=>[]),e?ds(e.id).catch(()=>[]):Promise.resolve([]),e?Ve(e.id,t,a).catch(()=>[]):Promise.resolve([]),e?jt(e.id).catch(()=>[]):Promise.resolve([]),e?qt(e.id).catch(()=>[]):Promise.resolve([]),e?ut(e.id).catch(()=>[]):Promise.resolve([])]),O=Object.fromEntries((Q??[]).map(r=>[r.room_key,r.color_hex])),G=q||R.some(r=>Number(r.day_of_week)===5),ne=Object.fromEntries(b.map(r=>[r.id,r])),ae={};j.forEach(r=>{ae[r.teacher_schedule_id]||(ae[r.teacher_schedule_id]=ne[r.class_id])});const V=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],ie=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50","bg-blue-50"],T=G?6:5,C=Array.from({length:T},(r,S)=>S),w={};for(const r of R)w[`${r.day_of_week}-${r.period_no}`]=r,(r.span_periods??1)>1&&(w[`${r.day_of_week}-${r.period_no+1}`]={...r,_secondary:!0});const J=(r={},S=null)=>{var Z;const F=r!=null&&r.id?ae[r.id]:null;return We({teacherId:e==null?void 0:e.id,className:(F==null?void 0:F.class_name)??r.class_name,subjectName:((Z=F==null?void 0:F.master_subjects)==null?void 0:Z.subject_name)??r.subject_name??(S==null?void 0:S.subject_name),fallbackId:(F==null?void 0:F.id)??r.subject_id??(S==null?void 0:S.id)},O)};_e(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${a} / ${t} — คลิกช่องเพื่อกำหนดวิชา</p>
      </div>
      <div class="flex gap-2">
        <button id="btn-external-schedule-ai"
          class="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition flex items-center gap-2">
          ✨ ใช้ AI ของฉัน
        </button>
        ${H&&v?`
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
        <p class="text-xs text-sky-600 mt-0.5 leading-relaxed">เปิดดูตารางสอนจากระบบโรงเรียน แล้วแคปหน้าจอให้เห็นตารางทั้งหมด รวมคอลัมน์คาบ/เวลาและทุกวัน หากมีคาบวันศุกร์ต้องเห็นวันศุกร์ด้วย จากนั้นเลือก "✨ ใช้ AI ของฉัน" เพื่อรับ Prompt ไปใช้กับ AI ที่ครูเลือก</p>
      </div>
      <a href="https://azizstan.net/regist2/Schedule/ByTeacher" target="_blank" rel="noopener"
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
            ${C.map(r=>`
            <th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${ie[r]}">
              ${V[r]}
            </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${p.map(r=>{var S,F;return`
          <tr class="hover:bg-gray-50/50">
            <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50">
              <p class="font-bold text-gray-700">คาบ ${r.period_no}</p>
              <p class="text-[10px] text-gray-400">${(S=r.start_time)==null?void 0:S.slice(0,5)}–${(F=r.end_time)==null?void 0:F.slice(0,5)}</p>
            </td>
            ${C.map(Z=>{const te=`${Z}-${r.period_no}`,s=w[te];if(s!=null&&s._secondary)return"";const i=s?B.find(y=>y.id===s.subject_id):null,l=(s==null?void 0:s.span_periods)??1,$=(s==null?void 0:s.subject_name)??(i==null?void 0:i.subject_name)??null,I=(s==null?void 0:s.class_name)??null,oe=(s==null?void 0:s.teacher_name)??null,Y=String((s==null?void 0:s.note)??"").trim(),o=/ปัญหา|ชน|ซ้ำ|ไม่ตรง|ไม่ชัด|อ่านไม่ออก|ต้องยืนยัน|ตรวจสอบ/i.test(Y)?Y:"",f=J(s,i);return`<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${Z}" data-period="${r.period_no}"
                ${l>1?`rowspan="${l}"`:""}>
                ${$?`
                <div class="w-full h-full rounded-none flex flex-col justify-center items-center
                  gap-1 px-2 py-2 text-center" title="${o?h(`ปัญหา: ${o}`):""}" style="min-height:64px;background:${f.soft};color:${f.text};border-left:4px solid ${o?"#f43f5e":f.dot}">
                  <p class="font-extrabold leading-tight text-sm break-words w-full">${$}</p>
                  ${I?`<p class="text-[11px] font-semibold opacity-90 leading-tight w-full">${I}</p>`:""}
                  ${oe?`<p class="text-[10px] opacity-65 leading-tight w-full">${oe}</p>`:""}
                  ${o?`<p class="text-[10px] font-bold text-rose-600 leading-tight w-full">⚠ ${h(o)}</p>`:""}
                </div>`:`
                <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style="min-height:52px">
                  <span class="text-indigo-200 text-2xl">＋</span>
                </div>`}
              </td>`}).join("")}
          </tr>`}).join("")}
        </tbody>
      </table>
    </div>

  </div>`),document.querySelectorAll(".schedule-cell").forEach(r=>{r.addEventListener("click",()=>{const S=parseInt(r.dataset.dow),F=parseInt(r.dataset.period),Z=`${S}-${F}`,te=w[Z];te!=null&&te._secondary||To({teacher:e,dow:S,period:F,periods:p,subjects:B,entry:te,academicYear:t,semester:a,roomColorMap:O,onSave:async s=>{await $n({teacher_id:e.id,...s}),await Fe(e,t,a,L)},onDelete:async()=>{te&&await kn(te.id),await Fe(e,t,a,L)}})})}),(D=document.getElementById("btn-clear-schedule"))==null||D.addEventListener("click",async()=>{confirm("ยืนยันล้างตารางสอนทั้งหมด?")&&(await Gs(e.id,t,a),await Fe(e,t,a,L),P("ล้างตารางแล้ว","success"))}),(M=document.getElementById("btn-external-schedule-ai"))==null||M.addEventListener("click",()=>{mo({teacher:e,subjects:B,periods:p,academicYear:t,semester:a,cfg:L,onImport:r=>Lt(e,B,p,t,a,v,L,r)})}),(c=document.getElementById("btn-upload-schedule"))==null||c.addEventListener("click",()=>{Lt(e,B,p,t,a,v,L)})}async function To({teacher:e,dow:t,period:a,periods:d,subjects:L,entry:q,academicYear:H,semester:v,roomColorMap:p={},onSave:B,onDelete:R}){var Z,te;(Z=document.getElementById("sched-popup"))==null||Z.remove();const Q=await cs().catch(()=>[]),j=await ps().catch(()=>[]),b=[...new Set([...Q,...j])].sort(),O=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],G=d.map(s=>s.period_no),ne=d.find(s=>s.period_no===a),ae=(q==null?void 0:q.subject_name)??(q!=null&&q.subject_id?((te=L.find(s=>s.id===q.subject_id))==null?void 0:te.subject_name)??"":"");let V=ae,ie=(q==null?void 0:q.class_name)??"",T=(q==null?void 0:q.teacher_name)??"",C=We({teacherId:e==null?void 0:e.id,className:ie,subjectName:ae,fallbackId:q==null?void 0:q.subject_id},p).dot,w=!1;const J=L.map(s=>`<option value="${s.subject_name}">`).join(""),D=b.map(s=>`<option value="${s}">`).join(""),M=O.map((s,i)=>`<option value="${i}">${s}</option>`).join(""),c=G.map(s=>`<option value="${s}">คาบ ${s}</option>`).join("");let r=q?[{day_of_week:q.day_of_week,period_no:q.period_no,span_periods:q.span_periods??1}]:[{day_of_week:t,period_no:a,span_periods:1}];const S=document.createElement("div");S.id="sched-popup",S.className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",document.body.appendChild(S);function F(){var i,l,$;const s=gt(C);S.innerHTML=`
      <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">กำหนดวิชา</h3>
            <p class="text-xs text-gray-400">${O[t]} คาบ ${a}${ne?` (${(i=ne.start_time)==null?void 0:i.slice(0,5)}–${(l=ne.end_time)==null?void 0:l.slice(0,5)})`:""}</p>
          </div>
          <button id="sp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <!-- Card body -->
        <div class="overflow-auto flex-1 px-5 py-4">
          <div class="border-2 rounded-xl overflow-hidden" style="border-color:${s.dot}">
            <!-- Subject info -->
            <div class="px-4 py-3 flex items-start gap-3" style="background:${s.dot}18">
              <div class="relative flex-shrink-0 mt-0.5">
                <button id="sp-color" type="button"
                  class="w-11 h-11 rounded-full border-4 border-white shadow-md ring-2 ring-gray-200"
                  style="background:${s.dot}" title="เลือกสีรายวิชา"></button>
                ${w?`
                <div class="absolute left-0 top-14 z-[310] w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
                  <p class="text-xs font-bold text-gray-500 mb-2">สีรายวิชา</p>
                  <div class="grid grid-cols-6 gap-2">
                    ${Je.map(I=>`
                    <button type="button"
                      class="sp-color-option w-8 h-8 rounded-full border-2 ${I.dot.toLowerCase()===C.toLowerCase()?"border-gray-800":"border-white"} shadow-sm"
                      style="background:${I.dot}"
                      data-color="${I.dot}"
                      title="เลือกสี"></button>`).join("")}
                  </div>
                </div>`:""}
              </div>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${h(V)}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${h(ie)}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${h(T)}" placeholder="ชื่อครู (ไม่บังคับ)" />
                  <button id="sp-hide-teacher" type="button" class="text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap">ไม่แสดง</button>
                </div>
              </div>
            </div>
            <!-- Sessions -->
            <div id="sp-sessions" class="px-4 pt-3 pb-2 space-y-1.5">
              ${r.map((I,oe)=>`
              <div class="flex items-center gap-1.5 sp-sess-row" data-si="${oe}">
                <select class="sp-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${oe}">
                  ${M}
                </select>
                <select class="sp-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${oe}">
                  ${c}
                </select>
                <select class="sp-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-si="${oe}">
                  <option value="1">1 คาบ</option>
                  <option value="2">2 คาบ</option>
                  <option value="3">3 คาบ</option>
                  <option value="4">4 คาบ</option>
                </select>
                <button type="button" class="sp-del-sess text-red-300 hover:text-red-500 text-base" data-si="${oe}">✕</button>
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
                style="background:${s.dot}">บันทึก</button>
              ${q?`<button id="sp-delete" type="button"
                class="py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50">ลบ</button>`:""}
            </div>
          </div>
          <datalist id="sp-subj-list">${J}</datalist>
          <datalist id="sp-room-list">${D}</datalist>
        </div>
        <!-- Global cancel -->
        <div class="px-5 pb-5 pt-2 border-t border-gray-100 flex-shrink-0">
          <button id="sp-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`,r.forEach((I,oe)=>{const Y=S.querySelector(`.sp-sess-row[data-si="${oe}"]`);Y&&(Y.querySelector(".sp-dow").value=I.day_of_week??t,Y.querySelector(".sp-period").value=I.period_no??a,Y.querySelector(".sp-span").value=I.span_periods??1)}),S.querySelector("#sp-close").addEventListener("click",()=>S.remove()),S.querySelector("#sp-cancel").addEventListener("click",()=>S.remove()),S.querySelector("#sp-subj-name").addEventListener("input",I=>{V=I.target.value}),S.querySelector("#sp-class").addEventListener("input",I=>{ie=I.target.value}),S.querySelector("#sp-teacher").addEventListener("input",I=>{T=I.target.value}),S.querySelector("#sp-color").addEventListener("click",()=>{w=!w,F()}),S.querySelector("#sp-hide-teacher").addEventListener("click",()=>{T="",S.querySelector("#sp-teacher").value=""}),S.querySelectorAll(".sp-color-option").forEach(I=>I.addEventListener("click",()=>{C=I.dataset.color,w=!1,F()})),S.querySelectorAll(".sp-dow").forEach(I=>I.addEventListener("change",()=>{r[+I.dataset.si].day_of_week=+I.value})),S.querySelectorAll(".sp-period").forEach(I=>I.addEventListener("change",()=>{r[+I.dataset.si].period_no=+I.value})),S.querySelectorAll(".sp-span").forEach(I=>I.addEventListener("change",()=>{r[+I.dataset.si].span_periods=+I.value})),S.querySelectorAll(".sp-del-sess").forEach(I=>I.addEventListener("click",()=>{r.splice(+I.dataset.si,1),r.length||r.push({day_of_week:t,period_no:a,span_periods:1}),F()})),S.querySelector("#sp-add-sess").addEventListener("click",()=>{r.push({day_of_week:t,period_no:G[0]??a,span_periods:1}),F()}),($=S.querySelector("#sp-delete"))==null||$.addEventListener("click",async()=>{S.remove(),await R()}),S.querySelector("#sp-save").addEventListener("click",async()=>{var f,y,n,u;const I=S.querySelector("#sp-subj-name").value.trim()||null,oe=S.querySelector("#sp-class").value.trim()||null,Y=S.querySelector("#sp-teacher").value.trim()||null,o=((f=L.find(x=>x.subject_name===I))==null?void 0:f.id)??null;if(oe||I||o)try{await us({teacher_id:e.id,room_key:xt({className:oe,subjectName:I,fallbackId:o}),class_name:oe,color_hex:C})}catch(x){P("บันทึกสีไม่ได้: "+ce(x),"warning")}S.remove(),await B({day_of_week:((y=r[0])==null?void 0:y.day_of_week)??t,period_no:((n=r[0])==null?void 0:n.period_no)??a,span_periods:((u=r[0])==null?void 0:u.span_periods)??1,subject_id:o,subject_name:I,class_name:oe,teacher_name:Y,note:null,academic_year:H,semester:v})})}F()}async function Lt(e,t,a,d,L,q,H,v=[]){var T;(T=document.getElementById("vision-upload"))==null||T.remove();const p=await cs().catch(()=>[]),B=await ps().catch(()=>[]),R=[...new Set([...p,...B])].sort(),Q=e!=null&&e.id?await jt(e.id).catch(()=>[]):[],j=Object.fromEntries((Q??[]).map(C=>[C.room_key,C.color_hex])),b=document.createElement("div");b.id="vision-upload",b.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",b.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">🤖 ${v.length?"ตรวจสอบตารางสอนจาก AI":"วิเคราะห์รูปตารางสอน"}</h3>
          <p class="text-xs text-gray-400 mt-0.5">${v.length?"ตรวจรายการจาก JSON แล้วบันทึกทุกคาบพร้อมกันได้":"อัปโหลดรูปตารางสอน → AI จะเติมข้อมูลลงตารางให้"}</p>
        </div>
        <button id="vision-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="overflow-auto flex-1 px-5 py-4 space-y-3">

        <!-- ลิงค์ดูตารางสอนโรงเรียน -->
        <div class="bg-sky-50 border border-sky-200 rounded-xl p-3 space-y-2">
          <div class="flex items-center justify-between gap-3">
            <p class="text-xs font-semibold text-sky-800">📅 ตารางสอนของโรงเรียน</p>
            <a href="https://azizstan.net/regist2/Schedule/ByTeacher" target="_blank" rel="noopener"
               class="flex-shrink-0 px-3 py-1.5 bg-sky-600 text-white rounded-lg font-bold text-[11px] hover:bg-sky-700 transition">
              เปิดตารางสอน ↗
            </a>
          </div>
          <p class="text-xs text-sky-700 leading-relaxed">ระบบมีเครื่องมือช่วยกรอกตารางสอนอัตโนมัติ — เปิดตารางสอนจากระบบโรงเรียน แล้วแคปให้เห็นตารางทั้งหมด หากมีคาบสอนวันศุกร์ต้องเห็นคอลัมน์วันศุกร์ด้วย จากนั้นอัปโหลดที่นี่เพื่อให้ AI เติมข้อมูล</p>
        </div>

        <!-- คำแนะนำแคปหน้าจอ -->
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 space-y-1.5">
          <p class="font-semibold">📸 วิธีแคปหน้าจอให้ถูกต้อง</p>
          <ul class="space-y-1 leading-relaxed">
            <li>• ให้เห็น <b>คอลัมน์ซ้ายสุด</b> (คาบ / ช่วงเวลา) ครบทุกคาบ</li>
            <li>• ให้เห็น <b>หัววันครบทุกวัน</b> และถ้าครูมีคาบสอนวันศุกร์ ต้องเห็น <b>คอลัมน์วันศุกร์</b> ด้วย</li>
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
    </div>`,document.body.appendChild(b),b.querySelector("#vision-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#vision-close").addEventListener("click",()=>b.remove());let O=null,G="image/jpeg",ne=Array.isArray(v)?v.map(C=>({...C,sessions:(C.sessions??[]).map(w=>({...w}))})):[];const ae=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],V=a.map(C=>C.period_no);function ie(){const C=b.querySelector("#vision-groups");if(!C)return;const w=ae.map((c,r)=>`<option value="${r}">${c}</option>`).join(""),J=V.map(c=>`<option value="${c}">คาบ ${c}</option>`).join(""),D=t.map(c=>`<option value="${c.subject_name}">`).join(""),M=R.map(c=>`<option value="${c}">`).join("");C.innerHTML="",ne.forEach((c,r)=>{const S=c.color_hex?gt(c.color_hex):We({teacherId:e==null?void 0:e.id,className:c.class_name,subjectName:c.subject_name,fallbackId:c.subject_id},j),F=document.createElement("div");F.className="border-2 rounded-xl overflow-hidden vg-card",F.style.borderColor=S.dot,F.innerHTML=`
        <!-- Group header -->
        <div class="px-4 py-3 flex items-start gap-3" style="background:${S.dot}18">
          <button type="button" class="vg-color w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow mt-0.5"
            style="background:${S.dot}" title="สีประจำห้อง" data-gi="${r}"></button>
          <div class="flex-1 space-y-1.5 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา/กิจกรรม</span>
              <input list="subj-list-${r}" class="vg-subj-name flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                value="${c.subject_name??""}" placeholder="ชื่อวิชาหรือกิจกรรม" data-gi="${r}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง (ถ้ามี)</span>
              <input list="room-list-${r}" class="vg-class flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                value="${c.class_name??""}" placeholder="ชั้น/ห้อง (ไม่บังคับ)" data-gi="${r}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
              <input class="vg-teacher flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                value="${c.teacher_name??""}" placeholder="ชื่อครู (ไม่บังคับ)" data-gi="${r}" />
              <button type="button" class="vg-hide-teacher text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap" data-gi="${r}">
                ไม่แสดงชื่อครู
              </button>
            </div>
            <div class="flex items-center gap-1.5 pt-1">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">สี</span>
              <div class="flex flex-wrap gap-1.5">
                ${Je.map(Z=>`
                <button type="button"
                  class="vg-color-option w-5 h-5 rounded-full border-2 ${Z.dot.toLowerCase()===S.dot.toLowerCase()?"border-gray-700":"border-white"} shadow-sm"
                  style="background:${Z.dot}"
                  data-gi="${r}"
                  data-color="${Z.dot}"
                  title="เลือกสี"></button>`).join("")}
              </div>
            </div>
          </div>
        </div>
        <!-- Sessions -->
        <div class="px-4 pt-3 pb-2 space-y-1.5 vg-sessions" data-gi="${r}">
          ${c.sessions.map((Z,te)=>`
          <div class="flex items-center gap-1.5 vs-row" data-gi="${r}" data-si="${te}">
            <select class="vs-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${r}" data-si="${te}">
              ${w}
            </select>
            <select class="vs-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${r}" data-si="${te}">
              ${J}
            </select>
            <select class="vs-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-gi="${r}" data-si="${te}">
              <option value="1">1 คาบ</option>
              <option value="2">2 คาบ</option>
              <option value="3">3 คาบ</option>
              <option value="4">4 คาบ</option>
            </select>
            <button type="button" class="vs-del text-red-300 hover:text-red-500 text-base" data-gi="${r}" data-si="${te}">✕</button>
          </div>`).join("")}
          <button type="button" class="vg-add-session w-full py-1.5 rounded-lg border border-dashed border-gray-200
            text-[11px] text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition" data-gi="${r}">
            + เพิ่มคาบ
          </button>
        </div>
        <!-- ลบกลุ่มได้ แต่บันทึกทั้งตารางพร้อมกันจากปุ่มด้านล่าง -->
        <div class="px-4 pb-3 flex justify-end">
          <button type="button" class="vg-del-group py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50 transition" data-gi="${r}">
            ลบกลุ่มนี้
          </button>
        </div>
        <datalist id="subj-list-${r}">${D}</datalist>
        <datalist id="room-list-${r}">${M}</datalist>`,C.appendChild(F),c.sessions.forEach((Z,te)=>{const s=F.querySelector(`.vs-row[data-gi="${r}"][data-si="${te}"]`);s&&(s.querySelector(".vs-dow").value=Z.day_of_week??0,s.querySelector(".vs-period").value=Z.period_no??1,s.querySelector(".vs-span").value=Z.span_periods??1)})}),C.querySelectorAll(".vg-subj-name").forEach(c=>c.addEventListener("input",()=>{ne[+c.dataset.gi].subject_name=c.value})),C.querySelectorAll(".vg-class").forEach(c=>c.addEventListener("input",()=>{ne[+c.dataset.gi].class_name=c.value})),C.querySelectorAll(".vg-teacher").forEach(c=>c.addEventListener("input",()=>{ne[+c.dataset.gi].teacher_name=c.value})),C.querySelectorAll(".vg-hide-teacher").forEach(c=>c.addEventListener("click",()=>{const r=+c.dataset.gi;ne[r].teacher_name="";const S=C.querySelector(`.vg-teacher[data-gi="${r}"]`);S&&(S.value="")})),C.querySelectorAll(".vg-color-option").forEach(c=>c.addEventListener("click",()=>{ne[+c.dataset.gi].color_hex=c.dataset.color,ie()})),C.querySelectorAll(".vg-del-group").forEach(c=>c.addEventListener("click",()=>{ne.splice(+c.dataset.gi,1),ie()})),C.querySelectorAll(".vs-dow").forEach(c=>c.addEventListener("change",()=>{ne[+c.dataset.gi].sessions[+c.dataset.si].day_of_week=+c.value})),C.querySelectorAll(".vs-period").forEach(c=>c.addEventListener("change",()=>{ne[+c.dataset.gi].sessions[+c.dataset.si].period_no=+c.value})),C.querySelectorAll(".vs-span").forEach(c=>c.addEventListener("change",()=>{ne[+c.dataset.gi].sessions[+c.dataset.si].span_periods=+c.value})),C.querySelectorAll(".vs-del").forEach(c=>c.addEventListener("click",()=>{const r=ne[+c.dataset.gi];r.sessions.splice(+c.dataset.si,1),r.sessions.length||ne.splice(+c.dataset.gi,1),ie()})),C.querySelectorAll(".vg-add-session").forEach(c=>c.addEventListener("click",()=>{ne[+c.dataset.gi].sessions.push({day_of_week:0,period_no:V[0]??1,span_periods:1}),ie()}))}ne.length&&(b.querySelector("#vision-result").classList.remove("hidden"),b.querySelector("#vision-save").classList.remove("hidden"),b.querySelector("#vision-analyze").classList.add("hidden"),b.querySelector("#vision-status").textContent="✅ นำเข้าข้อมูลจาก AI ภายนอกแล้ว — กรุณาตรวจสอบก่อนบันทึก",b.querySelector("#vision-status").classList.remove("hidden"),b.querySelector("#vision-save").textContent="💾 บันทึกตารางทั้งหมด",ie()),b.querySelector("#vision-file").addEventListener("change",C=>{const w=C.target.files[0];if(!w)return;G=w.type||"image/jpeg";const J=new FileReader;J.onload=D=>{O=D.target.result.split(",")[1],b.querySelector("#vision-img").src=D.target.result,b.querySelector("#vision-preview").classList.remove("hidden"),b.querySelector("#vision-analyze").disabled=!1,b.querySelector("#vision-label").classList.add("hidden")},J.readAsDataURL(w)}),b.querySelector("#vision-analyze").addEventListener("click",async()=>{var J,D,M,c,r;if(!O)return;const C=b.querySelector("#vision-analyze"),w=b.querySelector("#vision-status");C.disabled=!0,C.textContent="⏳ กำลังวิเคราะห์...",w.textContent="กำลังส่งรูปไป Gemini AI...",w.classList.remove("hidden");try{const S=t.map(Y=>`"${Y.subject_name}" (id:${Y.id})`).join(", "),Z=`วิเคราะห์ตารางสอนในภาพนี้อย่างละเอียด
แต่ละช่องในตารางอาจมีชื่อวิชา/กิจกรรม, ชั้น/ห้องเรียน และชื่อครู โดยห้องเรียนอาจไม่มีสำหรับการประชุมหรือกิจกรรมพิเศษ
คาบเรียน: ${a.map(Y=>{var o,f;return`คาบ ${Y.period_no}: ${(o=Y.start_time)==null?void 0:o.slice(0,5)}-${(f=Y.end_time)==null?void 0:f.slice(0,5)}`}).join(", ")}
วันเรียน: 0=อาทิตย์,1=จันทร์,2=อังคาร,3=พุธ,4=พฤหัส,5=ศุกร์
วิชาที่ครูสอน (อาจตรงกับในตาราง): ${S||"ไม่ระบุ"}

สำคัญ: จัดกลุ่มตามวิชา+ห้องเรียน เช่น MATH ม.5/Ash-Shafi'i ที่สอนหลายวัน ให้อยู่ในกลุ่มเดียวกัน

ตอบกลับเป็น JSON array โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีข้อความก่อนหรือหลังกล่อง:
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
- หากเป็นการประชุมหรือกิจกรรมพิเศษ ให้ใส่ชื่อใน subject_name, ตั้ง subject_id เป็น null และตั้ง class_name เป็นค่าว่างได้เมื่อไม่มีห้อง ห้ามเดาห้อง
- span_periods: 1,2,3,4 ตามจำนวนช่องที่รวมกัน (merged cells)
- ช่องว่างไม่ต้องใส่`,{data:te,error:s}=await rt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Z,imageBase64:O,imageMimeType:G}});if(s)throw new Error(s.message??"Edge Function error");if(te!=null&&te.error)throw new Error(`Gemini: ${te.error.message??te.error.status}`);const i=((r=(c=(M=(D=(J=te.candidates)==null?void 0:J[0])==null?void 0:D.content)==null?void 0:M.parts)==null?void 0:c[0])==null?void 0:r.text)??"",l=i.match(/```json\s*([\s\S]*?)```/)||i.match(/(\[[\s\S]*?\])/),$=l?l[1]??l[0]:null;if(!$)throw console.error("Raw:",i),new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ne=JSON.parse($).map(Y=>({...Y,class_name:[Y.class_name,Y.room_name,Y.room,Y.location,Y.venue].map(o=>String(o??"").trim()).find(Boolean)??"",sessions:(Y.sessions??[]).map(o=>({...o}))})),ie(),b.querySelector("#vision-result").classList.remove("hidden"),b.querySelector("#vision-save").classList.remove("hidden");const oe=ne.reduce((Y,o)=>Y+o.sessions.length,0);b.querySelector("#vision-save").textContent="💾 บันทึกตารางทั้งหมด",w.textContent=`✅ พบ ${ne.length} กลุ่มวิชา ${oe} คาบ — ตรวจสอบแล้วบันทึกพร้อมกันได้`}catch(S){console.error("Vision error:",S);const F=S.message??"ไม่ทราบสาเหตุ";w.innerHTML=`
        <span class="text-red-500 font-medium">❌ ${F}</span>
        <br/><span class="text-gray-400 text-xs">ปัญหานี้ต้องให้แอดมินแก้ไข</span>`;const Z="vision-err-feedback";if(!b.querySelector(`#${Z}`)){const te=document.createElement("button");te.id=Z,te.className="mt-2 w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition",te.textContent="📨 แจ้งปัญหานี้ให้แอดมิน",te.addEventListener("click",()=>{var s;b.remove(),(s=window._openFeedbackWidget)==null||s.call(window,`[ตารางสอน AI] ${F}`)}),w.after(te)}}finally{C.disabled=!1,C.textContent="🔍 วิเคราะห์อีกครั้ง"}}),b.querySelector("#vision-add-group").addEventListener("click",()=>{ne.push({subject_name:"",class_name:"",teacher_name:"",subject_id:null,sessions:[{day_of_week:0,period_no:V[0]??1,span_periods:1}]}),b.querySelector("#vision-result").classList.remove("hidden"),b.querySelector("#vision-save").classList.remove("hidden"),b.querySelector("#vision-save").textContent="💾 บันทึกตารางทั้งหมด",ie()}),b.querySelector("#vision-save").addEventListener("click",async()=>{var r;const C=b.querySelector("#vision-status"),w=b.querySelector("#vision-save"),J=[],D=new Set;for(const[S,F]of ne.entries()){const Z=String(F.subject_name??"").trim(),te=String(F.class_name??"").trim();if(!Z||!((r=F.sessions)!=null&&r.length)){P(`กลุ่มที่ ${S+1} ต้องมีชื่อวิชาหรือกิจกรรม และคาบสอนอย่างน้อย 1 คาบ (ห้องเรียนไม่บังคับ)`,"warning");return}for(const s of F.sessions){const i=Number(s.day_of_week),l=Number(s.period_no),$=Number(s.span_periods??1);if(!Number.isInteger(i)||i<0||i>5||!V.includes(l)||!Number.isInteger($)||$<1||$>4||Array.from({length:$},(I,oe)=>l+oe).some(I=>!V.includes(I))){P(`ข้อมูลวัน/คาบ/ช่วงคาบในกลุ่มที่ ${S+1} ไม่ถูกต้อง`,"warning");return}for(let I=0;I<$;I++){const oe=`${i}-${l+I}`;if(D.has(oe)){P(`มีคาบสอนซ้ำกันที่วัน${ae[i]} คาบ ${l+I} กรุณาตรวจสอบก่อนบันทึก`,"warning");return}D.add(oe)}J.push({teacher_id:e.id,subject_id:F.subject_id??null,subject_name:Z,class_name:te,teacher_name:null,day_of_week:i,period_no:l,span_periods:$,academic_year:d,semester:L})}}if(!J.length){P("ยังไม่มีคาบสอนให้บันทึก","warning");return}const M=document.createElement("div");M.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",M.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="schedule-name-choice-title" class="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <div class="text-center">
        <div class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">🗓️</div>
        <h3 id="schedule-name-choice-title" class="text-lg font-extrabold text-gray-800">ต้องการแสดงชื่อครูในตารางสอนหรือไม่?</h3>
        <p class="mt-2 text-sm leading-relaxed text-gray-500">กำลังจะบันทึก ${J.length} คาบของภาค ${L}/${d} พร้อมกัน เลือกการแสดงชื่อก่อนยืนยัน</p>
      </div>
      <div class="mt-5 grid gap-2 sm:grid-cols-2">
        <button type="button" data-show-teacher="yes" class="rounded-xl bg-indigo-600 px-3 py-3 text-sm font-bold text-white hover:bg-indigo-700">แสดงชื่อครู</button>
        <button type="button" data-show-teacher="no" class="rounded-xl border border-gray-200 px-3 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50">ไม่แสดงชื่อครู</button>
      </div>
      <button type="button" data-cancel class="mt-2 w-full rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-400 hover:bg-gray-50">ยกเลิก</button>
    </section>`,document.body.appendChild(M);const c=()=>M.remove();M.querySelector("[data-cancel]").addEventListener("click",c),M.addEventListener("click",S=>{S.target===M&&c()}),M.querySelectorAll("[data-show-teacher]").forEach(S=>S.addEventListener("click",async()=>{const F=S.dataset.showTeacher==="yes";c(),w.disabled=!0,w.textContent="⏳ กำลังบันทึกทั้งตาราง...";let Z=!1;try{const te=J.map(s=>{var i,l;return{...s,teacher_name:F&&(((l=(i=ne.find($=>{var I,oe;return((I=$.subject_name)==null?void 0:I.trim())===s.subject_name&&((oe=$.class_name)==null?void 0:oe.trim())===s.class_name}))==null?void 0:i.teacher_name)==null?void 0:l.trim())||e.full_name)||null}});await on(te),Z=!0,await Promise.all(ne.filter(s=>String(s.class_name??"").trim()).map(s=>{const i=s.color_hex??We({teacherId:e.id,className:s.class_name,subjectName:s.subject_name,fallbackId:s.subject_id},j).dot;return us({teacher_id:e.id,room_key:xt({className:s.class_name,subjectName:s.subject_name,fallbackId:s.subject_id}),class_name:s.class_name.trim(),color_hex:i}).catch(l=>P("บันทึกสีห้องบางรายการไม่ได้: "+ce(l),"warning"))})),C.textContent=`✅ บันทึกตารางสอนแล้ว ${te.length} คาบ — ${F?"แสดงชื่อครู":"ซ่อนชื่อครู"}`,b.remove(),P(`บันทึกตารางสอนทั้งหมด ${te.length} คาบเรียบร้อย`,"success"),await Fe(e,d,L,H).catch(s=>P("บันทึกแล้ว แต่โหลดตารางใหม่ไม่สำเร็จ: "+ce(s),"warning"))}catch(te){P(Z?"บันทึกตารางสอนแล้ว แต่ส่วนเสริมบางรายการไม่สำเร็จ: "+ce(te):"บันทึกตารางสอนไม่สำเร็จ: "+ce(te),"error"),Z||(w.disabled=!1,w.textContent="💾 ลองบันทึกตารางทั้งหมดอีกครั้ง")}}))})}async function Ao(e,t){var B,R,Q;const a=await $e().catch(()=>({})),d=parseInt(a.academicYear??2568),L=parseInt(a.semester??1),q=a.scheduleVisionEnabled==="true",H=bs(a,e);je("schedule"),Ie("สร้างตารางสอน","schedule"),_e(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-violet-400 text-white
                  text-3xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🗓️
      </div>
      <h2 class="text-2xl font-bold text-gray-800">สร้างตารางสอน</h2>
      <p class="text-gray-500 text-sm mt-1">ภาค ${L} / ${d}</p>
    </div>

    ${q&&H?`
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
  </div>`);const v=e?await ds(e.id).catch(()=>[]):[],p=await mt().catch(()=>[]);(B=document.getElementById("btn-open-vision"))==null||B.addEventListener("click",()=>{Lt(e,v,p,d,L,H,a)}),(R=document.getElementById("btn-open-grid"))==null||R.addEventListener("click",()=>{Fe(e,d,L,a)}),(Q=document.getElementById("btn-skip-schedule"))==null||Q.addEventListener("click",()=>{t&&t()})}const ct=[{group:"ชื่อแท็บภาษา",fields:[["label","ชื่อแท็บ (แสดงบนปุ่มแท็บทุกจุด)"]]},{group:"หัวตาราง",fields:[["tableTitle","ชื่อตาราง มาตรฐาน/ตัวชี้วัด"],["tableHint","คำอธิบายตาราง (hint)"]]},{group:"คอลัมน์",fields:[["colsBasic","คอลัมน์พื้นฐาน (คั่นด้วย | )"],["colsExtra","คอลัมน์เพิ่มเติม (คั่นด้วย | )"],["tplBasic","ชื่อปุ่มเทมเพลตพื้นฐาน"],["tplExtra","ชื่อปุ่มเทมเพลตเพิ่มเติม"],["rowHeader","หัวคอลัมน์ข้อ/ลำดับ"]]},{group:"คำอธิบายรายวิชา",fields:[["descLabel","Label ช่องคำอธิบายรายวิชา"],["descPlaceholder","Placeholder คำอธิบายรายวิชา"]]},{group:"ผู้ลงนาม",fields:[["signerLabel","Label ผู้ลงนาม"],["signerPlaceholder","Placeholder ผู้ลงนาม"],["signerHint","คำใต้ช่องผู้ลงนาม"]]},{group:"จุดประสงค์วัดผล",fields:[["objTitle","หัวข้อจุดประสงค์"],["between","ป้ายระหว่างภาค"],["mid","ป้ายกลางภาค"],["final","ป้ายปลายภาค"],["pickerTitleBetween","ชื่อ dialog — ระหว่างภาค"],["pickerTitleMid","ชื่อ dialog — กลางภาค"],["pickerTitleFinal","ชื่อ dialog — ปลายภาค"]]},{group:"ส่วนช่วยเติมข้อมูล",fields:[["helpTitle","หัวข้อแผง AI"],["helpSub","คำอธิบายแผง AI"],["topicLabel","Label บท/เรื่อง"],["topicPlaceholder","Placeholder บท/เรื่อง"],["btnCurriculum","ปุ่มค้นหลักสูตร"],["btnAI","ปุ่ม AI ร่าง"],["btnImg","ปุ่มอ่านรูป"]]},{group:"ข้อความปุ่ม/Toast",fields:[["save","ปุ่มบันทึก"],["close","ปุ่มปิด"],["addTopic","ปุ่มเพิ่มบท"],["addCol","ปุ่มเพิ่มคอลัมน์"],["addRow","ปุ่มเพิ่มแถว"],["delRow","ปุ่มลบแถว"],["pickerOk","ปุ่ม OK ใน dialog"],["pickerCancel","ปุ่มยกเลิก ใน dialog"],["toastSaved","Toast บันทึกสำเร็จ"],["toastSearchEmpty","Toast ไม่พบในหลักสูตรแกนกลาง"],["toastAIDone","Toast AI ร่างสำเร็จ"],["toastImgDone","Toast อ่านรูปสำเร็จ"],["noOpts","ข้อความเมื่อยังไม่มีข้อ"],["notSelected","ข้อความยังไม่เลือก"]]}];function os(e,t){var L,q,H;const a={...t,...e},d={};for(const{fields:v}of ct)for(const[p]of v)p==="colsBasic"?d[p]=(a.colsBasic??[]).join(" | "):p==="colsExtra"?d[p]=(a.colsExtra??[]).join(" | "):p==="pickerTitleBetween"?d[p]=((L=a.pickerTitles)==null?void 0:L.between)??"":p==="pickerTitleMid"?d[p]=((q=a.pickerTitles)==null?void 0:q.mid)??"":p==="pickerTitleFinal"?d[p]=((H=a.pickerTitles)==null?void 0:H.final)??"":d[p]=a[p]??"";return d}function Bo(e){const t={};for(const{fields:a}of ct)for(const[d]of a){const L=String(e[d]??"").trim();d==="colsBasic"?t.colsBasic=L.split("|").map(q=>q.trim()).filter(Boolean):d==="colsExtra"?t.colsExtra=L.split("|").map(q=>q.trim()).filter(Boolean):d==="pickerTitleBetween"?(t.pickerTitles=t.pickerTitles??{},t.pickerTitles.between=L):d==="pickerTitleMid"?(t.pickerTitles=t.pickerTitles??{},t.pickerTitles.mid=L):d==="pickerTitleFinal"?(t.pickerTitles=t.pickerTitles??{},t.pickerTitles.final=L):t[d]=L}return t}async function No(e,t=!1){je("course-doc-lang"),Ie("ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);const a=["th","jawi","ar","rumi"],d={th:"ภาษาไทย",jawi:"يَاوِي (Jawi)",ar:"العربية",rumi:"Rumi (Melayu)"},L={th:"ltr",jawi:"rtl",ar:"rtl",rumi:"ltr"},[q,H]=await Promise.all([Fs().catch(()=>[]),t?ye(()=>import("./api-C-roKrdU.js"),__vite__mapDeps([1,2,3,4,5])).then(j=>j.getTeachers()).catch(()=>[]):Promise.resolve([])]),v=Object.fromEntries(q.map(j=>[j.lang_key,j])),p=t?a:a.filter(j=>{const b=v[j];return b&&(e==null?void 0:e.id)&&(b.editor_teacher_ids??[]).includes(e.id)});if(!p.length){_e(`<div class="max-w-lg mx-auto text-center py-20 text-gray-400">
      <p class="text-4xl mb-4">🔒</p>
      <p class="font-medium">ยังไม่มีสิทธิ์แก้ไขภาษาใด</p>
      <p class="text-xs mt-1">ขอสิทธิ์จากแอดมินเพื่อแก้ไขภาษาที่รับผิดชอบ</p>
    </div>`);return}let B=p[0];const R=j=>{var b,O,G;return((O=(b=v[j])==null?void 0:b.settings)==null?void 0:O.label)||((G=COURSE_DOC_LANGS[j])==null?void 0:G.label)||d[j]||j},Q=()=>{var J,D;const j=p.map(M=>`
      <button class="cdl-tab px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap
        ${M===B?"bg-emerald-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
        data-lang="${M}" dir="${L[M]}">${R(M)}</button>`).join(""),b=v[B]??{settings:{},editor_teacher_ids:[]},O=COURSE_DOC_LANGS[B]??{},G=os(b.settings??{},O),ne=L[B],ae=v.th??{},V=os(ae.settings??{},COURSE_DOC_LANGS.th??{}),ie=B!=="th",T=ct.map(({group:M,fields:c})=>`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${M}</p>
        ${ie?`
        <div class="flex items-center gap-3 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-t-xl">
          <span class="w-44 flex-shrink-0"></span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ภาษาไทย (อ้างอิง)</span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider" dir="${ne}">${R(B)}</span>
        </div>`:""}
        <div class="bg-white rounded-xl ${ie?"rounded-tl-none rounded-tr-none":""} border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          ${c.map(([r,S])=>`
          <div class="flex items-start gap-3 px-4 py-3">
            <label class="w-44 flex-shrink-0 text-xs text-gray-500 pt-1.5 leading-tight">${S}</label>
            ${ie?`
            <div class="flex-1 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100 select-none" dir="ltr">
              ${h(String(V[r]??"—"))}
            </div>`:""}
            <input id="cdl-${r}" type="text" dir="${ne}"
              class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              value="${h(String(G[r]??""))}"
              placeholder="${h(String(O[r]??""))}" />
          </div>`).join("")}
        </div>
      </div>`).join(""),C=b.editor_teacher_ids??[],w=t?`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ผู้มีสิทธิ์แก้ไขภาษานี้</p>
        <div class="bg-white rounded-xl border border-gray-200 shadow-md p-4">
          <p class="text-xs text-gray-400 mb-3">เลือกครูที่จะให้แก้ไข <span dir="${ne}" class="font-semibold text-emerald-700">${R(B)}</span></p>
          <div class="max-h-48 overflow-y-auto space-y-1" id="cdl-editors">
            ${H.filter(M=>M.id!==(e==null?void 0:e.id)).map(M=>`
              <label class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">
                <input type="checkbox" class="cdl-editor-cb" value="${M.id}" ${C.includes(M.id)?"checked":""}/>
                <span class="font-medium text-gray-800">${h(M.full_name)}</span>
                <span class="text-xs text-gray-400">${h(M.teacher_code??"")} · ${h(M.dept??"—")}</span>
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
      <div class="flex gap-2 flex-wrap mb-6">${j}</div>

      ${T}
      ${w}
    </div>`),document.querySelectorAll(".cdl-tab").forEach(M=>{M.addEventListener("click",()=>{B=M.dataset.lang,Q()})}),(J=document.getElementById("cdl-save-settings"))==null||J.addEventListener("click",async()=>{var S;const M={};for(const{fields:F}of ct)for(const[Z]of F)M[Z]=((S=document.getElementById(`cdl-${Z}`))==null?void 0:S.value)??"";const c=Bo(M),r=document.getElementById("cdl-save-settings");r.disabled=!0,r.textContent="กำลังบันทึก...";try{const F=await sn(B,c,e==null?void 0:e.id);v[B]={...v[B],...F},P(`บันทึกการตั้งค่า ${R(B)} สำเร็จ`,"success")}catch(F){P("บันทึกไม่สำเร็จ: "+ce(F),"error")}r.disabled=!1,r.innerHTML="💾 บันทึก"}),(D=document.getElementById("cdl-save-editors"))==null||D.addEventListener("click",async()=>{const M=[...document.querySelectorAll(".cdl-editor-cb:checked")].map(r=>Number(r.value)),c=document.getElementById("cdl-save-editors");c.disabled=!0,c.textContent="กำลังบันทึก...";try{const r=await nn(B,M);v[B]={...v[B],...r},P(`อัปเดตผู้มีสิทธิ์ ${R(B)} สำเร็จ`,"success")}catch(r){P("บันทึกไม่สำเร็จ: "+ce(r),"error")}c.disabled=!1,c.textContent="💾 บันทึกผู้มีสิทธิ์"})};Q()}async function Ro(e){je("announcements-view"),Ie("ประกาศ","announcement");const{getAllAnnouncementsForTeacher:t,getMyAcks:a,ackAnnouncement:d,getSupervisorComments:L,getSystemConfig:q,getTeacherBusyPeriodsOnDate:H,incrementAnnouncementView:v,incrementAnnouncementLike:p,getAnnouncementCommentsBulk:B,addAnnouncementComment:R,deleteAnnouncementComment:Q}=await ye(async()=>{const{getAllAnnouncementsForTeacher:o,getMyAcks:f,ackAnnouncement:y,getSupervisorComments:n,getSystemConfig:u,getTeacherBusyPeriodsOnDate:x,incrementAnnouncementView:g,incrementAnnouncementLike:E,getAnnouncementCommentsBulk:K,addAnnouncementComment:W,deleteAnnouncementComment:se}=await import("./api-C-roKrdU.js");return{getAllAnnouncementsForTeacher:o,getMyAcks:f,ackAnnouncement:y,getSupervisorComments:n,getSystemConfig:u,getTeacherBusyPeriodsOnDate:x,incrementAnnouncementView:g,incrementAnnouncementLike:E,getAnnouncementCommentsBulk:K,addAnnouncementComment:W,deleteAnnouncementComment:se}},__vite__mapDeps([1,2,3,4,5]));let j=null;try{j=await q()}catch{}_e(`<div class="animate-fade max-w-2xl mx-auto">
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
  </div>`);const b=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=o=>new Date(o).toLocaleDateString("th-TH",{dateStyle:"long"}),G=o=>o?new Date(o).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",ne=o=>new Date(new Date(o).getTime()+7*36e5).toISOString().slice(0,10),ae={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},V=o=>o?o.startsWith("academic")?"bg-blue-100 text-blue-700":o.startsWith("registrar")?"bg-violet-100 text-violet-700":o==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",ie={general:"ทั่วไป",profile:"โปรไฟล์",schedule:"ตารางสอน",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},T=[{key:"pinned",label:"📌 ปักหมุด",color:"from-amber-400 to-orange-400",filter:o=>o.priority>0},{key:"academic",label:"🎓 ฝ่ายวิชาการ",color:"from-blue-400 to-indigo-400",filter:o=>o.priority===0&&(o.creator_role??"").startsWith("academic")},{key:"registrar",label:"📋 ฝ่ายทะเบียน",color:"from-violet-400 to-purple-400",filter:o=>o.priority===0&&(o.creator_role??"").startsWith("registrar")},{key:"dept_head",label:"🏫 หัวหน้ากลุ่มสาระ",color:"from-emerald-400 to-teal-400",filter:o=>o.priority===0&&o.creator_role==="dept_head"},{key:"admin",label:"⚙️ ทั่วไป",color:"from-gray-300 to-gray-400",filter:o=>o.priority===0&&!o.creator_role}],C=o=>{if(!o)return"";const f=Math.ceil((new Date(o)-new Date)/864e5);return f<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${G(o)}</span>`:f<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${G(o)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${G(o)}</span>`};let w="announce";document.querySelectorAll(".ann-tab").forEach(o=>{o.addEventListener("click",()=>{w=o.dataset.tab,document.querySelectorAll(".ann-tab").forEach(f=>{const y=f.dataset.tab===w;f.className=`ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${y?"bg-white shadow-sm text-gray-800":"text-gray-500 hover:text-gray-700"}`}),document.getElementById("ann-panel-announce").classList.toggle("hidden",w!=="announce"),document.getElementById("ann-panel-myann").classList.toggle("hidden",w!=="myann"),document.getElementById("ann-panel-comments").classList.toggle("hidden",w!=="comments"),w==="myann"&&!D&&r()})});const J={general:{label:"ทั่วไป",icon:"📢",hasDeadline:!1},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",hasDeadline:!0},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",hasDeadline:!1},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",hasDeadline:!1},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",hasDeadline:!1}};let D=!1,M=[];const c=(o,f)=>{var u;const y=J[o.ann_type]??{label:o.ann_type,icon:"📢"},n=(o.target_class_ids??[]).map(x=>{var g;return((g=f.find(E=>E.id===x))==null?void 0:g.class_name)??`#${x}`}).join(", ");return`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 space-y-2" data-myann-id="${o.id}">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">${y.icon} ${y.label}</span>
            ${o.priority>0?'<span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-medium">📌 ปักหมุด</span>':""}
            ${o.is_active?"":'<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>'}
          </div>
          <p class="font-semibold text-gray-800">${b(o.title)}</p>
          ${o.body?`<p class="text-sm text-gray-500 mt-1 line-clamp-2">${b(o.body)}</p>`:""}
          ${o.file_url?`<a href="${b(o.file_url)}" target="_blank" class="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1">📎 ไฟล์แนบ</a>`:""}
          ${(u=o.attachment_urls)!=null&&u.length?`<div class="flex flex-wrap gap-1.5 mt-1">${o.attachment_urls.map(x=>`<a href="${b(x.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${b(x.name)}</a>`).join("")}</div>`:""}
          <p class="text-xs text-gray-400 mt-2">ห้อง: ${b(n)||"—"}</p>
        </div>
        <div class="flex gap-1 flex-shrink-0">
          <button onclick="window._editMyAnn(${o.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600 transition" title="แก้ไข">✏️</button>
          <button onclick="window._togglePinMyAnn(${o.id},${o.priority})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-amber-500 transition" title="${o.priority>0?"เลิกปักหมุด":"ปักหมุด"}">📌</button>
          <button onclick="window._deleteMyAnn(${o.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition" title="ลบ">🗑️</button>
        </div>
      </div>
    </div>`},r=async()=>{D=!0;const o=document.getElementById("ann-panel-myann");if(o){o.innerHTML='<div class="flex justify-center py-8 text-gray-400"><svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> กำลังโหลด...</div>';try{const{getTeacherOwnAnnouncements:f,getMyClasses:y,getTeacherPackageAccess:n}=await ye(async()=>{const{getTeacherOwnAnnouncements:E,getMyClasses:K,getTeacherPackageAccess:W}=await import("./api-C-roKrdU.js");return{getTeacherOwnAnnouncements:E,getMyClasses:K,getTeacherPackageAccess:W}},__vite__mapDeps([1,2,3,4,5])),[u,x,g]=await Promise.all([f(e.id),y(e.id).catch(()=>[]),n(e.id).catch(()=>({hasSemester:!1}))]);M=x,F(u,g.hasSemester)}catch(f){o.innerHTML=`<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${f.message}</p>`}}},S=3,F=(o,f=!1)=>{var x;const y=document.getElementById("ann-panel-myann");if(!y)return;const n=f||o.length<S,u=f?'<span class="text-xs text-emerald-600 font-medium">✨ ไม่จำกัด</span>':`<span class="text-xs text-gray-400">${o.length}/${S} (ฟรี)</span>`;y.innerHTML=`
    <div class="space-y-3">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-gray-700">ประกาศของฉัน (${o.length})</h3>
          ${u}
        </div>
        <button id="btn-create-myann"
          class="px-4 py-2 text-sm rounded-xl font-semibold transition ${n?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}">
          + สร้างประกาศ
        </button>
      </div>
      ${!f&&o.length>=S?`
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <span class="text-2xl flex-shrink-0">⭐</span>
        <div>
          <p class="text-sm font-semibold text-amber-800">ใช้ครบ ${S} ประกาศแล้ว</p>
          <p class="text-xs text-amber-600 mt-1">อัพเกรดเป็นแพ็กเกจโดเนทเพื่อสร้างประกาศได้ไม่จำกัด</p>
        </div>
      </div>`:""}
      ${o.length?o.map(g=>c(g,M)).join(""):`
      <div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📢</p>
        <p class="text-sm">ยังไม่มีประกาศ กดปุ่ม "สร้างประกาศ" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`,(x=document.getElementById("btn-create-myann"))==null||x.addEventListener("click",()=>{if(!n){P(`ใช้ครบ ${S} ประกาศแล้ว — อัพเกรดเพื่อใช้งานไม่จำกัด`,"warning");return}i()})},Z=(o,f=[])=>M.map(y=>{var n;return`<label class="flex items-center gap-2 text-xs cursor-pointer hover:text-indigo-700 py-0.5">
        <input type="checkbox" name="myann-cls-${o}" value="${y.id}"
          ${f.includes(y.id)?"checked":""} class="rounded text-indigo-600 flex-shrink-0" />
        <span class="truncate">${b(y.class_name)}</span>
        <span class="text-gray-300 truncate">${b(((n=y.master_subjects)==null?void 0:n.subject_name)??"")}</span>
      </label>`}).join(""),te=(o,f=[],y="",n=[])=>`
    <div class="myann-entry border border-gray-200 rounded-xl p-3 space-y-2" data-entry="${o}" data-kept='${b(JSON.stringify(n)).replace(/'/g,"&#39;")}'>
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-indigo-600">ชุดที่ ${o+1}</span>
        ${o>0?`<button type="button" class="myann-remove-entry text-red-400 hover:text-red-600 text-sm px-2" data-entry="${o}">✕ ลบ</button>`:""}
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ห้องเรียน <span class="text-red-400">*</span></p>
        <div class="border border-gray-100 rounded-lg p-2 max-h-28 overflow-y-auto space-y-0.5">
          ${Z(o,f)||'<p class="text-xs text-gray-400">ยังไม่มีห้องเรียน</p>'}
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">แนบไฟล์ (เลือกได้หลายไฟล์ ไม่บังคับ)</p>
        <div class="myann-kept-files flex flex-wrap gap-1.5 mb-1.5" data-entry="${o}"></div>
        <input name="myann-files-${o}" type="file" multiple
          class="w-full text-xs" />
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">หรือลิงก์ไฟล์ (เช่น Google Drive)</p>
        <input name="myann-file-${o}" type="url" value="${b(y)}"
          placeholder="https://drive.google.com/..."
          class="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </div>
    </div>`,s=o=>{o.querySelectorAll(".myann-entry").forEach(f=>{const y=f.dataset.entry,n=JSON.parse(f.dataset.kept||"[]"),u=o.querySelector(`.myann-kept-files[data-entry="${y}"]`);u&&(u.innerHTML=n.map((x,g)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${b(x.name)}
          <button type="button" class="myann-remove-file text-indigo-400 hover:text-red-500 font-bold" data-entry="${y}" data-i="${g}">✕</button>
        </span>`).join(""),u.querySelectorAll(".myann-remove-file").forEach(x=>x.addEventListener("click",()=>{const g=JSON.parse(f.dataset.kept||"[]");g.splice(parseInt(x.dataset.i,10),1),f.dataset.kept=JSON.stringify(g),s(o)})))})},i=(o=null)=>{var u;let f=1;const y=document.createElement("div");y.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",y.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${o?"✏️ แก้ไขประกาศ":"📢 สร้างประกาศใหม่"}</h3>
        <button id="myann-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <!-- ข้อมูลร่วมทุกชุด -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ประเภทประกาศ</label>
          <select id="myann-type" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            ${Object.entries(J).map(([x,g])=>`<option value="${x}" ${(o==null?void 0:o.ann_type)===x?"selected":""}>${g.icon} ${g.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หัวข้อ <span class="text-red-400">*</span></label>
          <input id="myann-title" type="text" value="${b((o==null?void 0:o.title)??"")}"
            placeholder="ระบุหัวข้อประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">รายละเอียด</label>
          <textarea id="myann-body" rows="2"
            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none">${b((o==null?void 0:o.body)??"")}</textarea>
        </div>
        <div id="myann-deadline-wrap" class="${((o==null?void 0:o.ann_type)??"general")==="deadline"?"":"hidden"}">
          <label class="block text-xs font-semibold text-gray-600 mb-1">⏰ วันและเวลากำหนดส่ง/สอบ <span class="text-red-400">*</span></label>
          <input id="myann-deadline" type="datetime-local"
            value="${o!=null&&o.deadline_at?new Date(o.deadline_at).toISOString().slice(0,16):""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-pin" type="checkbox" ${(o==null?void 0:o.priority)>0?"checked":""} class="rounded text-amber-500" />
            <span>📌 ปักหมุด</span>
          </label>
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-active" type="checkbox" ${!o||o!=null&&o.is_active?"checked":""} class="rounded text-emerald-500" />
            <span>เผยแพร่ทันที</span>
          </label>
        </div>
        <!-- ชุดห้อง+ไฟล์ -->
        <div class="border-t border-gray-100 pt-3">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-gray-700">📋 ห้องเรียน + ลิงก์ (แต่ละชุดสร้างประกาศแยก)</p>
            ${o?"":`<button type="button" id="myann-add-entry"
              class="flex items-center gap-1 text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition">
              ＋ เพิ่มชุด
            </button>`}
          </div>
          <div id="myann-entries" class="space-y-3">
            ${te(0,(o==null?void 0:o.target_class_ids)??[],(o==null?void 0:o.file_url)??"",(o==null?void 0:o.attachment_urls)??[])}
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="myann-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="myann-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
          ${o?"บันทึก":"สร้างประกาศ"}
        </button>
      </div>
    </div>`,document.body.appendChild(y),s(y),y.querySelector("#myann-close").addEventListener("click",()=>y.remove()),y.querySelector("#myann-cancel").addEventListener("click",()=>y.remove()),y.querySelector("#myann-type").addEventListener("change",x=>{y.querySelector("#myann-deadline-wrap").classList.toggle("hidden",x.target.value!=="deadline")}),(u=y.querySelector("#myann-add-entry"))==null||u.addEventListener("click",()=>{const x=y.querySelector("#myann-entries"),g=document.createElement("div");g.innerHTML=te(f),x.appendChild(g.firstElementChild),f++,n(),s(y)});const n=()=>{y.querySelectorAll(".myann-remove-entry").forEach(x=>{x.onclick=()=>{var E;const g=Number(x.dataset.entry);(E=y.querySelector(`.myann-entry[data-entry="${g}"]`))==null||E.remove()}})};n(),y.querySelector("#myann-save").addEventListener("click",async()=>{const x=y.querySelector("#myann-title").value.trim(),g=y.querySelector("#myann-body").value.trim(),E=y.querySelector("#myann-type").value,K=y.querySelector("#myann-pin").checked,W=y.querySelector("#myann-active").checked,se=E==="deadline"&&y.querySelector("#myann-deadline").value||null;if(!x){P("กรุณาระบุหัวข้อ","warning");return}if(E==="deadline"&&!se){P("กรุณาระบุวันและเวลา","warning");return}const le=[...y.querySelectorAll(".myann-entry")].map(m=>{var N,z;const A=Number(m.dataset.entry),U=[...m.querySelectorAll(`input[name="myann-cls-${A}"]:checked`)].map(re=>Number(re.value)),ee=((N=m.querySelector(`input[name="myann-file-${A}"]`))==null?void 0:N.value.trim())??"",_=JSON.parse(m.dataset.kept||"[]"),X=[...((z=m.querySelector(`input[name="myann-files-${A}"]`))==null?void 0:z.files)??[]];return{classIds:U,fileUrl:ee,keptFiles:_,newFiles:X}}).filter(m=>m.classIds.length>0);if(!le.length){P("กรุณาเลือกอย่างน้อย 1 ห้องในแต่ละชุด","warning");return}const k=y.querySelector("#myann-save");k.disabled=!0,k.textContent="กำลังบันทึก...";try{const{createAnnouncement:m,updateAnnouncement:A}=await ye(async()=>{const{createAnnouncement:_,updateAnnouncement:X}=await import("./api-C-roKrdU.js");return{createAnnouncement:_,updateAnnouncement:X}},__vite__mapDeps([1,2,3,4,5])),{uploadAssignmentFile:U}=await ye(async()=>{const{uploadAssignmentFile:_}=await import("./storage-CuUjCgvI.js");return{uploadAssignmentFile:_}},__vite__mapDeps([23,2]));if(o){const{classIds:_,fileUrl:X,keptFiles:N,newFiles:z}=le[0],re=[];for(const ue of z)re.push(await U(ue,`class-${_[0]}/announcements`));const de=[...N,...re];await A(o.id,{title:x,body:g,isActive:W,priority:K?1:0,annType:E,targetClassIds:_,fileUrl:X,attachmentUrls:de.length?de:null,deadlineAt:se})}else await Promise.all(le.map(async({classIds:_,fileUrl:X,newFiles:N})=>{const z=[];for(const re of N)z.push(await U(re,`class-${_[0]}/announcements`));return m({title:x,body:g,isActive:W,priority:K?1:0,teacherId:e.id,annType:E,targetClassIds:_,fileUrl:X,attachmentUrls:z.length?z:null,deadlineAt:se})}));y.remove();const ee=o?1:le.length;P(`บันทึก ${ee} ประกาศสำเร็จ ✅`,"success"),D=!1,r()}catch(m){P("บันทึกไม่สำเร็จ: "+ce(m),"error"),k.disabled=!1,k.textContent=o?"บันทึก":"สร้างประกาศ"}})};window._editMyAnn=async o=>{const{getTeacherOwnAnnouncements:f}=await ye(async()=>{const{getTeacherOwnAnnouncements:u}=await import("./api-C-roKrdU.js");return{getTeacherOwnAnnouncements:u}},__vite__mapDeps([1,2,3,4,5])),n=(await f(e.id).catch(()=>[])).find(u=>u.id===o);n&&i(n)},window._togglePinMyAnn=async(o,f)=>{const{updateAnnouncement:y}=await ye(async()=>{const{updateAnnouncement:n}=await import("./api-C-roKrdU.js");return{updateAnnouncement:n}},__vite__mapDeps([1,2,3,4,5]));await y(o,{priority:f>0?0:1}).catch(()=>{}),D=!1,r()},window._deleteMyAnn=async o=>{if(!confirm("ลบประกาศนี้?"))return;const{deleteAnnouncement:f}=await ye(async()=>{const{deleteAnnouncement:y}=await import("./api-C-roKrdU.js");return{deleteAnnouncement:y}},__vite__mapDeps([1,2,3,4,5]));await f(o).catch(()=>{}),P("ลบประกาศแล้ว","success"),D=!1,r()};const l=o=>o?new Date(o+"T00:00:00").toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"",$={yes:{label:"✅ สนใจเข้าร่วมแน่นอน",bg:"bg-emerald-600",ring:"ring-emerald-300"},maybe:{label:"🤔 ไม่แน่ใจ",bg:"bg-amber-500",ring:"ring-amber-300"},no:{label:"❌ ไม่สนใจ",bg:"bg-gray-400",ring:"ring-gray-300"}},I=(o,f,y=null,n=!1,u=0)=>{var se,le,k;const x=o.requires_ack,g=!!f,E=o.ann_type==="training",K=f?new Date(f).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"",W=!o.is_active;return`
    <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow
      ${x&&!g&&!W?"border-rose-200":W?"border-dashed border-gray-200":"border-gray-100"}
      ${W?"opacity-60":""}" data-ann-id="${o.id}">
      <div class="h-1 bg-gradient-to-r ${o.priority>0?"from-amber-400 to-orange-400":W?"from-gray-200 to-gray-300":((se=T.find(m=>m.filter(o)))==null?void 0:se.color)??"from-gray-300 to-gray-400"}"></div>
      <div class="p-5">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
            ${x&&!g&&!W?"bg-rose-50":W?"bg-gray-50":"bg-indigo-50"}">
            ${o.priority>0?"📌":x?g?"✅":"🔔":W?"📄":"📢"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${V(o.creator_role)}">
                ${b(ae[o.creator_role]??"แอดมิน")}
              </span>
              ${(le=o.teachers)!=null&&le.full_name?`<span class="text-[11px] text-gray-500 font-medium">${b(o.teachers.full_name)}</span>`:""}
              ${W?'<span class="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full text-[11px]">ยกเลิกแล้ว</span>':""}
              ${o.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${x?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${C(o.due_date)}
            </div>
            <h3 class="text-base font-bold text-gray-800 mb-1.5">${b(o.title)}</h3>
            ${o.body?`<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-2">${b(o.body)}</p>`:""}
            ${o.file_url?`<img src="${b(o.file_url)}" class="w-full rounded-xl border border-gray-100 mb-2 cursor-pointer" onclick="window.open('${b(o.file_url)}','_blank')" />`:""}
            ${E&&o.event_date?`
              <div class="mt-3 mb-2 bg-violet-50 border border-violet-100 rounded-xl p-3 space-y-1.5">
                <p class="text-xs font-semibold text-violet-700">🎓 ข้อมูลการอบรม</p>
                <p class="text-sm text-gray-700">📅 ${l(o.event_date)}</p>
                ${(k=o.event_periods)!=null&&k.length?`<p class="text-sm text-gray-700">🕐 คาบที่ ${o.event_periods.sort((m,A)=>m-A).join(", ")}</p>`:""}
                ${o.event_location?`<p class="text-sm text-gray-700">📍 ${b(o.event_location)}</p>`:""}
              </div>`:""}
            <span class="text-[11px] text-gray-400">${O(o.created_at)}</span>
            ${E&&!W?`
              <div class="mt-3">
                <p class="text-xs font-semibold text-gray-500 mb-2">คุณจะเข้าร่วมไหม?</p>
                <div class="flex flex-wrap gap-2">
                  ${Object.entries($).map(([m,A])=>`
                    <button class="ann-rsvp-btn px-3 py-2 rounded-xl text-sm font-semibold transition border-2
                      ${y===m?`${A.bg} text-white ring-2 ${A.ring} border-transparent`:"bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"}"
                      data-ann-id="${o.id}" data-rsvp="${m}">${A.label}</button>
                  `).join("")}
                </div>
              </div>`:""}
            ${x&&!W?`
              <div class="mt-3">
                ${g?`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold border border-emerald-200">
                      ✅ รับทราบแล้ว · ${K}
                    </span>`:`<button class="ann-ack-btn px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition shadow-sm"
                      data-id="${o.id}">🔔 กดรับทราบ</button>`}
              </div>`:""}
            <div class="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
              <button class="ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${n?"bg-rose-50 text-rose-600":"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500"}" data-id="${o.id}">
                <span class="ann-like-icon">${n?"❤️":"🤍"}</span><span class="ann-like-count">${o.like_count??0}</span>
              </button>
              <button class="ann-comment-toggle-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-500 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition" data-id="${o.id}">
                💬<span class="ann-comment-count">${u}</span>
              </button>
              <span class="text-[11px] text-gray-400 ml-auto">👁️ เข้าดูแล้ว ${o.view_count??0} คน</span>
            </div>
            <div class="ann-comment-section hidden mt-3 pt-3 border-t border-gray-50" data-id="${o.id}">
              <div class="ann-comment-list space-y-2 mb-2 text-sm text-gray-400">กำลังโหลด...</div>
              <div class="flex gap-2">
                <input type="text" class="ann-comment-input flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="แสดงความคิดเห็น..." data-id="${o.id}" maxlength="500" />
                <button class="ann-comment-send-btn px-3 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition flex-shrink-0" data-id="${o.id}">ส่ง</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`},oe=async()=>{const o=document.getElementById("ann-panel-announce");if(!o)return;let f,y,n;try{const{getMyRsvpsForTeacher:_}=await ye(async()=>{const{getMyRsvpsForTeacher:X}=await import("./api-C-roKrdU.js");return{getMyRsvpsForTeacher:X}},__vite__mapDeps([1,2,3,4,5]));[f,y,n]=await Promise.all([t(),e!=null&&e.id?a(e.id).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?_(e.id).catch(()=>[]):Promise.resolve([])])}catch{o.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(e!=null&&e.id&&j){const _=parseInt(j.academicYear??2568),X=parseInt(j.semester??1),N=f.filter(z=>{var re;return z.ann_type==="training"&&z.event_date&&((re=z.event_periods)==null?void 0:re.length)});if(N.length){const z=await Promise.all(N.map(de=>H(e.id,de.event_date,_,X).catch(()=>[]))),re=Object.fromEntries(N.map((de,ue)=>[de.id,z[ue]]));f=f.filter(de=>{var me;if(de.ann_type!=="training"||!((me=de.event_periods)!=null&&me.length))return!0;const ue=re[de.id]??[];return(de.schedule_filter??"all")==="any"?de.event_periods.some(ge=>!ue.includes(ge)):!de.event_periods.some(ge=>ue.includes(ge))})}}const u=Object.fromEntries(y.map(_=>[_.announcement_id,_.acked_at])),x=Object.fromEntries((n??[]).map(_=>[_.announcement_id,_.response])),g={};try{(await B(f.map(X=>X.id))).forEach(X=>{var N;(g[N=X.announcement_id]??(g[N]=[])).push(X)})}catch{}const E=`pp5_ann_liked_${(e==null?void 0:e.id)??"anon"}`,K=`pp5_ann_viewed_${(e==null?void 0:e.id)??"anon"}`;let W,se;try{W=new Set(JSON.parse(localStorage.getItem(E)||"[]"))}catch{W=new Set}try{se=new Set(JSON.parse(localStorage.getItem(K)||"[]"))}catch{se=new Set}const le=f.map(_=>_.id).filter(_=>!se.has(_));if(le.length&&(e!=null&&e.id)){le.forEach(_=>{se.add(_),v(_)});try{localStorage.setItem(K,JSON.stringify([...se]))}catch{}le.forEach(_=>{const X=f.find(N=>N.id===_);X&&(X.view_count=(X.view_count??0)+1)})}const k=f.filter(_=>_.is_active),m=f.filter(_=>!_.is_active);if(!f.length){o.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`;return}const A=T.map(_=>({..._,items:k.filter(_.filter)})).filter(_=>_.items.length);let U="";A.length?U+=A.map(_=>`
        <div class="mb-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-bold text-gray-700">${_.label}</span>
            <span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] rounded-full font-semibold">${_.items.length}</span>
            <div class="flex-1 h-px bg-gray-100 ml-1"></div>
          </div>
          <div class="space-y-3">${_.items.map(X=>I(X,u[X.id],x[X.id]??null,W.has(X.id),(g[X.id]||[]).length)).join("")}</div>
        </div>`).join(""):U+=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-400 mb-5">
        <div class="text-4xl mb-3">📭</div><p class="font-semibold text-gray-500">ยังไม่มีประกาศที่แสดงอยู่ในขณะนี้</p>
      </div>`,m.length&&(U+=`<details class="mt-2">
        <summary class="cursor-pointer text-xs text-gray-400 font-semibold py-2 px-1 hover:text-gray-600 transition select-none list-none flex items-center gap-1">
          <span>▸</span> ประวัติประกาศที่ผ่านมา (${m.length} รายการ)
        </summary>
        <div class="space-y-3 mt-3">${m.map(_=>I(_,u[_.id],null,W.has(_.id),(g[_.id]||[]).length)).join("")}</div>
      </details>`),o.innerHTML=U,o.querySelectorAll(".ann-ack-btn").forEach(_=>{_.addEventListener("click",async()=>{if(e!=null&&e.id){_.disabled=!0,_.textContent="กำลังบันทึก...";try{await d(Number(_.dataset.id),e.id),await oe()}catch{P("บันทึกไม่สำเร็จ","error"),_.disabled=!1,_.textContent="🔔 กดรับทราบ"}}})}),o.querySelectorAll(".ann-rsvp-btn").forEach(_=>{_.addEventListener("click",async()=>{if(!(e!=null&&e.id))return;const{upsertAnnouncementRsvp:X}=await ye(async()=>{const{upsertAnnouncementRsvp:re}=await import("./api-C-roKrdU.js");return{upsertAnnouncementRsvp:re}},__vite__mapDeps([1,2,3,4,5])),N=Number(_.dataset.annId),z=_.dataset.rsvp;_.classList.contains("bg-emerald-600")||_.classList.contains("bg-amber-500")||_.classList.contains("bg-gray-400");try{await X(N,e.id,z);const{showToast:re}=await ye(async()=>{const{showToast:ue}=await import("./ui-CdgrLWzs.js").then(me=>me.u);return{showToast:ue}},[]);re({yes:"บันทึก: สนใจเข้าร่วม ✅",maybe:"บันทึก: ไม่แน่ใจ 🤔",no:"บันทึก: ไม่สนใจ ❌"}[z]??"บันทึกแล้ว","success"),await oe()}catch{P("บันทึกไม่สำเร็จ","error")}})}),o.querySelectorAll(".ann-like-btn").forEach(_=>{_.addEventListener("click",()=>{if(!(e!=null&&e.id))return;const X=Number(_.dataset.id),N=W.has(X),z=N?-1:1;p(X,z),N?W.delete(X):W.add(X);try{localStorage.setItem(E,JSON.stringify([...W]))}catch{}const re=_.querySelector(".ann-like-count"),de=_.querySelector(".ann-like-icon");re.textContent=Math.max(0,(parseInt(re.textContent,10)||0)+z),de.textContent=N?"🤍":"❤️",_.className=`ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${N?"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500":"bg-rose-50 text-rose-600"}`})});const ee=(_,X)=>{const N=g[X]??[];_.innerHTML=N.length?N.map(z=>{var re,de;return`
          <div class="flex items-start gap-2">
            <div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">${b((((re=z.teachers)==null?void 0:re.full_name)??"?").charAt(0))}</div>
            <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-1.5">
              <p class="text-[11px] font-semibold text-gray-700">${b(((de=z.teachers)==null?void 0:de.full_name)??"ครู")}</p>
              <p class="text-xs text-gray-600 whitespace-pre-wrap break-words">${b(z.comment_text)}</p>
            </div>
          </div>`}).join(""):'<p class="text-xs text-gray-400">ยังไม่มีความคิดเห็น เป็นคนแรกได้เลย!</p>'};o.querySelectorAll(".ann-comment-toggle-btn").forEach(_=>{_.addEventListener("click",()=>{const X=Number(_.dataset.id),N=o.querySelector(`.ann-comment-section[data-id="${X}"]`);if(!N)return;const z=N.classList.contains("hidden");N.classList.toggle("hidden"),z&&ee(N.querySelector(".ann-comment-list"),X)})}),o.querySelectorAll(".ann-comment-send-btn").forEach(_=>{const X=async()=>{if(!(e!=null&&e.id))return;const z=Number(_.dataset.id),re=o.querySelector(`.ann-comment-input[data-id="${z}"]`),de=re.value.trim();if(de){_.disabled=!0;try{const ue=await R(z,e.id,de);(g[z]??(g[z]=[])).push(ue),re.value="";const me=o.querySelector(`.ann-comment-section[data-id="${z}"]`);ee(me.querySelector(".ann-comment-list"),z);const ge=o.querySelector(`.ann-comment-toggle-btn[data-id="${z}"] .ann-comment-count`);ge&&(ge.textContent=g[z].length)}catch(ue){P("ส่งความคิดเห็นไม่สำเร็จ: "+ce(ue),"error")}_.disabled=!1}};_.addEventListener("click",X);const N=o.querySelector(`.ann-comment-input[data-id="${_.dataset.id}"]`);N==null||N.addEventListener("keydown",z=>{z.key==="Enter"&&X()})})},Y=async()=>{const o=document.getElementById("ann-panel-comments");if(!o)return;if(!(e!=null&&e.id)){o.innerHTML='<p class="text-gray-400 text-sm p-4">ไม่พบข้อมูลครู</p>';return}let f;try{f=await L(e.id)}catch{o.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!f.length){o.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">💬</div>
        <p class="font-semibold text-gray-500">ยังไม่มีความคิดเห็น / บันทึก</p>
      </div>`;return}const y=[],n=new Map;for(const g of f){const E=g.round_id?`round__${g.round_id}__${g.supervisor_id}`:`noround__${g.supervisor_id}__${ne(g.created_at)}`;if(!n.has(E)){const K={key:E,supervisor:g.teachers,date:g.created_at,roundEvent:g.work_calendar_events??null,items:[]};n.set(E,K),y.push(K)}n.get(E).items.push(g)}const u=g=>g?g.startsWith("academic")?"bg-blue-100 text-blue-700":g.startsWith("registrar")?"bg-violet-100 text-violet-700":g==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",x=g=>g?g.startsWith("academic")?"from-blue-400 to-indigo-400":g.startsWith("registrar")?"from-violet-400 to-purple-400":g==="dept_head"?"from-emerald-400 to-teal-400":"from-gray-300 to-gray-400":"from-gray-300 to-gray-400";o.innerHTML='<div class="space-y-4">'+y.map(g=>{var k,m;const E=(k=g.supervisor)==null?void 0:k.position,K=((m=g.supervisor)==null?void 0:m.full_name)??"หัวหน้า",W=ae[E]??"ผู้บังคับบัญชา",se=g.roundEvent,le=se?`<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
             ${se.event_type==="inspection"&&se.round_number?`ตรวจครั้งที่ ${se.round_number}`:se.label}
           </span>`:"";return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-1 bg-gradient-to-r ${x(E)}"></div>
        <div class="p-5">
          <div class="flex items-center gap-2 flex-wrap mb-3">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${u(E)}">${b(W)}</span>
            <span class="text-sm font-semibold text-gray-700">${b(K)}</span>
            ${le}
            <span class="text-[11px] text-gray-400 ml-auto">${O(g.date)}</span>
          </div>
          ${se!=null&&se.label&&se.event_type!=="inspection"?`<p class="text-xs text-indigo-600 mb-2 -mt-1">📅 ${b(se.label)}</p>`:""}
          <div class="space-y-2">
            ${g.items.map(A=>`
              <div class="flex items-start gap-2.5">
                <span class="flex-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[11px] font-semibold mt-0.5">${b(ie[A.metric]??A.metric)}</span>
                <p class="text-sm text-gray-700 leading-relaxed">${b(A.comment)}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>`}).join("")+"</div>"};await Promise.all([oe(),Y()])}function Ct(e){return new Promise(t=>{var L;(L=document.getElementById("qr-receipt-prompt-modal"))==null||L.remove();const a=document.createElement("div");a.id="qr-receipt-prompt-modal",a.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40",a.innerHTML=`
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
    `,document.body.appendChild(a);const d=q=>{a.remove(),t(q)};a.querySelector("#qr-receipt-prompt-yes").addEventListener("click",()=>d(!0)),a.querySelector("#qr-receipt-prompt-no").addEventListener("click",()=>d(!1))})}function as(e,t,a,d=null){var q,H,v,p;const L=d!=null&&d.url?`<span style="display:inline-flex;flex-direction:column;align-items:center;gap:1px">
         <img src="${h(d.url)}" style="height:22px;object-fit:contain" />
         <span style="font-size:8px;color:#374151">${h(d.name||"ผู้ออกให้")}${d.title?" · "+h(d.title):""}</span>
       </span>`:"<span>ผู้ออกให้: .................. (ลงชื่อ)</span>";return`
    <div class="receipt-half">
      <div style="text-align: center; font-weight: bold; font-size: 11px; color: #4338ca; margin-bottom: 6px;">${a}</div>
      <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เลขที่ใบเสร็จ:</td><td style="text-align: right; font-weight: bold;">QR-${String(e.receipt_no).padStart(6,"0")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">วันที่:</td><td style="text-align: right;">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"long"})}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ชื่อ-สกุล:</td><td style="text-align: right;">${h(((q=e.students)==null?void 0:q.full_name)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">รหัสนักเรียน:</td><td style="text-align: right;">${h(((H=e.students)==null?void 0:H.student_code)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ห้อง:</td><td style="text-align: right;">${h(((v=e.students)==null?void 0:v.main_room)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เหตุผล:</td><td style="text-align: right; font-weight: bold;">${h(e.reason)}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ค่าธรรมเนียม:</td><td style="text-align: right; font-weight: bold;">${h(t)} บาท</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ออกให้โดย:</td><td style="text-align: right;">${h(((p=e.teachers)==null?void 0:p.full_name)||"แอดมิน")}</td></tr>
      </table>
      <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #d1d5db; font-size: 9px; color: #6b7280; display: flex; justify-content: space-between; align-items: flex-end; gap: 6px;">
        <span>ผู้รับ: .................. (ลงชื่อ)</span>
        ${L}
      </div>
    </div>
  `}async function qe(e,t,a,d,L,q=[],H="5",v=null){let p=document.getElementById("qr-print-media-styles");p||(p=document.createElement("style"),p.id="qr-print-media-styles",document.head.appendChild(p)),p.textContent=`
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
        grid-template-columns: repeat(${t}, minmax(0, 1fr)) !important;
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
  `;const B=document.createElement("div");B.id="print-qr-area",B.className="hidden",document.body.appendChild(B),B.innerHTML=e.map((R,Q)=>`
    <div class="print-room-block" style="padding: 0; margin: 0;">
      ${R.hideHeader?"":`
        <div class="print-room-header">
          <span>📋 ห้องเรียน: ${h(R.className)}</span>
          <span style="font-size: 11px; font-weight: normal; color: #6b7280;">${h(R.countLabel||`${R.students.length} คน`)}</span>
        </div>
      `}
      <div class="print-grid">
        ${R.students.map((j,b)=>`
          <div class="qr-print-card">
            <div style="width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 5px;">
              <canvas id="print-canvas-${j.id}-${b}-r${Q}" style="width: 100%; max-width: 100%; height: auto;"></canvas>
            </div>
            <div style="width: 100%; text-align: left; font-family: Sarabun, sans-serif; font-size: 11px;">
              <p style="font-weight: bold; color: black; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${h(j.full_name)}</p>
              ${a?`<p style="color: #4b5563; margin: 2px 0 0 0; font-size: 9px;">รหัส: ${h(j.student_code||"-")}</p>`:""}
              <div style="display: flex; justify-content: space-between; margin-top: 3px; font-size: 9px; color: #4b5563;">
                ${L?`<span>ห้อง: ${h(j._roomName||R.className)}</span>`:""}
                ${d?`<span>เลขที่: ${j.seat_no}</span>`:""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("")+(q.length===0?"":`
    <div class="print-room-block">
      <div class="receipt-grid">
        ${q.map(R=>`
          <div class="qr-receipt-slip">
            ${as(R,H,"🏫 ต้นขั้ว (โรงเรียนเก็บ)",v)}
            <div class="receipt-cut-line-v"></div>
            ${as(R,H,"🎓 มอบให้นักเรียน",v)}
          </div>
        `).join("")}
      </div>
    </div>
  `);for(let R=0;R<e.length;R++)for(let Q=0;Q<e[R].students.length;Q++){const j=e[R].students[Q],b=document.getElementById(`print-canvas-${j.id}-${Q}-r${R}`);b&&await tt.toCanvas(b,j.student_code||"",{width:250,margin:1,color:{dark:"#000000",light:"#ffffff"}})}window.print(),B.remove()}async function Po(e,t=null,a={}){var L,q,H,v,p,B;const d=!e||!!a.isQrManager;je("student-qr-print"),Ie("พิมพ์ QR Code นักเรียน"),_e(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูลห้องเรียนทั้งหมด...
    </div>
  `);try{const R=await an(),Q=await $e().catch(()=>({})),j=((q=(L=Q.qrReissueFee)==null?void 0:L.trim)==null?void 0:q.call(L))||"5",b=((v=(H=Q.qrReissueDoneMessage)==null?void 0:H.trim)==null?void 0:v.call(H))||"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง";let O={name:((p=Q.qrIssuerSignatureName)==null?void 0:p.trim())||"",title:((B=Q.qrIssuerSignatureTitle)==null?void 0:B.trim())||"",url:Q.qrIssuerSignatureUrl||""};const{data:G}=await rt.from("classes").select("id, class_name, master_subjects ( id, grade_level, subject_group )").order("class_name").limit(1e4),ne=new Map;for(const k of G||[]){const m=k.class_name||"";m&&!ne.has(m)&&ne.set(m,k)}const ae=k=>{const m=k==="ศาสนา";return[...new Set(R.map(U=>m?U.religion_room:U.main_room).filter(Boolean))].sort((U,ee)=>U.localeCompare(ee,"th")).map(U=>{const ee=ne.get(U);return{id:(ee==null?void 0:ee.id)||null,class_name:U,_meta:ee||null}})},V=k=>{const m=k.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return m?m[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},ie=k=>{var A;const m=((A=k._meta)==null?void 0:A.master_subjects)??k.master_subjects;return m?Array.isArray(m)?m.length>0?m[0]:null:m:null},T=k=>{const m=ie(k);return(m==null?void 0:m.grade_level)||V(k.class_name||"")||"อื่น ๆ"},C=k=>{const m=ie(k),A=(m==null?void 0:m.subject_group)||"",U=k.class_name||"";return["AGM"].includes(A)||/^(PR|อก\.|อป\.)/i.test(U)?"ศาสนา":["ACDMVOC","AGMVOC"].includes(A)||/^ปวช\./i.test(U)?"ปวช":"สามัญ"},w={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},J=k=>{const m=ae(k),A=[...new Set(m.map(ee=>T(ee)).filter(Boolean))],U=w[k]||[];return[...new Set([...U,...A])].sort((ee,_)=>ee.localeCompare(_,"th"))};let D="สามัญ",M="",c="",r=null,S=parseInt(localStorage.getItem("qr_print_cols")||"4"),F=localStorage.getItem("qr_print_show_code")!=="false",Z=localStorage.getItem("qr_print_show_seat")!=="false",te=localStorage.getItem("qr_print_show_room")!=="false",s="all",i=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(i)||i<1)&&(i=4);let l=[],$=[],I="ทำหาย";const oe=()=>{if(r==="individual"&&l.length>0)W();else if(r==="class"&&c)se();else if(r==="level"&&M)le();else{const k=document.getElementById("qr-preview-section");k&&k.classList.add("hidden")}};if(t){const k=G==null?void 0:G.find(m=>m.id==t);k&&(D=C(k),M=T(k),c=k.id)}const Y=()=>{var Ee,Be;const k=["สามัญ","ศาสนา","ปวช"].map(pe=>`
        <option value="${pe}" ${pe===D?"selected":""}>${pe}</option>
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
                  <option value="ทำหาย" ${I==="ทำหาย"?"selected":""}>ทำหาย</option>
                  <option value="ชำรุด" ${I==="ชำรุด"?"selected":""}>ชำรุด</option>
                  <option value="อื่นๆ" ${I==="อื่นๆ"?"selected":""}>อื่นๆ</option>
                </select>
                <span class="text-xs text-gray-500 font-semibold ml-2">จำนวนซ้ำ:</span>
                <input id="qr-individual-repeat" type="number" min="1" max="40" value="${i}"
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
                  ${k}
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
                  <input type="checkbox" id="show-seat" ${Z?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขที่
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-code" ${F?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขประจำตัว
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-room" ${te?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงห้องเรียน
                </label>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 items-center shrink-0">
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">เลือกเพศ:</span>
                <select id="select-print-gender" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="all" ${s==="all"?"selected":""}>ทั้งหมด</option>
                  <option value="ชาย" ${s==="ชาย"?"selected":""}>ชาย 👦</option>
                  <option value="หญิง" ${s==="หญิง"?"selected":""}>หญิง 👧</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">จำนวนคอลัมน์:</span>
                <select id="select-print-cols" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="3" ${S===3?"selected":""}>3 คอลัมน์</option>
                  <option value="4" ${S===4?"selected":""}>4 คอลัมน์</option>
                  <option value="5" ${S===5?"selected":""}>5 คอลัมน์</option>
                  <option value="6" ${S===6?"selected":""}>6 คอลัมน์</option>
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
      `);const m=document.getElementById("qr-filter-category"),A=document.getElementById("qr-filter-level"),U=document.getElementById("qr-filter-class"),ee=document.getElementById("qr-level-info"),_=document.getElementById("btn-print-whole-level"),X=document.getElementById("qr-individual-search"),N=document.getElementById("qr-individual-results"),z=document.getElementById("qr-individual-repeat"),re=document.getElementById("qr-individual-clear"),de=document.getElementById("qr-individual-code-bulk"),ue=document.getElementById("qr-individual-add-codes"),me=document.getElementById("qr-reissue-reason");me.addEventListener("change",()=>{I=me.value}),(Ee=document.getElementById("btn-qr-issuer-sig"))==null||Ee.addEventListener("click",()=>{Do(O,pe=>{O=pe})});const ge="px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm",bt="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700 relative",Ae={print:{btn:document.getElementById("qr-page-tab-print"),panel:document.getElementById("qr-tab-print")},history:{btn:document.getElementById("qr-page-tab-history"),panel:document.getElementById("qr-tab-history")},requests:{btn:document.getElementById("qr-page-tab-requests"),panel:document.getElementById("qr-tab-requests")}},ke=pe=>{Object.entries(Ae).forEach(([xe,fe])=>{!fe.btn||!fe.panel||(fe.btn.className=xe===pe?ge:bt,fe.panel.classList.toggle("hidden",xe!==pe))}),pe==="history"&&Oo(Ae.history.panel,{cols:S,showCode:F,showSeat:Z,showRoom:te,qrReissueFee:j,qrIssuer:O,isAdmin:!e}),pe==="requests"&&d&&Fo(Ae.requests.panel,{teacher:e,cols:S,showCode:F,showSeat:Z,showRoom:te,qrReissueDoneMessage:b,qrReissueFee:j,qrIssuer:O})};Ae.print.btn.addEventListener("click",()=>ke("print")),Ae.history.btn.addEventListener("click",()=>ke("history")),(Be=Ae.requests.btn)==null||Be.addEventListener("click",()=>ke("requests")),d&&window._pendingQRTab==="requests"&&(window._pendingQRTab=null,ke("requests")),d&&ms({limit:500}).then(pe=>{const xe=pe.filter(we=>!we.printed_at).length,fe=document.getElementById("qr-requests-badge");fe&&xe>0&&(fe.textContent=String(xe),fe.classList.remove("hidden"))}).catch(()=>{}),X.addEventListener("input",()=>E(X.value.trim())),re.addEventListener("click",()=>{var pe;l=[],$=[],r=null,X.value="",de.value="",N.classList.add("hidden"),x(),(pe=document.getElementById("qr-preview-section"))==null||pe.classList.add("hidden")}),ue.addEventListener("click",()=>{const pe=n(de.value);if(!pe.length){P("กรุณากรอกรหัสนักเรียนอย่างน้อย 1 รหัส","warning");return}const xe=new Map(R.map(he=>[String(he.student_code||"").trim(),he])),fe=[],we=[];for(const he of pe){const Se=xe.get(he);Se?fe.push(Se):we.push(he)}$=we,fe.length>0?(u(fe),de.value=we.join(`
`),P(`เพิ่มรายชื่อสำหรับพิมพ์ ${fe.length} คน`,"success")):(x(),P("ไม่พบรหัสนักเรียนที่ระบุ","warning"))}),z.addEventListener("change",()=>{const pe=Math.max(1,Math.min(40,parseInt(z.value)||4));i=pe,z.value=String(pe),localStorage.setItem("qr_print_individual_repeat",String(i)),x(),oe()}),document.getElementById("show-seat").addEventListener("change",pe=>{Z=pe.target.checked,localStorage.setItem("qr_print_show_seat",Z),oe()}),document.getElementById("show-code").addEventListener("change",pe=>{F=pe.target.checked,localStorage.setItem("qr_print_show_code",F),oe()}),document.getElementById("show-room").addEventListener("change",pe=>{te=pe.target.checked,localStorage.setItem("qr_print_show_room",te),oe()}),document.getElementById("select-print-gender").addEventListener("change",pe=>{s=pe.target.value,oe()}),document.getElementById("select-print-cols").addEventListener("change",pe=>{S=parseInt(pe.target.value),localStorage.setItem("qr_print_cols",S),oe()});const be=()=>{D=m.value;const pe=J(D);A.innerHTML=`
          <option value="">-- เลือกระดับชั้น --</option>
          ${pe.map(xe=>`<option value="${xe}" ${xe===M?"selected":""}>${xe}</option>`).join("")}
        `,ve()},ve=()=>{M=A.value;const xe=ae(D).filter(we=>M?T(we)===M:!0).sort((we,he)=>(we.class_name||"").localeCompare(he.class_name||"","th"));U.innerHTML=`
          <option value="">-- เลือกห้องเรียน (${xe.length} ห้อง) --</option>
          ${xe.map(we=>`
            <option value="${h(we.class_name)}" ${we.class_name===c?"selected":""}>${h(we.class_name)}</option>
          `).join("")}
        `,M&&xe.length>0?(ee.textContent=`ระดับ ${M} มีทั้งหมด ${xe.length} ห้อง`,_.textContent=`📚 พิมพ์ทั้งระดับ ${M} (${xe.length} ห้อง แยกหน้า)`,_.classList.remove("hidden")):(ee.textContent="เลือกระดับชั้นเพื่อดูตัวเลือกพิมพ์ทั้งชั้น",_.classList.add("hidden"));const fe=U.value;fe?(c=fe,r="class",se()):(r=null,document.getElementById("qr-preview-section").classList.add("hidden"))};m.addEventListener("change",()=>{M="",c="",r=null,be()}),A.addEventListener("change",()=>{c="",r=null,ve()}),U.addEventListener("change",()=>{c=U.value,c?(r="class",se()):(r=null,document.getElementById("qr-preview-section").classList.add("hidden"))}),_.addEventListener("click",()=>{r="level",le()}),be()},o=k=>k?D==="ศาสนา"?k.religion_room||k.main_room||"ไม่ระบุห้อง":k.main_room||k.religion_room||"ไม่ระบุห้อง":"ไม่ระบุห้อง",f=k=>{const m=o(k),A=D==="ศาสนา",ee=R.filter(_=>(A?_.religion_room:_.main_room)===m).sort((_,X)=>(_.student_code||"").localeCompare(X.student_code||"")).findIndex(_=>String(_.id)===String(k.id));return ee>=0?ee+1:""},y=()=>{const k=new Map(R.map(m=>[String(m.id),m]));return l.map(m=>k.get(String(m))).filter(Boolean)},n=k=>{const m=new Set;return String(k||"").split(/[\s,，;；|]+/).map(A=>A.trim()).filter(Boolean).filter(A=>m.has(A)?!1:(m.add(A),!0))},u=k=>{const m=[...l],A=new Set(m.map(String));for(const U of k){const ee=String(U.id);A.has(ee)||(A.add(ee),m.push(ee))}l=m,r=l.length>0?"individual":null,x(),l.length>0&&W()},x=()=>{var U;const k=document.getElementById("qr-individual-selected");if(!k)return;const m=y();if(m.length===0&&$.length===0){k.classList.add("hidden"),k.innerHTML="";return}const A=m.length*i;k.classList.remove("hidden"),k.innerHTML=`
        ${m.length>0?`
          <div class="bg-indigo-50 px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-indigo-900">รายการที่เลือก ${m.length} คน</p>
              <p class="text-[11px] text-indigo-700 mt-0.5">พิมพ์รวม ${A} ใบ เมื่อใช้จำนวนซ้ำ ${i} ใบ/คน</p>
            </div>
            <button type="button" id="qr-individual-clear-selected"
              class="px-3 py-1.5 rounded-lg bg-white border border-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs font-bold">
              ล้างรายชื่อ
            </button>
          </div>
          <div class="divide-y divide-indigo-50 bg-white">
            ${m.map(ee=>{const _=ee.main_room||ee.religion_room||"ไม่ระบุห้อง";return`
                <div class="px-4 py-3 flex items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${h(ee.full_name||"ไม่ระบุชื่อ")}</p>
                    <p class="text-xs text-gray-400 font-mono truncate">${h(ee.student_code||"-")} · ${h(_)}</p>
                  </div>
                  <button type="button" data-remove-id="${ee.id}"
                    class="qr-individual-remove px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-bold">
                    ลบ
                  </button>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${$.length>0?`
          <div class="bg-amber-50 border-t border-amber-100 px-4 py-3">
            <p class="text-xs font-bold text-amber-800">ไม่พบรหัส ${$.length} รายการ</p>
            <p class="text-[11px] text-amber-700 font-mono mt-1 break-words">${h($.join(", "))}</p>
          </div>
        `:""}
      `,(U=k.querySelector("#qr-individual-clear-selected"))==null||U.addEventListener("click",()=>{var ee;l=[],$=[],r=null,x(),(ee=document.getElementById("qr-preview-section"))==null||ee.classList.add("hidden")}),k.querySelectorAll(".qr-individual-remove").forEach(ee=>{ee.addEventListener("click",()=>{var _;l=l.filter(X=>String(X)!==String(ee.dataset.removeId)),r=l.length>0?"individual":null,x(),l.length>0?W():(_=document.getElementById("qr-preview-section"))==null||_.classList.add("hidden")})})},g=k=>[k.student_code,k.full_name,k.main_room,k.religion_room].filter(Boolean).join(" ").toLowerCase(),E=k=>{const m=document.getElementById("qr-individual-results");if(!m)return;const A=k.toLowerCase();if(!A){m.classList.add("hidden"),m.innerHTML="";return}const U=R.filter(ee=>g(ee).includes(A)).sort((ee,_)=>(ee.student_code||"").localeCompare(_.student_code||"")).slice(0,20);if(m.classList.remove("hidden"),!U.length){m.innerHTML='<div class="px-4 py-4 text-center text-xs text-gray-400 bg-gray-50">ไม่พบนักเรียนที่ตรงกับคำค้นหา</div>';return}m.innerHTML=U.map(ee=>{const _=ee.main_room||ee.religion_room||"ไม่ระบุห้อง";return`
          <button type="button" data-student-id="${ee.id}"
            class="qr-individual-pick w-full px-4 py-3 text-left bg-white hover:bg-indigo-50 transition flex items-center justify-between gap-3">
            <span class="min-w-0">
              <span class="block text-sm font-bold text-gray-800 truncate">${h(ee.full_name||"ไม่ระบุชื่อ")}</span>
              <span class="block text-xs text-gray-400 font-mono truncate">${h(ee.student_code||"-")} · ${h(_)}</span>
            </span>
            <span class="text-xs font-bold text-indigo-600 flex-shrink-0">${l.includes(String(ee.id))?"เพิ่มแล้ว":"เพิ่ม"}</span>
          </button>
        `}).join(""),m.querySelectorAll(".qr-individual-pick").forEach(ee=>{ee.addEventListener("click",()=>{const _=ee.dataset.studentId||"",X=R.find(z=>String(z.id)===String(_)),N=document.getElementById("qr-individual-search");X&&($=[],u([X])),m.classList.add("hidden"),N&&(N.value="")})})},K=async k=>{const m=await tt.toDataURL(k.student_code||"",{width:1e3,margin:2,color:{dark:"#000000",light:"#ffffff"}}),A=document.createElement("a"),U=String(k.student_code||k.id||"student").replace(/[^\w-]+/g,"_");A.href=m,A.download=`qr-${U}.png`,document.body.appendChild(A),A.click(),A.remove()},W=async()=>{var _,X;const k=document.getElementById("qr-preview-section"),m=y();if(!k||m.length===0)return;r="individual",k.classList.remove("hidden");const A=m.flatMap(N=>{const z=o(N),re=f(N);return Array.from({length:i},(de,ue)=>({...N,seat_no:re,_roomName:z,_print_copy:ue+1}))}),U=m[0],ee=A.length;k.innerHTML=`
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
          <span class="text-base">💡</span>
          <div>
            <p class="font-bold">พิมพ์รายบุคคลสำหรับกรณี QR Code หาย</p>
            <p class="opacity-90">เลือกไว้ ${m.length} คน วางซ้ำ ${i} ใบ/คน รวม ${ee} ใบ และตอนพิมพ์จะไม่ใส่หัวกระดาษชื่อชั้นเรียน</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">รายบุคคล</p>
              <h4 class="font-extrabold text-gray-800 text-base mt-1">${m.length===1?h(U.full_name||"ไม่ระบุชื่อ"):`พร้อมพิมพ์ ${m.length} คน`}</h4>
              <p class="text-xs text-gray-400 font-mono mt-0.5">${m.length===1?h(U.student_code||"-"):`รวม ${ee} ใบ`}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button id="btn-print-individual-qr" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
                🖨️ พิมพ์ / บันทึก PDF (${ee} ใบ)
              </button>
              ${m.length===1?`
                <button id="btn-download-individual-qr" class="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-950 text-white font-bold text-xs shadow-md transition">
                  ⬇️ ดาวน์โหลด PNG
                </button>
              `:""}
            </div>
          </div>
          <div class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="grid-template-columns: repeat(${S}, minmax(0, 1fr));">
            ${A.map((N,z)=>`
              <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                  <canvas id="individual-copy-canvas-${z}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                </div>
                <div class="text-left w-full min-w-0 font-sans">
                  <p class="text-[11px] font-bold text-gray-800 truncate">${h(N.full_name)}</p>
                  ${F?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${h(N.student_code||"-")}</p>`:""}
                  <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                    ${te?`<span>ห้อง: ${h(N._roomName)}</span>`:""}
                    ${Z&&N.seat_no?`<span>เลขที่: ${N.seat_no}</span>`:""}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `,A.forEach((N,z)=>{const re=document.getElementById(`individual-copy-canvas-${z}`);re&&tt.toCanvas(re,N.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},de=>{de&&console.error("Individual QR error:",de)})}),(_=document.getElementById("btn-print-individual-qr"))==null||_.addEventListener("click",async()=>{const N=document.getElementById("btn-print-individual-qr");N.disabled=!0,N.textContent="กำลังบันทึก...";let z=[];try{z=await Promise.all(m.map(re=>rn({studentId:re.id,teacherId:e==null?void 0:e.id,reason:I})))}catch(re){console.error("Failed to log QR reissue:",re),P("บันทึกสถิติการออก QR ใหม่ไม่สำเร็จ: "+ce(re),"warning")}N.disabled=!1,N.textContent=`🖨️ พิมพ์ / บันทึก PDF (${ee} ใบ)`,await qe([{className:"รายบุคคล",countLabel:`${m.length} คน · ${ee} ใบ`,students:A,hideHeader:!0}],S,F,Z,te,[]),z.length>0&&(P(`บันทึกสถิติออก QR ใหม่ ${z.length} คนแล้ว (${I})`,"success"),await Ct(z.length)&&await qe([],S,F,Z,te,z,j,O))}),(X=document.getElementById("btn-download-individual-qr"))==null||X.addEventListener("click",async()=>{await K(U)})},se=async()=>{r="class";const k=document.getElementById("qr-preview-section");if(k){k.classList.remove("hidden");try{const m=D==="ศาสนา",A=c,U=R.filter(_=>(m?_.religion_room:_.main_room)===c).sort((_,X)=>(_.student_code||"").localeCompare(X.student_code||"")).map((_,X)=>({..._,seat_no:X+1}));if(U.length===0){k.innerHTML=`
            <div class="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <p class="text-4xl mb-2">👥</p>
              <p class="text-sm font-semibold text-gray-500">ไม่มีนักเรียนที่เปิดใช้งานในห้องเรียนนี้</p>
            </div>
          `;return}const ee=U.filter(_=>s==="all"?!0:_.gender===s);k.innerHTML=`
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
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">พรีวิวการจัดวาง — ${h(A)} (${ee.length} คน)</p>
              <button id="btn-trigger-print" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5" ${ee.length===0?'disabled style="opacity: 0.5; cursor: not-allowed;"':""}>
                🖨️ สั่งพิมพ์ห้องนี้ (Print)
              </button>
            </div>
            <div id="qr-live-grid" class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="${ee.length===0?"":`grid-template-columns: repeat(${S}, minmax(0, 1fr));`}">
              ${ee.length===0?`
                <div class="col-span-full py-12 text-center text-xs text-gray-400 font-semibold bg-white border border-gray-100 rounded-2xl">ไม่มีนักเรียนเพศที่เลือกในห้องเรียนนี้</div>
              `:ee.map(_=>`
                <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                  <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                    <canvas id="live-canvas-${_.id}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                  </div>
                  <div class="text-left w-full min-w-0 font-sans">
                    <p class="text-[11px] font-bold text-gray-800 truncate">${h(_.full_name)}</p>
                    ${F?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${h(_.student_code||"-")}</p>`:""}
                    <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                      ${te?`<span>ห้อง: ${h(A)}</span>`:""}
                      ${Z?`<span>เลขที่: ${_.seat_no}</span>`:""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `,ee.forEach(_=>{const X=document.getElementById(`live-canvas-${_.id}`);X&&tt.toCanvas(X,_.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},N=>{N&&console.error("Live QR error:",N)})}),ee.length>0&&document.getElementById("btn-trigger-print").addEventListener("click",async()=>{await qe([{className:A,students:ee}],S,F,Z,te)})}catch(m){console.error(m),k.innerHTML='<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาดในการโหลดรายชื่อนักเรียน</div>'}}},le=async()=>{r="level";const k=document.getElementById("qr-filter-level"),m=document.getElementById("qr-preview-section");if(!M||!m)return;const U=ae(D).filter(ee=>T(ee)===M).sort((ee,_)=>(ee.class_name||"").localeCompare(_.class_name||"","th"));if(U.length!==0){m.classList.remove("hidden"),m.innerHTML=`
        <div class="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div class="flex flex-col items-center gap-4">
            <svg class="animate-spin h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            <p class="text-sm font-bold text-gray-700">กำลังจัดเตรียมรายชื่อนักเรียนทุกห้องในระดับ ${h(M)}...</p>
            <p class="text-xs text-gray-400" id="qr-level-progress">กำลังจัดเตรียม 0 / ${U.length} ห้อง</p>
          </div>
        </div>
      `;try{const ee=[],_=D==="ศาสนา";for(let N=0;N<U.length;N++){const z=U[N],re=document.getElementById("qr-level-progress");re&&(re.textContent=`กำลังจัดเตรียม ${N+1} / ${U.length} ห้อง — ${z.class_name}`);const de=R.filter(ue=>(_?ue.religion_room:ue.main_room)===z.class_name).filter(ue=>s==="all"||ue.gender===s).sort((ue,me)=>(ue.student_code||"").localeCompare(me.student_code||"")).map((ue,me)=>({...ue,seat_no:me+1}));de.length>0&&ee.push({className:z.class_name,students:de})}if(ee.length===0){m.innerHTML='<div class="bg-white border border-gray-200 rounded-3xl p-8 text-center text-gray-400 text-sm">ไม่พบนักเรียนในระดับชั้นนี้</div>';return}const X=ee.reduce((N,z)=>N+z.students.length,0);m.innerHTML=`
          <div class="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 class="font-bold text-gray-800 text-base">📚 พร้อมพิมพ์ทั้งระดับ ${h(M)}</h4>
                <p class="text-sm text-gray-500 mt-1">${ee.length} ห้อง · ${X} คน · แต่ละห้องจะแยกหน้ากระดาษ</p>
              </div>
              <button id="btn-confirm-whole-level-print" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2">
                🖨️ พิมพ์ / บันทึก PDF ทั้ง ${h(M)}
              </button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${ee.map(N=>`
                <div class="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-center">
                  <p class="text-sm font-bold text-gray-800">${h(N.className)}</p>
                  <p class="text-xs text-gray-500 mt-0.5">${N.students.length} คน</p>
                </div>
              `).join("")}
            </div>
          </div>
        `,document.getElementById("btn-confirm-whole-level-print").addEventListener("click",async()=>{await qe(ee,S,F,Z,te)})}catch(ee){console.error(ee),m.innerHTML=`<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาด: ${ee.message}</div>`}}};Y()}catch(R){console.error(R),P("โหลดข้อมูลล้มเหลว: "+ce(R),"error")}}async function Oo(e,{cols:t,showCode:a,showSeat:d,showRoom:L,qrReissueFee:q,qrIssuer:H,isAdmin:v}){var ie;if(!e||e.dataset.loaded)return;e.dataset.loaded="1",e.innerHTML=`
    <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-3">
      <div>
        <h4 class="font-bold text-gray-800 text-sm">🧾 ประวัตินักเรียนที่มาติดต่อออก QR Code ใหม่</h4>
        <p class="text-xs text-gray-400 mt-0.5">${v?"ค้นหา ออก QR ซ้ำ ออกใบเสร็จซ้ำ แก้ไขเหตุผล หรือลบรายการได้":"ค้นหา หรือออก QR / ใบเสร็จซ้ำได้ (แก้ไข/ลบได้เฉพาะแอดมิน)"}</p>
      </div>
      <input id="qr-reissue-search" type="search"
        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
        placeholder="ค้นหาชื่อ รหัส หรือห้อง..." />
      <div id="qr-reissue-summary" class="grid grid-cols-2 gap-2"></div>
      <div id="qr-reissue-history" class="bg-gray-50/50 rounded-2xl px-3">
        <p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>
      </div>
    </div>
  `;let p=[],B="",R=null,Q={reason:"ทำหาย",note:""};const j=()=>{const T=e.querySelector("#qr-reissue-history");if(!T)return;const C=B.trim().toLowerCase(),w=C?p.filter(D=>{const M=D.students||{};return String(M.full_name||"").toLowerCase().includes(C)||String(M.student_code||"").toLowerCase().includes(C)||String(M.main_room||"").toLowerCase().includes(C)}):p,J=e.querySelector("#qr-reissue-summary");if(J){const D=Number(q)||0;J.innerHTML=`
        <div class="bg-indigo-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-indigo-500 font-bold">จำนวนรายการ${C?" (ที่กรอง)":""}</p>
          <p class="text-base font-extrabold text-indigo-700">${w.length}</p>
        </div>
        <div class="bg-amber-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-amber-600 font-bold">ยอดค่าธรรมเนียมรวม (${D} บาท/ใบ)</p>
          <p class="text-base font-extrabold text-amber-700">${(w.length*D).toLocaleString("th-TH")} บาท</p>
        </div>`}T.innerHTML=w.length?`
      <div class="divide-y divide-gray-100">
        ${w.map(D=>{var M,c,r,S,F,Z;return D.id===R?`
          <div class="py-3 space-y-2">
            <p class="font-bold text-gray-700 text-xs">${h(((M=D.students)==null?void 0:M.full_name)||"-")} <span class="font-normal text-gray-400">(${h(((c=D.students)==null?void 0:c.student_code)||"-")})</span></p>
            <div class="flex flex-wrap gap-2 items-center">
              <select id="reissue-edit-reason" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                <option value="ทำหาย" ${Q.reason==="ทำหาย"?"selected":""}>ทำหาย</option>
                <option value="ชำรุด" ${Q.reason==="ชำรุด"?"selected":""}>ชำรุด</option>
                <option value="อื่นๆ" ${Q.reason==="อื่นๆ"?"selected":""}>อื่นๆ</option>
              </select>
              <input id="reissue-edit-note" type="text" placeholder="หมายเหตุ (ถ้ามี)" value="${h(Q.note||"")}"
                class="flex-1 min-w-[140px] border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500" />
              <button type="button" data-action="save-edit" data-log-id="${D.id}" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">บันทึก</button>
              <button type="button" data-action="cancel-edit" class="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs">ยกเลิก</button>
            </div>
          </div>
        `:`
          <div class="flex items-center justify-between gap-3 py-2.5 text-xs flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 truncate">${h(((r=D.students)==null?void 0:r.full_name)||"-")} <span class="font-normal text-gray-400">(${h(((S=D.students)==null?void 0:S.student_code)||"-")})</span></p>
              <p class="text-gray-400 mt-0.5">เลขที่ QR-${String(D.receipt_no).padStart(6,"0")} · ${h(D.reason)}${D.note?` (${h(D.note)})`:""} · ห้อง ${h(((F=D.students)==null?void 0:F.main_room)||"-")} · ออกโดย ${h(((Z=D.teachers)==null?void 0:Z.full_name)||"แอดมิน")} · ${new Date(D.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</p>
            </div>
            <div class="flex gap-1.5 shrink-0">
              <button type="button" data-action="reprint-qr" data-log-id="${D.id}" title="ออก QR Code" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]">🖨️ QR</button>
              <button type="button" data-action="reprint-receipt" data-log-id="${D.id}" title="ออกใบเสร็จ" class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-[11px]">🧾 ใบเสร็จ</button>
              ${v?`
                <button type="button" data-action="edit" data-log-id="${D.id}" title="แก้ไข" class="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-[11px]">✏️ แก้ไข</button>
                <button type="button" data-action="delete" data-log-id="${D.id}" title="ลบ" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
              `:""}
            </div>
          </div>
        `}).join("")}
      </div>
    `:`
      <p class="text-xs text-gray-400 text-center py-6">${p.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีประวัติการออก QR ใหม่"}</p>
    `},b=async()=>{const T=e.querySelector("#qr-reissue-history");if(T){T.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>';try{p=await xn({limit:300}),j()}catch(C){console.error("Failed to load QR reissue history:",C),T.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดประวัติไม่สำเร็จ</p>'}}},O=async T=>{const C=T.students;if(!(C!=null&&C.id)){P("ไม่พบข้อมูลนักเรียนสำหรับรายการนี้","warning");return}await qe([{className:"รายบุคคล",countLabel:"1 ใบ",students:[{id:C.id,full_name:C.full_name,student_code:C.student_code,seat_no:null,_roomName:C.main_room}],hideHeader:!0}],t,a,d,L,[])},G=async T=>{await qe([],t,a,d,L,[T],q,H)},ne=async T=>{var C;if(v)try{const w=await mn(T,{reason:Q.reason,note:((C=Q.note)==null?void 0:C.trim())||null});p=p.map(J=>J.id===T?w:J),R=null,j(),P("บันทึกการแก้ไขแล้ว","success")}catch(w){console.error("Failed to update QR reissue log:",w),P("บันทึกไม่สำเร็จ: "+ce(w),"error")}},ae=async T=>{var J;if(!v)return;const C=p.find(D=>D.id===T);if(await pt({title:"ลบประวัตินี้?",message:`ลบรายการออก QR ใหม่ของ ${((J=C==null?void 0:C.students)==null?void 0:J.full_name)||"นักเรียน"} (เลขที่ QR-${String((C==null?void 0:C.receipt_no)??0).padStart(6,"0")})`,detail:"ลบแล้วไม่สามารถกู้คืนได้ สถิติรายการนี้จะหายไปถาวร",confirmText:"ลบเลย"}))try{await un(T),p=p.filter(D=>D.id!==T),j(),P("ลบประวัติแล้ว","success")}catch(D){console.error("Failed to delete QR reissue log:",D),P("ลบไม่สำเร็จ: "+ce(D),"error")}},V=e.querySelector("#qr-reissue-history");V.addEventListener("click",T=>{const C=T.target.closest("[data-action]");if(!C)return;const w=C.dataset.logId,J=p.find(D=>D.id===w);C.dataset.action==="reprint-qr"&&J?O(J):C.dataset.action==="reprint-receipt"&&J?G(J):C.dataset.action==="delete"&&w&&v?ae(w):C.dataset.action==="edit"&&J&&v?(R=w,Q={reason:J.reason,note:J.note||""},j()):C.dataset.action==="cancel-edit"?(R=null,j()):C.dataset.action==="save-edit"&&w&&v&&ne(w)}),V.addEventListener("change",T=>{T.target.id==="reissue-edit-reason"&&(Q.reason=T.target.value)}),V.addEventListener("input",T=>{T.target.id==="reissue-edit-note"&&(Q.note=T.target.value)}),(ie=e.querySelector("#qr-reissue-search"))==null||ie.addEventListener("input",T=>{B=T.target.value,j()}),b()}function Ho(e){if(!e||e.dataset.bound)return;e.dataset.bound="1";const t=e.getContext("2d");t.lineWidth=2.5,t.lineCap="round",t.lineJoin="round",t.strokeStyle="#111827";let a=!1,d=null;const L=p=>{const B=e.getBoundingClientRect(),R=p.touches?p.touches[0]:p;return{x:(R.clientX-B.left)*(e.width/B.width),y:(R.clientY-B.top)*(e.height/B.height)}},q=p=>{p.preventDefault(),a=!0,d=L(p)},H=p=>{if(!a)return;p.preventDefault();const B=L(p);t.beginPath(),t.moveTo(d.x,d.y),t.lineTo(B.x,B.y),t.stroke(),d=B},v=()=>{a=!1};e.addEventListener("mousedown",q),e.addEventListener("mousemove",H),window.addEventListener("mouseup",v),e.addEventListener("touchstart",q,{passive:!1}),e.addEventListener("touchmove",H,{passive:!1}),e.addEventListener("touchend",v)}function Do(e,t){var L;(L=document.getElementById("qr-issuer-sig-modal"))==null||L.remove();const a=document.createElement("div");a.id="qr-issuer-sig-modal",a.className="fixed inset-0 z-[230] flex items-center justify-center p-4 bg-black/50",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",q=>{q.target===a&&a.remove()}),a.querySelector("#qr-sig-close").addEventListener("click",()=>a.remove()),Ho(a.querySelector("#qr-sig-canvas"));const d=q=>{a.querySelector("#qr-sig-preview").innerHTML=q?`<img src="${h(q)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'};a.querySelector("#qr-sig-save-info").addEventListener("click",async()=>{const q=a.querySelector("#qr-sig-name").value.trim(),H=a.querySelector("#qr-sig-title").value.trim();try{await Promise.all([Ye("qrIssuerSignatureName",q),Ye("qrIssuerSignatureTitle",H)]),e={...e,name:q,title:H},t(e),P("บันทึกชื่อ-ตำแหน่งแล้ว ✅","success")}catch(v){P("บันทึกไม่สำเร็จ: "+ce(v),"error")}}),a.querySelector("#qr-sig-clear").addEventListener("click",()=>{const q=a.querySelector("#qr-sig-canvas");q.getContext("2d").clearRect(0,0,q.width,q.height)}),a.querySelector("#qr-sig-save-drawn").addEventListener("click",async()=>{const q=a.querySelector("#qr-sig-canvas"),H=await new Promise(p=>q.toBlob(p,"image/png"));if(!H){P("ยังไม่มีลายเซ็นให้บันทึก","warning");return}const v=a.querySelector("#qr-sig-save-drawn");v.disabled=!0,v.textContent="กำลังบันทึก...";try{const p=await Dt(H);await Ye("qrIssuerSignatureUrl",p),e={...e,url:p},t(e),d(p),P("บันทึกลายเซ็นแล้ว ✅","success")}catch(p){P("บันทึกไม่สำเร็จ: "+ce(p),"error")}finally{v.disabled=!1,v.textContent="บันทึกลายเซ็นที่วาด"}}),a.querySelector("#qr-sig-upload").addEventListener("click",async()=>{var v;const q=(v=a.querySelector("#qr-sig-file").files)==null?void 0:v[0];if(!q){P("กรุณาเลือกไฟล์รูปลายเซ็น","warning");return}const H=a.querySelector("#qr-sig-upload");H.disabled=!0,H.textContent="กำลังอัปโหลด...";try{const p=await Dt(q);await Ye("qrIssuerSignatureUrl",p),e={...e,url:p},t(e),d(p),P("อัปโหลดลายเซ็นแล้ว ✅","success")}catch(p){P("อัปโหลดไม่สำเร็จ: "+ce(p),"error")}finally{H.disabled=!1,H.textContent="อัปโหลด"}})}async function Fo(e,{teacher:t,cols:a,showCode:d,showSeat:L,showRoom:q,qrReissueDoneMessage:H,qrReissueFee:v="5",qrIssuer:p=null}){var c,r,S,F,Z,te;if(!e||e.dataset.loaded)return;e.dataset.loaded="1";const B=!t;e.innerHTML=`
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
    ${B?`
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
  `;let R=[],Q="";const j=new Set,b=()=>{const s=e.querySelector("#qr-requests-bulk-bar"),i=e.querySelector("#qr-requests-bulk-count");if(!s||!i)return;j.size>0?(s.classList.remove("hidden"),i.textContent=`เลือกไว้ ${j.size} คน`):s.classList.add("hidden");const l=R.filter(I=>!I.printed_at).map(I=>I.id),$=e.querySelector("#qr-requests-select-all");$&&($.checked=l.length>0&&l.every(I=>j.has(I)))},O=()=>{const s=e.querySelector("#qr-requests-list");if(!s)return;const i=Q.trim().toLowerCase(),l=i?R.filter(Y=>{const o=Y.students||{};return String(o.full_name||"").toLowerCase().includes(i)||String(o.student_code||"").toLowerCase().includes(i)||String(o.main_room||"").toLowerCase().includes(i)}):R,$=l.filter(Y=>!Y.printed_at),I=l.filter(Y=>Y.printed_at);for(const Y of[...j])$.some(o=>o.id===Y)||j.delete(Y);const oe=(Y,o)=>{var f,y,n;return`
      <div class="py-3 flex items-start gap-2 ${o?"bg-amber-50/60 -mx-3 px-3 rounded-xl":""}">
        ${o?`<input type="checkbox" data-select-id="${Y.id}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 flex-shrink-0" ${j.has(Y.id)?"checked":""}>`:'<span class="w-3.5 flex-shrink-0"></span>'}
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 text-xs truncate">${h(((f=Y.students)==null?void 0:f.full_name)||"-")} <span class="font-normal text-gray-400">(${h(((y=Y.students)==null?void 0:y.student_code)||"-")})</span></p>
              <p class="text-gray-400 text-[11px] mt-0.5">ห้อง ${h(((n=Y.students)==null?void 0:n.main_room)||"-")} · แจ้งเมื่อ ${new Date(Y.requested_at).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}</p>
            </div>
            ${o?"":'<span class="text-[11px] font-bold text-emerald-600 flex-shrink-0">✅ ทำเสร็จแล้ว</span>'}
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${o?`<button type="button" data-action="fulfill" data-id="${Y.id}" class="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px]">🖨️ ทำเสร็จแล้ว (พิมพ์บัตร)</button>`:""}
            <button type="button" data-action="toggle-pickup" data-id="${Y.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${Y.picked_up_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">🤝 ${Y.picked_up_at?"มารับแล้ว":"มารับหรือยัง"}</button>
            <button type="button" data-action="toggle-fine" data-id="${Y.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${Y.fine_paid_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">💰 ${Y.fine_paid_at?"ชำระค่าปรับแล้ว":"ชำระค่าปรับหรือยัง"}</button>
            <button type="button" data-action="delete" data-id="${Y.id}" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
          </div>
        </div>
      </div>`};s.innerHTML=l.length?`<div class="divide-y divide-gray-100">${[...$,...I].map(Y=>oe(Y,!Y.printed_at)).join("")}</div>`:`
      <p class="text-xs text-gray-400 text-center py-6">${R.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีคำขอจากนักเรียน"}</p>
    `,b()},G=async()=>{const s=e.querySelector("#qr-requests-list");s&&(s.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>');try{R=await ms({limit:500}),O()}catch(i){console.error("Failed to load QR reissue requests:",i),s&&(s.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดรายการไม่สำเร็จ</p>')}},ne=s=>{var I,oe;const i=R.find(Y=>Y.id===s);if(!((I=i==null?void 0:i.students)!=null&&I.id)){P("ไม่พบข้อมูลนักเรียนสำหรับคำขอนี้","warning");return}(oe=document.getElementById("qr-fulfill-modal"))==null||oe.remove();let l=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(l)||l<1)&&(l=4);const $=document.createElement("div");$.id="qr-fulfill-modal",$.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",$.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${h(i.students.full_name||"-")}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส ${h(i.students.student_code||"-")} · ห้อง ${h(i.students.main_room||"-")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${l}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึก</button>
        </div>
      </div>`,document.body.appendChild($),$.addEventListener("click",Y=>{Y.target===$&&$.remove()}),$.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>$.remove()),$.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const Y=$.querySelector("#qr-fulfill-reason").value,o=Math.max(1,Math.min(40,parseInt($.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(o));const f=$.querySelector("#qr-fulfill-ok");f.disabled=!0,f.textContent="กำลังดำเนินการ...";try{const y=await Pt({requestId:s,studentId:i.students.id,teacherId:(t==null?void 0:t.id)??null,reason:Y,feedbackId:i.feedback_id,message:H}),n=Array.from({length:o},(u,x)=>({id:i.students.id,full_name:i.students.full_name,student_code:i.students.student_code,seat_no:null,_roomName:i.students.main_room,_print_copy:x+1}));await qe([{className:"รายบุคคล",countLabel:`${o} ใบ`,students:n,hideHeader:!0}],a,d,L,q,[]),$.remove(),P("ทำเสร็จแล้ว บันทึกเข้าประวัติ + แจ้งนักเรียนแล้ว ✅","success"),await G(),y&&await Ct(1)&&await qe([],a,d,L,q,[y],v,p)}catch(y){f.disabled=!1,f.textContent="🖨️ พิมพ์ + บันทึก",P("บันทึกไม่สำเร็จ: "+ce(y),"error")}})},ae=()=>{var $;const s=R.filter(I=>{var oe;return j.has(I.id)&&((oe=I.students)==null?void 0:oe.id)});if(!s.length)return;($=document.getElementById("qr-fulfill-modal"))==null||$.remove();let i=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(i)||i<1)&&(i=4);const l=document.createElement("div");l.id="qr-fulfill-modal",l.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",l.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${s.length} คนพร้อมกัน</p>
          <p class="text-xs text-gray-400 mt-0.5">${s.map(I=>h(I.students.full_name||"-")).join(", ")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${i}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึกทั้งหมด</button>
        </div>
      </div>`,document.body.appendChild(l),l.addEventListener("click",I=>{I.target===l&&l.remove()}),l.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const I=l.querySelector("#qr-fulfill-reason").value,oe=Math.max(1,Math.min(40,parseInt(l.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(oe));const Y=l.querySelector("#qr-fulfill-ok");Y.disabled=!0,Y.textContent="กำลังดำเนินการ...";try{const o=await Promise.all(s.map(y=>Pt({requestId:y.id,studentId:y.students.id,teacherId:(t==null?void 0:t.id)??null,reason:I,feedbackId:y.feedback_id,message:H}))),f=s.flatMap(y=>Array.from({length:oe},(n,u)=>({id:y.students.id,full_name:y.students.full_name,student_code:y.students.student_code,seat_no:null,_roomName:y.students.main_room,_print_copy:u+1})));await qe([{className:"คำขอทำบัตรใหม่ (หลายคน)",countLabel:`${s.length} คน · ${f.length} ใบ`,students:f,hideHeader:!0}],a,d,L,q,[]),l.remove(),j.clear(),P(`ทำเสร็จแล้ว ${s.length} คน บันทึกเข้าประวัติ + แจ้งนักเรียนทุกคนแล้ว ✅`,"success"),await G(),o.length&&await Ct(o.length)&&await qe([],a,d,L,q,o,v,p)}catch(o){Y.disabled=!1,Y.textContent="🖨️ พิมพ์ + บันทึกทั้งหมด",P("บันทึกไม่สำเร็จ: "+ce(o),"error")}})},V=async(s,i)=>{const l=R.find(I=>I.id===s),$=l!=null&&l[i]?null:new Date().toISOString();try{await gn(s,i,$),l[i]=$,O()}catch(I){P("บันทึกไม่สำเร็จ: "+ce(I),"error")}},ie=async s=>{if(confirm("ลบคำขอนี้?"))try{await bn(s),R=R.filter(i=>i.id!==s),O(),P("ลบแล้ว","success")}catch(i){P("ลบไม่สำเร็จ: "+ce(i),"error")}};if((c=e.querySelector("#qr-requests-search"))==null||c.addEventListener("input",s=>{Q=s.target.value,O()}),(r=e.querySelector("#qr-requests-list"))==null||r.addEventListener("click",s=>{const i=s.target.closest("[data-action]");if(!i)return;const l=parseInt(i.dataset.id);i.dataset.action==="fulfill"?ne(l):i.dataset.action==="toggle-pickup"?V(l,"picked_up_at"):i.dataset.action==="toggle-fine"?V(l,"fine_paid_at"):i.dataset.action==="delete"&&ie(l)}),(S=e.querySelector("#qr-requests-list"))==null||S.addEventListener("change",s=>{const i=s.target.closest("[data-select-id]");if(!i)return;const l=parseInt(i.dataset.selectId);i.checked?j.add(l):j.delete(l),b()}),(F=e.querySelector("#qr-requests-select-all"))==null||F.addEventListener("change",s=>{const i=R.filter(l=>!l.printed_at).map(l=>l.id);s.target.checked?i.forEach(l=>j.add(l)):i.forEach(l=>j.delete(l)),O()}),(Z=e.querySelector("#qr-requests-bulk-fulfill"))==null||Z.addEventListener("click",()=>ae()),G(),!B)return;let T=[];const C=()=>{const s=e.querySelector("#qr-manager-list");s&&(s.innerHTML=T.length?T.map(i=>{var l,$;return`
      <div class="flex items-center justify-between gap-2 py-2 text-xs">
        <span class="font-semibold text-gray-700">${h(((l=i.teachers)==null?void 0:l.full_name)||"-")} <span class="font-normal text-gray-400">(${h((($=i.teachers)==null?void 0:$.teacher_code)||"-")})</span></span>
        <button type="button" data-revoke="${i.profile_id}" class="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">ยกเลิกสิทธิ์</button>
      </div>`}).join(""):`
      <p class="text-xs text-gray-400 text-center py-4">ยังไม่มีครูที่ได้รับสิทธิ์</p>
    `)},w=async()=>{try{T=await fn(),C()}catch{const s=e.querySelector("#qr-manager-list");s&&(s.innerHTML='<p class="text-xs text-red-400 text-center py-4">โหลดไม่สำเร็จ</p>')}};(te=e.querySelector("#qr-manager-list"))==null||te.addEventListener("click",async s=>{const i=s.target.closest("[data-revoke]");if(i)try{await ln(i.dataset.revoke),await w(),P("ยกเลิกสิทธิ์แล้ว","success")}catch(l){P("ยกเลิกไม่สำเร็จ: "+ce(l),"error")}});const J=e.querySelector("#qr-manager-search"),D=e.querySelector("#qr-manager-search-results");let M=null;J==null||J.addEventListener("input",()=>{clearTimeout(M);const s=J.value.trim();if(!s){D.classList.add("hidden"),D.innerHTML="";return}M=setTimeout(async()=>{try{const i=await dn(s);D.classList.toggle("hidden",!i.length),D.innerHTML=i.map(l=>`
          <button type="button" data-grant="${l.profile_id}" data-name="${h(l.full_name)}" class="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs hover:bg-gray-50 text-left">
            <span class="font-semibold text-gray-700">${h(l.full_name)} <span class="font-normal text-gray-400">(${h(l.teacher_code||"-")})</span></span>
            <span class="text-indigo-600 font-bold">+ มอบสิทธิ์</span>
          </button>`).join("")}catch{}},300)}),D==null||D.addEventListener("click",async s=>{const i=s.target.closest("[data-grant]");if(i)try{await cn(i.dataset.grant),J.value="",D.classList.add("hidden"),D.innerHTML="",await w(),P(`มอบสิทธิ์ให้ ${i.dataset.name} แล้ว ✅`,"success")}catch(l){P("มอบสิทธิ์ไม่สำเร็จ: "+ce(l),"error")}}),w()}const aa=Object.freeze(Object.defineProperty({__proto__:null,_openRandomPickerModal:Cs,openClassPromptGenModal:Io,renderAnnouncementsView:Ro,renderAttendance:Rn,renderAttendanceGrid:Mt,renderClassDetail:Bt,renderCourseDocLangConfig:No,renderGrades:Bn,renderGradesGrid:It,renderLifeSkillScore:Pn,renderMyClasses:Le,renderPrayerScore:On,renderReadingScore:Hn,renderRequests:Nn,renderSchedule:Mo,renderScheduleBuilder:Ao,renderScheduleGrid:Fe,renderStudentQRPrint:Po},Symbol.toStringTag,{value:"Module"}));export{Cs as _,No as a,to as b,so as c,eo as d,Bt as e,Ro as f,Le as g,Mo as h,Ao as i,Io as j,We as k,ho as o,Fe as r,aa as t};
