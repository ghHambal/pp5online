const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-DLz0kuJO.js","assets/ui-Dw34xP85.js","assets/quiz-api-BIDUVPR5.js","assets/supabase-BV-W2lsh.js","assets/import-B9koCv_2.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-utils-CcIxYoIw.js","assets/katex-loader-DUJObfzT.js","assets/chat-classroom-BjPgwmpg.js","assets/api-Bf4Tf4Cp.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/student-api-DXsWQ_3V.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js"])))=>i.map(i=>d[i]);
import{a as x,g as B,n as In,_ as gs}from"./ui-Dw34xP85.js";import{getSystemConfig as zs,getMyClasses as He,getMySchedule as Ns,getClassScheduleLinks as Ds,getPeriods as Ps,setSmartClassroomFreeClass as Hs,getClassStudents as Cn,getActiveLeavePermissionsForClass as Mn,getLeaveMaxActiveForClass as Tn,getLeaveMaxPerStudentWeekForClass as An,getScoreColumns as Bn,getStudentScores as zn,getClassAttendanceAllFull as Nn,getClassLeaveHistory as Dn,getClassAssignmentsWithSubmissions as Pn,getTeacherExamRequests as Hn,getClassAnnouncements as Fn,getAnnouncementTypeSuggestions as On,getCourseSyllabus as Rn,getLessonPlans as Qn,getClassSessionDOWs as fs,closeLeavePermission as vt,createAnnouncement as Gn,deleteAssignment as ys,updateAssignment as Un,createAssignment as Wn,getMyDonationRequests as Vn,saveStudentScore as Yn,saveAttendanceCell as Xn,deleteSyllabusItem as vs,updateLessonPlan as hs,deleteLessonPlan as ws,markAssignmentSubmissionReviewed as Jn,saveAssignmentFeedback as Zn,rejectAssignmentSubmission as Kn,saveAssignmentGrade as er,updateSyllabusItem as tr,createSyllabusItem as sr,createLessonPlan as nr}from"./api-Bf4Tf4Cp.js";import{_ as nt,a as Fs,b as rr}from"./teacher-B2ZUQRZE.js";import{l as or,m as ks,s as ar,n as lr,o as ir,f as dr,k as cr,c as ur,p as pr}from"./quiz-api-BIDUVPR5.js";import{openScoreScanner as mr}from"./score-qr-scanner-DlvhhgkY.js";import{_openAttendanceModalForSession as _s,_openLeaveRequestModal as $s,_openLeaveQuotaModal as br,openAttendanceScanSetup as xr,renderAttendanceGrid as gr}from"./teacher-views-attendance-BcU-JXax.js";import{p as fr,a as yr}from"./teacher-views-grades-DEPKarZO.js";import{openQuizMonitor as Ss}from"./teacher-views-quiz-monitor-BkuCBbcY.js";import{openQuizAnalytics as vr}from"./teacher-views-quiz-analytics-DcOCMZI8.js";import{openClassDashboard as hr}from"./teacher-views-dashboard-DhbvEKQG.js";import{e as Pe,o as wr,_ as kr,j as _r}from"./teacher-views-classes-Dfj6NaFe.js";import{uploadAssignmentFile as Es}from"./storage-CuUjCgvI.js";import{_htmlEsc as u,setActiveNav as Ls,setTitle as qs,setContent as tt,_currentWeek as $r,ATT_STATUS as st,_generateSessions as js,_dateInputValue as Is,openFullScreenGridOverlay as Sr}from"./teacher-views-utils-CcIxYoIw.js";import{s as Er}from"./supabase-BV-W2lsh.js";import{b as Lr,e as Cs}from"./score-display-CQ4dUIPx.js";import{openLessonPlanAIWorkspace as Ms,openLessonPlanDocument as qr}from"./lesson-plan-ai-workspace-DSAy33Oi.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./regrade-notifications--64rJp2Z.js";import"./promptpay-CIuxvxIA.js";import"./browser-JP79f-a9.js";import"./sync-DqwcQWV1.js";import"./theme-qDnPEUQn.js";import"./academic-term-switcher-BEH7jaVk.js";import"./anti-pull-refresh-BGrI1pMY.js";import"./push-notify-CvrEZx9U.js";import"./wen-sso-CcN06Rhh.js";import"./azizgames-modal-CZNvwg6f.js";import"./sports-portals.js_v_10.22-Dz4YR1a0.js";import"./sports-awards-admin-6oCPrlSb.js";import"./print-overlay-BVfxEd6n.js";import"./tutorial-DqRRkJk5.js";import"./terangganu-api-C1IjZK4l.js";import"./regrade-api-CLR_bWyN.js";import"./leave-time-CrS9gT63.js";import"./pp5-doc-CXhD6zs9.js";import"./ai-prompt-gate-D6R7FVed.js";import"./confetti-loader-BAN5Lv-C.js";import"./council-api-DYf7ov7O.js";function jr(p){var m;return((m=String((p==null?void 0:p.donationSpecialFeatures)??"").split(`
`).map(q=>{const O=q.split("|");return{text:O[1]??"",minTier:parseInt(O[2])||1}}).find(q=>q.text.includes("Smart Classroom")))==null?void 0:m.minTier)??4}async function Os(p){const m=await zs().catch(()=>window._pp5SystemCfg??{}),q=jr(m);let O=window._pp5DonorTierIndex??0,Z=[];if(p!=null&&p.id)try{Z=await Vn(p.id);const R=Z.filter(z=>z.package_type==="donation"&&z.status==="approved").reduce((z,X)=>z+(X.amount??0),0),v=nt(m.donationMinAmount,49),_=nt(m.donationAmountStep,50),Y=Fs(m,v,_),M=Math.max(0,...Z.filter(z=>z.package_type==="donation"&&z.status==="approved").map(z=>Number.parseInt(String(z.donation_tier??""),10)).filter(z=>Number.isInteger(z)&&z>=1&&z<=Y.length));O=Math.max(rr(m,Y,R),M)}catch{}return{cfg:m,minTier:q,unlocked:O>=q,donationRequests:Z}}function Ir(p,m){var O;return nt(p.donationMinAmount,49),nt(p.donationAmountStep,50),((O=Fs(p)[m-1])==null?void 0:O.amount)??null}function Cr(p,m,q){return p?!0:(m==null?void 0:m.smart_classroom_free_class_id)===q}async function Rs(p,m,{preselectClassId:q=null,onPicked:O}={}){var v;(v=document.getElementById("sc-pick-modal"))==null||v.remove();const Z=await He(p.id).catch(()=>[]),R=document.createElement("div");R.id="sc-pick-modal",R.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/60 p-4",R.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
      <div class="px-6 pt-6 pb-4 flex-shrink-0 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <div class="text-4xl mb-1">🎁</div>
        <h3 class="text-white font-extrabold text-base">ใช้ Smart Classroom ฟรี 1 ห้องเรียน</h3>
        <p class="text-white/80 text-[11px] mt-1 leading-relaxed">เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด<br>หากต้องการเปลี่ยนห้องภายหลังต้องติดต่อแอดมิน</p>
      </div>
      <div class="overflow-y-auto flex-1 p-4 space-y-2">
        ${Z.length?Z.map(_=>`
          <label class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition hover:border-amber-300 ${_.id===q?"border-amber-400 bg-amber-50":"border-gray-200"}">
            <input type="radio" name="sc-pick-class" value="${_.id}" class="w-4 h-4" ${_.id===q?"checked":""} />
            <span class="text-sm font-semibold text-gray-700">${u(_.class_name)}</span>
          </label>`).join(""):'<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>'}
      </div>
      <div class="p-4 flex-shrink-0 border-t border-gray-100">
        <button id="sc-pick-confirm" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)" ${Z.length?"":"disabled"}>✅ ยืนยันใช้ห้องนี้</button>
        <button id="sc-pick-cancel" class="w-full py-2 mt-1.5 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(R),R.addEventListener("click",_=>{_.target===R&&R.remove()}),R.querySelector("#sc-pick-cancel").addEventListener("click",()=>R.remove()),R.querySelector("#sc-pick-confirm").addEventListener("click",async()=>{const _=R.querySelector('input[name="sc-pick-class"]:checked');if(!_){x("กรุณาเลือกห้องเรียน","warning");return}const Y=parseInt(_.value),M=R.querySelector("#sc-pick-confirm");M.disabled=!0,M.textContent="กำลังบันทึก...";try{if(!await Hs(p.id,Y)){x("มีการเลือกห้องไปแล้วก่อนหน้านี้ กรุณาลองใหม่","error"),R.remove();return}p.smart_classroom_free_class_id=Y,R.remove(),x("เลือกห้องฟรีสำเร็จ ✅","success"),O==null||O(Y)}catch(z){x("บันทึกไม่สำเร็จ: "+B(z),"error"),M.disabled=!1,M.textContent="✅ ยืนยันใช้ห้องนี้"}})}function Ts(p){const m=Math.max(0,Math.floor((Date.now()-new Date(p).getTime())/6e4));return m<1?"<1 นาที":`${m} นาที`}const As="pp5_sc_skip_popup";async function Mr(p){var ve,Q,ae,Ae;const m=window._pp5SystemCfg??await zs().catch(()=>({})),q=parseInt(m.academicYear??2568),O=parseInt(m.semester??1),[Z,R,v,_]=await Promise.all([He(p.id).catch(()=>[]),Ns(p.id,q,O).catch(()=>[]),Ds(p.id).catch(()=>[]),Ps().catch(()=>[])]);if(!Z.length)return{classId:null,mode:"none"};const Y=Object.fromEntries(_.map(N=>[N.period_no,N])),M=Object.fromEntries(R.map(N=>[N.id,N])),z=[];for(const N of v){const re=M[N.teacher_schedule_id];if(!re)continue;const he=(re.period_no??1)+(re.span_periods??1)-1;z.push({classId:N.class_id,day_of_week:re.day_of_week,period:Y[re.period_no],actualEndPeriod:Y[he]??Y[re.period_no]})}const X=new Date,ye=X.getDay(),D=X.getHours()*3600+X.getMinutes()*60+X.getSeconds();for(const N of z){if(N.day_of_week!==ye||!((ve=N.period)!=null&&ve.start_time)||!((Q=N.actualEndPeriod)!=null&&Q.end_time))continue;const[re,he]=N.period.start_time.split(":").map(Number),[we,K]=N.actualEndPeriod.end_time.split(":").map(Number),J=re*3600+he*60,Fe=we*3600+K*60;if(D>=J&&D<Fe)return{classId:N.classId,mode:"live"}}let de=null;for(const N of z){if(!((ae=N.period)!=null&&ae.start_time))continue;const[re,he]=N.period.start_time.split(":").map(Number),we=re*3600+he*60;let K=(N.day_of_week-ye+7)%7;K===0&&we<=D&&(K=7);const J=K*86400+we-D;(de===null||J<de.totalSecUntil)&&(de={totalSecUntil:J,classId:N.classId})}return de?{classId:de.classId,mode:"upcoming"}:{classId:((Ae=Z[0])==null?void 0:Ae.id)??null,mode:"none"}}async function ho(p){var z,X,ye,D,de,ve;const{cfg:m,minTier:q,unlocked:O}=await Os(p);if(O&&localStorage.getItem(As)==="1"){Bs(p);return}if(!O&&(p!=null&&p.smart_classroom_free_class_id)){$e(p,p.smart_classroom_free_class_id);return}(z=document.getElementById("sc-landing-modal"))==null||z.remove();const Z=((X=m.smartClassroomLandingTitle)==null?void 0:X.trim())||"Smart Classroom — หน้าควบคุมขณะสอนสด",R=((ye=m.smartClassroomLandingDesc)==null?void 0:ye.trim())||"ทุกวินาทีระหว่างสอนสดมีค่า — ไม่ต้องเสียเวลาสลับหน้าจอไปมาระหว่างเช็คชื่อ คุมเวลา เปิดควิซ หรือสั่งงาน อีกต่อไป Smart Classroom รวมทุกเครื่องมือที่คุณใช้บ่อยที่สุดไว้จอเดียว ให้คุณโฟกัสกับการสอนได้เต็มที่ นักเรียนก็ได้รับข่าวสารถึงมือถือทันทีโดยไม่พลาด และแผนการสอน/บันทึกหลังสอนของคุณจะถูกเก็บเป็นระบบ พร้อมให้ตรวจสอบได้ทุกเมื่อโดยไม่ต้องมานั่งรวบรวมทีหลัง",v=[m.smartClassroomLandingImg1,m.smartClassroomLandingImg2,m.smartClassroomLandingImg3].filter(Boolean),_=[{emoji:"⏱️",text:"ไม่ต้องสลับหน้าจอนับสิบรอบระหว่างสอน ทุกเครื่องมือรวมไว้จอเดียว"},{emoji:"📲",text:"นักเรียนไม่พลาดประกาศ/งานอีกต่อไป แจ้งเตือนถึงมือถือทันทีที่กดส่ง"},{emoji:"📋",text:"แผนการสอน+บันทึกหลังสอนเป็นระบบ พร้อมตรวจสอบได้ทุกเมื่อ"}],Y=["✅ เช็คชื่ออัตโนมัติ","🚪 Hall Pass สด","🎲 สุ่ม/จัดกลุ่ม","🧠 เปิดควิซสด","📚 สั่งงาน/ติดตามงาน","📘 กำหนดการสอน+แผนการสอน","🖊️ บันทึกหลังสอน+เซ็นชื่อ","📣 ประกาศแนบไฟล์+แจ้งเตือนมือถือ"],M=document.createElement("div");M.id="sc-landing-modal",M.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",M.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade">
      <div class="relative px-6 py-8 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <button id="sl-close" class="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none">✕</button>
        <div class="text-5xl mb-2">👑</div>
        <h2 class="text-white font-extrabold text-xl">${u(Z)}</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${_.map(Q=>`
            <div class="px-3 py-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <div class="text-xl mb-1">${Q.emoji}</div>
              <p class="text-[11px] font-bold text-amber-800 leading-snug">${u(Q.text)}</p>
            </div>`).join("")}
        </div>
        <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">${u(R)}</p>
        ${v.length?`<div class="grid ${v.length>1?"grid-cols-2":"grid-cols-1"} gap-2">${v.map(Q=>`<img src="${u(Q)}" class="w-full rounded-xl border border-gray-100 object-cover" />`).join("")}</div>`:""}
        <div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">🎁 รวมฟีเจอร์เหล่านี้ไว้ให้แล้ว</p>
          <div class="grid grid-cols-2 gap-1.5 text-[11px] text-gray-500">
            ${Y.map(Q=>`<div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50">${Q}</div>`).join("")}
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
          <p class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 text-center">🎁 ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน หรือสนับสนุนระบบระดับ ${q} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้อง</p>
          <button id="sl-free" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 เลือกห้องที่จะใช้ฟรี</button>
          <button id="sl-donate" class="w-full py-2.5 rounded-2xl text-amber-700 font-semibold text-xs hover:bg-amber-50 transition border border-amber-200">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        `}
      </div>
    </div>`,document.body.appendChild(M),M.addEventListener("click",Q=>{Q.target===M&&M.remove()}),M.querySelector("#sl-close").addEventListener("click",()=>M.remove()),(D=M.querySelector("#sl-start"))==null||D.addEventListener("click",()=>{var Q;(Q=M.querySelector("#sl-skip"))!=null&&Q.checked&&localStorage.setItem(As,"1"),M.remove(),Bs(p)}),(de=M.querySelector("#sl-free"))==null||de.addEventListener("click",()=>{M.remove(),Rs(p,m,{onPicked:Q=>$e(p,Q)})}),(ve=M.querySelector("#sl-donate"))==null||ve.addEventListener("click",()=>{var Q;M.remove(),(Q=document.getElementById("btn-donate-float"))==null||Q.click()})}async function Bs(p){x("กำลังตรวจสอบตารางสอน...","info");const{classId:m}=await Mr(p);if(!m){x("ยังไม่มีห้องเรียน กรุณาสร้างห้องเรียนก่อนครับ","warning");return}$e(p,m)}async function $e(p,m){var ss,ns,rs,os,as,ls,is,ds,cs,us,ps,ms,bs;Ls("my-classes"),qs("Smart Classroom"),tt(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const{cfg:q,minTier:O,unlocked:Z,donationRequests:R}=await Os(p);if(!Cr(Z,p,m)){const e=p==null?void 0:p.smart_classroom_free_class_id;if(!e){tt(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
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
      </div>`),(ss=document.getElementById("sc-free-confirm"))==null||ss.addEventListener("click",async n=>{const o=n.currentTarget;o.disabled=!0,o.textContent="กำลังบันทึก...";try{if(!await Hs(p.id,m)){x("มีการเลือกห้องไปแล้วก่อนหน้านี้","error"),$e(p,m);return}p.smart_classroom_free_class_id=m,x("เลือกห้องฟรีสำเร็จ ✅","success"),$e(p,m)}catch(l){x("บันทึกไม่สำเร็จ: "+B(l),"error"),o.disabled=!1,o.textContent="🎁 ใช้ห้องนี้ฟรี"}}),(ns=document.getElementById("sc-free-other"))==null||ns.addEventListener("click",()=>{Rs(p,q,{preselectClassId:m,onPicked:n=>$e(p,n)})}),(rs=document.getElementById("sc-back"))==null||rs.addEventListener("click",()=>Pe(p,m));return}const t=((os=(await He(p.id).catch(()=>[])).find(n=>n.id===e))==null?void 0:os.class_name)??`ห้อง #${e}`,r=Ir(q,O);tt(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
      <div class="text-6xl mb-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">Smart Classroom</p>
      <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณใช้สิทธิ์ฟรีกับห้อง <b>${u(t)}</b> ไปแล้ว<br>หากต้องการใช้ห้องนี้ด้วย กรุณาสนับสนุนระบบระดับ ${O}${r?` (${r} บาท)`:""} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้องครับ</p>
      <button id="sc-upgrade" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#a9781a,#e6c988)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      <div class="mt-3">
        <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
      </div>
    </div>`),(as=document.getElementById("sc-upgrade"))==null||as.addEventListener("click",()=>{var n;return(n=document.getElementById("btn-donate-float"))==null?void 0:n.click()}),(ls=document.getElementById("sc-back"))==null||ls.addEventListener("click",()=>Pe(p,m));return}let v,_,Y,M,z,X,ye,D,de,ve,Q,ae,Ae,N,re,he,we,K,J,Fe,oe=null;try{const e=parseInt(q.academicYear??2568),s=parseInt(q.semester??1);ye=R;let t;if([t,_,Y,M,z,X,D,de,ve,Q,ae,Ae,N,re,he,we,Fe]=await Promise.all([He(p.id),Cn(m).catch(()=>[]),Mn(m).catch(()=>[]),Tn(m).catch(()=>3),An(m).catch(()=>2),or(m).catch(()=>[]),Bn(m).catch(()=>[]),zn(m).catch(()=>[]),Nn(m).catch(()=>[]),Dn(m).catch(()=>[]),Pn(m).catch(()=>[]),Hn(p.id).catch(()=>[]),Ns(p.id,e,s).catch(()=>[]),Ds(p.id).catch(()=>[]),Ps().catch(()=>[]),Fn(m).catch(()=>[]),On().catch(()=>[])]),v=t.find(r=>r.id===m),!v){Pe(p,m);return}oe=v.course_id??((is=v.master_subjects)==null?void 0:is.id)??null,[K,J]=await Promise.all([oe?Rn(oe,m).catch(()=>[]):Promise.resolve([]),oe?Qn(oe,m).catch(()=>[]):Promise.resolve([])])}catch(e){x("โหลดข้อมูลไม่สำเร็จ: "+B(e),"error"),Pe(p,m);return}const ht=ye.some(e=>e.package_type==="donation"&&e.status==="approved"),Oe=v.master_subjects??{};let xe=Object.fromEntries(Y.map(e=>[e.student_id,e]));const Re=Object.fromEntries(_.map(e=>[e.id,e])),le=X.find(e=>e.status==="started")??null;let Qe={};if(le){const e=await ks(le.id).catch(()=>[]);Qe=Object.fromEntries(e.map(s=>[s.student_id,s]))}const Qs={in_progress:{icon:"📝",cls:"bg-emerald-500"},submitted:{icon:"✅",cls:"bg-blue-500"},terminated_violation:{icon:"🔒",cls:"bg-red-500"}},rt=[{emoji:"📢",label:"ทั่วไป"},{emoji:"📚",label:"การบ้าน"},{emoji:"📄",label:"เอกสารประกอบ"},{emoji:"⏰",label:"กำหนดส่งงาน"},{emoji:"📝",label:"แบบทดสอบ"},{emoji:"📊",label:"คะแนน"},{emoji:"🎓",label:"กิจกรรม/ฝึกอบรม"},{emoji:"⚠️",label:"ด่วน/สำคัญ"}],ot={overwrite:{label:"ทับคะแนนเก่า (ค่าเริ่มต้น)",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/งานอื่น) จะเก็บค่าที่สูงกว่าไว้"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนงานนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายงาน"}},ce={};for(const e of de)(ce[ds=e.student_id]??(ce[ds]=[])).push(e);const Se={};for(const e of ve)(Se[cs=e.student_id]??(Se[cs]=[])).push(e);const Ge={};for(const e of Q)(Ge[us=e.student_id]??(Ge[us]=[])).push(e);const V=new Map(_.map((e,s)=>[e.id,s+1])),wt=new Map(_.map((e,s)=>[s+1,e])),kt=e=>{if(!D.length)return null;const s=ce[e.id]??[],t=D.reduce((n,o)=>n+(parseFloat(o.max_score)||0),0);return t<=0?null:D.reduce((n,o)=>{const l=s.find(a=>a.score_column_id===o.id);return n+(parseFloat(l==null?void 0:l.score)||0)},0)/t*100},_t=e=>{const s=Se[e.id]??[];return s.length?s.filter(t=>t.status==="present").length/s.length*100:null},$t=(e,s)=>{const t=(ce[e.id]??[]).find(r=>r.score_column_id===s);return(t==null?void 0:t.score)!=null?parseFloat(t.score):null},Ue=(e,s)=>{var n;const t=ae.find(o=>o.id===e),r=(n=t==null?void 0:t.submissions)==null?void 0:n.find(o=>o.student_id===s);return r?r.reviewed_at||r.hasScore?{key:"checked",rank:2,icon:"✓",label:"ตรวจแล้ว",cls:"bg-emerald-100 text-emerald-700 border-emerald-200"}:{key:"waiting",rank:0,icon:"●",label:"ส่งแล้ว รอตรวจ",cls:"bg-amber-100 text-amber-700 border-amber-200"}:{key:"missing",rank:1,icon:"○",label:"ยังไม่ส่ง",cls:"bg-gray-100 text-gray-500 border-gray-200"}};let W={key:"seatno"};const Gs=e=>{if(W.key==="total"){const s=kt(e);return s==null?null:`${s.toFixed(0)}%`}if(W.key==="att"){const s=_t(e);return s==null?null:`${s.toFixed(0)}%`}if(W.key.startsWith("col:")){const s=parseInt(W.key.slice(4),10),t=$t(e,s),r=D.find(n=>n.id===s);return t==null?null:`${t}${r?"/"+r.max_score:""}`}if(W.key.startsWith("assignment:")){const s=parseInt(W.key.slice(11),10),t=Ue(s,e.id);return`${t.icon} ${t.label}`}return null},Us=()=>{if(W.key==="seatno")return _;if(W.key==="name")return[..._].sort((s,t)=>(s.full_name??"").localeCompare(t.full_name??"","th"));if(W.key.startsWith("assignment:")){const s=parseInt(W.key.slice(11),10);return[..._].sort((t,r)=>Ue(s,t.id).rank-Ue(s,r.id).rank||V.get(t.id)-V.get(r.id))}const e=W.key==="total"?kt:W.key==="att"?_t:s=>$t(s,parseInt(W.key.slice(4),10));return[..._].sort((s,t)=>{const r=e(s),n=e(t);return r==null&&n==null?V.get(s.id)-V.get(t.id):r==null?1:n==null?-1:n-r})},St=`pp5-smart-classroom-layout-${m}`;let ie=(()=>{try{const e=JSON.parse(localStorage.getItem(St)??"null");return e&&typeof e=="object"?e:{template:"rows",splitGender:!1,order:[]}}catch{return{template:"rows",splitGender:!1,order:[]}}})();const Et=()=>{const e=Us(),s=new Map((ie.order??[]).map((t,r)=>[Number(t),r]));return!s.size||W.key!=="seatno"?e:[...e].sort((t,r)=>{const n=s.get(Number(t.id)),o=s.get(Number(r.id));return(n??Number.MAX_SAFE_INTEGER)-(o??Number.MAX_SAFE_INTEGER)||(V.get(t.id)??0)-(V.get(r.id)??0)})},Lt=()=>ie.template==="pairs"?"grid-cols-2 sm:grid-cols-4":ie.template==="groups"?"grid-cols-2 sm:grid-cols-4 lg:grid-cols-5":ie.template==="circle"?"grid-cols-3 sm:grid-cols-5 lg:grid-cols-6":"grid-cols-4 sm:grid-cols-6",Ws=()=>{try{localStorage.setItem(St,JSON.stringify(ie))}catch{}},qt=Ae.filter(e=>{var s;return((s=e.classes)==null?void 0:s.id)===m&&e.status!=="rejected"&&(e.status!=="approved"||e.exam_attended==null)}).sort((e,s)=>(e.requested_date??"").localeCompare(s.requested_date??"")),Vs=new Set(re.filter(e=>e.class_id===m).map(e=>e.teacher_schedule_id)),at=Object.fromEntries(he.map(e=>[e.period_no,e])),Be=N.filter(e=>Vs.has(e.id)).map(e=>({...e,period:at[e.period_no],actualEndPeriod:at[(e.period_no??1)+(e.span_periods??1)-1]??at[e.period_no]})).sort((e,s)=>e.day_of_week-s.day_of_week||e.period_no-s.period_no);function Ys(){var n,o,l;const e=new Date,s=e.getDay(),t=e.getHours()*3600+e.getMinutes()*60+e.getSeconds();for(const a of Be){if(a.day_of_week!==s||!((n=a.period)!=null&&n.start_time)||!((o=a.actualEndPeriod)!=null&&o.end_time))continue;const[d,y]=a.period.start_time.split(":").map(Number),[i,c]=a.actualEndPeriod.end_time.split(":").map(Number),b=d*3600+y*60,$=i*3600+c*60;if(t>=b&&t<$)return{mode:"live",remainingSec:$-t,slot:a}}let r=null;for(const a of Be){if(!((l=a.period)!=null&&l.start_time))continue;const[d,y]=a.period.start_time.split(":").map(Number),i=d*3600+y*60;let c=(a.day_of_week-s+7)%7;c===0&&i<=t&&(c=7);const b=c*86400+i-t;(r===null||b<r.totalSecUntil)&&(r={totalSecUntil:b,slot:a})}return r?{mode:"upcoming",remainingSec:r.totalSecUntil,slot:r.slot}:{mode:"none"}}const H=()=>(qe==null||qe(),$e(p,m)),jt=async(e,s,t)=>{const r=_.map(n=>n.profile_id).filter(Boolean);if(r.length)try{await Er.functions.invoke("send-push",{body:{title:e,body:s,url:"student.html",tag:t,profileIds:r}})}catch{}},It=()=>Et().map(e=>{const s=xe[e.id],t=Qe[e.id],r=le?Qs[t==null?void 0:t.status]??{icon:"⚪",cls:"bg-gray-300"}:null,n=Gs(e),o=W.key.startsWith("assignment:")?Ue(parseInt(W.key.slice(11),10),e.id):null;return`<div class="sc-stu-wrap relative" data-student-wrap data-sid="${e.id}">
      <div role="button" tabindex="0" data-sid="${e.id}"
        class="sc-stu relative border rounded-xl px-2 py-2.5 text-center hover:border-indigo-300 hover:-translate-y-0.5 transition cursor-pointer ${s?"border-amber-300 bg-amber-50":"border-gray-100 bg-gray-50"}">
      <span class="absolute top-1 left-1 text-[9px] font-bold text-gray-500 bg-white/80 border border-gray-200 rounded-full w-4 h-4 flex items-center justify-center" title="เลขที่ ${V.get(e.id)??"—"}">${V.get(e.id)??"—"}</span>
      ${s?'<span class="absolute top-1 right-1 text-[9px] font-bold bg-amber-500 text-white px-1 py-0.5 rounded">🚪</span>':""}
      <div class="relative w-9 h-9 mx-auto mb-1.5 mt-2 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
        ${e.image_url?`<img src="${u(e.image_url)}" class="w-full h-full object-cover"/>`:u((e.full_name??"?").charAt(0))}
        ${r?`<span class="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold ${r.cls} text-white w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-white" title="สถานะสอบ: ${(t==null?void 0:t.status)??"ยังไม่เข้าสอบ"}">${r.icon}</span>`:""}
      </div>
      <div class="text-[9px] text-gray-400 font-mono">${u(e.student_code??"")}</div>
      <div class="text-[11px] font-semibold text-gray-700 leading-tight truncate">${u(e.full_name??"")}</div>
      ${o?`<div class="mt-1 px-1.5 py-0.5 rounded-lg border text-[9px] font-bold truncate ${o.cls}">${o.icon} ${o.label}</div>`:n?`<div class="text-[10px] font-bold text-amber-600 mt-0.5">${u(n)}</div>`:""}
      </div>
    </div>`}).join(""),Xs=()=>Y.length?Y.map(e=>{const s=Re[e.student_id];return`<div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-amber-100 bg-amber-50 mb-2">
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs flex-shrink-0">
          ${s!=null&&s.image_url?`<img src="${u(s.image_url)}" class="w-full h-full object-cover"/>`:u(((s==null?void 0:s.full_name)??"?").charAt(0))}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-800 truncate">${u((s==null?void 0:s.full_name)??"—")}</p>
          <p class="text-[10px] text-gray-500 truncate">${u(e.reason??"")}</p>
        </div>
        <span class="text-xs font-bold text-amber-700 font-mono flex-shrink-0">${Ts(e.created_at)}</span>
        <button class="sc-return-btn text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 flex-shrink-0" data-lid="${e.id}">กลับแล้ว</button>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีนักเรียนออกนอกห้องตอนนี้</p>',Js=()=>X.length?`<div class="max-h-72 overflow-y-auto space-y-1.5 pr-0.5">${X.map(e=>`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <span class="text-base flex-shrink-0">🧠</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-700 truncate">${u(e.title??"ควิซ")}</p>
          <p class="text-[10px] text-gray-400">${e.status==="announced"?"พร้อมเริ่ม":e.status==="started"?"🔴 กำลังสอบสด":"ปิดแล้ว"}</p>
        </div>
        ${e.status==="announced"?`<button class="sc-quiz-start text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex-shrink-0" data-qid="${e.id}">▶ เริ่ม</button>`:""}
        ${e.status==="started"?`<button class="sc-quiz-monitor text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex-shrink-0" data-qid="${e.id}">🔴 ดูสด</button>
                                     <button class="sc-quiz-close text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 flex-shrink-0" data-qid="${e.id}">ปิด</button>`:""}
        ${e.status==="started"||e.status==="closed"?`<button class="sc-quiz-analytics text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100 flex-shrink-0" data-qid="${e.id}">📊 สถิติ</button>`:""}
      </div>`).join("")}</div>`:'<p class="text-xs text-gray-400">ห้องนี้ยังไม่มีควิซที่สร้างไว้</p>';function Zs(){var o;(o=document.getElementById("sc-quiz-quick"))==null||o.remove();const e=document.createElement("div");e.id="sc-quiz-quick",e.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",document.body.appendChild(e);const s=()=>{e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🧠 เปิดควิซให้ห้องนี้</h3>
          <p class="text-xs text-gray-400 mb-4">${u(v.class_name??"")}</p>
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
        </div>`,e.querySelector("#sqq-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#sqq-pick").addEventListener("click",t),e.querySelector("#sqq-new").addEventListener("click",n)},t=async()=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลดคลังข้อสอบ...</div>';const l=await dr(p.id).catch(()=>[]);if(!l.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">ยังไม่มีคลังข้อสอบเลย ลองสร้างใหม่ดูก่อนได้ครับ</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",s);return}e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">📚 เลือกคลังข้อสอบ</h3>
          <p class="text-xs text-gray-400 mb-4">${u(v.class_name??"")}</p>
          <div class="space-y-1.5 max-h-72 overflow-y-auto">
            ${l.map(a=>`
              <button class="sqq-bank-pick w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50/50 transition" data-id="${a.id}">
                <span class="text-sm font-semibold text-gray-700">${u(a.name)}</span>
                ${a.description?`<p class="text-[11px] text-gray-400 truncate">${u(a.description)}</p>`:""}
              </button>`).join("")}
          </div>
          <button id="sqq-back" class="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600">← กลับ</button>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelectorAll(".sqq-bank-pick").forEach(a=>a.addEventListener("click",()=>r(l.find(d=>d.id===a.dataset.id))))},r=async l=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลด...</div>';const a=await ur(l.id).catch(()=>[]);if(!a.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">คลัง "${u(l.name)}" ยังไม่มีคำถามเลย เพิ่มคำถามก่อนถึงจะเปิดสอบได้</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",t);return}const d=new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short"});e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🚀 เปิดสอบ: ${u(l.name)}</h3>
          <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${a.length} ข้อ · ${u(v.class_name??"")}</p>
          <div class="space-y-3">
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อการสอบครั้งนี้</label>
              <input id="sqq-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${u(l.name)} (${d})" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนข้อที่สุ่ม</label>
                <input id="sqq-num" type="number" min="1" max="${a.length}" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${Math.min(10,a.length)}" />
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
        </div>`,e.querySelector("#sqq-back").addEventListener("click",t),e.querySelector("#sqq-launch").addEventListener("click",async y=>{const i=e.querySelector("#sqq-title").value.trim(),c=parseInt(e.querySelector("#sqq-num").value,10);if(!i){x("กรุณาระบุชื่อการสอบ","warning");return}if(!c||c<1||c>a.length){x(`จำนวนข้อต้องอยู่ระหว่าง 1 – ${a.length}`,"warning");return}const b=y.target;b.disabled=!0,b.textContent="กำลังเปิด...";try{await pr({bank_id:l.id,class_id:m,title:i,num_questions:c,time_limit_minutes:parseInt(e.querySelector("#sqq-time").value,10)||null,status:"announced"}),x('สร้างควิซให้ห้องนี้แล้ว 🧠 กด "▶ เริ่ม" ในรายการเพื่อเปิดสอบสดได้เลย',"success"),e.remove(),H()}catch($){x("เปิดควิซไม่สำเร็จ: "+B($),"error"),b.disabled=!1,b.textContent="เปิดให้ห้องนี้"}})},n=()=>{e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">✏️ สร้างคลังข้อสอบใหม่</h3>
          <p class="text-xs text-gray-400 mb-4">${u(v.class_name??"")} — ตั้งชื่อคลังก่อน แล้วไปเพิ่มคำถามได้ต่อ (พิมพ์เอง / ให้ AI ช่วยคิด / นำเข้า CSV)</p>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อคลังข้อสอบ</label>
            <input id="sqq-c-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" placeholder="เช่น ควิซท้ายคาบ - เรื่องสมการ" />
          </div>
          <div class="flex gap-2 mt-5">
            <button id="sqq-back" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">← กลับ</button>
            <button id="sqq-c-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">สร้างคลัง → เพิ่มคำถาม</button>
          </div>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelector("#sqq-c-save").addEventListener("click",async l=>{const a=e.querySelector("#sqq-c-title").value.trim();if(!a){x("กรุณาระบุชื่อคลังข้อสอบ","warning");return}const d=l.target;d.disabled=!0,d.textContent="กำลังสร้าง...";try{const y=await cr({teacher_id:p.id,subject_id:oe,name:a}),{_renderBankQuestions:i}=await gs(async()=>{const{_renderBankQuestions:c}=await import("./teacher-views-quiz-banks-DLz0kuJO.js");return{_renderBankQuestions:c}},__vite__mapDeps([0,1,2,3,4,5,6,7]));e.remove(),x("สร้างคลังแล้ว — เพิ่มคำถามให้ครบก่อนไปสร้างแบบทดสอบนะครับ","success"),i(p,y,m)}catch(y){x("สร้างไม่สำเร็จ: "+B(y),"error"),d.disabled=!1,d.textContent="สร้างคลัง → เพิ่มคำถาม"}})};e.addEventListener("click",l=>{l.target===e&&e.remove()}),s()}const Ks=()=>we.length?`<div class="space-y-1.5 mb-3 max-h-40 overflow-y-auto">${we.slice(0,10).map(e=>{var t;const s=[...Array.isArray(e.attachment_urls)?e.attachment_urls:[],...e.file_url?[{url:e.file_url,name:"ไฟล์แนบ"}]:[]];return`
      <div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center gap-1.5 flex-wrap">
          ${e.ann_type&&e.ann_type!=="general"?`<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">${u(e.ann_type)}</span>`:""}
          <p class="font-semibold text-gray-700 truncate flex-1 min-w-0">${u(e.title)}</p>
        </div>
        ${e.body?`<p class="text-gray-400 truncate">${u(e.body.slice(0,80))}</p>`:""}
        ${s.length?`<div class="flex flex-wrap gap-1 mt-1">${s.map(r=>`<a href="${u(r.url)}" target="_blank" rel="noopener" class="text-[10px] px-1.5 py-0.5 rounded-lg bg-white border border-gray-200 text-indigo-600 hover:bg-indigo-50">📎 ${u(r.name??"ไฟล์")}</a>`).join("")}</div>`:""}
        <p class="text-[10px] text-gray-300 mt-0.5">${new Date(e.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}${(t=e.teachers)!=null&&t.full_name?" · "+u(e.teachers.full_name):""}</p>
      </div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 mb-2">ยังไม่มีประกาศสำหรับห้องนี้</p>',en=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],Ct=e=>{if(!Be.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้ผูกตารางสอนให้ห้องนี้</p>';if(e==="daily"){const t=new Date().getDay(),r=Be.filter(n=>n.day_of_week===t);return r.length?r.map(n=>{var o,l,a,d;return`
        <div class="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
          <span class="font-semibold text-gray-700">คาบที่ ${n.period_no}${n.span_periods>1?`-${n.period_no+n.span_periods-1}`:""}</span>
          <span class="text-gray-500 font-mono">${((l=(o=n.period)==null?void 0:o.start_time)==null?void 0:l.slice(0,5))??"—"} - ${((d=(a=n.actualEndPeriod)==null?void 0:a.end_time)==null?void 0:d.slice(0,5))??"—"}</span>
        </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">วันนี้ไม่มีคาบของห้องนี้</p>'}const s={};return Be.forEach(t=>{var r;(s[r=t.day_of_week]??(s[r]=[])).push(t)}),Object.keys(s).sort((t,r)=>t-r).map(t=>`
      <div class="mb-2.5">
        <p class="text-[11px] font-bold text-gray-500 mb-1">${en[t]}</p>
        <div class="flex flex-wrap gap-1.5">
          ${s[t].map(r=>{var n,o;return`<span class="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-semibold font-mono">คาบ ${r.period_no}${r.span_periods>1?`-${r.period_no+r.span_periods-1}`:""} · ${((o=(n=r.period)==null?void 0:n.start_time)==null?void 0:o.slice(0,5))??"—"}</span>`}).join("")}
        </div>
      </div>`).join("")},Mt=()=>qt.length?qt.map((e,s)=>{var t;return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">${s+1}</span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-700 truncate">${u(((t=e.students)==null?void 0:t.full_name)??"—")} — ${u(e.request_type??"")}</p>
          <p class="text-gray-400">${e.requested_date?new Date(e.requested_date).toLocaleDateString("th-TH",{day:"numeric",month:"short"}):"ไม่ระบุวันที่"}${e.requested_period_no?` · คาบ ${e.requested_period_no}`:""}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${e.status==="pending"?"bg-amber-50 text-amber-700":"bg-emerald-50 text-emerald-700"} flex-shrink-0">${e.status==="pending"?"รออนุมัติ":"อนุมัติแล้ว รอสอบ"}</span>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีคำร้องรอดำเนินการ</p>',lt=e=>e?new Date(e).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",it=e=>new Set((e.submissions??[]).map(s=>s.student_id)).size,Tt=e=>{const s=Math.max(0,_.length-it(e));if(!e.due_at||s===0)return{key:"normal",missingCount:s,urgent:!1,label:lt(e.due_at)};const t=new Date(e.due_at).getTime()-Date.now(),r=Math.max(1,Math.ceil(Math.abs(t)/36e5));if(t<0){const n=r<24?`เกินกำหนด ${r} ชม.`:`เกินกำหนด ${Math.ceil(r/24)} วัน`;return{key:"overdue",missingCount:s,urgent:!0,label:n,diffMs:t}}return t<=864e5?{key:"today",missingCount:s,urgent:!0,label:`เหลือ ${r} ชม.`,diffMs:t}:t<=2592e5?{key:"soon",missingCount:s,urgent:!0,label:`เหลือ ${Math.ceil(r/24)} วัน`,diffMs:t}:{key:"normal",missingCount:s,urgent:!1,label:lt(e.due_at),diffMs:t}},ge=ae.map(e=>({assignment:e,state:Tt(e)})).filter(e=>e.state.urgent).sort((e,s)=>{const t=e.state.key==="overdue",r=s.state.key==="overdue";if(t!==r)return t?-1:1;const n=new Date(e.assignment.due_at).getTime(),o=new Date(s.assignment.due_at).getTime();return t?o-n:n-o}),At=(e="mobile")=>{if(!ge.length)return"";const{assignment:s,state:t}=ge[0],r=it(s);return`<div class="rounded-2xl border ${t.key==="overdue"?"border-red-200 bg-red-50 text-red-800":t.key==="today"?"border-orange-200 bg-orange-50 text-orange-800":"border-amber-200 bg-amber-50 text-amber-800"} shadow-sm p-4 ${e==="mobile"?"mb-4 lg:hidden":"mb-4 hidden lg:block"}">
      <div class="flex items-center justify-between gap-2">
        <p class="text-xs font-extrabold">⏰ ${t.key==="overdue"?"งานเกินกำหนด":"งานใกล้ครบกำหนด"}</p>
        <span class="text-xs font-extrabold flex-shrink-0">${t.label}</span>
      </div>
      <p class="text-sm font-bold mt-2 truncate">${u(s.title)}</p>
      <p class="text-[11px] mt-1 opacity-80">${r}/${_.length} ส่งแล้ว · <b>${t.missingCount} คนยังไม่ส่ง</b></p>
      ${ge.length>1?`<p class="text-[10px] mt-1 opacity-70">และมีงานเร่งด่วนอีก ${ge.length-1} งาน</p>`:""}
      <div class="grid grid-cols-[1fr_auto] gap-2 mt-3">
        <button type="button" data-sc-urgent-aid="${s.id}" class="sc-btn-dark min-h-[42px] rounded-xl px-3 text-xs font-bold">ดูและติดตามงาน</button>
        <button type="button" class="sc-quick-add-assignment min-h-[42px] rounded-xl border border-current/20 bg-white/70 px-3 text-xs font-bold">＋ สั่งงาน</button>
      </div>
    </div>`},We=(e,s)=>e.due_at?new Date(s).getTime()>new Date(e.due_at).getTime():!1,dt=(e,s)=>e.due_at?Math.max(1,Math.ceil((new Date(s).getTime()-new Date(e.due_at).getTime())/864e5)):0,tn=(e,s)=>We(e,s)?e.late_penalty_mode==="flat"?parseFloat(e.late_penalty_value)||0:e.late_penalty_mode==="per_day"?(parseFloat(e.late_penalty_value)||0)*dt(e,s):0:0,sn=()=>ae.length?ae.map(e=>{const s=it(e),t=_.length,r=t>0?Math.round(s/t*100):0,n=e.submissions.filter(d=>We(e,d.submitted_at)).length,o=Tt(e),l=o.key==="overdue"?"border-red-200 bg-red-50":o.key==="today"?"border-orange-200 bg-orange-50":o.key==="soon"?"border-amber-200 bg-amber-50":"border-gray-100",a=o.urgent?o.key==="overdue"?"text-red-700":"text-amber-700":"text-gray-400";return`<button class="sc-assignment-row w-full text-left px-3 py-3 rounded-xl border ${l} hover:border-indigo-300 hover:bg-indigo-50 transition mb-2" data-aid="${e.id}">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-bold text-gray-700 truncate">${u(e.title)}</p>
          <span class="text-[11px] ${a} font-bold flex-shrink-0">${o.label}</span>
        </div>
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${r}%"></div></div>
          <span class="text-[11px] font-bold text-gray-600 flex-shrink-0">${s}/${t} ส่งแล้ว</span>
          ${o.missingCount?`<span class="text-[10px] font-bold ${o.urgent?a:"text-gray-400"} flex-shrink-0">${o.missingCount} ยังไม่ส่ง</span>`:""}
          ${n?`<span class="text-[10px] font-bold text-amber-600 flex-shrink-0">ช้า ${n}</span>`:""}
        </div>
      </button>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีงานที่มอบหมาย — กด "➕ สั่งงานใหม่" เพื่อเริ่ม</p>',ue=$r(q.semester_start),ct=e=>{var s;return((s=e==null?void 0:e.source_json)==null?void 0:s.week_type)??"teaching"},ke=K.find(e=>ue>=e.week_start&&ue<=e.week_end&&ct(e)!=="break"),nn={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"},rn=()=>K.length?`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${K.map(e=>`
      <div class="flex items-center gap-2">
        <button class="sc-syllabus-row min-w-0 flex-1 text-left flex items-center gap-2 px-3 py-2 rounded-xl border transition ${ue>=e.week_start&&ue<=e.week_end?"border-indigo-300 bg-indigo-50":"border-gray-100 bg-gray-50 hover:border-indigo-200"}" data-sylid="${e.id}">
          <span class="text-[10px] font-bold text-gray-500 flex-shrink-0 w-16">สัปดาห์ ${e.week_start}${e.week_end!==e.week_start?`-${e.week_end}`:""}</span>
          <span class="text-xs font-semibold text-gray-700 truncate flex-1">${u(e.topic)}</span>
          ${ct(e)!=="teaching"?`<span class="text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">${u(nn[ct(e)]??"กำหนดพิเศษ")}</span>`:""}
        </button>
        <button type="button" class="sc-syllabus-delete shrink-0 rounded-lg border border-red-200 bg-white px-2.5 py-2 text-[10px] font-bold text-red-600" data-sylid="${e.id}" aria-label="ลบกำหนดการสัปดาห์ ${e.week_start}">ลบ</button>
      </div>`).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้กำหนดหัวข้อการสอน — กด "➕ เพิ่มหัวข้อ" เพื่อเริ่มวางกำหนดการสอน</p>',ut=()=>[...J].sort((e,s)=>{var o,l,a,d;const t=Number(e.week_start||0)-Number(s.week_start||0);if(t)return t;const r=String(e.lesson_date||((o=e.source_json)==null?void 0:o.lesson_date)||""),n=String(s.lesson_date||((l=s.source_json)==null?void 0:l.lesson_date)||"");return r&&n&&r!==n?r.localeCompare(n):Number(((a=e.source_json)==null?void 0:a.session_in_week)||0)-Number(((d=s.source_json)==null?void 0:d.session_in_week)||0)||Number(e.session_number||0)-Number(s.session_number||0)||Number(e.week_end||0)-Number(s.week_end||0)||String(e.title??"").localeCompare(String(s.title??""),"th")}),Bt=e=>{const s=ut().findIndex(t=>String(t.id)===String(e==null?void 0:e.id));return s>=0?s+1:Number(e==null?void 0:e.session_number)||1},Ve=e=>{const s=Bt(e),t=String((e==null?void 0:e.title)??"").replace(/(ครั้งที่\s*)\d+/g,`$1${s}`);return{...e,title:t,session_number:s}},Ye=e=>{var l,a,d;const s=Number(e.duration_minutes)||Number((l=e.source_json)==null?void 0:l.duration_minutes)||45,t=Number((a=e.source_json)==null?void 0:a.period_count),r=Number.isInteger(t)&&t>0?t:s===100?2:s%45===0?s/45:1,n=Number((d=e.source_json)==null?void 0:d.minutes_per_period),o=Number.isInteger(n)&&n>0?n:s===100?50:s%45===0?45:Math.round(s/r);return{periodCount:r,minutesPerPeriod:o,durationMinutes:r*o}},on=()=>{if(!J.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีแผนการสอน — กด "➕ สร้างแผน" เพื่อเริ่ม</p>';const e={1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัสบดี",5:"ศุกร์",6:"เสาร์",7:"อาทิตย์"},s=new Map;for(const l of(N??[]).filter(a=>Number(a.subject_id)===Number(oe))){const a=Number(l.day_of_week)||7;s.has(a)||s.set(a,[]),s.get(a).push({start:Number(l.period_no),count:Math.max(1,Number(l.span_periods)||1)})}const t=[...s.keys()].sort((l,a)=>l%7-a%7),r=l=>Ye(l).periodCount,n=l=>{var T,F;const a=r(l),d=l.lesson_date||((T=l.source_json)==null?void 0:T.lesson_date),y=/^\d{4}-\d{2}-\d{2}$/.test(String(d??""))?new Date(`${d}T00:00:00`).getDay()||7:null,i=Number((F=l.source_json)==null?void 0:F.session_in_week),c=y??(Number.isInteger(i)&&i>0?t[i-1]:null),b=s.get(c)??[];if(b.reduce((g,S)=>g+S.count,0)!==a)return"";const k=b.sort((g,S)=>g.start-S.start).map(g=>g.count>1?`${g.start}–${g.start+g.count-1}`:`${g.start}`);return` · วัน${e[c]} คาบ ${k.join(", ")}`};return`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${ut().map((l,a)=>{var y,i;const d={...l,...Ve(l),session_number:a+1};return`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <button class="sc-plan-row flex-1 min-w-0 text-left" data-planid="${d.id}">
          <p class="text-xs font-bold text-gray-700 truncate">${u(d.title)}</p>
          <p class="text-[10px] text-gray-400">สัปดาห์ ${d.week_start}${d.week_end!==d.week_start?`-${d.week_end}`:""} · ครั้งที่ ${d.session_number||1} · ${r(d)} คาบ · ${Number(d.duration_minutes)||Number((y=d.source_json)==null?void 0:y.duration_minutes)||r(d)*Number(((i=d.source_json)==null?void 0:i.minutes_per_period)||45)} นาที${n(d)}</p>
        </button>
        <button class="sc-plan-reflect text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50 flex-shrink-0" data-planid="${d.id}">✍️ ลงนาม/พิมพ์</button>
        <button type="button" class="sc-plan-delete text-[10px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-red-200 text-red-600 flex-shrink-0" data-planid="${d.id}" aria-label="ลบแผน ${u(d.title)}">ลบ</button>
      </div>`}).join("")}</div>`},ze=[{key:"schedule",icon:"🗓️",label:"ตารางเรียน",mobileLabel:"ตาราง",desc:"ดูคาบรายวันและรายสัปดาห์"},{key:"examqueue",icon:"📋",label:"คิวสอบ",mobileLabel:"คิวสอบ",desc:"ติดตามคำร้องสอบย้อนหลัง"},{key:"syllabus",icon:"📘",label:"กำหนดการสอน",mobileLabel:"การสอน",desc:"วางหัวข้อทั้งภาคเรียน"},{key:"plans",icon:"📝",label:"แผนการสอน",mobileLabel:"แผน",desc:"สร้างแผนหน้าเดียวรายครั้ง"},{key:"assignments",icon:"📚",label:"งานที่มอบหมาย",mobileLabel:"งาน",desc:"สั่งงานและติดตามการส่ง"},{key:"grades",icon:"📊",label:"คะแนน",mobileLabel:"คะแนน",desc:"บันทึก/จัดการคะแนนทั้งห้อง"},{key:"attendance",icon:"✅",label:"เช็คชื่อ",mobileLabel:"เช็คชื่อ",desc:"เช็คชื่อ/ใบลา/ประวัติทั้งห้อง"}],zt=[{key:"room",icon:"👥",label:"ห้อง"},{key:"live",icon:"🧠",label:"สอนสด"},{key:"work",icon:"📚",label:"งาน"},{key:"plan",icon:"📝",label:"แผน"},{key:"more",icon:"•••",label:"เพิ่ม"}];let Ee=null,Xe="room";const Nt=e=>e==="schedule"?`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ตารางเรียนของห้องนี้</p>
        <div class="sc-tabbar">
          <button data-sched="daily" class="sc-sched-tab sc-tab-pill">รายวัน</button>
          <button data-sched="weekly" class="sc-sched-tab sc-tab-pill">รายสัปดาห์</button>
        </div>
      </div>
      <div id="sc-schedule-body">${Ct("daily")}</div>`:e==="examqueue"?`
      <p class="text-xs text-gray-400 mb-3">คิวคำร้องขอสอบปรับ/สอบย้อนหลัง เรียงจากใกล้ไปไกล</p>
      <div id="sc-exam-queue">${Mt()}</div>`:e==="syllabus"?`
      <div class="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-blue-950">📘 กำหนดการสอนรายภาคเรียน</p><p class="text-xs text-blue-700/70 mt-1">กำหนดหัวข้อของห้องนี้แยกจากห้องอื่นได้ และยังรองรับกำหนดการร่วมของรายวิชา</p><div class="flex gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">${K.length} ช่วงการสอน</span><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">สัปดาห์ปัจจุบัน ${ue||"—"}</span></div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[310px]">
            <button id="sc-ai-syllabus" class="min-h-[48px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm">🤖 สร้างกำหนดการด้วย AI</button>
            <button id="sc-add-syllabus" class="min-h-[48px] rounded-xl bg-white border border-blue-200 text-blue-800 text-xs font-bold hover:bg-blue-50">＋ เพิ่มหัวข้อเอง</button>
          </div>
        </div>
      </div>
      <div class="my-3 px-3 py-2.5 rounded-xl ${ke?"bg-indigo-50 border border-indigo-100":"bg-gray-50 border border-gray-100"}">
        <p class="text-[10px] font-bold ${ke?"text-indigo-500":"text-gray-400"} uppercase tracking-wide">สัปดาห์นี้ — สัปดาห์ที่ ${ue||"—"}</p>
        <p class="text-sm font-bold ${ke?"text-indigo-700":"text-gray-400"} mt-0.5">${ke?u(ke.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-syllabus-list">${rn()}</div>`:e==="plans"?`
      <div class="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</p><p class="text-xs text-violet-700/70 mt-1">สร้างแผนรายครั้ง บันทึกหลังสอน และลงลายเซ็นครบ 3 ฝ่าย</p><div class="flex flex-wrap gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">${J.length} แผน</span><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">เชื่อมกำหนดการสอน</span>${J.some(s=>Number(s.week_start)===1)&&new Set(J.map(s=>Number(s.week_start))).size>1?'<button id="sc-sync-plan-pattern" type="button" class="px-2 py-1 rounded-lg bg-white border border-violet-200 text-[10px] font-bold text-violet-700 hover:bg-violet-50">🔁 ใช้รูปแบบคาบจากสัปดาห์แรก</button>':""}</div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[300px]">
            <button id="sc-ai-plan" class="min-h-[48px] rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-xs font-bold shadow-sm">🤖 สร้างแผนด้วย AI</button>
            <button id="sc-add-plan" class="min-h-[48px] rounded-xl bg-white border border-violet-200 text-violet-800 text-xs font-bold hover:bg-violet-50">＋ สร้างแผนเอง</button>
          </div>
        </div>
      </div>
      <div id="sc-plan-list">${on()}</div>`:`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ติดตามงานที่มอบหมาย + สถานะการส่งของนักเรียน</p>
        <button id="sc-add-assignment" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สั่งงานใหม่</button>
      </div>
      <div id="sc-assignment-list">${sn()}</div>`;tt(`<div class="animate-fade max-w-none w-full px-2 sm:px-4 lg:px-6">
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
            ${Object.entries(st).map(([e,s])=>`<button type="button" data-dock-att-status="${e}" class="sc-dock-subitem sc-dock-att-status ${s.bg} ${s.color}"><span>${s.label}</span><small>${e==="present"?"มาเรียน":e==="absent"?"ขาด":e==="late"?"มาสาย":e==="excused"?"ลากิจ":"ลาป่วย"}</small></button>`).join("")}
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
        <h1 class="font-bold text-gray-800 text-base truncate">${u(Oe.subject_name??"")} · ${u(v.class_name??"")}</h1>
        <p class="text-xs text-gray-400">${_.length} คน</p>
      </div>
      <div class="min-w-0 border-l border-amber-100 pl-4">
        <p class="text-[10px] font-bold text-amber-500 uppercase tracking-wide">📘 สัปดาห์ที่ ${ue||"—"}</p>
        <p class="text-xs font-semibold ${ke?"text-gray-700":"text-gray-400"} truncate max-w-[240px]">${ke?u(ke.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-clock-wrap" class="ml-auto flex-shrink-0 text-right"></div>
      <button id="sc-class-chat" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-amber-700 border border-amber-200 bg-white hover:bg-amber-50 px-3 py-2 rounded-xl">💬 แชทห้องเรียน</button>
      <button id="sc-teaching-ai" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-white px-3 py-2 rounded-xl shadow-sm" style="background:linear-gradient(135deg,#6366f1,#7c3aed)">✨ AI เตรียมการสอน</button>
      <button id="sc-switch-class" class="flex-shrink-0 text-xs font-semibold text-amber-700 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg">🔀 สลับห้อง</button>
      <button id="sc-back" class="flex-shrink-0 text-xs text-gray-400 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">← กลับ</button>
    </div>

    ${At("mobile")}

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
          ${le?`<div class="flex items-center flex-wrap gap-2 mb-3 px-3 py-2 rounded-xl bg-red-50 border border-red-100 text-[11px] text-red-700">
            <span class="font-bold">🔴 กำลังสอบสด: ${u(le.title)}</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-flex items-center justify-center text-[8px]">📝</span>กำลังทำ</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-blue-500 inline-flex items-center justify-center text-[8px]">✅</span>ส่งแล้ว</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-red-500 inline-flex items-center justify-center text-[8px]">🔒</span>ถูกล็อก</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-gray-300 inline-flex items-center justify-center text-[8px]">⚪</span>ยังไม่เข้าสอบ</span>
          </div>`:""}
          <div class="grid ${Lt()} gap-2" id="sc-roster" data-layout="${u(ie.template??"rows")}">${It()}</div>
        </div>

        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">🚪 Hall Pass — ออกนอกห้องตอนนี้</h2>
            <button id="sc-leave-quota" class="text-[11px] font-semibold text-amber-700 hover:text-amber-900">⚙️ โควตา (${Y.length}/${M})</button>
          </div>
          <div id="sc-pass-list" class="mt-2">${Xs()}</div>
        </div>
      </div>

      <div id="sc-mobile-live-section" class="sc-mobile-app-section">
        ${At("desktop")}

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-sm font-bold text-gray-700">🧠 เปิดควิซสด</h2>
            <button id="sc-quiz-add" class="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800">+ ควิซ</button>
          </div>
          <div id="sc-quiz-list">${Js()}</div>
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
          <div class="hidden lg:flex items-center justify-between gap-3 mb-4"><div><h2 class="text-base font-extrabold text-gray-800">พื้นที่จัดการรายวิชา</h2><p class="text-xs text-gray-400 mt-0.5">เลือกงานที่ต้องการ ระบบจะแยกข้อมูลและปุ่มสร้างให้ชัดเจน</p></div><span class="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-700">${u(Oe.subject_name??"")}</span></div>
          <div id="sc-reftabs-bar" class="sc-desktop-ref-tabs mb-5">
            ${ze.map(e=>`<button data-reftab="${e.key}" class="sc-reftab-btn ${e.key===Ee?"active":""}"><span class="sc-ref-tab-icon">${e.icon}</span><span class="min-w-0 text-left"><b>${e.label}${e.key==="assignments"&&ge.length?` (${ge.length})`:""}</b><small>${e.desc}</small></span></button>`).join("")}
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
          <div id="sc-ann-history">${Ks()}</div>
        </div>
      </div>

    </div>

    <nav id="sc-mobile-ref-nav" class="sc-mobile-ref-nav" aria-label="เมนู Smart Classroom">
      ${zt.map(e=>`<button type="button" data-mobile-group="${e.key}" class="sc-mobile-group-btn sc-mobile-ref-btn ${e.key===Xe?"active":""}">
        <span class="sc-mobile-ref-icon">${e.icon}</span>
        <span>${e.label}</span>
        ${e.key==="work"&&ge.length?`<span class="sc-mobile-ref-count">${ge.length>99?"99+":ge.length}</span>`:""}
      </button>`).join("")}
    </nav>
  </div>`),document.body.classList.add("sc-fullscreen"),document.getElementById("sc-back").addEventListener("click",()=>{window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),document.body.classList.remove("sc-fullscreen"),Pe(p,m)}),document.getElementById("sc-switch-class").addEventListener("click",()=>an()),document.getElementById("sc-open-attendance").addEventListener("click",()=>Ot());const Dt=()=>gs(()=>import("./chat-classroom-BjPgwmpg.js"),__vite__mapDeps([8,9,3,10,11,12,13,6,1,14,15])).then(e=>e.openTeacherClassroomChat(p,m,`${Oe.subject_name??""} · ${v.class_name??""}`)),Pt=()=>_r(p,m,v,q);(ps=document.getElementById("sc-class-chat"))==null||ps.addEventListener("click",Dt),(ms=document.getElementById("sc-teaching-ai"))==null||ms.addEventListener("click",Pt),document.querySelectorAll("[data-sc-urgent-aid]").forEach(e=>e.addEventListener("click",()=>{const s=ae.find(t=>t.id===parseInt(e.dataset.scUrgentAid,10));s&&Zt(s)})),document.querySelectorAll(".sc-quick-add-assignment").forEach(e=>e.addEventListener("click",()=>gt()));function Ht(e){return{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:e%60}}function Ft(){const e=document.getElementById("sc-clock-wrap");if(!e){window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null);return}const s=Ys();if(s.mode==="live"){const{h:t,m:r,s:n}=Ht(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">🟢 กำลังสอน — เหลืออีก</p>
        <p class="text-xl font-extrabold text-emerald-700 font-mono">${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}</p>`}else if(s.mode==="upcoming"){const{d:t,h:r,m:n,s:o}=Ht(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-amber-600 font-bold uppercase tracking-wide">คาบนี้จะเริ่มสอนในอีก</p>
        <p class="text-sm font-extrabold text-amber-700 font-mono">${t>0?t+" วัน ":""}${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}</p>`}else e.innerHTML='<p class="text-[10px] text-gray-400">ไม่พบตารางสอนของห้องนี้</p>'}window._scClockInterval&&clearInterval(window._scClockInterval),Ft(),window._scClockInterval=setInterval(Ft,1e3),window._scQuizPollInterval&&clearInterval(window._scQuizPollInterval),le&&(window._scQuizPollInterval=setInterval(async()=>{if(!document.getElementById("sc-roster")){clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null;return}const s=await ks(le.id).catch(()=>null);s&&(Qe=Object.fromEntries(s.map(t=>[t.student_id,t])),Ne())},4e3));async function an(){var l;(l=document.getElementById("sc-switch-modal"))==null||l.remove();const e=document.createElement("div");e.id="sc-switch-modal",e.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">🔀 สลับห้องเรียน</h3>
          <button id="sc-switch-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div id="sc-switch-list" class="max-h-80 overflow-y-auto space-y-1.5">
          <div class="text-center py-6 text-xs text-gray-400">กำลังโหลด...</div>
        </div>
      </div>`,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&e.remove()}),e.querySelector("#sc-switch-close").addEventListener("click",()=>e.remove());const s=Number(q.academicYear??q.academic_year),t=Number(q.semester),r=Number.isInteger(s)&&s>0&&[1,2].includes(t),n=(await He(p.id).catch(()=>[])).filter(a=>r&&Number(a.academic_year)===s&&Number(a.semester)===t&&a.id!==m),o=e.querySelector("#sc-switch-list");if(!n.length){o.innerHTML='<p class="text-center py-6 text-xs text-gray-400">ไม่มีห้องอื่นให้สลับ</p>';return}o.innerHTML=n.map(a=>{var d;return`
      <button class="sc-switch-btn w-full text-left px-3 py-2.5 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition" data-cid="${a.id}">
        <p class="text-sm font-semibold text-gray-700 truncate">${u(a.class_name??"")}</p>
        <p class="text-xs text-gray-400 truncate">${u(((d=a.master_subjects)==null?void 0:d.subject_name)??"")}</p>
      </button>`}).join(""),o.querySelectorAll(".sc-switch-btn").forEach(a=>a.addEventListener("click",()=>{const d=parseInt(a.dataset.cid,10);e.remove(),$e(p,d)}))}async function Ot(){var t,r;const e=document.getElementById("sc-open-attendance");e.disabled=!0;const s=e.textContent;e.textContent="⏳";try{const n=((t=v.master_subjects)==null?void 0:t.credit)??1,o=((r=v.master_subjects)==null?void 0:r.subject_group)==="ACDMVOC",l=o?await fs(m).catch(()=>[]):[],a=js(v,n,l.length?l:null,o),d=Is(new Date),y=a.filter(i=>i.ds===d);if(y.length===1)await _s(p,v,y[0].n,{});else if(y.length>1)Rt(a,y[0].n,"วันนี้มีหลายคาบ — เลือกคาบที่จะเช็คชื่อ");else{const i=new Date(d).getTime();let c=a[0],b=1/0;for(const $ of a){const k=Math.abs(new Date($.ds).getTime()-i);k<b&&(b=k,c=$)}Rt(a,c==null?void 0:c.n,"วันนี้ไม่ตรงกับตารางสอนของห้องนี้ — เลือกคาบเอง (เลื่อนไปคาบใกล้วันนี้ที่สุดให้แล้ว)")}}catch(n){x("เปิดหน้าเช็คชื่อไม่สำเร็จ: "+B(n),"error")}finally{e.disabled=!1,e.textContent=s}}function Rt(e,s,t){var o;(o=document.getElementById("sc-session-picker"))==null||o.remove();const r=document.createElement("div");r.id="sc-session-picker",r.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">✅ เลือกคาบเช็คชื่อ</h3>
          <button id="sc-sess-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <p class="text-xs text-gray-400">${u(t)}</p>
        <div class="max-h-72 overflow-y-auto space-y-1.5" id="sc-sess-list">
          ${e.map(l=>`<button class="sc-sess-btn w-full text-left px-3 py-2.5 rounded-xl border transition text-sm font-semibold ${l.n===s?"border-indigo-400 bg-indigo-50 text-indigo-700":"border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700"}" data-n="${l.n}">
            คาบที่ ${l.n} <span class="${l.n===s?"text-indigo-400":"text-gray-400"} font-normal">· ${u(l.ds)}</span>${l.n===s?' <span class="text-[10px] text-indigo-500">← ใกล้วันนี้ที่สุด</span>':""}
          </button>`).join("")}
        </div>
      </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#sc-sess-close").addEventListener("click",()=>r.remove()),r.querySelectorAll(".sc-sess-btn").forEach(l=>l.addEventListener("click",async()=>{const a=parseInt(l.dataset.n,10);r.remove();try{await _s(p,v,a,{})}catch(d){x("เปิดคาบนี้ไม่สำเร็จ: "+B(d),"error")}}));const n=r.querySelector(`.sc-sess-btn[data-n="${s}"]`);n==null||n.scrollIntoView({block:"center"})}const Ne=()=>{const e=document.getElementById("sc-roster");e&&(e.className=`grid ${Lt()} gap-2`,e.dataset.layout=ie.template??"rows",e.innerHTML=It())};function Qt(e){const s=String(e.gender??e.sex??"").trim().toLowerCase();return["ชาย","male","m","ช"].includes(s)?0:["หญิง","female","f","ญ"].includes(s)?1:2}function ln(){var r;(r=document.getElementById("sc-class-organizer"))==null||r.remove();const e=document.createElement("div");e.id="sc-class-organizer",e.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/50 p-4 overflow-y-auto";const s=Et(),t=()=>{var l,a;((l=e.querySelector("#sc-organizer-template"))==null?void 0:l.value)??ie.template;const n=((a=e.querySelector("#sc-organizer-gender"))==null?void 0:a.checked)??!!ie.splitGender,o=[...s].sort((d,y)=>n&&Qt(d)-Qt(y)||(V.get(d.id)??0)-(V.get(y.id)??0));e.querySelector("#sc-organizer-preview").innerHTML=o.map((d,y)=>`
        <div draggable="true" data-organizer-student="${d.id}" class="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-2.5 py-2 cursor-grab active:cursor-grabbing hover:border-violet-300">
          <span class="text-[10px] font-bold text-gray-400 w-5">${y+1}</span>
          <div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 text-[10px] font-bold flex-shrink-0">${d.image_url?`<img src="${u(d.image_url)}" class="w-full h-full object-cover"/>`:u((d.full_name??"?").charAt(0))}</div>
          <span class="text-xs font-semibold text-gray-700 truncate">${u(d.full_name??"")}</span>
          <span class="ml-auto text-[10px] text-gray-400">${u(d.gender??"")}</span>
        </div>`).join(""),e.querySelectorAll("[data-organizer-student]").forEach(d=>{d.addEventListener("dragstart",()=>d.classList.add("opacity-40")),d.addEventListener("dragend",()=>d.classList.remove("opacity-40")),d.addEventListener("dragover",y=>y.preventDefault()),d.addEventListener("drop",y=>{y.preventDefault();const i=e.querySelector(".opacity-40[data-organizer-student]");if(!i||i===d)return;const c=[...e.querySelectorAll("[data-organizer-student]")],b=c.indexOf(i),$=c.indexOf(d);b<$?d.after(i):d.before(i),e.querySelectorAll("[data-organizer-student]").forEach((k,T)=>{k.querySelector("span").textContent=T+1})})})};e.innerHTML=`
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
      </div>`,document.body.appendChild(e),e.querySelector("#sc-organizer-template").value=ie.template??"rows",e.querySelector("#sc-organizer-gender").checked=!!ie.splitGender,e.querySelector("#sc-organizer-template").addEventListener("change",t),e.querySelector("#sc-organizer-gender").addEventListener("change",t),e.querySelector("#sc-organizer-close").addEventListener("click",()=>e.remove()),e.querySelector("#sc-organizer-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.querySelector("#sc-organizer-save").addEventListener("click",()=>{ie={template:e.querySelector("#sc-organizer-template").value,splitGender:e.querySelector("#sc-organizer-gender").checked,order:[...e.querySelectorAll("[data-organizer-student]")].map(n=>Number(n.dataset.organizerStudent))},Ws(),Ne(),e.remove(),x("บันทึกผังห้องเรียนแล้ว ✅","success")}),t()}async function dn(e,s){var i,c;const t=((i=v.master_subjects)==null?void 0:i.credit)??1,r=((c=v.master_subjects)==null?void 0:c.subject_group)==="ACDMVOC",n=r?await fs(m).catch(()=>[]):[],o=js(v,t,n.length?n:null,r),l=Is(new Date),a=o.filter(b=>b.ds===l);if(a.length!==1){x("วันนี้มีหลายคาบหรือไม่ตรงตาราง ระบบจะเปิดหน้าเช็คชื่อให้เลือกคาบ","warning"),Ot();return}await Xn(m,e.id,a[0].n,l,s);const d=Se[e.id]??(Se[e.id]=[]),y=d.find(b=>b.session_number===a[0].n);y?y.status=s:d.push({student_id:e.id,session_number:a[0].n,check_date:l,status:s}),Ne(),x(`บันทึก ${st[s].label} ${e.full_name} แล้ว`,"success")}const pt=document.getElementById("sc-roster"),se=document.getElementById("sc-student-action-dock");let Je=null,pe=null;const mt=()=>{if(!pe||se.classList.contains("hidden"))return;const e=pe.getBoundingClientRect(),s=se.offsetHeight||174,t=e.top,r=e.left+e.width/2,n=e.top+e.height/2,o=t>=126;se.classList.toggle("submenu-above",o),se.classList.remove("above","below"),se.style.left=`${r}px`,se.style.top=`${n-s/2}px`},bt=()=>{pe==null||pe.classList.remove("is-focus"),pe=null,Je=null,se.classList.add("hidden"),se.querySelectorAll(".sc-dock-group.is-open").forEach(e=>e.classList.remove("is-open"))},Gt=(e,s)=>{!e||!s||(pe==null||pe.classList.remove("is-focus"),Je=e.id,pe=s,pe.classList.add("is-focus"),se.classList.remove("hidden"),mt())};pt.addEventListener("pointerover",e=>{const s=e.target.closest("[data-student-wrap]");!s||!pt.contains(s)||e.relatedTarget&&s.contains(e.relatedTarget)||Gt(Re[parseInt(s.dataset.sid,10)],s)}),pt.addEventListener("click",e=>{const s=e.target.closest(".sc-stu");if(!s)return;const t=s.closest("[data-student-wrap]");Gt(Re[parseInt(s.dataset.sid,10)],t),e.stopPropagation()}),se.addEventListener("click",async e=>{const s=Re[Je];if(!s)return;const t=e.target.closest("[data-dock-main-action]");if(t){if(t.dataset.dockMainAction==="score"){Ut(s,"score");return}const a=t.closest(".sc-dock-group"),d=a.classList.contains("is-open");se.querySelectorAll(".sc-dock-group.is-open").forEach(y=>y.classList.remove("is-open")),d||a.classList.add("is-open");return}const r=e.target.closest("[data-dock-att-status]");if(r){se.querySelectorAll(".sc-dock-group.is-open").forEach(l=>l.classList.remove("is-open"));try{await dn(s,r.dataset.dockAttStatus)}catch(l){x("บันทึกเช็คชื่อไม่สำเร็จ: "+B(l),"error")}return}const n=e.target.closest("[data-dock-leave]");if(n){se.querySelectorAll(".sc-dock-group.is-open").forEach(l=>l.classList.remove("is-open")),n.dataset.dockLeave==="in"&&xe[s.id]?vt(xe[s.id].id,"returned").then(()=>{x("บันทึกกลับเข้าห้องแล้ว","success"),H()}).catch(l=>x("บันทึกไม่สำเร็จ: "+B(l),"error")):n.dataset.dockLeave==="out"&&$s(p,v,s.id,s.full_name,s.image_url,xe,M,H);return}e.target.closest("[data-dock-star]")&&(se.querySelectorAll(".sc-dock-group.is-open").forEach(l=>l.classList.remove("is-open")),Ut(s,"score"))}),document.getElementById("sc-dock-close").addEventListener("click",bt),window.addEventListener("scroll",mt,!0),window.addEventListener("resize",mt),document.addEventListener("keydown",e=>{e.key==="Escape"&&bt()}),document.addEventListener("click",e=>{Je&&!e.target.closest("#sc-student-action-dock")&&!e.target.closest("[data-student-wrap]")&&bt()}),document.getElementById("sc-organize-class").addEventListener("click",ln);function cn(e,s){W={key:e,label:s},document.getElementById("sc-sort-label").textContent=s,Ne()}document.getElementById("sc-sort-trigger").addEventListener("click",()=>un());function un(){var l;(l=document.getElementById("sc-sort-panel"))==null||l.remove();const e=document.getElementById("sc-sort-trigger"),s=e.getBoundingClientRect(),t=document.createElement("div");t.id="sc-sort-panel",t.className="fixed z-[96] bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 max-h-[70vh] overflow-hidden flex flex-col animate-fade",t.style.top=`${Math.min(s.bottom+6,window.innerHeight-300)}px`,t.style.left=`${Math.min(s.left,window.innerWidth-300)}px`;const r=[{key:"seatno",label:"เลขที่ (ค่าเริ่มต้น)"},{key:"name",label:"ชื่อ-สกุล (ก–ฮ)"},{key:"total",label:"คะแนนรวมทั้งเทอม (สูง→ต่ำ)"},{key:"att",label:"คะแนนการมาเรียน (สูง→ต่ำ)"}];t.innerHTML=`
      <div class="p-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-xs font-bold text-gray-500 mb-2">เรียงลำดับตาม</p>
        <div class="space-y-1">
          ${r.map(a=>`<button data-sortkey="${a.key}" data-sortlabel="${u(a.label)}" class="sc-sort-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${W.key===a.key?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${a.label}</button>`).join("")}
        </div>
      </div>
      <div class="p-3 flex-1 overflow-y-auto min-h-0">
        <p class="text-xs font-bold text-gray-500 mb-2">คะแนนรายช่อง</p>
        ${D.length>8?'<input id="sc-sort-search" type="text" placeholder="พิมพ์ค้นหาชื่อคอลัมน์..." class="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />':""}
        <div id="sc-sort-col-list" class="space-y-1">
          ${D.length?D.map(a=>`<button data-sortkey="col:${a.id}" data-sortlabel="${u(a.assignment_name??"")}" data-search="${u((a.assignment_name??"").toLowerCase())}" class="sc-sort-opt sc-sort-col-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${W.key==="col:"+a.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${u(a.assignment_name??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>'}
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100">
          <p class="text-xs font-bold text-gray-500 mb-1">📚 งานที่มอบหมาย</p>
          <p class="text-[10px] text-gray-400 mb-2">เรียง: รอตรวจ → ยังไม่ส่ง → ตรวจแล้ว พร้อมแสดงสถานะบนการ์ด</p>
          <div class="space-y-1">
            ${ae.length?ae.map(a=>`<button data-sortkey="assignment:${a.id}" data-sortlabel="งาน: ${u(a.title??"")}" class="sc-sort-opt w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition ${W.key==="assignment:"+a.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${u(a.title??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีงานที่มอบหมาย</p>'}
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelectorAll(".sc-sort-opt").forEach(a=>a.addEventListener("click",()=>{cn(a.dataset.sortkey,a.dataset.sortlabel),t.remove()}));const n=t.querySelector("#sc-sort-search");n==null||n.addEventListener("input",()=>{const a=n.value.trim().toLowerCase();t.querySelectorAll(".sc-sort-col-opt").forEach(d=>{d.style.display=!a||d.dataset.search.includes(a)?"":"none"})});const o=a=>{t.contains(a.target)||a.target===e||(t.remove(),document.removeEventListener("mousedown",o,!0))};setTimeout(()=>document.addEventListener("mousedown",o,!0),0)}const pn=[{key:"info",label:"👤 ข้อมูล"},{key:"score",label:"📝 คะแนน"},{key:"att",label:"✅ มาเรียน"},{key:"leave",label:"🚪 ออกห้อง"}];function mn(e){var r;const s=xe[e.id],t=le?Qe[e.id]:null;return`
      <div class="space-y-2">
        ${le?`
          <div class="px-3 py-2.5 rounded-xl bg-red-50 border border-red-100">
            <p class="text-xs text-red-700 font-bold mb-1">🔴 ${u(le.title)}</p>
            ${t?`
              <p class="text-xs text-gray-600">${t.status==="in_progress"?"📝 กำลังทำอยู่":t.status==="submitted"?`✅ ส่งแล้ว${t.score_pct!=null?` · คะแนน ${t.score_pct.toFixed(1)}%`:""}`:t.status==="terminated_violation"?"🔒 ถูกล็อกจากการทำผิดกติกา":t.status}${(r=t.question_order)!=null&&r.length?` · ตอบแล้ว ${Object.keys(t.answers??{}).length}/${t.question_order.length} ข้อ`:""}</p>
              ${t.status==="terminated_violation"?`<button id="sc-sp-unlock" data-attempt="${t.id}" class="w-full mt-2 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600">🔓 ปลดล็อกให้ทำต่อ</button>`:""}
            `:'<p class="text-xs text-gray-500">⚪ ยังไม่เข้าสอบ</p>'}
            <button id="sc-sp-quiz-monitor" class="w-full mt-2 py-1.5 rounded-xl border border-red-200 text-red-600 text-[11px] font-bold hover:bg-red-100">เปิดหน้าจัดการสอบสดแบบเต็ม →</button>
          </div>
        `:""}
        ${s?`
          <div class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
            <div class="text-xs text-amber-800"><b>🚪 ออกนอกห้องอยู่</b><br>${u(s.reason??"")} · ${Ts(s.created_at)}</div>
          </div>
          <button id="sc-sp-return" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700">✅ บันทึกกลับเข้าห้องแล้ว</button>
        `:`
          <button id="sc-sp-leave" class="w-full py-2.5 rounded-xl bg-amber-500 text-white text-sm font-bold hover:bg-amber-600">🚪 อนุญาตออกนอกห้อง</button>
        `}
      </div>`}const bn=e=>e>=80?4:e>=75?3.5:e>=70?3:e>=65?2.5:e>=60?2:e>=55?1.5:e>=50?1:0,xn=e=>e>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:e>=2.5?{label:"ดี",cls:"text-blue-600"}:e>=1?{label:"ผ่าน",cls:"text-amber-600"}:{label:"ไม่ผ่าน",cls:"text-red-600"},Le=e=>Number.isFinite(e)?String(Number(e.toFixed(2))):"—";function gn(e){if(!D.length)return'<p class="text-center py-6 text-xs text-gray-400">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>';const s=ce[e.id]??[],t=D.filter(w=>w.column_type==="bonus"),r=D.filter(w=>w.column_type==="derived"),n=D.filter(w=>(w.column_type??"regular")==="regular"),o=n.filter(w=>w.assignment_type!=="final"&&w.assignment_type!=="ปลายภาค"),l=n.filter(w=>w.assignment_type==="final"||w.assignment_type==="ปลายภาค"),a=Lr(t),d=w=>{var h;return parseFloat((h=s.find(E=>E.score_column_id===w.id))==null?void 0:h.score)||0},y=w=>{const h=d(w);if(!w.bonus_formula)return h;const E=Object.fromEntries(a.map(j=>[j.var,d(j)])),C=Cs(w.bonus_formula,E)??0;return w.max_score?Math.min(h+C,parseFloat(w.max_score)):h+C},i=w=>{if(!w.formula)return 0;const h=Object.fromEntries((w.formula_refs??[]).map(E=>{const C=D.find(j=>j.id===E.col_id);return[E.var,C?d(C):0]}));return Cs(w.formula,h)??0},c=w=>w.reduce((h,E)=>h+(parseFloat(E.max_score)||0),0),b=w=>w.reduce((h,E)=>h+y(E),0),$=c(o),k=c(l),T=c(r),F=b(o),g=b(l),S=r.reduce((w,h)=>w+i(h),0),L=$+k+T,A=F+g+S,P=Math.round(A),G=L>0?P/L*100:0,f=bn(G),ee=xn(f),ne=(w,h)=>{const E=s.find(me=>me.score_column_id===w.id),C=(E==null?void 0:E.score)??"",j=C!==""&&parseFloat(w.max_score)>0?parseFloat(C)/parseFloat(w.max_score)*100:null;return`<tr class="border-b border-gray-50 last:border-0">
        <td class="py-2 px-2 text-gray-700 text-[11px] font-semibold">${u(w.assignment_name??"—")}</td>
        <td class="py-1 px-1 text-center"><input type="number" class="sc-score-input w-16 text-center border border-gray-200 rounded-lg px-1 py-1 font-mono font-bold ${h} focus:outline-none focus:ring-2 focus:ring-indigo-300" data-col="${w.id}" value="${C}" max="${w.max_score??""}" placeholder="—" /></td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-400">/${w.max_score??0}</td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-500">${j==null?"—":j.toFixed(0)+"%"}</td>
      </tr>`},te=(w,h,E,C,j)=>h.length?`<div>
      <h4 class="font-bold ${j.title} text-sm mb-2">${w}</h4>
      <div class="overflow-hidden rounded-xl border ${j.border}"><table class="w-full table-fixed">
        <thead><tr class="${j.head} text-gray-500"><th class="py-1.5 px-2 text-left text-[10px] w-[44%]">ชื่องาน</th><th class="py-1.5 text-center text-[10px]">คะแนน</th><th class="py-1.5 text-center text-[10px]">เต็ม</th><th class="py-1.5 text-center text-[10px]">%</th></tr></thead>
        <tbody>${h.map(me=>ne(me,j.input)).join("")}</tbody>
        <tfoot><tr class="${j.head} font-bold"><td class="py-2 px-2 ${j.title} text-xs">รวม</td><td class="py-2 text-center ${j.title} text-xs">${Le(E)}</td><td class="py-2 text-center text-gray-400 text-xs">/${Le(C)}</td><td class="py-2 text-center ${j.title} text-xs">${C>0?(E/C*100).toFixed(1):0}%</td></tr></tfoot>
      </table></div>
    </div>`:"";return`
      <div class="space-y-4">
        ${te("📘 กลางภาค",o,F,$,{title:"text-blue-700",border:"border-blue-100",head:"bg-blue-50",input:"text-blue-600"})}
        ${te("📙 ปลายภาค",l,g,k,{title:"text-purple-700",border:"border-purple-100",head:"bg-purple-50",input:"text-purple-600"})}
        ${r.length?`<div class="rounded-xl border border-indigo-100 bg-indigo-50/50 px-3 py-2.5"><p class="text-xs font-bold text-indigo-700 mb-1">🧮 คะแนนคำนวณ</p>${r.map(w=>`<div class="flex justify-between text-[11px] py-1"><span class="text-gray-600">${u(w.assignment_name??"")}</span><b class="text-indigo-700">${Le(i(w))}/${Le(parseFloat(w.max_score)||0)}</b></div>`).join("")}</div>`:""}
        <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-4 text-center border border-amber-100">
          <p class="text-xs text-gray-500 mb-1">คะแนนรวมทั้งภาค</p>
          <p class="text-3xl font-extrabold text-amber-700">${Le(P)}<span class="text-sm font-normal text-gray-400">/${Le(L)}</span></p>
          <p class="text-[11px] text-gray-400 mt-0.5">คะแนนจริง ${Le(A)} · ${G.toFixed(1)}%</p>
          <p class="text-xl font-bold text-purple-700 mt-1">เกรด ${f>0?f.toFixed(1):"0"} <span class="text-sm ${ee.cls}">— ${ee.label}</span></p>
        </div>
        <p class="text-[10px] text-gray-400 text-center">คำนวณด้วยกลุ่มกลางภาค/ปลายภาค สูตร และคะแนนโบนัสแบบเดียวกับหน้าคะแนนหลัก</p>
      </div>`}const fn={present:"#059669",absent:"#dc2626",late:"#f59e0b",excused:"#3b82f6",sick:"#f97316"};function yn(e){const s=(Se[e.id]??[]).slice().sort((c,b)=>(b.check_date??"").localeCompare(c.check_date??""));if(!s.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีข้อมูลเช็คชื่อ</p>';const t=["present","absent","late","excused","sick"],r={};for(const c of s)r[c.status]=(r[c.status]??0)+1;const n=s.length;let o=0;const l=t.filter(c=>r[c]).map(c=>{const b=r[c]/n*100,$=`${fn[c]} ${o}% ${o+b}%`;return o+=b,$}),a=l.length?`conic-gradient(${l.join(",")})`:"#e5e7eb",d=Math.round((r.present??0)/n*100),y=t.filter(c=>r[c]).map(c=>{const b=st[c];return`<span class="px-2 py-1 rounded-full text-[11px] font-bold ${(b==null?void 0:b.bg)??"bg-gray-50"} ${(b==null?void 0:b.color)??"text-gray-500"}">${(b==null?void 0:b.label)??c} ${r[c]}</span>`}).join(" "),i=s.slice(0,15).map(c=>{const b=st[c.status];return`<div class="flex items-center justify-between px-3 py-1.5 text-xs border-b border-gray-50">
        <span class="text-gray-500">${u(c.check_date??"")} · คาบ ${c.session_number}</span>
        <span class="font-bold ${(b==null?void 0:b.color)??"text-gray-500"}">${(b==null?void 0:b.label)??c.status}</span>
      </div>`}).join("");return`
      <div class="flex items-center gap-4 mb-3">
        <div class="relative flex-shrink-0" style="width:72px;height:72px;border-radius:50%;background:${a}">
          <div class="absolute" style="inset:7px;background:white;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <span class="text-sm font-bold text-gray-800">${d}%</span>
            <span class="text-[8px] text-gray-400">มาเรียน</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 flex-1">${y}</div>
      </div>
      <div class="max-h-48 overflow-y-auto border-t border-gray-100 pt-2">${i}</div>`}function vn(e){const s=Ge[e.id]??[];return s.length?`<div class="max-h-64 overflow-y-auto space-y-1.5">${s.map(t=>{const r=t.status==="returned"?"กลับแล้ว":t.status==="overdue"?"เลยเวลา":"ยังไม่กลับ",n=t.status==="returned"?"text-emerald-600":t.status==="overdue"?"text-red-600":"text-amber-600";return`<div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-gray-700">${u(t.reason??"")}</span>
          <span class="font-bold ${n}">${r}</span>
        </div>
        <div class="text-gray-400 mt-0.5">${new Date(t.created_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})} · ขออนุญาต ${t.allowed_duration} นาที</div>
      </div>`}).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ไม่เคยขอออกนอกห้องในวิชานี้</p>'}function Ut(e,s="info"){var l;(l=document.getElementById("sc-student-modal"))==null||l.remove();let t=s,r=e;const n=document.createElement("div");n.id="sc-student-modal",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",document.body.appendChild(n);const o=()=>{var y,i,c,b,$,k,T,F;xe[r.id];const a=_.findIndex(g=>g.id===r.id);n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[88vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0">
            <div class="flex items-center gap-3">
              <button id="sc-sp-prev" ${a<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl flex-shrink-0">
                ${r.image_url?`<img src="${u(r.image_url)}" class="w-full h-full object-cover"/>`:u((r.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate">${u(r.full_name??"—")}</p>
                <p class="text-xs text-gray-400">${u(r.student_code??"")} · ${u(r.main_room??"")} · เลขที่ ${V.get(r.id)??"—"}</p>
              </div>
              <button id="sc-sp-next" ${a>=_.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sc-sp-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sc-sp-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sc-sp-jump" type="number" min="1" max="${_.length}" value="${V.get(r.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${_.length}</span>
            </div>
          </div>
          <div class="px-5 pb-3 flex-shrink-0">
            <div class="sc-tabbar w-full">
              ${pn.map(g=>`<button data-tab="${g.key}" class="sc-sp-tab sc-tab-pill ${t===g.key?"active":""}">${g.label}</button>`).join("")}
            </div>
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${t==="info"?mn(r):t==="score"?gn(r):t==="att"?yn(r):vn(r)}
          </div>
        </div>`,n.querySelector("#sc-sp-close").addEventListener("click",()=>n.remove()),(y=n.querySelector("#sc-sp-prev"))==null||y.addEventListener("click",()=>{a>0&&(r=_[a-1],t="info",o())}),(i=n.querySelector("#sc-sp-next"))==null||i.addEventListener("click",()=>{a<_.length-1&&(r=_[a+1],t="info",o())});const d=()=>{const g=n.querySelector("#sc-sp-jump"),S=parseInt(g.value,10),L=wt.get(S);if(!L){x(`ไม่พบเลขที่ ${g.value}`,"warning"),g.value=V.get(r.id)??"";return}L.id!==r.id&&(r=L,t="info",o())};(c=n.querySelector("#sc-sp-jump"))==null||c.addEventListener("change",d),(b=n.querySelector("#sc-sp-jump"))==null||b.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),d())}),n.querySelectorAll(".sc-sp-tab").forEach(g=>g.addEventListener("click",()=>{t=g.dataset.tab,o()})),n.querySelectorAll(".sc-score-input").forEach(g=>{g.addEventListener("change",async()=>{var A;const S=parseInt(g.dataset.col,10),L=g.value.trim();g.disabled=!0;try{await Yn(m,r.id,S,L===""?null:L);const P=ce[A=r.id]??(ce[A]=[]),G=P.find(ee=>ee.score_column_id===S),f=L===""?null:parseFloat(L);G?G.score=f:P.push({student_id:r.id,score_column_id:S,score:f}),x("บันทึกคะแนนแล้ว","success"),o()}catch(P){x("บันทึกไม่สำเร็จ: "+B(P),"error"),g.disabled=!1}})}),($=n.querySelector("#sc-sp-return"))==null||$.addEventListener("click",async()=>{const g=xe[r.id];try{await vt(g.id,"returned"),x("บันทึกกลับเข้าห้องแล้ว","success"),n.remove(),H()}catch(S){x("บันทึกไม่สำเร็จ: "+B(S),"error")}}),(k=n.querySelector("#sc-sp-leave"))==null||k.addEventListener("click",()=>{if(Object.keys(xe).length>=M){x(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${M} คนแล้ว`,"warning");return}n.remove(),$s(p,v,r.id,r.full_name,r.image_url,xe,M,()=>H())}),(T=n.querySelector("#sc-sp-quiz-monitor"))==null||T.addEventListener("click",()=>{le&&Ss(le)}),(F=n.querySelector("#sc-sp-unlock"))==null||F.addEventListener("click",g=>{const S=g.target.dataset.attempt;hn(S,()=>{n.remove(),H()})})};n.addEventListener("click",a=>{a.target===n&&n.remove()}),o()}function hn(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4",t.innerHTML=`
      <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
        <div class="text-4xl mb-3">🔓</div>
        <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
        <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
        <div class="space-y-2">
          <button id="qu-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
          <button id="qu-restart" class="sc-btn-dark w-full py-3 rounded-2xl font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
          <button id="qu-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#qu-cancel").addEventListener("click",()=>t.remove());const r=async n=>{t.remove();try{await ir(e,n),x(n==="resume"?"ปลดล็อก — ทำต่อจากจุดเดิมแล้ว":"ปลดล็อก — เริ่มชุดใหม่แล้ว","success"),s==null||s()}catch(o){x("ปลดล็อกไม่สำเร็จ: "+B(o),"error")}};t.querySelector("#qu-resume").addEventListener("click",()=>r("resume")),t.querySelector("#qu-restart").addEventListener("click",()=>r("restart"))}document.getElementById("sc-pass-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-return-btn");if(s)try{await vt(s.dataset.lid,"returned"),x("บันทึกกลับเข้าห้องแล้ว","success"),H()}catch(t){x("บันทึกไม่สำเร็จ: "+B(t),"error")}}),document.getElementById("sc-leave-quota").addEventListener("click",()=>{br(v,M,z,()=>H())}),document.getElementById("sc-timer").addEventListener("click",()=>wr(m,v,ht)),document.getElementById("sc-random").addEventListener("click",()=>{const e=_.map((s,t)=>({...s,seat_no:t+1}));kr(m,v,e,ht)}),document.getElementById("sc-scan-att").addEventListener("click",()=>xr(p)),document.getElementById("sc-scan-score").addEventListener("click",()=>mr({classId:m,className:v.class_name})),document.getElementById("sc-dashboard").addEventListener("click",()=>hr(m,v,window._pp5DonorTierIndex??0,q)),document.getElementById("sc-quiz-add").addEventListener("click",()=>Zs()),document.getElementById("sc-quiz-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-quiz-start"),t=e.target.closest(".sc-quiz-monitor"),r=e.target.closest(".sc-quiz-close"),n=e.target.closest(".sc-quiz-analytics");if(s)try{await ar(s.dataset.qid),x("เริ่มควิซให้ห้องนี้แล้ว 🧠","success"),H()}catch(o){x("เริ่มควิซไม่สำเร็จ: "+B(o),"error")}else if(t){const o=X.find(l=>l.id===t.dataset.qid);o&&Ss(o)}else if(r){const o=X.find(y=>y.id===r.dataset.qid);if(!o)return;const l=D.find(y=>String(y.id)===String(o.score_column_id)),a={highest:"เทียบเอาคะแนนสูงกว่า",overwrite:"ทับคะแนนเก่า",add:"บวกเพิ่มจากคะแนนเดิม"}[o.score_write_mode]??"ตามการตั้งค่าแบบทดสอบ",d=await In({quizTitle:o.title,hasScoreColumn:!!o.score_column_id,targetColumn:(l==null?void 0:l.assignment_name)??"",writeModeLabel:a});if(!d)return;try{await lr(o.id,{writeScores:d==="write_scores"}),x(d==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),H()}catch(y){x("ปิดสอบไม่สำเร็จ: "+B(y),"error")}}else if(n){const o=X.find(l=>l.id===n.dataset.qid);o&&vr(o)}}),document.getElementById("sc-add-announcement").addEventListener("click",()=>wn());function wn(){var r;(r=document.getElementById("sc-ann-modal"))==null||r.remove();let e=null;const s=document.createElement("div");s.id="sc-ann-modal",s.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📣 สร้างประกาศ — ${u(v.class_name??"")}</h3>
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
            ${rt.map(n=>`<button type="button" data-emoji="${n.emoji}" data-label="${u(n.label)}" class="ca-type-chip px-2.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50 transition">${n.emoji} ${n.label}</button>`).join("")}
          </div>
          <input id="ca-type-custom" type="text" list="ca-type-list" placeholder="หรือพิมพ์ประเภทใหม่เอง..."
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <datalist id="ca-type-list">${Fe.map(n=>`<option value="${u(n)}"></option>`).join("")}</datalist>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">แนบไฟล์/รูปภาพ (เลือกได้หลายไฟล์ ไม่บังคับ)</label>
          <input id="ca-files" type="file" multiple class="w-full text-xs" />
        </div>
        <button id="ca-send" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">ส่งประกาศ</button>
      </div>`,document.body.appendChild(s),s.addEventListener("click",n=>{n.target===s&&s.remove()}),s.querySelector("#ca-close").addEventListener("click",()=>s.remove());const t=s.querySelector("#ca-type-custom");s.querySelectorAll(".ca-type-chip").forEach(n=>n.addEventListener("click",()=>{e=`${n.dataset.emoji} ${n.dataset.label}`,t.value="",s.querySelectorAll(".ca-type-chip").forEach(o=>o.classList.remove("border-amber-400","bg-amber-100","text-amber-800")),n.classList.add("border-amber-400","bg-amber-100","text-amber-800")})),t.addEventListener("input",()=>{t.value.trim()&&(e=null,s.querySelectorAll(".ca-type-chip").forEach(n=>n.classList.remove("border-amber-400","bg-amber-100","text-amber-800")))}),s.querySelector("#ca-send").addEventListener("click",async()=>{const n=s.querySelector("#ca-text").value.trim();if(!n){x("พิมพ์ข้อความก่อนส่งนะ","warning");return}const o=t.value.trim()||e||`${rt[0].emoji} ${rt[0].label}`,l=s.querySelector("#ca-send");l.disabled=!0,l.textContent="กำลังส่ง...";try{const a=[...s.querySelector("#ca-files").files??[]],d=[];for(const y of a)d.push(await Es(y,`class-${m}/announcements`));await Gn({title:`📣 ${v.class_name}`,body:n,isActive:!0,teacherId:p.id,targetClassIds:[m],annType:o,attachmentUrls:d.length?d:null}),jt(`${o} — ${v.class_name}`,n.slice(0,120),"sc-announcement"),x("ส่งประกาศถึงห้องนี้แล้ว 📣","success"),s.remove(),H()}catch(a){x("ส่งไม่สำเร็จ: "+B(a),"error"),l.disabled=!1,l.textContent="ส่งประกาศ"}})}let Ze="daily";function Wt(){document.querySelectorAll(".sc-reftab-btn").forEach(t=>{t.classList.toggle("active",t.dataset.reftab===Ee)});const e=ze.find(t=>t.key===Ee),s=document.getElementById("sc-mobile-ref-title");s&&e&&(s.textContent=`${e.icon} ${e.label}`)}function xt(){var s,t,r,n,o,l,a,d,y;const e=[...new Set((N??[]).filter(i=>Number(i.subject_id)===Number(oe)).map(i=>Number(i.day_of_week)).map(i=>i===0?7:i).filter(i=>Number.isInteger(i)&&i>=1&&i<=7&&i!==6))];document.querySelectorAll(".sc-sched-tab").forEach(i=>{i.classList.toggle("active",i.dataset.sched===Ze),i.addEventListener("click",()=>{Ze=i.dataset.sched,document.querySelectorAll(".sc-sched-tab").forEach(c=>c.classList.toggle("active",c.dataset.sched===Ze)),document.getElementById("sc-schedule-body").innerHTML=Ct(Ze)})}),(s=document.getElementById("sc-add-syllabus"))==null||s.addEventListener("click",()=>Xt()),(t=document.getElementById("sc-ai-syllabus"))==null||t.addEventListener("click",()=>Ms({teacher:p,cls:v,courseId:oe,syllabusItems:K,lessonPlans:J,currentWeek:ue||1,initialMode:"schedule",semesterStart:q.semester_start,semesterEnd:q.semester_end,scheduledDays:e,onSaved:()=>H()})),(r=document.getElementById("sc-syllabus-list"))==null||r.addEventListener("click",i=>{const c=i.target.closest(".sc-syllabus-delete");if(c){const k=K.find(T=>T.id===parseInt(c.dataset.sylid,10));if(!k||!confirm(`ลบกำหนดการสอนสัปดาห์ ${k.week_start}${k.week_end!==k.week_start?`–${k.week_end}`:""} เรื่อง "${k.topic}"?`))return;c.disabled=!0,vs(k.id).then(()=>{x("ลบกำหนดการสอนแล้ว","success"),H()}).catch(T=>{c.disabled=!1,x("ลบไม่สำเร็จ: "+B(T),"error")});return}const b=i.target.closest(".sc-syllabus-row");if(!b)return;const $=K.find(k=>k.id===parseInt(b.dataset.sylid,10));$&&Xt($)}),(n=document.getElementById("sc-add-plan"))==null||n.addEventListener("click",()=>Jt()),(o=document.getElementById("sc-ai-plan"))==null||o.addEventListener("click",()=>Ms({teacher:p,cls:v,courseId:oe,syllabusItems:K,lessonPlans:J,currentWeek:ue||1,initialMode:"plan",semesterStart:q.semester_start,semesterEnd:q.semester_end,scheduledDays:e,onSaved:()=>H()})),(l=document.getElementById("sc-sync-plan-pattern"))==null||l.addEventListener("click",async i=>{const c=new Map;for(const S of ut()){const L=Number(S.week_start);!Number.isInteger(L)||L<1||(c.has(L)||c.set(L,[]),c.get(L).push(S))}const b=[...c.keys()].sort((S,L)=>S-L),$=c.get(1)??[];if(!c.has(1)||!b.some(S=>S>1)||!$.length)return x("ต้องมีแผนในสัปดาห์ที่ 1 และสัปดาห์ถัดไปก่อน","warning");const k=[];for(const S of b.filter(L=>L>1))(c.get(S)??[]).forEach((A,P)=>{var w,h,E,C;const G=$[P];if(!G)return;const f=Ye(G),ee=Ye(A),ne=Bt(A),te=String(A.title??"").replace(/(ครั้งที่\s*)\d+/g,`$1${ne}`);ee.periodCount===f.periodCount&&ee.minutesPerPeriod===f.minutesPerPeriod&&Number(A.duration_minutes)===f.durationMinutes&&Number((w=A.source_json)==null?void 0:w.period_count)===f.periodCount&&Number((h=A.source_json)==null?void 0:h.minutes_per_period)===f.minutesPerPeriod&&Number(A.session_number)===ne&&Number((E=A.source_json)==null?void 0:E.session_in_week)===P+1&&Number((C=A.source_json)==null?void 0:C.sessions_per_week)===$.length&&A.title===te||k.push({plan:A,config:f,sessionNumber:ne,sessionInWeek:P+1,title:te})});if(!k.length)return x("ทุกสัปดาห์ใช้รูปแบบคาบเดียวกับสัปดาห์แรกอยู่แล้ว","success");const T=$.map((S,L)=>{const A=Ye(S);return`ครั้งที่ ${L+1}: ${A.periodCount} คาบ × ${A.minutesPerPeriod} นาที`}).join(", ");if(!confirm(`จะปรับเลขครั้ง ชื่อแผน จำนวนคาบ และเวลารวมของ ${k.length} แผนในสัปดาห์ถัดไป ให้ตรงกับรูปแบบสัปดาห์แรก (${T}) โดยไม่แก้เนื้อหาการสอน ดำเนินการหรือไม่?`))return;const F=i.currentTarget;F.disabled=!0;let g=0;try{for(const{plan:S,config:L,sessionNumber:A,sessionInWeek:P,title:G}of k)await hs(S.id,{title:G,session_number:A,duration_minutes:L.durationMinutes,source_json:{...S.source_json??{},session_number:A,session_in_week:P,sessions_per_week:$.length,period_count:L.periodCount,minutes_per_period:L.minutesPerPeriod,duration_minutes:L.durationMinutes}}),g++;x(`ปรับรูปแบบคาบแล้ว ${g} แผน ✅`,"success"),H()}catch(S){x(`ปรับแล้ว ${g}/${k.length} แผน ก่อนเกิดข้อผิดพลาด: ${B(S)}`,"error"),H()}finally{F.disabled=!1}}),(a=document.getElementById("sc-plan-list"))==null||a.addEventListener("click",i=>{const c=i.target.closest(".sc-plan-delete");if(c){const k=J.find(T=>T.id===parseInt(c.dataset.planid,10));if(!k||!confirm(`ลบแผน "${k.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`))return;c.disabled=!0,ws(k.id).then(()=>{x("ลบแผนแล้ว","success"),H()}).catch(T=>{c.disabled=!1,x("ลบไม่สำเร็จ: "+B(T),"error")});return}const b=i.target.closest(".sc-plan-reflect"),$=i.target.closest(".sc-plan-row");if(b){const k=J.find(T=>T.id===parseInt(b.dataset.planid,10));k&&qr({plan:Ve(k),cls:v,teacher:p,classId:m,currentWeek:ue||k.week_start,semesterStart:q.semester_start,semesterEnd:q.semester_end,scheduledDays:e})}else if($){const k=J.find(T=>T.id===parseInt($.dataset.planid,10));k&&Jt(Ve(k))}}),(d=document.getElementById("sc-add-assignment"))==null||d.addEventListener("click",()=>gt()),(y=document.getElementById("sc-assignment-list"))==null||y.addEventListener("click",i=>{const c=i.target.closest(".sc-assignment-row");if(!c)return;const b=ae.find($=>$.id===parseInt(c.dataset.aid,10));b&&Zt(b)})}xt();const kn=()=>`
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
      ${Mt()}
    </div>`;function _n(){var e,s,t,r,n,o,l,a;(e=document.getElementById("sc-mobile-more-chat"))==null||e.addEventListener("click",Dt),(s=document.getElementById("sc-mobile-more-ai"))==null||s.addEventListener("click",Pt),(t=document.getElementById("sc-mobile-more-ann"))==null||t.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-add-announcement"))==null?void 0:d.click()}),(r=document.getElementById("sc-mobile-more-dashboard"))==null||r.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-dashboard"))==null?void 0:d.click()}),(n=document.getElementById("sc-mobile-more-switch"))==null||n.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-switch-class"))==null?void 0:d.click()}),(o=document.getElementById("sc-mobile-more-exam"))==null||o.addEventListener("click",()=>{var d;return(d=document.getElementById("sc-mobile-exam-preview"))==null?void 0:d.scrollIntoView({behavior:"smooth",block:"start"})}),(l=document.getElementById("sc-mobile-more-grades"))==null||l.addEventListener("click",()=>Ce("grades")),(a=document.getElementById("sc-mobile-more-attendance"))==null||a.addEventListener("click",()=>Ce("attendance"))}function $n(){document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.classList.toggle("active",e.dataset.mobileGroup===Xe))}function Vt(){const e=document.getElementById("sc-mobile-ref-subtabs");if(!e)return;const s=Xe==="plan"?ze.filter(t=>["syllabus","plans"].includes(t.key)):[];e.innerHTML=s.map(t=>`<button type="button" data-mobile-ref-tab="${t.key}" class="${t.key===Ee?"active":""}">${t.icon} ${t.label}</button>`).join(""),e.querySelectorAll("[data-mobile-ref-tab]").forEach(t=>t.addEventListener("click",()=>Ce(t.dataset.mobileRefTab)))}async function Sn(e,s){var r;const t=e==="grades"?"คะแนน":"เช็คชื่อ";s.innerHTML=`<div class="flex flex-col items-center justify-center py-12 gap-3">
      <button id="sc-reopen-overlay" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">เปิดหน้าต่าง${t}อีกครั้ง</button>
    </div>`,(r=s.querySelector("#sc-reopen-overlay"))==null||r.addEventListener("click",()=>Ce(e));try{await Sr(e==="grades"?yr:gr,p,v)}catch(n){console.error(n)}Ls("my-classes"),qs("Smart Classroom")}function qe(){const e=document.getElementById("sc-reference-fullscreen");if(!e)return;const s=e.querySelector("#sc-reftab-body"),t=document.getElementById("sc-reftab-body-host");s&&t&&(t.innerHTML="",t.appendChild(s),s.className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-4 py-8 text-center text-xs text-gray-400",s.innerHTML="เลือก “กำหนดการสอน” หรือ “แผนการสอน” เพื่อเปิดรายละเอียดเต็ม"),e._onKeyDown&&document.removeEventListener("keydown",e._onKeyDown),document.body.style.overflow=e.dataset.previousOverflow??"",e.remove()}function En(e){qe();const s=ze.find(l=>l.key===e),t=document.getElementById("sc-reftab-body-host"),r=document.getElementById("sc-reftab-body");if(!s||!t||!r)return;const n=document.createElement("div");n.id="sc-reference-fullscreen",n.className="fixed inset-0 z-[110] flex flex-col bg-slate-50",n.dataset.previousOverflow=document.body.style.overflow,n.innerHTML=`
      <div class="flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto flex w-full max-w-[1600px] items-center gap-3 px-4 py-3 sm:px-6">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl ${e==="plans"?"bg-violet-100":"bg-blue-100"} text-xl">${s.icon}</div>
          <div class="min-w-0 flex-1">
            <h2 class="truncate text-base font-extrabold text-gray-800 sm:text-lg">${s.label}</h2>
            <p class="truncate text-[11px] text-gray-400">${u(Oe.subject_name??"")} · ${u(v.class_name??"")}</p>
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
      </style>`,document.body.appendChild(n),n.querySelector("#sc-reference-fullscreen-close").addEventListener("click",qe),n.addEventListener("click",l=>{l.target===n&&qe()}),n._onKeyDown=l=>{l.key==="Escape"&&qe()},document.addEventListener("keydown",n._onKeyDown),document.body.style.overflow="hidden",n.querySelector("#sc-reference-fullscreen-scroll > div").appendChild(r),r.className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6",r.innerHTML=Nt(e),xt()}async function Ce(e){var t;if(!ze.some(r=>r.key===e))return;if(Ee=e,Wt(),Vt(),window.matchMedia("(max-width: 1023px)").matches&&((t=document.getElementById("sc-reference-panel"))==null||t.classList.add("mobile-open")),e==="schedule"||e==="syllabus"||e==="plans"){En(e);return}const s=document.getElementById("sc-reftab-body");if(s){if(e==="grades"||e==="attendance"){await Sn(e,s);return}s.innerHTML=Nt(Ee),xt()}}function Yt(e){if(!zt.some(o=>o.key===e))return;Xe=e,$n();const s=document.getElementById("sc-mobile-room-section"),t=document.getElementById("sc-mobile-live-section"),r=["work","plan","more"].includes(e);s==null||s.classList.toggle("mobile-active",e==="room"),t==null||t.classList.toggle("mobile-active",e==="live"||r);const n=document.getElementById("sc-reference-panel");if(e==="room"||e==="live"){n==null||n.classList.remove("mobile-open"),window.scrollTo({top:0,behavior:"smooth"});return}if(e==="work")Ce("assignments");else if(e==="plan"){Ee=null,Wt(),Vt();const o=document.getElementById("sc-mobile-ref-title");o&&(o.textContent="📝 เลือกเมนูแผนการสอน");const l=document.getElementById("sc-reftab-body");l&&(l.innerHTML='<div class="rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 px-4 py-10 text-center text-sm font-semibold text-violet-700">เลือกเมนูด้านบนเพื่อเปิดรายละเอียดเต็มหน้าจอ</div>'),n==null||n.classList.add("mobile-open")}else{const o=document.getElementById("sc-mobile-ref-title");o&&(o.textContent="••• เพิ่มเติม"),document.getElementById("sc-mobile-ref-subtabs").innerHTML="",document.getElementById("sc-reftab-body").innerHTML=kn(),_n(),n==null||n.classList.add("mobile-open")}}document.querySelectorAll(".sc-reftab-btn").forEach(e=>e.addEventListener("click",()=>Ce(e.dataset.reftab))),document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.addEventListener("click",()=>Yt(e.dataset.mobileGroup))),(bs=document.getElementById("sc-mobile-ref-close"))==null||bs.addEventListener("click",()=>{Yt("room")});function Xt(e){var n,o;(n=document.getElementById("sc-syllabus-modal"))==null||n.remove();const s=!!e,t=e??{},r=document.createElement("div");r.id="sc-syllabus-modal",r.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">${s?"📘 แก้ไขหัวข้อสอน":"➕ เพิ่มหัวข้อสอน"}</h3>
          <div class="flex items-center gap-2">
            ${s?'<button id="sy-delete" class="text-[11px] text-red-400 hover:text-red-600">🗑️ ลบ</button>':""}
            <button id="sy-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์เริ่ม *</label>
            <input id="sy-week-start" type="number" min="1" value="${t.week_start??""}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์สิ้นสุด *</label>
            <input id="sy-week-end" type="number" min="1" value="${t.week_end??""}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">หัวข้อ/เรื่องที่สอน *</label>
          <input id="sy-topic" type="text" value="${u(t.topic??"")}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียดเพิ่มเติม</label>
          <textarea id="sy-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none">${u(t.description??"")}</textarea>
        </div>
        <button id="sy-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">บันทึก</button>
      </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#sy-close").addEventListener("click",()=>r.remove()),(o=r.querySelector("#sy-delete"))==null||o.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้?"))try{await vs(t.id),x("ลบแล้ว","success"),r.remove(),H()}catch(l){x("ลบไม่สำเร็จ: "+B(l),"error")}}),r.querySelector("#sy-save").addEventListener("click",async()=>{const l=parseInt(r.querySelector("#sy-week-start").value,10),a=parseInt(r.querySelector("#sy-week-end").value,10),d=r.querySelector("#sy-topic").value.trim();if(!l||!a||a<l){x("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}if(!d){x("กรอกหัวข้อก่อนนะ","warning");return}const y=r.querySelector("#sy-save");y.disabled=!0,y.textContent="กำลังบันทึก...";const i={course_id:oe,week_start:l,week_end:a,topic:d,description:r.querySelector("#sy-desc").value.trim()||null,source_json:{...t.source_json??{},...s?{}:{class_id:m}}};try{s?await tr(t.id,i):await sr(i),x("บันทึกแล้ว ✅","success"),r.remove(),H()}catch(c){x("บันทึกไม่สำเร็จ: "+B(c),"error"),y.disabled=!1,y.textContent="บันทึก"}})}function Jt(e){var E,C,j,me,je,yt,et,xs;(E=document.getElementById("sc-plan-modal"))==null||E.remove();const s=!!e,t=e?Ve(e):{},r=(v==null?void 0:v.master_subjects)??{},n={MATH:"คณิตศาสตร์",THAI:"ภาษาไทย",SCI:"วิทยาศาสตร์และเทคโนโลยี",ENG:"ภาษาต่างประเทศ",SOC:"สังคมศึกษา ศาสนาและวัฒนธรรม",PE:"สุขศึกษาและพลศึกษา",ART:"ศิลปะ",CAREER:"การงานอาชีพ",ISLAM:"อิสลามศึกษา"},o=String(r.dept??r.subject_group??"").trim(),l=n[o.toUpperCase()]||o||"................................",a=String((v==null?void 0:v.class_name)??"").trim(),d=String(r.grade_level??"").replace(/ม\./g,"").trim(),y=/^ม\./.test(a)?a.replace(/^ม\./,""):[d,a].filter(Boolean).join(" "),i=v==null?void 0:v.students,c=(Array.isArray(i)?(C=i[0])==null?void 0:C.full_name:i==null?void 0:i.full_name)??"................................",b=Number(t.duration_minutes)||Number((j=t.source_json)==null?void 0:j.duration_minutes)||45,$=Number((me=t.source_json)==null?void 0:me.period_count),k=Number((je=t.source_json)==null?void 0:je.minutes_per_period),T=Number.isInteger($)&&$>0?$:b%45===0?b/45:b===100?2:1,F=Number.isInteger(k)&&k>0?k:b%45===0?45:b===100?50:b,S=String(t.unit_title??"").trim().replace(/^หน่วยการเรียนรู้ที่\s*/,"").replace(/^หน่วยที่\s*/,"").replace(/^ที่\s*/,""),L=[...new Set((N??[]).filter(I=>Number(I.subject_id)===Number(oe)).map(I=>Number(I.day_of_week)).map(I=>I===0?7:I).filter(I=>Number.isInteger(I)&&I>=1&&I<=7&&I!==6))].sort((I,U)=>I%7-U%7),A=I=>{if(!(q!=null&&q.semester_start)||!Number.isInteger(Number(I))||Number(I)<1||!L.length)return null;const[U,be,_e]=q.semester_start.split("-").map(Number),Ie=new Date(U,be-1,_e),Me=new Date(Ie);Me.setDate(Ie.getDate()-Ie.getDay()+(Number(I)-1)*7);const De=[];for(let Te=0;Te<=5;Te++){const fe=new Date(Me);if(fe.setDate(Me.getDate()+Te),fe<Ie||q.semester_end&&fe>new Date(`${q.semester_end}T23:59:59`))continue;const jn=fe.getDay()||7;L.includes(jn)&&De.push(`${fe.getFullYear()}-${String(fe.getMonth()+1).padStart(2,"0")}-${String(fe.getDate()).padStart(2,"0")}`)}return De[0]??null},P=t.lesson_date||A(Number(t.week_start||ue||1))||"",G=I=>{const U=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(I??""));return U?`${U[3]}/${U[2]}/${String(Number(U[1])+543).slice(-2)}`:"ยังไม่ระบุ"},f=document.createElement("div");f.id="sc-plan-modal",f.className="fixed inset-0 z-[95] bg-slate-100 flex flex-col",f.innerHTML=`
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
        <div class="min-w-0 mr-auto"><p class="font-extrabold text-sm text-gray-800 truncate">${s?"แก้ไขแผนการสอน":"สร้างแผนการสอนใหม่"}</p><p class="text-[10px] text-gray-400 lp-hide-mobile">แก้ไขบนหน้ากระดาษตามแบบฟอร์มจริง</p></div>
        <input id="lp-title" value="${u(t.title??"")}" placeholder="ชื่อแผน *" class="lp-admin-input w-48 lp-hide-mobile">
        <label class="text-[10px] text-gray-500 lp-hide-mobile">สัปดาห์ <input id="lp-week-start" type="number" min="1" value="${t.week_start??""}" class="lp-admin-input w-16 ml-1"></label>
        <label class="text-[10px] text-gray-500 lp-hide-mobile">ถึง <input id="lp-week-end" type="number" min="1" value="${t.week_end??""}" class="lp-admin-input w-16 ml-1"></label>
        <details class="lp-extra"><summary class="h-10 px-3 rounded-xl border flex items-center justify-center text-xs font-bold text-gray-600 bg-white">⚙️ ข้อมูลเพิ่มเติม</summary><div class="lp-extra-content"><div class="grid grid-cols-2 gap-2 mb-2 sm:hidden"><label class="text-[10px] text-gray-500">ชื่อแผน<input id="lp-title-mobile" value="${u(t.title??"")}" class="lp-admin-input w-full mt-1"></label><label class="text-[10px] text-gray-500">สัปดาห์<input id="lp-week-mobile" value="${t.week_start??""}" class="lp-admin-input w-full mt-1"></label></div><label class="block text-[10px] font-bold text-gray-500">งาน/การบ้าน<textarea id="lp-homework" rows="3" class="mt-1">${u(t.homework??"")}</textarea></label><label class="block text-[10px] font-bold text-gray-500 mt-2">หมายเหตุครู<textarea id="lp-teacher_notes" rows="3" class="mt-1">${u(t.teacher_notes??"")}</textarea></label></div></details>
        ${s?'<button id="lp-delete" class="h-10 px-3 flex-none rounded-xl border border-red-100 text-xs font-bold text-red-500 hover:bg-red-50">🗑️ <span class="lp-hide-mobile">ลบ</span></button>':""}
        <button id="lp-save" class="h-10 px-4 flex-none rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm">💾 บันทึกแผน</button>
      </header>
      <main class="lp-editor-scroll">
        <article class="lp-paper animate-fade">
          <section class="lp-head">
            <img src="./pp5-form-logo.png" alt="ตราโรงเรียน">
            <h1>แผนการจัดการเรียนรู้(หน้าเดียว)</h1>
            <h2>กลุ่มสาระการเรียนรู้${u(l)}</h2>
            <p class="lp-subject-line">วิชา ${u(r.subject_name??"")} รหัสวิชา ${u(r.subject_code??"")} ชั้นมัธยมศึกษาปีที่ ${u(y||"................................")}</p>
            <div class="lp-unit-row"><span>หน่วยการเรียนรู้ที่</span><input id="lp-unit-title" class="lp-doc-input" value="${u(S)}" placeholder="เลขหน่วยและชื่อหน่วย"> เรื่อง <input id="lp-key_concept" class="lp-doc-input" value="${u(t.key_concept??"")}" placeholder="เรื่องที่สอน"></div>
          </section>
          <section class="lp-meta">
            <label>ครั้งที่ <input id="lp-session-number" type="number" min="1" class="lp-doc-input" value="${t.session_number??1}"></label>
            <label>จำนวน <input id="lp-period-count" type="number" min="1" class="lp-doc-input" value="${T}"> คาบ</label>
            <label>นาที/คาบ <input id="lp-minutes-per-period" type="number" min="1" class="lp-doc-input" value="${F}"></label>
            <label>รวมเวลา <span><output id="lp-duration-total" class="lp-duration-total">${T*F}</output> นาที</span></label>
            <label>วันที่ <span><input id="lp-lesson-date" type="date" class="lp-doc-input" value="${u(P)}"><small id="lp-date-thai" class="block text-center text-[10px] text-gray-500">${G(P)}</small></span></label>
          </section>
          <section class="lp-columns">
            <div>
              <div class="lp-box"><div class="lp-box-title">1.มาตรฐาน/ตัวชี้วัด (ผลการเรียนรู้)</div><div class="lp-box-body"><textarea id="lp-standards" class="lp-doc-area" rows="5">${u(t.standards??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">2.จุดประสงค์การเรียนรู้</div><div class="lp-box-body"><textarea id="lp-objectives" class="lp-doc-area" rows="5">${u(t.objectives??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">3.กิจกรรมการเรียนรู้</div><div class="lp-box-body lp-activities"><b>ขั้นนำเข้าสู่บทเรียน</b><textarea id="lp-activities_intro" class="lp-doc-area" rows="3">${u(t.activities_intro??"")}</textarea><b>ขั้นสอน</b><textarea id="lp-activities_main" class="lp-doc-area main" rows="7">${u(t.activities_main??"")}</textarea><b>ขั้นสรุป</b><textarea id="lp-activities_wrap" class="lp-doc-area" rows="3">${u(t.activities_wrap??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">4.การวัดและประเมินผล</div><div class="lp-box-body"><textarea id="lp-assessment" class="lp-doc-area" rows="3">${u(t.assessment??"")}</textarea></div></div>
            </div>
            <div>
              <div class="lp-box lp-media"><div class="lp-box-title">5.สื่อการเรียนรู้</div><div class="lp-box-body"><textarea id="lp-media" class="lp-doc-area" rows="3">${u(t.media??"")}</textarea></div></div>
              <div class="lp-sign-pair">
                <div class="lp-sign"><div class="lp-sign-space"></div><div class="lp-sign-row"><span>ลงชื่อ</span><span class="lp-sign-line"></span></div><div>หัวหน้าห้อง</div><div>( ${u(c)} )</div><div>วันที่ <span class="lp-sign-date">${G(P)}</span></div></div>
                <div class="lp-sign"><div class="lp-sign-space"></div><div class="lp-sign-row"><span>ลงชื่อ</span><span class="lp-sign-line"></span></div><div>ครูผู้สอน</div><div>( ${u((p==null?void 0:p.full_name)??"................................")} )</div><div>วันที่ <span class="lp-sign-date">${G(P)}</span></div></div>
              </div>
              <div class="lp-reflect"><h3>บันทึกหลังการสอน</h3><div class="lp-rule">ผลการจัดการเรียนรู้:</div><div class="lp-rule"></div><div class="lp-rule">แนวทางการแก้ปัญหา:</div><div class="lp-rule"></div></div>
              <div class="lp-suggestion"><h3>ข้อเสนอแนะ</h3><div class="lp-rule"></div><div class="lp-rule"></div><div class="lp-rule"></div></div>
              <div class="lp-dept-sign">ลงชื่อ <span class="lp-sign-line"></span> หัวหน้ากลุ่มสาระ<div>( ................................ )</div><div>วันที่ ................................</div></div>
            </div>
          </section>
        </article>
      </main>`,document.body.appendChild(f),f.querySelector("#lp-close").addEventListener("click",()=>f.remove());const ee=()=>{const I=Math.max(1,parseInt(f.querySelector("#lp-period-count").value,10)||1),U=Math.max(1,parseInt(f.querySelector("#lp-minutes-per-period").value,10)||45);f.querySelector("#lp-duration-total").textContent=String(I*U)};f.querySelector("#lp-period-count").addEventListener("input",ee),f.querySelector("#lp-minutes-per-period").addEventListener("input",ee);const ne=f.querySelector("#lp-title"),te=f.querySelector("#lp-title-mobile");te==null||te.addEventListener("input",()=>{ne.value=te.value}),ne==null||ne.addEventListener("input",()=>{te&&(te.value=ne.value)}),(yt=f.querySelector("#lp-week-mobile"))==null||yt.addEventListener("input",I=>{f.querySelector("#lp-week-start").value=I.target.value,f.querySelector("#lp-week-end").value=I.target.value});let w=P;const h=()=>{const I=f.querySelector("#lp-lesson-date"),U=A(parseInt(f.querySelector("#lp-week-start").value,10));U&&(!I.value||I.value===w)&&(I.value=U,w=U);const be=G(I.value);f.querySelector("#lp-date-thai").textContent=be,f.querySelectorAll(".lp-sign-date").forEach(_e=>{_e.textContent=be})};f.querySelector("#lp-lesson-date").addEventListener("change",()=>{const I=f.querySelector("#lp-lesson-date").value;w="";const U=G(I);f.querySelector("#lp-date-thai").textContent=U,f.querySelectorAll(".lp-sign-date").forEach(be=>{be.textContent=U})}),f.querySelector("#lp-week-start").addEventListener("change",h),(et=f.querySelector("#lp-week-mobile"))==null||et.addEventListener("change",h),(xs=f.querySelector("#lp-delete"))==null||xs.addEventListener("click",async()=>{if(confirm(`ลบแผน "${t.title}"? บันทึกหลังสอน/ลายเซ็นที่ผูกกับแผนนี้จะหายไปด้วย`))try{await ws(t.id),x("ลบแผนแล้ว","success"),f.remove(),H()}catch(I){x("ลบไม่สำเร็จ: "+B(I),"error")}}),f.querySelector("#lp-save").addEventListener("click",async()=>{const I=f.querySelector("#lp-title").value.trim(),U=parseInt(f.querySelector("#lp-week-start").value,10),be=parseInt(f.querySelector("#lp-week-end").value,10);if(!I){x("กรอกชื่อแผนก่อนนะ","warning");return}if(!U||!be||be<U){x("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}const _e=f.querySelector("#lp-save");_e.disabled=!0,_e.textContent="กำลังบันทึก...";const Ie=Math.max(1,parseInt(f.querySelector("#lp-period-count").value,10)||1),Me=Math.max(1,parseInt(f.querySelector("#lp-minutes-per-period").value,10)||45),De=Ie*Me,Te={course_id:oe,teacher_id:p.id,title:I,week_start:U,week_end:be,session_number:parseInt(f.querySelector("#lp-session-number").value,10)||1,lesson_date:f.querySelector("#lp-lesson-date").value||A(U)||null,duration_minutes:De,source_json:{...t.source_json??{},class_id:Number(m)||null,period_count:Ie,minutes_per_period:Me,duration_minutes:De},unit_title:f.querySelector("#lp-unit-title").value.trim()||null,standards:f.querySelector("#lp-standards").value.trim()||null,objectives:f.querySelector("#lp-objectives").value.trim()||null,key_concept:f.querySelector("#lp-key_concept").value.trim()||null,activities_intro:f.querySelector("#lp-activities_intro").value.trim()||null,activities_main:f.querySelector("#lp-activities_main").value.trim()||null,activities_wrap:f.querySelector("#lp-activities_wrap").value.trim()||null,media:f.querySelector("#lp-media").value.trim()||null,assessment:f.querySelector("#lp-assessment").value.trim()||null,homework:f.querySelector("#lp-homework").value.trim()||null,teacher_notes:f.querySelector("#lp-teacher_notes").value.trim()||null};try{s?await hs(t.id,Te):await nr(Te),x("บันทึกแผนแล้ว ✅","success"),f.remove(),H()}catch(fe){x("บันทึกไม่สำเร็จ: "+B(fe),"error"),_e.disabled=!1,_e.textContent="บันทึกแผน"}})}const Ln=e=>{if(!e)return"";const s=new Date(e),t=r=>String(r).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`};function gt(e){var T,F;(T=document.getElementById("sc-assign-modal"))==null||T.remove();const s=!!e,t=e??{};let r=[...t.attachment_urls??[]];const n=document.createElement("div");n.id="sc-assign-modal",n.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">${s?"✏️ แก้ไขงาน":"➕ สั่งงานใหม่"}</h3>
          <div class="flex items-center gap-2">
            ${s?'<button id="sa-delete" class="text-[11px] text-red-400 hover:text-red-600">🗑️ ลบ</button>':""}
            <button id="sa-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ชื่องาน *</label>
          <input id="sa-title" type="text" value="${u(t.title??"")}" placeholder="เช่น ใบงานที่ 3 — สมการเชิงเส้น" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label>
          <textarea id="sa-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300">${u(t.description??"")}</textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ไฟล์แนบ${s?"":"/รูปภาพ (เลือกได้หลายไฟล์)"}</label>
          <div id="sa-kept-files" class="flex flex-wrap gap-1.5 mb-1.5"></div>
          <input id="sa-files" type="file" multiple class="w-full text-xs" />
          ${s?'<p class="text-[10px] text-gray-400 mt-1">ไฟล์ใหม่ที่แนบเพิ่มจะรวมกับไฟล์เดิมที่เหลือด้านบน</p>':""}
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ผูกกับคอลัมน์คะแนน</label>
          <select id="sa-col" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
            <option value="">— ไม่ผูกกับคะแนน —</option>
            ${D.map(g=>`<option value="${g.id}" ${t.score_column_id===g.id?"selected":""}>${u(g.assignment_name)} (เต็ม ${g.max_score})</option>`).join("")}
          </select>
        </div>
        <div id="sa-write-mode-wrap" class="hidden space-y-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">คะแนนเต็มของงานนี้</label>
            <input id="sa-max-score" type="number" min="0" step="0.5" value="${t.max_score??""}" placeholder="ไม่ระบุ = ใช้คะแนนเต็มของคอลัมน์คะแนน" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-[10px] text-gray-400 mt-1">เผื่อคอลัมน์เดียวกันสะสมคะแนนจากหลายงาน แต่แต่ละงานเต็มไม่เท่ากัน (เช่น คอลัมน์เต็ม 100 แต่ใบงานนี้เต็มแค่ 5)</p>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร</label>
            <select id="sa-write-mode" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
              ${Object.entries(ot).map(([g,S])=>`<option value="${g}" ${(t.score_write_mode??"overwrite")===g?"selected":""}>${S.label}</option>`).join("")}
            </select>
            <p id="sa-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">กำหนดส่ง</label>
          <input id="sa-due" type="datetime-local" value="${Ln(t.due_at)}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">หักคะแนนกรณีส่งช้า</label>
          <div class="flex gap-2 mb-1.5">
            <select id="sa-penalty-mode" class="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
              <option value="none" ${(t.late_penalty_mode??"none")==="none"?"selected":""}>ไม่หัก</option>
              <option value="flat" ${t.late_penalty_mode==="flat"?"selected":""}>หักครั้งเดียว (คงที่)</option>
              <option value="per_day" ${t.late_penalty_mode==="per_day"?"selected":""}>หักตามจำนวนวันที่ช้า</option>
            </select>
            <input id="sa-penalty-value" type="number" min="0" step="0.1" placeholder="0" value="${t.late_penalty_value??""}" ${(t.late_penalty_mode??"none")==="none"?"disabled":""} class="w-24 text-sm text-center border border-gray-200 rounded-xl px-2 py-2 ${(t.late_penalty_mode??"none")==="none"?"bg-gray-50":""}" />
          </div>
          <p id="sa-penalty-hint" class="text-[10px] text-gray-400"></p>
        </div>
        <button id="sa-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">${s?"บันทึกการแก้ไข":"บันทึกงาน"}</button>
      </div>`,document.body.appendChild(n),n.addEventListener("click",g=>{g.target===n&&n.remove()}),n.querySelector("#sa-close").addEventListener("click",()=>n.remove()),(F=n.querySelector("#sa-delete"))==null||F.addEventListener("click",async()=>{if(confirm(`ลบงาน "${t.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await ys(t.id),x("ลบงานแล้ว","success"),n.remove(),H()}catch(g){x("ลบไม่สำเร็จ: "+B(g),"error")}});const o=n.querySelector("#sa-kept-files"),l=()=>{o.innerHTML=r.map((g,S)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${u(g.name)}
          <button type="button" class="sa-remove-file text-indigo-400 hover:text-red-500 font-bold" data-i="${S}">✕</button>
        </span>`).join(""),o.querySelectorAll(".sa-remove-file").forEach(g=>g.addEventListener("click",()=>{r.splice(parseInt(g.dataset.i,10),1),l()}))};l();const a=n.querySelector("#sa-penalty-mode"),d=n.querySelector("#sa-penalty-value"),y=n.querySelector("#sa-penalty-hint");a.addEventListener("change",()=>{d.disabled=a.value==="none",d.disabled?(d.classList.add("bg-gray-50"),d.value=""):d.classList.remove("bg-gray-50"),y.textContent=a.value==="flat"?"หักคะแนนเท่านี้ทันทีถ้าส่งช้า ไม่ว่าจะช้ากี่วัน":a.value==="per_day"?"หักคะแนนเท่านี้ต่อวันที่ส่งช้า (คูณตามจำนวนวัน)":""});const i=n.querySelector("#sa-col"),c=n.querySelector("#sa-write-mode-wrap"),b=n.querySelector("#sa-write-mode"),$=n.querySelector("#sa-write-mode-hint"),k=()=>{var g;c.classList.toggle("hidden",!i.value),$.textContent=((g=ot[b.value])==null?void 0:g.hint)??""};i.addEventListener("change",k),b.addEventListener("change",k),k(),n.querySelector("#sa-save").addEventListener("click",async()=>{const g=n.querySelector("#sa-title").value.trim();if(!g){x("กรอกชื่องานก่อนนะ","warning");return}const S=n.querySelector("#sa-save");S.disabled=!0,S.textContent="กำลังบันทึก...";try{const L=[...n.querySelector("#sa-files").files??[]],A=[];for(const ee of L)A.push(await Es(ee,`class-${m}`));const P=n.querySelector("#sa-due").value,G=n.querySelector("#sa-max-score").value.trim(),f={score_column_id:i.value?parseInt(i.value,10):null,title:g,description:n.querySelector("#sa-desc").value.trim()||null,attachment_urls:[...r,...A],due_at:P?new Date(P).toISOString():null,late_penalty_mode:a.value,late_penalty_value:parseFloat(d.value)||0,score_write_mode:b.value,max_score:G===""?null:parseFloat(G)};s?(await Un(t.id,f),x("บันทึกการแก้ไขแล้ว ✅","success")):(await Wn({...f,class_id:m,teacher_id:p.id}),jt(`📚 งานใหม่ — ${v.class_name}`,g,"sc-assignment"),x("สั่งงานสำเร็จ ✅","success")),n.remove(),H()}catch(L){x("บันทึกไม่สำเร็จ: "+B(L),"error"),S.disabled=!1,S.textContent=s?"บันทึกการแก้ไข":"บันทึกงาน"}})}function Zt(e){var a,d,y;(a=document.getElementById("sc-track-modal"))==null||a.remove();const s=Object.fromEntries(e.submissions.map(i=>[i.student_id,i]));D.find(i=>i.id===e.score_column_id);const t=document.createElement("div");t.id="sc-track-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-fade">
        <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-bold text-gray-800 truncate">${u(e.title)}</p>
              <p class="text-xs text-gray-400 mt-0.5">${e.description?u(e.description)+" · ":""}กำหนดส่ง ${lt(e.due_at)}</p>
              ${(d=e.attachment_urls)!=null&&d.length?`<div class="flex flex-wrap gap-1.5 mt-2">${e.attachment_urls.map(i=>`<a href="${u(i.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${u(i.name)}</a>`).join("")}</div>`:""}
            </div>
            <div class="flex gap-2 flex-shrink-0">
              <button id="st-edit" class="text-[11px] text-indigo-500 hover:text-indigo-700 px-2 py-1">✏️ แก้ไข</button>
              <button id="st-delete" class="text-[11px] text-red-400 hover:text-red-600 px-2 py-1">🗑️ ลบ</button>
              <button id="st-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
            </div>
          </div>
          <div class="flex items-center justify-between mt-2 gap-2">
            <p class="text-[11px] text-gray-400 flex-shrink-0">${e.submissions.length}/${_.length} ส่งแล้ว</p>
            <label class="flex items-center gap-1.5 text-[11px] text-gray-500 cursor-pointer select-none">
              <input id="st-sort-toggle" type="checkbox" class="w-3.5 h-3.5 rounded accent-indigo-500" />
              เรียงตามสถานะ
            </label>
            <button id="st-review-start" class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 flex-shrink-0">🔎 ตรวจทีละคน</button>
          </div>
        </div>
        <div class="overflow-y-auto flex-1 p-5 space-y-2" id="st-row-list"></div>
      </div>`,document.body.appendChild(t);const r=i=>{var F;const c=`<div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[10px] flex-shrink-0">
        ${i.image_url?`<img src="${u(i.image_url)}" class="w-full h-full object-cover"/>`:u((i.full_name??"?").charAt(0))}
      </div>`,b=`<span class="text-gray-400 font-mono text-[10px] flex-shrink-0">#${V.get(i.id)??"—"}</span>`,$=s[i.id];if(!$)return`<div class="sc-track-row flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs cursor-pointer hover:border-indigo-200" data-sid="${i.id}">
        <div class="flex items-center gap-2 min-w-0">
          ${c}
          ${b}
          <span class="font-semibold text-gray-600 truncate">${u(i.full_name??"")}</span>
        </div>
        <span class="text-gray-300 font-medium flex-shrink-0">ยังไม่ส่ง</span>
      </div>`;const k=We(e,$.submitted_at),T=Ke($);return`<div class="sc-track-row px-3 py-2.5 rounded-xl border ${k?"border-amber-200 bg-amber-50":"border-gray-100 bg-gray-50"} text-xs cursor-pointer hover:border-indigo-200" data-sid="${i.id}">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${c}
            ${b}
            <span class="font-semibold text-gray-700 truncate">${u(i.full_name??"")}</span>
          </div>
          <span class="text-gray-400 flex-shrink-0">${new Date($.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</span>
        </div>
        <div class="flex items-center justify-between mt-1.5">
          ${(F=$.file_urls)!=null&&F.length?`<div class="flex flex-wrap gap-1.5">${$.file_urls.map(g=>`<span class="text-[10px] px-2 py-1 rounded-lg bg-white border border-gray-200 text-indigo-600">📎 ${u(g.name)}</span>`).join("")}</div>`:"<span></span>"}
          ${Kt(T)}
        </div>
        ${k?`<p class="text-[10px] text-amber-700 font-bold mt-1.5">⏰ ส่งช้า ${dt(e,$.submitted_at)} วัน</p>`:""}
      </div>`};let n=!1;const o=()=>{const i=n?[..._].sort((c,b)=>es[Ke(s[c.id])]-es[Ke(s[b.id])]):_;t.querySelector("#st-row-list").innerHTML=i.map(r).join(""),t.querySelectorAll(".sc-track-row").forEach(c=>c.addEventListener("click",()=>{ts(e,parseInt(c.dataset.sid,10))}))};t._refresh=o,o(),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#st-close").addEventListener("click",()=>t.remove()),t.querySelector("#st-edit").addEventListener("click",()=>{t.remove(),gt(e)}),t.querySelector("#st-delete").addEventListener("click",async()=>{if(confirm(`ลบงาน "${e.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await ys(e.id),x("ลบงานแล้ว","success"),t.remove(),H()}catch(i){x("ลบไม่สำเร็จ: "+B(i),"error")}}),t.querySelector("#st-sort-toggle").addEventListener("change",i=>{n=i.target.checked,o()});const l=()=>{var i;return(i=_.find(c=>s[c.id])??_[0])==null?void 0:i.id};(y=t.querySelector("#st-review-start"))==null||y.addEventListener("click",()=>{const i=l();i!=null&&ts(e,i)})}const Ke=e=>e?e.status==="rejected"?"rejected":e.hasScore?"graded":e.reviewed_at?"reviewed":"unreviewed":"unsubmitted",Kt=e=>({unreviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex-shrink-0">🔵 ยังไม่ตรวจ</span>',reviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">🟡 ตรวจแล้ว ยังไม่ให้คะแนน</span>',graded:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">✅ ให้คะแนนแล้ว</span>',rejected:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex-shrink-0">❌ ตีกลับ รอส่งใหม่</span>'})[e]??"",es={unreviewed:0,unsubmitted:1,reviewed:2,rejected:3,graded:4},ft={praise:["ทำได้ดีมากครับ/ค่ะ เห็นความตั้งใจชัดเจน ขอให้อัลลอฮ์ทรงประทานบารอกัตในความพยายามของเธอนะ 🌟","เก่งมากเลย ครูภูมิใจในตัวเธอ ขอดุอาอ์ให้พัฒนาต่อไปเรื่อยๆ อินชาอัลลอฮ์","ยอดเยี่ยม! งานชิ้นนี้แสดงถึงความพยายามที่ดีมาก ขอให้เป็นบารอกัตติดตัวเธอไปตลอด","สุดยอดค่ะ/ครับ ทำมาได้ดีมาก ครูขอดุอาอ์ให้เธอประสบความสำเร็จเสมอ"],improve:["ทำได้ดีในหลายจุดแล้วนะ ลองทบทวนอีกครั้งในส่วนที่ยังไม่สมบูรณ์ ครูเชื่อว่าเธอทำได้ดีกว่านี้ อินชาอัลลอฮ์","ครูเห็นความตั้งใจแล้ว ลองกลับไปทบทวนเพิ่มอีกนิดแล้วส่งใหม่ได้นะ ครูให้กำลังใจอยู่เสมอ","ยังไม่สมบูรณ์เท่าที่ควร แต่ไม่เป็นไรนะ ทุกความผิดพลาดคือบทเรียน ลองแก้ไขแล้วส่งมาใหม่ได้เลย","อยากให้ตรวจทานอีกรอบก่อนส่งครั้งหน้า ครูเชื่อมั่นในศักยภาพของเธอ ขอให้อัลลอฮ์ทรงช่วยให้เข้าใจง่ายขึ้นนะ"]},qn=e=>{var t;const s=((t=(e.name??"").split(".").pop())==null?void 0:t.toLowerCase())??"";return["jpg","jpeg","png","gif","webp"].includes(s)?"image":s==="pdf"?"pdf":"other"};function ts(e,s){var y;(y=document.getElementById("sc-grade-card"))==null||y.remove();const t=Object.fromEntries(e.submissions.map(i=>[i.student_id,i])),r=D.find(i=>i.id===e.score_column_id);let n=Math.max(0,_.findIndex(i=>i.id===s));const o=document.createElement("div");o.id="sc-grade-card",o.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/55 p-4",document.body.appendChild(o);const l=e.max_score!=null?parseFloat(e.max_score):r?parseFloat(r.max_score):null,a=()=>{var S,L,A,P,G,f,ee,ne,te,w;const i=_[n],c=t[i.id],b=c&&We(e,c.submitted_at),$=c?tn(e,c.submitted_at):0,k=c!=null&&c.hasScore?c.savedScore??"":l!=null?Math.max(0,(l||0)-$):"";c&&!c.reviewed_at&&(c.reviewed_at=new Date().toISOString(),Jn(e.id,i.id).catch(()=>{}));const T=c&&(S=c.file_urls)!=null&&S.length?c.file_urls.map(h=>{const E=qn(h);return E==="image"?`<a href="${u(h.url)}" target="_blank" rel="noopener" class="block rounded-xl overflow-hidden border border-gray-200 mb-2"><img src="${u(h.url)}" class="w-full max-h-72 object-contain bg-gray-50" loading="lazy" /></a>`:E==="pdf"?`<iframe src="${u(h.url)}" class="w-full h-72 rounded-xl border border-gray-200 mb-2"></iframe>`:`<a href="${u(h.url)}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-indigo-600 hover:bg-indigo-50 mb-2">📎 ${u(h.name)} <span class="text-gray-400">(เปิดแท็บใหม่ — ไม่รองรับพรีวิว)</span></a>`}).join(""):"";o.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <button id="sgc-prev" ${n<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-11 h-11 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0">
                ${i.image_url?`<img src="${u(i.image_url)}" class="w-full h-full object-cover"/>`:u((i.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate text-sm">${u(i.full_name??"—")}</p>
                <p class="text-[11px] text-gray-400">เลขที่ ${V.get(i.id)??"—"} · ${u(i.student_code??"")}</p>
              </div>
              <button id="sgc-next" ${n>=_.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sgc-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sgc-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sgc-jump" type="number" min="1" max="${_.length}" value="${V.get(i.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${_.length}</span>
              <span class="text-[11px] text-gray-300 ml-auto">${n+1} / ${_.length} คน</span>
            </div>
            ${c?`<div class="mt-2">${Kt(Ke(c))}</div>`:""}
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${c?`
              <p class="text-[11px] text-gray-400 mb-2">ส่งเมื่อ ${new Date(c.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</p>
              ${b?`<p class="text-[11px] text-amber-700 font-bold mb-2">⏰ ส่งช้า ${dt(e,c.submitted_at)} วัน${$>0?` — หักคะแนนแนะนำ ${$}`:""}</p>`:""}
              ${T}
              ${c.note?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3"><p class="text-[10px] font-bold text-gray-400 mb-0.5">ข้อความจากนักเรียน</p><p class="text-xs text-gray-600">${u(c.note)}</p></div>`:""}
              ${r?`<div class="mb-3">
                <div class="flex items-center gap-2">
                  <input id="sgc-grade" type="number" min="0" max="${l??""}" class="w-20 text-center border border-gray-200 rounded-lg px-1 py-1.5 font-mono font-bold text-indigo-600" value="${k}" placeholder="—" />
                  <span class="text-xs text-gray-400">/ ${l??r.max_score}</span>
                  <button id="sgc-grade-save" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg ml-auto">บันทึกคะแนน</button>
                </div>
                <p class="text-[10px] text-gray-400 mt-1">โหมดคะแนน: ${((L=ot[e.score_write_mode??"overwrite"])==null?void 0:L.label)??""} · บันทึกอัตโนมัติเมื่อออกจากช่องกรอก</p>
              </div>`:'<p class="text-[11px] text-gray-300 mb-3">งานนี้ไม่ได้ผูกกับคอลัมน์คะแนน</p>'}
              <div>
                <label for="sgc-feedback" class="text-[11px] font-bold text-gray-500 mb-1 block">คอมเมนต์ถึงนักเรียน</label>
                <div class="flex flex-wrap gap-1.5 mb-1.5">
                  <span class="text-[10px] text-gray-400 flex items-center">💚 ชื่นชม:</span>
                  ${ft.praise.map((h,E)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100" data-tmpl="praise-${E}">ตัวอย่าง ${E+1}</button>`).join("")}
                </div>
                <div class="flex flex-wrap gap-1.5 mb-2">
                  <span class="text-[10px] text-gray-400 flex items-center">💡 ปรับปรุง:</span>
                  ${ft.improve.map((h,E)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100" data-tmpl="improve-${E}">ตัวอย่าง ${E+1}</button>`).join("")}
                </div>
                <textarea id="sgc-feedback" rows="2" placeholder="เช่น ทำได้ดีมาก แต่ข้อ 3 ทบทวนอีกครั้ง — หรือกดตัวอย่างด้านบนแล้วแก้ไขต่อได้" class="w-full text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none">${u(c.teacher_feedback??"")}</textarea>
                <div class="flex items-center gap-2 mt-1.5">
                  <button id="sgc-feedback-save" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">บันทึกคอมเมนต์</button>
                  ${c.status==="rejected"?'<span class="text-[11px] text-red-500 font-semibold">❌ ตีกลับแล้ว รอนักเรียนส่งใหม่</span>':'<button id="sgc-reject" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 ml-auto">❌ ตีกลับให้แก้ไข</button>'}
                </div>
              </div>`:`
              <div class="text-center py-10 text-gray-300">
                <p class="text-3xl mb-2">📭</p>
                <p class="text-sm font-semibold text-gray-400">ยังไม่ส่งงานชิ้นนี้</p>
              </div>`}
          </div>
        </div>`,o.querySelector("#sgc-close").addEventListener("click",()=>d()),(A=o.querySelector("#sgc-prev"))==null||A.addEventListener("click",()=>{n>0&&(n--,a())}),(P=o.querySelector("#sgc-next"))==null||P.addEventListener("click",()=>{n<_.length-1&&(n++,a())});const F=()=>{const h=o.querySelector("#sgc-jump"),E=parseInt(h.value,10),C=wt.get(E);if(!C){x(`ไม่พบเลขที่ ${h.value}`,"warning"),h.value=V.get(i.id)??"";return}const j=_.findIndex(me=>me.id===C.id);j!==n&&(n=j,a())};(G=o.querySelector("#sgc-jump"))==null||G.addEventListener("change",F),(f=o.querySelector("#sgc-jump"))==null||f.addEventListener("keydown",h=>{h.key==="Enter"&&F()});const g=async()=>{const h=o.querySelector("#sgc-grade-save"),E=o.querySelector("#sgc-grade").value.trim(),C=E===""?0:parseFloat(E);if(!Number.isFinite(C)||C<0||l!=null&&C>l){x(`คะแนนต้องอยู่ระหว่าง 0 – ${l??r.max_score}`,"warning");return}h.disabled=!0;try{const j=await er(e.id,i.id,C);c.hasScore=!0,c.savedScore=C;const me=ce[i.id]??(ce[i.id]=[]);let je=me.find(et=>et.score_column_id===j.columnId);je||(je={student_id:i.id,score_column_id:j.columnId},me.push(je)),Object.assign(je,{score:j.score,original_score:j.originalScore,retake_score:j.retakeScore,final_score:j.finalScore,score_history:j.scoreHistory}),fr(j),document.getElementById("sc-roster")&&Ne(),x("บันทึกคะแนนแล้ว ✅","success"),a()}catch(j){x("บันทึกไม่สำเร็จ: "+B(j),"error"),h.disabled=!1}};(ee=o.querySelector("#sgc-grade-save"))==null||ee.addEventListener("click",g),(ne=o.querySelector("#sgc-grade"))==null||ne.addEventListener("change",g),o.querySelectorAll(".sgc-tmpl").forEach(h=>h.addEventListener("click",()=>{const[E,C]=h.dataset.tmpl.split("-"),j=o.querySelector("#sgc-feedback");j.value=ft[E][parseInt(C,10)],j.focus()})),(te=o.querySelector("#sgc-feedback-save"))==null||te.addEventListener("click",async()=>{const h=o.querySelector("#sgc-feedback-save"),E=o.querySelector("#sgc-feedback").value.trim();h.disabled=!0;try{await Zn(e.id,i.id,E),c.teacher_feedback=E,x("บันทึกคอมเมนต์แล้ว ✅","success")}catch(C){x("บันทึกไม่สำเร็จ: "+B(C),"error")}finally{h.disabled=!1}}),(w=o.querySelector("#sgc-reject"))==null||w.addEventListener("click",async()=>{const h=o.querySelector("#sgc-feedback").value.trim();if(!h){x("กรอกเหตุผลในช่องคอมเมนต์ก่อนตีกลับงาน","warning"),o.querySelector("#sgc-feedback").focus();return}if(!confirm(`ตีกลับงานของ "${i.full_name}" ให้แก้ไขใหม่?

เหตุผล: ${h}`))return;const E=o.querySelector("#sgc-reject");E.disabled=!0;try{await Kn(e.id,i.id,h),c.status="rejected",c.teacher_feedback=h,x("ตีกลับงานแล้ว — นักเรียนจะเห็นเหตุผลนี้และส่งใหม่ได้","success"),a()}catch(C){x("ตีกลับไม่สำเร็จ: "+B(C),"error"),E.disabled=!1}})},d=()=>{var i,c;o.remove(),(c=(i=document.getElementById("sc-track-modal"))==null?void 0:i._refresh)==null||c.call(i)};o.addEventListener("click",i=>{i.target===o&&d()}),a()}}export{Cr as canUseSmartClassroomForClass,Mr as findCurrentOrNextClass,ho as openSmartClassroomLanding,$e as renderSmartClassroom,Os as resolveSmartClassroomAccess};
