const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-gbYPBFWO.js","assets/ui-FQqAmrdo.js","assets/version.js_v_10.22-ffVTG8-v.js","assets/quiz-api-DaBneRGn.js","assets/supabase-BV-W2lsh.js","assets/import-D0GLDW1_.js","assets/teacher-views-utils-BWmONzsh.js","assets/katex-loader-DUJObfzT.js","assets/chat-classroom-C_x4nE16.js","assets/api-Cf_Y4s92.js","assets/student-api-GdZ3AenK.js","assets/storage-D6nkcVz6.js"])))=>i.map(i=>d[i]);
import{a as b,g as M,n as Rs,_ as zt}from"./ui-FQqAmrdo.js";import{getSystemConfig as Zt,getMyClasses as $e,getMySchedule as Jt,getClassScheduleLinks as Kt,getPeriods as es,setSmartClassroomFreeClass as ts,getClassStudents as Qs,getActiveLeavePermissionsForClass as Us,getLeaveMaxActiveForClass as Ws,getLeaveMaxPerStudentWeekForClass as Gs,getScoreColumns as Vs,getStudentScores as Ys,getClassAttendanceAllFull as Xs,getClassLeaveHistory as Zs,getClassAssignmentsWithSubmissions as Js,getTeacherExamRequests as Ks,getClassAnnouncements as en,getAnnouncementTypeSuggestions as tn,getCourseSyllabus as sn,getLessonPlans as nn,getClassSessionDOWs as an,closeLeavePermission as Ht,createAnnouncement as rn,deleteAssignment as Pt,updateAssignment as ln,createAssignment as on,getMyDonationRequests as dn,saveStudentScore as cn,markAssignmentSubmissionReviewed as un,saveAssignmentFeedback as pn,rejectAssignmentSubmission as mn,saveAssignmentGrade as xn,deleteSyllabusItem as bn,updateSyllabusItem as gn,createSyllabusItem as fn,deleteLessonPlan as yn,updateLessonPlan as vn,createLessonPlan as hn}from"./api-Cf_Y4s92.js";import{_ as He,a as ss,b as wn}from"./teacher-DkO8mDLW.js";import{l as _n,m as Dt,s as kn,n as $n,o as Sn,a as En,h as Ln,g as qn,p as jn}from"./quiz-api-DaBneRGn.js";import{openScoreScanner as In}from"./score-qr-scanner-eQmyTC7-.js";import{_openAttendanceModalForSession as Ft,_openLeaveQuotaModal as Cn,openAttendanceScanSetup as Mn,_openLeaveRequestModal as Tn,renderAttendanceGrid as An}from"./teacher-views-attendance-3FnuSi2-.js";import{p as Bn,d as zn,b as Hn,e as Nt}from"./teacher-views-grades-YSTUQyr0.js";import{openQuizMonitor as Ot}from"./teacher-views-quiz-monitor-DrZre72l.js";import{openQuizAnalytics as Pn}from"./teacher-views-quiz-analytics-Bj3NqnvT.js";import{openClassDashboard as Dn}from"./teacher-views-dashboard-CdUOoqKF.js";import{d as ke,o as Fn,_ as Nn,i as On}from"./teacher-views-classes-dyQ0iCt1.js";import{n as Rt}from"./storage-D6nkcVz6.js";import{_htmlEsc as l,setActiveNav as Qt,setTitle as Ut,setContent as ze,_currentWeek as Rn,_generateSessions as Qn,_dateInputValue as Un,ATT_STATUS as Wt,openFullScreenGridOverlay as Wn}from"./teacher-views-utils-BWmONzsh.js";import{s as Gn}from"./supabase-BV-W2lsh.js";import{openLessonPlanAIWorkspace as Gt,openLessonPlanDocument as Vn}from"./lesson-plan-ai-workspace-LD-SW21q.js";import"./version.js_v_10.22-ffVTG8-v.js";import"./promptpay-CIuxvxIA.js";import"./browser-JP79f-a9.js";import"./sports-portals.js_v_10.22-D7ID6515.js";import"./impersonation-BOpkwoRR.js";import"./theme-DIdoXkqD.js";import"./anti-pull-refresh-BGrI1pMY.js";import"./push-notify-BsRasLc4.js";import"./wen-sso-CcN06Rhh.js";import"./azfutsal-modal-3jBbVg9C.js";import"./tutorial-ByeZ0chX.js";import"./terangganu-api-C1IjZK4l.js";import"./regrade-api-C8s-TuM0.js";import"./leave-time-CrS9gT63.js";import"./pp5-doc-DfU8adgJ.js";import"./confetti-loader-BAN5Lv-C.js";function Yn(m){var x;return((x=String((m==null?void 0:m.donationSpecialFeatures)??"").split(`
`).map(I=>{const A=I.split("|");return{text:A[1]??"",minTier:parseInt(A[2])||1}}).find(I=>I.text.includes("Smart Classroom")))==null?void 0:x.minTier)??4}async function ns(m){const x=await Zt().catch(()=>window._pp5SystemCfg??{}),I=Yn(x);let A=window._pp5DonorTierIndex??0,Q=[];if(m!=null&&m.id)try{Q=await dn(m.id);const B=Q.filter($=>$.package_type==="donation"&&$.status==="approved").reduce(($,U)=>$+(U.amount??0),0),f=He(x.donationMinAmount,49),y=He(x.donationAmountStep,50),N=ss(x,f,y);A=wn(x,N,B)}catch{}return{cfg:x,minTier:I,unlocked:A>=I,donationRequests:Q}}function Xn(m,x){var A;return He(m.donationMinAmount,49),He(m.donationAmountStep,50),((A=ss(m)[x-1])==null?void 0:A.amount)??null}function Zn(m,x,I){return m?!0:(x==null?void 0:x.smart_classroom_free_class_id)===I}async function as(m,x,{preselectClassId:I=null,onPicked:A}={}){var f;(f=document.getElementById("sc-pick-modal"))==null||f.remove();const Q=await $e(m.id).catch(()=>[]),B=document.createElement("div");B.id="sc-pick-modal",B.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/60 p-4",B.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
      <div class="px-6 pt-6 pb-4 flex-shrink-0 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <div class="text-4xl mb-1">🎁</div>
        <h3 class="text-white font-extrabold text-base">ใช้ Smart Classroom ฟรี 1 ห้องเรียน</h3>
        <p class="text-white/80 text-[11px] mt-1 leading-relaxed">เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด<br>หากต้องการเปลี่ยนห้องภายหลังต้องติดต่อแอดมิน</p>
      </div>
      <div class="overflow-y-auto flex-1 p-4 space-y-2">
        ${Q.length?Q.map(y=>`
          <label class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition hover:border-amber-300 ${y.id===I?"border-amber-400 bg-amber-50":"border-gray-200"}">
            <input type="radio" name="sc-pick-class" value="${y.id}" class="w-4 h-4" ${y.id===I?"checked":""} />
            <span class="text-sm font-semibold text-gray-700">${l(y.class_name)}</span>
          </label>`).join(""):'<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>'}
      </div>
      <div class="p-4 flex-shrink-0 border-t border-gray-100">
        <button id="sc-pick-confirm" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)" ${Q.length?"":"disabled"}>✅ ยืนยันใช้ห้องนี้</button>
        <button id="sc-pick-cancel" class="w-full py-2 mt-1.5 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(B),B.addEventListener("click",y=>{y.target===B&&B.remove()}),B.querySelector("#sc-pick-cancel").addEventListener("click",()=>B.remove()),B.querySelector("#sc-pick-confirm").addEventListener("click",async()=>{const y=B.querySelector('input[name="sc-pick-class"]:checked');if(!y){b("กรุณาเลือกห้องเรียน","warning");return}const N=parseInt(y.value),$=B.querySelector("#sc-pick-confirm");$.disabled=!0,$.textContent="กำลังบันทึก...";try{if(!await ts(m.id,N)){b("มีการเลือกห้องไปแล้วก่อนหน้านี้ กรุณาลองใหม่","error"),B.remove();return}m.smart_classroom_free_class_id=N,B.remove(),b("เลือกห้องฟรีสำเร็จ ✅","success"),A==null||A(N)}catch(U){b("บันทึกไม่สำเร็จ: "+M(U),"error"),$.disabled=!1,$.textContent="✅ ยืนยันใช้ห้องนี้"}})}function Vt(m){const x=Math.max(0,Math.floor((Date.now()-new Date(m).getTime())/6e4));return x<1?"<1 นาที":`${x} นาที`}const Yt="pp5_sc_skip_popup";async function Jn(m){var de,z,K,ve;const x=window._pp5SystemCfg??await Zt().catch(()=>({})),I=parseInt(x.academicYear??2568),A=parseInt(x.semester??1),[Q,B,f,y]=await Promise.all([$e(m.id).catch(()=>[]),Jt(m.id,I,A).catch(()=>[]),Kt(m.id).catch(()=>[]),es().catch(()=>[])]);if(!Q.length)return{classId:null,mode:"none"};const N=Object.fromEntries(y.map(T=>[T.period_no,T])),$=Object.fromEntries(B.map(T=>[T.id,T])),U=[];for(const T of f){const X=$[T.teacher_schedule_id];if(!X)continue;const ce=(X.period_no??1)+(X.span_periods??1)-1;U.push({classId:T.class_id,day_of_week:X.day_of_week,period:N[X.period_no],actualEndPeriod:N[ce]??N[X.period_no]})}const R=new Date,ie=R.getDay(),q=R.getHours()*3600+R.getMinutes()*60+R.getSeconds();for(const T of U){if(T.day_of_week!==ie||!((de=T.period)!=null&&de.start_time)||!((z=T.actualEndPeriod)!=null&&z.end_time))continue;const[X,ce]=T.period.start_time.split(":").map(Number),[ue,W]=T.actualEndPeriod.end_time.split(":").map(Number),Z=X*3600+ce*60,Se=ue*3600+W*60;if(q>=Z&&q<Se)return{classId:T.classId,mode:"live"}}let te=null;for(const T of U){if(!((K=T.period)!=null&&K.start_time))continue;const[X,ce]=T.period.start_time.split(":").map(Number),ue=X*3600+ce*60;let W=(T.day_of_week-ie+7)%7;W===0&&ue<=q&&(W=7);const Z=W*86400+ue-q;(te===null||Z<te.totalSecUntil)&&(te={totalSecUntil:Z,classId:T.classId})}return te?{classId:te.classId,mode:"upcoming"}:{classId:((ve=Q[0])==null?void 0:ve.id)??null,mode:"none"}}async function Ia(m){var U,R,ie,q,te,de;const{cfg:x,minTier:I,unlocked:A}=await ns(m);if(A&&localStorage.getItem(Yt)==="1"){Xt(m);return}if(!A&&(m!=null&&m.smart_classroom_free_class_id)){xe(m,m.smart_classroom_free_class_id);return}(U=document.getElementById("sc-landing-modal"))==null||U.remove();const Q=((R=x.smartClassroomLandingTitle)==null?void 0:R.trim())||"Smart Classroom — หน้าควบคุมขณะสอนสด",B=((ie=x.smartClassroomLandingDesc)==null?void 0:ie.trim())||"ทุกวินาทีระหว่างสอนสดมีค่า — ไม่ต้องเสียเวลาสลับหน้าจอไปมาระหว่างเช็คชื่อ คุมเวลา เปิดควิซ หรือสั่งงาน อีกต่อไป Smart Classroom รวมทุกเครื่องมือที่คุณใช้บ่อยที่สุดไว้จอเดียว ให้คุณโฟกัสกับการสอนได้เต็มที่ นักเรียนก็ได้รับข่าวสารถึงมือถือทันทีโดยไม่พลาด และแผนการสอน/บันทึกหลังสอนของคุณจะถูกเก็บเป็นระบบ พร้อมให้ตรวจสอบได้ทุกเมื่อโดยไม่ต้องมานั่งรวบรวมทีหลัง",f=[x.smartClassroomLandingImg1,x.smartClassroomLandingImg2,x.smartClassroomLandingImg3].filter(Boolean),y=[{emoji:"⏱️",text:"ไม่ต้องสลับหน้าจอนับสิบรอบระหว่างสอน ทุกเครื่องมือรวมไว้จอเดียว"},{emoji:"📲",text:"นักเรียนไม่พลาดประกาศ/งานอีกต่อไป แจ้งเตือนถึงมือถือทันทีที่กดส่ง"},{emoji:"📋",text:"แผนการสอน+บันทึกหลังสอนเป็นระบบ พร้อมตรวจสอบได้ทุกเมื่อ"}],N=["✅ เช็คชื่ออัตโนมัติ","🚪 Hall Pass สด","🎲 สุ่ม/จัดกลุ่ม","🧠 เปิดควิซสด","📚 สั่งงาน/ติดตามงาน","📘 กำหนดการสอน+แผนการสอน","🖊️ บันทึกหลังสอน+เซ็นชื่อ","📣 ประกาศแนบไฟล์+แจ้งเตือนมือถือ"],$=document.createElement("div");$.id="sc-landing-modal",$.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",$.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade">
      <div class="relative px-6 py-8 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <button id="sl-close" class="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none">✕</button>
        <div class="text-5xl mb-2">👑</div>
        <h2 class="text-white font-extrabold text-xl">${l(Q)}</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${y.map(z=>`
            <div class="px-3 py-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <div class="text-xl mb-1">${z.emoji}</div>
              <p class="text-[11px] font-bold text-amber-800 leading-snug">${l(z.text)}</p>
            </div>`).join("")}
        </div>
        <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">${l(B)}</p>
        ${f.length?`<div class="grid ${f.length>1?"grid-cols-2":"grid-cols-1"} gap-2">${f.map(z=>`<img src="${l(z)}" class="w-full rounded-xl border border-gray-100 object-cover" />`).join("")}</div>`:""}
        <div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">🎁 รวมฟีเจอร์เหล่านี้ไว้ให้แล้ว</p>
          <div class="grid grid-cols-2 gap-1.5 text-[11px] text-gray-500">
            ${N.map(z=>`<div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50">${z}</div>`).join("")}
          </div>
        </div>
        ${A?`
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
    </div>`,document.body.appendChild($),$.addEventListener("click",z=>{z.target===$&&$.remove()}),$.querySelector("#sl-close").addEventListener("click",()=>$.remove()),(q=$.querySelector("#sl-start"))==null||q.addEventListener("click",()=>{var z;(z=$.querySelector("#sl-skip"))!=null&&z.checked&&localStorage.setItem(Yt,"1"),$.remove(),Xt(m)}),(te=$.querySelector("#sl-free"))==null||te.addEventListener("click",()=>{$.remove(),as(m,x,{onPicked:z=>xe(m,z)})}),(de=$.querySelector("#sl-donate"))==null||de.addEventListener("click",()=>{var z;$.remove(),(z=document.getElementById("btn-donate-float"))==null||z.click()})}async function Xt(m){b("กำลังตรวจสอบตารางสอน...","info");const{classId:x}=await Jn(m);if(!x){b("ยังไม่มีห้องเรียน กรุณาสร้างห้องเรียนก่อนครับ","warning");return}xe(m,x)}async function xe(m,x){var ht,wt,_t,kt,$t,St,Et,Lt,qt,jt,It,Ct,Mt,Tt,At;Qt("my-classes"),Ut("Smart Classroom"),ze(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const{cfg:I,minTier:A,unlocked:Q,donationRequests:B}=await ns(m);if(!Zn(Q,m,x)){const e=m==null?void 0:m.smart_classroom_free_class_id;if(!e){ze(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
        <div class="text-6xl mb-4">🎁</div>
        <p class="font-bold text-gray-800 text-lg">ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน</p>
        <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณยังไม่ได้สนับสนุนระบบระดับ ${A} ขึ้นไป แต่ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียนครับ<br>เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด (เปลี่ยนภายหลังต้องติดต่อแอดมิน)</p>
        <button id="sc-free-confirm" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 ใช้ห้องนี้ฟรี</button>
        <div class="mt-2">
          <button id="sc-free-other" class="text-xs text-gray-400 hover:text-gray-600 underline">เลือกห้องอื่นแทน</button>
        </div>
        <div class="mt-4">
          <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
        </div>
      </div>`),(ht=document.getElementById("sc-free-confirm"))==null||ht.addEventListener("click",async a=>{const r=a.currentTarget;r.disabled=!0,r.textContent="กำลังบันทึก...";try{if(!await ts(m.id,x)){b("มีการเลือกห้องไปแล้วก่อนหน้านี้","error"),xe(m,x);return}m.smart_classroom_free_class_id=x,b("เลือกห้องฟรีสำเร็จ ✅","success"),xe(m,x)}catch(d){b("บันทึกไม่สำเร็จ: "+M(d),"error"),r.disabled=!1,r.textContent="🎁 ใช้ห้องนี้ฟรี"}}),(wt=document.getElementById("sc-free-other"))==null||wt.addEventListener("click",()=>{as(m,I,{preselectClassId:x,onPicked:a=>xe(m,a)})}),(_t=document.getElementById("sc-back"))==null||_t.addEventListener("click",()=>ke(m,x));return}const t=((kt=(await $e(m.id).catch(()=>[])).find(a=>a.id===e))==null?void 0:kt.class_name)??`ห้อง #${e}`,n=Xn(I,A);ze(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
      <div class="text-6xl mb-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">Smart Classroom</p>
      <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณใช้สิทธิ์ฟรีกับห้อง <b>${l(t)}</b> ไปแล้ว<br>หากต้องการใช้ห้องนี้ด้วย กรุณาสนับสนุนระบบระดับ ${A}${n?` (${n} บาท)`:""} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้องครับ</p>
      <button id="sc-upgrade" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#a9781a,#e6c988)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      <div class="mt-3">
        <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
      </div>
    </div>`),($t=document.getElementById("sc-upgrade"))==null||$t.addEventListener("click",()=>{var a;return(a=document.getElementById("btn-donate-float"))==null?void 0:a.click()}),(St=document.getElementById("sc-back"))==null||St.addEventListener("click",()=>ke(m,x));return}let f,y,N,$,U,R,ie,q,te,de,z,K,ve,T,X,ce,ue,W,Z,Se,ae=null;try{const e=parseInt(I.academicYear??2568),s=parseInt(I.semester??1);ie=B;let t;if([t,y,N,$,U,R,q,te,de,z,K,ve,T,X,ce,ue,Se]=await Promise.all([$e(m.id),Qs(x).catch(()=>[]),Us(x).catch(()=>[]),Ws(x).catch(()=>3),Gs(x).catch(()=>2),_n(x).catch(()=>[]),Vs(x).catch(()=>[]),Ys(x).catch(()=>[]),Xs(x).catch(()=>[]),Zs(x).catch(()=>[]),Js(x).catch(()=>[]),Ks(m.id).catch(()=>[]),Jt(m.id,e,s).catch(()=>[]),Kt(m.id).catch(()=>[]),es().catch(()=>[]),en(x).catch(()=>[]),tn().catch(()=>[])]),f=t.find(n=>n.id===x),!f){ke(m,x);return}ae=f.course_id??((Et=f.master_subjects)==null?void 0:Et.id)??null,[W,Z]=await Promise.all([ae?sn(ae).catch(()=>[]):Promise.resolve([]),ae?nn(ae).catch(()=>[]):Promise.resolve([])])}catch(e){b("โหลดข้อมูลไม่สำเร็จ: "+M(e),"error"),ke(m,x);return}const Ge=ie.some(e=>e.package_type==="donation"&&e.status==="approved"),Pe=f.master_subjects??{};let fe=Object.fromEntries(N.map(e=>[e.student_id,e]));const Ve=Object.fromEntries(y.map(e=>[e.id,e])),ee=R.find(e=>e.status==="started")??null;let Ee={};if(ee){const e=await Dt(ee.id).catch(()=>[]);Ee=Object.fromEntries(e.map(s=>[s.student_id,s]))}const rs={in_progress:{icon:"📝",cls:"bg-emerald-500"},submitted:{icon:"✅",cls:"bg-blue-500"},terminated_violation:{icon:"🔒",cls:"bg-red-500"}},De=[{emoji:"📢",label:"ทั่วไป"},{emoji:"📚",label:"การบ้าน"},{emoji:"📄",label:"เอกสารประกอบ"},{emoji:"⏰",label:"กำหนดส่งงาน"},{emoji:"📝",label:"แบบทดสอบ"},{emoji:"📊",label:"คะแนน"},{emoji:"🎓",label:"กิจกรรม/ฝึกอบรม"},{emoji:"⚠️",label:"ด่วน/สำคัญ"}],Fe={overwrite:{label:"ทับคะแนนเก่า (ค่าเริ่มต้น)",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/งานอื่น) จะเก็บค่าที่สูงกว่าไว้"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนงานนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายงาน"}},se={};for(const e of te)(se[Lt=e.student_id]??(se[Lt]=[])).push(e);const he={};for(const e of de)(he[qt=e.student_id]??(he[qt]=[])).push(e);const Le={};for(const e of z)(Le[jt=e.student_id]??(Le[jt]=[])).push(e);const J=new Map(y.map((e,s)=>[e.id,s+1])),Ye=new Map(y.map((e,s)=>[s+1,e])),Xe=e=>{if(!q.length)return null;const s=se[e.id]??[],t=q.reduce((a,r)=>a+(parseFloat(r.max_score)||0),0);return t<=0?null:q.reduce((a,r)=>{const d=s.find(o=>o.score_column_id===r.id);return a+(parseFloat(d==null?void 0:d.score)||0)},0)/t*100},Ze=e=>{const s=he[e.id]??[];return s.length?s.filter(t=>t.status==="present").length/s.length*100:null},Je=(e,s)=>{const t=(se[e.id]??[]).find(n=>n.score_column_id===s);return(t==null?void 0:t.score)!=null?parseFloat(t.score):null},qe=(e,s)=>{var a;const t=K.find(r=>r.id===e),n=(a=t==null?void 0:t.submissions)==null?void 0:a.find(r=>r.student_id===s);return n?n.reviewed_at||n.hasScore?{key:"checked",rank:2,icon:"✓",label:"ตรวจแล้ว",cls:"bg-emerald-100 text-emerald-700 border-emerald-200"}:{key:"waiting",rank:0,icon:"●",label:"ส่งแล้ว รอตรวจ",cls:"bg-amber-100 text-amber-700 border-amber-200"}:{key:"missing",rank:1,icon:"○",label:"ยังไม่ส่ง",cls:"bg-gray-100 text-gray-500 border-gray-200"}};let P={key:"seatno"};const ls=e=>{if(P.key==="total"){const s=Xe(e);return s==null?null:`${s.toFixed(0)}%`}if(P.key==="att"){const s=Ze(e);return s==null?null:`${s.toFixed(0)}%`}if(P.key.startsWith("col:")){const s=parseInt(P.key.slice(4),10),t=Je(e,s),n=q.find(a=>a.id===s);return t==null?null:`${t}${n?"/"+n.max_score:""}`}if(P.key.startsWith("assignment:")){const s=parseInt(P.key.slice(11),10),t=qe(s,e.id);return`${t.icon} ${t.label}`}return null},os=()=>{if(P.key==="seatno")return y;if(P.key==="name")return[...y].sort((s,t)=>(s.full_name??"").localeCompare(t.full_name??"","th"));if(P.key.startsWith("assignment:")){const s=parseInt(P.key.slice(11),10);return[...y].sort((t,n)=>qe(s,t.id).rank-qe(s,n.id).rank||J.get(t.id)-J.get(n.id))}const e=P.key==="total"?Xe:P.key==="att"?Ze:s=>Je(s,parseInt(P.key.slice(4),10));return[...y].sort((s,t)=>{const n=e(s),a=e(t);return n==null&&a==null?J.get(s.id)-J.get(t.id):n==null?1:a==null?-1:a-n})},Ke=ve.filter(e=>{var s;return((s=e.classes)==null?void 0:s.id)===x&&e.status!=="rejected"&&(e.status!=="approved"||e.exam_attended==null)}).sort((e,s)=>(e.requested_date??"").localeCompare(s.requested_date??"")),is=new Set(X.filter(e=>e.class_id===x).map(e=>e.teacher_schedule_id)),Ne=Object.fromEntries(ce.map(e=>[e.period_no,e])),we=T.filter(e=>is.has(e.id)).map(e=>({...e,period:Ne[e.period_no],actualEndPeriod:Ne[(e.period_no??1)+(e.span_periods??1)-1]??Ne[e.period_no]})).sort((e,s)=>e.day_of_week-s.day_of_week||e.period_no-s.period_no);function ds(){var a,r,d;const e=new Date,s=e.getDay(),t=e.getHours()*3600+e.getMinutes()*60+e.getSeconds();for(const o of we){if(o.day_of_week!==s||!((a=o.period)!=null&&a.start_time)||!((r=o.actualEndPeriod)!=null&&r.end_time))continue;const[p,g]=o.period.start_time.split(":").map(Number),[i,c]=o.actualEndPeriod.end_time.split(":").map(Number),u=p*3600+g*60,S=i*3600+c*60;if(t>=u&&t<S)return{mode:"live",remainingSec:S-t,slot:o}}let n=null;for(const o of we){if(!((d=o.period)!=null&&d.start_time))continue;const[p,g]=o.period.start_time.split(":").map(Number),i=p*3600+g*60;let c=(o.day_of_week-s+7)%7;c===0&&i<=t&&(c=7);const u=c*86400+i-t;(n===null||u<n.totalSecUntil)&&(n={totalSecUntil:u,slot:o})}return n?{mode:"upcoming",remainingSec:n.totalSecUntil,slot:n.slot}:{mode:"none"}}const D=()=>xe(m,x),et=async(e,s,t)=>{const n=y.map(a=>a.profile_id).filter(Boolean);if(n.length)try{await Gn.functions.invoke("send-push",{body:{title:e,body:s,url:"student.html",tag:t,profileIds:n}})}catch{}},je=()=>os().map(e=>{const s=fe[e.id],t=Ee[e.id],n=ee?rs[t==null?void 0:t.status]??{icon:"⚪",cls:"bg-gray-300"}:null,a=ls(e),r=P.key.startsWith("assignment:")?qe(parseInt(P.key.slice(11),10),e.id):null;return`<button type="button" data-sid="${e.id}"
        class="sc-stu relative border rounded-xl px-2 py-2.5 text-center hover:border-indigo-300 hover:-translate-y-0.5 transition ${s?"border-amber-300 bg-amber-50":"border-gray-100 bg-gray-50"}">
      <span class="absolute top-1 left-1 text-[9px] font-bold text-gray-500 bg-white/80 border border-gray-200 rounded-full w-4 h-4 flex items-center justify-center" title="เลขที่ ${J.get(e.id)??"—"}">${J.get(e.id)??"—"}</span>
      ${s?'<span class="absolute top-1 right-1 text-[9px] font-bold bg-amber-500 text-white px-1 py-0.5 rounded">🚪</span>':""}
      <div class="relative w-9 h-9 mx-auto mb-1.5 mt-2 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
        ${e.image_url?`<img src="${l(e.image_url)}" class="w-full h-full object-cover"/>`:l((e.full_name??"?").charAt(0))}
        ${n?`<span class="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold ${n.cls} text-white w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-white" title="สถานะสอบ: ${(t==null?void 0:t.status)??"ยังไม่เข้าสอบ"}">${n.icon}</span>`:""}
      </div>
      <div class="text-[9px] text-gray-400 font-mono">${l(e.student_code??"")}</div>
      <div class="text-[11px] font-semibold text-gray-700 leading-tight truncate">${l(e.full_name??"")}</div>
      ${r?`<div class="mt-1 px-1.5 py-0.5 rounded-lg border text-[9px] font-bold truncate ${r.cls}">${r.icon} ${r.label}</div>`:a?`<div class="text-[10px] font-bold text-amber-600 mt-0.5">${l(a)}</div>`:""}
    </button>`}).join(""),cs=()=>N.length?N.map(e=>{const s=Ve[e.student_id];return`<div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-amber-100 bg-amber-50 mb-2">
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs flex-shrink-0">
          ${s!=null&&s.image_url?`<img src="${l(s.image_url)}" class="w-full h-full object-cover"/>`:l(((s==null?void 0:s.full_name)??"?").charAt(0))}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-800 truncate">${l((s==null?void 0:s.full_name)??"—")}</p>
          <p class="text-[10px] text-gray-500 truncate">${l(e.reason??"")}</p>
        </div>
        <span class="text-xs font-bold text-amber-700 font-mono flex-shrink-0">${Vt(e.created_at)}</span>
        <button class="sc-return-btn text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 flex-shrink-0" data-lid="${e.id}">กลับแล้ว</button>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีนักเรียนออกนอกห้องตอนนี้</p>',us=()=>R.length?`<div class="max-h-72 overflow-y-auto space-y-1.5 pr-0.5">${R.map(e=>`
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
      </div>`).join("")}</div>`:'<p class="text-xs text-gray-400">ห้องนี้ยังไม่มีควิซที่สร้างไว้</p>';function ps(){var r;(r=document.getElementById("sc-quiz-quick"))==null||r.remove();const e=document.createElement("div");e.id="sc-quiz-quick",e.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",document.body.appendChild(e);const s=()=>{e.innerHTML=`
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
        </div>`,e.querySelector("#sqq-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#sqq-pick").addEventListener("click",t),e.querySelector("#sqq-new").addEventListener("click",a)},t=async()=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลดคลังข้อสอบ...</div>';const d=await En(m.id).catch(()=>[]);if(!d.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">ยังไม่มีคลังข้อสอบเลย ลองสร้างใหม่ดูก่อนได้ครับ</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",s);return}e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">📚 เลือกคลังข้อสอบ</h3>
          <p class="text-xs text-gray-400 mb-4">${l(f.class_name??"")}</p>
          <div class="space-y-1.5 max-h-72 overflow-y-auto">
            ${d.map(o=>`
              <button class="sqq-bank-pick w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50/50 transition" data-id="${o.id}">
                <span class="text-sm font-semibold text-gray-700">${l(o.name)}</span>
                ${o.description?`<p class="text-[11px] text-gray-400 truncate">${l(o.description)}</p>`:""}
              </button>`).join("")}
          </div>
          <button id="sqq-back" class="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600">← กลับ</button>
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelectorAll(".sqq-bank-pick").forEach(o=>o.addEventListener("click",()=>n(d.find(p=>p.id===o.dataset.id))))},n=async d=>{e.innerHTML='<div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center text-sm text-gray-400 py-10">กำลังโหลด...</div>';const o=await qn(d.id).catch(()=>[]);if(!o.length){e.innerHTML=`
          <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8 text-center">
            <p class="text-sm text-gray-500 mb-4">คลัง "${l(d.name)}" ยังไม่มีคำถามเลย เพิ่มคำถามก่อนถึงจะเปิดสอบได้</p>
            <button id="sqq-back" class="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">← กลับ</button>
          </div>`,e.querySelector("#sqq-back").addEventListener("click",t);return}const p=new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short"});e.innerHTML=`
        <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl my-8">
          <h3 class="font-bold text-gray-800 text-lg mb-1">🚀 เปิดสอบ: ${l(d.name)}</h3>
          <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${o.length} ข้อ · ${l(f.class_name??"")}</p>
          <div class="space-y-3">
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อการสอบครั้งนี้</label>
              <input id="sqq-title" class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" value="${l(d.name)} (${p})" />
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
        </div>`,e.querySelector("#sqq-back").addEventListener("click",t),e.querySelector("#sqq-launch").addEventListener("click",async g=>{const i=e.querySelector("#sqq-title").value.trim(),c=parseInt(e.querySelector("#sqq-num").value,10);if(!i){b("กรุณาระบุชื่อการสอบ","warning");return}if(!c||c<1||c>o.length){b(`จำนวนข้อต้องอยู่ระหว่าง 1 – ${o.length}`,"warning");return}const u=g.target;u.disabled=!0,u.textContent="กำลังเปิด...";try{await jn({bank_id:d.id,class_id:x,title:i,num_questions:c,time_limit_minutes:parseInt(e.querySelector("#sqq-time").value,10)||null,status:"announced"}),b('สร้างควิซให้ห้องนี้แล้ว 🧠 กด "▶ เริ่ม" ในรายการเพื่อเปิดสอบสดได้เลย',"success"),e.remove(),D()}catch(S){b("เปิดควิซไม่สำเร็จ: "+M(S),"error"),u.disabled=!1,u.textContent="เปิดให้ห้องนี้"}})},a=()=>{e.innerHTML=`
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
        </div>`,e.querySelector("#sqq-back").addEventListener("click",s),e.querySelector("#sqq-c-save").addEventListener("click",async d=>{const o=e.querySelector("#sqq-c-title").value.trim();if(!o){b("กรุณาระบุชื่อคลังข้อสอบ","warning");return}const p=d.target;p.disabled=!0,p.textContent="กำลังสร้าง...";try{const g=await Ln({teacher_id:m.id,subject_id:ae,name:o}),{_renderBankQuestions:i}=await zt(async()=>{const{_renderBankQuestions:c}=await import("./teacher-views-quiz-banks-gbYPBFWO.js");return{_renderBankQuestions:c}},__vite__mapDeps([0,1,2,3,4,5,6,7]));e.remove(),b("สร้างคลังแล้ว — เพิ่มคำถามให้ครบก่อนไปสร้างแบบทดสอบนะครับ","success"),i(m,g,x)}catch(g){b("สร้างไม่สำเร็จ: "+M(g),"error"),p.disabled=!1,p.textContent="สร้างคลัง → เพิ่มคำถาม"}})};e.addEventListener("click",d=>{d.target===e&&e.remove()}),s()}const ms=()=>ue.length?`<div class="space-y-1.5 mb-3 max-h-40 overflow-y-auto">${ue.slice(0,10).map(e=>{var t;const s=[...Array.isArray(e.attachment_urls)?e.attachment_urls:[],...e.file_url?[{url:e.file_url,name:"ไฟล์แนบ"}]:[]];return`
      <div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center gap-1.5 flex-wrap">
          ${e.ann_type&&e.ann_type!=="general"?`<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">${l(e.ann_type)}</span>`:""}
          <p class="font-semibold text-gray-700 truncate flex-1 min-w-0">${l(e.title)}</p>
        </div>
        ${e.body?`<p class="text-gray-400 truncate">${l(e.body.slice(0,80))}</p>`:""}
        ${s.length?`<div class="flex flex-wrap gap-1 mt-1">${s.map(n=>`<a href="${l(n.url)}" target="_blank" rel="noopener" class="text-[10px] px-1.5 py-0.5 rounded-lg bg-white border border-gray-200 text-indigo-600 hover:bg-indigo-50">📎 ${l(n.name??"ไฟล์")}</a>`).join("")}</div>`:""}
        <p class="text-[10px] text-gray-300 mt-0.5">${new Date(e.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}${(t=e.teachers)!=null&&t.full_name?" · "+l(e.teachers.full_name):""}</p>
      </div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 mb-2">ยังไม่มีประกาศสำหรับห้องนี้</p>',xs=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],tt=e=>{if(!we.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้ผูกตารางสอนให้ห้องนี้</p>';if(e==="daily"){const t=new Date().getDay(),n=we.filter(a=>a.day_of_week===t);return n.length?n.map(a=>{var r,d,o,p;return`
        <div class="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
          <span class="font-semibold text-gray-700">คาบที่ ${a.period_no}${a.span_periods>1?`-${a.period_no+a.span_periods-1}`:""}</span>
          <span class="text-gray-500 font-mono">${((d=(r=a.period)==null?void 0:r.start_time)==null?void 0:d.slice(0,5))??"—"} - ${((p=(o=a.actualEndPeriod)==null?void 0:o.end_time)==null?void 0:p.slice(0,5))??"—"}</span>
        </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">วันนี้ไม่มีคาบของห้องนี้</p>'}const s={};return we.forEach(t=>{var n;(s[n=t.day_of_week]??(s[n]=[])).push(t)}),Object.keys(s).sort((t,n)=>t-n).map(t=>`
      <div class="mb-2.5">
        <p class="text-[11px] font-bold text-gray-500 mb-1">${xs[t]}</p>
        <div class="flex flex-wrap gap-1.5">
          ${s[t].map(n=>{var a,r;return`<span class="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-semibold font-mono">คาบ ${n.period_no}${n.span_periods>1?`-${n.period_no+n.span_periods-1}`:""} · ${((r=(a=n.period)==null?void 0:a.start_time)==null?void 0:r.slice(0,5))??"—"}</span>`}).join("")}
        </div>
      </div>`).join("")},st=()=>Ke.length?Ke.map((e,s)=>{var t;return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">${s+1}</span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-700 truncate">${l(((t=e.students)==null?void 0:t.full_name)??"—")} — ${l(e.request_type??"")}</p>
          <p class="text-gray-400">${e.requested_date?new Date(e.requested_date).toLocaleDateString("th-TH",{day:"numeric",month:"short"}):"ไม่ระบุวันที่"}${e.requested_period_no?` · คาบ ${e.requested_period_no}`:""}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${e.status==="pending"?"bg-amber-50 text-amber-700":"bg-emerald-50 text-emerald-700"} flex-shrink-0">${e.status==="pending"?"รออนุมัติ":"อนุมัติแล้ว รอสอบ"}</span>
      </div>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ไม่มีคำร้องรอดำเนินการ</p>',Oe=e=>e?new Date(e).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",Re=e=>new Set((e.submissions??[]).map(s=>s.student_id)).size,nt=e=>{const s=Math.max(0,y.length-Re(e));if(!e.due_at||s===0)return{key:"normal",missingCount:s,urgent:!1,label:Oe(e.due_at)};const t=new Date(e.due_at).getTime()-Date.now(),n=Math.max(1,Math.ceil(Math.abs(t)/36e5));if(t<0){const a=n<24?`เกินกำหนด ${n} ชม.`:`เกินกำหนด ${Math.ceil(n/24)} วัน`;return{key:"overdue",missingCount:s,urgent:!0,label:a,diffMs:t}}return t<=864e5?{key:"today",missingCount:s,urgent:!0,label:`เหลือ ${n} ชม.`,diffMs:t}:t<=2592e5?{key:"soon",missingCount:s,urgent:!0,label:`เหลือ ${Math.ceil(n/24)} วัน`,diffMs:t}:{key:"normal",missingCount:s,urgent:!1,label:Oe(e.due_at),diffMs:t}},le=K.map(e=>({assignment:e,state:nt(e)})).filter(e=>e.state.urgent).sort((e,s)=>{const t=e.state.key==="overdue",n=s.state.key==="overdue";if(t!==n)return t?-1:1;const a=new Date(e.assignment.due_at).getTime(),r=new Date(s.assignment.due_at).getTime();return t?r-a:a-r}),at=(e="mobile")=>{if(!le.length)return"";const{assignment:s,state:t}=le[0],n=Re(s);return`<div class="rounded-2xl border ${t.key==="overdue"?"border-red-200 bg-red-50 text-red-800":t.key==="today"?"border-orange-200 bg-orange-50 text-orange-800":"border-amber-200 bg-amber-50 text-amber-800"} shadow-sm p-4 ${e==="mobile"?"mb-4 lg:hidden":"mb-4 hidden lg:block"}">
      <div class="flex items-center justify-between gap-2">
        <p class="text-xs font-extrabold">⏰ ${t.key==="overdue"?"งานเกินกำหนด":"งานใกล้ครบกำหนด"}</p>
        <span class="text-xs font-extrabold flex-shrink-0">${t.label}</span>
      </div>
      <p class="text-sm font-bold mt-2 truncate">${l(s.title)}</p>
      <p class="text-[11px] mt-1 opacity-80">${n}/${y.length} ส่งแล้ว · <b>${t.missingCount} คนยังไม่ส่ง</b></p>
      ${le.length>1?`<p class="text-[10px] mt-1 opacity-70">และมีงานเร่งด่วนอีก ${le.length-1} งาน</p>`:""}
      <div class="grid grid-cols-[1fr_auto] gap-2 mt-3">
        <button type="button" data-sc-urgent-aid="${s.id}" class="sc-btn-dark min-h-[42px] rounded-xl px-3 text-xs font-bold">ดูและติดตามงาน</button>
        <button type="button" class="sc-quick-add-assignment min-h-[42px] rounded-xl border border-current/20 bg-white/70 px-3 text-xs font-bold">＋ สั่งงาน</button>
      </div>
    </div>`},Ie=(e,s)=>e.due_at?new Date(s).getTime()>new Date(e.due_at).getTime():!1,Qe=(e,s)=>e.due_at?Math.max(1,Math.ceil((new Date(s).getTime()-new Date(e.due_at).getTime())/864e5)):0,bs=(e,s)=>Ie(e,s)?e.late_penalty_mode==="flat"?parseFloat(e.late_penalty_value)||0:e.late_penalty_mode==="per_day"?(parseFloat(e.late_penalty_value)||0)*Qe(e,s):0:0,gs=()=>K.length?K.map(e=>{const s=Re(e),t=y.length,n=t>0?Math.round(s/t*100):0,a=e.submissions.filter(p=>Ie(e,p.submitted_at)).length,r=nt(e),d=r.key==="overdue"?"border-red-200 bg-red-50":r.key==="today"?"border-orange-200 bg-orange-50":r.key==="soon"?"border-amber-200 bg-amber-50":"border-gray-100",o=r.urgent?r.key==="overdue"?"text-red-700":"text-amber-700":"text-gray-400";return`<button class="sc-assignment-row w-full text-left px-3 py-3 rounded-xl border ${d} hover:border-indigo-300 hover:bg-indigo-50 transition mb-2" data-aid="${e.id}">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-bold text-gray-700 truncate">${l(e.title)}</p>
          <span class="text-[11px] ${o} font-bold flex-shrink-0">${r.label}</span>
        </div>
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${n}%"></div></div>
          <span class="text-[11px] font-bold text-gray-600 flex-shrink-0">${s}/${t} ส่งแล้ว</span>
          ${r.missingCount?`<span class="text-[10px] font-bold ${r.urgent?o:"text-gray-400"} flex-shrink-0">${r.missingCount} ยังไม่ส่ง</span>`:""}
          ${a?`<span class="text-[10px] font-bold text-amber-600 flex-shrink-0">ช้า ${a}</span>`:""}
        </div>
      </button>`}).join(""):'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีงานที่มอบหมาย — กด "➕ สั่งงานใหม่" เพื่อเริ่ม</p>',re=Rn(I.semester_start),pe=W.find(e=>re>=e.week_start&&re<=e.week_end),fs=()=>W.length?`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${W.map(e=>`
      <button class="sc-syllabus-row w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl border transition ${re>=e.week_start&&re<=e.week_end?"border-indigo-300 bg-indigo-50":"border-gray-100 bg-gray-50 hover:border-indigo-200"}" data-sylid="${e.id}">
        <span class="text-[10px] font-bold text-gray-500 flex-shrink-0 w-16">สัปดาห์ ${e.week_start}${e.week_end!==e.week_start?`-${e.week_end}`:""}</span>
        <span class="text-xs font-semibold text-gray-700 truncate flex-1">${l(e.topic)}</span>
      </button>`).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้กำหนดหัวข้อการสอน — กด "➕ เพิ่มหัวข้อ" เพื่อเริ่มวางกำหนดการสอน</p>',ys=()=>Z.length?`<div class="max-h-72 lg:max-h-[28rem] overflow-y-auto space-y-2 pr-1">${Z.map(e=>`
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <button class="sc-plan-row flex-1 min-w-0 text-left" data-planid="${e.id}">
          <p class="text-xs font-bold text-gray-700 truncate">${l(e.title)}</p>
          <p class="text-[10px] text-gray-400">สัปดาห์ ${e.week_start}${e.week_end!==e.week_start?`-${e.week_end}`:""}</p>
        </button>
        <button class="sc-plan-reflect text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50 flex-shrink-0" data-planid="${e.id}">✍️ ลงนาม/พิมพ์</button>
      </div>`).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีแผนการสอน — กด "➕ สร้างแผน" เพื่อเริ่ม</p>',ye=[{key:"schedule",icon:"🗓️",label:"ตารางเรียน",mobileLabel:"ตาราง",desc:"ดูคาบรายวันและรายสัปดาห์"},{key:"examqueue",icon:"📋",label:"คิวสอบ",mobileLabel:"คิวสอบ",desc:"ติดตามคำร้องสอบย้อนหลัง"},{key:"syllabus",icon:"📘",label:"กำหนดการสอน",mobileLabel:"การสอน",desc:"วางหัวข้อทั้งภาคเรียน"},{key:"plans",icon:"📝",label:"แผนการสอน",mobileLabel:"แผน",desc:"สร้างแผนหน้าเดียวรายครั้ง"},{key:"assignments",icon:"📚",label:"งานที่มอบหมาย",mobileLabel:"งาน",desc:"สั่งงานและติดตามการส่ง"},{key:"grades",icon:"📊",label:"คะแนน",mobileLabel:"คะแนน",desc:"บันทึก/จัดการคะแนนทั้งห้อง"},{key:"attendance",icon:"✅",label:"เช็คชื่อ",mobileLabel:"เช็คชื่อ",desc:"เช็คชื่อ/ใบลา/ประวัติทั้งห้อง"}],rt=[{key:"room",icon:"👥",label:"ห้อง"},{key:"live",icon:"🧠",label:"สอนสด"},{key:"work",icon:"📚",label:"งาน"},{key:"plan",icon:"📝",label:"แผน"},{key:"more",icon:"•••",label:"เพิ่ม"}];let ne="schedule",Ce="room";const lt=e=>e==="schedule"?`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ตารางเรียนของห้องนี้</p>
        <div class="sc-tabbar">
          <button data-sched="daily" class="sc-sched-tab sc-tab-pill">รายวัน</button>
          <button data-sched="weekly" class="sc-sched-tab sc-tab-pill">รายสัปดาห์</button>
        </div>
      </div>
      <div id="sc-schedule-body">${tt("daily")}</div>`:e==="examqueue"?`
      <p class="text-xs text-gray-400 mb-3">คิวคำร้องขอสอบปรับ/สอบย้อนหลัง เรียงจากใกล้ไปไกล</p>
      <div id="sc-exam-queue">${st()}</div>`:e==="syllabus"?`
      <div class="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-blue-950">📘 กำหนดการสอนรายภาคเรียน</p><p class="text-xs text-blue-700/70 mt-1">กำหนดหัวข้อแต่ละช่วงสัปดาห์ ผูกกับรายวิชา และใช้ร่วมกันทุกห้อง</p><div class="flex gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">${W.length} ช่วงการสอน</span><span class="px-2 py-1 rounded-lg bg-white border border-blue-100 text-[10px] font-bold text-blue-700">สัปดาห์ปัจจุบัน ${re||"—"}</span></div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[310px]">
            <button id="sc-ai-syllabus" class="min-h-[48px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm">🤖 สร้างกำหนดการด้วย AI</button>
            <button id="sc-add-syllabus" class="min-h-[48px] rounded-xl bg-white border border-blue-200 text-blue-800 text-xs font-bold hover:bg-blue-50">＋ เพิ่มหัวข้อเอง</button>
          </div>
        </div>
      </div>
      <div class="my-3 px-3 py-2.5 rounded-xl ${pe?"bg-indigo-50 border border-indigo-100":"bg-gray-50 border border-gray-100"}">
        <p class="text-[10px] font-bold ${pe?"text-indigo-500":"text-gray-400"} uppercase tracking-wide">สัปดาห์นี้ — สัปดาห์ที่ ${re||"—"}</p>
        <p class="text-sm font-bold ${pe?"text-indigo-700":"text-gray-400"} mt-0.5">${pe?l(pe.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-syllabus-list">${fs()}</div>`:e==="plans"?`
      <div class="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4 lg:p-5 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p class="text-base font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</p><p class="text-xs text-violet-700/70 mt-1">สร้างแผนรายครั้ง บันทึกหลังสอน และลงลายเซ็นครบ 3 ฝ่าย</p><div class="flex gap-2 mt-2"><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">${Z.length} แผน</span><span class="px-2 py-1 rounded-lg bg-white border border-violet-100 text-[10px] font-bold text-violet-700">เชื่อมกำหนดการสอน</span></div></div>
          <div class="grid grid-cols-2 gap-2 sm:min-w-[300px]">
            <button id="sc-ai-plan" class="min-h-[48px] rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-xs font-bold shadow-sm">🤖 สร้างแผนด้วย AI</button>
            <button id="sc-add-plan" class="min-h-[48px] rounded-xl bg-white border border-violet-200 text-violet-800 text-xs font-bold hover:bg-violet-50">＋ สร้างแผนเอง</button>
          </div>
        </div>
      </div>
      <div id="sc-plan-list">${ys()}</div>`:`
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ติดตามงานที่มอบหมาย + สถานะการส่งของนักเรียน</p>
        <button id="sc-add-assignment" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สั่งงานใหม่</button>
      </div>
      <div id="sc-assignment-list">${gs()}</div>`;ze(`<div class="animate-fade max-w-6xl mx-auto">

    <div class="relative overflow-hidden bg-white border border-amber-200 rounded-2xl shadow-sm px-5 py-4 mb-4 flex items-center gap-4 flex-wrap">
      <div class="absolute inset-x-0 top-0 h-1" style="background:linear-gradient(90deg,#e6c988,#a9781a,#e6c988)"></div>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold flex-shrink-0">👑 Smart Classroom</span>
      <div class="min-w-0">
        <h1 class="font-bold text-gray-800 text-base truncate">${l(Pe.subject_name??"")} · ${l(f.class_name??"")}</h1>
        <p class="text-xs text-gray-400">${y.length} คน</p>
      </div>
      <div class="min-w-0 border-l border-amber-100 pl-4">
        <p class="text-[10px] font-bold text-amber-500 uppercase tracking-wide">📘 สัปดาห์ที่ ${re||"—"}</p>
        <p class="text-xs font-semibold ${pe?"text-gray-700":"text-gray-400"} truncate max-w-[240px]">${pe?l(pe.topic):"ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้"}</p>
      </div>
      <div id="sc-clock-wrap" class="ml-auto flex-shrink-0 text-right"></div>
      <button id="sc-class-chat" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-amber-700 border border-amber-200 bg-white hover:bg-amber-50 px-3 py-2 rounded-xl">💬 แชทห้องเรียน</button>
      <button id="sc-teaching-ai" class="sc-desktop-quick-action items-center gap-1.5 flex-shrink-0 text-xs font-bold text-white px-3 py-2 rounded-xl shadow-sm" style="background:linear-gradient(135deg,#6366f1,#7c3aed)">✨ AI เตรียมการสอน</button>
      <button id="sc-switch-class" class="flex-shrink-0 text-xs font-semibold text-amber-700 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg">🔀 สลับห้อง</button>
      <button id="sc-back" class="flex-shrink-0 text-xs text-gray-400 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">← กลับ</button>
    </div>

    ${at("mobile")}

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
          ${ee?`<div class="flex items-center flex-wrap gap-2 mb-3 px-3 py-2 rounded-xl bg-red-50 border border-red-100 text-[11px] text-red-700">
            <span class="font-bold">🔴 กำลังสอบสด: ${l(ee.title)}</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-flex items-center justify-center text-[8px]">📝</span>กำลังทำ</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-blue-500 inline-flex items-center justify-center text-[8px]">✅</span>ส่งแล้ว</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-red-500 inline-flex items-center justify-center text-[8px]">🔒</span>ถูกล็อก</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-gray-300 inline-flex items-center justify-center text-[8px]">⚪</span>ยังไม่เข้าสอบ</span>
          </div>`:""}
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2" id="sc-roster">${je()}</div>
        </div>

        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">🚪 Hall Pass — ออกนอกห้องตอนนี้</h2>
            <button id="sc-leave-quota" class="text-[11px] font-semibold text-amber-700 hover:text-amber-900">⚙️ โควตา (${N.length}/${$})</button>
          </div>
          <div id="sc-pass-list" class="mt-2">${cs()}</div>
        </div>
      </div>

      <div id="sc-mobile-live-section" class="sc-mobile-app-section">
        ${at("desktop")}

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-sm font-bold text-gray-700">🧠 เปิดควิซสด</h2>
            <button id="sc-quiz-add" class="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800">+ ควิซ</button>
          </div>
          <div id="sc-quiz-list">${us()}</div>
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
          <div id="sc-ann-history">${ms()}</div>
        </div>
      </div>

    </div>

    <div id="sc-reference-panel" class="sc-reference-panel bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-5 mt-4">
      <div class="sc-mobile-ref-head">
        <div>
          <p id="sc-mobile-ref-title" class="text-sm font-bold text-gray-800">${(It=ye.find(e=>e.key===ne))==null?void 0:It.icon} ${(Ct=ye.find(e=>e.key===ne))==null?void 0:Ct.label}</p>
          <p class="text-[11px] text-gray-400">แตะเมนูด้านล่างเพื่อเปลี่ยนหัวข้อ</p>
        </div>
        <button id="sc-mobile-ref-close" type="button" class="min-w-[44px] min-h-[44px] rounded-xl border border-gray-200 bg-white text-gray-500 text-lg">✕</button>
      </div>
      <div id="sc-mobile-ref-subtabs" class="sc-mobile-ref-subtabs"></div>
      <div class="hidden lg:flex items-center justify-between gap-3 mb-4"><div><h2 class="text-base font-extrabold text-gray-800">พื้นที่จัดการรายวิชา</h2><p class="text-xs text-gray-400 mt-0.5">เลือกงานที่ต้องการ ระบบจะแยกข้อมูลและปุ่มสร้างให้ชัดเจน</p></div><span class="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-700">${l(Pe.subject_name??"")}</span></div>
      <div id="sc-reftabs-bar" class="sc-desktop-ref-tabs mb-5">
        ${ye.map(e=>`<button data-reftab="${e.key}" class="sc-reftab-btn ${e.key===ne?"active":""}"><span class="sc-ref-tab-icon">${e.icon}</span><span class="min-w-0 text-left"><b>${e.label}${e.key==="assignments"&&le.length?` (${le.length})`:""}</b><small>${e.desc}</small></span></button>`).join("")}
      </div>
      <div id="sc-reftab-body">${lt(ne)}</div>
    </div>

    <nav id="sc-mobile-ref-nav" class="sc-mobile-ref-nav" aria-label="เมนู Smart Classroom">
      ${rt.map(e=>`<button type="button" data-mobile-group="${e.key}" class="sc-mobile-group-btn sc-mobile-ref-btn ${e.key===Ce?"active":""}">
        <span class="sc-mobile-ref-icon">${e.icon}</span>
        <span>${e.label}</span>
        ${e.key==="work"&&le.length?`<span class="sc-mobile-ref-count">${le.length>99?"99+":le.length}</span>`:""}
      </button>`).join("")}
    </nav>
  </div>`),document.body.classList.add("sc-fullscreen"),document.getElementById("sc-back").addEventListener("click",()=>{window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),document.body.classList.remove("sc-fullscreen"),ke(m,x)}),document.getElementById("sc-switch-class").addEventListener("click",()=>vs()),document.getElementById("sc-open-attendance").addEventListener("click",()=>hs());const ot=()=>zt(()=>import("./chat-classroom-C_x4nE16.js"),__vite__mapDeps([8,9,4,10,6,1,2,11])).then(e=>e.openTeacherClassroomChat(m,x,`${Pe.subject_name??""} · ${f.class_name??""}`)),it=()=>On(m,x,f,I);(Mt=document.getElementById("sc-class-chat"))==null||Mt.addEventListener("click",ot),(Tt=document.getElementById("sc-teaching-ai"))==null||Tt.addEventListener("click",it),document.querySelectorAll("[data-sc-urgent-aid]").forEach(e=>e.addEventListener("click",()=>{const s=K.find(t=>t.id===parseInt(e.dataset.scUrgentAid,10));s&&gt(s)})),document.querySelectorAll(".sc-quick-add-assignment").forEach(e=>e.addEventListener("click",()=>Ue()));function dt(e){return{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:e%60}}function ct(){const e=document.getElementById("sc-clock-wrap");if(!e){window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null);return}const s=ds();if(s.mode==="live"){const{h:t,m:n,s:a}=dt(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">🟢 กำลังสอน — เหลืออีก</p>
        <p class="text-xl font-extrabold text-emerald-700 font-mono">${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}</p>`}else if(s.mode==="upcoming"){const{d:t,h:n,m:a,s:r}=dt(s.remainingSec);e.innerHTML=`<p class="text-[10px] text-amber-600 font-bold uppercase tracking-wide">คาบนี้จะเริ่มสอนในอีก</p>
        <p class="text-sm font-extrabold text-amber-700 font-mono">${t>0?t+" วัน ":""}${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(r).padStart(2,"0")}</p>`}else e.innerHTML='<p class="text-[10px] text-gray-400">ไม่พบตารางสอนของห้องนี้</p>'}window._scClockInterval&&clearInterval(window._scClockInterval),ct(),window._scClockInterval=setInterval(ct,1e3),window._scQuizPollInterval&&clearInterval(window._scQuizPollInterval),ee&&(window._scQuizPollInterval=setInterval(async()=>{const e=document.getElementById("sc-roster");if(!e){clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null;return}const s=await Dt(ee.id).catch(()=>null);s&&(Ee=Object.fromEntries(s.map(t=>[t.student_id,t])),e.innerHTML=je())},4e3));async function vs(){var n;(n=document.getElementById("sc-switch-modal"))==null||n.remove();const e=document.createElement("div");e.id="sc-switch-modal",e.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">🔀 สลับห้องเรียน</h3>
          <button id="sc-switch-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div id="sc-switch-list" class="max-h-80 overflow-y-auto space-y-1.5">
          <div class="text-center py-6 text-xs text-gray-400">กำลังโหลด...</div>
        </div>
      </div>`,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&e.remove()}),e.querySelector("#sc-switch-close").addEventListener("click",()=>e.remove());const s=(await $e(m.id).catch(()=>[])).filter(a=>a.id!==x),t=e.querySelector("#sc-switch-list");if(!s.length){t.innerHTML='<p class="text-center py-6 text-xs text-gray-400">ไม่มีห้องอื่นให้สลับ</p>';return}t.innerHTML=s.map(a=>{var r;return`
      <button class="sc-switch-btn w-full text-left px-3 py-2.5 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition" data-cid="${a.id}">
        <p class="text-sm font-semibold text-gray-700 truncate">${l(a.class_name??"")}</p>
        <p class="text-xs text-gray-400 truncate">${l(((r=a.master_subjects)==null?void 0:r.subject_name)??"")}</p>
      </button>`}).join(""),t.querySelectorAll(".sc-switch-btn").forEach(a=>a.addEventListener("click",()=>{const r=parseInt(a.dataset.cid,10);e.remove(),xe(m,r)}))}async function hs(){var t,n;const e=document.getElementById("sc-open-attendance");e.disabled=!0;const s=e.textContent;e.textContent="⏳";try{const a=((t=f.master_subjects)==null?void 0:t.credit)??1,r=((n=f.master_subjects)==null?void 0:n.subject_group)==="ACDMVOC",d=r?await an(x).catch(()=>[]):[],o=Qn(f,a,d.length?d:null,r),p=Un(new Date),g=o.filter(i=>i.ds===p);if(g.length===1)await Ft(m,f,g[0].n,{});else if(g.length>1)ut(o,g[0].n,"วันนี้มีหลายคาบ — เลือกคาบที่จะเช็คชื่อ");else{const i=new Date(p).getTime();let c=o[0],u=1/0;for(const S of o){const C=Math.abs(new Date(S.ds).getTime()-i);C<u&&(u=C,c=S)}ut(o,c==null?void 0:c.n,"วันนี้ไม่ตรงกับตารางสอนของห้องนี้ — เลือกคาบเอง (เลื่อนไปคาบใกล้วันนี้ที่สุดให้แล้ว)")}}catch(a){b("เปิดหน้าเช็คชื่อไม่สำเร็จ: "+M(a),"error")}finally{e.disabled=!1,e.textContent=s}}function ut(e,s,t){var r;(r=document.getElementById("sc-session-picker"))==null||r.remove();const n=document.createElement("div");n.id="sc-session-picker",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">✅ เลือกคาบเช็คชื่อ</h3>
          <button id="sc-sess-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <p class="text-xs text-gray-400">${l(t)}</p>
        <div class="max-h-72 overflow-y-auto space-y-1.5" id="sc-sess-list">
          ${e.map(d=>`<button class="sc-sess-btn w-full text-left px-3 py-2.5 rounded-xl border transition text-sm font-semibold ${d.n===s?"border-indigo-400 bg-indigo-50 text-indigo-700":"border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700"}" data-n="${d.n}">
            คาบที่ ${d.n} <span class="${d.n===s?"text-indigo-400":"text-gray-400"} font-normal">· ${l(d.ds)}</span>${d.n===s?' <span class="text-[10px] text-indigo-500">← ใกล้วันนี้ที่สุด</span>':""}
          </button>`).join("")}
        </div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",d=>{d.target===n&&n.remove()}),n.querySelector("#sc-sess-close").addEventListener("click",()=>n.remove()),n.querySelectorAll(".sc-sess-btn").forEach(d=>d.addEventListener("click",async()=>{const o=parseInt(d.dataset.n,10);n.remove();try{await Ft(m,f,o,{})}catch(p){b("เปิดคาบนี้ไม่สำเร็จ: "+M(p),"error")}}));const a=n.querySelector(`.sc-sess-btn[data-n="${s}"]`);a==null||a.scrollIntoView({block:"center"})}document.getElementById("sc-roster").addEventListener("click",e=>{const s=e.target.closest(".sc-stu");if(!s)return;const t=Ve[parseInt(s.dataset.sid,10)];t&&Cs(t)});function ws(e,s){P={key:e,label:s},document.getElementById("sc-sort-label").textContent=s,document.getElementById("sc-roster").innerHTML=je()}document.getElementById("sc-sort-trigger").addEventListener("click",()=>_s());function _s(){var d;(d=document.getElementById("sc-sort-panel"))==null||d.remove();const e=document.getElementById("sc-sort-trigger"),s=e.getBoundingClientRect(),t=document.createElement("div");t.id="sc-sort-panel",t.className="fixed z-[96] bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 max-h-[70vh] overflow-hidden flex flex-col animate-fade",t.style.top=`${Math.min(s.bottom+6,window.innerHeight-300)}px`,t.style.left=`${Math.min(s.left,window.innerWidth-300)}px`;const n=[{key:"seatno",label:"เลขที่ (ค่าเริ่มต้น)"},{key:"name",label:"ชื่อ-สกุล (ก–ฮ)"},{key:"total",label:"คะแนนรวมทั้งเทอม (สูง→ต่ำ)"},{key:"att",label:"คะแนนการมาเรียน (สูง→ต่ำ)"}];t.innerHTML=`
      <div class="p-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-xs font-bold text-gray-500 mb-2">เรียงลำดับตาม</p>
        <div class="space-y-1">
          ${n.map(o=>`<button data-sortkey="${o.key}" data-sortlabel="${l(o.label)}" class="sc-sort-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${P.key===o.key?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${o.label}</button>`).join("")}
        </div>
      </div>
      <div class="p-3 flex-1 overflow-y-auto min-h-0">
        <p class="text-xs font-bold text-gray-500 mb-2">คะแนนรายช่อง</p>
        ${q.length>8?'<input id="sc-sort-search" type="text" placeholder="พิมพ์ค้นหาชื่อคอลัมน์..." class="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />':""}
        <div id="sc-sort-col-list" class="space-y-1">
          ${q.length?q.map(o=>`<button data-sortkey="col:${o.id}" data-sortlabel="${l(o.assignment_name??"")}" data-search="${l((o.assignment_name??"").toLowerCase())}" class="sc-sort-opt sc-sort-col-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${P.key==="col:"+o.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${l(o.assignment_name??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>'}
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100">
          <p class="text-xs font-bold text-gray-500 mb-1">📚 งานที่มอบหมาย</p>
          <p class="text-[10px] text-gray-400 mb-2">เรียง: รอตรวจ → ยังไม่ส่ง → ตรวจแล้ว พร้อมแสดงสถานะบนการ์ด</p>
          <div class="space-y-1">
            ${K.length?K.map(o=>`<button data-sortkey="assignment:${o.id}" data-sortlabel="งาน: ${l(o.title??"")}" class="sc-sort-opt w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition ${P.key==="assignment:"+o.id?"bg-amber-100 text-amber-800":"text-gray-600 hover:bg-gray-50"}">${l(o.title??"")}</button>`).join(""):'<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีงานที่มอบหมาย</p>'}
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelectorAll(".sc-sort-opt").forEach(o=>o.addEventListener("click",()=>{ws(o.dataset.sortkey,o.dataset.sortlabel),t.remove()}));const a=t.querySelector("#sc-sort-search");a==null||a.addEventListener("input",()=>{const o=a.value.trim().toLowerCase();t.querySelectorAll(".sc-sort-col-opt").forEach(p=>{p.style.display=!o||p.dataset.search.includes(o)?"":"none"})});const r=o=>{t.contains(o.target)||o.target===e||(t.remove(),document.removeEventListener("mousedown",r,!0))};setTimeout(()=>document.addEventListener("mousedown",r,!0),0)}const ks=[{key:"info",label:"👤 ข้อมูล"},{key:"score",label:"📝 คะแนน"},{key:"att",label:"✅ มาเรียน"},{key:"leave",label:"🚪 ออกห้อง"}];function $s(e){var n;const s=fe[e.id],t=ee?Ee[e.id]:null;return`
      <div class="space-y-2">
        ${ee?`
          <div class="px-3 py-2.5 rounded-xl bg-red-50 border border-red-100">
            <p class="text-xs text-red-700 font-bold mb-1">🔴 ${l(ee.title)}</p>
            ${t?`
              <p class="text-xs text-gray-600">${t.status==="in_progress"?"📝 กำลังทำอยู่":t.status==="submitted"?`✅ ส่งแล้ว${t.score_pct!=null?` · คะแนน ${t.score_pct.toFixed(1)}%`:""}`:t.status==="terminated_violation"?"🔒 ถูกล็อกจากการทำผิดกติกา":t.status}${(n=t.question_order)!=null&&n.length?` · ตอบแล้ว ${Object.keys(t.answers??{}).length}/${t.question_order.length} ข้อ`:""}</p>
              ${t.status==="terminated_violation"?`<button id="sc-sp-unlock" data-attempt="${t.id}" class="w-full mt-2 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600">🔓 ปลดล็อกให้ทำต่อ</button>`:""}
            `:'<p class="text-xs text-gray-500">⚪ ยังไม่เข้าสอบ</p>'}
            <button id="sc-sp-quiz-monitor" class="w-full mt-2 py-1.5 rounded-xl border border-red-200 text-red-600 text-[11px] font-bold hover:bg-red-100">เปิดหน้าจัดการสอบสดแบบเต็ม →</button>
          </div>
        `:""}
        ${s?`
          <div class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
            <div class="text-xs text-amber-800"><b>🚪 ออกนอกห้องอยู่</b><br>${l(s.reason??"")} · ${Vt(s.created_at)}</div>
          </div>
          <button id="sc-sp-return" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700">✅ บันทึกกลับเข้าห้องแล้ว</button>
        `:`
          <button id="sc-sp-leave" class="w-full py-2.5 rounded-xl bg-amber-500 text-white text-sm font-bold hover:bg-amber-600">🚪 อนุญาตออกนอกห้อง</button>
        `}
      </div>`}const Ss=e=>e>=80?4:e>=75?3.5:e>=70?3:e>=65?2.5:e>=60?2:e>=55?1.5:e>=50?1:0,Es=e=>e>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:e>=2.5?{label:"ดี",cls:"text-blue-600"}:e>=1?{label:"ผ่าน",cls:"text-amber-600"}:{label:"ไม่ผ่าน",cls:"text-red-600"},be=e=>Number.isFinite(e)?String(Number(e.toFixed(2))):"—";function Ls(e){if(!q.length)return'<p class="text-center py-6 text-xs text-gray-400">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>';const s=se[e.id]??[],t=q.filter(h=>h.column_type==="bonus"),n=q.filter(h=>h.column_type==="derived"),a=q.filter(h=>(h.column_type??"regular")==="regular"),r=a.filter(h=>h.assignment_type!=="final"&&h.assignment_type!=="ปลายภาค"),d=a.filter(h=>h.assignment_type==="final"||h.assignment_type==="ปลายภาค"),o=zn(t),p=h=>{var v;return parseFloat((v=s.find(k=>k.score_column_id===h.id))==null?void 0:v.score)||0},g=h=>{const v=p(h);if(!h.bonus_formula)return v;const k=Object.fromEntries(o.map(E=>[E.var,p(E)])),L=Nt(h.bonus_formula,k)??0;return h.max_score?Math.min(v+L,parseFloat(h.max_score)):v+L},i=h=>{if(!h.formula)return 0;const v=Object.fromEntries((h.formula_refs??[]).map(k=>{const L=q.find(E=>E.id===k.col_id);return[k.var,L?p(L):0]}));return Nt(h.formula,v)??0},c=h=>h.reduce((v,k)=>v+(parseFloat(k.max_score)||0),0),u=h=>h.reduce((v,k)=>v+g(k),0),S=c(r),C=c(d),G=c(n),_=u(r),w=u(d),j=n.reduce((h,v)=>h+i(v),0),H=S+C+G,F=_+w+j,V=Math.round(F),O=H>0?F/H*100:0,Y=Ss(O),oe=Es(Y),Ae=(h,v)=>{const k=s.find(me=>me.score_column_id===h.id),L=(k==null?void 0:k.score)??"",E=L!==""&&parseFloat(h.max_score)>0?parseFloat(L)/parseFloat(h.max_score)*100:null;return`<tr class="border-b border-gray-50 last:border-0">
        <td class="py-2 px-2 text-gray-700 text-[11px] font-semibold">${l(h.assignment_name??"—")}</td>
        <td class="py-1 px-1 text-center"><input type="number" class="sc-score-input w-16 text-center border border-gray-200 rounded-lg px-1 py-1 font-mono font-bold ${v} focus:outline-none focus:ring-2 focus:ring-indigo-300" data-col="${h.id}" value="${L}" max="${h.max_score??""}" placeholder="—" /></td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-400">/${h.max_score??0}</td>
        <td class="py-2 px-1 text-center text-[11px] text-gray-500">${E==null?"—":E.toFixed(0)+"%"}</td>
      </tr>`},_e=(h,v,k,L,E)=>v.length?`<div>
      <h4 class="font-bold ${E.title} text-sm mb-2">${h}</h4>
      <div class="overflow-hidden rounded-xl border ${E.border}"><table class="w-full table-fixed">
        <thead><tr class="${E.head} text-gray-500"><th class="py-1.5 px-2 text-left text-[10px] w-[44%]">ชื่องาน</th><th class="py-1.5 text-center text-[10px]">คะแนน</th><th class="py-1.5 text-center text-[10px]">เต็ม</th><th class="py-1.5 text-center text-[10px]">%</th></tr></thead>
        <tbody>${v.map(me=>Ae(me,E.input)).join("")}</tbody>
        <tfoot><tr class="${E.head} font-bold"><td class="py-2 px-2 ${E.title} text-xs">รวม</td><td class="py-2 text-center ${E.title} text-xs">${be(k)}</td><td class="py-2 text-center text-gray-400 text-xs">/${be(L)}</td><td class="py-2 text-center ${E.title} text-xs">${L>0?(k/L*100).toFixed(1):0}%</td></tr></tfoot>
      </table></div>
    </div>`:"";return`
      <div class="space-y-4">
        ${_e("📘 กลางภาค",r,_,S,{title:"text-blue-700",border:"border-blue-100",head:"bg-blue-50",input:"text-blue-600"})}
        ${_e("📙 ปลายภาค",d,w,C,{title:"text-purple-700",border:"border-purple-100",head:"bg-purple-50",input:"text-purple-600"})}
        ${n.length?`<div class="rounded-xl border border-indigo-100 bg-indigo-50/50 px-3 py-2.5"><p class="text-xs font-bold text-indigo-700 mb-1">🧮 คะแนนคำนวณ</p>${n.map(h=>`<div class="flex justify-between text-[11px] py-1"><span class="text-gray-600">${l(h.assignment_name??"")}</span><b class="text-indigo-700">${be(i(h))}/${be(parseFloat(h.max_score)||0)}</b></div>`).join("")}</div>`:""}
        <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-4 text-center border border-amber-100">
          <p class="text-xs text-gray-500 mb-1">คะแนนรวมทั้งภาค</p>
          <p class="text-3xl font-extrabold text-amber-700">${be(V)}<span class="text-sm font-normal text-gray-400">/${be(H)}</span></p>
          <p class="text-[11px] text-gray-400 mt-0.5">คะแนนจริง ${be(F)} · ${O.toFixed(1)}%</p>
          <p class="text-xl font-bold text-purple-700 mt-1">เกรด ${Y>0?Y.toFixed(1):"0"} <span class="text-sm ${oe.cls}">— ${oe.label}</span></p>
        </div>
        <p class="text-[10px] text-gray-400 text-center">คำนวณด้วยกลุ่มกลางภาค/ปลายภาค สูตร และคะแนนโบนัสแบบเดียวกับหน้าคะแนนหลัก</p>
      </div>`}const qs={present:"#059669",absent:"#dc2626",late:"#f59e0b",excused:"#3b82f6",sick:"#f97316"};function js(e){const s=(he[e.id]??[]).slice().sort((c,u)=>(u.check_date??"").localeCompare(c.check_date??""));if(!s.length)return'<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีข้อมูลเช็คชื่อ</p>';const t=["present","absent","late","excused","sick"],n={};for(const c of s)n[c.status]=(n[c.status]??0)+1;const a=s.length;let r=0;const d=t.filter(c=>n[c]).map(c=>{const u=n[c]/a*100,S=`${qs[c]} ${r}% ${r+u}%`;return r+=u,S}),o=d.length?`conic-gradient(${d.join(",")})`:"#e5e7eb",p=Math.round((n.present??0)/a*100),g=t.filter(c=>n[c]).map(c=>{const u=Wt[c];return`<span class="px-2 py-1 rounded-full text-[11px] font-bold ${(u==null?void 0:u.bg)??"bg-gray-50"} ${(u==null?void 0:u.color)??"text-gray-500"}">${(u==null?void 0:u.label)??c} ${n[c]}</span>`}).join(" "),i=s.slice(0,15).map(c=>{const u=Wt[c.status];return`<div class="flex items-center justify-between px-3 py-1.5 text-xs border-b border-gray-50">
        <span class="text-gray-500">${l(c.check_date??"")} · คาบ ${c.session_number}</span>
        <span class="font-bold ${(u==null?void 0:u.color)??"text-gray-500"}">${(u==null?void 0:u.label)??c.status}</span>
      </div>`}).join("");return`
      <div class="flex items-center gap-4 mb-3">
        <div class="relative flex-shrink-0" style="width:72px;height:72px;border-radius:50%;background:${o}">
          <div class="absolute" style="inset:7px;background:white;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <span class="text-sm font-bold text-gray-800">${p}%</span>
            <span class="text-[8px] text-gray-400">มาเรียน</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 flex-1">${g}</div>
      </div>
      <div class="max-h-48 overflow-y-auto border-t border-gray-100 pt-2">${i}</div>`}function Is(e){const s=Le[e.id]??[];return s.length?`<div class="max-h-64 overflow-y-auto space-y-1.5">${s.map(t=>{const n=t.status==="returned"?"กลับแล้ว":t.status==="overdue"?"เลยเวลา":"ยังไม่กลับ",a=t.status==="returned"?"text-emerald-600":t.status==="overdue"?"text-red-600":"text-amber-600";return`<div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-gray-700">${l(t.reason??"")}</span>
          <span class="font-bold ${a}">${n}</span>
        </div>
        <div class="text-gray-400 mt-0.5">${new Date(t.created_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})} · ขออนุญาต ${t.allowed_duration} นาที</div>
      </div>`}).join("")}</div>`:'<p class="text-center py-6 text-xs text-gray-400">ไม่เคยขอออกนอกห้องในวิชานี้</p>'}function Cs(e){var r;(r=document.getElementById("sc-student-modal"))==null||r.remove();let s="info",t=e;const n=document.createElement("div");n.id="sc-student-modal",n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",document.body.appendChild(n);const a=()=>{var p,g,i,c,u,S,C,G;fe[t.id];const d=y.findIndex(_=>_.id===t.id);n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[88vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0">
            <div class="flex items-center gap-3">
              <button id="sc-sp-prev" ${d<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl flex-shrink-0">
                ${t.image_url?`<img src="${l(t.image_url)}" class="w-full h-full object-cover"/>`:l((t.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate">${l(t.full_name??"—")}</p>
                <p class="text-xs text-gray-400">${l(t.student_code??"")} · ${l(t.main_room??"")} · เลขที่ ${J.get(t.id)??"—"}</p>
              </div>
              <button id="sc-sp-next" ${d>=y.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sc-sp-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sc-sp-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sc-sp-jump" type="number" min="1" max="${y.length}" value="${J.get(t.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${y.length}</span>
            </div>
          </div>
          <div class="px-5 pb-3 flex-shrink-0">
            <div class="sc-tabbar w-full">
              ${ks.map(_=>`<button data-tab="${_.key}" class="sc-sp-tab sc-tab-pill ${s===_.key?"active":""}">${_.label}</button>`).join("")}
            </div>
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${s==="info"?$s(t):s==="score"?Ls(t):s==="att"?js(t):Is(t)}
          </div>
        </div>`,n.querySelector("#sc-sp-close").addEventListener("click",()=>n.remove()),(p=n.querySelector("#sc-sp-prev"))==null||p.addEventListener("click",()=>{d>0&&(t=y[d-1],s="info",a())}),(g=n.querySelector("#sc-sp-next"))==null||g.addEventListener("click",()=>{d<y.length-1&&(t=y[d+1],s="info",a())});const o=()=>{const _=n.querySelector("#sc-sp-jump"),w=parseInt(_.value,10),j=Ye.get(w);if(!j){b(`ไม่พบเลขที่ ${_.value}`,"warning"),_.value=J.get(t.id)??"";return}j.id!==t.id&&(t=j,s="info",a())};(i=n.querySelector("#sc-sp-jump"))==null||i.addEventListener("change",o),(c=n.querySelector("#sc-sp-jump"))==null||c.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),o())}),n.querySelectorAll(".sc-sp-tab").forEach(_=>_.addEventListener("click",()=>{s=_.dataset.tab,a()})),n.querySelectorAll(".sc-score-input").forEach(_=>{_.addEventListener("change",async()=>{var H;const w=parseInt(_.dataset.col,10),j=_.value.trim();_.disabled=!0;try{await cn(x,t.id,w,j===""?null:j);const F=se[H=t.id]??(se[H]=[]),V=F.find(Y=>Y.score_column_id===w),O=j===""?null:parseFloat(j);V?V.score=O:F.push({student_id:t.id,score_column_id:w,score:O}),b("บันทึกคะแนนแล้ว","success"),a()}catch(F){b("บันทึกไม่สำเร็จ: "+M(F),"error"),_.disabled=!1}})}),(u=n.querySelector("#sc-sp-return"))==null||u.addEventListener("click",async()=>{const _=fe[t.id];try{await Ht(_.id,"returned"),b("บันทึกกลับเข้าห้องแล้ว","success"),n.remove(),D()}catch(w){b("บันทึกไม่สำเร็จ: "+M(w),"error")}}),(S=n.querySelector("#sc-sp-leave"))==null||S.addEventListener("click",()=>{if(Object.keys(fe).length>=$){b(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${$} คนแล้ว`,"warning");return}n.remove(),Tn(m,f,t.id,t.full_name,t.image_url,fe,$,()=>D())}),(C=n.querySelector("#sc-sp-quiz-monitor"))==null||C.addEventListener("click",()=>{ee&&Ot(ee)}),(G=n.querySelector("#sc-sp-unlock"))==null||G.addEventListener("click",_=>{const w=_.target.dataset.attempt;Ms(w,()=>{n.remove(),D()})})};n.addEventListener("click",d=>{d.target===n&&n.remove()}),a()}function Ms(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4",t.innerHTML=`
      <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
        <div class="text-4xl mb-3">🔓</div>
        <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
        <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
        <div class="space-y-2">
          <button id="qu-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
          <button id="qu-restart" class="sc-btn-dark w-full py-3 rounded-2xl font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
          <button id="qu-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#qu-cancel").addEventListener("click",()=>t.remove());const n=async a=>{t.remove();try{await Sn(e,a),b(a==="resume"?"ปลดล็อก — ทำต่อจากจุดเดิมแล้ว":"ปลดล็อก — เริ่มชุดใหม่แล้ว","success"),s==null||s()}catch(r){b("ปลดล็อกไม่สำเร็จ: "+M(r),"error")}};t.querySelector("#qu-resume").addEventListener("click",()=>n("resume")),t.querySelector("#qu-restart").addEventListener("click",()=>n("restart"))}document.getElementById("sc-pass-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-return-btn");if(s)try{await Ht(s.dataset.lid,"returned"),b("บันทึกกลับเข้าห้องแล้ว","success"),D()}catch(t){b("บันทึกไม่สำเร็จ: "+M(t),"error")}}),document.getElementById("sc-leave-quota").addEventListener("click",()=>{Cn(f,$,U,()=>D())}),document.getElementById("sc-timer").addEventListener("click",()=>Fn(x,f,Ge)),document.getElementById("sc-random").addEventListener("click",()=>{const e=y.map((s,t)=>({...s,seat_no:t+1}));Nn(x,f,e,Ge)}),document.getElementById("sc-scan-att").addEventListener("click",()=>Mn(m)),document.getElementById("sc-scan-score").addEventListener("click",()=>In({classId:x,className:f.class_name})),document.getElementById("sc-dashboard").addEventListener("click",()=>Dn(x,f,window._pp5DonorTierIndex??0,I)),document.getElementById("sc-quiz-add").addEventListener("click",()=>ps()),document.getElementById("sc-quiz-list").addEventListener("click",async e=>{const s=e.target.closest(".sc-quiz-start"),t=e.target.closest(".sc-quiz-monitor"),n=e.target.closest(".sc-quiz-close"),a=e.target.closest(".sc-quiz-analytics");if(s)try{await kn(s.dataset.qid),b("เริ่มควิซให้ห้องนี้แล้ว 🧠","success"),D()}catch(r){b("เริ่มควิซไม่สำเร็จ: "+M(r),"error")}else if(t){const r=R.find(d=>d.id===t.dataset.qid);r&&Ot(r)}else if(n){const r=R.find(g=>g.id===n.dataset.qid);if(!r)return;const d=q.find(g=>String(g.id)===String(r.score_column_id)),o={highest:"เทียบเอาคะแนนสูงกว่า",overwrite:"ทับคะแนนเก่า",add:"บวกเพิ่มจากคะแนนเดิม"}[r.score_write_mode]??"ตามการตั้งค่าแบบทดสอบ",p=await Rs({quizTitle:r.title,hasScoreColumn:!!r.score_column_id,targetColumn:(d==null?void 0:d.assignment_name)??"",writeModeLabel:o});if(!p)return;try{await $n(r.id,{writeScores:p==="write_scores"}),b(p==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),D()}catch(g){b("ปิดสอบไม่สำเร็จ: "+M(g),"error")}}else if(a){const r=R.find(d=>d.id===a.dataset.qid);r&&Pn(r)}}),document.getElementById("sc-add-announcement").addEventListener("click",()=>Ts());function Ts(){var n;(n=document.getElementById("sc-ann-modal"))==null||n.remove();let e=null;const s=document.createElement("div");s.id="sc-ann-modal",s.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
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
            ${De.map(a=>`<button type="button" data-emoji="${a.emoji}" data-label="${l(a.label)}" class="ca-type-chip px-2.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50 transition">${a.emoji} ${a.label}</button>`).join("")}
          </div>
          <input id="ca-type-custom" type="text" list="ca-type-list" placeholder="หรือพิมพ์ประเภทใหม่เอง..."
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <datalist id="ca-type-list">${Se.map(a=>`<option value="${l(a)}"></option>`).join("")}</datalist>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">แนบไฟล์/รูปภาพ (เลือกได้หลายไฟล์ ไม่บังคับ)</label>
          <input id="ca-files" type="file" multiple class="w-full text-xs" />
        </div>
        <button id="ca-send" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">ส่งประกาศ</button>
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),s.querySelector("#ca-close").addEventListener("click",()=>s.remove());const t=s.querySelector("#ca-type-custom");s.querySelectorAll(".ca-type-chip").forEach(a=>a.addEventListener("click",()=>{e=`${a.dataset.emoji} ${a.dataset.label}`,t.value="",s.querySelectorAll(".ca-type-chip").forEach(r=>r.classList.remove("border-amber-400","bg-amber-100","text-amber-800")),a.classList.add("border-amber-400","bg-amber-100","text-amber-800")})),t.addEventListener("input",()=>{t.value.trim()&&(e=null,s.querySelectorAll(".ca-type-chip").forEach(a=>a.classList.remove("border-amber-400","bg-amber-100","text-amber-800")))}),s.querySelector("#ca-send").addEventListener("click",async()=>{const a=s.querySelector("#ca-text").value.trim();if(!a){b("พิมพ์ข้อความก่อนส่งนะ","warning");return}const r=t.value.trim()||e||`${De[0].emoji} ${De[0].label}`,d=s.querySelector("#ca-send");d.disabled=!0,d.textContent="กำลังส่ง...";try{const o=[...s.querySelector("#ca-files").files??[]],p=[];for(const g of o)p.push(await Rt(g,`class-${x}/announcements`));await rn({title:`📣 ${f.class_name}`,body:a,isActive:!0,teacherId:m.id,targetClassIds:[x],annType:r,attachmentUrls:p.length?p:null}),et(`${r} — ${f.class_name}`,a.slice(0,120),"sc-announcement"),b("ส่งประกาศถึงห้องนี้แล้ว 📣","success"),s.remove(),D()}catch(o){b("ส่งไม่สำเร็จ: "+M(o),"error"),d.disabled=!1,d.textContent="ส่งประกาศ"}})}let Me="daily";function As(){document.querySelectorAll(".sc-reftab-btn").forEach(t=>{t.classList.toggle("active",t.dataset.reftab===ne)});const e=ye.find(t=>t.key===ne),s=document.getElementById("sc-mobile-ref-title");s&&e&&(s.textContent=`${e.icon} ${e.label}`)}function pt(){var e,s,t,n,a,r,d,o;document.querySelectorAll(".sc-sched-tab").forEach(p=>{p.classList.toggle("active",p.dataset.sched===Me),p.addEventListener("click",()=>{Me=p.dataset.sched,document.querySelectorAll(".sc-sched-tab").forEach(g=>g.classList.toggle("active",g.dataset.sched===Me)),document.getElementById("sc-schedule-body").innerHTML=tt(Me)})}),(e=document.getElementById("sc-add-syllabus"))==null||e.addEventListener("click",()=>xt()),(s=document.getElementById("sc-ai-syllabus"))==null||s.addEventListener("click",()=>Gt({teacher:m,cls:f,courseId:ae,syllabusItems:W,lessonPlans:Z,currentWeek:re||1,initialMode:"schedule",onSaved:()=>D()})),(t=document.getElementById("sc-syllabus-list"))==null||t.addEventListener("click",p=>{const g=p.target.closest(".sc-syllabus-row");if(!g)return;const i=W.find(c=>c.id===parseInt(g.dataset.sylid,10));i&&xt(i)}),(n=document.getElementById("sc-add-plan"))==null||n.addEventListener("click",()=>bt()),(a=document.getElementById("sc-ai-plan"))==null||a.addEventListener("click",()=>Gt({teacher:m,cls:f,courseId:ae,syllabusItems:W,lessonPlans:Z,currentWeek:re||1,initialMode:"plan",onSaved:()=>D()})),(r=document.getElementById("sc-plan-list"))==null||r.addEventListener("click",p=>{const g=p.target.closest(".sc-plan-reflect"),i=p.target.closest(".sc-plan-row");if(g){const c=Z.find(u=>u.id===parseInt(g.dataset.planid,10));c&&Vn({plan:c,cls:f,teacher:m,classId:x,currentWeek:re||c.week_start})}else if(i){const c=Z.find(u=>u.id===parseInt(i.dataset.planid,10));c&&bt(c)}}),(d=document.getElementById("sc-add-assignment"))==null||d.addEventListener("click",()=>Ue()),(o=document.getElementById("sc-assignment-list"))==null||o.addEventListener("click",p=>{const g=p.target.closest(".sc-assignment-row");if(!g)return;const i=K.find(c=>c.id===parseInt(g.dataset.aid,10));i&&gt(i)})}pt();const Bs=()=>`
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
      ${st()}
    </div>`;function zs(){var e,s,t,n,a,r,d,o;(e=document.getElementById("sc-mobile-more-chat"))==null||e.addEventListener("click",ot),(s=document.getElementById("sc-mobile-more-ai"))==null||s.addEventListener("click",it),(t=document.getElementById("sc-mobile-more-ann"))==null||t.addEventListener("click",()=>{var p;return(p=document.getElementById("sc-add-announcement"))==null?void 0:p.click()}),(n=document.getElementById("sc-mobile-more-dashboard"))==null||n.addEventListener("click",()=>{var p;return(p=document.getElementById("sc-dashboard"))==null?void 0:p.click()}),(a=document.getElementById("sc-mobile-more-switch"))==null||a.addEventListener("click",()=>{var p;return(p=document.getElementById("sc-switch-class"))==null?void 0:p.click()}),(r=document.getElementById("sc-mobile-more-exam"))==null||r.addEventListener("click",()=>{var p;return(p=document.getElementById("sc-mobile-exam-preview"))==null?void 0:p.scrollIntoView({behavior:"smooth",block:"start"})}),(d=document.getElementById("sc-mobile-more-grades"))==null||d.addEventListener("click",()=>ge("grades")),(o=document.getElementById("sc-mobile-more-attendance"))==null||o.addEventListener("click",()=>ge("attendance"))}function Hs(){document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.classList.toggle("active",e.dataset.mobileGroup===Ce))}function Ps(){const e=document.getElementById("sc-mobile-ref-subtabs");if(!e)return;const s=Ce==="plan"?ye.filter(t=>["schedule","syllabus","plans"].includes(t.key)):[];e.innerHTML=s.map(t=>`<button type="button" data-mobile-ref-tab="${t.key}" class="${t.key===ne?"active":""}">${t.icon} ${t.label}</button>`).join(""),e.querySelectorAll("[data-mobile-ref-tab]").forEach(t=>t.addEventListener("click",()=>ge(t.dataset.mobileRefTab)))}async function Ds(e,s){var n;const t=e==="grades"?"คะแนน":"เช็คชื่อ";s.innerHTML=`<div class="flex flex-col items-center justify-center py-12 gap-3">
      <button id="sc-reopen-overlay" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">เปิดหน้าต่าง${t}อีกครั้ง</button>
    </div>`,(n=s.querySelector("#sc-reopen-overlay"))==null||n.addEventListener("click",()=>ge(e));try{await Wn(e==="grades"?Hn:An,m,f)}catch(a){console.error(a)}Qt("my-classes"),Ut("Smart Classroom")}async function ge(e){var t;if(!ye.some(n=>n.key===e))return;ne=e,As(),Ps(),window.matchMedia("(max-width: 1023px)").matches&&((t=document.getElementById("sc-reference-panel"))==null||t.classList.add("mobile-open"));const s=document.getElementById("sc-reftab-body");if(s){if(e==="grades"||e==="attendance"){await Ds(e,s);return}s.innerHTML=lt(ne),pt()}}function mt(e){if(!rt.some(a=>a.key===e))return;Ce=e,Hs();const s=document.getElementById("sc-mobile-room-section"),t=document.getElementById("sc-mobile-live-section");s==null||s.classList.toggle("mobile-active",e==="room"),t==null||t.classList.toggle("mobile-active",e==="live");const n=document.getElementById("sc-reference-panel");if(e==="room"||e==="live"){n==null||n.classList.remove("mobile-open"),window.scrollTo({top:0,behavior:"smooth"});return}if(e==="work")ge("assignments");else if(e==="plan")ge(["schedule","syllabus","plans"].includes(ne)?ne:"syllabus");else{const a=document.getElementById("sc-mobile-ref-title");a&&(a.textContent="••• เพิ่มเติม"),document.getElementById("sc-mobile-ref-subtabs").innerHTML="",document.getElementById("sc-reftab-body").innerHTML=Bs(),zs(),n==null||n.classList.add("mobile-open")}}document.querySelectorAll(".sc-reftab-btn").forEach(e=>e.addEventListener("click",()=>ge(e.dataset.reftab))),document.querySelectorAll(".sc-mobile-group-btn").forEach(e=>e.addEventListener("click",()=>mt(e.dataset.mobileGroup))),(At=document.getElementById("sc-mobile-ref-close"))==null||At.addEventListener("click",()=>{mt("room")});function xt(e){var a,r;(a=document.getElementById("sc-syllabus-modal"))==null||a.remove();const s=!!e,t=e??{},n=document.createElement("div");n.id="sc-syllabus-modal",n.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",d=>{d.target===n&&n.remove()}),n.querySelector("#sy-close").addEventListener("click",()=>n.remove()),(r=n.querySelector("#sy-delete"))==null||r.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้?"))try{await bn(t.id),b("ลบแล้ว","success"),n.remove(),D()}catch(d){b("ลบไม่สำเร็จ: "+M(d),"error")}}),n.querySelector("#sy-save").addEventListener("click",async()=>{const d=parseInt(n.querySelector("#sy-week-start").value,10),o=parseInt(n.querySelector("#sy-week-end").value,10),p=n.querySelector("#sy-topic").value.trim();if(!d||!o||o<d){b("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}if(!p){b("กรอกหัวข้อก่อนนะ","warning");return}const g=n.querySelector("#sy-save");g.disabled=!0,g.textContent="กำลังบันทึก...";const i={course_id:ae,week_start:d,week_end:o,topic:p,description:n.querySelector("#sy-desc").value.trim()||null};try{s?await gn(t.id,i):await fn(i),b("บันทึกแล้ว ✅","success"),n.remove(),D()}catch(c){b("บันทึกไม่สำเร็จ: "+M(c),"error"),g.disabled=!1,g.textContent="บันทึก"}})}function bt(e){var G,_,w,j;(G=document.getElementById("sc-plan-modal"))==null||G.remove();const s=!!e,t=e??{},n=(f==null?void 0:f.master_subjects)??{},a={MATH:"คณิตศาสตร์",THAI:"ภาษาไทย",SCI:"วิทยาศาสตร์และเทคโนโลยี",ENG:"ภาษาต่างประเทศ",SOC:"สังคมศึกษา ศาสนาและวัฒนธรรม",PE:"สุขศึกษาและพลศึกษา",ART:"ศิลปะ",CAREER:"การงานอาชีพ",ISLAM:"อิสลามศึกษา"},r=String(n.dept??n.subject_group??"").trim(),d=a[r.toUpperCase()]||r||"................................",o=String((f==null?void 0:f.class_name)??"").trim(),p=String(n.grade_level??"").replace(/ม\./g,"").trim(),g=/^ม\./.test(o)?o.replace(/^ม\./,""):[p,o].filter(Boolean).join(" "),i=f==null?void 0:f.students,c=(Array.isArray(i)?(_=i[0])==null?void 0:_.full_name:i==null?void 0:i.full_name)??"................................",u=document.createElement("div");u.id="sc-plan-modal",u.className="fixed inset-0 z-[95] bg-slate-100 flex flex-col",u.innerHTML=`
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
            <h2>กลุ่มสาระการเรียนรู้${l(d)}</h2>
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
                <div class="lp-sign"><div class="lp-sign-space"></div><div>ลงชื่อ</div><div class="lp-sign-line"></div><div>ครูผู้สอน</div><div>( ${l((m==null?void 0:m.full_name)??"................................")} )</div><div>วันที่ ${t.lesson_date?l(t.lesson_date):"........................"}</div></div>
              </div>
              <div class="lp-reflect"><h3>บันทึกหลังการสอน</h3><div class="lp-rule">ผลการจัดการเรียนรู้:</div><div class="lp-rule"></div><div class="lp-rule">แนวทางการแก้ปัญหา:</div><div class="lp-rule"></div></div>
              <div class="lp-suggestion"><h3>ข้อเสนอแนะ</h3><div class="lp-rule"></div><div class="lp-rule"></div><div class="lp-rule"></div></div>
              <div class="lp-dept-sign">ลงชื่อ <span class="lp-sign-line"></span> หัวหน้ากลุ่มสาระ<div>( ................................ )</div><div>วันที่ ................................</div></div>
            </div>
          </section>
        </article>
      </main>`,document.body.appendChild(u),u.querySelector("#lp-close").addEventListener("click",()=>u.remove());const S=u.querySelector("#lp-title"),C=u.querySelector("#lp-title-mobile");C==null||C.addEventListener("input",()=>{S.value=C.value}),S==null||S.addEventListener("input",()=>{C&&(C.value=S.value)}),(w=u.querySelector("#lp-week-mobile"))==null||w.addEventListener("input",H=>{u.querySelector("#lp-week-start").value=H.target.value,u.querySelector("#lp-week-end").value=H.target.value}),(j=u.querySelector("#lp-delete"))==null||j.addEventListener("click",async()=>{if(confirm(`ลบแผน "${t.title}"? บันทึกหลังสอน/ลายเซ็นที่ผูกกับแผนนี้จะหายไปด้วย`))try{await yn(t.id),b("ลบแผนแล้ว","success"),u.remove(),D()}catch(H){b("ลบไม่สำเร็จ: "+M(H),"error")}}),u.querySelector("#lp-save").addEventListener("click",async()=>{const H=u.querySelector("#lp-title").value.trim(),F=parseInt(u.querySelector("#lp-week-start").value,10),V=parseInt(u.querySelector("#lp-week-end").value,10);if(!H){b("กรอกชื่อแผนก่อนนะ","warning");return}if(!F||!V||V<F){b("กำหนดช่วงสัปดาห์ให้ถูกต้อง","warning");return}const O=u.querySelector("#lp-save");O.disabled=!0,O.textContent="กำลังบันทึก...";const Y={course_id:ae,teacher_id:m.id,title:H,week_start:F,week_end:V,session_number:parseInt(u.querySelector("#lp-session-number").value,10)||1,lesson_date:u.querySelector("#lp-lesson-date").value||null,duration_minutes:parseInt(u.querySelector("#lp-duration").value,10)||null,unit_title:u.querySelector("#lp-unit-title").value.trim()||null,standards:u.querySelector("#lp-standards").value.trim()||null,objectives:u.querySelector("#lp-objectives").value.trim()||null,key_concept:u.querySelector("#lp-key_concept").value.trim()||null,activities_intro:u.querySelector("#lp-activities_intro").value.trim()||null,activities_main:u.querySelector("#lp-activities_main").value.trim()||null,activities_wrap:u.querySelector("#lp-activities_wrap").value.trim()||null,media:u.querySelector("#lp-media").value.trim()||null,assessment:u.querySelector("#lp-assessment").value.trim()||null,homework:u.querySelector("#lp-homework").value.trim()||null,teacher_notes:u.querySelector("#lp-teacher_notes").value.trim()||null};try{s?await vn(t.id,Y):await hn(Y),b("บันทึกแผนแล้ว ✅","success"),u.remove(),D()}catch(oe){b("บันทึกไม่สำเร็จ: "+M(oe),"error"),O.disabled=!1,O.textContent="บันทึกแผน"}})}const Fs=e=>{if(!e)return"";const s=new Date(e),t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`};function Ue(e){var G,_;(G=document.getElementById("sc-assign-modal"))==null||G.remove();const s=!!e,t=e??{};let n=[...t.attachment_urls??[]];const a=document.createElement("div");a.id="sc-assign-modal",a.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`
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
            ${q.map(w=>`<option value="${w.id}" ${t.score_column_id===w.id?"selected":""}>${l(w.assignment_name)} (เต็ม ${w.max_score})</option>`).join("")}
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
              ${Object.entries(Fe).map(([w,j])=>`<option value="${w}" ${(t.score_write_mode??"overwrite")===w?"selected":""}>${j.label}</option>`).join("")}
            </select>
            <p id="sa-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">กำหนดส่ง</label>
          <input id="sa-due" type="datetime-local" value="${Fs(t.due_at)}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",w=>{w.target===a&&a.remove()}),a.querySelector("#sa-close").addEventListener("click",()=>a.remove()),(_=a.querySelector("#sa-delete"))==null||_.addEventListener("click",async()=>{if(confirm(`ลบงาน "${t.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await Pt(t.id),b("ลบงานแล้ว","success"),a.remove(),D()}catch(w){b("ลบไม่สำเร็จ: "+M(w),"error")}});const r=a.querySelector("#sa-kept-files"),d=()=>{r.innerHTML=n.map((w,j)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${l(w.name)}
          <button type="button" class="sa-remove-file text-indigo-400 hover:text-red-500 font-bold" data-i="${j}">✕</button>
        </span>`).join(""),r.querySelectorAll(".sa-remove-file").forEach(w=>w.addEventListener("click",()=>{n.splice(parseInt(w.dataset.i,10),1),d()}))};d();const o=a.querySelector("#sa-penalty-mode"),p=a.querySelector("#sa-penalty-value"),g=a.querySelector("#sa-penalty-hint");o.addEventListener("change",()=>{p.disabled=o.value==="none",p.disabled?(p.classList.add("bg-gray-50"),p.value=""):p.classList.remove("bg-gray-50"),g.textContent=o.value==="flat"?"หักคะแนนเท่านี้ทันทีถ้าส่งช้า ไม่ว่าจะช้ากี่วัน":o.value==="per_day"?"หักคะแนนเท่านี้ต่อวันที่ส่งช้า (คูณตามจำนวนวัน)":""});const i=a.querySelector("#sa-col"),c=a.querySelector("#sa-write-mode-wrap"),u=a.querySelector("#sa-write-mode"),S=a.querySelector("#sa-write-mode-hint"),C=()=>{var w;c.classList.toggle("hidden",!i.value),S.textContent=((w=Fe[u.value])==null?void 0:w.hint)??""};i.addEventListener("change",C),u.addEventListener("change",C),C(),a.querySelector("#sa-save").addEventListener("click",async()=>{const w=a.querySelector("#sa-title").value.trim();if(!w){b("กรอกชื่องานก่อนนะ","warning");return}const j=a.querySelector("#sa-save");j.disabled=!0,j.textContent="กำลังบันทึก...";try{const H=[...a.querySelector("#sa-files").files??[]],F=[];for(const oe of H)F.push(await Rt(oe,`class-${x}`));const V=a.querySelector("#sa-due").value,O=a.querySelector("#sa-max-score").value.trim(),Y={score_column_id:i.value?parseInt(i.value,10):null,title:w,description:a.querySelector("#sa-desc").value.trim()||null,attachment_urls:[...n,...F],due_at:V?new Date(V).toISOString():null,late_penalty_mode:o.value,late_penalty_value:parseFloat(p.value)||0,score_write_mode:u.value,max_score:O===""?null:parseFloat(O)};s?(await ln(t.id,Y),b("บันทึกการแก้ไขแล้ว ✅","success")):(await on({...Y,class_id:x,teacher_id:m.id}),et(`📚 งานใหม่ — ${f.class_name}`,w,"sc-assignment"),b("สั่งงานสำเร็จ ✅","success")),a.remove(),D()}catch(H){b("บันทึกไม่สำเร็จ: "+M(H),"error"),j.disabled=!1,j.textContent=s?"บันทึกการแก้ไข":"บันทึกงาน"}})}function gt(e){var o,p,g;(o=document.getElementById("sc-track-modal"))==null||o.remove();const s=Object.fromEntries(e.submissions.map(i=>[i.student_id,i]));q.find(i=>i.id===e.score_column_id);const t=document.createElement("div");t.id="sc-track-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-fade">
        <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-bold text-gray-800 truncate">${l(e.title)}</p>
              <p class="text-xs text-gray-400 mt-0.5">${e.description?l(e.description)+" · ":""}กำหนดส่ง ${Oe(e.due_at)}</p>
              ${(p=e.attachment_urls)!=null&&p.length?`<div class="flex flex-wrap gap-1.5 mt-2">${e.attachment_urls.map(i=>`<a href="${l(i.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${l(i.name)}</a>`).join("")}</div>`:""}
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
      </div>`,document.body.appendChild(t);const n=i=>{var _;const c=`<div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[10px] flex-shrink-0">
        ${i.image_url?`<img src="${l(i.image_url)}" class="w-full h-full object-cover"/>`:l((i.full_name??"?").charAt(0))}
      </div>`,u=`<span class="text-gray-400 font-mono text-[10px] flex-shrink-0">#${J.get(i.id)??"—"}</span>`,S=s[i.id];if(!S)return`<div class="sc-track-row flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs cursor-pointer hover:border-indigo-200" data-sid="${i.id}">
        <div class="flex items-center gap-2 min-w-0">
          ${c}
          ${u}
          <span class="font-semibold text-gray-600 truncate">${l(i.full_name??"")}</span>
        </div>
        <span class="text-gray-300 font-medium flex-shrink-0">ยังไม่ส่ง</span>
      </div>`;const C=Ie(e,S.submitted_at),G=Te(S);return`<div class="sc-track-row px-3 py-2.5 rounded-xl border ${C?"border-amber-200 bg-amber-50":"border-gray-100 bg-gray-50"} text-xs cursor-pointer hover:border-indigo-200" data-sid="${i.id}">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${c}
            ${u}
            <span class="font-semibold text-gray-700 truncate">${l(i.full_name??"")}</span>
          </div>
          <span class="text-gray-400 flex-shrink-0">${new Date(S.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</span>
        </div>
        <div class="flex items-center justify-between mt-1.5">
          ${(_=S.file_urls)!=null&&_.length?`<div class="flex flex-wrap gap-1.5">${S.file_urls.map(w=>`<span class="text-[10px] px-2 py-1 rounded-lg bg-white border border-gray-200 text-indigo-600">📎 ${l(w.name)}</span>`).join("")}</div>`:"<span></span>"}
          ${ft(G)}
        </div>
        ${C?`<p class="text-[10px] text-amber-700 font-bold mt-1.5">⏰ ส่งช้า ${Qe(e,S.submitted_at)} วัน</p>`:""}
      </div>`};let a=!1;const r=()=>{const i=a?[...y].sort((c,u)=>yt[Te(s[c.id])]-yt[Te(s[u.id])]):y;t.querySelector("#st-row-list").innerHTML=i.map(n).join(""),t.querySelectorAll(".sc-track-row").forEach(c=>c.addEventListener("click",()=>{vt(e,parseInt(c.dataset.sid,10))}))};t._refresh=r,r(),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#st-close").addEventListener("click",()=>t.remove()),t.querySelector("#st-edit").addEventListener("click",()=>{t.remove(),Ue(e)}),t.querySelector("#st-delete").addEventListener("click",async()=>{if(confirm(`ลบงาน "${e.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`))try{await Pt(e.id),b("ลบงานแล้ว","success"),t.remove(),D()}catch(i){b("ลบไม่สำเร็จ: "+M(i),"error")}}),t.querySelector("#st-sort-toggle").addEventListener("change",i=>{a=i.target.checked,r()});const d=()=>{var i;return(i=y.find(c=>s[c.id])??y[0])==null?void 0:i.id};(g=t.querySelector("#st-review-start"))==null||g.addEventListener("click",()=>{const i=d();i!=null&&vt(e,i)})}const Te=e=>e?e.status==="rejected"?"rejected":e.hasScore?"graded":e.reviewed_at?"reviewed":"unreviewed":"unsubmitted",ft=e=>({unreviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex-shrink-0">🔵 ยังไม่ตรวจ</span>',reviewed:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">🟡 ตรวจแล้ว ยังไม่ให้คะแนน</span>',graded:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">✅ ให้คะแนนแล้ว</span>',rejected:'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex-shrink-0">❌ ตีกลับ รอส่งใหม่</span>'})[e]??"",yt={unreviewed:0,unsubmitted:1,reviewed:2,rejected:3,graded:4},We={praise:["ทำได้ดีมากครับ/ค่ะ เห็นความตั้งใจชัดเจน ขอให้อัลลอฮ์ทรงประทานบารอกัตในความพยายามของเธอนะ 🌟","เก่งมากเลย ครูภูมิใจในตัวเธอ ขอดุอาอ์ให้พัฒนาต่อไปเรื่อยๆ อินชาอัลลอฮ์","ยอดเยี่ยม! งานชิ้นนี้แสดงถึงความพยายามที่ดีมาก ขอให้เป็นบารอกัตติดตัวเธอไปตลอด","สุดยอดค่ะ/ครับ ทำมาได้ดีมาก ครูขอดุอาอ์ให้เธอประสบความสำเร็จเสมอ"],improve:["ทำได้ดีในหลายจุดแล้วนะ ลองทบทวนอีกครั้งในส่วนที่ยังไม่สมบูรณ์ ครูเชื่อว่าเธอทำได้ดีกว่านี้ อินชาอัลลอฮ์","ครูเห็นความตั้งใจแล้ว ลองกลับไปทบทวนเพิ่มอีกนิดแล้วส่งใหม่ได้นะ ครูให้กำลังใจอยู่เสมอ","ยังไม่สมบูรณ์เท่าที่ควร แต่ไม่เป็นไรนะ ทุกความผิดพลาดคือบทเรียน ลองแก้ไขแล้วส่งมาใหม่ได้เลย","อยากให้ตรวจทานอีกรอบก่อนส่งครั้งหน้า ครูเชื่อมั่นในศักยภาพของเธอ ขอให้อัลลอฮ์ทรงช่วยให้เข้าใจง่ายขึ้นนะ"]},Ns=e=>{var t;const s=((t=(e.name??"").split(".").pop())==null?void 0:t.toLowerCase())??"";return["jpg","jpeg","png","gif","webp"].includes(s)?"image":s==="pdf"?"pdf":"other"};function vt(e,s){var g;(g=document.getElementById("sc-grade-card"))==null||g.remove();const t=Object.fromEntries(e.submissions.map(i=>[i.student_id,i])),n=q.find(i=>i.id===e.score_column_id);let a=Math.max(0,y.findIndex(i=>i.id===s));const r=document.createElement("div");r.id="sc-grade-card",r.className="fixed inset-0 z-[96] flex items-center justify-center bg-black/55 p-4",document.body.appendChild(r);const d=e.max_score!=null?parseFloat(e.max_score):n?parseFloat(n.max_score):null,o=()=>{var j,H,F,V,O,Y,oe,Ae,_e,h;const i=y[a],c=t[i.id],u=c&&Ie(e,c.submitted_at),S=c?bs(e,c.submitted_at):0,C=c!=null&&c.hasScore?c.savedScore??"":d!=null?Math.max(0,(d||0)-S):"";c&&!c.reviewed_at&&(c.reviewed_at=new Date().toISOString(),un(e.id,i.id).catch(()=>{}));const G=c&&(j=c.file_urls)!=null&&j.length?c.file_urls.map(v=>{const k=Ns(v);return k==="image"?`<a href="${l(v.url)}" target="_blank" rel="noopener" class="block rounded-xl overflow-hidden border border-gray-200 mb-2"><img src="${l(v.url)}" class="w-full max-h-72 object-contain bg-gray-50" loading="lazy" /></a>`:k==="pdf"?`<iframe src="${l(v.url)}" class="w-full h-72 rounded-xl border border-gray-200 mb-2"></iframe>`:`<a href="${l(v.url)}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-indigo-600 hover:bg-indigo-50 mb-2">📎 ${l(v.name)} <span class="text-gray-400">(เปิดแท็บใหม่ — ไม่รองรับพรีวิว)</span></a>`}).join(""):"";r.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <button id="sgc-prev" ${a<=0?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-11 h-11 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0">
                ${i.image_url?`<img src="${l(i.image_url)}" class="w-full h-full object-cover"/>`:l((i.full_name??"?").charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate text-sm">${l(i.full_name??"—")}</p>
                <p class="text-[11px] text-gray-400">เลขที่ ${J.get(i.id)??"—"} · ${l(i.student_code??"")}</p>
              </div>
              <button id="sgc-next" ${a>=y.length-1?"disabled":""} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sgc-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sgc-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sgc-jump" type="number" min="1" max="${y.length}" value="${J.get(i.id)??""}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${y.length}</span>
              <span class="text-[11px] text-gray-300 ml-auto">${a+1} / ${y.length} คน</span>
            </div>
            ${c?`<div class="mt-2">${ft(Te(c))}</div>`:""}
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${c?`
              <p class="text-[11px] text-gray-400 mb-2">ส่งเมื่อ ${new Date(c.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</p>
              ${u?`<p class="text-[11px] text-amber-700 font-bold mb-2">⏰ ส่งช้า ${Qe(e,c.submitted_at)} วัน${S>0?` — หักคะแนนแนะนำ ${S}`:""}</p>`:""}
              ${G}
              ${c.note?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3"><p class="text-[10px] font-bold text-gray-400 mb-0.5">ข้อความจากนักเรียน</p><p class="text-xs text-gray-600">${l(c.note)}</p></div>`:""}
              ${n?`<div class="mb-3">
                <div class="flex items-center gap-2">
                  <input id="sgc-grade" type="number" min="0" max="${d??""}" class="w-20 text-center border border-gray-200 rounded-lg px-1 py-1.5 font-mono font-bold text-indigo-600" value="${C}" placeholder="—" />
                  <span class="text-xs text-gray-400">/ ${d??n.max_score}</span>
                  <button id="sgc-grade-save" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg ml-auto">บันทึกคะแนน</button>
                </div>
                <p class="text-[10px] text-gray-400 mt-1">โหมดคะแนน: ${((H=Fe[e.score_write_mode??"overwrite"])==null?void 0:H.label)??""} · บันทึกอัตโนมัติเมื่อออกจากช่องกรอก</p>
              </div>`:'<p class="text-[11px] text-gray-300 mb-3">งานนี้ไม่ได้ผูกกับคอลัมน์คะแนน</p>'}
              <div>
                <label for="sgc-feedback" class="text-[11px] font-bold text-gray-500 mb-1 block">คอมเมนต์ถึงนักเรียน</label>
                <div class="flex flex-wrap gap-1.5 mb-1.5">
                  <span class="text-[10px] text-gray-400 flex items-center">💚 ชื่นชม:</span>
                  ${We.praise.map((v,k)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100" data-tmpl="praise-${k}">ตัวอย่าง ${k+1}</button>`).join("")}
                </div>
                <div class="flex flex-wrap gap-1.5 mb-2">
                  <span class="text-[10px] text-gray-400 flex items-center">💡 ปรับปรุง:</span>
                  ${We.improve.map((v,k)=>`<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100" data-tmpl="improve-${k}">ตัวอย่าง ${k+1}</button>`).join("")}
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
        </div>`,r.querySelector("#sgc-close").addEventListener("click",()=>p()),(F=r.querySelector("#sgc-prev"))==null||F.addEventListener("click",()=>{a>0&&(a--,o())}),(V=r.querySelector("#sgc-next"))==null||V.addEventListener("click",()=>{a<y.length-1&&(a++,o())});const _=()=>{const v=r.querySelector("#sgc-jump"),k=parseInt(v.value,10),L=Ye.get(k);if(!L){b(`ไม่พบเลขที่ ${v.value}`,"warning"),v.value=J.get(i.id)??"";return}const E=y.findIndex(me=>me.id===L.id);E!==a&&(a=E,o())};(O=r.querySelector("#sgc-jump"))==null||O.addEventListener("change",_),(Y=r.querySelector("#sgc-jump"))==null||Y.addEventListener("keydown",v=>{v.key==="Enter"&&_()});const w=async()=>{const v=r.querySelector("#sgc-grade-save"),k=r.querySelector("#sgc-grade").value.trim(),L=k===""?0:parseFloat(k);if(!Number.isFinite(L)||L<0||d!=null&&L>d){b(`คะแนนต้องอยู่ระหว่าง 0 – ${d??n.max_score}`,"warning");return}v.disabled=!0;try{const E=await xn(e.id,i.id,L);c.hasScore=!0,c.savedScore=L;const me=se[i.id]??(se[i.id]=[]);let Be=me.find(Os=>Os.score_column_id===E.columnId);Be||(Be={student_id:i.id,score_column_id:E.columnId},me.push(Be)),Object.assign(Be,{score:E.score,original_score:E.originalScore,retake_score:E.retakeScore,final_score:E.finalScore,score_history:E.scoreHistory}),Bn(E);const Bt=document.getElementById("sc-roster");Bt&&(Bt.innerHTML=je()),b("บันทึกคะแนนแล้ว ✅","success"),o()}catch(E){b("บันทึกไม่สำเร็จ: "+M(E),"error"),v.disabled=!1}};(oe=r.querySelector("#sgc-grade-save"))==null||oe.addEventListener("click",w),(Ae=r.querySelector("#sgc-grade"))==null||Ae.addEventListener("change",w),r.querySelectorAll(".sgc-tmpl").forEach(v=>v.addEventListener("click",()=>{const[k,L]=v.dataset.tmpl.split("-"),E=r.querySelector("#sgc-feedback");E.value=We[k][parseInt(L,10)],E.focus()})),(_e=r.querySelector("#sgc-feedback-save"))==null||_e.addEventListener("click",async()=>{const v=r.querySelector("#sgc-feedback-save"),k=r.querySelector("#sgc-feedback").value.trim();v.disabled=!0;try{await pn(e.id,i.id,k),c.teacher_feedback=k,b("บันทึกคอมเมนต์แล้ว ✅","success")}catch(L){b("บันทึกไม่สำเร็จ: "+M(L),"error")}finally{v.disabled=!1}}),(h=r.querySelector("#sgc-reject"))==null||h.addEventListener("click",async()=>{const v=r.querySelector("#sgc-feedback").value.trim();if(!v){b("กรอกเหตุผลในช่องคอมเมนต์ก่อนตีกลับงาน","warning"),r.querySelector("#sgc-feedback").focus();return}if(!confirm(`ตีกลับงานของ "${i.full_name}" ให้แก้ไขใหม่?

เหตุผล: ${v}`))return;const k=r.querySelector("#sgc-reject");k.disabled=!0;try{await mn(e.id,i.id,v),c.status="rejected",c.teacher_feedback=v,b("ตีกลับงานแล้ว — นักเรียนจะเห็นเหตุผลนี้และส่งใหม่ได้","success"),o()}catch(L){b("ตีกลับไม่สำเร็จ: "+M(L),"error"),k.disabled=!1}})},p=()=>{var i,c;r.remove(),(c=(i=document.getElementById("sc-track-modal"))==null?void 0:i._refresh)==null||c.call(i)};r.addEventListener("click",i=>{i.target===r&&p()}),o()}}export{Zn as canUseSmartClassroomForClass,Jn as findCurrentOrNextClass,Ia as openSmartClassroomLanding,xe as renderSmartClassroom,ns as resolveSmartClassroomAccess};
