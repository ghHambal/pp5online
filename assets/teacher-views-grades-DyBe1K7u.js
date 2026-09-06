import{getSystemConfig as bt,getLifeSkillColumns as qt,getScoreColumns as be,createScoreColumn as Ee,updateColumnSortOrders as Nt,updateScoreColumn as Te,getMyClasses as At,setColumnAutoAttendanceSync as Tt,deleteScoreColumn as Fe,getClassStudents as Xt,getStudentScores as lt,getSheetColumnOptions as ut,fillLifeSkillScoresForClass as Zt,fillPrayerScoresForReligionClass as Dt,syncAutoAttendanceScoreColumns as es,getReadingScoreColumns as ts,getReadingScores as ss,detectAssignmentKind as ns,saveStudentScore as dt,updateClassStudentSpecialResult as os,getTeacherExamRequests as rs,reviewExamRequest as Lt,updateExamResult as It}from"./api-1xsyVspL.js";import{g as as,K as ls}from"./regrade-api-C8s-TuM0.js";import{a as p}from"./ui-Dh03k4iX.js";import{s as ds}from"./supabase-BV-W2lsh.js";import{openScoreScanner as Bt}from"./score-qr-scanner-SDrghEsT.js";import{setActiveNav as ft,setTitle as yt,setContent as Ke,applyReadingGradesFromConfig as is,_readingGrade as cs,_htmlEsc as pe}from"./teacher-views-utils-B2Iz3UWp.js";const jt="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",it="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function ms(_){document.getElementById("main-content").innerHTML=_}function us(_){document.getElementById("page-title").textContent=_}function xs(_){document.querySelectorAll("[data-nav]").forEach(u=>{const M=u.dataset.nav===_;u.classList.toggle("bg-emerald-800",M),u.classList.toggle("text-white",M),u.classList.toggle("text-emerald-200",!M)})}const xt=["ระหว่างเรียน","กลางภาค","ปลายภาค","คะแนนพิเศษ"],ps={ระหว่างเรียน:"bg-blue-50 text-blue-700",กลางภาค:"bg-amber-50 text-amber-700",ปลายภาค:"bg-red-50 text-red-700",คะแนนพิเศษ:"bg-purple-50 text-purple-700"},bs=["คะแนนมาเรียน","คะแนนละหมาด"];function tt(_,u={}){if(!(_!=null&&_.trim()))return null;let M=0;const C=_.replace(/\s+/g,"").toUpperCase(),O=()=>C[M]??"",j=()=>C[M++],E=T=>{throw new Error(T)},U=()=>{let T=S();const B=C.slice(M,M+2),a=C[M];let c="";if([">=","<=","!=","=="].includes(B)?(c=B,M+=2):[">","<"].includes(a)&&(c=a,M++),!c)return T;const w=S();return{">":f=>f>w?1:0,"<":f=>f<w?1:0,">=":f=>f>=w?1:0,"<=":f=>f<=w?1:0,"==":f=>f===w?1:0,"!=":f=>f!==w?1:0}[c](T)},S=()=>{let T=Y();for(;O()==="+"||O()==="-";){const B=j(),a=Y();T=B==="+"?T+a:T-a}return T},Y=()=>{let T=se();for(;O()==="*"||O()==="/";){const B=j(),a=se();T=B==="*"?T*a:a===0?0:T/a}return T},se=()=>O()==="-"?(j(),-L()):(O()==="+"&&j(),L()),ie=()=>{const T=[];if(O()!==")")for(T.push(U());O()===",";)j(),T.push(U());return j()!==")"&&E("Expected )"),T},L=()=>{if(/[0-9.]/.test(O())){let T="";for(;/[0-9.]/.test(O());)T+=j();return parseFloat(T)}if(O()==="("){j();const T=U();return j()!==")"&&E("Expected )"),T}if(/[A-Z_]/.test(O())){let T="";for(;/[A-Z0-9_]/.test(O());)T+=j();if(O()==="("){j();const B=ie(),a=B.length;switch(T){case"MIN":return a?Math.min(...B):0;case"MAX":return a?Math.max(...B):0;case"AVG":case"AVERAGE":return a?B.reduce((c,w)=>c+w,0)/a:0;case"SUM":return B.reduce((c,w)=>c+w,0);case"ROUND":return Math.round((B[0]??0)*10**(B[1]??0))/10**(B[1]??0);case"FLOOR":return Math.floor(B[0]??0);case"CEIL":return Math.ceil(B[0]??0);case"ABS":return Math.abs(B[0]??0);case"SQRT":return Math.sqrt(Math.max(0,B[0]??0));case"POW":return Math.pow(B[0]??0,B[1]??1);case"IF":return B[0]?B[1]??0:B[2]??0;case"CLAMP":return Math.min(Math.max(B[0]??0,B[1]??0),B[2]??0);default:E(`Unknown function: ${T}`)}}return Number(u[T]??0)}E(`Unexpected: "${O()}"`)};try{const T=U();return M<C.length&&E(`Unexpected "${C[M]}"`),isNaN(T)?null:T}catch{return null}}function Rt(_){const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return _.map((M,C)=>({...M,var:u[C]??`V${C}`}))}function pt(_,u){var C;(C=document.getElementById("sc-confirm-popup"))==null||C.remove();const M=document.createElement("div");M.id="sc-confirm-popup",M.className="fixed inset-0 z-[200] flex items-center justify-center p-6",M.style.background="rgba(0,0,0,0.45)",M.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">${_}</p>
      <div class="flex gap-3">
        <button id="sc-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
        <button id="sc-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold">ลบเลย</button>
      </div>
    </div>`,document.body.appendChild(M),M.querySelector("#sc-conf-no").addEventListener("click",()=>M.remove()),M.querySelector("#sc-conf-yes").addEventListener("click",()=>{M.remove(),u()})}async function gs(_,u,M){var C;if(!(!(_!=null&&_.id)||!(M!=null&&M.course_id)))try{const j=(await At(_.id).catch(()=>[])).filter(S=>S.id!==u&&S.course_id===M.course_id);if(!j.length)return;const E=(await Promise.all(j.map(async S=>{const Y=await be(S.id).catch(()=>[]);return Y.length?{...S,cols:Y}:null}))).filter(Boolean);if(!E.length)return;(C=document.getElementById("sc-same-subj-popup"))==null||C.remove();const U=document.createElement("div");U.id="sc-same-subj-popup",U.className="fixed inset-0 z-[190] flex items-center justify-center p-6",U.style.background="rgba(0,0,0,0.45)",U.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
          <p class="text-indigo-100 text-xs mt-1">ต้องการคัดลอกคอลัมน์คะแนนจากห้องที่มีอยู่แล้วไหม?</p>
        </div>
        <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
          ${E.map(S=>`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${S.class_name}</p>
              <p class="text-xs text-gray-400">${S.cols.length} คอลัมน์</p>
            </div>
            <button class="copy-cols-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold" data-src="${S.id}">คัดลอก</button>
          </div>`).join("")}
        </div>
        <div class="px-5 pb-5">
          <button id="sc-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(U),U.querySelector("#sc-ssp-close").addEventListener("click",()=>U.remove()),U.querySelectorAll(".copy-cols-btn").forEach(S=>{S.addEventListener("click",async()=>{var ie;const Y=parseInt(S.dataset.src),se=E.find(L=>L.id===Y);S.disabled=!0,S.textContent="⏳";try{const L=await be(u).catch(()=>[]),T=new Set(L.map(a=>a.assignment_name));let B=0;for(const a of se.cols)T.has(a.assignment_name)||(await Ee({class_id:u,assignment_name:a.assignment_name,assignment_type:a.assignment_type,sheet_column:a.sheet_column??"",max_score:a.max_score,column_type:a.column_type??"regular",formula:a.formula??null,formula_refs:a.formula_refs??[]}),B++);p(`คัดลอก ${B} คอลัมน์จาก ${se.class_name} ✅`,"success"),U.remove(),(ie=window._scReload)==null||ie.call(window)}catch(L){p("คัดลอกไม่สำเร็จ: "+(L.message??""),"error"),S.disabled=!1,S.textContent="คัดลอก"}})})}catch{}}async function Bs(_,u,M,C=null){var ie,L,T;xs("my-classes"),us(`คอลัมน์คะแนน — ${M}`);const O=((C==null?void 0:C.skill_group)??((ie=C==null?void 0:C.master_subjects)==null?void 0:ie.skill_group)??"")==="ชีวิต",j=["AGM","AGMVOC"].includes((L=C==null?void 0:C.master_subjects)==null?void 0:L.subject_group),E=!!(C!=null&&C.google_sheet_id);let U=new Set,S=new Set,Y=!1;const se=async()=>{var D,ve,me,Ne,Be,V;const B=await be(u),a=await bt().catch(()=>({})),c=parseInt(a.academicYear??2568),w=parseInt(a.semester??1),f=O?(await qt(c,w,"สามัญ").catch(()=>[])).slice(0,3).map(s=>s.name):j?bs:[];U=new Set;for(const s of f){const v=B.filter(K=>K.assignment_name===s);v.length>0&&U.add(v[0].id)}window._scoreColCache=Object.fromEntries(B.map(s=>[s.id,s])),S=new Set;const P=B.filter(s=>(s.column_type??"regular")==="regular"),h=B.filter(s=>s.column_type==="bonus"),W=B.filter(s=>s.column_type==="derived"),te=B.filter(s=>s.column_type==="override"),ne=Rt(h),ue=P.reduce((s,v)=>s+(Number(v.max_score)||0),0),Se=W.reduce((s,v)=>s+(Number(v.max_score)||0),0),de=ue+Se,ge=(s,v="",K=[])=>{var ae;const z=U.has(s.id),re=s.column_type??"regular",X=K.findIndex(qe=>qe.id===s.id),le=!z&&X>0&&!U.has((ae=K[X-1])==null?void 0:ae.id),H=!z&&X>=0&&X<K.length-1;return`
      <tr class="${z?"bg-emerald-50/35":"hover:bg-gray-50"}">
        <td class="px-3 py-2.5 text-center">
          ${z?'<span class="text-emerald-500 text-xs">🔒</span>':`<input type="checkbox" class="sc-row-cb w-4 h-4 rounded accent-red-500" data-id="${s.id}" />`}
        </td>
        <td class="px-3 py-2.5 text-center whitespace-nowrap">
          <button onclick="window._moveScoreCol(${s.id},'up')" ${le?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${le?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▲</button>
          <button onclick="window._moveScoreCol(${s.id},'down')" ${H?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${H?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▼</button>
        </td>
        <td class="px-4 py-2.5 font-medium text-gray-800">
          ${s.assignment_name}
          ${re==="derived"&&s.formula?`<span class="ml-1 text-[10px] text-indigo-400 font-mono">= ${s.formula}</span>`:""}
          ${v}
        </td>
        ${E?`<td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${s.sheet_column??""}</td>`:""}
        <td class="px-4 py-2.5 text-center text-gray-600">${s.max_score??"—"}</td>
        <td class="px-4 py-2.5 text-right whitespace-nowrap">
          ${z?'<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>':`${re==="regular"?`
               <button onclick="window._toggleAutoSync(${s.id})"
                 title="${s.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}"
                 class="text-xs font-medium mr-2 px-2 py-1 rounded-lg ${s.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-100"}">
                 ${s.auto_attendance_sync?"🔄 ดึงจากเช็คชื่ออัตโนมัติ":"🔄 ดึงจากเช็คชื่อ"}
               </button>`:""}
               <button onclick="window._editScoreCol(${s.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
               <button onclick="window._deleteScoreCol(${s.id})" class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
        </td>
      </tr>`},fe=(s,v=null)=>s.length?`<table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
          <tr>
            <th class="px-3 py-2 text-center w-8">เลือก</th>
            <th class="px-3 py-2 text-center w-14">เรียง</th>
            <th class="px-4 py-2 text-left">ชื่อ</th>
            ${E?'<th class="px-4 py-2 text-center">Sheet Col</th>':""}
            <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
            <th class="px-4 py-2 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${s.map(K=>ge(K,(v==null?void 0:v(K))??"",s)).join("")}
        </tbody>
      </table>`:'<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์</p>',Ce=xt.map(s=>({type:s,items:P.filter(v=>v.assignment_type===s)}));document.getElementById("sc-content").innerHTML=`
      <!-- Summary -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400">รวมคะแนน (นับใน 100)</p>
            <p class="text-2xl font-bold ${de>100?"text-red-600":"text-indigo-700"}">${de} คะแนน
              ${de>100?'<span class="text-sm font-normal text-red-500 ml-1">⚠️ เกิน 100</span>':""}
            </p>
          </div>
          <div class="text-xs text-gray-400 text-right">
            <p>คอลัมน์หลัก: ${P.length} | อ้างอิง: ${W.length} | พิเศษ: ${h.length} | ปรับคะแนน: ${te.length}</p>
            <p class="mt-1">กลางภาค: ${P.filter(s=>s.assignment_type==="กลางภาค").reduce((s,v)=>s+(Number(v.max_score)||0),0)} |
               ปลายภาค: ${P.filter(s=>s.assignment_type==="ปลายภาค").reduce((s,v)=>s+(Number(v.max_score)||0),0)}</p>
          </div>
        </div>
      </div>

      <!-- Bulk delete bar -->
      <div id="sc-bulk-bar" class="hidden mb-3 flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
        <p id="sc-bulk-count" class="text-sm font-semibold text-red-700">เลือก 0 รายการ</p>
        <button id="sc-bulk-delete" class="px-4 py-1.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold">🗑️ ลบที่เลือก</button>
      </div>

      <!-- Regular columns (grouped by type) -->
      ${Ce.map(s=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${ps[s.type]??""}">${s.type}</span>
            <span class="text-xs text-gray-400">รวม ${s.items.reduce((v,K)=>v+(Number(K.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${s.type}')" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${fe(s.items)}
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
        ${fe(W)}
      </div>

      <!-- Override columns (ปรับคะแนนกลางภาค) -->
      <div class="bg-white rounded-2xl border border-teal-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-teal-50 bg-teal-50/50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-700">🔄 คอลัมน์ปรับคะแนนกลางภาค</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</span>
          </div>
          <button onclick="window._addOverrideCol()" class="text-xs text-teal-600 hover:text-teal-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${fe(te,s=>{var v,K;return s.link_column_id?` <span class="ml-1 text-[10px] text-teal-500">🔗 → ${((K=(v=window._scoreColCache)==null?void 0:v[s.link_column_id])==null?void 0:K.assignment_name)??"—"}</span>`:' <span class="ml-1 text-[10px] text-red-400">⚠️ ยังไม่ได้เชื่อมคอลัมน์</span>'})}
      </div>

      <!-- Bonus columns (toggle) -->
      <div class="mb-4">
        <button id="sc-toggle-bonus"
          class="w-full flex items-center justify-between px-5 py-3 bg-white rounded-2xl border border-amber-100 shadow-sm hover:bg-amber-50/30 transition">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">⭐ คอลัมน์พิเศษ (Bonus)</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนเห็นได้</span>
            ${h.length?`<span class="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${h.length}</span>`:""}
          </div>
          <span class="text-gray-400 text-sm">${Y?"▲ ซ่อน":"▼ แสดง"}</span>
        </button>
        <div id="sc-bonus-section" class="${Y?"":"hidden"} mt-2 bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-amber-50 bg-amber-50/30">
            <div class="text-xs text-gray-500">
              ${ne.length?ne.map(s=>`<span class="font-mono font-bold text-amber-700">${s.var}</span> = ${s.assignment_name}`).join(" &nbsp;|&nbsp; "):"ยังไม่มีคอลัมน์พิเศษ"}
            </div>
            <button onclick="window._addBonusCol()" class="text-xs text-amber-600 hover:text-amber-800 font-medium flex-shrink-0">＋ เพิ่ม</button>
          </div>
          ${fe(h)}
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
            <input id="sc-name" type="text" placeholder="เช่น คะแนนเก็บ 1" class="${it}" />
          </div>
          <div id="sc-type-wrap">
            <label class="block text-xs font-medium text-gray-600 mb-1">หมวด <span class="text-red-400">*</span></label>
            <select id="sc-type" class="${jt}">
              ${xt.map(s=>`<option value="${s}">${s}</option>`).join("")}
            </select>
          </div>
          ${E?`
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คอลัมน์ Sheet</label>
            <input id="sc-col" type="text" placeholder="EK" class="${it} font-mono uppercase" maxlength="4" />
          </div>`:'<input id="sc-col" type="hidden" value="" />'}
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1" id="sc-max-label">คะแนนเต็ม</label>
            <input id="sc-max" type="number" min="0" placeholder="20" class="${it}" />
          </div>
          <!-- Link column section (shown only for override) -->
          <div id="sc-link-wrap" class="col-span-2 hidden">
            <label class="block text-xs font-medium text-gray-600 mb-1">เชื่อมกับคอลัมน์กลางภาคหลัก <span class="text-red-400">*</span></label>
            <select id="sc-link-col" class="${jt}">
              <option value="">— เลือกคอลัมน์ —</option>
            </select>
            <p class="text-[11px] text-gray-400 mt-1">ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที</p>
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
              <input id="sc-formula" type="text" placeholder="เช่น MIN(A*2,10)+B หรือ IF(A>5,A,0)" class="${it} font-mono flex-1" />
              <button type="button" id="sc-test-formula" class="px-3 py-2 rounded-xl bg-indigo-100 text-indigo-700 text-xs font-medium hover:bg-indigo-200 whitespace-nowrap">ทดสอบ</button>
            </div>
            <p id="sc-formula-result" class="text-xs mt-1 hidden"></p>
          </div>
          <div class="col-span-2 flex gap-3 pt-1">
            <button type="button" id="sc-form-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="sc-save" type="submit" class="btn-primary flex-1 py-2 rounded-xl text-white text-sm font-semibold">บันทึก</button>
          </div>
        </form>
      </div>`;const ce=document.getElementById("sc-bulk-bar"),Re=document.getElementById("sc-bulk-count"),Q=()=>{const s=S.size;ce.classList.toggle("hidden",s===0),Re.textContent=`เลือก ${s} รายการ`};document.querySelectorAll(".sc-row-cb").forEach(s=>{s.addEventListener("change",()=>{const v=parseInt(s.dataset.id);s.checked?S.add(v):S.delete(v),Q()})}),(D=document.getElementById("sc-bulk-delete"))==null||D.addEventListener("click",()=>{const s=[...S].map(v=>{var K,z;return((z=(K=window._scoreColCache)==null?void 0:K[v])==null?void 0:z.assignment_name)??`ID ${v}`}).join(", ");pt(`ลบ ${S.size} คอลัมน์:<br/><span class="font-semibold">${s}</span>`,async()=>{try{await Promise.all([...S].map(v=>Fe(v))),p(`ลบ ${S.size} คอลัมน์แล้ว ✅`,"success"),S=new Set,await se()}catch(v){p("ลบไม่สำเร็จ: "+(v.message??""),"error")}})}),(ve=document.getElementById("sc-toggle-bonus"))==null||ve.addEventListener("click",()=>{Y=!Y,document.getElementById("sc-bonus-section").classList.toggle("hidden",!Y),document.getElementById("sc-toggle-bonus").querySelector("span:last-child").textContent=Y?"▲ ซ่อน":"▼ แสดง"}),(me=document.getElementById("sc-test-formula"))==null||me.addEventListener("click",()=>{const s=document.getElementById("sc-formula").value.trim(),v=document.getElementById("sc-formula-result");if(!s){v.classList.add("hidden");return}const K=Object.fromEntries(ne.map(re=>[re.var,5])),z=tt(s,K);v.classList.remove("hidden"),z===null?(v.className="text-xs mt-1 text-red-500",v.textContent="⚠️ สูตรไม่ถูกต้อง"):(v.className="text-xs mt-1 text-emerald-600",v.textContent=`✅ ทดสอบด้วย ${ne.map(re=>`${re.var}=5`).join(", ")} → ผลลัพธ์ = ${z}`)});const J=(s,v,K=xt[0])=>{document.getElementById("sc-edit-id").value="",document.getElementById("sc-edit-ctype").value=s,document.getElementById("sc-name").value="",document.getElementById("sc-col").value="",document.getElementById("sc-max").value="",document.getElementById("sc-type")&&(document.getElementById("sc-type").value=K),document.getElementById("sc-form-title").textContent=v;const z=s==="bonus",re=s==="derived",X=s==="override";if(document.getElementById("sc-type-wrap").classList.toggle("hidden",z||re||X),document.getElementById("sc-formula-section").classList.toggle("hidden",!re),document.getElementById("sc-link-wrap").classList.toggle("hidden",!X),document.getElementById("sc-max-label").textContent=z?"คะแนนเต็ม (ไม่บังคับ)":X?"คะแนนเต็ม (auto ตามคอลัมน์ที่เชื่อม)":"คะแนนเต็ม",document.getElementById("sc-max").readOnly=X,re&&(document.getElementById("sc-formula").value="",document.getElementById("sc-formula-result").classList.add("hidden"),document.getElementById("sc-vars-hint").textContent=ne.length?ne.map(le=>`${le.var} = "${le.assignment_name}"`).join("  |  "):"ยังไม่มีคอลัมน์พิเศษ — เพิ่มก่อน"),X){const le=document.getElementById("sc-link-col"),H=P.filter(ae=>ae.assignment_type==="กลางภาค"||ae.assignment_type==="midterm");le.innerHTML='<option value="">— เลือกคอลัมน์ —</option>'+H.map(ae=>`<option value="${ae.id}">${ae.assignment_name} (เต็ม ${ae.max_score??"—"})</option>`).join(""),le.value=""}document.getElementById("sc-form-wrap").classList.remove("hidden"),document.getElementById("sc-name").focus()};window._addScoreCol=s=>J("regular",`เพิ่มคอลัมน์หลัก — ${s}`,s),window._addBonusCol=()=>J("bonus","เพิ่มคอลัมน์พิเศษ (Bonus)"),window._addDerivedCol=()=>J("derived","เพิ่มคอลัมน์อ้างอิงสูตร"),window._addOverrideCol=()=>J("override","เพิ่มคอลัมน์ปรับคะแนนกลางภาค"),(Ne=document.getElementById("sc-link-col"))==null||Ne.addEventListener("change",s=>{const v=Number(s.target.value),K=P.find(z=>z.id===v);document.getElementById("sc-max").value=(K==null?void 0:K.max_score)??""}),window._editScoreCol=s=>{var z;const v=(z=window._scoreColCache)==null?void 0:z[s];if(!v)return;if(U.has(s)){p("คอลัมน์ระบบกลาง แก้ไขไม่ได้","warning");return}const K=v.column_type??"regular";J(K,"แก้ไขคอลัมน์",v.assignment_type),document.getElementById("sc-edit-id").value=s,document.getElementById("sc-name").value=v.assignment_name,document.getElementById("sc-col").value=v.sheet_column??"",document.getElementById("sc-max").value=v.max_score??"",K==="derived"&&v.formula&&(document.getElementById("sc-formula").value=v.formula),K==="override"&&v.link_column_id&&(document.getElementById("sc-link-col").value=String(v.link_column_id))},window._moveScoreCol=async(s,v)=>{const K=await be(u),z=K.find(ye=>ye.id===s);if(!z)return;const re=K.filter(ye=>ye.assignment_type===z.assignment_type&&(ye.column_type??"regular")===(z.column_type??"regular")),X=re.findIndex(ye=>ye.id===s),le=v==="up"?X-1:X+1;if(le<0||le>=re.length||U.has(re[le].id))return;const H=re[X],ae=re[le],qe=H.sort_order??(X+1)*10,Ye=ae.sort_order??(le+1)*10;await Nt([{id:H.id,sort_order:Ye},{id:ae.id,sort_order:qe}]),await se()},window._deleteScoreCol=s=>{var K,z;if(U.has(s)){p("คอลัมน์ระบบกลาง ลบไม่ได้","warning");return}const v=((z=(K=window._scoreColCache)==null?void 0:K[s])==null?void 0:z.assignment_name)??"คอลัมน์นี้";pt(`ต้องการลบ <span class="font-semibold">"${v}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Fe(s),p("ลบแล้ว ✅","success"),await se()}catch{p("ลบไม่สำเร็จ","error")}})},window._toggleAutoSync=async s=>{var re;const v=(re=window._scoreColCache)==null?void 0:re[s];if(!v)return;const K=!v.auto_attendance_sync,z=async()=>{try{await Tt(s,K),p(K?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน ✅":"ปิดใช้งานแล้ว","success"),await se()}catch{p("บันทึกไม่สำเร็จ","error")}};K?pt(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${v.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้านี้ — ถ้าเคยแก้คะแนนคนไหนด้วยมือไว้ก่อน จะไม่ถูกทับ</span>`,z):await z()},(Be=document.getElementById("sc-form-cancel"))==null||Be.addEventListener("click",()=>{document.getElementById("sc-form-wrap").classList.add("hidden")}),(V=document.getElementById("sc-form"))==null||V.addEventListener("submit",async s=>{var nt,Qe,Je;s.preventDefault();const v=document.getElementById("sc-save"),K=document.getElementById("sc-edit-id").value,z=document.getElementById("sc-edit-ctype").value,re=document.getElementById("sc-name").value.trim(),X=(((nt=document.getElementById("sc-col"))==null?void 0:nt.value)??"").trim().toUpperCase(),le=((Qe=document.getElementById("sc-type"))==null?void 0:Qe.value)??"ระหว่างเรียน",H=document.getElementById("sc-max").value,ae=H&&parseFloat(H)||null,qe=z==="derived"&&document.getElementById("sc-formula").value.trim()||null,Ye=z==="override"&&Number((Je=document.getElementById("sc-link-col"))==null?void 0:Je.value)||null;if(!re){p("กรุณากรอกชื่อรายการ","warning");return}if(z==="derived"&&!ae){p("คอลัมน์อ้างอิงสูตรต้องระบุคะแนนเต็ม","warning");return}if(z==="derived"&&!qe){p("กรุณากรอกสูตรคำนวณ","warning");return}if(z==="override"&&!Ye){p("กรุณาเลือกคอลัมน์กลางภาคที่จะเชื่อม","warning");return}const ye=z==="derived"?ne.map($e=>({var:$e.var,col_id:$e.id})):[];v.disabled=!0,v.textContent="กำลังบันทึก...";try{const $e={assignment_name:re,assignment_type:z==="bonus"||z==="derived"||z==="override"?"คะแนนพิเศษ":le,sheet_column:X,max_score:ae,column_type:z,formula:qe,formula_refs:ye,link_column_id:Ye};K?await Te(Number(K),$e):await Ee({...$e,class_id:u}),p("บันทึกสำเร็จ","success"),document.getElementById("sc-form-wrap").classList.add("hidden"),(z==="bonus"||z==="derived")&&(Y=!0),await se()}catch($e){p("บันทึกไม่สำเร็จ: "+($e.message??""),"error")}finally{v.disabled=!1,v.textContent="บันทึก"}})};window._scReload=se,ms(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-400">${M}</p>
      </div>
      ${O?'<button id="btn-fill-lifeskill" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex-shrink-0">🌱 เติมทักษะชีวิต</button>':""}
    </div>
    <div id="sc-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`),await se(),(T=document.getElementById("btn-fill-lifeskill"))==null||T.addEventListener("click",async()=>{const B=document.getElementById("btn-fill-lifeskill");B.disabled=!0,B.textContent="⏳";try{const a=await bt().catch(()=>({})),c=parseInt(a.academicYear??2568),w=parseInt(a.semester??1),f=await qt(c,w,"สามัญ").catch(()=>[]);if(!f.length){p("ยังไม่มีหัวข้อทักษะชีวิต — แอดมินเพิ่มก่อน","warning");return}const P=await be(u),h=new Set(P.map(te=>te.assignment_name));let W=0;for(const te of f)h.has(te.name)||(await Ee({class_id:u,assignment_name:te.name,assignment_type:"กลางภาค",sheet_column:te.sheet_col??"",max_score:te.max_score??20}),W++);p(W>0?`เพิ่ม ${W} คอลัมน์ ✅`:"มีคอลัมน์ทักษะชีวิตอยู่แล้ว",W>0?"success":"info"),await se()}catch{p("เติมไม่สำเร็จ","error")}finally{const a=document.getElementById("btn-fill-lifeskill");a&&(a.disabled=!1,a.textContent="🌱 เติมทักษะชีวิต")}}),setTimeout(()=>gs(_,u,C),500)}const gt="pp5:gradebook-updated",Ft="pp5_gradebook_update",fs="pp5-gradebook-sync-v1";let Me=null;try{Me=new BroadcastChannel(fs)}catch{}function ys(_){const u={..._,eventId:`${Date.now()}-${Math.random().toString(36).slice(2)}`,updatedAt:new Date().toISOString()};window.dispatchEvent(new CustomEvent(gt,{detail:u}));try{Me==null||Me.postMessage(u)}catch{}try{localStorage.setItem(Ft,JSON.stringify(u))}catch{}return u}function hs(_){const u=new Set,M=E=>{!(E!=null&&E.eventId)||u.has(E.eventId)||(u.add(E.eventId),u.size>100&&u.delete(u.values().next().value),_(E))},C=E=>M(E.detail),O=E=>M(E.data),j=E=>{if(!(E.key!==Ft||!E.newValue))try{M(JSON.parse(E.newValue))}catch{}};return window.addEventListener(gt,C),Me==null||Me.addEventListener("message",O),window.addEventListener("storage",j),()=>{window.removeEventListener(gt,C),Me==null||Me.removeEventListener("message",O),window.removeEventListener("storage",j)}}function vs(){ft("grades"),yt("บันทึกคะแนน","scores"),Ke(`<div class="text-center py-20 text-gray-400">
    <p class="text-5xl mb-4">📝</p>
    <p class="font-medium text-gray-600">เลือกห้องเรียนจากเมนู "ห้องเรียนของฉัน"</p>
    <p class="text-sm mt-2">แล้วกดปุ่ม 📝 คะแนน ที่การ์ดห้องเรียน</p>
  </div>`)}let et=null;function ws(_){return _>=80?4:_>=75?3.5:_>=70?3:_>=65?2.5:_>=60?2:_>=55?1.5:_>=50?1:0}function $s(_){return _>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:_>=2.5?{label:"ดี",cls:"text-blue-600"}:_>=1?{label:"ผ่าน",cls:"text-amber-500"}:{label:"ไม่ผ่าน",cls:"text-red-600"}}async function je(_,u){var C,O,j,E;et==null||et(),et=null,window._currentGradeTeacher=_,ft("grades"),yt("บันทึกคะแนน","scores");const M=u.master_subjects;Ke(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`);try{const U=u.source_class_id??u.id,[S,Y,se,ie,L,T,B,a,c]=await Promise.all([Xt(u.id),be(U),lt(U),ut(u.id,"กลางภาค"),ut(u.id,"ปลายภาค"),ut(u.id,"ระหว่างเรียน"),bt().catch(()=>({})),_?At(_.id).catch(()=>[]):Promise.resolve([]),as().catch(()=>({}))]),w=!!c.live_submit_open_date&&new Date().toISOString().slice(0,10)>=c.live_submit_open_date;is(B),u.course_id&&Y.length===0&&setTimeout(async()=>{var t;try{const l=a.filter(y=>y.id!==u.id&&y.course_id===u.course_id),b=(await Promise.all(l.map(async y=>{const G=await be(y.id).catch(()=>[]);return G.length?{...y,cols:G}:null}))).filter(Boolean);if(!b.length)return;(t=document.getElementById("grade-same-subj-popup"))==null||t.remove();const x=document.createElement("div");x.id="grade-same-subj-popup",x.className="fixed inset-0 z-[190] flex items-center justify-center p-6",x.style.background="rgba(0,0,0,0.45)",x.innerHTML=`
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
                <div class="text-3xl mb-2">📋</div>
                <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
                <p class="text-indigo-100 text-xs mt-1">ยังไม่มีคอลัมน์คะแนน — ต้องการคัดลอกจากห้องที่มีอยู่แล้วไหม?</p>
              </div>
              <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
                ${b.map(y=>`
                <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">${y.class_name}</p>
                    <p class="text-xs text-gray-400">${y.cols.length} คอลัมน์</p>
                  </div>
                  <button class="grade-copy-cols flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
                    data-src="${y.id}">
                    คัดลอก
                  </button>
                </div>`).join("")}
              </div>
              <div class="px-5 pb-5">
                <button id="grade-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
              </div>
            </div>`,document.body.appendChild(x),x.querySelector("#grade-ssp-close").addEventListener("click",()=>x.remove()),x.querySelectorAll(".grade-copy-cols").forEach(y=>{y.addEventListener("click",async()=>{const G=b.find(R=>R.id===parseInt(y.dataset.src));y.disabled=!0,y.textContent="⏳";try{for(const R of G.cols)await Ee({class_id:u.id,assignment_name:R.assignment_name,assignment_type:R.assignment_type,sheet_column:R.sheet_column??"",max_score:R.max_score});p(`คัดลอก ${G.cols.length} คอลัมน์จาก ${G.class_name} ✅`,"success"),x.remove(),je(_,u)}catch(R){p("คัดลอกไม่สำเร็จ: "+(R.message??""),"error"),y.disabled=!1,y.textContent="คัดลอก"}})})}catch{}},600);const f=parseInt(B.academicYear??2568),P=parseInt(B.semester??1),h=(M==null?void 0:M.subject_group)??"",W=(u==null?void 0:u.skill_group)==="ชีวิต",te=["AGM","AGMVOC"].includes(h);let ne=se,ue=[];W?(ue=(await Zt(u.id,f,P)).columnNames??[],ne=await lt(u.id)):te&&(ue=(await Dt(u.id,{semesterStart:B.semester_start,semesterEnd:B.semester_end,attendanceScoreMode:B.attendanceScoreMode??"recorded"})).columnNames??["คะแนนมาเรียน","คะแนนละหมาด"],ne=await lt(u.id));try{const t=await es(u.id,{attendanceScoreMode:B.attendanceScoreMode??"recorded"});t.columns>0&&(ne=await lt(u.id),t.skipped>0&&p(`ดึงคะแนนมาเรียนอัตโนมัติแล้ว (ข้าม ${t.skipped} รายการที่เคยแก้คะแนนด้วยมือ)`,"success"))}catch(t){console.error("syncAutoAttendanceScoreColumns failed",t)}let Se=[],de=[];try{Se=await ts(f,P),de=Se.length?await ss(Se.map(t=>t.id),S.map(t=>t.id)):[],Se.length?de.length||p(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนห้องนี้ ภาค ${P}/${f}`,"warning"):p(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ ภาค ${P}/${f}`,"warning")}catch(t){console.error("load reading evaluation failed",t),p(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${(t==null?void 0:t.message)??""}`,"error")}const ge={};for(const t of de)ge[t.student_id]=(ge[t.student_id]??0)+(parseFloat(t.score)||0);const fe={},Ce=Se.reduce((t,l)=>t+(parseFloat(l.max_score)||0),0);for(const[t,l]of Object.entries(ge)){const b=Ce>0?l/Ce*100:0,x=cs(b);fe[parseInt(t)]={score100:b,label:x.label,cls:x.cls}}let ce=ue.length?await be(u.id):Y;if(ce.length===0){const t=(l,b)=>Ee({class_id:u.id,assignment_name:`คะแนนที่ ${b}`,max_score:20,assignment_type:l,sheet_column:""});for(let l=1;l<=5;l++)await t("midterm",l);for(let l=1;l<=5;l++)await t("final",l);ce=await be(u.id)}ue.length&&(ce=[...ce].sort((t,l)=>{const b=ue.indexOf(t.assignment_name),x=ue.indexOf(l.assignment_name);return b>=0||x>=0?b<0?1:x<0?-1:b-x:(t.id??0)-(l.id??0)}));const Re=new Set(ue.length?ce.filter(t=>ue.includes(t.assignment_name)).map(t=>t.id):[]),Q=t=>{const l=typeof t=="object"?t==null?void 0:t.id:t;return Re.has(l)},J=t=>t.assignment_name==="คะแนนละหมาด"?`คะแนนระบบกลาง (แก้ไขไม่ได้)
คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา
หากคะแนนว่าง = ครูที่ปรึกษาศาสนายังไม่ได้บันทึกในสัปดาห์นั้น`:"คะแนนระบบกลาง: แก้ไขไม่ได้",D=ce.filter(t=>t.column_type==="bonus"),ve=ce.filter(t=>t.column_type==="derived"),me=ce.filter(t=>t.column_type==="override"),Ne=ce.filter(t=>(t.column_type??"regular")==="regular"),Be=Object.fromEntries(ce.map(t=>[t.id,t])),V=Ne.filter(t=>t.assignment_type!=="final"&&t.assignment_type!=="ปลายภาค"),s=Ne.filter(t=>t.assignment_type==="final"||t.assignment_type==="ปลายภาค"),v=Rt(D),K=`gradeToggles_${(_==null?void 0:_.id)??"guest"}_${u.id}`,z=(()=>{try{return JSON.parse(localStorage.getItem(K)??"{}")}catch{return{}}})(),re=()=>localStorage.setItem(K,JSON.stringify({toggleRound:$e,toggleForceGrade:Ge,toggleKhuna:Oe,toggleRead:ze,showBonusCols:X}));let X=z.showBonusCols??!1,le=!1;const H={};for(const t of ne)H[t.student_id]||(H[t.student_id]={}),H[t.student_id][t.score_column_id]={orig:t.original_score,retake:t.retake_score,final:t.final_score??t.original_score,history:t.score_history??[]};for(const t of S)t.special_result&&(H[t.id]||(H[t.id]={}),H[t.id].__force=t.special_result);const ae=(t,l)=>{var b,x,y,G;return((x=(b=H[t])==null?void 0:b[l])==null?void 0:x.final)??((G=(y=H[t])==null?void 0:y[l])==null?void 0:G.orig)??null},qe=(t,l)=>{var b,x,y;return(((y=(x=(b=H[t])==null?void 0:b[l])==null?void 0:x.history)==null?void 0:y.length)??0)>1},Ye=(t,l)=>l.reduce((b,x)=>b+(parseFloat(ae(t,x.id))||0),0),ye=t=>t.reduce((l,b)=>l+(parseFloat(b.max_score)||0),0),nt=(t,l)=>{const b=parseFloat(ae(t,l.id))||0;if(!l.bonus_formula)return b;const x=Object.fromEntries(v.map(G=>[G.var,parseFloat(ae(t,G.id))||0])),y=tt(l.bonus_formula,x)??0;return l.max_score?Math.min(b+y,l.max_score):b+y},Qe=(t,l)=>l.reduce((b,x)=>b+nt(t,x),0),Je=(t,l)=>{if(!t.formula)return 0;const b={};for(const x of t.formula_refs??[])b[x.var]=parseFloat(ae(l,x.col_id))||0;return tt(t.formula,b)??0};let $e=z.toggleRound??!0,Ge=z.toggleForceGrade??!1,Oe=z.toggleKhuna??!0,ze=z.toggleRead??!0;const Ot=["0","ร","มส","มผ"],Ht=B.forceGradeOptions?String(B.forceGradeOptions).split(",").map(t=>t.trim()).filter(Boolean):Ot,He=t=>{const l=ye(V),b=ye(s),x=ve.reduce((o,g)=>o+(parseFloat(g.max_score)||0),0),y=Qe(t,V),G=Qe(t,s),R=ve.reduce((o,g)=>o+(Je(g,t)||0),0),k=l+b+x,e=y+G+R,d=$e?Math.round(e):Math.round(e*10)/10,q=k>0?e/k*100:0,$=ws(q),F=$s($);return{midRaw:y,finRaw:G,pct:q,total:d,grade:$,khuna:F}},ht="sticky left-0 z-20 bg-white border border-gray-200",ot="sticky z-20 bg-white border border-gray-200",oe="border border-gray-200 text-center text-xs",vt=160,ee=76,Ue=(t,l,b,x="bg-emerald-500 text-white shadow-sm",y="bg-gray-100 text-gray-500 hover:bg-gray-200")=>`<button class="grade-toggle text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all select-none whitespace-nowrap ${b?x:y}"
        data-toggle="${t}">${l}</button>`,Gt=(t,l)=>{if(Q(l)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}const b=[...V,...s].find(n=>n.id===l),x=(b==null?void 0:b.assignment_type)==="final",y=ns((b==null?void 0:b.assignment_name)||""),G=y==="กลางภาค"||y==="ปลายภาค"||y==="สอบปรับ";let R;G&&x?R=L:G&&!x?R=ie:R=T.cols.length>0?T:x?L:ie;const k=R.cols,e=R.isFixed;if(document.querySelectorAll(".sheet-col-popup").forEach(n=>n.remove()),e&&k.length===1){const n=k[0];if(t.textContent.trim()!==n){Te(l,{sheet_column:n}).catch(()=>{}),t.textContent=n;const r=[...V,...s].find(m=>m.id===l);r&&(r.sheet_column=n)}return}const d=t.getBoundingClientRect(),q=t.textContent.trim(),$=document.createElement("div");$.className="sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",$.style.cssText=`top:${d.bottom+4}px;left:${Math.max(4,d.left-20)}px;min-width:${k.length>0?220:180}px`;const F=(b==null?void 0:b.assignment_name)||(x?"ปลายภาค":"กลางภาค");$.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${F}</span>
          ${e?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':""}</p>
        ${k.length>0?`
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${k.map(n=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${n===q?"border-blue-500 bg-blue-50 text-blue-700 font-bold":"border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"}"
            data-val="${n}" >${n}</button>`).join("")}
        </div>`:""}
        ${e?`<input id="scp-inp" type="hidden" value="${k[0]||q}"/>`:`<input id="scp-inp" type="text" value="${q==="—"?"":q}" placeholder="${k.length>0?"หรือพิมพ์เอง...":"เช่น EK"}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild($);const o=$.querySelector("#scp-inp");o.focus(),o.select(),o.addEventListener("input",n=>{n.target.value=n.target.value.toUpperCase()}),$.querySelectorAll(".scp-opt").forEach(n=>{n.addEventListener("click",()=>{o.value=n.dataset.val,$.querySelectorAll(".scp-opt").forEach(r=>{r.className=r.className.replace("border-blue-500 bg-blue-50 text-blue-700 font-bold","border-gray-200 text-gray-600")}),n.className=n.className.replace("border-gray-200 text-gray-600","border-blue-500 bg-blue-50 text-blue-700 font-bold")})});const g=async()=>{const n=o.value.trim().toUpperCase()||null;try{await Te(l,{sheet_column:n}),t.textContent=n||"—";const r=[...V,...s].find(m=>m.id===l);r&&(r.sheet_column=n),$.remove()}catch{p("บันทึกไม่สำเร็จ","error")}};o.addEventListener("keydown",n=>{n.key==="Enter"&&g()}),$.querySelector("#scp-save").addEventListener("click",g),$.querySelector("#scp-cancel").addEventListener("click",()=>$.remove()),setTimeout(()=>{const n=r=>{!$.contains(r.target)&&r.target!==t&&($.remove(),document.removeEventListener("click",n))};document.addEventListener("click",n)},100)},zt=(t,l)=>{if(Q(l)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}document.querySelectorAll(".max-score-popup").forEach(k=>k.remove());const b=[...V,...s].find(k=>k.id===l),x=t.getBoundingClientRect(),y=document.createElement("div");y.className="max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",y.style.cssText=`top:${x.bottom+4}px;left:${Math.max(4,x.left-20)}px;min-width:160px`,y.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${(b==null?void 0:b.max_score)||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(y);const G=y.querySelector("#msp-inp");G.focus(),G.select();const R=async()=>{const k=Math.max(1,parseFloat(G.value)||1);try{await Te(l,{max_score:k}),b&&(b.max_score=k),y.remove(),Le()}catch{p("บันทึกไม่สำเร็จ","error")}};G.addEventListener("keydown",k=>{k.key==="Enter"&&R()}),y.querySelector("#msp-save").addEventListener("click",R),y.querySelector("#msp-cancel").addEventListener("click",()=>y.remove()),setTimeout(()=>{const k=e=>{!y.contains(e.target)&&e.target!==t&&(y.remove(),document.removeEventListener("click",k))};document.addEventListener("click",k)},100)},Ut=(t,l,b)=>{var F;(F=document.getElementById("sg-detail-modal"))==null||F.remove();const{midRaw:x,finRaw:y,total:G,grade:R,khuna:k}=b,e=ye(V),d=ye(s),q=o=>{var r,m;const g=((r=l[o.id])==null?void 0:r.final)??((m=l[o.id])==null?void 0:m.orig)??null,n=g!=null&&o.max_score>0?(g/o.max_score*100).toFixed(0):"—";return`<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${o.assignment_name||"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${g??"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${o.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${n}%</td>
        </tr>`},$=document.createElement("div");$.id="sg-detail-modal",$.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",$.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${t.image_url?`<img src="${t.image_url}" class="w-9 h-11 rounded-lg object-cover border border-gray-200 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${t.full_name}</p>
            <p class="text-xs text-gray-400">${t.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${R>0?R.toFixed(1):"0"}</p>
            <p class="text-xs font-medium ${k.cls}">${k.label}</p>
          </div>
          <button id="sg-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-4 space-y-4">
          ${V.length>0?`<div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-blue-100">
              <thead><tr class="bg-blue-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${V.map(q).join("")}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${x.toFixed(1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${e}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${e>0?(x/e*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          ${s.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${s.map(q).join("")}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${y.toFixed(1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${d}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${d>0?(y/d*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${G>0?G:"—"}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${R>0?R.toFixed(1):"0"}
              <span class="text-sm font-semibold ${k.cls}"> — ${k.label}</span></p>
          </div>
        </div>
      </div>`,document.body.appendChild($),$.querySelector("#sg-close").addEventListener("click",()=>$.remove()),$.addEventListener("click",o=>{o.target===$&&$.remove()})},rt=()=>{var l;const t=document.getElementById("grade-togglebar");t&&(t.innerHTML=`
        <div class="flex items-center gap-1.5 px-3 py-2 ml-auto flex-wrap justify-end">
          ${Ue("round","ปัดเลข",$e)}
          ${Ue("khuna","คุณลักษณะ",Oe)}
          ${Ue("read","การอ่าน",ze)}
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          ${Ue("forceGrade","บังคับเกรด",Ge,"bg-rose-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
          ${Ue("bonus","⭐ คะแนนเก็บ/พิเศษ",X,"bg-amber-500 text-white shadow-sm","bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100")}
          ${X&&D.length?Ue("formula-link","🔗 เชื่อมสูตร",le,"bg-violet-500 text-white shadow-sm","bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100"):""}
          ${w?`
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          <button id="btn-submit-regrade" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-600 text-white shadow-sm hover:bg-pink-700 transition">
            📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า
          </button>`:""}
        </div>`,(l=document.getElementById("btn-submit-regrade"))==null||l.addEventListener("click",async()=>{const b=document.getElementById("btn-submit-regrade"),x=S.map(y=>{var e;const{grade:G}=He(y.id),k=(((e=H[y.id])==null?void 0:e.__force)??"")||(G===0?"0":"");return k?{student_id:y.id,grade_failed_at:k}:null}).filter(Boolean);if(!x.length){p("ไม่มีนักเรียนติดในห้องนี้ตอนนี้","info");return}if(confirm(`พบนักเรียนติด ${x.length} คนในห้องนี้ ยืนยันส่งเข้าระบบแก้ค้างเก่าเลยไหม? (รายชื่อที่เคยส่งไปแล้วจะไม่ถูกส่งซ้ำ)`)){b.disabled=!0,b.textContent="กำลังส่ง...";try{const y=await ls(u.id,x);p(`ส่งสำเร็จ ✅ พบติด ${y.total_failing} คน — เพิ่มเข้าระบบใหม่ ${y.submitted} คน (ที่เหลือมีอยู่แล้ว)`,"success")}catch(y){p("ส่งไม่สำเร็จ: "+(y.message??""),"error")}finally{b.disabled=!1,b.textContent="📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า"}}}),t.querySelectorAll(".grade-toggle").forEach(b=>{b.addEventListener("click",()=>{const x=b.dataset.toggle;x==="round"&&($e=!$e),x==="forceGrade"&&(Ge=!Ge),x==="khuna"&&(Oe=!Oe),x==="read"&&(ze=!ze),x==="bonus"&&(X=!X,X||(le=!1),X&&D.length===0&&p('ยังไม่มีคอลัมน์พิเศษ — กด "จัดการคอลัมน์" เพื่อเพิ่ม',"info")),x==="formula-link"&&(le=!le),re(),rt(),Le()})}))},Pt=t=>{var x,y,G;(x=document.getElementById("formula-link-popup"))==null||x.remove();const l=document.createElement("div");l.id="formula-link-popup",l.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const b=v.length?v.map(R=>`<span class="font-mono font-bold text-violet-700">${R.var}</span> = "${R.assignment_name}"`).join("  |  "):'<span class="text-gray-400">ยังไม่มีคอลัมน์พิเศษ</span>';l.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-gradient-to-br from-violet-500 to-purple-600 px-5 py-4">
            <h3 class="text-white font-bold text-sm">🔗 เชื่อมสูตรจากคะแนนพิเศษ</h3>
            <p class="text-violet-100 text-xs mt-0.5">คอลัมน์: <span class="font-semibold">${pe(t.assignment_name)}</span> (เต็ม ${t.max_score??"?"})</p>
            <p class="text-violet-200 text-[10px] mt-1">สูตรจะบวกเพิ่มเข้าคะแนนที่กรอก ไม่เกินคะแนนเต็ม</p>
          </div>
          <div class="p-4 space-y-3">
            <div class="bg-violet-50 rounded-xl p-3 text-xs text-violet-800">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้:</p>
              <p id="flp-vars">${b}</p>
              <p class="mt-1 text-violet-500">ฟังก์ชัน: MIN, MAX, IF, ROUND, SUM, AVG, CLAMP</p>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">สูตร <span class="text-red-400">*</span></label>
              <div class="flex gap-2">
                <input id="flp-formula" type="text" value="${pe(t.bonus_formula??"")}"
                  placeholder="เช่น MIN(A,5)  หรือ  A*0.5+B"
                  class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm font-mono focus:outline-none focus:border-violet-400"/>
                <button id="flp-test" class="px-3 py-2 rounded-xl bg-violet-100 text-violet-700 text-xs font-medium hover:bg-violet-200 whitespace-nowrap">ทดสอบ</button>
              </div>
              <p id="flp-result" class="text-xs mt-1 hidden"></p>
            </div>
            <div class="flex gap-2">
              ${t.bonus_formula?'<button id="flp-clear" class="flex-1 py-2.5 rounded-xl border border-red-200 text-red-500 text-xs hover:bg-red-50 transition">ลบสูตร</button>':""}
              <button id="flp-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="flp-save" class="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition">บันทึก</button>
            </div>
          </div>
        </div>`,document.body.appendChild(l),l.querySelector("#flp-cancel").addEventListener("click",()=>l.remove()),(y=l.querySelector("#flp-test"))==null||y.addEventListener("click",()=>{const R=l.querySelector("#flp-formula").value.trim(),k=l.querySelector("#flp-result");if(!R){k.classList.add("hidden");return}const e=Object.fromEntries(v.map(q=>[q.var,5])),d=tt(R,e);if(k.classList.remove("hidden"),d===null)k.className="text-xs mt-1 text-red-500",k.textContent="⚠️ สูตรไม่ถูกต้อง";else{k.className="text-xs mt-1 text-emerald-600";const q=v.map(F=>`${F.var}=5`).join(", "),$=t.max_score?Math.min(0+d,t.max_score):d;k.textContent=`✅ ตัวอย่าง (${q||"ไม่มี"}) → bonus=${d} → คะแนนจริง MIN(0+${d},${t.max_score??"∞"}) = ${$}`}}),(G=l.querySelector("#flp-clear"))==null||G.addEventListener("click",async()=>{try{await Te(t.id,{bonus_formula:null,bonus_formula_refs:[]}),t.bonus_formula=null,t.bonus_formula_refs=[],p("ลบสูตรแล้ว ✅","success"),l.remove(),rt(),Le()}catch{p("บันทึกไม่สำเร็จ","error")}}),l.querySelector("#flp-save").addEventListener("click",async()=>{const R=l.querySelector("#flp-formula").value.trim();if(!R){p("กรุณากรอกสูตร","warning");return}if(tt(R,Object.fromEntries(v.map(d=>[d.var,5])))===null){p("สูตรไม่ถูกต้อง","warning");return}const k=v.map(d=>({var:d.var,col_id:d.id})),e=l.querySelector("#flp-save");e.disabled=!0,e.textContent="⏳";try{await Te(t.id,{bonus_formula:R,bonus_formula_refs:k}),t.bonus_formula=R,t.bonus_formula_refs=k,p("บันทึกสูตรแล้ว ✅","success"),l.remove(),rt(),Le()}catch{p("บันทึกไม่สำเร็จ","error"),e.disabled=!1,e.textContent="บันทึก"}})},wt=(()=>{var b;const t={};for(const x of ce)Q(x)&&(t[b=x.assignment_name]??(t[b]=[])).push(x);const l=new Set;for(const x of Object.values(t))if(!(x.length<=1)){x.sort((y,G)=>y.id-G.id);for(const y of x.slice(1))l.add(y.id)}return l})(),Vt=()=>{var d,q,$,F;(d=document.getElementById("manage-cols-modal"))==null||d.remove();const t=document.createElement("div");t.id="manage-cols-modal",t.className="fixed inset-0 z-[600] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4";const l=(o,g=[])=>{const n=Q(o),r=n&&wt.has(o.id),m=n&&!r,i=g.findIndex(A=>A.id===o.id),I=!n&&i>0&&!Q(g[i-1]),N=!n&&i>=0&&i<g.length-1;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${m?"border-emerald-100 bg-emerald-50/70":r?"border-amber-200 bg-amber-50/70":"border-gray-100 hover:border-gray-200 bg-gray-50/60"}">
          ${m?'<span class="w-4 text-emerald-500 text-xs flex-shrink-0">🔒</span>':r?`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-amber-500 flex-shrink-0" data-colid="${o.id}" title="คอลัมน์ซ้ำ (ระบบสร้างผิดพลาด)" />`:`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-colid="${o.id}" />`}
          <div class="flex flex-col gap-0.5 flex-shrink-0">
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${I?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${o.id}" data-dir="up" ${I?"":"disabled"}>▲</button>
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${N?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${o.id}" data-dir="down" ${N?"":"disabled"}>▼</button>
          </div>
          <span class="flex-1 text-xs text-gray-700 truncate">${o.assignment_name||"—"}${r?' <span class="text-amber-600 font-semibold">(ซ้ำ)</span>':""}</span>
          <span class="text-[11px] text-gray-400">/${o.max_score||0}</span>
          ${n?"":`
          <button class="mcm-sync-toggle text-[10px] font-semibold px-1.5 py-0.5 rounded-lg flex-shrink-0 ${o.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-300 hover:bg-gray-100 hover:text-gray-500"}"
            data-colid="${o.id}"
            title="${o.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}">🔄</button>`}
          ${m?'<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>':`<button class="mcm-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${o.id}" title="ลบคอลัมน์${r?"ซ้ำ":""}">🗑</button>`}
        </div>`},b=o=>`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-100 bg-amber-50/40">
          <input type="text" class="mcm-bonus-name flex-1 text-xs text-amber-800 bg-transparent border-b border-transparent focus:border-amber-300 focus:outline-none px-0.5 min-w-0"
            value="${(o.assignment_name||"").replace(/"/g,"&quot;")}" data-bonusid="${o.id}" />
          <span class="text-[11px] text-amber-400 flex-shrink-0">${o.max_score?"/"+o.max_score:"∞"}</span>
          <button class="mcm-bonus-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${o.id}" title="ลบคอลัมน์">🗑</button>
        </div>`,x=o=>{var g,n;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-teal-100 bg-teal-50/40">
          <span class="flex-1 text-xs text-teal-800 truncate">${pe(o.assignment_name||"—")}</span>
          <span class="text-[10px] text-teal-500 flex-shrink-0 truncate max-w-[90px]" title="เชื่อมกับ: ${pe(((g=Be[o.link_column_id])==null?void 0:g.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗 ${pe(((n=Be[o.link_column_id])==null?void 0:n.assignment_name)??"—")}</span>
          <button class="mcm-override-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${o.id}" title="ลบคอลัมน์">🗑</button>
        </div>`};t.innerHTML=`<div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[80vh] flex flex-col">
        <div class="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ จัดการคอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">ลบหรือเพิ่มคอลัมน์คะแนน</p>
          </div>
          <button id="mcm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-5 space-y-4">
          ${V.length<5||s.length<5?`
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-center gap-3">
            <span class="text-xl">✨</span>
            <div class="flex-1">
              <p class="text-xs font-medium text-indigo-800">เติมคอลัมน์เริ่มต้นครบ 5+5</p>
              <p class="text-[11px] text-indigo-400">สร้างคอลัมน์เปล่าจนครบกลางภาค 5 + ปลายภาค 5</p>
            </div>
            <button id="mcm-fill-default" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition flex-shrink-0">เติมให้ครบ</button>
          </div>`:""}
          <!-- bulk bar -->
          <div id="mcm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="mcm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="mcm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-blue-700 text-sm">📘 กลางภาค <span class="font-normal text-gray-400">(${V.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${V.map(o=>l(o,V)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${s.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${s.map(o=>l(o,s)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-600 text-sm">⭐ คะแนนพิเศษ (Bonus) <span class="font-normal text-gray-400">(${D.length} คอลัมน์)</span></h4>
            </div>
            <div id="mcm-bonus-list" class="space-y-1.5">${D.map(b).join("")}</div>
            <button id="mcm-add-bonus" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-amber-200 text-amber-500 hover:border-amber-400 hover:bg-amber-50 text-sm transition-colors">＋ เพิ่มคอลัมน์พิเศษ</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-teal-700 text-sm">🔄 ปรับคะแนนกลางภาค <span class="font-normal text-gray-400">(${me.length} คอลัมน์)</span></h4>
            </div>
            <p class="text-[11px] text-gray-400 mb-1.5">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</p>
            <div id="mcm-override-list" class="space-y-1.5">${me.map(x).join("")}</div>
            <button id="mcm-add-override" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-teal-200 text-teal-600 hover:border-teal-400 hover:bg-teal-50 text-sm transition-colors">＋ เพิ่มคอลัมน์ปรับคะแนน</button>
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#mcm-close").addEventListener("click",()=>t.remove());const y=(o,g)=>{var r;(r=document.getElementById("mcm-del-confirm"))==null||r.remove();const n=document.createElement("div");n.id="mcm-del-confirm",n.className="fixed inset-0 z-[700] flex items-center justify-center p-6",n.style.background="rgba(0,0,0,0.5)",n.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">🗑️</div>
            <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">${o}</p>
            <div class="flex gap-3">
              <button id="mcm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="mcm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition">ลบเลย</button>
            </div>
          </div>`,document.body.appendChild(n),n.querySelector("#mcm-conf-no").addEventListener("click",()=>n.remove()),n.querySelector("#mcm-conf-yes").addEventListener("click",()=>{n.remove(),g()})},G=()=>{t.querySelectorAll(".mcm-col-list").forEach((o,g)=>{const n=g===0?V:s;o.innerHTML=n.map(r=>l(r,n)).join("")}),R()},R=()=>{var g;t.querySelectorAll(".mcm-move").forEach(n=>{n.addEventListener("click",async()=>{if(n.disabled)return;const r=parseInt(n.dataset.colid),m=n.dataset.dir,i=V.findIndex(_e=>_e.id===r)!==-1?V:s,I=i.findIndex(_e=>_e.id===r),N=m==="up"?I-1:I+1;if(N<0||N>=i.length||Q(i[N]))return;const A=i[I],Z=i[N];i[I]=Z,i[N]=A;const we=A.sort_order??(I+1)*10,xe=Z.sort_order??(N+1)*10;A.sort_order=xe,Z.sort_order=we,await Nt([{id:A.id,sort_order:xe},{id:Z.id,sort_order:we}]),Le(),G()})}),t.querySelectorAll(".mcm-sync-toggle").forEach(n=>{n.addEventListener("click",()=>{const r=parseInt(n.dataset.colid),m=[...V,...s].find(N=>N.id===r);if(!m)return;const i=!m.auto_attendance_sync,I=async()=>{try{await Tt(r,i),m.auto_attendance_sync=i,p(i?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้านี้ ✅":"ปิดใช้งานแล้ว","success"),G()}catch{p("บันทึกไม่สำเร็จ","error")}};i?y(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${m.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้าบันทึกคะแนน — คนที่เคยแก้คะแนนด้วยมือไว้ก่อนจะไม่ถูกทับ</span>`,I):I()})}),t.querySelectorAll(".mcm-del").forEach(n=>{n.addEventListener("click",()=>{const r=parseInt(n.dataset.colid),m=[...V,...s].find(I=>I.id===r),i=wt.has(r);if(Q(r)&&!i){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้","warning");return}y(i?`คอลัมน์นี้เป็น <span class="font-semibold">คอลัมน์ซ้ำ</span> ของ "${(m==null?void 0:m.assignment_name)||""}" (เกิดจากระบบสร้างคอลัมน์ซ้ำผิดพลาด)<br/><span class="text-xs text-gray-500">คะแนนของคอลัมน์นี้เป็นค่าที่ระบบเติมอัตโนมัติ ลบได้อย่างปลอดภัย — ระบบจะเติมคะแนนกลับให้ถูกต้องในคอลัมน์ที่เหลือของรอบถัดไป</span>`:`ต้องการลบ <span class="font-semibold">"${(m==null?void 0:m.assignment_name)||"คอลัมน์นี้"}"</span> ใช่ไหม?<br/><span class="text-xs text-red-500">คะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย</span>`,async()=>{var I,N;try{await Fe(r);const A=V.findIndex(xe=>xe.id===r),Z=s.findIndex(xe=>xe.id===r);A!==-1&&V.splice(A,1),Z!==-1&&s.splice(Z,1),p("ลบคอลัมน์แล้ว ✅","success"),Le();const we=t.querySelector(".overflow-auto");we&&((N=(I=we.querySelector(".space-y-1\\.5"))==null?void 0:I.remove)==null||N.call(I),t.querySelectorAll(".mcm-col-list").forEach((xe,_e)=>{const Ie=_e===0?V:s;xe.innerHTML=Ie.map(he=>l(he,Ie)).join("")}),R())}catch{p("ลบไม่สำเร็จ","error")}})})});const o=()=>{const n=[...t.querySelectorAll(".mcm-cb:checked")],r=t.querySelector("#mcm-bulk-bar");if(r){r.classList.toggle("hidden",n.length===0);const m=r.querySelector("#mcm-bulk-count");m&&(m.textContent=`เลือก ${n.length} รายการ`)}};t.querySelectorAll(".mcm-cb").forEach(n=>n.addEventListener("change",o)),(g=t.querySelector("#mcm-bulk-del"))==null||g.addEventListener("click",()=>{const n=[...t.querySelectorAll(".mcm-cb:checked")];if(!n.length)return;const r=n.map(m=>{const i=[...V,...s].find(I=>I.id===parseInt(m.dataset.colid));return(i==null?void 0:i.assignment_name)??`ID ${m.dataset.colid}`}).join(", ");y(`ลบ ${n.length} คอลัมน์:<br/><span class="font-semibold text-sm">${r}</span>`,async()=>{try{for(const m of n){const i=parseInt(m.dataset.colid);await Fe(i);const I=V.findIndex(A=>A.id===i),N=s.findIndex(A=>A.id===i);I!==-1&&V.splice(I,1),N!==-1&&s.splice(N,1)}p(`ลบ ${n.length} คอลัมน์แล้ว ✅`,"success"),Le(),t.querySelectorAll(".mcm-col-list").forEach((m,i)=>{m.innerHTML=(i===0?V:s).map(l).join("")}),R()}catch{p("ลบไม่สำเร็จ","error")}})})};R();const k=()=>{t.querySelectorAll(".mcm-bonus-name").forEach(o=>{o.addEventListener("blur",async()=>{const g=parseInt(o.dataset.bonusid),n=o.value.trim();if(n)try{await Te(g,{assignment_name:n});const r=D.find(m=>m.id===g);r&&(r.assignment_name=n),Le()}catch{p("บันทึกไม่สำเร็จ","error")}}),o.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),o.blur())})}),t.querySelectorAll(".mcm-bonus-del").forEach(o=>{o.addEventListener("click",()=>{const g=parseInt(o.dataset.colid),n=D.find(r=>r.id===g);y(`ลบคอลัมน์พิเศษ <span class="font-semibold">"${(n==null?void 0:n.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Fe(g);const r=D.findIndex(i=>i.id===g);r!==-1&&D.splice(r,1),p("ลบคอลัมน์พิเศษแล้ว ✅","success"),Le();const m=t.querySelector("#mcm-bonus-list");m&&(m.innerHTML=D.map(b).join(""),k())}catch{p("ลบไม่สำเร็จ","error")}})})})};k();const e=()=>{t.querySelectorAll(".mcm-override-del").forEach(o=>{o.addEventListener("click",()=>{const g=parseInt(o.dataset.colid),n=me.find(r=>r.id===g);y(`ลบคอลัมน์ปรับคะแนน <span class="font-semibold">"${(n==null?void 0:n.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย (คะแนนในคอลัมน์กลางภาคหลักที่เคยปรับไปแล้วจะไม่ถูกย้อนกลับ)</span>`,async()=>{try{await Fe(g);const r=me.findIndex(i=>i.id===g);r!==-1&&me.splice(r,1),p("ลบคอลัมน์ปรับคะแนนแล้ว ✅","success"),Le();const m=t.querySelector("#mcm-override-list");m&&(m.innerHTML=me.map(x).join(""),e())}catch{p("ลบไม่สำเร็จ","error")}})})})};e(),(q=t.querySelector("#mcm-add-override"))==null||q.addEventListener("click",()=>{var n;(n=document.getElementById("quick-add-override-mcm"))==null||n.remove();const o=Ne.filter(r=>r.assignment_type==="กลางภาค"||r.assignment_type==="midterm"),g=document.createElement("div");g.id="quick-add-override-mcm",g.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",g.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-teal-700">🔄 เพิ่มคอลัมน์ปรับคะแนนกลางภาค</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qom-name" type="text" placeholder="เช่น คะแนนสอบปรับ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">เชื่อมกับคอลัมน์กลางภาคหลัก <span class="text-red-400">*</span></label>
              <select id="qom-link" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-200">
                <option value="">— เลือกคอลัมน์ —</option>
                ${o.map(r=>`<option value="${r.id}">${pe(r.assignment_name)} (เต็ม ${r.max_score??"—"})</option>`).join("")}
              </select>
              <p class="text-[11px] text-gray-400 mt-1">ถ้าคะแนนคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที</p>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qom-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qom-save" class="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(g),g.querySelector("#qom-cancel").addEventListener("click",()=>g.remove()),g.querySelector("#qom-name").focus(),g.querySelector("#qom-save").addEventListener("click",async()=>{const r=g.querySelector("#qom-name").value.trim(),m=Number(g.querySelector("#qom-link").value)||null;if(!r){p("กรุณากรอกชื่อคอลัมน์","warning");return}if(!m){p("กรุณาเลือกคอลัมน์กลางภาคที่จะเชื่อม","warning");return}const i=o.find(N=>N.id===m),I=g.querySelector("#qom-save");I.disabled=!0,I.textContent="⏳";try{await Ee({class_id:u.id,assignment_name:r,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:(i==null?void 0:i.max_score)??null,column_type:"override",link_column_id:m}),g.remove(),t.remove(),je(_,u),p(`เพิ่ม "${r}" แล้ว ✅`,"success")}catch(N){p("เพิ่มไม่สำเร็จ: "+(N.message??""),"error"),I.disabled=!1,I.textContent="เพิ่ม"}})}),($=t.querySelector("#mcm-add-bonus"))==null||$.addEventListener("click",()=>{var g;(g=document.getElementById("quick-add-bonus-mcm"))==null||g.remove();const o=document.createElement("div");o.id="quick-add-bonus-mcm",o.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",o.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qbm-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qbm-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qbm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qbm-save" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(o),o.querySelector("#qbm-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#qbm-name").focus(),o.querySelector("#qbm-save").addEventListener("click",async()=>{const n=o.querySelector("#qbm-name").value.trim(),r=o.querySelector("#qbm-max").value?parseFloat(o.querySelector("#qbm-max").value):null;if(!n){p("กรุณากรอกชื่อคอลัมน์","warning");return}const m=o.querySelector("#qbm-save");m.disabled=!0,m.textContent="⏳";try{const i=await Ee({class_id:u.id,assignment_name:n,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:r,column_type:"bonus",formula:null,formula_refs:[]});o.remove(),t.remove(),je(_,u),p(`เพิ่ม "${n}" แล้ว ✅`,"success")}catch(i){p("เพิ่มไม่สำเร็จ: "+(i.message??""),"error"),m.disabled=!1,m.textContent="เพิ่ม"}})}),t.querySelectorAll(".mcm-add").forEach(o=>{o.addEventListener("click",()=>{t.remove(),Mt(u,o.dataset.type,()=>je(_,u))})}),(F=t.querySelector("#mcm-fill-default"))==null||F.addEventListener("click",async()=>{const o=t.querySelector("#mcm-fill-default");o.disabled=!0,o.textContent="กำลังสร้าง...";try{const g=Math.max(0,5-V.length),n=Math.max(0,5-s.length),r=(m,i)=>Ee({class_id:u.id,assignment_name:`คะแนนที่ ${i}`,max_score:20,assignment_type:m,sheet_column:""});for(let m=1;m<=g;m++)await r("midterm",V.length+m);for(let m=1;m<=n;m++)await r("final",s.length+m);t.remove(),je(_,u)}catch{p("สร้างคอลัมน์ไม่สำเร็จ","error"),o.disabled=!1,o.textContent="เติมให้ครบ"}})},Kt=t=>{if(!ze)return'<td class="border border-sky-100 text-center text-gray-300 text-[10px]">—</td>';const l=fe[t];return l?'<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold '+l.cls+'" id="gread-'+t+'">'+l.label+"</td>":'<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-'+t+'">—</td>'},Yt=t=>{const l=new Date(t);return`${l.getDate()}/${l.getMonth()+1} ${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`},Qt=(t,l,b,x)=>{var e;if((e=document.getElementById("score-hist-popup"))==null||e.remove(),!(x!=null&&x.length))return;let y="",G=0;x.forEach((d,q)=>{G+=d.d,q===0?y+=String(d.d):y+=d.d>=0?` + ${d.d}`:` − ${Math.abs(d.d)}`}),y+=` = ${Math.round(G*1e3)/1e3}`;const R=S.find(d=>d.id===t),k=document.createElement("div");k.id="score-hist-popup",k.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",k.style.background="rgba(0,0,0,0.4)",k.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
            <p class="font-bold text-indigo-700 text-sm">ประวัติคะแนน — ${pe(b)}</p>
            <p class="text-xs text-indigo-400">${pe((R==null?void 0:R.full_name)??"")}</p>
          </div>
          <div class="p-4">
            <div class="space-y-1 mb-3 max-h-44 overflow-y-auto">
              ${x.map(d=>`
                <div class="flex justify-between items-center text-xs py-1 border-b border-gray-50">
                  <span class="text-gray-400">${Yt(d.at)}</span>
                  <span class="font-semibold ${d.d>=0?"text-emerald-600":"text-rose-600"}">${d.d>=0?"+":""}${d.d}</span>
                </div>`).join("")}
            </div>
            <div class="bg-indigo-50 rounded-xl px-3 py-2 text-xs font-mono text-indigo-700 text-center">${y}</div>
          </div>
          <div class="px-5 pb-4 flex gap-2">
            <button id="hist-reset" class="flex-1 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs hover:bg-rose-50 transition">รีเซ็ตประวัติ</button>
            <button id="hist-close" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ปิด</button>
          </div>
        </div>`,document.body.appendChild(k),k.querySelector("#hist-close").addEventListener("click",()=>k.remove()),k.querySelector("#hist-reset").addEventListener("click",async()=>{var q,$,F,o,g;const d=($=(q=H[t])==null?void 0:q[l])==null?void 0:$.final;if(d==null){k.remove();return}try{const n=await dt(u.id,t,l,d,{});if(n){H[t]||(H[t]={}),H[t][l]={orig:((F=n.history[0])==null?void 0:F.d)??n.final,retake:null,final:n.final,history:n.history};const r=document.getElementById("grade-grid-wrap"),m=r==null?void 0:r.querySelector(`.grade-input[data-sid="${t}"][data-col="${l}"]`);m&&(m.value=n.final!==null?String(n.final):""),(g=(o=m==null?void 0:m.closest("td"))==null?void 0:o.querySelector(".hist-indicator"))==null||g.remove(),p("รีเซ็ตประวัติแล้ว","success"),await _applyOverrideIfNeeded(t,l)}}catch{p("ไม่สำเร็จ","error")}k.remove()}),k.addEventListener("click",d=>{d.target===k&&k.remove()})},Jt=(t,l,b)=>{var R;(R=document.getElementById("mass-score-popup"))==null||R.remove();const x=document.createElement("div");x.id="mass-score-popup",x.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",x.style.background="rgba(0,0,0,0.4)",x.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div class="bg-blue-50 px-5 py-3 border-b border-blue-100">
            <p class="font-bold text-blue-700 text-sm">ตั้งคะแนนทั้งห้อง</p>
            <p class="text-xs text-blue-400">${pe(l)}${b?" (เต็ม "+b+")":""}</p>
          </div>
          <div class="p-4 space-y-2">
            <p class="text-xs text-gray-500">ใส่ตัวเลข หรือ +/- สำหรับสะสม</p>
            <input type="text" id="mass-inp" inputmode="decimal" autocomplete="off"
              class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="+5 / 10 / -2"/>
            <p id="mass-preview" class="text-xs text-center text-gray-400 h-4"></p>
          </div>
          <div class="px-5 pb-5 flex gap-2">
            <button id="mass-cancel" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ยกเลิก</button>
            <button id="mass-confirm" class="flex-1 py-2.5 rounded-2xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition">ตั้งค่า</button>
          </div>
        </div>`,document.body.appendChild(x);const y=x.querySelector("#mass-inp"),G=x.querySelector("#mass-preview");y.addEventListener("input",()=>{const k=y.value.trim();if(!k){G.textContent="";return}const e=parseFloat(k);if(isNaN(e)){G.textContent="";return}G.textContent=/^[+-]/.test(k)?`บวก/ลบ ${e>=0?"+":""}${e} ใน ${S.length} คน`:`ตั้งเป็น ${e} ใน ${S.length} คน`}),x.querySelector("#mass-cancel").addEventListener("click",()=>x.remove()),x.querySelector("#mass-confirm").addEventListener("click",async()=>{var F,o,g,n;const k=y.value.trim();if(!k){x.remove();return}const e=x.querySelector("#mass-confirm");e.disabled=!0,e.textContent="⏳";let d=0,q=0,$=0;for(const r of S){const m=((o=(F=H[r.id])==null?void 0:F[t])==null?void 0:o.history)??[];try{const i=await dt(u.id,r.id,t,k,{currentHistory:m,max:b??null});if(i){i.clamped&&$++,H[r.id]||(H[r.id]={}),H[r.id][t]={orig:((g=i.history[0])==null?void 0:g.d)??i.final,retake:null,final:i.final,history:i.history};const I=document.getElementById("grade-grid-wrap"),N=I==null?void 0:I.querySelector(`.grade-input[data-sid="${r.id}"][data-col="${t}"]`);N&&(N.value=i.final!==null?String(i.final):"",N.style.boxShadow="0 0 0 2px #059669",setTimeout(()=>N.style.boxShadow="",700));const A=N==null?void 0:N.closest("td");if(i.history.length>1){if(!(A!=null&&A.querySelector(".hist-indicator"))){const Z=document.createElement("span");Z.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl",Z.textContent="Δ",Z.dataset.sid=r.id,Z.dataset.col=t,A==null||A.appendChild(Z)}}else(n=A==null?void 0:A.querySelector(".hist-indicator"))==null||n.remove();d++,await _applyOverrideIfNeeded(r.id,t)}}catch{q++}}S.forEach(r=>{var Ae;const{midRaw:m,finRaw:i,total:I,grade:N,khuna:A}=He(r.id),Z=((Ae=H[r.id])==null?void 0:Ae.__force)??"",we=document.getElementById(`gmid-${r.id}`),xe=document.getElementById(`gfin-${r.id}`);we&&(we.textContent=m>0?m.toFixed(1):"—"),xe&&(xe.textContent=i>0?i.toFixed(1):"—");const _e=document.getElementById(`gtotal-${r.id}`),Ie=document.getElementById(`ggrade-${r.id}`),he=document.getElementById(`gkhuna-${r.id}`);_e&&(_e.textContent=I>0?I:"—"),Ie&&(Ie.textContent=Z||(N>0?N.toFixed(1):"0")),he&&(he.textContent=A.label,he.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${A.cls}`)}),p(`ตั้งคะแนนสำเร็จ ${d}/${S.length} คน${$?" (ปรับ "+$+" คนที่เกินคะแนนเต็มอัตโนมัติ)":""}${q?" (ล้มเหลว "+q+")":""}`,d>0?"success":"error"),x.remove()}),x.addEventListener("click",k=>{k.target===x&&x.remove()}),setTimeout(()=>y.focus(),60)},Le=()=>{var k;const t=ye(V),l=ye(s),b=document.getElementById("grade-grid-wrap");if(!b)return;const x=`
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${ht} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${ot} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${ot} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${vt}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${V.length+1}" class="${oe} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${t>0?" (เต็ม "+t+")":""}</th>
          <th colspan="${s.length+1}" class="${oe} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${l>0?" (เต็ม "+l+")":""}</th>
          ${ve.length?`<th colspan="${ve.length}" class="${oe} bg-indigo-600 text-white font-semibold py-1.5">🧮 อ้างอิงสูตร</th>`:""}
          ${me.length?`<th colspan="${me.length}" class="${oe} bg-teal-600 text-white font-semibold py-1.5">🔄 ปรับคะแนนกลางภาค</th>`:""}
          ${X?`<th colspan="${D.length+1}" class="${oe} bg-amber-500 text-white font-semibold py-1.5">⭐ คะแนนเก็บ/พิเศษ</th>`:""}
          <th class="${oe} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${t+l+ve.reduce((e,d)=>e+(parseFloat(d.max_score)||0),0)||"?"}</div></th>
          <th class="${oe} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${Ge?`<th class="${oe} bg-rose-50 text-rose-600 text-xs" style="min-width:32px;width:32px" rowspan="3"><div class="text-[9px] font-semibold leading-tight">บัง<br/>คับ</div></th>`:""}
          <th class="${oe} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ${Oe?"":'<div class="text-[9px] font-normal text-emerald-300">ปิดอยู่</div>'}</th>
          <th class="${oe} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">${ze?"ผลประเมิน":"ปิดอยู่"}</div></th>
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${V.map(e=>`<th class="${oe} bg-blue-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${Q(e)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-blue-600 cursor-pointer hover:bg-blue-100"}"
                data-colid="${e.id}" title="${Q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${pe(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${Q(e)?"":`<button class="btn-scan-col text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${le?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${e.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${e.id}" title="${e.bonus_formula?"🔗 = "+e.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${oe} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${s.map(e=>`<th class="${oe} bg-purple-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${Q(e)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-purple-600 cursor-pointer hover:bg-purple-100"}"
                data-colid="${e.id}" title="${Q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${pe(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${Q(e)?"":`<button class="btn-scan-col text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${le?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${e.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${e.id}" title="${e.bonus_formula?"🔗 = "+e.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${oe} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
          ${ve.map(e=>`<th class="${oe} bg-indigo-50" style="width:${ee}px;min-width:${ee}px">
            <span class="text-[10px] text-indigo-400 font-mono block text-center truncate" title="${e.formula??""}">${e.formula??"—"}</span>
          </th>`).join("")}
          ${me.map(e=>{var d;return`<th class="${oe} bg-teal-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[10px] text-teal-500 flex-1 text-center truncate" title="เชื่อมกับ: ${pe(((d=Be[e.link_column_id])==null?void 0:d.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗</span>
              <button class="btn-mass-score text-teal-300 hover:text-teal-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${pe(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
            </div>
          </th>`}).join("")}
          ${X?D.map(e=>`<th class="${oe} bg-amber-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[11px] text-amber-500 flex-1 text-center">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${pe(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${Q(e)?"":`<button class="btn-scan-col text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
            </div>
          </th>`).join(""):""}
          ${X?`<th class="${oe} bg-amber-50" style="width:30px">
            <button class="btn-add-bonus text-amber-500 hover:bg-amber-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block">＋</button></th>`:""}
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${V.map(e=>`<th class="${oe} bg-blue-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${Q(e)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-blue-50"}"
              contenteditable="${Q(e)?"false":"true"}" data-colid="${e.id}" data-field="assignment_name" title="${Q(e)?J(e):""}">${e.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${Q(e)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-blue-500 hover:underline"}"
              data-colid="${e.id}" title="${Q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${e.max_score||0}</span></span>
            ${e.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${oe} bg-blue-50" style="width:30px"></th>
          ${s.map(e=>`<th class="${oe} bg-purple-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${Q(e)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-purple-50"}"
              contenteditable="${Q(e)?"false":"true"}" data-colid="${e.id}" data-field="assignment_name" title="${Q(e)?J(e):""}">${e.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${Q(e)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-purple-500 hover:underline"}"
              data-colid="${e.id}" title="${Q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${e.max_score||0}</span></span>
            ${e.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${oe} bg-purple-50" style="width:30px"></th>
          ${ve.map(e=>`<th class="${oe} bg-indigo-50" style="width:${ee}px;min-width:${ee}px">
            <span class="text-[11px] text-indigo-700 font-medium block text-center truncate">${e.assignment_name}</span>
            <span class="text-[10px] text-indigo-400">/${e.max_score??"?"}</span>
          </th>`).join("")}
          ${me.map(e=>`<th class="${oe} bg-teal-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-teal-700 cursor-text hover:bg-teal-100"
              contenteditable="true" data-colid="${e.id}" data-field="assignment_name">${e.assignment_name||"—"}</span>
            <span class="text-[10px] text-teal-400">/${e.max_score??"?"}</span>
          </th>`).join("")}
          ${X?D.map(e=>`<th class="${oe} bg-amber-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-amber-700 cursor-text hover:bg-amber-100"
              contenteditable="true" data-colid="${e.id}" data-field="assignment_name">${e.assignment_name||"—"}</span>
            <span class="text-[10px] text-amber-400">${e.max_score?"/"+e.max_score:"(ไม่จำกัด)"}</span>
          </th>`).join(""):""}
          ${X?`<th class="${oe} bg-amber-50" style="width:30px"></th>`:""}
        </tr>`,y=S.map((e,d)=>{var m;const{midRaw:q,finRaw:$,total:F,grade:o,khuna:g}=He(e.id),n=((m=H[e.id])==null?void 0:m.__force)??"",r=n||(o>0?o.toFixed(1):"0");return`<tr class="hover:bg-gray-50 transition" data-sid="${e.id}">
          <td class="${ht} text-center text-gray-400" style="width:28px">${d+1}</td>
          <td class="${ot} text-center font-mono text-gray-600" style="left:28px;width:64px">${e.student_code}</td>
          <td class="${ot} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${vt}px" data-idx="${d}">
            <div class="flex items-center gap-1.5 py-1">
              ${e.image_url?`<img src="${e.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${e.full_name}</span>
            </div>
          </td>
          ${V.map(i=>{const I=ae(e.id,i.id)??"",N=qe(e.id,i.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${Q(i)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${I}" placeholder="—"
              data-sid="${e.id}" data-col="${i.id}" data-max="${i.max_score}" ${Q(i)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gmid-${e.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${q>0?q.toFixed(1):"—"}</td>
          ${s.map(i=>{const I=ae(e.id,i.id)??"",N=qe(e.id,i.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${Q(i)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${I}" placeholder="—"
              data-sid="${e.id}" data-col="${i.id}" data-max="${i.max_score}" ${Q(i)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gfin-${e.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${$>0?$.toFixed(1):"—"}</td>
          ${ve.map(i=>{const I=Je(i,e.id),N=I!==null&&I!==0?Number(I.toFixed(2)):"—";return`<td class="border border-indigo-100 bg-indigo-50/40 text-center text-xs text-indigo-700 font-medium grade-derived-td" style="width:${ee}px;min-width:${ee}px;height:30px" title="คำนวณจาก: ${i.formula??""}">${N}</td>`}).join("")}
          ${me.map(i=>{const I=ae(e.id,i.id)??"",N=qe(e.id,i.id);return`<td class="border border-teal-100 text-center p-0 relative" style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-teal-50 focus:outline-none focus:ring-1 focus:ring-teal-300 focus:rounded"
              type="text" inputmode="decimal" value="${I}" placeholder="—"
              data-sid="${e.id}" data-col="${i.id}" data-max="${i.max_score??9999}"/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          ${X?D.map(i=>{const I=ae(e.id,i.id)??"",N=qe(e.id,i.id);return`<td class="border border-amber-100 text-center p-0 relative" style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-300 focus:rounded"
              type="text" inputmode="decimal" value="${I}" placeholder="—"
              data-sid="${e.id}" data-col="${i.id}" data-max="${i.max_score??9999}"/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join(""):""}
          ${X?'<td class="border border-amber-50 bg-amber-50/30" style="width:30px;height:30px"></td>':""}
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${e.id}" style="min-width:58px">${F>0?F:"—"}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${e.id}" style="min-width:50px">${r}</td>
          ${Ge?`<td class="border border-rose-100 text-center bg-rose-50 cursor-pointer hover:bg-rose-100 transition force-cell" style="min-width:32px;height:30px" data-sid="${e.id}">
            <span class="text-xs font-bold ${n?"text-rose-600":"text-rose-200"}">${n||"+"}</span></td>`:""}
          <td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${Oe?g.cls:"text-gray-300"}" id="gkhuna-${e.id}">${Oe?g.label:"—"}</td>
          ${Kt(e.id)}
        </tr>`}).join("");b.innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${x}</thead><tbody>${y}</tbody></table>`;const G=b.querySelector("table"),R=async(e,d)=>{var Ae,at,ke,We,Xe,Ze,De;const q=Be[d];if(!q||q.column_type!=="override"||!q.link_column_id)return;const $=(at=(Ae=H[e])==null?void 0:Ae[d])==null?void 0:at.final;if($==null)return;const F=q.link_column_id,o=(We=(ke=H[e])==null?void 0:ke[F])==null?void 0:We.final;if(o!=null&&o>=$)return;const g=(Xe=Be[F])==null?void 0:Xe.max_score,n=await dt(u.id,e,F,$,{max:typeof g=="number"?g:null});if(!n)return;H[e][F]={orig:((Ze=n.history[0])==null?void 0:Ze.d)??n.final,retake:null,final:n.final,history:n.history};const r=b.querySelector(`.grade-input[data-sid="${e}"][data-col="${F}"]`);r&&(r.value=n.final!==null?String(n.final):"",r.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",r.style.background="#f0fdf4",setTimeout(()=>{r.style.boxShadow="",r.style.background=""},900));const{midRaw:m,finRaw:i,total:I,grade:N,khuna:A}=He(e),Z=((De=H[e])==null?void 0:De.__force)??"",we=document.getElementById(`gmid-${e}`),xe=document.getElementById(`gfin-${e}`);we&&(we.textContent=m>0?m.toFixed(1):"—"),xe&&(xe.textContent=i>0?i.toFixed(1):"—");const _e=document.getElementById(`gtotal-${e}`),Ie=document.getElementById(`ggrade-${e}`),he=document.getElementById(`gkhuna-${e}`);_e&&(_e.textContent=I>0?I:"—"),Ie&&(Ie.textContent=Z||(N>0?N.toFixed(1):"0")),he&&(he.textContent=A.label,he.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${A.cls}`),p(`ปรับคะแนนกลางภาคอัตโนมัติ → ${n.final} (จากคอลัมน์ปรับคะแนน) ✅`,"success")};G.addEventListener("change",async e=>{var $,F,o,g,n,r,m,i,I,N;const d=e.target.closest(".grade-input"),q=e.target.closest(".force-input");if(d){const A=parseInt(d.dataset.sid),Z=parseInt(d.dataset.col),we=parseFloat(d.dataset.max);if(Q(Z)){p("คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้","warning"),d.value=((F=($=H[A])==null?void 0:$[Z])==null?void 0:F.final)??"";return}let xe=d.value.trim();const _e=((g=(o=H[A])==null?void 0:o[Z])==null?void 0:g.history)??[];H[A]||(H[A]={}),d.style.outline="2px solid #6366f1",d.style.outlineOffset="1px",(n=document.getElementById("grade-saving"))==null||n.classList.remove("hidden");try{const Ie=await dt(u.id,A,Z,xe===""?null:xe,{currentHistory:_e,max:isNaN(we)?null:we});if(!Ie){d.value=((r=H[A][Z])==null?void 0:r.final)??"";return}const{final:he,history:Ae,clamped:at}=Ie;H[A][Z]={orig:((m=Ae[0])==null?void 0:m.d)??he,retake:null,final:he,history:Ae},d.value=he!==null?String(he):"",d.title="",at&&p(`คะแนนเกินคะแนนเต็ม ปรับให้เป็น ${he} อัตโนมัติ`,"warning");const ke=d.closest("td");if(Ae.length>1){if(!(ke!=null&&ke.querySelector(".hist-indicator"))){const Ve=document.createElement("span");Ve.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none",Ve.textContent="Δ",Ve.dataset.sid=A,Ve.dataset.col=Z,Ve.title="ดูประวัติคะแนน",ke==null||ke.appendChild(Ve)}}else(i=ke==null?void 0:ke.querySelector(".hist-indicator"))==null||i.remove();d.style.outline="",d.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",d.style.background="#f0fdf4",setTimeout(()=>{d.style.boxShadow="",d.style.background=""},900);const{midRaw:We,finRaw:Xe,total:Ze,grade:De,khuna:_t}=He(A),Wt=((I=H[A])==null?void 0:I.__force)??"",kt=document.getElementById(`gmid-${A}`),Et=document.getElementById(`gfin-${A}`);kt&&(kt.textContent=We>0?We.toFixed(1):"—"),Et&&(Et.textContent=Xe>0?Xe.toFixed(1):"—");const St=document.getElementById(`gtotal-${A}`),Ct=document.getElementById(`ggrade-${A}`),mt=document.getElementById(`gkhuna-${A}`);St&&(St.textContent=Ze>0?Ze:"—"),Ct&&(Ct.textContent=Wt||(De>0?De.toFixed(1):"0")),mt&&(mt.textContent=_t.label,mt.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${_t.cls}`),await R(A,Z)}catch{p("บันทึกไม่สำเร็จ","error")}finally{(N=document.getElementById("grade-saving"))==null||N.classList.add("hidden")}}}),G.addEventListener("input",e=>{var r,m;const d=e.target.closest(".grade-input");if(!d)return;const q=d.value.trim();if(!/^[+-]/.test(q)){d.title="";return}const $=parseInt(d.dataset.sid),F=parseInt(d.dataset.col),o=((m=(r=H[$])==null?void 0:r[F])==null?void 0:m.final)??0,g=parseFloat(q);if(isNaN(g)){d.title="";return}const n=Math.round((o+g)*1e3)/1e3;d.title=`${o} ${g>=0?"+":"−"} ${Math.abs(g)} = ${n}`}),G.addEventListener("click",e=>{var F,o;const d=e.target.closest(".hist-indicator");if(d){const g=parseInt(d.dataset.sid),n=parseInt(d.dataset.col),r=((o=(F=H[g])==null?void 0:F[n])==null?void 0:o.history)??[],m=[...V,...s,...D].find(i=>i.id===n);Qt(g,n,(m==null?void 0:m.assignment_name)??"",r);return}const q=e.target.closest(".btn-mass-score");if(q){Jt(parseInt(q.dataset.colid),q.dataset.colname,q.dataset.max?parseFloat(q.dataset.max):null);return}const $=e.target.closest(".btn-scan-col");if($){Bt({classId:u.id,className:u.class_name,initialColumnId:parseInt($.dataset.colid)});return}}),G.addEventListener("click",e=>{var g,n;const d=e.target.closest(".force-cell");if(!d)return;const q=parseInt(d.dataset.sid);(g=document.getElementById("force-grade-popup"))==null||g.remove();const $=((n=H[q])==null?void 0:n.__force)??"",F=document.createElement("div");F.id="force-grade-popup",F.className="fixed inset-0 z-[400] flex items-end sm:items-center justify-center p-4",F.style.background="rgba(0,0,0,0.4)";const o=S.find(r=>r.id===q);F.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div class="bg-rose-50 px-5 py-3 border-b border-rose-100">
              <p class="font-bold text-rose-700 text-sm">บังคับเกรด</p>
              <p class="text-xs text-rose-400">${(o==null?void 0:o.full_name)??""}</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-4 gap-2 mb-3">
                ${Ht.map(r=>`
                  <button class="force-pick py-2.5 rounded-xl text-sm font-bold border transition
                    ${r===$?"bg-rose-500 text-white border-rose-500":"bg-white text-rose-600 border-rose-200 hover:bg-rose-50"}"
                    data-grade="${r}">${r}</button>`).join("")}
                <button class="force-pick py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 col-span-4"
                  data-grade="">ล้างค่า (ใช้เกรดปกติ)</button>
              </div>
            </div>
          </div>`,document.body.appendChild(F),F.addEventListener("click",async r=>{const m=r.target.closest(".force-pick");if(!m&&r.target===F){F.remove();return}if(!m)return;const i=m.dataset.grade;m.disabled=!0;try{await os(o==null?void 0:o.enrollment_id,i)}catch(Z){p("บันทึกบังคับเกรดไม่สำเร็จ: "+(Z.message??""),"error"),m.disabled=!1;return}H[q]||(H[q]={}),H[q].__force=i,o&&(o.special_result=i||null);const{grade:I}=He(q),N=document.getElementById(`ggrade-${q}`);N&&(N.textContent=i||(I>0?I.toFixed(1):"0"));const A=d.querySelector("span");A&&(A.textContent=i||"+",A.className=`text-xs font-bold ${i?"text-rose-600":"text-rose-200"}`),F.remove()})}),G.addEventListener("keydown",e=>{var N,A;const d=e.target.closest(".grade-input");if(!d||!["Tab","Enter","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();const $=[...b.querySelectorAll(".grade-input")],F=[...new Set($.map(Z=>Z.dataset.sid))],g=[...new Set($.map(Z=>Z.dataset.col))].length,n=$.indexOf(d),r=Math.floor(n/g),m=n%g;let i=r,I=m;switch(e.key){case"Enter":case"ArrowDown":i=r<F.length-1?r+1:r;break;case"ArrowUp":i=r>0?r-1:0;break;case"Tab":(N=$[n+(e.shiftKey?-1:1)])==null||N.focus();return;case"ArrowRight":I=m<g-1?m+1:m;break;case"ArrowLeft":I=m>0?m-1:0;break}(A=$[i*g+I])==null||A.focus()}),b.querySelectorAll(".col-edit").forEach(e=>{e.addEventListener("blur",async()=>{const d=parseInt(e.dataset.colid),q=e.textContent.trim();if(!Q(d))try{await Te(d,{assignment_name:q||null});const $=[...V,...s,...D].find(F=>F.id===d);$&&($.assignment_name=q)}catch{p("บันทึกไม่สำเร็จ","error")}}),e.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),e.blur())})}),b.querySelectorAll(".col-sheet-ref").forEach(e=>{e.addEventListener("click",()=>{const d=parseInt(e.dataset.colid);if(Q(d)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}Gt(e,d)})}),b.querySelectorAll(".col-max").forEach(e=>{e.addEventListener("click",()=>{const d=parseInt(e.dataset.colid);if(Q(d)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}zt(e,d)})}),b.querySelectorAll(".btn-add-col").forEach(e=>{e.addEventListener("click",()=>Mt(u,e.dataset.type,()=>je(_,u)))}),(k=b.querySelector(".btn-add-bonus"))==null||k.addEventListener("click",()=>{var q;(q=document.getElementById("quick-add-bonus"))==null||q.remove();const e=document.createElement("div");e.id="quick-add-bonus",e.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/40 p-4",e.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qb-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qb-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qb-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qb-add" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(e),e.querySelector("#qb-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",$=>{$.target===e&&e.remove()});const d=e.querySelector("#qb-name");d.focus(),e.querySelector("#qb-add").addEventListener("click",async()=>{const $=d.value.trim(),F=e.querySelector("#qb-max").value?parseFloat(e.querySelector("#qb-max").value):null;if(!$){p("กรุณากรอกชื่อคอลัมน์","warning");return}const o=e.querySelector("#qb-add");o.disabled=!0,o.textContent="⏳";try{await Ee({class_id:u.id,assignment_name:$,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:F,column_type:"bonus",formula:null,formula_refs:[]}),p(`เพิ่ม "${$}" แล้ว ✅`,"success"),e.remove(),je(_,u)}catch(g){p("เพิ่มไม่สำเร็จ: "+(g.message??""),"error"),o.disabled=!1,o.textContent="เพิ่ม"}})}),b.querySelectorAll(".btn-formula-link").forEach(e=>{e.addEventListener("click",()=>{const d=parseInt(e.dataset.colid),q=[...V,...s].find($=>$.id===d);q&&Pt(q)})}),b.querySelectorAll(".student-name-cell").forEach(e=>{e.addEventListener("click",()=>{const d=S[parseInt(e.dataset.idx)];Ut(d,H[d.id]??{},He(d.id))})})};Ke(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${(M==null?void 0:M.subject_name)??"—"} · ${u.class_name} · ${S.length} คน</p>
        </div>
        <div id="grade-saving" class="hidden bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
        <button id="btn-scan-score" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-sky-200 text-sm text-sky-600 hover:bg-sky-50 transition flex-shrink-0">
          📷 <span class="hidden sm:inline text-xs">สแกนคะแนน</span>
        </button>
        <button id="btn-copy-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-indigo-200 text-sm text-indigo-600 hover:bg-indigo-50 transition flex-shrink-0">
          📋 <span class="hidden sm:inline text-xs">สำเนาคอลัมน์</span>
        </button>
        <button id="btn-manage-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          ⚙️ <span class="hidden sm:inline text-xs">จัดการคอลัมน์</span>
        </button>
        <button id="btn-hide-scores" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          👁 <span class="hidden sm:inline text-xs">ซ่อนคะแนน</span>
        </button>
      </div>
      <div id="grade-togglebar" class="flex border-b border-gray-100 bg-white flex-shrink-0 overflow-x-auto min-h-[42px]"></div>
      <div class="flex-1 overflow-auto" id="grade-grid-wrap"></div>
    </div>`),(C=document.getElementById("btn-manage-cols"))==null||C.addEventListener("click",Vt),(O=document.getElementById("btn-copy-cols"))==null||O.addEventListener("click",()=>_s(u,a)),(j=document.getElementById("btn-scan-score"))==null||j.addEventListener("click",()=>{Bt({classId:u.id,className:u.class_name})});let ct=!1,Pe=null;(E=document.getElementById("btn-hide-scores"))==null||E.addEventListener("click",function(){ct=!ct;const t=document.getElementById("grade-grid-wrap");t&&(ct?(Pe=[],t.querySelectorAll(".grade-input").forEach(l=>{Pe.push({el:l,type:"input",val:l.value}),l.value=""}),t.querySelectorAll('[id^="gmid-"],[id^="gfin-"],[id^="gtotal-"],[id^="ggrade-"],[id^="gkhuna-"],[id^="gread-"],.grade-derived-td').forEach(l=>{Pe.push({el:l,type:"text",val:l.innerHTML}),l.innerHTML="—"}),window._pp5HideScores=!0,this.innerHTML='👁 <span class="hidden sm:inline text-xs">แสดงคะแนน</span>',this.classList.add("bg-amber-50","border-amber-300","text-amber-700"),this.classList.remove("text-gray-500","border-gray-200")):(window._pp5HideScores=!1,Pe&&(Pe.forEach(({el:l,type:b,val:x})=>{b==="input"?l.value=x:l.innerHTML=x}),Pe=null),this.innerHTML='👁 <span class="hidden sm:inline text-xs">ซ่อนคะแนน</span>',this.classList.remove("bg-amber-50","border-amber-300","text-amber-700"),this.classList.add("text-gray-500","border-gray-200")))}),rt(),Le();let $t=null;et=hs(t=>{!ce.some(b=>Number(b.id)===Number(t.columnId))&&Number(t.classId)!==Number(U)||document.getElementById("grade-grid-wrap")&&(clearTimeout($t),$t=setTimeout(()=>je(_,u),120))})}catch(U){p("โหลดข้อมูลไม่สำเร็จ: "+(U.message??""),"error")}}async function _s(_,u){var O;p("กำลังโหลด...","info");const M=(await Promise.all((u??[]).filter(j=>j.id!==_.id).map(async j=>{const E=await be(j.id).catch(()=>[]);return E.length?{...j,cols:E}:null}))).filter(Boolean);if(!M.length){p("ไม่พบห้องอื่นที่มีคอลัมน์คะแนน","info");return}(O=document.getElementById("copy-cols-popup"))==null||O.remove();const C=document.createElement("div");C.id="copy-cols-popup",C.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",C.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
        <div class="text-3xl mb-2">📋</div>
        <h3 class="text-white font-bold text-base">สำเนาคอลัมน์คะแนน</h3>
        <p class="text-indigo-100 text-xs mt-1">เลือกห้องที่ต้องการคัดลอกคอลัมน์จาก</p>
      </div>
      <div class="p-5 space-y-2 max-h-72 overflow-y-auto">
        ${M.map(j=>{var E;return`
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${j.class_name}</p>
            <p class="text-xs text-gray-400">${((E=j.master_subjects)==null?void 0:E.subject_name)??""} · ${j.cols.length} คอลัมน์</p>
          </div>
          <button class="ccp-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            data-src="${j.id}">คัดลอก</button>
        </div>`}).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="ccp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
      </div>
    </div>`,document.body.appendChild(C),C.querySelector("#ccp-close").addEventListener("click",()=>C.remove()),C.querySelectorAll(".ccp-btn").forEach(j=>{j.addEventListener("click",async()=>{var S;const E=M.find(Y=>Y.id===parseInt(j.dataset.src));(S=document.getElementById("ccp-confirm"))==null||S.remove();const U=document.createElement("div");U.id="ccp-confirm",U.className="fixed inset-0 z-[300] flex items-center justify-center p-6",U.style.background="rgba(0,0,0,0.5)",U.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">📋</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการ Mirror</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">
          คอลัมน์ของห้องนี้จะถูกทำให้เหมือน<br/>
          <span class="font-semibold text-indigo-700">${E.class_name}</span><br/>
          <span class="text-xs text-red-500">คอลัมน์ที่ต่างออกไปจะถูกลบหรือเพิ่ม/แก้ไข</span>
        </p>
        <div class="flex gap-3">
          <button id="ccp-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccp-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(U),U.querySelector("#ccp-conf-no").addEventListener("click",()=>U.remove()),U.querySelector("#ccp-conf-yes").addEventListener("click",async()=>{U.remove(),j.disabled=!0,j.textContent="⏳";try{const Y=await be(_.id).catch(()=>[]),se=Object.fromEntries(E.cols.map(L=>[L.assignment_name,L])),ie=Object.fromEntries(Y.map(L=>[L.assignment_name,L]));for(const L of Y)se[L.assignment_name]||await Fe(L.id).catch(()=>{});for(const L of E.cols)ie[L.assignment_name]?await Te(ie[L.assignment_name].id,{assignment_type:L.assignment_type,sheet_column:L.sheet_column??"",max_score:L.max_score,assignment_name:L.assignment_name}).catch(()=>{}):await Ee({class_id:_.id,assignment_name:L.assignment_name,assignment_type:L.assignment_type,sheet_column:L.sheet_column??"",max_score:L.max_score});p(`Mirror จาก ${E.class_name} สำเร็จ ✅`,"success"),C.remove(),je(window._currentGradeTeacher,_)}catch(Y){p("Mirror ไม่สำเร็จ: "+(Y.message??""),"error"),j.disabled=!1,j.textContent="คัดลอก"}})})})}async function ks(_,u,M){var ie;const C=M.filter(L=>L.course_id===_);if(!C.length){p("ยังไม่มีห้องเรียนในคอร์สนี้","warning");return}p("กำลังโหลด...","info");const O=C[0];let j=await be(O.id).catch(()=>[]);const E=()=>j.filter(L=>L.assignment_type==="midterm"||L.assignment_type==="กลางภาค"),U=()=>j.filter(L=>L.assignment_type==="final"||L.assignment_type==="ปลายภาค");(ie=document.getElementById("course-cols-modal"))==null||ie.remove();const S=document.createElement("div");S.id="course-cols-modal",S.className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4";const Y=L=>`
    <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/60">
      <input type="checkbox" class="ccm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-name="${pe(L.assignment_name)}" />
      <span class="flex-1 text-xs text-gray-700 truncate">${L.assignment_name}</span>
      <span class="text-[11px] text-gray-400">/${L.max_score||0}</span>
      <button class="ccm-del text-gray-300 hover:text-red-400 text-lg px-1 rounded hover:bg-red-50 transition" data-name="${pe(L.assignment_name)}">🗑</button>
    </div>`,se=()=>{var a;S.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>
        <div class="px-5 py-4 border-b flex items-start justify-between gap-3 flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ คอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">${u} · sync ${C.length} ห้อง</p>
          </div>
          <button id="ccm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none flex-shrink-0">×</button>
        </div>

        <div class="overflow-auto flex-1 p-5 space-y-4">
          <!-- bulk bar -->
          <div id="ccm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="ccm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="ccm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>

          <div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค <span class="font-normal text-gray-400">(${E().length})</span></h4>
            <div class="space-y-1.5">${E().map(Y).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition" data-type="กลางภาค">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค <span class="font-normal text-gray-400">(${U().length})</span></h4>
            <div class="space-y-1.5">${U().map(Y).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition" data-type="ปลายภาค">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`;const L=(c,w)=>{var P;(P=document.getElementById("ccm-confirm"))==null||P.remove();const f=document.createElement("div");f.id="ccm-confirm",f.className="fixed inset-0 z-[300] flex items-center justify-center p-6",f.style.background="rgba(0,0,0,0.5)",f.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">🗑️</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">${c}</p>
        <div class="flex gap-3">
          <button id="ccm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบเลย</button>
        </div>
      </div>`,document.body.appendChild(f),f.querySelector("#ccm-conf-no").addEventListener("click",()=>f.remove()),f.querySelector("#ccm-conf-yes").addEventListener("click",()=>{f.remove(),w()})},T=async c=>{for(const w of C){const f=await be(w.id).catch(()=>[]);for(const P of c){const h=f.find(W=>W.assignment_name===P);h&&await Fe(h.id).catch(()=>{})}}j=await be(O.id).catch(()=>[]),p(`ลบสำเร็จ — sync ทุก ${C.length} ห้องแล้ว ✅`,"success"),se()},B=()=>{const c=[...S.querySelectorAll(".ccm-cb:checked")],w=S.querySelector("#ccm-bulk-bar");if(w){w.classList.toggle("hidden",!c.length);const f=w.querySelector("#ccm-bulk-count");f&&(f.textContent=`เลือก ${c.length} รายการ`)}};S.querySelector("#ccm-close").addEventListener("click",()=>S.remove()),S.querySelectorAll(".ccm-cb").forEach(c=>c.addEventListener("change",B)),(a=S.querySelector("#ccm-bulk-del"))==null||a.addEventListener("click",()=>{const w=[...S.querySelectorAll(".ccm-cb:checked")].map(f=>f.dataset.name);L(`ลบ ${w.length} คอลัมน์จากทุกห้อง?<br/><span class="font-semibold text-sm">${w.join(", ")}</span>`,()=>T(w))}),S.querySelectorAll(".ccm-del").forEach(c=>{c.addEventListener("click",()=>{L(`ลบ <span class="font-semibold">"${c.dataset.name}"</span> จากทุก ${C.length} ห้อง?`,()=>T([c.dataset.name]))})}),S.querySelectorAll(".ccm-add").forEach(c=>{c.addEventListener("click",()=>{var W,te;const w=c.dataset.type;(W=document.getElementById("add-col-modal"))==null||W.remove();const f=!!(O!=null&&O.google_sheet_id),P=w==="ปลายภาค"?"purple":"blue",h=document.createElement("div");h.id="add-col-modal",h.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",h.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${w}</h3>
          <p class="text-xs text-gray-400 mb-4">จะเพิ่มใน <b>ทุก ${C.length} ห้อง</b> ของ ${u}</p>
          <div class="space-y-3">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
              <input id="acol2-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${P}-400"/></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
                <input id="acol2-max" type="number" min="1" value="20"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${P}-400"/></div>
              ${f?`<div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
                <input id="acol2-sheet" type="text" placeholder="EH"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${P}-400"/></div>`:'<input id="acol2-sheet" type="hidden" value=""/>'}
            </div>
            <div id="acol2-msg" class="hidden text-xs text-red-500"></div>
            <div class="flex gap-3 pt-1">
              <button id="acol2-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="acol2-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มทุกห้อง</button>
            </div>
          </div>
        </div>`,document.body.appendChild(h),(te=h.querySelector("#acol2-sheet"))==null||te.addEventListener("input",ne=>{ne.target.value=ne.target.value.toUpperCase()}),h.querySelector("#acol2-cancel").addEventListener("click",()=>h.remove()),h.querySelector("#acol2-save").addEventListener("click",async()=>{var fe;const ne=h.querySelector("#acol2-name").value.trim(),ue=parseFloat(h.querySelector("#acol2-max").value)||20,Se=(((fe=h.querySelector("#acol2-sheet"))==null?void 0:fe.value)??"").trim().toUpperCase()||null,de=h.querySelector("#acol2-msg");if(!ne){de.textContent="กรุณาระบุชื่องาน",de.classList.remove("hidden");return}const ge=h.querySelector("#acol2-save");ge.disabled=!0,ge.textContent="⏳ กำลังเพิ่ม...";try{for(const Ce of C)(await be(Ce.id).catch(()=>[])).some(Re=>Re.assignment_name===ne)||await Ee({class_id:Ce.id,assignment_name:ne,assignment_type:w,sheet_column:Se??"",max_score:ue});h.remove(),p(`เพิ่ม "${ne}" ใน ${C.length} ห้องแล้ว ✅`,"success"),j=await be(O.id).catch(()=>[]),se()}catch(Ce){de.textContent="เกิดข้อผิดพลาด: "+(Ce.message??""),de.classList.remove("hidden"),ge.disabled=!1,ge.textContent="เพิ่มทุกห้อง"}})})})};document.body.appendChild(S),se()}function Mt(_,u,M){var U,S;(U=document.getElementById("add-col-modal"))==null||U.remove();const C=u==="final"?"ปลายภาค":"กลางภาค",O=u==="final"?"purple":"blue",j=!!(_!=null&&_.google_sheet_id),E=document.createElement("div");E.id="add-col-modal",E.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",E.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${C}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${C}</b></p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${O}-400"/>
        <button type="button" id="acol-quick-adj" class="mt-1 text-xs text-teal-600 hover:text-teal-800 underline">⚡ ปรับคะแนนเก็บ (คะแนนเต็มกำหนดเอง)</button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${O}-400"/>
        </div>
        ${j?`
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${O}-400"/>
        </div>`:'<input id="acol-sheet" type="hidden" value=""/>'}
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`,document.body.appendChild(E),(S=E.querySelector("#acol-sheet"))==null||S.addEventListener("input",Y=>{Y.target.value=Y.target.value.toUpperCase()}),E.querySelector("#acol-quick-adj").addEventListener("click",()=>{E.querySelector("#acol-name").value=`ปรับคะแนนเก็บ (${C})`;const Y=E.querySelector("#acol-max");Y.focus(),Y.select()}),E.querySelector("#acol-cancel").addEventListener("click",()=>E.remove()),E.querySelector("#acol-save").addEventListener("click",async()=>{var B;const Y=E.querySelector("#acol-name").value.trim(),se=parseFloat(E.querySelector("#acol-max").value)||20,ie=(((B=E.querySelector("#acol-sheet"))==null?void 0:B.value)??"").trim().toUpperCase()||null,L=E.querySelector("#acol-msg");if(!Y){L.textContent="กรุณาระบุชื่องาน",L.classList.remove("hidden");return}const T=E.querySelector("#acol-save");T.disabled=!0,T.textContent="กำลังเพิ่ม...";try{await Ee({class_id:_.id,assignment_name:Y,max_score:se,sheet_column:ie??"",assignment_type:u}),E.remove(),p(`เพิ่มคอลัมน์ "${Y}" แล้ว`,"success"),M()}catch(a){L.textContent="เกิดข้อผิดพลาด: "+(a.message??""),L.classList.remove("hidden"),T.disabled=!1,T.textContent="เพิ่มคอลัมน์"}})}async function st(_){if(ft("requests"),yt("คำร้องนักเรียน"),!_){Ke('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">🔔</p><p>กรุณาเข้าสู่ระบบ</p></div>');return}Ke(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const u=await rs(_.id).catch(()=>[]),M=[{key:"pending",label:"รอดำเนินการ",cls:"text-amber-600"},{key:"approved",label:"อนุมัติแล้ว",cls:"text-emerald-600"},{key:"attended",label:"มาสอบแล้ว",cls:"text-blue-600"},{key:"absent",label:"ขาดสอบ/ผิดนัด",cls:"text-red-600"},{key:"rejected",label:"ปฏิเสธ",cls:"text-red-500"},{key:"all",label:"ทั้งหมด",cls:"text-gray-600"}];let C="pending",O=null,j=null;const E=(a,c)=>c==="all"?!0:c==="attended"?a.status==="approved"&&a.exam_attended===!0:c==="absent"?a.status==="approved"&&a.exam_attended===!1:a.status===c,U=a=>u.filter(c=>E(c,a)).length,S=a=>{const c=new Map;return a.forEach(w=>{w.request_type&&c.set(w.request_type,(c.get(w.request_type)||0)+1)}),[...c.entries()].map(([w,f])=>({type:w,count:f})).sort((w,f)=>f.count-w.count)},Y=a=>{const c=new Map;return a.forEach(w=>{const f=w.class_score_columns;f&&(c.has(f.id)||c.set(f.id,{id:f.id,name:f.assignment_name,count:0}),c.get(f.id).count++)}),[...c.values()].sort((w,f)=>f.count-w.count)},se=a=>{if(!a)return"—";const c=new Date(a);return`${c.getDate()}/${c.getMonth()+1}/${c.getFullYear()+543}`},ie=a=>{var ne;const c=a.students,w=a.classes,f=a.class_score_columns,P=a.status==="approved"&&a.exam_attended==null,h=a.status==="approved"&&a.exam_attended===!0,W=a.status==="pending"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">⏳ รอดำเนินการ</span>':a.status==="approved"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ อนุมัติ</span>':'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">✕ ปฏิเสธ</span>',te=a.exam_attended===!0?`<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">📝 มาสอบแล้ว${a.exam_score!=null?" · <b>"+a.exam_score+"</b> คะแนน":" (ยังไม่ได้ใส่คะแนน)"}</span>`:a.exam_attended===!1?'<span class="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">❌ ขาดสอบ/ผิดนัด</span>':"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4" id="req-card-${a.id}">
      <!-- Header -->
      <div class="flex items-start gap-3 mb-3">
        <div class="w-9 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-white/40 shadow-sm bg-gradient-to-tr from-indigo-300 to-purple-300
                    flex items-center justify-center text-white text-sm font-bold">
          ${c!=null&&c.image_url?`<img src="${c.image_url}" class="w-full h-full object-cover"/>`:((c==null?void 0:c.full_name)??"น").charAt(0)}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${(c==null?void 0:c.full_name)??"—"}</p>
          <p class="text-xs text-gray-400">${(c==null?void 0:c.student_code)??""} · ${(c==null?void 0:c.main_room)??""}</p>
        </div>
        ${W}
      </div>
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-600 mb-3">
        <div class="flex gap-2"><span class="text-gray-400 w-16">วิชา</span><span class="font-medium text-gray-800">${((ne=w==null?void 0:w.master_subjects)==null?void 0:ne.subject_name)??"—"} (${(w==null?void 0:w.class_name)??""})</span></div>
        <div class="flex gap-2"><span class="text-gray-400 w-16">ประเภท</span><span>${a.request_type}</span></div>
        ${f?`<div class="flex gap-2"><span class="text-gray-400 w-16">หัวข้อ</span><span>${f.assignment_name} (เต็ม ${f.max_score})</span></div>`:""}
        <div class="flex gap-2"><span class="text-gray-400 w-16">วันที่</span><span>${se(a.requested_date)}${a.requested_period_no?" · คาบ "+a.requested_period_no:""}</span></div>
        ${a.reason?`<div class="flex gap-2"><span class="text-gray-400 w-16">เหตุผล</span><span>${a.reason}</span></div>`:""}
        ${a.teacher_comment?`<div class="flex gap-2"><span class="text-gray-400 w-16">หมายเหตุ</span><span class="${a.status==="rejected"?"text-red-600":"text-emerald-600"} font-medium">${a.teacher_comment}</span></div>`:""}
        ${te?`<div class="mt-1">${te}</div>`:""}
      </div>
      <!-- Actions -->
      ${a.status==="pending"?`
      <div class="flex gap-2">
        <button onclick="window._approveRequest(${a.id})"
          class="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition">
          ✅ อนุมัติ
        </button>
        <button onclick="window._rejectRequest(${a.id})"
          class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition">
          ✕ ปฏิเสธ
        </button>
      </div>`:""}
      ${P?`
      <div class="border-t border-gray-100 pt-3">
        <p class="text-xs text-gray-500 mb-2 font-medium">📋 บันทึกผลการสอบ</p>
        <div class="flex gap-2">
          <button onclick="window._markAttended(${a.id})"
            class="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
            📝 มาสอบแล้ว + ใส่คะแนน
          </button>
          <button onclick="window._markAbsent(${a.id}, ${(c==null?void 0:c.id)??"null"})"
            class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 text-xs font-semibold hover:bg-red-100 transition">
            ❌ ขาดสอบ/ผิดนัด
          </button>
        </div>
      </div>`:""}
      ${h?`
      <div class="border-t border-gray-100 pt-3 flex items-center justify-between">
        <p class="text-xs text-blue-600 font-medium">📝 มาสอบแล้ว${a.exam_score!=null?" · คะแนน "+a.exam_score:""}</p>
        <button onclick="window._markAttended(${a.id})"
          class="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition font-medium">
          ✏️ แก้ไขคะแนน
        </button>
      </div>`:""}
    </div>`},L=()=>{const a=u.filter(h=>E(h,C)),c=S(a);O&&!c.some(h=>h.type===O)&&(O=null);const w=O?a.filter(h=>h.request_type===O):a,f=Y(w);j&&!f.some(h=>h.id===j)&&(j=null);const P=j?w.filter(h=>{var W;return((W=h.class_score_columns)==null?void 0:W.id)===j}):w;document.getElementById("req-type-filter").innerHTML=c.length>1?`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${O?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-purple-600 text-white border-purple-600"}"
        data-type="">ทุกประเภทการสอบ</button>
      ${c.map(h=>`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${O===h.type?"bg-purple-600 text-white border-purple-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-type="${h.type}">${h.type} (${h.count})</button>`).join("")}`:"",document.querySelectorAll(".req-type-tab").forEach(h=>{h.addEventListener("click",()=>{O=h.dataset.type||null,L()})}),document.getElementById("req-col-filter").innerHTML=f.length>1?`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${j?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-indigo-600 text-white border-indigo-600"}"
        data-col="">ทุกช่องคะแนน</button>
      ${f.map(h=>`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${j===h.id?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-col="${h.id}">${h.name} (${h.count})</button>`).join("")}`:"",document.querySelectorAll(".req-col-tab").forEach(h=>{h.addEventListener("click",()=>{j=h.dataset.col?Number(h.dataset.col):null,L()})}),document.getElementById("req-content").innerHTML=P.length?`<div class="space-y-3">${P.map(ie).join("")}</div>`:`<div class="text-center py-16 text-gray-300">
          <p class="text-4xl mb-3">📭</p>
          <p class="text-sm">ไม่มีคำร้อง${C!=="all"?"ในสถานะนี้":""}${O?"ในประเภทนี้":""}${j?"ในช่องคะแนนนี้":""}</p>
        </div>`,document.querySelectorAll(".req-tab").forEach(h=>{const W=h.dataset.filter===C;h.className=`req-tab flex-1 py-2 text-xs font-medium rounded-lg transition
        ${W?"bg-white shadow text-indigo-700":"text-gray-500 hover:text-gray-700"}`})};Ke(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs text-gray-400">${u.length} รายการ</span>
    </div>
    <!-- Filter tabs -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-100 rounded-xl p-1 mb-4">
      ${M.map(a=>`
      <button class="req-tab flex-1 py-2 text-xs font-medium rounded-lg transition text-gray-500 hover:text-gray-700"
        data-filter="${a.key}">
        ${a.label}${U(a.key)>0||a.key==="all"?` (${U(a.key)})`:""}
      </button>`).join("")}
    </div>
    <!-- Filter by ประเภทการสอบ -->
    <div id="req-type-filter" class="flex flex-wrap gap-1.5 mb-3"></div>
    <!-- Filter by ช่องคะแนน -->
    <div id="req-col-filter" class="flex flex-wrap gap-1.5 mb-4"></div>
    <div id="req-content"></div>
  </div>`),document.querySelectorAll(".req-tab").forEach(a=>{a.addEventListener("click",()=>{C=a.dataset.filter,L()})}),L();const T=({title:a,body:c,confirmLabel:w,confirmCls:f="bg-emerald-600 hover:bg-emerald-700",onConfirm:P})=>{var W;(W=document.getElementById("req-modal"))==null||W.remove();const h=document.createElement("div");h.id="req-modal",h.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",h.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
        <div class="px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">${a}</h3>
        </div>
        <div class="px-5 py-4">${c}</div>
        <div class="px-5 pb-5 flex gap-2">
          <button id="req-modal-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="req-modal-confirm"
            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold ${f}">
            ${w}
          </button>
        </div>
      </div>`,document.body.appendChild(h),h.querySelector("#req-modal-cancel").addEventListener("click",()=>h.remove()),h.addEventListener("click",te=>{te.target===h&&h.remove()}),h.querySelector("#req-modal-confirm").addEventListener("click",()=>{P(h)})},B=async(a,c,w)=>{var P,h,W;const f=(P=a==null?void 0:a.students)==null?void 0:P.profile_id;if(f)try{const te=((W=(h=a==null?void 0:a.classes)==null?void 0:h.master_subjects)==null?void 0:W.subject_name)??"วิชา";await ds.functions.invoke("send-push",{body:{title:`📋 คำร้องขอสอบ: ${c}`,body:`${te}${w?" — "+w:""}`,url:"student.html",profileIds:[f]}})}catch{}};window._approveRequest=a=>{T({title:"✅ อนุมัติคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">หมายเหตุถึงนักเรียน <span class="text-gray-400">(ไม่บังคับ)</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="เช่น นัดสอบวันอังคาร คาบ 3 ห้องครู..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"></textarea>`,confirmLabel:"ยืนยันอนุมัติ",onConfirm:async c=>{const w=c.querySelector("#req-modal-comment").value.trim()||null;c.remove();try{await Lt(a,{status:"approved",teacher_comment:w}),p("อนุมัติคำร้องแล้ว ✅","success");const f=u.find(P=>P.id===a);f&&B(f,"อนุมัติแล้ว ✅",w),st(_)}catch(f){p("ไม่สำเร็จ: "+(f.message??""),"error")}}})},window._rejectRequest=a=>{T({title:"✕ ปฏิเสธคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">เหตุผลที่ปฏิเสธ <span class="text-red-500">*</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="กรุณาระบุเหตุผล..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"></textarea>
             <p class="text-xs text-red-400 mt-1">บังคับกรอกทุกครั้งที่ปฏิเสธ</p>`,confirmLabel:"ยืนยันปฏิเสธ",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async c=>{const w=c.querySelector("#req-modal-comment").value.trim();if(!w){p("กรุณาระบุเหตุผลก่อนปฏิเสธ","warning");return}c.remove();try{await Lt(a,{status:"rejected",teacher_comment:w}),p("บันทึกการปฏิเสธแล้ว","success");const f=u.find(P=>P.id===a);f&&B(f,"ถูกปฏิเสธ ✕",w),st(_)}catch(f){p("ไม่สำเร็จ: "+(f.message??""),"error")}}})},window._markAttended=async a=>{var ce,Re,Q;const c=u.find(J=>Number(J.id)===Number(a)),w=(ce=c==null?void 0:c.students)==null?void 0:ce.id,f=(Re=c==null?void 0:c.classes)==null?void 0:Re.id,P=c==null?void 0:c.exam_score,h=P!=null;if(!w||!f){p("ไม่พบข้อมูลนักเรียนหรือห้องเรียนของคำร้องนี้","error");return}const W=String((c==null?void 0:c.request_type)??"").includes("ปรับคะแนน");let te;try{te=(await be(f)).filter(J=>["regular","override"].includes(J.column_type??"regular"))}catch(J){p("โหลดคอลัมน์คะแนนไม่สำเร็จ: "+(J.message??""),"error");return}if(!te.length){p("วิชานี้ยังไม่มีคอลัมน์คะแนนที่สามารถบันทึกได้","warning");return}const ne=Number((Q=c==null?void 0:c.class_score_columns)==null?void 0:Q.id);if(!W){const J=te.find(D=>Number(D.id)===ne);J&&(te=[J])}const ue=te.find(J=>Number(J.id)===ne)??te[0],Se=te.map(J=>`
      <option value="${J.id}" data-max="${Number(J.max_score??100)}"
        ${Number(J.id)===Number(ue.id)?"selected":""}>
        ${J.column_type==="override"?"🔄 ปรับคะแนน — ":""}${pe(J.assignment_name)} (เต็ม ${Number(J.max_score??100)})
      </option>`).join("");T({title:h?"✏️ แก้ไขคะแนน":"📝 บันทึกผลการสอบ — มาสอบ",body:`<label class="block text-sm text-gray-600 mb-1.5">บันทึกลงคอลัมน์ <span class="text-red-500">*</span></label>
             <select id="req-modal-column" ${W?"":"disabled"}
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4">
               ${Se}
             </select>
             ${W?'<p class="text-xs text-blue-600 -mt-2 mb-4">เลือกคอลัมน์ที่จะรับคะแนนสอบปรับคะแนนครั้งนี้</p>':""}
             <label class="block text-sm text-gray-600 mb-1.5">คะแนนที่สอบได้ <span class="text-red-500">*</span> <span id="req-modal-max-label" class="text-gray-400">(เต็ม ${Number(ue.max_score??100)})</span></label>
             <input id="req-modal-score" type="number" min="0" max="${Number(ue.max_score??100)}" step="0.5"
               value="${h?P:""}"
               placeholder="0 – ${Number(ue.max_score??100)}"
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300" />`,confirmLabel:h?"บันทึกการแก้ไข":"บันทึกคะแนน",confirmCls:"bg-blue-600 hover:bg-blue-700",onConfirm:async J=>{const D=J.querySelector("#req-modal-column"),ve=Number(D.value),me=D.options[D.selectedIndex],Ne=Number((me==null?void 0:me.dataset.max)??100),Be=J.querySelector("#req-modal-score").value,V=parseFloat(Be);if(isNaN(V)||V<0||V>Ne){p(`คะแนนต้องอยู่ระหว่าง 0 – ${Ne}`,"warning");return}J.remove();try{const s=await It(a,{exam_attended:!0,exam_score:V,studentId:w,assignmentId:ve});ys({classId:f,columnId:ve,studentId:w,score:V}),p(s!=null&&s.linkedColumnId?"บันทึกคะแนนปรับและอัปเดตคอลัมน์หลักแล้ว ✅":h?"แก้ไขคะแนนแล้ว ✅":"บันทึกผลสอบและคะแนนแล้ว ✅","success"),st(_)}catch(s){p("ไม่สำเร็จ: "+(s.message??""),"error")}}});const de=document.getElementById("req-modal"),ge=de==null?void 0:de.querySelector("#req-modal-column"),fe=de==null?void 0:de.querySelector("#req-modal-score"),Ce=de==null?void 0:de.querySelector("#req-modal-max-label");ge==null||ge.addEventListener("change",()=>{const J=ge.options[ge.selectedIndex],D=Number((J==null?void 0:J.dataset.max)??100);fe.max=String(D),fe.placeholder=`0 – ${D}`,Ce.textContent=`(เต็ม ${D})`,fe.value!==""&&Number(fe.value)>D&&(fe.value="")})},window._markAbsent=(a,c)=>{const w=u.filter(f=>{var P;return((P=f.students)==null?void 0:P.id)===c&&f.exam_attended===!1}).length;T({title:"❌ ขาดสอบ / ผิดนัด",body:`<p class="text-sm text-gray-600 mb-2">ยืนยันว่านักเรียนไม่มาสอบตามนัด?</p>
             ${w>=1?`<div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                    ⚠️ นักเรียนผิดนัดมาแล้ว <b>${w}</b> ครั้ง
                    ${w+1>=2?"<br/>หากยืนยัน จะครบ 2 ครั้ง — <b>นักเรียนจะไม่สามารถยื่นคำร้องได้อีก</b>":""}
                  </div>`:""}`,confirmLabel:"ยืนยัน — ขาดสอบ/ผิดนัด",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async f=>{f.remove();try{await It(a,{exam_attended:!1,exam_score:null}),p("บันทึกว่าขาดสอบ/ผิดนัดแล้ว","success"),st(_)}catch(P){p("ไม่สำเร็จ: "+(P.message??""),"error")}}})}}const js=Object.freeze(Object.defineProperty({__proto__:null,_openCourseColsModal:ks,renderGrades:vs,renderGradesGrid:je,renderRequests:st},Symbol.toStringTag,{value:"Module"}));export{ks as _,vs as a,je as b,st as c,Rt as d,tt as e,ys as p,Bs as r,js as t};
