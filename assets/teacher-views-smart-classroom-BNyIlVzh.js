const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-C8BgK7Kc.js","assets/ui-Dh03k4iX.js","assets/quiz-api-DaBneRGn.js","assets/supabase-BV-W2lsh.js","assets/import-D0GLDW1_.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/katex-loader-DUJObfzT.js","assets/chat-classroom-BIeRyAHR.js","assets/api-1xsyVspL.js","assets/student-api-q3ZleCC5.js","assets/storage-D6nkcVz6.js"])))=>i.map(i=>d[i]);
import{a as b,l as Ds,_ as Bt}from"./ui-Dh03k4iX.js";import{getSystemConfig as Gt,getMyClasses as _e,getMySchedule as Yt,getClassScheduleLinks as Xt,getPeriods as Zt,setSmartClassroomFreeClass as Jt,getClassStudents as Fs,getActiveLeavePermissionsForClass as Ns,getLeaveMaxActiveForClass as Rs,getLeaveMaxPerStudentWeekForClass as Os,getScoreColumns as Qs,getStudentScores as Us,getClassAttendanceAllFull as Ws,getClassLeaveHistory as Vs,getClassAssignmentsWithSubmissions as Gs,getTeacherExamRequests as Ys,getClassAnnouncements as Xs,getAnnouncementTypeSuggestions as Zs,getCourseSyllabus as Js,getLessonPlans as Ks,getClassSessionDOWs as en,closeLeavePermission as zt,createAnnouncement as tn,deleteAssignment as Ht,updateAssignment as sn,createAssignment as nn,getMyDonationRequests as an,saveStudentScore as rn,markAssignmentSubmissionReviewed as ln,saveAssignmentFeedback as on,rejectAssignmentSubmission as dn,saveAssignmentGrade as cn,deleteSyllabusItem as un,updateSyllabusItem as pn,createSyllabusItem as mn,deleteLessonPlan as xn,updateLessonPlan as bn,createLessonPlan as gn}from"./api-1xsyVspL.js";import{_ as ze,a as Kt,b as fn}from"./teacher-SRnLzIgv.js";import{l as yn,m as Pt,s as vn,n as hn,o as wn,a as _n,h as kn,g as $n,p as Sn}from"./quiz-api-DaBneRGn.js";import{openScoreScanner as En}from"./score-qr-scanner-SDrghEsT.js";import{_openAttendanceModalForSession as Dt,_openLeaveQuotaModal as qn,openAttendanceScanSetup as Ln,_openLeaveRequestModal as jn}from"./teacher-views-attendance-C31WiJPz.js";import{openQuizMonitor as Ft}from"./teacher-views-quiz-monitor-BIcUtV1X.js";import{openQuizAnalytics as In}from"./teacher-views-quiz-analytics-CZtaCsWK.js";import{openClassDashboard as Cn}from"./teacher-views-dashboard-MihUIb1e.js";import{d as we,o as Mn,_ as Tn,i as An}from"./teacher-views-classes-s_CI5F_w.js";import{n as Nt}from"./storage-D6nkcVz6.js";import{_htmlEsc as l,setActiveNav as Bn,setTitle as zn,setContent as Be,_currentWeek as Hn,_generateSessions as Pn,_dateInputValue as Dn,ATT_STATUS as Rt}from"./teacher-views-utils-B2Iz3UWp.js";import{s as Fn}from"./supabase-BV-W2lsh.js";import{p as Nn,d as Rn,e as Ot}from"./teacher-views-grades-DyBe1K7u.js";import{openLessonPlanAIWorkspace as Qt,openLessonPlanDocument as On}from"./lesson-plan-ai-workspace-Be7c01S6.js";import"./promptpay-CIuxvxIA.js";import"./browser-JP79f-a9.js";import"./sports-portals.js_v_10.22-BrIjazIR.js";import"./impersonation-C66q0Y-O.js";import"./theme-DIdoXkqD.js";import"./anti-pull-refresh-BGrI1pMY.js";import"./push-notify-qsIWmalF.js";import"./wen-sso-CcN06Rhh.js";import"./azfutsal-modal-wts4xj80.js";import"./tutorial-FuIPnEx0.js";import"./terangganu-api-C1IjZK4l.js";import"./regrade-api-C8s-TuM0.js";import"./leave-time-CrS9gT63.js";import"./pp5-doc-CVTwqJKw.js";import"./confetti-loader-BAN5Lv-C.js";function Qn(p){var m;return((m=String((p==null?void 0:p.donationSpecialFeatures)??"").split(`
`).map(I=>{const T=I.split("|");return{text:T[1]??"",minTier:parseInt(T[2])||1}}).find(I=>I.text.includes("Smart Classroom")))==null?void 0:m.minTier)??4}async function es(p){const m=await Gt().catch(()=>window._pp5SystemCfg??{}),I=Qn(m);let T=window._pp5DonorTierIndex??0,O=[];if(p!=null&&p.id)try{O=await an(p.id);const A=O.filter($=>$.package_type==="donation"&&$.status==="approved").reduce(($,Q)=>$+(Q.amount??0),0),f=ze(m.donationMinAmount,49),y=ze(m.donationAmountStep,50),F=Kt(m,f,y);T=fn(m,F,A)}catch{}return{cfg:m,minTier:I,unlocked:T>=I,donationRequests:O}}function Un(p,m){var T;return ze(p.donationMinAmount,49),ze(p.donationAmountStep,50),((T=Kt(p)[m-1])==null?void 0:T.amount)??null}function Wn(p,m,I){return p?!0:(m==null?void 0:m.smart_classroom_free_class_id)===I}async function ts(p,m,{preselectClassId:I=null,onPicked:T}={}){var f;(f=document.getElementById("sc-pick-modal"))==null||f.remove();const O=await _e(p.id).catch(()=>[]),A=document.createElement("div");A.id="sc-pick-modal",A.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/60 p-4",A.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
      <div class="px-6 pt-6 pb-4 flex-shrink-0 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <div class="text-4xl mb-1">🎁</div>
        <h3 class="text-white font-extrabold text-base">ใช้ Smart Classroom ฟรี 1 ห้องเรียน</h3>
        <p class="text-white/80 text-[11px] mt-1 leading-relaxed">เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด<br>หากต้องการเปลี่ยนห้องภายหลังต้องติดต่อแอดมิน</p>
      </div>
      <div class="overflow-y-auto flex-1 p-4 space-y-2">
        ${O.length?O.map(y=>`
          <label class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition hover:border-amber-300 ${y.id===I?"border-amber-400 bg-amber-50":"border-gray-200"}">
            <input type="radio" name="sc-pick-class" value="${y.id}" class="w-4 h-4" ${y.id===I?"checked":""} />
            <span class="text-sm font-semibold text-gray-700">${l(y.class_name)}</span>
          </label>`).join(""):'<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>'}
      </div>
      <div class="p-4 flex-shrink-0 border-t border-gray-100">
        <button id="sc-pick-confirm" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)" ${O.length?"":"disabled"}>✅ ยืนยันใช้ห้องนี้</button>
        <button id="sc-pick-cancel" class="w-full py-2 mt-1.5 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(A),A.addEventListener("click",y=>{y.target===A&&A.remove()}),A.querySelector("#sc-pick-cancel").addEventListener("click",()=>A.remove()),A.querySelector("#sc-pick-confirm").addEventListener("click",async()=>{const y=A.querySelector('input[name="sc-pick-class"]:checked');if(!y){b("กรุณาเลือกห้องเรียน","warning");return}const F=parseInt(y.value),$=A.querySelector("#sc-pick-confirm");$.disabled=!0,$.textContent="กำลังบันทึก...";try{if(!await Jt(p.id,F)){b("มีการเลือกห้องไปแล้วก่อนหน้านี้ กรุณาลองใหม่","error"),A.remove();return}p.smart_classroom_free_class_id=F,A.remove(),b("เลือกห้องฟรีสำเร็จ ✅","success"),T==null||T(F)}catch(Q){b("บันทึกไม่สำเร็จ: "+(Q.message??""),"error"),$.disabled=!1,$.textContent="✅ ยืนยันใช้ห้องนี้"}})}function Ut(p){const m=Math.max(0,Math.floor((Date.now()-new Date(p).getTime())/6e4));return m<1?"<1 นาที":`${m} นาที`}const Wt="pp5_sc_skip_popup";async function Vn(p){var ie,B,J,fe;const m=window._pp5SystemCfg??await Gt().catch(()=>({})),I=parseInt(m.academicYear??2568),T=parseInt(m.semester??1),[O,A,f,y]=await Promise.all([_e(p.id).catch(()=>[]),Yt(p.id,I,T).catch(()=>[]),Xt(p.id).catch(()=>[]),Zt().catch(()=>[])]);if(!O.length)return{classId:null,mode:"none"};const F=Object.fromEntries(y.map(M=>[M.period_no,M])),$=Object.fromEntries(A.map(M=>[M.id,M])),Q=[];for(const M of f){const Y=$[M.teacher_schedule_id];if(!Y)continue;const de=(Y.period_no??1)+(Y.span_periods??1)-1;Q.push({classId:M.class_id,day_of_week:Y.day_of_week,period:F[Y.period_no],actualEndPeriod:F[de]??F[Y.period_no]})}const R=new Date,oe=R.getDay(),L=R.getHours()*3600+R.getMinutes()*60+R.getSeconds();for(const M of Q){if(M.day_of_week!==oe||!((ie=M.period)!=null&&ie.start_time)||!((B=M.actualEndPeriod)!=null&&B.end_time))continue;const[Y,de]=M.period.start_time.split(":").map(Number),[ce,U]=M.actualEndPeriod.end_time.split(":").map(Number),X=Y*3600+de*60,ke=ce*3600+U*60;if(L>=X&&L<ke)return{classId:M.classId,mode:"live"}}let ee=null;for(const M of Q){if(!((J=M.period)!=null&&J.start_time))continue;const[Y,de]=M.period.start_time.split(":").map(Number),ce=Y*3600+de*60;let U=(M.day_of_week-oe+7)%7;U===0&&ce<=L&&(U=7);const X=U*86400+ce-L;(ee===null||X<ee.totalSecUntil)&&(ee={totalSecUntil:X,classId:M.classId})}return ee?{classId:ee.classId,mode:"upcoming"}:{classId:((fe=O[0])==null?void 0:fe.id)??null,mode:"none"}}async function $a(p){var Q,R,oe,L,ee,ie;const{cfg:m,minTier:I,unlocked:T}=await es(p);if(T&&localStorage.getItem(Wt)==="1"){Vt(p);return}if(!T&&(p!=null&&p.smart_classroom_free_class_id)){me(p,p.smart_classroom_free_class_id);return}(Q=document.getElementById("sc-landing-modal"))==null||Q.remove();const O=((R=m.smartClassroomLandingTitle)==null?void 0:R.trim())||"Smart Classroom — หน้าควบคุมขณะสอนสด",A=((oe=m.smartClassroomLandingDesc)==null?void 0:oe.trim())||"ทุกวินาทีระหว่างสอนสดมีค่า — ไม่ต้องเสียเวลาสลับหน้าจอไปมาระหว่างเช็คชื่อ คุมเวลา เปิดควิซ หรือสั่งงาน อีกต่อไป Smart Classroom รวมทุกเครื่องมือที่คุณใช้บ่อยที่สุดไว้จอเดียว ให้คุณโฟกัสกับการสอนได้เต็มที่ นักเรียนก็ได้รับข่าวสารถึงมือถือทันทีโดยไม่พลาด และแผนการสอน/บันทึกหลังสอนของคุณจะถูกเก็บเป็นระบบ พร้อมให้ตรวจสอบได้ทุกเมื่อโดยไม่ต้องมานั่งรวบรวมทีหลัง",f=[m.smartClassroomLandingImg1,m.smartClassroomLandingImg2,m.smartClassroomLandingImg3].filter(Boolean),y=[{emoji:"⏱️",text:"ไม่ต้องสลับหน้าจอนับสิบรอบระหว่างสอน ทุกเครื่องมือรวมไว้จอเดียว"},{emoji:"📲",text:"นักเรียนไม่พลาดประกาศ/งานอีกต่อไป แจ้งเตือนถึงมือถือทันทีที่กดส่ง"},{emoji:"📋",text:"แผนการสอน+บันทึกหลังสอนเป็นระบบ พร้อมตรวจสอบได้ทุกเมื่อ"}],F=["✅ เช็คชื่ออัตโนมัติ","🚪 Hall Pass สด","🎲 สุ่ม/จัดกลุ่ม","🧠 เปิดควิซสด","📚 สั่งงาน/ติดตามงาน","📘 กำหนดการสอน+แผนการสอน","🖊️ บันทึกหลังสอน+เซ็นชื่อ","📣 ประกาศแนบไฟล์+แจ้งเตือนมือถือ"],$=document.createElement("div");$.id="sc-landing-modal",$.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",$.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade">
      <div class="relative px-6 py-8 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <button id="sl-close" class="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none">✕</button>
        <div class="text-5xl mb-2">👑</div>
        <h2 class="text-white font-extrabold text-xl">${l(O)}</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${y.map(B=>`
            <div class="px-3 py-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <div class="text-xl mb-1">${B.emoji}</div>
              <p class="text-[11px] font-bold text-amber-800 leading-snug">${l(B.text)}</p>
            </div>`).join("")}
        </div>
        <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">${l(A)}</p>
        ${f.length?`<div class="grid ${f.length>1?"grid-cols-2":"grid-cols-1"} gap-2">${f.map(B=>`<img src="${l(B)}" class="w-full rounded-xl border border-gray-100 object-cover" />`).join("")}</div>`:""}
        <div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">🎁 รวมฟีเจอร์เหล่านี้ไว้ให้แล้ว</p>
          <div class="grid grid-cols-2 gap-1.5 text-[11px] text-gray-500">
            ${F.map(B=>`<div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50">${B}</div>`).join("")}
          </div>
        </div>
        ${T?`
          <label class="flex items-center justify-center gap-2 text-xs text-gray-500 cursor-pointer select-none">
            <input type="checkbox" id="sl-skip" class="w-4 h-4 rounded" />
            ไม่ต้องโชว์ป๊อบอัพนี้ในครั้งหน้า — เปิดคลาสรูมที่กำลังสอนให้อัตโนมัติเลย
          </label>
          <button id="sl-start" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🚀 เริ่มใช้งาน</button>
        `:`
          <p class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 text-center">🎁 ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน หรือสนับสนุนระบบระดับ ${I} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้อง</p>
          <button id="sl-free" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 เลือกห้องที่จะใช้ฟรี</button>
          <button id="sl-donate" class="w-full py-2.5 rounded-2xl text-amber-700 font-semibold text-xs hover:bg-amber-50 transition border border-amber-200">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        `}
      </div>
    </div>`,document.body.appendChild($),$.addEventListener("click",B=>{B.target===$&&$.remove()}),$.querySelector("#sl-close").addEventListener("click",()=>$.remove()),(L=$.querySelector("#sl-start"))==null||L.addEventListener("click",()=>{var B;(B=$.querySelector("#sl-skip"))!=null&&B.checked&&localStorage.setItem(Wt,"1"),$.remove(),Vt(p)}),(ee=$.querySelector("#sl-free"))==null||ee.addEventListener("click",()=>{$.remove(),ts(p,m,{onPicked:B=>me(p,B)})}),(ie=$.querySelector("#sl-donate"))==null||ie.addEventListener("click",()=>{var B;$.remove(),(B=document.getElementById("btn-donate-float"))==null||B.click()})}async function Vt(p){b("กำลังตรวจสอบตารางสอน...","info");const{classId:m}=await Vn(p);if(!m){b("ยังไม่มีห้องเรียน กรุณาสร้างห้องเรียนก่อนครับ","warning");return}me(p,m)}async function me(p,m){var vt,ht,wt,_t,kt,$t,St,Et,qt,Lt,jt,It,Ct,Mt,Tt;Bn("my-classes"),zn("Smart Classroom"),Be(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const{cfg:I,minTier:T,unlocked:O,donationRequests:A}=await es(p);if(!Wn(O,p,m)){const e=p==null?void 0:p.smart_classroom_free_class_id;if(!e){Be(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
        <div class="text-6xl mb-4">🎁</div>
        <p class="font-bold text-gray-800 text-lg">ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน</p>
        <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณยังไม่ได้สนับสนุนระบบระดับ ${T} ขึ้นไป แต่ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียนครับ<br>เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด (เปลี่ยนภายหลังต้องติดต่อแอดมิน)</p>
        <button id="sc-free-confirm" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 ใช้ห้องนี้ฟรี</button>
        <div class="mt-2">
          <button id="sc-free-other" class="text-xs text-gray-400 hover:text-gray-600 underline">เลือกห้องอื่นแทน</button>
        </div>
        <div class="mt-4">
          <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
        </div>
      </div>`),(vt=document.getElementById("sc-free-confirm"))==null||vt.addEventListener("click",async a=>{const r=a.currentTarget;r.disabled=!0,r.textContent="กำลังบันทึก...";try{if(!await Jt(p.id,m)){b("มีการเลือกห้องไปแล้วก่อนหน้านี้","error"),me(p,m);return}p.smart_classroom_free_class_id=m,b("เลือกห้องฟรีสำเร็จ ✅","success"),me(p,m)}catch(o){b("บันทึกไม่สำเร็จ: "+(o.message??""),"error"),r.disabled=!1,r.textContent="🎁 ใช้ห้องนี้ฟรี"}}),(ht=document.getElementById("sc-free-other"))==null||ht.addEventListener("click",()=>{ts(p,I,{preselectClassId:m,onPicked:a=>me(p,a)})}),(wt=document.getElementById("sc-back"))==null||wt.addEventListener("click",()=>we(p,m));return}const t=((_t=(await _e(p.id).catch(()=>[])).find(a=>a.id===e))==null?void 0:_t.class_name)??`ห้อง #${e}`,n=Un(I,T);Be(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
      <div class="text-6xl mb-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">Smart Classroom</p>
      <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณใช้สิทธิ์ฟรีกับห้อง <b>${l(t)}</b> ไปแล้ว<br>หากต้องการใช้ห้องนี้ด้วย กรุณาสนับสนุนระบบระดับ ${T}${n?` (${n} บาท)`:""} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้องครับ</p>
      <button id="sc-upgrade" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#a9781a,#e6c988)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      <div class="mt-3">
        <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
      </div>
    </div>`),(kt=document.getElementById("sc-upgrade"))==null||kt.addEventListener("click",()=>{var a;return(a=document.getElementById("btn-donate-float"))==null?void 0:a.click()}),($t=document.getElementById("sc-back"))==null||$t.addEventListener("click",()=>we(p,m));return}let f,y,F,$,Q,R,oe,L,ee,ie,B,J,fe,M,Y,de,ce,U,X,ke,ne=null;try{const e=parseInt(I.academicYear??2568),s=parseInt(I.semester??1);oe=A;let t;if([t,y,F,$,Q,R,L,ee,ie,B,J,fe,M,Y,de,ce,ke]=await Promise.all([_e(p.id),Fs(m).catch(()=>[]),Ns(m).catch(()=>[]),Rs(m).catch(()=>3),Os(m).catch(()=>2),yn(m).catch(()=>[]),Qs(m).catch(()=>[]),Us(m).catch(()=>[]),Ws(m).catch(()=>[]),Vs(m).catch(()=>[]),Gs(m).catch(()=>[]),Ys(p.id).catch(()=>[]),Yt(p.id,e,s).catch(()=>[]),Xt(p.id).catch(()=>[]),Zt().catch(()=>[]),Xs(m).catch(()=>[]),Zs().catch(()=>[])]),f=t.find(n=>n.id===m),!f){we(p,m);return}ne=f.course_id??((St=f.master_subjects)==null?void 0:St.id)??null,[U,X]=await Promise.all([ne?Js(ne).catch(()=>[]):Promise.resolve([]),ne?Ks(ne).catch(()=>[]):Promise.resolve([])])}catch(e){b("โหลดข้อมูลไม่สำเร็จ: "+(e.message??""),"error"),we(p,m);return}const We=oe.some(e=>e.package_type==="donation"&&e.status==="approved"),He=f.master_subjects??{};let be=Object.fromEntries(F.map(e=>[e.student_id,e]));const Ve=Object.fromEntries(y.map(e=>[e.id,e])),K=R.find(e=>e.status==="started")??null;let $e={};if(K){const e=await Pt(K.id).catch(()=>[]);$e=Object.fromEntries(e.map(s=>[s.student_id,s]))}const ss={in_progress:{icon:"📝",cls:"bg-emerald-500"},submitted:{icon:"✅",cls:"bg-blue-500"},terminated_violation:{icon:"🔒",cls:"bg-red-500"}},Pe=[{emoji:"📢",label:"ทั่วไป"},{emoji:"📚",label:"การบ้าน"},{emoji:"📄",label:"เอกสารประกอบ"},{emoji:"⏰",label:"กำหนดส่งงาน"},{emoji:"📝",label:"แบบทดสอบ"},{emoji:"📊",label:"คะแนน"},{emoji:"🎓",label:"กิจกรรม/ฝึกอบรม"},{emoji:"⚠️",label:"ด่วน/สำคัญ"}],De={overwrite:{label:"ทับคะแนนเก่า (ค่าเริ่มต้น)",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/งานอื่น) จะเก็บค่าที่สูงกว่าไว้"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนงานนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายงาน"}},te={};for(const e of ee)(te[Et=e.student_id]??(te[Et]=[])).push(e);const ye={};for(const e of ie)(ye[qt=e.student_id]??(ye[qt]=[])).push(e);const Se={};for(const e of B)(Se[Lt=e.student_id]??(Se[Lt]=[])).push(e);const Z=new Map(y.map((e,s)=>[e.id,s+1])),Ge=new Map(y.map((e,s)=>[s+1,e])),Ye=e=>{if(!L.length)return null;const s=te[e.id]??[],t=L.reduce((a,r)=>a+(parseFloat(r.max_score)||0),0);return t<=0?null:L.reduce((a,r)=>{const o=s.find(i=>i.score_column_id===r.id);return a+(parseFloat(o==null?void 0:o.score)||0)},0)/t*100},Xe=e=>{const s=ye[e.id]??[];return s.length?s.filter(t=>t.status==="present").length/s.length*100:null},Ze=(e,s)=>{const t=(te[e.id]??[]).find(n=>n.score_column_id===s);return(t==null?void 0:t.score)!=null?parseFloat(t.score):null},Ee=(e,s)=>{var a;const t=J.find(r=>r.id===e),n=(a=t==null?void 0:t.submissions)==null?void 0:a.find(r=>r.student_id===s);return n?n.reviewed_at||n.hasScore?{key:"checked",rank:2,icon:"✓",label:"ตรวจแล้ว",cls:"bg-emerald-100 text-emerald-700 border-emerald-200"}:{key:"waiting",rank:0,icon:"●",label:"ส่งแล้ว รอตรวจ",cls:"bg-amber-100 text-amber-700 border-amber-200"}:{key:"missing",rank:1,icon:"○",label:"ยังไม่ส่ง",cls:"bg-gray-100 text-gray-500 border-gray-200"}};let H={key:"seatno"};const ns=e=>{if(H.key==="total"){const s=Ye(e);return s==null?null:`${s.toFixed(0)}%`}if(H.key==="att"){const s=Xe(e);return s==null?null:`${s.toFixed(0)}%`}if(H.key.startsWith("col:")){const s=parseInt(H.key.slice(4),10),t=Ze(e,s),n=L.find(a=>a.id===s);return t==null?null:`${t}${n?"/"+n.max_score:""}`}if(H.key.startsWith("assignment:")){const s=parseInt(H.key.slice(11),10),t=Ee(s,e.id);return`${t.icon} ${t.label}`}return null},as=()=>{if(H.key==="seatno")return y;if(H.key==="name")return[...y].sort((s,t)=>(s.full_name??"").localeCompare(t.full_name??"","th"));if(H.key.startsWith("assignment:")){const s=parseInt(H.key.slice(11),10);return[...y].sort((t,n)=>Ee(s,t.id).rank-Ee(s,n.id).rank||Z.get(t.id)-Z.get(n.id))}const e=H.key==="total"?Ye:H.key==="att"?Xe:s=>Ze(s,parseInt(H.key.slice(4),10));return[...y].sort((s,t)=>{const n=e(s),a=e(t);return n==null&&a==null?Z.get(s.id)-Z.get(t.id):n==null?1:a==null?-1:a-n})},Je=fe.filter(e=>{var s;return((s=e.classes)==null?void 0:s.id)===m&&e.status!=="rejected"&&(e.status!=="approved"||e.exam_attended==null)}).sort((e,s)=>(e.requested_date??"").localeCompare(s.requested_date??"")),rs=new Set(Y.filter(e=>e.class_id===m).map(e=>e.teacher_schedule_id)),Fe=Object.fromEntries(de.map(e=>[e.period_no,e])),ve=M.filter(e=>rs.has(e.id)).map(e=>({...e,period:Fe[e.period_no],actualEndPeriod:Fe[(e.period_no??1)+(e.span_periods??1)-1]??Fe[e.period_no]})).sort((e,s)=>e.day_of_week-s.day_of_week||e.period_no-s.period_no);function ls(){var a,r,o;const e=new Date,s=e.getDay(),t=e.getHours()*3600+e.getMinutes()*60+e.getSeconds();for(const i of ve){if(i.day_of_week!==s||!((a=i.period)!=null&&a.start_time)||!((r=i.actualEndPeriod)!=null&&r.end_time))continue;const[x,g]=i.period.start_time.split(":").map(Number),[d,c]=i.actualEndPeriod.end_time.split(":").map(Number),u=x*3600+g*60,S=d*3600+c*60;if(t>=u&&t<S)return{mode:"live",remainingSec:S-t,slot:i}}let n=null;for(const i of ve){if(!((o=i.period)!=null&&o.start_time))continue;const[x,g]=i.period.start_time.split(":").map(Number),d=x*3600+g*60;let c=(i.day_of_week-s+7)%7;c===0&&d<=t&&(c=7);const u=c*86400+d-t;(n===null||u<n.totalSecUntil)&&(n={totalSecUntil:u,slot:i})}return n?{mode:"upcoming",remainingSec:n.totalSecUntil,slot:n.slot}:{mode:"none"}}const P=()=>me(p,m),Ke=async(e,s,t)=>{const n=y.map(a=>a.profile_id).filter(Boolean);if(n.length)try{await Fn.functions.invoke("send-push",{body:{title:e,body:s,url:"student.html",tag:t,profileIds:n}})}catch{}},qe=()=>as().map(e=>{const s=be[e.id],t=$e[e.id],n=K?ss[t==null?void 0:t.status]??{icon:"⚪",cls:"bg-gray-300"}:null,a=ns(e),r=H.key.startsWith("assignment:")?Ee(parseInt(H.key.slice(11),10),e.id):null;return`<button type="button" data-sid="${e.id}"
        class="sc-stu relative border rounded-xl px-2 py-2.5 text-center hover:border-indigo-300 hover:-translate-y-0.5 transition ${s?"border-amber-300 bg-amber-50":"border-gray-100 bg-gray-50"}">
      <span class="absolute top-1 left-1 text-[9px] font-bold text-gray-500 bg-white/80 border border-gray-200 rounded-full w-4 h-4 flex items-center justify-center" title="เลขที่ ${Z.get(e.id)??"—"}">${Z.get(e.id)??"—"}</span>
      ${s?'<span class="absolute top-1 right-1 text-[9px] font-bold bg-amber-500 text-white px-1 py-0.5 rounded">🚪</span>':""}
      <div class="relative w-9 h-9 mx-auto mb-1.5 mt-2 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
        ${e.image_url?`<img src="${l(e.image_url)}" class="w-full h-full object-cover"/>`:l((e.full_name??"?").charAt(0))}
        ${n?`<span class="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold ${n.cls} text-white w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-white" title="สถานะสอบ: ${(t==null?void 0:t.status)??"ยังไม่เข้าสอบ"}">${n.icon}</span>`:""}
      </div>
      <div class="text-[9px] text-gray-400 font-mono">${l(e.student_code??"")}</div>
      <div class="text-[11px] font-semibold text-gray-700 leading-tight truncate">${l(e.full_name??"")}</div>
      ${r?`<div class="mt-1 px-1.5 py-0.5 rounded-lg border text-[9px] font-bold truncate ${r.cls}">${r.icon} ${r.label}</div>`:a?`<div class="text-[10px] font-bold text-amber-600 mt-0.5">${l(a)}</div>`:""}
    </button>`}).join(""),os=()=>F.length?F.map(e=>{const s=Ve[e.student_id];return`<div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-amber-100 bg-amber-50 mb-2">
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs flex-shrink-0">
          ${s!=null&&s.image_url?`<img src="${l(s.image_url)}" class="w-full h-full object-cover"/>`:l(((s==null?void 0:s.full_name)??"?").charAt(0))}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-800 truncate">${l((s==null?void 0:s.full_name)??"—")}</p>
          <p class="text-[10px] text-gray-500 truncate">${l(e.reason??"")}</p>
        </div>
        <span class="text-xs font-bold text-amber-700 font-mono flex-shrink-0">${Ut(e.created_at)}</span>
        <button class="sc-return-btn text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 flex-shrink-0" data-lid="${e.id}">กลับแล้ว</button>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีนักเรียนออกนอกห้องตอนนี้</p>',is=()=>R.length?`<div class="max-h-72 overflow-y-auto space-y-1.5 pr-0.5">${R.map(e=>`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <span class="text-base flex-shrink-0">🧠</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-700 truncate">${l(e.title??"ควิซ")}</p>
          <p class="text-[10px] text-gray-400">${e.status==="announced"?"พร้อมเริ่ม":e.status==="started"?"🔴 กำลังสอบสด":"ปิดแล้ว"}</p>
        </div>
        ${e.status==="announced"?`<button class="sc-quiz-start text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex-shrink-0" data-qid="${e.id}">▶ เริ่ม</button>`:""}
        ${e.status==="started"?`<button class="sc-quiz-monitor text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex-shrink-0" data-qid="${e.id}">🔴 ดูสด</button>
                                     <button class="sc-quiz-close text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 flex-shrink-0" data-qid="${e.id}">ปิด</button>`:""}
        ${e.status==="started"||e.status==="closed"?`<button class="sc-quiz-analytics text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100 flex-shrink-0" data-qid="${e.id}">📊 สถิติ</button>`:""}
      </div>`).join("")}</div>`:'<p class="text-xs text-gray-400">ห้องนี้ยังไม่มีควิซที่สร้างไว้</p>';function ds(){var r;(r=document.getElementById("sc-quiz-quick"))==null||r.remove();const e=document.createElement("div");e.id="sc-quiz-quick",e.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",document.body.appendChild(e);const s=()=>{e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🧠 เปิดควิซให้ห้องนี้</h3>
          <p class="text-xs text-gray-400 mb-4">${l(f.class_name??"")}</p>
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
        </div>`,e.querySelector("#sqq-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#sqq-pick").addEventListener("click",t),e.querySelector("#sqq-new").addEventListener("click",a)},t=async()=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลดคลังข้อสอบ...</div>';const o=await _n(p.id).catch(()=>[]);if(!o.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">ยังไม่มีคลังข้อสอบเลย ลองสร้างใหม่ดูก่อนได้ครับ</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",s);return}e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">📚 เลือกคลังข้อสอบ</h3>
          <p class="text-xs text-gray-400 mb-4">${l(f.class_name??"")}</p>
          <div class="space-y-1.5 max-h-72 overflow-y-auto">
            ${o.map(i=>`
              <button class="sqq-bank-pick w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50/50 transition" data-id="${i.id}">
                <span class="text-sm font-semibold text-gray-700">${l(i.name)}</span>
                ${i.description?`<p class="text-[11px] text-gray-400 truncate">${l(i.description)}</p>`:""}
              </button>`).join("")}
          </div>
          <button id="sqq-back" class="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600">← กลับ</button>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelectorAll(".sqq-bank-pick").forEach(i=>i.addEventListener("click",()=>n(o.find(x=>x.id===i.dataset.id))))},n=async o=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลด...</div>';const i=await $n(o.id).catch(()=>[]);if(!i.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">คลัง "${l(o.name)}" ยังไม่มีคำถามเลย เพิ่มคำถามก่อนถึงจะเปิดสอบได้</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",t);return}const x=new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short"});e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🚀 เปิดสอบ: ${l(o.name)}</h3>
          <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${i.length} ข้อ · ${l(f.class_name??"")}</p>
          <div class="space-y-3">
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อการสอบครั้งนี้</label>
              <input id="sqq-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${l(o.name)} (${x})" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนข้อที่สุ่ม</label>
                <input id="sqq-num" type="number" min="1" max="${i.length}" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${Math.min(10,i.length)}" />
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
        </div>`,e.querySelector("#sqq-back").addEventListener("click",t),e.querySelector("#sqq-launch").addEventListener("click",async g=>{const d=e.querySelector("#sqq-title").value.trim(),c=parseInt(e.querySelector("#sqq-num").value,10);if(!d){b("กรุณาระบุชื่อการสอบ","warning");return}if(!c||c<1||c>i.length){b(`จำนวนข้อต้องอยู่ระหว่าง 1 – ${i.length}`,"warning");return}const u=g.target;u.disabled=!0,u.textContent="กำลังเปิด...";try{await Sn({bank_id:o.id,class_id:m,title:d,num_questions:c,time_limit_minutes:parseInt(e.querySelector("#sqq-time").value,10)||null,status:"announced"}),b('สร้างควิซให้ห้องนี้แล้ว 🧠 กด "▶ เริ่ม" ในรายการเพื่อเปิดสอบสดได้เลย',"success"),e.remove(),P()}catch(S){b("เปิดควิซไม่สำเร็จ: "+(S.message??""),"error"),u.disabled=!1,u.textContent="เปิดให้ห้องนี้"}})},a=()=>{e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">✏️ สร้างคลังข้อสอบใหม่</h3>
          <p class="text-xs text-gray-400 mb-4">${l(f.class_name??"")} — ตั้งชื่อคลังก่อน แล้วไปเพิ่มคำถามได้ต่อ (พิมพ์เอง / ให้ AI ช่วยคิด / นำเข้า CSV)</p>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อคลังข้อสอบ</label>
            <input id="sqq-c-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" placeholder="เช่น ควิซท้ายคาบ - เรื่องสมการ" />
          </div>
          <div class="flex gap-2 mt-5">
            <button id="sqq-back" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">← กลับ</button>
            <button id="sqq-c-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">สร้างคลัง → เพิ่มคำถาม</button>
          </div>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelector("#sqq-c-save").addEventListener("click",async o=>{const i=e.querySelector("#sqq-c-title").value.trim();if(!i){b("กรุณาระบุชื่อคลังข้อสอบ","warning");return}const x=o.target;x.disabled=!0,x.textContent="กำลังสร้าง...";try{const g=await kn({teacher_id:p.id,subject_id:ne,name:i}),{_renderBankQuestions:d}=await Bt(async()=>{const{_renderBankQuestions:c}=await import("./teacher-views-quiz-banks-C8BgK7Kc.js");return{_renderBankQuestions:c}},__vite__mapDeps([0,1,2,3,4,5,6]));e.remove(),b("สร้างคลังแล้ว — เพิ่มคำถามให้ครบก่อนไปสร้างแบบทดสอบนะครับ","success"),d(p,g,m)}catch(g){b("สร้างไม่สำเร็จ: "+(g.message??""),"error"),x.disabled=!1,x.textContent="สร้างคลัง → เพิ่มคำถาม"}})};e.addEventListener("click",o=>{o.target===e&&e.remove()}),s()}const cs=()=>ce.length?`<div class="space-y-1.5 mb-3 max-h-40 overflow-y-auto">${ce.slice(0,10).map(e=>{var t;const s=[...Array.isArray(e.attachment_urls)?e.attachment_urls:[],...e.file_url?[{url:e.file_url,name:"ไฟล์แนบ"}]:[]];return`
      <div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center gap-1.5 flex-wrap">
          ${e.ann_type&&e.ann_type!=="general"?`<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">${l(e.ann_type)}</span>`:""}
          <p class="font-semibold text-gray-700 truncate flex-1 min-w-0">${l(e.title)}</p>
        </div>
        ${e.body?`<p class="text-gray-400 truncate">${l(e.body.slice(0,80))}</p>`:""}
        ${s.length?`<div class="flex flex-wrap gap-1 mt-1">${s.map(n=>`<a href="${l(n.url)}" target="_blank" rel="noopener" class="text-[10px] px-1.5 py-0.5 rounded-lg bg-white border border-gray-200 text-indigo-600 hover:bg-indigo-50">📎 ${l(n.name??"ไฟล์")}</a>`).join("")}</div>`:""}
        <p class="text-[10px] text-gray-300 mt-0.5">${new Date(e.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}${(t=e.teachers)!=null&&t.full_name?" · "+l(e.teachers.full_name):""}</p>
      </div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 mb-2">ยังไม่มีประกาศสำหรับห้องนี้</p>',us=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],et=e=>{if(!ve.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้ผูกตารางสอนให้ห้องนี้</p>';if(e==="daily"){const t=new Date().getDay(),n=ve.filter(a=>a.day_of_week===t);return n.length?n.map(a=>{var r,o,i,x;return`
        <div class="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
          <span class="font-semibold text-gray-700">คาบที่ ${a.period_no}${a.span_periods>1?`-${a.period_no+a.span_periods-1}`:""}</span>
          <span class="text-gray-500 font-mono">${((o=(r=a.period)==null?void 0:r.start_time)==null?void 0:o.slice(0,5))??"—"} - ${((x=(i=a.actualEndPeriod)==null?void 0:i.end_time)==null?void 0:x.slice(0,5))??"—"}</span>
        </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">วันนี้ไม่มีคาบของห้องนี้</p>'}const s={};return ve.forEach(t=>{var n;(s[n=t.day_of_week]??(s[n]=[])).push(t)}),Object.keys(s).sort((t,n)=>t-n).map(t=>`
      <div class="mb-2.5">
        <p class="text-[11px] font-bold text-gray-500 mb-1">${us[t]}</p>
        <div class="flex flex-wrap gap-1.5">
          ${s[t].map(n=>{var a,r;return`<span class="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-semibold font-mono">คาบ ${n.period_no}${n.span_periods>1?`-${n.period_no+n.span_periods-1}`:""} · ${((r=(a=n.period)==null?void 0:a.start_time)==null?void 0:r.slice(0,5))??"—"}</span>`}).join("")}
        </div>
      </div>`).join("")},tt=()=>Je.length?Je.map((e,s)=>{var t;return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">${s+1}</span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-700 truncate">${l(((t=e.students)==null?void 0:t.full_name)??"—")} — ${l(e.request_type??"")}</p>
          <p class="text-gray-400">${e.requested_date?new Date(e.requested_date).toLocaleDateString("th-TH",{day:"numeric",month:"short"}):"ไม่ระบุวันที่"}${e.requested_period_no?` · คาบ ${e.requested_period_no}`:""}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${e.status==="pending"?"bg-amber-50 text-amber-700":"bg-emerald-50 text-emerald-700"} flex-shrink-0">${e.status==="pending"?"รออนุมัติ":"อนุมัติแล้ว รอสอบ"}</span>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีคำร้องรอดำเนินการ</p>',Ne=e=>e?new Date(e).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",Re=e=>new Set((e.submissions??[]).map(s=>s.student_id)).size,st=e=>{const s=Math.max(0,y.length-Re(e));if(!e.due_at||s===0)return{key:"normal",missingCount:s,urgent:!1,label:Ne(e.due_at)};const t=new Date(e.due_at).getTime()-Date.now(),n=Math.max(1,Math.ceil(Math.abs(t)/36e5));if(t<0){const a=n<24?`เกินกำหนด ${n} ชม.`:`เกินกำหนด ${Math.ceil(n/24)} วัน`;return{key:"overdue",missingCount:s,urgent:!0,label:a,diffMs:t}}return t<=864e5?{key:"today",missingCount:s,urgent:!0,label:`เหลือ ${n} ชม.`,diffMs:t}:t<=2592e5?{key:"soon",missingCount:s,urgent:!0,label:`เหลือ ${Math.ceil(n/24)} วัน`,diffMs:t}:{key:"normal",missingCount:s,urgent:!1,label:Ne(e.due_at),diffMs:t}},re=J.map(e=>({assignment:e,state:st(e)})).filter(e=>e.state.urgent).sort((e,s)=>{const t=e.state.key==="overdue",n=s.state.key==="overdue";if(t!==n)return t?-1:1;const a=new Date(e.assignment.due_at).getTime(),r=new Date(s.assignment.due_at).getTime();return t?r-a:a-r}),nt=(e="mobile")=>{if(!re.length)return"";const{assignment:s,state:t}=re[0],n=Re(s);return`<div class="rounded-2xl border ${t.key==="overdue"?"border-red-200 bg-red-50 text-red-800":t.key==="today"?"border-orange-200 bg-orange-50 text-orange-800":"border-amber-200 bg-amber-50 text-amber-800"} shadow-sm p-4 ${e==="mobile"?"mb-4 lg:hidden":"mb-4 hidden lg:block"}">
      <div class="flex items-center justify-between gap-2">
        <p class="text-xs font-extrabold">⏰ ${t.key==="overdue"?"งานเกินกำหนด":"งานใกล้ครบกำหนด"}</p>
        <span class="text-xs font-extrabold flex-shrink-0">${t.label}</span>
      </div>
      <p class="text-sm font-bold mt-2 truncate">${l(s.title)}</p>
      <p class="text-[11px] mt-1 opacity-80">${n}/${y.length} ส่งแล้ว · <b>${t.missingCount} คนยังไม่ส่ง</b></p>
      ${re.length>1?`<p class="text-[10px] mt-1 opacity-70">และมีงานเร่งด่วนอีก ${re.length-1} งาน</p>`:""}
      <div class="grid grid-cols-[1fr_auto] gap-2 mt-3">
        <button type="button" data-sc-urgent-aid="${s.id}" class="sc-btn-dark min-h-[42px] rounded-xl px-3 text-xs font-bold">ดูและติดตามงาน</button>
        <button type="button" class="sc-quick-add-assignment min-h-[42px] rounded-xl border border-current/20 bg-white/70 px-3 text-xs font-bold">＋ สั่งงาน</button>
      </div>
    </div>`},Le=(e,s)=>e.due_at?new Date(s).getTime()>new Date(e.due_at).getTime():!1,Oe=(e,s)=>e.due_at?Math.max(1,Math.ceil((new Date(s).getTime()-new Date(e.due_at).getTime())/864e5)):0,ps=(e,s)=>Le(e,s)?e.late_penalty_mode==="flat"?parseFloat(e.late_penalty_value)||0:e.late_penalty_mode==="per_day"?(parseFloat(e.late_penalty_value)||0)*Oe(e,s):0:0,ms=()=>J.length?J.map(e=>{const s=Re(e),t=y.length,n=t>0?Math.round(s/t*100):0,a=e.submissions.filter(x=>Le(e,x.submitted_at)).length,r=st(e),o=r.key==="overdue"?"border-red-200 bg-red-50":r.key==="today"?"border-orange-200 bg-orange-50":r.key==="soon"?"border-amber-200 bg-amber-50":"border-gray-100",i=r.urgent?r.key==="overdue"?"text-red-700":"text-amber-700":"text-gray-400";return`<button class="sc-assignment-row w-full text-left px-3 py-3 rounded-xl border ${o} hover:border-indigo-300 hover:bg-indigo-50 transition mb-2" data-aid="${e.id}">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-bold text-gray-700 truncate">${l(e.title)}</p>
          <span class="text-[11px] ${i} font-bold flex-shrink-0">${r.label}</span>
        </div>
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${n}%"></div></div>
          <span class="text-[11px] font-bold text-gray-600 flex-shrink-0">${s}/${t} ส่งแล้ว</span>
          ${r.missingCount?`<span class="text-[10px] font-bold ${r.urgent?i:"text-gray-400"} flex-shrink-0">${r.missingCount} ยังไม่ส่ง</span>`:""}
          ${a?`<span class="text-[10px] font-bold text-amber-600 flex-shrink-0">ช้า ${a}</span>`:""}
        </div>
      </button>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีงานที่มอบหมาย — กด "➕ สั่งงานใหม่" เพื่อเริ่ม</p>',ae=Hn(I.semester_start),ue=U.find(e=>ae>=e.week_start&&ae<=e.week_end),xs=()=>U.length?`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${U.map(e=>`
      <button class="sc-syllabus-row w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl border transition ${ae>=e.week_start&&ae<=e.week_end?"border-indigo-300 bg-indigo-50":"border-gray-100 bg-gray-50 hover:border-indigo-200"}" data-sylid="${e.id}">
        <span class="text-[10px] font-bold text-gray-500 flex-shrink-0 w-16">สัปดาห์ ${e.week_start}${e.week_end!==e.week_start?`-${e.week_end}`:""}</span>
        <span class="text-xs font-semibold text-gray-700 truncate flex-1">${l(e.topic)}</span>
      </button>`).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้กำหนดหัวข้อการสอน — กด "➕ เพิ่มหัวข้อ" เพื่อเริ่มวางกำหนดการสอน</p>',bs=()=>X.length?`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${X.map(e=>`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <button class="sc-plan-row flex-1 min-w-0 text-left" data-planid="${e.id}">
          <p class="text-xs font-bold text-gray-700 truncate">${l(e.title)}</p>
          <p class="text-[10px] text-gray-400">สัปดาห์ ${e.week_start}${e.week_end!==e.week_start?`-${e.week_end}`:""}</p>
        </button>
        <button class="sc-plan-reflect text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50 flex-shrink-0" data-planid="${e.id}">✍️ ลงนาม/พิมพ์</button>
      </div>`).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีแผนการสอน — กด "➕ สร้างแผน" เพื่อเริ่ม</p>',ge=[{key:"schedule",icon:"🗓️",label:"ตารางเรียน",mobileLabel:"ตาราง",desc:"ดูคาบรายวันและรายสัปดาห์"},{key:"examqueue",icon:"📋",label:"คิวสอบ",mobileLabel:"คิวสอบ",desc:"ติดตามคำร้องสอบย้อนหลัง"},{key:"syllabus",icon:"📘",label:"กำหนดการสอน",mobileLabel:"การสอน",desc:"วางหัวข้อทั้งภาคเรียน"},{key:"plans",icon:"📝",label:"แผนการสอน",mobileLabel:"แผน",desc:"สร้างแผนหน้าเดียวรายครั้ง"},{key:"assignments",icon:"📚",label:"งานที่มอบหมาย",mobileLabel:"งาน",desc:"สั่งงานและติดตามการส่ง"}],at=[{key:"room",icon:"👥",label:"ห้อง"},{key:"live",icon:"🧠",label:"สอนสด"},{key:"work",icon:"📚",label:"งาน"},{key:"plan",icon:"📝",label:"แผน"},{key:"more",icon:"•••",label:"เพิ่ม"}];let se="schedule",je="room";const rt=e=>e==="schedule"?`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ตารางเรียนของห้องนี้</p>
        <div class="sc-tabbar">
          <button data-sched="daily" class="sc-sched-tab sc-tab-pill">รายวัน</button>
          <button data-sched="weekly" class="sc-sched-tab sc-tab-pill">รายสัปดาห์</button>
        </div>
      </div>
      <div id="sc-schedule-body">${et("daily")}</div>`:e==="examqueue"?`
      <p class="text-xs text-gray-400 mb-3">คิวคำร้องขอสอบปรับ/สอบย้อนหลัง เรียงจากใกล้ไปไกล</p>
      <div id="sc-exam-queue">${tt()}</div>`:e==="syllabus"?`
      <div class="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-blue-950">📘 กำหนดการสอนรายภาคเรียน</p><p class="text-xs text-blue-700/70 mt-1">กำหนดหัวข้อแต่ละช่วงสัปดาห์ ผูกกับรายวิชา และใช้ร่วมกันทุกห้อง</p><div class="flex gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">${U.length} ช่วงการสอน</span><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">สัปดาห์ปัจจุบัน ${ae||"—"}</span></div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[310px]">
            <button id="sc-ai-syllabus" class="min-h-[48px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm">🤖 สร้างกำหนดการด้วย AI</button>
            <button id="sc-add-syllabus" class="min-h-[48px] rounded-xl bg-white border border-blue-200 text-blue-800 text-xs font-bold hover:bg-blue-50">＋ เพิ่มหัวข้อเอง</button>
          </div>
        </div>
      </div>
      <div class="my-3 px-3 py-2.5 rounded-xl ${ue?"bg-indigo-50 border border-indigo-100":"bg-gray-50 border border-gray-100"}">
        <p class="text-[10px] font-bold ${ue?"text-indigo-500":"text-gray-400"} uppercase tracking-wide">สัปดาห์นี้ — สัปดาห์ที่ ${ae||"—"}</p>
        <p class="text-sm font-bold ${ue?"text-indigo-700":"text-gray-400"} mt-0.5">${ue?l(ue.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-syllabus-list">${xs()}</div>`:e==="plans"?`
      <div class="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</p><p class="text-xs text-violet-700/70 mt-1">สร้างแผนรายครั้ง บันทึกหลังสอน และลงลายเซ็นครบ 3 ฝ่าย</p><div class="flex gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">${X.length} แผน</span><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">เชื่อมกำหนดการสอน</span></div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[300px]">
            <button id="sc-ai-plan" class="min-h-[48px] rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-xs font-bold shadow-sm">🤖 สร้างแผนด้วย AI</button>
            <button id="sc-add-plan" class="min-h-[48px] rounded-xl bg-white border border-violet-200 text-violet-800 text-xs font-bold hover:bg-violet-50">＋ สร้างแผนเอง</button>
          </div>
        </div>
      </div>
      <div id="sc-plan-list">${bs()}</div>`:`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ติดตามงานที่มอบหมาย + สถานะการส่งของนักเรียน</p>
        <button id="sc-add-assignment" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สั่งงานใหม่</button>
      </div>
      <div id="sc-assignment-list">${ms()}</div>`;Be(`<div class="animate-fade max-w-6xl mx-auto">

    <div class="relative overflow-hidden bg-white border border-amber-200 rounded-2xl shadow-sm px-5 py-4 mb-4 flex items-center gap-4 flex-wrap">
      <div class="absolute inset-x-0 top-0 h-1" style="background:linear-gradient(90deg,#e6c988,#a9781a,#e6c988)"></div>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold flex-shrink-0">👑 Smart Classroom</span>
      <div class="min-w-0">
        <h1 class="font-bold text-gray-800 text-base truncate">${l(He.subject_name??"")} · ${l(f.class_name??"")}</h1>
        <p class="text-xs text-gray-400">${y.length} คน</p>
      </div>
      <div class="min-w-0 border-l border-amber-100 pl-4">
        <p class="text-[10px] font-bold text-amber-500 uppercase tracking-wide">📘 สัปดาห์ที่ ${ae||"—"}</p>
        <p class="text-xs font-semibold ${ue?"text-gray-700":"text-gray-400"} truncate max-w-[240px]">${ue?l(ue.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-clock-wrap" class="ml-auto flex-shrink-0 text-right"></div>
      <button id="sc-class-chat" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-amber-700 border border-amber-200 bg-white hover:bg-amber-50 px-3 py-2 rounded-xl">💬 แชทห้องเรียน</button>
      <button id="sc-teaching-ai" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-white px-3 py-2 rounded-xl shadow-sm" style="background:linear-gradient(135deg,#6366f1,#7c3aed)">✨ AI เตรียมการสอน</button>
      <button id="sc-switch-class" class="flex-shrink-0 text-xs font-semibold text-amber-700 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg">🔀 สลับห้อง</button>
      <button id="sc-back" class="flex-shrink-0 text-xs text-gray-400 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">← กลับ</button>
    </div>

    ${nt("mobile")}

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
          ${K?`<div class="flex items-center flex-wrap gap-2 mb-3 px-3 py-2 rounded-xl bg-red-50 border border-red-100 text-[11px] text-red-700">
            <span class="font-bold">🔴 กำลังสอบสด: ${l(K.title)}</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-flex items-center justify-center text-[8px]">📝</span>กำลังทำ</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-blue-500 inline-flex items-center justify-center text-[8px]">✅</span>ส่งแล้ว</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-red-500 inline-flex items-center justify-center text-[8px]">🔒</span>ถูกล็อก</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-gray-300 inline-flex items-center justify-center text-[8px]">⚪</span>ยังไม่เข้าสอบ</span>
          </div>`:""}
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2" id="sc-roster">${qe()}</div>
        </div>

        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">🚪 Hall Pass — ออกนอกห้องตอนนี้</h2>
            <button id="sc-leave-quota" class="text-[11px] font-semibold text-amber-700 hover:text-amber-900">⚙️ โควตา (${F.length}/${$})</button>
          </div>
          <div id="sc-pass-list" class="mt-2">${os()}</div>
        </div>
      </div>

      <div id="sc-mobile-live-section" class="sc-mobile-app-section">
        ${nt("desktop")}

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-sm font-bold text-gray-700">🧠 เปิดควิซสด</h2>
            <button id="sc-quiz-add" class="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800">+ ควิซ</button>
          </div>
          <div id="sc-quiz-list">${is()}</div>
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
          <div id="sc-ann-history">${cs()}</div>
        </div>
      </div>

    </div>

    <div id="sc-reference-panel" class="sc-reference-panel bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-5 mt-4">
      <div class="sc-mobile-ref-head">
        <div>
          <p id="sc-mobile-ref-title" class="text-sm font-bold text-gray-800">${(jt=ge.find(e=>e.key===se))==null?void 0:jt.icon} ${(It=ge.find(e=>e.key===se))==null?void 0:It.label}</p>
          <p class="text-[11px] text-gray-400">แตะเมนูด้านล่างเพื่อเปลี่ยนหัวข้อ</p>
        </div>
        <button id="sc-mobile-ref-close" type="button" class="min-w-[44px] min-h-[44px] rounded-xl border border-gray-200 bg-white text-gray-500 text-lg">✕</button>
      </div>
      <div id="sc-mobile-ref-subtabs" class="sc-mobile-ref-subtabs"></div>
      <div class="hidden lg:flex items-center justify-between gap-3 mb-4"><div><h2 class="text-base font-extrabold text-gray-800">พื้นที่จัดการรายวิชา</h2><p class="text-xs text-gray-400 mt-0.5">เลือกงานที่ต้องการ ระบบจะแยกข้อมูลและปุ่มสร้างให้ชัดเจน</p></div><span class="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-700">${l(He.subject_name??"")}</span></div>
      <div id="sc-reftabs-bar" class="sc-desktop-ref-tabs mb-5">
        ${ge.map(e=>`<button data-reftab="${e.key}" class="sc-reftab-btn ${e.key===se?"active":""}"><span class="sc-ref-tab-icon">${e.icon}</span><span class="min-w-0 text-left"><b>${e.label}${e.key==="assignments"&&re.length?` (${re.length})`:""}</b><small>${e.desc}</small></span></button>`).join("")}
      </div>
      <div id="sc-reftab-body">${rt(se)}</div>
    </div>

    <nav id="sc-mobile-ref-nav" class="sc-mobile-ref-nav" aria-label="เมนู Smart Classroom">
      ${at.map(e=>`<button type="button" data-mobile-group="${e.key}" class="sc-mobile-group-btn sc-mobile-ref-btn ${e.key===je?"active":""}">
        <span class="sc-mobile-ref-icon">${e.icon}</span>
        <span>${e.label}</span>
        ${e.key==="work"&&re.length?`<span class="sc-mobile-ref-count">${re.length>99?"99+":re.length}</span>`:""}
      </button>`).join("")}
    </nav>
  </div>`),document.body.classList.add("sc-fullscreen"),document.getElementById("sc-back").addEventListener("click",()=>{window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),document.body.classList.remove("sc-fullscreen"),we(p,m)}),document.getElementById("sc-switch-class").addEventListener("click",()=>gs()),document.getElementById("sc-open-attendance").addEventListener("click",()=>fs());const lt=()=>Bt(()=>import("./chat-classroom-BIeRyAHR.js"),__vite__mapDeps([7,8,3,9,1,5,10])).then(e=>e.openTeacherClassroomChat(p,m,`${He.subject_name??""} · ${f.class_name??""}`)),ot=()=>An(p,m,f,I);(Ct=document.getElementById("sc-class-chat"))==null||Ct.addEventListener("click",lt),(Mt=document.getElementById("sc-teaching-ai"))==null||Mt.addEventListener("click",ot),document.querySelectorAll("[data-sc-urgent-aid]").forEach(e=>e.addEventListener("click",()=>{const s=J.find(t=>t.id===parseInt(e.dataset.scUrgentAid,10));s&&bt(s)})),document.querySelectorAll(".sc-quick-add-assignment").forEach(e=>e.addEventListener("click",()=>Qe()));function it(e){return{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:e%60}}function dt(){const e=document.getElementById("sc-clock-wrap");if(!e){window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null);return}const s=ls();if(s.mode==="live"){const{h:t,m:n,s:a}=it(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">🟢 กำลังสอน — เหลืออีก</p>
        <p class="text-xl font-extrabold text-emerald-700 font-mono">${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}</p>`}else if(s.mode==="upcoming"){const{d:t,h:n,m:a,s:r}=it(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-amber-600 font-bold uppercase tracking-wide">คาบนี้จะเริ่มสอนในอีก</p>
        <p class="text-sm font-extrabold text-amber-700 font-mono">${t>0?t+" วัน ":""}${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(r).padStart(2,"0")}</p>`}else e.innerHTML='<p class="text-[10px] text-gray-400">ไม่พบตารางสอนของห้องนี้</p>'}window._scClockInterval&&clearInterval(window._scClockInterval),dt(),window._scClockInterval=setInterval(dt,1e3),window._scQuizPollInterval&&clearInterval(window._scQuizPollInterval),K&&(window._scQuizPollInterval=setInterval(async()=>{const e=document.getElementById("sc-roster");if(!e){clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null;return}const s=await Pt(K.id).catch(()=>null);s&&($e=Object.fromEntries(s.map(t=>[t.student_id,t])),e.innerHTML=qe())},4e3));async function gs(){var n;(n=document.getElementById("sc-switch-modal"))==null||n.remove();const e=document.createElement("div");e.id="sc-switch-modal",e.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">🔀 สลับห้องเรียน</h3>
          <button id="sc-switch-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div id="sc-switch-list" class="max-h-80 overflow-y-auto space-y-1.5">
          <div class="text-center py-6 text-xs text-gray-400">กำลังโหลด...</div>
        </div>
      </div>`,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&e.remove()}),e.querySelector("#sc-switch-close").addEventListener("click",()=>e.remove());const s=(await _e(p.id).catch(()=>[])).filter(a=>a.id!==m),t=e.querySelector("#sc-switch-list");if(!s.length){t.innerHTML='<p class="text-center py-6 text-xs text-gray-400">ไม่มีห้องอื่นให้สลับ</p>';return}t.innerHTML=s.map(a=>{var r;return`
      <button class="sc-switch-btn w-full text-left px-3 py-2.5 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition" data-cid="${a.id}">
        <p class="text-sm font-semibold text-gray-700 truncate">${l(a.class_name??"")}</p>
        <p class="text-xs text-gray-400 truncate">${l(((r=a.master_subjects)==null?void 0:r.subject_name)??"")}</p>
      </button>`}).join(""),t.querySelectorAll(".sc-switch-btn").forEach(a=>a.addEventListener("click",()=>{const r=parseInt(a.dataset.cid,10);e.remove(),me(p,r)}))}async function fs(){var t,n;const e=document.getElementById("sc-open-attendance");e.disabled=!0;const s=e.textContent;e.textContent="⏳";try{const a=((t=f.master_subjects)==null?void 0:t.credit)??1,r=((n=f.master_subjects)==null?void 0:n.subject_group)==="ACDMVOC",o=r?await en(m).catch(()=>[]):[],i=Pn(f,a,o.length?o:null,r),x=Dn(new Date),g=i.filter(d=>d.ds===x);if(g.length===1)await Dt(p,f,g[0].n,{});else if(g.length>1)ct(i,g[0].n,"วันนี้มีหลายคาบ — เลือกคาบที่จะเช็คชื่อ");else{const d=new Date(x).getTime();let c=i[0],u=1/0;for(const S of i){const C=Math.abs(new Date(S.ds).getTime()-d);C<u&&(u=C,c=S)}ct(i,c==null?void 0:c.n,"วันนี้ไม่ตรงกับตารางสอนของห้องนี้ — เลือกคาบเอง (เลื่อนไปคาบใกล้วันนี้ที่สุดให้แล้ว)")}}catch(a){b("เปิดหน้าเช็คชื่อไม่สำเร็จ: "+(a.message??""),"error")}finally{e.disabled=!1,e.textContent=s}}function ct(e,s,t){var r;(r=document.getElementById("sc-session-picker"))==null||r.remove();const n=document.createElement("div");n.id="sc-session-picker",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">✅ เลือกคาบเช็คชื่อ</h3>
          <button id="sc-sess-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <p class="text-xs text-gray-400">${l(t)}</p>
        <div class="max-h-72 overflow-y-auto space-y-1.5" id="sc-sess-list">
          ${e.map(o=>`<button class="sc-sess-btn w-full text-left px-3 py-2.5 rounded-xl border transition text-sm font-semibold ${o.n===s?"border-indigo-400 bg-indigo-50 text-indigo-700":"border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700"}" data-n="${o.n}">
            คาบที่ ${o.n} <span class="${o.n===s?"text-indigo-400":"text-gray-400"} font-normal">· ${l(o.ds)}</span>${o.n===s?' <span class="text-[10px] text-indigo-500">← ใกล้วันนี้ที่สุด</span>':""}
          </button>`).join("")}
        </div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",o=>{o.target===n&&n.remove()}),n.querySelector("#sc-sess-close").addEventListener("click",()=>n.remove()),n.querySelectorAll(".sc-sess-btn").forEach(o=>o.addEventListener("click",async()=>{const i=parseInt(o.dataset.n,10);n.remove();try{await Dt(p,f,i,{})}catch(x){b("เปิดคาบนี้ไม่สำเร็จ: "+(x.message??""),"error")}}));const a=n.querySelector(`.sc-sess-btn[data-n="${s}"]`);a==null||a.scrollIntoView({block:"center"})}document.getElementById("sc-roster").addEventListener("click",e=>{const s=e.target.closest(".sc-stu");if(!s)return;const t=Ve[parseInt(s.dataset.sid,10)];t&&Ls(t)});function ys(e,s){H={key:e,label:s},document.getElementById("sc-sort-label").textContent=s,document.getElementById("sc-roster").innerHTML=qe()}document.getElementById("sc-sort-trigger").addEventListener("click",()=>vs());function vs(){var o;(o=document.getElementById("sc-sort-panel"))==null||o.remove();const e=document.getElementById("sc-sort-trigger"),s=e.getBoundingClientRect(),t=document.createElement("div");t.id="sc-sort-panel",t.className="fixed z-[96] bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 max-h-[70vh] overflow-hidden flex flex-col animate-fade",t.style.top=`${Math.min(s.bottom+6,window.innerHeight-300)}px`,t.style.left=`${Math.min(s.left,window.innerWidth-300)}px`;const n=[{key:"seatno",label:"เลขที่ (ค่าเริ่มต้น)"},{key:"name",label:"ชื่อ-สกุล (ก–ฮ)"},{key:"total",label:"คะแนนรวมทั้งเทอม (สูง→ต่ำ)"},{key:"att",label:"คะแนนการมาเรียน (สูง→ต่ำ)"}];t.innerHTML=`
      <div class="p-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-xs font-bold text-gray-500 mb-2">เรียงลำดับตาม</p>
        <div class="space-y-1">
          ${n.map(i=>`<button data-sortkey="${i.key}" data-sortlabel="${l(i.label)}" class="sc-sort-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${H.key===i.key?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${i.label}</button>`).join("")}
        </div>
      </div>
      <div class="p-3 flex-1 overflow-y-auto min-h-0">
        <p class="text-xs font-bold text-gray-500 mb-2">คะแนนรายช่อง</p>
        ${L.length>8?'<input id="sc-sort-search" type="text" placeholder="พิมพ์ค้นหาชื่อคอลัมน์..." class="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />':""}
        <div id="sc-sort-col-list" class="space-y-1">
          ${L.length?L.map(i=>`<button data-sortkey="col:${i.id}" data-sortlabel="${l(i.assignment_name??"")}" data-search="${l((i.assignment_name??"").toLowerCase())}" class="sc-sort-opt sc-sort-col-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${H.key==="col:"+i.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${l(i.assignment_name??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>'}
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100">
          <p class="text-xs font-bold text-gray-500 mb-1">📚 งานที่มอบหมาย</p>
          <p class="text-[10px] text-gray-400 mb-2">เรียง: รอตรวจ → ยังไม่ส่ง → ตรวจแล้ว พร้อมแสดงสถานะบนการ์ด</p>
          <div class="space-y-1">
            ${J.length?J.map(i=>`<button data-sortkey="assignment:${i.id}" data-sortlabel="งาน: ${l(i.title??"")}" class="sc-sort-opt w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition ${H.key==="assignment:"+i.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${l(i.title??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีงานที่มอบหมาย</p>'}
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelectorAll(".sc-sort-opt").forEach(i=>i.addEventListener("click",()=>{ys(i.dataset.sortkey,i.dataset.sortlabel),t.remove()}));const a=t.querySelector("#sc-sort-search");a==null||a.addEventListener("input",()=>{const i=a.value.trim().toLowerCase();t.querySelectorAll(".sc-sort-col-opt").forEach(x=>{x.style.display=!i||x.dataset.search.includes(i)?"":"none"})});const r=i=>{t.contains(i.target)||i.target===e||(t.remove(),document.removeEventListener("mousedown",r,!0))};setTimeout(()=>document.addEventListener("mousedown",r,!0),0)}const hs=[{key:"info",label:"👤 ข้อมูล"},{key:"score",label:"📝 คะแนน"},{key:"att",label:"✅ มาเรียน"},{key:"leave",label:"🚪 ออกห้อง"}];function ws(e){var n;const s=be[e.id],t=K?$e[e.id]:null;return`
      <div class="space-y-2">
        ${K?`
          <div class="px-3 py-2.5 rounded-xl bg-red-50 border border-red-100">
            <p class="text-xs text-red-700 font-bold mb-1">🔴 ${l(K.title)}</p>
            ${t?`
              <p class="text-xs text-gray-600">${t.status==="in_progress"?"📝 กำลังทำอยู่":t.status==="submitted"?`✅ ส่งแล้ว${t.score_pct!=null?` · คะแนน ${t.score_pct.toFixed(1)}%`:""}`:t.status==="terminated_violation"?"🔒 ถูกล็อกจากการทำผิดกติกา":t.status}${(n=t.question_order)!=null&&n.length?` · ตอบแล้ว ${Object.keys(t.answers??{}).length}/${t.question_order.length} ข้อ`:""}</p>
              ${t.status==="terminated_violation"?`<button id="sc-sp-unlock" data-attempt="${t.id}" class="w-full mt-2 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600">🔓 ปลดล็อกให้ทำต่อ</button>`:""}
            `:'<p class="text-xs text-gray-500">⚪ ยังไม่เข้าสอบ</p>'}
            <button id="sc-sp-quiz-monitor" class="w-full mt-2 py-1.5 rounded-xl border border-red-200 text-red-600 text-[11px] font-bold hover:bg-red-100">เปิดหน้าจัดการสอบสดแบบเต็ม →</button>
          </div>
        `:""}
        ${s?`
          <div class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
            <div class="text-xs text-amber-800"><b>🚪 ออกนอกห้องอยู่</b><br>${l(s.reason??"")} · ${Ut(s.created_at)}</div>
          </div>
          <button id="sc-sp-return" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700">✅ บันทึกกลับเข้าห้องแล้ว</button>
        `:`
          <button id="sc-sp-leave" class="w-full py-2.5 rounded-xl bg-amber-500 text-white text-sm font-bold hover:bg-amber-600">🚪 อนุญาตออกนอกห้อง</button>
        `}
      </div>`}const _s=e=>e>=80?4:e>=75?3.5:e>=70?3:e>=65?2.5:e>=60?2:e>=55?1.5:e>=50?1:0,ks=e=>e>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:e>=2.5?{label:"ดี",cls:"text-blue-600"}:e>=1?{label:"ผ่าน",cls:"text-amber-600"}:{label:"ไม่ผ่าน",cls:"text-red-600"},xe=e=>Number.isFinite(e)?String(Number(e.toFixed(2))):"—";function $s(e){if(!L.length)return'<p class="text-center py-6 text-xs text-gray-400">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>';const s=te[e.id]??[],t=L.filter(h=>h.column_type==="bonus"),n=L.filter(h=>h.column_type==="derived"),a=L.filter(h=>(h.column_type??"regular")==="regular"),r=a.filter(h=>h.assignment_type!=="final"&&h.assignment_type!=="ปลายภาค"),o=a.filter(h=>h.assignment_type==="final"||h.assignment_type==="ปลายภาค"),i=Rn(t),x=h=>{var v;return parseFloat((v=s.find(k=>k.score_column_id===h.id))==null?void 0:v.score)||0},g=h=>{const v=x(h);if(!h.bonus_formula)return v;const k=Object.fromEntries(i.map(E=>[E.var,x(E)])),q=Ot(h.bonus_formula,k)??0;return h.max_score?Math.min(v+q,parseFloat(h.max_score)):v+q},d=h=>{if(!h.formula)return 0;const v=Object.fromEntries((h.formula_refs??[]).map(k=>{const q=L.find(E=>E.id===k.col_id);return[k.var,q?x(q):0]}));return Ot(h.formula,v)??0},c=h=>h.reduce((v,k)=>v+(parseFloat(k.max_score)||0),0),u=h=>h.reduce((v,k)=>v+g(k),0),S=c(r),C=c(o),W=c(n),_=u(r),w=u(o),j=n.reduce((h,v)=>h+d(v),0),z=S+C+W,D=_+w+j,V=Math.round(D),N=z>0?D/z*100:0,G=_s(N),le=ks(G),Te=(h,v)=>{const k=s.find(pe=>pe.score_column_id===h.id),q=(k==null?void 0:k.score)??"",E=q!==""&&parseFloat(h.max_score)>0?parseFloat(q)/parseFloat(h.max_score)*100:null;return`<tr class="border-b border-gray-50 last:border-0">
        <td class="py-2 px-2 text-gray-700 text-[11px] font-semibold">${l(h.assignment_name??"—")}</td>
        <td class="py-1 px-1 text-center"><input type="number" class="sc-score-input w-16 text-center border border-gray-200 rounded-lg px-1 py-1 font-mono font-bold ${v} focus:outline-none focus:ring-2 focus:ring-indigo-300" data-col="${h.id}" value="${q}" max="${h.max_score??""}" placeholder="—" /></td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-400">/${h.max_score??0}</td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-500">${E==null?"—":E.toFixed(0)+"%"}</td>
      </tr>`},he=(h,v,k,q,E)=>v.length?`<div>
      <h4 class="font-bold ${E.title} text-sm mb-2">${h}</h4>
      <div class="overflow-hidden rounded-xl border ${E.border}"><table class="w-full table-fixed">
        <thead><tr class="${E.head} text-gray-500"><th class="py-1.5 px-2 text-left text-[10px] w-[44%]">ชื่องาน</th><th class="py-1.5 text-center text-[10px]">คะแนน</th><th class="py-1.5 text-center text-[10px]">เต็ม</th><th class="py-1.5 text-center text-[10px]">%</th></tr></thead>
        <tbody>${v.map(pe=>Te(pe,E.input)).join("")}</tbody>
        <tfoot><tr class="${E.head} font-bold"><td class="py-2 px-2 ${E.title} text-xs">รวม</td><td class="py-2 text-center ${E.title} text-xs">${xe(k)}</td><td class="py-2 text-center text-gray-400 text-xs">/${xe(q)}</td><td class="py-2 text-center ${E.title} text-xs">${q>0?(k/q*100).toFixed(1):0}%</td></tr></tfoot>
      </table></div>
    </div>`:"";return`
      <div class="space-y-4">
        ${he("📘 กลางภาค",r,_,S,{title:"text-blue-700",border:"border-blue-100",head:"bg-blue-50",input:"text-blue-600"})}
        ${he("📙 ปลายภาค",o,w,C,{title:"text-purple-700",border:"border-purple-100",head:"bg-purple-50",input:"text-purple-600"})}
        ${n.length?`<div class="rounded-xl border border-indigo-100 bg-indigo-50/50 px-3 py-2.5"><p class="text-xs font-bold text-indigo-700 mb-1">🧮 คะแนนคำนวณ</p>${n.map(h=>`<div class="flex justify-between text-[11px] py-1"><span class="text-gray-600">${l(h.assignment_name??"")}</span><b class="text-indigo-700">${xe(d(h))}/${xe(parseFloat(h.max_score)||0)}</b></div>`).join("")}</div>`:""}
        <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-4 text-center border border-amber-100">
          <p class="text-xs text-gray-500 mb-1">คะแนนรวมทั้งภาค</p>
          <p class="text-3xl font-extrabold text-amber-700">${xe(V)}<span class="text-sm font-normal text-gray-400">/${xe(z)}</span></p>
          <p class="text-[11px] text-gray-400 mt-0.5">คะแนนจริง ${xe(D)} · ${N.toFixed(1)}%</p>
          <p class="text-xl font-bold text-purple-700 mt-1">เกรด ${G>0?G.toFixed(1):"0"} <span class="text-sm ${le.cls}">— ${le.label}</span></p>
        </div>
        <p class="text-[10px] text-gray-400 text-center">คำนวณด้วยกลุ่มกลางภาค/ปลายภาค สูตร และคะแนนโบนัสแบบเดียวกับหน้าคะแนนหลัก</p>
      </div>`}const Ss={present:"#059669",absent:"#dc2626",late:"#f59e0b",excused:"#3b82f6",sick:"#f97316"};function Es(e){const s=(ye[e.id]??[]).slice().sort((c,u)=>(u.check_date??"").localeCompare(c.check_date??""));if(!s.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีข้อมูลเช็คชื่อ</p>';const t=["present","absent","late","excused","sick"],n={};for(const c of s)n[c.status]=(n[c.status]??0)+1;const a=s.length;let r=0;const o=t.filter(c=>n[c]).map(c=>{const u=n[c]/a*100,S=`${Ss[c]} ${r}% ${r+u}%`;return r+=u,S}),i=o.length?`conic-gradient(${o.join(",")})`:"#e5e7eb",x=Math.round((n.present??0)/a*100),g=t.filter(c=>n[c]).map(c=>{const u=Rt[c];return`<span class="px-2 py-1 rounded-full text-[11px] font-bold ${(u==null?void 0:u.bg)??"bg-gray-50"} ${(u==null?void 0:u.color)??"text-gray-500"}">${(u==null?void 0:u.label)??c} ${n[c]}</span>`}).join(" "),d=s.slice(0,15).map(c=>{const u=Rt[c.status];return`<div class="flex items-center justify-between px-3 py-1.5 text-xs border-b border-gray-50">
        <span class="text-gray-500">${l(c.check_date??"")} · คาบ ${c.session_number}</span>
        <span class="font-bold ${(u==null?void 0:u.color)??"text-gray-500"}">${(u==null?void 0:u.label)??c.status}</span>
      </div>`}).join("");return`
      <div class="flex items-center gap-4 mb-3">
        <div class="relative flex-shrink-0" style="width:72px;height:72px;border-radius:50%;background:${i}">
          <div class="absolute" style="inset:7px;background:white;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <span class="text-sm font-bold text-gray-800">${x}%</span>
            <span class="text-[8px] text-gray-400">มาเรียน</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 flex-1">${g}</div>
      </div>
      <div class="max-h-48 overflow-y-auto border-t border-gray-100 pt-2">${d}</div>`}function qs(e){const s=Se[e.id]??[];return s.length?`<div class="max-h-64 overflow-y-auto space-y-1.5">${s.map(t=>{const n=t.status==="returned"?"กลับแล้ว":t.status==="overdue"?"เลยเวลา":"ยังไม่กลับ",a=t.status==="returned"?"text-emerald-600":t.status==="overdue"?"text-red-600":"text-amber-600";return`<div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-gray-700">${l(t.reason??"")}</span>
          <span class="font-bold ${a}">${n}</span>
        </div>
        <div class="text-gray-400 mt-0.5">${new Date(t.created_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})} · ขออนุญาต ${t.allowed_duration} นาที</div>
      </div>`}).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ไม่เคยขอออกนอกห้องในวิชานี้</p>'}function Ls(e){var r;(r=document.getElementById("sc-student-modal"))==null||r.remove();let s="info",t=e;const n=document.createElement("div");n.id="sc-student-modal",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",document.body.appendChild(n);const a=()=>{var x,g,d,c,u,S,C,W;be[t.id];const o=y.findIndex(_=>_.id===t.id);n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[88vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0">
            <div class="flex items-center gap-3">
              <button id="sc-sp-prev" ${o<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl flex-shrink-0">
                ${t.image_url?`<img src="${l(t.image_url)}" class="w-full h-full object-cover"/>`:l((t.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate">${l(t.full_name??"—")}</p>
                <p class="text-xs text-gray-400">${l(t.student_code??"")} · ${l(t.main_room??"")} · เลขที่ ${Z.get(t.id)??"—"}</p>
              </div>
              <button id="sc-sp-next" ${o>=y.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sc-sp-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sc-sp-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sc-sp-jump" type="number" min="1" max="${y.length}" value="${Z.get(t.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${y.length}</span>
            </div>
          </div>
          <div class="px-5 pb-3 flex-shrink-0">
            <div class="sc-tabbar w-full">
              ${hs.map(_=>`<button data-tab="${_.key}" class="sc-sp-tab sc-tab-pill ${s===_.key?"active":""}">${_.label}</button>`).join("")}
            </div>
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${s==="info"?ws(t):s==="score"?$s(t):s==="att"?Es(t):qs(t)}
          </div>
        </div>`,n.querySelector("#sc-sp-close").addEventListener("click",()=>n.remove()),(x=n.querySelector("#sc-sp-prev"))==null||x.addEventListener("click",()=>{o>0&&(t=y[o-1],s="info",a())}),(g=n.querySelector("#sc-sp-next"))==null||g.addEventListener("click",()=>{o<y.length-1&&(t=y[o+1],s="info",a())});const i=()=>{const _=n.querySelector("#sc-sp-jump"),w=parseInt(_.value,10),j=Ge.get(w);if(!j){b(`ไม่พบเลขที่ ${_.value}`,"warning"),_.value=Z.get(t.id)??"";return}j.id!==t.id&&(t=j,s="info",a())};(d=n.querySelector("#sc-sp-jump"))==null||d.addEventListener("change",i),(c=n.querySelector("#sc-sp-jump"))==null||c.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),i())}),n.querySelectorAll(".sc-sp-tab").forEach(_=>_.addEventListener("click",()=>{s=_.dataset.tab,a()})),n.querySelectorAll(".sc-score-input").forEach(_=>{_.addEventListener("change",async()=>{var z;const w=parseInt(_.dataset.col,10),j=_.value.trim();_.disabled=!0;try{await rn(m,t.id,w,j===""?null:j);const D=te[z=t.id]??(te[z]=[]),V=D.find(G=>G.score_column_id===w),N=j===""?null:parseFloat(j);V?V.score=N:D.push({student_id:t.id,score_column_id:w,score:N}),b("บันทึกคะแนนแล้ว","success"),a()}catch(D){b("บันทึกไม่สำเร็จ: "+(D.message??""),"error"),_.disabled=!1}})}),(u=n.querySelector("#sc-sp-return"))==null||u.addEventListener("click",async()=>{const _=be[t.id];try{await zt(_.id,"returned"),b("บันทึกกลับเข้าห้องแล้ว","success"),n.remove(),P()}catch(w){b("บันทึกไม่สำเร็จ: "+(w.message??""),"error")}}),(S=n.querySelector("#sc-sp-leave"))==null||S.addEventListener("click",()=>{if(Object.keys(be).length>=$){b(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${$} คนแล้ว`,"warning");return}n.remove(),jn(p,f,t.id,t.full_name,t.image_url,be,$,()=>P())}),(C=n.querySelector("#sc-sp-quiz-monitor"))==null||C.addEventListener("click",()=>{K&&Ft(K)}),(W=n.querySelector("#sc-sp-unlock"))==null||W.addEventListener("click",_=>{const w=_.target.dataset.attempt;js(w,()=>{n.remove(),P()})})};n.addEventListener("click",o=>{o.target===n&&n.remove()}),a()}function js(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4",t.innerHTML=`
      <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
        <div class="text-4xl mb-3">🔓</div>
        <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
        <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
        <div class="space-y-2">
          <button id="qu-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
          <button id="qu-restart" class="sc-btn-dark w-full py-3 rounded-2xl font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
          <button id="qu-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#qu-cancel").addEventListener("click",()=>t.remove());const n=async a=>{t.remove();try{await wn(e,a),b(a==="resume"?"ปลดล็อก — ทำต่อจากจุดเดิมแล้ว":"ปลดล็อก — เริ่มชุดใหม่แล้ว","success"),s==null||s()}catch(r){b("ปลดล็อกไม่สำเร็จ: "+(r.message??""),"error")}};t.querySelector("#qu-resume").addEventListener("click",()=>n("resume")),t.querySelector("#qu-restart").addEventListener("click",()=>n("restart"))}document.getElementById("sc-pass-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-return-btn");if(s)try{await zt(s.dataset.lid,"returned"),b("บันทึกกลับเข้าห้องแล้ว","success"),P()}catch(t){b("บันทึกไม่สำเร็จ: "+(t.message??""),"error")}}),document.getElementById("sc-leave-quota").addEventListener("click",()=>{qn(f,$,Q,()=>P())}),document.getElementById("sc-timer").addEventListener("click",()=>Mn(m,f,We)),document.getElementById("sc-random").addEventListener("click",()=>{const e=y.map((s,t)=>({...s,seat_no:t+1}));Tn(m,f,e,We)}),document.getElementById("sc-scan-att").addEventListener("click",()=>Ln(p)),document.getElementById("sc-scan-score").addEventListener("click",()=>En({classId:m,className:f.class_name})),document.getElementById("sc-dashboard").addEventListener("click",()=>Cn(m,f,window._pp5DonorTierIndex??0,I)),document.getElementById("sc-quiz-add").addEventListener("click",()=>ds()),document.getElementById("sc-quiz-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-quiz-start"),t=e.target.closest(".sc-quiz-monitor"),n=e.target.closest(".sc-quiz-close"),a=e.target.closest(".sc-quiz-analytics");if(s)try{await vn(s.dataset.qid),b("เริ่มควิซให้ห้องนี้แล้ว 🧠","success"),P()}catch(r){b("เริ่มควิซไม่สำเร็จ: "+(r.message??""),"error")}else if(t){const r=R.find(o=>o.id===t.dataset.qid);r&&Ft(r)}else if(n){const r=R.find(g=>g.id===n.dataset.qid);if(!r)return;const o=L.find(g=>String(g.id)===String(r.score_column_id)),i={highest:"เทียบเอาคะแนนสูงกว่า",overwrite:"ทับคะแนนเก่า",add:"บวกเพิ่มจากคะแนนเดิม"}[r.score_write_mode]??"ตามการตั้งค่าแบบทดสอบ",x=await Ds({quizTitle:r.title,hasScoreColumn:!!r.score_column_id,targetColumn:(o==null?void 0:o.assignment_name)??"",writeModeLabel:i});if(!x)return;try{await hn(r.id,{writeScores:x==="write_scores"}),b(x==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),P()}catch(g){b("ปิดสอบไม่สำเร็จ: "+(g.message??""),"error")}}else if(a){const r=R.find(o=>o.id===a.dataset.qid);r&&In(r)}}),document.getElementById("sc-add-announcement").addEventListener("click",()=>Is());function Is(){var n;(n=document.getElementById("sc-ann-modal"))==null||n.remove();let e=null;const s=document.createElement("div");s.id="sc-ann-modal",s.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📣 สร้างประกาศ — ${l(f.class_name??"")}</h3>
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
            ${Pe.map(a=>`<button type="button" data-emoji="${a.emoji}" data-label="${l(a.label)}" class="ca-type-chip px-2.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50 transition">${a.emoji} ${a.label}</button>`).join("")}
          </div>
          <input id="ca-type-custom" type="text" list="ca-type-list" placeholder="หรือพิมพ์ประเภทใหม่เอง..."
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <datalist id="ca-type-list">${ke.map(a=>`<option value="${l(a)}"></option>`).join("")}</datalist>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">แนบไฟล์/รูปภาพ (เลือกได้หลายไฟล์ ไม่บังคับ)</label>
          <input id="ca-files" type="file" multiple class="w-full text-xs" />
        </div>
        <button id="ca-send" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">ส่งประกาศ</button>
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),s.querySelector("#ca-close").addEventListener("click",()=>s.remove());const t=s.querySelector("#ca-type-custom");s.querySelectorAll(".ca-type-chip").forEach(a=>a.addEventListener("click",()=>{e=`${a.dataset.emoji} ${a.dataset.label}`,t.value="",s.querySelectorAll(".ca-type-chip").forEach(r=>r.classList.remove("border-amber-400","bg-amber-100","text-amber-800")),a.classList.add("border-amber-400","bg-amber-100","text-amber-800")})),t.addEventListener("input",()=>{t.value.trim()&&(e=null,s.querySelectorAll(".ca-type-chip").forEach(a=>a.classList.remove("border-amber-400","bg-amber-100","text-amber-800")))}),s.querySelector("#ca-send").addEventListener("click",async()=>{const a=s.querySelector("#ca-text").value.trim();if(!a){b("พิมพ์ข้อความก่อนส่งนะ","warning");return}const r=t.value.trim()||e||`${Pe[0].emoji} ${Pe[0].label}`,o=s.querySelector("#ca-send");o.disabled=!0,o.textContent="กำลังส่ง...";try{const i=[...s.querySelector("#ca-files").files??[]],x=[];for(const g of i)x.push(await Nt(g,`class-${m}/announcements`));await tn({title:`📣 ${f.class_name}`,body:a,isActive:!0,teacherId:p.id,targetClassIds:[m],annType:r,attachmentUrls:x.length?x:null}),Ke(`${r} — ${f.class_name}`,a.slice(0,120),"sc-announcement"),b("ส่งประกาศถึงห้องนี้แล้ว 📣","success"),s.remove(),P()}catch(i){b("ส่งไม่สำเร็จ: "+(i.message??""),"error"),o.disabled=!1,o.textContent="ส่งประกาศ"}})}let Ie="daily";function Cs(){document.querySelectorAll(".sc-reftab-btn").forEach(t=>{t.classList.toggle("active",t.dataset.reftab===se)});const e=ge.find(t=>t.key===se),s=document.getElementById("sc-mobile-ref-title");s&&e&&(s.textContent=`${e.icon} ${e.label}`)}function ut(){var e,s,t,n,a,r,o,i;document.querySelectorAll(".sc-sched-tab").forEach(x=>{x.classList.toggle("active",x.dataset.sched===Ie),x.addEventListener("click",()=>{Ie=x.dataset.sched,document.querySelectorAll(".sc-sched-tab").forEach(g=>g.classList.toggle("active",g.dataset.sched===Ie)),document.getElementById("sc-schedule-body").innerHTML=et(Ie)})}),(e=document.getElementById("sc-add-syllabus"))==null||e.addEventListener("click",()=>mt()),(s=document.getElementById("sc-ai-syllabus"))==null||s.addEventListener("click",()=>Qt({teacher:p,cls:f,courseId:ne,syllabusItems:U,lessonPlans:X,currentWeek:ae||1,initialMode:"schedule",onSaved:()=>P()})),(t=document.getElementById("sc-syllabus-list"))==null||t.addEventListener("click",x=>{const g=x.target.closest(".sc-syllabus-row");if(!g)return;const d=U.find(c=>c.id===parseInt(g.dataset.sylid,10));d&&mt(d)}),(n=document.getElementById("sc-add-plan"))==null||n.addEventListener("click",()=>xt()),(a=document.getElementById("sc-ai-plan"))==null||a.addEventListener("click",()=>Qt({teacher:p,cls:f,courseId:ne,syllabusItems:U,lessonPlans:X,currentWeek:ae||1,initialMode:"plan",onSaved:()=>P()})),(r=document.getElementById("sc-plan-list"))==null||r.addEventListener("click",x=>{const g=x.target.closest(".sc-plan-reflect"),d=x.target.closest(".sc-plan-row");if(g){const c=X.find(u=>u.id===parseInt(g.dataset.planid,10));c&&On({plan:c,cls:f,teacher:p,classId:m,currentWeek:ae||c.week_start})}else if(d){const c=X.find(u=>u.id===parseInt(d.dataset.planid,10));c&&xt(c)}}),(o=document.getElementById("sc-add-assignment"))==null||o.addEventListener("click",()=>Qe()),(i=document.getElementById("sc-assignment-list"))==null||i.addEventListener("click",x=>{const g=x.target.closest(".sc-assignment-row");if(!g)return;const d=J.find(c=>c.id===parseInt(g.dataset.aid,10));d&&bt(d)})}ut();const Ms=()=>`
    <div class="grid grid-cols-2 gap-2 mb-5">
      <button id="sc-mobile-more-chat" class="min-h-[76px] rounded-xl border border-amber-100 bg-amber-50 text-xs font-bold text-amber-800">💬<br>แชทห้องเรียน</button>
      <button id="sc-mobile-more-ai" class="min-h-[76px] rounded-xl text-xs font-bold text-white" style="background:linear-gradient(135deg,#6366f1,#7c3aed)">✨<br>AI เตรียมการสอน</button>
      <button id="sc-mobile-more-ann" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">📣<br>สร้างประกาศ</button>
      <button id="sc-mobile-more-dashboard" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">📈<br>Dashboard</button>
      <button id="sc-mobile-more-switch" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">🔀<br>สลับห้อง</button>
      <button id="sc-mobile-more-exam" class="min-h-[76px] rounded-xl border border-gray-100 bg-white text-xs font-bold text-gray-700">📋<br>คิวสอบ</button>
    </div>
    <div id="sc-mobile-exam-preview">
      <p class="text-xs font-bold text-gray-600 mb-2">📋 คิวคำร้องสอบย้อนหลัง</p>
      ${tt()}
    </div>`;function Ts(){var e,s,t,n,a,r;(e=document.getElementById("sc-mobile-more-chat"))==null||e.addEventListener("click",lt),(s=document.getElementById("sc-mobile-more-ai"))==null||s.addEventListener("click",ot),(t=document.getElementById("sc-mobile-more-ann"))==null||t.addEventListener("click",()=>{var o;return(o=document.getElementById("sc-add-announcement"))==null?void 0:o.click()}),(n=document.getElementById("sc-mobile-more-dashboard"))==null||n.addEventListener("click",()=>{var o;return(o=document.getElementById("sc-dashboard"))==null?void 0:o.click()}),(a=document.getElementById("sc-mobile-more-switch"))==null||a.addEventListener("click",()=>{var o;return(o=document.getElementById("sc-switch-class"))==null?void 0:o.click()}),(r=document.getElementById("sc-mobile-more-exam"))==null||r.addEventListener("click",()=>{var o;return(o=document.getElementById("sc-mobile-exam-preview"))==null?void 0:o.scrollIntoView({behavior:"smooth",block:"start"})})}function As(){document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.classList.toggle("active",e.dataset.mobileGroup===je))}function Bs(){const e=document.getElementById("sc-mobile-ref-subtabs");if(!e)return;const s=je==="plan"?ge.filter(t=>["schedule","syllabus","plans"].includes(t.key)):[];e.innerHTML=s.map(t=>`<button type="button" data-mobile-ref-tab="${t.key}" class="${t.key===se?"active":""}">${t.icon} ${t.label}</button>`).join(""),e.querySelectorAll("[data-mobile-ref-tab]").forEach(t=>t.addEventListener("click",()=>Ce(t.dataset.mobileRefTab)))}function Ce(e){var s;ge.some(t=>t.key===e)&&(se=e,Cs(),document.getElementById("sc-reftab-body").innerHTML=rt(se),ut(),Bs(),window.matchMedia("(max-width: 1023px)").matches&&((s=document.getElementById("sc-reference-panel"))==null||s.classList.add("mobile-open")))}function pt(e){if(!at.some(a=>a.key===e))return;je=e,As();const s=document.getElementById("sc-mobile-room-section"),t=document.getElementById("sc-mobile-live-section");s==null||s.classList.toggle("mobile-active",e==="room"),t==null||t.classList.toggle("mobile-active",e==="live");const n=document.getElementById("sc-reference-panel");if(e==="room"||e==="live"){n==null||n.classList.remove("mobile-open"),window.scrollTo({top:0,behavior:"smooth"});return}if(e==="work")Ce("assignments");else if(e==="plan")Ce(["schedule","syllabus","plans"].includes(se)?se:"syllabus");else{const a=document.getElementById("sc-mobile-ref-title");a&&(a.textContent="••• เพิ่มเติม"),document.getElementById("sc-mobile-ref-subtabs").innerHTML="",document.getElementById("sc-reftab-body").innerHTML=Ms(),Ts(),n==null||n.classList.add("mobile-open")}}document.querySelectorAll(".sc-reftab-btn").forEach(e=>e.addEventListener("click",()=>Ce(e.dataset.reftab))),document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.addEventListener("click",()=>pt(e.dataset.mobileGroup))),(Tt=document.getElementById("sc-mobile-ref-close"))==null||Tt.addEventListener("click",()=>{pt("room")});function mt(e){var a,r;(a=document.getElementById("sc-syllabus-modal"))==null||a.remove();const s=!!e,t=e??{},n=document.createElement("div");n.id="sc-syllabus-modal",n.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
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
          <input id="sy-topic" type="text" value="${l(t.topic??"")}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียดเพิ่มเติม</label>
          <textarea id="sy-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none">${l(t.description??"")}</textarea>
        </div>
        <button id="sy-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">บันทึก</button>
      </div>`,document.body.appendChild(n),n.addEventListener("click",o=>{o.target===n&&n.remove()}),n.querySelector("#sy-close").addEventListener("click",()=>n.remove()),(r=n.querySelector("#sy-delete"))==null||r.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้?"))try{await un(t.id),b("ลบแล้ว","success"),n.remove(),P()}catch(o){b("ลบไม่สำเร็จ: "+(o.message??""),"error")}}),n.querySelector("#sy-save").addEventListener("click",async()=>{const o=parseInt(n.querySelector("#sy-week-start").value,10),i=parseInt(n.querySelector("#sy-week-end").value,10),x=n.querySelector("#sy-topic").value.trim();if(!o||!i||i<o){b("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}if(!x){b("กรอกหัวข้อก่อนนะ","warning");return}const g=n.querySelector("#sy-save");g.disabled=!0,g.textContent="กำลังบันทึก...";const d={course_id:ne,week_start:o,week_end:i,topic:x,description:n.querySelector("#sy-desc").value.trim()||null};try{s?await pn(t.id,d):await mn(d),b("บันทึกแล้ว ✅","success"),n.remove(),P()}catch(c){b("บันทึกไม่สำเร็จ: "+(c.message??""),"error"),g.disabled=!1,g.textContent="บันทึก"}})}function xt(e){var W,_,w,j;(W=document.getElementById("sc-plan-modal"))==null||W.remove();const s=!!e,t=e??{},n=(f==null?void 0:f.master_subjects)??{},a={MATH:"คณิตศาสตร์",THAI:"ภาษาไทย",SCI:"วิทยาศาสตร์และเทคโนโลยี",ENG:"ภาษาต่างประเทศ",SOC:"สังคมศึกษา ศาสนาและวัฒนธรรม",PE:"สุขศึกษาและพลศึกษา",ART:"ศิลปะ",CAREER:"การงานอาชีพ",ISLAM:"อิสลามศึกษา"},r=String(n.dept??n.subject_group??"").trim(),o=a[r.toUpperCase()]||r||"................................",i=String((f==null?void 0:f.class_name)??"").trim(),x=String(n.grade_level??"").replace(/ม\./g,"").trim(),g=/^ม\./.test(i)?i.replace(/^ม\./,""):[x,i].filter(Boolean).join(" "),d=f==null?void 0:f.students,c=(Array.isArray(d)?(_=d[0])==null?void 0:_.full_name:d==null?void 0:d.full_name)??"................................",u=document.createElement("div");u.id="sc-plan-modal",u.className="fixed inset-0 z-[95] bg-slate-100 flex flex-col",u.innerHTML=`
      <style>
        #sc-plan-modal .lp-toolbar{height:64px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;gap:10px;padding:9px 14px;flex:none;position:relative;z-index:3}
        #sc-plan-modal .lp-admin-input{height:40px;border:1px solid #dbe2ea;border-radius:10px;padding:0 10px;background:#fff;font-size:12px;color:#334155}
        #sc-plan-modal .lp-editor-scroll{flex:1;min-height:0;overflow:auto;padding:22px}
        #sc-plan-modal .lp-paper{width:210mm;min-height:297mm;margin:0 auto;background:white;box-shadow:0 15px 45px rgba(15,23,42,.16);padding:10mm 11mm 11mm;color:#111;font-family:"Sarabun",Tahoma,sans-serif;font-size:14px;line-height:1.42}
        #sc-plan-modal .lp-head{text-align:center}.lp-head img{width:58px;height:58px;object-fit:contain;margin:auto}.lp-head h1{font-size:23px;line-height:1.15;font-weight:800;margin:5px 0 4px}.lp-head h2{font-size:17px;line-height:1.2;font-weight:700;margin:0 0 4px}.lp-subject-line{font-size:14px;margin:2px 0}.lp-unit-row{display:flex;align-items:center;justify-content:center;gap:4px;white-space:nowrap}.lp-unit-row input{min-width:0;text-align:center}
        #sc-plan-modal .lp-doc-input,#sc-plan-modal .lp-doc-area{font:inherit;color:#111;background:transparent;border:1px dashed transparent;border-radius:4px;padding:2px 4px;outline:none;width:100%;resize:none;overflow:hidden}
        #sc-plan-modal .lp-doc-input:hover,#sc-plan-modal .lp-doc-area:hover{background:#f8fafc;border-color:#cbd5e1}#sc-plan-modal .lp-doc-input:focus,#sc-plan-modal .lp-doc-area:focus{background:#fffef2;border-color:#0f7a42;box-shadow:0 0 0 2px rgba(15,122,66,.12)}
        #sc-plan-modal .lp-meta{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border-top:1.5px solid #176b3a;border-bottom:1.5px solid #176b3a;margin-top:10px;padding:6px 7px}.lp-meta label{display:flex;align-items:center;gap:3px;white-space:nowrap}.lp-meta label:nth-child(2){justify-content:center}.lp-meta label:last-child{justify-content:flex-end}.lp-meta input[type=number]{width:58px}.lp-meta input[type=date]{width:128px}
        #sc-plan-modal .lp-columns{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px}.lp-box{border:1.2px solid #17743d;border-radius:5px;overflow:hidden;margin-bottom:11px}.lp-box-title{background:#d8f6e2;color:#145f35;font-size:15px;padding:7px 10px;border-bottom:1px solid #17743d}.lp-box-body{padding:8px 10px}.lp-box-body textarea{min-height:62px}.lp-activities textarea{min-height:48px}.lp-activities .main{min-height:126px}.lp-media textarea{min-height:48px}
        #sc-plan-modal .lp-sign-pair{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:36px}.lp-sign{text-align:center;font-size:12px;line-height:1.55}.lp-sign-space{height:44px}.lp-sign-line{border-bottom:1px dotted #111;height:1px;margin:0 4px 5px}.lp-reflect{margin-top:28px}.lp-reflect h3,.lp-suggestion h3{font-size:14px;font-weight:500;border-bottom:1px solid #111;padding-bottom:4px;margin:0 0 9px}.lp-rule{height:31px;border-bottom:1px solid #8ca1bd;color:#176b3a;padding:3px 8px;font-size:12px}.lp-suggestion{margin-top:22px}.lp-dept-sign{width:72%;margin:72px auto 0;text-align:center;font-size:12px;line-height:1.6}.lp-dept-sign .lp-sign-line{display:inline-block;width:180px;vertical-align:middle}
        #sc-plan-modal .lp-extra{position:relative;flex:none}.lp-extra summary{cursor:pointer;list-style:none}.lp-extra-content{position:absolute;top:46px;right:0;width:360px;background:#fff;border:1px solid #dbe2ea;border-radius:14px;box-shadow:0 16px 40px rgba(15,23,42,.18);padding:14px;z-index:5}.lp-extra textarea{width:100%;border:1px solid #dbe2ea;border-radius:9px;padding:8px;font-size:12px;resize:vertical}
        @media(max-width:720px){#sc-plan-modal .lp-toolbar{height:auto;min-height:64px;flex-wrap:wrap;padding:8px}.lp-toolbar .lp-hide-mobile{display:none}#sc-plan-modal .lp-editor-scroll{padding:10px}.lp-extra-content{position:fixed!important;right:8px!important;top:62px!important;width:calc(100vw - 16px)!important}}
      </style>
      <header class="lp-toolbar">
        <button id="lp-close" class="w-10 h-10 flex-none rounded-xl border text-gray-500 hover:bg-gray-50" aria-label="ปิด">←</button>
        <div class="min-w-0 mr-auto"><p class="font-extrabold text-sm text-gray-800 truncate">${s?"แก้ไขแผนการสอน":"สร้างแผนการสอนใหม่"}</p><p class="text-[10px] text-gray-400 lp-hide-mobile">แก้ไขบนหน้ากระดาษตามแบบฟอร์มจริง</p></div>
        <input id="lp-title" value="${l(t.title??"")}" placeholder="ชื่อแผน *" class="lp-admin-input w-48 lp-hide-mobile">
        <label class="text-[10px] text-gray-500 lp-hide-mobile">สัปดาห์ <input id="lp-week-start" type="number" min="1" value="${t.week_start??""}" class="lp-admin-input w-16 ml-1"></label>
        <label class="text-[10px] text-gray-500 lp-hide-mobile">ถึง <input id="lp-week-end" type="number" min="1" value="${t.week_end??""}" class="lp-admin-input w-16 ml-1"></label>
        <details class="lp-extra"><summary class="h-10 px-3 rounded-xl border flex items-center justify-center text-xs font-bold text-gray-600 bg-white">⚙️ ข้อมูลเพิ่มเติม</summary><div class="lp-extra-content"><div class="grid grid-cols-2 gap-2 mb-2 sm:hidden"><label class="text-[10px] text-gray-500">ชื่อแผน<input id="lp-title-mobile" value="${l(t.title??"")}" class="lp-admin-input w-full mt-1"></label><label class="text-[10px] text-gray-500">สัปดาห์<input id="lp-week-mobile" value="${t.week_start??""}" class="lp-admin-input w-full mt-1"></label></div><label class="block text-[10px] font-bold text-gray-500">งาน/การบ้าน<textarea id="lp-homework" rows="3" class="mt-1">${l(t.homework??"")}</textarea></label><label class="block text-[10px] font-bold text-gray-500 mt-2">หมายเหตุครู<textarea id="lp-teacher_notes" rows="3" class="mt-1">${l(t.teacher_notes??"")}</textarea></label></div></details>
        ${s?'<button id="lp-delete" class="h-10 px-3 flex-none rounded-xl border border-red-100 text-xs font-bold text-red-500 hover:bg-red-50">🗑️ <span class="lp-hide-mobile">ลบ</span></button>':""}
        <button id="lp-save" class="h-10 px-4 flex-none rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm">💾 บันทึกแผน</button>
      </header>
      <main class="lp-editor-scroll">
        <article class="lp-paper animate-fade">
          <section class="lp-head">
            <img src="./pp5-form-logo.png" alt="ตราโรงเรียน">
            <h1>แผนการจัดการเรียนรู้(หน้าเดียว)</h1>
            <h2>กลุ่มสาระการเรียนรู้${l(o)}</h2>
            <p class="lp-subject-line">วิชา ${l(n.subject_name??"")} รหัสวิชา ${l(n.subject_code??"")} ชั้นมัธยมศึกษาปีที่ ${l(g||"................................")}</p>
            <div class="lp-unit-row">หน่วยการเรียนรู้ <input id="lp-unit-title" class="lp-doc-input" value="${l(t.unit_title??"")}" placeholder="หน่วยการเรียนรู้ที่ 1"> เรื่อง <input id="lp-key_concept" class="lp-doc-input" value="${l(t.key_concept??"")}" placeholder="เรื่องที่สอน"></div>
          </section>
          <section class="lp-meta">
            <label>ครั้งที่ <input id="lp-session-number" type="number" min="1" class="lp-doc-input" value="${t.session_number??1}"></label>
            <label>เวลา <input id="lp-duration" type="number" min="1" class="lp-doc-input" value="${t.duration_minutes??100}"> นาที</label>
            <label>วันที่ <input id="lp-lesson-date" type="date" class="lp-doc-input" value="${l(t.lesson_date??"")}"></label>
          </section>
          <section class="lp-columns">
            <div>
              <div class="lp-box"><div class="lp-box-title">1.มาตรฐาน/ตัวชี้วัด (ผลการเรียนรู้)</div><div class="lp-box-body"><textarea id="lp-standards" class="lp-doc-area" rows="5">${l(t.standards??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">2.จุดประสงค์การเรียนรู้</div><div class="lp-box-body"><textarea id="lp-objectives" class="lp-doc-area" rows="5">${l(t.objectives??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">3.กิจกรรมการเรียนรู้</div><div class="lp-box-body lp-activities"><b>ขั้นนำเข้าสู่บทเรียน</b><textarea id="lp-activities_intro" class="lp-doc-area" rows="3">${l(t.activities_intro??"")}</textarea><b>ขั้นสอน</b><textarea id="lp-activities_main" class="lp-doc-area main" rows="7">${l(t.activities_main??"")}</textarea><b>ขั้นสรุป</b><textarea id="lp-activities_wrap" class="lp-doc-area" rows="3">${l(t.activities_wrap??"")}</textarea></div></div>
              <div class="lp-box"><div class="lp-box-title">4.การวัดและประเมินผล</div><div class="lp-box-body"><textarea id="lp-assessment" class="lp-doc-area" rows="3">${l(t.assessment??"")}</textarea></div></div>
            </div>
            <div>
              <div class="lp-box lp-media"><div class="lp-box-title">5.สื่อการเรียนรู้</div><div class="lp-box-body"><textarea id="lp-media" class="lp-doc-area" rows="3">${l(t.media??"")}</textarea></div></div>
              <div class="lp-sign-pair">
                <div class="lp-sign"><div class="lp-sign-space"></div><div>ลงชื่อ</div><div class="lp-sign-line"></div><div>หัวหน้าห้อง</div><div>( ${l(c)} )</div><div>วันที่ ${t.lesson_date?l(t.lesson_date):"........................"}</div></div>
                <div class="lp-sign"><div class="lp-sign-space"></div><div>ลงชื่อ</div><div class="lp-sign-line"></div><div>ครูผู้สอน</div><div>( ${l((p==null?void 0:p.full_name)??"................................")} )</div><div>วันที่ ${t.lesson_date?l(t.lesson_date):"........................"}</div></div>
              </div>
              <div class="lp-reflect"><h3>บันทึกหลังการสอน</h3><div class="lp-rule">ผลการจัดการเรียนรู้:</div><div class="lp-rule"></div><div class="lp-rule">แนวทางการแก้ปัญหา:</div><div class="lp-rule"></div></div>
              <div class="lp-suggestion"><h3>ข้อเสนอแนะ</h3><div class="lp-rule"></div><div class="lp-rule"></div><div class="lp-rule"></div></div>
              <div class="lp-dept-sign">ลงชื่อ <span class="lp-sign-line"></span> หัวหน้ากลุ่มสาระ<div>( ................................ )</div><div>วันที่ ................................</div></div>
            </div>
          </section>
        </article>
      </main>`,document.body.appendChild(u),u.querySelector("#lp-close").addEventListener("click",()=>u.remove());const S=u.querySelector("#lp-title"),C=u.querySelector("#lp-title-mobile");C==null||C.addEventListener("input",()=>{S.value=C.value}),S==null||S.addEventListener("input",()=>{C&&(C.value=S.value)}),(w=u.querySelector("#lp-week-mobile"))==null||w.addEventListener("input",z=>{u.querySelector("#lp-week-start").value=z.target.value,u.querySelector("#lp-week-end").value=z.target.value}),(j=u.querySelector("#lp-delete"))==null||j.addEventListener("click",async()=>{if(confirm(`ลบแผน "${t.title}"? บันทึกหลังสอน/ลายเซ็นที่ผูกกับแผนนี้จะหายไปด้วย`))try{await xn(t.id),b("ลบแผนแล้ว","success"),u.remove(),P()}catch(z){b("ลบไม่สำเร็จ: "+(z.message??""),"error")}}),u.querySelector("#lp-save").addEventListener("click",async()=>{const z=u.querySelector("#lp-title").value.trim(),D=parseInt(u.querySelector("#lp-week-start").value,10),V=parseInt(u.querySelector("#lp-week-end").value,10);if(!z){b("กรอกชื่อแผนก่อนนะ","warning");return}if(!D||!V||V<D){b("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}const N=u.querySelector("#lp-save");N.disabled=!0,N.textContent="กำลังบันทึก...";const G={course_id:ne,teacher_id:p.id,title:z,week_start:D,week_end:V,session_number:parseInt(u.querySelector("#lp-session-number").value,10)||1,lesson_date:u.querySelector("#lp-lesson-date").value||null,duration_minutes:parseInt(u.querySelector("#lp-duration").value,10)||null,unit_title:u.querySelector("#lp-unit-title").value.trim()||null,standards:u.querySelector("#lp-standards").value.trim()||null,objectives:u.querySelector("#lp-objectives").value.trim()||null,key_concept:u.querySelector("#lp-key_concept").value.trim()||null,activities_intro:u.querySelector("#lp-activities_intro").value.trim()||null,activities_main:u.querySelector("#lp-activities_main").value.trim()||null,activities_wrap:u.querySelector("#lp-activities_wrap").value.trim()||null,media:u.querySelector("#lp-media").value.trim()||null,assessment:u.querySelector("#lp-assessment").value.trim()||null,homework:u.querySelector("#lp-homework").value.trim()||null,teacher_notes:u.querySelector("#lp-teacher_notes").value.trim()||null};try{s?await bn(t.id,G):await gn(G),b("บันทึกแผนแล้ว ✅","success"),u.remove(),P()}catch(le){b("บันทึกไม่สำเร็จ: "+(le.message??""),"error"),N.disabled=!1,N.textContent="บันทึกแผน"}})}const zs=e=>{if(!e)return"";const s=new Date(e),t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`};function Qe(e){var W,_;(W=document.getElementById("sc-assign-modal"))==null||W.remove();const s=!!e,t=e??{};let n=[...t.attachment_urls??[]];const a=document.createElement("div");a.id="sc-assign-modal",a.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`
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
          <input id="sa-title" type="text" value="${l(t.title??"")}" placeholder="เช่น ใบงานที่ 3 — สมการเชิงเส้น" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label>
          <textarea id="sa-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300">${l(t.description??"")}</textarea>
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
            ${L.map(w=>`<option value="${w.id}" ${t.score_column_id===w.id?"selected":""}>${l(w.assignment_name)} (เต็ม ${w.max_score})</option>`).join("")}
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
              ${Object.entries(De).map(([w,j])=>`<option value="${w}" ${(t.score_write_mode??"overwrite")===w?"selected":""}>${j.label}</option>`).join("")}
            </select>
            <p id="sa-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">กำหนดส่ง</label>
          <input id="sa-due" type="datetime-local" value="${zs(t.due_at)}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",w=>{w.target===a&&a.remove()}),a.querySelector("#sa-close").addEventListener("click",()=>a.remove()),(_=a.querySelector("#sa-delete"))==null||_.addEventListener("click",async()=>{if(confirm(`ลบงาน "${t.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await Ht(t.id),b("ลบงานแล้ว","success"),a.remove(),P()}catch(w){b("ลบไม่สำเร็จ: "+(w.message??""),"error")}});const r=a.querySelector("#sa-kept-files"),o=()=>{r.innerHTML=n.map((w,j)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${l(w.name)}
          <button type="button" class="sa-remove-file text-indigo-400 hover:text-red-500 font-bold" data-i="${j}">✕</button>
        </span>`).join(""),r.querySelectorAll(".sa-remove-file").forEach(w=>w.addEventListener("click",()=>{n.splice(parseInt(w.dataset.i,10),1),o()}))};o();const i=a.querySelector("#sa-penalty-mode"),x=a.querySelector("#sa-penalty-value"),g=a.querySelector("#sa-penalty-hint");i.addEventListener("change",()=>{x.disabled=i.value==="none",x.disabled?(x.classList.add("bg-gray-50"),x.value=""):x.classList.remove("bg-gray-50"),g.textContent=i.value==="flat"?"หักคะแนนเท่านี้ทันทีถ้าส่งช้า ไม่ว่าจะช้ากี่วัน":i.value==="per_day"?"หักคะแนนเท่านี้ต่อวันที่ส่งช้า (คูณตามจำนวนวัน)":""});const d=a.querySelector("#sa-col"),c=a.querySelector("#sa-write-mode-wrap"),u=a.querySelector("#sa-write-mode"),S=a.querySelector("#sa-write-mode-hint"),C=()=>{var w;c.classList.toggle("hidden",!d.value),S.textContent=((w=De[u.value])==null?void 0:w.hint)??""};d.addEventListener("change",C),u.addEventListener("change",C),C(),a.querySelector("#sa-save").addEventListener("click",async()=>{const w=a.querySelector("#sa-title").value.trim();if(!w){b("กรอกชื่องานก่อนนะ","warning");return}const j=a.querySelector("#sa-save");j.disabled=!0,j.textContent="กำลังบันทึก...";try{const z=[...a.querySelector("#sa-files").files??[]],D=[];for(const le of z)D.push(await Nt(le,`class-${m}`));const V=a.querySelector("#sa-due").value,N=a.querySelector("#sa-max-score").value.trim(),G={score_column_id:d.value?parseInt(d.value,10):null,title:w,description:a.querySelector("#sa-desc").value.trim()||null,attachment_urls:[...n,...D],due_at:V?new Date(V).toISOString():null,late_penalty_mode:i.value,late_penalty_value:parseFloat(x.value)||0,score_write_mode:u.value,max_score:N===""?null:parseFloat(N)};s?(await sn(t.id,G),b("บันทึกการแก้ไขแล้ว ✅","success")):(await nn({...G,class_id:m,teacher_id:p.id}),Ke(`📚 งานใหม่ — ${f.class_name}`,w,"sc-assignment"),b("สั่งงานสำเร็จ ✅","success")),a.remove(),P()}catch(z){b("บันทึกไม่สำเร็จ: "+(z.message??""),"error"),j.disabled=!1,j.textContent=s?"บันทึกการแก้ไข":"บันทึกงาน"}})}function bt(e){var i,x,g;(i=document.getElementById("sc-track-modal"))==null||i.remove();const s=Object.fromEntries(e.submissions.map(d=>[d.student_id,d]));L.find(d=>d.id===e.score_column_id);const t=document.createElement("div");t.id="sc-track-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-fade">
        <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-bold text-gray-800 truncate">${l(e.title)}</p>
              <p class="text-xs text-gray-400 mt-0.5">${e.description?l(e.description)+" · ":""}กำหนดส่ง ${Ne(e.due_at)}</p>
              ${(x=e.attachment_urls)!=null&&x.length?`<div class="flex flex-wrap gap-1.5 mt-2">${e.attachment_urls.map(d=>`<a href="${l(d.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${l(d.name)}</a>`).join("")}</div>`:""}
            </div>
            <div class="flex gap-2 flex-shrink-0">
              <button id="st-edit" class="text-[11px] text-indigo-500 hover:text-indigo-700 px-2 py-1">✏️ แก้ไข</button>
              <button id="st-delete" class="text-[11px] text-red-400 hover:text-red-600 px-2 py-1">🗑️ ลบ</button>
              <button id="st-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
            </div>
          </div>
          <div class="flex items-center justify-between mt-2 gap-2">
            <p class="text-[11px] text-gray-400 flex-shrink-0">${e.submissions.length}/${y.length} ส่งแล้ว</p>
            <label class="flex items-center gap-1.5 text-[11px] text-gray-500 cursor-pointer select-none">
              <input id="st-sort-toggle" type="checkbox" class="w-3.5 h-3.5 rounded accent-indigo-500" />
              เรียงตามสถานะ
            </label>
            <button id="st-review-start" class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 flex-shrink-0">🔎 ตรวจทีละคน</button>
          </div>
        </div>
        <div class="overflow-y-auto flex-1 p-5 space-y-2" id="st-row-list"></div>
      </div>`,document.body.appendChild(t);const n=d=>{var _;const c=`<div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[10px] flex-shrink-0">
        ${d.image_url?`<img src="${l(d.image_url)}" class="w-full h-full object-cover"/>`:l((d.full_name??"?").charAt(0))}
      </div>`,u=`<span class="text-gray-400 font-mono text-[10px] flex-shrink-0">#${Z.get(d.id)??"—"}</span>`,S=s[d.id];if(!S)return`<div class="sc-track-row flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs cursor-pointer hover:border-indigo-200" data-sid="${d.id}">
        <div class="flex items-center gap-2 min-w-0">
          ${c}
          ${u}
          <span class="font-semibold text-gray-600 truncate">${l(d.full_name??"")}</span>
        </div>
        <span class="text-gray-300 font-medium flex-shrink-0">ยังไม่ส่ง</span>
      </div>`;const C=Le(e,S.submitted_at),W=Me(S);return`<div class="sc-track-row px-3 py-2.5 rounded-xl border ${C?"border-amber-200 bg-amber-50":"border-gray-100 bg-gray-50"} text-xs cursor-pointer hover:border-indigo-200" data-sid="${d.id}">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${c}
            ${u}
            <span class="font-semibold text-gray-700 truncate">${l(d.full_name??"")}</span>
          </div>
          <span class="text-gray-400 flex-shrink-0">${new Date(S.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</span>
        </div>
        <div class="flex items-center justify-between mt-1.5">
          ${(_=S.file_urls)!=null&&_.length?`<div class="flex flex-wrap gap-1.5">${S.file_urls.map(w=>`<span class="text-[10px] px-2 py-1 rounded-lg bg-white border border-gray-200 text-indigo-600">📎 ${l(w.name)}</span>`).join("")}</div>`:"<span></span>"}
          ${gt(W)}
        </div>
        ${C?`<p class="text-[10px] text-amber-700 font-bold mt-1.5">⏰ ส่งช้า ${Oe(e,S.submitted_at)} วัน</p>`:""}
      </div>`};let a=!1;const r=()=>{const d=a?[...y].sort((c,u)=>ft[Me(s[c.id])]-ft[Me(s[u.id])]):y;t.querySelector("#st-row-list").innerHTML=d.map(n).join(""),t.querySelectorAll(".sc-track-row").forEach(c=>c.addEventListener("click",()=>{yt(e,parseInt(c.dataset.sid,10))}))};t._refresh=r,r(),t.addEventListener("click",d=>{d.target===t&&t.remove()}),t.querySelector("#st-close").addEventListener("click",()=>t.remove()),t.querySelector("#st-edit").addEventListener("click",()=>{t.remove(),Qe(e)}),t.querySelector("#st-delete").addEventListener("click",async()=>{if(confirm(`ลบงาน "${e.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await Ht(e.id),b("ลบงานแล้ว","success"),t.remove(),P()}catch(d){b("ลบไม่สำเร็จ: "+(d.message??""),"error")}}),t.querySelector("#st-sort-toggle").addEventListener("change",d=>{a=d.target.checked,r()});const o=()=>{var d;return(d=y.find(c=>s[c.id])??y[0])==null?void 0:d.id};(g=t.querySelector("#st-review-start"))==null||g.addEventListener("click",()=>{const d=o();d!=null&&yt(e,d)})}const Me=e=>e?e.status==="rejected"?"rejected":e.hasScore?"graded":e.reviewed_at?"reviewed":"unreviewed":"unsubmitted",gt=e=>({unreviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex-shrink-0">🔵 ยังไม่ตรวจ</span>',reviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">🟡 ตรวจแล้ว ยังไม่ให้คะแนน</span>',graded:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">✅ ให้คะแนนแล้ว</span>',rejected:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex-shrink-0">❌ ตีกลับ รอส่งใหม่</span>'})[e]??"",ft={unreviewed:0,unsubmitted:1,reviewed:2,rejected:3,graded:4},Ue={praise:["ทำได้ดีมากครับ/ค่ะ เห็นความตั้งใจชัดเจน ขอให้อัลลอฮ์ทรงประทานบารอกัตในความพยายามของเธอนะ 🌟","เก่งมากเลย ครูภูมิใจในตัวเธอ ขอดุอาอ์ให้พัฒนาต่อไปเรื่อยๆ อินชาอัลลอฮ์","ยอดเยี่ยม! งานชิ้นนี้แสดงถึงความพยายามที่ดีมาก ขอให้เป็นบารอกัตติดตัวเธอไปตลอด","สุดยอดค่ะ/ครับ ทำมาได้ดีมาก ครูขอดุอาอ์ให้เธอประสบความสำเร็จเสมอ"],improve:["ทำได้ดีในหลายจุดแล้วนะ ลองทบทวนอีกครั้งในส่วนที่ยังไม่สมบูรณ์ ครูเชื่อว่าเธอทำได้ดีกว่านี้ อินชาอัลลอฮ์","ครูเห็นความตั้งใจแล้ว ลองกลับไปทบทวนเพิ่มอีกนิดแล้วส่งใหม่ได้นะ ครูให้กำลังใจอยู่เสมอ","ยังไม่สมบูรณ์เท่าที่ควร แต่ไม่เป็นไรนะ ทุกความผิดพลาดคือบทเรียน ลองแก้ไขแล้วส่งมาใหม่ได้เลย","อยากให้ตรวจทานอีกรอบก่อนส่งครั้งหน้า ครูเชื่อมั่นในศักยภาพของเธอ ขอให้อัลลอฮ์ทรงช่วยให้เข้าใจง่ายขึ้นนะ"]},Hs=e=>{var t;const s=((t=(e.name??"").split(".").pop())==null?void 0:t.toLowerCase())??"";return["jpg","jpeg","png","gif","webp"].includes(s)?"image":s==="pdf"?"pdf":"other"};function yt(e,s){var g;(g=document.getElementById("sc-grade-card"))==null||g.remove();const t=Object.fromEntries(e.submissions.map(d=>[d.student_id,d])),n=L.find(d=>d.id===e.score_column_id);let a=Math.max(0,y.findIndex(d=>d.id===s));const r=document.createElement("div");r.id="sc-grade-card",r.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/55 p-4",document.body.appendChild(r);const o=e.max_score!=null?parseFloat(e.max_score):n?parseFloat(n.max_score):null,i=()=>{var j,z,D,V,N,G,le,Te,he,h;const d=y[a],c=t[d.id],u=c&&Le(e,c.submitted_at),S=c?ps(e,c.submitted_at):0,C=c!=null&&c.hasScore?c.savedScore??"":o!=null?Math.max(0,(o||0)-S):"";c&&!c.reviewed_at&&(c.reviewed_at=new Date().toISOString(),ln(e.id,d.id).catch(()=>{}));const W=c&&(j=c.file_urls)!=null&&j.length?c.file_urls.map(v=>{const k=Hs(v);return k==="image"?`<a href="${l(v.url)}" target="_blank" rel="noopener" class="block rounded-xl overflow-hidden border border-gray-200 mb-2"><img src="${l(v.url)}" class="w-full max-h-72 object-contain bg-gray-50" loading="lazy" /></a>`:k==="pdf"?`<iframe src="${l(v.url)}" class="w-full h-72 rounded-xl border border-gray-200 mb-2"></iframe>`:`<a href="${l(v.url)}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-indigo-600 hover:bg-indigo-50 mb-2">📎 ${l(v.name)} <span class="text-gray-400">(เปิดแท็บใหม่ — ไม่รองรับพรีวิว)</span></a>`}).join(""):"";r.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <button id="sgc-prev" ${a<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-11 h-11 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0">
                ${d.image_url?`<img src="${l(d.image_url)}" class="w-full h-full object-cover"/>`:l((d.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate text-sm">${l(d.full_name??"—")}</p>
                <p class="text-[11px] text-gray-400">เลขที่ ${Z.get(d.id)??"—"} · ${l(d.student_code??"")}</p>
              </div>
              <button id="sgc-next" ${a>=y.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sgc-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sgc-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sgc-jump" type="number" min="1" max="${y.length}" value="${Z.get(d.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${y.length}</span>
              <span class="text-[11px] text-gray-300 ml-auto">${a+1} / ${y.length} คน</span>
            </div>
            ${c?`<div class="mt-2">${gt(Me(c))}</div>`:""}
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${c?`
              <p class="text-[11px] text-gray-400 mb-2">ส่งเมื่อ ${new Date(c.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</p>
              ${u?`<p class="text-[11px] text-amber-700 font-bold mb-2">⏰ ส่งช้า ${Oe(e,c.submitted_at)} วัน${S>0?` — หักคะแนนแนะนำ ${S}`:""}</p>`:""}
              ${W}
              ${c.note?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3"><p class="text-[10px] font-bold text-gray-400 mb-0.5">ข้อความจากนักเรียน</p><p class="text-xs text-gray-600">${l(c.note)}</p></div>`:""}
              ${n?`<div class="mb-3">
                <div class="flex items-center gap-2">
                  <input id="sgc-grade" type="number" min="0" max="${o??""}" class="w-20 text-center border border-gray-200 rounded-lg px-1 py-1.5 font-mono font-bold text-indigo-600" value="${C}" placeholder="—" />
                  <span class="text-xs text-gray-400">/ ${o??n.max_score}</span>
                  <button id="sgc-grade-save" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg ml-auto">บันทึกคะแนน</button>
                </div>
                <p class="text-[10px] text-gray-400 mt-1">โหมดคะแนน: ${((z=De[e.score_write_mode??"overwrite"])==null?void 0:z.label)??""} · บันทึกอัตโนมัติเมื่อออกจากช่องกรอก</p>
              </div>`:'<p class="text-[11px] text-gray-300 mb-3">งานนี้ไม่ได้ผูกกับคอลัมน์คะแนน</p>'}
              <div>
                <label for="sgc-feedback" class="text-[11px] font-bold text-gray-500 mb-1 block">คอมเมนต์ถึงนักเรียน</label>
                <div class="flex flex-wrap gap-1.5 mb-1.5">
                  <span class="text-[10px] text-gray-400 flex items-center">💚 ชื่นชม:</span>
                  ${Ue.praise.map((v,k)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100" data-tmpl="praise-${k}">ตัวอย่าง ${k+1}</button>`).join("")}
                </div>
                <div class="flex flex-wrap gap-1.5 mb-2">
                  <span class="text-[10px] text-gray-400 flex items-center">💡 ปรับปรุง:</span>
                  ${Ue.improve.map((v,k)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100" data-tmpl="improve-${k}">ตัวอย่าง ${k+1}</button>`).join("")}
                </div>
                <textarea id="sgc-feedback" rows="2" placeholder="เช่น ทำได้ดีมาก แต่ข้อ 3 ทบทวนอีกครั้ง — หรือกดตัวอย่างด้านบนแล้วแก้ไขต่อได้" class="w-full text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none">${l(c.teacher_feedback??"")}</textarea>
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
        </div>`,r.querySelector("#sgc-close").addEventListener("click",()=>x()),(D=r.querySelector("#sgc-prev"))==null||D.addEventListener("click",()=>{a>0&&(a--,i())}),(V=r.querySelector("#sgc-next"))==null||V.addEventListener("click",()=>{a<y.length-1&&(a++,i())});const _=()=>{const v=r.querySelector("#sgc-jump"),k=parseInt(v.value,10),q=Ge.get(k);if(!q){b(`ไม่พบเลขที่ ${v.value}`,"warning"),v.value=Z.get(d.id)??"";return}const E=y.findIndex(pe=>pe.id===q.id);E!==a&&(a=E,i())};(N=r.querySelector("#sgc-jump"))==null||N.addEventListener("change",_),(G=r.querySelector("#sgc-jump"))==null||G.addEventListener("keydown",v=>{v.key==="Enter"&&_()});const w=async()=>{const v=r.querySelector("#sgc-grade-save"),k=r.querySelector("#sgc-grade").value.trim(),q=k===""?0:parseFloat(k);if(!Number.isFinite(q)||q<0||o!=null&&q>o){b(`คะแนนต้องอยู่ระหว่าง 0 – ${o??n.max_score}`,"warning");return}v.disabled=!0;try{const E=await cn(e.id,d.id,q);c.hasScore=!0,c.savedScore=q;const pe=te[d.id]??(te[d.id]=[]);let Ae=pe.find(Ps=>Ps.score_column_id===E.columnId);Ae||(Ae={student_id:d.id,score_column_id:E.columnId},pe.push(Ae)),Object.assign(Ae,{score:E.score,original_score:E.originalScore,retake_score:E.retakeScore,final_score:E.finalScore,score_history:E.scoreHistory}),Nn(E);const At=document.getElementById("sc-roster");At&&(At.innerHTML=qe()),b("บันทึกคะแนนแล้ว ✅","success"),i()}catch(E){b("บันทึกไม่สำเร็จ: "+(E.message??""),"error"),v.disabled=!1}};(le=r.querySelector("#sgc-grade-save"))==null||le.addEventListener("click",w),(Te=r.querySelector("#sgc-grade"))==null||Te.addEventListener("change",w),r.querySelectorAll(".sgc-tmpl").forEach(v=>v.addEventListener("click",()=>{const[k,q]=v.dataset.tmpl.split("-"),E=r.querySelector("#sgc-feedback");E.value=Ue[k][parseInt(q,10)],E.focus()})),(he=r.querySelector("#sgc-feedback-save"))==null||he.addEventListener("click",async()=>{const v=r.querySelector("#sgc-feedback-save"),k=r.querySelector("#sgc-feedback").value.trim();v.disabled=!0;try{await on(e.id,d.id,k),c.teacher_feedback=k,b("บันทึกคอมเมนต์แล้ว ✅","success")}catch(q){b("บันทึกไม่สำเร็จ: "+(q.message??""),"error")}finally{v.disabled=!1}}),(h=r.querySelector("#sgc-reject"))==null||h.addEventListener("click",async()=>{const v=r.querySelector("#sgc-feedback").value.trim();if(!v){b("กรอกเหตุผลในช่องคอมเมนต์ก่อนตีกลับงาน","warning"),r.querySelector("#sgc-feedback").focus();return}if(!confirm(`ตีกลับงานของ "${d.full_name}" ให้แก้ไขใหม่?

เหตุผล: ${v}`))return;const k=r.querySelector("#sgc-reject");k.disabled=!0;try{await dn(e.id,d.id,v),c.status="rejected",c.teacher_feedback=v,b("ตีกลับงานแล้ว — นักเรียนจะเห็นเหตุผลนี้และส่งใหม่ได้","success"),i()}catch(q){b("ตีกลับไม่สำเร็จ: "+(q.message??""),"error"),k.disabled=!1}})},x=()=>{var d,c;r.remove(),(c=(d=document.getElementById("sc-track-modal"))==null?void 0:d._refresh)==null||c.call(d)};r.addEventListener("click",d=>{d.target===r&&x()}),i()}}export{Wn as canUseSmartClassroomForClass,Vn as findCurrentOrNextClass,$a as openSmartClassroomLanding,me as renderSmartClassroom,es as resolveSmartClassroomAccess};
