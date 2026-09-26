const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-dashboard-B0a46sXh.js","assets/api-CWYJTdOa.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/sync-CtuAgrx7.js","assets/ui-MMtcTwtt.js","assets/teacher-views-smart-classroom-DZSSjXJI.js","assets/teacher-Cbd3fiuS.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/theme-qDnPEUQn.js","assets/azfutsal-modal-CITqdeT7.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CAl1Kmx3.js","assets/teacher-views-utils-bZoYj54P.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-d_408eQI.js","assets/sports-portals.js_v_10.22-7yFaQki7.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/tutorial-D2C4vUJE.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-JnlABjxU.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-CfDHgG4i.js","assets/teacher-views-attendance-DkKZdoEb.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-CXFdJBGK.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-quiz-monitor-BXd4d18R.js","assets/teacher-views-quiz-analytics-D6GQhJUz.js","assets/lesson-plan-ai-workspace-BgLV29Ng.js","assets/pp5-doc-WG5YzWe3.js","assets/confetti-loader-BAN5Lv-C.js","assets/chat-classroom-QsACduN9.js","assets/student-api-BkkkCebX.js","assets/teacher-views-flashcards-VQwdZYvD.js","assets/teacher-views-attendance-delegate-Cq3NBVow.js"])))=>i.map(i=>d[i]);
import{a as F,g as ce,_ as fe,h as ct}from"./ui-MMtcTwtt.js";import{getSystemConfig as $e,getLifeSkillColumns as ht,getScoreColumns as Oe,createScoreColumn as nt,updateColumnSortOrders as Cs,updateScoreColumn as qs,getMyClasses as pt,setColumnAutoAttendanceSync as js,deleteScoreColumn as At,getDepartments as Is,getReligionRoomsByGrade as Ms,getRoomsByGrade as Ts,getStudentsByReligionRoom as As,getStudentsByRoom as Bs,getMySchedule as Ve,createClass as Rs,linkClassToSchedule as ot,enrollStudents as Ns,getClassStudents as De,getTeacherClassesForLinking as wt,updateClass as at,getClassrooms as ss,getClassScheduleLinks as Et,getPeriods as ut,getMyDonationRequests as Ps,getFlashcardDecks as Hs,deleteClass as ns,getCourseDocLangSettings as Os,getTeacherRoomColors as Lt,assignClassroom as os,getClassSessionDOWs as Ds,getMySubjects as as,deleteScheduleByTeacher as Fs,getClassRosterStudents as Gs,updateClassStudentSpecialResult as zs,autoEnrollStudentsByRoom as Vs,updateClassStudentActive as Us,removeStudentFromClass as Qs,getStudentByCode as Ys,addStudentToClass as Ws,getAttendanceDelegatesForClass as Ks,getClassroomLeaderForRoom as Js,getClassRandomizerState as Xs,getClassScoreSummary as Zs,saveCourseDocLangSettings as en,saveCourseDocLangEditors as tn,getUniqueRooms as rs,getUniqueReligionRooms as ls,getStudents as sn,getQrReissueRequests as is,logQrReissue as nn,saveTeacherRoomColor as ds,upsertScheduleEntry as cs,updateSystemConfig as Ke,revokeQrReissueManager as on,findTeacherForQrManagerGrant as an,grantQrReissueManager as rn,unlinkClassFromSchedule as ln,deleteQrReissueLog as dn,updateQrReissueLog as cn,getQrReissueLogs as pn,markQrReissueRequestPrinted as Bt,setQrReissueRequestStatus as un,deleteQrReissueRequest as mn,getQrReissueManagers as xn,removeAttendanceDelegate as gn,addAttendanceDelegate as bn,saveClassRandomizerState as Rt,resetClassRandomizerPicks as Nt,clearClassGroups as fn,getAttendanceByDate as yn,saveClassGroups as vn,deleteScheduleEntry as hn}from"./api-CWYJTdOa.js";import{b as tt}from"./browser-JP79f-a9.js";import{getCopyTemplateForClass as _t,copySheetTemplate as wn}from"./sync-CtuAgrx7.js";import{s as ps}from"./supabase-BV-W2lsh.js";import{a as us}from"./pp5-doc-WG5YzWe3.js";import{o as _n}from"./print-overlay-BVfxEd6n.js";import{uploadQrIssuerSignature as Pt}from"./storage-CuUjCgvI.js";import{i as ms,n as rt}from"./skill-groups-BY1NTbf4.js";import{b as $n,e as kn}from"./score-display-CQ4dUIPx.js";import{a as Ct,r as Sn,b as En}from"./teacher-views-grades-CXFdJBGK.js";import{renderAttendanceGrid as qt,renderAttendance as Ln,renderLifeSkillScore as Cn,renderPrayerScore as qn,renderReadingScore as jn}from"./teacher-views-attendance-DkKZdoEb.js";import{l as In,f as Mn}from"./confetti-loader-BAN5Lv-C.js";import{setActiveNav as je,setTitle as Ie,setContent as _e,_htmlEsc as b,getMainContentRef as Tn,setMainContentRef as Ht,_nextPeriodMins as Ue,_transparentEdgeDarkLogo as An,INPUT_CLS as Ce,_generateSessions as Bn,_resolveGeminiKey as xs,SELECT_CLS as $t,_dateInputValue as Ot,_parseDateOnly as Rn}from"./teacher-views-utils-bZoYj54P.js";const gt="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",Je="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function Nn(e){document.getElementById("main-content").innerHTML=e}function Pn(e){document.getElementById("page-title").textContent=e}function Hn(e){document.querySelectorAll("[data-nav]").forEach(o=>{const r=o.dataset.nav===e;o.classList.toggle("bg-emerald-800",r),o.classList.toggle("text-white",r),o.classList.toggle("text-emerald-200",!r)})}const bt=["ระหว่างเรียน","กลางภาค","ปลายภาค","คะแนนพิเศษ"],On={ระหว่างเรียน:"bg-blue-50 text-blue-700",กลางภาค:"bg-amber-50 text-amber-700",ปลายภาค:"bg-red-50 text-red-700",คะแนนพิเศษ:"bg-purple-50 text-purple-700"},Dn=["คะแนนมาเรียน","คะแนนละหมาด"];function ft(e,o){var p;(p=document.getElementById("sc-confirm-popup"))==null||p.remove();const r=document.createElement("div");r.id="sc-confirm-popup",r.className="fixed inset-0 z-[200] flex items-center justify-center p-6",r.style.background="rgba(0,0,0,0.45)",r.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">${e}</p>
      <div class="flex gap-3">
        <button id="sc-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
        <button id="sc-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold">ลบเลย</button>
      </div>
    </div>`,document.body.appendChild(r),r.querySelector("#sc-conf-no").addEventListener("click",()=>r.remove()),r.querySelector("#sc-conf-yes").addEventListener("click",()=>{r.remove(),o()})}async function Fn(e,o,r){var p;if(!(!(e!=null&&e.id)||!(r!=null&&r.course_id)))try{const C=(await pt(e.id).catch(()=>[])).filter(x=>x.id!==o&&x.course_id===r.course_id);if(!C.length)return;const R=(await Promise.all(C.map(async x=>{const H=await Oe(x.id).catch(()=>[]);return H.length?{...x,cols:H}:null}))).filter(Boolean);if(!R.length)return;(p=document.getElementById("sc-same-subj-popup"))==null||p.remove();const A=document.createElement("div");A.id="sc-same-subj-popup",A.className="fixed inset-0 z-[190] flex items-center justify-center p-6",A.style.background="rgba(0,0,0,0.45)",A.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
          <p class="text-indigo-100 text-xs mt-1">ต้องการคัดลอกคอลัมน์คะแนนจากห้องที่มีอยู่แล้วไหม?</p>
        </div>
        <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
          ${R.map(x=>`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${x.class_name}</p>
              <p class="text-xs text-gray-400">${x.cols.length} คอลัมน์</p>
            </div>
            <button class="copy-cols-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold" data-src="${x.id}">คัดลอก</button>
          </div>`).join("")}
        </div>
        <div class="px-5 pb-5">
          <button id="sc-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(A),A.querySelector("#sc-ssp-close").addEventListener("click",()=>A.remove()),A.querySelectorAll(".copy-cols-btn").forEach(x=>{x.addEventListener("click",async()=>{var X;const H=parseInt(x.dataset.src),O=R.find(y=>y.id===H);x.disabled=!0,x.textContent="⏳";try{const y=await Oe(o).catch(()=>[]),M=new Set(y.map(B=>B.assignment_name));let G=0;for(const B of O.cols)M.has(B.assignment_name)||(await nt({class_id:o,assignment_name:B.assignment_name,assignment_type:B.assignment_type,sheet_column:B.sheet_column??"",max_score:B.max_score,column_type:B.column_type??"regular",formula:B.formula??null,formula_refs:B.formula_refs??[]}),G++);F(`คัดลอก ${G} คอลัมน์จาก ${O.class_name} ✅`,"success"),A.remove(),(X=window._scReload)==null||X.call(window)}catch(y){F("คัดลอกไม่สำเร็จ: "+ce(y),"error"),x.disabled=!1,x.textContent="คัดลอก"}})})}catch{}}async function Gn(e,o,r,p=null){var X,y,M;Hn("my-classes"),Pn(`คอลัมน์คะแนน — ${r}`);const T=ms((p==null?void 0:p.skill_group)??((X=p==null?void 0:p.master_subjects)==null?void 0:X.skill_group)),C=["AGM","AGMVOC"].includes((y=p==null?void 0:p.master_subjects)==null?void 0:y.subject_group),R=!!(p!=null&&p.google_sheet_id);let A=new Set,x=new Set,H=!1;const O=async()=>{var Z,V,se,re,l,h,L;const G=await Oe(o),B=await $e().catch(()=>({})),ae=parseInt(B.academicYear??2568),oe=parseInt(B.semester??1),J=T?(await ht(ae,oe,"สามัญ").catch(()=>[])).slice(0,3).map(a=>a.name):C?Dn:[];A=new Set;for(const a of J){const c=G.filter(u=>u.assignment_name===a);c.length>0&&A.add(c[0].id)}window._scoreColCache=Object.fromEntries(G.map(a=>[a.id,a])),x=new Set;const ie=G.filter(a=>(a.column_type??"regular")==="regular"),f=G.filter(a=>a.column_type==="bonus"),I=G.filter(a=>a.column_type==="derived"),v=G.filter(a=>a.column_type==="override"),W=$n(f),D=ie.reduce((a,c)=>a+(Number(c.max_score)||0),0),s=I.reduce((a,c)=>a+(Number(c.max_score)||0),0),n=D+s,t=(a,c="",u=[])=>{var ne;const m=A.has(a.id),E=a.column_type??"regular",ee=u.findIndex(g=>g.id===a.id),Q=!m&&ee>0&&!A.has((ne=u[ee-1])==null?void 0:ne.id),z=!m&&ee>=0&&ee<u.length-1;return`
      <tr class="${m?"bg-emerald-50/35":"hover:bg-gray-50"}">
        <td class="px-3 py-2.5 text-center">
          ${m?'<span class="text-emerald-500 text-xs">🔒</span>':`<input type="checkbox" class="sc-row-cb w-4 h-4 rounded accent-red-500" data-id="${a.id}" />`}
        </td>
        <td class="px-3 py-2.5 text-center whitespace-nowrap">
          <button onclick="window._moveScoreCol(${a.id},'up')" ${Q?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${Q?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▲</button>
          <button onclick="window._moveScoreCol(${a.id},'down')" ${z?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${z?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▼</button>
        </td>
        <td class="px-4 py-2.5 font-medium text-gray-800">
          ${a.assignment_name}
          ${E==="derived"&&a.formula?`<span class="ml-1 text-[10px] text-indigo-400 font-mono">= ${a.formula}</span>`:""}
          ${c}
        </td>
        ${R?`<td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${a.sheet_column??""}</td>`:""}
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
            ${R?'<th class="px-4 py-2 text-center">Sheet Col</th>':""}
            <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
            <th class="px-4 py-2 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${a.map(u=>t(u,(c==null?void 0:c(u))??"",a)).join("")}
        </tbody>
      </table>`:'<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์</p>',_=bt.map(a=>({type:a,items:ie.filter(c=>c.assignment_type===a)}));document.getElementById("sc-content").innerHTML=`
      <!-- Summary -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400">รวมคะแนน (นับใน 100)</p>
            <p class="text-2xl font-bold ${n>100?"text-red-600":"text-indigo-700"}">${n} คะแนน
              ${n>100?'<span class="text-sm font-normal text-red-500 ml-1">⚠️ เกิน 100</span>':""}
            </p>
          </div>
          <div class="text-xs text-gray-400 text-right">
            <p>คอลัมน์หลัก: ${ie.length} | อ้างอิง: ${I.length} | พิเศษ: ${f.length} | ปรับคะแนน: ${v.length}</p>
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
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${On[a.type]??""}">${a.type}</span>
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
        ${i(I)}
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
            ${f.length?`<span class="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${f.length}</span>`:""}
          </div>
          <span class="text-gray-400 text-sm">${H?"▲ ซ่อน":"▼ แสดง"}</span>
        </button>
        <div id="sc-bonus-section" class="${H?"":"hidden"} mt-2 bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-amber-50 bg-amber-50/30">
            <div class="text-xs text-gray-500">
              ${W.length?W.map(a=>`<span class="font-mono font-bold text-amber-700">${a.var}</span> = ${a.assignment_name}`).join(" &nbsp;|&nbsp; "):"ยังไม่มีคอลัมน์พิเศษ"}
            </div>
            <button onclick="window._addBonusCol()" class="text-xs text-amber-600 hover:text-amber-800 font-medium flex-shrink-0">＋ เพิ่ม</button>
          </div>
          ${i(f)}
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
              ${bt.map(a=>`<option value="${a}">${a}</option>`).join("")}
            </select>
          </div>
          ${R?`
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
      </div>`;const q=document.getElementById("sc-bulk-bar"),P=document.getElementById("sc-bulk-count"),k=()=>{const a=x.size;q.classList.toggle("hidden",a===0),P.textContent=`เลือก ${a} รายการ`};document.querySelectorAll(".sc-row-cb").forEach(a=>{a.addEventListener("change",()=>{const c=parseInt(a.dataset.id);a.checked?x.add(c):x.delete(c),k()})}),(Z=document.getElementById("sc-bulk-delete"))==null||Z.addEventListener("click",()=>{const a=[...x].map(c=>{var u,m;return((m=(u=window._scoreColCache)==null?void 0:u[c])==null?void 0:m.assignment_name)??`ID ${c}`}).join(", ");ft(`ลบ ${x.size} คอลัมน์:<br/><span class="font-semibold">${a}</span>`,async()=>{try{await Promise.all([...x].map(c=>At(c))),F(`ลบ ${x.size} คอลัมน์แล้ว ✅`,"success"),x=new Set,await O()}catch(c){F("ลบไม่สำเร็จ: "+ce(c),"error")}})}),(V=document.getElementById("sc-toggle-bonus"))==null||V.addEventListener("click",()=>{H=!H,document.getElementById("sc-bonus-section").classList.toggle("hidden",!H),document.getElementById("sc-toggle-bonus").querySelector("span:last-child").textContent=H?"▲ ซ่อน":"▼ แสดง"}),(se=document.getElementById("sc-test-formula"))==null||se.addEventListener("click",()=>{const a=document.getElementById("sc-formula").value.trim(),c=document.getElementById("sc-formula-result");if(!a){c.classList.add("hidden");return}const u=Object.fromEntries(W.map(E=>[E.var,5])),m=kn(a,u);c.classList.remove("hidden"),m===null?(c.className="text-xs mt-1 text-red-500",c.textContent="⚠️ สูตรไม่ถูกต้อง"):(c.className="text-xs mt-1 text-emerald-600",c.textContent=`✅ ทดสอบด้วย ${W.map(E=>`${E.var}=5`).join(", ")} → ผลลัพธ์ = ${m}`)});const S=(a,c,u=bt[0])=>{document.getElementById("sc-edit-id").value="",document.getElementById("sc-edit-ctype").value=a,document.getElementById("sc-name").value="",document.getElementById("sc-col").value="",document.getElementById("sc-max").value="",document.getElementById("sc-type")&&(document.getElementById("sc-type").value=u),document.getElementById("sc-form-title").textContent=c;const m=a==="bonus",E=a==="derived",ee=a==="override";if(document.getElementById("sc-type-wrap").classList.toggle("hidden",m||E||ee),document.getElementById("sc-formula-section").classList.toggle("hidden",!E),document.getElementById("sc-link-wrap").classList.toggle("hidden",!ee),document.getElementById("sc-max-label").textContent=m?"คะแนนเต็ม (ไม่บังคับ)":ee?"คะแนนเต็ม (auto ตามคอลัมน์ที่เชื่อม)":"คะแนนเต็ม",document.getElementById("sc-max").readOnly=ee,E&&(document.getElementById("sc-formula").value="",document.getElementById("sc-formula-result").classList.add("hidden"),document.getElementById("sc-vars-hint").textContent=W.length?W.map(Q=>`${Q.var} = "${Q.assignment_name}"`).join("  |  "):"ยังไม่มีคอลัมน์พิเศษ — เพิ่มก่อน"),ee){const Q=document.getElementById("sc-link-col");Q.innerHTML='<option value="">— เลือกคอลัมน์ —</option>'+ie.map(z=>`<option value="${z.id}">${z.assignment_name} (${z.assignment_type??"—"} · เต็ม ${z.max_score??"—"})</option>`).join(""),Q.value="",document.getElementById("sc-override-mode").value="max",$()}document.getElementById("sc-form-wrap").classList.remove("hidden"),document.getElementById("sc-name").focus()};window._addScoreCol=a=>S("regular",`เพิ่มคอลัมน์หลัก — ${a}`,a),window._addBonusCol=()=>S("bonus","เพิ่มคอลัมน์พิเศษ (Bonus)"),window._addDerivedCol=()=>S("derived","เพิ่มคอลัมน์อ้างอิงสูตร"),window._addOverrideCol=()=>S("override","เพิ่มคอลัมน์ปรับคะแนน"),(re=document.getElementById("sc-link-col"))==null||re.addEventListener("change",a=>{const c=Number(a.target.value),u=ie.find(m=>m.id===c);document.getElementById("sc-max").value=(u==null?void 0:u.max_score)??""});const $=()=>{var u;const a=(u=document.getElementById("sc-override-mode"))==null?void 0:u.value,c=document.getElementById("sc-override-mode-hint");c&&(c.textContent=a==="add"?"คะแนนคอลัมน์หลักใหม่ = คะแนนตั้งต้นของนักเรียนคนนั้น + คะแนนในคอลัมน์นี้เสมอ (ไม่บวกซ้ำสะสมตอนแก้ค่าซ้ำ)":"ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที")};(l=document.getElementById("sc-override-mode"))==null||l.addEventListener("change",$),window._editScoreCol=a=>{var m;const c=(m=window._scoreColCache)==null?void 0:m[a];if(!c)return;if(A.has(a)){F("คอลัมน์ระบบกลาง แก้ไขไม่ได้","warning");return}const u=c.column_type??"regular";S(u,"แก้ไขคอลัมน์",c.assignment_type),document.getElementById("sc-edit-id").value=a,document.getElementById("sc-name").value=c.assignment_name,document.getElementById("sc-col").value=c.sheet_column??"",document.getElementById("sc-max").value=c.max_score??"",u==="derived"&&c.formula&&(document.getElementById("sc-formula").value=c.formula),u==="override"&&c.link_column_id&&(document.getElementById("sc-link-col").value=String(c.link_column_id),document.getElementById("sc-override-mode").value=c.override_mode==="add"?"add":"max",$())},window._moveScoreCol=async(a,c)=>{const u=await Oe(o),m=u.find(j=>j.id===a);if(!m)return;const E=u.filter(j=>j.assignment_type===m.assignment_type&&(j.column_type??"regular")===(m.column_type??"regular")),ee=E.findIndex(j=>j.id===a),Q=c==="up"?ee-1:ee+1;if(Q<0||Q>=E.length||A.has(E[Q].id))return;const z=E[ee],ne=E[Q],g=z.sort_order??(ee+1)*10,d=ne.sort_order??(Q+1)*10;await Cs([{id:z.id,sort_order:d},{id:ne.id,sort_order:g}]),await O()},window._deleteScoreCol=a=>{var u,m;if(A.has(a)){F("คอลัมน์ระบบกลาง ลบไม่ได้","warning");return}const c=((m=(u=window._scoreColCache)==null?void 0:u[a])==null?void 0:m.assignment_name)??"คอลัมน์นี้";ft(`ต้องการลบ <span class="font-semibold">"${c}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await At(a),F("ลบแล้ว ✅","success"),await O()}catch{F("ลบไม่สำเร็จ","error")}})},window._toggleAutoSync=async a=>{var E;const c=(E=window._scoreColCache)==null?void 0:E[a];if(!c)return;const u=!c.auto_attendance_sync,m=async()=>{try{await js(a,u),F(u?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน ✅":"ปิดใช้งานแล้ว","success"),await O()}catch{F("บันทึกไม่สำเร็จ","error")}};u?ft(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${c.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้านี้ — ถ้าเคยแก้คะแนนคนไหนด้วยมือไว้ก่อน จะไม่ถูกทับ</span>`,m):await m()},(h=document.getElementById("sc-form-cancel"))==null||h.addEventListener("click",()=>{document.getElementById("sc-form-wrap").classList.add("hidden")}),(L=document.getElementById("sc-form"))==null||L.addEventListener("submit",async a=>{var K,w,te,N;a.preventDefault();const c=document.getElementById("sc-save"),u=document.getElementById("sc-edit-id").value,m=document.getElementById("sc-edit-ctype").value,E=document.getElementById("sc-name").value.trim(),ee=(((K=document.getElementById("sc-col"))==null?void 0:K.value)??"").trim().toUpperCase(),Q=((w=document.getElementById("sc-type"))==null?void 0:w.value)??"ระหว่างเรียน",z=document.getElementById("sc-max").value,ne=z&&parseFloat(z)||null,g=m==="derived"&&document.getElementById("sc-formula").value.trim()||null,d=m==="override"&&Number((te=document.getElementById("sc-link-col"))==null?void 0:te.value)||null,j=m==="override"?((N=document.getElementById("sc-override-mode"))==null?void 0:N.value)==="add"?"add":"max":null;if(!E){F("กรุณากรอกชื่อรายการ","warning");return}if(m==="derived"&&!ne){F("คอลัมน์อ้างอิงสูตรต้องระบุคะแนนเต็ม","warning");return}if(m==="derived"&&!g){F("กรุณากรอกสูตรคำนวณ","warning");return}if(m==="override"&&!d){F("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const U=m==="derived"?W.map(Y=>({var:Y.var,col_id:Y.id})):[];c.disabled=!0,c.textContent="กำลังบันทึก...";try{const Y={assignment_name:E,assignment_type:m==="bonus"||m==="derived"||m==="override"?"คะแนนพิเศษ":Q,sheet_column:ee,max_score:ne,column_type:m,formula:g,formula_refs:U,link_column_id:d,override_mode:j};u?await qs(Number(u),Y):await nt({...Y,class_id:o}),F("บันทึกสำเร็จ","success"),document.getElementById("sc-form-wrap").classList.add("hidden"),(m==="bonus"||m==="derived")&&(H=!0),await O()}catch(Y){F("บันทึกไม่สำเร็จ: "+ce(Y),"error")}finally{c.disabled=!1,c.textContent="บันทึก"}})};window._scReload=O,Nn(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-400">${r}</p>
      </div>
      ${T?'<button id="btn-fill-lifeskill" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex-shrink-0">🌱 เติมทักษะชีวิต</button>':""}
    </div>
    <div id="sc-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`),await O(),(M=document.getElementById("btn-fill-lifeskill"))==null||M.addEventListener("click",async()=>{const G=document.getElementById("btn-fill-lifeskill");G.disabled=!0,G.textContent="⏳";try{const B=await $e().catch(()=>({})),ae=parseInt(B.academicYear??2568),oe=parseInt(B.semester??1),J=await ht(ae,oe,"สามัญ").catch(()=>[]);if(!J.length){F("ยังไม่มีหัวข้อทักษะชีวิต — แอดมินเพิ่มก่อน","warning");return}const ie=await Oe(o),f=new Set(ie.map(v=>v.assignment_name));let I=0;for(const v of J)f.has(v.name)||(await nt({class_id:o,assignment_name:v.name,assignment_type:"กลางภาค",sheet_column:v.sheet_col??"",max_score:v.max_score??20}),I++);F(I>0?`เพิ่ม ${I} คอลัมน์ ✅`:"มีคอลัมน์ทักษะชีวิตอยู่แล้ว",I>0?"success":"info"),await O()}catch{F("เติมไม่สำเร็จ","error")}finally{const B=document.getElementById("btn-fill-lifeskill");B&&(B.disabled=!1,B.textContent="🌱 เติมทักษะชีวิต")}}),setTimeout(()=>Fn(e,o,p),500)}const Ge="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",He="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function gs(e){document.getElementById("main-content").innerHTML=e}function bs(e){document.getElementById("page-title").textContent=e}function fs(e){document.querySelectorAll("[data-nav]").forEach(o=>{const r=o.dataset.nav===e;o.classList.toggle("bg-emerald-800",r),o.classList.toggle("text-white",r),o.classList.toggle("text-emerald-200",!r)})}function kt(e){if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const o=String(e).match(/^(\d{4})-(\d{2})-(\d{2})/);if(o)return new Date(Number(o[1]),Number(o[2])-1,Number(o[3]));const r=new Date(e);return Number.isNaN(r.getTime())?null:new Date(r.getFullYear(),r.getMonth(),r.getDate())}function lt(e){const o=kt(e);return o?[o.getFullYear(),String(o.getMonth()+1).padStart(2,"0"),String(o.getDate()).padStart(2,"0")].join("-"):""}function ys(e,o){const r=kt(o)??kt(new Date),p=r.getDay(),T=[];for(const A of e){const x=A.span_periods??1;for(let H=0;H<x;H++)T.push({dow:A.day_of_week,pno:(A.period_no??0)+H})}if(T.sort((A,x)=>{const H=(A.dow-p+7)%7,O=(x.dow-p+7)%7;return H!==O?H-O:A.pno-x.pno}),!T.length)return[];const C=[];let R=0;for(;C.length<6;){for(const A of T){const x=new Date(r);if(x.setDate(x.getDate()+(A.dow-p+7)%7+R*7),C.push(x),C.length>=6)break}R++}return C.slice(0,6)}const vs={ACDM:["วิชาการ","ภาษา","ชีวิต"],AGM:["ศาสนามัธยม"],ACDMVOC:["วิชาการ","ภาษา","สามัญปวช"],AGMVOC:["ศาสนาปวช"]};async function zn(e,o,r={}){var f;const p=r.cloneFrom??null;fs(p?"my-classes":"my-courses"),bs(p?"ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา");const T=await Is().catch(()=>[]),C=await $e().catch(()=>({})),R=C.semester_start??C.term_start_date??lt(new Date),A=vs[o.subject_group]??[],x=A.length===1,H=T.find(I=>I.dept_code===o.dept),O=o.grade_level,X=/^(PR|อก|อป)/i.test(O??""),y=parseInt(C.academicYear),M=parseInt(C.semester),G=p?new Set((window._classesFlat??[]).filter(I=>I.course_id===o.id&&+I.academic_year===y&&+I.semester===M).map(I=>I.class_name)):new Set,B=O?X?await Ms(O).catch(()=>[]):await Ts(O).catch(()=>[]):[],ae=p?B.filter(I=>!G.has(I)):B,oe=p?rt(r.srcSkill):"";gs(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${p?"📋 ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา"}</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${o.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${o.subject_code??"—"} · ${o.credit??"—"} หน่วยกิต · ${o.grade_level??"—"}</p>
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
          ${x?`<input type="text" value="${A[0]}" class="${He} bg-gray-50" readonly />
               <input type="hidden" id="cls-skill" value="${A[0]}" />`:`<select id="cls-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${A.map(I=>`<option value="${I}" ${I===oe?"selected":""}>${I}</option>`).join("")}
               </select>`}
        </div>
        <!-- ชั้นเรียน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ชั้นเรียน <span class="text-red-400">*</span></label>
          ${ae.length?`<select id="cls-room" class="${Ge}">
                <option value="">— เลือกห้องเรียน —</option>
                ${ae.map(I=>`<option value="${I}">${I}</option>`).join("")}
               </select>`:`<input id="cls-room" type="text" placeholder="พิมพ์ชื่อห้อง เช่น PR 1/7 Ikhlas" class="${He}" autocomplete="off" />
               <p class="text-xs text-amber-500 mt-1">⚠️ ไม่พบห้อง ${O} — พิมพ์ชื่อห้องตรงๆ หรืออัปโหลดนักเรียนพร้อม column <b>religion_room</b></p>`}
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
            ${[1,2,3,4,5,6].map(I=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${I}</p>
              <input id="cls-day${I}" type="date" value="${R}" class="${He} text-xs" />
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
            <div><span class="text-gray-400">กลุ่มสาระ:</span> ${(H==null?void 0:H.dept_name)??o.dept??"—"}</div>
            <div class="col-span-2"><span class="text-gray-400">หัวหน้าหมวด:</span> ${(H==null?void 0:H.head_name)??"—"}</div>
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
  </div>`);let J=[];document.getElementById("cls-room").addEventListener("change",async I=>{const v=I.target.value;if(!v){document.getElementById("cls-students-section").classList.add("hidden"),document.getElementById("cls-head-section").classList.add("hidden");return}try{J=X?await As(v):await Bs(v),document.getElementById("cls-student-count").textContent=`(${J.length} คน)`,document.getElementById("cls-students-list").innerHTML=J.length?`<table class="w-full text-xs">
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
          </table>`:'<p class="text-center py-4 text-gray-400 text-sm">ไม่พบนักเรียนในห้องนี้</p>';const W=document.getElementById("cls-head");W.innerHTML='<option value="">— เลือกหัวหน้าห้อง —</option>'+J.map(s=>`<option value="${s.id}" data-code="${s.student_code}" data-room="${s.main_room??""}" data-img="${s.image_url??""}">${s.full_name} (${s.student_code})</option>`).join(""),document.getElementById("cls-students-section").classList.remove("hidden"),document.getElementById("cls-head-section").classList.remove("hidden");const D=()=>{const s=W.options[W.selectedIndex],n=document.getElementById("cls-head-card");if(!s||!s.value){n==null||n.classList.add("hidden");return}const t=s.text.split(" (")[0],i=s.dataset.code??"",_=s.dataset.room??"",q=s.dataset.img??"";document.getElementById("cls-head-name").textContent=t,document.getElementById("cls-head-code").textContent=`รหัส: ${i}`,document.getElementById("cls-head-room").textContent=_?`ห้อง: ${_}`:"";const P=document.getElementById("cls-head-avatar");P.innerHTML=q?`<img src="${q}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${t.charAt(0)}</div>`,n==null||n.classList.remove("hidden")};W.addEventListener("change",D)}catch{F("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}});let ie=[];(f=document.getElementById("btn-auto-dates"))==null||f.addEventListener("click",async()=>{var W;const I=document.getElementById("btn-auto-dates"),v=document.getElementById("auto-dates-info");I.textContent="⏳ กำลังดึงตาราง...",I.disabled=!0;try{const D=parseInt(C.academicYear??2568),s=parseInt(C.semester??1),n=e?await Ve(e.id,D,s).catch(()=>[]):[];if(!n.length){v.innerHTML='⚠️ ยังไม่มีตารางสอน — <a href="#" id="goto-schedule" class="underline text-indigo-600 font-medium">สร้างตารางสอน</a> หรือกรอกวันเองด้านล่าง',v.classList.remove("hidden"),(W=document.getElementById("goto-schedule"))==null||W.addEventListener("click",P=>{var k;P.preventDefault(),(k=window._navTo)==null||k.call(window,"schedule")}),I.disabled=!1,I.textContent="🗓️ คำนวณจากตารางสอน";return}const t={};n.forEach(P=>{var S,$;const k=`${P.subject_name??((S=P.master_subjects)==null?void 0:S.subject_name)??"?"}|${P.class_name??""}`;t[k]||(t[k]={label:`${P.subject_name??(($=P.master_subjects)==null?void 0:$.subject_name)??"?"}${P.class_name?` — ${P.class_name}`:""}`,entries:[]}),t[k].entries.push(P)});const i=["อา","จ","อ","พ","พฤ","ศ"],_=P=>{const k=[];P.forEach($=>{for(let Z=0;Z<($.span_periods??1);Z++)k.push({dow:$.day_of_week,pno:($.period_no??0)+Z})}),k.sort(($,Z)=>$.dow!==Z.dow?$.dow-Z.dow:$.pno-Z.pno);const S={};return k.forEach($=>{S[$.dow]||(S[$.dow]=[]),S[$.dow].push($.pno)}),Object.entries(S).map(([$,Z])=>`${i[$]} คาบ ${Z.join(",")}`).join(" · ")},q=document.createElement("div");q.id="dates-popup",q.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",q.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(t).map(([P,k])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="dates-subj" value="${P}" class="mt-0.5 text-indigo-600 flex-shrink-0" />
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
        </div>`,document.body.appendChild(q),q.querySelector("#dates-close").addEventListener("click",()=>q.remove()),q.querySelector("#dates-cancel").addEventListener("click",()=>q.remove()),q.querySelector("#dates-calc").addEventListener("click",()=>{var $;const P=($=q.querySelector('input[name="dates-subj"]:checked'))==null?void 0:$.value;if(!P){alert("กรุณาเลือกวิชาก่อน");return}q.remove();const k=t[P].entries;ie=k,ys(k,R).forEach((Z,V)=>{const se=document.getElementById(`cls-day${V+1}`);se&&(se.value=lt(Z))}),v.textContent=`✅ คำนวณจาก "${t[P].label}" — ${k.length} ช่องตาราง — ตรวจสอบแล้วแก้ไขได้`,v.classList.remove("hidden")})}catch(D){v.textContent="โหลดตารางไม่สำเร็จ: "+ce(D),v.classList.remove("hidden")}finally{I.textContent="🗓️ คำนวณจากตารางสอน",I.disabled=!1}}),document.getElementById("class-form").addEventListener("submit",async I=>{I.preventDefault();const v=document.getElementById("cls-submit"),W=document.getElementById("cls-sheet-id").value.trim(),D=document.getElementById("cls-skill").value,s=document.getElementById("cls-room").value,n=document.getElementById("cls-head").value;if(!s){F("กรุณาเลือกชั้นเรียน","warning");return}v.disabled=!0,v.textContent="กำลังบันทึก...";try{const t={course_id:o.id,class_name:s,skill_group:rt(D),google_sheet_id:W||null,head_student_id:n?Number(n):null,day1_date:document.getElementById("cls-day1").value||null,day2_date:document.getElementById("cls-day2").value||null,day3_date:document.getElementById("cls-day3").value||null,day4_date:document.getElementById("cls-day4").value||null,day5_date:document.getElementById("cls-day5").value||null,day6_date:document.getElementById("cls-day6").value||null},i=await Rs(t,(e==null?void 0:e.id)??null);i!=null&&i.id&&ie.length&&await Promise.all(ie.map(Z=>ot(i.id,Z.id).catch(()=>{}))),J.length&&(i!=null&&i.id)&&await Ns(i.id,J.map(Z=>Z.id));const _=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),q=ms(r.srcSkill),P=["AGM","AGMVOC"].includes(o.subject_group??"");let k=new Set;if(q){const Z=await $e().catch(()=>({})),V=await ht(parseInt(Z.academicYear??2568),parseInt(Z.semester??1),"สามัญ").catch(()=>[]);k=new Set(V.slice(0,3).map(se=>se.name))}let S=0;if(p&&(i!=null&&i.id)){const Z=await Oe(p).catch(()=>[]),V=new Set;for(const se of Z)P&&_.has(se.assignment_name)||q&&k.has(se.assignment_name)||V.has(se.assignment_name)||(V.add(se.assignment_name),await nt({class_id:i.id,assignment_name:se.assignment_name,assignment_type:se.assignment_type,sheet_column:se.sheet_column,max_score:se.max_score}),S++)}const $=p?`ทำสำเนา "${s}" สำเร็จ — นักเรียน ${J.length} คน · ช่องคะแนน ${S} ช่อง`:`เปิดรายวิชา ${s} สำเร็จ! นักเรียน ${J.length} คน`;F($,"success"),window._goBack()}catch(t){F("บันทึกไม่สำเร็จ: "+ce(t),"error")}finally{v.disabled=!1,v.textContent="บันทึกและเปิดรายวิชา"}})}async function Vn(e,o){var H,O;fs("my-classes"),bs("แก้ไขห้องเรียน");const r=o.master_subjects,p=vs[r==null?void 0:r.subject_group]??[],T=p.length===1,C=rt(o.skill_group),R=await De(o.id).catch(()=>[]);gs(`<div class="max-w-2xl mx-auto animate-fade">
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
      <p class="text-sm text-emerald-700 mt-0.5">ห้อง: <strong>${o.class_name}</strong></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="cls-edit-form" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Google Sheet ID</label>
          <input id="ce-sheet" type="text" value="${o.google_sheet_id??""}"
            placeholder="วาง ID จาก URL ของ Google Sheet" class="${He}" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ</label>
          ${T?`<input type="text" value="${p[0]}" class="${He} bg-gray-50" readonly />
               <input type="hidden" id="ce-skill" value="${p[0]}" />`:`<select id="ce-skill" class="${Ge}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${p.map(X=>`<option value="${X}" ${X===C?"selected":""}>${X}</option>`).join("")}
               </select>`}
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
          <select id="ce-head" class="${Ge}">
            <option value="">— ยังไม่ระบุหัวหน้าห้อง —</option>
            ${R.map(X=>`
              <option value="${X.id}" ${Number(o.head_student_id)===Number(X.id)?"selected":""}>
                ${X.full_name} (${X.student_code})
              </option>`).join("")}
          </select>
          ${R.length?'<p class="text-xs text-gray-400 mt-1">เลือกได้จากนักเรียนที่อยู่ในห้องนี้</p>':'<p class="text-xs text-amber-500 mt-1">ยังไม่พบนักเรียนในห้องนี้ จึงยังเลือกหัวหน้าห้องไม่ได้</p>'}
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
            ${[1,2,3,4,5,6].map(X=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${X}</p>
              <input id="ce-day${X}" type="date"
                value="${o[`day${X}_date`]??""}" class="${He} text-xs" />
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
  </div>`),e!=null&&e.id&&wt(e.id,o.id).then(X=>{const y=document.getElementById("ce-source-class");if(y&&(X.forEach(M=>{const G=M.master_subjects,B=`${(G==null?void 0:G.subject_name)??"?"} (${(G==null?void 0:G.subject_code)??""}) — ${M.class_name} · ${(G==null?void 0:G.credit)??"?"} หน่วยกิต`,ae=new Option(B,M.id,!1,Number(M.id)===Number(o.source_class_id));y.appendChild(ae)}),o.source_class_id)){const M=X.find(G=>Number(G.id)===Number(o.source_class_id));M&&A(M)}}).catch(()=>{});const A=X=>{var B,ae;const y=document.getElementById("ce-source-info");if(!y||!X)return;const M=((B=X.master_subjects)==null?void 0:B.credit)??1,G=((ae=o.master_subjects)==null?void 0:ae.credit)??1;M!==G?(y.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${M} / วิชานี้ ${G}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,y.classList.remove("hidden")):y.classList.add("hidden")};(H=document.getElementById("ce-source-class"))==null||H.addEventListener("change",X=>{var G;const M=X.target.selectedOptions[0];if(!(M!=null&&M.value)){(G=document.getElementById("ce-source-info"))==null||G.classList.add("hidden");return}wt(e==null?void 0:e.id,o.id).then(B=>{const ae=B.find(oe=>Number(oe.id)===Number(M.value));ae&&A(ae)}).catch(()=>{})});let x=[];(O=document.getElementById("ce-btn-auto-dates"))==null||O.addEventListener("click",async()=>{const X=document.getElementById("ce-btn-auto-dates"),y=document.getElementById("ce-auto-dates-info");X.textContent="⏳ กำลังดึงตาราง...",X.disabled=!0;try{const M=await $e().catch(()=>({})),G=M.semester_start??M.term_start_date??lt(new Date),B=parseInt(M.academicYear??2568),ae=parseInt(M.semester??1),oe=e?await Ve(e.id,B,ae).catch(()=>[]):[];if(!oe.length){y.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",y.classList.remove("hidden");return}const J={};oe.forEach(v=>{const W=`${v.subject_name??"?"}|${v.class_name??""}`;J[W]||(J[W]={label:`${v.subject_name??"?"}${v.class_name?` — ${v.class_name}`:""}`,entries:[]}),J[W].entries.push(v)});const ie=["อา","จ","อ","พ","พฤ","ศ"],f=v=>{const W=[];v.forEach(s=>{for(let n=0;n<(s.span_periods??1);n++)W.push({dow:s.day_of_week,pno:(s.period_no??0)+n})}),W.sort((s,n)=>s.dow!==n.dow?s.dow-n.dow:s.pno-n.pno);const D={};return W.forEach(s=>{D[s.dow]||(D[s.dow]=[]),D[s.dow].push(s.pno)}),Object.entries(D).map(([s,n])=>`${ie[s]} คาบ ${n.join(",")}`).join(" · ")},I=document.createElement("div");I.id="ce-dates-popup",I.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",I.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="ce-dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(J).map(([v,W])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="ce-dates-subj" value="${v}" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${W.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${f(W.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="ce-dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="ce-dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(I),I.querySelector("#ce-dates-close").addEventListener("click",()=>I.remove()),I.querySelector("#ce-dates-cancel").addEventListener("click",()=>I.remove()),I.querySelector("#ce-dates-calc").addEventListener("click",()=>{var D;const v=(D=I.querySelector('input[name="ce-dates-subj"]:checked'))==null?void 0:D.value;if(!v){F("กรุณาเลือกวิชาก่อน","warning");return}I.remove(),x=J[v].entries,ys(J[v].entries,G).forEach((s,n)=>{const t=document.getElementById(`ce-day${n+1}`);t&&(t.value=lt(s))}),y.textContent=`✅ คำนวณจาก "${J[v].label}" — ตรวจสอบและแก้ไขได้`,y.classList.remove("hidden")})}catch(M){y.textContent="โหลดตารางไม่สำเร็จ: "+ce(M),y.classList.remove("hidden")}finally{X.textContent="🗓️ คำนวณจากตารางสอน",X.disabled=!1}}),document.getElementById("cls-edit-form").addEventListener("submit",async X=>{var M;X.preventDefault();const y=document.getElementById("ce-submit");y.disabled=!0,y.textContent="กำลังบันทึก...";try{const G=(M=document.getElementById("ce-source-class"))==null?void 0:M.value;await at(o.id,{google_sheet_id:document.getElementById("ce-sheet").value.trim()||null,skill_group:rt(document.getElementById("ce-skill").value),head_student_id:document.getElementById("ce-head").value?Number(document.getElementById("ce-head").value):null,day1_date:document.getElementById("ce-day1").value||null,day2_date:document.getElementById("ce-day2").value||null,day3_date:document.getElementById("ce-day3").value||null,day4_date:document.getElementById("ce-day4").value||null,day5_date:document.getElementById("ce-day5").value||null,day6_date:document.getElementById("ce-day6").value||null,source_class_id:G?Number(G):null}),x.length&&(await Promise.all(x.map(B=>ot(o.id,B.id).catch(()=>{}))),x=[]),F("บันทึกสำเร็จ","success"),window._navTo?window._navTo("my-classes"):history.back()}catch(G){F("บันทึกไม่สำเร็จ: "+ce(G),"error")}finally{y.disabled=!1,y.textContent="บันทึกการแก้ไข"}})}const Ye=[{cls:"bg-emerald-100 text-emerald-900 font-semibold",hex:"#d1fae5",soft:"#ecfdf5",border:"#6ee7b7",dot:"#6ee7b7"},{cls:"bg-indigo-100 text-indigo-900 font-semibold",hex:"#e0e7ff",soft:"#eef2ff",border:"#a5b4fc",dot:"#a5b4fc"},{cls:"bg-amber-100 text-amber-900 font-semibold",hex:"#fef3c7",soft:"#fffbeb",border:"#fcd34d",dot:"#fcd34d"},{cls:"bg-rose-100 text-rose-900 font-semibold",hex:"#ffe4e6",soft:"#fff1f2",border:"#fda4af",dot:"#fda4af"},{cls:"bg-cyan-100 text-cyan-900 font-semibold",hex:"#cffafe",soft:"#ecfeff",border:"#67e8f9",dot:"#67e8f9"},{cls:"bg-violet-100 text-violet-900 font-semibold",hex:"#ede9fe",soft:"#f5f3ff",border:"#c4b5fd",dot:"#c4b5fd"},{cls:"bg-lime-100 text-lime-900 font-semibold",hex:"#ecfccb",soft:"#f7fee7",border:"#bef264",dot:"#bef264"},{cls:"bg-orange-100 text-orange-900 font-semibold",hex:"#ffedd5",soft:"#fff7ed",border:"#fdba74",dot:"#fdba74"},{cls:"bg-pink-100 text-pink-900 font-semibold",hex:"#fce7f3",soft:"#fdf2f8",border:"#f9a8d4",dot:"#f9a8d4"},{cls:"bg-teal-100 text-teal-900 font-semibold",hex:"#ccfbf1",soft:"#f0fdfa",border:"#5eead4",dot:"#5eead4"},{cls:"bg-sky-100 text-sky-900 font-semibold",hex:"#e0f2fe",soft:"#f0f9ff",border:"#7dd3fc",dot:"#7dd3fc"},{cls:"bg-fuchsia-100 text-fuchsia-900 font-semibold",hex:"#fae8ff",soft:"#fdf4ff",border:"#f0abfc",dot:"#f0abfc"}],st=e=>String(e??"").trim().toLowerCase(),hs=/^#[0-9a-f]{6}$/i;function Un(e){let o=2166136261;for(let r=0;r<e.length;r+=1)o^=e.charCodeAt(r),o=Math.imul(o,16777619);return o>>>0}function Qn({teacherId:e="",className:o="",subjectName:r="",fallbackId:p=""}={}){return`${st(e)}|${mt({className:o,subjectName:r,fallbackId:p})}`}function mt({className:e="",subjectName:o="",fallbackId:r=""}={}){const p=st(e),T=st(o),C=st(r);return p||T||C||"default"}function Dt(e){const o=hs.test(e)?e.slice(1):"e0e7ff";return{r:parseInt(o.slice(0,2),16),g:parseInt(o.slice(2,4),16),b:parseInt(o.slice(4,6),16)}}function Yn({r:e,g:o,b:r}){return`#${[e,o,r].map(p=>Math.max(0,Math.min(255,Math.round(p))).toString(16).padStart(2,"0")).join("")}`}function yt(e,o,r=.5){const p=Dt(e),T=Dt(o);return Yn({r:p.r*(1-r)+T.r*r,g:p.g*(1-r)+T.g*r,b:p.b*(1-r)+T.b*r})}function We(e){const o=hs.test(String(e??""))?String(e).toLowerCase():"#6366f1";return{cls:"",hex:o,soft:yt(o,"#ffffff",.86),border:yt(o,"#ffffff",.45),dot:o,text:yt(o,"#000000",.28)}}function Wn(e={}){const o=Qn(e),r=Un(o)%Ye.length;return{...We(Ye[r].dot),cls:Ye[r].cls,idx:r,key:o}}function ze(e={},o={}){const r=mt(e),p=o instanceof Map?o.get(r):o[r];return p?We(p):Wn(e)}const Ft="pp5_free_timer_count",Gt="pp5_timer_effect_style",it="pp5_timer_sound",zt="pp5_timer_break_step",Vt="pp5_timer_ambient",Ut="pp5_timer_font_scale",Qt="pp5_timer_show_ambient_countdown",Xe="pp5_timer_last_countdown_sec",Yt="pp5_timer_last_break_sec",Kn="alarm-bell.mp3",jt=[{key:"forest-wind",label:"🌲 ลมป่า",file:"forest-wind.mp3"},{key:"calm-ocean-breeze",label:"🌊 สายลมทะเล",file:"calm-ocean-breeze.mp3"},{key:"path-to-jannah",label:"🕌 Path to Jannah",file:"path-to-jannah.mp3"},{key:"waterfall-nature",label:"💦 น้ำตกธรรมชาติ",file:"waterfall-nature.mp3"},{key:"calm",label:"🧘 สงบ",file:"calm.mp3"},{key:"meditation-01",label:"🎐 สมาธิ 01",file:"meditation-01.mp3"},{key:"meditation-02",label:"🎐 สมาธิ 02",file:"meditation-02.mp3"},{key:"nature-piano",label:"🎹 เปียโนธรรมชาติ",file:"nature-piano.mp3"},{key:"solo-piano",label:"🎹 เปียโนเดี่ยว",file:"solo-piano.mp3"},{key:"rain",label:"🌧️ เสียงฝน",file:"rain.mp3"}];function It(e){return`/pp5online/sounds/${e}`}function ws(){var o;const e=parseInt((o=window._pp5SystemCfg)==null?void 0:o.freeTimerLimit,10);return Number.isFinite(e)?e:1}function Ze(e,o,r){r=Math.max(0,Math.min(1,r));const p=[1,3,5].map(R=>parseInt(e.slice(R,R+2),16)),T=[1,3,5].map(R=>parseInt(o.slice(R,R+2),16));return`rgb(${p.map((R,A)=>Math.round(R+(T[A]-R)*r)).join(",")})`}function vt(e){const o=Math.max(0,Math.round(e)),r=Math.floor(o/3600),p=Math.floor(o%3600/60),T=o%60;return r>0?`${String(r).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(T).padStart(2,"0")}`:`${String(p).padStart(2,"0")}:${String(T).padStart(2,"0")}`}let Te=null;function Jn(e,o,r="sine",p=.18){if(localStorage.getItem(it)!=="off")try{Te=Te||new(window.AudioContext||window.webkitAudioContext),Te.state==="suspended"&&Te.resume();const T=Te.createOscillator(),C=Te.createGain();T.type=r,T.frequency.value=e,C.gain.value=p,T.connect(C),C.connect(Te.destination),T.start(),C.gain.exponentialRampToValueAtTime(1e-4,Te.currentTime+o/1e3),T.stop(Te.currentTime+o/1e3)}catch{}}const Xn=()=>Jn(880,120,"square",.12);let Qe=null;function Zn(){if(localStorage.getItem(it)!=="off")try{Qe=Qe||new Audio(It(Kn)),Qe.currentTime=0,Qe.volume=.7,Qe.play().catch(()=>{})}catch{}}let Ne=null,Fe=null;function Re(){if(Ne)try{Ne.pause()}catch{}Ne=null,Fe=null}function eo(e){if(Fe===e){Re();return}Re();const o=jt.find(r=>r.key===e);if(o)try{Ne=new Audio(It(o.file)),Ne.volume=.5,Ne.play().catch(()=>{}),Ne.addEventListener("ended",()=>{Fe===e&&(Fe=null,Ne=null)}),Fe=e}catch{}}function to(){const e=document.createElement("div");e.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="tm-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-700 text-lg">สิทธิ์จับเวลาทดลองใช้งานครบแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์จับเวลาเต็มจอจำกัดการทดลองใช้ฟรี ${ws()} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
      <button id="tm-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(e),e.querySelector("#tm-paywall-close").addEventListener("click",()=>e.remove()),e.querySelector("#tm-upgrade").addEventListener("click",()=>{var o;e.remove(),(o=document.getElementById("btn-donate-float"))==null||o.click()})}function so(e,o,r){var oe;(oe=document.getElementById("timer-setup-modal"))==null||oe.remove(),Re();let p="countdown",T=localStorage.getItem(Gt)||"shake",C=localStorage.getItem(it)!=="off",R=localStorage.getItem(zt)||"60",A=localStorage.getItem(Vt)||"none",x=localStorage.getItem(Qt)==="on";const H=J=>{const ie=parseInt(localStorage.getItem(J),10);return Number.isFinite(ie)&&ie>0?ie:300};let O=Math.floor(H(Xe)/60),X=H(Xe)%60;const y=document.createElement("div");y.id="timer-setup-modal",y.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",document.body.appendChild(y);const M=[1,3,5,10,15,20],G=[{key:"countdown",icon:"⏱️",label:"นับถอยหลัง",sub:"คุมเวลากิจกรรม",grad:"linear-gradient(135deg,#10b981,#0ea5e9);"},{key:"break",icon:"☕",label:"พักเบรค",sub:"มืด→สว่างเตือนหมดเวลา",grad:"linear-gradient(135deg,#334155,#64748b);"},{key:"stopwatch",icon:"⏳",label:"นับเวลา",sub:"นับขึ้นไม่จำกัด",grad:"linear-gradient(135deg,#6366f1,#a855f7);"}];function B(){return`
      <div>
        <p class="text-xs font-semibold text-gray-500 mb-1.5">🎵 เสียงประกอบ <span class="font-normal">(คลิกเพื่อฟังตัวอย่าง คลิกซ้ำเพื่อหยุด)</span></p>
        <div class="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
          <button data-ambient="none" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${A==="none"?"bg-gray-700 text-white":"bg-gray-100 text-gray-600"}">🔇 ไม่มีเสียง</button>
          ${jt.map(J=>`<button data-ambient="${J.key}" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${A===J.key?"bg-teal-600 text-white":"bg-gray-100 text-gray-600"}">${J.label}${Fe===J.key?" ▶️":""}</button>`).join("")}
        </div>
      </div>`}function ae(){var f,I;y.innerHTML=`
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
            ${G.map(v=>`
              <button data-mode="${v.key}" class="tm-mode-btn py-2.5 px-1 rounded-2xl text-xs font-bold transition ${p===v.key?"text-white":"bg-gray-100 text-gray-500"}"
                style="${p===v.key?`background:${v.grad}`:""}">${v.icon}<br>${v.label}<br><span class="font-normal text-[10px] opacity-80">${v.sub}</span></button>
            `).join("")}
          </div>

          ${p!=="stopwatch"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">ระยะเวลา</p>
            <div class="flex flex-wrap gap-1.5">
              ${M.map(v=>`<button data-min="${v}" class="tm-preset-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition ${O===v&&X===0?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}">${v} นาที</button>`).join("")}
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <input id="tm-custom-min" type="number" min="0" max="180" value="${O}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">นาที</span>
              <input id="tm-custom-sec" type="number" min="0" max="59" value="${X}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">วินาที</span>
            </div>
          </div>
          `:""}

          ${p==="countdown"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">เอฟเฟกต์ตอนใกล้หมดเวลา</p>
            <div class="flex gap-2">
              <button data-eff="shake" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${T==="shake"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">📳 สั่น</button>
              <button data-eff="scale" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${T==="scale"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">🔍 ขยาย</button>
            </div>
          </div>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-sound" type="checkbox" ${C?"checked":""} class="w-4 h-4 rounded" />
            🔊 เปิดเสียงตอนนับถอยหลัง/หมดเวลา (เสียงกริ่งนาฬิกาปลุก)
          </label>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-show-ambient" type="checkbox" ${x?"checked":""} class="w-4 h-4 rounded" />
            🎵 แสดงตัวเลือกเสียงประกอบในโหมดนับถอยหลังด้วย
          </label>
          ${x?B():""}
          `:""}

          ${p==="break"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">หน่วยปรับเวลาระหว่างเบรค</p>
            <div class="flex gap-2">
              <button data-step="60" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${R==="60"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±1 นาที</button>
              <button data-step="30" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${R==="30"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±30 วินาที</button>
            </div>
          </div>
          ${B()}
          `:""}

          <button id="tm-start" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]"
            style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">▶️ เริ่มจับเวลา</button>
        </div>
      </div>`,y.querySelector("#tm-close").addEventListener("click",()=>{Re(),y.remove()}),y.querySelectorAll(".tm-mode-btn").forEach(v=>v.addEventListener("click",()=>{if(p=v.dataset.mode,Re(),p!=="stopwatch"){const W=H(p==="break"?Yt:Xe);O=Math.floor(W/60),X=W%60}ae()})),y.querySelectorAll(".tm-preset-btn").forEach(v=>v.addEventListener("click",()=>{O=parseInt(v.dataset.min,10),X=0,ae()})),(f=y.querySelector("#tm-custom-min"))==null||f.addEventListener("change",v=>{const W=parseInt(v.target.value,10);Number.isFinite(W)&&W>=0&&(O=W)}),(I=y.querySelector("#tm-custom-sec"))==null||I.addEventListener("change",v=>{const W=parseInt(v.target.value,10);Number.isFinite(W)&&W>=0&&(X=Math.min(59,W))}),y.querySelectorAll(".tm-eff-btn").forEach(v=>v.addEventListener("click",()=>{T=v.dataset.eff,localStorage.setItem(Gt,T),ae()})),y.querySelectorAll(".tm-step-btn").forEach(v=>v.addEventListener("click",()=>{R=v.dataset.step,localStorage.setItem(zt,R),ae()})),y.querySelectorAll(".tm-ambient-btn").forEach(v=>v.addEventListener("click",()=>{A=v.dataset.ambient,localStorage.setItem(Vt,A),A==="none"?Re():eo(A),ae()}));const J=y.querySelector("#tm-sound");J&&J.addEventListener("change",v=>localStorage.setItem(it,v.target.checked?"on":"off"));const ie=y.querySelector("#tm-show-ambient");ie&&ie.addEventListener("change",v=>{x=v.target.checked,localStorage.setItem(Qt,x?"on":"off"),ae()}),y.querySelector("#tm-start").addEventListener("click",()=>{var n,t;const v=parseInt((n=y.querySelector("#tm-custom-min"))==null?void 0:n.value,10),W=parseInt((t=y.querySelector("#tm-custom-sec"))==null?void 0:t.value,10);Number.isFinite(v)&&v>=0&&(O=v),Number.isFinite(W)&&W>=0&&(X=Math.min(59,W));const D=O*60+X;if(p!=="stopwatch"&&D<=0){F("กรุณาตั้งเวลาอย่างน้อย 1 วินาที","warning");return}if(!r){const i=parseInt(localStorage.getItem(Ft)||"0",10);if(i>=ws()){to();return}localStorage.setItem(Ft,String(i+1))}p!=="stopwatch"&&localStorage.setItem(p==="break"?Yt:Xe,String(D));const s=p==="break"||p==="countdown"&&x?A:"none";Re(),y.remove(),no(p,p==="stopwatch"?0:D,{effectStyle:T,breakStepSec:parseInt(R,10),ambient:s})})}ae(),y.addEventListener("click",J=>{J.target===y&&(Re(),y.remove())})}function no(e,o,{effectStyle:r,breakStepSec:p,ambient:T}){var f,I;(f=document.getElementById("timer-fullscreen-overlay"))==null||f.remove();let C=o,R=o,A=0,x=!1,H=!1,O=null,X=-1,y=parseFloat(localStorage.getItem(Ut))||1,M=null;if(T&&T!=="none"){const v=jt.find(W=>W.key===T);if(v)try{M=new Audio(It(v.file)),M.loop=!0,M.volume=.45,M.play().catch(()=>{})}catch{}}const G=document.createElement("div");G.id="timer-fullscreen-overlay",G.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:background-color .6s linear;",G.innerHTML=`
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
    <div id="tm-digits" class="tm-digits" style="font-size:calc(min(28vw,220px) * ${y});line-height:1;">${vt(e==="stopwatch"?0:R)}</div>
    <div id="tm-sub" style="margin-top:12px;font-size:18px;opacity:.75;"></div>
    <div id="tm-mode-controls" style="display:none;margin-top:28px;gap:16px;align-items:center;"></div>
  `,document.body.appendChild(G);try{(I=G.requestFullscreen)==null||I.call(G)}catch{}const B=G.querySelector("#tm-digits"),ae=G.querySelector("#tm-sub");G.querySelector("#tm-size-slider").addEventListener("input",v=>{y=parseFloat(v.target.value),localStorage.setItem(Ut,String(y)),B.style.fontSize=`calc(min(28vw,220px) * ${y})`});function oe(){var v;if(O&&cancelAnimationFrame(O),M)try{M.pause()}catch{}document.fullscreenElement&&((v=document.exitFullscreen)==null||v.call(document).catch(()=>{})),G.remove()}if(G.querySelector("#tm-exit").addEventListener("click",oe),e==="break"){const v=G.querySelector("#tm-mode-controls");v.style.display="flex";const W=p===30?"30 วิ":"1 นาที";v.innerHTML=`
      <button id="tm-minus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">− ${W}</button>
      <button id="tm-plus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">+ ${W}</button>
    `,v.querySelector("#tm-minus").addEventListener("click",()=>{R=Math.max(0,R-p)}),v.querySelector("#tm-plus").addEventListener("click",()=>{R+=p,C=Math.max(C,R)}),ae.textContent="พักเบรค — จอสว่างเต็มที่ = หมดเวลาพัก"}else if(e==="stopwatch"){const v=G.querySelector("#tm-mode-controls");v.style.display="flex",v.innerHTML=`
      <button id="tm-pause" style="background:rgba(0,0,0,.15);border:none;padding:12px 26px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">⏸️ หยุดชั่วคราว</button>
    `;const W=v.querySelector("#tm-pause");W.addEventListener("click",()=>{H=!H,W.textContent=H?"▶️ เล่นต่อ":"⏸️ หยุดชั่วคราว"}),G.style.backgroundColor="#1e293b",B.style.color="#ffffff",ae.textContent="นับเวลา"}else ae.textContent="นับถอยหลัง";let J=performance.now();function ie(v){const W=(v-J)/1e3;if(J=v,e==="stopwatch"){H||(A+=W,B.textContent=vt(A)),O=requestAnimationFrame(ie);return}if(!x){R=Math.max(0,R-W);const D=Math.ceil(R),s=C>0?R/C:0,n=1-s;if(B.textContent=vt(R),e==="break")G.style.backgroundColor=Ze("#0f172a","#fef9c3",n),B.style.color=Ze("#94a3b8","#1e293b",n),B.style.animation="";else{let t;if(s>.3?t=Ze("#f59e0b","#10b981",(s-.3)/.7):s>.1?t=Ze("#ef4444","#f59e0b",(s-.1)/.2):t="#ef4444",G.style.backgroundColor=t,B.style.color="#ffffff",s<=.3){const i=1-Math.min(1,s/.3),_=Math.max(.18,.9-i*.7);B.style.animation=`${r==="shake"?"tm-shake":"tm-scale"} ${_}s ease-in-out infinite`}else B.style.animation="";D!==X&&(X=D,D>0&&D<=3&&Xn())}R<=0&&(x=!0,B.textContent="00:00",B.style.animation="",e==="break"?(G.style.backgroundColor="#fef9c3",B.style.color="#1e293b",ae.textContent="หมดเวลาพักเบรคแล้ว"):(ae.textContent="⏰ หมดเวลา!",Zn(),In().then(()=>Mn("mid")).catch(()=>{})))}O=requestAnimationFrame(ie)}O=requestAnimationFrame(ie)}const oo="pp5_exam_docs_pending_class_id";function _s(e){window._pendingExamDocClassId=String(e);try{sessionStorage.setItem(oo,String(e))}catch{}if(typeof window._navTo=="function"){window._navTo("exam-docs");return}F("ไม่พบเมนูเอกสารช่วงสอบ กรุณาเปิดจากหน้าเมนครู","warning")}async function $s(e,o){var p,T,C,R,A;const r=(p=window._classCache)==null?void 0:p[o];if(r){je("my-classes"),Ie("จัดการนักเรียน","class-students"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายชื่อนักเรียน...
  </div>`);try{const[x,H]=await Promise.all([Gs(o),$e().catch(()=>({}))]),O=`classRosterView_${o}`,X=localStorage.getItem(O)||"table",y=x.filter(n=>n.is_active).length,M=r.master_subjects??{},G=["AGM","AGMVOC"].includes(M.subject_group),B=M.subject_group==="ACDMVOC",ae=H.showStudentHouseColor!=="false",oe=H.showStudentSportsShirtSize!=="false",J=["ข.ร.","ข.ส.","ม.ส.","ข.ป."],ie=n=>`
      <select data-special-enrollment="${n.enrollment_id}" onclick="event.stopPropagation()"
        class="border border-gray-200 rounded-lg px-1.5 py-1 text-xs bg-white text-gray-600">
        <option value="" ${n.special_result?"":"selected"}>ปกติ</option>
        ${J.map(t=>`<option value="${t}" ${n.special_result===t?"selected":""}>${t}</option>`).join("")}
      </select>`,f=n=>G?n.main_room||n.religion_room||"—":n.religion_room||n.main_room||"—",I=n=>`
      ${ae?`<span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">สี: ${b(n.house_color||"—")}</span>`:""}
      ${oe?`<span class="inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-medium">เสื้อ: ${b(n.sports_shirt_size||"—")}</span>`:""}`,v=(n,t="w-12 h-16")=>n.image_url?`<img src="${b(n.image_url)}" class="${t} rounded-2xl object-cover bg-gray-100 border border-gray-100 shadow-sm" loading="lazy" />`:`<div class="${t} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold">${b((n.full_name||"?").trim().slice(0,1))}</div>`,W=x.map((n,t)=>`
      <tr class="student-status-target cursor-pointer transition ${n.is_active?"bg-white hover:bg-emerald-50/40":"bg-gray-50 text-gray-400 hover:bg-gray-100"}"
        data-enrollment-id="${n.enrollment_id}" data-next="${n.is_active?"false":"true"}" data-name="${b(n.full_name)}">
        <td class="px-3 py-2 text-center text-xs text-gray-400">${t+1}</td>
        <td class="px-3 py-2">${v(n)}</td>
        <td class="px-3 py-2 font-mono text-sm">${b(n.student_code)}</td>
        <td class="px-3 py-2">
          <p class="font-semibold text-gray-800 ${n.is_active?"":"line-through text-gray-400"}">${b(n.full_name)}</p>
          <p class="text-xs text-gray-400">${b(f(n))}</p>
          <div class="mt-1 flex flex-wrap gap-1">${I(n)}</div>
        </td>
        ${ae?`<td class="px-3 py-2 text-center text-sm text-gray-600">${b(n.house_color||"—")}</td>`:""}
        ${oe?`<td class="px-3 py-2 text-center text-sm text-gray-600">${b(n.sports_shirt_size||"—")}</td>`:""}
        ${B?`<td class="px-3 py-2 text-center">${ie(n)}</td>`:""}
        <td class="px-3 py-2 text-center">
          <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold ${n.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${n.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </td>
      </tr>`).join(""),D=x.map(n=>`
      <button type="button"
        class="student-status-target text-left rounded-2xl border p-4 transition ${n.is_active?"border-emerald-300 bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12),0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.18),0_10px_24px_rgba(16,185,129,0.16)]":"border-gray-300 bg-gray-50 opacity-80 hover:opacity-100"}"
        data-enrollment-id="${n.enrollment_id}" data-next="${n.is_active?"false":"true"}" data-name="${b(n.full_name)}">
        <div class="flex items-start justify-between gap-3">
          ${v(n,"w-20 h-28")}
          <span class="px-2 py-1 rounded-full text-[11px] font-semibold ${n.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${n.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </div>
        <p class="mt-3 font-bold text-gray-800 ${n.is_active?"":"line-through text-gray-400"}">${b(n.full_name)}</p>
        <p class="text-xs font-mono text-sky-700 mt-0.5">${b(n.student_code)}</p>
        <p class="text-xs text-gray-400 mt-0.5">${b(f(n))}</p>
        <div class="mt-2 flex flex-wrap gap-1">${I(n)}</div>
      </button>`).join("");_e(`<div class="animate-fade">
      <div id="students-back-placeholder" class="hidden"></div>
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-gray-700">ทั้งหมด ${x.length} คน · กำลังเรียน ${y} คน</p>
            <p class="text-xs text-gray-400 mt-0.5">ปิดสถานะเมื่อนักเรียนออกกลางคัน ระบบจะไม่ดึงไปเช็คชื่อ/ใบรายชื่อ</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${X==="table"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="table" title="มุมมองตาราง">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4M3 6h4M3 18h4M17 6h4M17 18h4"/></svg>
              </button>
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${X==="grid"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="grid" title="มุมมองกริด">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </button>
            </div>
            <button id="students-sync-enroll" class="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700" title="รีเฟรชรายชื่อนักเรียนในห้องนี้ตามข้อมูลล่าสุด">🔄 รีเฟรชรายชื่อ</button>
            <button id="students-add" class="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700">＋ เพิ่มนักเรียน</button>
            <button id="students-roster" class="px-3 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700">🖨️ สร้างใบรายชื่อ</button>
            <button id="students-print-qr" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">🖨️ พิมพ์ QR Code</button>
          </div>
        </div>
        ${x.length?X==="grid"?`
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
                  ${ae?'<th class="px-3 py-2 text-center w-24">ประจำสี</th>':""}
                  ${oe?'<th class="px-3 py-2 text-center w-28">ไซด์เสื้อ</th>':""}
                  ${B?'<th class="px-3 py-2 text-center w-24">สถานะพิเศษ</th>':""}
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
    </div>`);const s=()=>window._openStudentManager(o);document.querySelectorAll("[data-special-enrollment]").forEach(n=>{n.addEventListener("change",async()=>{try{await zs(n.dataset.specialEnrollment,n.value),F("บันทึกสถานะพิเศษแล้ว","success")}catch(t){F("บันทึกไม่สำเร็จ: "+ce(t),"error")}})}),(T=document.getElementById("students-roster"))==null||T.addEventListener("click",()=>window._openRosterPicker(o)),(C=document.getElementById("students-print-qr"))==null||C.addEventListener("click",()=>{window._pendingQRClassId=o,window._navTo("student-qr-print")}),(R=document.getElementById("students-sync-enroll"))==null||R.addEventListener("click",async n=>{var _;const t=n.currentTarget,i=t.textContent;t.disabled=!0,t.textContent="กำลังรีเฟรช...";try{await Vs(),F("รีเฟรชรายชื่อสำเร็จ","success"),((_=window._loadClassTab)==null?void 0:_.call(window,"students"))??window._openStudentManager(o)}catch{F("รีเฟรชไม่สำเร็จ","error"),t.disabled=!1,t.textContent=i}}),document.querySelectorAll(".student-view-toggle").forEach(n=>{n.addEventListener("click",()=>{localStorage.setItem(O,n.dataset.view),s()})}),document.querySelectorAll(".student-status-target").forEach(n=>{n.addEventListener("click",()=>{var q;const t=n.dataset.next==="true",i=n.dataset.name||"นักเรียน";(q=document.getElementById("student-status-confirm"))==null||q.remove();const _=document.createElement("div");_.id="student-status-confirm",_.className="fixed inset-0 z-[95] bg-white flex flex-col",t?_.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-emerald-100 text-emerald-700">
                ✓
              </div>
              <h3 class="text-2xl font-bold text-gray-800">เปิดสถานะกำลังเรียน?</h3>
              <p class="mt-3 text-gray-500">${b(i)}</p>
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
              <p class="mt-3 text-gray-800 font-semibold text-lg">${b(i)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะถูกลบออกจากรายวิชานี้ และระบบซิงก์หรือปุ่มรีเฟรชจะไม่เพิ่มกลับมาอีก<br/>หากต้องการนำกลับ สามารถใช้ปุ่ม “เพิ่มนักเรียน” ได้ภายหลัง</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700">ยืนยันการลบ</button>
              </div>
            </div>
          </div>`,document.body.appendChild(_),_.querySelector("#student-status-cancel").addEventListener("click",()=>_.remove()),_.querySelector("#student-status-ok").addEventListener("click",async()=>{try{t?(await Us(n.dataset.enrollmentId,!0),F("เปิดสถานะกำลังเรียนแล้ว","success")):(await Qs(n.dataset.enrollmentId),F("ลบนักเรียนออกจากห้องเรียนนี้แล้ว","success")),_.remove(),s()}catch(P){F("ดำเนินการไม่สำเร็จ: "+ce(P),"error")}})})}),(A=document.getElementById("students-add"))==null||A.addEventListener("click",()=>{var Z;(Z=document.getElementById("add-student-modal"))==null||Z.remove();const n=document.createElement("div");n.id="add-student-modal",n.className="fixed inset-0 z-[90] bg-white flex flex-col animate-fade",n.innerHTML=`
        <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 class="text-xl font-bold text-gray-800">เพิ่มนักเรียนเข้ารายวิชา (หลายคน)</h3>
            <p class="text-xs text-gray-500 mt-1">${b(M.subject_name||"")} · ${b(r.class_name||"")}</p>
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
        </div>`,document.body.appendChild(n);const t=n.querySelector("#add-student-code"),i=n.querySelector("#add-student-search-btn"),_=n.querySelector("#add-student-status"),q=n.querySelector("#added-students-list"),P=n.querySelector("#added-count");let k=[];function S(){if(P.textContent=k.length,!k.length){q.innerHTML='<p class="text-xs text-gray-400 italic">ยังไม่มีการเพิ่มในรอบนี้</p>';return}q.innerHTML=k.map((V,se)=>`
          <div class="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl animate-fade">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-100 w-5 h-5 flex items-center justify-center rounded-full">${k.length-se}</span>
            <div class="flex-1">
              <p class="text-sm font-bold text-gray-800">${b(V.full_name)}</p>
              <p class="text-xs font-mono text-gray-500">${b(V.student_code)} · ${b(f(V))}</p>
            </div>
            <span class="text-xs text-emerald-600 font-bold">✓ เพิ่มแล้ว</span>
          </div>
        `).join("")}const $=async()=>{const V=t.value.trim();if(V){_.innerHTML='<span class="text-gray-400">กำลังค้นหาและเพิ่ม...</span>',t.disabled=!0,i.disabled=!0;try{const se=await Ys(V);if(!se){_.innerHTML='<span class="text-red-500 font-medium">⚠️ ไม่พบนักเรียนรหัสนี้</span>';return}await Ws(o,se.id),k.unshift(se),S(),_.innerHTML=`<span class="text-emerald-600 font-medium">✓ เพิ่ม ${b(se.full_name)} สำเร็จ!</span>`,t.value=""}catch(se){_.innerHTML=`<span class="text-red-500 font-medium">⚠️ ${se.message||"เกิดข้อผิดพลาด"}</span>`}finally{t.disabled=!1,i.disabled=!1,t.focus()}}};n.querySelector("#add-student-close").addEventListener("click",()=>{n.remove(),s()}),i.addEventListener("click",$),t.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),$())}),setTimeout(()=>t.focus(),50)})}catch(x){F("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ce(x),"error"),Le(e)}}}async function Le(e,o={}){var p,T;const r=o.showAllTerms??!1;if(je("my-classes"),Ie("ห้องเรียนของฉัน","classes"),!(e!=null&&e.id)){_e(`<div class="max-w-md mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">⚠️</p>
      <p class="font-medium text-gray-600">ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p>
    </div>`);return}_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[C,R,A,x]=await Promise.all([pt((e==null?void 0:e.id)??null),$e().catch(()=>({})),e!=null&&e.id?Lt(e.id).catch(()=>[]):Promise.resolve([]),ss().catch(()=>[])]),H=Object.fromEntries(x.map(s=>[s.id,s])),O=parseInt(R.academicYear??2568),X=parseInt(R.semester??1),[y,M,G]=await Promise.all([e!=null&&e.id?Ve(e.id,O,X).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?Et(e.id).catch(()=>[]):Promise.resolve([]),ut().catch(()=>[])]),B={};M.forEach(s=>{B[s.class_id]||(B[s.class_id]=[]),B[s.class_id].push(s.teacher_schedule_id)});const ae=Object.fromEntries(y.map(s=>[s.id,s])),oe=Object.fromEntries(G.map(s=>[s.period_no,s])),J=Object.fromEntries((A??[]).map(s=>[s.room_key,s.color_hex]));window._classCache=Object.fromEntries(C.map(s=>[s.id,s])),window._classesFlat=C;const ie=s=>s.academic_year==null||+s.academic_year===O&&+s.semester===X,f=C.filter(s=>!ie(s)).length,I=r?C:C.filter(ie),v=new Map;I.forEach(s=>{const n=s.master_subjects??{},t=[s.course_id??n.id??"",n.subject_code??"",n.subject_name??"",n.subject_group??""],i=t.some(Boolean)?t.join("|"):`class-${s.id}`;v.has(i)||v.set(i,{key:i,masterSubject:n,classes:[]}),v.get(i).classes.push(s)});const W=[...v.values()].map(s=>({...s,classes:s.classes.sort((n,t)=>{const i=Ue(n.id,B,ae,oe),_=Ue(t.id,B,ae,oe);return i!==_?i-_:String(n.class_name??"").localeCompare(String(t.class_name??""),"th")})})).sort((s,n)=>{var _,q;const t=Math.min(...s.classes.map(P=>Ue(P.id,B,ae,oe))),i=Math.min(...n.classes.map(P=>Ue(P.id,B,ae,oe)));return t!==1/0&&i!==1/0&&t!==i?t-i:String(((_=s.masterSubject)==null?void 0:_.subject_name)??"").localeCompare(String(((q=n.masterSubject)==null?void 0:q.subject_name)??""),"th")});_e(`<div class="animate-fade">
      <div class="mb-4">
        ${f>0?`
        <button id="toggle-term-view" type="button"
          class="w-full text-left px-4 py-2.5 rounded-xl border border-dashed text-xs font-semibold transition ${r?"border-indigo-200 bg-indigo-50 text-indigo-700":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
          ${r?"🔼 กำลังแสดงทุกภาคเรียน — คลิกเพื่อแสดงเฉพาะภาคเรียนปัจจุบัน":`🔽 มีห้องเรียนภาคเรียนก่อนหน้าอีก ${f} ห้อง — คลิกเพื่อแสดง (แก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ)`}
        </button>`:""}
      </div>
      ${I.length?`
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
        ${s.classes.map(t=>{var se,re;const i=t.master_subjects,_=_t(R,t),q=["AGM","AGMVOC"].includes(i==null?void 0:i.subject_group),P={teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:i==null?void 0:i.subject_name,fallbackId:t.id},k=ze(P,J);window._classColorCache||(window._classColorCache={}),window._classColorCache[t.id]=k;const S=q?{text:"กลุ่มวิชาศาสนา",cls:"bg-amber-50 text-amber-700"}:t.skill_group?{text:`กลุ่มทักษะ: ${t.skill_group}`,cls:"bg-blue-50 text-blue-700"}:null,$=t.classroom_id?H[t.classroom_id]:null,Z=Ue(t.id,B,ae,oe),V=(()=>{if(!(B[t.id]??[]).length)return`<button onclick="event.stopPropagation();window._openCombinedEdit(${t.id},'schedule')"
                class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium hover:underline transition">🔗 เชื่อมตารางสอน</button>`;if(Z===1/0)return'<span class="text-[11px] text-gray-400">📅 ไม่พบข้อมูลตาราง</span>';if(Z<=0)return'<span class="text-[11px] text-emerald-600 font-semibold">🟢 กำลังสอนอยู่</span>';if(Z<60)return`<span class="text-[11px] text-emerald-600">⏱ สอนในอีก ${Math.round(Z)} นาที</span>`;const l=Math.floor(Z/60),h=Math.round(Z%60);return l<24?`<span class="text-[11px] text-blue-600">⏱ สอนในอีก ${l} ชม. ${h} นาที</span>`:`<span class="text-[11px] text-gray-500">⏱ สอนในอีก ${Math.floor(l/24)} วัน</span>`})();return`
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
                  <button onclick="event.stopPropagation();window._deleteClass(${t.id},'${((re=t.class_name)==null?void 0:re.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-red-300 hover:text-red-500 hover:bg-white/70 rounded-lg transition text-sm" title="ลบ">🗑️</button>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between">
                ${V}
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
    </div>`),(p=document.getElementById("toggle-term-view"))==null||p.addEventListener("click",()=>Le(e,{showAllTerms:!r})),window._openPP5Doc=s=>us(s),window._openExamDocsForClass=s=>_s(s),window._openClassDetail=s=>Mt(e,s,{classes:C,scheduleMap:ae,linksByClass:B,periodMap:oe,classrooms:x,copyCfg:R}),window._openClassDashboard=async s=>{var i;const n=(i=window._classCache)==null?void 0:i[s];if(!n)return;const{openClassDashboard:t}=await fe(async()=>{const{openClassDashboard:_}=await import("./teacher-views-dashboard-B0a46sXh.js");return{openClassDashboard:_}},__vite__mapDeps([0,1,2,3,4,5]));t(s,n,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})},window._openCombinedEdit=(s,n="info")=>{var i;const t=(i=window._classCache)==null?void 0:i[s];t&&Es(e,t,x,y,B,oe,ae,()=>Le(e),n)},window._assignClassroom=s=>{var P,k,S;const n=(P=window._classCache)==null?void 0:P[s];if(!n)return;const t=[...new Set(x.map($=>$.building))];(k=document.getElementById("assign-room-modal"))==null||k.remove();const i=document.createElement("div");i.id="assign-room-modal",i.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">📍 ระบุห้องสอน</h3>
          <p class="text-xs text-gray-400 mb-4">${n.class_name} · ${((S=n.master_subjects)==null?void 0:S.subject_name)??""}</p>
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
        </div>`,document.body.appendChild(i);const _=i.querySelector("#arm-building"),q=i.querySelector("#arm-room");if(n.classroom_id&&H[n.classroom_id]){const $=H[n.classroom_id];_.value=$.building,_.dispatchEvent(new Event("change"))}_.addEventListener("change",()=>{const $=_.value,Z=x.filter(V=>V.building===$);q.innerHTML='<option value="">— เลือกห้อง —</option>'+Z.map(V=>{const se=V.name?`${V.room_number} — ${V.name}`:V.room_number,re=V.id===n.classroom_id?"selected":"";return`<option value="${V.id}" ${re}>${se}</option>`}).join("")}),i.querySelector("#arm-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#arm-save").addEventListener("click",async()=>{var V;const $=i.querySelector("#arm-save"),Z=q.value?parseInt(q.value):null;$.disabled=!0,$.textContent="⏳";try{await os(s,Z),(V=window._classCache)!=null&&V[s]&&(window._classCache[s].classroom_id=Z),F("บันทึกห้องสอนแล้ว ✅","success"),i.remove(),Le(e)}catch(se){F("บันทึกไม่สำเร็จ: "+ce(se),"error"),$.disabled=!1,$.textContent="บันทึก"}})},window._openAttendance=s=>{var t;const n=(t=window._classCache)==null?void 0:t[s];n&&qt(e,n)},window._openGrades=s=>{var t;const n=(t=window._classCache)==null?void 0:t[s];n&&Ct(e,n)},window._openScoreCols=(s,n)=>{var i;const t=(i=window._classCache)==null?void 0:i[s];Gn(e,s,n,t)},window._editClass=s=>{var t;const n=(t=window._classCache)==null?void 0:t[s];n&&Vn(e,n)},window._deleteClass=async(s,n)=>{if(await ct({title:`ลบห้องเรียน "${n}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ns(s),F(`ลบ "${n}" แล้ว`,"success"),Le(e)}catch(i){F("ลบไม่สำเร็จ: "+ce(i),"error")}},window._copyClass=s=>{var _;const n=(_=window._classCache)==null?void 0:_[s];if(!n)return;const t=n.master_subjects??{},i={id:n.course_id,subject_name:t.subject_name??"—",subject_code:t.subject_code??"",credit:t.credit??"",grade_level:t.grade_level??"",dept:t.dept??n.dept??"",subject_group:t.subject_group??""};zn(e,i,{cloneFrom:s,srcSkill:n.skill_group??""})};const D=async(s,n,t="landscape",i="all")=>{try{const[_,q,P]=await Promise.all([$e().catch(()=>({})),De(s.id),n==="score"?Oe(s.id):Promise.resolve([])]),k=i==="ชาย"||i==="หญิง"?i:"ทั้งหมด",S=k==="ทั้งหมด"?q:q.filter(z=>String(z.gender||"").trim()===k);if(!S.length){F(`ไม่พบนักเรียน${k==="ทั้งหมด"?"":k}ในห้องนี้`,"warning");return}const $=s.master_subjects??{},Z=["ACDMVOC","AGMVOC"].includes($.subject_group),V=Z?_.porworCollegeName||_.samaiSchoolName||"โรงเรียน":_.samaiSchoolName||_.porworCollegeName||"โรงเรียน",se=Z?_.porworLogoBwUrl||_.porworLogoUrl||_.samaiLogoBwUrl||_.samaiLogoUrl||"":_.samaiLogoBwUrl||_.samaiLogoUrl||_.porworLogoBwUrl||_.porworLogoUrl||"",re=await An(se),l=n==="score"?"ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน":"ใบรายชื่อนักเรียนสำหรับเช็คชื่อ",h=t!=="portrait",L=h?"297mm":"210mm",a=h?"210mm":"297mm",c=P.map(z=>{const ne=z.assignment_name||"-";return`
          <th class="score-col ${ne.length>8||P.length>(h?10:6)?"long":""}">
            <div class="score-label" title="${b(ne)}">${b(ne)}</div>
            <small>/${b(z.max_score??"")}</small>
          </th>`}).join(""),u=P.map(()=>'<td class="score-cell"></td>').join(""),m=Array.from({length:12},(z,ne)=>`<th class="check-col">${ne+1}</th>`).join(""),E=Array.from({length:12},()=>'<td class="check-cell"></td>').join(""),ee=S.map((z,ne)=>`
          <tr>
            <td class="no">${ne+1}</td>
            <td class="code">${b(z.student_code)}</td>
            <td class="name">${b(z.full_name)}</td>
            ${n==="score"?u:E}
            <td class="note"></td>
          </tr>`).join(""),Q=`<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>${b(l)} - ${b($.subject_name||"")}</title>
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
      <div class="logo-wrap">${re?`<img class="logo" src="${b(re)}" />`:""}</div>
      <div class="school">
        <h1>${b(V)}</h1>
        <h2>${b(l)}${k==="ทั้งหมด"?"":` (${b(k)})`}</h2>
      </div>
      <div class="meta">
        <div><strong>ภาคเรียน</strong> ${b(_.semester||"")}/${b(_.academicYear||"")}</div>
        <div><strong>ห้อง</strong> ${b(s.class_name||"")}</div>
        <div><strong>รายชื่อ</strong> ${b(k)}</div>
        <div><strong>จำนวน</strong> ${S.length} คน</div>
      </div>
    </section>
    <section class="meta" style="margin-bottom:8px">
      <div><strong>รายวิชา</strong> ${b($.subject_name||"")}</div>
      <div><strong>รหัสวิชา</strong> ${b($.subject_code||"")}</div>
      <div><strong>ครูผู้สอน</strong> ${b((e==null?void 0:e.full_name)||"")}</div>
    </section>
    <table>
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="code">รหัส</th>
          <th class="name">ชื่อ-นามสกุล</th>
          ${n==="score"?c:m}
          <th class="note">หมายเหตุ</th>
        </tr>
      </thead>
      <tbody>${ee}</tbody>
    </table>
    <section class="signature">
      <div>
        ลงชื่อ ........................................ ครูผู้สอน<br />
        (${b((e==null?void 0:e.full_name)||"")})
      </div>
    </section>
  </main>
</body>
</html>`;_n(Q)}catch(_){F("สร้างใบรายชื่อไม่สำเร็จ: "+ce(_),"error")}};window._openRosterPicker=s=>{var q,P,k;const n=(q=window._classCache)==null?void 0:q[s];if(!n)return;(P=document.getElementById("roster-picker-modal"))==null||P.remove();const t=document.createElement("div");t.id="roster-picker-modal",t.className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">สร้างใบรายชื่อ</h3>
        <p class="text-xs text-gray-400 mb-4">${b(((k=n.master_subjects)==null?void 0:k.subject_name)||"")} · ${b(n.class_name||"")}</p>
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
      </div>`,document.body.appendChild(t);const i=()=>{var S;return((S=t.querySelector(".roster-orientation:checked"))==null?void 0:S.value)||"landscape"},_=()=>{var S;return((S=t.querySelector(".roster-gender:checked"))==null?void 0:S.value)||"all"};t.querySelectorAll(".roster-orientation").forEach(S=>{S.addEventListener("change",()=>{t.querySelectorAll(".roster-orientation-card").forEach($=>{$.className="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600"}),S.nextElementSibling.className="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"})}),t.querySelectorAll(".roster-gender").forEach(S=>{S.addEventListener("change",()=>{t.querySelectorAll(".roster-gender-card").forEach($=>{$.className="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600"}),S.nextElementSibling.className="roster-gender-card block text-center rounded-lg border border-violet-500 bg-violet-50 px-2 py-2 text-sm font-semibold text-violet-700"})}),t.querySelector("#btn-roster-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",S=>{S.target===t&&t.remove()}),t.querySelector("#btn-roster-att").addEventListener("click",()=>{const S=i(),$=_();t.remove(),D(n,"attendance",S,$)}),t.querySelector("#btn-roster-score").addEventListener("click",()=>{const S=i(),$=_();t.remove(),D(n,"score",S,$)})},window._openStudentManager=s=>$s(e,s),window._openClassCopyModal=s=>{var S,$;const n=(S=window._classCache)==null?void 0:S[s];if(!n)return;const t=_t(R,n);if(!(t!=null&&t.id)){F("ยังไม่ได้ตั้งค่าไฟล์ต้นฉบับสำหรับกลุ่มวิชานี้","warning");return}($=document.getElementById("class-copy-modal"))==null||$.remove();const i=n.master_subjects??{},_=`${i.subject_name||"ปพ5"}_${n.class_name||""}_${(e==null?void 0:e.full_name)||""}`.replace(/\s+/g," ").trim(),q=(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||"",P=document.createElement("div");P.id="class-copy-modal",P.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",P.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">🔗 ทำสำเนาชีทสำหรับรายวิชานี้</h3>
        <p class="text-xs text-gray-400 mb-4">${b(t.label||"")} · ${b(i.subject_name||"")} · ${b(n.class_name||"")}</p>
        <label class="block text-sm font-semibold text-gray-700 mb-1">ตั้งชื่อไฟล์สำเนา</label>
        <input id="copy-file-name" class="${Ce}" value="${b(_)}" />
        <label class="block text-sm font-semibold text-gray-700 mt-3 mb-1">อีเมลที่จะให้สิทธิ์ไฟล์</label>
        <input id="copy-target-email" type="email" class="${Ce}" value="${b(q)}" placeholder="teacher@example.com" />
        <p class="text-xs text-gray-400 mt-2">ระบบจะสร้างสำเนาในบัญชีผู้ดูแลและแชร์สิทธิ์แก้ไขให้ email นี้ พร้อมบันทึก Sheet ID กลับเข้ารายวิชาอัตโนมัติ</p>
        <div id="copy-result" class="hidden mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm"></div>
        <div class="flex gap-3 mt-5">
          <button id="copy-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="copy-go" class="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600">สร้างสำเนา</button>
        </div>
      </div>`,document.body.appendChild(P),P.querySelector("#copy-cancel").addEventListener("click",()=>P.remove()),P.addEventListener("click",Z=>{Z.target===P&&P.remove()});const k=Z=>{const V=_sheetCopyUrl(t.id);P.querySelector("#copy-result").innerHTML=`
          <div class="rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p class="font-semibold text-amber-800 mb-1">ใช้วิธีทำสำเนาด้วย Google แทน</p>
            <p class="text-xs text-amber-700 mb-3">${b(Z||"หากสร้างอัตโนมัติไม่สำเร็จ ให้กดปุ่มด้านล่างเพื่อทำสำเนา แล้วนำลิงก์ไฟล์ใหม่มาวาง")}</p>
            <a href="${V}" target="_blank" rel="noopener noreferrer"
              class="block w-full py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-700">
              เปิดหน้าทำสำเนาของ Google
            </a>
            <label class="block text-xs font-semibold text-gray-600 mt-3 mb-1">วางลิงก์หรือ ID ของไฟล์ที่ทำสำเนาเสร็จแล้ว</label>
            <input id="manual-sheet-id" class="${Ce}" placeholder="https://docs.google.com/spreadsheets/d/..." />
            <button id="manual-save-sheet" class="mt-3 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
              บันทึก Sheet ID เข้ารายวิชา
            </button>
          </div>`,P.querySelector("#copy-result").classList.remove("hidden"),P.querySelector("#manual-save-sheet").addEventListener("click",async()=>{const se=P.querySelector("#manual-sheet-id"),re=_extractSheetId(se.value);if(!re){F("กรุณาวางลิงก์หรือ Sheet ID ของไฟล์สำเนา","warning");return}try{await at(n.id,{google_sheet_id:re}),n.google_sheet_id=re,F("บันทึก Sheet ID เข้ารายวิชาแล้ว","success"),P.remove(),Le(e)}catch(l){F("บันทึก Sheet ID ไม่สำเร็จ: "+ce(l),"error")}})};P.querySelector("#copy-go").addEventListener("click",async()=>{const Z=P.querySelector("#copy-go"),V=P.querySelector("#copy-file-name").value.trim()||_||"สำเนาไฟล์ ปพ.5",se=P.querySelector("#copy-target-email").value.trim();Z.disabled=!0,Z.textContent="กำลังสร้าง...";try{const re=await wn(t.id,V,se),l=re.newSheetId;if(!l)throw new Error("GAS ไม่ได้ส่ง Sheet ID กลับมา");await at(n.id,{google_sheet_id:l}),n.google_sheet_id=l;const h=re.url||_sheetUrl(l);P.querySelector("#copy-result").innerHTML=`
            <p class="font-semibold text-emerald-800 mb-2">สร้างไฟล์สำเนาและบันทึกเข้ารายวิชาแล้ว</p>
            <button id="copy-open" class="w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">เปิดไฟล์สำเนา</button>`,P.querySelector("#copy-result").classList.remove("hidden"),P.querySelector("#copy-open").addEventListener("click",()=>window.open(h,"_blank")),Z.textContent="สร้างแล้ว",F("สร้างสำเนาและบันทึก Sheet ID แล้ว","success"),setTimeout(()=>Le(e),900)}catch(re){Z.disabled=!1,Z.textContent="สร้างสำเนา",F("สร้างอัตโนมัติไม่สำเร็จ เปิดวิธีทำสำเนาด้วย Google แทน","warning"),k(ce(re))}})},window._openSheetToolsModal=s=>{var _,q,P;const n=(_=window._classCache)==null?void 0:_[s];if(!(n!=null&&n.google_sheet_id))return;(q=document.getElementById("sheet-tools-modal"))==null||q.remove();const t=_sheetUrl(n.google_sheet_id),i=document.createElement("div");i.id="sheet-tools-modal",i.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",i.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${b(((P=n.master_subjects)==null?void 0:P.subject_name)||"")} · ${b(n.class_name||"")}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">🔗 Sync ข้อมูลไปชีท</button>
        </div>
        <button id="btn-sheet-tools-close" class="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>`,document.body.appendChild(i),i.querySelector("#btn-sheet-tools-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",k=>{k.target===i&&i.remove()}),i.querySelector("#btn-open-sheet").addEventListener("click",()=>window.open(t,"_blank")),i.querySelector("#btn-copy-sheet").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t),F("คัดลอกลิงก์ชีทแล้ว","success")}catch{F("คัดลอกไม่สำเร็จ","error")}}),i.querySelector("#btn-share-sheet").addEventListener("click",async()=>{const k=i.querySelector("#btn-share-sheet");k.disabled=!0,k.textContent="⏳ กำลังเปิดสิทธิ์...";try{const{shareSheetForView:S}=await fe(async()=>{const{shareSheetForView:$}=await import("./sync-CtuAgrx7.js");return{shareSheetForView:$}},__vite__mapDeps([6,7,5]));await S(n.google_sheet_id),F("ส่งคำสั่งเปิดสิทธิ์แล้ว กรุณารอสักครู่แล้วลองเปิดลิงก์","success"),k.textContent="✅ ส่งคำสั่งเปิดสิทธิ์แล้ว"}catch(S){k.disabled=!1,k.textContent="🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้",F("เปิดสิทธิ์ไม่สำเร็จ: "+ce(S),"error")}}),i.querySelector("#btn-open-sync").addEventListener("click",()=>{i.remove(),window._openSyncModal(s)})},window._openSyncModal=s=>{var i,_;const n=(i=window._classCache)==null?void 0:i[s];if(!n)return;(_=document.getElementById("sync-modal"))==null||_.remove();const t=document.createElement("div");t.id="sync-modal",t.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`
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
        </div>`,document.body.appendChild(t),t.querySelector("#btn-sync-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",q=>{q.target===t&&t.remove()}),t.querySelector("#btn-sync-go").addEventListener("click",async()=>{var u,m,E,ee,Q;const q=t.querySelector("#sync-opt-info").checked,P=t.querySelector("#sync-opt-att").checked,k=t.querySelector("#sync-opt-score").checked;if(!q&&!P&&!k){F("เลือกอย่างน้อย 1 รายการ","warning");return}const S=t.querySelector("#btn-sync-go"),$=t.querySelector("#sync-progress");S.disabled=!0,S.textContent="⏳ กำลัง Sync...",$.classList.remove("hidden");const{syncClassInfo:Z,syncAttendance:V,syncScores:se}=await fe(async()=>{const{syncClassInfo:z,syncAttendance:ne,syncScores:g}=await import("./sync-CtuAgrx7.js");return{syncClassInfo:z,syncAttendance:ne,syncScores:g}},__vite__mapDeps([6,7,5])),{getDepartments:re,getTeachers:l,getScoreColumns:h,getStudentScores:L,getTeacherById:a}=await fe(async()=>{const{getDepartments:z,getTeachers:ne,getScoreColumns:g,getStudentScores:d,getTeacherById:j}=await import("./api-CWYJTdOa.js");return{getDepartments:z,getTeachers:ne,getScoreColumns:g,getStudentScores:d,getTeacherById:j}},__vite__mapDeps([1,2,3,4,5])),c=[];try{if(q){$.textContent="📋 Sync ข้อมูลรายวิชา...";const[z,ne,g]=await Promise.all([re().catch(()=>[]),l().catch(()=>[]),(u=n.master_subjects)!=null&&u.teacher_id?a(n.master_subjects.teacher_id).catch(()=>null):Promise.resolve(null)]),d=g??e,j=z.find(w=>{var te;return w.dept_name===((te=n.master_subjects)==null?void 0:te.dept)}),U=j!=null&&j.teacher_code?ne.find(w=>w.teacher_code===j.teacher_code):null,K=(j==null?void 0:j.head_name)||(U==null?void 0:U.full_name)||"";await Z(n.google_sheet_id,n,{full_name:(d==null?void 0:d.full_name)??"",phone:(d==null?void 0:d.phone)??""},{headStudentName:((m=n.students)==null?void 0:m.full_name)??"",deptName:((E=n.master_subjects)==null?void 0:E.dept)??"",headDeptName:K})}}catch(z){c.push("รายวิชา: "+ce(z))}try{if(P){$.textContent="✅ Sync เช็คชื่อ...";const z=((ee=n.master_subjects)==null?void 0:ee.credit)??1,ne=((Q=n.master_subjects)==null?void 0:Q.subject_group)==="ACDMVOC",g=ne?await Ds(n.id).catch(()=>[]):[],d=Bn(n,z,g.length?g:null,ne),[j,U]=await Promise.all([De(s),getClassAttendanceAll(s)]),K={};for(const w of U)K[w.student_id]||(K[w.student_id]={}),K[w.student_id][w.session_number]=w.status;await V(n.google_sheet_id,d,K,j)}}catch(z){c.push("เช็คชื่อ: "+ce(z))}try{if(k){$.textContent="📝 Sync คะแนน...";const[z,ne,g]=await Promise.all([h(s),L(s),De(s)]);z.length&&await se(n.google_sheet_id,z,ne,g)}}catch(z){c.push("คะแนน: "+ce(z))}t.remove(),c.length?F(`Sync บางส่วนไม่สำเร็จ:
`+c.join(`
`),"error"):F(`Sync สำเร็จ — ${n.class_name}`,"success")})}}catch(C){console.error("[renderMyClasses] โหลดข้อมูลห้องเรียนไม่สำเร็จ",C);const R=b((C==null?void 0:C.message)||"ไม่ทราบสาเหตุ");_e(`<div class="max-w-xl mx-auto mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-3xl mb-3">⚠️</p>
      <h3 class="font-bold text-red-700">โหลดข้อมูลห้องเรียนไม่สำเร็จ</h3>
      <p class="mt-2 text-sm text-red-600 break-words">${R}</p>
      <button id="retry-my-classes" class="mt-5 px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">ลองใหม่</button>
    </div>`),(T=document.getElementById("retry-my-classes"))==null||T.addEventListener("click",()=>Le(e)),F("โหลดข้อมูลห้องเรียนไม่สำเร็จ: "+ce(C),"error")}}async function Mt(e,o,r={}){je("my-classes"),Ie("ห้องเรียน"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[p,T,C]=await Promise.all([r.classes?Promise.resolve(r.classes):pt((e==null?void 0:e.id)??null),$e().catch(()=>({})),ss().catch(()=>[])]),R=p,A=R.find(t=>t.id===o);if(!A){r.supervisorMode||Le(e);return}const x=A.master_subjects??{},H=Object.fromEntries(C.map(t=>[t.id,t])),O=A.classroom_id?H[A.classroom_id]:null;window._classCache=Object.fromEntries(R.map(t=>[t.id,t]));const X=parseInt(T.academicYear??2568),y=parseInt(T.semester??1),[M,G,B]=await Promise.all([e!=null&&e.id?Ve(e.id,X,y).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?Et(e.id).catch(()=>[]):Promise.resolve([]),ut().catch(()=>[])]),ae={};G.forEach(t=>{ae[t.class_id]||(ae[t.class_id]=[]),ae[t.class_id].push(t.teacher_schedule_id)});const oe=Object.fromEntries(M.map(t=>[t.id,t])),J=Object.fromEntries(B.map(t=>[t.period_no,t])),f=(!r.supervisorMode&&(e!=null&&e.id)?await Ps(e.id).catch(()=>[]):[]).some(t=>t.package_type==="donation"&&t.status==="approved"),I=_t(T,A),v=["AGM","AGMVOC"].includes(x.subject_group),W=A.google_sheet_id?`<button onclick="window._openSheetToolsModal(${o})" class="btn-action teal">⚙️ จัดการชีท</button>`:I!=null&&I.id?`<button onclick="window._openClassCopyModal(${o})" class="btn-action amber">🔗 ทำสำเนาชีท</button>`:"";_e(`
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
            <p class="font-bold text-gray-800 text-sm leading-tight truncate">${b(x.subject_name??"—")}</p>
            <p class="text-xs text-gray-500 truncate">
              <span class="font-mono text-emerald-600">${b(x.subject_code??"")}</span>
              <span class="mx-1">·</span>${b(A.class_name??"")}${O?` · 📍 ${b(O.building)} ${b(O.room_number)}`:""}
            </p>
          </div>
          <!-- badges desktop only -->
          <div class="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            ${A.skill_group?`<span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">${b(A.skill_group)}</span>`:""}
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
          <button onclick="event.stopPropagation();window._deleteClass(${o},'${(A.class_name??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'")}')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-red-100 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-1.5">
            🗑️ <span>ลบ</span>
          </button>
        </div>

        <template id="cd-group-tpl-docs">
          <button onclick="window._closeActionGroupPopup();window._openPP5Doc(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">💾 ปพ.5</button>
          <button onclick="window._closeActionGroupPopup();window._openExamDocsForClass(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🧾 เอกสารสอบ</button>
          ${A.google_sheet_id?`
          <button onclick="window._closeActionGroupPopup();window._openSheetToolsModal(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⚙️ จัดการชีท</button>`:I!=null&&I.id?`
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
    </style>`);const D=()=>document.getElementById("cd-tab-content");window._backToClasses=()=>{Le(e)};const s={docs:{title:"📄 เอกสาร",grad:"linear-gradient(135deg,#7c3aed,#6366f1)"},tools:{title:"🛠️ เครื่องมือห้องเรียน",grad:"linear-gradient(135deg,#f59e0b,#ec4899)"},assist:{title:"🤖 ผู้ช่วยครู",grad:"linear-gradient(135deg,#6366f1,#06b6d4)"}};window._closeActionGroupPopup=()=>{var t;return(t=document.getElementById("cd-action-popup"))==null?void 0:t.remove()},window._openActionGroupPopup=t=>{window._closeActionGroupPopup();const i=document.getElementById(`cd-group-tpl-${t}`),_=s[t];if(!i||!_)return;const q=document.createElement("div");q.id="cd-action-popup",q.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 animate-fade",q.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div style="background:${_.grad}" class="px-4 py-3 flex items-center justify-between">
            <h3 class="text-white font-bold text-sm">${_.title}</h3>
            <button id="cd-action-popup-close" class="text-white/90 hover:text-white text-2xl leading-none px-1">&times;</button>
          </div>
          <div class="p-2 flex flex-col gap-0.5">${i.innerHTML}</div>
        </div>`,document.body.appendChild(q),q.querySelector("#cd-action-popup-close").addEventListener("click",window._closeActionGroupPopup),q.addEventListener("click",P=>{P.target===q&&window._closeActionGroupPopup()})},window._openPP5Doc=t=>us(t),window._openExamDocsForClass=t=>_s(t),r.supervisorMode||(window._openStudentManager=t=>$s(e,t)),window._openCombinedEdit2=t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];i&&Es(e,i,C,M,ae,J,oe,()=>Mt(e,t))},window._openRandomPickerModal=async t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];if(i)try{const q=await De(t);if(!q.length){F("ห้องนี้ยังไม่มีนักเรียน","warning");return}const P=q.map((k,S)=>({...k,seat_no:S+1}));await Ss(t,i,P,f)}catch{F("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}},window._openTimerModal=t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];i&&so(t,i,f)},window._openSmartClassroom=t=>{fe(()=>import("./teacher-views-smart-classroom-DZSSjXJI.js"),__vite__mapDeps([8,7,1,2,3,4,5,9,10,11,6,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,0,34,35,36])).then(i=>i.renderSmartClassroom(e,t))},window._openClassroomChat=t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];fe(()=>import("./chat-classroom-QsACduN9.js"),__vite__mapDeps([37,1,2,3,4,5,38,16,7,31,22])).then(q=>q.openTeacherClassroomChat(e,t,i==null?void 0:i.class_name))},window._openClassFlashcardsModal=async t=>{var _;if((_=window._classCache)!=null&&_[t])try{const q=await Hs(e.id);ro(e,t,q)}catch(q){F("โหลดชุดบัตรคำไม่สำเร็จ: "+ce(q),"error")}},window._openPromptGenModal=async t=>{var _;const i=(_=window._classCache)==null?void 0:_[t];i&&await ks(e,t,i,window._pp5SystemCfg??{})},window._deleteClass=async(t,i)=>{if(await ct({title:`ลบห้องเรียน "${i}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await ns(t),F(`ลบ "${i}" แล้ว`,"success"),Le(e)}catch{F("ลบไม่สำเร็จ","error")}},window._loadClassTab=async t=>n(t);const n=async t=>{document.querySelectorAll(".cd-tab").forEach(q=>{const P=q.dataset.tab===t;q.className=P?"cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center":"cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center"});const i=document.getElementById("cd-tab-content");if(!i)return;i.innerHTML=`<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>`;const _=Tn();Ht(i);try{t==="students"?await window._openStudentManager(o):t==="attendance"?await qt(e,A):t==="grades"&&await Ct(e,A)}catch(q){console.error(q),i.innerHTML='<div class="p-6 text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>'}finally{Ht(_)}je("my-classes"),Ie("ห้องเรียน")};document.querySelectorAll(".cd-tab").forEach(t=>t.addEventListener("click",()=>n(t.dataset.tab))),n(r.defaultTab??"students")}catch(p){console.error(p),F("โหลดข้อมูลไม่สำเร็จ","error")}}const ao=[{value:"none",label:"ไม่จำ — สุ่มอิสระทุกครั้ง (มีโอกาสซ้ำ)"},{value:"session",label:"จำเฉพาะตอนนี้ — รีเซ็ตอัตโนมัติเมื่อปิดหน้าต่างนี้"},{value:"cycle",label:"จำจนครบทุกคน แล้ววนรอบใหม่อัตโนมัติ"},{value:"manual",label:"จำตลอดไป จนกว่าจะกดรีเซ็ตเอง"}];function Wt(e){const o=["#f59e0b","#ec4899","#10b981","#6366f1","#ef4444","#06b6d4","#8b5cf6"];e.style.position="relative",e.style.overflow="hidden";for(let r=0;r<26;r++){const p=document.createElement("div"),T=o[Math.floor(Math.random()*o.length)],C=Math.random()*100,R=1.1+Math.random()*.7,A=Math.random()*.25,x=Math.random()*360;p.style.cssText=`position:absolute;top:-12px;left:${C}%;width:7px;height:13px;background:${T};opacity:0.9;border-radius:2px;transform:rotate(${x}deg);pointer-events:none;animation:rp-confetti-fall ${R}s ${A}s ease-in forwards;`,e.appendChild(p),setTimeout(()=>p.remove(),(R+A)*1e3+250)}}function ro(e,o,r){var C;(C=document.getElementById("class-flashcards-modal"))==null||C.remove();const p=document.createElement("div");p.id="class-flashcards-modal",p.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4";let T="";!r||r.length===0?T=`
      <div class="text-center py-8 text-gray-500">
        <p class="text-4xl mb-2">🃏</p>
        <p class="text-sm font-medium">คุณครูยังไม่มีชุดบัตรคำศัพท์เลยครับ</p>
        <p class="text-xs text-gray-400 mt-1">สามารถสร้างชุดบัตรคำศัพท์ใหม่ได้ที่เมนู "บัตรคำศัพท์" ในเมนูหลัก</p>
      </div>
    `:T=`
      <div class="grid gap-3 max-h-[60vh] overflow-y-auto pr-1 w-full">
        ${r.map(R=>`
          <button class="select-deck-btn w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition flex items-center justify-between gap-3 group"
            data-deck-id="${R.id}">
            <div>
              <p class="font-bold text-gray-800 text-sm group-hover:text-indigo-700 transition">${b(R.title)}</p>
              ${R.description?`<p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${b(R.description)}</p>`:""}
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

      ${T}
    </div>
  `,document.body.appendChild(p),p.querySelector("#cf-modal-close").addEventListener("click",()=>p.remove()),p.addEventListener("click",R=>{R.target===p&&p.remove()}),p.querySelectorAll(".select-deck-btn").forEach(R=>{R.addEventListener("click",()=>{const A=R.dataset.deckId,x=r.find(H=>H.id===A);x&&(p.remove(),fe(()=>import("./teacher-views-flashcards-VQwdZYvD.js"),__vite__mapDeps([39,7,1,2,3,4,5,16])).then(H=>{H.renderFlashcardPlay(e,x,o)}))})})}function lo(e){var o;return((o=String((e==null?void 0:e.donationSpecialFeatures)??"").split(`
`).map(r=>{const p=r.split("|");return{text:p[1]??"",minTier:parseInt(p[2])||1}}).find(r=>r.text.includes("Prompt")))==null?void 0:o.minTier)??1}const Kt=[{value:"บรรยาย",label:"บรรยาย (Lecture)"},{value:"กิจกรรมกลุ่ม",label:"กิจกรรมกลุ่ม (Group Activity)"},{value:"โครงงานเป็นฐาน",label:"โครงงานเป็นฐาน (Project-based)"},{value:"สืบเสาะหาความรู้",label:"สืบเสาะหาความรู้ (Inquiry-based)"},{value:"other",label:"อื่นๆ (พิมพ์เอง)"}],Jt={th:"ภาษาไทย",en:"ภาษาอังกฤษ (English)",ar:"ภาษาอาหรับ (العربية)","ms-rumi":"ภาษามลายู อักษรรูมี (Bahasa Melayu, Rumi)","ms-jawi":"ภาษามลายูปัตตานี อักษรยาวี (Jawi)"},Xt=[{key:"worksheet",text:"ใบงาน/ใบกิจกรรม",imageFormat:"กระดาษ A4 แนวตั้ง พร้อมพิมพ์แจกนักเรียนได้จริง",imageContent:"ใบงาน/ใบกิจกรรมที่มีคำสั่งชัดเจนและเว้นที่ว่างให้กรอกคำตอบ"},{key:"slides",text:"โครงร่างสไลด์นำเสนอ",imageFormat:"สไลด์นำเสนอ อัตราส่วน 16:9",imageContent:"สไลด์นำเสนอแต่ละแผ่น มีข้อความหลักและภาพประกอบที่เหมาะกับเนื้อหาคาบนี้"},{key:"questions",text:"คำถามกระตุ้นความคิด/อภิปราย",imageFormat:"โปสเตอร์/การ์ดคำถามขนาด A4 สำหรับติดในห้องเรียนหรือเปิดฉาย",imageContent:"คำถามกระตุ้นความคิดอย่างน้อย 5 ข้อ เรียงลำดับจากง่ายไปยาก จัดวางให้อ่านง่ายน่าสนใจ"},{key:"rubric",text:"เกณฑ์ให้คะแนน (Rubric)",imageFormat:"ตารางขนาด A4 จัดวางเป็นตารางอ่านง่าย",imageContent:"เกณฑ์การให้คะแนน (Rubric) แบบ 4 ระดับคุณภาพ พร้อมคำอธิบายแต่ละระดับ"},{key:"game",text:"เกม/กิจกรรมเสริมท้ายคาบ",imageFormat:"การ์ด/กระดานกิจกรรมขนาด A4 พร้อมพิมพ์ใช้งานได้จริง",imageContent:"อุปกรณ์/การ์ดเกมหรือกระดานกิจกรรมเสริมท้ายคาบ เพื่อทบทวนเนื้อหา ใช้เวลาไม่เกิน 10 นาที"}],io={บรรยาย:[],กิจกรรมกลุ่ม:["worksheet","rubric","game"],โครงงานเป็นฐาน:["worksheet","rubric","questions"],สืบเสาะหาความรู้:["questions","worksheet"],other:[]};function co({subjectName:e,subjectCode:o,gradeLevel:r,className:p,studentCount:T,avgPct:C,topic:R,format:A,periods:x,minutesPerPeriod:H,isReligionSubj:O,mediaItems:X,langKey:y,langLabel:M}){const G=x*H,B=x>1?`${x} คาบต่อเนื่อง (คาบละ ${H} นาที รวม ${G} นาที)`:`1 คาบ (${H} นาที)`,ae=y==="ms-jawi"?" (เขียนด้วยอักขระยาวี Jawi เท่านั้น ห้ามใช้อักษรรูมี)":"",oe=O?["คุณคือผู้ช่วยครูอิสลามศึกษาไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรอิสลามศึกษา พุทธศักราช 2551"]:["คุณคือผู้ช่วยครูไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551 (ฉบับปรับปรุง พ.ศ. 2560)"];return oe.push("","บริบทวิชา:",`- วิชา: ${e} (รหัส ${o})`,`- ระดับชั้น: ${r}   ห้อง: ${p}`,`- จำนวนนักเรียน: ${T} คน`),C!=null&&oe.push(`- คะแนนเฉลี่ยสะสมของห้องนี้ในขณะนี้: ${C}% (ใช้พิจารณาความยาก-ง่ายของกิจกรรม)`),oe.push("",`หัวข้อที่จะสอนคาบนี้: ${R}`,`รูปแบบการสอนที่ต้องการ: ${A}`,`ระยะเวลา: ${B}`,"",`คำสั่งต่อไปนี้เขียนเป็นภาษาไทยเพื่อให้คุณเข้าใจชัดเจน แต่เนื้อหาที่สร้างขึ้นจริงทั้งหมด (แผนการสอน, ใบงาน, สื่อ, ข้อความในภาพ) ต้องเป็น${M}${ae}`,"","กรุณาออกแบบแผนการจัดการเรียนรู้ที่ประกอบด้วย:","1. จุดประสงค์การเรียนรู้ (ด้านความรู้ K / ทักษะ P / เจตคติ A)","2. สาระสำคัญ (Key Concept)",`3. กิจกรรมการเรียนรู้ แบ่งเป็น 3 ขั้น พร้อมระบุเวลาแต่ละขั้นตอนชัดเจน (รวม ${G} นาที)${x>1?" — หากมีมากกว่า 1 คาบ กรุณาแบ่งกิจกรรมเป็นรายคาบให้ชัดเจน (คาบที่ 1: ..., คาบที่ 2: ...)":""}:`,"   - นำเข้าสู่บทเรียน","   - กิจกรรมหลัก","   - สรุป/wrap-up","4. สื่อ/อุปกรณ์ที่ต้องใช้","5. วิธีการวัดและประเมินผลในคาบ","6. งาน/การบ้าน (ถ้ามี)","7. หมายเหตุสำหรับครู — สิ่งที่ต้องเตรียมหรือระวังเป็นพิเศษ",`8. เขียนคำสั่งสร้างภาพ (Image Generation Prompt) เป็นภาษาไทย แยกไว้ในกล่องโค้ดของตัวเอง สำหรับสร้างภาพสรุปแผนการจัดการเรียนรู้ทั้งหมดนี้ (ข้อความที่ปรากฏจริงในภาพเป็น${M}${ae}) ให้อยู่ในภาพเดียวหน้าเดียว (One-Page Lesson Plan) ขนาดกระดาษ A4 จัดวางให้อ่านง่าย ครบทุกหัวข้อสำคัญ (จุดประสงค์, สาระสำคัญ, กิจกรรม 3 ขั้น, สื่อ/อุปกรณ์, การวัดประเมินผล) ก่อนกล่องโค้ดนี้ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง`,"","หมายเหตุสำคัญ: หากเนื้อหาวิชานี้เกี่ยวข้องกับสมการ สูตร หรือสัญลักษณ์ทางคณิตศาสตร์/วิทยาศาสตร์ กรุณาเขียนด้วยรูปแบบ LaTeX เสมอ (เช่น $y = mx + b$ หรือสมการซับซ้อนใช้ $$...$$) เพื่อให้สมการถูกต้องแม่นยำและอ่านง่าย ห้ามพิมพ์สมการเป็นข้อความธรรมดาที่อาจอ่านผิดเพี้ยน"),X!=null&&X.length&&(oe.push("",`สื่อ/เอกสารประกอบเพิ่มเติม (นอกเหนือจากแผนการสอน) — ห้ามเขียนเนื้อหาเป็นข้อความอ่านตรงๆ แต่ให้เขียนเป็น "คำสั่งสร้างภาพ" (Image Generation Prompt) เป็นภาษาไทย สำหรับป้อนให้ AI สร้างรูปภาพต่อ (ข้อความที่ปรากฏจริงในภาพให้เป็น${M}${ae}) เพื่อให้ได้ไฟล์ภาพพร้อมใช้งานจริง โดยมีกติกาดังนี้:`,"- แต่ละรายการด้านล่างให้เขียนคำสั่งสร้างภาพแยกเป็นคนละกล่องโค้ด (code block) ต่อ 1 รายการ ไม่ปนกัน","- ออกแบบจำนวนภาพ/หน้าให้เหมาะสมกับเนื้อหา สูงสุดไม่เกิน 10 ภาพต่อกล่องโค้ด 1 กล่อง","- ถ้ารายการใดต้องใช้มากกว่า 10 ภาพ ให้แบ่งเป็นกล่องโค้ดใหม่ต่อจากกัน กล่องละไม่เกิน 10 ภาพ",'- ภายในกล่องโค้ดเดียวกัน ให้ระบุคำสั่งของแต่ละภาพแยกกันให้ครบและชัดเจน (เช่น "ภาพที่ 1: ...", "ภาพที่ 2: ...")',"- แต่ละคำสั่งต้องอธิบายรายละเอียดกราฟิก เค้าโครง และข้อความที่ต้องปรากฏในภาพให้ชัดเจนพอที่ AI สร้างภาพจะสร้างออกมาได้ตรงตามต้องการ","- ก่อนกล่องโค้ดแรกของแต่ละรายการ ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง","","รายการที่ต้องการ:"),X.forEach((J,ie)=>oe.push(`${ie+1}. ${J.text} — รูปแบบภาพ: ${J.imageFormat} — เนื้อหาที่ต้องปรากฏ: ${J.imageContent}`))),oe.join(`
`)}function et(e){return b(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}function po(e){const o=String(e??"").split(`
`);let r="",p=!1,T=[],C=null;const R=()=>{C&&(r+=`</${C}>`,C=null)};for(const A of o){const x=A.replace(/\r$/,"");if(x.trim().startsWith("```")){p?(r+=`<pre>${b(T.join(`
`))}</pre>`,T=[],p=!1):(R(),p=!0);continue}if(p){T.push(x);continue}const H=x.match(/^(#{1,3})\s+(.*)$/);if(H){R();const y=H[1].length;r+=`<h${y}>${et(H[2])}</h${y}>`;continue}const O=x.match(/^\s*[-*]\s+(.*)$/);if(O){C!=="ul"&&(R(),r+="<ul>",C="ul"),r+=`<li>${et(O[1])}</li>`;continue}const X=x.match(/^\s*\d+[.)]\s+(.*)$/);if(X){C!=="ol"&&(R(),r+="<ol>",C="ol"),r+=`<li>${et(X[1])}</li>`;continue}R(),r+=x.trim()?`<p>${et(x)}</p>`:"<p>&nbsp;</p>"}return R(),p&&T.length&&(r+=`<pre>${b(T.join(`
`))}</pre>`),r}function Zt(e){return String(e??"").replace(/[\\/:*?"<>|]/g," ").trim().slice(0,60)||"เอกสาร"}function uo(e,o){const p=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>แผนการจัดการเรียนรู้</title>
    <style>
      body{font-family:'TH Sarabun New','Angsana New',Tahoma,sans-serif;font-size:16pt;line-height:1.6;}
      h1{font-size:22pt;} h2{font-size:19pt;} h3{font-size:17pt;}
      pre{font-family:'Courier New',monospace;font-size:12pt;background:#f5f5f5;padding:10px;border:1px solid #ccc;white-space:pre-wrap;}
    </style></head><body>${po(e)}</body></html>`,T=new Blob(["\uFEFF",p],{type:"application/msword"}),C=URL.createObjectURL(T),R=document.createElement("a");R.href=C,R.download=o,document.body.appendChild(R),R.click(),R.remove(),URL.revokeObjectURL(C)}async function ks(e,o,r,p){var ie;(ie=document.getElementById("prompt-gen-modal"))==null||ie.remove();const T=(r==null?void 0:r.master_subjects)??{},C=window._pp5DonorTierIndex??0,R=lo(p),A=["AGM","AGMVOC"].includes(T.subject_group),x=p==null?void 0:p.freePromptAiLimit;let H=1;if(x!==void 0&&x!==""){const f=parseInt(x,10);Number.isFinite(f)&&(H=f)}const O=parseInt(localStorage.getItem("pp5_free_promptai_count")||"0",10),X=H>0&&O<H,y=C<R,M=document.createElement("div");if(M.id="prompt-gen-modal",M.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4",y&&!X){M.innerHTML=`
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="pg-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-800 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${R}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">✍️ ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว<br>ทดลองใช้ฟรีครบ ${H} ครั้งแล้ว<br>สนับสนุนโครงการเพื่อใช้งานต่อแบบไม่จำกัด</p>
        <button id="pg-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`,document.body.appendChild(M),M.querySelector("#pg-close").addEventListener("click",()=>M.remove()),M.querySelector("#pg-upgrade").addEventListener("click",()=>{var f;M.remove(),(f=document.getElementById("btn-donate-float"))==null||f.click()}),M.addEventListener("click",f=>{f.target===M&&M.remove()});return}M.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-fade">
      <div class="flex items-center gap-3 px-6 pt-6 pb-3 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">✍️ สร้าง Prompt สำหรับ AI</h3>
          <p class="text-xs text-gray-400 mt-0.5">นำ Prompt ที่ได้ไปวางใน ChatGPT / Gemini / Claude ของคุณครูเองได้เลย</p>
          ${y?`<span class="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">✨ ทดลองใช้งานฟรี (ครั้งที่ ${O+1}/${H})</span>`:""}
        </div>
        <button id="pg-close" class="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      </div>
      <div class="px-6 pb-6 overflow-y-auto" id="pg-body">
        <div class="flex justify-center py-10 text-gray-400 text-sm">กำลังโหลดข้อมูลห้องเรียน...</div>
      </div>
    </div>`,document.body.appendChild(M),M.querySelector("#pg-close").addEventListener("click",()=>M.remove()),M.addEventListener("click",f=>{f.target===M&&M.remove()});const G=M.querySelector("#pg-body");let B=0,ae=null;try{const[f,I]=await Promise.all([De(o).catch(()=>[]),Zs(o).catch(()=>({columns:[],scores:[]}))]);B=f.length;const v=(I.columns??[]).reduce((W,D)=>W+(D.max_score??0),0);if(v>0&&B>0){const W=(I.scores??[]).reduce((D,s)=>D+(s.final_score??0),0);ae=Math.round(W/B/v*100)}}catch{}const oe=()=>{G.innerHTML=`
      <div class="bg-gray-50 rounded-2xl p-4 mb-4 text-xs text-gray-600 space-y-1">
        <p><strong class="text-gray-800">${b(T.subject_name??"—")}</strong> (${b(T.subject_code??"—")})</p>
        <p>ระดับชั้น ${b(T.grade_level??"—")} · ห้อง ${b(r.class_name??"—")} · นักเรียน ${B} คน</p>
        ${ae!=null?`<p>คะแนนเฉลี่ยสะสมปัจจุบัน: <strong class="text-emerald-600">${ae}%</strong></p>`:""}
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">หัวข้อที่จะสอนคาบนี้ <span class="text-red-400">*</span></label>
          <textarea id="pg-topic" rows="2" class="${Ce} resize-none" placeholder="เช่น สมการกำลังสอง, การสังเคราะห์แสง"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">รูปแบบการสอนที่ต้องการ</label>
          <select id="pg-format" class="${$t}">
            ${Kt.map(D=>`<option value="${D.value}">${b(D.label)}</option>`).join("")}
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
            ${Xt.map(D=>`
              <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" class="pg-media-cb rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" value="${D.key}" />
                ${b(D.text)}
              </label>`).join("")}
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">ภาษาที่ต้องการให้ AI ตอบ</label>
          <select id="pg-lang" class="${$t}">
            ${Object.entries(Jt).map(([D,s])=>`<option value="${D}">${b(s)}</option>`).join("")}
          </select>
        </div>
        <button id="pg-generate" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">
          ✨ สร้าง Prompt
        </button>
      </div>`;const f=G.querySelector("#pg-format"),I=G.querySelector("#pg-format-other"),v=()=>[...G.querySelectorAll(".pg-media-cb")],W=()=>{const D=io[f.value]??[];v().forEach(s=>{s.checked=D.includes(s.value)})};W(),f.addEventListener("change",()=>{I.classList.toggle("hidden",f.value!=="other"),W()}),G.querySelector("#pg-generate").addEventListener("click",()=>{var k;const D=G.querySelector("#pg-topic").value.trim();if(!D){F("กรุณาระบุหัวข้อที่จะสอนก่อนครับ","warning");return}const s=f.value==="other"?I.value.trim()||"ไม่ระบุ":((k=Kt.find(S=>S.value===f.value))==null?void 0:k.label)??f.value,n=Math.max(1,parseInt(G.querySelector("#pg-periods").value,10)||1),t=Math.max(1,parseInt(G.querySelector("#pg-minutes").value,10)||50),i=v().filter(S=>S.checked).map(S=>Xt.find($=>$.key===S.value)).filter(Boolean),_=G.querySelector("#pg-lang").value,q=Jt[_],P=co({subjectName:T.subject_name??"—",subjectCode:T.subject_code??"—",gradeLevel:T.grade_level??"—",className:r.class_name??"—",studentCount:B,avgPct:ae,topic:D,format:s,periods:n,minutesPerPeriod:t,isReligionSubj:A,mediaItems:i,langKey:_,langLabel:q});y&&localStorage.setItem("pp5_free_promptai_count",String(O+1)),J(P,D)})},J=(f,I)=>{G.innerHTML=`
      <p class="text-xs text-gray-500 mb-2">คัดลอกข้อความด้านล่างไปวางใน ChatGPT / Gemini / Claude ของคุณครูได้เลยครับ</p>
      <textarea id="pg-output" readonly rows="14" class="w-full text-xs font-mono border border-gray-200 rounded-2xl p-3 bg-gray-50 text-gray-700 resize-none">${b(f)}</textarea>
      <div class="flex gap-2 mt-3">
        <button id="pg-copy" class="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">📋 คัดลอก Prompt</button>
        <button id="pg-back" class="px-4 py-3 rounded-2xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition">← แก้ไข</button>
      </div>
      <div class="mt-5 pt-4 border-t border-gray-100">
        <p class="text-xs font-semibold text-gray-700 mb-1">📄 ขั้นตอนถัดไป (ถ้าต้องการ): ดาวน์โหลดเป็นไฟล์ Word</p>
        <p class="text-xs text-gray-400 mb-2">พอ AI ตอบกลับมาแล้ว วางคำตอบทั้งหมดที่ได้ลงในช่องนี้ แล้วกดดาวน์โหลด — จะได้ไฟล์ Word (.doc) ที่เปิดแก้ไขต่อได้เลย</p>
        <textarea id="pg-ai-response" rows="8" class="${Ce} resize-y font-mono text-xs" placeholder="วางคำตอบจาก ChatGPT / Gemini / Claude ที่นี่..."></textarea>
        <button id="pg-download-word" class="w-full mt-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition">📄 ดาวน์โหลดเป็นไฟล์ Word (.doc)</button>
      </div>`,G.querySelector("#pg-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(f),F("คัดลอก Prompt แล้วครับ","success")}catch{F("คัดลอกไม่สำเร็จ กรุณาเลือกข้อความแล้วคัดลอกเองครับ","error")}}),G.querySelector("#pg-back").addEventListener("click",oe),G.querySelector("#pg-download-word").addEventListener("click",()=>{const v=G.querySelector("#pg-ai-response").value.trim();if(!v){F("กรุณาวางคำตอบจาก AI ก่อนดาวน์โหลดครับ","warning");return}const W=`แผนการสอน_${Zt(T.subject_code)}_${Zt(I)}.doc`;uo(v,W),F("ดาวน์โหลดไฟล์ Word แล้วครับ","success")})};oe()}async function mo(e,o,r,p={}){return ks(e,o,r,p)}async function Ss(e,o,r,p){var re,l;const T=(re=window._pp5SystemCfg)==null?void 0:re.freeRandomPickerLimit;let C=1;if(T!==void 0&&T!==""){const h=parseInt(T,10);Number.isFinite(h)&&(C=h)}(l=document.getElementById("random-picker-modal"))==null||l.remove();const R=()=>{oe.innerHTML=`
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="rp-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-700 text-lg">สิทธิ์สุ่มทดลองใช้งานครบแล้ว</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สุ่มรายชื่อและจัดกลุ่มจำกัดการทดลองสุ่มฟรี ${C} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
        <button id="rp-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,oe.querySelector("#rp-paywall-close").addEventListener("click",()=>oe.remove()),oe.querySelector("#rp-upgrade").addEventListener("click",()=>{var h;oe.remove(),(h=document.getElementById("btn-donate-float"))==null||h.click()})};let A;try{A=await Xs(e)}catch{A={mode:"none",picked_student_ids:[]}}let x=A.mode||"none",H=new Set((A.picked_student_ids||[]).map(Number)),O=new Set;const X=new Map(r.map(h=>[h.id,h]));let y=Array.isArray(A.groups)?A.groups.map(h=>({no:h.no,items:(h.student_ids||[]).map(L=>X.get(L)).filter(Boolean)})):null,M="pick",G=!1,B=localStorage.getItem("pp5_rp_effect")||"classic";const ae=[{key:"classic",icon:"🎯",label:"คลาสสิก"},{key:"grid",icon:"🔦",label:"กริด"},{key:"elimination",icon:"💥",label:"ตัดออก"},{key:"slot",icon:"🎰",label:"สล็อต"}],oe=document.createElement("div");oe.id="random-picker-modal",oe.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",oe.innerHTML=`
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
          <p class="text-white/80 text-xs mt-0.5 truncate">${b(o.class_name||"")} · ทั้งหมด ${r.length} คน</p>
        </div>
        <button id="rp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="pick">🎯 สุ่มรายชื่อ</button>
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="group">👥 สุ่มจัดกลุ่ม</button>
      </div>
      <div id="rp-body" class="p-5 overflow-y-auto flex-1"></div>
    </div>`,document.body.appendChild(oe),oe.addEventListener("click",h=>{h.target===oe&&oe.remove()}),oe.querySelector("#rp-close").addEventListener("click",()=>oe.remove());const J=oe.querySelector("#rp-body"),ie=[...oe.querySelectorAll(".rp-tab")],f=h=>{M=h,ie.forEach(L=>{const a=L.dataset.mode===h;L.className=`rp-tab flex-1 py-2.5 text-sm font-semibold transition ${a?"text-white":"text-gray-500 hover:text-gray-700"}`,L.style.background=a?"linear-gradient(135deg,#f59e0b,#ec4899)":""}),h==="pick"?s():se()};ie.forEach(h=>h.addEventListener("click",()=>{G||f(h.dataset.mode)}));const I=()=>x==="none"?new Set:x==="session"?O:H,v=async h=>{if(x!=="none"){if(x==="session"){O.add(h);return}H.add(h);try{await Rt(e,{mode:x,pickedStudentIds:[...H]})}catch{}}},W=async()=>{H=new Set,O=new Set;try{await Nt(e)}catch{}F("รีเซ็ตการสุ่มแล้ว","success"),M==="pick"&&s()},D=async h=>{if(h!==x){x=h,H=new Set,O=new Set;try{await Rt(e,{mode:h,pickedStudentIds:[]})}catch{}s()}};function s(){const h=I(),L=r.filter(E=>!h.has(E.id)),a=r.length-L.length,c=(E,ee)=>{const Q=`hsl(${E.id*47%360},60%,55%)`,z=E.image_url?`<img src="${b(E.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${Q}">${b((E.full_name??"?").charAt(0))}</div>`;return`<div class="${ee}" data-id="${E.id}">${z}<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${E.seat_no??""}</div></div>`},u=(E,ee=!1)=>`<div id="rp-reel-${E}" class="rp-reel rounded-2xl border-2 border-gray-200 bg-white" style="width:${ee?104:86}px;height:${ee?148:124}px;flex-shrink:0;"><div class="rp-reel-inner flex flex-col items-center justify-center h-full p-2 gap-1" style="transition:opacity .06s ease;"><div class="flex-1 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-gray-300 text-2xl font-bold">?</div><div class="text-[9px] font-bold text-gray-500 truncate w-full text-center leading-none">—</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">·</div></div></div>`,m=()=>B==="grid"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 text-center pt-3 pb-1.5">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-grid" class="grid gap-1 px-2 pb-2" style="grid-template-columns:repeat(auto-fill,minmax(54px,1fr))">
            ${L.map(E=>c(E,"rp-grid-tile")).join("")}
          </div>
        </div>`:B==="elimination"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <div class="flex items-center justify-between pt-2.5 pb-1 px-3">
            <p id="rp-hint" class="text-xs text-gray-400">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
            <span id="rp-elim-counter" class="text-xs font-bold text-gray-500">${L.length} คน</span>
          </div>
          <div id="rp-elim-grid" class="grid gap-1 px-2 pb-2 overflow-y-auto" style="grid-template-columns:repeat(auto-fill,minmax(48px,1fr));max-height:210px;">
            ${L.map(E=>c(E,"rp-elim-tile")).join("")}
          </div>
        </div>`:B==="slot"?`
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
        ${ae.map(E=>`<button class="rp-eff flex-1 py-2 rounded-xl border text-center leading-tight transition ${E.key===B?"border-amber-400 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}" data-eff="${E.key}"><div class="text-base">${E.icon}</div><div class="text-[9px] font-semibold mt-0.5">${E.label}</div></button>`).join("")}
      </div>
      <div class="flex items-center gap-2 mb-3">
        <select id="rp-mode" class="${$t} flex-1 text-xs">
          ${ao.map(E=>`<option value="${E.value}" ${E.value===x?"selected":""}>${E.label}</option>`).join("")}
        </select>
        <button id="rp-reset" class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">🔄 รีเซ็ต</button>
      </div>
      ${x!=="none"?`<p id="rp-counter" class="text-[11px] text-gray-400 mb-3">สุ่มไปแล้ว ${a} / ${r.length} คน${L.length===0?" — ครบทุกคนแล้ว!":""}</p>`:""}
      ${m()}
      <button id="rp-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]" style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 สุ่มเลย!</button>`,J.querySelectorAll(".rp-eff").forEach(E=>{E.addEventListener("click",()=>{G||(B=E.dataset.eff,localStorage.setItem("pp5_rp_effect",B),s())})}),J.querySelector("#rp-mode").addEventListener("change",E=>D(E.target.value)),J.querySelector("#rp-reset").addEventListener("click",()=>{G||W()}),J.querySelector("#rp-go").addEventListener("click",()=>n())}function n(){if(G)return;if(!p&&parseInt(localStorage.getItem("pp5_free_random_count")||"0",10)>=C){R();return}let h=r.filter(m=>!I().has(m.id)),L=!1;if(h.length===0){if(x==="manual"){F('สุ่มครบทุกคนแล้ว — กดปุ่ม "รีเซ็ต" เพื่อเริ่มรอบใหม่',"warning");return}h=r,L=x==="cycle"||x==="session"}G=!0;const a=J.querySelector("#rp-go");a.disabled=!0,a.textContent="🎰 กำลังสุ่ม...";const c=h[Math.floor(Math.random()*h.length)],u=async()=>{if(L){H=new Set,O=new Set;try{await Nt(e)}catch{}}if(await v(c.id),!p){const m=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);localStorage.setItem("pp5_free_random_count",String(m+1))}setTimeout(()=>{G=!1;const m=I(),E=r.length-r.filter(z=>!m.has(z.id)).length,ee=J.querySelector("#rp-counter");if(ee){const z=r.length-E;ee.textContent=`สุ่มไปแล้ว ${E} / ${r.length} คน${z===0?" — ครบทุกคนแล้ว!":""}`}const Q=J.querySelector("#rp-go");if(Q)if(B==="classic")Q.disabled=!1,Q.textContent="🎲 สุ่มอีกครั้ง";else{Q.disabled=!1,Q.textContent="🔁 สุ่มใหม่";const z=Q.cloneNode(!0);Q.replaceWith(z),z.addEventListener("click",()=>s())}},900)};B==="grid"?_(h,c,u):B==="elimination"?q(h,c,u):B==="slot"?P(h,c,u):i(h,c,u)}function t(h,L){h.style.transition="opacity 0.2s ease",h.style.opacity="0",setTimeout(()=>{h.style.borderStyle="solid",h.style.borderColor="#10b981",h.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",h.innerHTML=`<div class="py-5 px-4 text-center">
        <p class="text-xs text-gray-400 mb-3">🎉 ได้คนนี้แหละ!</p>
        <div class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 rp-pop" style="box-shadow:0 8px 24px rgba(0,0,0,.18);">${L.image_url?`<img src="${b(L.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${b((L.full_name??"?").charAt(0))}</div>`}</div>
        <p class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2 rp-pop">${b(L.full_name)}</p>
        <p class="text-xs text-gray-400 mt-1 font-mono">${L.seat_no?`เลขที่ ${L.seat_no}`:""}</p>
      </div>`,h.style.opacity="1",Wt(h)},220)}function i(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-name"),m=J.querySelector("#rp-code"),E=J.querySelector("#rp-hint"),ee=J.querySelector("#rp-avatar");u.classList.remove("rp-pop"),ee==null||ee.classList.remove("rp-pop"),c.style.borderStyle="dashed",c.style.borderColor="#fbbf24",c.style.boxShadow="none";const Q=(d,j=!1)=>{ee&&(ee.style.display="flex",ee.style.transition=j?"opacity 0.06s ease":"opacity 0.3s ease",ee.style.opacity="0",setTimeout(()=>{ee.innerHTML=d.image_url?`<img src="${d.image_url}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${(d.full_name??"?").charAt(0)}</div>`,ee.style.opacity="1"},j?30:80))};Q(h[Math.floor(Math.random()*h.length)],!0);let z=0,ne=55;const g=()=>{const d=h[Math.floor(Math.random()*h.length)];u.textContent=d.full_name,m.textContent=d.seat_no?`เลขที่ ${d.seat_no}`:"",Q(d,!0),z++,z<26?(ne=Math.min(ne*1.13,420),setTimeout(g,ne)):(u.textContent=L.full_name,m.textContent=L.seat_no?`เลขที่ ${L.seat_no}`:"",Q(L,!1),ee==null||ee.classList.add("rp-pop"),u.classList.add("rp-pop"),c.style.borderStyle="solid",c.style.borderColor="#10b981",c.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",E&&(E.textContent="🎉 ได้คนนี้แหละ!"),Wt(c),a())};g()}function _(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-hint"),m=J.querySelector("#rp-grid");if(!m)return i(h,L,a);let E=[...m.querySelectorAll(".rp-grid-tile")],ee=E.find(d=>Number(d.dataset.id)===L.id);if(!ee){const d=`hsl(${L.id*47%360},60%,55%)`,j=Math.floor(Math.random()*E.length);E[j].dataset.id=L.id,E[j].innerHTML=(L.image_url?`<img src="${b(L.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${d}">${b((L.full_name??"?").charAt(0))}</div>`)+`<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${L.seat_no??""}</div>`,ee=E[j]}u&&(u.textContent="กำลังสุ่ม..."),c.style.borderColor="#fbbf24";let Q=null,z=0,ne=38;const g=()=>{Q==null||Q.classList.remove("rp-active");const d=E[Math.floor(Math.random()*E.length)];d.classList.add("rp-active"),Q=d,z++,z<36?(ne=Math.min(ne*1.1,520),setTimeout(g,ne)):(Q==null||Q.classList.remove("rp-active"),ee.classList.add("rp-winner"),u&&(u.textContent=`🎉 ที่ ${L.seat_no??""} ${L.full_name}`),ee.scrollIntoView({behavior:"smooth",block:"nearest"}),setTimeout(()=>{t(c,L),a()},900))};g()}function q(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-hint"),m=J.querySelector("#rp-elim-grid"),E=J.querySelector("#rp-elim-counter");if(!m)return i(h,L,a);u&&(u.textContent="กำลังตัดออก...");const ee=h.filter(j=>j.id!==L.id).sort(()=>Math.random()-.5),Q=ee.length;let z=h.length,ne=0;const g=j=>j<.55?50:j<.8?50+(j-.55)/.25*260:310+Math.pow((j-.8)/.2,2)*1400,d=()=>{if(ne>=Q){const U=m.querySelector(`[data-id="${L.id}"]`);U==null||U.classList.remove("rp-last"),U==null||U.classList.add("rp-winner"),U==null||U.scrollIntoView({behavior:"smooth",block:"nearest"}),u&&(u.textContent=`🎉 ที่ ${L.seat_no??""} ${L.full_name}`),E&&(E.textContent="เหลือ 1 คน!"),setTimeout(()=>{t(c,L),a()},900);return}const j=m.querySelector(`[data-id="${ee[ne].id}"]`);j==null||j.classList.remove("rp-last"),j==null||j.classList.add("rp-eliminated"),z--,E&&(E.textContent=`เหลือ ${z} คน`),z<=4&&m.querySelectorAll(".rp-elim-tile:not(.rp-eliminated)").forEach(U=>U.classList.add("rp-last")),ne++,setTimeout(d,g(ne/(Q||1)))};d()}function P(h,L,a){const c=J.querySelector("#rp-stage"),u=J.querySelector("#rp-hint"),m=[J.querySelector("#rp-reel-0"),J.querySelector("#rp-reel-1"),J.querySelector("#rp-reel-2")];if(!m[0])return i(h,L,a);u&&(u.textContent="กำลังหมุน..."),c.style.borderColor="#fbbf24";const E=[h[Math.floor(Math.random()*h.length)],L,h[Math.floor(Math.random()*h.length)]],ee=[18,28,22],Q=[!1,!1,!1],z=(j,U)=>{const K=j.querySelector(".rp-reel-inner");K&&(K.style.opacity="0",setTimeout(()=>{const w=`hsl(${U.id*47%360},60%,55%)`;K.innerHTML=`<div class="flex-1 w-full rounded-xl overflow-hidden">${U.image_url?`<img src="${b(U.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-xl" style="background:${w}">${b((U.full_name??"?").charAt(0))}</div>`}</div><div class="text-[9px] font-bold text-gray-600 truncate w-full text-center leading-none mt-1">${b(U.full_name)}</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">${U.seat_no?`ที่ ${U.seat_no}`:"·"}</div>`,K.style.opacity="1"},30))};let ne=0,g=50;const d=()=>{ne++,m.forEach((j,U)=>{Q[U]||(ne===ee[U]?(Q[U]=!0,setTimeout(()=>{z(j,E[U]),j.classList.add(U===1?"rp-winner-reel":"rp-locked"),U===1&&(u&&(u.textContent="🎉 ได้คนนี้แหละ!"),setTimeout(()=>{t(c,L),a()},900))},200)):z(j,h[Math.floor(Math.random()*h.length)]))}),Q[1]||(g=ne<12?50:Math.min(50*Math.pow(1.09,ne-12),450),setTimeout(d,g))};d()}const k=["#f59e0b","#ec4899","#6366f1","#10b981","#06b6d4","#ef4444","#8b5cf6","#f97316"],S=()=>{const h=y.map(L=>({no:L.no,student_ids:L.items.map(a=>a.id)}));vn(e,h).catch(()=>{})},$=(h,L)=>{const a=Number(h);let c=null;if(y.forEach(u=>{const m=u.items.findIndex(E=>E.id===a);m!==-1&&(c=u.items.splice(m,1)[0])}),c||(c=X.get(a)),!!c){if(L){const u=y.find(m=>m.no===L);u&&u.items.push(c)}Z(),S()}};function Z(){const h=new Set(y.flatMap(u=>u.items.map(m=>m.id))),L=r.filter(u=>!h.has(u.id)),a=(u,m)=>`
      <div class="relative">
        <select data-move="${u.id}" class="w-full appearance-none text-xs font-medium border border-gray-200 rounded-xl pl-3 pr-7 py-1.5 bg-gray-50 text-gray-600 hover:border-gray-300 focus:border-indigo-400 focus:bg-white outline-none transition cursor-pointer">
          <option value="0" ${m===0?"selected":""}>ยังไม่จัดกลุ่ม</option>
          ${y.map(E=>`<option value="${E.no}" ${E.no===m?"selected":""}>ย้ายไปกลุ่มที่ ${E.no}</option>`).join("")}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[9px]">▾</span>
      </div>`,c=(u,m,E)=>`
      <div class="py-1.5 px-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2.5 min-w-0">
          ${u.image_url?`<img src="${b(u.image_url)}" class="w-8 h-11 rounded-xl object-cover flex-shrink-0" style="box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;" />`:`<div class="w-8 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style="background:linear-gradient(160deg,${E},${E}cc);box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;">${b((u.full_name??"?").charAt(0))}</div>`}
          <span class="text-sm font-medium text-gray-700 truncate flex-1 min-w-0">${b(u.full_name)}</span>
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
        ${y.map((u,m)=>{const E=k[m%k.length];return`
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
    `,J.querySelector("#rp-group-regen").addEventListener("click",async()=>{await ct({title:"จัดกลุ่มใหม่?",message:"การจัดกลุ่มปัจจุบันจะถูกล้างทั้งหมด แล้วเริ่มสุ่มใหม่",confirmText:"จัดกลุ่มใหม่"})&&(y=null,fn(e).catch(()=>{}),V())}),J.querySelectorAll("[data-move]").forEach(u=>{u.addEventListener("change",()=>$(u.dataset.move,Number(u.value)))})}function V(){let h="all",L=null,a=new Set(r.map(g=>g.id)),c="count";const u=()=>h==="present"?L?r.filter(g=>L.has(g.id)):[]:h==="manual"?r.filter(g=>a.has(g.id)):r;J.innerHTML=`
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
    `;const m=g=>{const d=[...g];for(let j=d.length-1;j>0;j--){const U=Math.floor(Math.random()*(j+1));[d[j],d[U]]=[d[U],d[j]]}return d},E=(g,d)=>{const j=m(g);if(!j.length)return[];if(c==="count"){const w=Math.min(d,j.length),te=Array.from({length:w},()=>[]);return j.forEach((N,Y)=>te[Y%w].push(N)),te}const U=Math.min(d,j.length),K=[];for(let w=0;w<j.length;w+=U)K.push(j.slice(w,w+U));return K},ee=()=>{const g=u(),j=new Set(g.map(te=>te.gender).filter(Boolean)).size>1,U=J.querySelector("#rp-count-section");U.innerHTML=`
        <div class="flex items-center gap-2 mb-3">
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="count">📦 กำหนดจำนวนกลุ่ม</button>
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="size">👤 กำหนดคนต่อกลุ่ม</button>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <input id="rp-gnum" type="number" min="1" max="${Math.max(1,g.length)}" value="4"
            class="${Ce} w-24 flex-shrink-0 text-center font-bold text-lg" />
          <span id="rp-gnum-label" class="text-xs text-gray-400">กลุ่ม (จากทั้งหมด ${g.length} คน)</span>
        </div>
        ${j?`
        <label class="flex items-start gap-2.5 mb-4 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 cursor-pointer">
          <input id="rp-gender-split" type="checkbox" class="mt-0.5 w-4 h-4 rounded accent-pink-500" />
          <span class="text-xs text-gray-600 leading-relaxed">⚧ <strong>แยกกลุ่มตามเพศ</strong> — แต่ละกลุ่มจะมีนักเรียนเพศเดียวกันเท่านั้น (ไม่ติ๊ก = คละเพศได้ในกลุ่มเดียวกัน)</span>
        </label>`:""}
      `;const K=[...U.querySelectorAll(".rp-gmode-btn")],w=te=>{c=te,K.forEach(Y=>{const le=Y.dataset.gmode===te;Y.className=`rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${le?"border-pink-300 bg-pink-50 text-pink-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`});const N=U.querySelector("#rp-gnum-label");N.textContent=te==="count"?`กลุ่ม (จากทั้งหมด ${g.length} คน)`:`คน/กลุ่ม (จากทั้งหมด ${g.length} คน)`,U.querySelector("#rp-gnum").value=4};K.forEach(te=>te.addEventListener("click",()=>w(te.dataset.gmode))),w("count")},Q=()=>{const g=J.querySelector("#rp-pool-info"),d=u().length;h==="all"?g.textContent=`ทั้งห้อง ${r.length} คน`:h==="present"?g.textContent=L===null?"กำลังโหลดข้อมูลเช็คชื่อวันนี้...":`มาเรียนวันนี้ ${d} คน${d===0?" (ยังไม่ได้เช็คชื่อวันนี้ หรือทุกคนขาด/ลา)":""}`:g.textContent=`เลือกไว้ ${d} คน`},z=()=>{const g=J.querySelector("#rp-pool-manual-list");g.innerHTML=`
        <div class="flex justify-end gap-2 mb-1.5">
          <button id="rp-manual-all" type="button" class="text-[11px] text-indigo-500 hover:underline">เลือกทั้งหมด</button>
          <button id="rp-manual-none" type="button" class="text-[11px] text-gray-400 hover:underline">ไม่เลือกเลย</button>
        </div>
        ${r.map(d=>`
          <label class="flex items-center gap-2 py-1 px-1 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="checkbox" class="rp-manual-cb w-3.5 h-3.5 rounded" data-sid="${d.id}" ${a.has(d.id)?"checked":""} />
            <span class="text-xs text-gray-700 truncate">${b(d.full_name)}</span>
          </label>
        `).join("")}
      `,g.querySelector("#rp-manual-all").addEventListener("click",()=>{a=new Set(r.map(d=>d.id)),z(),Q(),ee()}),g.querySelector("#rp-manual-none").addEventListener("click",()=>{a=new Set,z(),Q(),ee()}),g.querySelectorAll(".rp-manual-cb").forEach(d=>{d.addEventListener("change",()=>{const j=parseInt(d.dataset.sid,10);d.checked?a.add(j):a.delete(j),Q(),ee()})})},ne=async g=>{if(h=g,J.querySelectorAll(".rp-pool-btn").forEach(d=>{const j=d.dataset.pool===g;d.className=`rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${j?"border-amber-300 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`}),J.querySelector("#rp-pool-manual-list").classList.toggle("hidden",g!=="manual"),g==="manual"&&z(),g==="present"&&L===null){Q();try{const d=new Date(Date.now()+252e5).toISOString().slice(0,10),j=await yn(e,d);L=new Set(j.filter(U=>U.status==="present"||U.status==="late").map(U=>U.student_id))}catch{L=new Set}}Q(),ee()};J.querySelectorAll(".rp-pool-btn").forEach(g=>g.addEventListener("click",()=>ne(g.dataset.pool))),ne("all"),J.querySelector("#rp-group-go").addEventListener("click",()=>{var w;if(!p){const te=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);if(te>=C){R();return}localStorage.setItem("pp5_free_random_count",String(te+1))}const g=u();if(!g.length){F("ยังไม่มีนักเรียนในกลุ่มที่เลือกไว้","warning");return}const d=Math.max(1,parseInt(J.querySelector("#rp-gnum").value,10)||1),j=!!((w=J.querySelector("#rp-gender-split"))!=null&&w.checked);let U;j?U=[g.filter(te=>te.gender==="ชาย"),g.filter(te=>te.gender==="หญิง"),g.filter(te=>te.gender!=="ชาย"&&te.gender!=="หญิง")].filter(te=>te.length):U=[g];let K=1;y=U.flatMap(te=>E(te,d).map(N=>({no:K++,items:N}))),Z(),S()})}function se(){y?Z():V()}f("pick")}async function Es(e,o,r,p,T,C,R,A,x="info"){var h,L;(h=document.getElementById("combined-edit-modal"))==null||h.remove();const[H,O,X,y]=await Promise.all([De(o.id).catch(()=>[]),$e().catch(()=>({})),Ks(o.id).catch(()=>[]),Js(o.class_name).catch(()=>null)]);let M=X.map(a=>a.students).filter(Boolean);const G=a=>a?"cem-tab px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px":"cem-tab px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition",B="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200",ae=[...new Set(r.map(a=>a.building))].sort(),oe=o.classroom_id?r.find(a=>a.id===o.classroom_id):null,J=T[o.id]??[],ie=["","จ","อ","พ","พฤ","ศ","ส","อา"],f=document.createElement("div");f.id="combined-edit-modal",f.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 p-4",f.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขห้องเรียน</h3>
        <button id="cem-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <p class="text-xs text-gray-400 px-6 pb-3 flex-shrink-0">${b(((L=o.master_subjects)==null?void 0:L.subject_name)??"")} · ${b(o.class_name??"")}</p>
      <div class="flex border-b border-gray-100 px-6 flex-shrink-0">
        <button class="${G(!0)}" data-cem="info">ข้อมูลพื้นฐาน</button>
        <button class="${G(!1)}" data-cem="schedule">ตารางสอน</button>
        <button class="${G(!1)}" data-cem="room">ห้องสอน</button>
      </div>
      <div id="cem-content" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="px-6 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="cem-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>
    </div>`,document.body.appendChild(f);let I=!1,v=!1,W=null,D=!1;const s=a=>{const c=f.querySelector("#cem-info-status");if(!c)return;const u={dirty:{cls:"text-amber-500",text:"● มีการเปลี่ยนแปลง"},saving:{cls:"text-indigo-500",text:"⏳ กำลังบันทึก..."},saved:{cls:"text-emerald-600",text:"✅ บันทึกแล้ว"},error:{cls:"text-red-500",text:"⚠️ บันทึกไม่สำเร็จ"}},m=u[a]??u.saved;c.className=`text-xs font-medium ${m.cls}`,c.textContent=m.text,c.classList.remove("hidden")},n=async()=>{var a,c,u,m,E,ee,Q;if(f.querySelector("#cem-classname")){v=!0,s("saving");try{const z=(a=f.querySelector("#cem-source-class"))==null?void 0:a.value;await at(o.id,{class_name:f.querySelector("#cem-classname").value.trim()||o.class_name,skill_group:f.querySelector("#cem-skillgroup").value.trim()||null,google_sheet_id:f.querySelector("#cem-sheetid").value.trim()||null,head_student_id:f.querySelector("#cem-head").value?Number(f.querySelector("#cem-head").value):null,day1_date:((c=f.querySelector("#cem-day1"))==null?void 0:c.value)||null,day2_date:((u=f.querySelector("#cem-day2"))==null?void 0:u.value)||null,day3_date:((m=f.querySelector("#cem-day3"))==null?void 0:m.value)||null,day4_date:((E=f.querySelector("#cem-day4"))==null?void 0:E.value)||null,day5_date:((ee=f.querySelector("#cem-day5"))==null?void 0:ee.value)||null,day6_date:((Q=f.querySelector("#cem-day6"))==null?void 0:Q.value)||null,source_class_id:z?Number(z):null}),I=!1,D=!0,s("saved")}catch{s("error")}finally{v=!1}}},t=(a=!1)=>{I=!0,s("dirty"),clearTimeout(W),W=setTimeout(n,a?0:800)},i=()=>{const a=H.map(c=>`<option value="${c.id}" data-code="${b(c.student_code)}" data-img="${b(c.image_url??"")}" data-room="${b(c.main_room??"")}"
         ${Number(o.head_student_id)===Number(c.id)?"selected":""}>
         ${b(c.full_name)} (${b(c.student_code)})</option>`).join("");return`
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง / ระดับชั้น</label>
        <input id="cem-classname" type="text" value="${b(o.class_name??"")}" class="${B}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">กลุ่มทักษะ</label>
        <input id="cem-skillgroup" type="text" value="${b(o.skill_group??"")}" placeholder="เช่น วิชาการ, ภาษา, ชีวิต" class="${B}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">Google Sheet ID</label>
        <input id="cem-sheetid" type="text" value="${b(o.google_sheet_id??"")}" placeholder="ID จาก URL ของ Sheet" class="${B} font-mono" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">หัวหน้าห้อง</label>
        <select id="cem-head" class="${B} bg-white">
          <option value="">— ยังไม่ระบุ —</option>
          ${a}
        </select>
        ${H.length===0?'<p class="text-xs text-amber-500 mt-1">ยังไม่มีนักเรียนในห้อง จึงยังเลือกหัวหน้าไม่ได้</p>':""}
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
            <input id="cem-day${c}" type="date" value="${o[`day${c}_date`]??""}"
              class="w-full border border-gray-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>`).join("")}
        </div>
      </div>
      <!-- ใช้ข้อมูลจากห้องเรียนอื่น -->
      <div class="border-t border-gray-100 pt-3">
        <label class="block text-xs font-semibold text-gray-600 mb-1">🔗 ใช้ข้อมูลจากห้องเรียนอื่น</label>
        <p class="text-xs text-gray-400 mb-2">สำหรับวิชาที่ไม่ได้สอนจริง — ปพ.5 จะดึงการเช็คชื่อและคะแนน (เฉพาะที่กรอกเอง) จากห้องที่เลือก</p>
        <select id="cem-source-class" class="${B} text-xs">
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
              class="${B} text-xs" autocomplete="off"
              ${H.length===0?"disabled":""} />
            <div id="cem-delegate-results" class="hidden absolute z-20 left-0 right-0 top-full mt-1 max-h-52 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg"></div>
          </div>
          ${H.length===0?'<p class="text-xs text-amber-500">ยังไม่มีนักเรียนในห้อง จึงยังมอบหมายไม่ได้</p>':""}
        </div>
      </div>
      <p id="cem-info-status" class="hidden text-xs font-medium text-emerald-600"></p>
    </div>`},_=new Set(J),q=new Set(J);e!=null&&e.id&&wt(e.id,o.id).then(a=>{const c=f.querySelector("#cem-source-class");if(!c)return;a.forEach(m=>{const E=m.master_subjects,ee=`${(E==null?void 0:E.subject_name)??"?"} (${(E==null?void 0:E.subject_code)??""}) — ${m.class_name} · ${(E==null?void 0:E.credit)??"?"} หน่วยกิต`,Q=new Option(ee,m.id,!1,Number(m.id)===Number(o.source_class_id));c.appendChild(Q)});const u=m=>{var ne,g;const E=f.querySelector("#cem-source-info");if(!E)return;const ee=a.find(d=>Number(d.id)===Number(m));if(!ee){E.classList.add("hidden");return}const Q=((ne=ee.master_subjects)==null?void 0:ne.credit)??1,z=((g=o.master_subjects)==null?void 0:g.credit)??1;Q!==z?(E.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${Q} / วิชานี้ ${z}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,E.classList.remove("hidden")):E.classList.add("hidden")};o.source_class_id&&u(o.source_class_id),c.addEventListener("change",()=>{u(c.value),t(!0)})}).catch(()=>{});const P={};Object.entries(T).forEach(([a,c])=>{c.forEach(u=>{P[u]||(P[u]=[]),P[u].push(Number(a))})});const k=Object.fromEntries((window._classesFlat??[]).map(a=>[a.id,a])),S=()=>{const a=p.filter(d=>!d.is_free);if(!a.length)return'<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อน</p>';const u=O.hasFriday==="true"?6:5,m=Array.from({length:u},(d,j)=>j),E=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],ee=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50"],Q={};a.forEach(d=>{Q[`${d.day_of_week}-${d.period_no}`]=d;const j=d.span_periods??1;for(let U=1;U<j;U++)Q[`${d.day_of_week}-${d.period_no+U}`]={...d,_secondary:!0}});const z=Object.values(C).sort((d,j)=>d.period_no-j.period_no),ne=d=>q.has(d)?"selected":(P[d]??[]).filter(U=>U!==o.id).length?"other":"none",g=(d,j)=>{const U=d.subject_name?b(d.subject_name):"",K=d.class_name?b(d.class_name):"";return j==="selected"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
          <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${U}</p>
          ${K?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${K}</p>`:""}
        </div>`:j==="other"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
          style="min-height:52px;border-left:3px solid #60a5fa"
          title="คลิกเพื่อเชื่อมร่วมกับ: ${(P[d.id]??[]).filter(N=>N!==o.id).map(N=>{var Y;return((Y=k[N])==null?void 0:Y.class_name)??`ห้อง ${N}`}).join(", ")}">
          <p class="font-bold text-[11px] leading-tight text-blue-600 break-words w-full">${U}</p>
          ${K?`<p class="text-[10px] text-blue-400 leading-tight w-full">${K}</p>`:""}
          <p class="text-[9px] text-blue-400 mt-0.5">+เชื่อมร่วม</p>
        </div>`:`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
        bg-white hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400 transition-all"
        style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${U}</p>
        ${K?`<p class="text-[10px] text-gray-400 leading-tight w-full">${K}</p>`:""}
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
            ${z.map(d=>{var j;return`
            <tr>
              <td class="border border-gray-100 px-1 py-2 text-center bg-gray-50 align-middle">
                <p class="font-bold text-gray-700 text-[10px]">คาบ ${d.period_no}</p>
                <p class="text-[9px] text-gray-400">${((j=d.start_time)==null?void 0:j.slice(0,5))??""}</p>
              </td>
              ${m.map(U=>{const K=`${U}-${d.period_no}`,w=Q[K];if(w!=null&&w._secondary)return"";if(!w)return'<td class="border border-gray-100 p-0" style="min-width:56px;height:1px"></td>';const te=w.span_periods??1,N=ne(w.id);return`<td class="border border-gray-100 p-0 cursor-pointer cem-srow"
                  data-sid="${w.id}" data-state="${N}"
                  style="min-width:56px;height:1px" ${te>1?`rowspan="${te}"`:""}>
                  ${g(w,N)}
                </td>`}).join("")}
            </tr>`}).join("")}
          </tbody>
        </table>
      </div>`},$=a=>{const c=parseInt(a.dataset.sid),u=p.find(z=>z.id===c);if(!u)return;const m=(P[c]??[]).filter(z=>z!==o.id),E=q.has(c)?"selected":m.length?"other":"none";a.dataset.state=E;const ee=u.subject_name?b(u.subject_name):"",Q=u.class_name?b(u.class_name):"";if(E==="selected")a.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
        <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${ee}</p>
        ${Q?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${Q}</p>`:""}
      </div>`;else if(E==="other"){const z=m.map(ne=>{var g;return((g=k[ne])==null?void 0:g.class_name)??`ห้อง ${ne}`}).join(", ");a.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${z}">
        <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${ee}</p>
        ${Q?`<p class="text-[10px] text-gray-400 leading-tight w-full">${Q}</p>`:""}
      </div>`}else a.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-white hover:bg-emerald-50 transition-all" style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${ee}</p>
        ${Q?`<p class="text-[9px] text-gray-400 leading-tight">${Q}</p>`:""}
      </div>`},Z=()=>{f.querySelectorAll(".cem-srow").forEach(a=>{a.addEventListener("click",async()=>{const c=parseInt(a.dataset.sid),u=a.dataset.state,m=p.find(E=>E.id===c);if(m)if(u==="other"){const ee=(P[c]??[]).filter(g=>g!==o.id).map(g=>{var d;return((d=k[g])==null?void 0:d.class_name)??`ห้อง ${g}`}).join(", "),Q=C[m.period_no],z=Q!=null&&Q.start_time?Q.start_time.slice(0,5):`คาบ ${m.period_no}`,ne=document.createElement("div");ne.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",ne.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">🔗</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ใช้กับห้องอื่นอยู่</p>
              <p class="text-sm text-gray-500 mb-1">${ie[m.day_of_week]} ${z} · ${b(m.subject_name??"")}</p>
              <p class="text-xs text-gray-500 mb-1">เชื่อมอยู่กับ: <b>${ee}</b></p>
              <p class="text-xs text-emerald-600 mb-4">สามารถเชื่อมร่วมกันได้ เช่น กรณีสอนสองห้องพร้อมกัน</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">เชื่อมร่วมกัน</button>
              </div>
            </div>`,document.body.appendChild(ne),ne.querySelector(".cfm-cancel").addEventListener("click",()=>ne.remove()),ne.querySelector(".cfm-ok").addEventListener("click",async()=>{ne.remove();try{await ot(o.id,c),q.add(c),_.add(c),D=!0,$(a),F(`เชื่อมร่วมกับ ${ee} แล้ว ✅`,"success")}catch(g){F("เชื่อมไม่สำเร็จ: "+ce(g),"error")}})}else if(u==="selected")try{await ln(o.id,c),q.delete(c),_.delete(c),D=!0,$(a),F("ยกเลิกการเชื่อมแล้ว","info")}catch(E){F("ยกเลิกไม่สำเร็จ: "+ce(E),"error")}else try{await ot(o.id,c),q.add(c),_.add(c),D=!0,$(a),F("เชื่อมตารางสอนแล้ว ✅","success")}catch(E){F("เชื่อมไม่สำเร็จ: "+ce(E),"error")}})})},V=()=>`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
        <select id="cem-building" class="${B} bg-white">
          <option value="">— ไม่ระบุ —</option>
          ${ae.map(a=>`<option value="${a}" ${(oe==null?void 0:oe.building)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
        <select id="cem-room" class="${B} bg-white">
          <option value="">— เลือกอาคารก่อน —</option>
        </select>
      </div>
    </div>`,se=()=>{var te;const a=f.querySelector("#cem-head"),c=f.querySelector("#cem-head-card"),u=()=>{const N=a==null?void 0:a.options[a.selectedIndex];if(!(N!=null&&N.value)){c==null||c.classList.add("hidden");return}const Y=N.text.split(" (")[0],le=N.dataset.img??"";f.querySelector("#cem-head-name").textContent=Y,f.querySelector("#cem-head-code").textContent=`รหัส: ${N.dataset.code??""}`,f.querySelector("#cem-head-room").textContent=N.dataset.room?`ห้อง: ${N.dataset.room}`:"";const de=f.querySelector("#cem-head-avatar");de.innerHTML=le?`<img src="${le}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${Y.charAt(0)}</div>`,c==null||c.classList.remove("hidden")};a==null||a.addEventListener("change",()=>{u(),t(!0)}),a!=null&&a.value&&u();const m=f.querySelector("#cem-attendance-delegate"),E=f.querySelector("#cem-attendance-delegate-status"),ee=(N,Y)=>{E&&(E.textContent=N,E.className=`text-xs font-medium mt-1.5 ${Y}`,E.classList.remove("hidden"))};m==null||m.addEventListener("change",async()=>{const N=m.checked;m.disabled=!0,ee("⏳ กำลังบันทึก...","text-indigo-500"),fe(()=>import("./teacher-views-attendance-delegate-Cq3NBVow.js"),__vite__mapDeps([40,1,2,3,4,5,9,7,10,11,6,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then(Y=>Y.toggleAttendanceDelegateForClass(e,o.id,N,le=>{o.attendance_delegate_enabled=le,m.checked=le,ee(le?"✅ เปิดใช้งานแล้ว":"● ปิดใช้งานแล้ว",le?"text-emerald-600":"text-gray-400")}).catch(()=>{m.checked=!N}).finally(()=>{m.disabled=!1,m.checked!==!!o.attendance_delegate_enabled&&(m.checked=!!o.attendance_delegate_enabled)}))});const Q=f.querySelector("#cem-delegate-chips"),z=f.querySelector("#cem-delegate-suggest"),ne=f.querySelector("#cem-delegate-search"),g=f.querySelector("#cem-delegate-results"),d=()=>new Set(M.map(N=>N.id)),j=()=>{Q&&(Q.innerHTML=M.length?M.map(N=>`
          <span class="delegate-chip inline-flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700" data-sid="${N.id}">
            ${N.image_url?`<img src="${b(N.image_url)}" class="w-5 h-5 rounded-full object-cover" />`:`<span class="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center text-[10px]">${b((N.full_name??"?").charAt(0))}</span>`}
            ${b(N.full_name)}
            <button type="button" class="delegate-remove-btn text-emerald-400 hover:text-red-500 ml-0.5" data-sid="${N.id}">✕</button>
          </span>`).join(""):'<p class="text-xs text-gray-300">ยังไม่ได้มอบหมายใคร</p>')},U=()=>{if(!z)return;const N=d(),Y=[],le=(de,ue)=>{if(!de||N.has(Number(de)))return;const xe=H.find(ye=>Number(ye.id)===Number(de));!xe||Y.some(ye=>ye.id===xe.id)||Y.push({id:xe.id,full_name:xe.full_name,label:ue})};le(y==null?void 0:y.head_student_id,"หัวหน้าห้อง"),le(y==null?void 0:y.vice_head_student_id,"รองหัวหน้าห้อง"),le(o.head_student_id,"หัวหน้าห้องในฟอร์มนี้"),z.innerHTML=Y.map(de=>`
        <button type="button" class="delegate-add-suggest-btn inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-xs text-gray-500 hover:border-emerald-300 hover:text-emerald-600" data-sid="${de.id}">
          ➕ ${b(de.full_name)} <span class="text-gray-300">(${b(de.label)})</span>
        </button>`).join("")},K=async N=>{const Y=H.find(le=>Number(le.id)===Number(N));if(!(!Y||d().has(Y.id))){M=[...M,Y],j(),U();try{await bn(o.id,Y.id)}catch(le){M=M.filter(de=>de.id!==Y.id),j(),U(),F("เพิ่มไม่สำเร็จ: "+ce(le),"error")}}},w=async N=>{const Y=M.find(le=>Number(le.id)===Number(N));M=M.filter(le=>Number(le.id)!==Number(N)),j(),U();try{await gn(o.id,Number(N))}catch(le){Y&&(M=[...M,Y]),j(),U(),F("ลบไม่สำเร็จ: "+ce(le),"error")}};Q==null||Q.addEventListener("click",N=>{const Y=N.target.closest(".delegate-remove-btn");Y&&w(Y.dataset.sid)}),z==null||z.addEventListener("click",N=>{const Y=N.target.closest(".delegate-add-suggest-btn");Y&&K(Y.dataset.sid)}),ne==null||ne.addEventListener("input",()=>{const N=ne.value.trim().toLowerCase();if(!N){g.classList.add("hidden"),g.innerHTML="";return}const Y=d(),le=H.filter(de=>!Y.has(de.id)&&(String(de.student_code??"").toLowerCase().includes(N)||String(de.full_name??"").toLowerCase().includes(N))).slice(0,8);g.innerHTML=le.length?le.map(de=>`
          <button type="button" class="delegate-result-btn w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-50 text-xs" data-sid="${de.id}">
            ${de.image_url?`<img src="${b(de.image_url)}" class="w-6 h-6 rounded-full object-cover" />`:'<span class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">👤</span>'}
            <span class="font-semibold text-gray-700">${b(de.full_name)}</span>
            <span class="text-gray-400">${b(de.student_code)}</span>
          </button>`).join(""):'<p class="text-xs text-gray-300 px-3 py-2">ไม่พบนักเรียนที่ตรงกัน</p>',g.classList.remove("hidden")}),g==null||g.addEventListener("click",N=>{const Y=N.target.closest(".delegate-result-btn");Y&&(K(Y.dataset.sid),ne.value="",g.classList.add("hidden"),g.innerHTML="")}),j(),U(),["cem-classname","cem-skillgroup","cem-sheetid"].forEach(N=>{var Y;(Y=f.querySelector(`#${N}`))==null||Y.addEventListener("input",()=>t())}),[1,2,3,4,5,6].forEach(N=>{var Y;(Y=f.querySelector(`#cem-day${N}`))==null||Y.addEventListener("change",()=>t(!0))}),(te=f.querySelector("#cem-auto-dates"))==null||te.addEventListener("click",async()=>{const N=f.querySelector("#cem-auto-dates"),Y=f.querySelector("#cem-dates-info");N.textContent="⏳",N.disabled=!0;try{const le=parseInt(O.academicYear??2568),de=parseInt(O.semester??1),ue=O.semester_start??O.term_start_date??Ot(new Date),xe=e?await Ve(e.id,le,de).catch(()=>[]):[];if(!xe.length){Y.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",Y.classList.remove("hidden");return}const ye={};xe.filter(ge=>!ge.is_free).forEach(ge=>{const ve=`${ge.subject_name??"?"}|${ge.class_name??""}`;ye[ve]||(ye[ve]={label:`${ge.subject_name??"?"}${ge.class_name?` — ${ge.class_name}`:""}`,entries:[]}),ye[ve].entries.push(ge)});const xt=["อา","จ","อ","พ","พฤ","ศ","ส"],Ae=ge=>{const ve={};return ge.forEach(Ee=>{ve[Ee.day_of_week]||(ve[Ee.day_of_week]=[]),ve[Ee.day_of_week].push(Ee.period_no)}),Object.entries(ve).map(([Ee,Be])=>`${xt[Ee]} คาบ ${Be.join(",")}`).join(" · ")},ke=document.createElement("div");ke.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",ke.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
            <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
              <button class="ce-close text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
              <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
              ${Object.entries(ye).map(([ge,ve])=>`
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
                <input type="radio" name="cem-dates-subj" value="${b(ge)}" class="mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-800">${b(ve.label)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${Ae(ve.entries)}</p>
                </div>
              </label>`).join("")}
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
              <button class="ce-close flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="cem-calc-btn" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
            </div>
          </div>`,document.body.appendChild(ke),ke.querySelectorAll(".ce-close").forEach(ge=>ge.addEventListener("click",()=>ke.remove())),ke.querySelector("#cem-calc-btn").addEventListener("click",()=>{var we;const ge=(we=ke.querySelector('input[name="cem-dates-subj"]:checked'))==null?void 0:we.value;if(!ge){F("กรุณาเลือกวิชาก่อน","warning");return}ke.remove();const ve=ye[ge];if(!ve)return;const Ee=Rn(ue)??new Date,Be=Ee.getDay(),pe=[];ve.entries.forEach(he=>{const Se=he.span_periods??1;for(let Me=0;Me<Se;Me++)pe.push({dow:he.day_of_week,pno:(he.period_no??0)+Me})}),pe.sort((he,Se)=>{const Me=(he.dow-Be+7)%7,Tt=(Se.dow-Be+7)%7;return Me!==Tt?Me-Tt:he.pno-Se.pno});const me=[];let be=0;for(;me.length<6;){for(const he of pe){const Se=new Date(Ee);if(Se.setDate(Se.getDate()+(he.dow-Be+7)%7+be*7),me.push(Se),me.length>=6)break}be++}me.slice(0,6).forEach((he,Se)=>{const Me=f.querySelector(`#cem-day${Se+1}`);Me&&(Me.value=Ot(he))}),t(!0),Y.textContent=`✅ คำนวณจาก "${ve.label}" — ตรวจสอบและแก้ไขได้`,Y.classList.remove("hidden")})}catch(le){Y.textContent="โหลดตารางไม่สำเร็จ: "+ce(le),Y.classList.remove("hidden")}finally{N.textContent="🗓️ คำนวณจากตารางสอน",N.disabled=!1}})},re=a=>{if(v){F("กำลังบันทึกข้อมูล รอสักครู่...","warning");return}if(I){F("มีข้อมูลที่ยังไม่ถูกบันทึก กรุณารอระบบบันทึกก่อน","warning");return}f.querySelectorAll(".cem-tab").forEach(u=>{u.className=G(u.dataset.cem===a)});const c=f.querySelector("#cem-content");if(a==="info")c.innerHTML=i(),se();else if(a==="schedule")c.innerHTML=S(),Z();else{c.innerHTML=V();const u=c.querySelector("#cem-building"),m=c.querySelector("#cem-room"),E=ee=>{const Q=r.filter(z=>z.building===ee);m.innerHTML='<option value="">— เลือกห้อง —</option>'+Q.map(z=>`<option value="${z.id}" ${z.id===o.classroom_id?"selected":""}>${z.room_number}${z.name?` — ${z.name}`:""}</option>`).join("")};oe!=null&&oe.building&&E(oe.building),u.addEventListener("change",()=>E(u.value)),m.addEventListener("change",async()=>{const ee=m.value?parseInt(m.value):null;await os(o.id,ee).catch(()=>{}),D=!0,F("บันทึกห้องสอนแล้ว ✅","success")})}},l=async()=>{(I||v)&&(clearTimeout(W),await n().catch(()=>{})),f.remove(),D&&A&&A()};re(x),f.querySelectorAll(".cem-tab").forEach(a=>a.addEventListener("click",()=>re(a.dataset.cem))),f.querySelector("#cem-close").addEventListener("click",l),f.querySelector("#cem-cancel").addEventListener("click",l),f.addEventListener("click",a=>{a.target===f&&l()})}async function xo(e){je("schedule"),Ie("ตารางสอน","schedule");const o=await $e().catch(()=>({})),r=parseInt(o.academicYear??2568),p=parseInt(o.semester??1);await Pe(e,r,p,o)}async function Pe(e,o,r,p=null){var W,D;je("schedule"),Ie("ตารางสอน","schedule");const T=p??await $e().catch(()=>({})),C=T.hasFriday==="true",R=T.scheduleVisionEnabled==="true",A=xs(T,e),[x,H,O,X,y,M]=await Promise.all([ut().catch(()=>[]),e?as(e.id).catch(()=>[]):Promise.resolve([]),e?Ve(e.id,o,r).catch(()=>[]):Promise.resolve([]),e?Lt(e.id).catch(()=>[]):Promise.resolve([]),e?Et(e.id).catch(()=>[]):Promise.resolve([]),e?pt(e.id).catch(()=>[]):Promise.resolve([])]),G=Object.fromEntries((X??[]).map(s=>[s.room_key,s.color_hex])),B=Object.fromEntries(M.map(s=>[s.id,s])),ae={};y.forEach(s=>{ae[s.teacher_schedule_id]||(ae[s.teacher_schedule_id]=B[s.class_id])});const oe=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],J=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50","bg-blue-50"],ie=C?6:5,f=Array.from({length:ie},(s,n)=>n),I={};for(const s of O)I[`${s.day_of_week}-${s.period_no}`]=s,(s.span_periods??1)>1&&(I[`${s.day_of_week}-${s.period_no+1}`]={...s,_secondary:!0});const v=(s={},n=null)=>{var i;const t=s!=null&&s.id?ae[s.id]:null;return ze({teacherId:e==null?void 0:e.id,className:(t==null?void 0:t.class_name)??s.class_name,subjectName:((i=t==null?void 0:t.master_subjects)==null?void 0:i.subject_name)??s.subject_name??(n==null?void 0:n.subject_name),fallbackId:(t==null?void 0:t.id)??s.subject_id??(n==null?void 0:n.id)},G)};_e(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${r} / ${o} — คลิกช่องเพื่อกำหนดวิชา</p>
      </div>
      <div class="flex gap-2">
        ${R&&A?`
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
            ${f.map(s=>`
            <th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${J[s]}">
              ${oe[s]}
            </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${x.map(s=>{var n,t;return`
          <tr class="hover:bg-gray-50/50">
            <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50">
              <p class="font-bold text-gray-700">คาบ ${s.period_no}</p>
              <p class="text-[10px] text-gray-400">${(n=s.start_time)==null?void 0:n.slice(0,5)}–${(t=s.end_time)==null?void 0:t.slice(0,5)}</p>
            </td>
            ${f.map(i=>{const _=`${i}-${s.period_no}`,q=I[_];if(q!=null&&q._secondary)return"";const P=q?H.find(se=>se.id===q.subject_id):null,k=(q==null?void 0:q.span_periods)??1,S=(q==null?void 0:q.subject_name)??(P==null?void 0:P.subject_name)??null,$=(q==null?void 0:q.class_name)??null,Z=(q==null?void 0:q.teacher_name)??null,V=v(q,P);return`<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${i}" data-period="${s.period_no}"
                ${k>1?`rowspan="${k}"`:""}>
                ${S?`
                <div class="w-full h-full rounded-none flex flex-col justify-center items-center
                  gap-1 px-2 py-2 text-center" style="min-height:64px;background:${V.soft};color:${V.text};border-left:4px solid ${V.dot}">
                  <p class="font-extrabold leading-tight text-sm break-words w-full">${S}</p>
                  ${$?`<p class="text-[11px] font-semibold opacity-90 leading-tight w-full">${$}</p>`:""}
                  ${Z?`<p class="text-[10px] opacity-65 leading-tight w-full">${Z}</p>`:""}
                </div>`:`
                <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style="min-height:52px">
                  <span class="text-indigo-200 text-2xl">＋</span>
                </div>`}
              </td>`}).join("")}
          </tr>`}).join("")}
        </tbody>
      </table>
    </div>

  </div>`),document.querySelectorAll(".schedule-cell").forEach(s=>{s.addEventListener("click",()=>{const n=parseInt(s.dataset.dow),t=parseInt(s.dataset.period),i=`${n}-${t}`,_=I[i];_!=null&&_._secondary||go({teacher:e,dow:n,period:t,periods:x,subjects:H,entry:_,academicYear:o,semester:r,roomColorMap:G,onSave:async q=>{await cs({teacher_id:e.id,...q}),await Pe(e,o,r,T)},onDelete:async()=>{_&&await hn(_.id),await Pe(e,o,r,T)}})})}),(W=document.getElementById("btn-clear-schedule"))==null||W.addEventListener("click",async()=>{confirm("ยืนยันล้างตารางสอนทั้งหมด?")&&(await Fs(e.id,o,r),await Pe(e,o,r,T),F("ล้างตารางแล้ว","success"))}),(D=document.getElementById("btn-upload-schedule"))==null||D.addEventListener("click",()=>{Ls(e,H,x,o,r,A,T)})}async function go({teacher:e,dow:o,period:r,periods:p,subjects:T,entry:C,academicYear:R,semester:A,roomColorMap:x={},onSave:H,onDelete:O}){var q,P;(q=document.getElementById("sched-popup"))==null||q.remove();const X=await rs().catch(()=>[]),y=await ls().catch(()=>[]),M=[...new Set([...X,...y])].sort(),G=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],B=p.map(k=>k.period_no),ae=p.find(k=>k.period_no===r),oe=(C==null?void 0:C.subject_name)??(C!=null&&C.subject_id?((P=T.find(k=>k.id===C.subject_id))==null?void 0:P.subject_name)??"":"");let J=oe,ie=(C==null?void 0:C.class_name)??"",f=(C==null?void 0:C.teacher_name)??"",I=ze({teacherId:e==null?void 0:e.id,className:ie,subjectName:oe,fallbackId:C==null?void 0:C.subject_id},x).dot,v=!1;const W=T.map(k=>`<option value="${k.subject_name}">`).join(""),D=M.map(k=>`<option value="${k}">`).join(""),s=G.map((k,S)=>`<option value="${S}">${k}</option>`).join(""),n=B.map(k=>`<option value="${k}">คาบ ${k}</option>`).join("");let t=C?[{day_of_week:C.day_of_week,period_no:C.period_no,span_periods:C.span_periods??1}]:[{day_of_week:o,period_no:r,span_periods:1}];const i=document.createElement("div");i.id="sched-popup",i.className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",document.body.appendChild(i);function _(){var S,$,Z;const k=We(I);i.innerHTML=`
      <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">กำหนดวิชา</h3>
            <p class="text-xs text-gray-400">${G[o]} คาบ ${r}${ae?` (${(S=ae.start_time)==null?void 0:S.slice(0,5)}–${($=ae.end_time)==null?void 0:$.slice(0,5)})`:""}</p>
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
                    ${Ye.map(V=>`
                    <button type="button"
                      class="sp-color-option w-8 h-8 rounded-full border-2 ${V.dot.toLowerCase()===I.toLowerCase()?"border-gray-800":"border-white"} shadow-sm"
                      style="background:${V.dot}"
                      data-color="${V.dot}"
                      title="เลือกสี"></button>`).join("")}
                  </div>
                </div>`:""}
              </div>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${b(J)}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${b(ie)}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${b(f)}" placeholder="ชื่อครู (ไม่บังคับ)" />
                  <button id="sp-hide-teacher" type="button" class="text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap">ไม่แสดง</button>
                </div>
              </div>
            </div>
            <!-- Sessions -->
            <div id="sp-sessions" class="px-4 pt-3 pb-2 space-y-1.5">
              ${t.map((V,se)=>`
              <div class="flex items-center gap-1.5 sp-sess-row" data-si="${se}">
                <select class="sp-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${se}">
                  ${s}
                </select>
                <select class="sp-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${se}">
                  ${n}
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
          <datalist id="sp-room-list">${D}</datalist>
        </div>
        <!-- Global cancel -->
        <div class="px-5 pb-5 pt-2 border-t border-gray-100 flex-shrink-0">
          <button id="sp-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`,t.forEach((V,se)=>{const re=i.querySelector(`.sp-sess-row[data-si="${se}"]`);re&&(re.querySelector(".sp-dow").value=V.day_of_week??o,re.querySelector(".sp-period").value=V.period_no??r,re.querySelector(".sp-span").value=V.span_periods??1)}),i.querySelector("#sp-close").addEventListener("click",()=>i.remove()),i.querySelector("#sp-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#sp-subj-name").addEventListener("input",V=>{J=V.target.value}),i.querySelector("#sp-class").addEventListener("input",V=>{ie=V.target.value}),i.querySelector("#sp-teacher").addEventListener("input",V=>{f=V.target.value}),i.querySelector("#sp-color").addEventListener("click",()=>{v=!v,_()}),i.querySelector("#sp-hide-teacher").addEventListener("click",()=>{f="",i.querySelector("#sp-teacher").value=""}),i.querySelectorAll(".sp-color-option").forEach(V=>V.addEventListener("click",()=>{I=V.dataset.color,v=!1,_()})),i.querySelectorAll(".sp-dow").forEach(V=>V.addEventListener("change",()=>{t[+V.dataset.si].day_of_week=+V.value})),i.querySelectorAll(".sp-period").forEach(V=>V.addEventListener("change",()=>{t[+V.dataset.si].period_no=+V.value})),i.querySelectorAll(".sp-span").forEach(V=>V.addEventListener("change",()=>{t[+V.dataset.si].span_periods=+V.value})),i.querySelectorAll(".sp-del-sess").forEach(V=>V.addEventListener("click",()=>{t.splice(+V.dataset.si,1),t.length||t.push({day_of_week:o,period_no:r,span_periods:1}),_()})),i.querySelector("#sp-add-sess").addEventListener("click",()=>{t.push({day_of_week:o,period_no:B[0]??r,span_periods:1}),_()}),(Z=i.querySelector("#sp-delete"))==null||Z.addEventListener("click",async()=>{i.remove(),await O()}),i.querySelector("#sp-save").addEventListener("click",async()=>{var h,L,a,c;const V=i.querySelector("#sp-subj-name").value.trim()||null,se=i.querySelector("#sp-class").value.trim()||null,re=i.querySelector("#sp-teacher").value.trim()||null,l=((h=T.find(u=>u.subject_name===V))==null?void 0:h.id)??null;if(se||V||l)try{await ds({teacher_id:e.id,room_key:mt({className:se,subjectName:V,fallbackId:l}),class_name:se,color_hex:I})}catch(u){F("บันทึกสีไม่ได้: "+ce(u),"warning")}i.remove(),await H({day_of_week:((L=t[0])==null?void 0:L.day_of_week)??o,period_no:((a=t[0])==null?void 0:a.period_no)??r,span_periods:((c=t[0])==null?void 0:c.span_periods)??1,subject_id:l,subject_name:V,class_name:se,teacher_name:re,note:null,academic_year:R,semester:A})})}_()}async function Ls(e,o,r,p,T,C,R){var ie;(ie=document.getElementById("vision-upload"))==null||ie.remove();const A=await rs().catch(()=>[]),x=await ls().catch(()=>[]),H=[...new Set([...A,...x])].sort(),O=e!=null&&e.id?await Lt(e.id).catch(()=>[]):[],X=Object.fromEntries((O??[]).map(f=>[f.room_key,f.color_hex])),y=document.createElement("div");y.id="vision-upload",y.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",y.innerHTML=`
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
    </div>`,document.body.appendChild(y),y.querySelector("#vision-cancel").addEventListener("click",()=>y.remove()),y.querySelector("#vision-close").addEventListener("click",()=>y.remove());let M=null,G="image/jpeg",B=[];const ae=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],oe=r.map(f=>f.period_no);function J(){const f=y.querySelector("#vision-groups");if(!f)return;const I=ae.map((s,n)=>`<option value="${n}">${s}</option>`).join(""),v=oe.map(s=>`<option value="${s}">คาบ ${s}</option>`).join(""),W=o.map(s=>`<option value="${s.subject_name}">`).join(""),D=H.map(s=>`<option value="${s}">`).join("");f.innerHTML="",B.forEach((s,n)=>{const t=s.color_hex?We(s.color_hex):ze({teacherId:e==null?void 0:e.id,className:s.class_name,subjectName:s.subject_name,fallbackId:s.subject_id},X),i=document.createElement("div");i.className="border-2 rounded-xl overflow-hidden vg-card",i.style.borderColor=t.dot,i.innerHTML=`
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
                ${Ye.map(_=>`
                <button type="button"
                  class="vg-color-option w-5 h-5 rounded-full border-2 ${_.dot.toLowerCase()===t.dot.toLowerCase()?"border-gray-700":"border-white"} shadow-sm"
                  style="background:${_.dot}"
                  data-gi="${n}"
                  data-color="${_.dot}"
                  title="เลือกสี"></button>`).join("")}
              </div>
            </div>
          </div>
        </div>
        <!-- Sessions -->
        <div class="px-4 pt-3 pb-2 space-y-1.5 vg-sessions" data-gi="${n}">
          ${s.sessions.map((_,q)=>`
          <div class="flex items-center gap-1.5 vs-row" data-gi="${n}" data-si="${q}">
            <select class="vs-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${n}" data-si="${q}">
              ${I}
            </select>
            <select class="vs-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${n}" data-si="${q}">
              ${v}
            </select>
            <select class="vs-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-gi="${n}" data-si="${q}">
              <option value="1">1 คาบ</option>
              <option value="2">2 คาบ</option>
              <option value="3">3 คาบ</option>
              <option value="4">4 คาบ</option>
            </select>
            <button type="button" class="vs-del text-red-300 hover:text-red-500 text-base" data-gi="${n}" data-si="${q}">✕</button>
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
        <datalist id="room-list-${n}">${D}</datalist>`,f.appendChild(i),s.sessions.forEach((_,q)=>{const P=i.querySelector(`.vs-row[data-gi="${n}"][data-si="${q}"]`);P&&(P.querySelector(".vs-dow").value=_.day_of_week??0,P.querySelector(".vs-period").value=_.period_no??1,P.querySelector(".vs-span").value=_.span_periods??1)})}),f.querySelectorAll(".vg-subj-name").forEach(s=>s.addEventListener("input",()=>{B[+s.dataset.gi].subject_name=s.value})),f.querySelectorAll(".vg-class").forEach(s=>s.addEventListener("input",()=>{B[+s.dataset.gi].class_name=s.value})),f.querySelectorAll(".vg-teacher").forEach(s=>s.addEventListener("input",()=>{B[+s.dataset.gi].teacher_name=s.value})),f.querySelectorAll(".vg-hide-teacher").forEach(s=>s.addEventListener("click",()=>{const n=+s.dataset.gi;B[n].teacher_name="";const t=f.querySelector(`.vg-teacher[data-gi="${n}"]`);t&&(t.value="")})),f.querySelectorAll(".vg-color-option").forEach(s=>s.addEventListener("click",()=>{B[+s.dataset.gi].color_hex=s.dataset.color,J()})),f.querySelectorAll(".vg-del-group").forEach(s=>s.addEventListener("click",()=>{B.splice(+s.dataset.gi,1),J()})),f.querySelectorAll(".vg-save-group").forEach(s=>s.addEventListener("click",async()=>{var _;const n=+s.dataset.gi,t=B[n],i=s.textContent;s.disabled=!0,s.textContent="⏳ กำลังบันทึก...";try{const q=t.color_hex??ze({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},X).dot;(t.class_name||t.subject_name||t.subject_id)&&await ds({teacher_id:e.id,room_key:mt({className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id}),class_name:((_=t.class_name)==null?void 0:_.trim())||null,color_hex:q}).catch(P=>F("บันทึกสีไม่ได้: "+ce(P),"warning")),await Promise.all(t.sessions.map(P=>{var k,S,$;return cs({teacher_id:e.id,subject_id:t.subject_id??null,subject_name:((k=t.subject_name)==null?void 0:k.trim())||null,class_name:((S=t.class_name)==null?void 0:S.trim())||null,teacher_name:(($=t.teacher_name)==null?void 0:$.trim())||null,day_of_week:P.day_of_week,period_no:P.period_no,span_periods:P.span_periods??1,academic_year:p,semester:T})})),s.textContent="✅ บันทึกแล้ว",s.style.background="#16a34a",setTimeout(()=>{const P=t.color_hex?We(t.color_hex):ze({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},X);s.disabled=!1,s.textContent=i,s.style.background=P.dot},2e3),Pe(e,p,T,R).catch(()=>{})}catch(q){F("บันทึกกลุ่มนี้ไม่สำเร็จ: "+ce(q),"error"),s.disabled=!1,s.textContent=i}})),f.querySelectorAll(".vs-dow").forEach(s=>s.addEventListener("change",()=>{B[+s.dataset.gi].sessions[+s.dataset.si].day_of_week=+s.value})),f.querySelectorAll(".vs-period").forEach(s=>s.addEventListener("change",()=>{B[+s.dataset.gi].sessions[+s.dataset.si].period_no=+s.value})),f.querySelectorAll(".vs-span").forEach(s=>s.addEventListener("change",()=>{B[+s.dataset.gi].sessions[+s.dataset.si].span_periods=+s.value})),f.querySelectorAll(".vs-del").forEach(s=>s.addEventListener("click",()=>{const n=B[+s.dataset.gi];n.sessions.splice(+s.dataset.si,1),n.sessions.length||B.splice(+s.dataset.gi,1),J()})),f.querySelectorAll(".vg-add-session").forEach(s=>s.addEventListener("click",()=>{B[+s.dataset.gi].sessions.push({day_of_week:0,period_no:oe[0]??1,span_periods:1}),J()}))}y.querySelector("#vision-file").addEventListener("change",f=>{const I=f.target.files[0];if(!I)return;G=I.type||"image/jpeg";const v=new FileReader;v.onload=W=>{M=W.target.result.split(",")[1],y.querySelector("#vision-img").src=W.target.result,y.querySelector("#vision-preview").classList.remove("hidden"),y.querySelector("#vision-analyze").disabled=!1,y.querySelector("#vision-label").classList.add("hidden")},v.readAsDataURL(I)}),y.querySelector("#vision-analyze").addEventListener("click",async()=>{var v,W,D,s,n;if(!M)return;const f=y.querySelector("#vision-analyze"),I=y.querySelector("#vision-status");f.disabled=!0,f.textContent="⏳ กำลังวิเคราะห์...",I.textContent="กำลังส่งรูปไป Gemini AI...",I.classList.remove("hidden");try{const t=o.map(se=>`"${se.subject_name}" (id:${se.id})`).join(", "),_=`วิเคราะห์ตารางสอนในภาพนี้อย่างละเอียด
แต่ละช่องในตารางมี 3 ส่วน: บรรทัด1=ชื่อวิชา(ตัวหนาภาษาอังกฤษ), บรรทัด2=ชั้น/ห้องเรียน, บรรทัด3=ชื่อครู
คาบเรียน: ${r.map(se=>{var re,l;return`คาบ ${se.period_no}: ${(re=se.start_time)==null?void 0:re.slice(0,5)}-${(l=se.end_time)==null?void 0:l.slice(0,5)}`}).join(", ")}
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
- ช่องว่างไม่ต้องใส่`,{data:q,error:P}=await ps.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:_,imageBase64:M,imageMimeType:G}});if(P)throw new Error(P.message??"Edge Function error");if(q!=null&&q.error)throw new Error(`Gemini: ${q.error.message??q.error.status}`);const k=((n=(s=(D=(W=(v=q.candidates)==null?void 0:v[0])==null?void 0:W.content)==null?void 0:D.parts)==null?void 0:s[0])==null?void 0:n.text)??"",S=k.match(/```json\s*([\s\S]*?)```/)||k.match(/(\[[\s\S]*?\])/),$=S?S[1]??S[0]:null;if(!$)throw console.error("Raw:",k),new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");B=JSON.parse($).map(se=>({...se,sessions:(se.sessions??[]).map(re=>({...re}))})),J(),y.querySelector("#vision-result").classList.remove("hidden"),y.querySelector("#vision-save").classList.remove("hidden");const V=B.reduce((se,re)=>se+re.sessions.length,0);I.textContent=`✅ พบ ${B.length} กลุ่มวิชา ${V} คาบ — ตรวจสอบแล้วกด "บันทึก"`}catch(t){console.error("Vision error:",t);const i=t.message??"ไม่ทราบสาเหตุ";I.innerHTML=`
        <span class="text-red-500 font-medium">❌ ${i}</span>
        <br/><span class="text-gray-400 text-xs">ปัญหานี้ต้องให้แอดมินแก้ไข</span>`;const _="vision-err-feedback";if(!y.querySelector(`#${_}`)){const q=document.createElement("button");q.id=_,q.className="mt-2 w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition",q.textContent="📨 แจ้งปัญหานี้ให้แอดมิน",q.addEventListener("click",()=>{var P;y.remove(),(P=window._openFeedbackWidget)==null||P.call(window,`[ตารางสอน AI] ${i}`)}),I.after(q)}}finally{f.disabled=!1,f.textContent="🔍 วิเคราะห์อีกครั้ง"}}),y.querySelector("#vision-add-group").addEventListener("click",()=>{B.push({subject_name:"",class_name:"",teacher_name:"",subject_id:null,sessions:[{day_of_week:0,period_no:oe[0]??1,span_periods:1}]}),y.querySelector("#vision-result").classList.remove("hidden"),y.querySelector("#vision-save").classList.remove("hidden"),J()}),y.querySelector("#vision-save").addEventListener("click",async()=>{y.remove(),await Pe(e,p,T,R)})}async function bo(e,o){var H,O,X;const r=await $e().catch(()=>({})),p=parseInt(r.academicYear??2568),T=parseInt(r.semester??1),C=r.scheduleVisionEnabled==="true",R=xs(r,e);je("schedule"),Ie("สร้างตารางสอน","schedule"),_e(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-violet-400 text-white
                  text-3xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🗓️
      </div>
      <h2 class="text-2xl font-bold text-gray-800">สร้างตารางสอน</h2>
      <p class="text-gray-500 text-sm mt-1">ภาค ${T} / ${p}</p>
    </div>

    ${C&&R?`
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
  </div>`);const A=e?await as(e.id).catch(()=>[]):[],x=await ut().catch(()=>[]);(H=document.getElementById("btn-open-vision"))==null||H.addEventListener("click",()=>{Ls(e,A,x,p,T,R,r)}),(O=document.getElementById("btn-open-grid"))==null||O.addEventListener("click",()=>{Pe(e,p,T,r)}),(X=document.getElementById("btn-skip-schedule"))==null||X.addEventListener("click",()=>{o&&o()})}const dt=[{group:"ชื่อแท็บภาษา",fields:[["label","ชื่อแท็บ (แสดงบนปุ่มแท็บทุกจุด)"]]},{group:"หัวตาราง",fields:[["tableTitle","ชื่อตาราง มาตรฐาน/ตัวชี้วัด"],["tableHint","คำอธิบายตาราง (hint)"]]},{group:"คอลัมน์",fields:[["colsBasic","คอลัมน์พื้นฐาน (คั่นด้วย | )"],["colsExtra","คอลัมน์เพิ่มเติม (คั่นด้วย | )"],["tplBasic","ชื่อปุ่มเทมเพลตพื้นฐาน"],["tplExtra","ชื่อปุ่มเทมเพลตเพิ่มเติม"],["rowHeader","หัวคอลัมน์ข้อ/ลำดับ"]]},{group:"คำอธิบายรายวิชา",fields:[["descLabel","Label ช่องคำอธิบายรายวิชา"],["descPlaceholder","Placeholder คำอธิบายรายวิชา"]]},{group:"ผู้ลงนาม",fields:[["signerLabel","Label ผู้ลงนาม"],["signerPlaceholder","Placeholder ผู้ลงนาม"],["signerHint","คำใต้ช่องผู้ลงนาม"]]},{group:"จุดประสงค์วัดผล",fields:[["objTitle","หัวข้อจุดประสงค์"],["between","ป้ายระหว่างภาค"],["mid","ป้ายกลางภาค"],["final","ป้ายปลายภาค"],["pickerTitleBetween","ชื่อ dialog — ระหว่างภาค"],["pickerTitleMid","ชื่อ dialog — กลางภาค"],["pickerTitleFinal","ชื่อ dialog — ปลายภาค"]]},{group:"ส่วนช่วยเติมข้อมูล",fields:[["helpTitle","หัวข้อแผง AI"],["helpSub","คำอธิบายแผง AI"],["topicLabel","Label บท/เรื่อง"],["topicPlaceholder","Placeholder บท/เรื่อง"],["btnCurriculum","ปุ่มค้นหลักสูตร"],["btnAI","ปุ่ม AI ร่าง"],["btnImg","ปุ่มอ่านรูป"]]},{group:"ข้อความปุ่ม/Toast",fields:[["save","ปุ่มบันทึก"],["close","ปุ่มปิด"],["addTopic","ปุ่มเพิ่มบท"],["addCol","ปุ่มเพิ่มคอลัมน์"],["addRow","ปุ่มเพิ่มแถว"],["delRow","ปุ่มลบแถว"],["pickerOk","ปุ่ม OK ใน dialog"],["pickerCancel","ปุ่มยกเลิก ใน dialog"],["toastSaved","Toast บันทึกสำเร็จ"],["toastSearchEmpty","Toast ไม่พบในหลักสูตรแกนกลาง"],["toastAIDone","Toast AI ร่างสำเร็จ"],["toastImgDone","Toast อ่านรูปสำเร็จ"],["noOpts","ข้อความเมื่อยังไม่มีข้อ"],["notSelected","ข้อความยังไม่เลือก"]]}];function es(e,o){var T,C,R;const r={...o,...e},p={};for(const{fields:A}of dt)for(const[x]of A)x==="colsBasic"?p[x]=(r.colsBasic??[]).join(" | "):x==="colsExtra"?p[x]=(r.colsExtra??[]).join(" | "):x==="pickerTitleBetween"?p[x]=((T=r.pickerTitles)==null?void 0:T.between)??"":x==="pickerTitleMid"?p[x]=((C=r.pickerTitles)==null?void 0:C.mid)??"":x==="pickerTitleFinal"?p[x]=((R=r.pickerTitles)==null?void 0:R.final)??"":p[x]=r[x]??"";return p}function fo(e){const o={};for(const{fields:r}of dt)for(const[p]of r){const T=String(e[p]??"").trim();p==="colsBasic"?o.colsBasic=T.split("|").map(C=>C.trim()).filter(Boolean):p==="colsExtra"?o.colsExtra=T.split("|").map(C=>C.trim()).filter(Boolean):p==="pickerTitleBetween"?(o.pickerTitles=o.pickerTitles??{},o.pickerTitles.between=T):p==="pickerTitleMid"?(o.pickerTitles=o.pickerTitles??{},o.pickerTitles.mid=T):p==="pickerTitleFinal"?(o.pickerTitles=o.pickerTitles??{},o.pickerTitles.final=T):o[p]=T}return o}async function yo(e,o=!1){je("course-doc-lang"),Ie("ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);const r=["th","jawi","ar","rumi"],p={th:"ภาษาไทย",jawi:"يَاوِي (Jawi)",ar:"العربية",rumi:"Rumi (Melayu)"},T={th:"ltr",jawi:"rtl",ar:"rtl",rumi:"ltr"},[C,R]=await Promise.all([Os().catch(()=>[]),o?fe(()=>import("./api-CWYJTdOa.js"),__vite__mapDeps([1,2,3,4,5])).then(y=>y.getTeachers()).catch(()=>[]):Promise.resolve([])]),A=Object.fromEntries(C.map(y=>[y.lang_key,y])),x=o?r:r.filter(y=>{const M=A[y];return M&&(e==null?void 0:e.id)&&(M.editor_teacher_ids??[]).includes(e.id)});if(!x.length){_e(`<div class="max-w-lg mx-auto text-center py-20 text-gray-400">
      <p class="text-4xl mb-4">🔒</p>
      <p class="font-medium">ยังไม่มีสิทธิ์แก้ไขภาษาใด</p>
      <p class="text-xs mt-1">ขอสิทธิ์จากแอดมินเพื่อแก้ไขภาษาที่รับผิดชอบ</p>
    </div>`);return}let H=x[0];const O=y=>{var M,G,B;return((G=(M=A[y])==null?void 0:M.settings)==null?void 0:G.label)||((B=COURSE_DOC_LANGS[y])==null?void 0:B.label)||p[y]||y},X=()=>{var W,D;const y=x.map(s=>`
      <button class="cdl-tab px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap
        ${s===H?"bg-emerald-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
        data-lang="${s}" dir="${T[s]}">${O(s)}</button>`).join(""),M=A[H]??{settings:{},editor_teacher_ids:[]},G=COURSE_DOC_LANGS[H]??{},B=es(M.settings??{},G),ae=T[H],oe=A.th??{},J=es(oe.settings??{},COURSE_DOC_LANGS.th??{}),ie=H!=="th",f=dt.map(({group:s,fields:n})=>`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${s}</p>
        ${ie?`
        <div class="flex items-center gap-3 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-t-xl">
          <span class="w-44 flex-shrink-0"></span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ภาษาไทย (อ้างอิง)</span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider" dir="${ae}">${O(H)}</span>
        </div>`:""}
        <div class="bg-white rounded-xl ${ie?"rounded-tl-none rounded-tr-none":""} border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          ${n.map(([t,i])=>`
          <div class="flex items-start gap-3 px-4 py-3">
            <label class="w-44 flex-shrink-0 text-xs text-gray-500 pt-1.5 leading-tight">${i}</label>
            ${ie?`
            <div class="flex-1 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100 select-none" dir="ltr">
              ${b(String(J[t]??"—"))}
            </div>`:""}
            <input id="cdl-${t}" type="text" dir="${ae}"
              class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              value="${b(String(B[t]??""))}"
              placeholder="${b(String(G[t]??""))}" />
          </div>`).join("")}
        </div>
      </div>`).join(""),I=M.editor_teacher_ids??[],v=o?`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ผู้มีสิทธิ์แก้ไขภาษานี้</p>
        <div class="bg-white rounded-xl border border-gray-200 shadow-md p-4">
          <p class="text-xs text-gray-400 mb-3">เลือกครูที่จะให้แก้ไข <span dir="${ae}" class="font-semibold text-emerald-700">${O(H)}</span></p>
          <div class="max-h-48 overflow-y-auto space-y-1" id="cdl-editors">
            ${R.filter(s=>s.id!==(e==null?void 0:e.id)).map(s=>`
              <label class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">
                <input type="checkbox" class="cdl-editor-cb" value="${s.id}" ${I.includes(s.id)?"checked":""}/>
                <span class="font-medium text-gray-800">${b(s.full_name)}</span>
                <span class="text-xs text-gray-400">${b(s.teacher_code??"")} · ${b(s.dept??"—")}</span>
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

      ${f}
      ${v}
    </div>`),document.querySelectorAll(".cdl-tab").forEach(s=>{s.addEventListener("click",()=>{H=s.dataset.lang,X()})}),(W=document.getElementById("cdl-save-settings"))==null||W.addEventListener("click",async()=>{var i;const s={};for(const{fields:_}of dt)for(const[q]of _)s[q]=((i=document.getElementById(`cdl-${q}`))==null?void 0:i.value)??"";const n=fo(s),t=document.getElementById("cdl-save-settings");t.disabled=!0,t.textContent="กำลังบันทึก...";try{const _=await en(H,n,e==null?void 0:e.id);A[H]={...A[H],..._},F(`บันทึกการตั้งค่า ${O(H)} สำเร็จ`,"success")}catch(_){F("บันทึกไม่สำเร็จ: "+ce(_),"error")}t.disabled=!1,t.innerHTML="💾 บันทึก"}),(D=document.getElementById("cdl-save-editors"))==null||D.addEventListener("click",async()=>{const s=[...document.querySelectorAll(".cdl-editor-cb:checked")].map(t=>Number(t.value)),n=document.getElementById("cdl-save-editors");n.disabled=!0,n.textContent="กำลังบันทึก...";try{const t=await tn(H,s);A[H]={...A[H],...t},F(`อัปเดตผู้มีสิทธิ์ ${O(H)} สำเร็จ`,"success")}catch(t){F("บันทึกไม่สำเร็จ: "+ce(t),"error")}n.disabled=!1,n.textContent="💾 บันทึกผู้มีสิทธิ์"})};X()}async function vo(e){je("announcements-view"),Ie("ประกาศ","announcement");const{getAllAnnouncementsForTeacher:o,getMyAcks:r,ackAnnouncement:p,getSupervisorComments:T,getSystemConfig:C,getTeacherBusyPeriodsOnDate:R,incrementAnnouncementView:A,incrementAnnouncementLike:x,getAnnouncementCommentsBulk:H,addAnnouncementComment:O,deleteAnnouncementComment:X}=await fe(async()=>{const{getAllAnnouncementsForTeacher:l,getMyAcks:h,ackAnnouncement:L,getSupervisorComments:a,getSystemConfig:c,getTeacherBusyPeriodsOnDate:u,incrementAnnouncementView:m,incrementAnnouncementLike:E,getAnnouncementCommentsBulk:ee,addAnnouncementComment:Q,deleteAnnouncementComment:z}=await import("./api-CWYJTdOa.js");return{getAllAnnouncementsForTeacher:l,getMyAcks:h,ackAnnouncement:L,getSupervisorComments:a,getSystemConfig:c,getTeacherBusyPeriodsOnDate:u,incrementAnnouncementView:m,incrementAnnouncementLike:E,getAnnouncementCommentsBulk:ee,addAnnouncementComment:Q,deleteAnnouncementComment:z}},__vite__mapDeps([1,2,3,4,5]));let y=null;try{y=await C()}catch{}_e(`<div class="animate-fade max-w-2xl mx-auto">
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
  </div>`);const M=l=>String(l??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),G=l=>new Date(l).toLocaleDateString("th-TH",{dateStyle:"long"}),B=l=>l?new Date(l).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",ae=l=>new Date(new Date(l).getTime()+7*36e5).toISOString().slice(0,10),oe={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},J=l=>l?l.startsWith("academic")?"bg-blue-100 text-blue-700":l.startsWith("registrar")?"bg-violet-100 text-violet-700":l==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",ie={general:"ทั่วไป",profile:"โปรไฟล์",schedule:"ตารางสอน",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},f=[{key:"pinned",label:"📌 ปักหมุด",color:"from-amber-400 to-orange-400",filter:l=>l.priority>0},{key:"academic",label:"🎓 ฝ่ายวิชาการ",color:"from-blue-400 to-indigo-400",filter:l=>l.priority===0&&(l.creator_role??"").startsWith("academic")},{key:"registrar",label:"📋 ฝ่ายทะเบียน",color:"from-violet-400 to-purple-400",filter:l=>l.priority===0&&(l.creator_role??"").startsWith("registrar")},{key:"dept_head",label:"🏫 หัวหน้ากลุ่มสาระ",color:"from-emerald-400 to-teal-400",filter:l=>l.priority===0&&l.creator_role==="dept_head"},{key:"admin",label:"⚙️ ทั่วไป",color:"from-gray-300 to-gray-400",filter:l=>l.priority===0&&!l.creator_role}],I=l=>{if(!l)return"";const h=Math.ceil((new Date(l)-new Date)/864e5);return h<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${B(l)}</span>`:h<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${B(l)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${B(l)}</span>`};let v="announce";document.querySelectorAll(".ann-tab").forEach(l=>{l.addEventListener("click",()=>{v=l.dataset.tab,document.querySelectorAll(".ann-tab").forEach(h=>{const L=h.dataset.tab===v;h.className=`ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${L?"bg-white shadow-sm text-gray-800":"text-gray-500 hover:text-gray-700"}`}),document.getElementById("ann-panel-announce").classList.toggle("hidden",v!=="announce"),document.getElementById("ann-panel-myann").classList.toggle("hidden",v!=="myann"),document.getElementById("ann-panel-comments").classList.toggle("hidden",v!=="comments"),v==="myann"&&!D&&t()})});const W={general:{label:"ทั่วไป",icon:"📢",hasDeadline:!1},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",hasDeadline:!0},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",hasDeadline:!1},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",hasDeadline:!1},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",hasDeadline:!1}};let D=!1,s=[];const n=(l,h)=>{var c;const L=W[l.ann_type]??{label:l.ann_type,icon:"📢"},a=(l.target_class_ids??[]).map(u=>{var m;return((m=h.find(E=>E.id===u))==null?void 0:m.class_name)??`#${u}`}).join(", ");return`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 space-y-2" data-myann-id="${l.id}">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">${L.icon} ${L.label}</span>
            ${l.priority>0?'<span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-medium">📌 ปักหมุด</span>':""}
            ${l.is_active?"":'<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>'}
          </div>
          <p class="font-semibold text-gray-800">${M(l.title)}</p>
          ${l.body?`<p class="text-sm text-gray-500 mt-1 line-clamp-2">${M(l.body)}</p>`:""}
          ${l.file_url?`<a href="${M(l.file_url)}" target="_blank" class="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1">📎 ไฟล์แนบ</a>`:""}
          ${(c=l.attachment_urls)!=null&&c.length?`<div class="flex flex-wrap gap-1.5 mt-1">${l.attachment_urls.map(u=>`<a href="${M(u.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${M(u.name)}</a>`).join("")}</div>`:""}
          <p class="text-xs text-gray-400 mt-2">ห้อง: ${M(a)||"—"}</p>
        </div>
        <div class="flex gap-1 flex-shrink-0">
          <button onclick="window._editMyAnn(${l.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600 transition" title="แก้ไข">✏️</button>
          <button onclick="window._togglePinMyAnn(${l.id},${l.priority})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-amber-500 transition" title="${l.priority>0?"เลิกปักหมุด":"ปักหมุด"}">📌</button>
          <button onclick="window._deleteMyAnn(${l.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition" title="ลบ">🗑️</button>
        </div>
      </div>
    </div>`},t=async()=>{D=!0;const l=document.getElementById("ann-panel-myann");if(l){l.innerHTML='<div class="flex justify-center py-8 text-gray-400"><svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> กำลังโหลด...</div>';try{const{getTeacherOwnAnnouncements:h,getMyClasses:L,getTeacherPackageAccess:a}=await fe(async()=>{const{getTeacherOwnAnnouncements:E,getMyClasses:ee,getTeacherPackageAccess:Q}=await import("./api-CWYJTdOa.js");return{getTeacherOwnAnnouncements:E,getMyClasses:ee,getTeacherPackageAccess:Q}},__vite__mapDeps([1,2,3,4,5])),[c,u,m]=await Promise.all([h(e.id),L(e.id).catch(()=>[]),a(e.id).catch(()=>({hasSemester:!1}))]);s=u,_(c,m.hasSemester)}catch(h){l.innerHTML=`<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${h.message}</p>`}}},i=3,_=(l,h=!1)=>{var u;const L=document.getElementById("ann-panel-myann");if(!L)return;const a=h||l.length<i,c=h?'<span class="text-xs text-emerald-600 font-medium">✨ ไม่จำกัด</span>':`<span class="text-xs text-gray-400">${l.length}/${i} (ฟรี)</span>`;L.innerHTML=`
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
      ${l.length?l.map(m=>n(m,s)).join(""):`
      <div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📢</p>
        <p class="text-sm">ยังไม่มีประกาศ กดปุ่ม "สร้างประกาศ" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`,(u=document.getElementById("btn-create-myann"))==null||u.addEventListener("click",()=>{if(!a){F(`ใช้ครบ ${i} ประกาศแล้ว — อัพเกรดเพื่อใช้งานไม่จำกัด`,"warning");return}S()})},q=(l,h=[])=>s.map(L=>{var a;return`<label class="flex items-center gap-2 text-xs cursor-pointer hover:text-indigo-700 py-0.5">
        <input type="checkbox" name="myann-cls-${l}" value="${L.id}"
          ${h.includes(L.id)?"checked":""} class="rounded text-indigo-600 flex-shrink-0" />
        <span class="truncate">${M(L.class_name)}</span>
        <span class="text-gray-300 truncate">${M(((a=L.master_subjects)==null?void 0:a.subject_name)??"")}</span>
      </label>`}).join(""),P=(l,h=[],L="",a=[])=>`
    <div class="myann-entry border border-gray-200 rounded-xl p-3 space-y-2" data-entry="${l}" data-kept='${M(JSON.stringify(a)).replace(/'/g,"&#39;")}'>
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-indigo-600">ชุดที่ ${l+1}</span>
        ${l>0?`<button type="button" class="myann-remove-entry text-red-400 hover:text-red-600 text-sm px-2" data-entry="${l}">✕ ลบ</button>`:""}
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ห้องเรียน <span class="text-red-400">*</span></p>
        <div class="border border-gray-100 rounded-lg p-2 max-h-28 overflow-y-auto space-y-0.5">
          ${q(l,h)||'<p class="text-xs text-gray-400">ยังไม่มีห้องเรียน</p>'}
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
        <input name="myann-file-${l}" type="url" value="${M(L)}"
          placeholder="https://drive.google.com/..."
          class="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </div>
    </div>`,k=l=>{l.querySelectorAll(".myann-entry").forEach(h=>{const L=h.dataset.entry,a=JSON.parse(h.dataset.kept||"[]"),c=l.querySelector(`.myann-kept-files[data-entry="${L}"]`);c&&(c.innerHTML=a.map((u,m)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${M(u.name)}
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
          <input id="myann-title" type="text" value="${M((l==null?void 0:l.title)??"")}"
            placeholder="ระบุหัวข้อประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">รายละเอียด</label>
          <textarea id="myann-body" rows="2"
            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none">${M((l==null?void 0:l.body)??"")}</textarea>
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
            ${P(0,(l==null?void 0:l.target_class_ids)??[],(l==null?void 0:l.file_url)??"",(l==null?void 0:l.attachment_urls)??[])}
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="myann-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="myann-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
          ${l?"บันทึก":"สร้างประกาศ"}
        </button>
      </div>
    </div>`,document.body.appendChild(L),k(L),L.querySelector("#myann-close").addEventListener("click",()=>L.remove()),L.querySelector("#myann-cancel").addEventListener("click",()=>L.remove()),L.querySelector("#myann-type").addEventListener("change",u=>{L.querySelector("#myann-deadline-wrap").classList.toggle("hidden",u.target.value!=="deadline")}),(c=L.querySelector("#myann-add-entry"))==null||c.addEventListener("click",()=>{const u=L.querySelector("#myann-entries"),m=document.createElement("div");m.innerHTML=P(h),u.appendChild(m.firstElementChild),h++,a(),k(L)});const a=()=>{L.querySelectorAll(".myann-remove-entry").forEach(u=>{u.onclick=()=>{var E;const m=Number(u.dataset.entry);(E=L.querySelector(`.myann-entry[data-entry="${m}"]`))==null||E.remove()}})};a(),L.querySelector("#myann-save").addEventListener("click",async()=>{const u=L.querySelector("#myann-title").value.trim(),m=L.querySelector("#myann-body").value.trim(),E=L.querySelector("#myann-type").value,ee=L.querySelector("#myann-pin").checked,Q=L.querySelector("#myann-active").checked,z=E==="deadline"&&L.querySelector("#myann-deadline").value||null;if(!u){F("กรุณาระบุหัวข้อ","warning");return}if(E==="deadline"&&!z){F("กรุณาระบุวันและเวลา","warning");return}const ne=[...L.querySelectorAll(".myann-entry")].map(d=>{var N,Y;const j=Number(d.dataset.entry),U=[...d.querySelectorAll(`input[name="myann-cls-${j}"]:checked`)].map(le=>Number(le.value)),K=((N=d.querySelector(`input[name="myann-file-${j}"]`))==null?void 0:N.value.trim())??"",w=JSON.parse(d.dataset.kept||"[]"),te=[...((Y=d.querySelector(`input[name="myann-files-${j}"]`))==null?void 0:Y.files)??[]];return{classIds:U,fileUrl:K,keptFiles:w,newFiles:te}}).filter(d=>d.classIds.length>0);if(!ne.length){F("กรุณาเลือกอย่างน้อย 1 ห้องในแต่ละชุด","warning");return}const g=L.querySelector("#myann-save");g.disabled=!0,g.textContent="กำลังบันทึก...";try{const{createAnnouncement:d,updateAnnouncement:j}=await fe(async()=>{const{createAnnouncement:w,updateAnnouncement:te}=await import("./api-CWYJTdOa.js");return{createAnnouncement:w,updateAnnouncement:te}},__vite__mapDeps([1,2,3,4,5])),{uploadAssignmentFile:U}=await fe(async()=>{const{uploadAssignmentFile:w}=await import("./storage-CuUjCgvI.js");return{uploadAssignmentFile:w}},__vite__mapDeps([22,2]));if(l){const{classIds:w,fileUrl:te,keptFiles:N,newFiles:Y}=ne[0],le=[];for(const ue of Y)le.push(await U(ue,`class-${w[0]}/announcements`));const de=[...N,...le];await j(l.id,{title:u,body:m,isActive:Q,priority:ee?1:0,annType:E,targetClassIds:w,fileUrl:te,attachmentUrls:de.length?de:null,deadlineAt:z})}else await Promise.all(ne.map(async({classIds:w,fileUrl:te,newFiles:N})=>{const Y=[];for(const le of N)Y.push(await U(le,`class-${w[0]}/announcements`));return d({title:u,body:m,isActive:Q,priority:ee?1:0,teacherId:e.id,annType:E,targetClassIds:w,fileUrl:te,attachmentUrls:Y.length?Y:null,deadlineAt:z})}));L.remove();const K=l?1:ne.length;F(`บันทึก ${K} ประกาศสำเร็จ ✅`,"success"),D=!1,t()}catch(d){F("บันทึกไม่สำเร็จ: "+ce(d),"error"),g.disabled=!1,g.textContent=l?"บันทึก":"สร้างประกาศ"}})};window._editMyAnn=async l=>{const{getTeacherOwnAnnouncements:h}=await fe(async()=>{const{getTeacherOwnAnnouncements:c}=await import("./api-CWYJTdOa.js");return{getTeacherOwnAnnouncements:c}},__vite__mapDeps([1,2,3,4,5])),a=(await h(e.id).catch(()=>[])).find(c=>c.id===l);a&&S(a)},window._togglePinMyAnn=async(l,h)=>{const{updateAnnouncement:L}=await fe(async()=>{const{updateAnnouncement:a}=await import("./api-CWYJTdOa.js");return{updateAnnouncement:a}},__vite__mapDeps([1,2,3,4,5]));await L(l,{priority:h>0?0:1}).catch(()=>{}),D=!1,t()},window._deleteMyAnn=async l=>{if(!confirm("ลบประกาศนี้?"))return;const{deleteAnnouncement:h}=await fe(async()=>{const{deleteAnnouncement:L}=await import("./api-CWYJTdOa.js");return{deleteAnnouncement:L}},__vite__mapDeps([1,2,3,4,5]));await h(l).catch(()=>{}),F("ลบประกาศแล้ว","success"),D=!1,t()};const $=l=>l?new Date(l+"T00:00:00").toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"",Z={yes:{label:"✅ สนใจเข้าร่วมแน่นอน",bg:"bg-emerald-600",ring:"ring-emerald-300"},maybe:{label:"🤔 ไม่แน่ใจ",bg:"bg-amber-500",ring:"ring-amber-300"},no:{label:"❌ ไม่สนใจ",bg:"bg-gray-400",ring:"ring-gray-300"}},V=(l,h,L=null,a=!1,c=0)=>{var z,ne,g;const u=l.requires_ack,m=!!h,E=l.ann_type==="training",ee=h?new Date(h).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"",Q=!l.is_active;return`
    <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow
      ${u&&!m&&!Q?"border-rose-200":Q?"border-dashed border-gray-200":"border-gray-100"}
      ${Q?"opacity-60":""}" data-ann-id="${l.id}">
      <div class="h-1 bg-gradient-to-r ${l.priority>0?"from-amber-400 to-orange-400":Q?"from-gray-200 to-gray-300":((z=f.find(d=>d.filter(l)))==null?void 0:z.color)??"from-gray-300 to-gray-400"}"></div>
      <div class="p-5">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
            ${u&&!m&&!Q?"bg-rose-50":Q?"bg-gray-50":"bg-indigo-50"}">
            ${l.priority>0?"📌":u?m?"✅":"🔔":Q?"📄":"📢"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${J(l.creator_role)}">
                ${M(oe[l.creator_role]??"แอดมิน")}
              </span>
              ${(ne=l.teachers)!=null&&ne.full_name?`<span class="text-[11px] text-gray-500 font-medium">${M(l.teachers.full_name)}</span>`:""}
              ${Q?'<span class="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full text-[11px]">ยกเลิกแล้ว</span>':""}
              ${l.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${u?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${I(l.due_date)}
            </div>
            <h3 class="text-base font-bold text-gray-800 mb-1.5">${M(l.title)}</h3>
            ${l.body?`<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-2">${M(l.body)}</p>`:""}
            ${l.file_url?`<img src="${M(l.file_url)}" class="w-full rounded-xl border border-gray-100 mb-2 cursor-pointer" onclick="window.open('${M(l.file_url)}','_blank')" />`:""}
            ${E&&l.event_date?`
              <div class="mt-3 mb-2 bg-violet-50 border border-violet-100 rounded-xl p-3 space-y-1.5">
                <p class="text-xs font-semibold text-violet-700">🎓 ข้อมูลการอบรม</p>
                <p class="text-sm text-gray-700">📅 ${$(l.event_date)}</p>
                ${(g=l.event_periods)!=null&&g.length?`<p class="text-sm text-gray-700">🕐 คาบที่ ${l.event_periods.sort((d,j)=>d-j).join(", ")}</p>`:""}
                ${l.event_location?`<p class="text-sm text-gray-700">📍 ${M(l.event_location)}</p>`:""}
              </div>`:""}
            <span class="text-[11px] text-gray-400">${G(l.created_at)}</span>
            ${E&&!Q?`
              <div class="mt-3">
                <p class="text-xs font-semibold text-gray-500 mb-2">คุณจะเข้าร่วมไหม?</p>
                <div class="flex flex-wrap gap-2">
                  ${Object.entries(Z).map(([d,j])=>`
                    <button class="ann-rsvp-btn px-3 py-2 rounded-xl text-sm font-semibold transition border-2
                      ${L===d?`${j.bg} text-white ring-2 ${j.ring} border-transparent`:"bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"}"
                      data-ann-id="${l.id}" data-rsvp="${d}">${j.label}</button>
                  `).join("")}
                </div>
              </div>`:""}
            ${u&&!Q?`
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
    </div>`},se=async()=>{const l=document.getElementById("ann-panel-announce");if(!l)return;let h,L,a;try{const{getMyRsvpsForTeacher:w}=await fe(async()=>{const{getMyRsvpsForTeacher:te}=await import("./api-CWYJTdOa.js");return{getMyRsvpsForTeacher:te}},__vite__mapDeps([1,2,3,4,5]));[h,L,a]=await Promise.all([o(),e!=null&&e.id?r(e.id).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?w(e.id).catch(()=>[]):Promise.resolve([])])}catch{l.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(e!=null&&e.id&&y){const w=parseInt(y.academicYear??2568),te=parseInt(y.semester??1),N=h.filter(Y=>{var le;return Y.ann_type==="training"&&Y.event_date&&((le=Y.event_periods)==null?void 0:le.length)});if(N.length){const Y=await Promise.all(N.map(de=>R(e.id,de.event_date,w,te).catch(()=>[]))),le=Object.fromEntries(N.map((de,ue)=>[de.id,Y[ue]]));h=h.filter(de=>{var xe;if(de.ann_type!=="training"||!((xe=de.event_periods)!=null&&xe.length))return!0;const ue=le[de.id]??[];return(de.schedule_filter??"all")==="any"?de.event_periods.some(ye=>!ue.includes(ye)):!de.event_periods.some(ye=>ue.includes(ye))})}}const c=Object.fromEntries(L.map(w=>[w.announcement_id,w.acked_at])),u=Object.fromEntries((a??[]).map(w=>[w.announcement_id,w.response])),m={};try{(await H(h.map(te=>te.id))).forEach(te=>{var N;(m[N=te.announcement_id]??(m[N]=[])).push(te)})}catch{}const E=`pp5_ann_liked_${(e==null?void 0:e.id)??"anon"}`,ee=`pp5_ann_viewed_${(e==null?void 0:e.id)??"anon"}`;let Q,z;try{Q=new Set(JSON.parse(localStorage.getItem(E)||"[]"))}catch{Q=new Set}try{z=new Set(JSON.parse(localStorage.getItem(ee)||"[]"))}catch{z=new Set}const ne=h.map(w=>w.id).filter(w=>!z.has(w));if(ne.length&&(e!=null&&e.id)){ne.forEach(w=>{z.add(w),A(w)});try{localStorage.setItem(ee,JSON.stringify([...z]))}catch{}ne.forEach(w=>{const te=h.find(N=>N.id===w);te&&(te.view_count=(te.view_count??0)+1)})}const g=h.filter(w=>w.is_active),d=h.filter(w=>!w.is_active);if(!h.length){l.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`;return}const j=f.map(w=>({...w,items:g.filter(w.filter)})).filter(w=>w.items.length);let U="";j.length?U+=j.map(w=>`
        <div class="mb-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-bold text-gray-700">${w.label}</span>
            <span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] rounded-full font-semibold">${w.items.length}</span>
            <div class="flex-1 h-px bg-gray-100 ml-1"></div>
          </div>
          <div class="space-y-3">${w.items.map(te=>V(te,c[te.id],u[te.id]??null,Q.has(te.id),(m[te.id]||[]).length)).join("")}</div>
        </div>`).join(""):U+=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-400 mb-5">
        <div class="text-4xl mb-3">📭</div><p class="font-semibold text-gray-500">ยังไม่มีประกาศที่แสดงอยู่ในขณะนี้</p>
      </div>`,d.length&&(U+=`<details class="mt-2">
        <summary class="cursor-pointer text-xs text-gray-400 font-semibold py-2 px-1 hover:text-gray-600 transition select-none list-none flex items-center gap-1">
          <span>▸</span> ประวัติประกาศที่ผ่านมา (${d.length} รายการ)
        </summary>
        <div class="space-y-3 mt-3">${d.map(w=>V(w,c[w.id],null,Q.has(w.id),(m[w.id]||[]).length)).join("")}</div>
      </details>`),l.innerHTML=U,l.querySelectorAll(".ann-ack-btn").forEach(w=>{w.addEventListener("click",async()=>{if(e!=null&&e.id){w.disabled=!0,w.textContent="กำลังบันทึก...";try{await p(Number(w.dataset.id),e.id),await se()}catch{F("บันทึกไม่สำเร็จ","error"),w.disabled=!1,w.textContent="🔔 กดรับทราบ"}}})}),l.querySelectorAll(".ann-rsvp-btn").forEach(w=>{w.addEventListener("click",async()=>{if(!(e!=null&&e.id))return;const{upsertAnnouncementRsvp:te}=await fe(async()=>{const{upsertAnnouncementRsvp:le}=await import("./api-CWYJTdOa.js");return{upsertAnnouncementRsvp:le}},__vite__mapDeps([1,2,3,4,5])),N=Number(w.dataset.annId),Y=w.dataset.rsvp;w.classList.contains("bg-emerald-600")||w.classList.contains("bg-amber-500")||w.classList.contains("bg-gray-400");try{await te(N,e.id,Y);const{showToast:le}=await fe(async()=>{const{showToast:ue}=await import("./ui-MMtcTwtt.js").then(xe=>xe.u);return{showToast:ue}},[]);le({yes:"บันทึก: สนใจเข้าร่วม ✅",maybe:"บันทึก: ไม่แน่ใจ 🤔",no:"บันทึก: ไม่สนใจ ❌"}[Y]??"บันทึกแล้ว","success"),await se()}catch{F("บันทึกไม่สำเร็จ","error")}})}),l.querySelectorAll(".ann-like-btn").forEach(w=>{w.addEventListener("click",()=>{if(!(e!=null&&e.id))return;const te=Number(w.dataset.id),N=Q.has(te),Y=N?-1:1;x(te,Y),N?Q.delete(te):Q.add(te);try{localStorage.setItem(E,JSON.stringify([...Q]))}catch{}const le=w.querySelector(".ann-like-count"),de=w.querySelector(".ann-like-icon");le.textContent=Math.max(0,(parseInt(le.textContent,10)||0)+Y),de.textContent=N?"🤍":"❤️",w.className=`ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${N?"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500":"bg-rose-50 text-rose-600"}`})});const K=(w,te)=>{const N=m[te]??[];w.innerHTML=N.length?N.map(Y=>{var le,de;return`
          <div class="flex items-start gap-2">
            <div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">${M((((le=Y.teachers)==null?void 0:le.full_name)??"?").charAt(0))}</div>
            <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-1.5">
              <p class="text-[11px] font-semibold text-gray-700">${M(((de=Y.teachers)==null?void 0:de.full_name)??"ครู")}</p>
              <p class="text-xs text-gray-600 whitespace-pre-wrap break-words">${M(Y.comment_text)}</p>
            </div>
          </div>`}).join(""):'<p class="text-xs text-gray-400">ยังไม่มีความคิดเห็น เป็นคนแรกได้เลย!</p>'};l.querySelectorAll(".ann-comment-toggle-btn").forEach(w=>{w.addEventListener("click",()=>{const te=Number(w.dataset.id),N=l.querySelector(`.ann-comment-section[data-id="${te}"]`);if(!N)return;const Y=N.classList.contains("hidden");N.classList.toggle("hidden"),Y&&K(N.querySelector(".ann-comment-list"),te)})}),l.querySelectorAll(".ann-comment-send-btn").forEach(w=>{const te=async()=>{if(!(e!=null&&e.id))return;const Y=Number(w.dataset.id),le=l.querySelector(`.ann-comment-input[data-id="${Y}"]`),de=le.value.trim();if(de){w.disabled=!0;try{const ue=await O(Y,e.id,de);(m[Y]??(m[Y]=[])).push(ue),le.value="";const xe=l.querySelector(`.ann-comment-section[data-id="${Y}"]`);K(xe.querySelector(".ann-comment-list"),Y);const ye=l.querySelector(`.ann-comment-toggle-btn[data-id="${Y}"] .ann-comment-count`);ye&&(ye.textContent=m[Y].length)}catch(ue){F("ส่งความคิดเห็นไม่สำเร็จ: "+ce(ue),"error")}w.disabled=!1}};w.addEventListener("click",te);const N=l.querySelector(`.ann-comment-input[data-id="${w.dataset.id}"]`);N==null||N.addEventListener("keydown",Y=>{Y.key==="Enter"&&te()})})},re=async()=>{const l=document.getElementById("ann-panel-comments");if(!l)return;if(!(e!=null&&e.id)){l.innerHTML='<p class="text-gray-400 text-sm p-4">ไม่พบข้อมูลครู</p>';return}let h;try{h=await T(e.id)}catch{l.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!h.length){l.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">💬</div>
        <p class="font-semibold text-gray-500">ยังไม่มีความคิดเห็น / บันทึก</p>
      </div>`;return}const L=[],a=new Map;for(const m of h){const E=m.round_id?`round__${m.round_id}__${m.supervisor_id}`:`noround__${m.supervisor_id}__${ae(m.created_at)}`;if(!a.has(E)){const ee={key:E,supervisor:m.teachers,date:m.created_at,roundEvent:m.work_calendar_events??null,items:[]};a.set(E,ee),L.push(ee)}a.get(E).items.push(m)}const c=m=>m?m.startsWith("academic")?"bg-blue-100 text-blue-700":m.startsWith("registrar")?"bg-violet-100 text-violet-700":m==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",u=m=>m?m.startsWith("academic")?"from-blue-400 to-indigo-400":m.startsWith("registrar")?"from-violet-400 to-purple-400":m==="dept_head"?"from-emerald-400 to-teal-400":"from-gray-300 to-gray-400":"from-gray-300 to-gray-400";l.innerHTML='<div class="space-y-4">'+L.map(m=>{var g,d;const E=(g=m.supervisor)==null?void 0:g.position,ee=((d=m.supervisor)==null?void 0:d.full_name)??"หัวหน้า",Q=oe[E]??"ผู้บังคับบัญชา",z=m.roundEvent,ne=z?`<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
             ${z.event_type==="inspection"&&z.round_number?`ตรวจครั้งที่ ${z.round_number}`:z.label}
           </span>`:"";return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-1 bg-gradient-to-r ${u(E)}"></div>
        <div class="p-5">
          <div class="flex items-center gap-2 flex-wrap mb-3">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${c(E)}">${M(Q)}</span>
            <span class="text-sm font-semibold text-gray-700">${M(ee)}</span>
            ${ne}
            <span class="text-[11px] text-gray-400 ml-auto">${G(m.date)}</span>
          </div>
          ${z!=null&&z.label&&z.event_type!=="inspection"?`<p class="text-xs text-indigo-600 mb-2 -mt-1">📅 ${M(z.label)}</p>`:""}
          <div class="space-y-2">
            ${m.items.map(j=>`
              <div class="flex items-start gap-2.5">
                <span class="flex-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[11px] font-semibold mt-0.5">${M(ie[j.metric]??j.metric)}</span>
                <p class="text-sm text-gray-700 leading-relaxed">${M(j.comment)}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>`}).join("")+"</div>"};await Promise.all([se(),re()])}function St(e){return new Promise(o=>{var T;(T=document.getElementById("qr-receipt-prompt-modal"))==null||T.remove();const r=document.createElement("div");r.id="qr-receipt-prompt-modal",r.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40",r.innerHTML=`
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
    `,document.body.appendChild(r);const p=C=>{r.remove(),o(C)};r.querySelector("#qr-receipt-prompt-yes").addEventListener("click",()=>p(!0)),r.querySelector("#qr-receipt-prompt-no").addEventListener("click",()=>p(!1))})}function ts(e,o,r,p=null){var C,R,A,x;const T=p!=null&&p.url?`<span style="display:inline-flex;flex-direction:column;align-items:center;gap:1px">
         <img src="${b(p.url)}" style="height:22px;object-fit:contain" />
         <span style="font-size:8px;color:#374151">${b(p.name||"ผู้ออกให้")}${p.title?" · "+b(p.title):""}</span>
       </span>`:"<span>ผู้ออกให้: .................. (ลงชื่อ)</span>";return`
    <div class="receipt-half">
      <div style="text-align: center; font-weight: bold; font-size: 11px; color: #4338ca; margin-bottom: 6px;">${r}</div>
      <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เลขที่ใบเสร็จ:</td><td style="text-align: right; font-weight: bold;">QR-${String(e.receipt_no).padStart(6,"0")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">วันที่:</td><td style="text-align: right;">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"long"})}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ชื่อ-สกุล:</td><td style="text-align: right;">${b(((C=e.students)==null?void 0:C.full_name)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">รหัสนักเรียน:</td><td style="text-align: right;">${b(((R=e.students)==null?void 0:R.student_code)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ห้อง:</td><td style="text-align: right;">${b(((A=e.students)==null?void 0:A.main_room)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เหตุผล:</td><td style="text-align: right; font-weight: bold;">${b(e.reason)}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ค่าธรรมเนียม:</td><td style="text-align: right; font-weight: bold;">${b(o)} บาท</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ออกให้โดย:</td><td style="text-align: right;">${b(((x=e.teachers)==null?void 0:x.full_name)||"แอดมิน")}</td></tr>
      </table>
      <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #d1d5db; font-size: 9px; color: #6b7280; display: flex; justify-content: space-between; align-items: flex-end; gap: 6px;">
        <span>ผู้รับ: .................. (ลงชื่อ)</span>
        ${T}
      </div>
    </div>
  `}async function qe(e,o,r,p,T,C=[],R="5",A=null){let x=document.getElementById("qr-print-media-styles");x||(x=document.createElement("style"),x.id="qr-print-media-styles",document.head.appendChild(x)),x.textContent=`
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
  `;const H=document.createElement("div");H.id="print-qr-area",H.className="hidden",document.body.appendChild(H),H.innerHTML=e.map((O,X)=>`
    <div class="print-room-block" style="padding: 0; margin: 0;">
      ${O.hideHeader?"":`
        <div class="print-room-header">
          <span>📋 ห้องเรียน: ${b(O.className)}</span>
          <span style="font-size: 11px; font-weight: normal; color: #6b7280;">${b(O.countLabel||`${O.students.length} คน`)}</span>
        </div>
      `}
      <div class="print-grid">
        ${O.students.map((y,M)=>`
          <div class="qr-print-card">
            <div style="width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 5px;">
              <canvas id="print-canvas-${y.id}-${M}-r${X}" style="width: 100%; max-width: 100%; height: auto;"></canvas>
            </div>
            <div style="width: 100%; text-align: left; font-family: Sarabun, sans-serif; font-size: 11px;">
              <p style="font-weight: bold; color: black; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${b(y.full_name)}</p>
              ${r?`<p style="color: #4b5563; margin: 2px 0 0 0; font-size: 9px;">รหัส: ${b(y.student_code||"-")}</p>`:""}
              <div style="display: flex; justify-content: space-between; margin-top: 3px; font-size: 9px; color: #4b5563;">
                ${T?`<span>ห้อง: ${b(y._roomName||O.className)}</span>`:""}
                ${p?`<span>เลขที่: ${y.seat_no}</span>`:""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("")+(C.length===0?"":`
    <div class="print-room-block">
      <div class="receipt-grid">
        ${C.map(O=>`
          <div class="qr-receipt-slip">
            ${ts(O,R,"🏫 ต้นขั้ว (โรงเรียนเก็บ)",A)}
            <div class="receipt-cut-line-v"></div>
            ${ts(O,R,"🎓 มอบให้นักเรียน",A)}
          </div>
        `).join("")}
      </div>
    </div>
  `);for(let O=0;O<e.length;O++)for(let X=0;X<e[O].students.length;X++){const y=e[O].students[X],M=document.getElementById(`print-canvas-${y.id}-${X}-r${O}`);M&&await tt.toCanvas(M,y.student_code||"",{width:250,margin:1,color:{dark:"#000000",light:"#ffffff"}})}window.print(),H.remove()}async function ho(e,o=null,r={}){var T,C,R,A,x,H;const p=!e||!!r.isQrManager;je("student-qr-print"),Ie("พิมพ์ QR Code นักเรียน"),_e(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูลห้องเรียนทั้งหมด...
    </div>
  `);try{const O=await sn(),X=await $e().catch(()=>({})),y=((C=(T=X.qrReissueFee)==null?void 0:T.trim)==null?void 0:C.call(T))||"5",M=((A=(R=X.qrReissueDoneMessage)==null?void 0:R.trim)==null?void 0:A.call(R))||"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง";let G={name:((x=X.qrIssuerSignatureName)==null?void 0:x.trim())||"",title:((H=X.qrIssuerSignatureTitle)==null?void 0:H.trim())||"",url:X.qrIssuerSignatureUrl||""};const{data:B}=await ps.from("classes").select("id, class_name, master_subjects ( id, grade_level, subject_group )").order("class_name").limit(1e4),ae=new Map;for(const g of B||[]){const d=g.class_name||"";d&&!ae.has(d)&&ae.set(d,g)}const oe=g=>{const d=g==="ศาสนา";return[...new Set(O.map(U=>d?U.religion_room:U.main_room).filter(Boolean))].sort((U,K)=>U.localeCompare(K,"th")).map(U=>{const K=ae.get(U);return{id:(K==null?void 0:K.id)||null,class_name:U,_meta:K||null}})},J=g=>{const d=g.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return d?d[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},ie=g=>{var j;const d=((j=g._meta)==null?void 0:j.master_subjects)??g.master_subjects;return d?Array.isArray(d)?d.length>0?d[0]:null:d:null},f=g=>{const d=ie(g);return(d==null?void 0:d.grade_level)||J(g.class_name||"")||"อื่น ๆ"},I=g=>{const d=ie(g),j=(d==null?void 0:d.subject_group)||"",U=g.class_name||"";return["AGM"].includes(j)||/^(PR|อก\.|อป\.)/i.test(U)?"ศาสนา":["ACDMVOC","AGMVOC"].includes(j)||/^ปวช\./i.test(U)?"ปวช":"สามัญ"},v={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},W=g=>{const d=oe(g),j=[...new Set(d.map(K=>f(K)).filter(Boolean))],U=v[g]||[];return[...new Set([...U,...j])].sort((K,w)=>K.localeCompare(w,"th"))};let D="สามัญ",s="",n="",t=null,i=parseInt(localStorage.getItem("qr_print_cols")||"4"),_=localStorage.getItem("qr_print_show_code")!=="false",q=localStorage.getItem("qr_print_show_seat")!=="false",P=localStorage.getItem("qr_print_show_room")!=="false",k="all",S=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(S)||S<1)&&(S=4);let $=[],Z=[],V="ทำหาย";const se=()=>{if(t==="individual"&&$.length>0)Q();else if(t==="class"&&n)z();else if(t==="level"&&s)ne();else{const g=document.getElementById("qr-preview-section");g&&g.classList.add("hidden")}};if(o){const g=B==null?void 0:B.find(d=>d.id==o);g&&(D=I(g),s=f(g),n=g.id)}const re=()=>{var Ee,Be;const g=["สามัญ","ศาสนา","ปวช"].map(pe=>`
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
                  <option value="ทำหาย" ${V==="ทำหาย"?"selected":""}>ทำหาย</option>
                  <option value="ชำรุด" ${V==="ชำรุด"?"selected":""}>ชำรุด</option>
                  <option value="อื่นๆ" ${V==="อื่นๆ"?"selected":""}>อื่นๆ</option>
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
                  ${g}
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
                  <input type="checkbox" id="show-seat" ${q?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขที่
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-code" ${_?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขประจำตัว
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-room" ${P?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
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
      `);const d=document.getElementById("qr-filter-category"),j=document.getElementById("qr-filter-level"),U=document.getElementById("qr-filter-class"),K=document.getElementById("qr-level-info"),w=document.getElementById("btn-print-whole-level"),te=document.getElementById("qr-individual-search"),N=document.getElementById("qr-individual-results"),Y=document.getElementById("qr-individual-repeat"),le=document.getElementById("qr-individual-clear"),de=document.getElementById("qr-individual-code-bulk"),ue=document.getElementById("qr-individual-add-codes"),xe=document.getElementById("qr-reissue-reason");xe.addEventListener("change",()=>{V=xe.value}),(Ee=document.getElementById("btn-qr-issuer-sig"))==null||Ee.addEventListener("click",()=>{$o(G,pe=>{G=pe})});const ye="px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm",xt="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700 relative",Ae={print:{btn:document.getElementById("qr-page-tab-print"),panel:document.getElementById("qr-tab-print")},history:{btn:document.getElementById("qr-page-tab-history"),panel:document.getElementById("qr-tab-history")},requests:{btn:document.getElementById("qr-page-tab-requests"),panel:document.getElementById("qr-tab-requests")}},ke=pe=>{Object.entries(Ae).forEach(([me,be])=>{!be.btn||!be.panel||(be.btn.className=me===pe?ye:xt,be.panel.classList.toggle("hidden",me!==pe))}),pe==="history"&&wo(Ae.history.panel,{cols:i,showCode:_,showSeat:q,showRoom:P,qrReissueFee:y,qrIssuer:G,isAdmin:!e}),pe==="requests"&&p&&ko(Ae.requests.panel,{teacher:e,cols:i,showCode:_,showSeat:q,showRoom:P,qrReissueDoneMessage:M,qrReissueFee:y,qrIssuer:G})};Ae.print.btn.addEventListener("click",()=>ke("print")),Ae.history.btn.addEventListener("click",()=>ke("history")),(Be=Ae.requests.btn)==null||Be.addEventListener("click",()=>ke("requests")),p&&window._pendingQRTab==="requests"&&(window._pendingQRTab=null,ke("requests")),p&&is({limit:500}).then(pe=>{const me=pe.filter(we=>!we.printed_at).length,be=document.getElementById("qr-requests-badge");be&&me>0&&(be.textContent=String(me),be.classList.remove("hidden"))}).catch(()=>{}),te.addEventListener("input",()=>E(te.value.trim())),le.addEventListener("click",()=>{var pe;$=[],Z=[],t=null,te.value="",de.value="",N.classList.add("hidden"),u(),(pe=document.getElementById("qr-preview-section"))==null||pe.classList.add("hidden")}),ue.addEventListener("click",()=>{const pe=a(de.value);if(!pe.length){F("กรุณากรอกรหัสนักเรียนอย่างน้อย 1 รหัส","warning");return}const me=new Map(O.map(he=>[String(he.student_code||"").trim(),he])),be=[],we=[];for(const he of pe){const Se=me.get(he);Se?be.push(Se):we.push(he)}Z=we,be.length>0?(c(be),de.value=we.join(`
`),F(`เพิ่มรายชื่อสำหรับพิมพ์ ${be.length} คน`,"success")):(u(),F("ไม่พบรหัสนักเรียนที่ระบุ","warning"))}),Y.addEventListener("change",()=>{const pe=Math.max(1,Math.min(40,parseInt(Y.value)||4));S=pe,Y.value=String(pe),localStorage.setItem("qr_print_individual_repeat",String(S)),u(),se()}),document.getElementById("show-seat").addEventListener("change",pe=>{q=pe.target.checked,localStorage.setItem("qr_print_show_seat",q),se()}),document.getElementById("show-code").addEventListener("change",pe=>{_=pe.target.checked,localStorage.setItem("qr_print_show_code",_),se()}),document.getElementById("show-room").addEventListener("change",pe=>{P=pe.target.checked,localStorage.setItem("qr_print_show_room",P),se()}),document.getElementById("select-print-gender").addEventListener("change",pe=>{k=pe.target.value,se()}),document.getElementById("select-print-cols").addEventListener("change",pe=>{i=parseInt(pe.target.value),localStorage.setItem("qr_print_cols",i),se()});const ge=()=>{D=d.value;const pe=W(D);j.innerHTML=`
          <option value="">-- เลือกระดับชั้น --</option>
          ${pe.map(me=>`<option value="${me}" ${me===s?"selected":""}>${me}</option>`).join("")}
        `,ve()},ve=()=>{s=j.value;const me=oe(D).filter(we=>s?f(we)===s:!0).sort((we,he)=>(we.class_name||"").localeCompare(he.class_name||"","th"));U.innerHTML=`
          <option value="">-- เลือกห้องเรียน (${me.length} ห้อง) --</option>
          ${me.map(we=>`
            <option value="${b(we.class_name)}" ${we.class_name===n?"selected":""}>${b(we.class_name)}</option>
          `).join("")}
        `,s&&me.length>0?(K.textContent=`ระดับ ${s} มีทั้งหมด ${me.length} ห้อง`,w.textContent=`📚 พิมพ์ทั้งระดับ ${s} (${me.length} ห้อง แยกหน้า)`,w.classList.remove("hidden")):(K.textContent="เลือกระดับชั้นเพื่อดูตัวเลือกพิมพ์ทั้งชั้น",w.classList.add("hidden"));const be=U.value;be?(n=be,t="class",z()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))};d.addEventListener("change",()=>{s="",n="",t=null,ge()}),j.addEventListener("change",()=>{n="",t=null,ve()}),U.addEventListener("change",()=>{n=U.value,n?(t="class",z()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))}),w.addEventListener("click",()=>{t="level",ne()}),ge()},l=g=>g?D==="ศาสนา"?g.religion_room||g.main_room||"ไม่ระบุห้อง":g.main_room||g.religion_room||"ไม่ระบุห้อง":"ไม่ระบุห้อง",h=g=>{const d=l(g),j=D==="ศาสนา",K=O.filter(w=>(j?w.religion_room:w.main_room)===d).sort((w,te)=>(w.student_code||"").localeCompare(te.student_code||"")).findIndex(w=>String(w.id)===String(g.id));return K>=0?K+1:""},L=()=>{const g=new Map(O.map(d=>[String(d.id),d]));return $.map(d=>g.get(String(d))).filter(Boolean)},a=g=>{const d=new Set;return String(g||"").split(/[\s,，;；|]+/).map(j=>j.trim()).filter(Boolean).filter(j=>d.has(j)?!1:(d.add(j),!0))},c=g=>{const d=[...$],j=new Set(d.map(String));for(const U of g){const K=String(U.id);j.has(K)||(j.add(K),d.push(K))}$=d,t=$.length>0?"individual":null,u(),$.length>0&&Q()},u=()=>{var U;const g=document.getElementById("qr-individual-selected");if(!g)return;const d=L();if(d.length===0&&Z.length===0){g.classList.add("hidden"),g.innerHTML="";return}const j=d.length*S;g.classList.remove("hidden"),g.innerHTML=`
        ${d.length>0?`
          <div class="bg-indigo-50 px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-indigo-900">รายการที่เลือก ${d.length} คน</p>
              <p class="text-[11px] text-indigo-700 mt-0.5">พิมพ์รวม ${j} ใบ เมื่อใช้จำนวนซ้ำ ${S} ใบ/คน</p>
            </div>
            <button type="button" id="qr-individual-clear-selected"
              class="px-3 py-1.5 rounded-lg bg-white border border-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs font-bold">
              ล้างรายชื่อ
            </button>
          </div>
          <div class="divide-y divide-indigo-50 bg-white">
            ${d.map(K=>{const w=K.main_room||K.religion_room||"ไม่ระบุห้อง";return`
                <div class="px-4 py-3 flex items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${b(K.full_name||"ไม่ระบุชื่อ")}</p>
                    <p class="text-xs text-gray-400 font-mono truncate">${b(K.student_code||"-")} · ${b(w)}</p>
                  </div>
                  <button type="button" data-remove-id="${K.id}"
                    class="qr-individual-remove px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-bold">
                    ลบ
                  </button>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${Z.length>0?`
          <div class="bg-amber-50 border-t border-amber-100 px-4 py-3">
            <p class="text-xs font-bold text-amber-800">ไม่พบรหัส ${Z.length} รายการ</p>
            <p class="text-[11px] text-amber-700 font-mono mt-1 break-words">${b(Z.join(", "))}</p>
          </div>
        `:""}
      `,(U=g.querySelector("#qr-individual-clear-selected"))==null||U.addEventListener("click",()=>{var K;$=[],Z=[],t=null,u(),(K=document.getElementById("qr-preview-section"))==null||K.classList.add("hidden")}),g.querySelectorAll(".qr-individual-remove").forEach(K=>{K.addEventListener("click",()=>{var w;$=$.filter(te=>String(te)!==String(K.dataset.removeId)),t=$.length>0?"individual":null,u(),$.length>0?Q():(w=document.getElementById("qr-preview-section"))==null||w.classList.add("hidden")})})},m=g=>[g.student_code,g.full_name,g.main_room,g.religion_room].filter(Boolean).join(" ").toLowerCase(),E=g=>{const d=document.getElementById("qr-individual-results");if(!d)return;const j=g.toLowerCase();if(!j){d.classList.add("hidden"),d.innerHTML="";return}const U=O.filter(K=>m(K).includes(j)).sort((K,w)=>(K.student_code||"").localeCompare(w.student_code||"")).slice(0,20);if(d.classList.remove("hidden"),!U.length){d.innerHTML='<div class="px-4 py-4 text-center text-xs text-gray-400 bg-gray-50">ไม่พบนักเรียนที่ตรงกับคำค้นหา</div>';return}d.innerHTML=U.map(K=>{const w=K.main_room||K.religion_room||"ไม่ระบุห้อง";return`
          <button type="button" data-student-id="${K.id}"
            class="qr-individual-pick w-full px-4 py-3 text-left bg-white hover:bg-indigo-50 transition flex items-center justify-between gap-3">
            <span class="min-w-0">
              <span class="block text-sm font-bold text-gray-800 truncate">${b(K.full_name||"ไม่ระบุชื่อ")}</span>
              <span class="block text-xs text-gray-400 font-mono truncate">${b(K.student_code||"-")} · ${b(w)}</span>
            </span>
            <span class="text-xs font-bold text-indigo-600 flex-shrink-0">${$.includes(String(K.id))?"เพิ่มแล้ว":"เพิ่ม"}</span>
          </button>
        `}).join(""),d.querySelectorAll(".qr-individual-pick").forEach(K=>{K.addEventListener("click",()=>{const w=K.dataset.studentId||"",te=O.find(Y=>String(Y.id)===String(w)),N=document.getElementById("qr-individual-search");te&&(Z=[],c([te])),d.classList.add("hidden"),N&&(N.value="")})})},ee=async g=>{const d=await tt.toDataURL(g.student_code||"",{width:1e3,margin:2,color:{dark:"#000000",light:"#ffffff"}}),j=document.createElement("a"),U=String(g.student_code||g.id||"student").replace(/[^\w-]+/g,"_");j.href=d,j.download=`qr-${U}.png`,document.body.appendChild(j),j.click(),j.remove()},Q=async()=>{var w,te;const g=document.getElementById("qr-preview-section"),d=L();if(!g||d.length===0)return;t="individual",g.classList.remove("hidden");const j=d.flatMap(N=>{const Y=l(N),le=h(N);return Array.from({length:S},(de,ue)=>({...N,seat_no:le,_roomName:Y,_print_copy:ue+1}))}),U=d[0],K=j.length;g.innerHTML=`
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
          <span class="text-base">💡</span>
          <div>
            <p class="font-bold">พิมพ์รายบุคคลสำหรับกรณี QR Code หาย</p>
            <p class="opacity-90">เลือกไว้ ${d.length} คน วางซ้ำ ${S} ใบ/คน รวม ${K} ใบ และตอนพิมพ์จะไม่ใส่หัวกระดาษชื่อชั้นเรียน</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">รายบุคคล</p>
              <h4 class="font-extrabold text-gray-800 text-base mt-1">${d.length===1?b(U.full_name||"ไม่ระบุชื่อ"):`พร้อมพิมพ์ ${d.length} คน`}</h4>
              <p class="text-xs text-gray-400 font-mono mt-0.5">${d.length===1?b(U.student_code||"-"):`รวม ${K} ใบ`}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button id="btn-print-individual-qr" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
                🖨️ พิมพ์ / บันทึก PDF (${K} ใบ)
              </button>
              ${d.length===1?`
                <button id="btn-download-individual-qr" class="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-950 text-white font-bold text-xs shadow-md transition">
                  ⬇️ ดาวน์โหลด PNG
                </button>
              `:""}
            </div>
          </div>
          <div class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="grid-template-columns: repeat(${i}, minmax(0, 1fr));">
            ${j.map((N,Y)=>`
              <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                  <canvas id="individual-copy-canvas-${Y}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                </div>
                <div class="text-left w-full min-w-0 font-sans">
                  <p class="text-[11px] font-bold text-gray-800 truncate">${b(N.full_name)}</p>
                  ${_?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${b(N.student_code||"-")}</p>`:""}
                  <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                    ${P?`<span>ห้อง: ${b(N._roomName)}</span>`:""}
                    ${q&&N.seat_no?`<span>เลขที่: ${N.seat_no}</span>`:""}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `,j.forEach((N,Y)=>{const le=document.getElementById(`individual-copy-canvas-${Y}`);le&&tt.toCanvas(le,N.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},de=>{de&&console.error("Individual QR error:",de)})}),(w=document.getElementById("btn-print-individual-qr"))==null||w.addEventListener("click",async()=>{const N=document.getElementById("btn-print-individual-qr");N.disabled=!0,N.textContent="กำลังบันทึก...";let Y=[];try{Y=await Promise.all(d.map(le=>nn({studentId:le.id,teacherId:e==null?void 0:e.id,reason:V})))}catch(le){console.error("Failed to log QR reissue:",le),F("บันทึกสถิติการออก QR ใหม่ไม่สำเร็จ: "+ce(le),"warning")}N.disabled=!1,N.textContent=`🖨️ พิมพ์ / บันทึก PDF (${K} ใบ)`,await qe([{className:"รายบุคคล",countLabel:`${d.length} คน · ${K} ใบ`,students:j,hideHeader:!0}],i,_,q,P,[]),Y.length>0&&(F(`บันทึกสถิติออก QR ใหม่ ${Y.length} คนแล้ว (${V})`,"success"),await St(Y.length)&&await qe([],i,_,q,P,Y,y,G))}),(te=document.getElementById("btn-download-individual-qr"))==null||te.addEventListener("click",async()=>{await ee(U)})},z=async()=>{t="class";const g=document.getElementById("qr-preview-section");if(g){g.classList.remove("hidden");try{const d=D==="ศาสนา",j=n,U=O.filter(w=>(d?w.religion_room:w.main_room)===n).sort((w,te)=>(w.student_code||"").localeCompare(te.student_code||"")).map((w,te)=>({...w,seat_no:te+1}));if(U.length===0){g.innerHTML=`
            <div class="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <p class="text-4xl mb-2">👥</p>
              <p class="text-sm font-semibold text-gray-500">ไม่มีนักเรียนที่เปิดใช้งานในห้องเรียนนี้</p>
            </div>
          `;return}const K=U.filter(w=>k==="all"?!0:w.gender===k);g.innerHTML=`
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
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">พรีวิวการจัดวาง — ${b(j)} (${K.length} คน)</p>
              <button id="btn-trigger-print" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5" ${K.length===0?'disabled style="opacity: 0.5; cursor: not-allowed;"':""}>
                🖨️ สั่งพิมพ์ห้องนี้ (Print)
              </button>
            </div>
            <div id="qr-live-grid" class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="${K.length===0?"":`grid-template-columns: repeat(${i}, minmax(0, 1fr));`}">
              ${K.length===0?`
                <div class="col-span-full py-12 text-center text-xs text-gray-400 font-semibold bg-white border border-gray-100 rounded-2xl">ไม่มีนักเรียนเพศที่เลือกในห้องเรียนนี้</div>
              `:K.map(w=>`
                <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                  <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                    <canvas id="live-canvas-${w.id}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                  </div>
                  <div class="text-left w-full min-w-0 font-sans">
                    <p class="text-[11px] font-bold text-gray-800 truncate">${b(w.full_name)}</p>
                    ${_?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${b(w.student_code||"-")}</p>`:""}
                    <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                      ${P?`<span>ห้อง: ${b(j)}</span>`:""}
                      ${q?`<span>เลขที่: ${w.seat_no}</span>`:""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `,K.forEach(w=>{const te=document.getElementById(`live-canvas-${w.id}`);te&&tt.toCanvas(te,w.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},N=>{N&&console.error("Live QR error:",N)})}),K.length>0&&document.getElementById("btn-trigger-print").addEventListener("click",async()=>{await qe([{className:j,students:K}],i,_,q,P)})}catch(d){console.error(d),g.innerHTML='<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาดในการโหลดรายชื่อนักเรียน</div>'}}},ne=async()=>{t="level";const g=document.getElementById("qr-filter-level"),d=document.getElementById("qr-preview-section");if(!s||!d)return;const U=oe(D).filter(K=>f(K)===s).sort((K,w)=>(K.class_name||"").localeCompare(w.class_name||"","th"));if(U.length!==0){d.classList.remove("hidden"),d.innerHTML=`
        <div class="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div class="flex flex-col items-center gap-4">
            <svg class="animate-spin h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            <p class="text-sm font-bold text-gray-700">กำลังจัดเตรียมรายชื่อนักเรียนทุกห้องในระดับ ${b(s)}...</p>
            <p class="text-xs text-gray-400" id="qr-level-progress">กำลังจัดเตรียม 0 / ${U.length} ห้อง</p>
          </div>
        </div>
      `;try{const K=[],w=D==="ศาสนา";for(let N=0;N<U.length;N++){const Y=U[N],le=document.getElementById("qr-level-progress");le&&(le.textContent=`กำลังจัดเตรียม ${N+1} / ${U.length} ห้อง — ${Y.class_name}`);const de=O.filter(ue=>(w?ue.religion_room:ue.main_room)===Y.class_name).filter(ue=>k==="all"||ue.gender===k).sort((ue,xe)=>(ue.student_code||"").localeCompare(xe.student_code||"")).map((ue,xe)=>({...ue,seat_no:xe+1}));de.length>0&&K.push({className:Y.class_name,students:de})}if(K.length===0){d.innerHTML='<div class="bg-white border border-gray-200 rounded-3xl p-8 text-center text-gray-400 text-sm">ไม่พบนักเรียนในระดับชั้นนี้</div>';return}const te=K.reduce((N,Y)=>N+Y.students.length,0);d.innerHTML=`
          <div class="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 class="font-bold text-gray-800 text-base">📚 พร้อมพิมพ์ทั้งระดับ ${b(s)}</h4>
                <p class="text-sm text-gray-500 mt-1">${K.length} ห้อง · ${te} คน · แต่ละห้องจะแยกหน้ากระดาษ</p>
              </div>
              <button id="btn-confirm-whole-level-print" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2">
                🖨️ พิมพ์ / บันทึก PDF ทั้ง ${b(s)}
              </button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${K.map(N=>`
                <div class="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-center">
                  <p class="text-sm font-bold text-gray-800">${b(N.className)}</p>
                  <p class="text-xs text-gray-500 mt-0.5">${N.students.length} คน</p>
                </div>
              `).join("")}
            </div>
          </div>
        `,document.getElementById("btn-confirm-whole-level-print").addEventListener("click",async()=>{await qe(K,i,_,q,P)})}catch(K){console.error(K),d.innerHTML=`<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาด: ${K.message}</div>`}}};re()}catch(O){console.error(O),F("โหลดข้อมูลล้มเหลว: "+ce(O),"error")}}async function wo(e,{cols:o,showCode:r,showSeat:p,showRoom:T,qrReissueFee:C,qrIssuer:R,isAdmin:A}){var ie;if(!e||e.dataset.loaded)return;e.dataset.loaded="1",e.innerHTML=`
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
  `;let x=[],H="",O=null,X={reason:"ทำหาย",note:""};const y=()=>{const f=e.querySelector("#qr-reissue-history");if(!f)return;const I=H.trim().toLowerCase(),v=I?x.filter(D=>{const s=D.students||{};return String(s.full_name||"").toLowerCase().includes(I)||String(s.student_code||"").toLowerCase().includes(I)||String(s.main_room||"").toLowerCase().includes(I)}):x,W=e.querySelector("#qr-reissue-summary");if(W){const D=Number(C)||0;W.innerHTML=`
        <div class="bg-indigo-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-indigo-500 font-bold">จำนวนรายการ${I?" (ที่กรอง)":""}</p>
          <p class="text-base font-extrabold text-indigo-700">${v.length}</p>
        </div>
        <div class="bg-amber-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-amber-600 font-bold">ยอดค่าธรรมเนียมรวม (${D} บาท/ใบ)</p>
          <p class="text-base font-extrabold text-amber-700">${(v.length*D).toLocaleString("th-TH")} บาท</p>
        </div>`}f.innerHTML=v.length?`
      <div class="divide-y divide-gray-100">
        ${v.map(D=>{var s,n,t,i,_,q;return D.id===O?`
          <div class="py-3 space-y-2">
            <p class="font-bold text-gray-700 text-xs">${b(((s=D.students)==null?void 0:s.full_name)||"-")} <span class="font-normal text-gray-400">(${b(((n=D.students)==null?void 0:n.student_code)||"-")})</span></p>
            <div class="flex flex-wrap gap-2 items-center">
              <select id="reissue-edit-reason" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                <option value="ทำหาย" ${X.reason==="ทำหาย"?"selected":""}>ทำหาย</option>
                <option value="ชำรุด" ${X.reason==="ชำรุด"?"selected":""}>ชำรุด</option>
                <option value="อื่นๆ" ${X.reason==="อื่นๆ"?"selected":""}>อื่นๆ</option>
              </select>
              <input id="reissue-edit-note" type="text" placeholder="หมายเหตุ (ถ้ามี)" value="${b(X.note||"")}"
                class="flex-1 min-w-[140px] border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500" />
              <button type="button" data-action="save-edit" data-log-id="${D.id}" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">บันทึก</button>
              <button type="button" data-action="cancel-edit" class="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs">ยกเลิก</button>
            </div>
          </div>
        `:`
          <div class="flex items-center justify-between gap-3 py-2.5 text-xs flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 truncate">${b(((t=D.students)==null?void 0:t.full_name)||"-")} <span class="font-normal text-gray-400">(${b(((i=D.students)==null?void 0:i.student_code)||"-")})</span></p>
              <p class="text-gray-400 mt-0.5">เลขที่ QR-${String(D.receipt_no).padStart(6,"0")} · ${b(D.reason)}${D.note?` (${b(D.note)})`:""} · ห้อง ${b(((_=D.students)==null?void 0:_.main_room)||"-")} · ออกโดย ${b(((q=D.teachers)==null?void 0:q.full_name)||"แอดมิน")} · ${new Date(D.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</p>
            </div>
            <div class="flex gap-1.5 shrink-0">
              <button type="button" data-action="reprint-qr" data-log-id="${D.id}" title="ออก QR Code" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]">🖨️ QR</button>
              <button type="button" data-action="reprint-receipt" data-log-id="${D.id}" title="ออกใบเสร็จ" class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-[11px]">🧾 ใบเสร็จ</button>
              ${A?`
                <button type="button" data-action="edit" data-log-id="${D.id}" title="แก้ไข" class="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-[11px]">✏️ แก้ไข</button>
                <button type="button" data-action="delete" data-log-id="${D.id}" title="ลบ" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
              `:""}
            </div>
          </div>
        `}).join("")}
      </div>
    `:`
      <p class="text-xs text-gray-400 text-center py-6">${x.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีประวัติการออก QR ใหม่"}</p>
    `},M=async()=>{const f=e.querySelector("#qr-reissue-history");if(f){f.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>';try{x=await pn({limit:300}),y()}catch(I){console.error("Failed to load QR reissue history:",I),f.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดประวัติไม่สำเร็จ</p>'}}},G=async f=>{const I=f.students;if(!(I!=null&&I.id)){F("ไม่พบข้อมูลนักเรียนสำหรับรายการนี้","warning");return}await qe([{className:"รายบุคคล",countLabel:"1 ใบ",students:[{id:I.id,full_name:I.full_name,student_code:I.student_code,seat_no:null,_roomName:I.main_room}],hideHeader:!0}],o,r,p,T,[])},B=async f=>{await qe([],o,r,p,T,[f],C,R)},ae=async f=>{var I;if(A)try{const v=await cn(f,{reason:X.reason,note:((I=X.note)==null?void 0:I.trim())||null});x=x.map(W=>W.id===f?v:W),O=null,y(),F("บันทึกการแก้ไขแล้ว","success")}catch(v){console.error("Failed to update QR reissue log:",v),F("บันทึกไม่สำเร็จ: "+ce(v),"error")}},oe=async f=>{var W;if(!A)return;const I=x.find(D=>D.id===f);if(await ct({title:"ลบประวัตินี้?",message:`ลบรายการออก QR ใหม่ของ ${((W=I==null?void 0:I.students)==null?void 0:W.full_name)||"นักเรียน"} (เลขที่ QR-${String((I==null?void 0:I.receipt_no)??0).padStart(6,"0")})`,detail:"ลบแล้วไม่สามารถกู้คืนได้ สถิติรายการนี้จะหายไปถาวร",confirmText:"ลบเลย"}))try{await dn(f),x=x.filter(D=>D.id!==f),y(),F("ลบประวัติแล้ว","success")}catch(D){console.error("Failed to delete QR reissue log:",D),F("ลบไม่สำเร็จ: "+ce(D),"error")}},J=e.querySelector("#qr-reissue-history");J.addEventListener("click",f=>{const I=f.target.closest("[data-action]");if(!I)return;const v=I.dataset.logId,W=x.find(D=>D.id===v);I.dataset.action==="reprint-qr"&&W?G(W):I.dataset.action==="reprint-receipt"&&W?B(W):I.dataset.action==="delete"&&v&&A?oe(v):I.dataset.action==="edit"&&W&&A?(O=v,X={reason:W.reason,note:W.note||""},y()):I.dataset.action==="cancel-edit"?(O=null,y()):I.dataset.action==="save-edit"&&v&&A&&ae(v)}),J.addEventListener("change",f=>{f.target.id==="reissue-edit-reason"&&(X.reason=f.target.value)}),J.addEventListener("input",f=>{f.target.id==="reissue-edit-note"&&(X.note=f.target.value)}),(ie=e.querySelector("#qr-reissue-search"))==null||ie.addEventListener("input",f=>{H=f.target.value,y()}),M()}function _o(e){if(!e||e.dataset.bound)return;e.dataset.bound="1";const o=e.getContext("2d");o.lineWidth=2.5,o.lineCap="round",o.lineJoin="round",o.strokeStyle="#111827";let r=!1,p=null;const T=x=>{const H=e.getBoundingClientRect(),O=x.touches?x.touches[0]:x;return{x:(O.clientX-H.left)*(e.width/H.width),y:(O.clientY-H.top)*(e.height/H.height)}},C=x=>{x.preventDefault(),r=!0,p=T(x)},R=x=>{if(!r)return;x.preventDefault();const H=T(x);o.beginPath(),o.moveTo(p.x,p.y),o.lineTo(H.x,H.y),o.stroke(),p=H},A=()=>{r=!1};e.addEventListener("mousedown",C),e.addEventListener("mousemove",R),window.addEventListener("mouseup",A),e.addEventListener("touchstart",C,{passive:!1}),e.addEventListener("touchmove",R,{passive:!1}),e.addEventListener("touchend",A)}function $o(e,o){var T;(T=document.getElementById("qr-issuer-sig-modal"))==null||T.remove();const r=document.createElement("div");r.id="qr-issuer-sig-modal",r.className="fixed inset-0 z-[230] flex items-center justify-center p-4 bg-black/50",r.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <p class="font-bold text-gray-800 text-sm">✍️ ลายเซ็นผู้ออกให้บัตร QR Code</p>
        <button type="button" id="qr-sig-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <p class="text-[11px] text-gray-400">ชื่อ/ตำแหน่ง/ลายเซ็นนี้จะพิมพ์ลงใบเสร็จออก QR ใหม่ทุกใบอัตโนมัติ แทนต้องเซ็นสดด้วยปากกา</p>
      <div class="flex gap-2">
        <input id="qr-sig-name" type="text" value="${b((e==null?void 0:e.name)||"")}" placeholder="ชื่อ-สกุล เช่น นายฮัมบาลีย์ วาจิ" class="flex-1 min-w-0 border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      </div>
      <input id="qr-sig-title" type="text" value="${b((e==null?void 0:e.title)||"")}" placeholder="ตำแหน่ง เช่น ครูฝ่ายปกครอง (ไม่บังคับ)" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      <button type="button" id="qr-sig-save-info" class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">บันทึกชื่อ-ตำแหน่ง</button>

      <div class="pt-2 border-t border-gray-100">
        <p class="text-[11px] font-bold text-gray-500 mb-1.5">ลายเซ็นปัจจุบัน</p>
        <div id="qr-sig-preview">
          ${e!=null&&e.url?`<img src="${b(e.url)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'}
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
    </div>`,document.body.appendChild(r),r.addEventListener("click",C=>{C.target===r&&r.remove()}),r.querySelector("#qr-sig-close").addEventListener("click",()=>r.remove()),_o(r.querySelector("#qr-sig-canvas"));const p=C=>{r.querySelector("#qr-sig-preview").innerHTML=C?`<img src="${b(C)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'};r.querySelector("#qr-sig-save-info").addEventListener("click",async()=>{const C=r.querySelector("#qr-sig-name").value.trim(),R=r.querySelector("#qr-sig-title").value.trim();try{await Promise.all([Ke("qrIssuerSignatureName",C),Ke("qrIssuerSignatureTitle",R)]),e={...e,name:C,title:R},o(e),F("บันทึกชื่อ-ตำแหน่งแล้ว ✅","success")}catch(A){F("บันทึกไม่สำเร็จ: "+ce(A),"error")}}),r.querySelector("#qr-sig-clear").addEventListener("click",()=>{const C=r.querySelector("#qr-sig-canvas");C.getContext("2d").clearRect(0,0,C.width,C.height)}),r.querySelector("#qr-sig-save-drawn").addEventListener("click",async()=>{const C=r.querySelector("#qr-sig-canvas"),R=await new Promise(x=>C.toBlob(x,"image/png"));if(!R){F("ยังไม่มีลายเซ็นให้บันทึก","warning");return}const A=r.querySelector("#qr-sig-save-drawn");A.disabled=!0,A.textContent="กำลังบันทึก...";try{const x=await Pt(R);await Ke("qrIssuerSignatureUrl",x),e={...e,url:x},o(e),p(x),F("บันทึกลายเซ็นแล้ว ✅","success")}catch(x){F("บันทึกไม่สำเร็จ: "+ce(x),"error")}finally{A.disabled=!1,A.textContent="บันทึกลายเซ็นที่วาด"}}),r.querySelector("#qr-sig-upload").addEventListener("click",async()=>{var A;const C=(A=r.querySelector("#qr-sig-file").files)==null?void 0:A[0];if(!C){F("กรุณาเลือกไฟล์รูปลายเซ็น","warning");return}const R=r.querySelector("#qr-sig-upload");R.disabled=!0,R.textContent="กำลังอัปโหลด...";try{const x=await Pt(C);await Ke("qrIssuerSignatureUrl",x),e={...e,url:x},o(e),p(x),F("อัปโหลดลายเซ็นแล้ว ✅","success")}catch(x){F("อัปโหลดไม่สำเร็จ: "+ce(x),"error")}finally{R.disabled=!1,R.textContent="อัปโหลด"}})}async function ko(e,{teacher:o,cols:r,showCode:p,showSeat:T,showRoom:C,qrReissueDoneMessage:R,qrReissueFee:A="5",qrIssuer:x=null}){var n,t,i,_,q,P;if(!e||e.dataset.loaded)return;e.dataset.loaded="1";const H=!o;e.innerHTML=`
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
    ${H?`
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
  `;let O=[],X="";const y=new Set,M=()=>{const k=e.querySelector("#qr-requests-bulk-bar"),S=e.querySelector("#qr-requests-bulk-count");if(!k||!S)return;y.size>0?(k.classList.remove("hidden"),S.textContent=`เลือกไว้ ${y.size} คน`):k.classList.add("hidden");const $=O.filter(V=>!V.printed_at).map(V=>V.id),Z=e.querySelector("#qr-requests-select-all");Z&&(Z.checked=$.length>0&&$.every(V=>y.has(V)))},G=()=>{const k=e.querySelector("#qr-requests-list");if(!k)return;const S=X.trim().toLowerCase(),$=S?O.filter(re=>{const l=re.students||{};return String(l.full_name||"").toLowerCase().includes(S)||String(l.student_code||"").toLowerCase().includes(S)||String(l.main_room||"").toLowerCase().includes(S)}):O,Z=$.filter(re=>!re.printed_at),V=$.filter(re=>re.printed_at);for(const re of[...y])Z.some(l=>l.id===re)||y.delete(re);const se=(re,l)=>{var h,L,a;return`
      <div class="py-3 flex items-start gap-2 ${l?"bg-amber-50/60 -mx-3 px-3 rounded-xl":""}">
        ${l?`<input type="checkbox" data-select-id="${re.id}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 flex-shrink-0" ${y.has(re.id)?"checked":""}>`:'<span class="w-3.5 flex-shrink-0"></span>'}
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 text-xs truncate">${b(((h=re.students)==null?void 0:h.full_name)||"-")} <span class="font-normal text-gray-400">(${b(((L=re.students)==null?void 0:L.student_code)||"-")})</span></p>
              <p class="text-gray-400 text-[11px] mt-0.5">ห้อง ${b(((a=re.students)==null?void 0:a.main_room)||"-")} · แจ้งเมื่อ ${new Date(re.requested_at).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}</p>
            </div>
            ${l?"":'<span class="text-[11px] font-bold text-emerald-600 flex-shrink-0">✅ ทำเสร็จแล้ว</span>'}
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${l?`<button type="button" data-action="fulfill" data-id="${re.id}" class="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px]">🖨️ ทำเสร็จแล้ว (พิมพ์บัตร)</button>`:""}
            <button type="button" data-action="toggle-pickup" data-id="${re.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${re.picked_up_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">🤝 ${re.picked_up_at?"มารับแล้ว":"มารับหรือยัง"}</button>
            <button type="button" data-action="toggle-fine" data-id="${re.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${re.fine_paid_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">💰 ${re.fine_paid_at?"ชำระค่าปรับแล้ว":"ชำระค่าปรับหรือยัง"}</button>
            <button type="button" data-action="delete" data-id="${re.id}" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
          </div>
        </div>
      </div>`};k.innerHTML=$.length?`<div class="divide-y divide-gray-100">${[...Z,...V].map(re=>se(re,!re.printed_at)).join("")}</div>`:`
      <p class="text-xs text-gray-400 text-center py-6">${O.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีคำขอจากนักเรียน"}</p>
    `,M()},B=async()=>{const k=e.querySelector("#qr-requests-list");k&&(k.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>');try{O=await is({limit:500}),G()}catch(S){console.error("Failed to load QR reissue requests:",S),k&&(k.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดรายการไม่สำเร็จ</p>')}},ae=k=>{var V,se;const S=O.find(re=>re.id===k);if(!((V=S==null?void 0:S.students)!=null&&V.id)){F("ไม่พบข้อมูลนักเรียนสำหรับคำขอนี้","warning");return}(se=document.getElementById("qr-fulfill-modal"))==null||se.remove();let $=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite($)||$<1)&&($=4);const Z=document.createElement("div");Z.id="qr-fulfill-modal",Z.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",Z.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${b(S.students.full_name||"-")}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส ${b(S.students.student_code||"-")} · ห้อง ${b(S.students.main_room||"-")}</p>
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
      </div>`,document.body.appendChild(Z),Z.addEventListener("click",re=>{re.target===Z&&Z.remove()}),Z.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>Z.remove()),Z.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const re=Z.querySelector("#qr-fulfill-reason").value,l=Math.max(1,Math.min(40,parseInt(Z.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(l));const h=Z.querySelector("#qr-fulfill-ok");h.disabled=!0,h.textContent="กำลังดำเนินการ...";try{const L=await Bt({requestId:k,studentId:S.students.id,teacherId:(o==null?void 0:o.id)??null,reason:re,feedbackId:S.feedback_id,message:R}),a=Array.from({length:l},(c,u)=>({id:S.students.id,full_name:S.students.full_name,student_code:S.students.student_code,seat_no:null,_roomName:S.students.main_room,_print_copy:u+1}));await qe([{className:"รายบุคคล",countLabel:`${l} ใบ`,students:a,hideHeader:!0}],r,p,T,C,[]),Z.remove(),F("ทำเสร็จแล้ว บันทึกเข้าประวัติ + แจ้งนักเรียนแล้ว ✅","success"),await B(),L&&await St(1)&&await qe([],r,p,T,C,[L],A,x)}catch(L){h.disabled=!1,h.textContent="🖨️ พิมพ์ + บันทึก",F("บันทึกไม่สำเร็จ: "+ce(L),"error")}})},oe=()=>{var Z;const k=O.filter(V=>{var se;return y.has(V.id)&&((se=V.students)==null?void 0:se.id)});if(!k.length)return;(Z=document.getElementById("qr-fulfill-modal"))==null||Z.remove();let S=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(S)||S<1)&&(S=4);const $=document.createElement("div");$.id="qr-fulfill-modal",$.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",$.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${k.length} คนพร้อมกัน</p>
          <p class="text-xs text-gray-400 mt-0.5">${k.map(V=>b(V.students.full_name||"-")).join(", ")}</p>
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
      </div>`,document.body.appendChild($),$.addEventListener("click",V=>{V.target===$&&$.remove()}),$.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>$.remove()),$.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const V=$.querySelector("#qr-fulfill-reason").value,se=Math.max(1,Math.min(40,parseInt($.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(se));const re=$.querySelector("#qr-fulfill-ok");re.disabled=!0,re.textContent="กำลังดำเนินการ...";try{const l=await Promise.all(k.map(L=>Bt({requestId:L.id,studentId:L.students.id,teacherId:(o==null?void 0:o.id)??null,reason:V,feedbackId:L.feedback_id,message:R}))),h=k.flatMap(L=>Array.from({length:se},(a,c)=>({id:L.students.id,full_name:L.students.full_name,student_code:L.students.student_code,seat_no:null,_roomName:L.students.main_room,_print_copy:c+1})));await qe([{className:"คำขอทำบัตรใหม่ (หลายคน)",countLabel:`${k.length} คน · ${h.length} ใบ`,students:h,hideHeader:!0}],r,p,T,C,[]),$.remove(),y.clear(),F(`ทำเสร็จแล้ว ${k.length} คน บันทึกเข้าประวัติ + แจ้งนักเรียนทุกคนแล้ว ✅`,"success"),await B(),l.length&&await St(l.length)&&await qe([],r,p,T,C,l,A,x)}catch(l){re.disabled=!1,re.textContent="🖨️ พิมพ์ + บันทึกทั้งหมด",F("บันทึกไม่สำเร็จ: "+ce(l),"error")}})},J=async(k,S)=>{const $=O.find(V=>V.id===k),Z=$!=null&&$[S]?null:new Date().toISOString();try{await un(k,S,Z),$[S]=Z,G()}catch(V){F("บันทึกไม่สำเร็จ: "+ce(V),"error")}},ie=async k=>{if(confirm("ลบคำขอนี้?"))try{await mn(k),O=O.filter(S=>S.id!==k),G(),F("ลบแล้ว","success")}catch(S){F("ลบไม่สำเร็จ: "+ce(S),"error")}};if((n=e.querySelector("#qr-requests-search"))==null||n.addEventListener("input",k=>{X=k.target.value,G()}),(t=e.querySelector("#qr-requests-list"))==null||t.addEventListener("click",k=>{const S=k.target.closest("[data-action]");if(!S)return;const $=parseInt(S.dataset.id);S.dataset.action==="fulfill"?ae($):S.dataset.action==="toggle-pickup"?J($,"picked_up_at"):S.dataset.action==="toggle-fine"?J($,"fine_paid_at"):S.dataset.action==="delete"&&ie($)}),(i=e.querySelector("#qr-requests-list"))==null||i.addEventListener("change",k=>{const S=k.target.closest("[data-select-id]");if(!S)return;const $=parseInt(S.dataset.selectId);S.checked?y.add($):y.delete($),M()}),(_=e.querySelector("#qr-requests-select-all"))==null||_.addEventListener("change",k=>{const S=O.filter($=>!$.printed_at).map($=>$.id);k.target.checked?S.forEach($=>y.add($)):S.forEach($=>y.delete($)),G()}),(q=e.querySelector("#qr-requests-bulk-fulfill"))==null||q.addEventListener("click",()=>oe()),B(),!H)return;let f=[];const I=()=>{const k=e.querySelector("#qr-manager-list");k&&(k.innerHTML=f.length?f.map(S=>{var $,Z;return`
      <div class="flex items-center justify-between gap-2 py-2 text-xs">
        <span class="font-semibold text-gray-700">${b((($=S.teachers)==null?void 0:$.full_name)||"-")} <span class="font-normal text-gray-400">(${b(((Z=S.teachers)==null?void 0:Z.teacher_code)||"-")})</span></span>
        <button type="button" data-revoke="${S.profile_id}" class="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">ยกเลิกสิทธิ์</button>
      </div>`}).join(""):`
      <p class="text-xs text-gray-400 text-center py-4">ยังไม่มีครูที่ได้รับสิทธิ์</p>
    `)},v=async()=>{try{f=await xn(),I()}catch{const k=e.querySelector("#qr-manager-list");k&&(k.innerHTML='<p class="text-xs text-red-400 text-center py-4">โหลดไม่สำเร็จ</p>')}};(P=e.querySelector("#qr-manager-list"))==null||P.addEventListener("click",async k=>{const S=k.target.closest("[data-revoke]");if(S)try{await on(S.dataset.revoke),await v(),F("ยกเลิกสิทธิ์แล้ว","success")}catch($){F("ยกเลิกไม่สำเร็จ: "+ce($),"error")}});const W=e.querySelector("#qr-manager-search"),D=e.querySelector("#qr-manager-search-results");let s=null;W==null||W.addEventListener("input",()=>{clearTimeout(s);const k=W.value.trim();if(!k){D.classList.add("hidden"),D.innerHTML="";return}s=setTimeout(async()=>{try{const S=await an(k);D.classList.toggle("hidden",!S.length),D.innerHTML=S.map($=>`
          <button type="button" data-grant="${$.profile_id}" data-name="${b($.full_name)}" class="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs hover:bg-gray-50 text-left">
            <span class="font-semibold text-gray-700">${b($.full_name)} <span class="font-normal text-gray-400">(${b($.teacher_code||"-")})</span></span>
            <span class="text-indigo-600 font-bold">+ มอบสิทธิ์</span>
          </button>`).join("")}catch{}},300)}),D==null||D.addEventListener("click",async k=>{const S=k.target.closest("[data-grant]");if(S)try{await rn(S.dataset.grant),W.value="",D.classList.add("hidden"),D.innerHTML="",await v(),F(`มอบสิทธิ์ให้ ${S.dataset.name} แล้ว ✅`,"success")}catch($){F("มอบสิทธิ์ไม่สำเร็จ: "+ce($),"error")}}),v()}const Ho=Object.freeze(Object.defineProperty({__proto__:null,_openRandomPickerModal:Ss,openClassPromptGenModal:mo,renderAnnouncementsView:vo,renderAttendance:Ln,renderAttendanceGrid:qt,renderClassDetail:Mt,renderCourseDocLangConfig:yo,renderGrades:Sn,renderGradesGrid:Ct,renderLifeSkillScore:Cn,renderMyClasses:Le,renderPrayerScore:qn,renderReadingScore:jn,renderRequests:En,renderSchedule:xo,renderScheduleBuilder:bo,renderScheduleGrid:Pe,renderStudentQRPrint:ho},Symbol.toStringTag,{value:"Module"}));export{Ss as _,yo as a,zn as b,Vn as c,Gn as d,Mt as e,vo as f,Le as g,xo as h,bo as i,mo as j,so as o,Pe as r,Ho as t};
