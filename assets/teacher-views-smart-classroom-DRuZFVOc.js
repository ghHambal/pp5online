const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-BCUq-GTX.js","assets/ui-ByLHWuG5.js","assets/quiz-api-BIDUVPR5.js","assets/supabase-BV-W2lsh.js","assets/import-BeVIEaS6.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-utils-BqsVDKnm.js","assets/katex-loader-DUJObfzT.js","assets/chat-classroom-CFr0Qc3b.js","assets/api-CQwFwlFA.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/student-api-BQ1kZS0c.js","assets/assignment-annotations-api-Y9qfMpYa.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/assignment-image-editor-BwgWPbTp.js"])))=>i.map(i=>d[i]);
import{a as x,g as N,o as Bn,_ as wt}from"./ui-ByLHWuG5.js";import{getSystemConfig as Fs,getMyClasses as Qe,getMySchedule as Os,getClassScheduleLinks as Rs,getPeriods as Qs,setSmartClassroomFreeClass as Gs,getClassStudents as zn,getActiveLeavePermissionsForClass as Nn,getLeaveMaxActiveForClass as Dn,getLeaveMaxPerStudentWeekForClass as Pn,getScoreColumns as Hn,getStudentScores as Fn,getClassAttendanceAllFull as On,getClassLeaveHistory as Rn,getClassAssignmentsWithSubmissions as Qn,getTeacherExamRequests as Gn,getClassAnnouncements as Un,getAnnouncementTypeSuggestions as Wn,getCourseSyllabus as Vn,getLessonPlans as ws,getClassSessionDOWs as ks,closeLeavePermission as kt,createAnnouncement as Yn,deleteAssignment as _s,updateAssignment as Xn,createAssignment as Jn,getMyDonationRequests as Zn,saveStudentScore as Kn,saveAttendanceCell as er,deleteSyllabusItem as $s,updateLessonPlan as Ss,deleteLessonPlan as Es,markAssignmentSubmissionReviewed as tr,saveAssignmentFeedback as sr,rejectAssignmentSubmission as nr,saveAssignmentGrade as rr,updateSyllabusItem as ar,createSyllabusItem as or,createLessonPlan as lr}from"./api-CQwFwlFA.js";import{_ as at,a as Us,b as ir}from"./donation-utils-DtZioNqn.js";import{l as dr,m as Ls,s as cr,n as ur,o as pr,f as mr,k as br,c as xr,p as gr}from"./quiz-api-BIDUVPR5.js";import{openScoreScanner as fr}from"./score-qr-scanner-CxdMU7pu.js";import{_openAttendanceModalForSession as qs,_openLeaveRequestModal as js,_openLeaveQuotaModal as yr,openAttendanceScanSetup as vr,renderAttendanceGrid as hr}from"./teacher-views-attendance-B3O41sgB.js";import{p as wr,a as kr}from"./teacher-views-grades-lvpbRKMs.js";import{openQuizMonitor as Is}from"./teacher-views-quiz-monitor-LV7NoA-J.js";import{openQuizAnalytics as _r}from"./teacher-views-quiz-analytics-D_ldJP_V.js";import{openClassDashboard as $r}from"./teacher-views-dashboard-BajxuBUs.js";import{e as Re,o as Sr,_ as Er,j as Lr}from"./teacher-views-classes-BCO3d0aE.js";import{uploadAssignmentFile as Cs}from"./storage-CuUjCgvI.js";import{_htmlEsc as c,setActiveNav as Ms,setTitle as Ts,setContent as nt,_currentWeek as qr,ATT_STATUS as rt,_generateSessions as As,_dateInputValue as Bs,openFullScreenGridOverlay as jr}from"./teacher-views-utils-BqsVDKnm.js";import{s as Ir}from"./supabase-BV-W2lsh.js";import{b as Cr,e as zs}from"./score-display-CQ4dUIPx.js";import{openLessonPlanAIWorkspace as Ns,openLessonPlanDocument as Mr}from"./lesson-plan-ai-workspace-DxaTZ5Zg.js";import{openLessonPlanArchiveCenter as Tr}from"./lesson-plan-archive-YVJH6is5.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./leave-time-CrS9gT63.js";import"./regrade-api-CLR_bWyN.js";import"./browser-JP79f-a9.js";import"./sync-DReifb_L.js";import"./pp5-doc-xUDxxK8y.js";import"./print-overlay-BVfxEd6n.js";import"./ai-prompt-gate-D6R7FVed.js";import"./confetti-loader-BAN5Lv-C.js";import"./council-api-Dh8lgCs9.js";function Ar(m){var b;return((b=String((m==null?void 0:m.donationSpecialFeatures)??"").split(`
`).map(E=>{const O=E.split("|");return{text:O[1]??"",minTier:parseInt(O[2])||1}}).find(E=>E.text.includes("Smart Classroom")))==null?void 0:b.minTier)??4}async function Ws(m){const b=await Fs().catch(()=>window._pp5SystemCfg??{}),E=Ar(b);let O=window._pp5DonorTierIndex??0,K=[];if(m!=null&&m.id)try{K=await Zn(m.id);const R=K.filter(D=>D.package_type==="donation"&&D.status==="approved").reduce((D,X)=>D+(X.amount??0),0),se=at(b.donationMinAmount,49),Y=at(b.donationAmountStep,50),w=Us(b,se,Y),v=Math.max(0,...K.filter(D=>D.package_type==="donation"&&D.status==="approved").map(D=>Number.parseInt(String(D.donation_tier??""),10)).filter(D=>Number.isInteger(D)&&D>=1&&D<=w.length));O=Math.max(ir(b,w,R),v)}catch{}return{cfg:b,minTier:E,unlocked:O>=E,donationRequests:K}}function Br(m,b){var O;return at(m.donationMinAmount,49),at(m.donationAmountStep,50),((O=Us(m)[b-1])==null?void 0:O.amount)??null}function zr(m,b,E){return m?!0:(b==null?void 0:b.smart_classroom_free_class_id)===E}async function Vs(m,b,{preselectClassId:E=null,onPicked:O}={}){var se;(se=document.getElementById("sc-pick-modal"))==null||se.remove();const K=await Qe(m.id).catch(()=>[]),R=document.createElement("div");R.id="sc-pick-modal",R.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/60 p-4",R.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
      <div class="px-6 pt-6 pb-4 flex-shrink-0 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <div class="text-4xl mb-1">🎁</div>
        <h3 class="text-white font-extrabold text-base">ใช้ Smart Classroom ฟรี 1 ห้องเรียน</h3>
        <p class="text-white/80 text-[11px] mt-1 leading-relaxed">เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด<br>หากต้องการเปลี่ยนห้องภายหลังต้องติดต่อแอดมิน</p>
      </div>
      <div class="overflow-y-auto flex-1 p-4 space-y-2">
        ${K.length?K.map(Y=>`
          <label class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition hover:border-amber-300 ${Y.id===E?"border-amber-400 bg-amber-50":"border-gray-200"}">
            <input type="radio" name="sc-pick-class" value="${Y.id}" class="w-4 h-4" ${Y.id===E?"checked":""} />
            <span class="text-sm font-semibold text-gray-700">${c(Y.class_name)}</span>
          </label>`).join(""):'<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>'}
      </div>
      <div class="p-4 flex-shrink-0 border-t border-gray-100">
        <button id="sc-pick-confirm" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)" ${K.length?"":"disabled"}>✅ ยืนยันใช้ห้องนี้</button>
        <button id="sc-pick-cancel" class="w-full py-2 mt-1.5 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(R),R.addEventListener("click",Y=>{Y.target===R&&R.remove()}),R.querySelector("#sc-pick-cancel").addEventListener("click",()=>R.remove()),R.querySelector("#sc-pick-confirm").addEventListener("click",async()=>{const Y=R.querySelector('input[name="sc-pick-class"]:checked');if(!Y){x("กรุณาเลือกห้องเรียน","warning");return}const w=parseInt(Y.value),v=R.querySelector("#sc-pick-confirm");v.disabled=!0,v.textContent="กำลังบันทึก...";try{if(!await Gs(m.id,w)){x("มีการเลือกห้องไปแล้วก่อนหน้านี้ กรุณาลองใหม่","error"),R.remove();return}m.smart_classroom_free_class_id=w,R.remove(),x("เลือกห้องฟรีสำเร็จ ✅","success"),O==null||O(w)}catch(D){x("บันทึกไม่สำเร็จ: "+N(D),"error"),v.disabled=!1,v.textContent="✅ ยืนยันใช้ห้องนี้"}})}function Ds(m){const b=Math.max(0,Math.floor((Date.now()-new Date(m).getTime())/6e4));return b<1?"<1 นาที":`${b} นาที`}const Ps="pp5_sc_skip_popup";async function Nr(m){var H,Q,Ne,De;const b=window._pp5SystemCfg??await Fs().catch(()=>({})),E=parseInt(b.academicYear??2568),O=parseInt(b.semester??1),[K,R,se,Y]=await Promise.all([Qe(m.id).catch(()=>[]),Os(m.id,E,O).catch(()=>[]),Rs(m.id).catch(()=>[]),Qs().catch(()=>[])]);if(!K.length)return{classId:null,mode:"none"};const w=Object.fromEntries(Y.map(z=>[z.period_no,z])),v=Object.fromEntries(R.map(z=>[z.id,z])),D=[];for(const z of se){const ne=v[z.teacher_schedule_id];if(!ne)continue;const ie=(ne.period_no??1)+(ne.span_periods??1)-1;D.push({classId:z.class_id,day_of_week:ne.day_of_week,period:w[ne.period_no],actualEndPeriod:w[ie]??w[ne.period_no]})}const X=new Date,ve=X.getDay(),ee=X.getHours()*3600+X.getMinutes()*60+X.getSeconds();for(const z of D){if(z.day_of_week!==ve||!((H=z.period)!=null&&H.start_time)||!((Q=z.actualEndPeriod)!=null&&Q.end_time))continue;const[ne,ie]=z.period.start_time.split(":").map(Number),[he,we]=z.actualEndPeriod.end_time.split(":").map(Number),ke=ne*3600+ie*60,de=he*3600+we*60;if(ee>=ke&&ee<de)return{classId:z.classId,mode:"live"}}let le=null;for(const z of D){if(!((Ne=z.period)!=null&&Ne.start_time))continue;const[ne,ie]=z.period.start_time.split(":").map(Number),he=ne*3600+ie*60;let we=(z.day_of_week-ve+7)%7;we===0&&he<=ee&&(we=7);const ke=we*86400+he-ee;(le===null||ke<le.totalSecUntil)&&(le={totalSecUntil:ke,classId:z.classId})}return le?{classId:le.classId,mode:"upcoming"}:{classId:((De=K[0])==null?void 0:De.id)??null,mode:"none"}}async function ma(m){var D,X,ve,ee,le,H;const{cfg:b,minTier:E,unlocked:O}=await Ws(m);if(O&&localStorage.getItem(Ps)==="1"){Hs(m);return}if(!O&&(m!=null&&m.smart_classroom_free_class_id)){Ee(m,m.smart_classroom_free_class_id);return}(D=document.getElementById("sc-landing-modal"))==null||D.remove();const K=((X=b.smartClassroomLandingTitle)==null?void 0:X.trim())||"Smart Classroom — หน้าควบคุมขณะสอนสด",R=((ve=b.smartClassroomLandingDesc)==null?void 0:ve.trim())||"ทุกวินาทีระหว่างสอนสดมีค่า — ไม่ต้องเสียเวลาสลับหน้าจอไปมาระหว่างเช็คชื่อ คุมเวลา เปิดควิซ หรือสั่งงาน อีกต่อไป Smart Classroom รวมทุกเครื่องมือที่คุณใช้บ่อยที่สุดไว้จอเดียว ให้คุณโฟกัสกับการสอนได้เต็มที่ นักเรียนก็ได้รับข่าวสารถึงมือถือทันทีโดยไม่พลาด และแผนการสอน/บันทึกหลังสอนของคุณจะถูกเก็บเป็นระบบ พร้อมให้ตรวจสอบได้ทุกเมื่อโดยไม่ต้องมานั่งรวบรวมทีหลัง",se=[b.smartClassroomLandingImg1,b.smartClassroomLandingImg2,b.smartClassroomLandingImg3].filter(Boolean),Y=[{emoji:"⏱️",text:"ไม่ต้องสลับหน้าจอนับสิบรอบระหว่างสอน ทุกเครื่องมือรวมไว้จอเดียว"},{emoji:"📲",text:"นักเรียนไม่พลาดประกาศ/งานอีกต่อไป แจ้งเตือนถึงมือถือทันทีที่กดส่ง"},{emoji:"📋",text:"แผนการสอน+บันทึกหลังสอนเป็นระบบ พร้อมตรวจสอบได้ทุกเมื่อ"}],w=["✅ เช็คชื่ออัตโนมัติ","🚪 Hall Pass สด","🎲 สุ่ม/จัดกลุ่ม","🧠 เปิดควิซสด","📚 สั่งงาน/ติดตามงาน","📘 กำหนดการสอน+แผนการสอน","🖊️ บันทึกหลังสอน+เซ็นชื่อ","📣 ประกาศแนบไฟล์+แจ้งเตือนมือถือ"],v=document.createElement("div");v.id="sc-landing-modal",v.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",v.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade">
      <div class="relative px-6 py-8 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <button id="sl-close" class="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none">✕</button>
        <div class="text-5xl mb-2">👑</div>
        <h2 class="text-white font-extrabold text-xl">${c(K)}</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${Y.map(Q=>`
            <div class="px-3 py-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <div class="text-xl mb-1">${Q.emoji}</div>
              <p class="text-[11px] font-bold text-amber-800 leading-snug">${c(Q.text)}</p>
            </div>`).join("")}
        </div>
        <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">${c(R)}</p>
        ${se.length?`<div class="grid ${se.length>1?"grid-cols-2":"grid-cols-1"} gap-2">${se.map(Q=>`<img src="${c(Q)}" class="w-full rounded-xl border border-gray-100 object-cover" />`).join("")}</div>`:""}
        <div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">🎁 รวมฟีเจอร์เหล่านี้ไว้ให้แล้ว</p>
          <div class="grid grid-cols-2 gap-1.5 text-[11px] text-gray-500">
            ${w.map(Q=>`<div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50">${Q}</div>`).join("")}
          </div>
        </div>
        ${O?`
          <label class="flex items-center justify-center gap-2 text-xs text-gray-500 cursor-pointer select-none">
            <input type="checkbox" id="sl-skip" class="w-4 h-4 rounded" />
            ไม่ต้องโชว์ป๊อบอัพนี้ในครั้งหน้า — เปิดคลาสรูมที่กำลังสอนให้อัตโนมัติเลย
          </label>
          <button id="sl-start" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🚀 เริ่มใช้งาน</button>
        `:`
          <p class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 text-center">🎁 ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน หรือสนับสนุนระบบระดับ ${E} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้อง</p>
          <button id="sl-free" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 เลือกห้องที่จะใช้ฟรี</button>
          <button id="sl-donate" class="w-full py-2.5 rounded-2xl text-amber-700 font-semibold text-xs hover:bg-amber-50 transition border border-amber-200">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        `}
      </div>
    </div>`,document.body.appendChild(v),v.addEventListener("click",Q=>{Q.target===v&&v.remove()}),v.querySelector("#sl-close").addEventListener("click",()=>v.remove()),(ee=v.querySelector("#sl-start"))==null||ee.addEventListener("click",()=>{var Q;(Q=v.querySelector("#sl-skip"))!=null&&Q.checked&&localStorage.setItem(Ps,"1"),v.remove(),Hs(m)}),(le=v.querySelector("#sl-free"))==null||le.addEventListener("click",()=>{v.remove(),Vs(m,b,{onPicked:Q=>Ee(m,Q)})}),(H=v.querySelector("#sl-donate"))==null||H.addEventListener("click",()=>{var Q;v.remove(),(Q=document.getElementById("btn-donate-float"))==null||Q.click()})}async function Hs(m){x("กำลังตรวจสอบตารางสอน...","info");const{classId:b}=await Nr(m);if(!b){x("ยังไม่มีห้องเรียน กรุณาสร้างห้องเรียนก่อนครับ","warning");return}Ee(m,b)}async function Ee(m,b){var ls,is,ds,cs,us,ps,ms,bs,xs,gs,fs,ys,vs;Ms("my-classes"),Ts("Smart Classroom"),nt(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const{cfg:E,minTier:O,unlocked:K,donationRequests:R}=await Ws(m),se=parseInt(E.academicYear??E.academic_year??2568),Y=parseInt(E.semester??1);if(!zr(K,m,b)){const e=m==null?void 0:m.smart_classroom_free_class_id;if(!e){nt(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
        <div class="text-6xl mb-4">🎁</div>
        <p class="font-bold text-gray-800 text-lg">ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน</p>
        <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณยังไม่ได้สนับสนุนระบบระดับ ${O} ขึ้นไป แต่ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียนครับ<br>เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด (เปลี่ยนภายหลังต้องติดต่อแอดมิน)</p>
        <button id="sc-free-confirm" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 ใช้ห้องนี้ฟรี</button>
        <div class="mt-2">
          <button id="sc-free-other" class="text-xs text-gray-400 hover:text-gray-600 underline">เลือกห้องอื่นแทน</button>
        </div>
        <div class="mt-4">
          <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
        </div>
      </div>`),(ls=document.getElementById("sc-free-confirm"))==null||ls.addEventListener("click",async n=>{const a=n.currentTarget;a.disabled=!0,a.textContent="กำลังบันทึก...";try{if(!await Gs(m.id,b)){x("มีการเลือกห้องไปแล้วก่อนหน้านี้","error"),Ee(m,b);return}m.smart_classroom_free_class_id=b,x("เลือกห้องฟรีสำเร็จ ✅","success"),Ee(m,b)}catch(l){x("บันทึกไม่สำเร็จ: "+N(l),"error"),a.disabled=!1,a.textContent="🎁 ใช้ห้องนี้ฟรี"}}),(is=document.getElementById("sc-free-other"))==null||is.addEventListener("click",()=>{Vs(m,E,{preselectClassId:b,onPicked:n=>Ee(m,n)})}),(ds=document.getElementById("sc-back"))==null||ds.addEventListener("click",()=>Re(m,b));return}const s=((cs=(await Qe(m.id).catch(()=>[])).find(n=>n.id===e))==null?void 0:cs.class_name)??`ห้อง #${e}`,r=Br(E,O);nt(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
      <div class="text-6xl mb-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">Smart Classroom</p>
      <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณใช้สิทธิ์ฟรีกับห้อง <b>${c(s)}</b> ไปแล้ว<br>หากต้องการใช้ห้องนี้ด้วย กรุณาสนับสนุนระบบระดับ ${O}${r?` (${r} บาท)`:""} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้องครับ</p>
      <button id="sc-upgrade" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#a9781a,#e6c988)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      <div class="mt-3">
        <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
      </div>
    </div>`),(us=document.getElementById("sc-upgrade"))==null||us.addEventListener("click",()=>{var n;return(n=document.getElementById("btn-donate-float"))==null?void 0:n.click()}),(ps=document.getElementById("sc-back"))==null||ps.addEventListener("click",()=>Re(m,b));return}let w,v,D,X,ve,ee,le,H,Q,Ne,De,z,ne,ie,he,we,ke,de,ce,_e,_t,$t,J=null;try{le=R;let e;if([e,v,D,X,ve,ee,H,Q,Ne,De,z,ne,ie,he,we,ke,_t]=await Promise.all([Qe(m.id),zn(b).catch(()=>[]),Nn(b).catch(()=>[]),Dn(b).catch(()=>3),Pn(b).catch(()=>2),dr(b).catch(()=>[]),Hn(b).catch(()=>[]),Fn(b).catch(()=>[]),On(b).catch(()=>[]),Rn(b).catch(()=>[]),Qn(b).catch(()=>[]),Gn(m.id).catch(()=>[]),Os(m.id,se,Y).catch(()=>[]),Rs(m.id).catch(()=>[]),Qs().catch(()=>[]),Un(b).catch(()=>[]),Wn().catch(()=>[])]),$t=e,w=e.find(t=>t.id===b),!w){Re(m,b);return}J=w.course_id??((ms=w.master_subjects)==null?void 0:ms.id)??null,[de,ce,_e]=await Promise.all([J?Vn(J,b).catch(()=>[]):Promise.resolve([]),J?ws(J,b).catch(()=>[]):Promise.resolve([]),J?ws(J).catch(()=>[]):Promise.resolve([])])}catch(e){x("โหลดข้อมูลไม่สำเร็จ: "+N(e),"error"),Re(m,b);return}const St=le.some(e=>e.package_type==="donation"&&e.status==="approved"),Pe=w.master_subjects??{};let ge=Object.fromEntries(D.map(e=>[e.student_id,e]));const Ge=Object.fromEntries(v.map(e=>[e.id,e])),ae=ee.find(e=>e.status==="started")??null;let Ue={};if(ae){const e=await Ls(ae.id).catch(()=>[]);Ue=Object.fromEntries(e.map(t=>[t.student_id,t]))}const Ys={in_progress:{icon:"📝",cls:"bg-emerald-500"},submitted:{icon:"✅",cls:"bg-blue-500"},terminated_violation:{icon:"🔒",cls:"bg-red-500"}},ot=[{emoji:"📢",label:"ทั่วไป"},{emoji:"📚",label:"การบ้าน"},{emoji:"📄",label:"เอกสารประกอบ"},{emoji:"⏰",label:"กำหนดส่งงาน"},{emoji:"📝",label:"แบบทดสอบ"},{emoji:"📊",label:"คะแนน"},{emoji:"🎓",label:"กิจกรรม/ฝึกอบรม"},{emoji:"⚠️",label:"ด่วน/สำคัญ"}],lt={overwrite:{label:"ทับคะแนนเก่า (ค่าเริ่มต้น)",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/งานอื่น) จะเก็บค่าที่สูงกว่าไว้"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนงานนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายงาน"}},ue={};for(const e of Q)(ue[bs=e.student_id]??(ue[bs]=[])).push(e);const Le={};for(const e of Ne)(Le[xs=e.student_id]??(Le[xs]=[])).push(e);const We={};for(const e of De)(We[gs=e.student_id]??(We[gs]=[])).push(e);const W=new Map(v.map((e,t)=>[e.id,t+1])),Et=new Map(v.map((e,t)=>[t+1,e])),Lt=e=>{if(!H.length)return null;const t=ue[e.id]??[],s=H.reduce((n,a)=>n+(parseFloat(a.max_score)||0),0);return s<=0?null:H.reduce((n,a)=>{const l=t.find(o=>o.score_column_id===a.id);return n+(parseFloat(l==null?void 0:l.score)||0)},0)/s*100},qt=e=>{const t=Le[e.id]??[];return t.length?t.filter(s=>s.status==="present").length/t.length*100:null},jt=(e,t)=>{const s=(ue[e.id]??[]).find(r=>r.score_column_id===t);return(s==null?void 0:s.score)!=null?parseFloat(s.score):null},Ve=(e,t)=>{var n;const s=z.find(a=>a.id===e),r=(n=s==null?void 0:s.submissions)==null?void 0:n.find(a=>a.student_id===t);return r?r.reviewed_at||r.hasScore?{key:"checked",rank:2,icon:"✓",label:"ตรวจแล้ว",cls:"bg-emerald-100 text-emerald-700 border-emerald-200"}:{key:"waiting",rank:0,icon:"●",label:"ส่งแล้ว รอตรวจ",cls:"bg-amber-100 text-amber-700 border-amber-200"}:{key:"missing",rank:1,icon:"○",label:"ยังไม่ส่ง",cls:"bg-gray-100 text-gray-500 border-gray-200"}};let U={key:"seatno"};const Xs=e=>{if(U.key==="total"){const t=Lt(e);return t==null?null:`${t.toFixed(0)}%`}if(U.key==="att"){const t=qt(e);return t==null?null:`${t.toFixed(0)}%`}if(U.key.startsWith("col:")){const t=parseInt(U.key.slice(4),10),s=jt(e,t),r=H.find(n=>n.id===t);return s==null?null:`${s}${r?"/"+r.max_score:""}`}if(U.key.startsWith("assignment:")){const t=parseInt(U.key.slice(11),10),s=Ve(t,e.id);return`${s.icon} ${s.label}`}return null},Js=()=>{if(U.key==="seatno")return v;if(U.key==="name")return[...v].sort((t,s)=>(t.full_name??"").localeCompare(s.full_name??"","th"));if(U.key.startsWith("assignment:")){const t=parseInt(U.key.slice(11),10);return[...v].sort((s,r)=>Ve(t,s.id).rank-Ve(t,r.id).rank||W.get(s.id)-W.get(r.id))}const e=U.key==="total"?Lt:U.key==="att"?qt:t=>jt(t,parseInt(U.key.slice(4),10));return[...v].sort((t,s)=>{const r=e(t),n=e(s);return r==null&&n==null?W.get(t.id)-W.get(s.id):r==null?1:n==null?-1:n-r})},It=`pp5-smart-classroom-layout-${b}`;let oe=(()=>{try{const e=JSON.parse(localStorage.getItem(It)??"null");return e&&typeof e=="object"?e:{template:"rows",splitGender:!1,order:[]}}catch{return{template:"rows",splitGender:!1,order:[]}}})();const Ct=()=>{const e=Js(),t=new Map((oe.order??[]).map((s,r)=>[Number(s),r]));return!t.size||U.key!=="seatno"?e:[...e].sort((s,r)=>{const n=t.get(Number(s.id)),a=t.get(Number(r.id));return(n??Number.MAX_SAFE_INTEGER)-(a??Number.MAX_SAFE_INTEGER)||(W.get(s.id)??0)-(W.get(r.id)??0)})},Mt=()=>oe.template==="pairs"?"grid-cols-2 sm:grid-cols-4":oe.template==="groups"?"grid-cols-2 sm:grid-cols-4 lg:grid-cols-5":oe.template==="circle"?"grid-cols-3 sm:grid-cols-5 lg:grid-cols-6":"grid-cols-4 sm:grid-cols-6",Zs=()=>{try{localStorage.setItem(It,JSON.stringify(oe))}catch{}},Tt=ne.filter(e=>{var t;return((t=e.classes)==null?void 0:t.id)===b&&e.status!=="rejected"&&(e.status!=="approved"||e.exam_attended==null)}).sort((e,t)=>(e.requested_date??"").localeCompare(t.requested_date??"")),Ks=new Set(he.filter(e=>e.class_id===b).map(e=>e.teacher_schedule_id)),it=Object.fromEntries(we.map(e=>[e.period_no,e])),Te=ie.filter(e=>Ks.has(e.id)).map(e=>({...e,period:it[e.period_no],actualEndPeriod:it[(e.period_no??1)+(e.span_periods??1)-1]??it[e.period_no]})).sort((e,t)=>e.day_of_week-t.day_of_week||e.period_no-t.period_no);function en(){var n,a,l;const e=new Date,t=e.getDay(),s=e.getHours()*3600+e.getMinutes()*60+e.getSeconds();for(const o of Te){if(o.day_of_week!==t||!((n=o.period)!=null&&n.start_time)||!((a=o.actualEndPeriod)!=null&&a.end_time))continue;const[d,f]=o.period.start_time.split(":").map(Number),[u,i]=o.actualEndPeriod.end_time.split(":").map(Number),p=d*3600+f*60,_=u*3600+i*60;if(s>=p&&s<_)return{mode:"live",remainingSec:_-s,slot:o}}let r=null;for(const o of Te){if(!((l=o.period)!=null&&l.start_time))continue;const[d,f]=o.period.start_time.split(":").map(Number),u=d*3600+f*60;let i=(o.day_of_week-t+7)%7;i===0&&u<=s&&(i=7);const p=i*86400+u-s;(r===null||p<r.totalSecUntil)&&(r={totalSecUntil:p,slot:o})}return r?{mode:"upcoming",remainingSec:r.totalSecUntil,slot:r.slot}:{mode:"none"}}const P=()=>(Ie==null||Ie(),Ee(m,b)),At=async(e,t,s)=>{const r=v.map(n=>n.profile_id).filter(Boolean);if(r.length)try{await Ir.functions.invoke("send-push",{body:{title:e,body:t,url:"student.html",tag:s,profileIds:r}})}catch{}},Bt=()=>Ct().map(e=>{const t=ge[e.id],s=Ue[e.id],r=ae?Ys[s==null?void 0:s.status]??{icon:"⚪",cls:"bg-gray-300"}:null,n=Xs(e),a=U.key.startsWith("assignment:")?Ve(parseInt(U.key.slice(11),10),e.id):null;return`<div class="sc-stu-wrap relative" data-student-wrap data-sid="${e.id}">
      <div role="button" tabindex="0" data-sid="${e.id}"
        class="sc-stu relative border rounded-xl px-2 py-2.5 text-center hover:border-indigo-300 hover:-translate-y-0.5 transition cursor-pointer ${t?"border-amber-300 bg-amber-50":"border-gray-100 bg-gray-50"}">
      <span class="absolute top-1 left-1 text-[9px] font-bold text-gray-500 bg-white/80 border border-gray-200 rounded-full w-4 h-4 flex items-center justify-center" title="เลขที่ ${W.get(e.id)??"—"}">${W.get(e.id)??"—"}</span>
      ${t?'<span class="absolute top-1 right-1 text-[9px] font-bold bg-amber-500 text-white px-1 py-0.5 rounded">🚪</span>':""}
      <div class="relative w-9 h-9 mx-auto mb-1.5 mt-2 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
        ${e.image_url?`<img src="${c(e.image_url)}" class="w-full h-full object-cover"/>`:c((e.full_name??"?").charAt(0))}
        ${r?`<span class="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold ${r.cls} text-white w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-white" title="สถานะสอบ: ${(s==null?void 0:s.status)??"ยังไม่เข้าสอบ"}">${r.icon}</span>`:""}
      </div>
      <div class="text-[9px] text-gray-400 font-mono">${c(e.student_code??"")}</div>
      <div class="text-[11px] font-semibold text-gray-700 leading-tight truncate">${c(e.full_name??"")}</div>
      ${a?`<div class="mt-1 px-1.5 py-0.5 rounded-lg border text-[9px] font-bold truncate ${a.cls}">${a.icon} ${a.label}</div>`:n?`<div class="text-[10px] font-bold text-amber-600 mt-0.5">${c(n)}</div>`:""}
      </div>
    </div>`}).join(""),tn=()=>D.length?D.map(e=>{const t=Ge[e.student_id];return`<div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-amber-100 bg-amber-50 mb-2">
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs flex-shrink-0">
          ${t!=null&&t.image_url?`<img src="${c(t.image_url)}" class="w-full h-full object-cover"/>`:c(((t==null?void 0:t.full_name)??"?").charAt(0))}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-800 truncate">${c((t==null?void 0:t.full_name)??"—")}</p>
          <p class="text-[10px] text-gray-500 truncate">${c(e.reason??"")}</p>
        </div>
        <span class="text-xs font-bold text-amber-700 font-mono flex-shrink-0">${Ds(e.created_at)}</span>
        <button class="sc-return-btn text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 flex-shrink-0" data-lid="${e.id}">กลับแล้ว</button>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีนักเรียนออกนอกห้องตอนนี้</p>',sn=()=>ee.length?`<div class="max-h-72 overflow-y-auto space-y-1.5 pr-0.5">${ee.map(e=>`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <span class="text-base flex-shrink-0">🧠</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-700 truncate">${c(e.title??"ควิซ")}</p>
          <p class="text-[10px] text-gray-400">${e.status==="announced"?"พร้อมเริ่ม":e.status==="started"?"🔴 กำลังสอบสด":"ปิดแล้ว"}</p>
        </div>
        ${e.status==="announced"?`<button class="sc-quiz-start text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex-shrink-0" data-qid="${e.id}">▶ เริ่ม</button>`:""}
        ${e.status==="started"?`<button class="sc-quiz-monitor text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex-shrink-0" data-qid="${e.id}">🔴 ดูสด</button>
                                     <button class="sc-quiz-close text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 flex-shrink-0" data-qid="${e.id}">ปิด</button>`:""}
        ${e.status==="started"||e.status==="closed"?`<button class="sc-quiz-analytics text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100 flex-shrink-0" data-qid="${e.id}">📊 สถิติ</button>`:""}
      </div>`).join("")}</div>`:'<p class="text-xs text-gray-400">ห้องนี้ยังไม่มีควิซที่สร้างไว้</p>';function nn(){var a;(a=document.getElementById("sc-quiz-quick"))==null||a.remove();const e=document.createElement("div");e.id="sc-quiz-quick",e.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",document.body.appendChild(e);const t=()=>{e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🧠 เปิดควิซให้ห้องนี้</h3>
          <p class="text-xs text-gray-400 mb-4">${c(w.class_name??"")}</p>
          <div class="space-y-2.5">
            <button id="sqq-pick" class="w-full py-3.5 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition text-left px-4">
              <span class="font-bold text-sm text-gray-700">📚 เลือกจากคลังข้อสอบ</span>
              <p class="text-[11px] text-gray-400 mt-0.5">ใช้ชุดคำถามที่เคยสร้างไว้แล้ว</p>
            </button>
            <button id="sqq-new" class="w-full py-3.5 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition text-left px-4">
              <span class="font-bold text-sm text-gray-700">✏️ สร้างใหม่เดี๋ยวนี้</span>
              <p class="text-[11px] text-gray-400 mt-0.5">พิมพ์คำถามสดๆ แล้วเปิดให้ทำได้เลย</p>
            </button>
          </div>
          <button id="sqq-cancel" class="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
        </div>`,e.querySelector("#sqq-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#sqq-pick").addEventListener("click",s),e.querySelector("#sqq-new").addEventListener("click",n)},s=async()=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลดคลังข้อสอบ...</div>';const l=await mr(m.id).catch(()=>[]);if(!l.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">ยังไม่มีคลังข้อสอบเลย ลองสร้างใหม่ดูก่อนได้ครับ</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",t);return}e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">📚 เลือกคลังข้อสอบ</h3>
          <p class="text-xs text-gray-400 mb-4">${c(w.class_name??"")}</p>
          <div class="space-y-1.5 max-h-72 overflow-y-auto">
            ${l.map(o=>`
              <button class="sqq-bank-pick w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50/50 transition" data-id="${o.id}">
                <span class="text-sm font-semibold text-gray-700">${c(o.name)}</span>
                ${o.description?`<p class="text-[11px] text-gray-400 truncate">${c(o.description)}</p>`:""}
              </button>`).join("")}
          </div>
          <button id="sqq-back" class="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600">← กลับ</button>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",t),e.querySelectorAll(".sqq-bank-pick").forEach(o=>o.addEventListener("click",()=>r(l.find(d=>d.id===o.dataset.id))))},r=async l=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลด...</div>';const o=await xr(l.id).catch(()=>[]);if(!o.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">คลัง "${c(l.name)}" ยังไม่มีคำถามเลย เพิ่มคำถามก่อนถึงจะเปิดสอบได้</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",s);return}const d=new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short"});e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🚀 เปิดสอบ: ${c(l.name)}</h3>
          <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${o.length} ข้อ · ${c(w.class_name??"")}</p>
          <div class="space-y-3">
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อการสอบครั้งนี้</label>
              <input id="sqq-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${c(l.name)} (${d})" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนข้อที่สุ่ม</label>
                <input id="sqq-num" type="number" min="1" max="${o.length}" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${Math.min(10,o.length)}" />
              </div>
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">เวลาสอบ (นาที)</label>
                <input id="sqq-time" type="number" min="1" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="30" />
              </div>
            </div>
            <p class="text-[11px] text-gray-400 leading-relaxed">ตั้งค่าอื่นๆ (สลับข้อ, ล็อกคำตอบ, ผูกคะแนน ฯลฯ) ใช้ค่าเริ่มต้นไว้ก่อน — ปรับเพิ่มได้ภายหลังจากหน้า "คลังข้อสอบ"</p>
          </div>
          <div class="flex gap-2 mt-5">
            <button id="sqq-back" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">← กลับ</button>
            <button id="sqq-launch" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">เปิดให้ห้องนี้</button>
          </div>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelector("#sqq-launch").addEventListener("click",async f=>{const u=e.querySelector("#sqq-title").value.trim(),i=parseInt(e.querySelector("#sqq-num").value,10);if(!u){x("กรุณาระบุชื่อการสอบ","warning");return}if(!i||i<1||i>o.length){x(`จำนวนข้อต้องอยู่ระหว่าง 1 – ${o.length}`,"warning");return}const p=f.target;p.disabled=!0,p.textContent="กำลังเปิด...";try{await gr({bank_id:l.id,class_id:b,title:u,num_questions:i,time_limit_minutes:parseInt(e.querySelector("#sqq-time").value,10)||null,status:"announced"}),x('สร้างควิซให้ห้องนี้แล้ว 🧠 กด "▶ เริ่ม" ในรายการเพื่อเปิดสอบสดได้เลย',"success"),e.remove(),P()}catch(_){x("เปิดควิซไม่สำเร็จ: "+N(_),"error"),p.disabled=!1,p.textContent="เปิดให้ห้องนี้"}})},n=()=>{e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">✏️ สร้างคลังข้อสอบใหม่</h3>
          <p class="text-xs text-gray-400 mb-4">${c(w.class_name??"")} — ตั้งชื่อคลังก่อน แล้วไปเพิ่มคำถามได้ต่อ (พิมพ์เอง / ให้ AI ช่วยคิด / นำเข้า CSV)</p>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อคลังข้อสอบ</label>
            <input id="sqq-c-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" placeholder="เช่น ควิซท้ายคาบ - เรื่องสมการ" />
          </div>
          <div class="flex gap-2 mt-5">
            <button id="sqq-back" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">← กลับ</button>
            <button id="sqq-c-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">สร้างคลัง → เพิ่มคำถาม</button>
          </div>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",t),e.querySelector("#sqq-c-save").addEventListener("click",async l=>{const o=e.querySelector("#sqq-c-title").value.trim();if(!o){x("กรุณาระบุชื่อคลังข้อสอบ","warning");return}const d=l.target;d.disabled=!0,d.textContent="กำลังสร้าง...";try{const f=await br({teacher_id:m.id,subject_id:J,name:o}),{_renderBankQuestions:u}=await wt(async()=>{const{_renderBankQuestions:i}=await import("./teacher-views-quiz-banks-BCUq-GTX.js");return{_renderBankQuestions:i}},__vite__mapDeps([0,1,2,3,4,5,6,7]));e.remove(),x("สร้างคลังแล้ว — เพิ่มคำถามให้ครบก่อนไปสร้างแบบทดสอบนะครับ","success"),u(m,f,b)}catch(f){x("สร้างไม่สำเร็จ: "+N(f),"error"),d.disabled=!1,d.textContent="สร้างคลัง → เพิ่มคำถาม"}})};e.addEventListener("click",l=>{l.target===e&&e.remove()}),t()}const rn=()=>ke.length?`<div class="space-y-1.5 mb-3 max-h-40 overflow-y-auto">${ke.slice(0,10).map(e=>{var s;const t=[...Array.isArray(e.attachment_urls)?e.attachment_urls:[],...e.file_url?[{url:e.file_url,name:"ไฟล์แนบ"}]:[]];return`
      <div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center gap-1.5 flex-wrap">
          ${e.ann_type&&e.ann_type!=="general"?`<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">${c(e.ann_type)}</span>`:""}
          <p class="font-semibold text-gray-700 truncate flex-1 min-w-0">${c(e.title)}</p>
        </div>
        ${e.body?`<p class="text-gray-400 truncate">${c(e.body.slice(0,80))}</p>`:""}
        ${t.length?`<div class="flex flex-wrap gap-1 mt-1">${t.map(r=>`<a href="${c(r.url)}" target="_blank" rel="noopener" class="text-[10px] px-1.5 py-0.5 rounded-lg bg-white border border-gray-200 text-indigo-600 hover:bg-indigo-50">📎 ${c(r.name??"ไฟล์")}</a>`).join("")}</div>`:""}
        <p class="text-[10px] text-gray-300 mt-0.5">${new Date(e.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}${(s=e.teachers)!=null&&s.full_name?" · "+c(e.teachers.full_name):""}</p>
      </div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 mb-2">ยังไม่มีประกาศสำหรับห้องนี้</p>',an=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],zt=e=>{if(!Te.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้ผูกตารางสอนให้ห้องนี้</p>';if(e==="daily"){const s=new Date().getDay(),r=Te.filter(n=>n.day_of_week===s);return r.length?r.map(n=>{var a,l,o,d;return`
        <div class="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
          <span class="font-semibold text-gray-700">คาบที่ ${n.period_no}${n.span_periods>1?`-${n.period_no+n.span_periods-1}`:""}</span>
          <span class="text-gray-500 font-mono">${((l=(a=n.period)==null?void 0:a.start_time)==null?void 0:l.slice(0,5))??"—"} - ${((d=(o=n.actualEndPeriod)==null?void 0:o.end_time)==null?void 0:d.slice(0,5))??"—"}</span>
        </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">วันนี้ไม่มีคาบของห้องนี้</p>'}const t={};return Te.forEach(s=>{var r;(t[r=s.day_of_week]??(t[r]=[])).push(s)}),Object.keys(t).sort((s,r)=>s-r).map(s=>`
      <div class="mb-2.5">
        <p class="text-[11px] font-bold text-gray-500 mb-1">${an[s]}</p>
        <div class="flex flex-wrap gap-1.5">
          ${t[s].map(r=>{var n,a;return`<span class="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-semibold font-mono">คาบ ${r.period_no}${r.span_periods>1?`-${r.period_no+r.span_periods-1}`:""} · ${((a=(n=r.period)==null?void 0:n.start_time)==null?void 0:a.slice(0,5))??"—"}</span>`}).join("")}
        </div>
      </div>`).join("")},Nt=()=>Tt.length?Tt.map((e,t)=>{var s;return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">${t+1}</span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-700 truncate">${c(((s=e.students)==null?void 0:s.full_name)??"—")} — ${c(e.request_type??"")}</p>
          <p class="text-gray-400">${e.requested_date?new Date(e.requested_date).toLocaleDateString("th-TH",{day:"numeric",month:"short"}):"ไม่ระบุวันที่"}${e.requested_period_no?` · คาบ ${e.requested_period_no}`:""}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${e.status==="pending"?"bg-amber-50 text-amber-700":"bg-emerald-50 text-emerald-700"} flex-shrink-0">${e.status==="pending"?"รออนุมัติ":"อนุมัติแล้ว รอสอบ"}</span>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีคำร้องรอดำเนินการ</p>',dt=e=>e?new Date(e).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",ct=e=>new Set((e.submissions??[]).map(t=>t.student_id)).size,Dt=e=>{const t=Math.max(0,v.length-ct(e));if(!e.due_at||t===0)return{key:"normal",missingCount:t,urgent:!1,label:dt(e.due_at)};const s=new Date(e.due_at).getTime()-Date.now(),r=Math.max(1,Math.ceil(Math.abs(s)/36e5));if(s<0){const n=r<24?`เกินกำหนด ${r} ชม.`:`เกินกำหนด ${Math.ceil(r/24)} วัน`;return{key:"overdue",missingCount:t,urgent:!0,label:n,diffMs:s}}return s<=864e5?{key:"today",missingCount:t,urgent:!0,label:`เหลือ ${r} ชม.`,diffMs:s}:s<=2592e5?{key:"soon",missingCount:t,urgent:!0,label:`เหลือ ${Math.ceil(r/24)} วัน`,diffMs:s}:{key:"normal",missingCount:t,urgent:!1,label:dt(e.due_at),diffMs:s}},fe=z.map(e=>({assignment:e,state:Dt(e)})).filter(e=>e.state.urgent).sort((e,t)=>{const s=e.state.key==="overdue",r=t.state.key==="overdue";if(s!==r)return s?-1:1;const n=new Date(e.assignment.due_at).getTime(),a=new Date(t.assignment.due_at).getTime();return s?a-n:n-a}),Pt=(e="mobile")=>{if(!fe.length)return"";const{assignment:t,state:s}=fe[0],r=ct(t);return`<div class="rounded-2xl border ${s.key==="overdue"?"border-red-200 bg-red-50 text-red-800":s.key==="today"?"border-orange-200 bg-orange-50 text-orange-800":"border-amber-200 bg-amber-50 text-amber-800"} shadow-sm p-4 ${e==="mobile"?"mb-4 lg:hidden":"mb-4 hidden lg:block"}">
      <div class="flex items-center justify-between gap-2">
        <p class="text-xs font-extrabold">⏰ ${s.key==="overdue"?"งานเกินกำหนด":"งานใกล้ครบกำหนด"}</p>
        <span class="text-xs font-extrabold flex-shrink-0">${s.label}</span>
      </div>
      <p class="text-sm font-bold mt-2 truncate">${c(t.title)}</p>
      <p class="text-[11px] mt-1 opacity-80">${r}/${v.length} ส่งแล้ว · <b>${s.missingCount} คนยังไม่ส่ง</b></p>
      ${fe.length>1?`<p class="text-[10px] mt-1 opacity-70">และมีงานเร่งด่วนอีก ${fe.length-1} งาน</p>`:""}
      <div class="grid grid-cols-[1fr_auto] gap-2 mt-3">
        <button type="button" data-sc-urgent-aid="${t.id}" class="sc-btn-dark min-h-[42px] rounded-xl px-3 text-xs font-bold">ดูและติดตามงาน</button>
        <button type="button" class="sc-quick-add-assignment min-h-[42px] rounded-xl border border-current/20 bg-white/70 px-3 text-xs font-bold">＋ สั่งงาน</button>
      </div>
    </div>`},Ye=(e,t)=>e.due_at?new Date(t).getTime()>new Date(e.due_at).getTime():!1,ut=(e,t)=>e.due_at?Math.max(1,Math.ceil((new Date(t).getTime()-new Date(e.due_at).getTime())/864e5)):0,on=(e,t)=>Ye(e,t)?e.late_penalty_mode==="flat"?parseFloat(e.late_penalty_value)||0:e.late_penalty_mode==="per_day"?(parseFloat(e.late_penalty_value)||0)*ut(e,t):0:0,ln=()=>z.length?z.map(e=>{const t=ct(e),s=v.length,r=s>0?Math.round(t/s*100):0,n=e.submissions.filter(d=>Ye(e,d.submitted_at)).length,a=Dt(e),l=a.key==="overdue"?"border-red-200 bg-red-50":a.key==="today"?"border-orange-200 bg-orange-50":a.key==="soon"?"border-amber-200 bg-amber-50":"border-gray-100",o=a.urgent?a.key==="overdue"?"text-red-700":"text-amber-700":"text-gray-400";return`<button class="sc-assignment-row w-full text-left px-3 py-3 rounded-xl border ${l} hover:border-indigo-300 hover:bg-indigo-50 transition mb-2" data-aid="${e.id}">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-bold text-gray-700 truncate">${c(e.title)}</p>
          <span class="text-[11px] ${o} font-bold flex-shrink-0">${a.label}</span>
        </div>
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${r}%"></div></div>
          <span class="text-[11px] font-bold text-gray-600 flex-shrink-0">${t}/${s} ส่งแล้ว</span>
          ${a.missingCount?`<span class="text-[10px] font-bold ${a.urgent?o:"text-gray-400"} flex-shrink-0">${a.missingCount} ยังไม่ส่ง</span>`:""}
          ${n?`<span class="text-[10px] font-bold text-amber-600 flex-shrink-0">ช้า ${n}</span>`:""}
        </div>
      </button>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีงานที่มอบหมาย — กด "➕ สั่งงานใหม่" เพื่อเริ่ม</p>',pe=qr(E.semester_start),pt=e=>{var t;return((t=e==null?void 0:e.source_json)==null?void 0:t.week_type)??"teaching"},$e=de.find(e=>pe>=e.week_start&&pe<=e.week_end&&pt(e)!=="break"),dn={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"},cn=()=>de.length?`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${de.map(e=>`
      <div class="flex items-center gap-2">
        <button class="sc-syllabus-row min-w-0 flex-1 text-left flex items-center gap-2 px-3 py-2 rounded-xl border transition ${pe>=e.week_start&&pe<=e.week_end?"border-indigo-300 bg-indigo-50":"border-gray-100 bg-gray-50 hover:border-indigo-200"}" data-sylid="${e.id}">
          <span class="text-[10px] font-bold text-gray-500 flex-shrink-0 w-16">สัปดาห์ ${e.week_start}${e.week_end!==e.week_start?`-${e.week_end}`:""}</span>
          <span class="text-xs font-semibold text-gray-700 truncate flex-1">${c(e.topic)}</span>
          ${pt(e)!=="teaching"?`<span class="text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">${c(dn[pt(e)]??"กำหนดพิเศษ")}</span>`:""}
        </button>
        <button type="button" class="sc-syllabus-delete shrink-0 rounded-lg border border-red-200 bg-white px-2.5 py-2 text-[10px] font-bold text-red-600" data-sylid="${e.id}" aria-label="ลบกำหนดการสัปดาห์ ${e.week_start}">ลบ</button>
      </div>`).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้กำหนดหัวข้อการสอน — กด "➕ เพิ่มหัวข้อ" เพื่อเริ่มวางกำหนดการสอน</p>',mt=()=>[...ce].sort((e,t)=>{var a,l,o,d;const s=Number(e.week_start||0)-Number(t.week_start||0);if(s)return s;const r=String(e.lesson_date||((a=e.source_json)==null?void 0:a.lesson_date)||""),n=String(t.lesson_date||((l=t.source_json)==null?void 0:l.lesson_date)||"");return r&&n&&r!==n?r.localeCompare(n):Number(((o=e.source_json)==null?void 0:o.session_in_week)||0)-Number(((d=t.source_json)==null?void 0:d.session_in_week)||0)||Number(e.session_number||0)-Number(t.session_number||0)||Number(e.week_end||0)-Number(t.week_end||0)||String(e.title??"").localeCompare(String(t.title??""),"th")}),Ht=e=>{const t=mt().findIndex(s=>String(s.id)===String(e==null?void 0:e.id));return t>=0?t+1:Number(e==null?void 0:e.session_number)||1},Xe=e=>{const t=Ht(e),s=String((e==null?void 0:e.title)??"").replace(/(ครั้งที่\s*)\d+/g,`$1${t}`);return{...e,title:s,session_number:t}},Je=e=>{var l,o,d;const t=Number(e.duration_minutes)||Number((l=e.source_json)==null?void 0:l.duration_minutes)||45,s=Number((o=e.source_json)==null?void 0:o.period_count),r=Number.isInteger(s)&&s>0?s:t===100?2:t%45===0?t/45:1,n=Number((d=e.source_json)==null?void 0:d.minutes_per_period),a=Number.isInteger(n)&&n>0?n:t===100?50:t%45===0?45:Math.round(t/r);return{periodCount:r,minutesPerPeriod:a,durationMinutes:r*a}},un=()=>{if(!ce.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีแผนการสอน — กด "➕ สร้างแผน" เพื่อเริ่ม</p>';const e={1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัสบดี",5:"ศุกร์",6:"เสาร์",7:"อาทิตย์"},t=new Map;for(const l of(ie??[]).filter(o=>Number(o.subject_id)===Number(J))){const o=Number(l.day_of_week)||7;t.has(o)||t.set(o,[]),t.get(o).push({start:Number(l.period_no),count:Math.max(1,Number(l.span_periods)||1)})}const s=[...t.keys()].sort((l,o)=>l%7-o%7),r=l=>Je(l).periodCount,n=l=>{var S,T;const o=r(l),d=l.lesson_date||((S=l.source_json)==null?void 0:S.lesson_date),f=/^\d{4}-\d{2}-\d{2}$/.test(String(d??""))?new Date(`${d}T00:00:00`).getDay()||7:null,u=Number((T=l.source_json)==null?void 0:T.session_in_week),i=f??(Number.isInteger(u)&&u>0?s[u-1]:null),p=t.get(i)??[];if(p.reduce((g,A)=>g+A.count,0)!==o)return"";const L=p.sort((g,A)=>g.start-A.start).map(g=>g.count>1?`${g.start}–${g.start+g.count-1}`:`${g.start}`);return` · วัน${e[i]} คาบ ${L.join(", ")}`};return`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${mt().map((l,o)=>{var f,u;const d={...l,...Xe(l),session_number:o+1};return`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <button class="sc-plan-row flex-1 min-w-0 text-left" data-planid="${d.id}">
          <p class="text-xs font-bold text-gray-700 truncate">${c(d.title)}</p>
          <p class="text-[10px] text-gray-400">สัปดาห์ ${d.week_start}${d.week_end!==d.week_start?`-${d.week_end}`:""} · ครั้งที่ ${d.session_number||1} · ${r(d)} คาบ · ${Number(d.duration_minutes)||Number((f=d.source_json)==null?void 0:f.duration_minutes)||r(d)*Number(((u=d.source_json)==null?void 0:u.minutes_per_period)||45)} นาที${n(d)}</p>
        </button>
        <button class="sc-plan-reflect text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50 flex-shrink-0" data-planid="${d.id}">✍️ ลงนาม/พิมพ์</button>
        <button type="button" class="sc-plan-delete text-[10px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-red-200 text-red-600 flex-shrink-0" data-planid="${d.id}" aria-label="ลบแผน ${c(d.title)}">ลบ</button>
      </div>`}).join("")}</div>`},He=[{key:"schedule",icon:"🗓️",label:"ตารางเรียน",mobileLabel:"ตาราง",desc:"ดูคาบรายวันและรายสัปดาห์"},{key:"examqueue",icon:"📋",label:"คิวสอบ",mobileLabel:"คิวสอบ",desc:"ติดตามคำร้องสอบย้อนหลัง"},{key:"syllabus",icon:"📘",label:"กำหนดการสอน",mobileLabel:"การสอน",desc:"วางหัวข้อทั้งภาคเรียน"},{key:"plans",icon:"📝",label:"แผนการสอน",mobileLabel:"แผน",desc:"สร้างแผนหน้าเดียวรายครั้ง"},{key:"assignments",icon:"📚",label:"งานที่มอบหมาย",mobileLabel:"งาน",desc:"สั่งงานและติดตามการส่ง"},{key:"grades",icon:"📊",label:"คะแนน",mobileLabel:"คะแนน",desc:"บันทึก/จัดการคะแนนทั้งห้อง"},{key:"attendance",icon:"✅",label:"เช็คชื่อ",mobileLabel:"เช็คชื่อ",desc:"เช็คชื่อ/ใบลา/ประวัติทั้งห้อง"}],Ft=[{key:"room",icon:"👥",label:"ห้อง"},{key:"live",icon:"🧠",label:"สอนสด"},{key:"work",icon:"📚",label:"งาน"},{key:"plan",icon:"📝",label:"แผน"},{key:"more",icon:"•••",label:"เพิ่ม"}];let qe=null,Ze="room";const Ot=e=>e==="schedule"?`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ตารางเรียนของห้องนี้</p>
        <div class="sc-tabbar">
          <button data-sched="daily" class="sc-sched-tab sc-tab-pill">รายวัน</button>
          <button data-sched="weekly" class="sc-sched-tab sc-tab-pill">รายสัปดาห์</button>
        </div>
      </div>
      <div id="sc-schedule-body">${zt("daily")}</div>`:e==="examqueue"?`
      <p class="text-xs text-gray-400 mb-3">คิวคำร้องขอสอบปรับ/สอบย้อนหลัง เรียงจากใกล้ไปไกล</p>
      <div id="sc-exam-queue">${Nt()}</div>`:e==="syllabus"?`
      <div class="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-blue-950">📘 กำหนดการสอนรายภาคเรียน</p><p class="text-xs text-blue-700/70 mt-1">กำหนดหัวข้อของห้องนี้แยกจากห้องอื่นได้ และยังรองรับกำหนดการร่วมของรายวิชา</p><div class="flex gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">${de.length} ช่วงการสอน</span><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">สัปดาห์ปัจจุบัน ${pe||"—"}</span></div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[310px]">
            <button id="sc-ai-syllabus" class="min-h-[48px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm">🤖 สร้างกำหนดการด้วย AI</button>
            <button id="sc-add-syllabus" class="min-h-[48px] rounded-xl bg-white border border-blue-200 text-blue-800 text-xs font-bold hover:bg-blue-50">＋ เพิ่มหัวข้อเอง</button>
          </div>
        </div>
      </div>
      <div class="my-3 px-3 py-2.5 rounded-xl ${$e?"bg-indigo-50 border border-indigo-100":"bg-gray-50 border border-gray-100"}">
        <p class="text-[10px] font-bold ${$e?"text-indigo-500":"text-gray-400"} uppercase tracking-wide">สัปดาห์นี้ — สัปดาห์ที่ ${pe||"—"}</p>
        <p class="text-sm font-bold ${$e?"text-indigo-700":"text-gray-400"} mt-0.5">${$e?c($e.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-syllabus-list">${cn()}</div>`:e==="plans"?`
      <div class="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</p><p class="text-xs text-violet-700/70 mt-1">สร้างแผนรายครั้ง บันทึกหลังสอน และลงลายเซ็นครบ 3 ฝ่าย</p><div class="flex flex-wrap gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">${ce.length} แผน</span><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">เชื่อมกำหนดการสอน</span>${ce.some(t=>Number(t.week_start)===1)&&new Set(ce.map(t=>Number(t.week_start))).size>1?'<button id="sc-sync-plan-pattern" type="button" class="px-2 py-1 rounded-lg bg-white border border-violet-200 text-[10px] font-bold text-violet-700 hover:bg-violet-50">🔁 ใช้รูปแบบคาบจากสัปดาห์แรก</button>':""}</div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[300px]">
            <button id="sc-ai-plan" class="min-h-[48px] rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-xs font-bold shadow-sm">🤖 สร้างแผนด้วย AI</button>
            <button id="sc-add-plan" class="min-h-[48px] rounded-xl bg-white border border-violet-200 text-violet-800 text-xs font-bold hover:bg-violet-50">＋ สร้างแผนเอง</button>
            <button id="sc-archive-plans" ${_e!=null&&_e.length?"":"disabled"} class="col-span-2 min-h-[44px] rounded-xl ${_e!=null&&_e.length?"bg-emerald-600 hover:bg-emerald-700 text-white":"bg-gray-100 text-gray-400"} text-xs font-bold shadow-sm disabled:cursor-not-allowed">🗂️ จัดการแผนทุกห้องในคอร์ส / ส่งเข้า Drive</button>
          </div>
        </div>
      </div>
      <div id="sc-plan-list">${un()}</div>`:`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ติดตามงานที่มอบหมาย + สถานะการส่งของนักเรียน</p>
        <button id="sc-add-assignment" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สั่งงานใหม่</button>
      </div>
      <div id="sc-assignment-list">${ln()}</div>`;nt(`<div class="animate-fade max-w-none w-full px-2 sm:px-4 lg:px-6">
    <style>
      #sc-roster { overflow: visible; }
      .sc-stu-wrap { min-width: 0; z-index: 1; }
      .sc-stu-wrap:hover, .sc-stu-wrap:focus-within, .sc-stu-wrap.is-focus { z-index: 30; }
      .sc-stu { transform-origin: center; }
      .sc-stu-wrap.is-focus .sc-stu {
        transform: scale(1.08); border-color: #818cf8; background: #eef2ff; box-shadow: 0 12px 28px rgba(79,70,229,.18);
      }
      @keyframes sc-pie-item-in { from { opacity: 0; scale: .45; filter: blur(4px); } to { opacity: 1; scale: 1; filter: blur(0); } }
      @keyframes sc-pie-ring-in { from { opacity: 0; scale: .72; } to { opacity: 1; scale: 1; } }
      .sc-student-dock { position: fixed; z-index: 120; width: min(290px, calc(100vw - 16px)); height: 174px; transform: translate(-50%, 0); transition: left .16s ease, top .16s ease, opacity .16s ease; pointer-events: none; }
      .sc-student-dock:not(.hidden) { pointer-events: auto; }
      .sc-dock-shell { position: relative; width: 100%; height: 100%; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; backdrop-filter: none; pointer-events: auto; }
      .sc-dock-shell::before { content: ''; position: absolute; left: 50%; top: 29px; width: 116px; height: 116px; transform: translateX(-50%); border: 2px solid rgba(129,140,248,.35); border-bottom-color: rgba(129,140,248,.08); border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,.12), rgba(99,102,241,.05) 62%, transparent 70%); box-shadow: 0 8px 26px rgba(79,70,229,.16); pointer-events: none; }
      .sc-student-dock:not(.hidden) .sc-dock-shell::before { animation: sc-pie-ring-in .35s ease-out both; }
      .sc-dock-close { position: absolute; right: 8px; bottom: 19px; width: 28px; height: 28px; border-radius: 999px; color: rgba(255,255,255,.8); background: rgba(15,23,42,.78); box-shadow: 0 4px 12px rgba(15,23,42,.22); font-size: 16px; pointer-events: auto; }
      .sc-dock-close:hover { background: rgba(15,23,42,.94); color: white; }
      .sc-dock-group { position: absolute; z-index: 1; pointer-events: auto; }
      .sc-dock-group[data-dock-group="attendance"] { left: 50%; top: 0; transform: translateX(-50%); }
      .sc-dock-group[data-dock-group="leave"] { left: 18%; top: 31px; transform: translateX(-50%); }
      .sc-dock-group[data-dock-group="score"] { left: 82%; top: 31px; transform: translateX(-50%); }
      .sc-dock-group[data-dock-group="star"] { left: 50%; top: 86px; transform: translateX(-50%); }
      .sc-dock-group[data-dock-group="attendance"] { --pie-i: 0; }
      .sc-dock-group[data-dock-group="leave"] { --pie-i: 1; }
      .sc-dock-group[data-dock-group="score"] { --pie-i: 2; }
      .sc-dock-group[data-dock-group="star"] { --pie-i: 3; }
      .sc-student-dock:not(.hidden) .sc-dock-main { animation: sc-pie-item-in .38s cubic-bezier(.2,.9,.2,1.18) both; animation-delay: calc(var(--pie-i) * 55ms); }
      .sc-dock-main, .sc-dock-subitem { border: 0; color: white; font-weight: 800; cursor: pointer; }
      .sc-dock-main { min-width: 62px; min-height: 46px; padding: 4px 8px; border-radius: 999px; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.05; transition: transform .15s ease, filter .15s ease, background .15s ease; }
      .sc-dock-main:hover, .sc-dock-group.is-open .sc-dock-main { transform: translateY(3px); filter: brightness(1.13); background: rgba(255,255,255,.18); }
      .sc-dock-main span { font-size: 20px; line-height: 20px; }
      .sc-dock-main small { font-size: 9px; white-space: nowrap; }
      .sc-dock-submenu { position: absolute; left: 50%; top: calc(100% + 2px); width: 260px; height: 110px; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; backdrop-filter: none; display: block; opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, -5px); transition: opacity .14s ease, transform .14s ease, visibility 0s linear .14s; }
      .sc-dock-group:hover .sc-dock-submenu, .sc-dock-group.is-open .sc-dock-submenu { opacity: 1; visibility: visible; pointer-events: auto; transform: translate(-50%, 0); transition-delay: 0s; }
      .sc-dock-subitem { position: absolute; width: 48px; min-width: 48px; height: 44px; min-height: 44px; padding: 4px 3px; border-radius: 999px; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.05; box-shadow: 0 5px 14px rgba(15,23,42,.22), 0 0 0 2px rgba(255,255,255,.85); opacity: 0; scale: .55; transition: filter .15s ease, scale .15s ease; }
      .sc-dock-group:hover .sc-dock-subitem, .sc-dock-group.is-open .sc-dock-subitem { opacity: 1; scale: 1; }
      .sc-dock-subitem:hover { filter: brightness(1.14); scale: 1.1; }
      .sc-dock-subitem span { font-size: 18px; line-height: 18px; }
      .sc-dock-subitem small { font-size: 8px; white-space: nowrap; }
      .sc-dock-att-status { color: #fff !important; border: 2px solid rgba(255,255,255,.95); text-shadow: 0 1px 2px rgba(15,23,42,.55); }
      .sc-dock-att-status[data-dock-att-status="present"] { background: #059669 !important; }
      .sc-dock-att-status[data-dock-att-status="absent"] { background: #dc2626 !important; }
      .sc-dock-att-status[data-dock-att-status="late"] { background: #d97706 !important; }
      .sc-dock-att-status[data-dock-att-status="excused"] { background: #2563eb !important; }
      .sc-dock-att-status[data-dock-att-status="sick"] { background: #ea580c !important; }
      [data-dock-submenu="attendance"] .sc-dock-subitem:nth-child(1) { left: 0; top: 34px; }
      [data-dock-submenu="attendance"] .sc-dock-subitem:nth-child(2) { left: 53px; top: 55px; }
      [data-dock-submenu="attendance"] .sc-dock-subitem:nth-child(3) { left: 106px; top: 63px; }
      [data-dock-submenu="attendance"] .sc-dock-subitem:nth-child(4) { left: 159px; top: 55px; }
      [data-dock-submenu="attendance"] .sc-dock-subitem:nth-child(5) { left: 212px; top: 34px; }
      [data-dock-submenu="leave"] { width: 126px; height: 92px; }
      [data-dock-submenu="leave"] .sc-dock-subitem:nth-child(1) { left: 5px; top: 20px; }
      [data-dock-submenu="leave"] .sc-dock-subitem:nth-child(2) { left: 66px; top: 43px; }
      [data-dock-submenu="star"] { top: auto; bottom: calc(100% + 2px); width: 132px; height: 74px; }
      [data-dock-submenu="star"] .sc-dock-subitem:nth-child(1) { left: 6px; top: 25px; }
      [data-dock-submenu="star"] .sc-dock-subitem:nth-child(2) { left: 76px; top: 8px; }
      .sc-student-dock.below { transform: translate(-50%, 0); }
      .sc-student-dock.below .sc-dock-group[data-dock-group="star"] .sc-dock-submenu { top: calc(100% + 2px); bottom: auto; transform: translate(-50%, 5px); }
      .sc-student-dock.below .sc-dock-group:hover .sc-dock-submenu, .sc-student-dock.below .sc-dock-group.is-open .sc-dock-submenu { transform: translate(-50%, 0); }
      .sc-student-dock.submenu-above .sc-dock-group[data-dock-group="attendance"] .sc-dock-submenu,
      .sc-student-dock.submenu-above .sc-dock-group[data-dock-group="leave"] .sc-dock-submenu { top: auto; bottom: calc(100% + 4px); transform: translate(-50%, 5px); }
      .sc-student-dock.submenu-above .sc-dock-group[data-dock-group="attendance"]:hover .sc-dock-submenu,
      .sc-student-dock.submenu-above .sc-dock-group[data-dock-group="attendance"].is-open .sc-dock-submenu,
      .sc-student-dock.submenu-above .sc-dock-group[data-dock-group="leave"]:hover .sc-dock-submenu,
      .sc-student-dock.submenu-above .sc-dock-group[data-dock-group="leave"].is-open .sc-dock-submenu { transform: translate(-50%, 0); }
      @media (max-width: 640px) {
        .sc-student-dock { right: auto; width: min(290px, calc(100vw - 16px)); }
        .sc-student-dock.below { transform: translate(-50%, 0); }
        .sc-dock-submenu[data-dock-submenu="attendance"] { width: min(260px, 94vw); }
      }
    </style>

    <div id="sc-student-action-dock" class="sc-student-dock hidden" aria-label="เมนูด่วนของนักเรียน">
      <div class="sc-dock-shell">
        <div class="sc-dock-group" data-dock-group="attendance">
          <button type="button" class="sc-dock-main bg-emerald-600" data-dock-main-action="attendance"><span>✅</span><small>เช็คชื่อ</small></button>
          <div class="sc-dock-submenu" data-dock-submenu="attendance">
            ${Object.entries(rt).map(([e,t])=>`<button type="button" data-dock-att-status="${e}" class="sc-dock-subitem sc-dock-att-status ${t.bg} ${t.color}"><span>${t.label}</span><small>${e==="present"?"มาเรียน":e==="absent"?"ขาด":e==="late"?"มาสาย":e==="excused"?"ลากิจ":"ลาป่วย"}</small></button>`).join("")}
          </div>
        </div>
        <div class="sc-dock-group" data-dock-group="leave">
          <button type="button" class="sc-dock-main bg-orange-600" data-dock-main-action="leave"><span>🚪</span><small>ห้องเรียน</small></button>
          <div class="sc-dock-submenu" data-dock-submenu="leave">
            <button type="button" data-dock-leave="out" class="sc-dock-subitem bg-orange-600"><span>🚪</span><small>ออกห้อง</small></button>
            <button type="button" data-dock-leave="in" class="sc-dock-subitem bg-emerald-600"><span>↩️</span><small>กลับเข้า</small></button>
          </div>
        </div>
        <div class="sc-dock-group" data-dock-group="score">
          <button type="button" class="sc-dock-main bg-violet-600" data-dock-main-action="score"><span>📊</span><small>ให้คะแนน</small></button>
        </div>
        <div class="sc-dock-group" data-dock-group="star">
          <button type="button" class="sc-dock-main bg-pink-600" data-dock-main-action="star"><span>⭐</span><small>เพิ่มดาว</small></button>
          <div class="sc-dock-submenu" data-dock-submenu="star">
            <button type="button" data-dock-star="open" class="sc-dock-subitem bg-pink-600"><span>⭐</span><small>เปิดคะแนน</small></button>
            <button type="button" data-dock-star="more" class="sc-dock-subitem bg-indigo-600"><span>＋</span><small>คะแนนเพิ่ม</small></button>
          </div>
        </div>
        <button type="button" id="sc-dock-close" class="sc-dock-close" title="ปิดเมนู">✕</button>
      </div>
    </div>

    <div class="relative overflow-hidden bg-white border border-amber-200 rounded-2xl shadow-sm px-5 py-4 mb-4 flex items-center gap-4 flex-wrap">
      <div class="absolute inset-x-0 top-0 h-1" style="background:linear-gradient(90deg,#e6c988,#a9781a,#e6c988)"></div>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold flex-shrink-0">👑 Smart Classroom</span>
      <div class="min-w-0">
        <h1 class="font-bold text-gray-800 text-base truncate">${c(Pe.subject_name??"")} · ${c(w.class_name??"")}</h1>
        <p class="text-xs text-gray-400">${v.length} คน</p>
      </div>
      <div class="min-w-0 border-l border-amber-100 pl-4">
        <p class="text-[10px] font-bold text-amber-500 uppercase tracking-wide">📘 สัปดาห์ที่ ${pe||"—"}</p>
        <p class="text-xs font-semibold ${$e?"text-gray-700":"text-gray-400"} truncate max-w-[240px]">${$e?c($e.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-clock-wrap" class="ml-auto flex-shrink-0 text-right"></div>
      <button id="sc-class-chat" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-amber-700 border border-amber-200 bg-white hover:bg-amber-50 px-3 py-2 rounded-xl">💬 แชทห้องเรียน</button>
      <button id="sc-teaching-ai" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-white px-3 py-2 rounded-xl shadow-sm" style="background:linear-gradient(135deg,#6366f1,#7c3aed)">✨ AI เตรียมการสอน</button>
      <button id="sc-switch-class" class="flex-shrink-0 text-xs font-semibold text-amber-700 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg">🔀 สลับห้อง</button>
      <button id="sc-back" class="flex-shrink-0 text-xs text-gray-400 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">← กลับ</button>
    </div>

    ${Pt("mobile")}

    <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(390px,1fr)] gap-5 items-start">

      <div id="sc-mobile-room-section" class="sc-mobile-app-section mobile-active">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
            <h2 class="text-sm font-bold text-gray-700">👥 นักเรียน — แตะเพื่อดูข้อมูล/สั่งการ</h2>
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button id="sc-organize-class" class="text-xs font-bold px-3 py-1.5 rounded-lg border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100">🪑 จัดห้องเรียน</button>
              <button id="sc-sort-trigger" class="text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100">🔀 เรียงตาม: <span id="sc-sort-label">เลขที่</span></button>
              <button id="sc-open-attendance" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg">✅ เช็คชื่อ</button>
            </div>
          </div>
          <p class="text-xs text-gray-400 mb-3">เด้งป๊อบอัพเช็คชื่อของคาบวันนี้ให้อัตโนมัติ (ถ้าวันนี้มีหลายคาบหรือไม่ตรงตาราง จะให้เลือกคาบเอง)</p>
          ${ae?`<div class="flex items-center flex-wrap gap-2 mb-3 px-3 py-2 rounded-xl bg-red-50 border border-red-100 text-[11px] text-red-700">
            <span class="font-bold">🔴 กำลังสอบสด: ${c(ae.title)}</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-flex items-center justify-center text-[8px]">📝</span>กำลังทำ</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-blue-500 inline-flex items-center justify-center text-[8px]">✅</span>ส่งแล้ว</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-red-500 inline-flex items-center justify-center text-[8px]">🔒</span>ถูกล็อก</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-gray-300 inline-flex items-center justify-center text-[8px]">⚪</span>ยังไม่เข้าสอบ</span>
          </div>`:""}
          <div class="grid ${Mt()} gap-2" id="sc-roster" data-layout="${c(oe.template??"rows")}">${Bt()}</div>
        </div>

        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">🚪 Hall Pass — ออกนอกห้องตอนนี้</h2>
            <button id="sc-leave-quota" class="text-[11px] font-semibold text-amber-700 hover:text-amber-900">⚙️ โควตา (${D.length}/${X})</button>
          </div>
          <div id="sc-pass-list" class="mt-2">${tn()}</div>
        </div>
      </div>

      <div id="sc-mobile-live-section" class="sc-mobile-app-section">
        ${Pt("desktop")}

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-sm font-bold text-gray-700">🧠 เปิดควิซสด</h2>
            <button id="sc-quiz-add" class="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800">+ ควิซ</button>
          </div>
          <div id="sc-quiz-list">${sn()}</div>
        </div>

        <div id="sc-reference-panel" class="sc-reference-panel bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-5 mb-4">
          <div class="sc-mobile-ref-head">
            <div>
              <p id="sc-mobile-ref-title" class="text-sm font-bold text-gray-800">📚 เลือกเครื่องมือรายวิชา</p>
              <p class="text-[11px] text-gray-400">แตะเมนูด้านล่างเพื่อเปลี่ยนหัวข้อ</p>
            </div>
            <button id="sc-mobile-ref-close" type="button" class="min-w-[44px] min-h-[44px] rounded-xl border border-gray-200 bg-white text-gray-500 text-lg">✕</button>
          </div>
          <div id="sc-mobile-ref-subtabs" class="sc-mobile-ref-subtabs"></div>
          <div class="hidden lg:flex items-center justify-between gap-3 mb-4"><div><h2 class="text-base font-extrabold text-gray-800">พื้นที่จัดการรายวิชา</h2><p class="text-xs text-gray-400 mt-0.5">เลือกงานที่ต้องการ ระบบจะแยกข้อมูลและปุ่มสร้างให้ชัดเจน</p></div><span class="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-700">${c(Pe.subject_name??"")}</span></div>
          <div id="sc-reftabs-bar" class="sc-desktop-ref-tabs mb-5">
            ${He.map(e=>`<button data-reftab="${e.key}" class="sc-reftab-btn ${e.key===qe?"active":""}"><span class="sc-ref-tab-icon">${e.icon}</span><span class="min-w-0 text-left"><b>${e.label}${e.key==="assignments"&&fe.length?` (${fe.length})`:""}</b><small>${e.desc}</small></span></button>`).join("")}
          </div>
          <div id="sc-reftab-body-host"><div id="sc-reftab-body" class="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-4 py-8 text-center text-xs text-gray-400">เลือก “กำหนดการสอน” หรือ “แผนการสอน” เพื่อเปิดรายละเอียดเต็ม</div></div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <h2 class="text-sm font-bold text-gray-700 mb-3">🛠️ เครื่องมือห้องเรียน</h2>
          <div class="grid grid-cols-2 gap-2">
            <button id="sc-timer" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">⏱️<br>จับเวลา</button>
            <button id="sc-random" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">🎲<br>สุ่ม/จัดกลุ่ม</button>
            <button id="sc-scan-att" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">📷<br>สแกน QR เช็คชื่อ</button>
            <button id="sc-scan-score" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">📷<br>สแกน QR คะแนน</button>
            <button id="sc-dashboard" class="col-span-2 px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">📈 Dashboard วิเคราะห์ห้องนี้</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">📣 ประกาศของห้องนี้</h2>
            <button id="sc-add-announcement" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สร้างประกาศ</button>
          </div>
          <p class="text-[10px] text-gray-400 mb-2">รวมประกาศที่ตรงกับห้องนี้ทั้งหมด ไม่ว่าจะประกาศจากตรงนี้หรือหน้าประกาศหลัก</p>
          <div id="sc-ann-history">${rn()}</div>
        </div>
      </div>

    </div>

    <nav id="sc-mobile-ref-nav" class="sc-mobile-ref-nav" aria-label="เมนู Smart Classroom">
      ${Ft.map(e=>`<button type="button" data-mobile-group="${e.key}" class="sc-mobile-group-btn sc-mobile-ref-btn ${e.key===Ze?"active":""}">
        <span class="sc-mobile-ref-icon">${e.icon}</span>
        <span>${e.label}</span>
        ${e.key==="work"&&fe.length?`<span class="sc-mobile-ref-count">${fe.length>99?"99+":fe.length}</span>`:""}
      </button>`).join("")}
    </nav>
  </div>`),document.body.classList.add("sc-fullscreen"),document.getElementById("sc-back").addEventListener("click",()=>{window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),document.body.classList.remove("sc-fullscreen"),Re(m,b)}),document.getElementById("sc-switch-class").addEventListener("click",()=>pn()),document.getElementById("sc-open-attendance").addEventListener("click",()=>Wt());const Rt=()=>wt(()=>import("./chat-classroom-CFr0Qc3b.js"),__vite__mapDeps([8,9,3,10,11,12,13,14,6,1,15,16])).then(e=>e.openTeacherClassroomChat(m,b,`${Pe.subject_name??""} · ${w.class_name??""}`)),Qt=()=>Lr(m,b,w,E);(fs=document.getElementById("sc-class-chat"))==null||fs.addEventListener("click",Rt),(ys=document.getElementById("sc-teaching-ai"))==null||ys.addEventListener("click",Qt),document.querySelectorAll("[data-sc-urgent-aid]").forEach(e=>e.addEventListener("click",()=>{const t=z.find(s=>s.id===parseInt(e.dataset.scUrgentAid,10));t&&ns(t)})),document.querySelectorAll(".sc-quick-add-assignment").forEach(e=>e.addEventListener("click",()=>yt()));function Gt(e){return{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:e%60}}function Ut(){const e=document.getElementById("sc-clock-wrap");if(!e){window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null);return}const t=en();if(t.mode==="live"){const{h:s,m:r,s:n}=Gt(t.remainingSec);e.innerHTML=`<p class="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">🟢 กำลังสอน — เหลืออีก</p>
        <p class="text-xl font-extrabold text-emerald-700 font-mono">${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}</p>`}else if(t.mode==="upcoming"){const{d:s,h:r,m:n,s:a}=Gt(t.remainingSec);e.innerHTML=`<p class="text-[10px] text-amber-600 font-bold uppercase tracking-wide">คาบนี้จะเริ่มสอนในอีก</p>
        <p class="text-sm font-extrabold text-amber-700 font-mono">${s>0?s+" วัน ":""}${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}</p>`}else e.innerHTML='<p class="text-[10px] text-gray-400">ไม่พบตารางสอนของห้องนี้</p>'}window._scClockInterval&&clearInterval(window._scClockInterval),Ut(),window._scClockInterval=setInterval(Ut,1e3),window._scQuizPollInterval&&clearInterval(window._scQuizPollInterval),ae&&(window._scQuizPollInterval=setInterval(async()=>{if(!document.getElementById("sc-roster")){clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null;return}const t=await Ls(ae.id).catch(()=>null);t&&(Ue=Object.fromEntries(t.map(s=>[s.student_id,s])),Fe())},4e3));async function pn(){var l;(l=document.getElementById("sc-switch-modal"))==null||l.remove();const e=document.createElement("div");e.id="sc-switch-modal",e.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">🔀 สลับห้องเรียน</h3>
          <button id="sc-switch-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div id="sc-switch-list" class="max-h-80 overflow-y-auto space-y-1.5">
          <div class="text-center py-6 text-xs text-gray-400">กำลังโหลด...</div>
        </div>
      </div>`,document.body.appendChild(e),e.addEventListener("click",o=>{o.target===e&&e.remove()}),e.querySelector("#sc-switch-close").addEventListener("click",()=>e.remove());const t=Number(E.academicYear??E.academic_year),s=Number(E.semester),r=Number.isInteger(t)&&t>0&&[1,2].includes(s),n=(await Qe(m.id).catch(()=>[])).filter(o=>r&&Number(o.academic_year)===t&&Number(o.semester)===s&&o.id!==b),a=e.querySelector("#sc-switch-list");if(!n.length){a.innerHTML='<p class="text-center py-6 text-xs text-gray-400">ไม่มีห้องอื่นให้สลับ</p>';return}a.innerHTML=n.map(o=>{var d;return`
      <button class="sc-switch-btn w-full text-left px-3 py-2.5 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition" data-cid="${o.id}">
        <p class="text-sm font-semibold text-gray-700 truncate">${c(o.class_name??"")}</p>
        <p class="text-xs text-gray-400 truncate">${c(((d=o.master_subjects)==null?void 0:d.subject_name)??"")}</p>
      </button>`}).join(""),a.querySelectorAll(".sc-switch-btn").forEach(o=>o.addEventListener("click",()=>{const d=parseInt(o.dataset.cid,10);e.remove(),Ee(m,d)}))}async function Wt(){var s,r;const e=document.getElementById("sc-open-attendance");e.disabled=!0;const t=e.textContent;e.textContent="⏳";try{const n=((s=w.master_subjects)==null?void 0:s.credit)??1,a=((r=w.master_subjects)==null?void 0:r.subject_group)==="ACDMVOC",l=a?await ks(b).catch(()=>[]):[],o=As(w,n,l.length?l:null,a),d=Bs(new Date),f=o.filter(u=>u.ds===d);if(f.length===1)await qs(m,w,f[0].n,{});else if(f.length>1)Vt(o,f[0].n,"วันนี้มีหลายคาบ — เลือกคาบที่จะเช็คชื่อ");else{const u=new Date(d).getTime();let i=o[0],p=1/0;for(const _ of o){const L=Math.abs(new Date(_.ds).getTime()-u);L<p&&(p=L,i=_)}Vt(o,i==null?void 0:i.n,"วันนี้ไม่ตรงกับตารางสอนของห้องนี้ — เลือกคาบเอง (เลื่อนไปคาบใกล้วันนี้ที่สุดให้แล้ว)")}}catch(n){x("เปิดหน้าเช็คชื่อไม่สำเร็จ: "+N(n),"error")}finally{e.disabled=!1,e.textContent=t}}function Vt(e,t,s){var a;(a=document.getElementById("sc-session-picker"))==null||a.remove();const r=document.createElement("div");r.id="sc-session-picker",r.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">✅ เลือกคาบเช็คชื่อ</h3>
          <button id="sc-sess-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <p class="text-xs text-gray-400">${c(s)}</p>
        <div class="max-h-72 overflow-y-auto space-y-1.5" id="sc-sess-list">
          ${e.map(l=>`<button class="sc-sess-btn w-full text-left px-3 py-2.5 rounded-xl border transition text-sm font-semibold ${l.n===t?"border-indigo-400 bg-indigo-50 text-indigo-700":"border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700"}" data-n="${l.n}">
            คาบที่ ${l.n} <span class="${l.n===t?"text-indigo-400":"text-gray-400"} font-normal">· ${c(l.ds)}</span>${l.n===t?' <span class="text-[10px] text-indigo-500">← ใกล้วันนี้ที่สุด</span>':""}
          </button>`).join("")}
        </div>
      </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#sc-sess-close").addEventListener("click",()=>r.remove()),r.querySelectorAll(".sc-sess-btn").forEach(l=>l.addEventListener("click",async()=>{const o=parseInt(l.dataset.n,10);r.remove();try{await qs(m,w,o,{})}catch(d){x("เปิดคาบนี้ไม่สำเร็จ: "+N(d),"error")}}));const n=r.querySelector(`.sc-sess-btn[data-n="${t}"]`);n==null||n.scrollIntoView({block:"center"})}const Fe=()=>{const e=document.getElementById("sc-roster");e&&(e.className=`grid ${Mt()} gap-2`,e.dataset.layout=oe.template??"rows",e.innerHTML=Bt())};function Yt(e){const t=String(e.gender??e.sex??"").trim().toLowerCase();return["ชาย","male","m","ช"].includes(t)?0:["หญิง","female","f","ญ"].includes(t)?1:2}function mn(){var r;(r=document.getElementById("sc-class-organizer"))==null||r.remove();const e=document.createElement("div");e.id="sc-class-organizer",e.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/50 p-4 overflow-y-auto";const t=Ct(),s=()=>{var l,o;((l=e.querySelector("#sc-organizer-template"))==null?void 0:l.value)??oe.template;const n=((o=e.querySelector("#sc-organizer-gender"))==null?void 0:o.checked)??!!oe.splitGender,a=[...t].sort((d,f)=>n&&Yt(d)-Yt(f)||(W.get(d.id)??0)-(W.get(f.id)??0));e.querySelector("#sc-organizer-preview").innerHTML=a.map((d,f)=>`
        <div draggable="true" data-organizer-student="${d.id}" class="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-2.5 py-2 cursor-grab active:cursor-grabbing hover:border-violet-300">
          <span class="text-[10px] font-bold text-gray-400 w-5">${f+1}</span>
          <div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 text-[10px] font-bold flex-shrink-0">${d.image_url?`<img src="${c(d.image_url)}" class="w-full h-full object-cover"/>`:c((d.full_name??"?").charAt(0))}</div>
          <span class="text-xs font-semibold text-gray-700 truncate">${c(d.full_name??"")}</span>
          <span class="ml-auto text-[10px] text-gray-400">${c(d.gender??"")}</span>
        </div>`).join(""),e.querySelectorAll("[data-organizer-student]").forEach(d=>{d.addEventListener("dragstart",()=>d.classList.add("opacity-40")),d.addEventListener("dragend",()=>d.classList.remove("opacity-40")),d.addEventListener("dragover",f=>f.preventDefault()),d.addEventListener("drop",f=>{f.preventDefault();const u=e.querySelector(".opacity-40[data-organizer-student]");if(!u||u===d)return;const i=[...e.querySelectorAll("[data-organizer-student]")],p=i.indexOf(u),_=i.indexOf(d);p<_?d.after(u):d.before(u),e.querySelectorAll("[data-organizer-student]").forEach((L,S)=>{L.querySelector("span").textContent=S+1})})})};e.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xl my-8 overflow-hidden">
        <div class="p-5 border-b border-gray-100 flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-gray-800">🪑 จัดห้องเรียน</h3><p class="text-xs text-gray-400 mt-1">เลือกแม่แบบ แล้วลากการ์ดเพื่อปรับตำแหน่งได้</p></div>
          <button id="sc-organizer-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button>
        </div>
        <div class="p-5 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="text-xs font-bold text-gray-600">รูปแบบการ์ด
              <select id="sc-organizer-template" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700">
                <option value="rows">แถวปกติ</option><option value="pairs">คู่/กลุ่มย่อย</option><option value="groups">กลุ่ม 4–5 คน</option><option value="circle">วงกลม/กิจกรรม</option>
              </select>
            </label>
            <label class="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 text-xs font-bold text-gray-600 self-end"><input id="sc-organizer-gender" type="checkbox" class="accent-violet-600"/> แยกชาย/หญิงเป็นโซน</label>
          </div>
          <div class="rounded-2xl bg-violet-50 border border-violet-100 p-3"><p class="text-[11px] text-violet-700 mb-2">ลากการ์ดเพื่อจัดลำดับเอง · ระบบจะคงเลขที่จริงของนักเรียนไว้</p><div id="sc-organizer-preview" class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto"></div></div>
          <div class="flex justify-end gap-2"><button id="sc-organizer-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button id="sc-organizer-save" class="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold">บันทึกผังห้อง</button></div>
        </div>
      </div>`,document.body.appendChild(e),e.querySelector("#sc-organizer-template").value=oe.template??"rows",e.querySelector("#sc-organizer-gender").checked=!!oe.splitGender,e.querySelector("#sc-organizer-template").addEventListener("change",s),e.querySelector("#sc-organizer-gender").addEventListener("change",s),e.querySelector("#sc-organizer-close").addEventListener("click",()=>e.remove()),e.querySelector("#sc-organizer-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.querySelector("#sc-organizer-save").addEventListener("click",()=>{oe={template:e.querySelector("#sc-organizer-template").value,splitGender:e.querySelector("#sc-organizer-gender").checked,order:[...e.querySelectorAll("[data-organizer-student]")].map(n=>Number(n.dataset.organizerStudent))},Zs(),Fe(),e.remove(),x("บันทึกผังห้องเรียนแล้ว ✅","success")}),s()}async function bn(e,t){var u,i;const s=((u=w.master_subjects)==null?void 0:u.credit)??1,r=((i=w.master_subjects)==null?void 0:i.subject_group)==="ACDMVOC",n=r?await ks(b).catch(()=>[]):[],a=As(w,s,n.length?n:null,r),l=Bs(new Date),o=a.filter(p=>p.ds===l);if(o.length!==1){x("วันนี้มีหลายคาบหรือไม่ตรงตาราง ระบบจะเปิดหน้าเช็คชื่อให้เลือกคาบ","warning"),Wt();return}await er(b,e.id,o[0].n,l,t);const d=Le[e.id]??(Le[e.id]=[]),f=d.find(p=>p.session_number===o[0].n);f?f.status=t:d.push({student_id:e.id,session_number:o[0].n,check_date:l,status:t}),Fe(),x(`บันทึก ${rt[t].label} ${e.full_name} แล้ว`,"success")}const bt=document.getElementById("sc-roster"),te=document.getElementById("sc-student-action-dock");let Ke=null,me=null;const xt=()=>{if(!me||te.classList.contains("hidden"))return;const e=me.getBoundingClientRect(),t=te.offsetHeight||174,s=e.top,r=e.left+e.width/2,n=e.top+e.height/2,a=s>=126;te.classList.toggle("submenu-above",a),te.classList.remove("above","below"),te.style.left=`${r}px`,te.style.top=`${n-t/2}px`},gt=()=>{me==null||me.classList.remove("is-focus"),me=null,Ke=null,te.classList.add("hidden"),te.querySelectorAll(".sc-dock-group.is-open").forEach(e=>e.classList.remove("is-open"))},Xt=(e,t)=>{!e||!t||(me==null||me.classList.remove("is-focus"),Ke=e.id,me=t,me.classList.add("is-focus"),te.classList.remove("hidden"),xt())};bt.addEventListener("pointerover",e=>{const t=e.target.closest("[data-student-wrap]");!t||!bt.contains(t)||e.relatedTarget&&t.contains(e.relatedTarget)||Xt(Ge[parseInt(t.dataset.sid,10)],t)}),bt.addEventListener("click",e=>{const t=e.target.closest(".sc-stu");if(!t)return;const s=t.closest("[data-student-wrap]");Xt(Ge[parseInt(t.dataset.sid,10)],s),e.stopPropagation()}),te.addEventListener("click",async e=>{const t=Ge[Ke];if(!t)return;const s=e.target.closest("[data-dock-main-action]");if(s){if(s.dataset.dockMainAction==="score"){Jt(t,"score");return}const o=s.closest(".sc-dock-group"),d=o.classList.contains("is-open");te.querySelectorAll(".sc-dock-group.is-open").forEach(f=>f.classList.remove("is-open")),d||o.classList.add("is-open");return}const r=e.target.closest("[data-dock-att-status]");if(r){te.querySelectorAll(".sc-dock-group.is-open").forEach(l=>l.classList.remove("is-open"));try{await bn(t,r.dataset.dockAttStatus)}catch(l){x("บันทึกเช็คชื่อไม่สำเร็จ: "+N(l),"error")}return}const n=e.target.closest("[data-dock-leave]");if(n){te.querySelectorAll(".sc-dock-group.is-open").forEach(l=>l.classList.remove("is-open")),n.dataset.dockLeave==="in"&&ge[t.id]?kt(ge[t.id].id,"returned").then(()=>{x("บันทึกกลับเข้าห้องแล้ว","success"),P()}).catch(l=>x("บันทึกไม่สำเร็จ: "+N(l),"error")):n.dataset.dockLeave==="out"&&js(m,w,t.id,t.full_name,t.image_url,ge,X,P);return}e.target.closest("[data-dock-star]")&&(te.querySelectorAll(".sc-dock-group.is-open").forEach(l=>l.classList.remove("is-open")),Jt(t,"score"))}),document.getElementById("sc-dock-close").addEventListener("click",gt),window.addEventListener("scroll",xt,!0),window.addEventListener("resize",xt),document.addEventListener("keydown",e=>{e.key==="Escape"&&gt()}),document.addEventListener("click",e=>{Ke&&!e.target.closest("#sc-student-action-dock")&&!e.target.closest("[data-student-wrap]")&&gt()}),document.getElementById("sc-organize-class").addEventListener("click",mn);function xn(e,t){U={key:e,label:t},document.getElementById("sc-sort-label").textContent=t,Fe()}document.getElementById("sc-sort-trigger").addEventListener("click",()=>gn());function gn(){var l;(l=document.getElementById("sc-sort-panel"))==null||l.remove();const e=document.getElementById("sc-sort-trigger"),t=e.getBoundingClientRect(),s=document.createElement("div");s.id="sc-sort-panel",s.className="fixed z-[96] bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 max-h-[70vh] overflow-hidden flex flex-col animate-fade",s.style.top=`${Math.min(t.bottom+6,window.innerHeight-300)}px`,s.style.left=`${Math.min(t.left,window.innerWidth-300)}px`;const r=[{key:"seatno",label:"เลขที่ (ค่าเริ่มต้น)"},{key:"name",label:"ชื่อ-สกุล (ก–ฮ)"},{key:"total",label:"คะแนนรวมทั้งเทอม (สูง→ต่ำ)"},{key:"att",label:"คะแนนการมาเรียน (สูง→ต่ำ)"}];s.innerHTML=`
      <div class="p-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-xs font-bold text-gray-500 mb-2">เรียงลำดับตาม</p>
        <div class="space-y-1">
          ${r.map(o=>`<button data-sortkey="${o.key}" data-sortlabel="${c(o.label)}" class="sc-sort-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${U.key===o.key?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${o.label}</button>`).join("")}
        </div>
      </div>
      <div class="p-3 flex-1 overflow-y-auto min-h-0">
        <p class="text-xs font-bold text-gray-500 mb-2">คะแนนรายช่อง</p>
        ${H.length>8?'<input id="sc-sort-search" type="text" placeholder="พิมพ์ค้นหาชื่อคอลัมน์..." class="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />':""}
        <div id="sc-sort-col-list" class="space-y-1">
          ${H.length?H.map(o=>`<button data-sortkey="col:${o.id}" data-sortlabel="${c(o.assignment_name??"")}" data-search="${c((o.assignment_name??"").toLowerCase())}" class="sc-sort-opt sc-sort-col-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${U.key==="col:"+o.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${c(o.assignment_name??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>'}
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100">
          <p class="text-xs font-bold text-gray-500 mb-1">📚 งานที่มอบหมาย</p>
          <p class="text-[10px] text-gray-400 mb-2">เรียง: รอตรวจ → ยังไม่ส่ง → ตรวจแล้ว พร้อมแสดงสถานะบนการ์ด</p>
          <div class="space-y-1">
            ${z.length?z.map(o=>`<button data-sortkey="assignment:${o.id}" data-sortlabel="งาน: ${c(o.title??"")}" class="sc-sort-opt w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition ${U.key==="assignment:"+o.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${c(o.title??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีงานที่มอบหมาย</p>'}
          </div>
        </div>
      </div>`,document.body.appendChild(s),s.querySelectorAll(".sc-sort-opt").forEach(o=>o.addEventListener("click",()=>{xn(o.dataset.sortkey,o.dataset.sortlabel),s.remove()}));const n=s.querySelector("#sc-sort-search");n==null||n.addEventListener("input",()=>{const o=n.value.trim().toLowerCase();s.querySelectorAll(".sc-sort-col-opt").forEach(d=>{d.style.display=!o||d.dataset.search.includes(o)?"":"none"})});const a=o=>{s.contains(o.target)||o.target===e||(s.remove(),document.removeEventListener("mousedown",a,!0))};setTimeout(()=>document.addEventListener("mousedown",a,!0),0)}const fn=[{key:"info",label:"👤 ข้อมูล"},{key:"score",label:"📝 คะแนน"},{key:"att",label:"✅ มาเรียน"},{key:"leave",label:"🚪 ออกห้อง"}];function yn(e){var r;const t=ge[e.id],s=ae?Ue[e.id]:null;return`
      <div class="space-y-2">
        ${ae?`
          <div class="px-3 py-2.5 rounded-xl bg-red-50 border border-red-100">
            <p class="text-xs text-red-700 font-bold mb-1">🔴 ${c(ae.title)}</p>
            ${s?`
              <p class="text-xs text-gray-600">${s.status==="in_progress"?"📝 กำลังทำอยู่":s.status==="submitted"?`✅ ส่งแล้ว${s.score_pct!=null?` · คะแนน ${s.score_pct.toFixed(1)}%`:""}`:s.status==="terminated_violation"?"🔒 ถูกล็อกจากการทำผิดกติกา":s.status}${(r=s.question_order)!=null&&r.length?` · ตอบแล้ว ${Object.keys(s.answers??{}).length}/${s.question_order.length} ข้อ`:""}</p>
              ${s.status==="terminated_violation"?`<button id="sc-sp-unlock" data-attempt="${s.id}" class="w-full mt-2 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600">🔓 ปลดล็อกให้ทำต่อ</button>`:""}
            `:'<p class="text-xs text-gray-500">⚪ ยังไม่เข้าสอบ</p>'}
            <button id="sc-sp-quiz-monitor" class="w-full mt-2 py-1.5 rounded-xl border border-red-200 text-red-600 text-[11px] font-bold hover:bg-red-100">เปิดหน้าจัดการสอบสดแบบเต็ม →</button>
          </div>
        `:""}
        ${t?`
          <div class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
            <div class="text-xs text-amber-800"><b>🚪 ออกนอกห้องอยู่</b><br>${c(t.reason??"")} · ${Ds(t.created_at)}</div>
          </div>
          <button id="sc-sp-return" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700">✅ บันทึกกลับเข้าห้องแล้ว</button>
        `:`
          <button id="sc-sp-leave" class="w-full py-2.5 rounded-xl bg-amber-500 text-white text-sm font-bold hover:bg-amber-600">🚪 อนุญาตออกนอกห้อง</button>
        `}
      </div>`}const vn=e=>e>=80?4:e>=75?3.5:e>=70?3:e>=65?2.5:e>=60?2:e>=55?1.5:e>=50?1:0,hn=e=>e>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:e>=2.5?{label:"ดี",cls:"text-blue-600"}:e>=1?{label:"ผ่าน",cls:"text-amber-600"}:{label:"ไม่ผ่าน",cls:"text-red-600"},je=e=>Number.isFinite(e)?String(Number(e.toFixed(2))):"—";function wn(e){if(!H.length)return'<p class="text-center py-6 text-xs text-gray-400">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>';const t=ue[e.id]??[],s=H.filter(k=>k.column_type==="bonus"),r=H.filter(k=>k.column_type==="derived"),n=H.filter(k=>(k.column_type??"regular")==="regular"),a=n.filter(k=>k.assignment_type!=="final"&&k.assignment_type!=="ปลายภาค"),l=n.filter(k=>k.assignment_type==="final"||k.assignment_type==="ปลายภาค"),o=Cr(s),d=k=>{var h;return parseFloat((h=t.find($=>$.score_column_id===k.id))==null?void 0:h.score)||0},f=k=>{const h=d(k);if(!k.bonus_formula)return h;const $=Object.fromEntries(o.map(j=>[j.var,d(j)])),q=zs(k.bonus_formula,$)??0;return k.max_score?Math.min(h+q,parseFloat(k.max_score)):h+q},u=k=>{if(!k.formula)return 0;const h=Object.fromEntries((k.formula_refs??[]).map($=>{const q=H.find(j=>j.id===$.col_id);return[$.var,q?d(q):0]}));return zs(k.formula,h)??0},i=k=>k.reduce((h,$)=>h+(parseFloat($.max_score)||0),0),p=k=>k.reduce((h,$)=>h+f($),0),_=i(a),L=i(l),S=i(r),T=p(a),g=p(l),A=r.reduce((k,h)=>k+u(h),0),I=_+L+S,B=T+g+A,C=Math.round(B),F=I>0?C/I*100:0,y=vn(F),V=hn(y),re=(k,h)=>{const $=t.find(be=>be.score_column_id===k.id),q=($==null?void 0:$.score)??"",j=q!==""&&parseFloat(k.max_score)>0?parseFloat(q)/parseFloat(k.max_score)*100:null;return`<tr class="border-b border-gray-50 last:border-0">
        <td class="py-2 px-2 text-gray-700 text-[11px] font-semibold">${c(k.assignment_name??"—")}</td>
        <td class="py-1 px-1 text-center"><input type="number" class="sc-score-input w-16 text-center border border-gray-200 rounded-lg px-1 py-1 font-mono font-bold ${h} focus:outline-none focus:ring-2 focus:ring-indigo-300" data-col="${k.id}" value="${q}" max="${k.max_score??""}" placeholder="—" /></td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-400">/${k.max_score??0}</td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-500">${j==null?"—":j.toFixed(0)+"%"}</td>
      </tr>`},Z=(k,h,$,q,j)=>h.length?`<div>
      <h4 class="font-bold ${j.title} text-sm mb-2">${k}</h4>
      <div class="overflow-hidden rounded-xl border ${j.border}"><table class="w-full table-fixed">
        <thead><tr class="${j.head} text-gray-500"><th class="py-1.5 px-2 text-left text-[10px] w-[44%]">ชื่องาน</th><th class="py-1.5 text-center text-[10px]">คะแนน</th><th class="py-1.5 text-center text-[10px]">เต็ม</th><th class="py-1.5 text-center text-[10px]">%</th></tr></thead>
        <tbody>${h.map(be=>re(be,j.input)).join("")}</tbody>
        <tfoot><tr class="${j.head} font-bold"><td class="py-2 px-2 ${j.title} text-xs">รวม</td><td class="py-2 text-center ${j.title} text-xs">${je($)}</td><td class="py-2 text-center text-gray-400 text-xs">/${je(q)}</td><td class="py-2 text-center ${j.title} text-xs">${q>0?($/q*100).toFixed(1):0}%</td></tr></tfoot>
      </table></div>
    </div>`:"";return`
      <div class="space-y-4">
        ${Z("📘 กลางภาค",a,T,_,{title:"text-blue-700",border:"border-blue-100",head:"bg-blue-50",input:"text-blue-600"})}
        ${Z("📙 ปลายภาค",l,g,L,{title:"text-purple-700",border:"border-purple-100",head:"bg-purple-50",input:"text-purple-600"})}
        ${r.length?`<div class="rounded-xl border border-indigo-100 bg-indigo-50/50 px-3 py-2.5"><p class="text-xs font-bold text-indigo-700 mb-1">🧮 คะแนนคำนวณ</p>${r.map(k=>`<div class="flex justify-between text-[11px] py-1"><span class="text-gray-600">${c(k.assignment_name??"")}</span><b class="text-indigo-700">${je(u(k))}/${je(parseFloat(k.max_score)||0)}</b></div>`).join("")}</div>`:""}
        <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-4 text-center border border-amber-100">
          <p class="text-xs text-gray-500 mb-1">คะแนนรวมทั้งภาค</p>
          <p class="text-3xl font-extrabold text-amber-700">${je(C)}<span class="text-sm font-normal text-gray-400">/${je(I)}</span></p>
          <p class="text-[11px] text-gray-400 mt-0.5">คะแนนจริง ${je(B)} · ${F.toFixed(1)}%</p>
          <p class="text-xl font-bold text-purple-700 mt-1">เกรด ${y>0?y.toFixed(1):"0"} <span class="text-sm ${V.cls}">— ${V.label}</span></p>
        </div>
        <p class="text-[10px] text-gray-400 text-center">คำนวณด้วยกลุ่มกลางภาค/ปลายภาค สูตร และคะแนนโบนัสแบบเดียวกับหน้าคะแนนหลัก</p>
      </div>`}const kn={present:"#059669",absent:"#dc2626",late:"#f59e0b",excused:"#3b82f6",sick:"#f97316"};function _n(e){const t=(Le[e.id]??[]).slice().sort((i,p)=>(p.check_date??"").localeCompare(i.check_date??""));if(!t.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีข้อมูลเช็คชื่อ</p>';const s=["present","absent","late","excused","sick"],r={};for(const i of t)r[i.status]=(r[i.status]??0)+1;const n=t.length;let a=0;const l=s.filter(i=>r[i]).map(i=>{const p=r[i]/n*100,_=`${kn[i]} ${a}% ${a+p}%`;return a+=p,_}),o=l.length?`conic-gradient(${l.join(",")})`:"#e5e7eb",d=Math.round((r.present??0)/n*100),f=s.filter(i=>r[i]).map(i=>{const p=rt[i];return`<span class="px-2 py-1 rounded-full text-[11px] font-bold ${(p==null?void 0:p.bg)??"bg-gray-50"} ${(p==null?void 0:p.color)??"text-gray-500"}">${(p==null?void 0:p.label)??i} ${r[i]}</span>`}).join(" "),u=t.slice(0,15).map(i=>{const p=rt[i.status];return`<div class="flex items-center justify-between px-3 py-1.5 text-xs border-b border-gray-50">
        <span class="text-gray-500">${c(i.check_date??"")} · คาบ ${i.session_number}</span>
        <span class="font-bold ${(p==null?void 0:p.color)??"text-gray-500"}">${(p==null?void 0:p.label)??i.status}</span>
      </div>`}).join("");return`
      <div class="flex items-center gap-4 mb-3">
        <div class="relative flex-shrink-0" style="width:72px;height:72px;border-radius:50%;background:${o}">
          <div class="absolute" style="inset:7px;background:white;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <span class="text-sm font-bold text-gray-800">${d}%</span>
            <span class="text-[8px] text-gray-400">มาเรียน</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 flex-1">${f}</div>
      </div>
      <div class="max-h-48 overflow-y-auto border-t border-gray-100 pt-2">${u}</div>`}function $n(e){const t=We[e.id]??[];return t.length?`<div class="max-h-64 overflow-y-auto space-y-1.5">${t.map(s=>{const r=s.status==="returned"?"กลับแล้ว":s.status==="overdue"?"เลยเวลา":"ยังไม่กลับ",n=s.status==="returned"?"text-emerald-600":s.status==="overdue"?"text-red-600":"text-amber-600";return`<div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-gray-700">${c(s.reason??"")}</span>
          <span class="font-bold ${n}">${r}</span>
        </div>
        <div class="text-gray-400 mt-0.5">${new Date(s.created_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})} · ขออนุญาต ${s.allowed_duration} นาที</div>
      </div>`}).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ไม่เคยขอออกนอกห้องในวิชานี้</p>'}function Jt(e,t="info"){var l;(l=document.getElementById("sc-student-modal"))==null||l.remove();let s=t,r=e;const n=document.createElement("div");n.id="sc-student-modal",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",document.body.appendChild(n);const a=()=>{var f,u,i,p,_,L,S,T;ge[r.id];const o=v.findIndex(g=>g.id===r.id);n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[88vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0">
            <div class="flex items-center gap-3">
              <button id="sc-sp-prev" ${o<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl flex-shrink-0">
                ${r.image_url?`<img src="${c(r.image_url)}" class="w-full h-full object-cover"/>`:c((r.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate">${c(r.full_name??"—")}</p>
                <p class="text-xs text-gray-400">${c(r.student_code??"")} · ${c(r.main_room??"")} · เลขที่ ${W.get(r.id)??"—"}</p>
              </div>
              <button id="sc-sp-next" ${o>=v.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sc-sp-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sc-sp-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sc-sp-jump" type="number" min="1" max="${v.length}" value="${W.get(r.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${v.length}</span>
            </div>
          </div>
          <div class="px-5 pb-3 flex-shrink-0">
            <div class="sc-tabbar w-full">
              ${fn.map(g=>`<button data-tab="${g.key}" class="sc-sp-tab sc-tab-pill ${s===g.key?"active":""}">${g.label}</button>`).join("")}
            </div>
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${s==="info"?yn(r):s==="score"?wn(r):s==="att"?_n(r):$n(r)}
          </div>
        </div>`,n.querySelector("#sc-sp-close").addEventListener("click",()=>n.remove()),(f=n.querySelector("#sc-sp-prev"))==null||f.addEventListener("click",()=>{o>0&&(r=v[o-1],s="info",a())}),(u=n.querySelector("#sc-sp-next"))==null||u.addEventListener("click",()=>{o<v.length-1&&(r=v[o+1],s="info",a())});const d=()=>{const g=n.querySelector("#sc-sp-jump"),A=parseInt(g.value,10),I=Et.get(A);if(!I){x(`ไม่พบเลขที่ ${g.value}`,"warning"),g.value=W.get(r.id)??"";return}I.id!==r.id&&(r=I,s="info",a())};(i=n.querySelector("#sc-sp-jump"))==null||i.addEventListener("change",d),(p=n.querySelector("#sc-sp-jump"))==null||p.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),d())}),n.querySelectorAll(".sc-sp-tab").forEach(g=>g.addEventListener("click",()=>{s=g.dataset.tab,a()})),n.querySelectorAll(".sc-score-input").forEach(g=>{g.addEventListener("change",async()=>{var B;const A=parseInt(g.dataset.col,10),I=g.value.trim();g.disabled=!0;try{await Kn(b,r.id,A,I===""?null:I);const C=ue[B=r.id]??(ue[B]=[]),F=C.find(V=>V.score_column_id===A),y=I===""?null:parseFloat(I);F?F.score=y:C.push({student_id:r.id,score_column_id:A,score:y}),x("บันทึกคะแนนแล้ว","success"),a()}catch(C){x("บันทึกไม่สำเร็จ: "+N(C),"error"),g.disabled=!1}})}),(_=n.querySelector("#sc-sp-return"))==null||_.addEventListener("click",async()=>{const g=ge[r.id];try{await kt(g.id,"returned"),x("บันทึกกลับเข้าห้องแล้ว","success"),n.remove(),P()}catch(A){x("บันทึกไม่สำเร็จ: "+N(A),"error")}}),(L=n.querySelector("#sc-sp-leave"))==null||L.addEventListener("click",()=>{if(Object.keys(ge).length>=X){x(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${X} คนแล้ว`,"warning");return}n.remove(),js(m,w,r.id,r.full_name,r.image_url,ge,X,()=>P())}),(S=n.querySelector("#sc-sp-quiz-monitor"))==null||S.addEventListener("click",()=>{ae&&Is(ae)}),(T=n.querySelector("#sc-sp-unlock"))==null||T.addEventListener("click",g=>{const A=g.target.dataset.attempt;Sn(A,()=>{n.remove(),P()})})};n.addEventListener("click",o=>{o.target===n&&n.remove()}),a()}function Sn(e,t){const s=document.createElement("div");s.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4",s.innerHTML=`
      <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
        <div class="text-4xl mb-3">🔓</div>
        <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
        <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
        <div class="space-y-2">
          <button id="qu-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
          <button id="qu-restart" class="sc-btn-dark w-full py-3 rounded-2xl font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
          <button id="qu-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
        </div>
      </div>`,document.body.appendChild(s),s.querySelector("#qu-cancel").addEventListener("click",()=>s.remove());const r=async n=>{s.remove();try{await pr(e,n),x(n==="resume"?"ปลดล็อก — ทำต่อจากจุดเดิมแล้ว":"ปลดล็อก — เริ่มชุดใหม่แล้ว","success"),t==null||t()}catch(a){x("ปลดล็อกไม่สำเร็จ: "+N(a),"error")}};s.querySelector("#qu-resume").addEventListener("click",()=>r("resume")),s.querySelector("#qu-restart").addEventListener("click",()=>r("restart"))}document.getElementById("sc-pass-list").addEventListener("click",async e=>{const t=e.target.closest(".sc-return-btn");if(t)try{await kt(t.dataset.lid,"returned"),x("บันทึกกลับเข้าห้องแล้ว","success"),P()}catch(s){x("บันทึกไม่สำเร็จ: "+N(s),"error")}}),document.getElementById("sc-leave-quota").addEventListener("click",()=>{yr(w,X,ve,()=>P())}),document.getElementById("sc-timer").addEventListener("click",()=>Sr(b,w,St)),document.getElementById("sc-random").addEventListener("click",()=>{const e=v.map((t,s)=>({...t,seat_no:s+1}));Er(b,w,e,St)}),document.getElementById("sc-scan-att").addEventListener("click",()=>vr(m)),document.getElementById("sc-scan-score").addEventListener("click",()=>fr({classId:b,className:w.class_name})),document.getElementById("sc-dashboard").addEventListener("click",()=>$r(b,w,window._pp5DonorTierIndex??0,E)),document.getElementById("sc-quiz-add").addEventListener("click",()=>nn()),document.getElementById("sc-quiz-list").addEventListener("click",async e=>{const t=e.target.closest(".sc-quiz-start"),s=e.target.closest(".sc-quiz-monitor"),r=e.target.closest(".sc-quiz-close"),n=e.target.closest(".sc-quiz-analytics");if(t)try{await cr(t.dataset.qid),x("เริ่มควิซให้ห้องนี้แล้ว 🧠","success"),P()}catch(a){x("เริ่มควิซไม่สำเร็จ: "+N(a),"error")}else if(s){const a=ee.find(l=>l.id===s.dataset.qid);a&&Is(a)}else if(r){const a=ee.find(f=>f.id===r.dataset.qid);if(!a)return;const l=H.find(f=>String(f.id)===String(a.score_column_id)),o={highest:"เทียบเอาคะแนนสูงกว่า",overwrite:"ทับคะแนนเก่า",add:"บวกเพิ่มจากคะแนนเดิม"}[a.score_write_mode]??"ตามการตั้งค่าแบบทดสอบ",d=await Bn({quizTitle:a.title,hasScoreColumn:!!a.score_column_id,targetColumn:(l==null?void 0:l.assignment_name)??"",writeModeLabel:o});if(!d)return;try{await ur(a.id,{writeScores:d==="write_scores"}),x(d==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),P()}catch(f){x("ปิดสอบไม่สำเร็จ: "+N(f),"error")}}else if(n){const a=ee.find(l=>l.id===n.dataset.qid);a&&_r(a)}}),document.getElementById("sc-add-announcement").addEventListener("click",()=>En());function En(){var r;(r=document.getElementById("sc-ann-modal"))==null||r.remove();let e=null;const t=document.createElement("div");t.id="sc-ann-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📣 สร้างประกาศ — ${c(w.class_name??"")}</h3>
          <button id="ca-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ข้อความประกาศ *</label>
          <textarea id="ca-text" rows="3" placeholder="เช่น พรุ่งนี้เตรียมสมุดการบ้านมาส่งด้วยนะ"
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ประเภทประกาศ</label>
          <div id="ca-type-chips" class="flex flex-wrap gap-1.5 mb-2">
            ${ot.map(n=>`<button type="button" data-emoji="${n.emoji}" data-label="${c(n.label)}" class="ca-type-chip px-2.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50 transition">${n.emoji} ${n.label}</button>`).join("")}
          </div>
          <input id="ca-type-custom" type="text" list="ca-type-list" placeholder="หรือพิมพ์ประเภทใหม่เอง..."
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <datalist id="ca-type-list">${_t.map(n=>`<option value="${c(n)}"></option>`).join("")}</datalist>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">แนบไฟล์/รูปภาพ (เลือกได้หลายไฟล์ ไม่บังคับ)</label>
          <input id="ca-files" type="file" multiple class="w-full text-xs" />
        </div>
        <button id="ca-send" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">ส่งประกาศ</button>
      </div>`,document.body.appendChild(t),t.addEventListener("click",n=>{n.target===t&&t.remove()}),t.querySelector("#ca-close").addEventListener("click",()=>t.remove());const s=t.querySelector("#ca-type-custom");t.querySelectorAll(".ca-type-chip").forEach(n=>n.addEventListener("click",()=>{e=`${n.dataset.emoji} ${n.dataset.label}`,s.value="",t.querySelectorAll(".ca-type-chip").forEach(a=>a.classList.remove("border-amber-400","bg-amber-100","text-amber-800")),n.classList.add("border-amber-400","bg-amber-100","text-amber-800")})),s.addEventListener("input",()=>{s.value.trim()&&(e=null,t.querySelectorAll(".ca-type-chip").forEach(n=>n.classList.remove("border-amber-400","bg-amber-100","text-amber-800")))}),t.querySelector("#ca-send").addEventListener("click",async()=>{const n=t.querySelector("#ca-text").value.trim();if(!n){x("พิมพ์ข้อความก่อนส่งนะ","warning");return}const a=s.value.trim()||e||`${ot[0].emoji} ${ot[0].label}`,l=t.querySelector("#ca-send");l.disabled=!0,l.textContent="กำลังส่ง...";try{const o=[...t.querySelector("#ca-files").files??[]],d=[];for(const f of o)d.push(await Cs(f,`class-${b}/announcements`));await Yn({title:`📣 ${w.class_name}`,body:n,isActive:!0,teacherId:m.id,targetClassIds:[b],annType:a,attachmentUrls:d.length?d:null}),At(`${a} — ${w.class_name}`,n.slice(0,120),"sc-announcement"),x("ส่งประกาศถึงห้องนี้แล้ว 📣","success"),t.remove(),P()}catch(o){x("ส่งไม่สำเร็จ: "+N(o),"error"),l.disabled=!1,l.textContent="ส่งประกาศ"}})}let et="daily";function Zt(){document.querySelectorAll(".sc-reftab-btn").forEach(s=>{s.classList.toggle("active",s.dataset.reftab===qe)});const e=He.find(s=>s.key===qe),t=document.getElementById("sc-mobile-ref-title");t&&e&&(t.textContent=`${e.icon} ${e.label}`)}function ft(){var t,s,r,n,a,l,o,d,f,u;const e=[...new Set((Te??[]).filter(i=>Number(i.subject_id)===Number(J)).map(i=>Number(i.day_of_week)).map(i=>i===0?7:i).filter(i=>Number.isInteger(i)&&i>=1&&i<=7&&i!==6))];document.querySelectorAll(".sc-sched-tab").forEach(i=>{i.classList.toggle("active",i.dataset.sched===et),i.addEventListener("click",()=>{et=i.dataset.sched,document.querySelectorAll(".sc-sched-tab").forEach(p=>p.classList.toggle("active",p.dataset.sched===et)),document.getElementById("sc-schedule-body").innerHTML=zt(et)})}),(t=document.getElementById("sc-add-syllabus"))==null||t.addEventListener("click",()=>ts()),(s=document.getElementById("sc-ai-syllabus"))==null||s.addEventListener("click",()=>Ns({teacher:m,cls:w,courseId:J,syllabusItems:de,lessonPlans:ce,currentWeek:pe||1,initialMode:"schedule",semesterStart:E.semester_start,semesterEnd:E.semester_end,scheduledDays:e,onSaved:()=>P()})),(r=document.getElementById("sc-syllabus-list"))==null||r.addEventListener("click",i=>{const p=i.target.closest(".sc-syllabus-delete");if(p){const S=de.find(T=>T.id===parseInt(p.dataset.sylid,10));if(!S||!confirm(`ลบกำหนดการสอนสัปดาห์ ${S.week_start}${S.week_end!==S.week_start?`–${S.week_end}`:""} เรื่อง "${S.topic}"?`))return;p.disabled=!0,$s(S.id).then(()=>{x("ลบกำหนดการสอนแล้ว","success"),P()}).catch(T=>{p.disabled=!1,x("ลบไม่สำเร็จ: "+N(T),"error")});return}const _=i.target.closest(".sc-syllabus-row");if(!_)return;const L=de.find(S=>S.id===parseInt(_.dataset.sylid,10));L&&ts(L)}),(n=document.getElementById("sc-add-plan"))==null||n.addEventListener("click",()=>ss()),(a=document.getElementById("sc-ai-plan"))==null||a.addEventListener("click",()=>Ns({teacher:m,cls:w,courseId:J,syllabusItems:de,lessonPlans:ce,currentWeek:pe||1,initialMode:"plan",semesterStart:E.semester_start,semesterEnd:E.semester_end,scheduledDays:e,onSaved:()=>P()})),(l=document.getElementById("sc-archive-plans"))==null||l.addEventListener("click",()=>Tr({subject:{...Pe,id:J},teacher:m,classes:($t??[]).filter(i=>{var p;return Number(i.course_id??((p=i.master_subjects)==null?void 0:p.id))===Number(J)}),plans:_e??[],semesterStart:E.semester_start,semesterEnd:E.semester_end,termSchedule:ie,scheduleLinks:he,academicYear:se,semester:Y})),(o=document.getElementById("sc-sync-plan-pattern"))==null||o.addEventListener("click",async i=>{const p=new Map;for(const I of mt()){const B=Number(I.week_start);!Number.isInteger(B)||B<1||(p.has(B)||p.set(B,[]),p.get(B).push(I))}const _=[...p.keys()].sort((I,B)=>I-B),L=p.get(1)??[];if(!p.has(1)||!_.some(I=>I>1)||!L.length)return x("ต้องมีแผนในสัปดาห์ที่ 1 และสัปดาห์ถัดไปก่อน","warning");const S=[];for(const I of _.filter(B=>B>1))(p.get(I)??[]).forEach((C,F)=>{var h,$,q,j;const y=L[F];if(!y)return;const V=Je(y),re=Je(C),Z=Ht(C),k=String(C.title??"").replace(/(ครั้งที่\s*)\d+/g,`$1${Z}`);re.periodCount===V.periodCount&&re.minutesPerPeriod===V.minutesPerPeriod&&Number(C.duration_minutes)===V.durationMinutes&&Number((h=C.source_json)==null?void 0:h.period_count)===V.periodCount&&Number(($=C.source_json)==null?void 0:$.minutes_per_period)===V.minutesPerPeriod&&Number(C.session_number)===Z&&Number((q=C.source_json)==null?void 0:q.session_in_week)===F+1&&Number((j=C.source_json)==null?void 0:j.sessions_per_week)===L.length&&C.title===k||S.push({plan:C,config:V,sessionNumber:Z,sessionInWeek:F+1,title:k})});if(!S.length)return x("ทุกสัปดาห์ใช้รูปแบบคาบเดียวกับสัปดาห์แรกอยู่แล้ว","success");const T=L.map((I,B)=>{const C=Je(I);return`ครั้งที่ ${B+1}: ${C.periodCount} คาบ × ${C.minutesPerPeriod} นาที`}).join(", ");if(!confirm(`จะปรับเลขครั้ง ชื่อแผน จำนวนคาบ และเวลารวมของ ${S.length} แผนในสัปดาห์ถัดไป ให้ตรงกับรูปแบบสัปดาห์แรก (${T}) โดยไม่แก้เนื้อหาการสอน ดำเนินการหรือไม่?`))return;const g=i.currentTarget;g.disabled=!0;let A=0;try{for(const{plan:I,config:B,sessionNumber:C,sessionInWeek:F,title:y}of S)await Ss(I.id,{title:y,session_number:C,duration_minutes:B.durationMinutes,source_json:{...I.source_json??{},session_number:C,session_in_week:F,sessions_per_week:L.length,period_count:B.periodCount,minutes_per_period:B.minutesPerPeriod,duration_minutes:B.durationMinutes}}),A++;x(`ปรับรูปแบบคาบแล้ว ${A} แผน ✅`,"success"),P()}catch(I){x(`ปรับแล้ว ${A}/${S.length} แผน ก่อนเกิดข้อผิดพลาด: ${N(I)}`,"error"),P()}finally{g.disabled=!1}}),(d=document.getElementById("sc-plan-list"))==null||d.addEventListener("click",i=>{const p=i.target.closest(".sc-plan-delete");if(p){const S=ce.find(T=>T.id===parseInt(p.dataset.planid,10));if(!S||!confirm(`ลบแผน "${S.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`))return;p.disabled=!0,Es(S.id).then(()=>{x("ลบแผนแล้ว","success"),P()}).catch(T=>{p.disabled=!1,x("ลบไม่สำเร็จ: "+N(T),"error")});return}const _=i.target.closest(".sc-plan-reflect"),L=i.target.closest(".sc-plan-row");if(_){const S=ce.find(T=>T.id===parseInt(_.dataset.planid,10));S&&Mr({plan:Xe(S),cls:w,teacher:m,classId:b,currentWeek:pe||S.week_start,semesterStart:E.semester_start,semesterEnd:E.semester_end,scheduledDays:e})}else if(L){const S=ce.find(T=>T.id===parseInt(L.dataset.planid,10));S&&ss(Xe(S))}}),(f=document.getElementById("sc-add-assignment"))==null||f.addEventListener("click",()=>yt()),(u=document.getElementById("sc-assignment-list"))==null||u.addEventListener("click",i=>{const p=i.target.closest(".sc-assignment-row");if(!p)return;const _=z.find(L=>L.id===parseInt(p.dataset.aid,10));_&&ns(_)})}ft();const Ln=()=>`
    <div class="grid grid-cols-2 gap-2 mb-5">
      <button id="sc-mobile-more-chat" class="min-h-[76px] rounded-xl border border-amber-100 bg-amber-50 text-xs font-bold text-amber-800">💬<br>แชทห้องเรียน</button>
      <button id="sc-mobile-more-ai" class="min-h-[76px] rounded-xl text-xs font-bold text-white" style="background:linear-gradient(135deg,#6366f1,#7c3aed)">✨<br>AI เตรียมการสอน</button>
      <button id="sc-mobile-more-ann" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">📣<br>สร้างประกาศ</button>
      <button id="sc-mobile-more-dashboard" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">📈<br>Dashboard</button>
      <button id="sc-mobile-more-switch" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">🔀<br>สลับห้อง</button>
      <button id="sc-mobile-more-exam" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">📋<br>คิวสอบ</button>
      <button id="sc-mobile-more-grades" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">📊<br>คะแนน</button>
      <button id="sc-mobile-more-attendance" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">✅<br>เช็คชื่อ</button>
    </div>
    <div id="sc-mobile-exam-preview">
      <p class="text-xs font-bold text-gray-600 mb-2">📋 คิวคำร้องสอบย้อนหลัง</p>
      ${Nt()}
    </div>`;function qn(){var e,t,s,r,n,a,l,o;(e=document.getElementById("sc-mobile-more-chat"))==null||e.addEventListener("click",Rt),(t=document.getElementById("sc-mobile-more-ai"))==null||t.addEventListener("click",Qt),(s=document.getElementById("sc-mobile-more-ann"))==null||s.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-add-announcement"))==null?void 0:d.click()}),(r=document.getElementById("sc-mobile-more-dashboard"))==null||r.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-dashboard"))==null?void 0:d.click()}),(n=document.getElementById("sc-mobile-more-switch"))==null||n.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-switch-class"))==null?void 0:d.click()}),(a=document.getElementById("sc-mobile-more-exam"))==null||a.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-mobile-exam-preview"))==null?void 0:d.scrollIntoView({behavior:"smooth",block:"start"})}),(l=document.getElementById("sc-mobile-more-grades"))==null||l.addEventListener("click",()=>Ae("grades")),(o=document.getElementById("sc-mobile-more-attendance"))==null||o.addEventListener("click",()=>Ae("attendance"))}function jn(){document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.classList.toggle("active",e.dataset.mobileGroup===Ze))}function Kt(){const e=document.getElementById("sc-mobile-ref-subtabs");if(!e)return;const t=Ze==="plan"?He.filter(s=>["syllabus","plans"].includes(s.key)):[];e.innerHTML=t.map(s=>`<button type="button" data-mobile-ref-tab="${s.key}" class="${s.key===qe?"active":""}">${s.icon} ${s.label}</button>`).join(""),e.querySelectorAll("[data-mobile-ref-tab]").forEach(s=>s.addEventListener("click",()=>Ae(s.dataset.mobileRefTab)))}async function In(e,t){var r;const s=e==="grades"?"คะแนน":"เช็คชื่อ";t.innerHTML=`<div class="flex flex-col items-center justify-center py-12 gap-3">
      <button id="sc-reopen-overlay" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">เปิดหน้าต่าง${s}อีกครั้ง</button>
    </div>`,(r=t.querySelector("#sc-reopen-overlay"))==null||r.addEventListener("click",()=>Ae(e));try{await jr(e==="grades"?kr:hr,m,w)}catch(n){console.error(n)}Ms("my-classes"),Ts("Smart Classroom")}function Ie(){const e=document.getElementById("sc-reference-fullscreen");if(!e)return;const t=e.querySelector("#sc-reftab-body"),s=document.getElementById("sc-reftab-body-host");t&&s&&(s.innerHTML="",s.appendChild(t),t.className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-4 py-8 text-center text-xs text-gray-400",t.innerHTML="เลือก “กำหนดการสอน” หรือ “แผนการสอน” เพื่อเปิดรายละเอียดเต็ม"),e._onKeyDown&&document.removeEventListener("keydown",e._onKeyDown),document.body.style.overflow=e.dataset.previousOverflow??"",e.remove()}function Cn(e){Ie();const t=He.find(l=>l.key===e),s=document.getElementById("sc-reftab-body-host"),r=document.getElementById("sc-reftab-body");if(!t||!s||!r)return;const n=document.createElement("div");n.id="sc-reference-fullscreen",n.className="fixed inset-0 z-[110] flex flex-col bg-slate-50",n.dataset.previousOverflow=document.body.style.overflow,n.innerHTML=`
      <div class="flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto flex w-full max-w-[1600px] items-center gap-3 px-4 py-3 sm:px-6">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl ${e==="plans"?"bg-violet-100":"bg-blue-100"} text-xl">${t.icon}</div>
          <div class="min-w-0 flex-1">
            <h2 class="truncate text-base font-extrabold text-gray-800 sm:text-lg">${t.label}</h2>
            <p class="truncate text-[11px] text-gray-400">${c(Pe.subject_name??"")} · ${c(w.class_name??"")}</p>
          </div>
          <button id="sc-reference-fullscreen-close" type="button" class="min-h-[42px] rounded-xl border border-gray-200 bg-white px-3 text-sm font-bold text-gray-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600">✕ ปิด</button>
        </div>
      </div>
      <div id="sc-reference-fullscreen-scroll" class="sc-reference-fullscreen-body min-h-0 flex-1 overflow-y-auto px-3 py-4 sm:px-6 sm:py-6">
        <div class="mx-auto w-full max-w-[1500px]"> </div>
      </div>
      <style>
        #sc-reference-fullscreen .sc-reference-fullscreen-body #sc-syllabus-list > div,
        #sc-reference-fullscreen .sc-reference-fullscreen-body #sc-plan-list > div { max-height: none; overflow: visible; }
      </style>`,document.body.appendChild(n),n.querySelector("#sc-reference-fullscreen-close").addEventListener("click",Ie),n.addEventListener("click",l=>{l.target===n&&Ie()}),n._onKeyDown=l=>{l.key==="Escape"&&Ie()},document.addEventListener("keydown",n._onKeyDown),document.body.style.overflow="hidden",n.querySelector("#sc-reference-fullscreen-scroll > div").appendChild(r),r.className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6",r.innerHTML=Ot(e),ft()}async function Ae(e){var s;if(!He.some(r=>r.key===e))return;if(qe=e,Zt(),Kt(),window.matchMedia("(max-width: 1023px)").matches&&((s=document.getElementById("sc-reference-panel"))==null||s.classList.add("mobile-open")),e==="schedule"||e==="syllabus"||e==="plans"){Cn(e);return}const t=document.getElementById("sc-reftab-body");if(t){if(e==="grades"||e==="attendance"){await In(e,t);return}t.innerHTML=Ot(qe),ft()}}function es(e){if(!Ft.some(a=>a.key===e))return;Ze=e,jn();const t=document.getElementById("sc-mobile-room-section"),s=document.getElementById("sc-mobile-live-section"),r=["work","plan","more"].includes(e);t==null||t.classList.toggle("mobile-active",e==="room"),s==null||s.classList.toggle("mobile-active",e==="live"||r);const n=document.getElementById("sc-reference-panel");if(e==="room"||e==="live"){n==null||n.classList.remove("mobile-open"),window.scrollTo({top:0,behavior:"smooth"});return}if(e==="work")Ae("assignments");else if(e==="plan"){qe=null,Zt(),Kt();const a=document.getElementById("sc-mobile-ref-title");a&&(a.textContent="📝 เลือกเมนูแผนการสอน");const l=document.getElementById("sc-reftab-body");l&&(l.innerHTML='<div class="rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 px-4 py-10 text-center text-sm font-semibold text-violet-700">เลือกเมนูด้านบนเพื่อเปิดรายละเอียดเต็มหน้าจอ</div>'),n==null||n.classList.add("mobile-open")}else{const a=document.getElementById("sc-mobile-ref-title");a&&(a.textContent="••• เพิ่มเติม"),document.getElementById("sc-mobile-ref-subtabs").innerHTML="",document.getElementById("sc-reftab-body").innerHTML=Ln(),qn(),n==null||n.classList.add("mobile-open")}}document.querySelectorAll(".sc-reftab-btn").forEach(e=>e.addEventListener("click",()=>Ae(e.dataset.reftab))),document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.addEventListener("click",()=>es(e.dataset.mobileGroup))),(vs=document.getElementById("sc-mobile-ref-close"))==null||vs.addEventListener("click",()=>{es("room")});function ts(e){var n,a;(n=document.getElementById("sc-syllabus-modal"))==null||n.remove();const t=!!e,s=e??{},r=document.createElement("div");r.id="sc-syllabus-modal",r.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">${t?"📘 แก้ไขหัวข้อสอน":"➕ เพิ่มหัวข้อสอน"}</h3>
          <div class="flex items-center gap-2">
            ${t?'<button id="sy-delete" class="text-[11px] text-red-400 hover:text-red-600">🗑️ ลบ</button>':""}
            <button id="sy-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์เริ่ม *</label>
            <input id="sy-week-start" type="number" min="1" value="${s.week_start??""}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์สิ้นสุด *</label>
            <input id="sy-week-end" type="number" min="1" value="${s.week_end??""}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">หัวข้อ/เรื่องที่สอน *</label>
          <input id="sy-topic" type="text" value="${c(s.topic??"")}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียดเพิ่มเติม</label>
          <textarea id="sy-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none">${c(s.description??"")}</textarea>
        </div>
        <button id="sy-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">บันทึก</button>
      </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#sy-close").addEventListener("click",()=>r.remove()),(a=r.querySelector("#sy-delete"))==null||a.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้?"))try{await $s(s.id),x("ลบแล้ว","success"),r.remove(),P()}catch(l){x("ลบไม่สำเร็จ: "+N(l),"error")}}),r.querySelector("#sy-save").addEventListener("click",async()=>{const l=parseInt(r.querySelector("#sy-week-start").value,10),o=parseInt(r.querySelector("#sy-week-end").value,10),d=r.querySelector("#sy-topic").value.trim();if(!l||!o||o<l){x("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}if(!d){x("กรอกหัวข้อก่อนนะ","warning");return}const f=r.querySelector("#sy-save");f.disabled=!0,f.textContent="กำลังบันทึก...";const u={course_id:J,week_start:l,week_end:o,topic:d,description:r.querySelector("#sy-desc").value.trim()||null,source_json:{...s.source_json??{},...t?{}:{class_id:b}}};try{t?await ar(s.id,u):await or(u),x("บันทึกแล้ว ✅","success"),r.remove(),P()}catch(i){x("บันทึกไม่สำเร็จ: "+N(i),"error"),f.disabled=!1,f.textContent="บันทึก"}})}function ss(e){var $,q,j,be,Ce,ht,st,hs;($=document.getElementById("sc-plan-modal"))==null||$.remove();const t=!!e,s=e?Xe(e):{},r=(w==null?void 0:w.master_subjects)??{},n={MATH:"คณิตศาสตร์",THAI:"ภาษาไทย",SCI:"วิทยาศาสตร์และเทคโนโลยี",ENG:"ภาษาต่างประเทศ",SOC:"สังคมศึกษา ศาสนาและวัฒนธรรม",PE:"สุขศึกษาและพลศึกษา",ART:"ศิลปะ",CAREER:"การงานอาชีพ",ISLAM:"อิสลามศึกษา"},a=String(r.dept??r.subject_group??"").trim(),l=n[a.toUpperCase()]||a||"................................",o=String((w==null?void 0:w.class_name)??"").trim(),d=String(r.grade_level??"").replace(/ม\./g,"").trim(),f=/^ม\./.test(o)?o.replace(/^ม\./,""):[d,o].filter(Boolean).join(" "),u=w==null?void 0:w.students,i=(Array.isArray(u)?(q=u[0])==null?void 0:q.full_name:u==null?void 0:u.full_name)??"................................",p=Number(s.duration_minutes)||Number((j=s.source_json)==null?void 0:j.duration_minutes)||45,_=Number((be=s.source_json)==null?void 0:be.period_count),L=Number((Ce=s.source_json)==null?void 0:Ce.minutes_per_period),S=Number.isInteger(_)&&_>0?_:p%45===0?p/45:p===100?2:1,T=Number.isInteger(L)&&L>0?L:p%45===0?45:p===100?50:p,A=String(s.unit_title??"").trim().replace(/^หน่วยการเรียนรู้ที่\s*/,"").replace(/^หน่วยที่\s*/,"").replace(/^ที่\s*/,""),I=[...new Set((ie??[]).filter(M=>Number(M.subject_id)===Number(J)).map(M=>Number(M.day_of_week)).map(M=>M===0?7:M).filter(M=>Number.isInteger(M)&&M>=1&&M<=7&&M!==6))].sort((M,G)=>M%7-G%7),B=M=>{if(!(E!=null&&E.semester_start)||!Number.isInteger(Number(M))||Number(M)<1||!I.length)return null;const[G,xe,Se]=E.semester_start.split("-").map(Number),Me=new Date(G,xe-1,Se),Be=new Date(Me);Be.setDate(Me.getDate()-Me.getDay()+(Number(M)-1)*7);const Oe=[];for(let ze=0;ze<=5;ze++){const ye=new Date(Be);if(ye.setDate(Be.getDate()+ze),ye<Me||E.semester_end&&ye>new Date(`${E.semester_end}T23:59:59`))continue;const An=ye.getDay()||7;I.includes(An)&&Oe.push(`${ye.getFullYear()}-${String(ye.getMonth()+1).padStart(2,"0")}-${String(ye.getDate()).padStart(2,"0")}`)}return Oe[0]??null},C=s.lesson_date||B(Number(s.week_start||pe||1))||"",F=M=>{const G=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(M??""));return G?`${G[3]}/${G[2]}/${String(Number(G[1])+543).slice(-2)}`:"ยังไม่ระบุ"},y=document.createElement("div");y.id="sc-plan-modal",y.className="fixed inset-0 z-[120] bg-slate-100 flex flex-col",y.innerHTML=`
      <style>
        #sc-plan-modal .lp-toolbar{height:64px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;gap:10px;padding:9px 14px;flex:none;position:relative;z-index:3}
        #sc-plan-modal .lp-admin-input{height:40px;border:1px solid #dbe2ea;border-radius:10px;padding:0 10px;background:#fff;font-size:12px;color:#334155}
        #sc-plan-modal .lp-editor-scroll{flex:1;min-height:0;overflow:auto;padding:22px}
        #sc-plan-modal .lp-paper{width:210mm;min-height:297mm;margin:0 auto;background:white;box-shadow:0 15px 45px rgba(15,23,42,.16);padding:10mm 11mm 11mm;color:#111;font-family:"Sarabun",Tahoma,sans-serif;font-size:14px;line-height:1.42}
        #sc-plan-modal .lp-head{text-align:center}.lp-head img{width:58px;height:58px;object-fit:contain;margin:auto}.lp-head h1{font-size:23px;line-height:1.15;font-weight:800;margin:5px 0 4px}.lp-head h2{font-size:17px;line-height:1.2;font-weight:700;margin:0 0 4px}.lp-subject-line{font-size:14px;margin:2px 0}.lp-unit-row{display:flex;align-items:center;justify-content:center;gap:4px;white-space:nowrap}.lp-unit-row input{min-width:0;text-align:center}
        #sc-plan-modal .lp-doc-input,#sc-plan-modal .lp-doc-area{font:inherit;color:#111;background:transparent;border:1px dashed transparent;border-radius:4px;padding:2px 4px;outline:none;width:100%;resize:none;overflow:hidden}
        #sc-plan-modal .lp-doc-input:hover,#sc-plan-modal .lp-doc-area:hover{background:#f8fafc;border-color:#cbd5e1}#sc-plan-modal .lp-doc-input:focus,#sc-plan-modal .lp-doc-area:focus{background:#fffef2;border-color:#0f7a42;box-shadow:0 0 0 2px rgba(15,122,66,.12)}
        #sc-plan-modal .lp-meta{display:grid;grid-template-columns:.8fr .85fr .9fr 1fr 1.25fr;align-items:center;gap:4px;border-top:1.5px solid #176b3a;border-bottom:1.5px solid #176b3a;margin-top:10px;padding:6px 7px}.lp-meta label{display:flex;align-items:center;gap:3px;white-space:nowrap}.lp-meta label:nth-child(2),.lp-meta label:nth-child(3),.lp-meta label:nth-child(4){justify-content:center}.lp-meta label:last-child{justify-content:flex-end}.lp-meta input[type=number]{width:48px}.lp-meta input[type=date]{width:112px}.lp-duration-total{font-weight:700;color:#176b3a}
        #sc-plan-modal .lp-columns{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px}.lp-box{border:1.2px solid #17743d;border-radius:5px;overflow:hidden;margin-bottom:11px}.lp-box-title{background:#d8f6e2;color:#145f35;font-size:15px;padding:7px 10px;border-bottom:1px solid #17743d}.lp-box-body{padding:8px 10px}.lp-box-body textarea{min-height:62px}.lp-activities textarea{min-height:48px}.lp-activities .main{min-height:126px}.lp-media textarea{min-height:48px}
        #sc-plan-modal .lp-sign-pair{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:36px}.lp-sign{text-align:center;font-size:12px;line-height:1.55}.lp-sign-space{height:44px}.lp-sign-row{display:flex;align-items:center;justify-content:center;gap:4px}.lp-sign-line{display:inline-block;flex:1;border-bottom:1px dotted #111;height:1px;margin:0 4px 5px}.lp-reflect{margin-top:28px}.lp-reflect h3,.lp-suggestion h3{font-size:14px;font-weight:500;border-bottom:1px solid #111;padding-bottom:4px;margin:0 0 9px}.lp-rule{height:31px;border-bottom:1px solid #8ca1bd;color:#176b3a;padding:3px 8px;font-size:12px}.lp-suggestion{margin-top:22px}.lp-dept-sign{width:72%;margin:72px auto 0;text-align:center;font-size:12px;line-height:1.6}.lp-dept-sign .lp-sign-line{display:inline-block;width:180px;vertical-align:middle}
        #sc-plan-modal .lp-extra{position:relative;flex:none}.lp-extra summary{cursor:pointer;list-style:none}.lp-extra-content{position:absolute;top:46px;right:0;width:360px;background:#fff;border:1px solid #dbe2ea;border-radius:14px;box-shadow:0 16px 40px rgba(15,23,42,.18);padding:14px;z-index:5}.lp-extra textarea{width:100%;border:1px solid #dbe2ea;border-radius:9px;padding:8px;font-size:12px;resize:vertical}
        @media(max-width:720px){#sc-plan-modal .lp-toolbar{height:auto;min-height:64px;flex-wrap:wrap;padding:8px}.lp-toolbar .lp-hide-mobile{display:none}#sc-plan-modal .lp-editor-scroll{padding:10px}.lp-extra-content{position:fixed!important;right:8px!important;top:62px!important;width:calc(100vw - 16px)!important}}
      </style>
      <header class="lp-toolbar">
        <button id="lp-close" class="w-10 h-10 flex-none rounded-xl border text-gray-500 hover:bg-gray-50" aria-label="ปิด">←</button>
        <div class="min-w-0 mr-auto"><p class="font-extrabold text-sm text-gray-800 truncate">${t?"แก้ไขแผนการสอน":"สร้างแผนการสอนใหม่"}</p><p class="text-[10px] text-gray-400 lp-hide-mobile">แก้ไขบนหน้ากระดาษตามแบบฟอร์มจริง</p></div>
        <input id="lp-title" value="${c(s.title??"")}" placeholder="ชื่อแผน *" class="lp-admin-input w-48 lp-hide-mobile">
        <label class="text-[10px] text-gray-500 lp-hide-mobile">สัปดาห์ <input id="lp-week-start" type="number" min="1" value="${s.week_start??""}" class="lp-admin-input w-16 ml-1"></label>
        <label class="text-[10px] text-gray-500 lp-hide-mobile">ถึง <input id="lp-week-end" type="number" min="1" value="${s.week_end??""}" class="lp-admin-input w-16 ml-1"></label>
        <details class="lp-extra"><summary class="h-10 px-3 rounded-xl border flex items-center justify-center text-xs font-bold text-gray-600 bg-white">⚙️ ข้อมูลเพิ่มเติม</summary><div class="lp-extra-content"><div class="grid grid-cols-2 gap-2 mb-2 sm:hidden"><label class="text-[10px] text-gray-500">ชื่อแผน<input id="lp-title-mobile" value="${c(s.title??"")}" class="lp-admin-input w-full mt-1"></label><label class="text-[10px] text-gray-500">สัปดาห์<input id="lp-week-mobile" value="${s.week_start??""}" class="lp-admin-input w-full mt-1"></label></div><label class="block text-[10px] font-bold text-gray-500">งาน/การบ้าน<textarea id="lp-homework" rows="3" class="mt-1">${c(s.homework??"")}</textarea></label><label class="block text-[10px] font-bold text-gray-500 mt-2">หมายเหตุครู<textarea id="lp-teacher_notes" rows="3" class="mt-1">${c(s.teacher_notes??"")}</textarea></label></div></details>
        ${t?'<button id="lp-delete" class="h-10 px-3 flex-none rounded-xl border border-red-100 text-xs font-bold text-red-500 hover:bg-red-50">🗑️ <span class="lp-hide-mobile">ลบ</span></button>':""}
        <button id="lp-save" class="h-10 px-4 flex-none rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm">💾 บันทึกแผน</button>
      </header>
      <main class="lp-editor-scroll">
        <article class="lp-paper animate-fade">
          <section class="lp-head">
            <img src="./pp5-form-logo.png" alt="ตราโรงเรียน">
            <h1>แผนการจัดการเรียนรู้(หน้าเดียว)</h1>
            <h2>กลุ่มสาระการเรียนรู้${c(l)}</h2>
            <p class="lp-subject-line">วิชา ${c(r.subject_name??"")} รหัสวิชา ${c(r.subject_code??"")} ชั้นมัธยมศึกษาปีที่ ${c(f||"................................")}</p>
            <div class="lp-unit-row"><span>หน่วยการเรียนรู้ที่</span><input id="lp-unit-title" class="lp-doc-input" value="${c(A)}" placeholder="เลขหน่วยและชื่อหน่วย"> เรื่อง <input id="lp-key_concept" class="lp-doc-input" value="${c(s.key_concept??"")}" placeholder="เรื่องที่สอน"></div>
          </section>
          <section class="lp-meta">
            <label>ครั้งที่ <input id="lp-session-number" type="number" min="1" class="lp-doc-input" value="${s.session_number??1}"></label>
            <label>จำนวน <input id="lp-period-count" type="number" min="1" class="lp-doc-input" value="${S}"> คาบ</label>
            <label>นาที/คาบ <input id="lp-minutes-per-period" type="number" min="1" class="lp-doc-input" value="${T}"></label>
            <label>รวมเวลา <span><output id="lp-duration-total" class="lp-duration-total">${S*T}</output> นาที</span></label>
            <label>วันที่ <span><input id="lp-lesson-date" type="date" class="lp-doc-input" value="${c(C)}"><small id="lp-date-thai" class="block text-center text-[10px] text-gray-500">${F(C)}</small></span></label>
          </section>
          <section class="lp-columns">
            <div>
              <div class="lp-box"><div class="lp-box-title">1.มาตรฐาน/ตัวชี้วัด (ผลการเรียนรู้)</div><div class="lp-box-body"><textarea id="lp-standards" class="lp-doc-area" rows="5">${c(s.standards??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">2.จุดประสงค์การเรียนรู้</div><div class="lp-box-body"><textarea id="lp-objectives" class="lp-doc-area" rows="5">${c(s.objectives??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">3.กิจกรรมการเรียนรู้</div><div class="lp-box-body lp-activities"><b>ขั้นนำเข้าสู่บทเรียน</b><textarea id="lp-activities_intro" class="lp-doc-area" rows="3">${c(s.activities_intro??"")}</textarea><b>ขั้นสอน</b><textarea id="lp-activities_main" class="lp-doc-area main" rows="7">${c(s.activities_main??"")}</textarea><b>ขั้นสรุป</b><textarea id="lp-activities_wrap" class="lp-doc-area" rows="3">${c(s.activities_wrap??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">4.การวัดและประเมินผล</div><div class="lp-box-body"><textarea id="lp-assessment" class="lp-doc-area" rows="3">${c(s.assessment??"")}</textarea></div></div>
            </div>
            <div>
              <div class="lp-box lp-media"><div class="lp-box-title">5.สื่อการเรียนรู้</div><div class="lp-box-body"><textarea id="lp-media" class="lp-doc-area" rows="3">${c(s.media??"")}</textarea></div></div>
              <div class="lp-sign-pair">
                <div class="lp-sign"><div class="lp-sign-space"></div><div class="lp-sign-row"><span>ลงชื่อ</span><span class="lp-sign-line"></span></div><div>หัวหน้าห้อง</div><div>( ${c(i)} )</div><div>วันที่ <span class="lp-sign-date">${F(C)}</span></div></div>
                <div class="lp-sign"><div class="lp-sign-space"></div><div class="lp-sign-row"><span>ลงชื่อ</span><span class="lp-sign-line"></span></div><div>ครูผู้สอน</div><div>( ${c((m==null?void 0:m.full_name)??"................................")} )</div><div>วันที่ <span class="lp-sign-date">${F(C)}</span></div></div>
              </div>
              <div class="lp-reflect"><h3>บันทึกหลังการสอน</h3><div class="lp-rule">ผลการจัดการเรียนรู้:</div><div class="lp-rule"></div><div class="lp-rule">แนวทางการแก้ปัญหา:</div><div class="lp-rule"></div></div>
              <div class="lp-suggestion"><h3>ข้อเสนอแนะ</h3><div class="lp-rule"></div><div class="lp-rule"></div><div class="lp-rule"></div></div>
              <div class="lp-dept-sign">ลงชื่อ <span class="lp-sign-line"></span> หัวหน้ากลุ่มสาระ<div>( ................................ )</div><div>วันที่ ................................</div></div>
            </div>
          </section>
        </article>
      </main>`,document.body.appendChild(y),y.querySelector("#lp-close").addEventListener("click",()=>y.remove());const V=()=>{const M=Math.max(1,parseInt(y.querySelector("#lp-period-count").value,10)||1),G=Math.max(1,parseInt(y.querySelector("#lp-minutes-per-period").value,10)||45);y.querySelector("#lp-duration-total").textContent=String(M*G)};y.querySelector("#lp-period-count").addEventListener("input",V),y.querySelector("#lp-minutes-per-period").addEventListener("input",V);const re=y.querySelector("#lp-title"),Z=y.querySelector("#lp-title-mobile");Z==null||Z.addEventListener("input",()=>{re.value=Z.value}),re==null||re.addEventListener("input",()=>{Z&&(Z.value=re.value)}),(ht=y.querySelector("#lp-week-mobile"))==null||ht.addEventListener("input",M=>{y.querySelector("#lp-week-start").value=M.target.value,y.querySelector("#lp-week-end").value=M.target.value});let k=C;const h=()=>{const M=y.querySelector("#lp-lesson-date"),G=B(parseInt(y.querySelector("#lp-week-start").value,10));G&&(!M.value||M.value===k)&&(M.value=G,k=G);const xe=F(M.value);y.querySelector("#lp-date-thai").textContent=xe,y.querySelectorAll(".lp-sign-date").forEach(Se=>{Se.textContent=xe})};y.querySelector("#lp-lesson-date").addEventListener("change",()=>{const M=y.querySelector("#lp-lesson-date").value;k="";const G=F(M);y.querySelector("#lp-date-thai").textContent=G,y.querySelectorAll(".lp-sign-date").forEach(xe=>{xe.textContent=G})}),y.querySelector("#lp-week-start").addEventListener("change",h),(st=y.querySelector("#lp-week-mobile"))==null||st.addEventListener("change",h),(hs=y.querySelector("#lp-delete"))==null||hs.addEventListener("click",async()=>{if(confirm(`ลบแผน "${s.title}"? บันทึกหลังสอน/ลายเซ็นที่ผูกกับแผนนี้จะหายไปด้วย`))try{await Es(s.id),x("ลบแผนแล้ว","success"),y.remove(),P()}catch(M){x("ลบไม่สำเร็จ: "+N(M),"error")}}),y.querySelector("#lp-save").addEventListener("click",async()=>{const M=y.querySelector("#lp-title").value.trim(),G=parseInt(y.querySelector("#lp-week-start").value,10),xe=parseInt(y.querySelector("#lp-week-end").value,10);if(!M){x("กรอกชื่อแผนก่อนนะ","warning");return}if(!G||!xe||xe<G){x("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}const Se=y.querySelector("#lp-save");Se.disabled=!0,Se.textContent="กำลังบันทึก...";const Me=Math.max(1,parseInt(y.querySelector("#lp-period-count").value,10)||1),Be=Math.max(1,parseInt(y.querySelector("#lp-minutes-per-period").value,10)||45),Oe=Me*Be,ze={course_id:J,teacher_id:m.id,title:M,week_start:G,week_end:xe,session_number:parseInt(y.querySelector("#lp-session-number").value,10)||1,lesson_date:y.querySelector("#lp-lesson-date").value||B(G)||null,duration_minutes:Oe,source_json:{...s.source_json??{},class_id:Number(b)||null,period_count:Me,minutes_per_period:Be,duration_minutes:Oe},unit_title:y.querySelector("#lp-unit-title").value.trim()||null,standards:y.querySelector("#lp-standards").value.trim()||null,objectives:y.querySelector("#lp-objectives").value.trim()||null,key_concept:y.querySelector("#lp-key_concept").value.trim()||null,activities_intro:y.querySelector("#lp-activities_intro").value.trim()||null,activities_main:y.querySelector("#lp-activities_main").value.trim()||null,activities_wrap:y.querySelector("#lp-activities_wrap").value.trim()||null,media:y.querySelector("#lp-media").value.trim()||null,assessment:y.querySelector("#lp-assessment").value.trim()||null,homework:y.querySelector("#lp-homework").value.trim()||null,teacher_notes:y.querySelector("#lp-teacher_notes").value.trim()||null};try{t?await Ss(s.id,ze):await lr(ze),x("บันทึกแผนแล้ว ✅","success"),y.remove(),P()}catch(ye){x("บันทึกไม่สำเร็จ: "+N(ye),"error"),Se.disabled=!1,Se.textContent="บันทึกแผน"}})}const Mn=e=>{if(!e)return"";const t=new Date(e),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}T${s(t.getHours())}:${s(t.getMinutes())}`};function yt(e){var S,T;(S=document.getElementById("sc-assign-modal"))==null||S.remove();const t=!!e,s=e??{};let r=[...s.attachment_urls??[]];const n=document.createElement("div");n.id="sc-assign-modal",n.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">${t?"✏️ แก้ไขงาน":"➕ สั่งงานใหม่"}</h3>
          <div class="flex items-center gap-2">
            ${t?'<button id="sa-delete" class="text-[11px] text-red-400 hover:text-red-600">🗑️ ลบ</button>':""}
            <button id="sa-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ชื่องาน *</label>
          <input id="sa-title" type="text" value="${c(s.title??"")}" placeholder="เช่น ใบงานที่ 3 — สมการเชิงเส้น" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label>
          <textarea id="sa-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300">${c(s.description??"")}</textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ไฟล์แนบ${t?"":"/รูปภาพ (เลือกได้หลายไฟล์)"}</label>
          <div id="sa-kept-files" class="flex flex-wrap gap-1.5 mb-1.5"></div>
          <input id="sa-files" type="file" multiple class="w-full text-xs" />
          ${t?'<p class="text-[10px] text-gray-400 mt-1">ไฟล์ใหม่ที่แนบเพิ่มจะรวมกับไฟล์เดิมที่เหลือด้านบน</p>':""}
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ผูกกับคอลัมน์คะแนน</label>
          <select id="sa-col" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
            <option value="">— ไม่ผูกกับคะแนน —</option>
            ${H.map(g=>`<option value="${g.id}" ${s.score_column_id===g.id?"selected":""}>${c(g.assignment_name)} (เต็ม ${g.max_score})</option>`).join("")}
          </select>
        </div>
        <div id="sa-write-mode-wrap" class="hidden space-y-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">คะแนนเต็มของงานนี้</label>
            <input id="sa-max-score" type="number" min="0" step="0.5" value="${s.max_score??""}" placeholder="ไม่ระบุ = ใช้คะแนนเต็มของคอลัมน์คะแนน" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-[10px] text-gray-400 mt-1">เผื่อคอลัมน์เดียวกันสะสมคะแนนจากหลายงาน แต่แต่ละงานเต็มไม่เท่ากัน (เช่น คอลัมน์เต็ม 100 แต่ใบงานนี้เต็มแค่ 5)</p>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร</label>
            <select id="sa-write-mode" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
              ${Object.entries(lt).map(([g,A])=>`<option value="${g}" ${(s.score_write_mode??"overwrite")===g?"selected":""}>${A.label}</option>`).join("")}
            </select>
            <p id="sa-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">กำหนดส่ง</label>
          <input id="sa-due" type="datetime-local" value="${Mn(s.due_at)}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">หักคะแนนกรณีส่งช้า</label>
          <div class="flex gap-2 mb-1.5">
            <select id="sa-penalty-mode" class="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
              <option value="none" ${(s.late_penalty_mode??"none")==="none"?"selected":""}>ไม่หัก</option>
              <option value="flat" ${s.late_penalty_mode==="flat"?"selected":""}>หักครั้งเดียว (คงที่)</option>
              <option value="per_day" ${s.late_penalty_mode==="per_day"?"selected":""}>หักตามจำนวนวันที่ช้า</option>
            </select>
            <input id="sa-penalty-value" type="number" min="0" step="0.1" placeholder="0" value="${s.late_penalty_value??""}" ${(s.late_penalty_mode??"none")==="none"?"disabled":""} class="w-24 text-sm text-center border border-gray-200 rounded-xl px-2 py-2 ${(s.late_penalty_mode??"none")==="none"?"bg-gray-50":""}" />
          </div>
          <p id="sa-penalty-hint" class="text-[10px] text-gray-400"></p>
        </div>
        <button id="sa-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">${t?"บันทึกการแก้ไข":"บันทึกงาน"}</button>
      </div>`,document.body.appendChild(n),n.addEventListener("click",g=>{g.target===n&&n.remove()}),n.querySelector("#sa-close").addEventListener("click",()=>n.remove()),(T=n.querySelector("#sa-delete"))==null||T.addEventListener("click",async()=>{if(confirm(`ลบงาน "${s.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await _s(s.id),x("ลบงานแล้ว","success"),n.remove(),P()}catch(g){x("ลบไม่สำเร็จ: "+N(g),"error")}});const a=n.querySelector("#sa-kept-files"),l=()=>{a.innerHTML=r.map((g,A)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${c(g.name)}
          <button type="button" class="sa-remove-file text-indigo-400 hover:text-red-500 font-bold" data-i="${A}">✕</button>
        </span>`).join(""),a.querySelectorAll(".sa-remove-file").forEach(g=>g.addEventListener("click",()=>{r.splice(parseInt(g.dataset.i,10),1),l()}))};l();const o=n.querySelector("#sa-penalty-mode"),d=n.querySelector("#sa-penalty-value"),f=n.querySelector("#sa-penalty-hint");o.addEventListener("change",()=>{d.disabled=o.value==="none",d.disabled?(d.classList.add("bg-gray-50"),d.value=""):d.classList.remove("bg-gray-50"),f.textContent=o.value==="flat"?"หักคะแนนเท่านี้ทันทีถ้าส่งช้า ไม่ว่าจะช้ากี่วัน":o.value==="per_day"?"หักคะแนนเท่านี้ต่อวันที่ส่งช้า (คูณตามจำนวนวัน)":""});const u=n.querySelector("#sa-col"),i=n.querySelector("#sa-write-mode-wrap"),p=n.querySelector("#sa-write-mode"),_=n.querySelector("#sa-write-mode-hint"),L=()=>{var g;i.classList.toggle("hidden",!u.value),_.textContent=((g=lt[p.value])==null?void 0:g.hint)??""};u.addEventListener("change",L),p.addEventListener("change",L),L(),n.querySelector("#sa-save").addEventListener("click",async()=>{const g=n.querySelector("#sa-title").value.trim();if(!g){x("กรอกชื่องานก่อนนะ","warning");return}const A=n.querySelector("#sa-save");A.disabled=!0,A.textContent="กำลังบันทึก...";try{const I=[...n.querySelector("#sa-files").files??[]],B=[];for(const V of I)B.push(await Cs(V,`class-${b}`));const C=n.querySelector("#sa-due").value,F=n.querySelector("#sa-max-score").value.trim(),y={score_column_id:u.value?parseInt(u.value,10):null,title:g,description:n.querySelector("#sa-desc").value.trim()||null,attachment_urls:[...r,...B],due_at:C?new Date(C).toISOString():null,late_penalty_mode:o.value,late_penalty_value:parseFloat(d.value)||0,score_write_mode:p.value,max_score:F===""?null:parseFloat(F)};t?(await Xn(s.id,y),x("บันทึกการแก้ไขแล้ว ✅","success")):(await Jn({...y,class_id:b,teacher_id:m.id}),At(`📚 งานใหม่ — ${w.class_name}`,g,"sc-assignment"),x("สั่งงานสำเร็จ ✅","success")),n.remove(),P()}catch(I){x("บันทึกไม่สำเร็จ: "+N(I),"error"),A.disabled=!1,A.textContent=t?"บันทึกการแก้ไข":"บันทึกงาน"}})}function ns(e){var o,d,f;(o=document.getElementById("sc-track-modal"))==null||o.remove();const t=Object.fromEntries(e.submissions.map(u=>[u.student_id,u]));H.find(u=>u.id===e.score_column_id);const s=document.createElement("div");s.id="sc-track-modal",s.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-fade">
        <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-bold text-gray-800 truncate">${c(e.title)}</p>
              <p class="text-xs text-gray-400 mt-0.5">${e.description?c(e.description)+" · ":""}กำหนดส่ง ${dt(e.due_at)}</p>
              ${(d=e.attachment_urls)!=null&&d.length?`<div class="flex flex-wrap gap-1.5 mt-2">${e.attachment_urls.map(u=>`<a href="${c(u.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${c(u.name)}</a>`).join("")}</div>`:""}
            </div>
            <div class="flex gap-2 flex-shrink-0">
              <button id="st-edit" class="text-[11px] text-indigo-500 hover:text-indigo-700 px-2 py-1">✏️ แก้ไข</button>
              <button id="st-delete" class="text-[11px] text-red-400 hover:text-red-600 px-2 py-1">🗑️ ลบ</button>
              <button id="st-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
            </div>
          </div>
          <div class="flex items-center justify-between mt-2 gap-2">
            <p class="text-[11px] text-gray-400 flex-shrink-0">${e.submissions.length}/${v.length} ส่งแล้ว</p>
            <label class="flex items-center gap-1.5 text-[11px] text-gray-500 cursor-pointer select-none">
              <input id="st-sort-toggle" type="checkbox" class="w-3.5 h-3.5 rounded accent-indigo-500" />
              เรียงตามสถานะ
            </label>
            <button id="st-review-start" class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 flex-shrink-0">🔎 ตรวจทีละคน</button>
          </div>
        </div>
        <div class="overflow-y-auto flex-1 p-5 space-y-2" id="st-row-list"></div>
      </div>`,document.body.appendChild(s);const r=u=>{var T;const i=`<div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[10px] flex-shrink-0">
        ${u.image_url?`<img src="${c(u.image_url)}" class="w-full h-full object-cover"/>`:c((u.full_name??"?").charAt(0))}
      </div>`,p=`<span class="text-gray-400 font-mono text-[10px] flex-shrink-0">#${W.get(u.id)??"—"}</span>`,_=t[u.id];if(!_)return`<div class="sc-track-row flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs cursor-pointer hover:border-indigo-200" data-sid="${u.id}">
        <div class="flex items-center gap-2 min-w-0">
          ${i}
          ${p}
          <span class="font-semibold text-gray-600 truncate">${c(u.full_name??"")}</span>
        </div>
        <span class="text-gray-300 font-medium flex-shrink-0">ยังไม่ส่ง</span>
      </div>`;const L=Ye(e,_.submitted_at),S=tt(_);return`<div class="sc-track-row px-3 py-2.5 rounded-xl border ${L?"border-amber-200 bg-amber-50":"border-gray-100 bg-gray-50"} text-xs cursor-pointer hover:border-indigo-200" data-sid="${u.id}">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${i}
            ${p}
            <span class="font-semibold text-gray-700 truncate">${c(u.full_name??"")}</span>
          </div>
          <span class="text-gray-400 flex-shrink-0">${new Date(_.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</span>
        </div>
        <div class="flex items-center justify-between mt-1.5">
          ${(T=_.file_urls)!=null&&T.length?`<div class="flex flex-wrap gap-1.5">${_.file_urls.map(g=>`<span class="text-[10px] px-2 py-1 rounded-lg bg-white border border-gray-200 text-indigo-600">📎 ${c(g.name)}</span>`).join("")}</div>`:"<span></span>"}
          ${rs(S)}
        </div>
        ${L?`<p class="text-[10px] text-amber-700 font-bold mt-1.5">⏰ ส่งช้า ${ut(e,_.submitted_at)} วัน</p>`:""}
      </div>`};let n=!1;const a=()=>{const u=n?[...v].sort((i,p)=>as[tt(t[i.id])]-as[tt(t[p.id])]):v;s.querySelector("#st-row-list").innerHTML=u.map(r).join(""),s.querySelectorAll(".sc-track-row").forEach(i=>i.addEventListener("click",()=>{os(e,parseInt(i.dataset.sid,10))}))};s._refresh=a,a(),s.addEventListener("click",u=>{u.target===s&&s.remove()}),s.querySelector("#st-close").addEventListener("click",()=>s.remove()),s.querySelector("#st-edit").addEventListener("click",()=>{s.remove(),yt(e)}),s.querySelector("#st-delete").addEventListener("click",async()=>{if(confirm(`ลบงาน "${e.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await _s(e.id),x("ลบงานแล้ว","success"),s.remove(),P()}catch(u){x("ลบไม่สำเร็จ: "+N(u),"error")}}),s.querySelector("#st-sort-toggle").addEventListener("change",u=>{n=u.target.checked,a()});const l=()=>{var u;return(u=v.find(i=>t[i.id])??v[0])==null?void 0:u.id};(f=s.querySelector("#st-review-start"))==null||f.addEventListener("click",()=>{const u=l();u!=null&&os(e,u)})}const tt=e=>e?e.status==="rejected"?"rejected":e.hasScore?"graded":e.reviewed_at?"reviewed":"unreviewed":"unsubmitted",rs=e=>({unreviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex-shrink-0">🔵 ยังไม่ตรวจ</span>',reviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">🟡 ตรวจแล้ว ยังไม่ให้คะแนน</span>',graded:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">✅ ให้คะแนนแล้ว</span>',rejected:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex-shrink-0">❌ ตีกลับ รอส่งใหม่</span>'})[e]??"",as={unreviewed:0,unsubmitted:1,reviewed:2,rejected:3,graded:4},vt={praise:["ทำได้ดีมากครับ/ค่ะ เห็นความตั้งใจชัดเจน ขอให้อัลลอฮ์ทรงประทานบารอกัตในความพยายามของเธอนะ 🌟","เก่งมากเลย ครูภูมิใจในตัวเธอ ขอดุอาอ์ให้พัฒนาต่อไปเรื่อยๆ อินชาอัลลอฮ์","ยอดเยี่ยม! งานชิ้นนี้แสดงถึงความพยายามที่ดีมาก ขอให้เป็นบารอกัตติดตัวเธอไปตลอด","สุดยอดค่ะ/ครับ ทำมาได้ดีมาก ครูขอดุอาอ์ให้เธอประสบความสำเร็จเสมอ"],improve:["ทำได้ดีในหลายจุดแล้วนะ ลองทบทวนอีกครั้งในส่วนที่ยังไม่สมบูรณ์ ครูเชื่อว่าเธอทำได้ดีกว่านี้ อินชาอัลลอฮ์","ครูเห็นความตั้งใจแล้ว ลองกลับไปทบทวนเพิ่มอีกนิดแล้วส่งใหม่ได้นะ ครูให้กำลังใจอยู่เสมอ","ยังไม่สมบูรณ์เท่าที่ควร แต่ไม่เป็นไรนะ ทุกความผิดพลาดคือบทเรียน ลองแก้ไขแล้วส่งมาใหม่ได้เลย","อยากให้ตรวจทานอีกรอบก่อนส่งครั้งหน้า ครูเชื่อมั่นในศักยภาพของเธอ ขอให้อัลลอฮ์ทรงช่วยให้เข้าใจง่ายขึ้นนะ"]},Tn=e=>{var s;const t=((s=(e.name??"").split(".").pop())==null?void 0:s.toLowerCase())??"";return["jpg","jpeg","png","gif","webp"].includes(t)?"image":t==="pdf"?"pdf":"other"};function os(e,t){var f;(f=document.getElementById("sc-grade-card"))==null||f.remove();const s=Object.fromEntries(e.submissions.map(u=>[u.student_id,u])),r=H.find(u=>u.id===e.score_column_id);let n=Math.max(0,v.findIndex(u=>u.id===t));const a=document.createElement("div");a.id="sc-grade-card",a.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/55 p-4",document.body.appendChild(a);const l=e.max_score!=null?parseFloat(e.max_score):r?parseFloat(r.max_score):null,o=()=>{var A,I,B,C,F,y,V,re,Z,k;const u=v[n],i=s[u.id],p=i&&Ye(e,i.submitted_at),_=i?on(e,i.submitted_at):0,L=i!=null&&i.hasScore?i.savedScore??"":l!=null?Math.max(0,(l||0)-_):"";i&&!i.reviewed_at&&(i.reviewed_at=new Date().toISOString(),tr(e.id,u.id).catch(()=>{}));const S=i&&(A=i.file_urls)!=null&&A.length?i.file_urls.map((h,$)=>{const q=Tn(h);return q==="image"?`<a href="${c(h.url)}" target="_blank" rel="noopener" class="block rounded-xl overflow-hidden border border-gray-200 mb-2"><img src="${c(h.url)}" class="w-full max-h-72 object-contain bg-gray-50" loading="lazy" /></a><button type="button" data-write-review="${$}" class="mb-3 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-sm">✍️ เขียนตรวจงาน</button>`:q==="pdf"?`<iframe src="${c(h.url)}" class="w-full h-72 rounded-xl border border-gray-200 mb-2"></iframe>`:`<a href="${c(h.url)}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-indigo-600 hover:bg-indigo-50 mb-2">📎 ${c(h.name)} <span class="text-gray-400">(เปิดแท็บใหม่ — ไม่รองรับพรีวิว)</span></a>`}).join(""):"";a.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <button id="sgc-prev" ${n<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-11 h-11 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0">
                ${u.image_url?`<img src="${c(u.image_url)}" class="w-full h-full object-cover"/>`:c((u.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate text-sm">${c(u.full_name??"—")}</p>
                <p class="text-[11px] text-gray-400">เลขที่ ${W.get(u.id)??"—"} · ${c(u.student_code??"")}</p>
              </div>
              <button id="sgc-next" ${n>=v.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sgc-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sgc-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sgc-jump" type="number" min="1" max="${v.length}" value="${W.get(u.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${v.length}</span>
              <span class="text-[11px] text-gray-300 ml-auto">${n+1} / ${v.length} คน</span>
            </div>
            ${i?`<div class="mt-2">${rs(tt(i))}</div>`:""}
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${i?`
              <p class="text-[11px] text-gray-400 mb-2">ส่งเมื่อ ${new Date(i.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</p>
              ${p?`<p class="text-[11px] text-amber-700 font-bold mb-2">⏰ ส่งช้า ${ut(e,i.submitted_at)} วัน${_>0?` — หักคะแนนแนะนำ ${_}`:""}</p>`:""}
              ${S}
              ${i.note?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3"><p class="text-[10px] font-bold text-gray-400 mb-0.5">ข้อความจากนักเรียน</p><p class="text-xs text-gray-600">${c(i.note)}</p></div>`:""}
              ${r?`<div class="mb-3">
                <div class="flex items-center gap-2">
                  <input id="sgc-grade" type="number" min="0" max="${l??""}" class="w-20 text-center border border-gray-200 rounded-lg px-1 py-1.5 font-mono font-bold text-indigo-600" value="${L}" placeholder="—" />
                  <span class="text-xs text-gray-400">/ ${l??r.max_score}</span>
                  <button id="sgc-grade-save" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg ml-auto">บันทึกคะแนน</button>
                </div>
                <p class="text-[10px] text-gray-400 mt-1">โหมดคะแนน: ${((I=lt[e.score_write_mode??"overwrite"])==null?void 0:I.label)??""} · บันทึกอัตโนมัติเมื่อออกจากช่องกรอก</p>
              </div>`:'<p class="text-[11px] text-gray-300 mb-3">งานนี้ไม่ได้ผูกกับคอลัมน์คะแนน</p>'}
              <div>
                <label for="sgc-feedback" class="text-[11px] font-bold text-gray-500 mb-1 block">คอมเมนต์ถึงนักเรียน</label>
                <div class="flex flex-wrap gap-1.5 mb-1.5">
                  <span class="text-[10px] text-gray-400 flex items-center">💚 ชื่นชม:</span>
                  ${vt.praise.map((h,$)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100" data-tmpl="praise-${$}">ตัวอย่าง ${$+1}</button>`).join("")}
                </div>
                <div class="flex flex-wrap gap-1.5 mb-2">
                  <span class="text-[10px] text-gray-400 flex items-center">💡 ปรับปรุง:</span>
                  ${vt.improve.map((h,$)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100" data-tmpl="improve-${$}">ตัวอย่าง ${$+1}</button>`).join("")}
                </div>
                <textarea id="sgc-feedback" rows="2" placeholder="เช่น ทำได้ดีมาก แต่ข้อ 3 ทบทวนอีกครั้ง — หรือกดตัวอย่างด้านบนแล้วแก้ไขต่อได้" class="w-full text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none">${c(i.teacher_feedback??"")}</textarea>
                <div class="flex items-center gap-2 mt-1.5">
                  <button id="sgc-feedback-save" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">บันทึกคอมเมนต์</button>
                  ${i.status==="rejected"?'<span class="text-[11px] text-red-500 font-semibold">❌ ตีกลับแล้ว รอนักเรียนส่งใหม่</span>':'<button id="sgc-reject" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 ml-auto">❌ ตีกลับให้แก้ไข</button>'}
                </div>
              </div>`:`
              <div class="text-center py-10 text-gray-300">
                <p class="text-3xl mb-2">📭</p>
                <p class="text-sm font-semibold text-gray-400">ยังไม่ส่งงานชิ้นนี้</p>
              </div>`}
          </div>
        </div>`,a.querySelector("#sgc-close").addEventListener("click",()=>d()),(B=a.querySelector("#sgc-prev"))==null||B.addEventListener("click",()=>{n>0&&(n--,o())}),(C=a.querySelector("#sgc-next"))==null||C.addEventListener("click",()=>{n<v.length-1&&(n++,o())});const T=()=>{const h=a.querySelector("#sgc-jump"),$=parseInt(h.value,10),q=Et.get($);if(!q){x(`ไม่พบเลขที่ ${h.value}`,"warning"),h.value=W.get(u.id)??"";return}const j=v.findIndex(be=>be.id===q.id);j!==n&&(n=j,o())};a.querySelectorAll("[data-write-review]").forEach(h=>h.addEventListener("click",async()=>{h.disabled=!0;try{const{openAssignmentImageEditor:$}=await wt(async()=>{const{openAssignmentImageEditor:q}=await import("./assignment-image-editor-BwgWPbTp.js");return{openAssignmentImageEditor:q}},__vite__mapDeps([17,14,3,1]));await $({submission:i,file:i.file_urls[Number(h.dataset.writeReview)],studentName:u.full_name})}catch($){x("เปิดหน้าตรวจไม่ได้: "+N($),"error")}finally{h.disabled=!1}})),(F=a.querySelector("#sgc-jump"))==null||F.addEventListener("change",T),(y=a.querySelector("#sgc-jump"))==null||y.addEventListener("keydown",h=>{h.key==="Enter"&&T()});const g=async()=>{const h=a.querySelector("#sgc-grade-save"),$=a.querySelector("#sgc-grade").value.trim(),q=$===""?0:parseFloat($);if(!Number.isFinite(q)||q<0||l!=null&&q>l){x(`คะแนนต้องอยู่ระหว่าง 0 – ${l??r.max_score}`,"warning");return}h.disabled=!0;try{const j=await rr(e.id,u.id,q);i.hasScore=!0,i.savedScore=q;const be=ue[u.id]??(ue[u.id]=[]);let Ce=be.find(st=>st.score_column_id===j.columnId);Ce||(Ce={student_id:u.id,score_column_id:j.columnId},be.push(Ce)),Object.assign(Ce,{score:j.score,original_score:j.originalScore,retake_score:j.retakeScore,final_score:j.finalScore,score_history:j.scoreHistory}),wr(j),document.getElementById("sc-roster")&&Fe(),x("บันทึกคะแนนแล้ว ✅","success"),o()}catch(j){x("บันทึกไม่สำเร็จ: "+N(j),"error"),h.disabled=!1}};(V=a.querySelector("#sgc-grade-save"))==null||V.addEventListener("click",g),(re=a.querySelector("#sgc-grade"))==null||re.addEventListener("change",g),a.querySelectorAll(".sgc-tmpl").forEach(h=>h.addEventListener("click",()=>{const[$,q]=h.dataset.tmpl.split("-"),j=a.querySelector("#sgc-feedback");j.value=vt[$][parseInt(q,10)],j.focus()})),(Z=a.querySelector("#sgc-feedback-save"))==null||Z.addEventListener("click",async()=>{const h=a.querySelector("#sgc-feedback-save"),$=a.querySelector("#sgc-feedback").value.trim();h.disabled=!0;try{await sr(e.id,u.id,$),i.teacher_feedback=$,x("บันทึกคอมเมนต์แล้ว ✅","success")}catch(q){x("บันทึกไม่สำเร็จ: "+N(q),"error")}finally{h.disabled=!1}}),(k=a.querySelector("#sgc-reject"))==null||k.addEventListener("click",async()=>{const h=a.querySelector("#sgc-feedback").value.trim();if(!h){x("กรอกเหตุผลในช่องคอมเมนต์ก่อนตีกลับงาน","warning"),a.querySelector("#sgc-feedback").focus();return}if(!confirm(`ตีกลับงานของ "${u.full_name}" ให้แก้ไขใหม่?

เหตุผล: ${h}`))return;const $=a.querySelector("#sgc-reject");$.disabled=!0;try{await nr(e.id,u.id,h),i.status="rejected",i.teacher_feedback=h,x("ตีกลับงานแล้ว — นักเรียนจะเห็นเหตุผลนี้และส่งใหม่ได้","success"),o()}catch(q){x("ตีกลับไม่สำเร็จ: "+N(q),"error"),$.disabled=!1}})},d=()=>{var u,i;a.remove(),(i=(u=document.getElementById("sc-track-modal"))==null?void 0:u._refresh)==null||i.call(u)};a.addEventListener("click",u=>{u.target===a&&d()}),o()}}export{zr as canUseSmartClassroomForClass,Nr as findCurrentOrNextClass,ma as openSmartClassroomLanding,Ee as renderSmartClassroom,Ws as resolveSmartClassroomAccess};
