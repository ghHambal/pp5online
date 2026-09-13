const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-Cf_Y4s92.js","assets/supabase-BV-W2lsh.js","assets/student-views-DYl1Vkbm.js","assets/ui-FQqAmrdo.js","assets/version.js_v_10.22-ffVTG8-v.js","assets/student-api-GdZ3AenK.js","assets/teacher-views-utils-BWmONzsh.js","assets/theme-DIdoXkqD.js","assets/quiz-api-DaBneRGn.js","assets/leave-time-CrS9gT63.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/regrade-api-C8s-TuM0.js","assets/certificate-engine-R4UFir_Q.js","assets/azfutsal-modal-3jBbVg9C.js"])))=>i.map(i=>d[i]);
import{a as F,_ as ce,g as se,h as Ie,m as We}from"./ui-FQqAmrdo.js";import{getMyClasses as ye,getAttendanceByDate as Qe,getClassSessionDOWs as me,getClassStudents as Be,getClassAttendanceAll as Re,getSchoolHolidays as Oe,getActiveLeavePermissionsForClass as Ue,getClassLeaveHistory as Ye,getLeaveMaxActiveForClass as Ke,getLeaveMaxPerStudentWeekForClass as Ge,getExternalAttendanceStagingByRoom as Ze,saveAttendance as he,saveAttendanceCell as qe,closeLeavePermission as we,getSystemConfig as ve,updateLeaveMaxActiveForClass as Je,updateLeaveMaxPerStudentWeekForClass as Xe,getExternalAttendanceStaging as et,exportAttendanceToStudentCare as tt,createLeavePermission as st,getLifeSkillColumns as at,getStudentsByRoom as Ne,getLifeSkillScores as nt,getStudentsByReligionRoom as rt,getPrayerRecords as ot,getReadingScoreColumns as lt,getReadingScores as dt,upsertLifeSkillScore as it,upsertReadingScore as ct,savePrayerCell as He}from"./api-Cf_Y4s92.js";import{s as ke}from"./supabase-BV-W2lsh.js";import{f as ut}from"./leave-time-CrS9gT63.js";import{setActiveNav as ue,setTitle as xe,setContent as ae,_generateSessions as be,_fmtDate as oe,ATT_STATUS as ie,ATT_CYCLE as $e,_htmlEsc as Z,applyReadingGradesFromConfig as xt,_dateInputValue as Pe,_readingGrade as pt}from"./teacher-views-utils-BWmONzsh.js";import"./version.js_v_10.22-ffVTG8-v.js";const fe=`
  <svg aria-hidden="true" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,Ce=`
  <svg aria-hidden="true" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`;async function de(t,n){var x,m,L,T,q,i,b;ue("attendance"),xe("เช็คชื่อ","attendance");const r=n.master_subjects,g=(r==null?void 0:r.credit)??1;ae(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-emerald-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดข้อมูล...
  </div>`);try{const{getSystemConfig:S,getClassSessionDOWs:N}=await ce(async()=>{const{getSystemConfig:E,getClassSessionDOWs:H}=await import("./api-Cf_Y4s92.js");return{getSystemConfig:E,getClassSessionDOWs:H}},__vite__mapDeps([0,1])),y=await S().catch(()=>({})),I=y.academicYear??y.academic_year??new Date().getFullYear()+543,l=y.semester??1,w=n.source_class_id??null,[o,f,k,p,e,d]=await Promise.all([Be(n.id),Re(w??n.id),Oe(I,l),N(n.id).catch(()=>[]),Ue(n.id).catch(()=>[]),Ye(n.id,{week:"current"}).catch(()=>[])]);let _=await Ke(n.id).catch(()=>3),s=await Ge(n.id).catch(()=>2);const B=(r==null?void 0:r.subject_group)==="ACDMVOC",u=be(n,g,p.length?p:null,B),C=new Set(k),M={};e.forEach(E=>{M[E.student_id]=E});const a={};d.forEach(E=>{a[E.student_id]=(a[E.student_id]||0)+1});const c={},j=new Map;if(w){const{getMyClasses:E}=await ce(async()=>{const{getMyClasses:U}=await import("./api-Cf_Y4s92.js");return{getMyClasses:U}},__vite__mapDeps([0,1])),H=B&&p.length?p.length:Math.max(1,Math.round(g*2));let O=H;try{const U=B?await N(w).catch(()=>[]):[];if(U.length)O=U.length;else{const Y=(await E(null).catch(()=>[])).find(G=>Number(G.id)===Number(w));(x=Y==null?void 0:Y.master_subjects)!=null&&x.credit&&(O=Math.max(1,Math.round(Y.master_subjects.credit*2)))}}catch{}const z=u.length;for(let U=1;U<=z;U++){const J=Math.floor((U-1)/H),Y=(U-1)%H,G=J*O+Y+1;j.set(U,G);for(const X of f)X.session_number===G&&(c[X.student_id]||(c[X.student_id]={}),c[X.student_id][U]=X.status)}}else for(const E of f)c[E.student_id]||(c[E.student_id]={}),c[E.student_id][E.session_number]=E.status;const P=w??n.id,Q=E=>j.get(E)??E,K=f.filter(E=>{const H=u.find(O=>O.n===E.session_number);return H&&C.has(H.ds)}),h=38,$=160,v="border border-gray-200 text-center text-xs select-none",A="sticky left-0 z-20 bg-white border border-gray-200",R="sticky z-20 bg-white border border-gray-200";ae(`
    <div class="flex flex-col h-screen overflow-hidden animate-fade">
      <!-- Top bar -->
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')"
          class="text-sm text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1">
          ← กลับ
        </button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${(r==null?void 0:r.subject_name)??"—"}</h2>
          <p class="text-xs text-gray-400">${n.class_name} · ${g} หน่วยกิต · ${u.length} คาบ/เทอม</p>
        </div>
        <div class="flex gap-2 text-xs flex-shrink-0 items-center">
          <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg hidden sm:inline">ม=มา</span>
          <span class="px-2 py-1 bg-red-50 text-red-600 rounded-lg hidden sm:inline">ข=ขาด</span>
          <span class="px-2 py-1 bg-amber-50 text-amber-500 rounded-lg hidden sm:inline">ส=สาย</span>
          <span class="px-2 py-1 bg-blue-50 text-blue-500 rounded-lg hidden sm:inline">ก=กิจ</span>
          <span class="px-2 py-1 bg-orange-50 text-orange-500 rounded-lg hidden sm:inline">ป=ป่วย</span>
          <button id="btn-att-stats"
            class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-medium
                   hover:bg-indigo-700 transition flex items-center gap-1">
            📊 <span class="hidden sm:inline">สถิติ</span>
          </button>
          <button id="btn-att-check-all"
            class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-medium
                   hover:bg-emerald-700 transition flex items-center gap-1">
            ✅ <span class="hidden sm:inline">เช็คทั้งหมด</span>
          </button>
          <button id="btn-leave-quota"
            class="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg font-semibold
                   hover:bg-amber-100 transition flex items-center gap-1">
            🚪 <span class="hidden sm:inline">โควต้า</span> <span id="leave-quota-label">${Object.keys(M).length}/${_}</span>
          </button>
          <button id="btn-att-import-studentcare-bulk"
            class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-medium
                   hover:bg-indigo-700 transition flex items-center gap-1"
            title="นำเข้าเช็คชื่อจากระบบดูแลทีเดียวหลายวัน (ต้องกดส่งจากหน้าระบบดูแลของแต่ละวันมาก่อน)">
            📥 <span class="hidden sm:inline">ระบบดูแล (หลายวัน)</span>
          </button>
          <button id="btn-att-studentcare-help" type="button"
            class="px-2 py-1.5 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition flex items-center"
            title="วิธีติดตั้งปุ่มดึงเช็คชื่อจากระบบดูแล (ครั้งแรกเท่านั้น)">
            ❓
          </button>
        </div>
      </div>
      ${K.length>0?`
      <!-- Holiday attendance banner -->
      <div class="flex items-center justify-between gap-3 px-4 py-2 bg-red-50 border-b border-red-100 text-xs text-red-700 flex-shrink-0">
        <span>⚠️ พบข้อมูลเช็คชื่อ ${K.length} รายการในคาบที่ตรงกับวันหยุด (คอลัมน์สีแดง)</span>
        <button id="btn-clear-holiday-att"
          class="px-3 py-1.5 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition flex-shrink-0">
          🗑️ ลบข้อมูลนี้
        </button>
      </div>`:""}
      <!-- Saving indicator -->
      <div id="att-saving" class="hidden fixed top-16 right-4 z-50
        bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
        💾 กำลังบันทึก...
      </div>
      <!-- Grid wrapper -->
      <div class="flex-1 overflow-auto" id="att-grid-wrap">
        ${o.length?`<table class="border-collapse text-xs" style="min-width: max-content">
          <thead>
            <!-- Row 1: dates (clickable) -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${A} bg-emerald-50/60" style="width:32px"></th>
              <th class="${R} bg-emerald-50/60" style="left:32px;width:72px"></th>
              <th class="${R} bg-emerald-50/60 text-left px-2" style="left:104px;min-width:${$}px">
                <span class="text-[10px] text-emerald-600 font-medium">✏️ กดวันที่เพื่อเช็คชื่อ</span>
              </th>
              ${u.map(E=>{const H=C.has(E.ds);return`<th class="${v} p-0 cursor-pointer att-date-th ${H?"bg-red-100 hover:bg-red-200":"bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200"}"
                  data-open-session="${E.n}" data-date="${E.ds}"
                  style="width:${h}px;min-width:${h}px" title="คลิกเพื่อเช็คชื่อ ${E.ds}">
                  <div class="flex flex-col items-center justify-center py-1 gap-0 ${H?"text-red-400":"text-emerald-700"}">
                    <span class="text-[9px] leading-none">${H?"🔴":"✏️"}</span>
                    <span class="text-[11px] font-semibold leading-tight">${oe(E.date)}</span>
                  </div>
                </th>`}).join("")}
            </tr>
            <!-- Row 2: session numbers -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${A} bg-gray-100 font-semibold text-gray-500" style="width:32px">#</th>
              <th class="${R} bg-gray-100 font-semibold text-gray-500" style="left:32px;width:72px">รหัส</th>
              <th class="${R} bg-gray-100 font-semibold text-gray-500 text-left px-2"
                style="left:104px;min-width:${$}px">ชื่อ-นามสกุล</th>
              ${u.map(E=>{const H=C.has(E.ds);return`<th class="${v} ${H?"bg-red-50 text-red-300":"bg-gray-100 text-gray-500"}"

                  style="width:${h}px;min-width:${h}px">${E.n}</th>`}).join("")}
            </tr>
          </thead>
          <tbody>
            ${o.map((E,H)=>{const O=(E.full_name??"?").charAt(0);return`<tr class="hover:bg-gray-50 transition" data-sid="${E.id}">
                <td class="${A} text-center text-gray-400" style="width:32px">${H+1}</td>
                <td class="${R} text-center font-mono text-gray-600" style="left:32px;width:72px">${E.student_code}</td>
                <td class="${R} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:104px;min-width:${$}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-1">
                    ${E.image_url?`<img src="${E.image_url}" class="w-8 h-8 object-cover rounded border flex-shrink-0" />`:'<div class="w-8 h-8 rounded border bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm">👤</div>'}
                    <div class="flex flex-col min-w-0">
                      <span class="text-gray-800 text-xs truncate max-w-[105px] font-semibold">${E.full_name}</span>
                      ${mt(E,M,a,s)}
                    </div>
                  </div>
                </td>
                ${u.map(z=>{var G;const U=((G=c[E.id])==null?void 0:G[z.n])??null,J=U?ie[U]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    att-cell ${C.has(z.ds)?"bg-red-50":"hover:bg-gray-100"} ${J?J.bg:""}"
                    data-sid="${E.id}" data-session="${z.n}" data-date="${z.ds}"
                    style="width:${h}px;min-width:${h}px;height:32px">
                    ${J?`<span class="${J.color}">${J.label}</span>`:""}
                  </td>`}).join("")}
              </tr>`}).join("")}
          </tbody>
        </table>`:`<div class="p-16 text-center text-gray-400">
               <p class="text-4xl mb-3">👦</p>
               <p>ยังไม่มีนักเรียนในห้องนี้</p>
             </div>`}
      </div>
    </div>`);const D=document.getElementById("att-grid-wrap");if(!D)return;(m=document.getElementById("btn-att-stats"))==null||m.addEventListener("click",()=>{yt(n,o,u,c,C)}),(L=document.getElementById("btn-att-check-all"))==null||L.addEventListener("click",()=>{if(!u.length){F("ห้องนี้ยังไม่มีคาบเรียนให้เช็คชื่อ","warning");return}gt({students:o,sessions:u,attMap:c,holidaySet:C,saveClassId:P,saveSessN:Q,onDone:()=>de(t,n)})});const W=()=>{bt(n,_,s,()=>{de(t,n)})};(T=document.getElementById("btn-leave-quota"))==null||T.addEventListener("click",W),(q=document.getElementById("btn-att-studentcare-help"))==null||q.addEventListener("click",vt),(i=document.getElementById("btn-att-import-studentcare-bulk"))==null||i.addEventListener("click",async()=>{const E=_e(o,n);if(!E){F("หาห้องเรียนหลักของนักเรียนกลุ่มนี้ไม่เจอ","error");return}const H=(window._pp5DonorTierIndex??0)>=2,O=Se(t==null?void 0:t.id,E,H);if(!O.allowed){Le(O.claimedRoom,E);return}!H&&!O.claimedRoom&&Ee(t==null?void 0:t.id,E);let z;try{z=await Ze(E)}catch(Y){F("ดึงข้อมูลไม่สำเร็จ: "+se(Y),"error");return}if(!z.length){F(`ยังไม่มีข้อมูลจากระบบดูแลสำหรับห้อง ${E} เลย — ไปกดส่งข้อมูลจากหน้าระบบดูแลก่อน`,"warning");return}const U={};z.forEach(Y=>{var G;(U[G=Y.check_date]??(U[G]=[])).push(Y)});const J=Object.keys(U).sort().map(Y=>{const G=u.filter(ne=>ne.ds===Y).map(ne=>ne.n),X=Object.fromEntries(U[Y].map(ne=>[ne.student_code,ne])),le=o.map(ne=>({student:ne,staged:X[ne.student_code]})).filter(ne=>ne.staged),re=G.length?le.some(({student:ne})=>G.some(ge=>{var Te;return((Te=c[ne.id])==null?void 0:Te[ge])!=null})):!1;return{date:Y,ns:G,matched:le,isHoliday:C.has(Y),hasExisting:re}}).filter(Y=>Y.matched.length>0);if(!J.length){F("มีข้อมูลจากระบบดูแล แต่ไม่ตรงกับรหัสนักเรียนในห้องนี้เลยสักคน","error");return}_t(J,async Y=>{const G=[];if(Y.forEach(X=>{X.ns.forEach(le=>{X.matched.forEach(({student:re,staged:ne})=>{G.push({class_id:P,student_id:re.id,session_number:Q(le),check_date:X.date,status:ne.status})})})}),!!G.length)try{await he(G),F(`นำเข้าและบันทึกสำเร็จ ${G.length} รายการ (${Y.length} วัน) ✅`,"success"),de(t,n)}catch(X){F("บันทึกไม่สำเร็จ: "+se(X),"error")}})}),D.addEventListener("click",E=>{E.target.closest(".btn-leave-quota-badge")&&W()}),(b=document.getElementById("btn-clear-holiday-att"))==null||b.addEventListener("click",async()=>{const E=[...new Set(K.map(O=>{var z;return(z=u.find(U=>U.n===O.session_number))==null?void 0:z.ds}).filter(Boolean))].sort();await Ie({title:"ลบข้อมูลเช็คชื่อในวันหยุด",message:`พบข้อมูลเช็คชื่อ ${K.length} รายการ ในคาบที่ตรงกับวันหยุดโรงเรียน (${E.join(", ")})`,detail:"คาบเหล่านี้ถูกล็อกไม่ให้แก้ไข ข้อมูลเก่าที่ค้างอยู่จะถูกลบออกถาวรและไม่สามารถกู้คืนได้",confirmText:"ลบข้อมูลนี้"})&&(await Promise.all(K.map(O=>qe(n.id,O.student_id,O.session_number,null,null))),F(`ลบข้อมูลเช็คชื่อในวันหยุดเรียบร้อย ${K.length} รายการ`,"success"),de(t,n))}),D.addEventListener("click",E=>{var U;if(E.target.closest(".btn-request-leave")||E.target.closest(".leave-badge"))return;const H=E.target.closest(".student-name-cell");if(!H)return;const O=parseInt((U=H.closest("[data-sid]"))==null?void 0:U.dataset.sid),z=o.find(J=>J.id===O);z&&It(z,o.indexOf(z)+1,u,c,C,n)}),D.addEventListener("click",async E=>{var le;const H=E.target.closest(".att-cell");if(!H)return;const O=parseInt(H.dataset.sid),z=parseInt(H.dataset.session),U=H.dataset.date;if(C.has(U)){F("วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้","warning");return}const J=((le=c[O])==null?void 0:le[z])??null,Y=$e[($e.indexOf(J)+1)%$e.length];c[O]||(c[O]={}),c[O][z]=Y;const G=Y?ie[Y]:null;Object.values(ie).forEach(re=>H.classList.remove(re.bg)),G&&H.classList.add(G.bg),H.innerHTML=G?`<span class="${G.color}">${G.label}</span>`:"";const X=document.getElementById("att-saving");X==null||X.classList.remove("hidden");try{await qe(P,O,Q(z),U,Y)}catch(re){F("บันทึกไม่สำเร็จ: "+se(re),"error")}finally{X==null||X.classList.add("hidden")}}),D.addEventListener("click",E=>{const H=E.target.closest(".att-date-th[data-open-session]");if(!H)return;const O=parseInt(H.dataset.openSession),z=H.dataset.date;if(C.has(z)){F("วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้","warning");return}if(!u.find(Y=>Y.n===O))return;window._preSelectClass=n.id,window._preSelectDate=z,window._preSelectSessN=O;const J=u.filter(Y=>Y.ds===z);Fe(t,n,o,c,O,z,J,C,P,Q)}),window._leaveTimerInterval&&(clearInterval(window._leaveTimerInterval),window._leaveTimerInterval=null),window._overdueQueue=window._overdueQueue||[],window._isProcessingOverdue=!1,window._notifiedOverdueLeaves=window._notifiedOverdueLeaves||new Set;const V=()=>{const E=document.querySelectorAll(".leave-timer");if(E.length===0)return;const H=new Date;E.forEach(async O=>{const z=O.closest(".leave-badge");if(!z)return;const U=z.dataset.start,J=parseInt(z.dataset.duration),Y=z.dataset.leaveId,G=z.dataset.name,X=ut(U,J,H);if(X.isOverdue){if(O.innerHTML=X.timerText,!z.classList.contains("bg-red-100")){z.classList.remove("bg-amber-100","text-amber-700"),z.classList.add("bg-red-100","text-red-700","animate-pulse");const re=z.querySelector("span");re&&(re.textContent="เลยเวลา"),window._notifiedOverdueLeaves.has(Y)||(window._notifiedOverdueLeaves.add(Y),window._overdueQueue.push({leaveId:Y,studentName:G,classId:n.id,teacherId:t.id}),ee())}X.isBeyondLimit&&z.classList.remove("animate-pulse")}else O.innerHTML=X.timerText})},ee=async()=>{if(window._isProcessingOverdue||window._overdueQueue.length===0)return;window._isProcessingOverdue=!0;const E=window._overdueQueue.shift(),H=document.getElementById("overdue-check-modal");H&&H.remove();const O=document.createElement("div");O.id="overdue-check-modal",O.className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-fade",O.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4">
          <div class="text-4xl text-amber-500 animate-bounce">🚪⌛</div>
          <h3 class="text-lg font-bold text-gray-800">นักเรียนหมดเวลาขออนุญาตแล้ว</h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            นักเรียน <strong class="text-gray-800">${Z(E.studentName)}</strong> ครบกำหนดเวลาขออนุญาตออกจากห้องแล้ว เดินทางกลับเข้าห้องเรียนแล้วหรือยัง?
          </p>
          <div class="grid grid-cols-2 gap-3 pt-2">
            <button id="btn-overdue-yes" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md transition-all">
              ✅ กลับเข้าห้องแล้ว
            </button>
            <button id="btn-overdue-no" class="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold text-xs transition-all">
              ❌ ยังไม่กลับเข้าห้อง
            </button>
          </div>
        </div>
      `,document.body.appendChild(O),O.querySelector("#btn-overdue-yes").addEventListener("click",async()=>{try{await we(E.leaveId,"returned"),F(`บันทึกการกลับห้องของ ${E.studentName} เรียบร้อย`,"success"),O.remove(),window._isProcessingOverdue=!1,de(t,n),ee()}catch(z){F("บันทึกผิดพลาด: "+se(z),"error"),window._isProcessingOverdue=!1}}),O.querySelector("#btn-overdue-no").addEventListener("click",async()=>{try{await we(E.leaveId,"overdue"),F(`บันทึกประวัติการเลยเวลาของ ${E.studentName} แล้ว`,"info"),O.remove(),window._isProcessingOverdue=!1,de(t,n),ee()}catch(z){F("บันทึกผิดพลาด: "+se(z),"error"),window._isProcessingOverdue=!1}})};window._leaveTimerInterval=setInterval(V,1e3),setTimeout(V,100),D.addEventListener("click",async E=>{const H=E.target.closest(".btn-request-leave");if(!H)return;const O=parseInt(H.dataset.sid),z=H.dataset.name,U=H.dataset.img||"";if(Object.keys(M).length>=_){F(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${_} คนแล้ว`,"warning");return}ft(t,n,O,z,U,M,_,()=>de(t,n))}),D.addEventListener("click",async E=>{const H=E.target.closest(".leave-badge");if(!H)return;const O=H.dataset.leaveId,z=H.dataset.name,U=H.dataset.reason;if(await Ie({title:"นักเรียนกลับเข้าห้องเรียน?",message:`ยืนยันว่านักเรียน "${z}" (ออกนอกห้องด้วยเหตุผล: ${U}) กลับเข้าห้องเรียนเรียบร้อยแล้ว`,confirmText:"กลับเข้าห้องแล้ว"}))try{await we(O,"returned"),F(`บันทึกการกลับห้องของ ${z} เรียบร้อย`,"success"),de(t,n)}catch(Y){F("บันทึกไม่สำเร็จ: "+se(Y),"error")}})}catch(S){F("โหลดข้อมูลไม่สำเร็จ: "+se(S),"error")}}function mt(t,n,r,g){const x=n[t.id],m=r[t.id]||0,L=m>=g;return x?`
      <div class="mt-0.5 flex items-center">
        <span class="leave-badge cursor-pointer inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${x.status==="overdue"?"bg-red-100 text-red-700 animate-pulse":"bg-amber-100 text-amber-700"}"
          data-leave-id="${x.id}" data-sid="${t.id}" data-name="${Z(t.full_name)}" data-reason="${Z(x.reason)}" data-start="${x.created_at}" data-duration="${x.allowed_duration}" title="ขออนุญาตออกนอกห้อง: ${x.reason} (คลิกเพื่อบันทึกกลับห้อง)">
          🚪 <span>${x.status==="overdue"?"เลยเวลา":"ออกห้อง"}</span> <span class="leave-timer font-mono text-[9px]">--:--</span>
        </span>
      </div>
    `:L?`
      <div class="mt-0.5 flex items-center">
        <button type="button" class="btn-leave-quota-badge inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-400 border border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition cursor-pointer" title="นักเรียนใช้สิทธิ์ออกนอกห้องครบ ${g} ครั้งแล้วในสัปดาห์นี้ (คลิกเพื่อปรับโควต้า)">
          ✓ ออกแล้ว (${m}/${g})
        </button>
      </div>
    `:`
      <div class="mt-0.5 flex items-center gap-1">
        <button type="button" class="btn-request-leave text-[9px] text-gray-500 hover:text-indigo-600 border border-gray-200 hover:border-indigo-300 rounded px-1 py-0.5 bg-gray-50 hover:bg-indigo-50 transition font-medium"
          data-sid="${t.id}" data-name="${Z(t.full_name)}" data-img="${t.image_url||""}">
          🚪 ขอออกห้อง
        </button>
        <span class="text-[9px] text-gray-400 font-mono" title="ใช้สิทธิ์ออกนอกห้องไปแล้ว ${m} จาก ${g} ครั้งในสัปดาห์นี้">${m}/${g}</span>
      </div>
    `}function bt(t,n,r,g){var T,q,i;(T=document.getElementById("leave-quota-modal"))==null||T.remove();const x=document.createElement("div");x.id="leave-quota-modal",x.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🚪 ตั้งค่าโควต้าออกนอกห้อง</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">${Z(t.class_name||"ห้องเรียนนี้")}</p>
        </div>
        <button id="btn-leave-quota-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนนักเรียนที่อนุญาตให้อยู่นอกห้องพร้อมกัน</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota" min="1" max="30" value="${n}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">คน</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1,2,3,5].map(b=>`
            <button type="button" class="btn-leave-quota-preset px-3 py-2 rounded-xl border text-xs font-bold ${b===n?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}"
              data-value="${b}">${b} คน</button>
          `).join("")}
        </div>
      </div>
      <div class="space-y-2 border-t pt-3">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนครั้งสูงสุดต่อสัปดาห์ (ต่อนักเรียน 1 คน)</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota-per-week" min="1" max="14" value="${r}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">ครั้ง/สัปดาห์</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1,2,3,5].map(b=>`
            <button type="button" class="btn-leave-quota-week-preset px-3 py-2 rounded-xl border text-xs font-bold ${b===r?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}"
              data-value="${b}">${b} ครั้ง</button>
          `).join("")}
        </div>
      </div>
      <button id="btn-save-leave-quota" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        บันทึกโควต้า
      </button>
    </div>
  `,document.body.appendChild(x);const m=x.querySelector("#input-leave-quota"),L=x.querySelector("#input-leave-quota-per-week");(q=x.querySelector("#btn-leave-quota-close"))==null||q.addEventListener("click",()=>x.remove()),x.querySelectorAll(".btn-leave-quota-preset").forEach(b=>{b.addEventListener("click",()=>{m.value=b.dataset.value})}),x.querySelectorAll(".btn-leave-quota-week-preset").forEach(b=>{b.addEventListener("click",()=>{L.value=b.dataset.value})}),(i=x.querySelector("#btn-save-leave-quota"))==null||i.addEventListener("click",async()=>{const b=parseInt(m.value,10);if(!Number.isFinite(b)||b<1||b>30){F("กรุณาระบุโควต้าคนออกพร้อมกันระหว่าง 1-30 คน","warning");return}const S=parseInt(L.value,10);if(!Number.isFinite(S)||S<1||S>14){F("กรุณาระบุจำนวนครั้งต่อสัปดาห์ระหว่าง 1-14 ครั้ง","warning");return}try{await Promise.all([Je(t.id,b),Xe(t.id,S)]),F(`บันทึกโควต้าออกนอกห้องเป็น ${b} คน / ${S} ครั้งต่อสัปดาห์แล้ว`,"success"),x.remove(),g==null||g(b,S)}catch(N){F("บันทึกโควต้าไม่สำเร็จ: "+se(N),"error")}})}function gt({students:t,sessions:n,attMap:r,holidaySet:g,saveClassId:x,saveSessN:m,onDone:L}){var f,k,p;(f=document.getElementById("bulk-checkall-modal"))==null||f.remove();const T=n[0].ds,q=n[n.length-1].ds;let i=null,b=[];const S=document.createElement("div");S.id="bulk-checkall-modal",S.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4",S.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">✅ เช็คชื่อทั้งหมด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">เติมเฉพาะช่องที่ยังไม่ได้เช็คชื่อ — ช่องที่เช็คไว้แล้วจะไม่ถูกเปลี่ยน</p>
        </div>
        <button id="btn-bulk-checkall-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">ช่วงวันที่</label>
        <div class="flex items-center gap-2">
          <input type="date" id="bulk-checkall-from" min="${T}" max="${q}" value="${T}"
            class="flex-1 border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500" />
          <span class="text-gray-400 text-xs flex-shrink-0">ถึง</span>
          <input type="date" id="bulk-checkall-to" min="${T}" max="${q}" value="${q}"
            class="flex-1 border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500" />
        </div>
        <button id="btn-bulk-checkall-fullterm" type="button" class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium">เลือกทั้งเทอม</button>
      </div>
      <div class="space-y-2 border-t pt-3">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">เช็คเป็นสถานะ</label>
        <div class="grid grid-cols-5 gap-1.5">
          ${Object.entries(ie).map(([e,d])=>`
            <button type="button" data-status="${e}"
              class="bulk-checkall-status-btn py-2.5 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 transition">
              <span class="${d.color} text-base">${d.label}</span>
            </button>
          `).join("")}
        </div>
      </div>
      <div id="bulk-checkall-preview" class="text-xs text-center text-gray-500 bg-gray-50 rounded-xl py-2.5 px-3 leading-relaxed"></div>
      <button id="btn-bulk-checkall-confirm" disabled
        class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl shadow-md transition-all">
        ยืนยันเช็คชื่อทั้งหมด
      </button>
    </div>
  `,document.body.appendChild(S);const N=S.querySelector("#bulk-checkall-from"),y=S.querySelector("#bulk-checkall-to"),I=S.querySelector("#bulk-checkall-preview"),l=S.querySelector("#btn-bulk-checkall-confirm"),w=S.querySelectorAll(".bulk-checkall-status-btn"),o=()=>{var B;const e=N.value,d=y.value;if(!e||!d||e>d){b=[],I.textContent="กรุณาเลือกช่วงวันที่ให้ถูกต้อง",l.disabled=!0;return}const _=n.filter(u=>u.ds>=e&&u.ds<=d&&!g.has(u.ds));b=[];const s=new Set;if(i)for(const u of t)for(const C of _)(((B=r[u.id])==null?void 0:B[C.n])??null)==null&&(b.push({class_id:x,student_id:u.id,session_number:m(C.n),check_date:C.ds,status:i}),s.add(u.id));_.length?i?b.length?(I.innerHTML=`จะเช็คชื่อ <b class="text-gray-700">${b.length}</b> ช่องว่าง
        (${s.size} นักเรียน × ${_.length} คาบ) เป็น
        <span class="${ie[i].color}">${ie[i].label}</span>`,l.disabled=!1):(I.textContent="ไม่มีช่องว่างในช่วงวันที่นี้แล้ว (เช็คครบทุกคนทุกคาบแล้ว)",l.disabled=!0):(I.textContent=`พบ ${_.length} คาบในช่วงนี้ — กรุณาเลือกสถานะที่ต้องการเช็ค`,l.disabled=!0):(I.textContent="ไม่มีคาบเรียนในช่วงวันที่นี้ (อาจตรงกับวันหยุดทั้งหมด)",l.disabled=!0)};(k=S.querySelector("#btn-bulk-checkall-close"))==null||k.addEventListener("click",()=>S.remove()),N.addEventListener("change",o),y.addEventListener("change",o),(p=S.querySelector("#btn-bulk-checkall-fullterm"))==null||p.addEventListener("click",()=>{N.value=T,y.value=q,o()}),w.forEach(e=>{e.addEventListener("click",()=>{i=e.dataset.status,w.forEach(d=>d.classList.remove("border-emerald-500","bg-emerald-50")),e.classList.add("border-emerald-500","bg-emerald-50"),o()})}),l.addEventListener("click",async()=>{if(b.length){l.disabled=!0,l.textContent="กำลังบันทึก...";try{await he(b),F(`เช็คชื่อทั้งหมดสำเร็จ ${b.length} ช่อง ✅`,"success"),S.remove(),L==null||L()}catch(e){F("บันทึกไม่สำเร็จ: "+se(e),"error"),l.disabled=!1,l.textContent="ยืนยันเช็คชื่อทั้งหมด"}}}),o()}function ft(t,n,r,g,x,m,L,T){const q=document.getElementById("leave-request-modal");q&&q.remove();const i=["🚽 ไปห้องน้ำ","💊 ไปห้องพยาบาล","🏢 ไปฝ่ายปกครอง/ธุรการ","✏️ อื่นๆ"],b=[5,10,15,30];let S=i[0],N=10;const y=document.createElement("div");y.id="leave-request-modal",y.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4",y.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <h3 class="font-bold text-gray-800 text-sm">🚪 ขออนุญาตออกนอกห้องเรียน</h3>
        <button id="btn-leave-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="rounded-2xl border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-amber-800 flex items-center justify-between gap-3">
        <span class="font-semibold">โควต้านอกห้องตอนนี้</span>
        <span class="font-extrabold">${Object.keys(m).length}/${L} คน</span>
      </div>
      
      <!-- ข้อมูลและรูปนักเรียน -->
      <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
        <div class="w-12 h-16 rounded-xl overflow-hidden bg-gray-150 border border-gray-250 flex-shrink-0">
          ${x?`<img src="${Z(x)}" class="w-full h-full object-cover" />`:'<div class="w-full h-full flex items-center justify-center text-xl font-bold text-gray-400 bg-gray-200">👤</div>'}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">นักเรียนผู้ขออนุญาต</p>
          <h4 class="font-extrabold text-gray-800 text-sm truncate mt-0.5">${Z(g)}</h4>
        </div>
      </div>
      
      <!-- เหตุผล -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">1. เหตุผลของการขออนุญาต</label>
        <div class="grid grid-cols-2 gap-2">
          ${i.map((k,p)=>`
            <button class="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl transition text-center
              ${p===0?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-reason="${k}">${k}
            </button>
          `).join("")}
        </div>
        <input type="text" id="input-custom-reason" class="hidden w-full border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="กรุณาระบุเหตุผลการขออนุญาต..." />
      </div>
      
      <!-- เวลาที่อนุญาต -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">2. ระยะเวลาที่อนุญาต</label>
        <div class="grid grid-cols-5 gap-1.5">
          ${b.map(k=>`
            <button class="btn-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center
              ${k===10?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-duration="${k}">${k} น.
            </button>
          `).join("")}
          <button class="btn-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            data-duration="custom">ระบุเอง...
          </button>
        </div>
        <div id="div-custom-duration" class="hidden flex items-center gap-2 mt-2">
          <input type="number" id="input-custom-duration" min="1" max="180" class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="ระบุนาที (เช่น 20)..." />
          <span class="text-xs text-gray-500 font-medium">นาที</span>
        </div>
      </div>
      
      <button id="btn-leave-submit" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        🚪 อนุมัติให้ออกนอกห้อง
      </button>
    </div>
  `,document.body.appendChild(y);const I=y.querySelector("#input-custom-reason");y.querySelectorAll(".btn-reason").forEach(k=>{k.addEventListener("click",()=>{y.querySelectorAll(".btn-reason").forEach(p=>{p.className="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),k.className="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center",S=k.dataset.reason,S==="✏️ อื่นๆ"?(I.classList.remove("hidden"),I.focus()):I.classList.add("hidden")})});const l=y.querySelector("#div-custom-duration"),w=y.querySelector("#input-custom-duration");y.querySelectorAll(".btn-duration").forEach(k=>{k.addEventListener("click",()=>{y.querySelectorAll(".btn-duration").forEach(e=>{e.className="btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),k.className="btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center";const p=k.dataset.duration;p==="custom"?(l.classList.remove("hidden"),w.focus()):(l.classList.add("hidden"),N=parseInt(p))})}),y.querySelector("#btn-leave-close").addEventListener("click",()=>y.remove());const o=y.querySelector("#btn-leave-submit"),f=o.textContent;o.addEventListener("click",async()=>{if(o.disabled)return;let k=S;if(S==="✏️ อื่นๆ"&&(k=I.value.trim(),!k)){F("กรุณาระบุเหตุผลในการขออนุญาต","warning");return}let p=N;const e=y.querySelector(".btn-duration.bg-indigo-600");if(e&&e.dataset.duration==="custom"){const d=parseInt(w.value.trim());if(isNaN(d)||d<=0){F("กรุณาระบุระยะเวลากรอกเป็นจำนวนนาทีที่ถูกต้อง (มากกว่า 0)","warning");return}p=d}try{o.disabled=!0,o.textContent="กำลังบันทึก...",o.classList.add("opacity-70","cursor-not-allowed"),await st(r,n.id,t.id,k,p,L),y.remove(),T(),We({title:"อนุมัติใบอนุญาตสำเร็จ 🟢",message:`ได้ออกใบอนุญาตออกนอกห้องเรียนให้แก่ <strong>${Z(g)}</strong> เป็นเวลา <strong>${p} นาที</strong> เรียบร้อยแล้ว`,confirmText:"ตกลง"})}catch(d){F("การขออนุญาตล้มเหลว: "+se(d),"error"),o.disabled=!1,o.textContent=f,o.classList.remove("opacity-70","cursor-not-allowed")}})}function yt(t,n,r,g,x){const m=document.getElementById("att-stats-modal");m&&m.remove();const L=t.master_subjects,T=r.filter(p=>!x.has(p.ds)),q=T.length,i=["present","absent","late","excused","sick"],b=n.map((p,e)=>{var B;const d={present:0,absent:0,late:0,excused:0,sick:0,noRecord:0};for(const u of T){const C=((B=g[p.id])==null?void 0:B[u.n])??null;C&&d[C]!==void 0?d[C]++:C||d.noRecord++}const _=d.present+d.late,s=q>0?(_/q*100).toFixed(1):"0.0";return{student:p,no:e+1,...d,attended:_,pct:parseFloat(s)}}),S=b.length?(b.reduce((p,e)=>p+e.pct,0)/b.length).toFixed(1):"0.0",N={};for(const p of T){const e=new Date(p.date),d=e.getDay()||7,_=new Date(e);_.setDate(e.getDate()-d+1);const s=Pe(_);N[s]||(N[s]={label:`${oe(_)}`,sessions:[]}),N[s].sessions.push(p)}const y=Object.entries(N).sort(([p],[e])=>p.localeCompare(e)),I=p=>p>=80?"text-emerald-600":p>=60?"text-amber-500":"text-red-600",l=p=>p>=80?"bg-emerald-50":p>=60?"bg-amber-50":"bg-red-50",w=document.createElement("div");w.id="att-stats-modal",w.className="fixed inset-0 z-[80] bg-white flex flex-col",w.innerHTML=`
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-white shadow-sm flex-shrink-0">
      <button id="stats-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800">📊 สถิติการมาเรียน</h2>
        <p class="text-xs text-gray-400">${(L==null?void 0:L.subject_name)??"—"} · ${t.class_name} · ${q} คาบที่เรียน</p>
      </div>
      <!-- Summary badges -->
      <div class="hidden sm:flex gap-2 text-xs">
        <span class="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
          เฉลี่ย ${S}%
        </span>
        <span class="px-2 py-1 ${l(parseFloat(S))} ${I(parseFloat(S))} rounded-lg font-medium">
          ${parseFloat(S)>=80?"✓ ดี":parseFloat(S)>=60?"⚠ ปานกลาง":"✗ ต่ำ"}
        </span>
      </div>
    </div>
    <!-- Tabs -->
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[["sem","รายภาคเรียน"],["week","รายสัปดาห์"],["session","รายคาบ"]].map(([p,e],d)=>`
        <button class="stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${d===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}"
          data-tab="${p}">${e}
        </button>`).join("")}
    </div>
    <!-- Content -->
    <div class="flex-1 overflow-auto" id="stats-content"></div>`,document.body.appendChild(w);const o=()=>{const p=[...b].sort((e,d)=>e.pct-d.pct);document.getElementById("stats-content").innerHTML=`
      <!-- Class summary cards -->
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${[["มาเรียน",b.reduce((e,d)=>e+d.present,0),"bg-emerald-100 text-emerald-700"],["ขาด",b.reduce((e,d)=>e+d.absent,0),"bg-red-100 text-red-700"],["สาย",b.reduce((e,d)=>e+d.late,0),"bg-amber-100 text-amber-700"],["ลากิจ",b.reduce((e,d)=>e+d.excused,0),"bg-blue-100 text-blue-700"],["ลาป่วย",b.reduce((e,d)=>e+d.sick,0),"bg-orange-100 text-orange-700"]].map(([e,d,_])=>`
          <div class="${_} rounded-xl p-3 text-center">
            <p class="text-2xl font-bold">${d}</p>
            <p class="text-xs mt-0.5">${e}</p>
          </div>`).join("")}
      </div>
      <!-- Student table -->
      <div class="px-4 pb-6">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">#</th>
                <th class="px-3 py-3 text-left">ชื่อ-นามสกุล</th>
                <th class="px-3 py-3 text-center bg-emerald-50 text-emerald-700">มา</th>
                <th class="px-3 py-3 text-center bg-red-50 text-red-600">ขาด</th>
                <th class="px-3 py-3 text-center bg-amber-50 text-amber-500">สาย</th>
                <th class="px-3 py-3 text-center bg-blue-50 text-blue-500">กิจ</th>
                <th class="px-3 py-3 text-center bg-orange-50 text-orange-500">ป่วย</th>
                <th class="px-3 py-3 text-center">ไม่บันทึก</th>
                <th class="px-3 py-3 text-center font-semibold">% มา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${p.map(e=>`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-3 py-2.5 text-gray-400 text-xs">${e.no}</td>
                  <td class="px-3 py-2.5">
                    <div class="flex items-center gap-2">
                      ${e.student.image_url?`<img src="${e.student.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="text-sm flex-shrink-0">👤</span>'}
                      <span class="truncate max-w-[140px] text-gray-800">${e.student.full_name}</span>
                    </div>
                  </td>
                  <td class="px-3 py-2.5 text-center text-emerald-600 font-medium">${e.present}</td>
                  <td class="px-3 py-2.5 text-center text-red-600 font-medium">${e.absent||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-amber-500 font-medium">${e.late||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-blue-500 font-medium">${e.excused||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-orange-500 font-medium">${e.sick||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-gray-400 text-xs">${e.noRecord||"—"}</td>
                  <td class="px-3 py-2.5 text-center">
                    <span class="font-bold text-sm ${I(e.pct)}">${e.pct}%</span>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`},f=()=>{document.getElementById("stats-content").innerHTML=`
      <div class="p-4 space-y-4">
        ${y.map(([p,e],d)=>{const _=e.sessions,s=oe(_[_.length-1].date),u=n.map(a=>{var j;const c={present:0,absent:0,late:0,excused:0,sick:0};for(const P of _){const Q=((j=g[a.id])==null?void 0:j[P.n])??null;Q&&c[Q]!==void 0&&c[Q]++}return c}).reduce((a,c)=>(i.forEach(j=>a[j]=(a[j]||0)+c[j]),a),{}),C=_.length*n.length,M=C>0?((u.present+u.late)/C*100).toFixed(1):"0.0";return`
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${d+1}</p>
                  <p class="text-xs text-gray-400">${e.label} – ${s} · ${_.length} คาบ</p>
                </div>
                <span class="text-lg font-bold ${I(parseFloat(M))}">${M}%</span>
              </div>
              <!-- Mini bar chart -->
              <div class="flex gap-1 h-6 rounded-lg overflow-hidden">
                ${[[u.present||0,"bg-emerald-500"],[u.late||0,"bg-amber-400"],[u.absent||0,"bg-red-500"],[u.excused||0,"bg-blue-400"],[u.sick||0,"bg-orange-400"]].filter(([a])=>a>0).map(([a,c])=>`<div class="${c}" style="flex:${a}" title="${a}"></div>`).join("")}
              </div>
              <div class="flex gap-3 mt-2 text-xs text-gray-500 flex-wrap">
                <span class="text-emerald-600">มา ${u.present||0}</span>
                <span class="text-red-500">ขาด ${u.absent||0}</span>
                <span class="text-amber-500">สาย ${u.late||0}</span>
                <span class="text-blue-500">กิจ ${u.excused||0}</span>
                <span class="text-orange-500">ป่วย ${u.sick||0}</span>
              </div>
            </div>`}).join("")}
      </div>`},k=()=>{document.getElementById("stats-content").innerHTML=`
      <div class="p-4">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">คาบ</th>
                <th class="px-3 py-3 text-left">วันที่</th>
                <th class="px-3 py-3 text-center text-emerald-700">มา</th>
                <th class="px-3 py-3 text-center text-red-600">ขาด</th>
                <th class="px-3 py-3 text-center text-amber-500">สาย</th>
                <th class="px-3 py-3 text-center text-blue-500">กิจ</th>
                <th class="px-3 py-3 text-center text-orange-500">ป่วย</th>
                <th class="px-3 py-3 text-center">%มา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${T.map(p=>{var _;const e={present:0,absent:0,late:0,excused:0,sick:0};for(const s of n){const B=((_=g[s.id])==null?void 0:_[p.n])??null;B&&e[B]!==void 0&&e[B]++}const d=n.length?((e.present+e.late)/n.length*100).toFixed(0):"0";return`
                  <tr class="hover:bg-gray-50">
                    <td class="px-3 py-2 text-gray-500">${p.n}</td>
                    <td class="px-3 py-2 font-mono text-gray-700">${oe(p.date)}</td>
                    <td class="px-3 py-2 text-center text-emerald-600 font-medium">${e.present}</td>
                    <td class="px-3 py-2 text-center text-red-600 font-medium">${e.absent||"—"}</td>
                    <td class="px-3 py-2 text-center text-amber-500 font-medium">${e.late||"—"}</td>
                    <td class="px-3 py-2 text-center text-blue-500 font-medium">${e.excused||"—"}</td>
                    <td class="px-3 py-2 text-center text-orange-500 font-medium">${e.sick||"—"}</td>
                    <td class="px-3 py-2 text-center font-bold ${I(parseInt(d))}">${d}%</td>
                  </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>`};o(),w.querySelectorAll(".stats-tab").forEach(p=>{p.addEventListener("click",()=>{w.querySelectorAll(".stats-tab").forEach(d=>{d.classList.replace("border-indigo-600","border-transparent"),d.classList.replace("text-indigo-600","text-gray-500")}),p.classList.replace("border-transparent","border-indigo-600"),p.classList.replace("text-gray-500","text-indigo-600");const e=p.dataset.tab;e==="sem"&&o(),e==="week"&&f(),e==="session"&&k()})}),w.querySelector("#stats-close").addEventListener("click",()=>w.remove())}async function ht(t,n,r,g={}){var _;const x=n.master_subjects,m=(x==null?void 0:x.credit)??1,L=await ve().catch(()=>({})),T=L.academicYear??L.academic_year??new Date().getFullYear()+543,q=L.semester??1,i=n.source_class_id??null,[b,S,N,y]=await Promise.all([Be(n.id),Re(i??n.id),Oe(T,q),me(n.id).catch(()=>[])]),I=(x==null?void 0:x.subject_group)==="ACDMVOC",l=be(n,m,y.length?y:null,I),w=new Set(N),o={},f=new Map;if(i){const s=I&&y.length?y.length:Math.max(1,Math.round(m*2));let B=s;try{const C=I?await me(i).catch(()=>[]):[];if(C.length)B=C.length;else{const a=(await ye((t==null?void 0:t.id)??null).catch(()=>[])).find(c=>Number(c.id)===Number(i));(_=a==null?void 0:a.master_subjects)!=null&&_.credit&&(B=Math.max(1,Math.round(a.master_subjects.credit*2)))}}catch{}const u=l.length;for(let C=1;C<=u;C++){const M=Math.floor((C-1)/s),a=(C-1)%s,c=M*B+a+1;f.set(C,c);for(const j of S)j.session_number===c&&(o[j.student_id]||(o[j.student_id]={}),o[j.student_id][C]=j.status)}}else for(const s of S)o[s.student_id]||(o[s.student_id]={}),o[s.student_id][s.session_number]=s.status;const k=l.find(s=>Number(s.n)===Number(r));if(!k)throw new Error("ไม่พบคาบเรียนที่เลือก");if(w.has(k.ds))throw new Error("คาบนี้ตรงกับวันหยุดโรงเรียน");const p=l.filter(s=>s.ds===k.ds),e=i??n.id,d=s=>f.get(s)??s;Fe(t,n,b,o,k.n,k.ds,p,w,e,d,g)}async function zt(t){var x,m,L;(x=document.getElementById("att-scan-setup-modal"))==null||x.remove();const n=document.createElement("div");n.id="att-scan-setup-modal",n.className="fixed inset-0 z-[190] flex items-end sm:items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-8 h-8 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">${Ce}</span>
            <span>สแกน QR เช็คชื่อ</span>
          </h3>
          <p class="text-xs text-gray-400 mt-0.5">เลือกห้องและคาบ แล้วระบบจะเปิดฟอร์มเช็คชื่อเดิมพร้อมกล้องสแกน</p>
        </div>
        <button id="att-scan-setup-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
      </div>
      <div id="att-scan-setup-body" class="p-5">
        <div class="flex items-center justify-center py-10 text-gray-400 text-sm">
          <svg class="animate-spin h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          กำลังโหลดห้องเรียน...
        </div>
      </div>
    </div>
  `,document.body.appendChild(n);const r=()=>n.remove();n.addEventListener("click",T=>{T.target===n&&r()}),(m=n.querySelector("#att-scan-setup-close"))==null||m.addEventListener("click",r);const g=n.querySelector("#att-scan-setup-body");try{const T=await ye((t==null?void 0:t.id)??null).catch(()=>[]);if(!T.length){g.innerHTML='<div class="py-10 text-center text-gray-400 text-sm">ยังไม่มีห้องเรียนสำหรับเช็คชื่อ</div>';return}g.innerHTML=`
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1.5">ห้องเรียน / วิชา</label>
          <select id="att-scan-class" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-emerald-500">
            ${T.map(y=>{var I;return`<option value="${y.id}">${Z(y.class_name)} — ${Z(((I=y.master_subjects)==null?void 0:I.subject_name)??"—")}</option>`}).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1.5">คาบที่จะเช็ค</label>
          <select id="att-scan-session" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-emerald-500">
            <option value="">กำลังโหลดคาบ...</option>
          </select>
        </div>
        <div id="att-scan-session-hint" class="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-2xl px-3 py-2"></div>
        <button id="att-scan-start" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-sm font-extrabold shadow-md transition flex items-center justify-center gap-2">
          ${fe}
          <span>เปิดฟอร์มและเริ่มสแกน</span>
        </button>
      </div>
    `;const q=g.querySelector("#att-scan-class"),i=g.querySelector("#att-scan-session"),b=g.querySelector("#att-scan-session-hint");let S=[];const N=async()=>{var k,p;const y=T.find(e=>String(e.id)===String(q.value));if(i.innerHTML='<option value="">กำลังโหลดคาบ...</option>',b.textContent="",!y)return;const I=await me(y.id).catch(()=>[]),l=((k=y.master_subjects)==null?void 0:k.credit)??1,w=((p=y.master_subjects)==null?void 0:p.subject_group)==="ACDMVOC";S=be(y,l,I.length?I:null,w);const o=Pe(new Date),f=S.find(e=>e.ds===o)||S.find(e=>e.ds>o)||S[0];i.innerHTML=S.map(e=>`
        <option value="${e.n}" ${(f==null?void 0:f.n)===e.n?"selected":""}>
          คาบที่ ${e.n} · ${oe(e.date)}${e.ds===o?" · วันนี้":""}
        </option>
      `).join(""),b.textContent=f?`ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${f.n} ก่อนเปิดกล้อง`:"ไม่พบคาบเรียนสำหรับห้องนี้"};q.addEventListener("change",N),i.addEventListener("change",()=>{const y=S.find(I=>String(I.n)===String(i.value));b.textContent=y?`ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${y.n} ก่อนเปิดกล้อง`:""}),await N(),(L=g.querySelector("#att-scan-start"))==null||L.addEventListener("click",async()=>{const y=T.find(w=>String(w.id)===String(q.value)),I=parseInt(i.value,10);if(!y||!I){F("กรุณาเลือกห้องและคาบที่จะเช็ค","warning");return}const l=g.querySelector("#att-scan-start");l.disabled=!0,l.textContent="กำลังเปิดฟอร์ม...";try{r(),await ht(t,y,I,{autoOpenScanner:!0})}catch(w){F(w.message||"เปิดสแกนเช็คชื่อไม่สำเร็จ","error")}finally{l.disabled=!1,l.innerHTML=`${fe}<span>เปิดฟอร์มและเริ่มสแกน</span>`}})}catch(T){g.innerHTML=`<div class="py-10 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${Z(se(T))}</div>`}}function vt(){var r;(r=document.getElementById("stc-install-modal"))==null||r.remove();const t=document.createElement("div");t.id="stc-install-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">🔗 ติดตั้งปุ่มเชื่อมกับระบบดูแล</h3>
        <button id="stc-install-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-4 space-y-5 text-sm text-gray-600">
        <p class="text-[11px] text-center bg-amber-50 text-amber-700 rounded-lg px-3 py-2">ใช้ได้ฟรี 1 ห้องเรียนต่อครู 1 คน — ห้องเพิ่มเติมต้องสนับสนุนระบบระดับ 2 ขึ้นไป</p>
        <div class="text-center space-y-2">
          <p class="text-xs font-bold text-indigo-600">① ดึงจากระบบดูแล เข้า pp5</p>
          <p class="text-xs"><b>ลากปุ่มนี้</b> ไปวางที่แถบบุ๊กมาร์กของเบราว์เซอร์ (ทำครั้งเดียว)</p>
          <a
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold shadow-lg"
            style="cursor:grab"
            href="javascript:(function(){var s=document.createElement('script');s.src='https://ghhambal.github.io/pp5online/js/studentcare-bridge.js?v='+Date.now();document.body.appendChild(s);})();"
            onclick="alert('อย่ากดปุ่มนี้ตรงๆ นะครับ — ให้ลาก (drag) ปุ่มนี้ไปวางที่แถบบุ๊กมาร์กด้านบนของเบราว์เซอร์แทน'); return false;"
          >📥 ส่งเช็คชื่อเข้า pp5</a>
        </div>
        <ol class="space-y-1.5 text-xs list-decimal list-inside">
          <li>เปิดหน้าระบบดูแล เลือกห้อง/วันที่ ติ๊กสถานะนักเรียนตามปกติ</li>
          <li>กดปุ่มบุ๊กมาร์กที่ลากไว้ — รอข้อความแจ้งผลมุมขวาล่าง</li>
          <li>ทำซ้ำได้หลายวันตามต้องการ ข้อมูลจะถูกเก็บรอไว้</li>
          <li>กลับมาที่นี่ กดปุ่ม "ระบบดูแล (หลายวัน)" เพื่อเลือกวันที่นำเข้า</li>
        </ol>

        <div class="border-t border-gray-100 pt-4 text-center space-y-2">
          <p class="text-xs font-bold text-purple-600">② ส่งจาก pp5 กลับเข้าระบบดูแล</p>
          <p class="text-xs"><b>ลากปุ่มนี้</b> ไปวางที่แถบบุ๊กมาร์กด้วยเช่นกัน (ทำครั้งเดียว)</p>
          <a
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-lg"
            style="cursor:grab"
            href="javascript:(function(){var s=document.createElement('script');s.src='https://ghhambal.github.io/pp5online/js/studentcare-bridge-push.js?v='+Date.now();document.body.appendChild(s);})();"
            onclick="alert('อย่ากดปุ่มนี้ตรงๆ นะครับ — ให้ลาก (drag) ปุ่มนี้ไปวางที่แถบบุ๊กมาร์กด้านบนของเบราว์เซอร์แทน'); return false;"
          >📤 ส่งจาก pp5 เข้าระบบดูแล</a>
        </div>
        <ol class="space-y-1.5 text-xs list-decimal list-inside">
          <li>ในหน้าเช็คชื่อ pp5-online เปิดคาบที่ต้องการ กดปุ่ม "ส่งไประบบดูแล"</li>
          <li>เปิดหน้าระบบดูแล เลือกห้อง/วันที่เดียวกัน กดปุ่มบุ๊กมาร์กที่ลากไว้</li>
          <li>สคริปต์จะติ๊กสถานะให้อัตโนมัติ — <b>ตรวจสอบให้ดีก่อนกดปุ่ม "บันทึกข้อมูล" ของระบบดูแลเอง</b> (ไม่บันทึกให้อัตโนมัติ)</li>
        </ol>
        <p class="text-[11px] text-gray-400 text-center">ไม่เห็นแถบบุ๊กมาร์ก? กด ⌘/Ctrl+Shift+B เพื่อเปิดก่อน</p>
      </div>
    </div>`,document.body.appendChild(t);const n=()=>t.remove();t.querySelector("#stc-install-close").onclick=n,t.onclick=g=>{g.target===t&&n()}}function wt(t,n){var L;(L=document.getElementById("stc-import-preview"))==null||L.remove();const r={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},g={present:"text-emerald-600",absent:"text-red-600",late:"text-amber-500",excused:"text-blue-500",sick:"text-orange-500"},x=document.createElement("div");x.id="stc-import-preview",x.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4",x.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📥 ข้อมูลจากระบบดูแล (${t.length} คน)</h3>
        <button id="stc-preview-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1">
        ${t.map(({student:T,staged:q})=>`
          <div class="flex items-center justify-between gap-2 py-1.5 border-b border-gray-50 text-xs">
            <span class="text-gray-700 truncate">${Z(T.full_name)}</span>
            <span class="font-bold flex-shrink-0 ${g[q.status]??"text-gray-500"}">${r[q.status]??q.status}</span>
          </div>`).join("")}
      </div>
      <div class="px-4 py-3 border-t flex-shrink-0 flex gap-2">
        <button id="stc-preview-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">ยกเลิก</button>
        <button id="stc-preview-apply" class="flex-1 py-2.5 rounded-xl btn-primary text-white text-sm font-semibold">นำไปใช้</button>
      </div>
    </div>`,document.body.appendChild(x);const m=()=>x.remove();x.querySelector("#stc-preview-close").onclick=m,x.querySelector("#stc-preview-cancel").onclick=m,x.onclick=T=>{T.target===x&&m()},x.querySelector("#stc-preview-apply").onclick=()=>{n(),m()}}const $t={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},kt={present:"text-emerald-600",absent:"text-red-600",late:"text-amber-500",excused:"text-blue-500",sick:"text-orange-500"};function _t(t,n){var x;(x=document.getElementById("stc-bulk-import-preview"))==null||x.remove();const r=document.createElement("div");r.id="stc-bulk-import-preview",r.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4",r.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📥 ข้อมูลจากระบบดูแล (${t.length} วัน)</h3>
        <button id="stc-bulk-preview-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <p class="px-4 pt-2 text-xs text-gray-400">เลือกวันที่ต้องการนำเข้า — กด "ดูรายชื่อ" เพื่อตรวจก่อนบันทึก ข้อมูลของวันที่มีอยู่แล้วจะถูกเขียนทับ</p>
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1.5 mt-1">
        ${t.map((m,L)=>`
        <div class="rounded-xl border ${m.ns.length===0?"border-gray-100 opacity-50":"border-gray-100"} overflow-hidden">
          <label class="flex items-center gap-2 py-2 px-2 text-xs cursor-pointer hover:bg-gray-50">
            <input type="checkbox" class="stc-bulk-date-cb" data-idx="${L}" ${m.ns.length===0?"disabled":"checked"} />
            <span class="flex-1 text-gray-700 font-medium">${oe(m.date)}</span>
            <span class="text-gray-400">${m.matched.length} คน</span>
            ${m.ns.length===0?'<span class="text-red-400 font-bold">ไม่มีคาบ</span>':""}
            ${m.isHoliday?'<span class="text-amber-500 font-bold">วันหยุด</span>':""}
            ${m.hasExisting?'<span class="text-orange-500 font-bold">มีข้อมูลแล้ว</span>':""}
            <button type="button" class="stc-bulk-date-toggle text-indigo-500 font-bold flex-shrink-0" data-idx="${L}">ดูรายชื่อ ▾</button>
          </label>
          <div class="stc-bulk-date-detail hidden border-t border-gray-50 px-2 py-2 space-y-1 max-h-56 overflow-y-auto" data-detail-idx="${L}">
            ${m.matched.map(({student:T,staged:q})=>`
              <div class="flex items-center gap-2 py-1 text-xs">
                ${T.image_url?`<img src="${T.image_url}" class="w-7 h-9 rounded-md object-cover border border-gray-200 shadow-sm flex-shrink-0" />`:'<div class="w-7 h-9 rounded-md bg-gray-100 flex-shrink-0"></div>'}
                <span class="flex-1 text-gray-700 truncate">${Z(T.full_name)}</span>
                <span class="font-bold flex-shrink-0 ${kt[q.status]??"text-gray-500"}">${$t[q.status]??q.status}</span>
              </div>`).join("")}
          </div>
        </div>`).join("")}
      </div>
      <div class="px-4 py-3 border-t flex-shrink-0 flex gap-2">
        <button id="stc-bulk-preview-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">ยกเลิก</button>
        <button id="stc-bulk-preview-apply" class="flex-1 py-2.5 rounded-xl btn-primary text-white text-sm font-semibold">บันทึกที่เลือก</button>
      </div>
    </div>`,document.body.appendChild(r);const g=()=>r.remove();r.querySelector("#stc-bulk-preview-close").onclick=g,r.querySelector("#stc-bulk-preview-cancel").onclick=g,r.onclick=m=>{m.target===r&&g()},r.querySelectorAll(".stc-bulk-date-toggle").forEach(m=>{m.addEventListener("click",()=>{const L=r.querySelector(`.stc-bulk-date-detail[data-detail-idx="${m.dataset.idx}"]`);if(!L)return;const T=L.classList.toggle("hidden");m.textContent=T?"ดูรายชื่อ ▾":"ซ่อนรายชื่อ ▴"})}),r.querySelector("#stc-bulk-preview-apply").onclick=()=>{const m=Array.from(r.querySelectorAll(".stc-bulk-date-cb:checked")).map(L=>t[Number(L.dataset.idx)]);g(),n(m)}}function Fe(t,n,r,g,x,m,L,T=new Set,q=null,i=S=>S,b={}){var e,d,_;const S=document.getElementById("att-form-modal");S&&S.remove();const N=[{key:"present",label:"มา",labelAll:"มาทุกคน",color:"bg-emerald-500 text-white",bulkCls:"bg-emerald-50 text-emerald-700 hover:bg-emerald-100"},{key:"absent",label:"ขาด",labelAll:"ขาดทุกคน",color:"bg-red-500 text-white",bulkCls:"bg-red-50 text-red-600 hover:bg-red-100"},{key:"late",label:"สาย",labelAll:"สายทุกคน",color:"bg-amber-400 text-white",bulkCls:"bg-amber-50 text-amber-600 hover:bg-amber-100"},{key:"excused",label:"ลากิจ",labelAll:"ลากิจทุกคน",color:"bg-blue-400 text-white",bulkCls:"bg-blue-50 text-blue-600 hover:bg-blue-100"},{key:"sick",label:"ลาป่วย",labelAll:"ลาป่วยทุกคน",color:"bg-orange-400 text-white",bulkCls:"bg-orange-50 text-orange-600 hover:bg-orange-100"}],y=L.length>1;let I=y;const l=document.createElement("div");l.id="att-form-modal",l.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4",l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col">
      <!-- Header -->
      <div class="px-4 py-3 border-b flex-shrink-0 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="min-w-0">
            <h3 class="font-bold text-gray-800 text-sm">เช็คชื่อ — คาบที่ ${x}</h3>
            <p class="text-xs text-gray-400">${m} · ${n.class_name}</p>
          </div>
          <button id="att-modal-close"
            class="text-gray-400 hover:text-gray-700 text-lg leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center flex-wrap gap-1.5">
          <button id="btn-att-scan-qr"
            class="text-xs px-3 py-1.5 bg-slate-900 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
            title="สแกน QR Code ของนักเรียนเพื่อเช็คชื่อ">
            ${fe}
            <span>สแกน QR</span>
          </button>
          <button id="btn-att-import-studentcare"
            class="text-xs px-3 py-1.5 bg-indigo-600 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-indigo-700 active:scale-[0.98] transition shadow-sm"
            title="ดึงข้อมูลเช็คชื่อที่ส่งมาจากระบบดูแล (ต้องกดส่งจากหน้าระบบดูแลก่อน)">
            📥 <span>ระบบดูแล</span>
          </button>
          <button id="btn-att-export-studentcare"
            class="text-xs px-3 py-1.5 bg-purple-600 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-purple-700 active:scale-[0.98] transition shadow-sm"
            title="ส่งเช็คชื่อของวันนี้ไปรอให้บุ๊กมาร์กฝั่งระบบดูแลติ๊กให้อัตโนมัติ">
            📤 <span>ส่งไประบบดูแล</span>
          </button>
          ${y?`
          <!-- Toggle ทุกคาบ (ปุ่มสี) -->
          <button id="att-sync-btn"
            class="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all
                   bg-emerald-500 text-white shadow-sm"
            title="คลิกเพื่อเปิด/ปิดการบันทึกทุกคาบในวันนี้">
            ✓ ทุกคาบ (${L.length})
          </button>`:""}
          <!-- Bulk dropdown -->
          <div class="relative" id="bulk-wrap">
            <button id="att-bulk-btn"
              class="text-xs px-2.5 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg
                     font-medium flex items-center gap-1 hover:bg-emerald-200 transition">
              <span id="bulk-label">✓ ทุกคน</span>
              <span class="opacity-60">▾</span>
            </button>
            <div id="att-bulk-dd"
              class="hidden absolute right-0 top-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-xl z-30 py-1 min-w-[130px]">
              ${N.map(s=>`
                <button class="bulk-opt w-full text-left text-xs px-3 py-2 font-medium
                  transition rounded-lg ${s.bulkCls}"
                  data-bulk="${s.key}" data-color="${s.color}" data-all-label="${s.labelAll}">
                  ${s.labelAll}
                </button>`).join("")}
            </div>
          </div>
        </div>
      </div>
      <!-- Student list -->
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1">
        ${r.map((s,B)=>{var M;const u=((M=g[s.id])==null?void 0:M[x])??null,C=u??"present";return`<div class="flex items-center gap-1.5 py-1.5 border-b border-gray-50" data-modal-sid="${s.id}">
            <span class="text-gray-400 text-xs w-5 text-right flex-shrink-0">${B+1}</span>
            ${s.image_url?`<img src="${s.image_url}" class="w-7 h-7 rounded object-cover flex-shrink-0" />`:'<div class="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-xs flex-shrink-0">👤</div>'}
            <span class="flex-1 text-sm text-gray-800 truncate min-w-0">${s.full_name}</span>
            <div class="flex gap-0.5 flex-shrink-0" data-att-touched="${u?"1":"0"}">
              ${N.map(a=>`
                <button class="att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
                  ${C===a.key?a.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
                  data-modal-sid="${s.id}" data-status="${a.key}" data-color="${a.color}">
                  ${a.label}
                </button>`).join("")}
            </div>
          </div>`}).join("")}
      </div>
      <!-- Save button -->
      <div class="px-5 py-4 border-t flex-shrink-0">
        <button id="att-modal-save"
          class="btn-primary w-full py-3 text-white font-semibold text-sm rounded-xl">
          💾 บันทึกการเช็คชื่อ
        </button>
      </div>
    </div>`,document.body.appendChild(l);const w=l.querySelector("#att-sync-btn");w&&w.addEventListener("click",()=>{I=!I,w.className=`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all shadow-sm

        ${I?"bg-emerald-500 text-white":"bg-gray-200 text-gray-500"}`,w.innerHTML=I?`✓ ทุกคาบ (${L.length})`:`✗ ทุกคาบ (${L.length})`,F(I?`เปิด: บันทึกทั้ง ${L.length} คาบในวันที่ ${m}`:`ปิด: บันทึกเฉพาะคาบที่ ${x}`,I?"success":"info")});const o=l.querySelector("#att-bulk-btn"),f=l.querySelector("#att-bulk-dd"),k=l.querySelector("#bulk-label");o==null||o.addEventListener("click",s=>{s.stopPropagation(),f.classList.toggle("hidden")});const p=()=>f==null?void 0:f.classList.add("hidden");document.addEventListener("click",p,{once:!0}),l.querySelectorAll(".bulk-opt").forEach(s=>{s.addEventListener("click",B=>{B.stopPropagation();const u=s.dataset.bulk,C=s.dataset.color,M=s.dataset.allLabel;f.classList.add("hidden"),o.className=`text-xs px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition ${C}`,k.textContent=M,r.forEach(a=>{var j;const c=l.querySelector(`[data-modal-sid="${a.id}"]`);(j=c==null?void 0:c.querySelector("[data-att-touched]"))==null||j.setAttribute("data-att-touched","1"),c==null||c.querySelectorAll(".att-modal-status").forEach(P=>{P.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

            ${P.dataset.status===u?P.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),document.addEventListener("click",p,{once:!0})})}),l.addEventListener("click",s=>{var a;const B=s.target.closest(".att-modal-status");if(!B)return;const u=B.dataset.modalSid,C=B.dataset.status,M=l.querySelector(`[data-modal-sid="${u}"]`);(a=M==null?void 0:M.querySelector("[data-att-touched]"))==null||a.setAttribute("data-att-touched","1"),M==null||M.querySelectorAll(".att-modal-status").forEach(c=>{c.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

        ${c.dataset.status===C?c.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),(e=l.querySelector("#btn-att-scan-qr"))==null||e.addEventListener("click",async()=>{var K,h,$;const s=window._pp5DonorTierIndex>0,B=qt(t==null?void 0:t.id,s);if(!B.allowed){(K=document.getElementById("att-scan-paywall"))==null||K.remove();const v=document.createElement("div");v.id="att-scan-paywall",v.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",v.innerHTML=`
        <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
          <button id="pw-close-btn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
          <div class="text-6xl mt-4">🔒</div>
          <p class="font-bold text-gray-800 text-lg">สิทธิ์การสแกนทดลองใช้งานเต็มแล้ว</p>
          <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สแกน QR เพื่อเช็คชื่อคาบเรียนจำกัดทดลองฟรี ${B.limit} ครั้งต่อสัปดาห์สำหรับผู้ใช้งานทั่วไป<br><br>ร่วมสนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัดครับ</p>
          <button id="pw-donate-btn" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        </div>`,document.body.appendChild(v),v.querySelector("#pw-close-btn").addEventListener("click",()=>v.remove()),v.querySelector("#pw-donate-btn").addEventListener("click",()=>{var A;v.remove(),(A=document.getElementById("btn-donate-float"))==null||A.click()});return}(h=document.getElementById("att-scanner-overlay"))==null||h.remove();const u=document.createElement("div");u.id="att-scanner-overlay",u.className="fixed inset-0 z-[95] flex flex-col bg-slate-950 items-center justify-center p-4",u.innerHTML=`
      <style>
        @keyframes laser-sweep {
          0% { top: 0%; opacity: 0.3; }
          50% { opacity: 0.9; }
          100% { top: 100%; opacity: 0.3; }
        }
        .animate-laser-move {
          position: absolute;
          animation: laser-sweep 2.2s infinite ease-in-out;
        }
        .scan-flash-success {
          animation: flash-green 0.6s ease-out;
        }
        .scan-flash-error {
          animation: flash-red 0.6s ease-out;
        }
        @keyframes flash-green {
          0% { box-shadow: inset 0 0 0 0px #10b981; }
          50% { box-shadow: inset 0 0 0 12px #10b981; }
          100% { box-shadow: inset 0 0 0 0px #10b981; }
        }
        @keyframes flash-red {
          0% { box-shadow: inset 0 0 0 0px #ef4444; }
          50% { box-shadow: inset 0 0 0 12px #ef4444; }
          100% { box-shadow: inset 0 0 0 0px #ef4444; }
        }
      </style>
      <div class="relative w-full max-w-sm max-h-[calc(100vh-2rem)] overflow-y-auto flex flex-col text-white">
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
          <div>
            <h4 class="font-bold text-sm flex items-center gap-2">
              ${Ce}
              <span>กล้องสแกนเช็คชื่อ</span>
            </h4>
            <p class="text-xs text-slate-400">เล็งกล้องไปที่ QR Code ของนักเรียน</p>
          </div>
          <button id="btn-close-att-scanner" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold">✕</button>
        </div>

        <!-- Camera Area -->
        <div id="att-scanner-container" class="relative overflow-hidden bg-slate-900 rounded-3xl w-full aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4">
          <div id="att-camera-reader" class="w-full h-full rounded-2xl overflow-hidden"></div>
          
          <!-- Viewfinder -->
          <div class="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)]">
              <!-- Corners -->
              <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400 rounded-tl"></div>
              <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400 rounded-tr"></div>
              <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400 rounded-bl"></div>
              <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400 rounded-br"></div>
              <!-- Laser sweeper -->
              <div class="w-full h-0.5 bg-emerald-400 animate-laser-move"></div>
            </div>
          </div>
        </div>

        <!-- Feedback Panel (Dynamic) -->
        <div id="scan-feedback-panel" class="mb-4 min-h-[100px]">
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
            ยังไม่มีข้อมูลสแกนในคาบเรียนนี้
          </div>
        </div>

        <!-- Scanned Students List -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
          <div class="flex items-center justify-between gap-2 mb-2">
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">นักเรียนที่สแกนแล้ว (มาเรียน)</p>
            <span id="scan-history-count" class="text-[10px] font-bold text-emerald-400">0 คน</span>
          </div>
          <div id="scan-history-list" class="space-y-1.5 text-xs max-h-56 overflow-y-auto pr-1">
            <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
          </div>
        </div>
      </div>`,document.body.appendChild(u);let C=null;const M=[],a=new Map,c=v=>{const A=l.querySelector(`[data-modal-sid="${v}"]`),R=A==null?void 0:A.querySelector("[data-att-touched]"),D=Array.from((A==null?void 0:A.querySelectorAll(".att-modal-status"))??[]).find(W=>!W.className.includes("bg-white"));return{touched:(R==null?void 0:R.dataset.attTouched)==="1",status:(D==null?void 0:D.dataset.status)??null}},j=(v,A)=>{const R=l.querySelector(`[data-modal-sid="${v}"]`),D=R==null?void 0:R.querySelector("[data-att-touched]");D&&(D.dataset.attTouched=A!=null&&A.touched?"1":"0"),R==null||R.querySelectorAll(".att-modal-status").forEach(W=>{const V=N.find(ee=>ee.key===W.dataset.status);W.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
          ${A!=null&&A.status&&W.dataset.status===A.status?(V==null?void 0:V.color)??W.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})},P=()=>{const v=u.querySelector("#scan-history-list"),A=u.querySelector("#scan-history-count");if(A&&(A.textContent=`${M.length} คน`),!!v){if(!M.length){v.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}v.innerHTML=M.map((R,D)=>`
        <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
          <span class="w-6 text-center text-slate-500 font-mono flex-shrink-0">${M.length-D}</span>
          <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${Z(R.full_name)}</span>
          <span class="text-emerald-400 font-bold text-[10px] flex-shrink-0">มา</span>
          <button type="button"
            class="btn-att-cancel-scan-row px-2 py-1 rounded-lg bg-red-950/50 text-red-300 border border-red-800/70 hover:bg-red-500 hover:text-white transition text-[10px] font-bold flex-shrink-0"
            data-sid="${R.id}">
            ยกเลิก
          </button>
        </div>
      `).join("")}};($=u.querySelector("#scan-history-list"))==null||$.addEventListener("click",v=>{const A=v.target.closest(".btn-att-cancel-scan-row");if(!A)return;const R=Number(A.dataset.sid),D=M.findIndex(ee=>Number(ee.id)===R);if(D===-1)return;const[W]=M.splice(D,1);j(R,a.get(R)),a.delete(R),P();const V=u.querySelector("#scan-feedback-panel");V&&(V.innerHTML=`
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400 animate-fade">
            ยกเลิกการสแกนของ <span class="font-bold text-slate-200">${Z(W.full_name)}</span> แล้ว
          </div>`),F(`ยกเลิกการสแกนของ ${W.full_name} แล้ว`,"success")});const Q=async()=>{C&&await C.stop().catch(()=>{}),r.forEach(v=>{const A=l.querySelector(`[data-modal-sid="${v.id}"]`),R=A==null?void 0:A.querySelector("[data-att-touched]");if(!((R==null?void 0:R.dataset.attTouched)==="1")){const W=l.querySelector(`.att-modal-status[data-modal-sid="${v.id}"][data-status="absent"]`);W&&(W.classList.contains("bg-red-500")||W.click())}}),u.remove()};u.querySelector("#btn-close-att-scanner").addEventListener("click",Q);try{const v=await Bt();C=new v("att-camera-reader");let A=null,R=0,D=!1;const W=V=>{const ee=u.querySelector("#att-scanner-container"),E=u.querySelector("#scan-feedback-panel"),H=z=>{const U=z?"scan-flash-success":"scan-flash-error";ee.classList.add(U),setTimeout(()=>ee.classList.remove(U),600)};let O=null;try{let z=V;if(V.startsWith("SQ:")){const[G,X,le]=V.split(":"),re=parseInt(le,10),ge=Math.floor(Date.now()/1e3)-re;if(ge>60||ge<-60)throw new Error("QR Code หมดอายุแล้ว");z=X}if(O=r.find(G=>G.student_code===z),!O)throw new Error("ไม่พบรายชื่อในคลาสเรียนนี้");if(M.some(G=>G.id===O.id))throw new Error("เช็คชื่อซ้ำ! นักเรียนคนนี้ได้รับการสแกนไปแล้ว");a.has(O.id)||a.set(O.id,c(O.id));const J=l.querySelector(`.att-modal-status[data-modal-sid="${O.id}"][data-status="present"]`);J&&(J.classList.contains("bg-emerald-500")||J.click()),Me("success"),H(!0),!s&&!D&&(At(t==null?void 0:t.id,B.weekMonday),D=!0),M.unshift(O);const Y=O.image_url?`<img src="${O.image_url}" class="w-12 h-16 object-cover object-top rounded-xl border border-slate-700" />`:`<div class="w-12 h-16 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold text-lg flex items-center justify-center">${O.full_name.charAt(0)}</div>`;E.innerHTML=`
            <div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              ${Y}
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">✓ สแกนสำเร็จ</span>
                <h4 class="font-extrabold text-slate-200 text-sm mt-1 truncate">${O.full_name}</h4>
                <p class="text-xs text-slate-400 truncate">รหัส ${O.student_code}</p>
              </div>
            </div>`,P()}catch(z){Me("error"),H(!1);const U=O?O.full_name:"ไม่พบข้อมูล",J=O?`รหัส ${O.student_code}`:`ข้อมูลดิบ: ${V}`;E.innerHTML=`
            <div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              <div class="w-12 h-16 rounded-xl bg-red-950/80 border border-red-900 text-red-400 font-bold text-xl flex items-center justify-center">❌</div>
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-red-500/20 text-red-450 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
                <h4 class="font-bold text-slate-200 text-sm mt-1 truncate">${U}</h4>
                <p class="text-xs text-slate-400 truncate">${J}</p>
                <p class="text-xs font-bold text-red-500 mt-1">${z.message}</p>
              </div>
            </div>`}};await C.start({facingMode:"environment"},{fps:25,aspectRatio:1},V=>{V===A&&Date.now()-R<2e3||(A=V,R=Date.now(),W(V))},()=>{})}catch(v){console.error("Attendance QR scanner initialization failed:",v),F("ไม่สามารถเปิดกล้องได้: "+v.message,"error"),u.remove()}}),(d=l.querySelector("#btn-att-import-studentcare"))==null||d.addEventListener("click",async()=>{const s=_e(r,n);if(!s){F("หาห้องเรียนของนักเรียนในคลาสนี้ไม่เจอ","error");return}const B=(window._pp5DonorTierIndex??0)>=2,u=Se(t==null?void 0:t.id,s,B);if(!u.allowed){Le(u.claimedRoom,s);return}!B&&!u.claimedRoom&&Ee(t==null?void 0:t.id,s);let C;try{C=await et(s,m)}catch(c){F("ดึงข้อมูลไม่สำเร็จ: "+se(c),"error");return}if(!C.length){F(`ยังไม่มีข้อมูลจากระบบดูแลสำหรับห้อง ${s} วันที่ ${m} — ไปกดส่งข้อมูลจากหน้าระบบดูแลก่อน`,"warning");return}const M=Object.fromEntries(C.map(c=>[c.student_code,c])),a=r.map(c=>({student:c,staged:M[c.student_code]})).filter(c=>c.staged);if(!a.length){F("มีข้อมูลจากระบบดูแลสำหรับวันนี้ แต่ไม่ตรงกับรหัสนักเรียนในห้องนี้เลยสักคน","error");return}wt(a,()=>{a.forEach(({student:c,staged:j})=>{var Q;const P=l.querySelector(`[data-modal-sid="${c.id}"]`);(Q=P==null?void 0:P.querySelector("[data-att-touched]"))==null||Q.setAttribute("data-att-touched","1"),P==null||P.querySelectorAll(".att-modal-status").forEach(K=>{K.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
            ${K.dataset.status===j.status?K.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),F(`นำเข้าข้อมูล ${a.length} คนจากระบบดูแลแล้ว — ตรวจสอบแล้วกด "บันทึกการเช็คชื่อ" อีกครั้ง`,"success")})}),(_=l.querySelector("#btn-att-export-studentcare"))==null||_.addEventListener("click",async()=>{const s=_e(r,n);if(!s){F("หาห้องเรียนของนักเรียนในคลาสนี้ไม่เจอ","error");return}const B=(window._pp5DonorTierIndex??0)>=2,u=Se(t==null?void 0:t.id,s,B);if(!u.allowed){Le(u.claimedRoom,s);return}!B&&!u.claimedRoom&&Ee(t==null?void 0:t.id,s);const C=r.map(a=>{const c=l.querySelector(`[data-modal-sid="${a.id}"]`),j=Array.from((c==null?void 0:c.querySelectorAll(".att-modal-status"))??[]).find(Q=>!Q.className.includes("bg-white")),P=(j==null?void 0:j.dataset.status)??"present";return{studentCode:a.student_code,status:P,studentName:a.full_name,classId:n.id}}),M=l.querySelector("#btn-att-export-studentcare");M.disabled=!0,M.textContent="กำลังส่ง...";try{await tt(s,m,C),F(`ส่งเช็คชื่อ ${C.length} คนไปรอที่ระบบดูแลแล้ว — ไปเปิดหน้าระบบดูแลห้อง ${s} วันที่ ${m} แล้วกดปุ่มบุ๊กมาร์ก "ส่งจาก pp5" ได้เลย`,"success")}catch(a){F("ส่งไม่สำเร็จ: "+se(a),"error")}finally{M.disabled=!1,M.innerHTML="📤 <span>ส่งไประบบดูแล</span>"}}),l.querySelector("#att-modal-close").addEventListener("click",()=>l.remove()),l.addEventListener("click",s=>{s.target===l&&l.remove()}),b.autoOpenScanner&&setTimeout(()=>{var s;return(s=l.querySelector("#btn-att-scan-qr"))==null?void 0:s.click()},150),l.querySelector("#att-modal-save").addEventListener("click",async()=>{if(T.has(m)){F("วันหยุดโรงเรียน — ไม่สามารถบันทึกได้","warning"),l.remove();return}const s=l.querySelector("#att-modal-save");s.disabled=!0,s.textContent="กำลังบันทึก...";const B=y&&I?L.map(u=>u.n):[x];try{const u=r.map(M=>{const a=l.querySelector(`[data-modal-sid="${M.id}"]`),c=Array.from((a==null?void 0:a.querySelectorAll(".att-modal-status"))??[]).find(P=>!P.className.includes("bg-white")),j=(c==null?void 0:c.dataset.status)??"present";return{student:M,status:j}}),C=[];for(const M of B)for(const{student:a,status:c}of u)g[a.id]={...g[a.id]??{},[M]:c},C.push({class_id:q??n.id,student_id:a.id,session_number:i(M),check_date:m,status:c});await he(C),C.forEach(M=>{const a=document.querySelector(`.att-cell[data-sid="${M.student_id}"][data-session="${M.session_number}"]`);if(!a)return;Object.values(ie).forEach(j=>a.classList.remove(j.bg));const c=ie[M.status];c&&(a.classList.add(c.bg),a.innerHTML=`<span class="${c.color}">${c.label}</span>`)}),F(`บันทึก${B.length>1?` ${B.length} คาบ`:""} แล้ว ✅`,"success"),l.remove()}catch(u){F("บันทึกไม่สำเร็จ: "+se(u),"error"),s.disabled=!1,s.textContent="💾 บันทึกการเช็คชื่อ"}})}async function Dt(t){var q;ue("attendance"),xe("เช็คชื่อ","attendance");const n=window._preSelectClass??null;window._preSelectClass=null;const r=await ye((t==null?void 0:t.id)??null).catch(()=>[]),g=De();if(ae(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">เลือกวิชาและวันที่เพื่อเช็คชื่อ</p>
      </div>
    </div>
    ${r.length?`
    <!-- Selector -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5 mb-5">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ห้องเรียน / วิชา</label>
          <select id="att-class" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400">
            <option value="">— เลือกห้อง —</option>
            ${r.map(i=>{var b;return`<option value="${i.id}" ${String(i.id)===String(n)?"selected":""}>${i.class_name} — ${((b=i.master_subjects)==null?void 0:b.subject_name)??"—"}</option>`}).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">วันที่</label>
          <input id="att-date" type="date" value="${g}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400" />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">คาบที่</label>
          <input id="att-period" type="number" min="1" max="8" value="1"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400" />
        </div>
      </div>
      <button id="att-load-btn"
        class="mt-3 btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl w-full sm:w-auto">
        โหลดรายชื่อ
      </button>
    </div>
    <!-- Student List -->
    <div id="att-student-wrap"></div>`:`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
      <p class="text-4xl mb-3">✅</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">ลงทะเบียนห้องเรียนก่อน</p>
    </div>`}
  </div>`),!r.length)return;n&&setTimeout(()=>{var i;return(i=document.getElementById("att-load-btn"))==null?void 0:i.click()},100);const x=[{key:"present",label:"มา",color:"bg-emerald-500 text-white",border:"border-emerald-500"},{key:"absent",label:"ขาด",color:"bg-red-500 text-white",border:"border-red-500"},{key:"late",label:"สาย",color:"bg-amber-400 text-white",border:"border-amber-400"},{key:"sick",label:"ลาป่วย",color:"bg-blue-400 text-white",border:"border-blue-400"},{key:"excused",label:"ลากิจ",color:"bg-purple-400 text-white",border:"border-purple-400"}];let m=[],L={};const T=()=>{var N;const i=document.getElementById("att-student-wrap");if(!i)return;if(!m.length){i.innerHTML=`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-10 text-center text-gray-400">
        <p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียน</p></div>`;return}const b=Object.values(L).filter(y=>y==="present").length,S=Object.values(L).filter(y=>y==="absent").length;i.innerHTML=`
      <!-- Summary bar -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex items-center justify-between">
        <div class="flex gap-4 text-sm">
          <span class="text-emerald-600 font-semibold">มา ${b}</span>
          <span class="text-red-500 font-semibold">ขาด ${S}</span>
          <span class="text-gray-400">รวม ${m.length}</span>
        </div>
        <div class="flex gap-2">
          <button onclick="window._attSetAll('present')"
            class="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200">✓ มาทุกคน</button>
          <button id="att-save-btn"
            class="btn-primary px-4 py-1.5 text-white text-xs font-semibold rounded-lg">
            💾 บันทึก
          </button>
        </div>
      </div>
      <!-- Student rows -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
            <tr>
              <th class="px-4 py-3 text-left w-8">#</th>
              <th class="px-4 py-3 text-left">นักเรียน</th>
              <th class="px-4 py-3 text-center">สถานะ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${m.map((y,I)=>{const l=L[y.id]??"present";return`
              <tr class="hover:bg-gray-50 transition" data-sid="${y.id}">
                <td class="px-4 py-2 text-gray-400 text-xs">${I+1}</td>
                <td class="px-4 py-2">
                  <div class="flex items-center gap-2">
                    ${y.image_url?`<img src="${y.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200" />`:""}
                    <div>
                      <p class="font-medium text-gray-800 text-sm">${y.full_name}</p>
                      <p class="text-xs text-gray-400 font-mono">${y.student_code}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2">
                  <div class="flex gap-1 justify-center flex-wrap">
                    ${x.map(w=>`
                    <button class="att-status-btn text-xs px-2 py-1 rounded-lg border transition font-medium
                      ${l===w.key?w.color+" "+w.border:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
                      data-sid="${y.id}" data-status="${w.key}">
                      ${w.label}
                    </button>`).join("")}
                  </div>
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>`,document.querySelectorAll(".att-status-btn").forEach(y=>{y.addEventListener("click",()=>{const{sid:I,status:l}=y.dataset;L[I]=l,document.querySelectorAll(`.att-status-btn[data-sid="${I}"]`).forEach(w=>{const o=x.find(f=>f.key===w.dataset.status);w.className=w.className.replace(/bg-\w+-\d+ text-white border-\w+-\d+/g,""),w.dataset.status===l?w.classList.add(...o.color.split(" "),o.border):w.classList.add("bg-white","text-gray-500","border-gray-200")}),T()})}),(N=document.getElementById("att-save-btn"))==null||N.addEventListener("click",async()=>{var o,f,k;const y=document.getElementById("att-class").value,I=document.getElementById("att-date").value,l=parseInt(document.getElementById("att-period").value)||1,w=document.getElementById("att-save-btn");if(!y||!I){F("กรุณาเลือกห้องและวันที่","warning");return}w.disabled=!0,w.textContent="กำลังบันทึก...";try{const p=r.find(M=>String(M.id)===y),e=((o=p==null?void 0:p.master_subjects)==null?void 0:o.credit)??1,d=((f=p==null?void 0:p.master_subjects)==null?void 0:f.subject_group)==="ACDMVOC",_=d?await me(p.id).catch(()=>[]):[],B=(p?be(p,e,_.length?_:null,d):[]).filter(M=>M.ds===I),u=((k=B[l-1]??B[0]??null)==null?void 0:k.n)??null,C=m.map(M=>({class_id:Number(y),student_id:M.id,check_date:I,period_no:l,session_number:u,status:L[M.id]??"present"}));await he(C),F(`บันทึกเช็คชื่อ ${C.length} คน สำเร็จ ✅`,"success")}catch(p){F("บันทึกไม่สำเร็จ: "+se(p),"error")}finally{w.disabled=!1,w.textContent="💾 บันทึก"}})};window._attSetAll=i=>{m.forEach(b=>{L[b.id]=i}),T()},(q=document.getElementById("att-load-btn"))==null||q.addEventListener("click",async()=>{var N,y,I;const i=document.getElementById("att-class").value,b=document.getElementById("att-date").value;if(!i){F("กรุณาเลือกห้องเรียน","warning");return}const S=document.getElementById("att-load-btn");S.disabled=!0,S.textContent="กำลังโหลด...";try{const{data:l}=await(await ce(async()=>{const{supabase:u}=await import("./supabase-BV-W2lsh.js").then(C=>C.a);return{supabase:u}},[])).supabase.from("class_students").select("student_id, students(id, student_code, full_name, image_url, main_room)").eq("class_id",i).order("students(student_code)");m=(l??[]).map(u=>u.students).filter(Boolean);const w=await Qe(Number(i),b),o=r.find(u=>String(u.id)===i),f=((N=o==null?void 0:o.master_subjects)==null?void 0:N.credit)??1,k=((y=o==null?void 0:o.master_subjects)==null?void 0:y.subject_group)==="ACDMVOC",p=k?await me(o.id).catch(()=>[]):[],e=o?be(o,f,p.length?p:null,k):[],d=parseInt(document.getElementById("att-period").value)||1,_=e.filter(u=>u.ds===b),s=((I=_[d-1]??_[0]??null)==null?void 0:I.n)??null,B=s!==null?w.filter(u=>u.session_number===s):w;L={},m.forEach(u=>{L[u.id]="present"}),B.forEach(u=>{L[u.student_id]=u.status}),T()}catch(l){F("โหลดไม่สำเร็จ: "+se(l),"error")}finally{S.disabled=!1,S.textContent="โหลดรายชื่อ"}})}async function Vt(t,n){ue("life-skill-score"),xe("บันทึกคะแนนทักษะชีวิต");const r=n.filter(q=>q.category==="สามัญ");if(!r.length){ae(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🌱</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษาสามัญ</p>
      <p class="text-xs mt-1">ฟีเจอร์นี้สำหรับครูที่ปรึกษาชั้นสามัญเท่านั้น</p>
    </div>`);return}const g=await ve().catch(()=>({})),x=parseInt(g.academicYear??2568),m=parseInt(g.semester??1);let L=r[0].main_room;const T=async q=>{var C,M;L=q,ae(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);const[i,b]=await Promise.all([at(x,m,"สามัญ").catch(()=>[]),Ne(q).catch(()=>[])]);if(!i.length){ae(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">🌱</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนทักษะชีวิต</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนทักษะชีวิต" ก่อนครับ</p>
      </div>`);return}const S=i.map(a=>a.id),N=await nt(S,b.map(a=>a.id)).catch(()=>[]),y={};N.forEach(a=>{y[a.student_id]||(y[a.student_id]={}),y[a.student_id][a.column_id]=a.score});const I=i.reduce((a,c)=>a+(c.max_score??0),0),l="sticky left-0 z-10 bg-white border-r border-gray-100",w="sticky z-10 bg-white border-r border-gray-100",o="border border-gray-100 text-center text-xs px-2 py-2 font-medium";ae(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">🌱 คะแนนทักษะชีวิต</h2>
        ${r.length>1?`
        <select id="ls-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${r.map(a=>`<option value="${a.main_room}" ${a.main_room===q?"selected":""}>${a.main_room}</option>`).join("")}
        </select>`:`<span class="text-sm font-semibold text-emerald-700">${q}</span>`}
        <button id="ls-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600">
          ซ่อนคะแนนรวม
        </button>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${m} / ${x}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 ใช้ <b>Tab / →</b> เลื่อนขวา · <b>Enter / ↓</b> เลื่อนลง · <b>↑ ↓ ← →</b> เลื่อนทิศทาง · บันทึกอัตโนมัติเมื่อออกจากช่อง
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${l} ${o} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${w} ${o} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${w} ${o} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${i.map(a=>`
              <th class="${o} bg-emerald-50 text-emerald-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${a.name==="เดินสวนสนาม"?"🔒 ":""}${a.name}</div>
                <div class="text-[10px] font-normal text-emerald-600 mt-0.5">/${a.max_score}</div>
              </th>`).join("")}
              <th id="ls-total-th" class="${o} bg-indigo-50 text-indigo-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${I}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            ${b.map((a,c)=>{const j=y[a.id]??{},P=i.reduce((Q,K)=>Q+(parseFloat(j[K.id]??0)||0),0);return`<tr class="hover:bg-gray-50/50 ls-row" data-sid="${a.id}">
                <td class="${l} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${c+1}</td>
                <td class="${w} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${a.student_code}</td>
                <td class="${w} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${a.image_url?`<img src="${a.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`:`<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-emerald-200 to-teal-200
                                    flex items-center justify-center text-xs font-bold text-emerald-700 flex-shrink-0">
                           ${(a.full_name??"?").charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${a.full_name}</span>
                  </div>
                </td>
                ${i.map(Q=>{const K=j[Q.id]??"";return Q.name==="เดินสวนสนาม"?`<td class="border border-gray-100 px-2 py-2 text-center bg-slate-50 text-slate-600 font-semibold"
                      title="คะแนนส่วนกลาง ครูที่ปรึกษาไม่สามารถแก้ไขได้">
                      ${K===""?"—":K}
                    </td>`:`<td class="border border-gray-100 p-0 ls-score-cell"
                    data-sid="${a.id}" data-cid="${Q.id}" data-max="${Q.max_score}">
                    <input type="number" min="0" max="${Q.max_score}" step="0.5"
                      class="ls-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${K}" placeholder="—"
                      data-initial-value="${K}"
                      data-sid="${a.id}" data-cid="${Q.id}" data-max="${Q.max_score}" data-row="${c}" data-col="${i.filter(h=>h.name!=="เดินสวนสนาม").findIndex(h=>h.id===Q.id)}" />
                  </td>`}).join("")}
                <td class="border border-gray-100 text-center font-semibold text-indigo-700 ls-total" data-sid="${a.id}">
                  ${P>0?P.toFixed(1).replace(/\.0$/,""):"—"}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>`),(C=document.getElementById("ls-room-sel"))==null||C.addEventListener("change",a=>T(a.target.value));let f=!0;(M=document.getElementById("ls-toggle-total-btn"))==null||M.addEventListener("click",function(){f=!f;const a=f?"":"none",c=document.getElementById("ls-total-th");c&&(c.style.display=a),document.querySelectorAll(".ls-total").forEach(j=>j.style.display=a),this.textContent=f?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!f),this.classList.toggle("border-amber-300",!f),this.classList.toggle("text-amber-700",!f)});const k=[...document.querySelectorAll(".ls-input")],p=i.filter(a=>a.name!=="เดินสวนสนาม").length,e=b.length,d=(a,c)=>k.find(j=>+j.dataset.row===a&&+j.dataset.col===c),_=(a,c)=>{a<0&&(a=0),a>=e&&(a=e-1),c<0&&(c=p-1),c>=p&&(c=0);const j=d(a,c);j==null||j.focus(),j==null||j.select()},s=(a,c)=>{const j=a.closest("td");if(!j)return;const P=c?"ring-2 ring-inset ring-emerald-400 bg-emerald-50":"ring-2 ring-inset ring-red-400 bg-red-50";j.classList.add(...P.split(" ")),setTimeout(()=>j.classList.remove(...P.split(" ")),1200)},B=a=>{const c=document.querySelector(`.ls-total[data-sid="${a}"]`);if(!c)return;const P=k.filter(Q=>+Q.dataset.sid==+a).reduce((Q,K)=>Q+(parseFloat(K.value)||0),0);c.textContent=P>0?P.toFixed(1).replace(/\.0$/,""):"—"},u=async a=>{const c=+a.dataset.sid,j=+a.dataset.cid,P=+a.dataset.max,Q=a.value.trim();if(Q===(a.dataset.initialValue??""))return;const K=Q===""?null:parseFloat(Q);if(K!==null&&(K<0||K>P)){s(a,!1);return}try{await it(c,j,K,(t==null?void 0:t.id)??null),a.dataset.initialValue=Q,s(a,!0),B(c)}catch(h){console.error("[life skill save]",h),s(a,!1),F(`บันทึกทักษะชีวิตไม่สำเร็จ: ${se(h)}`,"error")}};k.forEach(a=>{a.addEventListener("blur",()=>u(a)),a.addEventListener("keydown",c=>{const j=+a.dataset.row,P=+a.dataset.col;switch(c.key){case"Tab":c.preventDefault(),c.shiftKey?P>0?_(j,P-1):_(j-1,p-1):P<p-1?_(j,P+1):_(j+1,0);break;case"Enter":c.preventDefault(),u(a),j<e-1?_(j+1,P):_(0,P);break;case"ArrowDown":c.preventDefault(),_(j<e-1?j+1:0,P);break;case"ArrowUp":c.preventDefault(),_(j>0?j-1:e-1,P);break;case"ArrowRight":c.preventDefault(),P<p-1?_(j,P+1):_(j+1,0);break;case"ArrowLeft":c.preventDefault(),P>0?_(j,P-1):_(j-1,p-1);break;case"Home":c.preventDefault(),c.ctrlKey?_(0,0):_(j,0);break;case"End":c.preventDefault(),c.ctrlKey?_(e-1,p-1):_(j,p-1);break;case"Escape":a.blur();break}}),a.addEventListener("input",()=>{const c=+a.dataset.max,j=String(Math.floor(c)).length;if(a.value.replace(".","").replace("-","").length>=j&&!a.value.includes(".")){const Q=+a.dataset.row,K=+a.dataset.col;u(a),setTimeout(()=>_(Q,K+1),50)}})})};T(L)}async function Wt(t,n=null){ue("reading-score"),xe("บันทึกคะแนนอ่านคิดวิเคราะห์");const r=await ve().catch(()=>({})),g=parseInt(r.academicYear??2568),x=parseInt(r.semester??1);xt(r);const m=t?await ye(t.id).catch(()=>[]):[],L=[...new Set(m.map(i=>i.class_name).filter(Boolean))].sort();if(!L.length){ae(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">📖</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">กรุณาลงทะเบียนห้องเรียนก่อนบันทึกคะแนน</p>
    </div>`);return}let T=n&&L.includes(n)?n:L[0];const q=async i=>{var Q,K;T=i,ae(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);let b,S;try{[b,S]=await Promise.all([lt(g,x),Ne(i)])}catch(h){ae(`<div class="max-w-lg mx-auto text-center py-16 text-red-500">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium">โหลดรายชื่อนักเรียนไม่สำเร็จ</p>
        <p class="text-xs mt-1 text-gray-400">กรุณาตรวจสอบอินเทอร์เน็ตแล้วเปิดหน้านี้อีกครั้ง</p>
      </div>`),F(`โหลดข้อมูลไม่สำเร็จ: ${se(h)}`,"error");return}if(!b.length){ae(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนอ่านคิดวิเคราะห์</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนอ่านคิดวิเคราะห์" ก่อนครับ</p>
      </div>`);return}const N=b.map(h=>h.id);let y;try{y=await dt(N,S.map(h=>h.id))}catch(h){ae(`<div class="max-w-lg mx-auto text-center py-16 text-red-500">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium">โหลดคะแนนไม่สำเร็จ</p>
        <p class="text-xs mt-1 text-gray-400">ระบบจะไม่แสดงช่องว่างแทนคะแนน กรุณาตรวจสอบอินเทอร์เน็ตแล้วเปิดหน้านี้อีกครั้ง</p>
      </div>`),F(`โหลดคะแนนไม่สำเร็จ: ${se(h)}`,"error");return}const I={};y.forEach(h=>{I[h.student_id]||(I[h.student_id]={}),I[h.student_id][h.column_id]=h.score});const l=b.reduce((h,$)=>h+($.max_score??0),0),w="sticky left-0 z-10 bg-white border-r border-gray-100",o="sticky z-10 bg-white border-r border-gray-100",f="border border-gray-100 text-center text-xs px-2 py-2 font-medium";ae(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-indigo-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">📖 คะแนนอ่านคิดวิเคราะห์และเขียน</h2>
        ${L.length>1?`
        <select id="rs-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${L.map(h=>`<option value="${h}" ${h===i?"selected":""}>${h}</option>`).join("")}
        </select>`:`<span class="text-sm font-semibold text-indigo-700">${i}</span>`}
        <button id="rs-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-600">
          ซ่อนคะแนนรวม
        </button>
        <span id="rs-save-status" class="text-xs text-gray-400" aria-live="polite">บันทึกอัตโนมัติ</span>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${x} / ${g}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 <b>Tab / →</b> ขวา · <b>Enter / ↓</b> ลง · <b>↑ ↓ ← →</b> เลื่อน · บันทึกอัตโนมัติ
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${w} ${f} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${o} ${f} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${o} ${f} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${b.map(h=>`
              <th class="${f} bg-indigo-50 text-indigo-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${h.name}</div>
                <div class="text-[10px] font-normal text-indigo-500 mt-0.5">/${h.max_score}</div>
              </th>`).join("")}
              <th id="rs-total-th" class="${f} bg-violet-50 text-violet-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${l}</span>
              </th>
              <th id="rs-score100-th" class="${f} bg-indigo-50 text-indigo-700" style="min-width:60px">
                /100
              </th>
              <th id="rs-label-th" class="${f} bg-purple-50 text-purple-700" style="min-width:90px">
                ผลประเมิน
              </th>
            </tr>
          </thead>
          <tbody>
            ${S.map((h,$)=>{const v=I[h.id]??{},A=b.reduce((R,D)=>R+(parseFloat(v[D.id]??0)||0),0);return`<tr class="hover:bg-gray-50/50" data-sid="${h.id}">
                <td class="${w} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${$+1}</td>
                <td class="${o} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${h.student_code}</td>
                <td class="${o} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${h.image_url?`<img src="${h.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`:`<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-indigo-200 to-violet-200
                                    flex items-center justify-center text-xs font-bold text-indigo-700 flex-shrink-0">
                           ${(h.full_name??"?").charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${h.full_name}</span>
                  </div>
                </td>
                ${b.map(R=>{const D=v[R.id]??"";return`<td class="border border-gray-100 p-0 rs-score-cell"
                    data-sid="${h.id}" data-cid="${R.id}" data-max="${R.max_score}">
                    <input type="number" min="0" max="${R.max_score}" step="0.5"
                      class="rs-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${D}" placeholder="—"
                      data-sid="${h.id}" data-cid="${R.id}" data-max="${R.max_score}"
                      data-row="${$}" data-col="${b.findIndex(W=>W.id===R.id)}" />
                  </td>`}).join("")}
                <td class="border border-gray-100 text-center font-semibold text-violet-700 rs-total" data-sid="${h.id}">
                  ${A>0?A.toFixed(1).replace(/\.0$/,""):"—"}
                </td>
                <td class="border border-gray-100 text-center text-xs font-medium text-indigo-600 rs-score100" data-sid="${h.id}">
                  ${A>0?(A/2).toFixed(1).replace(/\.0$/,""):"—"}
                </td>
                <td class="border border-gray-100 text-center rs-label" data-sid="${h.id}">
                  ${A>0?Ae(A/2):"—"}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>`),(Q=document.getElementById("rs-room-sel"))==null||Q.addEventListener("change",h=>q(h.target.value));let k=!0;(K=document.getElementById("rs-toggle-total-btn"))==null||K.addEventListener("click",function(){k=!k;const h=k?"":"none";["rs-total-th","rs-score100-th","rs-label-th"].forEach($=>{const v=document.getElementById($);v&&(v.style.display=h)}),document.querySelectorAll(".rs-total,.rs-score100,.rs-label").forEach($=>$.style.display=h),this.textContent=k?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!k),this.classList.toggle("border-amber-300",!k),this.classList.toggle("text-amber-700",!k)});const p=[...document.querySelectorAll(".rs-input")],e=b.length,d=S.length,_=(h,$)=>p.find(v=>+v.dataset.row===h&&+v.dataset.col===$),s=(h,$)=>{h<0&&(h=0),h>=d&&(h=d-1),$<0&&($=e-1),$>=e&&($=0);const v=_(h,$);v==null||v.focus(),v==null||v.select()},B=(h,$)=>{const v=h.closest("td");if(!v)return;const A=$?"ring-2 ring-inset ring-indigo-400 bg-indigo-50":"ring-2 ring-inset ring-red-400 bg-red-50";v.classList.add(...A.split(" ")),setTimeout(()=>v.classList.remove(...A.split(" ")),1200)},u=document.getElementById("rs-save-status");let C=null;const M=(h,$="text-gray-400",v=!1)=>{u&&(clearTimeout(C),u.className=`text-xs ${$}`,u.textContent=h,v&&(C=setTimeout(()=>{u.className="text-xs text-gray-400",u.textContent="บันทึกอัตโนมัติ"},2500)))},a=h=>{const $=document.querySelector(`.rs-total[data-sid="${h}"]`);if(!$)return;const v=document.querySelector(`.rs-score100[data-sid="${h}"]`),A=document.querySelector(`.rs-label[data-sid="${h}"]`),R=p.filter(D=>+D.dataset.sid==+h).reduce((D,W)=>D+(parseFloat(W.value)||0),0);$.textContent=R>0?R.toFixed(1).replace(/\.0$/,""):"—",v&&(v.textContent=R>0?(R/2).toFixed(1).replace(/\.0$/,""):"—"),A&&(A.innerHTML=R>0?Ae(R/2):"—")},c=new Map,j=h=>h.trim()===""?"null":String(parseFloat(h));p.forEach(h=>c.set(`${h.dataset.sid}:${h.dataset.cid}`,{chain:Promise.resolve(),requested:j(h.value),saved:j(h.value)}));const P=h=>{const $=+h.dataset.sid,v=+h.dataset.cid,A=+h.dataset.max,R=h.value.trim()===""?null:parseFloat(h.value);if(R!==null&&(!Number.isFinite(R)||R<0||R>A))return B(h,!1),M(`คะแนนต้องอยู่ระหว่าง 0-${A}`,"text-red-600 font-medium"),Promise.resolve(!1);const D=`${$}:${v}`,W=R===null?"null":String(R),V=c.get(D)??{chain:Promise.resolve(),requested:null,saved:null};if(c.set(D,V),V.requested===W||V.saved===W&&V.requested===V.saved)return V.chain;V.requested=W;const ee=h.value;return V.chain=V.chain.catch(()=>{}).then(async()=>{M("กำลังบันทึก...","text-indigo-500 font-medium");let E=null;for(let H=0;H<2;H++)try{await ct($,v,R,(t==null?void 0:t.id)??null),E=null;break}catch(O){E=O,H===0&&await new Promise(z=>setTimeout(z,500))}if(E)throw E;return V.saved=W,j(h.value)===j(ee)&&(B(h,!0),a($)),M("บันทึกแล้ว ✓","text-emerald-600 font-medium",!0),!0}).catch(E=>(V.requested===W&&(V.requested=null),B(h,!1),M("บันทึกไม่สำเร็จ — กรุณาลองอีกครั้ง","text-red-600 font-medium"),F(`บันทึกคะแนนไม่สำเร็จ: ${(E==null?void 0:E.message)??"กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่"}`,"error"),!1)),V.chain};p.forEach(h=>{h.addEventListener("blur",()=>P(h)),h.addEventListener("keydown",$=>{const v=+h.dataset.row,A=+h.dataset.col;switch($.key){case"Tab":$.preventDefault(),$.shiftKey?A>0?s(v,A-1):s(v-1,e-1):A<e-1?s(v,A+1):s(v+1,0);break;case"Enter":$.preventDefault(),P(h),v<d-1?s(v+1,A):s(0,A);break;case"ArrowDown":$.preventDefault(),s(v<d-1?v+1:0,A);break;case"ArrowUp":$.preventDefault(),s(v>0?v-1:d-1,A);break;case"ArrowRight":$.preventDefault(),A<e-1?s(v,A+1):s(v+1,0);break;case"ArrowLeft":$.preventDefault(),A>0?s(v,A-1):s(v-1,e-1);break;case"Home":$.preventDefault(),$.ctrlKey?s(0,0):s(v,0);break;case"End":$.preventDefault(),$.ctrlKey?s(d-1,e-1):s(v,e-1);break;case"Escape":h.blur();break}}),h.addEventListener("input",()=>{const $=+h.dataset.max,v=String(Math.floor($)).length;h.value.replace(/[^0-9]/g,"").length>=v&&!h.value.includes(".")&&(P(h),setTimeout(()=>s(+h.dataset.row,+h.dataset.col+1),50))})})};q(T)}const Ae=t=>{const n=pt(t);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${n.cls}">${n.label}</span>`},te={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}},ze=["อา","จ","อ","พ","พฤ","ศ","ส"],St=t=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[t]||"ไม่ระบุจุด",Et=t=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[t]||"bg-gray-50 text-gray-500 border-gray-100";function De(t=new Date){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),g=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${g}`}function Lt(t){if(!t)return"—";try{return new Date(t).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return"—"}}async function Qt(t,n=[],r=null){if(ue("prayer-score"),xe("ติดตามผลสแกนละหมาด"),window._cleanupPrayerRoomMonitor)try{window._cleanupPrayerRoomMonitor()}catch{}const g=n.filter(l=>l.category==="ศาสนา");if(!(t!=null&&t.id)||!g.length){ae(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium text-gray-700">หน้านี้เปิดเฉพาะครูที่ปรึกษาชั้นศาสนา</p>
      <p class="text-xs mt-1">ไม่พบห้องที่ปรึกษาศาสนาที่ผูกกับบัญชีครูของคุณ</p>
    </div>`);return}const x=g.map(l=>l.main_room).filter(Boolean);let m=x.includes(r)?r:x[0],L=null,T=!1,q=0;window._cleanupPrayerRoomMonitor=()=>{L&&clearInterval(L),L=null};const i=()=>{var l,w,o,f;ae(`
      <div class="animate-fade space-y-4">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col md:flex-row md:items-center gap-3">
          <button id="prm-back" class="self-start px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50">
            ← กลับ
          </button>
          <div class="flex-1 min-w-0">
            <h2 class="font-extrabold text-gray-800 text-base">🕌 Monitor การสแกนละหมาด</h2>
            <p class="text-xs text-gray-400 mt-0.5">เฉพาะนักเรียนชั้นศาสนาในความรับผิดชอบของคุณ</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            ${x.length>1?`
            <select id="prm-room-select" class="text-xs border border-gray-200 rounded-xl px-3 py-2 bg-white font-bold text-emerald-800">
              ${x.map(k=>`<option value="${Z(k)}" ${k===m?"selected":""}>${Z(k)}</option>`).join("")}
            </select>`:`<span class="px-3 py-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 text-xs font-extrabold">${Z(m)}</span>`}
            <button id="prm-refresh" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 active:scale-95 transition">
              รีเฟรช
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-gray-400 uppercase">นักเรียนทั้งหมด</p>
            <p id="prm-total" class="text-2xl font-extrabold text-gray-800 mt-1">—</p>
          </div>
          <div class="bg-white border border-emerald-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-emerald-500 uppercase">สแกนแล้ว</p>
            <p id="prm-done" class="text-2xl font-extrabold text-emerald-700 mt-1">—</p>
          </div>
          <div class="bg-white border border-purple-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-purple-500 uppercase">อูโซร</p>
            <p id="prm-usor" class="text-2xl font-extrabold text-purple-700 mt-1">—</p>
          </div>
          <div class="bg-white border border-amber-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-amber-500 uppercase">ยังไม่สแกน</p>
            <p id="prm-pending" class="text-2xl font-extrabold text-amber-700 mt-1">—</p>
          </div>
        </div>

        <div class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 class="font-bold text-gray-800 text-sm">รายการนักเรียนห้อง ${Z(m)}</h3>
              <p id="prm-updated" class="text-[11px] text-gray-400 mt-0.5">กำลังโหลดข้อมูล...</p>
            </div>
            <input id="prm-search" type="text" placeholder="ค้นหาชื่อหรือรหัส"
              class="w-full sm:w-56 text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
          </div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[720px] text-xs">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-center w-12">#</th>
                  <th class="px-4 py-3 text-left">นักเรียน</th>
                  <th class="px-4 py-3 text-center w-28">ห้องสามัญ</th>
                  <th class="px-4 py-3 text-center w-32">สถานะวันนี้</th>
                  <th class="px-4 py-3 text-center w-28">เวลา</th>
                  <th class="px-4 py-3 text-center w-36">จุดสแกน</th>
                  <th class="px-4 py-3 text-left w-44">ผู้สแกน</th>
                </tr>
              </thead>
              <tbody id="prm-table-body" class="divide-y divide-gray-50">
                <tr><td colspan="7" class="py-12 text-center text-gray-400">กำลังโหลดข้อมูล...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `),(l=document.getElementById("prm-back"))==null||l.addEventListener("click",()=>{var k;return(k=window._navTo)==null?void 0:k.call(window,"overview")}),(w=document.getElementById("prm-refresh"))==null||w.addEventListener("click",()=>I(m,{manual:!0})),(o=document.getElementById("prm-room-select"))==null||o.addEventListener("change",k=>{m=k.target.value,i(),I(m,{manual:!0})}),(f=document.getElementById("prm-search"))==null||f.addEventListener("input",()=>N(window._prmStudents||[],window._prmRecords||[]))},b=async l=>{const w=De(),{data:o,error:f}=await ke.from("students").select("id, student_code, full_name, main_room, religion_room, image_url").eq("religion_room",l).eq("is_active",!0).order("student_code",{ascending:!0});if(f)throw f;const k=(o||[]).map(d=>d.id);if(!k.length)return{students:[],records:[]};const{data:p,error:e}=await ke.from("prayer_records").select("id, student_id, status, check_date, location, input_method, scanned_by, scanner_name, same_room_flag, created_at").eq("check_date",w).in("student_id",k).not("location","is",null).order("created_at",{ascending:!1}).limit(300);if(e)throw e;return{students:o||[],records:p||[]}},S=l=>{const w=new Map;return l.forEach(o=>{w.has(o.student_id)||w.set(o.student_id,o)}),w},N=(l,w)=>{var e;const o=document.getElementById("prm-table-body");if(!o)return;const f=(((e=document.getElementById("prm-search"))==null?void 0:e.value)||"").trim().toLowerCase(),k=S(w),p=l.filter(d=>!f||[d.full_name,d.student_code,d.main_room,d.religion_room].some(_=>String(_||"").toLowerCase().includes(f)));if(!p.length){o.innerHTML='<tr><td colspan="7" class="py-12 text-center text-gray-400">ไม่พบข้อมูลนักเรียน</td></tr>';return}o.innerHTML=p.map((d,_)=>{const s=k.get(d.id),B=s?te[s.status]||te.pray:null,u=s?`<span class="inline-flex px-2.5 py-1 rounded-full ${B.bg} ${B.color}">${B.fullLabel}</span>`:'<span class="inline-flex px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 font-bold border border-gray-100">ยังไม่สแกน</span>',C=(s==null?void 0:s.input_method)==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-[10px] font-bold">กรอกรหัส</span>':"",M=s!=null&&s.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">ห้องเดียวกัน</span>':"";return`
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${_+1}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-3">
              ${d.image_url?`<img src="${Z(d.image_url)}" class="w-7 h-9 rounded-lg object-cover object-top border border-gray-200 shadow-sm" />`:`<div class="w-7 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-gray-200">${Z((d.full_name||"?").charAt(0))}</div>`}
              <div class="min-w-0">
                <p class="font-bold text-gray-800 truncate">${Z(d.full_name||"—")}</p>
                <p class="text-[11px] text-gray-400 font-mono">รหัส ${Z(d.student_code||"—")}</p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-center text-gray-500 font-bold">${Z(d.main_room||"—")}</td>
          <td class="px-4 py-3 text-center">${u}<div class="flex flex-wrap justify-center gap-1">${C}${M}</div></td>
          <td class="px-4 py-3 text-center font-mono text-gray-600">${Lt(s==null?void 0:s.created_at)}</td>
          <td class="px-4 py-3 text-center">
            ${s!=null&&s.location?`<span class="px-2.5 py-1 rounded-full border text-[11px] font-bold ${Et(s.location)}">${Z(St(s.location))}</span>`:'<span class="text-gray-300">—</span>'}
          </td>
          <td class="px-4 py-3 text-gray-500">${Z((s==null?void 0:s.scanner_name)||(s==null?void 0:s.scanned_by)||"—")}</td>
        </tr>
      `}).join("")},y=(l,w)=>{var d,_,s,B;const o=S(w),f=o.size,k=[...o.values()].filter(u=>u.status==="usor").length,p=Math.max(0,l.length-f);(d=document.getElementById("prm-total"))==null||d.replaceChildren(document.createTextNode(String(l.length))),(_=document.getElementById("prm-done"))==null||_.replaceChildren(document.createTextNode(String(f))),(s=document.getElementById("prm-usor"))==null||s.replaceChildren(document.createTextNode(String(k))),(B=document.getElementById("prm-pending"))==null||B.replaceChildren(document.createTextNode(String(p)));const e=document.getElementById("prm-updated");e&&(e.textContent=`อัปเดตล่าสุด ${new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"})} น.`)};async function I(l,{manual:w=!1}={}){var o;if(!T){T=!0;try{const{students:f,records:k}=await b(l);window._prmStudents=f,window._prmRecords=k;const p=((o=k[0])==null?void 0:o.id)||0;!w&&q&&p>q&&F("มีรายการสแกนละหมาดใหม่","info"),q=Math.max(q,p),y(f,k),N(f,k)}catch(f){console.error("Prayer room monitor failed:",f),F("โหลดข้อมูล Monitor ไม่สำเร็จ: "+se(f),"error");const k=document.getElementById("prm-table-body");k&&(k.innerHTML='<tr><td colspan="7" class="py-12 text-center text-red-400">โหลดข้อมูลไม่สำเร็จ</td></tr>')}finally{T=!1}}}i(),await I(m,{manual:!0}),L=setInterval(()=>{document.visibilityState==="visible"&&I(m)},5e3)}function Ct(t,n,r=0){const g=[],x=new Date(t),m=new Date(n),T=(x.getDay()-r+7)%7;T!==0&&x.setDate(x.getDate()-T);let q=new Date(x),i=1;for(;q<=m;){const b=[];for(let S=0;S<5;S++){const N=new Date(q);N.setDate(N.getDate()+S),N<=m&&b.push({date:new Date(N),ds:N.toISOString().slice(0,10),weekN:i})}b.length>0&&(g.push({n:i,days:b,label:`${oe(b[0].date)}–${oe(b[b.length-1].date)}`}),i++),q.setDate(q.getDate()+7)}return g}function je(t,n){const r=n.reduce((x,m)=>{var L;return x+(((L=te[t[m.ds]])==null?void 0:L.score)??0)},0),g=n.length*2;return g>0?Math.min(10,Math.max(0,Math.round(r/g*100)/10)):0}async function Ut(t,n){var q;ue("prayer-score"),xe("บันทึกคะแนนละหมาด");const g=((await ve().catch(()=>({}))).prayerScannerTeachers||"").split(/[\s,]+/).map(i=>i.trim()).filter(Boolean);let x=!1;if(t){let i=null;try{const{data:b}=await ke.from("profiles").select("role").eq("id",t.profile_id).maybeSingle();i=b}catch{}x=g.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(i==null?void 0:i.role)==="admin"}if(!n.length){if(x){ae(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
        <p class="text-5xl mb-4">🕌</p>
        <p class="font-medium text-gray-700">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
        <p class="text-sm text-gray-400 mt-2 mb-6">แต่คุณได้รับสิทธิ์ในการสแกนบันทึกเวลาละหมาดของนักเรียน</p>
        <button id="btn-open-scanner-direct" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold rounded-2xl shadow-lg transition flex items-center gap-2 mx-auto">
          ${Ce}
          <span>เปิดกล้องสแกน</span>
        </button>
      </div>`),(q=document.getElementById("btn-open-scanner-direct"))==null||q.addEventListener("click",async()=>{const{renderStudentPrayerScanner:i}=await ce(async()=>{const{renderStudentPrayerScanner:b}=await import("./student-views-DYl1Vkbm.js");return{renderStudentPrayerScanner:b}},__vite__mapDeps([2,3,4,5,1,6,0,7,8,9,10,11,12,13,14]));i(t)});return}ae(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
    </div>`);return}const m=n.map(i=>i.main_room);let L=m[0];const T=async i=>{var j,P,Q,K,h;L=i,ae(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);const{getSystemConfig:b}=await ce(async()=>{const{getSystemConfig:$}=await import("./api-Cf_Y4s92.js");return{getSystemConfig:$}},__vite__mapDeps([0,1])),S=await b().catch(()=>({})),N=S.academicYear??S.academic_year??new Date().getFullYear()+543,y=S.semester??1,I=S.semester_start,l=S.semester_end;if(!I||!l){ae(`<div class="max-w-xl mx-auto text-center py-20">
        <p class="text-5xl mb-4">📅</p>
        <p class="font-semibold text-gray-700">ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน</p>
        <p class="text-sm text-gray-400 mt-2">แอดมินต้องระบุวันเริ่ม-สิ้นสุดภาคเรียนในหน้าตั้งค่าระบบ</p>
      </div>`);return}const[w,o]=await Promise.all([rt(i),ot(t.id,i,I,l)]),f=Ct(I,l),k=f.flatMap($=>$.days),p=k.length,e={};for(const $ of o)e[$.student_id]||(e[$.student_id]={}),e[$.student_id][$.check_date]=$.status;const d=32,_=160,s="border border-gray-200 text-center text-xs select-none",B="sticky left-0 z-20 bg-white border border-gray-200",u="sticky z-20 bg-white border border-gray-200",C=$=>$>=8?"text-emerald-600":$>=6?"text-amber-500":"text-red-600";ae(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <!-- Top bar -->
      <div class="flex items-center gap-2 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0 flex-wrap">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h2>
          <p class="text-xs text-gray-400">${i} · ${f.length} สัปดาห์ · ${p} วัน</p>
        </div>
        ${m.length>1?`<select id="prayer-room-sel" class="text-xs border border-gray-200 rounded-xl px-2 py-1.5 bg-white">
          ${m.map($=>`<option value="${$}" ${$===i?"selected":""}>${$}</option>`).join("")}</select>`:""}
        <div class="flex gap-1 text-xs hidden sm:flex">
          ${Object.entries(te).map(([,$])=>`<span class="px-1.5 py-1 ${$.bg} ${$.color} rounded">${$.label}=${$.fullLabel.slice(0,3)}</span>`).join("")}
        </div>
        <button id="prayer-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-emerald-300 hover:text-emerald-600">
          ซ่อนคะแนนรวม
        </button>
        <button id="btn-prayer-stats" class="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg font-medium hover:bg-indigo-700 transition">📊 สถิติ</button>
        <button id="btn-prayer-room-monitor" class="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs rounded-lg font-bold hover:bg-amber-100 transition">
          👁️ Monitor
        </button>
        ${x?`
        <button id="btn-prayer-scanner" class="px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-xl font-bold hover:bg-emerald-700 active:scale-[0.98] transition flex items-center gap-1.5 shadow-sm">
          ${fe}
          <span>สแกนละหมาด</span>
        </button>
        `:""}
      </div>
      <div id="prayer-saving" class="hidden fixed top-16 right-4 z-50 bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
      <!-- Grid -->
      <div class="flex-1 overflow-auto" id="prayer-grid-wrap">
        ${w.length?`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <!-- Row 1: สัปดาห์ (colspan 5, clickable) -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${B} bg-gray-50" style="width:28px">#</th>
              <th class="${u} bg-gray-50" style="left:28px;width:64px">รหัส</th>
              <th class="${u} bg-gray-50 text-left px-2" style="left:92px;min-width:${_}px">ชื่อ-นามสกุล</th>
              ${f.map($=>`
                <th colspan="${$.days.length}" class="${s} bg-emerald-600 text-white font-semibold
                  cursor-pointer hover:bg-emerald-700 prayer-wk-th"
                  data-week="${$.n}" title="${$.label}">
                  Week${$.n}
                </th>`).join("")}
              <th class="${s} bg-indigo-50 text-indigo-700 font-semibold prayer-score-th" style="min-width:52px">คะแนน<br/>/10</th>
            </tr>
            <!-- Row 2: วันที่รายวัน -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${B} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${u} bg-gray-100 text-gray-500" style="left:28px;width:64px">รหัส</th>
              <th class="${u} bg-gray-100 text-gray-500 text-left px-2" style="left:92px;min-width:${_}px">ชื่อ-นามสกุล</th>
              ${f.map($=>$.days.map(v=>`
                <th class="${s} bg-gray-100 text-gray-400 font-normal"
                  style="width:${d}px;min-width:${d}px;font-size:9px">
                  ${ze[v.date.getDay()]}<br/>${oe(v.date)}
                </th>`).join("")).join("")}
              <th class="${s} bg-indigo-50 prayer-score-th" style="min-width:52px"></th>
            </tr>
          </thead>
          <tbody>
            ${w.map(($,v)=>{const A=e[$.id]??{},R=k.reduce((W,V)=>{var ee;return W+(((ee=te[A[V.ds]])==null?void 0:ee.score)??0)},0),D=p>0?Math.max(0,Math.round(R/(p*2)*100)/10):0;return`<tr class="hover:bg-gray-50" data-sid="${$.id}">
                <td class="${B} text-center text-gray-400" style="width:28px">${v+1}</td>
                <td class="${u} text-center font-mono text-gray-600" style="left:28px;width:64px">${$.student_code}</td>
                <td class="${u} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:92px;min-width:${_}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${$.image_url?`<img src="${$.image_url}" class="w-6 h-6 object-cover rounded flex-shrink-0"/>`:'<div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[100px]">${$.full_name}</span>
                  </div>
                </td>
                ${f.map(W=>W.days.map(V=>{const ee=A[V.ds]??null,E=ee?te[ee]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    prayer-cell hover:bg-gray-100 ${E?E.bg:""}"
                    data-sid="${$.id}" data-date="${V.ds}"
                    style="width:${d}px;min-width:${d}px;height:28px">
                    ${E?`<span class="${E.color} text-xs">${E.label}</span>`:""}
                  </td>`}).join("")).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${C(D)} prayer-score-cell"
                  id="score-${$.id}" style="min-width:52px;font-size:11px">${D}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`:`<div class="p-16 text-center text-gray-400"><p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียนในห้อง ${i}</p></div>`}
      </div>
    </div>`);const M=document.getElementById("prayer-grid-wrap");if(!M)return;(j=document.getElementById("prayer-room-sel"))==null||j.addEventListener("change",$=>T($.target.value)),(P=document.getElementById("btn-prayer-stats"))==null||P.addEventListener("click",()=>Tt(t,i,w,f,e,k,N,y)),(Q=document.getElementById("btn-prayer-room-monitor"))==null||Q.addEventListener("click",()=>{var $;($=window._openReligionPrayerMonitor)==null||$.call(window,i)}),x&&((K=document.getElementById("btn-prayer-scanner"))==null||K.addEventListener("click",async()=>{const{renderStudentPrayerScanner:$}=await ce(async()=>{const{renderStudentPrayerScanner:v}=await import("./student-views-DYl1Vkbm.js");return{renderStudentPrayerScanner:v}},__vite__mapDeps([2,3,4,5,1,6,0,7,8,9,10,11,12,13,14]));$(t)}));let a=!0;(h=document.getElementById("prayer-toggle-total-btn"))==null||h.addEventListener("click",function(){a=!a;const $=a?"":"none";document.querySelectorAll(".prayer-score-th,.prayer-score-cell").forEach(v=>v.style.display=$),this.textContent=a?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!a),this.classList.toggle("border-amber-300",!a),this.classList.toggle("text-amber-700",!a)}),M.addEventListener("click",$=>{var ee;const v=$.target.closest(".student-name-cell");if(!v)return;const A=parseInt((ee=v.closest("[data-sid]"))==null?void 0:ee.dataset.sid),R=w.find(E=>E.id===A);if(!R)return;const D=e[A]??{},W={pray:0,absent:0,usor:0,followed:0,avoid:0,noRecord:0};for(const E of k){const H=D[E.ds]??null;H&&W[H]!==void 0?W[H]++:W.noRecord++}const V=je(D,k);Ve({student:R,no:w.indexOf(R)+1,...W,score:V},f,e,k,C)});const c=$=>{const v=e[$]??{},A=k.reduce((W,V)=>{var ee;return W+(((ee=te[v[V.ds]])==null?void 0:ee.score)??0)},0),R=p>0?Math.max(0,Math.round(A/(p*2)*100)/10):0,D=document.getElementById(`score-${$}`);D&&(D.textContent=R,D.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${C(R)}`)};M.addEventListener("click",$=>{const v=$.target.closest(".prayer-cell");if(!v)return;const A=parseInt(v.dataset.sid),R=v.dataset.date,D=k.find(W=>W.ds===R);pe($,W=>{e[A]||(e[A]={}),e[A][R]=W;const V=W?te[W]:null;Object.values(te).forEach(ee=>v.classList.remove(ee.bg)),V&&v.classList.add(V.bg),v.innerHTML=V?`<span class="${V.color} text-xs">${V.label}</span>`:"",c(A),He(t.id,A,i,R,W,(D==null?void 0:D.weekN)??null,t.full_name||"คุณครู").then(()=>{v.style.outline="2px solid #059669",v.style.outlineOffset="1px",setTimeout(()=>{v.style.outline="",v.style.outlineOffset=""},700)}).catch(()=>{v.style.outline="2px solid #ef4444",v.style.outlineOffset="1px",setTimeout(()=>{v.style.outline="",v.style.outlineOffset=""},700)})})}),M.addEventListener("click",$=>{const v=$.target.closest(".prayer-wk-th");if(!v)return;const A=parseInt(v.dataset.week),R=f.find(D=>D.n===A);R&&jt(t,w,e,R,i,k,p,c)})};T(L)}function pe(t,n){var m;(m=document.getElementById("prayer-picker"))==null||m.remove();const r=document.createElement("div");r.id="prayer-picker",r.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const g=(t.target.closest("td,th,button")??t.target).getBoundingClientRect();r.style.top=Math.min(g.bottom+4,window.innerHeight-60)+"px",r.style.left=Math.max(4,Math.min(g.left,window.innerWidth-220))+"px";const x=document.createElement("button");x.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",x.textContent="✕",x.title="ล้างค่า",x.onclick=()=>{r.remove(),n(null)},r.appendChild(x),Object.entries(te).forEach(([L,T])=>{const q=document.createElement("button");q.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${T.bg} ${T.color} hover:opacity-80 transition`,q.textContent=T.label,q.title=T.fullLabel,q.onclick=()=>{r.remove(),n(L)},r.appendChild(q)}),document.body.appendChild(r),setTimeout(()=>document.addEventListener("click",()=>r.remove(),{once:!0}),50)}function jt(t,n,r,g,x,m,L,T,q){var p;(p=document.getElementById("prayer-week-modal"))==null||p.remove();const i=g.days,b={};n.forEach(e=>{b[e.id]={},i.forEach(d=>{var _;b[e.id][d.ds]=((_=r[e.id])==null?void 0:_[d.ds])??null})});const S=e=>{const d=e?te[e]:null;return d?`${d.bg} ${d.color} font-bold`:"text-gray-300"},N=e=>e?te[e].label:"·",y=document.createElement("div");y.id="prayer-week-modal",y.className="fixed inset-0 z-[80] flex flex-col bg-white",y.innerHTML=`
    <div class="flex items-center gap-2 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="pw-close" class="text-white/70 hover:text-white text-xl leading-none">✕</button>
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${g.n}</h3>
        <p class="text-xs text-emerald-200">${g.label} · ${x}</p>
      </div>
      <button id="pw-set-all" class="text-xs px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition">AllCheck</button>
      <button id="pw-save" class="text-xs px-4 py-2 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition">✕ ปิด</button>
    </div>
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse" style="min-width:max-content">
        <thead class="sticky top-0 z-10 bg-white">
          <!-- Day column set-all buttons -->
          <tr class="border-b">
            <th class="px-3 py-2 text-left text-gray-500 font-medium" style="min-width:160px">นักเรียน</th>
            ${i.map(e=>`
              <th class="px-1 py-2 text-center" style="min-width:64px">
                <div class="font-semibold text-gray-700">${ze[e.date.getDay()]} ${oe(e.date)}</div>
                <button class="pw-day-all mt-1 text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100"
                  data-ds="${e.ds}">AllDay</button>
              </th>`).join("")}
            <th class="px-2 py-2 text-center text-gray-500 font-medium" style="min-width:60px">ทั้งสัปดาห์</th>
          </tr>
        </thead>
        <tbody id="pw-body">
          ${n.map((e,d)=>`
            <tr class="border-b hover:bg-gray-50" data-pw-sid="${e.id}">
              <td class="px-3 py-2">
                <div class="flex items-center gap-2">
                  ${e.image_url?`<img src="${e.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
                  <span class="truncate max-w-[130px] text-gray-800">${e.full_name}</span>
                </div>
              </td>
              ${i.map(_=>{var s,B;return`
                <td class="px-1 py-2 text-center">
                  <button class="pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80
                    ${S((s=b[e.id])==null?void 0:s[_.ds])}"
                    data-pw-sid="${e.id}" data-ds="${_.ds}">
                    ${N((B=b[e.id])==null?void 0:B[_.ds])}
                  </button>
                </td>`}).join("")}
              <td class="px-2 py-2 text-center">
                <button class="pw-row-all text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                  data-pw-sid="${e.id}">ตั้งครบ ▾</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(y);const I=(e,d=!0)=>{e&&(e.style.outline=`2px solid ${d?"#059669":"#ef4444"}`,e.style.outlineOffset="1px",setTimeout(()=>{e.style.outline="",e.style.outlineOffset=""},700))};let l=0,w=0;const o=async(e,d,_)=>{var M,a;const s=((M=b[e])==null?void 0:M[d])??null,B=((a=r[e])==null?void 0:a[d])??null;b[e][d]=_,r[e]={...r[e]??{},[d]:_};const u=y.querySelector(`.pw-cell[data-pw-sid="${e}"][data-ds="${d}"]`);u&&(u.className=`pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${S(_)}`,u.textContent=N(_));const C=document.querySelector(`.prayer-cell[data-sid="${e}"][data-date="${d}"]`);if(C){const c=_?te[_]:null;Object.values(te).forEach(j=>C.classList.remove(j.bg)),c&&C.classList.add(c.bg),C.innerHTML=c?`<span class="${c.color} text-xs">${c.label}</span>`:""}T(e);try{await He(t.id,e,x,d,_,g.n,t.full_name||"คุณครู"),I(u,!0),I(C,!0)}catch(c){if(console.error("prayer save:",c),b[e][d]=s,r[e]||(r[e]={}),B===null?delete r[e][d]:r[e][d]=B,u&&(u.className=`pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${S(s)}`,u.textContent=N(s)),C){const j=s?te[s]:null;Object.values(te).forEach(P=>C.classList.remove(P.bg)),j&&C.classList.add(j.bg),C.innerHTML=j?`<span class="${j.color} text-xs">${j.label}</span>`:""}throw T(e),I(u,!1),I(C,!1),c}},f=async e=>{let _=0;l+=e.length;for(let s=0;s<e.length;s+=10){const B=e.slice(s,s+10),u=await Promise.allSettled(B.map(([C,M,a])=>o(C,M,a)));_+=u.filter(C=>C.status==="rejected").length}w+=_,_>0&&F(`บันทึกไม่สำเร็จ ${_}/${e.length} รายการ — กรุณาลองใหม่`,"error")};y.addEventListener("click",e=>{const d=e.target.closest(".pw-cell");if(!d)return;e.stopPropagation();const _=parseInt(d.dataset.pwSid),s=d.dataset.ds;pe(e,B=>o(_,s,B))}),y.addEventListener("click",e=>{const d=e.target.closest(".pw-day-all");if(!d)return;e.stopPropagation();const _=d.dataset.ds;pe(e,s=>f(n.map(B=>[B.id,_,s])))}),y.addEventListener("click",e=>{const d=e.target.closest(".pw-row-all");if(!d)return;e.stopPropagation();const _=parseInt(d.dataset.pwSid);pe(e,s=>f(i.map(B=>[_,B.ds,s])))}),y.querySelector("#pw-set-all").addEventListener("click",e=>{e.stopPropagation(),pe(e,d=>f(n.flatMap(_=>i.map(s=>[_.id,s.ds,d]))))});const k=()=>{y.remove(),l>0&&w>0?F(`สัปดาห์ที่ ${g.n}: สำเร็จ ${l-w} / ไม่สำเร็จ ${w} รายการ ⚠️`,"warning"):l>0&&F(`สัปดาห์ที่ ${g.n} บันทึกเรียบร้อย ✅`,"success")};y.querySelector("#pw-close").addEventListener("click",k),y.querySelector("#pw-save").addEventListener("click",k),y.addEventListener("click",e=>{e.target===y&&k()})}function Tt(t,n,r,g,x,m,L,T){var I;(I=document.getElementById("prayer-stats-modal"))==null||I.remove();const q=l=>l>=8?"text-emerald-600":l>=6?"text-amber-500":"text-red-600",i=r.map((l,w)=>{const o=x[l.id]??{},f={pray:0,absent:0,usor:0,followed:0,avoid:0,noRecord:0};for(const p of m){const e=o[p.ds]??null;e&&f[e]!==void 0?f[e]++:f.noRecord++}const k=je(o,m);return{student:l,no:w+1,...f,score:k}}),b=i.length?(i.reduce((l,w)=>l+w.score,0)/i.length).toFixed(1):"0.0",S=document.createElement("div");S.id="prayer-stats-modal",S.className="fixed inset-0 z-[80] bg-white flex flex-col",S.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="prayer-stats-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex-1">
        <h2 class="font-bold">📊 สถิติคะแนนละหมาด</h2>
        <p class="text-xs text-emerald-200">${n} · ปีการศึกษา ${L} ภาค ${T} · ${m.length} วัน</p>
      </div>
      <span class="px-3 py-1.5 bg-white/20 rounded-lg text-sm font-semibold">เฉลี่ย ${b}/10</span>
    </div>
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[["sem","รายภาคเรียน"],["week","รายสัปดาห์"]].map(([l,w],o)=>`
        <button class="pr-stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${o===0?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500"}"
          data-tab="${l}">${w}</button>`).join("")}
    </div>
    <div class="flex-1 overflow-auto" id="prayer-stats-content"></div>`,document.body.appendChild(S);const N=()=>{var w;const l=[...i].sort((o,f)=>o.score-f.score);document.getElementById("prayer-stats-content").innerHTML=`
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${Object.entries(te).map(([o,f])=>`
          <div class="${f.bg} rounded-xl p-3 text-center">
            <p class="text-2xl font-bold ${f.color}">${i.reduce((k,p)=>k+p[o],0)}</p>
            <p class="text-xs mt-0.5">${f.label} ${f.fullLabel}</p>
          </div>`).join("")}
      </div>
      <p class="px-4 text-xs text-gray-400 -mt-2 mb-2">คลิกที่แถวนักเรียนเพื่อดูสถิติรายบุคคล</p>
      <div class="px-4 pb-6">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">#</th>
                <th class="px-3 py-3 text-left">ชื่อ</th>
                ${Object.entries(te).map(([,o])=>`<th class="px-2 py-3 text-center ${o.color}">${o.label}</th>`).join("")}
                <th class="px-3 py-3 text-center font-semibold text-indigo-700">คะแนน/10</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="pst-tbody">
              ${l.map(o=>`
                <tr class="hover:bg-emerald-50 cursor-pointer transition" data-st-sid="${o.student.id}">
                  <td class="px-3 py-2 text-gray-400 text-xs">${o.no}</td>
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${o.student.image_url?`<img src="${o.student.image_url}" class="w-6 h-6 rounded object-cover"/>`:"<span>👤</span>"}
                      <span class="truncate max-w-[130px] text-xs font-medium">${o.student.full_name}</span>
                    </div>
                  </td>
                  ${Object.keys(te).map(f=>`<td class="px-2 py-2 text-center text-xs font-medium">${o[f]||"—"}</td>`).join("")}
                  <td class="px-3 py-2 text-center font-bold ${q(o.score)}">${o.score}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`,(w=document.getElementById("pst-tbody"))==null||w.addEventListener("click",o=>{const f=o.target.closest("[data-st-sid]");if(!f)return;const k=parseInt(f.dataset.stSid),p=i.find(e=>e.student.id===k);p&&Ve(p,g,x,m,q)})},y=()=>{document.getElementById("prayer-stats-content").innerHTML=`
      <div class="p-4 space-y-4">
        ${g.map((l,w)=>{var p;const o={pray:0,absent:0,usor:0,followed:0,avoid:0};for(const e of l.days)for(const d of r){const _=((p=x[d.id])==null?void 0:p[e.ds])??null;_&&o[_]!==void 0&&o[_]++}const f=r.length*l.days.length,k=f>0?((o.pray+o.followed+o.usor)/f*100).toFixed(0):"0";return`
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
              <div class="flex justify-between mb-2">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${l.n}</p>
                  <p class="text-xs text-gray-400">${l.label} · ${l.days.length} วัน</p>
                </div>
                <span class="font-bold text-lg ${q(parseInt(k)/10)}">${k}%</span>
              </div>
              <div class="flex gap-1 h-5 rounded-lg overflow-hidden">
                ${Object.entries(o).filter(([,e])=>e>0).map(([e,d])=>`<div class="${te[e].bg}" style="flex:${d}"></div>`).join("")}
              </div>
              <div class="flex gap-3 mt-2 text-xs flex-wrap">
                ${Object.entries(te).map(([e,d])=>`<span class="${d.color}">${d.label} ${o[e]||0}</span>`).join("")}
              </div>
            </div>`}).join("")}
      </div>`};N(),S.querySelectorAll(".pr-stats-tab").forEach(l=>{l.addEventListener("click",()=>{S.querySelectorAll(".pr-stats-tab").forEach(w=>{w.classList.replace("border-emerald-600","border-transparent"),w.classList.replace("text-emerald-700","text-gray-500")}),l.classList.replace("border-transparent","border-emerald-600"),l.classList.replace("text-gray-500","text-emerald-700"),l.dataset.tab==="sem"?N():y()})}),S.querySelector("#prayer-stats-close").addEventListener("click",()=>S.remove())}function It(t,n,r,g,x,m){var w;(w=document.getElementById("student-att-detail"))==null||w.remove();const L=m.master_subjects,T=g[t.id]??{},q=r.filter(o=>!x.has(o.ds)),i={present:0,absent:0,late:0,excused:0,sick:0,noRecord:0};for(const o of q){const f=T[o.n]??null;f&&i[f]!==void 0?i[f]++:i.noRecord++}const b=i.present+i.late,S=q.length>0?(b/q.length*100).toFixed(1):"0.0",N=o=>parseFloat(o)>=80?"text-emerald-600":parseFloat(o)>=60?"text-amber-500":"text-red-600",y={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},I={present:"text-emerald-600 bg-emerald-50",absent:"text-red-600 bg-red-50",late:"text-amber-500 bg-amber-50",excused:"text-blue-500 bg-blue-50",sick:"text-orange-500 bg-orange-50"},l=document.createElement("div");l.id="student-att-detail",l.className="fixed inset-0 z-[80] bg-white flex flex-col",l.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-700 text-white flex-shrink-0">
      <button id="sad-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${t.image_url?`<img src="${t.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>'}
        <div class="min-w-0">
          <p class="font-bold truncate">${t.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${t.student_code} · ${(L==null?void 0:L.subject_name)??m.class_name}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${N(S)}">${S}%</p>
        <p class="text-xs text-emerald-200">เข้าเรียน</p>
      </div>
    </div>
    <!-- Summary -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(y).map(([o,f])=>`<span class="px-3 py-1.5 rounded-xl text-sm font-medium ${I[o]}">
          ${f} ${i[o]||0}
        </span>`).join("")}
      <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-xl text-sm">ไม่บันทึก ${i.noRecord||0}</span>
      <span class="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-medium">รวม ${q.length} คาบ</span>
    </div>
    <!-- Session breakdown -->
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse">
        <thead class="bg-gray-50 text-gray-500 sticky top-0">
          <tr>
            <th class="px-3 py-2 text-left">คาบ</th>
            <th class="px-3 py-2 text-left">วันที่</th>
            <th class="px-3 py-2 text-center font-semibold">สถานะ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${q.map(o=>{const f=T[o.n]??null,k=f?y[f]??f:"—",p=f?I[f]:"text-gray-300";return`<tr class="hover:bg-gray-50">
              <td class="px-3 py-2 text-gray-500">${o.n}</td>
              <td class="px-3 py-2 font-mono text-gray-700">${oe(o.date)}</td>
              <td class="px-3 py-2 text-center">
                <span class="px-2 py-0.5 rounded-lg text-xs font-medium ${p}">${k}</span>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(l),l.querySelector("#sad-close").addEventListener("click",()=>l.remove())}function Ve(t,n,r,g,x){var q;(q=document.getElementById("student-detail-modal"))==null||q.remove();const m=t.student,L=r[m.id]??{},T=document.createElement("div");T.id="student-detail-modal",T.className="fixed inset-0 z-[80] bg-white flex flex-col",T.innerHTML=`
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-800 text-white flex-shrink-0">
      <button id="std-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${m.image_url?`<img src="${m.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>'}
        <div class="min-w-0">
          <p class="font-bold truncate">${m.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${m.student_code}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${x(t.score)}">${t.score}</p>
        <p class="text-xs text-emerald-200">คะแนน/10</p>
      </div>
    </div>
    <!-- Summary badges -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(te).map(([i,b])=>`<span class="px-3 py-1.5 ${b.bg} ${b.color} rounded-xl text-sm font-medium">
          ${b.label} ${t[i]||0}
        </span>`).join("")}
      <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-xl text-sm">ไม่บันทึก ${t.noRecord||0}</span>
    </div>
    <!-- Week-by-week breakdown -->
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse">
        <thead class="bg-gray-50 text-gray-500 sticky top-0">
          <tr>
            <th class="px-3 py-2 text-center text-left">สัปดาห์</th>
            <th class="px-3 py-2 text-center text-left text-gray-400">วันที่</th>
            ${Object.entries(te).map(([,i])=>`<th class="px-2 py-2 text-center ${i.color}">${i.label}</th>`).join("")}
            <th class="px-2 py-2 text-center text-indigo-600 font-semibold">คะแนน</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${n.map(i=>{const b={pray:0,absent:0,usor:0,followed:0,avoid:0};for(const y of i.days){const I=L[y.ds]??null;I&&b[I]!==void 0&&b[I]++}const S=i.days.map(y=>({...y})),N=je(L,S);return`
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-center font-medium text-gray-700">Week${i.n}</td>
                <td class="px-3 py-2 text-center text-gray-400">${i.label}</td>
                ${Object.keys(te).map(y=>`<td class="px-2 py-2 text-center font-medium">${b[y]||"—"}</td>`).join("")}
                <td class="px-2 py-2 text-center font-bold ${x(N)}">${N}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(T),T.querySelector("#std-close").addEventListener("click",()=>T.remove())}function qt(t,n){var b;const r=(b=window._pp5SystemCfg)==null?void 0:b.freeAttendanceScanLimit;let g=2;if(r!==void 0&&r!==""){const S=parseInt(r,10);Number.isFinite(S)&&(g=S)}if(n)return{allowed:!0,count:0,limit:g};const x=new Date,m=x.getDay(),L=x.getDate()-m+(m===0?-6:1),T=new Date(x.setDate(L)).toISOString().slice(0,10),q=`pp5_att_scans_week_${t}`;let i={weekMonday:T,count:0};try{const S=localStorage.getItem(q);if(S){const N=JSON.parse(S);N.weekMonday===T&&(i=N)}}catch{}return{allowed:i.count<g,count:i.count,weekMonday:T,limit:g}}function At(t,n){const r=`pp5_att_scans_week_${t}`;let g=0;try{const x=localStorage.getItem(r);if(x){const m=JSON.parse(x);m.weekMonday===n&&(g=m.count)}}catch{}localStorage.setItem(r,JSON.stringify({weekMonday:n,count:g+1}))}function Mt(t){var n;return((n=t==null?void 0:t.master_subjects)==null?void 0:n.subject_group)==="AGM"||/^(PR|อก\.|อป\.)/i.test((t==null?void 0:t.class_name)||"")}function _e(t,n){var x;const r=Mt(n)?"religion_room":"main_room",g={};return t.forEach(m=>{m[r]&&(g[m[r]]=(g[m[r]]||0)+1)}),((x=Object.entries(g).sort((m,L)=>L[1]-m[1])[0])==null?void 0:x[0])||""}function Se(t,n,r){if(r)return{allowed:!0,claimedRoom:null};let g=null;try{g=localStorage.getItem(`pp5_studentcare_room_${t}`)}catch{}return!g||g===n?{allowed:!0,claimedRoom:g}:{allowed:!1,claimedRoom:g}}function Ee(t,n){try{localStorage.setItem(`pp5_studentcare_room_${t}`,n)}catch{}}function Le(t,n){var g;(g=document.getElementById("stc-room-paywall"))==null||g.remove();const r=document.createElement("div");r.id="stc-room-paywall",r.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",r.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="stc-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์เชื่อมข้อมูลกับระบบดูแลใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${Z(t)}</b> ไว้แล้ว
        ${n?`<br><br>ต้องการใช้กับห้อง <b>${Z(n)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ
      </p>
      <button id="stc-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(r),r.querySelector("#stc-pw-close").addEventListener("click",()=>r.remove()),r.querySelector("#stc-pw-donate").addEventListener("click",()=>{var x;r.remove(),(x=document.getElementById("btn-donate-float"))==null||x.click()})}function Me(t="success"){try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),g=n.createGain();r.connect(g),g.connect(n.destination),t==="success"?(r.type="sine",r.frequency.setValueAtTime(880,n.currentTime),g.gain.setValueAtTime(.08,n.currentTime),g.gain.exponentialRampToValueAtTime(.01,n.currentTime+.12),r.start(),r.stop(n.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,n.currentTime),g.gain.setValueAtTime(.12,n.currentTime),g.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3))}catch{}}async function Bt(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((t,n)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>t(window.Html5Qrcode),r.onerror=g=>n(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}export{ht as _openAttendanceModalForSession,bt as _openLeaveQuotaModal,ft as _openLeaveRequestModal,zt as openAttendanceScanSetup,Dt as renderAttendance,de as renderAttendanceGrid,Vt as renderLifeSkillScore,Qt as renderPrayerRoomMonitor,Ut as renderPrayerScore,Wt as renderReadingScore};
