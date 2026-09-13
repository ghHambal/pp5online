import{getSystemConfig as ft,getLifeSkillColumns as Nt,getScoreColumns as ge,createScoreColumn as Le,updateColumnSortOrders as Ft,updateScoreColumn as Ge,getMyClasses as Ht,setColumnAutoAttendanceSync as Gt,deleteScoreColumn as Ve,getClassStudents as nn,getStudentScores as dt,getSheetColumnOptions as ut,fillLifeSkillScoresForClass as sn,fillPrayerScoresForReligionClass as on,syncAutoAttendanceScoreColumns as rn,getReadingScoreColumns as an,getReadingScores as ln,detectAssignmentKind as dn,exportClassGradesToGradeOnline as cn,saveStudentScore as xt,applyScoreOverride as mn,updateClassStudentSpecialResult as un,getTeacherExamRequests as xn,reviewExamRequest as At,updateExamResult as Tt}from"./api-Cf_Y4s92.js";import{g as pn,K as bn}from"./regrade-api-C8s-TuM0.js";import{a as p,g as me}from"./ui-FQqAmrdo.js";import{s as gn}from"./supabase-BV-W2lsh.js";import{openScoreScanner as Rt}from"./score-qr-scanner-eQmyTC7-.js";import{setActiveNav as vt,setTitle as ht,setContent as Ze,applyReadingGradesFromConfig as fn,_readingGrade as yn,_htmlEsc as de}from"./teacher-views-utils-BWmONzsh.js";const pt="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",it="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function vn(y){document.getElementById("main-content").innerHTML=y}function hn(y){document.getElementById("page-title").textContent=y}function wn(y){document.querySelectorAll("[data-nav]").forEach(i=>{const $=i.dataset.nav===y;i.classList.toggle("bg-emerald-800",$),i.classList.toggle("text-white",$),i.classList.toggle("text-emerald-200",!$)})}const bt=["ระหว่างเรียน","กลางภาค","ปลายภาค","คะแนนพิเศษ"],$n={ระหว่างเรียน:"bg-blue-50 text-blue-700",กลางภาค:"bg-amber-50 text-amber-700",ปลายภาค:"bg-red-50 text-red-700",คะแนนพิเศษ:"bg-purple-50 text-purple-700"},_n=["คะแนนมาเรียน","คะแนนละหมาด"];function nt(y,i={}){if(!(y!=null&&y.trim()))return null;let $=0;const _=y.replace(/\s+/g,"").toUpperCase(),R=()=>_[$]??"",A=()=>_[$++],q=z=>{throw new Error(z)},P=()=>{let z=L();const T=_.slice($,$+2),r=_[$];let u="";if([">=","<=","!=","=="].includes(T)?(u=T,$+=2):[">","<"].includes(r)&&(u=r,$++),!u)return z;const k=L();return{">":v=>v>k?1:0,"<":v=>v<k?1:0,">=":v=>v>=k?1:0,"<=":v=>v<=k?1:0,"==":v=>v===k?1:0,"!=":v=>v!==k?1:0}[u](z)},L=()=>{let z=Q();for(;R()==="+"||R()==="-";){const T=A(),r=Q();z=T==="+"?z+r:z-r}return z},Q=()=>{let z=se();for(;R()==="*"||R()==="/";){const T=A(),r=se();z=T==="*"?z*r:r===0?0:z/r}return z},se=()=>R()==="-"?(A(),-j()):(R()==="+"&&A(),j()),ie=()=>{const z=[];if(R()!==")")for(z.push(P());R()===",";)A(),z.push(P());return A()!==")"&&q("Expected )"),z},j=()=>{if(/[0-9.]/.test(R())){let z="";for(;/[0-9.]/.test(R());)z+=A();return parseFloat(z)}if(R()==="("){A();const z=P();return A()!==")"&&q("Expected )"),z}if(/[A-Z_]/.test(R())){let z="";for(;/[A-Z0-9_]/.test(R());)z+=A();if(R()==="("){A();const T=ie(),r=T.length;switch(z){case"MIN":return r?Math.min(...T):0;case"MAX":return r?Math.max(...T):0;case"AVG":case"AVERAGE":return r?T.reduce((u,k)=>u+k,0)/r:0;case"SUM":return T.reduce((u,k)=>u+k,0);case"ROUND":return Math.round((T[0]??0)*10**(T[1]??0))/10**(T[1]??0);case"FLOOR":return Math.floor(T[0]??0);case"CEIL":return Math.ceil(T[0]??0);case"ABS":return Math.abs(T[0]??0);case"SQRT":return Math.sqrt(Math.max(0,T[0]??0));case"POW":return Math.pow(T[0]??0,T[1]??1);case"IF":return T[0]?T[1]??0:T[2]??0;case"CLAMP":return Math.min(Math.max(T[0]??0,T[1]??0),T[2]??0);default:q(`Unknown function: ${z}`)}}return Number(i[z]??0)}q(`Unexpected: "${R()}"`)};try{const z=P();return $<_.length&&q(`Unexpected "${_[$]}"`),isNaN(z)?null:z}catch{return null}}function zt(y){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return y.map(($,_)=>({...$,var:i[_]??`V${_}`}))}function gt(y,i){var _;(_=document.getElementById("sc-confirm-popup"))==null||_.remove();const $=document.createElement("div");$.id="sc-confirm-popup",$.className="fixed inset-0 z-[200] flex items-center justify-center p-6",$.style.background="rgba(0,0,0,0.45)",$.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">${y}</p>
      <div class="flex gap-3">
        <button id="sc-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
        <button id="sc-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold">ลบเลย</button>
      </div>
    </div>`,document.body.appendChild($),$.querySelector("#sc-conf-no").addEventListener("click",()=>$.remove()),$.querySelector("#sc-conf-yes").addEventListener("click",()=>{$.remove(),i()})}async function kn(y,i,$){var _;if(!(!(y!=null&&y.id)||!($!=null&&$.course_id)))try{const A=(await Ht(y.id).catch(()=>[])).filter(L=>L.id!==i&&L.course_id===$.course_id);if(!A.length)return;const q=(await Promise.all(A.map(async L=>{const Q=await ge(L.id).catch(()=>[]);return Q.length?{...L,cols:Q}:null}))).filter(Boolean);if(!q.length)return;(_=document.getElementById("sc-same-subj-popup"))==null||_.remove();const P=document.createElement("div");P.id="sc-same-subj-popup",P.className="fixed inset-0 z-[190] flex items-center justify-center p-6",P.style.background="rgba(0,0,0,0.45)",P.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
          <p class="text-indigo-100 text-xs mt-1">ต้องการคัดลอกคอลัมน์คะแนนจากห้องที่มีอยู่แล้วไหม?</p>
        </div>
        <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
          ${q.map(L=>`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${L.class_name}</p>
              <p class="text-xs text-gray-400">${L.cols.length} คอลัมน์</p>
            </div>
            <button class="copy-cols-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold" data-src="${L.id}">คัดลอก</button>
          </div>`).join("")}
        </div>
        <div class="px-5 pb-5">
          <button id="sc-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(P),P.querySelector("#sc-ssp-close").addEventListener("click",()=>P.remove()),P.querySelectorAll(".copy-cols-btn").forEach(L=>{L.addEventListener("click",async()=>{var ie;const Q=parseInt(L.dataset.src),se=q.find(j=>j.id===Q);L.disabled=!0,L.textContent="⏳";try{const j=await ge(i).catch(()=>[]),z=new Set(j.map(r=>r.assignment_name));let T=0;for(const r of se.cols)z.has(r.assignment_name)||(await Le({class_id:i,assignment_name:r.assignment_name,assignment_type:r.assignment_type,sheet_column:r.sheet_column??"",max_score:r.max_score,column_type:r.column_type??"regular",formula:r.formula??null,formula_refs:r.formula_refs??[]}),T++);p(`คัดลอก ${T} คอลัมน์จาก ${se.class_name} ✅`,"success"),P.remove(),(ie=window._scReload)==null||ie.call(window)}catch(j){p("คัดลอกไม่สำเร็จ: "+me(j),"error"),L.disabled=!1,L.textContent="คัดลอก"}})})}catch{}}async function Pn(y,i,$,_=null){var ie,j,z;wn("my-classes"),hn(`คอลัมน์คะแนน — ${$}`);const R=((_==null?void 0:_.skill_group)??((ie=_==null?void 0:_.master_subjects)==null?void 0:ie.skill_group)??"")==="ชีวิต",A=["AGM","AGMVOC"].includes((j=_==null?void 0:_.master_subjects)==null?void 0:j.subject_group),q=!!(_!=null&&_.google_sheet_id);let P=new Set,L=new Set,Q=!1;const se=async()=>{var ve,ce,Re,Me,V,Y,Ne;const T=await ge(i),r=await ft().catch(()=>({})),u=parseInt(r.academicYear??2568),k=parseInt(r.semester??1),v=R?(await Nt(u,k,"สามัญ").catch(()=>[])).slice(0,3).map(c=>c.name):A?_n:[];P=new Set;for(const c of v){const w=T.filter(U=>U.assignment_name===c);w.length>0&&P.add(w[0].id)}window._scoreColCache=Object.fromEntries(T.map(c=>[c.id,c])),L=new Set;const K=T.filter(c=>(c.column_type??"regular")==="regular"),h=T.filter(c=>c.column_type==="bonus"),D=T.filter(c=>c.column_type==="derived"),te=T.filter(c=>c.column_type==="override"),oe=zt(h),pe=K.reduce((c,w)=>c+(Number(w.max_score)||0),0),Ie=D.reduce((c,w)=>c+(Number(w.max_score)||0),0),le=pe+Ie,fe=(c,w="",U=[])=>{var Oe;const M=P.has(c.id),ne=c.column_type??"regular",O=U.findIndex(ke=>ke.id===c.id),ae=!M&&O>0&&!P.has((Oe=U[O-1])==null?void 0:Oe.id),xe=!M&&O>=0&&O<U.length-1;return`
      <tr class="${M?"bg-emerald-50/35":"hover:bg-gray-50"}">
        <td class="px-3 py-2.5 text-center">
          ${M?'<span class="text-emerald-500 text-xs">🔒</span>':`<input type="checkbox" class="sc-row-cb w-4 h-4 rounded accent-red-500" data-id="${c.id}" />`}
        </td>
        <td class="px-3 py-2.5 text-center whitespace-nowrap">
          <button onclick="window._moveScoreCol(${c.id},'up')" ${ae?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${ae?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▲</button>
          <button onclick="window._moveScoreCol(${c.id},'down')" ${xe?"":"disabled"}
            class="px-1.5 py-0.5 rounded text-xs ${xe?"text-gray-500 hover:bg-gray-100":"text-gray-200 cursor-default"}">▼</button>
        </td>
        <td class="px-4 py-2.5 font-medium text-gray-800">
          ${c.assignment_name}
          ${ne==="derived"&&c.formula?`<span class="ml-1 text-[10px] text-indigo-400 font-mono">= ${c.formula}</span>`:""}
          ${w}
        </td>
        ${q?`<td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${c.sheet_column??""}</td>`:""}
        <td class="px-4 py-2.5 text-center text-gray-600">${c.max_score??"—"}</td>
        <td class="px-4 py-2.5 text-right whitespace-nowrap">
          ${M?'<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>':`${ne==="regular"?`
               <button onclick="window._toggleAutoSync(${c.id})"
                 title="${c.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}"
                 class="text-xs font-medium mr-2 px-2 py-1 rounded-lg ${c.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-400 hover:bg-gray-100"}">
                 ${c.auto_attendance_sync?"🔄 ดึงจากเช็คชื่ออัตโนมัติ":"🔄 ดึงจากเช็คชื่อ"}
               </button>`:""}
               <button onclick="window._editScoreCol(${c.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
               <button onclick="window._deleteScoreCol(${c.id})" class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
        </td>
      </tr>`},ye=(c,w=null)=>c.length?`<table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
          <tr>
            <th class="px-3 py-2 text-center w-8">เลือก</th>
            <th class="px-3 py-2 text-center w-14">เรียง</th>
            <th class="px-4 py-2 text-left">ชื่อ</th>
            ${q?'<th class="px-4 py-2 text-center">Sheet Col</th>':""}
            <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
            <th class="px-4 py-2 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${c.map(U=>fe(U,(w==null?void 0:w(U))??"",c)).join("")}
        </tbody>
      </table>`:'<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์</p>',Be=bt.map(c=>({type:c,items:K.filter(w=>w.assignment_type===c)}));document.getElementById("sc-content").innerHTML=`
      <!-- Summary -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400">รวมคะแนน (นับใน 100)</p>
            <p class="text-2xl font-bold ${le>100?"text-red-600":"text-indigo-700"}">${le} คะแนน
              ${le>100?'<span class="text-sm font-normal text-red-500 ml-1">⚠️ เกิน 100</span>':""}
            </p>
          </div>
          <div class="text-xs text-gray-400 text-right">
            <p>คอลัมน์หลัก: ${K.length} | อ้างอิง: ${D.length} | พิเศษ: ${h.length} | ปรับคะแนน: ${te.length}</p>
            <p class="mt-1">กลางภาค: ${K.filter(c=>c.assignment_type==="กลางภาค").reduce((c,w)=>c+(Number(w.max_score)||0),0)} |
               ปลายภาค: ${K.filter(c=>c.assignment_type==="ปลายภาค").reduce((c,w)=>c+(Number(w.max_score)||0),0)}</p>
          </div>
        </div>
      </div>

      <!-- Bulk delete bar -->
      <div id="sc-bulk-bar" class="hidden mb-3 flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
        <p id="sc-bulk-count" class="text-sm font-semibold text-red-700">เลือก 0 รายการ</p>
        <button id="sc-bulk-delete" class="px-4 py-1.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold">🗑️ ลบที่เลือก</button>
      </div>

      <!-- Regular columns (grouped by type) -->
      ${Be.map(c=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${$n[c.type]??""}">${c.type}</span>
            <span class="text-xs text-gray-400">รวม ${c.items.reduce((w,U)=>w+(Number(U.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${c.type}')" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${ye(c.items)}
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
        ${ye(D)}
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
        ${ye(te,c=>{var w,U;return(c.link_column_id?` <span class="ml-1 text-[10px] text-teal-500">🔗 → ${((U=(w=window._scoreColCache)==null?void 0:w[c.link_column_id])==null?void 0:U.assignment_name)??"—"}</span>`:' <span class="ml-1 text-[10px] text-red-400">⚠️ ยังไม่ได้เชื่อมคอลัมน์</span>')+(c.override_mode==="add"?' <span class="ml-1 text-[10px] text-amber-500">➕ บวกเพิ่ม</span>':"")})}
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
          <span class="text-gray-400 text-sm">${Q?"▲ ซ่อน":"▼ แสดง"}</span>
        </button>
        <div id="sc-bonus-section" class="${Q?"":"hidden"} mt-2 bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-amber-50 bg-amber-50/30">
            <div class="text-xs text-gray-500">
              ${oe.length?oe.map(c=>`<span class="font-mono font-bold text-amber-700">${c.var}</span> = ${c.assignment_name}`).join(" &nbsp;|&nbsp; "):"ยังไม่มีคอลัมน์พิเศษ"}
            </div>
            <button onclick="window._addBonusCol()" class="text-xs text-amber-600 hover:text-amber-800 font-medium flex-shrink-0">＋ เพิ่ม</button>
          </div>
          ${ye(h)}
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
            <select id="sc-type" class="${pt}">
              ${bt.map(c=>`<option value="${c}">${c}</option>`).join("")}
            </select>
          </div>
          ${q?`
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
            <label class="block text-xs font-medium text-gray-600 mb-1">เชื่อมกับคอลัมน์หลัก <span class="text-red-400">*</span></label>
            <select id="sc-link-col" class="${pt}">
              <option value="">— เลือกคอลัมน์ —</option>
            </select>
            <label class="block text-xs font-medium text-gray-600 mb-1 mt-3">วิธีปรับคะแนน</label>
            <select id="sc-override-mode" class="${pt}">
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
      </div>`;const ue=document.getElementById("sc-bulk-bar"),ze=document.getElementById("sc-bulk-count"),J=()=>{const c=L.size;ue.classList.toggle("hidden",c===0),ze.textContent=`เลือก ${c} รายการ`};document.querySelectorAll(".sc-row-cb").forEach(c=>{c.addEventListener("change",()=>{const w=parseInt(c.dataset.id);c.checked?L.add(w):L.delete(w),J()})}),(ve=document.getElementById("sc-bulk-delete"))==null||ve.addEventListener("click",()=>{const c=[...L].map(w=>{var U,M;return((M=(U=window._scoreColCache)==null?void 0:U[w])==null?void 0:M.assignment_name)??`ID ${w}`}).join(", ");gt(`ลบ ${L.size} คอลัมน์:<br/><span class="font-semibold">${c}</span>`,async()=>{try{await Promise.all([...L].map(w=>Ve(w))),p(`ลบ ${L.size} คอลัมน์แล้ว ✅`,"success"),L=new Set,await se()}catch(w){p("ลบไม่สำเร็จ: "+me(w),"error")}})}),(ce=document.getElementById("sc-toggle-bonus"))==null||ce.addEventListener("click",()=>{Q=!Q,document.getElementById("sc-bonus-section").classList.toggle("hidden",!Q),document.getElementById("sc-toggle-bonus").querySelector("span:last-child").textContent=Q?"▲ ซ่อน":"▼ แสดง"}),(Re=document.getElementById("sc-test-formula"))==null||Re.addEventListener("click",()=>{const c=document.getElementById("sc-formula").value.trim(),w=document.getElementById("sc-formula-result");if(!c){w.classList.add("hidden");return}const U=Object.fromEntries(oe.map(ne=>[ne.var,5])),M=nt(c,U);w.classList.remove("hidden"),M===null?(w.className="text-xs mt-1 text-red-500",w.textContent="⚠️ สูตรไม่ถูกต้อง"):(w.className="text-xs mt-1 text-emerald-600",w.textContent=`✅ ทดสอบด้วย ${oe.map(ne=>`${ne.var}=5`).join(", ")} → ผลลัพธ์ = ${M}`)});const W=(c,w,U=bt[0])=>{document.getElementById("sc-edit-id").value="",document.getElementById("sc-edit-ctype").value=c,document.getElementById("sc-name").value="",document.getElementById("sc-col").value="",document.getElementById("sc-max").value="",document.getElementById("sc-type")&&(document.getElementById("sc-type").value=U),document.getElementById("sc-form-title").textContent=w;const M=c==="bonus",ne=c==="derived",O=c==="override";if(document.getElementById("sc-type-wrap").classList.toggle("hidden",M||ne||O),document.getElementById("sc-formula-section").classList.toggle("hidden",!ne),document.getElementById("sc-link-wrap").classList.toggle("hidden",!O),document.getElementById("sc-max-label").textContent=M?"คะแนนเต็ม (ไม่บังคับ)":O?"คะแนนเต็ม (auto ตามคอลัมน์ที่เชื่อม)":"คะแนนเต็ม",document.getElementById("sc-max").readOnly=O,ne&&(document.getElementById("sc-formula").value="",document.getElementById("sc-formula-result").classList.add("hidden"),document.getElementById("sc-vars-hint").textContent=oe.length?oe.map(ae=>`${ae.var} = "${ae.assignment_name}"`).join("  |  "):"ยังไม่มีคอลัมน์พิเศษ — เพิ่มก่อน"),O){const ae=document.getElementById("sc-link-col");ae.innerHTML='<option value="">— เลือกคอลัมน์ —</option>'+K.map(xe=>`<option value="${xe.id}">${xe.assignment_name} (${xe.assignment_type??"—"} · เต็ม ${xe.max_score??"—"})</option>`).join(""),ae.value="",document.getElementById("sc-override-mode").value="max",X()}document.getElementById("sc-form-wrap").classList.remove("hidden"),document.getElementById("sc-name").focus()};window._addScoreCol=c=>W("regular",`เพิ่มคอลัมน์หลัก — ${c}`,c),window._addBonusCol=()=>W("bonus","เพิ่มคอลัมน์พิเศษ (Bonus)"),window._addDerivedCol=()=>W("derived","เพิ่มคอลัมน์อ้างอิงสูตร"),window._addOverrideCol=()=>W("override","เพิ่มคอลัมน์ปรับคะแนน"),(Me=document.getElementById("sc-link-col"))==null||Me.addEventListener("change",c=>{const w=Number(c.target.value),U=K.find(M=>M.id===w);document.getElementById("sc-max").value=(U==null?void 0:U.max_score)??""});const X=()=>{var U;const c=(U=document.getElementById("sc-override-mode"))==null?void 0:U.value,w=document.getElementById("sc-override-mode-hint");w&&(w.textContent=c==="add"?"คะแนนคอลัมน์หลักใหม่ = คะแนนตั้งต้นของนักเรียนคนนั้น + คะแนนในคอลัมน์นี้เสมอ (ไม่บวกซ้ำสะสมตอนแก้ค่าซ้ำ)":"ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที")};(V=document.getElementById("sc-override-mode"))==null||V.addEventListener("change",X),window._editScoreCol=c=>{var M;const w=(M=window._scoreColCache)==null?void 0:M[c];if(!w)return;if(P.has(c)){p("คอลัมน์ระบบกลาง แก้ไขไม่ได้","warning");return}const U=w.column_type??"regular";W(U,"แก้ไขคอลัมน์",w.assignment_type),document.getElementById("sc-edit-id").value=c,document.getElementById("sc-name").value=w.assignment_name,document.getElementById("sc-col").value=w.sheet_column??"",document.getElementById("sc-max").value=w.max_score??"",U==="derived"&&w.formula&&(document.getElementById("sc-formula").value=w.formula),U==="override"&&w.link_column_id&&(document.getElementById("sc-link-col").value=String(w.link_column_id),document.getElementById("sc-override-mode").value=w.override_mode==="add"?"add":"max",X())},window._moveScoreCol=async(c,w)=>{const U=await ge(i),M=U.find(je=>je.id===c);if(!M)return;const ne=U.filter(je=>je.assignment_type===M.assignment_type&&(je.column_type??"regular")===(M.column_type??"regular")),O=ne.findIndex(je=>je.id===c),ae=w==="up"?O-1:O+1;if(ae<0||ae>=ne.length||P.has(ne[ae].id))return;const xe=ne[O],Oe=ne[ae],ke=xe.sort_order??(O+1)*10,Qe=Oe.sort_order??(ae+1)*10;await Ft([{id:xe.id,sort_order:Qe},{id:Oe.id,sort_order:ke}]),await se()},window._deleteScoreCol=c=>{var U,M;if(P.has(c)){p("คอลัมน์ระบบกลาง ลบไม่ได้","warning");return}const w=((M=(U=window._scoreColCache)==null?void 0:U[c])==null?void 0:M.assignment_name)??"คอลัมน์นี้";gt(`ต้องการลบ <span class="font-semibold">"${w}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Ve(c),p("ลบแล้ว ✅","success"),await se()}catch{p("ลบไม่สำเร็จ","error")}})},window._toggleAutoSync=async c=>{var ne;const w=(ne=window._scoreColCache)==null?void 0:ne[c];if(!w)return;const U=!w.auto_attendance_sync,M=async()=>{try{await Gt(c,U),p(U?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน ✅":"ปิดใช้งานแล้ว","success"),await se()}catch{p("บันทึกไม่สำเร็จ","error")}};U?gt(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${w.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้านี้ — ถ้าเคยแก้คะแนนคนไหนด้วยมือไว้ก่อน จะไม่ถูกทับ</span>`,M):await M()},(Y=document.getElementById("sc-form-cancel"))==null||Y.addEventListener("click",()=>{document.getElementById("sc-form-wrap").classList.add("hidden")}),(Ne=document.getElementById("sc-form"))==null||Ne.addEventListener("submit",async c=>{var Fe,Ke,Pe,he;c.preventDefault();const w=document.getElementById("sc-save"),U=document.getElementById("sc-edit-id").value,M=document.getElementById("sc-edit-ctype").value,ne=document.getElementById("sc-name").value.trim(),O=(((Fe=document.getElementById("sc-col"))==null?void 0:Fe.value)??"").trim().toUpperCase(),ae=((Ke=document.getElementById("sc-type"))==null?void 0:Ke.value)??"ระหว่างเรียน",xe=document.getElementById("sc-max").value,Oe=xe&&parseFloat(xe)||null,ke=M==="derived"&&document.getElementById("sc-formula").value.trim()||null,Qe=M==="override"&&Number((Pe=document.getElementById("sc-link-col"))==null?void 0:Pe.value)||null,je=M==="override"?((he=document.getElementById("sc-override-mode"))==null?void 0:he.value)==="add"?"add":"max":null;if(!ne){p("กรุณากรอกชื่อรายการ","warning");return}if(M==="derived"&&!Oe){p("คอลัมน์อ้างอิงสูตรต้องระบุคะแนนเต็ม","warning");return}if(M==="derived"&&!ke){p("กรุณากรอกสูตรคำนวณ","warning");return}if(M==="override"&&!Qe){p("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const ot=M==="derived"?oe.map(we=>({var:we.var,col_id:we.id})):[];w.disabled=!0,w.textContent="กำลังบันทึก...";try{const we={assignment_name:ne,assignment_type:M==="bonus"||M==="derived"||M==="override"?"คะแนนพิเศษ":ae,sheet_column:O,max_score:Oe,column_type:M,formula:ke,formula_refs:ot,link_column_id:Qe,override_mode:je};U?await Ge(Number(U),we):await Le({...we,class_id:i}),p("บันทึกสำเร็จ","success"),document.getElementById("sc-form-wrap").classList.add("hidden"),(M==="bonus"||M==="derived")&&(Q=!0),await se()}catch(we){p("บันทึกไม่สำเร็จ: "+me(we),"error")}finally{w.disabled=!1,w.textContent="บันทึก"}})};window._scReload=se,vn(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-400">${$}</p>
      </div>
      ${R?'<button id="btn-fill-lifeskill" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex-shrink-0">🌱 เติมทักษะชีวิต</button>':""}
    </div>
    <div id="sc-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`),await se(),(z=document.getElementById("btn-fill-lifeskill"))==null||z.addEventListener("click",async()=>{const T=document.getElementById("btn-fill-lifeskill");T.disabled=!0,T.textContent="⏳";try{const r=await ft().catch(()=>({})),u=parseInt(r.academicYear??2568),k=parseInt(r.semester??1),v=await Nt(u,k,"สามัญ").catch(()=>[]);if(!v.length){p("ยังไม่มีหัวข้อทักษะชีวิต — แอดมินเพิ่มก่อน","warning");return}const K=await ge(i),h=new Set(K.map(te=>te.assignment_name));let D=0;for(const te of v)h.has(te.name)||(await Le({class_id:i,assignment_name:te.name,assignment_type:"กลางภาค",sheet_column:te.sheet_col??"",max_score:te.max_score??20}),D++);p(D>0?`เพิ่ม ${D} คอลัมน์ ✅`:"มีคอลัมน์ทักษะชีวิตอยู่แล้ว",D>0?"success":"info"),await se()}catch{p("เติมไม่สำเร็จ","error")}finally{const r=document.getElementById("btn-fill-lifeskill");r&&(r.disabled=!1,r.textContent="🌱 เติมทักษะชีวิต")}}),setTimeout(()=>kn(y,i,_),500)}const yt="pp5:gradebook-updated",Pt="pp5_gradebook_update",En="pp5-gradebook-sync-v1";let Te=null;try{Te=new BroadcastChannel(En)}catch{}function Sn(y){const i={...y,eventId:`${Date.now()}-${Math.random().toString(36).slice(2)}`,updatedAt:new Date().toISOString()};window.dispatchEvent(new CustomEvent(yt,{detail:i}));try{Te==null||Te.postMessage(i)}catch{}try{localStorage.setItem(Pt,JSON.stringify(i))}catch{}return i}function Cn(y){const i=new Set,$=q=>{!(q!=null&&q.eventId)||i.has(q.eventId)||(i.add(q.eventId),i.size>100&&i.delete(i.values().next().value),y(q))},_=q=>$(q.detail),R=q=>$(q.data),A=q=>{if(!(q.key!==Pt||!q.newValue))try{$(JSON.parse(q.newValue))}catch{}};return window.addEventListener(yt,_),Te==null||Te.addEventListener("message",R),window.addEventListener("storage",A),()=>{window.removeEventListener(yt,_),Te==null||Te.removeEventListener("message",R),window.removeEventListener("storage",A)}}function qn(){vt("grades"),ht("บันทึกคะแนน","scores"),Ze(`<div class="text-center py-20 text-gray-400">
    <p class="text-5xl mb-4">📝</p>
    <p class="font-medium text-gray-600">เลือกห้องเรียนจากเมนู "ห้องเรียนของฉัน"</p>
    <p class="text-sm mt-2">แล้วกดปุ่ม 📝 คะแนน ที่การ์ดห้องเรียน</p>
  </div>`)}let tt=null;function Ln(y){return y>=80?4:y>=75?3.5:y>=70?3:y>=65?2.5:y>=60?2:y>=55?1.5:y>=50?1:0}function In(y){return y>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:y>=2.5?{label:"ดี",cls:"text-blue-600"}:y>=1?{label:"ผ่าน",cls:"text-amber-500"}:{label:"ไม่ผ่าน",cls:"text-red-600"}}function Bn(y,i,$){if($)return{allowed:!0,claimedRoom:null};let _=null;try{_=localStorage.getItem(`pp5_gradeonline_room_${y}`)}catch{}return!_||_===i?{allowed:!0,claimedRoom:_}:{allowed:!1,claimedRoom:_}}function jn(y,i){try{localStorage.setItem(`pp5_gradeonline_room_${y}`,i)}catch{}}function Mn(y,i){var _;(_=document.getElementById("gol-room-paywall"))==null||_.remove();const $=document.createElement("div");$.id="gol-room-paywall",$.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",$.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative">
      <button id="gol-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์ส่งคะแนนเข้า GradeOnline ใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${de(y)}</b> ไว้แล้ว
        ${i?`<br><br>ต้องการใช้กับห้อง <b>${de(i)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ (สรุปเกรดเข้าระบบแก้ค้างเก่ายังส่งได้ตามปกติ)
      </p>
      <button id="gol-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild($),$.querySelector("#gol-pw-close").addEventListener("click",()=>$.remove()),$.querySelector("#gol-pw-donate").addEventListener("click",()=>{var R;$.remove(),(R=document.getElementById("btn-donate-float"))==null||R.click()})}function Nn(y,i){var R;(R=document.getElementById("gol-result-modal"))==null||R.remove();const $=document.createElement("div");$.id="gol-result-modal",$.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",$.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📤 ส่งคะแนนเข้า GradeOnline</h3>
        <button id="gol-result-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-4 space-y-4 text-sm text-gray-600">
        <p class="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">เตรียมคะแนนไว้แล้ว ${i} คน — ใช้รหัสด้านล่างตอนกดปุ่มบุ๊กมาร์กในหน้า GradeOnline</p>
        <div class="text-center bg-gray-50 rounded-xl py-3">
          <p class="text-[11px] text-gray-400 mb-1">รหัสอ้างอิง</p>
          <p class="text-2xl font-mono font-bold tracking-widest text-indigo-700">${de(y)}</p>
        </div>
        <div class="text-center space-y-2">
          <p class="text-xs">ยังไม่เคยติดตั้ง? <b>ลากปุ่มนี้</b> ไปวางที่แถบบุ๊กมาร์กของเบราว์เซอร์ (ทำครั้งเดียว)</p>
          <a
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-lg"
            style="cursor:grab"
            href="javascript:(function(){var s=document.createElement('script');s.src='https://ghhambal.github.io/pp5online/js/gradeonline-bridge-push.js?v='+Date.now();document.body.appendChild(s);})();"
            onclick="alert('อย่ากดปุ่มนี้ตรงๆ นะครับ — ให้ลาก (drag) ปุ่มนี้ไปวางที่แถบบุ๊กมาร์กด้านบนของเบราว์เซอร์แทน'); return false;"
          >📥 ดึงคะแนนเข้า GradeOnline</a>
        </div>
        <ol class="space-y-1.5 text-xs list-decimal list-inside">
          <li>เปิดหน้า GradeOnline (azizstan.net) ไปที่วิชา/ห้องที่ต้องการกรอกคะแนน</li>
          <li>กดปุ่มบุ๊กมาร์กที่ลากไว้ แล้ววางรหัสอ้างอิงด้านบนตอนที่ระบบถาม</li>
          <li>สคริปต์จะกรอกคะแนนรวม+เกรดให้ทีละคนแบบไม่รีบ — <b>ตรวจสอบให้ดีก่อนกดปุ่มบันทึกของ GradeOnline เอง</b> (ไม่บันทึกให้อัตโนมัติ)</li>
        </ol>
        <p class="text-[11px] text-gray-400 text-center">ไม่เห็นแถบบุ๊กมาร์ก? กด ⌘/Ctrl+Shift+B เพื่อเปิดก่อน</p>
      </div>
    </div>`,document.body.appendChild($);const _=()=>$.remove();$.querySelector("#gol-result-close").onclick=_,$.onclick=A=>{A.target===$&&_()}}async function Ae(y,i){var _,R,A,q;tt==null||tt(),tt=null,window._currentGradeTeacher=y,vt("grades"),ht("บันทึกคะแนน","scores");const $=i.master_subjects;Ze(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`);try{const P=i.source_class_id??i.id,[L,Q,se,ie,j,z,T,r,u]=await Promise.all([nn(i.id),ge(P),dt(P),ut(i.id,"กลางภาค"),ut(i.id,"ปลายภาค"),ut(i.id,"ระหว่างเรียน"),ft().catch(()=>({})),y?Ht(y.id).catch(()=>[]):Promise.resolve([]),pn().catch(()=>({}))]),k=!!u.live_submit_open_date&&new Date().toISOString().slice(0,10)>=u.live_submit_open_date;fn(T),i.course_id&&Q.length===0&&setTimeout(async()=>{var t;try{const n=r.filter(d=>d.id!==i.id&&d.course_id===i.course_id),g=(await Promise.all(n.map(async d=>{const I=await ge(d.id).catch(()=>[]);return I.length?{...d,cols:I}:null}))).filter(Boolean);if(!g.length)return;(t=document.getElementById("grade-same-subj-popup"))==null||t.remove();const f=document.createElement("div");f.id="grade-same-subj-popup",f.className="fixed inset-0 z-[190] flex items-center justify-center p-6",f.style.background="rgba(0,0,0,0.45)",f.innerHTML=`
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
                <div class="text-3xl mb-2">📋</div>
                <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
                <p class="text-indigo-100 text-xs mt-1">ยังไม่มีคอลัมน์คะแนน — ต้องการคัดลอกจากห้องที่มีอยู่แล้วไหม?</p>
              </div>
              <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
                ${g.map(d=>`
                <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">${d.class_name}</p>
                    <p class="text-xs text-gray-400">${d.cols.length} คอลัมน์</p>
                  </div>
                  <button class="grade-copy-cols flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
                    data-src="${d.id}">
                    คัดลอก
                  </button>
                </div>`).join("")}
              </div>
              <div class="px-5 pb-5">
                <button id="grade-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
              </div>
            </div>`,document.body.appendChild(f),f.querySelector("#grade-ssp-close").addEventListener("click",()=>f.remove()),f.querySelectorAll(".grade-copy-cols").forEach(d=>{d.addEventListener("click",async()=>{const I=g.find(B=>B.id===parseInt(d.dataset.src));d.disabled=!0,d.textContent="⏳";try{for(const B of I.cols)await Le({class_id:i.id,assignment_name:B.assignment_name,assignment_type:B.assignment_type,sheet_column:B.sheet_column??"",max_score:B.max_score});p(`คัดลอก ${I.cols.length} คอลัมน์จาก ${I.class_name} ✅`,"success"),f.remove(),Ae(y,i)}catch(B){p("คัดลอกไม่สำเร็จ: "+me(B),"error"),d.disabled=!1,d.textContent="คัดลอก"}})})}catch{}},600);const v=parseInt(T.academicYear??2568),K=parseInt(T.semester??1),h=($==null?void 0:$.subject_group)??"",D=(i==null?void 0:i.skill_group)==="ชีวิต",te=["AGM","AGMVOC"].includes(h);let oe=se,pe=[];D?(pe=(await sn(i.id,v,K)).columnNames??[],oe=await dt(i.id)):te&&(pe=(await on(i.id,{semesterStart:T.semester_start,semesterEnd:T.semester_end,attendanceScoreMode:T.attendanceScoreMode??"recorded"})).columnNames??["คะแนนมาเรียน","คะแนนละหมาด"],oe=await dt(i.id));try{const t=await rn(i.id,{attendanceScoreMode:T.attendanceScoreMode??"recorded"});t.columns>0&&(oe=await dt(i.id),t.skipped>0&&p(`ดึงคะแนนมาเรียนอัตโนมัติแล้ว (ข้าม ${t.skipped} รายการที่เคยแก้คะแนนด้วยมือ)`,"success"))}catch(t){console.error("syncAutoAttendanceScoreColumns failed",t)}let Ie=[],le=[];try{Ie=await an(v,K),le=Ie.length?await ln(Ie.map(t=>t.id),L.map(t=>t.id)):[],Ie.length?le.length||p(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนห้องนี้ ภาค ${K}/${v}`,"warning"):p(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ ภาค ${K}/${v}`,"warning")}catch(t){console.error("load reading evaluation failed",t),p(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${me(t)}`,"error")}const fe={};for(const t of le)fe[t.student_id]=(fe[t.student_id]??0)+(parseFloat(t.score)||0);const ye={},Be=Ie.reduce((t,n)=>t+(parseFloat(n.max_score)||0),0);for(const[t,n]of Object.entries(fe)){const g=Be>0?n/Be*100:0,f=yn(g);ye[parseInt(t)]={score100:g,label:f.label,cls:f.cls}}let ue=pe.length?await ge(i.id):Q;if(ue.length===0){const t=(n,g)=>Le({class_id:i.id,assignment_name:`คะแนนที่ ${g}`,max_score:20,assignment_type:n,sheet_column:""});for(let n=1;n<=5;n++)await t("midterm",n);for(let n=1;n<=5;n++)await t("final",n);ue=await ge(i.id)}pe.length&&(ue=[...ue].sort((t,n)=>{const g=pe.indexOf(t.assignment_name),f=pe.indexOf(n.assignment_name);return g>=0||f>=0?g<0?1:f<0?-1:g-f:(t.id??0)-(n.id??0)}));const ze=new Set(pe.length?ue.filter(t=>pe.includes(t.assignment_name)).map(t=>t.id):[]),J=t=>{const n=typeof t=="object"?t==null?void 0:t.id:t;return ze.has(n)},W=t=>t.assignment_name==="คะแนนละหมาด"?`คะแนนระบบกลาง (แก้ไขไม่ได้)
คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา
หากคะแนนว่าง = ครูที่ปรึกษาศาสนายังไม่ได้บันทึกในสัปดาห์นั้น`:"คะแนนระบบกลาง: แก้ไขไม่ได้",X=ue.filter(t=>t.column_type==="bonus"),ve=ue.filter(t=>t.column_type==="derived"),ce=ue.filter(t=>t.column_type==="override"),Re=ue.filter(t=>(t.column_type??"regular")==="regular"),Me=Object.fromEntries(ue.map(t=>[t.id,t])),V=Re.filter(t=>t.assignment_type!=="final"&&t.assignment_type!=="ปลายภาค"),Y=Re.filter(t=>t.assignment_type==="final"||t.assignment_type==="ปลายภาค"),Ne=zt(X),c=`gradeToggles_${(y==null?void 0:y.id)??"guest"}_${i.id}`,w=(()=>{try{return JSON.parse(localStorage.getItem(c)??"{}")}catch{return{}}})(),U=()=>localStorage.setItem(c,JSON.stringify({columnRoundSettings:Fe,toggleForceGrade:we,toggleKhuna:Ye,toggleRead:Je,showBonusCols:M}));let M=w.showBonusCols??!1,ne=!1;const O={};for(const t of oe)O[t.student_id]||(O[t.student_id]={}),O[t.student_id][t.score_column_id]={orig:t.original_score,retake:t.retake_score,final:t.final_score??t.original_score,history:t.score_history??[]};for(const t of L)t.special_result&&(O[t.id]||(O[t.id]={}),O[t.id].__force=t.special_result);const ae=(t,n)=>{var g,f,d,I;return((f=(g=O[t])==null?void 0:g[n])==null?void 0:f.final)??((I=(d=O[t])==null?void 0:d[n])==null?void 0:I.orig)??null},xe=(t,n)=>{var g,f,d;return(((d=(f=(g=O[t])==null?void 0:g[n])==null?void 0:f.history)==null?void 0:d.length)??0)>1},Oe=(t,n)=>n.reduce((g,f)=>g+(parseFloat(ae(t,f.id))||0),0),ke=t=>t.reduce((n,g)=>n+(parseFloat(g.max_score)||0),0),Qe=(t,n)=>{const g=parseFloat(ae(t,n.id))||0;if(!n.bonus_formula)return g;const f=Object.fromEntries(Ne.map(I=>[I.var,parseFloat(ae(t,I.id))||0])),d=nt(n.bonus_formula,f)??0;return n.max_score?Math.min(g+d,n.max_score):g+d},je=(t,n)=>n.reduce((g,f)=>g+Qe(t,f),0),ot=(t,n)=>{if(!t.formula)return 0;const g={};for(const f of t.formula_refs??[])g[f.var]=parseFloat(ae(n,f.col_id))||0;return nt(t.formula,g)??0};let Fe=w.columnRoundSettings??{};"total"in Fe||(Fe.total=w.toggleRound??!0);const Ke=t=>!!Fe[t],Pe=(t,n)=>{if(n===""||n==null)return n??"";if(!Ke(t))return n;const g=parseFloat(n);return Number.isFinite(g)?Math.round(g):n},he=(t,n,g=1)=>Ke(t)?Math.round(n):Number(n.toFixed(g));let we=w.toggleForceGrade??!1,Ye=w.toggleKhuna??!0,Je=w.toggleRead??!0;const Ut=["0","ร","มส","มผ"],Vt=T.forceGradeOptions?String(T.forceGradeOptions).split(",").map(t=>t.trim()).filter(Boolean):Ut,Ue=t=>{const n=ke(V),g=ke(Y),f=ve.reduce((o,b)=>o+(parseFloat(b.max_score)||0),0),d=je(t,V),I=je(t,Y),B=ve.reduce((o,b)=>o+(ot(b,t)||0),0),S=n+g+f,e=d+I+B,l=he("total",e,1),C=S>0?e/S*100:0,E=Ln(C),G=In(E);return{midRaw:d,finRaw:I,pct:C,total:l,grade:E,khuna:G}},wt="sticky left-0 z-20 bg-white border border-gray-200",rt="sticky z-20 bg-white border border-gray-200",re="border border-gray-200 text-center text-xs",$t=160,ee=76,De=(t,n,g,f="bg-emerald-500 text-white shadow-sm",d="bg-gray-100 text-gray-500 hover:bg-gray-200")=>`<button class="grade-toggle text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all select-none whitespace-nowrap ${g?f:d}"
        data-toggle="${t}">${n}</button>`,Kt=(t,n)=>{if(J(n)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}const g=[...V,...Y].find(s=>s.id===n),f=(g==null?void 0:g.assignment_type)==="final",d=dn((g==null?void 0:g.assignment_name)||""),I=d==="กลางภาค"||d==="ปลายภาค"||d==="สอบปรับ";let B;I&&f?B=j:I&&!f?B=ie:B=z.cols.length>0?z:f?j:ie;const S=B.cols,e=B.isFixed;if(document.querySelectorAll(".sheet-col-popup").forEach(s=>s.remove()),e&&S.length===1){const s=S[0];if(t.textContent.trim()!==s){Ge(n,{sheet_column:s}).catch(()=>{}),t.textContent=s;const a=[...V,...Y].find(x=>x.id===n);a&&(a.sheet_column=s)}return}const l=t.getBoundingClientRect(),C=t.textContent.trim(),E=document.createElement("div");E.className="sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",E.style.cssText=`top:${l.bottom+4}px;left:${Math.max(4,l.left-20)}px;min-width:${S.length>0?220:180}px`;const G=(g==null?void 0:g.assignment_name)||(f?"ปลายภาค":"กลางภาค");E.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${G}</span>
          ${e?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':""}</p>
        ${S.length>0?`
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${S.map(s=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${s===C?"border-blue-500 bg-blue-50 text-blue-700 font-bold":"border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"}"
            data-val="${s}" >${s}</button>`).join("")}
        </div>`:""}
        ${e?`<input id="scp-inp" type="hidden" value="${S[0]||C}"/>`:`<input id="scp-inp" type="text" value="${C==="—"?"":C}" placeholder="${S.length>0?"หรือพิมพ์เอง...":"เช่น EK"}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(E);const o=E.querySelector("#scp-inp");o.focus(),o.select(),o.addEventListener("input",s=>{s.target.value=s.target.value.toUpperCase()}),E.querySelectorAll(".scp-opt").forEach(s=>{s.addEventListener("click",()=>{o.value=s.dataset.val,E.querySelectorAll(".scp-opt").forEach(a=>{a.className=a.className.replace("border-blue-500 bg-blue-50 text-blue-700 font-bold","border-gray-200 text-gray-600")}),s.className=s.className.replace("border-gray-200 text-gray-600","border-blue-500 bg-blue-50 text-blue-700 font-bold")})});const b=async()=>{const s=o.value.trim().toUpperCase()||null;try{await Ge(n,{sheet_column:s}),t.textContent=s||"—";const a=[...V,...Y].find(x=>x.id===n);a&&(a.sheet_column=s),E.remove()}catch{p("บันทึกไม่สำเร็จ","error")}};o.addEventListener("keydown",s=>{s.key==="Enter"&&b()}),E.querySelector("#scp-save").addEventListener("click",b),E.querySelector("#scp-cancel").addEventListener("click",()=>E.remove()),setTimeout(()=>{const s=a=>{!E.contains(a.target)&&a.target!==t&&(E.remove(),document.removeEventListener("click",s))};document.addEventListener("click",s)},100)},Yt=(t,n)=>{if(J(n)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}document.querySelectorAll(".max-score-popup").forEach(S=>S.remove());const g=[...V,...Y].find(S=>S.id===n),f=t.getBoundingClientRect(),d=document.createElement("div");d.className="max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",d.style.cssText=`top:${f.bottom+4}px;left:${Math.max(4,f.left-20)}px;min-width:160px`,d.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${(g==null?void 0:g.max_score)||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(d);const I=d.querySelector("#msp-inp");I.focus(),I.select();const B=async()=>{const S=Math.max(1,parseFloat(I.value)||1);try{await Ge(n,{max_score:S}),g&&(g.max_score=S),d.remove(),Se()}catch{p("บันทึกไม่สำเร็จ","error")}};I.addEventListener("keydown",S=>{S.key==="Enter"&&B()}),d.querySelector("#msp-save").addEventListener("click",B),d.querySelector("#msp-cancel").addEventListener("click",()=>d.remove()),setTimeout(()=>{const S=e=>{!d.contains(e.target)&&e.target!==t&&(d.remove(),document.removeEventListener("click",S))};document.addEventListener("click",S)},100)},Qt=(t,n,g)=>{var G;(G=document.getElementById("sg-detail-modal"))==null||G.remove();const{midRaw:f,finRaw:d,total:I,grade:B,khuna:S}=g,e=ke(V),l=ke(Y),C=o=>{var a,x;const b=((a=n[o.id])==null?void 0:a.final)??((x=n[o.id])==null?void 0:x.orig)??null,s=b!=null&&o.max_score>0?(b/o.max_score*100).toFixed(0):"—";return`<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${o.assignment_name||"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${b??"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${o.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${s}%</td>
        </tr>`},E=document.createElement("div");E.id="sg-detail-modal",E.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",E.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${t.image_url?`<img src="${t.image_url}" class="w-9 h-11 rounded-lg object-cover border border-gray-200 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${t.full_name}</p>
            <p class="text-xs text-gray-400">${t.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${B>0?B.toFixed(1):"0"}</p>
            <p class="text-xs font-medium ${S.cls}">${S.label}</p>
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
              <tbody>${V.map(C).join("")}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${he("mid_subtotal",f,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${e}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${e>0?(f/e*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          ${Y.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${Y.map(C).join("")}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${he("fin_subtotal",d,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${l}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${l>0?(d/l*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${I>0?I:"—"}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${B>0?B.toFixed(1):"0"}
              <span class="text-sm font-semibold ${S.cls}"> — ${S.label}</span></p>
          </div>
        </div>
      </div>`,document.body.appendChild(E),E.querySelector("#sg-close").addEventListener("click",()=>E.remove()),E.addEventListener("click",o=>{o.target===E&&E.remove()})},at=()=>{var n,g,f;const t=document.getElementById("grade-togglebar");t&&(t.innerHTML=`
        <div class="flex items-center gap-1.5 px-3 py-2 ml-auto flex-wrap justify-end">
          <button id="btn-round-settings" type="button" class="text-[11px] px-3 py-1.5 rounded-lg font-semibold transition bg-gray-100 text-gray-500 hover:bg-gray-200">🔢 ปัดเลข</button>
          ${De("khuna","คุณลักษณะ",Ye)}
          ${De("read","การอ่าน",Je)}
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          ${De("forceGrade","บังคับเกรด",we,"bg-rose-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
          ${De("bonus","⭐ คะแนนเก็บ/พิเศษ",M,"bg-amber-500 text-white shadow-sm","bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100")}
          ${M&&X.length?De("formula-link","🔗 เชื่อมสูตร",ne,"bg-violet-500 text-white shadow-sm","bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100"):""}
          ${k?`
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          <button id="btn-submit-regrade" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-600 text-white shadow-sm hover:bg-pink-700 transition">
            📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า
          </button>
          <button id="btn-export-gradeonline" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 text-white shadow-sm hover:bg-purple-700 transition">
            📤 ส่งคะแนนเข้า GradeOnline
          </button>`:""}
        </div>`,(n=document.getElementById("btn-submit-regrade"))==null||n.addEventListener("click",async()=>{const d=document.getElementById("btn-submit-regrade"),I=L.map(B=>{var C;const{grade:S}=Ue(B.id),l=(((C=O[B.id])==null?void 0:C.__force)??"")||(S===0?"0":"");return l?{student_id:B.id,grade_failed_at:l}:null}).filter(Boolean);if(!I.length){p("ไม่มีนักเรียนติดในห้องนี้ตอนนี้","info");return}if(confirm(`พบนักเรียนติด ${I.length} คนในห้องนี้ ยืนยันส่งเข้าระบบแก้ค้างเก่าเลยไหม? (รายชื่อที่เคยส่งไปแล้วจะไม่ถูกส่งซ้ำ)`)){d.disabled=!0,d.textContent="กำลังส่ง...";try{const B=await bn(i.id,I);p(`ส่งสำเร็จ ✅ พบติด ${B.total_failing} คน — เพิ่มเข้าระบบใหม่ ${B.submitted} คน (ที่เหลือมีอยู่แล้ว)`,"success")}catch(B){p("ส่งไม่สำเร็จ: "+me(B),"error")}finally{d.disabled=!1,d.textContent="📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า"}}}),(g=document.getElementById("btn-export-gradeonline"))==null||g.addEventListener("click",async()=>{const d=document.getElementById("btn-export-gradeonline"),I=(window._pp5DonorTierIndex??0)>=2,B=Bn(y==null?void 0:y.id,i.class_name,I);if(!B.allowed){Mn(B.claimedRoom,i.class_name);return}const S=L.map(e=>{var G;const{pct:l,grade:C}=Ue(e.id),E=((G=O[e.id])==null?void 0:G.__force)||"";return{studentCode:e.student_code,studentName:e.full_name,total:Math.round(l*10)/10,grade:E||(C>0?String(C):"0")}});if(confirm(`เตรียมส่งคะแนนรวม(เต็ม 100)+เกรดของนักเรียน ${S.length} คนในห้องนี้ไปรอที่ GradeOnline ยืนยันไหม?`)){d.disabled=!0,d.textContent="กำลังเตรียมข้อมูล...";try{const e=await cn(i.id,y==null?void 0:y.id,$==null?void 0:$.subject_name,i.class_name,S);!I&&!B.claimedRoom&&jn(y==null?void 0:y.id,i.class_name),Nn(e,S.length)}catch(e){p("เตรียมข้อมูลไม่สำเร็จ: "+me(e),"error")}finally{d.disabled=!1,d.textContent="📤 ส่งคะแนนเข้า GradeOnline"}}}),(f=document.getElementById("btn-round-settings"))==null||f.addEventListener("click",_t),t.querySelectorAll(".grade-toggle").forEach(d=>{d.addEventListener("click",()=>{const I=d.dataset.toggle;I==="forceGrade"&&(we=!we),I==="khuna"&&(Ye=!Ye),I==="read"&&(Je=!Je),I==="bonus"&&(M=!M,M||(ne=!1),M&&X.length===0&&p('ยังไม่มีคอลัมน์พิเศษ — กด "จัดการคอลัมน์" เพื่อเพิ่ม',"info")),I==="formula-link"&&(ne=!ne),U(),at(),Se()})}))},_t=()=>{var f;(f=document.getElementById("round-settings-popup"))==null||f.remove();const t=document.createElement("div");t.id="round-settings-popup",t.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const n=(d,I,B)=>`
        <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-50 last:border-0">
          <span class="text-xs text-gray-700 truncate">${de(I??"")}${B!=null?` <span class="text-gray-400">(เต็ม ${B})</span>`:""}</span>
          <button type="button" class="round-set-toggle flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${Ke(d)?"bg-emerald-500 text-white":"bg-gray-100 text-gray-500"}"
            data-key="${d}">${Ke(d)?"จำนวนเต็ม":"ทศนิยม"}</button>
        </div>`;t.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 flex-shrink-0">
            <h3 class="font-bold text-gray-800 text-sm">🔢 ตั้งค่าการปัดเลขคะแนน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">เลือกได้อิสระทีละคอลัมน์ — ไม่กระทบคะแนนจริงที่บันทึกไว้ แค่ปรับการแสดงผล</p>
          </div>
          <div class="overflow-y-auto flex-1 px-4 py-2">
            <p class="text-[11px] font-bold text-amber-600 uppercase tracking-wide mt-2 mb-1">ผลรวม</p>
            ${n("mid_subtotal","รวมกลางภาค")}
            ${n("fin_subtotal","รวมปลายภาค")}
            ${n("total","คะแนนรวมทั้งหมด")}
            ${V.length?`<p class="text-[11px] font-bold text-blue-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์กลางภาค</p>${V.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${Y.length?`<p class="text-[11px] font-bold text-purple-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์ปลายภาค</p>${Y.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${ce.length?`<p class="text-[11px] font-bold text-teal-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์อื่นๆ</p>${ce.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${ve.length?`<p class="text-[11px] font-bold text-indigo-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์คำนวณสูตร</p>${ve.map(d=>n(`derived_${d.id}`,d.assignment_name,d.max_score)).join("")}`:""}
            ${M&&X.length?`<p class="text-[11px] font-bold text-amber-500 uppercase tracking-wide mt-3 mb-1">คะแนนเก็บ/พิเศษ</p>${X.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
          </div>
          <div class="px-4 py-3 border-t border-gray-100 flex-shrink-0">
            <button id="round-settings-close" class="w-full py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">ปิด</button>
          </div>
        </div>`,document.body.appendChild(t);const g=()=>t.remove();t.querySelector("#round-settings-close").addEventListener("click",g),t.addEventListener("click",d=>{d.target===t&&g()}),t.querySelectorAll(".round-set-toggle").forEach(d=>{d.addEventListener("click",()=>{const I=d.dataset.key;Fe[I]=!Fe[I],U(),Se(),_t()})})},Jt=t=>{var f,d,I;(f=document.getElementById("formula-link-popup"))==null||f.remove();const n=document.createElement("div");n.id="formula-link-popup",n.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const g=Ne.length?Ne.map(B=>`<span class="font-mono font-bold text-violet-700">${B.var}</span> = "${B.assignment_name}"`).join("  |  "):'<span class="text-gray-400">ยังไม่มีคอลัมน์พิเศษ</span>';n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-gradient-to-br from-violet-500 to-purple-600 px-5 py-4">
            <h3 class="text-white font-bold text-sm">🔗 เชื่อมสูตรจากคะแนนพิเศษ</h3>
            <p class="text-violet-100 text-xs mt-0.5">คอลัมน์: <span class="font-semibold">${de(t.assignment_name)}</span> (เต็ม ${t.max_score??"?"})</p>
            <p class="text-violet-200 text-[10px] mt-1">สูตรจะบวกเพิ่มเข้าคะแนนที่กรอก ไม่เกินคะแนนเต็ม</p>
          </div>
          <div class="p-4 space-y-3">
            <div class="bg-violet-50 rounded-xl p-3 text-xs text-violet-800">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้:</p>
              <p id="flp-vars">${g}</p>
              <p class="mt-1 text-violet-500">ฟังก์ชัน: MIN, MAX, IF, ROUND, SUM, AVG, CLAMP</p>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">สูตร <span class="text-red-400">*</span></label>
              <div class="flex gap-2">
                <input id="flp-formula" type="text" value="${de(t.bonus_formula??"")}"
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
        </div>`,document.body.appendChild(n),n.querySelector("#flp-cancel").addEventListener("click",()=>n.remove()),(d=n.querySelector("#flp-test"))==null||d.addEventListener("click",()=>{const B=n.querySelector("#flp-formula").value.trim(),S=n.querySelector("#flp-result");if(!B){S.classList.add("hidden");return}const e=Object.fromEntries(Ne.map(C=>[C.var,5])),l=nt(B,e);if(S.classList.remove("hidden"),l===null)S.className="text-xs mt-1 text-red-500",S.textContent="⚠️ สูตรไม่ถูกต้อง";else{S.className="text-xs mt-1 text-emerald-600";const C=Ne.map(G=>`${G.var}=5`).join(", "),E=t.max_score?Math.min(0+l,t.max_score):l;S.textContent=`✅ ตัวอย่าง (${C||"ไม่มี"}) → bonus=${l} → คะแนนจริง MIN(0+${l},${t.max_score??"∞"}) = ${E}`}}),(I=n.querySelector("#flp-clear"))==null||I.addEventListener("click",async()=>{try{await Ge(t.id,{bonus_formula:null,bonus_formula_refs:[]}),t.bonus_formula=null,t.bonus_formula_refs=[],p("ลบสูตรแล้ว ✅","success"),n.remove(),at(),Se()}catch{p("บันทึกไม่สำเร็จ","error")}}),n.querySelector("#flp-save").addEventListener("click",async()=>{const B=n.querySelector("#flp-formula").value.trim();if(!B){p("กรุณากรอกสูตร","warning");return}if(nt(B,Object.fromEntries(Ne.map(l=>[l.var,5])))===null){p("สูตรไม่ถูกต้อง","warning");return}const S=Ne.map(l=>({var:l.var,col_id:l.id})),e=n.querySelector("#flp-save");e.disabled=!0,e.textContent="⏳";try{await Ge(t.id,{bonus_formula:B,bonus_formula_refs:S}),t.bonus_formula=B,t.bonus_formula_refs=S,p("บันทึกสูตรแล้ว ✅","success"),n.remove(),at(),Se()}catch{p("บันทึกไม่สำเร็จ","error"),e.disabled=!1,e.textContent="บันทึก"}})},kt=(()=>{var g;const t={};for(const f of ue)J(f)&&(t[g=f.assignment_name]??(t[g]=[])).push(f);const n=new Set;for(const f of Object.values(t))if(!(f.length<=1)){f.sort((d,I)=>d.id-I.id);for(const d of f.slice(1))n.add(d.id)}return n})(),Wt=()=>{var l,C,E,G;(l=document.getElementById("manage-cols-modal"))==null||l.remove();const t=document.createElement("div");t.id="manage-cols-modal",t.className="fixed inset-0 z-[600] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4";const n=(o,b=[])=>{const s=J(o),a=s&&kt.has(o.id),x=s&&!a,m=b.findIndex(F=>F.id===o.id),N=!s&&m>0&&!J(b[m-1]),H=!s&&m>=0&&m<b.length-1;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${x?"border-emerald-100 bg-emerald-50/70":a?"border-amber-200 bg-amber-50/70":"border-gray-100 hover:border-gray-200 bg-gray-50/60"}">
          ${x?'<span class="w-4 text-emerald-500 text-xs flex-shrink-0">🔒</span>':a?`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-amber-500 flex-shrink-0" data-colid="${o.id}" title="คอลัมน์ซ้ำ (ระบบสร้างผิดพลาด)" />`:`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-colid="${o.id}" />`}
          <div class="flex flex-col gap-0.5 flex-shrink-0">
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${N?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${o.id}" data-dir="up" ${N?"":"disabled"}>▲</button>
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${H?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${o.id}" data-dir="down" ${H?"":"disabled"}>▼</button>
          </div>
          <span class="flex-1 text-xs text-gray-700 truncate">${o.assignment_name||"—"}${a?' <span class="text-amber-600 font-semibold">(ซ้ำ)</span>':""}</span>
          <span class="text-[11px] text-gray-400">/${o.max_score||0}</span>
          ${s?"":`
          <button class="mcm-sync-toggle text-[10px] font-semibold px-1.5 py-0.5 rounded-lg flex-shrink-0 ${o.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-300 hover:bg-gray-100 hover:text-gray-500"}"
            data-colid="${o.id}"
            title="${o.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}">🔄</button>`}
          ${x?'<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>':`<button class="mcm-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${o.id}" title="ลบคอลัมน์${a?"ซ้ำ":""}">🗑</button>`}
        </div>`},g=o=>`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-100 bg-amber-50/40">
          <input type="text" class="mcm-bonus-name flex-1 text-xs text-amber-800 bg-transparent border-b border-transparent focus:border-amber-300 focus:outline-none px-0.5 min-w-0"
            value="${(o.assignment_name||"").replace(/"/g,"&quot;")}" data-bonusid="${o.id}" />
          <span class="text-[11px] text-amber-400 flex-shrink-0">${o.max_score?"/"+o.max_score:"∞"}</span>
          <button class="mcm-bonus-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${o.id}" title="ลบคอลัมน์">🗑</button>
        </div>`,f=o=>{var b,s;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-teal-100 bg-teal-50/40">
          <span class="flex-1 text-xs text-teal-800 truncate">${de(o.assignment_name||"—")}</span>
          <span class="text-[10px] text-teal-500 flex-shrink-0 truncate max-w-[90px]" title="เชื่อมกับ: ${de(((b=Me[o.link_column_id])==null?void 0:b.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗 ${de(((s=Me[o.link_column_id])==null?void 0:s.assignment_name)??"—")}</span>
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
          ${V.length<5||Y.length<5?`
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
            <div class="mcm-col-list space-y-1.5">${V.map(o=>n(o,V)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${Y.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${Y.map(o=>n(o,Y)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-600 text-sm">⭐ คะแนนพิเศษ (Bonus) <span class="font-normal text-gray-400">(${X.length} คอลัมน์)</span></h4>
            </div>
            <div id="mcm-bonus-list" class="space-y-1.5">${X.map(g).join("")}</div>
            <button id="mcm-add-bonus" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-amber-200 text-amber-500 hover:border-amber-400 hover:bg-amber-50 text-sm transition-colors">＋ เพิ่มคอลัมน์พิเศษ</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-teal-700 text-sm">🔄 ปรับคะแนน <span class="font-normal text-gray-400">(${ce.length} คอลัมน์)</span></h4>
            </div>
            <p class="text-[11px] text-gray-400 mb-1.5">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</p>
            <div id="mcm-override-list" class="space-y-1.5">${ce.map(f).join("")}</div>
            <button id="mcm-add-override" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-teal-200 text-teal-600 hover:border-teal-400 hover:bg-teal-50 text-sm transition-colors">＋ เพิ่มคอลัมน์ปรับคะแนน</button>
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#mcm-close").addEventListener("click",()=>t.remove());const d=(o,b)=>{var a;(a=document.getElementById("mcm-del-confirm"))==null||a.remove();const s=document.createElement("div");s.id="mcm-del-confirm",s.className="fixed inset-0 z-[700] flex items-center justify-center p-6",s.style.background="rgba(0,0,0,0.5)",s.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">🗑️</div>
            <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">${o}</p>
            <div class="flex gap-3">
              <button id="mcm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="mcm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition">ลบเลย</button>
            </div>
          </div>`,document.body.appendChild(s),s.querySelector("#mcm-conf-no").addEventListener("click",()=>s.remove()),s.querySelector("#mcm-conf-yes").addEventListener("click",()=>{s.remove(),b()})},I=()=>{t.querySelectorAll(".mcm-col-list").forEach((o,b)=>{const s=b===0?V:Y;o.innerHTML=s.map(a=>n(a,s)).join("")}),B()},B=()=>{var b;t.querySelectorAll(".mcm-move").forEach(s=>{s.addEventListener("click",async()=>{if(s.disabled)return;const a=parseInt(s.dataset.colid),x=s.dataset.dir,m=V.findIndex(Ee=>Ee.id===a)!==-1?V:Y,N=m.findIndex(Ee=>Ee.id===a),H=x==="up"?N-1:N+1;if(H<0||H>=m.length||J(m[H]))return;const F=m[N],Z=m[H];m[N]=Z,m[H]=F;const $e=F.sort_order??(N+1)*10,be=Z.sort_order??(H+1)*10;F.sort_order=be,Z.sort_order=$e,await Ft([{id:F.id,sort_order:be},{id:Z.id,sort_order:$e}]),Se(),I()})}),t.querySelectorAll(".mcm-sync-toggle").forEach(s=>{s.addEventListener("click",()=>{const a=parseInt(s.dataset.colid),x=[...V,...Y].find(H=>H.id===a);if(!x)return;const m=!x.auto_attendance_sync,N=async()=>{try{await Gt(a,m),x.auto_attendance_sync=m,p(m?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้านี้ ✅":"ปิดใช้งานแล้ว","success"),I()}catch{p("บันทึกไม่สำเร็จ","error")}};m?d(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${x.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้าบันทึกคะแนน — คนที่เคยแก้คะแนนด้วยมือไว้ก่อนจะไม่ถูกทับ</span>`,N):N()})}),t.querySelectorAll(".mcm-del").forEach(s=>{s.addEventListener("click",()=>{const a=parseInt(s.dataset.colid),x=[...V,...Y].find(N=>N.id===a),m=kt.has(a);if(J(a)&&!m){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้","warning");return}d(m?`คอลัมน์นี้เป็น <span class="font-semibold">คอลัมน์ซ้ำ</span> ของ "${(x==null?void 0:x.assignment_name)||""}" (เกิดจากระบบสร้างคอลัมน์ซ้ำผิดพลาด)<br/><span class="text-xs text-gray-500">คะแนนของคอลัมน์นี้เป็นค่าที่ระบบเติมอัตโนมัติ ลบได้อย่างปลอดภัย — ระบบจะเติมคะแนนกลับให้ถูกต้องในคอลัมน์ที่เหลือของรอบถัดไป</span>`:`ต้องการลบ <span class="font-semibold">"${(x==null?void 0:x.assignment_name)||"คอลัมน์นี้"}"</span> ใช่ไหม?<br/><span class="text-xs text-red-500">คะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย</span>`,async()=>{var N,H;try{await Ve(a);const F=V.findIndex(be=>be.id===a),Z=Y.findIndex(be=>be.id===a);F!==-1&&V.splice(F,1),Z!==-1&&Y.splice(Z,1),p("ลบคอลัมน์แล้ว ✅","success"),Se();const $e=t.querySelector(".overflow-auto");$e&&((H=(N=$e.querySelector(".space-y-1\\.5"))==null?void 0:N.remove)==null||H.call(N),t.querySelectorAll(".mcm-col-list").forEach((be,Ee)=>{const Ce=Ee===0?V:Y;be.innerHTML=Ce.map(_e=>n(_e,Ce)).join("")}),B())}catch{p("ลบไม่สำเร็จ","error")}})})});const o=()=>{const s=[...t.querySelectorAll(".mcm-cb:checked")],a=t.querySelector("#mcm-bulk-bar");if(a){a.classList.toggle("hidden",s.length===0);const x=a.querySelector("#mcm-bulk-count");x&&(x.textContent=`เลือก ${s.length} รายการ`)}};t.querySelectorAll(".mcm-cb").forEach(s=>s.addEventListener("change",o)),(b=t.querySelector("#mcm-bulk-del"))==null||b.addEventListener("click",()=>{const s=[...t.querySelectorAll(".mcm-cb:checked")];if(!s.length)return;const a=s.map(x=>{const m=[...V,...Y].find(N=>N.id===parseInt(x.dataset.colid));return(m==null?void 0:m.assignment_name)??`ID ${x.dataset.colid}`}).join(", ");d(`ลบ ${s.length} คอลัมน์:<br/><span class="font-semibold text-sm">${a}</span>`,async()=>{try{for(const x of s){const m=parseInt(x.dataset.colid);await Ve(m);const N=V.findIndex(F=>F.id===m),H=Y.findIndex(F=>F.id===m);N!==-1&&V.splice(N,1),H!==-1&&Y.splice(H,1)}p(`ลบ ${s.length} คอลัมน์แล้ว ✅`,"success"),Se(),t.querySelectorAll(".mcm-col-list").forEach((x,m)=>{x.innerHTML=(m===0?V:Y).map(n).join("")}),B()}catch{p("ลบไม่สำเร็จ","error")}})})};B();const S=()=>{t.querySelectorAll(".mcm-bonus-name").forEach(o=>{o.addEventListener("blur",async()=>{const b=parseInt(o.dataset.bonusid),s=o.value.trim();if(s)try{await Ge(b,{assignment_name:s});const a=X.find(x=>x.id===b);a&&(a.assignment_name=s),Se()}catch{p("บันทึกไม่สำเร็จ","error")}}),o.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),o.blur())})}),t.querySelectorAll(".mcm-bonus-del").forEach(o=>{o.addEventListener("click",()=>{const b=parseInt(o.dataset.colid),s=X.find(a=>a.id===b);d(`ลบคอลัมน์พิเศษ <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Ve(b);const a=X.findIndex(m=>m.id===b);a!==-1&&X.splice(a,1),p("ลบคอลัมน์พิเศษแล้ว ✅","success"),Se();const x=t.querySelector("#mcm-bonus-list");x&&(x.innerHTML=X.map(g).join(""),S())}catch{p("ลบไม่สำเร็จ","error")}})})})};S();const e=()=>{t.querySelectorAll(".mcm-override-del").forEach(o=>{o.addEventListener("click",()=>{const b=parseInt(o.dataset.colid),s=ce.find(a=>a.id===b);d(`ลบคอลัมน์ปรับคะแนน <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย (คะแนนในคอลัมน์หลักที่เคยปรับไปแล้วจะไม่ถูกย้อนกลับ)</span>`,async()=>{try{await Ve(b);const a=ce.findIndex(m=>m.id===b);a!==-1&&ce.splice(a,1),p("ลบคอลัมน์ปรับคะแนนแล้ว ✅","success"),Se();const x=t.querySelector("#mcm-override-list");x&&(x.innerHTML=ce.map(f).join(""),e())}catch{p("ลบไม่สำเร็จ","error")}})})})};e(),(C=t.querySelector("#mcm-add-override"))==null||C.addEventListener("click",()=>{var s;(s=document.getElementById("quick-add-override-mcm"))==null||s.remove();const o=Re,b=document.createElement("div");b.id="quick-add-override-mcm",b.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",b.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-teal-700">🔄 เพิ่มคอลัมน์ปรับคะแนน</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qom-name" type="text" placeholder="เช่น คะแนนสอบปรับ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">เชื่อมกับคอลัมน์หลัก <span class="text-red-400">*</span></label>
              <select id="qom-link" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-200">
                <option value="">— เลือกคอลัมน์ —</option>
                ${o.map(a=>`<option value="${a.id}">${de(a.assignment_name)} (${de(a.assignment_type??"—")} · เต็ม ${a.max_score??"—"})</option>`).join("")}
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">วิธีปรับคะแนน</label>
              <select id="qom-mode" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-200">
                <option value="max">ใช้คะแนนที่มากกว่า (เขียนทับเฉพาะตอนคะแนนใหม่สูงกว่า)</option>
                <option value="add">บวกเพิ่มจากคะแนนตั้งต้น (คะแนนใหม่ = คะแนนตั้งต้น + คอลัมน์นี้เสมอ)</option>
              </select>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qom-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qom-save" class="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(b),b.querySelector("#qom-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#qom-name").focus(),b.querySelector("#qom-save").addEventListener("click",async()=>{const a=b.querySelector("#qom-name").value.trim(),x=Number(b.querySelector("#qom-link").value)||null,m=b.querySelector("#qom-mode").value==="add"?"add":"max";if(!a){p("กรุณากรอกชื่อคอลัมน์","warning");return}if(!x){p("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const N=o.find(F=>F.id===x),H=b.querySelector("#qom-save");H.disabled=!0,H.textContent="⏳";try{await Le({class_id:i.id,assignment_name:a,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:(N==null?void 0:N.max_score)??null,column_type:"override",link_column_id:x,override_mode:m}),b.remove(),t.remove(),Ae(y,i),p(`เพิ่ม "${a}" แล้ว ✅`,"success")}catch(F){p("เพิ่มไม่สำเร็จ: "+me(F),"error"),H.disabled=!1,H.textContent="เพิ่ม"}})}),(E=t.querySelector("#mcm-add-bonus"))==null||E.addEventListener("click",()=>{var b;(b=document.getElementById("quick-add-bonus-mcm"))==null||b.remove();const o=document.createElement("div");o.id="quick-add-bonus-mcm",o.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",o.innerHTML=`
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
          </div>`,document.body.appendChild(o),o.querySelector("#qbm-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#qbm-name").focus(),o.querySelector("#qbm-save").addEventListener("click",async()=>{const s=o.querySelector("#qbm-name").value.trim(),a=o.querySelector("#qbm-max").value?parseFloat(o.querySelector("#qbm-max").value):null;if(!s){p("กรุณากรอกชื่อคอลัมน์","warning");return}const x=o.querySelector("#qbm-save");x.disabled=!0,x.textContent="⏳";try{const m=await Le({class_id:i.id,assignment_name:s,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:a,column_type:"bonus",formula:null,formula_refs:[]});o.remove(),t.remove(),Ae(y,i),p(`เพิ่ม "${s}" แล้ว ✅`,"success")}catch(m){p("เพิ่มไม่สำเร็จ: "+me(m),"error"),x.disabled=!1,x.textContent="เพิ่ม"}})}),t.querySelectorAll(".mcm-add").forEach(o=>{o.addEventListener("click",()=>{t.remove(),Ot(i,o.dataset.type,()=>Ae(y,i))})}),(G=t.querySelector("#mcm-fill-default"))==null||G.addEventListener("click",async()=>{const o=t.querySelector("#mcm-fill-default");o.disabled=!0,o.textContent="กำลังสร้าง...";try{const b=Math.max(0,5-V.length),s=Math.max(0,5-Y.length),a=(x,m)=>Le({class_id:i.id,assignment_name:`คะแนนที่ ${m}`,max_score:20,assignment_type:x,sheet_column:""});for(let x=1;x<=b;x++)await a("midterm",V.length+x);for(let x=1;x<=s;x++)await a("final",Y.length+x);t.remove(),Ae(y,i)}catch{p("สร้างคอลัมน์ไม่สำเร็จ","error"),o.disabled=!1,o.textContent="เติมให้ครบ"}})},Xt=t=>{if(!Je)return'<td class="border border-sky-100 text-center text-gray-300 text-[10px]">—</td>';const n=ye[t];return n?'<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold '+n.cls+'" id="gread-'+t+'">'+n.label+"</td>":'<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-'+t+'">—</td>'},Zt=t=>{const n=new Date(t);return`${n.getDate()}/${n.getMonth()+1} ${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}`},Dt=(t,n,g,f)=>{var e;if((e=document.getElementById("score-hist-popup"))==null||e.remove(),!(f!=null&&f.length))return;let d="",I=0;f.forEach((l,C)=>{I+=l.d,C===0?d+=String(l.d):d+=l.d>=0?` + ${l.d}`:` − ${Math.abs(l.d)}`}),d+=` = ${Math.round(I*1e3)/1e3}`;const B=L.find(l=>l.id===t),S=document.createElement("div");S.id="score-hist-popup",S.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",S.style.background="rgba(0,0,0,0.4)",S.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
            <p class="font-bold text-indigo-700 text-sm">ประวัติคะแนน — ${de(g)}</p>
            <p class="text-xs text-indigo-400">${de((B==null?void 0:B.full_name)??"")}</p>
          </div>
          <div class="p-4">
            <div class="space-y-1 mb-3 max-h-44 overflow-y-auto">
              ${f.map(l=>`
                <div class="flex justify-between items-center text-xs py-1 border-b border-gray-50">
                  <span class="text-gray-400">${Zt(l.at)}</span>
                  <span class="font-semibold ${l.d>=0?"text-emerald-600":"text-rose-600"}">${l.d>=0?"+":""}${l.d}</span>
                </div>`).join("")}
            </div>
            <div class="bg-indigo-50 rounded-xl px-3 py-2 text-xs font-mono text-indigo-700 text-center">${d}</div>
          </div>
          <div class="px-5 pb-4 flex gap-2">
            <button id="hist-reset" class="flex-1 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs hover:bg-rose-50 transition">รีเซ็ตประวัติ</button>
            <button id="hist-close" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ปิด</button>
          </div>
        </div>`,document.body.appendChild(S),S.querySelector("#hist-close").addEventListener("click",()=>S.remove()),S.querySelector("#hist-reset").addEventListener("click",async()=>{var C,E,G,o,b;const l=(E=(C=O[t])==null?void 0:C[n])==null?void 0:E.final;if(l==null){S.remove();return}try{const s=await xt(i.id,t,n,l,{});if(s){O[t]||(O[t]={}),O[t][n]={orig:((G=s.history[0])==null?void 0:G.d)??s.final,retake:null,final:s.final,history:s.history};const a=document.getElementById("grade-grid-wrap"),x=a==null?void 0:a.querySelector(`.grade-input[data-sid="${t}"][data-col="${n}"]`);x&&(x.value=s.final!==null?String(s.final):""),(b=(o=x==null?void 0:x.closest("td"))==null?void 0:o.querySelector(".hist-indicator"))==null||b.remove(),p("รีเซ็ตประวัติแล้ว","success"),await _applyOverrideIfNeeded(t,n)}}catch{p("ไม่สำเร็จ","error")}S.remove()}),S.addEventListener("click",l=>{l.target===S&&S.remove()})},en=(t,n,g)=>{var B;(B=document.getElementById("mass-score-popup"))==null||B.remove();const f=document.createElement("div");f.id="mass-score-popup",f.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",f.style.background="rgba(0,0,0,0.4)",f.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div class="bg-blue-50 px-5 py-3 border-b border-blue-100">
            <p class="font-bold text-blue-700 text-sm">ตั้งคะแนนทั้งห้อง</p>
            <p class="text-xs text-blue-400">${de(n)}${g?" (เต็ม "+g+")":""}</p>
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
        </div>`,document.body.appendChild(f);const d=f.querySelector("#mass-inp"),I=f.querySelector("#mass-preview");d.addEventListener("input",()=>{const S=d.value.trim();if(!S){I.textContent="";return}const e=parseFloat(S);if(isNaN(e)){I.textContent="";return}I.textContent=/^[+-]/.test(S)?`บวก/ลบ ${e>=0?"+":""}${e} ใน ${L.length} คน`:`ตั้งเป็น ${e} ใน ${L.length} คน`}),f.querySelector("#mass-cancel").addEventListener("click",()=>f.remove()),f.querySelector("#mass-confirm").addEventListener("click",async()=>{var G,o,b,s;const S=d.value.trim();if(!S){f.remove();return}const e=f.querySelector("#mass-confirm");e.disabled=!0,e.textContent="⏳";let l=0,C=0,E=0;for(const a of L){const x=((o=(G=O[a.id])==null?void 0:G[t])==null?void 0:o.history)??[];try{const m=await xt(i.id,a.id,t,S,{currentHistory:x,max:g??null});if(m){m.clamped&&E++,O[a.id]||(O[a.id]={}),O[a.id][t]={orig:((b=m.history[0])==null?void 0:b.d)??m.final,retake:null,final:m.final,history:m.history};const N=document.getElementById("grade-grid-wrap"),H=N==null?void 0:N.querySelector(`.grade-input[data-sid="${a.id}"][data-col="${t}"]`);H&&(H.value=m.final!==null?String(m.final):"",H.style.boxShadow="0 0 0 2px #059669",setTimeout(()=>H.style.boxShadow="",700));const F=H==null?void 0:H.closest("td");if(m.history.length>1){if(!(F!=null&&F.querySelector(".hist-indicator"))){const Z=document.createElement("span");Z.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl",Z.textContent="Δ",Z.dataset.sid=a.id,Z.dataset.col=t,F==null||F.appendChild(Z)}}else(s=F==null?void 0:F.querySelector(".hist-indicator"))==null||s.remove();l++,await _applyOverrideIfNeeded(a.id,t)}}catch{C++}}L.forEach(a=>{var He;const{midRaw:x,finRaw:m,total:N,grade:H,khuna:F}=Ue(a.id),Z=((He=O[a.id])==null?void 0:He.__force)??"",$e=document.getElementById(`gmid-${a.id}`),be=document.getElementById(`gfin-${a.id}`);$e&&($e.textContent=x>0?he("mid_subtotal",x,1):"—"),be&&(be.textContent=m>0?he("fin_subtotal",m,1):"—");const Ee=document.getElementById(`gtotal-${a.id}`),Ce=document.getElementById(`ggrade-${a.id}`),_e=document.getElementById(`gkhuna-${a.id}`);Ee&&(Ee.textContent=N>0?N:"—"),Ce&&(Ce.textContent=Z||(H>0?H.toFixed(1):"0")),_e&&(_e.textContent=F.label,_e.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${F.cls}`)}),p(`ตั้งคะแนนสำเร็จ ${l}/${L.length} คน${E?" (ปรับ "+E+" คนที่เกินคะแนนเต็มอัตโนมัติ)":""}${C?" (ล้มเหลว "+C+")":""}`,l>0?"success":"error"),f.remove()}),f.addEventListener("click",S=>{S.target===f&&f.remove()}),setTimeout(()=>d.focus(),60)},Se=()=>{var S;const t=ke(V),n=ke(Y),g=document.getElementById("grade-grid-wrap");if(!g)return;const f=`
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${wt} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${rt} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${rt} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${$t}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${V.length+1}" class="${re} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${t>0?" (เต็ม "+t+")":""}</th>
          <th colspan="${Y.length+1}" class="${re} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${n>0?" (เต็ม "+n+")":""}</th>
          ${ve.length?`<th colspan="${ve.length}" class="${re} bg-indigo-600 text-white font-semibold py-1.5">🧮 อ้างอิงสูตร</th>`:""}
          ${ce.length?`<th colspan="${ce.length}" class="${re} bg-teal-600 text-white font-semibold py-1.5">🔄 ปรับคะแนน</th>`:""}
          ${M?`<th colspan="${X.length+1}" class="${re} bg-amber-500 text-white font-semibold py-1.5">⭐ คะแนนเก็บ/พิเศษ</th>`:""}
          <th class="${re} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${t+n+ve.reduce((e,l)=>e+(parseFloat(l.max_score)||0),0)||"?"}</div></th>
          <th class="${re} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${we?`<th class="${re} bg-rose-50 text-rose-600 text-xs" style="min-width:32px;width:32px" rowspan="3"><div class="text-[9px] font-semibold leading-tight">บัง<br/>คับ</div></th>`:""}
          <th class="${re} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ${Ye?"":'<div class="text-[9px] font-normal text-emerald-300">ปิดอยู่</div>'}</th>
          <th class="${re} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">${Je?"ผลประเมิน":"ปิดอยู่"}</div></th>
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${V.map(e=>`<th class="${re} bg-blue-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${J(e)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-blue-600 cursor-pointer hover:bg-blue-100"}"
                data-colid="${e.id}" title="${J(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${de(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${J(e)?"":`<button class="btn-scan-col text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${ne?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${e.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${e.id}" title="${e.bonus_formula?"🔗 = "+e.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${re} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${Y.map(e=>`<th class="${re} bg-purple-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${J(e)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-purple-600 cursor-pointer hover:bg-purple-100"}"
                data-colid="${e.id}" title="${J(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${de(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${J(e)?"":`<button class="btn-scan-col text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${ne?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${e.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${e.id}" title="${e.bonus_formula?"🔗 = "+e.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${re} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
          ${ve.map(e=>`<th class="${re} bg-indigo-50" style="width:${ee}px;min-width:${ee}px">
            <span class="text-[10px] text-indigo-400 font-mono block text-center truncate" title="${e.formula??""}">${e.formula??"—"}</span>
          </th>`).join("")}
          ${ce.map(e=>{var l;return`<th class="${re} bg-teal-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[10px] text-teal-500 flex-1 text-center truncate" title="เชื่อมกับ: ${de(((l=Me[e.link_column_id])==null?void 0:l.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗</span>
              <button class="btn-mass-score text-teal-300 hover:text-teal-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${de(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
            </div>
          </th>`}).join("")}
          ${M?X.map(e=>`<th class="${re} bg-amber-50" style="width:${ee}px;min-width:${ee}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[11px] text-amber-500 flex-1 text-center">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${de(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${J(e)?"":`<button class="btn-scan-col text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
            </div>
          </th>`).join(""):""}
          ${M?`<th class="${re} bg-amber-50" style="width:30px">
            <button class="btn-add-bonus text-amber-500 hover:bg-amber-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block">＋</button></th>`:""}
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${V.map(e=>`<th class="${re} bg-blue-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${J(e)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-blue-50"}"
              contenteditable="${J(e)?"false":"true"}" data-colid="${e.id}" data-field="assignment_name" title="${J(e)?W(e):""}">${e.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${J(e)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-blue-500 hover:underline"}"
              data-colid="${e.id}" title="${J(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${e.max_score||0}</span></span>
            ${e.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${re} bg-blue-50" style="width:30px"></th>
          ${Y.map(e=>`<th class="${re} bg-purple-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${J(e)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-purple-50"}"
              contenteditable="${J(e)?"false":"true"}" data-colid="${e.id}" data-field="assignment_name" title="${J(e)?W(e):""}">${e.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${J(e)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-purple-500 hover:underline"}"
              data-colid="${e.id}" title="${J(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${e.max_score||0}</span></span>
            ${e.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${re} bg-purple-50" style="width:30px"></th>
          ${ve.map(e=>`<th class="${re} bg-indigo-50" style="width:${ee}px;min-width:${ee}px">
            <span class="text-[11px] text-indigo-700 font-medium block text-center truncate">${e.assignment_name}</span>
            <span class="text-[10px] text-indigo-400">/${e.max_score??"?"}</span>
          </th>`).join("")}
          ${ce.map(e=>`<th class="${re} bg-teal-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-teal-700 cursor-text hover:bg-teal-100"
              contenteditable="true" data-colid="${e.id}" data-field="assignment_name">${e.assignment_name||"—"}</span>
            <span class="text-[10px] text-teal-400">/${e.max_score??"?"}</span>
          </th>`).join("")}
          ${M?X.map(e=>`<th class="${re} bg-amber-50" style="width:${ee}px;min-width:${ee}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-amber-700 cursor-text hover:bg-amber-100"
              contenteditable="true" data-colid="${e.id}" data-field="assignment_name">${e.assignment_name||"—"}</span>
            <span class="text-[10px] text-amber-400">${e.max_score?"/"+e.max_score:"(ไม่จำกัด)"}</span>
          </th>`).join(""):""}
          ${M?`<th class="${re} bg-amber-50" style="width:30px"></th>`:""}
        </tr>`,d=L.map((e,l)=>{var x;const{midRaw:C,finRaw:E,total:G,grade:o,khuna:b}=Ue(e.id),s=((x=O[e.id])==null?void 0:x.__force)??"",a=s||(o>0?o.toFixed(1):"0");return`<tr class="hover:bg-gray-50 transition" data-sid="${e.id}">
          <td class="${wt} text-center text-gray-400" style="width:28px">${l+1}</td>
          <td class="${rt} text-center font-mono text-gray-600" style="left:28px;width:64px">${e.student_code}</td>
          <td class="${rt} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${$t}px" data-idx="${l}">
            <div class="flex items-center gap-1.5 py-1">
              ${e.image_url?`<img src="${e.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${e.full_name}</span>
            </div>
          </td>
          ${V.map(m=>{const N=ae(e.id,m.id)??"",H=xe(e.id,m.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${J(m)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Pe(m.id,N)}" placeholder="—"
              data-sid="${e.id}" data-col="${m.id}" data-max="${m.max_score}" ${J(m)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${H?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gmid-${e.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${C>0?he("mid_subtotal",C,1):"—"}</td>
          ${Y.map(m=>{const N=ae(e.id,m.id)??"",H=xe(e.id,m.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${J(m)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Pe(m.id,N)}" placeholder="—"
              data-sid="${e.id}" data-col="${m.id}" data-max="${m.max_score}" ${J(m)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${H?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gfin-${e.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${E>0?he("fin_subtotal",E,1):"—"}</td>
          ${ve.map(m=>{const N=ot(m,e.id),H=N!==null&&N!==0?he(`derived_${m.id}`,N,2):"—";return`<td class="border border-indigo-100 bg-indigo-50/40 text-center text-xs text-indigo-700 font-medium grade-derived-td" style="width:${ee}px;min-width:${ee}px;height:30px" title="คำนวณจาก: ${m.formula??""}">${H}</td>`}).join("")}
          ${ce.map(m=>{const N=ae(e.id,m.id)??"",H=xe(e.id,m.id);return`<td class="border border-teal-100 text-center p-0 relative" style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-teal-50 focus:outline-none focus:ring-1 focus:ring-teal-300 focus:rounded"
              type="text" inputmode="decimal" value="${Pe(m.id,N)}" placeholder="—"
              data-sid="${e.id}" data-col="${m.id}" data-max="${m.max_score??9999}"/>
            ${H?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          ${M?X.map(m=>{const N=ae(e.id,m.id)??"",H=xe(e.id,m.id);return`<td class="border border-amber-100 text-center p-0 relative" style="width:${ee}px;min-width:${ee}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-300 focus:rounded"
              type="text" inputmode="decimal" value="${Pe(m.id,N)}" placeholder="—"
              data-sid="${e.id}" data-col="${m.id}" data-max="${m.max_score??9999}"/>
            ${H?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join(""):""}
          ${M?'<td class="border border-amber-50 bg-amber-50/30" style="width:30px;height:30px"></td>':""}
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${e.id}" style="min-width:58px">${G>0?G:"—"}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${e.id}" style="min-width:50px">${a}</td>
          ${we?`<td class="border border-rose-100 text-center bg-rose-50 cursor-pointer hover:bg-rose-100 transition force-cell" style="min-width:32px;height:30px" data-sid="${e.id}">
            <span class="text-xs font-bold ${s?"text-rose-600":"text-rose-200"}">${s||"+"}</span></td>`:""}
          <td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${Ye?b.cls:"text-gray-300"}" id="gkhuna-${e.id}">${Ye?b.label:"—"}</td>
          ${Xt(e.id)}
        </tr>`}).join("");g.innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${f}</thead><tbody>${d}</tbody></table>`;const I=g.querySelector("table"),B=async(e,l)=>{var _e,He,lt,qe,et;const C=Me[l];if(!C||C.column_type!=="override"||!C.link_column_id)return;const E=(He=(_e=O[e])==null?void 0:_e[l])==null?void 0:He.final;if(E==null)return;const G=C.link_column_id,o=(lt=Me[G])==null?void 0:lt.max_score,b=await mn({studentId:e,mainColumnId:G,overrideValue:E,overrideMode:C.override_mode,mainMaxScore:typeof o=="number"?o:null});if(!b.applied)return;O[e][G]={orig:((qe=b.history[0])==null?void 0:qe.d)??b.score,retake:null,final:b.score,history:b.history};const s=g.querySelector(`.grade-input[data-sid="${e}"][data-col="${G}"]`);s&&(s.value=b.score!==null?String(Pe(G,b.score)):"",s.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",s.style.background="#f0fdf4",setTimeout(()=>{s.style.boxShadow="",s.style.background=""},900));const{midRaw:a,finRaw:x,total:m,grade:N,khuna:H}=Ue(e),F=((et=O[e])==null?void 0:et.__force)??"",Z=document.getElementById(`gmid-${e}`),$e=document.getElementById(`gfin-${e}`);Z&&(Z.textContent=a>0?he("mid_subtotal",a,1):"—"),$e&&($e.textContent=x>0?he("fin_subtotal",x,1):"—");const be=document.getElementById(`gtotal-${e}`),Ee=document.getElementById(`ggrade-${e}`),Ce=document.getElementById(`gkhuna-${e}`);be&&(be.textContent=m>0?m:"—"),Ee&&(Ee.textContent=F||(N>0?N.toFixed(1):"0")),Ce&&(Ce.textContent=H.label,Ce.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${H.cls}`),p(`ปรับคะแนนอัตโนมัติ → ${b.score} (จากคอลัมน์ปรับคะแนน) ✅`,"success")};I.addEventListener("change",async e=>{var E,G,o,b,s,a,x,m,N,H;const l=e.target.closest(".grade-input"),C=e.target.closest(".force-input");if(l){const F=parseInt(l.dataset.sid),Z=parseInt(l.dataset.col),$e=parseFloat(l.dataset.max);if(J(Z)){p("คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้","warning"),l.value=((G=(E=O[F])==null?void 0:E[Z])==null?void 0:G.final)??"";return}let be=l.value.trim();const Ee=((b=(o=O[F])==null?void 0:o[Z])==null?void 0:b.history)??[];O[F]||(O[F]={}),l.style.outline="2px solid #6366f1",l.style.outlineOffset="1px",(s=document.getElementById("grade-saving"))==null||s.classList.remove("hidden");try{const Ce=await xt(i.id,F,Z,be===""?null:be,{currentHistory:Ee,max:isNaN($e)?null:$e});if(!Ce){l.value=((a=O[F][Z])==null?void 0:a.final)??"";return}const{final:_e,history:He,clamped:lt}=Ce;O[F][Z]={orig:((x=He[0])==null?void 0:x.d)??_e,retake:null,final:_e,history:He},l.value=_e!==null?String(_e):"",l.title="",lt&&p(`คะแนนเกินคะแนนเต็ม ปรับให้เป็น ${_e} อัตโนมัติ`,"warning");const qe=l.closest("td");if(He.length>1){if(!(qe!=null&&qe.querySelector(".hist-indicator"))){const Xe=document.createElement("span");Xe.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none",Xe.textContent="Δ",Xe.dataset.sid=F,Xe.dataset.col=Z,Xe.title="ดูประวัติคะแนน",qe==null||qe.appendChild(Xe)}}else(m=qe==null?void 0:qe.querySelector(".hist-indicator"))==null||m.remove();l.style.outline="",l.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",l.style.background="#f0fdf4",setTimeout(()=>{l.style.boxShadow="",l.style.background=""},900);const{midRaw:et,finRaw:St,total:Ct,grade:qt,khuna:Lt}=Ue(F),tn=((N=O[F])==null?void 0:N.__force)??"",It=document.getElementById(`gmid-${F}`),Bt=document.getElementById(`gfin-${F}`);It&&(It.textContent=et>0?he("mid_subtotal",et,1):"—"),Bt&&(Bt.textContent=St>0?he("fin_subtotal",St,1):"—");const jt=document.getElementById(`gtotal-${F}`),Mt=document.getElementById(`ggrade-${F}`),mt=document.getElementById(`gkhuna-${F}`);jt&&(jt.textContent=Ct>0?Ct:"—"),Mt&&(Mt.textContent=tn||(qt>0?qt.toFixed(1):"0")),mt&&(mt.textContent=Lt.label,mt.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${Lt.cls}`),await B(F,Z)}catch{p("บันทึกไม่สำเร็จ","error")}finally{(H=document.getElementById("grade-saving"))==null||H.classList.add("hidden")}}}),I.addEventListener("input",e=>{var a,x;const l=e.target.closest(".grade-input");if(!l)return;const C=l.value.trim();if(!/^[+-]/.test(C)){l.title="";return}const E=parseInt(l.dataset.sid),G=parseInt(l.dataset.col),o=((x=(a=O[E])==null?void 0:a[G])==null?void 0:x.final)??0,b=parseFloat(C);if(isNaN(b)){l.title="";return}const s=Math.round((o+b)*1e3)/1e3;l.title=`${o} ${b>=0?"+":"−"} ${Math.abs(b)} = ${s}`}),I.addEventListener("click",e=>{var G,o;const l=e.target.closest(".hist-indicator");if(l){const b=parseInt(l.dataset.sid),s=parseInt(l.dataset.col),a=((o=(G=O[b])==null?void 0:G[s])==null?void 0:o.history)??[],x=[...V,...Y,...X].find(m=>m.id===s);Dt(b,s,(x==null?void 0:x.assignment_name)??"",a);return}const C=e.target.closest(".btn-mass-score");if(C){en(parseInt(C.dataset.colid),C.dataset.colname,C.dataset.max?parseFloat(C.dataset.max):null);return}const E=e.target.closest(".btn-scan-col");if(E){Rt({classId:i.id,className:i.class_name,initialColumnId:parseInt(E.dataset.colid)});return}}),I.addEventListener("click",e=>{var b,s;const l=e.target.closest(".force-cell");if(!l)return;const C=parseInt(l.dataset.sid);(b=document.getElementById("force-grade-popup"))==null||b.remove();const E=((s=O[C])==null?void 0:s.__force)??"",G=document.createElement("div");G.id="force-grade-popup",G.className="fixed inset-0 z-[400] flex items-end sm:items-center justify-center p-4",G.style.background="rgba(0,0,0,0.4)";const o=L.find(a=>a.id===C);G.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div class="bg-rose-50 px-5 py-3 border-b border-rose-100">
              <p class="font-bold text-rose-700 text-sm">บังคับเกรด</p>
              <p class="text-xs text-rose-400">${(o==null?void 0:o.full_name)??""}</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-4 gap-2 mb-3">
                ${Vt.map(a=>`
                  <button class="force-pick py-2.5 rounded-xl text-sm font-bold border transition
                    ${a===E?"bg-rose-500 text-white border-rose-500":"bg-white text-rose-600 border-rose-200 hover:bg-rose-50"}"
                    data-grade="${a}">${a}</button>`).join("")}
                <button class="force-pick py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 col-span-4"
                  data-grade="">ล้างค่า (ใช้เกรดปกติ)</button>
              </div>
            </div>
          </div>`,document.body.appendChild(G),G.addEventListener("click",async a=>{const x=a.target.closest(".force-pick");if(!x&&a.target===G){G.remove();return}if(!x)return;const m=x.dataset.grade;x.disabled=!0;try{await un(o==null?void 0:o.enrollment_id,m)}catch(Z){p("บันทึกบังคับเกรดไม่สำเร็จ: "+me(Z),"error"),x.disabled=!1;return}O[C]||(O[C]={}),O[C].__force=m,o&&(o.special_result=m||null);const{grade:N}=Ue(C),H=document.getElementById(`ggrade-${C}`);H&&(H.textContent=m||(N>0?N.toFixed(1):"0"));const F=l.querySelector("span");F&&(F.textContent=m||"+",F.className=`text-xs font-bold ${m?"text-rose-600":"text-rose-200"}`),G.remove()})}),I.addEventListener("keydown",e=>{var H,F;const l=e.target.closest(".grade-input");if(!l||!["Tab","Enter","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();const E=[...g.querySelectorAll(".grade-input")],G=[...new Set(E.map(Z=>Z.dataset.sid))],b=[...new Set(E.map(Z=>Z.dataset.col))].length,s=E.indexOf(l),a=Math.floor(s/b),x=s%b;let m=a,N=x;switch(e.key){case"Enter":case"ArrowDown":m=a<G.length-1?a+1:a;break;case"ArrowUp":m=a>0?a-1:0;break;case"Tab":(H=E[s+(e.shiftKey?-1:1)])==null||H.focus();return;case"ArrowRight":N=x<b-1?x+1:x;break;case"ArrowLeft":N=x>0?x-1:0;break}(F=E[m*b+N])==null||F.focus()}),g.querySelectorAll(".col-edit").forEach(e=>{e.addEventListener("blur",async()=>{const l=parseInt(e.dataset.colid),C=e.textContent.trim();if(!J(l))try{await Ge(l,{assignment_name:C||null});const E=[...V,...Y,...X].find(G=>G.id===l);E&&(E.assignment_name=C)}catch{p("บันทึกไม่สำเร็จ","error")}}),e.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),e.blur())})}),g.querySelectorAll(".col-sheet-ref").forEach(e=>{e.addEventListener("click",()=>{const l=parseInt(e.dataset.colid);if(J(l)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}Kt(e,l)})}),g.querySelectorAll(".col-max").forEach(e=>{e.addEventListener("click",()=>{const l=parseInt(e.dataset.colid);if(J(l)){p("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}Yt(e,l)})}),g.querySelectorAll(".btn-add-col").forEach(e=>{e.addEventListener("click",()=>Ot(i,e.dataset.type,()=>Ae(y,i)))}),(S=g.querySelector(".btn-add-bonus"))==null||S.addEventListener("click",()=>{var C;(C=document.getElementById("quick-add-bonus"))==null||C.remove();const e=document.createElement("div");e.id="quick-add-bonus",e.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/40 p-4",e.innerHTML=`
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
          </div>`,document.body.appendChild(e),e.querySelector("#qb-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",E=>{E.target===e&&e.remove()});const l=e.querySelector("#qb-name");l.focus(),e.querySelector("#qb-add").addEventListener("click",async()=>{const E=l.value.trim(),G=e.querySelector("#qb-max").value?parseFloat(e.querySelector("#qb-max").value):null;if(!E){p("กรุณากรอกชื่อคอลัมน์","warning");return}const o=e.querySelector("#qb-add");o.disabled=!0,o.textContent="⏳";try{await Le({class_id:i.id,assignment_name:E,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:G,column_type:"bonus",formula:null,formula_refs:[]}),p(`เพิ่ม "${E}" แล้ว ✅`,"success"),e.remove(),Ae(y,i)}catch(b){p("เพิ่มไม่สำเร็จ: "+me(b),"error"),o.disabled=!1,o.textContent="เพิ่ม"}})}),g.querySelectorAll(".btn-formula-link").forEach(e=>{e.addEventListener("click",()=>{const l=parseInt(e.dataset.colid),C=[...V,...Y].find(E=>E.id===l);C&&Jt(C)})}),g.querySelectorAll(".student-name-cell").forEach(e=>{e.addEventListener("click",()=>{const l=L[parseInt(e.dataset.idx)];Qt(l,O[l.id]??{},Ue(l.id))})})};Ze(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${($==null?void 0:$.subject_name)??"—"} · ${i.class_name} · ${L.length} คน</p>
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
    </div>`),(_=document.getElementById("btn-manage-cols"))==null||_.addEventListener("click",Wt),(R=document.getElementById("btn-copy-cols"))==null||R.addEventListener("click",()=>An(i,r)),(A=document.getElementById("btn-scan-score"))==null||A.addEventListener("click",()=>{Rt({classId:i.id,className:i.class_name})});let ct=!1,We=null;(q=document.getElementById("btn-hide-scores"))==null||q.addEventListener("click",function(){ct=!ct;const t=document.getElementById("grade-grid-wrap");t&&(ct?(We=[],t.querySelectorAll(".grade-input").forEach(n=>{We.push({el:n,type:"input",val:n.value}),n.value=""}),t.querySelectorAll('[id^="gmid-"],[id^="gfin-"],[id^="gtotal-"],[id^="ggrade-"],[id^="gkhuna-"],[id^="gread-"],.grade-derived-td').forEach(n=>{We.push({el:n,type:"text",val:n.innerHTML}),n.innerHTML="—"}),window._pp5HideScores=!0,this.innerHTML='👁 <span class="hidden sm:inline text-xs">แสดงคะแนน</span>',this.classList.add("bg-amber-50","border-amber-300","text-amber-700"),this.classList.remove("text-gray-500","border-gray-200")):(window._pp5HideScores=!1,We&&(We.forEach(({el:n,type:g,val:f})=>{g==="input"?n.value=f:n.innerHTML=f}),We=null),this.innerHTML='👁 <span class="hidden sm:inline text-xs">ซ่อนคะแนน</span>',this.classList.remove("bg-amber-50","border-amber-300","text-amber-700"),this.classList.add("text-gray-500","border-gray-200")))}),at(),Se();let Et=null;tt=Cn(t=>{!ue.some(g=>Number(g.id)===Number(t.columnId))&&Number(t.classId)!==Number(P)||document.getElementById("grade-grid-wrap")&&(clearTimeout(Et),Et=setTimeout(()=>Ae(y,i),120))})}catch(P){p("โหลดข้อมูลไม่สำเร็จ: "+me(P),"error")}}async function An(y,i){var R;p("กำลังโหลด...","info");const $=(await Promise.all((i??[]).filter(A=>A.id!==y.id).map(async A=>{const q=await ge(A.id).catch(()=>[]);return q.length?{...A,cols:q}:null}))).filter(Boolean);if(!$.length){p("ไม่พบห้องอื่นที่มีคอลัมน์คะแนน","info");return}(R=document.getElementById("copy-cols-popup"))==null||R.remove();const _=document.createElement("div");_.id="copy-cols-popup",_.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",_.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
        <div class="text-3xl mb-2">📋</div>
        <h3 class="text-white font-bold text-base">สำเนาคอลัมน์คะแนน</h3>
        <p class="text-indigo-100 text-xs mt-1">เลือกห้องที่ต้องการคัดลอกคอลัมน์จาก</p>
      </div>
      <div class="p-5 space-y-2 max-h-72 overflow-y-auto">
        ${$.map(A=>{var q;return`
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${A.class_name}</p>
            <p class="text-xs text-gray-400">${((q=A.master_subjects)==null?void 0:q.subject_name)??""} · ${A.cols.length} คอลัมน์</p>
          </div>
          <button class="ccp-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            data-src="${A.id}">คัดลอก</button>
        </div>`}).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="ccp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
      </div>
    </div>`,document.body.appendChild(_),_.querySelector("#ccp-close").addEventListener("click",()=>_.remove()),_.querySelectorAll(".ccp-btn").forEach(A=>{A.addEventListener("click",async()=>{var L;const q=$.find(Q=>Q.id===parseInt(A.dataset.src));(L=document.getElementById("ccp-confirm"))==null||L.remove();const P=document.createElement("div");P.id="ccp-confirm",P.className="fixed inset-0 z-[300] flex items-center justify-center p-6",P.style.background="rgba(0,0,0,0.5)",P.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">📋</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการ Mirror</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">
          คอลัมน์ของห้องนี้จะถูกทำให้เหมือน<br/>
          <span class="font-semibold text-indigo-700">${q.class_name}</span><br/>
          <span class="text-xs text-red-500">คอลัมน์ที่ต่างออกไปจะถูกลบหรือเพิ่ม/แก้ไข</span>
        </p>
        <div class="flex gap-3">
          <button id="ccp-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccp-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(P),P.querySelector("#ccp-conf-no").addEventListener("click",()=>P.remove()),P.querySelector("#ccp-conf-yes").addEventListener("click",async()=>{P.remove(),A.disabled=!0,A.textContent="⏳";try{const Q=await ge(y.id).catch(()=>[]),se=Object.fromEntries(q.cols.map(j=>[j.assignment_name,j])),ie=Object.fromEntries(Q.map(j=>[j.assignment_name,j]));for(const j of Q)se[j.assignment_name]||await Ve(j.id).catch(()=>{});for(const j of q.cols)ie[j.assignment_name]?await Ge(ie[j.assignment_name].id,{assignment_type:j.assignment_type,sheet_column:j.sheet_column??"",max_score:j.max_score,assignment_name:j.assignment_name}).catch(()=>{}):await Le({class_id:y.id,assignment_name:j.assignment_name,assignment_type:j.assignment_type,sheet_column:j.sheet_column??"",max_score:j.max_score});p(`Mirror จาก ${q.class_name} สำเร็จ ✅`,"success"),_.remove(),Ae(window._currentGradeTeacher,y)}catch(Q){p("Mirror ไม่สำเร็จ: "+me(Q),"error"),A.disabled=!1,A.textContent="คัดลอก"}})})})}async function Tn(y,i,$){var ie;const _=$.filter(j=>j.course_id===y);if(!_.length){p("ยังไม่มีห้องเรียนในคอร์สนี้","warning");return}p("กำลังโหลด...","info");const R=_[0];let A=await ge(R.id).catch(()=>[]);const q=()=>A.filter(j=>j.assignment_type==="midterm"||j.assignment_type==="กลางภาค"),P=()=>A.filter(j=>j.assignment_type==="final"||j.assignment_type==="ปลายภาค");(ie=document.getElementById("course-cols-modal"))==null||ie.remove();const L=document.createElement("div");L.id="course-cols-modal",L.className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4";const Q=j=>`
    <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/60">
      <input type="checkbox" class="ccm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-name="${de(j.assignment_name)}" />
      <span class="flex-1 text-xs text-gray-700 truncate">${j.assignment_name}</span>
      <span class="text-[11px] text-gray-400">/${j.max_score||0}</span>
      <button class="ccm-del text-gray-300 hover:text-red-400 text-lg px-1 rounded hover:bg-red-50 transition" data-name="${de(j.assignment_name)}">🗑</button>
    </div>`,se=()=>{var r;L.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>
        <div class="px-5 py-4 border-b flex items-start justify-between gap-3 flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ คอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">${i} · sync ${_.length} ห้อง</p>
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
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค <span class="font-normal text-gray-400">(${q().length})</span></h4>
            <div class="space-y-1.5">${q().map(Q).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition" data-type="กลางภาค">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค <span class="font-normal text-gray-400">(${P().length})</span></h4>
            <div class="space-y-1.5">${P().map(Q).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition" data-type="ปลายภาค">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`;const j=(u,k)=>{var K;(K=document.getElementById("ccm-confirm"))==null||K.remove();const v=document.createElement("div");v.id="ccm-confirm",v.className="fixed inset-0 z-[300] flex items-center justify-center p-6",v.style.background="rgba(0,0,0,0.5)",v.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">🗑️</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">${u}</p>
        <div class="flex gap-3">
          <button id="ccm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบเลย</button>
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#ccm-conf-no").addEventListener("click",()=>v.remove()),v.querySelector("#ccm-conf-yes").addEventListener("click",()=>{v.remove(),k()})},z=async u=>{for(const k of _){const v=await ge(k.id).catch(()=>[]);for(const K of u){const h=v.find(D=>D.assignment_name===K);h&&await Ve(h.id).catch(()=>{})}}A=await ge(R.id).catch(()=>[]),p(`ลบสำเร็จ — sync ทุก ${_.length} ห้องแล้ว ✅`,"success"),se()},T=()=>{const u=[...L.querySelectorAll(".ccm-cb:checked")],k=L.querySelector("#ccm-bulk-bar");if(k){k.classList.toggle("hidden",!u.length);const v=k.querySelector("#ccm-bulk-count");v&&(v.textContent=`เลือก ${u.length} รายการ`)}};L.querySelector("#ccm-close").addEventListener("click",()=>L.remove()),L.querySelectorAll(".ccm-cb").forEach(u=>u.addEventListener("change",T)),(r=L.querySelector("#ccm-bulk-del"))==null||r.addEventListener("click",()=>{const k=[...L.querySelectorAll(".ccm-cb:checked")].map(v=>v.dataset.name);j(`ลบ ${k.length} คอลัมน์จากทุกห้อง?<br/><span class="font-semibold text-sm">${k.join(", ")}</span>`,()=>z(k))}),L.querySelectorAll(".ccm-del").forEach(u=>{u.addEventListener("click",()=>{j(`ลบ <span class="font-semibold">"${u.dataset.name}"</span> จากทุก ${_.length} ห้อง?`,()=>z([u.dataset.name]))})}),L.querySelectorAll(".ccm-add").forEach(u=>{u.addEventListener("click",()=>{var D,te;const k=u.dataset.type;(D=document.getElementById("add-col-modal"))==null||D.remove();const v=!!(R!=null&&R.google_sheet_id),K=k==="ปลายภาค"?"purple":"blue",h=document.createElement("div");h.id="add-col-modal",h.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",h.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${k}</h3>
          <p class="text-xs text-gray-400 mb-4">จะเพิ่มใน <b>ทุก ${_.length} ห้อง</b> ของ ${i}</p>
          <div class="space-y-3">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
              <input id="acol2-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${K}-400"/></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
                <input id="acol2-max" type="number" min="1" value="20"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${K}-400"/></div>
              ${v?`<div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
                <input id="acol2-sheet" type="text" placeholder="EH"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${K}-400"/></div>`:'<input id="acol2-sheet" type="hidden" value=""/>'}
            </div>
            <div id="acol2-msg" class="hidden text-xs text-red-500"></div>
            <div class="flex gap-3 pt-1">
              <button id="acol2-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="acol2-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มทุกห้อง</button>
            </div>
          </div>
        </div>`,document.body.appendChild(h),(te=h.querySelector("#acol2-sheet"))==null||te.addEventListener("input",oe=>{oe.target.value=oe.target.value.toUpperCase()}),h.querySelector("#acol2-cancel").addEventListener("click",()=>h.remove()),h.querySelector("#acol2-save").addEventListener("click",async()=>{var ye;const oe=h.querySelector("#acol2-name").value.trim(),pe=parseFloat(h.querySelector("#acol2-max").value)||20,Ie=(((ye=h.querySelector("#acol2-sheet"))==null?void 0:ye.value)??"").trim().toUpperCase()||null,le=h.querySelector("#acol2-msg");if(!oe){le.textContent="กรุณาระบุชื่องาน",le.classList.remove("hidden");return}const fe=h.querySelector("#acol2-save");fe.disabled=!0,fe.textContent="⏳ กำลังเพิ่ม...";try{for(const Be of _)(await ge(Be.id).catch(()=>[])).some(ze=>ze.assignment_name===oe)||await Le({class_id:Be.id,assignment_name:oe,assignment_type:k,sheet_column:Ie??"",max_score:pe});h.remove(),p(`เพิ่ม "${oe}" ใน ${_.length} ห้องแล้ว ✅`,"success"),A=await ge(R.id).catch(()=>[]),se()}catch(Be){le.textContent="เกิดข้อผิดพลาด: "+me(Be),le.classList.remove("hidden"),fe.disabled=!1,fe.textContent="เพิ่มทุกห้อง"}})})})};document.body.appendChild(L),se()}function Ot(y,i,$){var P,L;(P=document.getElementById("add-col-modal"))==null||P.remove();const _=i==="final"?"ปลายภาค":"กลางภาค",R=i==="final"?"purple":"blue",A=!!(y!=null&&y.google_sheet_id),q=document.createElement("div");q.id="add-col-modal",q.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",q.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${_}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${_}</b></p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${R}-400"/>
        <button type="button" id="acol-quick-adj" class="mt-1 text-xs text-teal-600 hover:text-teal-800 underline">⚡ ปรับคะแนนเก็บ (คะแนนเต็มกำหนดเอง)</button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${R}-400"/>
        </div>
        ${A?`
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${R}-400"/>
        </div>`:'<input id="acol-sheet" type="hidden" value=""/>'}
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`,document.body.appendChild(q),(L=q.querySelector("#acol-sheet"))==null||L.addEventListener("input",Q=>{Q.target.value=Q.target.value.toUpperCase()}),q.querySelector("#acol-quick-adj").addEventListener("click",()=>{q.querySelector("#acol-name").value=`ปรับคะแนนเก็บ (${_})`;const Q=q.querySelector("#acol-max");Q.focus(),Q.select()}),q.querySelector("#acol-cancel").addEventListener("click",()=>q.remove()),q.querySelector("#acol-save").addEventListener("click",async()=>{var T;const Q=q.querySelector("#acol-name").value.trim(),se=parseFloat(q.querySelector("#acol-max").value)||20,ie=(((T=q.querySelector("#acol-sheet"))==null?void 0:T.value)??"").trim().toUpperCase()||null,j=q.querySelector("#acol-msg");if(!Q){j.textContent="กรุณาระบุชื่องาน",j.classList.remove("hidden");return}const z=q.querySelector("#acol-save");z.disabled=!0,z.textContent="กำลังเพิ่ม...";try{await Le({class_id:y.id,assignment_name:Q,max_score:se,sheet_column:ie??"",assignment_type:i}),q.remove(),p(`เพิ่มคอลัมน์ "${Q}" แล้ว`,"success"),$()}catch(r){j.textContent="เกิดข้อผิดพลาด: "+me(r),j.classList.remove("hidden"),z.disabled=!1,z.textContent="เพิ่มคอลัมน์"}})}async function st(y){if(vt("requests"),ht("คำร้องนักเรียน"),!y){Ze('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">🔔</p><p>กรุณาเข้าสู่ระบบ</p></div>');return}Ze(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const i=await xn(y.id).catch(()=>[]),$=[{key:"pending",label:"รอดำเนินการ",cls:"text-amber-600"},{key:"approved",label:"อนุมัติแล้ว",cls:"text-emerald-600"},{key:"attended",label:"มาสอบแล้ว",cls:"text-blue-600"},{key:"absent",label:"ขาดสอบ/ผิดนัด",cls:"text-red-600"},{key:"rejected",label:"ปฏิเสธ",cls:"text-red-500"},{key:"all",label:"ทั้งหมด",cls:"text-gray-600"}];let _="pending",R=null,A=null;const q=(r,u)=>u==="all"?!0:u==="attended"?r.status==="approved"&&r.exam_attended===!0:u==="absent"?r.status==="approved"&&r.exam_attended===!1:r.status===u,P=r=>i.filter(u=>q(u,r)).length,L=r=>{const u=new Map;return r.forEach(k=>{k.request_type&&u.set(k.request_type,(u.get(k.request_type)||0)+1)}),[...u.entries()].map(([k,v])=>({type:k,count:v})).sort((k,v)=>v.count-k.count)},Q=r=>{const u=new Map;return r.forEach(k=>{const v=k.class_score_columns;v&&(u.has(v.id)||u.set(v.id,{id:v.id,name:v.assignment_name,count:0}),u.get(v.id).count++)}),[...u.values()].sort((k,v)=>v.count-k.count)},se=r=>{if(!r)return"—";const u=new Date(r);return`${u.getDate()}/${u.getMonth()+1}/${u.getFullYear()+543}`},ie=r=>{var oe;const u=r.students,k=r.classes,v=r.class_score_columns,K=r.status==="approved"&&r.exam_attended==null,h=r.status==="approved"&&r.exam_attended===!0,D=r.status==="pending"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">⏳ รอดำเนินการ</span>':r.status==="approved"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ อนุมัติ</span>':'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">✕ ปฏิเสธ</span>',te=r.exam_attended===!0?`<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">📝 มาสอบแล้ว${r.exam_score!=null?" · <b>"+r.exam_score+"</b> คะแนน":" (ยังไม่ได้ใส่คะแนน)"}</span>`:r.exam_attended===!1?'<span class="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">❌ ขาดสอบ/ผิดนัด</span>':"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4" id="req-card-${r.id}">
      <!-- Header -->
      <div class="flex items-start gap-3 mb-3">
        <div class="w-9 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-white/40 shadow-sm bg-gradient-to-tr from-indigo-300 to-purple-300
                    flex items-center justify-center text-white text-sm font-bold">
          ${u!=null&&u.image_url?`<img src="${u.image_url}" class="w-full h-full object-cover"/>`:((u==null?void 0:u.full_name)??"น").charAt(0)}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${(u==null?void 0:u.full_name)??"—"}</p>
          <p class="text-xs text-gray-400">${(u==null?void 0:u.student_code)??""} · ${(u==null?void 0:u.main_room)??""}</p>
        </div>
        ${D}
      </div>
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-600 mb-3">
        <div class="flex gap-2"><span class="text-gray-400 w-16">วิชา</span><span class="font-medium text-gray-800">${((oe=k==null?void 0:k.master_subjects)==null?void 0:oe.subject_name)??"—"} (${(k==null?void 0:k.class_name)??""})</span></div>
        <div class="flex gap-2"><span class="text-gray-400 w-16">ประเภท</span><span>${r.request_type}</span></div>
        ${v?`<div class="flex gap-2"><span class="text-gray-400 w-16">หัวข้อ</span><span>${v.assignment_name} (เต็ม ${v.max_score})</span></div>`:""}
        <div class="flex gap-2"><span class="text-gray-400 w-16">วันที่</span><span>${se(r.requested_date)}${r.requested_period_no?" · คาบ "+r.requested_period_no:""}</span></div>
        ${r.reason?`<div class="flex gap-2"><span class="text-gray-400 w-16">เหตุผล</span><span>${r.reason}</span></div>`:""}
        ${r.teacher_comment?`<div class="flex gap-2"><span class="text-gray-400 w-16">หมายเหตุ</span><span class="${r.status==="rejected"?"text-red-600":"text-emerald-600"} font-medium">${r.teacher_comment}</span></div>`:""}
        ${te?`<div class="mt-1">${te}</div>`:""}
      </div>
      <!-- Actions -->
      ${r.status==="pending"?`
      <div class="flex gap-2">
        <button onclick="window._approveRequest(${r.id})"
          class="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition">
          ✅ อนุมัติ
        </button>
        <button onclick="window._rejectRequest(${r.id})"
          class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition">
          ✕ ปฏิเสธ
        </button>
      </div>`:""}
      ${K?`
      <div class="border-t border-gray-100 pt-3">
        <p class="text-xs text-gray-500 mb-2 font-medium">📋 บันทึกผลการสอบ</p>
        <div class="flex gap-2">
          <button onclick="window._markAttended(${r.id})"
            class="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
            📝 มาสอบแล้ว + ใส่คะแนน
          </button>
          <button onclick="window._markAbsent(${r.id}, ${(u==null?void 0:u.id)??"null"})"
            class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 text-xs font-semibold hover:bg-red-100 transition">
            ❌ ขาดสอบ/ผิดนัด
          </button>
        </div>
      </div>`:""}
      ${h?`
      <div class="border-t border-gray-100 pt-3 flex items-center justify-between">
        <p class="text-xs text-blue-600 font-medium">📝 มาสอบแล้ว${r.exam_score!=null?" · คะแนน "+r.exam_score:""}</p>
        <button onclick="window._markAttended(${r.id})"
          class="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition font-medium">
          ✏️ แก้ไขคะแนน
        </button>
      </div>`:""}
    </div>`},j=()=>{const r=i.filter(h=>q(h,_)),u=L(r);R&&!u.some(h=>h.type===R)&&(R=null);const k=R?r.filter(h=>h.request_type===R):r,v=Q(k);A&&!v.some(h=>h.id===A)&&(A=null);const K=A?k.filter(h=>{var D;return((D=h.class_score_columns)==null?void 0:D.id)===A}):k;document.getElementById("req-type-filter").innerHTML=u.length>1?`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${R?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-purple-600 text-white border-purple-600"}"
        data-type="">ทุกประเภทการสอบ</button>
      ${u.map(h=>`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${R===h.type?"bg-purple-600 text-white border-purple-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-type="${h.type}">${h.type} (${h.count})</button>`).join("")}`:"",document.querySelectorAll(".req-type-tab").forEach(h=>{h.addEventListener("click",()=>{R=h.dataset.type||null,j()})}),document.getElementById("req-col-filter").innerHTML=v.length>1?`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${A?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-indigo-600 text-white border-indigo-600"}"
        data-col="">ทุกช่องคะแนน</button>
      ${v.map(h=>`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${A===h.id?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-col="${h.id}">${h.name} (${h.count})</button>`).join("")}`:"",document.querySelectorAll(".req-col-tab").forEach(h=>{h.addEventListener("click",()=>{A=h.dataset.col?Number(h.dataset.col):null,j()})}),document.getElementById("req-content").innerHTML=K.length?`<div class="space-y-3">${K.map(ie).join("")}</div>`:`<div class="text-center py-16 text-gray-300">
          <p class="text-4xl mb-3">📭</p>
          <p class="text-sm">ไม่มีคำร้อง${_!=="all"?"ในสถานะนี้":""}${R?"ในประเภทนี้":""}${A?"ในช่องคะแนนนี้":""}</p>
        </div>`,document.querySelectorAll(".req-tab").forEach(h=>{const D=h.dataset.filter===_;h.className=`req-tab flex-1 py-2 text-xs font-medium rounded-lg transition
        ${D?"bg-white shadow text-indigo-700":"text-gray-500 hover:text-gray-700"}`})};Ze(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs text-gray-400">${i.length} รายการ</span>
    </div>
    <!-- Filter tabs -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-100 rounded-xl p-1 mb-4">
      ${$.map(r=>`
      <button class="req-tab flex-1 py-2 text-xs font-medium rounded-lg transition text-gray-500 hover:text-gray-700"
        data-filter="${r.key}">
        ${r.label}${P(r.key)>0||r.key==="all"?` (${P(r.key)})`:""}
      </button>`).join("")}
    </div>
    <!-- Filter by ประเภทการสอบ -->
    <div id="req-type-filter" class="flex flex-wrap gap-1.5 mb-3"></div>
    <!-- Filter by ช่องคะแนน -->
    <div id="req-col-filter" class="flex flex-wrap gap-1.5 mb-4"></div>
    <div id="req-content"></div>
  </div>`),document.querySelectorAll(".req-tab").forEach(r=>{r.addEventListener("click",()=>{_=r.dataset.filter,j()})}),j();const z=({title:r,body:u,confirmLabel:k,confirmCls:v="bg-emerald-600 hover:bg-emerald-700",onConfirm:K})=>{var D;(D=document.getElementById("req-modal"))==null||D.remove();const h=document.createElement("div");h.id="req-modal",h.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",h.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
        <div class="px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">${r}</h3>
        </div>
        <div class="px-5 py-4">${u}</div>
        <div class="px-5 pb-5 flex gap-2">
          <button id="req-modal-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="req-modal-confirm"
            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold ${v}">
            ${k}
          </button>
        </div>
      </div>`,document.body.appendChild(h),h.querySelector("#req-modal-cancel").addEventListener("click",()=>h.remove()),h.addEventListener("click",te=>{te.target===h&&h.remove()}),h.querySelector("#req-modal-confirm").addEventListener("click",()=>{K(h)})},T=async(r,u,k)=>{var K,h,D;const v=(K=r==null?void 0:r.students)==null?void 0:K.profile_id;if(v)try{const te=((D=(h=r==null?void 0:r.classes)==null?void 0:h.master_subjects)==null?void 0:D.subject_name)??"วิชา";await gn.functions.invoke("send-push",{body:{title:`📋 คำร้องขอสอบ: ${u}`,body:`${te}${k?" — "+k:""}`,url:"student.html",profileIds:[v]}})}catch{}};window._approveRequest=r=>{z({title:"✅ อนุมัติคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">หมายเหตุถึงนักเรียน <span class="text-gray-400">(ไม่บังคับ)</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="เช่น นัดสอบวันอังคาร คาบ 3 ห้องครู..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"></textarea>`,confirmLabel:"ยืนยันอนุมัติ",onConfirm:async u=>{const k=u.querySelector("#req-modal-comment").value.trim()||null;u.remove();try{await At(r,{status:"approved",teacher_comment:k}),p("อนุมัติคำร้องแล้ว ✅","success");const v=i.find(K=>K.id===r);v&&T(v,"อนุมัติแล้ว ✅",k),st(y)}catch(v){p("ไม่สำเร็จ: "+me(v),"error")}}})},window._rejectRequest=r=>{z({title:"✕ ปฏิเสธคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">เหตุผลที่ปฏิเสธ <span class="text-red-500">*</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="กรุณาระบุเหตุผล..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"></textarea>
             <p class="text-xs text-red-400 mt-1">บังคับกรอกทุกครั้งที่ปฏิเสธ</p>`,confirmLabel:"ยืนยันปฏิเสธ",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async u=>{const k=u.querySelector("#req-modal-comment").value.trim();if(!k){p("กรุณาระบุเหตุผลก่อนปฏิเสธ","warning");return}u.remove();try{await At(r,{status:"rejected",teacher_comment:k}),p("บันทึกการปฏิเสธแล้ว","success");const v=i.find(K=>K.id===r);v&&T(v,"ถูกปฏิเสธ ✕",k),st(y)}catch(v){p("ไม่สำเร็จ: "+me(v),"error")}}})},window._markAttended=async r=>{var ue,ze,J;const u=i.find(W=>Number(W.id)===Number(r)),k=(ue=u==null?void 0:u.students)==null?void 0:ue.id,v=(ze=u==null?void 0:u.classes)==null?void 0:ze.id,K=u==null?void 0:u.exam_score,h=K!=null;if(!k||!v){p("ไม่พบข้อมูลนักเรียนหรือห้องเรียนของคำร้องนี้","error");return}const D=String((u==null?void 0:u.request_type)??"").includes("ปรับคะแนน");let te;try{te=(await ge(v)).filter(W=>["regular","override"].includes(W.column_type??"regular"))}catch(W){p("โหลดคอลัมน์คะแนนไม่สำเร็จ: "+me(W),"error");return}if(!te.length){p("วิชานี้ยังไม่มีคอลัมน์คะแนนที่สามารถบันทึกได้","warning");return}const oe=Number((J=u==null?void 0:u.class_score_columns)==null?void 0:J.id);if(!D){const W=te.find(X=>Number(X.id)===oe);W&&(te=[W])}const pe=te.find(W=>Number(W.id)===oe)??te[0],Ie=te.map(W=>`
      <option value="${W.id}" data-max="${Number(W.max_score??100)}"
        ${Number(W.id)===Number(pe.id)?"selected":""}>
        ${W.column_type==="override"?"🔄 ปรับคะแนน — ":""}${de(W.assignment_name)} (เต็ม ${Number(W.max_score??100)})
      </option>`).join("");z({title:h?"✏️ แก้ไขคะแนน":"📝 บันทึกผลการสอบ — มาสอบ",body:`<label class="block text-sm text-gray-600 mb-1.5">บันทึกลงคอลัมน์ <span class="text-red-500">*</span></label>
             <select id="req-modal-column" ${D?"":"disabled"}
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4">
               ${Ie}
             </select>
             ${D?'<p class="text-xs text-blue-600 -mt-2 mb-4">เลือกคอลัมน์ที่จะรับคะแนนสอบปรับคะแนนครั้งนี้</p>':""}
             <label class="block text-sm text-gray-600 mb-1.5">คะแนนที่สอบได้ <span class="text-red-500">*</span> <span id="req-modal-max-label" class="text-gray-400">(เต็ม ${Number(pe.max_score??100)})</span></label>
             <input id="req-modal-score" type="number" min="0" max="${Number(pe.max_score??100)}" step="0.5"
               value="${h?K:""}"
               placeholder="0 – ${Number(pe.max_score??100)}"
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300" />`,confirmLabel:h?"บันทึกการแก้ไข":"บันทึกคะแนน",confirmCls:"bg-blue-600 hover:bg-blue-700",onConfirm:async W=>{const X=W.querySelector("#req-modal-column"),ve=Number(X.value),ce=X.options[X.selectedIndex],Re=Number((ce==null?void 0:ce.dataset.max)??100),Me=W.querySelector("#req-modal-score").value,V=parseFloat(Me);if(isNaN(V)||V<0||V>Re){p(`คะแนนต้องอยู่ระหว่าง 0 – ${Re}`,"warning");return}W.remove();try{const Y=await Tt(r,{exam_attended:!0,exam_score:V,studentId:k,assignmentId:ve});Sn({classId:v,columnId:ve,studentId:k,score:V}),p(Y!=null&&Y.linkedColumnId?"บันทึกคะแนนปรับและอัปเดตคอลัมน์หลักแล้ว ✅":h?"แก้ไขคะแนนแล้ว ✅":"บันทึกผลสอบและคะแนนแล้ว ✅","success"),st(y)}catch(Y){p("ไม่สำเร็จ: "+me(Y),"error")}}});const le=document.getElementById("req-modal"),fe=le==null?void 0:le.querySelector("#req-modal-column"),ye=le==null?void 0:le.querySelector("#req-modal-score"),Be=le==null?void 0:le.querySelector("#req-modal-max-label");fe==null||fe.addEventListener("change",()=>{const W=fe.options[fe.selectedIndex],X=Number((W==null?void 0:W.dataset.max)??100);ye.max=String(X),ye.placeholder=`0 – ${X}`,Be.textContent=`(เต็ม ${X})`,ye.value!==""&&Number(ye.value)>X&&(ye.value="")})},window._markAbsent=(r,u)=>{const k=i.filter(v=>{var K;return((K=v.students)==null?void 0:K.id)===u&&v.exam_attended===!1}).length;z({title:"❌ ขาดสอบ / ผิดนัด",body:`<p class="text-sm text-gray-600 mb-2">ยืนยันว่านักเรียนไม่มาสอบตามนัด?</p>
             ${k>=1?`<div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                    ⚠️ นักเรียนผิดนัดมาแล้ว <b>${k}</b> ครั้ง
                    ${k+1>=2?"<br/>หากยืนยัน จะครบ 2 ครั้ง — <b>นักเรียนจะไม่สามารถยื่นคำร้องได้อีก</b>":""}
                  </div>`:""}`,confirmLabel:"ยืนยัน — ขาดสอบ/ผิดนัด",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async v=>{v.remove();try{await Tt(r,{exam_attended:!1,exam_score:null}),p("บันทึกว่าขาดสอบ/ผิดนัดแล้ว","success"),st(y)}catch(K){p("ไม่สำเร็จ: "+me(K),"error")}}})}}const Un=Object.freeze(Object.defineProperty({__proto__:null,_openCourseColsModal:Tn,renderGrades:qn,renderGradesGrid:Ae,renderRequests:st},Symbol.toStringTag,{value:"Module"}));export{Tn as _,qn as a,Ae as b,st as c,zt as d,nt as e,Sn as p,Pn as r,Un as t};
