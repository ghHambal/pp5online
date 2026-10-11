const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-C-roKrdU.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/admin-subject-management-D8sxtIEc.js","assets/ui-CdgrLWzs.js","assets/ai-prompt-gate-D6R7FVed.js","assets/admin-schedule-management-C37RwaF3.js","assets/teacher-views-classes-DVprDxA6.js","assets/browser-JP79f-a9.js","assets/sync-GIjLHUjs.js","assets/regrade-api-CbX4L_dw.js","assets/pp5-doc-DT_3IQge.js","assets/score-display-CQ4dUIPx.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-D0Lb_BpE.js","assets/storage-CuUjCgvI.js","assets/teacher-views-grades-CEAI6LzF.js","assets/score-qr-scanner-VIO-qDxr.js","assets/teacher-views-attendance-Bf7yzdiF.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/admin-schedule-import-CUthI3cu.js","assets/tutorial-D9xKLgCL.js","assets/teacher-views-donor-chat-BOAGwgdT.js","assets/teacher-SS6XmaaI.js","assets/promptpay-CIuxvxIA.js","assets/theme-qDnPEUQn.js","assets/version.js_v_10.22-A-Q3FjCD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CDJXdrOK.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/academic-term-switcher-JTnW63gE.js","assets/sports-portals.js_v_10.22-Bl6mvaSs.js","assets/sports-awards-admin-6oCPrlSb.js","assets/terangganu-api-C1IjZK4l.js","assets/teacher-views-certificates-DQidJfAS.js","assets/certificate-engine-CN0kp0dY.js","assets/certificate-editor-BDRqkXbn.js","assets/student-views-CzHNOdez.js","assets/student-api-Pom1H7Xo.js","assets/quiz-api-BIDUVPR5.js"])))=>i.map(i=>d[i]);
import{a as N,g as we,_ as Ce,d as Xa,i as nn,s as Cs,b as ht,j as Ha,k as Is,l as Ra}from"./ui-CdgrLWzs.js";import{getExecClassOverview as on,getDepartments as st,getSystemConfig as Ne,getTeachers as Oe,getLeavePermissionDashboard as ln,getPendingSubjectGroupRequests as Ts,getAllAppFeedback as Bs,getAllPaymentRequests as Ke,deleteTeacher as dn,getMasterSubjects as Zt,deleteSubject as cn,deleteDepartment as un,deletePeriod as pn,updateTeacher as mn,createTeacher as xn,updateDepartment as gn,createDepartment as bn,upsertPeriod as yn,upsertHoliday as fn,deleteHoliday as hn,getPeriods as vn,getCurriculumStandards as wn,updateCurriculumStandard as _n,createCurriculumStandard as $n,importCurriculumStandards as kn,deleteCurriculumStandard as Sn,getClasses as Xt,createSubject as En,updateSystemConfig as Be,deleteClass as js,getAcademicTerms as ea,getUniqueRooms as Ln,getUniqueReligionRooms as qs,deleteHomeroomTeacher as Cn,getHomeroomTeachers as Ht,getStudents as _t,deleteStudent as In,updateStudent as Tn,getClassrooms as es,getScoreColumnConfig as Bn,upsertScoreColumnConfig as jn,getReligionGroups as it,getSchoolHolidaysFull as qn,upsertHomeroomTeachersBatch as An,updateClassroom as Mn,createClassroom as Nn,getLifeSkillColumns as Dn,getReadingScoreColumns as Hn,getHouseGroups as Rn,updateTeacherPosition as La,deleteReligionGroup as On,updateReligionGroup as Pn,createReligionGroup as zn,getReligionGroupMembers as Fn,getClassroomLeaders as Un,deleteClassroom as Gn,fillLifeSkillScoresToClassScores as Vn,fillPrayerScoresToReligionClassScores as Wn,assignStudentsHouseColor as ts,setReligionGroupMembers as Yn,getAllReadingScores as Kn,deleteReadingScoreColumn as Jn,updateAllClassroomCertsToggle as Qn,getAllLifeSkillScores as Zn,deleteLifeSkillColumn as Xn,updateReadingScoreColumn as eo,createReadingScoreColumn as to,getStudentsByReligionRoom as ao,getPrayerRecordsByRoom as so,getStudentByCode as as,updateClassroomLeaders as ro,updateLifeSkillColumn as no,createLifeSkillColumn as oo,autoEnrollStudentsByRoom as lo,getTeachersWithPositions as io,previewNewSemester as co,purgeTermSourceDataBatch as uo,startNewSemester as po,getScheduleTeacherIds as mo,mergeTeacherAccounts as xo,unlinkTeacherAccount as go,getStats as ss,getAllCouncilRepNominations as bo,getRolePermissions as yo,saveRolePermission as fo,getAllAnnouncements as As,getUsageStats as ho,reviewPaymentRequest as Mt,approveTeacherQuota as pa,getAllSubjectGroupRequests as vo,setFeedbackRead as rs,setFeedbackCategory as wo,deleteAppFeedback as _o,advisorResetStudentPassword as $o,markStudentPasswordResetNotice as ko,setFeedbackStatusReply as ns,updateAnnouncement as ma,createAnnouncement as xa,getAnnouncementCommentsBulk as So,deleteAnnouncement as Eo,getPaymentSlipViewUrl as Lo,getPrayerMonitoringData as Co,getLifeSkillMonitoringData as Io,getReadingMonitoringData as To,getCandidateClassesForGroupRequest as Bo,approveSubjectGroupRequest as jo,rejectSubjectGroupRequest as qo,notifyFeedbackReply as Ao,getAnnouncementComments as Mo,deleteAnnouncementComment as No,assignHomeroomTeacher as Ms,savePrayerCellAdmin as Do}from"./api-C-roKrdU.js";import{r as Ho}from"./leave-monitor.js_v_10.18-DpEwUS_s.js";import{A as Ro,o as Oo,c as Ns,a as Ye,b as Ca,r as Ds}from"./academic-term-switcher-JTnW63gE.js";import{s as oe}from"./supabase-BV-W2lsh.js";import{DEFAULT_SUBJECT_SYNC_COLUMNS as ga,DEFAULT_SUBJECT_SYNC_KEY_FIELD as os,DEFAULT_SUBJECT_SYNC_TAB as ba,DEFAULT_SUBJECT_SYNC_SHEET_ID as Po,SUBJECT_SYNC_COLUMNS as ls,syncSubjectCatalog as zo,COPY_TEMPLATE_CONFIG as Fo,syncStudentsFromSheetNow as Uo}from"./sync-GIjLHUjs.js";import{o as Hs}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as ds,_dateInputValue as Rs,_readingGrade as Os,READING_GRADES as gt,_htmlEsc as ze}from"./teacher-views-utils-D0Lb_BpE.js";import{r as Go,a as Vo,b as Wo,c as Ps,d as Yo}from"./teacher-views-classes-DVprDxA6.js";import{renderCourseForm as Ko}from"./teacher-views-DkRj3X4p.js";import"./browser-JP79f-a9.js";import{uploadShirtDesignHtml as Jo,uploadShirtDesignColorImage as Qo,uploadTeacherPhoto as Zo,uploadDeptAsset as is,uploadAnnouncementImage as zs,compressImage as Xo,uploadStickerPng as el,uploadSystemAsset as tl}from"./storage-CuUjCgvI.js";import{c as Fs}from"./ai-prompt-gate-D6R7FVed.js";import"./teacher-views-grades-CEAI6LzF.js";import{n as cs,d as al,s as sl,a as rl,W as nl}from"./workload-scheduler-C9WpzjbH.js";import{i as ol,a as ll,p as dl,b as il}from"./import-C5rURn5v.js";import{a as Us}from"./theme-qDnPEUQn.js";import{f as cl}from"./leave-time-CrS9gT63.js";import{b as ul}from"./anti-pull-refresh-BGrI1pMY.js";import{o as pl}from"./azizgames-modal-CZNvwg6f.js";import{r as ml}from"./sports-awards-admin-6oCPrlSb.js";import{getEffectiveUser as Gs,getEffectiveProfileId as Vs}from"./impersonation-0xVfgYVY.js";const xl=["ci_micro","ci_small","ci_medium"],gl={ci_micro:1,ci_small:2,ci_medium:3},bl={ci_micro:"Micro",ci_small:"Small",ci_medium:"Medium"},yl=7*60*60*1e3,fl=/^\d{4}-\d{2}-\d{2}$/,us=/^(?:([01]\d|2[0-3]):([0-5]\d)|24:00)$/,zt=e=>xl.includes(e),ps=e=>fl.test(String(e??""))&&!Number.isNaN(Date.parse(`${e}T00:00:00Z`))&&new Date(`${e}T00:00:00Z`).toISOString().slice(0,10)===e,Ft=e=>e==="24:00"?1440:Number(e.slice(0,2))*60+Number(e.slice(3)),Ws=e=>new Date(`${e}T00:00:00Z`),Ys=e=>e.toISOString().slice(0,10),hl=(e,s)=>{const t=Ws(e);return t.setUTCDate(t.getUTCDate()+s),Ys(t)},ms=e=>Ws(e).getUTCDay(),jt=e=>bl[e]??e,Ut=e=>gl[e]??0;function vl(e){var t;if(!e||e.schemaVersion!==1)return e;const s=[];for(const n of Array.isArray(e.periods)?e.periods:[])for(let l=0;l<7;l+=1){const o=(t=n.days)==null?void 0:t[l];o!=null&&o.enabled&&s.push({id:`legacy-${s.length+1}`,startDate:n.startDate,endDate:n.endDate,days:[l],start:o.start,end:o.end,targetTier:"ci_medium",label:"ช่วงเดิมจากตาราง Medium"})}return{schemaVersion:2,enabled:!!e.enabled,timezone:"Asia/Bangkok",defaultTier:"ci_micro",guardrail:e.guardrail,rules:s}}function wl(e){const s=vl(e);return!s||typeof s!="object"||s.schemaVersion!==2?s:{schemaVersion:2,enabled:!!s.enabled,timezone:s.timezone||"Asia/Bangkok",defaultTier:zt(s.defaultTier)?s.defaultTier:"ci_micro",guardrail:s.guardrail,rules:(Array.isArray(s.rules)?s.rules:[]).map((t,n)=>({id:t.id||`rule-${n+1}`,startDate:t.startDate,endDate:t.endDate,days:[...new Set((Array.isArray(t.days)?t.days:[]).map(Number))],start:t.start,end:t.end,targetTier:zt(t.targetTier)?t.targetTier:"ci_micro",label:String(t.label??"")}))}}function Je(e){const s=wl(e);if(!s||s.schemaVersion!==2||typeof s.enabled!="boolean"||!Array.isArray(s.rules))throw new Error("รูปแบบตารางเวลาไม่ถูกต้อง");if(!zt(s.defaultTier))throw new Error("ระดับเครื่องเริ่มต้นไม่ถูกต้อง");if(!["Asia/Bangkok"].includes(s.timezone))throw new Error("โซนเวลาต้องเป็น Asia/Bangkok");if(s.rules.length>200)throw new Error("เพิ่มช่วงเวลาได้ไม่เกิน 200 ช่วง");for(const t of s.rules){if(!ps(t.startDate)||!ps(t.endDate)||t.startDate>t.endDate)throw new Error("กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง");if(!Array.isArray(t.days)||!t.days.length||t.days.some(n=>!Number.isInteger(n)||n<0||n>6))throw new Error("กรุณาเลือกวันอย่างน้อยหนึ่งวัน");if(!us.test(t.start)||!us.test(t.end)||Ft(t.start)===Ft(t.end))throw new Error("เวลาเริ่มและเวลาสิ้นสุดต้องถูกต้องและไม่เท่ากัน");if(!zt(t.targetTier))throw new Error("ระดับเครื่องในช่วงเวลาไม่ถูกต้อง")}if(s.enabled&&!s.rules.length)throw new Error("กรุณากำหนดอย่างน้อยหนึ่งช่วงเวลาก่อนเปิดใช้งาน");return s}function _l(e,s){const t=ms(s),n=hl(s,-1),l=ms(n),o=[];for(const u of e.rules){const r=Ft(u.start),d=Ft(u.end);if(r<d){s>=u.startDate&&s<=u.endDate&&u.days.includes(t)&&o.push({start:r,end:d,targetTier:u.targetTier,id:u.id});continue}s>=u.startDate&&s<=u.endDate&&u.days.includes(t)&&o.push({start:r,end:1440,targetTier:u.targetTier,id:u.id}),n>=u.startDate&&n<=u.endDate&&u.days.includes(l)&&o.push({start:0,end:d,targetTier:u.targetTier,id:u.id})}return o.filter(u=>u.end>u.start)}function Oa(e,s){const t=Je(e),n=new Set([0,1440]),l=_l(t,s);for(const r of l)n.add(r.start),n.add(r.end);const o=[...n].sort((r,d)=>r-d),u=[];for(let r=0;r<o.length-1;r+=1){const d=o[r],p=o[r+1],a=d+(p-d)/2,v=l.filter(_=>a>=_.start&&a<_.end).reduce((_,h)=>Ut(h.targetTier)>Ut(_)?h.targetTier:_,t.defaultTier),x=u[u.length-1];(x==null?void 0:x.targetTier)===v&&x.end===d?x.end=p:u.push({start:d,end:p,targetTier:v})}return u}function $l(e,s=new Date){var u;const t=Je(e);if(!t.enabled)return null;const n=new Date(s.getTime()+yl),l=Ys(n),o=n.getUTCHours()*60+n.getUTCMinutes();return((u=Oa(t,l).find(r=>o>=r.start&&o<r.end))==null?void 0:u.targetTier)??t.defaultTier}const kl=()=>({schemaVersion:2,enabled:!1,timezone:"Asia/Bangkok",defaultTier:"ci_micro",rules:[]}),Nt={minimumMediumHoldMinutes:60,minimumSmallHoldMinutes:30,healthyStreakRequired:3,recoveryLockMinutes:60};function xs(e={}){const s=(t,n,l,o)=>{const u=Number(t);return Number.isFinite(u)?Math.max(l,Math.min(o,u)):n};return{minimumMediumHoldMinutes:s(e.minimumMediumHoldMinutes,Nt.minimumMediumHoldMinutes,0,24*60),minimumSmallHoldMinutes:s(e.minimumSmallHoldMinutes,Nt.minimumSmallHoldMinutes,0,24*60),healthyStreakRequired:Math.round(s(e.healthyStreakRequired,Nt.healthyStreakRequired,1,12)),recoveryLockMinutes:s(e.recoveryLockMinutes,Nt.recoveryLockMinutes,0,24*60)}}const ta={ci_micro:.01344,ci_small:.0206,ci_medium:.0822},Ks=(e,s)=>{const t=new Date(e.getTime());return t.setUTCDate(t.getUTCDate()+s),t},Js=e=>e.toISOString().slice(0,10);function Qs(){return Object.fromEntries(Object.keys(ta).map(e=>[e,0]))}function Sl(e,s){const t=Qs();for(const o of Oa(e,Js(s)))t[o.targetTier]+=o.end-o.start;const n=Object.fromEntries(Object.entries(t).map(([o,u])=>[o,u/60])),l=Object.entries(n).reduce((o,[u,r])=>o+r*ta[u],0);return{...n,tierHours:n,tierMinutes:t,usd:l,mediumHours:n.ci_medium,smallHours:n.ci_small,microHours:n.ci_micro}}function ya(e,s,t){const n={usd:0,days:t,tierHours:Qs()};for(let l=0;l<t;l+=1){const o=Sl(e,Ks(s,l));n.usd+=o.usd;for(const u of Object.keys(n.tierHours))n.tierHours[u]+=o.tierHours[u]}return{...n,mediumHours:n.tierHours.ci_medium,smallHours:n.tierHours.ci_small,microHours:n.tierHours.ci_micro}}function El(e,s){const t=Je(e),n=new Date(`${s}T00:00:00Z`);if(Number.isNaN(n.getTime())||Js(n)!==s)throw new Error("วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง");const l=Ks(n,-((n.getUTCDay()+6)%7)),o=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1)),u=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0)).getUTCDate(),r={day:ya(t,n,1),week:ya(t,l,7),month:ya(t,o,u)};return r.defaultTier=t.defaultTier,r.defaultTierLabel=jt(t.defaultTier),r.tierOrder=Object.keys(ta).sort((d,p)=>Ut(d)-Ut(p)),r}const Zs=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],He=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),Xs=[["ci_micro","Micro"],["ci_small","Small"],["ci_medium","Medium"]],er={ci_micro:"border-slate-300 bg-slate-50 text-slate-700",ci_small:"border-emerald-300 bg-emerald-50 text-emerald-800",ci_medium:"border-rose-300 bg-rose-50 text-rose-800"},Ll=Zs,fa=[{key:"prayer",label:"🙏 ละหมาด",description:"ควบคุมช่วง polling และจอแสดงผลการเช็คชื่อละหมาด",features:["prayer_monitor"]},{key:"leave",label:"🚪 ออกนอกห้องเรียน",description:"ควบคุมจอติดตามนักเรียนออกนอกห้องเรียน",features:["leave_monitor"]},{key:"sports",label:"🏅 กีฬาสี",description:"ควบคุมจอสด scoreboard และคิว live ของกีฬาสี",features:["azizgames","azfutsal"]}],Gt=()=>new Date(Date.now()+7*36e5).toISOString().slice(0,10),Ia=e=>`border rounded-lg px-3 py-1.5 text-xs transition ${e?"bg-indigo-700 border-indigo-700 text-white":"bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`,tr=e=>Xs.map(([s,t])=>`<option value="${s}" ${e===s?"selected":""}>${t}</option>`).join(""),gs=()=>({id:`rule-${Date.now()}-${Math.random().toString(16).slice(2)}`,startDate:Gt(),endDate:Gt(),days:[1,2,3,4,5],start:"07:45",end:"16:30",targetTier:"ci_medium",label:"ช่วงใช้งานหลัก"}),Cl=(e,s)=>{const t=nl[e],n=s.features[e],l=rl(e,new Date,s),o=l.nextTransitionAt?new Date(l.nextTransitionAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"}):"—";return`<section class="border rounded-2xl p-4" data-workload-feature="${e}">
    <div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-bold">${t.label}</h3><p class="text-xs text-gray-500">${t.description}</p></div><div class="text-right text-xs"><div class="font-bold">${l.status}</div><div class="text-gray-500">เปลี่ยนถัดไป: ${He(o)}</div></div></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Mode<select name="mode" class="block border rounded-lg p-2 w-full mt-1"><option ${n.mode==="AUTO"?"selected":""}>AUTO</option><option ${n.mode==="ON"?"selected":""}>ON</option><option ${n.mode==="OFF"?"selected":""}>OFF</option></select></label>
      ${t.dateRange?`<label class="text-sm">วันที่เริ่ม<input name="dateFrom" type="date" value="${He(n.dateFrom||"")}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input name="dateTo" type="date" value="${He(n.dateTo||"")}" class="block border rounded-lg p-2 w-full mt-1"></label>`:"<span></span><span></span>"}
      <div class="grid grid-cols-2 gap-2"><label class="text-sm">เริ่ม<input name="start" type="time" value="${He(n.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">สิ้นสุด<input name="end" type="time" value="${He(n.end)}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3"><label class="text-sm">Buffer ก่อน (นาที)<input name="bufferBefore" type="number" min="0" max="1440" value="${n.bufferBefore}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Buffer หลัง (นาที)<input name="bufferAfter" type="number" min="0" max="1440" value="${n.bufferAfter}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    <div class="flex flex-wrap gap-2 mt-3">${n.days.map((u,r)=>`<label class="inline-flex items-center gap-1 text-xs border rounded-lg px-2 py-1"><input type="checkbox" name="day-${r}" ${u?"checked":""}>${Ll[r]}</label>`).join("")}</div>
  </section>`},Il=e=>{try{return`<div class="flex h-9 overflow-hidden rounded-lg border bg-gray-100">${Oa(e,Gt()).map(t=>{const n=Math.max(1,(t.end-t.start)/1440*100),l=`${String(Math.floor(t.start/60)).padStart(2,"0")}:${String(t.start%60).padStart(2,"0")}`,o=`${String(Math.floor(t.end/60)).padStart(2,"0")}:${String(t.end%60).padStart(2,"0")}`;return`<div class="${er[t.targetTier]} border-r flex items-center justify-center text-[10px] font-bold overflow-hidden" style="width:${n}%" title="${jt(t.targetTier)} ${l}–${o}">${n>8?`${jt(t.targetTier)} ${l}–${o}`:""}</div>`}).join("")}</div>`}catch{return'<div class="rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">กรอกช่วงเวลาให้ครบเพื่อดูตัวอย่าง Timeline</div>'}},Tl=(e,s)=>`<section class="bg-white border rounded-2xl p-4 shadow-sm" data-rule="${s}" data-rule-id="${He(e.id)}">
  <div class="flex flex-wrap gap-3 items-end justify-between">
    <div class="flex flex-wrap gap-3 items-end"><label class="text-sm">วันที่เริ่ม<input required type="date" name="startDate" value="${He(e.startDate)}" class="block border rounded-lg p-2 mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input required type="date" name="endDate" value="${He(e.endDate)}" class="block border rounded-lg p-2 mt-1"></label></div>
    <div class="flex gap-2"><button type="button" data-duplicate-rule class="border rounded-lg px-3 py-2 text-sm">ทำสำเนา</button><button type="button" data-remove-rule class="border rounded-lg px-3 py-2 text-sm text-red-700">ลบช่วงนี้</button></div>
  </div>
  <div class="mt-3 flex flex-wrap gap-2 items-center"><span class="text-sm font-medium mr-1">วันที่ใช้:</span>${Zs.map((t,n)=>`<button type="button" data-day-toggle="${n}" data-selected="${e.days.includes(n)}" class="${Ia(e.days.includes(n))}">${t.slice(0,3)}</button>`).join("")}<button type="button" data-day-preset="weekdays" class="text-xs underline text-indigo-700 ml-2">จ–ศ</button><button type="button" data-day-preset="all" class="text-xs underline text-indigo-700">ทุกวัน</button></div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">เวลาเริ่ม<input required type="time" name="start" value="${He(e.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">เวลาสิ้นสุด<input required type="time" name="end" value="${He(e.end)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">ระดับเครื่อง<select name="targetTier" class="block border rounded-lg p-2 w-full mt-1">${tr(e.targetTier)}</select></label><label class="text-sm">หมายเหตุ<input name="label" value="${He(e.label)}" maxlength="80" placeholder="เช่น ช่วงเรียน / ช่วงกลางคืน" class="block border rounded-lg p-2 w-full mt-1"></label></div>
</section>`;async function Ta(){document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-white",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-indigo-200",d.dataset.nav!=="autoscale-settings")}),document.getElementById("page-title").textContent="ตั้งค่ากำลังเครื่องฐานข้อมูล";const e=document.getElementById("main-content");e.innerHTML='<p class="p-6">กำลังโหลดตารางเวลา...</p>';let s,t,n={},l=Gt(),o="overview";try{const{data:d,error:p}=await oe.from("system_config").select("key,value,updated_at").in("key",["autoscaleSchedule","autoscaleState","workloadSchedule"]);if(p)throw p;const a=d.find(_=>_.key==="autoscaleSchedule"),m=a!=null&&a.value?JSON.parse(a.value):kl();s={...Je(m),guardrail:xs(m.guardrail)};const v=d.find(_=>_.key==="autoscaleState");n=v?{...JSON.parse(v.value),updatedAt:v.updated_at}:{};const x=d.find(_=>_.key==="workloadSchedule");t=cs(x!=null&&x.value?JSON.parse(x.value):al())}catch(d){e.innerHTML=`<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${He(d.message)}</p>`;return}const u=()=>{var d,p,a,m,v;return{schemaVersion:2,enabled:s.enabled,timezone:"Asia/Bangkok",defaultTier:((d=e.querySelector("[name=defaultTier]"))==null?void 0:d.value)||s.defaultTier,guardrail:{minimumMediumHoldMinutes:Number(((p=e.querySelector("[name=minimumMediumHoldMinutes]"))==null?void 0:p.value)||s.guardrail.minimumMediumHoldMinutes),minimumSmallHoldMinutes:Number(((a=e.querySelector("[name=minimumSmallHoldMinutes]"))==null?void 0:a.value)||s.guardrail.minimumSmallHoldMinutes),healthyStreakRequired:Number(((m=e.querySelector("[name=healthyStreakRequired]"))==null?void 0:m.value)||s.guardrail.healthyStreakRequired),recoveryLockMinutes:Number(((v=e.querySelector("[name=recoveryLockMinutes]"))==null?void 0:v.value)||s.guardrail.recoveryLockMinutes)},rules:[...e.querySelectorAll("[data-rule]")].map((x,_)=>({id:x.dataset.ruleId||`rule-${_+1}`,startDate:x.querySelector("[name=startDate]").value,endDate:x.querySelector("[name=endDate]").value,days:[...x.querySelectorAll('[data-day-toggle][data-selected="true"]')].map(h=>Number(h.dataset.dayToggle)),start:x.querySelector("[name=start]").value,end:x.querySelector("[name=end]").value,targetTier:x.querySelector("[name=targetTier]").value,label:x.querySelector("[name=label]").value}))}},r=()=>{let d=null;try{d=s.enabled?$l(s):null}catch{}const p=d?jt(d):s.enabled?"กรุณาตรวจตารางเวลา":"คงระดับเดิม",a=Number(n.scheduleSchemaVersion)>=2,m=Xs.map(([h,$])=>`<span class="inline-flex items-center gap-2 border rounded-xl px-3 py-2 ${er[h]}"><span class="font-bold">${$}</span><span>$${ta[h].toFixed(5)}/ชม.</span></span>`).join("");e.innerHTML=`<div class="space-y-5 animate-fade">
      <div role="tablist" aria-label="กลุ่มการตั้งค่ากำลังเครื่อง" class="bg-white border rounded-2xl p-2 shadow-sm flex flex-wrap gap-2"><button type="button" role="tab" data-autoscale-tab="overview" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">📊 ภาพรวม</button><button type="button" role="tab" data-autoscale-tab="schedule" class="flex-1 min-w-[190px] rounded-xl px-4 py-3 text-sm font-bold transition">🗓️ ตารางปรับกำลังเครื่อง</button>${fa.map(h=>`<button type="button" role="tab" data-autoscale-tab="${h.key}" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">${h.label}</button>`).join("")}</div>
      <div id="autoscale-panel-overview" data-autoscale-panel="overview" role="tabpanel" class="space-y-5"><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>${n.mode!=="schedule"||!a?'<p class="mt-3 text-red-700">backend ยังไม่พร้อมสำหรับตาราง Micro / Small / Medium — กรุณา deploy autoscale-tick รุ่นใหม่ แล้วกดรีเฟรชสถานะก่อนบันทึก</p>':""}<p class="text-sm text-gray-600 mt-2">ระบบจะเลือกเป้าหมายตามช่วงเวลาที่กำหนด: Micro → Small → Medium และจะลดระดับก็ต่อเมื่อ health/guardrail ผ่าน</p><p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับปัจจุบัน ไม่ใช่ปิดฐานข้อมูล</p><div class="mt-4 border rounded-xl p-4 ${s.enabled?"bg-green-50 border-green-300 text-green-900":"bg-gray-100 border-gray-300 text-gray-800"}"><p class="text-lg font-bold">สถานะตาราง: ${s.enabled?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"}</p><p class="text-sm mt-1">เป้าหมายตามเวลาตอนนี้: <strong>${p}</strong></p></div><p class="text-xs text-gray-500 mt-2">ระดับเครื่องที่ตรวจจาก Supabase: ${He(n.currentTier||"ยังไม่มีข้อมูล")} · ตรวจระดับจริงล่าสุด: ${n.currentTierObservedAt?He(new Date(n.currentTierObservedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"ยังไม่เคยตรวจ"}</p><p class="text-xs text-gray-500 mt-1">สถานะงาน: ${He(n.status||"—")} · คำสั่งที่รอยืนยัน: ${He(n.pendingTier?jt(n.pendingTier):"ไม่มี")}</p>${n.lastError?`<p class="text-xs text-amber-700 mt-1">รายละเอียด: ${He(n.lastError)}</p>`:""}<div class="flex flex-wrap gap-3 mt-4"><button id="as-enable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-green-700 border-green-700 text-white":"bg-white border-green-700 text-green-800"}">เปิดใช้งาน${s.enabled?" ✓":""}</button><button id="as-disable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-white border-gray-300 text-gray-700":"bg-gray-700 border-gray-700 text-white"}">ปิดใช้งาน${s.enabled?"":" ✓"}</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div></div><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold">💰 ราคาอ้างอิง Compute</h2><div class="flex flex-wrap gap-2 mt-3">${m}</div><label class="block text-sm mt-4">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${l}" class="border rounded-lg p-2 mt-1"></label><div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div><p class="text-xs text-gray-500 mt-3">เป็นค่าประมาณตามตาราง ไม่ใช่ยอดบิลจริง และควรตรวจราคากับ Supabase ก่อนใช้งานจริง</p></div></div>
      <form id="as-form" data-autoscale-panel="schedule" role="tabpanel" class="space-y-4"><section class="border rounded-2xl p-4 bg-amber-50"><h3 class="font-bold">🛡️ Guardrail การลดระดับ</h3><p class="text-xs text-gray-600 mt-1">การเปลี่ยนขึ้นทำได้ในรอบตรวจถัดไป ส่วนการลดจะรอ health ปกติ, healthy streak และช่วง hold ที่กำหนด</p><div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Hold หลัง Medium (นาที)<input name="minimumMediumHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumMediumHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Hold หลัง Small (นาที)<input name="minimumSmallHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumSmallHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Healthy streak (รอบ)<input name="healthyStreakRequired" type="number" min="1" max="12" value="${s.guardrail.healthyStreakRequired}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Recovery lock (นาที)<input name="recoveryLockMinutes" type="number" min="0" max="1440" value="${s.guardrail.recoveryLockMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label></div></section><section class="border rounded-2xl p-4 bg-white"><div class="flex flex-wrap justify-between gap-3 items-end"><div><h3 class="font-bold">ตารางช่วงเวลา</h3><p class="text-xs text-gray-500 mt-1">กำหนดวันซ้ำได้หลายวัน และกรอกข้ามวันได้ เช่น 22:00–02:00</p></div><label class="text-sm">ระดับพื้นฐานนอกช่วงเวลา<select name="defaultTier" class="border rounded-lg p-2 ml-2">${tr(s.defaultTier)}</select></label></div><div class="mt-4">${Il(s)}</div></section><div id="as-rules" class="space-y-4">${s.rules.map(Tl).join("")}</div><div class="flex flex-wrap gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงเวลา</button><button type="button" id="as-weekday-template" class="border bg-white rounded-xl px-4 py-2">สร้างตารางวันเรียนพื้นฐาน</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div><p class="text-xs text-gray-500">ระบบจะเลือก tier สูงสุดเมื่อช่วงเวลาซ้อนกัน และมีผลในรอบตรวจถัดไป ปกติทุก 5 นาที</p></form>
      ${fa.map(h=>`<section id="autoscale-panel-${h.key}" data-autoscale-panel="${h.key}" role="tabpanel" class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">${h.label}</h2><p class="text-sm text-gray-600 mt-2">${h.description} · AUTO ใช้ตาราง, ON บังคับเปิด, OFF บังคับปิด</p><div class="space-y-4 mt-4">${h.features.map($=>Cl($,t)).join("")}</div></section>`).join("")}
      <div data-autoscale-workload-actions class="hidden flex gap-3 bg-white border rounded-2xl p-4 shadow-sm"><button type="button" id="workload-save" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกการตั้งค่า Workload ทั้งหมด</button><button type="button" id="workload-refresh" class="border rounded-xl px-4 py-2">รีเฟรช Workload</button><p class="self-center text-xs text-gray-500">บันทึกครั้งเดียว ครอบคลุมทุกแท็บ</p></div>
    </div>`;const v=h=>{o=h,e.querySelectorAll("[data-autoscale-tab]").forEach(b=>{const c=b.dataset.autoscaleTab===o;b.setAttribute("aria-selected",String(c)),b.classList.toggle("bg-indigo-700",c),b.classList.toggle("text-white",c),b.classList.toggle("shadow-sm",c),b.classList.toggle("bg-gray-100",!c),b.classList.toggle("text-gray-700",!c)}),e.querySelectorAll("[data-autoscale-panel]").forEach(b=>b.classList.toggle("hidden",b.dataset.autoscalePanel!==o));const $=fa.some(b=>b.key===o);e.querySelectorAll("[data-autoscale-workload-actions]").forEach(b=>b.classList.toggle("hidden",!$))};e.querySelectorAll("[data-autoscale-tab]").forEach(h=>{h.id=`autoscale-tab-${h.dataset.autoscaleTab}`,h.onclick=()=>v(h.dataset.autoscaleTab)}),v(o);const x=()=>{try{const h=El({...u(),enabled:!1},l);e.querySelector("#as-cost-tags").innerHTML=[["day","รายวัน"],["week","รายสัปดาห์"],["month","รายเดือน"]].map(([$,b])=>{const c=h[$];return`<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${b} (${c.days} วัน)</span><strong>$${c.usd.toFixed(4)}</strong><span class="block text-xs">Micro ${c.microHours.toFixed(1)} ชม. · Small ${c.smallHours.toFixed(1)} ชม. · Medium ${c.mediumHours.toFixed(1)} ชม.</span></span>`}).join("")}catch{const h=e.querySelector("#as-cost-tags");h&&(h.textContent="กรุณากรอกวันที่ เวลา วัน และระดับเครื่องให้ครบเพื่อคำนวณ")}};e.querySelector("#as-cost-date").onchange=h=>{l=h.target.value,x()},e.querySelector("#as-form").addEventListener("input",x),x();const _=async h=>{try{const $=h===!1?{...s,enabled:!1}:{...u(),enabled:h===!0?!0:s.enabled},b=Je($);if(!a||b.enabled&&n.mode!=="schedule")throw new Error("backend ยังไม่พร้อมสำหรับ schema ตารางใหม่ กรุณา deploy autoscale-tick แล้วกดรีเฟรชสถานะก่อน");e.querySelectorAll("button").forEach(M=>{M.disabled=!0});const{error:c}=await oe.from("system_config").upsert({key:"autoscaleSchedule",value:JSON.stringify(b),updated_at:new Date().toISOString()},{onConflict:"key"});if(c)throw c;s={...b,guardrail:xs(b.guardrail)},r(),N("บันทึกแล้ว มีผลในรอบตรวจถัดไป","success")}catch($){N(He($.message),"error"),e.querySelectorAll("button").forEach(b=>{b.disabled=!1})}};e.querySelector("#as-form").onsubmit=h=>{h.preventDefault(),_()},e.querySelector("#as-enable").onclick=()=>_(!0),e.querySelector("#as-disable").onclick=()=>_(!1),e.querySelector("#as-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Ta()},e.querySelector("#as-add").onclick=()=>{s=Je({...u(),enabled:!1}),s.rules.push(gs()),r()},e.querySelector("#as-weekday-template").onclick=()=>{s=Je({...u(),enabled:!1}),s.rules=[gs()],r()},e.querySelectorAll("[data-remove-rule]").forEach(h=>h.onclick=()=>{s=Je({...u(),enabled:!1});const $=h.closest("[data-rule]");s.rules.splice(Number($.dataset.rule),1),r()}),e.querySelectorAll("[data-duplicate-rule]").forEach(h=>h.onclick=()=>{s=Je({...u(),enabled:!1});const $=h.closest("[data-rule]"),b={...s.rules[Number($.dataset.rule)],id:`rule-${Date.now()}`,label:`${s.rules[Number($.dataset.rule)].label||"ช่วงเวลา"} สำเนา`};s.rules.splice(Number($.dataset.rule)+1,0,b),r()}),e.querySelectorAll("[data-day-toggle]").forEach(h=>h.onclick=()=>{const $=h.dataset.selected!=="true";h.dataset.selected=String($),h.className=Ia($),x()}),e.querySelectorAll("[data-day-preset]").forEach(h=>h.onclick=()=>{const $=h.closest("[data-rule]"),b=h.dataset.dayPreset==="all"?[0,1,2,3,4,5,6]:[1,2,3,4,5];$.querySelectorAll("[data-day-toggle]").forEach(c=>{const M=b.includes(Number(c.dataset.dayToggle));c.dataset.selected=String(M),c.className=Ia(M)}),x()}),e.querySelector("#workload-save").onclick=async()=>{try{e.querySelectorAll("button").forEach(h=>{h.disabled=!0}),t=cs({schemaVersion:1,timezone:"Asia/Bangkok",features:Object.fromEntries([...e.querySelectorAll("[data-workload-feature]")].map(h=>{var $,b;return[h.dataset.workloadFeature,{mode:h.querySelector("[name=mode]").value,dateFrom:(($=h.querySelector("[name=dateFrom]"))==null?void 0:$.value)||null,dateTo:((b=h.querySelector("[name=dateTo]"))==null?void 0:b.value)||null,start:h.querySelector("[name=start]").value,end:h.querySelector("[name=end]").value,bufferBefore:Number(h.querySelector("[name=bufferBefore]").value||0),bufferAfter:Number(h.querySelector("[name=bufferAfter]").value||0),days:[...h.querySelectorAll("input[type=checkbox][name^=day-]")].map(c=>c.checked)}]}))}),await sl(t),N("บันทึก Workload Control แล้ว","success"),r()}catch(h){N(He(h.message),"error"),e.querySelectorAll("button").forEach($=>{$.disabled=!1})}},e.querySelector("#workload-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Ta()}};r()}const Bl=1e3,jl=250,ql=6e4,ar="pp5-full-backup",sr=1,Al="pp5-full-backup-state",pt="sessions",Ml=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];class rr{constructor(){this.state=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytes=0}update(s){this.bytes+=s.byteLength;let t=0;if(this.bufferLength){const n=Math.min(64-this.bufferLength,s.byteLength);this.buffer.set(s.subarray(0,n),this.bufferLength),this.bufferLength+=n,t+=n,this.bufferLength===64&&(this.process(this.buffer),this.bufferLength=0)}for(;t+64<=s.byteLength;)this.process(s.subarray(t,t+64)),t+=64;return t<s.byteLength&&(this.buffer.set(s.subarray(t),0),this.bufferLength=s.byteLength-t),this}process(s){const t=new Uint32Array(64);for(let m=0;m<16;m++){const v=m*4;t[m]=(s[v]<<24|s[v+1]<<16|s[v+2]<<8|s[v+3])>>>0}for(let m=16;m<64;m++){const v=t[m-15],x=t[m-2],_=(v>>>7|v<<25)^(v>>>18|v<<14)^v>>>3,h=(x>>>17|x<<15)^(x>>>19|x<<13)^x>>>10;t[m]=t[m-16]+_+t[m-7]+h>>>0}let[n,l,o,u,r,d,p,a]=this.state;for(let m=0;m<64;m++){const v=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),x=r&d^~r&p,_=a+v+x+Ml[m]+t[m]>>>0,h=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),$=n&l^n&o^l&o,b=h+$>>>0;a=p,p=d,d=r,r=u+_>>>0,u=o,o=l,l=n,n=_+b>>>0}this.state[0]=this.state[0]+n>>>0,this.state[1]=this.state[1]+l>>>0,this.state[2]=this.state[2]+o>>>0,this.state[3]=this.state[3]+u>>>0,this.state[4]=this.state[4]+r>>>0,this.state[5]=this.state[5]+d>>>0,this.state[6]=this.state[6]+p>>>0,this.state[7]=this.state[7]+a>>>0}hex(){const s=this.bytes*8,t=this.bufferLength<56?56-this.bufferLength:120-this.bufferLength,n=new Uint8Array(t+8);n[0]=128;const l=Math.floor(s/4294967296),o=s>>>0;return n[n.length-8]=l>>>24&255,n[n.length-7]=l>>>16&255,n[n.length-6]=l>>>8&255,n[n.length-5]=l&255,n[n.length-4]=o>>>24&255,n[n.length-3]=o>>>16&255,n[n.length-2]=o>>>8&255,n[n.length-1]=o&255,this.update(n),[...this.state].map(u=>u.toString(16).padStart(8,"0")).join("")}}function Pa(e){return String(e??"").replace(/[^0-9A-Za-zก-๙._-]+/g,"-").replace(/^-+|-+$/g,"")||"pp5"}function Nl(){return nr("full")}function Dl(){return nr("term")}function nr(e){if(typeof window>"u"||typeof window.showSaveFilePicker!="function")return null;const s=`pp5-${e}-backup-${Pa(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;let t;try{t=window.showSaveFilePicker({suggestedName:s,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})}catch(l){t=Promise.reject(l)}const n=t.then(l=>({fileHandle:l}),l=>({error:l}));return{fileName:s,fileHandlePromise:n}}async function aa(e){const s=new rr,t=e.stream().getReader();for(;;){const{value:n,done:l}=await t.read();if(l)break;n!=null&&n.byteLength&&s.update(n)}return s.hex()}function or(e,s){const t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=s,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1500)}function za(){return new Promise((e,s)=>{if(typeof indexedDB>"u")return e(null);const t=indexedDB.open(Al,1);t.onupgradeneeded=()=>t.result.createObjectStore(pt,{keyPath:"id"}),t.onsuccess=()=>e(t.result),t.onerror=()=>s(t.error??new Error("เปิดพื้นที่บันทึกจุดสำรองข้อมูลไม่สำเร็จ"))})}async function sa(e="active"){const s=await za();return s?new Promise((t,n)=>{const l=s.transaction(pt,"readonly").objectStore(pt).get(e);l.onsuccess=()=>{s.close(),t(l.result??null)},l.onerror=()=>{s.close(),n(l.error)}}):null}async function Qe(e,s=e.id??"active"){const t=await za();return t?new Promise((n,l)=>{const o=t.transaction(pt,"readwrite").objectStore(pt).put({...e,id:s});o.onsuccess=()=>{t.close(),n(!0)},o.onerror=()=>{t.close(),l(o.error)}}):!1}async function ra(e="active"){const s=await za();if(s)return new Promise((t,n)=>{const l=s.transaction(pt,"readwrite").objectStore(pt).delete(e);l.onsuccess=()=>{s.close(),t()},l.onerror=()=>{s.close(),n(l.error)}})}async function Ba(e){if(!e)throw new Error("ไม่พบไฟล์สำรองเดิมสำหรับทำต่อ");const s={mode:"readwrite"};if(typeof e.queryPermission=="function"&&await e.queryPermission(s)!=="granted"&&(typeof e.requestPermission!="function"||await e.requestPermission(s)!=="granted"))throw new Error("ไม่ได้รับสิทธิ์เขียนไฟล์สำรองเดิม กรุณาอนุญาตการเข้าถึงไฟล์แล้วลองใหม่");try{await e.getFile()}catch(t){if((t==null?void 0:t.name)==="NotFoundError"){const n=new Error("ไม่พบไฟล์สำรองเดิมแล้ว กรุณาล้างงานสำรองค้างและเลือกตำแหน่งไฟล์ใหม่");throw n.code="BACKUP_FILE_MISSING",n}throw t}}async function Hl(e){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง");const s=new CompressionStream("gzip"),t=s.writable.getWriter();return await t.write(new TextEncoder().encode(e)),await t.close(),new Uint8Array(await new Response(s.readable).arrayBuffer())}async function Vt(e,s=0){let t=s;return{get offset(){return t},async write(n){const l=await Hl(n),o=await e.createWritable({keepExistingData:!0});try{await o.truncate(t),await o.seek(t),await o.write(l),await o.close(),t+=l.byteLength}catch(u){try{await o.abort()}catch{}throw u}},async close(){},async abort(){}}}async function dt(e,s,t,{timeoutMs:n=ql}={}){for(let o=1;o<=4;o+=1){const u=typeof AbortController<"u"?new AbortController:null,r=Date.now();let d,p;try{t==null||t(`กำลังติดต่อฐานข้อมูล: ${s} · ครั้งที่ ${o}/4`);const a=Promise.resolve().then(()=>e(u==null?void 0:u.signal));let m;return n>0&&(m=new Promise((v,x)=>{d=setTimeout(()=>{u==null||u.abort();const _=new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`);_.code="BACKUP_REQUEST_TIMEOUT",x(_)},n)})),p=setInterval(()=>{const v=Math.floor((Date.now()-r)/1e3);t==null||t(`กำลังรอฐานข้อมูลตอบกลับ: ${s} · ${v} วินาที · ครั้งที่ ${o}/4`)},1e4),await(m?Promise.race([a,m]):a)}catch(a){const m=u!=null&&u.signal.aborted?Object.assign(new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`),{code:"BACKUP_REQUEST_TIMEOUT"}):a;if(o>=4)throw m;t==null||t(`${(m==null?void 0:m.message)||`เชื่อมต่อ ${s} ไม่สำเร็จ`} · กำลังลองใหม่ครั้งที่ ${o}/3...`),await new Promise(v=>setTimeout(v,750*2**(o-1)))}finally{clearTimeout(d),clearInterval(p)}}}async function ha(){var t,n,l,o;const e=await sa().catch(()=>null);if(!e)return null;const s=lr(e);return{fileName:e.fileName,phase:e.phase,tableIndex:e.tableIndex??0,tableCount:((t=e.catalog)==null?void 0:t.length)??0,tableName:((l=(n=e.catalog)==null?void 0:n[e.tableIndex])==null?void 0:l.table_name)??null,rowOffset:e.tableCount??e.tableOffset??0,storageIndex:e.storageIndex??0,storageCount:((o=e.storageObjects)==null?void 0:o.length)??0,progress:s}}async function Rl(){await ra()}function Wt(e,s){return`term:${Number(e)}:${Number(s)}`}async function bs(e,s){const t=await sa(Wt(e,s)).catch(()=>null);return t!=null&&t.fileHandle?{fileName:t.fileName,academicYear:t.academicYear,semester:t.semester,counts:t.counts??{},completedRows:Object.values(t.counts??{}).reduce((n,l)=>n+Number(l||0),0)+Number(t.tableCount||0),totalRows:Object.values(t.expectedCounts??{}).reduce((n,l)=>n+Number(l||0),0)}:null}async function Ol(e,s){await ra(Wt(e,s))}function lr(e,s={}){var h;const t=(e==null?void 0:e.catalog)??[],n=(e==null?void 0:e.counts)??{},l=s.phase??(e==null?void 0:e.phase)??"tables",o=s.tableIndex??(e==null?void 0:e.tableIndex)??0,u=s.tableCount??(e==null?void 0:e.tableCount)??0,r=s.storageIndex??(e==null?void 0:e.storageIndex)??0,d=s.storageCount??((h=e==null?void 0:e.storageObjects)==null?void 0:h.length)??0,p=t.map($=>Math.max(Number($.estimated_rows)||0,0)),a=p.reduce(($,b)=>$+b,0),m=p.slice(0,o).reduce(($,b,c)=>{var M;return $+(b||Number(n[(M=t[c])==null?void 0:M.table_name])||0)},0),v=p[o]||0,x=a>0?Math.min(1,(m+Math.min(u,v||u))/a):t.length>0?Math.min(1,(o+(u>0?.5:0))/t.length):0;return{percent:l==="tables"?Math.min(89,Math.round(x*90)):l==="storage"?Math.min(99,90+(d>0?Math.round(r/d*9):0)):l==="finalizing"?99:0,estimatedTotalRows:a,completedRows:m+u,currentTableRows:u,currentTableEstimate:v,tableIndex:o,tableCount:t.length,storageIndex:r,storageCount:d}}function Pl(e){const s=new Map(e.map(o=>[o.table_name,o])),t=new Map,n=[],l=o=>{var u;if(t.get(o)!==2&&t.get(o)!==1){t.set(o,1);for(const r of((u=s.get(o))==null?void 0:u.depends_on)??[])s.has(r)&&l(r);t.set(o,2),n.push(s.get(o))}};for(const o of e)l(o.table_name);return n.filter(Boolean)}async function dr(e,s=null){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง กรุณาใช้ Chrome, Edge หรือ Safari รุ่นปัจจุบัน");const t=new CompressionStream("gzip"),n=t.writable.getWriter();if(s||typeof window<"u"&&typeof window.showSaveFilePicker=="function"){const d=await(s??await window.showSaveFilePicker({suggestedName:e,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})).createWritable(),[p,a]=t.readable.tee(),m=p.pipeTo(d),v=new rr;let x=0;const _=(async()=>{const h=a.getReader();for(;;){const{value:$,done:b}=await h.read();if(b)break;$!=null&&$.byteLength&&(v.update($),x+=$.byteLength)}})();return{async write(h){await n.write(new TextEncoder().encode(h))},async close(){return await n.close(),await Promise.all([m,_]),{blob:null,sha256:v.hex(),byteSize:x,savedToDisk:!0}},async abort(){try{await n.abort()}catch{}try{await d.abort()}catch{}}}}const l=[],o=t.readable.getReader(),u=(async()=>{for(;;){const{value:r,done:d}=await o.read();if(d)break;r!=null&&r.byteLength&&l.push(r)}})();return{async write(r){await n.write(new TextEncoder().encode(r))},async close(){await n.close(),await u;const r=new Blob(l,{type:"application/gzip"});return{blob:r,sha256:await aa(r),byteSize:r.size,savedToDisk:!1}}}}async function va(e,s=null){s==null||s("ส่งคำขอรายการตารางไปยังฐานข้อมูล");const{data:t,error:n}=await oe.rpc("admin_full_backup_catalog").abortSignal(e);if(n)throw n;const l=Array.isArray(t)?t:[];if(!l.length)throw new Error("ไม่พบรายการข้อมูลสำหรับสำรอง");s==null||s(`ได้รับรายการ ${l.length.toLocaleString()} ตารางแล้ว · กำลังจัดลำดับความสัมพันธ์`);const o=Pl(l);if(o.length!==l.length)throw new Error("จัดเตรียมรายการตารางสำรองไม่ครบ");return s==null||s("จัดลำดับตารางแล้ว · กำลังเตรียมไฟล์สำรอง"),o}async function zl(e,s,t){const{data:n,error:l}=await oe.rpc("admin_full_backup_read_cursor",{p_table:e,p_cursor:s||null,p_limit:Bl}).abortSignal(t);if(l)throw l;const o=n&&typeof n=="object"&&!Array.isArray(n)?n:{rows:Array.isArray(n)?n:[],next_cursor:null,has_more:!1};return{rows:Array.isArray(o.rows)?o.rows:[],nextCursor:o.next_cursor||null,hasMore:!!o.has_more}}function ys(e,s,t,n,l,o={}){if(!e)return;e(n,l,lr(s??{catalog:t,counts:{}},o))}async function Fl(e){const{data:s,error:t}=await oe.rpc("admin_full_backup_storage_catalog").abortSignal(e);if(t)throw t;return s??{buckets:[],objects:[]}}async function Ul(e){const s=await new Promise((t,n)=>{const l=new FileReader;l.onload=()=>t(l.result),l.onerror=()=>n(l.error??new Error("อ่านไฟล์ Storage ไม่สำเร็จ")),l.readAsDataURL(e)});return String(s).split(",",2)[1]??""}function Gl(e,s="application/octet-stream"){const t=atob(e),n=new Uint8Array(t.length);for(let l=0;l<t.length;l++)n[l]=t.charCodeAt(l);return new Blob([n],{type:s})}async function Vl({onProgress:e,saveTarget:s=null}={}){var a,m,v,x;let t=await sa().catch(()=>null),n,l,o,u=null,r=!1;if(t!=null&&t.fileHandle){if(e==null||e("ตรวจสอบสิทธิ์เข้าถึงไฟล์สำรองเดิม"),await Ba(t.fileHandle),n=t.catalog??await va(void 0,_=>e==null?void 0:e(_)),n.some(_=>_.estimated_rows==null)){const _=await dt($=>va($,b=>e==null?void 0:e(b)),"สถิติรายการตาราง",e);_.length===n.length&&_.every(($,b)=>{var c;return $.table_name===((c=n[b])==null?void 0:c.table_name)})&&(n=_,t.catalog=_)}l=t.fileName,u=t.fileHandle,r=!0,o=await Vt(u,t.byteOffset??0),t.status="running",await Qe(t),e==null||e(`กำลังทำสำรองต่อจาก ${t.tableName??"จุดล่าสุด"}`)}else{let _=null;if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรอง...");const{fileHandle:h,error:$}=await s.fileHandlePromise;if($)throw $;_=h}e==null||e("กำลังอ่านรายการตาราง..."),n=await dt(h=>va(h,$=>e==null?void 0:e($)),"รายการตาราง",e),l=(s==null?void 0:s.fileName)??`pp5-full-backup-${Pa(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`,_?(e==null||e("ตรวจสอบสิทธิ์เขียนไฟล์สำรอง"),u=_,await Ba(u),r=!0,t={id:"active",status:"running",fileName:l,fileHandle:u,catalog:n,paginationVersion:2,phase:"tables",tableIndex:0,tableCursor:null,tableCount:0,storageObjects:null,storageIndex:0,counts:{},headerWritten:!1,endWritten:!1,byteOffset:0},e==null||e("บันทึกจุดเริ่มต้นสำหรับทำสำรองต่อได้"),await Qe(t),o=await Vt(u,0)):o=await dr(l)}const d=(t==null?void 0:t.counts)??{},p=async(_={})=>{!r||!t||(Object.assign(t,_,{byteOffset:o.offset??t.byteOffset??0,updatedAt:new Date().toISOString()}),await Qe(t))};try{t!=null&&t.headerWritten||(await o.write(JSON.stringify({format:ar,version:sr,created_at:new Date().toISOString(),scope:"all-public-application-tables",note:"รวมข้อมูลแอปพลิเคชันทั้งหมดใน public schema และไฟล์ใน Supabase Storage ไม่รวม auth.users รหัสผ่าน และระบบภายใน Supabase",catalog:n.map(w=>({table_name:w.table_name,depends_on:w.depends_on??[]}))})+`
`),await p({headerWritten:!0}));const _=r?t.tableIndex??0:0;for(let w=_;w<n.length;w+=1){const C=n[w];let T=r&&w===_?t.tableCursor??null:null,H=r&&w===_?t.tableCount??0:0;for(;;){const B=await dt(i=>zl(C.table_name,T,i),`ข้อมูล ${C.table_name}`,e),f=B.rows;if(f.length){const i=f.map(y=>JSON.stringify({kind:"row",table:C.table_name,row:y})).join(`
`)+`
`;await o.write(i),T=B.nextCursor,H+=f.length,await p({phase:"tables",tableIndex:w,tableCursor:T,tableCount:H})}if(ys(e,t,n,`สำรอง ${C.table_name} (${w+1}/${n.length})`,H,{phase:"tables",tableIndex:w,tableCount:H}),!B.hasMore)break}d[C.table_name]=H,await p({phase:"tables",tableIndex:w+1,tableCursor:null,tableCount:0,counts:d})}let h=t==null?void 0:t.storageObjects;h||(h=(await dt(C=>Fl(C),"รายการไฟล์ Storage",e)).objects??[],await p({phase:"storage",storageObjects:h,storageIndex:0}));const $=r?t.storageIndex??0:0;for(let w=$;w<h.length;w+=1){const C=h[w],T=await dt(async()=>{const{data:f,error:i}=await oe.storage.from(C.bucket_id).download(C.name);if(i)throw new Error(`สำรองไฟล์ Storage ${C.bucket_id}/${C.name} ไม่สำเร็จ: ${i.message}`);return f},`ไฟล์ ${C.bucket_id}/${C.name}`,e,{timeoutMs:0}),H=await Ul(T);await o.write(JSON.stringify({kind:"storage",bucket:C.bucket_id,name:C.name,content_type:T.type||((a=C.metadata)==null?void 0:a.mimetype)||"application/octet-stream",data:H})+`
`);const B=`storage:${C.bucket_id}`;d[B]=(d[B]??0)+1,await p({phase:"storage",storageIndex:w+1,counts:d}),ys(e,t,n,`สำรองไฟล์ ${C.bucket_id} (${w+1}/${h.length})`,d[B],{phase:"storage",storageIndex:w+1,storageCount:h.length})}t!=null&&t.endWritten||(await o.write(JSON.stringify({kind:"end",counts:d})+`
`),await p({phase:"finalizing",endWritten:!0,counts:d}));let b;if(r){const w=await u.getFile();b={blob:null,sha256:await aa(w),byteSize:w.size,savedToDisk:!0}}else b=await o.close();const{data:c,error:M}=await oe.rpc("admin_record_full_backup",{p_file_name:l,p_byte_size:b.byteSize,p_sha256:b.sha256,p_table_counts:d});if(M)throw M;return b.blob&&or(b.blob,l),await ra(),{backupId:c==null?void 0:c.id,fileName:l,byteSize:b.byteSize,sha256:b.sha256,counts:d,tableCount:n.length,savedToDisk:b.savedToDisk}}catch(_){throw r&&t&&(t.status="paused",await Qe(t).catch(()=>{})),await((x=(m=o==null?void 0:o.abort)==null?void 0:(v=m.call(o)).catch)==null?void 0:x.call(v,()=>{})),_}}async function Wl({onProgress:e,saveTarget:s=null,resume:t=!1,academicYear:n,semester:l}={}){var m,v,x,_,h;let o=null,u=null,r=null,d=!1,p,a=(s==null?void 0:s.fileName)??`pp5-term-backup-${Pa(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;try{if(t){if(r=await sa(Wt(n,l)).catch(()=>null),!r)throw new Error("ไม่พบงานสำรองภาคเรียนที่ทำต่อได้ กรุณาเริ่มสำรองใหม่");await Ba(r.fileHandle),p=r.manifest,a=r.fileName,u=r.fileHandle,d=!0,o=await Vt(u,r.byteOffset??0),e==null||e(`ทำสำรองต่อจาก ${r.table??"จุดล่าสุด"}`)}else if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรองภาคเรียน");const{fileHandle:i,error:y}=await s.fileHandlePromise;if(y)throw y;u=i}p||(p=await dt(async i=>{const{data:y,error:E}=await oe.rpc("admin_term_backup_catalog").abortSignal(i);if(E)throw E;return y},"สรุปข้อมูลภาคเรียน",e));const $={attendances:Number((m=p==null?void 0:p.counts)==null?void 0:m.attendances),prayer_records:Number((v=p==null?void 0:p.counts)==null?void 0:v.prayer_records)};if(!Number.isInteger(p==null?void 0:p.academic_year)||![1,2].includes(Number(p==null?void 0:p.semester))||!Number.isSafeInteger($.attendances)||$.attendances<0||!Number.isSafeInteger($.prayer_records)||$.prayer_records<0)throw new Error("ข้อมูลสรุปสำหรับสำรองภาคเรียนไม่ถูกต้อง");if(r&&(Number(r.academicYear)!==Number(p.academic_year)||Number(r.semester)!==Number(p.semester)||JSON.stringify(r.expectedCounts)!==JSON.stringify($)))throw new Error("ข้อมูลภาคเรียนเปลี่ยนจากตอนเริ่มสำรอง กรุณาล้างงานค้างและเริ่มใหม่เพื่อป้องกันไฟล์ไม่ครบ");const b=$.attendances+$.prayer_records;if(!u&&b>1e5)throw new Error("ข้อมูลมีขนาดใหญ่ กรุณาใช้ Chrome หรือ Edge ที่รองรับการเลือกตำแหน่งไฟล์โดยตรง");o||(e==null||e("ได้รับจำนวนข้อมูลแล้ว · กำลังเตรียมไฟล์สำรอง"),o=u?await Vt(u,0):await dr(a),d=!!u,d&&(r={id:Wt(p.academic_year,p.semester),status:"running",fileName:a,fileHandle:u,manifest:p,academicYear:Number(p.academic_year),semester:Number(p.semester),expectedCounts:$,counts:{},tableIndex:0,cursor:null,tableCount:0,byteOffset:0,headerWritten:!1},await Qe(r)));const c=(r==null?void 0:r.counts)??{},M=Object.values(c).reduce((i,y)=>i+Number(y||0),0)+(d?Number(r.tableCount||0):0);r!=null&&r.headerWritten||(await o.write(JSON.stringify({format:"pp5-term-backup",version:1,created_at:new Date().toISOString(),scope:"term-rollover-source-data",academic_year:Number(p.academic_year),semester:Number(p.semester),semester_start:p.semester_start??null,semester_end:p.semester_end??null,expected_counts:$,tables:["attendances","prayer_records"]})+`
`),d&&(r.byteOffset=o.offset,r.headerWritten=!0,await Qe(r)));let w=M;const C=d?Number(r.tableIndex??0):0,T=["attendances","prayer_records"];for(let i=C;i<T.length;i+=1){const y=T[i];let E=d&&i===C?r.cursor??null:null,g=d&&i===C?Number(r.tableCount??0):0;do{const L=await dt(async j=>{const{data:D,error:k}=await oe.rpc("admin_term_backup_read_cursor",{p_table:y,p_academic_year:Number(p.academic_year),p_semester:Number(p.semester),p_cursor:E,p_limit:1e3}).abortSignal(j);if(k)throw k;return D},`ข้อมูล ${y}`,e),S=Array.isArray(L==null?void 0:L.rows)?L.rows:[];if(L!=null&&L.has_more&&(!S.length||!L.next_cursor))throw new Error(`อ่านข้อมูล ${y} ไม่ต่อเนื่อง ระบบหยุดเพื่อป้องกันไฟล์ไม่ครบ`);if(S.length){await o.write(S.map(D=>JSON.stringify({kind:"row",table:y,row:D})).join(`
`)+`
`),g+=S.length,w+=S.length,E=L.next_cursor;const j=b>0?Math.min(98,Math.floor(w/b*98)):98;e==null||e(`สำรอง ${y} · ${g.toLocaleString()}/${$[y].toLocaleString()} รายการ`,g,{percent:j,completedRows:w,totalRows:b,table:y}),d&&(r.tableIndex=i,r.table=y,r.cursor=E,r.tableCount=g,r.counts=c,r.byteOffset=o.offset,r.updatedAt=new Date().toISOString(),await Qe(r))}if(!(L!=null&&L.has_more))break}while(!0);if(g!==$[y])throw new Error(`จำนวนข้อมูล ${y} ไม่ตรงกับที่ตรวจนับไว้ (${g.toLocaleString()}/${$[y].toLocaleString()}) กรุณาสำรองใหม่`);c[y]=g,d&&(r.tableIndex=i+1,r.table=T[i+1]??"ตรวจสอบไฟล์",r.cursor=null,r.tableCount=0,r.counts=c,r.byteOffset=o.offset,await Qe(r))}await o.write(JSON.stringify({kind:"end",counts:c})+`
`),e==null||e("อ่านข้อมูลครบแล้ว · กำลังปิดและตรวจสอบไฟล์");let H;if(d){await o.close();const i=await u.getFile();H={blob:null,sha256:await aa(i),byteSize:i.size,savedToDisk:!0}}else H=await o.close();if(!H.byteSize||!/^[0-9a-f]{64}$/.test(H.sha256))throw new Error("ตรวจสอบขนาดหรือค่า SHA-256 ของไฟล์ไม่ผ่าน");const{data:B,error:f}=await oe.rpc("admin_record_term_backup",{p_academic_year:Number(p.academic_year),p_semester:Number(p.semester),p_semester_start:p.semester_start??null,p_semester_end:p.semester_end??null,p_file_name:a,p_byte_size:H.byteSize,p_sha256:H.sha256,p_table_counts:c});if(f)throw f;return H.blob&&or(H.blob,a),d&&(r!=null&&r.id)&&await ra(r.id),{backupId:B==null?void 0:B.id,fileName:a,byteSize:H.byteSize,sha256:H.sha256,counts:c,academicYear:Number(p.academic_year),semester:Number(p.semester),savedToDisk:H.savedToDisk}}catch($){throw d&&(r!=null&&r.id)&&(r.status="paused",await Qe(r).catch(()=>{})),await((h=(x=o==null?void 0:o.abort)==null?void 0:(_=x.call(o)).catch)==null?void 0:h.call(_,()=>{})),$}}async function*Yl(e){var o;if(!((o=e==null?void 0:e.name)!=null&&o.endsWith(".gz"))&&(e==null?void 0:e.type)!=="application/gzip")throw new Error("กรุณาเลือกไฟล์สำรอง .jsonl.gz ที่สร้างจากระบบ ปพ.5");const t=e.stream().pipeThrough(new DecompressionStream("gzip")).getReader(),n=new TextDecoder;let l="";for(;;){const{value:u,done:r}=await t.read();if(r)break;l+=n.decode(u,{stream:!0});const d=l.split(`
`);l=d.pop()??"";for(const p of d)p.trim()&&(yield p)}l+=n.decode(),l.trim()&&(yield l)}async function Kl(e,s){if(!s.length)return;const{error:t}=await oe.rpc("admin_full_backup_restore_table",{p_table:e,p_rows:s});if(t)throw t}async function Jl(e,s,t,n){if(!s.length)return;const{error:l}=await oe.rpc("admin_restore_term_backup_table",{p_table:e,p_academic_year:t,p_semester:n,p_rows:s});if(l)throw l}async function Ql(e){const s=Gl(e.data,e.content_type),{error:t}=await oe.storage.from(e.bucket).upload(e.name,s,{upsert:!0,contentType:e.content_type||"application/octet-stream"});if(t)throw t}async function Zl(e,{onProgress:s}={}){var v,x;const t=await aa(e),{data:n,error:l}=await oe.from("academic_term_backups").select("id, file_name, byte_size, backup_scope, academic_year, semester, table_counts").eq("sha256",t).eq("status","verified").maybeSingle();if(l)throw l;if(!n)throw new Error("ไฟล์นี้ไม่ตรงกับไฟล์ Full Backup ที่ระบบเคยบันทึกไว้");let o=null,u=null,r=!1,d=[];const p={},a=async()=>{!u||!d.length||(r?await Jl(u,d,o.academic_year,o.semester):await Kl(u,d),p[u]=(p[u]??0)+d.length,s==null||s(`กู้คืน ${u}`,p[u]),d=[])};for await(const _ of Yl(e)){const h=JSON.parse(_);if(!h.kind&&(h.format===ar||h.format==="pp5-term-backup")){if(o=h,r=h.format==="pp5-term-backup",r){if(o.version!==1||o.scope!=="term-rollover-source-data"||n.backup_scope!=="term"||Number(n.academic_year)!==Number(o.academic_year)||Number(n.semester)!==Number(o.semester)||!Array.isArray(o.tables)||o.tables.length!==2||!o.tables.includes("attendances")||!o.tables.includes("prayer_records"))throw new Error("ไฟล์สำรองภาคเรียนหรือข้อมูลลงทะเบียนไม่ตรงกัน")}else if(o.version!==sr||o.scope!=="all-public-application-tables"||n.backup_scope!=="full")throw new Error("เวอร์ชันหรือขอบเขตไฟล์สำรองไม่รองรับ");continue}if(h.kind!=="end"){if(h.kind==="storage"){await a(),await Ql(h);const $=`storage:${h.bucket}`;p[$]=(p[$]??0)+1,s==null||s(`กู้คืนไฟล์ ${h.bucket}`,p[$]);continue}if(h.kind!=="row"||!h.table||!h.row)throw new Error("รูปแบบไฟล์สำรองไม่ถูกต้อง");if(r&&!["attendances","prayer_records"].includes(h.table))throw new Error("ไฟล์สำรองภาคเรียนมีตารางนอกขอบเขตที่อนุญาต");u!==h.table&&(await a(),u=h.table),d.push(h.row),d.length>=jl&&await a()}}if(await a(),!o)throw new Error("ไม่พบหัวไฟล์สำรอง");if(r){for(const _ of["attendances","prayer_records"])if(Number(p[_]??0)!==Number(((v=o.expected_counts)==null?void 0:v[_])??-1)||Number(p[_]??0)!==Number(((x=n.table_counts)==null?void 0:x[_])??-2))throw new Error(`จำนวนข้อมูล ${_} ในไฟล์ไม่ตรงกับรายการสำรองที่ระบบรับรองไว้`)}const{error:m}=await oe.from("academic_term_backups").update({restored_at:new Date().toISOString()}).eq("id",n.id);return m&&console.warn("บันทึกประวัติการกู้คืนไม่สำเร็จ:",m),{counts:p,sha256:t,createdAt:o.created_at}}async function Xl(e,s){const{data:t,error:n}=await oe.from("academic_term_backups").select("id, backup_scope, academic_year, semester").eq("status","verified").order("created_at",{ascending:!1}).limit(100);if(n)throw n;const l=(t??[]).find(o=>o.backup_scope==="full"||o.backup_scope==="term"&&Number(o.academic_year)===Number(e)&&Number(o.semester)===Number(s));return(l==null?void 0:l.id)??null}const Re=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ed(e){document.querySelectorAll("[data-nav]").forEach(s=>{const t=s.dataset.nav===e;s.classList.toggle("bg-indigo-800",t),s.classList.toggle("text-white",t),s.classList.toggle("text-indigo-200",!t)})}function wa(e){document.getElementById("main-content").innerHTML=e}const ir={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},td={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},ad={doc:"📋",dates:"📅",att:"✅",score:"📝"},sd={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function Bt(e,s,t,n="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${n} rounded-lg ${td[t]}" title="${s}">${e}</span>`}function et(e,s,t="w-8 h-8 text-base"){return Bt(ad[e],`${sd[e]}: ${ir[s]}`,s,t)}const rd={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function nd(e){return["AGM","AGMVOC"].includes(e)?"ศาสนา":e==="ACDMVOC"?"สามัญปวช":"สามัญ"}function od(e,s){const t=nd(e.subject_group);return s.find(n=>n.dept_code===e.dept&&n.category===t)??s.find(n=>n.dept_code===e.dept)??s.find(n=>n.dept_name===e.dept)??null}function ld(e,s){return e.dept?s.find(t=>t.dept_code===e.dept&&t.category===e.category)??s.find(t=>t.dept_code===e.dept)??null:null}function dd(e,s){return Math.round((new Date(e)-new Date(s))/864e5)}function id(e,s){const t=e.has_doc_rows?"green":"red",n=e.has_teaching_dates?"green":"red";let l;if(!e.has_teaching_dates||e.day1_date&&e.day1_date>s)l="gray";else if(!e.last_check_date)l="red";else{const u=dd(s,e.last_check_date);l=u<=7?"green":u<=14?"yellow":"red"}let o;if(!e.score_col_count)o="gray";else{const u=e.student_count*e.score_col_count,r=u>0?e.score_filled_count/u:0;o=r>=.8?"green":r>0?"yellow":"red"}return{doc:t,dates:n,att:l,score:o}}function Et(e){const s=e.filter(t=>t!=="gray");return s.length===0?"gray":s.includes("red")?"red":s.includes("yellow")?"yellow":"green"}function _a(e){return Object.values(e).some(s=>s==="red"||s==="yellow")}async function cd(){var V,W;ed("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",wa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let e,s,t,n,l;try{[e,s,t,n,l]=await Promise.all([on(),st(),Ne().catch(()=>({})),Oe(),ln(60).catch(()=>null)])}catch(A){wa(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${Re(we(A))}</p>
    </div>`);return}const o=t.academicYear??t.academic_year??"",u=t.semester??"",r=new Date().toISOString().slice(0,10),d=e.filter(A=>A.subject_id!=null).map(A=>{const U=od(A,s);return{...A,deptKey:(U==null?void 0:U.id)!=null?`d${U.id}`:`u_${A.dept??"-"}`,deptName:(U==null?void 0:U.dept_name)??A.dept??"ไม่ระบุกลุ่มสาระ",status:id(A,r)}}),p=new Map;for(const A of d)p.has(A.deptKey)||p.set(A.deptKey,{deptName:A.deptName,rows:[]}),p.get(A.deptKey).rows.push(A);const a=[...p.entries()].map(([A,U])=>({key:A,...U})).sort((A,U)=>A.deptName.localeCompare(U.deptName,"th")),m=new Map;for(const A of d)A.teacher_id!=null&&(m.has(A.teacher_id)||m.set(A.teacher_id,[]),m.get(A.teacher_id).push(A));const v=n.filter(A=>A.staff_type==="ครู").map(A=>{const U=m.get(A.id)??[],Y=A.profile_id!=null,J=U.length,K=J>0?Et(U.map(xe=>xe.status.att)):"gray";let ae;if(U[0])ae={key:U[0].deptKey,name:U[0].deptName};else{const xe=ld(A,s);ae=xe?{key:`d${xe.id}`,name:xe.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let X;return Y?J===0?X=2:K==="red"?X=1.5:K==="yellow"?X=1:X=0:X=3,{teacherId:A.id,teacherName:A.full_name,deptKey:ae.key,deptName:ae.name,registered:Y,classCount:J,attWorst:K,severity:X}}).sort((A,U)=>U.severity-A.severity||A.teacherName.localeCompare(U.teacherName,"th")),x=v.filter(A=>!A.registered).length,_=v.filter(A=>A.registered&&A.classCount===0).length,h=v.filter(A=>A.registered&&A.classCount>0&&(A.attWorst==="red"||A.attWorst==="yellow")).length,$=v.filter(A=>A.severity>0).length;function b(A){const U=d.filter(ae=>ae.status[A]!=="gray"),Y=U.filter(ae=>ae.status[A]==="green").length,J=d.length-U.length;return{pct:U.length>0?Math.round(Y/U.length*100):null,green:Y,total:U.length,grayCount:J}}const c={doc:b("doc"),dates:b("dates"),att:b("att"),score:b("score")},M=v.length,w=v.filter(A=>A.registered).length,C=v.filter(A=>A.registered&&A.classCount>0).length,T=v.filter(A=>A.registered&&A.classCount>0&&A.attWorst==="green").length,H={registered:{pct:M>0?Math.round(w/M*100):null,num:w,total:M},courses:{pct:w>0?Math.round(C/w*100):null,num:C,total:w},attendance:{pct:C>0?Math.round(T/C*100):null,num:T,total:C}},B=d.filter(A=>_a(A.status)).length,f=d.length>0?Math.round(B/d.length*100):0;function i(){if(!l)return"";const A=l.rows||[],U=l.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},Y=new Date,J=ae=>ae.status!=="active"?ae.status==="returned"?"กลับแล้ว":"เลยเวลา":cl(ae.created_at,ae.allowed_duration,Y).text,K=A.filter(ae=>ae.status==="active").slice(0,8);return`
      <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden mb-6">
        <div class="px-5 py-3.5 border-b border-amber-100 bg-amber-50 flex items-center justify-between gap-3">
          <div>
            <h4 class="font-bold text-amber-900 text-sm">🚪 สถานะใบอนุญาตออกนอกห้อง</h4>
            <p class="text-xs text-amber-700/70 mt-0.5">ข้อมูลสัปดาห์ปัจจุบัน</p>
          </div>
          <span class="text-xs text-amber-700 font-bold">รวม ${U.totalWeek} ครั้ง</span>
        </div>
        <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div class="rounded-xl bg-amber-50 border border-amber-100 px-3 py-2">
            <p class="text-[10px] font-bold text-amber-700/70">กำลังอยู่นอกห้อง</p>
            <p class="text-xl font-extrabold text-amber-700">${U.active}</p>
          </div>
          <div class="rounded-xl bg-red-50 border border-red-100 px-3 py-2">
            <p class="text-[10px] font-bold text-red-700/70">เลยเวลา</p>
            <p class="text-xl font-extrabold text-red-700">${U.overdue}</p>
          </div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2">
            <p class="text-[10px] font-bold text-emerald-700/70">กลับแล้ววันนี้</p>
            <p class="text-xl font-extrabold text-emerald-700">${U.returnedToday}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2">
            <p class="text-[10px] font-bold text-indigo-700/70">สัปดาห์นี้</p>
            <p class="text-xl font-extrabold text-indigo-700">${U.totalWeek}</p>
          </div>
        </div>
        ${K.length?`
          <div class="border-t border-gray-50 divide-y divide-gray-50">
            ${K.map(ae=>{var X,xe,ie,G;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${Re(((X=ae.students)==null?void 0:X.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${Re(((xe=ae.classes)==null?void 0:xe.class_name)||((ie=ae.students)==null?void 0:ie.main_room)||"—")} · ${Re(ae.reason||"—")} · ${Re(((G=ae.teachers)==null?void 0:G.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${J(ae)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let y=null,E="attention",g="",L=null;const S={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function j(){return a.map(A=>{const U={doc:Et(A.rows.map(K=>K.status.doc)),dates:Et(A.rows.map(K=>K.status.dates)),att:Et(A.rows.map(K=>K.status.att)),score:Et(A.rows.map(K=>K.status.score))},Y=A.rows.filter(K=>_a(K.status)).length,J=y===A.key;return`
        <button type="button" data-dept-key="${A.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${J?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${Re(A.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${A.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${et("doc",U.doc)}
            ${et("dates",U.dates)}
            ${et("att",U.att)}
            ${et("score",U.score)}
          </div>
          <p class="text-xs ${Y>0?"text-amber-600 font-semibold":"text-emerald-600"}">
            ${Y>0?`⚠️ ${Y} ห้องต้องตามงาน`:"✅ ปกติทั้งหมด"}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${J?"🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายละเอียด ▸"}</p>
        </button>`}).join("")}function D(){var J;const A=y?(J=a.find(K=>K.key===y))==null?void 0:J.deptName:null,U=E==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${A?`${U} · ${Re(A)}`:`${U} (ทั้งโรงเรียน)`}</h4>
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
                 ${E==="all"?"bg-indigo-50 text-indigo-600 border-indigo-200":"bg-white text-gray-500 border-gray-200 hover:border-gray-300"}">
          ${E==="all"?"👁️ ดูทั้งหมด":"⚠️ เฉพาะที่ต้องตามงาน"}
        </button>
        ${y?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function k(){let A=d;return E==="attention"&&(A=A.filter(U=>_a(U.status))),y&&(A=A.filter(U=>U.deptKey===y)),g&&(A=A.filter(U=>(U.class_name??"").toLowerCase().includes(g)||(U.subject_name??"").toLowerCase().includes(g)||(U.teacher_name??"").toLowerCase().includes(g))),A=[...A].sort((U,Y)=>{const J=K=>Object.values(K).reduce((ae,X)=>ae+(X==="red"?2:X==="yellow"?1:0),0);return J(Y.status)-J(U.status)}),A.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
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
            ${A.map(U=>`
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${Re(U.class_name)}</p>
                  <p class="text-xs text-gray-400">${Re(U.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${Re(U.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${Re(U.deptName)}</td>
                <td class="px-4 py-2 text-center">${et("doc",U.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${et("att",U.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${et("score",U.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${et("dates",U.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function I(){let A=v;L==="unregistered"?A=A.filter(J=>!J.registered):L==="no-courses"?A=A.filter(J=>J.registered&&J.classCount===0):L==="att-behind"?A=A.filter(J=>J.registered&&J.classCount>0&&(J.attWorst==="red"||J.attWorst==="yellow")):E==="attention"&&(A=A.filter(J=>J.severity>0)),y&&(A=A.filter(J=>J.deptKey===y)),g&&(A=A.filter(J=>(J.teacherName??"").toLowerCase().includes(g)));const U=L?`${S[L]} (${A.length} คน)`:E==="all"?`ครูผู้สอนทั้งหมด (${A.length}/${v.length} คน)`:`ครูที่ต้องติดตาม (${A.length} คน)`,Y=A.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
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
              ${A.map(J=>`
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${Re(J.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${Re(J.deptName)}</td>
                  <td class="px-4 py-2 text-center">${Bt("🔑",J.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",J.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Bt("📚",J.classCount>0?`มีวิชา/ห้องที่สอน ${J.classCount} ห้อง`:J.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",J.classCount>0?"green":J.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${J.classCount>0?Bt("✅",`เช็คชื่อ: ${ir[J.attWorst]}`,J.attWorst,"w-7 h-7 text-sm"):Bt("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`;return`
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${U}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${L?'<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>':""}
      </div>
      ${Y}`}function R({icon:A,label:U,info:Y,pct:J,numerator:K,denominator:ae,unit:X="ห้อง",extraNote:xe="",filterKey:ie=null,active:G=!1}){const le=J==null?"text-gray-400":J>=80?"text-emerald-700":J>=50?"text-amber-600":"text-red-600",de=ie?"button":"div",pe=ie?' type="button"':"",me=ie?` data-teacher-filter="${ie}"`:"";return`
      <${de}${pe}${me} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${ie?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${G?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${Re(Y)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${A}</div>
          <p class="text-sm font-semibold text-gray-600">${U} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${le}">${J==null?"—":J+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${ae>0?`${K}/${ae} ${X}`:"ไม่มีข้อมูล"}${xe}</p>
        ${ie?`<p class="text-[10px] text-indigo-400 mt-1">${G?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${de}>`}function z(A,U,Y){const J=c[Y];return R({icon:A,label:U,info:rd[Y],pct:J.pct,numerator:J.green,denominator:J.total,unit:"ห้อง",extraNote:J.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${J.grayCount}</span>`:""})}function q(A,U,Y,J,K="",ae=null){return R({icon:A,label:U,info:Y,pct:J.pct,numerator:J.num,denominator:J.total,unit:"คน",extraNote:K,filterKey:ae,active:L===ae})}function F(){return`
      ${q("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",H.registered,x>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${x}</span>`:"","unregistered")}
      ${q("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",H.courses,_>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${_}</span>`:"","no-courses")}
      ${q("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",H.attendance,h>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${h}</span>`:"","att-behind")}`}function P(){var A,U,Y;document.querySelectorAll(".exec-dept-card").forEach(J=>{J.addEventListener("click",()=>{var ae;const K=J.dataset.deptKey;y===K?(y=null,E="attention"):(y=K,E="all"),O(),(ae=document.getElementById("exec-table-section"))==null||ae.scrollIntoView({behavior:"smooth",block:"start"})})}),(A=document.getElementById("exec-clear-filter"))==null||A.addEventListener("click",()=>{y=null,E="attention",O()}),(U=document.getElementById("exec-toggle-scope"))==null||U.addEventListener("click",()=>{E=E==="all"?"attention":"all",O()}),document.querySelectorAll("[data-teacher-filter]").forEach(J=>{J.addEventListener("click",()=>{var ae;const K=J.dataset.teacherFilter;L=L===K?null:K,y=null,g="",O(),(ae=document.getElementById("exec-teacher-section"))==null||ae.scrollIntoView({behavior:"smooth",block:"start"})})}),(Y=document.getElementById("exec-teacher-clear-filter"))==null||Y.addEventListener("click",()=>{L=null,O()})}function O(){document.getElementById("exec-teacher-kpi").innerHTML=F(),document.getElementById("exec-dept-cards").innerHTML=j(),document.getElementById("exec-table-header").innerHTML=D(),document.getElementById("exec-class-table").innerHTML=k(),document.getElementById("exec-teacher-section").innerHTML=I();const A=document.getElementById("exec-dept-select");A&&(A.value=y??"");const U=document.getElementById("exec-search");U&&(U.value=g),P()}wa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${o?`ปีการศึกษา ${Re(o)}`:""}${u?` ภาคเรียนที่ ${Re(u)}`:""}${o||u?" · ":""}ทั้งหมด ${d.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${B>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${B} ห้อง</b> (${f}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${$>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${$} คน</b> ที่ต้องติดตาม
        ${x>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${x}</b> คน`:""}
        ${_>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${_}</b> คน`:""}
        ${h>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${h}</b> คน`:""}
      </p>`:`
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${F()}
    </div>

    ${i()}

    <h4 class="font-semibold text-gray-700 mb-1">📚 ภาพรวมห้องเรียนทั้งโรง</h4>
    <p class="text-xs text-gray-400 mb-3">สัดส่วนห้องเรียนที่ "ปกติ" ในแต่ละมิติ (ไม่รวมห้องที่ยังไม่เริ่มดำเนินการ)</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      ${z("📋","ปก ปพ.5","doc")}
      ${z("📅","วันที่สอน","dates")}
      ${z("✅","เช็คชื่อ","att")}
      ${z("📝","บันทึกคะแนน","score")}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</h4>
    <p class="text-xs text-gray-400 mb-3">💡 คลิกที่การ์ดเพื่อดูห้องเรียนทั้งหมดในกลุ่มสาระนั้น</p>
    <div id="exec-dept-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      ${j()}
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
        ${a.map(A=>`<option value="${A.key}">${Re(A.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${D()}
      </div>
      <div id="exec-class-table">${k()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${I()}
    </div>
  </div>`),(V=document.getElementById("exec-search"))==null||V.addEventListener("input",A=>{g=A.target.value.trim().toLowerCase(),O()}),(W=document.getElementById("exec-dept-select"))==null||W.addEventListener("change",A=>{y=A.target.value||null,E=y?"all":"attention",O()}),P()}const ud="10.22.953",pd="regrade.html",md=()=>{const e=new URL(pd,window.location.href);return e.searchParams.set("v",Ro),e.href},Yt=(e,s)=>{e&&(e.textContent=s,clearTimeout(e._regradeStatusTimer),e._regradeStatusTimer=setTimeout(()=>{e.textContent=""},1800))},xd=async(e,s)=>{try{await navigator.clipboard.writeText(e),Yt(s,"คัดลอกลิงก์แล้ว")}catch{Yt(s,"คัดลอกไม่สำเร็จ")}},gd=async(e,s)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:e});return}await navigator.clipboard.writeText(e),Yt(s,"คัดลอกลิงก์แล้ว")}catch{Yt(s,"แชร์ไม่สำเร็จ")}};function bd(){var u,r,d,p;(u=document.getElementById("regrade-modal"))==null||u.remove();const e=md(),s=document.body.style.overflow;document.body.style.overflow="hidden";const t=document.createElement("div");t.id="regrade-modal",t.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",t.innerHTML=`
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
  `;const n=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=s,t.remove(),window.closeRegradeModal===n&&(window.closeRegradeModal=null)},l=a=>{a.key==="Escape"&&n()};document.addEventListener("keydown",l),document.body.appendChild(t),window.closeRegradeModal=n;const o=t.querySelector("[data-regrade-status]");(r=t.querySelector("[data-regrade-close]"))==null||r.addEventListener("click",n),(d=t.querySelector("[data-regrade-copy]"))==null||d.addEventListener("click",()=>xd(e,o)),(p=t.querySelector("[data-regrade-share]"))==null||p.addEventListener("click",()=>gd(e,o))}const re=(e="")=>String(e??"").replace(/[&<>'"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[s]),fs=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},$a=e=>{if(!e)return"";const s=new Date(e);if(Number.isNaN(s.getTime()))return"";const t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`},$t=()=>document.getElementById("stu-content")||document.getElementById("main-content"),yd="00000000-0000-0000-0000-000000000001",cr=[{code:"SS",chest:34},{code:"S",chest:36},{code:"M",chest:38},{code:"L",chest:40},{code:"XL",chest:42},{code:"2X",chest:44},{code:"3X",chest:46},{code:"4X",chest:48},{code:"5X",chest:50},{code:"6X",chest:52},{code:"7X",chest:54},{code:"8X",chest:56}],be=(e,s="success")=>{const t=document.createElement("div");t.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-3 rounded-xl text-white text-sm shadow-xl ${s==="error"?"bg-red-600":"bg-emerald-600"}`,t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),3e3)},kt=()=>'<div class="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800"><h3 class="font-bold">ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี</h3><p class="text-sm mt-2">ให้แอดมินรันไฟล์ <code>patch_sports_student_team_portal.sql</code> ใน Supabase SQL Editor</p></div>',yt=(e,s,t,n)=>`<div class="rounded-2xl border p-4 ${n?"bg-emerald-50 border-emerald-200":"bg-slate-50 border-slate-200"}"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-sm text-slate-800">${re(s)}</h3><p class="text-xs text-slate-500 mt-1">${re(t)}</p><span class="inline-block mt-3 px-2 py-1 rounded-full text-[11px] font-bold ${n?"bg-emerald-100 text-emerald-700":"bg-slate-200 text-slate-600"}">${n?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span></div><button type="button" data-cfg="${re(e)}" data-enabled="${n?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${n?"bg-red-50 text-red-700 border border-red-200":"bg-emerald-600 text-white"}">${n?"ปิดใช้งาน":"เปิดใช้งาน"}</button></div></div>`,hs=(e,s,t=!0)=>`<button type="button" data-team-perm="${re(e)}" data-enabled="${t?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold border ${t?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}">${t?"อนุญาต":"ไม่อนุญาต"}: ${re(s)}</button>`;(location.pathname.startsWith("/pp5online/")?"/pp5online/":"/")+"";async function na(e,s,t=1e3){let n=[],l=0;for(;;){const{data:o,error:u}=await s(oe.from(e)).range(l,l+t-1);if(u)throw u;if(n=n.concat(o||[]),!o||o.length<t)break;l+=t}return n}async function ur(e){var n;if(!e)return!1;const{data:s}=await oe.from("teachers").select("positions,position,staff_type").eq("profile_id",e).maybeSingle();return s?((n=s.positions)!=null&&n.length?s.positions:s.position?[s.position]:[]).includes("house_color_admin")||s.staff_type==="แอดมิน":!1}async function fd(e){const{data:s}=await oe.from("settings").select("value").eq("key","public_buttons").maybeSingle(),t=s!=null&&s.value&&typeof s.value=="object"?s.value:{};await oe.from("settings").upsert({key:"public_buttons",value:{athlete_size:!1,athlete_registration:!1,athlete_print:!0,athlete_certificate:!0,...t,athlete_size:!!e},description:"Controls which athlete-page actions are visible and usable by public visitors.",updated_at:new Date().toISOString()},{onConflict:"key"})}async function St(){const[{data:e},{data:s},{data:t}]=await Promise.all([oe.from("events").select("*").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),oe.from("sports_portal_settings").select("*").limit(1).maybeSingle(),oe.from("settings").select("value").eq("key","shirt_sizes").maybeSingle()]),n=Array.isArray(t==null?void 0:t.value)&&t.value.length?t.value:cr;return{event:e||{id:yd,name:"AZIZGAMES"},cfg:s,shirtSizes:n}}async function hd(e){const{error:s}=await oe.from("settings").upsert({key:"shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}async function vd(e){const{error:s}=await oe.from("settings").upsert({key:"teacher_shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}function pr(e){const s=[];return(e||[]).forEach(t=>{const n=vs(t.event_date),l=vs(t.end_date||t.event_date);if(n)for(let o=new Date(n);o<=(l||n);o.setDate(o.getDate()+1))s.push({date:wd(o),label:t.label})}),s.sort((t,n)=>t.date<n.date?1:-1)}function vs(e){if(!e)return null;const[s,t,n]=String(e).slice(0,10).split("-").map(Number);return new Date(s,t-1,n)}function wd(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}async function _d(e,s){const t=e.querySelector("#sports-gallery-type-admin");if(!t)return;t.innerHTML='<div class="py-8 text-center text-gray-400">กำลังโหลดประเภทภาพกิจกรรม...</div>';const{data:n,error:l}=await oe.from("sports_gallery_upload_types").select("*").eq("event_id",s.id).order("event_date",{ascending:!0,nullsFirst:!1}).order("display_order").order("created_at");if(l){t.innerHTML='<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">ยังไม่พร้อมใช้งานส่วนจัดการประเภทภาพกิจกรรม — กรุณารันไฟล์ <code>patch_sports_gallery_upload_types.sql</code> ใน Supabase SQL Editor</div>';return}let o=n||[];const u=()=>{var r;t.innerHTML=`
      <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div><h2 class="font-bold">📸 ประเภทภาพกิจกรรม</h2><p class="text-xs text-gray-500 mt-1">เพิ่มชื่อและวันที่สำหรับให้สต๊าฟเลือกตอนอัปโหลด ปิดใช้งานแล้วรูปเดิมยังอยู่ครบ</p></div>
      </div>
      <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 rounded-2xl bg-slate-50 border p-3 mb-4">
        <input id="gallery-type-new-name" class="border rounded-xl px-3 py-2 text-sm bg-white" placeholder="เช่น บรรยากาศวันเข้าสี วันที่ 2">
        <input id="gallery-type-new-date" type="date" class="border rounded-xl px-3 py-2 text-sm bg-white">
        <button id="gallery-type-add" class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">เพิ่มรายการ</button>
      </div>
      <div class="space-y-2">${o.map(d=>`
        <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 items-center rounded-2xl border p-3 ${d.is_active?"bg-white":"bg-slate-50 opacity-75"}" data-gallery-type-row="${re(d.id)}">
          <input data-gallery-type-name class="border rounded-xl px-3 py-2 text-sm bg-white" value="${re(d.name)}">
          <input data-gallery-type-date type="date" class="border rounded-xl px-3 py-2 text-sm bg-white" value="${re(d.event_date||"")}">
          <div class="flex gap-2 md:justify-end">
            <button data-gallery-type-save="${re(d.id)}" class="px-3 py-2 rounded-xl border border-indigo-200 text-indigo-700 text-xs font-bold">บันทึกแก้ไข</button>
            <button data-gallery-type-active="${re(d.id)}" data-active="${d.is_active?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${d.is_active?"border border-red-200 text-red-700 bg-red-50":"bg-emerald-600 text-white"}">${d.is_active?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีประเภทภาพกิจกรรม</p>'}</div>`,(r=t.querySelector("#gallery-type-add"))==null||r.addEventListener("click",async()=>{const d=t.querySelector("#gallery-type-new-name").value.trim(),p=t.querySelector("#gallery-type-new-date").value||null;if(!d)return be("กรุณากรอกชื่อประเภทภาพกิจกรรม","error");const a=t.querySelector("#gallery-type-add");a.disabled=!0;const{data:m,error:v}=await oe.from("sports_gallery_upload_types").insert({event_id:s.id,name:d,event_date:p,is_active:!0,display_order:o.length*10}).select("*").single();if(v)return a.disabled=!1,be(v.message,"error");o.push(m),be("เพิ่มประเภทภาพกิจกรรมแล้ว"),u()}),t.querySelectorAll("[data-gallery-type-save]").forEach(d=>d.addEventListener("click",async()=>{const p=t.querySelector(`[data-gallery-type-row="${d.dataset.galleryTypeSave}"]`),a=p.querySelector("[data-gallery-type-name]").value.trim(),m=p.querySelector("[data-gallery-type-date]").value||null;if(!a)return be("ชื่อประเภทต้องไม่ว่าง","error");d.disabled=!0;const{data:v,error:x}=await oe.from("sports_gallery_upload_types").update({name:a,event_date:m,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeSave).select("*").single();if(x)return d.disabled=!1,be(x.message,"error");o=o.map(_=>_.id===v.id?v:_),be("บันทึกการแก้ไขแล้ว"),u()})),t.querySelectorAll("[data-gallery-type-active]").forEach(d=>d.addEventListener("click",async()=>{const p=d.dataset.active!=="true";d.disabled=!0;const{data:a,error:m}=await oe.from("sports_gallery_upload_types").update({is_active:p,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeActive).select("*").single();if(m)return d.disabled=!1,be(m.message,"error");o=o.map(v=>v.id===a.id?a:v),be(p?"เปิดใช้งานรายการแล้ว":"ปิดใช้งานรายการแล้ว"),u()}))};u()}async function We(){var s,t,n,l,o,u,r,d;const e=$t();e.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>';try{const{event:p,cfg:a,shirtSizes:m}=await St();let v=m.map(f=>({...f}));const{data:x}=await oe.from("settings").select("value").eq("key","teacher_shirt_sizes").maybeSingle();let _=(Array.isArray(x==null?void 0:x.value)&&x.value.length?x.value:cr).map(f=>({...f}));const h=await Vs(oe),{data:$}=await oe.from("profiles").select("role,is_also_admin").eq("id",h).maybeSingle(),b=($==null?void 0:$.role)==="admin"||($==null?void 0:$.is_also_admin)===!0||await ur(h);if((a==null?void 0:a.shirt_summary_enabled)===!1&&!b){e.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}const{data:c}=await oe.from("sports_team_memberships").select("team_color_id,role,permissions").eq("event_id",p.id).eq("profile_id",h).eq("is_active",!0),M=b||(c||[]).some(f=>f.role==="lead_teacher"),[{data:w},C,{data:T}]=await Promise.all([oe.from("team_colors").select("id,name,hex_color").eq("event_id",p.id).order("display_order"),na("sports_shirt_requests",f=>f.select("status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)").eq("event_id",p.id)),b?oe.from("sports_team_identity_requests").select("*,team_colors(name,logo_url)").eq("event_id",p.id).eq("status","pending_admin"):Promise.resolve({data:[]})]),H=m.map(f=>f.code),B=(C||[]).filter(f=>["confirmed","advisor_updated"].includes(f.status));if(e.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${b?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><div class="flex gap-2"><button id="open-sports-overview" type="button" class="px-4 py-2 bg-sky-600 text-white rounded-xl text-sm font-bold">📊 ภาพรวมกีฬาสี</button><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div></div><div class="grid md:grid-cols-4 gap-3">${yt("shirt_request_enabled","รับจำนงไซซ์เสื้อ","นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน",!!(a!=null&&a.shirt_request_enabled))}${yt("shirt_summary_enabled","หน้าสรุปยอดเสื้อ","ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้",!!(a!=null&&a.shirt_summary_enabled))}${yt("team_workspace_enabled","จัดการสีของฉัน","ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้",!!(a!=null&&a.team_workspace_enabled))}${yt("shirt_vote_enabled","โหวตแบบเสื้อกีฬาสี","นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้",!!(a!=null&&a.shirt_vote_enabled))}${yt("teacher_shirt_request_enabled","รับแจ้งไซซ์เสื้อคุณครู","คุณครูจะเห็นปุ่มแจ้งไซซ์ในหน้าภาพรวม แยกจากของนักเรียน",!!(a!=null&&a.teacher_shirt_request_enabled))}</div><div class="grid md:grid-cols-2 gap-3 mt-3"><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">ค่าบำรุงสี (บาท/คน)</h3><p class="text-xs text-gray-500 mt-1">จำนวนเงินเริ่มต้นที่จะบันทึกทุกครั้งที่สแกน QR เก็บค่าบำรุง</p><input id="cfg-dues-amount" type="number" min="0" step="1" value="${Number((a==null?void 0:a.dues_amount)??30)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (%)</h3><p class="text-xs text-gray-500 mt-1">ค่าเริ่มต้นทุกสี — พ่อสี/แม่สีแต่ละคนตั้งค่าเฉพาะสีตัวเองทับได้ในหน้าจัดการสี</p><input id="cfg-cert-threshold" type="number" min="0" max="100" step="1" value="${Number((a==null?void 0:a.cert_attendance_threshold_pct)??80)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div></div></section>`:""}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${(C==null?void 0:C.length)||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(C||[]).filter(f=>f.status==="pending").length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${B.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${H.map(f=>`<th>${re(f)}</th>`).join("")}<th>รวม</th></tr></thead><tbody>${(w||[]).map(f=>{const i=B.filter(y=>{var E;return((E=y.students)==null?void 0:E.house_color)===f.name});return`<tr class="border-t"><td class="p-3 font-bold" style="color:${f.hex_color}">สี${re(f.name)}</td>${H.map(y=>`<td class="text-center">${i.filter(E=>E.confirmed_size===y).length}</td>`).join("")}<td class="text-center font-bold">${i.length}</td></tr>`}).join("")}</tbody></table></div>${M?'<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>':""}${b?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${(T==null?void 0:T.map(f=>{var i;return`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${f.proposed_logo_url?`<img src="${re(f.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:""}<div class="flex-1"><b>ทีมสี${re((i=f.team_colors)==null?void 0:i.name)}</b><p class="text-xs text-gray-500">${re(f.proposed_name||f.proposed_motto||"เปลี่ยนโลโก้/อัตลักษณ์")}</p></div><button data-review="${f.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${f.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`}).join(""))||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:""}</div>`,b){const f=document.createElement("section");f.id="sports-gallery-type-admin",f.className="bg-white border rounded-2xl p-5";const i=e.querySelector("#sports-team-membership-admin");i?i.before(f):(s=e.querySelector(".max-w-7xl"))==null||s.appendChild(f),await _d(e,p),await ml(e.querySelector(".max-w-7xl")||e,p.id);const y=(t=e.querySelector("#cfg-dues-amount"))==null?void 0:t.closest(".grid");y==null||y.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-violet-50 border-violet-200"><h3 class="font-bold text-sm text-violet-900">ค่าเสื้อกีฬาสี (บาท/คน)</h3><p class="text-xs text-violet-700 mt-1">ยอดที่ครูที่ปรึกษาศาสนาจะบันทึกเมื่อสแกนรับชำระ แยกชาย/หญิงเพราะราคาต่างกัน ตั้งเป็น 0 เพื่อปิดรับชำระของเพศนั้นชั่วคราว</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-violet-700">👦 ชาย</span><input id="cfg-shirt-payment-amount-m" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_m)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-violet-700">👧 หญิง</span><input id="cfg-shirt-payment-amount-w" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_w)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),(n=e.querySelector("#cfg-shirt-payment-amount-m"))==null||n.addEventListener("input",S=>{We.pendingCfg={...We.pendingCfg||{},shirt_payment_amount_m:Math.max(0,Number(S.target.value)||0)}}),(l=e.querySelector("#cfg-shirt-payment-amount-w"))==null||l.addEventListener("input",S=>{We.pendingCfg={...We.pendingCfg||{},shirt_payment_amount_w:Math.max(0,Number(S.target.value)||0)}}),y==null||y.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-teal-50 border-teal-200"><h3 class="font-bold text-sm text-teal-900">📏 ไซซ์เริ่มต้นขั้นต่ำ</h3><p class="text-xs text-teal-700 mt-1">ไซซ์ที่เล็กกว่าที่เลือกจะถูกซ่อนจากตัวเลือกของกลุ่มนั้นอัตโนมัติ (เฉพาะตอนนักเรียนเลือกไซซ์เอง — ตารางสรุปยอดยังโชว์ครบทุกไซซ์)</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-teal-700">ม.ต้น (ม.1-3)</span><select id="cfg-shirt-size-min-junior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${m.map(S=>`<option value="${re(S.code)}" ${(a==null?void 0:a.shirt_size_min_junior)===S.code?"selected":""}>${re(S.code)}</option>`).join("")}</select></label><label class="block"><span class="text-xs text-teal-700">ม.ปลาย/ปวช (ม.4-6, ปวช.1-3)</span><select id="cfg-shirt-size-min-senior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${m.map(S=>`<option value="${re(S.code)}" ${((a==null?void 0:a.shirt_size_min_senior)||"M")===S.code?"selected":""}>${re(S.code)}</option>`).join("")}</select></label></div></div>`),y==null||y.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-sky-50 border-sky-200"><h3 class="font-bold text-sm text-sky-900">🎽 วันเช็คชื่อเข้าสีวันแรก</h3><p class="text-xs text-sky-700 mt-1">เฉพาะวันนี้ ให้ครูที่ปรึกษา (สามัญ/ศาสนา) เช็คชื่อนักเรียนแทนฝ่ายสี (ฝ่ายสีเห็นข้อมูลอ่านอย่างเดียวชั่วคราว) เว้นว่างเพื่อปิดระบบนี้</p><input id="cfg-advisor-checkin-date" type="date" value="${re((a==null?void 0:a.advisor_checkin_date)||"")}" class="mt-3 w-full border border-sky-200 rounded-xl px-3 py-2 text-sm bg-white"><label class="flex items-center gap-2 mt-3 text-xs text-sky-800 cursor-pointer"><input id="cfg-advisor-checkin-backfill" type="checkbox" ${a!=null&&a.advisor_checkin_backfill_enabled?"checked":""} class="w-4 h-4">เปิดให้ครูที่ปรึกษาเช็คชื่อ<b>ย้อนหลัง</b>ได้ (เลือกวันที่จากปฏิทินปฏิบัติงาน ไม่จำกัดแค่วันที่ตั้งไว้ด้านบน — ใช้แก้ห้องที่ครูลา/ตกหล่น)</label></div>`),y==null||y.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-emerald-50 border-emerald-200 md:col-span-2"><h3 class="font-bold text-sm text-emerald-900">🏃 ช่วงเวลารับสมัครและแก้ไขข้อมูลนักกีฬา</h3><p class="text-xs text-emerald-700 mt-1">หลังปิดรับสมัคร สามารถเปิดช่วงแก้ไขข้อมูลเดิมให้ครูและสต๊าฟแต่ละสีได้ โดยแก้ได้เฉพาะนักกีฬาของสีตนเอง เช่น หมายเลขเสื้อ ไม่สามารถเพิ่มหรือถอนรายชื่อผ่านช่องทางนี้</p><div class="grid md:grid-cols-3 gap-2 mt-3"><label class="block"><span class="text-xs text-emerald-800">ปิดรับสมัคร</span><input id="cfg-athlete-registration-closes" type="datetime-local" value="${re($a(a==null?void 0:a.athlete_registration_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">เปิดให้ฝ่ายสีแก้ไข</span><input id="cfg-athlete-edit-opens" type="datetime-local" value="${re($a(a==null?void 0:a.athlete_edit_opens_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">ปิดการแก้ไข</span><input id="cfg-athlete-edit-closes" type="datetime-local" value="${re($a(a==null?void 0:a.athlete_edit_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),y==null||y.insertAdjacentHTML("afterend",'<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👕 ไซซ์เสื้อที่เปิดให้แจ้งได้</h3><button id="shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border">+ เพิ่มไซซ์</button></div><p class="text-xs text-gray-500 mb-3">ตั้งค่าที่นี่หรือฝั่ง AZIZGAMES ก็ได้ บันทึกในตารางเดียวกัน อีกฝั่งเห็นอัตโนมัติ — กด "บันทึกการตั้งค่า" ด้านบนเพื่อบันทึกด้วย</p><div id="shirt-size-rows" class="space-y-2"></div></div>');const E=()=>{const S=e.querySelector("#shirt-size-rows");S&&(S.innerHTML=v.map((j,D)=>`<div class="flex items-center gap-2" data-size-row="${D}"><input data-size-code value="${re(j.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-size-chest type="number" min="0" value="${re(j.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-size-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),S.querySelectorAll("[data-size-row]").forEach(j=>{const D=Number(j.dataset.sizeRow);j.querySelector("[data-size-code]").addEventListener("input",k=>{v[D].code=k.target.value}),j.querySelector("[data-size-chest]").addEventListener("input",k=>{v[D].chest=k.target.value}),j.querySelector("[data-size-remove]").addEventListener("click",()=>{v.splice(D,1),E()})}))};E(),e.querySelector("#shirt-size-add").addEventListener("click",()=>{v.push({code:"",chest:""}),E()}),(u=(o=e.querySelector("#shirt-size-rows"))==null?void 0:o.closest("div.rounded-2xl"))==null||u.insertAdjacentHTML("afterend",`<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👔 ไซซ์เสื้อคุณครู</h3><button id="teacher-shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border hidden">+ เพิ่มไซซ์</button></div><label class="flex items-center gap-2 text-xs text-gray-600 mb-3"><input id="teacher-shirt-use-student-sizes" type="checkbox" ${(a==null?void 0:a.teacher_shirt_use_student_sizes)!==!1?"checked":""} class="w-4 h-4">ใช้ตารางไซซ์เดียวกับนักเรียน (ปลดติ๊กเพื่อตั้งไซซ์แยกสำหรับครู)</label><div id="teacher-shirt-size-rows" class="space-y-2"></div></div>`);const g=()=>{const S=e.querySelector("#teacher-shirt-size-rows");S&&(S.innerHTML=_.map((j,D)=>`<div class="flex items-center gap-2" data-tsize-row="${D}"><input data-tsize-code value="${re(j.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-tsize-chest type="number" min="0" value="${re(j.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-tsize-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),S.querySelectorAll("[data-tsize-row]").forEach(j=>{const D=Number(j.dataset.tsizeRow);j.querySelector("[data-tsize-code]").addEventListener("input",k=>{_[D].code=k.target.value}),j.querySelector("[data-tsize-chest]").addEventListener("input",k=>{_[D].chest=k.target.value}),j.querySelector("[data-tsize-remove]").addEventListener("click",()=>{_.splice(D,1),g()})}))},L=()=>{var j;const S=(j=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:j.checked;e.querySelector("#teacher-shirt-size-rows").style.display=S?"none":"",e.querySelector("#teacher-shirt-size-add").classList.toggle("hidden",!!S)};g(),L(),e.querySelector("#teacher-shirt-use-student-sizes").addEventListener("change",L),e.querySelector("#teacher-shirt-size-add").addEventListener("click",()=>{_.push({code:"",chest:""}),g()})}e.querySelector("#shirt-export").onclick=()=>{const f=["รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ",...B.map(y=>{var E,g,L,S;return[(E=y.students)==null?void 0:E.student_code,(g=y.students)==null?void 0:g.full_name,(L=y.students)==null?void 0:L.main_room,(S=y.students)==null?void 0:S.house_color,y.confirmed_size,y.status].map(j=>`"${String(j||"").replaceAll('"','""')}"`).join(",")})],i=document.createElement("a");i.href=URL.createObjectURL(new Blob(["\uFEFF"+f.join(`
`)],{type:"text/csv"})),i.download="sports-shirt-summary.csv",i.click(),URL.revokeObjectURL(i.href)},e.querySelectorAll("[data-cfg]").forEach(f=>f.addEventListener("click",()=>{const i=f.dataset.enabled!=="true";f.dataset.enabled=i?"true":"false",We.pendingCfg={...We.pendingCfg||{},[f.dataset.cfg]:i},f.textContent=i?"ปิดใช้งาน":"เปิดใช้งาน",be("เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน")})),(r=e.querySelector("#open-sports-overview"))==null||r.addEventListener("click",()=>mr()),(d=e.querySelector("#cfg-save"))==null||d.addEventListener("click",async()=>{var D,k,I,R,z,q,F;const f=P=>{var V;const O=(V=e.querySelector(P))==null?void 0:V.value;return O?new Date(O).toISOString():null},i=f("#cfg-athlete-registration-closes"),y=f("#cfg-athlete-edit-opens"),E=f("#cfg-athlete-edit-closes");if(y&&i&&new Date(y)<new Date(i))return be("เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร","error");if(E&&y&&new Date(E)<=new Date(y))return be("เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข","error");const g={shirt_request_enabled:!!(a!=null&&a.shirt_request_enabled),shirt_summary_enabled:!!(a!=null&&a.shirt_summary_enabled),team_workspace_enabled:!!(a!=null&&a.team_workspace_enabled),shirt_vote_enabled:!!(a!=null&&a.shirt_vote_enabled),teacher_shirt_request_enabled:!!(a!=null&&a.teacher_shirt_request_enabled),teacher_shirt_use_student_sizes:((D=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:D.checked)!==!1,dues_amount:Number((k=e.querySelector("#cfg-dues-amount"))==null?void 0:k.value)||30,cert_attendance_threshold_pct:Number((I=e.querySelector("#cfg-cert-threshold"))==null?void 0:I.value)||80,advisor_checkin_date:((R=e.querySelector("#cfg-advisor-checkin-date"))==null?void 0:R.value)||null,advisor_checkin_backfill_enabled:!!((z=e.querySelector("#cfg-advisor-checkin-backfill"))!=null&&z.checked),shirt_size_min_junior:((q=e.querySelector("#cfg-shirt-size-min-junior"))==null?void 0:q.value)||null,shirt_size_min_senior:((F=e.querySelector("#cfg-shirt-size-min-senior"))==null?void 0:F.value)||null,athlete_registration_closes_at:i,athlete_edit_opens_at:y,athlete_edit_closes_at:E,...We.pendingCfg||{}},{error:L}=await oe.from("sports_portal_settings").update({...g,updated_at:new Date().toISOString()}).eq("event_id",p.id);if(L)return be(L.message,"error");const S=v.filter(P=>String(P.code||"").trim()).map(P=>({code:String(P.code).trim(),chest:Number(P.chest)||0}));if(S.length)try{await hd(S)}catch(P){be("บันทึกไซซ์เสื้อไม่สำเร็จ: "+P.message,"error")}const j=_.filter(P=>String(P.code||"").trim()).map(P=>({code:String(P.code).trim(),chest:Number(P.chest)||0}));if(j.length)try{await vd(j)}catch(P){be("บันทึกไซซ์เสื้อครูไม่สำเร็จ: "+P.message,"error")}try{await fd(g.shirt_request_enabled)}catch(P){console.warn("Unable to sync AZIZGAMES shirt button",P)}We.pendingCfg={},be("บันทึกการเปิดใช้งานแล้ว"),We()}),e.querySelectorAll("[data-review]").forEach(f=>f.onclick=async()=>{const{error:i}=await oe.rpc("review_team_identity",{p_request:f.dataset.review,p_decision:f.dataset.decision,p_comment:null});if(i)return be(i.message,"error");be("บันทึกผลตรวจสอบแล้ว"),We()}),M&&Rt(e,p,w||[],{isAdmin:b,myTeamMemberships:c||[]})}catch(p){console.error(p),e.innerHTML=kt()}}function $d({wrap:e,items:s,placeholder:t="ค้นหา...",emptyLabel:n="-- เลือก --",photoClass:l="w-7 h-9 rounded object-cover flex-shrink-0 border",onChange:o=null}){let u=null,r=!1;e.style.position="relative",e.innerHTML=`
    <div class="ps-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ps-display flex-1 text-sm text-gray-400 truncate">${re(n)}</span>
      <svg class="ps-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ps-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100"><input class="ps-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${re(t)}" autocomplete="off"></div>
      <ul class="ps-list max-h-52 overflow-y-auto"></ul>
    </div>`;const d=e.querySelector(".ps-input"),p=e.querySelector(".ps-dropdown"),a=e.querySelector(".ps-search"),m=e.querySelector(".ps-list"),v=e.querySelector(".ps-display"),x=e.querySelector(".ps-arrow");function _(b=""){const c=b.toLowerCase(),M=s.filter(w=>!b||(w.label||"").toLowerCase().includes(c)||(w.sub||"").toLowerCase().includes(c));m.innerHTML=M.length?M.map(w=>{const C=(u==null?void 0:u.id)===w.id;return`<li data-id="${re(String(w.id))}" class="ps-opt px-3 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 ${C?"bg-indigo-50 font-semibold text-indigo-700":"text-gray-700"}">
        ${w.photo?`<img src="${re(w.photo)}" class="${l}">`:""}
        <span class="truncate">${re(w.label)}${w.sub?` <span class="text-xs text-gray-400 font-mono">${re(w.sub)}</span>`:""}</span>
      </li>`}).join(""):'<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบรายการ</li>',m.querySelectorAll(".ps-opt").forEach(w=>w.addEventListener("mousedown",C=>{C.preventDefault(),u=s.find(T=>String(T.id)===w.dataset.id)||null,v.textContent=u?u.label:n,v.classList.toggle("text-gray-400",!u),v.classList.toggle("text-gray-800",!!u),$(),o==null||o((u==null?void 0:u.id)??null)}))}function h(){r=!0,p.classList.remove("hidden"),x.style.transform="rotate(180deg)",a.value="",_(),setTimeout(()=>a.focus(),50)}function $(){r=!1,p.classList.add("hidden"),x.style.transform=""}return d.addEventListener("click",()=>r?$():h()),d.addEventListener("keydown",b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),r?$():h())}),a.addEventListener("input",()=>_(a.value.trim())),document.addEventListener("mousedown",b=>{r&&!e.contains(b.target)&&$()},!0),{getValue:()=>(u==null?void 0:u.id)??null,reset:()=>{u=null,v.textContent=n,v.classList.add("text-gray-400"),v.classList.remove("text-gray-800")}}}async function Rt(e,s,t=[],n={isAdmin:!1,myTeamMemberships:[]}){var m,v,x,_,h,$,b;const l=e.querySelector("#sports-team-membership-admin");if(!l)return;const o={lead_teacher:"หัวหน้าครูประจำสี",teacher:"ครูประจำสี",staff_lead:"หัวหน้านักเรียนสต๊าฟสี",staff:"นักเรียนสต๊าฟสี"},u={members:"สมาชิก",registrations:"ลงทะเบียนกีฬา",announcements:"ประกาศ",tasks:"งานของสี",shirt_summary:"สรุปเสื้อ",attendance:"เช็คชื่อ",dues:"เก็บค่าบำรุงสี",expenses:"บันทึกรายรับ-รายจ่ายสี",comp_assign:"มอบหมายรายการแข่งขัน"},r=c=>/^\s*(?:ม\.?\s*[456]|ปวช\.?\s*[123])(?:\s*\/|\s|$)/i.test(String((c==null?void 0:c.main_room)||"")),d=new Set((n.myTeamMemberships||[]).filter(c=>c.role==="lead_teacher").map(c=>c.team_color_id)),p=n.isAdmin?t:t.filter(c=>d.has(c.id)),a=!!n.isAdmin;if(!p.length){l.innerHTML='<div class="p-6 text-center text-gray-400">ยังไม่มีสีที่คุณมีสิทธิ์มอบหมายสต๊าฟ</div>';return}try{const[{data:c,error:M},{data:w},C]=await Promise.all([oe.from("sports_team_memberships").select("*,team_colors(name,hex_color),teachers(full_name,teacher_code),students(full_name,student_code,main_room)").eq("event_id",s.id).eq("is_active",!0).order("created_at",{ascending:!1}),oe.from("teachers").select("id,teacher_code,full_name,dept,image_url,profile_id").not("profile_id","is",null).order("full_name"),na("students",D=>D.select("id,student_code,full_name,main_room,profile_id,is_active,image_url,team_color_id,house_color").order("student_code"))]);if(M)throw M;const T=new Set(p.map(D=>D.id)),H=(c||[]).filter(D=>n.isAdmin||T.has(D.team_color_id)),B=new Set((c||[]).filter(D=>D.role==="staff_lead").map(D=>D.team_color_id));let f=[];l.innerHTML=`<div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="font-bold">🛡️ มอบหมายผู้ดูแลประจำสี</h2><p class="text-xs text-gray-500 mt-1">${n.isAdmin?"แอดมินกำหนดครูประจำสีและนักเรียนสต๊าฟได้ทุกสี":"พ่อสี/แม่สีมอบหมายได้เฉพาะนักเรียนสต๊าฟในสีของตนเอง"}</p></div><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ใช้งานอยู่ ${(c==null?void 0:c.length)||0} คน</span></div>
      <div class="grid lg:grid-cols-5 gap-3 mb-4">
        <select id="team-member-color" class="team-field rounded-xl px-3 py-2 text-sm">${p.map(D=>`<option value="${re(D.id)}">สี${re(D.name)}</option>`).join("")}</select>
        <input id="team-member-code-input" class="team-field rounded-xl px-3 py-2 text-sm lg:col-span-2" placeholder="กรอกรหัสครู/รหัสนักเรียน เช่น 1087, 608001">
        <select id="team-member-role" class="team-field rounded-xl px-3 py-2 text-sm">
          ${a?'<option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option>':""}
          <option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option>
          <option value="staff">นักเรียนสต๊าฟสี</option>
        </select>
        <button id="team-member-search" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">ค้นหารายชื่อ</button>
      </div>
      <p class="text-[11px] text-gray-500 -mt-2 mb-3">มอบสิทธิ์นักเรียนระดับ ม.4–ม.6 และ ปวช.1–3 ที่อยู่สีเดียวกันและมีบัญชีเข้าใช้งานระบบแล้ว</p>
      <div class="flex flex-wrap gap-2 mb-4">${Object.entries(u).map(([D,k])=>hs(D,k,!0)).join("")}</div>
      <div id="team-member-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4">
        <p class="text-xs font-bold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบหมาย:</p>
        <div id="team-member-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div>
        <button id="team-member-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันและมอบหมายสิทธิ์ประจำสี</button>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 mt-2 mb-2"><h3 class="font-bold text-sm">📋 ตรวจสอบรายชื่อผู้ได้รับสิทธิ์</h3><span id="team-member-count" class="text-xs text-gray-500"></span></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <select id="team-member-filter-color" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${p.map(D=>`<option value="${re(D.id)}">สี${re(D.name)}</option>`).join("")}</select>
        <select id="team-member-filter-role" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกบทบาท</option><option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option><option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option><option value="staff">นักเรียนสต๊าฟสี</option></select>
        <input id="team-member-filter-search" class="team-field rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ/รหัสครู/รหัสนักเรียน...">
      </div>
      <div id="team-member-table-wrap"></div>`;const i=()=>{var z;const D=(z=l.querySelector("#team-member-color"))==null?void 0:z.value,k=l.querySelector("#team-member-role"),I=k==null?void 0:k.querySelector('option[value="staff_lead"]');if(!k||!I)return;const R=B.has(D);I.disabled=R,I.textContent=R?"หัวหน้านักเรียนสต๊าฟสี (มีแล้ว — เลือกนักเรียนสต๊าฟสีแทน)":"หัวหน้านักเรียนสต๊าฟสี",R&&k.value==="staff_lead"&&(k.value="staff")};i(),(m=l.querySelector("#team-member-color"))==null||m.addEventListener("change",i);const y=D=>{var k,I,R,z;return(k=D.teachers)!=null&&k.full_name?`${D.teachers.full_name}${D.teachers.teacher_code?` (${D.teachers.teacher_code})`:""}`:`${((I=D.students)==null?void 0:I.student_code)||""} ${((R=D.students)==null?void 0:R.full_name)||""} ${(z=D.students)!=null&&z.main_room?`· ${D.students.main_room}`:""}`},E=(D,k)=>{var z;(z=document.getElementById("team-member-edit-modal"))==null||z.remove();const I=document.createElement("div");I.id="team-member-edit-modal",I.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",I.setAttribute("role","dialog"),I.setAttribute("aria-modal","true"),I.innerHTML='<div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"><div class="p-5 border-b border-gray-100"><h3 class="font-bold text-gray-800">✏️ แก้ไขสิทธิ์</h3><p class="text-xs text-gray-500 mt-1">แตะเพื่อเปิด/ปิดสิทธิ์แต่ละอย่าง แล้วกดบันทึก</p></div><div class="p-5"><div id="team-member-edit-perms" class="flex flex-wrap gap-2"></div></div><div class="p-4 border-t border-gray-100 flex gap-2"><button id="team-member-edit-cancel" class="flex-1 py-2.5 rounded-xl border text-sm font-bold">ยกเลิก</button><button id="team-member-edit-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold">บันทึก</button></div></div>',document.body.appendChild(I);const R=I.querySelector("#team-member-edit-perms");R.innerHTML=Object.entries(u).map(([q,F])=>hs(q,F,(k==null?void 0:k[q])===!0)).join(""),R.querySelectorAll("[data-team-perm]").forEach(q=>q.addEventListener("click",()=>{const F=q.dataset.enabled!=="true";q.dataset.enabled=F?"true":"false",q.className=`px-3 py-2 rounded-xl text-xs font-bold border ${F?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const P=(q.textContent.split(":").pop()||"").trim();q.textContent=`${F?"อนุญาต":"ไม่อนุญาต"}: ${P}`})),I.querySelector("#team-member-edit-cancel").onclick=()=>I.remove(),I.onclick=q=>{q.target===I&&I.remove()},I.querySelector("#team-member-edit-save").onclick=async()=>{const q={};R.querySelectorAll("[data-team-perm]").forEach(P=>q[P.dataset.teamPerm]=P.dataset.enabled==="true");const{error:F}=await oe.from("sports_team_memberships").update({permissions:q}).eq("id",D);if(F)return be(F.message,"error");I.remove(),be("บันทึกสิทธิ์แล้ว"),Rt(e,s,t,n)}},g=()=>{var F,P,O;const D=((F=l.querySelector("#team-member-filter-color"))==null?void 0:F.value)||"",k=((P=l.querySelector("#team-member-filter-role"))==null?void 0:P.value)||"",I=(((O=l.querySelector("#team-member-filter-search"))==null?void 0:O.value)||"").trim().toLowerCase(),R=H.filter(V=>!(D&&V.team_color_id!==D||k&&V.role!==k||I&&!y(V).toLowerCase().includes(I))),z=l.querySelector("#team-member-count");z&&(z.textContent=`แสดง ${R.length} จาก ${H.length} คน`);const q=l.querySelector("#team-member-table-wrap");q.innerHTML=`<div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${R.map(V=>{var Y,J;const W=y(V),A=Object.entries(V.permissions||{}).filter(([,K])=>K).map(([K])=>u[K]||K).join(", ")||"ไม่มีสิทธิ์ย่อย",U=n.isAdmin||V.student_id&&["staff_lead","staff"].includes(V.role);return`<tr class="border-t"><td class="p-3 font-medium">${re(W||"ไม่พบชื่อ")}</td><td class="p-3"><span class="font-bold" style="color:${re(((Y=V.team_colors)==null?void 0:Y.hex_color)||"#334155")}">สี${re(((J=V.team_colors)==null?void 0:J.name)||"—")}</span></td><td class="p-3">${re(o[V.role]||V.role)}</td><td class="p-3 text-xs text-gray-500">${re(A)}</td><td class="p-3 text-right whitespace-nowrap">${U?`<button data-team-member-edit="${re(V.id)}" data-perms='${re(JSON.stringify(V.permissions||{}))}' class="px-3 py-1.5 rounded-lg border text-indigo-600 text-xs mr-1">แก้ไขสิทธิ์</button><button data-team-member-remove="${re(V.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join("")||`<tr><td colspan="5" class="p-6 text-center text-gray-400">${H.length?"ไม่พบรายชื่อที่ตรงกับตัวกรอง":"ยังไม่มีผู้ได้รับสิทธิ์ประจำสี"}</td></tr>`}</tbody></table></div>`,q.querySelectorAll("[data-team-member-remove]").forEach(V=>V.addEventListener("click",async()=>{const{error:W}=await oe.from("sports_team_memberships").update({is_active:!1,ends_at:new Date().toISOString()}).eq("id",V.dataset.teamMemberRemove);if(W)return be(W.message,"error");be("ปิดสิทธิ์แล้ว"),Rt(e,s,t,n)})),q.querySelectorAll("[data-team-member-edit]").forEach(V=>V.addEventListener("click",()=>{let W={};try{W=JSON.parse(V.dataset.perms||"{}")}catch{W={}}E(V.dataset.teamMemberEdit,W)}))};g(),(v=l.querySelector("#team-member-filter-color"))==null||v.addEventListener("change",g),(x=l.querySelector("#team-member-filter-role"))==null||x.addEventListener("change",g),(_=l.querySelector("#team-member-filter-search"))==null||_.addEventListener("input",g);const L=D=>String(D||"").split(/[\s,]+/).map(k=>k.trim()).filter(Boolean),S=D=>{var I;(I=document.getElementById("team-member-lookup-issue"))==null||I.remove();const k=document.createElement("div");k.id="team-member-lookup-issue",k.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",k.setAttribute("role","dialog"),k.setAttribute("aria-modal","true"),k.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"><div class="p-5 border-b border-red-100 bg-red-50"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-full bg-red-100 grid place-items-center text-xl flex-shrink-0">🔎</div><div><h3 class="font-bold text-red-800">ไม่สามารถเลือกรายชื่อนี้ได้</h3><p class="text-xs text-red-600 mt-1">ระบบตรวจสอบพบสาเหตุดังต่อไปนี้</p></div></div></div><div class="p-5 space-y-2 max-h-[55vh] overflow-y-auto">${D.map(R=>`<div class="rounded-xl border border-gray-200 p-3"><b class="text-sm text-gray-800">รหัส ${re(R.code)}</b><p class="text-xs text-gray-600 mt-1">${re(R.reason)}</p></div>`).join("")}</div><div class="p-4 border-t border-gray-100"><button id="team-member-lookup-close" class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold">รับทราบ</button></div></div>`,document.body.appendChild(k),k.querySelector("#team-member-lookup-close").onclick=()=>k.remove(),k.onclick=R=>{R.target===k&&k.remove()}},j=()=>{const D=l.querySelector("#team-member-preview"),k=l.querySelector("#team-member-preview-cards");if(!f.length){D==null||D.classList.add("hidden");return}D==null||D.classList.remove("hidden"),k.innerHTML=f.map(I=>`<div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">${I.image_url?`<img src="${re(I.image_url)}" class="${I.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} object-cover flex-shrink-0">`:`<div class="${I.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} bg-indigo-50 text-indigo-600 grid place-items-center font-bold flex-shrink-0">${I.kind==="teacher"?"ครู":"นร"}</div>`}<div class="min-w-0"><p class="font-bold text-gray-800 text-xs truncate">${re(I.full_name)} <span class="ml-1 px-1.5 py-0.5 rounded ${I.kind==="teacher"?"bg-amber-100 text-amber-800":"bg-emerald-100 text-emerald-800"} text-[9px] font-bold">${I.kind==="teacher"?"คุณครู":"นักเรียนสต๊าฟ"}</span></p><p class="text-[10px] text-gray-400">${re(I.detail)}</p></div></div>`).join("")};(h=l.querySelector("#team-member-search"))==null||h.addEventListener("click",()=>{var O,V;const D=L((O=l.querySelector("#team-member-code-input"))==null?void 0:O.value);if(!D.length)return be("กรุณากรอกรหัสครูหรือรหัสนักเรียน","error");const k=(V=l.querySelector("#team-member-color"))==null?void 0:V.value,I=p.find(W=>W.id===k),R=new Set(D.map(String)),z=a?(w||[]).filter(W=>R.has(String(W.teacher_code))).map(W=>({...W,kind:"teacher",code:W.teacher_code,detail:`รหัสครู ${W.teacher_code} · กลุ่มสาระ ${W.dept||"—"}`})):[],q=new Set(z.map(W=>String(W.code))),F=[],P=[];D.forEach(W=>{if(q.has(String(W)))return;const A=(C||[]).filter(Y=>String(Y.student_code)===String(W));if(!A.length){P.push({code:W,reason:"ไม่พบรหัสนักเรียนนี้ในฐานข้อมูล"});return}const U=A.find(Y=>Y.is_active)||A[0];if(!U.is_active){P.push({code:W,reason:"บัญชีนักเรียนถูกปิดสถานะ ไม่ใช่นักเรียนที่กำลังใช้งาน"});return}if(!(U.team_color_id===k||U.house_color===(I==null?void 0:I.name))){P.push({code:W,reason:`นักเรียนอยู่สี${U.house_color||"อื่น"} ไม่ใช่สี${(I==null?void 0:I.name)||"ที่เลือก"}`});return}if(!r(U)){P.push({code:W,reason:`นักเรียนอยู่ห้อง ${U.main_room||"ไม่ระบุ"} ระบบอนุญาตให้มอบสิทธิ์เฉพาะ ม.4–ม.6 และ ปวช.1–3`});return}if(!U.profile_id){P.push({code:W,reason:"นักเรียนยังไม่มีบัญชีเข้าใช้งานระบบ จึงยังผูกสิทธิ์ประจำสีไม่ได้"});return}F.push({...U,kind:"student",code:U.student_code,detail:`รหัส ${U.student_code} · ห้อง ${U.main_room||"—"} · สี${(I==null?void 0:I.name)||"—"}`})}),f=[...z,...F],P.length&&S(P),f.length&&j()}),($=l.querySelector("#team-member-code-input"))==null||$.addEventListener("keydown",D=>{var k;D.key==="Enter"&&(D.preventDefault(),(k=l.querySelector("#team-member-search"))==null||k.click())}),(b=l.querySelector("#team-member-add"))==null||b.addEventListener("click",async()=>{var q,F;const D=(q=l.querySelector("#team-member-role"))==null?void 0:q.value,k=(F=l.querySelector("#team-member-color"))==null?void 0:F.value;if(!k||!f.length)return be("กรุณาเลือกสีและค้นหารายชื่อก่อน","error");if(!n.isAdmin&&!d.has(k))return be("หัวหน้าครูประจำสีมอบหมายได้เฉพาะสีของตนเอง","error");if(f.some(P=>P.kind==="student")&&!["staff_lead","staff"].includes(D))return be("บทบาทนี้ใช้กับครูเท่านั้น หากจะมอบหมายให้นักเรียนให้เลือกบทบาทนักเรียนสต๊าฟ","error");if(f.some(P=>P.kind==="teacher")&&!["lead_teacher","teacher"].includes(D))return be("บทบาทนี้ใช้กับนักเรียนเท่านั้น หากจะมอบหมายให้ครูให้เลือกบทบาทครูประจำสี","error");if(D==="staff_lead"&&(B.has(k)||f.length>1))return be("สีนี้มีหัวหน้านักเรียนสต๊าฟสีอยู่แล้ว หรือเลือกได้ทีละ 1 คนเท่านั้นสำหรับบทบาทนี้","error");const I={};l.querySelectorAll("[data-team-perm]").forEach(P=>I[P.dataset.teamPerm]=P.dataset.enabled==="true");const R=f.map(P=>({event_id:s.id,team_color_id:k,profile_id:P.profile_id,teacher_id:P.kind==="teacher"?Number(P.id):null,student_id:P.kind==="student"?Number(P.id):null,role:D,permissions:I,is_active:!0,ends_at:null})),{error:z}=await oe.from("sports_team_memberships").upsert(R,{onConflict:"event_id,team_color_id,profile_id"});if(z)return be(z.message,"error");be(`มอบหมายสิทธิ์ประจำสีแล้ว ${R.length} คน`),Rt(e,s,t,n)}),l.querySelectorAll("[data-team-perm]").forEach(D=>D.addEventListener("click",()=>{const k=D.dataset.enabled!=="true";D.dataset.enabled=k?"true":"false",D.className=`px-3 py-2 rounded-xl text-xs font-bold border ${k?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const I=(D.textContent.split(":").pop()||"").trim();D.textContent=`${k?"อนุญาต":"ไม่อนุญาต"}: ${I}`}))}catch(c){console.error(c),l.innerHTML='<div class="p-5 rounded-2xl bg-red-50 text-red-700 text-sm">โหลดหน้ามอบหมายผู้ดูแลสีไม่สำเร็จ</div>'}}async function kd(){const e=$t();e.innerHTML='<div class="py-16 text-center">กำลังโหลดบัญชีเงินกีฬาสี...</div>';try{const{event:s}=await St(),[{data:t,error:n},{data:l,error:o}]=await Promise.all([oe.from("team_colors").select("id,name,hex_color,gender").eq("event_id",s.id).order("gender").order("display_order"),oe.from("sports_team_fund_entries").select("*").eq("event_id",s.id).in("category",["school_support","prize"]).order("entry_date",{ascending:!1}).order("created_at",{ascending:!1})]);if(n)throw n;if(o)throw o;let u=l||[];const r=p=>(t||[]).find(a=>a.id===p);e.innerHTML=`<div class="max-w-5xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">💰 บัญชีเงินกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">เพิ่ม/แก้ไข/ลบเงินสนับสนุนโรงเรียนและเงินรางวัลของแต่ละสี — ข้อมูลจะไปแสดงในหน้า "สีของฉัน" ของนักเรียนทุกคนทันที</p></div>
      <section class="bg-white border rounded-2xl p-5">
        <h2 class="font-bold mb-3">➕ เพิ่มรายการใหม่</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          <select id="fund-admin-color" class="border rounded-xl px-3 py-2 text-sm">${(t||[]).map(p=>`<option value="${re(p.id)}">สี${re(p.name)} (${p.gender==="M"?"ชาย":"หญิง"})</option>`).join("")}</select>
          <select id="fund-admin-category" class="border rounded-xl px-3 py-2 text-sm"><option value="school_support">เงินสนับสนุนโรงเรียน</option><option value="prize">เงินรางวัล</option></select>
          <input id="fund-admin-amount" type="number" min="1" step="1" placeholder="จำนวนเงิน" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-desc" type="text" placeholder="รายละเอียด เช่น ชนะเลิศฟุตซอลชาย ม.ต้น" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-date" type="date" value="${fs()}" class="border rounded-xl px-3 py-2 text-sm">
        </div>
        <button id="fund-admin-submit" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">➕ เพิ่มรายการ</button>
        <div id="fund-admin-status" class="text-xs text-gray-500 mt-2"></div>
      </section>
      <section class="bg-white border rounded-2xl overflow-hidden">
        <div class="p-4 border-b bg-gray-50"><h2 class="font-bold text-sm">📋 รายการทั้งหมด (${u.length})</h2></div>
        <div id="fund-admin-list" class="divide-y"></div>
      </section>
    </div>`;const d=()=>{const p=e.querySelector("#fund-admin-list");p.innerHTML=u.length?u.map(a=>{const m=r(a.team_color_id);return`<div class="p-3 flex items-center gap-3" data-fund-row="${re(a.id)}">
          <span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${re((m==null?void 0:m.hex_color)||"#94a3b8")}"></span>
          <div class="min-w-0 flex-1" data-fund-view>
            <div class="flex items-center gap-2 flex-wrap"><b class="text-sm">สี${re((m==null?void 0:m.name)||"—")}</b><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${a.category==="prize"?"bg-amber-100 text-amber-700":"bg-blue-100 text-blue-700"}">${a.category==="prize"?"เงินรางวัล":"เงินสนับสนุนโรงเรียน"}</span></div>
            <p class="text-sm text-gray-700 mt-0.5">${re(a.description)}</p>
            <p class="text-[11px] text-gray-400 mt-0.5">${new Date(a.entry_date).toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"})}</p>
          </div>
          <b class="flex-shrink-0 text-emerald-600">+${Number(a.amount).toLocaleString("th-TH")}</b>
          <div class="flex gap-1.5 flex-shrink-0">
            <button data-fund-edit="${re(a.id)}" class="px-2.5 py-1.5 rounded-lg border text-xs font-bold text-gray-600 hover:bg-gray-50">แก้ไข</button>
            <button data-fund-del="${re(a.id)}" class="px-2.5 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50">ลบ</button>
          </div>
        </div>`}).join(""):'<p class="p-8 text-center text-gray-400 text-sm">ยังไม่มีรายการ</p>',p.querySelectorAll("[data-fund-del]").forEach(a=>a.onclick=async()=>{if(!confirm("ลบรายการนี้?"))return;const m=a.dataset.fundDel,{error:v}=await oe.from("sports_team_fund_entries").delete().eq("id",m);if(v){be(v.message,"error");return}u=u.filter(x=>String(x.id)!==String(m)),be("ลบรายการแล้ว"),d()}),p.querySelectorAll("[data-fund-edit]").forEach(a=>a.onclick=()=>{const m=a.dataset.fundEdit,v=p.querySelector(`[data-fund-row="${m}"]`),x=u.find(h=>String(h.id)===String(m)),_=v.querySelector("[data-fund-view]");_.innerHTML=`<div class="grid sm:grid-cols-3 gap-1.5">
          <input data-edit-amount type="number" min="1" step="1" value="${Number(x.amount)}" class="border rounded-lg px-2 py-1.5 text-xs">
          <input data-edit-desc type="text" value="${re(x.description)}" class="border rounded-lg px-2 py-1.5 text-xs sm:col-span-2">
          <input data-edit-date type="date" value="${x.entry_date}" class="border rounded-lg px-2 py-1.5 text-xs">
          <div class="flex gap-1.5"><button data-edit-save class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">บันทึก</button><button data-edit-cancel class="px-3 py-1.5 rounded-lg border text-xs font-bold">ยกเลิก</button></div>
        </div>`,_.querySelector("[data-edit-cancel]").onclick=()=>d(),_.querySelector("[data-edit-save]").onclick=async()=>{const h=Number(_.querySelector("[data-edit-amount]").value),$=_.querySelector("[data-edit-desc]").value.trim(),b=_.querySelector("[data-edit-date]").value;if(!h||h<=0||!$){be("กรอกข้อมูลให้ครบ","error");return}const{error:c}=await oe.from("sports_team_fund_entries").update({amount:h,description:$,entry_date:b}).eq("id",m);if(c){be(c.message,"error");return}Object.assign(x,{amount:h,description:$,entry_date:b}),be("แก้ไขแล้ว"),d()}})};d(),e.querySelector("#fund-admin-submit").onclick=async()=>{const p=e.querySelector("#fund-admin-color").value,a=e.querySelector("#fund-admin-category").value,m=Number(e.querySelector("#fund-admin-amount").value),v=e.querySelector("#fund-admin-desc").value.trim(),x=e.querySelector("#fund-admin-date").value||fs(),_=e.querySelector("#fund-admin-status");if(!m||m<=0||!v){_.textContent="กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ",_.className="text-xs text-red-600 mt-2";return}const h=e.querySelector("#fund-admin-submit");h.disabled=!0;const{data:$,error:b}=await oe.from("sports_team_fund_entries").insert({event_id:s.id,team_color_id:p,category:a,amount:m,description:v,entry_date:x}).select().single();if(h.disabled=!1,b){_.textContent="บันทึกไม่สำเร็จ: "+b.message,_.className="text-xs text-red-600 mt-2";return}u.unshift($),e.querySelector("#fund-admin-amount").value="",e.querySelector("#fund-admin-desc").value="",_.textContent="",be("เพิ่มรายการแล้ว"),d()}}catch(s){console.error(s),e.innerHTML=kt()}}async function mr(){const e=$t();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดภาพรวมกีฬาสี...</div>';try{const{event:s}=await St(),[{data:t,error:n},{data:l}]=await Promise.all([oe.rpc("get_sports_admin_overview",{p_event:s.id}),oe.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);if(n)throw n;const o=(t==null?void 0:t.colors)||[],u=(t==null?void 0:t.attendance)||[],r=(t==null?void 0:t.dues)||[],d=(t==null?void 0:t.fund)||[],p=[...new Map(pr(l).map(w=>[w.date,w.label])).entries()].map(([w,C])=>({date:w,label:C})).sort((w,C)=>w.date<C.date?-1:1),a=p.map(w=>w.date),m=new Map(u.map(w=>[`${w.team_color_id}|${w.session_date}`,Number(w.checked_count)])),v=new Map(r.map(w=>[w.team_color_id,w])),x=new Map(d.map(w=>[w.team_color_id,w])),_=w=>w>=80?"bg-emerald-500":w>=50?"bg-amber-500":"bg-red-500",h=()=>a.length?`<div class="overflow-x-auto"><table class="w-full text-sm border-collapse">
        <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left sticky left-0 bg-gray-50 z-10">สี</th>${p.map(w=>`<th class="p-2 text-center whitespace-nowrap"><div>${re(w.date)}</div>${w.label?`<div class="text-[10px] font-normal text-gray-400">${re(w.label)}</div>`:""}</th>`).join("")}</tr></thead>
        <tbody>${o.map(w=>{const C=Number(w.member_count)||0;return`<tr class="border-b"><td class="p-2 font-bold sticky left-0 bg-white z-10" style="color:${re(w.hex_color)}">สี${re(w.name)}</td>${a.map(T=>{const H=m.get(`${w.id}|${T}`)||0,B=C?Math.round(H*100/C):0;return`<td class="p-2 text-center"><div class="inline-flex flex-col items-center gap-1"><span class="text-xs font-bold">${H}/${C}</span><div class="w-14 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full ${_(B)}" style="width:${B}%"></div></div></div></td>`}).join("")}</tr>`}).join("")}</tbody>
      </table></div>`:'<p class="text-sm text-gray-400 text-center py-10">ยังไม่มีวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน — ไปตั้งวันที่ในหน้าปฏิทินปฏิบัติงานก่อน</p>',$=()=>{const w=o.reduce((H,B)=>H+(Number(B.member_count)||0),0),C=r.reduce((H,B)=>H+(Number(B.paid_count)||0),0),T=r.reduce((H,B)=>H+(Number(B.total_amount)||0),0);return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-center">จ่ายแล้ว</th><th class="p-3 text-center">ยังไม่จ่าย</th><th class="p-3 text-center">%</th><th class="p-3 text-right">ยอดรวม (บาท)</th></tr></thead>
        <tbody>${o.map(H=>{const B=v.get(H.id)||{paid_count:0,total_amount:0},f=Number(H.member_count)||0,i=Number(B.paid_count)||0,y=f?Math.round(i*100/f):0;return`<tr class="border-b"><td class="p-3 font-bold" style="color:${re(H.hex_color)}">สี${re(H.name)}</td><td class="p-3 text-center">${i}</td><td class="p-3 text-center">${Math.max(0,f-i)}</td><td class="p-3 text-center">${y}%</td><td class="p-3 text-right font-bold">${Number(B.total_amount||0).toLocaleString("th-TH")}</td></tr>`}).join("")}
        <tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-center">${C}</td><td class="p-3 text-center">${Math.max(0,w-C)}</td><td class="p-3"></td><td class="p-3 text-right">${T.toLocaleString("th-TH")}</td></tr>
        </tbody>
      </table></div>`},b=()=>{let w=0,C=0,T=0,H=0;const B=o.map(i=>{const y=v.get(i.id)||{total_amount:0},E=x.get(i.id)||{school_support:0,prize:0,expense:0},g=Number(y.total_amount)||0,L=Number(E.school_support)||0,S=Number(E.prize)||0,j=Number(E.expense)||0,D=g+L+S-j;return w+=g,C+=L,T+=S,H+=j,`<tr class="border-b"><td class="p-3 font-bold" style="color:${re(i.hex_color)}">สี${re(i.name)}</td><td class="p-3 text-right">${g.toLocaleString("th-TH")}</td><td class="p-3 text-right">${L.toLocaleString("th-TH")}</td><td class="p-3 text-right">${S.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${j.toLocaleString("th-TH")}</td><td class="p-3 text-right font-bold ${D<0?"text-red-600":"text-emerald-600"}">${D.toLocaleString("th-TH")}</td></tr>`}).join(""),f=w+C+T-H;return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-right">ค่าบำรุง</th><th class="p-3 text-right">สนับสนุนโรงเรียน</th><th class="p-3 text-right">เงินรางวัล</th><th class="p-3 text-right">รายจ่าย</th><th class="p-3 text-right">คงเหลือ</th></tr></thead>
        <tbody>${B}<tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-right">${w.toLocaleString("th-TH")}</td><td class="p-3 text-right">${C.toLocaleString("th-TH")}</td><td class="p-3 text-right">${T.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${H.toLocaleString("th-TH")}</td><td class="p-3 text-right ${f<0?"text-red-600":"text-emerald-600"}">${f.toLocaleString("th-TH")}</td></tr></tbody>
      </table></div>`};e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">📊 ภาพรวมกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">สรุปเช็คชื่อรายวัน ค่าบำรุงสี และบัญชีของทุกสี เทียบกันในหน้าเดียว — ดูสถานะการประเมิน/คะแนนได้ที่หน้า "ประเมินกีฬาสี"</p></div>
      <div id="sports-ov-tabs" class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">
        <button type="button" data-ov-tab="attendance" class="px-4 py-2 rounded-lg text-sm font-bold transition">📷 เช็คชื่อรายวัน</button>
        <button type="button" data-ov-tab="dues" class="px-4 py-2 rounded-lg text-sm font-bold transition">💰 ค่าบำรุงสี</button>
        <button type="button" data-ov-tab="ledger" class="px-4 py-2 rounded-lg text-sm font-bold transition">📒 บัญชีสี</button>
      </div>
      <section class="bg-white border rounded-2xl p-5"><div id="sports-ov-body"></div></section>
    </div>`;let c="attendance";const M=()=>{e.querySelectorAll("[data-ov-tab]").forEach(w=>{const C=w.dataset.ovTab===c;w.className=`px-4 py-2 rounded-lg text-sm font-bold transition ${C?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}`}),e.querySelector("#sports-ov-body").innerHTML=c==="attendance"?h():c==="dues"?$():b()};e.querySelectorAll("[data-ov-tab]").forEach(w=>w.onclick=()=>{c=w.dataset.ovTab,M()}),M()}catch(s){console.error(s),e.innerHTML=kt()}}const bt={parade:"🕌 ขบวนพาเหรด/ความร่วมมือสี",page:"📣 หน้าเว็บเพจ",color_eval:"🎨 วันเข้าสีเดิม",sports_day:"🏟️ วันกีฬาสีจริง"},ka={แดง:"#ef4444",น้ำเงิน:"#3b82f6",เขียว:"#10b981",น้ำตาล:"#92400e",ส้ม:"#f97316",ฟ้า:"#0ea5e9",ม่วง:"#a855f7",เทา:"#6b7280"},Lt=["แดง","น้ำเงิน","เขียว","น้ำตาล"],Ct=["ส้ม","ฟ้า","ม่วง","เทา"];async function ot(){const e=$t();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดหน้าประเมินกีฬาสี...</div>';try{const{event:s}=await St(),t=await Vs(oe),{data:n}=await oe.from("profiles").select("role,is_also_admin").eq("id",t).maybeSingle(),l=(n==null?void 0:n.role)==="admin"||(n==null?void 0:n.is_also_admin)===!0||await ur(t),o="pp5:"+t,[{data:u},{data:r},{data:d},p,{data:a},{data:m}]=await Promise.all([oe.from("team_colors").select("id,name,hex_color,logo_url,gender").eq("event_id",s.id).order("gender").order("display_order"),oe.from("sports_score_criteria").select("*").eq("event_id",s.id).eq("is_active",!0).order("category").order("display_order"),oe.from("sports_score_evaluators").select("*").eq("event_id",s.id).eq("profile_id",t).eq("is_active",!0),na("sports_score_entries",Q=>Q.select("id,criteria_id,team_color_id,session_id,judge_username,score,updated_at").eq("event_id",s.id).order("updated_at",{ascending:!0}).order("id",{ascending:!0})),oe.from("color_totals").select("*").eq("event_id",s.id),oe.from("sports_evaluation_sessions").select("*").eq("event_id",s.id).order("session_type").order("day_no")]);let v={colors:[],attendance:[]},x=[],_=null;const h=l||(d||[]).length>0;if(h){const[{data:Q,error:te},{data:ue,error:ce}]=await Promise.all([oe.rpc("get_sports_attendance_overview",{p_event:s.id}),oe.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);v=Q||{colors:[],attendance:[]},x=ue||[],_=te||ce||null}let $=[],b=[],c=[];if(l){const[{data:Q},{data:te},{data:ue}]=await Promise.all([oe.from("sports_score_evaluators").select("*").eq("event_id",s.id).order("created_at",{ascending:!1}),oe.from("teachers").select("id,full_name,teacher_code,profile_id,image_url").order("full_name"),oe.from("sports_evaluation_judges").select("id,name,username,role,criteria_id").eq("event_id",s.id)]);$=Q||[],b=(te||[]).filter(ce=>ce.profile_id),c=ue||[]}const M=new Map(b.map(Q=>[Q.profile_id,Q])),w=new Map((r||[]).map(Q=>[Q.id,Q])),C=new Map((p||[]).filter(Q=>Q.judge_username===o).map(Q=>[`${Q.criteria_id}|${Q.team_color_id}|${Q.session_id||""}`,Number(Q.score)])),T=new Set((d||[]).filter(Q=>!Q.criteria_id).map(Q=>Q.category)),H=new Set((d||[]).filter(Q=>Q.criteria_id).map(Q=>Q.criteria_id)),B=l?r||[]:(r||[]).filter(Q=>T.has(Q.category)||H.has(Q.id)),f=[...new Set(B.map(Q=>Q.category))];let i="M",y=f[0]||null,E=null,g=null,L=!1,S="M",j=null,D="cumulative",k="ALL";const I=Q=>{const te=String(Q||"").indexOf(" - ");return te===-1?Q:Q.slice(0,te)};let R=null;const z=()=>{var Te;if(!B.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><p class="text-gray-400">คุณยังไม่ได้รับมอบหมายให้ประเมินหมวดใด — ติดต่อแอดมินเพื่อขอสิทธิ์ (ดูสรุปคะแนนได้ที่แท็บ "สรุปคะแนนทุกสี")</p></section>';const Q=B.filter(_e=>_e.category===y),te=new Map;if(y==="sports_day")(m||[]).filter(_e=>_e.session_type==="sports_day").forEach(_e=>{const Le=Q.filter(Ie=>Ie.session_id===_e.id);Le.length&&te.set(_e.id,{label:_e.name,criteria:Le})});else if(y==="color_eval"){(m||[]).filter(Le=>Le.session_type==="color_day").sort((Le,Ie)=>(Le.day_no||0)-(Ie.day_no||0)).forEach(Le=>{const Ie=Q.filter(Ae=>Ae.session_id===Le.id);Ie.length&&te.set(Le.id,{label:Le.name,criteria:Ie})});const _e=Q.filter(Le=>!Le.session_id);_e.length&&te.set("legacy",{label:"หัวข้อเดิมที่ยังไม่ผูกวัน",criteria:_e})}else y==="page"||y==="parade"?Q.length&&te.set("all",{label:"หัวข้อทั้งหมด",criteria:Q}):Q.forEach(_e=>{const Le=I(_e.name);te.has(Le)||te.set(Le,{label:Le,criteria:[]}),te.get(Le).criteria.push(_e)});const ue=[...te.keys()];(!E||!ue.includes(E))&&(E=ue[0]||null);const ce=te.get(E),ne=(ce==null?void 0:ce.criteria)||Q,se=ue.map(_e=>te.get(_e).label),fe=(m||[]).find(_e=>_e.id===E),Se=(fe==null?void 0:fe.status)==="closed"&&!l,ke=(u||[]).filter(_e=>_e.gender===i);(!g||!ke.some(_e=>_e.id===g))&&(g=((Te=ke[0])==null?void 0:Te.id)||null);const $e=ke.find(_e=>_e.id===g)||null,ye=_e=>{const Le=ne.map(Ae=>C.get(`${Ae.id}|${_e.id}|${Ae.session_id||""}`)),Ie=Le.filter(Ae=>Ae!==void 0).length;return{saved:Ie,total:Le.length,complete:Le.length>0&&Ie===Le.length}};return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div><h2 class="font-bold">📝 ให้คะแนนประเมิน</h2><p class="text-xs text-gray-500 mt-1">กรอกคะแนนแต่ละสีแล้วกดบันทึกด้านล่าง — แก้ไขซ้ำได้เสมอ</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-eval-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${i==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-eval-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${i==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        ${f.length>1?`<div class="flex flex-wrap gap-2 mb-4">${f.map(_e=>`<button type="button" data-eval-cattab="${_e}" class="px-4 py-2 rounded-xl text-xs font-bold border transition ${_e===y?"bg-indigo-600 text-white border-indigo-600":"text-gray-600 border-gray-200 hover:bg-gray-50"}">${re(bt[_e]||_e)}</button>`).join("")}</div>`:""}
        ${ue.length>1?`<div class="mb-4"><label class="text-xs font-bold text-gray-600 block mb-1.5">${y==="sports_day"?"🏟️ เลือกวันกีฬาสีจริง":"📅 เลือกรอบ/วันที่จะประเมิน"}</label><select id="eval-session-select" class="w-full sm:w-80 border rounded-xl px-3 py-2.5 text-sm font-bold">${ue.map(_e=>`<option value="${re(_e)}" ${_e===E?"selected":""}>${re(te.get(_e).label)}</option>`).join("")}</select></div>`:""}
        <div class="sticky top-2 z-10 -mx-1 px-1 py-2 mb-3 bg-white/95 backdrop-blur">
          <div class="flex gap-2 overflow-x-auto pb-1">
            ${ke.map((_e,Le)=>{const Ie=(i==="W"?Ct:Lt)[Le]||_e.name,Ae=ka[Ie]||_e.hex_color||"#94a3b8",rt=ye(_e),nt=_e.id===g;return`<button type="button" data-eval-color="${_e.id}" ${L&&!nt?"disabled":""} class="flex-shrink-0 min-w-[92px] px-3 py-2 rounded-xl border text-left transition ${nt?"ring-2 ring-indigo-500 border-indigo-400":"border-gray-200"} ${L&&!nt?"opacity-50 cursor-not-allowed":""}" style="background:${re(Ae)}12">
                <span class="block text-xs font-bold" style="color:${re(Ae)}">สี${re(Ie)}</span>
                <span class="block text-[10px] text-gray-500 mt-0.5">${rt.complete?"✓ ครบแล้ว":rt.saved?`${rt.saved}/${rt.total} บันทึกแล้ว`:"ยังไม่เริ่ม"}</span>
              </button>`}).join("")}
          </div>
          ${$e?`          <p class="text-xs text-gray-500 mt-2">กำลังประเมิน: <b>สี${re((i==="W"?Ct:Lt)[ke.indexOf($e)]||$e.name)}</b>${Se?" · ปิดรับคะแนนแล้ว":L?" · มีการแก้ไขที่ยังไม่ได้บันทึก":""}</p>`:""}
        </div>
        ${$e?(()=>{const _e=ke.indexOf($e),Le=(i==="W"?Ct:Lt)[_e]||$e.name,Ie=ka[Le]||$e.hex_color||"#94a3b8",Ae=re((Le||"?").slice(0,1)),nt=ne.map(De=>C.get(`${De.id}|${$e.id}|${De.session_id||""}`)).filter(De=>De!==void 0).reduce((De,Xe)=>De+Number(Xe||0),0),da=ne.reduce((De,Xe)=>De+Number(Xe.max_score||0),0),Ja=[["อีบาดัต",2],["ความสะอาด",3],["เข้าแถว/เช็คชื่อ",3],["นักกีฬา",3],["สต๊าฟ",4],["กองเชียร์",4]],ia=[];return ne.forEach((De,Xe)=>{var mt;const Qa=De.group_name||De.group_key,ca=y==="page"||y==="parade"?"หัวข้อทั้งหมด":y==="sports_day"?((mt=Ja.find(([,xt],ua)=>{const Za=Ja.slice(0,ua).reduce((sn,[,rn])=>sn+rn,0);return Xe>=Za&&Xe<Za+xt}))==null?void 0:mt[0])||"เกณฑ์อื่นๆ":I(De.name),At=Qa||ca;let Me=ia.find(xt=>xt.label===At);Me||(Me={label:At,criteria:[]},ia.push(Me)),Me.criteria.push(De)}),`<div class="rounded-2xl border overflow-hidden" style="border-color:${re(Ie)}55">
            <div class="flex items-center gap-3 p-3" style="background:${re(Ie)}14">
              ${$e.logo_url?`<img data-color-logo src="${re($e.logo_url)}" class="w-11 h-11 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${re(Ie)}"><div data-color-logo-fallback class="hidden w-11 h-11 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${re(Ie)}">${Ae}</div>`:`<div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${re(Ie)}">${Ae}</div>`}
              <div><b class="text-sm" style="color:${re(Ie)}">สี${re(Le)}</b><p class="text-xs text-gray-500 mt-0.5">รวม <span id="eval-current-total">${nt}</span> / ${da}</p></div>
            </div>
            <div class="p-3 space-y-2 bg-white">
              ${ia.map((De,Xe)=>{const ca=De.criteria.map(Me=>C.get(`${Me.id}|${$e.id}|${Me.session_id||""}`)).filter(Me=>Me!==void 0).length,At=De.criteria.reduce((Me,mt)=>Me+Number(mt.max_score||0),0);return`<details class="border rounded-xl overflow-hidden" ${Xe===0?"open":""}>
                  <summary class="cursor-pointer list-none flex items-center justify-between gap-3 px-3 py-2.5 bg-gray-50 hover:bg-gray-100">
                    <span class="text-xs font-bold text-gray-700">${re(De.label)}</span>
                    <span class="text-[10px] text-gray-500">${ca}/${De.criteria.length} ข้อ · เต็ม ${At}</span>
                  </summary>
                  <div class="p-3 space-y-2">
                    ${De.criteria.map(Me=>{const mt=C.get(`${Me.id}|${$e.id}|${Me.session_id||""}`),xt=I(Me.name),ua=se.length>1&&xt!==Me.name?Me.name.slice(xt.length+3):Me.name;return`<div class="flex items-center justify-between gap-2">
                        <label class="text-xs text-gray-600 flex-1">${re(ua)}</label>
                        <div class="flex items-center gap-1 flex-shrink-0">
                          <input type="number" inputmode="numeric" min="0" max="${Number(Me.max_score)}" step="1" value="${mt??""}" data-score-input data-crit="${Me.id}" data-color="${$e.id}" ${Se?"disabled":""} class="w-16 border rounded-lg px-2 py-1.5 text-center text-sm">
                          <span class="text-[10px] text-gray-400 w-10">/ ${Number(Me.max_score)}</span>
                        </div>
                      </div>`}).join("")}
                  </div>
                </details>`}).join("")}
            </div>
          </div>`})():""}
        <div class="sticky bottom-2 z-10 mt-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 backdrop-blur py-2">
          <span class="text-xs text-gray-500">${L?"กรุณาบันทึกก่อนเปลี่ยนสี":"เลือกสีจากแถบด้านบน"}</span>
          <button id="eval-submit" type="button" ${Se?"disabled":""} class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold disabled:opacity-50">${Se?"🔒 ปิดรับคะแนน":"💾 บันทึกสีนี้"}</button>
        </div>
      </section>`},q=()=>{const Q=te=>te.map(ue=>`<div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2" data-crit-row="${ue.id}"><span class="flex-1 text-sm" data-crit-view>${re(ue.name)}</span><span class="text-xs text-gray-500 w-20 text-right" data-crit-view>เต็ม ${Number(ue.max_score)}</span><button type="button" data-crit-edit="${ue.id}" class="px-2 py-1 text-xs border rounded-lg text-indigo-600">แก้ไข</button><button type="button" data-crit-del="${ue.id}" class="px-2 py-1 text-xs border rounded-lg text-red-600">ลบ</button></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>';return["parade","page","color_eval","sports_day"].map(te=>{const ue=(r||[]).filter(se=>se.category===te),ce=te==="color_eval"?(m||[]).filter(se=>se.session_type==="color_day").sort((se,fe)=>(se.day_no||0)-(fe.day_no||0)):te==="sports_day"?(m||[]).filter(se=>se.session_type==="sports_day").sort((se,fe)=>se.day_no-fe.day_no):[],ne=ce.map(se=>({label:se.name,rows:ue.filter(fe=>fe.session_id===se.id)}));if(ce.length||ne.push({label:"หัวข้อทั้งหมด",rows:ue}),te==="color_eval"){const se=ue.filter(fe=>!fe.session_id);se.length&&ne.push({label:"หัวข้อเดิมที่ยังไม่ผูกวัน",rows:se})}return`<div class="mb-4"><h4 class="text-sm font-bold text-gray-700 mb-2">${bt[te]}</h4><div class="space-y-2" data-crit-cat="${te}">${ne.map((se,fe)=>`<details class="border rounded-xl overflow-hidden" ${fe===0?"open":""}><summary class="cursor-pointer list-none flex items-center justify-between px-3 py-2 bg-gray-50 text-xs font-bold">${re(se.label)}<span class="text-gray-500">${se.rows.length} หัวข้อ</span></summary><div class="p-2 space-y-1.5">${Q(se.rows)}</div></details>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>'}</div></div>`}).join("")},F=()=>{if(!$.length)return'<p class="text-sm text-gray-400 text-center py-4">ยังไม่มีผู้ประเมิน</p>';const Q=new Map;return $.forEach(te=>{Q.has(te.profile_id)||Q.set(te.profile_id,[]),Q.get(te.profile_id).push(te)}),[...Q.entries()].map(([te,ue])=>{const ce=M.get(te);return`<div class="flex items-start gap-3 bg-gray-50 rounded-xl p-3 mb-2"><div class="flex-1 min-w-0"><b class="text-sm block truncate">${re((ce==null?void 0:ce.full_name)||"ไม่พบชื่อ (บัญชีอาจถูกลบ)")}</b><div class="flex flex-wrap gap-1.5 mt-1.5">${ue.map(ne=>{var se;return`<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">${re(bt[ne.category]||ne.category)}${ne.criteria_id?` · ${re(((se=w.get(ne.criteria_id))==null?void 0:se.name)||"")}`:""}${ne.role_label?` · ${re(ne.role_label)}`:""}<button type="button" data-eval-del="${ne.id}" class="ml-1 text-red-500 font-black">✕</button></span>`}).join("")}</div></div></div>`}).join("")},P=()=>`<div class="mb-6"><h3 class="font-bold text-sm mb-3">🏟️ วันกีฬาสีจริง</h3><div class="grid sm:grid-cols-2 gap-3">${(m||[]).filter(te=>te.session_type==="sports_day").sort((te,ue)=>te.day_no-ue.day_no).map(te=>`<div class="border rounded-xl p-3 space-y-2">
        <div class="flex items-center justify-between"><b>วันที่ ${te.day_no}</b><span class="text-xs font-bold ${te.status==="open"?"text-emerald-600":te.status==="closed"?"text-red-600":"text-gray-500"}">${te.status==="open"?"เปิดรับคะแนน":te.status==="closed"?"ปิดรับคะแนน":"ยังไม่เปิด"}</span></div>
        <input data-session-name="${te.id}" value="${re(te.name)}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <input data-session-date="${te.id}" type="date" value="${te.event_date||""}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <div class="flex gap-2"><select data-session-status="${te.id}" class="flex-1 border rounded-lg px-2 py-1.5 text-sm"><option value="upcoming" ${te.status==="upcoming"?"selected":""}>ยังไม่เปิด</option><option value="open" ${te.status==="open"?"selected":""}>เปิดรับคะแนน</option><option value="closed" ${te.status==="closed"?"selected":""}>ปิดรับคะแนน</option></select><button type="button" data-session-save="${te.id}" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold">บันทึก</button></div>
      </div>`).join("")}</div></div>`,O=()=>`<section class="bg-white border rounded-2xl p-5">
      <div class="mb-4"><h2 class="font-bold">⚙️ ตั้งค่าการประเมิน</h2><p class="text-xs text-gray-500 mt-1">จัดการหัวข้อ/คะแนนเต็ม และมอบหมายครูผู้ประเมิน</p></div>
      ${P()}
      <div class="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 class="font-bold text-sm mb-3">📋 หัวข้อเกณฑ์การประเมิน</h3>
          ${q()}
          <div class="grid sm:grid-cols-4 gap-2 mt-3">
            <select id="crit-new-category" class="border rounded-xl px-3 py-2 text-sm">
              <option value="parade">🕌 ขบวนพาเหรด/ความร่วมมือสี</option>
              <option value="color_eval">🎨 วันเข้าสีเดิม</option>
              <option value="page">📣 หน้าเว็บเพจ</option>
              <option value="sports_day">🏟️ วันกีฬาสีจริง</option>
            </select>
            <select id="crit-new-session" class="border rounded-xl px-3 py-2 text-sm sm:col-span-4">
              <option value="">-- เลือกรอบ/วัน (จำเป็นสำหรับวันเข้าสีและวันกีฬาสีจริง) --</option>
              ${(m||[]).filter(Q=>Q.session_type==="color_day"||Q.session_type==="sports_day").sort((Q,te)=>(Q.session_type+Q.day_no).localeCompare(te.session_type+te.day_no)).map(Q=>`<option value="${Q.id}">${re(Q.name)}</option>`).join("")}
            </select>
            <input id="crit-new-name" placeholder="ชื่อหัวข้อ" class="border rounded-xl px-3 py-2 text-sm sm:col-span-2">
            <input id="crit-new-max" type="number" min="1" value="10" class="border rounded-xl px-3 py-2 text-sm" placeholder="คะแนนเต็ม">
          </div>
          <button id="crit-new-add" type="button" class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">➕ เพิ่มหัวข้อ</button>
        </div>
        <div>
          <h3 class="font-bold text-sm mb-3">🧑‍⚖️ ผู้ประเมิน (${$.length} รายการ)</h3>
          <div class="max-h-64 overflow-y-auto mb-3">${F()}</div>
          <div id="eval-teacher-picker-wrap" class="mb-2"></div>
          <div class="flex flex-wrap gap-3 mb-2 text-xs font-bold">
            <label class="flex items-center gap-1.5"><input type="checkbox" data-eval-cat="parade">🕌 ขบวนพาเหรด/ความร่วมมือสี</label>
            <label class="flex items-center gap-1.5"><input type="checkbox" data-eval-cat="color_eval">🎨 วันเข้าสีเดิม</label>
            <label class="flex items-center gap-1.5"><input type="checkbox" data-eval-cat="page">📣 หน้าเว็บเพจ</label>
            <label class="flex items-center gap-1.5"><input type="checkbox" data-eval-cat="sports_day">🏟️ วันกีฬาสีจริง</label>
          </div>
          <input id="eval-role-label" placeholder="ตำแหน่ง เช่น หัวหน้า/ผู้ช่วย (ไม่บังคับ)" class="border rounded-xl px-3 py-2 text-sm w-full mb-2">
          <button id="eval-add-btn" type="button" class="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold">➕ เพิ่มผู้ประเมิน</button>
        </div>
      </div>
    </section>`,V=Q=>(r||[]).filter(te=>te.category===Q).reduce((te,ue)=>te+(Number(ue.max_score)||0),0),W=V("parade")||100,A=V("page")||100,U=V("color_eval")||100,Y=new Map((a||[]).map(Q=>[Q.team_color_id,Q])),J=Q=>(r||[]).map(te=>{const ue=(p||[]).filter(ne=>ne.criteria_id===te.id&&ne.team_color_id===Q).map(ne=>Number(ne.score)),ce=ue.length?Math.round(ue.reduce((ne,se)=>ne+se,0)/ue.length*100)/100:0;return{crit:te,avg:ce,count:ue.length}}).filter(te=>te.count>0),K=(Q,te,ue)=>`<div class="space-y-1"><div class="flex justify-between text-xs text-gray-500"><span>${re(Q)}</span><span class="font-bold text-gray-700">${Number(te).toLocaleString("th-TH")} / ${Number(ue).toLocaleString("th-TH")}</span></div><div class="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-indigo-500 rounded-full" style="width:${ue?Math.min(100,te/ue*100):0}%"></div></div></div>`,ae=()=>{const Q=(m||[]).filter(se=>se.session_type==="sports_day").sort((se,fe)=>se.day_no-fe.day_no);if(!Q.length)return"";const te=(r||[]).filter(se=>se.category==="sports_day"),ue=(se,fe)=>te.filter(Se=>Se.session_id===fe).reduce((Se,ke)=>{const $e=(p||[]).filter(ye=>ye.criteria_id===ke.id&&ye.team_color_id===se).map(ye=>Number(ye.score)).filter(Number.isFinite);return Se+($e.length?$e.reduce((ye,Te)=>ye+Te,0)/$e.length:0)},0),ce=se=>te.filter(fe=>fe.session_id===se).reduce((fe,Se)=>fe+Number(Se.max_score||0),0),ne=(u||[]).filter(se=>se.gender===S).map((se,fe)=>{const Se=Q.map(Te=>ue(se.id,Te.id)),ke=Q.map(ce),$e=D==="cumulative"?Se.reduce((Te,_e)=>Te+_e,0):Se[Number(D)-1]||0,ye=D==="cumulative"?ke.reduce((Te,_e)=>Te+_e,0):ke[Number(D)-1]||0;return{c:se,name:(S==="W"?Ct:Lt)[fe]||se.name,total:$e,max:ye,values:Se}}).sort((se,fe)=>fe.total-se.total);return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><h2 class="font-bold">🏟️ สรุปวันกีฬาสีจริง</h2><p class="text-xs text-gray-500 mt-1">คะแนนเฉลี่ยจากผู้ประเมิน แยกวันและสะสม 4 วัน</p></div>
          <div class="flex flex-wrap gap-1">${Q.map(se=>`<button type="button" data-summary-sports-day="${se.day_no}" class="px-3 py-1.5 rounded-lg text-xs font-bold ${D===String(se.day_no)?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">วันที่ ${se.day_no}</button>`).join("")}<button type="button" data-summary-sports-day="cumulative" class="px-3 py-1.5 rounded-lg text-xs font-bold ${D==="cumulative"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">สะสม</button></div>
        </div>
        <div class="space-y-2">${ne.map((se,fe)=>`<div class="flex items-center gap-3 rounded-xl border p-3"><span class="w-7 text-center font-bold text-gray-400">#${fe+1}</span><span class="flex-1 font-bold">สี${re(se.name)}</span><span class="font-black">${se.total.toFixed(2)} / ${se.max}</span></div>`).join("")}</div>
      </section>`},X=()=>{const Q=(u||[]).filter(ce=>ce.gender===S),te=S==="W"?Ct:Lt,ue=Q.map((ce,ne)=>{const se=te[ne]||ce.name,fe=Y.get(ce.id)||{};return{c:ce,canonicalName:se,t:fe,grand:Number(fe.grand_total)||0}}).sort((ce,ne)=>ne.grand-ce.grand);return`${ae()}${Td((a||[]).filter(ce=>ce.gender===S),null,S)}<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div><h2 class="font-bold">🏅 สรุปคะแนนทุกสี</h2><p class="text-xs text-gray-500 mt-1">รวมคะแนนกรรมการ + กีฬา + พื้นบ้าน/ทักษะ + อีบาดัต + เหรียญรางวัล ข้อมูลเดียวกับระบบกีฬาสีหลัก อัปเดตสด</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-sum-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${S==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-sum-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${S==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        <div class="space-y-3">
          ${ue.map((ce,ne)=>{const se=ka[ce.canonicalName]||ce.c.hex_color||"#94a3b8",fe=re(ce.canonicalName.slice(0,1)),Se=j===ce.c.id,ke=J(ce.c.id);return`<div class="rounded-2xl border overflow-hidden">
              <button type="button" data-toggle-expand="${ce.c.id}" class="w-full flex items-center justify-between gap-3 p-3.5" style="background:${re(se)}14">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="w-6 text-center font-bold text-sm text-gray-400 flex-shrink-0">#${ne+1}</span>
                  ${ce.c.logo_url?`<img data-color-logo src="${re(ce.c.logo_url)}" class="w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${re(se)}"><div data-color-logo-fallback class="hidden w-10 h-10 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${re(se)}">${fe}</div>`:`<div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${re(se)}">${fe}</div>`}
                  <b class="text-sm truncate" style="color:${re(se)}">สี${re(ce.canonicalName)}</b>
                </div>
                <div class="flex items-center gap-3 flex-shrink-0">
                  <span class="px-3.5 py-1.5 rounded-xl bg-gray-900 text-yellow-400 font-black text-sm">${ce.grand.toLocaleString("th-TH")}</span>
                  <span class="text-gray-400">${Se?"▲":"▼"}</span>
                </div>
              </button>
              ${Se?`<div class="p-4 border-t bg-gray-50 space-y-4">
                <div class="grid sm:grid-cols-2 gap-3">
                  ${K("🕌 พาเหรด/ความร่วมมือสี",Number(ce.t.parade_total)||0,W)}
                  ${K("📣 หน้าเว็บเพจ",Number(ce.t.page_total)||0,A)}
                  ${K("🎨 วันเข้าสี/วันกีฬาสีจริง",Number(ce.t.color_eval_total)||0,U)}
                  ${K("🧹 วิชาการสะสม",Number(ce.t.academic_total)||0,100)}
                  ${K("🏃 กีฬาสากล + กรีฑา",Number(ce.t.sports_total)||0,150)}
                  ${K("🎯 พื้นบ้าน / ทักษะ",Number(ce.t.folk_skill_total)||0,150)}
                  ${K("🕋 อีบาดัต",Number(ce.t.ibadat_total)||0,100)}
                </div>
                <div class="flex flex-wrap gap-2 text-xs font-bold">
                  <span class="px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700">🥇 ทอง ${Number(ce.t.gold_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">🥈 เงิน ${Number(ce.t.silver_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700">🥉 ทองแดง ${Number(ce.t.bronze_count)||0}</span>
                </div>
                <div class="border-t pt-3">
                  <p class="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">รายละเอียดคะแนนแยกหัวข้อ (เฉลี่ยจากผู้ประเมินทุกคน)</p>
                  ${ke.length?`<div class="space-y-1.5">${ke.map($e=>{var ye;return`<div class="flex items-center justify-between gap-2 bg-white border rounded-lg px-3 py-2"><span class="text-xs text-gray-600">${re(((ye=bt[$e.crit.category])==null?void 0:ye.split(" ")[0])||"")} ${re($e.crit.name)}</span><b class="text-xs">${$e.avg} / ${Number($e.crit.max_score)}</b></div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 text-center py-3">ยังไม่มีผู้ประเมินให้คะแนน</p>'}
                </div>
              </div>`:""}
            </div>`}).join("")}
        </div>
      </section>`},xe=M,ie=new Map;($||[]).forEach(Q=>{ie.has(Q.profile_id)||ie.set(Q.profile_id,new Set),ie.get(Q.profile_id).add(Q.category)});const G=[...[...ie.entries()].map(([Q,te])=>{var ue;return{name:((ue=xe.get(Q))==null?void 0:ue.full_name)||"ไม่พบชื่อ",source:"ครู ปพ.5",categories:[...te],judgeUsername:"pp5:"+Q}}),...(c||[]).map(Q=>({name:Q.name,source:"กรรมการ AZIZGAMES",categories:[Q.role==="colorEval"?"color_eval":Q.role],judgeUsername:Q.username}))],le=new Map;(p||[]).forEach(Q=>{le.has(Q.judge_username)||le.set(Q.judge_username,[]),le.get(Q.judge_username).push(Q)});const de=(u||[]).length||8,pe=(r||[]).map(Q=>{const te=(p||[]).filter(se=>se.criteria_id===Q.id),ue=new Set(te.map(se=>se.team_color_id)).size,ce=new Set(te.map(se=>se.judge_username)).size,ne=te.length?Math.round(te.reduce((se,fe)=>se+Number(fe.score),0)/te.length*100)/100:0;return{crit:Q,colorsScored:ue,judgesCount:ce,avg:ne,submitted:te.length}}),me=()=>`<section class="bg-white border rounded-2xl p-5 space-y-6">
      <div>
        <h2 class="font-bold mb-1">🧑‍⚖️ สถานะผู้ประเมิน</h2>
        <p class="text-xs text-gray-500 mb-3">ความครบถ้วนของแต่ละเกณฑ์ (${de} สี) และสถานะการส่งคะแนนของผู้ประเมินทุกคน</p>
        <div class="overflow-x-auto"><table class="w-full text-sm">
          <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left">หัวข้อ</th><th class="p-2 text-center">สีที่มีคะแนน</th><th class="p-2 text-center">ผู้ประเมิน</th><th class="p-2 text-center">เฉลี่ย</th></tr></thead>
          <tbody>${pe.map(Q=>{var te;return`<tr class="border-b"><td class="p-2">${re(((te=bt[Q.crit.category])==null?void 0:te.split(" ")[0])||"")} ${re(Q.crit.name)}</td><td class="p-2 text-center ${Q.colorsScored<de?"text-amber-600 font-bold":"text-emerald-600 font-bold"}">${Q.colorsScored}/${de}</td><td class="p-2 text-center">${Q.judgesCount}</td><td class="p-2 text-center font-bold">${Q.submitted?Q.avg+" / "+Number(Q.crit.max_score):"—"}</td></tr>`}).join("")||'<tr><td colspan="4" class="p-6 text-center text-gray-400">ยังไม่มีหัวข้อเกณฑ์ในระบบ</td></tr>'}</tbody>
        </table></div>
      </div>
      <div>
        <h3 class="font-bold text-sm mb-3">รายชื่อผู้ประเมิน (${G.length} คน)</h3>
        <div class="space-y-2">${G.map(Q=>{const te=le.get(Q.judgeUsername)||[],ue=te.length,ce=ue?te.reduce((ne,se)=>se.updated_at>ne?se.updated_at:ne,te[0].updated_at):null;return`<div class="flex items-center justify-between gap-3 bg-gray-50 rounded-xl p-3"><div class="min-w-0"><b class="text-sm block truncate">${re(Q.name)}</b><p class="text-xs text-gray-500 mt-0.5">${re(Q.source)} · ${Q.categories.map(ne=>re(bt[ne]||ne)).join(", ")}</p></div><div class="text-right flex-shrink-0"><span class="px-3 py-1 rounded-full text-xs font-bold ${ue?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-400"}">${ue?ue+" รายการ":"ยังไม่ส่งคะแนน"}</span>${ce?`<p class="text-[10px] text-gray-400 mt-1">ล่าสุด ${new Date(ce).toLocaleDateString("th-TH",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}</p>`:""}</div></div>`}).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีผู้ประเมินในระบบ</p>'}</div>
      </div>
    </section>`,Z=()=>{if(_)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">⚠️</div><h2 class="font-bold text-gray-800">โหลดสรุปเช็คชื่อเข้าสีไม่สำเร็จ</h2><p class="text-xs text-gray-500 mt-2">กรุณารีเฟรชหน้า หรือตรวจสอบสิทธิ์ผู้ประเมินและการตั้งค่าปฏิทินกีฬาสี</p></section>';const Q=v.colors||[],te=[...new Map(pr(x).map(ye=>[ye.date,ye.label])).entries()].map(([ye,Te])=>({date:ye,label:Te})).sort((ye,Te)=>ye.date<Te.date?-1:1);if(!Q.length)return'<section class="bg-white border rounded-2xl p-8 text-center text-gray-400">ยังไม่มีข้อมูลสีในกิจกรรมนี้</section>';if(!te.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">📅</div><h2 class="font-bold text-gray-800">ยังไม่มีวันเข้าสีในปฏิทินปฏิบัติงาน</h2><p class="text-xs text-gray-500 mt-2">กรุณาตั้งวันเข้าสีหรือวันกีฬาสีจริงในปฏิทินก่อนดูเปอร์เซ็นต์</p></section>';const ue=Q.filter(ye=>k==="ALL"||ye.gender===k),ce=new Map((v.attendance||[]).map(ye=>[`${ye.team_color_id}|${ye.session_date}`,Number(ye.checked_count)||0])),ne=(ye,Te)=>Te?Math.round(ye*1e3/Te)/10:0,se=ye=>ye>=80?"text-emerald-600":ye>=50?"text-amber-600":"text-red-600",fe=ue.map(ye=>{const Te=Number(ye.member_count)||0,_e=te.map(Ie=>({checked:ce.get(`${ye.id}|${Ie.date}`)||0,total:Te,pct:ne(ce.get(`${ye.id}|${Ie.date}`)||0,Te)})),Le=_e.length?Math.round(_e.reduce((Ie,Ae)=>Ie+Ae.pct,0)/_e.length*10)/10:0;return{c:ye,total:Te,daily:_e,average:Le}}),Se=te.map((ye,Te)=>{const _e=fe.reduce((Ie,Ae)=>Ie+Ae.daily[Te].checked,0),Le=fe.reduce((Ie,Ae)=>Ie+Ae.total,0);return{checked:_e,total:Le,pct:ne(_e,Le)}}),ke=fe.reduce((ye,Te)=>ye+Te.total,0),$e=Se.length?Math.round(Se.reduce((ye,Te)=>ye+Te.pct,0)/Se.length*10)/10:0;return`<section class="bg-white border rounded-2xl p-5 space-y-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="font-bold">📷 สรุปเปอร์เซ็นต์การเช็คชื่อเข้าสี</h2><p class="text-xs text-gray-500 mt-1">คำนวณจากผู้ที่เช็คชื่อแล้ว ÷ สมาชิกทั้งหมดของสีนั้น แยกตามวันที่ตั้งไว้ในปฏิทินปฏิบัติงาน</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-attendance-gender="ALL" class="px-3 py-1.5 rounded-lg text-xs font-bold ${k==="ALL"?"bg-indigo-600 text-white":"text-gray-600"}">👥 ทุกสี</button>
            <button type="button" data-attendance-gender="M" class="px-3 py-1.5 rounded-lg text-xs font-bold ${k==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 สีชาย</button>
            <button type="button" data-attendance-gender="W" class="px-3 py-1.5 rounded-lg text-xs font-bold ${k==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 สีหญิง</button>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-3">
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 p-3"><p class="text-xs text-indigo-700">จำนวนสีที่แสดง</p><b class="text-2xl text-indigo-900">${fe.length}</b> <span class="text-xs text-indigo-700">สี</span></div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3"><p class="text-xs text-slate-600">สมาชิกตามสี</p><b class="text-2xl text-slate-900">${ke.toLocaleString("th-TH")}</b> <span class="text-xs text-slate-600">คน</span></div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 p-3"><p class="text-xs text-emerald-700">เฉลี่ยรวมทุกวัน</p><b class="text-2xl ${se($e)}">${$e}%</b></div>
        </div>
        <div class="overflow-x-auto border rounded-xl">
          <table class="w-full text-sm border-collapse min-w-[760px]">
            <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left sticky left-0 bg-gray-50 z-10">สี</th><th class="p-3 text-center whitespace-nowrap">สมาชิก</th>${te.map(ye=>`<th class="p-3 text-center whitespace-nowrap"><div>${re(ye.date)}</div><div class="text-[10px] font-normal text-gray-400">${re(ye.label||"")}</div></th>`).join("")}<th class="p-3 text-center whitespace-nowrap">เฉลี่ยรายวัน</th></tr></thead>
            <tbody>${fe.map(ye=>`<tr class="border-b"><td class="p-3 font-bold sticky left-0 bg-white z-10" style="color:${re(ye.c.hex_color||"#475569")}">สี${re(ye.c.name)}</td><td class="p-3 text-center text-gray-600">${ye.total}</td>${ye.daily.map(Te=>`<td class="p-3 text-center"><b class="${se(Te.pct)}">${Te.pct}%</b><div class="text-[10px] text-gray-400 mt-0.5">${Te.checked}/${Te.total}</div></td>`).join("")}<td class="p-3 text-center font-black ${se(ye.average)}">${ye.average}%</td></tr>`).join("")}</tbody>
            <tfoot><tr class="bg-gray-50 font-bold"><td class="p-3 sticky left-0 bg-gray-50 z-10">รวมตามวันที่</td><td class="p-3 text-center">${ke}</td>${Se.map(ye=>`<td class="p-3 text-center"><span class="${se(ye.pct)}">${ye.pct}%</span><div class="text-[10px] text-gray-500 mt-0.5">${ye.checked}/${ye.total}</div></td>`).join("")}<td class="p-3 text-center ${se($e)}">${$e}%</td></tr></tfoot>
          </table>
        </div>
        <p class="text-[11px] text-gray-400">หมายเหตุ: ตัวหารสมาชิกใช้หลักเดียวกับหน้า “ภาพรวมกีฬาสี” และนับการเช็คชื่อซ้ำของคนเดิมในวันเดียวเป็น 1 คน</p>
      </section>`},ve=[{key:"score",label:"📝 ให้คะแนน",show:!0},{key:"summary",label:"🏅 สรุปคะแนนทุกสี",show:!0},{key:"attendance",label:"📷 เช็คชื่อเข้าสี (%)",show:h},{key:"status",label:"🧑‍⚖️ สถานะผู้ประเมิน",show:l},{key:"settings",label:"⚙️ ตั้งค่า",show:l}].filter(Q=>Q.show);let he=B.length?"score":l?"status":"summary";const ge=()=>{var Q,te,ue,ce;e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
        <div><h1 class="text-2xl font-bold">🧑‍⚖️ ประเมินกีฬาสี</h1><p class="text-sm text-gray-500">ให้คะแนน ดูสรุปผล และติดตามสถานะผู้ประเมิน ทุกอย่างในหน้าเดียว</p></div>
        <div class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">${ve.map(ne=>`<button type="button" data-eval-main-tab="${ne.key}" class="px-4 py-2 rounded-lg text-sm font-bold transition ${he===ne.key?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}">${ne.label}</button>`).join("")}</div>
        <div id="eval-tab-body">${he==="score"?z():he==="summary"?X():he==="attendance"?Z():he==="status"?me():O()}</div>
      </div>`,e.querySelectorAll("[data-eval-main-tab]").forEach(ne=>ne.onclick=()=>{he=ne.dataset.evalMainTab,ge()}),e.querySelectorAll("[data-eval-gender]").forEach(ne=>ne.onclick=()=>{if(L)return be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนกลุ่มสี","warning");i=ne.dataset.evalGender,g=null,ge()}),e.querySelectorAll("[data-eval-cattab]").forEach(ne=>ne.onclick=()=>{if(L)return be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนหัวข้อ","warning");y=ne.dataset.evalCattab,g=null,ge()}),e.querySelectorAll("[data-color-logo]").forEach(ne=>ne.onerror=()=>{ne.classList.add("hidden");const se=ne.nextElementSibling;se==null||se.classList.remove("hidden"),se==null||se.classList.add("flex")}),(Q=e.querySelector("#eval-session-select"))==null||Q.addEventListener("change",ne=>{if(L)return ne.target.value=E||"",be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนรอบ","warning");E=ne.target.value,g=null,ge()}),e.querySelectorAll("[data-eval-color]").forEach(ne=>ne.onclick=()=>{if(L)return be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนสลับสี","warning");g=ne.dataset.evalColor,ge()}),e.querySelectorAll("[data-score-input]").forEach(ne=>ne.addEventListener("input",()=>{const se=ne.value.trim();se!==""&&(Number(se)<0||Number(se)>Number(ne.max))&&(ne.value=Math.max(0,Math.min(Number(ne.max),Number(se)||0))),L=!0})),(te=e.querySelector("#eval-submit"))==null||te.addEventListener("click",async()=>{const ne=[];if(e.querySelectorAll("[data-score-input]").forEach(ke=>{const $e=String(ke.value).trim();if($e==="")return;const ye=w.get(ke.dataset.crit);ne.push({event_id:s.id,criteria_id:ke.dataset.crit,team_color_id:ke.dataset.color,session_id:(ye==null?void 0:ye.session_id)||null,judge_username:o,score:Number($e),updated_at:new Date().toISOString()})}),!ne.length)return be("กรุณากรอกคะแนนอย่างน้อย 1 ช่อง","error");const se=(m||[]).find(ke=>ke.id===E);if((se==null?void 0:se.status)==="closed"&&!l)return be("รอบนี้ปิดรับคะแนนแล้ว","error");const fe=e.querySelector("#eval-submit");fe.disabled=!0,fe.textContent="กำลังบันทึก...";const{error:Se}=await oe.from("sports_score_entries").upsert(ne,{onConflict:"criteria_id,team_color_id,judge_username"});if(fe.disabled=!1,fe.textContent="💾 บันทึกคะแนนประเมิน",Se)return be(Se.message,"error");ne.forEach(ke=>C.set(`${ke.criteria_id}|${ke.team_color_id}|${ke.session_id||""}`,ke.score)),L=!1,be("บันทึกคะแนนประเมินแล้ว"),ge()}),he==="summary"&&(e.querySelectorAll("[data-sum-gender]").forEach(ne=>ne.onclick=()=>{S=ne.dataset.sumGender,j=null,ge()}),e.querySelectorAll("[data-toggle-expand]").forEach(ne=>ne.onclick=()=>{const se=ne.dataset.toggleExpand;j=j===se?null:se,ge()}),e.querySelectorAll("[data-summary-sports-day]").forEach(ne=>ne.onclick=()=>{D=ne.dataset.summarySportsDay,ge()})),he==="attendance"&&e.querySelectorAll("[data-attendance-gender]").forEach(ne=>ne.onclick=()=>{k=ne.dataset.attendanceGender,ge()}),!(he!=="settings"||!l)&&(R=$d({wrap:e.querySelector("#eval-teacher-picker-wrap"),items:b.map(ne=>({id:ne.profile_id,label:ne.full_name,sub:ne.teacher_code,photo:ne.image_url})),placeholder:"พิมพ์ชื่อครู...",emptyLabel:"-- เลือกครูผู้ประเมิน --",photoClass:"w-7 h-9 rounded object-cover flex-shrink-0 border"}),e.querySelectorAll("[data-session-save]").forEach(ne=>ne.addEventListener("click",async()=>{var ke,$e,ye;const se=ne.dataset.sessionSave,fe={name:(ke=e.querySelector(`[data-session-name="${se}"]`))==null?void 0:ke.value.trim(),event_date:(($e=e.querySelector(`[data-session-date="${se}"]`))==null?void 0:$e.value)||null,status:(ye=e.querySelector(`[data-session-status="${se}"]`))==null?void 0:ye.value,updated_at:new Date().toISOString()};if(!fe.name)return be("กรุณาระบุชื่อวัน","error");const{error:Se}=await oe.from("sports_evaluation_sessions").update(fe).eq("id",se);if(Se)return be(Se.message,"error");be("บันทึกวันกีฬาสีแล้ว"),ot()})),(ue=e.querySelector("#crit-new-add"))==null||ue.addEventListener("click",async()=>{const ne=e.querySelector("#crit-new-category").value,se=e.querySelector("#crit-new-session").value||null,fe=e.querySelector("#crit-new-name").value.trim(),Se=Number(e.querySelector("#crit-new-max").value);if(!fe||!Se||Se<=0)return be("กรอกชื่อหัวข้อและคะแนนเต็มให้ครบ","error");if((ne==="color_eval"||ne==="sports_day")&&!se)return be("กรุณาเลือกรอบ/วันที่ของหัวข้อนี้","error");const ke=(r||[]).filter(ye=>ye.category===ne).length,{error:$e}=await oe.from("sports_score_criteria").insert({event_id:s.id,category:ne,session_id:se,name:fe,max_score:Se,display_order:ke});if($e)return be($e.message,"error");be("เพิ่มหัวข้อแล้ว"),ot()}),e.querySelectorAll("[data-crit-edit]").forEach(ne=>ne.addEventListener("click",()=>{const se=e.querySelector(`[data-crit-row="${ne.dataset.critEdit}"]`),fe=w.get(ne.dataset.critEdit);se.innerHTML=`<input data-edit-name value="${re(fe.name)}" class="flex-1 border rounded-lg px-2 py-1.5 text-xs"><input data-edit-max type="number" min="1" value="${Number(fe.max_score)}" class="w-20 border rounded-lg px-2 py-1.5 text-xs"><button type="button" data-edit-save class="px-2 py-1 text-xs bg-emerald-600 text-white rounded-lg">บันทึก</button><button type="button" data-edit-cancel class="px-2 py-1 text-xs border rounded-lg">ยกเลิก</button>`,se.querySelector("[data-edit-cancel]").onclick=()=>ge(),se.querySelector("[data-edit-save]").onclick=async()=>{const Se=se.querySelector("[data-edit-name]").value.trim(),ke=Number(se.querySelector("[data-edit-max]").value);if(!Se||!ke||ke<=0)return be("กรอกข้อมูลให้ครบ","error");const{error:$e}=await oe.from("sports_score_criteria").update({name:Se,max_score:ke}).eq("id",fe.id);if($e)return be($e.message,"error");be("แก้ไขแล้ว"),ot()}})),e.querySelectorAll("[data-crit-del]").forEach(ne=>ne.addEventListener("click",async()=>{if(!confirm("ลบหัวข้อนี้? คะแนนที่เคยให้ไว้ในหัวข้อนี้จะไม่ถูกนับต่อ"))return;const{error:se}=await oe.from("sports_score_criteria").delete().eq("id",ne.dataset.critDel);if(se)return be(se.message,"error");be("ลบหัวข้อแล้ว"),ot()})),(ce=e.querySelector("#eval-add-btn"))==null||ce.addEventListener("click",async()=>{const ne=R==null?void 0:R.getValue();if(!ne)return be("เลือกครูก่อน","error");const se=[...e.querySelectorAll("[data-eval-cat]:checked")].map($e=>$e.dataset.evalCat);if(!se.length)return be("เลือกอย่างน้อย 1 หมวด","error");const fe=e.querySelector("#eval-role-label").value.trim()||null,Se=se.map($e=>({event_id:s.id,profile_id:ne,category:$e,role_label:fe})),{error:ke}=await oe.from("sports_score_evaluators").insert(Se);if(ke)return ke.code==="23505"?be("มีบางหมวดที่มอบหมายให้ครูคนนี้ไว้แล้ว","error"):be(ke.message,"error");be("เพิ่มผู้ประเมินแล้ว"),ot()}),e.querySelectorAll("[data-eval-del]").forEach(ne=>ne.addEventListener("click",async()=>{if(!confirm("ลบสิทธิ์ประเมินรายการนี้?"))return;const{error:se}=await oe.from("sports_score_evaluators").delete().eq("id",ne.dataset.evalDel);if(se)return be(se.message,"error");be("ลบแล้ว"),ot()})))};ge()}catch(s){console.error(s),e.innerHTML=kt()}}async function lt(e="ชาย"){var t,n,l,o,u;const s=$t();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:r,cfg:d}=await St(),p=await Gs(oe),{data:a}=await oe.from("profiles").select("role,is_also_admin").eq("id",p.id).maybeSingle();if(!((a==null?void 0:a.role)==="admin"||(a==null?void 0:a.is_also_admin)===!0)){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:v,error:x},{data:_},{data:h}]=await Promise.all([oe.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",r.id).eq("gender",e).order("design_no"),oe.from("sports_shirt_vote_managers").select("*,teachers(full_name,teacher_code)").eq("event_id",r.id),oe.from("teachers").select("id,teacher_code,full_name,dept,profile_id").not("profile_id","is",null).order("full_name")]);if(x)throw x;(v||[]).forEach(w=>{w.sports_shirt_design_colors=(w.sports_shirt_design_colors||[]).sort((C,T)=>C.display_order-T.display_order)});let $=[];const b=w=>w?new Date(w).toISOString().slice(0,16):"",c=(v||[]).map(w=>`
      <div class="border rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between"><b>แบบที่ ${w.design_no}</b>${w.html_url?'<span class="text-[10px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">มี 3 มิติ</span>':""}</div>
        <input data-design-name="${w.id}" value="${re(w.name||"")}" placeholder="ชื่อแบบ" class="w-full border rounded-lg px-2 py-1.5 text-xs">
        <label class="block text-[10px] text-gray-400">ไฟล์ HTML 3 มิติ (ออปชัน ใช้ร่วมทุกสี)</label>
        <input data-design-html="${w.id}" type="file" accept="text/html,.html" class="w-full text-xs">
        <div class="grid grid-cols-2 gap-2 pt-1">
          ${(w.sports_shirt_design_colors||[]).map(C=>`
            <div class="border rounded-xl p-2">
              <div data-color-preview="${C.id}">${C.image_url?`<img src="${re(C.image_url)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`:'<div class="w-full h-20 bg-gray-50 rounded-lg border grid place-items-center text-gray-300 text-xl mb-1">👕</div>'}</div>
              <p class="text-[10px] font-bold text-gray-600 text-center mb-1">สี${re(C.color_name)}</p>
              <input data-color-image="${C.id}" data-color-design="${w.id}" type="file" accept="image/png,image/jpeg,image/webp" class="w-full text-[10px]">
            </div>
          `).join("")}
        </div>
        <button data-design-save="${w.id}" class="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold mt-1">บันทึกแบบที่ ${w.design_no}</button>
      </div>
    `).join(""),M=(_||[]).map(w=>{var C,T;return`<tr class="border-t"><td class="p-3">${re(((C=w.teachers)==null?void 0:C.full_name)||"ไม่พบชื่อ")}${(T=w.teachers)!=null&&T.teacher_code?` (${re(w.teachers.teacher_code)})`:""}</td><td class="p-3 text-right"><button data-vote-manager-remove="${w.id}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button></td></tr>`}).join("")||'<tr><td colspan="2" class="p-6 text-center text-gray-400">ยังไม่มีครูที่ได้รับสิทธิ์เพิ่ม</td></tr>';s.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <h1 class="text-2xl font-bold">🗳️ ตั้งค่าโหวตแบบเสื้อกีฬาสี</h1>
      <div class="bg-white border rounded-2xl p-5">
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">เปิดโหวตตั้งแต่</label><input id="vote-opens-at" type="datetime-local" value="${b(d==null?void 0:d.shirt_vote_opens_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ปิดโหวตเมื่อ</label><input id="vote-closes-at" type="datetime-local" value="${b(d==null?void 0:d.shirt_vote_closes_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-window-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกช่วงเวลาโหวต (ใช้ร่วมกันทั้งชาย-หญิง)</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">🌐 โหมดโหวตสาธารณะ (ไม่ต้องล็อกอิน)</h3>
        <p class="text-xs text-gray-500 mb-3">เปิดหน้าแยกให้นักเรียนกรอกรหัสนักเรียนเข้าโหวตได้โดยไม่ต้องล็อกอิน ปพ.5 — เหมาะกับจุดโหวตหน้างาน (kiosk) เข้าที่ <code>shirt-vote-public.html</code></p>
        <div class="mb-3">${yt("shirt_vote_public_enabled","เปิดโหมดโหวตไม่ล็อกอิน","นักเรียนกรอกรหัสนักเรียนแล้วเข้าโหวตได้ทันที",!!(d!=null&&d.shirt_vote_public_enabled))}</div>
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปคู่มือการเริ่มใช้งาน</label><input id="vote-public-tutorial-url" value="${re((d==null?void 0:d.shirt_vote_tutorial_url)||"")}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปแนะนำ ปพ.5</label><input id="vote-public-intro-url" value="${re((d==null?void 0:d.shirt_vote_intro_url)||"")}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-public-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกโหมดโหวตสาธารณะ</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="ชาย"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👦 ชาย</button>
          <button data-vote-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="หญิง"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👧 หญิง</button>
        </div>
        <div class="grid md:grid-cols-2 gap-4">${c}</div>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">👤 มอบสิทธิ์ครูดูแดชบอร์ดผลโหวต</h3>
        <div class="flex gap-2 mb-3"><input id="vote-manager-code-input" class="flex-1 border rounded-xl px-3 py-2 text-sm" placeholder="กรอกรหัสครู เช่น 1087, 1092"><button id="vote-manager-search" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">ค้นหา</button></div>
        <div id="vote-manager-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4"><div id="vote-manager-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div><button id="vote-manager-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันมอบสิทธิ์</button></div>
        <div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ครู</th><th></th></tr></thead><tbody>${M}</tbody></table></div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-gender]").forEach(w=>w.addEventListener("click",()=>lt(w.dataset.voteGender))),s.querySelectorAll("[data-color-image]").forEach(w=>w.addEventListener("change",()=>{var H;const C=(H=w.files)==null?void 0:H[0];if(!C)return;const T=s.querySelector(`[data-color-preview="${w.dataset.colorImage}"]`);T&&(T.innerHTML=`<img src="${URL.createObjectURL(C)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`)})),(t=s.querySelector("#vote-window-save"))==null||t.addEventListener("click",async()=>{var H,B;const w=(H=s.querySelector("#vote-opens-at"))==null?void 0:H.value,C=(B=s.querySelector("#vote-closes-at"))==null?void 0:B.value,{error:T}=await oe.from("sports_portal_settings").update({shirt_vote_opens_at:w?new Date(w).toISOString():null,shirt_vote_closes_at:C?new Date(C).toISOString():null,updated_at:new Date().toISOString()}).eq("event_id",r.id);if(T)return be(T.message,"error");be("บันทึกช่วงเวลาโหวตแล้ว"),lt(e)}),s.querySelectorAll('[data-cfg="shirt_vote_public_enabled"]').forEach(w=>w.addEventListener("click",()=>{const C=w.dataset.enabled!=="true";w.dataset.enabled=C?"true":"false",w.textContent=C?"ปิดใช้งาน":"เปิดใช้งาน"})),(n=s.querySelector("#vote-public-save"))==null||n.addEventListener("click",async()=>{var H,B,f,i;const w=s.querySelector('[data-cfg="shirt_vote_public_enabled"]'),C={shirt_vote_public_enabled:(w==null?void 0:w.dataset.enabled)==="true",shirt_vote_tutorial_url:((B=(H=s.querySelector("#vote-public-tutorial-url"))==null?void 0:H.value)==null?void 0:B.trim())||null,shirt_vote_intro_url:((i=(f=s.querySelector("#vote-public-intro-url"))==null?void 0:f.value)==null?void 0:i.trim())||null,updated_at:new Date().toISOString()},{error:T}=await oe.from("sports_portal_settings").update(C).eq("event_id",r.id);if(T)return be(T.message,"error");be("บันทึกโหมดโหวตสาธารณะแล้ว"),lt(e)}),s.querySelectorAll("[data-design-save]").forEach(w=>w.addEventListener("click",async()=>{var B,f,i,y,E,g;const C=w.dataset.designSave,T=((f=(B=s.querySelector(`[data-design-name="${C}"]`))==null?void 0:B.value)==null?void 0:f.trim())||null,H=(y=(i=s.querySelector(`[data-design-html="${C}"]`))==null?void 0:i.files)==null?void 0:y[0];w.disabled=!0,w.textContent="กำลังบันทึก...";try{const L={name:T,updated_at:new Date().toISOString()};H&&(L.html_url=await Jo(C,H));const{error:S}=await oe.from("sports_shirt_designs").update(L).eq("id",C);if(S)throw S;const j=s.querySelectorAll(`[data-color-design="${C}"]`);for(const D of j){const k=(E=D.files)==null?void 0:E[0];if(!k)continue;const I=D.dataset.colorImage,R=await Qo(C,I,k),{error:z}=await oe.from("sports_shirt_design_colors").update({image_url:R,updated_at:new Date().toISOString()}).eq("id",I);if(z)throw z}be("บันทึกแบบเสื้อแล้ว"),lt(e)}catch(L){be(L.message,"error"),w.disabled=!1,w.textContent=`บันทึกแบบที่ ${((g=(v||[]).find(S=>S.id===C))==null?void 0:g.design_no)||""}`}})),(l=s.querySelector("#vote-manager-search"))==null||l.addEventListener("click",()=>{var B;const w=String(((B=s.querySelector("#vote-manager-code-input"))==null?void 0:B.value)||"").split(/[\s,]+/).map(f=>f.trim()).filter(Boolean);if(!w.length)return be("กรุณากรอกรหัสครู","error");const C=new Set(w.map(String));if($=(h||[]).filter(f=>C.has(String(f.teacher_code))),!$.length)return be("ไม่พบรหัสครูที่ตรงกัน","error");const T=s.querySelector("#vote-manager-preview"),H=s.querySelector("#vote-manager-preview-cards");T.classList.remove("hidden"),H.innerHTML=$.map(f=>`<div class="bg-white rounded-xl border border-indigo-100 p-3"><p class="font-bold text-gray-800 text-xs">${re(f.full_name)}</p><p class="text-[10px] text-gray-400">รหัสครู ${re(f.teacher_code)} · กลุ่มสาระ ${re(f.dept||"—")}</p></div>`).join("")}),(o=s.querySelector("#vote-manager-code-input"))==null||o.addEventListener("keydown",w=>{var C;w.key==="Enter"&&(w.preventDefault(),(C=s.querySelector("#vote-manager-search"))==null||C.click())}),(u=s.querySelector("#vote-manager-add"))==null||u.addEventListener("click",async()=>{if(!$.length)return be("กรุณาค้นหารายชื่อก่อน","error");const w=$.map(T=>({event_id:r.id,teacher_id:T.id,profile_id:T.profile_id,granted_by:null})),{error:C}=await oe.from("sports_shirt_vote_managers").upsert(w,{onConflict:"event_id,teacher_id"});if(C)return be(C.message,"error");be(`มอบสิทธิ์แล้ว ${w.length} คน`),lt(e)}),s.querySelectorAll("[data-vote-manager-remove]").forEach(w=>w.addEventListener("click",async()=>{const{error:C}=await oe.from("sports_shirt_vote_managers").delete().eq("id",w.dataset.voteManagerRemove);if(C)return be(C.message,"error");be("ปิดสิทธิ์แล้ว"),lt(e)}))}catch(r){console.error(r),s.innerHTML=kt()}}async function xr(e="ชาย"){const s=$t();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:t}=await St(),n=await Gs(oe),{data:l}=await oe.from("profiles").select("role,is_also_admin").eq("id",n.id).maybeSingle(),o=(l==null?void 0:l.role)==="admin"||(l==null?void 0:l.is_also_admin)===!0,{data:u}=await oe.from("sports_shirt_vote_managers").select("id").eq("event_id",t.id).eq("profile_id",n.id).maybeSingle();if(!o&&!u){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:r,error:d},p]=await Promise.all([oe.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",t.id).eq("gender",e).order("design_no"),na("sports_shirt_votes",c=>c.select("design_id").eq("event_id",t.id))]);if(d)throw d;const a=new Set((r||[]).map(c=>c.id)),m={};(p||[]).forEach(c=>{a.has(c.design_id)&&(m[c.design_id]=(m[c.design_id]||0)+1)});const v=Object.values(m).reduce((c,M)=>c+M,0),x=Math.max(0,...(r||[]).map(c=>m[c.id]||0)),_=[...r||[]].sort((c,M)=>(m[M.id]||0)-(m[c.id]||0)),h=c=>c===0?"🥇":c===1?"🥈":c===2?"🥉":`#${c+1}`,$={},b=_.map((c,M)=>{const w=m[c.id]||0,C=v?Math.round(w/v*100):0,T=(c.sports_shirt_design_colors||[]).filter(f=>f.image_url);$[c.id]=T.length?Math.floor(Math.random()*T.length):0;const H=T[$[c.id]]||null;return`
        <div class="flex items-center gap-4 p-3 rounded-2xl ${w>0&&w===x?"bg-indigo-50/60":""}">
          <span class="w-8 text-center text-sm font-bold text-gray-400 flex-shrink-0">${h(M)}</span>
          <div class="relative flex-shrink-0">
            ${H!=null&&H.image_url?`<img data-shirt-dash-img="${c.id}" src="${re(H.image_url)}" class="w-14 h-14 object-contain bg-gray-50 rounded-xl border">`:'<div class="w-14 h-14 bg-gray-50 rounded-xl border grid place-items-center text-gray-300 text-xl">👕</div>'}
            ${T.length>1?`<button data-shirt-dash-swap="${c.id}" class="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center text-[11px]" title="สลับสี">🔄</button>`:""}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-700 truncate mb-1">${re(c.name||`แบบที่ ${c.design_no}`)}</p>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden"><div class="bg-indigo-500 h-full rounded-full transition-all" style="width:${C}%"></div></div>
              <span class="w-24 text-xs text-right text-gray-500 flex-shrink-0">${w} คน (${C}%)</span>
            </div>
          </div>
        </div>
      `}).join("");s.innerHTML=`<div class="max-w-3xl mx-auto space-y-5">
      <div class="flex items-center justify-between"><h1 class="text-2xl font-bold">📊 ผลโหวตแบบเสื้อกีฬาสี</h1><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">โหวตแล้ว ${v} คน</span></div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-dash-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="ชาย"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👦 ชาย</button>
          <button data-vote-dash-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="หญิง"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👧 หญิง</button>
        </div>
        <div class="divide-y divide-gray-50">${b||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีแบบเสื้อของเพศนี้</p>'}</div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-dash-gender]").forEach(c=>c.addEventListener("click",()=>xr(c.dataset.voteDashGender))),s.querySelectorAll("[data-shirt-dash-swap]").forEach(c=>c.addEventListener("click",()=>{const M=c.dataset.shirtDashSwap,w=(r||[]).find(H=>H.id===M),C=((w==null?void 0:w.sports_shirt_design_colors)||[]).filter(H=>H.image_url);if(!C.length)return;$[M]=(($[M]||0)+1)%C.length;const T=s.querySelector(`[data-shirt-dash-img="${M}"]`);T&&(T.src=C[$[M]].image_url)}))}catch(t){console.error(t),s.innerHTML=kt()}}const gr="sports_offline_queue",br=()=>{try{return JSON.parse(localStorage.getItem(gr)||"[]")}catch{return[]}},Sd=e=>localStorage.setItem(gr,JSON.stringify(e));let Sa=!1;const Ed=new Set;function Ld(){const e=br();Ed.forEach(s=>{try{s(e)}catch(t){console.warn(t)}})}async function Cd(e){const s=e.type==="attendance"?"sports_attendance":"sports_team_dues",{error:t}=await oe.from(s).insert(e.payload);if(t&&t.code!=="23505")throw t}async function Id(){if(Sa)return;let e=br();if(!e.length)return;Sa=!0;let s=0;for(const t of e)try{await Cd(t),s++}catch{break}Sa=!1,s>0&&(e=e.slice(s),Sd(e),Ld())}window.addEventListener("online",()=>Id());const It=[{key:"sports_total",label:"คะแนนกีฬา (สากล + กรีฑา)",icon:"🏃"},{key:"folk_skill_total",label:"กีฬาพื้นบ้าน / ทักษะ",icon:"🎯"},{key:"parade_total",label:"พาเหรด (สวนสนาม)",icon:"🕌"},{key:"page_total",label:"เพจ Facebook",icon:"📣"},{key:"ibadat_total",label:"คะแนนอีบาดัต",icon:"🕋"},{key:"grand_total",label:"คะแนนรวมทั้งหมด",icon:"🏆"}],Td=(e,s,t,n=5)=>{const l=(e||[]).filter(r=>!t||r.gender===t),o=It[n]||It[5],u=[...l].sort((r,d)=>(Number(d[o.key])||0)-(Number(r[o.key])||0));return`<section class="bg-white border rounded-2xl p-5">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
      <div><h2 class="font-bold">📊 อันดับคะแนนแยกหมวด</h2><p class="text-xs text-gray-500 mt-1">เปรียบเทียบเฉพาะสี${t==="W"?"หญิง":"ชาย"} · คะแนนกีฬา = กีฬาสากลรวมกรีฑา</p></div>
    </div>
    <div class="rounded-2xl border bg-gray-50 p-4">
      <div class="flex items-center justify-between gap-3 mb-3">
        <button type="button" data-sports-rank-nav="prev" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===0?"disabled":""} aria-label="ดูหมวดก่อนหน้า">‹</button>
        <div class="text-center min-w-0"><div class="text-lg">${o.icon}</div><h3 class="text-sm font-bold text-gray-700">อันดับ${o.label}</h3><p class="text-[10px] text-gray-400">หมวด ${n+1} / ${It.length}</p></div>
        <button type="button" data-sports-rank-nav="next" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===It.length-1?"disabled":""} aria-label="ดูหมวดถัดไป">›</button>
      </div>
      <div class="flex justify-center gap-1.5 mb-3">${It.map((r,d)=>`<button type="button" data-sports-rank-index="${d}" aria-label="ดู${r.label}" class="h-2 rounded-full transition ${d===n?"w-5 bg-indigo-600":"w-2 bg-gray-300"}"></button>`).join("")}</div>
      <div class="space-y-1.5">${u.map((r,d)=>`<div class="flex items-center gap-2 text-sm rounded-xl bg-white px-3 py-2 ${r.color_name===s?"font-black text-indigo-700 ring-1 ring-indigo-200":""}"><span class="w-7 text-center text-gray-400">#${d+1}</span><span class="flex-1 truncate">สี${re(r.color_name)}</span><b>${Number(r[o.key]||0).toLocaleString("th-TH")}</b></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีคะแนน</p>'}</div>
    </div>
  </section>`};async function Bd(){Cs(!0);const{data:{session:e}}=await oe.auth.getSession();if(!e)return window.location.replace("index.html"),null;const{data:s,error:t}=await oe.from("profiles").select("role, is_also_admin").eq("id",e.user.id).maybeSingle();return t||(s==null?void 0:s.role)!=="admin"&&!(s!=null&&s.is_also_admin)?(N("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):e}async function jd(e){try{const{data:s}=await oe.from("profiles").select("role, user_code").eq("id",e).maybeSingle();let t="ผู้ใช้งาน";if((s==null?void 0:s.role)==="teacher"||(s==null?void 0:s.role)==="admin"){const{data:l}=await oe.from("teachers").select("full_name").eq("profile_id",e).maybeSingle();t=(l==null?void 0:l.full_name)??(s==null?void 0:s.user_code)??"ผู้ใช้งาน"}const n=(s==null?void 0:s.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=t,document.getElementById("user-role").textContent=n,document.getElementById("user-avatar").textContent=t.charAt(0).toUpperCase()}catch{}}async function qd(e){const s=document.getElementById("header-switch-slot");if(!s)return;s.innerHTML="";const{data:t}=await oe.from("profiles").select("is_also_admin").eq("id",e).maybeSingle();if(!(t!=null&&t.is_also_admin))return;const n=document.createElement("a");n.id="btn-switch-teacher",n.href="teacher.html",n.title="สลับไปหน้าครู",n.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",n.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",s.appendChild(n)}async function Ad(){await oe.auth.signOut(),N("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function Md(e=null){var t,n,l;const s=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(t=window._clearPositionRows)==null||t.call(window),document.getElementById("modal-title").textContent=e?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:o}=await Ce(async()=>{const{getDepartments:d}=await import("./api-C-roKrdU.js");return{getDepartments:d}},__vite__mapDeps([0,1,2,3,4])),u=await o(),r=document.getElementById("modal-position-dept");r.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+u.map(d=>`<option value="${d.id}">${d.dept_name}</option>`).join("")}catch{}if(e)try{const{data:o}=await(await Ce(async()=>{const{supabase:r}=await import("./supabase-BV-W2lsh.js").then(d=>d.a);return{supabase:r}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",e).single();document.getElementById("modal-id").value=o.id,document.getElementById("modal-code").value=o.teacher_code??"",document.getElementById("modal-name").value=o.full_name??"",document.getElementById("modal-category").value=o.category??"",document.getElementById("modal-phone").value=o.phone??"",document.getElementById("modal-login-email").value=o.login_email??"",document.getElementById("modal-username").value=o.username??"",document.getElementById("modal-image-url").value=o.image_url??"";const u=(n=o.positions)!=null&&n.length?o.positions:o.position?[o.position]:[];(l=window._setPositionRows)==null||l.call(window,u),u.includes("dept_head")&&(document.getElementById("modal-position-dept").value=o.position_dept_id??""),yr(o.image_url,o.full_name)}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex"),document.getElementById("modal-name").focus()}function ja(){const e=document.getElementById("teacher-modal");e.classList.add("hidden"),e.classList.remove("flex")}async function Nd(e){var d,p,a;e.preventDefault();const s=document.getElementById("modal-save-btn"),t=document.getElementById("modal-id").value,n=document.getElementById("modal-username").value.trim().toLowerCase();if(n&&!/^[a-z0-9._-]{3,32}$/.test(n)){N("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const l=((d=window._getPositionValues)==null?void 0:d.call(window))??[],o=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],u=l.find(m=>!o.includes(m))||null,r={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:n||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:u,positions:l,position_dept_id:l.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!r.full_name){N("กรุณากรอกชื่อ-นามสกุล","warning");return}ht(s,!0);try{const m=(a=(p=document.getElementById("modal-photo-file"))==null?void 0:p.files)==null?void 0:a[0];if(m){const v=t||`new_${Date.now()}`;r.image_url=await Zo(v,m)}t?await mn(Number(t),r):await xn(r),N("บันทึกข้อมูลสำเร็จ","success"),ja(),qt(await Oe())}catch(m){N("บันทึกไม่สำเร็จ: "+we(m),"error")}finally{ht(s,!1)}}async function Dd(e,s){if(confirm(`ยืนยันการลบ "${s}" ออกจากระบบ?`))try{await dn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),qt(await Oe())}catch{N("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function yr(e,s){const t=document.getElementById("modal-avatar-preview");t&&(e?t.innerHTML=`<img src="${e}" class="w-full h-full object-cover" />`:t.innerHTML=(s??"?").charAt(0).toUpperCase())}async function Hd(e=null){const s=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=e?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(t=>{document.getElementById(t).value=""}),document.getElementById("sub-skill-group").value="",e)try{const n=(await Zt()).find(l=>l.id===e);n&&(document.getElementById("sub-id").value=n.id,document.getElementById("sub-code").value=n.subject_code??"",document.getElementById("sub-name").value=n.subject_name??"",document.getElementById("sub-dept").value=n.dept??"",document.getElementById("sub-grade").value=n.grade_level??"",document.getElementById("sub-credit").value=n.credit??"",document.getElementById("sub-learning-area").value=n.learning_area??"",document.getElementById("sub-skill-group").value=n.skill_group??"")}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}s.classList.replace("hidden","flex")}async function Rd(e,s){if(confirm(`ยืนยันลบวิชา "${s}"?`))try{await cn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),Ya(await Zt())}catch{N("ลบไม่สำเร็จ","error")}}async function Od(e=null){const s=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(v=>{const x=document.getElementById(v);x&&(x.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const t=document.getElementById("dept-selected-teacher");t.classList.add("hidden"),t.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=e?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let n=[];try{n=await Oe()}catch{}const l=document.getElementById("dept-teacher-code-input"),o=document.getElementById("dept-teacher-search"),u=document.getElementById("dept-teacher-dropdown"),r=document.getElementById("dept-selected-teacher"),d=document.getElementById("dept-selected-name"),p=document.getElementById("dept-clear-teacher"),a=v=>{document.getElementById("dept-teacher-code").value=v?v.teacher_code??"":"",v?(l.value=v.teacher_code??"",o.value=v.full_name??"",d.textContent=`${v.full_name}${v.teacher_code?` (${v.teacher_code})`:""}`,r.classList.remove("hidden"),r.classList.add("flex")):(l.value="",o.value="",r.classList.add("hidden"),r.classList.remove("flex")),u.classList.add("hidden")},m=v=>{u.innerHTML=v.length?v.map(x=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${x.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${x.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${x.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',u.querySelectorAll(".teacher-option").forEach(x=>{x.addEventListener("mousedown",_=>{_.preventDefault(),a(n.find(h=>String(h.id)===x.dataset.id))})}),u.classList.remove("hidden")};if(l.oninput=()=>{const v=l.value.trim().toLowerCase();if(!v){a(null);return}const x=n.find(_=>(_.teacher_code??"").toLowerCase()===v);if(x)a(x);else{const _=n.filter(h=>(h.teacher_code??"").toLowerCase().startsWith(v));_.length&&m(_)}},o.onfocus=()=>m(n),o.oninput=()=>{const v=o.value.toLowerCase();m(v?n.filter(x=>x.full_name.toLowerCase().includes(v)||(x.teacher_code??"").toLowerCase().includes(v)):n)},o.onblur=()=>setTimeout(()=>u.classList.add("hidden"),150),p==null||p.addEventListener("click",()=>a(null)),e)try{const x=(await st()).find(_=>_.id===e);if(x){document.getElementById("dept-id").value=x.id,document.getElementById("dept-code").value=x.dept_code??"",document.getElementById("dept-name").value=x.dept_name??"",document.getElementById("dept-teacher-code").value=x.teacher_code??"",document.getElementById("dept-photo-url").value=x.head_photo_url??"",document.getElementById("dept-sign-url").value=x.head_sign_url??"";const _=document.getElementById("dept-category");if(_&&(_.value=x.category??""),x.teacher_code){const h=n.find($=>$.teacher_code===x.teacher_code);h&&a(h)}x.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${x.head_photo_url}" class="w-full h-full object-cover" />`),x.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${x.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex")}function Ot(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function Pd(e){var o,u,r,d,p,a,m,v;e.preventDefault();const s=document.getElementById("dept-save-btn"),t=document.getElementById("dept-id").value,n=document.getElementById("dept-code").value.trim().toUpperCase(),l=document.getElementById("dept-name").value.trim();if(!n||!l){N("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}ht(s,!0);try{const x=document.getElementById("dept-teacher-code").value||null,_=x?((r=(u=(o=document.getElementById("dept-selected-name"))==null?void 0:o.textContent)==null?void 0:u.split(" (")[0])==null?void 0:r.trim())??null:null,h={dept_code:n,dept_name:l,head_name:_,teacher_code:x,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((d=document.getElementById("dept-category"))==null?void 0:d.value)||null},$=(a=(p=document.getElementById("dept-photo-file"))==null?void 0:p.files)==null?void 0:a[0];$&&(h.head_photo_url=await is(n,"photo",$));const b=(v=(m=document.getElementById("dept-sign-file"))==null?void 0:m.files)==null?void 0:v[0];b&&(h.head_sign_url=await is(n,"sign",b)),t?await gn(Number(t),h):await bn(h),N("บันทึกสำเร็จ","success"),Ot(),oa(await st())}catch(x){N("บันทึกไม่สำเร็จ: "+we(x),"error")}finally{ht(s,!1)}}async function zd(e,s){if(confirm(`ยืนยันลบกลุ่มสาระ "${s}"?`))try{await un(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),oa(await st())}catch{N("ลบไม่สำเร็จ","error")}}function Fd(e=null){var n,l,o;const s=document.getElementById("period-modal"),t=e?((n=window._periodsCache)==null?void 0:n[e])??null:null;document.getElementById("period-id").value=e??"",document.getElementById("period-no").value=(t==null?void 0:t.period_no)??"",document.getElementById("period-start").value=((l=t==null?void 0:t.start_time)==null?void 0:l.slice(0,5))??"",document.getElementById("period-end").value=((o=t==null?void 0:t.end_time)==null?void 0:o.slice(0,5))??"",document.getElementById("period-modal-title").textContent=e?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",s.classList.remove("hidden"),s.classList.add("flex")}function Pt(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function Ud(e){e.preventDefault();const s=document.getElementById("period-save-btn"),t=document.getElementById("period-id").value,n={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!n.period_no||!n.start_time||!n.end_time){N("กรุณากรอกข้อมูลให้ครบ","warning");return}t&&(n.id=Number(t)),ht(s,!0);try{await yn(n),N("บันทึกสำเร็จ","success"),Pt(),la()}catch(l){N("บันทึกไม่สำเร็จ: "+we(l),"error")}finally{ht(s,!1)}}async function Gd(e){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await pn(Number(e)),N("ลบแล้ว","success"),la()}catch{N("ลบไม่สำเร็จ","error")}}async function qa(){try{const s=(await Ke()).filter(n=>n.status==="pending").length,t=document.getElementById("badge-payments");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Aa(){try{const s=(await Bs()).filter(n=>!n.is_read).length,t=document.getElementById("badge-feedback");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Ma(){try{const e=await Ts(),s=document.getElementById("badge-subject-group");if(!s)return;e.length>0?(s.textContent=e.length>9?"9+":e.length,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}window._refreshSubjectGroupBadge=Ma;window._refreshFeedbackBadge=Aa;window._refreshPaymentBadge=qa;window._goBack=()=>wt();window.openTeacherModal=Md;window.handleDeleteTeacher=Dd;window.openSubjectModal=Hd;window.handleDeleteSubject=Rd;window.openDeptModal=Od;window.handleDeleteDept=zd;window.openPeriodModal=Fd;window.handleDeletePeriod=Gd;window._adminViewSchedule=async(e,s)=>{var p;(p=document.getElementById("admin-sched-overlay"))==null||p.remove();const{getSystemConfig:t}=await Ce(async()=>{const{getSystemConfig:a}=await import("./api-C-roKrdU.js");return{getSystemConfig:a}},__vite__mapDeps([0,1,2,3,4])),n=await t().catch(()=>({})),l=parseInt(n.academicYear??2568),o=parseInt(n.semester??1),u=document.createElement("div");u.id="admin-sched-overlay",u.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",u.innerHTML=`
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-5 h-14 flex items-center gap-4 flex-shrink-0 shadow-sm">
      <button id="aso-close"
        class="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 font-medium transition">
        ← กลับ
      </button>
      <div class="w-px h-5 bg-gray-200"></div>
      <div>
        <p class="text-sm font-bold text-gray-800">🗓️ ตารางสอน — ${s}</p>
        <p class="text-xs text-gray-400">ภาค ${o} / ${l} · แก้ไขได้</p>
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
    </div>`,document.body.appendChild(u),u.querySelector("#aso-close").addEventListener("click",()=>u.remove());const r=u.querySelector("#aso-content"),d=document.getElementById("main-content");d&&(d.id="main-content-bak"),r.id="main-content";try{await Go({id:e,full_name:s},l,o,n)}finally{r.id="aso-content",d&&(d.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var a,m,v,x,_,h,$,b,c,M,w,C,T,H,B,f,i;ul();const e=await Bd();if(!e)return;await Us("admin");const s=document.getElementById("app-version");s&&(s.textContent=`v${ud}`,s.classList.add("cursor-pointer","hover:underline"),s.addEventListener("click",()=>Xa(e.user.id,!0,!0))),(a=e==null?void 0:e.user)!=null&&a.id&&Xa(e.user.id,!1,!0),nn(),(m=document.getElementById("btn-logout"))==null||m.addEventListener("click",Ad);const t=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],n=()=>'<option value="">— ไม่มี —</option>'+t.map(y=>`<optgroup label="${y.label}">${y.options.map(E=>`<option value="${E.value}">${E.label}</option>`).join("")}</optgroup>`).join("");function l(){const y=[...document.querySelectorAll(".pos-row-sel")].map(E=>E.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!y.includes("dept_head"))}function o(){const y=[...document.querySelectorAll(".pos-row-sel")],E=y.map(g=>g.value).filter(Boolean);y.forEach(g=>{[...g.options].forEach(L=>{L.value&&(L.disabled=E.includes(L.value)&&g.value!==L.value)})})}function u(y=""){const E=document.getElementById("modal-positions-list"),g=document.createElement("div");g.className="pos-row flex items-center gap-2",g.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${n()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,g.querySelector(".pos-row-sel").value=y,g.querySelector(".pos-row-sel").addEventListener("change",()=>{l(),o()}),g.querySelector(".pos-row-del").addEventListener("click",()=>{g.remove(),l(),o()}),E.appendChild(g),l(),o()}window._addPositionRow=u,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",u(),l()},window._setPositionRows=y=>{document.getElementById("modal-positions-list").innerHTML="",(y!=null&&y.length?y:[""]).forEach(g=>u(g)),l()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(y=>y.value).filter(Boolean),(v=document.getElementById("btn-add-position"))==null||v.addEventListener("click",()=>u()),u(),(x=document.getElementById("modal-close"))==null||x.addEventListener("click",ja),(_=document.getElementById("modal-backdrop"))==null||_.addEventListener("click",ja),(h=document.getElementById("teacher-form"))==null||h.addEventListener("submit",Nd),($=document.getElementById("modal-photo-file"))==null||$.addEventListener("change",y=>{const E=y.target.files[0];E&&yr(URL.createObjectURL(E),"")}),(b=document.getElementById("dept-modal-close"))==null||b.addEventListener("click",Ot),(c=document.getElementById("dept-modal-backdrop"))==null||c.addEventListener("click",Ot),(M=document.getElementById("dept-modal-cancel"))==null||M.addEventListener("click",Ot),(w=document.getElementById("dept-form"))==null||w.addEventListener("submit",Pd),(C=document.getElementById("dept-photo-file"))==null||C.addEventListener("change",y=>{const E=y.target.files[0];E&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL(E)}" class="w-full h-full object-cover" />`)}),(T=document.getElementById("dept-sign-file"))==null||T.addEventListener("change",y=>{const E=y.target.files[0];E&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL(E)}" class="w-full h-full object-contain" />`)}),(H=document.getElementById("period-modal-close"))==null||H.addEventListener("click",Pt),(B=document.getElementById("period-modal-backdrop"))==null||B.addEventListener("click",Pt),(f=document.getElementById("period-modal-cancel"))==null||f.addEventListener("click",Pt),(i=document.getElementById("period-form"))==null||i.addEventListener("submit",Ud),await jd(e.user.id),qd(e.user.id);const r={overview:Na,"exec-overview":cd,teachers:vr,classes:Va,students:wr,departments:_r,subjects:wt,"subject-admin":()=>Ce(async()=>{const{renderAdminSubjectManagement:y}=await import("./admin-subject-management-D8sxtIEc.js");return{renderAdminSubjectManagement:y}},__vite__mapDeps([5,0,1,2,3,4,6,7])).then(({renderAdminSubjectManagement:y})=>y()),curriculum:ft,periods:la,"schedule-admin":()=>Ce(async()=>{const{renderAdminScheduleManagement:y}=await import("./admin-schedule-management-C37RwaF3.js");return{renderAdminScheduleManagement:y}},__vite__mapDeps([8,6,0,1,2,3,4,9,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(({renderAdminScheduleManagement:y})=>y()),"schedule-admin-import":()=>Ce(async()=>{const{renderAdminScheduleImport:y}=await import("./admin-schedule-import-CUthI3cu.js");return{renderAdminScheduleImport:y}},__vite__mapDeps([23,0,1,2,3,4,6,7])).then(({renderAdminScheduleImport:y})=>y({onBack:()=>r["schedule-admin"]()})),homeroom:$r,"score-col-config":kr,"registered-teachers":Kt,holidays:Sr,payments:Lr,"life-skill-admin":Cr,"reading-admin":Ir,"prayer-admin":Tr,settings:Wa,import:Er,"admin-profile":Br,"usage-stats":jr,"classrooms-admin":qr,"course-doc-lang":()=>Vo(null,!0),announcements:()=>Or(),"autoscale-history":()=>Pr(),"autoscale-settings":()=>Ta(),"work-calendar":()=>Qr(null),"role-permissions":()=>zr(),"religion-groups":Zr,"tutorial-admin":()=>Ce(async()=>{const{renderTutorialAdmin:y}=await import("./tutorial-D9xKLgCL.js");return{renderTutorialAdmin:y}},__vite__mapDeps([24,0,1,2,3,4,16,6])).then(({renderTutorialAdmin:y})=>y()),"house-colors":()=>Fr(),"sports-admin":()=>pl({admin:!0}),azfutsal:()=>Oo(),regrade:()=>bd(),"sports-shirt-summary":()=>We(),"sports-fund-admin":()=>kd(),"sports-overview-admin":()=>mr(),"sports-evaluation":()=>ot(),"shirt-vote-settings":()=>lt(),"shirt-vote-dashboard":()=>xr(),donations:()=>Gr(),"feedback-admin":()=>Vr(),"subject-group-requests":()=>tn(),"donor-chat-admin":()=>Ce(()=>import("./teacher-views-donor-chat-BOAGwgdT.js"),__vite__mapDeps([25,6,0,1,2,3,4,16,17,26,27,10,11,28,29,30,31,32,33,34,35,36,15,24,37,12])).then(y=>y.renderDonorChatAdmin()),"student-qr-print":()=>Ce(()=>import("./teacher-views-classes-DVprDxA6.js").then(y=>y.t),__vite__mapDeps([9,6,0,1,2,3,4,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(y=>y.renderStudentQRPrint(null,null)),"classroom-leaders":()=>an(),"council-rep-nominations":()=>Ur(),certificates:()=>Ce(()=>import("./teacher-views-certificates-DQidJfAS.js"),__vite__mapDeps([38,6,39,1,15,40,17,16])).then(async y=>{const{getMyTeacherProfile:E}=await Ce(async()=>{const{getMyTeacherProfile:L}=await import("./api-C-roKrdU.js");return{getMyTeacherProfile:L}},__vite__mapDeps([0,1,2,3,4])),g=await E(e.user.id).catch(()=>null);return y.renderCertificateManager(g)})};document.querySelectorAll("[data-nav]").forEach(y=>{y.addEventListener("click",E=>{var L,S;E.preventDefault();const g=y.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}r[g]&&r[g](),(L=document.getElementById("sidebar"))==null||L.classList.add("-translate-x-full"),(S=document.getElementById("sidebar-overlay"))==null||S.classList.add("hidden")})}),qa(),setInterval(qa,6e4),Aa(),setInterval(Aa,6e4),Ma(),setInterval(Ma,6e4),Cs(!1),window._adminNav=y=>{r[y]&&r[y]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>r["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>r["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>r["shirt-vote-dashboard"]());const d=new URLSearchParams(location.search),p=d.get("view");p&&r[p]?(window._pendingQRTab=d.get("tab")||null,r[p]()):await Na()});function Ze(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(0,s).trim():e.trim()}function ct(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(s+1).trim():""}function Pe(e){return[...new Set(e.filter(Boolean))].sort()}const qe="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",Ge="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",Ve=e=>String(e??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),ee=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Vd({year:e,semester:s,start:t,end:n,preview:l}){return new Promise(o=>{var p;const u=document.createElement("div");u.id="semester-rollover-confirm-modal",u.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",u.innerHTML=`
      <section role="dialog" aria-modal="true" aria-labelledby="semester-rollover-title"
        class="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <header class="shrink-0 border-b border-amber-100 bg-amber-50 px-5 py-4 sm:px-7">
          <p class="text-xs font-bold uppercase tracking-wide text-amber-700">ตรวจสอบก่อนดำเนินการ</p>
          <h2 id="semester-rollover-title" class="mt-1 text-lg font-extrabold text-slate-900">ยืนยันขึ้นภาคเรียนที่ ${s}/${e}</h2>
          <p class="mt-1 text-sm text-slate-600">อ่านรายการและผลที่จะเกิดขึ้นทั้งหมดก่อนยืนยัน</p>
        </header>
        <div class="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-5 py-4 sm:px-7">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 p-3"><p class="text-xs font-semibold text-slate-500">วันเปิดภาคเรียนใหม่</p><p class="mt-1 font-bold text-slate-800">${ee(t)}</p></div>
            <div class="rounded-xl border border-slate-200 p-3"><p class="text-xs font-semibold text-slate-500">วันปิดภาคเรียนใหม่</p><p class="mt-1 font-bold text-slate-800">${ee(n)}</p></div>
          </div>
          <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">✓ ไฟล์สำรองภาคเรียนปัจจุบันผ่านการตรวจสอบแล้ว</div>
          <section>
            <h3 class="mb-2 text-sm font-bold text-slate-800">สรุปข้อมูลที่จะจัดการ</h3>
            <dl class="divide-y divide-slate-100 rounded-xl border border-slate-200 px-3">
              ${[["คอร์สเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.courses_to_archive,"คอร์ส"],["ห้องเรียนเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.classes_to_archive,"ห้อง"],["ผู้สนับสนุนที่มีสิทธิ์ส่วนลดเทอมใหม่",l==null?void 0:l.eligible_supporters,"คน"],["ข้อมูลเข้าเรียนที่จะล้างหลังสำรอง",l==null?void 0:l.attendances_to_clear,"รายการ"],["ข้อมูลละหมาดที่จะล้างหลังสำรอง",l==null?void 0:l.prayer_records_to_clear,"รายการ"]].map(([a,m,v])=>`<div class="flex items-start justify-between gap-4 py-2.5 text-sm"><dt class="text-slate-600">${a}</dt><dd class="shrink-0 font-bold tabular-nums text-slate-900">${Number(m??0).toLocaleString()} ${v}</dd></div>`).join("")}
            </dl>
          </section>
          <section class="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm text-indigo-950">
            <h3 class="mb-2 font-bold">สิ่งที่จะเกิดขึ้น</h3>
            <ul class="list-disc space-y-1.5 pl-5 leading-relaxed">
              <li>บัญชีครู นักเรียน และประวัติคงอยู่ ไม่ต้องสมัครใหม่</li>
              <li>ภาคเรียนใหม่เริ่มเป็นพื้นที่ว่าง ครูสร้างคอร์ส ห้องเรียน และลงทะเบียนนักเรียนเอง</li>
              <li>คะแนนเดิมคงเป็นข้อมูลดิบ ไม่เชื่อมกับข้อมูลเข้าเรียน/ละหมาดที่กำลังล้าง</li>
              <li>ระบบจะล้างข้อมูลเข้าเรียนและละหมาดเป็นชุดย่อย พร้อมแสดงความคืบหน้า หากหยุดกลางทางสามารถเริ่มต่อได้โดยใช้ไฟล์สำรองเดิม</li>
              <li>สิทธิ์สนับสนุนและโควตาสร้างห้องจะถูกปรับตามกติกาภาคเรียนใหม่</li>
            </ul>
          </section>
          <p class="text-xs leading-relaxed text-rose-700">การยืนยันนี้เริ่มล้างข้อมูลภาคเรียนเดิมที่ระบุข้างต้น โดยไฟล์สำรองที่ผ่านการตรวจสอบเป็นช่องทางกู้คืนข้อมูลเหล่านั้น</p>
        </div>
        <footer class="flex shrink-0 flex-col-reverse gap-2 border-t border-slate-100 bg-white px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
          <button type="button" data-action="cancel" class="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">ยกเลิก</button>
          <button type="button" data-action="confirm" class="rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-amber-700">ยืนยันและเริ่มขึ้นภาคเรียนใหม่</button>
        </footer>
      </section>`;const r=a=>{u.remove(),document.removeEventListener("keydown",d),o(a)},d=a=>{a.key==="Escape"&&r(!1)};u.addEventListener("click",a=>{(a.target===u||a.target.closest('[data-action="cancel"]'))&&r(!1),a.target.closest('[data-action="confirm"]')&&r(!0)}),document.addEventListener("keydown",d),document.body.appendChild(u),(p=u.querySelector('[data-action="cancel"]'))==null||p.focus()})}function Wd(){const e=document.createElement("div");return e.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",e.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="semester-rollover-progress-title" class="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
    <h2 id="semester-rollover-progress-title" class="text-lg font-extrabold text-slate-900">กำลังเตรียมพื้นที่ภาคเรียนใหม่</h2>
    <p data-progress-label class="mt-2 text-sm text-slate-600">กำลังเริ่ม...</p>
    <div class="mt-4 h-3 overflow-hidden rounded-full bg-slate-100"><div data-progress-bar class="h-full w-0 rounded-full bg-indigo-600 transition-[width] duration-200"></div></div>
    <p data-progress-count class="mt-2 text-right text-xs font-semibold tabular-nums text-indigo-700">0%</p>
    <p class="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">อย่าปิดหน้าต่างระหว่างกำลังทำงาน หากการเชื่อมต่อขาด ข้อมูลที่ลบไปแล้วอยู่ในไฟล์สำรอง และสามารถกดขึ้นภาคเรียนใหม่อีกครั้งเพื่อทำต่อจากข้อมูลที่เหลือ</p>
  </section>`,document.body.appendChild(e),{update(s,t){e.querySelector("[data-progress-label]").textContent=s,e.querySelector("[data-progress-count]").textContent=`${Math.max(0,Math.min(100,Math.floor(t)))}%`,e.querySelector("[data-progress-bar]").style.width=`${Math.max(0,Math.min(100,t))}%`},close(){e.remove()}}}function vt(e){return String(e??"").normalize("NFKC").toLowerCase().replace(/^(ว่าที่ร้อยตรี|ว่าที่ร้อยโท|ว่าที่ร้อยเอก|นางสาว|น.ส.|นาย|นาง|ดร\.?|คุณ)\s*/u,"").replace(/[\s._,()\[\]{}\-–—:;"'`]/g,"")}function Yd(e,s){const t=[...vt(e)],n=[...vt(s)],l=Array.from({length:n.length+1},(o,u)=>u);for(let o=1;o<=t.length;o++){const u=[o];for(let r=1;r<=n.length;r++)u[r]=Math.min(u[r-1]+1,l[r]+1,l[r-1]+(t[o-1]===n[r-1]?0:1));for(let r=0;r<=n.length;r++)l[r]=u[r]}return l[n.length]}function Kd(e,s){const t=vt(e),n=vt(s);return!t||!n?0:t===n?1:1-Yd(t,n)/Math.max(t.length,n.length)}function je(e){document.querySelectorAll("[data-nav]").forEach(s=>{s.classList.toggle("bg-indigo-800",s.dataset.nav===e),s.classList.toggle("text-white",s.dataset.nav===e),s.classList.toggle("text-indigo-200",s.dataset.nav!==e)})}function Ee(e){document.getElementById("main-content").innerHTML=e}async function Na(){var u;je("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ";const[e,s]=await Promise.all([Ne().catch(()=>({})),ea().catch(()=>[])]),t=Ns(s,e),n=Ye(Ca(e));let l=n;try{const r=localStorage.getItem("pp5_admin_overview_term");t.some(d=>Ye(d)===r)&&(l=r)}catch{}const o=t.find(r=>Ye(r)===l)??Ca(e);Ee(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-8 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">ยินดีต้อนรับเข้าสู่ระบบ ปพ.5 👋</h3>
      <p class="text-gray-500 text-sm">จัดการข้อมูลครู นักเรียน และห้องเรียนได้จากเมนูด้านซ้าย</p>
    </div>

    <section class="mb-5 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="min-w-0">
          <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนของข้อมูล</h2>
          <p class="mt-1 text-xs text-indigo-700">ห้องเรียน รายวิชา และคะแนนละหมาดเปลี่ยนตามภาคที่เลือก · จำนวนครู นักเรียน บัญชี และคำขอชำระเงินเป็นยอดรวมระบบ</p>
        </div>
        <label class="flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-indigo-700">
          <span>เลือกภาคเรียน</span>
          <select id="admin-overview-term-switcher" aria-label="เลือกภาคเรียนของภาพรวมแอดมิน"
            class="max-w-[220px] rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
            ${Ds(t,l,n)}
          </select>
        </label>
      </div>
    </section>

    <!-- สถิติหลัก -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4" id="stat-grid">
      ${["teachers","students","classes","subjects","prayer"].map(r=>`
        <button type="button" onclick="window._adminNav?.('${r==="classes"?"classrooms-admin":r==="prayer"?"prayer-admin":r}')"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 text-left
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl
            ${r==="teachers"?"bg-indigo-100":r==="students"?"bg-purple-100":r==="classes"?"bg-blue-100":r==="subjects"?"bg-green-100":"bg-rose-100"}">
            ${{teachers:"👩‍🏫",students:"👦",classes:"🏫",subjects:"📚",prayer:"🕌"}[r]}
          </div>
          <div>
            <p class="text-xs text-gray-500">${{teachers:"ครูผู้สอน",students:"นักเรียน",classes:"ห้องเรียน",subjects:"รายวิชา",prayer:"คะแนนละหมาด"}[r]}</p>
            <p id="stat-${r}" class="text-2xl font-bold
              ${r==="teachers"?"text-indigo-700":r==="students"?"text-purple-700":r==="classes"?"text-blue-700":r==="subjects"?"text-green-700":"text-rose-700"}">—</p>
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
  </div>`);try{const[r,d,p]=await Promise.all([ss(o.academic_year,o.semester),Ke().catch(()=>[]),Oe().catch(()=>[])]);(u=document.getElementById("admin-overview-term-switcher"))==null||u.addEventListener("change",async w=>{l=w.target.value;try{localStorage.setItem("pp5_admin_overview_term",l)}catch{}const C=t.find(H=>Ye(H)===l);if(!C)return;const T=w.target;T.disabled=!0;try{const H=await ss(C.academic_year,C.semester);Object.entries(H).forEach(([B,f])=>{const i=document.getElementById(`stat-${B}`);i&&(i.textContent=Number(f??0).toLocaleString())})}catch{N("โหลดสถิติของภาคเรียนที่เลือกไม่สำเร็จ","error")}finally{T.disabled=!1}}),Object.entries(r).forEach(([w,C])=>{const T=document.getElementById(`stat-${w}`);T&&(T.textContent=C.toLocaleString())});const a=p.filter(w=>w.profile_id).length,m=p.length-a,v=document.getElementById("stat-registered"),x=document.getElementById("stat-unregistered");v&&(v.textContent=a),x&&(x.textContent=m);const _=d.filter(w=>w.status==="pending"),h=document.getElementById("pending-payments-list");h&&(_.length?h.innerHTML=_.slice(0,3).map(w=>{var C;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((C=w.teachers)==null?void 0:C.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${w.package_type==="semester"?`เหมาทั้งเทอม ${w.amount??299} บ.`:`รายห้อง ${parseInt(w.room_count??1)||1} ห้อง ${w.amount??49} บ.`} · ${new Date(w.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(_.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${_.length-3} รายการ</p>`:""):h.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const $=document.getElementById("training-todo-shell");if($)try{const{getAllAnnouncements:w,getAnnouncementRsvps:C}=await Ce(async()=>{const{getAllAnnouncements:f,getAnnouncementRsvps:i}=await import("./api-C-roKrdU.js");return{getAllAnnouncements:f,getAnnouncementRsvps:i}},__vite__mapDeps([0,1,2,3,4])),T=await w(),H=new Date().toISOString().slice(0,10),B=T.filter(f=>f.ann_type==="training"&&f.is_active&&f.event_date>=H).sort((f,i)=>f.event_date.localeCompare(i.event_date));if(B.length){const f=await Promise.all(B.map(E=>C(E.id).catch(()=>[]))),i=E=>new Date(E+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),y=E=>String(E??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");$.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${B.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${B.map((E,g)=>{var I;const L=f[g]??[],S=L.filter(R=>R.response==="yes").length,j=L.filter(R=>R.response==="maybe").length,D=L.filter(R=>R.response==="no").length,k=L.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${y(E.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${i(E.event_date)}
                        ${(I=E.event_periods)!=null&&I.length?` · 🕐 คาบ ${E.event_periods.sort((R,z)=>R-z).join(",")}`:""}
                        ${E.event_location?` · 📍 ${y(E.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${k?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${S}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${j}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${D}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const b=document.getElementById("leave-monitor-shell");b&&await Ho(b,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const c=await Ne().catch(()=>({})),M=document.getElementById("monitor-shell");M&&ei(M,c)}catch{N("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function Fa(e,s,t){const n={};for(const l of e)l.main_room&&(n[l.main_room]=[]);for(const l of s){const o=l[t];o&&(n[o]||(n[o]=[]),n[o].push({id:l.id,full_name:l.full_name??"",student_code:l.student_code??""}))}return n}async function Jd(e,s,t){const{records:n,students:l,homerooms:o}=await Co(e,s),u=Fa(o,l,"religion_room"),r={},d={},p=new Set;for(const b of n){const c=b.main_room,M=b.week_number;!c||!M||(p.add(M),r[c]||(r[c]={}),r[c][M]||(r[c][M]=new Set),r[c][M].add(b.student_id),b.status==="absent"&&(d[c]||(d[c]={}),d[c][M]||(d[c][M]=new Set),d[c][M].add(b.student_id)))}const a=t?Xd(t):Math.max(...p,0),m=a>0?Array.from({length:a},(b,c)=>c+1):[...p].sort((b,c)=>b-c),v=Object.keys(u),x=v.filter(b=>{var w,C;const c=u[b].length,M=((C=(w=r[b])==null?void 0:w[a-1])==null?void 0:C.size)??0;return c>0&&M<c}),_=v.filter(b=>{var M;const c=(M=d[b])==null?void 0:M[a-2];return c!=null&&c.size?[...c].some(w=>!n.filter(T=>T.main_room===b&&T.week_number===a-1&&T.student_id===w).some(T=>T.status==="followed"||T.status==="avoid")):!1}),h=v.length,$=v.filter(b=>{var M,w;const c=u[b].length;return c?(((w=(M=r[b])==null?void 0:M[a-1])==null?void 0:w.size)??0)>=c:!1}).length;return{total:h,done:$,recordPending:x.length,followPending:_.length,week:a,_raw:{records:n,students:l,roomStudents:u,weekRoomRec:r,weekRoomAbsent:d,weeks:m,W:a,homerooms:o}}}async function Qd(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await Io(e,s),u=Fa(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(u),p=d.filter(a=>u[a].length>0&&u[a].every(m=>r.has(m.id??m))).length;return{total:d.length,done:p,pending:d.length-p,_raw:{columns:t,scores:n,students:l,roomStudents:u,scored:r,homerooms:o}}}async function Zd(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await To(e,s),u=Fa(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(u),p=d.filter(a=>u[a].length>0&&u[a].every(m=>r.has(m.id??m))).length;return{total:d.length,done:p,pending:d.length-p,_raw:{columns:t,scores:n,students:l,roomStudents:u,scored:r,homerooms:o}}}function Xd(e){if(!e)return 0;const s=new Date(e);if(isNaN(s))return 0;const t=Date.now()-s.getTime();return t<0?0:Math.floor(t/(7*24*60*60*1e3))+1}async function ei(e,s){const t=parseInt(s.academicYear??2568),n=parseInt(s.semester??1);e.innerHTML=`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="font-bold text-gray-800 mb-4">📊 ติดตามความคืบหน้า</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="monitor-cards">
        ${["prayer","lifeskill","reading"].map(a=>`
        <div class="monitor-card rounded-xl border border-gray-100 p-4 cursor-pointer hover:shadow-md hover:border-indigo-200 transition bg-gray-50"
          data-type="${a}">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">${{prayer:"🕌",lifeskill:"🌱",reading:"📖"}[a]}</span>
            <p class="font-semibold text-sm text-gray-700">${{prayer:"ละหมาด (รายสัปดาห์)",lifeskill:"ทักษะชีวิต (รายเทอม)",reading:"อ่านคิดวิเคราะห์ (รายเทอม)"}[a]}</p>
          </div>
          <div id="card-${a}" class="text-center py-4 text-gray-300 text-xs">กำลังโหลด...</div>
        </div>`).join("")}
      </div>
    </div>`;const[l,o,u,r]=await Promise.allSettled([Jd(t,n,s.semester_start),Qd(t,n),Zd(t,n),Oe().catch(()=>[])]),d=r.status==="fulfilled"?r.value:[],p=(a,m)=>{const v=document.getElementById(`card-${a}`);if(!v)return;if(m.status==="rejected"){v.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const x=m.value;if(a==="prayer"){const _=x.total>0?Math.round(x.done/x.total*100):0,h=x.recordPending+x.followPending;v.innerHTML=`
        <p class="text-3xl font-extrabold ${_>=100?"text-emerald-600":_>=60?"text-amber-500":"text-red-500"}">${_}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${x.done}/${x.total} ห้อง (สัปดาห์ที่ ${x.week-1})</p>
        ${h>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${x.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${x.recordPending} ห้อง</span>`:""}
          ${x.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${x.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const _=x.total>0?Math.round(x.done/x.total*100):0;v.innerHTML=`
        <p class="text-3xl font-extrabold ${_>=100?"text-emerald-600":_>=60?"text-amber-500":"text-red-500"}">${_}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${x.done}/${x.total} ห้อง</p>
        ${x.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${x.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};p("prayer",l),p("lifeskill",o),p("reading",u),e.querySelectorAll(".monitor-card").forEach(a=>{a.addEventListener("click",()=>{var x,_,h;const m=a.dataset.type,v=m==="prayer"?(x=l.value)==null?void 0:x._raw:m==="lifeskill"?(_=o.value)==null?void 0:_._raw:(h=u.value)==null?void 0:h._raw;ti(m,v,s,t,n,d)})})}function ti(e,s,t,n,l,o=[]){var m;(m=document.getElementById("monitor-modal"))==null||m.remove();const u={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},r=document.createElement("div");r.id="monitor-modal",r.className="fixed inset-0 z-[90] flex flex-col bg-white",r.innerHTML=`
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${u[e]}</h2>
        <p class="text-xs text-gray-400">ภาค ${t.semester??"—"}/${t.academicYear??"—"}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`,document.body.appendChild(r),r.querySelector("#monitor-modal-close").addEventListener("click",()=>r.remove());const d=r.querySelector("#modal-body"),a={allTeachers:o,year:n,sem:l,category:e==="prayer"?"ศาสนา":"สามัญ"};e==="prayer"&&ai(d,s,a),e==="lifeskill"&&fr(d,s,n,l,a),e==="reading"&&hr(d,s,n,l,a),r.querySelector("#modal-print-btn").addEventListener("click",()=>si(t,e)),r.querySelector("#modal-doc-btn").addEventListener("click",()=>ni(t,e,s))}function Ua(e,s,t,n){const l=s[e],{allTeachers:o,year:u,sem:r,category:d}=n??{};if(l)return`<p class="font-semibold text-gray-800 text-xs leading-tight">${l}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${e}</p>`;(o??[]).map(a=>`<option value="${a.id}">${a.full_name??""}${a.teacher_code?` (${a.teacher_code})`:""}</option>`).join("");const p=`pick-${e.replace(/[^a-zA-Z0-9]/g,"_")}`;return`<p class="text-[11px] font-medium text-gray-500">${e}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${e}" data-picker="${p}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${p}" class="hidden mt-2 flex gap-1 items-center">
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
        data-room="${e}" data-year="${u}" data-sem="${r}" data-cat="${d}">บันทึก</button>
    </div>`}function ai(e,s,t={}){var E;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:n,roomStudents:l,weekRoomRec:o,weekRoomAbsent:u,weeks:r,W:d,homerooms:p}=s,a=Object.keys(l).sort((g,L)=>g.localeCompare(L,void 0,{numeric:!0})),m={},v={};for(const g of p??[])g.main_room&&(m[g.main_room]=((E=g.teachers)==null?void 0:E.full_name)??"",v[g.main_room]=g);const x="border border-gray-100 text-center text-[10px] px-2 py-2",_="px-4 py-2 text-sm font-medium border-b-2 transition",h=`${_} border-indigo-600 text-indigo-700 bg-indigo-50`,$=`${_} border-transparent text-gray-500 hover:text-gray-700`,b=(g,L="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${Ua(g,m,v,t)}${L}
  </td>`,c=g=>{const L=g??(d>0?d-1:d),S=r.map(D=>`<option value="${D}" ${D===L?"selected":""}>${D===d?`สัปดาห์ที่ ${D} (ปัจจุบัน)`:D===d-1?`สัปดาห์ที่ ${D} (ควรกรอก)`:`สัปดาห์ที่ ${D}`}</option>`).join(""),j=a.map(D=>{var V,W;const I=(l[D]??[]).length,R=((W=(V=o[D])==null?void 0:V[L])==null?void 0:W.size)??0,z=I>0?Math.round(R/I*100):0,q=I===0?"bg-gray-50 text-gray-300":R===0?"bg-red-50 text-red-400":z>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",F=z>=100?"bg-emerald-500":z>=50?"bg-amber-400":"bg-red-400",O=I>0&&R<I?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${b(D,O)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${I}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${q}">
          <div class="font-bold">${I>0?z+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${I>0?R+"/"+I:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${I>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${F} h-2 rounded-full" style="width:${z}%"></div></div>
            <span class="text-[10px] font-bold ${z>=100?"text-emerald-600":z>=50?"text-amber-600":"text-red-500"}">${z}%</span>
          </div>`:'<span class="text-[10px] text-gray-300">ไม่มีนักเรียน</span>'}
        </td>
      </tr>`}).join("");return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">เลือกสัปดาห์:</label>
      <select id="prayer-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${S}
      </select>
      <span class="text-[11px] text-gray-400">${a.length} ห้อง</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${x} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${x} bg-gray-100">นักเรียน</th>
          <th class="${x} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${x} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${j}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},M=g=>{var R;const L=g??(d>1?d-2:r[0]??1),S=L+1,j=r.map(z=>`<option value="${z}" ${z===L?"selected":""}>${z===d-2?`สัปดาห์ที่ ${z} (ควรติดตาม)`:z===d-1?`สัปดาห์ที่ ${z} (ล่าสุด)`:`สัปดาห์ที่ ${z}`}</option>`).join(""),D=(z,q)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${q}</span>`})[z]??"",k=[];for(const z of a){const q=l[z]??[],F=Object.fromEntries(q.map(O=>[O.id??O,O])),P=[...((R=u[z])==null?void 0:R[L])??[]];for(const O of P){const V=F[O],U=n.filter(Y=>Y.main_room===z&&Y.week_number===S&&Y.student_id===O).some(Y=>Y.status==="followed"||Y.status==="avoid")?"followed":S>d?"pending":"overdue";k.push({room:z,stu:V,status:U})}}const I=k.length?k.map(({room:z,stu:q,status:F})=>{const P=m[z];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${P?`<p class="font-semibold text-gray-800 text-xs">${P}</p><p class="text-[10px] text-gray-400">${z}</p>`:`<p class="font-semibold text-gray-800 text-xs">${z}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(q==null?void 0:q.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(q==null?void 0:q.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${D(F,S)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${L}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${j}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${S} · พบ ${k.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${x} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${x} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${x} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${I}</tbody>
      </table>
    </div>`},w=d>0?d-1:0,C=a.filter(g=>{var L;return((L=l[g])==null?void 0:L.length)>0}).length,T=a.reduce((g,L)=>{var S;return g+(((S=l[L])==null?void 0:S.length)??0)},0),H=(g,L,S=72)=>{const I=2*Math.PI*26,R=I*g/100;return`<svg width="${S}" height="${S}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${L}" stroke-width="8"
        stroke-dasharray="${R} ${I}" stroke-dashoffset="${I/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${L}">${g}%</text>
    </svg>`},B=g=>{const L=e.querySelector("#prayer-dashboard");if(!L)return;if(r.length===0){L.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!g)return;const S=a.filter(q=>{var P,O;const F=l[q].length;return F>0&&(((O=(P=o[q])==null?void 0:P[g])==null?void 0:O.size)??0)<F}),j=a.filter(q=>{var O,V;const F=l[q].length,P=((V=(O=o[q])==null?void 0:O[g])==null?void 0:V.size)??0;return F>0&&P>=F}),D=a.filter(q=>{var P;const F=(P=u[q])==null?void 0:P[g-1];return F!=null&&F.size?[...F].some(O=>!n.filter(W=>W.main_room===q&&W.week_number===g&&W.student_id===O).some(W=>W.status==="followed"||W.status==="avoid")):!1}),k=j.length,I=S.length,R=a.reduce((q,F)=>{var P,O;return q+(((O=(P=o[F])==null?void 0:P[g])==null?void 0:O.size)??0)},0),z=C>0?Math.round(k/C*100):0;L.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${C}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">ห้องทั้งหมด</p>
      </div>
      <div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-emerald-600">${k}</p>
        <p class="text-[11px] text-emerald-500 mt-0.5">บันทึกครบแล้ว</p>
      </div>
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-amber-600">${I}</p>
        <p class="text-[11px] text-amber-500 mt-0.5">ยังค้างอยู่</p>
      </div>
      <div class="bg-indigo-50 rounded-2xl border border-indigo-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-indigo-600">${R}</p>
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${T}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${H(z,z>=100?"#10b981":z>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${g}</p>
          <p class="text-xs text-gray-400 mt-0.5">${k} / ${C} ห้อง บันทึกครบ</p>
          ${D.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${D.length} ห้อง</p>`:""}
          ${z>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${I>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${I})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${S.map(q=>{var W,A;const F=l[q].length,P=((A=(W=o[q])==null?void 0:W[g])==null?void 0:A.size)??0,O=Math.round(P/F*100),V=m[q];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${q}</span>
                ${V?`<span class="text-amber-600 truncate block">${V}</span>`:""}
              </div>
              <span class="flex-shrink-0 font-bold ${O===0?"text-red-500":"text-amber-600"}">${P}/${F}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${O===0?"bg-red-400":"bg-amber-400"}" style="width:${O}%"></div>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:`<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${g}</p></div>
      </div>`}
    </div>`};e.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${h}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${$}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const f=e.querySelector("#prayer-tab-content");let i="record";const y=(g,L)=>{i=g,f.innerHTML=g==="record"?c(L):M(L),g==="record"&&B(L??w),e.querySelectorAll(".prayer-tab").forEach(D=>{D.className=D.dataset.tab===g?`prayer-tab ${h}`:`prayer-tab ${$}`});const S=f.querySelector("#prayer-week-sel");S&&S.addEventListener("change",D=>y("record",parseInt(D.target.value)));const j=f.querySelector("#prayer-follow-week-sel");j&&j.addEventListener("change",D=>y("follow",parseInt(D.target.value))),Ga(f,t,()=>y(i,L))};e.querySelectorAll(".prayer-tab").forEach(g=>g.addEventListener("click",()=>y(g.dataset.tab))),y("record",w)}function fr(e,s,t,n,l={}){var x;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:u,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const p={},a={};for(const _ of d??[])_.main_room&&(p[_.main_room]=((x=_.teachers)==null?void 0:x.full_name)??"",a[_.main_room]=_);const m=Object.keys(u).sort((_,h)=>_.localeCompare(h,void 0,{numeric:!0})),v="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${v} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${v} bg-gray-100">นักเรียน</th>
          <th class="${v} bg-emerald-50 text-emerald-700">กรอกแล้ว</th>
          <th class="${v} bg-red-50 text-red-500">ค้าง</th>
          <th class="${v} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${m.map(_=>{const h=u[_]??[],$=h.length,b=h.filter(C=>r.has(C.id??C)).length,c=$-b,M=$>0?Math.round(b/$*100):0,w=M>=100?"bg-emerald-500":M>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ua(_,p,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${$}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${b}</td>
              <td class="border border-gray-100 text-center ${c>0?"text-red-500 font-medium":"text-gray-300"}">${c||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${w} h-2 rounded-full" style="width:${M}%"></div></div>
                  <span class="text-[10px] font-bold ${M>=100?"text-emerald-600":M>=50?"text-amber-600":"text-red-500"}">${M}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${m.length} ห้อง</p>`,Ga(e,l,()=>fr(e,s,t,n,l))}function hr(e,s,t,n,l={}){var x;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:u,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const p={},a={};for(const _ of d??[])_.main_room&&(p[_.main_room]=((x=_.teachers)==null?void 0:x.full_name)??"",a[_.main_room]=_);const m=Object.keys(u).sort((_,h)=>_.localeCompare(h,void 0,{numeric:!0})),v="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${v} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${v} bg-gray-100">นักเรียน</th>
          <th class="${v} bg-indigo-50 text-indigo-700">กรอกแล้ว</th>
          <th class="${v} bg-red-50 text-red-500">ค้าง</th>
          <th class="${v} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${m.map(_=>{const h=u[_]??[],$=h.length,b=h.filter(C=>r.has(C.id??C)).length,c=$-b,M=$>0?Math.round(b/$*100):0,w=M>=100?"bg-indigo-500":M>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ua(_,p,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${$}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${b}</td>
              <td class="border border-gray-100 text-center ${c>0?"text-red-500 font-medium":"text-gray-300"}">${c||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${w} h-2 rounded-full" style="width:${M}%"></div></div>
                  <span class="text-[10px] font-bold ${M>=100?"text-indigo-600":M>=50?"text-amber-600":"text-red-500"}">${M}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${m.length} ห้อง · ${o.length} หัวข้อ</p>`,Ga(e,l,()=>hr(e,s,t,n,l))}async function Ga(e,s,t){const{allTeachers:n,year:l,sem:o,category:u}=s??{};if(!(n!=null&&n.length))return;const r={};e.querySelectorAll(".hr-sel-wrap").forEach(d=>{const p=d.closest('[id^="pick-"]');p&&(r[p.id]=Ra({wrap:d,teachers:n,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),e.querySelectorAll(".hr-assign-btn").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.picker,a=document.getElementById(p);a&&a.classList.toggle("hidden")})}),e.querySelectorAll(".hr-save-btn").forEach(d=>{d.addEventListener("click",async()=>{var v;const p=d.dataset.room,a=`pick-${p.replace(/[^a-zA-Z0-9]/g,"_")}`,m=(v=r[a])==null?void 0:v.getValue();if(!m){N("กรุณาเลือกครู","error");return}d.disabled=!0,d.textContent="...";try{await Ms({teacher_id:m,main_room:p,category:u,academic_year:l,semester:o}),N(`ระบุครูที่ปรึกษาห้อง ${p} แล้ว ✅`,"success"),t&&t()}catch(x){N("บันทึกไม่สำเร็จ: "+we(x),"error"),d.disabled=!1,d.textContent="บันทึก"}})})}function si(e,s){const t={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,n=document.getElementById("modal-body");if(!n){N("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const l=n.cloneNode(!0);l.querySelectorAll("button, select, input").forEach(r=>r.remove());const o=l.innerHTML,u=`<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>ติดตามความคืบหน้า — ${t}</title>
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
    <h2>ติดตามความคืบหน้า — ${t}</h2>
    <p>โรงเรียน: ${e.samaiSchoolName??e.schoolName??""} &nbsp;·&nbsp; ภาค ${e.semester??"—"}/${e.academicYear??"—"} &nbsp;·&nbsp; พิมพ์: ${new Date().toLocaleDateString("th-TH")}</p>
    ${o}
  </body></html>`;Hs(u,{autoprint:!0})}function ri(e,s,t){var p;const n={};for(const a of(s==null?void 0:s.homerooms)??[])a.main_room&&(n[a.main_room]=((p=a.teachers)==null?void 0:p.full_name)??"—");if(e==="prayer"){const{roomStudents:a,weekRoomRec:m,W:v}=s??{};if(!a)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const _=Object.keys(a).sort(($,b)=>$.localeCompare(b,void 0,{numeric:!0})).filter($=>{var c,M;const b=a[$].length;return b?(((M=(c=m[$])==null?void 0:c[v-1])==null?void 0:M.size)??0)<b:!1});return _.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${_.map(($,b)=>{var w,C;const c=a[$].length,M=((C=(w=m[$])==null?void 0:w[v-1])==null?void 0:C.size)??0;return`<tr>
        <td>${b+1}</td>
        <td>${n[$]??"—"}</td>
        <td>${$}</td>
        <td>${c}</td>
        <td>${M}</td>
        <td style="color:#dc2626">${c-M}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(v??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:l,scored:o}=s??{};if(!l)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const r=Object.keys(l).sort((a,m)=>a.localeCompare(m,void 0,{numeric:!0})).filter(a=>{const m=l[a]??[];return m.length>0&&!m.every(v=>o.has(v.id??v))});return r.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${r.map((a,m)=>{const v=l[a]??[],x=v.filter(_=>o.has(_.id??_)).length;return`<tr>
      <td>${m+1}</td>
      <td>${n[a]??"—"}</td>
      <td>${a}</td>
      <td>${v.length}</td>
      <td>${x}</td>
      <td style="color:#dc2626">${v.length-x}</td>
    </tr>`}).join("")}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${t.semester??"—"}/${t.academicYear??"—"} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'}function ni(e,s,t){const n={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,l=new Date,o=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],u=`${l.getDate()} ${o[l.getMonth()]} ${l.getFullYear()+543}`,r=e.samaiSchoolName??e.schoolName??"โรงเรียน",d=ri(s,t,e),p=`<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>บันทึกข้อความ — ${n}</title>
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
    <div class="doc-school">${r}</div>
    <div class="fields">
      <div class="field"><span class="field-label">ที่&nbsp;&nbsp;</span><span class="field-val">&nbsp;</span></div>
      <div class="field"><span class="field-label">วันที่&nbsp;&nbsp;</span><span class="field-val">${u}</span></div>
      <div class="field"><span class="field-label">เรื่อง&nbsp;&nbsp;</span><span class="field-val">รายงานความคืบหน้าการบันทึกข้อมูล${n} ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"}</span></div>
      <div class="field"><span class="field-label">เรียน&nbsp;&nbsp;</span><span class="field-val">ผู้อำนวยการโรงเรียน${r}</span></div>
    </div>
    <hr style="border:none;border-top:1px solid #ccc;margin:12px 0"/>
    <p class="indent">ตามที่โรงเรียน${r} ได้ใช้ระบบ ปพ.5 ออนไลน์ ในการบันทึกข้อมูล${n}ของนักเรียน
ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"} นั้น</p>
    <p class="indent">บัดนี้ ฝ่ายวิชาการได้ตรวจสอบสถานะการดำเนินงาน ณ วันที่ ${u}
พบว่ายังมีครูที่ปรึกษาบางห้องที่ยังไม่ได้ดำเนินการกรอกข้อมูล ดังรายละเอียดต่อไปนี้</p>
    ${d}
    <p class="indent">จึงเรียนมาเพื่อโปรดทราบ และขอให้ผู้เกี่ยวข้องเร่งดำเนินการกรอกข้อมูลให้แล้วเสร็จ
ภายในระยะเวลาที่กำหนด หากมีข้อสงสัยประการใดโปรดติดต่อฝ่ายวิชาการโดยตรง</p>
    <div class="sign-block">
      <p style="margin:0 0 4px">ลงชื่อ</p>
      <div class="sign-line"></div>
      <p style="margin:0">(....................................)</p>
      <p style="margin:4px 0 0">ตำแหน่ง .....................................</p>
      <p style="margin:4px 0 0">${u}</p>
    </div>
    <div style="clear:both"></div>
  </body></html>`,a=new Blob(["\uFEFF"+p],{type:"application/msword;charset=utf-8"}),m=URL.createObjectURL(a),v=document.createElement("a");v.href=m,v.download=`บันทึกข้อความ_${n}_${e.academicYear??new Date().getFullYear()+543}.doc`,v.click(),setTimeout(()=>URL.revokeObjectURL(m),2e3)}async function vr(){var e;je("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",Ee(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const s=await Oe(),t=Pe(s.map(u=>u.dept)),n=Pe(s.map(u=>u.skill_group));Ee(`<div class="max-w-6xl mx-auto animate-fade">
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
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${Ge} flex-1 min-w-40" />
          <select id="tf-dept" class="${qe}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${t.map(u=>`<option value="${u}">${u}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${qe}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${n.map(u=>`<option value="${u}">${u}</option>`).join("")}
          </select>
          <select id="tf-subg" class="${qe}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${qe}">
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
    </div>`),qt(s);let l=s;window._impersonateTeacher=async u=>{const r=s.find(d=>d.id===u);if(!r){N("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:d}=await Ce(async()=>{const{startImpersonation:p}=await import("./impersonation-0xVfgYVY.js");return{startImpersonation:p}},[]);await d(oe,r),window.location.href="teacher.html"}catch(d){console.error("Cannot start impersonation:",d);const p=/function|schema cache|start_admin_impersonation|edge/i.test((d==null?void 0:d.message)||"");N(p?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(d==null?void 0:d.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const o=()=>{const u=document.getElementById("tf-q").value.toLowerCase(),r=document.getElementById("tf-dept").value,d=document.getElementById("tf-skill").value,p=document.getElementById("tf-subg").value,a=document.getElementById("tf-type").value,m=s.filter(v=>(!u||[v.full_name,v.teacher_code,v.dept,v.skill_group].some(x=>(x??"").toLowerCase().includes(u)))&&(!r||v.dept===r)&&(!d||v.skill_group===d)&&(!p||v.subject_group===p)&&(!a||v.staff_type===a));document.getElementById("tf-count").textContent=m.length,l=m,qt(m)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(u=>{var r,d;(r=document.getElementById(u))==null||r.addEventListener("input",o),(d=document.getElementById(u))==null||d.addEventListener("change",o)}),(e=document.getElementById("teacher-export-csv"))==null||e.addEventListener("click",()=>{const u=x=>["ACDMVOC","AGMVOC"].includes(x.subject_group)?"ปวช":x.category==="ศาสนา"?"ศาสนา":x.category==="สามัญ"||x.subject_group?"สามัญ":"-",r=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],d=l.map((x,_)=>[_+1,x.teacher_code??"",x.full_name??"",u(x),x.phone??""]),p="\uFEFF"+[r,...d].map(x=>x.map(_=>`"${String(_).replace(/"/g,'""')}"`).join(",")).join(`
`),a=new Blob([p],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(a),v=document.createElement("a");v.href=m,v.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL(m),N("ดาวน์โหลด CSV แล้ว ✅","success")})}catch{N("โหลดข้อมูลครูไม่สำเร็จ","error")}}function qt(e){const s=document.getElementById("teacher-table-wrap");if(!s)return;if(e.length===0){s.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">👩‍🏫</p>
      <p class="font-medium">ยังไม่มีครูในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มครูใหม่" เพื่อเริ่มต้น</p>
    </div>`;return}const t=n=>n?`<span class="px-2 py-0.5 rounded-full text-xs font-medium ${{สามัญ:"bg-blue-50 text-blue-700",ศาสนา:"bg-amber-50 text-amber-700"}[n]??""}">${n}</span>`:"—";s.innerHTML=`
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
        ${e.map(n=>{n.teachers_quota;const l=(n.full_name??"?").charAt(0).toUpperCase();return`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                ${n.image_url?`<img src="${n.image_url}" alt="" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 text-white
                                flex items-center justify-center font-bold text-sm flex-shrink-0">${l}</div>`}
                <div>
                  <p class="font-semibold text-gray-800">${n.full_name??"—"}</p>
                  <p class="text-xs text-gray-400">${n.phone??""}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">${n.teacher_code??"—"}</td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${n.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${n.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${n.subject_group?`<span class="px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 font-mono">${n.subject_group}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden lg:table-cell">
              ${t(n.category)}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._adminViewSchedule(${n.id},'${Ve(n.full_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>
              <button onclick="window._impersonateTeacher(${n.id})"
                class="text-xs text-orange-500 hover:text-orange-700 font-medium mr-3">🎭 สวมบทบาท</button>
              <button onclick="openTeacherModal(${n.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="handleDeleteTeacher(${n.id}, '${n.full_name}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table></div>`}async function Kt(){je("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",Ee(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),[n,l,o,u]=await Promise.all([Oe(),mo(s,t).catch(()=>[]),Ke().catch(()=>[]),Xt().catch(()=>[])]),r=new Set(l),d=Date.parse(String(e.semester_start??"")),p=S=>{if(!Number.isFinite(d))return!0;const j=Date.parse(String(S.reviewed_at??S.created_at??""));return Number.isFinite(j)&&j>=d},a=o.filter(S=>S.status==="approved"&&p(S)),m=new Map;u.forEach(S=>{var D;if(S.academic_year!=null&&(+S.academic_year!==s||+S.semester!==t))return;const j=(D=S.master_subjects)==null?void 0:D.teacher_id;j&&m.set(j,(m.get(j)??0)+1)});const v=S=>{const j=S.teachers_quota,D=m.get(S.id)??(j==null?void 0:j.total_classes_created)??0,k=a.filter(F=>{var P;return((P=F.teachers)==null?void 0:P.id)===S.id}),I=k.filter(F=>F.package_type==="per_subject").reduce((F,P)=>F+(parseInt(P.room_count??1)||1),0),R=k.some(F=>F.package_type==="semester")||(j==null?void 0:j.package_type)==="semester",z=(j==null?void 0:j.is_paid)&&!(j!=null&&j.package_type)&&!R&&!I,q=parseInt(e.freeClassQuota??2);return R||z?{label:R?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${D} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:I>0?{label:`รายห้อง ${I} ห้อง`,detail:`ใช้แล้ว ${D}/${q+I} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${D}/${q} ห้อง`,cls:D>=q?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},x=n.filter(S=>S.profile_id),_=n.filter(S=>!S.profile_id),h=x.filter(S=>r.has(S.id)),$=x.filter(S=>!r.has(S.id)),b=(S,j,D,k)=>`<button type="button" data-rt-tab="${S}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${k} flex items-center justify-center text-xl font-bold">${D}</div>
        <p class="text-sm text-gray-500">${j}</p>
      </button>`,c=[...new Set(n.map(S=>S.dept).filter(Boolean))].sort(),M={};for(const S of n){const j=(S.full_name??"").toLowerCase().replace(/\s+/g,"");j&&(M[j]||(M[j]=[]),M[j].push(S))}const w=Object.values(M).filter(S=>S.length>1).map(S=>S.slice().sort((j,D)=>(j.registered_at??"")<(D.registered_at??"")?-1:1));Ee(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${b("all","ทั้งหมด",n.length,"bg-indigo-100 text-indigo-700")}
        ${b("registered","มีบัญชีแล้ว",x.length,"bg-emerald-100 text-emerald-700")}
        ${b("unregistered","ยังไม่ลงทะเบียน",_.length,"bg-amber-100 text-amber-700")}
        ${b("duplicates","บัญชีซ้ำ",w.length,w.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${b("scheduled","สร้างตารางสอนแล้ว",h.length,"bg-green-100 text-green-700")}
        ${b("unscheduled","ยังไม่สร้างตารางสอน",$.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${Ge} flex-1 min-w-40" />
          <select id="rt-cat" class="${qe}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${qe}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${c.map(S=>`<option value="${S}">${S}</option>`).join("")}
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="rt-count" class="font-semibold text-indigo-600">${n.length}</span>
          / ${n.length} รายการ
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
    </div>`);let C=n,T="all",H=null;const B=()=>{document.querySelectorAll("[data-rt-tab]").forEach(S=>{var D;const j=S.dataset.rtTab===T||S.dataset.rtTab===H;S.classList.toggle("border-emerald-400",j),S.classList.toggle("bg-emerald-50",j),S.classList.toggle("shadow-lg",j),S.classList.toggle("shadow-emerald-100",j),S.classList.toggle("ring-2",j),S.classList.toggle("ring-emerald-200",j),S.classList.toggle("border-gray-100",!j),(D=S.querySelector("p"))==null||D.classList.toggle("text-emerald-700",j)})},f=S=>m.get(S.id)??0,i=S=>r.has(S.id)?"✓":"—",y=()=>{const S=document.getElementById("rt-dup-list");if(S){if(!w.length){S.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}S.innerHTML=w.map((j,D)=>{const k=j.map((R,z)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${z===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${D}" value="${R.id}"
              class="mt-1 accent-emerald-600" ${z===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${R.image_url?`<img src="${R.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${ze(R.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${R.teacher_code??"—"}</span>
                ${R.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${f(R)}</span>
                <span>🗓️ ตาราง ${i(R)}</span>
                ${R.login_email?`<span>✉️ ${ze(R.login_email)}</span>`:""}
                ${R.registered_at?`<span>📅 ${new Date(R.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${R.id}</span>
              </div>
            </div>
          </label>`).join(""),I=j.map(R=>R.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${D}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${D+1} — ${ze(j[0].full_name??"")}
              <span class="ml-2 text-red-500">(${j.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${k}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${D},'${I}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(S,j)=>{var q;const D=j.split(",").map(Number),k=Number((q=document.querySelector(`input[name="dup-keep-${S}"]:checked`))==null?void 0:q.value);if(!k){N("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const I=D.filter(F=>F!==k);if(!I.length){N("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const R=n.find(F=>F.id===k);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${R==null?void 0:R.full_name} (ID ${k})
ลบ: ID ${I.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const z=document.querySelector(`[data-dup-group="${S}"] button`);z&&(z.disabled=!0,z.textContent="⏳ กำลังรวม...");try{for(const F of I)await xo(k,F);N(`รวมบัญชีสำเร็จ — เหลือ ID ${k}`,"success"),Kt()}catch(F){N("เกิดข้อผิดพลาด: "+we(F),"error"),z&&(z.disabled=!1,z.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const E=S=>{var D,k,I,R;const j=S==="duplicates";if((D=document.getElementById("rt-main-section"))==null||D.classList.toggle("hidden",j),(k=document.getElementById("rt-duplicates-section"))==null||k.classList.toggle("hidden",!j),(I=document.getElementById("rt-schedule-stats"))==null||I.classList.toggle("hidden",!0),j){T="duplicates",H=null,B(),y();return}S==="scheduled"||S==="unscheduled"?(T="registered",H=S):(T=S,H=null),C=T==="registered"?x:T==="unregistered"?_:n,(R=document.getElementById("rt-schedule-stats"))==null||R.classList.toggle("hidden",T!=="registered"),B(),L()},g=S=>{const j=document.getElementById("reg-teacher-table");if(j){if(!S.length){j.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`;return}j.innerHTML=`
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
              ${S.map(D=>{const k=(D.full_name??"?").charAt(0).toUpperCase(),I=!!D.profile_id,R=r.has(D.id),z=v(D);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${D.image_url?`<img src="${D.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${I?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${k}</div>`}
                      <div>
                        <p class="font-semibold text-gray-800">${D.full_name??"—"}</p>
                        <p class="text-xs text-gray-400">${D.dept??""}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">
                    ${D.teacher_code??"—"}
                  </td>
                  <td class="px-4 py-3 text-center hidden md:table-cell">
                    ${D.category?`<span class="px-2 py-0.5 rounded-full text-xs font-medium
                            ${D.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">
                          ${D.category}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
                  </td>
                  <td class="px-4 py-3 hidden lg:table-cell">
                    <span class="inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${z.cls}">
                      ${z.label}
                    </span>
                    <p class="text-[11px] text-gray-400 mt-1">${z.detail}</p>
                  </td>
                  <td class="px-4 py-3 text-center">
                    ${I?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`:`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`}
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${I?`<button onclick="window._adminViewSchedule(${D.id},'${Ve(D.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${R?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${D.id}, '${Ve(D.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},L=()=>{var R,z,q;const S=(((R=document.getElementById("rt-q"))==null?void 0:R.value)??"").toLowerCase(),j=((z=document.getElementById("rt-cat"))==null?void 0:z.value)??"",D=((q=document.getElementById("rt-dept"))==null?void 0:q.value)??"",k=C.filter(F=>(!S||[F.full_name,F.teacher_code].some(P=>(P??"").toLowerCase().includes(S)))&&(!j||F.category===j)&&(!D||F.dept===D)&&(!H||(H==="scheduled"?r.has(F.id):!r.has(F.id)))),I=document.getElementById("rt-count");I&&(I.textContent=k.length),g(k)};document.querySelectorAll("[data-rt-tab]").forEach(S=>{S.addEventListener("click",()=>E(S.dataset.rtTab))}),E("all"),["rt-q","rt-cat","rt-dept"].forEach(S=>{var j,D;(j=document.getElementById(S))==null||j.addEventListener("input",L),(D=document.getElementById(S))==null||D.addEventListener("change",L)}),window.handleUnlinkTeacher=async(S,j)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${j}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await go(S),N(`ยกเลิกบัญชี "${j}" แล้ว`,"success"),Kt()}catch(D){N("เกิดข้อผิดพลาด: "+we(D),"error")}}}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}async function Va(){je("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",Ee(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[e,s]=await Promise.all([Xt(),Oe().catch(()=>[])]),t=Object.fromEntries(s.map(l=>[l.id,l])),n=document.getElementById("class-list");if(e.length===0){n.innerHTML=`<div class="text-center py-16 text-gray-400">
        <p class="text-4xl mb-3">🏫</p><p class="font-medium">ยังไม่มีห้องเรียนในระบบ</p>
      </div>`;return}n.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
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
        ${e.map(l=>{var o,u;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4 font-semibold text-gray-800">${l.class_name??"—"}</td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            ${l.master_subjects?`<span class="font-mono text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded mr-1">${l.master_subjects.subject_code??"—"}</span>${l.master_subjects.subject_name??"—"}`:"—"}
          </td>
          <td class="px-5 py-4 hidden md:table-cell">
            <span class="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">${l.skill_group??"—"}</span>
          </td>
          <td class="px-5 py-4 text-xs text-gray-400 hidden lg:table-cell font-mono">
            ${l.google_sheet_id?`<span class="truncate block max-w-[160px]">${l.google_sheet_id}</span>`:"—"}
          </td>
          <td class="px-5 py-4 text-right whitespace-nowrap">
            ${(o=l.master_subjects)!=null&&o.teacher_id?`<button onclick="window._adminViewSchedule(${l.master_subjects.teacher_id},'${Ve(((u=t[l.master_subjects.teacher_id])==null?void 0:u.full_name)??l.master_subjects.subject_name??l.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${l.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${l.id},'${(l.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(e.map(l=>[l.id,l])),window._adminEditClass=l=>{var u;const o=(u=window._adminClassCache)==null?void 0:u[l];o&&Ps(null,o)},window._adminDeleteClass=async(l,o)=>{if(confirm(`ยืนยันลบห้องเรียน "${o}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await js(l),N(`ลบห้องเรียน "${o}" แล้ว`,"success"),Va()}catch(u){N("ลบไม่สำเร็จ: "+we(u),"error")}}}catch{N("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function wr(){je("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",Ee(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let d=function(a,m,v){var _;(_=document.getElementById("stu-modal"))==null||_.remove();const x=document.createElement("div");x.id="stu-modal",x.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",x.innerHTML=`
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
                  <input id="sf-code" type="text" value="${a.student_code??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">เพศ</label>
                  <select id="sf-gender-val" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-white">
                    <option value="">—</option>
                    <option value="ชาย" ${a.gender==="ชาย"?"selected":""}>ชาย</option>
                    <option value="หญิง" ${a.gender==="หญิง"?"selected":""}>หญิง</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
                <input id="sf-name" type="text" value="${a.full_name??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องสามัญ</label>
                  <input id="sf-main-room" type="text" value="${a.main_room??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องศาสนา</label>
                  <input id="sf-rel-room" type="text" value="${a.religion_room??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ประจำสี</label>
                  <input id="sf-house-color" type="text" value="${a.house_color??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ไซด์เสื้อกีฬาสี</label>
                  <input id="sf-shirt-size" type="text" value="${a.sports_shirt_size??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
              </div>
              
              <!-- Auth Accounts Section -->
              <div class="border-t border-gray-100 my-4 pt-3">
                <p class="text-xs font-bold text-indigo-600 mb-2 flex items-center gap-1">🔒 บัญชีผู้ใช้งานนักเรียน</p>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">อีเมลเข้าใช้งาน (แก้ไขกู้คืน)</label>
                    <input id="sf-auth-email" type="email" value="${a.profile_id?m:`stu${a.student_code}@student.pp5.local`}"
                      class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-gray-50 text-gray-600" />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">${a.profile_id?"ตั้งรหัสผ่านใหม่ (ระบุเมื่อต้องการเปลี่ยน)":"ตั้งรหัสผ่านเริ่มต้น (จะเปิดบัญชีให้อัตโนมัติ)"}</label>
                    <div class="flex gap-2">
                      <input id="sf-auth-pw" type="text" placeholder="อย่างน้อย 6 ตัวอักษร"
                        class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                      <button type="button" id="sf-auth-pw-fill" title="ใช้รหัสนักเรียนเป็นรหัสผ่าน"
                        class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition whitespace-nowrap">
                        🔄 = รหัสนักเรียน
                      </button>
                    </div>
                    <p class="text-[11px] text-gray-400 mt-1">
                      ${a.profile_id?"กรอกแล้วกดบันทึก จะเปลี่ยนรหัสผ่านทันที นักเรียนใช้ชุดใหม่นี้เข้าระบบครั้งถัดไปได้เลย":"นักเรียนคนนี้ยังไม่เคยเปิดบัญชี — ระบุรหัสผ่านแล้วกดบันทึก ระบบจะสร้างบัญชีให้อัตโนมัติ ไม่ต้องรอนักเรียนเปิดเอง"}
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
        </div>`,document.body.appendChild(x),x.querySelector("#stu-close").addEventListener("click",()=>x.remove()),x.querySelector("#stu-cancel").addEventListener("click",()=>x.remove()),x.addEventListener("click",h=>{h.target===x&&x.remove()}),x.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{x.querySelector("#sf-auth-pw").value=x.querySelector("#sf-code").value.trim()}),x.querySelector("#stu-form").addEventListener("submit",async h=>{h.preventDefault();const $=x.querySelector("#stu-save");$.disabled=!0,$.textContent="กำลังบันทึก...";try{const b={student_code:x.querySelector("#sf-code").value.trim()||null,full_name:x.querySelector("#sf-name").value.trim()||null,main_room:x.querySelector("#sf-main-room").value.trim()||null,religion_room:x.querySelector("#sf-rel-room").value.trim()||null,gender:x.querySelector("#sf-gender-val").value||null,house_color:x.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:x.querySelector("#sf-shirt-size").value.trim()||null},c=x.querySelector("#sf-auth-email").value.trim()||null,M=x.querySelector("#sf-auth-pw").value.trim()||null;if(!a.profile_id&&!M){N("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),$.disabled=!1,$.textContent="บันทึก";return}await v(b,c||M?{email:c,password:M}:null),N("บันทึกสำเร็จ","success"),x.remove()}catch(b){N("บันทึกไม่สำเร็จ: "+we(b),"error")}finally{$.disabled=!1,$.textContent="บันทึก"}})};const e=await _t(),s=Pe(e.map(a=>Ze(a.main_room))),t=Pe(e.map(a=>ct(a.main_room))),n=Pe(e.map(a=>a.house_color)),l=Pe(e.map(a=>a.sports_shirt_size));Ee(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${Ge} flex-1 min-w-40" />
          <select id="sf-grade" class="${qe}">
            <option value="">ทุกระดับชั้น</option>
            ${s.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-room" class="${qe}">
            <option value="">ทุกห้อง</option>
            ${t.map(a=>`<option value="${a}">ห้อง ${a}</option>`).join("")}
          </select>
          <select id="sf-gender" class="${qe}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <select id="sf-house" class="${qe}">
            <option value="">ทุกสี</option>
            ${n.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-shirt" class="${qe}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${l.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-page-size" class="${qe}">
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
    </div>`);let o=Object.fromEntries(e.map(a=>[a.id,a])),u=1e3;const r=a=>{const m=document.getElementById("student-table-wrap"),v=u==="all"?a:a.slice(0,u);if(document.getElementById("sf-count").textContent=a.length,document.getElementById("sf-showing").textContent=v.length,!a.length){m.innerHTML=`<div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">🔍</p><p>ไม่พบข้อมูลที่ค้นหา</p></div>`;return}m.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
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
          ${v.map(x=>`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${x.image_url?`<img src="${x.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(x.full_name??"?").charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${x.full_name??"—"}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${x.student_code??"—"}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${x.main_room??"—"}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${x.religion_room?`<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${x.religion_room}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${x.gender??"—"}</td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${x.house_color?`<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${x.house_color}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${x.sports_shirt_size?`<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${x.sports_shirt_size}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${x.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${x.id},'${(x.full_name??"").replace(/'/g,"")}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      ${v.length<a.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(a,m)=>{if(confirm(`ยืนยันลบนักเรียน "${m}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await In(a),delete o[a],e.splice(e.findIndex(v=>v.id===a),1),N(`ลบ "${m}" แล้ว`,"success"),p()}catch(v){N("ลบไม่สำเร็จ: "+we(v),"error")}},window._editStudent=async a=>{const m=o[a];if(!m)return;let v="";try{const{data:x,error:_}=await oe.rpc("lookup_student_by_code",{p_student_code:m.student_code});!_&&x&&x[0]&&(v=x[0].login_email||"")}catch(x){console.error(x)}d(m,v,async(x,_)=>{if(await Tn(a,x),_&&(_.email||_.password)){const{error:h}=await oe.rpc("admin_update_student_auth",{p_student_id:a,p_new_email:_.email||null,p_new_password:_.password||null});if(h)throw h}Object.assign(m,x),o[a]=m,p()})},r(e);const p=()=>{const a=document.getElementById("sf-q").value.toLowerCase(),m=document.getElementById("sf-grade").value,v=document.getElementById("sf-room"),x=v.value,_=Pe(e.filter(w=>!m||Ze(w.main_room)===m).map(w=>ct(w.main_room)));_.includes(x)||(v.value=""),v.innerHTML='<option value="">ทุกห้อง</option>'+_.map(w=>`<option value="${w}" ${w===v.value?"selected":""}>ห้อง ${w}</option>`).join("");const h=v.value,$=document.getElementById("sf-gender").value,b=document.getElementById("sf-house").value,c=document.getElementById("sf-shirt").value,M=document.getElementById("sf-page-size").value;u=M==="all"?"all":Number(M),r(e.filter(w=>(!a||[w.full_name,w.student_code,w.main_room,w.religion_room].some(C=>(C??"").toLowerCase().includes(a)))&&(!m||Ze(w.main_room)===m)&&(!h||ct(w.main_room)===h)&&(!$||w.gender===$)&&(!b||w.house_color===b)&&(!c||w.sports_shirt_size===c)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(a=>{var m,v;(m=document.getElementById(a))==null||m.addEventListener("input",p),(v=document.getElementById(a))==null||v.addEventListener("change",p)})}catch{N("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function oi(){const{getCommentPhrases:e,addCommentPhrase:s,updateCommentPhrase:t,deleteCommentPhrase:n}=await Ce(async()=>{const{getCommentPhrases:p,addCommentPhrase:a,updateCommentPhrase:m,deleteCommentPhrase:v}=await import("./api-C-roKrdU.js");return{getCommentPhrases:p,addCommentPhrase:a,updateCommentPhrase:m,deleteCommentPhrase:v}},__vite__mapDeps([0,1,2,3,4])),l=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],o={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},u={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},r=document.createElement("div");r.style.cssText="padding:4px 0;";async function d(){const p=await e().catch(()=>[]);r.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${l.map(a=>{const m=p.filter(v=>v.metric===a.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${o[a.key]};color:${u[a.key]};padding:3px 12px;border-radius:20px;">${a.label}</span>
            <button class="ph-add-btn" data-metric="${a.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${m.map(v=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f9fafb;border-radius:8px;">
                <input class="ph-edit-inp" data-id="${v.id}" value="${v.phrase.replace(/"/g,"&quot;")}"
                  style="flex:1;border:none;background:transparent;font-size:13px;font-family:inherit;outline:none;"/>
                <button class="ph-save-btn" data-id="${v.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #059669;border-radius:6px;background:#d1fae5;color:#065f46;cursor:pointer;font-family:inherit;white-space:nowrap;">
                  บันทึก
                </button>
                <button class="ph-del-btn" data-id="${v.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:6px;background:#fee2e2;color:#dc2626;cursor:pointer;font-family:inherit;">
                  ลบ
                </button>
              </div>`).join("")}
            ${m.length?"":'<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>'}
          </div>
        </div>`}).join("")}
    `,r.querySelectorAll(".ph-add-btn").forEach(a=>{a.onclick=async()=>{const m=prompt("พิมพ์ประโยคใหม่:");m!=null&&m.trim()&&(await s(a.dataset.metric,m.trim()),d())}}),r.querySelectorAll(".ph-save-btn").forEach(a=>{a.onclick=async()=>{const m=r.querySelector(`.ph-edit-inp[data-id="${a.dataset.id}"]`);await t(parseInt(a.dataset.id),m.value.trim()),a.textContent="✓",setTimeout(()=>a.textContent="บันทึก",1e3)}}),r.querySelectorAll(".ph-del-btn").forEach(a=>{a.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await n(parseInt(a.dataset.id)),d())}})}return await d(),r}async function Wa(){je("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",Ee(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[e,s,t,n]=await Promise.all([Ne(),ea().catch(()=>[]),st().catch(()=>[]),io().catch(()=>[])]);e.feedbackQuotaTeacher=e.feedbackQuotaTeacher||"5",e.feedbackQuotaStudent=e.feedbackQuotaStudent||"3",e.freeAttendanceScanLimit=e.freeAttendanceScanLimit||"2",e.freeRandomPickerLimit=e.freeRandomPickerLimit||"1",e.freeTimerLimit=e.freeTimerLimit||"1",e.freeDashboardLimit=e.freeDashboardLimit||"0",e.freePromptAiLimit=e.freePromptAiLimit||"1",window._latestFullBackupId=null;const l=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],o=[...new Set([...l,...t.map(x=>x.dept_code).filter(Boolean),...n.map(x=>x.dept).filter(Boolean)])].sort(),u={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},r="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(x,_,h)=>{var c,M,w,C,T;const $=(M=(c=document.getElementById(_))==null?void 0:c.value)==null?void 0:M.trim(),b=document.getElementById(h);if(!$){b.textContent="⚠️ ยังไม่ได้ใส่ Key",b.className="text-xs text-amber-500 font-medium";return}x.textContent="⏳",x.disabled=!0;try{const H=((C=(w=document.getElementById("cfg-geminiModel"))==null?void 0:w.value)==null?void 0:C.trim())||"gemini-1.5-flash",B=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${H}:generateContent?key=${$}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if(B.ok)b.textContent="✅ ใช้งานได้",b.className="text-xs text-emerald-600 font-semibold";else{const i=((T=(await B.json().catch(()=>({}))).error)==null?void 0:T.message)??`HTTP ${B.status}`;b.textContent=`❌ ${i.slice(0,60)}`,b.className="text-xs text-red-500 font-medium"}}catch{b.textContent="❌ เชื่อมต่อไม่ได้",b.className="text-xs text-red-500 font-medium"}x.textContent="ทดสอบ",x.disabled=!1};const d=({key:x,label:_,type:h,options:$,placeholder:b,hint:c,rows:M,syncFrom:w})=>{var B;const C=e[x]??"",T=`id="cfg-${x}" data-key="${x}"`,H=(f,i="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${_}</label>
          ${f}
          ${i?`<p class="text-[11px] text-gray-400 mt-1">${i}</p>`:""}
        </div>`;if(h==="color")return H(`
        <div class="flex items-center gap-3">
          <input type="color" ${T} value="${C||u[x]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${x}-txt" class="text-sm font-mono text-gray-600">${C||u[x]||"#007bff"}</span>
        </div>`,c);if(h==="date")return H(`<input type="date" ${T} value="${C}" class="${r}" />`,c);if(h==="select")return H(`
        <select ${T} class="${r} bg-white">
          ${($??[]).map(f=>{const i=typeof f=="object"?f.value:f,y=typeof f=="object"?f.label:f;return`<option value="${i}" ${i===C?"selected":""}>${y}</option>`}).join("")}
        </select>`,c);if(h==="choice"){const f=C||((B=$==null?void 0:$[0])==null?void 0:B.value)||"";return H(`
          <input type="hidden" ${T} value="${ee(f)}" />
          <div class="flex flex-wrap gap-2" role="group" aria-label="${ee(_)}">
            ${($??[]).map(i=>{const y=typeof i=="object"?i.value:i,E=typeof i=="object"?i.label:i;return`<button type="button" class="cfg-choice px-3 py-2 rounded-xl border text-sm font-semibold transition ${y===f?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}" data-choice-key="${ee(x)}" data-choice-value="${ee(y)}">
                ${ee(E)}
              </button>`}).join("")}
          </div>`,c)}if(h==="textarea")return H(`<textarea ${T} rows="${M??3}" placeholder="${b??""}"
          class="${r} resize-none">${C??""}</textarea>`,c);if(h==="upload")return H(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${C?`<img src="${C}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${C?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${x}" />
          </label>
          ${/(?:LogoUrl|LogoBwUrl)$/.test(x)?`<button type="button"
            class="cfg-upload-clear ${C?"":"hidden"} flex-shrink-0 px-3 py-2 rounded-lg border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition"
            data-key="${x}">🗑️ ล้างโลโก้</button>`:""}
          <input type="hidden" ${T} value="${C}" />
        </div>`,c);if(h==="toggle"){const f=C==="true";return H(`
          <button type="button" ${T} data-on="${f}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${f?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${f?"28":"2"}px)"></span>
          </button>`,c)}if(h==="password"){const f=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(x),i=`const i=document.getElementById('cfg-${x}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,y=f?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${x}','cfg-${x}-st')">ทดสอบ</button>
             <span id="cfg-${x}-st" class="text-xs text-gray-400"></span>`:"";return H(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${T} value="${C}" class="${r} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${i}">ดู</button>
            ${y}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,c)}return H(w?`
        <div class="flex gap-2 items-center">
          <input type="text" ${T} value="${C??""}" placeholder="${b??""}" class="${r} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${w}','${x}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${T} value="${C??""}" placeholder="${b??""}" class="${r}" />`,c)},p=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"term-data",icon:"🗃️",label:"ข้อมูลทั้งหมด"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],a=x=>{const _=(h,$)=>`<div class="mb-6">
          ${h?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${h}</p>`:""}
          ${$.map(d).join("")}
        </div>`;if(x==="term-data")return`
        <section class="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
          <p class="text-sm font-bold text-emerald-900">🔄 สำรองข้อมูลที่กำลังจะล้างก่อนขึ้นภาคเรียน</p>
          <p class="text-xs text-emerald-800 mt-2 leading-relaxed">สำรองเฉพาะข้อมูลการเข้าเรียนและคะแนนละหมาดของภาคเรียนปัจจุบัน ไม่รวมข้อมูลคอร์ส ห้องเรียน คะแนน หรือไฟล์ Storage</p>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <button id="btn-create-term-backup" type="button" class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-sm">⬇️ สำรองข้อมูลก่อนขึ้นภาคเรียน</button>
            <button id="btn-resume-term-backup" type="button" class="hidden inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50 text-sm font-bold">▶️ ทำสำรองภาคเรียนต่อ</button>
            <button id="btn-clear-term-backup" type="button" class="hidden inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold">🧹 ล้างจุดสำรองค้าง</button>
            <span id="term-backup-status" class="text-xs text-gray-600"></span>
          </div>
          <div id="term-backup-progress-wrap" class="hidden mt-3 rounded-xl border border-emerald-100 bg-white/80 p-3" role="status" aria-live="polite">
            <div class="flex items-center justify-between gap-2 text-xs"><span id="term-backup-progress-label" class="font-bold text-emerald-800">เตรียมสำรองข้อมูล</span><span id="term-backup-progress-count" class="text-emerald-700"></span></div>
            <div class="mt-2 h-2.5 overflow-hidden rounded-full bg-emerald-100"><div id="term-backup-progress-bar" class="h-full rounded-full bg-emerald-600 transition-all duration-300" style="width:0%"></div></div>
          </div>
        </section>
        <section class="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
          <p class="text-sm font-bold text-indigo-900">🗃️ สำรองและกู้คืนข้อมูลทั้งหมดของระบบ</p>
          <p class="text-xs text-indigo-700 mt-2 leading-relaxed">
            ไฟล์นี้รวมข้อมูลแอปพลิเคชันทั้งหมดของระบบ ปพ.5 และโมดูลที่ใช้งานในฐานข้อมูล เช่น สถานศึกษา ครู นักเรียน รายวิชา ห้องเรียน คะแนน การเข้าเรียน คะแนนละหมาด การชำระเงิน กีฬา และสภานักเรียน
            รวมไฟล์ใน Supabase Storage เช่น โลโก้ รูปภาพ และเอกสารอัปโหลด โดยไม่รวมรหัสผ่านของผู้ใช้และระบบภายในของ Supabase
          </p>
          <div class="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 leading-relaxed">
            ⚠️ ไฟล์สำรองอาจมีข้อมูลส่วนบุคคลจำนวนมาก ควรเก็บไว้ในเครื่องหรือไดรฟ์ที่ผู้ดูแลควบคุมเท่านั้น และห้ามส่งต่อโดยไม่จำเป็น
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <button id="btn-create-full-backup" type="button" class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-sm">
              ⬇️ สำรองข้อมูลทั้งหมด
            </button>
            <button id="btn-reset-full-backup" type="button" class="hidden inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs font-bold">
              🧹 ล้างงานสำรองค้าง
            </button>
            <span id="full-backup-status" class="text-xs text-gray-500"></span>
          </div>
          <div id="full-backup-progress-wrap" class="hidden mt-4 rounded-xl border border-indigo-100 bg-white/80 p-3" role="status" aria-live="polite">
            <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span id="full-backup-progress-label" class="font-bold text-indigo-800">ความคืบหน้าโดยประมาณ 0%</span>
              <span id="full-backup-progress-detail" class="text-indigo-600"></span>
            </div>
            <div class="mt-2 h-2.5 overflow-hidden rounded-full bg-indigo-100" role="progressbar" aria-label="ความคืบหน้าการสำรองข้อมูล" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
              <div id="full-backup-progress-bar" class="h-full rounded-full bg-indigo-600 transition-all duration-300" style="width:0%"></div>
            </div>
            <p id="full-backup-progress-note" class="mt-2 text-[11px] text-gray-500"></p>
          </div>
          <p class="text-[11px] text-indigo-700 mt-3 leading-relaxed">💾 หากเบราว์เซอร์รองรับ ระบบจะให้เลือกตำแหน่งจัดเก็บและเขียนไฟล์แบบสตรีมโดยตรง เพื่อรองรับข้อมูลขนาดใหญ่โดยไม่ค้างไว้ในหน่วยความจำหน้าเว็บ</p>
          <div class="mt-6 border-t border-indigo-100 pt-5">
            <p class="text-sm font-bold text-gray-800">กู้คืนจากไฟล์สำรอง</p>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">รองรับทั้งไฟล์สำรองทั้งหมดและไฟล์เฉพาะข้อมูลเข้าเรียน/ละหมาด ระบบตรวจ SHA-256 ก่อนกู้คืน และไม่ลบข้อมูลอื่นที่อยู่นอกไฟล์</p>
            <div class="mt-3 flex flex-wrap items-center gap-3">
              <input id="full-backup-file" type="file" accept=".gz,application/gzip" class="block max-w-full text-xs text-gray-600" />
              <button id="btn-restore-full-backup" type="button" disabled class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-bold shadow-sm">
                ♻️ กู้คืนจากไฟล์สำรอง
              </button>
            </div>
            <p id="full-restore-status" class="text-xs text-gray-500 mt-3"></p>
          </div>
        </section>`;if(x==="general")return[`<section class="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">ภาคเรียนปัจจุบันของระบบ</p>
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-xl bg-white border border-indigo-100 px-4 py-2.5 text-sm font-bold text-indigo-800">
              📚 ภาคเรียนที่ ${ee(e.semester??"—")} / ${ee(e.academicYear??e.academic_year??"—")}
            </span>
            <span class="text-xs text-indigo-600">การเปลี่ยนภาคเรียนต้องใช้ปุ่ม “ขึ้นภาคเรียนใหม่” ด้านล่าง เพื่อให้ระบบเก็บประวัติและสร้างพื้นที่ว่างอย่างปลอดภัย</span>
          </div>
          <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-indigo-700">
            <span>เปิดภาคเรียน: ${ee(e.semester_start??"—")}</span>
            <span>ปิดภาคเรียน: ${ee(e.semester_end??"—")}</span>
          </div>
        </section>
        <section class="mb-6 rounded-2xl border border-gray-200 bg-white p-4">
          <div class="flex items-center justify-between gap-3 mb-3">
            <div>
              <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">ประวัติภาคเรียน</p>
              <p class="text-[11px] text-gray-400 mt-1">ใช้สำหรับตรวจสอบและเป็นรายการให้ครู/นักเรียนเลือกดูข้อมูลย้อนหลัง</p>
            </div>
            <span class="text-[11px] text-gray-400">${s.length} ภาคเรียน</span>
          </div>
          <div class="space-y-2">
            ${(s.length?s:[{academic_year:e.academicYear,semester:e.semester,start_date:e.semester_start,end_date:e.semester_end,is_current:!0}]).map(h=>`
              <div class="flex flex-wrap items-center justify-between gap-2 rounded-xl border ${h.is_current?"border-emerald-200 bg-emerald-50/60":"border-gray-100 bg-gray-50/60"} px-3 py-2.5">
                <div class="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <span>${h.is_current?"🟢":"🗂️"}</span>
                  <span>ภาค ${ee(h.semester)}/${ee(h.academic_year)}</span>
                  ${h.is_current?'<span class="text-[10px] rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">ปัจจุบัน</span>':'<span class="text-[10px] rounded-full bg-gray-200 text-gray-500 px-2 py-0.5">ย้อนหลัง</span>'}
                </div>
                <span class="text-[11px] text-gray-400">${ee(h.start_date??"—")} ถึง ${ee(h.end_date??"—")}</span>
              </div>`).join("")}
          </div>
        </section>`,`<div id="start-new-semester-box" class="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p class="text-sm font-bold text-amber-900">🔄 ขึ้นภาคเรียนใหม่</p>
          <p class="text-xs text-amber-800 mt-1.5 leading-relaxed">
            เปลี่ยนระบบเป็นปี/ภาคเรียนใหม่แบบพื้นที่ว่าง — <b>ไม่สร้างคอร์สวิชา ห้องเรียน หรือการลงทะเบียนนักเรียนให้อัตโนมัติ</b>
            บัญชีครู บัญชีนักเรียน และข้อมูลประวัติยังคงอยู่ ไม่ต้องสมัครใช้งานใหม่ ครูผู้สอนจะเป็นผู้สร้างคอร์ส ห้องเรียน และลงทะเบียนนักเรียนของภาคใหม่เอง คะแนนเดิมจะเก็บเป็นข้อมูลดิบ ส่วนข้อมูลเข้าเรียนและละหมาดจะถูกล้างหลังไฟล์สำรองภาคเรียนปัจจุบันผ่านการตรวจสอบแล้ว
          </p>
          <p id="start-new-semester-target" class="text-xs text-amber-700 mt-2 font-mono"></p>
          <div class="grid sm:grid-cols-2 gap-3 mt-3">
            <label class="block text-xs font-semibold text-amber-900">
              วันเปิดภาคเรียนใหม่
              <input id="start-new-semester-start" type="date"
                value="${new Date().toISOString().slice(0,10)}"
                class="mt-1 w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-gray-700" />
            </label>
            <label class="block text-xs font-semibold text-amber-900">
              วันปิดภาคเรียนใหม่
              <input id="start-new-semester-end" type="date"
                value="${e.semester_end&&e.semester_end>=new Date().toISOString().slice(0,10)?e.semester_end:""}"
                class="mt-1 w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-gray-700" />
            </label>
          </div>
          <p class="text-[11px] text-amber-700 mt-2">ระบบจะไม่ดำเนินการหากยังไม่ระบุวันปิด หรือวันที่ปิดอยู่ก่อนวันเปิด</p>
          <button id="btn-start-new-semester" type="button"
            class="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-sm">
            🔄 ขึ้นภาคเรียนใหม่
          </button>
        </div>`,_("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),_("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(x==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map(h=>d({...h,type:"color"})).join("")}
        </div>`;if(x==="school"){const h=($,b)=>[{key:`${$}SchoolName`,label:b.name,type:"text"},{key:`${$}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${$}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${$}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${$}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${$}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${$}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${$}AcademicHeadName`,label:$==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:$==="samai"?"academic_samai":"academic_pvch"},{key:`${$}AcademicHeadSignUrl`,label:$==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${$}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...$==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${$}RegistrarName`,label:$==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:$==="samai"?"registrar_samai":"registrar_pvch"},{key:`${$}RegistrarSignUrl`,label:$==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${$}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...$==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"},{key:"religionDeptHeadSource",label:"ชื่อหัวหน้ากลุ่มสาระในเอกสาร ปพ.5 (วิชาศาสนา)",type:"choice",options:[{value:"central",label:"ใช้หัวหน้ากลุ่มสาระกลาง"},{value:"subgroup",label:"ใช้หัวหน้ากลุ่มย่อยของครูผู้สอน"}],hint:"ใช้กับทั้งศาสนามัธยม (AGM) และศาสนาปวช. (AGMVOC) — หากเลือกหัวหน้ากลุ่มย่อยแต่ยังไม่พบกลุ่มของครู ระบบจะสำรองเป็นหัวหน้ากลุ่มสาระกลาง"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${h("samai",{name:"ชื่อโรงเรียน"}).map(d).join("")}</div>
          <div id="school-porwor" class="hidden">${h("porwor",{name:"ชื่อวิทยาลัย"}).map(d).join("")}</div>`}if(x==="prayer")return[_("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),_("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(x==="contact")return[_("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),_("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},(h,$)=>String($+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},(h,$)=>String($+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(x==="payment")return[_("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),_("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(x==="package"){const $=Array.from({length:5},(w,C)=>{const T=C+1,H=`donationStickerImg${T}`,B=e[H]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${B?`<img src="${B}" class="w-full h-full object-contain" id="sticker-prev-${T}" />`:`<span id="sticker-prev-${T}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${T}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${H}" data-n="${T}" />
              </label>
              ${B?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${H}" data-n="${T}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${H}" value="${B}" />
              ${B?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${B}</p>`:""}
            </div>
          </div>`}).join(""),b=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],c={quota:[_("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),_("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),_("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[_("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),_("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),_("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(w=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${w}">
                  👁️ ระดับ ${w}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const w=String(e.donationSpecialFeatures??"").trim(),T=w?w.split(`
`).filter(Boolean).map(i=>{const y=i.split("|").map(E=>E.trim());return{icon:y[0]||"✨",text:y[1]||"",minTier:parseInt(y[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([i,y,E])=>({icon:i,text:y,minTier:E})),H=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],B=(i,y)=>y?`border:2px solid ${H[i-1]};color:${H[i-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",f=(i,y)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${y}" data-min-tier="${i.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${i.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${i.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(E=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${B(E,i.minTier===E)}" data-n="${E}" title="ระดับ ${E}">${E}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${T.map((i,y)=>f(i,y)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(e.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),_("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${$}</div>
            </div>`,_("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),_("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[_("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[_("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),_("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},M="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${b.map(w=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${w.id===M?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${w.id}">${w.label}</button>`).join("")}
          </div>
          ${b.map(w=>`
          <div id="pkg-panel-${w.id}" ${w.id!==M?'class="hidden"':""}>
            ${c[w.id]??""}
          </div>`).join("")}`}if(x==="student")return[_("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),_("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),_("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),_("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),_("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
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
        </div>`].join("");if(x==="sync"){const h=[["classInfoSubjectNameCell","ชื่อรายวิชา"],["classInfoSubjectCodeCell","รหัสวิชา"],["classInfoCreditCell","หน่วยกิต"],["classInfoGradeCell","ชั้นเรียน"],["classInfoHeadStudentCell","หัวหน้าห้อง"],["classInfoDay1Cell","วันสอนคาบ 1"],["classInfoDay2Cell","วันสอนคาบ 2"],["classInfoDay3Cell","วันสอนคาบ 3"],["classInfoDay4Cell","วันสอนคาบ 4"],["classInfoDay5Cell","วันสอนคาบ 5"],["classInfoDay6Cell","วันสอนคาบ 6"],["classInfoTeacherNameCell","ครูผู้สอน"],["classInfoTeacherPhoneCell","เบอร์ติดต่อ"],["classInfoDeptCell","กลุ่มสาระ"],["classInfoHeadDeptCell","หัวหน้าหมวด"]];return`
          ${d({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          ${d({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${h.map(([$,b])=>{const c=e[$]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${b}</p>
                <input type="text" id="cfg-${$}" data-key="${$}" value="${c}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return x==="template"?[_("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${Fo.map(h=>d({key:h.key,label:`${h.category} — ${h.label}`,type:"text",placeholder:h.defaultId,hint:`default: ${h.defaultId}`})).join("")}`].join(""):x==="phrases"?oi():x==="schedule"?[_("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),_("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),_("Gemini API Key แยกต่อกลุ่มสาระ",o.length?o.map(h=>({key:`geminiKey_${h}`,label:`Key กลุ่มสาระ ${h}`,type:"password",hint:`ครูที่มี dept = ${h} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):x==="council"?[_("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let m="general";Ee(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${p.map(x=>`
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${x.id===m?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-tab="${x.id}">
            <span>${x.icon}</span><span class="hidden sm:inline">${x.label}</span>
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
    </div>`);const v=x=>{var ie;m=x,document.querySelectorAll(".cfg-tab").forEach(G=>{const le=G.dataset.tab===x;G.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${le?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const _=a(x),h=document.getElementById("cfg-panel-inner");_ instanceof Promise?(h.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',_.then(G=>{h.innerHTML="",G instanceof Element?h.appendChild(G):h.innerHTML=G??""})):_ instanceof Element?(h.innerHTML="",h.appendChild(_)):h.innerHTML=_??"",document.getElementById("cfg-save-hint").textContent="";const $=document.getElementById("btn-create-full-backup"),b=document.getElementById("btn-reset-full-backup"),c=document.getElementById("full-backup-status"),M=document.getElementById("full-backup-progress-wrap"),w=document.getElementById("full-backup-progress-label"),C=document.getElementById("full-backup-progress-detail"),T=document.getElementById("full-backup-progress-bar"),H=document.getElementById("full-backup-progress-note"),B=document.getElementById("btn-create-term-backup"),f=document.getElementById("btn-resume-term-backup"),i=document.getElementById("btn-clear-term-backup"),y=document.getElementById("term-backup-status"),E=document.getElementById("term-backup-progress-wrap"),g=document.getElementById("term-backup-progress-label"),L=document.getElementById("term-backup-progress-count"),S=document.getElementById("term-backup-progress-bar"),j=async G=>{if(!G&&!confirm("สร้างไฟล์สำรองเฉพาะข้อมูลการเข้าเรียนและคะแนนละหมาดของภาคเรียนปัจจุบันใช่หรือไม่?"))return;const le=G?null:Dl(),de=parseInt(e.academicYear??e.academic_year),pe=parseInt(e.semester);let me=G?"กำลังตรวจสอบจุดสำรองเดิม":"กำลังเริ่มสำรองข้อมูล";const Z=Date.now();let ve=Z;B&&(B.disabled=!0),f&&(f.disabled=!0),i&&(i.disabled=!0),B&&(B.textContent=G?"⏳ กำลังทำสำรองต่อ...":"⏳ กำลังสำรองข้อมูลภาคเรียน..."),E==null||E.classList.remove("hidden"),g&&(g.textContent=me),L&&(L.textContent=""),!G&&S&&(S.style.width="0%");const he=setInterval(()=>{if(Date.now()-ve<15e3||!y)return;const ge=Math.floor((Date.now()-Z)/1e3);y.textContent=`${me} · ${ge.toLocaleString()} วินาที`},5e3);try{const ge=await Wl({saveTarget:le,resume:G,academicYear:de,semester:pe,onProgress:(Q,te,ue)=>{me=Q,ve=Date.now(),y&&(y.textContent=Q),g&&(g.textContent=`${Q}${(ue==null?void 0:ue.percent)!=null?` · ${ue.percent}%`:""}`),L&&(L.textContent=(ue==null?void 0:ue.totalRows)!=null?`${ue.completedRows.toLocaleString()}/${ue.totalRows.toLocaleString()} รายการ`:te?`${te.toLocaleString()} รายการ`:""),S&&(ue==null?void 0:ue.percent)!=null&&(S.style.width=`${Math.max(0,Math.min(100,ue.percent))}%`)}});window._latestTermBackupId=ge.backupId,B&&(B.disabled=!1),y&&(y.textContent=`สำเร็จ ${ge.academicYear}/${ge.semester} · เข้าเรียน ${ge.counts.attendances.toLocaleString()} · ละหมาด ${ge.counts.prayer_records.toLocaleString()} · ${(ge.byteSize/1024/1024).toFixed(1)} MB`),g&&(g.textContent="ตรวจสอบและลงทะเบียนไฟล์สำรองสำเร็จ · 100%"),S&&(S.style.width="100%"),f==null||f.classList.add("hidden"),i==null||i.classList.add("hidden"),N("สำรองข้อมูลที่จะล้างก่อนขึ้นภาคเรียนสำเร็จ ✅","success")}catch(ge){y&&(y.textContent=(ge==null?void 0:ge.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ไม่มีข้อมูลถูกลบ":"สำรองข้อมูลภาคเรียนไม่สำเร็จ · ตรวจสอบข้อความผิดพลาดและเลือก “ทำสำรองต่อ” ได้"),N("สำรองข้อมูลภาคเรียนไม่สำเร็จ: "+we(ge),"error");const Q=await bs(de,pe);f==null||f.classList.toggle("hidden",!Q),i==null||i.classList.toggle("hidden",!Q),B&&Q&&(B.disabled=!0,B.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่")}finally{if(clearInterval(he),B){const ge=f&&!f.classList.contains("hidden");B.disabled=!!ge,B.textContent=ge?"⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่":"⬇️ สำรองข้อมูลก่อนขึ้นภาคเรียน"}f&&(f.disabled=!1),i&&(i.disabled=!1)}};B&&!B.dataset.bound&&(B.dataset.bound="true",B.addEventListener("click",()=>j(!1))),f&&!f.dataset.bound&&(f.dataset.bound="true",f.addEventListener("click",()=>j(!0))),i&&!i.dataset.bound&&(i.dataset.bound="true",i.addEventListener("click",async()=>{const G=parseInt(e.academicYear??e.academic_year),le=parseInt(e.semester);if(confirm("ล้างเฉพาะจุดสำรองภาคเรียนที่ค้างในเบราว์เซอร์ใช่หรือไม่? ไฟล์ที่เลือกไว้จะไม่ถูกลบ"))try{await Ol(G,le),f.classList.add("hidden"),i.classList.add("hidden"),B&&(B.disabled=!1),y&&(y.textContent="ล้างจุดสำรองค้างแล้ว · สามารถเริ่มไฟล์ใหม่ได้")}catch(de){N("ล้างจุดสำรองค้างไม่สำเร็จ: "+we(de),"error")}})),f&&bs(parseInt(e.academicYear??e.academic_year),parseInt(e.semester)).then(G=>{f.classList.toggle("hidden",!G),i==null||i.classList.toggle("hidden",!G),B&&(B.disabled=!!G),B&&G&&(B.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่"),G&&y&&(y.textContent=`พบงานค้าง ${G.academicYear}/${G.semester} · ต่อจาก ${G.completedRows.toLocaleString()}/${G.totalRows.toLocaleString()} รายการ`)}).catch(G=>console.warn("อ่านจุดสำรองภาคเรียนไม่สำเร็จ:",G));let D=null,k=!1;const I=G=>{var de;if(!M||!G)return;M.classList.remove("hidden");const le=Math.max(0,Math.min(100,Number(G.percent)||0));if(w&&(w.textContent=`ความคืบหน้าโดยประมาณ ${le}%`),T&&(T.style.width=`${le}%`,(de=T.parentElement)==null||de.setAttribute("aria-valuenow",String(le))),C){const pe=G.tableCount?`ตาราง ${Math.min(G.tableIndex+1,G.tableCount).toLocaleString()}/${G.tableCount.toLocaleString()}`:"",me=G.estimatedTotalRows?`ข้อมูลประมาณ ${G.completedRows.toLocaleString()}/${G.estimatedTotalRows.toLocaleString()} รายการ`:"";C.textContent=[pe,me].filter(Boolean).join(" · ")}H&&(G.storageCount>0&&G.percent>=90?H.textContent=`กำลังสำรองไฟล์ Storage ${G.storageIndex.toLocaleString()}/${G.storageCount.toLocaleString()}`:G.currentTableEstimate>0?H.textContent=`ตารางปัจจุบัน: ${G.currentTableRows.toLocaleString()}/${G.currentTableEstimate.toLocaleString()} รายการ (ตัวเลขโดยประมาณจากสถิติฐานข้อมูล)`:H.textContent="กำลังอ่านและเขียนข้อมูลเป็นช่วง ๆ สามารถสำรองต่อจากจุดล่าสุดได้หากการเชื่อมต่อหลุด")},R=async()=>{const G=await ha().catch(()=>null);if(D=G,k=!0,$&&($.disabled=!1),b&&(b.classList.toggle("hidden",!G),b.disabled=!1),!!$){if(!G){$.textContent="⬇️ สำรองข้อมูลทั้งหมด";return}if($.textContent="▶️ สำรองต่อจากจุดล่าสุด",c){const le=G.phase==="finalizing"?"กำลังตรวจสอบไฟล์สำรอง":G.phase==="storage"?`ไฟล์ Storage ${G.storageIndex.toLocaleString()}/${G.storageCount.toLocaleString()}`:`${G.tableName??"ตาราง"} ${G.tableIndex+1}/${G.tableCount}`;c.textContent=`พบงานสำรองที่หยุดไว้ · ${le}${G.phase==="storage"||G.phase==="finalizing"?"":` · ${G.rowOffset.toLocaleString()} รายการ`}`,I(G.progress)}}};$&&($.disabled=!0),R(),$&&!$.dataset.bound&&($.dataset.bound="true",$.addEventListener("click",async()=>{if(!k){N("กำลังตรวจงานสำรองค้าง กรุณารอสักครู่แล้วลองใหม่","info");return}if(!confirm("ยืนยันสร้างไฟล์สำรองข้อมูลทั้งหมดของระบบ? ไฟล์อาจมีข้อมูลส่วนบุคคลจำนวนมาก"))return;const G=D?null:Nl();let le=Date.now();const de=le;$.disabled=!0,b&&(b.disabled=!0),$.textContent="⏳ กำลังสำรองข้อมูลทั้งหมด...";let pe=G?"กำลังเลือกตำแหน่งไฟล์สำรอง":"กำลังเตรียมรายการตาราง";c&&(c.textContent=pe),I({percent:0,tableIndex:0,tableCount:0,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0});const me=setInterval(()=>{if(!c||Date.now()-le<15e3)return;const Z=Math.floor((Date.now()-de)/1e3);c.textContent=`กำลังทำขั้นตอน: ${pe} · ${Z.toLocaleString()} วินาที`},5e3);try{const Z=await Vl({saveTarget:G,onProgress:(ve,he,ge)=>{le=Date.now(),pe=ve,c&&(c.textContent=`${ve}${he?` · ${he.toLocaleString()} รายการ`:""}`),I(ge)}});window._latestFullBackupId=Z.backupId;try{localStorage.setItem("pp5_latest_full_backup_id",Z.backupId??"")}catch{}c&&(c.textContent=`สำเร็จ: ${Z.fileName} · ${Math.round(Z.byteSize/1024/1024)} MB · ${Z.tableCount} ตาราง`),I({percent:100,tableIndex:Z.tableCount,tableCount:Z.tableCount,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0}),N(`สำรองข้อมูลทั้งหมดสำเร็จ และ${Z.savedToDisk?"บันทึกไฟล์ลงดิสก์แล้ว":"ดาวน์โหลดไฟล์แล้ว"} ✅`,"success")}catch(Z){const ve=await ha().catch(()=>null);D=ve,c&&(c.textContent=(Z==null?void 0:Z.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ข้อมูลในฐานข้อมูลไม่ถูกเปลี่ยนแปลง":ve?`หยุดไว้ชั่วคราว · กดปุ่มเดิมเพื่อสำรองต่อจาก ${ve.tableName??"จุดล่าสุด"}`:"สำรองข้อมูลไม่สำเร็จ"),(Z==null?void 0:Z.code)==="BACKUP_FILE_MISSING"&&c&&(c.textContent="ไม่พบไฟล์เดิมแล้ว · กด “ล้างงานสำรองค้าง” แล้วเริ่มสำรองใหม่"),N("สำรองข้อมูลไม่สำเร็จ: "+we(Z),"error")}finally{clearInterval(me),$.disabled=!1;const Z=await ha().catch(()=>null);D=Z,k=!0,$.textContent=Z?"▶️ สำรองต่อจากจุดล่าสุด":"⬇️ สำรองข้อมูลทั้งหมด",b&&(b.classList.toggle("hidden",!Z),b.disabled=!1)}})),b&&!b.dataset.bound&&(b.dataset.bound="true",b.addEventListener("click",async()=>{if(confirm("ล้างเฉพาะงานสำรองค้างในเบราว์เซอร์ใช่หรือไม่? การทำงานนี้จะไม่ลบข้อมูลในฐานข้อมูลหรือไฟล์อื่น")){b.disabled=!0;try{await Rl(),c&&(c.textContent="ล้างงานสำรองค้างแล้ว · กด “สำรองข้อมูลทั้งหมด” เพื่อเลือกตำแหน่งไฟล์ใหม่"),M&&M.classList.add("hidden"),$&&($.textContent="⬇️ สำรองข้อมูลทั้งหมด"),b.classList.add("hidden"),N("ล้างงานสำรองค้างแล้ว สามารถเริ่มไฟล์ใหม่ได้ ✅","success")}catch(G){b.disabled=!1,N("ล้างงานสำรองค้างไม่สำเร็จ: "+we(G),"error")}}}));const z=document.getElementById("full-backup-file"),q=document.getElementById("btn-restore-full-backup"),F=document.getElementById("full-restore-status");z&&q&&!z.dataset.bound&&(z.dataset.bound="true",z.addEventListener("change",()=>{var G,le;q.disabled=!((G=z.files)!=null&&G[0]),F&&(F.textContent=(le=z.files)!=null&&le[0]?`เลือกไฟล์: ${z.files[0].name}`:"")}),q.addEventListener("click",async()=>{var le;const G=(le=z.files)==null?void 0:le[0];if(G&&confirm("ยืนยันกู้คืนข้อมูลตามขอบเขตของไฟล์นี้? ระบบจะเพิ่มหรือปรับเฉพาะข้อมูลในไฟล์ และไม่ลบข้อมูลอื่น")){q.disabled=!0,q.textContent="⏳ กำลังกู้คืน...";try{const de=await Zl(G,{onProgress:(pe,me)=>{F&&(F.textContent=`${pe} · ${me.toLocaleString()} รายการ`)}});F&&(F.textContent=`กู้คืนสำเร็จ · SHA-256: ${de.sha256.slice(0,16)}…`),N("กู้คืนข้อมูลจากไฟล์สำรองสำเร็จ ✅","success")}catch(de){F&&(F.textContent="กู้คืนข้อมูลไม่สำเร็จ"),N("กู้คืนข้อมูลไม่สำเร็จ: "+we(de),"error")}finally{q.disabled=!1,q.textContent="♻️ กู้คืนจากไฟล์สำรอง"}}})),document.querySelectorAll(".cfg-choice").forEach(G=>{G.addEventListener("click",()=>{var pe;const le=G.dataset.choiceKey,de=document.getElementById(`cfg-${le}`);de&&(de.value=G.dataset.choiceValue),(pe=G.parentElement)==null||pe.querySelectorAll(".cfg-choice").forEach(me=>{const Z=me===G;me.classList.toggle("border-indigo-500",Z),me.classList.toggle("bg-indigo-50",Z),me.classList.toggle("text-indigo-700",Z),me.classList.toggle("border-gray-200",!Z),me.classList.toggle("bg-white",!Z),me.classList.toggle("text-gray-500",!Z)})})}),document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(G=>{G.addEventListener("input",()=>{const le=document.getElementById(`${G.id}-txt`);le&&(le.textContent=G.value)})});const P=()=>{const le=[...document.querySelectorAll("#feat-editor .feat-row")].map(pe=>{var he,ge;const me=((he=pe.querySelector(".feat-icon"))==null?void 0:he.value.trim())||"✨",Z=((ge=pe.querySelector(".feat-text"))==null?void 0:ge.value.trim())||"",ve=pe.dataset.minTier||"1";return Z?`${me}|${Z}|${ve}`:null}).filter(Boolean).join(`
`),de=document.getElementById("cfg-donationSpecialFeatures");de&&(de.value=le)},O=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],V=G=>{var le,de,pe;G.querySelectorAll(".feat-tier-btn").forEach(me=>{me.addEventListener("click",()=>{const Z=parseInt(me.dataset.n);G.dataset.minTier=String(Z),G.querySelectorAll(".feat-tier-btn").forEach(ve=>{const he=parseInt(ve.dataset.n);ve.style.cssText=he===Z?`border:2px solid ${O[he-1]};color:${O[he-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),P()})}),(le=G.querySelector(".feat-icon"))==null||le.addEventListener("input",P),(de=G.querySelector(".feat-text"))==null||de.addEventListener("input",P),(pe=G.querySelector(".feat-del"))==null||pe.addEventListener("click",()=>{G.remove(),P()})};document.querySelectorAll("#feat-editor .feat-row").forEach(V),(ie=document.getElementById("feat-add"))==null||ie.addEventListener("click",()=>{var pe;const G=document.getElementById("feat-editor");if(!G)return;const le=G.children.length,de=document.createElement("div");de.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",de.dataset.idx=le,de.dataset.minTier="1",de.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(me=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${me===1?`border:2px solid ${O[0]};color:${O[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${me}" title="ระดับ ${me}">${me}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,G.appendChild(de),V(de),(pe=de.querySelector(".feat-text"))==null||pe.focus()}),document.querySelectorAll(".pkg-stab").forEach(G=>{G.addEventListener("click",()=>{var de;const le=G.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(pe=>{pe.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${pe.dataset.pstab===le?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(pe=>pe.classList.add("hidden")),(de=document.getElementById(`pkg-panel-${le}`))==null||de.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(G=>{G.addEventListener("change",async le=>{const de=le.target.files[0];if(!de)return;if(de.type!=="image/png"){N("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),G.value="";return}const pe=G.dataset.skey,me=G.dataset.n;G.disabled=!0;try{const Z=await el(pe,de),ve=document.getElementById(`cfg-${pe}`);ve&&(ve.value=Z),await Be(pe,Z);const he=document.getElementById(`sticker-prev-${me}`);if(he){const ge=document.createElement("img");ge.src=Z,ge.className="w-full h-full object-contain",he.replaceWith(ge),ge.id=`sticker-prev-${me}`}N(`อัปโหลดสติกเกอร์ ${me} สำเร็จ ✅`,"success")}catch(Z){N("อัปโหลดไม่สำเร็จ: "+we(Z),"error")}finally{G.disabled=!1}})});const W=G=>{const le=String(G.donationStickerTiers??"").trim(),de=parseInt(G.donationMinAmount??99)||99,pe=parseInt(G.donationAmountStep??50)||50;return(le?le.split(`
`).filter(Boolean).map(ve=>{const[he,ge,Q,te,ue]=ve.split("|").map(ce=>ce.trim());return{amount:parseInt(he)||0,sticker:ge||"🏅",title:Q||"",note:te||"",color:ue||""}}).filter(ve=>ve.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([ve,he,ge,Q,te])=>({amount:ve,sticker:he,title:ge,note:Q,color:te}))).sort((ve,he)=>ve.amount-he.amount).map((ve,he)=>{const ge=(G[`donationStickerImg${he+1}`]??"").trim();return ge&&/^https?:\/\//.test(ge)?{...ve,sticker:ge}:ve})},A=G=>{const le=String(G.donationSpecialFeatures??"").trim(),de=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return le?le.split(`
`).filter(Boolean).map(pe=>{const me=pe.split("|").map(Z=>Z.trim());return{icon:me[0]||"✨",text:me[1]||me[0]||pe,minTier:parseInt(me[2])||1}}).filter(pe=>pe.text):de.map(([pe,me,Z])=>({icon:pe,text:me,minTier:Z}))},U=(G,le,de,pe=4)=>{var ue;(ue=document.getElementById("tier-preview-modal"))==null||ue.remove();const me=G.color||"#f59e0b",Z=parseInt(me.slice(1,3),16),ve=parseInt(me.slice(3,5),16),he=parseInt(me.slice(5,7),16),ge=String(G.sticker??""),Q=/^https?:\/\//.test(ge)?`<img src="${ge}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${ge}</div>`,te=document.createElement("div");te.id="tier-preview-modal",te.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",te.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${Z},${ve},${he},0.85),rgba(${Z},${ve},${he},1))">
              ${Q}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${G.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${G.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${de}
              </div>
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษที่คุณครูได้รับ</p>
                <div class="space-y-1.5">
                  ${le.map(ce=>pe>=(ce.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${ce.icon}</span><span>${ce.text}</span></div>`:`<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${ce.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${ce.minTier}+</span></div>`).join("")}
                </div>
              </div>
              ${G.note?`<p class="text-xs text-center text-gray-400 italic">"${G.note}"</p>`:""}
              <p class="text-[10px] text-gray-400 text-center leading-relaxed">
                ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
                คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
              </p>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <p class="text-[10px] text-center text-amber-500 mb-2 font-semibold">🔧 โหมดตัวอย่าง (Admin)</p>
              <button class="w-full py-2.5 rounded-2xl text-white font-bold text-sm"
                style="background:rgba(${Z},${ve},${he},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(te),te.addEventListener("click",ce=>{ce.target===te&&te.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(G=>{G.addEventListener("click",()=>{const le=parseInt(G.dataset.tier),de={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(he=>{const ge=he.id.replace(/^cfg-/,"");de[ge]=he.value??he.dataset.on});const pe=W(de),me=A(de),Z=pe[le-1]??pe[0];if(!Z){N("ยังไม่มีข้อมูล tier","warning");return}const ve=(de.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;U(Z,me,ve,le)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(G=>{G.addEventListener("click",async()=>{const le=G.dataset.skey,de=G.dataset.n;await Be(le,"").catch(()=>{});const pe=document.getElementById(`cfg-${le}`);pe&&(pe.value="");const me=document.getElementById(`sticker-prev-${de}`);me&&(me.outerHTML=`<span id="sticker-prev-${de}" class="text-2xl text-gray-300">🏅</span>`),G.remove(),N("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(G=>{G.addEventListener("click",()=>{const le=G.dataset.stab;document.querySelectorAll(".school-stab").forEach(de=>{de.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${de.dataset.stab===le?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",le!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",le!=="porwor")})});const Y=document.getElementById("btn-sync-students-now"),J=document.getElementById("btn-download-student-sync-template");J&&J.addEventListener("click",()=>{const le="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(Z=>Z.map(ve=>`"${String(ve).replace(/"/g,'""')}"`).join(",")).join(`
`),de=new Blob([le],{type:"text/csv;charset=utf-8"}),pe=URL.createObjectURL(de),me=document.createElement("a");me.href=pe,me.download="pp5-students-sync-template.csv",document.body.appendChild(me),me.click(),me.remove(),URL.revokeObjectURL(pe),N("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const K=document.getElementById("btn-start-new-semester"),ae=document.getElementById("start-new-semester-target");if(K){const G=parseInt(e.semester??1),le=parseInt(e.academicYear??new Date().getFullYear()+543),de=G===1?2:1,pe=G===1?le:le+1;ae&&(ae.textContent=`ตอนนี้: ภาคเรียนที่ ${G}/${le}  →  จะขึ้นเป็น: ภาคเรียนที่ ${de}/${pe}`),K.addEventListener("click",async()=>{var ve,he,ge;const me=((ve=document.getElementById("start-new-semester-start"))==null?void 0:ve.value)??"",Z=((he=document.getElementById("start-new-semester-end"))==null?void 0:he.value)??"";if(!me||!Z||Z<me){N("กรุณาระบุวันเปิด-ปิดภาคเรียนใหม่ให้ถูกต้อง","warning");return}K.disabled=!0,K.textContent="⏳ กำลังตรวจสอบไฟล์สำรอง...";try{const Q=await Xl(le,G);if(!Q){N("กรุณาสร้างไฟล์สำรองที่ตรวจสอบแล้วของภาคเรียนปัจจุบันก่อน","warning"),(ge=document.querySelector('.cfg-tab[data-tab="term-data"]'))==null||ge.click(),K.disabled=!1,K.textContent="🔄 ขึ้นภาคเรียนใหม่";return}K.textContent="⏳ กำลังดำเนินการ...";const te=await co(pe,de,me,Z);if(!await Vd({year:pe,semester:de,start:me,end:Z,preview:te})){K.disabled=!1,K.textContent="🔄 ขึ้นภาคเรียนใหม่";return}const ce=Wd(),ne=Number((te==null?void 0:te.attendances_to_clear)??0),se=Number((te==null?void 0:te.prayer_records_to_clear)??0),fe=ne+se;let Se=0;const ke=async($e,ye,Te)=>{let _e=!0,Le=0;for(;_e;){ce.update(`กำลังล้าง${ye}: ${Se.toLocaleString()} / ${fe.toLocaleString()} รายการ`,fe?Se*100/fe:90);const Ie=await uo($e,Q,5e3),Ae=Number((Ie==null?void 0:Ie.deleted_rows)??0);if(Se+=Ae,_e=!!(Ie!=null&&Ie.has_more),Ae===0&&_e){if(Le+=1,Le>=3)throw new Error(`พบข้อมูล${ye}ที่ยังล้างไม่สำเร็จ กรุณาลองดำเนินการต่ออีกครั้ง`);await new Promise(da=>setTimeout(da,500*Le))}else Le=0;const rt=Te===0||!_e,nt=fe?Math.min(90,Se*90/fe):90;ce.update(rt?`ล้าง${ye}แล้ว ${Se.toLocaleString()} / ${fe.toLocaleString()} รายการ`:`กำลังล้าง${ye}: ${Se.toLocaleString()} / ${fe.toLocaleString()} รายการ`,nt)}};try{await ke("attendances","ข้อมูลเข้าเรียน",ne),await ke("prayer_records","คะแนนละหมาด",se),ce.update("กำลังบันทึกภาคเรียนใหม่และตั้งค่าสิทธิ์...",95),await po(pe,de,me,Z,Q,!0),ce.update("ขึ้นภาคเรียนใหม่สำเร็จ",100)}finally{ce.close()}e.semester=String(de),e.academicYear=String(pe),e.semester_start=me,e.semester_end=Z,e.unlimitedTeacherClassCreation="true",N(`ขึ้นภาคเรียนที่ ${de}/${pe} สำเร็จ ✅ สำรองข้อมูลแล้ว ล้างข้อมูลเข้าเรียน/ละหมาด และเปิดให้ครูสร้างห้องได้ไม่จำกัด`,"success"),Wa()}catch(Q){const te=(Q==null?void 0:Q.code)==="57014"?"คำสั่งใช้เวลานานเกินกำหนด ข้อมูลที่ล้างสำเร็จแล้วยังอยู่ในไฟล์สำรอง กดขึ้นภาคเรียนใหม่อีกครั้งเพื่อทำต่อจากรายการที่เหลือ":we(Q);N("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+te,"error"),K.disabled=!1,K.textContent="🔄 ขึ้นภาคเรียนใหม่"}})}const X=G=>{const le=document.getElementById("student-sync-log-section"),de=document.getElementById("student-sync-log-content");if(!le||!de)return;const pe=new Date(G.synced_at),me=pe.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),Z=pe.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),ve=G.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",he=(G.new_students||[]).map(Q=>`<span class="text-green-700">${Q.full_name} (${Q.student_code})</span>`).join(", ")||"—",ge=(G.deactivated_students||[]).map(Q=>`<span class="text-red-500">${Q.full_name} (${Q.student_code})</span>`).join(", ")||"—";de.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${me} ${Z}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${ve}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${G.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${G.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${G.new_count} คน:</span> ${he}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${G.deactivated_count} คน:</span> ${ge}
          </div>`,le.classList.remove("hidden")},xe=async()=>{try{const{data:G}=await oe.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();G&&X(G)}catch{}};xe(),Y&&Y.addEventListener("click",async()=>{var pe,me,Z,ve,he,ge;const G=((me=(pe=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:pe.value)==null?void 0:me.trim())||"",le=((ve=(Z=document.getElementById("cfg-studentSyncTabName"))==null?void 0:Z.value)==null?void 0:ve.trim())||"",de=((ge=(he=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:he.value)==null?void 0:ge.trim())||"1";Y.disabled=!0,Y.textContent="กำลังซิงก์...";try{await Promise.all([Be("studentSyncSheetId",G),Be("studentSyncTabName",le),Be("studentSyncHeaderRow",de)]);const Q=await Uo({sourceSheetId:G,tabName:le,headerRow:de}),te=`ซิงก์สำเร็จ: อ่าน ${Q.read??0} แถว / บันทึก ${Q.written??0} คน / ใหม่ ${Q.newCount??0} / ซ่อน ${Q.deactivatedCount??0} ✅`;N(te,"success"),xe()}catch(Q){N("ซิงก์นักเรียนไม่สำเร็จ: "+we(Q),"error")}finally{Y.disabled=!1,Y.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(G=>{G.addEventListener("change",async le=>{var Z,ve,he,ge;const de=le.target.files[0];if(!de)return;const pe=G.dataset.key,me=document.getElementById(`cfg-${pe}`);G.disabled=!0;try{const Q=await tl(pe,de),te=/(?:LogoUrl|LogoBwUrl)$/.test(pe)?`${Q}${Q.includes("?")?"&":"?"}v=${Date.now()}`:Q;me&&(me.value=te),await Be(pe,te),N("อัปโหลดสำเร็จ ✅","success");const ue=(Z=G.closest(".flex"))==null?void 0:Z.querySelector("img"),ce=(ve=G.closest(".flex"))==null?void 0:ve.querySelector("div.w-14");ue?ue.src=te:ce&&(ce.outerHTML=`<img src="${te}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`),(ge=(he=G.closest(".flex"))==null?void 0:he.querySelector(".cfg-upload-clear"))==null||ge.classList.remove("hidden")}catch(Q){N("อัปโหลดไม่สำเร็จ: "+we(Q),"error")}finally{G.disabled=!1}})}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-clear").forEach(G=>{G.addEventListener("click",async()=>{const le=G.dataset.key;if(!(!le||!confirm("ต้องการล้างโลโก้นี้ออกจากการตั้งค่าหรือไม่?"))){G.disabled=!0;try{await Be(le,"");const de=G.closest(".flex"),pe=document.getElementById(`cfg-${le}`);pe&&(pe.value="");const me=de==null?void 0:de.querySelector("img");me&&(me.outerHTML='<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'),G.classList.add("hidden"),N("ล้างโลโก้แล้ว ✅","success")}catch(de){N("ล้างโลโก้ไม่สำเร็จ: "+we(de),"error")}finally{G.disabled=!1}}})})};document.querySelectorAll(".cfg-tab").forEach(x=>x.addEventListener("click",()=>v(x.dataset.tab))),v(m),window._syncPositionToField=async(x,_,h)=>{const $=h.textContent;h.disabled=!0,h.textContent="กำลังดึง...";try{const b=n.find(M=>M.position===x);if(!b){N(`ยังไม่มีครูที่กำหนดบทบาท "${x}"`,"warning");return}const c=document.getElementById(`cfg-${_}`);c&&(c.value=b.full_name,c.dispatchEvent(new Event("input")),N(`ดึงชื่อ "${b.full_name}" สำเร็จ`,"success"))}catch{N("ดึงข้อมูลไม่สำเร็จ","error")}finally{h.disabled=!1,h.textContent=$}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const x=document.getElementById("cfg-save-btn"),_=document.querySelectorAll("#cfg-panel-inner [data-key]:not(.cfg-upload-file):not(.cfg-upload-clear)");x.disabled=!0,x.textContent="กำลังบันทึก...";try{await Promise.all([..._].map(h=>{const $=h.tagName==="BUTTON"?h.dataset.on??"false":h.value;return Be(h.dataset.key,$)})),await Us("admin",{},!0),N("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch(h){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",h),N("บันทึกไม่สำเร็จ: "+((h==null?void 0:h.message)||"ไม่ทราบสาเหตุ"),"error")}finally{x.disabled=!1,x.textContent="บันทึก"}})}catch{N("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function _r(){je("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",Ee(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{oa(await st())}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}function oa(e){const s=document.getElementById("dept-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${e.map(t=>`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4">
            <span class="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mr-2">${t.dept_code}</span>
            <span class="font-semibold text-gray-800">${t.dept_name}</span>
          </td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            <div class="flex items-center gap-2">
              ${t.head_photo_url?`<img src="${t.head_photo_url}" class="w-7 h-7 rounded-full object-cover" />`:'<div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">?</div>'}
              <div>
                <span>${t.head_name??"—"}</span>
                ${t.teacher_code?`<span class="block text-xs font-mono text-gray-400">${t.teacher_code}</span>`:""}
              </div>
            </div>
          </td>
          <td class="px-5 py-4 text-center hidden md:table-cell">
            ${t.head_sign_url?`<img src="${t.head_sign_url}" class="h-8 max-w-[80px] mx-auto object-contain" />`:'<span class="text-gray-300 text-xs">ไม่มีลายเซ็น</span>'}
          </td>
          <td class="px-5 py-4 text-right">
            <button onclick="openDeptModal(${t.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeleteDept(${t.id}, '${t.dept_name.replace(/'/g,"\\'")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`).join("")}
      </tbody>
    </table>`}}async function la(){je("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",Ee(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);try{const e=await vn();window._periodsCache=Object.fromEntries(e.map(t=>[t.id,t]));const s=document.getElementById("period-list");if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
        ${e.map(t=>{var n,l;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 text-center">
            <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm
                         inline-flex items-center justify-center">${t.period_no}</span>
          </td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(n=t.start_time)==null?void 0:n.slice(0,5)}</td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(l=t.end_time)==null?void 0:l.slice(0,5)}</td>
          <td class="px-5 py-3 text-right">
            <button onclick="openPeriodModal(${t.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeletePeriod(${t.id})"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}function li(e){const s=[];let t=[],n="",l=!1;for(let r=0;r<String(e??"").length;r++){const d=e[r],p=e[r+1];l?d==='"'&&p==='"'?(n+='"',r++):d==='"'?l=!1:n+=d:d==='"'?l=!0:d===","?(t.push(n),n=""):d===`
`?(t.push(n),s.push(t),t=[],n=""):d!=="\r"&&(n+=d)}if((n||t.length)&&(t.push(n),s.push(t)),s.length<2)return[];const o=s[0].map(r=>r.trim()),u=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return s.slice(1).map(r=>{const d=Object.fromEntries(o.map((a,m)=>[a,r[m]??""])),p={};return u.forEach(a=>{const m=String(d[a]??"").trim();if(a==="item_no"){const v=Number(m);p[a]=m&&Number.isFinite(v)?v:null}else p[a]=m||null}),p}).filter(r=>r.subject_name||r.subject_code||r.standard_text||r.indicator_text||r.learning_outcome_text)}function Ue(e,s,t="",n="text"){const l=n==="textarea"?`<textarea name="${e}" rows="3" dir="auto" class="${Ge} w-full min-h-[92px] resize-y">${ee(t)}</textarea>`:`<input name="${e}" value="${ee(t)}" dir="auto" class="${Ge} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${s}</span>
    ${l}
  </label>`}async function ft(){var e;je("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",Ee(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let s=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[t,n]=await Promise.all([wn(s),st().catch(()=>[])]),l=Pe([...n.map(a=>a.dept_name),...n.map(a=>a.dept_code),...t.map(a=>a.dept)]),o=Pe(t.map(a=>a.grade_level)),u=Object.fromEntries(t.map(a=>[a.id,a]));window._curriculumRows=u;const r=(a={})=>{const m=!!a.id,v=document.createElement("div");v.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",v.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${m?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${Ue("subject_name","ชื่อรายวิชา",a.subject_name)}
            ${Ue("subject_code","รหัสวิชา",a.subject_code)}
            ${Ue("dept","กลุ่มสาระ/กลุ่มวิชา",a.dept)}
            ${Ue("grade_level","ระดับชั้น",a.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${Ue("strand","สาระ",a.strand)}
            ${Ue("topic","เรื่อง/สาระการเรียนรู้",a.topic)}
            ${Ue("item_no","ลำดับข้อ",a.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${Ue("standard_code","รหัสมาตรฐาน",a.standard_code)}
            ${Ue("indicator_code","รหัสตัวชี้วัด",a.indicator_code)}
          </div>
          ${Ue("standard_text","มาตรฐานการเรียนรู้",a.standard_text,"textarea")}
          ${Ue("indicator_text","ตัวชี้วัด",a.indicator_text,"textarea")}
          ${Ue("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",a.learning_outcome_text,"textarea")}
          ${Ue("source_note","แหล่งที่มา/หมายเหตุ",a.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(v),v.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",()=>v.remove())),v.querySelector("#curriculum-form").addEventListener("submit",async x=>{x.preventDefault();const _=new FormData(x.currentTarget),h={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(c=>{h[c]=String(_.get(c)??"").trim()||null});const $=String(_.get("item_no")??"").trim(),b=Number($);h.item_no=$&&Number.isFinite(b)?b:null;try{m?await _n(a.id,h):await $n(h),N("บันทึกข้อมูลหลักสูตรแล้ว","success"),v.remove(),await ft()}catch(c){N(c.message||"บันทึกไม่สำเร็จ","error")}})},d=()=>{const a=document.createElement("div"),m="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";a.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
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
            <code class="block whitespace-pre-wrap break-all text-xs">${m}</code>
          </div>
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${Ge} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${Ge} w-full font-mono text-xs" placeholder="${m}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(a),a.querySelectorAll("[data-close]").forEach(v=>v.addEventListener("click",()=>a.remove())),a.querySelector("#curriculum-csv-file").addEventListener("change",v=>{var h;const x=(h=v.target.files)==null?void 0:h[0];if(!x)return;const _=new FileReader;_.onload=()=>{a.querySelector("#curriculum-csv-text").value=_.result||""},_.readAsText(x)}),a.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const v=li(a.querySelector("#curriculum-csv-text").value);if(!v.length)return N("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const x=await kn(v);N(`นำเข้าแล้ว ${x} รายการ`,"success"),a.remove(),await ft()}catch(x){N(x.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>r(),window._curriculumEdit=a=>{var m;return r(((m=window._curriculumRows)==null?void 0:m[a])||{})},window._curriculumDelete=async a=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await Sn(a),N("ลบข้อมูลแล้ว","success"),await ft()}catch(m){N(m.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=d,Ee(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
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
        <input id="cur-filter-q" value="${ee(s.q)}" class="${Ge}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${ee(s.subjectCode)}" class="${Ge}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${qe}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${l.map(a=>`<option value="${ee(a)}" ${a===s.dept?"selected":""}>${ee(a)}</option>`).join("")}
        </select>
        <select id="cur-filter-grade" class="${qe}">
          <option value="">ทุกระดับชั้น</option>
          ${o.map(a=>`<option value="${ee(a)}" ${a===s.gradeLevel?"selected":""}>${ee(a)}</option>`).join("")}
        </select>
        <button id="cur-filter-submit" class="rounded-xl bg-gray-900 text-white font-semibold px-4 py-2 hover:bg-gray-800">ค้นหา</button>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-4 border-b flex items-center justify-between">
          <h3 class="font-bold text-gray-800">รายการหลักสูตร</h3>
          <span class="text-sm text-gray-400">พบ <b class="text-indigo-600">${t.length}</b> รายการ</span>
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
              ${t.length?t.map(a=>`<tr class="hover:bg-gray-50/70 align-top">
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-900">${ee(a.subject_name||"ไม่ระบุวิชา")}</div>
                  <div class="text-indigo-500 font-mono">${ee(a.subject_code||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${ee(a.dept||"—")} · ${ee(a.grade_level||"ทุกชั้น")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${ee(a.topic||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${ee(a.strand||"")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${ee(a.standard_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${ee(a.standard_text||"—")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${ee(a.indicator_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${ee(a.indicator_text||a.learning_outcome_text||"—")}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${Ve(a.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${Ve(a.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const p=()=>{var a,m,v,x;s={q:((a=document.getElementById("cur-filter-q"))==null?void 0:a.value)||"",subjectCode:((m=document.getElementById("cur-filter-code"))==null?void 0:m.value)||"",dept:((v=document.getElementById("cur-filter-dept"))==null?void 0:v.value)||"",gradeLevel:((x=document.getElementById("cur-filter-grade"))==null?void 0:x.value)||""},window._curriculumFilters=s,ft()};["cur-filter-q","cur-filter-code"].forEach(a=>{var m;(m=document.getElementById(a))==null||m.addEventListener("keydown",v=>{v.key==="Enter"&&p()})}),["cur-filter-dept","cur-filter-grade"].forEach(a=>{var m;(m=document.getElementById(a))==null||m.addEventListener("change",p)}),(e=document.getElementById("cur-filter-submit"))==null||e.addEventListener("click",p)}catch(s){Ee(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${ee(s.message||s)}
    </div>`)}}async function wt(){var e;je("subjects"),document.getElementById("page-title").textContent="คอร์สและห้องเรียน",Ee(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,t,n,l,o]=await Promise.all([Zt(),Xt(),Oe().catch(()=>[]),st().catch(()=>[]),Ne().catch(()=>({}))]),u=Object.fromEntries(n.map(B=>[B.id,B])),r=Object.fromEntries(l.map(B=>[B.dept_code,B])),d=Object.fromEntries(l.map(B=>[B.dept_name,B])),p=B=>{var f;return{...B,_teacher_name:((f=u[B.teacher_id])==null?void 0:f.full_name)??""}},a=Number(o.academicYear??o.academic_year??new Date().getFullYear()+543),m=Number(o.semester??1),v=B=>Number(B==null?void 0:B.academic_year)===a&&Number(B==null?void 0:B.semester)===m,x=s.filter(v).map(p),_=t.filter(v).map(B=>{var f;return{...B,master_subjects:B.master_subjects?{...B.master_subjects,_teacher_name:((f=u[B.master_subjects.teacher_id])==null?void 0:f.full_name)??""}:B.master_subjects}}),h=Pe(x.map(B=>B.dept)),$=Pe(x.map(B=>B.skill_group));let b={sheetId:o.subjectSyncSheetId||Po,tabName:o.subjectSyncTabName||ba,keyField:o.subjectSyncKeyField||os,columns:(()=>{try{const B=JSON.parse(o.subjectSyncColumns||"null");return Array.isArray(B)&&B.length?B:ga}catch{return ga}})()};Ee(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${ee(b.tabName||ba)}
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
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${Ge} flex-1 min-w-40" />
          <select id="subf-dept" class="${qe}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${h.map(B=>`<option value="${B}">${B}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${qe}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${$.map(B=>`<option value="${B}">${B}</option>`).join("")}
          </select>
          <select id="subf-subg" class="${qe}">
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
    </div>`);let M="course";const w=()=>{const B=document.getElementById("sub-action-btn");B&&(B.innerHTML=M==="course"?"<span>＋</span> เพิ่มคอร์ส":M==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const f=document.getElementById("btn-sync-subjects-central");f&&(f.textContent=`↑ ซิงค์รายวิชา → ${b.tabName||ba}`)},C=()=>x.map(B=>{const f=u[B.teacher_id]??{},i=r[B.dept]??d[B.dept]??{},y=f.full_name??"",E=B.subject_name??"",g=B.subject_code??"";return{subject_group:B.subject_group??"",sbJect:`${E}_(${g})_${y}`,subject_name:E,subject_code:g,credit:B.credit??"",year:o.academicYear??"",semester:o.semester??"",grade_level:B.grade_level??"",teacher_name:y,teacher_code:f.teacher_code??"",dept_name:i.dept_name??B.dept??"",dept_code:i.dept_code??B.dept??""}}),T=()=>{var f;const B=new Set(b.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${ee(b.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${ee(b.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${ls.map(i=>`
                <option value="${ee(i.key)}" ${b.keyField===i.key?"selected":""}>
                  ${ee(i.key)} - ${ee(i.label)}
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
            ${ls.map(i=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${ee(i.key)}" ${B.has(i.key)?"checked":""} />
                <span>
                  <span class="font-semibold">${ee(i.key)}</span>
                  <span class="block text-xs text-gray-400">${ee(i.label)}</span>
                </span>
              </label>
            `).join("")}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`,(f=document.getElementById("subject-sync-select-defaults"))==null||f.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach(i=>{i.checked=ga.includes(i.value)})})},H=()=>{var E;if((E=document.getElementById("subject-filter-bar"))==null||E.classList.toggle("hidden",M==="sync"),w(),M==="sync"){T();return}const B=document.getElementById("subf-q").value.toLowerCase(),f=document.getElementById("subf-dept").value,i=document.getElementById("subf-skill").value,y=document.getElementById("subf-subg").value;if(M==="course"){const g=x.filter(L=>(!B||[L.subject_code,L.subject_name,L.dept].some(S=>(S??"").toLowerCase().includes(B)))&&(!f||L.dept===f)&&(!i||L.skill_group===i)&&(!y||L.subject_group===y));document.getElementById("subf-count").textContent=g.length,Ya(g)}else{const g=_.filter(L=>{var S,j;return(!B||(L.class_name??"").toLowerCase().includes(B)||(((S=L.master_subjects)==null?void 0:S.subject_name)??"").toLowerCase().includes(B))&&(!f||((j=L.master_subjects)==null?void 0:j.dept)===f)});document.getElementById("subf-count").textContent=g.length,di(g)}};window._subAction=async()=>{var B,f,i;if(M==="course")Ko(null,async(y,E=[])=>{await En(y,E),await wt()});else if(M==="class")ii();else{const y=((B=document.getElementById("subject-sync-sheet-id"))==null?void 0:B.value.trim())??"",E=((f=document.getElementById("subject-sync-tab-name"))==null?void 0:f.value.trim())??"",g=((i=document.getElementById("subject-sync-key-field"))==null?void 0:i.value)??os,L=[...document.querySelectorAll(".subject-sync-col:checked")].map(k=>k.value),S=L.includes(g)?L:[g,...L];if(!y||!E){N("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!S.length){N("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const j=document.getElementById("sub-action-btn"),D=j==null?void 0:j.innerHTML;j&&(j.disabled=!0,j.textContent="กำลังบันทึก...");try{await Promise.all([Be("subjectSyncSheetId",y),Be("subjectSyncTabName",E),Be("subjectSyncKeyField",g),Be("subjectSyncColumns",JSON.stringify(S))]),b={sheetId:y,tabName:E,keyField:g,columns:S},w(),N("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(k){N("บันทึกตั้งค่าไม่สำเร็จ: "+we(k),"error")}finally{j&&(j.disabled=!1,j.innerHTML=D),w()}}},window._adminRegisterClass=async B=>{const f=x.find(i=>i.id===B);f?Wo(null,f):N("ไม่พบคอร์ส","error")},window._adminEditClass=B=>{var i;const f=(i=window._adminClassCache)==null?void 0:i[B];f?Ps(null,f):N("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(B,f)=>{window._goBack=()=>wt(),Yo(null,B,f)},window._adminDeleteClass=async(B,f)=>{if(confirm(`ยืนยันลบ "${f}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await js(B),N(`ลบ "${f}" แล้ว`,"success"),H()}catch(i){N("ลบไม่สำเร็จ: "+we(i),"error")}},(e=document.getElementById("btn-sync-subjects-central"))==null||e.addEventListener("click",async B=>{const f=B.currentTarget,i=f.textContent;try{f.disabled=!0,f.textContent="กำลังซิงค์...";const y=await zo(C(),{sheetId:b.sheetId,tabName:b.tabName,headers:b.columns,keyField:b.keyField});N(`ส่งคำสั่งซิงค์รายวิชา ${y} รายการไปแท็บ ${b.tabName} แล้ว`,"success")}catch(y){N("ซิงค์รายวิชาไม่สำเร็จ: "+we(y),"error")}finally{f.disabled=!1,f.textContent=i}}),window._switchSubjectTab=B=>{M=B,document.getElementById("stab-course").className=B==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=B==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=B==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",H()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(B=>{var f,i;(f=document.getElementById(B))==null||f.addEventListener("input",H),(i=document.getElementById(B))==null||i.addEventListener("change",H)}),H()}catch{N("โหลดรายวิชาไม่สำเร็จ","error")}}function Ya(e){const s=document.getElementById("subject-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
      ${e.map(t=>`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${t.subject_name}</p>
          <p class="text-xs text-indigo-500 font-mono">${t.subject_code??"—"}</p>
          ${t._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${t._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${t.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${t.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${t.grade_level??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${t.credit??"—"}</td>
        <td class="px-4 py-3 text-right">
          ${t.teacher_id?`<button onclick="window._adminViewSchedule(${t.teacher_id},'${Ve(t._teacher_name||t.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
          <button onclick="openSubjectModal(${t.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${t.id},'${Ve(t.subject_name)}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join("")}
    </tbody>
  </table></div>`}}function di(e){const s=document.getElementById("subject-table-wrap");if(s){if(window._adminClassCache=Object.fromEntries(e.map(t=>[t.id,t])),!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
      ${e.map(t=>{var n,l,o,u;return`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${t.class_name??"—"}</p>
          <p class="text-xs text-indigo-500">${((n=t.master_subjects)==null?void 0:n.subject_name)??"—"}</p>
          ${(l=t.master_subjects)!=null&&l._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${t.master_subjects._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${(o=t.master_subjects)!=null&&o.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${t.master_subjects.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center hidden md:table-cell">
          ${t.google_sheet_id?'<span class="text-green-500 text-xs">✓</span>':'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-right">
          ${(u=t.master_subjects)!=null&&u.teacher_id?`<button onclick="window._adminViewSchedule(${t.master_subjects.teacher_id},'${Ve(t.master_subjects._teacher_name||t.master_subjects.subject_name||t.class_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-2">🗓️ ตาราง</button>`:""}
          <button onclick="window._adminScoreCols(${t.id},'${t.class_name}')"
            class="text-xs bg-amber-500 text-white px-2 py-1 rounded-lg hover:bg-amber-600 mr-2">📋 คะแนน</button>
          <button onclick="window._adminEditClass(${t.id})"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
          <button onclick="window._adminDeleteClass(${t.id},'${t.class_name}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`}).join("")}
    </tbody>
  </table></div>`}}async function $r(){var M,w;je("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),n=await ea().catch(()=>[]),l=new Map;for(const C of n){const T=parseInt(C.academic_year),H=parseInt(C.semester);Number.isInteger(T)&&Number.isInteger(H)&&l.set(`${H}/${T}`,{...C,academic_year:T,semester:H})}l.has(`${t}/${s}`)||l.set(`${t}/${s}`,{academic_year:s,semester:t,is_current:!0,status:"current"});const o=[...l.values()].sort((C,T)=>Number(T.academic_year)-Number(C.academic_year)||Number(T.semester)-Number(C.semester)),u=o.find(C=>C.academic_year===s&&C.semester===t)??o.find(C=>C.is_current)??o[0];let r=u.academic_year,d=u.semester;Ee(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
      <div>
        <p id="hr-term-label" class="text-xs text-gray-400 mt-0.5">ภาคเรียน ${d}/${r}</p>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <button id="hr-ai-import" type="button"
          class="text-xs font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100 border border-violet-100 px-4 py-2 rounded-xl transition">
          🤖 นำเข้าจากคำสั่งแต่งตั้ง (AI)
        </button>
        <button id="hr-export-csv"
          class="text-xs font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition">
          ⬇️ ดาวน์โหลด CSV
        </button>
      </div>
    </div>

    <div id="hr-term-tabs" class="flex flex-wrap gap-2 mb-4">
      ${o.map(C=>`<button type="button" data-hr-term="${C.semester}/${C.academic_year}"
        class="hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold transition">ภาคเรียน ${C.semester}/${C.academic_year}${C.is_current?" (ปัจจุบัน)":""}</button>`).join("")}
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
  </div>`);const[p,a,m]=await Promise.all([Oe().catch(()=>[]),Ln().catch(()=>[]),qs().catch(()=>[])]);let v="สามัญ";const x=()=>{document.querySelectorAll(".hr-term-tab").forEach(T=>{const H=T.dataset.hrTerm===`${d}/${r}`;T.className=H?"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white transition":"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"});const C=document.getElementById("hr-term-label");C&&(C.textContent=`ภาคเรียน ${d}/${r}`)},_=C=>Object.fromEntries(C.filter(T=>T.category===v).map(T=>[T.main_room,T])),h=()=>{document.querySelectorAll(".hr-tab").forEach(C=>{const T=C.dataset.hrTab===v;C.className=T?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},$=async()=>{x(),h();const C=await Ht(r,d),T=_(C),H=v==="สามัญ"?a:m,B=document.getElementById("homeroom-table-wrap");if(!H.length){B.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${v}</p></div>`;return}B.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${H.map(f=>{var y,E;const i=T[f];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${f}</td>
          <td class="px-5 py-3 text-gray-600">
            ${i?`<span class="font-medium text-gray-800">${((y=i.teachers)==null?void 0:y.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${(E=i.teachers)!=null&&E.teacher_code?`(${i.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${Ve(f)}','${v}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${Ve(f)}','${v}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${i?"เปลี่ยน":"เลือกครู"}</button>
            ${i?`<button onclick="window._deleteHomeroom(${i.id},'${Ve(f)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await $(),window._deleteHomeroom=async(C,T)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${T}?`))try{await Cn(C),N("ลบแล้ว","success"),await $()}catch{N("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(C,T)=>{var g;(g=document.getElementById("hr-picker"))==null||g.remove();let H=null;const B=document.createElement("div");B.id="hr-picker",B.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",B.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${T} · ห้อง ${C}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${qe}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${qe}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`,document.body.appendChild(B);const f=B.querySelector("#hrp-results"),i=B.querySelector("#hrp-save"),y=L=>{f.innerHTML=L.length?L.slice(0,20).map(S=>`
          <button type="button" data-id="${S.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${S.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${S.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',f.querySelectorAll(".hrp-option").forEach(S=>{S.addEventListener("click",()=>{H=p.find(j=>String(j.id)===S.dataset.id),f.querySelectorAll(".hrp-option").forEach(j=>j.classList.remove("bg-emerald-50","text-emerald-700")),S.classList.add("bg-emerald-50","text-emerald-700"),i.disabled=!1})})},E=()=>{const L=B.querySelector("#hrp-code").value.trim().toLowerCase(),S=B.querySelector("#hrp-name").value.trim().toLowerCase();y(p.filter(j=>(!L||(j.teacher_code??"").toLowerCase().includes(L))&&(!S||(j.full_name??"").toLowerCase().includes(S))))};B.querySelector("#hrp-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",L=>{L.target===B&&B.remove()}),B.querySelector("#hrp-code").addEventListener("input",E),B.querySelector("#hrp-name").addEventListener("input",E),i.addEventListener("click",async()=>{if(H){i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Ms({teacher_id:H.id,main_room:C,category:T,academic_year:r,semester:d}),N("บันทึกครูที่ปรึกษาสำเร็จ","success"),B.remove(),await $()}catch(L){N("บันทึกไม่สำเร็จ: "+we(L),"error"),i.disabled=!1,i.textContent="เลือกครูที่ปรึกษา"}}}),y(p)};const b=()=>{const C=[...p].sort((T,H)=>String(T.full_name??"").localeCompare(String(H.full_name??""),"th")).map((T,H)=>`${H+1}. ${T.teacher_code??"ไม่มีรหัส"} | ${T.full_name??"ไม่มีชื่อ"} | ${T.category??"ไม่ระบุประเภท"}`).join(`
`);return`ฉันจะแนบภาพหรือ PDF คำสั่งแต่งตั้งครูที่ปรึกษาให้คุณอ่าน
กรุณาอ่านเฉพาะข้อมูลห้องเรียนและชื่อครูที่ปรึกษาจากเอกสาร แล้วส่งผลลัพธ์เป็น JSON โดยครอบ JSON ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีคำอธิบายก่อนหรือหลังกล่อง

ข้อสำคัญ:
- คัดลอกชื่อครูตามที่ปรากฏในคำสั่งลงใน teacher_name_from_order ห้ามเดาหรือแก้ชื่อให้ถูกเอง
- ใช้รายชื่อครูอ้างอิงด้านล่างเพื่อช่วยหาชื่อที่ตรงกัน หากพบชื่อใกล้เคียง ให้ใส่ชื่อที่ตรงจากรายการลงใน teacher_name_suggestion
- teacher_name_suggestion และ teacher_code_suggestion เป็นเพียงคำแนะนำจากรายการอ้างอิง ระบบจะตรวจสอบซ้ำอีกครั้ง ห้ามถือว่าเป็นข้อมูลยืนยัน
- หากอ่านชื่อหรือห้องไม่ได้ ให้ใส่ค่าว่างและเพิ่มข้อความใน note
- หากเอกสารมีหลายหน้า ให้รวมข้อมูลทุกหน้า
- ห้ามสร้าง teacher_id หรือ teacher_code ขึ้นเอง
- ใช้ category เป็น "สามัญ" หรือ "ศาสนา" เท่านั้น

รูปแบบ JSON ที่ต้องส่งกลับ:
{
  "academic_year": ${r},
  "semester": ${d},
  "assignments": [
    {
      "main_room": "ม.1/1 Amanah",
      "category": "สามัญ",
      "teacher_name_from_order": "ชื่อครูตามเอกสาร",
      "teacher_code_from_order": "ถ้ามีให้ระบุ ถ้าไม่มีใส่ค่าว่าง",
      "teacher_name_suggestion": "ชื่อที่ตรงจากรายชื่ออ้างอิง หรือใส่ค่าว่าง",
      "teacher_code_suggestion": "รหัสที่ตรงจากรายชื่ออ้างอิง หรือใส่ค่าว่าง",
      "source_page": 1,
      "note": "ข้อสังเกตเกี่ยวกับการอ่านเอกสาร"
    }
  ]
}

ตรวจสอบให้ครบทุกห้องในคำสั่ง และรักษาการสะกดชื่อในเอกสารตามต้นฉบับ แม้จะสงสัยว่าสะกดผิดก็ตาม

รายชื่อครูทั้งหมดในระบบ ปพ.5 สำหรับใช้อ้างอิงเท่านั้น:
${C||"ไม่พบรายชื่อครู"}`},c=()=>{var z;(z=document.getElementById("hr-ai-import-modal"))==null||z.remove();const C=document.createElement("div");C.id="hr-ai-import-modal",C.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",C.innerHTML=`
      <div class="bg-white w-full sm:max-w-5xl max-h-[94vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl">
        <div class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-5 sm:px-7 py-4 flex items-start justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800">🤖 นำเข้าครูที่ปรึกษาจากคำสั่งแต่งตั้ง</h3>
            <p class="text-xs text-gray-500 mt-1">ให้ AI อ่านเอกสารและสร้าง JSON จากนั้นระบบจะจับคู่กับชื่อครูจริงใน ปพ.5</p>
          </div>
          <button id="hr-ai-close" type="button" class="text-gray-400 hover:text-gray-700 text-xl">✕</button>
        </div>

        <div class="p-5 sm:p-7 space-y-5">
          <div class="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-xs text-violet-900 leading-relaxed">
            <b>หลักการตรวจสอบ:</b> ระบบจะยึดชื่อครูและรหัสครูในฐานข้อมูล ปพ.5 เป็นข้อมูลหลัก ชื่อที่ AI อ่านได้จะใช้เป็นเพียงข้อมูลสำหรับจับคู่เท่านั้น และจะไม่บันทึกจนกว่าจะตรวจสอบและยืนยัน
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <section class="rounded-2xl border border-gray-200 p-4">
              <div class="flex items-center justify-between gap-2 mb-2">
                <div>
                  <h4 class="font-semibold text-sm text-gray-800">1) คำสั่งสำหรับ AI</h4>
                  <p class="text-[11px] text-gray-400 mt-0.5">คัดลอกคำสั่งนี้ แล้วแนบเอกสารคำสั่งแต่งตั้งให้ AI</p>
                </div>
                <div class="flex gap-2"><button id="hr-ai-generate-prompt" type="button" class="text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-lg">⚡ สร้าง Prompt</button><button id="hr-ai-copy-prompt" type="button" hidden disabled aria-disabled="true" class="text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg disabled:opacity-40">📋 คัดลอก</button></div>
              </div>
              <textarea id="hr-ai-prompt" readonly rows="15" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full ${qe} text-xs leading-5 resize-y bg-gray-50"></textarea>
            </section>

            <section class="rounded-2xl border border-gray-200 p-4">
              <h4 class="font-semibold text-sm text-gray-800">2) วาง JSON ที่ AI สร้าง</h4>
              <p class="text-[11px] text-gray-400 mt-0.5 mb-2">รองรับ JSON ที่ครอบด้วยเครื่องหมาย \`\`\`json ... \`\`\` ด้วย</p>
              <textarea id="hr-ai-json" rows="15" class="w-full ${qe} text-xs leading-5 resize-y font-mono" placeholder="วาง JSON ที่ได้จาก AI ที่นี่"></textarea>
              <button id="hr-ai-parse" type="button" class="w-full mt-3 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold">🔍 ตรวจสอบและจับคู่ชื่อครู</button>
              <p id="hr-ai-error" class="hidden text-xs text-red-600 mt-2 whitespace-pre-wrap"></p>
            </section>
          </div>

          <section id="hr-ai-preview-wrap" class="hidden rounded-2xl border border-gray-200 overflow-hidden">
            <div class="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 class="font-semibold text-sm text-gray-800">3) ตรวจสอบรายการก่อนบันทึก</h4>
                <p id="hr-ai-summary" class="text-xs text-gray-500 mt-0.5"></p>
              </div>
              <span class="text-[11px] text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5">ชื่อสีเหลืองต้องตรวจสอบด้วยตนเอง</span>
            </div>
            <div id="hr-ai-preview" class="p-4 space-y-3 max-h-[42vh] overflow-y-auto"></div>
          </section>
        </div>

        <div class="sticky bottom-0 bg-white/95 backdrop-blur border-t border-gray-100 px-5 sm:px-7 py-4 flex flex-col-reverse sm:flex-row justify-end gap-2">
          <button id="hr-ai-cancel" type="button" class="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="hr-ai-apply" type="button" disabled class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed">✅ ยืนยันนำเข้าและบันทึก</button>
        </div>
      </div>`,document.body.appendChild(C);const T=C.querySelector("#hr-ai-prompt"),H=Fs({copyButton:C.querySelector("#hr-ai-copy-prompt")}),B=()=>C.remove();C.querySelector("#hr-ai-close").addEventListener("click",B),C.querySelector("#hr-ai-cancel").addEventListener("click",B),C.addEventListener("click",q=>{q.target===C&&B()}),C.querySelector("#hr-ai-generate-prompt").addEventListener("click",()=>{T.value=b(),H.markGenerated(),C.querySelector("#hr-ai-copy-prompt").textContent="📋 คัดลอก",N("สร้างคำสั่ง AI รายชื่อครูที่ปรึกษาแล้ว","success")}),C.querySelector("#hr-ai-copy-prompt").addEventListener("click",async q=>{if(!H.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(T.value),q.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(q.currentTarget)&&(q.currentTarget.textContent="📋 คัดลอก")},1500)}catch{T.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}});let f=[];const i=C.querySelector("#hr-ai-error"),y=C.querySelector("#hr-ai-preview-wrap"),E=C.querySelector("#hr-ai-preview"),g=C.querySelector("#hr-ai-apply"),L=C.querySelector("#hr-ai-summary"),S=q=>String(q??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim(),j=(q,F)=>{const P=String(F??"").trim().toLowerCase();if(P){const U=p.filter(Y=>String(Y.teacher_code??"").trim().toLowerCase()===P);if(U.length===1)return{teacher:U[0],status:"exact",score:1};if(U.length>1)return{teacher:U[0],status:"ambiguous",score:1}}const O=vt(q),V=p.filter(U=>vt(U.full_name)===O);if(V.length===1)return{teacher:V[0],status:"exact",score:1};if(V.length>1)return{teacher:V[0],status:"ambiguous",score:1};const A=p.map(U=>({teacher:U,score:Kd(q,U.full_name)})).sort((U,Y)=>Y.score-U.score)[0];return A&&A.score>=.72?{...A,status:"suggested"}:{teacher:null,status:"unmatched",score:(A==null?void 0:A.score)??0}},D=(q,F)=>{const P=String(q??"").trim().replace(/^ห้อง\s*/u,""),O=F==="ศาสนา"?m:a,V=P.replace(/\s+/g,"").toLowerCase();return O.find(W=>String(W).replace(/\s+/g,"").toLowerCase()===V)??null},k=q=>{if(!q.teacherId||!q.mainRoom)return{label:"ไม่พบข้อมูล ต้องเลือกเอง",cls:"text-red-700 bg-red-50 border-red-100"};const F=q.matchStatus==="exact"||q.teacherReviewed,P=q.roomExact||q.roomReviewed;return F&&P?{label:q.matchStatus==="exact"&&q.roomExact?"ตรงกับฐานข้อมูล":"ตรวจสอบแล้ว",cls:"text-emerald-700 bg-emerald-50 border-emerald-100"}:{label:"โปรดตรวจสอบ",cls:"text-amber-700 bg-amber-50 border-amber-100"}},I=()=>{const q=f.filter(P=>!P.mainRoom||!P.teacherId),F=f.filter(P=>P.matchStatus!=="exact"&&!P.teacherReviewed||!P.roomExact&&!P.roomReviewed);g.disabled=!f.length||q.length>0||F.length>0,f.length?q.length?L.textContent=`ทั้งหมด ${f.length} รายการ · ยังเลือกข้อมูลไม่ครบ ${q.length} รายการ`:F.length?L.textContent=`ทั้งหมด ${f.length} รายการ · กรุณาตรวจสอบอีก ${F.length} รายการ`:L.textContent=`ทั้งหมด ${f.length} รายการ · พร้อมบันทึก`:L.textContent=""},R=()=>{E.innerHTML=f.map((q,F)=>{const P=k(q),O=q.category==="ศาสนา"?m:a,V=[...p].sort((W,A)=>String(W.full_name??"").localeCompare(String(A.full_name??""),"th"));return`<div class="ai-advisor-row rounded-2xl border border-gray-200 p-3 sm:p-4" data-ai-row="${F}">
          <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <p class="text-sm font-bold text-gray-800">รายการที่ ${F+1}</p>
              <p class="text-xs text-gray-500 mt-1">ชื่อในคำสั่ง: <span class="font-medium text-gray-700">${ee(q.sourceName||"ไม่ระบุ")}</span>${q.sourceCode?` · รหัสในคำสั่ง: ${ee(q.sourceCode)}`:""}</p>
              ${q.suggestedName?`<p class="text-[11px] text-indigo-500 mt-1">AI แนะนำจากรายชื่อระบบ: ${ee(q.suggestedName)}${q.suggestedCode?` (${ee(q.suggestedCode)})`:""}</p>`:""}
              ${q.note?`<p class="text-[11px] text-gray-400 mt-1">หมายเหตุ AI: ${ee(q.note)}</p>`:""}
            </div>
            <span class="ai-row-status text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${P.cls}">${P.label}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <label class="text-xs text-gray-500">ประเภท
              <select data-ai-category="${F}" class="${qe} w-full mt-1">
                <option value="สามัญ" ${q.category==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${q.category==="ศาสนา"?"selected":""}>ศาสนา</option>
              </select>
            </label>
            <label class="text-xs text-gray-500">ห้องเรียน
              <select data-ai-room="${F}" class="${qe} w-full mt-1">
                <option value="">— เลือกห้อง —</option>
                ${O.map(W=>`<option value="${ee(W)}" ${W===q.mainRoom?"selected":""}>${ee(W)}</option>`).join("")}
              </select>
            </label>
            <label class="text-xs text-gray-500">ชื่อครูในระบบ ปพ.5
              <select data-ai-teacher="${F}" class="${qe} w-full mt-1">
                <option value="">— เลือกครู —</option>
                ${V.map(W=>`<option value="${ee(W.id)}" ${String(W.id)===String(q.teacherId??"")?"selected":""}>${ee(W.full_name)}${W.teacher_code?` (${ee(W.teacher_code)})`:""}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>`}).join(""),E.querySelectorAll("[data-ai-category]").forEach(q=>q.addEventListener("change",F=>{const P=f[Number(F.currentTarget.dataset.aiCategory)];P.category=F.currentTarget.value,P.mainRoom=null,P.roomExact=!1,P.roomReviewed=!0,R(),I()})),E.querySelectorAll("[data-ai-room]").forEach(q=>q.addEventListener("change",F=>{const P=f[Number(F.currentTarget.dataset.aiRoom)];P.mainRoom=F.currentTarget.value||null,P.roomReviewed=!0,R(),I()})),E.querySelectorAll("[data-ai-teacher]").forEach(q=>q.addEventListener("change",F=>{const P=f[Number(F.currentTarget.dataset.aiTeacher)];P.teacherId=F.currentTarget.value?Number(F.currentTarget.value):null,P.teacherReviewed=!0,R(),I()})),I()};C.querySelector("#hr-ai-parse").addEventListener("click",()=>{i.classList.add("hidden");try{const q=JSON.parse(S(C.querySelector("#hr-ai-json").value)),F=Array.isArray(q)?q:q.assignments??q.homeroom_assignments??q.data??q.rows;if(!Array.isArray(F)||!F.length)throw new Error("ไม่พบรายการ assignments ใน JSON");const P=new Set;f=F.map((O,V)=>{var de;const W=["สามัญ","ศาสนา"].includes(O.category)?O.category:v,A=O.teacher_name_from_order??O.teacher_name??O.teacher??O.advisor_name??"",U=O.teacher_code_from_order??O.teacher_code??O.code??"",Y=O.teacher_name_suggestion??O.matched_teacher_name??"",J=O.teacher_code_suggestion??O.matched_teacher_code??"",K=O.main_room??O.room??O.class_name??O.classroom??"",ae=D(K,W),X=j(A,U),xe=j(Y,J),ie=X.status==="exact"?X:xe.teacher?{...xe,status:"suggested"}:X,G=`${W}|${ae??String(K).trim()}`,le=P.has(G);return P.add(G),{category:W,sourceName:A,sourceCode:U,suggestedName:Y,suggestedCode:J,note:O.note??"",sourcePage:O.source_page??"",mainRoom:ae,roomExact:!!ae,roomReviewed:!1,teacherId:((de=ie.teacher)==null?void 0:de.id)??null,teacherReviewed:!1,matchStatus:le?"ambiguous":ie.status,matchScore:ie.score}}),y.classList.remove("hidden"),R()}catch(q){i.textContent=`อ่าน JSON ไม่สำเร็จ: ${q.message}`,i.classList.remove("hidden"),y.classList.add("hidden"),f=[],I()}}),g.addEventListener("click",async()=>{if(g.disabled)return;const q=await Ht(r,d).catch(()=>[]),F=f.filter(P=>{const O=q.find(V=>V.main_room===P.mainRoom&&V.category===P.category);return!O||Number(O.teacher_id)!==Number(P.teacherId)}).length;if(confirm(`ยืนยันนำเข้าครูที่ปรึกษา ${f.length} รายการ?

ระบบจะเพิ่มหรือเปลี่ยนรายการที่แตกต่างจำนวน ${F} รายการ ในภาคเรียน ${d}/${r}`)){g.disabled=!0,g.textContent="กำลังบันทึก...";try{const P=await An(f.map(O=>({teacher_id:O.teacherId,main_room:O.mainRoom,category:O.category,academic_year:r,semester:d})));N(`นำเข้าครูที่ปรึกษาสำเร็จ ${P.length} รายการ ✅`,"success"),B(),await $()}catch(P){N(`บันทึกไม่สำเร็จ: ${we(P)}`,"error"),g.disabled=!1,g.textContent="✅ ยืนยันนำเข้าและบันทึก"}}})};(M=document.getElementById("hr-ai-import"))==null||M.addEventListener("click",c),document.querySelectorAll(".hr-term-tab").forEach(C=>{C.addEventListener("click",async()=>{const[T,H]=String(C.dataset.hrTerm??"").split("/").map(Number);!Number.isInteger(T)||!Number.isInteger(H)||(d=T,r=H,await $())})}),document.querySelectorAll(".hr-tab").forEach(C=>{C.addEventListener("click",async()=>{v=C.dataset.hrTab,await $()})}),(w=document.getElementById("hr-export-csv"))==null||w.addEventListener("click",async()=>{try{const C=await Ht(r,d),T=_(C),H=v==="สามัญ"?a:m,B=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],f=H.map(L=>{var j,D;const S=T[L];return[L,((j=S==null?void 0:S.teachers)==null?void 0:j.full_name)??"",((D=S==null?void 0:S.teachers)==null?void 0:D.phone)??""]}),i="\uFEFF"+[B,...f].map(L=>L.map(S=>`"${String(S).replace(/"/g,'""')}"`).join(",")).join(`
`),y=new Blob([i],{type:"text/csv;charset=utf-8"}),E=URL.createObjectURL(y),g=document.createElement("a");g.href=E,g.download=`ครูที่ปรึกษา-${v}-${d}-${r}.csv`,document.body.appendChild(g),g.click(),g.remove(),URL.revokeObjectURL(E),N("ดาวน์โหลด CSV แล้ว ✅","success")}catch(C){N("ดาวน์โหลดไม่สำเร็จ: "+we(C),"error")}})}async function kr(){je("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const e=p=>{let a=0;for(const m of p)a=a*26+m.charCodeAt(0)-64;return a},s=p=>{let a="";for(;p>0;)p--,a=String.fromCharCode(65+p%26)+a,p=Math.floor(p/26);return a},t=(p,a)=>{const m=[];for(let v=e(p);v<=e(a);v++)m.push(s(v));return m},n=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:t("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:t("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];n.flatMap(p=>p.cols);const l=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],o=["ระหว่างเรียน","กลางภาค","ปลายภาค"],u=await Bn().catch(()=>[]),r={};l.forEach(p=>{r[p]={},o.forEach(a=>{const m=u.find(v=>v.skill_group===p&&v.assignment_type===a);r[p][a]=new Set(m?m.allowed_columns.split(",").map(v=>v.trim()).filter(Boolean):[])})});const d=(p,a)=>n.map(m=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${m.label}</span>
      ${m.cols.map(v=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${r[p][a].has(v)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${p}" data-at="${a}" data-col="${v}">
          ${v}
        </button>`).join("")}
    </div>`).join("");Ee(`<div class="max-w-5xl mx-auto animate-fade">
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
      ${n.map(p=>`
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded ${p.color.split(" ")[0]} border ${p.color.split(" ")[2]}"></span>
        <span class="text-gray-600 font-mono font-medium">${p.label}</span>
      </div>`).join("")}
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded bg-emerald-500"></span>
        <span class="text-gray-600">= เลือกแล้ว</span>
      </div>
    </div>

    <!-- Grid per skill group -->
    <div class="space-y-4">
      ${l.map(p=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${p}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${p}"
              ${u.find(a=>a.skill_group===p&&a.is_fixed)?"checked":""} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${o.map(a=>`
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${a}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${p.replace(/\s/g,"_")}-${a.replace(/\s/g,"_")}">
                  ${r[p][a].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${d(p,a)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${p}" data-at="${a}">ล้าง</button>
            </div>
          </div>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </div>`),document.addEventListener("click",p=>{const a=p.target.closest(".col-btn");if(!a)return;const{sg:m,at:v,col:x}=a.dataset;r[m][v].has(x)?(r[m][v].delete(x),a.className=a.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(r[m][v].add(x),a.className=a.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const _=document.getElementById(`scc-count-${m.replace(/\s/g,"_")}-${v.replace(/\s/g,"_")}`);_&&(_.textContent=`${r[m][v].size} คอลัมน์`);const h=document.querySelector(`.scc-clear-btn[data-sg="${m}"][data-at="${v}"]`);h&&(h.style.opacity=r[m][v].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(p=>{p.addEventListener("click",()=>{const{sg:a,at:m}=p.dataset;r[a][m].clear(),document.querySelectorAll(`.col-btn[data-sg="${a}"][data-at="${m}"]`).forEach(x=>{x.className=x.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const v=document.getElementById(`scc-count-${a.replace(/\s/g,"_")}-${m.replace(/\s/g,"_")}`);v&&(v.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const p=document.getElementById("scc-save-btn");p.disabled=!0,p.textContent="กำลังบันทึก...";try{const a=[];l.forEach(m=>{var x;const v=((x=document.querySelector(`.scc-lock[data-sg="${m}"]`))==null?void 0:x.checked)??!1;o.forEach(_=>{const h=[...r[m][_]].join(",");h&&a.push({skill_group:m,assignment_type:_,allowed_columns:h,is_fixed:v})})});for(const m of a)await jn(m);N(`บันทึก ${a.length} รายการสำเร็จ ✅`,"success")}catch(a){N("บันทึกไม่สำเร็จ: "+we(a),"error")}finally{p.disabled=!1,p.textContent="💾 บันทึกทั้งหมด"}})}async function ii(){je("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const e=await Zt().catch(()=>[]);document.getElementById("main-content").innerHTML=`
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
    </div>`,window.renderSubjects=wt}async function Sr(){var l;je("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const e=await Ne().catch(()=>({})),s=e.academicYear??e.academic_year??new Date().getFullYear()+543,t=e.semester??1,n=async()=>{const o=await qn(s,t).catch(()=>[]),u=document.getElementById("holiday-table");if(u){if(!o.length){u.innerHTML=`<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`;return}u.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
        <tr>
          <th class="px-4 py-3 text-left">วันที่</th>
          <th class="px-4 py-3 text-left">คำอธิบาย</th>
          <th class="px-4 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${o.map(r=>`
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 font-mono text-indigo-600">${r.holiday_date}</td>
            <td class="px-4 py-3 text-gray-700">${r.description??"—"}</td>
            <td class="px-4 py-3 text-right">
              <button onclick="window._deleteHoliday(${r.id})"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
      </tbody>
    </table>`}};Ee(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${s} ภาค ${t} — ระบบจะ highlight วันนี้ในตารางเช็คชื่อ</p>
    </div>

    <!-- Add form -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-700 mb-3">เพิ่มวันหยุด</h3>
      <div class="flex flex-wrap gap-3">
        <input id="hol-date" type="date" class="${Ge} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${Ge} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`),await n(),(l=document.getElementById("hol-add"))==null||l.addEventListener("click",async()=>{const o=document.getElementById("hol-date").value,u=document.getElementById("hol-desc").value.trim()||null;if(!o){N("กรุณาเลือกวันที่","warning");return}const r=parseInt(o.slice(0,4),10),d=new Date().getFullYear();if(Math.abs(r-d)>3){N(`ปี ${r} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${d}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await fn({holiday_date:o,description:u,academic_year:s,semester:t}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",N("เพิ่มวันหยุดแล้ว","success"),await n()}catch(p){N("เกิดข้อผิดพลาด: "+we(p),"error")}}),window._deleteHoliday=async o=>{if(confirm("ลบวันหยุดนี้?"))try{await hn(o),N("ลบแล้ว","success"),await n()}catch{N("ลบไม่สำเร็จ","error")}}}function Er(){je("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",Ee(`
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

    </div>`);let e="teachers",s=[];window.switchImportTab=l=>{e=l,s=[],document.getElementById("import-preview").classList.add("hidden");const o={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=o[l],document.getElementById("tab-teachers").className=l==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=l==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const t=l=>{if(!l||!l.name.endsWith(".csv")){N("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const o=new FileReader;o.onload=u=>{s=dl(u.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${s.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=il(s,e),document.getElementById("import-preview").classList.remove("hidden")},o.readAsText(l,"UTF-8")};document.getElementById("csv-file").addEventListener("change",l=>t(l.target.files[0]));const n=document.getElementById("drop-zone");n.addEventListener("dragover",l=>{l.preventDefault(),n.classList.add("border-indigo-400","bg-indigo-50")}),n.addEventListener("dragleave",()=>n.classList.remove("border-indigo-400","bg-indigo-50")),n.addEventListener("drop",l=>{l.preventDefault(),n.classList.remove("border-indigo-400","bg-indigo-50"),t(l.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!s.length)return;const l=document.getElementById("btn-import"),o=document.getElementById("import-progress"),u=document.getElementById("progress-bar"),r=document.getElementById("progress-text");l.disabled=!0,o.classList.remove("hidden");const d=(p,a)=>{const m=Math.round(p/a*100);u.style.width=m+"%",r.textContent=`${p} / ${a} แถว`};try{const a=await(e==="teachers"?ol:ll)(s,d);if(N(`นำเข้าสำเร็จ ${a} รายการ`,"success"),u.style.width="100%",e==="students"){r.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const m=await lo();N(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(m==null?void 0:m.enrolled)??0} รายการ)`,"success")}catch{}r.textContent=`นำเข้าสำเร็จ ${a} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(p){N("นำเข้าไม่สำเร็จ: "+we(p),"error")}finally{l.disabled=!1}})}async function Lr(){var l,o,u;je("payments"),document.getElementById("page-title").textContent="การชำระเงิน",Ee(`<div class="max-w-2xl mx-auto animate-fade">
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
      ${["ทั้งหมด","รอตรวจสอบ","อนุมัติแล้ว","ปฏิเสธ"].map((r,d)=>`<button class="pay-tab text-sm font-medium px-3 py-2 border-b-2 transition
          ${d===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-400 hover:text-gray-600"}"
          data-filter="${["all","pending","approved","rejected"][d]}">${r}</button>`).join("")}
    </div>

    <div id="pay-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div>
        <p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`);let e=[],s="all";const t=()=>{const r=document.getElementById("pay-list");if(!r)return;const d={pending:0,approved:1,rejected:2},p=(s==="all"?e:e.filter(a=>a.status===s)).slice().sort((a,m)=>{const v=(d[a.status]??9)-(d[m.status]??9);return v!==0?v:new Date(m.created_at)-new Date(a.created_at)});if(!p.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}r.innerHTML=p.map(a=>{var _,h,$,b,c;const m={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[a.status]??{label:a.status,cls:"bg-gray-100 text-gray-600"},v={semester:`📦 เหมาทั้งเทอม (${a.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(a.room_count??1)||1} ห้อง (${a.amount??49} บ.)`,donation:a.supporter_renewal_entitlement_id?`🎁 ต่ออายุผู้สนับสนุน ระดับ ${a.donation_tier??"-"} · ${a.amount??0} บ. (ลด ${a.discount_percent??0}%)`:`☕ โดเนท ${a.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[a.package_type]??`${a.package_type} (${a.amount??0} บ.)`,x=new Date(a.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${a.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${a.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${a.id}" data-teacher="${(_=a.teachers)==null?void 0:_.id}" data-pkg="${a.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(((h=a.teachers)==null?void 0:h.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${(($=a.teachers)==null?void 0:$.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((b=a.teachers)==null?void 0:b.teacher_code)??"—"} · ${((c=a.teachers)==null?void 0:c.phone)??"—"}</p>
            </div>
          </div>
          <span class="text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${m.cls}">
            ${m.label}
          </span>
        </div>

        <!-- รายละเอียด -->
        <div class="px-4 py-3 space-y-2">
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">แพ็กเกจ</span>
            <span class="font-medium text-gray-700">${v}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">ส่งเมื่อ</span>
            <span class="text-gray-600">${x}</span>
          </div>
          ${a.admin_note?`
          <div class="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500">
            💬 หมายเหตุ: ${a.admin_note}
          </div>`:""}
        </div>

        <!-- สลิป -->
        ${a.slip_url?`
        <div class="px-4 pb-3">
          <button class="view-slip-btn w-full py-2 rounded-xl border border-gray-200 text-sm text-indigo-600 font-medium hover:bg-indigo-50 transition"
            data-url="${ee(a.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>`:`
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${a.status==="pending"?(()=>{var M,w,C;return a.package_type==="donation"?`
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${a.id}" data-teacher="${(M=a.teachers)==null?void 0:M.id}">
              ☕ รับทราบ / ขอบคุณ
            </button>
          </div>`:a.package_type==="school_sponsored"?`
          <div class="px-4 pb-4">
            <button class="approve-btn flex-1 w-full py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${a.id}" data-teacher="${(w=a.teachers)==null?void 0:w.id}" data-pkg="${a.package_type}">
              🏫 อนุมัติสิทธิ์
            </button>
          </div>`:`
          <div class="flex gap-2 px-4 pb-4">
            <button class="reject-btn flex-1 py-2.5 rounded-xl border-2 border-red-200 text-red-600
                           text-sm font-semibold hover:bg-red-50 transition" data-id="${a.id}">
              ❌ ปฏิเสธ
            </button>
            <button class="approve-btn flex-1 py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${a.id}" data-teacher="${(C=a.teachers)==null?void 0:C.id}" data-pkg="${a.package_type}">
              ✅ อนุมัติ
            </button>
          </div>`})():""}
      </div>`}).join(""),r.querySelectorAll(".donate-ack-btn").forEach(a=>{a.addEventListener("click",async()=>{var x,_;const v=((x=(await Ne().catch(()=>({}))).donationThankYouCard)==null?void 0:x.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){a.disabled=!0,a.textContent="⏳ กำลังดำเนินการ...";try{await Mt(parseInt(a.dataset.id),"approved",v),await pa(parseInt(a.dataset.teacher),"donation"),N("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(_=window._refreshPaymentBadge)==null||_.call(window),e=await Ke(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent="☕ รับทราบ / ขอบคุณ"}}})}),r.querySelectorAll(".approve-btn").forEach(a=>{a.addEventListener("click",async()=>{var x;const m=a.dataset.pkg==="school_sponsored";if(confirm(m?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){a.disabled=!0,a.textContent="⏳ กำลังอนุมัติ...";try{await Mt(parseInt(a.dataset.id),"approved"),await pa(parseInt(a.dataset.teacher),a.dataset.pkg),N("อนุมัติแล้ว ✅","success"),(x=window._refreshPaymentBadge)==null||x.call(window),e=await Ke(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent=m?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),r.querySelectorAll(".reject-btn").forEach(a=>{a.addEventListener("click",()=>{ui(parseInt(a.dataset.id),async m=>{var v;await Mt(parseInt(a.dataset.id),"rejected",m),N("ปฏิเสธแล้ว","info"),(v=window._refreshPaymentBadge)==null||v.call(window),e=await Ke(),t()})})}),r.querySelectorAll(".view-slip-btn").forEach(a=>{a.addEventListener("click",()=>ci(a.dataset.url))})};try{e=await Ke(),t()}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(r=>{r.addEventListener("click",()=>{s=r.dataset.filter,document.querySelectorAll(".pay-tab").forEach(d=>{d.classList.toggle("border-indigo-600",d===r),d.classList.toggle("text-indigo-600",d===r),d.classList.toggle("border-transparent",d!==r),d.classList.toggle("text-gray-400",d!==r)}),t()})}),(l=document.getElementById("pay-refresh"))==null||l.addEventListener("click",async()=>{e=await Ke(),t(),N("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",r=>{if(!r.target.classList.contains("pay-cb"))return;const d=document.querySelectorAll(".pay-cb:checked"),p=document.getElementById("pay-bulk-approve");d.length>0?(p.classList.remove("hidden"),p.textContent=`✅ อนุมัติ ${d.length} คน`):p.classList.add("hidden")});const n=async r=>{var p,a;let d=0;for(const m of r)try{await Mt(parseInt(m.id),"approved"),await pa(parseInt(m.teacher),m.pkg),d++}catch{}N(`อนุมัติ ${d}/${r.length} รายการ ✅`,"success"),(p=window._refreshPaymentBadge)==null||p.call(window),e=await Ke(),t(),(a=document.getElementById("pay-bulk-approve"))==null||a.classList.add("hidden")};(o=document.getElementById("pay-bulk-approve"))==null||o.addEventListener("click",async()=>{const r=[...document.querySelectorAll(".pay-cb:checked")];r.length&&confirm(`อนุมัติ ${r.length} คนที่เลือก?`)&&await n(r.map(d=>({id:d.dataset.id,teacher:d.dataset.teacher,pkg:d.dataset.pkg})))}),(u=document.getElementById("pay-approve-all"))==null||u.addEventListener("click",async()=>{const r=e.filter(d=>d.status==="pending");if(!r.length){N("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${r.length} รายการ?`)&&await n(r.map(d=>{var p;return{id:d.id,teacher:(p=d.teachers)==null?void 0:p.id,pkg:d.package_type}}))})}async function ci(e){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",s.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${ee(e)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(s),s.querySelector("button").addEventListener("click",()=>s.remove()),s.addEventListener("click",r=>{r.target===s&&s.remove()});const t=s.querySelector("#slip-viewer"),n=s.querySelector("#slip-download"),l=await Lo(e),o=ee(l),u=String(l).split("?")[0].toLowerCase().endsWith(".pdf");n&&(n.href=l),t&&(t.innerHTML=u?`<iframe src="${o}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${o}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`)}function ui(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#rj-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#rj-confirm").addEventListener("click",async()=>{const n=t.querySelector("#reject-note").value.trim()||null;t.remove(),await s(n)})}async function Cr(){je("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1),n=async()=>{const o=await Dn(s,t,"สามัญ").catch(()=>[]);l(o)},l=o=>{var h;const u=$=>`
      <tr class="hover:bg-gray-50 transition lsk-row" data-id="${$.id}">
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${$.name}</td>
        <td class="px-4 py-3 text-center text-sm text-gray-600">${$.max_score}</td>
        <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${$.sheet_col??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-400">${$.sort_order}</td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <button class="lsk-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${$.id}">แก้ไข</button>
          <button class="lsk-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${$.id}" data-name="${$.name}">ลบ</button>
        </td>
      </tr>`,r=$=>$.length?`<table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th>
              <th class="px-4 py-3 text-center">คะแนนเต็ม</th>
              <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th>
              <th class="px-4 py-3 text-center">ลำดับ</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">${$.map(u).join("")}</tbody>
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',d=$=>$.replace("SheetId","SheetTab"),p=$=>$.replace("SheetId","StudentRange"),a=($,b)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${b})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${$}" value="${e[$]??""}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${$}" value="${e[d($)]??""}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${$}" value="${e[p($)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${$}" data-tab-key="${d($)}" data-range-key="${p($)}">บันทึก</button>
        </div>
      </div>`;Ee(`<div class="max-w-5xl mx-auto animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${t} / ${s}</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-fill-ls-classes"
            class="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition">
            ซ่อมคะแนนรายวิชาจากส่วนกลาง
          </button>
          <div class="flex gap-2" id="lsk-tab-actions"></div>
        </div>
      </div>
      <!-- Tabs -->
      <p class="text-xs text-emerald-700 mb-4">คะแนนที่บันทึกจะส่งเข้ารายวิชาทักษะชีวิตในภาคเรียนเดียวกันอัตโนมัติ ปุ่มซ่อมใช้กรณีต้องการเติมข้อมูลย้อนหลังเท่านั้น</p>
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
    </div>`);const m=[...o];(h=document.getElementById("btn-fill-ls-classes"))==null||h.addEventListener("click",async()=>{if(!confirm("ยืนยันซ่อมคะแนนรายวิชาทักษะชีวิตในภาคเรียนนี้ให้ตรงกับส่วนกลาง? คะแนนที่ล้างในส่วนกลางจะถูกล้างในรายวิชาด้วย"))return;const $=document.getElementById("btn-fill-ls-classes"),b=$.textContent;$.disabled=!0,$.textContent="กำลังเติม...";try{const c=await Vn(s,t);N(`เติมทักษะชีวิต ${c.classes} รายวิชา / ${c.scores} คะแนนแล้ว`,"success")}catch(c){N("เติมไม่สำเร็จ: "+we(c),"error")}finally{$.disabled=!1,$.textContent=b}});const v=async()=>{var E;document.getElementById("lsk-tab-actions").innerHTML=`
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
        </div>`;const[{columns:$,scores:b},c]=await Promise.all([Zn(s,t).catch(()=>({columns:[],scores:[]})),_t().catch(()=>[])]),M=($??[]).filter(g=>g.category==="สามัญ"),w={};for(const g of b)w[g.student_id]||(w[g.student_id]={}),w[g.student_id][g.column_id]=g.score;const C=c.filter(g=>(g==null?void 0:g.id)&&(g==null?void 0:g.student_code)&&(g==null?void 0:g.main_room)).sort((g,L)=>(g.main_room??"").localeCompare(L.main_room??"",void 0,{numeric:!0})||(g.student_code??"").localeCompare(L.student_code??"")),T=document.getElementById("lsk-filter-grade"),H=document.getElementById("lsk-filter-room");T.innerHTML='<option value="">ทุกระดับชั้น</option>'+Pe(C.map(g=>Ze(g.main_room))).map(g=>`<option value="${g}">${g}</option>`).join("");const B=()=>{const g=T.value,L=H.value,S=Pe(C.filter(j=>!g||Ze(j.main_room)===g).map(j=>ct(j.main_room)));H.innerHTML='<option value="">ทุกห้อง</option>'+S.map(j=>`<option value="${j}" ${j===L?"selected":""}>ห้อง ${j}</option>`).join(""),L&&!S.includes(L)&&(H.value="")},f=g=>{if(document.getElementById("lsk-filter-count").textContent=`${g.length} คน`,!g.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${M.map(L=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${L.name}<br><span class="font-normal text-gray-400">(${L.max_score})</span></th>`).join("")}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${g.map((L,S)=>{const j=M.reduce((D,k)=>{var I;return D+(((I=w[L.id])==null?void 0:I[k.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${S+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${L.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${L.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${L.main_room??"—"}</td>
                  ${M.map(D=>{var I;const k=(I=w[L.id])==null?void 0:I[D.id];return`<td class="px-2 py-2 text-center ${k!=null?"text-gray-800 font-medium":"text-gray-300"}">${k??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${j||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};B();let i=[...C];f(i);const y=()=>{B();const g=T.value,L=H.value,S=document.getElementById("lsk-filter-search").value.toLowerCase();i=C.filter(j=>{var D,k;return(!g||Ze(j.main_room)===g)&&(!L||ct(j.main_room)===L)&&(!S||((D=j.full_name)==null?void 0:D.toLowerCase().includes(S))||((k=j.student_code)==null?void 0:k.includes(S)))}),f(i)};T.addEventListener("change",y),H.addEventListener("change",y),document.getElementById("lsk-filter-search").addEventListener("input",y),(E=document.getElementById("btn-sync-ls"))==null||E.addEventListener("click",async()=>{const g=document.getElementById("btn-sync-ls");g.disabled=!0,g.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:L}=await Ce(async()=>{const{syncCentralBatch:R}=await import("./sync-GIjLHUjs.js");return{syncCentralBatch:R}},__vite__mapDeps([11,6,4]));if(!M.length){N("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!e.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const S=i.map(R=>({id:R.id,student_code:R.student_code})),j=new Set(S.map(R=>R.id)),D=new Set(M.map(R=>R.id)),k=b.filter(R=>j.has(R.student_id)&&D.has(R.column_id)),I=await L(e.lifeSkillSheetIdSamai,e.lifeSkillSheetTabSamai,M,k,S,{studentColRange:e.lifeSkillStudentRangeSamai||"J8:J3000"});if(!I){N("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync ทักษะชีวิต ${S.length} คน / ${I} คะแนนแล้ว`,"success")}catch(L){N("Sync ไม่สำเร็จ: "+we(L),"error")}finally{g.disabled=!1,g.textContent="↑ Sync ไปชีทกลาง"}})},x=()=>{document.getElementById("lsk-tab-actions").innerHTML=`
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`,document.getElementById("lsk-tab-content").innerHTML=`<div class="space-y-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${o.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${r(o)}</div>
          ${a("lifeSkillSheetIdSamai","สามัญ")}
        </div>
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>ws(null,s,t,n)),document.querySelectorAll(".lsk-edit").forEach($=>{$.addEventListener("click",()=>{const b=m.find(c=>c.id===+$.dataset.id);b&&ws(b,s,t,n)})}),document.querySelectorAll(".lsk-del").forEach($=>{$.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${$.dataset.name}"?`))try{await Xn(+$.dataset.id),N("ลบแล้ว","success"),n()}catch(b){N("ลบไม่สำเร็จ: "+we(b),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach($=>{$.addEventListener("click",async()=>{var B,f,i;const b=$.dataset.key,c=$.dataset.tabKey,M=$.dataset.rangeKey,w=((B=document.getElementById(`lsk-sheet-${b}`))==null?void 0:B.value.trim())??"",C=((f=document.getElementById(`lsk-tab-${b}`))==null?void 0:f.value.trim())??"",T=((i=document.getElementById(`lsk-range-${b}`))==null?void 0:i.value.trim())??"J8:J3000",H=$.textContent;$.disabled=!0,$.textContent="⏳";try{await Promise.all([Be(b,w),Be(c,C),Be(M,T)]),e[b]=w,e[c]=C,e[M]=T,$.textContent="✅",$.style.background="#16a34a",setTimeout(()=>{$.disabled=!1,$.textContent=H,$.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),$.disabled=!1,$.textContent=H}})})},_=$=>{document.querySelectorAll("[data-tab]").forEach(b=>{const c=b.dataset.tab===$;b.className=c?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),$==="scores"?v():x()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>_("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>_("config")),_("scores")};n()}function ws(e,s,t,n){var u;(u=document.getElementById("lsk-modal"))==null||u.remove();const l=!!e,o=document.createElement("div");o.id="lsk-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${l?"แก้ไขหัวข้อ":"เพิ่มหัวข้อ"}</h3>
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
            ${l?"บันทึก":"เพิ่ม"}
          </button>
        </div>
      </form>
    </div>`,document.body.appendChild(o),o.querySelector("#lsk-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#lsk-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#lsk-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const p={name:o.querySelector("#lsk-name").value.trim(),max_score:parseInt(o.querySelector("#lsk-max").value)||20,sort_order:parseInt(o.querySelector("#lsk-order").value)||0,sheet_col:o.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:s,semester:t};l?await no(e.id,p):await oo(p),N("บันทึกสำเร็จ","success"),o.remove(),n()}catch(p){N("บันทึกไม่สำเร็จ: "+we(p),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}const pi=e=>{const s=Os(e);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${s.cls}">${s.label}</span>`};async function Ir(){je("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1);ds(e);const n=a=>`
    <tr class="hover:bg-gray-50 transition" data-id="${a.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${a.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${a.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${a.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${a.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${a.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${a.id}" data-name="${a.name}">ลบ</button>
      </td>
    </tr>`;let l=[];const o=async()=>{var m;l=await Hn(s,t).catch(()=>[]),u();const a=((m=document.querySelector("[data-tab].bg-white"))==null?void 0:m.dataset.tab)??"scores";p(a)},u=()=>{Ee(`<div class="max-w-5xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${t} / ${s}</p>
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
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>p("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>p("config"))},r=async()=>{var C,T;document.getElementById("rsa-tab-actions").innerHTML=`
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
      </div>`;const[{columns:a,scores:m},v]=await Promise.all([Kn(s,t).catch(()=>({columns:[],scores:[]})),_t().catch(()=>[])]),x={};for(const H of m)x[H.student_id]||(x[H.student_id]={}),x[H.student_id][H.column_id]=H.score;const _=v.filter(H=>(H==null?void 0:H.id)&&(H==null?void 0:H.student_code)&&(H==null?void 0:H.main_room)).sort((H,B)=>(H.main_room??"").localeCompare(B.main_room??"",void 0,{numeric:!0})||(H.student_code??"").localeCompare(B.student_code??"")),h=document.getElementById("rsa-filter-grade"),$=document.getElementById("rsa-filter-room");h.innerHTML='<option value="">ทุกระดับชั้น</option>'+Pe(_.map(H=>Ze(H.main_room))).map(H=>`<option value="${H}">${H}</option>`).join("");const b=()=>{const H=h.value,B=$.value,f=Pe(_.filter(i=>!H||Ze(i.main_room)===H).map(i=>ct(i.main_room)));$.innerHTML='<option value="">ทุกห้อง</option>'+f.map(i=>`<option value="${i}" ${i===B?"selected":""}>ห้อง ${i}</option>`).join(""),B&&!f.includes(B)&&($.value="")},c=H=>{if(document.getElementById("rsa-filter-count").textContent=`${H.length} คน`,!H.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${a.map(B=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${B.name}<br><span class="font-normal text-gray-400">(${B.max_score})</span></th>`).join("")}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${H.map((B,f)=>{const i=a.reduce((g,L)=>{var S;return g+(((S=x[B.id])==null?void 0:S[L.id])??0)},0),y=i/2,E=i>0?pi(y):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${f+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${B.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${B.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${B.main_room??"—"}</td>
                ${a.map(g=>{var S;const L=(S=x[B.id])==null?void 0:S[g.id];return`<td class="px-2 py-2 text-center ${L!=null?"text-gray-800 font-medium":"text-gray-300"}">${L??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${i||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${i>0?y.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${E}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};b();let M=[..._];c(M);const w=()=>{b();const H=h.value,B=$.value,f=document.getElementById("rsa-filter-search").value.toLowerCase();M=_.filter(i=>{var y,E;return(!H||Ze(i.main_room)===H)&&(!B||ct(i.main_room)===B)&&(!f||((y=i.full_name)==null?void 0:y.toLowerCase().includes(f))||((E=i.student_code)==null?void 0:E.includes(f)))}),c(M)};h.addEventListener("change",w),$.addEventListener("change",w),document.getElementById("rsa-filter-search").addEventListener("input",w),(C=document.getElementById("btn-sync-rs"))==null||C.addEventListener("click",async()=>{const H=document.getElementById("btn-sync-rs");if(!e.readingScoreSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}H.disabled=!0,H.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:B}=await Ce(async()=>{const{syncCentralBatch:L}=await import("./sync-GIjLHUjs.js");return{syncCentralBatch:L}},__vite__mapDeps([11,6,4])),f=M.map(L=>({id:L.id,student_code:L.student_code})),i=new Set(f.map(L=>L.id)),y=new Set(a.map(L=>L.id)),E=m.filter(L=>i.has(L.student_id)&&y.has(L.column_id)),g=await B(e.readingScoreSheetId,e.readingScoreSheetTab,a,E,f,{studentColRange:e.readingScoreStudentRange||"J8:J3000"});if(!g){N("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${f.length} คน / ${g} คะแนนแล้ว`,"success")}catch(B){N("Sync ไม่สำเร็จ: "+we(B),"error")}finally{H.disabled=!1,H.textContent="↑ Sync ไปชีทกลาง"}}),(T=document.getElementById("btn-fill-reading-eval"))==null||T.addEventListener("click",async()=>{const H=document.getElementById("btn-fill-reading-eval");if(!e.readingEvalClassSheetCol){N("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}H.disabled=!0,H.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:B}=await Ce(async()=>{const{syncReadingEvalToClassSheets:E}=await import("./sync-GIjLHUjs.js");return{syncReadingEvalToClassSheets:E}},__vite__mapDeps([11,6,4])),{getAllClassesForFill:f}=await Ce(async()=>{const{getAllClassesForFill:E}=await import("./api-C-roKrdU.js");return{getAllClassesForFill:E}},__vite__mapDeps([0,1,2,3,4])),i={};for(const E of _){const g=a.reduce((L,S)=>{var j;return L+(((j=x[E.id])==null?void 0:j[S.id])??0)},0);if(g>0){const L=g/2;i[E.id]={label:Os(L).label,score100:L}}}const y=await f();await B(y,i,e.readingEvalClassSheetCol),N(`ป้อนผลประเมินอ่านฯ ไป ${y.length} ห้องสำเร็จ`,"success")}catch(B){N("ป้อนไม่สำเร็จ: "+we(B),"error")}finally{H.disabled=!1,H.textContent="📝 ป้อนผล → ทุกวิชา"}})},d=()=>{var m,v,x;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const a=l.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${l.map(n).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${l.length} หัวข้อ · รวม ${l.reduce((_,h)=>_+h.max_score,0)} คะแนน</span>
        </div>
        <div>${a}</div>
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
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${gt.map(_=>_.label).join("/")})</span>
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
          ${gt.map((_,h)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${h}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${h+1}:</span>
              <input type="text" data-rsa-label value="${ze(_.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${_.min}" min="0" max="100" ${h===gt.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${h===gt.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${h===gt.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>ks(null,s,t,o)),document.querySelectorAll(".rsa-edit").forEach(_=>{_.addEventListener("click",()=>{const h=l.find($=>$.id===+_.dataset.id);h&&ks(h,s,t,o)})}),document.querySelectorAll(".rsa-del").forEach(_=>{_.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${_.dataset.name}"?`))try{await Jn(+_.dataset.id),N("ลบแล้ว","success"),o()}catch(h){N("ลบไม่สำเร็จ: "+we(h),"error")}})}),(m=document.getElementById("rsa-save-sheet"))==null||m.addEventListener("click",async()=>{var c,M,w;const _=document.getElementById("rsa-save-sheet"),h=((c=document.getElementById("rsa-sheet-id"))==null?void 0:c.value.trim())??"",$=((M=document.getElementById("rsa-sheet-tab"))==null?void 0:M.value.trim())??"",b=((w=document.getElementById("rsa-student-range"))==null?void 0:w.value.trim())??"J8:J3000";_.disabled=!0,_.textContent="⏳";try{await Promise.all([Be("readingScoreSheetId",h),Be("readingScoreSheetTab",$),Be("readingScoreStudentRange",b)]),e.readingScoreSheetId=h,e.readingScoreSheetTab=$,e.readingScoreStudentRange=b,_.textContent="✅",_.style.background="#16a34a",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึก",_.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),_.disabled=!1,_.textContent="บันทึก"}}),(v=document.getElementById("rsa-save-eval-col"))==null||v.addEventListener("click",async()=>{var $;const _=document.getElementById("rsa-save-eval-col"),h=((($=document.getElementById("rsa-eval-col"))==null?void 0:$.value.trim())??"").toUpperCase();_.disabled=!0,_.textContent="⏳";try{await Be("readingEvalClassSheetCol",h),e.readingEvalClassSheetCol=h,_.textContent="✅",_.style.background="#16a34a",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึก",_.style.background=""},1500),N("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),_.disabled=!1,_.textContent="บันทึก"}}),(x=document.getElementById("rsa-save-grades"))==null||x.addEventListener("click",async()=>{const _=document.getElementById("rsa-save-grades"),h=document.getElementById("rsa-grades-err");h.textContent="";const $=[...document.querySelectorAll("[data-rsa-grade-row]")].map((b,c)=>({label:b.querySelector("[data-rsa-label]").value.trim(),min:c===gt.length-1?0:parseFloat(b.querySelector("[data-rsa-min]").value)}));if($.some(b=>!b.label)){h.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if($.some(b=>Number.isNaN(b.min)||b.min<0||b.min>100)){h.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let b=0;b<$.length-1;b++)if($[b].min<=$[b+1].min){h.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}_.disabled=!0,_.textContent="⏳";try{await Be("readingEvalThresholds",JSON.stringify($)),ds({readingEvalThresholds:JSON.stringify($)}),_.textContent="✅",_.style.background="#16a34a",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึกเกณฑ์",_.style.background=""},1500),N("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(b){N("บันทึกไม่สำเร็จ: "+we(b),"error"),_.disabled=!1,_.textContent="บันทึกเกณฑ์"}})},p=a=>{document.querySelectorAll("[data-tab]").forEach(m=>{m.className=m.dataset.tab===a?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),a==="scores"?r():d()};o()}const tt={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function Tt(e,s){var o;(o=document.getElementById("admin-picker"))==null||o.remove();const t=document.createElement("div");t.id="admin-picker",t.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const n=(e.target.closest("td,th,button")??e.target).getBoundingClientRect();t.style.top=Math.min(n.bottom+4,window.innerHeight-60)+"px",t.style.left=Math.max(4,Math.min(n.left,window.innerWidth-220))+"px";const l=document.createElement("button");l.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",l.textContent="✕ ล้าง",l.onclick=()=>{t.remove(),s(null)},t.appendChild(l),Object.entries(tt).forEach(([u,r])=>{const d=document.createElement("button");d.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${r.bg} ${r.color} hover:opacity-80 transition`,d.textContent=r.label,d.title=r.fullLabel,d.onclick=()=>{t.remove(),s(u)},t.appendChild(d)}),document.body.appendChild(t),setTimeout(()=>document.addEventListener("click",()=>t.remove(),{once:!0}),50)}const _s=["อา","จ","อ","พ","พฤ","ศ","ส"];function mi(e,s){const t=[],n=new Date(e),l=new Date(s),o=n.getDay()%7;o&&n.setDate(n.getDate()-o);let u=new Date(n),r=1;for(;u<=l;){const d=[];for(let p=0;p<5;p++){const a=new Date(u);a.setDate(a.getDate()+p),a<=l&&d.push({date:new Date(a),ds:a.toISOString().slice(0,10)})}d.length&&(t.push({n:r,days:d}),r++),u.setDate(u.getDate()+7)}return t}function $s(e,s){const t=s.reduce((l,o)=>{var u;return l+(((u=tt[e[o.ds]])==null?void 0:u.score)??0)},0),n=s.length*2;return n>0?Math.min(10,Math.max(0,Math.round(t/n*100)/10)):0}function Dt(e){return`${e.getDate()}/${e.getMonth()+1}`}async function Tr(e){var _,h,$,b;je("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let s=null,t=e;if(!t)try{const{data:c}=await oe.auth.getSession(),M=((h=(_=c==null?void 0:c.session)==null?void 0:_.user)==null?void 0:h.id)??null;if(M){const{data:w}=await oe.from("teachers").select("*").eq("profile_id",M).maybeSingle();t=w??null}}catch(c){console.error("Failed to load teacher session:",c)}const[n,l]=await Promise.all([Ne().catch(()=>({})),qs().catch(()=>[])]),o=l,u=(n.prayerScannerTeachers||"").split(/[\s,]+/).map(c=>c.trim()).filter(Boolean);let r=!1;if(t){const{data:c}=await oe.from("profiles").select("role").eq("id",t.profile_id).maybeSingle();r=u.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(c==null?void 0:c.role)==="admin"}Ee(`<div class="max-w-5xl mx-auto animate-fade">
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
      ${r?`
      <button id="pr-tab-scanner-cam" data-tab="scanner-cam"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 font-bold">
        📷 เปิดกล้องสแกน
      </button>
      `:""}
    </div>
    <div id="pr-tab-content"></div>
  </div>`);const d=()=>{var P;const c=n.semester_start,M=n.semester_end,w=c&&M?mi(c,M):[],C=w.flatMap(O=>O.days);if(document.getElementById("pr-tab-actions").innerHTML=`
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
      </div>`,(P=document.getElementById("btn-fill-prayer-classes"))==null||P.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const O=document.getElementById("btn-fill-prayer-classes"),V=O.textContent;O.disabled=!0,O.textContent="กำลังเติม...";try{const W=await Wn({semesterStart:n.semester_start,semesterEnd:n.semester_end,attendanceScoreMode:n.attendanceScoreMode??"recorded"});N(`เติมรายวิชาศาสนา ${W.classes} รายวิชา / ${W.scores} คะแนนแล้ว`,"success")}catch(W){N("เติมไม่สำเร็จ: "+we(W),"error")}finally{O.disabled=!1,O.textContent=V}}),document.getElementById("pr-tab-content").innerHTML=`
      <div class="flex items-center gap-2 flex-wrap mb-3">
        <!-- Room searchable picker -->
        <div class="relative" id="pr-room-picker-wrap">
          <button id="pr-room-btn" type="button"
            class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px] text-left flex items-center justify-between gap-2">
            <span id="pr-room-label" class="truncate">${o[0]??"—"}</span>
            <span class="text-gray-400">▾</span>
          </button>
          <div id="pr-room-dropdown"
            class="hidden absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            <div class="p-2 border-b border-gray-100">
              <input id="pr-room-search" type="text" placeholder="ค้นหาห้อง... (74 ห้อง)"
                class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div id="pr-room-list" class="overflow-y-auto" style="max-height:260px">
              ${o.map(O=>`<button type="button" data-room="${O}"
                class="pr-room-item w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 transition">
                ${O}
              </button>`).join("")}
            </div>
          </div>
        </div>
        <input id="pr-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัสนักเรียน"
          class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <span id="pr-filter-count" class="text-xs text-gray-400 flex-shrink-0"></span>
        <div class="flex gap-1 text-xs flex-shrink-0 flex-wrap">
          ${Object.values(tt).map(O=>`<span class="px-1.5 py-0.5 ${O.bg} ${O.color} rounded cursor-default">${O.label}=${O.fullLabel??""}</span>`).join("")}
        </div>
      </div>
      ${!c||!M?`<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`:`<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`,!c||!M)return;const T="border border-gray-200 text-center text-xs select-none",H="sticky left-0 z-20 bg-white border border-gray-200",B="sticky z-20 bg-white border border-gray-200",f=O=>O>=8?"text-emerald-600":O>=6?"text-amber-500":"text-red-600",i=30,y=160,E={};let g=[],L=[];const S=(O,V=!0)=>{O&&(O.style.outline=`2px solid ${V?"#059669":"#ef4444"}`,O.style.outlineOffset="1px",setTimeout(()=>{O.style.outline="",O.style.outlineOffset=""},700))},j=async(O,V,W,A)=>{var J;E[O]||(E[O]={}),A===null?delete E[O][V]:E[O][V]=A;const U=document.querySelector(`.pr-cell[data-sid="${O}"][data-date="${V}"]`);if(U){const K=A?tt[A]:null;Object.values(tt).forEach(ae=>U.classList.remove(ae.bg)),K?(U.classList.add(K.bg),U.innerHTML=`<span class="${K.color} text-xs">${K.label}</span>`):U.innerHTML=""}k(O);const Y=document.querySelector(`.adm-cell[data-sid="${O}"][data-date="${V}"]`);if(Y){const K=A?tt[A]:null;Y.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${K?K.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,Y.innerHTML=K?`<span class="${K.color}">${K.label}</span>`:'<span class="text-gray-200">·</span>'}try{const K=((J=w.find(ae=>ae.days.some(X=>X.ds===V)))==null?void 0:J.n)??null;await Do(O,W,V,A,K,"แอดมิน"),S(U,!0),S(Y,!0)}catch(K){console.error("[prayer save]",K),S(U,!1),S(Y,!1),N("บันทึกไม่สำเร็จ: "+we(K),"error")}},D=async(O,V)=>{const A=(await Promise.allSettled(O.map(([U,Y,J])=>j(U,Y,V,J)))).filter(U=>U.status==="rejected").length;A>0&&N(`บันทึกไม่สำเร็จ ${A} รายการ`,"error")},k=O=>{const V=E[O]??{},W=$s(V,C),A=document.getElementById(`pr-sc-${O}`);A&&(A.textContent=W,A.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${f(W)} text-xs`)},I=(O,V)=>{if(document.getElementById("pr-filter-count").textContent=`${O.length} คน · ${C.length} วัน`,!O.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${H} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${B} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${B} bg-gray-50 text-left px-2" style="left:96px;min-width:${y}px">ชื่อ-นามสกุล</th>
              ${w.map(W=>`<th colspan="${W.days.length}"
                class="${T} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${W.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${W.n}">
                Week${W.n} ✎</th>`).join("")}
              <th class="${T} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${H} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${B} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${B} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${y}px">ชื่อ</th>
              ${w.flatMap(W=>W.days.map(A=>`<th class="${T} bg-gray-100 text-gray-400 font-normal"
                style="width:${i}px;min-width:${i}px;font-size:9px">
                ${_s[A.date.getDay()]}<br/>${Dt(A.date)}</th>`)).join("")}
              <th class="${T} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${O.map((W,A)=>{const U=E[W.id]??{},Y=$s(U,C);return`<tr class="hover:bg-gray-50/60" data-sid="${W.id}">
                <td class="${H} text-center text-gray-400" style="width:28px">${A+1}</td>
                <td class="${B} text-center font-mono text-gray-600" style="left:28px;width:68px">${W.student_code??"—"}</td>
                <td class="${B} px-2" style="left:96px;min-width:${y}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${W.image_url?`<img src="${W.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${W.full_name??"—"}</span>
                  </div>
                </td>
                ${w.flatMap(J=>J.days.map(K=>{const ae=U[K.ds]??null,X=ae?tt[ae]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${X?X.bg:""}"
                    data-sid="${W.id}" data-date="${K.ds}" data-room="${V}"
                    style="width:${i}px;min-width:${i}px;height:28px">
                    ${X?`<span class="${X.color} text-xs">${X.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${f(Y)} text-xs"
                  id="pr-sc-${W.id}" style="min-width:48px">${Y}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",W=>{const A=W.target.closest(".pr-week-th");if(!A)return;const U=+A.dataset.week,Y=w.find(J=>J.n===U);Y&&F(Y,g,z)}),document.getElementById("pr-grid-wrap").addEventListener("click",W=>{const A=W.target.closest(".pr-cell");if(!A)return;W.stopPropagation();const U=+A.dataset.sid,Y=A.dataset.date,J=A.dataset.room;Tt(W,K=>j(U,Y,J,K))})},R=async(O,V="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[W,A]=await Promise.all([ao(O),so(O,c,M)]);g=W,Object.keys(E).forEach(Y=>delete E[Y]);for(const Y of g)E[Y.id]={};for(const Y of A)E[Y.student_id]||(E[Y.student_id]={}),E[Y.student_id][Y.check_date]=Y.status;L=C.map(Y=>Y.ds);const U=V?g.filter(Y=>{var J,K;return((J=Y.full_name)==null?void 0:J.toLowerCase().includes(V))||((K=Y.student_code)==null?void 0:K.includes(V))}):g;I(U,O)}catch(W){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${W.message}</div>`}};let z=o[0]??"";const q=O=>{z=O,document.getElementById("pr-room-label").textContent=O,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(W=>{const A=W.dataset.room===O;W.classList.toggle("bg-indigo-50",A),W.classList.toggle("font-semibold",A),W.classList.toggle("text-indigo-700",A)});const V=document.getElementById("pr-filter-search").value.toLowerCase();R(O,V)};document.getElementById("pr-room-btn").addEventListener("click",O=>{O.stopPropagation();const V=document.getElementById("pr-room-dropdown");V.classList.toggle("hidden"),V.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",O=>{const V=O.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(W=>{W.style.display=W.dataset.room.toLowerCase().includes(V)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",O=>{const V=O.target.closest(".pr-room-item");V&&q(V.dataset.room)}),document.addEventListener("click",()=>{var O;(O=document.getElementById("pr-room-dropdown"))==null||O.classList.add("hidden")},{capture:!0,once:!1}),z&&q(z),document.getElementById("pr-filter-search").addEventListener("input",O=>{const V=O.target.value.toLowerCase();if(!g.length)return;const W=V?g.filter(A=>{var U,Y;return((U=A.full_name)==null?void 0:U.toLowerCase().includes(V))||((Y=A.student_code)==null?void 0:Y.includes(V))}):g;I(W,z)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const O=document.getElementById("btn-sync-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const V=Object.values(E).flatMap(A=>Object.keys(A)),W=[...new Set([...L,...V])].sort();if(!W.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}O.disabled=!0,O.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:A}=await Ce(async()=>{const{syncPrayerSheet:Y}=await import("./sync-GIjLHUjs.js");return{syncPrayerSheet:Y}},__vite__mapDeps([11,6,4])),U=g.map(Y=>({id:Y.id,student_code:Y.student_code}));await A(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",W,E,U),N(`Sync ละหมาด ${U.length} คน × ${W.length} วัน สำเร็จ`,"success")}catch(A){N("Sync ไม่สำเร็จ: "+we(A),"error")}finally{O.disabled=!1,O.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const O=document.getElementById("btn-sync-all-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}O.disabled=!0,O.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:V}=await Ce(async()=>{const{syncPrayerSheet:ie}=await import("./sync-GIjLHUjs.js");return{syncPrayerSheet:ie}},__vite__mapDeps([11,6,4])),{getAllPrayerRecords:W,getStudents:A}=await Ce(async()=>{const{getAllPrayerRecords:ie,getStudents:G}=await import("./api-C-roKrdU.js");return{getAllPrayerRecords:ie,getStudents:G}},__vite__mapDeps([0,1,2,3,4])),[U,Y]=await Promise.all([W(),A()]),J={};for(const ie of U)J[ie.student_id]||(J[ie.student_id]={}),J[ie.student_id][ie.check_date]=ie.status;const ae=Y.filter(ie=>ie.religion_room).map(ie=>({id:ie.id,student_code:ie.student_code})),X=[...new Set(U.map(ie=>ie.check_date))].sort(),xe=[...new Set([...L,...X])].sort();if(!xe.length||!ae.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}O.textContent=`⏳ Sync ${ae.length} คน × ${xe.length} วัน...`,await V(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",xe,J,ae),N(`✅ Sync ทุกห้อง ${ae.length} คน × ${xe.length} วัน สำเร็จ`,"success")}catch(V){N("Sync ไม่สำเร็จ: "+we(V),"error")}finally{O.disabled=!1,O.textContent="↑ Sync ทุกห้อง"}});const F=(O,V,W)=>{var J;(J=document.getElementById("admin-prayer-modal"))==null||J.remove();const A=document.createElement("div");A.id="admin-prayer-modal",A.className="fixed inset-0 z-[80] flex flex-col bg-white";const U=`${Dt(O.days[0].date)}–${Dt(O.days[O.days.length-1].date)}`,Y=(K,ae)=>{var ie;const X=((ie=E[K])==null?void 0:ie[ae])??null,xe=X?tt[X]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${xe?xe.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${K}" data-date="${ae}" data-room="${W}">
          ${xe?`<span class="${xe.color}">${xe.label}</span>`:'<span class="text-gray-200">·</span>'}
        </button>`};A.innerHTML=`
        <div class="bg-emerald-700 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button id="adm-modal-close" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${O.n}</p>
            <p class="text-xs text-emerald-200">${U} · ${W}</p>
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
                ${O.days.map(K=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${_s[K.date.getDay()]} ${Dt(K.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${K.ds}" data-room="${W}">AllDay</button>
                  </th>`).join("")}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${V.map(K=>`
                <tr class="hover:bg-gray-50/50" data-sid="${K.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${K.image_url?`<img src="${K.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-xs">👤</div>'}
                      <span class="text-gray-800 truncate max-w-[120px]">${K.full_name??"—"}</span>
                    </div>
                  </td>
                  ${O.days.map(ae=>`<td class="px-2 py-2 text-center">${Y(K.id,ae.ds)}</td>`).join("")}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${K.id}" data-room="${W}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`,document.body.appendChild(A),A.querySelector("#adm-modal-body").addEventListener("click",K=>{const ae=K.target.closest(".adm-cell");if(!ae)return;K.stopPropagation();const X=+ae.dataset.sid,xe=ae.dataset.date;Tt(K,ie=>j(X,xe,W,ie))}),A.querySelectorAll(".adm-day-all").forEach(K=>{K.addEventListener("click",ae=>{ae.stopPropagation();const X=K.dataset.date;Tt(ae,xe=>D(V.map(ie=>[ie.id,X,xe]),W))})}),A.querySelectorAll(".adm-row-all").forEach(K=>{K.addEventListener("click",ae=>{ae.stopPropagation();const X=+K.dataset.sid;Tt(ae,xe=>D(O.days.map(ie=>[X,ie.ds,xe]),W))})}),A.querySelector("#adm-all-check").addEventListener("click",K=>{K.stopPropagation(),Tt(K,ae=>D(V.flatMap(X=>O.days.map(xe=>[X.id,xe.ds,ae])),W))}),A.querySelector("#adm-modal-close").addEventListener("click",()=>A.remove())}},p=()=>{document.getElementById("pr-tab-actions").innerHTML="",s&&(clearInterval(s),s=null);const c=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Filters panel -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
          <h3 class="font-bold text-gray-800 text-sm flex items-center gap-1.5">
            🔍 คัดกรองข้อมูล
          </h3>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">เลือกวันที่สแกน</label>
            <input type="date" id="hist-date-input" value="${c}"
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
    `;let M=[],w="",C=!1;const T=1e3,H=g=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[g]||"ไม่ระบุพื้นที่",B=g=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[g]||"bg-gray-50 text-gray-500 border-gray-100",f=async g=>{const L=[];for(let S=0;;S+=T){const{data:j,error:D}=await oe.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",g).not("location","is",null).order("created_at",{ascending:!1}).range(S,S+T-1);if(D)throw D;if(L.push(...j??[]),!j||j.length<T)break}return L},i=async()=>{var S;if(!document.getElementById("hist-table-body")){s&&(clearInterval(s),s=null);return}const L=((S=document.getElementById("hist-date-input"))==null?void 0:S.value)||c;if(!C){C=!0;try{M=await f(L),y()}catch(j){console.error("Fetch history failed:",j);const D=document.getElementById("hist-table-body");D&&(D.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${j.message}</td></tr>`)}finally{C=!1}}},y=()=>{var A,U;const g=((A=document.getElementById("hist-loc-filter"))==null?void 0:A.value)||"",L=(((U=document.getElementById("hist-search-input"))==null?void 0:U.value)||"").trim().toLowerCase(),S=M.filter(Y=>{var J,K,ae,X;if(g&&Y.location!==g||w&&(Y.scanned_by||((J=Y.teachers)==null?void 0:J.full_name)||"บันทึกมือ (เดิม)")!==w)return!1;if(L){const xe=(((K=Y.students)==null?void 0:K.full_name)||"").toLowerCase(),ie=(((ae=Y.students)==null?void 0:ae.student_code)||"").toLowerCase(),G=(Y.main_room||"").toLowerCase(),le=(Y.scanned_by||((X=Y.teachers)==null?void 0:X.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),de=Y.input_method==="manual"?"กรอกรหัส manual":"qr";return xe.includes(L)||ie.includes(L)||G.includes(L)||le.includes(L)||de.includes(L)}return!0}),j=S.length,D=S.filter(Y=>Y.status==="pray").length,k=S.filter(Y=>Y.status==="usor").length,I=j-D-k,R=document.getElementById("stat-hist-total"),z=document.getElementById("stat-hist-pray"),q=document.getElementById("stat-hist-usor"),F=document.getElementById("stat-hist-other");R&&(R.textContent=j),z&&(z.textContent=D),q&&(q.textContent=k),F&&(F.textContent=I);const P=new Set;M.forEach(Y=>{var K;const J=Y.scanned_by||((K=Y.teachers)==null?void 0:K.full_name);J&&P.add(J)});const O=document.getElementById("hist-operators-wrap");O&&(P.size===0?O.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(O.innerHTML=Array.from(P).map(Y=>{const J=w===Y;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${Y.includes("(ครู)")||Y.includes("ครู")?J?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":J?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${Y}">${J?"✓ ":""}${Y}</span>`}).join(""),O.querySelectorAll(".op-filter-chip").forEach(Y=>{Y.addEventListener("click",()=>{const J=Y.dataset.op;w=w===J?"":J,y()})})));const V=document.getElementById("hist-table-count");V&&(V.textContent=`${S.length} รายการ`);const W=document.getElementById("hist-table-body");if(W){if(S.length===0){W.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}W.innerHTML=S.map((Y,J)=>{var pe;const K=Y.created_at?new Date(Y.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",ae=Y.students,X=ae!=null&&ae.image_url?`<img src="${ae.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((ae==null?void 0:ae.full_name)||"?").charAt(0)}</div>`,xe=ae?`<div class="flex items-center gap-2.5">
              ${X}
              <div>
                <p class="font-bold text-gray-800 leading-none">${ae.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${ae.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${Y.student_id})</span>`,ie={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[Y.status]||`<span class="text-gray-400">${Y.status||"—"}</span>`,G=Y.scanned_by||((pe=Y.teachers)==null?void 0:pe.full_name)||"บันทึกมือ (เดิม)",le=Y.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",de=Y.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${S.length-J}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${K}</td>
            <td class="px-4 py-3">${xe}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${Y.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${B(Y.location)}">
                ${H(Y.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${G}</span>
              <div class="flex flex-wrap gap-1">${le}${de}</div>
            </td>
            <td class="px-4 py-3 text-center">${ie}</td>
          </tr>
        `}).join("")}},E=()=>{s&&(clearInterval(s),s=null);const g=document.getElementById("hist-live-toggle");g&&g.checked&&(s=setInterval(i,4e3))};setTimeout(()=>{var S,j,D;(S=document.getElementById("btn-hist-refresh"))==null||S.addEventListener("click",i),(j=document.getElementById("hist-date-input"))==null||j.addEventListener("change",()=>{w="",i()}),(D=document.getElementById("hist-loc-filter"))==null||D.addEventListener("change",y);const g=document.getElementById("hist-search-input");g&&g.addEventListener("input",y);const L=document.getElementById("hist-live-toggle");L&&L.addEventListener("change",E),i(),E()},50)},a=(c,M=!1)=>c==null||c===""?M:["1","true","yes","on"].includes(String(c).trim().toLowerCase()),m=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${o.map(c=>`<option value="${c}">${c}</option>`).join("")}
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
            <input type="text" id="pr-sheet-id" value="${n.prayerSheetId??""}" placeholder="วาง ID จาก URL ของ Google Sheet"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ชื่อแท็บ</label>
            <input type="text" id="pr-sheet-tab" value="${n.prayerSheetTab??"Solat"}" placeholder="Solat"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ช่วงรหัสนักเรียน</label>
            <input type="text" id="pr-stu-range" value="${n.prayerStudentRange??"A3:A3000"}" placeholder="A3:A3000"
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
                ${a(n.prayerSameRoomGuardMaleEnabled,!0)?"checked":""} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนชายห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ถ้าเปิดไว้ แกนนำนักเรียนจะบันทึกเพื่อนห้องเดียวกันไม่ได้</span>
              </span>
            </label>
            <label class="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 cursor-pointer">
              <input id="pr-guard-female" type="checkbox" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ${a(n.prayerSameRoomGuardFemaleEnabled,!1)?"checked":""} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนหญิงห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ปิดไว้ได้เมื่อจุดสแกนมีแกนนำน้อยหรือมีห้องเดียวเป็นหลัก</span>
              </span>
            </label>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">จำนวนครั้งที่อนุญาตให้กรอกรหัสแทน QR Code ต่อเดือน/นักเรียน</label>
            <input type="number" min="0" max="31" id="pr-manual-monthly-limit" value="${Number.isFinite(parseInt(n.prayerManualEntryMonthlyLimit??"2",10))?parseInt(n.prayerManualEntryMonthlyLimit??"2",10):2}"
              class="w-32 text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">ตั้งเป็น 0 เพื่อปิดการบันทึกด้วยการกรอกรหัส</p>
          </div>
          <button id="pr-save-scanner-safety"
            class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition">
            บันทึกความปลอดภัยระบบสแกน
          </button>
        </div>
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const c=document.getElementById("pr-save-cfg"),M=document.getElementById("pr-sheet-id").value.trim(),w=document.getElementById("pr-sheet-tab").value.trim()||"Solat",C=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";c.disabled=!0,c.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Be("prayerSheetId",M),Be("prayerSheetTab",w),Be("prayerStudentRange",C)]),n.prayerSheetId=M,n.prayerSheetTab=w,n.prayerStudentRange=C,c.textContent="✅ บันทึกแล้ว",c.style.background="#16a34a",setTimeout(()=>{c.disabled=!1,c.textContent="บันทึกการตั้งค่า",c.style.background=""},1800),N("บันทึก Sheet config ละหมาดแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),c.disabled=!1,c.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var H,B,f;const c=document.getElementById("pr-save-scanner-safety"),M=(H=document.getElementById("pr-guard-male"))!=null&&H.checked?"true":"false",w=(B=document.getElementById("pr-guard-female"))!=null&&B.checked?"true":"false",C=parseInt(((f=document.getElementById("pr-manual-monthly-limit"))==null?void 0:f.value)||"2",10),T=String(Math.max(0,Math.min(31,Number.isFinite(C)?C:2)));c.disabled=!0,c.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Be("prayerSameRoomGuardMaleEnabled",M),Be("prayerSameRoomGuardFemaleEnabled",w),Be("prayerManualEntryMonthlyLimit",T)]),n.prayerSameRoomGuardMaleEnabled=M,n.prayerSameRoomGuardFemaleEnabled=w,n.prayerManualEntryMonthlyLimit=T,N("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),c.textContent="✅ บันทึกแล้ว",setTimeout(()=>{c.disabled=!1,c.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(i){N("บันทึกไม่สำเร็จ: "+we(i),"error"),c.disabled=!1,c.textContent="บันทึกความปลอดภัยระบบสแกน"}})},v=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">⏱️ ช่วงเวลาเปิดระบบสแกนละหมาด</span>
        </div>
        <div class="px-5 py-4 space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">เวลาเริ่มสแกน</label>
              <input type="text" id="pr-scan-start" value="${n.prayerScanStartTime??"12:20"}" placeholder="12:20"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับแกนนำทั่วไป</label>
              <input type="text" id="pr-scan-end" value="${n.prayerScanEndTime??"12:50"}" placeholder="12:50"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับประธาน/รองประธาน</label>
              <input type="text" id="pr-scan-ext-end" value="${n.prayerScanExtendedEndTime??"13:05"}" placeholder="13:05"
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
    `;let c=[],M={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const w=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],C=i=>(i||"").split(/[\s,]+/).map(y=>y.trim()).filter(Boolean),T=i=>String(i||"").trim(),H=i=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[i]||"ทั้งหมด",B=async(i,y)=>{const E=await Ne().catch(()=>({})),g=new Set(C(E.prayerExtendedScannerStudents));y?g.add(String(i)):g.delete(String(i));const L=Array.from(g).join(",");return await Be("prayerExtendedScannerStudents",L),n.prayerExtendedScannerStudents=L,L};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const i=document.getElementById("pr-save-scanner-time-cfg"),y=document.getElementById("pr-scan-start").value.trim()||"12:20",E=document.getElementById("pr-scan-end").value.trim()||"12:50",g=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![y,E,g].every(S=>/^\d{1,2}:\d{2}$/.test(S))){N("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}i.disabled=!0,i.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Be("prayerScanStartTime",y),Be("prayerScanEndTime",E),Be("prayerScanExtendedEndTime",g)]),n.prayerScanStartTime=y,n.prayerScanEndTime=E,n.prayerScanExtendedEndTime=g,N("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),i.textContent="✅ บันทึกแล้ว",setTimeout(()=>{i.disabled=!1,i.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(S){N("บันทึกไม่สำเร็จ: "+we(S),"error"),i.disabled=!1,i.textContent="บันทึกช่วงเวลาสแกน"}});const f=async()=>{var y,E;const i=document.getElementById("scanners-list-wrap");if(i)try{const{data:g,error:L}=await oe.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if(L)throw L;const S=await Ne().catch(()=>({})),j=g??[],D=C(S.prayerScannerTeachers),k=new Set(C(S.prayerExtendedScannerStudents));let I=[];if(D.length>0){const{data:X,error:xe}=await oe.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",D).order("teacher_code");if(xe)throw xe;I=X??[]}const R=j.length+I.length;if(document.getElementById("scanner-count-badge").textContent=`${R} คน`,R===0){i.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const z=Object.fromEntries(w.map(X=>[X.key,new Set(C(S[`prayerScanner${X.key}`]))])),q=j.map(X=>{const xe=String(X.student_code||"").trim(),ie=w.filter(le=>{var de;return(de=z[le.key])==null?void 0:de.has(xe)}).map(le=>le.key),G=k.has(xe);return{...X,type:"student",code:xe,name:X.full_name||"",roomInfo:X.main_room||"",gender:T(X.gender),permission:G?"extended":"normal",permissionLabel:G?"ขยายเวลา":"ทั่วไป",assignedDays:ie,searchText:[xe,X.full_name,X.main_room,X.gender,G?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),F=I.map(X=>({...X,type:"teacher",code:String(X.teacher_code||"").trim(),name:X.full_name||"",roomInfo:X.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[X.teacher_code,X.full_name,X.dept,"ครู คุณครู"].join(" ").toLowerCase()})),P=[...q,...F],O=Pe(P.map(X=>X.roomInfo)),V=q.filter(X=>X.gender==="ชาย").length,W=q.filter(X=>X.gender==="หญิง").length,A=q.filter(X=>X.permission==="extended").length,U=q.filter(X=>X.assignedDays.length===0).length,Y=(X,xe,ie="indigo")=>{const G={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${G[ie]||G.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${X}</p>
              <p class="text-lg font-extrabold leading-tight">${xe}</p>
            </div>
          `};i.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${Y("ทั้งหมด",R,"indigo")}
              ${Y("ชาย",V,"emerald")}
              ${Y("หญิง",W,"rose")}
              ${Y("ครู",I.length,"slate")}
              ${Y("ขยายเวลา",A,"amber")}
              ${Y("ยังไม่มีเวร",U,U?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${R}`],["male",`ชาย ${V}`],["female",`หญิง ${W}`],["teacher",`ครู ${I.length}`]].map(([X,xe])=>`
                  <button type="button" data-scanner-audience="${X}"
                    class="scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition">
                    ${xe}
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
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${H(M.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const J=()=>{const X=M,xe=X.q.trim().toLowerCase();return P.filter(ie=>!(X.audience==="male"&&!(ie.type==="student"&&ie.gender==="ชาย")||X.audience==="female"&&!(ie.type==="student"&&ie.gender==="หญิง")||X.audience==="teacher"&&ie.type!=="teacher"||X.type&&ie.type!==X.type||X.gender&&ie.gender!==X.gender||X.room&&ie.roomInfo!==X.room||X.permission&&ie.permission!==X.permission||X.day==="none"&&!(ie.type==="student"&&ie.assignedDays.length===0)||X.day&&X.day!=="none"&&!ie.assignedDays.includes(X.day)||xe&&!ie.searchText.includes(xe)))},K=()=>{i.querySelectorAll(".scanner-audience-tab").forEach(ie=>{const G=ie.dataset.scannerAudience===M.audience;ie.className=G?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const X=document.getElementById("scanner-filtered-count");X&&(X.textContent=J().length);const xe=document.getElementById("scanner-active-audience-label");xe&&(xe.textContent=H(M.audience))},ae=()=>{var de,pe,me;K();const X=J(),xe=document.getElementById("scanner-table-wrap"),ie=document.getElementById("scanner-filtered-count");ie&&(ie.textContent=X.length),document.getElementById("scanner-count-badge").textContent=X.length===R?`${R} คน`:`${X.length}/${R} คน`;const G=(pe=(de=document.activeElement)==null?void 0:de.id)!=null&&pe.startsWith("scanner-filter-")?document.activeElement.id:"",le=G==="scanner-filter-q"?document.activeElement.selectionStart:null;if(xe.innerHTML=`
            <table class="w-full text-xs min-w-[980px]">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-left align-top">
                    <span class="block mb-1">ประเภท</span>
                    <select id="scanner-filter-type" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="student" ${M.type==="student"?"selected":""}>นักเรียน</option>
                      <option value="teacher" ${M.type==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-2 py-3 text-left align-top">
                    <span class="block mb-1">รหัส/ค้นหา</span>
                    <input id="scanner-filter-q" value="${ee(M.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${O.map(Z=>`<option value="${ee(Z)}" ${M.room===Z?"selected":""}>${ee(Z)}</option>`).join("")}
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">เพศ</span>
                    <select id="scanner-filter-gender" class="w-24 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="ชาย" ${M.gender==="ชาย"?"selected":""}>ชาย</option>
                      <option value="หญิง" ${M.gender==="หญิง"?"selected":""}>หญิง</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ประเภทสิทธิ์</span>
                    <select id="scanner-filter-permission" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="normal" ${M.permission==="normal"?"selected":""}>ทั่วไป</option>
                      <option value="extended" ${M.permission==="extended"?"selected":""}>ขยายเวลา</option>
                      <option value="teacher" ${M.permission==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">วันรับผิดชอบ</span>
                    <select id="scanner-filter-day" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${w.map(Z=>`<option value="${Z.key}" ${M.day===Z.key?"selected":""}>${Z.full}</option>`).join("")}
                      <option value="none" ${M.day==="none"?"selected":""}>ยังไม่กำหนด</option>
                    </select>
                  </th>
                  <th class="px-4 py-3 text-right align-top">การจัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${X.length?X.map(Z=>{if(Z.type==="teacher")return`
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${ee(Z.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${Z.image_url?`<img src="${ee(Z.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`:'<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>'}
                            <span class="font-medium text-gray-800">${ee(Z.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${ee(Z.roomInfo||"—")}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${ee(Z.code)}" data-name="${ee(Z.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `;const ve=w.map(he=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${Z.assignedDays.includes(he.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${ee(Z.code)}" data-day="${he.key}" data-name="${ee(Z.name)}" title="เวรวัน${he.full}">
                        ${he.label}
                      </button>
                    `).join(" ");return`
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${ee(Z.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${Z.image_url?`<img src="${ee(Z.image_url)}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                          <span class="font-medium text-gray-800">${ee(Z.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${ee(Z.roomInfo||"—")}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${Z.gender==="หญิง"?"bg-rose-50 text-rose-700 border-rose-100":"bg-sky-50 text-sky-700 border-sky-100"} text-[10px] font-bold border">${ee(Z.gender||"—")}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${Z.permission==="extended"?"bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100":"bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"}"
                          data-code="${ee(Z.code)}" data-name="${ee(Z.name)}" data-extended="${Z.permission==="extended"?"1":"0"}">
                          ${Z.permission==="extended"?"ขยายเวลา":"ทั่วไป"}
                        </button>
                      </td>
                      <td class="px-3 py-2">
                        <div class="flex gap-1 items-center">
                          ${ve}
                          ${Z.assignedDays.length===0?'<span class="ml-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold">ยังไม่มีเวร</span>':""}
                        </div>
                      </td>
                      <td class="px-4 py-2 text-right">
                        <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                          data-id="${Z.id}" data-code="${ee(Z.code)}" data-name="${ee(Z.name)}" data-type="student">
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
          `,["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(Z=>{var ve;(ve=document.getElementById(Z))==null||ve.addEventListener("change",he=>{const ge=Z.replace("scanner-filter-","");M[ge]=he.target.value,ae()})}),(me=document.getElementById("scanner-filter-q"))==null||me.addEventListener("input",Z=>{M.q=Z.target.value,ae()}),G){const Z=document.getElementById(G);Z==null||Z.focus(),G==="scanner-filter-q"&&le!==null&&(Z==null||Z.setSelectionRange(le,le))}i.querySelectorAll(".btn-toggle-extended-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const ve=Z.dataset.code,he=Z.dataset.name,ge=Z.dataset.extended!=="1";Z.disabled=!0,Z.textContent="กำลังบันทึก...";try{await B(ve,ge),N(`ปรับสิทธิ์ "${he}" เป็น${ge?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),f()}catch(Q){N("ปรับสิทธิ์ไม่สำเร็จ: "+Q.message,"error"),Z.disabled=!1,Z.textContent=Z.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),i.querySelectorAll(".btn-toggle-day-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{var Q;const ve=Z.dataset.code,he=Z.dataset.day,ge=Z.dataset.name;Z.disabled=!0;try{const te=await Ne().catch(()=>({})),ue=`prayerScanner${he}`;let ce=C(te[ue]);ce.includes(ve)?ce=ce.filter(se=>se!==ve):ce.push(ve),await Be(ue,ce.join(","));const ne=((Q=w.find(se=>se.key===he))==null?void 0:Q.full)||he;N(`ปรับสิทธิ์เวรวัน${ne} ของ "${ge}" สำเร็จ`,"success"),f()}catch(te){N("ปรับสิทธิ์เวรล้มเหลว: "+te.message,"error"),Z.disabled=!1}})}),i.querySelectorAll(".btn-revoke-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const ve=Z.dataset.type,he=Z.dataset.name;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${he}" หรือไม่?`))try{if(ve==="student"){const ge=+Z.dataset.id,Q=Z.dataset.code,{error:te}=await oe.from("students").update({can_scan_prayer:!1}).eq("id",ge);if(te)throw te;await B(Q,!1);const ue=await Ne().catch(()=>({}));for(const ce of w){const ne=`prayerScanner${ce.key}`,se=C(ue[ne]).filter(fe=>fe!==Q);await Be(ne,se.join(","))}}else{const ge=Z.dataset.code,Q=await Ne().catch(()=>({})),te=C(Q.prayerScannerTeachers).filter(ue=>ue!==ge);await Be("prayerScannerTeachers",te.join(","))}N(`ถอนสิทธิ์ "${he}" สำเร็จ`,"success"),f()}catch(ge){N("ทำรายการไม่สำเร็จ: "+ge.message,"error")}})})};i.querySelectorAll("[data-scanner-audience]").forEach(X=>{X.addEventListener("click",()=>{M.audience=X.dataset.scannerAudience,M.type="",M.gender="",M.audience==="teacher"&&(M.day="",M.permission=""),ae()})}),(y=document.getElementById("btn-filter-unassigned-scanner"))==null||y.addEventListener("click",()=>{M.day="none",M.type="student",ae()}),(E=document.getElementById("btn-reset-scanner-filters"))==null||E.addEventListener("click",()=>{M={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},ae()}),ae()}catch(g){i.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${g.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const i=document.getElementById("pr-scanner-search-input").value.trim();if(!i){N("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const y=i.split(/[\s,]+/).map(E=>E.trim()).filter(Boolean);if(y.length)try{const[E,g]=await Promise.all([oe.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",y),oe.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",y)]);if(E.error)throw E.error;if(g.error)throw g.error;const L=E.data??[],S=g.data??[];c=[...L.map(k=>({...k,code:k.student_code,type:"student",display_info:`รหัส ${k.student_code} · ห้อง ${k.main_room||"—"} · ${k.gender||"ไม่ระบุเพศ"}`})),...S.map(k=>({...k,code:k.teacher_code,type:"teacher",display_info:`รหัสครู ${k.teacher_code} · กลุ่มสาระ ${k.dept||"—"}`}))];const j=document.getElementById("scanner-preview-container"),D=document.getElementById("scanner-preview-cards");if(!c.length){j.classList.add("hidden"),N("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}j.classList.remove("hidden"),D.innerHTML=c.map(k=>`
          <div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">
            ${k.type==="student"?k.image_url?`<img src="${k.image_url}" class="student-avatar-premium w-10 h-14" />`:'<div class="student-avatar-premium-placeholder w-10 h-14 bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">👤</div>':k.image_url?`<img src="${k.image_url}" class="w-10 h-10 rounded-full object-cover flex-shrink-0"/>`:'<div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">👨‍🏫</div>'}
            <div class="min-w-0">
              <p class="font-bold text-gray-800 text-xs truncate">
                ${k.full_name}
                ${k.type==="teacher"?'<span class="ml-1 px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">คุณครู</span>':""}
              </p>
              <p class="text-[10px] text-gray-400">${k.display_info}</p>
            </div>
          </div>
        `).join("")}catch(E){N("ค้นหาล้มเหลว: "+E.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!c.length)return;const i=document.getElementById("btn-confirm-scanner-grant");i.disabled=!0,i.textContent="⏳ กำลังบันทึก...";try{const y=c.filter(g=>g.type==="student").map(g=>g.id),E=c.filter(g=>g.type==="teacher").map(g=>g.code);if(y.length>0){const{error:g}=await oe.from("students").update({can_scan_prayer:!0}).in("id",y);if(g)throw g}if(E.length>0){const g=await Ne().catch(()=>({}));let L=C(g.prayerScannerTeachers);E.forEach(S=>{L.includes(S)||L.push(S)}),await Be("prayerScannerTeachers",L.join(","))}N(`มอบสิทธิ์สำเร็จ ${c.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),c=[],f()}catch(y){N("บันทึกไม่สำเร็จ: "+y.message,"error")}finally{i.disabled=!1,i.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),f()},x=c=>{s&&(clearInterval(s),s=null),document.querySelectorAll("[data-tab]").forEach(M=>{M.className=M.dataset.tab===c?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),c==="scores"?d():c==="history"?p():c==="scanners"?v():m()};document.getElementById("pr-tab-scores").addEventListener("click",()=>x("scores")),($=document.getElementById("pr-tab-history"))==null||$.addEventListener("click",()=>x("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>x("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>x("config")),r&&((b=document.getElementById("pr-tab-scanner-cam"))==null||b.addEventListener("click",async()=>{const{renderStudentPrayerScanner:c}=await Ce(async()=>{const{renderStudentPrayerScanner:M}=await import("./student-views-CzHNOdez.js");return{renderStudentPrayerScanner:M}},__vite__mapDeps([41,6,0,1,2,3,4,14,42,16,28,43,21,17,29,10,12,39,15,34]));c(t)})),x("scores")}function ks(e,s,t,n){var u;(u=document.getElementById("rsa-modal"))==null||u.remove();const l=!!e,o=document.createElement("div");o.id="rsa-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${l?"แก้ไขหัวข้อ":"เพิ่มหัวข้อ"}</h3>
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
            class="btn-primary flex-1 py-2.5 rounded-xl text-white text-sm font-semibold">${l?"บันทึก":"เพิ่ม"}</button>
        </div>
      </form>
    </div>`,document.body.appendChild(o),o.querySelector("#rsa-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#rsa-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#rsa-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const p={name:o.querySelector("#rsa-name").value.trim(),max_score:parseInt(o.querySelector("#rsa-max").value)||20,sort_order:parseInt(o.querySelector("#rsa-order").value)||0,sheet_col:o.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:s,semester:t};l?await eo(e.id,p):await to(p),N("บันทึกสำเร็จ","success"),o.remove(),n()}catch(p){N("บันทึกไม่สำเร็จ: "+we(p),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}async function Br(){var u,r,d,p;je("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let e=null,s="",t=null;try{const{data:a}=await oe.auth.getSession();if(e=((r=(u=a==null?void 0:a.session)==null?void 0:u.user)==null?void 0:r.id)??null,s=((p=(d=a==null?void 0:a.session)==null?void 0:d.user)==null?void 0:p.email)??"",e){const{data:m}=await oe.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",e).maybeSingle();t=m??null}}catch{}const n="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";Ee(`<div class="max-w-lg mx-auto animate-fade">

    <!-- Avatar -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4 flex flex-col items-center">
      <div id="adm-avatar"
        class="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500
               text-white text-3xl font-bold flex items-center justify-center overflow-hidden border-4 border-white shadow-md mb-3">
        ${t!=null&&t.image_url?`<img src="${t.image_url}" class="w-full h-full object-cover"/>`:((t==null?void 0:t.full_name)??"A").charAt(0).toUpperCase()}
      </div>
      <p class="text-sm font-semibold text-gray-700">${(t==null?void 0:t.full_name)??"ผู้ดูแลระบบ"}</p>
      <p class="text-xs text-indigo-500 mt-0.5">ผู้ดูแลระบบ</p>
    </div>

    <!-- แก้ไขชื่อ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-3 text-sm">📝 ชื่อ-นามสกุล</h3>
      <input id="adm-name" type="text" value="${(t==null?void 0:t.full_name)??""}"
        placeholder="ชื่อ-นามสกุล" class="${n} mb-3" />
      <button id="btn-save-name"
        class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        บันทึกชื่อ
      </button>
      <div id="name-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>

    <!-- ตั้ง Username -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-1 text-sm">🔑 ยูเซอร์เนม (สำหรับ login)</h3>
      ${t!=null&&t.username?`<p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-700 font-mono">${t.username}</span></p>`:'<p class="text-xs text-amber-500 mb-3">⚠️ ยังไม่ได้ตั้งยูเซอร์เนม — ตั้งเพื่อ login โดยไม่ต้องใช้อีเมล</p>'}
      <input id="adm-username" type="text" value="${(t==null?void 0:t.username)??""}"
        placeholder="เช่น admin.school (a-z, 0-9, ., -, _ เท่านั้น)"
        autocomplete="username"
        class="${n} mb-1 font-mono lowercase" maxlength="32" />
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
        class="${n} mb-3" />
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
        class="${n} mb-2" />
      <input id="adm-pw2" type="password" placeholder="ยืนยันรหัสผ่านใหม่"
        class="${n} mb-3" />
      <button id="btn-save-pw"
        class="w-full py-2.5 rounded-xl bg-gray-700 text-white text-sm font-semibold hover:bg-gray-800 transition">
        เปลี่ยนรหัสผ่าน
      </button>
      <div id="pw-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>
  </div>`);const l=(a,m,v)=>{const x=document.getElementById(a);x.className=`text-xs text-center mt-2 py-2 rounded-lg ${v?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,x.textContent=m,x.classList.remove("hidden"),setTimeout(()=>x.classList.add("hidden"),3500)},o=async a=>{const{data:m,error:v}=await oe.rpc("upsert_admin_teacher_profile",{p_profile_id:e,p_full_name:a.full_name??null,p_username:a.username??null,p_login_email:a.login_email??null});if(v)throw v;return m};document.getElementById("btn-save-name").addEventListener("click",async()=>{const a=document.getElementById("btn-save-name"),m=document.getElementById("adm-name").value.trim();if(!m){l("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({full_name:m,login_email:s}),l("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const v=document.getElementById("user-name");v&&(v.textContent=m)}catch(v){l("name-msg","บันทึกไม่สำเร็จ: "+we(v),!1)}finally{a.disabled=!1,a.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var x,_;const a=document.getElementById("btn-save-username"),m=document.getElementById("adm-username").value.trim().toLowerCase(),v=/^[a-z0-9._-]{3,32}$/.test(m);if(!m){l("username-msg","กรุณากรอก username",!1);return}if(!v){l("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({username:m,login_email:s}),l("username-msg",`บันทึก username "${m}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=m}catch(h){const $=(x=h.message)!=null&&x.includes("unique")||(_=h.message)!=null&&_.includes("duplicate")?`username "${m}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+we(h);l("username-msg",$,!1)}finally{a.disabled=!1,a.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",a=>{const m=a.target.selectionStart;a.target.value=a.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),a.target.setSelectionRange(m,m)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const a=document.getElementById("btn-save-email"),m=document.getElementById("adm-email").value.trim();if(!m||!m.includes("@")){l("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}a.disabled=!0,a.textContent="กำลังส่งลิงก์...";try{const{error:v}=await oe.auth.updateUser({email:m});if(v)throw v;l("email-msg","ส่งลิงก์ยืนยันไปที่ "+m+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(v){l("email-msg","ไม่สำเร็จ: "+we(v),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const a=document.getElementById("btn-save-pw"),m=document.getElementById("adm-pw").value,v=document.getElementById("adm-pw2").value;if(!m||m.length<6){l("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(m!==v){l("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}a.disabled=!0,a.textContent="กำลังเปลี่ยน...";try{const{error:x}=await oe.auth.updateUser({password:m});if(x)throw x;l("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(x){l("pw-msg","ไม่สำเร็จ: "+we(x),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนรหัสผ่าน"}})}async function jr(){var u;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>{document.querySelectorAll("[data-nav]").forEach(d=>{const p=d.dataset.nav===r;d.classList.toggle("bg-indigo-800",p),d.classList.toggle("text-white",p),d.classList.toggle("text-indigo-200",!p)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const n=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),l=(r,d,p,a)=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${r} ${d}</p>
      <p id="${p}-today" class="text-3xl font-extrabold ${a}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${p}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${p}-total" class="font-bold text-gray-600">—</span>
      </div>
    </div>`;e(`<div class="max-w-xl mx-auto animate-fade">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">${n}</p>
      </div>
      <button id="stat-refresh" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">🔄 รีเฟรช</button>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      ${l("👨‍🏫","ครู","stat-teacher","text-indigo-600")}
      ${l("🎒","นักเรียน","stat-student","text-emerald-600")}
    </div>
    <p class="text-center text-[11px] text-gray-400">อัปเดตล่าสุด: <span id="stat-updated">—</span></p>
  </div>`);const o=async()=>{try{const r=await ho();document.getElementById("stat-teacher-today").textContent=r.teacherToday,document.getElementById("stat-teacher-month").textContent=r.teacherMonth,document.getElementById("stat-teacher-total").textContent=r.teacherTotal,document.getElementById("stat-student-today").textContent=r.studentToday,document.getElementById("stat-student-month").textContent=r.studentMonth,document.getElementById("stat-student-total").textContent=r.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{N("โหลดสถิติไม่สำเร็จ","error")}};await o(),(u=document.getElementById("stat-refresh"))==null||u.addEventListener("click",o)}async function qr(){var u;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav===r),d.classList.toggle("text-white",d.dataset.nav===r),d.classList.toggle("text-indigo-200",d.dataset.nav!==r)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const t=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],n=async()=>{const r=await es(),d=t.map(a=>({building:a,rooms:r.filter(m=>m.building===a)}));[...new Set(r.map(a=>a.building).filter(a=>!t.includes(a)))].forEach(a=>d.push({building:a,rooms:r.filter(m=>m.building===a)})),document.getElementById("crm-content").innerHTML=d.filter(a=>a.rooms.length>0).map(a=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50 bg-gray-50/50">
          <h3 class="font-bold text-gray-700">🏫 ${a.building}
            <span class="text-xs font-normal text-gray-400 ml-1">${a.rooms.length} ห้อง</span>
          </h3>
          <button class="crm-add-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            data-building="${a.building}">＋ เพิ่มห้อง</button>
        </div>
        <div class="divide-y divide-gray-50">
          ${a.rooms.map(m=>`
          <div class="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition" data-id="${m.id}">
            <span class="w-20 font-mono text-sm font-semibold text-indigo-700 flex-shrink-0">${m.room_number}</span>
            <span class="flex-1 text-sm text-gray-700">${m.name??"—"}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${m.is_teaching_room?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-500"}">
              ${m.is_teaching_room?"ห้องเรียน":"ห้องพิเศษ"}
            </span>
            <button class="crm-edit-btn text-xs text-indigo-400 hover:text-indigo-700 px-2" data-id="${m.id}">แก้ไข</button>
            <button class="crm-del-btn text-xs text-red-400 hover:text-red-600 px-1" data-id="${m.id}">ลบ</button>
          </div>`).join("")}
        </div>
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(a=>{a.addEventListener("click",()=>o(null,a.dataset.building,r))}),document.querySelectorAll(".crm-edit-btn").forEach(a=>{const m=r.find(v=>v.id===parseInt(a.dataset.id));m&&a.addEventListener("click",()=>o(m,m.building,r))}),document.querySelectorAll(".crm-del-btn").forEach(a=>{a.addEventListener("click",()=>{const m=r.find(v=>v.id===parseInt(a.dataset.id));l(m)})})},l=r=>{var p;(p=document.getElementById("crm-confirm"))==null||p.remove();const d=document.createElement("div");d.id="crm-confirm",d.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",d.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${r==null?void 0:r.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${r==null?void 0:r.building}${r!=null&&r.name?" · "+r.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(d),d.querySelector("#crm-conf-no").addEventListener("click",()=>d.remove()),d.querySelector("#crm-conf-yes").addEventListener("click",async()=>{d.remove();try{await Gn(r.id),N("ลบห้องแล้ว ✅","success"),n()}catch(a){N("ลบไม่สำเร็จ: "+we(a),"error")}})},o=(r,d,p)=>{var v;(v=document.getElementById("crm-modal"))==null||v.remove();const a=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...p.map(x=>x.building)])],m=document.createElement("div");m.id="crm-modal",m.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${r?"แก้ไขห้อง":"เพิ่มห้องใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${a.map(x=>`<option value="${x}" ${x===((r==null?void 0:r.building)??d)?"selected":""}>${x}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หมายเลขห้อง <span class="text-red-400">*</span></label>
          <input id="crm-number" type="text" value="${(r==null?void 0:r.room_number)??""}" placeholder="เช่น 531, 212-213"
            class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm font-mono" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง (ถ้ามี)</label>
          <input id="crm-name" type="text" value="${(r==null?void 0:r.name)??""}" placeholder="เช่น ห้องสมุด, ห้องพักครู"
            class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" id="crm-teaching" class="w-4 h-4 accent-emerald-600 rounded"
            ${(r==null?void 0:r.is_teaching_room)??!0?"checked":""} />
          <label for="crm-teaching" class="text-sm text-gray-700">เป็นห้องเรียน (ครูสามารถเลือกได้)</label>
        </div>
        <div class="flex gap-3 pt-2">
          <button id="crm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="crm-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>
    </div>`,document.body.appendChild(m),m.querySelector("#crm-cancel").addEventListener("click",()=>m.remove()),m.querySelector("#crm-save").addEventListener("click",async()=>{const x=m.querySelector("#crm-save"),_=m.querySelector("#crm-building").value,h=m.querySelector("#crm-number").value.trim(),$=m.querySelector("#crm-name").value.trim()||null,b=m.querySelector("#crm-teaching").checked;if(!_||!h){N("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}x.disabled=!0,x.textContent="⏳";try{r?await Mn(r.id,{building:_,room_number:h,name:$,is_teaching_room:b}):await Nn({building:_,room_number:h,name:$,is_teaching_room:b}),N(r?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),m.remove(),n()}catch(c){N("บันทึกไม่สำเร็จ: "+we(c),"error"),x.disabled=!1,x.textContent="บันทึก"}})};e(`<div class="max-w-3xl mx-auto animate-fade">
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
  </div>`),await n(),(u=document.getElementById("crm-add-new"))==null||u.addEventListener("click",async()=>{const r=await es().catch(()=>[]);o(null,"อาคาร 1",r)})}const xi=(e,s=[])=>[1,2,3,4,5,6,7,8,9].map(t=>{const n=s.includes(t);return`<button type="button" data-period="${t}"
      class="${e}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${n?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-400"}">${t}</button>`}).join(""),Ka=(e,s,t="",n=[])=>`
  <div class="${e}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${e}-session-label text-xs font-semibold text-violet-700">วันที่ ${s+1}</span>
      <button type="button" class="${e}-session-remove ${s===0?"hidden":""} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${e}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${t}"/>
    <div class="flex flex-wrap gap-1.5 ${e}-session-pills">${xi(e,n)}</div>
  </div>`;function Ar(e,s){const t=e.querySelector(`#${s}-sessions-list`),n=()=>{t.querySelectorAll(`.${s}-session-pill`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{const u=o.classList.contains("bg-violet-600");o.className=`${s}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${u?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),t.querySelectorAll(`.${s}-session-remove`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{o.closest(`.${s}-session`).remove(),l()})})},l=()=>{const o=[...t.querySelectorAll(`.${s}-session`)];o.forEach((u,r)=>{u.querySelector(`.${s}-session-label`).textContent=`วันที่ ${r+1}`,u.querySelector(`.${s}-session-remove`).classList.toggle("hidden",o.length<=1)}),n()};e.querySelector(`#${s}-add-session`).addEventListener("click",()=>{const o=t.querySelectorAll(`.${s}-session`).length,u=document.createElement("div");u.innerHTML=Ka(s,o),t.appendChild(u.firstElementChild),l()}),n()}function Mr(e,s){return[...e.querySelectorAll(`.${s}-session`)].map(t=>({date:t.querySelector(`.${s}-session-date`).value,periods:[...t.querySelectorAll(`.${s}-session-pill.bg-violet-600`)].map(n=>parseInt(n.dataset.period))}))}const gi={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},Nr=e=>gi[e]??"",Dr=e=>{var t,n;const s=(((t=e.target_teacher_ids)==null?void 0:t.length)??0)+(((n=e.target_student_ids)==null?void 0:n.length)??0);return s?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${s} คน</span>`:""};async function Hr(e,s,t="all"){try{const n=t==="teacher"?["all_teachers"]:t==="student"?["all_students"]:t==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(n.map(l=>oe.functions.invoke("send-push",{body:{title:`📢 ${e}`,body:(s??"").slice(0,150),url:l==="all_students"?"student.html":"teacher.html",target:l}})))}catch{}}let Ea=null;function Rr(){return Ea||(Ea=Promise.all([Oe(),_t()]).then(([e,s])=>({teachers:e,students:s})).catch(()=>({teachers:[],students:[]}))),Ea}async function Or(){var u;je("announcements"),document.getElementById("page-title").textContent="ประกาศ";const e=r=>String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=r=>new Date(r).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});Ee(`<div class="animate-fade">
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
  </div>`);const t=async()=>{const r=document.getElementById("ann-list");if(!r)return;let d;try{d=await As()}catch{r.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!d.length){r.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const p={};try{(await So(d.map(m=>m.id))).forEach(m=>{p[m.announcement_id]=(p[m.announcement_id]??0)+1})}catch{}r.innerHTML=d.map(a=>{var m,v;return`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${a.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${a.id}">
        ${a.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':a.ann_type==="training"?'<div class="h-1 bg-gradient-to-r from-violet-400 to-purple-400"></div>':a.is_active?'<div class="h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${a.ann_type==="training"?"bg-violet-50":a.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${a.priority>0?"📌":a.ann_type==="training"?"🎓":a.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide
                ${a.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${a.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${a.ann_type==="training"?'<span class="px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full text-[11px] font-bold">🎓 อบรม/กิจกรรม</span>':""}
              ${a.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${Nr(a.audience)}
              ${Dr(a)}
              ${a.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${e(a.title)}</h3>
            ${a.ann_type==="training"&&a.event_date?`
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📅 ${s(a.event_date)}</span>
                ${a.event_location?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📍 ${e(a.event_location)}</span>`:""}
                ${(m=a.event_periods)!=null&&m.length?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${a.event_periods.sort((x,_)=>x-_).join(", ")}</span>`:""}
              </div>`:a.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">${e(a.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">
              ${s(a.created_at)}
              ${(v=a.teachers)!=null&&v.full_name?` · 📝 ${e(a.teachers.full_name)}`:" · ⚙️ แอดมิน"}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${a.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${a.id}" data-title="${e(a.title)}">💬 ${p[a.id]??0} ความคิดเห็น</button>
              <span>👁️ ${a.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${a.ann_type==="training"?`<button class="ann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${a.id}" data-title="${e(a.title)}">👥 รายชื่อ</button>`:""}
            <button class="ann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${a.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${a.id}" data-active="${a.is_active}">
              ${a.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="ann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${a.id}">✏️ แก้ไข</button>
            <button class="ann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 hover:text-red-600 transition"
              data-id="${a.id}" data-title="${e(a.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`}).join(""),r.querySelectorAll(".ann-toggle-btn").forEach(a=>{a.addEventListener("click",async()=>{const m=Number(a.dataset.id),v=a.dataset.active==="true";a.disabled=!0,a.textContent="...";try{await ma(m,{isActive:!v}),await t()}catch{N("บันทึกไม่สำเร็จ","error"),a.disabled=!1}})}),r.querySelectorAll(".ann-edit-btn").forEach(a=>{a.addEventListener("click",()=>{const m=d.find(v=>v.id===Number(a.dataset.id));m&&o(m,t)})}),r.querySelectorAll(".ann-del-btn").forEach(a=>{a.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${a.dataset.title}" ?`)){a.disabled=!0;try{await Eo(Number(a.dataset.id)),await t()}catch{N("ลบไม่สำเร็จ","error"),a.disabled=!1}}})}),r.querySelectorAll(".ann-rsvp-list-btn").forEach(a=>{a.addEventListener("click",async()=>l(Number(a.dataset.id),a.dataset.title))}),r.querySelectorAll(".ann-comments-view-btn").forEach(a=>{a.addEventListener("click",async()=>n(Number(a.dataset.id),a.dataset.title,t))})},n=async(r,d,p)=>{const a=await Mo(r).catch(()=>[]),m=x=>new Date(x).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),v=document.createElement("div");v.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",v.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${e(d)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${a.length?a.map(x=>{var _,h;return`
            <div class="flex items-start gap-2" data-comment-id="${x.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${e((((_=x.teachers)==null?void 0:_.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${e(((h=x.teachers)==null?void 0:h.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${x.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${e(x.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${m(x.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#comments-list-close").onclick=()=>v.remove(),v.addEventListener("click",x=>{x.target===v&&v.remove()}),v.querySelectorAll(".comment-del-btn").forEach(x=>{x.addEventListener("click",async()=>{var _;if(confirm("ลบความคิดเห็นนี้?"))try{await No(Number(x.dataset.id)),(_=v.querySelector(`[data-comment-id="${x.dataset.id}"]`))==null||_.remove(),await(p==null?void 0:p())}catch(h){N("ลบไม่สำเร็จ: "+we(h),"error")}})})},l=async(r,d)=>{const{getAnnouncementRsvps:p}=await Ce(async()=>{const{getAnnouncementRsvps:h}=await import("./api-C-roKrdU.js");return{getAnnouncementRsvps:h}},__vite__mapDeps([0,1,2,3,4])),a=await p(r).catch(()=>[]),m={yes:[],maybe:[],no:[]};a.forEach(h=>{m[h.response]&&m[h.response].push(h)});const v=h=>{var $,b;return`<li class="text-sm text-gray-700">${e((($=h.teachers)==null?void 0:$.full_name)??"?")} <span class="text-xs text-gray-400">${((b=h.teachers)==null?void 0:b.dept)??""}</span></li>`},x=(h,$,b,c)=>m[h].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${c} mb-1.5">${$} ${b} (${m[h].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${m[h].map(v).join("")}</ul>
      </div>`:"",_=document.createElement("div");_.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",_.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[220px]">${e(d)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="rsvp-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5">
          ${a.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
          ${x("yes","✅","สนใจเข้าร่วมแน่นอน","text-emerald-700")}
          ${x("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
          ${x("no","❌","ไม่สนใจ","text-gray-500")}
          ${a.length?`<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${a.length} คน</p>`:""}
        </div>
      </div>`,document.body.appendChild(_),_.querySelector("#rsvp-list-close").onclick=()=>_.remove(),_.addEventListener("click",h=>{h.target===_&&_.remove()})},o=(r,d)=>{var B;(B=document.getElementById("ann-modal"))==null||B.remove();const p=document.createElement("div");p.id="ann-modal",p.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const a=!!(r!=null&&r.id);p.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <h3 class="font-bold text-gray-800 text-base">${a?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="ann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4 overflow-y-auto flex-1">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="ann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${e((r==null?void 0:r.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="ann-body" rows="4" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${e((r==null?void 0:r.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="ann-image-preview" class="${r!=null&&r.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="ann-image-preview-img" src="${e((r==null?void 0:r.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="ann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="ann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="ann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="ann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${e((r==null?void 0:r.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((r==null?void 0:r.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(r==null?void 0:r.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((r==null?void 0:r.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(r==null?void 0:r.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(r==null?void 0:r.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(r==null?void 0:r.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
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
          <div id="ann-training-fields" class="${(r==null?void 0:r.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="ann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${e((r==null?void 0:r.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="ann-sessions-list" class="space-y-2">
                ${Ka("ann",0,(r==null?void 0:r.event_date)??"",(r==null?void 0:r.event_periods)??[])}
              </div>
              ${a?'<div id="ann-add-session" class="hidden"></div>':`<button type="button" id="ann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((r==null?void 0:r.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((r==null?void 0:r.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="ann-active-toggle" data-on="${(r==null?void 0:r.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(r==null?void 0:r.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(r==null?void 0:r.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="ann-pin" data-on="${((r==null?void 0:r.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((r==null?void 0:r.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((r==null?void 0:r.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
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
              <button type="button" id="ann-ack" data-on="${r!=null&&r.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${r!=null&&r.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="ann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(r==null?void 0:r.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 flex-shrink-0">
          <button id="ann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="ann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(p);const m=()=>p.remove();p.querySelector("#ann-modal-close").onclick=m,p.querySelector("#ann-modal-cancel").onclick=m,p.addEventListener("click",f=>{f.target===p&&m()});let v=null,x=null;Rr().then(({teachers:f,students:i})=>{document.body.contains(p)&&(v=Ha({wrap:p.querySelector("#ann-target-teachers-wrap"),chipsWrap:p.querySelector("#ann-target-teachers-chips"),teachers:f,value:(r==null?void 0:r.target_teacher_ids)??[]}),x=Is({wrap:p.querySelector("#ann-target-students-wrap"),chipsWrap:p.querySelector("#ann-target-students-chips"),students:i,value:(r==null?void 0:r.target_student_ids)??[]}))});const _=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],h=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],$=(f,i)=>{const y=document.createElement("div");y.className="mt-1.5 hidden",y.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${i.map(E=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${E}">${E}</button>`).join("")}
        </div>`,f.parentNode.appendChild(y),f.addEventListener("focus",()=>y.classList.remove("hidden")),f.addEventListener("blur",()=>setTimeout(()=>y.classList.add("hidden"),150)),y.querySelectorAll(".ann-chip").forEach(E=>{E.addEventListener("mousedown",g=>g.preventDefault()),E.addEventListener("click",()=>{f.value.trim()?f.value+=(f.tagName==="TEXTAREA"?`
`:" ")+E.dataset.val:f.value=E.dataset.val,f.focus()})})};$(p.querySelector("#ann-title"),_),$(p.querySelector("#ann-body"),h);let b=(r==null?void 0:r.file_url)??null;const c=p.querySelector("#ann-image-status"),M=p.querySelector("#ann-image-preview"),w=p.querySelector("#ann-image-preview-img");p.querySelector("#ann-image-file").addEventListener("change",async f=>{var y;const i=(y=f.target.files)==null?void 0:y[0];if(i){c.textContent="กำลังอัปโหลด...";try{b=await zs(i),w.src=b,M.classList.remove("hidden"),c.textContent="อัปโหลดสำเร็จ ✅"}catch(E){c.textContent="อัปโหลดไม่สำเร็จ: "+we(E)}f.target.value=""}}),p.querySelector("#ann-image-remove").addEventListener("click",()=>{b=null,M.classList.add("hidden"),c.textContent=""});let C=[];p.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const f=p.querySelector("#ann-cal-picker");if(!f.classList.contains("hidden")){f.classList.add("hidden");return}f.classList.remove("hidden");const i=p.querySelector("#ann-cal-event-sel");if(i.options.length<=1)try{const{getWorkCalendarEvents:y,getSystemConfig:E}=await Ce(async()=>{const{getWorkCalendarEvents:j,getSystemConfig:D}=await import("./api-C-roKrdU.js");return{getWorkCalendarEvents:j,getSystemConfig:D}},__vite__mapDeps([0,1,2,3,4]));let g=new Date().getFullYear()+543,L=1;try{const j=await E();g=j.academicYear??j.academic_year??g,L=j.semester??L}catch{}C=await y(g,L);const S={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};C.forEach(j=>{const D=document.createElement("option");D.value=j.id;const k=j.event_type==="inspection"&&j.round_number?` ครั้งที่ ${j.round_number}`:"",I=new Date(j.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});D.textContent=`${S[j.event_type]??"📌"}${k} ${j.label} (${I})`,i.appendChild(D)})}catch(y){i.innerHTML=`<option>โหลดไม่สำเร็จ: ${y.message}</option>`}}),p.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const f=+p.querySelector("#ann-cal-event-sel").value,i=C.find(S=>S.id===f),y=p.querySelector("#ann-cal-preview"),E=p.querySelector("#ann-cal-fill");if(!i){y.classList.add("hidden"),E.classList.add("hidden");return}const g=(i.work_calendar_items||[]).sort((S,j)=>S.sort_order-j.sort_order),L=new Date(i.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});y.innerHTML=`<p class="font-semibold">${i.label}</p>
        <p class="text-indigo-600">📅 ${L}${i.event_type==="inspection"&&i.round_number?` · ครั้งที่ ${i.round_number}`:""}</p>
        ${i.description?`<p>${i.description}</p>`:""}
        ${g.length?`<ul class="mt-1 space-y-0.5">${g.map(S=>`<li>☑ ${S.item_label}</li>`).join("")}</ul>`:""}`,y.classList.remove("hidden"),E.classList.remove("hidden")}),p.querySelector("#ann-cal-fill").addEventListener("click",()=>{const f=+p.querySelector("#ann-cal-event-sel").value,i=C.find(S=>S.id===f);if(!i)return;const y=(i.work_calendar_items||[]).sort((S,j)=>S.sort_order-j.sort_order),E=new Date(i.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),g=i.event_type==="inspection"&&i.round_number?` ครั้งที่ ${i.round_number}`:"";p.querySelector("#ann-title").value=i.label+(g?` (${g.trim()})`:"");const L=[];i.description&&L.push(i.description),y.length&&(L.push("สิ่งที่ต้องเตรียม:"),y.forEach(S=>L.push(`• ${S.item_label}`))),L.push(`กำหนดวันที่: ${E}`),p.querySelector("#ann-body").value=L.join(`
`),i.event_date&&(p.querySelector("#ann-due").value=i.event_date),p.querySelector("#ann-cal-picker").classList.add("hidden")}),p.querySelectorAll(".ann-type-btn").forEach(f=>{f.addEventListener("click",()=>{const i=f.dataset.type;p.querySelectorAll(".ann-type-btn").forEach(y=>{const E=y.dataset.type==="training";y.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${y.dataset.type===i?E?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":E?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),p.querySelector("#ann-training-fields").classList.toggle("hidden",i!=="training")})});const T=f=>f==="teacher"?"bg-sky-600 text-white border-sky-600":f==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",H=f=>f==="teacher"?"hover:border-sky-300":f==="student"?"hover:border-teal-300":"hover:border-indigo-300";p.querySelectorAll(".ann-audience-btn").forEach(f=>{f.addEventListener("click",()=>{p.querySelectorAll(".ann-audience-btn").forEach(i=>{i.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${i.dataset.audience===f.dataset.audience?T(i.dataset.audience):`bg-white text-gray-600 border-gray-200 ${H(i.dataset.audience)}`}`})})}),Ar(p,"ann"),p.querySelectorAll(".ann-filter-btn").forEach(f=>{f.addEventListener("click",()=>{p.querySelectorAll(".ann-filter-btn").forEach(i=>{i.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${i.dataset.filter===f.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),p.querySelector("#ann-modal-save").addEventListener("click",async()=>{var F,P;const f=p.querySelector("#ann-title").value.trim();if(!f){N("กรุณากรอกหัวข้อ","warning");return}const i=p.querySelector("#ann-body").value.trim()||null,y=p.querySelector("#ann-active-toggle").dataset.on==="true",E=p.querySelector("#ann-pin").dataset.on==="true"?1:0,g=p.querySelector("#ann-ack").dataset.on==="true",L=p.querySelector("#ann-due").value||null,S=p.querySelector(".ann-type-btn.bg-violet-600")||(r==null?void 0:r.ann_type)==="training"?"training":"general",j=((F=p.querySelector(".ann-audience-btn.text-white"))==null?void 0:F.dataset.audience)??(r==null?void 0:r.audience)??"all",D=p.querySelector("#ann-video-url").value.trim()||null,k=S==="training"&&p.querySelector("#ann-event-location").value.trim()||null,I=((P=p.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:P.dataset.filter)??(r==null?void 0:r.schedule_filter)??"all",R=(v==null?void 0:v.getValue())??(r==null?void 0:r.target_teacher_ids)??[],z=(x==null?void 0:x.getValue())??(r==null?void 0:r.target_student_ids)??[];if(S==="training"){if(!k){N("กรุณาระบุสถานที่","warning");return}const O=Mr(p,"ann");for(const W of O){if(!W.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!W.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const V=p.querySelector("#ann-modal-save");V.disabled=!0,V.textContent="กำลังบันทึก...";try{a?await ma(r.id,{title:f,body:i,isActive:y,priority:E,requiresAck:g,dueDate:L,annType:S,eventDate:O[0].date,eventPeriods:O[0].periods,eventLocation:k,scheduleFilter:I,fileUrl:b,videoUrl:D,audience:j,targetTeacherIds:R,targetStudentIds:z}):O.length>1?(await Promise.all(O.map(W=>xa({title:f,body:i,isActive:y,priority:E,requiresAck:g,dueDate:L,annType:S,eventDate:W.date,eventPeriods:W.periods,eventLocation:k,scheduleFilter:I,fileUrl:b,videoUrl:D,audience:j,targetTeacherIds:R,targetStudentIds:z}))),N(`สร้าง ${O.length} ประกาศสำเร็จ ✅`,"success")):(await xa({title:f,body:i,isActive:y,priority:E,requiresAck:g,dueDate:L,annType:S,eventDate:O[0].date,eventPeriods:O[0].periods,eventLocation:k,scheduleFilter:I,fileUrl:b,videoUrl:D,audience:j,targetTeacherIds:R,targetStudentIds:z}),N("บันทึกสำเร็จ ✅","success")),m(),await d()}catch(W){N("บันทึกไม่สำเร็จ: "+we(W),"error"),V.disabled=!1,V.textContent="บันทึก"}return}const q=p.querySelector("#ann-modal-save");q.disabled=!0,q.textContent="กำลังบันทึก...";try{a?await ma(r.id,{title:f,body:i,isActive:y,priority:E,requiresAck:g,dueDate:L,annType:S,fileUrl:b,videoUrl:D,audience:j,targetTeacherIds:R,targetStudentIds:z}):await xa({title:f,body:i,isActive:y,priority:E,requiresAck:g,dueDate:L,annType:S,fileUrl:b,videoUrl:D,audience:j,targetTeacherIds:R,targetStudentIds:z}),!a&&y&&Hr(f,i,j),N("บันทึกสำเร็จ ✅","success"),m(),await d()}catch(O){N("บันทึกไม่สำเร็จ: "+we(O),"error"),q.disabled=!1,q.textContent="บันทึก"}})};(u=document.getElementById("ann-create-btn"))==null||u.addEventListener("click",()=>o(null,t)),await t()}async function Pr(){je("autoscale-history"),document.getElementById("page-title").textContent="ประวัติปรับกำลังเครื่องอัตโนมัติ";const e=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=o=>new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),t=o=>o.includes("🔴")?{label:"ล้มเหลว",cls:"bg-red-100 text-red-700"}:o.includes("⚠️")?{label:"อัปเกรด",cls:"bg-amber-100 text-amber-700"}:o.includes("✅")?{label:"ลดระดับ",cls:"bg-emerald-100 text-emerald-700"}:o.includes("🧪")?{label:"ทดสอบ",cls:"bg-gray-100 text-gray-600"}:{label:"เหตุการณ์",cls:"bg-gray-100 text-gray-600"};Ee(`<div class="animate-fade">
    <p class="text-xs text-gray-400 mb-6">บันทึกอัตโนมัติทุกครั้งที่ระบบปรับขนาด compute (Micro ↔ Medium) แยกจากหน้าประกาศทั่วไป</p>
    <div id="autoscale-history-wrap" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const n=document.getElementById("autoscale-history-wrap");let l;try{l=(await As()).filter(o=>o.ann_type==="system")}catch{n.innerHTML='<p class="text-red-400 text-sm p-6">โหลดไม่สำเร็จ</p>';return}if(!l.length){n.innerHTML=`<div class="p-16 text-center text-gray-400">
      <div class="text-5xl mb-4">🖥️</div>
      <p class="font-semibold text-gray-500">ยังไม่มีประวัติการปรับกำลังเครื่อง</p>
      <p class="text-xs mt-1">ระบบจะบันทึกอัตโนมัติทุกครั้งที่ปรับขนาด compute</p>
    </div>`;return}n.innerHTML=`
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
          ${l.map(o=>{const u=t(o.title||"");return`<tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 align-top">
              <td class="px-5 py-3.5 whitespace-nowrap text-gray-500 font-mono text-xs">${s(o.created_at)}</td>
              <td class="px-5 py-3.5 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${u.cls}">${u.label}</span>
              </td>
              <td class="px-5 py-3.5 text-gray-700">${e(o.body||o.title||"")}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`}const bi={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},yi=e=>bi[e]??"แอดมิน",fi=e=>e?e.startsWith("academic")?"bg-blue-100 text-blue-700":e.startsWith("registrar")?"bg-violet-100 text-violet-700":e==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function hi(e,s=!1){var h,$;const{getMyAnnouncements:t,createAnnouncement:n,updateAnnouncement:l,deleteAnnouncement:o,getAckStats:u,getAnnouncementCommentsBulk:r,getAnnouncementComments:d,deleteAnnouncementComment:p}=await Ce(async()=>{const{getMyAnnouncements:b,createAnnouncement:c,updateAnnouncement:M,deleteAnnouncement:w,getAckStats:C,getAnnouncementCommentsBulk:T,getAnnouncementComments:H,deleteAnnouncementComment:B}=await import("./api-C-roKrdU.js");return{getMyAnnouncements:b,createAnnouncement:c,updateAnnouncement:M,deleteAnnouncement:w,getAckStats:C,getAnnouncementCommentsBulk:T,getAnnouncementComments:H,deleteAnnouncementComment:B}},__vite__mapDeps([0,1,2,3,4])),a=((h=e==null?void 0:e.positions)!=null&&h.length?e.positions[0]:e==null?void 0:e.position)??null;je("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const m=b=>String(b??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),v=b=>new Date(b).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});Ee(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${fi(a)}">${yi(a)}</span>
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
  </div>`);const x=async()=>{const b=document.getElementById("sann-list");if(!b)return;let c;try{c=await t(e.id)}catch{b.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!c.length){b.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const M=T=>T?new Date(T).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",w=T=>{if(!T)return"";const H=Math.ceil((new Date(T)-new Date)/864e5);return H<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${M(T)}</span>`:H<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${M(T)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${M(T)}</span>`},C={};try{(await r(c.map(H=>H.id))).forEach(H=>{C[H.announcement_id]=(C[H.announcement_id]??0)+1})}catch{}b.innerHTML=c.map(T=>`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${T.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${T.id}">
        ${T.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':T.is_active?'<div class="h-1 bg-gradient-to-r from-indigo-400 to-blue-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${T.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${T.priority>0?"📌":T.requires_ack?"🔔":T.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold
                ${T.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${T.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${T.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${T.requires_ack?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${Nr(T.audience)}
              ${Dr(T)}
              ${T.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${w(T.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${m(T.title)}</h3>
            ${T.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${m(T.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${v(T.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${T.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${T.id}" data-title="${m(T.title)}">💬 ${C[T.id]??0} ความคิดเห็น</button>
              <span>👁️ ${T.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${T.requires_ack?`<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${T.id}" data-title="${m(T.title)}">📊 สถิติ</button>`:""}
            ${T.ann_type==="training"?`<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${T.id}" data-title="${m(T.title)}">👥 รายชื่อ</button>`:""}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${T.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${T.id}" data-active="${T.is_active}">
              ${T.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${T.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${T.id}" data-title="${m(T.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join(""),b.querySelectorAll(".sann-stat-btn").forEach(T=>{T.addEventListener("click",async()=>{const H=Number(T.dataset.id),B=T.dataset.title,f=document.getElementById("sann-stat-modal");f&&f.remove();const i=document.createElement("div");i.id="sann-stat-modal",i.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",i.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${m(B)}</p>
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
          </div>`,document.body.appendChild(i),i.querySelector("#sann-stat-close").onclick=()=>i.remove(),i.addEventListener("click",y=>{y.target===i&&i.remove()});try{const{acked:y,pending:E}=await u(H),g=i.querySelector("#sann-stat-body"),L=S=>new Date(S).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});g.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${y.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${E.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${y.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${y.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${y.map(S=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${m(S.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${L(S.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${E.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${E.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${E.map(S=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${m(S.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{i.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),b.querySelectorAll(".sann-rsvp-list-btn").forEach(T=>{T.addEventListener("click",async()=>{const{getAnnouncementRsvps:H}=await Ce(async()=>{const{getAnnouncementRsvps:L}=await import("./api-C-roKrdU.js");return{getAnnouncementRsvps:L}},__vite__mapDeps([0,1,2,3,4])),B=await H(Number(T.dataset.id)).catch(()=>[]),f=T.dataset.title,i={yes:[],maybe:[],no:[],none:[]};B.forEach(L=>(i[L.response]??i.none).push(L));const y=L=>{var S,j;return`<li class="text-sm text-gray-700">${m(((S=L.teachers)==null?void 0:S.full_name)??"?")} <span class="text-xs text-gray-400">${((j=L.teachers)==null?void 0:j.dept)??""}</span></li>`},E=(L,S,j,D)=>i[L].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${D} mb-1">${S} ${j} (${i[L].length})</p>
            <ul class="space-y-0.5 pl-3">${i[L].map(y).join("")}</ul>
          </div>`:"",g=document.createElement("div");g.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",g.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${f}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${B.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${E("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${E("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${E("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(g),g.querySelector("#rsvp-list-close").onclick=()=>g.remove(),g.addEventListener("click",L=>{L.target===g&&g.remove()})})}),b.querySelectorAll(".ann-comments-view-btn").forEach(T=>{T.addEventListener("click",async()=>{const H=Number(T.dataset.id),B=T.dataset.title,f=await d(H).catch(()=>[]),i=E=>new Date(E).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),y=document.createElement("div");y.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",y.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${m(B)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${f.length?f.map(E=>{var g,L;return`
                <div class="flex items-start gap-2" data-comment-id="${E.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${m((((g=E.teachers)==null?void 0:g.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${m(((L=E.teachers)==null?void 0:L.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${E.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${m(E.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${i(E.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(y),y.querySelector("#comments-list-close").onclick=()=>y.remove(),y.addEventListener("click",E=>{E.target===y&&y.remove()}),y.querySelectorAll(".comment-del-btn").forEach(E=>{E.addEventListener("click",async()=>{var g;if(confirm("ลบความคิดเห็นนี้?"))try{await p(Number(E.dataset.id)),(g=y.querySelector(`[data-comment-id="${E.dataset.id}"]`))==null||g.remove(),await x()}catch(L){N("ลบไม่สำเร็จ: "+we(L),"error")}})})})}),b.querySelectorAll(".sann-toggle-btn").forEach(T=>{T.addEventListener("click",async()=>{T.disabled=!0;try{await l(Number(T.dataset.id),{isActive:T.dataset.active!=="true"}),await x()}catch{N("บันทึกไม่สำเร็จ","error"),T.disabled=!1}})}),b.querySelectorAll(".sann-edit-btn").forEach(T=>{T.addEventListener("click",()=>{const H=c.find(B=>B.id===Number(T.dataset.id));H&&_(H)})}),b.querySelectorAll(".sann-del-btn").forEach(T=>{T.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${T.dataset.title}" ?`)){T.disabled=!0;try{await o(Number(T.dataset.id)),await x()}catch{N("ลบไม่สำเร็จ","error"),T.disabled=!1}}})})},_=(b=null)=>{var D;(D=document.getElementById("sann-modal"))==null||D.remove();const c=document.createElement("div");c.id="sann-modal",c.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const M=!!(b!=null&&b.id);c.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${M?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${m((b==null?void 0:b.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${m((b==null?void 0:b.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${b!=null&&b.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${m((b==null?void 0:b.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${m((b==null?void 0:b.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ (admin เท่านั้นที่เปลี่ยนประเภทได้) -->
          ${s?`
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((b==null?void 0:b.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(b==null?void 0:b.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>`:""}
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((b==null?void 0:b.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(b==null?void 0:b.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(b==null?void 0:b.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(b==null?void 0:b.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
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
          <div id="sann-training-fields" class="${(b==null?void 0:b.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="sann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${m((b==null?void 0:b.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${Ka("sann",0,(b==null?void 0:b.event_date)??"",(b==null?void 0:b.event_periods)??[])}
              </div>
              ${M?'<div id="sann-add-session" class="hidden"></div>':`<button type="button" id="sann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((b==null?void 0:b.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((b==null?void 0:b.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="sann-active-toggle" data-on="${(b==null?void 0:b.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(b==null?void 0:b.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(b==null?void 0:b.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="sann-pin" data-on="${((b==null?void 0:b.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((b==null?void 0:b.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((b==null?void 0:b.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
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
              <button type="button" id="sann-ack" data-on="${b!=null&&b.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${b!=null&&b.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="sann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(b==null?void 0:b.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button id="sann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="sann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(c);const w=()=>c.remove();c.querySelector("#sann-modal-close").onclick=w,c.querySelector("#sann-modal-cancel").onclick=w,c.addEventListener("click",k=>{k.target===c&&w()});let C=null,T=null;Rr().then(({teachers:k,students:I})=>{document.body.contains(c)&&(C=Ha({wrap:c.querySelector("#sann-target-teachers-wrap"),chipsWrap:c.querySelector("#sann-target-teachers-chips"),teachers:k,value:(b==null?void 0:b.target_teacher_ids)??[]}),T=Is({wrap:c.querySelector("#sann-target-students-wrap"),chipsWrap:c.querySelector("#sann-target-students-chips"),students:I,value:(b==null?void 0:b.target_student_ids)??[]}))});const H=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],B=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],f=(k,I)=>{const R=document.createElement("div");R.className="mt-1.5 hidden",R.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${I.map(z=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${z}">${z}</button>`).join("")}
        </div>`,k.parentNode.appendChild(R),k.addEventListener("focus",()=>R.classList.remove("hidden")),k.addEventListener("blur",()=>setTimeout(()=>R.classList.add("hidden"),150)),R.querySelectorAll(".sann-chip").forEach(z=>{z.addEventListener("mousedown",q=>q.preventDefault()),z.addEventListener("click",()=>{k.value.trim()?k.value+=(k.tagName==="TEXTAREA"?`
`:" ")+z.dataset.val:k.value=z.dataset.val,k.focus()})})};f(c.querySelector("#sann-title"),H),f(c.querySelector("#sann-body"),B);let i=(b==null?void 0:b.file_url)??null;const y=c.querySelector("#sann-image-status"),E=c.querySelector("#sann-image-preview"),g=c.querySelector("#sann-image-preview-img");c.querySelector("#sann-image-file").addEventListener("change",async k=>{var R;const I=(R=k.target.files)==null?void 0:R[0];if(I){y.textContent="กำลังอัปโหลด...";try{i=await zs(I),g.src=i,E.classList.remove("hidden"),y.textContent="อัปโหลดสำเร็จ ✅"}catch(z){y.textContent="อัปโหลดไม่สำเร็จ: "+we(z)}k.target.value=""}}),c.querySelector("#sann-image-remove").addEventListener("click",()=>{i=null,E.classList.add("hidden"),y.textContent=""});let L=[];c.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const k=c.querySelector("#sann-cal-picker");if(!k.classList.contains("hidden")){k.classList.add("hidden");return}k.classList.remove("hidden");const I=c.querySelector("#sann-cal-event-sel");if(I.options.length<=1)try{const{getWorkCalendarEvents:R,getSystemConfig:z}=await Ce(async()=>{const{getWorkCalendarEvents:O,getSystemConfig:V}=await import("./api-C-roKrdU.js");return{getWorkCalendarEvents:O,getSystemConfig:V}},__vite__mapDeps([0,1,2,3,4]));let q=new Date().getFullYear()+543,F=1;try{const O=await z();q=O.academicYear??O.academic_year??q,F=O.semester??F}catch{}L=await R(q,F);const P={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};L.forEach(O=>{const V=document.createElement("option");V.value=O.id;const W=O.event_type==="inspection"&&O.round_number?` ครั้งที่ ${O.round_number}`:"",A=new Date(O.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});V.textContent=`${P[O.event_type]??"📌"}${W} ${O.label} (${A})`,I.appendChild(V)})}catch(R){I.innerHTML=`<option>โหลดไม่สำเร็จ: ${R.message}</option>`}}),c.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const k=+c.querySelector("#sann-cal-event-sel").value,I=L.find(P=>P.id===k),R=c.querySelector("#sann-cal-preview"),z=c.querySelector("#sann-cal-fill");if(!I){R.classList.add("hidden"),z.classList.add("hidden");return}const q=(I.work_calendar_items||[]).sort((P,O)=>P.sort_order-O.sort_order),F=new Date(I.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});R.innerHTML=`<p class="font-semibold">${I.label}</p>
        <p class="text-indigo-600">📅 ${F}${I.event_type==="inspection"&&I.round_number?` · ครั้งที่ ${I.round_number}`:""}</p>
        ${I.description?`<p>${I.description}</p>`:""}
        ${q.length?`<ul class="mt-1 space-y-0.5">${q.map(P=>`<li>☑ ${P.item_label}</li>`).join("")}</ul>`:""}`,R.classList.remove("hidden"),z.classList.remove("hidden")}),c.querySelector("#sann-cal-fill").addEventListener("click",()=>{const k=+c.querySelector("#sann-cal-event-sel").value,I=L.find(P=>P.id===k);if(!I)return;const R=(I.work_calendar_items||[]).sort((P,O)=>P.sort_order-O.sort_order),z=new Date(I.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),q=I.event_type==="inspection"&&I.round_number?` ครั้งที่ ${I.round_number}`:"";c.querySelector("#sann-title").value=I.label+(q?` (${q.trim()})`:"");const F=[];I.description&&F.push(I.description),R.length&&(F.push("สิ่งที่ต้องเตรียม:"),R.forEach(P=>F.push(`• ${P.item_label}`))),F.push(`กำหนดวันที่: ${z}`),c.querySelector("#sann-body").value=F.join(`
`),I.event_date&&(c.querySelector("#sann-due").value=I.event_date),c.querySelector("#sann-cal-picker").classList.add("hidden")}),c.querySelectorAll(".sann-type-btn").forEach(k=>{k.addEventListener("click",()=>{const I=k.dataset.type;c.querySelectorAll(".sann-type-btn").forEach(R=>{const z=R.dataset.type==="training";R.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${R.dataset.type===I?z?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":z?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),c.querySelector("#sann-training-fields").classList.toggle("hidden",I!=="training")})});const S=k=>k==="teacher"?"bg-sky-600 text-white border-sky-600":k==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",j=k=>k==="teacher"?"hover:border-sky-300":k==="student"?"hover:border-teal-300":"hover:border-indigo-300";c.querySelectorAll(".sann-audience-btn").forEach(k=>{k.addEventListener("click",()=>{c.querySelectorAll(".sann-audience-btn").forEach(I=>{I.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${I.dataset.audience===k.dataset.audience?S(I.dataset.audience):`bg-white text-gray-600 border-gray-200 ${j(I.dataset.audience)}`}`})})}),Ar(c,"sann"),c.querySelectorAll(".sann-filter-btn").forEach(k=>{k.addEventListener("click",()=>{c.querySelectorAll(".sann-filter-btn").forEach(I=>{I.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${I.dataset.filter===k.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),c.querySelector("#sann-modal-save").addEventListener("click",async()=>{var K,ae;const k=c.querySelector("#sann-title").value.trim();if(!k){N("กรุณากรอกหัวข้อ","warning");return}const I=c.querySelector("#sann-body").value.trim()||null,R=c.querySelector("#sann-active-toggle").dataset.on==="true",z=c.querySelector("#sann-pin").dataset.on==="true"?1:0,q=c.querySelector("#sann-ack").dataset.on==="true",F=c.querySelector("#sann-due").value||null,P=c.querySelector(".sann-type-btn.bg-violet-600")||(b==null?void 0:b.ann_type)==="training"?"training":"general",O=((K=c.querySelector(".sann-audience-btn.text-white"))==null?void 0:K.dataset.audience)??(b==null?void 0:b.audience)??"all",V=c.querySelector("#sann-video-url").value.trim()||null,W=P==="training"&&c.querySelector("#sann-event-location").value.trim()||null,A=((ae=c.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:ae.dataset.filter)??(b==null?void 0:b.schedule_filter)??"all",U=(C==null?void 0:C.getValue())??(b==null?void 0:b.target_teacher_ids)??[],Y=(T==null?void 0:T.getValue())??(b==null?void 0:b.target_student_ids)??[];if(P==="training"){if(!W){N("กรุณาระบุสถานที่","warning");return}const X=Mr(c,"sann");for(const ie of X){if(!ie.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!ie.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const xe=c.querySelector("#sann-modal-save");xe.disabled=!0,xe.textContent="กำลังบันทึก...";try{M?await l(b.id,{title:k,body:I,isActive:R,priority:z,requiresAck:q,dueDate:F,annType:P,eventDate:X[0].date,eventPeriods:X[0].periods,eventLocation:W,scheduleFilter:A,fileUrl:i,videoUrl:V,audience:O,targetTeacherIds:U,targetStudentIds:Y}):X.length>1?(await Promise.all(X.map(ie=>n({title:k,body:I,isActive:R,priority:z,teacherId:e.id,creatorRole:a,requiresAck:q,dueDate:F,annType:P,eventDate:ie.date,eventPeriods:ie.periods,eventLocation:W,scheduleFilter:A,fileUrl:i,videoUrl:V,audience:O,targetTeacherIds:U,targetStudentIds:Y}))),N(`สร้าง ${X.length} ประกาศสำเร็จ ✅`,"success")):(await n({title:k,body:I,isActive:R,priority:z,teacherId:e.id,creatorRole:a,requiresAck:q,dueDate:F,annType:P,eventDate:X[0].date,eventPeriods:X[0].periods,eventLocation:W,scheduleFilter:A,fileUrl:i,videoUrl:V,audience:O,targetTeacherIds:U,targetStudentIds:Y}),N("บันทึกสำเร็จ ✅","success")),w(),await x()}catch(ie){N("บันทึกไม่สำเร็จ: "+we(ie),"error");const G=c.querySelector("#sann-modal-save");G.disabled=!1,G.textContent="บันทึก"}return}const J=c.querySelector("#sann-modal-save");J.disabled=!0,J.textContent="กำลังบันทึก...";try{M?await l(b.id,{title:k,body:I,isActive:R,priority:z,requiresAck:q,dueDate:F,annType:P,fileUrl:i,videoUrl:V,audience:O,targetTeacherIds:U,targetStudentIds:Y}):await n({title:k,body:I,isActive:R,priority:z,teacherId:e.id,creatorRole:a,requiresAck:q,dueDate:F,annType:P,fileUrl:i,videoUrl:V,audience:O,targetTeacherIds:U,targetStudentIds:Y}),!M&&R&&Hr(k,I,O),N("บันทึกสำเร็จ ✅","success"),w(),await x()}catch(X){N("บันทึกไม่สำเร็จ: "+we(X),"error"),J.disabled=!1,J.textContent="บันทึก"}})};($=document.getElementById("sann-create-btn"))==null||$.addEventListener("click",()=>_(null)),await x()}async function zr(){var l;je("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const e=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],s=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];s.flatMap(o=>o.features),Ee(`<div class="animate-fade">
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
  </div>`);let t={};try{t=await yo()}catch{}const n=(l=document.querySelector("#perm-loading"))==null?void 0:l.closest(".bg-white");n&&(n.innerHTML=`
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 w-44">ฟีเจอร์</th>
            ${e.map(o=>`<th class="px-3 py-3.5 text-center text-xs font-bold text-gray-600 min-w-[80px]">${o.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${s.map(o=>`
            <tr class="bg-indigo-50/50 border-y border-indigo-100">
              <td colspan="${e.length+1}" class="px-5 py-2 text-xs font-bold text-indigo-600 uppercase tracking-wider sticky left-0">${o.group}</td>
            </tr>
            ${o.features.map(u=>`
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${u.label}</td>
                ${e.map(r=>{var p;const d=((p=t[r.key])==null?void 0:p[u.key])??!1;return`<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${d?"bg-emerald-500":"bg-gray-300"}"
                      data-position="${r.key}" data-feature="${u.key}" data-on="${d}">
                      <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ml-0.5"
                        style="transform:translateX(${d?"20":"0"}px)"></span>
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
    </div>`,n.querySelectorAll(".perm-toggle").forEach(o=>{o.addEventListener("click",async()=>{const u=o.dataset.position,r=o.dataset.feature,d=o.dataset.on==="true",p=!d;o.disabled=!0;try{await fo(u,r,p),o.dataset.on=String(p),o.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${p?"bg-emerald-500":"bg-gray-300"}`,o.querySelector("span").style.transform=`translateX(${p?"20":"0"}px)`,t[u]||(t[u]={}),t[u][r]=p,N(`${p?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{N("บันทึกไม่สำเร็จ","error")}o.disabled=!1})}))}async function Fr(){je("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let e=[],s=[],t=[],n="สามัญ",l="",o="",u="",r="",d="";const p=k=>{if(!k)return null;const I=k.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return I?I[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},a=k=>k?/^(PR|อก\.|อป\.)/i.test(k)?"ศาสนา":/^ปวช\./i.test(k)?"ปวช":"สามัญ":"สามัญ",m={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},v=k=>{const I=k==="ศาสนา";return[...new Set(t.map(R=>I?R.religion_room:R.main_room).filter(Boolean))].filter(R=>a(R)===k).sort((R,z)=>R.localeCompare(z,"th"))},x=k=>{const I=v(k),R=[...new Set(I.map(q=>p(q)).filter(Boolean))],z=m[k]||[];return[...new Set([...z,...R])].sort((q,F)=>q.localeCompare(F,"th"))},_=async()=>{[e,s,t]=await Promise.all([Rn(),Oe(),_t()])},h=(k,I="w-3.5 h-3.5")=>`<span class="inline-block ${I} rounded-full flex-shrink-0" style="background:${k}"></span>`,$=k=>e.find(I=>I.name===k),b=k=>t.filter(I=>I.house_color===k).length,c=()=>t.filter(k=>!k.house_color).length,M=k=>{let I=document.getElementById("hc-print-roster-styles");I||(I=document.createElement("style"),I.id="hc-print-roster-styles",document.head.appendChild(I)),I.textContent=`
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
    `;const R=document.createElement("div");R.id="hc-print-roster-area",document.body.appendChild(R);const z=n==="ศาสนา",q=new Map;k.forEach(O=>{const V=(z?O.religion_room:O.main_room)||"ไม่มีห้องเรียน";q.has(V)||q.set(V,[]),q.get(V).push(O)});const F=Array.from(q.keys()).sort((O,V)=>O.localeCompare(V,"th"));let P="";F.forEach((O,V)=>{const A=q.get(O).sort((J,K)=>(J.student_code||"").localeCompare(K.student_code||""));let U="ใบรายชื่อนักเรียน";u&&(u==="__none__"?U+=" (ไม่มีสี)":U+=` กลุ่มสี${u}`),U+=` ห้อง ${O}`,r&&(U+=` (${r})`);const Y=A.map((J,K)=>{const ae=$(J.house_color),X=ae?`<span class="color-badge" style="color: ${ae.color_hex}">
               สี${J.house_color}
             </span>`:'<span style="color: #9ca3af;">— ไม่มีสี —</span>',xe=J.image_url?`<img src="${J.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>';return`
          <tr>
            <td style="text-align: center; width: 45px;">${K+1}</td>
            <td>
              <div class="stu-info-wrap">
                ${xe}
                <div class="stu-details">
                  <div class="stu-name">${ee(J.full_name)}</div>
                  <div class="stu-meta">รหัส: ${ee(J.student_code||"—")} | สามัญ: ${ee(J.main_room||"—")} | ศาสนา: ${ee(J.religion_room||"—")}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${X}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${ee(J.sports_shirt_size||"")}</td>
            <td style="width: 120px;"></td>
          </tr>
        `}).join("");P+=`
        <div class="roster-page-block">
          <div class="roster-title">${ee(U)}</div>
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
              ${Y}
            </tbody>
          </table>
        </div>
      `}),R.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="hc-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="hc-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        ${P}
      </div>
    `,R.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},R.querySelector("#hc-btn-close-preview").onclick=()=>{R.remove()}},w=()=>s.find(k=>k.position==="house_color_admin"),C=(k,I)=>{const z=(I?e.filter(q=>q.gender===I):e).map(q=>`<option value="${ee(q.name)}" ${q.name===k?"selected":""}>สี${ee(q.name)}</option>`).join("");return`<option value="" ${k?"":"selected"}>— ไม่มีสี —</option>`+z},T=()=>{const k=d.toLowerCase(),I=n==="ศาสนา";return t.filter(R=>{var q,F;const z=I?R.religion_room:R.main_room;return!(!z||o&&z!==o||l&&!o&&p(z)!==l||!l&&!o&&a(z)!==n||u==="__none__"&&R.house_color||u&&u!=="__none__"&&R.house_color!==u||r&&R.gender!==r||k&&!((q=R.full_name)!=null&&q.toLowerCase().includes(k))&&!((F=R.student_code)!=null&&F.toLowerCase().includes(k))&&!z.toLowerCase().includes(k))})},H=k=>k?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",B=()=>{const k=e.filter(P=>P.gender==="ชาย"),I=e.filter(P=>P.gender==="หญิง"),R=c(),z=P=>{const O=u===P.name,V=b(P.name);return`<button class="${H(O)}" data-color="${ee(P.name)}"
               style="${O?`border-color:${P.color_hex};color:${P.color_hex};background:${P.color_hex}18`:`border-color:${P.color_hex}55;color:#374151`}">
        ${h(P.color_hex)} สี${ee(P.name)}
        <span class="ml-1 font-bold" style="color:${P.color_hex}">${V}</span>
      </button>`},q=u==="__none__",F=`<button class="${H(q)}" data-color="__none__"
               style="${q?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${R}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${k.map(z).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${I.map(z).join("")}
          ${F}
        </div>
      </div>`},f=()=>{const k=T();if(!k.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const I=n==="ศาสนา";return k.map(R=>{const z=$(R.house_color),q=z?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${z.color_hex}">
             ${h(z.color_hex,"w-2.5 h-2.5")} ${ee(R.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',F=z?`background:${z.color_hex}12`:"",P=I?R.religion_room:R.main_room,O=R.image_url?`<img src="${R.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`:'<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>';return`<tr class="transition border-b border-gray-100 last:border-0" style="${F}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${ee(R.student_code??"")}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${O}
            <div>${ee(R.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${ee(P??"—")}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${ee(R.gender??"—")}</td>
        <td class="px-4 py-2.5">${q}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${R.id}" data-current="${ee(R.house_color??"")}">
            ${C(R.house_color,R.gender)}
          </select>
        </td>
      </tr>`}).join("")},i=()=>{const k=w(),I=T().length;Ee(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${k?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${ee(k.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${t.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${c()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${B()}
        ${u?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':""}
      </div>

      <!-- Search + filter bar -->
      <div class="flex flex-wrap gap-3 items-center">
        <input id="hc-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..."
          value="${ee(d)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="สามัญ" ${n==="สามัญ"?"selected":""}>สามัญ</option>
          <option value="ศาสนา" ${n==="ศาสนา"?"selected":""}>ศาสนา</option>
          <option value="ปวช" ${n==="ปวช"?"selected":""}>ปวช</option>
        </select>
        <select id="hc-filter-level" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <!-- เติมแบบไดนามิก -->
        </select>
        <select id="hc-filter-class" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">-- เลือกห้องเรียน --</option>
        </select>
        <select id="hc-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${r==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${r==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${I}</b> คน</span>
        <button id="hc-print-roster-btn"
          class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white
                 transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          ${I===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${I})
        </button>
        <button id="hc-clear-colors-btn"
          class="px-4 py-2 rounded-xl text-sm font-medium border border-red-200 text-red-500
                 hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          ${I===0?"disabled":""}>
          🗑️ ล้างสี (${I})
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
          <tbody id="hc-tbody">${f()}</tbody>
        </table>
      </div>
    </div>`),D()},y=()=>{const k=document.getElementById("hc-tbody");k&&(k.innerHTML=f()),L();const I=T().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(q=>{q.textContent.includes("พบ")&&(q.innerHTML=`พบ <b class="text-gray-700">${I}</b> คน`)});const R=document.getElementById("hc-print-roster-btn");R&&(R.disabled=I===0,R.textContent=`🖨️ พิมพ์ใบรายชื่อ (${I})`);const z=document.getElementById("hc-clear-colors-btn");z&&(z.disabled=I===0,z.textContent=`🗑️ ล้างสี (${I})`)},E=()=>{var I;const k=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");k&&(k.innerHTML=B()+(u?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),g(),(I=document.getElementById("hc-clear-filter"))==null||I.addEventListener("click",()=>{u="",E(),y()})},g=()=>{document.querySelectorAll(".hc-chip").forEach(k=>{k.addEventListener("click",()=>{const I=k.dataset.color;u=u===I?"":I,E(),y()})})},L=()=>{document.querySelectorAll(".hc-color-sel").forEach(k=>{k.addEventListener("change",async()=>{const I=k.dataset.sid,R=k.dataset.current,z=k.value||null;k.disabled=!0;try{await ts([I],z);const q=t.find(V=>String(V.id)===String(I));q&&(q.house_color=z),k.dataset.current=z??"";const F=k.closest("tr"),P=F==null?void 0:F.children[4];if(P){const V=$(z);P.innerHTML=V?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${V.color_hex}">
                   ${h(V.color_hex,"w-2.5 h-2.5")} ${ee(z)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const O=$(z);F&&(F.style.background=O?`${O.color_hex}12`:""),k.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>k.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),E()}catch{N("บันทึกไม่สำเร็จ","error"),k.value=R??""}k.disabled=!1})})},S=()=>{const k=document.getElementById("hc-filter-category"),I=document.getElementById("hc-filter-level");if(!k||!I)return;n=k.value;const R=x(n);I.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${R.map(z=>`<option value="${z}" ${z===l?"selected":""}>${z}</option>`).join("")}
    `,j()},j=()=>{const k=document.getElementById("hc-filter-level"),I=document.getElementById("hc-filter-class");if(!k||!I)return;l=k.value;const z=v(n).filter(q=>l?p(q)===l:!0);I.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${z.length} ห้อง) --</option>
      ${z.map(q=>`
        <option value="${q}" ${q===o?"selected":""}>${q}</option>
      `).join("")}
    `},D=()=>{var k,I,R,z,q,F,P,O;g(),L(),(k=document.getElementById("hc-clear-filter"))==null||k.addEventListener("click",()=>{u="",E(),y()}),(I=document.getElementById("hc-search"))==null||I.addEventListener("input",V=>{d=V.target.value,y()}),(R=document.getElementById("hc-filter-gender"))==null||R.addEventListener("change",V=>{r=V.target.value,y()}),(z=document.getElementById("hc-filter-category"))==null||z.addEventListener("change",V=>{n=V.target.value,l="",o="",S(),y()}),(q=document.getElementById("hc-filter-level"))==null||q.addEventListener("change",V=>{l=V.target.value,o="",j(),y()}),(F=document.getElementById("hc-filter-class"))==null||F.addEventListener("change",V=>{o=V.target.value,y()}),(P=document.getElementById("hc-print-roster-btn"))==null||P.addEventListener("click",()=>{const V=T();V.length>0&&M(V)}),(O=document.getElementById("hc-clear-colors-btn"))==null||O.addEventListener("click",async()=>{const V=T();if(!V.length||!confirm(`ยืนยันล้างสีนักเรียน ${V.length} คนที่แสดงในตาราง?`))return;const W=document.getElementById("hc-clear-colors-btn");W.disabled=!0,W.textContent="กำลังล้างสี...";try{await ts(V.map(A=>A.id),null),V.forEach(A=>{A.house_color=null}),N(`ล้างสีสำเร็จ ${V.length} คน`,"success"),E(),y()}catch{N("เกิดข้อผิดพลาด","error"),W.disabled=!1,W.textContent=`🗑️ ล้างสี (${V.length})`}}),S()};await _(),i()}async function Ur(){je("council-rep-nominations"),document.getElementById("page-title").textContent="สรุปรายชื่อตัวแทนสภานักเรียน";const e=["ม.3","ม.4","ม.5"];let s="",t="",n="";const l=await Ne().catch(()=>({})),o=String(l.academicYear??l.academic_year??new Date().getFullYear()+543),u=Number(l.semester??1),[r,d]=await Promise.all([Ht(o,u).catch(()=>[]),bo(o,u).catch(()=>[])]),p=c=>{var M;return((M=(c||"").match(/^ม\.\d+/))==null?void 0:M[0])??null},a=[...new Set(r.filter(c=>c.category==="สามัญ"&&e.includes(p(c.main_room))).map(c=>c.main_room))].sort((c,M)=>c.localeCompare(M,"th")),m={};a.forEach(c=>{m[c]=0}),d.forEach(c=>{m[c.main_room]!=null&&m[c.main_room]++});const v=a.filter(c=>m[c]>=2),x=a.filter(c=>m[c]>0&&m[c]<2),_=a.filter(c=>m[c]===0),h=()=>d.filter(c=>{var M,w,C;if(t&&p(c.main_room)!==t||n&&((M=c.students)==null?void 0:M.gender)!==n)return!1;if(s){const T=s.toLowerCase();if(!`${((w=c.students)==null?void 0:w.full_name)??""} ${((C=c.students)==null?void 0:C.student_code)??""} ${c.main_room??""}`.toLowerCase().includes(T))return!1}return!0}),$=c=>c.length?c.map(M=>{var w,C,T,H;return`
    <tr class="border-t border-gray-100">
      <td class="px-4 py-2.5">${ee(M.main_room)}</td>
      <td class="px-4 py-2.5 font-medium">${ee(((w=M.students)==null?void 0:w.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${ee(((C=M.students)==null?void 0:C.student_code)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${ee(((T=M.students)==null?void 0:T.gender)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${ee(((H=M.teachers)==null?void 0:H.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-400 text-xs">${M.created_at?new Date(M.created_at).toLocaleDateString("th-TH"):"—"}</td>
    </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ไม่พบรายการ</td></tr>',b=()=>{var M,w,C,T;const c=h();Ee(`<div class="space-y-5 animate-fade">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ส่งครบ 2 คน</p><b class="text-2xl text-emerald-700">${v.length}</b><p class="text-[11px] text-emerald-600 mt-0.5">จาก ${a.length} ห้อง</p></div>
        <div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">ส่งไม่ครบ</p><b class="text-2xl text-amber-700">${x.length}</b>${x.length?`<p class="text-[11px] text-amber-600 mt-0.5 truncate" title="${ee(x.join(", "))}">${ee(x.join(", "))}</p>`:""}</div>
        <div class="bg-red-50 rounded-2xl p-4"><p class="text-xs text-red-700">ยังไม่ส่งเลย</p><b class="text-2xl text-red-700">${_.length}</b>${_.length?`<p class="text-[11px] text-red-600 mt-0.5 truncate" title="${ee(_.join(", "))}">${ee(_.join(", "))}</p>`:""}</div>
      </div>

      <div class="flex flex-wrap gap-3 items-center">
        <input id="crn-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..." value="${ee(s)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="crn-filter-grade" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
          ${e.map(H=>`<option value="${H}" ${t===H?"selected":""}>${H}</option>`).join("")}
        </select>
        <select id="crn-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${n==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${n==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${c.length}</b> รายการ</span>
        <button id="crn-print-btn" class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" ${c.length===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${c.length})
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
          <tbody>${$(c)}</tbody>
        </table>
      </div>
    </div>`),(M=document.getElementById("crn-search"))==null||M.addEventListener("input",H=>{s=H.target.value,b()}),(w=document.getElementById("crn-filter-grade"))==null||w.addEventListener("change",H=>{t=H.target.value,b()}),(C=document.getElementById("crn-filter-gender"))==null||C.addEventListener("change",H=>{n=H.target.value,b()}),(T=document.getElementById("crn-print-btn"))==null||T.addEventListener("click",()=>{const H=h(),B=`<!doctype html><html><head><meta charset="utf-8"><title>รายชื่อตัวแทนสภานักเรียน</title>
        <style>
          body{font-family:'Sarabun','TH Sarabun New',sans-serif;padding:24px;color:#111}
          h1{font-size:18px;margin:0 0 4px}
          p.sub{font-size:12px;color:#666;margin:0 0 16px}
          table{width:100%;border-collapse:collapse;font-size:13px}
          th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
          th{background:#f3f4f6}
        </style></head><body>
        <h1>รายชื่อตัวแทนสภานักเรียน${t?" ระดับชั้น "+t:""}</h1>
        <p class="sub">ปีการศึกษา ${ee(o)} · พิมพ์เมื่อ ${new Date().toLocaleDateString("th-TH")} · ทั้งหมด ${H.length} รายการ</p>
        <table><thead><tr><th>ห้อง</th><th>ชื่อ-สกุล</th><th>รหัส</th><th>เพศ</th><th>ครูผู้เสนอ</th></tr></thead>
        <tbody>${H.map(f=>{var i,y,E,g;return`<tr><td>${ee(f.main_room)}</td><td>${ee(((i=f.students)==null?void 0:i.full_name)??"—")}</td><td>${ee(((y=f.students)==null?void 0:y.student_code)??"—")}</td><td>${ee(((E=f.students)==null?void 0:E.gender)??"—")}</td><td>${ee(((g=f.teachers)==null?void 0:g.full_name)??"—")}</td></tr>`}).join("")}</tbody>
        </table></body></html>`;Hs(B)})};b()}async function Gr(){var E,g,L,S,j,D;je("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const[e,s]=await Promise.all([Ne().catch(()=>({})),ea().catch(()=>[])]),t=Ns(s,e),n=Ca(e),l=Ye(n);let o=l;try{const k=localStorage.getItem("pp5_admin_donations_term");t.some(I=>Ye(I)===k)&&(o=k)}catch{}const u=k=>Number(k==null?void 0:k.academic_year)*2+Number(k==null?void 0:k.semester),r=k=>k?new Date(k).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",d=k=>Number(k??0).toLocaleString("th-TH"),p=k=>!k.slip_url&&String(k.admin_note??"").startsWith("[เงินสด]"),a=k=>{const I=String((k==null?void 0:k.donationStickerTiers)??"").trim();return(I?I.split(`
`).filter(Boolean).map(q=>{const[F,P,O,,V]=q.split("|").map(W=>W.trim());return{amount:parseInt(F)||0,sticker:P||"🏅",title:O||"",color:V||""}}).filter(q=>q.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([q,F,P,O])=>({amount:q,sticker:F,title:P,color:O}))).sort((q,F)=>q.amount-F.amount).map((q,F)=>{const P=((k==null?void 0:k[`donationStickerImg${F+1}`])??"").trim();return P&&/^https?:\/\//.test(P)?{...q,sticker:P}:q})},m=(k,I)=>{let R=null;for(const z of I)k>=z.amount&&(R=z);return R},v=(k,I="w-8 h-8")=>k?/^https?:\/\//.test(k.sticker)?`<img src="${k.sticker}" class="${I} object-contain" title="${k.title}" />`:`<span class="text-xl" title="${k.title}">${k.sticker}</span>`:"";Ee(`
  <div class="max-w-4xl mx-auto animate-fade space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามการสนับสนุนแยกตามภาคเรียน พร้อมสถานะครูเดิม/รายใหม่/ยังไม่มีรายการ</p>
      </div>
      <label class="flex items-center gap-2 text-sm font-semibold text-indigo-700">
        <span>เลือกภาคเรียน</span>
        <select id="don-term-switcher" class="max-w-[240px] border border-indigo-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${Ds(t,o,l)}
        </select>
      </label>
      <button id="don-add" ${o!==l?'disabled title="เพิ่มเงินสดได้เฉพาะภาคเรียนปัจจุบัน"':""} class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition">
        + เพิ่มเงินสด
      </button>
    </div>

    <p id="don-term-note" class="text-xs text-gray-500 -mt-3"></p>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      ${["ยอดรวมอนุมัติ","รออนุมัติ","ผู้สนับสนุนแล้ว","เฉลี่ยต่อคน","เดิมที่ต่ออายุ","รายใหม่","ยังไม่สนับสนุน"].map((k,I)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${k}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${I}">—</p>
      </div>`).join("")}
    </div>

    <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
      <div class="px-4 py-3 bg-amber-50 border-b border-amber-100">
        <h2 class="text-sm font-bold text-amber-900">👥 สถานะการสนับสนุนของครูในภาคเรียนที่เลือก</h2>
        <p class="text-xs text-amber-800 mt-1">ครูที่ไม่มีรายการในเทอมนี้จะแสดงว่าเคยสนับสนุนมาก่อนหรือยังไม่เคยสนับสนุน</p>
      </div>
      <div id="don-teacher-coverage" class="max-h-[420px] overflow-auto">
        <p class="text-center py-8 text-sm text-gray-400">กำลังโหลดรายชื่อครู...</p>
      </div>
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
  </div>`);let x=[],_=[],h=[],$={},b=[],c=[],M=e;const w=k=>{const I=c.find(P=>Number(P.id)===Number(k.supporter_renewal_entitlement_id));if(I)return`${Number(I.target_academic_year)}:${Number(I.target_semester)}`;const R=String(k.created_at??"").slice(0,10);if(!R)return"";const z=t.find(P=>P.start_date&&P.end_date&&R>=P.start_date&&R<=P.end_date);if(z)return Ye(z);const q=t.filter(P=>P.start_date&&R<P.start_date).sort((P,O)=>P.start_date.localeCompare(O.start_date))[0],F=q?(Date.parse(`${q.start_date}T00:00:00Z`)-Date.parse(`${R}T00:00:00Z`))/864e5:1/0;return F>=0&&F<=45?Ye(q):""},C=k=>{const I=t.find(q=>Ye(q)===o),R=u(I),z=(I==null?void 0:I.start_date)||(o===l?M.semester_start:null);return x.some(q=>{var V;if(Number((V=q.teachers)==null?void 0:V.id)!==Number(k)||q.status!=="approved")return!1;const F=c.find(W=>Number(W.id)===Number(q.supporter_renewal_entitlement_id));if(F)return u({academic_year:F.source_academic_year,semester:F.source_semester})<R;const P=w(q),O=t.find(W=>Ye(W)===P);return O?u(O)<R:!!(z&&String(q.reviewed_at??q.created_at??"").slice(0,10)<z)})},T=async()=>{var Y,J;const{supabase:k}=await Ce(async()=>{const{supabase:K}=await import("./supabase-BV-W2lsh.js").then(ae=>ae.a);return{supabase:K}},[]),{getSystemConfig:I,getPaymentSlipViewUrl:R}=await Ce(async()=>{const{getSystemConfig:K,getPaymentSlipViewUrl:ae}=await import("./api-C-roKrdU.js");return{getSystemConfig:K,getPaymentSlipViewUrl:ae}},__vite__mapDeps([0,1,2,3,4])),[z,{data:q},F,{data:P}]=await Promise.all([I().catch(()=>({})),k.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, supporter_renewal_entitlement_id, donation_tier, discount_percent, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1}),Oe().catch(()=>[]),k.from("supporter_renewal_entitlements").select("id, teacher_id, source_academic_year, source_semester, target_academic_year, target_semester")]);M=z??e,h=a(M),b=F??[],c=P??[],x=(q??[]).map(K=>({...K,_termKey:w(K)})),_=x.filter(K=>K._termKey===o);const O=t.find(K=>Ye(K)===o),V=document.getElementById("don-teacher-coverage"),W=document.getElementById("don-term-note");W&&(W.textContent=O!=null&&O.start_date&&(O!=null&&O.end_date)?`ช่วงข้อมูล ${r(O.start_date)} – ${r(O.end_date)} · รายการต่ออายุที่เชื่อมสิทธิ์จะยึดภาคเป้าหมาย แม้ส่งคำขอก่อนวันเปิดภาค`:"หมายเหตุ: ภาคเรียนนี้ไม่มีช่วงวันที่ในทะเบียน ระบบจึงแยกคำขอที่ระบุภาคเรียนผ่านสิทธิ์ต่ออายุได้เท่านั้น");const A=new Map;for(const K of _){const ae=Number((Y=K.teachers)==null?void 0:Y.id);ae&&(A.has(ae)||A.set(ae,[]),A.get(ae).push(K))}const U=b.map(K=>{const ae=A.get(Number(K.id))??[],X=ae.filter(le=>le.status==="approved"),xe=ae.some(le=>le.status==="pending"),ie=C(K.id),G=X.length?ie?"เดิม · ต่ออายุแล้ว":"รายใหม่ · สนับสนุนแล้ว":xe?ie?"เดิม · รอตรวจสอบ":"รายใหม่ · รอตรวจสอบ":ae.length?ie?"เดิม · คำขอถูกปฏิเสธ":"รายใหม่ · คำขอถูกปฏิเสธ":ie?"เดิม · ยังไม่สนับสนุนเทอมนี้":"ยังไม่เคยสนับสนุน";return{teacher:K,requests:ae,approved:X,pending:xe,prior:ie,kind:G,total:X.reduce((le,de)=>le+(Number(de.amount)||0),0)}}).sort((K,ae)=>{const X=xe=>xe.approved.length?0:xe.pending?1:xe.prior?2:3;return X(K)-X(ae)||String(K.teacher.full_name??"").localeCompare(String(ae.teacher.full_name??""),"th")});V&&(V.innerHTML=U.length?`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead class="sticky top-0 bg-gray-50"><tr>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">ครู</th>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">สถานะภาคนี้</th>
          <th class="text-right px-4 py-2 text-xs font-semibold text-gray-500">ยอดอนุมัติ</th>
        </tr></thead><tbody class="divide-y divide-gray-50">${U.map(K=>`
          <tr class="hover:bg-gray-50"><td class="px-4 py-2.5"><span class="font-medium text-gray-800">${ze(K.teacher.full_name??"—")}</span>
            <span class="ml-1 text-xs text-gray-400">${ze(K.teacher.teacher_code??"")}</span></td>
            <td class="px-4 py-2.5"><span class="px-2 py-1 rounded-full text-[11px] font-semibold ${K.approved.length?"bg-emerald-50 text-emerald-700":K.pending?"bg-amber-50 text-amber-700":"bg-gray-100 text-gray-500"}">${K.kind}</span></td>
            <td class="px-4 py-2.5 text-right font-semibold ${K.total?"text-emerald-700":"text-gray-400"}">${K.total?`${d(K.total)} ฿`:"—"}</td></tr>`).join("")}</tbody></table></div>`:'<p class="text-center py-8 text-sm text-gray-400">ไม่พบรายชื่อครู</p>');for(const K of _)K.slip_url&&!p(K)&&(K._resolvedSlip=await R(K.slip_url).catch(()=>K.slip_url));$={};for(const K of _){if(K.status!=="approved")continue;const ae=(J=K.teachers)==null?void 0:J.id;ae&&($[ae]=($[ae]??0)+(Number(K.amount)||0))}H(),B()},H=()=>{const k=_.filter(W=>W.status==="approved"),I=k.reduce((W,A)=>W+(Number(A.amount)||0),0),R=_.filter(W=>W.status==="pending").length,z=new Set(k.map(W=>{var A;return(A=W.teachers)==null?void 0:A.id})).size,q=z?Math.round(I/z):0,F=new Set(k.filter(W=>{var A;return C((A=W.teachers)==null?void 0:A.id)}).map(W=>{var A;return(A=W.teachers)==null?void 0:A.id})).size,P=Math.max(0,z-F),O=Math.max(0,b.length-z),V=[d(I)+" ฿",R,z+" คน",d(q)+" ฿",F+" คน",P+" คน",O+" คน"];document.querySelectorAll(".don-stat-val").forEach((W,A)=>{W.textContent=V[A]})},B=()=>{var O,V,W,A;const k=document.getElementById("don-table");if(!k)return;const I=(((O=document.getElementById("don-search"))==null?void 0:O.value)??"").toLowerCase(),R=((V=document.getElementById("don-filter-status"))==null?void 0:V.value)??"all",z=((W=document.getElementById("don-filter-method"))==null?void 0:W.value)??"all",q=((A=document.getElementById("don-filter-sort"))==null?void 0:A.value)??"date_desc";let F=_.filter(U=>{const Y=U.teachers;return!(I&&!String((Y==null?void 0:Y.full_name)??"").toLowerCase().includes(I)&&!String((Y==null?void 0:Y.teacher_code)??"").includes(I)||R!=="all"&&U.status!==R||z==="cash"&&!p(U)||z==="transfer"&&p(U))});if(q==="date_asc"?F.sort((U,Y)=>new Date(U.created_at)-new Date(Y.created_at)):q==="amount_desc"&&F.sort((U,Y)=>(Y.amount??0)-(U.amount??0)),!F.length){k.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const P=U=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[U]??`<span class="text-gray-400 text-xs">${U}</span>`;k.innerHTML=`
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
        ${F.map((U,Y)=>{const J=U.teachers,K=p(U),ae=String(U.admin_note??"").replace(/^\[เงินสด\]\s*/,""),X=$[J==null?void 0:J.id]??0,xe=m(X,h),ie=C(J==null?void 0:J.id)?"เดิม":"รายใหม่",G=J!=null&&J.image_url?`<img src="${J.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((J==null?void 0:J.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${U.id}" data-tid="${(J==null?void 0:J.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${Y+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${G}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(J==null?void 0:J.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(J==null?void 0:J.teacher_code)??""} · ${ie}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${v(xe)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${d(U.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${K?'<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>':`<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${U._resolvedSlip??""}" data-id="${U.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${P(U.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${r(U.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${ae}">${ae||"—"}</td>
            <td class="px-3 py-3">
              <div class="flex gap-1 justify-end" onclick="event.stopPropagation()">
                ${U.status==="pending"?`
                  <button class="don-approve text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium" data-id="${U.id}">✅</button>
                  <button class="don-reject  text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium" data-id="${U.id}">❌</button>
                `:""}
                <button class="don-edit text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 font-medium" data-id="${U.id}">✏️</button>
              </div>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,k.querySelectorAll(".don-row").forEach(U=>{U.addEventListener("click",()=>f(U.dataset.tid))}),k.querySelectorAll(".don-slip").forEach(U=>{U.addEventListener("click",async Y=>{Y.stopPropagation();let J=U.dataset.url;if(!J){const ae=x.find(X=>X.id===Number(U.dataset.id));if(ae!=null&&ae.slip_url){const{getPaymentSlipViewUrl:X}=await Ce(async()=>{const{getPaymentSlipViewUrl:xe}=await import("./api-C-roKrdU.js");return{getPaymentSlipViewUrl:xe}},__vite__mapDeps([0,1,2,3,4]));J=await X(ae.slip_url).catch(()=>ae.slip_url)}}if(!J){N("ไม่พบสลิป","warning");return}const K=document.createElement("div");K.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",K.innerHTML=`<img src="${J}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,K.addEventListener("click",()=>K.remove()),document.body.appendChild(K)})}),k.querySelectorAll(".don-approve").forEach(U=>{U.addEventListener("click",async Y=>{Y.stopPropagation();const{reviewPaymentRequest:J}=await Ce(async()=>{const{reviewPaymentRequest:K}=await import("./api-C-roKrdU.js");return{reviewPaymentRequest:K}},__vite__mapDeps([0,1,2,3,4]));await J(Number(U.dataset.id),"approved").catch(()=>{}),N("อนุมัติแล้ว ✅","success"),await T()})}),k.querySelectorAll(".don-reject").forEach(U=>{U.addEventListener("click",async Y=>{Y.stopPropagation();const J=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:K}=await Ce(async()=>{const{reviewPaymentRequest:ae}=await import("./api-C-roKrdU.js");return{reviewPaymentRequest:ae}},__vite__mapDeps([0,1,2,3,4]));await K(Number(U.dataset.id),"rejected",J||null).catch(()=>{}),N("ปฏิเสธแล้ว","info"),await T()})}),k.querySelectorAll(".don-edit").forEach(U=>{U.addEventListener("click",Y=>{Y.stopPropagation(),y(Number(U.dataset.id))})})},f=k=>{if(!k)return;const I=Number(k),R=_.filter(J=>{var K;return((K=J.teachers)==null?void 0:K.id)===I});if(!R.length)return;const z=R[0].teachers,q=R.filter(J=>J.status==="approved"),F=q.reduce((J,K)=>J+(Number(K.amount)||0),0),P=m(F,h),O=(P==null?void 0:P.color)??"#10b981",V=parseInt(O.slice(1,3),16),W=parseInt(O.slice(3,5),16),A=parseInt(O.slice(5,7),16),U=z!=null&&z.image_url?`<img src="${z.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${((z==null?void 0:z.full_name)??"?").charAt(0)}</div>`,Y=document.createElement("div");Y.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",Y.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${V},${W},${A},0.9),rgba(${V},${W},${A},1))">
          ${U}
          ${P?`<div class="text-3xl mb-1">${/^https?:\/\//.test(P.sticker)?`<img src="${P.sticker}" class="w-12 h-12 object-contain mx-auto"/>`:P.sticker}</div>`:""}
          <p class="text-white font-bold text-base leading-tight">${(z==null?void 0:z.full_name)??"—"}</p>
          <p class="text-white/70 text-xs mt-0.5">${(z==null?void 0:z.teacher_code)??""}</p>
          ${P?`<span class="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">${P.title}</span>`:""}
        </div>
        <!-- stats -->
        <div class="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ยอดรวม</p>
            <p class="font-bold text-emerald-600">${d(F)} ฿</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ครั้งทั้งหมด</p>
            <p class="font-bold text-gray-700">${R.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${q.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${R.map(J=>{const K=p(J),ae=String(J.admin_note??"").replace(/^\[เงินสด\]\s*/,""),X={pending:"⏳",approved:"✅",rejected:"❌"}[J.status]??"";return`<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${r(J.created_at)}</span>
                <span class="text-[11px] ${K?"text-gray-500":"text-blue-500"}">${K?"💵":"🧾"}</span>
                ${ae?`<span class="text-xs text-gray-400 truncate max-w-[80px]">${ae}</span>`:""}
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-emerald-700">${d(J.amount)} ฿</span>
                <span>${X}</span>
              </div>
            </div>`}).join("")}
        </div>
        <div class="px-5 pb-5">
          <button class="don-sum-close w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(Y),Y.querySelector(".don-sum-close").addEventListener("click",()=>Y.remove()),Y.addEventListener("click",J=>{J.target===Y&&Y.remove()})},i=async()=>{const{getTeachers:k}=await Ce(async()=>{const{getTeachers:q}=await import("./api-C-roKrdU.js");return{getTeachers:q}},__vite__mapDeps([0,1,2,3,4])),I=await k().catch(()=>[]),R=document.createElement("div");R.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",R.innerHTML=`
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
      </div>`,document.body.appendChild(R);const z=Ra({wrap:R.querySelector("#don-teacher-wrap"),teachers:[...I].sort((q,F)=>(q.full_name??"").localeCompare(F.full_name??"","th"))});R.querySelector("#don-add-cancel").addEventListener("click",()=>R.remove()),R.querySelector("#don-add-confirm").addEventListener("click",async()=>{const q=z.getValue(),F=Number(R.querySelector("#don-add-amount").value),P=R.querySelector("#don-add-note").value.trim();if(!q){N("กรุณาเลือกครู","warning");return}if(!F){N("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:O}=await Ce(async()=>{const{createPaymentRequest:V}=await import("./api-C-roKrdU.js");return{createPaymentRequest:V}},__vite__mapDeps([0,1,2,3,4]));await O({teacher_id:parseInt(q),package_type:"donation",amount:F,status:"approved",admin_note:`[เงินสด] ${P}`.trim(),reviewed_at:new Date().toISOString()}).catch(V=>{N("บันทึกไม่สำเร็จ: "+we(V),"error")}),N("บันทึกโดเนทเงินสดแล้ว ✅","success"),R.remove(),await T()})},y=k=>{const I=x.find(q=>q.id===k);if(!I)return;const R=String(I.admin_note??"").replace(/^\[เงินสด\]\s*/,""),z=document.createElement("div");z.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",z.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${I.amount??""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-edit-note" type="text" value="${R}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-edit-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button id="don-edit-save"   class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(z),z.querySelector("#don-edit-cancel").addEventListener("click",()=>z.remove()),z.querySelector("#don-edit-save").addEventListener("click",async()=>{const q=Number(z.querySelector("#don-edit-amount").value),F=z.querySelector("#don-edit-note").value.trim(),P=p(I)?"[เงินสด] ":"",{supabase:O}=await Ce(async()=>{const{supabase:W}=await import("./supabase-BV-W2lsh.js").then(A=>A.a);return{supabase:W}},[]),{error:V}=await O.from("payment_requests").update({amount:q,admin_note:(P+F).trim()||null}).eq("id",k);if(V){N("แก้ไขไม่สำเร็จ","error");return}N("บันทึกแล้ว ✅","success"),z.remove(),await T()})};(E=document.getElementById("don-search"))==null||E.addEventListener("input",B),(g=document.getElementById("don-filter-status"))==null||g.addEventListener("change",B),(L=document.getElementById("don-filter-method"))==null||L.addEventListener("change",B),(S=document.getElementById("don-filter-sort"))==null||S.addEventListener("change",B),(j=document.getElementById("don-add"))==null||j.addEventListener("click",i),(D=document.getElementById("don-term-switcher"))==null||D.addEventListener("change",async k=>{o=k.target.value;try{localStorage.setItem("pp5_admin_donations_term",o)}catch{}const I=document.getElementById("don-add");I&&(I.disabled=o!==l,I.title=I.disabled?"เพิ่มเงินสดได้เฉพาะภาคเรียนปัจจุบัน":"");const R=document.getElementById("don-table");R&&(R.innerHTML='<div class="py-10 text-gray-400"><span class="animate-spin text-2xl">⏳</span><p class="mt-2 text-sm">กำลังโหลดข้อมูลภาคเรียน...</p></div>'),await T()}),await T()}async function Vr(){var m,v,x,_;je("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const e=h=>String(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=h=>h?new Date(h).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",t={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},n=["suggestion","problem","password_reset"],l=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],o=Object.fromEntries(l.map(h=>[h.value,h]));Ee(`
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
  </div>`);let u=[];const r=async()=>{u=await Bs().catch(()=>[]),p(),a()},d=async(h,$)=>{if(!h)return;if(!h.is_read)try{await rs(h.id,!0),h.is_read=!0}catch{}const b=String($??"").slice(0,120);await Ao(h.profile_id,{title:"💬 แอดมินตอบกลับ Feedback ของคุณแล้ว",body:b||"เข้าไปดูคำตอบได้ที่เมนู Feedback ถึงแอดมิน",url:h.sender_role==="teacher"?"teacher.html":"student.html"}).catch(()=>{})},p=()=>{var $;const h=document.getElementById("fb-cat-stats");h&&(h.innerHTML=Object.keys(t).map(b=>{const c=u.filter(T=>T.category===b),M=c.length,w=c.filter(T=>!T.is_read).length;let C='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(n.includes(b)){const T=c.filter(H=>H.status==="resolved").length;C=`<p class="text-[10px] font-semibold mt-0.5 ${T===M&&M>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${T}/${M}</p>`}else w&&(C=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${w}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${b}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${t[b]}</p>
          <p class="text-xl font-bold text-gray-800">${M}</p>
          ${C}
        </div>`}).join(""),h.querySelectorAll(".fb-cat-card").forEach(b=>b.addEventListener("click",()=>{var M;const c=document.getElementById("fb-filter-cat");c&&(c.value=b.dataset.cat,a()),(M=document.getElementById("fb-list"))==null||M.scrollIntoView({behavior:"smooth",block:"start"})}))),($=window._refreshFeedbackBadge)==null||$.call(window)},a=()=>{var C,T,H,B;const h=document.getElementById("fb-list");if(!h)return;const $=(((C=document.getElementById("fb-search"))==null?void 0:C.value)??"").toLowerCase(),b=((T=document.getElementById("fb-filter-role"))==null?void 0:T.value)??"all",c=((H=document.getElementById("fb-filter-cat"))==null?void 0:H.value)??"all",M=((B=document.getElementById("fb-filter-read"))==null?void 0:B.value)??"all";let w=u.filter(f=>{var y,E,g;const i=[f.sender_name,f.message,(y=f.student)==null?void 0:y.student_code,(E=f.student)==null?void 0:E.main_room,(g=f.student)==null?void 0:g.religion_room,...(f.messages??[]).map(L=>L.message)].join(" ").toLowerCase();return!($&&!i.includes($)||b!=="all"&&f.sender_role!==b||c!=="all"&&f.category!==c||M==="unread"&&f.is_read||M==="read"&&!f.is_read)});if(!w.length){h.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}h.innerHTML=w.map(f=>{var i,y,E,g,L,S;return`
      <div class="bg-white rounded-2xl border ${f.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${f.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${e(f.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${e(f.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${f.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${f.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${s(f.created_at)}</p>
              ${f.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${e(((i=f.student)==null?void 0:i.student_code)||"—")} · ห้องสามัญ ${e(((y=f.student)==null?void 0:y.main_room)||"—")} · ห้องศาสนา ${e(((E=f.student)==null?void 0:E.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${f.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${f.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(t).map(([j,D])=>`<option value="${j}" ${f.category===j?"selected":""}>${D}</option>`).join("")}
          </select>
          ${n.includes(f.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((g=o[f.status])==null?void 0:g.cls)??"bg-gray-100 text-gray-600"}">${((L=o[f.status])==null?void 0:L.label)??f.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(f.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(f.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(f.created_at)}</p></div></div>
          ${(f.messages??[]).map(j=>j.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(j.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${s(j.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(f.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(j.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(j.created_at)}</p></div></div>`).join("")}
          ${f.admin_reply&&!(f.messages??[]).some(j=>j.author_role==="admin"&&j.message===f.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(f.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${f.replied_at?s(f.replied_at):""}</p></div></div>`:""}
        </div>
        ${f.category==="password_reset"&&f.sender_role==="student"&&((S=f.student)!=null&&S.id)?f.status==="resolved"?'<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>':`<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${f.id}" data-sid="${f.student.id}" data-code="${e(f.student.student_code||"")}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${e(f.student.student_code||"")})
              </button>`:""}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${f.id}" data-read="${f.is_read}">
            ${f.is_read?"↩️ ทำเป็นยังไม่อ่าน":"✓ ทำเครื่องหมายว่าอ่านแล้ว"}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${f.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${f.id}">
              ${l.map(j=>`<option value="${j.value}" ${f.status===j.value?"selected":""}>${j.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${f.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${f.replied_at?`ตอบล่าสุด ${s(f.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${f.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),h.querySelectorAll(".fb-toggle-read").forEach(f=>f.addEventListener("click",async()=>{const i=parseInt(f.dataset.id),y=f.dataset.read==="true";try{await rs(i,!y)}catch{N("บันทึกไม่สำเร็จ","error");return}const E=u.find(g=>g.id===i);E&&(E.is_read=!y),p(),a()})),h.querySelectorAll(".fb-category-sel").forEach(f=>f.addEventListener("change",async()=>{const i=parseInt(f.dataset.id),y=f.value,E=u.find(L=>L.id===i),g=E==null?void 0:E.category;f.disabled=!0;try{await wo(i,y)}catch{N("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),f.disabled=!1,f.value=g;return}E&&(E.category=y),N("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),a()})),h.querySelectorAll(".fb-delete").forEach(f=>f.addEventListener("click",async()=>{const i=parseInt(f.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await _o(i)}catch{N("ลบไม่สำเร็จ","error");return}u=u.filter(y=>y.id!==i),N("ลบแล้ว","success"),p(),a()}})),h.querySelectorAll(".fb-pw-reset-btn").forEach(f=>f.addEventListener("click",async()=>{const i=parseInt(f.dataset.id),y=parseInt(f.dataset.sid),E=f.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${E} เป็นรหัสนักเรียน (${E}) จริงหรือไม่?`))return;const g=f.textContent;f.disabled=!0,f.textContent="⏳ กำลังรีเซ็ท...";try{await $o(y,E),await ko(y).catch(()=>{}),await ns(i,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${E}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(S){N("รีเซ็ทไม่สำเร็จ: "+we(S),"error"),f.disabled=!1,f.textContent=g;return}const L=u.find(S=>S.id===i);if(L){L.status="resolved";const S=new Date().toISOString(),j=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${E}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;L.admin_reply=j,L.replied_at=S,L.messages=[...L.messages??[],{id:`local-${Date.now()}`,feedback_id:i,author_role:"admin",message:j,created_at:S}],await d(L,j)}N("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),p(),a()})),h.querySelectorAll(".fb-save-status").forEach(f=>f.addEventListener("click",async()=>{var S,j;const i=parseInt(f.dataset.id),y=f.closest(".fb-card"),E=(S=y.querySelector(".fb-status-sel"))==null?void 0:S.value,g=(j=y.querySelector(".fb-reply-input"))==null?void 0:j.value.trim();f.disabled=!0,f.textContent="⏳ กำลังบันทึก...";try{await ns(i,{status:E,adminReply:g})}catch{N("บันทึกไม่สำเร็จ","error"),f.disabled=!1,f.textContent="💾 บันทึก";return}const L=u.find(D=>D.id===i);if(L&&(L.status=E,g)){const D=new Date().toISOString();L.admin_reply=g,L.replied_at=D,L.messages=[...L.messages??[],{id:`local-${Date.now()}`,feedback_id:i,author_role:"admin",message:g,created_at:D}],await d(L,g)}N(g?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),p(),a()}))};(m=document.getElementById("fb-search"))==null||m.addEventListener("input",a),(v=document.getElementById("fb-filter-role"))==null||v.addEventListener("change",a),(x=document.getElementById("fb-filter-cat"))==null||x.addEventListener("change",a),(_=document.getElementById("fb-filter-read"))==null||_.addEventListener("change",a),await r()}const Wr={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},at={opening:{label:"เปิด–ปิดภาคเรียน",icon:"🚪",chip:"bg-emerald-50 text-emerald-700 border-emerald-100"},exam:{label:"การสอบ",icon:"📝",chip:"bg-violet-50 text-violet-700 border-violet-100"},student_activity:{label:"กิจกรรมนักเรียน",icon:"🎒",chip:"bg-cyan-50 text-cyan-700 border-cyan-100"},staff:{label:"ครูและบุคลากร",icon:"👥",chip:"bg-amber-50 text-amber-700 border-amber-100"},holiday:{label:"วันหยุด/วันสำคัญ",icon:"🔴",chip:"bg-rose-50 text-rose-700 border-rose-100"},deadline:{label:"กำหนดส่งเอกสาร",icon:"📤",chip:"bg-orange-50 text-orange-700 border-orange-100"},meeting:{label:"ประชุม",icon:"🤝",chip:"bg-blue-50 text-blue-700 border-blue-100"},other:{label:"อื่นๆ",icon:"📌",chip:"bg-gray-50 text-gray-600 border-gray-100"}},Ss=[{header:"bg-emerald-700",soft:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800"},{header:"bg-violet-700",soft:"bg-violet-50",border:"border-violet-200",text:"text-violet-800"},{header:"bg-cyan-700",soft:"bg-cyan-50",border:"border-cyan-200",text:"text-cyan-800"},{header:"bg-blue-700",soft:"bg-blue-50",border:"border-blue-200",text:"text-blue-800"},{header:"bg-amber-600",soft:"bg-amber-50",border:"border-amber-200",text:"text-amber-800"},{header:"bg-rose-700",soft:"bg-rose-50",border:"border-rose-200",text:"text-rose-800"},{header:"bg-orange-700",soft:"bg-orange-50",border:"border-orange-200",text:"text-orange-800"}],vi=["อา","จ","อ","พ","พฤ","ศ","ส"];function Fe(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Jt(e){return String(e??"").slice(0,10)}function ut(e,s=!1){const t=Jt(e);return t?new Date(`${t}T00:00:00`).toLocaleDateString("th-TH",s?{day:"numeric",month:"short",year:"numeric"}:{day:"numeric",month:"long",year:"numeric"}):"—"}function Da(e){return Jt(e).slice(0,7)}function Yr(e){return new Date(`${e}-01T00:00:00`).toLocaleDateString("th-TH",{month:"long",year:"numeric"})}function wi(e){return e.is_holiday?"holiday":at[e.category]?e.category:e.event_type==="deadline"?"deadline":e.event_type==="meeting"?"meeting":/สอบ|คัดเลือก|วัดความรู้|TGAT|TPAT|A-level|I-Net|O-NET/i.test(e.label??"")?"exam":/เปิดเรียน|ปิดภาค|ลงทะเบียน/i.test(e.label??"")?"opening":"other"}function _i(e){return{...e,event_date:Jt(e.event_date),end_date:e.end_date?Jt(e.end_date):null,category:wi(e),work_calendar_items:(e.work_calendar_items??[]).slice().sort((s,t)=>(s.sort_order??0)-(t.sort_order??0))}}function $i(e,s){return e.filter(t=>{const n=t.end_date||t.event_date;return t.event_date<=s&&n>=s})}function Kr(e,s){const t=`${s}-01`,n=new Date(`${t}T00:00:00`),l=`${s}-${String(new Date(n.getFullYear(),n.getMonth()+1,0).getDate()).padStart(2,"0")}`,o=e.end_date||e.event_date;return e.event_date<=l&&o>=t}function ki(e){const s=e.flatMap(o=>[o.event_date,o.end_date||o.event_date]).filter(Boolean).sort();if(!s.length)return[Da(Rs(new Date))];const t=new Date(`${s[0].slice(0,7)}-01T00:00:00`),n=new Date(`${s.at(-1).slice(0,7)}-01T00:00:00`),l=[];for(const o=new Date(t);o<=n;o.setMonth(o.getMonth()+1))l.push(`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`);return l}function Si(e,s){return`ฉันจะแนบ PDF หรือภาพปฏิทินการปฏิบัติงานของโรงเรียนให้คุณอ่าน
กรุณาอ่านข้อมูลจากทุกหน้า และส่งผลลัพธ์เป็น JSON โดยครอบ JSON ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีคำอธิบายก่อนหรือหลังกล่อง

บริบทเอกสาร: ปีการศึกษา ${e} ภาคเรียนที่ ${s}

กติกาสำคัญ:
- อ่านกิจกรรมทุกแถว รวมกิจกรรมที่เป็นช่วงวันที่ และหมายเหตุวันหยุด/วันสำคัญ
- ต้องเห็นวัน เดือน ปี ให้ครบ หากเป็น พ.ศ. ให้แปลงเป็นวันที่ ISO ค.ศ. เช่น 17 ต.ค. 2569 = 2026-10-17
- ห้ามเดาวันหรือชื่อกิจกรรม หากอ่านไม่ได้ให้ใส่ note และคงข้อมูลที่อ่านได้
- รักษาข้อความกิจกรรมและชื่อฝ่ายรับผิดชอบตามเอกสาร
- source_page คือเลขหน้าของ PDF ที่พบข้อมูล
- category เลือกได้เท่านั้น: opening, exam, student_activity, staff, holiday, deadline, meeting, other
- วันหยุดให้ is_holiday เป็น true และใส่ holiday_note

รูปแบบ JSON ที่ต้องส่งกลับ:
{
  "academic_year": ${e},
  "semester": ${s},
  "source_title": "ปฏิทินการปฏิบัติงานโรงเรียนมูลนิธิอาซิซสถาน",
  "source_revision": "วันที่ปรับปรุงตามเอกสาร",
  "source_document_name": "ชื่อไฟล์เอกสาร",
  "events": [
    {
      "event_date": "2026-10-17",
      "end_date": null,
      "label": "ชื่อกิจกรรมตามเอกสาร",
      "description": "รายละเอียดเพิ่มเติม",
      "category": "opening",
      "responsible_unit": "ฝ่าย/กลุ่มสาระผู้รับผิดชอบ",
      "week_number": 1,
      "is_holiday": false,
      "holiday_note": "",
      "event_type": "other",
      "round_number": null,
      "source_page": 1,
      "note": "ข้อสังเกตจากการอ่านเอกสาร"
    }
  ]
}

ห้ามสร้างรายการซ้ำ ห้ามตัดรายการที่อยู่หลังช่วงเปิดเรียน และห้ามตัดกิจกรรมต่อเนื่องหลังสิ้นสุดภาคเรียน เช่น งานในเดือนเมษายน ให้ใส่เข้ามาตามเอกสารทั้งหมด`}function Es(e){return String(e??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim()}function Ls(e){const t=String(e??"").trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";let n=Number(t[1]);n>2400&&(n-=543);const l=Number(t[2]),o=Number(t[3]),u=new Date(Date.UTC(n,l-1,o));return u.getUTCFullYear()!==n||u.getUTCMonth()!==l-1||u.getUTCDate()!==o?"":`${n}-${String(l).padStart(2,"0")}-${String(o).padStart(2,"0")}`}function Ei(e){const s=Ls(e.event_date??e.start_date??e.date),t=e.end_date?Ls(e.end_date):null,n=String(e.label??e.title??e.activity??"").trim(),l=at[e.category]?e.category:"other";return{event_date:s,end_date:t||null,label:n,description:String(e.description??e.details??"").trim(),category:l,responsible_unit:String(e.responsible_unit??e.responsible??e.owner??"").trim(),week_number:Number.isInteger(Number(e.week_number))?Number(e.week_number):null,is_holiday:e.is_holiday===!0||e.is_holiday==="true",holiday_note:String(e.holiday_note??e.holiday??"").trim(),event_type:Wr[e.event_type]?e.event_type:"other",round_number:Number.isInteger(Number(e.round_number))?Number(e.round_number):null,source_page:Number.isInteger(Number(e.source_page))?Number(e.source_page):null,note:String(e.note??"").trim()}}function Li(e,s=!1){const t=at[e.category]||at.other;return`<div class="${s?"text-[10px]":"text-xs"} rounded-lg border px-2 py-1 ${t.chip} truncate" title="${Fe(e.label)}">${t.icon} ${Fe(e.label)}</div>`}function Ci(e,s,t,{manager:n=!1}={}){const l=Ss[t%Ss.length],o=new Date(`${e}-01T00:00:00`),u=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),r=o.getDay(),d=[];for(let a=0;a<r;a++)d.push('<div class="min-h-[74px] bg-gray-50/50"></div>');for(let a=1;a<=u;a++){const m=`${e}-${String(a).padStart(2,"0")}`,v=$i(s,m);d.push(`<div class="min-h-[74px] p-1.5 border-t border-r border-gray-100 bg-white ${v.some(x=>x.is_holiday)?"bg-rose-50/60":""}">
      <div class="flex items-center justify-between gap-1 mb-1"><span class="text-[11px] font-bold ${v.some(x=>x.is_holiday)?"text-rose-600":"text-gray-500"}">${a}</span>${v.length?`<span class="text-[9px] text-gray-400">${v.length}</span>`:""}</div>
      <div class="space-y-1">${v.slice(0,3).map(x=>Li(x,!0)).join("")}${v.length>3?`<div class="text-[10px] text-gray-400 px-1">+ อีก ${v.length-3}</div>`:""}</div>
    </div>`)}const p=s.filter(a=>Kr(a,e));return`<section class="rounded-3xl border ${l.border} bg-white shadow-sm overflow-hidden work-calendar-month" data-wcal-month="${e}">
    <div class="${l.header} text-white px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2">
      <div><h2 class="font-extrabold text-base">${Fe(Yr(e))}</h2><p class="text-[11px] text-white/80">ปฏิทินกิจกรรมและกำหนดการ</p></div>
      <span class="text-xs bg-white/15 rounded-full px-3 py-1">${p.length} รายการ</span>
    </div>
    <div class="grid grid-cols-7 border-l border-gray-100">${vi.map(a=>`<div class="text-center text-[10px] sm:text-xs font-bold ${l.text} ${l.soft} py-2 border-t border-r border-gray-100">${a}</div>`).join("")}${d.join("")}</div>
    <div class="border-t ${l.border} ${l.soft} p-3 sm:p-4">
      <div class="overflow-x-auto"><table class="w-full text-xs min-w-[680px]"><thead><tr class="text-gray-500 text-left"><th class="py-2 px-2 w-[18%]">วัน/เดือน/ปี</th><th class="py-2 px-2">กิจกรรม/งาน</th><th class="py-2 px-2 w-[22%]">ผู้รับผิดชอบ</th><th class="py-2 px-2 w-[12%]">สัปดาห์</th><th class="py-2 px-2 w-[16%]">หมายเหตุ</th>${n?'<th class="py-2 px-2 w-[86px]">จัดการ</th>':""}</tr></thead><tbody class="divide-y divide-white/80">${p.length?p.map(a=>{const m=a.end_date&&a.end_date!==a.event_date?`${ut(a.event_date,!0)} – ${ut(a.end_date,!0)}`:ut(a.event_date,!0),v=a.is_holiday?'<span class="ml-1 text-rose-600 font-bold">วันหยุด</span>':"";return`<tr class="align-top"><td class="py-2 px-2 font-semibold ${a.is_holiday?"text-rose-600":"text-gray-700"}">${m}${v}</td><td class="py-2 px-2"><div class="font-bold text-gray-800">${Fe(a.label)}</div>${a.description?`<div class="text-gray-500 mt-0.5">${Fe(a.description)}</div>`:""}</td><td class="py-2 px-2 text-gray-600">${Fe(a.responsible_unit||"—")}</td><td class="py-2 px-2 text-gray-600">${a.week_number?`สัปดาห์ที่ ${a.week_number}`:"—"}</td><td class="py-2 px-2 text-gray-500">${Fe(a.holiday_note||a.note||"—")}</td>${n?`<td class="py-2 px-2 whitespace-nowrap"><div class="flex flex-wrap gap-1.5"><button type="button" class="wcal-edit-btn inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-2 py-1 text-[11px] font-bold text-indigo-700 hover:bg-indigo-100" data-ev-id="${a.id}" title="แก้ไขกิจกรรม">✏️ แก้ไข</button><button type="button" class="wcal-del-btn inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-ev-id="${a.id}" title="ลบกิจกรรม">🗑️ ลบ</button></div></td>`:""}</tr>`}).join(""):`<tr><td colspan="${n?6:5}" class="py-6 text-center text-gray-400">ยังไม่มีรายการในเดือนนี้</td></tr>`}</tbody></table></div>
    </div>
  </section>`}function Ii({academicYear:e,semester:s,events:t,teacher:n,importEvents:l}){var b;(b=document.getElementById("wcal-ai-modal"))==null||b.remove();const o=document.createElement("div");o.id="wcal-ai-modal",o.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",o.innerHTML=`<div class="bg-white w-full sm:max-w-6xl max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl">
    <div class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-5 sm:px-7 py-4 flex items-start justify-between gap-4"><div><h3 class="font-bold text-gray-800">🤖 เพิ่มปฏิทินจาก JSON ที่ AI สร้าง</h3><p class="text-xs text-gray-500 mt-1">อัปโหลด PDF/ภาพให้ AI ภายนอก แล้วนำ JSON กลับมาตรวจสอบที่นี่ก่อนบันทึก</p></div><button id="wcal-ai-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button></div>
    <div class="p-5 sm:p-7 space-y-5">
      <div class="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-xs text-violet-900 leading-relaxed"><b>ความปลอดภัย:</b> ระบบจะไม่ส่งข้อมูลเข้า database จาก JSON ทันที ต้องตรวจสอบรายการและกดยืนยันก่อนทุกครั้ง รายการวันที่และชื่อซ้ำจะถูกข้ามโดยไม่เขียนทับข้อมูลเดิม</div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><section class="rounded-2xl border border-gray-200 p-4"><div class="flex items-center justify-between gap-2 mb-2"><div><h4 class="font-semibold text-sm text-gray-800">1) Prompt สำหรับ AI</h4><p class="text-[11px] text-gray-400 mt-0.5">กดสร้าง Prompt ก่อนคัดลอก แล้วแนบเอกสารต้นฉบับให้ AI</p></div><div class="flex gap-2"><button id="wcal-ai-generate" type="button" class="text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-lg">⚡ สร้าง Prompt</button><button id="wcal-ai-copy" type="button" hidden disabled aria-disabled="true" class="text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg disabled:opacity-40">📋 คัดลอก</button></div></div><textarea id="wcal-ai-prompt" readonly rows="18" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y bg-gray-50"></textarea></section>
      <section class="rounded-2xl border border-gray-200 p-4"><h4 class="font-semibold text-sm text-gray-800">2) วาง JSON ที่ AI สร้าง</h4><p class="text-[11px] text-gray-400 mt-0.5 mb-2">รองรับ JSON ที่ครอบด้วย \`\`\`json ... \`\`\`</p><textarea id="wcal-ai-json" rows="18" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y font-mono" placeholder="วาง JSON ที่ได้จาก AI ที่นี่"></textarea><button id="wcal-ai-parse" class="w-full mt-3 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold">🔍 ตรวจสอบ JSON และแสดงตัวอย่าง</button><p id="wcal-ai-error" class="hidden text-xs text-red-600 mt-2 whitespace-pre-wrap"></p></section></div>
      <section id="wcal-ai-preview-wrap" class="hidden rounded-2xl border border-gray-200 overflow-hidden"><div class="bg-gray-50 px-4 py-3 border-b border-gray-200"><h4 class="font-semibold text-sm text-gray-800">3) ตรวจสอบก่อนนำเข้า</h4><p id="wcal-ai-summary" class="text-xs text-gray-500 mt-0.5"></p><p class="text-[11px] text-amber-700 mt-1">หากรายการใดขึ้น “ข้อมูลไม่ครบ” ให้กด 🗑️ ลบรายการนี้ก่อนยืนยันนำเข้า</p></div><div id="wcal-ai-preview" class="p-4 space-y-2 max-h-[40vh] overflow-y-auto"></div></section>
    </div><div class="sticky bottom-0 bg-white/95 backdrop-blur border-t border-gray-100 px-5 sm:px-7 py-4 flex flex-col-reverse sm:flex-row justify-end gap-2"><button id="wcal-ai-cancel" class="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button><button id="wcal-ai-apply" disabled class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold disabled:opacity-40">✅ ยืนยันนำเข้าปฏิทิน</button></div></div>`,document.body.appendChild(o);const u=o.querySelector("#wcal-ai-prompt"),r=o.querySelector("#wcal-ai-copy"),d=Fs({copyButton:r}),p=()=>o.remove();o.querySelector("#wcal-ai-close").onclick=p,o.querySelector("#wcal-ai-cancel").onclick=p,o.addEventListener("click",c=>{c.target===o&&p()}),o.querySelector("#wcal-ai-generate").onclick=()=>{u.value=Si(e,s),d.markGenerated(),r.textContent="📋 คัดลอก",N("สร้าง Prompt ปฏิทินแล้ว","success")},r.onclick=async c=>{if(!d.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(u.value),c.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(c.currentTarget)&&(c.currentTarget.textContent="📋 คัดลอก")},1500)}catch{u.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}};const a=o.querySelector("#wcal-ai-error"),m=o.querySelector("#wcal-ai-preview-wrap"),v=o.querySelector("#wcal-ai-preview"),x=o.querySelector("#wcal-ai-summary"),_=o.querySelector("#wcal-ai-apply");let h=[];const $=()=>{const c=h.filter(w=>!w.event_date||!w.label||w.end_date&&w.end_date<w.event_date),M=h.filter(w=>w.duplicate);x.textContent=`ทั้งหมด ${h.length} รายการ · ซ้ำ ${M.length} รายการ · ${c.length?`ข้อมูลไม่ครบ ${c.length} รายการ`:"พร้อมตรวจสอบและนำเข้า"}`,_.disabled=!h.length||c.length>0,v.innerHTML=h.map((w,C)=>`<div class="rounded-2xl border ${w.duplicate?"border-amber-200 bg-amber-50/50":"border-gray-200 bg-white"} p-3"><div class="flex flex-wrap items-start justify-between gap-2"><div><p class="font-bold text-sm text-gray-800">${C+1}. ${Fe(w.label||"ไม่พบชื่อกิจกรรม")}</p><p class="text-xs text-gray-500 mt-1">${w.event_date?ut(w.event_date,!0):"ไม่พบวันที่"}${w.end_date?` – ${ut(w.end_date,!0)}`:""} · ${Fe((at[w.category]||at.other).label)}</p><p class="text-xs text-gray-500 mt-1">ผู้รับผิดชอบ: ${Fe(w.responsible_unit||"—")} · สัปดาห์: ${w.week_number||"—"} · หน้า ${w.source_page||"—"}</p>${w.note?`<p class="text-[11px] text-amber-700 mt-1">หมายเหตุ AI: ${Fe(w.note)}</p>`:""}</div><div class="flex flex-wrap items-center gap-2"><span class="text-[11px] font-semibold px-2.5 py-1 rounded-lg ${w.duplicate?"bg-amber-100 text-amber-700":!w.event_date||!w.label?"bg-red-100 text-red-700":"bg-emerald-100 text-emerald-700"}">${w.duplicate?"รายการซ้ำ จะข้าม":!w.event_date||!w.label?"ข้อมูลไม่ครบ":"ผ่านการตรวจรูปแบบ"}</span><button type="button" class="wcal-preview-delete inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-wcal-preview-delete="${C}" title="นำรายการนี้ออกจากชุดนำเข้า">🗑️ ลบรายการนี้</button></div></div></div>`).join("")};v.addEventListener("click",c=>{const M=c.target.closest("[data-wcal-preview-delete]");if(!M)return;const w=Number(M.dataset.wcalPreviewDelete);!Number.isInteger(w)||!h[w]||(h.splice(w,1),$())}),o.querySelector("#wcal-ai-parse").onclick=()=>{a.classList.add("hidden");try{const c=JSON.parse(Es(o.querySelector("#wcal-ai-json").value)),M=Array.isArray(c)?c:c.events??c.calendar_events??c.items??c.data;if(!Array.isArray(M)||!M.length)throw new Error("ไม่พบรายการ events ใน JSON");const w=Number(c.academic_year??e),C=Number(c.semester??s);if(w!==Number(e)||C!==Number(s))throw new Error(`JSON ระบุภาคเรียน ${C}/${w} แต่หน้าปัจจุบันคือ ${s}/${e}`);const T=c.source_title||c.title||"ปฏิทินปฏิบัติงาน";h=M.map(H=>({...Ei(H),source_title:T,source_revision:c.source_revision||"",source_document_name:c.source_document_name||""})),h.forEach(H=>{H.duplicate=t.some(B=>B.event_date===H.event_date&&String(B.label).trim().toLowerCase()===H.label.toLowerCase())}),m.classList.remove("hidden"),$(),o.dataset.sourceTitle=T,o.dataset.sourceRevision=c.source_revision||"",o.dataset.sourceDocumentName=c.source_document_name||""}catch(c){a.textContent=`อ่าน JSON ไม่สำเร็จ: ${c.message}`,a.classList.remove("hidden"),m.classList.add("hidden"),h=[],_.disabled=!0}},_.onclick=async()=>{var c;if(!_.disabled&&confirm(`ยืนยันนำเข้ากิจกรรม ${h.length} รายการในภาคเรียน ${s}/${e}?
รายการที่ซ้ำจะถูกข้าม และข้อมูลเดิมจะไม่ถูกเขียนทับ`)){_.disabled=!0,_.textContent="กำลังบันทึก...";try{const M=await l({academicYear:e,semester:s,sourceTitle:o.dataset.sourceTitle||"ปฏิทินปฏิบัติงาน",sourceRevision:o.dataset.sourceRevision||"",sourceDocumentName:o.dataset.sourceDocumentName||"",rawPayload:JSON.parse(Es(o.querySelector("#wcal-ai-json").value)),events:h,createdByTeacherId:n==null?void 0:n.id});N(`นำเข้าสำเร็จ ${(M==null?void 0:M.inserted_count)??h.length} รายการ${M!=null&&M.skipped_count?` · ข้ามรายการซ้ำ ${M.skipped_count} รายการ`:""} ✅`,"success"),p(),await((c=window._reloadWorkCalendar)==null?void 0:c.call(window))}catch(M){N(`นำเข้าไม่สำเร็จ: ${M.message}`,"error"),_.disabled=!1,_.textContent="✅ ยืนยันนำเข้าปฏิทิน"}}}}async function Jr({manager:e=!1,teacher:s=null}={}){var T,H,B,f;const{getWorkCalendarEvents:t,getAcademicTerms:n,getSystemConfig:l,createWorkCalendarEvent:o,updateWorkCalendarEvent:u,deleteWorkCalendarEvent:r,replaceWorkCalendarItems:d,importWorkCalendarEvents:p}=await Ce(async()=>{const{getWorkCalendarEvents:i,getAcademicTerms:y,getSystemConfig:E,createWorkCalendarEvent:g,updateWorkCalendarEvent:L,deleteWorkCalendarEvent:S,replaceWorkCalendarItems:j,importWorkCalendarEvents:D}=await import("./api-C-roKrdU.js");return{getWorkCalendarEvents:i,getAcademicTerms:y,getSystemConfig:E,createWorkCalendarEvent:g,updateWorkCalendarEvent:L,deleteWorkCalendarEvent:S,replaceWorkCalendarItems:j,importWorkCalendarEvents:D}},__vite__mapDeps([0,1,2,3,4]));je(e?"work-calendar":"work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const a=await l().catch(()=>({})),m=Number(a.academicYear??a.academic_year??new Date().getFullYear()+543),v=Number(a.semester??1),_=[...await n().catch(()=>[]),{academic_year:m,semester:1},{academic_year:m,semester:2},{academic_year:m,semester:v,is_current:!0}].filter((i,y,E)=>E.findIndex(g=>Number(g.academic_year)===Number(i.academic_year)&&Number(g.semester)===Number(i.semester))===y).sort((i,y)=>Number(y.academic_year)-Number(i.academic_year)||Number(y.semester)-Number(i.semester));let h=m,$=v;const b=_.map(i=>`<option value="${Number(i.academic_year)}-${Number(i.semester)}" ${Number(i.academic_year)===h&&Number(i.semester)===$?"selected":""}>ภาคเรียนที่ ${Number(i.semester)}/${Number(i.academic_year)}${i.is_current?" (ปัจจุบัน)":""}</option>`).join("");Ee(`<div class="animate-fade max-w-7xl mx-auto pb-8"><div class="flex flex-wrap items-start justify-between gap-3 mb-5"><div><p class="text-xs text-gray-400 mb-1">ปฏิทินทางการของโรงเรียน · แสดงตามเดือนและตารางกิจกรรม</p><div class="flex flex-wrap items-center gap-2"><select id="wcal-term" class="border border-indigo-200 bg-indigo-50 text-indigo-700 rounded-xl px-3 py-2 text-sm font-bold outline-none">${b}</select><span id="wcal-period" class="text-xs text-gray-500"></span></div></div>${e?'<div class="flex flex-wrap gap-2"><button id="wcal-ai-import" class="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold shadow-sm">🤖 นำเข้าจาก AI JSON</button><button id="wcal-create-btn" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm">＋ เพิ่มกิจกรรม</button></div>':""}</div>
    <div class="rounded-3xl border border-sky-100 bg-sky-50 p-4 sm:p-5 mb-5"><div class="flex flex-wrap items-start gap-3"><div class="text-2xl">📅</div><div class="flex-1 min-w-[240px]"><h2 class="font-extrabold text-sky-900">ปฏิทินการปฏิบัติงานโรงเรียน</h2><p class="text-xs text-sky-700 mt-1">รูปแบบนี้ยึดโครงสร้างปฏิทินฝ่ายวิชาการ: ปฏิทินรายเดือน กิจกรรม ผู้รับผิดชอบ สัปดาห์ และวันหยุดสำคัญ</p></div><span id="wcal-source-badge" class="text-[11px] font-semibold text-sky-700 bg-white/70 border border-sky-100 rounded-full px-3 py-1.5">ยังไม่ได้ระบุเอกสารต้นทาง</span></div></div>
    <div id="wcal-summary" class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5"></div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 mb-5"><div class="grid grid-cols-1 md:grid-cols-[1fr_180px_180px] gap-2"><input id="wcal-search" class="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200" placeholder="🔎 ค้นหากิจกรรม ผู้รับผิดชอบ หรือหมายเหตุ"><select id="wcal-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกประเภท</option>${Object.entries(at).map(([i,y])=>`<option value="${i}">${y.icon} ${y.label}</option>`).join("")}</select><select id="wcal-month" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกเดือน</option></select></div></div>
    <div id="wcal-body"><div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div></div>
  </div>${e?`<div id="wcal-modal" class="hidden fixed inset-0 z-[80] flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="wcal-modal-backdrop"></div><div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"><div class="p-5 sm:p-6"><h3 id="wcal-modal-title" class="text-lg font-bold text-gray-800 mb-4">เพิ่มกิจกรรม</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><label class="text-xs font-semibold text-gray-500">ประเภทกิจกรรม<select id="wcal-event-type" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(Wr).map(([i,y])=>`<option value="${i}">${y}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">หมวดหมู่<select id="wcal-event-category" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(at).map(([i,y])=>`<option value="${i}">${y.icon} ${y.label}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">วันที่เริ่มต้น *<input id="wcal-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500">วันที่สิ้นสุด<input id="wcal-end-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">ชื่อกิจกรรม *<input id="wcal-label" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น เปิดเรียนภาคเรียนที่ 2/2569"></label><label class="text-xs font-semibold text-gray-500">ผู้รับผิดชอบ<input id="wcal-responsible" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="ฝ่ายวิชาการ"></label><label class="text-xs font-semibold text-gray-500">สัปดาห์ที่<input id="wcal-week" type="number" min="1" max="99" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น 1"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">รายละเอียด<textarea id="wcal-desc" rows="2" maxlength="800" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">หมายเหตุ/วันหยุด<textarea id="wcal-note" rows="2" maxlength="500" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="sm:col-span-2 flex items-center gap-2 text-sm text-rose-700"><input id="wcal-holiday" type="checkbox" class="w-4 h-4"> ทำเครื่องหมายเป็นวันหยุด/วันสำคัญ</label></div><div class="mt-4"><p class="text-xs font-semibold text-gray-500 mb-2">Checklist เดิม (ถ้ามี)</p><div id="wcal-items-list" class="space-y-2"></div><button id="wcal-add-item" class="mt-2 text-indigo-600 text-sm font-semibold">＋ เพิ่มรายการ</button></div><div class="flex gap-3 mt-6"><button id="wcal-modal-cancel" class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600">ยกเลิก</button><button id="wcal-modal-save" class="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold">บันทึก</button></div></div></div></div>`:""}`);let c=[],M=null;const w=async()=>{const i=document.getElementById("wcal-body");i.innerHTML='<div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div>';try{c=(await t(h,$)).map(_i),C()}catch(y){i.innerHTML=`<div class="text-center py-12 text-red-500 text-sm">โหลดไม่สำเร็จ: ${Fe(y.message)}</div>`}},C=()=>{var O,V,W;const i=String(((O=document.getElementById("wcal-search"))==null?void 0:O.value)??"").trim().toLowerCase(),y=((V=document.getElementById("wcal-category"))==null?void 0:V.value)??"",E=((W=document.getElementById("wcal-month"))==null?void 0:W.value)??"",g=c.filter(A=>{const U=[A.label,A.description,A.responsible_unit,A.note,A.holiday_note].join(" ").toLowerCase();return(!i||U.includes(i))&&(!y||A.category===y)&&(!E||Da(A.event_date)===E||Da(A.end_date||A.event_date)===E)}),L=ki(g.length?g:c),S=document.getElementById("wcal-month"),j=S==null?void 0:S.value;S&&(S.innerHTML=`<option value="">ทุกเดือน</option>${L.map(A=>`<option value="${A}">${Fe(Yr(A))}</option>`).join("")}`,L.includes(j)?S.value=j:E&&(S.value=E));const D=document.getElementById("wcal-summary"),k=Rs(new Date),I=c.filter(A=>(A.end_date||A.event_date)>=k).length,R=c.filter(A=>A.category==="exam").length,z=c.filter(A=>A.is_holiday||A.category==="holiday").length;D.innerHTML=[["📋",c.length,"กิจกรรมทั้งหมด","bg-indigo-50 text-indigo-700"],["⏳",I,"กิจกรรมที่ยังไม่สิ้นสุด","bg-emerald-50 text-emerald-700"],["📝",R,"รายการสอบ","bg-violet-50 text-violet-700"],["🔴",z,"วันหยุด/วันสำคัญ","bg-rose-50 text-rose-700"]].map(([A,U,Y,J])=>`<div class="rounded-2xl border border-gray-100 bg-white shadow-sm px-4 py-3 flex items-center gap-3"><span class="w-10 h-10 rounded-xl ${J} flex items-center justify-center text-lg">${A}</span><div><p class="text-xl font-extrabold text-gray-800">${U}</p><p class="text-[11px] text-gray-500">${Y}</p></div></div>`).join("");const q=c.find(A=>A.source_document_name||A.source_revision),F=document.getElementById("wcal-source-badge");F&&(F.textContent=q?`📄 ${q.source_document_name||"เอกสารฝ่ายวิชาการ"}${q.source_revision?` · ฉบับ ${q.source_revision}`:""}`:"📝 เพิ่มด้วยมือ/ข้อมูลเดิม");const P=document.getElementById("wcal-period");P&&(P.textContent=c.length?`${ut(c[0].event_date,!0)} – ${ut(c.at(-1).end_date||c.at(-1).event_date,!0)}`:"ยังไม่มีช่วงวันที่"),document.getElementById("wcal-body").innerHTML=g.length?`<div class="space-y-5">${L.map((A,U)=>Ci(A,g.filter(Y=>Kr(Y,A)),U,{manager:e})).join("")}</div>`:'<div class="rounded-3xl border border-dashed border-gray-200 bg-white text-center py-16 text-gray-400 text-sm">ไม่พบกิจกรรมตามตัวกรอง</div>'};if(window._reloadWorkCalendar=w,(T=document.getElementById("wcal-term"))==null||T.addEventListener("change",async i=>{const[y,E]=i.target.value.split("-").map(Number);h=y,$=E,await w()}),(H=document.getElementById("wcal-search"))==null||H.addEventListener("input",C),(B=document.getElementById("wcal-category"))==null||B.addEventListener("change",C),(f=document.getElementById("wcal-month"))==null||f.addEventListener("change",C),e){const i=g=>{const L=document.getElementById("wcal-items-list"),S=document.createElement("div");S.className="flex gap-2 items-center",S.innerHTML=`<input maxlength="150" value="${Fe(g)}" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm"><button class="wcal-remove-item text-gray-400 hover:text-rose-500">✕</button>`,S.querySelector("button").onclick=()=>S.remove(),L.appendChild(S)},y=()=>{document.getElementById("wcal-modal").classList.add("hidden"),M=null},E=g=>{M=(g==null?void 0:g.id)??null,document.getElementById("wcal-modal-title").textContent=g?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.getElementById("wcal-event-type").value=(g==null?void 0:g.event_type)??"other",document.getElementById("wcal-event-category").value=(g==null?void 0:g.category)??"other",document.getElementById("wcal-date").value=(g==null?void 0:g.event_date)??"",document.getElementById("wcal-end-date").value=(g==null?void 0:g.end_date)??"",document.getElementById("wcal-label").value=(g==null?void 0:g.label)??"",document.getElementById("wcal-responsible").value=(g==null?void 0:g.responsible_unit)??"",document.getElementById("wcal-week").value=(g==null?void 0:g.week_number)??"",document.getElementById("wcal-desc").value=(g==null?void 0:g.description)??"",document.getElementById("wcal-note").value=(g==null?void 0:g.holiday_note)??(g==null?void 0:g.note)??"",document.getElementById("wcal-holiday").checked=!!(g!=null&&g.is_holiday),document.getElementById("wcal-items-list").innerHTML="",((g==null?void 0:g.work_calendar_items)??[]).forEach(L=>i(L.item_label)),document.getElementById("wcal-modal").classList.remove("hidden")};document.getElementById("wcal-create-btn").onclick=()=>E(),document.getElementById("wcal-modal-cancel").onclick=y,document.getElementById("wcal-modal-backdrop").onclick=y,document.getElementById("wcal-add-item").onclick=()=>i(""),document.getElementById("wcal-body").addEventListener("click",async g=>{const L=g.target.closest(".wcal-edit-btn"),S=g.target.closest(".wcal-del-btn");if(L){const j=c.find(D=>Number(D.id)===Number(L.dataset.evId));j&&E(j)}if(S){const j=c.find(D=>Number(D.id)===Number(S.dataset.evId));if(!j||!confirm(`ลบ “${j.label}” ใช่ไหม?`))return;try{await r(j.id),N("ลบกิจกรรมแล้ว","success"),await w()}catch(D){N(`ลบไม่สำเร็จ: ${D.message}`,"error")}}}),document.getElementById("wcal-modal-save").onclick=async()=>{const g=document.getElementById("wcal-event-type").value,L=document.getElementById("wcal-event-category").value,S=document.getElementById("wcal-date").value,j=document.getElementById("wcal-end-date").value||null,D=document.getElementById("wcal-label").value.trim();if(!S||!D)return N("กรุณากรอกวันที่และชื่อกิจกรรม","warning");if(j&&j<S)return N("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");const k={eventType:g,eventDate:S,endDate:j,label:D,description:document.getElementById("wcal-desc").value.trim(),category:L,responsibleUnit:document.getElementById("wcal-responsible").value.trim(),weekNumber:Number(document.getElementById("wcal-week").value)||null,isHoliday:document.getElementById("wcal-holiday").checked,holidayNote:document.getElementById("wcal-note").value.trim()},I=document.getElementById("wcal-modal-save");I.disabled=!0,I.textContent="กำลังบันทึก...";try{let R;M?(R=await u(M,k),await d(M,[...document.querySelectorAll("#wcal-items-list input")].map(z=>z.value.trim()).filter(Boolean))):(R=await o({...k,academicYear:h,semester:$,createdByTeacherId:s==null?void 0:s.id}),await d(R.id,[...document.querySelectorAll("#wcal-items-list input")].map(z=>z.value.trim()).filter(Boolean))),y(),N("บันทึกกิจกรรมแล้ว","success"),await w()}catch(R){N(`บันทึกไม่สำเร็จ: ${R.message}`,"error")}finally{I.disabled=!1,I.textContent="บันทึก"}},document.getElementById("wcal-ai-import").onclick=()=>Ii({academicYear:h,semester:$,events:c,teacher:s,importEvents:g=>p(g)})}await w()}async function Ti(){return Jr({manager:!1})}async function Qr(e){return Jr({manager:!0,teacher:e})}function Bi(e){return e.filter(s=>s.category==="ศาสนา"||["AGM","AGMVOC"].includes(s.subject_group)).concat(e.filter(s=>!s.category&&!["AGM","AGMVOC","ACDMVOC"].includes(s.subject_group))).filter((s,t,n)=>n.findIndex(l=>l.id===s.id)===t)}async function Zr(){je("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",Ee(`<div class="max-w-4xl mx-auto animate-fade">
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
  </div>`);let e=[],s=[];try{[e,s]=await Promise.all([it(),Oe()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}Qt(e),document.getElementById("btn-add-rg").onclick=()=>Xr(null,s,async()=>{const t=await it();Qt(t)})}function Qt(e){const s=document.getElementById("rg-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${e.map(t=>{var l;const n=t.teachers;return`<tr class="hover:bg-gray-50 transition" data-gid="${t.id}">
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${ee(t.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${n?`<div class="flex items-center gap-2">
                    ${n.image_url?`<img src="${n.image_url}" class="w-7 h-7 rounded-full object-cover" />`:`<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${ee(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
                    <div>
                      <span class="font-medium">${ee(n.full_name)}</span>
                      ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
                    </div>
                  </div>`:'<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${t.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${t.id}" data-name="${ee(t.name)}">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,s.querySelectorAll(".rg-edit").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,o=(await it()).find(r=>r.id===n),u=await Oe();Xr(o,u,async()=>{Qt(await it())})}}),s.querySelectorAll(".rg-del").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,l=t.dataset.name;if(confirm(`ลบกลุ่ม "${l}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const u=(await it()).find(r=>r.id===n);u!=null&&u.leader_id&&await La(u.leader_id,null,"religion_subgroup_head"),await On(n),N("ลบกลุ่มแล้ว","success"),Qt(await it())}catch(o){N("ลบไม่สำเร็จ: "+o.message,"error")}}})}}function Xr(e,s,t){const n=!!e,l=document.createElement("div");l.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const o=[...s].sort((r,d)=>(r.full_name??"").localeCompare(d.full_name??"","th"));l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${n?"แก้ไขกลุ่ม":"เพิ่มกลุ่มใหม่"}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${ee((e==null?void 0:e.name)??"")}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
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
    </div>`,document.body.appendChild(l);const u=Ra({wrap:l.querySelector("#rg-leader-wrap"),teachers:o,value:(e==null?void 0:e.leader_id)??null});l.querySelector("#rg-modal-close").onclick=()=>l.remove(),l.querySelector("#rg-cancel").onclick=()=>l.remove(),l.querySelector("#rg-save").onclick=async()=>{const r=l.querySelector("#rg-name").value.trim();if(!r){N("กรุณาระบุชื่อกลุ่ม","error");return}const d=u.getValue(),p=(e==null?void 0:e.leader_id)??null,a=l.querySelector("#rg-save");a.disabled=!0,a.textContent="กำลังบันทึก...";try{n?(await Pn(e.id,{name:r,leader_id:d}),p&&p!==+d&&await La(p,null,"religion_subgroup_head")):await zn({name:r,leader_id:d}),d&&await La(+d,"religion_subgroup_head"),N(n?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),l.remove(),t()}catch(m){N("บันทึกไม่สำเร็จ: "+m.message,"error"),a.disabled=!1,a.textContent="บันทึก"}}}async function ji(e){je("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",Ee(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let s=[],t=[];try{[s,t]=await Promise.all([it(),Oe()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}const n=s.find(u=>u.leader_id===e.id),l=document.getElementById("mrg-content");if(!n){l.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const o=Bi(t);await en(n,o)}async function en(e,s){const t=document.getElementById("mrg-content");let n=[];try{n=await Fn(e.id)}catch{N("โหลดสมาชิกไม่สำเร็จ","error");return}t.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${ee(e.name)}</h3>
        <p class="text-xs text-gray-400 mt-0.5">สมาชิกในกลุ่ม ${n.length} คน</p>
      </div>
      <button id="btn-mrg-add" class="btn-primary px-4 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มสมาชิก
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${n.length?`
        <ul class="divide-y divide-gray-50">
          ${n.map(l=>{var u;const o=l.teachers;return`
            <li class="px-5 py-3 flex items-center gap-3">
              ${o!=null&&o.image_url?`<img src="${o.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${ee(((u=o==null?void 0:o.full_name)==null?void 0:u.charAt(0))??"?")}</div>`}
              <div>
                <span class="font-medium text-gray-800">${ee((o==null?void 0:o.full_name)??"")}</span>
                ${o!=null&&o.teacher_code?`<span class="block text-xs font-mono text-gray-400">${o.teacher_code}</span>`:""}
              </div>
            </li>`}).join("")}
        </ul>`:`
        <div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">👥</p>
          <p class="font-medium">ยังไม่มีสมาชิกในกลุ่ม</p>
          <p class="text-xs mt-1">กดปุ่ม "เพิ่มสมาชิก" เพื่อเริ่มต้น</p>
        </div>`}
    </div>`,document.getElementById("btn-mrg-add").onclick=()=>qi(e,s,n,async()=>{await en(e,s)})}function qi(e,s,t,n){const l=document.createElement("div");l.className="fixed inset-0 z-[9000] bg-white flex flex-col",l.innerHTML=`
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${ee(e.name)}"</h3>
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
    </div>`,document.body.appendChild(l);const o=Ha({wrap:l.querySelector("#mrg-member-wrap"),chipsWrap:l.querySelector("#mrg-chips"),teachers:s,value:t.map(u=>u.teacher_id)});l.querySelector("#mrg-modal-close").onclick=()=>l.remove(),l.querySelector("#mrg-cancel").onclick=()=>l.remove(),l.querySelector("#mrg-save").onclick=async()=>{const u=o.getValue(),r=l.querySelector("#mrg-save");r.disabled=!0,r.textContent="กำลังบันทึก...";try{await Yn(e.id,u),l.remove(),await n(),Ai(e,s.filter(d=>u.includes(d.id)))}catch(d){N("บันทึกไม่สำเร็จ: "+d.message,"error"),r.disabled=!1,r.textContent="บันทึก"}}}function Ai(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${ee(e.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${s.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${s.length?`<ul class="divide-y divide-gray-50">
          ${s.map(n=>{var l;return`<li class="py-2.5 flex items-center gap-3">
            ${n.image_url?`<img src="${n.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${ee(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
            <div>
              <span class="font-medium text-gray-800">${ee(n.full_name??"")}</span>
              ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
            </div>
          </li>`}).join("")}
        </ul>`:'<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>'}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#mrg-summary-close").onclick=()=>t.remove()}async function tn(){je("subject-group-requests"),document.getElementById("page-title").textContent="คำขอย้ายกลุ่มวิชา";const e=o=>o?new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—",s=o=>o==="sasana"?"🕌 ศาสนา":"📖 สามัญ",t={pending:{label:"🕐 รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธแล้ว",cls:"bg-red-100 text-red-600"}};Ee(`
  <div class="max-w-3xl mx-auto animate-fade space-y-4">
    <p class="text-xs text-gray-400">คำขอจากนักเรียนที่เห็นว่าวิชาบางวิชาถูกจัดกลุ่มสามัญ/ศาสนาผิดหลักสูตร — อนุมัติแล้วจะมีผลเฉพาะห้องที่คุณเลือกเท่านั้น</p>
    <div class="flex items-center gap-2">
      <button id="sgr-tab-pending" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-tab="pending">รอตรวจสอบ</button>
      <button id="sgr-tab-all" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-500" data-tab="all">ทั้งหมด</button>
    </div>
    <div id="sgr-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>
    </div>
  </div>`);let n="pending";const l=async()=>{document.getElementById("sgr-list").innerHTML='<div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>';const o=n==="pending"?await Ts().catch(()=>[]):await vo().catch(()=>[]),u=document.getElementById("sgr-list");if(!o.length){u.innerHTML=`<div class="text-center py-16 text-gray-300"><p class="text-4xl mb-3">🔀</p><p class="text-sm">${n==="pending"?"ไม่มีคำขอรอตรวจสอบ":"ยังไม่มีคำขอ"}</p></div>`;return}u.innerHTML=o.map(r=>{var p,a;const d=t[r.status]??t.pending;return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="font-semibold text-sm text-gray-800 truncate">${ze(r.subject_name??"—")} <span class="text-xs text-gray-400 font-mono">${ze(r.subject_code??"")}</span></p>
            <p class="text-xs text-gray-500 mt-0.5">${ze(((p=r.students)==null?void 0:p.full_name)??"—")} · ${ze(((a=r.students)==null?void 0:a.student_code)??"")} · ${ze(r.class_level??"")}</p>
            <p class="text-xs text-gray-500 mt-1">${s(r.current_group)} → ${s(r.requested_group)}</p>
            <p class="text-[11px] text-gray-400 mt-1">${e(r.created_at)}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${d.cls}">${d.label}</span>
            ${r.status==="pending"?`<button class="sgr-review-btn text-xs font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50" data-id="${r.id}">ตรวจสอบ</button>`:""}
          </div>
        </div>
      </div>`}).join(""),u.querySelectorAll(".sgr-review-btn").forEach(r=>{r.addEventListener("click",()=>Mi(o.find(d=>d.id===Number(r.dataset.id)),l))})};document.querySelectorAll(".sgr-tab").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.tab,document.querySelectorAll(".sgr-tab").forEach(u=>{u.className=`sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold ${u.dataset.tab===n?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}`}),l()})}),await l()}function Mi(e,s){var l;if(!e)return;const t=document.createElement("div");t.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">🔀 ตรวจสอบคำขอย้ายกลุ่มวิชา</h3>
        <p class="text-xs text-gray-500 mt-1">${ze(((l=e.students)==null?void 0:l.full_name)??"—")} ขอย้าย "${ze(e.subject_name??"")}" ${e.current_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"} → ${e.requested_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"}</p>
      </div>
      <div class="flex-1 overflow-y-auto px-5 py-4">
        <p class="text-xs text-gray-500 mb-2">เลือกห้องในระดับชั้น <b>${ze(e.class_level??"")}</b> ที่จะให้มีผลจริง (ค่าเริ่มต้นเลือกทุกห้องที่สอนวิชารหัสเดียวกันไว้ให้แล้ว ปรับได้อิสระ):</p>
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
    </div>`,document.body.appendChild(t);const n=()=>t.remove();t.querySelector("#sgr-cancel").addEventListener("click",n),Bo(e.id).then(o=>{const u=t.querySelector("#sgr-candidates");if(!o.length){u.innerHTML='<p class="text-center text-gray-400 text-sm py-4">ไม่พบห้องที่สอนวิชารหัสนี้ในระดับชั้นเดียวกัน</p>';return}u.innerHTML=o.map(r=>`
      <label class="flex items-center gap-2.5 border border-gray-100 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-50">
        <input type="checkbox" class="sgr-candidate-cb" value="${r.class_id}" checked />
        <span class="flex-1 text-sm text-gray-700">${ze(r.class_name??"")}</span>
        <span class="text-[11px] text-gray-400">${r.student_count} คน · ${r.current_group==="sasana"?"🕌":"📖"}</span>
      </label>`).join("")}).catch(()=>{t.querySelector("#sgr-candidates").innerHTML='<p class="text-center text-red-400 text-sm py-4">โหลดรายชื่อห้องไม่สำเร็จ</p>'}),t.querySelector("#sgr-approve").addEventListener("click",async o=>{var r;const u=[...t.querySelectorAll(".sgr-candidate-cb:checked")].map(d=>Number(d.value));if(!u.length){N("เลือกอย่างน้อย 1 ห้อง","warning");return}if(confirm(`อนุมัติย้ายกลุ่มให้ ${u.length} ห้องที่เลือก?`)){o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await jo(e.id,u),N("อนุมัติแล้ว ✅","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+we(d),"error"),o.target.disabled=!1,o.target.textContent="อนุมัติที่เลือก"}}}),t.querySelector("#sgr-reject").addEventListener("click",async o=>{var r;if(!confirm("ปฏิเสธคำขอนี้?"))return;const u=t.querySelector("#sgr-comment").value.trim();o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await qo(e.id,u),N("ปฏิเสธคำขอแล้ว","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+we(d),"error"),o.target.disabled=!1,o.target.textContent="ปฏิเสธ"}})}async function an(){je("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",Ee(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let e=[],s=[],t="manage",n="สามัญ",l="",o="",u="";const r=i=>{if(!i)return null;const y=i.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return y?y[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},d=i=>i?/^(PR|อก\.|อป\.)/i.test(i)?"ศาสนา":/^ปวช\./i.test(i)?"ปวช":"สามัญ":"สามัญ",p={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},a=i=>e.map(y=>y.class_name).filter(y=>y&&d(y)===i).sort((y,E)=>y.localeCompare(E,"th")),m=i=>{const y=a(i),E=[...new Set(y.map(L=>r(L)).filter(Boolean))],g=p[i]||[];return[...new Set([...g,...E])].sort((L,S)=>L.localeCompare(S,"th"))},v=async()=>{const[i,y,E]=await Promise.all([Xt(),_t(),Un()]);s=y,e=[...new Set(i.map(L=>L.class_name).filter(Boolean))].map(L=>E.find(j=>j.class_name===L)||{class_name:L,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},x=i=>s.find(y=>y.id===i),_=()=>{let i=document.getElementById("hc-print-roster-styles");i||(i=document.createElement("style"),i.id="hc-print-roster-styles",document.head.appendChild(i)),i.textContent=`
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
    `;const y=document.createElement("div");y.id="hc-print-roster-area",document.body.appendChild(y);const E=e.filter(S=>!(d(S.class_name)!==n||l&&r(S.class_name)!==l||o&&S.class_name!==o)).sort((S,j)=>S.class_name.localeCompare(j.class_name,"th"));let g="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";l&&(g+=` ระดับชั้น ${l}`),o&&(g+=` ห้อง ${o}`);const L=E.map((S,j)=>{const D=x(S.head_student_id),k=x(S.vice_head_student_id),I=D!=null&&D.image_url?`<img src="${D.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',R=k!=null&&k.image_url?`<img src="${k.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',z=D?`<b>${ee(D.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${D.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',q=k?`<b>${ee(k.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${k.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${j+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${ee(S.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${I}
              <div>${z}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${R}
              <div>${q}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${ee(S.notes??"")}</td>
        </tr>
      `}).join("");y.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${g}</div>
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
              ${L||'<tr><td colspan="5" style="text-align:center;padding:20px;color:#9ca3af;">ไม่พบข้อมูลห้องเรียน</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `,y.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},y.querySelector("#pr-btn-close-preview").onclick=()=>{y.remove()}},h=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,$=()=>{const i=u.trim().toLowerCase(),y=e.filter(E=>!(d(E.class_name)!==n||i&&!E.class_name.toLowerCase().includes(i))).sort((E,g)=>E.class_name.localeCompare(g.class_name,"th"));return y.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':y.map(E=>{const g=x(E.head_student_id),L=x(E.vice_head_student_id),S=g!=null&&g.image_url?`<img src="${g.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',j=L!=null&&L.image_url?`<img src="${L.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${ee(E.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${n}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${S}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${g?ee(g.full_name):"— ยังไม่ระบุ —"}</span>
                  ${g?`<span class="text-xs text-gray-400 font-mono">รหัส: ${g.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${j}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${L?ee(L.full_name):"— ยังไม่ระบุ —"}</span>
                  ${L?`<span class="text-xs text-gray-400 font-mono">รหัส: ${L.student_code}</span>`:""}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${E.head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
              <p>เกียรติบัตรรอง: ${E.vice_head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${ee(E.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},b=()=>{const i=e.filter(y=>!(d(y.class_name)!==n||l&&r(y.class_name)!==l||o&&y.class_name!==o)).sort((y,E)=>y.class_name.localeCompare(E.class_name,"th"));return i.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':i.map((y,E)=>{const g=x(y.head_student_id),L=x(y.vice_head_student_id),S=g!=null&&g.image_url?`<img src="${g.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',j=L!=null&&L.image_url?`<img src="${L.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${E+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${ee(y.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${S}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${g?ee(g.full_name):"— ยังไม่ระบุ —"}</p>
                ${g?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${g.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${j}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${L?ee(L.full_name):"— ยังไม่ระบุ —"}</p>
                ${L?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${L.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${ee(y.notes??"")}
          </td>
        </tr>
      `}).join("")},c=()=>{const i=e.filter(y=>!(d(y.class_name)!==n||l&&r(y.class_name)!==l||o&&y.class_name!==o)).length;t==="manage"?Ee(`
        <div class="space-y-5 animate-fade">
          ${h()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${n==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${n==="ศาสนา"?"selected":""}>ศาสนา</option>
                <option value="ปวช" ${n==="ปวช"?"selected":""}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${ee(u)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${i}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${$()}
          </div>
        </div>
      `):(Ee(`
        <div class="space-y-5 animate-fade">
          ${h()}

          <!-- Printing filters (Aligned with QR screen) -->
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">1. ระบบหลักสูตร</label>
                <select id="pr-filter-category" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value="สามัญ" ${n==="สามัญ"?"selected":""}>สามัญ</option>
                  <option value="ศาสนา" ${n==="ศาสนา"?"selected":""}>ศาสนา</option>
                  <option value="ปวช" ${n==="ปวช"?"selected":""}>ปวช</option>
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
              <span class="text-xs text-gray-400">พบข้อมูลหัวหน้า/รองหัวหน้าทั้งหมด <b class="text-gray-700">${i}</b> ห้อง</span>
              <div class="flex gap-2">
                <button id="btn-cert-settings"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shadow-sm">
                  ⚙️ ตั้งค่าแสดงเกียรติบัตร
                </button>
                <button id="btn-print-leaders-roster"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  ${i===0?"disabled":""}>
                  🖨️ พิมพ์ใบรายชื่อ (${i})
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
                  ${b()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `),M()),C()},M=()=>{const i=document.getElementById("pr-filter-level");if(!i)return;const y=m(n);i.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${y.map(E=>`<option value="${E}" ${E===l?"selected":""}>${E}</option>`).join("")}
    `,w()},w=()=>{const i=document.getElementById("pr-filter-class");if(!i)return;const E=a(n).filter(g=>l?r(g)===l:!0);i.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${E.length} ห้อง) --</option>
      ${E.map(g=>`<option value="${g}" ${g===o?"selected":""}>ห้อง ${g}</option>`).join("")}
    `},C=()=>{var i,y,E,g,L,S,j,D,k;(i=document.getElementById("tab-manage"))==null||i.addEventListener("click",()=>{t="manage",c()}),(y=document.getElementById("tab-print"))==null||y.addEventListener("click",()=>{t="print",c()}),(E=document.getElementById("hc-filter-category"))==null||E.addEventListener("change",I=>{n=I.target.value,c()}),(g=document.getElementById("hc-search-classes"))==null||g.addEventListener("input",I=>{u=I.target.value;const R=document.getElementById("hc-cards-grid");R&&(R.innerHTML=$()),H()}),H(),(L=document.getElementById("pr-filter-category"))==null||L.addEventListener("change",I=>{n=I.target.value,l="",o="",M(),T()}),(S=document.getElementById("pr-filter-level"))==null||S.addEventListener("change",I=>{l=I.target.value,o="",w(),T()}),(j=document.getElementById("pr-filter-class"))==null||j.addEventListener("change",I=>{o=I.target.value,T()}),(D=document.getElementById("btn-print-leaders-roster"))==null||D.addEventListener("click",_),(k=document.getElementById("btn-cert-settings"))==null||k.addEventListener("click",B)},T=()=>{const i=document.getElementById("pr-table-body");i&&(i.innerHTML=b());const y=e.filter(g=>!(d(g.class_name)!==n||l&&r(g.class_name)!==l||o&&g.class_name!==o)).length,E=document.getElementById("btn-print-leaders-roster");E&&(E.disabled=y===0,E.textContent=`🖨️ พิมพ์ใบรายชื่อ (${y})`)},H=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(i=>{i.addEventListener("click",()=>{const y=i.dataset.room,E=e.find(g=>g.class_name===y);E&&f(E)})})},B=()=>{const i=document.createElement("div");i.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const y=e.some(j=>j.show_cert);i.innerHTML=`
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
            <input type="checkbox" id="csm-global-toggle" class="sr-only peer" ${y?"checked":""}>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex justify-end shrink-0">
          <button id="csm-btn-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">เสร็จสิ้น</button>
        </div>
      </div>
    `,document.body.appendChild(i);const E=i.querySelector("#csm-global-toggle"),g=i.querySelector("#csm-status-text"),L=j=>{g.textContent=j?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};L(y),E.addEventListener("change",async()=>{const j=E.checked;E.disabled=!0,g.textContent="กำลังบันทึก...";try{await Qn(j),e.forEach(D=>{D.show_cert=j}),L(j),N(j?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(D){N("บันทึกผิดพลาด: "+D.message,"error"),E.checked=!j,L(!j)}finally{E.disabled=!1}});const S=()=>i.remove();i.querySelector("#csm-modal-close").onclick=S,i.querySelector("#csm-btn-close").onclick=S},f=i=>{const y=document.createElement("div");y.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let E=x(i.head_student_id),g=x(i.vice_head_student_id);y.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขหัวหน้าและรองหัวหน้าห้อง</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">ห้องเรียน ${i.class_name}</p>
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
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(E==null?void 0:E.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${E?`
                ${E.image_url?`<img src="${E.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${ee(E.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${E.student_code} · ห้อง ${E.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Head Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-head-cert-in" placeholder="https://..." value="${i.head_cert_url??""}"
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
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(g==null?void 0:g.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${g?`
                ${g.image_url?`<img src="${g.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${ee(g.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${g.student_code} · ห้อง ${g.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Vice Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-vice-cert-in" placeholder="https://..." value="${i.vice_head_cert_url??""}"
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
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">${i.notes??""}</textarea>
            </div>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end shrink-0">
          <button id="ld-btn-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
          <button id="ld-btn-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">บันทึกข้อมูล</button>
        </div>
      </div>
    `,document.body.appendChild(y);let L=i.head_student_id,S=i.vice_head_student_id;const j=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},D=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},k=q=>{const F=document.getElementById("ld-head-card");if(q){L=q.id;const P=q.image_url?`<img src="${q.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';F.innerHTML=`
          ${P}
          <div>
            <p class="font-bold text-gray-800">${ee(q.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${q.student_code} · ห้อง ${q.main_room||"—"}</p>
          </div>
        `}else L=null,F.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},I=q=>{const F=document.getElementById("ld-vice-card");if(q){S=q.id;const P=q.image_url?`<img src="${q.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';F.innerHTML=`
          ${P}
          <div>
            <p class="font-bold text-gray-800">${ee(q.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${q.student_code} · ห้อง ${q.main_room||"—"}</p>
          </div>
        `}else S=null,F.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async q=>{const F=q.target.value.trim();if(F.length===5){j();const P=await as(F).catch(()=>null);k(P)}else F.length===0&&(L=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async q=>{const F=q.target.value.trim();if(F.length===5){D();const P=await as(F).catch(()=>null);I(P)}else F.length===0&&(S=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const R=async(q,F)=>{const P=q.files[0];if(P){F.disabled=!0,F.value="กำลังอัปโหลดไฟล์...";try{const O=P.name.split(".").pop(),V=`certificates/${i.id}/${q.id}-${Date.now()}.${O}`;let W=P;P.type.startsWith("image/")&&(W=await Xo(P,{maxWidth:1600,quality:.88}));const{error:A}=await oe.storage.from("system-assets").upload(V,W,{upsert:!0,contentType:P.type});if(A)throw A;const{data:U}=oe.storage.from("system-assets").getPublicUrl(V);F.value=U.publicUrl}catch(O){N("อัปโหลดล้มเหลว: "+O.message,"error"),F.value=""}finally{F.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const z=()=>y.remove();document.getElementById("ld-modal-close").onclick=z,document.getElementById("ld-btn-cancel").onclick=z,document.getElementById("ld-btn-save").onclick=async()=>{const q=document.getElementById("ld-btn-save");q.disabled=!0,q.textContent="กำลังบันทึก...";const F=document.getElementById("ld-head-cert-in").value.trim(),P=document.getElementById("ld-vice-cert-in").value.trim(),O=document.getElementById("ld-notes-in").value.trim();try{await ro(i.class_name,L,S,F,P,O),i.head_student_id=L,i.vice_head_student_id=S,i.head_cert_url=F,i.vice_head_cert_url=P,i.notes=O,N("บันทึกข้อมูลเรียบร้อยแล้ว","success"),z(),c()}catch(V){N("เกิดข้อผิดพลาด: "+V.message,"error"),q.disabled=!1,q.textContent="บันทึกข้อมูล"}}};await v(),c()}const rc=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:Br,renderAnnouncements:Or,renderAutoscaleHistory:Pr,renderClasses:Va,renderClassroomLeaders:an,renderClassroomsAdmin:qr,renderCouncilRepNominationSummary:Ur,renderCurriculum:ft,renderDepartments:_r,renderDeptTable:oa,renderDonations:Gr,renderFeedbackAdmin:Vr,renderHolidays:Sr,renderHomeroom:$r,renderHouseColors:Fr,renderImport:Er,renderLifeSkillAdmin:Cr,renderMyReligionGroup:ji,renderOverview:Na,renderPayments:Lr,renderPeriods:la,renderPrayerAdmin:Tr,renderReadingAdmin:Ir,renderRegisteredTeachers:Kt,renderReligionGroups:Zr,renderRolePermissions:zr,renderScoreColConfig:kr,renderSettings:Wa,renderStudents:wr,renderSubjectGroupRequests:tn,renderSubjectTable:Ya,renderSubjects:wt,renderSupervisorAnnouncements:hi,renderTeacherTable:qt,renderTeachers:vr,renderUsageStats:jr,renderWorkCalendar:Qr,renderWorkCalendarView:Ti},Symbol.toStringTag,{value:"Module"}));export{ud as A,Ur as B,an as C,tn as D,Vr as E,Gr as F,xr as G,lt as H,ot as I,mr as J,kd as K,We as L,bd as M,Fr as N,zr as O,Qr as P,Ta as Q,Pr as R,Or as S,rc as T,Zr as a,qr as b,jr as c,Br as d,Er as e,Wa as f,Tr as g,Ir as h,Cr as i,Lr as j,Sr as k,Kt as l,kr as m,$r as n,la as o,ft as p,_r as q,wt as r,wr as s,Va as t,vr as u,cd as v,Na as w,qt as x,Ya as y,oa as z};
