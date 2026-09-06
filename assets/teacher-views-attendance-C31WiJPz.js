const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/student-views-DJMSwDcA.js","assets/ui-Dh03k4iX.js","assets/student-api-q3ZleCC5.js","assets/theme-DIdoXkqD.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/quiz-api-DaBneRGn.js","assets/leave-time-CrS9gT63.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/regrade-api-C8s-TuM0.js","assets/certificate-engine-Ciw2pKHx.js","assets/azfutsal-modal-wts4xj80.js"])))=>i.map(i=>d[i]);
import{a as D,_ as de,f as je,k as Ve}from"./ui-Dh03k4iX.js";import{getMyClasses as fe,getAttendanceByDate as We,getClassSessionDOWs as pe,getClassStudents as Ae,getClassAttendanceAll as Me,getSchoolHolidays as Be,getActiveLeavePermissionsForClass as Qe,getClassLeaveHistory as Ue,getLeaveMaxActiveForClass as Ye,getLeaveMaxPerStudentWeekForClass as Ke,getExternalAttendanceStagingByRoom as Ge,saveAttendance as Se,saveAttendanceCell as Te,closeLeavePermission as he,getSystemConfig as ye,updateLeaveMaxActiveForClass as Ze,updateLeaveMaxPerStudentWeekForClass as Je,getExternalAttendanceStaging as Xe,exportAttendanceToStudentCare as et,createLeavePermission as tt,getLifeSkillColumns as st,getStudentsByRoom as Re,getLifeSkillScores as at,getStudentsByReligionRoom as nt,getPrayerRecords as rt,getReadingScoreColumns as ot,getReadingScores as lt,upsertLifeSkillScore as dt,upsertReadingScore as it,savePrayerCell as Oe}from"./api-1xsyVspL.js";import{s as we}from"./supabase-BV-W2lsh.js";import{f as ct}from"./leave-time-CrS9gT63.js";import{setActiveNav as ie,setTitle as ce,setContent as te,_generateSessions as me,_fmtDate as re,ATT_STATUS as ue,ATT_CYCLE as ve,_htmlEsc as J,applyReadingGradesFromConfig as xt,_dateInputValue as Ne,_readingGrade as ut}from"./teacher-views-utils-B2Iz3UWp.js";const ge=`
  <svg aria-hidden="true" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,Ee=`
  <svg aria-hidden="true" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`;async function oe(t,r){var x,g,j,I,M,i;ie("attendance"),ce("เช็คชื่อ","attendance");const n=r.master_subjects,y=(n==null?void 0:n.credit)??1;te(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-emerald-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดข้อมูล...
  </div>`);try{const{getSystemConfig:h,getClassSessionDOWs:C}=await de(async()=>{const{getSystemConfig:E,getClassSessionDOWs:B}=await import("./api-1xsyVspL.js");return{getSystemConfig:E,getClassSessionDOWs:B}},__vite__mapDeps([0,1])),P=await h().catch(()=>({})),w=P.academicYear??P.academic_year??new Date().getFullYear()+543,A=P.semester??1,o=r.source_class_id??null,[v,l,f,$,u,e]=await Promise.all([Ae(r.id),Me(o??r.id),Be(w,A),C(r.id).catch(()=>[]),Qe(r.id).catch(()=>[]),Ue(r.id,{week:"current"}).catch(()=>[])]);let d=await Ye(r.id).catch(()=>3),S=await Ke(r.id).catch(()=>2);const s=(n==null?void 0:n.subject_group)==="ACDMVOC",L=me(r,y,$.length?$:null,s),p=new Set(f),q={};u.forEach(E=>{q[E.student_id]=E});const R={};e.forEach(E=>{R[E.student_id]=(R[E.student_id]||0)+1});const a={},_=new Map;if(o){const{getMyClasses:E}=await de(async()=>{const{getMyClasses:Y}=await import("./api-1xsyVspL.js");return{getMyClasses:Y}},__vite__mapDeps([0,1])),B=s&&$.length?$.length:Math.max(1,Math.round(y*2));let F=B;try{const Y=s?await C(o).catch(()=>[]):[];if(Y.length)F=Y.length;else{const G=(await E(null).catch(()=>[])).find(ee=>Number(ee.id)===Number(o));(x=G==null?void 0:G.master_subjects)!=null&&x.credit&&(F=Math.max(1,Math.round(G.master_subjects.credit*2)))}}catch{}const H=L.length;for(let Y=1;Y<=H;Y++){const Z=Math.floor((Y-1)/B),G=(Y-1)%B,ee=Z*F+G+1;_.set(Y,ee);for(const U of l)U.session_number===ee&&(a[U.student_id]||(a[U.student_id]={}),a[U.student_id][Y]=U.status)}}else for(const E of l)a[E.student_id]||(a[E.student_id]={}),a[E.student_id][E.session_number]=E.status;const k=o??r.id,N=E=>_.get(E)??E,W=l.filter(E=>{const B=L.find(F=>F.n===E.session_number);return B&&p.has(B.ds)}),K=38,c=160,m="border border-gray-200 text-center text-xs select-none",b="sticky left-0 z-20 bg-white border border-gray-200",T="sticky z-20 bg-white border border-gray-200";te(`
    <div class="flex flex-col h-screen overflow-hidden animate-fade">
      <!-- Top bar -->
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')"
          class="text-sm text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1">
          ← กลับ
        </button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${(n==null?void 0:n.subject_name)??"—"}</h2>
          <p class="text-xs text-gray-400">${r.class_name} · ${y} หน่วยกิต · ${L.length} คาบ/เทอม</p>
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
          <button id="btn-leave-quota"
            class="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg font-semibold
                   hover:bg-amber-100 transition flex items-center gap-1">
            🚪 <span class="hidden sm:inline">โควต้า</span> <span id="leave-quota-label">${Object.keys(q).length}/${d}</span>
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
      ${W.length>0?`
      <!-- Holiday attendance banner -->
      <div class="flex items-center justify-between gap-3 px-4 py-2 bg-red-50 border-b border-red-100 text-xs text-red-700 flex-shrink-0">
        <span>⚠️ พบข้อมูลเช็คชื่อ ${W.length} รายการในคาบที่ตรงกับวันหยุด (คอลัมน์สีแดง)</span>
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
        ${v.length?`<table class="border-collapse text-xs" style="min-width: max-content">
          <thead>
            <!-- Row 1: dates (clickable) -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${b} bg-emerald-50/60" style="width:32px"></th>
              <th class="${T} bg-emerald-50/60" style="left:32px;width:72px"></th>
              <th class="${T} bg-emerald-50/60 text-left px-2" style="left:104px;min-width:${c}px">
                <span class="text-[10px] text-emerald-600 font-medium">✏️ กดวันที่เพื่อเช็คชื่อ</span>
              </th>
              ${L.map(E=>{const B=p.has(E.ds);return`<th class="${m} p-0 cursor-pointer att-date-th ${B?"bg-red-100 hover:bg-red-200":"bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200"}"
                  data-open-session="${E.n}" data-date="${E.ds}"
                  style="width:${K}px;min-width:${K}px" title="คลิกเพื่อเช็คชื่อ ${E.ds}">
                  <div class="flex flex-col items-center justify-center py-1 gap-0 ${B?"text-red-400":"text-emerald-700"}">
                    <span class="text-[9px] leading-none">${B?"🔴":"✏️"}</span>
                    <span class="text-[11px] font-semibold leading-tight">${re(E.date)}</span>
                  </div>
                </th>`}).join("")}
            </tr>
            <!-- Row 2: session numbers -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${b} bg-gray-100 font-semibold text-gray-500" style="width:32px">#</th>
              <th class="${T} bg-gray-100 font-semibold text-gray-500" style="left:32px;width:72px">รหัส</th>
              <th class="${T} bg-gray-100 font-semibold text-gray-500 text-left px-2"
                style="left:104px;min-width:${c}px">ชื่อ-นามสกุล</th>
              ${L.map(E=>{const B=p.has(E.ds);return`<th class="${m} ${B?"bg-red-50 text-red-300":"bg-gray-100 text-gray-500"}"

                  style="width:${K}px;min-width:${K}px">${E.n}</th>`}).join("")}
            </tr>
          </thead>
          <tbody>
            ${v.map((E,B)=>{const F=(E.full_name??"?").charAt(0);return`<tr class="hover:bg-gray-50 transition" data-sid="${E.id}">
                <td class="${b} text-center text-gray-400" style="width:32px">${B+1}</td>
                <td class="${T} text-center font-mono text-gray-600" style="left:32px;width:72px">${E.student_code}</td>
                <td class="${T} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:104px;min-width:${c}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-1">
                    ${E.image_url?`<img src="${E.image_url}" class="w-8 h-8 object-cover rounded border flex-shrink-0" />`:'<div class="w-8 h-8 rounded border bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm">👤</div>'}
                    <div class="flex flex-col min-w-0">
                      <span class="text-gray-800 text-xs truncate max-w-[105px] font-semibold">${E.full_name}</span>
                      ${pt(E,q,R,S)}
                    </div>
                  </div>
                </td>
                ${L.map(H=>{var ee;const Y=((ee=a[E.id])==null?void 0:ee[H.n])??null,Z=Y?ue[Y]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    att-cell ${p.has(H.ds)?"bg-red-50":"hover:bg-gray-100"} ${Z?Z.bg:""}"
                    data-sid="${E.id}" data-session="${H.n}" data-date="${H.ds}"
                    style="width:${K}px;min-width:${K}px;height:32px">
                    ${Z?`<span class="${Z.color}">${Z.label}</span>`:""}
                  </td>`}).join("")}
              </tr>`}).join("")}
          </tbody>
        </table>`:`<div class="p-16 text-center text-gray-400">
               <p class="text-4xl mb-3">👦</p>
               <p>ยังไม่มีนักเรียนในห้องนี้</p>
             </div>`}
      </div>
    </div>`);const O=document.getElementById("att-grid-wrap");if(!O)return;(g=document.getElementById("btn-att-stats"))==null||g.addEventListener("click",()=>{gt(r,v,L,a,p)});const Q=()=>{mt(r,d,S,()=>{oe(t,r)})};(j=document.getElementById("btn-leave-quota"))==null||j.addEventListener("click",Q),(I=document.getElementById("btn-att-studentcare-help"))==null||I.addEventListener("click",yt),(M=document.getElementById("btn-att-import-studentcare-bulk"))==null||M.addEventListener("click",async()=>{var ee;const E={};v.forEach(U=>{U.main_room&&(E[U.main_room]=(E[U.main_room]||0)+1)});const B=(ee=Object.entries(E).sort((U,se)=>se[1]-U[1])[0])==null?void 0:ee[0];if(!B){D("หาห้องเรียนหลักของนักเรียนกลุ่มนี้ไม่เจอ","error");return}const F=(window._pp5DonorTierIndex??0)>=2,H=$e(t==null?void 0:t.id,B,F);if(!H.allowed){ke(H.claimedRoom,B);return}!F&&!H.claimedRoom&&_e(t==null?void 0:t.id,B);let Y;try{Y=await Ge(B)}catch(U){D("ดึงข้อมูลไม่สำเร็จ: "+(U.message??""),"error");return}if(!Y.length){D(`ยังไม่มีข้อมูลจากระบบดูแลสำหรับห้อง ${B} เลย — ไปกดส่งข้อมูลจากหน้าระบบดูแลก่อน`,"warning");return}const Z={};Y.forEach(U=>{var se;(Z[se=U.check_date]??(Z[se]=[])).push(U)});const G=Object.keys(Z).sort().map(U=>{const se=L.filter(ae=>ae.ds===U).map(ae=>ae.n),ne=Object.fromEntries(Z[U].map(ae=>[ae.student_code,ae])),le=v.map(ae=>({student:ae,staged:ne[ae.student_code]})).filter(ae=>ae.staged),be=se.length?le.some(({student:ae})=>se.some(ze=>{var Ce;return((Ce=a[ae.id])==null?void 0:Ce[ze])!=null})):!1;return{date:U,ns:se,matched:le,isHoliday:p.has(U),hasExisting:be}}).filter(U=>U.matched.length>0);if(!G.length){D("มีข้อมูลจากระบบดูแล แต่ไม่ตรงกับรหัสนักเรียนในห้องนี้เลยสักคน","error");return}$t(G,async U=>{const se=[];if(U.forEach(ne=>{ne.ns.forEach(le=>{ne.matched.forEach(({student:be,staged:ae})=>{se.push({class_id:k,student_id:be.id,session_number:N(le),check_date:ne.date,status:ae.status})})})}),!!se.length)try{await Se(se),D(`นำเข้าและบันทึกสำเร็จ ${se.length} รายการ (${U.length} วัน) ✅`,"success"),oe(t,r)}catch(ne){D("บันทึกไม่สำเร็จ: "+(ne.message??""),"error")}})}),O.addEventListener("click",E=>{E.target.closest(".btn-leave-quota-badge")&&Q()}),(i=document.getElementById("btn-clear-holiday-att"))==null||i.addEventListener("click",async()=>{const E=[...new Set(W.map(F=>{var H;return(H=L.find(Y=>Y.n===F.session_number))==null?void 0:H.ds}).filter(Boolean))].sort();await je({title:"ลบข้อมูลเช็คชื่อในวันหยุด",message:`พบข้อมูลเช็คชื่อ ${W.length} รายการ ในคาบที่ตรงกับวันหยุดโรงเรียน (${E.join(", ")})`,detail:"คาบเหล่านี้ถูกล็อกไม่ให้แก้ไข ข้อมูลเก่าที่ค้างอยู่จะถูกลบออกถาวรและไม่สามารถกู้คืนได้",confirmText:"ลบข้อมูลนี้"})&&(await Promise.all(W.map(F=>Te(r.id,F.student_id,F.session_number,null,null))),D(`ลบข้อมูลเช็คชื่อในวันหยุดเรียบร้อย ${W.length} รายการ`,"success"),oe(t,r))}),O.addEventListener("click",E=>{var Y;if(E.target.closest(".btn-request-leave")||E.target.closest(".leave-badge"))return;const B=E.target.closest(".student-name-cell");if(!B)return;const F=parseInt((Y=B.closest("[data-sid]"))==null?void 0:Y.dataset.sid),H=v.find(Z=>Z.id===F);H&&jt(H,v.indexOf(H)+1,L,a,p,r)}),O.addEventListener("click",async E=>{var se;const B=E.target.closest(".att-cell");if(!B)return;const F=parseInt(B.dataset.sid),H=parseInt(B.dataset.session),Y=B.dataset.date;if(p.has(Y)){D("วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้","warning");return}const Z=((se=a[F])==null?void 0:se[H])??null,G=ve[(ve.indexOf(Z)+1)%ve.length];a[F]||(a[F]={}),a[F][H]=G;const ee=G?ue[G]:null;Object.values(ue).forEach(ne=>B.classList.remove(ne.bg)),ee&&B.classList.add(ee.bg),B.innerHTML=ee?`<span class="${ee.color}">${ee.label}</span>`:"";const U=document.getElementById("att-saving");U==null||U.classList.remove("hidden");try{await Te(k,F,N(H),Y,G)}catch(ne){D("บันทึกไม่สำเร็จ: "+(ne.message??""),"error")}finally{U==null||U.classList.add("hidden")}}),O.addEventListener("click",E=>{const B=E.target.closest(".att-date-th[data-open-session]");if(!B)return;const F=parseInt(B.dataset.openSession),H=B.dataset.date;if(p.has(H)){D("วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้","warning");return}if(!L.find(G=>G.n===F))return;window._preSelectClass=r.id,window._preSelectDate=H,window._preSelectSessN=F;const Z=L.filter(G=>G.ds===H);He(t,r,v,a,F,H,Z,p,k,N)}),window._leaveTimerInterval&&(clearInterval(window._leaveTimerInterval),window._leaveTimerInterval=null),window._overdueQueue=window._overdueQueue||[],window._isProcessingOverdue=!1,window._notifiedOverdueLeaves=window._notifiedOverdueLeaves||new Set;const V=()=>{const E=document.querySelectorAll(".leave-timer");if(E.length===0)return;const B=new Date;E.forEach(async F=>{const H=F.closest(".leave-badge");if(!H)return;const Y=H.dataset.start,Z=parseInt(H.dataset.duration),G=H.dataset.leaveId,ee=H.dataset.name,U=ct(Y,Z,B);if(U.isOverdue){if(F.innerHTML=U.timerText,!H.classList.contains("bg-red-100")){H.classList.remove("bg-amber-100","text-amber-700"),H.classList.add("bg-red-100","text-red-700","animate-pulse");const ne=H.querySelector("span");ne&&(ne.textContent="เลยเวลา"),window._notifiedOverdueLeaves.has(G)||(window._notifiedOverdueLeaves.add(G),window._overdueQueue.push({leaveId:G,studentName:ee,classId:r.id,teacherId:t.id}),z())}U.isBeyondLimit&&H.classList.remove("animate-pulse")}else F.innerHTML=U.timerText})},z=async()=>{if(window._isProcessingOverdue||window._overdueQueue.length===0)return;window._isProcessingOverdue=!0;const E=window._overdueQueue.shift(),B=document.getElementById("overdue-check-modal");B&&B.remove();const F=document.createElement("div");F.id="overdue-check-modal",F.className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-fade",F.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4">
          <div class="text-4xl text-amber-500 animate-bounce">🚪⌛</div>
          <h3 class="text-lg font-bold text-gray-800">นักเรียนหมดเวลาขออนุญาตแล้ว</h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            นักเรียน <strong class="text-gray-800">${J(E.studentName)}</strong> ครบกำหนดเวลาขออนุญาตออกจากห้องแล้ว เดินทางกลับเข้าห้องเรียนแล้วหรือยัง?
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
      `,document.body.appendChild(F),F.querySelector("#btn-overdue-yes").addEventListener("click",async()=>{try{await he(E.leaveId,"returned"),D(`บันทึกการกลับห้องของ ${E.studentName} เรียบร้อย`,"success"),F.remove(),window._isProcessingOverdue=!1,oe(t,r),z()}catch(H){D("บันทึกผิดพลาด: "+(H.message??""),"error"),window._isProcessingOverdue=!1}}),F.querySelector("#btn-overdue-no").addEventListener("click",async()=>{try{await he(E.leaveId,"overdue"),D(`บันทึกประวัติการเลยเวลาของ ${E.studentName} แล้ว`,"info"),F.remove(),window._isProcessingOverdue=!1,oe(t,r),z()}catch(H){D("บันทึกผิดพลาด: "+(H.message??""),"error"),window._isProcessingOverdue=!1}})};window._leaveTimerInterval=setInterval(V,1e3),setTimeout(V,100),O.addEventListener("click",async E=>{const B=E.target.closest(".btn-request-leave");if(!B)return;const F=parseInt(B.dataset.sid),H=B.dataset.name,Y=B.dataset.img||"";if(Object.keys(q).length>=d){D(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${d} คนแล้ว`,"warning");return}bt(t,r,F,H,Y,q,d,()=>oe(t,r))}),O.addEventListener("click",async E=>{const B=E.target.closest(".leave-badge");if(!B)return;const F=B.dataset.leaveId,H=B.dataset.name,Y=B.dataset.reason;if(await je({title:"นักเรียนกลับเข้าห้องเรียน?",message:`ยืนยันว่านักเรียน "${H}" (ออกนอกห้องด้วยเหตุผล: ${Y}) กลับเข้าห้องเรียนเรียบร้อยแล้ว`,confirmText:"กลับเข้าห้องแล้ว"}))try{await he(F,"returned"),D(`บันทึกการกลับห้องของ ${H} เรียบร้อย`,"success"),oe(t,r)}catch(G){D("บันทึกไม่สำเร็จ: "+(G.message??""),"error")}})}catch(h){D("โหลดข้อมูลไม่สำเร็จ: "+(h.message??""),"error")}}function pt(t,r,n,y){const x=r[t.id],g=n[t.id]||0,j=g>=y;return x?`
      <div class="mt-0.5 flex items-center">
        <span class="leave-badge cursor-pointer inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${x.status==="overdue"?"bg-red-100 text-red-700 animate-pulse":"bg-amber-100 text-amber-700"}"
          data-leave-id="${x.id}" data-sid="${t.id}" data-name="${J(t.full_name)}" data-reason="${J(x.reason)}" data-start="${x.created_at}" data-duration="${x.allowed_duration}" title="ขออนุญาตออกนอกห้อง: ${x.reason} (คลิกเพื่อบันทึกกลับห้อง)">
          🚪 <span>${x.status==="overdue"?"เลยเวลา":"ออกห้อง"}</span> <span class="leave-timer font-mono text-[9px]">--:--</span>
        </span>
      </div>
    `:j?`
      <div class="mt-0.5 flex items-center">
        <button type="button" class="btn-leave-quota-badge inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-400 border border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition cursor-pointer" title="นักเรียนใช้สิทธิ์ออกนอกห้องครบ ${y} ครั้งแล้วในสัปดาห์นี้ (คลิกเพื่อปรับโควต้า)">
          ✓ ออกแล้ว (${g}/${y})
        </button>
      </div>
    `:`
      <div class="mt-0.5 flex items-center gap-1">
        <button type="button" class="btn-request-leave text-[9px] text-gray-500 hover:text-indigo-600 border border-gray-200 hover:border-indigo-300 rounded px-1 py-0.5 bg-gray-50 hover:bg-indigo-50 transition font-medium"
          data-sid="${t.id}" data-name="${J(t.full_name)}" data-img="${t.image_url||""}">
          🚪 ขอออกห้อง
        </button>
        <span class="text-[9px] text-gray-400 font-mono" title="ใช้สิทธิ์ออกนอกห้องไปแล้ว ${g} จาก ${y} ครั้งในสัปดาห์นี้">${g}/${y}</span>
      </div>
    `}function mt(t,r,n,y){var I,M,i;(I=document.getElementById("leave-quota-modal"))==null||I.remove();const x=document.createElement("div");x.id="leave-quota-modal",x.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🚪 ตั้งค่าโควต้าออกนอกห้อง</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">${J(t.class_name||"ห้องเรียนนี้")}</p>
        </div>
        <button id="btn-leave-quota-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนนักเรียนที่อนุญาตให้อยู่นอกห้องพร้อมกัน</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota" min="1" max="30" value="${r}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">คน</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1,2,3,5].map(h=>`
            <button type="button" class="btn-leave-quota-preset px-3 py-2 rounded-xl border text-xs font-bold ${h===r?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}"
              data-value="${h}">${h} คน</button>
          `).join("")}
        </div>
      </div>
      <div class="space-y-2 border-t pt-3">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนครั้งสูงสุดต่อสัปดาห์ (ต่อนักเรียน 1 คน)</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota-per-week" min="1" max="14" value="${n}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">ครั้ง/สัปดาห์</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1,2,3,5].map(h=>`
            <button type="button" class="btn-leave-quota-week-preset px-3 py-2 rounded-xl border text-xs font-bold ${h===n?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}"
              data-value="${h}">${h} ครั้ง</button>
          `).join("")}
        </div>
      </div>
      <button id="btn-save-leave-quota" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        บันทึกโควต้า
      </button>
    </div>
  `,document.body.appendChild(x);const g=x.querySelector("#input-leave-quota"),j=x.querySelector("#input-leave-quota-per-week");(M=x.querySelector("#btn-leave-quota-close"))==null||M.addEventListener("click",()=>x.remove()),x.querySelectorAll(".btn-leave-quota-preset").forEach(h=>{h.addEventListener("click",()=>{g.value=h.dataset.value})}),x.querySelectorAll(".btn-leave-quota-week-preset").forEach(h=>{h.addEventListener("click",()=>{j.value=h.dataset.value})}),(i=x.querySelector("#btn-save-leave-quota"))==null||i.addEventListener("click",async()=>{const h=parseInt(g.value,10);if(!Number.isFinite(h)||h<1||h>30){D("กรุณาระบุโควต้าคนออกพร้อมกันระหว่าง 1-30 คน","warning");return}const C=parseInt(j.value,10);if(!Number.isFinite(C)||C<1||C>14){D("กรุณาระบุจำนวนครั้งต่อสัปดาห์ระหว่าง 1-14 ครั้ง","warning");return}try{await Promise.all([Ze(t.id,h),Je(t.id,C)]),D(`บันทึกโควต้าออกนอกห้องเป็น ${h} คน / ${C} ครั้งต่อสัปดาห์แล้ว`,"success"),x.remove(),y==null||y(h,C)}catch(P){D("บันทึกโควต้าไม่สำเร็จ: "+(P.message??""),"error")}})}function bt(t,r,n,y,x,g,j,I){const M=document.getElementById("leave-request-modal");M&&M.remove();const i=["🚽 ไปห้องน้ำ","💊 ไปห้องพยาบาล","🏢 ไปฝ่ายปกครอง/ธุรการ","✏️ อื่นๆ"],h=[5,10,15,30];let C=i[0],P=10;const w=document.createElement("div");w.id="leave-request-modal",w.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4",w.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <h3 class="font-bold text-gray-800 text-sm">🚪 ขออนุญาตออกนอกห้องเรียน</h3>
        <button id="btn-leave-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="rounded-2xl border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-amber-800 flex items-center justify-between gap-3">
        <span class="font-semibold">โควต้านอกห้องตอนนี้</span>
        <span class="font-extrabold">${Object.keys(g).length}/${j} คน</span>
      </div>
      
      <!-- ข้อมูลและรูปนักเรียน -->
      <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
        <div class="w-12 h-16 rounded-xl overflow-hidden bg-gray-150 border border-gray-250 flex-shrink-0">
          ${x?`<img src="${J(x)}" class="w-full h-full object-cover" />`:'<div class="w-full h-full flex items-center justify-center text-xl font-bold text-gray-400 bg-gray-200">👤</div>'}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">นักเรียนผู้ขออนุญาต</p>
          <h4 class="font-extrabold text-gray-800 text-sm truncate mt-0.5">${J(y)}</h4>
        </div>
      </div>
      
      <!-- เหตุผล -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">1. เหตุผลของการขออนุญาต</label>
        <div class="grid grid-cols-2 gap-2">
          ${i.map(($,u)=>`
            <button class="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl transition text-center
              ${u===0?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-reason="${$}">${$}
            </button>
          `).join("")}
        </div>
        <input type="text" id="input-custom-reason" class="hidden w-full border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="กรุณาระบุเหตุผลการขออนุญาต..." />
      </div>
      
      <!-- เวลาที่อนุญาต -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">2. ระยะเวลาที่อนุญาต</label>
        <div class="grid grid-cols-5 gap-1.5">
          ${h.map($=>`
            <button class="btn-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center
              ${$===10?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-duration="${$}">${$} น.
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
  `,document.body.appendChild(w);const A=w.querySelector("#input-custom-reason");w.querySelectorAll(".btn-reason").forEach($=>{$.addEventListener("click",()=>{w.querySelectorAll(".btn-reason").forEach(u=>{u.className="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),$.className="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center",C=$.dataset.reason,C==="✏️ อื่นๆ"?(A.classList.remove("hidden"),A.focus()):A.classList.add("hidden")})});const o=w.querySelector("#div-custom-duration"),v=w.querySelector("#input-custom-duration");w.querySelectorAll(".btn-duration").forEach($=>{$.addEventListener("click",()=>{w.querySelectorAll(".btn-duration").forEach(e=>{e.className="btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),$.className="btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center";const u=$.dataset.duration;u==="custom"?(o.classList.remove("hidden"),v.focus()):(o.classList.add("hidden"),P=parseInt(u))})}),w.querySelector("#btn-leave-close").addEventListener("click",()=>w.remove());const l=w.querySelector("#btn-leave-submit"),f=l.textContent;l.addEventListener("click",async()=>{if(l.disabled)return;let $=C;if(C==="✏️ อื่นๆ"&&($=A.value.trim(),!$)){D("กรุณาระบุเหตุผลในการขออนุญาต","warning");return}let u=P;const e=w.querySelector(".btn-duration.bg-indigo-600");if(e&&e.dataset.duration==="custom"){const d=parseInt(v.value.trim());if(isNaN(d)||d<=0){D("กรุณาระบุระยะเวลากรอกเป็นจำนวนนาทีที่ถูกต้อง (มากกว่า 0)","warning");return}u=d}try{l.disabled=!0,l.textContent="กำลังบันทึก...",l.classList.add("opacity-70","cursor-not-allowed"),await tt(n,r.id,t.id,$,u,j),w.remove(),I(),Ve({title:"อนุมัติใบอนุญาตสำเร็จ 🟢",message:`ได้ออกใบอนุญาตออกนอกห้องเรียนให้แก่ <strong>${J(y)}</strong> เป็นเวลา <strong>${u} นาที</strong> เรียบร้อยแล้ว`,confirmText:"ตกลง"})}catch(d){D("การขออนุญาตล้มเหลว: "+(d.message??""),"error"),l.disabled=!1,l.textContent=f,l.classList.remove("opacity-70","cursor-not-allowed")}})}function gt(t,r,n,y,x){const g=document.getElementById("att-stats-modal");g&&g.remove();const j=t.master_subjects,I=n.filter(u=>!x.has(u.ds)),M=I.length,i=["present","absent","late","excused","sick"],h=r.map((u,e)=>{var L;const d={present:0,absent:0,late:0,excused:0,sick:0,noRecord:0};for(const p of I){const q=((L=y[u.id])==null?void 0:L[p.n])??null;q&&d[q]!==void 0?d[q]++:q||d.noRecord++}const S=d.present+d.late,s=M>0?(S/M*100).toFixed(1):"0.0";return{student:u,no:e+1,...d,attended:S,pct:parseFloat(s)}}),C=h.length?(h.reduce((u,e)=>u+e.pct,0)/h.length).toFixed(1):"0.0",P={};for(const u of I){const e=new Date(u.date),d=e.getDay()||7,S=new Date(e);S.setDate(e.getDate()-d+1);const s=Ne(S);P[s]||(P[s]={label:`${re(S)}`,sessions:[]}),P[s].sessions.push(u)}const w=Object.entries(P).sort(([u],[e])=>u.localeCompare(e)),A=u=>u>=80?"text-emerald-600":u>=60?"text-amber-500":"text-red-600",o=u=>u>=80?"bg-emerald-50":u>=60?"bg-amber-50":"bg-red-50",v=document.createElement("div");v.id="att-stats-modal",v.className="fixed inset-0 z-[80] bg-white flex flex-col",v.innerHTML=`
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-white shadow-sm flex-shrink-0">
      <button id="stats-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800">📊 สถิติการมาเรียน</h2>
        <p class="text-xs text-gray-400">${(j==null?void 0:j.subject_name)??"—"} · ${t.class_name} · ${M} คาบที่เรียน</p>
      </div>
      <!-- Summary badges -->
      <div class="hidden sm:flex gap-2 text-xs">
        <span class="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
          เฉลี่ย ${C}%
        </span>
        <span class="px-2 py-1 ${o(parseFloat(C))} ${A(parseFloat(C))} rounded-lg font-medium">
          ${parseFloat(C)>=80?"✓ ดี":parseFloat(C)>=60?"⚠ ปานกลาง":"✗ ต่ำ"}
        </span>
      </div>
    </div>
    <!-- Tabs -->
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[["sem","รายภาคเรียน"],["week","รายสัปดาห์"],["session","รายคาบ"]].map(([u,e],d)=>`
        <button class="stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${d===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}"
          data-tab="${u}">${e}
        </button>`).join("")}
    </div>
    <!-- Content -->
    <div class="flex-1 overflow-auto" id="stats-content"></div>`,document.body.appendChild(v);const l=()=>{const u=[...h].sort((e,d)=>e.pct-d.pct);document.getElementById("stats-content").innerHTML=`
      <!-- Class summary cards -->
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${[["มาเรียน",h.reduce((e,d)=>e+d.present,0),"bg-emerald-100 text-emerald-700"],["ขาด",h.reduce((e,d)=>e+d.absent,0),"bg-red-100 text-red-700"],["สาย",h.reduce((e,d)=>e+d.late,0),"bg-amber-100 text-amber-700"],["ลากิจ",h.reduce((e,d)=>e+d.excused,0),"bg-blue-100 text-blue-700"],["ลาป่วย",h.reduce((e,d)=>e+d.sick,0),"bg-orange-100 text-orange-700"]].map(([e,d,S])=>`
          <div class="${S} rounded-xl p-3 text-center">
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
              ${u.map(e=>`
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
                    <span class="font-bold text-sm ${A(e.pct)}">${e.pct}%</span>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`},f=()=>{document.getElementById("stats-content").innerHTML=`
      <div class="p-4 space-y-4">
        ${w.map(([u,e],d)=>{const S=e.sessions,s=re(S[S.length-1].date),p=r.map(a=>{var k;const _={present:0,absent:0,late:0,excused:0,sick:0};for(const N of S){const W=((k=y[a.id])==null?void 0:k[N.n])??null;W&&_[W]!==void 0&&_[W]++}return _}).reduce((a,_)=>(i.forEach(k=>a[k]=(a[k]||0)+_[k]),a),{}),q=S.length*r.length,R=q>0?((p.present+p.late)/q*100).toFixed(1):"0.0";return`
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${d+1}</p>
                  <p class="text-xs text-gray-400">${e.label} – ${s} · ${S.length} คาบ</p>
                </div>
                <span class="text-lg font-bold ${A(parseFloat(R))}">${R}%</span>
              </div>
              <!-- Mini bar chart -->
              <div class="flex gap-1 h-6 rounded-lg overflow-hidden">
                ${[[p.present||0,"bg-emerald-500"],[p.late||0,"bg-amber-400"],[p.absent||0,"bg-red-500"],[p.excused||0,"bg-blue-400"],[p.sick||0,"bg-orange-400"]].filter(([a])=>a>0).map(([a,_])=>`<div class="${_}" style="flex:${a}" title="${a}"></div>`).join("")}
              </div>
              <div class="flex gap-3 mt-2 text-xs text-gray-500 flex-wrap">
                <span class="text-emerald-600">มา ${p.present||0}</span>
                <span class="text-red-500">ขาด ${p.absent||0}</span>
                <span class="text-amber-500">สาย ${p.late||0}</span>
                <span class="text-blue-500">กิจ ${p.excused||0}</span>
                <span class="text-orange-500">ป่วย ${p.sick||0}</span>
              </div>
            </div>`}).join("")}
      </div>`},$=()=>{document.getElementById("stats-content").innerHTML=`
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
              ${I.map(u=>{var S;const e={present:0,absent:0,late:0,excused:0,sick:0};for(const s of r){const L=((S=y[s.id])==null?void 0:S[u.n])??null;L&&e[L]!==void 0&&e[L]++}const d=r.length?((e.present+e.late)/r.length*100).toFixed(0):"0";return`
                  <tr class="hover:bg-gray-50">
                    <td class="px-3 py-2 text-gray-500">${u.n}</td>
                    <td class="px-3 py-2 font-mono text-gray-700">${re(u.date)}</td>
                    <td class="px-3 py-2 text-center text-emerald-600 font-medium">${e.present}</td>
                    <td class="px-3 py-2 text-center text-red-600 font-medium">${e.absent||"—"}</td>
                    <td class="px-3 py-2 text-center text-amber-500 font-medium">${e.late||"—"}</td>
                    <td class="px-3 py-2 text-center text-blue-500 font-medium">${e.excused||"—"}</td>
                    <td class="px-3 py-2 text-center text-orange-500 font-medium">${e.sick||"—"}</td>
                    <td class="px-3 py-2 text-center font-bold ${A(parseInt(d))}">${d}%</td>
                  </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>`};l(),v.querySelectorAll(".stats-tab").forEach(u=>{u.addEventListener("click",()=>{v.querySelectorAll(".stats-tab").forEach(d=>{d.classList.replace("border-indigo-600","border-transparent"),d.classList.replace("text-indigo-600","text-gray-500")}),u.classList.replace("border-transparent","border-indigo-600"),u.classList.replace("text-gray-500","text-indigo-600");const e=u.dataset.tab;e==="sem"&&l(),e==="week"&&f(),e==="session"&&$()})}),v.querySelector("#stats-close").addEventListener("click",()=>v.remove())}async function ft(t,r,n,y={}){var S;const x=r.master_subjects,g=(x==null?void 0:x.credit)??1,j=await ye().catch(()=>({})),I=j.academicYear??j.academic_year??new Date().getFullYear()+543,M=j.semester??1,i=r.source_class_id??null,[h,C,P,w]=await Promise.all([Ae(r.id),Me(i??r.id),Be(I,M),pe(r.id).catch(()=>[])]),A=(x==null?void 0:x.subject_group)==="ACDMVOC",o=me(r,g,w.length?w:null,A),v=new Set(P),l={},f=new Map;if(i){const s=A&&w.length?w.length:Math.max(1,Math.round(g*2));let L=s;try{const q=A?await pe(i).catch(()=>[]):[];if(q.length)L=q.length;else{const a=(await fe((t==null?void 0:t.id)??null).catch(()=>[])).find(_=>Number(_.id)===Number(i));(S=a==null?void 0:a.master_subjects)!=null&&S.credit&&(L=Math.max(1,Math.round(a.master_subjects.credit*2)))}}catch{}const p=o.length;for(let q=1;q<=p;q++){const R=Math.floor((q-1)/s),a=(q-1)%s,_=R*L+a+1;f.set(q,_);for(const k of C)k.session_number===_&&(l[k.student_id]||(l[k.student_id]={}),l[k.student_id][q]=k.status)}}else for(const s of C)l[s.student_id]||(l[s.student_id]={}),l[s.student_id][s.session_number]=s.status;const $=o.find(s=>Number(s.n)===Number(n));if(!$)throw new Error("ไม่พบคาบเรียนที่เลือก");if(v.has($.ds))throw new Error("คาบนี้ตรงกับวันหยุดโรงเรียน");const u=o.filter(s=>s.ds===$.ds),e=i??r.id,d=s=>f.get(s)??s;He(t,r,h,l,$.n,$.ds,u,v,e,d,y)}async function Nt(t){var x,g,j;(x=document.getElementById("att-scan-setup-modal"))==null||x.remove();const r=document.createElement("div");r.id="att-scan-setup-modal",r.className="fixed inset-0 z-[190] flex items-end sm:items-center justify-center bg-black/50 p-4",r.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-8 h-8 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">${Ee}</span>
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
  `,document.body.appendChild(r);const n=()=>r.remove();r.addEventListener("click",I=>{I.target===r&&n()}),(g=r.querySelector("#att-scan-setup-close"))==null||g.addEventListener("click",n);const y=r.querySelector("#att-scan-setup-body");try{const I=await fe((t==null?void 0:t.id)??null).catch(()=>[]);if(!I.length){y.innerHTML='<div class="py-10 text-center text-gray-400 text-sm">ยังไม่มีห้องเรียนสำหรับเช็คชื่อ</div>';return}y.innerHTML=`
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1.5">ห้องเรียน / วิชา</label>
          <select id="att-scan-class" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-emerald-500">
            ${I.map(w=>{var A;return`<option value="${w.id}">${J(w.class_name)} — ${J(((A=w.master_subjects)==null?void 0:A.subject_name)??"—")}</option>`}).join("")}
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
          ${ge}
          <span>เปิดฟอร์มและเริ่มสแกน</span>
        </button>
      </div>
    `;const M=y.querySelector("#att-scan-class"),i=y.querySelector("#att-scan-session"),h=y.querySelector("#att-scan-session-hint");let C=[];const P=async()=>{var $,u;const w=I.find(e=>String(e.id)===String(M.value));if(i.innerHTML='<option value="">กำลังโหลดคาบ...</option>',h.textContent="",!w)return;const A=await pe(w.id).catch(()=>[]),o=(($=w.master_subjects)==null?void 0:$.credit)??1,v=((u=w.master_subjects)==null?void 0:u.subject_group)==="ACDMVOC";C=me(w,o,A.length?A:null,v);const l=Ne(new Date),f=C.find(e=>e.ds===l)||C.find(e=>e.ds>l)||C[0];i.innerHTML=C.map(e=>`
        <option value="${e.n}" ${(f==null?void 0:f.n)===e.n?"selected":""}>
          คาบที่ ${e.n} · ${re(e.date)}${e.ds===l?" · วันนี้":""}
        </option>
      `).join(""),h.textContent=f?`ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${f.n} ก่อนเปิดกล้อง`:"ไม่พบคาบเรียนสำหรับห้องนี้"};M.addEventListener("change",P),i.addEventListener("change",()=>{const w=C.find(A=>String(A.n)===String(i.value));h.textContent=w?`ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${w.n} ก่อนเปิดกล้อง`:""}),await P(),(j=y.querySelector("#att-scan-start"))==null||j.addEventListener("click",async()=>{const w=I.find(v=>String(v.id)===String(M.value)),A=parseInt(i.value,10);if(!w||!A){D("กรุณาเลือกห้องและคาบที่จะเช็ค","warning");return}const o=y.querySelector("#att-scan-start");o.disabled=!0,o.textContent="กำลังเปิดฟอร์ม...";try{n(),await ft(t,w,A,{autoOpenScanner:!0})}catch(v){D(v.message||"เปิดสแกนเช็คชื่อไม่สำเร็จ","error")}finally{o.disabled=!1,o.innerHTML=`${ge}<span>เปิดฟอร์มและเริ่มสแกน</span>`}})}catch(I){y.innerHTML=`<div class="py-10 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${J(I.message||"")}</div>`}}function yt(){var n;(n=document.getElementById("stc-install-modal"))==null||n.remove();const t=document.createElement("div");t.id="stc-install-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",t.innerHTML=`
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
    </div>`,document.body.appendChild(t);const r=()=>t.remove();t.querySelector("#stc-install-close").onclick=r,t.onclick=y=>{y.target===t&&r()}}function ht(t,r){var j;(j=document.getElementById("stc-import-preview"))==null||j.remove();const n={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},y={present:"text-emerald-600",absent:"text-red-600",late:"text-amber-500",excused:"text-blue-500",sick:"text-orange-500"},x=document.createElement("div");x.id="stc-import-preview",x.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4",x.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📥 ข้อมูลจากระบบดูแล (${t.length} คน)</h3>
        <button id="stc-preview-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1">
        ${t.map(({student:I,staged:M})=>`
          <div class="flex items-center justify-between gap-2 py-1.5 border-b border-gray-50 text-xs">
            <span class="text-gray-700 truncate">${J(I.full_name)}</span>
            <span class="font-bold flex-shrink-0 ${y[M.status]??"text-gray-500"}">${n[M.status]??M.status}</span>
          </div>`).join("")}
      </div>
      <div class="px-4 py-3 border-t flex-shrink-0 flex gap-2">
        <button id="stc-preview-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">ยกเลิก</button>
        <button id="stc-preview-apply" class="flex-1 py-2.5 rounded-xl btn-primary text-white text-sm font-semibold">นำไปใช้</button>
      </div>
    </div>`,document.body.appendChild(x);const g=()=>x.remove();x.querySelector("#stc-preview-close").onclick=g,x.querySelector("#stc-preview-cancel").onclick=g,x.onclick=I=>{I.target===x&&g()},x.querySelector("#stc-preview-apply").onclick=()=>{r(),g()}}const vt={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},wt={present:"text-emerald-600",absent:"text-red-600",late:"text-amber-500",excused:"text-blue-500",sick:"text-orange-500"};function $t(t,r){var x;(x=document.getElementById("stc-bulk-import-preview"))==null||x.remove();const n=document.createElement("div");n.id="stc-bulk-import-preview",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📥 ข้อมูลจากระบบดูแล (${t.length} วัน)</h3>
        <button id="stc-bulk-preview-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <p class="px-4 pt-2 text-xs text-gray-400">เลือกวันที่ต้องการนำเข้า — กด "ดูรายชื่อ" เพื่อตรวจก่อนบันทึก ข้อมูลของวันที่มีอยู่แล้วจะถูกเขียนทับ</p>
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1.5 mt-1">
        ${t.map((g,j)=>`
        <div class="rounded-xl border ${g.ns.length===0?"border-gray-100 opacity-50":"border-gray-100"} overflow-hidden">
          <label class="flex items-center gap-2 py-2 px-2 text-xs cursor-pointer hover:bg-gray-50">
            <input type="checkbox" class="stc-bulk-date-cb" data-idx="${j}" ${g.ns.length===0?"disabled":"checked"} />
            <span class="flex-1 text-gray-700 font-medium">${re(g.date)}</span>
            <span class="text-gray-400">${g.matched.length} คน</span>
            ${g.ns.length===0?'<span class="text-red-400 font-bold">ไม่มีคาบ</span>':""}
            ${g.isHoliday?'<span class="text-amber-500 font-bold">วันหยุด</span>':""}
            ${g.hasExisting?'<span class="text-orange-500 font-bold">มีข้อมูลแล้ว</span>':""}
            <button type="button" class="stc-bulk-date-toggle text-indigo-500 font-bold flex-shrink-0" data-idx="${j}">ดูรายชื่อ ▾</button>
          </label>
          <div class="stc-bulk-date-detail hidden border-t border-gray-50 px-2 py-2 space-y-1 max-h-56 overflow-y-auto" data-detail-idx="${j}">
            ${g.matched.map(({student:I,staged:M})=>`
              <div class="flex items-center gap-2 py-1 text-xs">
                ${I.image_url?`<img src="${I.image_url}" class="w-7 h-9 rounded-md object-cover border border-gray-200 shadow-sm flex-shrink-0" />`:'<div class="w-7 h-9 rounded-md bg-gray-100 flex-shrink-0"></div>'}
                <span class="flex-1 text-gray-700 truncate">${J(I.full_name)}</span>
                <span class="font-bold flex-shrink-0 ${wt[M.status]??"text-gray-500"}">${vt[M.status]??M.status}</span>
              </div>`).join("")}
          </div>
        </div>`).join("")}
      </div>
      <div class="px-4 py-3 border-t flex-shrink-0 flex gap-2">
        <button id="stc-bulk-preview-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">ยกเลิก</button>
        <button id="stc-bulk-preview-apply" class="flex-1 py-2.5 rounded-xl btn-primary text-white text-sm font-semibold">บันทึกที่เลือก</button>
      </div>
    </div>`,document.body.appendChild(n);const y=()=>n.remove();n.querySelector("#stc-bulk-preview-close").onclick=y,n.querySelector("#stc-bulk-preview-cancel").onclick=y,n.onclick=g=>{g.target===n&&y()},n.querySelectorAll(".stc-bulk-date-toggle").forEach(g=>{g.addEventListener("click",()=>{const j=n.querySelector(`.stc-bulk-date-detail[data-detail-idx="${g.dataset.idx}"]`);if(!j)return;const I=j.classList.toggle("hidden");g.textContent=I?"ดูรายชื่อ ▾":"ซ่อนรายชื่อ ▴"})}),n.querySelector("#stc-bulk-preview-apply").onclick=()=>{const g=Array.from(n.querySelectorAll(".stc-bulk-date-cb:checked")).map(j=>t[Number(j.dataset.idx)]);y(),r(g)}}function He(t,r,n,y,x,g,j,I=new Set,M=null,i=C=>C,h={}){var e,d,S;const C=document.getElementById("att-form-modal");C&&C.remove();const P=[{key:"present",label:"มา",labelAll:"มาทุกคน",color:"bg-emerald-500 text-white",bulkCls:"bg-emerald-50 text-emerald-700 hover:bg-emerald-100"},{key:"absent",label:"ขาด",labelAll:"ขาดทุกคน",color:"bg-red-500 text-white",bulkCls:"bg-red-50 text-red-600 hover:bg-red-100"},{key:"late",label:"สาย",labelAll:"สายทุกคน",color:"bg-amber-400 text-white",bulkCls:"bg-amber-50 text-amber-600 hover:bg-amber-100"},{key:"excused",label:"ลากิจ",labelAll:"ลากิจทุกคน",color:"bg-blue-400 text-white",bulkCls:"bg-blue-50 text-blue-600 hover:bg-blue-100"},{key:"sick",label:"ลาป่วย",labelAll:"ลาป่วยทุกคน",color:"bg-orange-400 text-white",bulkCls:"bg-orange-50 text-orange-600 hover:bg-orange-100"}],w=j.length>1;let A=w;const o=document.createElement("div");o.id="att-form-modal",o.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col">
      <!-- Header -->
      <div class="px-4 py-3 border-b flex-shrink-0 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="min-w-0">
            <h3 class="font-bold text-gray-800 text-sm">เช็คชื่อ — คาบที่ ${x}</h3>
            <p class="text-xs text-gray-400">${g} · ${r.class_name}</p>
          </div>
          <button id="att-modal-close"
            class="text-gray-400 hover:text-gray-700 text-lg leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center flex-wrap gap-1.5">
          <button id="btn-att-scan-qr"
            class="text-xs px-3 py-1.5 bg-slate-900 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
            title="สแกน QR Code ของนักเรียนเพื่อเช็คชื่อ">
            ${ge}
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
          ${w?`
          <!-- Toggle ทุกคาบ (ปุ่มสี) -->
          <button id="att-sync-btn"
            class="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all
                   bg-emerald-500 text-white shadow-sm"
            title="คลิกเพื่อเปิด/ปิดการบันทึกทุกคาบในวันนี้">
            ✓ ทุกคาบ (${j.length})
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
              ${P.map(s=>`
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
        ${n.map((s,L)=>{var R;const p=((R=y[s.id])==null?void 0:R[x])??null,q=p??"present";return`<div class="flex items-center gap-1.5 py-1.5 border-b border-gray-50" data-modal-sid="${s.id}">
            <span class="text-gray-400 text-xs w-5 text-right flex-shrink-0">${L+1}</span>
            ${s.image_url?`<img src="${s.image_url}" class="w-7 h-7 rounded object-cover flex-shrink-0" />`:'<div class="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-xs flex-shrink-0">👤</div>'}
            <span class="flex-1 text-sm text-gray-800 truncate min-w-0">${s.full_name}</span>
            <div class="flex gap-0.5 flex-shrink-0" data-att-touched="${p?"1":"0"}">
              ${P.map(a=>`
                <button class="att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
                  ${q===a.key?a.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
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
    </div>`,document.body.appendChild(o);const v=o.querySelector("#att-sync-btn");v&&v.addEventListener("click",()=>{A=!A,v.className=`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all shadow-sm

        ${A?"bg-emerald-500 text-white":"bg-gray-200 text-gray-500"}`,v.innerHTML=A?`✓ ทุกคาบ (${j.length})`:`✗ ทุกคาบ (${j.length})`,D(A?`เปิด: บันทึกทั้ง ${j.length} คาบในวันที่ ${g}`:`ปิด: บันทึกเฉพาะคาบที่ ${x}`,A?"success":"info")});const l=o.querySelector("#att-bulk-btn"),f=o.querySelector("#att-bulk-dd"),$=o.querySelector("#bulk-label");l==null||l.addEventListener("click",s=>{s.stopPropagation(),f.classList.toggle("hidden")});const u=()=>f==null?void 0:f.classList.add("hidden");document.addEventListener("click",u,{once:!0}),o.querySelectorAll(".bulk-opt").forEach(s=>{s.addEventListener("click",L=>{L.stopPropagation();const p=s.dataset.bulk,q=s.dataset.color,R=s.dataset.allLabel;f.classList.add("hidden"),l.className=`text-xs px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition ${q}`,$.textContent=R,n.forEach(a=>{var k;const _=o.querySelector(`[data-modal-sid="${a.id}"]`);(k=_==null?void 0:_.querySelector("[data-att-touched]"))==null||k.setAttribute("data-att-touched","1"),_==null||_.querySelectorAll(".att-modal-status").forEach(N=>{N.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

            ${N.dataset.status===p?N.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),document.addEventListener("click",u,{once:!0})})}),o.addEventListener("click",s=>{var a;const L=s.target.closest(".att-modal-status");if(!L)return;const p=L.dataset.modalSid,q=L.dataset.status,R=o.querySelector(`[data-modal-sid="${p}"]`);(a=R==null?void 0:R.querySelector("[data-att-touched]"))==null||a.setAttribute("data-att-touched","1"),R==null||R.querySelectorAll(".att-modal-status").forEach(_=>{_.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

        ${_.dataset.status===q?_.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),(e=o.querySelector("#btn-att-scan-qr"))==null||e.addEventListener("click",async()=>{var K,c,m;const s=window._pp5DonorTierIndex>0,L=Tt(t==null?void 0:t.id,s);if(!L.allowed){(K=document.getElementById("att-scan-paywall"))==null||K.remove();const b=document.createElement("div");b.id="att-scan-paywall",b.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",b.innerHTML=`
        <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
          <button id="pw-close-btn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
          <div class="text-6xl mt-4">🔒</div>
          <p class="font-bold text-gray-800 text-lg">สิทธิ์การสแกนทดลองใช้งานเต็มแล้ว</p>
          <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สแกน QR เพื่อเช็คชื่อคาบเรียนจำกัดทดลองฟรี ${L.limit} ครั้งต่อสัปดาห์สำหรับผู้ใช้งานทั่วไป<br><br>ร่วมสนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัดครับ</p>
          <button id="pw-donate-btn" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        </div>`,document.body.appendChild(b),b.querySelector("#pw-close-btn").addEventListener("click",()=>b.remove()),b.querySelector("#pw-donate-btn").addEventListener("click",()=>{var T;b.remove(),(T=document.getElementById("btn-donate-float"))==null||T.click()});return}(c=document.getElementById("att-scanner-overlay"))==null||c.remove();const p=document.createElement("div");p.id="att-scanner-overlay",p.className="fixed inset-0 z-[95] flex flex-col bg-slate-950 items-center justify-center p-4",p.innerHTML=`
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
              ${Ee}
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
      </div>`,document.body.appendChild(p);let q=null;const R=[],a=new Map,_=b=>{const T=o.querySelector(`[data-modal-sid="${b}"]`),O=T==null?void 0:T.querySelector("[data-att-touched]"),Q=Array.from((T==null?void 0:T.querySelectorAll(".att-modal-status"))??[]).find(V=>!V.className.includes("bg-white"));return{touched:(O==null?void 0:O.dataset.attTouched)==="1",status:(Q==null?void 0:Q.dataset.status)??null}},k=(b,T)=>{const O=o.querySelector(`[data-modal-sid="${b}"]`),Q=O==null?void 0:O.querySelector("[data-att-touched]");Q&&(Q.dataset.attTouched=T!=null&&T.touched?"1":"0"),O==null||O.querySelectorAll(".att-modal-status").forEach(V=>{const z=P.find(E=>E.key===V.dataset.status);V.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
          ${T!=null&&T.status&&V.dataset.status===T.status?(z==null?void 0:z.color)??V.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})},N=()=>{const b=p.querySelector("#scan-history-list"),T=p.querySelector("#scan-history-count");if(T&&(T.textContent=`${R.length} คน`),!!b){if(!R.length){b.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}b.innerHTML=R.map((O,Q)=>`
        <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
          <span class="w-6 text-center text-slate-500 font-mono flex-shrink-0">${R.length-Q}</span>
          <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${J(O.full_name)}</span>
          <span class="text-emerald-400 font-bold text-[10px] flex-shrink-0">มา</span>
          <button type="button"
            class="btn-att-cancel-scan-row px-2 py-1 rounded-lg bg-red-950/50 text-red-300 border border-red-800/70 hover:bg-red-500 hover:text-white transition text-[10px] font-bold flex-shrink-0"
            data-sid="${O.id}">
            ยกเลิก
          </button>
        </div>
      `).join("")}};(m=p.querySelector("#scan-history-list"))==null||m.addEventListener("click",b=>{const T=b.target.closest(".btn-att-cancel-scan-row");if(!T)return;const O=Number(T.dataset.sid),Q=R.findIndex(E=>Number(E.id)===O);if(Q===-1)return;const[V]=R.splice(Q,1);k(O,a.get(O)),a.delete(O),N();const z=p.querySelector("#scan-feedback-panel");z&&(z.innerHTML=`
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400 animate-fade">
            ยกเลิกการสแกนของ <span class="font-bold text-slate-200">${J(V.full_name)}</span> แล้ว
          </div>`),D(`ยกเลิกการสแกนของ ${V.full_name} แล้ว`,"success")});const W=async()=>{q&&await q.stop().catch(()=>{}),n.forEach(b=>{const T=o.querySelector(`[data-modal-sid="${b.id}"]`),O=T==null?void 0:T.querySelector("[data-att-touched]");if(!((O==null?void 0:O.dataset.attTouched)==="1")){const V=o.querySelector(`.att-modal-status[data-modal-sid="${b.id}"][data-status="absent"]`);V&&(V.classList.contains("bg-red-500")||V.click())}}),p.remove()};p.querySelector("#btn-close-att-scanner").addEventListener("click",W);try{const b=await qt();q=new b("att-camera-reader");let T=null,O=0,Q=!1;const V=z=>{const E=p.querySelector("#att-scanner-container"),B=p.querySelector("#scan-feedback-panel"),F=Y=>{const Z=Y?"scan-flash-success":"scan-flash-error";E.classList.add(Z),setTimeout(()=>E.classList.remove(Z),600)};let H=null;try{let Y=z;if(z.startsWith("SQ:")){const[U,se,ne]=z.split(":"),le=parseInt(ne,10),ae=Math.floor(Date.now()/1e3)-le;if(ae>60||ae<-60)throw new Error("QR Code หมดอายุแล้ว");Y=se}if(H=n.find(U=>U.student_code===Y),!H)throw new Error("ไม่พบรายชื่อในคลาสเรียนนี้");if(R.some(U=>U.id===H.id))throw new Error("เช็คชื่อซ้ำ! นักเรียนคนนี้ได้รับการสแกนไปแล้ว");a.has(H.id)||a.set(H.id,_(H.id));const G=o.querySelector(`.att-modal-status[data-modal-sid="${H.id}"][data-status="present"]`);G&&(G.classList.contains("bg-emerald-500")||G.click()),qe("success"),F(!0),!s&&!Q&&(It(t==null?void 0:t.id,L.weekMonday),Q=!0),R.unshift(H);const ee=H.image_url?`<img src="${H.image_url}" class="w-12 h-16 object-cover object-top rounded-xl border border-slate-700" />`:`<div class="w-12 h-16 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold text-lg flex items-center justify-center">${H.full_name.charAt(0)}</div>`;B.innerHTML=`
            <div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              ${ee}
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">✓ สแกนสำเร็จ</span>
                <h4 class="font-extrabold text-slate-200 text-sm mt-1 truncate">${H.full_name}</h4>
                <p class="text-xs text-slate-400 truncate">รหัส ${H.student_code}</p>
              </div>
            </div>`,N()}catch(Y){qe("error"),F(!1);const Z=H?H.full_name:"ไม่พบข้อมูล",G=H?`รหัส ${H.student_code}`:`ข้อมูลดิบ: ${z}`;B.innerHTML=`
            <div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              <div class="w-12 h-16 rounded-xl bg-red-950/80 border border-red-900 text-red-400 font-bold text-xl flex items-center justify-center">❌</div>
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-red-500/20 text-red-450 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
                <h4 class="font-bold text-slate-200 text-sm mt-1 truncate">${Z}</h4>
                <p class="text-xs text-slate-400 truncate">${G}</p>
                <p class="text-xs font-bold text-red-500 mt-1">${Y.message}</p>
              </div>
            </div>`}};await q.start({facingMode:"environment"},{fps:25,aspectRatio:1},z=>{z===T&&Date.now()-O<2e3||(T=z,O=Date.now(),V(z))},()=>{})}catch(b){console.error("Attendance QR scanner initialization failed:",b),D("ไม่สามารถเปิดกล้องได้: "+b.message,"error"),p.remove()}}),(d=o.querySelector("#btn-att-import-studentcare"))==null||d.addEventListener("click",async()=>{var k;const s={};n.forEach(N=>{N.main_room&&(s[N.main_room]=(s[N.main_room]||0)+1)});const L=(k=Object.entries(s).sort((N,W)=>W[1]-N[1])[0])==null?void 0:k[0];if(!L){D("หาห้องเรียนของนักเรียนในคลาสนี้ไม่เจอ","error");return}const p=(window._pp5DonorTierIndex??0)>=2,q=$e(t==null?void 0:t.id,L,p);if(!q.allowed){ke(q.claimedRoom,L);return}!p&&!q.claimedRoom&&_e(t==null?void 0:t.id,L);let R;try{R=await Xe(L,g)}catch(N){D("ดึงข้อมูลไม่สำเร็จ: "+(N.message??""),"error");return}if(!R.length){D(`ยังไม่มีข้อมูลจากระบบดูแลสำหรับห้อง ${L} วันที่ ${g} — ไปกดส่งข้อมูลจากหน้าระบบดูแลก่อน`,"warning");return}const a=Object.fromEntries(R.map(N=>[N.student_code,N])),_=n.map(N=>({student:N,staged:a[N.student_code]})).filter(N=>N.staged);if(!_.length){D("มีข้อมูลจากระบบดูแลสำหรับวันนี้ แต่ไม่ตรงกับรหัสนักเรียนในห้องนี้เลยสักคน","error");return}ht(_,()=>{_.forEach(({student:N,staged:W})=>{var c;const K=o.querySelector(`[data-modal-sid="${N.id}"]`);(c=K==null?void 0:K.querySelector("[data-att-touched]"))==null||c.setAttribute("data-att-touched","1"),K==null||K.querySelectorAll(".att-modal-status").forEach(m=>{m.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
            ${m.dataset.status===W.status?m.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),D(`นำเข้าข้อมูล ${_.length} คนจากระบบดูแลแล้ว — ตรวจสอบแล้วกด "บันทึกการเช็คชื่อ" อีกครั้ง`,"success")})}),(S=o.querySelector("#btn-att-export-studentcare"))==null||S.addEventListener("click",async()=>{var _;const s={};n.forEach(k=>{k.main_room&&(s[k.main_room]=(s[k.main_room]||0)+1)});const L=(_=Object.entries(s).sort((k,N)=>N[1]-k[1])[0])==null?void 0:_[0];if(!L){D("หาห้องเรียนของนักเรียนในคลาสนี้ไม่เจอ","error");return}const p=(window._pp5DonorTierIndex??0)>=2,q=$e(t==null?void 0:t.id,L,p);if(!q.allowed){ke(q.claimedRoom,L);return}!p&&!q.claimedRoom&&_e(t==null?void 0:t.id,L);const R=n.map(k=>{const N=o.querySelector(`[data-modal-sid="${k.id}"]`),W=Array.from((N==null?void 0:N.querySelectorAll(".att-modal-status"))??[]).find(c=>!c.className.includes("bg-white")),K=(W==null?void 0:W.dataset.status)??"present";return{studentCode:k.student_code,status:K,studentName:k.full_name,classId:r.id}}),a=o.querySelector("#btn-att-export-studentcare");a.disabled=!0,a.textContent="กำลังส่ง...";try{await et(L,g,R),D(`ส่งเช็คชื่อ ${R.length} คนไปรอที่ระบบดูแลแล้ว — ไปเปิดหน้าระบบดูแลห้อง ${L} วันที่ ${g} แล้วกดปุ่มบุ๊กมาร์ก "ส่งจาก pp5" ได้เลย`,"success")}catch(k){D("ส่งไม่สำเร็จ: "+(k.message??""),"error")}finally{a.disabled=!1,a.innerHTML="📤 <span>ส่งไประบบดูแล</span>"}}),o.querySelector("#att-modal-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",s=>{s.target===o&&o.remove()}),h.autoOpenScanner&&setTimeout(()=>{var s;return(s=o.querySelector("#btn-att-scan-qr"))==null?void 0:s.click()},150),o.querySelector("#att-modal-save").addEventListener("click",async()=>{if(I.has(g)){D("วันหยุดโรงเรียน — ไม่สามารถบันทึกได้","warning"),o.remove();return}const s=o.querySelector("#att-modal-save");s.disabled=!0,s.textContent="กำลังบันทึก...";const L=w&&A?j.map(p=>p.n):[x];try{const p=n.map(R=>{const a=o.querySelector(`[data-modal-sid="${R.id}"]`),_=Array.from((a==null?void 0:a.querySelectorAll(".att-modal-status"))??[]).find(N=>!N.className.includes("bg-white")),k=(_==null?void 0:_.dataset.status)??"present";return{student:R,status:k}}),q=[];for(const R of L)for(const{student:a,status:_}of p)y[a.id]={...y[a.id]??{},[R]:_},q.push({class_id:M??r.id,student_id:a.id,session_number:i(R),check_date:g,status:_});await Se(q),q.forEach(R=>{const a=document.querySelector(`.att-cell[data-sid="${R.student_id}"][data-session="${R.session_number}"]`);if(!a)return;Object.values(ue).forEach(k=>a.classList.remove(k.bg));const _=ue[R.status];_&&(a.classList.add(_.bg),a.innerHTML=`<span class="${_.color}">${_.label}</span>`)}),D(`บันทึก${L.length>1?` ${L.length} คาบ`:""} แล้ว ✅`,"success"),o.remove()}catch(p){D("บันทึกไม่สำเร็จ: "+(p.message??""),"error"),s.disabled=!1,s.textContent="💾 บันทึกการเช็คชื่อ"}})}async function Ht(t){var M;ie("attendance"),ce("เช็คชื่อ","attendance");const r=window._preSelectClass??null;window._preSelectClass=null;const n=await fe((t==null?void 0:t.id)??null).catch(()=>[]),y=De();if(te(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">เลือกวิชาและวันที่เพื่อเช็คชื่อ</p>
      </div>
    </div>
    ${n.length?`
    <!-- Selector -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5 mb-5">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ห้องเรียน / วิชา</label>
          <select id="att-class" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400">
            <option value="">— เลือกห้อง —</option>
            ${n.map(i=>{var h;return`<option value="${i.id}" ${String(i.id)===String(r)?"selected":""}>${i.class_name} — ${((h=i.master_subjects)==null?void 0:h.subject_name)??"—"}</option>`}).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">วันที่</label>
          <input id="att-date" type="date" value="${y}"
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
  </div>`),!n.length)return;r&&setTimeout(()=>{var i;return(i=document.getElementById("att-load-btn"))==null?void 0:i.click()},100);const x=[{key:"present",label:"มา",color:"bg-emerald-500 text-white",border:"border-emerald-500"},{key:"absent",label:"ขาด",color:"bg-red-500 text-white",border:"border-red-500"},{key:"late",label:"สาย",color:"bg-amber-400 text-white",border:"border-amber-400"},{key:"sick",label:"ลาป่วย",color:"bg-blue-400 text-white",border:"border-blue-400"},{key:"excused",label:"ลากิจ",color:"bg-purple-400 text-white",border:"border-purple-400"}];let g=[],j={};const I=()=>{var P;const i=document.getElementById("att-student-wrap");if(!i)return;if(!g.length){i.innerHTML=`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-10 text-center text-gray-400">
        <p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียน</p></div>`;return}const h=Object.values(j).filter(w=>w==="present").length,C=Object.values(j).filter(w=>w==="absent").length;i.innerHTML=`
      <!-- Summary bar -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex items-center justify-between">
        <div class="flex gap-4 text-sm">
          <span class="text-emerald-600 font-semibold">มา ${h}</span>
          <span class="text-red-500 font-semibold">ขาด ${C}</span>
          <span class="text-gray-400">รวม ${g.length}</span>
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
            ${g.map((w,A)=>{const o=j[w.id]??"present";return`
              <tr class="hover:bg-gray-50 transition" data-sid="${w.id}">
                <td class="px-4 py-2 text-gray-400 text-xs">${A+1}</td>
                <td class="px-4 py-2">
                  <div class="flex items-center gap-2">
                    ${w.image_url?`<img src="${w.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200" />`:""}
                    <div>
                      <p class="font-medium text-gray-800 text-sm">${w.full_name}</p>
                      <p class="text-xs text-gray-400 font-mono">${w.student_code}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2">
                  <div class="flex gap-1 justify-center flex-wrap">
                    ${x.map(v=>`
                    <button class="att-status-btn text-xs px-2 py-1 rounded-lg border transition font-medium
                      ${o===v.key?v.color+" "+v.border:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
                      data-sid="${w.id}" data-status="${v.key}">
                      ${v.label}
                    </button>`).join("")}
                  </div>
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>`,document.querySelectorAll(".att-status-btn").forEach(w=>{w.addEventListener("click",()=>{const{sid:A,status:o}=w.dataset;j[A]=o,document.querySelectorAll(`.att-status-btn[data-sid="${A}"]`).forEach(v=>{const l=x.find(f=>f.key===v.dataset.status);v.className=v.className.replace(/bg-\w+-\d+ text-white border-\w+-\d+/g,""),v.dataset.status===o?v.classList.add(...l.color.split(" "),l.border):v.classList.add("bg-white","text-gray-500","border-gray-200")}),I()})}),(P=document.getElementById("att-save-btn"))==null||P.addEventListener("click",async()=>{var l,f,$;const w=document.getElementById("att-class").value,A=document.getElementById("att-date").value,o=parseInt(document.getElementById("att-period").value)||1,v=document.getElementById("att-save-btn");if(!w||!A){D("กรุณาเลือกห้องและวันที่","warning");return}v.disabled=!0,v.textContent="กำลังบันทึก...";try{const u=n.find(R=>String(R.id)===w),e=((l=u==null?void 0:u.master_subjects)==null?void 0:l.credit)??1,d=((f=u==null?void 0:u.master_subjects)==null?void 0:f.subject_group)==="ACDMVOC",S=d?await pe(u.id).catch(()=>[]):[],L=(u?me(u,e,S.length?S:null,d):[]).filter(R=>R.ds===A),p=(($=L[o-1]??L[0]??null)==null?void 0:$.n)??null,q=g.map(R=>({class_id:Number(w),student_id:R.id,check_date:A,period_no:o,session_number:p,status:j[R.id]??"present"}));await Se(q),D(`บันทึกเช็คชื่อ ${q.length} คน สำเร็จ ✅`,"success")}catch(u){D("บันทึกไม่สำเร็จ: "+(u.message??""),"error")}finally{v.disabled=!1,v.textContent="💾 บันทึก"}})};window._attSetAll=i=>{g.forEach(h=>{j[h.id]=i}),I()},(M=document.getElementById("att-load-btn"))==null||M.addEventListener("click",async()=>{var P,w,A;const i=document.getElementById("att-class").value,h=document.getElementById("att-date").value;if(!i){D("กรุณาเลือกห้องเรียน","warning");return}const C=document.getElementById("att-load-btn");C.disabled=!0,C.textContent="กำลังโหลด...";try{const{data:o}=await(await de(async()=>{const{supabase:p}=await import("./supabase-BV-W2lsh.js").then(q=>q.a);return{supabase:p}},[])).supabase.from("class_students").select("student_id, students(id, student_code, full_name, image_url, main_room)").eq("class_id",i).order("students(student_code)");g=(o??[]).map(p=>p.students).filter(Boolean);const v=await We(Number(i),h),l=n.find(p=>String(p.id)===i),f=((P=l==null?void 0:l.master_subjects)==null?void 0:P.credit)??1,$=((w=l==null?void 0:l.master_subjects)==null?void 0:w.subject_group)==="ACDMVOC",u=$?await pe(l.id).catch(()=>[]):[],e=l?me(l,f,u.length?u:null,$):[],d=parseInt(document.getElementById("att-period").value)||1,S=e.filter(p=>p.ds===h),s=((A=S[d-1]??S[0]??null)==null?void 0:A.n)??null,L=s!==null?v.filter(p=>p.session_number===s):v;j={},g.forEach(p=>{j[p.id]="present"}),L.forEach(p=>{j[p.student_id]=p.status}),I()}catch(o){D("โหลดไม่สำเร็จ: "+(o.message??""),"error")}finally{C.disabled=!1,C.textContent="โหลดรายชื่อ"}})}async function Pt(t,r){ie("life-skill-score"),ce("บันทึกคะแนนทักษะชีวิต");const n=r.filter(M=>M.category==="สามัญ");if(!n.length){te(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🌱</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษาสามัญ</p>
      <p class="text-xs mt-1">ฟีเจอร์นี้สำหรับครูที่ปรึกษาชั้นสามัญเท่านั้น</p>
    </div>`);return}const y=await ye().catch(()=>({})),x=parseInt(y.academicYear??2568),g=parseInt(y.semester??1);let j=n[0].main_room;const I=async M=>{var q,R;j=M,te(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);const[i,h]=await Promise.all([st(x,g,"สามัญ").catch(()=>[]),Re(M).catch(()=>[])]);if(!i.length){te(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">🌱</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนทักษะชีวิต</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนทักษะชีวิต" ก่อนครับ</p>
      </div>`);return}const C=i.map(a=>a.id),P=await at(C).catch(()=>[]),w={};P.forEach(a=>{w[a.student_id]||(w[a.student_id]={}),w[a.student_id][a.column_id]=a.score});const A=i.reduce((a,_)=>a+(_.max_score??0),0),o="sticky left-0 z-10 bg-white border-r border-gray-100",v="sticky z-10 bg-white border-r border-gray-100",l="border border-gray-100 text-center text-xs px-2 py-2 font-medium";te(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">🌱 คะแนนทักษะชีวิต</h2>
        ${n.length>1?`
        <select id="ls-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${n.map(a=>`<option value="${a.main_room}" ${a.main_room===M?"selected":""}>${a.main_room}</option>`).join("")}
        </select>`:`<span class="text-sm font-semibold text-emerald-700">${M}</span>`}
        <button id="ls-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600">
          ซ่อนคะแนนรวม
        </button>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${g} / ${x}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 ใช้ <b>Tab / →</b> เลื่อนขวา · <b>Enter / ↓</b> เลื่อนลง · <b>↑ ↓ ← →</b> เลื่อนทิศทาง · บันทึกอัตโนมัติเมื่อออกจากช่อง
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${o} ${l} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${v} ${l} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${v} ${l} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${i.map(a=>`
              <th class="${l} bg-emerald-50 text-emerald-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${a.name}</div>
                <div class="text-[10px] font-normal text-emerald-600 mt-0.5">/${a.max_score}</div>
              </th>`).join("")}
              <th id="ls-total-th" class="${l} bg-indigo-50 text-indigo-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${A}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            ${h.map((a,_)=>{const k=w[a.id]??{},N=i.reduce((W,K)=>W+(parseFloat(k[K.id]??0)||0),0);return`<tr class="hover:bg-gray-50/50 ls-row" data-sid="${a.id}">
                <td class="${o} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${_+1}</td>
                <td class="${v} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${a.student_code}</td>
                <td class="${v} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${a.image_url?`<img src="${a.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`:`<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-emerald-200 to-teal-200
                                    flex items-center justify-center text-xs font-bold text-emerald-700 flex-shrink-0">
                           ${(a.full_name??"?").charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${a.full_name}</span>
                  </div>
                </td>
                ${i.map(W=>{const K=k[W.id]??"";return`<td class="border border-gray-100 p-0 ls-score-cell"
                    data-sid="${a.id}" data-cid="${W.id}" data-max="${W.max_score}">
                    <input type="number" min="0" max="${W.max_score}" step="0.5"
                      class="ls-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${K}" placeholder="—"
                      data-sid="${a.id}" data-cid="${W.id}" data-max="${W.max_score}" data-row="${_}" data-col="${i.findIndex(c=>c.id===W.id)}" />
                  </td>`}).join("")}
                <td class="border border-gray-100 text-center font-semibold text-indigo-700 ls-total" data-sid="${a.id}">
                  ${N>0?N.toFixed(1).replace(/\.0$/,""):"—"}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>`),(q=document.getElementById("ls-room-sel"))==null||q.addEventListener("change",a=>I(a.target.value));let f=!0;(R=document.getElementById("ls-toggle-total-btn"))==null||R.addEventListener("click",function(){f=!f;const a=f?"":"none",_=document.getElementById("ls-total-th");_&&(_.style.display=a),document.querySelectorAll(".ls-total").forEach(k=>k.style.display=a),this.textContent=f?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!f),this.classList.toggle("border-amber-300",!f),this.classList.toggle("text-amber-700",!f)});const $=[...document.querySelectorAll(".ls-input")],u=i.length,e=h.length,d=(a,_)=>$.find(k=>+k.dataset.row===a&&+k.dataset.col===_),S=(a,_)=>{a<0&&(a=0),a>=e&&(a=e-1),_<0&&(_=u-1),_>=u&&(_=0);const k=d(a,_);k==null||k.focus(),k==null||k.select()},s=(a,_)=>{const k=a.closest("td");if(!k)return;const N=_?"ring-2 ring-inset ring-emerald-400 bg-emerald-50":"ring-2 ring-inset ring-red-400 bg-red-50";k.classList.add(...N.split(" ")),setTimeout(()=>k.classList.remove(...N.split(" ")),1200)},L=a=>{const _=document.querySelector(`.ls-total[data-sid="${a}"]`);if(!_)return;const N=$.filter(W=>+W.dataset.sid==+a).reduce((W,K)=>W+(parseFloat(K.value)||0),0);_.textContent=N>0?N.toFixed(1).replace(/\.0$/,""):"—"},p=async a=>{const _=+a.dataset.sid,k=+a.dataset.cid,N=+a.dataset.max,W=a.value.trim(),K=W===""?null:parseFloat(W);if(K!==null&&(K<0||K>N)){s(a,!1);return}try{await dt(_,k,K,(t==null?void 0:t.id)??null),s(a,!0),L(_)}catch(c){console.error("[life skill save]",c),s(a,!1),D(`บันทึกทักษะชีวิตไม่สำเร็จ: ${c.message??""}`,"error")}};$.forEach(a=>{a.addEventListener("blur",()=>p(a)),a.addEventListener("keydown",_=>{const k=+a.dataset.row,N=+a.dataset.col;switch(_.key){case"Tab":_.preventDefault(),_.shiftKey?N>0?S(k,N-1):S(k-1,u-1):N<u-1?S(k,N+1):S(k+1,0);break;case"Enter":_.preventDefault(),p(a),k<e-1?S(k+1,N):S(0,N);break;case"ArrowDown":_.preventDefault(),S(k<e-1?k+1:0,N);break;case"ArrowUp":_.preventDefault(),S(k>0?k-1:e-1,N);break;case"ArrowRight":_.preventDefault(),N<u-1?S(k,N+1):S(k+1,0);break;case"ArrowLeft":_.preventDefault(),N>0?S(k,N-1):S(k-1,u-1);break;case"Home":_.preventDefault(),_.ctrlKey?S(0,0):S(k,0);break;case"End":_.preventDefault(),_.ctrlKey?S(e-1,u-1):S(k,u-1);break;case"Escape":a.blur();break}}),a.addEventListener("input",()=>{const _=+a.dataset.max,k=String(Math.floor(_)).length;if(a.value.replace(".","").replace("-","").length>=k&&!a.value.includes(".")){const W=+a.dataset.row,K=+a.dataset.col;p(a),setTimeout(()=>S(W,K+1),50)}})})};I(j)}async function Dt(t,r=null){ie("reading-score"),ce("บันทึกคะแนนอ่านคิดวิเคราะห์");const n=await ye().catch(()=>({})),y=parseInt(n.academicYear??2568),x=parseInt(n.semester??1);xt(n);const g=t?await fe(t.id).catch(()=>[]):[],j=[...new Set(g.map(i=>i.class_name).filter(Boolean))].sort();if(!j.length){te(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">📖</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">กรุณาลงทะเบียนห้องเรียนก่อนบันทึกคะแนน</p>
    </div>`);return}let I=r&&j.includes(r)?r:j[0];const M=async i=>{var W,K;I=i,te(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);let h,C;try{[h,C]=await Promise.all([ot(y,x),Re(i)])}catch(c){te(`<div class="max-w-lg mx-auto text-center py-16 text-red-500">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium">โหลดรายชื่อนักเรียนไม่สำเร็จ</p>
        <p class="text-xs mt-1 text-gray-400">กรุณาตรวจสอบอินเทอร์เน็ตแล้วเปิดหน้านี้อีกครั้ง</p>
      </div>`),D(`โหลดข้อมูลไม่สำเร็จ: ${(c==null?void 0:c.message)??""}`,"error");return}if(!h.length){te(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนอ่านคิดวิเคราะห์</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนอ่านคิดวิเคราะห์" ก่อนครับ</p>
      </div>`);return}const P=h.map(c=>c.id);let w;try{w=await lt(P,C.map(c=>c.id))}catch(c){te(`<div class="max-w-lg mx-auto text-center py-16 text-red-500">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium">โหลดคะแนนไม่สำเร็จ</p>
        <p class="text-xs mt-1 text-gray-400">ระบบจะไม่แสดงช่องว่างแทนคะแนน กรุณาตรวจสอบอินเทอร์เน็ตแล้วเปิดหน้านี้อีกครั้ง</p>
      </div>`),D(`โหลดคะแนนไม่สำเร็จ: ${(c==null?void 0:c.message)??""}`,"error");return}const A={};w.forEach(c=>{A[c.student_id]||(A[c.student_id]={}),A[c.student_id][c.column_id]=c.score});const o=h.reduce((c,m)=>c+(m.max_score??0),0),v="sticky left-0 z-10 bg-white border-r border-gray-100",l="sticky z-10 bg-white border-r border-gray-100",f="border border-gray-100 text-center text-xs px-2 py-2 font-medium";te(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-indigo-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">📖 คะแนนอ่านคิดวิเคราะห์และเขียน</h2>
        ${j.length>1?`
        <select id="rs-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${j.map(c=>`<option value="${c}" ${c===i?"selected":""}>${c}</option>`).join("")}
        </select>`:`<span class="text-sm font-semibold text-indigo-700">${i}</span>`}
        <button id="rs-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-600">
          ซ่อนคะแนนรวม
        </button>
        <span id="rs-save-status" class="text-xs text-gray-400" aria-live="polite">บันทึกอัตโนมัติ</span>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${x} / ${y}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 <b>Tab / →</b> ขวา · <b>Enter / ↓</b> ลง · <b>↑ ↓ ← →</b> เลื่อน · บันทึกอัตโนมัติ
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${v} ${f} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${l} ${f} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${l} ${f} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${h.map(c=>`
              <th class="${f} bg-indigo-50 text-indigo-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${c.name}</div>
                <div class="text-[10px] font-normal text-indigo-500 mt-0.5">/${c.max_score}</div>
              </th>`).join("")}
              <th id="rs-total-th" class="${f} bg-violet-50 text-violet-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${o}</span>
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
            ${C.map((c,m)=>{const b=A[c.id]??{},T=h.reduce((O,Q)=>O+(parseFloat(b[Q.id]??0)||0),0);return`<tr class="hover:bg-gray-50/50" data-sid="${c.id}">
                <td class="${v} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${m+1}</td>
                <td class="${l} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${c.student_code}</td>
                <td class="${l} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${c.image_url?`<img src="${c.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`:`<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-indigo-200 to-violet-200
                                    flex items-center justify-center text-xs font-bold text-indigo-700 flex-shrink-0">
                           ${(c.full_name??"?").charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${c.full_name}</span>
                  </div>
                </td>
                ${h.map(O=>{const Q=b[O.id]??"";return`<td class="border border-gray-100 p-0 rs-score-cell"
                    data-sid="${c.id}" data-cid="${O.id}" data-max="${O.max_score}">
                    <input type="number" min="0" max="${O.max_score}" step="0.5"
                      class="rs-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${Q}" placeholder="—"
                      data-sid="${c.id}" data-cid="${O.id}" data-max="${O.max_score}"
                      data-row="${m}" data-col="${h.findIndex(V=>V.id===O.id)}" />
                  </td>`}).join("")}
                <td class="border border-gray-100 text-center font-semibold text-violet-700 rs-total" data-sid="${c.id}">
                  ${T>0?T.toFixed(1).replace(/\.0$/,""):"—"}
                </td>
                <td class="border border-gray-100 text-center text-xs font-medium text-indigo-600 rs-score100" data-sid="${c.id}">
                  ${T>0?(T/2).toFixed(1).replace(/\.0$/,""):"—"}
                </td>
                <td class="border border-gray-100 text-center rs-label" data-sid="${c.id}">
                  ${T>0?Ie(T/2):"—"}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>`),(W=document.getElementById("rs-room-sel"))==null||W.addEventListener("change",c=>M(c.target.value));let $=!0;(K=document.getElementById("rs-toggle-total-btn"))==null||K.addEventListener("click",function(){$=!$;const c=$?"":"none";["rs-total-th","rs-score100-th","rs-label-th"].forEach(m=>{const b=document.getElementById(m);b&&(b.style.display=c)}),document.querySelectorAll(".rs-total,.rs-score100,.rs-label").forEach(m=>m.style.display=c),this.textContent=$?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!$),this.classList.toggle("border-amber-300",!$),this.classList.toggle("text-amber-700",!$)});const u=[...document.querySelectorAll(".rs-input")],e=h.length,d=C.length,S=(c,m)=>u.find(b=>+b.dataset.row===c&&+b.dataset.col===m),s=(c,m)=>{c<0&&(c=0),c>=d&&(c=d-1),m<0&&(m=e-1),m>=e&&(m=0);const b=S(c,m);b==null||b.focus(),b==null||b.select()},L=(c,m)=>{const b=c.closest("td");if(!b)return;const T=m?"ring-2 ring-inset ring-indigo-400 bg-indigo-50":"ring-2 ring-inset ring-red-400 bg-red-50";b.classList.add(...T.split(" ")),setTimeout(()=>b.classList.remove(...T.split(" ")),1200)},p=document.getElementById("rs-save-status");let q=null;const R=(c,m="text-gray-400",b=!1)=>{p&&(clearTimeout(q),p.className=`text-xs ${m}`,p.textContent=c,b&&(q=setTimeout(()=>{p.className="text-xs text-gray-400",p.textContent="บันทึกอัตโนมัติ"},2500)))},a=c=>{const m=document.querySelector(`.rs-total[data-sid="${c}"]`);if(!m)return;const b=document.querySelector(`.rs-score100[data-sid="${c}"]`),T=document.querySelector(`.rs-label[data-sid="${c}"]`),O=u.filter(Q=>+Q.dataset.sid==+c).reduce((Q,V)=>Q+(parseFloat(V.value)||0),0);m.textContent=O>0?O.toFixed(1).replace(/\.0$/,""):"—",b&&(b.textContent=O>0?(O/2).toFixed(1).replace(/\.0$/,""):"—"),T&&(T.innerHTML=O>0?Ie(O/2):"—")},_=new Map,k=c=>c.trim()===""?"null":String(parseFloat(c));u.forEach(c=>_.set(`${c.dataset.sid}:${c.dataset.cid}`,{chain:Promise.resolve(),requested:k(c.value),saved:k(c.value)}));const N=c=>{const m=+c.dataset.sid,b=+c.dataset.cid,T=+c.dataset.max,O=c.value.trim()===""?null:parseFloat(c.value);if(O!==null&&(!Number.isFinite(O)||O<0||O>T))return L(c,!1),R(`คะแนนต้องอยู่ระหว่าง 0-${T}`,"text-red-600 font-medium"),Promise.resolve(!1);const Q=`${m}:${b}`,V=O===null?"null":String(O),z=_.get(Q)??{chain:Promise.resolve(),requested:null,saved:null};if(_.set(Q,z),z.requested===V||z.saved===V&&z.requested===z.saved)return z.chain;z.requested=V;const E=c.value;return z.chain=z.chain.catch(()=>{}).then(async()=>{R("กำลังบันทึก...","text-indigo-500 font-medium");let B=null;for(let F=0;F<2;F++)try{await it(m,b,O,(t==null?void 0:t.id)??null),B=null;break}catch(H){B=H,F===0&&await new Promise(Y=>setTimeout(Y,500))}if(B)throw B;return z.saved=V,k(c.value)===k(E)&&(L(c,!0),a(m)),R("บันทึกแล้ว ✓","text-emerald-600 font-medium",!0),!0}).catch(B=>(z.requested===V&&(z.requested=null),L(c,!1),R("บันทึกไม่สำเร็จ — กรุณาลองอีกครั้ง","text-red-600 font-medium"),D(`บันทึกคะแนนไม่สำเร็จ: ${(B==null?void 0:B.message)??"กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่"}`,"error"),!1)),z.chain};u.forEach(c=>{c.addEventListener("blur",()=>N(c)),c.addEventListener("keydown",m=>{const b=+c.dataset.row,T=+c.dataset.col;switch(m.key){case"Tab":m.preventDefault(),m.shiftKey?T>0?s(b,T-1):s(b-1,e-1):T<e-1?s(b,T+1):s(b+1,0);break;case"Enter":m.preventDefault(),N(c),b<d-1?s(b+1,T):s(0,T);break;case"ArrowDown":m.preventDefault(),s(b<d-1?b+1:0,T);break;case"ArrowUp":m.preventDefault(),s(b>0?b-1:d-1,T);break;case"ArrowRight":m.preventDefault(),T<e-1?s(b,T+1):s(b+1,0);break;case"ArrowLeft":m.preventDefault(),T>0?s(b,T-1):s(b-1,e-1);break;case"Home":m.preventDefault(),m.ctrlKey?s(0,0):s(b,0);break;case"End":m.preventDefault(),m.ctrlKey?s(d-1,e-1):s(b,e-1);break;case"Escape":c.blur();break}}),c.addEventListener("input",()=>{const m=+c.dataset.max,b=String(Math.floor(m)).length;c.value.replace(/[^0-9]/g,"").length>=b&&!c.value.includes(".")&&(N(c),setTimeout(()=>s(+c.dataset.row,+c.dataset.col+1),50))})})};M(I)}const Ie=t=>{const r=ut(t);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${r.cls}">${r.label}</span>`},X={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}},Pe=["อา","จ","อ","พ","พฤ","ศ","ส"],_t=t=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[t]||"ไม่ระบุจุด",kt=t=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[t]||"bg-gray-50 text-gray-500 border-gray-100";function De(t=new Date){const r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),y=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${y}`}function St(t){if(!t)return"—";try{return new Date(t).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return"—"}}async function Ft(t,r=[],n=null){if(ie("prayer-score"),ce("ติดตามผลสแกนละหมาด"),window._cleanupPrayerRoomMonitor)try{window._cleanupPrayerRoomMonitor()}catch{}const y=r.filter(o=>o.category==="ศาสนา");if(!(t!=null&&t.id)||!y.length){te(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium text-gray-700">หน้านี้เปิดเฉพาะครูที่ปรึกษาชั้นศาสนา</p>
      <p class="text-xs mt-1">ไม่พบห้องที่ปรึกษาศาสนาที่ผูกกับบัญชีครูของคุณ</p>
    </div>`);return}const x=y.map(o=>o.main_room).filter(Boolean);let g=x.includes(n)?n:x[0],j=null,I=!1,M=0;window._cleanupPrayerRoomMonitor=()=>{j&&clearInterval(j),j=null};const i=()=>{var o,v,l,f;te(`
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
              ${x.map($=>`<option value="${J($)}" ${$===g?"selected":""}>${J($)}</option>`).join("")}
            </select>`:`<span class="px-3 py-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 text-xs font-extrabold">${J(g)}</span>`}
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
              <h3 class="font-bold text-gray-800 text-sm">รายการนักเรียนห้อง ${J(g)}</h3>
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
    `),(o=document.getElementById("prm-back"))==null||o.addEventListener("click",()=>{var $;return($=window._navTo)==null?void 0:$.call(window,"overview")}),(v=document.getElementById("prm-refresh"))==null||v.addEventListener("click",()=>A(g,{manual:!0})),(l=document.getElementById("prm-room-select"))==null||l.addEventListener("change",$=>{g=$.target.value,i(),A(g,{manual:!0})}),(f=document.getElementById("prm-search"))==null||f.addEventListener("input",()=>P(window._prmStudents||[],window._prmRecords||[]))},h=async o=>{const v=De(),{data:l,error:f}=await we.from("students").select("id, student_code, full_name, main_room, religion_room, image_url").eq("religion_room",o).eq("is_active",!0).order("student_code",{ascending:!0});if(f)throw f;const $=(l||[]).map(d=>d.id);if(!$.length)return{students:[],records:[]};const{data:u,error:e}=await we.from("prayer_records").select("id, student_id, status, check_date, location, input_method, scanned_by, scanner_name, same_room_flag, created_at").eq("check_date",v).in("student_id",$).not("location","is",null).order("created_at",{ascending:!1}).limit(300);if(e)throw e;return{students:l||[],records:u||[]}},C=o=>{const v=new Map;return o.forEach(l=>{v.has(l.student_id)||v.set(l.student_id,l)}),v},P=(o,v)=>{var e;const l=document.getElementById("prm-table-body");if(!l)return;const f=(((e=document.getElementById("prm-search"))==null?void 0:e.value)||"").trim().toLowerCase(),$=C(v),u=o.filter(d=>!f||[d.full_name,d.student_code,d.main_room,d.religion_room].some(S=>String(S||"").toLowerCase().includes(f)));if(!u.length){l.innerHTML='<tr><td colspan="7" class="py-12 text-center text-gray-400">ไม่พบข้อมูลนักเรียน</td></tr>';return}l.innerHTML=u.map((d,S)=>{const s=$.get(d.id),L=s?X[s.status]||X.pray:null,p=s?`<span class="inline-flex px-2.5 py-1 rounded-full ${L.bg} ${L.color}">${L.fullLabel}</span>`:'<span class="inline-flex px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 font-bold border border-gray-100">ยังไม่สแกน</span>',q=(s==null?void 0:s.input_method)==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-[10px] font-bold">กรอกรหัส</span>':"",R=s!=null&&s.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">ห้องเดียวกัน</span>':"";return`
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${S+1}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-3">
              ${d.image_url?`<img src="${J(d.image_url)}" class="w-7 h-9 rounded-lg object-cover object-top border border-gray-200 shadow-sm" />`:`<div class="w-7 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-gray-200">${J((d.full_name||"?").charAt(0))}</div>`}
              <div class="min-w-0">
                <p class="font-bold text-gray-800 truncate">${J(d.full_name||"—")}</p>
                <p class="text-[11px] text-gray-400 font-mono">รหัส ${J(d.student_code||"—")}</p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-center text-gray-500 font-bold">${J(d.main_room||"—")}</td>
          <td class="px-4 py-3 text-center">${p}<div class="flex flex-wrap justify-center gap-1">${q}${R}</div></td>
          <td class="px-4 py-3 text-center font-mono text-gray-600">${St(s==null?void 0:s.created_at)}</td>
          <td class="px-4 py-3 text-center">
            ${s!=null&&s.location?`<span class="px-2.5 py-1 rounded-full border text-[11px] font-bold ${kt(s.location)}">${J(_t(s.location))}</span>`:'<span class="text-gray-300">—</span>'}
          </td>
          <td class="px-4 py-3 text-gray-500">${J((s==null?void 0:s.scanner_name)||(s==null?void 0:s.scanned_by)||"—")}</td>
        </tr>
      `}).join("")},w=(o,v)=>{var d,S,s,L;const l=C(v),f=l.size,$=[...l.values()].filter(p=>p.status==="usor").length,u=Math.max(0,o.length-f);(d=document.getElementById("prm-total"))==null||d.replaceChildren(document.createTextNode(String(o.length))),(S=document.getElementById("prm-done"))==null||S.replaceChildren(document.createTextNode(String(f))),(s=document.getElementById("prm-usor"))==null||s.replaceChildren(document.createTextNode(String($))),(L=document.getElementById("prm-pending"))==null||L.replaceChildren(document.createTextNode(String(u)));const e=document.getElementById("prm-updated");e&&(e.textContent=`อัปเดตล่าสุด ${new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"})} น.`)};async function A(o,{manual:v=!1}={}){var l;if(!I){I=!0;try{const{students:f,records:$}=await h(o);window._prmStudents=f,window._prmRecords=$;const u=((l=$[0])==null?void 0:l.id)||0;!v&&M&&u>M&&D("มีรายการสแกนละหมาดใหม่","info"),M=Math.max(M,u),w(f,$),P(f,$)}catch(f){console.error("Prayer room monitor failed:",f),D("โหลดข้อมูล Monitor ไม่สำเร็จ: "+(f.message||""),"error");const $=document.getElementById("prm-table-body");$&&($.innerHTML='<tr><td colspan="7" class="py-12 text-center text-red-400">โหลดข้อมูลไม่สำเร็จ</td></tr>')}finally{I=!1}}}i(),await A(g,{manual:!0}),j=setInterval(()=>{document.visibilityState==="visible"&&A(g)},5e3)}function Et(t,r,n=0){const y=[],x=new Date(t),g=new Date(r),I=(x.getDay()-n+7)%7;I!==0&&x.setDate(x.getDate()-I);let M=new Date(x),i=1;for(;M<=g;){const h=[];for(let C=0;C<5;C++){const P=new Date(M);P.setDate(P.getDate()+C),P<=g&&h.push({date:new Date(P),ds:P.toISOString().slice(0,10),weekN:i})}h.length>0&&(y.push({n:i,days:h,label:`${re(h[0].date)}–${re(h[h.length-1].date)}`}),i++),M.setDate(M.getDate()+7)}return y}function Le(t,r){const n=r.reduce((x,g)=>{var j;return x+(((j=X[t[g.ds]])==null?void 0:j.score)??0)},0),y=r.length*2;return y>0?Math.min(10,Math.max(0,Math.round(n/y*100)/10)):0}async function zt(t,r){var M;ie("prayer-score"),ce("บันทึกคะแนนละหมาด");const y=((await ye().catch(()=>({}))).prayerScannerTeachers||"").split(/[\s,]+/).map(i=>i.trim()).filter(Boolean);let x=!1;if(t){let i=null;try{const{data:h}=await we.from("profiles").select("role").eq("id",t.profile_id).maybeSingle();i=h}catch{}x=y.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(i==null?void 0:i.role)==="admin"}if(!r.length){if(x){te(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
        <p class="text-5xl mb-4">🕌</p>
        <p class="font-medium text-gray-700">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
        <p class="text-sm text-gray-400 mt-2 mb-6">แต่คุณได้รับสิทธิ์ในการสแกนบันทึกเวลาละหมาดของนักเรียน</p>
        <button id="btn-open-scanner-direct" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold rounded-2xl shadow-lg transition flex items-center gap-2 mx-auto">
          ${Ee}
          <span>เปิดกล้องสแกน</span>
        </button>
      </div>`),(M=document.getElementById("btn-open-scanner-direct"))==null||M.addEventListener("click",async()=>{const{renderStudentPrayerScanner:i}=await de(async()=>{const{renderStudentPrayerScanner:h}=await import("./student-views-DJMSwDcA.js");return{renderStudentPrayerScanner:h}},__vite__mapDeps([2,3,4,1,5,0,6,7,8,9,10,11,12,13]));i(t)});return}te(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
    </div>`);return}const g=r.map(i=>i.main_room);let j=g[0];const I=async i=>{var k,N,W,K,c;j=i,te(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);const{getSystemConfig:h}=await de(async()=>{const{getSystemConfig:m}=await import("./api-1xsyVspL.js");return{getSystemConfig:m}},__vite__mapDeps([0,1])),C=await h().catch(()=>({})),P=C.academicYear??C.academic_year??new Date().getFullYear()+543,w=C.semester??1,A=C.semester_start,o=C.semester_end;if(!A||!o){te(`<div class="max-w-xl mx-auto text-center py-20">
        <p class="text-5xl mb-4">📅</p>
        <p class="font-semibold text-gray-700">ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน</p>
        <p class="text-sm text-gray-400 mt-2">แอดมินต้องระบุวันเริ่ม-สิ้นสุดภาคเรียนในหน้าตั้งค่าระบบ</p>
      </div>`);return}const[v,l]=await Promise.all([nt(i),rt(t.id,i,A,o)]),f=Et(A,o),$=f.flatMap(m=>m.days),u=$.length,e={};for(const m of l)e[m.student_id]||(e[m.student_id]={}),e[m.student_id][m.check_date]=m.status;const d=32,S=160,s="border border-gray-200 text-center text-xs select-none",L="sticky left-0 z-20 bg-white border border-gray-200",p="sticky z-20 bg-white border border-gray-200",q=m=>m>=8?"text-emerald-600":m>=6?"text-amber-500":"text-red-600";te(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <!-- Top bar -->
      <div class="flex items-center gap-2 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0 flex-wrap">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h2>
          <p class="text-xs text-gray-400">${i} · ${f.length} สัปดาห์ · ${u} วัน</p>
        </div>
        ${g.length>1?`<select id="prayer-room-sel" class="text-xs border border-gray-200 rounded-xl px-2 py-1.5 bg-white">
          ${g.map(m=>`<option value="${m}" ${m===i?"selected":""}>${m}</option>`).join("")}</select>`:""}
        <div class="flex gap-1 text-xs hidden sm:flex">
          ${Object.entries(X).map(([,m])=>`<span class="px-1.5 py-1 ${m.bg} ${m.color} rounded">${m.label}=${m.fullLabel.slice(0,3)}</span>`).join("")}
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
          ${ge}
          <span>สแกนละหมาด</span>
        </button>
        `:""}
      </div>
      <div id="prayer-saving" class="hidden fixed top-16 right-4 z-50 bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
      <!-- Grid -->
      <div class="flex-1 overflow-auto" id="prayer-grid-wrap">
        ${v.length?`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <!-- Row 1: สัปดาห์ (colspan 5, clickable) -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${L} bg-gray-50" style="width:28px">#</th>
              <th class="${p} bg-gray-50" style="left:28px;width:64px">รหัส</th>
              <th class="${p} bg-gray-50 text-left px-2" style="left:92px;min-width:${S}px">ชื่อ-นามสกุล</th>
              ${f.map(m=>`
                <th colspan="${m.days.length}" class="${s} bg-emerald-600 text-white font-semibold
                  cursor-pointer hover:bg-emerald-700 prayer-wk-th"
                  data-week="${m.n}" title="${m.label}">
                  Week${m.n}
                </th>`).join("")}
              <th class="${s} bg-indigo-50 text-indigo-700 font-semibold prayer-score-th" style="min-width:52px">คะแนน<br/>/10</th>
            </tr>
            <!-- Row 2: วันที่รายวัน -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${L} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${p} bg-gray-100 text-gray-500" style="left:28px;width:64px">รหัส</th>
              <th class="${p} bg-gray-100 text-gray-500 text-left px-2" style="left:92px;min-width:${S}px">ชื่อ-นามสกุล</th>
              ${f.map(m=>m.days.map(b=>`
                <th class="${s} bg-gray-100 text-gray-400 font-normal"
                  style="width:${d}px;min-width:${d}px;font-size:9px">
                  ${Pe[b.date.getDay()]}<br/>${re(b.date)}
                </th>`).join("")).join("")}
              <th class="${s} bg-indigo-50 prayer-score-th" style="min-width:52px"></th>
            </tr>
          </thead>
          <tbody>
            ${v.map((m,b)=>{const T=e[m.id]??{},O=$.reduce((V,z)=>{var E;return V+(((E=X[T[z.ds]])==null?void 0:E.score)??0)},0),Q=u>0?Math.max(0,Math.round(O/(u*2)*100)/10):0;return`<tr class="hover:bg-gray-50" data-sid="${m.id}">
                <td class="${L} text-center text-gray-400" style="width:28px">${b+1}</td>
                <td class="${p} text-center font-mono text-gray-600" style="left:28px;width:64px">${m.student_code}</td>
                <td class="${p} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:92px;min-width:${S}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${m.image_url?`<img src="${m.image_url}" class="w-6 h-6 object-cover rounded flex-shrink-0"/>`:'<div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[100px]">${m.full_name}</span>
                  </div>
                </td>
                ${f.map(V=>V.days.map(z=>{const E=T[z.ds]??null,B=E?X[E]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    prayer-cell hover:bg-gray-100 ${B?B.bg:""}"
                    data-sid="${m.id}" data-date="${z.ds}"
                    style="width:${d}px;min-width:${d}px;height:28px">
                    ${B?`<span class="${B.color} text-xs">${B.label}</span>`:""}
                  </td>`}).join("")).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${q(Q)} prayer-score-cell"
                  id="score-${m.id}" style="min-width:52px;font-size:11px">${Q}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`:`<div class="p-16 text-center text-gray-400"><p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียนในห้อง ${i}</p></div>`}
      </div>
    </div>`);const R=document.getElementById("prayer-grid-wrap");if(!R)return;(k=document.getElementById("prayer-room-sel"))==null||k.addEventListener("change",m=>I(m.target.value)),(N=document.getElementById("btn-prayer-stats"))==null||N.addEventListener("click",()=>Ct(t,i,v,f,e,$,P,w)),(W=document.getElementById("btn-prayer-room-monitor"))==null||W.addEventListener("click",()=>{var m;(m=window._openReligionPrayerMonitor)==null||m.call(window,i)}),x&&((K=document.getElementById("btn-prayer-scanner"))==null||K.addEventListener("click",async()=>{const{renderStudentPrayerScanner:m}=await de(async()=>{const{renderStudentPrayerScanner:b}=await import("./student-views-DJMSwDcA.js");return{renderStudentPrayerScanner:b}},__vite__mapDeps([2,3,4,1,5,0,6,7,8,9,10,11,12,13]));m(t)}));let a=!0;(c=document.getElementById("prayer-toggle-total-btn"))==null||c.addEventListener("click",function(){a=!a;const m=a?"":"none";document.querySelectorAll(".prayer-score-th,.prayer-score-cell").forEach(b=>b.style.display=m),this.textContent=a?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!a),this.classList.toggle("border-amber-300",!a),this.classList.toggle("text-amber-700",!a)}),R.addEventListener("click",m=>{var E;const b=m.target.closest(".student-name-cell");if(!b)return;const T=parseInt((E=b.closest("[data-sid]"))==null?void 0:E.dataset.sid),O=v.find(B=>B.id===T);if(!O)return;const Q=e[T]??{},V={pray:0,absent:0,usor:0,followed:0,avoid:0,noRecord:0};for(const B of $){const F=Q[B.ds]??null;F&&V[F]!==void 0?V[F]++:V.noRecord++}const z=Le(Q,$);Fe({student:O,no:v.indexOf(O)+1,...V,score:z},f,e,$,q)});const _=m=>{const b=e[m]??{},T=$.reduce((V,z)=>{var E;return V+(((E=X[b[z.ds]])==null?void 0:E.score)??0)},0),O=u>0?Math.max(0,Math.round(T/(u*2)*100)/10):0,Q=document.getElementById(`score-${m}`);Q&&(Q.textContent=O,Q.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${q(O)}`)};R.addEventListener("click",m=>{const b=m.target.closest(".prayer-cell");if(!b)return;const T=parseInt(b.dataset.sid),O=b.dataset.date,Q=$.find(V=>V.ds===O);xe(m,V=>{e[T]||(e[T]={}),e[T][O]=V;const z=V?X[V]:null;Object.values(X).forEach(E=>b.classList.remove(E.bg)),z&&b.classList.add(z.bg),b.innerHTML=z?`<span class="${z.color} text-xs">${z.label}</span>`:"",_(T),Oe(t.id,T,i,O,V,(Q==null?void 0:Q.weekN)??null,t.full_name||"คุณครู").then(()=>{b.style.outline="2px solid #059669",b.style.outlineOffset="1px",setTimeout(()=>{b.style.outline="",b.style.outlineOffset=""},700)}).catch(()=>{b.style.outline="2px solid #ef4444",b.style.outlineOffset="1px",setTimeout(()=>{b.style.outline="",b.style.outlineOffset=""},700)})})}),R.addEventListener("click",m=>{const b=m.target.closest(".prayer-wk-th");if(!b)return;const T=parseInt(b.dataset.week),O=f.find(Q=>Q.n===T);O&&Lt(t,v,e,O,i,$,u,_)})};I(j)}function xe(t,r){var g;(g=document.getElementById("prayer-picker"))==null||g.remove();const n=document.createElement("div");n.id="prayer-picker",n.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const y=(t.target.closest("td,th,button")??t.target).getBoundingClientRect();n.style.top=Math.min(y.bottom+4,window.innerHeight-60)+"px",n.style.left=Math.max(4,Math.min(y.left,window.innerWidth-220))+"px";const x=document.createElement("button");x.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",x.textContent="✕",x.title="ล้างค่า",x.onclick=()=>{n.remove(),r(null)},n.appendChild(x),Object.entries(X).forEach(([j,I])=>{const M=document.createElement("button");M.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${I.bg} ${I.color} hover:opacity-80 transition`,M.textContent=I.label,M.title=I.fullLabel,M.onclick=()=>{n.remove(),r(j)},n.appendChild(M)}),document.body.appendChild(n),setTimeout(()=>document.addEventListener("click",()=>n.remove(),{once:!0}),50)}function Lt(t,r,n,y,x,g,j,I,M){var u;(u=document.getElementById("prayer-week-modal"))==null||u.remove();const i=y.days,h={};r.forEach(e=>{h[e.id]={},i.forEach(d=>{var S;h[e.id][d.ds]=((S=n[e.id])==null?void 0:S[d.ds])??null})});const C=e=>{const d=e?X[e]:null;return d?`${d.bg} ${d.color} font-bold`:"text-gray-300"},P=e=>e?X[e].label:"·",w=document.createElement("div");w.id="prayer-week-modal",w.className="fixed inset-0 z-[80] flex flex-col bg-white",w.innerHTML=`
    <div class="flex items-center gap-2 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="pw-close" class="text-white/70 hover:text-white text-xl leading-none">✕</button>
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${y.n}</h3>
        <p class="text-xs text-emerald-200">${y.label} · ${x}</p>
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
                <div class="font-semibold text-gray-700">${Pe[e.date.getDay()]} ${re(e.date)}</div>
                <button class="pw-day-all mt-1 text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100"
                  data-ds="${e.ds}">AllDay</button>
              </th>`).join("")}
            <th class="px-2 py-2 text-center text-gray-500 font-medium" style="min-width:60px">ทั้งสัปดาห์</th>
          </tr>
        </thead>
        <tbody id="pw-body">
          ${r.map((e,d)=>`
            <tr class="border-b hover:bg-gray-50" data-pw-sid="${e.id}">
              <td class="px-3 py-2">
                <div class="flex items-center gap-2">
                  ${e.image_url?`<img src="${e.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
                  <span class="truncate max-w-[130px] text-gray-800">${e.full_name}</span>
                </div>
              </td>
              ${i.map(S=>{var s,L;return`
                <td class="px-1 py-2 text-center">
                  <button class="pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80
                    ${C((s=h[e.id])==null?void 0:s[S.ds])}"
                    data-pw-sid="${e.id}" data-ds="${S.ds}">
                    ${P((L=h[e.id])==null?void 0:L[S.ds])}
                  </button>
                </td>`}).join("")}
              <td class="px-2 py-2 text-center">
                <button class="pw-row-all text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                  data-pw-sid="${e.id}">ตั้งครบ ▾</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(w);const A=(e,d=!0)=>{e&&(e.style.outline=`2px solid ${d?"#059669":"#ef4444"}`,e.style.outlineOffset="1px",setTimeout(()=>{e.style.outline="",e.style.outlineOffset=""},700))};let o=0,v=0;const l=async(e,d,S)=>{var R,a;const s=((R=h[e])==null?void 0:R[d])??null,L=((a=n[e])==null?void 0:a[d])??null;h[e][d]=S,n[e]={...n[e]??{},[d]:S};const p=w.querySelector(`.pw-cell[data-pw-sid="${e}"][data-ds="${d}"]`);p&&(p.className=`pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${C(S)}`,p.textContent=P(S));const q=document.querySelector(`.prayer-cell[data-sid="${e}"][data-date="${d}"]`);if(q){const _=S?X[S]:null;Object.values(X).forEach(k=>q.classList.remove(k.bg)),_&&q.classList.add(_.bg),q.innerHTML=_?`<span class="${_.color} text-xs">${_.label}</span>`:""}I(e);try{await Oe(t.id,e,x,d,S,y.n,t.full_name||"คุณครู"),A(p,!0),A(q,!0)}catch(_){if(console.error("prayer save:",_),h[e][d]=s,n[e]||(n[e]={}),L===null?delete n[e][d]:n[e][d]=L,p&&(p.className=`pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${C(s)}`,p.textContent=P(s)),q){const k=s?X[s]:null;Object.values(X).forEach(N=>q.classList.remove(N.bg)),k&&q.classList.add(k.bg),q.innerHTML=k?`<span class="${k.color} text-xs">${k.label}</span>`:""}throw I(e),A(p,!1),A(q,!1),_}},f=async e=>{let S=0;o+=e.length;for(let s=0;s<e.length;s+=10){const L=e.slice(s,s+10),p=await Promise.allSettled(L.map(([q,R,a])=>l(q,R,a)));S+=p.filter(q=>q.status==="rejected").length}v+=S,S>0&&D(`บันทึกไม่สำเร็จ ${S}/${e.length} รายการ — กรุณาลองใหม่`,"error")};w.addEventListener("click",e=>{const d=e.target.closest(".pw-cell");if(!d)return;e.stopPropagation();const S=parseInt(d.dataset.pwSid),s=d.dataset.ds;xe(e,L=>l(S,s,L))}),w.addEventListener("click",e=>{const d=e.target.closest(".pw-day-all");if(!d)return;e.stopPropagation();const S=d.dataset.ds;xe(e,s=>f(r.map(L=>[L.id,S,s])))}),w.addEventListener("click",e=>{const d=e.target.closest(".pw-row-all");if(!d)return;e.stopPropagation();const S=parseInt(d.dataset.pwSid);xe(e,s=>f(i.map(L=>[S,L.ds,s])))}),w.querySelector("#pw-set-all").addEventListener("click",e=>{e.stopPropagation(),xe(e,d=>f(r.flatMap(S=>i.map(s=>[S.id,s.ds,d]))))});const $=()=>{w.remove(),o>0&&v>0?D(`สัปดาห์ที่ ${y.n}: สำเร็จ ${o-v} / ไม่สำเร็จ ${v} รายการ ⚠️`,"warning"):o>0&&D(`สัปดาห์ที่ ${y.n} บันทึกเรียบร้อย ✅`,"success")};w.querySelector("#pw-close").addEventListener("click",$),w.querySelector("#pw-save").addEventListener("click",$),w.addEventListener("click",e=>{e.target===w&&$()})}function Ct(t,r,n,y,x,g,j,I){var A;(A=document.getElementById("prayer-stats-modal"))==null||A.remove();const M=o=>o>=8?"text-emerald-600":o>=6?"text-amber-500":"text-red-600",i=n.map((o,v)=>{const l=x[o.id]??{},f={pray:0,absent:0,usor:0,followed:0,avoid:0,noRecord:0};for(const u of g){const e=l[u.ds]??null;e&&f[e]!==void 0?f[e]++:f.noRecord++}const $=Le(l,g);return{student:o,no:v+1,...f,score:$}}),h=i.length?(i.reduce((o,v)=>o+v.score,0)/i.length).toFixed(1):"0.0",C=document.createElement("div");C.id="prayer-stats-modal",C.className="fixed inset-0 z-[80] bg-white flex flex-col",C.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="prayer-stats-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex-1">
        <h2 class="font-bold">📊 สถิติคะแนนละหมาด</h2>
        <p class="text-xs text-emerald-200">${r} · ปีการศึกษา ${j} ภาค ${I} · ${g.length} วัน</p>
      </div>
      <span class="px-3 py-1.5 bg-white/20 rounded-lg text-sm font-semibold">เฉลี่ย ${h}/10</span>
    </div>
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[["sem","รายภาคเรียน"],["week","รายสัปดาห์"]].map(([o,v],l)=>`
        <button class="pr-stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${l===0?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500"}"
          data-tab="${o}">${v}</button>`).join("")}
    </div>
    <div class="flex-1 overflow-auto" id="prayer-stats-content"></div>`,document.body.appendChild(C);const P=()=>{var v;const o=[...i].sort((l,f)=>l.score-f.score);document.getElementById("prayer-stats-content").innerHTML=`
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${Object.entries(X).map(([l,f])=>`
          <div class="${f.bg} rounded-xl p-3 text-center">
            <p class="text-2xl font-bold ${f.color}">${i.reduce(($,u)=>$+u[l],0)}</p>
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
                ${Object.entries(X).map(([,l])=>`<th class="px-2 py-3 text-center ${l.color}">${l.label}</th>`).join("")}
                <th class="px-3 py-3 text-center font-semibold text-indigo-700">คะแนน/10</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="pst-tbody">
              ${o.map(l=>`
                <tr class="hover:bg-emerald-50 cursor-pointer transition" data-st-sid="${l.student.id}">
                  <td class="px-3 py-2 text-gray-400 text-xs">${l.no}</td>
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${l.student.image_url?`<img src="${l.student.image_url}" class="w-6 h-6 rounded object-cover"/>`:"<span>👤</span>"}
                      <span class="truncate max-w-[130px] text-xs font-medium">${l.student.full_name}</span>
                    </div>
                  </td>
                  ${Object.keys(X).map(f=>`<td class="px-2 py-2 text-center text-xs font-medium">${l[f]||"—"}</td>`).join("")}
                  <td class="px-3 py-2 text-center font-bold ${M(l.score)}">${l.score}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`,(v=document.getElementById("pst-tbody"))==null||v.addEventListener("click",l=>{const f=l.target.closest("[data-st-sid]");if(!f)return;const $=parseInt(f.dataset.stSid),u=i.find(e=>e.student.id===$);u&&Fe(u,y,x,g,M)})},w=()=>{document.getElementById("prayer-stats-content").innerHTML=`
      <div class="p-4 space-y-4">
        ${y.map((o,v)=>{var u;const l={pray:0,absent:0,usor:0,followed:0,avoid:0};for(const e of o.days)for(const d of n){const S=((u=x[d.id])==null?void 0:u[e.ds])??null;S&&l[S]!==void 0&&l[S]++}const f=n.length*o.days.length,$=f>0?((l.pray+l.followed+l.usor)/f*100).toFixed(0):"0";return`
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
              <div class="flex justify-between mb-2">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${o.n}</p>
                  <p class="text-xs text-gray-400">${o.label} · ${o.days.length} วัน</p>
                </div>
                <span class="font-bold text-lg ${M(parseInt($)/10)}">${$}%</span>
              </div>
              <div class="flex gap-1 h-5 rounded-lg overflow-hidden">
                ${Object.entries(l).filter(([,e])=>e>0).map(([e,d])=>`<div class="${X[e].bg}" style="flex:${d}"></div>`).join("")}
              </div>
              <div class="flex gap-3 mt-2 text-xs flex-wrap">
                ${Object.entries(X).map(([e,d])=>`<span class="${d.color}">${d.label} ${l[e]||0}</span>`).join("")}
              </div>
            </div>`}).join("")}
      </div>`};P(),C.querySelectorAll(".pr-stats-tab").forEach(o=>{o.addEventListener("click",()=>{C.querySelectorAll(".pr-stats-tab").forEach(v=>{v.classList.replace("border-emerald-600","border-transparent"),v.classList.replace("text-emerald-700","text-gray-500")}),o.classList.replace("border-transparent","border-emerald-600"),o.classList.replace("text-gray-500","text-emerald-700"),o.dataset.tab==="sem"?P():w()})}),C.querySelector("#prayer-stats-close").addEventListener("click",()=>C.remove())}function jt(t,r,n,y,x,g){var v;(v=document.getElementById("student-att-detail"))==null||v.remove();const j=g.master_subjects,I=y[t.id]??{},M=n.filter(l=>!x.has(l.ds)),i={present:0,absent:0,late:0,excused:0,sick:0,noRecord:0};for(const l of M){const f=I[l.n]??null;f&&i[f]!==void 0?i[f]++:i.noRecord++}const h=i.present+i.late,C=M.length>0?(h/M.length*100).toFixed(1):"0.0",P=l=>parseFloat(l)>=80?"text-emerald-600":parseFloat(l)>=60?"text-amber-500":"text-red-600",w={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},A={present:"text-emerald-600 bg-emerald-50",absent:"text-red-600 bg-red-50",late:"text-amber-500 bg-amber-50",excused:"text-blue-500 bg-blue-50",sick:"text-orange-500 bg-orange-50"},o=document.createElement("div");o.id="student-att-detail",o.className="fixed inset-0 z-[80] bg-white flex flex-col",o.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-700 text-white flex-shrink-0">
      <button id="sad-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${t.image_url?`<img src="${t.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>'}
        <div class="min-w-0">
          <p class="font-bold truncate">${t.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${t.student_code} · ${(j==null?void 0:j.subject_name)??g.class_name}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${P(C)}">${C}%</p>
        <p class="text-xs text-emerald-200">เข้าเรียน</p>
      </div>
    </div>
    <!-- Summary -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(w).map(([l,f])=>`<span class="px-3 py-1.5 rounded-xl text-sm font-medium ${A[l]}">
          ${f} ${i[l]||0}
        </span>`).join("")}
      <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-xl text-sm">ไม่บันทึก ${i.noRecord||0}</span>
      <span class="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-medium">รวม ${M.length} คาบ</span>
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
          ${M.map(l=>{const f=I[l.n]??null,$=f?w[f]??f:"—",u=f?A[f]:"text-gray-300";return`<tr class="hover:bg-gray-50">
              <td class="px-3 py-2 text-gray-500">${l.n}</td>
              <td class="px-3 py-2 font-mono text-gray-700">${re(l.date)}</td>
              <td class="px-3 py-2 text-center">
                <span class="px-2 py-0.5 rounded-lg text-xs font-medium ${u}">${$}</span>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(o),o.querySelector("#sad-close").addEventListener("click",()=>o.remove())}function Fe(t,r,n,y,x){var M;(M=document.getElementById("student-detail-modal"))==null||M.remove();const g=t.student,j=n[g.id]??{},I=document.createElement("div");I.id="student-detail-modal",I.className="fixed inset-0 z-[80] bg-white flex flex-col",I.innerHTML=`
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-800 text-white flex-shrink-0">
      <button id="std-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${g.image_url?`<img src="${g.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>'}
        <div class="min-w-0">
          <p class="font-bold truncate">${g.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${g.student_code}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${x(t.score)}">${t.score}</p>
        <p class="text-xs text-emerald-200">คะแนน/10</p>
      </div>
    </div>
    <!-- Summary badges -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(X).map(([i,h])=>`<span class="px-3 py-1.5 ${h.bg} ${h.color} rounded-xl text-sm font-medium">
          ${h.label} ${t[i]||0}
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
            ${Object.entries(X).map(([,i])=>`<th class="px-2 py-2 text-center ${i.color}">${i.label}</th>`).join("")}
            <th class="px-2 py-2 text-center text-indigo-600 font-semibold">คะแนน</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${r.map(i=>{const h={pray:0,absent:0,usor:0,followed:0,avoid:0};for(const w of i.days){const A=j[w.ds]??null;A&&h[A]!==void 0&&h[A]++}const C=i.days.map(w=>({...w})),P=Le(j,C);return`
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-center font-medium text-gray-700">Week${i.n}</td>
                <td class="px-3 py-2 text-center text-gray-400">${i.label}</td>
                ${Object.keys(X).map(w=>`<td class="px-2 py-2 text-center font-medium">${h[w]||"—"}</td>`).join("")}
                <td class="px-2 py-2 text-center font-bold ${x(P)}">${P}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(I),I.querySelector("#std-close").addEventListener("click",()=>I.remove())}function Tt(t,r){var h;const n=(h=window._pp5SystemCfg)==null?void 0:h.freeAttendanceScanLimit;let y=2;if(n!==void 0&&n!==""){const C=parseInt(n,10);Number.isFinite(C)&&(y=C)}if(r)return{allowed:!0,count:0,limit:y};const x=new Date,g=x.getDay(),j=x.getDate()-g+(g===0?-6:1),I=new Date(x.setDate(j)).toISOString().slice(0,10),M=`pp5_att_scans_week_${t}`;let i={weekMonday:I,count:0};try{const C=localStorage.getItem(M);if(C){const P=JSON.parse(C);P.weekMonday===I&&(i=P)}}catch{}return{allowed:i.count<y,count:i.count,weekMonday:I,limit:y}}function It(t,r){const n=`pp5_att_scans_week_${t}`;let y=0;try{const x=localStorage.getItem(n);if(x){const g=JSON.parse(x);g.weekMonday===r&&(y=g.count)}}catch{}localStorage.setItem(n,JSON.stringify({weekMonday:r,count:y+1}))}function $e(t,r,n){if(n)return{allowed:!0,claimedRoom:null};let y=null;try{y=localStorage.getItem(`pp5_studentcare_room_${t}`)}catch{}return!y||y===r?{allowed:!0,claimedRoom:y}:{allowed:!1,claimedRoom:y}}function _e(t,r){try{localStorage.setItem(`pp5_studentcare_room_${t}`,r)}catch{}}function ke(t,r){var y;(y=document.getElementById("stc-room-paywall"))==null||y.remove();const n=document.createElement("div");n.id="stc-room-paywall",n.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",n.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="stc-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์เชื่อมข้อมูลกับระบบดูแลใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${J(t)}</b> ไว้แล้ว
        ${r?`<br><br>ต้องการใช้กับห้อง <b>${J(r)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ
      </p>
      <button id="stc-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(n),n.querySelector("#stc-pw-close").addEventListener("click",()=>n.remove()),n.querySelector("#stc-pw-donate").addEventListener("click",()=>{var x;n.remove(),(x=document.getElementById("btn-donate-float"))==null||x.click()})}function qe(t="success"){try{const r=new(window.AudioContext||window.webkitAudioContext),n=r.createOscillator(),y=r.createGain();n.connect(y),y.connect(r.destination),t==="success"?(n.type="sine",n.frequency.setValueAtTime(880,r.currentTime),y.gain.setValueAtTime(.08,r.currentTime),y.gain.exponentialRampToValueAtTime(.01,r.currentTime+.12),n.start(),n.stop(r.currentTime+.12)):(n.type="sawtooth",n.frequency.setValueAtTime(150,r.currentTime),y.gain.setValueAtTime(.12,r.currentTime),y.gain.exponentialRampToValueAtTime(.01,r.currentTime+.3),n.start(),n.stop(r.currentTime+.3))}catch{}}async function qt(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((t,r)=>{const n=document.createElement("script");n.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",n.onload=()=>t(window.Html5Qrcode),n.onerror=y=>r(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(n)})}export{ft as _openAttendanceModalForSession,mt as _openLeaveQuotaModal,bt as _openLeaveRequestModal,Nt as openAttendanceScanSetup,Ht as renderAttendance,oe as renderAttendanceGrid,Pt as renderLifeSkillScore,Ft as renderPrayerRoomMonitor,zt as renderPrayerScore,Dt as renderReadingScore};
