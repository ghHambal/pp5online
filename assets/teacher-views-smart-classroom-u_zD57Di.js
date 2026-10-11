const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-ZjGIdSHM.js","assets/ui-CdgrLWzs.js","assets/quiz-api-BIDUVPR5.js","assets/supabase-BV-W2lsh.js","assets/import-C5rURn5v.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-utils-D0Lb_BpE.js","assets/katex-loader-DUJObfzT.js","assets/chat-classroom-C3nyYAQB.js","assets/api-C-roKrdU.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/student-api-Pom1H7Xo.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js"])))=>i.map(i=>d[i]);
import{a as x,g as N,n as cn,_ as Jt}from"./ui-CdgrLWzs.js";import{getSystemConfig as gs,getMyClasses as Ne,getMySchedule as fs,getClassScheduleLinks as ys,getPeriods as vs,setSmartClassroomFreeClass as hs,getClassStudents as un,getActiveLeavePermissionsForClass as pn,getLeaveMaxActiveForClass as mn,getLeaveMaxPerStudentWeekForClass as bn,getScoreColumns as xn,getStudentScores as gn,getClassAttendanceAllFull as fn,getClassLeaveHistory as yn,getClassAssignmentsWithSubmissions as vn,getTeacherExamRequests as hn,getClassAnnouncements as wn,getAnnouncementTypeSuggestions as _n,getCourseSyllabus as kn,getLessonPlans as $n,getClassSessionDOWs as Sn,closeLeavePermission as Kt,createAnnouncement as En,deleteAssignment as es,updateAssignment as qn,createAssignment as Ln,getMyDonationRequests as jn,saveStudentScore as In,deleteSyllabusItem as ts,updateLessonPlan as ss,deleteLessonPlan as ns,markAssignmentSubmissionReviewed as Cn,saveAssignmentFeedback as Mn,rejectAssignmentSubmission as Tn,saveAssignmentGrade as An,updateSyllabusItem as Bn,createSyllabusItem as Nn,createLessonPlan as Pn}from"./api-C-roKrdU.js";import{_ as Xe,a as ws,b as Dn}from"./teacher-SS6XmaaI.js";import{l as zn,m as rs,s as Hn,n as Fn,o as On,f as Rn,k as Qn,c as Wn,p as Un}from"./quiz-api-BIDUVPR5.js";import{openScoreScanner as Gn}from"./score-qr-scanner-VIO-qDxr.js";import{_openAttendanceModalForSession as as,_openLeaveQuotaModal as Vn,openAttendanceScanSetup as Yn,_openLeaveRequestModal as Xn,renderAttendanceGrid as Zn}from"./teacher-views-attendance-Bf7yzdiF.js";import{p as Jn,a as Kn}from"./teacher-views-grades-CEAI6LzF.js";import{openQuizMonitor as os}from"./teacher-views-quiz-monitor-DzDF5yPE.js";import{openQuizAnalytics as er}from"./teacher-views-quiz-analytics-B6HbR0sJ.js";import{openClassDashboard as tr}from"./teacher-views-dashboard-CjblTm--.js";import{e as Be,o as sr,_ as nr,j as rr}from"./teacher-views-classes-DVprDxA6.js";import{uploadAssignmentFile as ls}from"./storage-CuUjCgvI.js";import{_htmlEsc as c,setActiveNav as is,setTitle as ds,setContent as Ye,_currentWeek as ar,_generateSessions as or,_dateInputValue as lr,ATT_STATUS as cs,openFullScreenGridOverlay as ir}from"./teacher-views-utils-D0Lb_BpE.js";import{s as dr}from"./supabase-BV-W2lsh.js";import{b as cr,e as us}from"./score-display-CQ4dUIPx.js";import{openLessonPlanAIWorkspace as ps,openLessonPlanDocument as ur}from"./lesson-plan-ai-workspace-BkpCRg6Q.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./promptpay-CIuxvxIA.js";import"./browser-JP79f-a9.js";import"./sync-GIjLHUjs.js";import"./theme-qDnPEUQn.js";import"./version.js_v_10.22-A-Q3FjCD.js";import"./anti-pull-refresh-BGrI1pMY.js";import"./push-notify-CDJXdrOK.js";import"./wen-sso-CcN06Rhh.js";import"./azizgames-modal-CZNvwg6f.js";import"./academic-term-switcher-JTnW63gE.js";import"./sports-portals.js_v_10.22-Bl6mvaSs.js";import"./sports-awards-admin-6oCPrlSb.js";import"./print-overlay-BVfxEd6n.js";import"./tutorial-D9xKLgCL.js";import"./terangganu-api-C1IjZK4l.js";import"./regrade-api-CbX4L_dw.js";import"./leave-time-CrS9gT63.js";import"./pp5-doc-DT_3IQge.js";import"./ai-prompt-gate-D6R7FVed.js";import"./confetti-loader-BAN5Lv-C.js";import"./council-api-DYf7ov7O.js";function pr(p){var m;return((m=String((p==null?void 0:p.donationSpecialFeatures)??"").split(`
`).map(L=>{const F=L.split("|");return{text:F[1]??"",minTier:parseInt(F[2])||1}}).find(L=>L.text.includes("Smart Classroom")))==null?void 0:m.minTier)??4}async function _s(p){const m=await gs().catch(()=>window._pp5SystemCfg??{}),L=pr(m);let F=window._pp5DonorTierIndex??0,Z=[];if(p!=null&&p.id)try{Z=await jn(p.id);const O=Z.filter(P=>P.package_type==="donation"&&P.status==="approved").reduce((P,Y)=>P+(Y.amount??0),0),w=Xe(m.donationMinAmount,49),_=Xe(m.donationAmountStep,50),V=ws(m,w,_),A=Math.max(0,...Z.filter(P=>P.package_type==="donation"&&P.status==="approved").map(P=>Number.parseInt(String(P.donation_tier??""),10)).filter(P=>Number.isInteger(P)&&P>=1&&P<=V.length));F=Math.max(Dn(m,V,O),A)}catch{}return{cfg:m,minTier:L,unlocked:F>=L,donationRequests:Z}}function mr(p,m){var F;return Xe(p.donationMinAmount,49),Xe(p.donationAmountStep,50),((F=ws(p)[m-1])==null?void 0:F.amount)??null}function br(p,m,L){return p?!0:(m==null?void 0:m.smart_classroom_free_class_id)===L}async function ks(p,m,{preselectClassId:L=null,onPicked:F}={}){var w;(w=document.getElementById("sc-pick-modal"))==null||w.remove();const Z=await Ne(p.id).catch(()=>[]),O=document.createElement("div");O.id="sc-pick-modal",O.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/60 p-4",O.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
      <div class="px-6 pt-6 pb-4 flex-shrink-0 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <div class="text-4xl mb-1">🎁</div>
        <h3 class="text-white font-extrabold text-base">ใช้ Smart Classroom ฟรี 1 ห้องเรียน</h3>
        <p class="text-white/80 text-[11px] mt-1 leading-relaxed">เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด<br>หากต้องการเปลี่ยนห้องภายหลังต้องติดต่อแอดมิน</p>
      </div>
      <div class="overflow-y-auto flex-1 p-4 space-y-2">
        ${Z.length?Z.map(_=>`
          <label class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition hover:border-amber-300 ${_.id===L?"border-amber-400 bg-amber-50":"border-gray-200"}">
            <input type="radio" name="sc-pick-class" value="${_.id}" class="w-4 h-4" ${_.id===L?"checked":""} />
            <span class="text-sm font-semibold text-gray-700">${c(_.class_name)}</span>
          </label>`).join(""):'<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>'}
      </div>
      <div class="p-4 flex-shrink-0 border-t border-gray-100">
        <button id="sc-pick-confirm" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)" ${Z.length?"":"disabled"}>✅ ยืนยันใช้ห้องนี้</button>
        <button id="sc-pick-cancel" class="w-full py-2 mt-1.5 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(O),O.addEventListener("click",_=>{_.target===O&&O.remove()}),O.querySelector("#sc-pick-cancel").addEventListener("click",()=>O.remove()),O.querySelector("#sc-pick-confirm").addEventListener("click",async()=>{const _=O.querySelector('input[name="sc-pick-class"]:checked');if(!_){x("กรุณาเลือกห้องเรียน","warning");return}const V=parseInt(_.value),A=O.querySelector("#sc-pick-confirm");A.disabled=!0,A.textContent="กำลังบันทึก...";try{if(!await hs(p.id,V)){x("มีการเลือกห้องไปแล้วก่อนหน้านี้ กรุณาลองใหม่","error"),O.remove();return}p.smart_classroom_free_class_id=V,O.remove(),x("เลือกห้องฟรีสำเร็จ ✅","success"),F==null||F(V)}catch(P){x("บันทึกไม่สำเร็จ: "+N(P),"error"),A.disabled=!1,A.textContent="✅ ยืนยันใช้ห้องนี้"}})}function ms(p){const m=Math.max(0,Math.floor((Date.now()-new Date(p).getTime())/6e4));return m<1?"<1 นาที":`${m} นาที`}const bs="pp5_sc_skip_popup";async function xr(p){var ge,R,ae,Ie;const m=window._pp5SystemCfg??await gs().catch(()=>({})),L=parseInt(m.academicYear??2568),F=parseInt(m.semester??1),[Z,O,w,_]=await Promise.all([Ne(p.id).catch(()=>[]),fs(p.id,L,F).catch(()=>[]),ys(p.id).catch(()=>[]),vs().catch(()=>[])]);if(!Z.length)return{classId:null,mode:"none"};const V=Object.fromEntries(_.map(D=>[D.period_no,D])),A=Object.fromEntries(O.map(D=>[D.id,D])),P=[];for(const D of w){const te=A[D.teacher_schedule_id];if(!te)continue;const fe=(te.period_no??1)+(te.span_periods??1)-1;P.push({classId:D.class_id,day_of_week:te.day_of_week,period:V[te.period_no],actualEndPeriod:V[fe]??V[te.period_no]})}const Y=new Date,xe=Y.getDay(),z=Y.getHours()*3600+Y.getMinutes()*60+Y.getSeconds();for(const D of P){if(D.day_of_week!==xe||!((ge=D.period)!=null&&ge.start_time)||!((R=D.actualEndPeriod)!=null&&R.end_time))continue;const[te,fe]=D.period.start_time.split(":").map(Number),[ye,J]=D.actualEndPeriod.end_time.split(":").map(Number),X=te*3600+fe*60,Pe=ye*3600+J*60;if(z>=X&&z<Pe)return{classId:D.classId,mode:"live"}}let le=null;for(const D of P){if(!((ae=D.period)!=null&&ae.start_time))continue;const[te,fe]=D.period.start_time.split(":").map(Number),ye=te*3600+fe*60;let J=(D.day_of_week-xe+7)%7;J===0&&ye<=z&&(J=7);const X=J*86400+ye-z;(le===null||X<le.totalSecUntil)&&(le={totalSecUntil:X,classId:D.classId})}return le?{classId:le.classId,mode:"upcoming"}:{classId:((Ie=Z[0])==null?void 0:Ie.id)??null,mode:"none"}}async function sa(p){var P,Y,xe,z,le,ge;const{cfg:m,minTier:L,unlocked:F}=await _s(p);if(F&&localStorage.getItem(bs)==="1"){xs(p);return}if(!F&&(p!=null&&p.smart_classroom_free_class_id)){we(p,p.smart_classroom_free_class_id);return}(P=document.getElementById("sc-landing-modal"))==null||P.remove();const Z=((Y=m.smartClassroomLandingTitle)==null?void 0:Y.trim())||"Smart Classroom — หน้าควบคุมขณะสอนสด",O=((xe=m.smartClassroomLandingDesc)==null?void 0:xe.trim())||"ทุกวินาทีระหว่างสอนสดมีค่า — ไม่ต้องเสียเวลาสลับหน้าจอไปมาระหว่างเช็คชื่อ คุมเวลา เปิดควิซ หรือสั่งงาน อีกต่อไป Smart Classroom รวมทุกเครื่องมือที่คุณใช้บ่อยที่สุดไว้จอเดียว ให้คุณโฟกัสกับการสอนได้เต็มที่ นักเรียนก็ได้รับข่าวสารถึงมือถือทันทีโดยไม่พลาด และแผนการสอน/บันทึกหลังสอนของคุณจะถูกเก็บเป็นระบบ พร้อมให้ตรวจสอบได้ทุกเมื่อโดยไม่ต้องมานั่งรวบรวมทีหลัง",w=[m.smartClassroomLandingImg1,m.smartClassroomLandingImg2,m.smartClassroomLandingImg3].filter(Boolean),_=[{emoji:"⏱️",text:"ไม่ต้องสลับหน้าจอนับสิบรอบระหว่างสอน ทุกเครื่องมือรวมไว้จอเดียว"},{emoji:"📲",text:"นักเรียนไม่พลาดประกาศ/งานอีกต่อไป แจ้งเตือนถึงมือถือทันทีที่กดส่ง"},{emoji:"📋",text:"แผนการสอน+บันทึกหลังสอนเป็นระบบ พร้อมตรวจสอบได้ทุกเมื่อ"}],V=["✅ เช็คชื่ออัตโนมัติ","🚪 Hall Pass สด","🎲 สุ่ม/จัดกลุ่ม","🧠 เปิดควิซสด","📚 สั่งงาน/ติดตามงาน","📘 กำหนดการสอน+แผนการสอน","🖊️ บันทึกหลังสอน+เซ็นชื่อ","📣 ประกาศแนบไฟล์+แจ้งเตือนมือถือ"],A=document.createElement("div");A.id="sc-landing-modal",A.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",A.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade">
      <div class="relative px-6 py-8 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <button id="sl-close" class="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none">✕</button>
        <div class="text-5xl mb-2">👑</div>
        <h2 class="text-white font-extrabold text-xl">${c(Z)}</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${_.map(R=>`
            <div class="px-3 py-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <div class="text-xl mb-1">${R.emoji}</div>
              <p class="text-[11px] font-bold text-amber-800 leading-snug">${c(R.text)}</p>
            </div>`).join("")}
        </div>
        <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">${c(O)}</p>
        ${w.length?`<div class="grid ${w.length>1?"grid-cols-2":"grid-cols-1"} gap-2">${w.map(R=>`<img src="${c(R)}" class="w-full rounded-xl border border-gray-100 object-cover" />`).join("")}</div>`:""}
        <div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">🎁 รวมฟีเจอร์เหล่านี้ไว้ให้แล้ว</p>
          <div class="grid grid-cols-2 gap-1.5 text-[11px] text-gray-500">
            ${V.map(R=>`<div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50">${R}</div>`).join("")}
          </div>
        </div>
        ${F?`
          <label class="flex items-center justify-center gap-2 text-xs text-gray-500 cursor-pointer select-none">
            <input type="checkbox" id="sl-skip" class="w-4 h-4 rounded" />
            ไม่ต้องโชว์ป๊อบอัพนี้ในครั้งหน้า — เปิดคลาสรูมที่กำลังสอนให้อัตโนมัติเลย
          </label>
          <button id="sl-start" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🚀 เริ่มใช้งาน</button>
        `:`
          <p class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 text-center">🎁 ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน หรือสนับสนุนระบบระดับ ${L} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้อง</p>
          <button id="sl-free" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 เลือกห้องที่จะใช้ฟรี</button>
          <button id="sl-donate" class="w-full py-2.5 rounded-2xl text-amber-700 font-semibold text-xs hover:bg-amber-50 transition border border-amber-200">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        `}
      </div>
    </div>`,document.body.appendChild(A),A.addEventListener("click",R=>{R.target===A&&A.remove()}),A.querySelector("#sl-close").addEventListener("click",()=>A.remove()),(z=A.querySelector("#sl-start"))==null||z.addEventListener("click",()=>{var R;(R=A.querySelector("#sl-skip"))!=null&&R.checked&&localStorage.setItem(bs,"1"),A.remove(),xs(p)}),(le=A.querySelector("#sl-free"))==null||le.addEventListener("click",()=>{A.remove(),ks(p,m,{onPicked:R=>we(p,R)})}),(ge=A.querySelector("#sl-donate"))==null||ge.addEventListener("click",()=>{var R;A.remove(),(R=document.getElementById("btn-donate-float"))==null||R.click()})}async function xs(p){x("กำลังตรวจสอบตารางสอน...","info");const{classId:m}=await xr(p);if(!m){x("ยังไม่มีห้องเรียน กรุณาสร้างห้องเรียนก่อนครับ","warning");return}we(p,m)}async function we(p,m){var Nt,Pt,Dt,zt,Ht,Ft,Ot,Rt,Qt,Wt,Ut,Gt,Vt,Yt,Xt;is("my-classes"),ds("Smart Classroom"),Ye(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const{cfg:L,minTier:F,unlocked:Z,donationRequests:O}=await _s(p);if(!br(Z,p,m)){const e=p==null?void 0:p.smart_classroom_free_class_id;if(!e){Ye(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
        <div class="text-6xl mb-4">🎁</div>
        <p class="font-bold text-gray-800 text-lg">ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน</p>
        <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณยังไม่ได้สนับสนุนระบบระดับ ${F} ขึ้นไป แต่ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียนครับ<br>เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด (เปลี่ยนภายหลังต้องติดต่อแอดมิน)</p>
        <button id="sc-free-confirm" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 ใช้ห้องนี้ฟรี</button>
        <div class="mt-2">
          <button id="sc-free-other" class="text-xs text-gray-400 hover:text-gray-600 underline">เลือกห้องอื่นแทน</button>
        </div>
        <div class="mt-4">
          <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
        </div>
      </div>`),(Nt=document.getElementById("sc-free-confirm"))==null||Nt.addEventListener("click",async r=>{const a=r.currentTarget;a.disabled=!0,a.textContent="กำลังบันทึก...";try{if(!await hs(p.id,m)){x("มีการเลือกห้องไปแล้วก่อนหน้านี้","error"),we(p,m);return}p.smart_classroom_free_class_id=m,x("เลือกห้องฟรีสำเร็จ ✅","success"),we(p,m)}catch(i){x("บันทึกไม่สำเร็จ: "+N(i),"error"),a.disabled=!1,a.textContent="🎁 ใช้ห้องนี้ฟรี"}}),(Pt=document.getElementById("sc-free-other"))==null||Pt.addEventListener("click",()=>{ks(p,L,{preselectClassId:m,onPicked:r=>we(p,r)})}),(Dt=document.getElementById("sc-back"))==null||Dt.addEventListener("click",()=>Be(p,m));return}const t=((zt=(await Ne(p.id).catch(()=>[])).find(r=>r.id===e))==null?void 0:zt.class_name)??`ห้อง #${e}`,n=mr(L,F);Ye(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
      <div class="text-6xl mb-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">Smart Classroom</p>
      <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณใช้สิทธิ์ฟรีกับห้อง <b>${c(t)}</b> ไปแล้ว<br>หากต้องการใช้ห้องนี้ด้วย กรุณาสนับสนุนระบบระดับ ${F}${n?` (${n} บาท)`:""} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้องครับ</p>
      <button id="sc-upgrade" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#a9781a,#e6c988)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      <div class="mt-3">
        <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
      </div>
    </div>`),(Ht=document.getElementById("sc-upgrade"))==null||Ht.addEventListener("click",()=>{var r;return(r=document.getElementById("btn-donate-float"))==null?void 0:r.click()}),(Ft=document.getElementById("sc-back"))==null||Ft.addEventListener("click",()=>Be(p,m));return}let w,_,V,A,P,Y,xe,z,le,ge,R,ae,Ie,D,te,fe,ye,J,X,Pe,se=null;try{const e=parseInt(L.academicYear??2568),s=parseInt(L.semester??1);xe=O;let t;if([t,_,V,A,P,Y,z,le,ge,R,ae,Ie,D,te,fe,ye,Pe]=await Promise.all([Ne(p.id),un(m).catch(()=>[]),pn(m).catch(()=>[]),mn(m).catch(()=>3),bn(m).catch(()=>2),zn(m).catch(()=>[]),xn(m).catch(()=>[]),gn(m).catch(()=>[]),fn(m).catch(()=>[]),yn(m).catch(()=>[]),vn(m).catch(()=>[]),hn(p.id).catch(()=>[]),fs(p.id,e,s).catch(()=>[]),ys(p.id).catch(()=>[]),vs().catch(()=>[]),wn(m).catch(()=>[]),_n().catch(()=>[])]),w=t.find(n=>n.id===m),!w){Be(p,m);return}se=w.course_id??((Ot=w.master_subjects)==null?void 0:Ot.id)??null,[J,X]=await Promise.all([se?kn(se).catch(()=>[]):Promise.resolve([]),se?$n(se).catch(()=>[]):Promise.resolve([])])}catch(e){x("โหลดข้อมูลไม่สำเร็จ: "+N(e),"error"),Be(p,m);return}const it=xe.some(e=>e.package_type==="donation"&&e.status==="approved"),Ze=w.master_subjects??{};let Ee=Object.fromEntries(V.map(e=>[e.student_id,e]));const dt=Object.fromEntries(_.map(e=>[e.id,e])),oe=Y.find(e=>e.status==="started")??null;let De={};if(oe){const e=await rs(oe.id).catch(()=>[]);De=Object.fromEntries(e.map(s=>[s.student_id,s]))}const $s={in_progress:{icon:"📝",cls:"bg-emerald-500"},submitted:{icon:"✅",cls:"bg-blue-500"},terminated_violation:{icon:"🔒",cls:"bg-red-500"}},Je=[{emoji:"📢",label:"ทั่วไป"},{emoji:"📚",label:"การบ้าน"},{emoji:"📄",label:"เอกสารประกอบ"},{emoji:"⏰",label:"กำหนดส่งงาน"},{emoji:"📝",label:"แบบทดสอบ"},{emoji:"📊",label:"คะแนน"},{emoji:"🎓",label:"กิจกรรม/ฝึกอบรม"},{emoji:"⚠️",label:"ด่วน/สำคัญ"}],Ke={overwrite:{label:"ทับคะแนนเก่า (ค่าเริ่มต้น)",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/งานอื่น) จะเก็บค่าที่สูงกว่าไว้"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนงานนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายงาน"}},ie={};for(const e of le)(ie[Rt=e.student_id]??(ie[Rt]=[])).push(e);const Ce={};for(const e of ge)(Ce[Qt=e.student_id]??(Ce[Qt]=[])).push(e);const ze={};for(const e of R)(ze[Wt=e.student_id]??(ze[Wt]=[])).push(e);const ne=new Map(_.map((e,s)=>[e.id,s+1])),ct=new Map(_.map((e,s)=>[s+1,e])),ut=e=>{if(!z.length)return null;const s=ie[e.id]??[],t=z.reduce((r,a)=>r+(parseFloat(a.max_score)||0),0);return t<=0?null:z.reduce((r,a)=>{const i=s.find(l=>l.score_column_id===a.id);return r+(parseFloat(i==null?void 0:i.score)||0)},0)/t*100},pt=e=>{const s=Ce[e.id]??[];return s.length?s.filter(t=>t.status==="present").length/s.length*100:null},mt=(e,s)=>{const t=(ie[e.id]??[]).find(n=>n.score_column_id===s);return(t==null?void 0:t.score)!=null?parseFloat(t.score):null},He=(e,s)=>{var r;const t=ae.find(a=>a.id===e),n=(r=t==null?void 0:t.submissions)==null?void 0:r.find(a=>a.student_id===s);return n?n.reviewed_at||n.hasScore?{key:"checked",rank:2,icon:"✓",label:"ตรวจแล้ว",cls:"bg-emerald-100 text-emerald-700 border-emerald-200"}:{key:"waiting",rank:0,icon:"●",label:"ส่งแล้ว รอตรวจ",cls:"bg-amber-100 text-amber-700 border-amber-200"}:{key:"missing",rank:1,icon:"○",label:"ยังไม่ส่ง",cls:"bg-gray-100 text-gray-500 border-gray-200"}};let G={key:"seatno"};const Ss=e=>{if(G.key==="total"){const s=ut(e);return s==null?null:`${s.toFixed(0)}%`}if(G.key==="att"){const s=pt(e);return s==null?null:`${s.toFixed(0)}%`}if(G.key.startsWith("col:")){const s=parseInt(G.key.slice(4),10),t=mt(e,s),n=z.find(r=>r.id===s);return t==null?null:`${t}${n?"/"+n.max_score:""}`}if(G.key.startsWith("assignment:")){const s=parseInt(G.key.slice(11),10),t=He(s,e.id);return`${t.icon} ${t.label}`}return null},Es=()=>{if(G.key==="seatno")return _;if(G.key==="name")return[..._].sort((s,t)=>(s.full_name??"").localeCompare(t.full_name??"","th"));if(G.key.startsWith("assignment:")){const s=parseInt(G.key.slice(11),10);return[..._].sort((t,n)=>He(s,t.id).rank-He(s,n.id).rank||ne.get(t.id)-ne.get(n.id))}const e=G.key==="total"?ut:G.key==="att"?pt:s=>mt(s,parseInt(G.key.slice(4),10));return[..._].sort((s,t)=>{const n=e(s),r=e(t);return n==null&&r==null?ne.get(s.id)-ne.get(t.id):n==null?1:r==null?-1:r-n})},bt=Ie.filter(e=>{var s;return((s=e.classes)==null?void 0:s.id)===m&&e.status!=="rejected"&&(e.status!=="approved"||e.exam_attended==null)}).sort((e,s)=>(e.requested_date??"").localeCompare(s.requested_date??"")),qs=new Set(te.filter(e=>e.class_id===m).map(e=>e.teacher_schedule_id)),et=Object.fromEntries(fe.map(e=>[e.period_no,e])),Me=D.filter(e=>qs.has(e.id)).map(e=>({...e,period:et[e.period_no],actualEndPeriod:et[(e.period_no??1)+(e.span_periods??1)-1]??et[e.period_no]})).sort((e,s)=>e.day_of_week-s.day_of_week||e.period_no-s.period_no);function Ls(){var r,a,i;const e=new Date,s=e.getDay(),t=e.getHours()*3600+e.getMinutes()*60+e.getSeconds();for(const l of Me){if(l.day_of_week!==s||!((r=l.period)!=null&&r.start_time)||!((a=l.actualEndPeriod)!=null&&a.end_time))continue;const[u,h]=l.period.start_time.split(":").map(Number),[o,d]=l.actualEndPeriod.end_time.split(":").map(Number),b=u*3600+h*60,$=o*3600+d*60;if(t>=b&&t<$)return{mode:"live",remainingSec:$-t,slot:l}}let n=null;for(const l of Me){if(!((i=l.period)!=null&&i.start_time))continue;const[u,h]=l.period.start_time.split(":").map(Number),o=u*3600+h*60;let d=(l.day_of_week-s+7)%7;d===0&&o<=t&&(d=7);const b=d*86400+o-t;(n===null||b<n.totalSecUntil)&&(n={totalSecUntil:b,slot:l})}return n?{mode:"upcoming",remainingSec:n.totalSecUntil,slot:n.slot}:{mode:"none"}}const Q=()=>we(p,m),xt=async(e,s,t)=>{const n=_.map(r=>r.profile_id).filter(Boolean);if(n.length)try{await dr.functions.invoke("send-push",{body:{title:e,body:s,url:"student.html",tag:t,profileIds:n}})}catch{}},Fe=()=>Es().map(e=>{const s=Ee[e.id],t=De[e.id],n=oe?$s[t==null?void 0:t.status]??{icon:"⚪",cls:"bg-gray-300"}:null,r=Ss(e),a=G.key.startsWith("assignment:")?He(parseInt(G.key.slice(11),10),e.id):null;return`<button type="button" data-sid="${e.id}"
        class="sc-stu relative border rounded-xl px-2 py-2.5 text-center hover:border-indigo-300 hover:-translate-y-0.5 transition ${s?"border-amber-300 bg-amber-50":"border-gray-100 bg-gray-50"}">
      <span class="absolute top-1 left-1 text-[9px] font-bold text-gray-500 bg-white/80 border border-gray-200 rounded-full w-4 h-4 flex items-center justify-center" title="เลขที่ ${ne.get(e.id)??"—"}">${ne.get(e.id)??"—"}</span>
      ${s?'<span class="absolute top-1 right-1 text-[9px] font-bold bg-amber-500 text-white px-1 py-0.5 rounded">🚪</span>':""}
      <div class="relative w-9 h-9 mx-auto mb-1.5 mt-2 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
        ${e.image_url?`<img src="${c(e.image_url)}" class="w-full h-full object-cover"/>`:c((e.full_name??"?").charAt(0))}
        ${n?`<span class="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold ${n.cls} text-white w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-white" title="สถานะสอบ: ${(t==null?void 0:t.status)??"ยังไม่เข้าสอบ"}">${n.icon}</span>`:""}
      </div>
      <div class="text-[9px] text-gray-400 font-mono">${c(e.student_code??"")}</div>
      <div class="text-[11px] font-semibold text-gray-700 leading-tight truncate">${c(e.full_name??"")}</div>
      ${a?`<div class="mt-1 px-1.5 py-0.5 rounded-lg border text-[9px] font-bold truncate ${a.cls}">${a.icon} ${a.label}</div>`:r?`<div class="text-[10px] font-bold text-amber-600 mt-0.5">${c(r)}</div>`:""}
    </button>`}).join(""),js=()=>V.length?V.map(e=>{const s=dt[e.student_id];return`<div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-amber-100 bg-amber-50 mb-2">
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs flex-shrink-0">
          ${s!=null&&s.image_url?`<img src="${c(s.image_url)}" class="w-full h-full object-cover"/>`:c(((s==null?void 0:s.full_name)??"?").charAt(0))}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-800 truncate">${c((s==null?void 0:s.full_name)??"—")}</p>
          <p class="text-[10px] text-gray-500 truncate">${c(e.reason??"")}</p>
        </div>
        <span class="text-xs font-bold text-amber-700 font-mono flex-shrink-0">${ms(e.created_at)}</span>
        <button class="sc-return-btn text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 flex-shrink-0" data-lid="${e.id}">กลับแล้ว</button>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีนักเรียนออกนอกห้องตอนนี้</p>',Is=()=>Y.length?`<div class="max-h-72 overflow-y-auto space-y-1.5 pr-0.5">${Y.map(e=>`
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
      </div>`).join("")}</div>`:'<p class="text-xs text-gray-400">ห้องนี้ยังไม่มีควิซที่สร้างไว้</p>';function Cs(){var a;(a=document.getElementById("sc-quiz-quick"))==null||a.remove();const e=document.createElement("div");e.id="sc-quiz-quick",e.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",document.body.appendChild(e);const s=()=>{e.innerHTML=`
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
        </div>`,e.querySelector("#sqq-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#sqq-pick").addEventListener("click",t),e.querySelector("#sqq-new").addEventListener("click",r)},t=async()=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลดคลังข้อสอบ...</div>';const i=await Rn(p.id).catch(()=>[]);if(!i.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">ยังไม่มีคลังข้อสอบเลย ลองสร้างใหม่ดูก่อนได้ครับ</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",s);return}e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">📚 เลือกคลังข้อสอบ</h3>
          <p class="text-xs text-gray-400 mb-4">${c(w.class_name??"")}</p>
          <div class="space-y-1.5 max-h-72 overflow-y-auto">
            ${i.map(l=>`
              <button class="sqq-bank-pick w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50/50 transition" data-id="${l.id}">
                <span class="text-sm font-semibold text-gray-700">${c(l.name)}</span>
                ${l.description?`<p class="text-[11px] text-gray-400 truncate">${c(l.description)}</p>`:""}
              </button>`).join("")}
          </div>
          <button id="sqq-back" class="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600">← กลับ</button>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelectorAll(".sqq-bank-pick").forEach(l=>l.addEventListener("click",()=>n(i.find(u=>u.id===l.dataset.id))))},n=async i=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลด...</div>';const l=await Wn(i.id).catch(()=>[]);if(!l.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">คลัง "${c(i.name)}" ยังไม่มีคำถามเลย เพิ่มคำถามก่อนถึงจะเปิดสอบได้</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",t);return}const u=new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short"});e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🚀 เปิดสอบ: ${c(i.name)}</h3>
          <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${l.length} ข้อ · ${c(w.class_name??"")}</p>
          <div class="space-y-3">
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อการสอบครั้งนี้</label>
              <input id="sqq-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${c(i.name)} (${u})" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนข้อที่สุ่ม</label>
                <input id="sqq-num" type="number" min="1" max="${l.length}" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${Math.min(10,l.length)}" />
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
        </div>`,e.querySelector("#sqq-back").addEventListener("click",t),e.querySelector("#sqq-launch").addEventListener("click",async h=>{const o=e.querySelector("#sqq-title").value.trim(),d=parseInt(e.querySelector("#sqq-num").value,10);if(!o){x("กรุณาระบุชื่อการสอบ","warning");return}if(!d||d<1||d>l.length){x(`จำนวนข้อต้องอยู่ระหว่าง 1 – ${l.length}`,"warning");return}const b=h.target;b.disabled=!0,b.textContent="กำลังเปิด...";try{await Un({bank_id:i.id,class_id:m,title:o,num_questions:d,time_limit_minutes:parseInt(e.querySelector("#sqq-time").value,10)||null,status:"announced"}),x('สร้างควิซให้ห้องนี้แล้ว 🧠 กด "▶ เริ่ม" ในรายการเพื่อเปิดสอบสดได้เลย',"success"),e.remove(),Q()}catch($){x("เปิดควิซไม่สำเร็จ: "+N($),"error"),b.disabled=!1,b.textContent="เปิดให้ห้องนี้"}})},r=()=>{e.innerHTML=`
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
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelector("#sqq-c-save").addEventListener("click",async i=>{const l=e.querySelector("#sqq-c-title").value.trim();if(!l){x("กรุณาระบุชื่อคลังข้อสอบ","warning");return}const u=i.target;u.disabled=!0,u.textContent="กำลังสร้าง...";try{const h=await Qn({teacher_id:p.id,subject_id:se,name:l}),{_renderBankQuestions:o}=await Jt(async()=>{const{_renderBankQuestions:d}=await import("./teacher-views-quiz-banks-ZjGIdSHM.js");return{_renderBankQuestions:d}},__vite__mapDeps([0,1,2,3,4,5,6,7]));e.remove(),x("สร้างคลังแล้ว — เพิ่มคำถามให้ครบก่อนไปสร้างแบบทดสอบนะครับ","success"),o(p,h,m)}catch(h){x("สร้างไม่สำเร็จ: "+N(h),"error"),u.disabled=!1,u.textContent="สร้างคลัง → เพิ่มคำถาม"}})};e.addEventListener("click",i=>{i.target===e&&e.remove()}),s()}const Ms=()=>ye.length?`<div class="space-y-1.5 mb-3 max-h-40 overflow-y-auto">${ye.slice(0,10).map(e=>{var t;const s=[...Array.isArray(e.attachment_urls)?e.attachment_urls:[],...e.file_url?[{url:e.file_url,name:"ไฟล์แนบ"}]:[]];return`
      <div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center gap-1.5 flex-wrap">
          ${e.ann_type&&e.ann_type!=="general"?`<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">${c(e.ann_type)}</span>`:""}
          <p class="font-semibold text-gray-700 truncate flex-1 min-w-0">${c(e.title)}</p>
        </div>
        ${e.body?`<p class="text-gray-400 truncate">${c(e.body.slice(0,80))}</p>`:""}
        ${s.length?`<div class="flex flex-wrap gap-1 mt-1">${s.map(n=>`<a href="${c(n.url)}" target="_blank" rel="noopener" class="text-[10px] px-1.5 py-0.5 rounded-lg bg-white border border-gray-200 text-indigo-600 hover:bg-indigo-50">📎 ${c(n.name??"ไฟล์")}</a>`).join("")}</div>`:""}
        <p class="text-[10px] text-gray-300 mt-0.5">${new Date(e.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}${(t=e.teachers)!=null&&t.full_name?" · "+c(e.teachers.full_name):""}</p>
      </div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 mb-2">ยังไม่มีประกาศสำหรับห้องนี้</p>',Ts=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],gt=e=>{if(!Me.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้ผูกตารางสอนให้ห้องนี้</p>';if(e==="daily"){const t=new Date().getDay(),n=Me.filter(r=>r.day_of_week===t);return n.length?n.map(r=>{var a,i,l,u;return`
        <div class="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
          <span class="font-semibold text-gray-700">คาบที่ ${r.period_no}${r.span_periods>1?`-${r.period_no+r.span_periods-1}`:""}</span>
          <span class="text-gray-500 font-mono">${((i=(a=r.period)==null?void 0:a.start_time)==null?void 0:i.slice(0,5))??"—"} - ${((u=(l=r.actualEndPeriod)==null?void 0:l.end_time)==null?void 0:u.slice(0,5))??"—"}</span>
        </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">วันนี้ไม่มีคาบของห้องนี้</p>'}const s={};return Me.forEach(t=>{var n;(s[n=t.day_of_week]??(s[n]=[])).push(t)}),Object.keys(s).sort((t,n)=>t-n).map(t=>`
      <div class="mb-2.5">
        <p class="text-[11px] font-bold text-gray-500 mb-1">${Ts[t]}</p>
        <div class="flex flex-wrap gap-1.5">
          ${s[t].map(n=>{var r,a;return`<span class="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-semibold font-mono">คาบ ${n.period_no}${n.span_periods>1?`-${n.period_no+n.span_periods-1}`:""} · ${((a=(r=n.period)==null?void 0:r.start_time)==null?void 0:a.slice(0,5))??"—"}</span>`}).join("")}
        </div>
      </div>`).join("")},ft=()=>bt.length?bt.map((e,s)=>{var t;return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">${s+1}</span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-700 truncate">${c(((t=e.students)==null?void 0:t.full_name)??"—")} — ${c(e.request_type??"")}</p>
          <p class="text-gray-400">${e.requested_date?new Date(e.requested_date).toLocaleDateString("th-TH",{day:"numeric",month:"short"}):"ไม่ระบุวันที่"}${e.requested_period_no?` · คาบ ${e.requested_period_no}`:""}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${e.status==="pending"?"bg-amber-50 text-amber-700":"bg-emerald-50 text-emerald-700"} flex-shrink-0">${e.status==="pending"?"รออนุมัติ":"อนุมัติแล้ว รอสอบ"}</span>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีคำร้องรอดำเนินการ</p>',tt=e=>e?new Date(e).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",st=e=>new Set((e.submissions??[]).map(s=>s.student_id)).size,yt=e=>{const s=Math.max(0,_.length-st(e));if(!e.due_at||s===0)return{key:"normal",missingCount:s,urgent:!1,label:tt(e.due_at)};const t=new Date(e.due_at).getTime()-Date.now(),n=Math.max(1,Math.ceil(Math.abs(t)/36e5));if(t<0){const r=n<24?`เกินกำหนด ${n} ชม.`:`เกินกำหนด ${Math.ceil(n/24)} วัน`;return{key:"overdue",missingCount:s,urgent:!0,label:r,diffMs:t}}return t<=864e5?{key:"today",missingCount:s,urgent:!0,label:`เหลือ ${n} ชม.`,diffMs:t}:t<=2592e5?{key:"soon",missingCount:s,urgent:!0,label:`เหลือ ${Math.ceil(n/24)} วัน`,diffMs:t}:{key:"normal",missingCount:s,urgent:!1,label:tt(e.due_at),diffMs:t}},me=ae.map(e=>({assignment:e,state:yt(e)})).filter(e=>e.state.urgent).sort((e,s)=>{const t=e.state.key==="overdue",n=s.state.key==="overdue";if(t!==n)return t?-1:1;const r=new Date(e.assignment.due_at).getTime(),a=new Date(s.assignment.due_at).getTime();return t?a-r:r-a}),vt=(e="mobile")=>{if(!me.length)return"";const{assignment:s,state:t}=me[0],n=st(s);return`<div class="rounded-2xl border ${t.key==="overdue"?"border-red-200 bg-red-50 text-red-800":t.key==="today"?"border-orange-200 bg-orange-50 text-orange-800":"border-amber-200 bg-amber-50 text-amber-800"} shadow-sm p-4 ${e==="mobile"?"mb-4 lg:hidden":"mb-4 hidden lg:block"}">
      <div class="flex items-center justify-between gap-2">
        <p class="text-xs font-extrabold">⏰ ${t.key==="overdue"?"งานเกินกำหนด":"งานใกล้ครบกำหนด"}</p>
        <span class="text-xs font-extrabold flex-shrink-0">${t.label}</span>
      </div>
      <p class="text-sm font-bold mt-2 truncate">${c(s.title)}</p>
      <p class="text-[11px] mt-1 opacity-80">${n}/${_.length} ส่งแล้ว · <b>${t.missingCount} คนยังไม่ส่ง</b></p>
      ${me.length>1?`<p class="text-[10px] mt-1 opacity-70">และมีงานเร่งด่วนอีก ${me.length-1} งาน</p>`:""}
      <div class="grid grid-cols-[1fr_auto] gap-2 mt-3">
        <button type="button" data-sc-urgent-aid="${s.id}" class="sc-btn-dark min-h-[42px] rounded-xl px-3 text-xs font-bold">ดูและติดตามงาน</button>
        <button type="button" class="sc-quick-add-assignment min-h-[42px] rounded-xl border border-current/20 bg-white/70 px-3 text-xs font-bold">＋ สั่งงาน</button>
      </div>
    </div>`},Oe=(e,s)=>e.due_at?new Date(s).getTime()>new Date(e.due_at).getTime():!1,nt=(e,s)=>e.due_at?Math.max(1,Math.ceil((new Date(s).getTime()-new Date(e.due_at).getTime())/864e5)):0,As=(e,s)=>Oe(e,s)?e.late_penalty_mode==="flat"?parseFloat(e.late_penalty_value)||0:e.late_penalty_mode==="per_day"?(parseFloat(e.late_penalty_value)||0)*nt(e,s):0:0,Bs=()=>ae.length?ae.map(e=>{const s=st(e),t=_.length,n=t>0?Math.round(s/t*100):0,r=e.submissions.filter(u=>Oe(e,u.submitted_at)).length,a=yt(e),i=a.key==="overdue"?"border-red-200 bg-red-50":a.key==="today"?"border-orange-200 bg-orange-50":a.key==="soon"?"border-amber-200 bg-amber-50":"border-gray-100",l=a.urgent?a.key==="overdue"?"text-red-700":"text-amber-700":"text-gray-400";return`<button class="sc-assignment-row w-full text-left px-3 py-3 rounded-xl border ${i} hover:border-indigo-300 hover:bg-indigo-50 transition mb-2" data-aid="${e.id}">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-bold text-gray-700 truncate">${c(e.title)}</p>
          <span class="text-[11px] ${l} font-bold flex-shrink-0">${a.label}</span>
        </div>
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${n}%"></div></div>
          <span class="text-[11px] font-bold text-gray-600 flex-shrink-0">${s}/${t} ส่งแล้ว</span>
          ${a.missingCount?`<span class="text-[10px] font-bold ${a.urgent?l:"text-gray-400"} flex-shrink-0">${a.missingCount} ยังไม่ส่ง</span>`:""}
          ${r?`<span class="text-[10px] font-bold text-amber-600 flex-shrink-0">ช้า ${r}</span>`:""}
        </div>
      </button>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีงานที่มอบหมาย — กด "➕ สั่งงานใหม่" เพื่อเริ่ม</p>',de=ar(L.semester_start),rt=e=>{var s;return((s=e==null?void 0:e.source_json)==null?void 0:s.week_type)??"teaching"},ve=J.find(e=>de>=e.week_start&&de<=e.week_end&&rt(e)!=="break"),Ns={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"},Ps=()=>J.length?`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${J.map(e=>`
      <div class="flex items-center gap-2">
        <button class="sc-syllabus-row min-w-0 flex-1 text-left flex items-center gap-2 px-3 py-2 rounded-xl border transition ${de>=e.week_start&&de<=e.week_end?"border-indigo-300 bg-indigo-50":"border-gray-100 bg-gray-50 hover:border-indigo-200"}" data-sylid="${e.id}">
          <span class="text-[10px] font-bold text-gray-500 flex-shrink-0 w-16">สัปดาห์ ${e.week_start}${e.week_end!==e.week_start?`-${e.week_end}`:""}</span>
          <span class="text-xs font-semibold text-gray-700 truncate flex-1">${c(e.topic)}</span>
          ${rt(e)!=="teaching"?`<span class="text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">${c(Ns[rt(e)]??"กำหนดพิเศษ")}</span>`:""}
        </button>
        <button type="button" class="sc-syllabus-delete shrink-0 rounded-lg border border-red-200 bg-white px-2.5 py-2 text-[10px] font-bold text-red-600" data-sylid="${e.id}" aria-label="ลบกำหนดการสัปดาห์ ${e.week_start}">ลบ</button>
      </div>`).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้กำหนดหัวข้อการสอน — กด "➕ เพิ่มหัวข้อ" เพื่อเริ่มวางกำหนดการสอน</p>',at=()=>[...X].sort((e,s)=>{var a,i,l,u;const t=Number(e.week_start||0)-Number(s.week_start||0);if(t)return t;const n=String(e.lesson_date||((a=e.source_json)==null?void 0:a.lesson_date)||""),r=String(s.lesson_date||((i=s.source_json)==null?void 0:i.lesson_date)||"");return n&&r&&n!==r?n.localeCompare(r):Number(((l=e.source_json)==null?void 0:l.session_in_week)||0)-Number(((u=s.source_json)==null?void 0:u.session_in_week)||0)||Number(e.session_number||0)-Number(s.session_number||0)||Number(e.week_end||0)-Number(s.week_end||0)||String(e.title??"").localeCompare(String(s.title??""),"th")}),ht=e=>{const s=at().findIndex(t=>String(t.id)===String(e==null?void 0:e.id));return s>=0?s+1:Number(e==null?void 0:e.session_number)||1},Re=e=>{const s=ht(e),t=String((e==null?void 0:e.title)??"").replace(/(ครั้งที่\s*)\d+/g,`$1${s}`);return{...e,title:t,session_number:s}},Qe=e=>{var i,l,u;const s=Number(e.duration_minutes)||Number((i=e.source_json)==null?void 0:i.duration_minutes)||45,t=Number((l=e.source_json)==null?void 0:l.period_count),n=Number.isInteger(t)&&t>0?t:s===100?2:s%45===0?s/45:1,r=Number((u=e.source_json)==null?void 0:u.minutes_per_period),a=Number.isInteger(r)&&r>0?r:s===100?50:s%45===0?45:Math.round(s/n);return{periodCount:n,minutesPerPeriod:a,durationMinutes:n*a}},Ds=()=>{if(!X.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีแผนการสอน — กด "➕ สร้างแผน" เพื่อเริ่ม</p>';const e={1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัสบดี",5:"ศุกร์",6:"เสาร์",7:"อาทิตย์"},s=new Map;for(const i of(D??[]).filter(l=>Number(l.subject_id)===Number(se))){const l=Number(i.day_of_week)||7;s.has(l)||s.set(l,[]),s.get(l).push({start:Number(i.period_no),count:Math.max(1,Number(i.span_periods)||1)})}const t=[...s.keys()].sort((i,l)=>i%7-l%7),n=i=>Qe(i).periodCount,r=i=>{var B,S;const l=n(i),u=i.lesson_date||((B=i.source_json)==null?void 0:B.lesson_date),h=/^\d{4}-\d{2}-\d{2}$/.test(String(u??""))?new Date(`${u}T00:00:00`).getDay()||7:null,o=Number((S=i.source_json)==null?void 0:S.session_in_week),d=h??(Number.isInteger(o)&&o>0?t[o-1]:null),b=s.get(d)??[];if(b.reduce((f,q)=>f+q.count,0)!==l)return"";const k=b.sort((f,q)=>f.start-q.start).map(f=>f.count>1?`${f.start}–${f.start+f.count-1}`:`${f.start}`);return` · วัน${e[d]} คาบ ${k.join(", ")}`};return`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${at().map((i,l)=>{var h,o;const u={...i,...Re(i),session_number:l+1};return`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <button class="sc-plan-row flex-1 min-w-0 text-left" data-planid="${u.id}">
          <p class="text-xs font-bold text-gray-700 truncate">${c(u.title)}</p>
          <p class="text-[10px] text-gray-400">สัปดาห์ ${u.week_start}${u.week_end!==u.week_start?`-${u.week_end}`:""} · ครั้งที่ ${u.session_number||1} · ${n(u)} คาบ · ${Number(u.duration_minutes)||Number((h=u.source_json)==null?void 0:h.duration_minutes)||n(u)*Number(((o=u.source_json)==null?void 0:o.minutes_per_period)||45)} นาที${r(u)}</p>
        </button>
        <button class="sc-plan-reflect text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50 flex-shrink-0" data-planid="${u.id}">✍️ ลงนาม/พิมพ์</button>
        <button type="button" class="sc-plan-delete text-[10px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-red-200 text-red-600 flex-shrink-0" data-planid="${u.id}" aria-label="ลบแผน ${c(u.title)}">ลบ</button>
      </div>`}).join("")}</div>`},qe=[{key:"schedule",icon:"🗓️",label:"ตารางเรียน",mobileLabel:"ตาราง",desc:"ดูคาบรายวันและรายสัปดาห์"},{key:"examqueue",icon:"📋",label:"คิวสอบ",mobileLabel:"คิวสอบ",desc:"ติดตามคำร้องสอบย้อนหลัง"},{key:"syllabus",icon:"📘",label:"กำหนดการสอน",mobileLabel:"การสอน",desc:"วางหัวข้อทั้งภาคเรียน"},{key:"plans",icon:"📝",label:"แผนการสอน",mobileLabel:"แผน",desc:"สร้างแผนหน้าเดียวรายครั้ง"},{key:"assignments",icon:"📚",label:"งานที่มอบหมาย",mobileLabel:"งาน",desc:"สั่งงานและติดตามการส่ง"},{key:"grades",icon:"📊",label:"คะแนน",mobileLabel:"คะแนน",desc:"บันทึก/จัดการคะแนนทั้งห้อง"},{key:"attendance",icon:"✅",label:"เช็คชื่อ",mobileLabel:"เช็คชื่อ",desc:"เช็คชื่อ/ใบลา/ประวัติทั้งห้อง"}],wt=[{key:"room",icon:"👥",label:"ห้อง"},{key:"live",icon:"🧠",label:"สอนสด"},{key:"work",icon:"📚",label:"งาน"},{key:"plan",icon:"📝",label:"แผน"},{key:"more",icon:"•••",label:"เพิ่ม"}];let ce="schedule",We="room";const _t=e=>e==="schedule"?`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ตารางเรียนของห้องนี้</p>
        <div class="sc-tabbar">
          <button data-sched="daily" class="sc-sched-tab sc-tab-pill">รายวัน</button>
          <button data-sched="weekly" class="sc-sched-tab sc-tab-pill">รายสัปดาห์</button>
        </div>
      </div>
      <div id="sc-schedule-body">${gt("daily")}</div>`:e==="examqueue"?`
      <p class="text-xs text-gray-400 mb-3">คิวคำร้องขอสอบปรับ/สอบย้อนหลัง เรียงจากใกล้ไปไกล</p>
      <div id="sc-exam-queue">${ft()}</div>`:e==="syllabus"?`
      <div class="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-blue-950">📘 กำหนดการสอนรายภาคเรียน</p><p class="text-xs text-blue-700/70 mt-1">กำหนดหัวข้อแต่ละช่วงสัปดาห์ ผูกกับรายวิชา และใช้ร่วมกันทุกห้อง</p><div class="flex gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">${J.length} ช่วงการสอน</span><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">สัปดาห์ปัจจุบัน ${de||"—"}</span></div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[310px]">
            <button id="sc-ai-syllabus" class="min-h-[48px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm">🤖 สร้างกำหนดการด้วย AI</button>
            <button id="sc-add-syllabus" class="min-h-[48px] rounded-xl bg-white border border-blue-200 text-blue-800 text-xs font-bold hover:bg-blue-50">＋ เพิ่มหัวข้อเอง</button>
          </div>
        </div>
      </div>
      <div class="my-3 px-3 py-2.5 rounded-xl ${ve?"bg-indigo-50 border border-indigo-100":"bg-gray-50 border border-gray-100"}">
        <p class="text-[10px] font-bold ${ve?"text-indigo-500":"text-gray-400"} uppercase tracking-wide">สัปดาห์นี้ — สัปดาห์ที่ ${de||"—"}</p>
        <p class="text-sm font-bold ${ve?"text-indigo-700":"text-gray-400"} mt-0.5">${ve?c(ve.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-syllabus-list">${Ps()}</div>`:e==="plans"?`
      <div class="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</p><p class="text-xs text-violet-700/70 mt-1">สร้างแผนรายครั้ง บันทึกหลังสอน และลงลายเซ็นครบ 3 ฝ่าย</p><div class="flex flex-wrap gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">${X.length} แผน</span><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">เชื่อมกำหนดการสอน</span>${X.some(s=>Number(s.week_start)===1)&&new Set(X.map(s=>Number(s.week_start))).size>1?'<button id="sc-sync-plan-pattern" type="button" class="px-2 py-1 rounded-lg bg-white border border-violet-200 text-[10px] font-bold text-violet-700 hover:bg-violet-50">🔁 ใช้รูปแบบคาบจากสัปดาห์แรก</button>':""}</div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[300px]">
            <button id="sc-ai-plan" class="min-h-[48px] rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-xs font-bold shadow-sm">🤖 สร้างแผนด้วย AI</button>
            <button id="sc-add-plan" class="min-h-[48px] rounded-xl bg-white border border-violet-200 text-violet-800 text-xs font-bold hover:bg-violet-50">＋ สร้างแผนเอง</button>
          </div>
        </div>
      </div>
      <div id="sc-plan-list">${Ds()}</div>`:`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ติดตามงานที่มอบหมาย + สถานะการส่งของนักเรียน</p>
        <button id="sc-add-assignment" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สั่งงานใหม่</button>
      </div>
      <div id="sc-assignment-list">${Bs()}</div>`;Ye(`<div class="animate-fade max-w-6xl mx-auto">

    <div class="relative overflow-hidden bg-white border border-amber-200 rounded-2xl shadow-sm px-5 py-4 mb-4 flex items-center gap-4 flex-wrap">
      <div class="absolute inset-x-0 top-0 h-1" style="background:linear-gradient(90deg,#e6c988,#a9781a,#e6c988)"></div>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold flex-shrink-0">👑 Smart Classroom</span>
      <div class="min-w-0">
        <h1 class="font-bold text-gray-800 text-base truncate">${c(Ze.subject_name??"")} · ${c(w.class_name??"")}</h1>
        <p class="text-xs text-gray-400">${_.length} คน</p>
      </div>
      <div class="min-w-0 border-l border-amber-100 pl-4">
        <p class="text-[10px] font-bold text-amber-500 uppercase tracking-wide">📘 สัปดาห์ที่ ${de||"—"}</p>
        <p class="text-xs font-semibold ${ve?"text-gray-700":"text-gray-400"} truncate max-w-[240px]">${ve?c(ve.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-clock-wrap" class="ml-auto flex-shrink-0 text-right"></div>
      <button id="sc-class-chat" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-amber-700 border border-amber-200 bg-white hover:bg-amber-50 px-3 py-2 rounded-xl">💬 แชทห้องเรียน</button>
      <button id="sc-teaching-ai" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-white px-3 py-2 rounded-xl shadow-sm" style="background:linear-gradient(135deg,#6366f1,#7c3aed)">✨ AI เตรียมการสอน</button>
      <button id="sc-switch-class" class="flex-shrink-0 text-xs font-semibold text-amber-700 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg">🔀 สลับห้อง</button>
      <button id="sc-back" class="flex-shrink-0 text-xs text-gray-400 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">← กลับ</button>
    </div>

    ${vt("mobile")}

    <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 items-start">

      <div id="sc-mobile-room-section" class="sc-mobile-app-section mobile-active">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
            <h2 class="text-sm font-bold text-gray-700">👥 นักเรียน — แตะเพื่อดูข้อมูล/สั่งการ</h2>
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button id="sc-sort-trigger" class="text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100">🔀 เรียงตาม: <span id="sc-sort-label">เลขที่</span></button>
              <button id="sc-open-attendance" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg">✅ เช็คชื่อ</button>
            </div>
          </div>
          <p class="text-xs text-gray-400 mb-3">เด้งป๊อบอัพเช็คชื่อของคาบวันนี้ให้อัตโนมัติ (ถ้าวันนี้มีหลายคาบหรือไม่ตรงตาราง จะให้เลือกคาบเอง)</p>
          ${oe?`<div class="flex items-center flex-wrap gap-2 mb-3 px-3 py-2 rounded-xl bg-red-50 border border-red-100 text-[11px] text-red-700">
            <span class="font-bold">🔴 กำลังสอบสด: ${c(oe.title)}</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-flex items-center justify-center text-[8px]">📝</span>กำลังทำ</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-blue-500 inline-flex items-center justify-center text-[8px]">✅</span>ส่งแล้ว</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-red-500 inline-flex items-center justify-center text-[8px]">🔒</span>ถูกล็อก</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-gray-300 inline-flex items-center justify-center text-[8px]">⚪</span>ยังไม่เข้าสอบ</span>
          </div>`:""}
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2" id="sc-roster">${Fe()}</div>
        </div>

        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">🚪 Hall Pass — ออกนอกห้องตอนนี้</h2>
            <button id="sc-leave-quota" class="text-[11px] font-semibold text-amber-700 hover:text-amber-900">⚙️ โควตา (${V.length}/${A})</button>
          </div>
          <div id="sc-pass-list" class="mt-2">${js()}</div>
        </div>
      </div>

      <div id="sc-mobile-live-section" class="sc-mobile-app-section">
        ${vt("desktop")}

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-sm font-bold text-gray-700">🧠 เปิดควิซสด</h2>
            <button id="sc-quiz-add" class="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800">+ ควิซ</button>
          </div>
          <div id="sc-quiz-list">${Is()}</div>
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
          <div id="sc-ann-history">${Ms()}</div>
        </div>
      </div>

    </div>

    <div id="sc-reference-panel" class="sc-reference-panel bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-5 mt-4">
      <div class="sc-mobile-ref-head">
        <div>
          <p id="sc-mobile-ref-title" class="text-sm font-bold text-gray-800">${(Ut=qe.find(e=>e.key===ce))==null?void 0:Ut.icon} ${(Gt=qe.find(e=>e.key===ce))==null?void 0:Gt.label}</p>
          <p class="text-[11px] text-gray-400">แตะเมนูด้านล่างเพื่อเปลี่ยนหัวข้อ</p>
        </div>
        <button id="sc-mobile-ref-close" type="button" class="min-w-[44px] min-h-[44px] rounded-xl border border-gray-200 bg-white text-gray-500 text-lg">✕</button>
      </div>
      <div id="sc-mobile-ref-subtabs" class="sc-mobile-ref-subtabs"></div>
      <div class="hidden lg:flex items-center justify-between gap-3 mb-4"><div><h2 class="text-base font-extrabold text-gray-800">พื้นที่จัดการรายวิชา</h2><p class="text-xs text-gray-400 mt-0.5">เลือกงานที่ต้องการ ระบบจะแยกข้อมูลและปุ่มสร้างให้ชัดเจน</p></div><span class="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-700">${c(Ze.subject_name??"")}</span></div>
      <div id="sc-reftabs-bar" class="sc-desktop-ref-tabs mb-5">
        ${qe.map(e=>`<button data-reftab="${e.key}" class="sc-reftab-btn ${e.key===ce?"active":""}"><span class="sc-ref-tab-icon">${e.icon}</span><span class="min-w-0 text-left"><b>${e.label}${e.key==="assignments"&&me.length?` (${me.length})`:""}</b><small>${e.desc}</small></span></button>`).join("")}
      </div>
      <div id="sc-reftab-body">${_t(ce)}</div>
    </div>

    <nav id="sc-mobile-ref-nav" class="sc-mobile-ref-nav" aria-label="เมนู Smart Classroom">
      ${wt.map(e=>`<button type="button" data-mobile-group="${e.key}" class="sc-mobile-group-btn sc-mobile-ref-btn ${e.key===We?"active":""}">
        <span class="sc-mobile-ref-icon">${e.icon}</span>
        <span>${e.label}</span>
        ${e.key==="work"&&me.length?`<span class="sc-mobile-ref-count">${me.length>99?"99+":me.length}</span>`:""}
      </button>`).join("")}
    </nav>
  </div>`),document.body.classList.add("sc-fullscreen"),document.getElementById("sc-back").addEventListener("click",()=>{window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),document.body.classList.remove("sc-fullscreen"),Be(p,m)}),document.getElementById("sc-switch-class").addEventListener("click",()=>zs()),document.getElementById("sc-open-attendance").addEventListener("click",()=>Hs());const kt=()=>Jt(()=>import("./chat-classroom-C3nyYAQB.js"),__vite__mapDeps([8,9,3,10,11,12,13,6,1,14,15])).then(e=>e.openTeacherClassroomChat(p,m,`${Ze.subject_name??""} · ${w.class_name??""}`)),$t=()=>rr(p,m,w,L);(Vt=document.getElementById("sc-class-chat"))==null||Vt.addEventListener("click",kt),(Yt=document.getElementById("sc-teaching-ai"))==null||Yt.addEventListener("click",$t),document.querySelectorAll("[data-sc-urgent-aid]").forEach(e=>e.addEventListener("click",()=>{const s=ae.find(t=>t.id===parseInt(e.dataset.scUrgentAid,10));s&&Mt(s)})),document.querySelectorAll(".sc-quick-add-assignment").forEach(e=>e.addEventListener("click",()=>ot()));function St(e){return{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:e%60}}function Et(){const e=document.getElementById("sc-clock-wrap");if(!e){window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null);return}const s=Ls();if(s.mode==="live"){const{h:t,m:n,s:r}=St(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">🟢 กำลังสอน — เหลืออีก</p>
        <p class="text-xl font-extrabold text-emerald-700 font-mono">${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}</p>`}else if(s.mode==="upcoming"){const{d:t,h:n,m:r,s:a}=St(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-amber-600 font-bold uppercase tracking-wide">คาบนี้จะเริ่มสอนในอีก</p>
        <p class="text-sm font-extrabold text-amber-700 font-mono">${t>0?t+" วัน ":""}${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}</p>`}else e.innerHTML='<p class="text-[10px] text-gray-400">ไม่พบตารางสอนของห้องนี้</p>'}window._scClockInterval&&clearInterval(window._scClockInterval),Et(),window._scClockInterval=setInterval(Et,1e3),window._scQuizPollInterval&&clearInterval(window._scQuizPollInterval),oe&&(window._scQuizPollInterval=setInterval(async()=>{const e=document.getElementById("sc-roster");if(!e){clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null;return}const s=await rs(oe.id).catch(()=>null);s&&(De=Object.fromEntries(s.map(t=>[t.student_id,t])),e.innerHTML=Fe())},4e3));async function zs(){var n;(n=document.getElementById("sc-switch-modal"))==null||n.remove();const e=document.createElement("div");e.id="sc-switch-modal",e.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">🔀 สลับห้องเรียน</h3>
          <button id="sc-switch-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div id="sc-switch-list" class="max-h-80 overflow-y-auto space-y-1.5">
          <div class="text-center py-6 text-xs text-gray-400">กำลังโหลด...</div>
        </div>
      </div>`,document.body.appendChild(e),e.addEventListener("click",r=>{r.target===e&&e.remove()}),e.querySelector("#sc-switch-close").addEventListener("click",()=>e.remove());const s=(await Ne(p.id).catch(()=>[])).filter(r=>r.id!==m),t=e.querySelector("#sc-switch-list");if(!s.length){t.innerHTML='<p class="text-center py-6 text-xs text-gray-400">ไม่มีห้องอื่นให้สลับ</p>';return}t.innerHTML=s.map(r=>{var a;return`
      <button class="sc-switch-btn w-full text-left px-3 py-2.5 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition" data-cid="${r.id}">
        <p class="text-sm font-semibold text-gray-700 truncate">${c(r.class_name??"")}</p>
        <p class="text-xs text-gray-400 truncate">${c(((a=r.master_subjects)==null?void 0:a.subject_name)??"")}</p>
      </button>`}).join(""),t.querySelectorAll(".sc-switch-btn").forEach(r=>r.addEventListener("click",()=>{const a=parseInt(r.dataset.cid,10);e.remove(),we(p,a)}))}async function Hs(){var t,n;const e=document.getElementById("sc-open-attendance");e.disabled=!0;const s=e.textContent;e.textContent="⏳";try{const r=((t=w.master_subjects)==null?void 0:t.credit)??1,a=((n=w.master_subjects)==null?void 0:n.subject_group)==="ACDMVOC",i=a?await Sn(m).catch(()=>[]):[],l=or(w,r,i.length?i:null,a),u=lr(new Date),h=l.filter(o=>o.ds===u);if(h.length===1)await as(p,w,h[0].n,{});else if(h.length>1)qt(l,h[0].n,"วันนี้มีหลายคาบ — เลือกคาบที่จะเช็คชื่อ");else{const o=new Date(u).getTime();let d=l[0],b=1/0;for(const $ of l){const k=Math.abs(new Date($.ds).getTime()-o);k<b&&(b=k,d=$)}qt(l,d==null?void 0:d.n,"วันนี้ไม่ตรงกับตารางสอนของห้องนี้ — เลือกคาบเอง (เลื่อนไปคาบใกล้วันนี้ที่สุดให้แล้ว)")}}catch(r){x("เปิดหน้าเช็คชื่อไม่สำเร็จ: "+N(r),"error")}finally{e.disabled=!1,e.textContent=s}}function qt(e,s,t){var a;(a=document.getElementById("sc-session-picker"))==null||a.remove();const n=document.createElement("div");n.id="sc-session-picker",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">✅ เลือกคาบเช็คชื่อ</h3>
          <button id="sc-sess-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <p class="text-xs text-gray-400">${c(t)}</p>
        <div class="max-h-72 overflow-y-auto space-y-1.5" id="sc-sess-list">
          ${e.map(i=>`<button class="sc-sess-btn w-full text-left px-3 py-2.5 rounded-xl border transition text-sm font-semibold ${i.n===s?"border-indigo-400 bg-indigo-50 text-indigo-700":"border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700"}" data-n="${i.n}">
            คาบที่ ${i.n} <span class="${i.n===s?"text-indigo-400":"text-gray-400"} font-normal">· ${c(i.ds)}</span>${i.n===s?' <span class="text-[10px] text-indigo-500">← ใกล้วันนี้ที่สุด</span>':""}
          </button>`).join("")}
        </div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",i=>{i.target===n&&n.remove()}),n.querySelector("#sc-sess-close").addEventListener("click",()=>n.remove()),n.querySelectorAll(".sc-sess-btn").forEach(i=>i.addEventListener("click",async()=>{const l=parseInt(i.dataset.n,10);n.remove();try{await as(p,w,l,{})}catch(u){x("เปิดคาบนี้ไม่สำเร็จ: "+N(u),"error")}}));const r=n.querySelector(`.sc-sess-btn[data-n="${s}"]`);r==null||r.scrollIntoView({block:"center"})}document.getElementById("sc-roster").addEventListener("click",e=>{const s=e.target.closest(".sc-stu");if(!s)return;const t=dt[parseInt(s.dataset.sid,10)];t&&Zs(t)});function Fs(e,s){G={key:e,label:s},document.getElementById("sc-sort-label").textContent=s,document.getElementById("sc-roster").innerHTML=Fe()}document.getElementById("sc-sort-trigger").addEventListener("click",()=>Os());function Os(){var i;(i=document.getElementById("sc-sort-panel"))==null||i.remove();const e=document.getElementById("sc-sort-trigger"),s=e.getBoundingClientRect(),t=document.createElement("div");t.id="sc-sort-panel",t.className="fixed z-[96] bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 max-h-[70vh] overflow-hidden flex flex-col animate-fade",t.style.top=`${Math.min(s.bottom+6,window.innerHeight-300)}px`,t.style.left=`${Math.min(s.left,window.innerWidth-300)}px`;const n=[{key:"seatno",label:"เลขที่ (ค่าเริ่มต้น)"},{key:"name",label:"ชื่อ-สกุล (ก–ฮ)"},{key:"total",label:"คะแนนรวมทั้งเทอม (สูง→ต่ำ)"},{key:"att",label:"คะแนนการมาเรียน (สูง→ต่ำ)"}];t.innerHTML=`
      <div class="p-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-xs font-bold text-gray-500 mb-2">เรียงลำดับตาม</p>
        <div class="space-y-1">
          ${n.map(l=>`<button data-sortkey="${l.key}" data-sortlabel="${c(l.label)}" class="sc-sort-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${G.key===l.key?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${l.label}</button>`).join("")}
        </div>
      </div>
      <div class="p-3 flex-1 overflow-y-auto min-h-0">
        <p class="text-xs font-bold text-gray-500 mb-2">คะแนนรายช่อง</p>
        ${z.length>8?'<input id="sc-sort-search" type="text" placeholder="พิมพ์ค้นหาชื่อคอลัมน์..." class="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />':""}
        <div id="sc-sort-col-list" class="space-y-1">
          ${z.length?z.map(l=>`<button data-sortkey="col:${l.id}" data-sortlabel="${c(l.assignment_name??"")}" data-search="${c((l.assignment_name??"").toLowerCase())}" class="sc-sort-opt sc-sort-col-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${G.key==="col:"+l.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${c(l.assignment_name??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>'}
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100">
          <p class="text-xs font-bold text-gray-500 mb-1">📚 งานที่มอบหมาย</p>
          <p class="text-[10px] text-gray-400 mb-2">เรียง: รอตรวจ → ยังไม่ส่ง → ตรวจแล้ว พร้อมแสดงสถานะบนการ์ด</p>
          <div class="space-y-1">
            ${ae.length?ae.map(l=>`<button data-sortkey="assignment:${l.id}" data-sortlabel="งาน: ${c(l.title??"")}" class="sc-sort-opt w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition ${G.key==="assignment:"+l.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${c(l.title??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีงานที่มอบหมาย</p>'}
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelectorAll(".sc-sort-opt").forEach(l=>l.addEventListener("click",()=>{Fs(l.dataset.sortkey,l.dataset.sortlabel),t.remove()}));const r=t.querySelector("#sc-sort-search");r==null||r.addEventListener("input",()=>{const l=r.value.trim().toLowerCase();t.querySelectorAll(".sc-sort-col-opt").forEach(u=>{u.style.display=!l||u.dataset.search.includes(l)?"":"none"})});const a=l=>{t.contains(l.target)||l.target===e||(t.remove(),document.removeEventListener("mousedown",a,!0))};setTimeout(()=>document.addEventListener("mousedown",a,!0),0)}const Rs=[{key:"info",label:"👤 ข้อมูล"},{key:"score",label:"📝 คะแนน"},{key:"att",label:"✅ มาเรียน"},{key:"leave",label:"🚪 ออกห้อง"}];function Qs(e){var n;const s=Ee[e.id],t=oe?De[e.id]:null;return`
      <div class="space-y-2">
        ${oe?`
          <div class="px-3 py-2.5 rounded-xl bg-red-50 border border-red-100">
            <p class="text-xs text-red-700 font-bold mb-1">🔴 ${c(oe.title)}</p>
            ${t?`
              <p class="text-xs text-gray-600">${t.status==="in_progress"?"📝 กำลังทำอยู่":t.status==="submitted"?`✅ ส่งแล้ว${t.score_pct!=null?` · คะแนน ${t.score_pct.toFixed(1)}%`:""}`:t.status==="terminated_violation"?"🔒 ถูกล็อกจากการทำผิดกติกา":t.status}${(n=t.question_order)!=null&&n.length?` · ตอบแล้ว ${Object.keys(t.answers??{}).length}/${t.question_order.length} ข้อ`:""}</p>
              ${t.status==="terminated_violation"?`<button id="sc-sp-unlock" data-attempt="${t.id}" class="w-full mt-2 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600">🔓 ปลดล็อกให้ทำต่อ</button>`:""}
            `:'<p class="text-xs text-gray-500">⚪ ยังไม่เข้าสอบ</p>'}
            <button id="sc-sp-quiz-monitor" class="w-full mt-2 py-1.5 rounded-xl border border-red-200 text-red-600 text-[11px] font-bold hover:bg-red-100">เปิดหน้าจัดการสอบสดแบบเต็ม →</button>
          </div>
        `:""}
        ${s?`
          <div class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
            <div class="text-xs text-amber-800"><b>🚪 ออกนอกห้องอยู่</b><br>${c(s.reason??"")} · ${ms(s.created_at)}</div>
          </div>
          <button id="sc-sp-return" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700">✅ บันทึกกลับเข้าห้องแล้ว</button>
        `:`
          <button id="sc-sp-leave" class="w-full py-2.5 rounded-xl bg-amber-500 text-white text-sm font-bold hover:bg-amber-600">🚪 อนุญาตออกนอกห้อง</button>
        `}
      </div>`}const Ws=e=>e>=80?4:e>=75?3.5:e>=70?3:e>=65?2.5:e>=60?2:e>=55?1.5:e>=50?1:0,Us=e=>e>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:e>=2.5?{label:"ดี",cls:"text-blue-600"}:e>=1?{label:"ผ่าน",cls:"text-amber-600"}:{label:"ไม่ผ่าน",cls:"text-red-600"},_e=e=>Number.isFinite(e)?String(Number(e.toFixed(2))):"—";function Gs(e){if(!z.length)return'<p class="text-center py-6 text-xs text-gray-400">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>';const s=ie[e.id]??[],t=z.filter(v=>v.column_type==="bonus"),n=z.filter(v=>v.column_type==="derived"),r=z.filter(v=>(v.column_type??"regular")==="regular"),a=r.filter(v=>v.assignment_type!=="final"&&v.assignment_type!=="ปลายภาค"),i=r.filter(v=>v.assignment_type==="final"||v.assignment_type==="ปลายภาค"),l=cr(t),u=v=>{var y;return parseFloat((y=s.find(E=>E.score_column_id===v.id))==null?void 0:y.score)||0},h=v=>{const y=u(v);if(!v.bonus_formula)return y;const E=Object.fromEntries(l.map(j=>[j.var,u(j)])),T=us(v.bonus_formula,E)??0;return v.max_score?Math.min(y+T,parseFloat(v.max_score)):y+T},o=v=>{if(!v.formula)return 0;const y=Object.fromEntries((v.formula_refs??[]).map(E=>{const T=z.find(j=>j.id===E.col_id);return[E.var,T?u(T):0]}));return us(v.formula,y)??0},d=v=>v.reduce((y,E)=>y+(parseFloat(E.max_score)||0),0),b=v=>v.reduce((y,E)=>y+h(E),0),$=d(a),k=d(i),B=d(n),S=b(a),f=b(i),q=n.reduce((v,y)=>v+o(y),0),M=$+k+B,C=S+f+q,H=Math.round(C),W=M>0?H/M*100:0,g=Ws(W),re=Us(g),ee=(v,y)=>{const E=s.find(ue=>ue.score_column_id===v.id),T=(E==null?void 0:E.score)??"",j=T!==""&&parseFloat(v.max_score)>0?parseFloat(T)/parseFloat(v.max_score)*100:null;return`<tr class="border-b border-gray-50 last:border-0">
        <td class="py-2 px-2 text-gray-700 text-[11px] font-semibold">${c(v.assignment_name??"—")}</td>
        <td class="py-1 px-1 text-center"><input type="number" class="sc-score-input w-16 text-center border border-gray-200 rounded-lg px-1 py-1 font-mono font-bold ${y} focus:outline-none focus:ring-2 focus:ring-indigo-300" data-col="${v.id}" value="${T}" max="${v.max_score??""}" placeholder="—" /></td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-400">/${v.max_score??0}</td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-500">${j==null?"—":j.toFixed(0)+"%"}</td>
      </tr>`},K=(v,y,E,T,j)=>y.length?`<div>
      <h4 class="font-bold ${j.title} text-sm mb-2">${v}</h4>
      <div class="overflow-hidden rounded-xl border ${j.border}"><table class="w-full table-fixed">
        <thead><tr class="${j.head} text-gray-500"><th class="py-1.5 px-2 text-left text-[10px] w-[44%]">ชื่องาน</th><th class="py-1.5 text-center text-[10px]">คะแนน</th><th class="py-1.5 text-center text-[10px]">เต็ม</th><th class="py-1.5 text-center text-[10px]">%</th></tr></thead>
        <tbody>${y.map(ue=>ee(ue,j.input)).join("")}</tbody>
        <tfoot><tr class="${j.head} font-bold"><td class="py-2 px-2 ${j.title} text-xs">รวม</td><td class="py-2 text-center ${j.title} text-xs">${_e(E)}</td><td class="py-2 text-center text-gray-400 text-xs">/${_e(T)}</td><td class="py-2 text-center ${j.title} text-xs">${T>0?(E/T*100).toFixed(1):0}%</td></tr></tfoot>
      </table></div>
    </div>`:"";return`
      <div class="space-y-4">
        ${K("📘 กลางภาค",a,S,$,{title:"text-blue-700",border:"border-blue-100",head:"bg-blue-50",input:"text-blue-600"})}
        ${K("📙 ปลายภาค",i,f,k,{title:"text-purple-700",border:"border-purple-100",head:"bg-purple-50",input:"text-purple-600"})}
        ${n.length?`<div class="rounded-xl border border-indigo-100 bg-indigo-50/50 px-3 py-2.5"><p class="text-xs font-bold text-indigo-700 mb-1">🧮 คะแนนคำนวณ</p>${n.map(v=>`<div class="flex justify-between text-[11px] py-1"><span class="text-gray-600">${c(v.assignment_name??"")}</span><b class="text-indigo-700">${_e(o(v))}/${_e(parseFloat(v.max_score)||0)}</b></div>`).join("")}</div>`:""}
        <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-4 text-center border border-amber-100">
          <p class="text-xs text-gray-500 mb-1">คะแนนรวมทั้งภาค</p>
          <p class="text-3xl font-extrabold text-amber-700">${_e(H)}<span class="text-sm font-normal text-gray-400">/${_e(M)}</span></p>
          <p class="text-[11px] text-gray-400 mt-0.5">คะแนนจริง ${_e(C)} · ${W.toFixed(1)}%</p>
          <p class="text-xl font-bold text-purple-700 mt-1">เกรด ${g>0?g.toFixed(1):"0"} <span class="text-sm ${re.cls}">— ${re.label}</span></p>
        </div>
        <p class="text-[10px] text-gray-400 text-center">คำนวณด้วยกลุ่มกลางภาค/ปลายภาค สูตร และคะแนนโบนัสแบบเดียวกับหน้าคะแนนหลัก</p>
      </div>`}const Vs={present:"#059669",absent:"#dc2626",late:"#f59e0b",excused:"#3b82f6",sick:"#f97316"};function Ys(e){const s=(Ce[e.id]??[]).slice().sort((d,b)=>(b.check_date??"").localeCompare(d.check_date??""));if(!s.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีข้อมูลเช็คชื่อ</p>';const t=["present","absent","late","excused","sick"],n={};for(const d of s)n[d.status]=(n[d.status]??0)+1;const r=s.length;let a=0;const i=t.filter(d=>n[d]).map(d=>{const b=n[d]/r*100,$=`${Vs[d]} ${a}% ${a+b}%`;return a+=b,$}),l=i.length?`conic-gradient(${i.join(",")})`:"#e5e7eb",u=Math.round((n.present??0)/r*100),h=t.filter(d=>n[d]).map(d=>{const b=cs[d];return`<span class="px-2 py-1 rounded-full text-[11px] font-bold ${(b==null?void 0:b.bg)??"bg-gray-50"} ${(b==null?void 0:b.color)??"text-gray-500"}">${(b==null?void 0:b.label)??d} ${n[d]}</span>`}).join(" "),o=s.slice(0,15).map(d=>{const b=cs[d.status];return`<div class="flex items-center justify-between px-3 py-1.5 text-xs border-b border-gray-50">
        <span class="text-gray-500">${c(d.check_date??"")} · คาบ ${d.session_number}</span>
        <span class="font-bold ${(b==null?void 0:b.color)??"text-gray-500"}">${(b==null?void 0:b.label)??d.status}</span>
      </div>`}).join("");return`
      <div class="flex items-center gap-4 mb-3">
        <div class="relative flex-shrink-0" style="width:72px;height:72px;border-radius:50%;background:${l}">
          <div class="absolute" style="inset:7px;background:white;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <span class="text-sm font-bold text-gray-800">${u}%</span>
            <span class="text-[8px] text-gray-400">มาเรียน</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 flex-1">${h}</div>
      </div>
      <div class="max-h-48 overflow-y-auto border-t border-gray-100 pt-2">${o}</div>`}function Xs(e){const s=ze[e.id]??[];return s.length?`<div class="max-h-64 overflow-y-auto space-y-1.5">${s.map(t=>{const n=t.status==="returned"?"กลับแล้ว":t.status==="overdue"?"เลยเวลา":"ยังไม่กลับ",r=t.status==="returned"?"text-emerald-600":t.status==="overdue"?"text-red-600":"text-amber-600";return`<div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-gray-700">${c(t.reason??"")}</span>
          <span class="font-bold ${r}">${n}</span>
        </div>
        <div class="text-gray-400 mt-0.5">${new Date(t.created_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})} · ขออนุญาต ${t.allowed_duration} นาที</div>
      </div>`}).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ไม่เคยขอออกนอกห้องในวิชานี้</p>'}function Zs(e){var a;(a=document.getElementById("sc-student-modal"))==null||a.remove();let s="info",t=e;const n=document.createElement("div");n.id="sc-student-modal",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",document.body.appendChild(n);const r=()=>{var u,h,o,d,b,$,k,B;Ee[t.id];const i=_.findIndex(S=>S.id===t.id);n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[88vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0">
            <div class="flex items-center gap-3">
              <button id="sc-sp-prev" ${i<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl flex-shrink-0">
                ${t.image_url?`<img src="${c(t.image_url)}" class="w-full h-full object-cover"/>`:c((t.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate">${c(t.full_name??"—")}</p>
                <p class="text-xs text-gray-400">${c(t.student_code??"")} · ${c(t.main_room??"")} · เลขที่ ${ne.get(t.id)??"—"}</p>
              </div>
              <button id="sc-sp-next" ${i>=_.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sc-sp-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sc-sp-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sc-sp-jump" type="number" min="1" max="${_.length}" value="${ne.get(t.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${_.length}</span>
            </div>
          </div>
          <div class="px-5 pb-3 flex-shrink-0">
            <div class="sc-tabbar w-full">
              ${Rs.map(S=>`<button data-tab="${S.key}" class="sc-sp-tab sc-tab-pill ${s===S.key?"active":""}">${S.label}</button>`).join("")}
            </div>
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${s==="info"?Qs(t):s==="score"?Gs(t):s==="att"?Ys(t):Xs(t)}
          </div>
        </div>`,n.querySelector("#sc-sp-close").addEventListener("click",()=>n.remove()),(u=n.querySelector("#sc-sp-prev"))==null||u.addEventListener("click",()=>{i>0&&(t=_[i-1],s="info",r())}),(h=n.querySelector("#sc-sp-next"))==null||h.addEventListener("click",()=>{i<_.length-1&&(t=_[i+1],s="info",r())});const l=()=>{const S=n.querySelector("#sc-sp-jump"),f=parseInt(S.value,10),q=ct.get(f);if(!q){x(`ไม่พบเลขที่ ${S.value}`,"warning"),S.value=ne.get(t.id)??"";return}q.id!==t.id&&(t=q,s="info",r())};(o=n.querySelector("#sc-sp-jump"))==null||o.addEventListener("change",l),(d=n.querySelector("#sc-sp-jump"))==null||d.addEventListener("keydown",S=>{S.key==="Enter"&&(S.preventDefault(),l())}),n.querySelectorAll(".sc-sp-tab").forEach(S=>S.addEventListener("click",()=>{s=S.dataset.tab,r()})),n.querySelectorAll(".sc-score-input").forEach(S=>{S.addEventListener("change",async()=>{var M;const f=parseInt(S.dataset.col,10),q=S.value.trim();S.disabled=!0;try{await In(m,t.id,f,q===""?null:q);const C=ie[M=t.id]??(ie[M]=[]),H=C.find(g=>g.score_column_id===f),W=q===""?null:parseFloat(q);H?H.score=W:C.push({student_id:t.id,score_column_id:f,score:W}),x("บันทึกคะแนนแล้ว","success"),r()}catch(C){x("บันทึกไม่สำเร็จ: "+N(C),"error"),S.disabled=!1}})}),(b=n.querySelector("#sc-sp-return"))==null||b.addEventListener("click",async()=>{const S=Ee[t.id];try{await Kt(S.id,"returned"),x("บันทึกกลับเข้าห้องแล้ว","success"),n.remove(),Q()}catch(f){x("บันทึกไม่สำเร็จ: "+N(f),"error")}}),($=n.querySelector("#sc-sp-leave"))==null||$.addEventListener("click",()=>{if(Object.keys(Ee).length>=A){x(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${A} คนแล้ว`,"warning");return}n.remove(),Xn(p,w,t.id,t.full_name,t.image_url,Ee,A,()=>Q())}),(k=n.querySelector("#sc-sp-quiz-monitor"))==null||k.addEventListener("click",()=>{oe&&os(oe)}),(B=n.querySelector("#sc-sp-unlock"))==null||B.addEventListener("click",S=>{const f=S.target.dataset.attempt;Js(f,()=>{n.remove(),Q()})})};n.addEventListener("click",i=>{i.target===n&&n.remove()}),r()}function Js(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4",t.innerHTML=`
      <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
        <div class="text-4xl mb-3">🔓</div>
        <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
        <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
        <div class="space-y-2">
          <button id="qu-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
          <button id="qu-restart" class="sc-btn-dark w-full py-3 rounded-2xl font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
          <button id="qu-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#qu-cancel").addEventListener("click",()=>t.remove());const n=async r=>{t.remove();try{await On(e,r),x(r==="resume"?"ปลดล็อก — ทำต่อจากจุดเดิมแล้ว":"ปลดล็อก — เริ่มชุดใหม่แล้ว","success"),s==null||s()}catch(a){x("ปลดล็อกไม่สำเร็จ: "+N(a),"error")}};t.querySelector("#qu-resume").addEventListener("click",()=>n("resume")),t.querySelector("#qu-restart").addEventListener("click",()=>n("restart"))}document.getElementById("sc-pass-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-return-btn");if(s)try{await Kt(s.dataset.lid,"returned"),x("บันทึกกลับเข้าห้องแล้ว","success"),Q()}catch(t){x("บันทึกไม่สำเร็จ: "+N(t),"error")}}),document.getElementById("sc-leave-quota").addEventListener("click",()=>{Vn(w,A,P,()=>Q())}),document.getElementById("sc-timer").addEventListener("click",()=>sr(m,w,it)),document.getElementById("sc-random").addEventListener("click",()=>{const e=_.map((s,t)=>({...s,seat_no:t+1}));nr(m,w,e,it)}),document.getElementById("sc-scan-att").addEventListener("click",()=>Yn(p)),document.getElementById("sc-scan-score").addEventListener("click",()=>Gn({classId:m,className:w.class_name})),document.getElementById("sc-dashboard").addEventListener("click",()=>tr(m,w,window._pp5DonorTierIndex??0,L)),document.getElementById("sc-quiz-add").addEventListener("click",()=>Cs()),document.getElementById("sc-quiz-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-quiz-start"),t=e.target.closest(".sc-quiz-monitor"),n=e.target.closest(".sc-quiz-close"),r=e.target.closest(".sc-quiz-analytics");if(s)try{await Hn(s.dataset.qid),x("เริ่มควิซให้ห้องนี้แล้ว 🧠","success"),Q()}catch(a){x("เริ่มควิซไม่สำเร็จ: "+N(a),"error")}else if(t){const a=Y.find(i=>i.id===t.dataset.qid);a&&os(a)}else if(n){const a=Y.find(h=>h.id===n.dataset.qid);if(!a)return;const i=z.find(h=>String(h.id)===String(a.score_column_id)),l={highest:"เทียบเอาคะแนนสูงกว่า",overwrite:"ทับคะแนนเก่า",add:"บวกเพิ่มจากคะแนนเดิม"}[a.score_write_mode]??"ตามการตั้งค่าแบบทดสอบ",u=await cn({quizTitle:a.title,hasScoreColumn:!!a.score_column_id,targetColumn:(i==null?void 0:i.assignment_name)??"",writeModeLabel:l});if(!u)return;try{await Fn(a.id,{writeScores:u==="write_scores"}),x(u==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),Q()}catch(h){x("ปิดสอบไม่สำเร็จ: "+N(h),"error")}}else if(r){const a=Y.find(i=>i.id===r.dataset.qid);a&&er(a)}}),document.getElementById("sc-add-announcement").addEventListener("click",()=>Ks());function Ks(){var n;(n=document.getElementById("sc-ann-modal"))==null||n.remove();let e=null;const s=document.createElement("div");s.id="sc-ann-modal",s.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
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
            ${Je.map(r=>`<button type="button" data-emoji="${r.emoji}" data-label="${c(r.label)}" class="ca-type-chip px-2.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50 transition">${r.emoji} ${r.label}</button>`).join("")}
          </div>
          <input id="ca-type-custom" type="text" list="ca-type-list" placeholder="หรือพิมพ์ประเภทใหม่เอง..."
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <datalist id="ca-type-list">${Pe.map(r=>`<option value="${c(r)}"></option>`).join("")}</datalist>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">แนบไฟล์/รูปภาพ (เลือกได้หลายไฟล์ ไม่บังคับ)</label>
          <input id="ca-files" type="file" multiple class="w-full text-xs" />
        </div>
        <button id="ca-send" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">ส่งประกาศ</button>
      </div>`,document.body.appendChild(s),s.addEventListener("click",r=>{r.target===s&&s.remove()}),s.querySelector("#ca-close").addEventListener("click",()=>s.remove());const t=s.querySelector("#ca-type-custom");s.querySelectorAll(".ca-type-chip").forEach(r=>r.addEventListener("click",()=>{e=`${r.dataset.emoji} ${r.dataset.label}`,t.value="",s.querySelectorAll(".ca-type-chip").forEach(a=>a.classList.remove("border-amber-400","bg-amber-100","text-amber-800")),r.classList.add("border-amber-400","bg-amber-100","text-amber-800")})),t.addEventListener("input",()=>{t.value.trim()&&(e=null,s.querySelectorAll(".ca-type-chip").forEach(r=>r.classList.remove("border-amber-400","bg-amber-100","text-amber-800")))}),s.querySelector("#ca-send").addEventListener("click",async()=>{const r=s.querySelector("#ca-text").value.trim();if(!r){x("พิมพ์ข้อความก่อนส่งนะ","warning");return}const a=t.value.trim()||e||`${Je[0].emoji} ${Je[0].label}`,i=s.querySelector("#ca-send");i.disabled=!0,i.textContent="กำลังส่ง...";try{const l=[...s.querySelector("#ca-files").files??[]],u=[];for(const h of l)u.push(await ls(h,`class-${m}/announcements`));await En({title:`📣 ${w.class_name}`,body:r,isActive:!0,teacherId:p.id,targetClassIds:[m],annType:a,attachmentUrls:u.length?u:null}),xt(`${a} — ${w.class_name}`,r.slice(0,120),"sc-announcement"),x("ส่งประกาศถึงห้องนี้แล้ว 📣","success"),s.remove(),Q()}catch(l){x("ส่งไม่สำเร็จ: "+N(l),"error"),i.disabled=!1,i.textContent="ส่งประกาศ"}})}let Ue="daily";function en(){document.querySelectorAll(".sc-reftab-btn").forEach(t=>{t.classList.toggle("active",t.dataset.reftab===ce)});const e=qe.find(t=>t.key===ce),s=document.getElementById("sc-mobile-ref-title");s&&e&&(s.textContent=`${e.icon} ${e.label}`)}function Lt(){var s,t,n,r,a,i,l,u,h;const e=[...new Set((D??[]).filter(o=>Number(o.subject_id)===Number(se)).map(o=>Number(o.day_of_week)).map(o=>o===0?7:o).filter(o=>Number.isInteger(o)&&o>=1&&o<=7&&o!==6))];document.querySelectorAll(".sc-sched-tab").forEach(o=>{o.classList.toggle("active",o.dataset.sched===Ue),o.addEventListener("click",()=>{Ue=o.dataset.sched,document.querySelectorAll(".sc-sched-tab").forEach(d=>d.classList.toggle("active",d.dataset.sched===Ue)),document.getElementById("sc-schedule-body").innerHTML=gt(Ue)})}),(s=document.getElementById("sc-add-syllabus"))==null||s.addEventListener("click",()=>It()),(t=document.getElementById("sc-ai-syllabus"))==null||t.addEventListener("click",()=>ps({teacher:p,cls:w,courseId:se,syllabusItems:J,lessonPlans:X,currentWeek:de||1,initialMode:"schedule",semesterStart:L.semester_start,semesterEnd:L.semester_end,scheduledDays:e,onSaved:()=>Q()})),(n=document.getElementById("sc-syllabus-list"))==null||n.addEventListener("click",o=>{const d=o.target.closest(".sc-syllabus-delete");if(d){const k=J.find(B=>B.id===parseInt(d.dataset.sylid,10));if(!k||!confirm(`ลบกำหนดการสอนสัปดาห์ ${k.week_start}${k.week_end!==k.week_start?`–${k.week_end}`:""} เรื่อง "${k.topic}"?`))return;d.disabled=!0,ts(k.id).then(()=>{x("ลบกำหนดการสอนแล้ว","success"),Q()}).catch(B=>{d.disabled=!1,x("ลบไม่สำเร็จ: "+N(B),"error")});return}const b=o.target.closest(".sc-syllabus-row");if(!b)return;const $=J.find(k=>k.id===parseInt(b.dataset.sylid,10));$&&It($)}),(r=document.getElementById("sc-add-plan"))==null||r.addEventListener("click",()=>Ct()),(a=document.getElementById("sc-ai-plan"))==null||a.addEventListener("click",()=>ps({teacher:p,cls:w,courseId:se,syllabusItems:J,lessonPlans:X,currentWeek:de||1,initialMode:"plan",semesterStart:L.semester_start,semesterEnd:L.semester_end,scheduledDays:e,onSaved:()=>Q()})),(i=document.getElementById("sc-sync-plan-pattern"))==null||i.addEventListener("click",async o=>{const d=new Map;for(const q of at()){const M=Number(q.week_start);!Number.isInteger(M)||M<1||(d.has(M)||d.set(M,[]),d.get(M).push(q))}const b=[...d.keys()].sort((q,M)=>q-M),$=d.get(1)??[];if(!d.has(1)||!b.some(q=>q>1)||!$.length)return x("ต้องมีแผนในสัปดาห์ที่ 1 และสัปดาห์ถัดไปก่อน","warning");const k=[];for(const q of b.filter(M=>M>1))(d.get(q)??[]).forEach((C,H)=>{var v,y,E,T;const W=$[H];if(!W)return;const g=Qe(W),re=Qe(C),ee=ht(C),K=String(C.title??"").replace(/(ครั้งที่\s*)\d+/g,`$1${ee}`);re.periodCount===g.periodCount&&re.minutesPerPeriod===g.minutesPerPeriod&&Number(C.duration_minutes)===g.durationMinutes&&Number((v=C.source_json)==null?void 0:v.period_count)===g.periodCount&&Number((y=C.source_json)==null?void 0:y.minutes_per_period)===g.minutesPerPeriod&&Number(C.session_number)===ee&&Number((E=C.source_json)==null?void 0:E.session_in_week)===H+1&&Number((T=C.source_json)==null?void 0:T.sessions_per_week)===$.length&&C.title===K||k.push({plan:C,config:g,sessionNumber:ee,sessionInWeek:H+1,title:K})});if(!k.length)return x("ทุกสัปดาห์ใช้รูปแบบคาบเดียวกับสัปดาห์แรกอยู่แล้ว","success");const B=$.map((q,M)=>{const C=Qe(q);return`ครั้งที่ ${M+1}: ${C.periodCount} คาบ × ${C.minutesPerPeriod} นาที`}).join(", ");if(!confirm(`จะปรับเลขครั้ง ชื่อแผน จำนวนคาบ และเวลารวมของ ${k.length} แผนในสัปดาห์ถัดไป ให้ตรงกับรูปแบบสัปดาห์แรก (${B}) โดยไม่แก้เนื้อหาการสอน ดำเนินการหรือไม่?`))return;const S=o.currentTarget;S.disabled=!0;let f=0;try{for(const{plan:q,config:M,sessionNumber:C,sessionInWeek:H,title:W}of k)await ss(q.id,{title:W,session_number:C,duration_minutes:M.durationMinutes,source_json:{...q.source_json??{},session_number:C,session_in_week:H,sessions_per_week:$.length,period_count:M.periodCount,minutes_per_period:M.minutesPerPeriod,duration_minutes:M.durationMinutes}}),f++;x(`ปรับรูปแบบคาบแล้ว ${f} แผน ✅`,"success"),Q()}catch(q){x(`ปรับแล้ว ${f}/${k.length} แผน ก่อนเกิดข้อผิดพลาด: ${N(q)}`,"error"),Q()}finally{S.disabled=!1}}),(l=document.getElementById("sc-plan-list"))==null||l.addEventListener("click",o=>{const d=o.target.closest(".sc-plan-delete");if(d){const k=X.find(B=>B.id===parseInt(d.dataset.planid,10));if(!k||!confirm(`ลบแผน "${k.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`))return;d.disabled=!0,ns(k.id).then(()=>{x("ลบแผนแล้ว","success"),Q()}).catch(B=>{d.disabled=!1,x("ลบไม่สำเร็จ: "+N(B),"error")});return}const b=o.target.closest(".sc-plan-reflect"),$=o.target.closest(".sc-plan-row");if(b){const k=X.find(B=>B.id===parseInt(b.dataset.planid,10));k&&ur({plan:Re(k),cls:w,teacher:p,classId:m,currentWeek:de||k.week_start,semesterStart:L.semester_start,semesterEnd:L.semester_end,scheduledDays:e})}else if($){const k=X.find(B=>B.id===parseInt($.dataset.planid,10));k&&Ct(Re(k))}}),(u=document.getElementById("sc-add-assignment"))==null||u.addEventListener("click",()=>ot()),(h=document.getElementById("sc-assignment-list"))==null||h.addEventListener("click",o=>{const d=o.target.closest(".sc-assignment-row");if(!d)return;const b=ae.find($=>$.id===parseInt(d.dataset.aid,10));b&&Mt(b)})}Lt();const tn=()=>`
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
      ${ft()}
    </div>`;function sn(){var e,s,t,n,r,a,i,l;(e=document.getElementById("sc-mobile-more-chat"))==null||e.addEventListener("click",kt),(s=document.getElementById("sc-mobile-more-ai"))==null||s.addEventListener("click",$t),(t=document.getElementById("sc-mobile-more-ann"))==null||t.addEventListener("click",()=>{var u;return(u=document.getElementById("sc-add-announcement"))==null?void 0:u.click()}),(n=document.getElementById("sc-mobile-more-dashboard"))==null||n.addEventListener("click",()=>{var u;return(u=document.getElementById("sc-dashboard"))==null?void 0:u.click()}),(r=document.getElementById("sc-mobile-more-switch"))==null||r.addEventListener("click",()=>{var u;return(u=document.getElementById("sc-switch-class"))==null?void 0:u.click()}),(a=document.getElementById("sc-mobile-more-exam"))==null||a.addEventListener("click",()=>{var u;return(u=document.getElementById("sc-mobile-exam-preview"))==null?void 0:u.scrollIntoView({behavior:"smooth",block:"start"})}),(i=document.getElementById("sc-mobile-more-grades"))==null||i.addEventListener("click",()=>ke("grades")),(l=document.getElementById("sc-mobile-more-attendance"))==null||l.addEventListener("click",()=>ke("attendance"))}function nn(){document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.classList.toggle("active",e.dataset.mobileGroup===We))}function rn(){const e=document.getElementById("sc-mobile-ref-subtabs");if(!e)return;const s=We==="plan"?qe.filter(t=>["schedule","syllabus","plans"].includes(t.key)):[];e.innerHTML=s.map(t=>`<button type="button" data-mobile-ref-tab="${t.key}" class="${t.key===ce?"active":""}">${t.icon} ${t.label}</button>`).join(""),e.querySelectorAll("[data-mobile-ref-tab]").forEach(t=>t.addEventListener("click",()=>ke(t.dataset.mobileRefTab)))}async function an(e,s){var n;const t=e==="grades"?"คะแนน":"เช็คชื่อ";s.innerHTML=`<div class="flex flex-col items-center justify-center py-12 gap-3">
      <button id="sc-reopen-overlay" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">เปิดหน้าต่าง${t}อีกครั้ง</button>
    </div>`,(n=s.querySelector("#sc-reopen-overlay"))==null||n.addEventListener("click",()=>ke(e));try{await ir(e==="grades"?Kn:Zn,p,w)}catch(r){console.error(r)}is("my-classes"),ds("Smart Classroom")}async function ke(e){var t;if(!qe.some(n=>n.key===e))return;ce=e,en(),rn(),window.matchMedia("(max-width: 1023px)").matches&&((t=document.getElementById("sc-reference-panel"))==null||t.classList.add("mobile-open"));const s=document.getElementById("sc-reftab-body");if(s){if(e==="grades"||e==="attendance"){await an(e,s);return}s.innerHTML=_t(ce),Lt()}}function jt(e){if(!wt.some(r=>r.key===e))return;We=e,nn();const s=document.getElementById("sc-mobile-room-section"),t=document.getElementById("sc-mobile-live-section");s==null||s.classList.toggle("mobile-active",e==="room"),t==null||t.classList.toggle("mobile-active",e==="live");const n=document.getElementById("sc-reference-panel");if(e==="room"||e==="live"){n==null||n.classList.remove("mobile-open"),window.scrollTo({top:0,behavior:"smooth"});return}if(e==="work")ke("assignments");else if(e==="plan")ke(["schedule","syllabus","plans"].includes(ce)?ce:"syllabus");else{const r=document.getElementById("sc-mobile-ref-title");r&&(r.textContent="••• เพิ่มเติม"),document.getElementById("sc-mobile-ref-subtabs").innerHTML="",document.getElementById("sc-reftab-body").innerHTML=tn(),sn(),n==null||n.classList.add("mobile-open")}}document.querySelectorAll(".sc-reftab-btn").forEach(e=>e.addEventListener("click",()=>ke(e.dataset.reftab))),document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.addEventListener("click",()=>jt(e.dataset.mobileGroup))),(Xt=document.getElementById("sc-mobile-ref-close"))==null||Xt.addEventListener("click",()=>{jt("room")});function It(e){var r,a;(r=document.getElementById("sc-syllabus-modal"))==null||r.remove();const s=!!e,t=e??{},n=document.createElement("div");n.id="sc-syllabus-modal",n.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
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
          <input id="sy-topic" type="text" value="${c(t.topic??"")}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียดเพิ่มเติม</label>
          <textarea id="sy-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none">${c(t.description??"")}</textarea>
        </div>
        <button id="sy-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">บันทึก</button>
      </div>`,document.body.appendChild(n),n.addEventListener("click",i=>{i.target===n&&n.remove()}),n.querySelector("#sy-close").addEventListener("click",()=>n.remove()),(a=n.querySelector("#sy-delete"))==null||a.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้?"))try{await ts(t.id),x("ลบแล้ว","success"),n.remove(),Q()}catch(i){x("ลบไม่สำเร็จ: "+N(i),"error")}}),n.querySelector("#sy-save").addEventListener("click",async()=>{const i=parseInt(n.querySelector("#sy-week-start").value,10),l=parseInt(n.querySelector("#sy-week-end").value,10),u=n.querySelector("#sy-topic").value.trim();if(!i||!l||l<i){x("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}if(!u){x("กรอกหัวข้อก่อนนะ","warning");return}const h=n.querySelector("#sy-save");h.disabled=!0,h.textContent="กำลังบันทึก...";const o={course_id:se,week_start:i,week_end:l,topic:u,description:n.querySelector("#sy-desc").value.trim()||null};try{s?await Bn(t.id,o):await Nn(o),x("บันทึกแล้ว ✅","success"),n.remove(),Q()}catch(d){x("บันทึกไม่สำเร็จ: "+N(d),"error"),h.disabled=!1,h.textContent="บันทึก"}})}function Ct(e){var E,T,j,ue,$e,Te,Ve,Zt;(E=document.getElementById("sc-plan-modal"))==null||E.remove();const s=!!e,t=e?Re(e):{},n=(w==null?void 0:w.master_subjects)??{},r={MATH:"คณิตศาสตร์",THAI:"ภาษาไทย",SCI:"วิทยาศาสตร์และเทคโนโลยี",ENG:"ภาษาต่างประเทศ",SOC:"สังคมศึกษา ศาสนาและวัฒนธรรม",PE:"สุขศึกษาและพลศึกษา",ART:"ศิลปะ",CAREER:"การงานอาชีพ",ISLAM:"อิสลามศึกษา"},a=String(n.dept??n.subject_group??"").trim(),i=r[a.toUpperCase()]||a||"................................",l=String((w==null?void 0:w.class_name)??"").trim(),u=String(n.grade_level??"").replace(/ม\./g,"").trim(),h=/^ม\./.test(l)?l.replace(/^ม\./,""):[u,l].filter(Boolean).join(" "),o=w==null?void 0:w.students,d=(Array.isArray(o)?(T=o[0])==null?void 0:T.full_name:o==null?void 0:o.full_name)??"................................",b=Number(t.duration_minutes)||Number((j=t.source_json)==null?void 0:j.duration_minutes)||45,$=Number((ue=t.source_json)==null?void 0:ue.period_count),k=Number(($e=t.source_json)==null?void 0:$e.minutes_per_period),B=Number.isInteger($)&&$>0?$:b%45===0?b/45:b===100?2:1,S=Number.isInteger(k)&&k>0?k:b%45===0?45:b===100?50:b,q=String(t.unit_title??"").trim().replace(/^หน่วยการเรียนรู้ที่\s*/,"").replace(/^หน่วยที่\s*/,"").replace(/^ที่\s*/,""),M=[...new Set((D??[]).filter(I=>Number(I.subject_id)===Number(se)).map(I=>Number(I.day_of_week)).map(I=>I===0?7:I).filter(I=>Number.isInteger(I)&&I>=1&&I<=7&&I!==6))].sort((I,U)=>I%7-U%7),C=I=>{if(!(L!=null&&L.semester_start)||!Number.isInteger(Number(I))||Number(I)<1||!M.length)return null;const[U,pe,he]=L.semester_start.split("-").map(Number),Se=new Date(U,pe-1,he),Le=new Date(Se);Le.setDate(Se.getDate()-Se.getDay()+(Number(I)-1)*7);const Ae=[];for(let je=0;je<=5;je++){const be=new Date(Le);if(be.setDate(Le.getDate()+je),be<Se||L.semester_end&&be>new Date(`${L.semester_end}T23:59:59`))continue;const dn=be.getDay()||7;M.includes(dn)&&Ae.push(`${be.getFullYear()}-${String(be.getMonth()+1).padStart(2,"0")}-${String(be.getDate()).padStart(2,"0")}`)}return Ae[0]??null},H=t.lesson_date||C(Number(t.week_start||de||1))||"",W=I=>{const U=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(I??""));return U?`${U[3]}/${U[2]}/${String(Number(U[1])+543).slice(-2)}`:"ยังไม่ระบุ"},g=document.createElement("div");g.id="sc-plan-modal",g.className="fixed inset-0 z-[95] bg-slate-100 flex flex-col",g.innerHTML=`
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
        <input id="lp-title" value="${c(t.title??"")}" placeholder="ชื่อแผน *" class="lp-admin-input w-48 lp-hide-mobile">
        <label class="text-[10px] text-gray-500 lp-hide-mobile">สัปดาห์ <input id="lp-week-start" type="number" min="1" value="${t.week_start??""}" class="lp-admin-input w-16 ml-1"></label>
        <label class="text-[10px] text-gray-500 lp-hide-mobile">ถึง <input id="lp-week-end" type="number" min="1" value="${t.week_end??""}" class="lp-admin-input w-16 ml-1"></label>
        <details class="lp-extra"><summary class="h-10 px-3 rounded-xl border flex items-center justify-center text-xs font-bold text-gray-600 bg-white">⚙️ ข้อมูลเพิ่มเติม</summary><div class="lp-extra-content"><div class="grid grid-cols-2 gap-2 mb-2 sm:hidden"><label class="text-[10px] text-gray-500">ชื่อแผน<input id="lp-title-mobile" value="${c(t.title??"")}" class="lp-admin-input w-full mt-1"></label><label class="text-[10px] text-gray-500">สัปดาห์<input id="lp-week-mobile" value="${t.week_start??""}" class="lp-admin-input w-full mt-1"></label></div><label class="block text-[10px] font-bold text-gray-500">งาน/การบ้าน<textarea id="lp-homework" rows="3" class="mt-1">${c(t.homework??"")}</textarea></label><label class="block text-[10px] font-bold text-gray-500 mt-2">หมายเหตุครู<textarea id="lp-teacher_notes" rows="3" class="mt-1">${c(t.teacher_notes??"")}</textarea></label></div></details>
        ${s?'<button id="lp-delete" class="h-10 px-3 flex-none rounded-xl border border-red-100 text-xs font-bold text-red-500 hover:bg-red-50">🗑️ <span class="lp-hide-mobile">ลบ</span></button>':""}
        <button id="lp-save" class="h-10 px-4 flex-none rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm">💾 บันทึกแผน</button>
      </header>
      <main class="lp-editor-scroll">
        <article class="lp-paper animate-fade">
          <section class="lp-head">
            <img src="./pp5-form-logo.png" alt="ตราโรงเรียน">
            <h1>แผนการจัดการเรียนรู้(หน้าเดียว)</h1>
            <h2>กลุ่มสาระการเรียนรู้${c(i)}</h2>
            <p class="lp-subject-line">วิชา ${c(n.subject_name??"")} รหัสวิชา ${c(n.subject_code??"")} ชั้นมัธยมศึกษาปีที่ ${c(h||"................................")}</p>
            <div class="lp-unit-row"><span>หน่วยการเรียนรู้ที่</span><input id="lp-unit-title" class="lp-doc-input" value="${c(q)}" placeholder="เลขหน่วยและชื่อหน่วย"> เรื่อง <input id="lp-key_concept" class="lp-doc-input" value="${c(t.key_concept??"")}" placeholder="เรื่องที่สอน"></div>
          </section>
          <section class="lp-meta">
            <label>ครั้งที่ <input id="lp-session-number" type="number" min="1" class="lp-doc-input" value="${t.session_number??1}"></label>
            <label>จำนวน <input id="lp-period-count" type="number" min="1" class="lp-doc-input" value="${B}"> คาบ</label>
            <label>นาที/คาบ <input id="lp-minutes-per-period" type="number" min="1" class="lp-doc-input" value="${S}"></label>
            <label>รวมเวลา <span><output id="lp-duration-total" class="lp-duration-total">${B*S}</output> นาที</span></label>
            <label>วันที่ <span><input id="lp-lesson-date" type="date" class="lp-doc-input" value="${c(H)}"><small id="lp-date-thai" class="block text-center text-[10px] text-gray-500">${W(H)}</small></span></label>
          </section>
          <section class="lp-columns">
            <div>
              <div class="lp-box"><div class="lp-box-title">1.มาตรฐาน/ตัวชี้วัด (ผลการเรียนรู้)</div><div class="lp-box-body"><textarea id="lp-standards" class="lp-doc-area" rows="5">${c(t.standards??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">2.จุดประสงค์การเรียนรู้</div><div class="lp-box-body"><textarea id="lp-objectives" class="lp-doc-area" rows="5">${c(t.objectives??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">3.กิจกรรมการเรียนรู้</div><div class="lp-box-body lp-activities"><b>ขั้นนำเข้าสู่บทเรียน</b><textarea id="lp-activities_intro" class="lp-doc-area" rows="3">${c(t.activities_intro??"")}</textarea><b>ขั้นสอน</b><textarea id="lp-activities_main" class="lp-doc-area main" rows="7">${c(t.activities_main??"")}</textarea><b>ขั้นสรุป</b><textarea id="lp-activities_wrap" class="lp-doc-area" rows="3">${c(t.activities_wrap??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">4.การวัดและประเมินผล</div><div class="lp-box-body"><textarea id="lp-assessment" class="lp-doc-area" rows="3">${c(t.assessment??"")}</textarea></div></div>
            </div>
            <div>
              <div class="lp-box lp-media"><div class="lp-box-title">5.สื่อการเรียนรู้</div><div class="lp-box-body"><textarea id="lp-media" class="lp-doc-area" rows="3">${c(t.media??"")}</textarea></div></div>
              <div class="lp-sign-pair">
                <div class="lp-sign"><div class="lp-sign-space"></div><div class="lp-sign-row"><span>ลงชื่อ</span><span class="lp-sign-line"></span></div><div>หัวหน้าห้อง</div><div>( ${c(d)} )</div><div>วันที่ <span class="lp-sign-date">${W(H)}</span></div></div>
                <div class="lp-sign"><div class="lp-sign-space"></div><div class="lp-sign-row"><span>ลงชื่อ</span><span class="lp-sign-line"></span></div><div>ครูผู้สอน</div><div>( ${c((p==null?void 0:p.full_name)??"................................")} )</div><div>วันที่ <span class="lp-sign-date">${W(H)}</span></div></div>
              </div>
              <div class="lp-reflect"><h3>บันทึกหลังการสอน</h3><div class="lp-rule">ผลการจัดการเรียนรู้:</div><div class="lp-rule"></div><div class="lp-rule">แนวทางการแก้ปัญหา:</div><div class="lp-rule"></div></div>
              <div class="lp-suggestion"><h3>ข้อเสนอแนะ</h3><div class="lp-rule"></div><div class="lp-rule"></div><div class="lp-rule"></div></div>
              <div class="lp-dept-sign">ลงชื่อ <span class="lp-sign-line"></span> หัวหน้ากลุ่มสาระ<div>( ................................ )</div><div>วันที่ ................................</div></div>
            </div>
          </section>
        </article>
      </main>`,document.body.appendChild(g),g.querySelector("#lp-close").addEventListener("click",()=>g.remove());const re=()=>{const I=Math.max(1,parseInt(g.querySelector("#lp-period-count").value,10)||1),U=Math.max(1,parseInt(g.querySelector("#lp-minutes-per-period").value,10)||45);g.querySelector("#lp-duration-total").textContent=String(I*U)};g.querySelector("#lp-period-count").addEventListener("input",re),g.querySelector("#lp-minutes-per-period").addEventListener("input",re);const ee=g.querySelector("#lp-title"),K=g.querySelector("#lp-title-mobile");K==null||K.addEventListener("input",()=>{ee.value=K.value}),ee==null||ee.addEventListener("input",()=>{K&&(K.value=ee.value)}),(Te=g.querySelector("#lp-week-mobile"))==null||Te.addEventListener("input",I=>{g.querySelector("#lp-week-start").value=I.target.value,g.querySelector("#lp-week-end").value=I.target.value});let v=H;const y=()=>{const I=g.querySelector("#lp-lesson-date"),U=C(parseInt(g.querySelector("#lp-week-start").value,10));U&&(!I.value||I.value===v)&&(I.value=U,v=U);const pe=W(I.value);g.querySelector("#lp-date-thai").textContent=pe,g.querySelectorAll(".lp-sign-date").forEach(he=>{he.textContent=pe})};g.querySelector("#lp-lesson-date").addEventListener("change",()=>{const I=g.querySelector("#lp-lesson-date").value;v="";const U=W(I);g.querySelector("#lp-date-thai").textContent=U,g.querySelectorAll(".lp-sign-date").forEach(pe=>{pe.textContent=U})}),g.querySelector("#lp-week-start").addEventListener("change",y),(Ve=g.querySelector("#lp-week-mobile"))==null||Ve.addEventListener("change",y),(Zt=g.querySelector("#lp-delete"))==null||Zt.addEventListener("click",async()=>{if(confirm(`ลบแผน "${t.title}"? บันทึกหลังสอน/ลายเซ็นที่ผูกกับแผนนี้จะหายไปด้วย`))try{await ns(t.id),x("ลบแผนแล้ว","success"),g.remove(),Q()}catch(I){x("ลบไม่สำเร็จ: "+N(I),"error")}}),g.querySelector("#lp-save").addEventListener("click",async()=>{const I=g.querySelector("#lp-title").value.trim(),U=parseInt(g.querySelector("#lp-week-start").value,10),pe=parseInt(g.querySelector("#lp-week-end").value,10);if(!I){x("กรอกชื่อแผนก่อนนะ","warning");return}if(!U||!pe||pe<U){x("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}const he=g.querySelector("#lp-save");he.disabled=!0,he.textContent="กำลังบันทึก...";const Se=Math.max(1,parseInt(g.querySelector("#lp-period-count").value,10)||1),Le=Math.max(1,parseInt(g.querySelector("#lp-minutes-per-period").value,10)||45),Ae=Se*Le,je={course_id:se,teacher_id:p.id,title:I,week_start:U,week_end:pe,session_number:parseInt(g.querySelector("#lp-session-number").value,10)||1,lesson_date:g.querySelector("#lp-lesson-date").value||C(U)||null,duration_minutes:Ae,source_json:{...t.source_json??{},period_count:Se,minutes_per_period:Le,duration_minutes:Ae},unit_title:g.querySelector("#lp-unit-title").value.trim()||null,standards:g.querySelector("#lp-standards").value.trim()||null,objectives:g.querySelector("#lp-objectives").value.trim()||null,key_concept:g.querySelector("#lp-key_concept").value.trim()||null,activities_intro:g.querySelector("#lp-activities_intro").value.trim()||null,activities_main:g.querySelector("#lp-activities_main").value.trim()||null,activities_wrap:g.querySelector("#lp-activities_wrap").value.trim()||null,media:g.querySelector("#lp-media").value.trim()||null,assessment:g.querySelector("#lp-assessment").value.trim()||null,homework:g.querySelector("#lp-homework").value.trim()||null,teacher_notes:g.querySelector("#lp-teacher_notes").value.trim()||null};try{s?await ss(t.id,je):await Pn(je),x("บันทึกแผนแล้ว ✅","success"),g.remove(),Q()}catch(be){x("บันทึกไม่สำเร็จ: "+N(be),"error"),he.disabled=!1,he.textContent="บันทึกแผน"}})}const on=e=>{if(!e)return"";const s=new Date(e),t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`};function ot(e){var B,S;(B=document.getElementById("sc-assign-modal"))==null||B.remove();const s=!!e,t=e??{};let n=[...t.attachment_urls??[]];const r=document.createElement("div");r.id="sc-assign-modal",r.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
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
          <input id="sa-title" type="text" value="${c(t.title??"")}" placeholder="เช่น ใบงานที่ 3 — สมการเชิงเส้น" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label>
          <textarea id="sa-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300">${c(t.description??"")}</textarea>
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
            ${z.map(f=>`<option value="${f.id}" ${t.score_column_id===f.id?"selected":""}>${c(f.assignment_name)} (เต็ม ${f.max_score})</option>`).join("")}
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
              ${Object.entries(Ke).map(([f,q])=>`<option value="${f}" ${(t.score_write_mode??"overwrite")===f?"selected":""}>${q.label}</option>`).join("")}
            </select>
            <p id="sa-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">กำหนดส่ง</label>
          <input id="sa-due" type="datetime-local" value="${on(t.due_at)}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
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
      </div>`,document.body.appendChild(r),r.addEventListener("click",f=>{f.target===r&&r.remove()}),r.querySelector("#sa-close").addEventListener("click",()=>r.remove()),(S=r.querySelector("#sa-delete"))==null||S.addEventListener("click",async()=>{if(confirm(`ลบงาน "${t.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await es(t.id),x("ลบงานแล้ว","success"),r.remove(),Q()}catch(f){x("ลบไม่สำเร็จ: "+N(f),"error")}});const a=r.querySelector("#sa-kept-files"),i=()=>{a.innerHTML=n.map((f,q)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${c(f.name)}
          <button type="button" class="sa-remove-file text-indigo-400 hover:text-red-500 font-bold" data-i="${q}">✕</button>
        </span>`).join(""),a.querySelectorAll(".sa-remove-file").forEach(f=>f.addEventListener("click",()=>{n.splice(parseInt(f.dataset.i,10),1),i()}))};i();const l=r.querySelector("#sa-penalty-mode"),u=r.querySelector("#sa-penalty-value"),h=r.querySelector("#sa-penalty-hint");l.addEventListener("change",()=>{u.disabled=l.value==="none",u.disabled?(u.classList.add("bg-gray-50"),u.value=""):u.classList.remove("bg-gray-50"),h.textContent=l.value==="flat"?"หักคะแนนเท่านี้ทันทีถ้าส่งช้า ไม่ว่าจะช้ากี่วัน":l.value==="per_day"?"หักคะแนนเท่านี้ต่อวันที่ส่งช้า (คูณตามจำนวนวัน)":""});const o=r.querySelector("#sa-col"),d=r.querySelector("#sa-write-mode-wrap"),b=r.querySelector("#sa-write-mode"),$=r.querySelector("#sa-write-mode-hint"),k=()=>{var f;d.classList.toggle("hidden",!o.value),$.textContent=((f=Ke[b.value])==null?void 0:f.hint)??""};o.addEventListener("change",k),b.addEventListener("change",k),k(),r.querySelector("#sa-save").addEventListener("click",async()=>{const f=r.querySelector("#sa-title").value.trim();if(!f){x("กรอกชื่องานก่อนนะ","warning");return}const q=r.querySelector("#sa-save");q.disabled=!0,q.textContent="กำลังบันทึก...";try{const M=[...r.querySelector("#sa-files").files??[]],C=[];for(const re of M)C.push(await ls(re,`class-${m}`));const H=r.querySelector("#sa-due").value,W=r.querySelector("#sa-max-score").value.trim(),g={score_column_id:o.value?parseInt(o.value,10):null,title:f,description:r.querySelector("#sa-desc").value.trim()||null,attachment_urls:[...n,...C],due_at:H?new Date(H).toISOString():null,late_penalty_mode:l.value,late_penalty_value:parseFloat(u.value)||0,score_write_mode:b.value,max_score:W===""?null:parseFloat(W)};s?(await qn(t.id,g),x("บันทึกการแก้ไขแล้ว ✅","success")):(await Ln({...g,class_id:m,teacher_id:p.id}),xt(`📚 งานใหม่ — ${w.class_name}`,f,"sc-assignment"),x("สั่งงานสำเร็จ ✅","success")),r.remove(),Q()}catch(M){x("บันทึกไม่สำเร็จ: "+N(M),"error"),q.disabled=!1,q.textContent=s?"บันทึกการแก้ไข":"บันทึกงาน"}})}function Mt(e){var l,u,h;(l=document.getElementById("sc-track-modal"))==null||l.remove();const s=Object.fromEntries(e.submissions.map(o=>[o.student_id,o]));z.find(o=>o.id===e.score_column_id);const t=document.createElement("div");t.id="sc-track-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-fade">
        <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-bold text-gray-800 truncate">${c(e.title)}</p>
              <p class="text-xs text-gray-400 mt-0.5">${e.description?c(e.description)+" · ":""}กำหนดส่ง ${tt(e.due_at)}</p>
              ${(u=e.attachment_urls)!=null&&u.length?`<div class="flex flex-wrap gap-1.5 mt-2">${e.attachment_urls.map(o=>`<a href="${c(o.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${c(o.name)}</a>`).join("")}</div>`:""}
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
      </div>`,document.body.appendChild(t);const n=o=>{var S;const d=`<div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[10px] flex-shrink-0">
        ${o.image_url?`<img src="${c(o.image_url)}" class="w-full h-full object-cover"/>`:c((o.full_name??"?").charAt(0))}
      </div>`,b=`<span class="text-gray-400 font-mono text-[10px] flex-shrink-0">#${ne.get(o.id)??"—"}</span>`,$=s[o.id];if(!$)return`<div class="sc-track-row flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs cursor-pointer hover:border-indigo-200" data-sid="${o.id}">
        <div class="flex items-center gap-2 min-w-0">
          ${d}
          ${b}
          <span class="font-semibold text-gray-600 truncate">${c(o.full_name??"")}</span>
        </div>
        <span class="text-gray-300 font-medium flex-shrink-0">ยังไม่ส่ง</span>
      </div>`;const k=Oe(e,$.submitted_at),B=Ge($);return`<div class="sc-track-row px-3 py-2.5 rounded-xl border ${k?"border-amber-200 bg-amber-50":"border-gray-100 bg-gray-50"} text-xs cursor-pointer hover:border-indigo-200" data-sid="${o.id}">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${d}
            ${b}
            <span class="font-semibold text-gray-700 truncate">${c(o.full_name??"")}</span>
          </div>
          <span class="text-gray-400 flex-shrink-0">${new Date($.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</span>
        </div>
        <div class="flex items-center justify-between mt-1.5">
          ${(S=$.file_urls)!=null&&S.length?`<div class="flex flex-wrap gap-1.5">${$.file_urls.map(f=>`<span class="text-[10px] px-2 py-1 rounded-lg bg-white border border-gray-200 text-indigo-600">📎 ${c(f.name)}</span>`).join("")}</div>`:"<span></span>"}
          ${Tt(B)}
        </div>
        ${k?`<p class="text-[10px] text-amber-700 font-bold mt-1.5">⏰ ส่งช้า ${nt(e,$.submitted_at)} วัน</p>`:""}
      </div>`};let r=!1;const a=()=>{const o=r?[..._].sort((d,b)=>At[Ge(s[d.id])]-At[Ge(s[b.id])]):_;t.querySelector("#st-row-list").innerHTML=o.map(n).join(""),t.querySelectorAll(".sc-track-row").forEach(d=>d.addEventListener("click",()=>{Bt(e,parseInt(d.dataset.sid,10))}))};t._refresh=a,a(),t.addEventListener("click",o=>{o.target===t&&t.remove()}),t.querySelector("#st-close").addEventListener("click",()=>t.remove()),t.querySelector("#st-edit").addEventListener("click",()=>{t.remove(),ot(e)}),t.querySelector("#st-delete").addEventListener("click",async()=>{if(confirm(`ลบงาน "${e.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await es(e.id),x("ลบงานแล้ว","success"),t.remove(),Q()}catch(o){x("ลบไม่สำเร็จ: "+N(o),"error")}}),t.querySelector("#st-sort-toggle").addEventListener("change",o=>{r=o.target.checked,a()});const i=()=>{var o;return(o=_.find(d=>s[d.id])??_[0])==null?void 0:o.id};(h=t.querySelector("#st-review-start"))==null||h.addEventListener("click",()=>{const o=i();o!=null&&Bt(e,o)})}const Ge=e=>e?e.status==="rejected"?"rejected":e.hasScore?"graded":e.reviewed_at?"reviewed":"unreviewed":"unsubmitted",Tt=e=>({unreviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex-shrink-0">🔵 ยังไม่ตรวจ</span>',reviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">🟡 ตรวจแล้ว ยังไม่ให้คะแนน</span>',graded:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">✅ ให้คะแนนแล้ว</span>',rejected:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex-shrink-0">❌ ตีกลับ รอส่งใหม่</span>'})[e]??"",At={unreviewed:0,unsubmitted:1,reviewed:2,rejected:3,graded:4},lt={praise:["ทำได้ดีมากครับ/ค่ะ เห็นความตั้งใจชัดเจน ขอให้อัลลอฮ์ทรงประทานบารอกัตในความพยายามของเธอนะ 🌟","เก่งมากเลย ครูภูมิใจในตัวเธอ ขอดุอาอ์ให้พัฒนาต่อไปเรื่อยๆ อินชาอัลลอฮ์","ยอดเยี่ยม! งานชิ้นนี้แสดงถึงความพยายามที่ดีมาก ขอให้เป็นบารอกัตติดตัวเธอไปตลอด","สุดยอดค่ะ/ครับ ทำมาได้ดีมาก ครูขอดุอาอ์ให้เธอประสบความสำเร็จเสมอ"],improve:["ทำได้ดีในหลายจุดแล้วนะ ลองทบทวนอีกครั้งในส่วนที่ยังไม่สมบูรณ์ ครูเชื่อว่าเธอทำได้ดีกว่านี้ อินชาอัลลอฮ์","ครูเห็นความตั้งใจแล้ว ลองกลับไปทบทวนเพิ่มอีกนิดแล้วส่งใหม่ได้นะ ครูให้กำลังใจอยู่เสมอ","ยังไม่สมบูรณ์เท่าที่ควร แต่ไม่เป็นไรนะ ทุกความผิดพลาดคือบทเรียน ลองแก้ไขแล้วส่งมาใหม่ได้เลย","อยากให้ตรวจทานอีกรอบก่อนส่งครั้งหน้า ครูเชื่อมั่นในศักยภาพของเธอ ขอให้อัลลอฮ์ทรงช่วยให้เข้าใจง่ายขึ้นนะ"]},ln=e=>{var t;const s=((t=(e.name??"").split(".").pop())==null?void 0:t.toLowerCase())??"";return["jpg","jpeg","png","gif","webp"].includes(s)?"image":s==="pdf"?"pdf":"other"};function Bt(e,s){var h;(h=document.getElementById("sc-grade-card"))==null||h.remove();const t=Object.fromEntries(e.submissions.map(o=>[o.student_id,o])),n=z.find(o=>o.id===e.score_column_id);let r=Math.max(0,_.findIndex(o=>o.id===s));const a=document.createElement("div");a.id="sc-grade-card",a.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/55 p-4",document.body.appendChild(a);const i=e.max_score!=null?parseFloat(e.max_score):n?parseFloat(n.max_score):null,l=()=>{var q,M,C,H,W,g,re,ee,K,v;const o=_[r],d=t[o.id],b=d&&Oe(e,d.submitted_at),$=d?As(e,d.submitted_at):0,k=d!=null&&d.hasScore?d.savedScore??"":i!=null?Math.max(0,(i||0)-$):"";d&&!d.reviewed_at&&(d.reviewed_at=new Date().toISOString(),Cn(e.id,o.id).catch(()=>{}));const B=d&&(q=d.file_urls)!=null&&q.length?d.file_urls.map(y=>{const E=ln(y);return E==="image"?`<a href="${c(y.url)}" target="_blank" rel="noopener" class="block rounded-xl overflow-hidden border border-gray-200 mb-2"><img src="${c(y.url)}" class="w-full max-h-72 object-contain bg-gray-50" loading="lazy" /></a>`:E==="pdf"?`<iframe src="${c(y.url)}" class="w-full h-72 rounded-xl border border-gray-200 mb-2"></iframe>`:`<a href="${c(y.url)}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-indigo-600 hover:bg-indigo-50 mb-2">📎 ${c(y.name)} <span class="text-gray-400">(เปิดแท็บใหม่ — ไม่รองรับพรีวิว)</span></a>`}).join(""):"";a.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <button id="sgc-prev" ${r<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-11 h-11 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0">
                ${o.image_url?`<img src="${c(o.image_url)}" class="w-full h-full object-cover"/>`:c((o.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate text-sm">${c(o.full_name??"—")}</p>
                <p class="text-[11px] text-gray-400">เลขที่ ${ne.get(o.id)??"—"} · ${c(o.student_code??"")}</p>
              </div>
              <button id="sgc-next" ${r>=_.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sgc-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sgc-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sgc-jump" type="number" min="1" max="${_.length}" value="${ne.get(o.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${_.length}</span>
              <span class="text-[11px] text-gray-300 ml-auto">${r+1} / ${_.length} คน</span>
            </div>
            ${d?`<div class="mt-2">${Tt(Ge(d))}</div>`:""}
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${d?`
              <p class="text-[11px] text-gray-400 mb-2">ส่งเมื่อ ${new Date(d.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</p>
              ${b?`<p class="text-[11px] text-amber-700 font-bold mb-2">⏰ ส่งช้า ${nt(e,d.submitted_at)} วัน${$>0?` — หักคะแนนแนะนำ ${$}`:""}</p>`:""}
              ${B}
              ${d.note?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3"><p class="text-[10px] font-bold text-gray-400 mb-0.5">ข้อความจากนักเรียน</p><p class="text-xs text-gray-600">${c(d.note)}</p></div>`:""}
              ${n?`<div class="mb-3">
                <div class="flex items-center gap-2">
                  <input id="sgc-grade" type="number" min="0" max="${i??""}" class="w-20 text-center border border-gray-200 rounded-lg px-1 py-1.5 font-mono font-bold text-indigo-600" value="${k}" placeholder="—" />
                  <span class="text-xs text-gray-400">/ ${i??n.max_score}</span>
                  <button id="sgc-grade-save" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg ml-auto">บันทึกคะแนน</button>
                </div>
                <p class="text-[10px] text-gray-400 mt-1">โหมดคะแนน: ${((M=Ke[e.score_write_mode??"overwrite"])==null?void 0:M.label)??""} · บันทึกอัตโนมัติเมื่อออกจากช่องกรอก</p>
              </div>`:'<p class="text-[11px] text-gray-300 mb-3">งานนี้ไม่ได้ผูกกับคอลัมน์คะแนน</p>'}
              <div>
                <label for="sgc-feedback" class="text-[11px] font-bold text-gray-500 mb-1 block">คอมเมนต์ถึงนักเรียน</label>
                <div class="flex flex-wrap gap-1.5 mb-1.5">
                  <span class="text-[10px] text-gray-400 flex items-center">💚 ชื่นชม:</span>
                  ${lt.praise.map((y,E)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100" data-tmpl="praise-${E}">ตัวอย่าง ${E+1}</button>`).join("")}
                </div>
                <div class="flex flex-wrap gap-1.5 mb-2">
                  <span class="text-[10px] text-gray-400 flex items-center">💡 ปรับปรุง:</span>
                  ${lt.improve.map((y,E)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100" data-tmpl="improve-${E}">ตัวอย่าง ${E+1}</button>`).join("")}
                </div>
                <textarea id="sgc-feedback" rows="2" placeholder="เช่น ทำได้ดีมาก แต่ข้อ 3 ทบทวนอีกครั้ง — หรือกดตัวอย่างด้านบนแล้วแก้ไขต่อได้" class="w-full text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none">${c(d.teacher_feedback??"")}</textarea>
                <div class="flex items-center gap-2 mt-1.5">
                  <button id="sgc-feedback-save" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">บันทึกคอมเมนต์</button>
                  ${d.status==="rejected"?'<span class="text-[11px] text-red-500 font-semibold">❌ ตีกลับแล้ว รอนักเรียนส่งใหม่</span>':'<button id="sgc-reject" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 ml-auto">❌ ตีกลับให้แก้ไข</button>'}
                </div>
              </div>`:`
              <div class="text-center py-10 text-gray-300">
                <p class="text-3xl mb-2">📭</p>
                <p class="text-sm font-semibold text-gray-400">ยังไม่ส่งงานชิ้นนี้</p>
              </div>`}
          </div>
        </div>`,a.querySelector("#sgc-close").addEventListener("click",()=>u()),(C=a.querySelector("#sgc-prev"))==null||C.addEventListener("click",()=>{r>0&&(r--,l())}),(H=a.querySelector("#sgc-next"))==null||H.addEventListener("click",()=>{r<_.length-1&&(r++,l())});const S=()=>{const y=a.querySelector("#sgc-jump"),E=parseInt(y.value,10),T=ct.get(E);if(!T){x(`ไม่พบเลขที่ ${y.value}`,"warning"),y.value=ne.get(o.id)??"";return}const j=_.findIndex(ue=>ue.id===T.id);j!==r&&(r=j,l())};(W=a.querySelector("#sgc-jump"))==null||W.addEventListener("change",S),(g=a.querySelector("#sgc-jump"))==null||g.addEventListener("keydown",y=>{y.key==="Enter"&&S()});const f=async()=>{const y=a.querySelector("#sgc-grade-save"),E=a.querySelector("#sgc-grade").value.trim(),T=E===""?0:parseFloat(E);if(!Number.isFinite(T)||T<0||i!=null&&T>i){x(`คะแนนต้องอยู่ระหว่าง 0 – ${i??n.max_score}`,"warning");return}y.disabled=!0;try{const j=await An(e.id,o.id,T);d.hasScore=!0,d.savedScore=T;const ue=ie[o.id]??(ie[o.id]=[]);let $e=ue.find(Ve=>Ve.score_column_id===j.columnId);$e||($e={student_id:o.id,score_column_id:j.columnId},ue.push($e)),Object.assign($e,{score:j.score,original_score:j.originalScore,retake_score:j.retakeScore,final_score:j.finalScore,score_history:j.scoreHistory}),Jn(j);const Te=document.getElementById("sc-roster");Te&&(Te.innerHTML=Fe()),x("บันทึกคะแนนแล้ว ✅","success"),l()}catch(j){x("บันทึกไม่สำเร็จ: "+N(j),"error"),y.disabled=!1}};(re=a.querySelector("#sgc-grade-save"))==null||re.addEventListener("click",f),(ee=a.querySelector("#sgc-grade"))==null||ee.addEventListener("change",f),a.querySelectorAll(".sgc-tmpl").forEach(y=>y.addEventListener("click",()=>{const[E,T]=y.dataset.tmpl.split("-"),j=a.querySelector("#sgc-feedback");j.value=lt[E][parseInt(T,10)],j.focus()})),(K=a.querySelector("#sgc-feedback-save"))==null||K.addEventListener("click",async()=>{const y=a.querySelector("#sgc-feedback-save"),E=a.querySelector("#sgc-feedback").value.trim();y.disabled=!0;try{await Mn(e.id,o.id,E),d.teacher_feedback=E,x("บันทึกคอมเมนต์แล้ว ✅","success")}catch(T){x("บันทึกไม่สำเร็จ: "+N(T),"error")}finally{y.disabled=!1}}),(v=a.querySelector("#sgc-reject"))==null||v.addEventListener("click",async()=>{const y=a.querySelector("#sgc-feedback").value.trim();if(!y){x("กรอกเหตุผลในช่องคอมเมนต์ก่อนตีกลับงาน","warning"),a.querySelector("#sgc-feedback").focus();return}if(!confirm(`ตีกลับงานของ "${o.full_name}" ให้แก้ไขใหม่?

เหตุผล: ${y}`))return;const E=a.querySelector("#sgc-reject");E.disabled=!0;try{await Tn(e.id,o.id,y),d.status="rejected",d.teacher_feedback=y,x("ตีกลับงานแล้ว — นักเรียนจะเห็นเหตุผลนี้และส่งใหม่ได้","success"),l()}catch(T){x("ตีกลับไม่สำเร็จ: "+N(T),"error"),E.disabled=!1}})},u=()=>{var o,d;a.remove(),(d=(o=document.getElementById("sc-track-modal"))==null?void 0:o._refresh)==null||d.call(o)};a.addEventListener("click",o=>{o.target===a&&u()}),l()}}export{br as canUseSmartClassroomForClass,xr as findCurrentOrNextClass,sa as openSmartClassroomLanding,we as renderSmartClassroom,_s as resolveSmartClassroomAccess};
