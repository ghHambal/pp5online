const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-CWYJTdOa.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/tutorial-D2C4vUJE.js","assets/teacher-views-utils-bZoYj54P.js","assets/ui-MMtcTwtt.js","assets/teacher-views-donor-chat-DuEU7Pt_.js","assets/storage-CuUjCgvI.js","assets/teacher-Cbd3fiuS.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sync-CtuAgrx7.js","assets/theme-qDnPEUQn.js","assets/azfutsal-modal-CITqdeT7.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CAl1Kmx3.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-d_408eQI.js","assets/sports-portals.js_v_10.22-7yFaQki7.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-JnlABjxU.js","assets/teacher-views-classes-DgW_t4uH.js","assets/pp5-doc-WG5YzWe3.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-grades-CXFdJBGK.js","assets/score-qr-scanner-CfDHgG4i.js","assets/teacher-views-attendance-DkKZdoEb.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-certificates-Dla4IuOS.js","assets/certificate-engine-BrPYUHds.js","assets/certificate-editor-DpGkilqh.js","assets/student-views-BkdO1EKt.js","assets/student-api-BkkkCebX.js","assets/quiz-api-BIDUVPR5.js"])))=>i.map(i=>d[i]);
import{a as T,g as ae,_ as se,d as qt,i as Qa,s as Zt,b as Re,j as St,k as ea,l as Lt}from"./ui-MMtcTwtt.js";import{getExecClassOverview as Xa,getDepartments as Be,getSystemConfig as pe,getTeachers as ge,getLeavePermissionDashboard as Za,getPendingSubjectGroupRequests as ta,getAllAppFeedback as aa,getAllPaymentRequests as Ee,deleteTeacher as en,getMasterSubjects as st,deleteSubject as tn,deleteDepartment as an,deletePeriod as nn,updateTeacher as sn,createTeacher as rn,updateDepartment as on,createDepartment as ln,upsertPeriod as dn,upsertHoliday as cn,deleteHoliday as pn,getPeriods as un,getCurriculumStandards as mn,updateCurriculumStandard as gn,createCurriculumStandard as xn,importCurriculumStandards as bn,deleteCurriculumStandard as yn,getClasses as rt,createSubject as fn,updateSystemConfig as oe,deleteClass as na,getUniqueRooms as hn,getUniqueReligionRooms as sa,deleteHomeroomTeacher as vn,getHomeroomTeachers as ft,getStudents as Ne,deleteStudent as wn,updateStudent as $n,getClassrooms as Mt,getScoreColumnConfig as _n,upsertScoreColumnConfig as kn,getReligionGroups as Ae,getSchoolHolidaysFull as En,updateClassroom as Sn,createClassroom as Ln,getLifeSkillColumns as In,getReadingScoreColumns as Cn,getHouseGroups as Bn,updateTeacherPosition as ht,deleteReligionGroup as Tn,updateReligionGroup as jn,createReligionGroup as An,getReligionGroupMembers as qn,getClassroomLeaders as Mn,deleteClassroom as Dn,fillLifeSkillScoresToClassScores as Hn,fillPrayerScoresToReligionClassScores as Rn,assignStudentsHouseColor as Dt,setReligionGroupMembers as Pn,getAllReadingScores as Nn,deleteReadingScoreColumn as On,updateAllClassroomCertsToggle as Fn,getAllLifeSkillScores as zn,deleteLifeSkillColumn as Un,updateReadingScoreColumn as Gn,createReadingScoreColumn as Vn,getStudentsByReligionRoom as Wn,getPrayerRecordsByRoom as Yn,getStudentByCode as Ht,updateClassroomLeaders as Kn,updateLifeSkillColumn as Jn,createLifeSkillColumn as Qn,autoEnrollStudentsByRoom as Xn,getTeachersWithPositions as Zn,startNewSemester as es,getScheduleTeacherIds as ts,mergeTeacherAccounts as as,unlinkTeacherAccount as ns,getStats as ss,getAllCouncilRepNominations as rs,getRolePermissions as os,saveRolePermission as ls,getAllAnnouncements as ra,getUsageStats as ds,reviewPaymentRequest as Ke,approveTeacherQuota as dt,getAllSubjectGroupRequests as is,setFeedbackRead as Rt,setFeedbackCategory as cs,deleteAppFeedback as ps,advisorResetStudentPassword as us,markStudentPasswordResetNotice as ms,setFeedbackStatusReply as Pt,updateAnnouncement as it,createAnnouncement as ct,getAnnouncementCommentsBulk as gs,deleteAnnouncement as xs,getPaymentSlipViewUrl as bs,getPrayerMonitoringData as ys,getLifeSkillMonitoringData as fs,getReadingMonitoringData as hs,getCandidateClassesForGroupRequest as vs,approveSubjectGroupRequest as ws,rejectSubjectGroupRequest as $s,notifyFeedbackReply as _s,getAnnouncementComments as ks,deleteAnnouncementComment as Es,assignHomeroomTeacher as oa,savePrayerCellAdmin as Ss}from"./api-CWYJTdOa.js";import{r as Ls}from"./leave-monitor.js_v_10.18-DU3VpOVf.js";import{s as le}from"./supabase-BV-W2lsh.js";import{DEFAULT_SUBJECT_SYNC_COLUMNS as pt,DEFAULT_SUBJECT_SYNC_KEY_FIELD as Nt,DEFAULT_SUBJECT_SYNC_TAB as ut,DEFAULT_SUBJECT_SYNC_SHEET_ID as Is,SUBJECT_SYNC_COLUMNS as Ot,syncSubjectCatalog as Cs,COPY_TEMPLATE_CONFIG as Bs,syncStudentsFromSheetNow as Ts}from"./sync-CtuAgrx7.js";import{o as la}from"./print-overlay-BVfxEd6n.js";import{_dateInputValue as js,applyReadingGradesFromConfig as Ft,_readingGrade as da,READING_GRADES as De,_htmlEsc as he}from"./teacher-views-utils-bZoYj54P.js";import{r as As,a as qs,b as Ms,c as ia,d as Ds}from"./teacher-views-classes-DgW_t4uH.js";import{renderCourseForm as Hs}from"./teacher-views-B31NLFxx.js";import"./browser-JP79f-a9.js";import{uploadTeacherPhoto as Rs,uploadDeptAsset as zt,uploadAnnouncementImage as ca,compressImage as Ps,uploadStickerPng as Ns,uploadSystemAsset as Os}from"./storage-CuUjCgvI.js";import"./teacher-views-grades-CXFdJBGK.js";import{n as Ut,d as Fs,s as zs,a as Us,W as Gs}from"./workload-scheduler-C9WpzjbH.js";import{i as Vs,a as Ws,p as Ys,b as Ks}from"./import-DZhJ-DY2.js";import{a as pa}from"./theme-qDnPEUQn.js";import{f as Js}from"./leave-time-CrS9gT63.js";import{a as Qs,A as Xs,o as Zs}from"./azfutsal-modal-CITqdeT7.js";import{b as er}from"./anti-pull-refresh-BGrI1pMY.js";import{o as tr}from"./azizgames-modal-d_408eQI.js";import{renderShirtVoteDashboard as ar,renderShirtVoteSettings as nr,renderSportsEvaluationWorkspace as sr,renderSportsOverviewAdmin as rr,renderSportsFundAdmin as or,renderShirtSummary as lr}from"./sports-portals.js_v_10.22-0gLUuL_V.js";function Ge(e){if(!e||e.schemaVersion!==1||typeof e.enabled!="boolean"||!Array.isArray(e.periods))throw new Error("รูปแบบตารางเวลาไม่ถูกต้อง");if(e.periods.length>30)throw new Error("เพิ่มช่วงวันที่ได้ไม่เกิน 30 ช่วง");const s=n=>/^\d{4}-\d{2}-\d{2}$/.test(n)&&!Number.isNaN(Date.parse(n))&&new Date(n).toISOString().slice(0,10)===n;for(const n of e.periods){if(!s(n.startDate)||!s(n.endDate)||n.startDate>n.endDate)throw new Error("กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง");if(!Array.isArray(n.days)||n.days.length!==7)throw new Error("ต้องกำหนดเวลาครบทั้ง 7 วัน");for(const r of n.days){if(typeof r.enabled!="boolean")throw new Error("สถานะวันไม่ถูกต้อง");if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(r.start)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(r.end)||r.start>=r.end)throw new Error("เวลาเริ่มต้องก่อนเวลาสิ้นสุดภายในวันเดียวกัน")}}if(e.guardrail!==void 0){if(!e.guardrail||typeof e.guardrail!="object")throw new Error("รูปแบบ downscale guardrail ไม่ถูกต้อง");const n=["minimumMediumHoldMinutes","healthyStreakRequired","recoveryLockMinutes"];for(const r of n)if(e.guardrail[r]!==void 0&&!Number.isFinite(Number(e.guardrail[r])))throw new Error(`ค่า guardrail ${r} ไม่ถูกต้อง`)}if(e.enabled&&!e.periods.some(n=>n.days.some(r=>r.enabled)))throw new Error("กรุณากำหนดอย่างน้อยหนึ่งวันก่อนเปิดใช้งาน");return e}function dr(e,s=new Date){if(Ge(e),!e.enabled)return null;const n=new Date(s.getTime()+7*60*60*1e3),r=n.toISOString().slice(0,10),c=n.toISOString().slice(11,16),i=n.getUTCDay();return e.periods.some(w=>r>=w.startDate&&r<=w.endDate&&w.days[i].enabled&&c>=w.days[i].start&&c<w.days[i].end)?"ci_medium":"ci_micro"}const Gt=()=>({schemaVersion:1,enabled:!1,periods:[]}),mt={minimumMediumHoldMinutes:60,healthyStreakRequired:3,recoveryLockMinutes:60};function Je(e={}){const s=(n,r,c,i)=>{const w=Number(n);return Number.isFinite(w)?Math.max(c,Math.min(i,w)):r};return{minimumMediumHoldMinutes:s(e.minimumMediumHoldMinutes,mt.minimumMediumHoldMinutes,0,24*60),healthyStreakRequired:Math.round(s(e.healthyStreakRequired,mt.healthyStreakRequired,1,12)),recoveryLockMinutes:s(e.recoveryLockMinutes,mt.recoveryLockMinutes,0,24*60)}}const Vt={ci_micro:.01344,ci_medium:.0822};function ir(e,s){Ge({...e,enabled:!1});const n=new Date(`${s}T00:00:00Z`);if(Number.isNaN(n.getTime())||n.toISOString().slice(0,10)!==s)throw new Error("วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง");const r=a=>{const h=a.toISOString().slice(0,10),y=b=>Number(b.slice(0,2))*60+Number(b.slice(3)),t=e.periods.filter(b=>h>=b.startDate&&h<=b.endDate&&b.days[a.getUTCDay()].enabled).map(b=>b.days[a.getUTCDay()]).map(b=>[y(b.start),y(b.end)]).sort((b,$)=>b[0]-$[0]);let d=0,p=0;for(const[b,$]of t)p+=Math.max(0,$-Math.max(b,d)),d=Math.max(d,$);const l=p/60;return{mediumHours:l,usd:l*Vt.ci_medium+(24-l)*Vt.ci_micro}},c=(a,h)=>{let y=0,t=0;for(let d=0;d<h;d++){const p=r(new Date(a.getTime()+d*864e5));y+=p.usd,t+=p.mediumHours}return{usd:y,mediumHours:t,days:h}},i=new Date(n.getTime()-(n.getUTCDay()+6)%7*864e5),w=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1));return{day:c(n,1),week:c(i,7),month:c(w,new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0)).getUTCDate())}}const Qe=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],Wt=e=>`border rounded-xl px-4 py-2 min-w-[180px] text-left shadow-sm transition ${e?"bg-green-700 border-green-700 text-white hover:bg-green-800":"bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"}`,Yt=e=>`<span class="block font-semibold">${e?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"}</span><span class="block text-xs mt-1">${e?"กดเพื่อปิดวันนี้":"กดเพื่อเปิดวันนี้"}</span>`,ie=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),cr=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],gt=[{key:"prayer",label:"🙏 ละหมาด",description:"ควบคุมช่วง polling และจอแสดงผลการเช็คชื่อละหมาด",features:["prayer_monitor"]},{key:"leave",label:"🚪 ออกนอกห้องเรียน",description:"ควบคุมจอติดตามนักเรียนออกนอกห้องเรียน",features:["leave_monitor"]},{key:"sports",label:"🏅 กีฬาสี",description:"ควบคุมจอสด scoreboard และคิว live ของกีฬาสี",features:["azizgames","azfutsal"]}],pr=(e,s)=>{const n=Gs[e],r=s.features[e],c=Us(e,new Date,s),i=c.nextTransitionAt?new Date(c.nextTransitionAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"}):"—";return`<section class="border rounded-2xl p-4" data-workload-feature="${e}">
    <div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-bold">${n.label}</h3><p class="text-xs text-gray-500">${n.description}</p></div><div class="text-right text-xs"><div class="font-bold">${c.status}</div><div class="text-gray-500">เปลี่ยนถัดไป: ${ie(i)}</div></div></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Mode<select name="mode" class="block border rounded-lg p-2 w-full mt-1"><option ${r.mode==="AUTO"?"selected":""}>AUTO</option><option ${r.mode==="ON"?"selected":""}>ON</option><option ${r.mode==="OFF"?"selected":""}>OFF</option></select></label>
      ${n.dateRange?`<label class="text-sm">วันที่เริ่ม<input name="dateFrom" type="date" value="${ie(r.dateFrom||"")}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input name="dateTo" type="date" value="${ie(r.dateTo||"")}" class="block border rounded-lg p-2 w-full mt-1"></label>`:"<span></span><span></span>"}
      <div class="grid grid-cols-2 gap-2"><label class="text-sm">เริ่ม<input name="start" type="time" value="${ie(r.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">สิ้นสุด<input name="end" type="time" value="${ie(r.end)}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3"><label class="text-sm">Buffer ก่อน (นาที)<input name="bufferBefore" type="number" min="0" max="1440" value="${r.bufferBefore}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Buffer หลัง (นาที)<input name="bufferAfter" type="number" min="0" max="1440" value="${r.bufferAfter}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    <div class="flex flex-wrap gap-2 mt-3">${r.days.map((w,a)=>`<label class="inline-flex items-center gap-1 text-xs border rounded-lg px-2 py-1"><input type="checkbox" name="day-${a}" ${w?"checked":""}>${cr[a]}</label>`).join("")}</div>
  </section>`};async function vt(){document.querySelectorAll("[data-nav]").forEach(a=>{a.classList.toggle("bg-indigo-800",a.dataset.nav==="autoscale-settings"),a.classList.toggle("text-white",a.dataset.nav==="autoscale-settings"),a.classList.toggle("text-indigo-200",a.dataset.nav!=="autoscale-settings")}),document.getElementById("page-title").textContent="ตั้งค่ากำลังเครื่องฐานข้อมูล";const e=document.getElementById("main-content");e.innerHTML='<p class="p-6">กำลังโหลดตารางเวลา...</p>';let s,n,r={},c=new Date(Date.now()+7*36e5).toISOString().slice(0,10),i="overview";try{const{data:a,error:h}=await le.from("system_config").select("key,value,updated_at").in("key",["autoscaleSchedule","autoscaleState","workloadSchedule"]);if(h)throw h;const y=a.find(p=>p.key==="autoscaleSchedule");s=y?{...Ge(JSON.parse(y.value)),guardrail:Je(JSON.parse(y.value).guardrail)}:{...Gt(),guardrail:Je()};const t=a.find(p=>p.key==="autoscaleState");r=t?{...JSON.parse(t.value),updatedAt:t.updated_at}:{};const d=a.find(p=>p.key==="workloadSchedule");n=Ut(d!=null&&d.value?JSON.parse(d.value):Fs())}catch(a){e.innerHTML=`<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${ie(a.message)}</p>`;return}const w=()=>{let a="ยังไม่บันทึก / กรุณาตรวจตารางเวลา";try{a=s.enabled?dr(s)==="ci_medium"?"Medium":"Micro":"คงระดับเดิม"}catch{}e.innerHTML=`<div class="space-y-5 animate-fade">
      <div role="tablist" aria-label="กลุ่มการตั้งค่ากำลังเครื่อง" class="bg-white border rounded-2xl p-2 shadow-sm flex flex-wrap gap-2">
        <button type="button" role="tab" data-autoscale-tab="overview" aria-controls="autoscale-panel-overview" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">📊 ภาพรวม</button>
        <button type="button" role="tab" data-autoscale-tab="schedule" aria-controls="as-form" class="flex-1 min-w-[190px] rounded-xl px-4 py-3 text-sm font-bold transition">🗓️ ตารางปรับกำลังเครื่อง</button>
        ${gt.map(l=>`<button type="button" role="tab" data-autoscale-tab="${l.key}" aria-controls="autoscale-panel-${l.key}" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">${l.label}</button>`).join("")}
      </div>
      <div id="autoscale-panel-overview" data-autoscale-panel="overview" role="tabpanel" class="space-y-5">
      <div class="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>
        ${r.mode!=="schedule"?'<p class="mt-3 text-red-700">ยังไม่พบ backend ตารางเวลารุ่นใหม่ ต้องรัน patch_autoscale_schedule.sql และ deploy autoscale-tick ก่อนเปิดใช้งาน (push หน้าเว็บอย่างเดียวไม่เปลี่ยนระบบเดิม)</p>':""}
        <p class="text-sm text-gray-600 mt-2">กำลังเครื่องใช้ร่วมกันทั้งโรงเรียน ในช่วงที่กำหนดใช้ Medium นอกช่วงใช้ Micro ไม่ปรับตาม health check อีก</p>
        <p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับเดิม ไม่ใช่ปิดฐานข้อมูล การปรับอาจใช้เวลาหลายนาทีและทำให้การบันทึกสะดุด ควรเผื่อเวลาก่อนเริ่ม/หลังเลิกงาน</p>
        <div class="mt-4 border rounded-xl p-4 ${s.enabled?"bg-green-50 border-green-300 text-green-900":"bg-gray-100 border-gray-300 text-gray-800"}"><p class="text-lg font-bold">สถานะตารางที่แสดง: ${s.enabled?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"}</p><p class="text-sm mt-1">เป้าหมายตามเวลาตอนนี้: ${a}</p></div>
        <p class="text-xs text-gray-500 mt-2">ระดับที่ระบบตรวจพบล่าสุด: ${ie(r.currentTier||"ยังไม่มีข้อมูลใหม่")} · ตรวจล่าสุด: ${r.updatedAt?ie(new Date(r.updatedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"—"}</p>
        <p class="text-xs text-gray-500 mt-1">${ie(r.lastAction||"ยังไม่มีการปรับ")} ${r.lastError?"· "+ie(r.lastError):""}</p>
        <p class="text-xs text-gray-500 mt-1">สถานะงาน: ${ie(r.status||"—")} · คำสั่งที่รอยืนยัน: ${ie(r.pendingTier||"ไม่มี")} · เว้นคำสั่งถึง: ${r.nextResizeAllowedAt?ie(new Date(r.nextResizeAllowedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"—"}</p>
        <p class="text-xs text-gray-500 mt-1">Guardrail: hold ${s.guardrail.minimumMediumHoldMinutes} นาที · healthy streak ${s.guardrail.healthyStreakRequired} รอบ · recovery lock ${s.guardrail.recoveryLockMinutes} นาที</p>
        <div class="flex flex-wrap gap-3 mt-4"><button id="as-enable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-green-700 border-green-700 text-white shadow-sm":"bg-white border-green-700 text-green-800"}">เปิดใช้งาน${s.enabled?" ✓":""}</button><button id="as-disable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-white border-gray-300 text-gray-700":"bg-gray-700 border-gray-700 text-white shadow-sm"}">ปิดใช้งาน${s.enabled?"":" ✓"}</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div>
      </div>
      <div class="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 class="font-bold">💰 ประมาณค่า Compute ตามตารางเมื่อเปิดใช้งาน</h2>
        <label class="block text-sm mt-3">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${c}" class="border rounded-lg p-2"></label>
        <div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div>
        <p class="text-xs text-gray-500 mt-3">รายวัน = วันที่เลือก · รายสัปดาห์ = จันทร์–อาทิตย์ของวันที่เลือก · รายเดือน = เดือนปฏิทินของวันที่เลือก คำนวณช่วงซ้อนกันครั้งเดียว</p>
        <p class="text-xs text-gray-500 mt-2">Micro $0.01344/ชั่วโมง · Medium $0.0822/ชั่วโมง (USD ตรวจราคา 13 ก.ย. 2026) ก่อนหักเครดิต ไม่รวมแพ็กเกจ ภาษี ดิสก์ และค่าใช้งานอื่น เป็นประมาณตามตาราง ไม่ใช่ยอดบิลจริง และไม่รวมความคลาดเคลื่อนจากรอบตรวจ/ระยะปรับเครื่อง <a class="underline" href="https://supabase.com/docs/guides/platform/compute-and-disk" target="_blank" rel="noopener noreferrer">ราคาจาก Supabase</a></p>
      </div>
      </div>
      <form id="as-form" data-autoscale-panel="schedule" role="tabpanel" aria-labelledby="autoscale-tab-schedule" class="space-y-4">
        <section class="border rounded-2xl p-4 bg-amber-50"><h3 class="font-bold">🛡️ Downscale Guardrail</h3><p class="text-xs text-gray-600 mt-1">Schedule เป็นเพียง candidate; ระบบจะคง Medium หาก hold, health streak, recovery หรือ health state ยังไม่ปลอดภัย</p><div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3"><label class="text-sm">Minimum Medium Hold (นาที)<input name="minimumMediumHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumMediumHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Healthy streak (รอบ)<input name="healthyStreakRequired" type="number" min="1" max="12" value="${s.guardrail.healthyStreakRequired}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Recovery lock (นาที)<input name="recoveryLockMinutes" type="number" min="0" max="1440" value="${s.guardrail.recoveryLockMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label></div></section>
        <div id="as-periods" class="space-y-4">${s.periods.map((l,b)=>`<section class="bg-white border rounded-2xl p-5 shadow-sm" data-period="${b}">
          <div class="flex flex-wrap gap-3 items-end"><label>วันที่เริ่ม<input required type="date" name="startDate" value="${ie(l.startDate)}" class="block border rounded-lg p-2"></label><label>วันที่สิ้นสุด<input required type="date" name="endDate" value="${ie(l.endDate)}" class="block border rounded-lg p-2"></label><button type="button" data-remove="${b}" class="text-red-600 border rounded-lg p-2">ลบช่วงนี้</button></div>
          <div class="mt-4 space-y-2">${l.days.map(($,C)=>`<div class="flex flex-wrap gap-3 items-center" data-day="${C}" data-enabled="${$.enabled}"><span class="w-20 font-medium">${Qe[C]}</span><button type="button" data-day-action class="${Wt($.enabled)}">${Yt($.enabled)}</button><input aria-label="เวลาเริ่ม${Qe[C]}" type="time" required name="start" value="${ie($.start)}" class="border rounded-lg p-2"><span>ถึง</span><input aria-label="เวลาสิ้นสุด${Qe[C]}" type="time" required name="end" value="${ie($.end)}" class="border rounded-lg p-2"></div>`).join("")}</div>
        </section>`).join("")}</div>
        <p class="text-sm text-gray-500">เพิ่มได้หลายช่วงวันที่ ช่วงซ้อนกันจะใช้ Medium หากตรงกับช่วงใดช่วงหนึ่ง เวลาต้องเริ่มและสิ้นสุดภายในวันเดียวกัน</p>
        <div class="flex gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงวันที่</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div>
        <p class="text-xs text-gray-500">การตั้งค่าจะมีผลในรอบตรวจถัดไป (ปกติทุก 5 นาที) ไม่สั่งปรับเครื่องจากหน้านี้โดยตรง</p>
      </form>
      ${gt.map(l=>`<section id="autoscale-panel-${l.key}" data-autoscale-panel="${l.key}" role="tabpanel" aria-labelledby="autoscale-tab-${l.key}" class="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 class="font-bold text-lg">${l.label}</h2>
        <p class="text-sm text-gray-600 mt-2">${l.description} · AUTO ใช้ตาราง, ON บังคับเปิด, OFF บังคับปิด</p>
        <div class="space-y-4 mt-4">${l.features.map(b=>pr(b,n)).join("")}</div>
      </section>`).join("")}
      <div data-autoscale-workload-actions class="hidden flex gap-3 bg-white border rounded-2xl p-4 shadow-sm">
        <button type="button" id="workload-save" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกการตั้งค่า Workload ทั้งหมด</button>
        <button type="button" id="workload-refresh" class="border rounded-xl px-4 py-2">รีเฟรช Workload</button>
        <p class="self-center text-xs text-gray-500">บันทึกครั้งเดียว ครอบคลุมการตั้งค่า Workload ทุกแท็บ</p>
      </div>
    </div>`;const h=l=>{i=l,e.querySelectorAll("[data-autoscale-tab]").forEach($=>{const C=$.dataset.autoscaleTab===i;$.setAttribute("aria-selected",String(C)),$.classList.toggle("bg-indigo-700",C),$.classList.toggle("text-white",C),$.classList.toggle("shadow-sm",C),$.classList.toggle("bg-gray-100",!C),$.classList.toggle("text-gray-700",!C)}),e.querySelectorAll("[data-autoscale-panel]").forEach($=>{$.classList.toggle("hidden",$.dataset.autoscalePanel!==i)});const b=gt.some($=>$.key===i);e.querySelectorAll("[data-autoscale-workload-actions]").forEach($=>{$.classList.toggle("hidden",!b)})};e.querySelectorAll("[data-autoscale-tab]").forEach(l=>{l.id=`autoscale-tab-${l.dataset.autoscaleTab}`,l.onclick=()=>h(l.dataset.autoscaleTab)}),h(i);const y=()=>{var l,b,$;return{schemaVersion:1,enabled:s.enabled,guardrail:{minimumMediumHoldMinutes:Number(((l=e.querySelector("[name=minimumMediumHoldMinutes]"))==null?void 0:l.value)||s.guardrail.minimumMediumHoldMinutes),healthyStreakRequired:Number(((b=e.querySelector("[name=healthyStreakRequired]"))==null?void 0:b.value)||s.guardrail.healthyStreakRequired),recoveryLockMinutes:Number((($=e.querySelector("[name=recoveryLockMinutes]"))==null?void 0:$.value)||s.guardrail.recoveryLockMinutes)},periods:[...e.querySelectorAll("[data-period]")].map(C=>({startDate:C.querySelector("[name=startDate]").value,endDate:C.querySelector("[name=endDate]").value,days:[...C.querySelectorAll("[data-day]")].map(x=>({enabled:x.dataset.enabled==="true",start:x.querySelector("[name=start]").value,end:x.querySelector("[name=end]").value}))}))}},t=()=>({schemaVersion:1,timezone:"Asia/Bangkok",features:Object.fromEntries([...e.querySelectorAll("[data-workload-feature]")].map(l=>{var b,$;return[l.dataset.workloadFeature,{mode:l.querySelector("[name=mode]").value,dateFrom:((b=l.querySelector("[name=dateFrom]"))==null?void 0:b.value)||null,dateTo:(($=l.querySelector("[name=dateTo]"))==null?void 0:$.value)||null,start:l.querySelector("[name=start]").value,end:l.querySelector("[name=end]").value,bufferBefore:Number(l.querySelector("[name=bufferBefore]").value||0),bufferAfter:Number(l.querySelector("[name=bufferAfter]").value||0),days:[...l.querySelectorAll("input[type=checkbox][name^=day-]")].map(C=>C.checked)}]}))}),d=()=>{try{const l=ir(y(),c);e.querySelector("#as-cost-tags").innerHTML=[["day","รายวัน"],["week","รายสัปดาห์"],["month","รายเดือน"]].map(([b,$])=>`<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${$} (${l[b].days} วัน)</span><strong>$${l[b].usd.toFixed(2)}</strong><span class="block text-xs">Medium ${l[b].mediumHours.toFixed(1)} ชั่วโมง</span></span>`).join("")}catch{e.querySelector("#as-cost-tags").textContent="กรุณากรอกวันที่และเวลาให้ครบเพื่อคำนวณ"}};e.querySelector("#as-cost-date").onchange=l=>{c=l.target.value,d()},e.querySelector("#as-form").addEventListener("input",d),d();const p=async l=>{try{let b=y();if(l===!1){const{data:C,error:x}=await le.from("system_config").select("value").eq("key","autoscaleSchedule").maybeSingle();if(x)throw x;b=C?{...Ge(JSON.parse(C.value)),guardrail:Je(JSON.parse(C.value).guardrail)}:{...Gt(),guardrail:Je()}}if(l!==void 0&&(b.enabled=l),b.enabled&&r.mode!=="schedule")throw new Error("กรุณาติดตั้ง SQL และ Edge Function รุ่นใหม่ก่อนเปิดใช้งาน");Ge(b),e.querySelectorAll("button").forEach(C=>C.disabled=!0);const{error:$}=await le.from("system_config").upsert({key:"autoscaleSchedule",value:JSON.stringify(b),updated_at:new Date().toISOString()},{onConflict:"key"});if($)throw $;s=b,w(),T("บันทึกแล้ว มีผลในรอบตรวจถัดไป","success")}catch(b){T(ie(b.message),"error"),e.querySelectorAll("button").forEach($=>$.disabled=!1)}};e.querySelector("#as-form").onsubmit=l=>{l.preventDefault(),p()},e.querySelector("#as-enable").onclick=()=>p(!0),e.querySelector("#as-disable").onclick=()=>p(!1),e.querySelector("#as-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&vt()},e.querySelector("#as-add").onclick=()=>{if(s=y(),s.periods.length>=30){T("เพิ่มได้ไม่เกิน 30 ช่วง","warning");return}const l=new Date(Date.now()+7*36e5).toISOString().slice(0,10);s.periods.push({startDate:l,endDate:l,days:Qe.map(()=>({enabled:!0,start:"07:00",end:"19:00"}))}),w()},e.querySelectorAll("[data-remove]").forEach(l=>l.onclick=()=>{s=y(),s.periods.splice(Number(l.dataset.remove),1),w()}),e.querySelectorAll("[data-day-action]").forEach(l=>l.onclick=()=>{const b=l.closest("[data-day]");b.dataset.enabled=b.dataset.enabled==="true"?"false":"true";const $=b.dataset.enabled==="true";l.className=Wt($),l.innerHTML=Yt($),d()}),e.querySelector("#workload-save").onclick=async()=>{try{e.querySelectorAll("button").forEach(l=>{l.disabled=!0}),n=Ut(t()),await zs(n),T("บันทึก Workload Control แล้ว","success"),w()}catch(l){T(ie(l.message),"error"),e.querySelectorAll("button").forEach(b=>{b.disabled=!1})}},e.querySelector("#workload-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&vt()}};w()}const ue=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ur(e){document.querySelectorAll("[data-nav]").forEach(s=>{const n=s.dataset.nav===e;s.classList.toggle("bg-indigo-800",n),s.classList.toggle("text-white",n),s.classList.toggle("text-indigo-200",!n)})}function xt(e){document.getElementById("main-content").innerHTML=e}const ua={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},mr={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},gr={doc:"📋",dates:"📅",att:"✅",score:"📝"},xr={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function Ue(e,s,n,r="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${r} rounded-lg ${mr[n]}" title="${s}">${e}</span>`}function Ie(e,s,n="w-8 h-8 text-base"){return Ue(gr[e],`${xr[e]}: ${ua[s]}`,s,n)}const br={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function yr(e){return["AGM","AGMVOC"].includes(e)?"ศาสนา":e==="ACDMVOC"?"สามัญปวช":"สามัญ"}function fr(e,s){const n=yr(e.subject_group);return s.find(r=>r.dept_code===e.dept&&r.category===n)??s.find(r=>r.dept_code===e.dept)??s.find(r=>r.dept_name===e.dept)??null}function hr(e,s){return e.dept?s.find(n=>n.dept_code===e.dept&&n.category===e.category)??s.find(n=>n.dept_code===e.dept)??null:null}function vr(e,s){return Math.round((new Date(e)-new Date(s))/864e5)}function wr(e,s){const n=e.has_doc_rows?"green":"red",r=e.has_teaching_dates?"green":"red";let c;if(!e.has_teaching_dates||e.day1_date&&e.day1_date>s)c="gray";else if(!e.last_check_date)c="red";else{const w=vr(s,e.last_check_date);c=w<=7?"green":w<=14?"yellow":"red"}let i;if(!e.score_col_count)i="gray";else{const w=e.student_count*e.score_col_count,a=w>0?e.score_filled_count/w:0;i=a>=.8?"green":a>0?"yellow":"red"}return{doc:n,dates:r,att:c,score:i}}function Fe(e){const s=e.filter(n=>n!=="gray");return s.length===0?"gray":s.includes("red")?"red":s.includes("yellow")?"yellow":"green"}function bt(e){return Object.values(e).some(s=>s==="red"||s==="yellow")}async function $r(){var G,K;ur("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",xt(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let e,s,n,r,c;try{[e,s,n,r,c]=await Promise.all([Xa(),Be(),pe().catch(()=>({})),ge(),Za(60).catch(()=>null)])}catch(D){xt(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${ue(ae(D))}</p>
    </div>`);return}const i=n.academicYear??n.academic_year??"",w=n.semester??"",a=new Date().toISOString().slice(0,10),h=e.filter(D=>D.subject_id!=null).map(D=>{const z=fr(D,s);return{...D,deptKey:(z==null?void 0:z.id)!=null?`d${z.id}`:`u_${D.dept??"-"}`,deptName:(z==null?void 0:z.dept_name)??D.dept??"ไม่ระบุกลุ่มสาระ",status:wr(D,a)}}),y=new Map;for(const D of h)y.has(D.deptKey)||y.set(D.deptKey,{deptName:D.deptName,rows:[]}),y.get(D.deptKey).rows.push(D);const t=[...y.entries()].map(([D,z])=>({key:D,...z})).sort((D,z)=>D.deptName.localeCompare(z.deptName,"th")),d=new Map;for(const D of h)D.teacher_id!=null&&(d.has(D.teacher_id)||d.set(D.teacher_id,[]),d.get(D.teacher_id).push(D));const p=r.filter(D=>D.staff_type==="ครู").map(D=>{const z=d.get(D.id)??[],F=D.profile_id!=null,U=z.length,J=U>0?Fe(z.map(te=>te.status.att)):"gray";let X;if(z[0])X={key:z[0].deptKey,name:z[0].deptName};else{const te=hr(D,s);X=te?{key:`d${te.id}`,name:te.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let V;return F?U===0?V=2:J==="red"?V=1.5:J==="yellow"?V=1:V=0:V=3,{teacherId:D.id,teacherName:D.full_name,deptKey:X.key,deptName:X.name,registered:F,classCount:U,attWorst:J,severity:V}}).sort((D,z)=>z.severity-D.severity||D.teacherName.localeCompare(z.teacherName,"th")),l=p.filter(D=>!D.registered).length,b=p.filter(D=>D.registered&&D.classCount===0).length,$=p.filter(D=>D.registered&&D.classCount>0&&(D.attWorst==="red"||D.attWorst==="yellow")).length,C=p.filter(D=>D.severity>0).length;function x(D){const z=h.filter(X=>X.status[D]!=="gray"),F=z.filter(X=>X.status[D]==="green").length,U=h.length-z.length;return{pct:z.length>0?Math.round(F/z.length*100):null,green:F,total:z.length,grayCount:U}}const _={doc:x("doc"),dates:x("dates"),att:x("att"),score:x("score")},q=p.length,A=p.filter(D=>D.registered).length,I=p.filter(D=>D.registered&&D.classCount>0).length,L=p.filter(D=>D.registered&&D.classCount>0&&D.attWorst==="green").length,E={registered:{pct:q>0?Math.round(A/q*100):null,num:A,total:q},courses:{pct:A>0?Math.round(I/A*100):null,num:I,total:A},attendance:{pct:I>0?Math.round(L/I*100):null,num:L,total:I}},H=h.filter(D=>bt(D.status)).length,k=h.length>0?Math.round(H/h.length*100):0;function m(){if(!c)return"";const D=c.rows||[],z=c.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},F=new Date,U=X=>X.status!=="active"?X.status==="returned"?"กลับแล้ว":"เลยเวลา":Js(X.created_at,X.allowed_duration,F).text,J=D.filter(X=>X.status==="active").slice(0,8);return`
      <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden mb-6">
        <div class="px-5 py-3.5 border-b border-amber-100 bg-amber-50 flex items-center justify-between gap-3">
          <div>
            <h4 class="font-bold text-amber-900 text-sm">🚪 สถานะใบอนุญาตออกนอกห้อง</h4>
            <p class="text-xs text-amber-700/70 mt-0.5">ข้อมูลสัปดาห์ปัจจุบัน</p>
          </div>
          <span class="text-xs text-amber-700 font-bold">รวม ${z.totalWeek} ครั้ง</span>
        </div>
        <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div class="rounded-xl bg-amber-50 border border-amber-100 px-3 py-2">
            <p class="text-[10px] font-bold text-amber-700/70">กำลังอยู่นอกห้อง</p>
            <p class="text-xl font-extrabold text-amber-700">${z.active}</p>
          </div>
          <div class="rounded-xl bg-red-50 border border-red-100 px-3 py-2">
            <p class="text-[10px] font-bold text-red-700/70">เลยเวลา</p>
            <p class="text-xl font-extrabold text-red-700">${z.overdue}</p>
          </div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2">
            <p class="text-[10px] font-bold text-emerald-700/70">กลับแล้ววันนี้</p>
            <p class="text-xl font-extrabold text-emerald-700">${z.returnedToday}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2">
            <p class="text-[10px] font-bold text-indigo-700/70">สัปดาห์นี้</p>
            <p class="text-xl font-extrabold text-indigo-700">${z.totalWeek}</p>
          </div>
        </div>
        ${J.length?`
          <div class="border-t border-gray-50 divide-y divide-gray-50">
            ${J.map(X=>{var V,te,ee,de;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${ue(((V=X.students)==null?void 0:V.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${ue(((te=X.classes)==null?void 0:te.class_name)||((ee=X.students)==null?void 0:ee.main_room)||"—")} · ${ue(X.reason||"—")} · ${ue(((de=X.teachers)==null?void 0:de.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${U(X)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let f=null,g="attention",o="",u=null;const v={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function B(){return t.map(D=>{const z={doc:Fe(D.rows.map(J=>J.status.doc)),dates:Fe(D.rows.map(J=>J.status.dates)),att:Fe(D.rows.map(J=>J.status.att)),score:Fe(D.rows.map(J=>J.status.score))},F=D.rows.filter(J=>bt(J.status)).length,U=f===D.key;return`
        <button type="button" data-dept-key="${D.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${U?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${ue(D.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${D.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${Ie("doc",z.doc)}
            ${Ie("dates",z.dates)}
            ${Ie("att",z.att)}
            ${Ie("score",z.score)}
          </div>
          <p class="text-xs ${F>0?"text-amber-600 font-semibold":"text-emerald-600"}">
            ${F>0?`⚠️ ${F} ห้องต้องตามงาน`:"✅ ปกติทั้งหมด"}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${U?"🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายละเอียด ▸"}</p>
        </button>`}).join("")}function M(){var U;const D=f?(U=t.find(J=>J.key===f))==null?void 0:U.deptName:null,z=g==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${D?`${z} · ${ue(D)}`:`${z} (ทั้งโรงเรียน)`}</h4>
        <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3 flex-wrap">
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-100 border border-emerald-200"></span>ปกติ</span>
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-amber-100 border border-amber-200"></span>เริ่มล่าช้า</span>
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-red-100 border border-red-200"></span>ต้องตามงาน</span>
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-gray-100 border border-gray-200"></span>ยังไม่เริ่ม/ไม่มีข้อมูล</span>
        </p>
      </div>
      <div class="flex items-center gap-2">
        <button id="exec-toggle-scope" type="button"
          class="text-xs font-medium px-2.5 py-1.5 rounded-lg border transition
                 ${g==="all"?"bg-indigo-50 text-indigo-600 border-indigo-200":"bg-white text-gray-500 border-gray-200 hover:border-gray-300"}">
          ${g==="all"?"👁️ ดูทั้งหมด":"⚠️ เฉพาะที่ต้องตามงาน"}
        </button>
        ${f?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function S(){let D=h;return g==="attention"&&(D=D.filter(z=>bt(z.status))),f&&(D=D.filter(z=>z.deptKey===f)),o&&(D=D.filter(z=>(z.class_name??"").toLowerCase().includes(o)||(z.subject_name??"").toLowerCase().includes(o)||(z.teacher_name??"").toLowerCase().includes(o))),D=[...D].sort((z,F)=>{const U=J=>Object.values(J).reduce((X,V)=>X+(V==="red"?2:V==="yellow"?1:0),0);return U(F.status)-U(z.status)}),D.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
      <div class="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table class="w-full text-sm">
          <thead class="sticky top-0 bg-gray-50 text-gray-500 text-xs">
            <tr>
              <th class="px-4 py-2 text-left">วิชา / ห้อง</th>
              <th class="px-4 py-2 text-left">ครูผู้สอน</th>
              <th class="px-4 py-2 text-left">กลุ่มสาระ</th>
              <th class="px-4 py-2 text-center">ปก ปพ.5</th>
              <th class="px-4 py-2 text-center">เช็คชื่อ</th>
              <th class="px-4 py-2 text-center">คะแนน</th>
              <th class="px-4 py-2 text-center">วันที่สอน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${D.map(z=>`
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${ue(z.class_name)}</p>
                  <p class="text-xs text-gray-400">${ue(z.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${ue(z.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${ue(z.deptName)}</td>
                <td class="px-4 py-2 text-center">${Ie("doc",z.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ie("att",z.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ie("score",z.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ie("dates",z.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function j(){let D=p;u==="unregistered"?D=D.filter(U=>!U.registered):u==="no-courses"?D=D.filter(U=>U.registered&&U.classCount===0):u==="att-behind"?D=D.filter(U=>U.registered&&U.classCount>0&&(U.attWorst==="red"||U.attWorst==="yellow")):g==="attention"&&(D=D.filter(U=>U.severity>0)),f&&(D=D.filter(U=>U.deptKey===f)),o&&(D=D.filter(U=>(U.teacherName??"").toLowerCase().includes(o)));const z=u?`${v[u]} (${D.length} คน)`:g==="all"?`ครูผู้สอนทั้งหมด (${D.length}/${p.length} คน)`:`ครูที่ต้องติดตาม (${D.length} คน)`,F=D.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
          <table class="w-full text-sm">
            <thead class="sticky top-0 bg-gray-50 text-gray-500 text-xs">
              <tr>
                <th class="px-4 py-2 text-left">ชื่อครู</th>
                <th class="px-4 py-2 text-left">กลุ่มสาระ</th>
                <th class="px-4 py-2 text-center">ลงทะเบียน</th>
                <th class="px-4 py-2 text-center">วิชา/ห้องสอน</th>
                <th class="px-4 py-2 text-center">เช็คชื่อ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${D.map(U=>`
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${ue(U.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${ue(U.deptName)}</td>
                  <td class="px-4 py-2 text-center">${Ue("🔑",U.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",U.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Ue("📚",U.classCount>0?`มีวิชา/ห้องที่สอน ${U.classCount} ห้อง`:U.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",U.classCount>0?"green":U.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${U.classCount>0?Ue("✅",`เช็คชื่อ: ${ua[U.attWorst]}`,U.attWorst,"w-7 h-7 text-sm"):Ue("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`;return`
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${z}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${u?'<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>':""}
      </div>
      ${F}`}function R({icon:D,label:z,info:F,pct:U,numerator:J,denominator:X,unit:V="ห้อง",extraNote:te="",filterKey:ee=null,active:de=!1}){const be=U==null?"text-gray-400":U>=80?"text-emerald-700":U>=50?"text-amber-600":"text-red-600",ve=ee?"button":"div",Te=ee?' type="button"':"",We=ee?` data-teacher-filter="${ee}"`:"";return`
      <${ve}${Te}${We} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${ee?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${de?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${ue(F)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${D}</div>
          <p class="text-sm font-semibold text-gray-600">${z} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${be}">${U==null?"—":U+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${X>0?`${J}/${X} ${V}`:"ไม่มีข้อมูล"}${te}</p>
        ${ee?`<p class="text-[10px] text-indigo-400 mt-1">${de?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${ve}>`}function N(D,z,F){const U=_[F];return R({icon:D,label:z,info:br[F],pct:U.pct,numerator:U.green,denominator:U.total,unit:"ห้อง",extraNote:U.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${U.grayCount}</span>`:""})}function O(D,z,F,U,J="",X=null){return R({icon:D,label:z,info:F,pct:U.pct,numerator:U.num,denominator:U.total,unit:"คน",extraNote:J,filterKey:X,active:u===X})}function Q(){return`
      ${O("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",E.registered,l>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${l}</span>`:"","unregistered")}
      ${O("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",E.courses,b>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${b}</span>`:"","no-courses")}
      ${O("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",E.attendance,$>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${$}</span>`:"","att-behind")}`}function Y(){var D,z,F;document.querySelectorAll(".exec-dept-card").forEach(U=>{U.addEventListener("click",()=>{var X;const J=U.dataset.deptKey;f===J?(f=null,g="attention"):(f=J,g="all"),P(),(X=document.getElementById("exec-table-section"))==null||X.scrollIntoView({behavior:"smooth",block:"start"})})}),(D=document.getElementById("exec-clear-filter"))==null||D.addEventListener("click",()=>{f=null,g="attention",P()}),(z=document.getElementById("exec-toggle-scope"))==null||z.addEventListener("click",()=>{g=g==="all"?"attention":"all",P()}),document.querySelectorAll("[data-teacher-filter]").forEach(U=>{U.addEventListener("click",()=>{var X;const J=U.dataset.teacherFilter;u=u===J?null:J,f=null,o="",P(),(X=document.getElementById("exec-teacher-section"))==null||X.scrollIntoView({behavior:"smooth",block:"start"})})}),(F=document.getElementById("exec-teacher-clear-filter"))==null||F.addEventListener("click",()=>{u=null,P()})}function P(){document.getElementById("exec-teacher-kpi").innerHTML=Q(),document.getElementById("exec-dept-cards").innerHTML=B(),document.getElementById("exec-table-header").innerHTML=M(),document.getElementById("exec-class-table").innerHTML=S(),document.getElementById("exec-teacher-section").innerHTML=j();const D=document.getElementById("exec-dept-select");D&&(D.value=f??"");const z=document.getElementById("exec-search");z&&(z.value=o),Y()}xt(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${i?`ปีการศึกษา ${ue(i)}`:""}${w?` ภาคเรียนที่ ${ue(w)}`:""}${i||w?" · ":""}ทั้งหมด ${h.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${H>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${H} ห้อง</b> (${k}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${C>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${C} คน</b> ที่ต้องติดตาม
        ${l>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${l}</b> คน`:""}
        ${b>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${b}</b> คน`:""}
        ${$>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${$}</b> คน`:""}
      </p>`:`
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${Q()}
    </div>

    ${m()}

    <h4 class="font-semibold text-gray-700 mb-1">📚 ภาพรวมห้องเรียนทั้งโรง</h4>
    <p class="text-xs text-gray-400 mb-3">สัดส่วนห้องเรียนที่ "ปกติ" ในแต่ละมิติ (ไม่รวมห้องที่ยังไม่เริ่มดำเนินการ)</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      ${N("📋","ปก ปพ.5","doc")}
      ${N("📅","วันที่สอน","dates")}
      ${N("✅","เช็คชื่อ","att")}
      ${N("📝","บันทึกคะแนน","score")}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</h4>
    <p class="text-xs text-gray-400 mb-3">💡 คลิกที่การ์ดเพื่อดูห้องเรียนทั้งหมดในกลุ่มสาระนั้น</p>
    <div id="exec-dept-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      ${B()}
    </div>

    <div class="flex flex-col sm:flex-row gap-3 mb-4">
      <div class="relative flex-1">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">🔍</span>
        <input id="exec-search" type="text" placeholder="ค้นหาชื่อครู / วิชา / ห้องเรียน..."
          class="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-indigo-400" />
      </div>
      <select id="exec-dept-select"
        class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400 sm:w-56">
        <option value="">ทุกกลุ่มสาระ</option>
        ${t.map(D=>`<option value="${D.key}">${ue(D.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${M()}
      </div>
      <div id="exec-class-table">${S()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${j()}
    </div>
  </div>`),(G=document.getElementById("exec-search"))==null||G.addEventListener("input",D=>{o=D.target.value.trim().toLowerCase(),P()}),(K=document.getElementById("exec-dept-select"))==null||K.addEventListener("change",D=>{f=D.target.value||null,g=f?"all":"attention",P()}),Y()}const _r="regrade.html",kr=()=>{const e=new URL(_r,window.location.href);return e.searchParams.set("v",Qs),e.href},tt=(e,s)=>{e&&(e.textContent=s,clearTimeout(e._regradeStatusTimer),e._regradeStatusTimer=setTimeout(()=>{e.textContent=""},1800))},Er=async(e,s)=>{try{await navigator.clipboard.writeText(e),tt(s,"คัดลอกลิงก์แล้ว")}catch{tt(s,"คัดลอกไม่สำเร็จ")}},Sr=async(e,s)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:e});return}await navigator.clipboard.writeText(e),tt(s,"คัดลอกลิงก์แล้ว")}catch{tt(s,"แชร์ไม่สำเร็จ")}};function Lr(){var w,a,h,y;(w=document.getElementById("regrade-modal"))==null||w.remove();const e=kr(),s=document.body.style.overflow;document.body.style.overflow="hidden";const n=document.createElement("div");n.id="regrade-modal",n.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",n.innerHTML=`
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">📋 แก้ค้างเก่า</div>
        <div class="text-[10px] text-slate-400 truncate">เปิดในหน้าต่างเต็มจอของระบบ ปพ5</div>
      </div>
      <span data-regrade-status class="hidden sm:inline text-[10px] text-emerald-300 min-w-[72px] text-right"></span>
      <button type="button" data-regrade-copy
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="คัดลอกลิงก์ระบบ">
        📋
      </button>
      <button type="button" data-regrade-share
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="แชร์ระบบ">
        🔗
      </button>
      <button type="button" data-regrade-close
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600/80 hover:border-red-500 transition"
        title="ปิด">
        ✕
      </button>
    </div>
    <iframe src="${e}" class="flex-1 w-full border-0 bg-white" title="แก้ค้างเก่า"></iframe>
  `;const r=()=>{document.removeEventListener("keydown",c),document.body.style.overflow=s,n.remove(),window.closeRegradeModal===r&&(window.closeRegradeModal=null)},c=t=>{t.key==="Escape"&&r()};document.addEventListener("keydown",c),document.body.appendChild(n),window.closeRegradeModal=r;const i=n.querySelector("[data-regrade-status]");(a=n.querySelector("[data-regrade-close]"))==null||a.addEventListener("click",r),(h=n.querySelector("[data-regrade-copy]"))==null||h.addEventListener("click",()=>Er(e,i)),(y=n.querySelector("[data-regrade-share]"))==null||y.addEventListener("click",()=>Sr(e,i))}async function Ir(){Zt(!0);const{data:{session:e}}=await le.auth.getSession();if(!e)return window.location.replace("index.html"),null;const{data:s,error:n}=await le.from("profiles").select("role, is_also_admin").eq("id",e.user.id).maybeSingle();return n||(s==null?void 0:s.role)!=="admin"&&!(s!=null&&s.is_also_admin)?(T("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):e}async function Cr(e){try{const{data:s}=await le.from("profiles").select("role, user_code").eq("id",e).maybeSingle();let n="ผู้ใช้งาน";if((s==null?void 0:s.role)==="teacher"||(s==null?void 0:s.role)==="admin"){const{data:c}=await le.from("teachers").select("full_name").eq("profile_id",e).maybeSingle();n=(c==null?void 0:c.full_name)??(s==null?void 0:s.user_code)??"ผู้ใช้งาน"}const r=(s==null?void 0:s.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=n,document.getElementById("user-role").textContent=r,document.getElementById("user-avatar").textContent=n.charAt(0).toUpperCase()}catch{}}async function Br(e){const s=document.getElementById("header-switch-slot");if(!s)return;s.innerHTML="";const{data:n}=await le.from("profiles").select("is_also_admin").eq("id",e).maybeSingle();if(!(n!=null&&n.is_also_admin))return;const r=document.createElement("a");r.id="btn-switch-teacher",r.href="teacher.html",r.title="สลับไปหน้าครู",r.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",r.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",s.appendChild(r)}async function Tr(){await le.auth.signOut(),T("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function jr(e=null){var n,r,c;const s=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(n=window._clearPositionRows)==null||n.call(window),document.getElementById("modal-title").textContent=e?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:i}=await se(async()=>{const{getDepartments:h}=await import("./api-CWYJTdOa.js");return{getDepartments:h}},__vite__mapDeps([0,1,2,3,4])),w=await i(),a=document.getElementById("modal-position-dept");a.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+w.map(h=>`<option value="${h.id}">${h.dept_name}</option>`).join("")}catch{}if(e)try{const{data:i}=await(await se(async()=>{const{supabase:a}=await import("./supabase-BV-W2lsh.js").then(h=>h.a);return{supabase:a}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",e).single();document.getElementById("modal-id").value=i.id,document.getElementById("modal-code").value=i.teacher_code??"",document.getElementById("modal-name").value=i.full_name??"",document.getElementById("modal-category").value=i.category??"",document.getElementById("modal-phone").value=i.phone??"",document.getElementById("modal-login-email").value=i.login_email??"",document.getElementById("modal-username").value=i.username??"",document.getElementById("modal-image-url").value=i.image_url??"";const w=(r=i.positions)!=null&&r.length?i.positions:i.position?[i.position]:[];(c=window._setPositionRows)==null||c.call(window,w),w.includes("dept_head")&&(document.getElementById("modal-position-dept").value=i.position_dept_id??""),ma(i.image_url,i.full_name)}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex"),document.getElementById("modal-name").focus()}function wt(){const e=document.getElementById("teacher-modal");e.classList.add("hidden"),e.classList.remove("flex")}async function Ar(e){var h,y,t;e.preventDefault();const s=document.getElementById("modal-save-btn"),n=document.getElementById("modal-id").value,r=document.getElementById("modal-username").value.trim().toLowerCase();if(r&&!/^[a-z0-9._-]{3,32}$/.test(r)){T("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const c=((h=window._getPositionValues)==null?void 0:h.call(window))??[],i=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],w=c.find(d=>!i.includes(d))||null,a={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:r||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:w,positions:c,position_dept_id:c.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!a.full_name){T("กรุณากรอกชื่อ-นามสกุล","warning");return}Re(s,!0);try{const d=(t=(y=document.getElementById("modal-photo-file"))==null?void 0:y.files)==null?void 0:t[0];if(d){const p=n||`new_${Date.now()}`;a.image_url=await Rs(p,d)}n?await sn(Number(n),a):await rn(a),T("บันทึกข้อมูลสำเร็จ","success"),wt(),Ve(await ge())}catch(d){T("บันทึกไม่สำเร็จ: "+ae(d),"error")}finally{Re(s,!1)}}async function qr(e,s){if(confirm(`ยืนยันการลบ "${s}" ออกจากระบบ?`))try{await en(Number(e)),T(`ลบ "${s}" แล้ว`,"success"),Ve(await ge())}catch{T("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function ma(e,s){const n=document.getElementById("modal-avatar-preview");n&&(e?n.innerHTML=`<img src="${e}" class="w-full h-full object-cover" />`:n.innerHTML=(s??"?").charAt(0).toUpperCase())}async function Mr(e=null){const s=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=e?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(n=>{document.getElementById(n).value=""}),document.getElementById("sub-skill-group").value="",e)try{const r=(await st()).find(c=>c.id===e);r&&(document.getElementById("sub-id").value=r.id,document.getElementById("sub-code").value=r.subject_code??"",document.getElementById("sub-name").value=r.subject_name??"",document.getElementById("sub-dept").value=r.dept??"",document.getElementById("sub-grade").value=r.grade_level??"",document.getElementById("sub-credit").value=r.credit??"",document.getElementById("sub-learning-area").value=r.learning_area??"",document.getElementById("sub-skill-group").value=r.skill_group??"")}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}s.classList.replace("hidden","flex")}async function Dr(e,s){if(confirm(`ยืนยันลบวิชา "${s}"?`))try{await tn(Number(e)),T(`ลบ "${s}" แล้ว`,"success"),jt(await st())}catch{T("ลบไม่สำเร็จ","error")}}async function Hr(e=null){const s=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(p=>{const l=document.getElementById(p);l&&(l.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const n=document.getElementById("dept-selected-teacher");n.classList.add("hidden"),n.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=e?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let r=[];try{r=await ge()}catch{}const c=document.getElementById("dept-teacher-code-input"),i=document.getElementById("dept-teacher-search"),w=document.getElementById("dept-teacher-dropdown"),a=document.getElementById("dept-selected-teacher"),h=document.getElementById("dept-selected-name"),y=document.getElementById("dept-clear-teacher"),t=p=>{document.getElementById("dept-teacher-code").value=p?p.teacher_code??"":"",p?(c.value=p.teacher_code??"",i.value=p.full_name??"",h.textContent=`${p.full_name}${p.teacher_code?` (${p.teacher_code})`:""}`,a.classList.remove("hidden"),a.classList.add("flex")):(c.value="",i.value="",a.classList.add("hidden"),a.classList.remove("flex")),w.classList.add("hidden")},d=p=>{w.innerHTML=p.length?p.map(l=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${l.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${l.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${l.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',w.querySelectorAll(".teacher-option").forEach(l=>{l.addEventListener("mousedown",b=>{b.preventDefault(),t(r.find($=>String($.id)===l.dataset.id))})}),w.classList.remove("hidden")};if(c.oninput=()=>{const p=c.value.trim().toLowerCase();if(!p){t(null);return}const l=r.find(b=>(b.teacher_code??"").toLowerCase()===p);if(l)t(l);else{const b=r.filter($=>($.teacher_code??"").toLowerCase().startsWith(p));b.length&&d(b)}},i.onfocus=()=>d(r),i.oninput=()=>{const p=i.value.toLowerCase();d(p?r.filter(l=>l.full_name.toLowerCase().includes(p)||(l.teacher_code??"").toLowerCase().includes(p)):r)},i.onblur=()=>setTimeout(()=>w.classList.add("hidden"),150),y==null||y.addEventListener("click",()=>t(null)),e)try{const l=(await Be()).find(b=>b.id===e);if(l){document.getElementById("dept-id").value=l.id,document.getElementById("dept-code").value=l.dept_code??"",document.getElementById("dept-name").value=l.dept_name??"",document.getElementById("dept-teacher-code").value=l.teacher_code??"",document.getElementById("dept-photo-url").value=l.head_photo_url??"",document.getElementById("dept-sign-url").value=l.head_sign_url??"";const b=document.getElementById("dept-category");if(b&&(b.value=l.category??""),l.teacher_code){const $=r.find(C=>C.teacher_code===l.teacher_code);$&&t($)}l.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${l.head_photo_url}" class="w-full h-full object-cover" />`),l.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${l.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex")}function Ze(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function Rr(e){var i,w,a,h,y,t,d,p;e.preventDefault();const s=document.getElementById("dept-save-btn"),n=document.getElementById("dept-id").value,r=document.getElementById("dept-code").value.trim().toUpperCase(),c=document.getElementById("dept-name").value.trim();if(!r||!c){T("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}Re(s,!0);try{const l=document.getElementById("dept-teacher-code").value||null,b=l?((a=(w=(i=document.getElementById("dept-selected-name"))==null?void 0:i.textContent)==null?void 0:w.split(" (")[0])==null?void 0:a.trim())??null:null,$={dept_code:r,dept_name:c,head_name:b,teacher_code:l,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((h=document.getElementById("dept-category"))==null?void 0:h.value)||null},C=(t=(y=document.getElementById("dept-photo-file"))==null?void 0:y.files)==null?void 0:t[0];C&&($.head_photo_url=await zt(r,"photo",C));const x=(p=(d=document.getElementById("dept-sign-file"))==null?void 0:d.files)==null?void 0:p[0];x&&($.head_sign_url=await zt(r,"sign",x)),n?await on(Number(n),$):await ln($),T("บันทึกสำเร็จ","success"),Ze(),ot(await Be())}catch(l){T("บันทึกไม่สำเร็จ: "+ae(l),"error")}finally{Re(s,!1)}}async function Pr(e,s){if(confirm(`ยืนยันลบกลุ่มสาระ "${s}"?`))try{await an(Number(e)),T(`ลบ "${s}" แล้ว`,"success"),ot(await Be())}catch{T("ลบไม่สำเร็จ","error")}}function Nr(e=null){var r,c,i;const s=document.getElementById("period-modal"),n=e?((r=window._periodsCache)==null?void 0:r[e])??null:null;document.getElementById("period-id").value=e??"",document.getElementById("period-no").value=(n==null?void 0:n.period_no)??"",document.getElementById("period-start").value=((c=n==null?void 0:n.start_time)==null?void 0:c.slice(0,5))??"",document.getElementById("period-end").value=((i=n==null?void 0:n.end_time)==null?void 0:i.slice(0,5))??"",document.getElementById("period-modal-title").textContent=e?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",s.classList.remove("hidden"),s.classList.add("flex")}function et(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function Or(e){e.preventDefault();const s=document.getElementById("period-save-btn"),n=document.getElementById("period-id").value,r={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!r.period_no||!r.start_time||!r.end_time){T("กรุณากรอกข้อมูลให้ครบ","warning");return}n&&(r.id=Number(n)),Re(s,!0);try{await dn(r),T("บันทึกสำเร็จ","success"),et(),lt()}catch(c){T("บันทึกไม่สำเร็จ: "+ae(c),"error")}finally{Re(s,!1)}}async function Fr(e){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await nn(Number(e)),T("ลบแล้ว","success"),lt()}catch{T("ลบไม่สำเร็จ","error")}}async function $t(){try{const s=(await Ee()).filter(r=>r.status==="pending").length,n=document.getElementById("badge-payments");if(!n)return;s>0?(n.textContent=s>9?"9+":s,n.classList.remove("hidden"),n.classList.add("flex")):(n.classList.add("hidden"),n.classList.remove("flex"))}catch{}}async function _t(){try{const s=(await aa()).filter(r=>!r.is_read).length,n=document.getElementById("badge-feedback");if(!n)return;s>0?(n.textContent=s>9?"9+":s,n.classList.remove("hidden"),n.classList.add("flex")):(n.classList.add("hidden"),n.classList.remove("flex"))}catch{}}async function kt(){try{const e=await ta(),s=document.getElementById("badge-subject-group");if(!s)return;e.length>0?(s.textContent=e.length>9?"9+":e.length,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}window._refreshSubjectGroupBadge=kt;window._refreshFeedbackBadge=_t;window._refreshPaymentBadge=$t;window._goBack=()=>Pe();window.openTeacherModal=jr;window.handleDeleteTeacher=qr;window.openSubjectModal=Mr;window.handleDeleteSubject=Dr;window.openDeptModal=Hr;window.handleDeleteDept=Pr;window.openPeriodModal=Nr;window.handleDeletePeriod=Fr;window._adminViewSchedule=async(e,s)=>{var y;(y=document.getElementById("admin-sched-overlay"))==null||y.remove();const{getSystemConfig:n}=await se(async()=>{const{getSystemConfig:t}=await import("./api-CWYJTdOa.js");return{getSystemConfig:t}},__vite__mapDeps([0,1,2,3,4])),r=await n().catch(()=>({})),c=parseInt(r.academicYear??2568),i=parseInt(r.semester??1),w=document.createElement("div");w.id="admin-sched-overlay",w.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",w.innerHTML=`
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-5 h-14 flex items-center gap-4 flex-shrink-0 shadow-sm">
      <button id="aso-close"
        class="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 font-medium transition">
        ← กลับ
      </button>
      <div class="w-px h-5 bg-gray-200"></div>
      <div>
        <p class="text-sm font-bold text-gray-800">🗓️ ตารางสอน — ${s}</p>
        <p class="text-xs text-gray-400">ภาค ${i} / ${c} · แก้ไขได้</p>
      </div>
    </div>
    <!-- Content -->
    <div id="aso-content" class="flex-1 overflow-y-auto p-5">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
        กำลังโหลดตารางสอน...
      </div>
    </div>`,document.body.appendChild(w),w.querySelector("#aso-close").addEventListener("click",()=>w.remove());const a=w.querySelector("#aso-content"),h=document.getElementById("main-content");h&&(h.id="main-content-bak"),a.id="main-content";try{await As({id:e,full_name:s},c,i,r)}finally{a.id="aso-content",h&&(h.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var t,d,p,l,b,$,C,x,_,q,A,I,L,E,H,k,m;er();const e=await Ir();if(!e)return;await pa("admin");const s=document.getElementById("app-version");s&&(s.textContent=`v${Xs}`,s.classList.add("cursor-pointer","hover:underline"),s.addEventListener("click",()=>qt(e.user.id,!0,!0))),(t=e==null?void 0:e.user)!=null&&t.id&&qt(e.user.id,!1,!0),Qa(),(d=document.getElementById("btn-logout"))==null||d.addEventListener("click",Tr);const n=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],r=()=>'<option value="">— ไม่มี —</option>'+n.map(f=>`<optgroup label="${f.label}">${f.options.map(g=>`<option value="${g.value}">${g.label}</option>`).join("")}</optgroup>`).join("");function c(){const f=[...document.querySelectorAll(".pos-row-sel")].map(g=>g.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!f.includes("dept_head"))}function i(){const f=[...document.querySelectorAll(".pos-row-sel")],g=f.map(o=>o.value).filter(Boolean);f.forEach(o=>{[...o.options].forEach(u=>{u.value&&(u.disabled=g.includes(u.value)&&o.value!==u.value)})})}function w(f=""){const g=document.getElementById("modal-positions-list"),o=document.createElement("div");o.className="pos-row flex items-center gap-2",o.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${r()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,o.querySelector(".pos-row-sel").value=f,o.querySelector(".pos-row-sel").addEventListener("change",()=>{c(),i()}),o.querySelector(".pos-row-del").addEventListener("click",()=>{o.remove(),c(),i()}),g.appendChild(o),c(),i()}window._addPositionRow=w,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",w(),c()},window._setPositionRows=f=>{document.getElementById("modal-positions-list").innerHTML="",(f!=null&&f.length?f:[""]).forEach(o=>w(o)),c()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(f=>f.value).filter(Boolean),(p=document.getElementById("btn-add-position"))==null||p.addEventListener("click",()=>w()),w(),(l=document.getElementById("modal-close"))==null||l.addEventListener("click",wt),(b=document.getElementById("modal-backdrop"))==null||b.addEventListener("click",wt),($=document.getElementById("teacher-form"))==null||$.addEventListener("submit",Ar),(C=document.getElementById("modal-photo-file"))==null||C.addEventListener("change",f=>{const g=f.target.files[0];g&&ma(URL.createObjectURL(g),"")}),(x=document.getElementById("dept-modal-close"))==null||x.addEventListener("click",Ze),(_=document.getElementById("dept-modal-backdrop"))==null||_.addEventListener("click",Ze),(q=document.getElementById("dept-modal-cancel"))==null||q.addEventListener("click",Ze),(A=document.getElementById("dept-form"))==null||A.addEventListener("submit",Rr),(I=document.getElementById("dept-photo-file"))==null||I.addEventListener("change",f=>{const g=f.target.files[0];g&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL(g)}" class="w-full h-full object-cover" />`)}),(L=document.getElementById("dept-sign-file"))==null||L.addEventListener("change",f=>{const g=f.target.files[0];g&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL(g)}" class="w-full h-full object-contain" />`)}),(E=document.getElementById("period-modal-close"))==null||E.addEventListener("click",et),(H=document.getElementById("period-modal-backdrop"))==null||H.addEventListener("click",et),(k=document.getElementById("period-modal-cancel"))==null||k.addEventListener("click",et),(m=document.getElementById("period-form"))==null||m.addEventListener("submit",Or),await Cr(e.user.id),Br(e.user.id);const a={overview:Et,"exec-overview":$r,teachers:ba,classes:Tt,students:ya,departments:ha,subjects:Pe,curriculum:He,periods:lt,homeroom:va,"score-col-config":wa,"registered-teachers":at,holidays:$a,payments:ka,"life-skill-admin":Ea,"reading-admin":Sa,"prayer-admin":La,settings:fa,import:_a,"admin-profile":Ia,"usage-stats":Ca,"classrooms-admin":Ba,"course-doc-lang":()=>qs(null,!0),announcements:()=>Ha(),"autoscale-history":()=>Ra(),"autoscale-settings":()=>vt(),"work-calendar":()=>Ua(null),"role-permissions":()=>Pa(),"religion-groups":Ga,"tutorial-admin":()=>se(async()=>{const{renderTutorialAdmin:f}=await import("./tutorial-D2C4vUJE.js");return{renderTutorialAdmin:f}},__vite__mapDeps([5,0,1,2,3,4,6,7])).then(({renderTutorialAdmin:f})=>f()),"house-colors":()=>Na(),"sports-admin":()=>tr({admin:!0}),azfutsal:()=>Zs(),regrade:()=>Lr(),"sports-shirt-summary":()=>lr(),"sports-fund-admin":()=>or(),"sports-overview-admin":()=>rr(),"sports-evaluation":()=>sr(),"shirt-vote-settings":()=>nr(),"shirt-vote-dashboard":()=>ar(),donations:()=>Fa(),"feedback-admin":()=>za(),"subject-group-requests":()=>Ya(),"donor-chat-admin":()=>se(()=>import("./teacher-views-donor-chat-DuEU7Pt_.js"),__vite__mapDeps([8,7,0,1,2,3,4,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,5,23,24])).then(f=>f.renderDonorChatAdmin()),"student-qr-print":()=>se(()=>import("./teacher-views-classes-DgW_t4uH.js").then(f=>f.t),__vite__mapDeps([25,7,0,1,2,3,4,12,13,26,27,22,6,9,28,24,29,30,31,32])).then(f=>f.renderStudentQRPrint(null,null)),"classroom-leaders":()=>Ka(),"council-rep-nominations":()=>Oa(),certificates:()=>se(()=>import("./teacher-views-certificates-Dla4IuOS.js"),__vite__mapDeps([33,7,34,1,22,35,9,6])).then(async f=>{const{getMyTeacherProfile:g}=await se(async()=>{const{getMyTeacherProfile:u}=await import("./api-CWYJTdOa.js");return{getMyTeacherProfile:u}},__vite__mapDeps([0,1,2,3,4])),o=await g(e.user.id).catch(()=>null);return f.renderCertificateManager(o)})};document.querySelectorAll("[data-nav]").forEach(f=>{f.addEventListener("click",g=>{var u,v;g.preventDefault();const o=f.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}a[o]&&a[o](),(u=document.getElementById("sidebar"))==null||u.classList.add("-translate-x-full"),(v=document.getElementById("sidebar-overlay"))==null||v.classList.add("hidden")})}),$t(),setInterval($t,6e4),_t(),setInterval(_t,6e4),kt(),setInterval(kt,6e4),Zt(!1),window._adminNav=f=>{a[f]&&a[f]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>a["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>a["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>a["shirt-vote-dashboard"]());const h=new URLSearchParams(location.search),y=h.get("view");y&&a[y]?(window._pendingQRTab=h.get("tab")||null,a[y]()):await Et()});function Se(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(0,s).trim():e.trim()}function qe(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(s+1).trim():""}function me(e){return[...new Set(e.filter(Boolean))].sort()}const ce="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",$e="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",_e=e=>String(e??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),W=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function re(e){document.querySelectorAll("[data-nav]").forEach(s=>{s.classList.toggle("bg-indigo-800",s.dataset.nav===e),s.classList.toggle("text-white",s.dataset.nav===e),s.classList.toggle("text-indigo-200",s.dataset.nav!==e)})}function ne(e){document.getElementById("main-content").innerHTML=e}async function Et(){re("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ",ne(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-8 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">ยินดีต้อนรับเข้าสู่ระบบ ปพ.5 👋</h3>
      <p class="text-gray-500 text-sm">จัดการข้อมูลครู นักเรียน และห้องเรียนได้จากเมนูด้านซ้าย</p>
    </div>

    <!-- สถิติหลัก -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4" id="stat-grid">
      ${["teachers","students","classes","subjects","prayer"].map(e=>`
        <button type="button" onclick="window._adminNav?.('${e==="classes"?"classrooms-admin":e==="prayer"?"prayer-admin":e}')"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 text-left
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl
            ${e==="teachers"?"bg-indigo-100":e==="students"?"bg-purple-100":e==="classes"?"bg-blue-100":e==="subjects"?"bg-green-100":"bg-rose-100"}">
            ${{teachers:"👩‍🏫",students:"👦",classes:"🏫",subjects:"📚",prayer:"🕌"}[e]}
          </div>
          <div>
            <p class="text-xs text-gray-500">${{teachers:"ครูผู้สอน",students:"นักเรียน",classes:"ห้องเรียน",subjects:"รายวิชา",prayer:"คะแนนละหมาด"}[e]}</p>
            <p id="stat-${e}" class="text-2xl font-bold
              ${e==="teachers"?"text-indigo-700":e==="students"?"text-purple-700":e==="classes"?"text-blue-700":e==="subjects"?"text-green-700":"text-rose-700"}">—</p>
          </div>
        </button>`).join("")}
    </div>

    <!-- แถวที่สอง: ลงทะเบียน + pending payments -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- ครูที่ลงทะเบียนแล้ว -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h4 class="font-semibold text-gray-700 mb-3">🔑 บัญชีผู้ใช้ครู</h4>
        <div class="flex gap-4">
          <button type="button" onclick="window._adminNav?.('registered-teachers')"
            class="flex-1 text-center bg-emerald-50 rounded-xl py-3 hover:bg-emerald-100
                   focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
            <p id="stat-registered" class="text-2xl font-bold text-emerald-700">—</p>
            <p class="text-xs text-gray-500 mt-0.5">ลงทะเบียนแล้ว</p>
          </button>
          <button type="button" onclick="window._adminNav?.('registered-teachers')"
            class="flex-1 text-center bg-gray-50 rounded-xl py-3 hover:bg-gray-100
                   focus:outline-none focus:ring-2 focus:ring-gray-200 transition">
            <p id="stat-unregistered" class="text-2xl font-bold text-gray-500">—</p>
            <p class="text-xs text-gray-500 mt-0.5">ยังไม่มีบัญชี</p>
          </button>
        </div>
      </div>

      <!-- Pending payments -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-semibold text-gray-700">💳 การชำระเงิน</h4>
          <button onclick="window._adminNav?.('payments')"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">ดูทั้งหมด →</button>
        </div>
        <div id="pending-payments-list">
          <p class="text-sm text-gray-400 text-center py-3">กำลังโหลด...</p>
        </div>
      </div>
    </div>
    <!-- Training announcements todo -->
    <div id="training-todo-shell" class="mt-4"></div>
    <div id="leave-monitor-shell" class="mt-4"></div>
    <div id="monitor-shell" class="mt-6"></div>
  </div>`);try{const[e,s,n]=await Promise.all([ss(),Ee().catch(()=>[]),ge().catch(()=>[])]);Object.entries(e).forEach(([l,b])=>{const $=document.getElementById(`stat-${l}`);$&&($.textContent=b.toLocaleString())});const r=n.filter(l=>l.profile_id).length,c=n.length-r,i=document.getElementById("stat-registered"),w=document.getElementById("stat-unregistered");i&&(i.textContent=r),w&&(w.textContent=c);const a=s.filter(l=>l.status==="pending"),h=document.getElementById("pending-payments-list");h&&(a.length?h.innerHTML=a.slice(0,3).map(l=>{var b;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((b=l.teachers)==null?void 0:b.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${l.package_type==="semester"?`เหมาทั้งเทอม ${l.amount??299} บ.`:`รายห้อง ${parseInt(l.room_count??1)||1} ห้อง ${l.amount??49} บ.`} · ${new Date(l.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(a.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${a.length-3} รายการ</p>`:""):h.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const y=document.getElementById("training-todo-shell");if(y)try{const{getAllAnnouncements:l,getAnnouncementRsvps:b}=await se(async()=>{const{getAllAnnouncements:_,getAnnouncementRsvps:q}=await import("./api-CWYJTdOa.js");return{getAllAnnouncements:_,getAnnouncementRsvps:q}},__vite__mapDeps([0,1,2,3,4])),$=await l(),C=new Date().toISOString().slice(0,10),x=$.filter(_=>_.ann_type==="training"&&_.is_active&&_.event_date>=C).sort((_,q)=>_.event_date.localeCompare(q.event_date));if(x.length){const _=await Promise.all(x.map(I=>b(I.id).catch(()=>[]))),q=I=>new Date(I+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),A=I=>String(I??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");y.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${x.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${x.map((I,L)=>{var g;const E=_[L]??[],H=E.filter(o=>o.response==="yes").length,k=E.filter(o=>o.response==="maybe").length,m=E.filter(o=>o.response==="no").length,f=E.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${A(I.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${q(I.event_date)}
                        ${(g=I.event_periods)!=null&&g.length?` · 🕐 คาบ ${I.event_periods.sort((o,u)=>o-u).join(",")}`:""}
                        ${I.event_location?` · 📍 ${A(I.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${f?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${H}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${k}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${m}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const t=document.getElementById("leave-monitor-shell");t&&await Ls(t,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const d=await pe().catch(()=>({})),p=document.getElementById("monitor-shell");p&&Wr(p,d)}catch{T("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function It(e,s,n){const r={};for(const c of e)c.main_room&&(r[c.main_room]=[]);for(const c of s){const i=c[n];i&&(r[i]||(r[i]=[]),r[i].push({id:c.id,full_name:c.full_name??"",student_code:c.student_code??""}))}return r}async function zr(e,s,n){const{records:r,students:c,homerooms:i}=await ys(e,s),w=It(i,c,"religion_room"),a={},h={},y=new Set;for(const x of r){const _=x.main_room,q=x.week_number;!_||!q||(y.add(q),a[_]||(a[_]={}),a[_][q]||(a[_][q]=new Set),a[_][q].add(x.student_id),x.status==="absent"&&(h[_]||(h[_]={}),h[_][q]||(h[_][q]=new Set),h[_][q].add(x.student_id)))}const t=n?Vr(n):Math.max(...y,0),d=t>0?Array.from({length:t},(x,_)=>_+1):[...y].sort((x,_)=>x-_),p=Object.keys(w),l=p.filter(x=>{var A,I;const _=w[x].length,q=((I=(A=a[x])==null?void 0:A[t-1])==null?void 0:I.size)??0;return _>0&&q<_}),b=p.filter(x=>{var q;const _=(q=h[x])==null?void 0:q[t-2];return _!=null&&_.size?[..._].some(A=>!r.filter(L=>L.main_room===x&&L.week_number===t-1&&L.student_id===A).some(L=>L.status==="followed"||L.status==="avoid")):!1}),$=p.length,C=p.filter(x=>{var q,A;const _=w[x].length;return _?(((A=(q=a[x])==null?void 0:q[t-1])==null?void 0:A.size)??0)>=_:!1}).length;return{total:$,done:C,recordPending:l.length,followPending:b.length,week:t,_raw:{records:r,students:c,roomStudents:w,weekRoomRec:a,weekRoomAbsent:h,weeks:d,W:t,homerooms:i}}}async function Ur(e,s){const{columns:n,scores:r,students:c,homerooms:i}=await fs(e,s),w=It(i,c,"main_room"),a=new Set(r.map(t=>t.student_id)),h=Object.keys(w),y=h.filter(t=>w[t].length>0&&w[t].every(d=>a.has(d.id??d))).length;return{total:h.length,done:y,pending:h.length-y,_raw:{columns:n,scores:r,students:c,roomStudents:w,scored:a,homerooms:i}}}async function Gr(e,s){const{columns:n,scores:r,students:c,homerooms:i}=await hs(e,s),w=It(i,c,"main_room"),a=new Set(r.map(t=>t.student_id)),h=Object.keys(w),y=h.filter(t=>w[t].length>0&&w[t].every(d=>a.has(d.id??d))).length;return{total:h.length,done:y,pending:h.length-y,_raw:{columns:n,scores:r,students:c,roomStudents:w,scored:a,homerooms:i}}}function Vr(e){if(!e)return 0;const s=new Date(e);if(isNaN(s))return 0;const n=Date.now()-s.getTime();return n<0?0:Math.floor(n/(7*24*60*60*1e3))+1}async function Wr(e,s){const n=parseInt(s.academicYear??2568),r=parseInt(s.semester??1);e.innerHTML=`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="font-bold text-gray-800 mb-4">📊 ติดตามความคืบหน้า</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="monitor-cards">
        ${["prayer","lifeskill","reading"].map(t=>`
        <div class="monitor-card rounded-xl border border-gray-100 p-4 cursor-pointer hover:shadow-md hover:border-indigo-200 transition bg-gray-50"
          data-type="${t}">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">${{prayer:"🕌",lifeskill:"🌱",reading:"📖"}[t]}</span>
            <p class="font-semibold text-sm text-gray-700">${{prayer:"ละหมาด (รายสัปดาห์)",lifeskill:"ทักษะชีวิต (รายเทอม)",reading:"อ่านคิดวิเคราะห์ (รายเทอม)"}[t]}</p>
          </div>
          <div id="card-${t}" class="text-center py-4 text-gray-300 text-xs">กำลังโหลด...</div>
        </div>`).join("")}
      </div>
    </div>`;const[c,i,w,a]=await Promise.allSettled([zr(n,r,s.semester_start),Ur(n,r),Gr(n,r),ge().catch(()=>[])]),h=a.status==="fulfilled"?a.value:[],y=(t,d)=>{const p=document.getElementById(`card-${t}`);if(!p)return;if(d.status==="rejected"){p.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const l=d.value;if(t==="prayer"){const b=l.total>0?Math.round(l.done/l.total*100):0,$=l.recordPending+l.followPending;p.innerHTML=`
        <p class="text-3xl font-extrabold ${b>=100?"text-emerald-600":b>=60?"text-amber-500":"text-red-500"}">${b}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${l.done}/${l.total} ห้อง (สัปดาห์ที่ ${l.week-1})</p>
        ${$>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${l.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${l.recordPending} ห้อง</span>`:""}
          ${l.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${l.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const b=l.total>0?Math.round(l.done/l.total*100):0;p.innerHTML=`
        <p class="text-3xl font-extrabold ${b>=100?"text-emerald-600":b>=60?"text-amber-500":"text-red-500"}">${b}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${l.done}/${l.total} ห้อง</p>
        ${l.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${l.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};y("prayer",c),y("lifeskill",i),y("reading",w),e.querySelectorAll(".monitor-card").forEach(t=>{t.addEventListener("click",()=>{var l,b,$;const d=t.dataset.type,p=d==="prayer"?(l=c.value)==null?void 0:l._raw:d==="lifeskill"?(b=i.value)==null?void 0:b._raw:($=w.value)==null?void 0:$._raw;Yr(d,p,s,n,r,h)})})}function Yr(e,s,n,r,c,i=[]){var d;(d=document.getElementById("monitor-modal"))==null||d.remove();const w={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},a=document.createElement("div");a.id="monitor-modal",a.className="fixed inset-0 z-[90] flex flex-col bg-white",a.innerHTML=`
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${w[e]}</h2>
        <p class="text-xs text-gray-400">ภาค ${n.semester??"—"}/${n.academicYear??"—"}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`,document.body.appendChild(a),a.querySelector("#monitor-modal-close").addEventListener("click",()=>a.remove());const h=a.querySelector("#modal-body"),t={allTeachers:i,year:r,sem:c,category:e==="prayer"?"ศาสนา":"สามัญ"};e==="prayer"&&Kr(h,s,t),e==="lifeskill"&&ga(h,s,r,c,t),e==="reading"&&xa(h,s,r,c,t),a.querySelector("#modal-print-btn").addEventListener("click",()=>Jr(n,e)),a.querySelector("#modal-doc-btn").addEventListener("click",()=>Xr(n,e,s))}function Ct(e,s,n,r){const c=s[e],{allTeachers:i,year:w,sem:a,category:h}=r??{};if(c)return`<p class="font-semibold text-gray-800 text-xs leading-tight">${c}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${e}</p>`;(i??[]).map(t=>`<option value="${t.id}">${t.full_name??""}${t.teacher_code?` (${t.teacher_code})`:""}</option>`).join("");const y=`pick-${e.replace(/[^a-zA-Z0-9]/g,"_")}`;return`<p class="text-[11px] font-medium text-gray-500">${e}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${e}" data-picker="${y}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${y}" class="hidden mt-2 flex gap-1 items-center">
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
        data-room="${e}" data-year="${w}" data-sem="${a}" data-cat="${h}">บันทึก</button>
    </div>`}function Kr(e,s,n={}){var g;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:r,roomStudents:c,weekRoomRec:i,weekRoomAbsent:w,weeks:a,W:h,homerooms:y}=s,t=Object.keys(c).sort((o,u)=>o.localeCompare(u,void 0,{numeric:!0})),d={},p={};for(const o of y??[])o.main_room&&(d[o.main_room]=((g=o.teachers)==null?void 0:g.full_name)??"",p[o.main_room]=o);const l="border border-gray-100 text-center text-[10px] px-2 py-2",b="px-4 py-2 text-sm font-medium border-b-2 transition",$=`${b} border-indigo-600 text-indigo-700 bg-indigo-50`,C=`${b} border-transparent text-gray-500 hover:text-gray-700`,x=(o,u="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${Ct(o,d,p,n)}${u}
  </td>`,_=o=>{const u=o??(h>0?h-1:h),v=a.map(M=>`<option value="${M}" ${M===u?"selected":""}>${M===h?`สัปดาห์ที่ ${M} (ปัจจุบัน)`:M===h-1?`สัปดาห์ที่ ${M} (ควรกรอก)`:`สัปดาห์ที่ ${M}`}</option>`).join(""),B=t.map(M=>{var G,K;const j=(c[M]??[]).length,R=((K=(G=i[M])==null?void 0:G[u])==null?void 0:K.size)??0,N=j>0?Math.round(R/j*100):0,O=j===0?"bg-gray-50 text-gray-300":R===0?"bg-red-50 text-red-400":N>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",Q=N>=100?"bg-emerald-500":N>=50?"bg-amber-400":"bg-red-400",P=j>0&&R<j?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${x(M,P)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${j}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${O}">
          <div class="font-bold">${j>0?N+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${j>0?R+"/"+j:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${j>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${Q} h-2 rounded-full" style="width:${N}%"></div></div>
            <span class="text-[10px] font-bold ${N>=100?"text-emerald-600":N>=50?"text-amber-600":"text-red-500"}">${N}%</span>
          </div>`:'<span class="text-[10px] text-gray-300">ไม่มีนักเรียน</span>'}
        </td>
      </tr>`}).join("");return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">เลือกสัปดาห์:</label>
      <select id="prayer-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${v}
      </select>
      <span class="text-[11px] text-gray-400">${t.length} ห้อง</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${l} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${l} bg-gray-100">นักเรียน</th>
          <th class="${l} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${l} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${B}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},q=o=>{var R;const u=o??(h>1?h-2:a[0]??1),v=u+1,B=a.map(N=>`<option value="${N}" ${N===u?"selected":""}>${N===h-2?`สัปดาห์ที่ ${N} (ควรติดตาม)`:N===h-1?`สัปดาห์ที่ ${N} (ล่าสุด)`:`สัปดาห์ที่ ${N}`}</option>`).join(""),M=(N,O)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${O}</span>`})[N]??"",S=[];for(const N of t){const O=c[N]??[],Q=Object.fromEntries(O.map(P=>[P.id??P,P])),Y=[...((R=w[N])==null?void 0:R[u])??[]];for(const P of Y){const G=Q[P],z=r.filter(F=>F.main_room===N&&F.week_number===v&&F.student_id===P).some(F=>F.status==="followed"||F.status==="avoid")?"followed":v>h?"pending":"overdue";S.push({room:N,stu:G,status:z})}}const j=S.length?S.map(({room:N,stu:O,status:Q})=>{const Y=d[N];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${Y?`<p class="font-semibold text-gray-800 text-xs">${Y}</p><p class="text-[10px] text-gray-400">${N}</p>`:`<p class="font-semibold text-gray-800 text-xs">${N}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(O==null?void 0:O.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(O==null?void 0:O.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${M(Q,v)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${u}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${B}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${v} · พบ ${S.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${l} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${l} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${l} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${j}</tbody>
      </table>
    </div>`},A=h>0?h-1:0,I=t.filter(o=>{var u;return((u=c[o])==null?void 0:u.length)>0}).length,L=t.reduce((o,u)=>{var v;return o+(((v=c[u])==null?void 0:v.length)??0)},0),E=(o,u,v=72)=>{const j=2*Math.PI*26,R=j*o/100;return`<svg width="${v}" height="${v}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${u}" stroke-width="8"
        stroke-dasharray="${R} ${j}" stroke-dashoffset="${j/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${u}">${o}%</text>
    </svg>`},H=o=>{const u=e.querySelector("#prayer-dashboard");if(!u)return;if(a.length===0){u.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!o)return;const v=t.filter(O=>{var Y,P;const Q=c[O].length;return Q>0&&(((P=(Y=i[O])==null?void 0:Y[o])==null?void 0:P.size)??0)<Q}),B=t.filter(O=>{var P,G;const Q=c[O].length,Y=((G=(P=i[O])==null?void 0:P[o])==null?void 0:G.size)??0;return Q>0&&Y>=Q}),M=t.filter(O=>{var Y;const Q=(Y=w[O])==null?void 0:Y[o-1];return Q!=null&&Q.size?[...Q].some(P=>!r.filter(K=>K.main_room===O&&K.week_number===o&&K.student_id===P).some(K=>K.status==="followed"||K.status==="avoid")):!1}),S=B.length,j=v.length,R=t.reduce((O,Q)=>{var Y,P;return O+(((P=(Y=i[Q])==null?void 0:Y[o])==null?void 0:P.size)??0)},0),N=I>0?Math.round(S/I*100):0;u.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${I}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">ห้องทั้งหมด</p>
      </div>
      <div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-emerald-600">${S}</p>
        <p class="text-[11px] text-emerald-500 mt-0.5">บันทึกครบแล้ว</p>
      </div>
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-amber-600">${j}</p>
        <p class="text-[11px] text-amber-500 mt-0.5">ยังค้างอยู่</p>
      </div>
      <div class="bg-indigo-50 rounded-2xl border border-indigo-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-indigo-600">${R}</p>
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${L}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${E(N,N>=100?"#10b981":N>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${o}</p>
          <p class="text-xs text-gray-400 mt-0.5">${S} / ${I} ห้อง บันทึกครบ</p>
          ${M.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${M.length} ห้อง</p>`:""}
          ${N>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${j>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${j})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${v.map(O=>{var K,D;const Q=c[O].length,Y=((D=(K=i[O])==null?void 0:K[o])==null?void 0:D.size)??0,P=Math.round(Y/Q*100),G=d[O];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${O}</span>
                ${G?`<span class="text-amber-600 truncate block">${G}</span>`:""}
              </div>
              <span class="flex-shrink-0 font-bold ${P===0?"text-red-500":"text-amber-600"}">${Y}/${Q}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${P===0?"bg-red-400":"bg-amber-400"}" style="width:${P}%"></div>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:`<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${o}</p></div>
      </div>`}
    </div>`};e.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${$}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${C}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const k=e.querySelector("#prayer-tab-content");let m="record";const f=(o,u)=>{m=o,k.innerHTML=o==="record"?_(u):q(u),o==="record"&&H(u??A),e.querySelectorAll(".prayer-tab").forEach(M=>{M.className=M.dataset.tab===o?`prayer-tab ${$}`:`prayer-tab ${C}`});const v=k.querySelector("#prayer-week-sel");v&&v.addEventListener("change",M=>f("record",parseInt(M.target.value)));const B=k.querySelector("#prayer-follow-week-sel");B&&B.addEventListener("change",M=>f("follow",parseInt(M.target.value))),Bt(k,n,()=>f(m,u))};e.querySelectorAll(".prayer-tab").forEach(o=>o.addEventListener("click",()=>f(o.dataset.tab))),f("record",A)}function ga(e,s,n,r,c={}){var l;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:i,roomStudents:w,scored:a,homerooms:h}=s;if(!i.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const y={},t={};for(const b of h??[])b.main_room&&(y[b.main_room]=((l=b.teachers)==null?void 0:l.full_name)??"",t[b.main_room]=b);const d=Object.keys(w).sort((b,$)=>b.localeCompare($,void 0,{numeric:!0})),p="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${p} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${p} bg-gray-100">นักเรียน</th>
          <th class="${p} bg-emerald-50 text-emerald-700">กรอกแล้ว</th>
          <th class="${p} bg-red-50 text-red-500">ค้าง</th>
          <th class="${p} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${d.map(b=>{const $=w[b]??[],C=$.length,x=$.filter(I=>a.has(I.id??I)).length,_=C-x,q=C>0?Math.round(x/C*100):0,A=q>=100?"bg-emerald-500":q>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ct(b,y,t,c)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${C}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${x}</td>
              <td class="border border-gray-100 text-center ${_>0?"text-red-500 font-medium":"text-gray-300"}">${_||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${A} h-2 rounded-full" style="width:${q}%"></div></div>
                  <span class="text-[10px] font-bold ${q>=100?"text-emerald-600":q>=50?"text-amber-600":"text-red-500"}">${q}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${r}/${n} · ${d.length} ห้อง</p>`,Bt(e,c,()=>ga(e,s,n,r,c))}function xa(e,s,n,r,c={}){var l;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:i,roomStudents:w,scored:a,homerooms:h}=s;if(!i.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const y={},t={};for(const b of h??[])b.main_room&&(y[b.main_room]=((l=b.teachers)==null?void 0:l.full_name)??"",t[b.main_room]=b);const d=Object.keys(w).sort((b,$)=>b.localeCompare($,void 0,{numeric:!0})),p="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${p} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${p} bg-gray-100">นักเรียน</th>
          <th class="${p} bg-indigo-50 text-indigo-700">กรอกแล้ว</th>
          <th class="${p} bg-red-50 text-red-500">ค้าง</th>
          <th class="${p} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${d.map(b=>{const $=w[b]??[],C=$.length,x=$.filter(I=>a.has(I.id??I)).length,_=C-x,q=C>0?Math.round(x/C*100):0,A=q>=100?"bg-indigo-500":q>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ct(b,y,t,c)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${C}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${x}</td>
              <td class="border border-gray-100 text-center ${_>0?"text-red-500 font-medium":"text-gray-300"}">${_||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${A} h-2 rounded-full" style="width:${q}%"></div></div>
                  <span class="text-[10px] font-bold ${q>=100?"text-indigo-600":q>=50?"text-amber-600":"text-red-500"}">${q}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${r}/${n} · ${d.length} ห้อง · ${i.length} หัวข้อ</p>`,Bt(e,c,()=>xa(e,s,n,r,c))}async function Bt(e,s,n){const{allTeachers:r,year:c,sem:i,category:w}=s??{};if(!(r!=null&&r.length))return;const a={};e.querySelectorAll(".hr-sel-wrap").forEach(h=>{const y=h.closest('[id^="pick-"]');y&&(a[y.id]=Lt({wrap:h,teachers:r,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),e.querySelectorAll(".hr-assign-btn").forEach(h=>{h.addEventListener("click",()=>{const y=h.dataset.picker,t=document.getElementById(y);t&&t.classList.toggle("hidden")})}),e.querySelectorAll(".hr-save-btn").forEach(h=>{h.addEventListener("click",async()=>{var p;const y=h.dataset.room,t=`pick-${y.replace(/[^a-zA-Z0-9]/g,"_")}`,d=(p=a[t])==null?void 0:p.getValue();if(!d){T("กรุณาเลือกครู","error");return}h.disabled=!0,h.textContent="...";try{await oa({teacher_id:d,main_room:y,category:w,academic_year:c,semester:i}),T(`ระบุครูที่ปรึกษาห้อง ${y} แล้ว ✅`,"success"),n&&n()}catch(l){T("บันทึกไม่สำเร็จ: "+ae(l),"error"),h.disabled=!1,h.textContent="บันทึก"}})})}function Jr(e,s){const n={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,r=document.getElementById("modal-body");if(!r){T("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const c=r.cloneNode(!0);c.querySelectorAll("button, select, input").forEach(a=>a.remove());const i=c.innerHTML,w=`<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>ติดตามความคืบหน้า — ${n}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet"/>
    <style>
      * { box-sizing: border-box; }
      body { font-family: Sarabun, sans-serif; font-size: 12px; margin: 16px; color: #1f2937; }
      h2 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
      p { font-size: 12px; color: #6b7280; margin: 2px 0 12px; }
      table { width: 100%; border-collapse: collapse; font-size: 11px; margin: 8px 0; }
      th, td { border: 1px solid #d1d5db; padding: 5px 8px; text-align: center; }
      th { background: #f3f4f6; font-weight: 600; }
      td:first-child { text-align: left; }
      .bg-emerald-50,.bg-emerald-100 { background: #d1fae5 !important; }
      .bg-amber-50,.bg-amber-100 { background: #fef3c7 !important; }
      .bg-red-50,.bg-red-100 { background: #fee2e2 !important; }
      .bg-indigo-50 { background: #e0e7ff !important; }
      .bg-gray-50,.bg-gray-100 { background: #f9fafb !important; }
      .hidden { display: none !important; }
      @media print { @page { margin: 10mm; } body { margin: 0; } }
    </style>
  </head><body>
    <h2>ติดตามความคืบหน้า — ${n}</h2>
    <p>โรงเรียน: ${e.samaiSchoolName??e.schoolName??""} &nbsp;·&nbsp; ภาค ${e.semester??"—"}/${e.academicYear??"—"} &nbsp;·&nbsp; พิมพ์: ${new Date().toLocaleDateString("th-TH")}</p>
    ${i}
  </body></html>`;la(w,{autoprint:!0})}function Qr(e,s,n){var y;const r={};for(const t of(s==null?void 0:s.homerooms)??[])t.main_room&&(r[t.main_room]=((y=t.teachers)==null?void 0:y.full_name)??"—");if(e==="prayer"){const{roomStudents:t,weekRoomRec:d,W:p}=s??{};if(!t)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const b=Object.keys(t).sort((C,x)=>C.localeCompare(x,void 0,{numeric:!0})).filter(C=>{var _,q;const x=t[C].length;return x?(((q=(_=d[C])==null?void 0:_[p-1])==null?void 0:q.size)??0)<x:!1});return b.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${b.map((C,x)=>{var A,I;const _=t[C].length,q=((I=(A=d[C])==null?void 0:A[p-1])==null?void 0:I.size)??0;return`<tr>
        <td>${x+1}</td>
        <td>${r[C]??"—"}</td>
        <td>${C}</td>
        <td>${_}</td>
        <td>${q}</td>
        <td style="color:#dc2626">${_-q}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(p??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:c,scored:i}=s??{};if(!c)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const a=Object.keys(c).sort((t,d)=>t.localeCompare(d,void 0,{numeric:!0})).filter(t=>{const d=c[t]??[];return d.length>0&&!d.every(p=>i.has(p.id??p))});return a.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${a.map((t,d)=>{const p=c[t]??[],l=p.filter(b=>i.has(b.id??b)).length;return`<tr>
      <td>${d+1}</td>
      <td>${r[t]??"—"}</td>
      <td>${t}</td>
      <td>${p.length}</td>
      <td>${l}</td>
      <td style="color:#dc2626">${p.length-l}</td>
    </tr>`}).join("")}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${n.semester??"—"}/${n.academicYear??"—"} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'}function Xr(e,s,n){const r={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,c=new Date,i=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],w=`${c.getDate()} ${i[c.getMonth()]} ${c.getFullYear()+543}`,a=e.samaiSchoolName??e.schoolName??"โรงเรียน",h=Qr(s,n,e),y=`<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>บันทึกข้อความ — ${r}</title>
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'TH Sarabun New', Sarabun, sans-serif; font-size: 16pt; margin: 25.4mm 25.4mm 25.4mm 30mm; color: #000; line-height: 1.8; }
      .doc-title { text-align: center; font-size: 18pt; font-weight: bold; margin-bottom: 6px; border-bottom: 2px solid #000; padding-bottom: 6px; }
      .doc-school { text-align: center; font-size: 14pt; margin-bottom: 20px; }
      .fields { margin-bottom: 16px; }
      .field { display: flex; margin-bottom: 6px; }
      .field-label { min-width: 90px; font-weight: bold; }
      .field-val { flex: 1; border-bottom: 1px dotted #999; padding-bottom: 2px; }
      p.indent { text-indent: 2.5em; margin: 8px 0; }
      table { width: 100%; border-collapse: collapse; font-size: 13pt; margin: 12px 0; }
      th, td { border: 1px solid #333; padding: 5px 10px; text-align: center; }
      th { background: #e5e5e5; font-weight: bold; }
      td:nth-child(2) { text-align: left; }
      td:nth-child(3) { text-align: left; }
      .sign-block { margin-top: 48px; text-align: center; float: right; width: 280px; }
      .sign-line { border-bottom: 1px solid #000; width: 240px; margin: 0 auto 4px; height: 28px; }
      @media print { @page { size: A4; margin: 20mm 20mm 20mm 25mm; } body { margin: 0; } }
    </style>
  </head><body>
    <div class="doc-title">บันทึกข้อความ</div>
    <div class="doc-school">${a}</div>
    <div class="fields">
      <div class="field"><span class="field-label">ที่&nbsp;&nbsp;</span><span class="field-val">&nbsp;</span></div>
      <div class="field"><span class="field-label">วันที่&nbsp;&nbsp;</span><span class="field-val">${w}</span></div>
      <div class="field"><span class="field-label">เรื่อง&nbsp;&nbsp;</span><span class="field-val">รายงานความคืบหน้าการบันทึกข้อมูล${r} ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"}</span></div>
      <div class="field"><span class="field-label">เรียน&nbsp;&nbsp;</span><span class="field-val">ผู้อำนวยการโรงเรียน${a}</span></div>
    </div>
    <hr style="border:none;border-top:1px solid #ccc;margin:12px 0"/>
    <p class="indent">ตามที่โรงเรียน${a} ได้ใช้ระบบ ปพ.5 ออนไลน์ ในการบันทึกข้อมูล${r}ของนักเรียน
ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"} นั้น</p>
    <p class="indent">บัดนี้ ฝ่ายวิชาการได้ตรวจสอบสถานะการดำเนินงาน ณ วันที่ ${w}
พบว่ายังมีครูที่ปรึกษาบางห้องที่ยังไม่ได้ดำเนินการกรอกข้อมูล ดังรายละเอียดต่อไปนี้</p>
    ${h}
    <p class="indent">จึงเรียนมาเพื่อโปรดทราบ และขอให้ผู้เกี่ยวข้องเร่งดำเนินการกรอกข้อมูลให้แล้วเสร็จ
ภายในระยะเวลาที่กำหนด หากมีข้อสงสัยประการใดโปรดติดต่อฝ่ายวิชาการโดยตรง</p>
    <div class="sign-block">
      <p style="margin:0 0 4px">ลงชื่อ</p>
      <div class="sign-line"></div>
      <p style="margin:0">(....................................)</p>
      <p style="margin:4px 0 0">ตำแหน่ง .....................................</p>
      <p style="margin:4px 0 0">${w}</p>
    </div>
    <div style="clear:both"></div>
  </body></html>`,t=new Blob(["\uFEFF"+y],{type:"application/msword;charset=utf-8"}),d=URL.createObjectURL(t),p=document.createElement("a");p.href=d,p.download=`บันทึกข้อความ_${r}_${e.academicYear??new Date().getFullYear()+543}.doc`,p.click(),setTimeout(()=>URL.revokeObjectURL(d),2e3)}async function ba(){var e;re("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const s=await ge(),n=me(s.map(w=>w.dept)),r=me(s.map(w=>w.skill_group));ne(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">จัดการบัญชีและแผนกของครูในระบบ</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="teacher-export-csv"
            class="text-xs font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition">
            ⬇️ ดาวน์โหลด CSV
          </button>
          <button onclick="openTeacherModal()"
            class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
            <span>＋</span> เพิ่มครูใหม่
          </button>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${$e} flex-1 min-w-40" />
          <select id="tf-dept" class="${ce}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${n.map(w=>`<option value="${w}">${w}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${ce}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${r.map(w=>`<option value="${w}">${w}</option>`).join("")}
          </select>
          <select id="tf-subg" class="${ce}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${ce}">
            <option value="">ทุกประเภท</option>
            <option value="ครู">ครู</option>
            <option value="บุคลากร">บุคลากร</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="tf-count" class="font-semibold text-indigo-600">${s.length}</span> / ${s.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="teacher-table-wrap"></div>
      </div>
    </div>`),Ve(s);let c=s;window._impersonateTeacher=async w=>{const a=s.find(h=>h.id===w);if(!a){T("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:h}=await se(async()=>{const{startImpersonation:y}=await import("./impersonation-0xVfgYVY.js");return{startImpersonation:y}},[]);await h(le,a),window.location.href="teacher.html"}catch(h){console.error("Cannot start impersonation:",h);const y=/function|schema cache|start_admin_impersonation|edge/i.test((h==null?void 0:h.message)||"");T(y?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(h==null?void 0:h.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const i=()=>{const w=document.getElementById("tf-q").value.toLowerCase(),a=document.getElementById("tf-dept").value,h=document.getElementById("tf-skill").value,y=document.getElementById("tf-subg").value,t=document.getElementById("tf-type").value,d=s.filter(p=>(!w||[p.full_name,p.teacher_code,p.dept,p.skill_group].some(l=>(l??"").toLowerCase().includes(w)))&&(!a||p.dept===a)&&(!h||p.skill_group===h)&&(!y||p.subject_group===y)&&(!t||p.staff_type===t));document.getElementById("tf-count").textContent=d.length,c=d,Ve(d)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(w=>{var a,h;(a=document.getElementById(w))==null||a.addEventListener("input",i),(h=document.getElementById(w))==null||h.addEventListener("change",i)}),(e=document.getElementById("teacher-export-csv"))==null||e.addEventListener("click",()=>{const w=l=>["ACDMVOC","AGMVOC"].includes(l.subject_group)?"ปวช":l.category==="ศาสนา"?"ศาสนา":l.category==="สามัญ"||l.subject_group?"สามัญ":"-",a=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],h=c.map((l,b)=>[b+1,l.teacher_code??"",l.full_name??"",w(l),l.phone??""]),y="\uFEFF"+[a,...h].map(l=>l.map(b=>`"${String(b).replace(/"/g,'""')}"`).join(",")).join(`
`),t=new Blob([y],{type:"text/csv;charset=utf-8"}),d=URL.createObjectURL(t),p=document.createElement("a");p.href=d,p.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(p),p.click(),p.remove(),URL.revokeObjectURL(d),T("ดาวน์โหลด CSV แล้ว ✅","success")})}catch{T("โหลดข้อมูลครูไม่สำเร็จ","error")}}function Ve(e){const s=document.getElementById("teacher-table-wrap");if(!s)return;if(e.length===0){s.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">👩‍🏫</p>
      <p class="font-medium">ยังไม่มีครูในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มครูใหม่" เพื่อเริ่มต้น</p>
    </div>`;return}const n=r=>r?`<span class="px-2 py-0.5 rounded-full text-xs font-medium ${{สามัญ:"bg-blue-50 text-blue-700",ศาสนา:"bg-amber-50 text-amber-700"}[r]??""}">${r}</span>`:"—";s.innerHTML=`
    <div class="overflow-x-auto"><table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-4 py-3 text-left">ชื่อ - นามสกุล</th>
          <th class="px-4 py-3 text-left hidden sm:table-cell">รหัส</th>
          <th class="px-4 py-3 text-center hidden md:table-cell">กลุ่มสาระ</th>
          <th class="px-4 py-3 text-center hidden md:table-cell">กลุ่มวิชา</th>
          <th class="px-4 py-3 text-center hidden lg:table-cell">ประเภท</th>
          <th class="px-4 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${e.map(r=>{r.teachers_quota;const c=(r.full_name??"?").charAt(0).toUpperCase();return`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                ${r.image_url?`<img src="${r.image_url}" alt="" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 text-white
                                flex items-center justify-center font-bold text-sm flex-shrink-0">${c}</div>`}
                <div>
                  <p class="font-semibold text-gray-800">${r.full_name??"—"}</p>
                  <p class="text-xs text-gray-400">${r.phone??""}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">${r.teacher_code??"—"}</td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${r.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${r.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${r.subject_group?`<span class="px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 font-mono">${r.subject_group}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden lg:table-cell">
              ${n(r.category)}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._adminViewSchedule(${r.id},'${_e(r.full_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>
              <button onclick="window._impersonateTeacher(${r.id})"
                class="text-xs text-orange-500 hover:text-orange-700 font-medium mr-3">🎭 สวมบทบาท</button>
              <button onclick="openTeacherModal(${r.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="handleDeleteTeacher(${r.id}, '${r.full_name}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table></div>`}async function at(){re("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const e=await pe().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),n=parseInt(e.semester??1),[r,c,i,w]=await Promise.all([ge(),ts(s,n).catch(()=>[]),Ee().catch(()=>[]),rt().catch(()=>[])]),a=new Set(c),h=i.filter(o=>o.status==="approved"),y=new Map;w.forEach(o=>{var v;const u=(v=o.master_subjects)==null?void 0:v.teacher_id;u&&y.set(u,(y.get(u)??0)+1)});const t=o=>{const u=o.teachers_quota,v=y.get(o.id)??(u==null?void 0:u.total_classes_created)??0,B=h.filter(N=>{var O;return((O=N.teachers)==null?void 0:O.id)===o.id}),M=B.filter(N=>N.package_type==="per_subject").reduce((N,O)=>N+(parseInt(O.room_count??1)||1),0),S=B.some(N=>N.package_type==="semester")||(u==null?void 0:u.package_type)==="semester",j=(u==null?void 0:u.is_paid)&&!(u!=null&&u.package_type)&&!S&&!M,R=parseInt(e.freeClassQuota??2);return S||j?{label:S?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${v} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:M>0?{label:`รายห้อง ${M} ห้อง`,detail:`ใช้แล้ว ${v}/${R+M} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${v}/${R} ห้อง`,cls:v>=R?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},d=r.filter(o=>o.profile_id),p=r.filter(o=>!o.profile_id),l=d.filter(o=>a.has(o.id)),b=d.filter(o=>!a.has(o.id)),$=(o,u,v,B)=>`<button type="button" data-rt-tab="${o}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${B} flex items-center justify-center text-xl font-bold">${v}</div>
        <p class="text-sm text-gray-500">${u}</p>
      </button>`,C=[...new Set(r.map(o=>o.dept).filter(Boolean))].sort(),x={};for(const o of r){const u=(o.full_name??"").toLowerCase().replace(/\s+/g,"");u&&(x[u]||(x[u]=[]),x[u].push(o))}const _=Object.values(x).filter(o=>o.length>1).map(o=>o.slice().sort((u,v)=>(u.registered_at??"")<(v.registered_at??"")?-1:1));ne(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${$("all","ทั้งหมด",r.length,"bg-indigo-100 text-indigo-700")}
        ${$("registered","มีบัญชีแล้ว",d.length,"bg-emerald-100 text-emerald-700")}
        ${$("unregistered","ยังไม่ลงทะเบียน",p.length,"bg-amber-100 text-amber-700")}
        ${$("duplicates","บัญชีซ้ำ",_.length,_.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${$("scheduled","สร้างตารางสอนแล้ว",l.length,"bg-green-100 text-green-700")}
        ${$("unscheduled","ยังไม่สร้างตารางสอน",b.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${$e} flex-1 min-w-40" />
          <select id="rt-cat" class="${ce}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${ce}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${C.map(o=>`<option value="${o}">${o}</option>`).join("")}
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="rt-count" class="font-semibold text-indigo-600">${r.length}</span>
          / ${r.length} รายการ
        </p>
      </div>

      <!-- Table (hidden when showing duplicates) -->
      <div id="rt-main-section">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div id="reg-teacher-table"></div>
        </div>
      </div>

      <!-- Duplicate accounts section -->
      <div id="rt-duplicates-section" class="hidden space-y-4">
        <div class="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-sm text-red-700">
          ⚠️ พบชื่อครูที่ซ้ำกันในระบบ กรุณาตรวจสอบและเลือก <strong>บัญชีที่ต้องการเก็บไว้</strong>
          ระบบจะย้ายข้อมูลทั้งหมด (คอร์ส, ตารางสอน, ห้องเรียน) ไปยังบัญชีนั้น แล้วลบอีกบัญชีออก
        </div>
        <div id="rt-dup-list" class="space-y-4"></div>
      </div>
    </div>`);let q=r,A="all",I=null;const L=()=>{document.querySelectorAll("[data-rt-tab]").forEach(o=>{var v;const u=o.dataset.rtTab===A||o.dataset.rtTab===I;o.classList.toggle("border-emerald-400",u),o.classList.toggle("bg-emerald-50",u),o.classList.toggle("shadow-lg",u),o.classList.toggle("shadow-emerald-100",u),o.classList.toggle("ring-2",u),o.classList.toggle("ring-emerald-200",u),o.classList.toggle("border-gray-100",!u),(v=o.querySelector("p"))==null||v.classList.toggle("text-emerald-700",u)})},E=o=>y.get(o.id)??0,H=o=>a.has(o.id)?"✓":"—",k=()=>{const o=document.getElementById("rt-dup-list");if(o){if(!_.length){o.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}o.innerHTML=_.map((u,v)=>{const B=u.map((S,j)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${j===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${v}" value="${S.id}"
              class="mt-1 accent-emerald-600" ${j===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${S.image_url?`<img src="${S.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${he(S.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${S.teacher_code??"—"}</span>
                ${S.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${E(S)}</span>
                <span>🗓️ ตาราง ${H(S)}</span>
                ${S.login_email?`<span>✉️ ${he(S.login_email)}</span>`:""}
                ${S.registered_at?`<span>📅 ${new Date(S.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${S.id}</span>
              </div>
            </div>
          </label>`).join(""),M=u.map(S=>S.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${v}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${v+1} — ${he(u[0].full_name??"")}
              <span class="ml-2 text-red-500">(${u.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${B}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${v},'${M}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(o,u)=>{var R;const v=u.split(",").map(Number),B=Number((R=document.querySelector(`input[name="dup-keep-${o}"]:checked`))==null?void 0:R.value);if(!B){T("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const M=v.filter(N=>N!==B);if(!M.length){T("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const S=r.find(N=>N.id===B);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${S==null?void 0:S.full_name} (ID ${B})
ลบ: ID ${M.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const j=document.querySelector(`[data-dup-group="${o}"] button`);j&&(j.disabled=!0,j.textContent="⏳ กำลังรวม...");try{for(const N of M)await as(B,N);T(`รวมบัญชีสำเร็จ — เหลือ ID ${B}`,"success"),at()}catch(N){T("เกิดข้อผิดพลาด: "+ae(N),"error"),j&&(j.disabled=!1,j.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const m=o=>{var v,B,M,S;const u=o==="duplicates";if((v=document.getElementById("rt-main-section"))==null||v.classList.toggle("hidden",u),(B=document.getElementById("rt-duplicates-section"))==null||B.classList.toggle("hidden",!u),(M=document.getElementById("rt-schedule-stats"))==null||M.classList.toggle("hidden",!0),u){A="duplicates",I=null,L(),k();return}o==="scheduled"||o==="unscheduled"?(A="registered",I=o):(A=o,I=null),q=A==="registered"?d:A==="unregistered"?p:r,(S=document.getElementById("rt-schedule-stats"))==null||S.classList.toggle("hidden",A!=="registered"),L(),g()},f=o=>{const u=document.getElementById("reg-teacher-table");if(u){if(!o.length){u.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`;return}u.innerHTML=`
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <tr>
                <th class="px-5 py-3 text-left">ครู / บุคลากร</th>
                <th class="px-4 py-3 text-left hidden sm:table-cell">รหัส</th>
                <th class="px-4 py-3 text-center hidden md:table-cell">ประเภท</th>
                <th class="px-4 py-3 text-left hidden lg:table-cell">แพ็กเกจ / โควตา</th>
                <th class="px-4 py-3 text-center">สถานะบัญชี</th>
                <th class="px-4 py-3 text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${o.map(v=>{const B=(v.full_name??"?").charAt(0).toUpperCase(),M=!!v.profile_id,S=a.has(v.id),j=t(v);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${v.image_url?`<img src="${v.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${M?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${B}</div>`}
                      <div>
                        <p class="font-semibold text-gray-800">${v.full_name??"—"}</p>
                        <p class="text-xs text-gray-400">${v.dept??""}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">
                    ${v.teacher_code??"—"}
                  </td>
                  <td class="px-4 py-3 text-center hidden md:table-cell">
                    ${v.category?`<span class="px-2 py-0.5 rounded-full text-xs font-medium
                            ${v.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">
                          ${v.category}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
                  </td>
                  <td class="px-4 py-3 hidden lg:table-cell">
                    <span class="inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${j.cls}">
                      ${j.label}
                    </span>
                    <p class="text-[11px] text-gray-400 mt-1">${j.detail}</p>
                  </td>
                  <td class="px-4 py-3 text-center">
                    ${M?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`:`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`}
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${M?`<button onclick="window._adminViewSchedule(${v.id},'${_e(v.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${S?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${v.id}, '${_e(v.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},g=()=>{var S,j,R;const o=(((S=document.getElementById("rt-q"))==null?void 0:S.value)??"").toLowerCase(),u=((j=document.getElementById("rt-cat"))==null?void 0:j.value)??"",v=((R=document.getElementById("rt-dept"))==null?void 0:R.value)??"",B=q.filter(N=>(!o||[N.full_name,N.teacher_code].some(O=>(O??"").toLowerCase().includes(o)))&&(!u||N.category===u)&&(!v||N.dept===v)&&(!I||(I==="scheduled"?a.has(N.id):!a.has(N.id)))),M=document.getElementById("rt-count");M&&(M.textContent=B.length),f(B)};document.querySelectorAll("[data-rt-tab]").forEach(o=>{o.addEventListener("click",()=>m(o.dataset.rtTab))}),m("all"),["rt-q","rt-cat","rt-dept"].forEach(o=>{var u,v;(u=document.getElementById(o))==null||u.addEventListener("input",g),(v=document.getElementById(o))==null||v.addEventListener("change",g)}),window.handleUnlinkTeacher=async(o,u)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${u}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await ns(o),T(`ยกเลิกบัญชี "${u}" แล้ว`,"success"),at()}catch(v){T("เกิดข้อผิดพลาด: "+ae(v),"error")}}}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}}async function Tt(){re("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",ne(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ห้องเรียนที่สร้างโดยครูในระบบ</p>
      </div>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="class-list">
        <div class="flex items-center justify-center py-16 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          กำลังโหลด...
        </div>
      </div>
    </div>
  </div>`);try{const[e,s]=await Promise.all([rt(),ge().catch(()=>[])]),n=Object.fromEntries(s.map(c=>[c.id,c])),r=document.getElementById("class-list");if(e.length===0){r.innerHTML=`<div class="text-center py-16 text-gray-400">
        <p class="text-4xl mb-3">🏫</p><p class="font-medium">ยังไม่มีห้องเรียนในระบบ</p>
      </div>`;return}r.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้องเรียน</th>
          <th class="px-5 py-3 text-left hidden sm:table-cell">วิชา</th>
          <th class="px-5 py-3 text-left hidden md:table-cell">กลุ่มทักษะ</th>
          <th class="px-5 py-3 text-left hidden lg:table-cell">Google Sheet</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${e.map(c=>{var i,w;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4 font-semibold text-gray-800">${c.class_name??"—"}</td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            ${c.master_subjects?`<span class="font-mono text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded mr-1">${c.master_subjects.subject_code??"—"}</span>${c.master_subjects.subject_name??"—"}`:"—"}
          </td>
          <td class="px-5 py-4 hidden md:table-cell">
            <span class="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">${c.skill_group??"—"}</span>
          </td>
          <td class="px-5 py-4 text-xs text-gray-400 hidden lg:table-cell font-mono">
            ${c.google_sheet_id?`<span class="truncate block max-w-[160px]">${c.google_sheet_id}</span>`:"—"}
          </td>
          <td class="px-5 py-4 text-right whitespace-nowrap">
            ${(i=c.master_subjects)!=null&&i.teacher_id?`<button onclick="window._adminViewSchedule(${c.master_subjects.teacher_id},'${_e(((w=n[c.master_subjects.teacher_id])==null?void 0:w.full_name)??c.master_subjects.subject_name??c.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${c.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${c.id},'${(c.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(e.map(c=>[c.id,c])),window._adminEditClass=c=>{var w;const i=(w=window._adminClassCache)==null?void 0:w[c];i&&ia(null,i)},window._adminDeleteClass=async(c,i)=>{if(confirm(`ยืนยันลบห้องเรียน "${i}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await na(c),T(`ลบห้องเรียน "${i}" แล้ว`,"success"),Tt()}catch(w){T("ลบไม่สำเร็จ: "+ae(w),"error")}}}catch{T("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function ya(){re("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let h=function(t,d,p){var b;(b=document.getElementById("stu-modal"))==null||b.remove();const l=document.createElement("div");l.id="stu-modal",l.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",l.innerHTML=`
        <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
            <h3 class="font-bold text-gray-800">แก้ไขข้อมูลนักเรียน</h3>
            <button id="stu-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="overflow-auto flex-1 px-5 py-4">
            <form id="stu-form" class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">รหัสนักเรียน</label>
                  <input id="sf-code" type="text" value="${t.student_code??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">เพศ</label>
                  <select id="sf-gender-val" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-white">
                    <option value="">—</option>
                    <option value="ชาย" ${t.gender==="ชาย"?"selected":""}>ชาย</option>
                    <option value="หญิง" ${t.gender==="หญิง"?"selected":""}>หญิง</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
                <input id="sf-name" type="text" value="${t.full_name??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องสามัญ</label>
                  <input id="sf-main-room" type="text" value="${t.main_room??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องศาสนา</label>
                  <input id="sf-rel-room" type="text" value="${t.religion_room??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ประจำสี</label>
                  <input id="sf-house-color" type="text" value="${t.house_color??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ไซด์เสื้อกีฬาสี</label>
                  <input id="sf-shirt-size" type="text" value="${t.sports_shirt_size??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
              </div>
              
              <!-- Auth Accounts Section -->
              <div class="border-t border-gray-100 my-4 pt-3">
                <p class="text-xs font-bold text-indigo-600 mb-2 flex items-center gap-1">🔒 บัญชีผู้ใช้งานนักเรียน</p>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">อีเมลเข้าใช้งาน (แก้ไขกู้คืน)</label>
                    <input id="sf-auth-email" type="email" value="${t.profile_id?d:`stu${t.student_code}@student.pp5.local`}"
                      class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-gray-50 text-gray-600" />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">${t.profile_id?"ตั้งรหัสผ่านใหม่ (ระบุเมื่อต้องการเปลี่ยน)":"ตั้งรหัสผ่านเริ่มต้น (จะเปิดบัญชีให้อัตโนมัติ)"}</label>
                    <div class="flex gap-2">
                      <input id="sf-auth-pw" type="text" placeholder="อย่างน้อย 6 ตัวอักษร"
                        class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                      <button type="button" id="sf-auth-pw-fill" title="ใช้รหัสนักเรียนเป็นรหัสผ่าน"
                        class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition whitespace-nowrap">
                        🔄 = รหัสนักเรียน
                      </button>
                    </div>
                    <p class="text-[11px] text-gray-400 mt-1">
                      ${t.profile_id?"กรอกแล้วกดบันทึก จะเปลี่ยนรหัสผ่านทันที นักเรียนใช้ชุดใหม่นี้เข้าระบบครั้งถัดไปได้เลย":"นักเรียนคนนี้ยังไม่เคยเปิดบัญชี — ระบุรหัสผ่านแล้วกดบันทึก ระบบจะสร้างบัญชีให้อัตโนมัติ ไม่ต้องรอนักเรียนเปิดเอง"}
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex gap-3 pt-2">
                <button type="button" id="stu-cancel"
                  class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  ยกเลิก
                </button>
                <button id="stu-save" type="submit"
                  class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
                  บันทึก
                </button>
              </div>
            </form>
          </div>
        </div>`,document.body.appendChild(l),l.querySelector("#stu-close").addEventListener("click",()=>l.remove()),l.querySelector("#stu-cancel").addEventListener("click",()=>l.remove()),l.addEventListener("click",$=>{$.target===l&&l.remove()}),l.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{l.querySelector("#sf-auth-pw").value=l.querySelector("#sf-code").value.trim()}),l.querySelector("#stu-form").addEventListener("submit",async $=>{$.preventDefault();const C=l.querySelector("#stu-save");C.disabled=!0,C.textContent="กำลังบันทึก...";try{const x={student_code:l.querySelector("#sf-code").value.trim()||null,full_name:l.querySelector("#sf-name").value.trim()||null,main_room:l.querySelector("#sf-main-room").value.trim()||null,religion_room:l.querySelector("#sf-rel-room").value.trim()||null,gender:l.querySelector("#sf-gender-val").value||null,house_color:l.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:l.querySelector("#sf-shirt-size").value.trim()||null},_=l.querySelector("#sf-auth-email").value.trim()||null,q=l.querySelector("#sf-auth-pw").value.trim()||null;if(!t.profile_id&&!q){T("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),C.disabled=!1,C.textContent="บันทึก";return}await p(x,_||q?{email:_,password:q}:null),T("บันทึกสำเร็จ","success"),l.remove()}catch(x){T("บันทึกไม่สำเร็จ: "+ae(x),"error")}finally{C.disabled=!1,C.textContent="บันทึก"}})};const e=await Ne(),s=me(e.map(t=>Se(t.main_room))),n=me(e.map(t=>qe(t.main_room))),r=me(e.map(t=>t.house_color)),c=me(e.map(t=>t.sports_shirt_size));ne(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${$e} flex-1 min-w-40" />
          <select id="sf-grade" class="${ce}">
            <option value="">ทุกระดับชั้น</option>
            ${s.map(t=>`<option value="${t}">${t}</option>`).join("")}
          </select>
          <select id="sf-room" class="${ce}">
            <option value="">ทุกห้อง</option>
            ${n.map(t=>`<option value="${t}">ห้อง ${t}</option>`).join("")}
          </select>
          <select id="sf-gender" class="${ce}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <select id="sf-house" class="${ce}">
            <option value="">ทุกสี</option>
            ${r.map(t=>`<option value="${t}">${t}</option>`).join("")}
          </select>
          <select id="sf-shirt" class="${ce}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${c.map(t=>`<option value="${t}">${t}</option>`).join("")}
          </select>
          <select id="sf-page-size" class="${ce}">
            <option value="50">แสดง 50 คน</option>
            <option value="100">แสดง 100 คน</option>
            <option value="500">แสดง 500 คน</option>
            <option value="1000" selected>แสดง 1000 คน</option>
            <option value="all">แสดงทั้งหมด</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          แสดง <span id="sf-showing" class="font-semibold text-indigo-600">${Math.min(e.length,1e3)}</span>
          จาก <span id="sf-count" class="font-semibold text-indigo-600">${e.length}</span>
          / ${e.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="student-table-wrap"></div>
      </div>
    </div>`);let i=Object.fromEntries(e.map(t=>[t.id,t])),w=1e3;const a=t=>{const d=document.getElementById("student-table-wrap"),p=w==="all"?t:t.slice(0,w);if(document.getElementById("sf-count").textContent=t.length,document.getElementById("sf-showing").textContent=p.length,!t.length){d.innerHTML=`<div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">🔍</p><p>ไม่พบข้อมูลที่ค้นหา</p></div>`;return}d.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
          <tr>
            <th class="px-4 py-3 text-left">นักเรียน</th>
            <th class="px-4 py-3 text-left">รหัส</th>
            <th class="px-4 py-3 text-center">ชั้นสามัญ</th>
            <th class="px-4 py-3 text-center hidden sm:table-cell">ชั้นศาสนา</th>
            <th class="px-4 py-3 text-center hidden md:table-cell">เพศ</th>
            <th class="px-4 py-3 text-center hidden lg:table-cell">ประจำสี</th>
            <th class="px-4 py-3 text-center hidden lg:table-cell">ไซด์เสื้อ</th>
            <th class="px-4 py-3 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${p.map(l=>`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${l.image_url?`<img src="${l.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(l.full_name??"?").charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${l.full_name??"—"}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${l.student_code??"—"}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${l.main_room??"—"}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${l.religion_room?`<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${l.religion_room}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${l.gender??"—"}</td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${l.house_color?`<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${l.house_color}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${l.sports_shirt_size?`<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${l.sports_shirt_size}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${l.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${l.id},'${(l.full_name??"").replace(/'/g,"")}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      ${p.length<t.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(t,d)=>{if(confirm(`ยืนยันลบนักเรียน "${d}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await wn(t),delete i[t],e.splice(e.findIndex(p=>p.id===t),1),T(`ลบ "${d}" แล้ว`,"success"),y()}catch(p){T("ลบไม่สำเร็จ: "+ae(p),"error")}},window._editStudent=async t=>{const d=i[t];if(!d)return;let p="";try{const{data:l,error:b}=await le.rpc("lookup_student_by_code",{p_student_code:d.student_code});!b&&l&&l[0]&&(p=l[0].login_email||"")}catch(l){console.error(l)}h(d,p,async(l,b)=>{if(await $n(t,l),b&&(b.email||b.password)){const{error:$}=await le.rpc("admin_update_student_auth",{p_student_id:t,p_new_email:b.email||null,p_new_password:b.password||null});if($)throw $}Object.assign(d,l),i[t]=d,y()})},a(e);const y=()=>{const t=document.getElementById("sf-q").value.toLowerCase(),d=document.getElementById("sf-grade").value,p=document.getElementById("sf-room"),l=p.value,b=me(e.filter(A=>!d||Se(A.main_room)===d).map(A=>qe(A.main_room)));b.includes(l)||(p.value=""),p.innerHTML='<option value="">ทุกห้อง</option>'+b.map(A=>`<option value="${A}" ${A===p.value?"selected":""}>ห้อง ${A}</option>`).join("");const $=p.value,C=document.getElementById("sf-gender").value,x=document.getElementById("sf-house").value,_=document.getElementById("sf-shirt").value,q=document.getElementById("sf-page-size").value;w=q==="all"?"all":Number(q),a(e.filter(A=>(!t||[A.full_name,A.student_code,A.main_room,A.religion_room].some(I=>(I??"").toLowerCase().includes(t)))&&(!d||Se(A.main_room)===d)&&(!$||qe(A.main_room)===$)&&(!C||A.gender===C)&&(!x||A.house_color===x)&&(!_||A.sports_shirt_size===_)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(t=>{var d,p;(d=document.getElementById(t))==null||d.addEventListener("input",y),(p=document.getElementById(t))==null||p.addEventListener("change",y)})}catch{T("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function Zr(){const{getCommentPhrases:e,addCommentPhrase:s,updateCommentPhrase:n,deleteCommentPhrase:r}=await se(async()=>{const{getCommentPhrases:y,addCommentPhrase:t,updateCommentPhrase:d,deleteCommentPhrase:p}=await import("./api-CWYJTdOa.js");return{getCommentPhrases:y,addCommentPhrase:t,updateCommentPhrase:d,deleteCommentPhrase:p}},__vite__mapDeps([0,1,2,3,4])),c=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],i={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},w={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a=document.createElement("div");a.style.cssText="padding:4px 0;";async function h(){const y=await e().catch(()=>[]);a.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${c.map(t=>{const d=y.filter(p=>p.metric===t.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${i[t.key]};color:${w[t.key]};padding:3px 12px;border-radius:20px;">${t.label}</span>
            <button class="ph-add-btn" data-metric="${t.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${d.map(p=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f9fafb;border-radius:8px;">
                <input class="ph-edit-inp" data-id="${p.id}" value="${p.phrase.replace(/"/g,"&quot;")}"
                  style="flex:1;border:none;background:transparent;font-size:13px;font-family:inherit;outline:none;"/>
                <button class="ph-save-btn" data-id="${p.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #059669;border-radius:6px;background:#d1fae5;color:#065f46;cursor:pointer;font-family:inherit;white-space:nowrap;">
                  บันทึก
                </button>
                <button class="ph-del-btn" data-id="${p.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:6px;background:#fee2e2;color:#dc2626;cursor:pointer;font-family:inherit;">
                  ลบ
                </button>
              </div>`).join("")}
            ${d.length?"":'<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>'}
          </div>
        </div>`}).join("")}
    `,a.querySelectorAll(".ph-add-btn").forEach(t=>{t.onclick=async()=>{const d=prompt("พิมพ์ประโยคใหม่:");d!=null&&d.trim()&&(await s(t.dataset.metric,d.trim()),h())}}),a.querySelectorAll(".ph-save-btn").forEach(t=>{t.onclick=async()=>{const d=a.querySelector(`.ph-edit-inp[data-id="${t.dataset.id}"]`);await n(parseInt(t.dataset.id),d.value.trim()),t.textContent="✓",setTimeout(()=>t.textContent="บันทึก",1e3)}}),a.querySelectorAll(".ph-del-btn").forEach(t=>{t.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await r(parseInt(t.dataset.id)),h())}})}return await h(),a}async function fa(){re("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",ne(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[e,s,n]=await Promise.all([pe(),Be().catch(()=>[]),Zn().catch(()=>[])]);e.feedbackQuotaTeacher=e.feedbackQuotaTeacher||"5",e.feedbackQuotaStudent=e.feedbackQuotaStudent||"3",e.freeAttendanceScanLimit=e.freeAttendanceScanLimit||"2",e.freeRandomPickerLimit=e.freeRandomPickerLimit||"1",e.freeTimerLimit=e.freeTimerLimit||"1",e.freeDashboardLimit=e.freeDashboardLimit||"0",e.freePromptAiLimit=e.freePromptAiLimit||"1";const r=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],c=[...new Set([...r,...s.map(p=>p.dept_code).filter(Boolean),...n.map(p=>p.dept).filter(Boolean)])].sort(),i={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},w="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(p,l,b)=>{var x,_,q,A,I;const $=(_=(x=document.getElementById(l))==null?void 0:x.value)==null?void 0:_.trim(),C=document.getElementById(b);if(!$){C.textContent="⚠️ ยังไม่ได้ใส่ Key",C.className="text-xs text-amber-500 font-medium";return}p.textContent="⏳",p.disabled=!0;try{const L=((A=(q=document.getElementById("cfg-geminiModel"))==null?void 0:q.value)==null?void 0:A.trim())||"gemini-1.5-flash",E=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${L}:generateContent?key=${$}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if(E.ok)C.textContent="✅ ใช้งานได้",C.className="text-xs text-emerald-600 font-semibold";else{const k=((I=(await E.json().catch(()=>({}))).error)==null?void 0:I.message)??`HTTP ${E.status}`;C.textContent=`❌ ${k.slice(0,60)}`,C.className="text-xs text-red-500 font-medium"}}catch{C.textContent="❌ เชื่อมต่อไม่ได้",C.className="text-xs text-red-500 font-medium"}p.textContent="ทดสอบ",p.disabled=!1};const a=({key:p,label:l,type:b,options:$,placeholder:C,hint:x,rows:_,syncFrom:q})=>{const A=e[p]??"",I=`id="cfg-${p}" data-key="${p}"`,L=(E,H="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${l}</label>
          ${E}
          ${H?`<p class="text-[11px] text-gray-400 mt-1">${H}</p>`:""}
        </div>`;if(b==="color")return L(`
        <div class="flex items-center gap-3">
          <input type="color" ${I} value="${A||i[p]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${p}-txt" class="text-sm font-mono text-gray-600">${A||i[p]||"#007bff"}</span>
        </div>`,x);if(b==="date")return L(`<input type="date" ${I} value="${A}" class="${w}" />`,x);if(b==="select")return L(`
        <select ${I} class="${w} bg-white">
          ${($??[]).map(E=>{const H=typeof E=="object"?E.value:E,k=typeof E=="object"?E.label:E;return`<option value="${H}" ${H===A?"selected":""}>${k}</option>`}).join("")}
        </select>`,x);if(b==="textarea")return L(`<textarea ${I} rows="${_??3}" placeholder="${C??""}"
          class="${w} resize-none">${A??""}</textarea>`,x);if(b==="upload")return L(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${A?`<img src="${A}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${A?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${p}" />
          </label>
          <input type="hidden" ${I} value="${A}" />
        </div>`,x);if(b==="toggle"){const E=A==="true";return L(`
          <button type="button" ${I} data-on="${E}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${E?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${E?"28":"2"}px)"></span>
          </button>`,x)}if(b==="password"){const E=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(p),H=`const i=document.getElementById('cfg-${p}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,k=E?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${p}','cfg-${p}-st')">ทดสอบ</button>
             <span id="cfg-${p}-st" class="text-xs text-gray-400"></span>`:"";return L(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${I} value="${A}" class="${w} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${H}">ดู</button>
            ${k}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,x)}return L(q?`
        <div class="flex gap-2 items-center">
          <input type="text" ${I} value="${A??""}" placeholder="${C??""}" class="${w} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${q}','${p}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${I} value="${A??""}" placeholder="${C??""}" class="${w}" />`,x)},h=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],y=p=>{const l=(b,$)=>`<div class="mb-6">
          ${b?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${b}</p>`:""}
          ${$.map(a).join("")}
        </div>`;if(p==="general")return[l("ปีการศึกษา",[{key:"semester",label:"ภาคเรียนที่",type:"select",options:["1","2"]},{key:"academicYear",label:"ปีการศึกษา (พ.ศ.)",type:"text",placeholder:"เช่น 2568"}]),`<div id="start-new-semester-box" class="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p class="text-sm font-bold text-amber-900">🔄 ขึ้นภาคเรียนใหม่</p>
          <p class="text-xs text-amber-800 mt-1.5 leading-relaxed">
            สร้างห้องเรียนใหม่ (เปล่า ไม่มีคะแนน/คอลัมน์เดิม) ให้ทุกวิชาที่มีอยู่ในภาคเรียนปัจจุบัน แล้วลงทะเบียนนักเรียนอัตโนมัติตามห้องสามัญ/ห้องศาสนาปัจจุบัน —
            <b>ห้องเรียนของภาคเรียนเก่าจะไม่ถูกลบ</b> ยังแก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ แต่จะไม่โชว์ในหน้า "ห้องเรียนของฉัน" อีกต่อไป (มีปุ่มดูย้อนหลังให้)
          </p>
          <p id="start-new-semester-target" class="text-xs text-amber-700 mt-2 font-mono"></p>
          <button id="btn-start-new-semester" type="button"
            class="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-sm">
            🔄 ขึ้นภาคเรียนใหม่
          </button>
        </div>`,l("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),l("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(p==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map(b=>a({...b,type:"color"})).join("")}
        </div>`;if(p==="school"){const b=($,C)=>[{key:`${$}SchoolName`,label:C.name,type:"text"},{key:`${$}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${$}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${$}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${$}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${$}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${$}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${$}AcademicHeadName`,label:$==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:$==="samai"?"academic_samai":"academic_pvch"},{key:`${$}AcademicHeadSignUrl`,label:$==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${$}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...$==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${$}RegistrarName`,label:$==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:$==="samai"?"registrar_samai":"registrar_pvch"},{key:`${$}RegistrarSignUrl`,label:$==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${$}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...$==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${b("samai",{name:"ชื่อโรงเรียน"}).map(a).join("")}</div>
          <div id="school-porwor" class="hidden">${b("porwor",{name:"ชื่อวิทยาลัย"}).map(a).join("")}</div>`}if(p==="prayer")return[l("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),l("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(p==="contact")return[l("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),l("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},(b,$)=>String($+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},(b,$)=>String($+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(p==="payment")return[l("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),l("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(p==="package"){const $=Array.from({length:5},(q,A)=>{const I=A+1,L=`donationStickerImg${I}`,E=e[L]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${E?`<img src="${E}" class="w-full h-full object-contain" id="sticker-prev-${I}" />`:`<span id="sticker-prev-${I}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${I}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${L}" data-n="${I}" />
              </label>
              ${E?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${L}" data-n="${I}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${L}" value="${E}" />
              ${E?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${E}</p>`:""}
            </div>
          </div>`}).join(""),C=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],x={quota:[l("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),l("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),l("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[l("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),l("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),l("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(q=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${q}">
                  👁️ ระดับ ${q}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const q=String(e.donationSpecialFeatures??"").trim(),I=q?q.split(`
`).filter(Boolean).map(k=>{const m=k.split("|").map(f=>f.trim());return{icon:m[0]||"✨",text:m[1]||"",minTier:parseInt(m[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([k,m,f])=>({icon:k,text:m,minTier:f})),L=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],E=(k,m)=>m?`border:2px solid ${L[k-1]};color:${L[k-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",H=(k,m)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${m}" data-min-tier="${k.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${k.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${k.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(f=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${E(f,k.minTier===f)}" data-n="${f}" title="ระดับ ${f}">${f}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${I.map((k,m)=>H(k,m)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(e.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),l("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${$}</div>
            </div>`,l("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),l("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[l("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[l("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),l("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},_="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${C.map(q=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${q.id===_?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${q.id}">${q.label}</button>`).join("")}
          </div>
          ${C.map(q=>`
          <div id="pkg-panel-${q.id}" ${q.id!==_?'class="hidden"':""}>
            ${x[q.id]??""}
          </div>`).join("")}`}if(p==="student")return[l("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),l("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),l("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),l("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),l("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <p class="text-sm font-semibold text-emerald-900">ซิงก์รายสัปดาห์</p>
              <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
                ปุ่มนี้ใช้ทดสอบซิงก์ทันที ส่วนรันอัตโนมัติรายสัปดาห์ให้ตั้ง trigger ใน Apps Script ที่ฟังก์ชัน <span class="font-mono">runWeeklyStudentSync</span>
              </p>
            </div>
            <button id="btn-download-student-sync-template" type="button"
              class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50 shadow-sm whitespace-nowrap">
              ⬇️ ดาวน์โหลดเท็มเพลท
            </button>
          </div>
          <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
            นำไฟล์เท็มเพลทไปเปิดด้วย Google Sheets แล้วใช้ชีทนั้นเป็นแหล่งซิงก์ได้เลย
          </p>
          <button id="btn-sync-students-now" type="button"
            class="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm">
            🔄 ซิงก์นักเรียนตอนนี้
          </button>
        </div>
        <div id="student-sync-log-section" class="mt-3 rounded-2xl border border-gray-100 bg-white p-4 hidden">
          <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">ประวัติการซิงก์ล่าสุด</p>
          <div id="student-sync-log-content" class="text-sm text-gray-700 space-y-2"></div>
        </div>`].join("");if(p==="sync"){const b=[["classInfoSubjectNameCell","ชื่อรายวิชา"],["classInfoSubjectCodeCell","รหัสวิชา"],["classInfoCreditCell","หน่วยกิต"],["classInfoGradeCell","ชั้นเรียน"],["classInfoHeadStudentCell","หัวหน้าห้อง"],["classInfoDay1Cell","วันสอนคาบ 1"],["classInfoDay2Cell","วันสอนคาบ 2"],["classInfoDay3Cell","วันสอนคาบ 3"],["classInfoDay4Cell","วันสอนคาบ 4"],["classInfoDay5Cell","วันสอนคาบ 5"],["classInfoDay6Cell","วันสอนคาบ 6"],["classInfoTeacherNameCell","ครูผู้สอน"],["classInfoTeacherPhoneCell","เบอร์ติดต่อ"],["classInfoDeptCell","กลุ่มสาระ"],["classInfoHeadDeptCell","หัวหน้าหมวด"]];return`
          ${a({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          ${a({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${b.map(([$,C])=>{const x=e[$]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${C}</p>
                <input type="text" id="cfg-${$}" data-key="${$}" value="${x}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return p==="template"?[l("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${Bs.map(b=>a({key:b.key,label:`${b.category} — ${b.label}`,type:"text",placeholder:b.defaultId,hint:`default: ${b.defaultId}`})).join("")}`].join(""):p==="phrases"?Zr():p==="schedule"?[l("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),l("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),l("Gemini API Key แยกต่อกลุ่มสาระ",c.length?c.map(b=>({key:`geminiKey_${b}`,label:`Key กลุ่มสาระ ${b}`,type:"password",hint:`ครูที่มี dept = ${b} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):p==="council"?[l("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let t="general";ne(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${h.map(p=>`
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${p.id===t?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-tab="${p.id}">
            <span>${p.icon}</span><span class="hidden sm:inline">${p.label}</span>
          </button>`).join("")}
      </div>
      <!-- Panel -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8" id="cfg-panel">
        <div id="cfg-panel-inner"></div>
        <div class="border-t border-gray-100 pt-5 mt-6 flex items-center justify-between">
          <p class="text-xs text-gray-400" id="cfg-save-hint"></p>
          <button id="cfg-save-btn" class="btn-primary px-8 py-2.5 text-white text-sm font-semibold rounded-xl shadow">
            บันทึก
          </button>
        </div>
      </div>
    </div>`);const d=p=>{var f;t=p,document.querySelectorAll(".cfg-tab").forEach(g=>{const o=g.dataset.tab===p;g.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${o?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const l=y(p),b=document.getElementById("cfg-panel-inner");l instanceof Promise?(b.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',l.then(g=>{b.innerHTML="",g instanceof Element?b.appendChild(g):b.innerHTML=g??""})):l instanceof Element?(b.innerHTML="",b.appendChild(l)):b.innerHTML=l??"",document.getElementById("cfg-save-hint").textContent="",document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(g=>{g.addEventListener("input",()=>{const o=document.getElementById(`${g.id}-txt`);o&&(o.textContent=g.value)})});const $=()=>{const o=[...document.querySelectorAll("#feat-editor .feat-row")].map(v=>{var j,R;const B=((j=v.querySelector(".feat-icon"))==null?void 0:j.value.trim())||"✨",M=((R=v.querySelector(".feat-text"))==null?void 0:R.value.trim())||"",S=v.dataset.minTier||"1";return M?`${B}|${M}|${S}`:null}).filter(Boolean).join(`
`),u=document.getElementById("cfg-donationSpecialFeatures");u&&(u.value=o)},C=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],x=g=>{var o,u,v;g.querySelectorAll(".feat-tier-btn").forEach(B=>{B.addEventListener("click",()=>{const M=parseInt(B.dataset.n);g.dataset.minTier=String(M),g.querySelectorAll(".feat-tier-btn").forEach(S=>{const j=parseInt(S.dataset.n);S.style.cssText=j===M?`border:2px solid ${C[j-1]};color:${C[j-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),$()})}),(o=g.querySelector(".feat-icon"))==null||o.addEventListener("input",$),(u=g.querySelector(".feat-text"))==null||u.addEventListener("input",$),(v=g.querySelector(".feat-del"))==null||v.addEventListener("click",()=>{g.remove(),$()})};document.querySelectorAll("#feat-editor .feat-row").forEach(x),(f=document.getElementById("feat-add"))==null||f.addEventListener("click",()=>{var v;const g=document.getElementById("feat-editor");if(!g)return;const o=g.children.length,u=document.createElement("div");u.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",u.dataset.idx=o,u.dataset.minTier="1",u.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(B=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${B===1?`border:2px solid ${C[0]};color:${C[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${B}" title="ระดับ ${B}">${B}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,g.appendChild(u),x(u),(v=u.querySelector(".feat-text"))==null||v.focus()}),document.querySelectorAll(".pkg-stab").forEach(g=>{g.addEventListener("click",()=>{var u;const o=g.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(v=>{v.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${v.dataset.pstab===o?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(v=>v.classList.add("hidden")),(u=document.getElementById(`pkg-panel-${o}`))==null||u.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(g=>{g.addEventListener("change",async o=>{const u=o.target.files[0];if(!u)return;if(u.type!=="image/png"){T("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),g.value="";return}const v=g.dataset.skey,B=g.dataset.n;g.disabled=!0;try{const M=await Ns(v,u),S=document.getElementById(`cfg-${v}`);S&&(S.value=M),await oe(v,M);const j=document.getElementById(`sticker-prev-${B}`);if(j){const R=document.createElement("img");R.src=M,R.className="w-full h-full object-contain",j.replaceWith(R),R.id=`sticker-prev-${B}`}T(`อัปโหลดสติกเกอร์ ${B} สำเร็จ ✅`,"success")}catch(M){T("อัปโหลดไม่สำเร็จ: "+ae(M),"error")}finally{g.disabled=!1}})});const _=g=>{const o=String(g.donationStickerTiers??"").trim(),u=parseInt(g.donationMinAmount??99)||99,v=parseInt(g.donationAmountStep??50)||50;return(o?o.split(`
`).filter(Boolean).map(S=>{const[j,R,N,O,Q]=S.split("|").map(Y=>Y.trim());return{amount:parseInt(j)||0,sticker:R||"🏅",title:N||"",note:O||"",color:Q||""}}).filter(S=>S.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([S,j,R,N,O])=>({amount:S,sticker:j,title:R,note:N,color:O}))).sort((S,j)=>S.amount-j.amount).map((S,j)=>{const R=(g[`donationStickerImg${j+1}`]??"").trim();return R&&/^https?:\/\//.test(R)?{...S,sticker:R}:S})},q=g=>{const o=String(g.donationSpecialFeatures??"").trim(),u=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return o?o.split(`
`).filter(Boolean).map(v=>{const B=v.split("|").map(M=>M.trim());return{icon:B[0]||"✨",text:B[1]||B[0]||v,minTier:parseInt(B[2])||1}}).filter(v=>v.text):u.map(([v,B,M])=>({icon:v,text:B,minTier:M}))},A=(g,o,u,v=4)=>{var Q;(Q=document.getElementById("tier-preview-modal"))==null||Q.remove();const B=g.color||"#f59e0b",M=parseInt(B.slice(1,3),16),S=parseInt(B.slice(3,5),16),j=parseInt(B.slice(5,7),16),R=String(g.sticker??""),N=/^https?:\/\//.test(R)?`<img src="${R}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${R}</div>`,O=document.createElement("div");O.id="tier-preview-modal",O.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",O.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${M},${S},${j},0.85),rgba(${M},${S},${j},1))">
              ${N}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${g.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${g.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${u}
              </div>
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษที่คุณครูได้รับ</p>
                <div class="space-y-1.5">
                  ${o.map(Y=>v>=(Y.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${Y.icon}</span><span>${Y.text}</span></div>`:`<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${Y.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${Y.minTier}+</span></div>`).join("")}
                </div>
              </div>
              ${g.note?`<p class="text-xs text-center text-gray-400 italic">"${g.note}"</p>`:""}
              <p class="text-[10px] text-gray-400 text-center leading-relaxed">
                ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
                คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
              </p>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <p class="text-[10px] text-center text-amber-500 mb-2 font-semibold">🔧 โหมดตัวอย่าง (Admin)</p>
              <button class="w-full py-2.5 rounded-2xl text-white font-bold text-sm"
                style="background:rgba(${M},${S},${j},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(O),O.addEventListener("click",Y=>{Y.target===O&&O.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(g=>{g.addEventListener("click",()=>{const o=parseInt(g.dataset.tier),u={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(j=>{const R=j.id.replace(/^cfg-/,"");u[R]=j.value??j.dataset.on});const v=_(u),B=q(u),M=v[o-1]??v[0];if(!M){T("ยังไม่มีข้อมูล tier","warning");return}const S=(u.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;A(M,B,S,o)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(g=>{g.addEventListener("click",async()=>{const o=g.dataset.skey,u=g.dataset.n;await oe(o,"").catch(()=>{});const v=document.getElementById(`cfg-${o}`);v&&(v.value="");const B=document.getElementById(`sticker-prev-${u}`);B&&(B.outerHTML=`<span id="sticker-prev-${u}" class="text-2xl text-gray-300">🏅</span>`),g.remove(),T("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(g=>{g.addEventListener("click",()=>{const o=g.dataset.stab;document.querySelectorAll(".school-stab").forEach(u=>{u.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${u.dataset.stab===o?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",o!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",o!=="porwor")})});const I=document.getElementById("btn-sync-students-now"),L=document.getElementById("btn-download-student-sync-template");L&&L.addEventListener("click",()=>{const o="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(M=>M.map(S=>`"${String(S).replace(/"/g,'""')}"`).join(",")).join(`
`),u=new Blob([o],{type:"text/csv;charset=utf-8"}),v=URL.createObjectURL(u),B=document.createElement("a");B.href=v,B.download="pp5-students-sync-template.csv",document.body.appendChild(B),B.click(),B.remove(),URL.revokeObjectURL(v),T("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const E=document.getElementById("btn-start-new-semester"),H=document.getElementById("start-new-semester-target");if(E){const g=parseInt(e.semester??1),o=parseInt(e.academicYear??new Date().getFullYear()+543),u=g===1?2:1,v=g===1?o:o+1;H&&(H.textContent=`ตอนนี้: ภาคเรียนที่ ${g}/${o}  →  จะขึ้นเป็น: ภาคเรียนที่ ${u}/${v}`),E.addEventListener("click",async()=>{if(confirm(`ยืนยันขึ้นภาคเรียนที่ ${u}/${v}?

ระบบจะสร้างห้องเรียนใหม่ (เปล่า ไม่มีคะแนน/คอลัมน์เดิม) ให้ทุกวิชาที่มีอยู่ในภาคเรียนที่ ${g}/${o} แล้วลงทะเบียนนักเรียนอัตโนมัติตามห้องสามัญ/ห้องศาสนาปัจจุบัน

ห้องเรียนเทอมเก่าจะไม่ถูกลบ ยังแก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ`)){E.disabled=!0,E.textContent="⏳ กำลังดำเนินการ...";try{const B=await es(v,u);e.semester=String(u),e.academicYear=String(v),T(`ขึ้นภาคเรียนที่ ${u}/${v} สำเร็จ ✅ สร้างห้องเรียนใหม่ ${B.classes_created} ห้อง · ลงทะเบียนนักเรียนอัตโนมัติ ${B.students_enrolled} คน`,"success"),d("general")}catch(B){T("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+ae(B),"error"),E.disabled=!1,E.textContent="🔄 ขึ้นภาคเรียนใหม่"}}})}const k=g=>{const o=document.getElementById("student-sync-log-section"),u=document.getElementById("student-sync-log-content");if(!o||!u)return;const v=new Date(g.synced_at),B=v.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),M=v.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),S=g.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",j=(g.new_students||[]).map(N=>`<span class="text-green-700">${N.full_name} (${N.student_code})</span>`).join(", ")||"—",R=(g.deactivated_students||[]).map(N=>`<span class="text-red-500">${N.full_name} (${N.student_code})</span>`).join(", ")||"—";u.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${B} ${M}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${S}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${g.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${g.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${g.new_count} คน:</span> ${j}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${g.deactivated_count} คน:</span> ${R}
          </div>`,o.classList.remove("hidden")},m=async()=>{try{const{data:g}=await le.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();g&&k(g)}catch{}};m(),I&&I.addEventListener("click",async()=>{var v,B,M,S,j,R;const g=((B=(v=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:v.value)==null?void 0:B.trim())||"",o=((S=(M=document.getElementById("cfg-studentSyncTabName"))==null?void 0:M.value)==null?void 0:S.trim())||"",u=((R=(j=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:j.value)==null?void 0:R.trim())||"1";I.disabled=!0,I.textContent="กำลังซิงก์...";try{await Promise.all([oe("studentSyncSheetId",g),oe("studentSyncTabName",o),oe("studentSyncHeaderRow",u)]);const N=await Ts({sourceSheetId:g,tabName:o,headerRow:u}),O=`ซิงก์สำเร็จ: อ่าน ${N.read??0} แถว / บันทึก ${N.written??0} คน / ใหม่ ${N.newCount??0} / ซ่อน ${N.deactivatedCount??0} ✅`;T(O,"success"),m()}catch(N){T("ซิงก์นักเรียนไม่สำเร็จ: "+ae(N),"error")}finally{I.disabled=!1,I.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(g=>{g.addEventListener("change",async o=>{var M,S;const u=o.target.files[0];if(!u)return;const v=g.dataset.key,B=document.getElementById(`cfg-${v}`);g.disabled=!0;try{const j=await Os(v,u);B&&(B.value=j),await oe(v,j),T("อัปโหลดสำเร็จ ✅","success");const R=(M=g.closest(".flex"))==null?void 0:M.querySelector("img"),N=(S=g.closest(".flex"))==null?void 0:S.querySelector("div.w-14");R?R.src=j:N&&(N.outerHTML=`<img src="${j}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`)}catch(j){T("อัปโหลดไม่สำเร็จ: "+ae(j),"error")}finally{g.disabled=!1}})})};document.querySelectorAll(".cfg-tab").forEach(p=>p.addEventListener("click",()=>d(p.dataset.tab))),d(t),window._syncPositionToField=async(p,l,b)=>{const $=b.textContent;b.disabled=!0,b.textContent="กำลังดึง...";try{const C=n.find(_=>_.position===p);if(!C){T(`ยังไม่มีครูที่กำหนดบทบาท "${p}"`,"warning");return}const x=document.getElementById(`cfg-${l}`);x&&(x.value=C.full_name,x.dispatchEvent(new Event("input")),T(`ดึงชื่อ "${C.full_name}" สำเร็จ`,"success"))}catch{T("ดึงข้อมูลไม่สำเร็จ","error")}finally{b.disabled=!1,b.textContent=$}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const p=document.getElementById("cfg-save-btn"),l=document.querySelectorAll("#cfg-panel-inner [data-key]");p.disabled=!0,p.textContent="กำลังบันทึก...";try{await Promise.all([...l].map(b=>{const $=b.tagName==="BUTTON"?b.dataset.on??"false":b.value;return oe(b.dataset.key,$)})),await pa("admin",{},!0),T("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch(b){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",b),T("บันทึกไม่สำเร็จ: "+((b==null?void 0:b.message)||"ไม่ทราบสาเหตุ"),"error")}finally{p.disabled=!1,p.textContent="บันทึก"}})}catch{T("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function ha(){re("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",ne(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">Admin เพิ่ม/ลบได้ • หัวหน้ากลุ่มสาระแก้ไขรูปและลายเซ็นได้</p>
      </div>
      <button onclick="openDeptModal()"
        class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มกลุ่มสาระ
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="dept-table-wrap">
        <div class="flex items-center justify-center py-16 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg> กำลังโหลด...
        </div>
      </div>
    </div>
  </div>`);try{ot(await Be())}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}}function ot(e){const s=document.getElementById("dept-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🗂️</p>
      <p class="font-medium">ยังไม่มีกลุ่มสาระในระบบ</p>
    </div>`;return}s.innerHTML=`
    <table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">กลุ่มสาระ</th>
          <th class="px-5 py-3 text-left hidden sm:table-cell">หัวหน้ากลุ่มสาระ</th>
          <th class="px-5 py-3 text-center hidden md:table-cell">รูป / ลายเซ็น</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${e.map(n=>`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4">
            <span class="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mr-2">${n.dept_code}</span>
            <span class="font-semibold text-gray-800">${n.dept_name}</span>
          </td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            <div class="flex items-center gap-2">
              ${n.head_photo_url?`<img src="${n.head_photo_url}" class="w-7 h-7 rounded-full object-cover" />`:'<div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">?</div>'}
              <div>
                <span>${n.head_name??"—"}</span>
                ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
              </div>
            </div>
          </td>
          <td class="px-5 py-4 text-center hidden md:table-cell">
            ${n.head_sign_url?`<img src="${n.head_sign_url}" class="h-8 max-w-[80px] mx-auto object-contain" />`:'<span class="text-gray-300 text-xs">ไม่มีลายเซ็น</span>'}
          </td>
          <td class="px-5 py-4 text-right">
            <button onclick="openDeptModal(${n.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeleteDept(${n.id}, '${n.dept_name.replace(/'/g,"\\'")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`).join("")}
      </tbody>
    </table>`}}async function lt(){re("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",ne(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ปรับได้ตามโครงสร้างเวลาของโรงเรียน</p>
      </div>
      <button onclick="openPeriodModal()"
        class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มคาบ
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="period-list">
        <div class="flex items-center justify-center py-12 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>`);try{const e=await un();window._periodsCache=Object.fromEntries(e.map(n=>[n.id,n]));const s=document.getElementById("period-list");if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🕐</p><p class="font-medium">ยังไม่มีข้อมูลคาบเรียน</p>
      </div>`;return}s.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-center">คาบที่</th>
          <th class="px-5 py-3 text-center">เวลาเริ่ม</th>
          <th class="px-5 py-3 text-center">เวลาสิ้นสุด</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${e.map(n=>{var r,c;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 text-center">
            <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm
                         inline-flex items-center justify-center">${n.period_no}</span>
          </td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(r=n.start_time)==null?void 0:r.slice(0,5)}</td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(c=n.end_time)==null?void 0:c.slice(0,5)}</td>
          <td class="px-5 py-3 text-right">
            <button onclick="openPeriodModal(${n.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeletePeriod(${n.id})"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}}function eo(e){const s=[];let n=[],r="",c=!1;for(let a=0;a<String(e??"").length;a++){const h=e[a],y=e[a+1];c?h==='"'&&y==='"'?(r+='"',a++):h==='"'?c=!1:r+=h:h==='"'?c=!0:h===","?(n.push(r),r=""):h===`
`?(n.push(r),s.push(n),n=[],r=""):h!=="\r"&&(r+=h)}if((r||n.length)&&(n.push(r),s.push(n)),s.length<2)return[];const i=s[0].map(a=>a.trim()),w=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return s.slice(1).map(a=>{const h=Object.fromEntries(i.map((t,d)=>[t,a[d]??""])),y={};return w.forEach(t=>{const d=String(h[t]??"").trim();if(t==="item_no"){const p=Number(d);y[t]=d&&Number.isFinite(p)?p:null}else y[t]=d||null}),y}).filter(a=>a.subject_name||a.subject_code||a.standard_text||a.indicator_text||a.learning_outcome_text)}function fe(e,s,n="",r="text"){const c=r==="textarea"?`<textarea name="${e}" rows="3" dir="auto" class="${$e} w-full min-h-[92px] resize-y">${W(n)}</textarea>`:`<input name="${e}" value="${W(n)}" dir="auto" class="${$e} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${s}</span>
    ${c}
  </label>`}async function He(){var e;re("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let s=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[n,r]=await Promise.all([mn(s),Be().catch(()=>[])]),c=me([...r.map(t=>t.dept_name),...r.map(t=>t.dept_code),...n.map(t=>t.dept)]),i=me(n.map(t=>t.grade_level)),w=Object.fromEntries(n.map(t=>[t.id,t]));window._curriculumRows=w;const a=(t={})=>{const d=!!t.id,p=document.createElement("div");p.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",p.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${d?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${fe("subject_name","ชื่อรายวิชา",t.subject_name)}
            ${fe("subject_code","รหัสวิชา",t.subject_code)}
            ${fe("dept","กลุ่มสาระ/กลุ่มวิชา",t.dept)}
            ${fe("grade_level","ระดับชั้น",t.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${fe("strand","สาระ",t.strand)}
            ${fe("topic","เรื่อง/สาระการเรียนรู้",t.topic)}
            ${fe("item_no","ลำดับข้อ",t.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${fe("standard_code","รหัสมาตรฐาน",t.standard_code)}
            ${fe("indicator_code","รหัสตัวชี้วัด",t.indicator_code)}
          </div>
          ${fe("standard_text","มาตรฐานการเรียนรู้",t.standard_text,"textarea")}
          ${fe("indicator_text","ตัวชี้วัด",t.indicator_text,"textarea")}
          ${fe("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",t.learning_outcome_text,"textarea")}
          ${fe("source_note","แหล่งที่มา/หมายเหตุ",t.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(p),p.querySelectorAll("[data-close]").forEach(l=>l.addEventListener("click",()=>p.remove())),p.querySelector("#curriculum-form").addEventListener("submit",async l=>{l.preventDefault();const b=new FormData(l.currentTarget),$={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(_=>{$[_]=String(b.get(_)??"").trim()||null});const C=String(b.get("item_no")??"").trim(),x=Number(C);$.item_no=C&&Number.isFinite(x)?x:null;try{d?await gn(t.id,$):await xn($),T("บันทึกข้อมูลหลักสูตรแล้ว","success"),p.remove(),await He()}catch(_){T(_.message||"บันทึกไม่สำเร็จ","error")}})},h=()=>{const t=document.createElement("div"),d="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";t.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">นำเข้าหลักสูตรด้วย CSV</h3>
            <p class="text-sm text-gray-400">ระบบจะเพิ่มข้อมูลใหม่เข้าไป ไม่ล้างข้อมูลเดิม</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <div class="p-6 overflow-y-auto space-y-4">
          <div class="rounded-2xl bg-indigo-50 border border-indigo-100 p-4 text-sm text-indigo-900">
            <div class="font-semibold mb-2">หัวคอลัมน์ที่รองรับ</div>
            <code class="block whitespace-pre-wrap break-all text-xs">${d}</code>
          </div>
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${$e} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${$e} w-full font-mono text-xs" placeholder="${d}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelectorAll("[data-close]").forEach(p=>p.addEventListener("click",()=>t.remove())),t.querySelector("#curriculum-csv-file").addEventListener("change",p=>{var $;const l=($=p.target.files)==null?void 0:$[0];if(!l)return;const b=new FileReader;b.onload=()=>{t.querySelector("#curriculum-csv-text").value=b.result||""},b.readAsText(l)}),t.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const p=eo(t.querySelector("#curriculum-csv-text").value);if(!p.length)return T("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const l=await bn(p);T(`นำเข้าแล้ว ${l} รายการ`,"success"),t.remove(),await He()}catch(l){T(l.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>a(),window._curriculumEdit=t=>{var d;return a(((d=window._curriculumRows)==null?void 0:d[t])||{})},window._curriculumDelete=async t=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await yn(t),T("ลบข้อมูลแล้ว","success"),await He()}catch(d){T(d.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=h,ne(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">จัดการหลักสูตร</h2>
          <p class="text-gray-400 text-sm mt-1">ฐานมาตรฐาน ตัวชี้วัด และผลการเรียนรู้ สำหรับเติมข้อมูลเอกสาร ปพ.5 รายคอร์ส</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button onclick="_curriculumOpenImport()" class="px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold hover:bg-emerald-100">📥 นำเข้า CSV</button>
          <button onclick="_curriculumOpenModal()" class="px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">+ เพิ่มรายการ</button>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 md:grid-cols-5 gap-3">
        <input id="cur-filter-q" value="${W(s.q)}" class="${$e}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${W(s.subjectCode)}" class="${$e}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${ce}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${c.map(t=>`<option value="${W(t)}" ${t===s.dept?"selected":""}>${W(t)}</option>`).join("")}
        </select>
        <select id="cur-filter-grade" class="${ce}">
          <option value="">ทุกระดับชั้น</option>
          ${i.map(t=>`<option value="${W(t)}" ${t===s.gradeLevel?"selected":""}>${W(t)}</option>`).join("")}
        </select>
        <button id="cur-filter-submit" class="rounded-xl bg-gray-900 text-white font-semibold px-4 py-2 hover:bg-gray-800">ค้นหา</button>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-4 border-b flex items-center justify-between">
          <h3 class="font-bold text-gray-800">รายการหลักสูตร</h3>
          <span class="text-sm text-gray-400">พบ <b class="text-indigo-600">${n.length}</b> รายการ</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="text-left px-5 py-3 min-w-[220px]">รายวิชา</th>
                <th class="text-left px-5 py-3 min-w-[160px]">เรื่อง/สาระ</th>
                <th class="text-left px-5 py-3 min-w-[260px]">มาตรฐาน</th>
                <th class="text-left px-5 py-3 min-w-[320px]">ตัวชี้วัด / ผลการเรียนรู้</th>
                <th class="text-right px-5 py-3 min-w-[120px]">จัดการ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              ${n.length?n.map(t=>`<tr class="hover:bg-gray-50/70 align-top">
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-900">${W(t.subject_name||"ไม่ระบุวิชา")}</div>
                  <div class="text-indigo-500 font-mono">${W(t.subject_code||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${W(t.dept||"—")} · ${W(t.grade_level||"ทุกชั้น")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${W(t.topic||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${W(t.strand||"")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${W(t.standard_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${W(t.standard_text||"—")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${W(t.indicator_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${W(t.indicator_text||t.learning_outcome_text||"—")}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${_e(t.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${_e(t.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const y=()=>{var t,d,p,l;s={q:((t=document.getElementById("cur-filter-q"))==null?void 0:t.value)||"",subjectCode:((d=document.getElementById("cur-filter-code"))==null?void 0:d.value)||"",dept:((p=document.getElementById("cur-filter-dept"))==null?void 0:p.value)||"",gradeLevel:((l=document.getElementById("cur-filter-grade"))==null?void 0:l.value)||""},window._curriculumFilters=s,He()};["cur-filter-q","cur-filter-code"].forEach(t=>{var d;(d=document.getElementById(t))==null||d.addEventListener("keydown",p=>{p.key==="Enter"&&y()})}),["cur-filter-dept","cur-filter-grade"].forEach(t=>{var d;(d=document.getElementById(t))==null||d.addEventListener("change",y)}),(e=document.getElementById("cur-filter-submit"))==null||e.addEventListener("click",y)}catch(s){ne(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${W(s.message||s)}
    </div>`)}}async function Pe(){var e;re("subjects"),document.getElementById("page-title").textContent="จัดการรายวิชา",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,n,r,c,i]=await Promise.all([st(),rt(),ge().catch(()=>[]),Be().catch(()=>[]),pe().catch(()=>({}))]),w=Object.fromEntries(r.map(I=>[I.id,I])),a=Object.fromEntries(c.map(I=>[I.dept_code,I])),h=Object.fromEntries(c.map(I=>[I.dept_name,I])),y=I=>{var L;return{...I,_teacher_name:((L=w[I.teacher_id])==null?void 0:L.full_name)??""}},t=s.map(y),d=n.map(I=>{var L;return{...I,master_subjects:I.master_subjects?{...I.master_subjects,_teacher_name:((L=w[I.master_subjects.teacher_id])==null?void 0:L.full_name)??""}:I.master_subjects}}),p=me(t.map(I=>I.dept)),l=me(t.map(I=>I.skill_group));let b={sheetId:i.subjectSyncSheetId||Is,tabName:i.subjectSyncTabName||ut,keyField:i.subjectSyncKeyField||Nt,columns:(()=>{try{const I=JSON.parse(i.subjectSyncColumns||"null");return Array.isArray(I)&&I.length?I:pt}catch{return pt}})()};ne(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${W(b.tabName||ut)}
          </button>
          <button id="sub-action-btn" onclick="window._subAction()"
            class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
            <span>＋</span> เพิ่มคอร์ส
          </button>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-2 mb-4">
        <button id="stab-course" onclick="_switchSubjectTab('course')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white">
          📖 คอร์สวิชา
        </button>
        <button id="stab-class" onclick="_switchSubjectTab('class')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
          🏫 รายวิชาที่เปิดสอน
        </button>
        <button id="stab-sync" onclick="_switchSubjectTab('sync')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
          ⚙️ ตั้งค่าซิงค์ชีท
        </button>
      </div>

      <!-- Filter Bar -->
      <div id="subject-filter-bar" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${$e} flex-1 min-w-40" />
          <select id="subf-dept" class="${ce}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${p.map(I=>`<option value="${I}">${I}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${ce}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${l.map(I=>`<option value="${I}">${I}</option>`).join("")}
          </select>
          <select id="subf-subg" class="${ce}">
      <option value="">ทุกกลุ่มวิชา</option>
      <option value="ACDM">สามัญมัธยม (ACDM)</option>
      <option value="AGM">ศาสนามัธยม (AGM)</option>
      <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
      <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option></select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="subf-count" class="font-semibold text-indigo-600">0</span> รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="subject-table-wrap"></div>
      </div>
    </div>`);let C="course";const x=()=>{const I=document.getElementById("sub-action-btn");I&&(I.innerHTML=C==="course"?"<span>＋</span> เพิ่มคอร์ส":C==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const L=document.getElementById("btn-sync-subjects-central");L&&(L.textContent=`↑ ซิงค์รายวิชา → ${b.tabName||ut}`)},_=()=>t.map(I=>{const L=w[I.teacher_id]??{},E=a[I.dept]??h[I.dept]??{},H=L.full_name??"",k=I.subject_name??"",m=I.subject_code??"";return{subject_group:I.subject_group??"",sbJect:`${k}_(${m})_${H}`,subject_name:k,subject_code:m,credit:I.credit??"",year:i.academicYear??"",semester:i.semester??"",grade_level:I.grade_level??"",teacher_name:H,teacher_code:L.teacher_code??"",dept_name:E.dept_name??I.dept??"",dept_code:E.dept_code??I.dept??""}}),q=()=>{var L;const I=new Set(b.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${W(b.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${W(b.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${Ot.map(E=>`
                <option value="${W(E.key)}" ${b.keyField===E.key?"selected":""}>
                  ${W(E.key)} - ${W(E.label)}
                </option>
              `).join("")}
            </select>
            <p class="text-xs text-gray-400 mt-1">
              ถ้าพบค่าเดียวกันในชีทเดิม ระบบจะอัปเดตแถวนั้น ถ้าไม่พบจะเพิ่มแถวใหม่โดยไม่ล้างข้อมูลเดิม
            </p>
          </div>

          <div class="flex items-center justify-between gap-3 mb-3">
            <div>
              <h3 class="text-sm font-bold text-gray-700">คอลัมน์ที่จะซิงค์กลับชีท</h3>
              <p class="text-xs text-gray-400 mt-0.5">ระบบจะเขียนหัวตารางตามลำดับด้านล่าง และส่งเฉพาะคอลัมน์ที่เลือก</p>
            </div>
            <button id="subject-sync-select-defaults" type="button"
              class="px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">
              ค่าเริ่มต้น
            </button>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            ${Ot.map(E=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${W(E.key)}" ${I.has(E.key)?"checked":""} />
                <span>
                  <span class="font-semibold">${W(E.key)}</span>
                  <span class="block text-xs text-gray-400">${W(E.label)}</span>
                </span>
              </label>
            `).join("")}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`,(L=document.getElementById("subject-sync-select-defaults"))==null||L.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach(E=>{E.checked=pt.includes(E.value)})})},A=()=>{var k;if((k=document.getElementById("subject-filter-bar"))==null||k.classList.toggle("hidden",C==="sync"),x(),C==="sync"){q();return}const I=document.getElementById("subf-q").value.toLowerCase(),L=document.getElementById("subf-dept").value,E=document.getElementById("subf-skill").value,H=document.getElementById("subf-subg").value;if(C==="course"){const m=t.filter(f=>(!I||[f.subject_code,f.subject_name,f.dept].some(g=>(g??"").toLowerCase().includes(I)))&&(!L||f.dept===L)&&(!E||f.skill_group===E)&&(!H||f.subject_group===H));document.getElementById("subf-count").textContent=m.length,jt(m)}else{const m=d.filter(f=>{var g,o;return(!I||(f.class_name??"").toLowerCase().includes(I)||(((g=f.master_subjects)==null?void 0:g.subject_name)??"").toLowerCase().includes(I))&&(!L||((o=f.master_subjects)==null?void 0:o.dept)===L)});document.getElementById("subf-count").textContent=m.length,to(m)}};window._subAction=async()=>{var I,L,E;if(C==="course")Hs(null,async(H,k=[])=>{await fn(H,k),await Pe()});else if(C==="class")ao();else{const H=((I=document.getElementById("subject-sync-sheet-id"))==null?void 0:I.value.trim())??"",k=((L=document.getElementById("subject-sync-tab-name"))==null?void 0:L.value.trim())??"",m=((E=document.getElementById("subject-sync-key-field"))==null?void 0:E.value)??Nt,f=[...document.querySelectorAll(".subject-sync-col:checked")].map(v=>v.value),g=f.includes(m)?f:[m,...f];if(!H||!k){T("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!g.length){T("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const o=document.getElementById("sub-action-btn"),u=o==null?void 0:o.innerHTML;o&&(o.disabled=!0,o.textContent="กำลังบันทึก...");try{await Promise.all([oe("subjectSyncSheetId",H),oe("subjectSyncTabName",k),oe("subjectSyncKeyField",m),oe("subjectSyncColumns",JSON.stringify(g))]),b={sheetId:H,tabName:k,keyField:m,columns:g},x(),T("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(v){T("บันทึกตั้งค่าไม่สำเร็จ: "+ae(v),"error")}finally{o&&(o.disabled=!1,o.innerHTML=u),x()}}},window._adminRegisterClass=async I=>{const L=t.find(E=>E.id===I);L?Ms(null,L):T("ไม่พบคอร์ส","error")},window._adminEditClass=I=>{var E;const L=(E=window._adminClassCache)==null?void 0:E[I];L?ia(null,L):T("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(I,L)=>{window._goBack=()=>Pe(),Ds(null,I,L)},window._adminDeleteClass=async(I,L)=>{if(confirm(`ยืนยันลบ "${L}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await na(I),T(`ลบ "${L}" แล้ว`,"success"),A()}catch(E){T("ลบไม่สำเร็จ: "+ae(E),"error")}},(e=document.getElementById("btn-sync-subjects-central"))==null||e.addEventListener("click",async I=>{const L=I.currentTarget,E=L.textContent;try{L.disabled=!0,L.textContent="กำลังซิงค์...";const H=await Cs(_(),{sheetId:b.sheetId,tabName:b.tabName,headers:b.columns,keyField:b.keyField});T(`ส่งคำสั่งซิงค์รายวิชา ${H} รายการไปแท็บ ${b.tabName} แล้ว`,"success")}catch(H){T("ซิงค์รายวิชาไม่สำเร็จ: "+ae(H),"error")}finally{L.disabled=!1,L.textContent=E}}),window._switchSubjectTab=I=>{C=I,document.getElementById("stab-course").className=I==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=I==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=I==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",A()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(I=>{var L,E;(L=document.getElementById(I))==null||L.addEventListener("input",A),(E=document.getElementById(I))==null||E.addEventListener("change",A)}),A()}catch{T("โหลดรายวิชาไม่สำเร็จ","error")}}function jt(e){const s=document.getElementById("subject-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">📚</p><p class="font-medium">ไม่พบรายวิชา</p></div>`;return}s.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
    <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
      <tr>
        <th class="px-4 py-3 text-left">รหัส / ชื่อวิชา</th>
        <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">ชั้น</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">หน่วยกิต</th>
        <th class="px-4 py-3 text-right">จัดการ</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-50">
      ${e.map(n=>`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${n.subject_name}</p>
          <p class="text-xs text-indigo-500 font-mono">${n.subject_code??"—"}</p>
          ${n._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${n._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${n.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${n.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${n.grade_level??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${n.credit??"—"}</td>
        <td class="px-4 py-3 text-right">
          ${n.teacher_id?`<button onclick="window._adminViewSchedule(${n.teacher_id},'${_e(n._teacher_name||n.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
          <button onclick="openSubjectModal(${n.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${n.id},'${_e(n.subject_name)}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join("")}
    </tbody>
  </table></div>`}}function to(e){const s=document.getElementById("subject-table-wrap");if(s){if(window._adminClassCache=Object.fromEntries(e.map(n=>[n.id,n])),!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">🏫</p><p class="font-medium">ไม่พบรายวิชาที่เปิดสอน</p></div>`;return}s.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
    <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
      <tr>
        <th class="px-4 py-3 text-left">ห้อง / วิชา</th>
        <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">Sheet</th>
        <th class="px-4 py-3 text-right">จัดการ</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-50">
      ${e.map(n=>{var r,c,i,w;return`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${n.class_name??"—"}</p>
          <p class="text-xs text-indigo-500">${((r=n.master_subjects)==null?void 0:r.subject_name)??"—"}</p>
          ${(c=n.master_subjects)!=null&&c._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${n.master_subjects._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${(i=n.master_subjects)!=null&&i.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${n.master_subjects.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center hidden md:table-cell">
          ${n.google_sheet_id?'<span class="text-green-500 text-xs">✓</span>':'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-right">
          ${(w=n.master_subjects)!=null&&w.teacher_id?`<button onclick="window._adminViewSchedule(${n.master_subjects.teacher_id},'${_e(n.master_subjects._teacher_name||n.master_subjects.subject_name||n.class_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-2">🗓️ ตาราง</button>`:""}
          <button onclick="window._adminScoreCols(${n.id},'${n.class_name}')"
            class="text-xs bg-amber-500 text-white px-2 py-1 rounded-lg hover:bg-amber-600 mr-2">📋 คะแนน</button>
          <button onclick="window._adminEditClass(${n.id})"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
          <button onclick="window._adminDeleteClass(${n.id},'${n.class_name}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`}).join("")}
    </tbody>
  </table></div>`}}async function va(){var t;re("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const e=await pe().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),n=parseInt(e.semester??1);ne(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาคเรียน ${n}/${s}</p>
      </div>
      <button id="hr-export-csv"
        class="text-xs font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition">
        ⬇️ ดาวน์โหลด CSV
      </button>
    </div>

    <div class="flex gap-2 mb-4">
      <button id="hr-tab-samai" data-hr-tab="สามัญ"
        class="hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition">
        สามัญ
      </button>
      <button id="hr-tab-religion" data-hr-tab="ศาสนา"
        class="hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
        ศาสนา
      </button>
    </div>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="homeroom-table-wrap">
        <div class="flex justify-center py-10 text-gray-400">
          <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>`);const[r,c,i]=await Promise.all([ge().catch(()=>[]),hn().catch(()=>[]),sa().catch(()=>[])]);let w="สามัญ";const a=d=>Object.fromEntries(d.filter(p=>p.category===w).map(p=>[p.main_room,p])),h=()=>{document.querySelectorAll(".hr-tab").forEach(d=>{const p=d.dataset.hrTab===w;d.className=p?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},y=async()=>{h();const d=await ft(s,n),p=a(d),l=w==="สามัญ"?c:i,b=document.getElementById("homeroom-table-wrap");if(!l.length){b.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${w}</p></div>`;return}b.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${l.map($=>{var x,_;const C=p[$];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${$}</td>
          <td class="px-5 py-3 text-gray-600">
            ${C?`<span class="font-medium text-gray-800">${((x=C.teachers)==null?void 0:x.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${(_=C.teachers)!=null&&_.teacher_code?`(${C.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${_e($)}','${w}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${_e($)}','${w}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${C?"เปลี่ยน":"เลือกครู"}</button>
            ${C?`<button onclick="window._deleteHomeroom(${C.id},'${_e($)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await y(),window._deleteHomeroom=async(d,p)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${p}?`))try{await vn(d),T("ลบแล้ว","success"),await y()}catch{T("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(d,p)=>{var q;(q=document.getElementById("hr-picker"))==null||q.remove();let l=null;const b=document.createElement("div");b.id="hr-picker",b.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",b.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${p} · ห้อง ${d}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${ce}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${ce}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`,document.body.appendChild(b);const $=b.querySelector("#hrp-results"),C=b.querySelector("#hrp-save"),x=A=>{$.innerHTML=A.length?A.slice(0,20).map(I=>`
          <button type="button" data-id="${I.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${I.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${I.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',$.querySelectorAll(".hrp-option").forEach(I=>{I.addEventListener("click",()=>{l=r.find(L=>String(L.id)===I.dataset.id),$.querySelectorAll(".hrp-option").forEach(L=>L.classList.remove("bg-emerald-50","text-emerald-700")),I.classList.add("bg-emerald-50","text-emerald-700"),C.disabled=!1})})},_=()=>{const A=b.querySelector("#hrp-code").value.trim().toLowerCase(),I=b.querySelector("#hrp-name").value.trim().toLowerCase();x(r.filter(L=>(!A||(L.teacher_code??"").toLowerCase().includes(A))&&(!I||(L.full_name??"").toLowerCase().includes(I))))};b.querySelector("#hrp-close").addEventListener("click",()=>b.remove()),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#hrp-code").addEventListener("input",_),b.querySelector("#hrp-name").addEventListener("input",_),C.addEventListener("click",async()=>{if(l){C.disabled=!0,C.textContent="กำลังบันทึก...";try{await oa({teacher_id:l.id,main_room:d,category:p,academic_year:s,semester:n}),T("บันทึกครูที่ปรึกษาสำเร็จ","success"),b.remove(),await y()}catch(A){T("บันทึกไม่สำเร็จ: "+ae(A),"error"),C.disabled=!1,C.textContent="เลือกครูที่ปรึกษา"}}}),x(r)},document.querySelectorAll(".hr-tab").forEach(d=>{d.addEventListener("click",async()=>{w=d.dataset.hrTab,await y()})}),(t=document.getElementById("hr-export-csv"))==null||t.addEventListener("click",async()=>{try{const d=await ft(s,n),p=a(d),l=w==="สามัญ"?c:i,b=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],$=l.map(A=>{var L,E;const I=p[A];return[A,((L=I==null?void 0:I.teachers)==null?void 0:L.full_name)??"",((E=I==null?void 0:I.teachers)==null?void 0:E.phone)??""]}),C="\uFEFF"+[b,...$].map(A=>A.map(I=>`"${String(I).replace(/"/g,'""')}"`).join(",")).join(`
`),x=new Blob([C],{type:"text/csv;charset=utf-8"}),_=URL.createObjectURL(x),q=document.createElement("a");q.href=_,q.download=`ครูที่ปรึกษา-${w}-${n}-${s}.csv`,document.body.appendChild(q),q.click(),q.remove(),URL.revokeObjectURL(_),T("ดาวน์โหลด CSV แล้ว ✅","success")}catch(d){T("ดาวน์โหลดไม่สำเร็จ: "+ae(d),"error")}})}async function wa(){re("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const e=y=>{let t=0;for(const d of y)t=t*26+d.charCodeAt(0)-64;return t},s=y=>{let t="";for(;y>0;)y--,t=String.fromCharCode(65+y%26)+t,y=Math.floor(y/26);return t},n=(y,t)=>{const d=[];for(let p=e(y);p<=e(t);p++)d.push(s(p));return d},r=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:n("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:n("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];r.flatMap(y=>y.cols);const c=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],i=["ระหว่างเรียน","กลางภาค","ปลายภาค"],w=await _n().catch(()=>[]),a={};c.forEach(y=>{a[y]={},i.forEach(t=>{const d=w.find(p=>p.skill_group===y&&p.assignment_type===t);a[y][t]=new Set(d?d.allowed_columns.split(",").map(p=>p.trim()).filter(Boolean):[])})});const h=(y,t)=>r.map(d=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${d.label}</span>
      ${d.cols.map(p=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${a[y][t].has(p)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${y}" data-at="${t}" data-col="${p}">
          ${p}
        </button>`).join("")}
    </div>`).join("");ne(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">คลิกปุ่มคอลัมน์เพื่อเลือก (สีเขียว = อนุญาต)</p>
      </div>
      <button id="scc-save-btn"
        class="btn-primary px-6 py-2.5 text-white text-sm font-semibold rounded-xl">
        💾 บันทึกทั้งหมด
      </button>
    </div>

    <!-- Legend -->
    <div class="flex flex-wrap gap-3 mb-4 text-xs">
      ${r.map(y=>`
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded ${y.color.split(" ")[0]} border ${y.color.split(" ")[2]}"></span>
        <span class="text-gray-600 font-mono font-medium">${y.label}</span>
      </div>`).join("")}
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded bg-emerald-500"></span>
        <span class="text-gray-600">= เลือกแล้ว</span>
      </div>
    </div>

    <!-- Grid per skill group -->
    <div class="space-y-4">
      ${c.map(y=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${y}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${y}"
              ${w.find(t=>t.skill_group===y&&t.is_fixed)?"checked":""} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${i.map(t=>`
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${t}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${y.replace(/\s/g,"_")}-${t.replace(/\s/g,"_")}">
                  ${a[y][t].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${h(y,t)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${y}" data-at="${t}">ล้าง</button>
            </div>
          </div>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </div>`),document.addEventListener("click",y=>{const t=y.target.closest(".col-btn");if(!t)return;const{sg:d,at:p,col:l}=t.dataset;a[d][p].has(l)?(a[d][p].delete(l),t.className=t.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(a[d][p].add(l),t.className=t.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const b=document.getElementById(`scc-count-${d.replace(/\s/g,"_")}-${p.replace(/\s/g,"_")}`);b&&(b.textContent=`${a[d][p].size} คอลัมน์`);const $=document.querySelector(`.scc-clear-btn[data-sg="${d}"][data-at="${p}"]`);$&&($.style.opacity=a[d][p].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(y=>{y.addEventListener("click",()=>{const{sg:t,at:d}=y.dataset;a[t][d].clear(),document.querySelectorAll(`.col-btn[data-sg="${t}"][data-at="${d}"]`).forEach(l=>{l.className=l.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const p=document.getElementById(`scc-count-${t.replace(/\s/g,"_")}-${d.replace(/\s/g,"_")}`);p&&(p.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const y=document.getElementById("scc-save-btn");y.disabled=!0,y.textContent="กำลังบันทึก...";try{const t=[];c.forEach(d=>{var l;const p=((l=document.querySelector(`.scc-lock[data-sg="${d}"]`))==null?void 0:l.checked)??!1;i.forEach(b=>{const $=[...a[d][b]].join(",");$&&t.push({skill_group:d,assignment_type:b,allowed_columns:$,is_fixed:p})})});for(const d of t)await kn(d);T(`บันทึก ${t.length} รายการสำเร็จ ✅`,"success")}catch(t){T("บันทึกไม่สำเร็จ: "+ae(t),"error")}finally{y.disabled=!1,y.textContent="💾 บันทึกทั้งหมด"}})}async function ao(){re("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const e=await st().catch(()=>[]);document.getElementById("main-content").innerHTML=`
    <div class="max-w-4xl mx-auto animate-fade">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="renderSubjects()" class="text-sm text-gray-500 hover:text-indigo-600">← กลับ</button>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        ${e.length?`<table class="w-full text-sm">
              <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                <tr>
                  <th class="px-5 py-3 text-left">รหัส / ชื่อวิชา</th>
                  <th class="px-5 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
                  <th class="px-5 py-3 text-center hidden md:table-cell">ชั้นปี</th>
                  <th class="px-5 py-3 text-right">เลือก</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${e.map(s=>`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-3">
                    <p class="font-semibold text-gray-800">${s.subject_name}</p>
                    <p class="text-xs font-mono text-indigo-500">${s.subject_code??"—"}</p>
                  </td>
                  <td class="px-5 py-3 hidden sm:table-cell">
                    ${s.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${s.dept}</span>`:"—"}
                  </td>
                  <td class="px-5 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.grade_level??"—"}</td>
                  <td class="px-5 py-3 text-right">
                    <button onclick="window._adminRegisterClass(${s.id})"
                      class="btn-primary px-4 py-1.5 text-white text-xs font-medium rounded-lg">
                      ลงทะเบียนห้อง
                    </button>
                  </td>
                </tr>`).join("")}
              </tbody>
            </table>`:'<div class="text-center py-16 text-gray-400"><p class="text-4xl mb-3">📖</p><p>ยังไม่มีคอร์สวิชา — สร้างคอร์สก่อน</p></div>'}
      </div>
    </div>`,window.renderSubjects=Pe}async function $a(){var c;re("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const e=await pe().catch(()=>({})),s=e.academicYear??e.academic_year??new Date().getFullYear()+543,n=e.semester??1,r=async()=>{const i=await En(s,n).catch(()=>[]),w=document.getElementById("holiday-table");if(w){if(!i.length){w.innerHTML=`<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`;return}w.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
        <tr>
          <th class="px-4 py-3 text-left">วันที่</th>
          <th class="px-4 py-3 text-left">คำอธิบาย</th>
          <th class="px-4 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${i.map(a=>`
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 font-mono text-indigo-600">${a.holiday_date}</td>
            <td class="px-4 py-3 text-gray-700">${a.description??"—"}</td>
            <td class="px-4 py-3 text-right">
              <button onclick="window._deleteHoliday(${a.id})"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
      </tbody>
    </table>`}};ne(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${s} ภาค ${n} — ระบบจะ highlight วันนี้ในตารางเช็คชื่อ</p>
    </div>

    <!-- Add form -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-700 mb-3">เพิ่มวันหยุด</h3>
      <div class="flex flex-wrap gap-3">
        <input id="hol-date" type="date" class="${$e} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${$e} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`),await r(),(c=document.getElementById("hol-add"))==null||c.addEventListener("click",async()=>{const i=document.getElementById("hol-date").value,w=document.getElementById("hol-desc").value.trim()||null;if(!i){T("กรุณาเลือกวันที่","warning");return}const a=parseInt(i.slice(0,4),10),h=new Date().getFullYear();if(Math.abs(a-h)>3){T(`ปี ${a} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${h}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await cn({holiday_date:i,description:w,academic_year:s,semester:n}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",T("เพิ่มวันหยุดแล้ว","success"),await r()}catch(y){T("เกิดข้อผิดพลาด: "+ae(y),"error")}}),window._deleteHoliday=async i=>{if(confirm("ลบวันหยุดนี้?"))try{await pn(i),T("ลบแล้ว","success"),await r()}catch{T("ลบไม่สำเร็จ","error")}}}function _a(){re("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",ne(`
    <div class="max-w-4xl mx-auto animate-fade">

      <!-- Tab -->
      <div class="flex gap-2 mb-6">
        <button id="tab-teachers" onclick="switchImportTab('teachers')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white">
          👩‍🏫 นำเข้าครู
        </button>
        <button id="tab-students" onclick="switchImportTab('students')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
          👦 นำเข้านักเรียน
        </button>
      </div>

      <!-- Hint -->
      <div id="import-hint" class="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5 text-sm text-blue-700">
        <b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)
      </div>

      <!-- Drop Zone -->
      <div id="drop-zone"
        class="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center
               hover:border-indigo-400 hover:bg-indigo-50 transition cursor-pointer">
        <p class="text-4xl mb-3">📂</p>
        <p class="font-semibold text-gray-700">ลากไฟล์ CSV มาวางที่นี่</p>
        <p class="text-sm text-gray-400 mt-1">หรือ</p>
        <label class="mt-3 inline-block cursor-pointer">
          <span class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
            เลือกไฟล์
          </span>
          <input id="csv-file" type="file" accept=".csv" class="hidden" />
        </label>
      </div>

      <!-- Preview -->
      <div id="import-preview" class="mt-6 hidden">
        <div class="flex items-center justify-between mb-3">
          <p id="preview-count" class="text-sm font-semibold text-gray-700"></p>
          <button id="btn-import"
            class="btn-primary px-6 py-2.5 text-white text-sm font-semibold rounded-xl">
            นำเข้าทั้งหมด
          </button>
        </div>
        <div id="preview-table"></div>
        <div id="import-progress" class="hidden mt-4">
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div id="progress-bar" class="h-full bg-indigo-500 transition-all duration-300" style="width:0%"></div>
          </div>
          <p id="progress-text" class="text-xs text-gray-500 mt-1 text-center"></p>
        </div>
      </div>

    </div>`);let e="teachers",s=[];window.switchImportTab=c=>{e=c,s=[],document.getElementById("import-preview").classList.add("hidden");const i={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=i[c],document.getElementById("tab-teachers").className=c==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=c==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const n=c=>{if(!c||!c.name.endsWith(".csv")){T("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const i=new FileReader;i.onload=w=>{s=Ys(w.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${s.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=Ks(s,e),document.getElementById("import-preview").classList.remove("hidden")},i.readAsText(c,"UTF-8")};document.getElementById("csv-file").addEventListener("change",c=>n(c.target.files[0]));const r=document.getElementById("drop-zone");r.addEventListener("dragover",c=>{c.preventDefault(),r.classList.add("border-indigo-400","bg-indigo-50")}),r.addEventListener("dragleave",()=>r.classList.remove("border-indigo-400","bg-indigo-50")),r.addEventListener("drop",c=>{c.preventDefault(),r.classList.remove("border-indigo-400","bg-indigo-50"),n(c.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!s.length)return;const c=document.getElementById("btn-import"),i=document.getElementById("import-progress"),w=document.getElementById("progress-bar"),a=document.getElementById("progress-text");c.disabled=!0,i.classList.remove("hidden");const h=(y,t)=>{const d=Math.round(y/t*100);w.style.width=d+"%",a.textContent=`${y} / ${t} แถว`};try{const t=await(e==="teachers"?Vs:Ws)(s,h);if(T(`นำเข้าสำเร็จ ${t} รายการ`,"success"),w.style.width="100%",e==="students"){a.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const d=await Xn();T(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(d==null?void 0:d.enrolled)??0} รายการ)`,"success")}catch{}a.textContent=`นำเข้าสำเร็จ ${t} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(y){T("นำเข้าไม่สำเร็จ: "+ae(y),"error")}finally{c.disabled=!1}})}async function ka(){var c,i,w;re("payments"),document.getElementById("page-title").textContent="การชำระเงิน",ne(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ตรวจสอบสลิปและอนุมัติแพ็กเกจให้ครู</p>
      </div>
      <div class="flex gap-2">
        <button id="pay-bulk-approve"
          class="hidden text-xs px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition">
          ✅ อนุมัติที่เลือก
        </button>
        <button id="pay-approve-all"
          class="text-xs px-3 py-1.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold transition">
          ✅ อนุมัติทั้งหมด
        </button>
        <button id="pay-refresh" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1">
          🔄 รีเฟรช
        </button>
      </div>
    </div>

    <!-- Filter tabs -->
    <div class="flex gap-2 mb-4 border-b border-gray-200">
      ${["ทั้งหมด","รอตรวจสอบ","อนุมัติแล้ว","ปฏิเสธ"].map((a,h)=>`<button class="pay-tab text-sm font-medium px-3 py-2 border-b-2 transition
          ${h===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-400 hover:text-gray-600"}"
          data-filter="${["all","pending","approved","rejected"][h]}">${a}</button>`).join("")}
    </div>

    <div id="pay-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div>
        <p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`);let e=[],s="all";const n=()=>{const a=document.getElementById("pay-list");if(!a)return;const h={pending:0,approved:1,rejected:2},y=(s==="all"?e:e.filter(t=>t.status===s)).slice().sort((t,d)=>{const p=(h[t.status]??9)-(h[d.status]??9);return p!==0?p:new Date(d.created_at)-new Date(t.created_at)});if(!y.length){a.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}a.innerHTML=y.map(t=>{var b,$,C,x,_;const d={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[t.status]??{label:t.status,cls:"bg-gray-100 text-gray-600"},p={semester:`📦 เหมาทั้งเทอม (${t.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(t.room_count??1)||1} ห้อง (${t.amount??49} บ.)`,donation:`☕ โดเนท ${t.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[t.package_type]??`${t.package_type} (${t.amount??0} บ.)`,l=new Date(t.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${t.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${t.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${t.id}" data-teacher="${(b=t.teachers)==null?void 0:b.id}" data-pkg="${t.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${((($=t.teachers)==null?void 0:$.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${((C=t.teachers)==null?void 0:C.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((x=t.teachers)==null?void 0:x.teacher_code)??"—"} · ${((_=t.teachers)==null?void 0:_.phone)??"—"}</p>
            </div>
          </div>
          <span class="text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${d.cls}">
            ${d.label}
          </span>
        </div>

        <!-- รายละเอียด -->
        <div class="px-4 py-3 space-y-2">
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">แพ็กเกจ</span>
            <span class="font-medium text-gray-700">${p}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">ส่งเมื่อ</span>
            <span class="text-gray-600">${l}</span>
          </div>
          ${t.admin_note?`
          <div class="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500">
            💬 หมายเหตุ: ${t.admin_note}
          </div>`:""}
        </div>

        <!-- สลิป -->
        ${t.slip_url?`
        <div class="px-4 pb-3">
          <button class="view-slip-btn w-full py-2 rounded-xl border border-gray-200 text-sm text-indigo-600 font-medium hover:bg-indigo-50 transition"
            data-url="${W(t.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>`:`
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${t.status==="pending"?(()=>{var q,A,I;return t.package_type==="donation"?`
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${t.id}" data-teacher="${(q=t.teachers)==null?void 0:q.id}">
              ☕ รับทราบ / ขอบคุณ
            </button>
          </div>`:t.package_type==="school_sponsored"?`
          <div class="px-4 pb-4">
            <button class="approve-btn flex-1 w-full py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${t.id}" data-teacher="${(A=t.teachers)==null?void 0:A.id}" data-pkg="${t.package_type}">
              🏫 อนุมัติสิทธิ์
            </button>
          </div>`:`
          <div class="flex gap-2 px-4 pb-4">
            <button class="reject-btn flex-1 py-2.5 rounded-xl border-2 border-red-200 text-red-600
                           text-sm font-semibold hover:bg-red-50 transition" data-id="${t.id}">
              ❌ ปฏิเสธ
            </button>
            <button class="approve-btn flex-1 py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${t.id}" data-teacher="${(I=t.teachers)==null?void 0:I.id}" data-pkg="${t.package_type}">
              ✅ อนุมัติ
            </button>
          </div>`})():""}
      </div>`}).join(""),a.querySelectorAll(".donate-ack-btn").forEach(t=>{t.addEventListener("click",async()=>{var l,b;const p=((l=(await pe().catch(()=>({}))).donationThankYouCard)==null?void 0:l.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){t.disabled=!0,t.textContent="⏳ กำลังดำเนินการ...";try{await Ke(parseInt(t.dataset.id),"approved",p),await dt(parseInt(t.dataset.teacher),"donation"),T("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(b=window._refreshPaymentBadge)==null||b.call(window),e=await Ee(),n()}catch{T("เกิดข้อผิดพลาด","error"),t.disabled=!1,t.textContent="☕ รับทราบ / ขอบคุณ"}}})}),a.querySelectorAll(".approve-btn").forEach(t=>{t.addEventListener("click",async()=>{var l;const d=t.dataset.pkg==="school_sponsored";if(confirm(d?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){t.disabled=!0,t.textContent="⏳ กำลังอนุมัติ...";try{await Ke(parseInt(t.dataset.id),"approved"),await dt(parseInt(t.dataset.teacher),t.dataset.pkg),T("อนุมัติแล้ว ✅","success"),(l=window._refreshPaymentBadge)==null||l.call(window),e=await Ee(),n()}catch{T("เกิดข้อผิดพลาด","error"),t.disabled=!1,t.textContent=d?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),a.querySelectorAll(".reject-btn").forEach(t=>{t.addEventListener("click",()=>{so(parseInt(t.dataset.id),async d=>{var p;await Ke(parseInt(t.dataset.id),"rejected",d),T("ปฏิเสธแล้ว","info"),(p=window._refreshPaymentBadge)==null||p.call(window),e=await Ee(),n()})})}),a.querySelectorAll(".view-slip-btn").forEach(t=>{t.addEventListener("click",()=>no(t.dataset.url))})};try{e=await Ee(),n()}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(a=>{a.addEventListener("click",()=>{s=a.dataset.filter,document.querySelectorAll(".pay-tab").forEach(h=>{h.classList.toggle("border-indigo-600",h===a),h.classList.toggle("text-indigo-600",h===a),h.classList.toggle("border-transparent",h!==a),h.classList.toggle("text-gray-400",h!==a)}),n()})}),(c=document.getElementById("pay-refresh"))==null||c.addEventListener("click",async()=>{e=await Ee(),n(),T("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",a=>{if(!a.target.classList.contains("pay-cb"))return;const h=document.querySelectorAll(".pay-cb:checked"),y=document.getElementById("pay-bulk-approve");h.length>0?(y.classList.remove("hidden"),y.textContent=`✅ อนุมัติ ${h.length} คน`):y.classList.add("hidden")});const r=async a=>{var y,t;let h=0;for(const d of a)try{await Ke(parseInt(d.id),"approved"),await dt(parseInt(d.teacher),d.pkg),h++}catch{}T(`อนุมัติ ${h}/${a.length} รายการ ✅`,"success"),(y=window._refreshPaymentBadge)==null||y.call(window),e=await Ee(),n(),(t=document.getElementById("pay-bulk-approve"))==null||t.classList.add("hidden")};(i=document.getElementById("pay-bulk-approve"))==null||i.addEventListener("click",async()=>{const a=[...document.querySelectorAll(".pay-cb:checked")];a.length&&confirm(`อนุมัติ ${a.length} คนที่เลือก?`)&&await r(a.map(h=>({id:h.dataset.id,teacher:h.dataset.teacher,pkg:h.dataset.pkg})))}),(w=document.getElementById("pay-approve-all"))==null||w.addEventListener("click",async()=>{const a=e.filter(h=>h.status==="pending");if(!a.length){T("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${a.length} รายการ?`)&&await r(a.map(h=>{var y;return{id:h.id,teacher:(y=h.teachers)==null?void 0:y.id,pkg:h.package_type}}))})}async function no(e){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",s.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${W(e)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(s),s.querySelector("button").addEventListener("click",()=>s.remove()),s.addEventListener("click",a=>{a.target===s&&s.remove()});const n=s.querySelector("#slip-viewer"),r=s.querySelector("#slip-download"),c=await bs(e),i=W(c),w=String(c).split("?")[0].toLowerCase().endsWith(".pdf");r&&(r.href=c),n&&(n.innerHTML=w?`<iframe src="${i}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${i}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`)}function so(e,s){const n=document.createElement("div");n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#rj-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#rj-confirm").addEventListener("click",async()=>{const r=n.querySelector("#reject-note").value.trim()||null;n.remove(),await s(r)})}async function Ea(){re("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const e=await pe().catch(()=>({})),s=parseInt(e.academicYear??2568),n=parseInt(e.semester??1),r=async()=>{const i=await In(s,n,"สามัญ").catch(()=>[]);c(i)},c=i=>{var $;const w=C=>`
      <tr class="hover:bg-gray-50 transition lsk-row" data-id="${C.id}">
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${C.name}</td>
        <td class="px-4 py-3 text-center text-sm text-gray-600">${C.max_score}</td>
        <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${C.sheet_col??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-400">${C.sort_order}</td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <button class="lsk-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${C.id}">แก้ไข</button>
          <button class="lsk-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${C.id}" data-name="${C.name}">ลบ</button>
        </td>
      </tr>`,a=C=>C.length?`<table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th>
              <th class="px-4 py-3 text-center">คะแนนเต็ม</th>
              <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th>
              <th class="px-4 py-3 text-center">ลำดับ</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">${C.map(w).join("")}</tbody>
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',h=C=>C.replace("SheetId","SheetTab"),y=C=>C.replace("SheetId","StudentRange"),t=(C,x)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${x})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${C}" value="${e[C]??""}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${C}" value="${e[h(C)]??""}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${C}" value="${e[y(C)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${C}" data-tab-key="${h(C)}" data-range-key="${y(C)}">บันทึก</button>
        </div>
      </div>`;ne(`<div class="max-w-5xl mx-auto animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${n} / ${s}</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-fill-ls-classes"
            class="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition">
            เติมเข้ารายวิชาทักษะชีวิต
          </button>
          <div class="flex gap-2" id="lsk-tab-actions"></div>
        </div>
      </div>
      <!-- Tabs -->
      <div class="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit">
        <button id="lsk-tab-scores" data-tab="scores"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700">
          📊 คะแนน
        </button>
        <button id="lsk-tab-config" data-tab="config"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
          ⚙️ ตั้งค่าคอลัมน์
        </button>
      </div>
      <!-- Tab content -->
      <div id="lsk-tab-content"></div>
    </div>`);const d=[...i];($=document.getElementById("btn-fill-ls-classes"))==null||$.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนทักษะชีวิตไปยังรายวิชากลุ่มทักษะชีวิตทั้งหมด?"))return;const C=document.getElementById("btn-fill-ls-classes"),x=C.textContent;C.disabled=!0,C.textContent="กำลังเติม...";try{const _=await Hn(s,n);T(`เติมทักษะชีวิต ${_.classes} รายวิชา / ${_.scores} คะแนนแล้ว`,"success")}catch(_){T("เติมไม่สำเร็จ: "+ae(_),"error")}finally{C.disabled=!1,C.textContent=x}});const p=async()=>{var g;document.getElementById("lsk-tab-actions").innerHTML=`
        <button id="btn-sync-ls"
          class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
          ↑ Sync ไปชีทกลาง
        </button>`,document.getElementById("lsk-tab-content").innerHTML=`
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
          <select id="lsk-filter-grade" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <option value="">ทุกระดับชั้น</option>
          </select>
          <select id="lsk-filter-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <option value="">ทุกห้อง</option>
          </select>
          <input id="lsk-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัส"
            class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <span id="lsk-filter-count" class="text-xs text-gray-400"></span>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
          <div id="lsk-score-table"><div class="p-10 text-center text-gray-400">กำลังโหลด...</div></div>
        </div>`;const[{columns:C,scores:x},_]=await Promise.all([zn(s,n).catch(()=>({columns:[],scores:[]})),Ne().catch(()=>[])]),q=(C??[]).filter(o=>o.category==="สามัญ"),A={};for(const o of x)A[o.student_id]||(A[o.student_id]={}),A[o.student_id][o.column_id]=o.score;const I=_.filter(o=>(o==null?void 0:o.id)&&(o==null?void 0:o.student_code)&&(o==null?void 0:o.main_room)).sort((o,u)=>(o.main_room??"").localeCompare(u.main_room??"",void 0,{numeric:!0})||(o.student_code??"").localeCompare(u.student_code??"")),L=document.getElementById("lsk-filter-grade"),E=document.getElementById("lsk-filter-room");L.innerHTML='<option value="">ทุกระดับชั้น</option>'+me(I.map(o=>Se(o.main_room))).map(o=>`<option value="${o}">${o}</option>`).join("");const H=()=>{const o=L.value,u=E.value,v=me(I.filter(B=>!o||Se(B.main_room)===o).map(B=>qe(B.main_room)));E.innerHTML='<option value="">ทุกห้อง</option>'+v.map(B=>`<option value="${B}" ${B===u?"selected":""}>ห้อง ${B}</option>`).join(""),u&&!v.includes(u)&&(E.value="")},k=o=>{if(document.getElementById("lsk-filter-count").textContent=`${o.length} คน`,!o.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${q.map(u=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${u.name}<br><span class="font-normal text-gray-400">(${u.max_score})</span></th>`).join("")}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${o.map((u,v)=>{const B=q.reduce((M,S)=>{var j;return M+(((j=A[u.id])==null?void 0:j[S.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${v+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${u.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${u.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${u.main_room??"—"}</td>
                  ${q.map(M=>{var j;const S=(j=A[u.id])==null?void 0:j[M.id];return`<td class="px-2 py-2 text-center ${S!=null?"text-gray-800 font-medium":"text-gray-300"}">${S??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${B||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};H();let m=[...I];k(m);const f=()=>{H();const o=L.value,u=E.value,v=document.getElementById("lsk-filter-search").value.toLowerCase();m=I.filter(B=>{var M,S;return(!o||Se(B.main_room)===o)&&(!u||qe(B.main_room)===u)&&(!v||((M=B.full_name)==null?void 0:M.toLowerCase().includes(v))||((S=B.student_code)==null?void 0:S.includes(v)))}),k(m)};L.addEventListener("change",f),E.addEventListener("change",f),document.getElementById("lsk-filter-search").addEventListener("input",f),(g=document.getElementById("btn-sync-ls"))==null||g.addEventListener("click",async()=>{const o=document.getElementById("btn-sync-ls");o.disabled=!0,o.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:u}=await se(async()=>{const{syncCentralBatch:R}=await import("./sync-CtuAgrx7.js");return{syncCentralBatch:R}},__vite__mapDeps([13,7,4]));if(!q.length){T("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!e.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const v=m.map(R=>({id:R.id,student_code:R.student_code})),B=new Set(v.map(R=>R.id)),M=new Set(q.map(R=>R.id)),S=x.filter(R=>B.has(R.student_id)&&M.has(R.column_id)),j=await u(e.lifeSkillSheetIdSamai,e.lifeSkillSheetTabSamai,q,S,v,{studentColRange:e.lifeSkillStudentRangeSamai||"J8:J3000"});if(!j){T("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}T(`ส่งคำสั่ง Sync ทักษะชีวิต ${v.length} คน / ${j} คะแนนแล้ว`,"success")}catch(u){T("Sync ไม่สำเร็จ: "+ae(u),"error")}finally{o.disabled=!1,o.textContent="↑ Sync ไปชีทกลาง"}})},l=()=>{document.getElementById("lsk-tab-actions").innerHTML=`
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`,document.getElementById("lsk-tab-content").innerHTML=`<div class="space-y-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${i.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${a(i)}</div>
          ${t("lifeSkillSheetIdSamai","สามัญ")}
        </div>
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>Kt(null,s,n,r)),document.querySelectorAll(".lsk-edit").forEach(C=>{C.addEventListener("click",()=>{const x=d.find(_=>_.id===+C.dataset.id);x&&Kt(x,s,n,r)})}),document.querySelectorAll(".lsk-del").forEach(C=>{C.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${C.dataset.name}"?`))try{await Un(+C.dataset.id),T("ลบแล้ว","success"),r()}catch(x){T("ลบไม่สำเร็จ: "+ae(x),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach(C=>{C.addEventListener("click",async()=>{var H,k,m;const x=C.dataset.key,_=C.dataset.tabKey,q=C.dataset.rangeKey,A=((H=document.getElementById(`lsk-sheet-${x}`))==null?void 0:H.value.trim())??"",I=((k=document.getElementById(`lsk-tab-${x}`))==null?void 0:k.value.trim())??"",L=((m=document.getElementById(`lsk-range-${x}`))==null?void 0:m.value.trim())??"J8:J3000",E=C.textContent;C.disabled=!0,C.textContent="⏳";try{await Promise.all([oe(x,A),oe(_,I),oe(q,L)]),e[x]=A,e[_]=I,e[q]=L,C.textContent="✅",C.style.background="#16a34a",setTimeout(()=>{C.disabled=!1,C.textContent=E,C.style.background=""},1500),T("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),C.disabled=!1,C.textContent=E}})})},b=C=>{document.querySelectorAll("[data-tab]").forEach(x=>{const _=x.dataset.tab===C;x.className=_?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),C==="scores"?p():l()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>b("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>b("config")),b("scores")};r()}function Kt(e,s,n,r){var w;(w=document.getElementById("lsk-modal"))==null||w.remove();const c=!!e,i=document.createElement("div");i.id="lsk-modal",i.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",i.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${c?"แก้ไขหัวข้อ":"เพิ่มหัวข้อ"}</h3>
      <form id="lsk-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อหัวข้อ <span class="text-red-400">*</span></label>
          <input id="lsk-name" type="text" value="${(e==null?void 0:e.name)??""}" placeholder="เช่น ปฏิบัติศาสนา"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
            <input id="lsk-max" type="number" min="1" max="100" value="${(e==null?void 0:e.max_score)??20}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ลำดับ</label>
            <input id="lsk-order" type="number" min="0" value="${(e==null?void 0:e.sort_order)??0}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Google Sheet <span class="text-xs text-gray-400">(เช่น EH)</span></label>
          <input id="lsk-sheetcol" type="text" value="${(e==null?void 0:e.sheet_col)??""}" placeholder="EH"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase" />
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button" id="lsk-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button type="submit" id="lsk-save"
            class="btn-primary flex-1 py-2.5 rounded-xl text-white text-sm font-semibold">
            ${c?"บันทึก":"เพิ่ม"}
          </button>
        </div>
      </form>
    </div>`,document.body.appendChild(i),i.querySelector("#lsk-cancel").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelector("#lsk-form").addEventListener("submit",async a=>{a.preventDefault();const h=i.querySelector("#lsk-save");h.disabled=!0,h.textContent="กำลังบันทึก...";try{const y={name:i.querySelector("#lsk-name").value.trim(),max_score:parseInt(i.querySelector("#lsk-max").value)||20,sort_order:parseInt(i.querySelector("#lsk-order").value)||0,sheet_col:i.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:s,semester:n};c?await Jn(e.id,y):await Qn(y),T("บันทึกสำเร็จ","success"),i.remove(),r()}catch(y){T("บันทึกไม่สำเร็จ: "+ae(y),"error"),h.disabled=!1,h.textContent=c?"บันทึก":"เพิ่ม"}})}const ro=e=>{const s=da(e);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${s.cls}">${s.label}</span>`};async function Sa(){re("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const e=await pe().catch(()=>({})),s=parseInt(e.academicYear??2568),n=parseInt(e.semester??1);Ft(e);const r=t=>`
    <tr class="hover:bg-gray-50 transition" data-id="${t.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${t.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${t.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${t.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${t.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${t.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${t.id}" data-name="${t.name}">ลบ</button>
      </td>
    </tr>`;let c=[];const i=async()=>{var d;c=await Cn(s,n).catch(()=>[]),w();const t=((d=document.querySelector("[data-tab].bg-white"))==null?void 0:d.dataset.tab)??"scores";y(t)},w=()=>{ne(`<div class="max-w-5xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${n} / ${s}</p>
        </div>
        <div class="flex gap-2" id="rsa-tab-actions"></div>
      </div>
      <div class="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit">
        <button id="rsa-tab-scores" data-tab="scores"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700">
          📊 คะแนน
        </button>
        <button id="rsa-tab-config" data-tab="config"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
          ⚙️ ตั้งค่าคอลัมน์
        </button>
      </div>
      <div id="rsa-tab-content"></div>
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>y("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>y("config"))},a=async()=>{var I,L;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="btn-fill-reading-eval"
        class="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-xl hover:bg-violet-700 transition">
        📝 ป้อนผล → ทุกวิชา
      </button>
      <button id="btn-sync-rs"
        class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
        ↑ Sync ไปชีทกลาง
      </button>`,document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="rsa-filter-grade" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
        </select>
        <select id="rsa-filter-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกห้อง</option>
        </select>
        <input id="rsa-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัสนักเรียน"
          class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <span id="rsa-filter-count" class="text-xs text-gray-400"></span>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <div id="rsa-score-table"><div class="p-10 text-center text-gray-400">กำลังโหลด...</div></div>
      </div>`;const[{columns:t,scores:d},p]=await Promise.all([Nn(s,n).catch(()=>({columns:[],scores:[]})),Ne().catch(()=>[])]),l={};for(const E of d)l[E.student_id]||(l[E.student_id]={}),l[E.student_id][E.column_id]=E.score;const b=p.filter(E=>(E==null?void 0:E.id)&&(E==null?void 0:E.student_code)&&(E==null?void 0:E.main_room)).sort((E,H)=>(E.main_room??"").localeCompare(H.main_room??"",void 0,{numeric:!0})||(E.student_code??"").localeCompare(H.student_code??"")),$=document.getElementById("rsa-filter-grade"),C=document.getElementById("rsa-filter-room");$.innerHTML='<option value="">ทุกระดับชั้น</option>'+me(b.map(E=>Se(E.main_room))).map(E=>`<option value="${E}">${E}</option>`).join("");const x=()=>{const E=$.value,H=C.value,k=me(b.filter(m=>!E||Se(m.main_room)===E).map(m=>qe(m.main_room)));C.innerHTML='<option value="">ทุกห้อง</option>'+k.map(m=>`<option value="${m}" ${m===H?"selected":""}>ห้อง ${m}</option>`).join(""),H&&!k.includes(H)&&(C.value="")},_=E=>{if(document.getElementById("rsa-filter-count").textContent=`${E.length} คน`,!E.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${t.map(H=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${H.name}<br><span class="font-normal text-gray-400">(${H.max_score})</span></th>`).join("")}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${E.map((H,k)=>{const m=t.reduce((o,u)=>{var v;return o+(((v=l[H.id])==null?void 0:v[u.id])??0)},0),f=m/2,g=m>0?ro(f):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${k+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${H.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${H.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${H.main_room??"—"}</td>
                ${t.map(o=>{var v;const u=(v=l[H.id])==null?void 0:v[o.id];return`<td class="px-2 py-2 text-center ${u!=null?"text-gray-800 font-medium":"text-gray-300"}">${u??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${m||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${m>0?f.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${g}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};x();let q=[...b];_(q);const A=()=>{x();const E=$.value,H=C.value,k=document.getElementById("rsa-filter-search").value.toLowerCase();q=b.filter(m=>{var f,g;return(!E||Se(m.main_room)===E)&&(!H||qe(m.main_room)===H)&&(!k||((f=m.full_name)==null?void 0:f.toLowerCase().includes(k))||((g=m.student_code)==null?void 0:g.includes(k)))}),_(q)};$.addEventListener("change",A),C.addEventListener("change",A),document.getElementById("rsa-filter-search").addEventListener("input",A),(I=document.getElementById("btn-sync-rs"))==null||I.addEventListener("click",async()=>{const E=document.getElementById("btn-sync-rs");if(!e.readingScoreSheetId){T("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}E.disabled=!0,E.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:H}=await se(async()=>{const{syncCentralBatch:u}=await import("./sync-CtuAgrx7.js");return{syncCentralBatch:u}},__vite__mapDeps([13,7,4])),k=q.map(u=>({id:u.id,student_code:u.student_code})),m=new Set(k.map(u=>u.id)),f=new Set(t.map(u=>u.id)),g=d.filter(u=>m.has(u.student_id)&&f.has(u.column_id)),o=await H(e.readingScoreSheetId,e.readingScoreSheetTab,t,g,k,{studentColRange:e.readingScoreStudentRange||"J8:J3000"});if(!o){T("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}T(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${k.length} คน / ${o} คะแนนแล้ว`,"success")}catch(H){T("Sync ไม่สำเร็จ: "+ae(H),"error")}finally{E.disabled=!1,E.textContent="↑ Sync ไปชีทกลาง"}}),(L=document.getElementById("btn-fill-reading-eval"))==null||L.addEventListener("click",async()=>{const E=document.getElementById("btn-fill-reading-eval");if(!e.readingEvalClassSheetCol){T("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}E.disabled=!0,E.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:H}=await se(async()=>{const{syncReadingEvalToClassSheets:g}=await import("./sync-CtuAgrx7.js");return{syncReadingEvalToClassSheets:g}},__vite__mapDeps([13,7,4])),{getAllClassesForFill:k}=await se(async()=>{const{getAllClassesForFill:g}=await import("./api-CWYJTdOa.js");return{getAllClassesForFill:g}},__vite__mapDeps([0,1,2,3,4])),m={};for(const g of b){const o=t.reduce((u,v)=>{var B;return u+(((B=l[g.id])==null?void 0:B[v.id])??0)},0);if(o>0){const u=o/2;m[g.id]={label:da(u).label,score100:u}}}const f=await k();await H(f,m,e.readingEvalClassSheetCol),T(`ป้อนผลประเมินอ่านฯ ไป ${f.length} ห้องสำเร็จ`,"success")}catch(H){T("ป้อนไม่สำเร็จ: "+ae(H),"error")}finally{E.disabled=!1,E.textContent="📝 ป้อนผล → ทุกวิชา"}})},h=()=>{var d,p,l;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const t=c.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${c.map(r).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${c.length} หัวข้อ · รวม ${c.reduce((b,$)=>b+$.max_score,0)} คะแนน</span>
        </div>
        <div>${t}</div>
        <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet</p>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
            <input type="text" id="rsa-sheet-id" value="${e.readingScoreSheetId??""}" placeholder="1BxiMV..."
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
            <input type="text" id="rsa-sheet-tab" value="${e.readingScoreSheetTab??""}" placeholder="Sheet1"
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
            <input type="text" id="rsa-student-range" value="${e.readingScoreStudentRange??"J8:J3000"}" placeholder="เช่น J8:J3000"
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <button id="rsa-save-sheet" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0">บันทึก</button>
          </div>
          <div class="border-t border-gray-100 mt-3 pt-3">
            <p class="text-xs font-semibold text-gray-500 mb-2">📝 ป้อนผลประเมิน → ชีทรายวิชา (ทุกห้อง)</p>
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-400 w-20 flex-shrink-0">คอลัมน์:</span>
              <input type="text" id="rsa-eval-col" value="${e.readingEvalClassSheetCol??""}" placeholder="เช่น EZ"
                class="w-24 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono uppercase bg-white focus:outline-none focus:ring-2 focus:ring-violet-300" maxlength="4" />
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${De.map(b=>b.label).join("/")})</span>
              <button id="rsa-save-eval-col" class="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-medium hover:bg-violet-700 transition flex-shrink-0">บันทึก</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mt-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-purple-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">🎯 เกณฑ์การประเมิน</h3>
          <span class="ml-auto text-xs text-gray-400">คำนวณจากคะแนนรวมแปลงเป็น 100 คะแนน</span>
        </div>
        <div class="px-5 py-4 space-y-2">
          ${De.map((b,$)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${$}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${$+1}:</span>
              <input type="text" data-rsa-label value="${he(b.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${b.min}" min="0" max="100" ${$===De.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${$===De.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${$===De.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>Xt(null,s,n,i)),document.querySelectorAll(".rsa-edit").forEach(b=>{b.addEventListener("click",()=>{const $=c.find(C=>C.id===+b.dataset.id);$&&Xt($,s,n,i)})}),document.querySelectorAll(".rsa-del").forEach(b=>{b.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${b.dataset.name}"?`))try{await On(+b.dataset.id),T("ลบแล้ว","success"),i()}catch($){T("ลบไม่สำเร็จ: "+ae($),"error")}})}),(d=document.getElementById("rsa-save-sheet"))==null||d.addEventListener("click",async()=>{var _,q,A;const b=document.getElementById("rsa-save-sheet"),$=((_=document.getElementById("rsa-sheet-id"))==null?void 0:_.value.trim())??"",C=((q=document.getElementById("rsa-sheet-tab"))==null?void 0:q.value.trim())??"",x=((A=document.getElementById("rsa-student-range"))==null?void 0:A.value.trim())??"J8:J3000";b.disabled=!0,b.textContent="⏳";try{await Promise.all([oe("readingScoreSheetId",$),oe("readingScoreSheetTab",C),oe("readingScoreStudentRange",x)]),e.readingScoreSheetId=$,e.readingScoreSheetTab=C,e.readingScoreStudentRange=x,b.textContent="✅",b.style.background="#16a34a",setTimeout(()=>{b.disabled=!1,b.textContent="บันทึก",b.style.background=""},1500),T("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),b.disabled=!1,b.textContent="บันทึก"}}),(p=document.getElementById("rsa-save-eval-col"))==null||p.addEventListener("click",async()=>{var C;const b=document.getElementById("rsa-save-eval-col"),$=(((C=document.getElementById("rsa-eval-col"))==null?void 0:C.value.trim())??"").toUpperCase();b.disabled=!0,b.textContent="⏳";try{await oe("readingEvalClassSheetCol",$),e.readingEvalClassSheetCol=$,b.textContent="✅",b.style.background="#16a34a",setTimeout(()=>{b.disabled=!1,b.textContent="บันทึก",b.style.background=""},1500),T("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),b.disabled=!1,b.textContent="บันทึก"}}),(l=document.getElementById("rsa-save-grades"))==null||l.addEventListener("click",async()=>{const b=document.getElementById("rsa-save-grades"),$=document.getElementById("rsa-grades-err");$.textContent="";const C=[...document.querySelectorAll("[data-rsa-grade-row]")].map((x,_)=>({label:x.querySelector("[data-rsa-label]").value.trim(),min:_===De.length-1?0:parseFloat(x.querySelector("[data-rsa-min]").value)}));if(C.some(x=>!x.label)){$.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if(C.some(x=>Number.isNaN(x.min)||x.min<0||x.min>100)){$.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let x=0;x<C.length-1;x++)if(C[x].min<=C[x+1].min){$.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}b.disabled=!0,b.textContent="⏳";try{await oe("readingEvalThresholds",JSON.stringify(C)),Ft({readingEvalThresholds:JSON.stringify(C)}),b.textContent="✅",b.style.background="#16a34a",setTimeout(()=>{b.disabled=!1,b.textContent="บันทึกเกณฑ์",b.style.background=""},1500),T("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(x){T("บันทึกไม่สำเร็จ: "+ae(x),"error"),b.disabled=!1,b.textContent="บันทึกเกณฑ์"}})},y=t=>{document.querySelectorAll("[data-tab]").forEach(d=>{d.className=d.dataset.tab===t?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),t==="scores"?a():h()};i()}const Ce={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function ze(e,s){var i;(i=document.getElementById("admin-picker"))==null||i.remove();const n=document.createElement("div");n.id="admin-picker",n.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const r=(e.target.closest("td,th,button")??e.target).getBoundingClientRect();n.style.top=Math.min(r.bottom+4,window.innerHeight-60)+"px",n.style.left=Math.max(4,Math.min(r.left,window.innerWidth-220))+"px";const c=document.createElement("button");c.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",c.textContent="✕ ล้าง",c.onclick=()=>{n.remove(),s(null)},n.appendChild(c),Object.entries(Ce).forEach(([w,a])=>{const h=document.createElement("button");h.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${a.bg} ${a.color} hover:opacity-80 transition`,h.textContent=a.label,h.title=a.fullLabel,h.onclick=()=>{n.remove(),s(w)},n.appendChild(h)}),document.body.appendChild(n),setTimeout(()=>document.addEventListener("click",()=>n.remove(),{once:!0}),50)}const Jt=["อา","จ","อ","พ","พฤ","ศ","ส"];function oo(e,s){const n=[],r=new Date(e),c=new Date(s),i=r.getDay()%7;i&&r.setDate(r.getDate()-i);let w=new Date(r),a=1;for(;w<=c;){const h=[];for(let y=0;y<5;y++){const t=new Date(w);t.setDate(t.getDate()+y),t<=c&&h.push({date:new Date(t),ds:t.toISOString().slice(0,10)})}h.length&&(n.push({n:a,days:h}),a++),w.setDate(w.getDate()+7)}return n}function Qt(e,s){const n=s.reduce((c,i)=>{var w;return c+(((w=Ce[e[i.ds]])==null?void 0:w.score)??0)},0),r=s.length*2;return r>0?Math.min(10,Math.max(0,Math.round(n/r*100)/10)):0}function Xe(e){return`${e.getDate()}/${e.getMonth()+1}`}async function La(e){var b,$,C,x;re("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let s=null,n=e;if(!n)try{const{data:_}=await le.auth.getSession(),q=(($=(b=_==null?void 0:_.session)==null?void 0:b.user)==null?void 0:$.id)??null;if(q){const{data:A}=await le.from("teachers").select("*").eq("profile_id",q).maybeSingle();n=A??null}}catch(_){console.error("Failed to load teacher session:",_)}const[r,c]=await Promise.all([pe().catch(()=>({})),sa().catch(()=>[])]),i=c,w=(r.prayerScannerTeachers||"").split(/[\s,]+/).map(_=>_.trim()).filter(Boolean);let a=!1;if(n){const{data:_}=await le.from("profiles").select("role").eq("id",n.profile_id).maybeSingle();a=w.includes(n.teacher_code)||n.staff_type==="แอดมิน"||n.position==="admin"||(_==null?void 0:_.role)==="admin"}ne(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">บันทึกการมาละหมาดทุกห้อง — Sync รายวันลงชีท Solat</p>
      </div>
      <div id="pr-tab-actions"></div>
    </div>
    <div class="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit flex-wrap">
      <button id="pr-tab-scores" data-tab="scores"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700">
        📊 คะแนน
      </button>
      <button id="pr-tab-history" data-tab="history"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
        🖥️ มอนิเตอร์สแกนล่าสุด
      </button>
      <button id="pr-tab-scanners" data-tab="scanners"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
        🔑 มอบสิทธิ์สแกนเนอร์
      </button>
      <button id="pr-tab-config" data-tab="config"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
        ⚙️ ตั้งค่า
      </button>
      ${a?`
      <button id="pr-tab-scanner-cam" data-tab="scanner-cam"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 font-bold">
        📷 เปิดกล้องสแกน
      </button>
      `:""}
    </div>
    <div id="pr-tab-content"></div>
  </div>`);const h=()=>{var Y;const _=r.semester_start,q=r.semester_end,A=_&&q?oo(_,q):[],I=A.flatMap(P=>P.days);if(document.getElementById("pr-tab-actions").innerHTML=`
      <div class="flex flex-wrap justify-end gap-2">
        <button id="btn-fill-prayer-classes"
          class="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition">
          เติมเข้ารายวิชาศาสนา
        </button>
        <button id="btn-sync-all-prayer"
          class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition">
          ↑ Sync ทุกห้อง
        </button>
        <button id="btn-sync-prayer"
          class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
          ↑ Sync ห้องนี้
        </button>
      </div>`,(Y=document.getElementById("btn-fill-prayer-classes"))==null||Y.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const P=document.getElementById("btn-fill-prayer-classes"),G=P.textContent;P.disabled=!0,P.textContent="กำลังเติม...";try{const K=await Rn({semesterStart:r.semester_start,semesterEnd:r.semester_end,attendanceScoreMode:r.attendanceScoreMode??"recorded"});T(`เติมรายวิชาศาสนา ${K.classes} รายวิชา / ${K.scores} คะแนนแล้ว`,"success")}catch(K){T("เติมไม่สำเร็จ: "+ae(K),"error")}finally{P.disabled=!1,P.textContent=G}}),document.getElementById("pr-tab-content").innerHTML=`
      <div class="flex items-center gap-2 flex-wrap mb-3">
        <!-- Room searchable picker -->
        <div class="relative" id="pr-room-picker-wrap">
          <button id="pr-room-btn" type="button"
            class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px] text-left flex items-center justify-between gap-2">
            <span id="pr-room-label" class="truncate">${i[0]??"—"}</span>
            <span class="text-gray-400">▾</span>
          </button>
          <div id="pr-room-dropdown"
            class="hidden absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            <div class="p-2 border-b border-gray-100">
              <input id="pr-room-search" type="text" placeholder="ค้นหาห้อง... (74 ห้อง)"
                class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div id="pr-room-list" class="overflow-y-auto" style="max-height:260px">
              ${i.map(P=>`<button type="button" data-room="${P}"
                class="pr-room-item w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 transition">
                ${P}
              </button>`).join("")}
            </div>
          </div>
        </div>
        <input id="pr-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัสนักเรียน"
          class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <span id="pr-filter-count" class="text-xs text-gray-400 flex-shrink-0"></span>
        <div class="flex gap-1 text-xs flex-shrink-0 flex-wrap">
          ${Object.values(Ce).map(P=>`<span class="px-1.5 py-0.5 ${P.bg} ${P.color} rounded cursor-default">${P.label}=${P.fullLabel??""}</span>`).join("")}
        </div>
      </div>
      ${!_||!q?`<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`:`<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`,!_||!q)return;const L="border border-gray-200 text-center text-xs select-none",E="sticky left-0 z-20 bg-white border border-gray-200",H="sticky z-20 bg-white border border-gray-200",k=P=>P>=8?"text-emerald-600":P>=6?"text-amber-500":"text-red-600",m=30,f=160,g={};let o=[],u=[];const v=(P,G=!0)=>{P&&(P.style.outline=`2px solid ${G?"#059669":"#ef4444"}`,P.style.outlineOffset="1px",setTimeout(()=>{P.style.outline="",P.style.outlineOffset=""},700))},B=async(P,G,K,D)=>{var U;g[P]||(g[P]={}),D===null?delete g[P][G]:g[P][G]=D;const z=document.querySelector(`.pr-cell[data-sid="${P}"][data-date="${G}"]`);if(z){const J=D?Ce[D]:null;Object.values(Ce).forEach(X=>z.classList.remove(X.bg)),J?(z.classList.add(J.bg),z.innerHTML=`<span class="${J.color} text-xs">${J.label}</span>`):z.innerHTML=""}S(P);const F=document.querySelector(`.adm-cell[data-sid="${P}"][data-date="${G}"]`);if(F){const J=D?Ce[D]:null;F.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${J?J.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,F.innerHTML=J?`<span class="${J.color}">${J.label}</span>`:'<span class="text-gray-200">·</span>'}try{const J=((U=A.find(X=>X.days.some(V=>V.ds===G)))==null?void 0:U.n)??null;await Ss(P,K,G,D,J,"แอดมิน"),v(z,!0),v(F,!0)}catch(J){console.error("[prayer save]",J),v(z,!1),v(F,!1),T("บันทึกไม่สำเร็จ: "+ae(J),"error")}},M=async(P,G)=>{const D=(await Promise.allSettled(P.map(([z,F,U])=>B(z,F,G,U)))).filter(z=>z.status==="rejected").length;D>0&&T(`บันทึกไม่สำเร็จ ${D} รายการ`,"error")},S=P=>{const G=g[P]??{},K=Qt(G,I),D=document.getElementById(`pr-sc-${P}`);D&&(D.textContent=K,D.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${k(K)} text-xs`)},j=(P,G)=>{if(document.getElementById("pr-filter-count").textContent=`${P.length} คน · ${I.length} วัน`,!P.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${E} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${H} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${H} bg-gray-50 text-left px-2" style="left:96px;min-width:${f}px">ชื่อ-นามสกุล</th>
              ${A.map(K=>`<th colspan="${K.days.length}"
                class="${L} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${K.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${K.n}">
                Week${K.n} ✎</th>`).join("")}
              <th class="${L} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${E} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${H} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${H} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${f}px">ชื่อ</th>
              ${A.flatMap(K=>K.days.map(D=>`<th class="${L} bg-gray-100 text-gray-400 font-normal"
                style="width:${m}px;min-width:${m}px;font-size:9px">
                ${Jt[D.date.getDay()]}<br/>${Xe(D.date)}</th>`)).join("")}
              <th class="${L} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${P.map((K,D)=>{const z=g[K.id]??{},F=Qt(z,I);return`<tr class="hover:bg-gray-50/60" data-sid="${K.id}">
                <td class="${E} text-center text-gray-400" style="width:28px">${D+1}</td>
                <td class="${H} text-center font-mono text-gray-600" style="left:28px;width:68px">${K.student_code??"—"}</td>
                <td class="${H} px-2" style="left:96px;min-width:${f}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${K.image_url?`<img src="${K.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${K.full_name??"—"}</span>
                  </div>
                </td>
                ${A.flatMap(U=>U.days.map(J=>{const X=z[J.ds]??null,V=X?Ce[X]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${V?V.bg:""}"
                    data-sid="${K.id}" data-date="${J.ds}" data-room="${G}"
                    style="width:${m}px;min-width:${m}px;height:28px">
                    ${V?`<span class="${V.color} text-xs">${V.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${k(F)} text-xs"
                  id="pr-sc-${K.id}" style="min-width:48px">${F}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",K=>{const D=K.target.closest(".pr-week-th");if(!D)return;const z=+D.dataset.week,F=A.find(U=>U.n===z);F&&Q(F,o,N)}),document.getElementById("pr-grid-wrap").addEventListener("click",K=>{const D=K.target.closest(".pr-cell");if(!D)return;K.stopPropagation();const z=+D.dataset.sid,F=D.dataset.date,U=D.dataset.room;ze(K,J=>B(z,F,U,J))})},R=async(P,G="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[K,D]=await Promise.all([Wn(P),Yn(P,_,q)]);o=K,Object.keys(g).forEach(F=>delete g[F]);for(const F of o)g[F.id]={};for(const F of D)g[F.student_id]||(g[F.student_id]={}),g[F.student_id][F.check_date]=F.status;u=I.map(F=>F.ds);const z=G?o.filter(F=>{var U,J;return((U=F.full_name)==null?void 0:U.toLowerCase().includes(G))||((J=F.student_code)==null?void 0:J.includes(G))}):o;j(z,P)}catch(K){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${K.message}</div>`}};let N=i[0]??"";const O=P=>{N=P,document.getElementById("pr-room-label").textContent=P,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(K=>{const D=K.dataset.room===P;K.classList.toggle("bg-indigo-50",D),K.classList.toggle("font-semibold",D),K.classList.toggle("text-indigo-700",D)});const G=document.getElementById("pr-filter-search").value.toLowerCase();R(P,G)};document.getElementById("pr-room-btn").addEventListener("click",P=>{P.stopPropagation();const G=document.getElementById("pr-room-dropdown");G.classList.toggle("hidden"),G.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",P=>{const G=P.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(K=>{K.style.display=K.dataset.room.toLowerCase().includes(G)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",P=>{const G=P.target.closest(".pr-room-item");G&&O(G.dataset.room)}),document.addEventListener("click",()=>{var P;(P=document.getElementById("pr-room-dropdown"))==null||P.classList.add("hidden")},{capture:!0,once:!1}),N&&O(N),document.getElementById("pr-filter-search").addEventListener("input",P=>{const G=P.target.value.toLowerCase();if(!o.length)return;const K=G?o.filter(D=>{var z,F;return((z=D.full_name)==null?void 0:z.toLowerCase().includes(G))||((F=D.student_code)==null?void 0:F.includes(G))}):o;j(K,N)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-prayer");if(!r.prayerSheetId){T("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const G=Object.values(g).flatMap(D=>Object.keys(D)),K=[...new Set([...u,...G])].sort();if(!K.length){T("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.disabled=!0,P.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:D}=await se(async()=>{const{syncPrayerSheet:F}=await import("./sync-CtuAgrx7.js");return{syncPrayerSheet:F}},__vite__mapDeps([13,7,4])),z=o.map(F=>({id:F.id,student_code:F.student_code}));await D(r.prayerSheetId,r.prayerSheetTab||"Solat",r.prayerStudentRange||"A3:A3000",K,g,z),T(`Sync ละหมาด ${z.length} คน × ${K.length} วัน สำเร็จ`,"success")}catch(D){T("Sync ไม่สำเร็จ: "+ae(D),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-all-prayer");if(!r.prayerSheetId){T("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}P.disabled=!0,P.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:G}=await se(async()=>{const{syncPrayerSheet:ee}=await import("./sync-CtuAgrx7.js");return{syncPrayerSheet:ee}},__vite__mapDeps([13,7,4])),{getAllPrayerRecords:K,getStudents:D}=await se(async()=>{const{getAllPrayerRecords:ee,getStudents:de}=await import("./api-CWYJTdOa.js");return{getAllPrayerRecords:ee,getStudents:de}},__vite__mapDeps([0,1,2,3,4])),[z,F]=await Promise.all([K(),D()]),U={};for(const ee of z)U[ee.student_id]||(U[ee.student_id]={}),U[ee.student_id][ee.check_date]=ee.status;const X=F.filter(ee=>ee.religion_room).map(ee=>({id:ee.id,student_code:ee.student_code})),V=[...new Set(z.map(ee=>ee.check_date))].sort(),te=[...new Set([...u,...V])].sort();if(!te.length||!X.length){T("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.textContent=`⏳ Sync ${X.length} คน × ${te.length} วัน...`,await G(r.prayerSheetId,r.prayerSheetTab||"Solat",r.prayerStudentRange||"A3:A3000",te,U,X),T(`✅ Sync ทุกห้อง ${X.length} คน × ${te.length} วัน สำเร็จ`,"success")}catch(G){T("Sync ไม่สำเร็จ: "+ae(G),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ทุกห้อง"}});const Q=(P,G,K)=>{var U;(U=document.getElementById("admin-prayer-modal"))==null||U.remove();const D=document.createElement("div");D.id="admin-prayer-modal",D.className="fixed inset-0 z-[80] flex flex-col bg-white";const z=`${Xe(P.days[0].date)}–${Xe(P.days[P.days.length-1].date)}`,F=(J,X)=>{var ee;const V=((ee=g[J])==null?void 0:ee[X])??null,te=V?Ce[V]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${te?te.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${J}" data-date="${X}" data-room="${K}">
          ${te?`<span class="${te.color}">${te.label}</span>`:'<span class="text-gray-200">·</span>'}
        </button>`};D.innerHTML=`
        <div class="bg-emerald-700 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button id="adm-modal-close" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${P.n}</p>
            <p class="text-xs text-emerald-200">${z} · ${K}</p>
          </div>
          <button id="adm-all-check"
            class="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-medium rounded-lg transition">
            AllCheck
          </button>
        </div>
        <div class="overflow-auto flex-1">
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100 sticky top-0 z-10">
              <tr>
                <th class="text-left px-3 py-2.5 font-semibold text-gray-600 min-w-[160px]">นักเรียน</th>
                ${P.days.map(J=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${Jt[J.date.getDay()]} ${Xe(J.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${J.ds}" data-room="${K}">AllDay</button>
                  </th>`).join("")}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${G.map(J=>`
                <tr class="hover:bg-gray-50/50" data-sid="${J.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${J.image_url?`<img src="${J.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-xs">👤</div>'}
                      <span class="text-gray-800 truncate max-w-[120px]">${J.full_name??"—"}</span>
                    </div>
                  </td>
                  ${P.days.map(X=>`<td class="px-2 py-2 text-center">${F(J.id,X.ds)}</td>`).join("")}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${J.id}" data-room="${K}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`,document.body.appendChild(D),D.querySelector("#adm-modal-body").addEventListener("click",J=>{const X=J.target.closest(".adm-cell");if(!X)return;J.stopPropagation();const V=+X.dataset.sid,te=X.dataset.date;ze(J,ee=>B(V,te,K,ee))}),D.querySelectorAll(".adm-day-all").forEach(J=>{J.addEventListener("click",X=>{X.stopPropagation();const V=J.dataset.date;ze(X,te=>M(G.map(ee=>[ee.id,V,te]),K))})}),D.querySelectorAll(".adm-row-all").forEach(J=>{J.addEventListener("click",X=>{X.stopPropagation();const V=+J.dataset.sid;ze(X,te=>M(P.days.map(ee=>[V,ee.ds,te]),K))})}),D.querySelector("#adm-all-check").addEventListener("click",J=>{J.stopPropagation(),ze(J,X=>M(G.flatMap(V=>P.days.map(te=>[V.id,te.ds,X])),K))}),D.querySelector("#adm-modal-close").addEventListener("click",()=>D.remove())}},y=()=>{document.getElementById("pr-tab-actions").innerHTML="",s&&(clearInterval(s),s=null);const _=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Filters panel -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
          <h3 class="font-bold text-gray-800 text-sm flex items-center gap-1.5">
            🔍 คัดกรองข้อมูล
          </h3>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">เลือกวันที่สแกน</label>
            <input type="date" id="hist-date-input" value="${_}"
              class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">จุดละหมาด</label>
            <select id="hist-loc-filter"
              class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <option value="">ทุกจุดละหมาด</option>
              <option value="musolla_male">มูซอลลาชาย (ม.1 - ม.5 ชาย)</option>
              <option value="masjid_kuwait">มัสยิดคูเวต (ม.6, ปวช. ชาย)</option>
              <option value="musolla_female_1">มูซอลลาหญิง 1 (โรงอาหาร)</option>
              <option value="musolla_female_2">มูซอลลาหญิง 2 (อาคาร 5)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ค้นหา (ชื่อ / รหัส / ผู้บันทึก)</label>
            <input type="text" id="hist-search-input" placeholder="พิมพ์เพื่อค้นหา..."
              class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div class="mt-2 pt-2 border-t border-gray-50 flex items-center justify-between">
            <button id="btn-hist-refresh"
              class="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-sm">
              🔄 รีเฟรชข้อมูล
            </button>
            <label class="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer select-none">
              <input type="checkbox" id="hist-live-toggle" checked
                class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              อัปเดตอัตโนมัติ (Live)
            </label>
          </div>
          <div class="pt-2 border-t border-gray-50 flex flex-col gap-2">
            <a href="public-monitor.html" target="_blank"
              class="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all border border-slate-900 text-center shadow-sm">
              📡 เปิดศูนย์ติดตามรวม (จอเดียว)
            </a>
            <a href="prayer-dashboard.html?days=14" target="_blank"
              class="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-all border border-emerald-200/70 text-center shadow-sm">
              📊 เปิดแดชบอร์ดแนวโน้มละหมาด
            </a>
            <a href="prayer-monitor.html" target="_blank"
              class="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-all border border-indigo-200/50 text-center shadow-sm">
              🖥️ เปิดหน้าจอมอนิเตอร์แบบเรียลไทม์ (แยกหน้าจอ)
            </a>
          </div>
        </div>

        <!-- Dashboard / Summary stats -->
        <div class="md:col-span-2 flex flex-col gap-4">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-total" class="text-2xl font-extrabold text-indigo-700">0</p>
              <p class="text-[10px] text-indigo-500 font-semibold mt-0.5">สแกนทั้งหมด</p>
            </div>
            <div class="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-pray" class="text-2xl font-extrabold text-emerald-600">0</p>
              <p class="text-[10px] text-emerald-500 font-semibold mt-0.5">🟢 ละหมาด</p>
            </div>
            <div class="bg-purple-50/50 border border-purple-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-usor" class="text-2xl font-extrabold text-purple-700">0</p>
              <p class="text-[10px] text-purple-500 font-semibold mt-0.5">🟣 อูโซร</p>
            </div>
            <div class="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-other" class="text-2xl font-extrabold text-amber-700">0</p>
              <p class="text-[10px] text-amber-500 font-semibold mt-0.5">อื่นๆ (ขาด/ละเว้น)</p>
            </div>
          </div>

          <!-- Active Operators Panel -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex-1 min-h-[90px]">
            <p class="text-xs font-bold text-gray-500 mb-2">👥 ผู้ปฏิบัติงานบันทึก/สแกนวันนี้ (Active Operators)</p>
            <div id="hist-operators-wrap" class="flex flex-wrap gap-2">
              <span class="text-xs text-gray-400">ยังไม่มีประวัติสแกนของวันนี้</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scans List Table -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col min-h-[300px]">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📋 รายการเช็คชื่อละหมาด</h3>
          <span id="hist-table-count" class="text-xs text-gray-400">0 รายการ</span>
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-xs text-left border-collapse">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="px-4 py-3 text-center text-gray-500 font-semibold w-12">ลำดับ</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-24">เวลา</th>
                <th class="px-4 py-3 text-gray-500 font-semibold">รายชื่อนักเรียน</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-24">ห้องเรียน</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-32">จุดสแกน</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-40">ผู้บันทึกสแกน (ผู้ปฏิบัติงาน)</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-28 text-center">สถานะ</th>
              </tr>
            </thead>
            <tbody id="hist-table-body" class="divide-y divide-gray-50">
              <tr>
                <td colspan="7" class="text-center py-12 text-gray-400">กำลังโหลดข้อมูล...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;let q=[],A="",I=!1;const L=1e3,E=o=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[o]||"ไม่ระบุพื้นที่",H=o=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[o]||"bg-gray-50 text-gray-500 border-gray-100",k=async o=>{const u=[];for(let v=0;;v+=L){const{data:B,error:M}=await le.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",o).not("location","is",null).order("created_at",{ascending:!1}).range(v,v+L-1);if(M)throw M;if(u.push(...B??[]),!B||B.length<L)break}return u},m=async()=>{var v;if(!document.getElementById("hist-table-body")){s&&(clearInterval(s),s=null);return}const u=((v=document.getElementById("hist-date-input"))==null?void 0:v.value)||_;if(!I){I=!0;try{q=await k(u),f()}catch(B){console.error("Fetch history failed:",B);const M=document.getElementById("hist-table-body");M&&(M.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${B.message}</td></tr>`)}finally{I=!1}}},f=()=>{var D,z;const o=((D=document.getElementById("hist-loc-filter"))==null?void 0:D.value)||"",u=(((z=document.getElementById("hist-search-input"))==null?void 0:z.value)||"").trim().toLowerCase(),v=q.filter(F=>{var U,J,X,V;if(o&&F.location!==o||A&&(F.scanned_by||((U=F.teachers)==null?void 0:U.full_name)||"บันทึกมือ (เดิม)")!==A)return!1;if(u){const te=(((J=F.students)==null?void 0:J.full_name)||"").toLowerCase(),ee=(((X=F.students)==null?void 0:X.student_code)||"").toLowerCase(),de=(F.main_room||"").toLowerCase(),be=(F.scanned_by||((V=F.teachers)==null?void 0:V.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),ve=F.input_method==="manual"?"กรอกรหัส manual":"qr";return te.includes(u)||ee.includes(u)||de.includes(u)||be.includes(u)||ve.includes(u)}return!0}),B=v.length,M=v.filter(F=>F.status==="pray").length,S=v.filter(F=>F.status==="usor").length,j=B-M-S,R=document.getElementById("stat-hist-total"),N=document.getElementById("stat-hist-pray"),O=document.getElementById("stat-hist-usor"),Q=document.getElementById("stat-hist-other");R&&(R.textContent=B),N&&(N.textContent=M),O&&(O.textContent=S),Q&&(Q.textContent=j);const Y=new Set;q.forEach(F=>{var J;const U=F.scanned_by||((J=F.teachers)==null?void 0:J.full_name);U&&Y.add(U)});const P=document.getElementById("hist-operators-wrap");P&&(Y.size===0?P.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(P.innerHTML=Array.from(Y).map(F=>{const U=A===F;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${F.includes("(ครู)")||F.includes("ครู")?U?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":U?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${F}">${U?"✓ ":""}${F}</span>`}).join(""),P.querySelectorAll(".op-filter-chip").forEach(F=>{F.addEventListener("click",()=>{const U=F.dataset.op;A=A===U?"":U,f()})})));const G=document.getElementById("hist-table-count");G&&(G.textContent=`${v.length} รายการ`);const K=document.getElementById("hist-table-body");if(K){if(v.length===0){K.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}K.innerHTML=v.map((F,U)=>{var Te;const J=F.created_at?new Date(F.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",X=F.students,V=X!=null&&X.image_url?`<img src="${X.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((X==null?void 0:X.full_name)||"?").charAt(0)}</div>`,te=X?`<div class="flex items-center gap-2.5">
              ${V}
              <div>
                <p class="font-bold text-gray-800 leading-none">${X.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${X.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${F.student_id})</span>`,ee={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[F.status]||`<span class="text-gray-400">${F.status||"—"}</span>`,de=F.scanned_by||((Te=F.teachers)==null?void 0:Te.full_name)||"บันทึกมือ (เดิม)",be=F.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",ve=F.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${v.length-U}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${J}</td>
            <td class="px-4 py-3">${te}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${F.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${H(F.location)}">
                ${E(F.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${de}</span>
              <div class="flex flex-wrap gap-1">${be}${ve}</div>
            </td>
            <td class="px-4 py-3 text-center">${ee}</td>
          </tr>
        `}).join("")}},g=()=>{s&&(clearInterval(s),s=null);const o=document.getElementById("hist-live-toggle");o&&o.checked&&(s=setInterval(m,4e3))};setTimeout(()=>{var v,B,M;(v=document.getElementById("btn-hist-refresh"))==null||v.addEventListener("click",m),(B=document.getElementById("hist-date-input"))==null||B.addEventListener("change",()=>{A="",m()}),(M=document.getElementById("hist-loc-filter"))==null||M.addEventListener("change",f);const o=document.getElementById("hist-search-input");o&&o.addEventListener("input",f);const u=document.getElementById("hist-live-toggle");u&&u.addEventListener("change",g),m(),g()},50)},t=(_,q=!1)=>_==null||_===""?q:["1","true","yes","on"].includes(String(_).trim().toLowerCase()),d=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${i.map(_=>`<option value="${_}">${_}</option>`).join("")}
        </select>
        <input id="pr-cfg-search" type="text" placeholder="ค้นหาการตั้งค่า..."
          class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      </div>

      <!-- ตั้งค่า Sheet (Solat) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">🔗 Google Sheet ละหมาด (Solat)</span>
        </div>
        <div class="px-5 py-4 space-y-2.5">
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">Sheet ID</label>
            <input type="text" id="pr-sheet-id" value="${r.prayerSheetId??""}" placeholder="วาง ID จาก URL ของ Google Sheet"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ชื่อแท็บ</label>
            <input type="text" id="pr-sheet-tab" value="${r.prayerSheetTab??"Solat"}" placeholder="Solat"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ช่วงรหัสนักเรียน</label>
            <input type="text" id="pr-stu-range" value="${r.prayerStudentRange??"A3:A3000"}" placeholder="A3:A3000"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">คอลัมน์ที่บันทึกรหัสนักเรียนในแท็บ Solat — ค่า default: <code>A3:A3000</code></p>
          </div>
          <div class="pt-2 border-t border-gray-50">
            <p class="text-xs text-gray-400 mb-3">💡 คอลัมน์คะแนนรายวันเริ่มที่ <b>D</b> เป็นต้นไป (D=วันที่ 1, E=วันที่ 2, ...) เหมือนระบบเช็คชื่อ</p>
            <button id="pr-save-cfg"
              class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
              บันทึกการตั้งค่า
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mt-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">🛡️ ความปลอดภัยระบบสแกน</span>
        </div>
        <div class="px-5 py-4 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 cursor-pointer">
              <input id="pr-guard-male" type="checkbox" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ${t(r.prayerSameRoomGuardMaleEnabled,!0)?"checked":""} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนชายห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ถ้าเปิดไว้ แกนนำนักเรียนจะบันทึกเพื่อนห้องเดียวกันไม่ได้</span>
              </span>
            </label>
            <label class="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 cursor-pointer">
              <input id="pr-guard-female" type="checkbox" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ${t(r.prayerSameRoomGuardFemaleEnabled,!1)?"checked":""} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนหญิงห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ปิดไว้ได้เมื่อจุดสแกนมีแกนนำน้อยหรือมีห้องเดียวเป็นหลัก</span>
              </span>
            </label>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">จำนวนครั้งที่อนุญาตให้กรอกรหัสแทน QR Code ต่อเดือน/นักเรียน</label>
            <input type="number" min="0" max="31" id="pr-manual-monthly-limit" value="${Number.isFinite(parseInt(r.prayerManualEntryMonthlyLimit??"2",10))?parseInt(r.prayerManualEntryMonthlyLimit??"2",10):2}"
              class="w-32 text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">ตั้งเป็น 0 เพื่อปิดการบันทึกด้วยการกรอกรหัส</p>
          </div>
          <button id="pr-save-scanner-safety"
            class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition">
            บันทึกความปลอดภัยระบบสแกน
          </button>
        </div>
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const _=document.getElementById("pr-save-cfg"),q=document.getElementById("pr-sheet-id").value.trim(),A=document.getElementById("pr-sheet-tab").value.trim()||"Solat",I=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";_.disabled=!0,_.textContent="⏳ กำลังบันทึก...";try{await Promise.all([oe("prayerSheetId",q),oe("prayerSheetTab",A),oe("prayerStudentRange",I)]),r.prayerSheetId=q,r.prayerSheetTab=A,r.prayerStudentRange=I,_.textContent="✅ บันทึกแล้ว",_.style.background="#16a34a",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึกการตั้งค่า",_.style.background=""},1800),T("บันทึก Sheet config ละหมาดแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),_.disabled=!1,_.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var E,H,k;const _=document.getElementById("pr-save-scanner-safety"),q=(E=document.getElementById("pr-guard-male"))!=null&&E.checked?"true":"false",A=(H=document.getElementById("pr-guard-female"))!=null&&H.checked?"true":"false",I=parseInt(((k=document.getElementById("pr-manual-monthly-limit"))==null?void 0:k.value)||"2",10),L=String(Math.max(0,Math.min(31,Number.isFinite(I)?I:2)));_.disabled=!0,_.textContent="⏳ กำลังบันทึก...";try{await Promise.all([oe("prayerSameRoomGuardMaleEnabled",q),oe("prayerSameRoomGuardFemaleEnabled",A),oe("prayerManualEntryMonthlyLimit",L)]),r.prayerSameRoomGuardMaleEnabled=q,r.prayerSameRoomGuardFemaleEnabled=A,r.prayerManualEntryMonthlyLimit=L,T("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),_.textContent="✅ บันทึกแล้ว",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(m){T("บันทึกไม่สำเร็จ: "+ae(m),"error"),_.disabled=!1,_.textContent="บันทึกความปลอดภัยระบบสแกน"}})},p=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">⏱️ ช่วงเวลาเปิดระบบสแกนละหมาด</span>
        </div>
        <div class="px-5 py-4 space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">เวลาเริ่มสแกน</label>
              <input type="text" id="pr-scan-start" value="${r.prayerScanStartTime??"12:20"}" placeholder="12:20"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับแกนนำทั่วไป</label>
              <input type="text" id="pr-scan-end" value="${r.prayerScanEndTime??"12:50"}" placeholder="12:50"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับประธาน/รองประธาน</label>
              <input type="text" id="pr-scan-ext-end" value="${r.prayerScanExtendedEndTime??"13:05"}" placeholder="13:05"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
          </div>
          <button id="pr-save-scanner-time-cfg"
            class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">
            บันทึกช่วงเวลาสแกน
          </button>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">🔑 มอบสิทธิ์เครื่องสแกนเนอร์ (แกนนำสภานักเรียน / คุณครู)</span>
        </div>
        <div class="px-5 py-4 space-y-4">
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ระบุรหัสนักเรียนหรือรหัสคุณครู (กรอกหลายรหัสพร้อมกันได้ คั่นด้วยเว้นวรรคหรือลูกน้ำ)</label>
            <div class="flex gap-2">
              <input type="text" id="pr-scanner-search-input" placeholder="เช่น 24275 (นักเรียน) หรือ 1114 (ครู)"
                class="flex-1 text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <button id="btn-search-scanner-students" class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition">ค้นหารายชื่อ</button>
            </div>
          </div>
          <div id="scanner-preview-container" class="hidden border border-indigo-50 bg-indigo-50/20 rounded-xl p-4">
            <p class="text-xs font-semibold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบสิทธิ์:</p>
            <div id="scanner-preview-cards" class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3"></div>
            <button id="btn-confirm-scanner-grant" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition">
              ✓ ยืนยันและมอบสิทธิ์สแกนเนอร์
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
          <span class="text-sm font-semibold text-gray-700">📋 รายชื่อผู้สแกนเนอร์ที่ได้รับสิทธิ์ปัจจุบัน</span>
          <span id="scanner-count-badge" class="text-xs text-gray-400">0 คน</span>
        </div>
        <div id="scanners-list-wrap">
          <div class="p-8 text-center text-gray-400">กำลังโหลด...</div>
        </div>
      </div>
    `;let _=[],q={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const A=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],I=m=>(m||"").split(/[\s,]+/).map(f=>f.trim()).filter(Boolean),L=m=>String(m||"").trim(),E=m=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[m]||"ทั้งหมด",H=async(m,f)=>{const g=await pe().catch(()=>({})),o=new Set(I(g.prayerExtendedScannerStudents));f?o.add(String(m)):o.delete(String(m));const u=Array.from(o).join(",");return await oe("prayerExtendedScannerStudents",u),r.prayerExtendedScannerStudents=u,u};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const m=document.getElementById("pr-save-scanner-time-cfg"),f=document.getElementById("pr-scan-start").value.trim()||"12:20",g=document.getElementById("pr-scan-end").value.trim()||"12:50",o=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![f,g,o].every(v=>/^\d{1,2}:\d{2}$/.test(v))){T("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}m.disabled=!0,m.textContent="⏳ กำลังบันทึก...";try{await Promise.all([oe("prayerScanStartTime",f),oe("prayerScanEndTime",g),oe("prayerScanExtendedEndTime",o)]),r.prayerScanStartTime=f,r.prayerScanEndTime=g,r.prayerScanExtendedEndTime=o,T("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),m.textContent="✅ บันทึกแล้ว",setTimeout(()=>{m.disabled=!1,m.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(v){T("บันทึกไม่สำเร็จ: "+ae(v),"error"),m.disabled=!1,m.textContent="บันทึกช่วงเวลาสแกน"}});const k=async()=>{var f,g;const m=document.getElementById("scanners-list-wrap");if(m)try{const{data:o,error:u}=await le.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if(u)throw u;const v=await pe().catch(()=>({})),B=o??[],M=I(v.prayerScannerTeachers),S=new Set(I(v.prayerExtendedScannerStudents));let j=[];if(M.length>0){const{data:V,error:te}=await le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",M).order("teacher_code");if(te)throw te;j=V??[]}const R=B.length+j.length;if(document.getElementById("scanner-count-badge").textContent=`${R} คน`,R===0){m.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const N=Object.fromEntries(A.map(V=>[V.key,new Set(I(v[`prayerScanner${V.key}`]))])),O=B.map(V=>{const te=String(V.student_code||"").trim(),ee=A.filter(be=>{var ve;return(ve=N[be.key])==null?void 0:ve.has(te)}).map(be=>be.key),de=S.has(te);return{...V,type:"student",code:te,name:V.full_name||"",roomInfo:V.main_room||"",gender:L(V.gender),permission:de?"extended":"normal",permissionLabel:de?"ขยายเวลา":"ทั่วไป",assignedDays:ee,searchText:[te,V.full_name,V.main_room,V.gender,de?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),Q=j.map(V=>({...V,type:"teacher",code:String(V.teacher_code||"").trim(),name:V.full_name||"",roomInfo:V.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[V.teacher_code,V.full_name,V.dept,"ครู คุณครู"].join(" ").toLowerCase()})),Y=[...O,...Q],P=me(Y.map(V=>V.roomInfo)),G=O.filter(V=>V.gender==="ชาย").length,K=O.filter(V=>V.gender==="หญิง").length,D=O.filter(V=>V.permission==="extended").length,z=O.filter(V=>V.assignedDays.length===0).length,F=(V,te,ee="indigo")=>{const de={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${de[ee]||de.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${V}</p>
              <p class="text-lg font-extrabold leading-tight">${te}</p>
            </div>
          `};m.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${F("ทั้งหมด",R,"indigo")}
              ${F("ชาย",G,"emerald")}
              ${F("หญิง",K,"rose")}
              ${F("ครู",j.length,"slate")}
              ${F("ขยายเวลา",D,"amber")}
              ${F("ยังไม่มีเวร",z,z?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${R}`],["male",`ชาย ${G}`],["female",`หญิง ${K}`],["teacher",`ครู ${j.length}`]].map(([V,te])=>`
                  <button type="button" data-scanner-audience="${V}"
                    class="scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition">
                    ${te}
                  </button>
                `).join("")}
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button type="button" id="btn-filter-unassigned-scanner"
                  class="px-3 py-2 rounded-xl border border-rose-100 bg-rose-50 text-rose-700 text-xs font-bold hover:bg-rose-100 transition">
                  ยังไม่กำหนดวันเวร
                </button>
                <button type="button" id="btn-reset-scanner-filters"
                  class="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-500 text-xs font-bold hover:bg-gray-50 transition">
                  ล้างตัวกรอง
                </button>
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${E(q.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const U=()=>{const V=q,te=V.q.trim().toLowerCase();return Y.filter(ee=>!(V.audience==="male"&&!(ee.type==="student"&&ee.gender==="ชาย")||V.audience==="female"&&!(ee.type==="student"&&ee.gender==="หญิง")||V.audience==="teacher"&&ee.type!=="teacher"||V.type&&ee.type!==V.type||V.gender&&ee.gender!==V.gender||V.room&&ee.roomInfo!==V.room||V.permission&&ee.permission!==V.permission||V.day==="none"&&!(ee.type==="student"&&ee.assignedDays.length===0)||V.day&&V.day!=="none"&&!ee.assignedDays.includes(V.day)||te&&!ee.searchText.includes(te)))},J=()=>{m.querySelectorAll(".scanner-audience-tab").forEach(ee=>{const de=ee.dataset.scannerAudience===q.audience;ee.className=de?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const V=document.getElementById("scanner-filtered-count");V&&(V.textContent=U().length);const te=document.getElementById("scanner-active-audience-label");te&&(te.textContent=E(q.audience))},X=()=>{var ve,Te,We;J();const V=U(),te=document.getElementById("scanner-table-wrap"),ee=document.getElementById("scanner-filtered-count");ee&&(ee.textContent=V.length),document.getElementById("scanner-count-badge").textContent=V.length===R?`${R} คน`:`${V.length}/${R} คน`;const de=(Te=(ve=document.activeElement)==null?void 0:ve.id)!=null&&Te.startsWith("scanner-filter-")?document.activeElement.id:"",be=de==="scanner-filter-q"?document.activeElement.selectionStart:null;if(te.innerHTML=`
            <table class="w-full text-xs min-w-[980px]">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-left align-top">
                    <span class="block mb-1">ประเภท</span>
                    <select id="scanner-filter-type" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="student" ${q.type==="student"?"selected":""}>นักเรียน</option>
                      <option value="teacher" ${q.type==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-2 py-3 text-left align-top">
                    <span class="block mb-1">รหัส/ค้นหา</span>
                    <input id="scanner-filter-q" value="${W(q.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${P.map(Z=>`<option value="${W(Z)}" ${q.room===Z?"selected":""}>${W(Z)}</option>`).join("")}
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">เพศ</span>
                    <select id="scanner-filter-gender" class="w-24 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="ชาย" ${q.gender==="ชาย"?"selected":""}>ชาย</option>
                      <option value="หญิง" ${q.gender==="หญิง"?"selected":""}>หญิง</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ประเภทสิทธิ์</span>
                    <select id="scanner-filter-permission" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="normal" ${q.permission==="normal"?"selected":""}>ทั่วไป</option>
                      <option value="extended" ${q.permission==="extended"?"selected":""}>ขยายเวลา</option>
                      <option value="teacher" ${q.permission==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">วันรับผิดชอบ</span>
                    <select id="scanner-filter-day" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${A.map(Z=>`<option value="${Z.key}" ${q.day===Z.key?"selected":""}>${Z.full}</option>`).join("")}
                      <option value="none" ${q.day==="none"?"selected":""}>ยังไม่กำหนด</option>
                    </select>
                  </th>
                  <th class="px-4 py-3 text-right align-top">การจัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${V.length?V.map(Z=>{if(Z.type==="teacher")return`
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${W(Z.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${Z.image_url?`<img src="${W(Z.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`:'<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>'}
                            <span class="font-medium text-gray-800">${W(Z.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${W(Z.roomInfo||"—")}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${W(Z.code)}" data-name="${W(Z.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `;const we=A.map(xe=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${Z.assignedDays.includes(xe.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${W(Z.code)}" data-day="${xe.key}" data-name="${W(Z.name)}" title="เวรวัน${xe.full}">
                        ${xe.label}
                      </button>
                    `).join(" ");return`
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${W(Z.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${Z.image_url?`<img src="${W(Z.image_url)}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                          <span class="font-medium text-gray-800">${W(Z.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${W(Z.roomInfo||"—")}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${Z.gender==="หญิง"?"bg-rose-50 text-rose-700 border-rose-100":"bg-sky-50 text-sky-700 border-sky-100"} text-[10px] font-bold border">${W(Z.gender||"—")}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${Z.permission==="extended"?"bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100":"bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"}"
                          data-code="${W(Z.code)}" data-name="${W(Z.name)}" data-extended="${Z.permission==="extended"?"1":"0"}">
                          ${Z.permission==="extended"?"ขยายเวลา":"ทั่วไป"}
                        </button>
                      </td>
                      <td class="px-3 py-2">
                        <div class="flex gap-1 items-center">
                          ${we}
                          ${Z.assignedDays.length===0?'<span class="ml-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold">ยังไม่มีเวร</span>':""}
                        </div>
                      </td>
                      <td class="px-4 py-2 text-right">
                        <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                          data-id="${Z.id}" data-code="${W(Z.code)}" data-name="${W(Z.name)}" data-type="student">
                          ถอนสิทธิ์
                        </button>
                      </td>
                    </tr>
                  `}).join(""):`
                  <tr>
                    <td colspan="8" class="px-4 py-10 text-center text-gray-400 text-sm">ไม่พบรายชื่อที่ตรงกับตัวกรอง</td>
                  </tr>
                `}
              </tbody>
            </table>
          `,["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(Z=>{var we;(we=document.getElementById(Z))==null||we.addEventListener("change",xe=>{const ye=Z.replace("scanner-filter-","");q[ye]=xe.target.value,X()})}),(We=document.getElementById("scanner-filter-q"))==null||We.addEventListener("input",Z=>{q.q=Z.target.value,X()}),de){const Z=document.getElementById(de);Z==null||Z.focus(),de==="scanner-filter-q"&&be!==null&&(Z==null||Z.setSelectionRange(be,be))}m.querySelectorAll(".btn-toggle-extended-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const we=Z.dataset.code,xe=Z.dataset.name,ye=Z.dataset.extended!=="1";Z.disabled=!0,Z.textContent="กำลังบันทึก...";try{await H(we,ye),T(`ปรับสิทธิ์ "${xe}" เป็น${ye?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),k()}catch(ke){T("ปรับสิทธิ์ไม่สำเร็จ: "+ke.message,"error"),Z.disabled=!1,Z.textContent=Z.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),m.querySelectorAll(".btn-toggle-day-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{var ke;const we=Z.dataset.code,xe=Z.dataset.day,ye=Z.dataset.name;Z.disabled=!0;try{const Le=await pe().catch(()=>({})),Me=`prayerScanner${xe}`;let je=I(Le[Me]);je.includes(we)?je=je.filter(Oe=>Oe!==we):je.push(we),await oe(Me,je.join(","));const Ye=((ke=A.find(Oe=>Oe.key===xe))==null?void 0:ke.full)||xe;T(`ปรับสิทธิ์เวรวัน${Ye} ของ "${ye}" สำเร็จ`,"success"),k()}catch(Le){T("ปรับสิทธิ์เวรล้มเหลว: "+Le.message,"error"),Z.disabled=!1}})}),m.querySelectorAll(".btn-revoke-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const we=Z.dataset.type,xe=Z.dataset.name;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${xe}" หรือไม่?`))try{if(we==="student"){const ye=+Z.dataset.id,ke=Z.dataset.code,{error:Le}=await le.from("students").update({can_scan_prayer:!1}).eq("id",ye);if(Le)throw Le;await H(ke,!1);const Me=await pe().catch(()=>({}));for(const je of A){const Ye=`prayerScanner${je.key}`,Oe=I(Me[Ye]).filter(Ja=>Ja!==ke);await oe(Ye,Oe.join(","))}}else{const ye=Z.dataset.code,ke=await pe().catch(()=>({})),Le=I(ke.prayerScannerTeachers).filter(Me=>Me!==ye);await oe("prayerScannerTeachers",Le.join(","))}T(`ถอนสิทธิ์ "${xe}" สำเร็จ`,"success"),k()}catch(ye){T("ทำรายการไม่สำเร็จ: "+ye.message,"error")}})})};m.querySelectorAll("[data-scanner-audience]").forEach(V=>{V.addEventListener("click",()=>{q.audience=V.dataset.scannerAudience,q.type="",q.gender="",q.audience==="teacher"&&(q.day="",q.permission=""),X()})}),(f=document.getElementById("btn-filter-unassigned-scanner"))==null||f.addEventListener("click",()=>{q.day="none",q.type="student",X()}),(g=document.getElementById("btn-reset-scanner-filters"))==null||g.addEventListener("click",()=>{q={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},X()}),X()}catch(o){m.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${o.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const m=document.getElementById("pr-scanner-search-input").value.trim();if(!m){T("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const f=m.split(/[\s,]+/).map(g=>g.trim()).filter(Boolean);if(f.length)try{const[g,o]=await Promise.all([le.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",f),le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",f)]);if(g.error)throw g.error;if(o.error)throw o.error;const u=g.data??[],v=o.data??[];_=[...u.map(S=>({...S,code:S.student_code,type:"student",display_info:`รหัส ${S.student_code} · ห้อง ${S.main_room||"—"} · ${S.gender||"ไม่ระบุเพศ"}`})),...v.map(S=>({...S,code:S.teacher_code,type:"teacher",display_info:`รหัสครู ${S.teacher_code} · กลุ่มสาระ ${S.dept||"—"}`}))];const B=document.getElementById("scanner-preview-container"),M=document.getElementById("scanner-preview-cards");if(!_.length){B.classList.add("hidden"),T("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}B.classList.remove("hidden"),M.innerHTML=_.map(S=>`
          <div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">
            ${S.type==="student"?S.image_url?`<img src="${S.image_url}" class="student-avatar-premium w-10 h-14" />`:'<div class="student-avatar-premium-placeholder w-10 h-14 bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">👤</div>':S.image_url?`<img src="${S.image_url}" class="w-10 h-10 rounded-full object-cover flex-shrink-0"/>`:'<div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">👨‍🏫</div>'}
            <div class="min-w-0">
              <p class="font-bold text-gray-800 text-xs truncate">
                ${S.full_name}
                ${S.type==="teacher"?'<span class="ml-1 px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">คุณครู</span>':""}
              </p>
              <p class="text-[10px] text-gray-400">${S.display_info}</p>
            </div>
          </div>
        `).join("")}catch(g){T("ค้นหาล้มเหลว: "+g.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!_.length)return;const m=document.getElementById("btn-confirm-scanner-grant");m.disabled=!0,m.textContent="⏳ กำลังบันทึก...";try{const f=_.filter(o=>o.type==="student").map(o=>o.id),g=_.filter(o=>o.type==="teacher").map(o=>o.code);if(f.length>0){const{error:o}=await le.from("students").update({can_scan_prayer:!0}).in("id",f);if(o)throw o}if(g.length>0){const o=await pe().catch(()=>({}));let u=I(o.prayerScannerTeachers);g.forEach(v=>{u.includes(v)||u.push(v)}),await oe("prayerScannerTeachers",u.join(","))}T(`มอบสิทธิ์สำเร็จ ${_.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),_=[],k()}catch(f){T("บันทึกไม่สำเร็จ: "+f.message,"error")}finally{m.disabled=!1,m.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),k()},l=_=>{s&&(clearInterval(s),s=null),document.querySelectorAll("[data-tab]").forEach(q=>{q.className=q.dataset.tab===_?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),_==="scores"?h():_==="history"?y():_==="scanners"?p():d()};document.getElementById("pr-tab-scores").addEventListener("click",()=>l("scores")),(C=document.getElementById("pr-tab-history"))==null||C.addEventListener("click",()=>l("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>l("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>l("config")),a&&((x=document.getElementById("pr-tab-scanner-cam"))==null||x.addEventListener("click",async()=>{const{renderStudentPrayerScanner:_}=await se(async()=>{const{renderStudentPrayerScanner:q}=await import("./student-views-BkdO1EKt.js");return{renderStudentPrayerScanner:q}},__vite__mapDeps([36,7,0,1,2,3,4,27,37,6,14,38,31,9,15,12,24,34,22]));_(n)})),l("scores")}function Xt(e,s,n,r){var w;(w=document.getElementById("rsa-modal"))==null||w.remove();const c=!!e,i=document.createElement("div");i.id="rsa-modal",i.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",i.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${c?"แก้ไขหัวข้อ":"เพิ่มหัวข้อ"}</h3>
      <form id="rsa-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อหัวข้อ <span class="text-red-400">*</span></label>
          <input id="rsa-name" type="text" value="${(e==null?void 0:e.name)??""}" placeholder="เช่น การอ่านออกเสียง"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
            <input id="rsa-max" type="number" min="1" max="100" value="${(e==null?void 0:e.max_score)??20}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ลำดับ</label>
            <input id="rsa-order" type="number" min="0" value="${(e==null?void 0:e.sort_order)??0}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Google Sheet</label>
          <input id="rsa-sheetcol" type="text" value="${(e==null?void 0:e.sheet_col)??""}" placeholder="เช่น EH"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase" />
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button" id="rsa-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button type="submit" id="rsa-save"
            class="btn-primary flex-1 py-2.5 rounded-xl text-white text-sm font-semibold">${c?"บันทึก":"เพิ่ม"}</button>
        </div>
      </form>
    </div>`,document.body.appendChild(i),i.querySelector("#rsa-cancel").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelector("#rsa-form").addEventListener("submit",async a=>{a.preventDefault();const h=i.querySelector("#rsa-save");h.disabled=!0,h.textContent="กำลังบันทึก...";try{const y={name:i.querySelector("#rsa-name").value.trim(),max_score:parseInt(i.querySelector("#rsa-max").value)||20,sort_order:parseInt(i.querySelector("#rsa-order").value)||0,sheet_col:i.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:s,semester:n};c?await Gn(e.id,y):await Vn(y),T("บันทึกสำเร็จ","success"),i.remove(),r()}catch(y){T("บันทึกไม่สำเร็จ: "+ae(y),"error"),h.disabled=!1,h.textContent=c?"บันทึก":"เพิ่ม"}})}async function Ia(){var w,a,h,y;re("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let e=null,s="",n=null;try{const{data:t}=await le.auth.getSession();if(e=((a=(w=t==null?void 0:t.session)==null?void 0:w.user)==null?void 0:a.id)??null,s=((y=(h=t==null?void 0:t.session)==null?void 0:h.user)==null?void 0:y.email)??"",e){const{data:d}=await le.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",e).maybeSingle();n=d??null}}catch{}const r="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";ne(`<div class="max-w-lg mx-auto animate-fade">

    <!-- Avatar -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4 flex flex-col items-center">
      <div id="adm-avatar"
        class="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500
               text-white text-3xl font-bold flex items-center justify-center overflow-hidden border-4 border-white shadow-md mb-3">
        ${n!=null&&n.image_url?`<img src="${n.image_url}" class="w-full h-full object-cover"/>`:((n==null?void 0:n.full_name)??"A").charAt(0).toUpperCase()}
      </div>
      <p class="text-sm font-semibold text-gray-700">${(n==null?void 0:n.full_name)??"ผู้ดูแลระบบ"}</p>
      <p class="text-xs text-indigo-500 mt-0.5">ผู้ดูแลระบบ</p>
    </div>

    <!-- แก้ไขชื่อ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-3 text-sm">📝 ชื่อ-นามสกุล</h3>
      <input id="adm-name" type="text" value="${(n==null?void 0:n.full_name)??""}"
        placeholder="ชื่อ-นามสกุล" class="${r} mb-3" />
      <button id="btn-save-name"
        class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        บันทึกชื่อ
      </button>
      <div id="name-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>

    <!-- ตั้ง Username -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-1 text-sm">🔑 ยูเซอร์เนม (สำหรับ login)</h3>
      ${n!=null&&n.username?`<p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-700 font-mono">${n.username}</span></p>`:'<p class="text-xs text-amber-500 mb-3">⚠️ ยังไม่ได้ตั้งยูเซอร์เนม — ตั้งเพื่อ login โดยไม่ต้องใช้อีเมล</p>'}
      <input id="adm-username" type="text" value="${(n==null?void 0:n.username)??""}"
        placeholder="เช่น admin.school (a-z, 0-9, ., -, _ เท่านั้น)"
        autocomplete="username"
        class="${r} mb-1 font-mono lowercase" maxlength="32" />
      <p class="text-[11px] text-gray-400 mb-3">3–32 ตัว ใช้ได้เฉพาะ a-z, 0-9, จุด, ขีดกลาง, ขีดล่าง</p>
      <button id="btn-save-username"
        class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        บันทึก Username
      </button>
      <div id="username-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>

    <!-- แก้ไขอีเมล -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-1 text-sm">📧 อีเมล</h3>
      <p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-600">${s}</span></p>
      <input id="adm-email" type="email" placeholder="อีเมลใหม่"
        class="${r} mb-3" />
      <button id="btn-save-email"
        class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        เปลี่ยนอีเมล
      </button>
      <div id="email-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
      <p class="text-[11px] text-gray-400 mt-2 text-center">ระบบจะส่งลิงก์ยืนยันไปยังอีเมลใหม่ก่อนอัปเดต</p>
    </div>

    <!-- เปลี่ยนรหัสผ่าน -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="font-semibold text-gray-700 mb-3 text-sm">🔒 เปลี่ยนรหัสผ่าน</h3>
      <input id="adm-pw" type="password" placeholder="รหัสผ่านใหม่ (อย่างน้อย 6 ตัว)"
        class="${r} mb-2" />
      <input id="adm-pw2" type="password" placeholder="ยืนยันรหัสผ่านใหม่"
        class="${r} mb-3" />
      <button id="btn-save-pw"
        class="w-full py-2.5 rounded-xl bg-gray-700 text-white text-sm font-semibold hover:bg-gray-800 transition">
        เปลี่ยนรหัสผ่าน
      </button>
      <div id="pw-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>
  </div>`);const c=(t,d,p)=>{const l=document.getElementById(t);l.className=`text-xs text-center mt-2 py-2 rounded-lg ${p?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,l.textContent=d,l.classList.remove("hidden"),setTimeout(()=>l.classList.add("hidden"),3500)},i=async t=>{const{data:d,error:p}=await le.rpc("upsert_admin_teacher_profile",{p_profile_id:e,p_full_name:t.full_name??null,p_username:t.username??null,p_login_email:t.login_email??null});if(p)throw p;return d};document.getElementById("btn-save-name").addEventListener("click",async()=>{const t=document.getElementById("btn-save-name"),d=document.getElementById("adm-name").value.trim();if(!d){c("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}t.disabled=!0,t.textContent="กำลังบันทึก...";try{await i({full_name:d,login_email:s}),c("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const p=document.getElementById("user-name");p&&(p.textContent=d)}catch(p){c("name-msg","บันทึกไม่สำเร็จ: "+ae(p),!1)}finally{t.disabled=!1,t.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var l,b;const t=document.getElementById("btn-save-username"),d=document.getElementById("adm-username").value.trim().toLowerCase(),p=/^[a-z0-9._-]{3,32}$/.test(d);if(!d){c("username-msg","กรุณากรอก username",!1);return}if(!p){c("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}t.disabled=!0,t.textContent="กำลังบันทึก...";try{await i({username:d,login_email:s}),c("username-msg",`บันทึก username "${d}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=d}catch($){const C=(l=$.message)!=null&&l.includes("unique")||(b=$.message)!=null&&b.includes("duplicate")?`username "${d}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+ae($);c("username-msg",C,!1)}finally{t.disabled=!1,t.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",t=>{const d=t.target.selectionStart;t.target.value=t.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),t.target.setSelectionRange(d,d)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const t=document.getElementById("btn-save-email"),d=document.getElementById("adm-email").value.trim();if(!d||!d.includes("@")){c("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}t.disabled=!0,t.textContent="กำลังส่งลิงก์...";try{const{error:p}=await le.auth.updateUser({email:d});if(p)throw p;c("email-msg","ส่งลิงก์ยืนยันไปที่ "+d+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(p){c("email-msg","ไม่สำเร็จ: "+ae(p),!1)}finally{t.disabled=!1,t.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const t=document.getElementById("btn-save-pw"),d=document.getElementById("adm-pw").value,p=document.getElementById("adm-pw2").value;if(!d||d.length<6){c("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(d!==p){c("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}t.disabled=!0,t.textContent="กำลังเปลี่ยน...";try{const{error:l}=await le.auth.updateUser({password:d});if(l)throw l;c("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(l){c("pw-msg","ไม่สำเร็จ: "+ae(l),!1)}finally{t.disabled=!1,t.textContent="เปลี่ยนรหัสผ่าน"}})}async function Ca(){var w;const e=a=>{document.getElementById("main-content").innerHTML=a};(a=>{document.querySelectorAll("[data-nav]").forEach(h=>{const y=h.dataset.nav===a;h.classList.toggle("bg-indigo-800",y),h.classList.toggle("text-white",y),h.classList.toggle("text-indigo-200",!y)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const r=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),c=(a,h,y,t)=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${a} ${h}</p>
      <p id="${y}-today" class="text-3xl font-extrabold ${t}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${y}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${y}-total" class="font-bold text-gray-600">—</span>
      </div>
    </div>`;e(`<div class="max-w-xl mx-auto animate-fade">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">${r}</p>
      </div>
      <button id="stat-refresh" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">🔄 รีเฟรช</button>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      ${c("👨‍🏫","ครู","stat-teacher","text-indigo-600")}
      ${c("🎒","นักเรียน","stat-student","text-emerald-600")}
    </div>
    <p class="text-center text-[11px] text-gray-400">อัปเดตล่าสุด: <span id="stat-updated">—</span></p>
  </div>`);const i=async()=>{try{const a=await ds();document.getElementById("stat-teacher-today").textContent=a.teacherToday,document.getElementById("stat-teacher-month").textContent=a.teacherMonth,document.getElementById("stat-teacher-total").textContent=a.teacherTotal,document.getElementById("stat-student-today").textContent=a.studentToday,document.getElementById("stat-student-month").textContent=a.studentMonth,document.getElementById("stat-student-total").textContent=a.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{T("โหลดสถิติไม่สำเร็จ","error")}};await i(),(w=document.getElementById("stat-refresh"))==null||w.addEventListener("click",i)}async function Ba(){var w;const e=a=>{document.getElementById("main-content").innerHTML=a};(a=>document.querySelectorAll("[data-nav]").forEach(h=>{h.classList.toggle("bg-indigo-800",h.dataset.nav===a),h.classList.toggle("text-white",h.dataset.nav===a),h.classList.toggle("text-indigo-200",h.dataset.nav!==a)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const n=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],r=async()=>{const a=await Mt(),h=n.map(t=>({building:t,rooms:a.filter(d=>d.building===t)}));[...new Set(a.map(t=>t.building).filter(t=>!n.includes(t)))].forEach(t=>h.push({building:t,rooms:a.filter(d=>d.building===t)})),document.getElementById("crm-content").innerHTML=h.filter(t=>t.rooms.length>0).map(t=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50 bg-gray-50/50">
          <h3 class="font-bold text-gray-700">🏫 ${t.building}
            <span class="text-xs font-normal text-gray-400 ml-1">${t.rooms.length} ห้อง</span>
          </h3>
          <button class="crm-add-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            data-building="${t.building}">＋ เพิ่มห้อง</button>
        </div>
        <div class="divide-y divide-gray-50">
          ${t.rooms.map(d=>`
          <div class="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition" data-id="${d.id}">
            <span class="w-20 font-mono text-sm font-semibold text-indigo-700 flex-shrink-0">${d.room_number}</span>
            <span class="flex-1 text-sm text-gray-700">${d.name??"—"}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${d.is_teaching_room?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-500"}">
              ${d.is_teaching_room?"ห้องเรียน":"ห้องพิเศษ"}
            </span>
            <button class="crm-edit-btn text-xs text-indigo-400 hover:text-indigo-700 px-2" data-id="${d.id}">แก้ไข</button>
            <button class="crm-del-btn text-xs text-red-400 hover:text-red-600 px-1" data-id="${d.id}">ลบ</button>
          </div>`).join("")}
        </div>
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(t=>{t.addEventListener("click",()=>i(null,t.dataset.building,a))}),document.querySelectorAll(".crm-edit-btn").forEach(t=>{const d=a.find(p=>p.id===parseInt(t.dataset.id));d&&t.addEventListener("click",()=>i(d,d.building,a))}),document.querySelectorAll(".crm-del-btn").forEach(t=>{t.addEventListener("click",()=>{const d=a.find(p=>p.id===parseInt(t.dataset.id));c(d)})})},c=a=>{var y;(y=document.getElementById("crm-confirm"))==null||y.remove();const h=document.createElement("div");h.id="crm-confirm",h.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",h.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${a==null?void 0:a.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${a==null?void 0:a.building}${a!=null&&a.name?" · "+a.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(h),h.querySelector("#crm-conf-no").addEventListener("click",()=>h.remove()),h.querySelector("#crm-conf-yes").addEventListener("click",async()=>{h.remove();try{await Dn(a.id),T("ลบห้องแล้ว ✅","success"),r()}catch(t){T("ลบไม่สำเร็จ: "+ae(t),"error")}})},i=(a,h,y)=>{var p;(p=document.getElementById("crm-modal"))==null||p.remove();const t=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...y.map(l=>l.building)])],d=document.createElement("div");d.id="crm-modal",d.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",d.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${a?"แก้ไขห้อง":"เพิ่มห้องใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${t.map(l=>`<option value="${l}" ${l===((a==null?void 0:a.building)??h)?"selected":""}>${l}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หมายเลขห้อง <span class="text-red-400">*</span></label>
          <input id="crm-number" type="text" value="${(a==null?void 0:a.room_number)??""}" placeholder="เช่น 531, 212-213"
            class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm font-mono" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง (ถ้ามี)</label>
          <input id="crm-name" type="text" value="${(a==null?void 0:a.name)??""}" placeholder="เช่น ห้องสมุด, ห้องพักครู"
            class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" id="crm-teaching" class="w-4 h-4 accent-emerald-600 rounded"
            ${(a==null?void 0:a.is_teaching_room)??!0?"checked":""} />
          <label for="crm-teaching" class="text-sm text-gray-700">เป็นห้องเรียน (ครูสามารถเลือกได้)</label>
        </div>
        <div class="flex gap-3 pt-2">
          <button id="crm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="crm-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>
    </div>`,document.body.appendChild(d),d.querySelector("#crm-cancel").addEventListener("click",()=>d.remove()),d.querySelector("#crm-save").addEventListener("click",async()=>{const l=d.querySelector("#crm-save"),b=d.querySelector("#crm-building").value,$=d.querySelector("#crm-number").value.trim(),C=d.querySelector("#crm-name").value.trim()||null,x=d.querySelector("#crm-teaching").checked;if(!b||!$){T("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}l.disabled=!0,l.textContent="⏳";try{a?await Sn(a.id,{building:b,room_number:$,name:C,is_teaching_room:x}):await Ln({building:b,room_number:$,name:C,is_teaching_room:x}),T(a?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),d.remove(),r()}catch(_){T("บันทึกไม่สำเร็จ: "+ae(_),"error"),l.disabled=!1,l.textContent="บันทึก"}})};e(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">จัดการหมายเลขห้องสำหรับครูเลือกระบุ</p>
      </div>
      <button id="crm-add-new" class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        ＋ เพิ่มห้องใหม่
      </button>
    </div>
    <div id="crm-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`),await r(),(w=document.getElementById("crm-add-new"))==null||w.addEventListener("click",async()=>{const a=await Mt().catch(()=>[]);i(null,"อาคาร 1",a)})}const lo=(e,s=[])=>[1,2,3,4,5,6,7,8,9].map(n=>{const r=s.includes(n);return`<button type="button" data-period="${n}"
      class="${e}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${r?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-400"}">${n}</button>`}).join(""),At=(e,s,n="",r=[])=>`
  <div class="${e}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${e}-session-label text-xs font-semibold text-violet-700">วันที่ ${s+1}</span>
      <button type="button" class="${e}-session-remove ${s===0?"hidden":""} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${e}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${n}"/>
    <div class="flex flex-wrap gap-1.5 ${e}-session-pills">${lo(e,r)}</div>
  </div>`;function Ta(e,s){const n=e.querySelector(`#${s}-sessions-list`),r=()=>{n.querySelectorAll(`.${s}-session-pill`).forEach(i=>{i.onclick=null,i.addEventListener("click",()=>{const w=i.classList.contains("bg-violet-600");i.className=`${s}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${w?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),n.querySelectorAll(`.${s}-session-remove`).forEach(i=>{i.onclick=null,i.addEventListener("click",()=>{i.closest(`.${s}-session`).remove(),c()})})},c=()=>{const i=[...n.querySelectorAll(`.${s}-session`)];i.forEach((w,a)=>{w.querySelector(`.${s}-session-label`).textContent=`วันที่ ${a+1}`,w.querySelector(`.${s}-session-remove`).classList.toggle("hidden",i.length<=1)}),r()};e.querySelector(`#${s}-add-session`).addEventListener("click",()=>{const i=n.querySelectorAll(`.${s}-session`).length,w=document.createElement("div");w.innerHTML=At(s,i),n.appendChild(w.firstElementChild),c()}),r()}function ja(e,s){return[...e.querySelectorAll(`.${s}-session`)].map(n=>({date:n.querySelector(`.${s}-session-date`).value,periods:[...n.querySelectorAll(`.${s}-session-pill.bg-violet-600`)].map(r=>parseInt(r.dataset.period))}))}const io={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},Aa=e=>io[e]??"",qa=e=>{var n,r;const s=(((n=e.target_teacher_ids)==null?void 0:n.length)??0)+(((r=e.target_student_ids)==null?void 0:r.length)??0);return s?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${s} คน</span>`:""};async function Ma(e,s,n="all"){try{const r=n==="teacher"?["all_teachers"]:n==="student"?["all_students"]:n==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(r.map(c=>le.functions.invoke("send-push",{body:{title:`📢 ${e}`,body:(s??"").slice(0,150),url:c==="all_students"?"student.html":"teacher.html",target:c}})))}catch{}}let yt=null;function Da(){return yt||(yt=Promise.all([ge(),Ne()]).then(([e,s])=>({teachers:e,students:s})).catch(()=>({teachers:[],students:[]}))),yt}async function Ha(){var w;re("announcements"),document.getElementById("page-title").textContent="ประกาศ";const e=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=a=>new Date(a).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ne(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ประกาศที่แสดงให้ครูทุกคนเห็นหลังล็อกอิน</p>
      </div>
      <button id="ann-create-btn"
        class="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center gap-2">
        <span class="text-base">＋</span> สร้างประกาศ
      </button>
    </div>
    <div id="ann-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const n=async()=>{const a=document.getElementById("ann-list");if(!a)return;let h;try{h=await ra()}catch{a.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!h.length){a.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const y={};try{(await gs(h.map(d=>d.id))).forEach(d=>{y[d.announcement_id]=(y[d.announcement_id]??0)+1})}catch{}a.innerHTML=h.map(t=>{var d,p;return`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${t.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${t.id}">
        ${t.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':t.ann_type==="training"?'<div class="h-1 bg-gradient-to-r from-violet-400 to-purple-400"></div>':t.is_active?'<div class="h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${t.ann_type==="training"?"bg-violet-50":t.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${t.priority>0?"📌":t.ann_type==="training"?"🎓":t.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide
                ${t.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${t.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${t.ann_type==="training"?'<span class="px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full text-[11px] font-bold">🎓 อบรม/กิจกรรม</span>':""}
              ${t.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${Aa(t.audience)}
              ${qa(t)}
              ${t.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${e(t.title)}</h3>
            ${t.ann_type==="training"&&t.event_date?`
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📅 ${s(t.event_date)}</span>
                ${t.event_location?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📍 ${e(t.event_location)}</span>`:""}
                ${(d=t.event_periods)!=null&&d.length?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${t.event_periods.sort((l,b)=>l-b).join(", ")}</span>`:""}
              </div>`:t.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">${e(t.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">
              ${s(t.created_at)}
              ${(p=t.teachers)!=null&&p.full_name?` · 📝 ${e(t.teachers.full_name)}`:" · ⚙️ แอดมิน"}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${t.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${t.id}" data-title="${e(t.title)}">💬 ${y[t.id]??0} ความคิดเห็น</button>
              <span>👁️ ${t.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${t.ann_type==="training"?`<button class="ann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${t.id}" data-title="${e(t.title)}">👥 รายชื่อ</button>`:""}
            <button class="ann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${t.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${t.id}" data-active="${t.is_active}">
              ${t.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="ann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${t.id}">✏️ แก้ไข</button>
            <button class="ann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 hover:text-red-600 transition"
              data-id="${t.id}" data-title="${e(t.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`}).join(""),a.querySelectorAll(".ann-toggle-btn").forEach(t=>{t.addEventListener("click",async()=>{const d=Number(t.dataset.id),p=t.dataset.active==="true";t.disabled=!0,t.textContent="...";try{await it(d,{isActive:!p}),await n()}catch{T("บันทึกไม่สำเร็จ","error"),t.disabled=!1}})}),a.querySelectorAll(".ann-edit-btn").forEach(t=>{t.addEventListener("click",()=>{const d=h.find(p=>p.id===Number(t.dataset.id));d&&i(d,n)})}),a.querySelectorAll(".ann-del-btn").forEach(t=>{t.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${t.dataset.title}" ?`)){t.disabled=!0;try{await xs(Number(t.dataset.id)),await n()}catch{T("ลบไม่สำเร็จ","error"),t.disabled=!1}}})}),a.querySelectorAll(".ann-rsvp-list-btn").forEach(t=>{t.addEventListener("click",async()=>c(Number(t.dataset.id),t.dataset.title))}),a.querySelectorAll(".ann-comments-view-btn").forEach(t=>{t.addEventListener("click",async()=>r(Number(t.dataset.id),t.dataset.title,n))})},r=async(a,h,y)=>{const t=await ks(a).catch(()=>[]),d=l=>new Date(l).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),p=document.createElement("div");p.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",p.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${e(h)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${t.length?t.map(l=>{var b,$;return`
            <div class="flex items-start gap-2" data-comment-id="${l.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${e((((b=l.teachers)==null?void 0:b.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${e((($=l.teachers)==null?void 0:$.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${l.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${e(l.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${d(l.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(p),p.querySelector("#comments-list-close").onclick=()=>p.remove(),p.addEventListener("click",l=>{l.target===p&&p.remove()}),p.querySelectorAll(".comment-del-btn").forEach(l=>{l.addEventListener("click",async()=>{var b;if(confirm("ลบความคิดเห็นนี้?"))try{await Es(Number(l.dataset.id)),(b=p.querySelector(`[data-comment-id="${l.dataset.id}"]`))==null||b.remove(),await(y==null?void 0:y())}catch($){T("ลบไม่สำเร็จ: "+ae($),"error")}})})},c=async(a,h)=>{const{getAnnouncementRsvps:y}=await se(async()=>{const{getAnnouncementRsvps:$}=await import("./api-CWYJTdOa.js");return{getAnnouncementRsvps:$}},__vite__mapDeps([0,1,2,3,4])),t=await y(a).catch(()=>[]),d={yes:[],maybe:[],no:[]};t.forEach($=>{d[$.response]&&d[$.response].push($)});const p=$=>{var C,x;return`<li class="text-sm text-gray-700">${e(((C=$.teachers)==null?void 0:C.full_name)??"?")} <span class="text-xs text-gray-400">${((x=$.teachers)==null?void 0:x.dept)??""}</span></li>`},l=($,C,x,_)=>d[$].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${_} mb-1.5">${C} ${x} (${d[$].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${d[$].map(p).join("")}</ul>
      </div>`:"",b=document.createElement("div");b.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",b.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[220px]">${e(h)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="rsvp-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5">
          ${t.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
          ${l("yes","✅","สนใจเข้าร่วมแน่นอน","text-emerald-700")}
          ${l("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
          ${l("no","❌","ไม่สนใจ","text-gray-500")}
          ${t.length?`<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${t.length} คน</p>`:""}
        </div>
      </div>`,document.body.appendChild(b),b.querySelector("#rsvp-list-close").onclick=()=>b.remove(),b.addEventListener("click",$=>{$.target===b&&b.remove()})},i=(a,h)=>{var H;(H=document.getElementById("ann-modal"))==null||H.remove();const y=document.createElement("div");y.id="ann-modal",y.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const t=!!(a!=null&&a.id);y.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <h3 class="font-bold text-gray-800 text-base">${t?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="ann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4 overflow-y-auto flex-1">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="ann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${e((a==null?void 0:a.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="ann-body" rows="4" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${e((a==null?void 0:a.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="ann-image-preview" class="${a!=null&&a.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="ann-image-preview-img" src="${e((a==null?void 0:a.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="ann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="ann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="ann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="ann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${e((a==null?void 0:a.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((a==null?void 0:a.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(a==null?void 0:a.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((a==null?void 0:a.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(a==null?void 0:a.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(a==null?void 0:a.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(a==null?void 0:a.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
            </div>
          </div>
          <!-- เจาะจงเฉพาะบุคคล -->
          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-3">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">🎯 เจาะจงเฉพาะบุคคล <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — ไม่เลือกใครเลย = แสดงตามกลุ่มเป้าหมายด้านบนตามปกติ)</span></p>
            <div>
              <label class="block text-[11px] font-medium text-gray-500 mb-1">เจาะจงครู (รหัสหรือชื่อ)</label>
              <div id="ann-target-teachers-chips" class="mb-2"></div>
              <div id="ann-target-teachers-wrap"></div>
            </div>
            <div>
              <label class="block text-[11px] font-medium text-gray-500 mb-1">เจาะจงนักเรียน (รหัสหรือชื่อ)</label>
              <div id="ann-target-students-chips" class="mb-2"></div>
              <div id="ann-target-students-wrap"></div>
            </div>
          </div>
          <!-- Training fields -->
          <div id="ann-training-fields" class="${(a==null?void 0:a.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="ann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${e((a==null?void 0:a.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="ann-sessions-list" class="space-y-2">
                ${At("ann",0,(a==null?void 0:a.event_date)??"",(a==null?void 0:a.event_periods)??[])}
              </div>
              ${t?'<div id="ann-add-session" class="hidden"></div>':`<button type="button" id="ann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((a==null?void 0:a.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((a==null?void 0:a.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="ann-active-toggle" data-on="${(a==null?void 0:a.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(a==null?void 0:a.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(a==null?void 0:a.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="ann-pin" data-on="${((a==null?void 0:a.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((a==null?void 0:a.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((a==null?void 0:a.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
            </button>
          </div>
          <div class="border-t border-gray-100 pt-4">
            <button type="button" id="ann-cal-ref"
              class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition text-left flex items-center gap-2 mb-3">
              📋 <span>อ้างอิงปฏิทินปฏิบัติงาน</span>
              <span class="text-[11px] font-normal text-indigo-400 ml-auto">auto-fill ข้อมูล</span>
            </button>
            <div id="ann-cal-picker" class="hidden mb-3">
              <select id="ann-cal-event-sel"
                class="w-full border border-indigo-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2">
                <option value="">— เลือกกิจกรรม —</option>
              </select>
              <div id="ann-cal-preview" class="hidden bg-indigo-50 rounded-xl p-3 space-y-1 text-xs text-indigo-800"></div>
              <button type="button" id="ann-cal-fill" class="hidden mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition w-full">
                ใส่ข้อมูลลงฟอร์ม
              </button>
            </div>
          </div>
          <div class="space-y-3">
            <div>
              <button type="button" id="ann-ack" data-on="${a!=null&&a.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${a!=null&&a.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="ann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(a==null?void 0:a.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 flex-shrink-0">
          <button id="ann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="ann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(y);const d=()=>y.remove();y.querySelector("#ann-modal-close").onclick=d,y.querySelector("#ann-modal-cancel").onclick=d,y.addEventListener("click",k=>{k.target===y&&d()});let p=null,l=null;Da().then(({teachers:k,students:m})=>{document.body.contains(y)&&(p=St({wrap:y.querySelector("#ann-target-teachers-wrap"),chipsWrap:y.querySelector("#ann-target-teachers-chips"),teachers:k,value:(a==null?void 0:a.target_teacher_ids)??[]}),l=ea({wrap:y.querySelector("#ann-target-students-wrap"),chipsWrap:y.querySelector("#ann-target-students-chips"),students:m,value:(a==null?void 0:a.target_student_ids)??[]}))});const b=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],$=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],C=(k,m)=>{const f=document.createElement("div");f.className="mt-1.5 hidden",f.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${m.map(g=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${g}">${g}</button>`).join("")}
        </div>`,k.parentNode.appendChild(f),k.addEventListener("focus",()=>f.classList.remove("hidden")),k.addEventListener("blur",()=>setTimeout(()=>f.classList.add("hidden"),150)),f.querySelectorAll(".ann-chip").forEach(g=>{g.addEventListener("mousedown",o=>o.preventDefault()),g.addEventListener("click",()=>{k.value.trim()?k.value+=(k.tagName==="TEXTAREA"?`
`:" ")+g.dataset.val:k.value=g.dataset.val,k.focus()})})};C(y.querySelector("#ann-title"),b),C(y.querySelector("#ann-body"),$);let x=(a==null?void 0:a.file_url)??null;const _=y.querySelector("#ann-image-status"),q=y.querySelector("#ann-image-preview"),A=y.querySelector("#ann-image-preview-img");y.querySelector("#ann-image-file").addEventListener("change",async k=>{var f;const m=(f=k.target.files)==null?void 0:f[0];if(m){_.textContent="กำลังอัปโหลด...";try{x=await ca(m),A.src=x,q.classList.remove("hidden"),_.textContent="อัปโหลดสำเร็จ ✅"}catch(g){_.textContent="อัปโหลดไม่สำเร็จ: "+ae(g)}k.target.value=""}}),y.querySelector("#ann-image-remove").addEventListener("click",()=>{x=null,q.classList.add("hidden"),_.textContent=""});let I=[];y.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const k=y.querySelector("#ann-cal-picker");if(!k.classList.contains("hidden")){k.classList.add("hidden");return}k.classList.remove("hidden");const m=y.querySelector("#ann-cal-event-sel");if(m.options.length<=1)try{const{getWorkCalendarEvents:f,getSchoolConfig:g}=await se(async()=>{const{getWorkCalendarEvents:B,getSchoolConfig:M}=await import("./api-CWYJTdOa.js");return{getWorkCalendarEvents:B,getSchoolConfig:M}},__vite__mapDeps([0,1,2,3,4]));let o=new Date().getFullYear()+543,u=1;try{const B=await g();o=B.academic_year,u=B.semester}catch{}I=await f(o,u);const v={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};I.forEach(B=>{const M=document.createElement("option");M.value=B.id;const S=B.event_type==="inspection"&&B.round_number?` ครั้งที่ ${B.round_number}`:"",j=new Date(B.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});M.textContent=`${v[B.event_type]??"📌"}${S} ${B.label} (${j})`,m.appendChild(M)})}catch(f){m.innerHTML=`<option>โหลดไม่สำเร็จ: ${f.message}</option>`}}),y.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const k=+y.querySelector("#ann-cal-event-sel").value,m=I.find(v=>v.id===k),f=y.querySelector("#ann-cal-preview"),g=y.querySelector("#ann-cal-fill");if(!m){f.classList.add("hidden"),g.classList.add("hidden");return}const o=(m.work_calendar_items||[]).sort((v,B)=>v.sort_order-B.sort_order),u=new Date(m.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});f.innerHTML=`<p class="font-semibold">${m.label}</p>
        <p class="text-indigo-600">📅 ${u}${m.event_type==="inspection"&&m.round_number?` · ครั้งที่ ${m.round_number}`:""}</p>
        ${m.description?`<p>${m.description}</p>`:""}
        ${o.length?`<ul class="mt-1 space-y-0.5">${o.map(v=>`<li>☑ ${v.item_label}</li>`).join("")}</ul>`:""}`,f.classList.remove("hidden"),g.classList.remove("hidden")}),y.querySelector("#ann-cal-fill").addEventListener("click",()=>{const k=+y.querySelector("#ann-cal-event-sel").value,m=I.find(v=>v.id===k);if(!m)return;const f=(m.work_calendar_items||[]).sort((v,B)=>v.sort_order-B.sort_order),g=new Date(m.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),o=m.event_type==="inspection"&&m.round_number?` ครั้งที่ ${m.round_number}`:"";y.querySelector("#ann-title").value=m.label+(o?` (${o.trim()})`:"");const u=[];m.description&&u.push(m.description),f.length&&(u.push("สิ่งที่ต้องเตรียม:"),f.forEach(v=>u.push(`• ${v.item_label}`))),u.push(`กำหนดวันที่: ${g}`),y.querySelector("#ann-body").value=u.join(`
`),m.event_date&&(y.querySelector("#ann-due").value=m.event_date),y.querySelector("#ann-cal-picker").classList.add("hidden")}),y.querySelectorAll(".ann-type-btn").forEach(k=>{k.addEventListener("click",()=>{const m=k.dataset.type;y.querySelectorAll(".ann-type-btn").forEach(f=>{const g=f.dataset.type==="training";f.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${f.dataset.type===m?g?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":g?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),y.querySelector("#ann-training-fields").classList.toggle("hidden",m!=="training")})});const L=k=>k==="teacher"?"bg-sky-600 text-white border-sky-600":k==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",E=k=>k==="teacher"?"hover:border-sky-300":k==="student"?"hover:border-teal-300":"hover:border-indigo-300";y.querySelectorAll(".ann-audience-btn").forEach(k=>{k.addEventListener("click",()=>{y.querySelectorAll(".ann-audience-btn").forEach(m=>{m.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${m.dataset.audience===k.dataset.audience?L(m.dataset.audience):`bg-white text-gray-600 border-gray-200 ${E(m.dataset.audience)}`}`})})}),Ta(y,"ann"),y.querySelectorAll(".ann-filter-btn").forEach(k=>{k.addEventListener("click",()=>{y.querySelectorAll(".ann-filter-btn").forEach(m=>{m.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${m.dataset.filter===k.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),y.querySelector("#ann-modal-save").addEventListener("click",async()=>{var Q,Y;const k=y.querySelector("#ann-title").value.trim();if(!k){T("กรุณากรอกหัวข้อ","warning");return}const m=y.querySelector("#ann-body").value.trim()||null,f=y.querySelector("#ann-active-toggle").dataset.on==="true",g=y.querySelector("#ann-pin").dataset.on==="true"?1:0,o=y.querySelector("#ann-ack").dataset.on==="true",u=y.querySelector("#ann-due").value||null,v=y.querySelector(".ann-type-btn.bg-violet-600")||(a==null?void 0:a.ann_type)==="training"?"training":"general",B=((Q=y.querySelector(".ann-audience-btn.text-white"))==null?void 0:Q.dataset.audience)??(a==null?void 0:a.audience)??"all",M=y.querySelector("#ann-video-url").value.trim()||null,S=v==="training"&&y.querySelector("#ann-event-location").value.trim()||null,j=((Y=y.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:Y.dataset.filter)??(a==null?void 0:a.schedule_filter)??"all",R=(p==null?void 0:p.getValue())??(a==null?void 0:a.target_teacher_ids)??[],N=(l==null?void 0:l.getValue())??(a==null?void 0:a.target_student_ids)??[];if(v==="training"){if(!S){T("กรุณาระบุสถานที่","warning");return}const P=ja(y,"ann");for(const K of P){if(!K.date){T("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!K.periods.length){T("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const G=y.querySelector("#ann-modal-save");G.disabled=!0,G.textContent="กำลังบันทึก...";try{t?await it(a.id,{title:k,body:m,isActive:f,priority:g,requiresAck:o,dueDate:u,annType:v,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:S,scheduleFilter:j,fileUrl:x,videoUrl:M,audience:B,targetTeacherIds:R,targetStudentIds:N}):P.length>1?(await Promise.all(P.map(K=>ct({title:k,body:m,isActive:f,priority:g,requiresAck:o,dueDate:u,annType:v,eventDate:K.date,eventPeriods:K.periods,eventLocation:S,scheduleFilter:j,fileUrl:x,videoUrl:M,audience:B,targetTeacherIds:R,targetStudentIds:N}))),T(`สร้าง ${P.length} ประกาศสำเร็จ ✅`,"success")):(await ct({title:k,body:m,isActive:f,priority:g,requiresAck:o,dueDate:u,annType:v,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:S,scheduleFilter:j,fileUrl:x,videoUrl:M,audience:B,targetTeacherIds:R,targetStudentIds:N}),T("บันทึกสำเร็จ ✅","success")),d(),await h()}catch(K){T("บันทึกไม่สำเร็จ: "+ae(K),"error"),G.disabled=!1,G.textContent="บันทึก"}return}const O=y.querySelector("#ann-modal-save");O.disabled=!0,O.textContent="กำลังบันทึก...";try{t?await it(a.id,{title:k,body:m,isActive:f,priority:g,requiresAck:o,dueDate:u,annType:v,fileUrl:x,videoUrl:M,audience:B,targetTeacherIds:R,targetStudentIds:N}):await ct({title:k,body:m,isActive:f,priority:g,requiresAck:o,dueDate:u,annType:v,fileUrl:x,videoUrl:M,audience:B,targetTeacherIds:R,targetStudentIds:N}),!t&&f&&Ma(k,m,B),T("บันทึกสำเร็จ ✅","success"),d(),await h()}catch(P){T("บันทึกไม่สำเร็จ: "+ae(P),"error"),O.disabled=!1,O.textContent="บันทึก"}})};(w=document.getElementById("ann-create-btn"))==null||w.addEventListener("click",()=>i(null,n)),await n()}async function Ra(){re("autoscale-history"),document.getElementById("page-title").textContent="ประวัติปรับกำลังเครื่องอัตโนมัติ";const e=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=i=>new Date(i).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),n=i=>i.includes("🔴")?{label:"ล้มเหลว",cls:"bg-red-100 text-red-700"}:i.includes("⚠️")?{label:"อัปเกรด",cls:"bg-amber-100 text-amber-700"}:i.includes("✅")?{label:"ลดระดับ",cls:"bg-emerald-100 text-emerald-700"}:i.includes("🧪")?{label:"ทดสอบ",cls:"bg-gray-100 text-gray-600"}:{label:"เหตุการณ์",cls:"bg-gray-100 text-gray-600"};ne(`<div class="animate-fade">
    <p class="text-xs text-gray-400 mb-6">บันทึกอัตโนมัติทุกครั้งที่ระบบปรับขนาด compute (Micro ↔ Medium) แยกจากหน้าประกาศทั่วไป</p>
    <div id="autoscale-history-wrap" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const r=document.getElementById("autoscale-history-wrap");let c;try{c=(await ra()).filter(i=>i.ann_type==="system")}catch{r.innerHTML='<p class="text-red-400 text-sm p-6">โหลดไม่สำเร็จ</p>';return}if(!c.length){r.innerHTML=`<div class="p-16 text-center text-gray-400">
      <div class="text-5xl mb-4">🖥️</div>
      <p class="font-semibold text-gray-500">ยังไม่มีประวัติการปรับกำลังเครื่อง</p>
      <p class="text-xs mt-1">ระบบจะบันทึกอัตโนมัติทุกครั้งที่ปรับขนาด compute</p>
    </div>`;return}r.innerHTML=`
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-100 bg-gray-50/60 text-left text-xs text-gray-400 uppercase tracking-wide">
            <th class="px-5 py-3 font-semibold whitespace-nowrap">เวลา</th>
            <th class="px-5 py-3 font-semibold whitespace-nowrap">เหตุการณ์</th>
            <th class="px-5 py-3 font-semibold">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          ${c.map(i=>{const w=n(i.title||"");return`<tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 align-top">
              <td class="px-5 py-3.5 whitespace-nowrap text-gray-500 font-mono text-xs">${s(i.created_at)}</td>
              <td class="px-5 py-3.5 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${w.cls}">${w.label}</span>
              </td>
              <td class="px-5 py-3.5 text-gray-700">${e(i.body||i.title||"")}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`}const co={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},po=e=>co[e]??"แอดมิน",uo=e=>e?e.startsWith("academic")?"bg-blue-100 text-blue-700":e.startsWith("registrar")?"bg-violet-100 text-violet-700":e==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function mo(e,s=!1){var $,C;const{getMyAnnouncements:n,createAnnouncement:r,updateAnnouncement:c,deleteAnnouncement:i,getAckStats:w,getAnnouncementCommentsBulk:a,getAnnouncementComments:h,deleteAnnouncementComment:y}=await se(async()=>{const{getMyAnnouncements:x,createAnnouncement:_,updateAnnouncement:q,deleteAnnouncement:A,getAckStats:I,getAnnouncementCommentsBulk:L,getAnnouncementComments:E,deleteAnnouncementComment:H}=await import("./api-CWYJTdOa.js");return{getMyAnnouncements:x,createAnnouncement:_,updateAnnouncement:q,deleteAnnouncement:A,getAckStats:I,getAnnouncementCommentsBulk:L,getAnnouncementComments:E,deleteAnnouncementComment:H}},__vite__mapDeps([0,1,2,3,4])),t=(($=e==null?void 0:e.positions)!=null&&$.length?e.positions[0]:e==null?void 0:e.position)??null;re("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const d=x=>String(x??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),p=x=>new Date(x).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ne(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${uo(t)}">${po(t)}</span>
          <span class="text-gray-400 ml-1">· ประกาศที่สร้างจะแสดงให้ครูทุกคนเห็น</span>
        </p>
      </div>
      <button id="sann-create-btn"
        class="px-4 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center gap-2">
        <span class="text-base">＋</span> สร้างประกาศ
      </button>
    </div>
    <div id="sann-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const l=async()=>{const x=document.getElementById("sann-list");if(!x)return;let _;try{_=await n(e.id)}catch{x.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!_.length){x.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const q=L=>L?new Date(L).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",A=L=>{if(!L)return"";const E=Math.ceil((new Date(L)-new Date)/864e5);return E<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${q(L)}</span>`:E<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${q(L)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${q(L)}</span>`},I={};try{(await a(_.map(E=>E.id))).forEach(E=>{I[E.announcement_id]=(I[E.announcement_id]??0)+1})}catch{}x.innerHTML=_.map(L=>`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${L.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${L.id}">
        ${L.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':L.is_active?'<div class="h-1 bg-gradient-to-r from-indigo-400 to-blue-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${L.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${L.priority>0?"📌":L.requires_ack?"🔔":L.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold
                ${L.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${L.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${L.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${L.requires_ack?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${Aa(L.audience)}
              ${qa(L)}
              ${L.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${A(L.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${d(L.title)}</h3>
            ${L.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${d(L.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${p(L.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${L.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${L.id}" data-title="${d(L.title)}">💬 ${I[L.id]??0} ความคิดเห็น</button>
              <span>👁️ ${L.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${L.requires_ack?`<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${L.id}" data-title="${d(L.title)}">📊 สถิติ</button>`:""}
            ${L.ann_type==="training"?`<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${L.id}" data-title="${d(L.title)}">👥 รายชื่อ</button>`:""}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${L.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${L.id}" data-active="${L.is_active}">
              ${L.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${L.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${L.id}" data-title="${d(L.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join(""),x.querySelectorAll(".sann-stat-btn").forEach(L=>{L.addEventListener("click",async()=>{const E=Number(L.dataset.id),H=L.dataset.title,k=document.getElementById("sann-stat-modal");k&&k.remove();const m=document.createElement("div");m.id="sann-stat-modal",m.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",m.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${d(H)}</p>
              </div>
              <button id="sann-stat-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition">✕</button>
            </div>
            <div id="sann-stat-body" class="flex-1 overflow-y-auto p-6">
              <div class="flex justify-center py-8 text-gray-400">
                <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg> กำลังโหลด...
              </div>
            </div>
          </div>`,document.body.appendChild(m),m.querySelector("#sann-stat-close").onclick=()=>m.remove(),m.addEventListener("click",f=>{f.target===m&&m.remove()});try{const{acked:f,pending:g}=await w(E),o=m.querySelector("#sann-stat-body"),u=v=>new Date(v).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});o.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${f.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${g.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${f.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${f.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${f.map(v=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${d(v.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${u(v.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${g.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${g.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${g.map(v=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${d(v.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{m.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),x.querySelectorAll(".sann-rsvp-list-btn").forEach(L=>{L.addEventListener("click",async()=>{const{getAnnouncementRsvps:E}=await se(async()=>{const{getAnnouncementRsvps:u}=await import("./api-CWYJTdOa.js");return{getAnnouncementRsvps:u}},__vite__mapDeps([0,1,2,3,4])),H=await E(Number(L.dataset.id)).catch(()=>[]),k=L.dataset.title,m={yes:[],maybe:[],no:[],none:[]};H.forEach(u=>(m[u.response]??m.none).push(u));const f=u=>{var v,B;return`<li class="text-sm text-gray-700">${d(((v=u.teachers)==null?void 0:v.full_name)??"?")} <span class="text-xs text-gray-400">${((B=u.teachers)==null?void 0:B.dept)??""}</span></li>`},g=(u,v,B,M)=>m[u].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${M} mb-1">${v} ${B} (${m[u].length})</p>
            <ul class="space-y-0.5 pl-3">${m[u].map(f).join("")}</ul>
          </div>`:"",o=document.createElement("div");o.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${k}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${H.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${g("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${g("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${g("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(o),o.querySelector("#rsvp-list-close").onclick=()=>o.remove(),o.addEventListener("click",u=>{u.target===o&&o.remove()})})}),x.querySelectorAll(".ann-comments-view-btn").forEach(L=>{L.addEventListener("click",async()=>{const E=Number(L.dataset.id),H=L.dataset.title,k=await h(E).catch(()=>[]),m=g=>new Date(g).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),f=document.createElement("div");f.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",f.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${d(H)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${k.length?k.map(g=>{var o,u;return`
                <div class="flex items-start gap-2" data-comment-id="${g.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${d((((o=g.teachers)==null?void 0:o.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${d(((u=g.teachers)==null?void 0:u.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${g.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${d(g.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${m(g.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(f),f.querySelector("#comments-list-close").onclick=()=>f.remove(),f.addEventListener("click",g=>{g.target===f&&f.remove()}),f.querySelectorAll(".comment-del-btn").forEach(g=>{g.addEventListener("click",async()=>{var o;if(confirm("ลบความคิดเห็นนี้?"))try{await y(Number(g.dataset.id)),(o=f.querySelector(`[data-comment-id="${g.dataset.id}"]`))==null||o.remove(),await l()}catch(u){T("ลบไม่สำเร็จ: "+ae(u),"error")}})})})}),x.querySelectorAll(".sann-toggle-btn").forEach(L=>{L.addEventListener("click",async()=>{L.disabled=!0;try{await c(Number(L.dataset.id),{isActive:L.dataset.active!=="true"}),await l()}catch{T("บันทึกไม่สำเร็จ","error"),L.disabled=!1}})}),x.querySelectorAll(".sann-edit-btn").forEach(L=>{L.addEventListener("click",()=>{const E=_.find(H=>H.id===Number(L.dataset.id));E&&b(E)})}),x.querySelectorAll(".sann-del-btn").forEach(L=>{L.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${L.dataset.title}" ?`)){L.disabled=!0;try{await i(Number(L.dataset.id)),await l()}catch{T("ลบไม่สำเร็จ","error"),L.disabled=!1}}})})},b=(x=null)=>{var M;(M=document.getElementById("sann-modal"))==null||M.remove();const _=document.createElement("div");_.id="sann-modal",_.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const q=!!(x!=null&&x.id);_.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${q?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${d((x==null?void 0:x.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${d((x==null?void 0:x.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${x!=null&&x.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${d((x==null?void 0:x.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${d((x==null?void 0:x.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ (admin เท่านั้นที่เปลี่ยนประเภทได้) -->
          ${s?`
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((x==null?void 0:x.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(x==null?void 0:x.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>`:""}
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((x==null?void 0:x.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(x==null?void 0:x.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(x==null?void 0:x.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(x==null?void 0:x.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
            </div>
          </div>
          <!-- เจาะจงเฉพาะบุคคล -->
          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-3">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">🎯 เจาะจงเฉพาะบุคคล <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — ไม่เลือกใครเลย = แสดงตามกลุ่มเป้าหมายด้านบนตามปกติ)</span></p>
            <div>
              <label class="block text-[11px] font-medium text-gray-500 mb-1">เจาะจงครู (รหัสหรือชื่อ)</label>
              <div id="sann-target-teachers-chips" class="mb-2"></div>
              <div id="sann-target-teachers-wrap"></div>
            </div>
            <div>
              <label class="block text-[11px] font-medium text-gray-500 mb-1">เจาะจงนักเรียน (รหัสหรือชื่อ)</label>
              <div id="sann-target-students-chips" class="mb-2"></div>
              <div id="sann-target-students-wrap"></div>
            </div>
          </div>
          <!-- Training fields (แสดงเมื่อเลือก อบรม) -->
          <div id="sann-training-fields" class="${(x==null?void 0:x.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="sann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${d((x==null?void 0:x.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${At("sann",0,(x==null?void 0:x.event_date)??"",(x==null?void 0:x.event_periods)??[])}
              </div>
              ${q?'<div id="sann-add-session" class="hidden"></div>':`<button type="button" id="sann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((x==null?void 0:x.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((x==null?void 0:x.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="sann-active-toggle" data-on="${(x==null?void 0:x.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(x==null?void 0:x.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(x==null?void 0:x.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="sann-pin" data-on="${((x==null?void 0:x.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((x==null?void 0:x.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((x==null?void 0:x.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
            </button>
          </div>
          <div class="border-t border-gray-100 pt-4">
            <button type="button" id="sann-cal-ref"
              class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition text-left flex items-center gap-2 mb-3">
              📋 <span>อ้างอิงปฏิทินปฏิบัติงาน</span>
              <span class="text-[11px] font-normal text-indigo-400 ml-auto">auto-fill ข้อมูล</span>
            </button>
            <div id="sann-cal-picker" class="hidden mb-3">
              <select id="sann-cal-event-sel"
                class="w-full border border-indigo-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2">
                <option value="">— เลือกกิจกรรม —</option>
              </select>
              <div id="sann-cal-preview" class="hidden bg-indigo-50 rounded-xl p-3 space-y-1 text-xs text-indigo-800"></div>
              <button type="button" id="sann-cal-fill" class="hidden mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition w-full">
                ใส่ข้อมูลลงฟอร์ม
              </button>
            </div>
          </div>
          <div class="space-y-3">
            <div>
              <button type="button" id="sann-ack" data-on="${x!=null&&x.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${x!=null&&x.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="sann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(x==null?void 0:x.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button id="sann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="sann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(_);const A=()=>_.remove();_.querySelector("#sann-modal-close").onclick=A,_.querySelector("#sann-modal-cancel").onclick=A,_.addEventListener("click",S=>{S.target===_&&A()});let I=null,L=null;Da().then(({teachers:S,students:j})=>{document.body.contains(_)&&(I=St({wrap:_.querySelector("#sann-target-teachers-wrap"),chipsWrap:_.querySelector("#sann-target-teachers-chips"),teachers:S,value:(x==null?void 0:x.target_teacher_ids)??[]}),L=ea({wrap:_.querySelector("#sann-target-students-wrap"),chipsWrap:_.querySelector("#sann-target-students-chips"),students:j,value:(x==null?void 0:x.target_student_ids)??[]}))});const E=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],H=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],k=(S,j)=>{const R=document.createElement("div");R.className="mt-1.5 hidden",R.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${j.map(N=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${N}">${N}</button>`).join("")}
        </div>`,S.parentNode.appendChild(R),S.addEventListener("focus",()=>R.classList.remove("hidden")),S.addEventListener("blur",()=>setTimeout(()=>R.classList.add("hidden"),150)),R.querySelectorAll(".sann-chip").forEach(N=>{N.addEventListener("mousedown",O=>O.preventDefault()),N.addEventListener("click",()=>{S.value.trim()?S.value+=(S.tagName==="TEXTAREA"?`
`:" ")+N.dataset.val:S.value=N.dataset.val,S.focus()})})};k(_.querySelector("#sann-title"),E),k(_.querySelector("#sann-body"),H);let m=(x==null?void 0:x.file_url)??null;const f=_.querySelector("#sann-image-status"),g=_.querySelector("#sann-image-preview"),o=_.querySelector("#sann-image-preview-img");_.querySelector("#sann-image-file").addEventListener("change",async S=>{var R;const j=(R=S.target.files)==null?void 0:R[0];if(j){f.textContent="กำลังอัปโหลด...";try{m=await ca(j),o.src=m,g.classList.remove("hidden"),f.textContent="อัปโหลดสำเร็จ ✅"}catch(N){f.textContent="อัปโหลดไม่สำเร็จ: "+ae(N)}S.target.value=""}}),_.querySelector("#sann-image-remove").addEventListener("click",()=>{m=null,g.classList.add("hidden"),f.textContent=""});let u=[];_.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const S=_.querySelector("#sann-cal-picker");if(!S.classList.contains("hidden")){S.classList.add("hidden");return}S.classList.remove("hidden");const j=_.querySelector("#sann-cal-event-sel");if(j.options.length<=1)try{const{getWorkCalendarEvents:R,getSchoolConfig:N}=await se(async()=>{const{getWorkCalendarEvents:P,getSchoolConfig:G}=await import("./api-CWYJTdOa.js");return{getWorkCalendarEvents:P,getSchoolConfig:G}},__vite__mapDeps([0,1,2,3,4]));let O=new Date().getFullYear()+543,Q=1;try{const P=await N();O=P.academic_year,Q=P.semester}catch{}u=await R(O,Q);const Y={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};u.forEach(P=>{const G=document.createElement("option");G.value=P.id;const K=P.event_type==="inspection"&&P.round_number?` ครั้งที่ ${P.round_number}`:"",D=new Date(P.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});G.textContent=`${Y[P.event_type]??"📌"}${K} ${P.label} (${D})`,j.appendChild(G)})}catch(R){j.innerHTML=`<option>โหลดไม่สำเร็จ: ${R.message}</option>`}}),_.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const S=+_.querySelector("#sann-cal-event-sel").value,j=u.find(Y=>Y.id===S),R=_.querySelector("#sann-cal-preview"),N=_.querySelector("#sann-cal-fill");if(!j){R.classList.add("hidden"),N.classList.add("hidden");return}const O=(j.work_calendar_items||[]).sort((Y,P)=>Y.sort_order-P.sort_order),Q=new Date(j.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});R.innerHTML=`<p class="font-semibold">${j.label}</p>
        <p class="text-indigo-600">📅 ${Q}${j.event_type==="inspection"&&j.round_number?` · ครั้งที่ ${j.round_number}`:""}</p>
        ${j.description?`<p>${j.description}</p>`:""}
        ${O.length?`<ul class="mt-1 space-y-0.5">${O.map(Y=>`<li>☑ ${Y.item_label}</li>`).join("")}</ul>`:""}`,R.classList.remove("hidden"),N.classList.remove("hidden")}),_.querySelector("#sann-cal-fill").addEventListener("click",()=>{const S=+_.querySelector("#sann-cal-event-sel").value,j=u.find(Y=>Y.id===S);if(!j)return;const R=(j.work_calendar_items||[]).sort((Y,P)=>Y.sort_order-P.sort_order),N=new Date(j.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),O=j.event_type==="inspection"&&j.round_number?` ครั้งที่ ${j.round_number}`:"";_.querySelector("#sann-title").value=j.label+(O?` (${O.trim()})`:"");const Q=[];j.description&&Q.push(j.description),R.length&&(Q.push("สิ่งที่ต้องเตรียม:"),R.forEach(Y=>Q.push(`• ${Y.item_label}`))),Q.push(`กำหนดวันที่: ${N}`),_.querySelector("#sann-body").value=Q.join(`
`),j.event_date&&(_.querySelector("#sann-due").value=j.event_date),_.querySelector("#sann-cal-picker").classList.add("hidden")}),_.querySelectorAll(".sann-type-btn").forEach(S=>{S.addEventListener("click",()=>{const j=S.dataset.type;_.querySelectorAll(".sann-type-btn").forEach(R=>{const N=R.dataset.type==="training";R.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${R.dataset.type===j?N?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":N?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),_.querySelector("#sann-training-fields").classList.toggle("hidden",j!=="training")})});const v=S=>S==="teacher"?"bg-sky-600 text-white border-sky-600":S==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",B=S=>S==="teacher"?"hover:border-sky-300":S==="student"?"hover:border-teal-300":"hover:border-indigo-300";_.querySelectorAll(".sann-audience-btn").forEach(S=>{S.addEventListener("click",()=>{_.querySelectorAll(".sann-audience-btn").forEach(j=>{j.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${j.dataset.audience===S.dataset.audience?v(j.dataset.audience):`bg-white text-gray-600 border-gray-200 ${B(j.dataset.audience)}`}`})})}),Ta(_,"sann"),_.querySelectorAll(".sann-filter-btn").forEach(S=>{S.addEventListener("click",()=>{_.querySelectorAll(".sann-filter-btn").forEach(j=>{j.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${j.dataset.filter===S.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),_.querySelector("#sann-modal-save").addEventListener("click",async()=>{var J,X;const S=_.querySelector("#sann-title").value.trim();if(!S){T("กรุณากรอกหัวข้อ","warning");return}const j=_.querySelector("#sann-body").value.trim()||null,R=_.querySelector("#sann-active-toggle").dataset.on==="true",N=_.querySelector("#sann-pin").dataset.on==="true"?1:0,O=_.querySelector("#sann-ack").dataset.on==="true",Q=_.querySelector("#sann-due").value||null,Y=_.querySelector(".sann-type-btn.bg-violet-600")||(x==null?void 0:x.ann_type)==="training"?"training":"general",P=((J=_.querySelector(".sann-audience-btn.text-white"))==null?void 0:J.dataset.audience)??(x==null?void 0:x.audience)??"all",G=_.querySelector("#sann-video-url").value.trim()||null,K=Y==="training"&&_.querySelector("#sann-event-location").value.trim()||null,D=((X=_.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:X.dataset.filter)??(x==null?void 0:x.schedule_filter)??"all",z=(I==null?void 0:I.getValue())??(x==null?void 0:x.target_teacher_ids)??[],F=(L==null?void 0:L.getValue())??(x==null?void 0:x.target_student_ids)??[];if(Y==="training"){if(!K){T("กรุณาระบุสถานที่","warning");return}const V=ja(_,"sann");for(const ee of V){if(!ee.date){T("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!ee.periods.length){T("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const te=_.querySelector("#sann-modal-save");te.disabled=!0,te.textContent="กำลังบันทึก...";try{q?await c(x.id,{title:S,body:j,isActive:R,priority:N,requiresAck:O,dueDate:Q,annType:Y,eventDate:V[0].date,eventPeriods:V[0].periods,eventLocation:K,scheduleFilter:D,fileUrl:m,videoUrl:G,audience:P,targetTeacherIds:z,targetStudentIds:F}):V.length>1?(await Promise.all(V.map(ee=>r({title:S,body:j,isActive:R,priority:N,teacherId:e.id,creatorRole:t,requiresAck:O,dueDate:Q,annType:Y,eventDate:ee.date,eventPeriods:ee.periods,eventLocation:K,scheduleFilter:D,fileUrl:m,videoUrl:G,audience:P,targetTeacherIds:z,targetStudentIds:F}))),T(`สร้าง ${V.length} ประกาศสำเร็จ ✅`,"success")):(await r({title:S,body:j,isActive:R,priority:N,teacherId:e.id,creatorRole:t,requiresAck:O,dueDate:Q,annType:Y,eventDate:V[0].date,eventPeriods:V[0].periods,eventLocation:K,scheduleFilter:D,fileUrl:m,videoUrl:G,audience:P,targetTeacherIds:z,targetStudentIds:F}),T("บันทึกสำเร็จ ✅","success")),A(),await l()}catch(ee){T("บันทึกไม่สำเร็จ: "+ae(ee),"error");const de=_.querySelector("#sann-modal-save");de.disabled=!1,de.textContent="บันทึก"}return}const U=_.querySelector("#sann-modal-save");U.disabled=!0,U.textContent="กำลังบันทึก...";try{q?await c(x.id,{title:S,body:j,isActive:R,priority:N,requiresAck:O,dueDate:Q,annType:Y,fileUrl:m,videoUrl:G,audience:P,targetTeacherIds:z,targetStudentIds:F}):await r({title:S,body:j,isActive:R,priority:N,teacherId:e.id,creatorRole:t,requiresAck:O,dueDate:Q,annType:Y,fileUrl:m,videoUrl:G,audience:P,targetTeacherIds:z,targetStudentIds:F}),!q&&R&&Ma(S,j,P),T("บันทึกสำเร็จ ✅","success"),A(),await l()}catch(V){T("บันทึกไม่สำเร็จ: "+ae(V),"error"),U.disabled=!1,U.textContent="บันทึก"}})};(C=document.getElementById("sann-create-btn"))==null||C.addEventListener("click",()=>b(null)),await l()}async function Pa(){var c;re("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const e=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],s=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];s.flatMap(i=>i.features),ne(`<div class="animate-fade">
    <div class="mb-6">
      <p class="text-xs text-gray-400 mt-0.5">กำหนดว่าแต่ละบทบาทสามารถเข้าถึงเมนูใดใน Supervisor mode — บันทึกทันทีเมื่อกด toggle</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="perm-loading" class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let n={};try{n=await os()}catch{}const r=(c=document.querySelector("#perm-loading"))==null?void 0:c.closest(".bg-white");r&&(r.innerHTML=`
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 w-44">ฟีเจอร์</th>
            ${e.map(i=>`<th class="px-3 py-3.5 text-center text-xs font-bold text-gray-600 min-w-[80px]">${i.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${s.map(i=>`
            <tr class="bg-indigo-50/50 border-y border-indigo-100">
              <td colspan="${e.length+1}" class="px-5 py-2 text-xs font-bold text-indigo-600 uppercase tracking-wider sticky left-0">${i.group}</td>
            </tr>
            ${i.features.map(w=>`
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${w.label}</td>
                ${e.map(a=>{var y;const h=((y=n[a.key])==null?void 0:y[w.key])??!1;return`<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${h?"bg-emerald-500":"bg-gray-300"}"
                      data-position="${a.key}" data-feature="${w.key}" data-on="${h}">
                      <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ml-0.5"
                        style="transform:translateX(${h?"20":"0"}px)"></span>
                    </button>
                  </td>`}).join("")}
              </tr>`).join("")}
          `).join("")}
        </tbody>
      </table>
    </div>
    <div class="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
      <span>💡</span>
      <span>ครูต้องล็อกอินใหม่เพื่อให้สิทธิ์มีผล · สิทธิ์เมนูต่างๆจะแสดงใน Supervisor mode ของบทบาทนั้น</span>
    </div>`,r.querySelectorAll(".perm-toggle").forEach(i=>{i.addEventListener("click",async()=>{const w=i.dataset.position,a=i.dataset.feature,h=i.dataset.on==="true",y=!h;i.disabled=!0;try{await ls(w,a,y),i.dataset.on=String(y),i.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${y?"bg-emerald-500":"bg-gray-300"}`,i.querySelector("span").style.transform=`translateX(${y?"20":"0"}px)`,n[w]||(n[w]={}),n[w][a]=y,T(`${y?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{T("บันทึกไม่สำเร็จ","error")}i.disabled=!1})}))}async function Na(){re("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let e=[],s=[],n=[],r="สามัญ",c="",i="",w="",a="",h="";const y=S=>{if(!S)return null;const j=S.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return j?j[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},t=S=>S?/^(PR|อก\.|อป\.)/i.test(S)?"ศาสนา":/^ปวช\./i.test(S)?"ปวช":"สามัญ":"สามัญ",d={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},p=S=>{const j=S==="ศาสนา";return[...new Set(n.map(R=>j?R.religion_room:R.main_room).filter(Boolean))].filter(R=>t(R)===S).sort((R,N)=>R.localeCompare(N,"th"))},l=S=>{const j=p(S),R=[...new Set(j.map(O=>y(O)).filter(Boolean))],N=d[S]||[];return[...new Set([...N,...R])].sort((O,Q)=>O.localeCompare(Q,"th"))},b=async()=>{[e,s,n]=await Promise.all([Bn(),ge(),Ne()])},$=(S,j="w-3.5 h-3.5")=>`<span class="inline-block ${j} rounded-full flex-shrink-0" style="background:${S}"></span>`,C=S=>e.find(j=>j.name===S),x=S=>n.filter(j=>j.house_color===S).length,_=()=>n.filter(S=>!S.house_color).length,q=S=>{let j=document.getElementById("hc-print-roster-styles");j||(j=document.createElement("style"),j.id="hc-print-roster-styles",document.head.appendChild(j)),j.textContent=`
      @media screen {
        #hc-print-roster-area {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9000 !important;
          background-color: rgba(15, 23, 42, 0.85) !important;
          backdrop-filter: blur(4px) !important;
          overflow-y: auto !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          padding: 32px 16px !important;
        }
        .preview-sheet-wrap {
          background: white !important;
          color: black !important;
          width: 100% !important;
          max-width: 800px !important;
          padding: 40px !important;
          border-radius: 16px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
          margin-top: 60px !important;
          font-family: Sarabun, sans-serif !important;
        }
        .preview-controls {
          position: fixed !important;
          top: 16px !important;
          display: flex !important;
          gap: 12px !important;
          z-index: 9001 !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(8px) !important;
          padding: 8px 16px !important;
          border-radius: 16px !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
        }
        .preview-btn-print {
          background: #4f46e5 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-print:hover {
          background: #4338ca !important;
        }
        .preview-btn-close {
          background: #ef4444 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-close:hover {
          background: #dc2626 !important;
        }
      }
      @media print {
        body > * { display: none !important; }
        #hc-print-roster-area {
          display: block !important;
          position: absolute !important;
          left: 0 !important; top: 0 !important;
          width: 100% !important;
          padding: 0 !important; margin: 0 !important;
          background: white !important;
          color: black !important;
          font-family: Sarabun, sans-serif !important;
        }
        #hc-print-roster-area * { visibility: visible !important; }
        .preview-controls { display: none !important; }
        .preview-sheet-wrap {
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          max-width: 100% !important;
        }
      }
      .roster-page-block {
        display: block !important;
        page-break-before: always !important;
        break-before: page !important;
        page-break-inside: avoid;
      }
      .roster-page-block:first-child {
        page-break-before: auto !important;
        break-before: auto !important;
      }
      .roster-title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px;
      }
      .roster-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
      }
      .roster-table th, .roster-table td {
        border: 1px solid #000000 !important;
        padding: 8px 10px !important;
        vertical-align: middle;
      }
      .roster-table th {
        background-color: #f3f4f6 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        font-size: 12px;
        font-weight: bold;
      }
      .roster-table td {
        font-size: 12px;
      }
      .stu-info-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .stu-img {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        object-fit: cover;
      }
      .stu-img-placeholder {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #9ca3af;
      }
      .stu-details {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .stu-name {
        font-size: 12px;
        font-weight: bold;
      }
      .stu-meta {
        font-size: 10px;
        color: #4b5563;
      }
      .color-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
      }
      .color-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #000;
      }
    `;const R=document.createElement("div");R.id="hc-print-roster-area",document.body.appendChild(R);const N=r==="ศาสนา",O=new Map;S.forEach(P=>{const G=(N?P.religion_room:P.main_room)||"ไม่มีห้องเรียน";O.has(G)||O.set(G,[]),O.get(G).push(P)});const Q=Array.from(O.keys()).sort((P,G)=>P.localeCompare(G,"th"));let Y="";Q.forEach((P,G)=>{const D=O.get(P).sort((U,J)=>(U.student_code||"").localeCompare(J.student_code||""));let z="ใบรายชื่อนักเรียน";w&&(w==="__none__"?z+=" (ไม่มีสี)":z+=` กลุ่มสี${w}`),z+=` ห้อง ${P}`,a&&(z+=` (${a})`);const F=D.map((U,J)=>{const X=C(U.house_color),V=X?`<span class="color-badge" style="color: ${X.color_hex}">
               สี${U.house_color}
             </span>`:'<span style="color: #9ca3af;">— ไม่มีสี —</span>',te=U.image_url?`<img src="${U.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>';return`
          <tr>
            <td style="text-align: center; width: 45px;">${J+1}</td>
            <td>
              <div class="stu-info-wrap">
                ${te}
                <div class="stu-details">
                  <div class="stu-name">${W(U.full_name)}</div>
                  <div class="stu-meta">รหัส: ${W(U.student_code||"—")} | สามัญ: ${W(U.main_room||"—")} | ศาสนา: ${W(U.religion_room||"—")}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${V}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${W(U.sports_shirt_size||"")}</td>
            <td style="width: 120px;"></td>
          </tr>
        `}).join("");Y+=`
        <div class="roster-page-block">
          <div class="roster-title">${W(z)}</div>
          <table class="roster-table">
            <thead>
              <tr>
                <th style="width: 45px;">เลขที่</th>
                <th>ข้อมูลนักเรียน</th>
                <th style="width: 110px;">สีนักเรียน</th>
                <th style="width: 80px;">ไซส์เสื้อ</th>
                <th style="width: 120px;">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              ${F}
            </tbody>
          </table>
        </div>
      `}),R.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="hc-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="hc-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        ${Y}
      </div>
    `,R.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},R.querySelector("#hc-btn-close-preview").onclick=()=>{R.remove()}},A=()=>s.find(S=>S.position==="house_color_admin"),I=(S,j)=>{const N=(j?e.filter(O=>O.gender===j):e).map(O=>`<option value="${W(O.name)}" ${O.name===S?"selected":""}>สี${W(O.name)}</option>`).join("");return`<option value="" ${S?"":"selected"}>— ไม่มีสี —</option>`+N},L=()=>{const S=h.toLowerCase(),j=r==="ศาสนา";return n.filter(R=>{var O,Q;const N=j?R.religion_room:R.main_room;return!(!N||i&&N!==i||c&&!i&&y(N)!==c||!c&&!i&&t(N)!==r||w==="__none__"&&R.house_color||w&&w!=="__none__"&&R.house_color!==w||a&&R.gender!==a||S&&!((O=R.full_name)!=null&&O.toLowerCase().includes(S))&&!((Q=R.student_code)!=null&&Q.toLowerCase().includes(S))&&!N.toLowerCase().includes(S))})},E=S=>S?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",H=()=>{const S=e.filter(Y=>Y.gender==="ชาย"),j=e.filter(Y=>Y.gender==="หญิง"),R=_(),N=Y=>{const P=w===Y.name,G=x(Y.name);return`<button class="${E(P)}" data-color="${W(Y.name)}"
               style="${P?`border-color:${Y.color_hex};color:${Y.color_hex};background:${Y.color_hex}18`:`border-color:${Y.color_hex}55;color:#374151`}">
        ${$(Y.color_hex)} สี${W(Y.name)}
        <span class="ml-1 font-bold" style="color:${Y.color_hex}">${G}</span>
      </button>`},O=w==="__none__",Q=`<button class="${E(O)}" data-color="__none__"
               style="${O?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${R}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${S.map(N).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${j.map(N).join("")}
          ${Q}
        </div>
      </div>`},k=()=>{const S=L();if(!S.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const j=r==="ศาสนา";return S.map(R=>{const N=C(R.house_color),O=N?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${N.color_hex}">
             ${$(N.color_hex,"w-2.5 h-2.5")} ${W(R.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',Q=N?`background:${N.color_hex}12`:"",Y=j?R.religion_room:R.main_room,P=R.image_url?`<img src="${R.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`:'<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>';return`<tr class="transition border-b border-gray-100 last:border-0" style="${Q}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${W(R.student_code??"")}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${P}
            <div>${W(R.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${W(Y??"—")}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${W(R.gender??"—")}</td>
        <td class="px-4 py-2.5">${O}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${R.id}" data-current="${W(R.house_color??"")}">
            ${I(R.house_color,R.gender)}
          </select>
        </td>
      </tr>`}).join("")},m=()=>{const S=A(),j=L().length;ne(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${S?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${W(S.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${n.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${_()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${H()}
        ${w?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':""}
      </div>

      <!-- Search + filter bar -->
      <div class="flex flex-wrap gap-3 items-center">
        <input id="hc-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..."
          value="${W(h)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="สามัญ" ${r==="สามัญ"?"selected":""}>สามัญ</option>
          <option value="ศาสนา" ${r==="ศาสนา"?"selected":""}>ศาสนา</option>
          <option value="ปวช" ${r==="ปวช"?"selected":""}>ปวช</option>
        </select>
        <select id="hc-filter-level" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <!-- เติมแบบไดนามิก -->
        </select>
        <select id="hc-filter-class" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">-- เลือกห้องเรียน --</option>
        </select>
        <select id="hc-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${a==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${a==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${j}</b> คน</span>
        <button id="hc-print-roster-btn"
          class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white
                 transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          ${j===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${j})
        </button>
        <button id="hc-clear-colors-btn"
          class="px-4 py-2 rounded-xl text-sm font-medium border border-red-200 text-red-500
                 hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          ${j===0?"disabled":""}>
          🗑️ ล้างสี (${j})
        </button>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-200">
            <tr>
              <th class="px-4 py-3 text-left">รหัส</th>
              <th class="px-4 py-3 text-left">ชื่อ-สกุล</th>
              <th class="px-4 py-3 text-left">ห้อง</th>
              <th class="px-4 py-3 text-left">เพศ</th>
              <th class="px-4 py-3 text-left">สีปัจจุบัน</th>
              <th class="px-4 py-3 text-left">เปลี่ยนสี</th>
            </tr>
          </thead>
          <tbody id="hc-tbody">${k()}</tbody>
        </table>
      </div>
    </div>`),M()},f=()=>{const S=document.getElementById("hc-tbody");S&&(S.innerHTML=k()),u();const j=L().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(O=>{O.textContent.includes("พบ")&&(O.innerHTML=`พบ <b class="text-gray-700">${j}</b> คน`)});const R=document.getElementById("hc-print-roster-btn");R&&(R.disabled=j===0,R.textContent=`🖨️ พิมพ์ใบรายชื่อ (${j})`);const N=document.getElementById("hc-clear-colors-btn");N&&(N.disabled=j===0,N.textContent=`🗑️ ล้างสี (${j})`)},g=()=>{var j;const S=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");S&&(S.innerHTML=H()+(w?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),o(),(j=document.getElementById("hc-clear-filter"))==null||j.addEventListener("click",()=>{w="",g(),f()})},o=()=>{document.querySelectorAll(".hc-chip").forEach(S=>{S.addEventListener("click",()=>{const j=S.dataset.color;w=w===j?"":j,g(),f()})})},u=()=>{document.querySelectorAll(".hc-color-sel").forEach(S=>{S.addEventListener("change",async()=>{const j=S.dataset.sid,R=S.dataset.current,N=S.value||null;S.disabled=!0;try{await Dt([j],N);const O=n.find(G=>String(G.id)===String(j));O&&(O.house_color=N),S.dataset.current=N??"";const Q=S.closest("tr"),Y=Q==null?void 0:Q.children[4];if(Y){const G=C(N);Y.innerHTML=G?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${G.color_hex}">
                   ${$(G.color_hex,"w-2.5 h-2.5")} ${W(N)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const P=C(N);Q&&(Q.style.background=P?`${P.color_hex}12`:""),S.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>S.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),g()}catch{T("บันทึกไม่สำเร็จ","error"),S.value=R??""}S.disabled=!1})})},v=()=>{const S=document.getElementById("hc-filter-category"),j=document.getElementById("hc-filter-level");if(!S||!j)return;r=S.value;const R=l(r);j.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${R.map(N=>`<option value="${N}" ${N===c?"selected":""}>${N}</option>`).join("")}
    `,B()},B=()=>{const S=document.getElementById("hc-filter-level"),j=document.getElementById("hc-filter-class");if(!S||!j)return;c=S.value;const N=p(r).filter(O=>c?y(O)===c:!0);j.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${N.length} ห้อง) --</option>
      ${N.map(O=>`
        <option value="${O}" ${O===i?"selected":""}>${O}</option>
      `).join("")}
    `},M=()=>{var S,j,R,N,O,Q,Y,P;o(),u(),(S=document.getElementById("hc-clear-filter"))==null||S.addEventListener("click",()=>{w="",g(),f()}),(j=document.getElementById("hc-search"))==null||j.addEventListener("input",G=>{h=G.target.value,f()}),(R=document.getElementById("hc-filter-gender"))==null||R.addEventListener("change",G=>{a=G.target.value,f()}),(N=document.getElementById("hc-filter-category"))==null||N.addEventListener("change",G=>{r=G.target.value,c="",i="",v(),f()}),(O=document.getElementById("hc-filter-level"))==null||O.addEventListener("change",G=>{c=G.target.value,i="",B(),f()}),(Q=document.getElementById("hc-filter-class"))==null||Q.addEventListener("change",G=>{i=G.target.value,f()}),(Y=document.getElementById("hc-print-roster-btn"))==null||Y.addEventListener("click",()=>{const G=L();G.length>0&&q(G)}),(P=document.getElementById("hc-clear-colors-btn"))==null||P.addEventListener("click",async()=>{const G=L();if(!G.length||!confirm(`ยืนยันล้างสีนักเรียน ${G.length} คนที่แสดงในตาราง?`))return;const K=document.getElementById("hc-clear-colors-btn");K.disabled=!0,K.textContent="กำลังล้างสี...";try{await Dt(G.map(D=>D.id),null),G.forEach(D=>{D.house_color=null}),T(`ล้างสีสำเร็จ ${G.length} คน`,"success"),g(),f()}catch{T("เกิดข้อผิดพลาด","error"),K.disabled=!1,K.textContent=`🗑️ ล้างสี (${G.length})`}}),v()};await b(),m()}async function Oa(){re("council-rep-nominations"),document.getElementById("page-title").textContent="สรุปรายชื่อตัวแทนสภานักเรียน";const e=["ม.3","ม.4","ม.5"];let s="",n="",r="";const c=await pe().catch(()=>({})),i=String(c.academicYear??c.academic_year??new Date().getFullYear()+543),[w,a]=await Promise.all([ft(i).catch(()=>[]),rs(i).catch(()=>[])]),h=x=>{var _;return((_=(x||"").match(/^ม\.\d+/))==null?void 0:_[0])??null},y=[...new Set(w.filter(x=>x.category==="สามัญ"&&e.includes(h(x.main_room))).map(x=>x.main_room))].sort((x,_)=>x.localeCompare(_,"th")),t={};y.forEach(x=>{t[x]=0}),a.forEach(x=>{t[x.main_room]!=null&&t[x.main_room]++});const d=y.filter(x=>t[x]>=2),p=y.filter(x=>t[x]>0&&t[x]<2),l=y.filter(x=>t[x]===0),b=()=>a.filter(x=>{var _,q,A;if(n&&h(x.main_room)!==n||r&&((_=x.students)==null?void 0:_.gender)!==r)return!1;if(s){const I=s.toLowerCase();if(!`${((q=x.students)==null?void 0:q.full_name)??""} ${((A=x.students)==null?void 0:A.student_code)??""} ${x.main_room??""}`.toLowerCase().includes(I))return!1}return!0}),$=x=>x.length?x.map(_=>{var q,A,I,L;return`
    <tr class="border-t border-gray-100">
      <td class="px-4 py-2.5">${W(_.main_room)}</td>
      <td class="px-4 py-2.5 font-medium">${W(((q=_.students)==null?void 0:q.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${W(((A=_.students)==null?void 0:A.student_code)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${W(((I=_.students)==null?void 0:I.gender)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${W(((L=_.teachers)==null?void 0:L.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-400 text-xs">${_.created_at?new Date(_.created_at).toLocaleDateString("th-TH"):"—"}</td>
    </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ไม่พบรายการ</td></tr>',C=()=>{var _,q,A,I;const x=b();ne(`<div class="space-y-5 animate-fade">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ส่งครบ 2 คน</p><b class="text-2xl text-emerald-700">${d.length}</b><p class="text-[11px] text-emerald-600 mt-0.5">จาก ${y.length} ห้อง</p></div>
        <div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">ส่งไม่ครบ</p><b class="text-2xl text-amber-700">${p.length}</b>${p.length?`<p class="text-[11px] text-amber-600 mt-0.5 truncate" title="${W(p.join(", "))}">${W(p.join(", "))}</p>`:""}</div>
        <div class="bg-red-50 rounded-2xl p-4"><p class="text-xs text-red-700">ยังไม่ส่งเลย</p><b class="text-2xl text-red-700">${l.length}</b>${l.length?`<p class="text-[11px] text-red-600 mt-0.5 truncate" title="${W(l.join(", "))}">${W(l.join(", "))}</p>`:""}</div>
      </div>

      <div class="flex flex-wrap gap-3 items-center">
        <input id="crn-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..." value="${W(s)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="crn-filter-grade" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
          ${e.map(L=>`<option value="${L}" ${n===L?"selected":""}>${L}</option>`).join("")}
        </select>
        <select id="crn-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${r==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${r==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${x.length}</b> รายการ</span>
        <button id="crn-print-btn" class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" ${x.length===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${x.length})
        </button>
      </div>

      <div class="bg-white rounded-2xl border border-gray-200 overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-200">
            <tr>
              <th class="px-4 py-3 text-left">ห้อง</th>
              <th class="px-4 py-3 text-left">ชื่อ-สกุล</th>
              <th class="px-4 py-3 text-left">รหัส</th>
              <th class="px-4 py-3 text-left">เพศ</th>
              <th class="px-4 py-3 text-left">ครูผู้เสนอ</th>
              <th class="px-4 py-3 text-left">วันที่</th>
            </tr>
          </thead>
          <tbody>${$(x)}</tbody>
        </table>
      </div>
    </div>`),(_=document.getElementById("crn-search"))==null||_.addEventListener("input",L=>{s=L.target.value,C()}),(q=document.getElementById("crn-filter-grade"))==null||q.addEventListener("change",L=>{n=L.target.value,C()}),(A=document.getElementById("crn-filter-gender"))==null||A.addEventListener("change",L=>{r=L.target.value,C()}),(I=document.getElementById("crn-print-btn"))==null||I.addEventListener("click",()=>{const L=b(),E=`<!doctype html><html><head><meta charset="utf-8"><title>รายชื่อตัวแทนสภานักเรียน</title>
        <style>
          body{font-family:'Sarabun','TH Sarabun New',sans-serif;padding:24px;color:#111}
          h1{font-size:18px;margin:0 0 4px}
          p.sub{font-size:12px;color:#666;margin:0 0 16px}
          table{width:100%;border-collapse:collapse;font-size:13px}
          th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
          th{background:#f3f4f6}
        </style></head><body>
        <h1>รายชื่อตัวแทนสภานักเรียน${n?" ระดับชั้น "+n:""}</h1>
        <p class="sub">ปีการศึกษา ${W(i)} · พิมพ์เมื่อ ${new Date().toLocaleDateString("th-TH")} · ทั้งหมด ${L.length} รายการ</p>
        <table><thead><tr><th>ห้อง</th><th>ชื่อ-สกุล</th><th>รหัส</th><th>เพศ</th><th>ครูผู้เสนอ</th></tr></thead>
        <tbody>${L.map(H=>{var k,m,f,g;return`<tr><td>${W(H.main_room)}</td><td>${W(((k=H.students)==null?void 0:k.full_name)??"—")}</td><td>${W(((m=H.students)==null?void 0:m.student_code)??"—")}</td><td>${W(((f=H.students)==null?void 0:f.gender)??"—")}</td><td>${W(((g=H.teachers)==null?void 0:g.full_name)??"—")}</td></tr>`}).join("")}</tbody>
        </table></body></html>`;la(E)})};C()}async function Fa(){var $,C,x,_,q;re("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const e=A=>A?new Date(A).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",s=A=>Number(A??0).toLocaleString("th-TH"),n=A=>!A.slip_url&&String(A.admin_note??"").startsWith("[เงินสด]"),r=A=>{const I=String((A==null?void 0:A.donationStickerTiers)??"").trim();return(I?I.split(`
`).filter(Boolean).map(H=>{const[k,m,f,,g]=H.split("|").map(o=>o.trim());return{amount:parseInt(k)||0,sticker:m||"🏅",title:f||"",color:g||""}}).filter(H=>H.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([H,k,m,f])=>({amount:H,sticker:k,title:m,color:f}))).sort((H,k)=>H.amount-k.amount).map((H,k)=>{const m=((A==null?void 0:A[`donationStickerImg${k+1}`])??"").trim();return m&&/^https?:\/\//.test(m)?{...H,sticker:m}:H})},c=(A,I)=>{let L=null;for(const E of I)A>=E.amount&&(L=E);return L},i=(A,I="w-8 h-8")=>A?/^https?:\/\//.test(A.sticker)?`<img src="${A.sticker}" class="${I} object-contain" title="${A.title}" />`:`<span class="text-xl" title="${A.title}">${A.sticker}</span>`:"";ne(`
  <div class="max-w-4xl mx-auto animate-fade space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">รายชื่อครูที่โดเนทผ่านระบบและเงินสด</p>
      </div>
      <button id="don-add" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
        + เพิ่มเงินสด
      </button>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      ${["ยอดรวมอนุมัติ","รออนุมัติ","จำนวนผู้โดเนท","เฉลี่ยต่อคน"].map((A,I)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${A}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${I}">—</p>
      </div>`).join("")}
    </div>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-wrap gap-3">
      <input id="don-search" type="search" placeholder="🔍 ค้นหาชื่อ / รหัสครู"
        class="flex-1 min-w-[160px] border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200" />
      <select id="don-filter-status" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">สถานะ: ทั้งหมด</option>
        <option value="pending">รอตรวจสอบ</option>
        <option value="approved">อนุมัติแล้ว</option>
        <option value="rejected">ปฏิเสธ</option>
      </select>
      <select id="don-filter-method" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">ช่องทาง: ทั้งหมด</option>
        <option value="cash">เงินสด</option>
        <option value="transfer">โอนเงิน</option>
      </select>
      <select id="don-filter-sort" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="date_desc">ล่าสุดก่อน</option>
        <option value="date_asc">เก่าสุดก่อน</option>
        <option value="amount_desc">ยอดมากสุด</option>
      </select>
    </div>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="don-table" class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`);let w=[],a=[],h={};const y=async()=>{var k;const{supabase:A}=await se(async()=>{const{supabase:m}=await import("./supabase-BV-W2lsh.js").then(f=>f.a);return{supabase:m}},[]),{getSystemConfig:I,getPaymentSlipViewUrl:L}=await se(async()=>{const{getSystemConfig:m,getPaymentSlipViewUrl:f}=await import("./api-CWYJTdOa.js");return{getSystemConfig:m,getPaymentSlipViewUrl:f}},__vite__mapDeps([0,1,2,3,4])),[E,{data:H}]=await Promise.all([I().catch(()=>({})),A.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1})]);a=r(E),w=H??[];for(const m of w)m.slip_url&&!n(m)&&(m._resolvedSlip=await L(m.slip_url).catch(()=>m.slip_url));h={};for(const m of w){if(m.status!=="approved")continue;const f=(k=m.teachers)==null?void 0:k.id;f&&(h[f]=(h[f]??0)+(Number(m.amount)||0))}t(),d()},t=()=>{const A=w.filter(m=>m.status==="approved"),I=A.reduce((m,f)=>m+(Number(f.amount)||0),0),L=w.filter(m=>m.status==="pending").length,E=new Set(A.map(m=>{var f;return(f=m.teachers)==null?void 0:f.id})).size,H=E?Math.round(I/E):0,k=[s(I)+" ฿",L,E+" คน",s(H)+" ฿"];document.querySelectorAll(".don-stat-val").forEach((m,f)=>{m.textContent=k[f]})},d=()=>{var f,g,o,u;const A=document.getElementById("don-table");if(!A)return;const I=(((f=document.getElementById("don-search"))==null?void 0:f.value)??"").toLowerCase(),L=((g=document.getElementById("don-filter-status"))==null?void 0:g.value)??"all",E=((o=document.getElementById("don-filter-method"))==null?void 0:o.value)??"all",H=((u=document.getElementById("don-filter-sort"))==null?void 0:u.value)??"date_desc";let k=w.filter(v=>{const B=v.teachers;return!(I&&!String((B==null?void 0:B.full_name)??"").toLowerCase().includes(I)&&!String((B==null?void 0:B.teacher_code)??"").includes(I)||L!=="all"&&v.status!==L||E==="cash"&&!n(v)||E==="transfer"&&n(v))});if(H==="date_asc"?k.sort((v,B)=>new Date(v.created_at)-new Date(B.created_at)):H==="amount_desc"&&k.sort((v,B)=>(B.amount??0)-(v.amount??0)),!k.length){A.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const m=v=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[v]??`<span class="text-gray-400 text-xs">${v}</span>`;A.innerHTML=`
    <table class="w-full text-sm">
      <thead class="bg-gray-50 border-b border-gray-100">
        <tr>
          <th class="text-left px-3 py-3 text-xs font-semibold text-gray-500 w-8">#</th>
          <th class="text-left px-3 py-3 text-xs font-semibold text-gray-500">ครู</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">ระดับ</th>
          <th class="text-right px-3 py-3 text-xs font-semibold text-gray-500">ยอด</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">ช่องทาง</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">สถานะ</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">วันที่</th>
          <th class="text-left px-3 py-3 text-xs font-semibold text-gray-500">หมายเหตุ</th>
          <th class="px-3 py-3"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${k.map((v,B)=>{const M=v.teachers,S=n(v),j=String(v.admin_note??"").replace(/^\[เงินสด\]\s*/,""),R=h[M==null?void 0:M.id]??0,N=c(R,a),O=M!=null&&M.image_url?`<img src="${M.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((M==null?void 0:M.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${v.id}" data-tid="${(M==null?void 0:M.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${B+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${O}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(M==null?void 0:M.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(M==null?void 0:M.teacher_code)??""}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${i(N)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${s(v.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${S?'<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>':`<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${v._resolvedSlip??""}" data-id="${v.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${m(v.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${e(v.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${j}">${j||"—"}</td>
            <td class="px-3 py-3">
              <div class="flex gap-1 justify-end" onclick="event.stopPropagation()">
                ${v.status==="pending"?`
                  <button class="don-approve text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium" data-id="${v.id}">✅</button>
                  <button class="don-reject  text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium" data-id="${v.id}">❌</button>
                `:""}
                <button class="don-edit text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 font-medium" data-id="${v.id}">✏️</button>
              </div>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,A.querySelectorAll(".don-row").forEach(v=>{v.addEventListener("click",()=>p(v.dataset.tid))}),A.querySelectorAll(".don-slip").forEach(v=>{v.addEventListener("click",async B=>{B.stopPropagation();let M=v.dataset.url;if(!M){const j=w.find(R=>R.id===Number(v.dataset.id));if(j!=null&&j.slip_url){const{getPaymentSlipViewUrl:R}=await se(async()=>{const{getPaymentSlipViewUrl:N}=await import("./api-CWYJTdOa.js");return{getPaymentSlipViewUrl:N}},__vite__mapDeps([0,1,2,3,4]));M=await R(j.slip_url).catch(()=>j.slip_url)}}if(!M){T("ไม่พบสลิป","warning");return}const S=document.createElement("div");S.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",S.innerHTML=`<img src="${M}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,S.addEventListener("click",()=>S.remove()),document.body.appendChild(S)})}),A.querySelectorAll(".don-approve").forEach(v=>{v.addEventListener("click",async B=>{B.stopPropagation();const{reviewPaymentRequest:M}=await se(async()=>{const{reviewPaymentRequest:S}=await import("./api-CWYJTdOa.js");return{reviewPaymentRequest:S}},__vite__mapDeps([0,1,2,3,4]));await M(Number(v.dataset.id),"approved").catch(()=>{}),T("อนุมัติแล้ว ✅","success"),await y()})}),A.querySelectorAll(".don-reject").forEach(v=>{v.addEventListener("click",async B=>{B.stopPropagation();const M=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:S}=await se(async()=>{const{reviewPaymentRequest:j}=await import("./api-CWYJTdOa.js");return{reviewPaymentRequest:j}},__vite__mapDeps([0,1,2,3,4]));await S(Number(v.dataset.id),"rejected",M||null).catch(()=>{}),T("ปฏิเสธแล้ว","info"),await y()})}),A.querySelectorAll(".don-edit").forEach(v=>{v.addEventListener("click",B=>{B.stopPropagation(),b(Number(v.dataset.id))})})},p=A=>{if(!A)return;const I=Number(A),L=w.filter(M=>{var S;return((S=M.teachers)==null?void 0:S.id)===I});if(!L.length)return;const E=L[0].teachers,H=L.filter(M=>M.status==="approved"),k=H.reduce((M,S)=>M+(Number(S.amount)||0),0),m=c(k,a),f=(m==null?void 0:m.color)??"#10b981",g=parseInt(f.slice(1,3),16),o=parseInt(f.slice(3,5),16),u=parseInt(f.slice(5,7),16),v=E!=null&&E.image_url?`<img src="${E.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${((E==null?void 0:E.full_name)??"?").charAt(0)}</div>`,B=document.createElement("div");B.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",B.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${g},${o},${u},0.9),rgba(${g},${o},${u},1))">
          ${v}
          ${m?`<div class="text-3xl mb-1">${/^https?:\/\//.test(m.sticker)?`<img src="${m.sticker}" class="w-12 h-12 object-contain mx-auto"/>`:m.sticker}</div>`:""}
          <p class="text-white font-bold text-base leading-tight">${(E==null?void 0:E.full_name)??"—"}</p>
          <p class="text-white/70 text-xs mt-0.5">${(E==null?void 0:E.teacher_code)??""}</p>
          ${m?`<span class="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">${m.title}</span>`:""}
        </div>
        <!-- stats -->
        <div class="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ยอดรวม</p>
            <p class="font-bold text-emerald-600">${s(k)} ฿</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ครั้งทั้งหมด</p>
            <p class="font-bold text-gray-700">${L.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${H.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${L.map(M=>{const S=n(M),j=String(M.admin_note??"").replace(/^\[เงินสด\]\s*/,""),R={pending:"⏳",approved:"✅",rejected:"❌"}[M.status]??"";return`<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${e(M.created_at)}</span>
                <span class="text-[11px] ${S?"text-gray-500":"text-blue-500"}">${S?"💵":"🧾"}</span>
                ${j?`<span class="text-xs text-gray-400 truncate max-w-[80px]">${j}</span>`:""}
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-emerald-700">${s(M.amount)} ฿</span>
                <span>${R}</span>
              </div>
            </div>`}).join("")}
        </div>
        <div class="px-5 pb-5">
          <button class="don-sum-close w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(B),B.querySelector(".don-sum-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",M=>{M.target===B&&B.remove()})},l=async()=>{const{getTeachers:A}=await se(async()=>{const{getTeachers:H}=await import("./api-CWYJTdOa.js");return{getTeachers:H}},__vite__mapDeps([0,1,2,3,4])),I=await A().catch(()=>[]),L=document.createElement("div");L.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",L.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
        <h3 class="font-bold text-gray-800">+ เพิ่มโดเนทเงินสด</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ครูผู้สนับสนุน</label>
          <div id="don-teacher-wrap"></div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">จำนวนเงิน (บาท)</label>
          <input id="don-add-amount" type="number" min="1" placeholder="100"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-add-note" type="text" placeholder="เช่น รับเงินสด วันที่ 21 พ.ค. 69"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-add-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="don-add-confirm" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(L);const E=Lt({wrap:L.querySelector("#don-teacher-wrap"),teachers:[...I].sort((H,k)=>(H.full_name??"").localeCompare(k.full_name??"","th"))});L.querySelector("#don-add-cancel").addEventListener("click",()=>L.remove()),L.querySelector("#don-add-confirm").addEventListener("click",async()=>{const H=E.getValue(),k=Number(L.querySelector("#don-add-amount").value),m=L.querySelector("#don-add-note").value.trim();if(!H){T("กรุณาเลือกครู","warning");return}if(!k){T("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:f}=await se(async()=>{const{createPaymentRequest:g}=await import("./api-CWYJTdOa.js");return{createPaymentRequest:g}},__vite__mapDeps([0,1,2,3,4]));await f({teacher_id:parseInt(H),package_type:"donation",amount:k,status:"approved",admin_note:`[เงินสด] ${m}`.trim(),reviewed_at:new Date().toISOString()}).catch(g=>{T("บันทึกไม่สำเร็จ: "+ae(g),"error")}),T("บันทึกโดเนทเงินสดแล้ว ✅","success"),L.remove(),await y()})},b=A=>{const I=w.find(H=>H.id===A);if(!I)return;const L=String(I.admin_note??"").replace(/^\[เงินสด\]\s*/,""),E=document.createElement("div");E.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",E.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${I.amount??""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-edit-note" type="text" value="${L}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-edit-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button id="don-edit-save"   class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(E),E.querySelector("#don-edit-cancel").addEventListener("click",()=>E.remove()),E.querySelector("#don-edit-save").addEventListener("click",async()=>{const H=Number(E.querySelector("#don-edit-amount").value),k=E.querySelector("#don-edit-note").value.trim(),m=n(I)?"[เงินสด] ":"",{supabase:f}=await se(async()=>{const{supabase:o}=await import("./supabase-BV-W2lsh.js").then(u=>u.a);return{supabase:o}},[]),{error:g}=await f.from("payment_requests").update({amount:H,admin_note:(m+k).trim()||null}).eq("id",A);if(g){T("แก้ไขไม่สำเร็จ","error");return}T("บันทึกแล้ว ✅","success"),E.remove(),await y()})};($=document.getElementById("don-search"))==null||$.addEventListener("input",d),(C=document.getElementById("don-filter-status"))==null||C.addEventListener("change",d),(x=document.getElementById("don-filter-method"))==null||x.addEventListener("change",d),(_=document.getElementById("don-filter-sort"))==null||_.addEventListener("change",d),(q=document.getElementById("don-add"))==null||q.addEventListener("click",l),await y()}async function za(){var d,p,l,b;re("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const e=$=>String($??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=$=>$?new Date($).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",n={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},r=["suggestion","problem","password_reset"],c=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],i=Object.fromEntries(c.map($=>[$.value,$]));ne(`
  <div class="max-w-4xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ความคิดเห็น/ข้อเสนอแนะ/ปัญหาที่ครูและนักเรียนส่งถึงแอดมินโดยตรง</p>
    </div>

    <div id="fb-cat-stats" class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div class="col-span-2 sm:col-span-4 text-center py-4 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
    <p class="text-[11px] text-gray-400 -mt-3">💡 คลิกการ์ดหมวดเพื่อกรองรายการตามหมวดนั้น</p>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-wrap gap-3">
      <input id="fb-search" type="search" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง หรือข้อความ"
        class="flex-1 min-w-[160px] border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      <select id="fb-filter-role" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">ผู้ส่ง: ทั้งหมด</option>
        <option value="teacher">ครู</option>
        <option value="student">นักเรียน</option>
      </select>
      <select id="fb-filter-cat" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">หัวข้อ: ทั้งหมด</option>
        <option value="compliment">ชื่นชม / ขอบคุณ</option>
        <option value="suggestion">ข้อเสนอแนะ</option>
        <option value="problem">แจ้งปัญหา</option>
        <option value="password_reset">ขอรีเซ็ทรหัสผ่าน</option>
        <option value="other">อื่นๆ</option>
      </select>
      <select id="fb-filter-read" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">สถานะ: ทั้งหมด</option>
        <option value="unread">ยังไม่อ่าน</option>
        <option value="read">อ่านแล้ว</option>
      </select>
    </div>

    <div id="fb-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`);let w=[];const a=async()=>{w=await aa().catch(()=>[]),y(),t()},h=async($,C)=>{if(!$)return;if(!$.is_read)try{await Rt($.id,!0),$.is_read=!0}catch{}const x=String(C??"").slice(0,120);await _s($.profile_id,{title:"💬 แอดมินตอบกลับ Feedback ของคุณแล้ว",body:x||"เข้าไปดูคำตอบได้ที่เมนู Feedback ถึงแอดมิน",url:$.sender_role==="teacher"?"teacher.html":"student.html"}).catch(()=>{})},y=()=>{var C;const $=document.getElementById("fb-cat-stats");$&&($.innerHTML=Object.keys(n).map(x=>{const _=w.filter(L=>L.category===x),q=_.length,A=_.filter(L=>!L.is_read).length;let I='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(r.includes(x)){const L=_.filter(E=>E.status==="resolved").length;I=`<p class="text-[10px] font-semibold mt-0.5 ${L===q&&q>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${L}/${q}</p>`}else A&&(I=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${A}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${x}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${n[x]}</p>
          <p class="text-xl font-bold text-gray-800">${q}</p>
          ${I}
        </div>`}).join(""),$.querySelectorAll(".fb-cat-card").forEach(x=>x.addEventListener("click",()=>{var q;const _=document.getElementById("fb-filter-cat");_&&(_.value=x.dataset.cat,t()),(q=document.getElementById("fb-list"))==null||q.scrollIntoView({behavior:"smooth",block:"start"})}))),(C=window._refreshFeedbackBadge)==null||C.call(window)},t=()=>{var I,L,E,H;const $=document.getElementById("fb-list");if(!$)return;const C=(((I=document.getElementById("fb-search"))==null?void 0:I.value)??"").toLowerCase(),x=((L=document.getElementById("fb-filter-role"))==null?void 0:L.value)??"all",_=((E=document.getElementById("fb-filter-cat"))==null?void 0:E.value)??"all",q=((H=document.getElementById("fb-filter-read"))==null?void 0:H.value)??"all";let A=w.filter(k=>{var f,g,o;const m=[k.sender_name,k.message,(f=k.student)==null?void 0:f.student_code,(g=k.student)==null?void 0:g.main_room,(o=k.student)==null?void 0:o.religion_room,...(k.messages??[]).map(u=>u.message)].join(" ").toLowerCase();return!(C&&!m.includes(C)||x!=="all"&&k.sender_role!==x||_!=="all"&&k.category!==_||q==="unread"&&k.is_read||q==="read"&&!k.is_read)});if(!A.length){$.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}$.innerHTML=A.map(k=>{var m,f,g,o,u,v;return`
      <div class="bg-white rounded-2xl border ${k.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${k.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${e(k.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${e(k.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${k.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${k.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${s(k.created_at)}</p>
              ${k.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${e(((m=k.student)==null?void 0:m.student_code)||"—")} · ห้องสามัญ ${e(((f=k.student)==null?void 0:f.main_room)||"—")} · ห้องศาสนา ${e(((g=k.student)==null?void 0:g.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${k.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${k.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(n).map(([B,M])=>`<option value="${B}" ${k.category===B?"selected":""}>${M}</option>`).join("")}
          </select>
          ${r.includes(k.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((o=i[k.status])==null?void 0:o.cls)??"bg-gray-100 text-gray-600"}">${((u=i[k.status])==null?void 0:u.label)??k.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(k.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(k.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(k.created_at)}</p></div></div>
          ${(k.messages??[]).map(B=>B.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(B.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${s(B.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(k.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(B.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(B.created_at)}</p></div></div>`).join("")}
          ${k.admin_reply&&!(k.messages??[]).some(B=>B.author_role==="admin"&&B.message===k.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(k.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${k.replied_at?s(k.replied_at):""}</p></div></div>`:""}
        </div>
        ${k.category==="password_reset"&&k.sender_role==="student"&&((v=k.student)!=null&&v.id)?k.status==="resolved"?'<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>':`<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${k.id}" data-sid="${k.student.id}" data-code="${e(k.student.student_code||"")}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${e(k.student.student_code||"")})
              </button>`:""}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${k.id}" data-read="${k.is_read}">
            ${k.is_read?"↩️ ทำเป็นยังไม่อ่าน":"✓ ทำเครื่องหมายว่าอ่านแล้ว"}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${k.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${k.id}">
              ${c.map(B=>`<option value="${B.value}" ${k.status===B.value?"selected":""}>${B.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${k.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${k.replied_at?`ตอบล่าสุด ${s(k.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${k.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),$.querySelectorAll(".fb-toggle-read").forEach(k=>k.addEventListener("click",async()=>{const m=parseInt(k.dataset.id),f=k.dataset.read==="true";try{await Rt(m,!f)}catch{T("บันทึกไม่สำเร็จ","error");return}const g=w.find(o=>o.id===m);g&&(g.is_read=!f),y(),t()})),$.querySelectorAll(".fb-category-sel").forEach(k=>k.addEventListener("change",async()=>{const m=parseInt(k.dataset.id),f=k.value,g=w.find(u=>u.id===m),o=g==null?void 0:g.category;k.disabled=!0;try{await cs(m,f)}catch{T("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),k.disabled=!1,k.value=o;return}g&&(g.category=f),T("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),t()})),$.querySelectorAll(".fb-delete").forEach(k=>k.addEventListener("click",async()=>{const m=parseInt(k.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await ps(m)}catch{T("ลบไม่สำเร็จ","error");return}w=w.filter(f=>f.id!==m),T("ลบแล้ว","success"),y(),t()}})),$.querySelectorAll(".fb-pw-reset-btn").forEach(k=>k.addEventListener("click",async()=>{const m=parseInt(k.dataset.id),f=parseInt(k.dataset.sid),g=k.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${g} เป็นรหัสนักเรียน (${g}) จริงหรือไม่?`))return;const o=k.textContent;k.disabled=!0,k.textContent="⏳ กำลังรีเซ็ท...";try{await us(f,g),await ms(f).catch(()=>{}),await Pt(m,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${g}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(v){T("รีเซ็ทไม่สำเร็จ: "+ae(v),"error"),k.disabled=!1,k.textContent=o;return}const u=w.find(v=>v.id===m);if(u){u.status="resolved";const v=new Date().toISOString(),B=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${g}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;u.admin_reply=B,u.replied_at=v,u.messages=[...u.messages??[],{id:`local-${Date.now()}`,feedback_id:m,author_role:"admin",message:B,created_at:v}],await h(u,B)}T("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),y(),t()})),$.querySelectorAll(".fb-save-status").forEach(k=>k.addEventListener("click",async()=>{var v,B;const m=parseInt(k.dataset.id),f=k.closest(".fb-card"),g=(v=f.querySelector(".fb-status-sel"))==null?void 0:v.value,o=(B=f.querySelector(".fb-reply-input"))==null?void 0:B.value.trim();k.disabled=!0,k.textContent="⏳ กำลังบันทึก...";try{await Pt(m,{status:g,adminReply:o})}catch{T("บันทึกไม่สำเร็จ","error"),k.disabled=!1,k.textContent="💾 บันทึก";return}const u=w.find(M=>M.id===m);if(u&&(u.status=g,o)){const M=new Date().toISOString();u.admin_reply=o,u.replied_at=M,u.messages=[...u.messages??[],{id:`local-${Date.now()}`,feedback_id:m,author_role:"admin",message:o,created_at:M}],await h(u,o)}T(o?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),y(),t()}))};(d=document.getElementById("fb-search"))==null||d.addEventListener("input",t),(p=document.getElementById("fb-filter-role"))==null||p.addEventListener("change",t),(l=document.getElementById("fb-filter-cat"))==null||l.addEventListener("change",t),(b=document.getElementById("fb-filter-read"))==null||b.addEventListener("change",t),await a()}async function go(){const{getWorkCalendarEvents:e,getSchoolConfig:s}=await se(async()=>{const{getWorkCalendarEvents:h,getSchoolConfig:y}=await import("./api-CWYJTdOa.js");return{getWorkCalendarEvents:h,getSchoolConfig:y}},__vite__mapDeps([0,1,2,3,4]));re("work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const n=h=>String(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},c={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},i=h=>new Date(h+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),w=h=>new Date(h+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let a={academic_year:new Date().getFullYear()+543,semester:1};try{a=await s()}catch{}ne(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="mb-6">
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${a.academic_year} ภาคเรียนที่ ${a.semester}</p>
    </div>
    <div id="wcalv-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
  </div>`);try{const h=await e(a.academic_year,a.semester),y=document.getElementById("wcalv-list");if(!h.length){y.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรมในปฏิทิน</div>';return}const t=js(new Date);y.innerHTML=h.map(d=>{const p=(d.work_calendar_items||[]).sort(($,C)=>$.sort_order-C.sort_order),l=d.event_date<t,b=d.event_type==="inspection"&&d.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${d.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border ${l?"border-gray-100 opacity-60":"border-gray-100"} shadow-sm p-4">
        <div class="flex flex-wrap items-center gap-1.5 mb-1">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${c[d.event_type]}">${r[d.event_type]}</span>
          ${b}
          ${l?'<span class="text-[11px] text-gray-400">ผ่านมาแล้ว</span>':'<span class="text-[11px] font-semibold text-emerald-600">กำลังจะมาถึง</span>'}
          <span class="text-xs text-gray-400 ml-auto">${d.end_date&&d.end_date!==d.event_date?`${w(d.event_date)} – ${i(d.end_date)}`:i(d.event_date)}</span>
        </div>
        <p class="font-semibold text-gray-800 text-sm">${n(d.label)}</p>
        ${d.description?`<p class="text-xs text-gray-500 mt-0.5">${n(d.description)}</p>`:""}
        ${p.length?`<div class="mt-2 border-t border-gray-50 pt-2">
          <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">สิ่งที่จะตรวจ</p>
          <ul class="space-y-0.5">${p.map($=>`<li class="text-xs text-gray-600 flex gap-1.5"><span class="text-indigo-400">☑</span>${n($.item_label)}</li>`).join("")}</ul>
        </div>`:""}
      </div>`}).join("")}catch(h){const y=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");document.getElementById("wcalv-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${y(h.message)}</div>`}}async function Ua(e){const{getWorkCalendarEvents:s,createWorkCalendarEvent:n,updateWorkCalendarEvent:r,deleteWorkCalendarEvent:c,replaceWorkCalendarItems:i,getSchoolConfig:w}=await se(async()=>{const{getWorkCalendarEvents:E,createWorkCalendarEvent:H,updateWorkCalendarEvent:k,deleteWorkCalendarEvent:m,replaceWorkCalendarItems:f,getSchoolConfig:g}=await import("./api-CWYJTdOa.js");return{getWorkCalendarEvents:E,createWorkCalendarEvent:H,updateWorkCalendarEvent:k,deleteWorkCalendarEvent:m,replaceWorkCalendarItems:f,getSchoolConfig:g}},__vite__mapDeps([0,1,2,3,4]));re("work-calendar"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const a=E=>String(E??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),h={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},y={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},t=E=>new Date(E+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),d=E=>new Date(E+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let p={academic_year:new Date().getFullYear()+543,semester:1};try{p=await w()}catch{}const l=p.academic_year,b=p.semester;ne(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${l} ภาคเรียนที่ ${b}</p>
      </div>
      <button id="wcal-create-btn"
        class="px-4 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มกิจกรรม
      </button>
    </div>
    <div id="wcal-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
  </div>

  <!-- Modal สร้าง/แก้ไข event -->
  <div id="wcal-modal" class="hidden fixed inset-0 z-[80] flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="wcal-modal-backdrop"></div>
    <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <h3 id="wcal-modal-title" class="text-lg font-bold text-gray-800 mb-4">เพิ่มกิจกรรม</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ประเภทกิจกรรม</label>
            <div class="flex flex-wrap gap-2" id="wcal-type-pills">
              ${Object.entries(h).map(([E,H])=>`
                <button data-type="${E}" class="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${E==="inspection"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">${H}</button>
              `).join("")}
            </div>
          </div>
          <div id="wcal-round-row">
            <label class="block text-xs font-semibold text-gray-500 mb-1">รอบที่ <span class="text-gray-400 font-normal">(เฉพาะรอบตรวจ)</span></label>
            <input id="wcal-round" type="number" min="1" placeholder="เช่น 1, 2, 3" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ช่วงวันที่ <span class="text-rose-500">*</span></label>
            <div class="flex items-center gap-2">
              <input id="wcal-date" type="date" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <span class="text-gray-400 text-sm shrink-0">ถึง</span>
              <input id="wcal-end-date" type="date" placeholder="(ไม่บังคับ)" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
            </div>
            <p class="text-[11px] text-gray-400 mt-1">วันสิ้นสุดไม่บังคับ — ใส่เมื่อกิจกรรมมีช่วงเวลา</p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ชื่อกิจกรรม <span class="text-rose-500">*</span></label>
            <input id="wcal-label" type="text" maxlength="120" placeholder="เช่น ตรวจ ปพ.5 รอบที่ 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label>
            <textarea id="wcal-desc" rows="2" maxlength="500" placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สิ่งที่จะตรวจ / checklist</label>
            <div id="wcal-items-list" class="space-y-2 mb-2"></div>
            <button id="wcal-add-item" class="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center gap-1">＋ เพิ่มรายการ</button>
          </div>
        </div>
        <div class="flex gap-3 mt-6">
          <button id="wcal-modal-cancel" class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">ยกเลิก</button>
          <button id="wcal-modal-save" class="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition">บันทึก</button>
        </div>
      </div>
    </div>
  </div>`);let $=[],C=null;function x(){const E=document.getElementById("wcal-list");if(!$.length){E.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรม<br><span class="text-xs">กดปุ่ม + เพิ่มกิจกรรม เพื่อเริ่มต้น</span></div>';return}E.innerHTML=$.map(H=>{const k=(H.work_calendar_items||[]).sort((f,g)=>f.sort_order-g.sort_order),m=H.event_type==="inspection"&&H.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${H.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition" data-ev-id="${H.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-1.5 mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${y[H.event_type]}">${h[H.event_type]}</span>
              ${m}
              <span class="text-xs text-gray-400">${H.end_date&&H.end_date!==H.event_date?`${d(H.event_date)} – ${t(H.end_date)}`:t(H.event_date)}</span>
            </div>
            <p class="font-semibold text-gray-800 text-sm">${a(H.label)}</p>
            ${H.description?`<p class="text-xs text-gray-500 mt-0.5">${a(H.description)}</p>`:""}
            ${k.length?`<ul class="mt-2 space-y-0.5">${k.map(f=>`<li class="text-xs text-gray-500 flex gap-1.5"><span class="text-indigo-400 mt-0.5">☑</span>${a(f.item_label)}</li>`).join("")}</ul>`:""}
          </div>
          <div class="flex gap-1.5 shrink-0">
            <button class="wcal-edit-btn p-2 rounded-xl bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 transition text-sm" data-ev-id="${H.id}" title="แก้ไข">✏️</button>
            <button class="wcal-del-btn p-2 rounded-xl bg-gray-50 hover:bg-rose-50 text-gray-500 hover:text-rose-600 transition text-sm" data-ev-id="${H.id}" title="ลบ">🗑️</button>
          </div>
        </div>
      </div>`}).join("")}function _(E=""){const H=document.getElementById("wcal-items-list"),k=document.createElement("div");k.className="flex gap-2 items-center",k.innerHTML=`<input type="text" maxlength="100" value="${a(E)}" placeholder="เช่น ตรวจโปรไฟล์ครูครบถ้วน" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
      <button class="p-1.5 text-gray-400 hover:text-rose-500 transition wcal-remove-item">✕</button>`,k.querySelector(".wcal-remove-item").onclick=()=>k.remove(),H.appendChild(k)}function q(E=null){C=(E==null?void 0:E.id)??null;const H=document.getElementById("wcal-modal");document.getElementById("wcal-modal-title").textContent=E?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.querySelectorAll(".wcal-type-pill").forEach(k=>{const m=k.dataset.type===((E==null?void 0:E.event_type)??"inspection");k.className=`wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${m?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),document.getElementById("wcal-round").value=(E==null?void 0:E.round_number)??"",document.getElementById("wcal-date").value=(E==null?void 0:E.event_date)??"",document.getElementById("wcal-end-date").value=(E==null?void 0:E.end_date)??"",document.getElementById("wcal-label").value=(E==null?void 0:E.label)??"",document.getElementById("wcal-desc").value=(E==null?void 0:E.description)??"",document.getElementById("wcal-items-list").innerHTML="",((E==null?void 0:E.work_calendar_items)||[]).sort((k,m)=>k.sort_order-m.sort_order).forEach(k=>_(k.item_label)),L(),H.classList.remove("hidden"),setTimeout(()=>document.getElementById("wcal-label").focus(),50)}function A(){document.getElementById("wcal-modal").classList.add("hidden"),C=null}function I(){var E;return((E=document.querySelector(".wcal-type-pill.bg-indigo-600"))==null?void 0:E.dataset.type)??"inspection"}function L(){document.getElementById("wcal-round-row").classList.toggle("hidden",I()!=="inspection")}document.getElementById("wcal-create-btn").addEventListener("click",()=>q()),document.getElementById("wcal-modal-cancel").addEventListener("click",A),document.getElementById("wcal-modal-backdrop").addEventListener("click",A),document.getElementById("wcal-add-item").addEventListener("click",()=>_()),document.getElementById("wcal-type-pills").addEventListener("click",E=>{const H=E.target.closest(".wcal-type-pill");H&&(document.querySelectorAll(".wcal-type-pill").forEach(k=>{k.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}),H.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-indigo-600 text-white border-indigo-600",L())}),document.getElementById("wcal-list").addEventListener("click",E=>{const H=E.target.closest(".wcal-edit-btn"),k=E.target.closest(".wcal-del-btn");if(H){const m=$.find(f=>f.id===+H.dataset.evId);m&&q(m)}if(k){const m=$.find(f=>f.id===+k.dataset.evId);if(!m||!confirm(`ลบ "${m.label}" ใช่ไหม?
ความคิดเห็น/บันทึกที่อ้างอิงกิจกรรมนี้จะไม่ถูกลบ แต่จะสูญเสียการอ้างอิง`))return;c(m.id).then(()=>{$=$.filter(f=>f.id!==m.id),x()}).catch(f=>alert("ลบไม่สำเร็จ: "+f.message))}}),document.getElementById("wcal-modal-save").addEventListener("click",async()=>{const E=I(),H=parseInt(document.getElementById("wcal-round").value)||null,k=document.getElementById("wcal-date").value,m=document.getElementById("wcal-end-date").value||null,f=document.getElementById("wcal-label").value.trim(),g=document.getElementById("wcal-desc").value.trim();if(!k||!f){alert("กรุณากรอกวันที่และชื่อกิจกรรม");return}if(m&&m<k){alert("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น");return}const o=[...document.querySelectorAll("#wcal-items-list input")].map(v=>v.value.trim()).filter(Boolean),u=document.getElementById("wcal-modal-save");u.textContent="กำลังบันทึก...",u.disabled=!0;try{let v;C?(v=await r(C,{eventType:E,roundNumber:H,eventDate:k,endDate:m,label:f,description:g}),await i(C,o),v.work_calendar_items=o.map((B,M)=>({item_label:B,sort_order:M})),$=$.map(B=>B.id===C?v:B)):(v=await n({eventType:E,roundNumber:H,eventDate:k,endDate:m,label:f,description:g,academicYear:l,semester:b,createdByTeacherId:e==null?void 0:e.id}),await i(v.id,o),v.work_calendar_items=o.map((B,M)=>({item_label:B,sort_order:M})),$.push(v),$.sort((B,M)=>B.event_date.localeCompare(M.event_date))),x(),A()}catch(v){alert("บันทึกไม่สำเร็จ: "+v.message)}finally{u.textContent="บันทึก",u.disabled=!1}});try{$=await s(l,b)}catch(E){document.getElementById("wcal-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${a(E.message)}</div>`;return}x()}function xo(e){return e.filter(s=>s.category==="ศาสนา"||["AGM","AGMVOC"].includes(s.subject_group)).concat(e.filter(s=>!s.category&&!["AGM","AGMVOC","ACDMVOC"].includes(s.subject_group))).filter((s,n,r)=>r.findIndex(c=>c.id===s.id)===n)}async function Ga(){re("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",ne(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">จัดกลุ่มย่อยครูศาสนา • หัวหน้ากลุ่มย่อยจะเข้ามาเพิ่มสมาชิกในกลุ่มของตัวเอง และมี Dashboard ติดตามความคืบหน้า</p>
      </div>
      <button id="btn-add-rg"
        class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มกลุ่ม
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="rg-table-wrap">
        <div class="flex items-center justify-center py-16 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg> กำลังโหลด...
        </div>
      </div>
    </div>
  </div>`);let e=[],s=[];try{[e,s]=await Promise.all([Ae(),ge()])}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}nt(e),document.getElementById("btn-add-rg").onclick=()=>Va(null,s,async()=>{const n=await Ae();nt(n)})}function nt(e){const s=document.getElementById("rg-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่มีกลุ่มในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มกลุ่ม" เพื่อเริ่มต้น</p>
    </div>`;return}s.innerHTML=`
    <table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ชื่อกลุ่ม</th>
          <th class="px-5 py-3 text-left">หัวหน้ากลุ่ม</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50" id="rg-tbody">
        ${e.map(n=>{var c;const r=n.teachers;return`<tr class="hover:bg-gray-50 transition" data-gid="${n.id}">
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${W(n.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${r?`<div class="flex items-center gap-2">
                    ${r.image_url?`<img src="${r.image_url}" class="w-7 h-7 rounded-full object-cover" />`:`<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${W(((c=r.full_name)==null?void 0:c.charAt(0))??"?")}</div>`}
                    <div>
                      <span class="font-medium">${W(r.full_name)}</span>
                      ${r.teacher_code?`<span class="block text-xs font-mono text-gray-400">${r.teacher_code}</span>`:""}
                    </div>
                  </div>`:'<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${n.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${n.id}" data-name="${W(n.name)}">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,s.querySelectorAll(".rg-edit").forEach(n=>{n.onclick=async()=>{const r=+n.dataset.gid,i=(await Ae()).find(a=>a.id===r),w=await ge();Va(i,w,async()=>{nt(await Ae())})}}),s.querySelectorAll(".rg-del").forEach(n=>{n.onclick=async()=>{const r=+n.dataset.gid,c=n.dataset.name;if(confirm(`ลบกลุ่ม "${c}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const w=(await Ae()).find(a=>a.id===r);w!=null&&w.leader_id&&await ht(w.leader_id,null,"religion_subgroup_head"),await Tn(r),T("ลบกลุ่มแล้ว","success"),nt(await Ae())}catch(i){T("ลบไม่สำเร็จ: "+i.message,"error")}}})}}function Va(e,s,n){const r=!!e,c=document.createElement("div");c.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const i=[...s].sort((a,h)=>(a.full_name??"").localeCompare(h.full_name??"","th"));c.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${r?"แก้ไขกลุ่ม":"เพิ่มกลุ่มใหม่"}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${W((e==null?void 0:e.name)??"")}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
            class="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">หัวหน้ากลุ่มย่อย</label>
          <div id="rg-leader-wrap"></div>
          <p class="text-xs text-gray-400 mt-1">ครูที่ถูกเลือกจะได้รับบทบาท "หัวหน้ากลุ่มย่อย" สามารถเข้าไปเพิ่มสมาชิกในกลุ่มของตัวเอง และมี Dashboard ติดตามความคืบหน้าของกลุ่ม</p>
        </div>
      </div>
      <div class="px-6 pb-6 flex gap-3 justify-end">
        <button id="rg-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
        <button id="rg-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(c);const w=Lt({wrap:c.querySelector("#rg-leader-wrap"),teachers:i,value:(e==null?void 0:e.leader_id)??null});c.querySelector("#rg-modal-close").onclick=()=>c.remove(),c.querySelector("#rg-cancel").onclick=()=>c.remove(),c.querySelector("#rg-save").onclick=async()=>{const a=c.querySelector("#rg-name").value.trim();if(!a){T("กรุณาระบุชื่อกลุ่ม","error");return}const h=w.getValue(),y=(e==null?void 0:e.leader_id)??null,t=c.querySelector("#rg-save");t.disabled=!0,t.textContent="กำลังบันทึก...";try{r?(await jn(e.id,{name:a,leader_id:h}),y&&y!==+h&&await ht(y,null,"religion_subgroup_head")):await An({name:a,leader_id:h}),h&&await ht(+h,"religion_subgroup_head"),T(r?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),c.remove(),n()}catch(d){T("บันทึกไม่สำเร็จ: "+d.message,"error"),t.disabled=!1,t.textContent="บันทึก"}}}async function bo(e){re("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",ne(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let s=[],n=[];try{[s,n]=await Promise.all([Ae(),ge()])}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}const r=s.find(w=>w.leader_id===e.id),c=document.getElementById("mrg-content");if(!r){c.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const i=xo(n);await Wa(r,i)}async function Wa(e,s){const n=document.getElementById("mrg-content");let r=[];try{r=await qn(e.id)}catch{T("โหลดสมาชิกไม่สำเร็จ","error");return}n.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${W(e.name)}</h3>
        <p class="text-xs text-gray-400 mt-0.5">สมาชิกในกลุ่ม ${r.length} คน</p>
      </div>
      <button id="btn-mrg-add" class="btn-primary px-4 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มสมาชิก
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${r.length?`
        <ul class="divide-y divide-gray-50">
          ${r.map(c=>{var w;const i=c.teachers;return`
            <li class="px-5 py-3 flex items-center gap-3">
              ${i!=null&&i.image_url?`<img src="${i.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${W(((w=i==null?void 0:i.full_name)==null?void 0:w.charAt(0))??"?")}</div>`}
              <div>
                <span class="font-medium text-gray-800">${W((i==null?void 0:i.full_name)??"")}</span>
                ${i!=null&&i.teacher_code?`<span class="block text-xs font-mono text-gray-400">${i.teacher_code}</span>`:""}
              </div>
            </li>`}).join("")}
        </ul>`:`
        <div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">👥</p>
          <p class="font-medium">ยังไม่มีสมาชิกในกลุ่ม</p>
          <p class="text-xs mt-1">กดปุ่ม "เพิ่มสมาชิก" เพื่อเริ่มต้น</p>
        </div>`}
    </div>`,document.getElementById("btn-mrg-add").onclick=()=>yo(e,s,r,async()=>{await Wa(e,s)})}function yo(e,s,n,r){const c=document.createElement("div");c.className="fixed inset-0 z-[9000] bg-white flex flex-col",c.innerHTML=`
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${W(e.name)}"</h3>
      <button class="text-gray-400 hover:text-gray-600 text-2xl leading-none" id="mrg-modal-close">✕</button>
    </div>
    <div class="flex-1 overflow-y-auto px-5 py-4">
      <div class="max-w-2xl mx-auto">
        <div id="mrg-chips" class="mb-5"></div>
        <label class="block text-xs font-medium text-gray-600 mb-1">ค้นหาครูศาสนาเพื่อเพิ่ม (ชื่อหรือรหัสครู)</label>
        <div id="mrg-member-wrap"></div>
      </div>
    </div>
    <div class="px-5 py-4 border-t border-gray-100 flex gap-3 justify-end flex-shrink-0">
      <button id="mrg-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
      <button id="mrg-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">บันทึก</button>
    </div>`,document.body.appendChild(c);const i=St({wrap:c.querySelector("#mrg-member-wrap"),chipsWrap:c.querySelector("#mrg-chips"),teachers:s,value:n.map(w=>w.teacher_id)});c.querySelector("#mrg-modal-close").onclick=()=>c.remove(),c.querySelector("#mrg-cancel").onclick=()=>c.remove(),c.querySelector("#mrg-save").onclick=async()=>{const w=i.getValue(),a=c.querySelector("#mrg-save");a.disabled=!0,a.textContent="กำลังบันทึก...";try{await Pn(e.id,w),c.remove(),await r(),fo(e,s.filter(h=>w.includes(h.id)))}catch(h){T("บันทึกไม่สำเร็จ: "+h.message,"error"),a.disabled=!1,a.textContent="บันทึก"}}}function fo(e,s){const n=document.createElement("div");n.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${W(e.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${s.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${s.length?`<ul class="divide-y divide-gray-50">
          ${s.map(r=>{var c;return`<li class="py-2.5 flex items-center gap-3">
            ${r.image_url?`<img src="${r.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${W(((c=r.full_name)==null?void 0:c.charAt(0))??"?")}</div>`}
            <div>
              <span class="font-medium text-gray-800">${W(r.full_name??"")}</span>
              ${r.teacher_code?`<span class="block text-xs font-mono text-gray-400">${r.teacher_code}</span>`:""}
            </div>
          </li>`}).join("")}
        </ul>`:'<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>'}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#mrg-summary-close").onclick=()=>n.remove()}async function Ya(){re("subject-group-requests"),document.getElementById("page-title").textContent="คำขอย้ายกลุ่มวิชา";const e=i=>i?new Date(i).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—",s=i=>i==="sasana"?"🕌 ศาสนา":"📖 สามัญ",n={pending:{label:"🕐 รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธแล้ว",cls:"bg-red-100 text-red-600"}};ne(`
  <div class="max-w-3xl mx-auto animate-fade space-y-4">
    <p class="text-xs text-gray-400">คำขอจากนักเรียนที่เห็นว่าวิชาบางวิชาถูกจัดกลุ่มสามัญ/ศาสนาผิดหลักสูตร — อนุมัติแล้วจะมีผลเฉพาะห้องที่คุณเลือกเท่านั้น</p>
    <div class="flex items-center gap-2">
      <button id="sgr-tab-pending" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-tab="pending">รอตรวจสอบ</button>
      <button id="sgr-tab-all" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-500" data-tab="all">ทั้งหมด</button>
    </div>
    <div id="sgr-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>
    </div>
  </div>`);let r="pending";const c=async()=>{document.getElementById("sgr-list").innerHTML='<div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>';const i=r==="pending"?await ta().catch(()=>[]):await is().catch(()=>[]),w=document.getElementById("sgr-list");if(!i.length){w.innerHTML=`<div class="text-center py-16 text-gray-300"><p class="text-4xl mb-3">🔀</p><p class="text-sm">${r==="pending"?"ไม่มีคำขอรอตรวจสอบ":"ยังไม่มีคำขอ"}</p></div>`;return}w.innerHTML=i.map(a=>{var y,t;const h=n[a.status]??n.pending;return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="font-semibold text-sm text-gray-800 truncate">${he(a.subject_name??"—")} <span class="text-xs text-gray-400 font-mono">${he(a.subject_code??"")}</span></p>
            <p class="text-xs text-gray-500 mt-0.5">${he(((y=a.students)==null?void 0:y.full_name)??"—")} · ${he(((t=a.students)==null?void 0:t.student_code)??"")} · ${he(a.class_level??"")}</p>
            <p class="text-xs text-gray-500 mt-1">${s(a.current_group)} → ${s(a.requested_group)}</p>
            <p class="text-[11px] text-gray-400 mt-1">${e(a.created_at)}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${h.cls}">${h.label}</span>
            ${a.status==="pending"?`<button class="sgr-review-btn text-xs font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50" data-id="${a.id}">ตรวจสอบ</button>`:""}
          </div>
        </div>
      </div>`}).join(""),w.querySelectorAll(".sgr-review-btn").forEach(a=>{a.addEventListener("click",()=>ho(i.find(h=>h.id===Number(a.dataset.id)),c))})};document.querySelectorAll(".sgr-tab").forEach(i=>{i.addEventListener("click",()=>{r=i.dataset.tab,document.querySelectorAll(".sgr-tab").forEach(w=>{w.className=`sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold ${w.dataset.tab===r?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}`}),c()})}),await c()}function ho(e,s){var c;if(!e)return;const n=document.createElement("div");n.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">🔀 ตรวจสอบคำขอย้ายกลุ่มวิชา</h3>
        <p class="text-xs text-gray-500 mt-1">${he(((c=e.students)==null?void 0:c.full_name)??"—")} ขอย้าย "${he(e.subject_name??"")}" ${e.current_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"} → ${e.requested_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"}</p>
      </div>
      <div class="flex-1 overflow-y-auto px-5 py-4">
        <p class="text-xs text-gray-500 mb-2">เลือกห้องในระดับชั้น <b>${he(e.class_level??"")}</b> ที่จะให้มีผลจริง (ค่าเริ่มต้นเลือกทุกห้องที่สอนวิชารหัสเดียวกันไว้ให้แล้ว ปรับได้อิสระ):</p>
        <div id="sgr-candidates" class="space-y-1.5">
          <div class="text-center py-6 text-gray-400 text-sm">กำลังโหลดรายชื่อห้อง...</div>
        </div>
      </div>
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0 space-y-2">
        <textarea id="sgr-comment" rows="2" placeholder="หมายเหตุ (ถ้าปฏิเสธ)" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"></textarea>
        <div class="flex gap-2">
          <button id="sgr-reject" class="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200">ปฏิเสธ</button>
          <button id="sgr-approve" class="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700">อนุมัติที่เลือก</button>
        </div>
        <button id="sgr-cancel" class="w-full text-xs text-gray-400 hover:text-gray-600">ปิด</button>
      </div>
    </div>`,document.body.appendChild(n);const r=()=>n.remove();n.querySelector("#sgr-cancel").addEventListener("click",r),vs(e.id).then(i=>{const w=n.querySelector("#sgr-candidates");if(!i.length){w.innerHTML='<p class="text-center text-gray-400 text-sm py-4">ไม่พบห้องที่สอนวิชารหัสนี้ในระดับชั้นเดียวกัน</p>';return}w.innerHTML=i.map(a=>`
      <label class="flex items-center gap-2.5 border border-gray-100 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-50">
        <input type="checkbox" class="sgr-candidate-cb" value="${a.class_id}" checked />
        <span class="flex-1 text-sm text-gray-700">${he(a.class_name??"")}</span>
        <span class="text-[11px] text-gray-400">${a.student_count} คน · ${a.current_group==="sasana"?"🕌":"📖"}</span>
      </label>`).join("")}).catch(()=>{n.querySelector("#sgr-candidates").innerHTML='<p class="text-center text-red-400 text-sm py-4">โหลดรายชื่อห้องไม่สำเร็จ</p>'}),n.querySelector("#sgr-approve").addEventListener("click",async i=>{var a;const w=[...n.querySelectorAll(".sgr-candidate-cb:checked")].map(h=>Number(h.value));if(!w.length){T("เลือกอย่างน้อย 1 ห้อง","warning");return}if(confirm(`อนุมัติย้ายกลุ่มให้ ${w.length} ห้องที่เลือก?`)){i.target.disabled=!0,i.target.textContent="กำลังบันทึก...";try{await ws(e.id,w),T("อนุมัติแล้ว ✅","success"),(a=window._refreshSubjectGroupBadge)==null||a.call(window),r(),s()}catch(h){T("บันทึกไม่สำเร็จ: "+ae(h),"error"),i.target.disabled=!1,i.target.textContent="อนุมัติที่เลือก"}}}),n.querySelector("#sgr-reject").addEventListener("click",async i=>{var a;if(!confirm("ปฏิเสธคำขอนี้?"))return;const w=n.querySelector("#sgr-comment").value.trim();i.target.disabled=!0,i.target.textContent="กำลังบันทึก...";try{await $s(e.id,w),T("ปฏิเสธคำขอแล้ว","success"),(a=window._refreshSubjectGroupBadge)==null||a.call(window),r(),s()}catch(h){T("บันทึกไม่สำเร็จ: "+ae(h),"error"),i.target.disabled=!1,i.target.textContent="ปฏิเสธ"}})}async function Ka(){re("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",ne(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let e=[],s=[],n="manage",r="สามัญ",c="",i="",w="";const a=m=>{if(!m)return null;const f=m.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return f?f[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},h=m=>m?/^(PR|อก\.|อป\.)/i.test(m)?"ศาสนา":/^ปวช\./i.test(m)?"ปวช":"สามัญ":"สามัญ",y={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},t=m=>e.map(f=>f.class_name).filter(f=>f&&h(f)===m).sort((f,g)=>f.localeCompare(g,"th")),d=m=>{const f=t(m),g=[...new Set(f.map(u=>a(u)).filter(Boolean))],o=y[m]||[];return[...new Set([...o,...g])].sort((u,v)=>u.localeCompare(v,"th"))},p=async()=>{const[m,f,g]=await Promise.all([rt(),Ne(),Mn()]);s=f,e=[...new Set(m.map(u=>u.class_name).filter(Boolean))].map(u=>g.find(B=>B.class_name===u)||{class_name:u,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},l=m=>s.find(f=>f.id===m),b=()=>{let m=document.getElementById("hc-print-roster-styles");m||(m=document.createElement("style"),m.id="hc-print-roster-styles",document.head.appendChild(m)),m.textContent=`
      @media screen {
        #hc-print-roster-area {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9000 !important;
          background-color: rgba(15, 23, 42, 0.85) !important;
          backdrop-filter: blur(4px) !important;
          overflow-y: auto !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          padding: 32px 16px !important;
        }
        .preview-sheet-wrap {
          background: white !important;
          color: black !important;
          width: 100% !important;
          max-width: 800px !important;
          padding: 40px !important;
          border-radius: 16px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
          margin-top: 60px !important;
          font-family: Sarabun, sans-serif !important;
        }
        .preview-controls {
          position: fixed !important;
          top: 16px !important;
          display: flex !important;
          gap: 12px !important;
          z-index: 9001 !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(8px) !important;
          padding: 8px 16px !important;
          border-radius: 16px !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
        }
        .preview-btn-print {
          background: #4f46e5 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-print:hover {
          background: #4338ca !important;
        }
        .preview-btn-close {
          background: #ef4444 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-close:hover {
          background: #dc2626 !important;
        }
      }
      @media print {
        body > * { display: none !important; }
        #hc-print-roster-area {
          display: block !important;
          position: absolute !important;
          left: 0 !important; top: 0 !important;
          width: 100% !important;
          padding: 0 !important; margin: 0 !important;
          background: white !important;
          color: black !important;
          font-family: Sarabun, sans-serif !important;
        }
        #hc-print-roster-area * { visibility: visible !important; }
        .preview-controls { display: none !important; }
        .preview-sheet-wrap {
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          max-width: 100% !important;
        }
      }
      .roster-page-block {
        display: block !important;
        page-break-before: always !important;
        break-before: page !important;
        page-break-inside: avoid;
      }
      .roster-page-block:first-child {
        page-break-before: auto !important;
        break-before: auto !important;
      }
      .roster-title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px;
      }
      .roster-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
      }
      .roster-table th, .roster-table td {
        border: 1px solid #000000 !important;
        padding: 8px 10px !important;
        vertical-align: middle;
      }
      .roster-table th {
        background-color: #f3f4f6 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        font-size: 12px;
        font-weight: bold;
      }
      .roster-table td {
        font-size: 12px;
      }
      .stu-info-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .stu-img {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        object-fit: cover;
      }
      .stu-img-placeholder {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #9ca3af;
      }
    `;const f=document.createElement("div");f.id="hc-print-roster-area",document.body.appendChild(f);const g=e.filter(v=>!(h(v.class_name)!==r||c&&a(v.class_name)!==c||i&&v.class_name!==i)).sort((v,B)=>v.class_name.localeCompare(B.class_name,"th"));let o="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";c&&(o+=` ระดับชั้น ${c}`),i&&(o+=` ห้อง ${i}`);const u=g.map((v,B)=>{const M=l(v.head_student_id),S=l(v.vice_head_student_id),j=M!=null&&M.image_url?`<img src="${M.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',R=S!=null&&S.image_url?`<img src="${S.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',N=M?`<b>${W(M.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${M.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',O=S?`<b>${W(S.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${S.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${B+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${W(v.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${j}
              <div>${N}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${R}
              <div>${O}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${W(v.notes??"")}</td>
        </tr>
      `}).join("");f.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${o}</div>
          <table class="roster-table">
            <thead>
              <tr>
                <th style="width: 45px;">ลำดับ</th>
                <th style="width: 90px;">ห้องเรียน</th>
                <th>หัวหน้าห้อง</th>
                <th>รองหัวหน้าห้อง</th>
                <th style="width: 150px;">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              ${u||'<tr><td colspan="5" style="text-align:center;padding:20px;color:#9ca3af;">ไม่พบข้อมูลห้องเรียน</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `,f.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},f.querySelector("#pr-btn-close-preview").onclick=()=>{f.remove()}},$=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${n==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${n==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,C=()=>{const m=w.trim().toLowerCase(),f=e.filter(g=>!(h(g.class_name)!==r||m&&!g.class_name.toLowerCase().includes(m))).sort((g,o)=>g.class_name.localeCompare(o.class_name,"th"));return f.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':f.map(g=>{const o=l(g.head_student_id),u=l(g.vice_head_student_id),v=o!=null&&o.image_url?`<img src="${o.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',B=u!=null&&u.image_url?`<img src="${u.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${W(g.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${r}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${v}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${o?W(o.full_name):"— ยังไม่ระบุ —"}</span>
                  ${o?`<span class="text-xs text-gray-400 font-mono">รหัส: ${o.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${B}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${u?W(u.full_name):"— ยังไม่ระบุ —"}</span>
                  ${u?`<span class="text-xs text-gray-400 font-mono">รหัส: ${u.student_code}</span>`:""}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${g.head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
              <p>เกียรติบัตรรอง: ${g.vice_head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${W(g.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},x=()=>{const m=e.filter(f=>!(h(f.class_name)!==r||c&&a(f.class_name)!==c||i&&f.class_name!==i)).sort((f,g)=>f.class_name.localeCompare(g.class_name,"th"));return m.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':m.map((f,g)=>{const o=l(f.head_student_id),u=l(f.vice_head_student_id),v=o!=null&&o.image_url?`<img src="${o.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',B=u!=null&&u.image_url?`<img src="${u.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${g+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${W(f.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${v}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${o?W(o.full_name):"— ยังไม่ระบุ —"}</p>
                ${o?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${o.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${B}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${u?W(u.full_name):"— ยังไม่ระบุ —"}</p>
                ${u?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${u.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${W(f.notes??"")}
          </td>
        </tr>
      `}).join("")},_=()=>{const m=e.filter(f=>!(h(f.class_name)!==r||c&&a(f.class_name)!==c||i&&f.class_name!==i)).length;n==="manage"?ne(`
        <div class="space-y-5 animate-fade">
          ${$()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${r==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${r==="ศาสนา"?"selected":""}>ศาสนา</option>
                <option value="ปวช" ${r==="ปวช"?"selected":""}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${W(w)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${m}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${C()}
          </div>
        </div>
      `):(ne(`
        <div class="space-y-5 animate-fade">
          ${$()}

          <!-- Printing filters (Aligned with QR screen) -->
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">1. ระบบหลักสูตร</label>
                <select id="pr-filter-category" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value="สามัญ" ${r==="สามัญ"?"selected":""}>สามัญ</option>
                  <option value="ศาสนา" ${r==="ศาสนา"?"selected":""}>ศาสนา</option>
                  <option value="ปวช" ${r==="ปวช"?"selected":""}>ปวช</option>
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">2. ระดับชั้น</label>
                <select id="pr-filter-level" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <!-- เติมแบบไดนามิก -->
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">3. ห้องเรียน</label>
                <select id="pr-filter-class" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value="">-- ทั้งระดับชั้น --</option>
                </select>
              </div>
            </div>
            
            <div class="pt-2 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2">
              <span class="text-xs text-gray-400">พบข้อมูลหัวหน้า/รองหัวหน้าทั้งหมด <b class="text-gray-700">${m}</b> ห้อง</span>
              <div class="flex gap-2">
                <button id="btn-cert-settings"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shadow-sm">
                  ⚙️ ตั้งค่าแสดงเกียรติบัตร
                </button>
                <button id="btn-print-leaders-roster"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  ${m===0?"disabled":""}>
                  🖨️ พิมพ์ใบรายชื่อ (${m})
                </button>
              </div>
            </div>
          </div>

          <!-- Summary Table -->
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase">
                  <tr>
                    <th class="px-4 py-3 text-center w-12">ลำดับ</th>
                    <th class="px-4 py-3 text-center w-24">ห้องเรียน</th>
                    <th class="px-4 py-3">หัวหน้าห้อง</th>
                    <th class="px-4 py-3">รองหัวหน้าห้อง</th>
                    <th class="px-4 py-3 w-40">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody id="pr-table-body" class="divide-y divide-gray-100">
                  ${x()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `),q()),I()},q=()=>{const m=document.getElementById("pr-filter-level");if(!m)return;const f=d(r);m.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${f.map(g=>`<option value="${g}" ${g===c?"selected":""}>${g}</option>`).join("")}
    `,A()},A=()=>{const m=document.getElementById("pr-filter-class");if(!m)return;const g=t(r).filter(o=>c?a(o)===c:!0);m.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${g.length} ห้อง) --</option>
      ${g.map(o=>`<option value="${o}" ${o===i?"selected":""}>ห้อง ${o}</option>`).join("")}
    `},I=()=>{var m,f,g,o,u,v,B,M,S;(m=document.getElementById("tab-manage"))==null||m.addEventListener("click",()=>{n="manage",_()}),(f=document.getElementById("tab-print"))==null||f.addEventListener("click",()=>{n="print",_()}),(g=document.getElementById("hc-filter-category"))==null||g.addEventListener("change",j=>{r=j.target.value,_()}),(o=document.getElementById("hc-search-classes"))==null||o.addEventListener("input",j=>{w=j.target.value;const R=document.getElementById("hc-cards-grid");R&&(R.innerHTML=C()),E()}),E(),(u=document.getElementById("pr-filter-category"))==null||u.addEventListener("change",j=>{r=j.target.value,c="",i="",q(),L()}),(v=document.getElementById("pr-filter-level"))==null||v.addEventListener("change",j=>{c=j.target.value,i="",A(),L()}),(B=document.getElementById("pr-filter-class"))==null||B.addEventListener("change",j=>{i=j.target.value,L()}),(M=document.getElementById("btn-print-leaders-roster"))==null||M.addEventListener("click",b),(S=document.getElementById("btn-cert-settings"))==null||S.addEventListener("click",H)},L=()=>{const m=document.getElementById("pr-table-body");m&&(m.innerHTML=x());const f=e.filter(o=>!(h(o.class_name)!==r||c&&a(o.class_name)!==c||i&&o.class_name!==i)).length,g=document.getElementById("btn-print-leaders-roster");g&&(g.disabled=f===0,g.textContent=`🖨️ พิมพ์ใบรายชื่อ (${f})`)},E=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.room,g=e.find(o=>o.class_name===f);g&&k(g)})})},H=()=>{const m=document.createElement("div");m.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const f=e.some(B=>B.show_cert);m.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">⚙️ ตั้งค่าการแสดงผลเกียรติบัตร</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">เปิด-ปิดการแสดงบนหน้าพอร์ทัลของนักเรียน</p>
          </div>
          <button id="csm-modal-close" class="text-gray-400 hover:text-gray-600 text-xl font-bold p-1">✕</button>
        </div>
        
        <!-- Toggle Content -->
        <div class="px-6 py-8 flex flex-col items-center justify-center gap-4">
          <div class="text-center">
            <span class="block font-bold text-gray-800 text-base" id="csm-status-text">...</span>
            <span class="block text-xs text-gray-400 mt-1">สวิตช์ควบคุมการแสดงเกียรติบัตรสำหรับทุกห้องเรียนทั้งโรงเรียน</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer scale-125 my-2">
            <input type="checkbox" id="csm-global-toggle" class="sr-only peer" ${f?"checked":""}>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex justify-end shrink-0">
          <button id="csm-btn-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">เสร็จสิ้น</button>
        </div>
      </div>
    `,document.body.appendChild(m);const g=m.querySelector("#csm-global-toggle"),o=m.querySelector("#csm-status-text"),u=B=>{o.textContent=B?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};u(f),g.addEventListener("change",async()=>{const B=g.checked;g.disabled=!0,o.textContent="กำลังบันทึก...";try{await Fn(B),e.forEach(M=>{M.show_cert=B}),u(B),T(B?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(M){T("บันทึกผิดพลาด: "+M.message,"error"),g.checked=!B,u(!B)}finally{g.disabled=!1}});const v=()=>m.remove();m.querySelector("#csm-modal-close").onclick=v,m.querySelector("#csm-btn-close").onclick=v},k=m=>{const f=document.createElement("div");f.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let g=l(m.head_student_id),o=l(m.vice_head_student_id);f.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขหัวหน้าและรองหัวหน้าห้อง</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">ห้องเรียน ${m.class_name}</p>
          </div>
          <button id="ld-modal-close" class="text-gray-400 hover:text-gray-600 text-xl font-bold p-1">✕</button>
        </div>
        
        <!-- Form Body -->
        <div class="px-6 py-5 overflow-y-auto space-y-6 flex-1 text-sm">
          
          <!-- SECTION 1: Head Student -->
          <div class="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 space-y-3">
            <h4 class="font-bold text-gray-800 text-xs uppercase tracking-wider text-amber-600 flex items-center gap-1">👑 1. หัวหน้าห้อง (Head Student)</h4>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">รหัสนักเรียน 5 หลัก</label>
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(g==null?void 0:g.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${g?`
                ${g.image_url?`<img src="${g.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${W(g.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${g.student_code} · ห้อง ${g.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Head Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-head-cert-in" placeholder="https://..." value="${m.head_cert_url??""}"
                  class="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <label class="px-3 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-semibold text-xs hover:bg-indigo-100 transition cursor-pointer flex items-center shrink-0">
                  📁 อัปโหลด
                  <input type="file" id="ld-head-cert-file" class="hidden" accept="image/*,application/pdf" />
                </label>
              </div>
            </div>
          </div>
          
          <!-- SECTION 2: Vice Head Student -->
          <div class="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 space-y-3">
            <h4 class="font-bold text-gray-800 text-xs uppercase tracking-wider text-slate-500 flex items-center gap-1">🥈 2. รองหัวหน้าห้อง (Vice Head Student)</h4>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">รหัสนักเรียน 5 หลัก</label>
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(o==null?void 0:o.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${o?`
                ${o.image_url?`<img src="${o.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${W(o.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${o.student_code} · ห้อง ${o.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Vice Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-vice-cert-in" placeholder="https://..." value="${m.vice_head_cert_url??""}"
                  class="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <label class="px-3 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-semibold text-xs hover:bg-indigo-100 transition cursor-pointer flex items-center shrink-0">
                  📁 อัปโหลด
                  <input type="file" id="ld-vice-cert-file" class="hidden" accept="image/*,application/pdf" />
                </label>
              </div>
            </div>
          </div>
          
          <!-- SECTION 3: Notes -->
          <div class="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 space-y-3">
            <h4 class="font-bold text-gray-800 text-xs uppercase tracking-wider text-teal-600 flex items-center gap-1">📝 3. หมายเหตุ (Remarks)</h4>
            <div>
              <textarea id="ld-notes-in" placeholder="ระบุหมายเหตุสำหรับห้องเรียนนี้..." rows="2"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">${m.notes??""}</textarea>
            </div>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end shrink-0">
          <button id="ld-btn-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
          <button id="ld-btn-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">บันทึกข้อมูล</button>
        </div>
      </div>
    `,document.body.appendChild(f);let u=m.head_student_id,v=m.vice_head_student_id;const B=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},M=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},S=O=>{const Q=document.getElementById("ld-head-card");if(O){u=O.id;const Y=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';Q.innerHTML=`
          ${Y}
          <div>
            <p class="font-bold text-gray-800">${W(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else u=null,Q.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},j=O=>{const Q=document.getElementById("ld-vice-card");if(O){v=O.id;const Y=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';Q.innerHTML=`
          ${Y}
          <div>
            <p class="font-bold text-gray-800">${W(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else v=null,Q.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async O=>{const Q=O.target.value.trim();if(Q.length===5){B();const Y=await Ht(Q).catch(()=>null);S(Y)}else Q.length===0&&(u=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async O=>{const Q=O.target.value.trim();if(Q.length===5){M();const Y=await Ht(Q).catch(()=>null);j(Y)}else Q.length===0&&(v=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const R=async(O,Q)=>{const Y=O.files[0];if(Y){Q.disabled=!0,Q.value="กำลังอัปโหลดไฟล์...";try{const P=Y.name.split(".").pop(),G=`certificates/${m.id}/${O.id}-${Date.now()}.${P}`;let K=Y;Y.type.startsWith("image/")&&(K=await Ps(Y,{maxWidth:1600,quality:.88}));const{error:D}=await le.storage.from("system-assets").upload(G,K,{upsert:!0,contentType:Y.type});if(D)throw D;const{data:z}=le.storage.from("system-assets").getPublicUrl(G);Q.value=z.publicUrl}catch(P){T("อัปโหลดล้มเหลว: "+P.message,"error"),Q.value=""}finally{Q.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const N=()=>f.remove();document.getElementById("ld-modal-close").onclick=N,document.getElementById("ld-btn-cancel").onclick=N,document.getElementById("ld-btn-save").onclick=async()=>{const O=document.getElementById("ld-btn-save");O.disabled=!0,O.textContent="กำลังบันทึก...";const Q=document.getElementById("ld-head-cert-in").value.trim(),Y=document.getElementById("ld-vice-cert-in").value.trim(),P=document.getElementById("ld-notes-in").value.trim();try{await Kn(m.class_name,u,v,Q,Y,P),m.head_student_id=u,m.vice_head_student_id=v,m.head_cert_url=Q,m.vice_head_cert_url=Y,m.notes=P,T("บันทึกข้อมูลเรียบร้อยแล้ว","success"),N(),_()}catch(G){T("เกิดข้อผิดพลาด: "+G.message,"error"),O.disabled=!1,O.textContent="บันทึกข้อมูล"}}};await p(),_()}const No=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:Ia,renderAnnouncements:Ha,renderAutoscaleHistory:Ra,renderClasses:Tt,renderClassroomLeaders:Ka,renderClassroomsAdmin:Ba,renderCouncilRepNominationSummary:Oa,renderCurriculum:He,renderDepartments:ha,renderDeptTable:ot,renderDonations:Fa,renderFeedbackAdmin:za,renderHolidays:$a,renderHomeroom:va,renderHouseColors:Na,renderImport:_a,renderLifeSkillAdmin:Ea,renderMyReligionGroup:bo,renderOverview:Et,renderPayments:ka,renderPeriods:lt,renderPrayerAdmin:La,renderReadingAdmin:Sa,renderRegisteredTeachers:at,renderReligionGroups:Ga,renderRolePermissions:Pa,renderScoreColConfig:wa,renderSettings:fa,renderStudents:ya,renderSubjectGroupRequests:Ya,renderSubjectTable:jt,renderSubjects:Pe,renderSupervisorAnnouncements:mo,renderTeacherTable:Ve,renderTeachers:ba,renderUsageStats:Ca,renderWorkCalendar:Ua,renderWorkCalendarView:go},Symbol.toStringTag,{value:"Module"}));export{Oa as A,Ka as B,Ya as C,za as D,Fa as E,Lr as F,Na as G,Pa as H,Ua as I,vt as J,Ra as K,Ha as L,No as M,Ga as a,Ba as b,Ca as c,Ia as d,_a as e,fa as f,La as g,Sa as h,Ea as i,ka as j,$a as k,at as l,wa as m,va as n,lt as o,He as p,ha as q,Pe as r,ya as s,Tt as t,ba as u,$r as v,Et as w,Ve as x,jt as y,ot as z};
