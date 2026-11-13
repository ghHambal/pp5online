const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-BQaMiX9s.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/admin-subject-management-CxGvGHjS.js","assets/ui-C-ZO4RB5.js","assets/ai-prompt-gate-D6R7FVed.js","assets/admin-schedule-management-BqgskIM9.js","assets/teacher-views-classes-ot6k83TX.js","assets/browser-JP79f-a9.js","assets/sync-C11n1XX8.js","assets/regrade-menu-window-CMWxZTka.js","assets/pp5-doc-ycuHtLuK.js","assets/score-display-CQ4dUIPx.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-DMDc0a8I.js","assets/storage-CuUjCgvI.js","assets/teacher-views-grades-DS4Q-oBA.js","assets/score-qr-scanner-CfASQNHx.js","assets/teacher-views-attendance-Cj5tnwUe.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/admin-schedule-import-BWqANN9n.js","assets/tutorial-BoxVX_-5.js","assets/teacher-views-donor-chat-b3UiVVzc.js","assets/donation-utils-DtZioNqn.js","assets/teacher-views-certificates-c1uAK6dX.js","assets/certificate-engine-Bn4Xdc-e.js","assets/certificate-editor-D_E4lbCQ.js","assets/student-views-sIvyw8uD.js","assets/student-api-C610hcu8.js","assets/assignment-annotations-api-Y9qfMpYa.js","assets/theme-qDnPEUQn.js","assets/quiz-api-CcBTN73s.js","assets/academic-term-switcher-CWR_JlXz.js"])))=>i.map(i=>d[i]);
import{a as N,g as he,_ as Ce,A as xn,d as ts,i as gn,s as qs,b as $t,j as za,k as As,l as Fa}from"./ui-C-ZO4RB5.js";import{getExecClassOverview as bn,getDepartments as ot,getSystemConfig as Ne,getTeachers as Pe,getLeavePermissionDashboard as yn,getPendingSubjectGroupRequests as Ms,getAllAppFeedback as Ns,getAllPaymentRequests as Xe,deleteTeacher as fn,getMasterSubjects as ra,deleteSubject as hn,deleteDepartment as vn,deletePeriod as wn,updateTeacher as _n,createTeacher as $n,updateDepartment as kn,createDepartment as Sn,upsertPeriod as En,upsertHoliday as Ln,deleteHoliday as Cn,getPeriods as In,getCurriculumStandards as Tn,updateCurriculumStandard as jn,createCurriculumStandard as Bn,importCurriculumStandards as qn,deleteCurriculumStandard as An,getClasses as na,createSubject as Mn,updateSystemConfig as Ee,deleteClass as Ds,getAcademicTerms as oa,getUniqueRooms as Nn,getUniqueReligionRooms as Hs,deleteHomeroomTeacher as Dn,getHomeroomTeachers as Ft,getStudents as Et,deleteStudent as Hn,updateStudent as Rn,getClassrooms as as,getScoreColumnConfig as On,upsertScoreColumnConfig as Pn,getReligionGroups as ut,getSchoolHolidaysFull as zn,upsertHomeroomTeachersBatch as Fn,updateClassroom as Un,createClassroom as Vn,getLifeSkillColumns as ss,getReadingScoreColumns as Gn,getHouseGroups as Wn,updateTeacherPosition as ja,deleteReligionGroup as Yn,updateReligionGroup as Kn,createReligionGroup as Jn,getReligionGroupMembers as Qn,getClassroomLeaders as Zn,deleteClassroom as Xn,fillLifeSkillScoresToClassScores as Ut,fillPrayerScoresToReligionClassScores as eo,assignStudentsHouseColor as rs,setReligionGroupMembers as to,getAllReadingScores as ao,deleteReadingScoreColumn as so,updateAllClassroomCertsToggle as ro,getAllLifeSkillScores as no,createLifeSkillColumn as Rs,updateLifeSkillColumn as Os,deleteLifeSkillColumn as oo,updateReadingScoreColumn as lo,createReadingScoreColumn as io,getStudentsByReligionRoom as co,getPrayerRecordsByRoom as uo,getStudentByCode as ns,updateClassroomLeaders as po,autoEnrollStudentsByRoom as mo,getTeachersWithPositions as xo,previewNewSemester as go,purgeTermSourceDataBatch as bo,startNewSemester as yo,getScheduleTeacherIds as fo,mergeTeacherAccounts as ho,unlinkTeacherAccount as vo,getStats as os,getAllCouncilRepNominations as wo,getRolePermissions as _o,saveRolePermission as $o,getAllAnnouncements as Ps,getUsageStats as ko,reviewPaymentRequest as Ot,approveTeacherQuota as ba,getAllSubjectGroupRequests as So,setFeedbackRead as ls,setFeedbackCategory as Eo,deleteAppFeedback as Lo,advisorResetStudentPassword as Co,markStudentPasswordResetNotice as Io,setFeedbackStatusReply as ds,updateAnnouncement as ya,createAnnouncement as fa,getAnnouncementCommentsBulk as To,deleteAnnouncement as jo,getPaymentSlipViewUrl as Bo,getPrayerMonitoringData as qo,getLifeSkillMonitoringData as Ao,getReadingMonitoringData as Mo,getCandidateClassesForGroupRequest as No,approveSubjectGroupRequest as Do,rejectSubjectGroupRequest as Ho,notifyFeedbackReply as Ro,getAnnouncementComments as Oo,deleteAnnouncementComment as Po,assignHomeroomTeacher as zs,savePrayerCellAdmin as zo}from"./api-BQaMiX9s.js";import{r as Fo}from"./leave-monitor.js_v_10.18-SIVlCHtZ.js";import{A as Uo,o as Vo,c as Fs,a as Ke,b as Ba,r as Us}from"./academic-term-switcher-CWR_JlXz.js";import{s as le}from"./supabase-BV-W2lsh.js";import{DEFAULT_SUBJECT_SYNC_COLUMNS as ha,DEFAULT_SUBJECT_SYNC_KEY_FIELD as is,DEFAULT_SUBJECT_SYNC_TAB as va,DEFAULT_SUBJECT_SYNC_SHEET_ID as Go,SUBJECT_SYNC_COLUMNS as cs,syncSubjectCatalog as Wo,COPY_TEMPLATE_CONFIG as Yo,previewStudentsFromSheet as Ko,syncStudentsFromSheetNow as Jo}from"./sync-C11n1XX8.js";import{o as Vs}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as us,_dateInputValue as Gs,_readingGrade as Ws,READING_GRADES as ht,_htmlEsc as Fe,parseSubjectVisuals as Qo,SUBJECT_VISUAL_PRESETS as ps}from"./teacher-views-utils-DMDc0a8I.js";import{r as Zo,a as Xo,b as el,c as Ys,d as tl}from"./teacher-views-classes-ot6k83TX.js";import{renderCourseForm as al}from"./teacher-views-CXWdz8q-.js";import"./browser-JP79f-a9.js";import{uploadShirtDesignHtml as sl,uploadShirtDesignColorImage as rl,uploadTeacherPhoto as nl,uploadDeptAsset as ms,uploadAnnouncementImage as Ks,compressImage as ol,uploadStickerPng as xs,uploadSystemAsset as ll}from"./storage-CuUjCgvI.js";import{c as Js}from"./ai-prompt-gate-D6R7FVed.js";import"./teacher-views-grades-DS4Q-oBA.js";import{n as gs,d as dl,s as il,a as cl,W as ul}from"./workload-scheduler-C9WpzjbH.js";import{i as pl,a as ml,p as xl,b as gl}from"./import-BUUT5wvS.js";import{a as Qs}from"./theme-qDnPEUQn.js";import{f as bl}from"./leave-time-CrS9gT63.js";import{b as yl}from"./anti-pull-refresh-BGrI1pMY.js";import{o as fl}from"./azizgames-modal-CZNvwg6f.js";import{r as hl}from"./sports-awards-admin-6oCPrlSb.js";import{getEffectiveUser as Zs,getEffectiveProfileId as Xs}from"./impersonation-0xVfgYVY.js";const vl=["ci_micro","ci_small","ci_medium"],wl={ci_micro:1,ci_small:2,ci_medium:3},_l={ci_micro:"Micro",ci_small:"Small",ci_medium:"Medium"},$l=7*60*60*1e3,kl=/^\d{4}-\d{2}-\d{2}$/,bs=/^(?:([01]\d|2[0-3]):([0-5]\d)|24:00)$/,Yt=e=>vl.includes(e),ys=e=>kl.test(String(e??""))&&!Number.isNaN(Date.parse(`${e}T00:00:00Z`))&&new Date(`${e}T00:00:00Z`).toISOString().slice(0,10)===e,Kt=e=>e==="24:00"?1440:Number(e.slice(0,2))*60+Number(e.slice(3)),er=e=>new Date(`${e}T00:00:00Z`),tr=e=>e.toISOString().slice(0,10),Sl=(e,s)=>{const t=er(e);return t.setUTCDate(t.getUTCDate()+s),tr(t)},fs=e=>er(e).getUTCDay(),Nt=e=>_l[e]??e,Jt=e=>wl[e]??0;function El(e){var t;if(!e||e.schemaVersion!==1)return e;const s=[];for(const n of Array.isArray(e.periods)?e.periods:[])for(let l=0;l<7;l+=1){const o=(t=n.days)==null?void 0:t[l];o!=null&&o.enabled&&s.push({id:`legacy-${s.length+1}`,startDate:n.startDate,endDate:n.endDate,days:[l],start:o.start,end:o.end,targetTier:"ci_medium",label:"ช่วงเดิมจากตาราง Medium"})}return{schemaVersion:2,enabled:!!e.enabled,timezone:"Asia/Bangkok",defaultTier:"ci_micro",guardrail:e.guardrail,rules:s}}function Ll(e){const s=El(e);return!s||typeof s!="object"||s.schemaVersion!==2?s:{schemaVersion:2,enabled:!!s.enabled,timezone:s.timezone||"Asia/Bangkok",defaultTier:Yt(s.defaultTier)?s.defaultTier:"ci_micro",guardrail:s.guardrail,rules:(Array.isArray(s.rules)?s.rules:[]).map((t,n)=>({id:t.id||`rule-${n+1}`,startDate:t.startDate,endDate:t.endDate,days:[...new Set((Array.isArray(t.days)?t.days:[]).map(Number))],start:t.start,end:t.end,targetTier:Yt(t.targetTier)?t.targetTier:"ci_micro",label:String(t.label??"")}))}}function et(e){const s=Ll(e);if(!s||s.schemaVersion!==2||typeof s.enabled!="boolean"||!Array.isArray(s.rules))throw new Error("รูปแบบตารางเวลาไม่ถูกต้อง");if(!Yt(s.defaultTier))throw new Error("ระดับเครื่องเริ่มต้นไม่ถูกต้อง");if(!["Asia/Bangkok"].includes(s.timezone))throw new Error("โซนเวลาต้องเป็น Asia/Bangkok");if(s.rules.length>200)throw new Error("เพิ่มช่วงเวลาได้ไม่เกิน 200 ช่วง");for(const t of s.rules){if(!ys(t.startDate)||!ys(t.endDate)||t.startDate>t.endDate)throw new Error("กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง");if(!Array.isArray(t.days)||!t.days.length||t.days.some(n=>!Number.isInteger(n)||n<0||n>6))throw new Error("กรุณาเลือกวันอย่างน้อยหนึ่งวัน");if(!bs.test(t.start)||!bs.test(t.end)||Kt(t.start)===Kt(t.end))throw new Error("เวลาเริ่มและเวลาสิ้นสุดต้องถูกต้องและไม่เท่ากัน");if(!Yt(t.targetTier))throw new Error("ระดับเครื่องในช่วงเวลาไม่ถูกต้อง")}if(s.enabled&&!s.rules.length)throw new Error("กรุณากำหนดอย่างน้อยหนึ่งช่วงเวลาก่อนเปิดใช้งาน");return s}function Cl(e,s){const t=fs(s),n=Sl(s,-1),l=fs(n),o=[];for(const x of e.rules){const r=Kt(x.start),d=Kt(x.end);if(r<d){s>=x.startDate&&s<=x.endDate&&x.days.includes(t)&&o.push({start:r,end:d,targetTier:x.targetTier,id:x.id});continue}s>=x.startDate&&s<=x.endDate&&x.days.includes(t)&&o.push({start:r,end:1440,targetTier:x.targetTier,id:x.id}),n>=x.startDate&&n<=x.endDate&&x.days.includes(l)&&o.push({start:0,end:d,targetTier:x.targetTier,id:x.id})}return o.filter(x=>x.end>x.start)}function Ua(e,s){const t=et(e),n=new Set([0,1440]),l=Cl(t,s);for(const r of l)n.add(r.start),n.add(r.end);const o=[...n].sort((r,d)=>r-d),x=[];for(let r=0;r<o.length-1;r+=1){const d=o[r],i=o[r+1],a=d+(i-d)/2,w=l.filter(v=>a>=v.start&&a<v.end).reduce((v,f)=>Jt(f.targetTier)>Jt(v)?f.targetTier:v,t.defaultTier),y=x[x.length-1];(y==null?void 0:y.targetTier)===w&&y.end===d?y.end=i:x.push({start:d,end:i,targetTier:w})}return x}function Il(e,s=new Date){var x;const t=et(e);if(!t.enabled)return null;const n=new Date(s.getTime()+$l),l=tr(n),o=n.getUTCHours()*60+n.getUTCMinutes();return((x=Ua(t,l).find(r=>o>=r.start&&o<r.end))==null?void 0:x.targetTier)??t.defaultTier}const Tl=()=>({schemaVersion:2,enabled:!1,timezone:"Asia/Bangkok",defaultTier:"ci_micro",rules:[]}),Pt={minimumMediumHoldMinutes:60,minimumSmallHoldMinutes:30,healthyStreakRequired:3,recoveryLockMinutes:60};function hs(e={}){const s=(t,n,l,o)=>{const x=Number(t);return Number.isFinite(x)?Math.max(l,Math.min(o,x)):n};return{minimumMediumHoldMinutes:s(e.minimumMediumHoldMinutes,Pt.minimumMediumHoldMinutes,0,24*60),minimumSmallHoldMinutes:s(e.minimumSmallHoldMinutes,Pt.minimumSmallHoldMinutes,0,24*60),healthyStreakRequired:Math.round(s(e.healthyStreakRequired,Pt.healthyStreakRequired,1,12)),recoveryLockMinutes:s(e.recoveryLockMinutes,Pt.recoveryLockMinutes,0,24*60)}}const la={ci_micro:.01344,ci_small:.0206,ci_medium:.0822},ar=(e,s)=>{const t=new Date(e.getTime());return t.setUTCDate(t.getUTCDate()+s),t},sr=e=>e.toISOString().slice(0,10);function rr(){return Object.fromEntries(Object.keys(la).map(e=>[e,0]))}function jl(e,s){const t=rr();for(const o of Ua(e,sr(s)))t[o.targetTier]+=o.end-o.start;const n=Object.fromEntries(Object.entries(t).map(([o,x])=>[o,x/60])),l=Object.entries(n).reduce((o,[x,r])=>o+r*la[x],0);return{...n,tierHours:n,tierMinutes:t,usd:l,mediumHours:n.ci_medium,smallHours:n.ci_small,microHours:n.ci_micro}}function wa(e,s,t){const n={usd:0,days:t,tierHours:rr()};for(let l=0;l<t;l+=1){const o=jl(e,ar(s,l));n.usd+=o.usd;for(const x of Object.keys(n.tierHours))n.tierHours[x]+=o.tierHours[x]}return{...n,mediumHours:n.tierHours.ci_medium,smallHours:n.tierHours.ci_small,microHours:n.tierHours.ci_micro}}function Bl(e,s){const t=et(e),n=new Date(`${s}T00:00:00Z`);if(Number.isNaN(n.getTime())||sr(n)!==s)throw new Error("วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง");const l=ar(n,-((n.getUTCDay()+6)%7)),o=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1)),x=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0)).getUTCDate(),r={day:wa(t,n,1),week:wa(t,l,7),month:wa(t,o,x)};return r.defaultTier=t.defaultTier,r.defaultTierLabel=Nt(t.defaultTier),r.tierOrder=Object.keys(la).sort((d,i)=>Jt(d)-Jt(i)),r}const nr=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],De=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),or=[["ci_micro","Micro"],["ci_small","Small"],["ci_medium","Medium"]],lr={ci_micro:"border-slate-300 bg-slate-50 text-slate-700",ci_small:"border-emerald-300 bg-emerald-50 text-emerald-800",ci_medium:"border-rose-300 bg-rose-50 text-rose-800"},ql=nr,_a=[{key:"prayer",label:"🙏 ละหมาด",description:"ควบคุมช่วง polling และจอแสดงผลการเช็คชื่อละหมาด",features:["prayer_monitor"]},{key:"leave",label:"🚪 ออกนอกห้องเรียน",description:"ควบคุมจอติดตามนักเรียนออกนอกห้องเรียน",features:["leave_monitor"]},{key:"sports",label:"🏅 กีฬาสี",description:"ควบคุมจอสด scoreboard และคิว live ของกีฬาสี",features:["azizgames","azfutsal"]}],Qt=()=>new Date(Date.now()+7*36e5).toISOString().slice(0,10),qa=e=>`border rounded-lg px-3 py-1.5 text-xs transition ${e?"bg-indigo-700 border-indigo-700 text-white":"bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`,dr=e=>or.map(([s,t])=>`<option value="${s}" ${e===s?"selected":""}>${t}</option>`).join(""),vs=()=>({id:`rule-${Date.now()}-${Math.random().toString(16).slice(2)}`,startDate:Qt(),endDate:Qt(),days:[1,2,3,4,5],start:"07:45",end:"16:30",targetTier:"ci_medium",label:"ช่วงใช้งานหลัก"}),Al=(e,s)=>{const t=ul[e],n=s.features[e],l=cl(e,new Date,s),o=l.nextTransitionAt?new Date(l.nextTransitionAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"}):"—";return`<section class="border rounded-2xl p-4" data-workload-feature="${e}">
    <div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-bold">${t.label}</h3><p class="text-xs text-gray-500">${t.description}</p></div><div class="text-right text-xs"><div class="font-bold">${l.status}</div><div class="text-gray-500">เปลี่ยนถัดไป: ${De(o)}</div></div></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Mode<select name="mode" class="block border rounded-lg p-2 w-full mt-1"><option ${n.mode==="AUTO"?"selected":""}>AUTO</option><option ${n.mode==="ON"?"selected":""}>ON</option><option ${n.mode==="OFF"?"selected":""}>OFF</option></select></label>
      ${t.dateRange?`<label class="text-sm">วันที่เริ่ม<input name="dateFrom" type="date" value="${De(n.dateFrom||"")}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input name="dateTo" type="date" value="${De(n.dateTo||"")}" class="block border rounded-lg p-2 w-full mt-1"></label>`:"<span></span><span></span>"}
      <div class="grid grid-cols-2 gap-2"><label class="text-sm">เริ่ม<input name="start" type="time" value="${De(n.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">สิ้นสุด<input name="end" type="time" value="${De(n.end)}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3"><label class="text-sm">Buffer ก่อน (นาที)<input name="bufferBefore" type="number" min="0" max="1440" value="${n.bufferBefore}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Buffer หลัง (นาที)<input name="bufferAfter" type="number" min="0" max="1440" value="${n.bufferAfter}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    <div class="flex flex-wrap gap-2 mt-3">${n.days.map((x,r)=>`<label class="inline-flex items-center gap-1 text-xs border rounded-lg px-2 py-1"><input type="checkbox" name="day-${r}" ${x?"checked":""}>${ql[r]}</label>`).join("")}</div>
  </section>`},Ml=e=>{try{return`<div class="flex h-9 overflow-hidden rounded-lg border bg-gray-100">${Ua(e,Qt()).map(t=>{const n=Math.max(1,(t.end-t.start)/1440*100),l=`${String(Math.floor(t.start/60)).padStart(2,"0")}:${String(t.start%60).padStart(2,"0")}`,o=`${String(Math.floor(t.end/60)).padStart(2,"0")}:${String(t.end%60).padStart(2,"0")}`;return`<div class="${lr[t.targetTier]} border-r flex items-center justify-center text-[10px] font-bold overflow-hidden" style="width:${n}%" title="${Nt(t.targetTier)} ${l}–${o}">${n>8?`${Nt(t.targetTier)} ${l}–${o}`:""}</div>`}).join("")}</div>`}catch{return'<div class="rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">กรอกช่วงเวลาให้ครบเพื่อดูตัวอย่าง Timeline</div>'}},Nl=(e,s)=>`<section class="bg-white border rounded-2xl p-4 shadow-sm" data-rule="${s}" data-rule-id="${De(e.id)}">
  <div class="flex flex-wrap gap-3 items-end justify-between">
    <div class="flex flex-wrap gap-3 items-end"><label class="text-sm">วันที่เริ่ม<input required type="date" name="startDate" value="${De(e.startDate)}" class="block border rounded-lg p-2 mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input required type="date" name="endDate" value="${De(e.endDate)}" class="block border rounded-lg p-2 mt-1"></label></div>
    <div class="flex gap-2"><button type="button" data-duplicate-rule class="border rounded-lg px-3 py-2 text-sm">ทำสำเนา</button><button type="button" data-remove-rule class="border rounded-lg px-3 py-2 text-sm text-red-700">ลบช่วงนี้</button></div>
  </div>
  <div class="mt-3 flex flex-wrap gap-2 items-center"><span class="text-sm font-medium mr-1">วันที่ใช้:</span>${nr.map((t,n)=>`<button type="button" data-day-toggle="${n}" data-selected="${e.days.includes(n)}" class="${qa(e.days.includes(n))}">${t.slice(0,3)}</button>`).join("")}<button type="button" data-day-preset="weekdays" class="text-xs underline text-indigo-700 ml-2">จ–ศ</button><button type="button" data-day-preset="all" class="text-xs underline text-indigo-700">ทุกวัน</button></div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">เวลาเริ่ม<input required type="time" name="start" value="${De(e.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">เวลาสิ้นสุด<input required type="time" name="end" value="${De(e.end)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">ระดับเครื่อง<select name="targetTier" class="block border rounded-lg p-2 w-full mt-1">${dr(e.targetTier)}</select></label><label class="text-sm">หมายเหตุ<input name="label" value="${De(e.label)}" maxlength="80" placeholder="เช่น ช่วงเรียน / ช่วงกลางคืน" class="block border rounded-lg p-2 w-full mt-1"></label></div>
</section>`;async function Aa(){document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-white",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-indigo-200",d.dataset.nav!=="autoscale-settings")}),document.getElementById("page-title").textContent="ตั้งค่ากำลังเครื่องฐานข้อมูล";const e=document.getElementById("main-content");e.innerHTML='<p class="p-6">กำลังโหลดตารางเวลา...</p>';let s,t,n={},l=Qt(),o="overview";try{const{data:d,error:i}=await le.from("system_config").select("key,value,updated_at").in("key",["autoscaleSchedule","autoscaleState","workloadSchedule"]);if(i)throw i;const a=d.find(v=>v.key==="autoscaleSchedule"),p=a!=null&&a.value?JSON.parse(a.value):Tl();s={...et(p),guardrail:hs(p.guardrail)};const w=d.find(v=>v.key==="autoscaleState");n=w?{...JSON.parse(w.value),updatedAt:w.updated_at}:{};const y=d.find(v=>v.key==="workloadSchedule");t=gs(y!=null&&y.value?JSON.parse(y.value):dl())}catch(d){e.innerHTML=`<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${De(d.message)}</p>`;return}const x=()=>{var d,i,a,p,w;return{schemaVersion:2,enabled:s.enabled,timezone:"Asia/Bangkok",defaultTier:((d=e.querySelector("[name=defaultTier]"))==null?void 0:d.value)||s.defaultTier,guardrail:{minimumMediumHoldMinutes:Number(((i=e.querySelector("[name=minimumMediumHoldMinutes]"))==null?void 0:i.value)||s.guardrail.minimumMediumHoldMinutes),minimumSmallHoldMinutes:Number(((a=e.querySelector("[name=minimumSmallHoldMinutes]"))==null?void 0:a.value)||s.guardrail.minimumSmallHoldMinutes),healthyStreakRequired:Number(((p=e.querySelector("[name=healthyStreakRequired]"))==null?void 0:p.value)||s.guardrail.healthyStreakRequired),recoveryLockMinutes:Number(((w=e.querySelector("[name=recoveryLockMinutes]"))==null?void 0:w.value)||s.guardrail.recoveryLockMinutes)},rules:[...e.querySelectorAll("[data-rule]")].map((y,v)=>({id:y.dataset.ruleId||`rule-${v+1}`,startDate:y.querySelector("[name=startDate]").value,endDate:y.querySelector("[name=endDate]").value,days:[...y.querySelectorAll('[data-day-toggle][data-selected="true"]')].map(f=>Number(f.dataset.dayToggle)),start:y.querySelector("[name=start]").value,end:y.querySelector("[name=end]").value,targetTier:y.querySelector("[name=targetTier]").value,label:y.querySelector("[name=label]").value}))}},r=()=>{let d=null;try{d=s.enabled?Il(s):null}catch{}const i=d?Nt(d):s.enabled?"กรุณาตรวจตารางเวลา":"คงระดับเดิม",a=Number(n.scheduleSchemaVersion)>=2,p=or.map(([f,T])=>`<span class="inline-flex items-center gap-2 border rounded-xl px-3 py-2 ${lr[f]}"><span class="font-bold">${T}</span><span>$${la[f].toFixed(5)}/ชม.</span></span>`).join("");e.innerHTML=`<div class="space-y-5 animate-fade">
      <div role="tablist" aria-label="กลุ่มการตั้งค่ากำลังเครื่อง" class="bg-white border rounded-2xl p-2 shadow-sm flex flex-wrap gap-2"><button type="button" role="tab" data-autoscale-tab="overview" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">📊 ภาพรวม</button><button type="button" role="tab" data-autoscale-tab="schedule" class="flex-1 min-w-[190px] rounded-xl px-4 py-3 text-sm font-bold transition">🗓️ ตารางปรับกำลังเครื่อง</button>${_a.map(f=>`<button type="button" role="tab" data-autoscale-tab="${f.key}" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">${f.label}</button>`).join("")}</div>
      <div id="autoscale-panel-overview" data-autoscale-panel="overview" role="tabpanel" class="space-y-5"><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>${n.mode!=="schedule"||!a?'<p class="mt-3 text-red-700">backend ยังไม่พร้อมสำหรับตาราง Micro / Small / Medium — กรุณา deploy autoscale-tick รุ่นใหม่ แล้วกดรีเฟรชสถานะก่อนบันทึก</p>':""}<p class="text-sm text-gray-600 mt-2">ระบบจะเลือกเป้าหมายตามช่วงเวลาที่กำหนด: Micro → Small → Medium และจะลดระดับก็ต่อเมื่อ health/guardrail ผ่าน</p><p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับปัจจุบัน ไม่ใช่ปิดฐานข้อมูล</p><div class="mt-4 border rounded-xl p-4 ${s.enabled?"bg-green-50 border-green-300 text-green-900":"bg-gray-100 border-gray-300 text-gray-800"}"><p class="text-lg font-bold">สถานะตาราง: ${s.enabled?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"}</p><p class="text-sm mt-1">เป้าหมายตามเวลาตอนนี้: <strong>${i}</strong></p></div><p class="text-xs text-gray-500 mt-2">ระดับเครื่องที่ตรวจจาก Supabase: ${De(n.currentTier||"ยังไม่มีข้อมูล")} · ตรวจระดับจริงล่าสุด: ${n.currentTierObservedAt?De(new Date(n.currentTierObservedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"ยังไม่เคยตรวจ"}</p><p class="text-xs text-gray-500 mt-1">สถานะงาน: ${De(n.status||"—")} · คำสั่งที่รอยืนยัน: ${De(n.pendingTier?Nt(n.pendingTier):"ไม่มี")}</p>${n.lastError?`<p class="text-xs text-amber-700 mt-1">รายละเอียด: ${De(n.lastError)}</p>`:""}<div class="flex flex-wrap gap-3 mt-4"><button id="as-enable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-green-700 border-green-700 text-white":"bg-white border-green-700 text-green-800"}">เปิดใช้งาน${s.enabled?" ✓":""}</button><button id="as-disable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-white border-gray-300 text-gray-700":"bg-gray-700 border-gray-700 text-white"}">ปิดใช้งาน${s.enabled?"":" ✓"}</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div></div><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold">💰 ราคาอ้างอิง Compute</h2><div class="flex flex-wrap gap-2 mt-3">${p}</div><label class="block text-sm mt-4">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${l}" class="border rounded-lg p-2 mt-1"></label><div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div><p class="text-xs text-gray-500 mt-3">เป็นค่าประมาณตามตาราง ไม่ใช่ยอดบิลจริง และควรตรวจราคากับ Supabase ก่อนใช้งานจริง</p></div></div>
      <form id="as-form" data-autoscale-panel="schedule" role="tabpanel" class="space-y-4"><section class="border rounded-2xl p-4 bg-amber-50"><h3 class="font-bold">🛡️ Guardrail การลดระดับ</h3><p class="text-xs text-gray-600 mt-1">การเปลี่ยนขึ้นทำได้ในรอบตรวจถัดไป ส่วนการลดจะรอ health ปกติ, healthy streak และช่วง hold ที่กำหนด</p><div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Hold หลัง Medium (นาที)<input name="minimumMediumHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumMediumHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Hold หลัง Small (นาที)<input name="minimumSmallHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumSmallHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Healthy streak (รอบ)<input name="healthyStreakRequired" type="number" min="1" max="12" value="${s.guardrail.healthyStreakRequired}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Recovery lock (นาที)<input name="recoveryLockMinutes" type="number" min="0" max="1440" value="${s.guardrail.recoveryLockMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label></div></section><section class="border rounded-2xl p-4 bg-white"><div class="flex flex-wrap justify-between gap-3 items-end"><div><h3 class="font-bold">ตารางช่วงเวลา</h3><p class="text-xs text-gray-500 mt-1">กำหนดวันซ้ำได้หลายวัน และกรอกข้ามวันได้ เช่น 22:00–02:00</p></div><label class="text-sm">ระดับพื้นฐานนอกช่วงเวลา<select name="defaultTier" class="border rounded-lg p-2 ml-2">${dr(s.defaultTier)}</select></label></div><div class="mt-4">${Ml(s)}</div></section><div id="as-rules" class="space-y-4">${s.rules.map(Nl).join("")}</div><div class="flex flex-wrap gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงเวลา</button><button type="button" id="as-weekday-template" class="border bg-white rounded-xl px-4 py-2">สร้างตารางวันเรียนพื้นฐาน</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div><p class="text-xs text-gray-500">ระบบจะเลือก tier สูงสุดเมื่อช่วงเวลาซ้อนกัน และมีผลในรอบตรวจถัดไป ปกติทุก 5 นาที</p></form>
      ${_a.map(f=>`<section id="autoscale-panel-${f.key}" data-autoscale-panel="${f.key}" role="tabpanel" class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">${f.label}</h2><p class="text-sm text-gray-600 mt-2">${f.description} · AUTO ใช้ตาราง, ON บังคับเปิด, OFF บังคับปิด</p><div class="space-y-4 mt-4">${f.features.map(T=>Al(T,t)).join("")}</div></section>`).join("")}
      <div data-autoscale-workload-actions class="hidden flex gap-3 bg-white border rounded-2xl p-4 shadow-sm"><button type="button" id="workload-save" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกการตั้งค่า Workload ทั้งหมด</button><button type="button" id="workload-refresh" class="border rounded-xl px-4 py-2">รีเฟรช Workload</button><p class="self-center text-xs text-gray-500">บันทึกครั้งเดียว ครอบคลุมทุกแท็บ</p></div>
    </div>`;const w=f=>{o=f,e.querySelectorAll("[data-autoscale-tab]").forEach(c=>{const u=c.dataset.autoscaleTab===o;c.setAttribute("aria-selected",String(u)),c.classList.toggle("bg-indigo-700",u),c.classList.toggle("text-white",u),c.classList.toggle("shadow-sm",u),c.classList.toggle("bg-gray-100",!u),c.classList.toggle("text-gray-700",!u)}),e.querySelectorAll("[data-autoscale-panel]").forEach(c=>c.classList.toggle("hidden",c.dataset.autoscalePanel!==o));const T=_a.some(c=>c.key===o);e.querySelectorAll("[data-autoscale-workload-actions]").forEach(c=>c.classList.toggle("hidden",!T))};e.querySelectorAll("[data-autoscale-tab]").forEach(f=>{f.id=`autoscale-tab-${f.dataset.autoscaleTab}`,f.onclick=()=>w(f.dataset.autoscaleTab)}),w(o);const y=()=>{try{const f=Bl({...x(),enabled:!1},l);e.querySelector("#as-cost-tags").innerHTML=[["day","รายวัน"],["week","รายสัปดาห์"],["month","รายเดือน"]].map(([T,c])=>{const u=f[T];return`<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${c} (${u.days} วัน)</span><strong>$${u.usd.toFixed(4)}</strong><span class="block text-xs">Micro ${u.microHours.toFixed(1)} ชม. · Small ${u.smallHours.toFixed(1)} ชม. · Medium ${u.mediumHours.toFixed(1)} ชม.</span></span>`}).join("")}catch{const f=e.querySelector("#as-cost-tags");f&&(f.textContent="กรุณากรอกวันที่ เวลา วัน และระดับเครื่องให้ครบเพื่อคำนวณ")}};e.querySelector("#as-cost-date").onchange=f=>{l=f.target.value,y()},e.querySelector("#as-form").addEventListener("input",y),y();const v=async f=>{try{const T=f===!1?{...s,enabled:!1}:{...x(),enabled:f===!0?!0:s.enabled},c=et(T);if(!a||c.enabled&&n.mode!=="schedule")throw new Error("backend ยังไม่พร้อมสำหรับ schema ตารางใหม่ กรุณา deploy autoscale-tick แล้วกดรีเฟรชสถานะก่อน");e.querySelectorAll("button").forEach(B=>{B.disabled=!0});const{error:u}=await le.from("system_config").upsert({key:"autoscaleSchedule",value:JSON.stringify(c),updated_at:new Date().toISOString()},{onConflict:"key"});if(u)throw u;s={...c,guardrail:hs(c.guardrail)},r(),N("บันทึกแล้ว มีผลในรอบตรวจถัดไป","success")}catch(T){N(De(T.message),"error"),e.querySelectorAll("button").forEach(c=>{c.disabled=!1})}};e.querySelector("#as-form").onsubmit=f=>{f.preventDefault(),v()},e.querySelector("#as-enable").onclick=()=>v(!0),e.querySelector("#as-disable").onclick=()=>v(!1),e.querySelector("#as-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Aa()},e.querySelector("#as-add").onclick=()=>{s=et({...x(),enabled:!1}),s.rules.push(vs()),r()},e.querySelector("#as-weekday-template").onclick=()=>{s=et({...x(),enabled:!1}),s.rules=[vs()],r()},e.querySelectorAll("[data-remove-rule]").forEach(f=>f.onclick=()=>{s=et({...x(),enabled:!1});const T=f.closest("[data-rule]");s.rules.splice(Number(T.dataset.rule),1),r()}),e.querySelectorAll("[data-duplicate-rule]").forEach(f=>f.onclick=()=>{s=et({...x(),enabled:!1});const T=f.closest("[data-rule]"),c={...s.rules[Number(T.dataset.rule)],id:`rule-${Date.now()}`,label:`${s.rules[Number(T.dataset.rule)].label||"ช่วงเวลา"} สำเนา`};s.rules.splice(Number(T.dataset.rule)+1,0,c),r()}),e.querySelectorAll("[data-day-toggle]").forEach(f=>f.onclick=()=>{const T=f.dataset.selected!=="true";f.dataset.selected=String(T),f.className=qa(T),y()}),e.querySelectorAll("[data-day-preset]").forEach(f=>f.onclick=()=>{const T=f.closest("[data-rule]"),c=f.dataset.dayPreset==="all"?[0,1,2,3,4,5,6]:[1,2,3,4,5];T.querySelectorAll("[data-day-toggle]").forEach(u=>{const B=c.includes(Number(u.dataset.dayToggle));u.dataset.selected=String(B),u.className=qa(B)}),y()}),e.querySelector("#workload-save").onclick=async()=>{try{e.querySelectorAll("button").forEach(f=>{f.disabled=!0}),t=gs({schemaVersion:1,timezone:"Asia/Bangkok",features:Object.fromEntries([...e.querySelectorAll("[data-workload-feature]")].map(f=>{var T,c;return[f.dataset.workloadFeature,{mode:f.querySelector("[name=mode]").value,dateFrom:((T=f.querySelector("[name=dateFrom]"))==null?void 0:T.value)||null,dateTo:((c=f.querySelector("[name=dateTo]"))==null?void 0:c.value)||null,start:f.querySelector("[name=start]").value,end:f.querySelector("[name=end]").value,bufferBefore:Number(f.querySelector("[name=bufferBefore]").value||0),bufferAfter:Number(f.querySelector("[name=bufferAfter]").value||0),days:[...f.querySelectorAll("input[type=checkbox][name^=day-]")].map(u=>u.checked)}]}))}),await il(t),N("บันทึก Workload Control แล้ว","success"),r()}catch(f){N(De(f.message),"error"),e.querySelectorAll("button").forEach(T=>{T.disabled=!1})}},e.querySelector("#workload-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Aa()}};r()}const Dl=1e3,Hl=250,Rl=6e4,ir="pp5-full-backup",cr=1,Ol="pp5-full-backup-state",xt="sessions",Pl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];class ur{constructor(){this.state=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytes=0}update(s){this.bytes+=s.byteLength;let t=0;if(this.bufferLength){const n=Math.min(64-this.bufferLength,s.byteLength);this.buffer.set(s.subarray(0,n),this.bufferLength),this.bufferLength+=n,t+=n,this.bufferLength===64&&(this.process(this.buffer),this.bufferLength=0)}for(;t+64<=s.byteLength;)this.process(s.subarray(t,t+64)),t+=64;return t<s.byteLength&&(this.buffer.set(s.subarray(t),0),this.bufferLength=s.byteLength-t),this}process(s){const t=new Uint32Array(64);for(let p=0;p<16;p++){const w=p*4;t[p]=(s[w]<<24|s[w+1]<<16|s[w+2]<<8|s[w+3])>>>0}for(let p=16;p<64;p++){const w=t[p-15],y=t[p-2],v=(w>>>7|w<<25)^(w>>>18|w<<14)^w>>>3,f=(y>>>17|y<<15)^(y>>>19|y<<13)^y>>>10;t[p]=t[p-16]+v+t[p-7]+f>>>0}let[n,l,o,x,r,d,i,a]=this.state;for(let p=0;p<64;p++){const w=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),y=r&d^~r&i,v=a+w+y+Pl[p]+t[p]>>>0,f=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),T=n&l^n&o^l&o,c=f+T>>>0;a=i,i=d,d=r,r=x+v>>>0,x=o,o=l,l=n,n=v+c>>>0}this.state[0]=this.state[0]+n>>>0,this.state[1]=this.state[1]+l>>>0,this.state[2]=this.state[2]+o>>>0,this.state[3]=this.state[3]+x>>>0,this.state[4]=this.state[4]+r>>>0,this.state[5]=this.state[5]+d>>>0,this.state[6]=this.state[6]+i>>>0,this.state[7]=this.state[7]+a>>>0}hex(){const s=this.bytes*8,t=this.bufferLength<56?56-this.bufferLength:120-this.bufferLength,n=new Uint8Array(t+8);n[0]=128;const l=Math.floor(s/4294967296),o=s>>>0;return n[n.length-8]=l>>>24&255,n[n.length-7]=l>>>16&255,n[n.length-6]=l>>>8&255,n[n.length-5]=l&255,n[n.length-4]=o>>>24&255,n[n.length-3]=o>>>16&255,n[n.length-2]=o>>>8&255,n[n.length-1]=o&255,this.update(n),[...this.state].map(x=>x.toString(16).padStart(8,"0")).join("")}}function Va(e){return String(e??"").replace(/[^0-9A-Za-zก-๙._-]+/g,"-").replace(/^-+|-+$/g,"")||"pp5"}function zl(){return pr("full")}function Fl(){return pr("term")}function pr(e){if(typeof window>"u"||typeof window.showSaveFilePicker!="function")return null;const s=`pp5-${e}-backup-${Va(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;let t;try{t=window.showSaveFilePicker({suggestedName:s,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})}catch(l){t=Promise.reject(l)}const n=t.then(l=>({fileHandle:l}),l=>({error:l}));return{fileName:s,fileHandlePromise:n}}async function da(e){const s=new ur,t=e.stream().getReader();for(;;){const{value:n,done:l}=await t.read();if(l)break;n!=null&&n.byteLength&&s.update(n)}return s.hex()}function mr(e,s){const t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=s,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1500)}function Ga(){return new Promise((e,s)=>{if(typeof indexedDB>"u")return e(null);const t=indexedDB.open(Ol,1);t.onupgradeneeded=()=>t.result.createObjectStore(xt,{keyPath:"id"}),t.onsuccess=()=>e(t.result),t.onerror=()=>s(t.error??new Error("เปิดพื้นที่บันทึกจุดสำรองข้อมูลไม่สำเร็จ"))})}async function ia(e="active"){const s=await Ga();return s?new Promise((t,n)=>{const l=s.transaction(xt,"readonly").objectStore(xt).get(e);l.onsuccess=()=>{s.close(),t(l.result??null)},l.onerror=()=>{s.close(),n(l.error)}}):null}async function tt(e,s=e.id??"active"){const t=await Ga();return t?new Promise((n,l)=>{const o=t.transaction(xt,"readwrite").objectStore(xt).put({...e,id:s});o.onsuccess=()=>{t.close(),n(!0)},o.onerror=()=>{t.close(),l(o.error)}}):!1}async function ca(e="active"){const s=await Ga();if(s)return new Promise((t,n)=>{const l=s.transaction(xt,"readwrite").objectStore(xt).delete(e);l.onsuccess=()=>{s.close(),t()},l.onerror=()=>{s.close(),n(l.error)}})}async function Ma(e){if(!e)throw new Error("ไม่พบไฟล์สำรองเดิมสำหรับทำต่อ");const s={mode:"readwrite"};if(typeof e.queryPermission=="function"&&await e.queryPermission(s)!=="granted"&&(typeof e.requestPermission!="function"||await e.requestPermission(s)!=="granted"))throw new Error("ไม่ได้รับสิทธิ์เขียนไฟล์สำรองเดิม กรุณาอนุญาตการเข้าถึงไฟล์แล้วลองใหม่");try{await e.getFile()}catch(t){if((t==null?void 0:t.name)==="NotFoundError"){const n=new Error("ไม่พบไฟล์สำรองเดิมแล้ว กรุณาล้างงานสำรองค้างและเลือกตำแหน่งไฟล์ใหม่");throw n.code="BACKUP_FILE_MISSING",n}throw t}}async function Ul(e){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง");const s=new CompressionStream("gzip"),t=s.writable.getWriter();return await t.write(new TextEncoder().encode(e)),await t.close(),new Uint8Array(await new Response(s.readable).arrayBuffer())}async function Zt(e,s=0){let t=s;return{get offset(){return t},async write(n){const l=await Ul(n),o=await e.createWritable({keepExistingData:!0});try{await o.truncate(t),await o.seek(t),await o.write(l),await o.close(),t+=l.byteLength}catch(x){try{await o.abort()}catch{}throw x}},async close(){},async abort(){}}}async function ct(e,s,t,{timeoutMs:n=Rl}={}){for(let o=1;o<=4;o+=1){const x=typeof AbortController<"u"?new AbortController:null,r=Date.now();let d,i;try{t==null||t(`กำลังติดต่อฐานข้อมูล: ${s} · ครั้งที่ ${o}/4`);const a=Promise.resolve().then(()=>e(x==null?void 0:x.signal));let p;return n>0&&(p=new Promise((w,y)=>{d=setTimeout(()=>{x==null||x.abort();const v=new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`);v.code="BACKUP_REQUEST_TIMEOUT",y(v)},n)})),i=setInterval(()=>{const w=Math.floor((Date.now()-r)/1e3);t==null||t(`กำลังรอฐานข้อมูลตอบกลับ: ${s} · ${w} วินาที · ครั้งที่ ${o}/4`)},1e4),await(p?Promise.race([a,p]):a)}catch(a){const p=x!=null&&x.signal.aborted?Object.assign(new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`),{code:"BACKUP_REQUEST_TIMEOUT"}):a;if(o>=4)throw p;t==null||t(`${(p==null?void 0:p.message)||`เชื่อมต่อ ${s} ไม่สำเร็จ`} · กำลังลองใหม่ครั้งที่ ${o}/3...`),await new Promise(w=>setTimeout(w,750*2**(o-1)))}finally{clearTimeout(d),clearInterval(i)}}}async function $a(){var t,n,l,o;const e=await ia().catch(()=>null);if(!e)return null;const s=xr(e);return{fileName:e.fileName,phase:e.phase,tableIndex:e.tableIndex??0,tableCount:((t=e.catalog)==null?void 0:t.length)??0,tableName:((l=(n=e.catalog)==null?void 0:n[e.tableIndex])==null?void 0:l.table_name)??null,rowOffset:e.tableCount??e.tableOffset??0,storageIndex:e.storageIndex??0,storageCount:((o=e.storageObjects)==null?void 0:o.length)??0,progress:s}}async function Vl(){await ca()}function Xt(e,s){return`term:${Number(e)}:${Number(s)}`}async function ws(e,s){const t=await ia(Xt(e,s)).catch(()=>null);return t!=null&&t.fileHandle?{fileName:t.fileName,academicYear:t.academicYear,semester:t.semester,counts:t.counts??{},completedRows:Object.values(t.counts??{}).reduce((n,l)=>n+Number(l||0),0)+Number(t.tableCount||0),totalRows:Object.values(t.expectedCounts??{}).reduce((n,l)=>n+Number(l||0),0)}:null}async function Gl(e,s){await ca(Xt(e,s))}function xr(e,s={}){var f;const t=(e==null?void 0:e.catalog)??[],n=(e==null?void 0:e.counts)??{},l=s.phase??(e==null?void 0:e.phase)??"tables",o=s.tableIndex??(e==null?void 0:e.tableIndex)??0,x=s.tableCount??(e==null?void 0:e.tableCount)??0,r=s.storageIndex??(e==null?void 0:e.storageIndex)??0,d=s.storageCount??((f=e==null?void 0:e.storageObjects)==null?void 0:f.length)??0,i=t.map(T=>Math.max(Number(T.estimated_rows)||0,0)),a=i.reduce((T,c)=>T+c,0),p=i.slice(0,o).reduce((T,c,u)=>{var B;return T+(c||Number(n[(B=t[u])==null?void 0:B.table_name])||0)},0),w=i[o]||0,y=a>0?Math.min(1,(p+Math.min(x,w||x))/a):t.length>0?Math.min(1,(o+(x>0?.5:0))/t.length):0;return{percent:l==="tables"?Math.min(89,Math.round(y*90)):l==="storage"?Math.min(99,90+(d>0?Math.round(r/d*9):0)):l==="finalizing"?99:0,estimatedTotalRows:a,completedRows:p+x,currentTableRows:x,currentTableEstimate:w,tableIndex:o,tableCount:t.length,storageIndex:r,storageCount:d}}function Wl(e){const s=new Map(e.map(o=>[o.table_name,o])),t=new Map,n=[],l=o=>{var x;if(t.get(o)!==2&&t.get(o)!==1){t.set(o,1);for(const r of((x=s.get(o))==null?void 0:x.depends_on)??[])s.has(r)&&l(r);t.set(o,2),n.push(s.get(o))}};for(const o of e)l(o.table_name);return n.filter(Boolean)}async function gr(e,s=null){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง กรุณาใช้ Chrome, Edge หรือ Safari รุ่นปัจจุบัน");const t=new CompressionStream("gzip"),n=t.writable.getWriter();if(s||typeof window<"u"&&typeof window.showSaveFilePicker=="function"){const d=await(s??await window.showSaveFilePicker({suggestedName:e,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})).createWritable(),[i,a]=t.readable.tee(),p=i.pipeTo(d),w=new ur;let y=0;const v=(async()=>{const f=a.getReader();for(;;){const{value:T,done:c}=await f.read();if(c)break;T!=null&&T.byteLength&&(w.update(T),y+=T.byteLength)}})();return{async write(f){await n.write(new TextEncoder().encode(f))},async close(){return await n.close(),await Promise.all([p,v]),{blob:null,sha256:w.hex(),byteSize:y,savedToDisk:!0}},async abort(){try{await n.abort()}catch{}try{await d.abort()}catch{}}}}const l=[],o=t.readable.getReader(),x=(async()=>{for(;;){const{value:r,done:d}=await o.read();if(d)break;r!=null&&r.byteLength&&l.push(r)}})();return{async write(r){await n.write(new TextEncoder().encode(r))},async close(){await n.close(),await x;const r=new Blob(l,{type:"application/gzip"});return{blob:r,sha256:await da(r),byteSize:r.size,savedToDisk:!1}}}}async function ka(e,s=null){s==null||s("ส่งคำขอรายการตารางไปยังฐานข้อมูล");const{data:t,error:n}=await le.rpc("admin_full_backup_catalog").abortSignal(e);if(n)throw n;const l=Array.isArray(t)?t:[];if(!l.length)throw new Error("ไม่พบรายการข้อมูลสำหรับสำรอง");s==null||s(`ได้รับรายการ ${l.length.toLocaleString()} ตารางแล้ว · กำลังจัดลำดับความสัมพันธ์`);const o=Wl(l);if(o.length!==l.length)throw new Error("จัดเตรียมรายการตารางสำรองไม่ครบ");return s==null||s("จัดลำดับตารางแล้ว · กำลังเตรียมไฟล์สำรอง"),o}async function Yl(e,s,t){const{data:n,error:l}=await le.rpc("admin_full_backup_read_cursor",{p_table:e,p_cursor:s||null,p_limit:Dl}).abortSignal(t);if(l)throw l;const o=n&&typeof n=="object"&&!Array.isArray(n)?n:{rows:Array.isArray(n)?n:[],next_cursor:null,has_more:!1};return{rows:Array.isArray(o.rows)?o.rows:[],nextCursor:o.next_cursor||null,hasMore:!!o.has_more}}function _s(e,s,t,n,l,o={}){if(!e)return;e(n,l,xr(s??{catalog:t,counts:{}},o))}async function Kl(e){const{data:s,error:t}=await le.rpc("admin_full_backup_storage_catalog").abortSignal(e);if(t)throw t;return s??{buckets:[],objects:[]}}async function Jl(e){const s=await new Promise((t,n)=>{const l=new FileReader;l.onload=()=>t(l.result),l.onerror=()=>n(l.error??new Error("อ่านไฟล์ Storage ไม่สำเร็จ")),l.readAsDataURL(e)});return String(s).split(",",2)[1]??""}function Ql(e,s="application/octet-stream"){const t=atob(e),n=new Uint8Array(t.length);for(let l=0;l<t.length;l++)n[l]=t.charCodeAt(l);return new Blob([n],{type:s})}async function Zl({onProgress:e,saveTarget:s=null}={}){var a,p,w,y;let t=await ia().catch(()=>null),n,l,o,x=null,r=!1;if(t!=null&&t.fileHandle){if(e==null||e("ตรวจสอบสิทธิ์เข้าถึงไฟล์สำรองเดิม"),await Ma(t.fileHandle),n=t.catalog??await ka(void 0,v=>e==null?void 0:e(v)),n.some(v=>v.estimated_rows==null)){const v=await ct(T=>ka(T,c=>e==null?void 0:e(c)),"สถิติรายการตาราง",e);v.length===n.length&&v.every((T,c)=>{var u;return T.table_name===((u=n[c])==null?void 0:u.table_name)})&&(n=v,t.catalog=v)}l=t.fileName,x=t.fileHandle,r=!0,o=await Zt(x,t.byteOffset??0),t.status="running",await tt(t),e==null||e(`กำลังทำสำรองต่อจาก ${t.tableName??"จุดล่าสุด"}`)}else{let v=null;if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรอง...");const{fileHandle:f,error:T}=await s.fileHandlePromise;if(T)throw T;v=f}e==null||e("กำลังอ่านรายการตาราง..."),n=await ct(f=>ka(f,T=>e==null?void 0:e(T)),"รายการตาราง",e),l=(s==null?void 0:s.fileName)??`pp5-full-backup-${Va(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`,v?(e==null||e("ตรวจสอบสิทธิ์เขียนไฟล์สำรอง"),x=v,await Ma(x),r=!0,t={id:"active",status:"running",fileName:l,fileHandle:x,catalog:n,paginationVersion:2,phase:"tables",tableIndex:0,tableCursor:null,tableCount:0,storageObjects:null,storageIndex:0,counts:{},headerWritten:!1,endWritten:!1,byteOffset:0},e==null||e("บันทึกจุดเริ่มต้นสำหรับทำสำรองต่อได้"),await tt(t),o=await Zt(x,0)):o=await gr(l)}const d=(t==null?void 0:t.counts)??{},i=async(v={})=>{!r||!t||(Object.assign(t,v,{byteOffset:o.offset??t.byteOffset??0,updatedAt:new Date().toISOString()}),await tt(t))};try{t!=null&&t.headerWritten||(await o.write(JSON.stringify({format:ir,version:cr,created_at:new Date().toISOString(),scope:"all-public-application-tables",note:"รวมข้อมูลแอปพลิเคชันทั้งหมดใน public schema และไฟล์ใน Supabase Storage ไม่รวม auth.users รหัสผ่าน และระบบภายใน Supabase",catalog:n.map(h=>({table_name:h.table_name,depends_on:h.depends_on??[]}))})+`
`),await i({headerWritten:!0}));const v=r?t.tableIndex??0:0;for(let h=v;h<n.length;h+=1){const I=n[h];let E=r&&h===v?t.tableCursor??null:null,A=r&&h===v?t.tableCount??0:0;for(;;){const j=await ct(g=>Yl(I.table_name,E,g),`ข้อมูล ${I.table_name}`,e),b=j.rows;if(b.length){const g=b.map(m=>JSON.stringify({kind:"row",table:I.table_name,row:m})).join(`
`)+`
`;await o.write(g),E=j.nextCursor,A+=b.length,await i({phase:"tables",tableIndex:h,tableCursor:E,tableCount:A})}if(_s(e,t,n,`สำรอง ${I.table_name} (${h+1}/${n.length})`,A,{phase:"tables",tableIndex:h,tableCount:A}),!j.hasMore)break}d[I.table_name]=A,await i({phase:"tables",tableIndex:h+1,tableCursor:null,tableCount:0,counts:d})}let f=t==null?void 0:t.storageObjects;f||(f=(await ct(I=>Kl(I),"รายการไฟล์ Storage",e)).objects??[],await i({phase:"storage",storageObjects:f,storageIndex:0}));const T=r?t.storageIndex??0:0;for(let h=T;h<f.length;h+=1){const I=f[h],E=await ct(async()=>{const{data:b,error:g}=await le.storage.from(I.bucket_id).download(I.name);if(g)throw new Error(`สำรองไฟล์ Storage ${I.bucket_id}/${I.name} ไม่สำเร็จ: ${g.message}`);return b},`ไฟล์ ${I.bucket_id}/${I.name}`,e,{timeoutMs:0}),A=await Jl(E);await o.write(JSON.stringify({kind:"storage",bucket:I.bucket_id,name:I.name,content_type:E.type||((a=I.metadata)==null?void 0:a.mimetype)||"application/octet-stream",data:A})+`
`);const j=`storage:${I.bucket_id}`;d[j]=(d[j]??0)+1,await i({phase:"storage",storageIndex:h+1,counts:d}),_s(e,t,n,`สำรองไฟล์ ${I.bucket_id} (${h+1}/${f.length})`,d[j],{phase:"storage",storageIndex:h+1,storageCount:f.length})}t!=null&&t.endWritten||(await o.write(JSON.stringify({kind:"end",counts:d})+`
`),await i({phase:"finalizing",endWritten:!0,counts:d}));let c;if(r){const h=await x.getFile();c={blob:null,sha256:await da(h),byteSize:h.size,savedToDisk:!0}}else c=await o.close();const{data:u,error:B}=await le.rpc("admin_record_full_backup",{p_file_name:l,p_byte_size:c.byteSize,p_sha256:c.sha256,p_table_counts:d});if(B)throw B;return c.blob&&mr(c.blob,l),await ca(),{backupId:u==null?void 0:u.id,fileName:l,byteSize:c.byteSize,sha256:c.sha256,counts:d,tableCount:n.length,savedToDisk:c.savedToDisk}}catch(v){throw r&&t&&(t.status="paused",await tt(t).catch(()=>{})),await((y=(p=o==null?void 0:o.abort)==null?void 0:(w=p.call(o)).catch)==null?void 0:y.call(w,()=>{})),v}}async function Xl({onProgress:e,saveTarget:s=null,resume:t=!1,academicYear:n,semester:l}={}){var p,w,y,v,f;let o=null,x=null,r=null,d=!1,i,a=(s==null?void 0:s.fileName)??`pp5-term-backup-${Va(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;try{if(t){if(r=await ia(Xt(n,l)).catch(()=>null),!r)throw new Error("ไม่พบงานสำรองภาคเรียนที่ทำต่อได้ กรุณาเริ่มสำรองใหม่");await Ma(r.fileHandle),i=r.manifest,a=r.fileName,x=r.fileHandle,d=!0,o=await Zt(x,r.byteOffset??0),e==null||e(`ทำสำรองต่อจาก ${r.table??"จุดล่าสุด"}`)}else if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรองภาคเรียน");const{fileHandle:g,error:m}=await s.fileHandlePromise;if(m)throw m;x=g}i||(i=await ct(async g=>{const{data:m,error:k}=await le.rpc("admin_term_backup_catalog").abortSignal(g);if(k)throw k;return m},"สรุปข้อมูลภาคเรียน",e));const T={attendances:Number((p=i==null?void 0:i.counts)==null?void 0:p.attendances),prayer_records:Number((w=i==null?void 0:i.counts)==null?void 0:w.prayer_records)};if(!Number.isInteger(i==null?void 0:i.academic_year)||![1,2].includes(Number(i==null?void 0:i.semester))||!Number.isSafeInteger(T.attendances)||T.attendances<0||!Number.isSafeInteger(T.prayer_records)||T.prayer_records<0)throw new Error("ข้อมูลสรุปสำหรับสำรองภาคเรียนไม่ถูกต้อง");if(r&&(Number(r.academicYear)!==Number(i.academic_year)||Number(r.semester)!==Number(i.semester)||JSON.stringify(r.expectedCounts)!==JSON.stringify(T)))throw new Error("ข้อมูลภาคเรียนเปลี่ยนจากตอนเริ่มสำรอง กรุณาล้างงานค้างและเริ่มใหม่เพื่อป้องกันไฟล์ไม่ครบ");const c=T.attendances+T.prayer_records;if(!x&&c>1e5)throw new Error("ข้อมูลมีขนาดใหญ่ กรุณาใช้ Chrome หรือ Edge ที่รองรับการเลือกตำแหน่งไฟล์โดยตรง");o||(e==null||e("ได้รับจำนวนข้อมูลแล้ว · กำลังเตรียมไฟล์สำรอง"),o=x?await Zt(x,0):await gr(a),d=!!x,d&&(r={id:Xt(i.academic_year,i.semester),status:"running",fileName:a,fileHandle:x,manifest:i,academicYear:Number(i.academic_year),semester:Number(i.semester),expectedCounts:T,counts:{},tableIndex:0,cursor:null,tableCount:0,byteOffset:0,headerWritten:!1},await tt(r)));const u=(r==null?void 0:r.counts)??{},B=Object.values(u).reduce((g,m)=>g+Number(m||0),0)+(d?Number(r.tableCount||0):0);r!=null&&r.headerWritten||(await o.write(JSON.stringify({format:"pp5-term-backup",version:1,created_at:new Date().toISOString(),scope:"term-rollover-source-data",academic_year:Number(i.academic_year),semester:Number(i.semester),semester_start:i.semester_start??null,semester_end:i.semester_end??null,expected_counts:T,tables:["attendances","prayer_records"]})+`
`),d&&(r.byteOffset=o.offset,r.headerWritten=!0,await tt(r)));let h=B;const I=d?Number(r.tableIndex??0):0,E=["attendances","prayer_records"];for(let g=I;g<E.length;g+=1){const m=E[g];let k=d&&g===I?r.cursor??null:null,_=d&&g===I?Number(r.tableCount??0):0;do{const $=await ct(async q=>{const{data:D,error:L}=await le.rpc("admin_term_backup_read_cursor",{p_table:m,p_academic_year:Number(i.academic_year),p_semester:Number(i.semester),p_cursor:k,p_limit:1e3}).abortSignal(q);if(L)throw L;return D},`ข้อมูล ${m}`,e),S=Array.isArray($==null?void 0:$.rows)?$.rows:[];if($!=null&&$.has_more&&(!S.length||!$.next_cursor))throw new Error(`อ่านข้อมูล ${m} ไม่ต่อเนื่อง ระบบหยุดเพื่อป้องกันไฟล์ไม่ครบ`);if(S.length){await o.write(S.map(D=>JSON.stringify({kind:"row",table:m,row:D})).join(`
`)+`
`),_+=S.length,h+=S.length,k=$.next_cursor;const q=c>0?Math.min(98,Math.floor(h/c*98)):98;e==null||e(`สำรอง ${m} · ${_.toLocaleString()}/${T[m].toLocaleString()} รายการ`,_,{percent:q,completedRows:h,totalRows:c,table:m}),d&&(r.tableIndex=g,r.table=m,r.cursor=k,r.tableCount=_,r.counts=u,r.byteOffset=o.offset,r.updatedAt=new Date().toISOString(),await tt(r))}if(!($!=null&&$.has_more))break}while(!0);if(_!==T[m])throw new Error(`จำนวนข้อมูล ${m} ไม่ตรงกับที่ตรวจนับไว้ (${_.toLocaleString()}/${T[m].toLocaleString()}) กรุณาสำรองใหม่`);u[m]=_,d&&(r.tableIndex=g+1,r.table=E[g+1]??"ตรวจสอบไฟล์",r.cursor=null,r.tableCount=0,r.counts=u,r.byteOffset=o.offset,await tt(r))}await o.write(JSON.stringify({kind:"end",counts:u})+`
`),e==null||e("อ่านข้อมูลครบแล้ว · กำลังปิดและตรวจสอบไฟล์");let A;if(d){await o.close();const g=await x.getFile();A={blob:null,sha256:await da(g),byteSize:g.size,savedToDisk:!0}}else A=await o.close();if(!A.byteSize||!/^[0-9a-f]{64}$/.test(A.sha256))throw new Error("ตรวจสอบขนาดหรือค่า SHA-256 ของไฟล์ไม่ผ่าน");const{data:j,error:b}=await le.rpc("admin_record_term_backup",{p_academic_year:Number(i.academic_year),p_semester:Number(i.semester),p_semester_start:i.semester_start??null,p_semester_end:i.semester_end??null,p_file_name:a,p_byte_size:A.byteSize,p_sha256:A.sha256,p_table_counts:u});if(b)throw b;return A.blob&&mr(A.blob,a),d&&(r!=null&&r.id)&&await ca(r.id),{backupId:j==null?void 0:j.id,fileName:a,byteSize:A.byteSize,sha256:A.sha256,counts:u,academicYear:Number(i.academic_year),semester:Number(i.semester),savedToDisk:A.savedToDisk}}catch(T){throw d&&(r!=null&&r.id)&&(r.status="paused",await tt(r).catch(()=>{})),await((f=(y=o==null?void 0:o.abort)==null?void 0:(v=y.call(o)).catch)==null?void 0:f.call(v,()=>{})),T}}async function*ed(e){var o;if(!((o=e==null?void 0:e.name)!=null&&o.endsWith(".gz"))&&(e==null?void 0:e.type)!=="application/gzip")throw new Error("กรุณาเลือกไฟล์สำรอง .jsonl.gz ที่สร้างจากระบบ ปพ.5");const t=e.stream().pipeThrough(new DecompressionStream("gzip")).getReader(),n=new TextDecoder;let l="";for(;;){const{value:x,done:r}=await t.read();if(r)break;l+=n.decode(x,{stream:!0});const d=l.split(`
`);l=d.pop()??"";for(const i of d)i.trim()&&(yield i)}l+=n.decode(),l.trim()&&(yield l)}async function td(e,s){if(!s.length)return;const{error:t}=await le.rpc("admin_full_backup_restore_table",{p_table:e,p_rows:s});if(t)throw t}async function ad(e,s,t,n){if(!s.length)return;const{error:l}=await le.rpc("admin_restore_term_backup_table",{p_table:e,p_academic_year:t,p_semester:n,p_rows:s});if(l)throw l}async function sd(e){const s=Ql(e.data,e.content_type),{error:t}=await le.storage.from(e.bucket).upload(e.name,s,{upsert:!0,contentType:e.content_type||"application/octet-stream"});if(t)throw t}async function rd(e,{onProgress:s}={}){var w,y;const t=await da(e),{data:n,error:l}=await le.from("academic_term_backups").select("id, file_name, byte_size, backup_scope, academic_year, semester, table_counts").eq("sha256",t).eq("status","verified").maybeSingle();if(l)throw l;if(!n)throw new Error("ไฟล์นี้ไม่ตรงกับไฟล์ Full Backup ที่ระบบเคยบันทึกไว้");let o=null,x=null,r=!1,d=[];const i={},a=async()=>{!x||!d.length||(r?await ad(x,d,o.academic_year,o.semester):await td(x,d),i[x]=(i[x]??0)+d.length,s==null||s(`กู้คืน ${x}`,i[x]),d=[])};for await(const v of ed(e)){const f=JSON.parse(v);if(!f.kind&&(f.format===ir||f.format==="pp5-term-backup")){if(o=f,r=f.format==="pp5-term-backup",r){if(o.version!==1||o.scope!=="term-rollover-source-data"||n.backup_scope!=="term"||Number(n.academic_year)!==Number(o.academic_year)||Number(n.semester)!==Number(o.semester)||!Array.isArray(o.tables)||o.tables.length!==2||!o.tables.includes("attendances")||!o.tables.includes("prayer_records"))throw new Error("ไฟล์สำรองภาคเรียนหรือข้อมูลลงทะเบียนไม่ตรงกัน")}else if(o.version!==cr||o.scope!=="all-public-application-tables"||n.backup_scope!=="full")throw new Error("เวอร์ชันหรือขอบเขตไฟล์สำรองไม่รองรับ");continue}if(f.kind!=="end"){if(f.kind==="storage"){await a(),await sd(f);const T=`storage:${f.bucket}`;i[T]=(i[T]??0)+1,s==null||s(`กู้คืนไฟล์ ${f.bucket}`,i[T]);continue}if(f.kind!=="row"||!f.table||!f.row)throw new Error("รูปแบบไฟล์สำรองไม่ถูกต้อง");if(r&&!["attendances","prayer_records"].includes(f.table))throw new Error("ไฟล์สำรองภาคเรียนมีตารางนอกขอบเขตที่อนุญาต");x!==f.table&&(await a(),x=f.table),d.push(f.row),d.length>=Hl&&await a()}}if(await a(),!o)throw new Error("ไม่พบหัวไฟล์สำรอง");if(r){for(const v of["attendances","prayer_records"])if(Number(i[v]??0)!==Number(((w=o.expected_counts)==null?void 0:w[v])??-1)||Number(i[v]??0)!==Number(((y=n.table_counts)==null?void 0:y[v])??-2))throw new Error(`จำนวนข้อมูล ${v} ในไฟล์ไม่ตรงกับรายการสำรองที่ระบบรับรองไว้`)}const{error:p}=await le.from("academic_term_backups").update({restored_at:new Date().toISOString()}).eq("id",n.id);return p&&console.warn("บันทึกประวัติการกู้คืนไม่สำเร็จ:",p),{counts:i,sha256:t,createdAt:o.created_at}}async function nd(e,s){const{data:t,error:n}=await le.from("academic_term_backups").select("id, backup_scope, academic_year, semester").eq("status","verified").order("created_at",{ascending:!1}).limit(100);if(n)throw n;const l=(t??[]).find(o=>o.backup_scope==="full"||o.backup_scope==="term"&&Number(o.academic_year)===Number(e)&&Number(o.semester)===Number(s));return(l==null?void 0:l.id)??null}const Re=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function od(e){document.querySelectorAll("[data-nav]").forEach(s=>{const t=s.dataset.nav===e;s.classList.toggle("bg-indigo-800",t),s.classList.toggle("text-white",t),s.classList.toggle("text-indigo-200",!t)})}function Sa(e){document.getElementById("main-content").innerHTML=e}const br={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},ld={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},dd={doc:"📋",dates:"📅",att:"✅",score:"📝"},id={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function Mt(e,s,t,n="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${n} rounded-lg ${ld[t]}" title="${s}">${e}</span>`}function st(e,s,t="w-8 h-8 text-base"){return Mt(dd[e],`${id[e]}: ${br[s]}`,s,t)}const cd={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function ud(e){return["AGM","AGMVOC"].includes(e)?"ศาสนา":e==="ACDMVOC"?"สามัญปวช":"สามัญ"}function pd(e,s){const t=ud(e.subject_group);return s.find(n=>n.dept_code===e.dept&&n.category===t)??s.find(n=>n.dept_code===e.dept)??s.find(n=>n.dept_name===e.dept)??null}function md(e,s){return e.dept?s.find(t=>t.dept_code===e.dept&&t.category===e.category)??s.find(t=>t.dept_code===e.dept)??null:null}function xd(e,s){return Math.round((new Date(e)-new Date(s))/864e5)}function gd(e,s){const t=e.has_doc_rows?"green":"red",n=e.has_teaching_dates?"green":"red";let l;if(!e.has_teaching_dates||e.day1_date&&e.day1_date>s)l="gray";else if(!e.last_check_date)l="red";else{const x=xd(s,e.last_check_date);l=x<=7?"green":x<=14?"yellow":"red"}let o;if(!e.score_col_count)o="gray";else{const x=e.student_count*e.score_col_count,r=x>0?e.score_filled_count/x:0;o=r>=.8?"green":r>0?"yellow":"red"}return{doc:t,dates:n,att:l,score:o}}function Tt(e){const s=e.filter(t=>t!=="gray");return s.length===0?"gray":s.includes("red")?"red":s.includes("yellow")?"yellow":"green"}function Ea(e){return Object.values(e).some(s=>s==="red"||s==="yellow")}async function bd(){var Y,J;od("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",Sa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let e,s,t,n,l;try{[e,s,t,n,l]=await Promise.all([bn(),ot(),Ne().catch(()=>({})),Pe(),yn(60).catch(()=>null)])}catch(H){Sa(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${Re(he(H))}</p>
    </div>`);return}const o=t.academicYear??t.academic_year??"",x=t.semester??"",r=new Date().toISOString().slice(0,10),d=e.filter(H=>H.subject_id!=null).map(H=>{const U=pd(H,s);return{...H,deptKey:(U==null?void 0:U.id)!=null?`d${U.id}`:`u_${H.dept??"-"}`,deptName:(U==null?void 0:U.dept_name)??H.dept??"ไม่ระบุกลุ่มสาระ",status:gd(H,r)}}),i=new Map;for(const H of d)i.has(H.deptKey)||i.set(H.deptKey,{deptName:H.deptName,rows:[]}),i.get(H.deptKey).rows.push(H);const a=[...i.entries()].map(([H,U])=>({key:H,...U})).sort((H,U)=>H.deptName.localeCompare(U.deptName,"th")),p=new Map;for(const H of d)H.teacher_id!=null&&(p.has(H.teacher_id)||p.set(H.teacher_id,[]),p.get(H.teacher_id).push(H));const w=n.filter(H=>H.staff_type==="ครู").map(H=>{const U=p.get(H.id)??[],X=H.profile_id!=null,Z=U.length,te=Z>0?Tt(U.map(we=>we.status.att)):"gray";let se;if(U[0])se={key:U[0].deptKey,name:U[0].deptName};else{const we=md(H,s);se=we?{key:`d${we.id}`,name:we.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let pe;return X?Z===0?pe=2:te==="red"?pe=1.5:te==="yellow"?pe=1:pe=0:pe=3,{teacherId:H.id,teacherName:H.full_name,deptKey:se.key,deptName:se.name,registered:X,classCount:Z,attWorst:te,severity:pe}}).sort((H,U)=>U.severity-H.severity||H.teacherName.localeCompare(U.teacherName,"th")),y=w.filter(H=>!H.registered).length,v=w.filter(H=>H.registered&&H.classCount===0).length,f=w.filter(H=>H.registered&&H.classCount>0&&(H.attWorst==="red"||H.attWorst==="yellow")).length,T=w.filter(H=>H.severity>0).length;function c(H){const U=d.filter(se=>se.status[H]!=="gray"),X=U.filter(se=>se.status[H]==="green").length,Z=d.length-U.length;return{pct:U.length>0?Math.round(X/U.length*100):null,green:X,total:U.length,grayCount:Z}}const u={doc:c("doc"),dates:c("dates"),att:c("att"),score:c("score")},B=w.length,h=w.filter(H=>H.registered).length,I=w.filter(H=>H.registered&&H.classCount>0).length,E=w.filter(H=>H.registered&&H.classCount>0&&H.attWorst==="green").length,A={registered:{pct:B>0?Math.round(h/B*100):null,num:h,total:B},courses:{pct:h>0?Math.round(I/h*100):null,num:I,total:h},attendance:{pct:I>0?Math.round(E/I*100):null,num:E,total:I}},j=d.filter(H=>Ea(H.status)).length,b=d.length>0?Math.round(j/d.length*100):0;function g(){if(!l)return"";const H=l.rows||[],U=l.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},X=new Date,Z=se=>se.status!=="active"?se.status==="returned"?"กลับแล้ว":"เลยเวลา":bl(se.created_at,se.allowed_duration,X).text,te=H.filter(se=>se.status==="active").slice(0,8);return`
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
        ${te.length?`
          <div class="border-t border-gray-50 divide-y divide-gray-50">
            ${te.map(se=>{var pe,we,me,ce;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${Re(((pe=se.students)==null?void 0:pe.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${Re(((we=se.classes)==null?void 0:we.class_name)||((me=se.students)==null?void 0:me.main_room)||"—")} · ${Re(se.reason||"—")} · ${Re(((ce=se.teachers)==null?void 0:ce.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${Z(se)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let m=null,k="attention",_="",$=null;const S={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function q(){return a.map(H=>{const U={doc:Tt(H.rows.map(te=>te.status.doc)),dates:Tt(H.rows.map(te=>te.status.dates)),att:Tt(H.rows.map(te=>te.status.att)),score:Tt(H.rows.map(te=>te.status.score))},X=H.rows.filter(te=>Ea(te.status)).length,Z=m===H.key;return`
        <button type="button" data-dept-key="${H.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${Z?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${Re(H.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${H.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${st("doc",U.doc)}
            ${st("dates",U.dates)}
            ${st("att",U.att)}
            ${st("score",U.score)}
          </div>
          <p class="text-xs ${X>0?"text-amber-600 font-semibold":"text-emerald-600"}">
            ${X>0?`⚠️ ${X} ห้องต้องตามงาน`:"✅ ปกติทั้งหมด"}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${Z?"🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายละเอียด ▸"}</p>
        </button>`}).join("")}function D(){var Z;const H=m?(Z=a.find(te=>te.key===m))==null?void 0:Z.deptName:null,U=k==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${H?`${U} · ${Re(H)}`:`${U} (ทั้งโรงเรียน)`}</h4>
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
                 ${k==="all"?"bg-indigo-50 text-indigo-600 border-indigo-200":"bg-white text-gray-500 border-gray-200 hover:border-gray-300"}">
          ${k==="all"?"👁️ ดูทั้งหมด":"⚠️ เฉพาะที่ต้องตามงาน"}
        </button>
        ${m?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function L(){let H=d;return k==="attention"&&(H=H.filter(U=>Ea(U.status))),m&&(H=H.filter(U=>U.deptKey===m)),_&&(H=H.filter(U=>(U.class_name??"").toLowerCase().includes(_)||(U.subject_name??"").toLowerCase().includes(_)||(U.teacher_name??"").toLowerCase().includes(_))),H=[...H].sort((U,X)=>{const Z=te=>Object.values(te).reduce((se,pe)=>se+(pe==="red"?2:pe==="yellow"?1:0),0);return Z(X.status)-Z(U.status)}),H.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
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
            ${H.map(U=>`
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${Re(U.class_name)}</p>
                  <p class="text-xs text-gray-400">${Re(U.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${Re(U.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${Re(U.deptName)}</td>
                <td class="px-4 py-2 text-center">${st("doc",U.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${st("att",U.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${st("score",U.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${st("dates",U.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function C(){let H=w;$==="unregistered"?H=H.filter(Z=>!Z.registered):$==="no-courses"?H=H.filter(Z=>Z.registered&&Z.classCount===0):$==="att-behind"?H=H.filter(Z=>Z.registered&&Z.classCount>0&&(Z.attWorst==="red"||Z.attWorst==="yellow")):k==="attention"&&(H=H.filter(Z=>Z.severity>0)),m&&(H=H.filter(Z=>Z.deptKey===m)),_&&(H=H.filter(Z=>(Z.teacherName??"").toLowerCase().includes(_)));const U=$?`${S[$]} (${H.length} คน)`:k==="all"?`ครูผู้สอนทั้งหมด (${H.length}/${w.length} คน)`:`ครูที่ต้องติดตาม (${H.length} คน)`,X=H.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
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
              ${H.map(Z=>`
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${Re(Z.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${Re(Z.deptName)}</td>
                  <td class="px-4 py-2 text-center">${Mt("🔑",Z.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",Z.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Mt("📚",Z.classCount>0?`มีวิชา/ห้องที่สอน ${Z.classCount} ห้อง`:Z.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",Z.classCount>0?"green":Z.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Z.classCount>0?Mt("✅",`เช็คชื่อ: ${br[Z.attWorst]}`,Z.attWorst,"w-7 h-7 text-sm"):Mt("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`;return`
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${U}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${$?'<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>':""}
      </div>
      ${X}`}function O({icon:H,label:U,info:X,pct:Z,numerator:te,denominator:se,unit:pe="ห้อง",extraNote:we="",filterKey:me=null,active:ce=!1}){const $e=Z==null?"text-gray-400":Z>=80?"text-emerald-700":Z>=50?"text-amber-600":"text-red-600",ke=me?"button":"div",je=me?' type="button"':"",He=me?` data-teacher-filter="${me}"`:"";return`
      <${ke}${je}${He} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${me?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${ce?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${Re(X)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${H}</div>
          <p class="text-sm font-semibold text-gray-600">${U} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${$e}">${Z==null?"—":Z+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${se>0?`${te}/${se} ${pe}`:"ไม่มีข้อมูล"}${we}</p>
        ${me?`<p class="text-[10px] text-indigo-400 mt-1">${ce?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${ke}>`}function z(H,U,X){const Z=u[X];return O({icon:H,label:U,info:cd[X],pct:Z.pct,numerator:Z.green,denominator:Z.total,unit:"ห้อง",extraNote:Z.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${Z.grayCount}</span>`:""})}function M(H,U,X,Z,te="",se=null){return O({icon:H,label:U,info:X,pct:Z.pct,numerator:Z.num,denominator:Z.total,unit:"คน",extraNote:te,filterKey:se,active:$===se})}function F(){return`
      ${M("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",A.registered,y>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${y}</span>`:"","unregistered")}
      ${M("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",A.courses,v>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${v}</span>`:"","no-courses")}
      ${M("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",A.attendance,f>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${f}</span>`:"","att-behind")}`}function P(){var H,U,X;document.querySelectorAll(".exec-dept-card").forEach(Z=>{Z.addEventListener("click",()=>{var se;const te=Z.dataset.deptKey;m===te?(m=null,k="attention"):(m=te,k="all"),R(),(se=document.getElementById("exec-table-section"))==null||se.scrollIntoView({behavior:"smooth",block:"start"})})}),(H=document.getElementById("exec-clear-filter"))==null||H.addEventListener("click",()=>{m=null,k="attention",R()}),(U=document.getElementById("exec-toggle-scope"))==null||U.addEventListener("click",()=>{k=k==="all"?"attention":"all",R()}),document.querySelectorAll("[data-teacher-filter]").forEach(Z=>{Z.addEventListener("click",()=>{var se;const te=Z.dataset.teacherFilter;$=$===te?null:te,m=null,_="",R(),(se=document.getElementById("exec-teacher-section"))==null||se.scrollIntoView({behavior:"smooth",block:"start"})})}),(X=document.getElementById("exec-teacher-clear-filter"))==null||X.addEventListener("click",()=>{$=null,R()})}function R(){document.getElementById("exec-teacher-kpi").innerHTML=F(),document.getElementById("exec-dept-cards").innerHTML=q(),document.getElementById("exec-table-header").innerHTML=D(),document.getElementById("exec-class-table").innerHTML=L(),document.getElementById("exec-teacher-section").innerHTML=C();const H=document.getElementById("exec-dept-select");H&&(H.value=m??"");const U=document.getElementById("exec-search");U&&(U.value=_),P()}Sa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${o?`ปีการศึกษา ${Re(o)}`:""}${x?` ภาคเรียนที่ ${Re(x)}`:""}${o||x?" · ":""}ทั้งหมด ${d.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${j>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${j} ห้อง</b> (${b}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${T>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${T} คน</b> ที่ต้องติดตาม
        ${y>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${y}</b> คน`:""}
        ${v>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${v}</b> คน`:""}
        ${f>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${f}</b> คน`:""}
      </p>`:`
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${F()}
    </div>

    ${g()}

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
      ${q()}
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
        ${a.map(H=>`<option value="${H.key}">${Re(H.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${D()}
      </div>
      <div id="exec-class-table">${L()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${C()}
    </div>
  </div>`),(Y=document.getElementById("exec-search"))==null||Y.addEventListener("input",H=>{_=H.target.value.trim().toLowerCase(),R()}),(J=document.getElementById("exec-dept-select"))==null||J.addEventListener("change",H=>{m=H.target.value||null,k=m?"all":"attention",R()}),P()}const yd="regrade.html",fd=()=>{const e=new URL(yd,window.location.href);return e.searchParams.set("v",Uo),e.href},ea=(e,s)=>{e&&(e.textContent=s,clearTimeout(e._regradeStatusTimer),e._regradeStatusTimer=setTimeout(()=>{e.textContent=""},1800))},hd=async(e,s)=>{try{await navigator.clipboard.writeText(e),ea(s,"คัดลอกลิงก์แล้ว")}catch{ea(s,"คัดลอกไม่สำเร็จ")}},vd=async(e,s)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:e});return}await navigator.clipboard.writeText(e),ea(s,"คัดลอกลิงก์แล้ว")}catch{ea(s,"แชร์ไม่สำเร็จ")}};function wd(){var x,r,d,i;(x=document.getElementById("regrade-modal"))==null||x.remove();const e=fd(),s=document.body.style.overflow;document.body.style.overflow="hidden";const t=document.createElement("div");t.id="regrade-modal",t.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",t.innerHTML=`
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
  `;const n=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=s,t.remove(),window.closeRegradeModal===n&&(window.closeRegradeModal=null)},l=a=>{a.key==="Escape"&&n()};document.addEventListener("keydown",l),document.body.appendChild(t),window.closeRegradeModal=n;const o=t.querySelector("[data-regrade-status]");(r=t.querySelector("[data-regrade-close]"))==null||r.addEventListener("click",n),(d=t.querySelector("[data-regrade-copy]"))==null||d.addEventListener("click",()=>hd(e,o)),(i=t.querySelector("[data-regrade-share]"))==null||i.addEventListener("click",()=>vd(e,o))}const ne=(e="")=>String(e??"").replace(/[&<>'"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[s]),$s=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},La=e=>{if(!e)return"";const s=new Date(e);if(Number.isNaN(s.getTime()))return"";const t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`},Lt=()=>document.getElementById("stu-content")||document.getElementById("main-content"),_d="00000000-0000-0000-0000-000000000001",yr=[{code:"SS",chest:34},{code:"S",chest:36},{code:"M",chest:38},{code:"L",chest:40},{code:"XL",chest:42},{code:"2X",chest:44},{code:"3X",chest:46},{code:"4X",chest:48},{code:"5X",chest:50},{code:"6X",chest:52},{code:"7X",chest:54},{code:"8X",chest:56}],be=(e,s="success")=>{const t=document.createElement("div");t.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-3 rounded-xl text-white text-sm shadow-xl ${s==="error"?"bg-red-600":"bg-emerald-600"}`,t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),3e3)},Ct=()=>'<div class="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800"><h3 class="font-bold">ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี</h3><p class="text-sm mt-2">ให้แอดมินรันไฟล์ <code>patch_sports_student_team_portal.sql</code> ใน Supabase SQL Editor</p></div>',wt=(e,s,t,n)=>`<div class="rounded-2xl border p-4 ${n?"bg-emerald-50 border-emerald-200":"bg-slate-50 border-slate-200"}"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-sm text-slate-800">${ne(s)}</h3><p class="text-xs text-slate-500 mt-1">${ne(t)}</p><span class="inline-block mt-3 px-2 py-1 rounded-full text-[11px] font-bold ${n?"bg-emerald-100 text-emerald-700":"bg-slate-200 text-slate-600"}">${n?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span></div><button type="button" data-cfg="${ne(e)}" data-enabled="${n?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${n?"bg-red-50 text-red-700 border border-red-200":"bg-emerald-600 text-white"}">${n?"ปิดใช้งาน":"เปิดใช้งาน"}</button></div></div>`,ks=(e,s,t=!0)=>`<button type="button" data-team-perm="${ne(e)}" data-enabled="${t?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold border ${t?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}">${t?"อนุญาต":"ไม่อนุญาต"}: ${ne(s)}</button>`;(location.pathname.startsWith("/pp5online/")?"/pp5online/":"/")+"";async function ua(e,s,t=1e3){let n=[],l=0;for(;;){const{data:o,error:x}=await s(le.from(e)).range(l,l+t-1);if(x)throw x;if(n=n.concat(o||[]),!o||o.length<t)break;l+=t}return n}async function fr(e){var n;if(!e)return!1;const{data:s}=await le.from("teachers").select("positions,position,staff_type").eq("profile_id",e).maybeSingle();return s?((n=s.positions)!=null&&n.length?s.positions:s.position?[s.position]:[]).includes("house_color_admin")||s.staff_type==="แอดมิน":!1}async function $d(e){const{data:s}=await le.from("settings").select("value").eq("key","public_buttons").maybeSingle(),t=s!=null&&s.value&&typeof s.value=="object"?s.value:{};await le.from("settings").upsert({key:"public_buttons",value:{athlete_size:!1,athlete_registration:!1,athlete_print:!0,athlete_certificate:!0,...t,athlete_size:!!e},description:"Controls which athlete-page actions are visible and usable by public visitors.",updated_at:new Date().toISOString()},{onConflict:"key"})}async function It(){const[{data:e},{data:s},{data:t}]=await Promise.all([le.from("events").select("*").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),le.from("sports_portal_settings").select("*").limit(1).maybeSingle(),le.from("settings").select("value").eq("key","shirt_sizes").maybeSingle()]),n=Array.isArray(t==null?void 0:t.value)&&t.value.length?t.value:yr;return{event:e||{id:_d,name:"AZIZGAMES"},cfg:s,shirtSizes:n}}async function kd(e){const{error:s}=await le.from("settings").upsert({key:"shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}async function Sd(e){const{error:s}=await le.from("settings").upsert({key:"teacher_shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}function hr(e){const s=[];return(e||[]).forEach(t=>{const n=Ss(t.event_date),l=Ss(t.end_date||t.event_date);if(n)for(let o=new Date(n);o<=(l||n);o.setDate(o.getDate()+1))s.push({date:Ed(o),label:t.label})}),s.sort((t,n)=>t.date<n.date?1:-1)}function Ss(e){if(!e)return null;const[s,t,n]=String(e).slice(0,10).split("-").map(Number);return new Date(s,t-1,n)}function Ed(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}async function Ld(e,s){const t=e.querySelector("#sports-gallery-type-admin");if(!t)return;t.innerHTML='<div class="py-8 text-center text-gray-400">กำลังโหลดประเภทภาพกิจกรรม...</div>';const{data:n,error:l}=await le.from("sports_gallery_upload_types").select("*").eq("event_id",s.id).order("event_date",{ascending:!0,nullsFirst:!1}).order("display_order").order("created_at");if(l){t.innerHTML='<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">ยังไม่พร้อมใช้งานส่วนจัดการประเภทภาพกิจกรรม — กรุณารันไฟล์ <code>patch_sports_gallery_upload_types.sql</code> ใน Supabase SQL Editor</div>';return}let o=n||[];const x=()=>{var r;t.innerHTML=`
      <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div><h2 class="font-bold">📸 ประเภทภาพกิจกรรม</h2><p class="text-xs text-gray-500 mt-1">เพิ่มชื่อและวันที่สำหรับให้สต๊าฟเลือกตอนอัปโหลด ปิดใช้งานแล้วรูปเดิมยังอยู่ครบ</p></div>
      </div>
      <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 rounded-2xl bg-slate-50 border p-3 mb-4">
        <input id="gallery-type-new-name" class="border rounded-xl px-3 py-2 text-sm bg-white" placeholder="เช่น บรรยากาศวันเข้าสี วันที่ 2">
        <input id="gallery-type-new-date" type="date" class="border rounded-xl px-3 py-2 text-sm bg-white">
        <button id="gallery-type-add" class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">เพิ่มรายการ</button>
      </div>
      <div class="space-y-2">${o.map(d=>`
        <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 items-center rounded-2xl border p-3 ${d.is_active?"bg-white":"bg-slate-50 opacity-75"}" data-gallery-type-row="${ne(d.id)}">
          <input data-gallery-type-name class="border rounded-xl px-3 py-2 text-sm bg-white" value="${ne(d.name)}">
          <input data-gallery-type-date type="date" class="border rounded-xl px-3 py-2 text-sm bg-white" value="${ne(d.event_date||"")}">
          <div class="flex gap-2 md:justify-end">
            <button data-gallery-type-save="${ne(d.id)}" class="px-3 py-2 rounded-xl border border-indigo-200 text-indigo-700 text-xs font-bold">บันทึกแก้ไข</button>
            <button data-gallery-type-active="${ne(d.id)}" data-active="${d.is_active?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${d.is_active?"border border-red-200 text-red-700 bg-red-50":"bg-emerald-600 text-white"}">${d.is_active?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีประเภทภาพกิจกรรม</p>'}</div>`,(r=t.querySelector("#gallery-type-add"))==null||r.addEventListener("click",async()=>{const d=t.querySelector("#gallery-type-new-name").value.trim(),i=t.querySelector("#gallery-type-new-date").value||null;if(!d)return be("กรุณากรอกชื่อประเภทภาพกิจกรรม","error");const a=t.querySelector("#gallery-type-add");a.disabled=!0;const{data:p,error:w}=await le.from("sports_gallery_upload_types").insert({event_id:s.id,name:d,event_date:i,is_active:!0,display_order:o.length*10}).select("*").single();if(w)return a.disabled=!1,be(w.message,"error");o.push(p),be("เพิ่มประเภทภาพกิจกรรมแล้ว"),x()}),t.querySelectorAll("[data-gallery-type-save]").forEach(d=>d.addEventListener("click",async()=>{const i=t.querySelector(`[data-gallery-type-row="${d.dataset.galleryTypeSave}"]`),a=i.querySelector("[data-gallery-type-name]").value.trim(),p=i.querySelector("[data-gallery-type-date]").value||null;if(!a)return be("ชื่อประเภทต้องไม่ว่าง","error");d.disabled=!0;const{data:w,error:y}=await le.from("sports_gallery_upload_types").update({name:a,event_date:p,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeSave).select("*").single();if(y)return d.disabled=!1,be(y.message,"error");o=o.map(v=>v.id===w.id?w:v),be("บันทึกการแก้ไขแล้ว"),x()})),t.querySelectorAll("[data-gallery-type-active]").forEach(d=>d.addEventListener("click",async()=>{const i=d.dataset.active!=="true";d.disabled=!0;const{data:a,error:p}=await le.from("sports_gallery_upload_types").update({is_active:i,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeActive).select("*").single();if(p)return d.disabled=!1,be(p.message,"error");o=o.map(w=>w.id===a.id?a:w),be(i?"เปิดใช้งานรายการแล้ว":"ปิดใช้งานรายการแล้ว"),x()}))};x()}async function Ye(){var s,t,n,l,o,x,r,d;const e=Lt();e.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>';try{const{event:i,cfg:a,shirtSizes:p}=await It();let w=p.map(b=>({...b}));const{data:y}=await le.from("settings").select("value").eq("key","teacher_shirt_sizes").maybeSingle();let v=(Array.isArray(y==null?void 0:y.value)&&y.value.length?y.value:yr).map(b=>({...b}));const f=await Xs(le),{data:T}=await le.from("profiles").select("role,is_also_admin").eq("id",f).maybeSingle(),c=(T==null?void 0:T.role)==="admin"||(T==null?void 0:T.is_also_admin)===!0||await fr(f);if((a==null?void 0:a.shirt_summary_enabled)===!1&&!c){e.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}const{data:u}=await le.from("sports_team_memberships").select("team_color_id,role,permissions").eq("event_id",i.id).eq("profile_id",f).eq("is_active",!0),B=c||(u||[]).some(b=>b.role==="lead_teacher"),[{data:h},I,{data:E}]=await Promise.all([le.from("team_colors").select("id,name,hex_color").eq("event_id",i.id).order("display_order"),ua("sports_shirt_requests",b=>b.select("status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)").eq("event_id",i.id)),c?le.from("sports_team_identity_requests").select("*,team_colors(name,logo_url)").eq("event_id",i.id).eq("status","pending_admin"):Promise.resolve({data:[]})]),A=p.map(b=>b.code),j=(I||[]).filter(b=>["confirmed","advisor_updated"].includes(b.status));if(e.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${c?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><div class="flex gap-2"><button id="open-sports-overview" type="button" class="px-4 py-2 bg-sky-600 text-white rounded-xl text-sm font-bold">📊 ภาพรวมกีฬาสี</button><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div></div><div class="grid md:grid-cols-4 gap-3">${wt("shirt_request_enabled","รับจำนงไซซ์เสื้อ","นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน",!!(a!=null&&a.shirt_request_enabled))}${wt("shirt_summary_enabled","หน้าสรุปยอดเสื้อ","ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้",!!(a!=null&&a.shirt_summary_enabled))}${wt("team_workspace_enabled","จัดการสีของฉัน","ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้",!!(a!=null&&a.team_workspace_enabled))}${wt("shirt_vote_enabled","โหวตแบบเสื้อกีฬาสี","นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้",!!(a!=null&&a.shirt_vote_enabled))}${wt("teacher_shirt_request_enabled","รับแจ้งไซซ์เสื้อคุณครู","คุณครูจะเห็นปุ่มแจ้งไซซ์ในหน้าภาพรวม แยกจากของนักเรียน",!!(a!=null&&a.teacher_shirt_request_enabled))}</div><div class="grid md:grid-cols-2 gap-3 mt-3"><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">ค่าบำรุงสี (บาท/คน)</h3><p class="text-xs text-gray-500 mt-1">จำนวนเงินเริ่มต้นที่จะบันทึกทุกครั้งที่สแกน QR เก็บค่าบำรุง</p><input id="cfg-dues-amount" type="number" min="0" step="1" value="${Number((a==null?void 0:a.dues_amount)??30)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (%)</h3><p class="text-xs text-gray-500 mt-1">ค่าเริ่มต้นทุกสี — พ่อสี/แม่สีแต่ละคนตั้งค่าเฉพาะสีตัวเองทับได้ในหน้าจัดการสี</p><input id="cfg-cert-threshold" type="number" min="0" max="100" step="1" value="${Number((a==null?void 0:a.cert_attendance_threshold_pct)??80)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div></div></section>`:""}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${(I==null?void 0:I.length)||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(I||[]).filter(b=>b.status==="pending").length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${j.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${A.map(b=>`<th>${ne(b)}</th>`).join("")}<th>รวม</th></tr></thead><tbody>${(h||[]).map(b=>{const g=j.filter(m=>{var k;return((k=m.students)==null?void 0:k.house_color)===b.name});return`<tr class="border-t"><td class="p-3 font-bold" style="color:${b.hex_color}">สี${ne(b.name)}</td>${A.map(m=>`<td class="text-center">${g.filter(k=>k.confirmed_size===m).length}</td>`).join("")}<td class="text-center font-bold">${g.length}</td></tr>`}).join("")}</tbody></table></div>${B?'<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>':""}${c?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${(E==null?void 0:E.map(b=>{var g;return`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${b.proposed_logo_url?`<img src="${ne(b.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:""}<div class="flex-1"><b>ทีมสี${ne((g=b.team_colors)==null?void 0:g.name)}</b><p class="text-xs text-gray-500">${ne(b.proposed_name||b.proposed_motto||"เปลี่ยนโลโก้/อัตลักษณ์")}</p></div><button data-review="${b.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${b.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`}).join(""))||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:""}</div>`,c){const b=document.createElement("section");b.id="sports-gallery-type-admin",b.className="bg-white border rounded-2xl p-5";const g=e.querySelector("#sports-team-membership-admin");g?g.before(b):(s=e.querySelector(".max-w-7xl"))==null||s.appendChild(b),await Ld(e,i),await hl(e.querySelector(".max-w-7xl")||e,i.id);const m=(t=e.querySelector("#cfg-dues-amount"))==null?void 0:t.closest(".grid");m==null||m.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-violet-50 border-violet-200"><h3 class="font-bold text-sm text-violet-900">ค่าเสื้อกีฬาสี (บาท/คน)</h3><p class="text-xs text-violet-700 mt-1">ยอดที่ครูที่ปรึกษาศาสนาจะบันทึกเมื่อสแกนรับชำระ แยกชาย/หญิงเพราะราคาต่างกัน ตั้งเป็น 0 เพื่อปิดรับชำระของเพศนั้นชั่วคราว</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-violet-700">👦 ชาย</span><input id="cfg-shirt-payment-amount-m" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_m)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-violet-700">👧 หญิง</span><input id="cfg-shirt-payment-amount-w" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_w)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),(n=e.querySelector("#cfg-shirt-payment-amount-m"))==null||n.addEventListener("input",S=>{Ye.pendingCfg={...Ye.pendingCfg||{},shirt_payment_amount_m:Math.max(0,Number(S.target.value)||0)}}),(l=e.querySelector("#cfg-shirt-payment-amount-w"))==null||l.addEventListener("input",S=>{Ye.pendingCfg={...Ye.pendingCfg||{},shirt_payment_amount_w:Math.max(0,Number(S.target.value)||0)}}),m==null||m.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-teal-50 border-teal-200"><h3 class="font-bold text-sm text-teal-900">📏 ไซซ์เริ่มต้นขั้นต่ำ</h3><p class="text-xs text-teal-700 mt-1">ไซซ์ที่เล็กกว่าที่เลือกจะถูกซ่อนจากตัวเลือกของกลุ่มนั้นอัตโนมัติ (เฉพาะตอนนักเรียนเลือกไซซ์เอง — ตารางสรุปยอดยังโชว์ครบทุกไซซ์)</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-teal-700">ม.ต้น (ม.1-3)</span><select id="cfg-shirt-size-min-junior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${p.map(S=>`<option value="${ne(S.code)}" ${(a==null?void 0:a.shirt_size_min_junior)===S.code?"selected":""}>${ne(S.code)}</option>`).join("")}</select></label><label class="block"><span class="text-xs text-teal-700">ม.ปลาย/ปวช (ม.4-6, ปวช.1-3)</span><select id="cfg-shirt-size-min-senior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${p.map(S=>`<option value="${ne(S.code)}" ${((a==null?void 0:a.shirt_size_min_senior)||"M")===S.code?"selected":""}>${ne(S.code)}</option>`).join("")}</select></label></div></div>`),m==null||m.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-sky-50 border-sky-200"><h3 class="font-bold text-sm text-sky-900">🎽 วันเช็คชื่อเข้าสีวันแรก</h3><p class="text-xs text-sky-700 mt-1">เฉพาะวันนี้ ให้ครูที่ปรึกษา (สามัญ/ศาสนา) เช็คชื่อนักเรียนแทนฝ่ายสี (ฝ่ายสีเห็นข้อมูลอ่านอย่างเดียวชั่วคราว) เว้นว่างเพื่อปิดระบบนี้</p><input id="cfg-advisor-checkin-date" type="date" value="${ne((a==null?void 0:a.advisor_checkin_date)||"")}" class="mt-3 w-full border border-sky-200 rounded-xl px-3 py-2 text-sm bg-white"><label class="flex items-center gap-2 mt-3 text-xs text-sky-800 cursor-pointer"><input id="cfg-advisor-checkin-backfill" type="checkbox" ${a!=null&&a.advisor_checkin_backfill_enabled?"checked":""} class="w-4 h-4">เปิดให้ครูที่ปรึกษาเช็คชื่อ<b>ย้อนหลัง</b>ได้ (เลือกวันที่จากปฏิทินปฏิบัติงาน ไม่จำกัดแค่วันที่ตั้งไว้ด้านบน — ใช้แก้ห้องที่ครูลา/ตกหล่น)</label></div>`),m==null||m.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-emerald-50 border-emerald-200 md:col-span-2"><h3 class="font-bold text-sm text-emerald-900">🏃 ช่วงเวลารับสมัครและแก้ไขข้อมูลนักกีฬา</h3><p class="text-xs text-emerald-700 mt-1">หลังปิดรับสมัคร สามารถเปิดช่วงแก้ไขข้อมูลเดิมให้ครูและสต๊าฟแต่ละสีได้ โดยแก้ได้เฉพาะนักกีฬาของสีตนเอง เช่น หมายเลขเสื้อ ไม่สามารถเพิ่มหรือถอนรายชื่อผ่านช่องทางนี้</p><div class="grid md:grid-cols-3 gap-2 mt-3"><label class="block"><span class="text-xs text-emerald-800">ปิดรับสมัคร</span><input id="cfg-athlete-registration-closes" type="datetime-local" value="${ne(La(a==null?void 0:a.athlete_registration_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">เปิดให้ฝ่ายสีแก้ไข</span><input id="cfg-athlete-edit-opens" type="datetime-local" value="${ne(La(a==null?void 0:a.athlete_edit_opens_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">ปิดการแก้ไข</span><input id="cfg-athlete-edit-closes" type="datetime-local" value="${ne(La(a==null?void 0:a.athlete_edit_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),m==null||m.insertAdjacentHTML("afterend",'<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👕 ไซซ์เสื้อที่เปิดให้แจ้งได้</h3><button id="shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border">+ เพิ่มไซซ์</button></div><p class="text-xs text-gray-500 mb-3">ตั้งค่าที่นี่หรือฝั่ง AZIZGAMES ก็ได้ บันทึกในตารางเดียวกัน อีกฝั่งเห็นอัตโนมัติ — กด "บันทึกการตั้งค่า" ด้านบนเพื่อบันทึกด้วย</p><div id="shirt-size-rows" class="space-y-2"></div></div>');const k=()=>{const S=e.querySelector("#shirt-size-rows");S&&(S.innerHTML=w.map((q,D)=>`<div class="flex items-center gap-2" data-size-row="${D}"><input data-size-code value="${ne(q.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-size-chest type="number" min="0" value="${ne(q.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-size-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),S.querySelectorAll("[data-size-row]").forEach(q=>{const D=Number(q.dataset.sizeRow);q.querySelector("[data-size-code]").addEventListener("input",L=>{w[D].code=L.target.value}),q.querySelector("[data-size-chest]").addEventListener("input",L=>{w[D].chest=L.target.value}),q.querySelector("[data-size-remove]").addEventListener("click",()=>{w.splice(D,1),k()})}))};k(),e.querySelector("#shirt-size-add").addEventListener("click",()=>{w.push({code:"",chest:""}),k()}),(x=(o=e.querySelector("#shirt-size-rows"))==null?void 0:o.closest("div.rounded-2xl"))==null||x.insertAdjacentHTML("afterend",`<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👔 ไซซ์เสื้อคุณครู</h3><button id="teacher-shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border hidden">+ เพิ่มไซซ์</button></div><label class="flex items-center gap-2 text-xs text-gray-600 mb-3"><input id="teacher-shirt-use-student-sizes" type="checkbox" ${(a==null?void 0:a.teacher_shirt_use_student_sizes)!==!1?"checked":""} class="w-4 h-4">ใช้ตารางไซซ์เดียวกับนักเรียน (ปลดติ๊กเพื่อตั้งไซซ์แยกสำหรับครู)</label><div id="teacher-shirt-size-rows" class="space-y-2"></div></div>`);const _=()=>{const S=e.querySelector("#teacher-shirt-size-rows");S&&(S.innerHTML=v.map((q,D)=>`<div class="flex items-center gap-2" data-tsize-row="${D}"><input data-tsize-code value="${ne(q.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-tsize-chest type="number" min="0" value="${ne(q.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-tsize-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),S.querySelectorAll("[data-tsize-row]").forEach(q=>{const D=Number(q.dataset.tsizeRow);q.querySelector("[data-tsize-code]").addEventListener("input",L=>{v[D].code=L.target.value}),q.querySelector("[data-tsize-chest]").addEventListener("input",L=>{v[D].chest=L.target.value}),q.querySelector("[data-tsize-remove]").addEventListener("click",()=>{v.splice(D,1),_()})}))},$=()=>{var q;const S=(q=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:q.checked;e.querySelector("#teacher-shirt-size-rows").style.display=S?"none":"",e.querySelector("#teacher-shirt-size-add").classList.toggle("hidden",!!S)};_(),$(),e.querySelector("#teacher-shirt-use-student-sizes").addEventListener("change",$),e.querySelector("#teacher-shirt-size-add").addEventListener("click",()=>{v.push({code:"",chest:""}),_()})}e.querySelector("#shirt-export").onclick=()=>{const b=["รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ",...j.map(m=>{var k,_,$,S;return[(k=m.students)==null?void 0:k.student_code,(_=m.students)==null?void 0:_.full_name,($=m.students)==null?void 0:$.main_room,(S=m.students)==null?void 0:S.house_color,m.confirmed_size,m.status].map(q=>`"${String(q||"").replaceAll('"','""')}"`).join(",")})],g=document.createElement("a");g.href=URL.createObjectURL(new Blob(["\uFEFF"+b.join(`
`)],{type:"text/csv"})),g.download="sports-shirt-summary.csv",g.click(),URL.revokeObjectURL(g.href)},e.querySelectorAll("[data-cfg]").forEach(b=>b.addEventListener("click",()=>{const g=b.dataset.enabled!=="true";b.dataset.enabled=g?"true":"false",Ye.pendingCfg={...Ye.pendingCfg||{},[b.dataset.cfg]:g},b.textContent=g?"ปิดใช้งาน":"เปิดใช้งาน",be("เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน")})),(r=e.querySelector("#open-sports-overview"))==null||r.addEventListener("click",()=>vr()),(d=e.querySelector("#cfg-save"))==null||d.addEventListener("click",async()=>{var D,L,C,O,z,M,F;const b=P=>{var Y;const R=(Y=e.querySelector(P))==null?void 0:Y.value;return R?new Date(R).toISOString():null},g=b("#cfg-athlete-registration-closes"),m=b("#cfg-athlete-edit-opens"),k=b("#cfg-athlete-edit-closes");if(m&&g&&new Date(m)<new Date(g))return be("เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร","error");if(k&&m&&new Date(k)<=new Date(m))return be("เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข","error");const _={shirt_request_enabled:!!(a!=null&&a.shirt_request_enabled),shirt_summary_enabled:!!(a!=null&&a.shirt_summary_enabled),team_workspace_enabled:!!(a!=null&&a.team_workspace_enabled),shirt_vote_enabled:!!(a!=null&&a.shirt_vote_enabled),teacher_shirt_request_enabled:!!(a!=null&&a.teacher_shirt_request_enabled),teacher_shirt_use_student_sizes:((D=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:D.checked)!==!1,dues_amount:Number((L=e.querySelector("#cfg-dues-amount"))==null?void 0:L.value)||30,cert_attendance_threshold_pct:Number((C=e.querySelector("#cfg-cert-threshold"))==null?void 0:C.value)||80,advisor_checkin_date:((O=e.querySelector("#cfg-advisor-checkin-date"))==null?void 0:O.value)||null,advisor_checkin_backfill_enabled:!!((z=e.querySelector("#cfg-advisor-checkin-backfill"))!=null&&z.checked),shirt_size_min_junior:((M=e.querySelector("#cfg-shirt-size-min-junior"))==null?void 0:M.value)||null,shirt_size_min_senior:((F=e.querySelector("#cfg-shirt-size-min-senior"))==null?void 0:F.value)||null,athlete_registration_closes_at:g,athlete_edit_opens_at:m,athlete_edit_closes_at:k,...Ye.pendingCfg||{}},{error:$}=await le.from("sports_portal_settings").update({..._,updated_at:new Date().toISOString()}).eq("event_id",i.id);if($)return be($.message,"error");const S=w.filter(P=>String(P.code||"").trim()).map(P=>({code:String(P.code).trim(),chest:Number(P.chest)||0}));if(S.length)try{await kd(S)}catch(P){be("บันทึกไซซ์เสื้อไม่สำเร็จ: "+P.message,"error")}const q=v.filter(P=>String(P.code||"").trim()).map(P=>({code:String(P.code).trim(),chest:Number(P.chest)||0}));if(q.length)try{await Sd(q)}catch(P){be("บันทึกไซซ์เสื้อครูไม่สำเร็จ: "+P.message,"error")}try{await $d(_.shirt_request_enabled)}catch(P){console.warn("Unable to sync AZIZGAMES shirt button",P)}Ye.pendingCfg={},be("บันทึกการเปิดใช้งานแล้ว"),Ye()}),e.querySelectorAll("[data-review]").forEach(b=>b.onclick=async()=>{const{error:g}=await le.rpc("review_team_identity",{p_request:b.dataset.review,p_decision:b.dataset.decision,p_comment:null});if(g)return be(g.message,"error");be("บันทึกผลตรวจสอบแล้ว"),Ye()}),B&&Vt(e,i,h||[],{isAdmin:c,myTeamMemberships:u||[]})}catch(i){console.error(i),e.innerHTML=Ct()}}function Cd({wrap:e,items:s,placeholder:t="ค้นหา...",emptyLabel:n="-- เลือก --",photoClass:l="w-7 h-9 rounded object-cover flex-shrink-0 border",onChange:o=null}){let x=null,r=!1;e.style.position="relative",e.innerHTML=`
    <div class="ps-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ps-display flex-1 text-sm text-gray-400 truncate">${ne(n)}</span>
      <svg class="ps-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ps-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100"><input class="ps-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${ne(t)}" autocomplete="off"></div>
      <ul class="ps-list max-h-52 overflow-y-auto"></ul>
    </div>`;const d=e.querySelector(".ps-input"),i=e.querySelector(".ps-dropdown"),a=e.querySelector(".ps-search"),p=e.querySelector(".ps-list"),w=e.querySelector(".ps-display"),y=e.querySelector(".ps-arrow");function v(c=""){const u=c.toLowerCase(),B=s.filter(h=>!c||(h.label||"").toLowerCase().includes(u)||(h.sub||"").toLowerCase().includes(u));p.innerHTML=B.length?B.map(h=>{const I=(x==null?void 0:x.id)===h.id;return`<li data-id="${ne(String(h.id))}" class="ps-opt px-3 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 ${I?"bg-indigo-50 font-semibold text-indigo-700":"text-gray-700"}">
        ${h.photo?`<img src="${ne(h.photo)}" class="${l}">`:""}
        <span class="truncate">${ne(h.label)}${h.sub?` <span class="text-xs text-gray-400 font-mono">${ne(h.sub)}</span>`:""}</span>
      </li>`}).join(""):'<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบรายการ</li>',p.querySelectorAll(".ps-opt").forEach(h=>h.addEventListener("mousedown",I=>{I.preventDefault(),x=s.find(E=>String(E.id)===h.dataset.id)||null,w.textContent=x?x.label:n,w.classList.toggle("text-gray-400",!x),w.classList.toggle("text-gray-800",!!x),T(),o==null||o((x==null?void 0:x.id)??null)}))}function f(){r=!0,i.classList.remove("hidden"),y.style.transform="rotate(180deg)",a.value="",v(),setTimeout(()=>a.focus(),50)}function T(){r=!1,i.classList.add("hidden"),y.style.transform=""}return d.addEventListener("click",()=>r?T():f()),d.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),r?T():f())}),a.addEventListener("input",()=>v(a.value.trim())),document.addEventListener("mousedown",c=>{r&&!e.contains(c.target)&&T()},!0),{getValue:()=>(x==null?void 0:x.id)??null,reset:()=>{x=null,w.textContent=n,w.classList.add("text-gray-400"),w.classList.remove("text-gray-800")}}}async function Vt(e,s,t=[],n={isAdmin:!1,myTeamMemberships:[]}){var p,w,y,v,f,T,c;const l=e.querySelector("#sports-team-membership-admin");if(!l)return;const o={lead_teacher:"หัวหน้าครูประจำสี",teacher:"ครูประจำสี",staff_lead:"หัวหน้านักเรียนสต๊าฟสี",staff:"นักเรียนสต๊าฟสี"},x={members:"สมาชิก",registrations:"ลงทะเบียนกีฬา",announcements:"ประกาศ",tasks:"งานของสี",shirt_summary:"สรุปเสื้อ",attendance:"เช็คชื่อ",dues:"เก็บค่าบำรุงสี",expenses:"บันทึกรายรับ-รายจ่ายสี",comp_assign:"มอบหมายรายการแข่งขัน"},r=u=>/^\s*(?:ม\.?\s*[456]|ปวช\.?\s*[123])(?:\s*\/|\s|$)/i.test(String((u==null?void 0:u.main_room)||"")),d=new Set((n.myTeamMemberships||[]).filter(u=>u.role==="lead_teacher").map(u=>u.team_color_id)),i=n.isAdmin?t:t.filter(u=>d.has(u.id)),a=!!n.isAdmin;if(!i.length){l.innerHTML='<div class="p-6 text-center text-gray-400">ยังไม่มีสีที่คุณมีสิทธิ์มอบหมายสต๊าฟ</div>';return}try{const[{data:u,error:B},{data:h},I]=await Promise.all([le.from("sports_team_memberships").select("*,team_colors(name,hex_color),teachers(full_name,teacher_code),students(full_name,student_code,main_room)").eq("event_id",s.id).eq("is_active",!0).order("created_at",{ascending:!1}),le.from("teachers").select("id,teacher_code,full_name,dept,image_url,profile_id").not("profile_id","is",null).order("full_name"),ua("students",D=>D.select("id,student_code,full_name,main_room,profile_id,is_active,image_url,team_color_id,house_color").order("student_code"))]);if(B)throw B;const E=new Set(i.map(D=>D.id)),A=(u||[]).filter(D=>n.isAdmin||E.has(D.team_color_id)),j=new Set((u||[]).filter(D=>D.role==="staff_lead").map(D=>D.team_color_id));let b=[];l.innerHTML=`<div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="font-bold">🛡️ มอบหมายผู้ดูแลประจำสี</h2><p class="text-xs text-gray-500 mt-1">${n.isAdmin?"แอดมินกำหนดครูประจำสีและนักเรียนสต๊าฟได้ทุกสี":"พ่อสี/แม่สีมอบหมายได้เฉพาะนักเรียนสต๊าฟในสีของตนเอง"}</p></div><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ใช้งานอยู่ ${(u==null?void 0:u.length)||0} คน</span></div>
      <div class="grid lg:grid-cols-5 gap-3 mb-4">
        <select id="team-member-color" class="team-field rounded-xl px-3 py-2 text-sm">${i.map(D=>`<option value="${ne(D.id)}">สี${ne(D.name)}</option>`).join("")}</select>
        <input id="team-member-code-input" class="team-field rounded-xl px-3 py-2 text-sm lg:col-span-2" placeholder="กรอกรหัสครู/รหัสนักเรียน เช่น 1087, 608001">
        <select id="team-member-role" class="team-field rounded-xl px-3 py-2 text-sm">
          ${a?'<option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option>':""}
          <option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option>
          <option value="staff">นักเรียนสต๊าฟสี</option>
        </select>
        <button id="team-member-search" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">ค้นหารายชื่อ</button>
      </div>
      <p class="text-[11px] text-gray-500 -mt-2 mb-3">มอบสิทธิ์นักเรียนระดับ ม.4–ม.6 และ ปวช.1–3 ที่อยู่สีเดียวกันและมีบัญชีเข้าใช้งานระบบแล้ว</p>
      <div class="flex flex-wrap gap-2 mb-4">${Object.entries(x).map(([D,L])=>ks(D,L,!0)).join("")}</div>
      <div id="team-member-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4">
        <p class="text-xs font-bold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบหมาย:</p>
        <div id="team-member-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div>
        <button id="team-member-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันและมอบหมายสิทธิ์ประจำสี</button>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 mt-2 mb-2"><h3 class="font-bold text-sm">📋 ตรวจสอบรายชื่อผู้ได้รับสิทธิ์</h3><span id="team-member-count" class="text-xs text-gray-500"></span></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <select id="team-member-filter-color" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${i.map(D=>`<option value="${ne(D.id)}">สี${ne(D.name)}</option>`).join("")}</select>
        <select id="team-member-filter-role" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกบทบาท</option><option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option><option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option><option value="staff">นักเรียนสต๊าฟสี</option></select>
        <input id="team-member-filter-search" class="team-field rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ/รหัสครู/รหัสนักเรียน...">
      </div>
      <div id="team-member-table-wrap"></div>`;const g=()=>{var z;const D=(z=l.querySelector("#team-member-color"))==null?void 0:z.value,L=l.querySelector("#team-member-role"),C=L==null?void 0:L.querySelector('option[value="staff_lead"]');if(!L||!C)return;const O=j.has(D);C.disabled=O,C.textContent=O?"หัวหน้านักเรียนสต๊าฟสี (มีแล้ว — เลือกนักเรียนสต๊าฟสีแทน)":"หัวหน้านักเรียนสต๊าฟสี",O&&L.value==="staff_lead"&&(L.value="staff")};g(),(p=l.querySelector("#team-member-color"))==null||p.addEventListener("change",g);const m=D=>{var L,C,O,z;return(L=D.teachers)!=null&&L.full_name?`${D.teachers.full_name}${D.teachers.teacher_code?` (${D.teachers.teacher_code})`:""}`:`${((C=D.students)==null?void 0:C.student_code)||""} ${((O=D.students)==null?void 0:O.full_name)||""} ${(z=D.students)!=null&&z.main_room?`· ${D.students.main_room}`:""}`},k=(D,L)=>{var z;(z=document.getElementById("team-member-edit-modal"))==null||z.remove();const C=document.createElement("div");C.id="team-member-edit-modal",C.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",C.setAttribute("role","dialog"),C.setAttribute("aria-modal","true"),C.innerHTML='<div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"><div class="p-5 border-b border-gray-100"><h3 class="font-bold text-gray-800">✏️ แก้ไขสิทธิ์</h3><p class="text-xs text-gray-500 mt-1">แตะเพื่อเปิด/ปิดสิทธิ์แต่ละอย่าง แล้วกดบันทึก</p></div><div class="p-5"><div id="team-member-edit-perms" class="flex flex-wrap gap-2"></div></div><div class="p-4 border-t border-gray-100 flex gap-2"><button id="team-member-edit-cancel" class="flex-1 py-2.5 rounded-xl border text-sm font-bold">ยกเลิก</button><button id="team-member-edit-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold">บันทึก</button></div></div>',document.body.appendChild(C);const O=C.querySelector("#team-member-edit-perms");O.innerHTML=Object.entries(x).map(([M,F])=>ks(M,F,(L==null?void 0:L[M])===!0)).join(""),O.querySelectorAll("[data-team-perm]").forEach(M=>M.addEventListener("click",()=>{const F=M.dataset.enabled!=="true";M.dataset.enabled=F?"true":"false",M.className=`px-3 py-2 rounded-xl text-xs font-bold border ${F?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const P=(M.textContent.split(":").pop()||"").trim();M.textContent=`${F?"อนุญาต":"ไม่อนุญาต"}: ${P}`})),C.querySelector("#team-member-edit-cancel").onclick=()=>C.remove(),C.onclick=M=>{M.target===C&&C.remove()},C.querySelector("#team-member-edit-save").onclick=async()=>{const M={};O.querySelectorAll("[data-team-perm]").forEach(P=>M[P.dataset.teamPerm]=P.dataset.enabled==="true");const{error:F}=await le.from("sports_team_memberships").update({permissions:M}).eq("id",D);if(F)return be(F.message,"error");C.remove(),be("บันทึกสิทธิ์แล้ว"),Vt(e,s,t,n)}},_=()=>{var F,P,R;const D=((F=l.querySelector("#team-member-filter-color"))==null?void 0:F.value)||"",L=((P=l.querySelector("#team-member-filter-role"))==null?void 0:P.value)||"",C=(((R=l.querySelector("#team-member-filter-search"))==null?void 0:R.value)||"").trim().toLowerCase(),O=A.filter(Y=>!(D&&Y.team_color_id!==D||L&&Y.role!==L||C&&!m(Y).toLowerCase().includes(C))),z=l.querySelector("#team-member-count");z&&(z.textContent=`แสดง ${O.length} จาก ${A.length} คน`);const M=l.querySelector("#team-member-table-wrap");M.innerHTML=`<div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${O.map(Y=>{var X,Z;const J=m(Y),H=Object.entries(Y.permissions||{}).filter(([,te])=>te).map(([te])=>x[te]||te).join(", ")||"ไม่มีสิทธิ์ย่อย",U=n.isAdmin||Y.student_id&&["staff_lead","staff"].includes(Y.role);return`<tr class="border-t"><td class="p-3 font-medium">${ne(J||"ไม่พบชื่อ")}</td><td class="p-3"><span class="font-bold" style="color:${ne(((X=Y.team_colors)==null?void 0:X.hex_color)||"#334155")}">สี${ne(((Z=Y.team_colors)==null?void 0:Z.name)||"—")}</span></td><td class="p-3">${ne(o[Y.role]||Y.role)}</td><td class="p-3 text-xs text-gray-500">${ne(H)}</td><td class="p-3 text-right whitespace-nowrap">${U?`<button data-team-member-edit="${ne(Y.id)}" data-perms='${ne(JSON.stringify(Y.permissions||{}))}' class="px-3 py-1.5 rounded-lg border text-indigo-600 text-xs mr-1">แก้ไขสิทธิ์</button><button data-team-member-remove="${ne(Y.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join("")||`<tr><td colspan="5" class="p-6 text-center text-gray-400">${A.length?"ไม่พบรายชื่อที่ตรงกับตัวกรอง":"ยังไม่มีผู้ได้รับสิทธิ์ประจำสี"}</td></tr>`}</tbody></table></div>`,M.querySelectorAll("[data-team-member-remove]").forEach(Y=>Y.addEventListener("click",async()=>{const{error:J}=await le.from("sports_team_memberships").update({is_active:!1,ends_at:new Date().toISOString()}).eq("id",Y.dataset.teamMemberRemove);if(J)return be(J.message,"error");be("ปิดสิทธิ์แล้ว"),Vt(e,s,t,n)})),M.querySelectorAll("[data-team-member-edit]").forEach(Y=>Y.addEventListener("click",()=>{let J={};try{J=JSON.parse(Y.dataset.perms||"{}")}catch{J={}}k(Y.dataset.teamMemberEdit,J)}))};_(),(w=l.querySelector("#team-member-filter-color"))==null||w.addEventListener("change",_),(y=l.querySelector("#team-member-filter-role"))==null||y.addEventListener("change",_),(v=l.querySelector("#team-member-filter-search"))==null||v.addEventListener("input",_);const $=D=>String(D||"").split(/[\s,]+/).map(L=>L.trim()).filter(Boolean),S=D=>{var C;(C=document.getElementById("team-member-lookup-issue"))==null||C.remove();const L=document.createElement("div");L.id="team-member-lookup-issue",L.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",L.setAttribute("role","dialog"),L.setAttribute("aria-modal","true"),L.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"><div class="p-5 border-b border-red-100 bg-red-50"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-full bg-red-100 grid place-items-center text-xl flex-shrink-0">🔎</div><div><h3 class="font-bold text-red-800">ไม่สามารถเลือกรายชื่อนี้ได้</h3><p class="text-xs text-red-600 mt-1">ระบบตรวจสอบพบสาเหตุดังต่อไปนี้</p></div></div></div><div class="p-5 space-y-2 max-h-[55vh] overflow-y-auto">${D.map(O=>`<div class="rounded-xl border border-gray-200 p-3"><b class="text-sm text-gray-800">รหัส ${ne(O.code)}</b><p class="text-xs text-gray-600 mt-1">${ne(O.reason)}</p></div>`).join("")}</div><div class="p-4 border-t border-gray-100"><button id="team-member-lookup-close" class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold">รับทราบ</button></div></div>`,document.body.appendChild(L),L.querySelector("#team-member-lookup-close").onclick=()=>L.remove(),L.onclick=O=>{O.target===L&&L.remove()}},q=()=>{const D=l.querySelector("#team-member-preview"),L=l.querySelector("#team-member-preview-cards");if(!b.length){D==null||D.classList.add("hidden");return}D==null||D.classList.remove("hidden"),L.innerHTML=b.map(C=>`<div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">${C.image_url?`<img src="${ne(C.image_url)}" class="${C.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} object-cover flex-shrink-0">`:`<div class="${C.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} bg-indigo-50 text-indigo-600 grid place-items-center font-bold flex-shrink-0">${C.kind==="teacher"?"ครู":"นร"}</div>`}<div class="min-w-0"><p class="font-bold text-gray-800 text-xs truncate">${ne(C.full_name)} <span class="ml-1 px-1.5 py-0.5 rounded ${C.kind==="teacher"?"bg-amber-100 text-amber-800":"bg-emerald-100 text-emerald-800"} text-[9px] font-bold">${C.kind==="teacher"?"คุณครู":"นักเรียนสต๊าฟ"}</span></p><p class="text-[10px] text-gray-400">${ne(C.detail)}</p></div></div>`).join("")};(f=l.querySelector("#team-member-search"))==null||f.addEventListener("click",()=>{var R,Y;const D=$((R=l.querySelector("#team-member-code-input"))==null?void 0:R.value);if(!D.length)return be("กรุณากรอกรหัสครูหรือรหัสนักเรียน","error");const L=(Y=l.querySelector("#team-member-color"))==null?void 0:Y.value,C=i.find(J=>J.id===L),O=new Set(D.map(String)),z=a?(h||[]).filter(J=>O.has(String(J.teacher_code))).map(J=>({...J,kind:"teacher",code:J.teacher_code,detail:`รหัสครู ${J.teacher_code} · กลุ่มสาระ ${J.dept||"—"}`})):[],M=new Set(z.map(J=>String(J.code))),F=[],P=[];D.forEach(J=>{if(M.has(String(J)))return;const H=(I||[]).filter(X=>String(X.student_code)===String(J));if(!H.length){P.push({code:J,reason:"ไม่พบรหัสนักเรียนนี้ในฐานข้อมูล"});return}const U=H.find(X=>X.is_active)||H[0];if(!U.is_active){P.push({code:J,reason:"บัญชีนักเรียนถูกปิดสถานะ ไม่ใช่นักเรียนที่กำลังใช้งาน"});return}if(!(U.team_color_id===L||U.house_color===(C==null?void 0:C.name))){P.push({code:J,reason:`นักเรียนอยู่สี${U.house_color||"อื่น"} ไม่ใช่สี${(C==null?void 0:C.name)||"ที่เลือก"}`});return}if(!r(U)){P.push({code:J,reason:`นักเรียนอยู่ห้อง ${U.main_room||"ไม่ระบุ"} ระบบอนุญาตให้มอบสิทธิ์เฉพาะ ม.4–ม.6 และ ปวช.1–3`});return}if(!U.profile_id){P.push({code:J,reason:"นักเรียนยังไม่มีบัญชีเข้าใช้งานระบบ จึงยังผูกสิทธิ์ประจำสีไม่ได้"});return}F.push({...U,kind:"student",code:U.student_code,detail:`รหัส ${U.student_code} · ห้อง ${U.main_room||"—"} · สี${(C==null?void 0:C.name)||"—"}`})}),b=[...z,...F],P.length&&S(P),b.length&&q()}),(T=l.querySelector("#team-member-code-input"))==null||T.addEventListener("keydown",D=>{var L;D.key==="Enter"&&(D.preventDefault(),(L=l.querySelector("#team-member-search"))==null||L.click())}),(c=l.querySelector("#team-member-add"))==null||c.addEventListener("click",async()=>{var M,F;const D=(M=l.querySelector("#team-member-role"))==null?void 0:M.value,L=(F=l.querySelector("#team-member-color"))==null?void 0:F.value;if(!L||!b.length)return be("กรุณาเลือกสีและค้นหารายชื่อก่อน","error");if(!n.isAdmin&&!d.has(L))return be("หัวหน้าครูประจำสีมอบหมายได้เฉพาะสีของตนเอง","error");if(b.some(P=>P.kind==="student")&&!["staff_lead","staff"].includes(D))return be("บทบาทนี้ใช้กับครูเท่านั้น หากจะมอบหมายให้นักเรียนให้เลือกบทบาทนักเรียนสต๊าฟ","error");if(b.some(P=>P.kind==="teacher")&&!["lead_teacher","teacher"].includes(D))return be("บทบาทนี้ใช้กับนักเรียนเท่านั้น หากจะมอบหมายให้ครูให้เลือกบทบาทครูประจำสี","error");if(D==="staff_lead"&&(j.has(L)||b.length>1))return be("สีนี้มีหัวหน้านักเรียนสต๊าฟสีอยู่แล้ว หรือเลือกได้ทีละ 1 คนเท่านั้นสำหรับบทบาทนี้","error");const C={};l.querySelectorAll("[data-team-perm]").forEach(P=>C[P.dataset.teamPerm]=P.dataset.enabled==="true");const O=b.map(P=>({event_id:s.id,team_color_id:L,profile_id:P.profile_id,teacher_id:P.kind==="teacher"?Number(P.id):null,student_id:P.kind==="student"?Number(P.id):null,role:D,permissions:C,is_active:!0,ends_at:null})),{error:z}=await le.from("sports_team_memberships").upsert(O,{onConflict:"event_id,team_color_id,profile_id"});if(z)return be(z.message,"error");be(`มอบหมายสิทธิ์ประจำสีแล้ว ${O.length} คน`),Vt(e,s,t,n)}),l.querySelectorAll("[data-team-perm]").forEach(D=>D.addEventListener("click",()=>{const L=D.dataset.enabled!=="true";D.dataset.enabled=L?"true":"false",D.className=`px-3 py-2 rounded-xl text-xs font-bold border ${L?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const C=(D.textContent.split(":").pop()||"").trim();D.textContent=`${L?"อนุญาต":"ไม่อนุญาต"}: ${C}`}))}catch(u){console.error(u),l.innerHTML='<div class="p-5 rounded-2xl bg-red-50 text-red-700 text-sm">โหลดหน้ามอบหมายผู้ดูแลสีไม่สำเร็จ</div>'}}async function Id(){const e=Lt();e.innerHTML='<div class="py-16 text-center">กำลังโหลดบัญชีเงินกีฬาสี...</div>';try{const{event:s}=await It(),[{data:t,error:n},{data:l,error:o}]=await Promise.all([le.from("team_colors").select("id,name,hex_color,gender").eq("event_id",s.id).order("gender").order("display_order"),le.from("sports_team_fund_entries").select("*").eq("event_id",s.id).in("category",["school_support","prize"]).order("entry_date",{ascending:!1}).order("created_at",{ascending:!1})]);if(n)throw n;if(o)throw o;let x=l||[];const r=i=>(t||[]).find(a=>a.id===i);e.innerHTML=`<div class="max-w-5xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">💰 บัญชีเงินกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">เพิ่ม/แก้ไข/ลบเงินสนับสนุนโรงเรียนและเงินรางวัลของแต่ละสี — ข้อมูลจะไปแสดงในหน้า "สีของฉัน" ของนักเรียนทุกคนทันที</p></div>
      <section class="bg-white border rounded-2xl p-5">
        <h2 class="font-bold mb-3">➕ เพิ่มรายการใหม่</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          <select id="fund-admin-color" class="border rounded-xl px-3 py-2 text-sm">${(t||[]).map(i=>`<option value="${ne(i.id)}">สี${ne(i.name)} (${i.gender==="M"?"ชาย":"หญิง"})</option>`).join("")}</select>
          <select id="fund-admin-category" class="border rounded-xl px-3 py-2 text-sm"><option value="school_support">เงินสนับสนุนโรงเรียน</option><option value="prize">เงินรางวัล</option></select>
          <input id="fund-admin-amount" type="number" min="1" step="1" placeholder="จำนวนเงิน" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-desc" type="text" placeholder="รายละเอียด เช่น ชนะเลิศฟุตซอลชาย ม.ต้น" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-date" type="date" value="${$s()}" class="border rounded-xl px-3 py-2 text-sm">
        </div>
        <button id="fund-admin-submit" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">➕ เพิ่มรายการ</button>
        <div id="fund-admin-status" class="text-xs text-gray-500 mt-2"></div>
      </section>
      <section class="bg-white border rounded-2xl overflow-hidden">
        <div class="p-4 border-b bg-gray-50"><h2 class="font-bold text-sm">📋 รายการทั้งหมด (${x.length})</h2></div>
        <div id="fund-admin-list" class="divide-y"></div>
      </section>
    </div>`;const d=()=>{const i=e.querySelector("#fund-admin-list");i.innerHTML=x.length?x.map(a=>{const p=r(a.team_color_id);return`<div class="p-3 flex items-center gap-3" data-fund-row="${ne(a.id)}">
          <span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${ne((p==null?void 0:p.hex_color)||"#94a3b8")}"></span>
          <div class="min-w-0 flex-1" data-fund-view>
            <div class="flex items-center gap-2 flex-wrap"><b class="text-sm">สี${ne((p==null?void 0:p.name)||"—")}</b><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${a.category==="prize"?"bg-amber-100 text-amber-700":"bg-blue-100 text-blue-700"}">${a.category==="prize"?"เงินรางวัล":"เงินสนับสนุนโรงเรียน"}</span></div>
            <p class="text-sm text-gray-700 mt-0.5">${ne(a.description)}</p>
            <p class="text-[11px] text-gray-400 mt-0.5">${new Date(a.entry_date).toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"})}</p>
          </div>
          <b class="flex-shrink-0 text-emerald-600">+${Number(a.amount).toLocaleString("th-TH")}</b>
          <div class="flex gap-1.5 flex-shrink-0">
            <button data-fund-edit="${ne(a.id)}" class="px-2.5 py-1.5 rounded-lg border text-xs font-bold text-gray-600 hover:bg-gray-50">แก้ไข</button>
            <button data-fund-del="${ne(a.id)}" class="px-2.5 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50">ลบ</button>
          </div>
        </div>`}).join(""):'<p class="p-8 text-center text-gray-400 text-sm">ยังไม่มีรายการ</p>',i.querySelectorAll("[data-fund-del]").forEach(a=>a.onclick=async()=>{if(!confirm("ลบรายการนี้?"))return;const p=a.dataset.fundDel,{error:w}=await le.from("sports_team_fund_entries").delete().eq("id",p);if(w){be(w.message,"error");return}x=x.filter(y=>String(y.id)!==String(p)),be("ลบรายการแล้ว"),d()}),i.querySelectorAll("[data-fund-edit]").forEach(a=>a.onclick=()=>{const p=a.dataset.fundEdit,w=i.querySelector(`[data-fund-row="${p}"]`),y=x.find(f=>String(f.id)===String(p)),v=w.querySelector("[data-fund-view]");v.innerHTML=`<div class="grid sm:grid-cols-3 gap-1.5">
          <input data-edit-amount type="number" min="1" step="1" value="${Number(y.amount)}" class="border rounded-lg px-2 py-1.5 text-xs">
          <input data-edit-desc type="text" value="${ne(y.description)}" class="border rounded-lg px-2 py-1.5 text-xs sm:col-span-2">
          <input data-edit-date type="date" value="${y.entry_date}" class="border rounded-lg px-2 py-1.5 text-xs">
          <div class="flex gap-1.5"><button data-edit-save class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">บันทึก</button><button data-edit-cancel class="px-3 py-1.5 rounded-lg border text-xs font-bold">ยกเลิก</button></div>
        </div>`,v.querySelector("[data-edit-cancel]").onclick=()=>d(),v.querySelector("[data-edit-save]").onclick=async()=>{const f=Number(v.querySelector("[data-edit-amount]").value),T=v.querySelector("[data-edit-desc]").value.trim(),c=v.querySelector("[data-edit-date]").value;if(!f||f<=0||!T){be("กรอกข้อมูลให้ครบ","error");return}const{error:u}=await le.from("sports_team_fund_entries").update({amount:f,description:T,entry_date:c}).eq("id",p);if(u){be(u.message,"error");return}Object.assign(y,{amount:f,description:T,entry_date:c}),be("แก้ไขแล้ว"),d()}})};d(),e.querySelector("#fund-admin-submit").onclick=async()=>{const i=e.querySelector("#fund-admin-color").value,a=e.querySelector("#fund-admin-category").value,p=Number(e.querySelector("#fund-admin-amount").value),w=e.querySelector("#fund-admin-desc").value.trim(),y=e.querySelector("#fund-admin-date").value||$s(),v=e.querySelector("#fund-admin-status");if(!p||p<=0||!w){v.textContent="กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ",v.className="text-xs text-red-600 mt-2";return}const f=e.querySelector("#fund-admin-submit");f.disabled=!0;const{data:T,error:c}=await le.from("sports_team_fund_entries").insert({event_id:s.id,team_color_id:i,category:a,amount:p,description:w,entry_date:y}).select().single();if(f.disabled=!1,c){v.textContent="บันทึกไม่สำเร็จ: "+c.message,v.className="text-xs text-red-600 mt-2";return}x.unshift(T),e.querySelector("#fund-admin-amount").value="",e.querySelector("#fund-admin-desc").value="",v.textContent="",be("เพิ่มรายการแล้ว"),d()}}catch(s){console.error(s),e.innerHTML=Ct()}}async function vr(){const e=Lt();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดภาพรวมกีฬาสี...</div>';try{const{event:s}=await It(),[{data:t,error:n},{data:l}]=await Promise.all([le.rpc("get_sports_admin_overview",{p_event:s.id}),le.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);if(n)throw n;const o=(t==null?void 0:t.colors)||[],x=(t==null?void 0:t.attendance)||[],r=(t==null?void 0:t.dues)||[],d=(t==null?void 0:t.fund)||[],i=[...new Map(hr(l).map(h=>[h.date,h.label])).entries()].map(([h,I])=>({date:h,label:I})).sort((h,I)=>h.date<I.date?-1:1),a=i.map(h=>h.date),p=new Map(x.map(h=>[`${h.team_color_id}|${h.session_date}`,Number(h.checked_count)])),w=new Map(r.map(h=>[h.team_color_id,h])),y=new Map(d.map(h=>[h.team_color_id,h])),v=h=>h>=80?"bg-emerald-500":h>=50?"bg-amber-500":"bg-red-500",f=()=>a.length?`<div class="overflow-x-auto"><table class="w-full text-sm border-collapse">
        <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left sticky left-0 bg-gray-50 z-10">สี</th>${i.map(h=>`<th class="p-2 text-center whitespace-nowrap"><div>${ne(h.date)}</div>${h.label?`<div class="text-[10px] font-normal text-gray-400">${ne(h.label)}</div>`:""}</th>`).join("")}</tr></thead>
        <tbody>${o.map(h=>{const I=Number(h.member_count)||0;return`<tr class="border-b"><td class="p-2 font-bold sticky left-0 bg-white z-10" style="color:${ne(h.hex_color)}">สี${ne(h.name)}</td>${a.map(E=>{const A=p.get(`${h.id}|${E}`)||0,j=I?Math.round(A*100/I):0;return`<td class="p-2 text-center"><div class="inline-flex flex-col items-center gap-1"><span class="text-xs font-bold">${A}/${I}</span><div class="w-14 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full ${v(j)}" style="width:${j}%"></div></div></div></td>`}).join("")}</tr>`}).join("")}</tbody>
      </table></div>`:'<p class="text-sm text-gray-400 text-center py-10">ยังไม่มีวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน — ไปตั้งวันที่ในหน้าปฏิทินปฏิบัติงานก่อน</p>',T=()=>{const h=o.reduce((A,j)=>A+(Number(j.member_count)||0),0),I=r.reduce((A,j)=>A+(Number(j.paid_count)||0),0),E=r.reduce((A,j)=>A+(Number(j.total_amount)||0),0);return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-center">จ่ายแล้ว</th><th class="p-3 text-center">ยังไม่จ่าย</th><th class="p-3 text-center">%</th><th class="p-3 text-right">ยอดรวม (บาท)</th></tr></thead>
        <tbody>${o.map(A=>{const j=w.get(A.id)||{paid_count:0,total_amount:0},b=Number(A.member_count)||0,g=Number(j.paid_count)||0,m=b?Math.round(g*100/b):0;return`<tr class="border-b"><td class="p-3 font-bold" style="color:${ne(A.hex_color)}">สี${ne(A.name)}</td><td class="p-3 text-center">${g}</td><td class="p-3 text-center">${Math.max(0,b-g)}</td><td class="p-3 text-center">${m}%</td><td class="p-3 text-right font-bold">${Number(j.total_amount||0).toLocaleString("th-TH")}</td></tr>`}).join("")}
        <tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-center">${I}</td><td class="p-3 text-center">${Math.max(0,h-I)}</td><td class="p-3"></td><td class="p-3 text-right">${E.toLocaleString("th-TH")}</td></tr>
        </tbody>
      </table></div>`},c=()=>{let h=0,I=0,E=0,A=0;const j=o.map(g=>{const m=w.get(g.id)||{total_amount:0},k=y.get(g.id)||{school_support:0,prize:0,expense:0},_=Number(m.total_amount)||0,$=Number(k.school_support)||0,S=Number(k.prize)||0,q=Number(k.expense)||0,D=_+$+S-q;return h+=_,I+=$,E+=S,A+=q,`<tr class="border-b"><td class="p-3 font-bold" style="color:${ne(g.hex_color)}">สี${ne(g.name)}</td><td class="p-3 text-right">${_.toLocaleString("th-TH")}</td><td class="p-3 text-right">${$.toLocaleString("th-TH")}</td><td class="p-3 text-right">${S.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${q.toLocaleString("th-TH")}</td><td class="p-3 text-right font-bold ${D<0?"text-red-600":"text-emerald-600"}">${D.toLocaleString("th-TH")}</td></tr>`}).join(""),b=h+I+E-A;return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-right">ค่าบำรุง</th><th class="p-3 text-right">สนับสนุนโรงเรียน</th><th class="p-3 text-right">เงินรางวัล</th><th class="p-3 text-right">รายจ่าย</th><th class="p-3 text-right">คงเหลือ</th></tr></thead>
        <tbody>${j}<tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-right">${h.toLocaleString("th-TH")}</td><td class="p-3 text-right">${I.toLocaleString("th-TH")}</td><td class="p-3 text-right">${E.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${A.toLocaleString("th-TH")}</td><td class="p-3 text-right ${b<0?"text-red-600":"text-emerald-600"}">${b.toLocaleString("th-TH")}</td></tr></tbody>
      </table></div>`};e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">📊 ภาพรวมกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">สรุปเช็คชื่อรายวัน ค่าบำรุงสี และบัญชีของทุกสี เทียบกันในหน้าเดียว — ดูสถานะการประเมิน/คะแนนได้ที่หน้า "ประเมินกีฬาสี"</p></div>
      <div id="sports-ov-tabs" class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">
        <button type="button" data-ov-tab="attendance" class="px-4 py-2 rounded-lg text-sm font-bold transition">📷 เช็คชื่อรายวัน</button>
        <button type="button" data-ov-tab="dues" class="px-4 py-2 rounded-lg text-sm font-bold transition">💰 ค่าบำรุงสี</button>
        <button type="button" data-ov-tab="ledger" class="px-4 py-2 rounded-lg text-sm font-bold transition">📒 บัญชีสี</button>
      </div>
      <section class="bg-white border rounded-2xl p-5"><div id="sports-ov-body"></div></section>
    </div>`;let u="attendance";const B=()=>{e.querySelectorAll("[data-ov-tab]").forEach(h=>{const I=h.dataset.ovTab===u;h.className=`px-4 py-2 rounded-lg text-sm font-bold transition ${I?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}`}),e.querySelector("#sports-ov-body").innerHTML=u==="attendance"?f():u==="dues"?T():c()};e.querySelectorAll("[data-ov-tab]").forEach(h=>h.onclick=()=>{u=h.dataset.ovTab,B()}),B()}catch(s){console.error(s),e.innerHTML=Ct()}}const vt={parade:"🕌 ขบวนพาเหรด/ความร่วมมือสี",page:"📣 หน้าเว็บเพจ",color_eval:"🎨 วันเข้าสีเดิม",sports_day:"🏟️ วันกีฬาสีจริง"},Ca={แดง:"#ef4444",น้ำเงิน:"#3b82f6",เขียว:"#10b981",น้ำตาล:"#92400e",ส้ม:"#f97316",ฟ้า:"#0ea5e9",ม่วง:"#a855f7",เทา:"#6b7280"},jt=["แดง","น้ำเงิน","เขียว","น้ำตาล"],Bt=["ส้ม","ฟ้า","ม่วง","เทา"];async function dt(){const e=Lt();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดหน้าประเมินกีฬาสี...</div>';try{const{event:s}=await It(),t=await Xs(le),{data:n}=await le.from("profiles").select("role,is_also_admin").eq("id",t).maybeSingle(),l=(n==null?void 0:n.role)==="admin"||(n==null?void 0:n.is_also_admin)===!0||await fr(t),o="pp5:"+t,[{data:x},{data:r},{data:d},i,{data:a},{data:p}]=await Promise.all([le.from("team_colors").select("id,name,hex_color,logo_url,gender").eq("event_id",s.id).order("gender").order("display_order"),le.from("sports_score_criteria").select("*").eq("event_id",s.id).eq("is_active",!0).order("category").order("display_order"),le.from("sports_score_evaluators").select("*").eq("event_id",s.id).eq("profile_id",t).eq("is_active",!0),ua("sports_score_entries",G=>G.select("id,criteria_id,team_color_id,session_id,judge_username,score,updated_at").eq("event_id",s.id).order("updated_at",{ascending:!0}).order("id",{ascending:!0})),le.from("color_totals").select("*").eq("event_id",s.id),le.from("sports_evaluation_sessions").select("*").eq("event_id",s.id).order("session_type").order("day_no")]);let w={colors:[],attendance:[]},y=[],v=null;const f=l||(d||[]).length>0;if(f){const[{data:G,error:K},{data:W,error:re}]=await Promise.all([le.rpc("get_sports_attendance_overview",{p_event:s.id}),le.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);w=G||{colors:[],attendance:[]},y=W||[],v=K||re||null}let T=[],c=[],u=[];if(l){const[{data:G},{data:K},{data:W}]=await Promise.all([le.from("sports_score_evaluators").select("*").eq("event_id",s.id).order("created_at",{ascending:!1}),le.from("teachers").select("id,full_name,teacher_code,profile_id,image_url").order("full_name"),le.from("sports_evaluation_judges").select("id,name,username,role,criteria_id").eq("event_id",s.id)]);T=G||[],c=(K||[]).filter(re=>re.profile_id),u=W||[]}const B=new Map(c.map(G=>[G.profile_id,G])),h=new Map((r||[]).map(G=>[G.id,G])),I=new Map((i||[]).filter(G=>G.judge_username===o).map(G=>[`${G.criteria_id}|${G.team_color_id}|${G.session_id||""}`,Number(G.score)])),E=new Set((d||[]).filter(G=>!G.criteria_id).map(G=>G.category)),A=new Set((d||[]).filter(G=>G.criteria_id).map(G=>G.criteria_id)),j=l?r||[]:(r||[]).filter(G=>E.has(G.category)||A.has(G.id)),b=[...new Set(j.map(G=>G.category))];let g="M",m=b[0]||null,k=null,_=null,$=!1,S="M",q=null,D="cumulative",L="ALL";const C=G=>{const K=String(G||"").indexOf(" - ");return K===-1?G:G.slice(0,K)};let O=null;const z=()=>{var _e;if(!j.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><p class="text-gray-400">คุณยังไม่ได้รับมอบหมายให้ประเมินหมวดใด — ติดต่อแอดมินเพื่อขอสิทธิ์ (ดูสรุปคะแนนได้ที่แท็บ "สรุปคะแนนทุกสี")</p></section>';const G=j.filter(fe=>fe.category===m),K=new Map;if(m==="sports_day")(p||[]).filter(fe=>fe.session_type==="sports_day").forEach(fe=>{const Le=G.filter(Te=>Te.session_id===fe.id);Le.length&&K.set(fe.id,{label:fe.name,criteria:Le})});else if(m==="color_eval"){(p||[]).filter(Le=>Le.session_type==="color_day").sort((Le,Te)=>(Le.day_no||0)-(Te.day_no||0)).forEach(Le=>{const Te=G.filter(qe=>qe.session_id===Le.id);Te.length&&K.set(Le.id,{label:Le.name,criteria:Te})});const fe=G.filter(Le=>!Le.session_id);fe.length&&K.set("legacy",{label:"หัวข้อเดิมที่ยังไม่ผูกวัน",criteria:fe})}else m==="page"||m==="parade"?G.length&&K.set("all",{label:"หัวข้อทั้งหมด",criteria:G}):G.forEach(fe=>{const Le=C(fe.name);K.has(Le)||K.set(Le,{label:Le,criteria:[]}),K.get(Le).criteria.push(fe)});const W=[...K.keys()];(!k||!W.includes(k))&&(k=W[0]||null);const re=K.get(k),Q=(re==null?void 0:re.criteria)||G,ee=W.map(fe=>K.get(fe).label),de=(p||[]).find(fe=>fe.id===k),ge=(de==null?void 0:de.status)==="closed"&&!l,ye=(x||[]).filter(fe=>fe.gender===g);(!_||!ye.some(fe=>fe.id===_))&&(_=((_e=ye[0])==null?void 0:_e.id)||null);const ve=ye.find(fe=>fe.id===_)||null,xe=fe=>{const Le=Q.map(qe=>I.get(`${qe.id}|${fe.id}|${qe.session_id||""}`)),Te=Le.filter(qe=>qe!==void 0).length;return{saved:Te,total:Le.length,complete:Le.length>0&&Te===Le.length}};return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div><h2 class="font-bold">📝 ให้คะแนนประเมิน</h2><p class="text-xs text-gray-500 mt-1">กรอกคะแนนแต่ละสีแล้วกดบันทึกด้านล่าง — แก้ไขซ้ำได้เสมอ</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-eval-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${g==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-eval-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${g==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        ${b.length>1?`<div class="flex flex-wrap gap-2 mb-4">${b.map(fe=>`<button type="button" data-eval-cattab="${fe}" class="px-4 py-2 rounded-xl text-xs font-bold border transition ${fe===m?"bg-indigo-600 text-white border-indigo-600":"text-gray-600 border-gray-200 hover:bg-gray-50"}">${ne(vt[fe]||fe)}</button>`).join("")}</div>`:""}
        ${W.length>1?`<div class="mb-4"><label class="text-xs font-bold text-gray-600 block mb-1.5">${m==="sports_day"?"🏟️ เลือกวันกีฬาสีจริง":"📅 เลือกรอบ/วันที่จะประเมิน"}</label><select id="eval-session-select" class="w-full sm:w-80 border rounded-xl px-3 py-2.5 text-sm font-bold">${W.map(fe=>`<option value="${ne(fe)}" ${fe===k?"selected":""}>${ne(K.get(fe).label)}</option>`).join("")}</select></div>`:""}
        <div class="sticky top-2 z-10 -mx-1 px-1 py-2 mb-3 bg-white/95 backdrop-blur">
          <div class="flex gap-2 overflow-x-auto pb-1">
            ${ye.map((fe,Le)=>{const Te=(g==="W"?Bt:jt)[Le]||fe.name,qe=Ca[Te]||fe.hex_color||"#94a3b8",lt=xe(fe),Je=fe.id===_;return`<button type="button" data-eval-color="${fe.id}" ${$&&!Je?"disabled":""} class="flex-shrink-0 min-w-[92px] px-3 py-2 rounded-xl border text-left transition ${Je?"ring-2 ring-indigo-500 border-indigo-400":"border-gray-200"} ${$&&!Je?"opacity-50 cursor-not-allowed":""}" style="background:${ne(qe)}12">
                <span class="block text-xs font-bold" style="color:${ne(qe)}">สี${ne(Te)}</span>
                <span class="block text-[10px] text-gray-500 mt-0.5">${lt.complete?"✓ ครบแล้ว":lt.saved?`${lt.saved}/${lt.total} บันทึกแล้ว`:"ยังไม่เริ่ม"}</span>
              </button>`}).join("")}
          </div>
          ${ve?`          <p class="text-xs text-gray-500 mt-2">กำลังประเมิน: <b>สี${ne((g==="W"?Bt:jt)[ye.indexOf(ve)]||ve.name)}</b>${ge?" · ปิดรับคะแนนแล้ว":$?" · มีการแก้ไขที่ยังไม่ได้บันทึก":""}</p>`:""}
        </div>
        ${ve?(()=>{const fe=ye.indexOf(ve),Le=(g==="W"?Bt:jt)[fe]||ve.name,Te=Ca[Le]||ve.hex_color||"#94a3b8",qe=ne((Le||"?").slice(0,1)),Je=Q.map(Ae=>I.get(`${Ae.id}|${ve.id}|${Ae.session_id||""}`)).filter(Ae=>Ae!==void 0).reduce((Ae,Qe)=>Ae+Number(Qe||0),0),gt=Q.reduce((Ae,Qe)=>Ae+Number(Qe.max_score||0),0),Ze=[["อีบาดัต",2],["ความสะอาด",3],["เข้าแถว/เช็คชื่อ",3],["นักกีฬา",3],["สต๊าฟ",4],["กองเชียร์",4]],bt=[];return Q.forEach((Ae,Qe)=>{var yt;const Ht=Ae.group_name||Ae.group_key,xa=m==="page"||m==="parade"?"หัวข้อทั้งหมด":m==="sports_day"?((yt=Ze.find(([,ft],ga)=>{const es=Ze.slice(0,ga).reduce((pn,[,mn])=>pn+mn,0);return Qe>=es&&Qe<es+ft}))==null?void 0:yt[0])||"เกณฑ์อื่นๆ":C(Ae.name),Rt=Ht||xa;let Me=bt.find(ft=>ft.label===Rt);Me||(Me={label:Rt,criteria:[]},bt.push(Me)),Me.criteria.push(Ae)}),`<div class="rounded-2xl border overflow-hidden" style="border-color:${ne(Te)}55">
            <div class="flex items-center gap-3 p-3" style="background:${ne(Te)}14">
              ${ve.logo_url?`<img data-color-logo src="${ne(ve.logo_url)}" class="w-11 h-11 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${ne(Te)}"><div data-color-logo-fallback class="hidden w-11 h-11 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${ne(Te)}">${qe}</div>`:`<div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${ne(Te)}">${qe}</div>`}
              <div><b class="text-sm" style="color:${ne(Te)}">สี${ne(Le)}</b><p class="text-xs text-gray-500 mt-0.5">รวม <span id="eval-current-total">${Je}</span> / ${gt}</p></div>
            </div>
            <div class="p-3 space-y-2 bg-white">
              ${bt.map((Ae,Qe)=>{const xa=Ae.criteria.map(Me=>I.get(`${Me.id}|${ve.id}|${Me.session_id||""}`)).filter(Me=>Me!==void 0).length,Rt=Ae.criteria.reduce((Me,yt)=>Me+Number(yt.max_score||0),0);return`<details class="border rounded-xl overflow-hidden" ${Qe===0?"open":""}>
                  <summary class="cursor-pointer list-none flex items-center justify-between gap-3 px-3 py-2.5 bg-gray-50 hover:bg-gray-100">
                    <span class="text-xs font-bold text-gray-700">${ne(Ae.label)}</span>
                    <span class="text-[10px] text-gray-500">${xa}/${Ae.criteria.length} ข้อ · เต็ม ${Rt}</span>
                  </summary>
                  <div class="p-3 space-y-2">
                    ${Ae.criteria.map(Me=>{const yt=I.get(`${Me.id}|${ve.id}|${Me.session_id||""}`),ft=C(Me.name),ga=ee.length>1&&ft!==Me.name?Me.name.slice(ft.length+3):Me.name;return`<div class="flex items-center justify-between gap-2">
                        <label class="text-xs text-gray-600 flex-1">${ne(ga)}</label>
                        <div class="flex items-center gap-1 flex-shrink-0">
                          <input type="number" inputmode="numeric" min="0" max="${Number(Me.max_score)}" step="1" value="${yt??""}" data-score-input data-crit="${Me.id}" data-color="${ve.id}" ${ge?"disabled":""} class="w-16 border rounded-lg px-2 py-1.5 text-center text-sm">
                          <span class="text-[10px] text-gray-400 w-10">/ ${Number(Me.max_score)}</span>
                        </div>
                      </div>`}).join("")}
                  </div>
                </details>`}).join("")}
            </div>
          </div>`})():""}
        <div class="sticky bottom-2 z-10 mt-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 backdrop-blur py-2">
          <span class="text-xs text-gray-500">${$?"กรุณาบันทึกก่อนเปลี่ยนสี":"เลือกสีจากแถบด้านบน"}</span>
          <button id="eval-submit" type="button" ${ge?"disabled":""} class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold disabled:opacity-50">${ge?"🔒 ปิดรับคะแนน":"💾 บันทึกสีนี้"}</button>
        </div>
      </section>`},M=()=>{const G=K=>K.map(W=>`<div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2" data-crit-row="${W.id}"><span class="flex-1 text-sm" data-crit-view>${ne(W.name)}</span><span class="text-xs text-gray-500 w-20 text-right" data-crit-view>เต็ม ${Number(W.max_score)}</span><button type="button" data-crit-edit="${W.id}" class="px-2 py-1 text-xs border rounded-lg text-indigo-600">แก้ไข</button><button type="button" data-crit-del="${W.id}" class="px-2 py-1 text-xs border rounded-lg text-red-600">ลบ</button></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>';return["parade","page","color_eval","sports_day"].map(K=>{const W=(r||[]).filter(ee=>ee.category===K),re=K==="color_eval"?(p||[]).filter(ee=>ee.session_type==="color_day").sort((ee,de)=>(ee.day_no||0)-(de.day_no||0)):K==="sports_day"?(p||[]).filter(ee=>ee.session_type==="sports_day").sort((ee,de)=>ee.day_no-de.day_no):[],Q=re.map(ee=>({label:ee.name,rows:W.filter(de=>de.session_id===ee.id)}));if(re.length||Q.push({label:"หัวข้อทั้งหมด",rows:W}),K==="color_eval"){const ee=W.filter(de=>!de.session_id);ee.length&&Q.push({label:"หัวข้อเดิมที่ยังไม่ผูกวัน",rows:ee})}return`<div class="mb-4"><h4 class="text-sm font-bold text-gray-700 mb-2">${vt[K]}</h4><div class="space-y-2" data-crit-cat="${K}">${Q.map((ee,de)=>`<details class="border rounded-xl overflow-hidden" ${de===0?"open":""}><summary class="cursor-pointer list-none flex items-center justify-between px-3 py-2 bg-gray-50 text-xs font-bold">${ne(ee.label)}<span class="text-gray-500">${ee.rows.length} หัวข้อ</span></summary><div class="p-2 space-y-1.5">${G(ee.rows)}</div></details>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>'}</div></div>`}).join("")},F=()=>{if(!T.length)return'<p class="text-sm text-gray-400 text-center py-4">ยังไม่มีผู้ประเมิน</p>';const G=new Map;return T.forEach(K=>{G.has(K.profile_id)||G.set(K.profile_id,[]),G.get(K.profile_id).push(K)}),[...G.entries()].map(([K,W])=>{const re=B.get(K);return`<div class="flex items-start gap-3 bg-gray-50 rounded-xl p-3 mb-2"><div class="flex-1 min-w-0"><b class="text-sm block truncate">${ne((re==null?void 0:re.full_name)||"ไม่พบชื่อ (บัญชีอาจถูกลบ)")}</b><div class="flex flex-wrap gap-1.5 mt-1.5">${W.map(Q=>{var ee;return`<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">${ne(vt[Q.category]||Q.category)}${Q.criteria_id?` · ${ne(((ee=h.get(Q.criteria_id))==null?void 0:ee.name)||"")}`:""}${Q.role_label?` · ${ne(Q.role_label)}`:""}<button type="button" data-eval-del="${Q.id}" class="ml-1 text-red-500 font-black">✕</button></span>`}).join("")}</div></div></div>`}).join("")},P=()=>`<div class="mb-6"><h3 class="font-bold text-sm mb-3">🏟️ วันกีฬาสีจริง</h3><div class="grid sm:grid-cols-2 gap-3">${(p||[]).filter(K=>K.session_type==="sports_day").sort((K,W)=>K.day_no-W.day_no).map(K=>`<div class="border rounded-xl p-3 space-y-2">
        <div class="flex items-center justify-between"><b>วันที่ ${K.day_no}</b><span class="text-xs font-bold ${K.status==="open"?"text-emerald-600":K.status==="closed"?"text-red-600":"text-gray-500"}">${K.status==="open"?"เปิดรับคะแนน":K.status==="closed"?"ปิดรับคะแนน":"ยังไม่เปิด"}</span></div>
        <input data-session-name="${K.id}" value="${ne(K.name)}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <input data-session-date="${K.id}" type="date" value="${K.event_date||""}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <div class="flex gap-2"><select data-session-status="${K.id}" class="flex-1 border rounded-lg px-2 py-1.5 text-sm"><option value="upcoming" ${K.status==="upcoming"?"selected":""}>ยังไม่เปิด</option><option value="open" ${K.status==="open"?"selected":""}>เปิดรับคะแนน</option><option value="closed" ${K.status==="closed"?"selected":""}>ปิดรับคะแนน</option></select><button type="button" data-session-save="${K.id}" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold">บันทึก</button></div>
      </div>`).join("")}</div></div>`,R=()=>`<section class="bg-white border rounded-2xl p-5">
      <div class="mb-4"><h2 class="font-bold">⚙️ ตั้งค่าการประเมิน</h2><p class="text-xs text-gray-500 mt-1">จัดการหัวข้อ/คะแนนเต็ม และมอบหมายครูผู้ประเมิน</p></div>
      ${P()}
      <div class="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 class="font-bold text-sm mb-3">📋 หัวข้อเกณฑ์การประเมิน</h3>
          ${M()}
          <div class="grid sm:grid-cols-4 gap-2 mt-3">
            <select id="crit-new-category" class="border rounded-xl px-3 py-2 text-sm">
              <option value="parade">🕌 ขบวนพาเหรด/ความร่วมมือสี</option>
              <option value="color_eval">🎨 วันเข้าสีเดิม</option>
              <option value="page">📣 หน้าเว็บเพจ</option>
              <option value="sports_day">🏟️ วันกีฬาสีจริง</option>
            </select>
            <select id="crit-new-session" class="border rounded-xl px-3 py-2 text-sm sm:col-span-4">
              <option value="">-- เลือกรอบ/วัน (จำเป็นสำหรับวันเข้าสีและวันกีฬาสีจริง) --</option>
              ${(p||[]).filter(G=>G.session_type==="color_day"||G.session_type==="sports_day").sort((G,K)=>(G.session_type+G.day_no).localeCompare(K.session_type+K.day_no)).map(G=>`<option value="${G.id}">${ne(G.name)}</option>`).join("")}
            </select>
            <input id="crit-new-name" placeholder="ชื่อหัวข้อ" class="border rounded-xl px-3 py-2 text-sm sm:col-span-2">
            <input id="crit-new-max" type="number" min="1" value="10" class="border rounded-xl px-3 py-2 text-sm" placeholder="คะแนนเต็ม">
          </div>
          <button id="crit-new-add" type="button" class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">➕ เพิ่มหัวข้อ</button>
        </div>
        <div>
          <h3 class="font-bold text-sm mb-3">🧑‍⚖️ ผู้ประเมิน (${T.length} รายการ)</h3>
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
    </section>`,Y=G=>(r||[]).filter(K=>K.category===G).reduce((K,W)=>K+(Number(W.max_score)||0),0),J=Y("parade")||100,H=Y("page")||100,U=Y("color_eval")||100,X=new Map((a||[]).map(G=>[G.team_color_id,G])),Z=G=>(r||[]).map(K=>{const W=(i||[]).filter(Q=>Q.criteria_id===K.id&&Q.team_color_id===G).map(Q=>Number(Q.score)),re=W.length?Math.round(W.reduce((Q,ee)=>Q+ee,0)/W.length*100)/100:0;return{crit:K,avg:re,count:W.length}}).filter(K=>K.count>0),te=(G,K,W)=>`<div class="space-y-1"><div class="flex justify-between text-xs text-gray-500"><span>${ne(G)}</span><span class="font-bold text-gray-700">${Number(K).toLocaleString("th-TH")} / ${Number(W).toLocaleString("th-TH")}</span></div><div class="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-indigo-500 rounded-full" style="width:${W?Math.min(100,K/W*100):0}%"></div></div></div>`,se=()=>{const G=(p||[]).filter(ee=>ee.session_type==="sports_day").sort((ee,de)=>ee.day_no-de.day_no);if(!G.length)return"";const K=(r||[]).filter(ee=>ee.category==="sports_day"),W=(ee,de)=>K.filter(ge=>ge.session_id===de).reduce((ge,ye)=>{const ve=(i||[]).filter(xe=>xe.criteria_id===ye.id&&xe.team_color_id===ee).map(xe=>Number(xe.score)).filter(Number.isFinite);return ge+(ve.length?ve.reduce((xe,_e)=>xe+_e,0)/ve.length:0)},0),re=ee=>K.filter(de=>de.session_id===ee).reduce((de,ge)=>de+Number(ge.max_score||0),0),Q=(x||[]).filter(ee=>ee.gender===S).map((ee,de)=>{const ge=G.map(_e=>W(ee.id,_e.id)),ye=G.map(re),ve=D==="cumulative"?ge.reduce((_e,fe)=>_e+fe,0):ge[Number(D)-1]||0,xe=D==="cumulative"?ye.reduce((_e,fe)=>_e+fe,0):ye[Number(D)-1]||0;return{c:ee,name:(S==="W"?Bt:jt)[de]||ee.name,total:ve,max:xe,values:ge}}).sort((ee,de)=>de.total-ee.total);return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><h2 class="font-bold">🏟️ สรุปวันกีฬาสีจริง</h2><p class="text-xs text-gray-500 mt-1">คะแนนเฉลี่ยจากผู้ประเมิน แยกวันและสะสม 4 วัน</p></div>
          <div class="flex flex-wrap gap-1">${G.map(ee=>`<button type="button" data-summary-sports-day="${ee.day_no}" class="px-3 py-1.5 rounded-lg text-xs font-bold ${D===String(ee.day_no)?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">วันที่ ${ee.day_no}</button>`).join("")}<button type="button" data-summary-sports-day="cumulative" class="px-3 py-1.5 rounded-lg text-xs font-bold ${D==="cumulative"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">สะสม</button></div>
        </div>
        <div class="space-y-2">${Q.map((ee,de)=>`<div class="flex items-center gap-3 rounded-xl border p-3"><span class="w-7 text-center font-bold text-gray-400">#${de+1}</span><span class="flex-1 font-bold">สี${ne(ee.name)}</span><span class="font-black">${ee.total.toFixed(2)} / ${ee.max}</span></div>`).join("")}</div>
      </section>`},pe=()=>{const G=(x||[]).filter(re=>re.gender===S),K=S==="W"?Bt:jt,W=G.map((re,Q)=>{const ee=K[Q]||re.name,de=X.get(re.id)||{};return{c:re,canonicalName:ee,t:de,grand:Number(de.grand_total)||0}}).sort((re,Q)=>Q.grand-re.grand);return`${se()}${Md((a||[]).filter(re=>re.gender===S),null,S)}<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div><h2 class="font-bold">🏅 สรุปคะแนนทุกสี</h2><p class="text-xs text-gray-500 mt-1">รวมคะแนนกรรมการ + กีฬา + พื้นบ้าน/ทักษะ + อีบาดัต + เหรียญรางวัล ข้อมูลเดียวกับระบบกีฬาสีหลัก อัปเดตสด</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-sum-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${S==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-sum-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${S==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        <div class="space-y-3">
          ${W.map((re,Q)=>{const ee=Ca[re.canonicalName]||re.c.hex_color||"#94a3b8",de=ne(re.canonicalName.slice(0,1)),ge=q===re.c.id,ye=Z(re.c.id);return`<div class="rounded-2xl border overflow-hidden">
              <button type="button" data-toggle-expand="${re.c.id}" class="w-full flex items-center justify-between gap-3 p-3.5" style="background:${ne(ee)}14">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="w-6 text-center font-bold text-sm text-gray-400 flex-shrink-0">#${Q+1}</span>
                  ${re.c.logo_url?`<img data-color-logo src="${ne(re.c.logo_url)}" class="w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${ne(ee)}"><div data-color-logo-fallback class="hidden w-10 h-10 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${ne(ee)}">${de}</div>`:`<div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${ne(ee)}">${de}</div>`}
                  <b class="text-sm truncate" style="color:${ne(ee)}">สี${ne(re.canonicalName)}</b>
                </div>
                <div class="flex items-center gap-3 flex-shrink-0">
                  <span class="px-3.5 py-1.5 rounded-xl bg-gray-900 text-yellow-400 font-black text-sm">${re.grand.toLocaleString("th-TH")}</span>
                  <span class="text-gray-400">${ge?"▲":"▼"}</span>
                </div>
              </button>
              ${ge?`<div class="p-4 border-t bg-gray-50 space-y-4">
                <div class="grid sm:grid-cols-2 gap-3">
                  ${te("🕌 พาเหรด/ความร่วมมือสี",Number(re.t.parade_total)||0,J)}
                  ${te("📣 หน้าเว็บเพจ",Number(re.t.page_total)||0,H)}
                  ${te("🎨 วันเข้าสี/วันกีฬาสีจริง",Number(re.t.color_eval_total)||0,U)}
                  ${te("🧹 วิชาการสะสม",Number(re.t.academic_total)||0,100)}
                  ${te("🏃 กีฬาสากล + กรีฑา",Number(re.t.sports_total)||0,150)}
                  ${te("🎯 พื้นบ้าน / ทักษะ",Number(re.t.folk_skill_total)||0,150)}
                  ${te("🕋 อีบาดัต",Number(re.t.ibadat_total)||0,100)}
                </div>
                <div class="flex flex-wrap gap-2 text-xs font-bold">
                  <span class="px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700">🥇 ทอง ${Number(re.t.gold_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">🥈 เงิน ${Number(re.t.silver_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700">🥉 ทองแดง ${Number(re.t.bronze_count)||0}</span>
                </div>
                <div class="border-t pt-3">
                  <p class="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">รายละเอียดคะแนนแยกหัวข้อ (เฉลี่ยจากผู้ประเมินทุกคน)</p>
                  ${ye.length?`<div class="space-y-1.5">${ye.map(ve=>{var xe;return`<div class="flex items-center justify-between gap-2 bg-white border rounded-lg px-3 py-2"><span class="text-xs text-gray-600">${ne(((xe=vt[ve.crit.category])==null?void 0:xe.split(" ")[0])||"")} ${ne(ve.crit.name)}</span><b class="text-xs">${ve.avg} / ${Number(ve.crit.max_score)}</b></div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 text-center py-3">ยังไม่มีผู้ประเมินให้คะแนน</p>'}
                </div>
              </div>`:""}
            </div>`}).join("")}
        </div>
      </section>`},we=B,me=new Map;(T||[]).forEach(G=>{me.has(G.profile_id)||me.set(G.profile_id,new Set),me.get(G.profile_id).add(G.category)});const ce=[...[...me.entries()].map(([G,K])=>{var W;return{name:((W=we.get(G))==null?void 0:W.full_name)||"ไม่พบชื่อ",source:"ครู ปพ.5",categories:[...K],judgeUsername:"pp5:"+G}}),...(u||[]).map(G=>({name:G.name,source:"กรรมการ AZIZGAMES",categories:[G.role==="colorEval"?"color_eval":G.role],judgeUsername:G.username}))],$e=new Map;(i||[]).forEach(G=>{$e.has(G.judge_username)||$e.set(G.judge_username,[]),$e.get(G.judge_username).push(G)});const ke=(x||[]).length||8,je=(r||[]).map(G=>{const K=(i||[]).filter(ee=>ee.criteria_id===G.id),W=new Set(K.map(ee=>ee.team_color_id)).size,re=new Set(K.map(ee=>ee.judge_username)).size,Q=K.length?Math.round(K.reduce((ee,de)=>ee+Number(de.score),0)/K.length*100)/100:0;return{crit:G,colorsScored:W,judgesCount:re,avg:Q,submitted:K.length}}),He=()=>`<section class="bg-white border rounded-2xl p-5 space-y-6">
      <div>
        <h2 class="font-bold mb-1">🧑‍⚖️ สถานะผู้ประเมิน</h2>
        <p class="text-xs text-gray-500 mb-3">ความครบถ้วนของแต่ละเกณฑ์ (${ke} สี) และสถานะการส่งคะแนนของผู้ประเมินทุกคน</p>
        <div class="overflow-x-auto"><table class="w-full text-sm">
          <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left">หัวข้อ</th><th class="p-2 text-center">สีที่มีคะแนน</th><th class="p-2 text-center">ผู้ประเมิน</th><th class="p-2 text-center">เฉลี่ย</th></tr></thead>
          <tbody>${je.map(G=>{var K;return`<tr class="border-b"><td class="p-2">${ne(((K=vt[G.crit.category])==null?void 0:K.split(" ")[0])||"")} ${ne(G.crit.name)}</td><td class="p-2 text-center ${G.colorsScored<ke?"text-amber-600 font-bold":"text-emerald-600 font-bold"}">${G.colorsScored}/${ke}</td><td class="p-2 text-center">${G.judgesCount}</td><td class="p-2 text-center font-bold">${G.submitted?G.avg+" / "+Number(G.crit.max_score):"—"}</td></tr>`}).join("")||'<tr><td colspan="4" class="p-6 text-center text-gray-400">ยังไม่มีหัวข้อเกณฑ์ในระบบ</td></tr>'}</tbody>
        </table></div>
      </div>
      <div>
        <h3 class="font-bold text-sm mb-3">รายชื่อผู้ประเมิน (${ce.length} คน)</h3>
        <div class="space-y-2">${ce.map(G=>{const K=$e.get(G.judgeUsername)||[],W=K.length,re=W?K.reduce((Q,ee)=>ee.updated_at>Q?ee.updated_at:Q,K[0].updated_at):null;return`<div class="flex items-center justify-between gap-3 bg-gray-50 rounded-xl p-3"><div class="min-w-0"><b class="text-sm block truncate">${ne(G.name)}</b><p class="text-xs text-gray-500 mt-0.5">${ne(G.source)} · ${G.categories.map(Q=>ne(vt[Q]||Q)).join(", ")}</p></div><div class="text-right flex-shrink-0"><span class="px-3 py-1 rounded-full text-xs font-bold ${W?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-400"}">${W?W+" รายการ":"ยังไม่ส่งคะแนน"}</span>${re?`<p class="text-[10px] text-gray-400 mt-1">ล่าสุด ${new Date(re).toLocaleDateString("th-TH",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}</p>`:""}</div></div>`}).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีผู้ประเมินในระบบ</p>'}</div>
      </div>
    </section>`,V=()=>{if(v)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">⚠️</div><h2 class="font-bold text-gray-800">โหลดสรุปเช็คชื่อเข้าสีไม่สำเร็จ</h2><p class="text-xs text-gray-500 mt-2">กรุณารีเฟรชหน้า หรือตรวจสอบสิทธิ์ผู้ประเมินและการตั้งค่าปฏิทินกีฬาสี</p></section>';const G=w.colors||[],K=[...new Map(hr(y).map(xe=>[xe.date,xe.label])).entries()].map(([xe,_e])=>({date:xe,label:_e})).sort((xe,_e)=>xe.date<_e.date?-1:1);if(!G.length)return'<section class="bg-white border rounded-2xl p-8 text-center text-gray-400">ยังไม่มีข้อมูลสีในกิจกรรมนี้</section>';if(!K.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">📅</div><h2 class="font-bold text-gray-800">ยังไม่มีวันเข้าสีในปฏิทินปฏิบัติงาน</h2><p class="text-xs text-gray-500 mt-2">กรุณาตั้งวันเข้าสีหรือวันกีฬาสีจริงในปฏิทินก่อนดูเปอร์เซ็นต์</p></section>';const W=G.filter(xe=>L==="ALL"||xe.gender===L),re=new Map((w.attendance||[]).map(xe=>[`${xe.team_color_id}|${xe.session_date}`,Number(xe.checked_count)||0])),Q=(xe,_e)=>_e?Math.round(xe*1e3/_e)/10:0,ee=xe=>xe>=80?"text-emerald-600":xe>=50?"text-amber-600":"text-red-600",de=W.map(xe=>{const _e=Number(xe.member_count)||0,fe=K.map(Te=>({checked:re.get(`${xe.id}|${Te.date}`)||0,total:_e,pct:Q(re.get(`${xe.id}|${Te.date}`)||0,_e)})),Le=fe.length?Math.round(fe.reduce((Te,qe)=>Te+qe.pct,0)/fe.length*10)/10:0;return{c:xe,total:_e,daily:fe,average:Le}}),ge=K.map((xe,_e)=>{const fe=de.reduce((Te,qe)=>Te+qe.daily[_e].checked,0),Le=de.reduce((Te,qe)=>Te+qe.total,0);return{checked:fe,total:Le,pct:Q(fe,Le)}}),ye=de.reduce((xe,_e)=>xe+_e.total,0),ve=ge.length?Math.round(ge.reduce((xe,_e)=>xe+_e.pct,0)/ge.length*10)/10:0;return`<section class="bg-white border rounded-2xl p-5 space-y-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="font-bold">📷 สรุปเปอร์เซ็นต์การเช็คชื่อเข้าสี</h2><p class="text-xs text-gray-500 mt-1">คำนวณจากผู้ที่เช็คชื่อแล้ว ÷ สมาชิกทั้งหมดของสีนั้น แยกตามวันที่ตั้งไว้ในปฏิทินปฏิบัติงาน</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-attendance-gender="ALL" class="px-3 py-1.5 rounded-lg text-xs font-bold ${L==="ALL"?"bg-indigo-600 text-white":"text-gray-600"}">👥 ทุกสี</button>
            <button type="button" data-attendance-gender="M" class="px-3 py-1.5 rounded-lg text-xs font-bold ${L==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 สีชาย</button>
            <button type="button" data-attendance-gender="W" class="px-3 py-1.5 rounded-lg text-xs font-bold ${L==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 สีหญิง</button>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-3">
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 p-3"><p class="text-xs text-indigo-700">จำนวนสีที่แสดง</p><b class="text-2xl text-indigo-900">${de.length}</b> <span class="text-xs text-indigo-700">สี</span></div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3"><p class="text-xs text-slate-600">สมาชิกตามสี</p><b class="text-2xl text-slate-900">${ye.toLocaleString("th-TH")}</b> <span class="text-xs text-slate-600">คน</span></div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 p-3"><p class="text-xs text-emerald-700">เฉลี่ยรวมทุกวัน</p><b class="text-2xl ${ee(ve)}">${ve}%</b></div>
        </div>
        <div class="overflow-x-auto border rounded-xl">
          <table class="w-full text-sm border-collapse min-w-[760px]">
            <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left sticky left-0 bg-gray-50 z-10">สี</th><th class="p-3 text-center whitespace-nowrap">สมาชิก</th>${K.map(xe=>`<th class="p-3 text-center whitespace-nowrap"><div>${ne(xe.date)}</div><div class="text-[10px] font-normal text-gray-400">${ne(xe.label||"")}</div></th>`).join("")}<th class="p-3 text-center whitespace-nowrap">เฉลี่ยรายวัน</th></tr></thead>
            <tbody>${de.map(xe=>`<tr class="border-b"><td class="p-3 font-bold sticky left-0 bg-white z-10" style="color:${ne(xe.c.hex_color||"#475569")}">สี${ne(xe.c.name)}</td><td class="p-3 text-center text-gray-600">${xe.total}</td>${xe.daily.map(_e=>`<td class="p-3 text-center"><b class="${ee(_e.pct)}">${_e.pct}%</b><div class="text-[10px] text-gray-400 mt-0.5">${_e.checked}/${_e.total}</div></td>`).join("")}<td class="p-3 text-center font-black ${ee(xe.average)}">${xe.average}%</td></tr>`).join("")}</tbody>
            <tfoot><tr class="bg-gray-50 font-bold"><td class="p-3 sticky left-0 bg-gray-50 z-10">รวมตามวันที่</td><td class="p-3 text-center">${ye}</td>${ge.map(xe=>`<td class="p-3 text-center"><span class="${ee(xe.pct)}">${xe.pct}%</span><div class="text-[10px] text-gray-500 mt-0.5">${xe.checked}/${xe.total}</div></td>`).join("")}<td class="p-3 text-center ${ee(ve)}">${ve}%</td></tr></tfoot>
          </table>
        </div>
        <p class="text-[11px] text-gray-400">หมายเหตุ: ตัวหารสมาชิกใช้หลักเดียวกับหน้า “ภาพรวมกีฬาสี” และนับการเช็คชื่อซ้ำของคนเดิมในวันเดียวเป็น 1 คน</p>
      </section>`},ue=[{key:"score",label:"📝 ให้คะแนน",show:!0},{key:"summary",label:"🏅 สรุปคะแนนทุกสี",show:!0},{key:"attendance",label:"📷 เช็คชื่อเข้าสี (%)",show:f},{key:"status",label:"🧑‍⚖️ สถานะผู้ประเมิน",show:l},{key:"settings",label:"⚙️ ตั้งค่า",show:l}].filter(G=>G.show);let ie=j.length?"score":l?"status":"summary";const oe=()=>{var G,K,W,re;e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
        <div><h1 class="text-2xl font-bold">🧑‍⚖️ ประเมินกีฬาสี</h1><p class="text-sm text-gray-500">ให้คะแนน ดูสรุปผล และติดตามสถานะผู้ประเมิน ทุกอย่างในหน้าเดียว</p></div>
        <div class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">${ue.map(Q=>`<button type="button" data-eval-main-tab="${Q.key}" class="px-4 py-2 rounded-lg text-sm font-bold transition ${ie===Q.key?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}">${Q.label}</button>`).join("")}</div>
        <div id="eval-tab-body">${ie==="score"?z():ie==="summary"?pe():ie==="attendance"?V():ie==="status"?He():R()}</div>
      </div>`,e.querySelectorAll("[data-eval-main-tab]").forEach(Q=>Q.onclick=()=>{ie=Q.dataset.evalMainTab,oe()}),e.querySelectorAll("[data-eval-gender]").forEach(Q=>Q.onclick=()=>{if($)return be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนกลุ่มสี","warning");g=Q.dataset.evalGender,_=null,oe()}),e.querySelectorAll("[data-eval-cattab]").forEach(Q=>Q.onclick=()=>{if($)return be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนหัวข้อ","warning");m=Q.dataset.evalCattab,_=null,oe()}),e.querySelectorAll("[data-color-logo]").forEach(Q=>Q.onerror=()=>{Q.classList.add("hidden");const ee=Q.nextElementSibling;ee==null||ee.classList.remove("hidden"),ee==null||ee.classList.add("flex")}),(G=e.querySelector("#eval-session-select"))==null||G.addEventListener("change",Q=>{if($)return Q.target.value=k||"",be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนรอบ","warning");k=Q.target.value,_=null,oe()}),e.querySelectorAll("[data-eval-color]").forEach(Q=>Q.onclick=()=>{if($)return be("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนสลับสี","warning");_=Q.dataset.evalColor,oe()}),e.querySelectorAll("[data-score-input]").forEach(Q=>Q.addEventListener("input",()=>{const ee=Q.value.trim();ee!==""&&(Number(ee)<0||Number(ee)>Number(Q.max))&&(Q.value=Math.max(0,Math.min(Number(Q.max),Number(ee)||0))),$=!0})),(K=e.querySelector("#eval-submit"))==null||K.addEventListener("click",async()=>{const Q=[];if(e.querySelectorAll("[data-score-input]").forEach(ye=>{const ve=String(ye.value).trim();if(ve==="")return;const xe=h.get(ye.dataset.crit);Q.push({event_id:s.id,criteria_id:ye.dataset.crit,team_color_id:ye.dataset.color,session_id:(xe==null?void 0:xe.session_id)||null,judge_username:o,score:Number(ve),updated_at:new Date().toISOString()})}),!Q.length)return be("กรุณากรอกคะแนนอย่างน้อย 1 ช่อง","error");const ee=(p||[]).find(ye=>ye.id===k);if((ee==null?void 0:ee.status)==="closed"&&!l)return be("รอบนี้ปิดรับคะแนนแล้ว","error");const de=e.querySelector("#eval-submit");de.disabled=!0,de.textContent="กำลังบันทึก...";const{error:ge}=await le.from("sports_score_entries").upsert(Q,{onConflict:"criteria_id,team_color_id,judge_username"});if(de.disabled=!1,de.textContent="💾 บันทึกคะแนนประเมิน",ge)return be(ge.message,"error");Q.forEach(ye=>I.set(`${ye.criteria_id}|${ye.team_color_id}|${ye.session_id||""}`,ye.score)),$=!1,be("บันทึกคะแนนประเมินแล้ว"),oe()}),ie==="summary"&&(e.querySelectorAll("[data-sum-gender]").forEach(Q=>Q.onclick=()=>{S=Q.dataset.sumGender,q=null,oe()}),e.querySelectorAll("[data-toggle-expand]").forEach(Q=>Q.onclick=()=>{const ee=Q.dataset.toggleExpand;q=q===ee?null:ee,oe()}),e.querySelectorAll("[data-summary-sports-day]").forEach(Q=>Q.onclick=()=>{D=Q.dataset.summarySportsDay,oe()})),ie==="attendance"&&e.querySelectorAll("[data-attendance-gender]").forEach(Q=>Q.onclick=()=>{L=Q.dataset.attendanceGender,oe()}),!(ie!=="settings"||!l)&&(O=Cd({wrap:e.querySelector("#eval-teacher-picker-wrap"),items:c.map(Q=>({id:Q.profile_id,label:Q.full_name,sub:Q.teacher_code,photo:Q.image_url})),placeholder:"พิมพ์ชื่อครู...",emptyLabel:"-- เลือกครูผู้ประเมิน --",photoClass:"w-7 h-9 rounded object-cover flex-shrink-0 border"}),e.querySelectorAll("[data-session-save]").forEach(Q=>Q.addEventListener("click",async()=>{var ye,ve,xe;const ee=Q.dataset.sessionSave,de={name:(ye=e.querySelector(`[data-session-name="${ee}"]`))==null?void 0:ye.value.trim(),event_date:((ve=e.querySelector(`[data-session-date="${ee}"]`))==null?void 0:ve.value)||null,status:(xe=e.querySelector(`[data-session-status="${ee}"]`))==null?void 0:xe.value,updated_at:new Date().toISOString()};if(!de.name)return be("กรุณาระบุชื่อวัน","error");const{error:ge}=await le.from("sports_evaluation_sessions").update(de).eq("id",ee);if(ge)return be(ge.message,"error");be("บันทึกวันกีฬาสีแล้ว"),dt()})),(W=e.querySelector("#crit-new-add"))==null||W.addEventListener("click",async()=>{const Q=e.querySelector("#crit-new-category").value,ee=e.querySelector("#crit-new-session").value||null,de=e.querySelector("#crit-new-name").value.trim(),ge=Number(e.querySelector("#crit-new-max").value);if(!de||!ge||ge<=0)return be("กรอกชื่อหัวข้อและคะแนนเต็มให้ครบ","error");if((Q==="color_eval"||Q==="sports_day")&&!ee)return be("กรุณาเลือกรอบ/วันที่ของหัวข้อนี้","error");const ye=(r||[]).filter(xe=>xe.category===Q).length,{error:ve}=await le.from("sports_score_criteria").insert({event_id:s.id,category:Q,session_id:ee,name:de,max_score:ge,display_order:ye});if(ve)return be(ve.message,"error");be("เพิ่มหัวข้อแล้ว"),dt()}),e.querySelectorAll("[data-crit-edit]").forEach(Q=>Q.addEventListener("click",()=>{const ee=e.querySelector(`[data-crit-row="${Q.dataset.critEdit}"]`),de=h.get(Q.dataset.critEdit);ee.innerHTML=`<input data-edit-name value="${ne(de.name)}" class="flex-1 border rounded-lg px-2 py-1.5 text-xs"><input data-edit-max type="number" min="1" value="${Number(de.max_score)}" class="w-20 border rounded-lg px-2 py-1.5 text-xs"><button type="button" data-edit-save class="px-2 py-1 text-xs bg-emerald-600 text-white rounded-lg">บันทึก</button><button type="button" data-edit-cancel class="px-2 py-1 text-xs border rounded-lg">ยกเลิก</button>`,ee.querySelector("[data-edit-cancel]").onclick=()=>oe(),ee.querySelector("[data-edit-save]").onclick=async()=>{const ge=ee.querySelector("[data-edit-name]").value.trim(),ye=Number(ee.querySelector("[data-edit-max]").value);if(!ge||!ye||ye<=0)return be("กรอกข้อมูลให้ครบ","error");const{error:ve}=await le.from("sports_score_criteria").update({name:ge,max_score:ye}).eq("id",de.id);if(ve)return be(ve.message,"error");be("แก้ไขแล้ว"),dt()}})),e.querySelectorAll("[data-crit-del]").forEach(Q=>Q.addEventListener("click",async()=>{if(!confirm("ลบหัวข้อนี้? คะแนนที่เคยให้ไว้ในหัวข้อนี้จะไม่ถูกนับต่อ"))return;const{error:ee}=await le.from("sports_score_criteria").delete().eq("id",Q.dataset.critDel);if(ee)return be(ee.message,"error");be("ลบหัวข้อแล้ว"),dt()})),(re=e.querySelector("#eval-add-btn"))==null||re.addEventListener("click",async()=>{const Q=O==null?void 0:O.getValue();if(!Q)return be("เลือกครูก่อน","error");const ee=[...e.querySelectorAll("[data-eval-cat]:checked")].map(ve=>ve.dataset.evalCat);if(!ee.length)return be("เลือกอย่างน้อย 1 หมวด","error");const de=e.querySelector("#eval-role-label").value.trim()||null,ge=ee.map(ve=>({event_id:s.id,profile_id:Q,category:ve,role_label:de})),{error:ye}=await le.from("sports_score_evaluators").insert(ge);if(ye)return ye.code==="23505"?be("มีบางหมวดที่มอบหมายให้ครูคนนี้ไว้แล้ว","error"):be(ye.message,"error");be("เพิ่มผู้ประเมินแล้ว"),dt()}),e.querySelectorAll("[data-eval-del]").forEach(Q=>Q.addEventListener("click",async()=>{if(!confirm("ลบสิทธิ์ประเมินรายการนี้?"))return;const{error:ee}=await le.from("sports_score_evaluators").delete().eq("id",Q.dataset.evalDel);if(ee)return be(ee.message,"error");be("ลบแล้ว"),dt()})))};oe()}catch(s){console.error(s),e.innerHTML=Ct()}}async function it(e="ชาย"){var t,n,l,o,x;const s=Lt();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:r,cfg:d}=await It(),i=await Zs(le),{data:a}=await le.from("profiles").select("role,is_also_admin").eq("id",i.id).maybeSingle();if(!((a==null?void 0:a.role)==="admin"||(a==null?void 0:a.is_also_admin)===!0)){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:w,error:y},{data:v},{data:f}]=await Promise.all([le.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",r.id).eq("gender",e).order("design_no"),le.from("sports_shirt_vote_managers").select("*,teachers(full_name,teacher_code)").eq("event_id",r.id),le.from("teachers").select("id,teacher_code,full_name,dept,profile_id").not("profile_id","is",null).order("full_name")]);if(y)throw y;(w||[]).forEach(h=>{h.sports_shirt_design_colors=(h.sports_shirt_design_colors||[]).sort((I,E)=>I.display_order-E.display_order)});let T=[];const c=h=>h?new Date(h).toISOString().slice(0,16):"",u=(w||[]).map(h=>`
      <div class="border rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between"><b>แบบที่ ${h.design_no}</b>${h.html_url?'<span class="text-[10px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">มี 3 มิติ</span>':""}</div>
        <input data-design-name="${h.id}" value="${ne(h.name||"")}" placeholder="ชื่อแบบ" class="w-full border rounded-lg px-2 py-1.5 text-xs">
        <label class="block text-[10px] text-gray-400">ไฟล์ HTML 3 มิติ (ออปชัน ใช้ร่วมทุกสี)</label>
        <input data-design-html="${h.id}" type="file" accept="text/html,.html" class="w-full text-xs">
        <div class="grid grid-cols-2 gap-2 pt-1">
          ${(h.sports_shirt_design_colors||[]).map(I=>`
            <div class="border rounded-xl p-2">
              <div data-color-preview="${I.id}">${I.image_url?`<img src="${ne(I.image_url)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`:'<div class="w-full h-20 bg-gray-50 rounded-lg border grid place-items-center text-gray-300 text-xl mb-1">👕</div>'}</div>
              <p class="text-[10px] font-bold text-gray-600 text-center mb-1">สี${ne(I.color_name)}</p>
              <input data-color-image="${I.id}" data-color-design="${h.id}" type="file" accept="image/png,image/jpeg,image/webp" class="w-full text-[10px]">
            </div>
          `).join("")}
        </div>
        <button data-design-save="${h.id}" class="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold mt-1">บันทึกแบบที่ ${h.design_no}</button>
      </div>
    `).join(""),B=(v||[]).map(h=>{var I,E;return`<tr class="border-t"><td class="p-3">${ne(((I=h.teachers)==null?void 0:I.full_name)||"ไม่พบชื่อ")}${(E=h.teachers)!=null&&E.teacher_code?` (${ne(h.teachers.teacher_code)})`:""}</td><td class="p-3 text-right"><button data-vote-manager-remove="${h.id}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button></td></tr>`}).join("")||'<tr><td colspan="2" class="p-6 text-center text-gray-400">ยังไม่มีครูที่ได้รับสิทธิ์เพิ่ม</td></tr>';s.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <h1 class="text-2xl font-bold">🗳️ ตั้งค่าโหวตแบบเสื้อกีฬาสี</h1>
      <div class="bg-white border rounded-2xl p-5">
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">เปิดโหวตตั้งแต่</label><input id="vote-opens-at" type="datetime-local" value="${c(d==null?void 0:d.shirt_vote_opens_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ปิดโหวตเมื่อ</label><input id="vote-closes-at" type="datetime-local" value="${c(d==null?void 0:d.shirt_vote_closes_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-window-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกช่วงเวลาโหวต (ใช้ร่วมกันทั้งชาย-หญิง)</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">🌐 โหมดโหวตสาธารณะ (ไม่ต้องล็อกอิน)</h3>
        <p class="text-xs text-gray-500 mb-3">เปิดหน้าแยกให้นักเรียนกรอกรหัสนักเรียนเข้าโหวตได้โดยไม่ต้องล็อกอิน ปพ.5 — เหมาะกับจุดโหวตหน้างาน (kiosk) เข้าที่ <code>shirt-vote-public.html</code></p>
        <div class="mb-3">${wt("shirt_vote_public_enabled","เปิดโหมดโหวตไม่ล็อกอิน","นักเรียนกรอกรหัสนักเรียนแล้วเข้าโหวตได้ทันที",!!(d!=null&&d.shirt_vote_public_enabled))}</div>
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปคู่มือการเริ่มใช้งาน</label><input id="vote-public-tutorial-url" value="${ne((d==null?void 0:d.shirt_vote_tutorial_url)||"")}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปแนะนำ ปพ.5</label><input id="vote-public-intro-url" value="${ne((d==null?void 0:d.shirt_vote_intro_url)||"")}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-public-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกโหมดโหวตสาธารณะ</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="ชาย"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👦 ชาย</button>
          <button data-vote-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="หญิง"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👧 หญิง</button>
        </div>
        <div class="grid md:grid-cols-2 gap-4">${u}</div>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">👤 มอบสิทธิ์ครูดูแดชบอร์ดผลโหวต</h3>
        <div class="flex gap-2 mb-3"><input id="vote-manager-code-input" class="flex-1 border rounded-xl px-3 py-2 text-sm" placeholder="กรอกรหัสครู เช่น 1087, 1092"><button id="vote-manager-search" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">ค้นหา</button></div>
        <div id="vote-manager-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4"><div id="vote-manager-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div><button id="vote-manager-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันมอบสิทธิ์</button></div>
        <div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ครู</th><th></th></tr></thead><tbody>${B}</tbody></table></div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-gender]").forEach(h=>h.addEventListener("click",()=>it(h.dataset.voteGender))),s.querySelectorAll("[data-color-image]").forEach(h=>h.addEventListener("change",()=>{var A;const I=(A=h.files)==null?void 0:A[0];if(!I)return;const E=s.querySelector(`[data-color-preview="${h.dataset.colorImage}"]`);E&&(E.innerHTML=`<img src="${URL.createObjectURL(I)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`)})),(t=s.querySelector("#vote-window-save"))==null||t.addEventListener("click",async()=>{var A,j;const h=(A=s.querySelector("#vote-opens-at"))==null?void 0:A.value,I=(j=s.querySelector("#vote-closes-at"))==null?void 0:j.value,{error:E}=await le.from("sports_portal_settings").update({shirt_vote_opens_at:h?new Date(h).toISOString():null,shirt_vote_closes_at:I?new Date(I).toISOString():null,updated_at:new Date().toISOString()}).eq("event_id",r.id);if(E)return be(E.message,"error");be("บันทึกช่วงเวลาโหวตแล้ว"),it(e)}),s.querySelectorAll('[data-cfg="shirt_vote_public_enabled"]').forEach(h=>h.addEventListener("click",()=>{const I=h.dataset.enabled!=="true";h.dataset.enabled=I?"true":"false",h.textContent=I?"ปิดใช้งาน":"เปิดใช้งาน"})),(n=s.querySelector("#vote-public-save"))==null||n.addEventListener("click",async()=>{var A,j,b,g;const h=s.querySelector('[data-cfg="shirt_vote_public_enabled"]'),I={shirt_vote_public_enabled:(h==null?void 0:h.dataset.enabled)==="true",shirt_vote_tutorial_url:((j=(A=s.querySelector("#vote-public-tutorial-url"))==null?void 0:A.value)==null?void 0:j.trim())||null,shirt_vote_intro_url:((g=(b=s.querySelector("#vote-public-intro-url"))==null?void 0:b.value)==null?void 0:g.trim())||null,updated_at:new Date().toISOString()},{error:E}=await le.from("sports_portal_settings").update(I).eq("event_id",r.id);if(E)return be(E.message,"error");be("บันทึกโหมดโหวตสาธารณะแล้ว"),it(e)}),s.querySelectorAll("[data-design-save]").forEach(h=>h.addEventListener("click",async()=>{var j,b,g,m,k,_;const I=h.dataset.designSave,E=((b=(j=s.querySelector(`[data-design-name="${I}"]`))==null?void 0:j.value)==null?void 0:b.trim())||null,A=(m=(g=s.querySelector(`[data-design-html="${I}"]`))==null?void 0:g.files)==null?void 0:m[0];h.disabled=!0,h.textContent="กำลังบันทึก...";try{const $={name:E,updated_at:new Date().toISOString()};A&&($.html_url=await sl(I,A));const{error:S}=await le.from("sports_shirt_designs").update($).eq("id",I);if(S)throw S;const q=s.querySelectorAll(`[data-color-design="${I}"]`);for(const D of q){const L=(k=D.files)==null?void 0:k[0];if(!L)continue;const C=D.dataset.colorImage,O=await rl(I,C,L),{error:z}=await le.from("sports_shirt_design_colors").update({image_url:O,updated_at:new Date().toISOString()}).eq("id",C);if(z)throw z}be("บันทึกแบบเสื้อแล้ว"),it(e)}catch($){be($.message,"error"),h.disabled=!1,h.textContent=`บันทึกแบบที่ ${((_=(w||[]).find(S=>S.id===I))==null?void 0:_.design_no)||""}`}})),(l=s.querySelector("#vote-manager-search"))==null||l.addEventListener("click",()=>{var j;const h=String(((j=s.querySelector("#vote-manager-code-input"))==null?void 0:j.value)||"").split(/[\s,]+/).map(b=>b.trim()).filter(Boolean);if(!h.length)return be("กรุณากรอกรหัสครู","error");const I=new Set(h.map(String));if(T=(f||[]).filter(b=>I.has(String(b.teacher_code))),!T.length)return be("ไม่พบรหัสครูที่ตรงกัน","error");const E=s.querySelector("#vote-manager-preview"),A=s.querySelector("#vote-manager-preview-cards");E.classList.remove("hidden"),A.innerHTML=T.map(b=>`<div class="bg-white rounded-xl border border-indigo-100 p-3"><p class="font-bold text-gray-800 text-xs">${ne(b.full_name)}</p><p class="text-[10px] text-gray-400">รหัสครู ${ne(b.teacher_code)} · กลุ่มสาระ ${ne(b.dept||"—")}</p></div>`).join("")}),(o=s.querySelector("#vote-manager-code-input"))==null||o.addEventListener("keydown",h=>{var I;h.key==="Enter"&&(h.preventDefault(),(I=s.querySelector("#vote-manager-search"))==null||I.click())}),(x=s.querySelector("#vote-manager-add"))==null||x.addEventListener("click",async()=>{if(!T.length)return be("กรุณาค้นหารายชื่อก่อน","error");const h=T.map(E=>({event_id:r.id,teacher_id:E.id,profile_id:E.profile_id,granted_by:null})),{error:I}=await le.from("sports_shirt_vote_managers").upsert(h,{onConflict:"event_id,teacher_id"});if(I)return be(I.message,"error");be(`มอบสิทธิ์แล้ว ${h.length} คน`),it(e)}),s.querySelectorAll("[data-vote-manager-remove]").forEach(h=>h.addEventListener("click",async()=>{const{error:I}=await le.from("sports_shirt_vote_managers").delete().eq("id",h.dataset.voteManagerRemove);if(I)return be(I.message,"error");be("ปิดสิทธิ์แล้ว"),it(e)}))}catch(r){console.error(r),s.innerHTML=Ct()}}async function wr(e="ชาย"){const s=Lt();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:t}=await It(),n=await Zs(le),{data:l}=await le.from("profiles").select("role,is_also_admin").eq("id",n.id).maybeSingle(),o=(l==null?void 0:l.role)==="admin"||(l==null?void 0:l.is_also_admin)===!0,{data:x}=await le.from("sports_shirt_vote_managers").select("id").eq("event_id",t.id).eq("profile_id",n.id).maybeSingle();if(!o&&!x){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:r,error:d},i]=await Promise.all([le.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",t.id).eq("gender",e).order("design_no"),ua("sports_shirt_votes",u=>u.select("design_id").eq("event_id",t.id))]);if(d)throw d;const a=new Set((r||[]).map(u=>u.id)),p={};(i||[]).forEach(u=>{a.has(u.design_id)&&(p[u.design_id]=(p[u.design_id]||0)+1)});const w=Object.values(p).reduce((u,B)=>u+B,0),y=Math.max(0,...(r||[]).map(u=>p[u.id]||0)),v=[...r||[]].sort((u,B)=>(p[B.id]||0)-(p[u.id]||0)),f=u=>u===0?"🥇":u===1?"🥈":u===2?"🥉":`#${u+1}`,T={},c=v.map((u,B)=>{const h=p[u.id]||0,I=w?Math.round(h/w*100):0,E=(u.sports_shirt_design_colors||[]).filter(b=>b.image_url);T[u.id]=E.length?Math.floor(Math.random()*E.length):0;const A=E[T[u.id]]||null;return`
        <div class="flex items-center gap-4 p-3 rounded-2xl ${h>0&&h===y?"bg-indigo-50/60":""}">
          <span class="w-8 text-center text-sm font-bold text-gray-400 flex-shrink-0">${f(B)}</span>
          <div class="relative flex-shrink-0">
            ${A!=null&&A.image_url?`<img data-shirt-dash-img="${u.id}" src="${ne(A.image_url)}" class="w-14 h-14 object-contain bg-gray-50 rounded-xl border">`:'<div class="w-14 h-14 bg-gray-50 rounded-xl border grid place-items-center text-gray-300 text-xl">👕</div>'}
            ${E.length>1?`<button data-shirt-dash-swap="${u.id}" class="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center text-[11px]" title="สลับสี">🔄</button>`:""}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-700 truncate mb-1">${ne(u.name||`แบบที่ ${u.design_no}`)}</p>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden"><div class="bg-indigo-500 h-full rounded-full transition-all" style="width:${I}%"></div></div>
              <span class="w-24 text-xs text-right text-gray-500 flex-shrink-0">${h} คน (${I}%)</span>
            </div>
          </div>
        </div>
      `}).join("");s.innerHTML=`<div class="max-w-3xl mx-auto space-y-5">
      <div class="flex items-center justify-between"><h1 class="text-2xl font-bold">📊 ผลโหวตแบบเสื้อกีฬาสี</h1><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">โหวตแล้ว ${w} คน</span></div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-dash-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="ชาย"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👦 ชาย</button>
          <button data-vote-dash-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="หญิง"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👧 หญิง</button>
        </div>
        <div class="divide-y divide-gray-50">${c||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีแบบเสื้อของเพศนี้</p>'}</div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-dash-gender]").forEach(u=>u.addEventListener("click",()=>wr(u.dataset.voteDashGender))),s.querySelectorAll("[data-shirt-dash-swap]").forEach(u=>u.addEventListener("click",()=>{const B=u.dataset.shirtDashSwap,h=(r||[]).find(A=>A.id===B),I=((h==null?void 0:h.sports_shirt_design_colors)||[]).filter(A=>A.image_url);if(!I.length)return;T[B]=((T[B]||0)+1)%I.length;const E=s.querySelector(`[data-shirt-dash-img="${B}"]`);E&&(E.src=I[T[B]].image_url)}))}catch(t){console.error(t),s.innerHTML=Ct()}}const _r="sports_offline_queue",$r=()=>{try{return JSON.parse(localStorage.getItem(_r)||"[]")}catch{return[]}},Td=e=>localStorage.setItem(_r,JSON.stringify(e));let Ia=!1;const jd=new Set;function Bd(){const e=$r();jd.forEach(s=>{try{s(e)}catch(t){console.warn(t)}})}async function qd(e){const s=e.type==="attendance"?"sports_attendance":"sports_team_dues",{error:t}=await le.from(s).insert(e.payload);if(t&&t.code!=="23505")throw t}async function Ad(){if(Ia)return;let e=$r();if(!e.length)return;Ia=!0;let s=0;for(const t of e)try{await qd(t),s++}catch{break}Ia=!1,s>0&&(e=e.slice(s),Td(e),Bd())}window.addEventListener("online",()=>Ad());const qt=[{key:"sports_total",label:"คะแนนกีฬา (สากล + กรีฑา)",icon:"🏃"},{key:"folk_skill_total",label:"กีฬาพื้นบ้าน / ทักษะ",icon:"🎯"},{key:"parade_total",label:"พาเหรด (สวนสนาม)",icon:"🕌"},{key:"page_total",label:"เพจ Facebook",icon:"📣"},{key:"ibadat_total",label:"คะแนนอีบาดัต",icon:"🕋"},{key:"grand_total",label:"คะแนนรวมทั้งหมด",icon:"🏆"}],Md=(e,s,t,n=5)=>{const l=(e||[]).filter(r=>!t||r.gender===t),o=qt[n]||qt[5],x=[...l].sort((r,d)=>(Number(d[o.key])||0)-(Number(r[o.key])||0));return`<section class="bg-white border rounded-2xl p-5">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
      <div><h2 class="font-bold">📊 อันดับคะแนนแยกหมวด</h2><p class="text-xs text-gray-500 mt-1">เปรียบเทียบเฉพาะสี${t==="W"?"หญิง":"ชาย"} · คะแนนกีฬา = กีฬาสากลรวมกรีฑา</p></div>
    </div>
    <div class="rounded-2xl border bg-gray-50 p-4">
      <div class="flex items-center justify-between gap-3 mb-3">
        <button type="button" data-sports-rank-nav="prev" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===0?"disabled":""} aria-label="ดูหมวดก่อนหน้า">‹</button>
        <div class="text-center min-w-0"><div class="text-lg">${o.icon}</div><h3 class="text-sm font-bold text-gray-700">อันดับ${o.label}</h3><p class="text-[10px] text-gray-400">หมวด ${n+1} / ${qt.length}</p></div>
        <button type="button" data-sports-rank-nav="next" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===qt.length-1?"disabled":""} aria-label="ดูหมวดถัดไป">›</button>
      </div>
      <div class="flex justify-center gap-1.5 mb-3">${qt.map((r,d)=>`<button type="button" data-sports-rank-index="${d}" aria-label="ดู${r.label}" class="h-2 rounded-full transition ${d===n?"w-5 bg-indigo-600":"w-2 bg-gray-300"}"></button>`).join("")}</div>
      <div class="space-y-1.5">${x.map((r,d)=>`<div class="flex items-center gap-2 text-sm rounded-xl bg-white px-3 py-2 ${r.color_name===s?"font-black text-indigo-700 ring-1 ring-indigo-200":""}"><span class="w-7 text-center text-gray-400">#${d+1}</span><span class="flex-1 truncate">สี${ne(r.color_name)}</span><b>${Number(r[o.key]||0).toLocaleString("th-TH")}</b></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีคะแนน</p>'}</div>
    </div>
  </section>`};async function Nd(){qs(!0);const{data:{session:e}}=await le.auth.getSession();if(!e)return window.location.replace("index.html"),null;const{data:s,error:t}=await le.from("profiles").select("role, is_also_admin").eq("id",e.user.id).maybeSingle();return t||(s==null?void 0:s.role)!=="admin"&&!(s!=null&&s.is_also_admin)?(N("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):e}async function Dd(e){try{const{data:s}=await le.from("profiles").select("role, user_code").eq("id",e).maybeSingle();let t="ผู้ใช้งาน";if((s==null?void 0:s.role)==="teacher"||(s==null?void 0:s.role)==="admin"){const{data:l}=await le.from("teachers").select("full_name").eq("profile_id",e).maybeSingle();t=(l==null?void 0:l.full_name)??(s==null?void 0:s.user_code)??"ผู้ใช้งาน"}const n=(s==null?void 0:s.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=t,document.getElementById("user-role").textContent=n,document.getElementById("user-avatar").textContent=t.charAt(0).toUpperCase()}catch{}}async function Hd(e){const s=document.getElementById("header-switch-slot");if(!s)return;s.innerHTML="";const{data:t}=await le.from("profiles").select("is_also_admin").eq("id",e).maybeSingle();if(!(t!=null&&t.is_also_admin))return;const n=document.createElement("a");n.id="btn-switch-teacher",n.href="teacher.html",n.title="สลับไปหน้าครู",n.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",n.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",s.appendChild(n)}async function Rd(){await le.auth.signOut(),N("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function Od(e=null){var t,n,l;const s=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(t=window._clearPositionRows)==null||t.call(window),document.getElementById("modal-title").textContent=e?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:o}=await Ce(async()=>{const{getDepartments:d}=await import("./api-BQaMiX9s.js");return{getDepartments:d}},__vite__mapDeps([0,1,2,3,4])),x=await o(),r=document.getElementById("modal-position-dept");r.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+x.map(d=>`<option value="${d.id}">${d.dept_name}</option>`).join("")}catch{}if(e)try{const{data:o}=await(await Ce(async()=>{const{supabase:r}=await import("./supabase-BV-W2lsh.js").then(d=>d.a);return{supabase:r}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",e).single();document.getElementById("modal-id").value=o.id,document.getElementById("modal-code").value=o.teacher_code??"",document.getElementById("modal-name").value=o.full_name??"",document.getElementById("modal-category").value=o.category??"",document.getElementById("modal-phone").value=o.phone??"",document.getElementById("modal-login-email").value=o.login_email??"",document.getElementById("modal-username").value=o.username??"",document.getElementById("modal-image-url").value=o.image_url??"";const x=(n=o.positions)!=null&&n.length?o.positions:o.position?[o.position]:[];(l=window._setPositionRows)==null||l.call(window,x),x.includes("dept_head")&&(document.getElementById("modal-position-dept").value=o.position_dept_id??""),kr(o.image_url,o.full_name)}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex"),document.getElementById("modal-name").focus()}function Na(){const e=document.getElementById("teacher-modal");e.classList.add("hidden"),e.classList.remove("flex")}async function Pd(e){var d,i,a;e.preventDefault();const s=document.getElementById("modal-save-btn"),t=document.getElementById("modal-id").value,n=document.getElementById("modal-username").value.trim().toLowerCase();if(n&&!/^[a-z0-9._-]{3,32}$/.test(n)){N("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const l=((d=window._getPositionValues)==null?void 0:d.call(window))??[],o=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],x=l.find(p=>!o.includes(p))||null,r={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:n||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:x,positions:l,position_dept_id:l.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!r.full_name){N("กรุณากรอกชื่อ-นามสกุล","warning");return}$t(s,!0);try{const p=(a=(i=document.getElementById("modal-photo-file"))==null?void 0:i.files)==null?void 0:a[0];if(p){const w=t||`new_${Date.now()}`;r.image_url=await nl(w,p)}t?await _n(Number(t),r):await $n(r),N("บันทึกข้อมูลสำเร็จ","success"),Na(),Dt(await Pe())}catch(p){N("บันทึกไม่สำเร็จ: "+he(p),"error")}finally{$t(s,!1)}}async function zd(e,s){if(confirm(`ยืนยันการลบ "${s}" ออกจากระบบ?`))try{await fn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),Dt(await Pe())}catch{N("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function kr(e,s){const t=document.getElementById("modal-avatar-preview");t&&(e?t.innerHTML=`<img src="${e}" class="w-full h-full object-cover" />`:t.innerHTML=(s??"?").charAt(0).toUpperCase())}async function Fd(e=null){const s=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=e?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(t=>{document.getElementById(t).value=""}),document.getElementById("sub-skill-group").value="",e)try{const n=(await ra()).find(l=>l.id===e);n&&(document.getElementById("sub-id").value=n.id,document.getElementById("sub-code").value=n.subject_code??"",document.getElementById("sub-name").value=n.subject_name??"",document.getElementById("sub-dept").value=n.dept??"",document.getElementById("sub-grade").value=n.grade_level??"",document.getElementById("sub-credit").value=n.credit??"",document.getElementById("sub-learning-area").value=n.learning_area??"",document.getElementById("sub-skill-group").value=n.skill_group??"")}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}s.classList.replace("hidden","flex")}async function Ud(e,s){if(confirm(`ยืนยันลบวิชา "${s}"?`))try{await hn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),Za(await ra())}catch{N("ลบไม่สำเร็จ","error")}}async function Vd(e=null){const s=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(w=>{const y=document.getElementById(w);y&&(y.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const t=document.getElementById("dept-selected-teacher");t.classList.add("hidden"),t.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=e?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let n=[];try{n=await Pe()}catch{}const l=document.getElementById("dept-teacher-code-input"),o=document.getElementById("dept-teacher-search"),x=document.getElementById("dept-teacher-dropdown"),r=document.getElementById("dept-selected-teacher"),d=document.getElementById("dept-selected-name"),i=document.getElementById("dept-clear-teacher"),a=w=>{document.getElementById("dept-teacher-code").value=w?w.teacher_code??"":"",w?(l.value=w.teacher_code??"",o.value=w.full_name??"",d.textContent=`${w.full_name}${w.teacher_code?` (${w.teacher_code})`:""}`,r.classList.remove("hidden"),r.classList.add("flex")):(l.value="",o.value="",r.classList.add("hidden"),r.classList.remove("flex")),x.classList.add("hidden")},p=w=>{x.innerHTML=w.length?w.map(y=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${y.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${y.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${y.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',x.querySelectorAll(".teacher-option").forEach(y=>{y.addEventListener("mousedown",v=>{v.preventDefault(),a(n.find(f=>String(f.id)===y.dataset.id))})}),x.classList.remove("hidden")};if(l.oninput=()=>{const w=l.value.trim().toLowerCase();if(!w){a(null);return}const y=n.find(v=>(v.teacher_code??"").toLowerCase()===w);if(y)a(y);else{const v=n.filter(f=>(f.teacher_code??"").toLowerCase().startsWith(w));v.length&&p(v)}},o.onfocus=()=>p(n),o.oninput=()=>{const w=o.value.toLowerCase();p(w?n.filter(y=>y.full_name.toLowerCase().includes(w)||(y.teacher_code??"").toLowerCase().includes(w)):n)},o.onblur=()=>setTimeout(()=>x.classList.add("hidden"),150),i==null||i.addEventListener("click",()=>a(null)),e)try{const y=(await ot()).find(v=>v.id===e);if(y){document.getElementById("dept-id").value=y.id,document.getElementById("dept-code").value=y.dept_code??"",document.getElementById("dept-name").value=y.dept_name??"",document.getElementById("dept-teacher-code").value=y.teacher_code??"",document.getElementById("dept-photo-url").value=y.head_photo_url??"",document.getElementById("dept-sign-url").value=y.head_sign_url??"";const v=document.getElementById("dept-category");if(v&&(v.value=y.category??""),y.teacher_code){const f=n.find(T=>T.teacher_code===y.teacher_code);f&&a(f)}y.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${y.head_photo_url}" class="w-full h-full object-cover" />`),y.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${y.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex")}function Gt(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function Gd(e){var o,x,r,d,i,a,p,w;e.preventDefault();const s=document.getElementById("dept-save-btn"),t=document.getElementById("dept-id").value,n=document.getElementById("dept-code").value.trim().toUpperCase(),l=document.getElementById("dept-name").value.trim();if(!n||!l){N("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}$t(s,!0);try{const y=document.getElementById("dept-teacher-code").value||null,v=y?((r=(x=(o=document.getElementById("dept-selected-name"))==null?void 0:o.textContent)==null?void 0:x.split(" (")[0])==null?void 0:r.trim())??null:null,f={dept_code:n,dept_name:l,head_name:v,teacher_code:y,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((d=document.getElementById("dept-category"))==null?void 0:d.value)||null},T=(a=(i=document.getElementById("dept-photo-file"))==null?void 0:i.files)==null?void 0:a[0];T&&(f.head_photo_url=await ms(n,"photo",T));const c=(w=(p=document.getElementById("dept-sign-file"))==null?void 0:p.files)==null?void 0:w[0];c&&(f.head_sign_url=await ms(n,"sign",c)),t?await kn(Number(t),f):await Sn(f),N("บันทึกสำเร็จ","success"),Gt(),pa(await ot())}catch(y){N("บันทึกไม่สำเร็จ: "+he(y),"error")}finally{$t(s,!1)}}async function Wd(e,s){if(confirm(`ยืนยันลบกลุ่มสาระ "${s}"?`))try{await vn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),pa(await ot())}catch{N("ลบไม่สำเร็จ","error")}}function Yd(e=null){var n,l,o;const s=document.getElementById("period-modal"),t=e?((n=window._periodsCache)==null?void 0:n[e])??null:null;document.getElementById("period-id").value=e??"",document.getElementById("period-no").value=(t==null?void 0:t.period_no)??"",document.getElementById("period-start").value=((l=t==null?void 0:t.start_time)==null?void 0:l.slice(0,5))??"",document.getElementById("period-end").value=((o=t==null?void 0:t.end_time)==null?void 0:o.slice(0,5))??"",document.getElementById("period-modal-title").textContent=e?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",s.classList.remove("hidden"),s.classList.add("flex")}function Wt(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function Kd(e){e.preventDefault();const s=document.getElementById("period-save-btn"),t=document.getElementById("period-id").value,n={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!n.period_no||!n.start_time||!n.end_time){N("กรุณากรอกข้อมูลให้ครบ","warning");return}t&&(n.id=Number(t)),$t(s,!0);try{await En(n),N("บันทึกสำเร็จ","success"),Wt(),ma()}catch(l){N("บันทึกไม่สำเร็จ: "+he(l),"error")}finally{$t(s,!1)}}async function Jd(e){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await wn(Number(e)),N("ลบแล้ว","success"),ma()}catch{N("ลบไม่สำเร็จ","error")}}async function Da(){try{const s=(await Xe()).filter(n=>n.status==="pending").length,t=document.getElementById("badge-payments");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Ha(){try{const s=(await Ns()).filter(n=>!n.is_read).length,t=document.getElementById("badge-feedback");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Ra(){try{const e=await Ms(),s=document.getElementById("badge-subject-group");if(!s)return;e.length>0?(s.textContent=e.length>9?"9+":e.length,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}window._refreshSubjectGroupBadge=Ra;window._refreshFeedbackBadge=Ha;window._refreshPaymentBadge=Da;window._goBack=()=>St();window.openTeacherModal=Od;window.handleDeleteTeacher=zd;window.openSubjectModal=Fd;window.handleDeleteSubject=Ud;window.openDeptModal=Vd;window.handleDeleteDept=Wd;window.openPeriodModal=Yd;window.handleDeletePeriod=Jd;window._adminViewSchedule=async(e,s)=>{var i;(i=document.getElementById("admin-sched-overlay"))==null||i.remove();const{getSystemConfig:t}=await Ce(async()=>{const{getSystemConfig:a}=await import("./api-BQaMiX9s.js");return{getSystemConfig:a}},__vite__mapDeps([0,1,2,3,4])),n=await t().catch(()=>({})),l=parseInt(n.academicYear??2568),o=parseInt(n.semester??1),x=document.createElement("div");x.id="admin-sched-overlay",x.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",x.innerHTML=`
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
    </div>`,document.body.appendChild(x),x.querySelector("#aso-close").addEventListener("click",()=>x.remove());const r=x.querySelector("#aso-content"),d=document.getElementById("main-content");d&&(d.id="main-content-bak"),r.id="main-content";try{await Zo({id:e,full_name:s},l,o,n)}finally{r.id="aso-content",d&&(d.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var a,p,w,y,v,f,T,c,u,B,h,I,E,A,j,b,g;yl();const e=await Nd();if(!e)return;await Qs("admin");const s=document.getElementById("app-version");s&&(s.textContent=`v${xn}`,s.classList.add("cursor-pointer","hover:underline"),s.addEventListener("click",()=>ts(e.user.id,!0,!0))),(a=e==null?void 0:e.user)!=null&&a.id&&ts(e.user.id,!1,!0),gn(),(p=document.getElementById("btn-logout"))==null||p.addEventListener("click",Rd);const t=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],n=()=>'<option value="">— ไม่มี —</option>'+t.map(m=>`<optgroup label="${m.label}">${m.options.map(k=>`<option value="${k.value}">${k.label}</option>`).join("")}</optgroup>`).join("");function l(){const m=[...document.querySelectorAll(".pos-row-sel")].map(k=>k.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!m.includes("dept_head"))}function o(){const m=[...document.querySelectorAll(".pos-row-sel")],k=m.map(_=>_.value).filter(Boolean);m.forEach(_=>{[..._.options].forEach($=>{$.value&&($.disabled=k.includes($.value)&&_.value!==$.value)})})}function x(m=""){const k=document.getElementById("modal-positions-list"),_=document.createElement("div");_.className="pos-row flex items-center gap-2",_.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${n()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,_.querySelector(".pos-row-sel").value=m,_.querySelector(".pos-row-sel").addEventListener("change",()=>{l(),o()}),_.querySelector(".pos-row-del").addEventListener("click",()=>{_.remove(),l(),o()}),k.appendChild(_),l(),o()}window._addPositionRow=x,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",x(),l()},window._setPositionRows=m=>{document.getElementById("modal-positions-list").innerHTML="",(m!=null&&m.length?m:[""]).forEach(_=>x(_)),l()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(m=>m.value).filter(Boolean),(w=document.getElementById("btn-add-position"))==null||w.addEventListener("click",()=>x()),x(),(y=document.getElementById("modal-close"))==null||y.addEventListener("click",Na),(v=document.getElementById("modal-backdrop"))==null||v.addEventListener("click",Na),(f=document.getElementById("teacher-form"))==null||f.addEventListener("submit",Pd),(T=document.getElementById("modal-photo-file"))==null||T.addEventListener("change",m=>{const k=m.target.files[0];k&&kr(URL.createObjectURL(k),"")}),(c=document.getElementById("dept-modal-close"))==null||c.addEventListener("click",Gt),(u=document.getElementById("dept-modal-backdrop"))==null||u.addEventListener("click",Gt),(B=document.getElementById("dept-modal-cancel"))==null||B.addEventListener("click",Gt),(h=document.getElementById("dept-form"))==null||h.addEventListener("submit",Gd),(I=document.getElementById("dept-photo-file"))==null||I.addEventListener("change",m=>{const k=m.target.files[0];k&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL(k)}" class="w-full h-full object-cover" />`)}),(E=document.getElementById("dept-sign-file"))==null||E.addEventListener("change",m=>{const k=m.target.files[0];k&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL(k)}" class="w-full h-full object-contain" />`)}),(A=document.getElementById("period-modal-close"))==null||A.addEventListener("click",Wt),(j=document.getElementById("period-modal-backdrop"))==null||j.addEventListener("click",Wt),(b=document.getElementById("period-modal-cancel"))==null||b.addEventListener("click",Wt),(g=document.getElementById("period-form"))==null||g.addEventListener("submit",Kd),await Dd(e.user.id),Hd(e.user.id);const r={overview:Oa,"exec-overview":bd,teachers:Cr,classes:Ja,students:Ir,departments:Tr,subjects:St,"subject-admin":()=>Ce(async()=>{const{renderAdminSubjectManagement:m}=await import("./admin-subject-management-CxGvGHjS.js");return{renderAdminSubjectManagement:m}},__vite__mapDeps([5,0,1,2,3,4,6,7])).then(({renderAdminSubjectManagement:m})=>m()),curriculum:_t,periods:ma,"schedule-admin":()=>Ce(async()=>{const{renderAdminScheduleManagement:m}=await import("./admin-schedule-management-BqgskIM9.js");return{renderAdminScheduleManagement:m}},__vite__mapDeps([8,6,0,1,2,3,4,9,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(({renderAdminScheduleManagement:m})=>m()),"schedule-admin-import":()=>Ce(async()=>{const{renderAdminScheduleImport:m}=await import("./admin-schedule-import-BWqANN9n.js");return{renderAdminScheduleImport:m}},__vite__mapDeps([23,0,1,2,3,4,6,7])).then(({renderAdminScheduleImport:m})=>m({onBack:()=>r["schedule-admin"]()})),homeroom:jr,"score-col-config":Br,"registered-teachers":ta,holidays:qr,payments:Mr,"life-skill-admin":Nr,"reading-admin":Dr,"prayer-admin":Hr,settings:Qa,import:Ar,"admin-profile":Rr,"usage-stats":Or,"classrooms-admin":Pr,"course-doc-lang":()=>Xo(null,!0),announcements:()=>Yr(),"autoscale-history":()=>Kr(),"autoscale-settings":()=>Aa(),"work-calendar":()=>nn(null),"role-permissions":()=>Jr(),"religion-groups":on,"tutorial-admin":()=>Ce(async()=>{const{renderTutorialAdmin:m}=await import("./tutorial-BoxVX_-5.js");return{renderTutorialAdmin:m}},__vite__mapDeps([24,0,1,2,3,4,16,6])).then(({renderTutorialAdmin:m})=>m()),"house-colors":()=>Qr(),"sports-admin":()=>fl({admin:!0}),azfutsal:()=>Vo(),regrade:()=>wd(),"sports-shirt-summary":()=>Ye(),"sports-fund-admin":()=>Id(),"sports-overview-admin":()=>vr(),"sports-evaluation":()=>dt(),"shirt-vote-settings":()=>it(),"shirt-vote-dashboard":()=>wr(),donations:()=>Xr(),"feedback-admin":()=>en(),"subject-group-requests":()=>cn(),"donor-chat-admin":()=>Ce(()=>import("./teacher-views-donor-chat-b3UiVVzc.js"),__vite__mapDeps([25,6,0,1,2,3,4,16,17,26])).then(m=>m.renderDonorChatAdmin()),"student-qr-print":()=>Ce(()=>import("./teacher-views-classes-ot6k83TX.js").then(m=>m.t),__vite__mapDeps([9,6,0,1,2,3,4,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(m=>m.renderStudentQRPrint(null,null)),"classroom-leaders":()=>un(),"council-rep-nominations":()=>Zr(),certificates:()=>Ce(()=>import("./teacher-views-certificates-c1uAK6dX.js"),__vite__mapDeps([27,6,28,1,15,29,17,16])).then(async m=>{const{getMyTeacherProfile:k}=await Ce(async()=>{const{getMyTeacherProfile:$}=await import("./api-BQaMiX9s.js");return{getMyTeacherProfile:$}},__vite__mapDeps([0,1,2,3,4])),_=await k(e.user.id).catch(()=>null);return m.renderCertificateManager(_)})};document.querySelectorAll("[data-nav]").forEach(m=>{m.addEventListener("click",k=>{var $,S;k.preventDefault();const _=m.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}r[_]&&r[_](),($=document.getElementById("sidebar"))==null||$.classList.add("-translate-x-full"),(S=document.getElementById("sidebar-overlay"))==null||S.classList.add("hidden")})}),Da(),setInterval(Da,6e4),Ha(),setInterval(Ha,6e4),Ra(),setInterval(Ra,6e4),qs(!1),window._adminNav=m=>{r[m]&&r[m]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>r["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>r["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>r["shirt-vote-dashboard"]());const d=new URLSearchParams(location.search),i=d.get("view");i&&r[i]?(window._pendingQRTab=d.get("tab")||null,r[i]()):await Oa()});const Oe=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]);function Qd(e){return new Promise(s=>{const t=document.activeElement,n=document.createElement("div");n.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3";const l={full_name:"ชื่อ",main_room:"ห้องสามัญ",religion_room:"ห้องศาสนา",gender:"เพศ",image_url:"รูปภาพ",is_active:"สถานะ",house_color:"สี",sports_shirt_size:"ไซซ์เสื้อ"},o=(d,i,a)=>`<details class="rounded-xl border p-3"><summary class="font-semibold cursor-pointer">${d}: ${Oe(i)} คน</summary><ul class="mt-2 text-sm space-y-1">${(a||[]).map(p=>{var w;return`<li>${Oe(p.student_code)} — ${Oe(p.full_name)}${(w=p.changes)!=null&&w.length?`<span class="block text-xs text-gray-500">${p.changes.map(y=>`${Oe(l[y.field]||y.field)}: ${Oe(y.before)} → ${Oe(y.after)}`).join("<br>")}</span>`:""}</li>`}).join("")||"<li>ไม่มีรายการ</li>"}</ul>${i>30?'<p class="text-xs text-gray-500 mt-2">แสดงตัวอย่าง 30 คนแรก</p>':""}</details>`;n.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="student-sync-preview-title" class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto p-5 space-y-3">
      <h2 id="student-sync-preview-title" class="font-bold text-xl">ตรวจสอบก่อนอัปเดตนักเรียน</h2>
      <p class="text-sm break-all">ภาคเรียน ${Oe(e.semester)}/${Oe(e.academicYear)} · แหล่งข้อมูล: ${Oe(e.sheetId)} / ${Oe(e.tabName)}</p>
      <p class="text-sm">อ่าน ${Oe(e.read)} แถว · ใช้ได้ ${Oe(e.valid)} คน · ข้าม ${Oe(e.skipped)} แถว · เปิดสถานะกลับมาเรียน ${Oe(e.reactivatedCount)} คน</p>
      ${o("นักเรียนใหม่",e.newCount,e.newStudents)}
      ${o("นักเรียนเดิมที่ข้อมูลเปลี่ยน",e.changedCount,e.changedStudents)}
      ${o("นักเรียนที่ยังใช้งานอยู่แต่ไม่พบในแหล่งข้อมูล",e.missingCount,e.missingStudents)}
      ${e.duplicateCount?`<p role="alert" class="text-red-700">พบรหัสซ้ำ ${Oe(e.duplicateCount)} แถว ต้องแก้ต้นทางก่อน: ${Oe((e.duplicateCodes||[]).join(", "))}</p>`:""}
      <p class="text-sm text-emerald-800 bg-emerald-50 rounded-xl p-3">จับคู่ด้วยรหัสนักเรียนเดิม รักษาคะแนนและประวัติเดิม คนที่ไม่พบในแหล่งข้อมูลจะคงสถานะไว้ให้ตรวจสอบ ระบบจะไม่ปิดสถานะอัตโนมัติ</p>
      <div class="flex justify-end gap-2"><button type="button" data-cancel class="border rounded-xl px-4 py-2">ยกเลิก</button><button type="button" data-confirm ${e.canSync?"":"disabled"} class="bg-emerald-700 text-white disabled:opacity-40 rounded-xl px-4 py-2">ยืนยันอัปเดต ${Oe(e.valid)} คน</button></div>
    </section>`;const x=d=>{document.removeEventListener("keydown",r),n.remove(),t==null||t.focus(),s(d)},r=d=>{if(d.key==="Escape"&&x(!1),d.key==="Tab"){const i=[...n.querySelectorAll("button:not(:disabled), summary")],a=i[0],p=i.at(-1);d.shiftKey&&document.activeElement===a?(d.preventDefault(),p.focus()):!d.shiftKey&&document.activeElement===p&&(d.preventDefault(),a.focus())}};n.addEventListener("click",d=>{d.target===n||d.target.closest("[data-cancel]")?x(!1):d.target.closest("[data-confirm]")&&e.canSync&&x(!0)}),document.addEventListener("keydown",r),document.body.appendChild(n),n.querySelector("[data-cancel]").focus()})}function at(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(0,s).trim():e.trim()}function pt(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(s+1).trim():""}function ze(e){return[...new Set(e.filter(Boolean))].sort()}const Be="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",Ge="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",We=e=>String(e??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),ae=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Zd({year:e,semester:s,start:t,end:n,preview:l}){return new Promise(o=>{var i;const x=document.createElement("div");x.id="semester-rollover-confirm-modal",x.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",x.innerHTML=`
      <section role="dialog" aria-modal="true" aria-labelledby="semester-rollover-title"
        class="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <header class="shrink-0 border-b border-amber-100 bg-amber-50 px-5 py-4 sm:px-7">
          <p class="text-xs font-bold uppercase tracking-wide text-amber-700">ตรวจสอบก่อนดำเนินการ</p>
          <h2 id="semester-rollover-title" class="mt-1 text-lg font-extrabold text-slate-900">ยืนยันขึ้นภาคเรียนที่ ${s}/${e}</h2>
          <p class="mt-1 text-sm text-slate-600">อ่านรายการและผลที่จะเกิดขึ้นทั้งหมดก่อนยืนยัน</p>
        </header>
        <div class="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-5 py-4 sm:px-7">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 p-3"><p class="text-xs font-semibold text-slate-500">วันเปิดภาคเรียนใหม่</p><p class="mt-1 font-bold text-slate-800">${ae(t)}</p></div>
            <div class="rounded-xl border border-slate-200 p-3"><p class="text-xs font-semibold text-slate-500">วันปิดภาคเรียนใหม่</p><p class="mt-1 font-bold text-slate-800">${ae(n)}</p></div>
          </div>
          <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">✓ ไฟล์สำรองภาคเรียนปัจจุบันผ่านการตรวจสอบแล้ว</div>
          <section>
            <h3 class="mb-2 text-sm font-bold text-slate-800">สรุปข้อมูลที่จะจัดการ</h3>
            <dl class="divide-y divide-slate-100 rounded-xl border border-slate-200 px-3">
              ${[["คอร์สเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.courses_to_archive,"คอร์ส"],["ห้องเรียนเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.classes_to_archive,"ห้อง"],["ผู้สนับสนุนที่มีสิทธิ์ส่วนลดเทอมใหม่",l==null?void 0:l.eligible_supporters,"คน"],["ข้อมูลเข้าเรียนที่จะล้างหลังสำรอง",l==null?void 0:l.attendances_to_clear,"รายการ"],["ข้อมูลละหมาดที่จะล้างหลังสำรอง",l==null?void 0:l.prayer_records_to_clear,"รายการ"]].map(([a,p,w])=>`<div class="flex items-start justify-between gap-4 py-2.5 text-sm"><dt class="text-slate-600">${a}</dt><dd class="shrink-0 font-bold tabular-nums text-slate-900">${Number(p??0).toLocaleString()} ${w}</dd></div>`).join("")}
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
      </section>`;const r=a=>{x.remove(),document.removeEventListener("keydown",d),o(a)},d=a=>{a.key==="Escape"&&r(!1)};x.addEventListener("click",a=>{(a.target===x||a.target.closest('[data-action="cancel"]'))&&r(!1),a.target.closest('[data-action="confirm"]')&&r(!0)}),document.addEventListener("keydown",d),document.body.appendChild(x),(i=x.querySelector('[data-action="cancel"]'))==null||i.focus()})}function Xd(){const e=document.createElement("div");return e.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",e.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="semester-rollover-progress-title" class="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
    <h2 id="semester-rollover-progress-title" class="text-lg font-extrabold text-slate-900">กำลังเตรียมพื้นที่ภาคเรียนใหม่</h2>
    <p data-progress-label class="mt-2 text-sm text-slate-600">กำลังเริ่ม...</p>
    <div class="mt-4 h-3 overflow-hidden rounded-full bg-slate-100"><div data-progress-bar class="h-full w-0 rounded-full bg-indigo-600 transition-[width] duration-200"></div></div>
    <p data-progress-count class="mt-2 text-right text-xs font-semibold tabular-nums text-indigo-700">0%</p>
    <p class="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">อย่าปิดหน้าต่างระหว่างกำลังทำงาน หากการเชื่อมต่อขาด ข้อมูลที่ลบไปแล้วอยู่ในไฟล์สำรอง และสามารถกดขึ้นภาคเรียนใหม่อีกครั้งเพื่อทำต่อจากข้อมูลที่เหลือ</p>
  </section>`,document.body.appendChild(e),{update(s,t){e.querySelector("[data-progress-label]").textContent=s,e.querySelector("[data-progress-count]").textContent=`${Math.max(0,Math.min(100,Math.floor(t)))}%`,e.querySelector("[data-progress-bar]").style.width=`${Math.max(0,Math.min(100,t))}%`},close(){e.remove()}}}function kt(e){return String(e??"").normalize("NFKC").toLowerCase().replace(/^(ว่าที่ร้อยตรี|ว่าที่ร้อยโท|ว่าที่ร้อยเอก|นางสาว|น.ส.|นาย|นาง|ดร\.?|คุณ)\s*/u,"").replace(/[\s._,()\[\]{}\-–—:;"'`]/g,"")}function ei(e,s){const t=[...kt(e)],n=[...kt(s)],l=Array.from({length:n.length+1},(o,x)=>x);for(let o=1;o<=t.length;o++){const x=[o];for(let r=1;r<=n.length;r++)x[r]=Math.min(x[r-1]+1,l[r]+1,l[r-1]+(t[o-1]===n[r-1]?0:1));for(let r=0;r<=n.length;r++)l[r]=x[r]}return l[n.length]}function ti(e,s){const t=kt(e),n=kt(s);return!t||!n?0:t===n?1:1-ei(t,n)/Math.max(t.length,n.length)}function Ie(e){document.querySelectorAll("[data-nav]").forEach(s=>{s.classList.toggle("bg-indigo-800",s.dataset.nav===e),s.classList.toggle("text-white",s.dataset.nav===e),s.classList.toggle("text-indigo-200",s.dataset.nav!==e)})}function Se(e){document.getElementById("main-content").innerHTML=e}async function Oa(){var x;Ie("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ";const[e,s]=await Promise.all([Ne().catch(()=>({})),oa().catch(()=>[])]),t=Fs(s,e),n=Ke(Ba(e));let l=n;try{const r=localStorage.getItem("pp5_admin_overview_term");t.some(d=>Ke(d)===r)&&(l=r)}catch{}const o=t.find(r=>Ke(r)===l)??Ba(e);Se(`<div class="max-w-6xl mx-auto animate-fade">
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
            ${Us(t,l,n)}
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
  </div>`);try{const[r,d,i]=await Promise.all([os(o.academic_year,o.semester),Xe().catch(()=>[]),Pe().catch(()=>[])]);(x=document.getElementById("admin-overview-term-switcher"))==null||x.addEventListener("change",async h=>{l=h.target.value;try{localStorage.setItem("pp5_admin_overview_term",l)}catch{}const I=t.find(A=>Ke(A)===l);if(!I)return;const E=h.target;E.disabled=!0;try{const A=await os(I.academic_year,I.semester);Object.entries(A).forEach(([j,b])=>{const g=document.getElementById(`stat-${j}`);g&&(g.textContent=Number(b??0).toLocaleString())})}catch{N("โหลดสถิติของภาคเรียนที่เลือกไม่สำเร็จ","error")}finally{E.disabled=!1}}),Object.entries(r).forEach(([h,I])=>{const E=document.getElementById(`stat-${h}`);E&&(E.textContent=I.toLocaleString())});const a=i.filter(h=>h.profile_id).length,p=i.length-a,w=document.getElementById("stat-registered"),y=document.getElementById("stat-unregistered");w&&(w.textContent=a),y&&(y.textContent=p);const v=d.filter(h=>h.status==="pending"),f=document.getElementById("pending-payments-list");f&&(v.length?f.innerHTML=v.slice(0,3).map(h=>{var I;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((I=h.teachers)==null?void 0:I.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${h.package_type==="semester"?`เหมาทั้งเทอม ${h.amount??299} บ.`:`รายห้อง ${parseInt(h.room_count??1)||1} ห้อง ${h.amount??49} บ.`} · ${new Date(h.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(v.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${v.length-3} รายการ</p>`:""):f.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const T=document.getElementById("training-todo-shell");if(T)try{const{getAllAnnouncements:h,getAnnouncementRsvps:I}=await Ce(async()=>{const{getAllAnnouncements:b,getAnnouncementRsvps:g}=await import("./api-BQaMiX9s.js");return{getAllAnnouncements:b,getAnnouncementRsvps:g}},__vite__mapDeps([0,1,2,3,4])),E=await h(),A=new Date().toISOString().slice(0,10),j=E.filter(b=>b.ann_type==="training"&&b.is_active&&b.event_date>=A).sort((b,g)=>b.event_date.localeCompare(g.event_date));if(j.length){const b=await Promise.all(j.map(k=>I(k.id).catch(()=>[]))),g=k=>new Date(k+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),m=k=>String(k??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");T.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${j.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${j.map((k,_)=>{var C;const $=b[_]??[],S=$.filter(O=>O.response==="yes").length,q=$.filter(O=>O.response==="maybe").length,D=$.filter(O=>O.response==="no").length,L=$.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${m(k.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${g(k.event_date)}
                        ${(C=k.event_periods)!=null&&C.length?` · 🕐 คาบ ${k.event_periods.sort((O,z)=>O-z).join(",")}`:""}
                        ${k.event_location?` · 📍 ${m(k.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${L?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${S}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${q}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${D}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const c=document.getElementById("leave-monitor-shell");c&&await Fo(c,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const u=await Ne().catch(()=>({})),B=document.getElementById("monitor-shell");B&&oi(B,u)}catch{N("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function Wa(e,s,t){const n={};for(const l of e)l.main_room&&(n[l.main_room]=[]);for(const l of s){const o=l[t];o&&(n[o]||(n[o]=[]),n[o].push({id:l.id,full_name:l.full_name??"",student_code:l.student_code??""}))}return n}async function ai(e,s,t){const{records:n,students:l,homerooms:o}=await qo(e,s),x=Wa(o,l,"religion_room"),r={},d={},i=new Set;for(const c of n){const u=c.main_room,B=c.week_number;!u||!B||(i.add(B),r[u]||(r[u]={}),r[u][B]||(r[u][B]=new Set),r[u][B].add(c.student_id),c.status==="absent"&&(d[u]||(d[u]={}),d[u][B]||(d[u][B]=new Set),d[u][B].add(c.student_id)))}const a=t?ni(t):Math.max(...i,0),p=a>0?Array.from({length:a},(c,u)=>u+1):[...i].sort((c,u)=>c-u),w=Object.keys(x),y=w.filter(c=>{var h,I;const u=x[c].length,B=((I=(h=r[c])==null?void 0:h[a-1])==null?void 0:I.size)??0;return u>0&&B<u}),v=w.filter(c=>{var B;const u=(B=d[c])==null?void 0:B[a-2];return u!=null&&u.size?[...u].some(h=>!n.filter(E=>E.main_room===c&&E.week_number===a-1&&E.student_id===h).some(E=>E.status==="followed"||E.status==="avoid")):!1}),f=w.length,T=w.filter(c=>{var B,h;const u=x[c].length;return u?(((h=(B=r[c])==null?void 0:B[a-1])==null?void 0:h.size)??0)>=u:!1}).length;return{total:f,done:T,recordPending:y.length,followPending:v.length,week:a,_raw:{records:n,students:l,roomStudents:x,weekRoomRec:r,weekRoomAbsent:d,weeks:p,W:a,homerooms:o}}}async function si(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await Ao(e,s),x=Wa(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(x),i=d.filter(a=>x[a].length>0&&x[a].every(p=>r.has(p.id??p))).length;return{total:d.length,done:i,pending:d.length-i,_raw:{columns:t,scores:n,students:l,roomStudents:x,scored:r,homerooms:o}}}async function ri(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await Mo(e,s),x=Wa(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(x),i=d.filter(a=>x[a].length>0&&x[a].every(p=>r.has(p.id??p))).length;return{total:d.length,done:i,pending:d.length-i,_raw:{columns:t,scores:n,students:l,roomStudents:x,scored:r,homerooms:o}}}function ni(e){if(!e)return 0;const s=new Date(e);if(isNaN(s))return 0;const t=Date.now()-s.getTime();return t<0?0:Math.floor(t/(7*24*60*60*1e3))+1}async function oi(e,s){const t=parseInt(s.academicYear??2568),n=parseInt(s.semester??1);e.innerHTML=`
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
    </div>`;const[l,o,x,r]=await Promise.allSettled([ai(t,n,s.semester_start),si(t,n),ri(t,n),Pe().catch(()=>[])]),d=r.status==="fulfilled"?r.value:[],i=(a,p)=>{const w=document.getElementById(`card-${a}`);if(!w)return;if(p.status==="rejected"){w.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const y=p.value;if(a==="prayer"){const v=y.total>0?Math.round(y.done/y.total*100):0,f=y.recordPending+y.followPending;w.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${y.done}/${y.total} ห้อง (สัปดาห์ที่ ${y.week-1})</p>
        ${f>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${y.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${y.recordPending} ห้อง</span>`:""}
          ${y.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${y.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const v=y.total>0?Math.round(y.done/y.total*100):0;w.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${y.done}/${y.total} ห้อง</p>
        ${y.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${y.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};i("prayer",l),i("lifeskill",o),i("reading",x),e.querySelectorAll(".monitor-card").forEach(a=>{a.addEventListener("click",()=>{var y,v,f;const p=a.dataset.type,w=p==="prayer"?(y=l.value)==null?void 0:y._raw:p==="lifeskill"?(v=o.value)==null?void 0:v._raw:(f=x.value)==null?void 0:f._raw;li(p,w,s,t,n,d)})})}function li(e,s,t,n,l,o=[]){var p;(p=document.getElementById("monitor-modal"))==null||p.remove();const x={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},r=document.createElement("div");r.id="monitor-modal",r.className="fixed inset-0 z-[90] flex flex-col bg-white",r.innerHTML=`
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${x[e]}</h2>
        <p class="text-xs text-gray-400">ภาค ${t.semester??"—"}/${t.academicYear??"—"}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`,document.body.appendChild(r),r.querySelector("#monitor-modal-close").addEventListener("click",()=>r.remove());const d=r.querySelector("#modal-body"),a={allTeachers:o,year:n,sem:l,category:e==="prayer"?"ศาสนา":"สามัญ"};e==="prayer"&&di(d,s,a),e==="lifeskill"&&Sr(d,s,n,l,a),e==="reading"&&Er(d,s,n,l,a),r.querySelector("#modal-print-btn").addEventListener("click",()=>ii(t,e)),r.querySelector("#modal-doc-btn").addEventListener("click",()=>ui(t,e,s))}function Ya(e,s,t,n){const l=s[e],{allTeachers:o,year:x,sem:r,category:d}=n??{};if(l)return`<p class="font-semibold text-gray-800 text-xs leading-tight">${l}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${e}</p>`;(o??[]).map(a=>`<option value="${a.id}">${a.full_name??""}${a.teacher_code?` (${a.teacher_code})`:""}</option>`).join("");const i=`pick-${e.replace(/[^a-zA-Z0-9]/g,"_")}`;return`<p class="text-[11px] font-medium text-gray-500">${e}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${e}" data-picker="${i}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${i}" class="hidden mt-2 flex gap-1 items-center">
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
        data-room="${e}" data-year="${x}" data-sem="${r}" data-cat="${d}">บันทึก</button>
    </div>`}function di(e,s,t={}){var k;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:n,roomStudents:l,weekRoomRec:o,weekRoomAbsent:x,weeks:r,W:d,homerooms:i}=s,a=Object.keys(l).sort((_,$)=>_.localeCompare($,void 0,{numeric:!0})),p={},w={};for(const _ of i??[])_.main_room&&(p[_.main_room]=((k=_.teachers)==null?void 0:k.full_name)??"",w[_.main_room]=_);const y="border border-gray-100 text-center text-[10px] px-2 py-2",v="px-4 py-2 text-sm font-medium border-b-2 transition",f=`${v} border-indigo-600 text-indigo-700 bg-indigo-50`,T=`${v} border-transparent text-gray-500 hover:text-gray-700`,c=(_,$="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${Ya(_,p,w,t)}${$}
  </td>`,u=_=>{const $=_??(d>0?d-1:d),S=r.map(D=>`<option value="${D}" ${D===$?"selected":""}>${D===d?`สัปดาห์ที่ ${D} (ปัจจุบัน)`:D===d-1?`สัปดาห์ที่ ${D} (ควรกรอก)`:`สัปดาห์ที่ ${D}`}</option>`).join(""),q=a.map(D=>{var Y,J;const C=(l[D]??[]).length,O=((J=(Y=o[D])==null?void 0:Y[$])==null?void 0:J.size)??0,z=C>0?Math.round(O/C*100):0,M=C===0?"bg-gray-50 text-gray-300":O===0?"bg-red-50 text-red-400":z>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",F=z>=100?"bg-emerald-500":z>=50?"bg-amber-400":"bg-red-400",R=C>0&&O<C?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${c(D,R)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${C}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${M}">
          <div class="font-bold">${C>0?z+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${C>0?O+"/"+C:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${C>0?`<div class="flex items-center gap-2">
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
          <th class="${y} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${y} bg-gray-100">นักเรียน</th>
          <th class="${y} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${y} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${q}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},B=_=>{var O;const $=_??(d>1?d-2:r[0]??1),S=$+1,q=r.map(z=>`<option value="${z}" ${z===$?"selected":""}>${z===d-2?`สัปดาห์ที่ ${z} (ควรติดตาม)`:z===d-1?`สัปดาห์ที่ ${z} (ล่าสุด)`:`สัปดาห์ที่ ${z}`}</option>`).join(""),D=(z,M)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${M}</span>`})[z]??"",L=[];for(const z of a){const M=l[z]??[],F=Object.fromEntries(M.map(R=>[R.id??R,R])),P=[...((O=x[z])==null?void 0:O[$])??[]];for(const R of P){const Y=F[R],U=n.filter(X=>X.main_room===z&&X.week_number===S&&X.student_id===R).some(X=>X.status==="followed"||X.status==="avoid")?"followed":S>d?"pending":"overdue";L.push({room:z,stu:Y,status:U})}}const C=L.length?L.map(({room:z,stu:M,status:F})=>{const P=p[z];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${P?`<p class="font-semibold text-gray-800 text-xs">${P}</p><p class="text-[10px] text-gray-400">${z}</p>`:`<p class="font-semibold text-gray-800 text-xs">${z}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(M==null?void 0:M.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(M==null?void 0:M.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${D(F,S)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${$}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${q}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${S} · พบ ${L.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${y} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${y} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${y} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${C}</tbody>
      </table>
    </div>`},h=d>0?d-1:0,I=a.filter(_=>{var $;return(($=l[_])==null?void 0:$.length)>0}).length,E=a.reduce((_,$)=>{var S;return _+(((S=l[$])==null?void 0:S.length)??0)},0),A=(_,$,S=72)=>{const C=2*Math.PI*26,O=C*_/100;return`<svg width="${S}" height="${S}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${$}" stroke-width="8"
        stroke-dasharray="${O} ${C}" stroke-dashoffset="${C/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${$}">${_}%</text>
    </svg>`},j=_=>{const $=e.querySelector("#prayer-dashboard");if(!$)return;if(r.length===0){$.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!_)return;const S=a.filter(M=>{var P,R;const F=l[M].length;return F>0&&(((R=(P=o[M])==null?void 0:P[_])==null?void 0:R.size)??0)<F}),q=a.filter(M=>{var R,Y;const F=l[M].length,P=((Y=(R=o[M])==null?void 0:R[_])==null?void 0:Y.size)??0;return F>0&&P>=F}),D=a.filter(M=>{var P;const F=(P=x[M])==null?void 0:P[_-1];return F!=null&&F.size?[...F].some(R=>!n.filter(J=>J.main_room===M&&J.week_number===_&&J.student_id===R).some(J=>J.status==="followed"||J.status==="avoid")):!1}),L=q.length,C=S.length,O=a.reduce((M,F)=>{var P,R;return M+(((R=(P=o[F])==null?void 0:P[_])==null?void 0:R.size)??0)},0),z=I>0?Math.round(L/I*100):0;$.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${I}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">ห้องทั้งหมด</p>
      </div>
      <div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-emerald-600">${L}</p>
        <p class="text-[11px] text-emerald-500 mt-0.5">บันทึกครบแล้ว</p>
      </div>
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-amber-600">${C}</p>
        <p class="text-[11px] text-amber-500 mt-0.5">ยังค้างอยู่</p>
      </div>
      <div class="bg-indigo-50 rounded-2xl border border-indigo-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-indigo-600">${O}</p>
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${E}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${A(z,z>=100?"#10b981":z>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${_}</p>
          <p class="text-xs text-gray-400 mt-0.5">${L} / ${I} ห้อง บันทึกครบ</p>
          ${D.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${D.length} ห้อง</p>`:""}
          ${z>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${C>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${C})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${S.map(M=>{var J,H;const F=l[M].length,P=((H=(J=o[M])==null?void 0:J[_])==null?void 0:H.size)??0,R=Math.round(P/F*100),Y=p[M];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${M}</span>
                ${Y?`<span class="text-amber-600 truncate block">${Y}</span>`:""}
              </div>
              <span class="flex-shrink-0 font-bold ${R===0?"text-red-500":"text-amber-600"}">${P}/${F}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${R===0?"bg-red-400":"bg-amber-400"}" style="width:${R}%"></div>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:`<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${_}</p></div>
      </div>`}
    </div>`};e.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${f}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${T}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const b=e.querySelector("#prayer-tab-content");let g="record";const m=(_,$)=>{g=_,b.innerHTML=_==="record"?u($):B($),_==="record"&&j($??h),e.querySelectorAll(".prayer-tab").forEach(D=>{D.className=D.dataset.tab===_?`prayer-tab ${f}`:`prayer-tab ${T}`});const S=b.querySelector("#prayer-week-sel");S&&S.addEventListener("change",D=>m("record",parseInt(D.target.value)));const q=b.querySelector("#prayer-follow-week-sel");q&&q.addEventListener("change",D=>m("follow",parseInt(D.target.value))),Ka(b,t,()=>m(g,$))};e.querySelectorAll(".prayer-tab").forEach(_=>_.addEventListener("click",()=>m(_.dataset.tab))),m("record",h)}function Sr(e,s,t,n,l={}){var y;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:x,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const i={},a={};for(const v of d??[])v.main_room&&(i[v.main_room]=((y=v.teachers)==null?void 0:y.full_name)??"",a[v.main_room]=v);const p=Object.keys(x).sort((v,f)=>v.localeCompare(f,void 0,{numeric:!0})),w="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${w} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${w} bg-gray-100">นักเรียน</th>
          <th class="${w} bg-emerald-50 text-emerald-700">กรอกแล้ว</th>
          <th class="${w} bg-red-50 text-red-500">ค้าง</th>
          <th class="${w} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${p.map(v=>{const f=x[v]??[],T=f.length,c=f.filter(I=>r.has(I.id??I)).length,u=T-c,B=T>0?Math.round(c/T*100):0,h=B>=100?"bg-emerald-500":B>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ya(v,i,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${T}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${c}</td>
              <td class="border border-gray-100 text-center ${u>0?"text-red-500 font-medium":"text-gray-300"}">${u||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${h} h-2 rounded-full" style="width:${B}%"></div></div>
                  <span class="text-[10px] font-bold ${B>=100?"text-emerald-600":B>=50?"text-amber-600":"text-red-500"}">${B}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${p.length} ห้อง</p>`,Ka(e,l,()=>Sr(e,s,t,n,l))}function Er(e,s,t,n,l={}){var y;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:x,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const i={},a={};for(const v of d??[])v.main_room&&(i[v.main_room]=((y=v.teachers)==null?void 0:y.full_name)??"",a[v.main_room]=v);const p=Object.keys(x).sort((v,f)=>v.localeCompare(f,void 0,{numeric:!0})),w="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${w} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${w} bg-gray-100">นักเรียน</th>
          <th class="${w} bg-indigo-50 text-indigo-700">กรอกแล้ว</th>
          <th class="${w} bg-red-50 text-red-500">ค้าง</th>
          <th class="${w} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${p.map(v=>{const f=x[v]??[],T=f.length,c=f.filter(I=>r.has(I.id??I)).length,u=T-c,B=T>0?Math.round(c/T*100):0,h=B>=100?"bg-indigo-500":B>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ya(v,i,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${T}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${c}</td>
              <td class="border border-gray-100 text-center ${u>0?"text-red-500 font-medium":"text-gray-300"}">${u||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${h} h-2 rounded-full" style="width:${B}%"></div></div>
                  <span class="text-[10px] font-bold ${B>=100?"text-indigo-600":B>=50?"text-amber-600":"text-red-500"}">${B}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${p.length} ห้อง · ${o.length} หัวข้อ</p>`,Ka(e,l,()=>Er(e,s,t,n,l))}async function Ka(e,s,t){const{allTeachers:n,year:l,sem:o,category:x}=s??{};if(!(n!=null&&n.length))return;const r={};e.querySelectorAll(".hr-sel-wrap").forEach(d=>{const i=d.closest('[id^="pick-"]');i&&(r[i.id]=Fa({wrap:d,teachers:n,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),e.querySelectorAll(".hr-assign-btn").forEach(d=>{d.addEventListener("click",()=>{const i=d.dataset.picker,a=document.getElementById(i);a&&a.classList.toggle("hidden")})}),e.querySelectorAll(".hr-save-btn").forEach(d=>{d.addEventListener("click",async()=>{var w;const i=d.dataset.room,a=`pick-${i.replace(/[^a-zA-Z0-9]/g,"_")}`,p=(w=r[a])==null?void 0:w.getValue();if(!p){N("กรุณาเลือกครู","error");return}d.disabled=!0,d.textContent="...";try{await zs({teacher_id:p,main_room:i,category:x,academic_year:l,semester:o}),N(`ระบุครูที่ปรึกษาห้อง ${i} แล้ว ✅`,"success"),t&&t()}catch(y){N("บันทึกไม่สำเร็จ: "+he(y),"error"),d.disabled=!1,d.textContent="บันทึก"}})})}function ii(e,s){const t={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,n=document.getElementById("modal-body");if(!n){N("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const l=n.cloneNode(!0);l.querySelectorAll("button, select, input").forEach(r=>r.remove());const o=l.innerHTML,x=`<!DOCTYPE html><html lang="th"><head>
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
  </body></html>`;Vs(x,{autoprint:!0})}function ci(e,s,t){var i;const n={};for(const a of(s==null?void 0:s.homerooms)??[])a.main_room&&(n[a.main_room]=((i=a.teachers)==null?void 0:i.full_name)??"—");if(e==="prayer"){const{roomStudents:a,weekRoomRec:p,W:w}=s??{};if(!a)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const v=Object.keys(a).sort((T,c)=>T.localeCompare(c,void 0,{numeric:!0})).filter(T=>{var u,B;const c=a[T].length;return c?(((B=(u=p[T])==null?void 0:u[w-1])==null?void 0:B.size)??0)<c:!1});return v.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${v.map((T,c)=>{var h,I;const u=a[T].length,B=((I=(h=p[T])==null?void 0:h[w-1])==null?void 0:I.size)??0;return`<tr>
        <td>${c+1}</td>
        <td>${n[T]??"—"}</td>
        <td>${T}</td>
        <td>${u}</td>
        <td>${B}</td>
        <td style="color:#dc2626">${u-B}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(w??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:l,scored:o}=s??{};if(!l)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const r=Object.keys(l).sort((a,p)=>a.localeCompare(p,void 0,{numeric:!0})).filter(a=>{const p=l[a]??[];return p.length>0&&!p.every(w=>o.has(w.id??w))});return r.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${r.map((a,p)=>{const w=l[a]??[],y=w.filter(v=>o.has(v.id??v)).length;return`<tr>
      <td>${p+1}</td>
      <td>${n[a]??"—"}</td>
      <td>${a}</td>
      <td>${w.length}</td>
      <td>${y}</td>
      <td style="color:#dc2626">${w.length-y}</td>
    </tr>`}).join("")}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${t.semester??"—"}/${t.academicYear??"—"} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'}function ui(e,s,t){const n={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,l=new Date,o=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],x=`${l.getDate()} ${o[l.getMonth()]} ${l.getFullYear()+543}`,r=e.samaiSchoolName??e.schoolName??"โรงเรียน",d=ci(s,t,e),i=`<!DOCTYPE html><html lang="th"><head>
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
      <div class="field"><span class="field-label">วันที่&nbsp;&nbsp;</span><span class="field-val">${x}</span></div>
      <div class="field"><span class="field-label">เรื่อง&nbsp;&nbsp;</span><span class="field-val">รายงานความคืบหน้าการบันทึกข้อมูล${n} ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"}</span></div>
      <div class="field"><span class="field-label">เรียน&nbsp;&nbsp;</span><span class="field-val">ผู้อำนวยการโรงเรียน${r}</span></div>
    </div>
    <hr style="border:none;border-top:1px solid #ccc;margin:12px 0"/>
    <p class="indent">ตามที่โรงเรียน${r} ได้ใช้ระบบ ปพ.5 ออนไลน์ ในการบันทึกข้อมูล${n}ของนักเรียน
ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"} นั้น</p>
    <p class="indent">บัดนี้ ฝ่ายวิชาการได้ตรวจสอบสถานะการดำเนินงาน ณ วันที่ ${x}
พบว่ายังมีครูที่ปรึกษาบางห้องที่ยังไม่ได้ดำเนินการกรอกข้อมูล ดังรายละเอียดต่อไปนี้</p>
    ${d}
    <p class="indent">จึงเรียนมาเพื่อโปรดทราบ และขอให้ผู้เกี่ยวข้องเร่งดำเนินการกรอกข้อมูลให้แล้วเสร็จ
ภายในระยะเวลาที่กำหนด หากมีข้อสงสัยประการใดโปรดติดต่อฝ่ายวิชาการโดยตรง</p>
    <div class="sign-block">
      <p style="margin:0 0 4px">ลงชื่อ</p>
      <div class="sign-line"></div>
      <p style="margin:0">(....................................)</p>
      <p style="margin:4px 0 0">ตำแหน่ง .....................................</p>
      <p style="margin:4px 0 0">${x}</p>
    </div>
    <div style="clear:both"></div>
  </body></html>`,a=new Blob(["\uFEFF"+i],{type:"application/msword;charset=utf-8"}),p=URL.createObjectURL(a),w=document.createElement("a");w.href=p,w.download=`บันทึกข้อความ_${n}_${e.academicYear??new Date().getFullYear()+543}.doc`,w.click(),setTimeout(()=>URL.revokeObjectURL(p),2e3)}function pi(e){var r,d,i;(r=document.getElementById("wen-teacher-sync-modal"))==null||r.remove();const s=Array.isArray(e.items)?e.items:[],t=Array.isArray(e.conflicts)?e.conflicts:[],n=s.filter(a=>a.action==="add").length,l=s.filter(a=>a.action==="rename").length,o=document.createElement("div");o.id="wen-teacher-sync-modal",o.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",o.innerHTML=`
    <section class="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white shadow-2xl">
      <header class="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4">
        <div><h2 class="font-bold text-gray-800">ตรวจรายชื่อก่อนอัปเดตระบบเวร</h2>
          <p class="mt-1 text-xs text-gray-500">เพิ่มใหม่ ${n} ราย · เปลี่ยนชื่อ ${l} ราย · ตรงกันแล้ว ${Number(e.unchanged||0)} ราย · ข้าม/ตรวจสอบ ${t.length} ราย</p>
        </div>
        <button type="button" data-close class="text-2xl leading-none text-gray-400 hover:text-gray-700" aria-label="ปิด">×</button>
      </header>
      <div class="border-b border-amber-100 bg-amber-50 px-5 py-3 text-xs text-amber-900">
        รายการที่เลือกจะเพิ่มบัญชีใหม่หรือแก้เฉพาะชื่อครูตามรหัสเดิม ระบบจะเก็บรหัสผ่าน บทบาท และข้อมูลเวร/รายงานเดิมไว้
      </div>
      <div class="flex items-center justify-between px-5 py-3 text-xs">
        <span class="font-semibold text-gray-600">รายการที่เปลี่ยนแปลง</span>
        <button type="button" data-select-all class="font-semibold text-indigo-600 hover:text-indigo-800">เลือกทั้งหมด</button>
      </div>
      <div class="min-h-0 flex-1 overflow-y-auto px-5 pb-4">
        ${s.length?`<div class="divide-y divide-gray-100 rounded-xl border border-gray-100">
          ${s.map(a=>`<label class="flex cursor-pointer items-start gap-3 p-3 hover:bg-gray-50">
            <input type="checkbox" data-sync-code="${ae(a.code)}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
            <span class="min-w-0 flex-1"><span class="font-mono text-xs text-indigo-600">${ae(a.code)}</span>
              <span class="ml-2 rounded-full px-2 py-0.5 text-[10px] font-semibold ${a.action==="add"?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700"}">${a.action==="add"?"เพิ่มใหม่":"เปลี่ยนชื่อ"}</span>
              <span class="mt-1 block text-sm font-semibold text-gray-800">${ae(a.source_name)}</span>
              ${a.action==="rename"?`<span class="mt-0.5 block text-xs text-gray-500">ชื่อเดิม: ${ae(a.wen_name||"—")}</span>`:""}
            </span>
          </label>`).join("")}
        </div>`:'<p class="rounded-xl bg-gray-50 px-4 py-8 text-center text-sm text-gray-500">ไม่มีรายการที่ต้องเพิ่มหรือแก้ชื่อ</p>'}
        ${t.length?`<details class="mt-4 rounded-xl border border-amber-200 bg-amber-50/50 p-3">
          <summary class="cursor-pointer text-xs font-semibold text-amber-900">รายการที่ระบบข้าม (${t.length})</summary>
          <div class="mt-3 max-h-40 space-y-2 overflow-y-auto text-xs text-amber-900">
            ${t.map(a=>`<p><span class="font-mono">${ae(a.code)}</span> · ${ae(a.name)} — ${ae(a.reason)}</p>`).join("")}
          </div>
        </details>`:""}
      </div>
      <footer class="flex flex-wrap justify-end gap-2 border-t border-gray-100 px-5 py-4">
        <button type="button" data-close class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button type="button" data-apply disabled class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40">อัปเดต 0 รายการที่เลือก</button>
      </footer>
    </section>`,document.body.appendChild(o);const x=()=>{const a=o.querySelectorAll("[data-sync-code]:checked").length,p=o.querySelector("[data-apply]");p.textContent=`อัปเดต ${a} รายการที่เลือก`,p.disabled=a===0};o.querySelectorAll("[data-close]").forEach(a=>a.addEventListener("click",()=>o.remove())),o.addEventListener("click",a=>{a.target===o&&o.remove()}),o.querySelectorAll("[data-sync-code]").forEach(a=>a.addEventListener("change",x)),x(),(d=o.querySelector("[data-select-all]"))==null||d.addEventListener("click",()=>{const a=[...o.querySelectorAll("[data-sync-code]")],p=a.some(w=>!w.checked);a.forEach(w=>{w.checked=p}),o.querySelector("[data-select-all]").textContent=p?"ยกเลิกทั้งหมด":"เลือกทั้งหมด",x()}),(i=o.querySelector("[data-apply]"))==null||i.addEventListener("click",async a=>{var y,v;const p=a.currentTarget,w=[...o.querySelectorAll("[data-sync-code]:checked")].map(f=>f.dataset.syncCode);if(w.length){p.disabled=!0,p.textContent="กำลังอัปเดต…";try{const f=await Lr({action:"apply",codes:w});o.remove();const T=`เพิ่ม ${f.added||0} · เปลี่ยนชื่อ ${f.renamed||0}`;f.failed?N(`อัปเดตบางส่วน: ${T} · ล้มเหลว ${f.failed} ราย (${((v=(y=f.failures)==null?void 0:y[0])==null?void 0:v.code)||""})`,"warning"):N(`อัปเดตรายชื่อระบบเวรเรียบร้อย ${T}`,"success")}catch(f){console.error("Wen teacher sync failed:",f),N((f==null?void 0:f.message)||"อัปเดตรายชื่อระบบเวรไม่สำเร็จ","error"),p.disabled=!1,x()}}})}async function mi(e){if(e.dataset.busy==="true")return;e.dataset.busy="true",e.disabled=!0;const s=e.textContent;e.textContent="กำลังตรวจรายชื่อ…";try{const t=await Lr({action:"preview"});pi(t)}catch(t){console.error("Wen teacher preview failed:",t),N((t==null?void 0:t.message)||"ตรวจรายชื่อระบบเวรไม่สำเร็จ","error")}finally{e.dataset.busy="false",e.disabled=!1,e.textContent=s}}async function Lr(e){const{data:s,error:t}=await le.functions.invoke("sync-wen-teachers",{body:e});if(t){const n=t.context instanceof Response?t.context:null,l=await(n==null?void 0:n.clone().json().catch(()=>null));throw new Error((l==null?void 0:l.error)||t.message||"เรียกบริการซิงก์ไม่สำเร็จ")}if(s!=null&&s.error)throw new Error(s.error);return s}async function Cr(){var e,s;Ie("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",Se(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const t=await Pe(),n=ze(t.map(r=>r.dept)),l=ze(t.map(r=>r.skill_group));Se(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">จัดการบัญชีและแผนกของครูในระบบ</p>
        </div>
        <div class="flex flex-wrap items-center justify-end gap-2">
          <button id="teacher-sync-wen"
            class="text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2.5 rounded-xl transition">
            🔄 อัปเดตระบบเวร
          </button>
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
          <select id="tf-dept" class="${Be}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${n.map(r=>`<option value="${r}">${r}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${Be}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${l.map(r=>`<option value="${r}">${r}</option>`).join("")}
          </select>
          <select id="tf-subg" class="${Be}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${Be}">
            <option value="">ทุกประเภท</option>
            <option value="ครู">ครู</option>
            <option value="บุคลากร">บุคลากร</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="tf-count" class="font-semibold text-indigo-600">${t.length}</span> / ${t.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="teacher-table-wrap"></div>
      </div>
    </div>`),Dt(t);let o=t;window._impersonateTeacher=async r=>{const d=t.find(i=>i.id===r);if(!d){N("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:i}=await Ce(async()=>{const{startImpersonation:a}=await import("./impersonation-0xVfgYVY.js");return{startImpersonation:a}},[]);await i(le,d),window.location.href="teacher.html"}catch(i){console.error("Cannot start impersonation:",i);const a=/function|schema cache|start_admin_impersonation|edge/i.test((i==null?void 0:i.message)||"");N(a?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(i==null?void 0:i.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const x=()=>{const r=document.getElementById("tf-q").value.toLowerCase(),d=document.getElementById("tf-dept").value,i=document.getElementById("tf-skill").value,a=document.getElementById("tf-subg").value,p=document.getElementById("tf-type").value,w=t.filter(y=>(!r||[y.full_name,y.teacher_code,y.dept,y.skill_group].some(v=>(v??"").toLowerCase().includes(r)))&&(!d||y.dept===d)&&(!i||y.skill_group===i)&&(!a||y.subject_group===a)&&(!p||y.staff_type===p));document.getElementById("tf-count").textContent=w.length,o=w,Dt(w)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(r=>{var d,i;(d=document.getElementById(r))==null||d.addEventListener("input",x),(i=document.getElementById(r))==null||i.addEventListener("change",x)}),(e=document.getElementById("teacher-export-csv"))==null||e.addEventListener("click",()=>{const r=v=>["ACDMVOC","AGMVOC"].includes(v.subject_group)?"ปวช":v.category==="ศาสนา"?"ศาสนา":v.category==="สามัญ"||v.subject_group?"สามัญ":"-",d=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],i=o.map((v,f)=>[f+1,v.teacher_code??"",v.full_name??"",r(v),v.phone??""]),a="\uFEFF"+[d,...i].map(v=>v.map(f=>`"${String(f).replace(/"/g,'""')}"`).join(",")).join(`
`),p=new Blob([a],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL(p),y=document.createElement("a");y.href=w,y.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(y),y.click(),y.remove(),URL.revokeObjectURL(w),N("ดาวน์โหลด CSV แล้ว ✅","success")}),(s=document.getElementById("teacher-sync-wen"))==null||s.addEventListener("click",r=>{mi(r.currentTarget)})}catch{N("โหลดข้อมูลครูไม่สำเร็จ","error")}}function Dt(e){const s=document.getElementById("teacher-table-wrap");if(!s)return;if(e.length===0){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
              <button onclick="window._adminViewSchedule(${n.id},'${We(n.full_name)}')"
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
    </table></div>`}async function ta(){Ie("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",Se(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),[n,l,o,x]=await Promise.all([Pe(),fo(s,t).catch(()=>[]),Xe().catch(()=>[]),na().catch(()=>[])]),r=new Set(l),d=Date.parse(String(e.semester_start??"")),i=S=>{if(!Number.isFinite(d))return!0;const q=Date.parse(String(S.reviewed_at??S.created_at??""));return Number.isFinite(q)&&q>=d},a=o.filter(S=>S.status==="approved"&&i(S)),p=new Map;x.forEach(S=>{var D;if(S.academic_year!=null&&(+S.academic_year!==s||+S.semester!==t))return;const q=(D=S.master_subjects)==null?void 0:D.teacher_id;q&&p.set(q,(p.get(q)??0)+1)});const w=S=>{const q=S.teachers_quota,D=p.get(S.id)??(q==null?void 0:q.total_classes_created)??0,L=a.filter(F=>{var P;return((P=F.teachers)==null?void 0:P.id)===S.id}),C=L.filter(F=>F.package_type==="per_subject").reduce((F,P)=>F+(parseInt(P.room_count??1)||1),0),O=L.some(F=>F.package_type==="semester")||(q==null?void 0:q.package_type)==="semester",z=(q==null?void 0:q.is_paid)&&!(q!=null&&q.package_type)&&!O&&!C,M=parseInt(e.freeClassQuota??2);return O||z?{label:O?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${D} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:C>0?{label:`รายห้อง ${C} ห้อง`,detail:`ใช้แล้ว ${D}/${M+C} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${D}/${M} ห้อง`,cls:D>=M?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},y=n.filter(S=>S.profile_id),v=n.filter(S=>!S.profile_id),f=y.filter(S=>r.has(S.id)),T=y.filter(S=>!r.has(S.id)),c=(S,q,D,L)=>`<button type="button" data-rt-tab="${S}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${L} flex items-center justify-center text-xl font-bold">${D}</div>
        <p class="text-sm text-gray-500">${q}</p>
      </button>`,u=[...new Set(n.map(S=>S.dept).filter(Boolean))].sort(),B={};for(const S of n){const q=(S.full_name??"").toLowerCase().replace(/\s+/g,"");q&&(B[q]||(B[q]=[]),B[q].push(S))}const h=Object.values(B).filter(S=>S.length>1).map(S=>S.slice().sort((q,D)=>(q.registered_at??"")<(D.registered_at??"")?-1:1));Se(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${c("all","ทั้งหมด",n.length,"bg-indigo-100 text-indigo-700")}
        ${c("registered","มีบัญชีแล้ว",y.length,"bg-emerald-100 text-emerald-700")}
        ${c("unregistered","ยังไม่ลงทะเบียน",v.length,"bg-amber-100 text-amber-700")}
        ${c("duplicates","บัญชีซ้ำ",h.length,h.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${c("scheduled","สร้างตารางสอนแล้ว",f.length,"bg-green-100 text-green-700")}
        ${c("unscheduled","ยังไม่สร้างตารางสอน",T.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${Ge} flex-1 min-w-40" />
          <select id="rt-cat" class="${Be}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${Be}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${u.map(S=>`<option value="${S}">${S}</option>`).join("")}
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
    </div>`);let I=n,E="all",A=null;const j=()=>{document.querySelectorAll("[data-rt-tab]").forEach(S=>{var D;const q=S.dataset.rtTab===E||S.dataset.rtTab===A;S.classList.toggle("border-emerald-400",q),S.classList.toggle("bg-emerald-50",q),S.classList.toggle("shadow-lg",q),S.classList.toggle("shadow-emerald-100",q),S.classList.toggle("ring-2",q),S.classList.toggle("ring-emerald-200",q),S.classList.toggle("border-gray-100",!q),(D=S.querySelector("p"))==null||D.classList.toggle("text-emerald-700",q)})},b=S=>p.get(S.id)??0,g=S=>r.has(S.id)?"✓":"—",m=()=>{const S=document.getElementById("rt-dup-list");if(S){if(!h.length){S.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}S.innerHTML=h.map((q,D)=>{const L=q.map((O,z)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${z===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${D}" value="${O.id}"
              class="mt-1 accent-emerald-600" ${z===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${O.image_url?`<img src="${O.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${Fe(O.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${O.teacher_code??"—"}</span>
                ${O.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${b(O)}</span>
                <span>🗓️ ตาราง ${g(O)}</span>
                ${O.login_email?`<span>✉️ ${Fe(O.login_email)}</span>`:""}
                ${O.registered_at?`<span>📅 ${new Date(O.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${O.id}</span>
              </div>
            </div>
          </label>`).join(""),C=q.map(O=>O.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${D}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${D+1} — ${Fe(q[0].full_name??"")}
              <span class="ml-2 text-red-500">(${q.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${L}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${D},'${C}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(S,q)=>{var M;const D=q.split(",").map(Number),L=Number((M=document.querySelector(`input[name="dup-keep-${S}"]:checked`))==null?void 0:M.value);if(!L){N("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const C=D.filter(F=>F!==L);if(!C.length){N("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const O=n.find(F=>F.id===L);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${O==null?void 0:O.full_name} (ID ${L})
ลบ: ID ${C.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const z=document.querySelector(`[data-dup-group="${S}"] button`);z&&(z.disabled=!0,z.textContent="⏳ กำลังรวม...");try{for(const F of C)await ho(L,F);N(`รวมบัญชีสำเร็จ — เหลือ ID ${L}`,"success"),ta()}catch(F){N("เกิดข้อผิดพลาด: "+he(F),"error"),z&&(z.disabled=!1,z.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const k=S=>{var D,L,C,O;const q=S==="duplicates";if((D=document.getElementById("rt-main-section"))==null||D.classList.toggle("hidden",q),(L=document.getElementById("rt-duplicates-section"))==null||L.classList.toggle("hidden",!q),(C=document.getElementById("rt-schedule-stats"))==null||C.classList.toggle("hidden",!0),q){E="duplicates",A=null,j(),m();return}S==="scheduled"||S==="unscheduled"?(E="registered",A=S):(E=S,A=null),I=E==="registered"?y:E==="unregistered"?v:n,(O=document.getElementById("rt-schedule-stats"))==null||O.classList.toggle("hidden",E!=="registered"),j(),$()},_=S=>{const q=document.getElementById("reg-teacher-table");if(q){if(!S.length){q.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`;return}q.innerHTML=`
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
              ${S.map(D=>{const L=(D.full_name??"?").charAt(0).toUpperCase(),C=!!D.profile_id,O=r.has(D.id),z=w(D);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${D.image_url?`<img src="${D.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${C?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${L}</div>`}
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
                    ${C?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`:`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`}
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${C?`<button onclick="window._adminViewSchedule(${D.id},'${We(D.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${O?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${D.id}, '${We(D.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},$=()=>{var O,z,M;const S=(((O=document.getElementById("rt-q"))==null?void 0:O.value)??"").toLowerCase(),q=((z=document.getElementById("rt-cat"))==null?void 0:z.value)??"",D=((M=document.getElementById("rt-dept"))==null?void 0:M.value)??"",L=I.filter(F=>(!S||[F.full_name,F.teacher_code].some(P=>(P??"").toLowerCase().includes(S)))&&(!q||F.category===q)&&(!D||F.dept===D)&&(!A||(A==="scheduled"?r.has(F.id):!r.has(F.id)))),C=document.getElementById("rt-count");C&&(C.textContent=L.length),_(L)};document.querySelectorAll("[data-rt-tab]").forEach(S=>{S.addEventListener("click",()=>k(S.dataset.rtTab))}),k("all"),["rt-q","rt-cat","rt-dept"].forEach(S=>{var q,D;(q=document.getElementById(S))==null||q.addEventListener("input",$),(D=document.getElementById(S))==null||D.addEventListener("change",$)}),window.handleUnlinkTeacher=async(S,q)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${q}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await vo(S),N(`ยกเลิกบัญชี "${q}" แล้ว`,"success"),ta()}catch(D){N("เกิดข้อผิดพลาด: "+he(D),"error")}}}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}async function Ja(){Ie("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",Se(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[e,s]=await Promise.all([na(),Pe().catch(()=>[])]),t=Object.fromEntries(s.map(l=>[l.id,l])),n=document.getElementById("class-list");if(e.length===0){n.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${e.map(l=>{var o,x;return`
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
            ${(o=l.master_subjects)!=null&&o.teacher_id?`<button onclick="window._adminViewSchedule(${l.master_subjects.teacher_id},'${We(((x=t[l.master_subjects.teacher_id])==null?void 0:x.full_name)??l.master_subjects.subject_name??l.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${l.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${l.id},'${(l.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(e.map(l=>[l.id,l])),window._adminEditClass=l=>{var x;const o=(x=window._adminClassCache)==null?void 0:x[l];o&&Ys(null,o)},window._adminDeleteClass=async(l,o)=>{if(confirm(`ยืนยันลบห้องเรียน "${o}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await Ds(l),N(`ลบห้องเรียน "${o}" แล้ว`,"success"),Ja()}catch(x){N("ลบไม่สำเร็จ: "+he(x),"error")}}}catch{N("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function Ir(){Ie("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",Se(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let d=function(a,p,w){var v;(v=document.getElementById("stu-modal"))==null||v.remove();const y=document.createElement("div");y.id="stu-modal",y.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",y.innerHTML=`
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
                    <input id="sf-auth-email" type="email" value="${a.profile_id?p:`stu${a.student_code}@student.pp5.local`}"
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
        </div>`,document.body.appendChild(y),y.querySelector("#stu-close").addEventListener("click",()=>y.remove()),y.querySelector("#stu-cancel").addEventListener("click",()=>y.remove()),y.addEventListener("click",f=>{f.target===y&&y.remove()}),y.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{y.querySelector("#sf-auth-pw").value=y.querySelector("#sf-code").value.trim()}),y.querySelector("#stu-form").addEventListener("submit",async f=>{f.preventDefault();const T=y.querySelector("#stu-save");T.disabled=!0,T.textContent="กำลังบันทึก...";try{const c={student_code:y.querySelector("#sf-code").value.trim()||null,full_name:y.querySelector("#sf-name").value.trim()||null,main_room:y.querySelector("#sf-main-room").value.trim()||null,religion_room:y.querySelector("#sf-rel-room").value.trim()||null,gender:y.querySelector("#sf-gender-val").value||null,house_color:y.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:y.querySelector("#sf-shirt-size").value.trim()||null},u=y.querySelector("#sf-auth-email").value.trim()||null,B=y.querySelector("#sf-auth-pw").value.trim()||null;if(!a.profile_id&&!B){N("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),T.disabled=!1,T.textContent="บันทึก";return}await w(c,u||B?{email:u,password:B}:null),N("บันทึกสำเร็จ","success"),y.remove()}catch(c){N("บันทึกไม่สำเร็จ: "+he(c),"error")}finally{T.disabled=!1,T.textContent="บันทึก"}})};const e=await Et(),s=ze(e.map(a=>at(a.main_room))),t=ze(e.map(a=>pt(a.main_room))),n=ze(e.map(a=>a.house_color)),l=ze(e.map(a=>a.sports_shirt_size));Se(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${Ge} flex-1 min-w-40" />
          <select id="sf-grade" class="${Be}">
            <option value="">ทุกระดับชั้น</option>
            ${s.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-room" class="${Be}">
            <option value="">ทุกห้อง</option>
            ${t.map(a=>`<option value="${a}">ห้อง ${a}</option>`).join("")}
          </select>
          <select id="sf-gender" class="${Be}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <select id="sf-house" class="${Be}">
            <option value="">ทุกสี</option>
            ${n.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-shirt" class="${Be}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${l.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-page-size" class="${Be}">
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
    </div>`);let o=Object.fromEntries(e.map(a=>[a.id,a])),x=1e3;const r=a=>{const p=document.getElementById("student-table-wrap"),w=x==="all"?a:a.slice(0,x);if(document.getElementById("sf-count").textContent=a.length,document.getElementById("sf-showing").textContent=w.length,!a.length){p.innerHTML=`<div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">🔍</p><p>ไม่พบข้อมูลที่ค้นหา</p></div>`;return}p.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
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
          ${w.map(y=>`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${y.image_url?`<img src="${y.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(y.full_name??"?").charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${y.full_name??"—"}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${y.student_code??"—"}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${y.main_room??"—"}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${y.religion_room?`<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${y.religion_room}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${y.gender??"—"}</td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${y.house_color?`<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${y.house_color}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${y.sports_shirt_size?`<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${y.sports_shirt_size}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${y.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${y.id},'${(y.full_name??"").replace(/'/g,"")}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      ${w.length<a.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(a,p)=>{if(confirm(`ยืนยันลบนักเรียน "${p}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await Hn(a),delete o[a],e.splice(e.findIndex(w=>w.id===a),1),N(`ลบ "${p}" แล้ว`,"success"),i()}catch(w){N("ลบไม่สำเร็จ: "+he(w),"error")}},window._editStudent=async a=>{const p=o[a];if(!p)return;let w="";try{const{data:y,error:v}=await le.rpc("lookup_student_by_code",{p_student_code:p.student_code});!v&&y&&y[0]&&(w=y[0].login_email||"")}catch(y){console.error(y)}d(p,w,async(y,v)=>{if(await Rn(a,y),v&&(v.email||v.password)){const{error:f}=await le.rpc("admin_update_student_auth",{p_student_id:a,p_new_email:v.email||null,p_new_password:v.password||null});if(f)throw f}Object.assign(p,y),o[a]=p,i()})},r(e);const i=()=>{const a=document.getElementById("sf-q").value.toLowerCase(),p=document.getElementById("sf-grade").value,w=document.getElementById("sf-room"),y=w.value,v=ze(e.filter(h=>!p||at(h.main_room)===p).map(h=>pt(h.main_room)));v.includes(y)||(w.value=""),w.innerHTML='<option value="">ทุกห้อง</option>'+v.map(h=>`<option value="${h}" ${h===w.value?"selected":""}>ห้อง ${h}</option>`).join("");const f=w.value,T=document.getElementById("sf-gender").value,c=document.getElementById("sf-house").value,u=document.getElementById("sf-shirt").value,B=document.getElementById("sf-page-size").value;x=B==="all"?"all":Number(B),r(e.filter(h=>(!a||[h.full_name,h.student_code,h.main_room,h.religion_room].some(I=>(I??"").toLowerCase().includes(a)))&&(!p||at(h.main_room)===p)&&(!f||pt(h.main_room)===f)&&(!T||h.gender===T)&&(!c||h.house_color===c)&&(!u||h.sports_shirt_size===u)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(a=>{var p,w;(p=document.getElementById(a))==null||p.addEventListener("input",i),(w=document.getElementById(a))==null||w.addEventListener("change",i)})}catch{N("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function xi(){const{getCommentPhrases:e,addCommentPhrase:s,updateCommentPhrase:t,deleteCommentPhrase:n}=await Ce(async()=>{const{getCommentPhrases:i,addCommentPhrase:a,updateCommentPhrase:p,deleteCommentPhrase:w}=await import("./api-BQaMiX9s.js");return{getCommentPhrases:i,addCommentPhrase:a,updateCommentPhrase:p,deleteCommentPhrase:w}},__vite__mapDeps([0,1,2,3,4])),l=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],o={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},x={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},r=document.createElement("div");r.style.cssText="padding:4px 0;";async function d(){const i=await e().catch(()=>[]);r.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${l.map(a=>{const p=i.filter(w=>w.metric===a.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${o[a.key]};color:${x[a.key]};padding:3px 12px;border-radius:20px;">${a.label}</span>
            <button class="ph-add-btn" data-metric="${a.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${p.map(w=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f9fafb;border-radius:8px;">
                <input class="ph-edit-inp" data-id="${w.id}" value="${w.phrase.replace(/"/g,"&quot;")}"
                  style="flex:1;border:none;background:transparent;font-size:13px;font-family:inherit;outline:none;"/>
                <button class="ph-save-btn" data-id="${w.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #059669;border-radius:6px;background:#d1fae5;color:#065f46;cursor:pointer;font-family:inherit;white-space:nowrap;">
                  บันทึก
                </button>
                <button class="ph-del-btn" data-id="${w.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:6px;background:#fee2e2;color:#dc2626;cursor:pointer;font-family:inherit;">
                  ลบ
                </button>
              </div>`).join("")}
            ${p.length?"":'<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>'}
          </div>
        </div>`}).join("")}
    `,r.querySelectorAll(".ph-add-btn").forEach(a=>{a.onclick=async()=>{const p=prompt("พิมพ์ประโยคใหม่:");p!=null&&p.trim()&&(await s(a.dataset.metric,p.trim()),d())}}),r.querySelectorAll(".ph-save-btn").forEach(a=>{a.onclick=async()=>{const p=r.querySelector(`.ph-edit-inp[data-id="${a.dataset.id}"]`);await t(parseInt(a.dataset.id),p.value.trim()),a.textContent="✓",setTimeout(()=>a.textContent="บันทึก",1e3)}}),r.querySelectorAll(".ph-del-btn").forEach(a=>{a.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await n(parseInt(a.dataset.id)),d())}})}return await d(),r}async function Qa(){Ie("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",Se(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[e,s,t,n]=await Promise.all([Ne(),oa().catch(()=>[]),ot().catch(()=>[]),xo().catch(()=>[])]);e.feedbackQuotaTeacher=e.feedbackQuotaTeacher||"5",e.feedbackQuotaStudent=e.feedbackQuotaStudent||"3",e.freeAttendanceScanLimit=e.freeAttendanceScanLimit||"2",e.freeRandomPickerLimit=e.freeRandomPickerLimit||"1",e.freeTimerLimit=e.freeTimerLimit||"1",e.freeDashboardLimit=e.freeDashboardLimit||"0",e.freePromptAiLimit=e.freePromptAiLimit||"1";let l=Qo(e);window._latestFullBackupId=null;const o=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],x=[...new Set([...o,...t.map(v=>v.dept_code).filter(Boolean),...n.map(v=>v.dept).filter(Boolean)])].sort(),r={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},d="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(v,f,T)=>{var B,h,I,E,A;const c=(h=(B=document.getElementById(f))==null?void 0:B.value)==null?void 0:h.trim(),u=document.getElementById(T);if(!c){u.textContent="⚠️ ยังไม่ได้ใส่ Key",u.className="text-xs text-amber-500 font-medium";return}v.textContent="⏳",v.disabled=!0;try{const j=((E=(I=document.getElementById("cfg-geminiModel"))==null?void 0:I.value)==null?void 0:E.trim())||"gemini-1.5-flash",b=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${j}:generateContent?key=${c}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if(b.ok)u.textContent="✅ ใช้งานได้",u.className="text-xs text-emerald-600 font-semibold";else{const m=((A=(await b.json().catch(()=>({}))).error)==null?void 0:A.message)??`HTTP ${b.status}`;u.textContent=`❌ ${m.slice(0,60)}`,u.className="text-xs text-red-500 font-medium"}}catch{u.textContent="❌ เชื่อมต่อไม่ได้",u.className="text-xs text-red-500 font-medium"}v.textContent="ทดสอบ",v.disabled=!1};const i=({key:v,label:f,type:T,options:c,placeholder:u,hint:B,rows:h,syncFrom:I})=>{var b;const E=e[v]??"",A=`id="cfg-${v}" data-key="${v}"`,j=(g,m="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${f}</label>
          ${g}
          ${m?`<p class="text-[11px] text-gray-400 mt-1">${m}</p>`:""}
        </div>`;if(T==="color")return j(`
        <div class="flex items-center gap-3">
          <input type="color" ${A} value="${E||r[v]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${v}-txt" class="text-sm font-mono text-gray-600">${E||r[v]||"#007bff"}</span>
        </div>`,B);if(T==="date")return j(`<input type="date" ${A} value="${E}" class="${d}" />`,B);if(T==="select")return j(`
        <select ${A} class="${d} bg-white">
          ${(c??[]).map(g=>{const m=typeof g=="object"?g.value:g,k=typeof g=="object"?g.label:g;return`<option value="${m}" ${m===E?"selected":""}>${k}</option>`}).join("")}
        </select>`,B);if(T==="choice"){const g=E||((b=c==null?void 0:c[0])==null?void 0:b.value)||"";return j(`
          <input type="hidden" ${A} value="${ae(g)}" />
          <div class="flex flex-wrap gap-2" role="group" aria-label="${ae(f)}">
            ${(c??[]).map(m=>{const k=typeof m=="object"?m.value:m,_=typeof m=="object"?m.label:m;return`<button type="button" class="cfg-choice px-3 py-2 rounded-xl border text-sm font-semibold transition ${k===g?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}" data-choice-key="${ae(v)}" data-choice-value="${ae(k)}">
                ${ae(_)}
              </button>`}).join("")}
          </div>`,B)}if(T==="textarea")return j(`<textarea ${A} rows="${h??3}" placeholder="${u??""}"
          class="${d} resize-none">${E??""}</textarea>`,B);if(T==="upload")return j(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${E?`<img src="${E}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${E?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${v}" />
          </label>
          ${/(?:LogoUrl|LogoBwUrl)$/.test(v)?`<button type="button"
            class="cfg-upload-clear ${E?"":"hidden"} flex-shrink-0 px-3 py-2 rounded-lg border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition"
            data-key="${v}">🗑️ ล้างโลโก้</button>`:""}
          <input type="hidden" ${A} value="${E}" />
        </div>`,B);if(T==="toggle"){const g=E==="true";return j(`
          <button type="button" ${A} data-on="${g}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${g?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${g?"28":"2"}px)"></span>
          </button>`,B)}if(T==="password"){const g=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(v),m=`const i=document.getElementById('cfg-${v}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,k=g?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${v}','cfg-${v}-st')">ทดสอบ</button>
             <span id="cfg-${v}-st" class="text-xs text-gray-400"></span>`:"";return j(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${A} value="${E}" class="${d} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${m}">ดู</button>
            ${k}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,B)}return j(I?`
        <div class="flex gap-2 items-center">
          <input type="text" ${A} value="${E??""}" placeholder="${u??""}" class="${d} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${I}','${v}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${A} value="${E??""}" placeholder="${u??""}" class="${d}" />`,B)},a=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"term-data",icon:"🗃️",label:"ข้อมูลทั้งหมด"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"subject-icons",icon:"📚",label:"ไอคอนรายวิชา"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],p=v=>{const f=(T,c)=>`<div class="mb-6">
          ${T?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${T}</p>`:""}
          ${c.map(i).join("")}
        </div>`;if(v==="subject-icons"){const T=new Set(ps.map(h=>h.key)),c=(h,I=!1)=>{const E=l[h.key],A=h.defaultValue??"",j=(E==null?void 0:E.type)==="emoji"?E.value:I?"":A,b=(E==null?void 0:E.type)==="image"?E.value:"";return`<div data-subject-visual-row="true" data-subject-visual-original="${ae(h.key)}" class="rounded-2xl border border-gray-200 bg-gray-50/70 p-3" data-image-url="${ae(b)}">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
              <div class="subject-visual-preview flex-shrink-0 w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-4xl overflow-hidden shadow-sm">
                ${b?`<img src="${ae(b)}" alt="" class="w-full h-full object-contain" />`:ae(j||"✨")}
              </div>
              <div class="min-w-0 flex-1 space-y-1.5">
                ${I?`<input type="text" class="subject-visual-key ${d}" value="${ae(h.key)}" placeholder="เช่น code:ค33102 หรือ dept:MATH" />`:`<p class="text-sm font-bold text-gray-700">${ae(h.label)}</p><p class="text-[11px] text-gray-400 font-mono">${ae(h.key)}</p>`}
                <input type="text" class="subject-visual-value ${d}" value="${ae(j)}" maxlength="8" placeholder="ใส่อิโมจิ เช่น 🇹🇭 หรือ 📘" />
              </div>
              <label class="cursor-pointer inline-flex flex-shrink-0 items-center justify-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50 transition">
                📁 PNG
                <input type="file" accept="image/png" class="hidden subject-visual-upload" />
              </label>
              ${I?'<button type="button" class="subject-visual-remove flex-shrink-0 px-2 py-2 rounded-xl text-xs text-red-500 hover:bg-red-50" title="ลบกติกานี้">ลบ</button>':""}
            </div>
          </div>`},u=ps.map(h=>c(h)).join(""),B=Object.keys(l).filter(h=>!T.has(h)).map(h=>c({key:h,label:h},!0)).join("");return`<div class="space-y-5">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
            <p class="text-sm font-bold text-indigo-900">📚 ไอคอน/อิโมจิประจำรายวิชา</p>
            <p class="mt-1 text-xs leading-relaxed text-indigo-700">กำหนดภาพที่แสดงบนการ์ดคอร์สและห้องเรียนได้ตามกลุ่มวิชา ภาษา หรือรหัสวิชา ระบบจะเลือกกติกาเฉพาะรหัสวิชาก่อน แล้วจึงเลือกภาษา/กลุ่มสาระ/ค่าเริ่มต้นตามลำดับ</p>
            <p class="mt-2 text-[11px] text-indigo-600">PNG จะรักษาพื้นหลังโปร่งใส เหมาะสำหรับภาพตกแต่งขนาดใหญ่ที่วางซ้อนมุมขวาล่างของการ์ด</p>
          </div>
          <div class="space-y-2.5">${u}</div>
          <div class="border-t border-gray-100 pt-5">
            <div class="flex items-center justify-between gap-3 mb-3">
              <div><p class="text-sm font-bold text-gray-700">กำหนดเฉพาะรายวิชา</p><p class="text-[11px] text-gray-400 mt-1">ใช้คีย์รูปแบบ <span class="font-mono">code:รหัสวิชา</span> เพื่อให้มีผลเฉพาะคอร์สนั้น</p></div>
              <button type="button" data-subject-visual-add class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50">＋ เพิ่มกติกา</button>
            </div>
            <div data-subject-visual-custom-list class="space-y-2.5">${B}</div>
          </div>
          <input type="hidden" id="cfg-subjectVisuals" data-key="subjectVisuals" value="${ae(JSON.stringify(l))}" />
        </div>`}if(v==="term-data")return`
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
        </section>`;if(v==="general")return[`<section class="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">ภาคเรียนปัจจุบันของระบบ</p>
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-xl bg-white border border-indigo-100 px-4 py-2.5 text-sm font-bold text-indigo-800">
              📚 ภาคเรียนที่ ${ae(e.semester??"—")} / ${ae(e.academicYear??e.academic_year??"—")}
            </span>
            <span class="text-xs text-indigo-600">การเปลี่ยนภาคเรียนต้องใช้ปุ่ม “ขึ้นภาคเรียนใหม่” ด้านล่าง เพื่อให้ระบบเก็บประวัติและสร้างพื้นที่ว่างอย่างปลอดภัย</span>
          </div>
          <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-indigo-700">
            <span>เปิดภาคเรียน: ${ae(e.semester_start??"—")}</span>
            <span>ปิดภาคเรียน: ${ae(e.semester_end??"—")}</span>
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
            ${(s.length?s:[{academic_year:e.academicYear,semester:e.semester,start_date:e.semester_start,end_date:e.semester_end,is_current:!0}]).map(T=>`
              <div class="flex flex-wrap items-center justify-between gap-2 rounded-xl border ${T.is_current?"border-emerald-200 bg-emerald-50/60":"border-gray-100 bg-gray-50/60"} px-3 py-2.5">
                <div class="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <span>${T.is_current?"🟢":"🗂️"}</span>
                  <span>ภาค ${ae(T.semester)}/${ae(T.academic_year)}</span>
                  ${T.is_current?'<span class="text-[10px] rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">ปัจจุบัน</span>':'<span class="text-[10px] rounded-full bg-gray-200 text-gray-500 px-2 py-0.5">ย้อนหลัง</span>'}
                </div>
                <span class="text-[11px] text-gray-400">${ae(T.start_date??"—")} ถึง ${ae(T.end_date??"—")}</span>
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
        </div>`,f("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),f("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(v==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map(T=>i({...T,type:"color"})).join("")}
        </div>`;if(v==="school"){const T=(c,u)=>[{key:`${c}SchoolName`,label:u.name,type:"text"},{key:`${c}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${c}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${c}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${c}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${c}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${c}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${c}AcademicHeadName`,label:c==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:c==="samai"?"academic_samai":"academic_pvch"},{key:`${c}AcademicHeadSignUrl`,label:c==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${c}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...c==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${c}RegistrarName`,label:c==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:c==="samai"?"registrar_samai":"registrar_pvch"},{key:`${c}RegistrarSignUrl`,label:c==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${c}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...c==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"},{key:"religionDeptHeadSource",label:"ชื่อหัวหน้ากลุ่มสาระในเอกสาร ปพ.5 (วิชาศาสนา)",type:"choice",options:[{value:"central",label:"ใช้หัวหน้ากลุ่มสาระกลาง"},{value:"subgroup",label:"ใช้หัวหน้ากลุ่มย่อยของครูผู้สอน"}],hint:"ใช้กับทั้งศาสนามัธยม (AGM) และศาสนาปวช. (AGMVOC) — หากเลือกหัวหน้ากลุ่มย่อยแต่ยังไม่พบกลุ่มของครู ระบบจะสำรองเป็นหัวหน้ากลุ่มสาระกลาง"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${T("samai",{name:"ชื่อโรงเรียน"}).map(i).join("")}</div>
          <div id="school-porwor" class="hidden">${T("porwor",{name:"ชื่อวิทยาลัย"}).map(i).join("")}</div>`}if(v==="prayer")return[f("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),f("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(v==="contact")return[f("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),f("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},(T,c)=>String(c+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},(T,c)=>String(c+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(v==="payment")return[f("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),f("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(v==="package"){const c=Array.from({length:5},(I,E)=>{const A=E+1,j=`donationStickerImg${A}`,b=e[j]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${b?`<img src="${b}" class="w-full h-full object-contain" id="sticker-prev-${A}" />`:`<span id="sticker-prev-${A}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${A}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${j}" data-n="${A}" />
              </label>
              ${b?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${j}" data-n="${A}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${j}" value="${b}" />
              ${b?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${b}</p>`:""}
            </div>
          </div>`}).join(""),u=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],B={quota:[f("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),f("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),f("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[f("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),f("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),f("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(I=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${I}">
                  👁️ ระดับ ${I}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const I=String(e.donationSpecialFeatures??"").trim(),A=I?I.split(`
`).filter(Boolean).map(m=>{const k=m.split("|").map(_=>_.trim());return{icon:k[0]||"✨",text:k[1]||"",minTier:parseInt(k[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([m,k,_])=>({icon:m,text:k,minTier:_})),j=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],b=(m,k)=>k?`border:2px solid ${j[m-1]};color:${j[m-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",g=(m,k)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${k}" data-min-tier="${m.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${m.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${m.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(_=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${b(_,m.minTier===_)}" data-n="${_}" title="ระดับ ${_}">${_}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${A.map((m,k)=>g(m,k)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(e.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),f("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${c}</div>
            </div>`,f("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),f("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[f("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[f("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),f("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},h="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${u.map(I=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${I.id===h?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${I.id}">${I.label}</button>`).join("")}
          </div>
          ${u.map(I=>`
          <div id="pkg-panel-${I.id}" ${I.id!==h?'class="hidden"':""}>
            ${B[I.id]??""}
          </div>`).join("")}`}if(v==="student")return[f("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),f("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),f("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),f("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),f("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <p class="text-sm font-semibold text-emerald-900">ซิงก์รายสัปดาห์</p>
              <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
                ปุ่มนี้ตรวจสอบรายชื่อก่อนยืนยันอัปเดตทันที ใช้แหล่งข้อมูลเดียวกับรอบรายสัปดาห์ ซึ่งตั้ง trigger ใน Apps Script ที่ฟังก์ชัน <span class="font-mono">runWeeklyStudentSync</span>
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
        <p id="student-sync-status" role="status" aria-live="polite" class="mt-3 text-sm break-words"></p>
        <div id="student-sync-log-section" class="mt-3 rounded-2xl border border-gray-100 bg-white p-4 hidden">
          <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">ประวัติการซิงก์ล่าสุด</p>
          <div id="student-sync-log-content" class="text-sm text-gray-700 space-y-2"></div>
        </div>`].join("");if(v==="sync"){const T=[["classInfoSubjectNameCell","ชื่อรายวิชา"],["classInfoSubjectCodeCell","รหัสวิชา"],["classInfoCreditCell","หน่วยกิต"],["classInfoGradeCell","ชั้นเรียน"],["classInfoHeadStudentCell","หัวหน้าห้อง"],["classInfoDay1Cell","วันสอนคาบ 1"],["classInfoDay2Cell","วันสอนคาบ 2"],["classInfoDay3Cell","วันสอนคาบ 3"],["classInfoDay4Cell","วันสอนคาบ 4"],["classInfoDay5Cell","วันสอนคาบ 5"],["classInfoDay6Cell","วันสอนคาบ 6"],["classInfoTeacherNameCell","ครูผู้สอน"],["classInfoTeacherPhoneCell","เบอร์ติดต่อ"],["classInfoDeptCell","กลุ่มสาระ"],["classInfoHeadDeptCell","หัวหน้าหมวด"]];return`
          ${i({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          <div class="rounded-xl border border-amber-100 bg-amber-50 p-3 text-xs text-amber-800 mb-4">การตั้งค่าโฟลเดอร์ Drive สำหรับจัดเก็บแผนเป็นการตั้งค่าส่วนตัวของครูแต่ละคนและแต่ละภาคเรียน ให้ตั้งค่าได้จากหน้าศูนย์ส่ง/จัดเก็บแผนรายสัปดาห์ในหน้ารายวิชา</div>
          ${i({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${T.map(([c,u])=>{const B=e[c]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${u}</p>
                <input type="text" id="cfg-${c}" data-key="${c}" value="${B}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return v==="template"?[f("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${Yo.map(T=>i({key:T.key,label:`${T.category} — ${T.label}`,type:"text",placeholder:T.defaultId,hint:`default: ${T.defaultId}`})).join("")}`].join(""):v==="phrases"?xi():v==="schedule"?[f("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),f("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),f("Gemini API Key แยกต่อกลุ่มสาระ",x.length?x.map(T=>({key:`geminiKey_${T}`,label:`Key กลุ่มสาระ ${T}`,type:"password",hint:`ครูที่มี dept = ${T} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):v==="council"?[f("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let w="general";Se(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${a.map(v=>`
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${v.id===w?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-tab="${v.id}">
            <span>${v.icon}</span><span class="hidden sm:inline">${v.label}</span>
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
    </div>`);const y=v=>{var je,He;w=v,document.querySelectorAll(".cfg-tab").forEach(V=>{const ue=V.dataset.tab===v;V.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${ue?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const f=p(v),T=document.getElementById("cfg-panel-inner");f instanceof Promise?(T.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',f.then(V=>{T.innerHTML="",V instanceof Element?T.appendChild(V):T.innerHTML=V??""})):f instanceof Element?(T.innerHTML="",T.appendChild(f)):T.innerHTML=f??"",document.getElementById("cfg-save-hint").textContent="";const c=document.getElementById("btn-create-full-backup"),u=document.getElementById("btn-reset-full-backup"),B=document.getElementById("full-backup-status"),h=document.getElementById("full-backup-progress-wrap"),I=document.getElementById("full-backup-progress-label"),E=document.getElementById("full-backup-progress-detail"),A=document.getElementById("full-backup-progress-bar"),j=document.getElementById("full-backup-progress-note"),b=document.getElementById("btn-create-term-backup"),g=document.getElementById("btn-resume-term-backup"),m=document.getElementById("btn-clear-term-backup"),k=document.getElementById("term-backup-status"),_=document.getElementById("term-backup-progress-wrap"),$=document.getElementById("term-backup-progress-label"),S=document.getElementById("term-backup-progress-count"),q=document.getElementById("term-backup-progress-bar"),D=async V=>{if(!V&&!confirm("สร้างไฟล์สำรองเฉพาะข้อมูลการเข้าเรียนและคะแนนละหมาดของภาคเรียนปัจจุบันใช่หรือไม่?"))return;const ue=V?null:Fl(),ie=parseInt(e.academicYear??e.academic_year),oe=parseInt(e.semester);let G=V?"กำลังตรวจสอบจุดสำรองเดิม":"กำลังเริ่มสำรองข้อมูล";const K=Date.now();let W=K;b&&(b.disabled=!0),g&&(g.disabled=!0),m&&(m.disabled=!0),b&&(b.textContent=V?"⏳ กำลังทำสำรองต่อ...":"⏳ กำลังสำรองข้อมูลภาคเรียน..."),_==null||_.classList.remove("hidden"),$&&($.textContent=G),S&&(S.textContent=""),!V&&q&&(q.style.width="0%");const re=setInterval(()=>{if(Date.now()-W<15e3||!k)return;const Q=Math.floor((Date.now()-K)/1e3);k.textContent=`${G} · ${Q.toLocaleString()} วินาที`},5e3);try{const Q=await Xl({saveTarget:ue,resume:V,academicYear:ie,semester:oe,onProgress:(ee,de,ge)=>{G=ee,W=Date.now(),k&&(k.textContent=ee),$&&($.textContent=`${ee}${(ge==null?void 0:ge.percent)!=null?` · ${ge.percent}%`:""}`),S&&(S.textContent=(ge==null?void 0:ge.totalRows)!=null?`${ge.completedRows.toLocaleString()}/${ge.totalRows.toLocaleString()} รายการ`:de?`${de.toLocaleString()} รายการ`:""),q&&(ge==null?void 0:ge.percent)!=null&&(q.style.width=`${Math.max(0,Math.min(100,ge.percent))}%`)}});window._latestTermBackupId=Q.backupId,b&&(b.disabled=!1),k&&(k.textContent=`สำเร็จ ${Q.academicYear}/${Q.semester} · เข้าเรียน ${Q.counts.attendances.toLocaleString()} · ละหมาด ${Q.counts.prayer_records.toLocaleString()} · ${(Q.byteSize/1024/1024).toFixed(1)} MB`),$&&($.textContent="ตรวจสอบและลงทะเบียนไฟล์สำรองสำเร็จ · 100%"),q&&(q.style.width="100%"),g==null||g.classList.add("hidden"),m==null||m.classList.add("hidden"),N("สำรองข้อมูลที่จะล้างก่อนขึ้นภาคเรียนสำเร็จ ✅","success")}catch(Q){k&&(k.textContent=(Q==null?void 0:Q.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ไม่มีข้อมูลถูกลบ":"สำรองข้อมูลภาคเรียนไม่สำเร็จ · ตรวจสอบข้อความผิดพลาดและเลือก “ทำสำรองต่อ” ได้"),N("สำรองข้อมูลภาคเรียนไม่สำเร็จ: "+he(Q),"error");const ee=await ws(ie,oe);g==null||g.classList.toggle("hidden",!ee),m==null||m.classList.toggle("hidden",!ee),b&&ee&&(b.disabled=!0,b.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่")}finally{if(clearInterval(re),b){const Q=g&&!g.classList.contains("hidden");b.disabled=!!Q,b.textContent=Q?"⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่":"⬇️ สำรองข้อมูลก่อนขึ้นภาคเรียน"}g&&(g.disabled=!1),m&&(m.disabled=!1)}};b&&!b.dataset.bound&&(b.dataset.bound="true",b.addEventListener("click",()=>D(!1))),g&&!g.dataset.bound&&(g.dataset.bound="true",g.addEventListener("click",()=>D(!0))),m&&!m.dataset.bound&&(m.dataset.bound="true",m.addEventListener("click",async()=>{const V=parseInt(e.academicYear??e.academic_year),ue=parseInt(e.semester);if(confirm("ล้างเฉพาะจุดสำรองภาคเรียนที่ค้างในเบราว์เซอร์ใช่หรือไม่? ไฟล์ที่เลือกไว้จะไม่ถูกลบ"))try{await Gl(V,ue),g.classList.add("hidden"),m.classList.add("hidden"),b&&(b.disabled=!1),k&&(k.textContent="ล้างจุดสำรองค้างแล้ว · สามารถเริ่มไฟล์ใหม่ได้")}catch(ie){N("ล้างจุดสำรองค้างไม่สำเร็จ: "+he(ie),"error")}})),g&&ws(parseInt(e.academicYear??e.academic_year),parseInt(e.semester)).then(V=>{g.classList.toggle("hidden",!V),m==null||m.classList.toggle("hidden",!V),b&&(b.disabled=!!V),b&&V&&(b.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่"),V&&k&&(k.textContent=`พบงานค้าง ${V.academicYear}/${V.semester} · ต่อจาก ${V.completedRows.toLocaleString()}/${V.totalRows.toLocaleString()} รายการ`)}).catch(V=>console.warn("อ่านจุดสำรองภาคเรียนไม่สำเร็จ:",V));let L=null,C=!1;const O=V=>{var ie;if(!h||!V)return;h.classList.remove("hidden");const ue=Math.max(0,Math.min(100,Number(V.percent)||0));if(I&&(I.textContent=`ความคืบหน้าโดยประมาณ ${ue}%`),A&&(A.style.width=`${ue}%`,(ie=A.parentElement)==null||ie.setAttribute("aria-valuenow",String(ue))),E){const oe=V.tableCount?`ตาราง ${Math.min(V.tableIndex+1,V.tableCount).toLocaleString()}/${V.tableCount.toLocaleString()}`:"",G=V.estimatedTotalRows?`ข้อมูลประมาณ ${V.completedRows.toLocaleString()}/${V.estimatedTotalRows.toLocaleString()} รายการ`:"";E.textContent=[oe,G].filter(Boolean).join(" · ")}j&&(V.storageCount>0&&V.percent>=90?j.textContent=`กำลังสำรองไฟล์ Storage ${V.storageIndex.toLocaleString()}/${V.storageCount.toLocaleString()}`:V.currentTableEstimate>0?j.textContent=`ตารางปัจจุบัน: ${V.currentTableRows.toLocaleString()}/${V.currentTableEstimate.toLocaleString()} รายการ (ตัวเลขโดยประมาณจากสถิติฐานข้อมูล)`:j.textContent="กำลังอ่านและเขียนข้อมูลเป็นช่วง ๆ สามารถสำรองต่อจากจุดล่าสุดได้หากการเชื่อมต่อหลุด")},z=async()=>{const V=await $a().catch(()=>null);if(L=V,C=!0,c&&(c.disabled=!1),u&&(u.classList.toggle("hidden",!V),u.disabled=!1),!!c){if(!V){c.textContent="⬇️ สำรองข้อมูลทั้งหมด";return}if(c.textContent="▶️ สำรองต่อจากจุดล่าสุด",B){const ue=V.phase==="finalizing"?"กำลังตรวจสอบไฟล์สำรอง":V.phase==="storage"?`ไฟล์ Storage ${V.storageIndex.toLocaleString()}/${V.storageCount.toLocaleString()}`:`${V.tableName??"ตาราง"} ${V.tableIndex+1}/${V.tableCount}`;B.textContent=`พบงานสำรองที่หยุดไว้ · ${ue}${V.phase==="storage"||V.phase==="finalizing"?"":` · ${V.rowOffset.toLocaleString()} รายการ`}`,O(V.progress)}}};c&&(c.disabled=!0),z(),c&&!c.dataset.bound&&(c.dataset.bound="true",c.addEventListener("click",async()=>{if(!C){N("กำลังตรวจงานสำรองค้าง กรุณารอสักครู่แล้วลองใหม่","info");return}if(!confirm("ยืนยันสร้างไฟล์สำรองข้อมูลทั้งหมดของระบบ? ไฟล์อาจมีข้อมูลส่วนบุคคลจำนวนมาก"))return;const V=L?null:zl();let ue=Date.now();const ie=ue;c.disabled=!0,u&&(u.disabled=!0),c.textContent="⏳ กำลังสำรองข้อมูลทั้งหมด...";let oe=V?"กำลังเลือกตำแหน่งไฟล์สำรอง":"กำลังเตรียมรายการตาราง";B&&(B.textContent=oe),O({percent:0,tableIndex:0,tableCount:0,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0});const G=setInterval(()=>{if(!B||Date.now()-ue<15e3)return;const K=Math.floor((Date.now()-ie)/1e3);B.textContent=`กำลังทำขั้นตอน: ${oe} · ${K.toLocaleString()} วินาที`},5e3);try{const K=await Zl({saveTarget:V,onProgress:(W,re,Q)=>{ue=Date.now(),oe=W,B&&(B.textContent=`${W}${re?` · ${re.toLocaleString()} รายการ`:""}`),O(Q)}});window._latestFullBackupId=K.backupId;try{localStorage.setItem("pp5_latest_full_backup_id",K.backupId??"")}catch{}B&&(B.textContent=`สำเร็จ: ${K.fileName} · ${Math.round(K.byteSize/1024/1024)} MB · ${K.tableCount} ตาราง`),O({percent:100,tableIndex:K.tableCount,tableCount:K.tableCount,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0}),N(`สำรองข้อมูลทั้งหมดสำเร็จ และ${K.savedToDisk?"บันทึกไฟล์ลงดิสก์แล้ว":"ดาวน์โหลดไฟล์แล้ว"} ✅`,"success")}catch(K){const W=await $a().catch(()=>null);L=W,B&&(B.textContent=(K==null?void 0:K.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ข้อมูลในฐานข้อมูลไม่ถูกเปลี่ยนแปลง":W?`หยุดไว้ชั่วคราว · กดปุ่มเดิมเพื่อสำรองต่อจาก ${W.tableName??"จุดล่าสุด"}`:"สำรองข้อมูลไม่สำเร็จ"),(K==null?void 0:K.code)==="BACKUP_FILE_MISSING"&&B&&(B.textContent="ไม่พบไฟล์เดิมแล้ว · กด “ล้างงานสำรองค้าง” แล้วเริ่มสำรองใหม่"),N("สำรองข้อมูลไม่สำเร็จ: "+he(K),"error")}finally{clearInterval(G),c.disabled=!1;const K=await $a().catch(()=>null);L=K,C=!0,c.textContent=K?"▶️ สำรองต่อจากจุดล่าสุด":"⬇️ สำรองข้อมูลทั้งหมด",u&&(u.classList.toggle("hidden",!K),u.disabled=!1)}})),u&&!u.dataset.bound&&(u.dataset.bound="true",u.addEventListener("click",async()=>{if(confirm("ล้างเฉพาะงานสำรองค้างในเบราว์เซอร์ใช่หรือไม่? การทำงานนี้จะไม่ลบข้อมูลในฐานข้อมูลหรือไฟล์อื่น")){u.disabled=!0;try{await Vl(),B&&(B.textContent="ล้างงานสำรองค้างแล้ว · กด “สำรองข้อมูลทั้งหมด” เพื่อเลือกตำแหน่งไฟล์ใหม่"),h&&h.classList.add("hidden"),c&&(c.textContent="⬇️ สำรองข้อมูลทั้งหมด"),u.classList.add("hidden"),N("ล้างงานสำรองค้างแล้ว สามารถเริ่มไฟล์ใหม่ได้ ✅","success")}catch(V){u.disabled=!1,N("ล้างงานสำรองค้างไม่สำเร็จ: "+he(V),"error")}}}));const M=document.getElementById("full-backup-file"),F=document.getElementById("btn-restore-full-backup"),P=document.getElementById("full-restore-status");M&&F&&!M.dataset.bound&&(M.dataset.bound="true",M.addEventListener("change",()=>{var V,ue;F.disabled=!((V=M.files)!=null&&V[0]),P&&(P.textContent=(ue=M.files)!=null&&ue[0]?`เลือกไฟล์: ${M.files[0].name}`:"")}),F.addEventListener("click",async()=>{var ue;const V=(ue=M.files)==null?void 0:ue[0];if(V&&confirm("ยืนยันกู้คืนข้อมูลตามขอบเขตของไฟล์นี้? ระบบจะเพิ่มหรือปรับเฉพาะข้อมูลในไฟล์ และไม่ลบข้อมูลอื่น")){F.disabled=!0,F.textContent="⏳ กำลังกู้คืน...";try{const ie=await rd(V,{onProgress:(oe,G)=>{P&&(P.textContent=`${oe} · ${G.toLocaleString()} รายการ`)}});P&&(P.textContent=`กู้คืนสำเร็จ · SHA-256: ${ie.sha256.slice(0,16)}…`),N("กู้คืนข้อมูลจากไฟล์สำรองสำเร็จ ✅","success")}catch(ie){P&&(P.textContent="กู้คืนข้อมูลไม่สำเร็จ"),N("กู้คืนข้อมูลไม่สำเร็จ: "+he(ie),"error")}finally{F.disabled=!1,F.textContent="♻️ กู้คืนจากไฟล์สำรอง"}}})),document.querySelectorAll(".cfg-choice").forEach(V=>{V.addEventListener("click",()=>{var oe;const ue=V.dataset.choiceKey,ie=document.getElementById(`cfg-${ue}`);ie&&(ie.value=V.dataset.choiceValue),(oe=V.parentElement)==null||oe.querySelectorAll(".cfg-choice").forEach(G=>{const K=G===V;G.classList.toggle("border-indigo-500",K),G.classList.toggle("bg-indigo-50",K),G.classList.toggle("text-indigo-700",K),G.classList.toggle("border-gray-200",!K),G.classList.toggle("bg-white",!K),G.classList.toggle("text-gray-500",!K)})})}),document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(V=>{V.addEventListener("input",()=>{const ue=document.getElementById(`${V.id}-txt`);ue&&(ue.textContent=V.value)})});const R=document.getElementById("cfg-subjectVisuals"),Y=()=>{document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"]').forEach(V=>{var K,W,re,Q,ee;const ue=(K=V.dataset.subjectVisualOriginal)==null?void 0:K.trim(),ie=((W=V.querySelector(".subject-visual-key"))==null?void 0:W.value.trim())||((re=V.dataset.subjectVisualOriginal)==null?void 0:re.trim()),oe=(Q=V.querySelector(".subject-visual-value"))==null?void 0:Q.value.trim(),G=(ee=V.dataset.imageUrl)==null?void 0:ee.trim();ue&&ue!==ie&&delete l[ue],ie&&(oe?l[ie]={type:"emoji",value:oe.slice(0,8)}:G?l[ie]={type:"image",value:G}:delete l[ie])}),R&&(R.value=JSON.stringify(l))},J=V=>{var ue,ie;V.querySelectorAll(".subject-visual-key, .subject-visual-value").forEach(oe=>{oe.addEventListener("input",()=>{Y();const G=V.querySelector(".subject-visual-preview");G&&oe.classList.contains("subject-visual-value")&&oe.value.trim()&&(G.textContent=oe.value.trim())})}),(ue=V.querySelector(".subject-visual-remove"))==null||ue.addEventListener("click",()=>{var G;const oe=(G=V.querySelector(".subject-visual-key"))==null?void 0:G.value.trim();oe&&delete l[oe],V.remove(),Y()}),(ie=V.querySelector(".subject-visual-upload"))==null||ie.addEventListener("change",async oe=>{var re,Q,ee;const G=(re=oe.target.files)==null?void 0:re[0];if(!G)return;if(G.type!=="image/png"){N("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),oe.target.value="";return}const K=((Q=V.querySelector(".subject-visual-key"))==null?void 0:Q.value.trim())||((ee=V.dataset.subjectVisualOriginal)==null?void 0:ee.trim());if(!K){N("กรุณาระบุคีย์ก่อนอัปโหลด เช่น code:ค33102","warning"),oe.target.value="";return}const W=K.replace(/[^a-zA-Z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,80)||`icon-${Date.now()}`;oe.target.disabled=!0;try{const de=await xs(`subject-visuals/${W}`,G);V.dataset.imageUrl=de;const ge=V.querySelector(".subject-visual-value");ge&&(ge.value="");const ye=V.querySelector(".subject-visual-preview");ye&&(ye.innerHTML=`<img src="${ae(de)}" alt="" class="w-full h-full object-contain" />`),Y(),N("อัปโหลดไอคอนรายวิชาสำเร็จ · กดบันทึกเพื่อใช้งาน","success")}catch(de){N("อัปโหลดไอคอนไม่สำเร็จ: "+he(de),"error")}finally{oe.target.disabled=!1,oe.target.value=""}})};document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"]').forEach(J),(je=document.querySelector("[data-subject-visual-add]"))==null||je.addEventListener("click",()=>{var ie;const V=document.querySelector("[data-subject-visual-custom-list]");if(!V)return;const ue=document.createElement("div");ue.setAttribute("data-subject-visual-row","true"),ue.className="rounded-2xl border border-gray-200 bg-gray-50/70 p-3",ue.innerHTML=`<div class="flex flex-col sm:flex-row sm:items-center gap-3">
          <div class="subject-visual-preview flex-shrink-0 w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-4xl overflow-hidden shadow-sm">✨</div>
          <div class="min-w-0 flex-1 space-y-1.5">
            <input type="text" class="subject-visual-key input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="เช่น code:ค33102 หรือ dept:MATH" />
            <input type="text" class="subject-visual-value input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" maxlength="8" placeholder="ใส่อิโมจิ เช่น 🇹🇭 หรือ 📘" />
          </div>
          <label class="cursor-pointer inline-flex flex-shrink-0 items-center justify-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50 transition">📁 PNG<input type="file" accept="image/png" class="hidden subject-visual-upload" /></label>
          <button type="button" class="subject-visual-remove flex-shrink-0 px-2 py-2 rounded-xl text-xs text-red-500 hover:bg-red-50">ลบ</button>
        </div>`,V.appendChild(ue),J(ue),(ie=ue.querySelector(".subject-visual-key"))==null||ie.focus()});const H=()=>{const ue=[...document.querySelectorAll("#feat-editor .feat-row")].map(oe=>{var re,Q;const G=((re=oe.querySelector(".feat-icon"))==null?void 0:re.value.trim())||"✨",K=((Q=oe.querySelector(".feat-text"))==null?void 0:Q.value.trim())||"",W=oe.dataset.minTier||"1";return K?`${G}|${K}|${W}`:null}).filter(Boolean).join(`
`),ie=document.getElementById("cfg-donationSpecialFeatures");ie&&(ie.value=ue)},U=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],X=V=>{var ue,ie,oe;V.querySelectorAll(".feat-tier-btn").forEach(G=>{G.addEventListener("click",()=>{const K=parseInt(G.dataset.n);V.dataset.minTier=String(K),V.querySelectorAll(".feat-tier-btn").forEach(W=>{const re=parseInt(W.dataset.n);W.style.cssText=re===K?`border:2px solid ${U[re-1]};color:${U[re-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),H()})}),(ue=V.querySelector(".feat-icon"))==null||ue.addEventListener("input",H),(ie=V.querySelector(".feat-text"))==null||ie.addEventListener("input",H),(oe=V.querySelector(".feat-del"))==null||oe.addEventListener("click",()=>{V.remove(),H()})};document.querySelectorAll("#feat-editor .feat-row").forEach(X),(He=document.getElementById("feat-add"))==null||He.addEventListener("click",()=>{var oe;const V=document.getElementById("feat-editor");if(!V)return;const ue=V.children.length,ie=document.createElement("div");ie.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",ie.dataset.idx=ue,ie.dataset.minTier="1",ie.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(G=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${G===1?`border:2px solid ${U[0]};color:${U[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${G}" title="ระดับ ${G}">${G}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,V.appendChild(ie),X(ie),(oe=ie.querySelector(".feat-text"))==null||oe.focus()}),document.querySelectorAll(".pkg-stab").forEach(V=>{V.addEventListener("click",()=>{var ie;const ue=V.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(oe=>{oe.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${oe.dataset.pstab===ue?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(oe=>oe.classList.add("hidden")),(ie=document.getElementById(`pkg-panel-${ue}`))==null||ie.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(V=>{V.addEventListener("change",async ue=>{const ie=ue.target.files[0];if(!ie)return;if(ie.type!=="image/png"){N("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),V.value="";return}const oe=V.dataset.skey,G=V.dataset.n;V.disabled=!0;try{const K=await xs(oe,ie),W=document.getElementById(`cfg-${oe}`);W&&(W.value=K),await Ee(oe,K);const re=document.getElementById(`sticker-prev-${G}`);if(re){const Q=document.createElement("img");Q.src=K,Q.className="w-full h-full object-contain",re.replaceWith(Q),Q.id=`sticker-prev-${G}`}N(`อัปโหลดสติกเกอร์ ${G} สำเร็จ ✅`,"success")}catch(K){N("อัปโหลดไม่สำเร็จ: "+he(K),"error")}finally{V.disabled=!1}})});const Z=V=>{const ue=String(V.donationStickerTiers??"").trim(),ie=parseInt(V.donationMinAmount??99)||99,oe=parseInt(V.donationAmountStep??50)||50;return(ue?ue.split(`
`).filter(Boolean).map(W=>{const[re,Q,ee,de,ge]=W.split("|").map(ye=>ye.trim());return{amount:parseInt(re)||0,sticker:Q||"🏅",title:ee||"",note:de||"",color:ge||""}}).filter(W=>W.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([W,re,Q,ee,de])=>({amount:W,sticker:re,title:Q,note:ee,color:de}))).sort((W,re)=>W.amount-re.amount).map((W,re)=>{const Q=(V[`donationStickerImg${re+1}`]??"").trim();return Q&&/^https?:\/\//.test(Q)?{...W,sticker:Q}:W})},te=V=>{const ue=String(V.donationSpecialFeatures??"").trim(),ie=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return ue?ue.split(`
`).filter(Boolean).map(oe=>{const G=oe.split("|").map(K=>K.trim());return{icon:G[0]||"✨",text:G[1]||G[0]||oe,minTier:parseInt(G[2])||1}}).filter(oe=>oe.text):ie.map(([oe,G,K])=>({icon:oe,text:G,minTier:K}))},se=(V,ue,ie,oe=4)=>{var ge;(ge=document.getElementById("tier-preview-modal"))==null||ge.remove();const G=V.color||"#f59e0b",K=parseInt(G.slice(1,3),16),W=parseInt(G.slice(3,5),16),re=parseInt(G.slice(5,7),16),Q=String(V.sticker??""),ee=/^https?:\/\//.test(Q)?`<img src="${Q}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${Q}</div>`,de=document.createElement("div");de.id="tier-preview-modal",de.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",de.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${K},${W},${re},0.85),rgba(${K},${W},${re},1))">
              ${ee}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${V.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${V.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${ie}
              </div>
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษที่คุณครูได้รับ</p>
                <div class="space-y-1.5">
                  ${ue.map(ye=>oe>=(ye.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${ye.icon}</span><span>${ye.text}</span></div>`:`<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${ye.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${ye.minTier}+</span></div>`).join("")}
                </div>
              </div>
              ${V.note?`<p class="text-xs text-center text-gray-400 italic">"${V.note}"</p>`:""}
              <p class="text-[10px] text-gray-400 text-center leading-relaxed">
                ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
                คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
              </p>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <p class="text-[10px] text-center text-amber-500 mb-2 font-semibold">🔧 โหมดตัวอย่าง (Admin)</p>
              <button class="w-full py-2.5 rounded-2xl text-white font-bold text-sm"
                style="background:rgba(${K},${W},${re},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(de),de.addEventListener("click",ye=>{ye.target===de&&de.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(V=>{V.addEventListener("click",()=>{const ue=parseInt(V.dataset.tier),ie={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(re=>{const Q=re.id.replace(/^cfg-/,"");ie[Q]=re.value??re.dataset.on});const oe=Z(ie),G=te(ie),K=oe[ue-1]??oe[0];if(!K){N("ยังไม่มีข้อมูล tier","warning");return}const W=(ie.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;se(K,G,W,ue)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(V=>{V.addEventListener("click",async()=>{const ue=V.dataset.skey,ie=V.dataset.n;await Ee(ue,"").catch(()=>{});const oe=document.getElementById(`cfg-${ue}`);oe&&(oe.value="");const G=document.getElementById(`sticker-prev-${ie}`);G&&(G.outerHTML=`<span id="sticker-prev-${ie}" class="text-2xl text-gray-300">🏅</span>`),V.remove(),N("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(V=>{V.addEventListener("click",()=>{const ue=V.dataset.stab;document.querySelectorAll(".school-stab").forEach(ie=>{ie.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${ie.dataset.stab===ue?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",ue!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",ue!=="porwor")})});const pe=document.getElementById("btn-sync-students-now"),we=document.getElementById("btn-download-student-sync-template");we&&we.addEventListener("click",()=>{const ue="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(K=>K.map(W=>`"${String(W).replace(/"/g,'""')}"`).join(",")).join(`
`),ie=new Blob([ue],{type:"text/csv;charset=utf-8"}),oe=URL.createObjectURL(ie),G=document.createElement("a");G.href=oe,G.download="pp5-students-sync-template.csv",document.body.appendChild(G),G.click(),G.remove(),URL.revokeObjectURL(oe),N("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const me=document.getElementById("btn-start-new-semester"),ce=document.getElementById("start-new-semester-target");if(me){const V=parseInt(e.semester??1),ue=parseInt(e.academicYear??new Date().getFullYear()+543),ie=V===1?2:1,oe=V===1?ue:ue+1;ce&&(ce.textContent=`ตอนนี้: ภาคเรียนที่ ${V}/${ue}  →  จะขึ้นเป็น: ภาคเรียนที่ ${ie}/${oe}`),me.addEventListener("click",async()=>{var W,re,Q;const G=((W=document.getElementById("start-new-semester-start"))==null?void 0:W.value)??"",K=((re=document.getElementById("start-new-semester-end"))==null?void 0:re.value)??"";if(!G||!K||K<G){N("กรุณาระบุวันเปิด-ปิดภาคเรียนใหม่ให้ถูกต้อง","warning");return}me.disabled=!0,me.textContent="⏳ กำลังตรวจสอบไฟล์สำรอง...";try{const ee=await nd(ue,V);if(!ee){N("กรุณาสร้างไฟล์สำรองที่ตรวจสอบแล้วของภาคเรียนปัจจุบันก่อน","warning"),(Q=document.querySelector('.cfg-tab[data-tab="term-data"]'))==null||Q.click(),me.disabled=!1,me.textContent="🔄 ขึ้นภาคเรียนใหม่";return}me.textContent="⏳ กำลังดำเนินการ...";const de=await go(oe,ie,G,K);if(!await Zd({year:oe,semester:ie,start:G,end:K,preview:de})){me.disabled=!1,me.textContent="🔄 ขึ้นภาคเรียนใหม่";return}const ye=Xd(),ve=Number((de==null?void 0:de.attendances_to_clear)??0),xe=Number((de==null?void 0:de.prayer_records_to_clear)??0),_e=ve+xe;let fe=0;const Le=async(Te,qe,lt)=>{let Je=!0,gt=0;for(;Je;){ye.update(`กำลังล้าง${qe}: ${fe.toLocaleString()} / ${_e.toLocaleString()} รายการ`,_e?fe*100/_e:90);const Ze=await bo(Te,ee,5e3),bt=Number((Ze==null?void 0:Ze.deleted_rows)??0);if(fe+=bt,Je=!!(Ze!=null&&Ze.has_more),bt===0&&Je){if(gt+=1,gt>=3)throw new Error(`พบข้อมูล${qe}ที่ยังล้างไม่สำเร็จ กรุณาลองดำเนินการต่ออีกครั้ง`);await new Promise(Ht=>setTimeout(Ht,500*gt))}else gt=0;const Ae=lt===0||!Je,Qe=_e?Math.min(90,fe*90/_e):90;ye.update(Ae?`ล้าง${qe}แล้ว ${fe.toLocaleString()} / ${_e.toLocaleString()} รายการ`:`กำลังล้าง${qe}: ${fe.toLocaleString()} / ${_e.toLocaleString()} รายการ`,Qe)}};try{await Le("attendances","ข้อมูลเข้าเรียน",ve),await Le("prayer_records","คะแนนละหมาด",xe),ye.update("กำลังบันทึกภาคเรียนใหม่และตั้งค่าสิทธิ์...",95),await yo(oe,ie,G,K,ee,!0),ye.update("ขึ้นภาคเรียนใหม่สำเร็จ",100)}finally{ye.close()}e.semester=String(ie),e.academicYear=String(oe),e.semester_start=G,e.semester_end=K,e.unlimitedTeacherClassCreation="true",N(`ขึ้นภาคเรียนที่ ${ie}/${oe} สำเร็จ ✅ สำรองข้อมูลแล้ว ล้างข้อมูลเข้าเรียน/ละหมาด และเปิดให้ครูสร้างห้องได้ไม่จำกัด`,"success"),Qa()}catch(ee){const de=(ee==null?void 0:ee.code)==="57014"?"คำสั่งใช้เวลานานเกินกำหนด ข้อมูลที่ล้างสำเร็จแล้วยังอยู่ในไฟล์สำรอง กดขึ้นภาคเรียนใหม่อีกครั้งเพื่อทำต่อจากรายการที่เหลือ":he(ee);N("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+de,"error"),me.disabled=!1,me.textContent="🔄 ขึ้นภาคเรียนใหม่"}})}const $e=V=>{const ue=document.getElementById("student-sync-log-section"),ie=document.getElementById("student-sync-log-content");if(!ue||!ie)return;const oe=new Date(V.synced_at),G=oe.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),K=oe.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),W=V.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",re=(V.new_students||[]).map(ee=>`<span class="text-green-700">${ee.full_name} (${ee.student_code})</span>`).join(", ")||"—",Q=(V.deactivated_students||[]).map(ee=>`<span class="text-red-500">${ee.full_name} (${ee.student_code})</span>`).join(", ")||"—";ie.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${G} ${K}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${W}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${V.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${V.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${V.new_count} คน:</span> ${re}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${V.deactivated_count} คน:</span> ${Q}
          </div>`,ue.classList.remove("hidden")},ke=async()=>{try{const{data:V}=await le.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();V&&$e(V)}catch{}};ke(),pe&&pe.addEventListener("click",async()=>{var G,K,W,re,Q,ee,de,ge,ye;const V=((K=(G=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:G.value)==null?void 0:K.trim())||"",ue=((re=(W=document.getElementById("cfg-studentSyncTabName"))==null?void 0:W.value)==null?void 0:re.trim())||"",ie=((ee=(Q=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:Q.value)==null?void 0:ee.trim())||"1",oe=document.getElementById("student-sync-status");oe&&(oe.textContent="กำลังตรวจสอบแหล่งข้อมูล ยังไม่บันทึกรายชื่อนักเรียน"),pe.disabled=!0,pe.textContent="กำลังตรวจสอบแหล่งข้อมูล...";try{if(!/^[a-zA-Z0-9_-]{20,}$/.test(V)&&!/^https:\/\/docs\.google\.com\/spreadsheets\/d\/[a-zA-Z0-9_-]{20,}/.test(V))throw new Error("กรุณาระบุ Google Sheet ID หรือ URL ที่ถูกต้อง");if(!Number.isInteger(Number(ie))||Number(ie)<1)throw new Error("แถวหัวตารางต้องเป็นจำนวนเต็มตั้งแต่ 1");const ve={sourceSheetId:V,tabName:ue,headerRow:ie},xe=await Ko(ve);if(oe&&(oe.textContent=`ตรวจสอบสำเร็จ: ใช้ได้ ${xe.valid} คน / รหัสซ้ำ ${xe.duplicateCount} แถว`),!await Qd(xe)){oe&&(oe.textContent="ยกเลิกแล้ว ยังไม่บันทึกรายชื่อนักเรียน");return}await Promise.all([Ee("studentSyncSheetId",V),Ee("studentSyncTabName",ue),Ee("studentSyncHeaderRow",ie)]),pe.textContent="กำลังบันทึกข้อมูลนักเรียน...";const _e=await Jo({...ve,expectedFingerprint:xe.fingerprint}),fe=`ซิงก์สำเร็จ: อ่าน ${_e.read??0} แถว / บันทึก ${_e.written??0} คน / ใหม่ ${_e.newCount??0} คน ✅`;oe&&(oe.textContent=fe+((de=_e.warnings)!=null&&de.length?" — "+_e.warnings.join(" / "):"")),N((ge=_e.warnings)!=null&&ge.length?fe+" — "+_e.warnings.join(" / "):fe,(ye=_e.warnings)!=null&&ye.length?"warning":"success"),ke()}catch(ve){const xe="ซิงก์นักเรียนไม่สำเร็จ: "+he(ve)+(ve.mayHaveWritten?" — งานอาจบันทึกบางส่วนแล้ว กรุณาตรวจประวัติการซิงก์ก่อนลองใหม่":"");oe&&(oe.textContent=xe),N(xe,"error")}finally{pe.disabled=!1,pe.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(V=>{V.addEventListener("change",async ue=>{var K,W,re,Q;const ie=ue.target.files[0];if(!ie)return;const oe=V.dataset.key,G=document.getElementById(`cfg-${oe}`);V.disabled=!0;try{const ee=await ll(oe,ie),de=/(?:LogoUrl|LogoBwUrl)$/.test(oe)?`${ee}${ee.includes("?")?"&":"?"}v=${Date.now()}`:ee;G&&(G.value=de),await Ee(oe,de),N("อัปโหลดสำเร็จ ✅","success");const ge=(K=V.closest(".flex"))==null?void 0:K.querySelector("img"),ye=(W=V.closest(".flex"))==null?void 0:W.querySelector("div.w-14");ge?ge.src=de:ye&&(ye.outerHTML=`<img src="${de}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`),(Q=(re=V.closest(".flex"))==null?void 0:re.querySelector(".cfg-upload-clear"))==null||Q.classList.remove("hidden")}catch(ee){N("อัปโหลดไม่สำเร็จ: "+he(ee),"error")}finally{V.disabled=!1}})}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-clear").forEach(V=>{V.addEventListener("click",async()=>{const ue=V.dataset.key;if(!(!ue||!confirm("ต้องการล้างโลโก้นี้ออกจากการตั้งค่าหรือไม่?"))){V.disabled=!0;try{await Ee(ue,"");const ie=V.closest(".flex"),oe=document.getElementById(`cfg-${ue}`);oe&&(oe.value="");const G=ie==null?void 0:ie.querySelector("img");G&&(G.outerHTML='<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'),V.classList.add("hidden"),N("ล้างโลโก้แล้ว ✅","success")}catch(ie){N("ล้างโลโก้ไม่สำเร็จ: "+he(ie),"error")}finally{V.disabled=!1}}})})};document.querySelectorAll(".cfg-tab").forEach(v=>v.addEventListener("click",()=>y(v.dataset.tab))),y(w),window._syncPositionToField=async(v,f,T)=>{const c=T.textContent;T.disabled=!0,T.textContent="กำลังดึง...";try{const u=n.find(h=>h.position===v);if(!u){N(`ยังไม่มีครูที่กำหนดบทบาท "${v}"`,"warning");return}const B=document.getElementById(`cfg-${f}`);B&&(B.value=u.full_name,B.dispatchEvent(new Event("input")),N(`ดึงชื่อ "${u.full_name}" สำเร็จ`,"success"))}catch{N("ดึงข้อมูลไม่สำเร็จ","error")}finally{T.disabled=!1,T.textContent=c}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const v=document.getElementById("cfg-save-btn");document.getElementById("cfg-subjectVisuals")&&document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"] .subject-visual-key, #cfg-panel-inner [data-subject-visual-row="true"] .subject-visual-value').forEach(T=>T.dispatchEvent(new Event("input")));const f=document.querySelectorAll("#cfg-panel-inner [data-key]:not(.cfg-upload-file):not(.cfg-upload-clear)");v.disabled=!0,v.textContent="กำลังบันทึก...";try{await Promise.all([...f].map(T=>{const c=T.tagName==="BUTTON"?T.dataset.on??"false":T.value;return Ee(T.dataset.key,c)})),await Qs("admin",{},!0),N("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch(T){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",T),N("บันทึกไม่สำเร็จ: "+((T==null?void 0:T.message)||"ไม่ทราบสาเหตุ"),"error")}finally{v.disabled=!1,v.textContent="บันทึก"}})}catch{N("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function Tr(){Ie("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",Se(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{pa(await ot())}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}function pa(e){const s=document.getElementById("dept-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
    </table>`}}async function ma(){Ie("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",Se(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);try{const e=await In();window._periodsCache=Object.fromEntries(e.map(t=>[t.id,t]));const s=document.getElementById("period-list");if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
    </table>`}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}function gi(e){const s=[];let t=[],n="",l=!1;for(let r=0;r<String(e??"").length;r++){const d=e[r],i=e[r+1];l?d==='"'&&i==='"'?(n+='"',r++):d==='"'?l=!1:n+=d:d==='"'?l=!0:d===","?(t.push(n),n=""):d===`
`?(t.push(n),s.push(t),t=[],n=""):d!=="\r"&&(n+=d)}if((n||t.length)&&(t.push(n),s.push(t)),s.length<2)return[];const o=s[0].map(r=>r.trim()),x=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return s.slice(1).map(r=>{const d=Object.fromEntries(o.map((a,p)=>[a,r[p]??""])),i={};return x.forEach(a=>{const p=String(d[a]??"").trim();if(a==="item_no"){const w=Number(p);i[a]=p&&Number.isFinite(w)?w:null}else i[a]=p||null}),i}).filter(r=>r.subject_name||r.subject_code||r.standard_text||r.indicator_text||r.learning_outcome_text)}function Ve(e,s,t="",n="text"){const l=n==="textarea"?`<textarea name="${e}" rows="3" dir="auto" class="${Ge} w-full min-h-[92px] resize-y">${ae(t)}</textarea>`:`<input name="${e}" value="${ae(t)}" dir="auto" class="${Ge} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${s}</span>
    ${l}
  </label>`}async function _t(){var e;Ie("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",Se(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let s=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[t,n]=await Promise.all([Tn(s),ot().catch(()=>[])]),l=ze([...n.map(a=>a.dept_name),...n.map(a=>a.dept_code),...t.map(a=>a.dept)]),o=ze(t.map(a=>a.grade_level)),x=Object.fromEntries(t.map(a=>[a.id,a]));window._curriculumRows=x;const r=(a={})=>{const p=!!a.id,w=document.createElement("div");w.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",w.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${p?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${Ve("subject_name","ชื่อรายวิชา",a.subject_name)}
            ${Ve("subject_code","รหัสวิชา",a.subject_code)}
            ${Ve("dept","กลุ่มสาระ/กลุ่มวิชา",a.dept)}
            ${Ve("grade_level","ระดับชั้น",a.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${Ve("strand","สาระ",a.strand)}
            ${Ve("topic","เรื่อง/สาระการเรียนรู้",a.topic)}
            ${Ve("item_no","ลำดับข้อ",a.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${Ve("standard_code","รหัสมาตรฐาน",a.standard_code)}
            ${Ve("indicator_code","รหัสตัวชี้วัด",a.indicator_code)}
          </div>
          ${Ve("standard_text","มาตรฐานการเรียนรู้",a.standard_text,"textarea")}
          ${Ve("indicator_text","ตัวชี้วัด",a.indicator_text,"textarea")}
          ${Ve("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",a.learning_outcome_text,"textarea")}
          ${Ve("source_note","แหล่งที่มา/หมายเหตุ",a.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(w),w.querySelectorAll("[data-close]").forEach(y=>y.addEventListener("click",()=>w.remove())),w.querySelector("#curriculum-form").addEventListener("submit",async y=>{y.preventDefault();const v=new FormData(y.currentTarget),f={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(u=>{f[u]=String(v.get(u)??"").trim()||null});const T=String(v.get("item_no")??"").trim(),c=Number(T);f.item_no=T&&Number.isFinite(c)?c:null;try{p?await jn(a.id,f):await Bn(f),N("บันทึกข้อมูลหลักสูตรแล้ว","success"),w.remove(),await _t()}catch(u){N(u.message||"บันทึกไม่สำเร็จ","error")}})},d=()=>{const a=document.createElement("div"),p="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";a.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
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
            <code class="block whitespace-pre-wrap break-all text-xs">${p}</code>
          </div>
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${Ge} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${Ge} w-full font-mono text-xs" placeholder="${p}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(a),a.querySelectorAll("[data-close]").forEach(w=>w.addEventListener("click",()=>a.remove())),a.querySelector("#curriculum-csv-file").addEventListener("change",w=>{var f;const y=(f=w.target.files)==null?void 0:f[0];if(!y)return;const v=new FileReader;v.onload=()=>{a.querySelector("#curriculum-csv-text").value=v.result||""},v.readAsText(y)}),a.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const w=gi(a.querySelector("#curriculum-csv-text").value);if(!w.length)return N("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const y=await qn(w);N(`นำเข้าแล้ว ${y} รายการ`,"success"),a.remove(),await _t()}catch(y){N(y.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>r(),window._curriculumEdit=a=>{var p;return r(((p=window._curriculumRows)==null?void 0:p[a])||{})},window._curriculumDelete=async a=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await An(a),N("ลบข้อมูลแล้ว","success"),await _t()}catch(p){N(p.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=d,Se(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
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
        <input id="cur-filter-q" value="${ae(s.q)}" class="${Ge}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${ae(s.subjectCode)}" class="${Ge}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${Be}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${l.map(a=>`<option value="${ae(a)}" ${a===s.dept?"selected":""}>${ae(a)}</option>`).join("")}
        </select>
        <select id="cur-filter-grade" class="${Be}">
          <option value="">ทุกระดับชั้น</option>
          ${o.map(a=>`<option value="${ae(a)}" ${a===s.gradeLevel?"selected":""}>${ae(a)}</option>`).join("")}
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
                  <div class="font-semibold text-gray-900">${ae(a.subject_name||"ไม่ระบุวิชา")}</div>
                  <div class="text-indigo-500 font-mono">${ae(a.subject_code||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${ae(a.dept||"—")} · ${ae(a.grade_level||"ทุกชั้น")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${ae(a.topic||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${ae(a.strand||"")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${ae(a.standard_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${ae(a.standard_text||"—")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${ae(a.indicator_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${ae(a.indicator_text||a.learning_outcome_text||"—")}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${We(a.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${We(a.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const i=()=>{var a,p,w,y;s={q:((a=document.getElementById("cur-filter-q"))==null?void 0:a.value)||"",subjectCode:((p=document.getElementById("cur-filter-code"))==null?void 0:p.value)||"",dept:((w=document.getElementById("cur-filter-dept"))==null?void 0:w.value)||"",gradeLevel:((y=document.getElementById("cur-filter-grade"))==null?void 0:y.value)||""},window._curriculumFilters=s,_t()};["cur-filter-q","cur-filter-code"].forEach(a=>{var p;(p=document.getElementById(a))==null||p.addEventListener("keydown",w=>{w.key==="Enter"&&i()})}),["cur-filter-dept","cur-filter-grade"].forEach(a=>{var p;(p=document.getElementById(a))==null||p.addEventListener("change",i)}),(e=document.getElementById("cur-filter-submit"))==null||e.addEventListener("click",i)}catch(s){Se(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${ae(s.message||s)}
    </div>`)}}async function St(){var e;Ie("subjects"),document.getElementById("page-title").textContent="คอร์สและห้องเรียน",Se(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,t,n,l,o]=await Promise.all([ra(),na(),Pe().catch(()=>[]),ot().catch(()=>[]),Ne().catch(()=>({}))]),x=Object.fromEntries(n.map(j=>[j.id,j])),r=Object.fromEntries(l.map(j=>[j.dept_code,j])),d=Object.fromEntries(l.map(j=>[j.dept_name,j])),i=j=>{var b;return{...j,_teacher_name:((b=x[j.teacher_id])==null?void 0:b.full_name)??""}},a=Number(o.academicYear??o.academic_year??new Date().getFullYear()+543),p=Number(o.semester??1),w=j=>Number(j==null?void 0:j.academic_year)===a&&Number(j==null?void 0:j.semester)===p,y=s.filter(w).map(i),v=t.filter(w).map(j=>{var b;return{...j,master_subjects:j.master_subjects?{...j.master_subjects,_teacher_name:((b=x[j.master_subjects.teacher_id])==null?void 0:b.full_name)??""}:j.master_subjects}}),f=ze(y.map(j=>j.dept)),T=ze(y.map(j=>j.skill_group));let c={sheetId:o.subjectSyncSheetId||Go,tabName:o.subjectSyncTabName||va,keyField:o.subjectSyncKeyField||is,columns:(()=>{try{const j=JSON.parse(o.subjectSyncColumns||"null");return Array.isArray(j)&&j.length?j:ha}catch{return ha}})()};Se(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${ae(c.tabName||va)}
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
          <select id="subf-dept" class="${Be}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${f.map(j=>`<option value="${j}">${j}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${Be}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${T.map(j=>`<option value="${j}">${j}</option>`).join("")}
          </select>
          <select id="subf-subg" class="${Be}">
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
    </div>`);let B="course";const h=()=>{const j=document.getElementById("sub-action-btn");j&&(j.innerHTML=B==="course"?"<span>＋</span> เพิ่มคอร์ส":B==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const b=document.getElementById("btn-sync-subjects-central");b&&(b.textContent=`↑ ซิงค์รายวิชา → ${c.tabName||va}`)},I=()=>y.map(j=>{const b=x[j.teacher_id]??{},g=r[j.dept]??d[j.dept]??{},m=b.full_name??"",k=j.subject_name??"",_=j.subject_code??"";return{subject_group:j.subject_group??"",sbJect:`${k}_(${_})_${m}`,subject_name:k,subject_code:_,credit:j.credit??"",year:o.academicYear??"",semester:o.semester??"",grade_level:j.grade_level??"",teacher_name:m,teacher_code:b.teacher_code??"",dept_name:g.dept_name??j.dept??"",dept_code:g.dept_code??j.dept??""}}),E=()=>{var b;const j=new Set(c.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${ae(c.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${ae(c.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${cs.map(g=>`
                <option value="${ae(g.key)}" ${c.keyField===g.key?"selected":""}>
                  ${ae(g.key)} - ${ae(g.label)}
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
            ${cs.map(g=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${ae(g.key)}" ${j.has(g.key)?"checked":""} />
                <span>
                  <span class="font-semibold">${ae(g.key)}</span>
                  <span class="block text-xs text-gray-400">${ae(g.label)}</span>
                </span>
              </label>
            `).join("")}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`,(b=document.getElementById("subject-sync-select-defaults"))==null||b.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach(g=>{g.checked=ha.includes(g.value)})})},A=()=>{var k;if((k=document.getElementById("subject-filter-bar"))==null||k.classList.toggle("hidden",B==="sync"),h(),B==="sync"){E();return}const j=document.getElementById("subf-q").value.toLowerCase(),b=document.getElementById("subf-dept").value,g=document.getElementById("subf-skill").value,m=document.getElementById("subf-subg").value;if(B==="course"){const _=y.filter($=>(!j||[$.subject_code,$.subject_name,$.dept].some(S=>(S??"").toLowerCase().includes(j)))&&(!b||$.dept===b)&&(!g||$.skill_group===g)&&(!m||$.subject_group===m));document.getElementById("subf-count").textContent=_.length,Za(_)}else{const _=v.filter($=>{var S,q;return(!j||($.class_name??"").toLowerCase().includes(j)||(((S=$.master_subjects)==null?void 0:S.subject_name)??"").toLowerCase().includes(j))&&(!b||((q=$.master_subjects)==null?void 0:q.dept)===b)});document.getElementById("subf-count").textContent=_.length,bi(_)}};window._subAction=async()=>{var j,b,g;if(B==="course")al(null,async(m,k=[])=>{await Mn(m,k),await St()});else if(B==="class")yi();else{const m=((j=document.getElementById("subject-sync-sheet-id"))==null?void 0:j.value.trim())??"",k=((b=document.getElementById("subject-sync-tab-name"))==null?void 0:b.value.trim())??"",_=((g=document.getElementById("subject-sync-key-field"))==null?void 0:g.value)??is,$=[...document.querySelectorAll(".subject-sync-col:checked")].map(L=>L.value),S=$.includes(_)?$:[_,...$];if(!m||!k){N("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!S.length){N("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const q=document.getElementById("sub-action-btn"),D=q==null?void 0:q.innerHTML;q&&(q.disabled=!0,q.textContent="กำลังบันทึก...");try{await Promise.all([Ee("subjectSyncSheetId",m),Ee("subjectSyncTabName",k),Ee("subjectSyncKeyField",_),Ee("subjectSyncColumns",JSON.stringify(S))]),c={sheetId:m,tabName:k,keyField:_,columns:S},h(),N("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(L){N("บันทึกตั้งค่าไม่สำเร็จ: "+he(L),"error")}finally{q&&(q.disabled=!1,q.innerHTML=D),h()}}},window._adminRegisterClass=async j=>{const b=y.find(g=>g.id===j);b?el(null,b):N("ไม่พบคอร์ส","error")},window._adminEditClass=j=>{var g;const b=(g=window._adminClassCache)==null?void 0:g[j];b?Ys(null,b):N("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(j,b)=>{window._goBack=()=>St(),tl(null,j,b)},window._adminDeleteClass=async(j,b)=>{if(confirm(`ยืนยันลบ "${b}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await Ds(j),N(`ลบ "${b}" แล้ว`,"success"),A()}catch(g){N("ลบไม่สำเร็จ: "+he(g),"error")}},(e=document.getElementById("btn-sync-subjects-central"))==null||e.addEventListener("click",async j=>{const b=j.currentTarget,g=b.textContent;try{b.disabled=!0,b.textContent="กำลังซิงค์...";const m=await Wo(I(),{sheetId:c.sheetId,tabName:c.tabName,headers:c.columns,keyField:c.keyField});N(`ส่งคำสั่งซิงค์รายวิชา ${m} รายการไปแท็บ ${c.tabName} แล้ว`,"success")}catch(m){N("ซิงค์รายวิชาไม่สำเร็จ: "+he(m),"error")}finally{b.disabled=!1,b.textContent=g}}),window._switchSubjectTab=j=>{B=j,document.getElementById("stab-course").className=j==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=j==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=j==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",A()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(j=>{var b,g;(b=document.getElementById(j))==null||b.addEventListener("input",A),(g=document.getElementById(j))==null||g.addEventListener("change",A)}),A()}catch{N("โหลดรายวิชาไม่สำเร็จ","error")}}function Za(e){const s=document.getElementById("subject-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
          ${t.teacher_id?`<button onclick="window._adminViewSchedule(${t.teacher_id},'${We(t._teacher_name||t.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
          <button onclick="openSubjectModal(${t.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${t.id},'${We(t.subject_name)}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join("")}
    </tbody>
  </table></div>`}}function bi(e){const s=document.getElementById("subject-table-wrap");if(s){if(window._adminClassCache=Object.fromEntries(e.map(t=>[t.id,t])),!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
      ${e.map(t=>{var n,l,o,x;return`
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
          ${(x=t.master_subjects)!=null&&x.teacher_id?`<button onclick="window._adminViewSchedule(${t.master_subjects.teacher_id},'${We(t.master_subjects._teacher_name||t.master_subjects.subject_name||t.class_name)}')"
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
  </table></div>`}}async function jr(){var B,h;Ie("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),n=await oa().catch(()=>[]),l=new Map;for(const I of n){const E=parseInt(I.academic_year),A=parseInt(I.semester);Number.isInteger(E)&&Number.isInteger(A)&&l.set(`${A}/${E}`,{...I,academic_year:E,semester:A})}l.has(`${t}/${s}`)||l.set(`${t}/${s}`,{academic_year:s,semester:t,is_current:!0,status:"current"});const o=[...l.values()].sort((I,E)=>Number(E.academic_year)-Number(I.academic_year)||Number(E.semester)-Number(I.semester)),x=o.find(I=>I.academic_year===s&&I.semester===t)??o.find(I=>I.is_current)??o[0];let r=x.academic_year,d=x.semester;Se(`<div class="max-w-5xl mx-auto animate-fade">
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
      ${o.map(I=>`<button type="button" data-hr-term="${I.semester}/${I.academic_year}"
        class="hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold transition">ภาคเรียน ${I.semester}/${I.academic_year}${I.is_current?" (ปัจจุบัน)":""}</button>`).join("")}
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
  </div>`);const[i,a,p]=await Promise.all([Pe().catch(()=>[]),Nn().catch(()=>[]),Hs().catch(()=>[])]);let w="สามัญ";const y=()=>{document.querySelectorAll(".hr-term-tab").forEach(E=>{const A=E.dataset.hrTerm===`${d}/${r}`;E.className=A?"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white transition":"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"});const I=document.getElementById("hr-term-label");I&&(I.textContent=`ภาคเรียน ${d}/${r}`)},v=I=>Object.fromEntries(I.filter(E=>E.category===w).map(E=>[E.main_room,E])),f=()=>{document.querySelectorAll(".hr-tab").forEach(I=>{const E=I.dataset.hrTab===w;I.className=E?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},T=async()=>{y(),f();const I=await Ft(r,d),E=v(I),A=w==="สามัญ"?a:p,j=document.getElementById("homeroom-table-wrap");if(!A.length){j.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${w}</p></div>`;return}j.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${A.map(b=>{var m,k;const g=E[b];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${b}</td>
          <td class="px-5 py-3 text-gray-600">
            ${g?`<span class="font-medium text-gray-800">${((m=g.teachers)==null?void 0:m.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${(k=g.teachers)!=null&&k.teacher_code?`(${g.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${We(b)}','${w}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${We(b)}','${w}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${g?"เปลี่ยน":"เลือกครู"}</button>
            ${g?`<button onclick="window._deleteHomeroom(${g.id},'${We(b)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await T(),window._deleteHomeroom=async(I,E)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${E}?`))try{await Dn(I),N("ลบแล้ว","success"),await T()}catch{N("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(I,E)=>{var _;(_=document.getElementById("hr-picker"))==null||_.remove();let A=null;const j=document.createElement("div");j.id="hr-picker",j.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",j.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${E} · ห้อง ${I}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${Be}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${Be}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`,document.body.appendChild(j);const b=j.querySelector("#hrp-results"),g=j.querySelector("#hrp-save"),m=$=>{b.innerHTML=$.length?$.slice(0,20).map(S=>`
          <button type="button" data-id="${S.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${S.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${S.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',b.querySelectorAll(".hrp-option").forEach(S=>{S.addEventListener("click",()=>{A=i.find(q=>String(q.id)===S.dataset.id),b.querySelectorAll(".hrp-option").forEach(q=>q.classList.remove("bg-emerald-50","text-emerald-700")),S.classList.add("bg-emerald-50","text-emerald-700"),g.disabled=!1})})},k=()=>{const $=j.querySelector("#hrp-code").value.trim().toLowerCase(),S=j.querySelector("#hrp-name").value.trim().toLowerCase();m(i.filter(q=>(!$||(q.teacher_code??"").toLowerCase().includes($))&&(!S||(q.full_name??"").toLowerCase().includes(S))))};j.querySelector("#hrp-close").addEventListener("click",()=>j.remove()),j.addEventListener("click",$=>{$.target===j&&j.remove()}),j.querySelector("#hrp-code").addEventListener("input",k),j.querySelector("#hrp-name").addEventListener("input",k),g.addEventListener("click",async()=>{if(A){g.disabled=!0,g.textContent="กำลังบันทึก...";try{await zs({teacher_id:A.id,main_room:I,category:E,academic_year:r,semester:d}),N("บันทึกครูที่ปรึกษาสำเร็จ","success"),j.remove(),await T()}catch($){N("บันทึกไม่สำเร็จ: "+he($),"error"),g.disabled=!1,g.textContent="เลือกครูที่ปรึกษา"}}}),m(i)};const c=()=>{const I=[...i].sort((E,A)=>String(E.full_name??"").localeCompare(String(A.full_name??""),"th")).map((E,A)=>`${A+1}. ${E.teacher_code??"ไม่มีรหัส"} | ${E.full_name??"ไม่มีชื่อ"} | ${E.category??"ไม่ระบุประเภท"}`).join(`
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
${I||"ไม่พบรายชื่อครู"}`},u=()=>{var z;(z=document.getElementById("hr-ai-import-modal"))==null||z.remove();const I=document.createElement("div");I.id="hr-ai-import-modal",I.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",I.innerHTML=`
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
              <textarea id="hr-ai-prompt" readonly rows="15" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full ${Be} text-xs leading-5 resize-y bg-gray-50"></textarea>
            </section>

            <section class="rounded-2xl border border-gray-200 p-4">
              <h4 class="font-semibold text-sm text-gray-800">2) วาง JSON ที่ AI สร้าง</h4>
              <p class="text-[11px] text-gray-400 mt-0.5 mb-2">รองรับ JSON ที่ครอบด้วยเครื่องหมาย \`\`\`json ... \`\`\` ด้วย</p>
              <textarea id="hr-ai-json" rows="15" class="w-full ${Be} text-xs leading-5 resize-y font-mono" placeholder="วาง JSON ที่ได้จาก AI ที่นี่"></textarea>
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
      </div>`,document.body.appendChild(I);const E=I.querySelector("#hr-ai-prompt"),A=Js({copyButton:I.querySelector("#hr-ai-copy-prompt")}),j=()=>I.remove();I.querySelector("#hr-ai-close").addEventListener("click",j),I.querySelector("#hr-ai-cancel").addEventListener("click",j),I.addEventListener("click",M=>{M.target===I&&j()}),I.querySelector("#hr-ai-generate-prompt").addEventListener("click",()=>{E.value=c(),A.markGenerated(),I.querySelector("#hr-ai-copy-prompt").textContent="📋 คัดลอก",N("สร้างคำสั่ง AI รายชื่อครูที่ปรึกษาแล้ว","success")}),I.querySelector("#hr-ai-copy-prompt").addEventListener("click",async M=>{if(!A.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(E.value),M.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(M.currentTarget)&&(M.currentTarget.textContent="📋 คัดลอก")},1500)}catch{E.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}});let b=[];const g=I.querySelector("#hr-ai-error"),m=I.querySelector("#hr-ai-preview-wrap"),k=I.querySelector("#hr-ai-preview"),_=I.querySelector("#hr-ai-apply"),$=I.querySelector("#hr-ai-summary"),S=M=>String(M??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim(),q=(M,F)=>{const P=String(F??"").trim().toLowerCase();if(P){const U=i.filter(X=>String(X.teacher_code??"").trim().toLowerCase()===P);if(U.length===1)return{teacher:U[0],status:"exact",score:1};if(U.length>1)return{teacher:U[0],status:"ambiguous",score:1}}const R=kt(M),Y=i.filter(U=>kt(U.full_name)===R);if(Y.length===1)return{teacher:Y[0],status:"exact",score:1};if(Y.length>1)return{teacher:Y[0],status:"ambiguous",score:1};const H=i.map(U=>({teacher:U,score:ti(M,U.full_name)})).sort((U,X)=>X.score-U.score)[0];return H&&H.score>=.72?{...H,status:"suggested"}:{teacher:null,status:"unmatched",score:(H==null?void 0:H.score)??0}},D=(M,F)=>{const P=String(M??"").trim().replace(/^ห้อง\s*/u,""),R=F==="ศาสนา"?p:a,Y=P.replace(/\s+/g,"").toLowerCase();return R.find(J=>String(J).replace(/\s+/g,"").toLowerCase()===Y)??null},L=M=>{if(!M.teacherId||!M.mainRoom)return{label:"ไม่พบข้อมูล ต้องเลือกเอง",cls:"text-red-700 bg-red-50 border-red-100"};const F=M.matchStatus==="exact"||M.teacherReviewed,P=M.roomExact||M.roomReviewed;return F&&P?{label:M.matchStatus==="exact"&&M.roomExact?"ตรงกับฐานข้อมูล":"ตรวจสอบแล้ว",cls:"text-emerald-700 bg-emerald-50 border-emerald-100"}:{label:"โปรดตรวจสอบ",cls:"text-amber-700 bg-amber-50 border-amber-100"}},C=()=>{const M=b.filter(P=>!P.mainRoom||!P.teacherId),F=b.filter(P=>P.matchStatus!=="exact"&&!P.teacherReviewed||!P.roomExact&&!P.roomReviewed);_.disabled=!b.length||M.length>0||F.length>0,b.length?M.length?$.textContent=`ทั้งหมด ${b.length} รายการ · ยังเลือกข้อมูลไม่ครบ ${M.length} รายการ`:F.length?$.textContent=`ทั้งหมด ${b.length} รายการ · กรุณาตรวจสอบอีก ${F.length} รายการ`:$.textContent=`ทั้งหมด ${b.length} รายการ · พร้อมบันทึก`:$.textContent=""},O=()=>{k.innerHTML=b.map((M,F)=>{const P=L(M),R=M.category==="ศาสนา"?p:a,Y=[...i].sort((J,H)=>String(J.full_name??"").localeCompare(String(H.full_name??""),"th"));return`<div class="ai-advisor-row rounded-2xl border border-gray-200 p-3 sm:p-4" data-ai-row="${F}">
          <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <p class="text-sm font-bold text-gray-800">รายการที่ ${F+1}</p>
              <p class="text-xs text-gray-500 mt-1">ชื่อในคำสั่ง: <span class="font-medium text-gray-700">${ae(M.sourceName||"ไม่ระบุ")}</span>${M.sourceCode?` · รหัสในคำสั่ง: ${ae(M.sourceCode)}`:""}</p>
              ${M.suggestedName?`<p class="text-[11px] text-indigo-500 mt-1">AI แนะนำจากรายชื่อระบบ: ${ae(M.suggestedName)}${M.suggestedCode?` (${ae(M.suggestedCode)})`:""}</p>`:""}
              ${M.note?`<p class="text-[11px] text-gray-400 mt-1">หมายเหตุ AI: ${ae(M.note)}</p>`:""}
            </div>
            <span class="ai-row-status text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${P.cls}">${P.label}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <label class="text-xs text-gray-500">ประเภท
              <select data-ai-category="${F}" class="${Be} w-full mt-1">
                <option value="สามัญ" ${M.category==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${M.category==="ศาสนา"?"selected":""}>ศาสนา</option>
              </select>
            </label>
            <label class="text-xs text-gray-500">ห้องเรียน
              <select data-ai-room="${F}" class="${Be} w-full mt-1">
                <option value="">— เลือกห้อง —</option>
                ${R.map(J=>`<option value="${ae(J)}" ${J===M.mainRoom?"selected":""}>${ae(J)}</option>`).join("")}
              </select>
            </label>
            <label class="text-xs text-gray-500">ชื่อครูในระบบ ปพ.5
              <select data-ai-teacher="${F}" class="${Be} w-full mt-1">
                <option value="">— เลือกครู —</option>
                ${Y.map(J=>`<option value="${ae(J.id)}" ${String(J.id)===String(M.teacherId??"")?"selected":""}>${ae(J.full_name)}${J.teacher_code?` (${ae(J.teacher_code)})`:""}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>`}).join(""),k.querySelectorAll("[data-ai-category]").forEach(M=>M.addEventListener("change",F=>{const P=b[Number(F.currentTarget.dataset.aiCategory)];P.category=F.currentTarget.value,P.mainRoom=null,P.roomExact=!1,P.roomReviewed=!0,O(),C()})),k.querySelectorAll("[data-ai-room]").forEach(M=>M.addEventListener("change",F=>{const P=b[Number(F.currentTarget.dataset.aiRoom)];P.mainRoom=F.currentTarget.value||null,P.roomReviewed=!0,O(),C()})),k.querySelectorAll("[data-ai-teacher]").forEach(M=>M.addEventListener("change",F=>{const P=b[Number(F.currentTarget.dataset.aiTeacher)];P.teacherId=F.currentTarget.value?Number(F.currentTarget.value):null,P.teacherReviewed=!0,O(),C()})),C()};I.querySelector("#hr-ai-parse").addEventListener("click",()=>{g.classList.add("hidden");try{const M=JSON.parse(S(I.querySelector("#hr-ai-json").value)),F=Array.isArray(M)?M:M.assignments??M.homeroom_assignments??M.data??M.rows;if(!Array.isArray(F)||!F.length)throw new Error("ไม่พบรายการ assignments ใน JSON");const P=new Set;b=F.map((R,Y)=>{var ke;const J=["สามัญ","ศาสนา"].includes(R.category)?R.category:w,H=R.teacher_name_from_order??R.teacher_name??R.teacher??R.advisor_name??"",U=R.teacher_code_from_order??R.teacher_code??R.code??"",X=R.teacher_name_suggestion??R.matched_teacher_name??"",Z=R.teacher_code_suggestion??R.matched_teacher_code??"",te=R.main_room??R.room??R.class_name??R.classroom??"",se=D(te,J),pe=q(H,U),we=q(X,Z),me=pe.status==="exact"?pe:we.teacher?{...we,status:"suggested"}:pe,ce=`${J}|${se??String(te).trim()}`,$e=P.has(ce);return P.add(ce),{category:J,sourceName:H,sourceCode:U,suggestedName:X,suggestedCode:Z,note:R.note??"",sourcePage:R.source_page??"",mainRoom:se,roomExact:!!se,roomReviewed:!1,teacherId:((ke=me.teacher)==null?void 0:ke.id)??null,teacherReviewed:!1,matchStatus:$e?"ambiguous":me.status,matchScore:me.score}}),m.classList.remove("hidden"),O()}catch(M){g.textContent=`อ่าน JSON ไม่สำเร็จ: ${M.message}`,g.classList.remove("hidden"),m.classList.add("hidden"),b=[],C()}}),_.addEventListener("click",async()=>{if(_.disabled)return;const M=await Ft(r,d).catch(()=>[]),F=b.filter(P=>{const R=M.find(Y=>Y.main_room===P.mainRoom&&Y.category===P.category);return!R||Number(R.teacher_id)!==Number(P.teacherId)}).length;if(confirm(`ยืนยันนำเข้าครูที่ปรึกษา ${b.length} รายการ?

ระบบจะเพิ่มหรือเปลี่ยนรายการที่แตกต่างจำนวน ${F} รายการ ในภาคเรียน ${d}/${r}`)){_.disabled=!0,_.textContent="กำลังบันทึก...";try{const P=await Fn(b.map(R=>({teacher_id:R.teacherId,main_room:R.mainRoom,category:R.category,academic_year:r,semester:d})));N(`นำเข้าครูที่ปรึกษาสำเร็จ ${P.length} รายการ ✅`,"success"),j(),await T()}catch(P){N(`บันทึกไม่สำเร็จ: ${he(P)}`,"error"),_.disabled=!1,_.textContent="✅ ยืนยันนำเข้าและบันทึก"}}})};(B=document.getElementById("hr-ai-import"))==null||B.addEventListener("click",u),document.querySelectorAll(".hr-term-tab").forEach(I=>{I.addEventListener("click",async()=>{const[E,A]=String(I.dataset.hrTerm??"").split("/").map(Number);!Number.isInteger(E)||!Number.isInteger(A)||(d=E,r=A,await T())})}),document.querySelectorAll(".hr-tab").forEach(I=>{I.addEventListener("click",async()=>{w=I.dataset.hrTab,await T()})}),(h=document.getElementById("hr-export-csv"))==null||h.addEventListener("click",async()=>{try{const I=await Ft(r,d),E=v(I),A=w==="สามัญ"?a:p,j=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],b=A.map($=>{var q,D;const S=E[$];return[$,((q=S==null?void 0:S.teachers)==null?void 0:q.full_name)??"",((D=S==null?void 0:S.teachers)==null?void 0:D.phone)??""]}),g="\uFEFF"+[j,...b].map($=>$.map(S=>`"${String(S).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([g],{type:"text/csv;charset=utf-8"}),k=URL.createObjectURL(m),_=document.createElement("a");_.href=k,_.download=`ครูที่ปรึกษา-${w}-${d}-${r}.csv`,document.body.appendChild(_),_.click(),_.remove(),URL.revokeObjectURL(k),N("ดาวน์โหลด CSV แล้ว ✅","success")}catch(I){N("ดาวน์โหลดไม่สำเร็จ: "+he(I),"error")}})}async function Br(){Ie("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const e=i=>{let a=0;for(const p of i)a=a*26+p.charCodeAt(0)-64;return a},s=i=>{let a="";for(;i>0;)i--,a=String.fromCharCode(65+i%26)+a,i=Math.floor(i/26);return a},t=(i,a)=>{const p=[];for(let w=e(i);w<=e(a);w++)p.push(s(w));return p},n=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:t("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:t("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];n.flatMap(i=>i.cols);const l=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],o=["ระหว่างเรียน","กลางภาค","ปลายภาค"],x=await On().catch(()=>[]),r={};l.forEach(i=>{r[i]={},o.forEach(a=>{const p=x.find(w=>w.skill_group===i&&w.assignment_type===a);r[i][a]=new Set(p?p.allowed_columns.split(",").map(w=>w.trim()).filter(Boolean):[])})});const d=(i,a)=>n.map(p=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${p.label}</span>
      ${p.cols.map(w=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${r[i][a].has(w)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${i}" data-at="${a}" data-col="${w}">
          ${w}
        </button>`).join("")}
    </div>`).join("");Se(`<div class="max-w-5xl mx-auto animate-fade">
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
      ${n.map(i=>`
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded ${i.color.split(" ")[0]} border ${i.color.split(" ")[2]}"></span>
        <span class="text-gray-600 font-mono font-medium">${i.label}</span>
      </div>`).join("")}
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded bg-emerald-500"></span>
        <span class="text-gray-600">= เลือกแล้ว</span>
      </div>
    </div>

    <!-- Grid per skill group -->
    <div class="space-y-4">
      ${l.map(i=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${i}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${i}"
              ${x.find(a=>a.skill_group===i&&a.is_fixed)?"checked":""} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${o.map(a=>`
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${a}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${i.replace(/\s/g,"_")}-${a.replace(/\s/g,"_")}">
                  ${r[i][a].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${d(i,a)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${i}" data-at="${a}">ล้าง</button>
            </div>
          </div>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </div>`),document.addEventListener("click",i=>{const a=i.target.closest(".col-btn");if(!a)return;const{sg:p,at:w,col:y}=a.dataset;r[p][w].has(y)?(r[p][w].delete(y),a.className=a.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(r[p][w].add(y),a.className=a.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const v=document.getElementById(`scc-count-${p.replace(/\s/g,"_")}-${w.replace(/\s/g,"_")}`);v&&(v.textContent=`${r[p][w].size} คอลัมน์`);const f=document.querySelector(`.scc-clear-btn[data-sg="${p}"][data-at="${w}"]`);f&&(f.style.opacity=r[p][w].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(i=>{i.addEventListener("click",()=>{const{sg:a,at:p}=i.dataset;r[a][p].clear(),document.querySelectorAll(`.col-btn[data-sg="${a}"][data-at="${p}"]`).forEach(y=>{y.className=y.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const w=document.getElementById(`scc-count-${a.replace(/\s/g,"_")}-${p.replace(/\s/g,"_")}`);w&&(w.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const i=document.getElementById("scc-save-btn");i.disabled=!0,i.textContent="กำลังบันทึก...";try{const a=[];l.forEach(p=>{var y;const w=((y=document.querySelector(`.scc-lock[data-sg="${p}"]`))==null?void 0:y.checked)??!1;o.forEach(v=>{const f=[...r[p][v]].join(",");f&&a.push({skill_group:p,assignment_type:v,allowed_columns:f,is_fixed:w})})});for(const p of a)await Pn(p);N(`บันทึก ${a.length} รายการสำเร็จ ✅`,"success")}catch(a){N("บันทึกไม่สำเร็จ: "+he(a),"error")}finally{i.disabled=!1,i.textContent="💾 บันทึกทั้งหมด"}})}async function yi(){Ie("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const e=await ra().catch(()=>[]);document.getElementById("main-content").innerHTML=`
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
    </div>`,window.renderSubjects=St}async function qr(){var l;Ie("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const e=await Ne().catch(()=>({})),s=e.academicYear??e.academic_year??new Date().getFullYear()+543,t=e.semester??1,n=async()=>{const o=await zn(s,t).catch(()=>[]),x=document.getElementById("holiday-table");if(x){if(!o.length){x.innerHTML=`<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`;return}x.innerHTML=`<table class="w-full text-sm">
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
    </table>`}};Se(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
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
  </div>`),await n(),(l=document.getElementById("hol-add"))==null||l.addEventListener("click",async()=>{const o=document.getElementById("hol-date").value,x=document.getElementById("hol-desc").value.trim()||null;if(!o){N("กรุณาเลือกวันที่","warning");return}const r=parseInt(o.slice(0,4),10),d=new Date().getFullYear();if(Math.abs(r-d)>3){N(`ปี ${r} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${d}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await Ln({holiday_date:o,description:x,academic_year:s,semester:t}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",N("เพิ่มวันหยุดแล้ว","success"),await n()}catch(i){N("เกิดข้อผิดพลาด: "+he(i),"error")}}),window._deleteHoliday=async o=>{if(confirm("ลบวันหยุดนี้?"))try{await Cn(o),N("ลบแล้ว","success"),await n()}catch{N("ลบไม่สำเร็จ","error")}}}function Ar(){Ie("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",Se(`
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

    </div>`);let e="teachers",s=[];window.switchImportTab=l=>{e=l,s=[],document.getElementById("import-preview").classList.add("hidden");const o={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=o[l],document.getElementById("tab-teachers").className=l==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=l==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const t=l=>{if(!l||!l.name.endsWith(".csv")){N("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const o=new FileReader;o.onload=x=>{s=xl(x.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${s.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=gl(s,e),document.getElementById("import-preview").classList.remove("hidden")},o.readAsText(l,"UTF-8")};document.getElementById("csv-file").addEventListener("change",l=>t(l.target.files[0]));const n=document.getElementById("drop-zone");n.addEventListener("dragover",l=>{l.preventDefault(),n.classList.add("border-indigo-400","bg-indigo-50")}),n.addEventListener("dragleave",()=>n.classList.remove("border-indigo-400","bg-indigo-50")),n.addEventListener("drop",l=>{l.preventDefault(),n.classList.remove("border-indigo-400","bg-indigo-50"),t(l.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!s.length)return;const l=document.getElementById("btn-import"),o=document.getElementById("import-progress"),x=document.getElementById("progress-bar"),r=document.getElementById("progress-text");l.disabled=!0,o.classList.remove("hidden");const d=(i,a)=>{const p=Math.round(i/a*100);x.style.width=p+"%",r.textContent=`${i} / ${a} แถว`};try{const a=await(e==="teachers"?pl:ml)(s,d);if(N(`นำเข้าสำเร็จ ${a} รายการ`,"success"),x.style.width="100%",e==="students"){r.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const p=await mo();N(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(p==null?void 0:p.enrolled)??0} รายการ)`,"success")}catch{}r.textContent=`นำเข้าสำเร็จ ${a} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(i){N("นำเข้าไม่สำเร็จ: "+he(i),"error")}finally{l.disabled=!1}})}async function Mr(){var l,o,x;Ie("payments"),document.getElementById("page-title").textContent="การชำระเงิน",Se(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);let e=[],s="all";const t=()=>{const r=document.getElementById("pay-list");if(!r)return;const d={pending:0,approved:1,rejected:2},i=(s==="all"?e:e.filter(a=>a.status===s)).slice().sort((a,p)=>{const w=(d[a.status]??9)-(d[p.status]??9);return w!==0?w:new Date(p.created_at)-new Date(a.created_at)});if(!i.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}r.innerHTML=i.map(a=>{var v,f,T,c,u;const p={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[a.status]??{label:a.status,cls:"bg-gray-100 text-gray-600"},w={semester:`📦 เหมาทั้งเทอม (${a.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(a.room_count??1)||1} ห้อง (${a.amount??49} บ.)`,donation:a.supporter_renewal_entitlement_id?`🎁 ต่ออายุผู้สนับสนุน ระดับ ${a.donation_tier??"-"} · ${a.amount??0} บ. (ลด ${a.discount_percent??0}%)`:`☕ โดเนท ${a.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[a.package_type]??`${a.package_type} (${a.amount??0} บ.)`,y=new Date(a.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${a.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${a.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${a.id}" data-teacher="${(v=a.teachers)==null?void 0:v.id}" data-pkg="${a.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(((f=a.teachers)==null?void 0:f.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${((T=a.teachers)==null?void 0:T.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((c=a.teachers)==null?void 0:c.teacher_code)??"—"} · ${((u=a.teachers)==null?void 0:u.phone)??"—"}</p>
            </div>
          </div>
          <span class="text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${p.cls}">
            ${p.label}
          </span>
        </div>

        <!-- รายละเอียด -->
        <div class="px-4 py-3 space-y-2">
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">แพ็กเกจ</span>
            <span class="font-medium text-gray-700">${w}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">ส่งเมื่อ</span>
            <span class="text-gray-600">${y}</span>
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
            data-url="${ae(a.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>`:`
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${a.status==="pending"?(()=>{var B,h,I;return a.package_type==="donation"?`
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${a.id}" data-teacher="${(B=a.teachers)==null?void 0:B.id}">
              ☕ รับทราบ / ขอบคุณ
            </button>
          </div>`:a.package_type==="school_sponsored"?`
          <div class="px-4 pb-4">
            <button class="approve-btn flex-1 w-full py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${a.id}" data-teacher="${(h=a.teachers)==null?void 0:h.id}" data-pkg="${a.package_type}">
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
              data-id="${a.id}" data-teacher="${(I=a.teachers)==null?void 0:I.id}" data-pkg="${a.package_type}">
              ✅ อนุมัติ
            </button>
          </div>`})():""}
      </div>`}).join(""),r.querySelectorAll(".donate-ack-btn").forEach(a=>{a.addEventListener("click",async()=>{var y,v;const w=((y=(await Ne().catch(()=>({}))).donationThankYouCard)==null?void 0:y.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){a.disabled=!0,a.textContent="⏳ กำลังดำเนินการ...";try{await Ot(parseInt(a.dataset.id),"approved",w),await ba(parseInt(a.dataset.teacher),"donation"),N("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(v=window._refreshPaymentBadge)==null||v.call(window),e=await Xe(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent="☕ รับทราบ / ขอบคุณ"}}})}),r.querySelectorAll(".approve-btn").forEach(a=>{a.addEventListener("click",async()=>{var y;const p=a.dataset.pkg==="school_sponsored";if(confirm(p?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){a.disabled=!0,a.textContent="⏳ กำลังอนุมัติ...";try{await Ot(parseInt(a.dataset.id),"approved"),await ba(parseInt(a.dataset.teacher),a.dataset.pkg),N("อนุมัติแล้ว ✅","success"),(y=window._refreshPaymentBadge)==null||y.call(window),e=await Xe(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent=p?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),r.querySelectorAll(".reject-btn").forEach(a=>{a.addEventListener("click",()=>{hi(parseInt(a.dataset.id),async p=>{var w;await Ot(parseInt(a.dataset.id),"rejected",p),N("ปฏิเสธแล้ว","info"),(w=window._refreshPaymentBadge)==null||w.call(window),e=await Xe(),t()})})}),r.querySelectorAll(".view-slip-btn").forEach(a=>{a.addEventListener("click",()=>fi(a.dataset.url))})};try{e=await Xe(),t()}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(r=>{r.addEventListener("click",()=>{s=r.dataset.filter,document.querySelectorAll(".pay-tab").forEach(d=>{d.classList.toggle("border-indigo-600",d===r),d.classList.toggle("text-indigo-600",d===r),d.classList.toggle("border-transparent",d!==r),d.classList.toggle("text-gray-400",d!==r)}),t()})}),(l=document.getElementById("pay-refresh"))==null||l.addEventListener("click",async()=>{e=await Xe(),t(),N("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",r=>{if(!r.target.classList.contains("pay-cb"))return;const d=document.querySelectorAll(".pay-cb:checked"),i=document.getElementById("pay-bulk-approve");d.length>0?(i.classList.remove("hidden"),i.textContent=`✅ อนุมัติ ${d.length} คน`):i.classList.add("hidden")});const n=async r=>{var i,a;let d=0;for(const p of r)try{await Ot(parseInt(p.id),"approved"),await ba(parseInt(p.teacher),p.pkg),d++}catch{}N(`อนุมัติ ${d}/${r.length} รายการ ✅`,"success"),(i=window._refreshPaymentBadge)==null||i.call(window),e=await Xe(),t(),(a=document.getElementById("pay-bulk-approve"))==null||a.classList.add("hidden")};(o=document.getElementById("pay-bulk-approve"))==null||o.addEventListener("click",async()=>{const r=[...document.querySelectorAll(".pay-cb:checked")];r.length&&confirm(`อนุมัติ ${r.length} คนที่เลือก?`)&&await n(r.map(d=>({id:d.dataset.id,teacher:d.dataset.teacher,pkg:d.dataset.pkg})))}),(x=document.getElementById("pay-approve-all"))==null||x.addEventListener("click",async()=>{const r=e.filter(d=>d.status==="pending");if(!r.length){N("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${r.length} รายการ?`)&&await n(r.map(d=>{var i;return{id:d.id,teacher:(i=d.teachers)==null?void 0:i.id,pkg:d.package_type}}))})}async function fi(e){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",s.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${ae(e)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(s),s.querySelector("button").addEventListener("click",()=>s.remove()),s.addEventListener("click",r=>{r.target===s&&s.remove()});const t=s.querySelector("#slip-viewer"),n=s.querySelector("#slip-download"),l=await Bo(e),o=ae(l),x=String(l).split("?")[0].toLowerCase().endsWith(".pdf");n&&(n.href=l),t&&(t.innerHTML=x?`<iframe src="${o}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${o}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`)}function hi(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#rj-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#rj-confirm").addEventListener("click",async()=>{const n=t.querySelector("#reject-note").value.trim()||null;t.remove(),await s(n)})}async function Nr(){Ie("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1),n=async(o="scores")=>{const x=await ss(s,t,"สามัญ").catch(()=>[]);l(x,o)},l=(o,x="scores")=>{var T;const r=c=>`
      <tr class="hover:bg-gray-50 transition lsk-row" data-id="${c.id}">
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${c.name}</td>
        <td class="px-4 py-3 text-center text-sm text-gray-600">${c.max_score}</td>
        <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${c.sheet_col??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-400">${c.sort_order}</td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <button class="lsk-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${c.id}">แก้ไข</button>
          <button class="lsk-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${c.id}" data-name="${c.name}">ลบ</button>
        </td>
      </tr>`,d=c=>c.length?`<table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th>
              <th class="px-4 py-3 text-center">คะแนนเต็ม</th>
              <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th>
              <th class="px-4 py-3 text-center">ลำดับ</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">${c.map(r).join("")}</tbody>
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',i=c=>c.replace("SheetId","SheetTab"),a=c=>c.replace("SheetId","StudentRange"),p=(c,u)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${u})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${c}" value="${e[c]??""}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${c}" value="${e[i(c)]??""}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${c}" value="${e[a(c)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${c}" data-tab-key="${i(c)}" data-range-key="${a(c)}">บันทึก</button>
        </div>
      </div>`;Se(`<div class="max-w-5xl mx-auto animate-fade">
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
    </div>`);const w=[...o];(T=document.getElementById("btn-fill-ls-classes"))==null||T.addEventListener("click",async()=>{if(!confirm("ยืนยันซ่อมคะแนนรายวิชาทักษะชีวิตในภาคเรียนนี้ให้ตรงกับส่วนกลาง? คะแนนที่ล้างในส่วนกลางจะถูกล้างในรายวิชาด้วย"))return;const c=document.getElementById("btn-fill-ls-classes"),u=c.textContent;c.disabled=!0,c.textContent="กำลังเติม...";try{const B=await Ut(s,t);N(`เติมทักษะชีวิต ${B.classes} รายวิชา / ${B.scores} คะแนนแล้ว`,"success")}catch(B){N("เติมไม่สำเร็จ: "+he(B),"error")}finally{c.disabled=!1,c.textContent=u}});const y=async()=>{var _;document.getElementById("lsk-tab-actions").innerHTML=`
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
        </div>`;const[{columns:c,scores:u},B]=await Promise.all([no(s,t).catch(()=>({columns:[],scores:[]})),Et().catch(()=>[])]),h=(c??[]).filter($=>$.category==="สามัญ"),I={};for(const $ of u)I[$.student_id]||(I[$.student_id]={}),I[$.student_id][$.column_id]=$.score;const E=B.filter($=>($==null?void 0:$.id)&&($==null?void 0:$.student_code)&&($==null?void 0:$.main_room)).sort(($,S)=>($.main_room??"").localeCompare(S.main_room??"",void 0,{numeric:!0})||($.student_code??"").localeCompare(S.student_code??"")),A=document.getElementById("lsk-filter-grade"),j=document.getElementById("lsk-filter-room");A.innerHTML='<option value="">ทุกระดับชั้น</option>'+ze(E.map($=>at($.main_room))).map($=>`<option value="${$}">${$}</option>`).join("");const b=()=>{const $=A.value,S=j.value,q=ze(E.filter(D=>!$||at(D.main_room)===$).map(D=>pt(D.main_room)));j.innerHTML='<option value="">ทุกห้อง</option>'+q.map(D=>`<option value="${D}" ${D===S?"selected":""}>ห้อง ${D}</option>`).join(""),S&&!q.includes(S)&&(j.value="")},g=$=>{if(document.getElementById("lsk-filter-count").textContent=`${$.length} คน`,!$.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${h.map(S=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${S.name}<br><span class="font-normal text-gray-400">(${S.max_score})</span></th>`).join("")}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${$.map((S,q)=>{const D=h.reduce((L,C)=>{var O;return L+(((O=I[S.id])==null?void 0:O[C.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${q+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${S.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${S.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${S.main_room??"—"}</td>
                  ${h.map(L=>{var O;const C=(O=I[S.id])==null?void 0:O[L.id];return`<td class="px-2 py-2 text-center ${C!=null?"text-gray-800 font-medium":"text-gray-300"}">${C??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${D||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};b();let m=[...E];g(m);const k=()=>{b();const $=A.value,S=j.value,q=document.getElementById("lsk-filter-search").value.toLowerCase();m=E.filter(D=>{var L,C;return(!$||at(D.main_room)===$)&&(!S||pt(D.main_room)===S)&&(!q||((L=D.full_name)==null?void 0:L.toLowerCase().includes(q))||((C=D.student_code)==null?void 0:C.includes(q)))}),g(m)};A.addEventListener("change",k),j.addEventListener("change",k),document.getElementById("lsk-filter-search").addEventListener("input",k),(_=document.getElementById("btn-sync-ls"))==null||_.addEventListener("click",async()=>{const $=document.getElementById("btn-sync-ls");$.disabled=!0,$.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:S}=await Ce(async()=>{const{syncCentralBatch:z}=await import("./sync-C11n1XX8.js");return{syncCentralBatch:z}},__vite__mapDeps([11,6,4]));if(!h.length){N("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!e.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const q=m.map(z=>({id:z.id,student_code:z.student_code})),D=new Set(q.map(z=>z.id)),L=new Set(h.map(z=>z.id)),C=u.filter(z=>D.has(z.student_id)&&L.has(z.column_id)),O=await S(e.lifeSkillSheetIdSamai,e.lifeSkillSheetTabSamai,h,C,q,{studentColRange:e.lifeSkillStudentRangeSamai||"J8:J3000"});if(!O){N("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync ทักษะชีวิต ${q.length} คน / ${O} คะแนนแล้ว`,"success")}catch(S){N("Sync ไม่สำเร็จ: "+he(S),"error")}finally{$.disabled=!1,$.textContent="↑ Sync ไปชีทกลาง"}})},v=()=>{var I;document.getElementById("lsk-tab-actions").innerHTML=`
        ${o.length?"":'<button id="lsk-copy-prev-btn" class="px-4 py-2.5 border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-xl hover:bg-indigo-100">คัดลอกจากภาคก่อน</button>'}
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const c=o.reduce((E,A)=>E+(Number(A.max_score)||0),0),u=o.length?`
        <form id="lsk-score-settings" class="bg-emerald-50/60 rounded-2xl border border-emerald-100 p-5">
          <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 class="text-sm font-semibold text-emerald-900">กำหนดคะแนนเต็มแต่ละส่วน</h3>
              <p class="text-xs text-emerald-700 mt-1">ค่าที่บันทึกจะอัปเดตคอลัมน์กลางในรายวิชาทักษะชีวิตของภาค ${t}/${s}</p>
            </div>
            <span class="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-emerald-700 border border-emerald-100">รวม <span id="lsk-score-total">${c}</span> คะแนน</span>
          </div>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            ${o.map(E=>`
              <label class="block rounded-xl bg-white border border-emerald-100 p-3">
                <span class="block text-xs font-semibold text-gray-700 mb-2">${ae(E.name)}</span>
                <span class="flex items-center gap-2">
                  <input type="number" min="1" max="100" step="1" required
                    data-lsk-max-id="${E.id}" value="${Number(E.max_score)||0}"
                    class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                  <span class="text-xs text-gray-400">คะแนน</span>
                </span>
              </label>`).join("")}
          </div>
          <div class="flex justify-end mt-4">
            <button id="lsk-save-score-settings" type="submit" class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">บันทึกคะแนนเต็ม</button>
          </div>
        </form>`:`
        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          ภาค ${t}/${s} ยังไม่มีโครงสร้างคะแนนกลาง กรุณากด “คัดลอกจากภาคก่อน” หรือเพิ่มหัวข้อใหม่
        </div>`;document.getElementById("lsk-tab-content").innerHTML=`<div class="space-y-6">
        ${u}
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${o.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${d(o)}</div>
          ${p("lifeSkillSheetIdSamai","สามัญ")}
        </div>
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>Es(null,s,t,()=>n("config"))),(I=document.getElementById("lsk-copy-prev-btn"))==null||I.addEventListener("click",async()=>{const E=document.getElementById("lsk-copy-prev-btn"),A=t===1?s-1:s,j=t===1?2:t-1;E.disabled=!0,E.textContent="กำลังคัดลอก...";try{const b=await ss(A,j,"สามัญ");if(!b.length)throw new Error(`ไม่พบโครงสร้างคะแนนภาค ${j}/${A}`);await Rs(b.map(m=>({name:m.name,max_score:m.max_score,sheet_col:m.sheet_col,sort_order:m.sort_order,category:"สามัญ",academic_year:s,semester:t})));const g=await Ut(s,t);N(`คัดลอก ${b.length} ส่วน และเติมให้ ${g.classes} รายวิชาแล้ว`,"success"),await n("config")}catch(b){N("คัดลอกไม่สำเร็จ: "+he(b),"error"),E.disabled=!1,E.textContent="คัดลอกจากภาคก่อน"}});const B=document.getElementById("lsk-score-settings"),h=()=>{const E=[...document.querySelectorAll("[data-lsk-max-id]")].reduce((j,b)=>j+(Number(b.value)||0),0),A=document.getElementById("lsk-score-total");A&&(A.textContent=E)};B==null||B.querySelectorAll("[data-lsk-max-id]").forEach(E=>E.addEventListener("input",h)),B==null||B.addEventListener("submit",async E=>{E.preventDefault();const A=document.getElementById("lsk-save-score-settings"),j=[...B.querySelectorAll("[data-lsk-max-id]")].map(b=>({id:Number(b.dataset.lskMaxId),maxScore:Number(b.value)}));if(j.some(b=>!Number.isInteger(b.maxScore)||b.maxScore<1||b.maxScore>100)){N("คะแนนเต็มแต่ละส่วนต้องเป็นจำนวนเต็ม 1–100","warning");return}A.disabled=!0,A.textContent="กำลังบันทึก...";try{await Promise.all(j.map(g=>Os(g.id,{max_score:g.maxScore})));const b=await Ut(s,t);N(`บันทึกคะแนนเต็ม และอัปเดต ${b.classes} รายวิชาแล้ว`,"success"),await n("config")}catch(b){N("บันทึกไม่สำเร็จ: "+he(b),"error"),A.disabled=!1,A.textContent="บันทึกคะแนนเต็ม"}}),document.querySelectorAll(".lsk-edit").forEach(E=>{E.addEventListener("click",()=>{const A=w.find(j=>j.id===+E.dataset.id);A&&Es(A,s,t,()=>n("config"))})}),document.querySelectorAll(".lsk-del").forEach(E=>{E.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${E.dataset.name}"?`))try{await oo(+E.dataset.id),N("ลบแล้ว","success"),n("config")}catch(A){N("ลบไม่สำเร็จ: "+he(A),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach(E=>{E.addEventListener("click",async()=>{var $,S,q;const A=E.dataset.key,j=E.dataset.tabKey,b=E.dataset.rangeKey,g=(($=document.getElementById(`lsk-sheet-${A}`))==null?void 0:$.value.trim())??"",m=((S=document.getElementById(`lsk-tab-${A}`))==null?void 0:S.value.trim())??"",k=((q=document.getElementById(`lsk-range-${A}`))==null?void 0:q.value.trim())??"J8:J3000",_=E.textContent;E.disabled=!0,E.textContent="⏳";try{await Promise.all([Ee(A,g),Ee(j,m),Ee(b,k)]),e[A]=g,e[j]=m,e[b]=k,E.textContent="✅",E.style.background="#16a34a",setTimeout(()=>{E.disabled=!1,E.textContent=_,E.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),E.disabled=!1,E.textContent=_}})})},f=c=>{document.querySelectorAll("[data-tab]").forEach(u=>{const B=u.dataset.tab===c;u.className=B?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),c==="scores"?y():v()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>f("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>f("config")),f(x)};n()}function Es(e,s,t,n){var x;(x=document.getElementById("lsk-modal"))==null||x.remove();const l=!!e,o=document.createElement("div");o.id="lsk-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#lsk-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#lsk-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#lsk-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const i={name:o.querySelector("#lsk-name").value.trim(),max_score:parseInt(o.querySelector("#lsk-max").value)||20,sort_order:parseInt(o.querySelector("#lsk-order").value)||0,sheet_col:o.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:s,semester:t};l?await Os(e.id,i):await Rs(i);const a=await Ut(s,t);N(`บันทึกสำเร็จ และอัปเดต ${a.classes} รายวิชาแล้ว`,"success"),o.remove(),n()}catch(i){N("บันทึกไม่สำเร็จ: "+he(i),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}const vi=e=>{const s=Ws(e);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${s.cls}">${s.label}</span>`};async function Dr(){Ie("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const e=await Ne().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1);us(e);const n=a=>`
    <tr class="hover:bg-gray-50 transition" data-id="${a.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${a.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${a.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${a.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${a.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${a.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${a.id}" data-name="${a.name}">ลบ</button>
      </td>
    </tr>`;let l=[];const o=async()=>{var p;l=await Gn(s,t).catch(()=>[]),x();const a=((p=document.querySelector("[data-tab].bg-white"))==null?void 0:p.dataset.tab)??"scores";i(a)},x=()=>{Se(`<div class="max-w-5xl mx-auto animate-fade">
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
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>i("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>i("config"))},r=async()=>{var I,E;document.getElementById("rsa-tab-actions").innerHTML=`
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
      </div>`;const[{columns:a,scores:p},w]=await Promise.all([ao(s,t).catch(()=>({columns:[],scores:[]})),Et().catch(()=>[])]),y={};for(const A of p)y[A.student_id]||(y[A.student_id]={}),y[A.student_id][A.column_id]=A.score;const v=w.filter(A=>(A==null?void 0:A.id)&&(A==null?void 0:A.student_code)&&(A==null?void 0:A.main_room)).sort((A,j)=>(A.main_room??"").localeCompare(j.main_room??"",void 0,{numeric:!0})||(A.student_code??"").localeCompare(j.student_code??"")),f=document.getElementById("rsa-filter-grade"),T=document.getElementById("rsa-filter-room");f.innerHTML='<option value="">ทุกระดับชั้น</option>'+ze(v.map(A=>at(A.main_room))).map(A=>`<option value="${A}">${A}</option>`).join("");const c=()=>{const A=f.value,j=T.value,b=ze(v.filter(g=>!A||at(g.main_room)===A).map(g=>pt(g.main_room)));T.innerHTML='<option value="">ทุกห้อง</option>'+b.map(g=>`<option value="${g}" ${g===j?"selected":""}>ห้อง ${g}</option>`).join(""),j&&!b.includes(j)&&(T.value="")},u=A=>{if(document.getElementById("rsa-filter-count").textContent=`${A.length} คน`,!A.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${a.map(j=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${j.name}<br><span class="font-normal text-gray-400">(${j.max_score})</span></th>`).join("")}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${A.map((j,b)=>{const g=a.reduce((_,$)=>{var S;return _+(((S=y[j.id])==null?void 0:S[$.id])??0)},0),m=g/2,k=g>0?vi(m):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${b+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${j.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${j.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${j.main_room??"—"}</td>
                ${a.map(_=>{var S;const $=(S=y[j.id])==null?void 0:S[_.id];return`<td class="px-2 py-2 text-center ${$!=null?"text-gray-800 font-medium":"text-gray-300"}">${$??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${g||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${g>0?m.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${k}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};c();let B=[...v];u(B);const h=()=>{c();const A=f.value,j=T.value,b=document.getElementById("rsa-filter-search").value.toLowerCase();B=v.filter(g=>{var m,k;return(!A||at(g.main_room)===A)&&(!j||pt(g.main_room)===j)&&(!b||((m=g.full_name)==null?void 0:m.toLowerCase().includes(b))||((k=g.student_code)==null?void 0:k.includes(b)))}),u(B)};f.addEventListener("change",h),T.addEventListener("change",h),document.getElementById("rsa-filter-search").addEventListener("input",h),(I=document.getElementById("btn-sync-rs"))==null||I.addEventListener("click",async()=>{const A=document.getElementById("btn-sync-rs");if(!e.readingScoreSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}A.disabled=!0,A.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:j}=await Ce(async()=>{const{syncCentralBatch:$}=await import("./sync-C11n1XX8.js");return{syncCentralBatch:$}},__vite__mapDeps([11,6,4])),b=B.map($=>({id:$.id,student_code:$.student_code})),g=new Set(b.map($=>$.id)),m=new Set(a.map($=>$.id)),k=p.filter($=>g.has($.student_id)&&m.has($.column_id)),_=await j(e.readingScoreSheetId,e.readingScoreSheetTab,a,k,b,{studentColRange:e.readingScoreStudentRange||"J8:J3000"});if(!_){N("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${b.length} คน / ${_} คะแนนแล้ว`,"success")}catch(j){N("Sync ไม่สำเร็จ: "+he(j),"error")}finally{A.disabled=!1,A.textContent="↑ Sync ไปชีทกลาง"}}),(E=document.getElementById("btn-fill-reading-eval"))==null||E.addEventListener("click",async()=>{const A=document.getElementById("btn-fill-reading-eval");if(!e.readingEvalClassSheetCol){N("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}A.disabled=!0,A.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:j}=await Ce(async()=>{const{syncReadingEvalToClassSheets:k}=await import("./sync-C11n1XX8.js");return{syncReadingEvalToClassSheets:k}},__vite__mapDeps([11,6,4])),{getAllClassesForFill:b}=await Ce(async()=>{const{getAllClassesForFill:k}=await import("./api-BQaMiX9s.js");return{getAllClassesForFill:k}},__vite__mapDeps([0,1,2,3,4])),g={};for(const k of v){const _=a.reduce(($,S)=>{var q;return $+(((q=y[k.id])==null?void 0:q[S.id])??0)},0);if(_>0){const $=_/2;g[k.id]={label:Ws($).label,score100:$}}}const m=await b();await j(m,g,e.readingEvalClassSheetCol),N(`ป้อนผลประเมินอ่านฯ ไป ${m.length} ห้องสำเร็จ`,"success")}catch(j){N("ป้อนไม่สำเร็จ: "+he(j),"error")}finally{A.disabled=!1,A.textContent="📝 ป้อนผล → ทุกวิชา"}})},d=()=>{var p,w,y;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const a=l.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${l.map(n).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${l.length} หัวข้อ · รวม ${l.reduce((v,f)=>v+f.max_score,0)} คะแนน</span>
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
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${ht.map(v=>v.label).join("/")})</span>
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
          ${ht.map((v,f)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${f}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${f+1}:</span>
              <input type="text" data-rsa-label value="${Fe(v.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${v.min}" min="0" max="100" ${f===ht.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${f===ht.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${f===ht.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>Is(null,s,t,o)),document.querySelectorAll(".rsa-edit").forEach(v=>{v.addEventListener("click",()=>{const f=l.find(T=>T.id===+v.dataset.id);f&&Is(f,s,t,o)})}),document.querySelectorAll(".rsa-del").forEach(v=>{v.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${v.dataset.name}"?`))try{await so(+v.dataset.id),N("ลบแล้ว","success"),o()}catch(f){N("ลบไม่สำเร็จ: "+he(f),"error")}})}),(p=document.getElementById("rsa-save-sheet"))==null||p.addEventListener("click",async()=>{var u,B,h;const v=document.getElementById("rsa-save-sheet"),f=((u=document.getElementById("rsa-sheet-id"))==null?void 0:u.value.trim())??"",T=((B=document.getElementById("rsa-sheet-tab"))==null?void 0:B.value.trim())??"",c=((h=document.getElementById("rsa-student-range"))==null?void 0:h.value.trim())??"J8:J3000";v.disabled=!0,v.textContent="⏳";try{await Promise.all([Ee("readingScoreSheetId",f),Ee("readingScoreSheetTab",T),Ee("readingScoreStudentRange",c)]),e.readingScoreSheetId=f,e.readingScoreSheetTab=T,e.readingScoreStudentRange=c,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(w=document.getElementById("rsa-save-eval-col"))==null||w.addEventListener("click",async()=>{var T;const v=document.getElementById("rsa-save-eval-col"),f=(((T=document.getElementById("rsa-eval-col"))==null?void 0:T.value.trim())??"").toUpperCase();v.disabled=!0,v.textContent="⏳";try{await Ee("readingEvalClassSheetCol",f),e.readingEvalClassSheetCol=f,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),N("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(y=document.getElementById("rsa-save-grades"))==null||y.addEventListener("click",async()=>{const v=document.getElementById("rsa-save-grades"),f=document.getElementById("rsa-grades-err");f.textContent="";const T=[...document.querySelectorAll("[data-rsa-grade-row]")].map((c,u)=>({label:c.querySelector("[data-rsa-label]").value.trim(),min:u===ht.length-1?0:parseFloat(c.querySelector("[data-rsa-min]").value)}));if(T.some(c=>!c.label)){f.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if(T.some(c=>Number.isNaN(c.min)||c.min<0||c.min>100)){f.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let c=0;c<T.length-1;c++)if(T[c].min<=T[c+1].min){f.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}v.disabled=!0,v.textContent="⏳";try{await Ee("readingEvalThresholds",JSON.stringify(T)),us({readingEvalThresholds:JSON.stringify(T)}),v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึกเกณฑ์",v.style.background=""},1500),N("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(c){N("บันทึกไม่สำเร็จ: "+he(c),"error"),v.disabled=!1,v.textContent="บันทึกเกณฑ์"}})},i=a=>{document.querySelectorAll("[data-tab]").forEach(p=>{p.className=p.dataset.tab===a?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),a==="scores"?r():d()};o()}const rt={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function At(e,s){var o;(o=document.getElementById("admin-picker"))==null||o.remove();const t=document.createElement("div");t.id="admin-picker",t.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const n=(e.target.closest("td,th,button")??e.target).getBoundingClientRect();t.style.top=Math.min(n.bottom+4,window.innerHeight-60)+"px",t.style.left=Math.max(4,Math.min(n.left,window.innerWidth-220))+"px";const l=document.createElement("button");l.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",l.textContent="✕ ล้าง",l.onclick=()=>{t.remove(),s(null)},t.appendChild(l),Object.entries(rt).forEach(([x,r])=>{const d=document.createElement("button");d.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${r.bg} ${r.color} hover:opacity-80 transition`,d.textContent=r.label,d.title=r.fullLabel,d.onclick=()=>{t.remove(),s(x)},t.appendChild(d)}),document.body.appendChild(t),setTimeout(()=>document.addEventListener("click",()=>t.remove(),{once:!0}),50)}const Ls=["อา","จ","อ","พ","พฤ","ศ","ส"];function wi(e,s){const t=[],n=new Date(e),l=new Date(s),o=n.getDay()%7;o&&n.setDate(n.getDate()-o);let x=new Date(n),r=1;for(;x<=l;){const d=[];for(let i=0;i<5;i++){const a=new Date(x);a.setDate(a.getDate()+i),a<=l&&d.push({date:new Date(a),ds:a.toISOString().slice(0,10)})}d.length&&(t.push({n:r,days:d}),r++),x.setDate(x.getDate()+7)}return t}function Cs(e,s){const t=s.reduce((l,o)=>{var x;return l+(((x=rt[e[o.ds]])==null?void 0:x.score)??0)},0),n=s.length*2;return n>0?Math.min(10,Math.max(0,Math.round(t/n*100)/10)):0}function zt(e){return`${e.getDate()}/${e.getMonth()+1}`}async function Hr(e){var v,f,T,c;Ie("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let s=null,t=e;if(!t)try{const{data:u}=await le.auth.getSession(),B=((f=(v=u==null?void 0:u.session)==null?void 0:v.user)==null?void 0:f.id)??null;if(B){const{data:h}=await le.from("teachers").select("*").eq("profile_id",B).maybeSingle();t=h??null}}catch(u){console.error("Failed to load teacher session:",u)}const[n,l]=await Promise.all([Ne().catch(()=>({})),Hs().catch(()=>[])]),o=l,x=(n.prayerScannerTeachers||"").split(/[\s,]+/).map(u=>u.trim()).filter(Boolean);let r=!1;if(t){const{data:u}=await le.from("profiles").select("role").eq("id",t.profile_id).maybeSingle();r=x.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(u==null?void 0:u.role)==="admin"}Se(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const d=()=>{var P;const u=n.semester_start,B=n.semester_end,h=u&&B?wi(u,B):[],I=h.flatMap(R=>R.days);if(document.getElementById("pr-tab-actions").innerHTML=`
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
      </div>`,(P=document.getElementById("btn-fill-prayer-classes"))==null||P.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const R=document.getElementById("btn-fill-prayer-classes"),Y=R.textContent;R.disabled=!0,R.textContent="กำลังเติม...";try{const J=await eo({semesterStart:n.semester_start,semesterEnd:n.semester_end,attendanceScoreMode:n.attendanceScoreMode??"recorded"});N(`เติมรายวิชาศาสนา ${J.classes} รายวิชา / ${J.scores} คะแนนแล้ว`,"success")}catch(J){N("เติมไม่สำเร็จ: "+he(J),"error")}finally{R.disabled=!1,R.textContent=Y}}),document.getElementById("pr-tab-content").innerHTML=`
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
              ${o.map(R=>`<button type="button" data-room="${R}"
                class="pr-room-item w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 transition">
                ${R}
              </button>`).join("")}
            </div>
          </div>
        </div>
        <input id="pr-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัสนักเรียน"
          class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <span id="pr-filter-count" class="text-xs text-gray-400 flex-shrink-0"></span>
        <div class="flex gap-1 text-xs flex-shrink-0 flex-wrap">
          ${Object.values(rt).map(R=>`<span class="px-1.5 py-0.5 ${R.bg} ${R.color} rounded cursor-default">${R.label}=${R.fullLabel??""}</span>`).join("")}
        </div>
      </div>
      ${!u||!B?`<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`:`<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`,!u||!B)return;const E="border border-gray-200 text-center text-xs select-none",A="sticky left-0 z-20 bg-white border border-gray-200",j="sticky z-20 bg-white border border-gray-200",b=R=>R>=8?"text-emerald-600":R>=6?"text-amber-500":"text-red-600",g=30,m=160,k={};let _=[],$=[];const S=(R,Y=!0)=>{R&&(R.style.outline=`2px solid ${Y?"#059669":"#ef4444"}`,R.style.outlineOffset="1px",setTimeout(()=>{R.style.outline="",R.style.outlineOffset=""},700))},q=async(R,Y,J,H)=>{var Z;k[R]||(k[R]={}),H===null?delete k[R][Y]:k[R][Y]=H;const U=document.querySelector(`.pr-cell[data-sid="${R}"][data-date="${Y}"]`);if(U){const te=H?rt[H]:null;Object.values(rt).forEach(se=>U.classList.remove(se.bg)),te?(U.classList.add(te.bg),U.innerHTML=`<span class="${te.color} text-xs">${te.label}</span>`):U.innerHTML=""}L(R);const X=document.querySelector(`.adm-cell[data-sid="${R}"][data-date="${Y}"]`);if(X){const te=H?rt[H]:null;X.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${te?te.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,X.innerHTML=te?`<span class="${te.color}">${te.label}</span>`:'<span class="text-gray-200">·</span>'}try{const te=((Z=h.find(se=>se.days.some(pe=>pe.ds===Y)))==null?void 0:Z.n)??null;await zo(R,J,Y,H,te,"แอดมิน"),S(U,!0),S(X,!0)}catch(te){console.error("[prayer save]",te),S(U,!1),S(X,!1),N("บันทึกไม่สำเร็จ: "+he(te),"error")}},D=async(R,Y)=>{const H=(await Promise.allSettled(R.map(([U,X,Z])=>q(U,X,Y,Z)))).filter(U=>U.status==="rejected").length;H>0&&N(`บันทึกไม่สำเร็จ ${H} รายการ`,"error")},L=R=>{const Y=k[R]??{},J=Cs(Y,I),H=document.getElementById(`pr-sc-${R}`);H&&(H.textContent=J,H.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${b(J)} text-xs`)},C=(R,Y)=>{if(document.getElementById("pr-filter-count").textContent=`${R.length} คน · ${I.length} วัน`,!R.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${A} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${j} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${j} bg-gray-50 text-left px-2" style="left:96px;min-width:${m}px">ชื่อ-นามสกุล</th>
              ${h.map(J=>`<th colspan="${J.days.length}"
                class="${E} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${J.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${J.n}">
                Week${J.n} ✎</th>`).join("")}
              <th class="${E} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${A} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${j} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${j} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${m}px">ชื่อ</th>
              ${h.flatMap(J=>J.days.map(H=>`<th class="${E} bg-gray-100 text-gray-400 font-normal"
                style="width:${g}px;min-width:${g}px;font-size:9px">
                ${Ls[H.date.getDay()]}<br/>${zt(H.date)}</th>`)).join("")}
              <th class="${E} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${R.map((J,H)=>{const U=k[J.id]??{},X=Cs(U,I);return`<tr class="hover:bg-gray-50/60" data-sid="${J.id}">
                <td class="${A} text-center text-gray-400" style="width:28px">${H+1}</td>
                <td class="${j} text-center font-mono text-gray-600" style="left:28px;width:68px">${J.student_code??"—"}</td>
                <td class="${j} px-2" style="left:96px;min-width:${m}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${J.image_url?`<img src="${J.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${J.full_name??"—"}</span>
                  </div>
                </td>
                ${h.flatMap(Z=>Z.days.map(te=>{const se=U[te.ds]??null,pe=se?rt[se]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${pe?pe.bg:""}"
                    data-sid="${J.id}" data-date="${te.ds}" data-room="${Y}"
                    style="width:${g}px;min-width:${g}px;height:28px">
                    ${pe?`<span class="${pe.color} text-xs">${pe.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${b(X)} text-xs"
                  id="pr-sc-${J.id}" style="min-width:48px">${X}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",J=>{const H=J.target.closest(".pr-week-th");if(!H)return;const U=+H.dataset.week,X=h.find(Z=>Z.n===U);X&&F(X,_,z)}),document.getElementById("pr-grid-wrap").addEventListener("click",J=>{const H=J.target.closest(".pr-cell");if(!H)return;J.stopPropagation();const U=+H.dataset.sid,X=H.dataset.date,Z=H.dataset.room;At(J,te=>q(U,X,Z,te))})},O=async(R,Y="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[J,H]=await Promise.all([co(R),uo(R,u,B)]);_=J,Object.keys(k).forEach(X=>delete k[X]);for(const X of _)k[X.id]={};for(const X of H)k[X.student_id]||(k[X.student_id]={}),k[X.student_id][X.check_date]=X.status;$=I.map(X=>X.ds);const U=Y?_.filter(X=>{var Z,te;return((Z=X.full_name)==null?void 0:Z.toLowerCase().includes(Y))||((te=X.student_code)==null?void 0:te.includes(Y))}):_;C(U,R)}catch(J){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${J.message}</div>`}};let z=o[0]??"";const M=R=>{z=R,document.getElementById("pr-room-label").textContent=R,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(J=>{const H=J.dataset.room===R;J.classList.toggle("bg-indigo-50",H),J.classList.toggle("font-semibold",H),J.classList.toggle("text-indigo-700",H)});const Y=document.getElementById("pr-filter-search").value.toLowerCase();O(R,Y)};document.getElementById("pr-room-btn").addEventListener("click",R=>{R.stopPropagation();const Y=document.getElementById("pr-room-dropdown");Y.classList.toggle("hidden"),Y.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",R=>{const Y=R.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(J=>{J.style.display=J.dataset.room.toLowerCase().includes(Y)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",R=>{const Y=R.target.closest(".pr-room-item");Y&&M(Y.dataset.room)}),document.addEventListener("click",()=>{var R;(R=document.getElementById("pr-room-dropdown"))==null||R.classList.add("hidden")},{capture:!0,once:!1}),z&&M(z),document.getElementById("pr-filter-search").addEventListener("input",R=>{const Y=R.target.value.toLowerCase();if(!_.length)return;const J=Y?_.filter(H=>{var U,X;return((U=H.full_name)==null?void 0:U.toLowerCase().includes(Y))||((X=H.student_code)==null?void 0:X.includes(Y))}):_;C(J,z)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const R=document.getElementById("btn-sync-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const Y=Object.values(k).flatMap(H=>Object.keys(H)),J=[...new Set([...$,...Y])].sort();if(!J.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}R.disabled=!0,R.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:H}=await Ce(async()=>{const{syncPrayerSheet:X}=await import("./sync-C11n1XX8.js");return{syncPrayerSheet:X}},__vite__mapDeps([11,6,4])),U=_.map(X=>({id:X.id,student_code:X.student_code}));await H(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",J,k,U),N(`Sync ละหมาด ${U.length} คน × ${J.length} วัน สำเร็จ`,"success")}catch(H){N("Sync ไม่สำเร็จ: "+he(H),"error")}finally{R.disabled=!1,R.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const R=document.getElementById("btn-sync-all-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}R.disabled=!0,R.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:Y}=await Ce(async()=>{const{syncPrayerSheet:me}=await import("./sync-C11n1XX8.js");return{syncPrayerSheet:me}},__vite__mapDeps([11,6,4])),{getAllPrayerRecords:J,getStudents:H}=await Ce(async()=>{const{getAllPrayerRecords:me,getStudents:ce}=await import("./api-BQaMiX9s.js");return{getAllPrayerRecords:me,getStudents:ce}},__vite__mapDeps([0,1,2,3,4])),[U,X]=await Promise.all([J(),H()]),Z={};for(const me of U)Z[me.student_id]||(Z[me.student_id]={}),Z[me.student_id][me.check_date]=me.status;const se=X.filter(me=>me.religion_room).map(me=>({id:me.id,student_code:me.student_code})),pe=[...new Set(U.map(me=>me.check_date))].sort(),we=[...new Set([...$,...pe])].sort();if(!we.length||!se.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}R.textContent=`⏳ Sync ${se.length} คน × ${we.length} วัน...`,await Y(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",we,Z,se),N(`✅ Sync ทุกห้อง ${se.length} คน × ${we.length} วัน สำเร็จ`,"success")}catch(Y){N("Sync ไม่สำเร็จ: "+he(Y),"error")}finally{R.disabled=!1,R.textContent="↑ Sync ทุกห้อง"}});const F=(R,Y,J)=>{var Z;(Z=document.getElementById("admin-prayer-modal"))==null||Z.remove();const H=document.createElement("div");H.id="admin-prayer-modal",H.className="fixed inset-0 z-[80] flex flex-col bg-white";const U=`${zt(R.days[0].date)}–${zt(R.days[R.days.length-1].date)}`,X=(te,se)=>{var me;const pe=((me=k[te])==null?void 0:me[se])??null,we=pe?rt[pe]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${we?we.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${te}" data-date="${se}" data-room="${J}">
          ${we?`<span class="${we.color}">${we.label}</span>`:'<span class="text-gray-200">·</span>'}
        </button>`};H.innerHTML=`
        <div class="bg-emerald-700 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button id="adm-modal-close" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${R.n}</p>
            <p class="text-xs text-emerald-200">${U} · ${J}</p>
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
                ${R.days.map(te=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${Ls[te.date.getDay()]} ${zt(te.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${te.ds}" data-room="${J}">AllDay</button>
                  </th>`).join("")}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${Y.map(te=>`
                <tr class="hover:bg-gray-50/50" data-sid="${te.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${te.image_url?`<img src="${te.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-xs">👤</div>'}
                      <span class="text-gray-800 truncate max-w-[120px]">${te.full_name??"—"}</span>
                    </div>
                  </td>
                  ${R.days.map(se=>`<td class="px-2 py-2 text-center">${X(te.id,se.ds)}</td>`).join("")}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${te.id}" data-room="${J}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`,document.body.appendChild(H),H.querySelector("#adm-modal-body").addEventListener("click",te=>{const se=te.target.closest(".adm-cell");if(!se)return;te.stopPropagation();const pe=+se.dataset.sid,we=se.dataset.date;At(te,me=>q(pe,we,J,me))}),H.querySelectorAll(".adm-day-all").forEach(te=>{te.addEventListener("click",se=>{se.stopPropagation();const pe=te.dataset.date;At(se,we=>D(Y.map(me=>[me.id,pe,we]),J))})}),H.querySelectorAll(".adm-row-all").forEach(te=>{te.addEventListener("click",se=>{se.stopPropagation();const pe=+te.dataset.sid;At(se,we=>D(R.days.map(me=>[pe,me.ds,we]),J))})}),H.querySelector("#adm-all-check").addEventListener("click",te=>{te.stopPropagation(),At(te,se=>D(Y.flatMap(pe=>R.days.map(we=>[pe.id,we.ds,se])),J))}),H.querySelector("#adm-modal-close").addEventListener("click",()=>H.remove())}},i=()=>{document.getElementById("pr-tab-actions").innerHTML="",s&&(clearInterval(s),s=null);const u=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Filters panel -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
          <h3 class="font-bold text-gray-800 text-sm flex items-center gap-1.5">
            🔍 คัดกรองข้อมูล
          </h3>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">เลือกวันที่สแกน</label>
            <input type="date" id="hist-date-input" value="${u}"
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
    `;let B=[],h="",I=!1;const E=1e3,A=_=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[_]||"ไม่ระบุพื้นที่",j=_=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[_]||"bg-gray-50 text-gray-500 border-gray-100",b=async _=>{const $=[];for(let S=0;;S+=E){const{data:q,error:D}=await le.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",_).not("location","is",null).order("created_at",{ascending:!1}).range(S,S+E-1);if(D)throw D;if($.push(...q??[]),!q||q.length<E)break}return $},g=async()=>{var S;if(!document.getElementById("hist-table-body")){s&&(clearInterval(s),s=null);return}const $=((S=document.getElementById("hist-date-input"))==null?void 0:S.value)||u;if(!I){I=!0;try{B=await b($),m()}catch(q){console.error("Fetch history failed:",q);const D=document.getElementById("hist-table-body");D&&(D.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${q.message}</td></tr>`)}finally{I=!1}}},m=()=>{var H,U;const _=((H=document.getElementById("hist-loc-filter"))==null?void 0:H.value)||"",$=(((U=document.getElementById("hist-search-input"))==null?void 0:U.value)||"").trim().toLowerCase(),S=B.filter(X=>{var Z,te,se,pe;if(_&&X.location!==_||h&&(X.scanned_by||((Z=X.teachers)==null?void 0:Z.full_name)||"บันทึกมือ (เดิม)")!==h)return!1;if($){const we=(((te=X.students)==null?void 0:te.full_name)||"").toLowerCase(),me=(((se=X.students)==null?void 0:se.student_code)||"").toLowerCase(),ce=(X.main_room||"").toLowerCase(),$e=(X.scanned_by||((pe=X.teachers)==null?void 0:pe.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),ke=X.input_method==="manual"?"กรอกรหัส manual":"qr";return we.includes($)||me.includes($)||ce.includes($)||$e.includes($)||ke.includes($)}return!0}),q=S.length,D=S.filter(X=>X.status==="pray").length,L=S.filter(X=>X.status==="usor").length,C=q-D-L,O=document.getElementById("stat-hist-total"),z=document.getElementById("stat-hist-pray"),M=document.getElementById("stat-hist-usor"),F=document.getElementById("stat-hist-other");O&&(O.textContent=q),z&&(z.textContent=D),M&&(M.textContent=L),F&&(F.textContent=C);const P=new Set;B.forEach(X=>{var te;const Z=X.scanned_by||((te=X.teachers)==null?void 0:te.full_name);Z&&P.add(Z)});const R=document.getElementById("hist-operators-wrap");R&&(P.size===0?R.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(R.innerHTML=Array.from(P).map(X=>{const Z=h===X;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${X.includes("(ครู)")||X.includes("ครู")?Z?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":Z?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${X}">${Z?"✓ ":""}${X}</span>`}).join(""),R.querySelectorAll(".op-filter-chip").forEach(X=>{X.addEventListener("click",()=>{const Z=X.dataset.op;h=h===Z?"":Z,m()})})));const Y=document.getElementById("hist-table-count");Y&&(Y.textContent=`${S.length} รายการ`);const J=document.getElementById("hist-table-body");if(J){if(S.length===0){J.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}J.innerHTML=S.map((X,Z)=>{var je;const te=X.created_at?new Date(X.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",se=X.students,pe=se!=null&&se.image_url?`<img src="${se.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((se==null?void 0:se.full_name)||"?").charAt(0)}</div>`,we=se?`<div class="flex items-center gap-2.5">
              ${pe}
              <div>
                <p class="font-bold text-gray-800 leading-none">${se.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${se.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${X.student_id})</span>`,me={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[X.status]||`<span class="text-gray-400">${X.status||"—"}</span>`,ce=X.scanned_by||((je=X.teachers)==null?void 0:je.full_name)||"บันทึกมือ (เดิม)",$e=X.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",ke=X.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${S.length-Z}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${te}</td>
            <td class="px-4 py-3">${we}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${X.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${j(X.location)}">
                ${A(X.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${ce}</span>
              <div class="flex flex-wrap gap-1">${$e}${ke}</div>
            </td>
            <td class="px-4 py-3 text-center">${me}</td>
          </tr>
        `}).join("")}},k=()=>{s&&(clearInterval(s),s=null);const _=document.getElementById("hist-live-toggle");_&&_.checked&&(s=setInterval(g,4e3))};setTimeout(()=>{var S,q,D;(S=document.getElementById("btn-hist-refresh"))==null||S.addEventListener("click",g),(q=document.getElementById("hist-date-input"))==null||q.addEventListener("change",()=>{h="",g()}),(D=document.getElementById("hist-loc-filter"))==null||D.addEventListener("change",m);const _=document.getElementById("hist-search-input");_&&_.addEventListener("input",m);const $=document.getElementById("hist-live-toggle");$&&$.addEventListener("change",k),g(),k()},50)},a=(u,B=!1)=>u==null||u===""?B:["1","true","yes","on"].includes(String(u).trim().toLowerCase()),p=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${o.map(u=>`<option value="${u}">${u}</option>`).join("")}
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
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const u=document.getElementById("pr-save-cfg"),B=document.getElementById("pr-sheet-id").value.trim(),h=document.getElementById("pr-sheet-tab").value.trim()||"Solat",I=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";u.disabled=!0,u.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerSheetId",B),Ee("prayerSheetTab",h),Ee("prayerStudentRange",I)]),n.prayerSheetId=B,n.prayerSheetTab=h,n.prayerStudentRange=I,u.textContent="✅ บันทึกแล้ว",u.style.background="#16a34a",setTimeout(()=>{u.disabled=!1,u.textContent="บันทึกการตั้งค่า",u.style.background=""},1800),N("บันทึก Sheet config ละหมาดแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),u.disabled=!1,u.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var A,j,b;const u=document.getElementById("pr-save-scanner-safety"),B=(A=document.getElementById("pr-guard-male"))!=null&&A.checked?"true":"false",h=(j=document.getElementById("pr-guard-female"))!=null&&j.checked?"true":"false",I=parseInt(((b=document.getElementById("pr-manual-monthly-limit"))==null?void 0:b.value)||"2",10),E=String(Math.max(0,Math.min(31,Number.isFinite(I)?I:2)));u.disabled=!0,u.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerSameRoomGuardMaleEnabled",B),Ee("prayerSameRoomGuardFemaleEnabled",h),Ee("prayerManualEntryMonthlyLimit",E)]),n.prayerSameRoomGuardMaleEnabled=B,n.prayerSameRoomGuardFemaleEnabled=h,n.prayerManualEntryMonthlyLimit=E,N("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),u.textContent="✅ บันทึกแล้ว",setTimeout(()=>{u.disabled=!1,u.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(g){N("บันทึกไม่สำเร็จ: "+he(g),"error"),u.disabled=!1,u.textContent="บันทึกความปลอดภัยระบบสแกน"}})},w=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
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
    `;let u=[];const B=new Set;let h={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const I=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],E=m=>(m||"").split(/[\s,]+/).map(k=>k.trim()).filter(Boolean),A=m=>String(m||"").trim(),j=m=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[m]||"ทั้งหมด",b=async(m,k)=>{const _=await Ne().catch(()=>({})),$=new Set(E(_.prayerExtendedScannerStudents));k?$.add(String(m)):$.delete(String(m));const S=Array.from($).join(",");return await Ee("prayerExtendedScannerStudents",S),n.prayerExtendedScannerStudents=S,S};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const m=document.getElementById("pr-save-scanner-time-cfg"),k=document.getElementById("pr-scan-start").value.trim()||"12:20",_=document.getElementById("pr-scan-end").value.trim()||"12:50",$=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![k,_,$].every(q=>/^\d{1,2}:\d{2}$/.test(q))){N("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}m.disabled=!0,m.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerScanStartTime",k),Ee("prayerScanEndTime",_),Ee("prayerScanExtendedEndTime",$)]),n.prayerScanStartTime=k,n.prayerScanEndTime=_,n.prayerScanExtendedEndTime=$,N("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),m.textContent="✅ บันทึกแล้ว",setTimeout(()=>{m.disabled=!1,m.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(q){N("บันทึกไม่สำเร็จ: "+he(q),"error"),m.disabled=!1,m.textContent="บันทึกช่วงเวลาสแกน"}});const g=async()=>{var k,_,$;const m=document.getElementById("scanners-list-wrap");if(m)try{const{data:S,error:q}=await le.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if(q)throw q;const D=await Ne().catch(()=>({})),L=S??[],C=E(D.prayerScannerTeachers),O=new Set(E(D.prayerExtendedScannerStudents));let z=[];if(C.length>0){const{data:ce,error:$e}=await le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",C).order("teacher_code");if($e)throw $e;z=ce??[]}const M=L.length+z.length;if(document.getElementById("scanner-count-badge").textContent=`${M} คน`,M===0){m.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const F=Object.fromEntries(I.map(ce=>[ce.key,new Set(E(D[`prayerScanner${ce.key}`]))])),P=L.map(ce=>{const $e=String(ce.student_code||"").trim(),ke=I.filter(He=>{var V;return(V=F[He.key])==null?void 0:V.has($e)}).map(He=>He.key),je=O.has($e);return{...ce,type:"student",code:$e,name:ce.full_name||"",roomInfo:ce.main_room||"",gender:A(ce.gender),permission:je?"extended":"normal",permissionLabel:je?"ขยายเวลา":"ทั่วไป",assignedDays:ke,searchText:[$e,ce.full_name,ce.main_room,ce.gender,je?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),R=z.map(ce=>({...ce,type:"teacher",code:String(ce.teacher_code||"").trim(),name:ce.full_name||"",roomInfo:ce.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[ce.teacher_code,ce.full_name,ce.dept,"ครู คุณครู"].join(" ").toLowerCase()})),Y=[...P,...R],J=new Set(Y.map(ce=>`${ce.type}:${ce.code}`));B.forEach(ce=>{J.has(ce)||B.delete(ce)});const H=ze(Y.map(ce=>ce.roomInfo)),U=P.filter(ce=>ce.gender==="ชาย").length,X=P.filter(ce=>ce.gender==="หญิง").length,Z=P.filter(ce=>ce.permission==="extended").length,te=P.filter(ce=>ce.assignedDays.length===0).length,se=(ce,$e,ke="indigo")=>{const je={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${je[ke]||je.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${ce}</p>
              <p class="text-lg font-extrabold leading-tight">${$e}</p>
            </div>
          `};m.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${se("ทั้งหมด",M,"indigo")}
              ${se("ชาย",U,"emerald")}
              ${se("หญิง",X,"rose")}
              ${se("ครู",z.length,"slate")}
              ${se("ขยายเวลา",Z,"amber")}
              ${se("ยังไม่มีเวร",te,te?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${M}`],["male",`ชาย ${U}`],["female",`หญิง ${X}`],["teacher",`ครู ${z.length}`]].map(([ce,$e])=>`
                  <button type="button" data-scanner-audience="${ce}"
                    class="scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition">
                    ${$e}
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
                <button type="button" id="btn-revoke-selected-scanners" disabled
                  class="px-3 py-2 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-100 transition">
                  ถอนสิทธิ์ที่เลือก <span id="scanner-selected-count">0</span> คน
                </button>
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${j(h.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const pe=()=>{const ce=h,$e=ce.q.trim().toLowerCase();return Y.filter(ke=>!(ce.audience==="male"&&!(ke.type==="student"&&ke.gender==="ชาย")||ce.audience==="female"&&!(ke.type==="student"&&ke.gender==="หญิง")||ce.audience==="teacher"&&ke.type!=="teacher"||ce.type&&ke.type!==ce.type||ce.gender&&ke.gender!==ce.gender||ce.room&&ke.roomInfo!==ce.room||ce.permission&&ke.permission!==ce.permission||ce.day==="none"&&!(ke.type==="student"&&ke.assignedDays.length===0)||ce.day&&ce.day!=="none"&&!ke.assignedDays.includes(ce.day)||$e&&!ke.searchText.includes($e)))},we=()=>{m.querySelectorAll(".scanner-audience-tab").forEach(ke=>{const je=ke.dataset.scannerAudience===h.audience;ke.className=je?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const ce=document.getElementById("scanner-filtered-count");ce&&(ce.textContent=pe().length);const $e=document.getElementById("scanner-active-audience-label");$e&&($e.textContent=j(h.audience))},me=()=>{var ie,oe,G,K;we();const ce=pe(),$e=document.getElementById("scanner-table-wrap"),ke=document.getElementById("scanner-filtered-count");ke&&(ke.textContent=ce.length),document.getElementById("scanner-count-badge").textContent=ce.length===M?`${M} คน`:`${ce.length}/${M} คน`;const je=(oe=(ie=document.activeElement)==null?void 0:ie.id)!=null&&oe.startsWith("scanner-filter-")?document.activeElement.id:"",He=je==="scanner-filter-q"?document.activeElement.selectionStart:null;$e.innerHTML=`
            <table class="w-full text-xs min-w-[1020px]">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-3 py-3 text-center align-top"><input type="checkbox" id="scanner-select-visible" aria-label="เลือกผู้สแกนเนอร์ที่แสดงอยู่" /></th>
                  <th class="px-4 py-3 text-left align-top">
                    <span class="block mb-1">ประเภท</span>
                    <select id="scanner-filter-type" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="student" ${h.type==="student"?"selected":""}>นักเรียน</option>
                      <option value="teacher" ${h.type==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-2 py-3 text-left align-top">
                    <span class="block mb-1">รหัส/ค้นหา</span>
                    <input id="scanner-filter-q" value="${ae(h.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${H.map(W=>`<option value="${ae(W)}" ${h.room===W?"selected":""}>${ae(W)}</option>`).join("")}
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">เพศ</span>
                    <select id="scanner-filter-gender" class="w-24 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="ชาย" ${h.gender==="ชาย"?"selected":""}>ชาย</option>
                      <option value="หญิง" ${h.gender==="หญิง"?"selected":""}>หญิง</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ประเภทสิทธิ์</span>
                    <select id="scanner-filter-permission" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="normal" ${h.permission==="normal"?"selected":""}>ทั่วไป</option>
                      <option value="extended" ${h.permission==="extended"?"selected":""}>ขยายเวลา</option>
                      <option value="teacher" ${h.permission==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">วันรับผิดชอบ</span>
                    <select id="scanner-filter-day" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${I.map(W=>`<option value="${W.key}" ${h.day===W.key?"selected":""}>${W.full}</option>`).join("")}
                      <option value="none" ${h.day==="none"?"selected":""}>ยังไม่กำหนด</option>
                    </select>
                  </th>
                  <th class="px-4 py-3 text-right align-top">การจัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${ce.length?ce.map(W=>{if(W.type==="teacher")return`
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-3 py-2 text-center"><input type="checkbox" class="scanner-row-select" data-key="teacher:${ae(W.code)}" aria-label="เลือก ${ae(W.name)}" ${B.has(`teacher:${W.code}`)?"checked":""} /></td>
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${ae(W.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${W.image_url?`<img src="${ae(W.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`:'<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>'}
                            <span class="font-medium text-gray-800">${ae(W.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${ae(W.roomInfo||"—")}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${ae(W.code)}" data-name="${ae(W.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `;const re=I.map(Q=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${W.assignedDays.includes(Q.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${ae(W.code)}" data-day="${Q.key}" data-name="${ae(W.name)}" title="เวรวัน${Q.full}">
                        ${Q.label}
                      </button>
                    `).join(" ");return`
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-3 py-2 text-center"><input type="checkbox" class="scanner-row-select" data-key="student:${ae(W.code)}" aria-label="เลือก ${ae(W.name)}" ${B.has(`student:${W.code}`)?"checked":""} /></td>
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${ae(W.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${W.image_url?`<img src="${ae(W.image_url)}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                          <span class="font-medium text-gray-800">${ae(W.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${ae(W.roomInfo||"—")}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${W.gender==="หญิง"?"bg-rose-50 text-rose-700 border-rose-100":"bg-sky-50 text-sky-700 border-sky-100"} text-[10px] font-bold border">${ae(W.gender||"—")}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${W.permission==="extended"?"bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100":"bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"}"
                          data-code="${ae(W.code)}" data-name="${ae(W.name)}" data-extended="${W.permission==="extended"?"1":"0"}">
                          ${W.permission==="extended"?"ขยายเวลา":"ทั่วไป"}
                        </button>
                      </td>
                      <td class="px-3 py-2">
                        <div class="flex gap-1 items-center">
                          ${re}
                          ${W.assignedDays.length===0?'<span class="ml-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold">ยังไม่มีเวร</span>':""}
                        </div>
                      </td>
                      <td class="px-4 py-2 text-right">
                        <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                          data-id="${W.id}" data-code="${ae(W.code)}" data-name="${ae(W.name)}" data-type="student">
                          ถอนสิทธิ์
                        </button>
                      </td>
                    </tr>
                  `}).join(""):`
                  <tr>
                  <td colspan="9" class="px-4 py-10 text-center text-gray-400 text-sm">ไม่พบรายชื่อที่ตรงกับตัวกรอง</td>
                  </tr>
                `}
              </tbody>
            </table>
          `;const V=ce.map(W=>`${W.type}:${W.code}`),ue=()=>{const W=V.filter(de=>B.has(de)).length,re=document.getElementById("scanner-select-visible");re&&(re.checked=V.length>0&&W===V.length,re.indeterminate=W>0&&W<V.length);const Q=document.getElementById("scanner-selected-count");Q&&(Q.textContent=B.size);const ee=document.getElementById("btn-revoke-selected-scanners");ee&&(ee.disabled=B.size===0)};if($e.querySelectorAll(".scanner-row-select").forEach(W=>{W.addEventListener("change",()=>{W.checked?B.add(W.dataset.key):B.delete(W.dataset.key),ue()})}),(G=document.getElementById("scanner-select-visible"))==null||G.addEventListener("change",W=>{V.forEach(re=>W.currentTarget.checked?B.add(re):B.delete(re)),me()}),ue(),["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(W=>{var re;(re=document.getElementById(W))==null||re.addEventListener("change",Q=>{const ee=W.replace("scanner-filter-","");h[ee]=Q.target.value,me()})}),(K=document.getElementById("scanner-filter-q"))==null||K.addEventListener("input",W=>{h.q=W.target.value,me()}),je){const W=document.getElementById(je);W==null||W.focus(),je==="scanner-filter-q"&&He!==null&&(W==null||W.setSelectionRange(He,He))}m.querySelectorAll(".btn-toggle-extended-scanner").forEach(W=>{W.addEventListener("click",async()=>{const re=W.dataset.code,Q=W.dataset.name,ee=W.dataset.extended!=="1";W.disabled=!0,W.textContent="กำลังบันทึก...";try{await b(re,ee),N(`ปรับสิทธิ์ "${Q}" เป็น${ee?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),g()}catch(de){N("ปรับสิทธิ์ไม่สำเร็จ: "+de.message,"error"),W.disabled=!1,W.textContent=W.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),m.querySelectorAll(".btn-toggle-day-scanner").forEach(W=>{W.addEventListener("click",async()=>{var de;const re=W.dataset.code,Q=W.dataset.day,ee=W.dataset.name;W.disabled=!0;try{const ge=await Ne().catch(()=>({})),ye=`prayerScanner${Q}`;let ve=E(ge[ye]);ve.includes(re)?ve=ve.filter(_e=>_e!==re):ve.push(re),await Ee(ye,ve.join(","));const xe=((de=I.find(_e=>_e.key===Q))==null?void 0:de.full)||Q;N(`ปรับสิทธิ์เวรวัน${xe} ของ "${ee}" สำเร็จ`,"success"),g()}catch(ge){N("ปรับสิทธิ์เวรล้มเหลว: "+ge.message,"error"),W.disabled=!1}})}),m.querySelectorAll(".btn-revoke-scanner").forEach(W=>{W.addEventListener("click",async()=>{const re=W.dataset.type,Q=W.dataset.name,ee=W.dataset.code;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${Q}" หรือไม่?`))try{if(re==="student"){const de=+W.dataset.id,{error:ge}=await le.from("students").update({can_scan_prayer:!1}).eq("id",de);if(ge)throw ge;await b(ee,!1);const ye=await Ne().catch(()=>({}));for(const ve of I){const xe=`prayerScanner${ve.key}`,_e=E(ye[xe]).filter(fe=>fe!==ee);await Ee(xe,_e.join(","))}}else{const de=await Ne().catch(()=>({})),ge=E(de.prayerScannerTeachers).filter(ye=>ye!==ee);await Ee("prayerScannerTeachers",ge.join(","))}B.delete(`${re}:${ee}`),N(`ถอนสิทธิ์ "${Q}" สำเร็จ`,"success"),g()}catch(de){N("ทำรายการไม่สำเร็จ: "+de.message,"error")}})})};m.querySelectorAll("[data-scanner-audience]").forEach(ce=>{ce.addEventListener("click",()=>{h.audience=ce.dataset.scannerAudience,h.type="",h.gender="",h.audience==="teacher"&&(h.day="",h.permission=""),me()})}),(k=document.getElementById("btn-filter-unassigned-scanner"))==null||k.addEventListener("click",()=>{h.day="none",h.type="student",me()}),(_=document.getElementById("btn-reset-scanner-filters"))==null||_.addEventListener("click",()=>{h={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},me()}),me(),($=document.getElementById("btn-revoke-selected-scanners"))==null||$.addEventListener("click",async ce=>{const $e=Y.filter(V=>B.has(`${V.type}:${V.code}`));if(!$e.length)return;const ke=$e.slice(0,5).map(V=>V.name).join(", "),je=$e.length>5?` และอีก ${$e.length-5} คน`:"";if(!confirm(`ยืนยันถอนสิทธิ์สแกนละหมาด ${$e.length} คน?
${ke}${je}`))return;const He=ce.currentTarget;He.disabled=!0,He.textContent="กำลังถอนสิทธิ์...";try{const V=$e.filter(K=>K.type==="student"),ue=$e.filter(K=>K.type==="teacher");if(V.length){const{error:K}=await le.from("students").update({can_scan_prayer:!1}).in("id",V.map(W=>W.id));if(K)throw K}const ie=await Ne().catch(()=>({})),oe=new Set(V.map(K=>K.code));if(oe.size){const K=E(ie.prayerExtendedScannerStudents).filter(W=>!oe.has(W));await Ee("prayerExtendedScannerStudents",K.join(","));for(const W of I){const re=`prayerScanner${W.key}`,Q=E(ie[re]).filter(ee=>!oe.has(ee));await Ee(re,Q.join(","))}}const G=new Set(ue.map(K=>K.code));if(G.size){const K=E(ie.prayerScannerTeachers).filter(W=>!G.has(W));await Ee("prayerScannerTeachers",K.join(","))}B.clear(),N(`ถอนสิทธิ์สแกนละหมาดสำเร็จ ${$e.length} คน`,"success"),await g()}catch(V){N("ถอนสิทธิ์บางรายการไม่สำเร็จ: "+he(V),"error"),g()}})}catch(S){m.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${S.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const m=document.getElementById("pr-scanner-search-input").value.trim();if(!m){N("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const k=m.split(/[\s,]+/).map(_=>_.trim()).filter(Boolean);if(k.length)try{const[_,$]=await Promise.all([le.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",k),le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",k)]);if(_.error)throw _.error;if($.error)throw $.error;const S=_.data??[],q=$.data??[];u=[...S.map(C=>({...C,code:C.student_code,type:"student",display_info:`รหัส ${C.student_code} · ห้อง ${C.main_room||"—"} · ${C.gender||"ไม่ระบุเพศ"}`})),...q.map(C=>({...C,code:C.teacher_code,type:"teacher",display_info:`รหัสครู ${C.teacher_code} · กลุ่มสาระ ${C.dept||"—"}`}))];const D=document.getElementById("scanner-preview-container"),L=document.getElementById("scanner-preview-cards");if(!u.length){D.classList.add("hidden"),N("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}D.classList.remove("hidden"),L.innerHTML=u.map(C=>`
          <div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">
            ${C.type==="student"?C.image_url?`<img src="${C.image_url}" class="student-avatar-premium w-10 h-14" />`:'<div class="student-avatar-premium-placeholder w-10 h-14 bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">👤</div>':C.image_url?`<img src="${C.image_url}" class="w-10 h-10 rounded-full object-cover flex-shrink-0"/>`:'<div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">👨‍🏫</div>'}
            <div class="min-w-0">
              <p class="font-bold text-gray-800 text-xs truncate">
                ${C.full_name}
                ${C.type==="teacher"?'<span class="ml-1 px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">คุณครู</span>':""}
              </p>
              <p class="text-[10px] text-gray-400">${C.display_info}</p>
            </div>
          </div>
        `).join("")}catch(_){N("ค้นหาล้มเหลว: "+_.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!u.length)return;const m=document.getElementById("btn-confirm-scanner-grant");m.disabled=!0,m.textContent="⏳ กำลังบันทึก...";try{const k=u.filter($=>$.type==="student").map($=>$.id),_=u.filter($=>$.type==="teacher").map($=>$.code);if(k.length>0){const{error:$}=await le.from("students").update({can_scan_prayer:!0}).in("id",k);if($)throw $}if(_.length>0){const $=await Ne().catch(()=>({}));let S=E($.prayerScannerTeachers);_.forEach(q=>{S.includes(q)||S.push(q)}),await Ee("prayerScannerTeachers",S.join(","))}N(`มอบสิทธิ์สำเร็จ ${u.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),u=[],g()}catch(k){N("บันทึกไม่สำเร็จ: "+k.message,"error")}finally{m.disabled=!1,m.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),g()},y=u=>{s&&(clearInterval(s),s=null),document.querySelectorAll("[data-tab]").forEach(B=>{B.className=B.dataset.tab===u?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),u==="scores"?d():u==="history"?i():u==="scanners"?w():p()};document.getElementById("pr-tab-scores").addEventListener("click",()=>y("scores")),(T=document.getElementById("pr-tab-history"))==null||T.addEventListener("click",()=>y("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>y("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>y("config")),r&&((c=document.getElementById("pr-tab-scanner-cam"))==null||c.addEventListener("click",async()=>{const{renderStudentPrayerScanner:u}=await Ce(async()=>{const{renderStudentPrayerScanner:B}=await import("./student-views-sIvyw8uD.js");return{renderStudentPrayerScanner:B}},__vite__mapDeps([30,6,0,1,2,3,4,14,31,32,16,33,34,21,17,10,12,28,15,35]));u(t)})),y("scores")}function Is(e,s,t,n){var x;(x=document.getElementById("rsa-modal"))==null||x.remove();const l=!!e,o=document.createElement("div");o.id="rsa-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#rsa-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#rsa-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#rsa-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const i={name:o.querySelector("#rsa-name").value.trim(),max_score:parseInt(o.querySelector("#rsa-max").value)||20,sort_order:parseInt(o.querySelector("#rsa-order").value)||0,sheet_col:o.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:s,semester:t};l?await lo(e.id,i):await io(i),N("บันทึกสำเร็จ","success"),o.remove(),n()}catch(i){N("บันทึกไม่สำเร็จ: "+he(i),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}async function Rr(){var x,r,d,i;Ie("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let e=null,s="",t=null;try{const{data:a}=await le.auth.getSession();if(e=((r=(x=a==null?void 0:a.session)==null?void 0:x.user)==null?void 0:r.id)??null,s=((i=(d=a==null?void 0:a.session)==null?void 0:d.user)==null?void 0:i.email)??"",e){const{data:p}=await le.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",e).maybeSingle();t=p??null}}catch{}const n="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";Se(`<div class="max-w-lg mx-auto animate-fade">

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
  </div>`);const l=(a,p,w)=>{const y=document.getElementById(a);y.className=`text-xs text-center mt-2 py-2 rounded-lg ${w?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,y.textContent=p,y.classList.remove("hidden"),setTimeout(()=>y.classList.add("hidden"),3500)},o=async a=>{const{data:p,error:w}=await le.rpc("upsert_admin_teacher_profile",{p_profile_id:e,p_full_name:a.full_name??null,p_username:a.username??null,p_login_email:a.login_email??null});if(w)throw w;return p};document.getElementById("btn-save-name").addEventListener("click",async()=>{const a=document.getElementById("btn-save-name"),p=document.getElementById("adm-name").value.trim();if(!p){l("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({full_name:p,login_email:s}),l("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const w=document.getElementById("user-name");w&&(w.textContent=p)}catch(w){l("name-msg","บันทึกไม่สำเร็จ: "+he(w),!1)}finally{a.disabled=!1,a.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var y,v;const a=document.getElementById("btn-save-username"),p=document.getElementById("adm-username").value.trim().toLowerCase(),w=/^[a-z0-9._-]{3,32}$/.test(p);if(!p){l("username-msg","กรุณากรอก username",!1);return}if(!w){l("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({username:p,login_email:s}),l("username-msg",`บันทึก username "${p}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=p}catch(f){const T=(y=f.message)!=null&&y.includes("unique")||(v=f.message)!=null&&v.includes("duplicate")?`username "${p}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+he(f);l("username-msg",T,!1)}finally{a.disabled=!1,a.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",a=>{const p=a.target.selectionStart;a.target.value=a.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),a.target.setSelectionRange(p,p)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const a=document.getElementById("btn-save-email"),p=document.getElementById("adm-email").value.trim();if(!p||!p.includes("@")){l("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}a.disabled=!0,a.textContent="กำลังส่งลิงก์...";try{const{error:w}=await le.auth.updateUser({email:p});if(w)throw w;l("email-msg","ส่งลิงก์ยืนยันไปที่ "+p+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(w){l("email-msg","ไม่สำเร็จ: "+he(w),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const a=document.getElementById("btn-save-pw"),p=document.getElementById("adm-pw").value,w=document.getElementById("adm-pw2").value;if(!p||p.length<6){l("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(p!==w){l("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}a.disabled=!0,a.textContent="กำลังเปลี่ยน...";try{const{error:y}=await le.auth.updateUser({password:p});if(y)throw y;l("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(y){l("pw-msg","ไม่สำเร็จ: "+he(y),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนรหัสผ่าน"}})}async function Or(){var x;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>{document.querySelectorAll("[data-nav]").forEach(d=>{const i=d.dataset.nav===r;d.classList.toggle("bg-indigo-800",i),d.classList.toggle("text-white",i),d.classList.toggle("text-indigo-200",!i)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const n=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),l=(r,d,i,a)=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${r} ${d}</p>
      <p id="${i}-today" class="text-3xl font-extrabold ${a}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${i}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${i}-total" class="font-bold text-gray-600">—</span>
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
  </div>`);const o=async()=>{try{const r=await ko();document.getElementById("stat-teacher-today").textContent=r.teacherToday,document.getElementById("stat-teacher-month").textContent=r.teacherMonth,document.getElementById("stat-teacher-total").textContent=r.teacherTotal,document.getElementById("stat-student-today").textContent=r.studentToday,document.getElementById("stat-student-month").textContent=r.studentMonth,document.getElementById("stat-student-total").textContent=r.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{N("โหลดสถิติไม่สำเร็จ","error")}};await o(),(x=document.getElementById("stat-refresh"))==null||x.addEventListener("click",o)}async function Pr(){var x;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav===r),d.classList.toggle("text-white",d.dataset.nav===r),d.classList.toggle("text-indigo-200",d.dataset.nav!==r)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const t=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],n=async()=>{const r=await as(),d=t.map(a=>({building:a,rooms:r.filter(p=>p.building===a)}));[...new Set(r.map(a=>a.building).filter(a=>!t.includes(a)))].forEach(a=>d.push({building:a,rooms:r.filter(p=>p.building===a)})),document.getElementById("crm-content").innerHTML=d.filter(a=>a.rooms.length>0).map(a=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50 bg-gray-50/50">
          <h3 class="font-bold text-gray-700">🏫 ${a.building}
            <span class="text-xs font-normal text-gray-400 ml-1">${a.rooms.length} ห้อง</span>
          </h3>
          <button class="crm-add-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            data-building="${a.building}">＋ เพิ่มห้อง</button>
        </div>
        <div class="divide-y divide-gray-50">
          ${a.rooms.map(p=>`
          <div class="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition" data-id="${p.id}">
            <span class="w-20 font-mono text-sm font-semibold text-indigo-700 flex-shrink-0">${p.room_number}</span>
            <span class="flex-1 text-sm text-gray-700">${p.name??"—"}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${p.is_teaching_room?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-500"}">
              ${p.is_teaching_room?"ห้องเรียน":"ห้องพิเศษ"}
            </span>
            <button class="crm-edit-btn text-xs text-indigo-400 hover:text-indigo-700 px-2" data-id="${p.id}">แก้ไข</button>
            <button class="crm-del-btn text-xs text-red-400 hover:text-red-600 px-1" data-id="${p.id}">ลบ</button>
          </div>`).join("")}
        </div>
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(a=>{a.addEventListener("click",()=>o(null,a.dataset.building,r))}),document.querySelectorAll(".crm-edit-btn").forEach(a=>{const p=r.find(w=>w.id===parseInt(a.dataset.id));p&&a.addEventListener("click",()=>o(p,p.building,r))}),document.querySelectorAll(".crm-del-btn").forEach(a=>{a.addEventListener("click",()=>{const p=r.find(w=>w.id===parseInt(a.dataset.id));l(p)})})},l=r=>{var i;(i=document.getElementById("crm-confirm"))==null||i.remove();const d=document.createElement("div");d.id="crm-confirm",d.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",d.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${r==null?void 0:r.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${r==null?void 0:r.building}${r!=null&&r.name?" · "+r.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(d),d.querySelector("#crm-conf-no").addEventListener("click",()=>d.remove()),d.querySelector("#crm-conf-yes").addEventListener("click",async()=>{d.remove();try{await Xn(r.id),N("ลบห้องแล้ว ✅","success"),n()}catch(a){N("ลบไม่สำเร็จ: "+he(a),"error")}})},o=(r,d,i)=>{var w;(w=document.getElementById("crm-modal"))==null||w.remove();const a=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...i.map(y=>y.building)])],p=document.createElement("div");p.id="crm-modal",p.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",p.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${r?"แก้ไขห้อง":"เพิ่มห้องใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${a.map(y=>`<option value="${y}" ${y===((r==null?void 0:r.building)??d)?"selected":""}>${y}</option>`).join("")}
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
    </div>`,document.body.appendChild(p),p.querySelector("#crm-cancel").addEventListener("click",()=>p.remove()),p.querySelector("#crm-save").addEventListener("click",async()=>{const y=p.querySelector("#crm-save"),v=p.querySelector("#crm-building").value,f=p.querySelector("#crm-number").value.trim(),T=p.querySelector("#crm-name").value.trim()||null,c=p.querySelector("#crm-teaching").checked;if(!v||!f){N("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}y.disabled=!0,y.textContent="⏳";try{r?await Un(r.id,{building:v,room_number:f,name:T,is_teaching_room:c}):await Vn({building:v,room_number:f,name:T,is_teaching_room:c}),N(r?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),p.remove(),n()}catch(u){N("บันทึกไม่สำเร็จ: "+he(u),"error"),y.disabled=!1,y.textContent="บันทึก"}})};e(`<div class="max-w-3xl mx-auto animate-fade">
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
  </div>`),await n(),(x=document.getElementById("crm-add-new"))==null||x.addEventListener("click",async()=>{const r=await as().catch(()=>[]);o(null,"อาคาร 1",r)})}const _i=(e,s=[])=>[1,2,3,4,5,6,7,8,9].map(t=>{const n=s.includes(t);return`<button type="button" data-period="${t}"
      class="${e}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${n?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-400"}">${t}</button>`}).join(""),Xa=(e,s,t="",n=[])=>`
  <div class="${e}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${e}-session-label text-xs font-semibold text-violet-700">วันที่ ${s+1}</span>
      <button type="button" class="${e}-session-remove ${s===0?"hidden":""} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${e}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${t}"/>
    <div class="flex flex-wrap gap-1.5 ${e}-session-pills">${_i(e,n)}</div>
  </div>`;function zr(e,s){const t=e.querySelector(`#${s}-sessions-list`),n=()=>{t.querySelectorAll(`.${s}-session-pill`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{const x=o.classList.contains("bg-violet-600");o.className=`${s}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${x?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),t.querySelectorAll(`.${s}-session-remove`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{o.closest(`.${s}-session`).remove(),l()})})},l=()=>{const o=[...t.querySelectorAll(`.${s}-session`)];o.forEach((x,r)=>{x.querySelector(`.${s}-session-label`).textContent=`วันที่ ${r+1}`,x.querySelector(`.${s}-session-remove`).classList.toggle("hidden",o.length<=1)}),n()};e.querySelector(`#${s}-add-session`).addEventListener("click",()=>{const o=t.querySelectorAll(`.${s}-session`).length,x=document.createElement("div");x.innerHTML=Xa(s,o),t.appendChild(x.firstElementChild),l()}),n()}function Fr(e,s){return[...e.querySelectorAll(`.${s}-session`)].map(t=>({date:t.querySelector(`.${s}-session-date`).value,periods:[...t.querySelectorAll(`.${s}-session-pill.bg-violet-600`)].map(n=>parseInt(n.dataset.period))}))}const $i={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},Ur=e=>$i[e]??"",Vr=e=>{var t,n;const s=(((t=e.target_teacher_ids)==null?void 0:t.length)??0)+(((n=e.target_student_ids)==null?void 0:n.length)??0);return s?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${s} คน</span>`:""};async function Gr(e,s,t="all"){try{const n=t==="teacher"?["all_teachers"]:t==="student"?["all_students"]:t==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(n.map(l=>le.functions.invoke("send-push",{body:{title:`📢 ${e}`,body:(s??"").slice(0,150),url:l==="all_students"?"student.html":"teacher.html",target:l}})))}catch{}}let Ta=null;function Wr(){return Ta||(Ta=Promise.all([Pe(),Et()]).then(([e,s])=>({teachers:e,students:s})).catch(()=>({teachers:[],students:[]}))),Ta}async function Yr(){var x;Ie("announcements"),document.getElementById("page-title").textContent="ประกาศ";const e=r=>String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=r=>new Date(r).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});Se(`<div class="animate-fade">
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
  </div>`);const t=async()=>{const r=document.getElementById("ann-list");if(!r)return;let d;try{d=await Ps()}catch{r.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!d.length){r.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const i={};try{(await To(d.map(p=>p.id))).forEach(p=>{i[p.announcement_id]=(i[p.announcement_id]??0)+1})}catch{}r.innerHTML=d.map(a=>{var p,w;return`
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
              ${Ur(a.audience)}
              ${Vr(a)}
              ${a.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${e(a.title)}</h3>
            ${a.ann_type==="training"&&a.event_date?`
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📅 ${s(a.event_date)}</span>
                ${a.event_location?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📍 ${e(a.event_location)}</span>`:""}
                ${(p=a.event_periods)!=null&&p.length?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${a.event_periods.sort((y,v)=>y-v).join(", ")}</span>`:""}
              </div>`:a.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">${e(a.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">
              ${s(a.created_at)}
              ${(w=a.teachers)!=null&&w.full_name?` · 📝 ${e(a.teachers.full_name)}`:" · ⚙️ แอดมิน"}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${a.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${a.id}" data-title="${e(a.title)}">💬 ${i[a.id]??0} ความคิดเห็น</button>
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
      </div>`}).join(""),r.querySelectorAll(".ann-toggle-btn").forEach(a=>{a.addEventListener("click",async()=>{const p=Number(a.dataset.id),w=a.dataset.active==="true";a.disabled=!0,a.textContent="...";try{await ya(p,{isActive:!w}),await t()}catch{N("บันทึกไม่สำเร็จ","error"),a.disabled=!1}})}),r.querySelectorAll(".ann-edit-btn").forEach(a=>{a.addEventListener("click",()=>{const p=d.find(w=>w.id===Number(a.dataset.id));p&&o(p,t)})}),r.querySelectorAll(".ann-del-btn").forEach(a=>{a.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${a.dataset.title}" ?`)){a.disabled=!0;try{await jo(Number(a.dataset.id)),await t()}catch{N("ลบไม่สำเร็จ","error"),a.disabled=!1}}})}),r.querySelectorAll(".ann-rsvp-list-btn").forEach(a=>{a.addEventListener("click",async()=>l(Number(a.dataset.id),a.dataset.title))}),r.querySelectorAll(".ann-comments-view-btn").forEach(a=>{a.addEventListener("click",async()=>n(Number(a.dataset.id),a.dataset.title,t))})},n=async(r,d,i)=>{const a=await Oo(r).catch(()=>[]),p=y=>new Date(y).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),w=document.createElement("div");w.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",w.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${e(d)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${a.length?a.map(y=>{var v,f;return`
            <div class="flex items-start gap-2" data-comment-id="${y.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${e((((v=y.teachers)==null?void 0:v.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${e(((f=y.teachers)==null?void 0:f.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${y.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${e(y.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${p(y.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(w),w.querySelector("#comments-list-close").onclick=()=>w.remove(),w.addEventListener("click",y=>{y.target===w&&w.remove()}),w.querySelectorAll(".comment-del-btn").forEach(y=>{y.addEventListener("click",async()=>{var v;if(confirm("ลบความคิดเห็นนี้?"))try{await Po(Number(y.dataset.id)),(v=w.querySelector(`[data-comment-id="${y.dataset.id}"]`))==null||v.remove(),await(i==null?void 0:i())}catch(f){N("ลบไม่สำเร็จ: "+he(f),"error")}})})},l=async(r,d)=>{const{getAnnouncementRsvps:i}=await Ce(async()=>{const{getAnnouncementRsvps:f}=await import("./api-BQaMiX9s.js");return{getAnnouncementRsvps:f}},__vite__mapDeps([0,1,2,3,4])),a=await i(r).catch(()=>[]),p={yes:[],maybe:[],no:[]};a.forEach(f=>{p[f.response]&&p[f.response].push(f)});const w=f=>{var T,c;return`<li class="text-sm text-gray-700">${e(((T=f.teachers)==null?void 0:T.full_name)??"?")} <span class="text-xs text-gray-400">${((c=f.teachers)==null?void 0:c.dept)??""}</span></li>`},y=(f,T,c,u)=>p[f].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${u} mb-1.5">${T} ${c} (${p[f].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${p[f].map(w).join("")}</ul>
      </div>`:"",v=document.createElement("div");v.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",v.innerHTML=`
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
          ${y("yes","✅","สนใจเข้าร่วมแน่นอน","text-emerald-700")}
          ${y("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
          ${y("no","❌","ไม่สนใจ","text-gray-500")}
          ${a.length?`<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${a.length} คน</p>`:""}
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#rsvp-list-close").onclick=()=>v.remove(),v.addEventListener("click",f=>{f.target===v&&v.remove()})},o=(r,d)=>{var j;(j=document.getElementById("ann-modal"))==null||j.remove();const i=document.createElement("div");i.id="ann-modal",i.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const a=!!(r!=null&&r.id);i.innerHTML=`
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
                ${Xa("ann",0,(r==null?void 0:r.event_date)??"",(r==null?void 0:r.event_periods)??[])}
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
      </div>`,document.body.appendChild(i);const p=()=>i.remove();i.querySelector("#ann-modal-close").onclick=p,i.querySelector("#ann-modal-cancel").onclick=p,i.addEventListener("click",b=>{b.target===i&&p()});let w=null,y=null;Wr().then(({teachers:b,students:g})=>{document.body.contains(i)&&(w=za({wrap:i.querySelector("#ann-target-teachers-wrap"),chipsWrap:i.querySelector("#ann-target-teachers-chips"),teachers:b,value:(r==null?void 0:r.target_teacher_ids)??[]}),y=As({wrap:i.querySelector("#ann-target-students-wrap"),chipsWrap:i.querySelector("#ann-target-students-chips"),students:g,value:(r==null?void 0:r.target_student_ids)??[]}))});const v=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],f=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],T=(b,g)=>{const m=document.createElement("div");m.className="mt-1.5 hidden",m.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${g.map(k=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${k}">${k}</button>`).join("")}
        </div>`,b.parentNode.appendChild(m),b.addEventListener("focus",()=>m.classList.remove("hidden")),b.addEventListener("blur",()=>setTimeout(()=>m.classList.add("hidden"),150)),m.querySelectorAll(".ann-chip").forEach(k=>{k.addEventListener("mousedown",_=>_.preventDefault()),k.addEventListener("click",()=>{b.value.trim()?b.value+=(b.tagName==="TEXTAREA"?`
`:" ")+k.dataset.val:b.value=k.dataset.val,b.focus()})})};T(i.querySelector("#ann-title"),v),T(i.querySelector("#ann-body"),f);let c=(r==null?void 0:r.file_url)??null;const u=i.querySelector("#ann-image-status"),B=i.querySelector("#ann-image-preview"),h=i.querySelector("#ann-image-preview-img");i.querySelector("#ann-image-file").addEventListener("change",async b=>{var m;const g=(m=b.target.files)==null?void 0:m[0];if(g){u.textContent="กำลังอัปโหลด...";try{c=await Ks(g),h.src=c,B.classList.remove("hidden"),u.textContent="อัปโหลดสำเร็จ ✅"}catch(k){u.textContent="อัปโหลดไม่สำเร็จ: "+he(k)}b.target.value=""}}),i.querySelector("#ann-image-remove").addEventListener("click",()=>{c=null,B.classList.add("hidden"),u.textContent=""});let I=[];i.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const b=i.querySelector("#ann-cal-picker");if(!b.classList.contains("hidden")){b.classList.add("hidden");return}b.classList.remove("hidden");const g=i.querySelector("#ann-cal-event-sel");if(g.options.length<=1)try{const{getWorkCalendarEvents:m,getSystemConfig:k}=await Ce(async()=>{const{getWorkCalendarEvents:q,getSystemConfig:D}=await import("./api-BQaMiX9s.js");return{getWorkCalendarEvents:q,getSystemConfig:D}},__vite__mapDeps([0,1,2,3,4]));let _=new Date().getFullYear()+543,$=1;try{const q=await k();_=q.academicYear??q.academic_year??_,$=q.semester??$}catch{}I=await m(_,$);const S={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};I.forEach(q=>{const D=document.createElement("option");D.value=q.id;const L=q.event_type==="inspection"&&q.round_number?` ครั้งที่ ${q.round_number}`:"",C=new Date(q.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});D.textContent=`${S[q.event_type]??"📌"}${L} ${q.label} (${C})`,g.appendChild(D)})}catch(m){g.innerHTML=`<option>โหลดไม่สำเร็จ: ${m.message}</option>`}}),i.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const b=+i.querySelector("#ann-cal-event-sel").value,g=I.find(S=>S.id===b),m=i.querySelector("#ann-cal-preview"),k=i.querySelector("#ann-cal-fill");if(!g){m.classList.add("hidden"),k.classList.add("hidden");return}const _=(g.work_calendar_items||[]).sort((S,q)=>S.sort_order-q.sort_order),$=new Date(g.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});m.innerHTML=`<p class="font-semibold">${g.label}</p>
        <p class="text-indigo-600">📅 ${$}${g.event_type==="inspection"&&g.round_number?` · ครั้งที่ ${g.round_number}`:""}</p>
        ${g.description?`<p>${g.description}</p>`:""}
        ${_.length?`<ul class="mt-1 space-y-0.5">${_.map(S=>`<li>☑ ${S.item_label}</li>`).join("")}</ul>`:""}`,m.classList.remove("hidden"),k.classList.remove("hidden")}),i.querySelector("#ann-cal-fill").addEventListener("click",()=>{const b=+i.querySelector("#ann-cal-event-sel").value,g=I.find(S=>S.id===b);if(!g)return;const m=(g.work_calendar_items||[]).sort((S,q)=>S.sort_order-q.sort_order),k=new Date(g.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),_=g.event_type==="inspection"&&g.round_number?` ครั้งที่ ${g.round_number}`:"";i.querySelector("#ann-title").value=g.label+(_?` (${_.trim()})`:"");const $=[];g.description&&$.push(g.description),m.length&&($.push("สิ่งที่ต้องเตรียม:"),m.forEach(S=>$.push(`• ${S.item_label}`))),$.push(`กำหนดวันที่: ${k}`),i.querySelector("#ann-body").value=$.join(`
`),g.event_date&&(i.querySelector("#ann-due").value=g.event_date),i.querySelector("#ann-cal-picker").classList.add("hidden")}),i.querySelectorAll(".ann-type-btn").forEach(b=>{b.addEventListener("click",()=>{const g=b.dataset.type;i.querySelectorAll(".ann-type-btn").forEach(m=>{const k=m.dataset.type==="training";m.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${m.dataset.type===g?k?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":k?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),i.querySelector("#ann-training-fields").classList.toggle("hidden",g!=="training")})});const E=b=>b==="teacher"?"bg-sky-600 text-white border-sky-600":b==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",A=b=>b==="teacher"?"hover:border-sky-300":b==="student"?"hover:border-teal-300":"hover:border-indigo-300";i.querySelectorAll(".ann-audience-btn").forEach(b=>{b.addEventListener("click",()=>{i.querySelectorAll(".ann-audience-btn").forEach(g=>{g.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${g.dataset.audience===b.dataset.audience?E(g.dataset.audience):`bg-white text-gray-600 border-gray-200 ${A(g.dataset.audience)}`}`})})}),zr(i,"ann"),i.querySelectorAll(".ann-filter-btn").forEach(b=>{b.addEventListener("click",()=>{i.querySelectorAll(".ann-filter-btn").forEach(g=>{g.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${g.dataset.filter===b.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),i.querySelector("#ann-modal-save").addEventListener("click",async()=>{var F,P;const b=i.querySelector("#ann-title").value.trim();if(!b){N("กรุณากรอกหัวข้อ","warning");return}const g=i.querySelector("#ann-body").value.trim()||null,m=i.querySelector("#ann-active-toggle").dataset.on==="true",k=i.querySelector("#ann-pin").dataset.on==="true"?1:0,_=i.querySelector("#ann-ack").dataset.on==="true",$=i.querySelector("#ann-due").value||null,S=i.querySelector(".ann-type-btn.bg-violet-600")||(r==null?void 0:r.ann_type)==="training"?"training":"general",q=((F=i.querySelector(".ann-audience-btn.text-white"))==null?void 0:F.dataset.audience)??(r==null?void 0:r.audience)??"all",D=i.querySelector("#ann-video-url").value.trim()||null,L=S==="training"&&i.querySelector("#ann-event-location").value.trim()||null,C=((P=i.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:P.dataset.filter)??(r==null?void 0:r.schedule_filter)??"all",O=(w==null?void 0:w.getValue())??(r==null?void 0:r.target_teacher_ids)??[],z=(y==null?void 0:y.getValue())??(r==null?void 0:r.target_student_ids)??[];if(S==="training"){if(!L){N("กรุณาระบุสถานที่","warning");return}const R=Fr(i,"ann");for(const J of R){if(!J.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!J.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const Y=i.querySelector("#ann-modal-save");Y.disabled=!0,Y.textContent="กำลังบันทึก...";try{a?await ya(r.id,{title:b,body:g,isActive:m,priority:k,requiresAck:_,dueDate:$,annType:S,eventDate:R[0].date,eventPeriods:R[0].periods,eventLocation:L,scheduleFilter:C,fileUrl:c,videoUrl:D,audience:q,targetTeacherIds:O,targetStudentIds:z}):R.length>1?(await Promise.all(R.map(J=>fa({title:b,body:g,isActive:m,priority:k,requiresAck:_,dueDate:$,annType:S,eventDate:J.date,eventPeriods:J.periods,eventLocation:L,scheduleFilter:C,fileUrl:c,videoUrl:D,audience:q,targetTeacherIds:O,targetStudentIds:z}))),N(`สร้าง ${R.length} ประกาศสำเร็จ ✅`,"success")):(await fa({title:b,body:g,isActive:m,priority:k,requiresAck:_,dueDate:$,annType:S,eventDate:R[0].date,eventPeriods:R[0].periods,eventLocation:L,scheduleFilter:C,fileUrl:c,videoUrl:D,audience:q,targetTeacherIds:O,targetStudentIds:z}),N("บันทึกสำเร็จ ✅","success")),p(),await d()}catch(J){N("บันทึกไม่สำเร็จ: "+he(J),"error"),Y.disabled=!1,Y.textContent="บันทึก"}return}const M=i.querySelector("#ann-modal-save");M.disabled=!0,M.textContent="กำลังบันทึก...";try{a?await ya(r.id,{title:b,body:g,isActive:m,priority:k,requiresAck:_,dueDate:$,annType:S,fileUrl:c,videoUrl:D,audience:q,targetTeacherIds:O,targetStudentIds:z}):await fa({title:b,body:g,isActive:m,priority:k,requiresAck:_,dueDate:$,annType:S,fileUrl:c,videoUrl:D,audience:q,targetTeacherIds:O,targetStudentIds:z}),!a&&m&&Gr(b,g,q),N("บันทึกสำเร็จ ✅","success"),p(),await d()}catch(R){N("บันทึกไม่สำเร็จ: "+he(R),"error"),M.disabled=!1,M.textContent="บันทึก"}})};(x=document.getElementById("ann-create-btn"))==null||x.addEventListener("click",()=>o(null,t)),await t()}async function Kr(){Ie("autoscale-history"),document.getElementById("page-title").textContent="ประวัติปรับกำลังเครื่องอัตโนมัติ";const e=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=o=>new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),t=o=>o.includes("🔴")?{label:"ล้มเหลว",cls:"bg-red-100 text-red-700"}:o.includes("⚠️")?{label:"อัปเกรด",cls:"bg-amber-100 text-amber-700"}:o.includes("✅")?{label:"ลดระดับ",cls:"bg-emerald-100 text-emerald-700"}:o.includes("🧪")?{label:"ทดสอบ",cls:"bg-gray-100 text-gray-600"}:{label:"เหตุการณ์",cls:"bg-gray-100 text-gray-600"};Se(`<div class="animate-fade">
    <p class="text-xs text-gray-400 mb-6">บันทึกอัตโนมัติทุกครั้งที่ระบบปรับขนาด compute (Micro ↔ Medium) แยกจากหน้าประกาศทั่วไป</p>
    <div id="autoscale-history-wrap" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const n=document.getElementById("autoscale-history-wrap");let l;try{l=(await Ps()).filter(o=>o.ann_type==="system")}catch{n.innerHTML='<p class="text-red-400 text-sm p-6">โหลดไม่สำเร็จ</p>';return}if(!l.length){n.innerHTML=`<div class="p-16 text-center text-gray-400">
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
          ${l.map(o=>{const x=t(o.title||"");return`<tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 align-top">
              <td class="px-5 py-3.5 whitespace-nowrap text-gray-500 font-mono text-xs">${s(o.created_at)}</td>
              <td class="px-5 py-3.5 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${x.cls}">${x.label}</span>
              </td>
              <td class="px-5 py-3.5 text-gray-700">${e(o.body||o.title||"")}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`}const ki={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},Si=e=>ki[e]??"แอดมิน",Ei=e=>e?e.startsWith("academic")?"bg-blue-100 text-blue-700":e.startsWith("registrar")?"bg-violet-100 text-violet-700":e==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function Li(e,s=!1){var f,T;const{getMyAnnouncements:t,createAnnouncement:n,updateAnnouncement:l,deleteAnnouncement:o,getAckStats:x,getAnnouncementCommentsBulk:r,getAnnouncementComments:d,deleteAnnouncementComment:i}=await Ce(async()=>{const{getMyAnnouncements:c,createAnnouncement:u,updateAnnouncement:B,deleteAnnouncement:h,getAckStats:I,getAnnouncementCommentsBulk:E,getAnnouncementComments:A,deleteAnnouncementComment:j}=await import("./api-BQaMiX9s.js");return{getMyAnnouncements:c,createAnnouncement:u,updateAnnouncement:B,deleteAnnouncement:h,getAckStats:I,getAnnouncementCommentsBulk:E,getAnnouncementComments:A,deleteAnnouncementComment:j}},__vite__mapDeps([0,1,2,3,4])),a=((f=e==null?void 0:e.positions)!=null&&f.length?e.positions[0]:e==null?void 0:e.position)??null;Ie("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const p=c=>String(c??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),w=c=>new Date(c).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});Se(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${Ei(a)}">${Si(a)}</span>
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
  </div>`);const y=async()=>{const c=document.getElementById("sann-list");if(!c)return;let u;try{u=await t(e.id)}catch{c.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!u.length){c.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const B=E=>E?new Date(E).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",h=E=>{if(!E)return"";const A=Math.ceil((new Date(E)-new Date)/864e5);return A<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${B(E)}</span>`:A<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${B(E)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${B(E)}</span>`},I={};try{(await r(u.map(A=>A.id))).forEach(A=>{I[A.announcement_id]=(I[A.announcement_id]??0)+1})}catch{}c.innerHTML=u.map(E=>`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${E.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${E.id}">
        ${E.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':E.is_active?'<div class="h-1 bg-gradient-to-r from-indigo-400 to-blue-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${E.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${E.priority>0?"📌":E.requires_ack?"🔔":E.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold
                ${E.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${E.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${E.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${E.requires_ack?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${Ur(E.audience)}
              ${Vr(E)}
              ${E.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${h(E.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${p(E.title)}</h3>
            ${E.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${p(E.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${w(E.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${E.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${E.id}" data-title="${p(E.title)}">💬 ${I[E.id]??0} ความคิดเห็น</button>
              <span>👁️ ${E.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${E.requires_ack?`<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${E.id}" data-title="${p(E.title)}">📊 สถิติ</button>`:""}
            ${E.ann_type==="training"?`<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${E.id}" data-title="${p(E.title)}">👥 รายชื่อ</button>`:""}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${E.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${E.id}" data-active="${E.is_active}">
              ${E.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${E.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${E.id}" data-title="${p(E.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join(""),c.querySelectorAll(".sann-stat-btn").forEach(E=>{E.addEventListener("click",async()=>{const A=Number(E.dataset.id),j=E.dataset.title,b=document.getElementById("sann-stat-modal");b&&b.remove();const g=document.createElement("div");g.id="sann-stat-modal",g.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",g.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${p(j)}</p>
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
          </div>`,document.body.appendChild(g),g.querySelector("#sann-stat-close").onclick=()=>g.remove(),g.addEventListener("click",m=>{m.target===g&&g.remove()});try{const{acked:m,pending:k}=await x(A),_=g.querySelector("#sann-stat-body"),$=S=>new Date(S).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});_.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${m.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${k.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${m.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${m.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${m.map(S=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${p(S.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${$(S.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${k.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${k.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${k.map(S=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${p(S.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{g.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),c.querySelectorAll(".sann-rsvp-list-btn").forEach(E=>{E.addEventListener("click",async()=>{const{getAnnouncementRsvps:A}=await Ce(async()=>{const{getAnnouncementRsvps:$}=await import("./api-BQaMiX9s.js");return{getAnnouncementRsvps:$}},__vite__mapDeps([0,1,2,3,4])),j=await A(Number(E.dataset.id)).catch(()=>[]),b=E.dataset.title,g={yes:[],maybe:[],no:[],none:[]};j.forEach($=>(g[$.response]??g.none).push($));const m=$=>{var S,q;return`<li class="text-sm text-gray-700">${p(((S=$.teachers)==null?void 0:S.full_name)??"?")} <span class="text-xs text-gray-400">${((q=$.teachers)==null?void 0:q.dept)??""}</span></li>`},k=($,S,q,D)=>g[$].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${D} mb-1">${S} ${q} (${g[$].length})</p>
            <ul class="space-y-0.5 pl-3">${g[$].map(m).join("")}</ul>
          </div>`:"",_=document.createElement("div");_.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",_.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${b}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${j.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${k("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${k("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${k("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(_),_.querySelector("#rsvp-list-close").onclick=()=>_.remove(),_.addEventListener("click",$=>{$.target===_&&_.remove()})})}),c.querySelectorAll(".ann-comments-view-btn").forEach(E=>{E.addEventListener("click",async()=>{const A=Number(E.dataset.id),j=E.dataset.title,b=await d(A).catch(()=>[]),g=k=>new Date(k).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),m=document.createElement("div");m.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${p(j)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${b.length?b.map(k=>{var _,$;return`
                <div class="flex items-start gap-2" data-comment-id="${k.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${p((((_=k.teachers)==null?void 0:_.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${p((($=k.teachers)==null?void 0:$.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${k.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${p(k.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${g(k.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(m),m.querySelector("#comments-list-close").onclick=()=>m.remove(),m.addEventListener("click",k=>{k.target===m&&m.remove()}),m.querySelectorAll(".comment-del-btn").forEach(k=>{k.addEventListener("click",async()=>{var _;if(confirm("ลบความคิดเห็นนี้?"))try{await i(Number(k.dataset.id)),(_=m.querySelector(`[data-comment-id="${k.dataset.id}"]`))==null||_.remove(),await y()}catch($){N("ลบไม่สำเร็จ: "+he($),"error")}})})})}),c.querySelectorAll(".sann-toggle-btn").forEach(E=>{E.addEventListener("click",async()=>{E.disabled=!0;try{await l(Number(E.dataset.id),{isActive:E.dataset.active!=="true"}),await y()}catch{N("บันทึกไม่สำเร็จ","error"),E.disabled=!1}})}),c.querySelectorAll(".sann-edit-btn").forEach(E=>{E.addEventListener("click",()=>{const A=u.find(j=>j.id===Number(E.dataset.id));A&&v(A)})}),c.querySelectorAll(".sann-del-btn").forEach(E=>{E.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${E.dataset.title}" ?`)){E.disabled=!0;try{await o(Number(E.dataset.id)),await y()}catch{N("ลบไม่สำเร็จ","error"),E.disabled=!1}}})})},v=(c=null)=>{var D;(D=document.getElementById("sann-modal"))==null||D.remove();const u=document.createElement("div");u.id="sann-modal",u.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const B=!!(c!=null&&c.id);u.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${B?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${p((c==null?void 0:c.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${p((c==null?void 0:c.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${c!=null&&c.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${p((c==null?void 0:c.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${p((c==null?void 0:c.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ (admin เท่านั้นที่เปลี่ยนประเภทได้) -->
          ${s?`
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((c==null?void 0:c.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(c==null?void 0:c.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>`:""}
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((c==null?void 0:c.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(c==null?void 0:c.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(c==null?void 0:c.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(c==null?void 0:c.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
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
          <div id="sann-training-fields" class="${(c==null?void 0:c.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="sann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${p((c==null?void 0:c.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${Xa("sann",0,(c==null?void 0:c.event_date)??"",(c==null?void 0:c.event_periods)??[])}
              </div>
              ${B?'<div id="sann-add-session" class="hidden"></div>':`<button type="button" id="sann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((c==null?void 0:c.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((c==null?void 0:c.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="sann-active-toggle" data-on="${(c==null?void 0:c.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(c==null?void 0:c.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(c==null?void 0:c.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="sann-pin" data-on="${((c==null?void 0:c.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((c==null?void 0:c.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((c==null?void 0:c.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
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
              <button type="button" id="sann-ack" data-on="${c!=null&&c.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${c!=null&&c.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="sann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(c==null?void 0:c.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button id="sann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="sann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(u);const h=()=>u.remove();u.querySelector("#sann-modal-close").onclick=h,u.querySelector("#sann-modal-cancel").onclick=h,u.addEventListener("click",L=>{L.target===u&&h()});let I=null,E=null;Wr().then(({teachers:L,students:C})=>{document.body.contains(u)&&(I=za({wrap:u.querySelector("#sann-target-teachers-wrap"),chipsWrap:u.querySelector("#sann-target-teachers-chips"),teachers:L,value:(c==null?void 0:c.target_teacher_ids)??[]}),E=As({wrap:u.querySelector("#sann-target-students-wrap"),chipsWrap:u.querySelector("#sann-target-students-chips"),students:C,value:(c==null?void 0:c.target_student_ids)??[]}))});const A=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],j=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],b=(L,C)=>{const O=document.createElement("div");O.className="mt-1.5 hidden",O.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${C.map(z=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${z}">${z}</button>`).join("")}
        </div>`,L.parentNode.appendChild(O),L.addEventListener("focus",()=>O.classList.remove("hidden")),L.addEventListener("blur",()=>setTimeout(()=>O.classList.add("hidden"),150)),O.querySelectorAll(".sann-chip").forEach(z=>{z.addEventListener("mousedown",M=>M.preventDefault()),z.addEventListener("click",()=>{L.value.trim()?L.value+=(L.tagName==="TEXTAREA"?`
`:" ")+z.dataset.val:L.value=z.dataset.val,L.focus()})})};b(u.querySelector("#sann-title"),A),b(u.querySelector("#sann-body"),j);let g=(c==null?void 0:c.file_url)??null;const m=u.querySelector("#sann-image-status"),k=u.querySelector("#sann-image-preview"),_=u.querySelector("#sann-image-preview-img");u.querySelector("#sann-image-file").addEventListener("change",async L=>{var O;const C=(O=L.target.files)==null?void 0:O[0];if(C){m.textContent="กำลังอัปโหลด...";try{g=await Ks(C),_.src=g,k.classList.remove("hidden"),m.textContent="อัปโหลดสำเร็จ ✅"}catch(z){m.textContent="อัปโหลดไม่สำเร็จ: "+he(z)}L.target.value=""}}),u.querySelector("#sann-image-remove").addEventListener("click",()=>{g=null,k.classList.add("hidden"),m.textContent=""});let $=[];u.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const L=u.querySelector("#sann-cal-picker");if(!L.classList.contains("hidden")){L.classList.add("hidden");return}L.classList.remove("hidden");const C=u.querySelector("#sann-cal-event-sel");if(C.options.length<=1)try{const{getWorkCalendarEvents:O,getSystemConfig:z}=await Ce(async()=>{const{getWorkCalendarEvents:R,getSystemConfig:Y}=await import("./api-BQaMiX9s.js");return{getWorkCalendarEvents:R,getSystemConfig:Y}},__vite__mapDeps([0,1,2,3,4]));let M=new Date().getFullYear()+543,F=1;try{const R=await z();M=R.academicYear??R.academic_year??M,F=R.semester??F}catch{}$=await O(M,F);const P={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};$.forEach(R=>{const Y=document.createElement("option");Y.value=R.id;const J=R.event_type==="inspection"&&R.round_number?` ครั้งที่ ${R.round_number}`:"",H=new Date(R.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});Y.textContent=`${P[R.event_type]??"📌"}${J} ${R.label} (${H})`,C.appendChild(Y)})}catch(O){C.innerHTML=`<option>โหลดไม่สำเร็จ: ${O.message}</option>`}}),u.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const L=+u.querySelector("#sann-cal-event-sel").value,C=$.find(P=>P.id===L),O=u.querySelector("#sann-cal-preview"),z=u.querySelector("#sann-cal-fill");if(!C){O.classList.add("hidden"),z.classList.add("hidden");return}const M=(C.work_calendar_items||[]).sort((P,R)=>P.sort_order-R.sort_order),F=new Date(C.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});O.innerHTML=`<p class="font-semibold">${C.label}</p>
        <p class="text-indigo-600">📅 ${F}${C.event_type==="inspection"&&C.round_number?` · ครั้งที่ ${C.round_number}`:""}</p>
        ${C.description?`<p>${C.description}</p>`:""}
        ${M.length?`<ul class="mt-1 space-y-0.5">${M.map(P=>`<li>☑ ${P.item_label}</li>`).join("")}</ul>`:""}`,O.classList.remove("hidden"),z.classList.remove("hidden")}),u.querySelector("#sann-cal-fill").addEventListener("click",()=>{const L=+u.querySelector("#sann-cal-event-sel").value,C=$.find(P=>P.id===L);if(!C)return;const O=(C.work_calendar_items||[]).sort((P,R)=>P.sort_order-R.sort_order),z=new Date(C.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),M=C.event_type==="inspection"&&C.round_number?` ครั้งที่ ${C.round_number}`:"";u.querySelector("#sann-title").value=C.label+(M?` (${M.trim()})`:"");const F=[];C.description&&F.push(C.description),O.length&&(F.push("สิ่งที่ต้องเตรียม:"),O.forEach(P=>F.push(`• ${P.item_label}`))),F.push(`กำหนดวันที่: ${z}`),u.querySelector("#sann-body").value=F.join(`
`),C.event_date&&(u.querySelector("#sann-due").value=C.event_date),u.querySelector("#sann-cal-picker").classList.add("hidden")}),u.querySelectorAll(".sann-type-btn").forEach(L=>{L.addEventListener("click",()=>{const C=L.dataset.type;u.querySelectorAll(".sann-type-btn").forEach(O=>{const z=O.dataset.type==="training";O.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${O.dataset.type===C?z?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":z?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),u.querySelector("#sann-training-fields").classList.toggle("hidden",C!=="training")})});const S=L=>L==="teacher"?"bg-sky-600 text-white border-sky-600":L==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",q=L=>L==="teacher"?"hover:border-sky-300":L==="student"?"hover:border-teal-300":"hover:border-indigo-300";u.querySelectorAll(".sann-audience-btn").forEach(L=>{L.addEventListener("click",()=>{u.querySelectorAll(".sann-audience-btn").forEach(C=>{C.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${C.dataset.audience===L.dataset.audience?S(C.dataset.audience):`bg-white text-gray-600 border-gray-200 ${q(C.dataset.audience)}`}`})})}),zr(u,"sann"),u.querySelectorAll(".sann-filter-btn").forEach(L=>{L.addEventListener("click",()=>{u.querySelectorAll(".sann-filter-btn").forEach(C=>{C.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${C.dataset.filter===L.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),u.querySelector("#sann-modal-save").addEventListener("click",async()=>{var te,se;const L=u.querySelector("#sann-title").value.trim();if(!L){N("กรุณากรอกหัวข้อ","warning");return}const C=u.querySelector("#sann-body").value.trim()||null,O=u.querySelector("#sann-active-toggle").dataset.on==="true",z=u.querySelector("#sann-pin").dataset.on==="true"?1:0,M=u.querySelector("#sann-ack").dataset.on==="true",F=u.querySelector("#sann-due").value||null,P=u.querySelector(".sann-type-btn.bg-violet-600")||(c==null?void 0:c.ann_type)==="training"?"training":"general",R=((te=u.querySelector(".sann-audience-btn.text-white"))==null?void 0:te.dataset.audience)??(c==null?void 0:c.audience)??"all",Y=u.querySelector("#sann-video-url").value.trim()||null,J=P==="training"&&u.querySelector("#sann-event-location").value.trim()||null,H=((se=u.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:se.dataset.filter)??(c==null?void 0:c.schedule_filter)??"all",U=(I==null?void 0:I.getValue())??(c==null?void 0:c.target_teacher_ids)??[],X=(E==null?void 0:E.getValue())??(c==null?void 0:c.target_student_ids)??[];if(P==="training"){if(!J){N("กรุณาระบุสถานที่","warning");return}const pe=Fr(u,"sann");for(const me of pe){if(!me.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!me.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const we=u.querySelector("#sann-modal-save");we.disabled=!0,we.textContent="กำลังบันทึก...";try{B?await l(c.id,{title:L,body:C,isActive:O,priority:z,requiresAck:M,dueDate:F,annType:P,eventDate:pe[0].date,eventPeriods:pe[0].periods,eventLocation:J,scheduleFilter:H,fileUrl:g,videoUrl:Y,audience:R,targetTeacherIds:U,targetStudentIds:X}):pe.length>1?(await Promise.all(pe.map(me=>n({title:L,body:C,isActive:O,priority:z,teacherId:e.id,creatorRole:a,requiresAck:M,dueDate:F,annType:P,eventDate:me.date,eventPeriods:me.periods,eventLocation:J,scheduleFilter:H,fileUrl:g,videoUrl:Y,audience:R,targetTeacherIds:U,targetStudentIds:X}))),N(`สร้าง ${pe.length} ประกาศสำเร็จ ✅`,"success")):(await n({title:L,body:C,isActive:O,priority:z,teacherId:e.id,creatorRole:a,requiresAck:M,dueDate:F,annType:P,eventDate:pe[0].date,eventPeriods:pe[0].periods,eventLocation:J,scheduleFilter:H,fileUrl:g,videoUrl:Y,audience:R,targetTeacherIds:U,targetStudentIds:X}),N("บันทึกสำเร็จ ✅","success")),h(),await y()}catch(me){N("บันทึกไม่สำเร็จ: "+he(me),"error");const ce=u.querySelector("#sann-modal-save");ce.disabled=!1,ce.textContent="บันทึก"}return}const Z=u.querySelector("#sann-modal-save");Z.disabled=!0,Z.textContent="กำลังบันทึก...";try{B?await l(c.id,{title:L,body:C,isActive:O,priority:z,requiresAck:M,dueDate:F,annType:P,fileUrl:g,videoUrl:Y,audience:R,targetTeacherIds:U,targetStudentIds:X}):await n({title:L,body:C,isActive:O,priority:z,teacherId:e.id,creatorRole:a,requiresAck:M,dueDate:F,annType:P,fileUrl:g,videoUrl:Y,audience:R,targetTeacherIds:U,targetStudentIds:X}),!B&&O&&Gr(L,C,R),N("บันทึกสำเร็จ ✅","success"),h(),await y()}catch(pe){N("บันทึกไม่สำเร็จ: "+he(pe),"error"),Z.disabled=!1,Z.textContent="บันทึก"}})};(T=document.getElementById("sann-create-btn"))==null||T.addEventListener("click",()=>v(null)),await y()}async function Jr(){var l;Ie("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const e=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],s=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];s.flatMap(o=>o.features),Se(`<div class="animate-fade">
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
  </div>`);let t={};try{t=await _o()}catch{}const n=(l=document.querySelector("#perm-loading"))==null?void 0:l.closest(".bg-white");n&&(n.innerHTML=`
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
            ${o.features.map(x=>`
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${x.label}</td>
                ${e.map(r=>{var i;const d=((i=t[r.key])==null?void 0:i[x.key])??!1;return`<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${d?"bg-emerald-500":"bg-gray-300"}"
                      data-position="${r.key}" data-feature="${x.key}" data-on="${d}">
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
    </div>`,n.querySelectorAll(".perm-toggle").forEach(o=>{o.addEventListener("click",async()=>{const x=o.dataset.position,r=o.dataset.feature,d=o.dataset.on==="true",i=!d;o.disabled=!0;try{await $o(x,r,i),o.dataset.on=String(i),o.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${i?"bg-emerald-500":"bg-gray-300"}`,o.querySelector("span").style.transform=`translateX(${i?"20":"0"}px)`,t[x]||(t[x]={}),t[x][r]=i,N(`${i?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{N("บันทึกไม่สำเร็จ","error")}o.disabled=!1})}))}async function Qr(){Ie("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let e=[],s=[],t=[],n="สามัญ",l="",o="",x="",r="",d="";const i=L=>{if(!L)return null;const C=L.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return C?C[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},a=L=>L?/^(PR|อก\.|อป\.)/i.test(L)?"ศาสนา":/^ปวช\./i.test(L)?"ปวช":"สามัญ":"สามัญ",p={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},w=L=>{const C=L==="ศาสนา";return[...new Set(t.map(O=>C?O.religion_room:O.main_room).filter(Boolean))].filter(O=>a(O)===L).sort((O,z)=>O.localeCompare(z,"th"))},y=L=>{const C=w(L),O=[...new Set(C.map(M=>i(M)).filter(Boolean))],z=p[L]||[];return[...new Set([...z,...O])].sort((M,F)=>M.localeCompare(F,"th"))},v=async()=>{[e,s,t]=await Promise.all([Wn(),Pe(),Et()])},f=(L,C="w-3.5 h-3.5")=>`<span class="inline-block ${C} rounded-full flex-shrink-0" style="background:${L}"></span>`,T=L=>e.find(C=>C.name===L),c=L=>t.filter(C=>C.house_color===L).length,u=()=>t.filter(L=>!L.house_color).length,B=L=>{let C=document.getElementById("hc-print-roster-styles");C||(C=document.createElement("style"),C.id="hc-print-roster-styles",document.head.appendChild(C)),C.textContent=`
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
    `;const O=document.createElement("div");O.id="hc-print-roster-area",document.body.appendChild(O);const z=n==="ศาสนา",M=new Map;L.forEach(R=>{const Y=(z?R.religion_room:R.main_room)||"ไม่มีห้องเรียน";M.has(Y)||M.set(Y,[]),M.get(Y).push(R)});const F=Array.from(M.keys()).sort((R,Y)=>R.localeCompare(Y,"th"));let P="";F.forEach((R,Y)=>{const H=M.get(R).sort((Z,te)=>(Z.student_code||"").localeCompare(te.student_code||""));let U="ใบรายชื่อนักเรียน";x&&(x==="__none__"?U+=" (ไม่มีสี)":U+=` กลุ่มสี${x}`),U+=` ห้อง ${R}`,r&&(U+=` (${r})`);const X=H.map((Z,te)=>{const se=T(Z.house_color),pe=se?`<span class="color-badge" style="color: ${se.color_hex}">
               สี${Z.house_color}
             </span>`:'<span style="color: #9ca3af;">— ไม่มีสี —</span>',we=Z.image_url?`<img src="${Z.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>';return`
          <tr>
            <td style="text-align: center; width: 45px;">${te+1}</td>
            <td>
              <div class="stu-info-wrap">
                ${we}
                <div class="stu-details">
                  <div class="stu-name">${ae(Z.full_name)}</div>
                  <div class="stu-meta">รหัส: ${ae(Z.student_code||"—")} | สามัญ: ${ae(Z.main_room||"—")} | ศาสนา: ${ae(Z.religion_room||"—")}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${pe}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${ae(Z.sports_shirt_size||"")}</td>
            <td style="width: 120px;"></td>
          </tr>
        `}).join("");P+=`
        <div class="roster-page-block">
          <div class="roster-title">${ae(U)}</div>
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
              ${X}
            </tbody>
          </table>
        </div>
      `}),O.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="hc-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="hc-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        ${P}
      </div>
    `,O.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},O.querySelector("#hc-btn-close-preview").onclick=()=>{O.remove()}},h=()=>s.find(L=>L.position==="house_color_admin"),I=(L,C)=>{const z=(C?e.filter(M=>M.gender===C):e).map(M=>`<option value="${ae(M.name)}" ${M.name===L?"selected":""}>สี${ae(M.name)}</option>`).join("");return`<option value="" ${L?"":"selected"}>— ไม่มีสี —</option>`+z},E=()=>{const L=d.toLowerCase(),C=n==="ศาสนา";return t.filter(O=>{var M,F;const z=C?O.religion_room:O.main_room;return!(!z||o&&z!==o||l&&!o&&i(z)!==l||!l&&!o&&a(z)!==n||x==="__none__"&&O.house_color||x&&x!=="__none__"&&O.house_color!==x||r&&O.gender!==r||L&&!((M=O.full_name)!=null&&M.toLowerCase().includes(L))&&!((F=O.student_code)!=null&&F.toLowerCase().includes(L))&&!z.toLowerCase().includes(L))})},A=L=>L?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",j=()=>{const L=e.filter(P=>P.gender==="ชาย"),C=e.filter(P=>P.gender==="หญิง"),O=u(),z=P=>{const R=x===P.name,Y=c(P.name);return`<button class="${A(R)}" data-color="${ae(P.name)}"
               style="${R?`border-color:${P.color_hex};color:${P.color_hex};background:${P.color_hex}18`:`border-color:${P.color_hex}55;color:#374151`}">
        ${f(P.color_hex)} สี${ae(P.name)}
        <span class="ml-1 font-bold" style="color:${P.color_hex}">${Y}</span>
      </button>`},M=x==="__none__",F=`<button class="${A(M)}" data-color="__none__"
               style="${M?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${O}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${L.map(z).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${C.map(z).join("")}
          ${F}
        </div>
      </div>`},b=()=>{const L=E();if(!L.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const C=n==="ศาสนา";return L.map(O=>{const z=T(O.house_color),M=z?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${z.color_hex}">
             ${f(z.color_hex,"w-2.5 h-2.5")} ${ae(O.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',F=z?`background:${z.color_hex}12`:"",P=C?O.religion_room:O.main_room,R=O.image_url?`<img src="${O.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`:'<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>';return`<tr class="transition border-b border-gray-100 last:border-0" style="${F}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${ae(O.student_code??"")}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${R}
            <div>${ae(O.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${ae(P??"—")}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${ae(O.gender??"—")}</td>
        <td class="px-4 py-2.5">${M}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${O.id}" data-current="${ae(O.house_color??"")}">
            ${I(O.house_color,O.gender)}
          </select>
        </td>
      </tr>`}).join("")},g=()=>{const L=h(),C=E().length;Se(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${L?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${ae(L.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${t.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${u()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${j()}
        ${x?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':""}
      </div>

      <!-- Search + filter bar -->
      <div class="flex flex-wrap gap-3 items-center">
        <input id="hc-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..."
          value="${ae(d)}"
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
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${C}</b> คน</span>
        <button id="hc-print-roster-btn"
          class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white
                 transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          ${C===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${C})
        </button>
        <button id="hc-clear-colors-btn"
          class="px-4 py-2 rounded-xl text-sm font-medium border border-red-200 text-red-500
                 hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          ${C===0?"disabled":""}>
          🗑️ ล้างสี (${C})
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
          <tbody id="hc-tbody">${b()}</tbody>
        </table>
      </div>
    </div>`),D()},m=()=>{const L=document.getElementById("hc-tbody");L&&(L.innerHTML=b()),$();const C=E().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(M=>{M.textContent.includes("พบ")&&(M.innerHTML=`พบ <b class="text-gray-700">${C}</b> คน`)});const O=document.getElementById("hc-print-roster-btn");O&&(O.disabled=C===0,O.textContent=`🖨️ พิมพ์ใบรายชื่อ (${C})`);const z=document.getElementById("hc-clear-colors-btn");z&&(z.disabled=C===0,z.textContent=`🗑️ ล้างสี (${C})`)},k=()=>{var C;const L=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");L&&(L.innerHTML=j()+(x?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),_(),(C=document.getElementById("hc-clear-filter"))==null||C.addEventListener("click",()=>{x="",k(),m()})},_=()=>{document.querySelectorAll(".hc-chip").forEach(L=>{L.addEventListener("click",()=>{const C=L.dataset.color;x=x===C?"":C,k(),m()})})},$=()=>{document.querySelectorAll(".hc-color-sel").forEach(L=>{L.addEventListener("change",async()=>{const C=L.dataset.sid,O=L.dataset.current,z=L.value||null;L.disabled=!0;try{await rs([C],z);const M=t.find(Y=>String(Y.id)===String(C));M&&(M.house_color=z),L.dataset.current=z??"";const F=L.closest("tr"),P=F==null?void 0:F.children[4];if(P){const Y=T(z);P.innerHTML=Y?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${Y.color_hex}">
                   ${f(Y.color_hex,"w-2.5 h-2.5")} ${ae(z)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const R=T(z);F&&(F.style.background=R?`${R.color_hex}12`:""),L.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>L.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),k()}catch{N("บันทึกไม่สำเร็จ","error"),L.value=O??""}L.disabled=!1})})},S=()=>{const L=document.getElementById("hc-filter-category"),C=document.getElementById("hc-filter-level");if(!L||!C)return;n=L.value;const O=y(n);C.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${O.map(z=>`<option value="${z}" ${z===l?"selected":""}>${z}</option>`).join("")}
    `,q()},q=()=>{const L=document.getElementById("hc-filter-level"),C=document.getElementById("hc-filter-class");if(!L||!C)return;l=L.value;const z=w(n).filter(M=>l?i(M)===l:!0);C.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${z.length} ห้อง) --</option>
      ${z.map(M=>`
        <option value="${M}" ${M===o?"selected":""}>${M}</option>
      `).join("")}
    `},D=()=>{var L,C,O,z,M,F,P,R;_(),$(),(L=document.getElementById("hc-clear-filter"))==null||L.addEventListener("click",()=>{x="",k(),m()}),(C=document.getElementById("hc-search"))==null||C.addEventListener("input",Y=>{d=Y.target.value,m()}),(O=document.getElementById("hc-filter-gender"))==null||O.addEventListener("change",Y=>{r=Y.target.value,m()}),(z=document.getElementById("hc-filter-category"))==null||z.addEventListener("change",Y=>{n=Y.target.value,l="",o="",S(),m()}),(M=document.getElementById("hc-filter-level"))==null||M.addEventListener("change",Y=>{l=Y.target.value,o="",q(),m()}),(F=document.getElementById("hc-filter-class"))==null||F.addEventListener("change",Y=>{o=Y.target.value,m()}),(P=document.getElementById("hc-print-roster-btn"))==null||P.addEventListener("click",()=>{const Y=E();Y.length>0&&B(Y)}),(R=document.getElementById("hc-clear-colors-btn"))==null||R.addEventListener("click",async()=>{const Y=E();if(!Y.length||!confirm(`ยืนยันล้างสีนักเรียน ${Y.length} คนที่แสดงในตาราง?`))return;const J=document.getElementById("hc-clear-colors-btn");J.disabled=!0,J.textContent="กำลังล้างสี...";try{await rs(Y.map(H=>H.id),null),Y.forEach(H=>{H.house_color=null}),N(`ล้างสีสำเร็จ ${Y.length} คน`,"success"),k(),m()}catch{N("เกิดข้อผิดพลาด","error"),J.disabled=!1,J.textContent=`🗑️ ล้างสี (${Y.length})`}}),S()};await v(),g()}async function Zr(){Ie("council-rep-nominations"),document.getElementById("page-title").textContent="สรุปรายชื่อตัวแทนสภานักเรียน";const e=["ม.3","ม.4","ม.5"];let s="",t="",n="";const l=await Ne().catch(()=>({})),o=String(l.academicYear??l.academic_year??new Date().getFullYear()+543),x=Number(l.semester??1),[r,d]=await Promise.all([Ft(o,x).catch(()=>[]),wo(o,x).catch(()=>[])]),i=u=>{var B;return((B=(u||"").match(/^ม\.\d+/))==null?void 0:B[0])??null},a=[...new Set(r.filter(u=>u.category==="สามัญ"&&e.includes(i(u.main_room))).map(u=>u.main_room))].sort((u,B)=>u.localeCompare(B,"th")),p={};a.forEach(u=>{p[u]=0}),d.forEach(u=>{p[u.main_room]!=null&&p[u.main_room]++});const w=a.filter(u=>p[u]>=2),y=a.filter(u=>p[u]>0&&p[u]<2),v=a.filter(u=>p[u]===0),f=()=>d.filter(u=>{var B,h,I;if(t&&i(u.main_room)!==t||n&&((B=u.students)==null?void 0:B.gender)!==n)return!1;if(s){const E=s.toLowerCase();if(!`${((h=u.students)==null?void 0:h.full_name)??""} ${((I=u.students)==null?void 0:I.student_code)??""} ${u.main_room??""}`.toLowerCase().includes(E))return!1}return!0}),T=u=>u.length?u.map(B=>{var h,I,E,A;return`
    <tr class="border-t border-gray-100">
      <td class="px-4 py-2.5">${ae(B.main_room)}</td>
      <td class="px-4 py-2.5 font-medium">${ae(((h=B.students)==null?void 0:h.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${ae(((I=B.students)==null?void 0:I.student_code)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${ae(((E=B.students)==null?void 0:E.gender)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${ae(((A=B.teachers)==null?void 0:A.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-400 text-xs">${B.created_at?new Date(B.created_at).toLocaleDateString("th-TH"):"—"}</td>
    </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ไม่พบรายการ</td></tr>',c=()=>{var B,h,I,E;const u=f();Se(`<div class="space-y-5 animate-fade">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ส่งครบ 2 คน</p><b class="text-2xl text-emerald-700">${w.length}</b><p class="text-[11px] text-emerald-600 mt-0.5">จาก ${a.length} ห้อง</p></div>
        <div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">ส่งไม่ครบ</p><b class="text-2xl text-amber-700">${y.length}</b>${y.length?`<p class="text-[11px] text-amber-600 mt-0.5 truncate" title="${ae(y.join(", "))}">${ae(y.join(", "))}</p>`:""}</div>
        <div class="bg-red-50 rounded-2xl p-4"><p class="text-xs text-red-700">ยังไม่ส่งเลย</p><b class="text-2xl text-red-700">${v.length}</b>${v.length?`<p class="text-[11px] text-red-600 mt-0.5 truncate" title="${ae(v.join(", "))}">${ae(v.join(", "))}</p>`:""}</div>
      </div>

      <div class="flex flex-wrap gap-3 items-center">
        <input id="crn-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..." value="${ae(s)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="crn-filter-grade" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
          ${e.map(A=>`<option value="${A}" ${t===A?"selected":""}>${A}</option>`).join("")}
        </select>
        <select id="crn-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${n==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${n==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${u.length}</b> รายการ</span>
        <button id="crn-print-btn" class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" ${u.length===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${u.length})
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
          <tbody>${T(u)}</tbody>
        </table>
      </div>
    </div>`),(B=document.getElementById("crn-search"))==null||B.addEventListener("input",A=>{s=A.target.value,c()}),(h=document.getElementById("crn-filter-grade"))==null||h.addEventListener("change",A=>{t=A.target.value,c()}),(I=document.getElementById("crn-filter-gender"))==null||I.addEventListener("change",A=>{n=A.target.value,c()}),(E=document.getElementById("crn-print-btn"))==null||E.addEventListener("click",()=>{const A=f(),j=`<!doctype html><html><head><meta charset="utf-8"><title>รายชื่อตัวแทนสภานักเรียน</title>
        <style>
          body{font-family:'Sarabun','TH Sarabun New',sans-serif;padding:24px;color:#111}
          h1{font-size:18px;margin:0 0 4px}
          p.sub{font-size:12px;color:#666;margin:0 0 16px}
          table{width:100%;border-collapse:collapse;font-size:13px}
          th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
          th{background:#f3f4f6}
        </style></head><body>
        <h1>รายชื่อตัวแทนสภานักเรียน${t?" ระดับชั้น "+t:""}</h1>
        <p class="sub">ปีการศึกษา ${ae(o)} · พิมพ์เมื่อ ${new Date().toLocaleDateString("th-TH")} · ทั้งหมด ${A.length} รายการ</p>
        <table><thead><tr><th>ห้อง</th><th>ชื่อ-สกุล</th><th>รหัส</th><th>เพศ</th><th>ครูผู้เสนอ</th></tr></thead>
        <tbody>${A.map(b=>{var g,m,k,_;return`<tr><td>${ae(b.main_room)}</td><td>${ae(((g=b.students)==null?void 0:g.full_name)??"—")}</td><td>${ae(((m=b.students)==null?void 0:m.student_code)??"—")}</td><td>${ae(((k=b.students)==null?void 0:k.gender)??"—")}</td><td>${ae(((_=b.teachers)==null?void 0:_.full_name)??"—")}</td></tr>`}).join("")}</tbody>
        </table></body></html>`;Vs(j)})};c()}async function Xr(){var k,_,$,S,q,D;Ie("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const[e,s]=await Promise.all([Ne().catch(()=>({})),oa().catch(()=>[])]),t=Fs(s,e),n=Ba(e),l=Ke(n);let o=l;try{const L=localStorage.getItem("pp5_admin_donations_term");t.some(C=>Ke(C)===L)&&(o=L)}catch{}const x=L=>Number(L==null?void 0:L.academic_year)*2+Number(L==null?void 0:L.semester),r=L=>L?new Date(L).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",d=L=>Number(L??0).toLocaleString("th-TH"),i=L=>!L.slip_url&&String(L.admin_note??"").startsWith("[เงินสด]"),a=L=>{const C=String((L==null?void 0:L.donationStickerTiers)??"").trim();return(C?C.split(`
`).filter(Boolean).map(M=>{const[F,P,R,,Y]=M.split("|").map(J=>J.trim());return{amount:parseInt(F)||0,sticker:P||"🏅",title:R||"",color:Y||""}}).filter(M=>M.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([M,F,P,R])=>({amount:M,sticker:F,title:P,color:R}))).sort((M,F)=>M.amount-F.amount).map((M,F)=>{const P=((L==null?void 0:L[`donationStickerImg${F+1}`])??"").trim();return P&&/^https?:\/\//.test(P)?{...M,sticker:P}:M})},p=(L,C)=>{let O=null;for(const z of C)L>=z.amount&&(O=z);return O},w=(L,C="w-8 h-8")=>L?/^https?:\/\//.test(L.sticker)?`<img src="${L.sticker}" class="${C} object-contain" title="${L.title}" />`:`<span class="text-xl" title="${L.title}">${L.sticker}</span>`:"";Se(`
  <div class="max-w-4xl mx-auto animate-fade space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามการสนับสนุนแยกตามภาคเรียน พร้อมสถานะครูเดิม/รายใหม่/ยังไม่มีรายการ</p>
      </div>
      <label class="flex items-center gap-2 text-sm font-semibold text-indigo-700">
        <span>เลือกภาคเรียน</span>
        <select id="don-term-switcher" class="max-w-[240px] border border-indigo-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${Us(t,o,l)}
        </select>
      </label>
      <button id="don-add" ${o!==l?'disabled title="เพิ่มเงินสดได้เฉพาะภาคเรียนปัจจุบัน"':""} class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition">
        + เพิ่มเงินสด
      </button>
    </div>

    <p id="don-term-note" class="text-xs text-gray-500 -mt-3"></p>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      ${["ยอดรวมอนุมัติ","รออนุมัติ","ผู้สนับสนุนแล้ว","เฉลี่ยต่อคน","เดิมที่ต่ออายุ","รายใหม่","ยังไม่สนับสนุน"].map((L,C)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${L}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${C}">—</p>
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
  </div>`);let y=[],v=[],f=[],T={},c=[],u=[],B=e;const h=L=>{const C=u.find(P=>Number(P.id)===Number(L.supporter_renewal_entitlement_id));if(C)return`${Number(C.target_academic_year)}:${Number(C.target_semester)}`;const O=String(L.created_at??"").slice(0,10);if(!O)return"";const z=t.find(P=>P.start_date&&P.end_date&&O>=P.start_date&&O<=P.end_date);if(z)return Ke(z);const M=t.filter(P=>P.start_date&&O<P.start_date).sort((P,R)=>P.start_date.localeCompare(R.start_date))[0],F=M?(Date.parse(`${M.start_date}T00:00:00Z`)-Date.parse(`${O}T00:00:00Z`))/864e5:1/0;return F>=0&&F<=45?Ke(M):""},I=L=>{const C=t.find(M=>Ke(M)===o),O=x(C),z=(C==null?void 0:C.start_date)||(o===l?B.semester_start:null);return y.some(M=>{var Y;if(Number((Y=M.teachers)==null?void 0:Y.id)!==Number(L)||M.status!=="approved")return!1;const F=u.find(J=>Number(J.id)===Number(M.supporter_renewal_entitlement_id));if(F)return x({academic_year:F.source_academic_year,semester:F.source_semester})<O;const P=h(M),R=t.find(J=>Ke(J)===P);return R?x(R)<O:!!(z&&String(M.reviewed_at??M.created_at??"").slice(0,10)<z)})},E=async()=>{var X,Z;const{supabase:L}=await Ce(async()=>{const{supabase:te}=await import("./supabase-BV-W2lsh.js").then(se=>se.a);return{supabase:te}},[]),{getSystemConfig:C,getPaymentSlipViewUrl:O}=await Ce(async()=>{const{getSystemConfig:te,getPaymentSlipViewUrl:se}=await import("./api-BQaMiX9s.js");return{getSystemConfig:te,getPaymentSlipViewUrl:se}},__vite__mapDeps([0,1,2,3,4])),[z,{data:M},F,{data:P}]=await Promise.all([C().catch(()=>({})),L.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, supporter_renewal_entitlement_id, donation_tier, discount_percent, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1}),Pe().catch(()=>[]),L.from("supporter_renewal_entitlements").select("id, teacher_id, source_academic_year, source_semester, target_academic_year, target_semester")]);B=z??e,f=a(B),c=F??[],u=P??[],y=(M??[]).map(te=>({...te,_termKey:h(te)})),v=y.filter(te=>te._termKey===o);const R=t.find(te=>Ke(te)===o),Y=document.getElementById("don-teacher-coverage"),J=document.getElementById("don-term-note");J&&(J.textContent=R!=null&&R.start_date&&(R!=null&&R.end_date)?`ช่วงข้อมูล ${r(R.start_date)} – ${r(R.end_date)} · รายการต่ออายุที่เชื่อมสิทธิ์จะยึดภาคเป้าหมาย แม้ส่งคำขอก่อนวันเปิดภาค`:"หมายเหตุ: ภาคเรียนนี้ไม่มีช่วงวันที่ในทะเบียน ระบบจึงแยกคำขอที่ระบุภาคเรียนผ่านสิทธิ์ต่ออายุได้เท่านั้น");const H=new Map;for(const te of v){const se=Number((X=te.teachers)==null?void 0:X.id);se&&(H.has(se)||H.set(se,[]),H.get(se).push(te))}const U=c.map(te=>{const se=H.get(Number(te.id))??[],pe=se.filter($e=>$e.status==="approved"),we=se.some($e=>$e.status==="pending"),me=I(te.id),ce=pe.length?me?"เดิม · ต่ออายุแล้ว":"รายใหม่ · สนับสนุนแล้ว":we?me?"เดิม · รอตรวจสอบ":"รายใหม่ · รอตรวจสอบ":se.length?me?"เดิม · คำขอถูกปฏิเสธ":"รายใหม่ · คำขอถูกปฏิเสธ":me?"เดิม · ยังไม่สนับสนุนเทอมนี้":"ยังไม่เคยสนับสนุน";return{teacher:te,requests:se,approved:pe,pending:we,prior:me,kind:ce,total:pe.reduce(($e,ke)=>$e+(Number(ke.amount)||0),0)}}).sort((te,se)=>{const pe=we=>we.approved.length?0:we.pending?1:we.prior?2:3;return pe(te)-pe(se)||String(te.teacher.full_name??"").localeCompare(String(se.teacher.full_name??""),"th")});Y&&(Y.innerHTML=U.length?`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead class="sticky top-0 bg-gray-50"><tr>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">ครู</th>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">สถานะภาคนี้</th>
          <th class="text-right px-4 py-2 text-xs font-semibold text-gray-500">ยอดอนุมัติ</th>
        </tr></thead><tbody class="divide-y divide-gray-50">${U.map(te=>`
          <tr class="hover:bg-gray-50"><td class="px-4 py-2.5"><span class="font-medium text-gray-800">${Fe(te.teacher.full_name??"—")}</span>
            <span class="ml-1 text-xs text-gray-400">${Fe(te.teacher.teacher_code??"")}</span></td>
            <td class="px-4 py-2.5"><span class="px-2 py-1 rounded-full text-[11px] font-semibold ${te.approved.length?"bg-emerald-50 text-emerald-700":te.pending?"bg-amber-50 text-amber-700":"bg-gray-100 text-gray-500"}">${te.kind}</span></td>
            <td class="px-4 py-2.5 text-right font-semibold ${te.total?"text-emerald-700":"text-gray-400"}">${te.total?`${d(te.total)} ฿`:"—"}</td></tr>`).join("")}</tbody></table></div>`:'<p class="text-center py-8 text-sm text-gray-400">ไม่พบรายชื่อครู</p>');for(const te of v)te.slip_url&&!i(te)&&(te._resolvedSlip=await O(te.slip_url).catch(()=>te.slip_url));T={};for(const te of v){if(te.status!=="approved")continue;const se=(Z=te.teachers)==null?void 0:Z.id;se&&(T[se]=(T[se]??0)+(Number(te.amount)||0))}A(),j()},A=()=>{const L=v.filter(J=>J.status==="approved"),C=L.reduce((J,H)=>J+(Number(H.amount)||0),0),O=v.filter(J=>J.status==="pending").length,z=new Set(L.map(J=>{var H;return(H=J.teachers)==null?void 0:H.id})).size,M=z?Math.round(C/z):0,F=new Set(L.filter(J=>{var H;return I((H=J.teachers)==null?void 0:H.id)}).map(J=>{var H;return(H=J.teachers)==null?void 0:H.id})).size,P=Math.max(0,z-F),R=Math.max(0,c.length-z),Y=[d(C)+" ฿",O,z+" คน",d(M)+" ฿",F+" คน",P+" คน",R+" คน"];document.querySelectorAll(".don-stat-val").forEach((J,H)=>{J.textContent=Y[H]})},j=()=>{var R,Y,J,H;const L=document.getElementById("don-table");if(!L)return;const C=(((R=document.getElementById("don-search"))==null?void 0:R.value)??"").toLowerCase(),O=((Y=document.getElementById("don-filter-status"))==null?void 0:Y.value)??"all",z=((J=document.getElementById("don-filter-method"))==null?void 0:J.value)??"all",M=((H=document.getElementById("don-filter-sort"))==null?void 0:H.value)??"date_desc";let F=v.filter(U=>{const X=U.teachers;return!(C&&!String((X==null?void 0:X.full_name)??"").toLowerCase().includes(C)&&!String((X==null?void 0:X.teacher_code)??"").includes(C)||O!=="all"&&U.status!==O||z==="cash"&&!i(U)||z==="transfer"&&i(U))});if(M==="date_asc"?F.sort((U,X)=>new Date(U.created_at)-new Date(X.created_at)):M==="amount_desc"&&F.sort((U,X)=>(X.amount??0)-(U.amount??0)),!F.length){L.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const P=U=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[U]??`<span class="text-gray-400 text-xs">${U}</span>`;L.innerHTML=`
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
        ${F.map((U,X)=>{const Z=U.teachers,te=i(U),se=String(U.admin_note??"").replace(/^\[เงินสด\]\s*/,""),pe=T[Z==null?void 0:Z.id]??0,we=p(pe,f),me=I(Z==null?void 0:Z.id)?"เดิม":"รายใหม่",ce=Z!=null&&Z.image_url?`<img src="${Z.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((Z==null?void 0:Z.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${U.id}" data-tid="${(Z==null?void 0:Z.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${X+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${ce}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(Z==null?void 0:Z.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(Z==null?void 0:Z.teacher_code)??""} · ${me}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${w(we)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${d(U.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${te?'<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>':`<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${U._resolvedSlip??""}" data-id="${U.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${P(U.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${r(U.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${se}">${se||"—"}</td>
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
    </table>`,L.querySelectorAll(".don-row").forEach(U=>{U.addEventListener("click",()=>b(U.dataset.tid))}),L.querySelectorAll(".don-slip").forEach(U=>{U.addEventListener("click",async X=>{X.stopPropagation();let Z=U.dataset.url;if(!Z){const se=y.find(pe=>pe.id===Number(U.dataset.id));if(se!=null&&se.slip_url){const{getPaymentSlipViewUrl:pe}=await Ce(async()=>{const{getPaymentSlipViewUrl:we}=await import("./api-BQaMiX9s.js");return{getPaymentSlipViewUrl:we}},__vite__mapDeps([0,1,2,3,4]));Z=await pe(se.slip_url).catch(()=>se.slip_url)}}if(!Z){N("ไม่พบสลิป","warning");return}const te=document.createElement("div");te.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",te.innerHTML=`<img src="${Z}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,te.addEventListener("click",()=>te.remove()),document.body.appendChild(te)})}),L.querySelectorAll(".don-approve").forEach(U=>{U.addEventListener("click",async X=>{X.stopPropagation();const{reviewPaymentRequest:Z}=await Ce(async()=>{const{reviewPaymentRequest:te}=await import("./api-BQaMiX9s.js");return{reviewPaymentRequest:te}},__vite__mapDeps([0,1,2,3,4]));await Z(Number(U.dataset.id),"approved").catch(()=>{}),N("อนุมัติแล้ว ✅","success"),await E()})}),L.querySelectorAll(".don-reject").forEach(U=>{U.addEventListener("click",async X=>{X.stopPropagation();const Z=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:te}=await Ce(async()=>{const{reviewPaymentRequest:se}=await import("./api-BQaMiX9s.js");return{reviewPaymentRequest:se}},__vite__mapDeps([0,1,2,3,4]));await te(Number(U.dataset.id),"rejected",Z||null).catch(()=>{}),N("ปฏิเสธแล้ว","info"),await E()})}),L.querySelectorAll(".don-edit").forEach(U=>{U.addEventListener("click",X=>{X.stopPropagation(),m(Number(U.dataset.id))})})},b=L=>{if(!L)return;const C=Number(L),O=v.filter(Z=>{var te;return((te=Z.teachers)==null?void 0:te.id)===C});if(!O.length)return;const z=O[0].teachers,M=O.filter(Z=>Z.status==="approved"),F=M.reduce((Z,te)=>Z+(Number(te.amount)||0),0),P=p(F,f),R=(P==null?void 0:P.color)??"#10b981",Y=parseInt(R.slice(1,3),16),J=parseInt(R.slice(3,5),16),H=parseInt(R.slice(5,7),16),U=z!=null&&z.image_url?`<img src="${z.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${((z==null?void 0:z.full_name)??"?").charAt(0)}</div>`,X=document.createElement("div");X.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",X.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${Y},${J},${H},0.9),rgba(${Y},${J},${H},1))">
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
            <p class="font-bold text-gray-700">${O.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${M.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${O.map(Z=>{const te=i(Z),se=String(Z.admin_note??"").replace(/^\[เงินสด\]\s*/,""),pe={pending:"⏳",approved:"✅",rejected:"❌"}[Z.status]??"";return`<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${r(Z.created_at)}</span>
                <span class="text-[11px] ${te?"text-gray-500":"text-blue-500"}">${te?"💵":"🧾"}</span>
                ${se?`<span class="text-xs text-gray-400 truncate max-w-[80px]">${se}</span>`:""}
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-emerald-700">${d(Z.amount)} ฿</span>
                <span>${pe}</span>
              </div>
            </div>`}).join("")}
        </div>
        <div class="px-5 pb-5">
          <button class="don-sum-close w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(X),X.querySelector(".don-sum-close").addEventListener("click",()=>X.remove()),X.addEventListener("click",Z=>{Z.target===X&&X.remove()})},g=async()=>{const{getTeachers:L}=await Ce(async()=>{const{getTeachers:M}=await import("./api-BQaMiX9s.js");return{getTeachers:M}},__vite__mapDeps([0,1,2,3,4])),C=await L().catch(()=>[]),O=document.createElement("div");O.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",O.innerHTML=`
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
      </div>`,document.body.appendChild(O);const z=Fa({wrap:O.querySelector("#don-teacher-wrap"),teachers:[...C].sort((M,F)=>(M.full_name??"").localeCompare(F.full_name??"","th"))});O.querySelector("#don-add-cancel").addEventListener("click",()=>O.remove()),O.querySelector("#don-add-confirm").addEventListener("click",async()=>{const M=z.getValue(),F=Number(O.querySelector("#don-add-amount").value),P=O.querySelector("#don-add-note").value.trim();if(!M){N("กรุณาเลือกครู","warning");return}if(!F){N("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:R}=await Ce(async()=>{const{createPaymentRequest:Y}=await import("./api-BQaMiX9s.js");return{createPaymentRequest:Y}},__vite__mapDeps([0,1,2,3,4]));await R({teacher_id:parseInt(M),package_type:"donation",amount:F,status:"approved",admin_note:`[เงินสด] ${P}`.trim(),reviewed_at:new Date().toISOString()}).catch(Y=>{N("บันทึกไม่สำเร็จ: "+he(Y),"error")}),N("บันทึกโดเนทเงินสดแล้ว ✅","success"),O.remove(),await E()})},m=L=>{const C=y.find(M=>M.id===L);if(!C)return;const O=String(C.admin_note??"").replace(/^\[เงินสด\]\s*/,""),z=document.createElement("div");z.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",z.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${C.amount??""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-edit-note" type="text" value="${O}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-edit-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button id="don-edit-save"   class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(z),z.querySelector("#don-edit-cancel").addEventListener("click",()=>z.remove()),z.querySelector("#don-edit-save").addEventListener("click",async()=>{const M=Number(z.querySelector("#don-edit-amount").value),F=z.querySelector("#don-edit-note").value.trim(),P=i(C)?"[เงินสด] ":"",{supabase:R}=await Ce(async()=>{const{supabase:J}=await import("./supabase-BV-W2lsh.js").then(H=>H.a);return{supabase:J}},[]),{error:Y}=await R.from("payment_requests").update({amount:M,admin_note:(P+F).trim()||null}).eq("id",L);if(Y){N("แก้ไขไม่สำเร็จ","error");return}N("บันทึกแล้ว ✅","success"),z.remove(),await E()})};(k=document.getElementById("don-search"))==null||k.addEventListener("input",j),(_=document.getElementById("don-filter-status"))==null||_.addEventListener("change",j),($=document.getElementById("don-filter-method"))==null||$.addEventListener("change",j),(S=document.getElementById("don-filter-sort"))==null||S.addEventListener("change",j),(q=document.getElementById("don-add"))==null||q.addEventListener("click",g),(D=document.getElementById("don-term-switcher"))==null||D.addEventListener("change",async L=>{o=L.target.value;try{localStorage.setItem("pp5_admin_donations_term",o)}catch{}const C=document.getElementById("don-add");C&&(C.disabled=o!==l,C.title=C.disabled?"เพิ่มเงินสดได้เฉพาะภาคเรียนปัจจุบัน":"");const O=document.getElementById("don-table");O&&(O.innerHTML='<div class="py-10 text-gray-400"><span class="animate-spin text-2xl">⏳</span><p class="mt-2 text-sm">กำลังโหลดข้อมูลภาคเรียน...</p></div>'),await E()}),await E()}async function en(){var p,w,y,v;Ie("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const e=f=>String(f??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=f=>f?new Date(f).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",t={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},n=["suggestion","problem","password_reset"],l=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],o=Object.fromEntries(l.map(f=>[f.value,f]));Se(`
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
  </div>`);let x=[];const r=async()=>{x=await Ns().catch(()=>[]),i(),a()},d=async(f,T)=>{if(!f)return;if(!f.is_read)try{await ls(f.id,!0),f.is_read=!0}catch{}const c=String(T??"").slice(0,120);await Ro(f.profile_id,{title:"💬 แอดมินตอบกลับ Feedback ของคุณแล้ว",body:c||"เข้าไปดูคำตอบได้ที่เมนู Feedback ถึงแอดมิน",url:f.sender_role==="teacher"?"teacher.html":"student.html"}).catch(()=>{})},i=()=>{var T;const f=document.getElementById("fb-cat-stats");f&&(f.innerHTML=Object.keys(t).map(c=>{const u=x.filter(E=>E.category===c),B=u.length,h=u.filter(E=>!E.is_read).length;let I='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(n.includes(c)){const E=u.filter(A=>A.status==="resolved").length;I=`<p class="text-[10px] font-semibold mt-0.5 ${E===B&&B>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${E}/${B}</p>`}else h&&(I=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${h}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${c}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${t[c]}</p>
          <p class="text-xl font-bold text-gray-800">${B}</p>
          ${I}
        </div>`}).join(""),f.querySelectorAll(".fb-cat-card").forEach(c=>c.addEventListener("click",()=>{var B;const u=document.getElementById("fb-filter-cat");u&&(u.value=c.dataset.cat,a()),(B=document.getElementById("fb-list"))==null||B.scrollIntoView({behavior:"smooth",block:"start"})}))),(T=window._refreshFeedbackBadge)==null||T.call(window)},a=()=>{var I,E,A,j;const f=document.getElementById("fb-list");if(!f)return;const T=(((I=document.getElementById("fb-search"))==null?void 0:I.value)??"").toLowerCase(),c=((E=document.getElementById("fb-filter-role"))==null?void 0:E.value)??"all",u=((A=document.getElementById("fb-filter-cat"))==null?void 0:A.value)??"all",B=((j=document.getElementById("fb-filter-read"))==null?void 0:j.value)??"all";let h=x.filter(b=>{var m,k,_;const g=[b.sender_name,b.message,(m=b.student)==null?void 0:m.student_code,(k=b.student)==null?void 0:k.main_room,(_=b.student)==null?void 0:_.religion_room,...(b.messages??[]).map($=>$.message)].join(" ").toLowerCase();return!(T&&!g.includes(T)||c!=="all"&&b.sender_role!==c||u!=="all"&&b.category!==u||B==="unread"&&b.is_read||B==="read"&&!b.is_read)});if(!h.length){f.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}f.innerHTML=h.map(b=>{var g,m,k,_,$,S;return`
      <div class="bg-white rounded-2xl border ${b.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${b.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${e(b.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${e(b.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${b.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${b.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${s(b.created_at)}</p>
              ${b.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${e(((g=b.student)==null?void 0:g.student_code)||"—")} · ห้องสามัญ ${e(((m=b.student)==null?void 0:m.main_room)||"—")} · ห้องศาสนา ${e(((k=b.student)==null?void 0:k.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${b.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${b.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(t).map(([q,D])=>`<option value="${q}" ${b.category===q?"selected":""}>${D}</option>`).join("")}
          </select>
          ${n.includes(b.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((_=o[b.status])==null?void 0:_.cls)??"bg-gray-100 text-gray-600"}">${(($=o[b.status])==null?void 0:$.label)??b.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(b.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(b.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(b.created_at)}</p></div></div>
          ${(b.messages??[]).map(q=>q.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(q.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${s(q.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(b.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(q.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(q.created_at)}</p></div></div>`).join("")}
          ${b.admin_reply&&!(b.messages??[]).some(q=>q.author_role==="admin"&&q.message===b.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(b.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${b.replied_at?s(b.replied_at):""}</p></div></div>`:""}
        </div>
        ${b.category==="password_reset"&&b.sender_role==="student"&&((S=b.student)!=null&&S.id)?b.status==="resolved"?'<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>':`<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${b.id}" data-sid="${b.student.id}" data-code="${e(b.student.student_code||"")}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${e(b.student.student_code||"")})
              </button>`:""}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${b.id}" data-read="${b.is_read}">
            ${b.is_read?"↩️ ทำเป็นยังไม่อ่าน":"✓ ทำเครื่องหมายว่าอ่านแล้ว"}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${b.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${b.id}">
              ${l.map(q=>`<option value="${q.value}" ${b.status===q.value?"selected":""}>${q.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${b.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${b.replied_at?`ตอบล่าสุด ${s(b.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${b.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),f.querySelectorAll(".fb-toggle-read").forEach(b=>b.addEventListener("click",async()=>{const g=parseInt(b.dataset.id),m=b.dataset.read==="true";try{await ls(g,!m)}catch{N("บันทึกไม่สำเร็จ","error");return}const k=x.find(_=>_.id===g);k&&(k.is_read=!m),i(),a()})),f.querySelectorAll(".fb-category-sel").forEach(b=>b.addEventListener("change",async()=>{const g=parseInt(b.dataset.id),m=b.value,k=x.find($=>$.id===g),_=k==null?void 0:k.category;b.disabled=!0;try{await Eo(g,m)}catch{N("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),b.disabled=!1,b.value=_;return}k&&(k.category=m),N("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),a()})),f.querySelectorAll(".fb-delete").forEach(b=>b.addEventListener("click",async()=>{const g=parseInt(b.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await Lo(g)}catch{N("ลบไม่สำเร็จ","error");return}x=x.filter(m=>m.id!==g),N("ลบแล้ว","success"),i(),a()}})),f.querySelectorAll(".fb-pw-reset-btn").forEach(b=>b.addEventListener("click",async()=>{const g=parseInt(b.dataset.id),m=parseInt(b.dataset.sid),k=b.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${k} เป็นรหัสนักเรียน (${k}) จริงหรือไม่?`))return;const _=b.textContent;b.disabled=!0,b.textContent="⏳ กำลังรีเซ็ท...";try{await Co(m,k),await Io(m).catch(()=>{}),await ds(g,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${k}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(S){N("รีเซ็ทไม่สำเร็จ: "+he(S),"error"),b.disabled=!1,b.textContent=_;return}const $=x.find(S=>S.id===g);if($){$.status="resolved";const S=new Date().toISOString(),q=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${k}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;$.admin_reply=q,$.replied_at=S,$.messages=[...$.messages??[],{id:`local-${Date.now()}`,feedback_id:g,author_role:"admin",message:q,created_at:S}],await d($,q)}N("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),i(),a()})),f.querySelectorAll(".fb-save-status").forEach(b=>b.addEventListener("click",async()=>{var S,q;const g=parseInt(b.dataset.id),m=b.closest(".fb-card"),k=(S=m.querySelector(".fb-status-sel"))==null?void 0:S.value,_=(q=m.querySelector(".fb-reply-input"))==null?void 0:q.value.trim();b.disabled=!0,b.textContent="⏳ กำลังบันทึก...";try{await ds(g,{status:k,adminReply:_})}catch{N("บันทึกไม่สำเร็จ","error"),b.disabled=!1,b.textContent="💾 บันทึก";return}const $=x.find(D=>D.id===g);if($&&($.status=k,_)){const D=new Date().toISOString();$.admin_reply=_,$.replied_at=D,$.messages=[...$.messages??[],{id:`local-${Date.now()}`,feedback_id:g,author_role:"admin",message:_,created_at:D}],await d($,_)}N(_?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),i(),a()}))};(p=document.getElementById("fb-search"))==null||p.addEventListener("input",a),(w=document.getElementById("fb-filter-role"))==null||w.addEventListener("change",a),(y=document.getElementById("fb-filter-cat"))==null||y.addEventListener("change",a),(v=document.getElementById("fb-filter-read"))==null||v.addEventListener("change",a),await r()}const tn={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},nt={opening:{label:"เปิด–ปิดภาคเรียน",icon:"🚪",chip:"bg-emerald-50 text-emerald-700 border-emerald-100"},exam:{label:"การสอบ",icon:"📝",chip:"bg-violet-50 text-violet-700 border-violet-100"},student_activity:{label:"กิจกรรมนักเรียน",icon:"🎒",chip:"bg-cyan-50 text-cyan-700 border-cyan-100"},staff:{label:"ครูและบุคลากร",icon:"👥",chip:"bg-amber-50 text-amber-700 border-amber-100"},holiday:{label:"วันหยุด/วันสำคัญ",icon:"🔴",chip:"bg-rose-50 text-rose-700 border-rose-100"},deadline:{label:"กำหนดส่งเอกสาร",icon:"📤",chip:"bg-orange-50 text-orange-700 border-orange-100"},meeting:{label:"ประชุม",icon:"🤝",chip:"bg-blue-50 text-blue-700 border-blue-100"},other:{label:"อื่นๆ",icon:"📌",chip:"bg-gray-50 text-gray-600 border-gray-100"}},Ts=[{header:"bg-emerald-700",soft:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800"},{header:"bg-violet-700",soft:"bg-violet-50",border:"border-violet-200",text:"text-violet-800"},{header:"bg-cyan-700",soft:"bg-cyan-50",border:"border-cyan-200",text:"text-cyan-800"},{header:"bg-blue-700",soft:"bg-blue-50",border:"border-blue-200",text:"text-blue-800"},{header:"bg-amber-600",soft:"bg-amber-50",border:"border-amber-200",text:"text-amber-800"},{header:"bg-rose-700",soft:"bg-rose-50",border:"border-rose-200",text:"text-rose-800"},{header:"bg-orange-700",soft:"bg-orange-50",border:"border-orange-200",text:"text-orange-800"}],Ci=["อา","จ","อ","พ","พฤ","ศ","ส"];function Ue(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function aa(e){return String(e??"").slice(0,10)}function mt(e,s=!1){const t=aa(e);return t?new Date(`${t}T00:00:00`).toLocaleDateString("th-TH",s?{day:"numeric",month:"short",year:"numeric"}:{day:"numeric",month:"long",year:"numeric"}):"—"}function Pa(e){return aa(e).slice(0,7)}function an(e){return new Date(`${e}-01T00:00:00`).toLocaleDateString("th-TH",{month:"long",year:"numeric"})}function Ii(e){return e.is_holiday?"holiday":nt[e.category]?e.category:e.event_type==="deadline"?"deadline":e.event_type==="meeting"?"meeting":/สอบ|คัดเลือก|วัดความรู้|TGAT|TPAT|A-level|I-Net|O-NET/i.test(e.label??"")?"exam":/เปิดเรียน|ปิดภาค|ลงทะเบียน/i.test(e.label??"")?"opening":"other"}function Ti(e){return{...e,event_date:aa(e.event_date),end_date:e.end_date?aa(e.end_date):null,category:Ii(e),work_calendar_items:(e.work_calendar_items??[]).slice().sort((s,t)=>(s.sort_order??0)-(t.sort_order??0))}}function ji(e,s){return e.filter(t=>{const n=t.end_date||t.event_date;return t.event_date<=s&&n>=s})}function sn(e,s){const t=`${s}-01`,n=new Date(`${t}T00:00:00`),l=`${s}-${String(new Date(n.getFullYear(),n.getMonth()+1,0).getDate()).padStart(2,"0")}`,o=e.end_date||e.event_date;return e.event_date<=l&&o>=t}function Bi(e){const s=e.flatMap(o=>[o.event_date,o.end_date||o.event_date]).filter(Boolean).sort();if(!s.length)return[Pa(Gs(new Date))];const t=new Date(`${s[0].slice(0,7)}-01T00:00:00`),n=new Date(`${s.at(-1).slice(0,7)}-01T00:00:00`),l=[];for(const o=new Date(t);o<=n;o.setMonth(o.getMonth()+1))l.push(`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`);return l}function qi(e,s){return`ฉันจะแนบ PDF หรือภาพปฏิทินการปฏิบัติงานของโรงเรียนให้คุณอ่าน
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

ห้ามสร้างรายการซ้ำ ห้ามตัดรายการที่อยู่หลังช่วงเปิดเรียน และห้ามตัดกิจกรรมต่อเนื่องหลังสิ้นสุดภาคเรียน เช่น งานในเดือนเมษายน ให้ใส่เข้ามาตามเอกสารทั้งหมด`}function js(e){return String(e??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim()}function Bs(e){const t=String(e??"").trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";let n=Number(t[1]);n>2400&&(n-=543);const l=Number(t[2]),o=Number(t[3]),x=new Date(Date.UTC(n,l-1,o));return x.getUTCFullYear()!==n||x.getUTCMonth()!==l-1||x.getUTCDate()!==o?"":`${n}-${String(l).padStart(2,"0")}-${String(o).padStart(2,"0")}`}function Ai(e){const s=Bs(e.event_date??e.start_date??e.date),t=e.end_date?Bs(e.end_date):null,n=String(e.label??e.title??e.activity??"").trim(),l=nt[e.category]?e.category:"other";return{event_date:s,end_date:t||null,label:n,description:String(e.description??e.details??"").trim(),category:l,responsible_unit:String(e.responsible_unit??e.responsible??e.owner??"").trim(),week_number:Number.isInteger(Number(e.week_number))?Number(e.week_number):null,is_holiday:e.is_holiday===!0||e.is_holiday==="true",holiday_note:String(e.holiday_note??e.holiday??"").trim(),event_type:tn[e.event_type]?e.event_type:"other",round_number:Number.isInteger(Number(e.round_number))?Number(e.round_number):null,source_page:Number.isInteger(Number(e.source_page))?Number(e.source_page):null,note:String(e.note??"").trim()}}function Mi(e,s=!1){const t=nt[e.category]||nt.other;return`<div class="${s?"text-[10px]":"text-xs"} rounded-lg border px-2 py-1 ${t.chip} truncate" title="${Ue(e.label)}">${t.icon} ${Ue(e.label)}</div>`}function Ni(e,s,t,{manager:n=!1}={}){const l=Ts[t%Ts.length],o=new Date(`${e}-01T00:00:00`),x=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),r=o.getDay(),d=[];for(let a=0;a<r;a++)d.push('<div class="min-h-[74px] bg-gray-50/50"></div>');for(let a=1;a<=x;a++){const p=`${e}-${String(a).padStart(2,"0")}`,w=ji(s,p);d.push(`<div class="min-h-[74px] p-1.5 border-t border-r border-gray-100 bg-white ${w.some(y=>y.is_holiday)?"bg-rose-50/60":""}">
      <div class="flex items-center justify-between gap-1 mb-1"><span class="text-[11px] font-bold ${w.some(y=>y.is_holiday)?"text-rose-600":"text-gray-500"}">${a}</span>${w.length?`<span class="text-[9px] text-gray-400">${w.length}</span>`:""}</div>
      <div class="space-y-1">${w.slice(0,3).map(y=>Mi(y,!0)).join("")}${w.length>3?`<div class="text-[10px] text-gray-400 px-1">+ อีก ${w.length-3}</div>`:""}</div>
    </div>`)}const i=s.filter(a=>sn(a,e));return`<section class="rounded-3xl border ${l.border} bg-white shadow-sm overflow-hidden work-calendar-month" data-wcal-month="${e}">
    <div class="${l.header} text-white px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2">
      <div><h2 class="font-extrabold text-base">${Ue(an(e))}</h2><p class="text-[11px] text-white/80">ปฏิทินกิจกรรมและกำหนดการ</p></div>
      <span class="text-xs bg-white/15 rounded-full px-3 py-1">${i.length} รายการ</span>
    </div>
    <div class="grid grid-cols-7 border-l border-gray-100">${Ci.map(a=>`<div class="text-center text-[10px] sm:text-xs font-bold ${l.text} ${l.soft} py-2 border-t border-r border-gray-100">${a}</div>`).join("")}${d.join("")}</div>
    <div class="border-t ${l.border} ${l.soft} p-3 sm:p-4">
      <div class="overflow-x-auto"><table class="w-full text-xs min-w-[680px]"><thead><tr class="text-gray-500 text-left"><th class="py-2 px-2 w-[18%]">วัน/เดือน/ปี</th><th class="py-2 px-2">กิจกรรม/งาน</th><th class="py-2 px-2 w-[22%]">ผู้รับผิดชอบ</th><th class="py-2 px-2 w-[12%]">สัปดาห์</th><th class="py-2 px-2 w-[16%]">หมายเหตุ</th>${n?'<th class="py-2 px-2 w-[86px]">จัดการ</th>':""}</tr></thead><tbody class="divide-y divide-white/80">${i.length?i.map(a=>{const p=a.end_date&&a.end_date!==a.event_date?`${mt(a.event_date,!0)} – ${mt(a.end_date,!0)}`:mt(a.event_date,!0),w=a.is_holiday?'<span class="ml-1 text-rose-600 font-bold">วันหยุด</span>':"";return`<tr class="align-top"><td class="py-2 px-2 font-semibold ${a.is_holiday?"text-rose-600":"text-gray-700"}">${p}${w}</td><td class="py-2 px-2"><div class="font-bold text-gray-800">${Ue(a.label)}</div>${a.description?`<div class="text-gray-500 mt-0.5">${Ue(a.description)}</div>`:""}</td><td class="py-2 px-2 text-gray-600">${Ue(a.responsible_unit||"—")}</td><td class="py-2 px-2 text-gray-600">${a.week_number?`สัปดาห์ที่ ${a.week_number}`:"—"}</td><td class="py-2 px-2 text-gray-500">${Ue(a.holiday_note||a.note||"—")}</td>${n?`<td class="py-2 px-2 whitespace-nowrap"><div class="flex flex-wrap gap-1.5"><button type="button" class="wcal-edit-btn inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-2 py-1 text-[11px] font-bold text-indigo-700 hover:bg-indigo-100" data-ev-id="${a.id}" title="แก้ไขกิจกรรม">✏️ แก้ไข</button><button type="button" class="wcal-del-btn inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-ev-id="${a.id}" title="ลบกิจกรรม">🗑️ ลบ</button></div></td>`:""}</tr>`}).join(""):`<tr><td colspan="${n?6:5}" class="py-6 text-center text-gray-400">ยังไม่มีรายการในเดือนนี้</td></tr>`}</tbody></table></div>
    </div>
  </section>`}function Di({academicYear:e,semester:s,events:t,teacher:n,importEvents:l}){var c;(c=document.getElementById("wcal-ai-modal"))==null||c.remove();const o=document.createElement("div");o.id="wcal-ai-modal",o.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",o.innerHTML=`<div class="bg-white w-full sm:max-w-6xl max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl">
    <div class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-5 sm:px-7 py-4 flex items-start justify-between gap-4"><div><h3 class="font-bold text-gray-800">🤖 เพิ่มปฏิทินจาก JSON ที่ AI สร้าง</h3><p class="text-xs text-gray-500 mt-1">อัปโหลด PDF/ภาพให้ AI ภายนอก แล้วนำ JSON กลับมาตรวจสอบที่นี่ก่อนบันทึก</p></div><button id="wcal-ai-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button></div>
    <div class="p-5 sm:p-7 space-y-5">
      <div class="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-xs text-violet-900 leading-relaxed"><b>ความปลอดภัย:</b> ระบบจะไม่ส่งข้อมูลเข้า database จาก JSON ทันที ต้องตรวจสอบรายการและกดยืนยันก่อนทุกครั้ง รายการวันที่และชื่อซ้ำจะถูกข้ามโดยไม่เขียนทับข้อมูลเดิม</div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><section class="rounded-2xl border border-gray-200 p-4"><div class="flex items-center justify-between gap-2 mb-2"><div><h4 class="font-semibold text-sm text-gray-800">1) Prompt สำหรับ AI</h4><p class="text-[11px] text-gray-400 mt-0.5">กดสร้าง Prompt ก่อนคัดลอก แล้วแนบเอกสารต้นฉบับให้ AI</p></div><div class="flex gap-2"><button id="wcal-ai-generate" type="button" class="text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-lg">⚡ สร้าง Prompt</button><button id="wcal-ai-copy" type="button" hidden disabled aria-disabled="true" class="text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg disabled:opacity-40">📋 คัดลอก</button></div></div><textarea id="wcal-ai-prompt" readonly rows="18" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y bg-gray-50"></textarea></section>
      <section class="rounded-2xl border border-gray-200 p-4"><h4 class="font-semibold text-sm text-gray-800">2) วาง JSON ที่ AI สร้าง</h4><p class="text-[11px] text-gray-400 mt-0.5 mb-2">รองรับ JSON ที่ครอบด้วย \`\`\`json ... \`\`\`</p><textarea id="wcal-ai-json" rows="18" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y font-mono" placeholder="วาง JSON ที่ได้จาก AI ที่นี่"></textarea><button id="wcal-ai-parse" class="w-full mt-3 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold">🔍 ตรวจสอบ JSON และแสดงตัวอย่าง</button><p id="wcal-ai-error" class="hidden text-xs text-red-600 mt-2 whitespace-pre-wrap"></p></section></div>
      <section id="wcal-ai-preview-wrap" class="hidden rounded-2xl border border-gray-200 overflow-hidden"><div class="bg-gray-50 px-4 py-3 border-b border-gray-200"><h4 class="font-semibold text-sm text-gray-800">3) ตรวจสอบก่อนนำเข้า</h4><p id="wcal-ai-summary" class="text-xs text-gray-500 mt-0.5"></p><p class="text-[11px] text-amber-700 mt-1">หากรายการใดขึ้น “ข้อมูลไม่ครบ” ให้กด 🗑️ ลบรายการนี้ก่อนยืนยันนำเข้า</p></div><div id="wcal-ai-preview" class="p-4 space-y-2 max-h-[40vh] overflow-y-auto"></div></section>
    </div><div class="sticky bottom-0 bg-white/95 backdrop-blur border-t border-gray-100 px-5 sm:px-7 py-4 flex flex-col-reverse sm:flex-row justify-end gap-2"><button id="wcal-ai-cancel" class="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button><button id="wcal-ai-apply" disabled class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold disabled:opacity-40">✅ ยืนยันนำเข้าปฏิทิน</button></div></div>`,document.body.appendChild(o);const x=o.querySelector("#wcal-ai-prompt"),r=o.querySelector("#wcal-ai-copy"),d=Js({copyButton:r}),i=()=>o.remove();o.querySelector("#wcal-ai-close").onclick=i,o.querySelector("#wcal-ai-cancel").onclick=i,o.addEventListener("click",u=>{u.target===o&&i()}),o.querySelector("#wcal-ai-generate").onclick=()=>{x.value=qi(e,s),d.markGenerated(),r.textContent="📋 คัดลอก",N("สร้าง Prompt ปฏิทินแล้ว","success")},r.onclick=async u=>{if(!d.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(x.value),u.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(u.currentTarget)&&(u.currentTarget.textContent="📋 คัดลอก")},1500)}catch{x.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}};const a=o.querySelector("#wcal-ai-error"),p=o.querySelector("#wcal-ai-preview-wrap"),w=o.querySelector("#wcal-ai-preview"),y=o.querySelector("#wcal-ai-summary"),v=o.querySelector("#wcal-ai-apply");let f=[];const T=()=>{const u=f.filter(h=>!h.event_date||!h.label||h.end_date&&h.end_date<h.event_date),B=f.filter(h=>h.duplicate);y.textContent=`ทั้งหมด ${f.length} รายการ · ซ้ำ ${B.length} รายการ · ${u.length?`ข้อมูลไม่ครบ ${u.length} รายการ`:"พร้อมตรวจสอบและนำเข้า"}`,v.disabled=!f.length||u.length>0,w.innerHTML=f.map((h,I)=>`<div class="rounded-2xl border ${h.duplicate?"border-amber-200 bg-amber-50/50":"border-gray-200 bg-white"} p-3"><div class="flex flex-wrap items-start justify-between gap-2"><div><p class="font-bold text-sm text-gray-800">${I+1}. ${Ue(h.label||"ไม่พบชื่อกิจกรรม")}</p><p class="text-xs text-gray-500 mt-1">${h.event_date?mt(h.event_date,!0):"ไม่พบวันที่"}${h.end_date?` – ${mt(h.end_date,!0)}`:""} · ${Ue((nt[h.category]||nt.other).label)}</p><p class="text-xs text-gray-500 mt-1">ผู้รับผิดชอบ: ${Ue(h.responsible_unit||"—")} · สัปดาห์: ${h.week_number||"—"} · หน้า ${h.source_page||"—"}</p>${h.note?`<p class="text-[11px] text-amber-700 mt-1">หมายเหตุ AI: ${Ue(h.note)}</p>`:""}</div><div class="flex flex-wrap items-center gap-2"><span class="text-[11px] font-semibold px-2.5 py-1 rounded-lg ${h.duplicate?"bg-amber-100 text-amber-700":!h.event_date||!h.label?"bg-red-100 text-red-700":"bg-emerald-100 text-emerald-700"}">${h.duplicate?"รายการซ้ำ จะข้าม":!h.event_date||!h.label?"ข้อมูลไม่ครบ":"ผ่านการตรวจรูปแบบ"}</span><button type="button" class="wcal-preview-delete inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-wcal-preview-delete="${I}" title="นำรายการนี้ออกจากชุดนำเข้า">🗑️ ลบรายการนี้</button></div></div></div>`).join("")};w.addEventListener("click",u=>{const B=u.target.closest("[data-wcal-preview-delete]");if(!B)return;const h=Number(B.dataset.wcalPreviewDelete);!Number.isInteger(h)||!f[h]||(f.splice(h,1),T())}),o.querySelector("#wcal-ai-parse").onclick=()=>{a.classList.add("hidden");try{const u=JSON.parse(js(o.querySelector("#wcal-ai-json").value)),B=Array.isArray(u)?u:u.events??u.calendar_events??u.items??u.data;if(!Array.isArray(B)||!B.length)throw new Error("ไม่พบรายการ events ใน JSON");const h=Number(u.academic_year??e),I=Number(u.semester??s);if(h!==Number(e)||I!==Number(s))throw new Error(`JSON ระบุภาคเรียน ${I}/${h} แต่หน้าปัจจุบันคือ ${s}/${e}`);const E=u.source_title||u.title||"ปฏิทินปฏิบัติงาน";f=B.map(A=>({...Ai(A),source_title:E,source_revision:u.source_revision||"",source_document_name:u.source_document_name||""})),f.forEach(A=>{A.duplicate=t.some(j=>j.event_date===A.event_date&&String(j.label).trim().toLowerCase()===A.label.toLowerCase())}),p.classList.remove("hidden"),T(),o.dataset.sourceTitle=E,o.dataset.sourceRevision=u.source_revision||"",o.dataset.sourceDocumentName=u.source_document_name||""}catch(u){a.textContent=`อ่าน JSON ไม่สำเร็จ: ${u.message}`,a.classList.remove("hidden"),p.classList.add("hidden"),f=[],v.disabled=!0}},v.onclick=async()=>{var u;if(!v.disabled&&confirm(`ยืนยันนำเข้ากิจกรรม ${f.length} รายการในภาคเรียน ${s}/${e}?
รายการที่ซ้ำจะถูกข้าม และข้อมูลเดิมจะไม่ถูกเขียนทับ`)){v.disabled=!0,v.textContent="กำลังบันทึก...";try{const B=await l({academicYear:e,semester:s,sourceTitle:o.dataset.sourceTitle||"ปฏิทินปฏิบัติงาน",sourceRevision:o.dataset.sourceRevision||"",sourceDocumentName:o.dataset.sourceDocumentName||"",rawPayload:JSON.parse(js(o.querySelector("#wcal-ai-json").value)),events:f,createdByTeacherId:n==null?void 0:n.id});N(`นำเข้าสำเร็จ ${(B==null?void 0:B.inserted_count)??f.length} รายการ${B!=null&&B.skipped_count?` · ข้ามรายการซ้ำ ${B.skipped_count} รายการ`:""} ✅`,"success"),i(),await((u=window._reloadWorkCalendar)==null?void 0:u.call(window))}catch(B){N(`นำเข้าไม่สำเร็จ: ${B.message}`,"error"),v.disabled=!1,v.textContent="✅ ยืนยันนำเข้าปฏิทิน"}}}}async function rn({manager:e=!1,teacher:s=null}={}){var E,A,j,b;const{getWorkCalendarEvents:t,getAcademicTerms:n,getSystemConfig:l,createWorkCalendarEvent:o,updateWorkCalendarEvent:x,deleteWorkCalendarEvent:r,replaceWorkCalendarItems:d,importWorkCalendarEvents:i}=await Ce(async()=>{const{getWorkCalendarEvents:g,getAcademicTerms:m,getSystemConfig:k,createWorkCalendarEvent:_,updateWorkCalendarEvent:$,deleteWorkCalendarEvent:S,replaceWorkCalendarItems:q,importWorkCalendarEvents:D}=await import("./api-BQaMiX9s.js");return{getWorkCalendarEvents:g,getAcademicTerms:m,getSystemConfig:k,createWorkCalendarEvent:_,updateWorkCalendarEvent:$,deleteWorkCalendarEvent:S,replaceWorkCalendarItems:q,importWorkCalendarEvents:D}},__vite__mapDeps([0,1,2,3,4]));Ie(e?"work-calendar":"work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const a=await l().catch(()=>({})),p=Number(a.academicYear??a.academic_year??new Date().getFullYear()+543),w=Number(a.semester??1),v=[...await n().catch(()=>[]),{academic_year:p,semester:1},{academic_year:p,semester:2},{academic_year:p,semester:w,is_current:!0}].filter((g,m,k)=>k.findIndex(_=>Number(_.academic_year)===Number(g.academic_year)&&Number(_.semester)===Number(g.semester))===m).sort((g,m)=>Number(m.academic_year)-Number(g.academic_year)||Number(m.semester)-Number(g.semester));let f=p,T=w;const c=v.map(g=>`<option value="${Number(g.academic_year)}-${Number(g.semester)}" ${Number(g.academic_year)===f&&Number(g.semester)===T?"selected":""}>ภาคเรียนที่ ${Number(g.semester)}/${Number(g.academic_year)}${g.is_current?" (ปัจจุบัน)":""}</option>`).join("");Se(`<div class="animate-fade max-w-7xl mx-auto pb-8"><div class="flex flex-wrap items-start justify-between gap-3 mb-5"><div><p class="text-xs text-gray-400 mb-1">ปฏิทินทางการของโรงเรียน · แสดงตามเดือนและตารางกิจกรรม</p><div class="flex flex-wrap items-center gap-2"><select id="wcal-term" class="border border-indigo-200 bg-indigo-50 text-indigo-700 rounded-xl px-3 py-2 text-sm font-bold outline-none">${c}</select><span id="wcal-period" class="text-xs text-gray-500"></span></div></div>${e?'<div class="flex flex-wrap gap-2"><button id="wcal-ai-import" class="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold shadow-sm">🤖 นำเข้าจาก AI JSON</button><button id="wcal-create-btn" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm">＋ เพิ่มกิจกรรม</button></div>':""}</div>
    <div class="rounded-3xl border border-sky-100 bg-sky-50 p-4 sm:p-5 mb-5"><div class="flex flex-wrap items-start gap-3"><div class="text-2xl">📅</div><div class="flex-1 min-w-[240px]"><h2 class="font-extrabold text-sky-900">ปฏิทินการปฏิบัติงานโรงเรียน</h2><p class="text-xs text-sky-700 mt-1">รูปแบบนี้ยึดโครงสร้างปฏิทินฝ่ายวิชาการ: ปฏิทินรายเดือน กิจกรรม ผู้รับผิดชอบ สัปดาห์ และวันหยุดสำคัญ</p></div><span id="wcal-source-badge" class="text-[11px] font-semibold text-sky-700 bg-white/70 border border-sky-100 rounded-full px-3 py-1.5">ยังไม่ได้ระบุเอกสารต้นทาง</span></div></div>
    <div id="wcal-summary" class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5"></div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 mb-5"><div class="grid grid-cols-1 md:grid-cols-[1fr_180px_180px] gap-2"><input id="wcal-search" class="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200" placeholder="🔎 ค้นหากิจกรรม ผู้รับผิดชอบ หรือหมายเหตุ"><select id="wcal-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกประเภท</option>${Object.entries(nt).map(([g,m])=>`<option value="${g}">${m.icon} ${m.label}</option>`).join("")}</select><select id="wcal-month" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกเดือน</option></select></div></div>
    <div id="wcal-body"><div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div></div>
  </div>${e?`<div id="wcal-modal" class="hidden fixed inset-0 z-[80] flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="wcal-modal-backdrop"></div><div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"><div class="p-5 sm:p-6"><h3 id="wcal-modal-title" class="text-lg font-bold text-gray-800 mb-4">เพิ่มกิจกรรม</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><label class="text-xs font-semibold text-gray-500">ประเภทกิจกรรม<select id="wcal-event-type" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(tn).map(([g,m])=>`<option value="${g}">${m}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">หมวดหมู่<select id="wcal-event-category" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(nt).map(([g,m])=>`<option value="${g}">${m.icon} ${m.label}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">วันที่เริ่มต้น *<input id="wcal-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500">วันที่สิ้นสุด<input id="wcal-end-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">ชื่อกิจกรรม *<input id="wcal-label" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น เปิดเรียนภาคเรียนที่ 2/2569"></label><label class="text-xs font-semibold text-gray-500">ผู้รับผิดชอบ<input id="wcal-responsible" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="ฝ่ายวิชาการ"></label><label class="text-xs font-semibold text-gray-500">สัปดาห์ที่<input id="wcal-week" type="number" min="1" max="99" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น 1"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">รายละเอียด<textarea id="wcal-desc" rows="2" maxlength="800" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">หมายเหตุ/วันหยุด<textarea id="wcal-note" rows="2" maxlength="500" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="sm:col-span-2 flex items-center gap-2 text-sm text-rose-700"><input id="wcal-holiday" type="checkbox" class="w-4 h-4"> ทำเครื่องหมายเป็นวันหยุด/วันสำคัญ</label></div><div class="mt-4"><p class="text-xs font-semibold text-gray-500 mb-2">Checklist เดิม (ถ้ามี)</p><div id="wcal-items-list" class="space-y-2"></div><button id="wcal-add-item" class="mt-2 text-indigo-600 text-sm font-semibold">＋ เพิ่มรายการ</button></div><div class="flex gap-3 mt-6"><button id="wcal-modal-cancel" class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600">ยกเลิก</button><button id="wcal-modal-save" class="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold">บันทึก</button></div></div></div></div>`:""}`);let u=[],B=null;const h=async()=>{const g=document.getElementById("wcal-body");g.innerHTML='<div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div>';try{u=(await t(f,T)).map(Ti),I()}catch(m){g.innerHTML=`<div class="text-center py-12 text-red-500 text-sm">โหลดไม่สำเร็จ: ${Ue(m.message)}</div>`}},I=()=>{var R,Y,J;const g=String(((R=document.getElementById("wcal-search"))==null?void 0:R.value)??"").trim().toLowerCase(),m=((Y=document.getElementById("wcal-category"))==null?void 0:Y.value)??"",k=((J=document.getElementById("wcal-month"))==null?void 0:J.value)??"",_=u.filter(H=>{const U=[H.label,H.description,H.responsible_unit,H.note,H.holiday_note].join(" ").toLowerCase();return(!g||U.includes(g))&&(!m||H.category===m)&&(!k||Pa(H.event_date)===k||Pa(H.end_date||H.event_date)===k)}),$=Bi(_.length?_:u),S=document.getElementById("wcal-month"),q=S==null?void 0:S.value;S&&(S.innerHTML=`<option value="">ทุกเดือน</option>${$.map(H=>`<option value="${H}">${Ue(an(H))}</option>`).join("")}`,$.includes(q)?S.value=q:k&&(S.value=k));const D=document.getElementById("wcal-summary"),L=Gs(new Date),C=u.filter(H=>(H.end_date||H.event_date)>=L).length,O=u.filter(H=>H.category==="exam").length,z=u.filter(H=>H.is_holiday||H.category==="holiday").length;D.innerHTML=[["📋",u.length,"กิจกรรมทั้งหมด","bg-indigo-50 text-indigo-700"],["⏳",C,"กิจกรรมที่ยังไม่สิ้นสุด","bg-emerald-50 text-emerald-700"],["📝",O,"รายการสอบ","bg-violet-50 text-violet-700"],["🔴",z,"วันหยุด/วันสำคัญ","bg-rose-50 text-rose-700"]].map(([H,U,X,Z])=>`<div class="rounded-2xl border border-gray-100 bg-white shadow-sm px-4 py-3 flex items-center gap-3"><span class="w-10 h-10 rounded-xl ${Z} flex items-center justify-center text-lg">${H}</span><div><p class="text-xl font-extrabold text-gray-800">${U}</p><p class="text-[11px] text-gray-500">${X}</p></div></div>`).join("");const M=u.find(H=>H.source_document_name||H.source_revision),F=document.getElementById("wcal-source-badge");F&&(F.textContent=M?`📄 ${M.source_document_name||"เอกสารฝ่ายวิชาการ"}${M.source_revision?` · ฉบับ ${M.source_revision}`:""}`:"📝 เพิ่มด้วยมือ/ข้อมูลเดิม");const P=document.getElementById("wcal-period");P&&(P.textContent=u.length?`${mt(u[0].event_date,!0)} – ${mt(u.at(-1).end_date||u.at(-1).event_date,!0)}`:"ยังไม่มีช่วงวันที่"),document.getElementById("wcal-body").innerHTML=_.length?`<div class="space-y-5">${$.map((H,U)=>Ni(H,_.filter(X=>sn(X,H)),U,{manager:e})).join("")}</div>`:'<div class="rounded-3xl border border-dashed border-gray-200 bg-white text-center py-16 text-gray-400 text-sm">ไม่พบกิจกรรมตามตัวกรอง</div>'};if(window._reloadWorkCalendar=h,(E=document.getElementById("wcal-term"))==null||E.addEventListener("change",async g=>{const[m,k]=g.target.value.split("-").map(Number);f=m,T=k,await h()}),(A=document.getElementById("wcal-search"))==null||A.addEventListener("input",I),(j=document.getElementById("wcal-category"))==null||j.addEventListener("change",I),(b=document.getElementById("wcal-month"))==null||b.addEventListener("change",I),e){const g=_=>{const $=document.getElementById("wcal-items-list"),S=document.createElement("div");S.className="flex gap-2 items-center",S.innerHTML=`<input maxlength="150" value="${Ue(_)}" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm"><button class="wcal-remove-item text-gray-400 hover:text-rose-500">✕</button>`,S.querySelector("button").onclick=()=>S.remove(),$.appendChild(S)},m=()=>{document.getElementById("wcal-modal").classList.add("hidden"),B=null},k=_=>{B=(_==null?void 0:_.id)??null,document.getElementById("wcal-modal-title").textContent=_?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.getElementById("wcal-event-type").value=(_==null?void 0:_.event_type)??"other",document.getElementById("wcal-event-category").value=(_==null?void 0:_.category)??"other",document.getElementById("wcal-date").value=(_==null?void 0:_.event_date)??"",document.getElementById("wcal-end-date").value=(_==null?void 0:_.end_date)??"",document.getElementById("wcal-label").value=(_==null?void 0:_.label)??"",document.getElementById("wcal-responsible").value=(_==null?void 0:_.responsible_unit)??"",document.getElementById("wcal-week").value=(_==null?void 0:_.week_number)??"",document.getElementById("wcal-desc").value=(_==null?void 0:_.description)??"",document.getElementById("wcal-note").value=(_==null?void 0:_.holiday_note)??(_==null?void 0:_.note)??"",document.getElementById("wcal-holiday").checked=!!(_!=null&&_.is_holiday),document.getElementById("wcal-items-list").innerHTML="",((_==null?void 0:_.work_calendar_items)??[]).forEach($=>g($.item_label)),document.getElementById("wcal-modal").classList.remove("hidden")};document.getElementById("wcal-create-btn").onclick=()=>k(),document.getElementById("wcal-modal-cancel").onclick=m,document.getElementById("wcal-modal-backdrop").onclick=m,document.getElementById("wcal-add-item").onclick=()=>g(""),document.getElementById("wcal-body").addEventListener("click",async _=>{const $=_.target.closest(".wcal-edit-btn"),S=_.target.closest(".wcal-del-btn");if($){const q=u.find(D=>Number(D.id)===Number($.dataset.evId));q&&k(q)}if(S){const q=u.find(D=>Number(D.id)===Number(S.dataset.evId));if(!q||!confirm(`ลบ “${q.label}” ใช่ไหม?`))return;try{await r(q.id),N("ลบกิจกรรมแล้ว","success"),await h()}catch(D){N(`ลบไม่สำเร็จ: ${D.message}`,"error")}}}),document.getElementById("wcal-modal-save").onclick=async()=>{const _=document.getElementById("wcal-event-type").value,$=document.getElementById("wcal-event-category").value,S=document.getElementById("wcal-date").value,q=document.getElementById("wcal-end-date").value||null,D=document.getElementById("wcal-label").value.trim();if(!S||!D)return N("กรุณากรอกวันที่และชื่อกิจกรรม","warning");if(q&&q<S)return N("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");const L={eventType:_,eventDate:S,endDate:q,label:D,description:document.getElementById("wcal-desc").value.trim(),category:$,responsibleUnit:document.getElementById("wcal-responsible").value.trim(),weekNumber:Number(document.getElementById("wcal-week").value)||null,isHoliday:document.getElementById("wcal-holiday").checked,holidayNote:document.getElementById("wcal-note").value.trim()},C=document.getElementById("wcal-modal-save");C.disabled=!0,C.textContent="กำลังบันทึก...";try{let O;B?(O=await x(B,L),await d(B,[...document.querySelectorAll("#wcal-items-list input")].map(z=>z.value.trim()).filter(Boolean))):(O=await o({...L,academicYear:f,semester:T,createdByTeacherId:s==null?void 0:s.id}),await d(O.id,[...document.querySelectorAll("#wcal-items-list input")].map(z=>z.value.trim()).filter(Boolean))),m(),N("บันทึกกิจกรรมแล้ว","success"),await h()}catch(O){N(`บันทึกไม่สำเร็จ: ${O.message}`,"error")}finally{C.disabled=!1,C.textContent="บันทึก"}},document.getElementById("wcal-ai-import").onclick=()=>Di({academicYear:f,semester:T,events:u,teacher:s,importEvents:_=>i(_)})}await h()}async function Hi(){return rn({manager:!1})}async function nn(e){return rn({manager:!0,teacher:e})}function Ri(e){return e.filter(s=>s.category==="ศาสนา"||["AGM","AGMVOC"].includes(s.subject_group)).concat(e.filter(s=>!s.category&&!["AGM","AGMVOC","ACDMVOC"].includes(s.subject_group))).filter((s,t,n)=>n.findIndex(l=>l.id===s.id)===t)}async function on(){Ie("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",Se(`<div class="max-w-4xl mx-auto animate-fade">
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
  </div>`);let e=[],s=[];try{[e,s]=await Promise.all([ut(),Pe()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}sa(e),document.getElementById("btn-add-rg").onclick=()=>ln(null,s,async()=>{const t=await ut();sa(t)})}function sa(e){const s=document.getElementById("rg-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${ae(t.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${n?`<div class="flex items-center gap-2">
                    ${n.image_url?`<img src="${n.image_url}" class="w-7 h-7 rounded-full object-cover" />`:`<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${ae(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
                    <div>
                      <span class="font-medium">${ae(n.full_name)}</span>
                      ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
                    </div>
                  </div>`:'<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${t.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${t.id}" data-name="${ae(t.name)}">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,s.querySelectorAll(".rg-edit").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,o=(await ut()).find(r=>r.id===n),x=await Pe();ln(o,x,async()=>{sa(await ut())})}}),s.querySelectorAll(".rg-del").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,l=t.dataset.name;if(confirm(`ลบกลุ่ม "${l}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const x=(await ut()).find(r=>r.id===n);x!=null&&x.leader_id&&await ja(x.leader_id,null,"religion_subgroup_head"),await Yn(n),N("ลบกลุ่มแล้ว","success"),sa(await ut())}catch(o){N("ลบไม่สำเร็จ: "+o.message,"error")}}})}}function ln(e,s,t){const n=!!e,l=document.createElement("div");l.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const o=[...s].sort((r,d)=>(r.full_name??"").localeCompare(d.full_name??"","th"));l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${n?"แก้ไขกลุ่ม":"เพิ่มกลุ่มใหม่"}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${ae((e==null?void 0:e.name)??"")}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
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
    </div>`,document.body.appendChild(l);const x=Fa({wrap:l.querySelector("#rg-leader-wrap"),teachers:o,value:(e==null?void 0:e.leader_id)??null});l.querySelector("#rg-modal-close").onclick=()=>l.remove(),l.querySelector("#rg-cancel").onclick=()=>l.remove(),l.querySelector("#rg-save").onclick=async()=>{const r=l.querySelector("#rg-name").value.trim();if(!r){N("กรุณาระบุชื่อกลุ่ม","error");return}const d=x.getValue(),i=(e==null?void 0:e.leader_id)??null,a=l.querySelector("#rg-save");a.disabled=!0,a.textContent="กำลังบันทึก...";try{n?(await Kn(e.id,{name:r,leader_id:d}),i&&i!==+d&&await ja(i,null,"religion_subgroup_head")):await Jn({name:r,leader_id:d}),d&&await ja(+d,"religion_subgroup_head"),N(n?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),l.remove(),t()}catch(p){N("บันทึกไม่สำเร็จ: "+p.message,"error"),a.disabled=!1,a.textContent="บันทึก"}}}async function Oi(e){Ie("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",Se(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let s=[],t=[];try{[s,t]=await Promise.all([ut(),Pe()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}const n=s.find(x=>x.leader_id===e.id),l=document.getElementById("mrg-content");if(!n){l.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const o=Ri(t);await dn(n,o)}async function dn(e,s){const t=document.getElementById("mrg-content");let n=[];try{n=await Qn(e.id)}catch{N("โหลดสมาชิกไม่สำเร็จ","error");return}t.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${ae(e.name)}</h3>
        <p class="text-xs text-gray-400 mt-0.5">สมาชิกในกลุ่ม ${n.length} คน</p>
      </div>
      <button id="btn-mrg-add" class="btn-primary px-4 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มสมาชิก
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${n.length?`
        <ul class="divide-y divide-gray-50">
          ${n.map(l=>{var x;const o=l.teachers;return`
            <li class="px-5 py-3 flex items-center gap-3">
              ${o!=null&&o.image_url?`<img src="${o.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${ae(((x=o==null?void 0:o.full_name)==null?void 0:x.charAt(0))??"?")}</div>`}
              <div>
                <span class="font-medium text-gray-800">${ae((o==null?void 0:o.full_name)??"")}</span>
                ${o!=null&&o.teacher_code?`<span class="block text-xs font-mono text-gray-400">${o.teacher_code}</span>`:""}
              </div>
            </li>`}).join("")}
        </ul>`:`
        <div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">👥</p>
          <p class="font-medium">ยังไม่มีสมาชิกในกลุ่ม</p>
          <p class="text-xs mt-1">กดปุ่ม "เพิ่มสมาชิก" เพื่อเริ่มต้น</p>
        </div>`}
    </div>`,document.getElementById("btn-mrg-add").onclick=()=>Pi(e,s,n,async()=>{await dn(e,s)})}function Pi(e,s,t,n){const l=document.createElement("div");l.className="fixed inset-0 z-[9000] bg-white flex flex-col",l.innerHTML=`
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${ae(e.name)}"</h3>
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
    </div>`,document.body.appendChild(l);const o=za({wrap:l.querySelector("#mrg-member-wrap"),chipsWrap:l.querySelector("#mrg-chips"),teachers:s,value:t.map(x=>x.teacher_id)});l.querySelector("#mrg-modal-close").onclick=()=>l.remove(),l.querySelector("#mrg-cancel").onclick=()=>l.remove(),l.querySelector("#mrg-save").onclick=async()=>{const x=o.getValue(),r=l.querySelector("#mrg-save");r.disabled=!0,r.textContent="กำลังบันทึก...";try{await to(e.id,x),l.remove(),await n(),zi(e,s.filter(d=>x.includes(d.id)))}catch(d){N("บันทึกไม่สำเร็จ: "+d.message,"error"),r.disabled=!1,r.textContent="บันทึก"}}}function zi(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${ae(e.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${s.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${s.length?`<ul class="divide-y divide-gray-50">
          ${s.map(n=>{var l;return`<li class="py-2.5 flex items-center gap-3">
            ${n.image_url?`<img src="${n.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${ae(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
            <div>
              <span class="font-medium text-gray-800">${ae(n.full_name??"")}</span>
              ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
            </div>
          </li>`}).join("")}
        </ul>`:'<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>'}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#mrg-summary-close").onclick=()=>t.remove()}async function cn(){Ie("subject-group-requests"),document.getElementById("page-title").textContent="คำขอย้ายกลุ่มวิชา";const e=o=>o?new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—",s=o=>o==="sasana"?"🕌 ศาสนา":"📖 สามัญ",t={pending:{label:"🕐 รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธแล้ว",cls:"bg-red-100 text-red-600"}};Se(`
  <div class="max-w-3xl mx-auto animate-fade space-y-4">
    <p class="text-xs text-gray-400">คำขอจากนักเรียนที่เห็นว่าวิชาบางวิชาถูกจัดกลุ่มสามัญ/ศาสนาผิดหลักสูตร — อนุมัติแล้วจะมีผลเฉพาะห้องที่คุณเลือกเท่านั้น</p>
    <div class="flex items-center gap-2">
      <button id="sgr-tab-pending" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-tab="pending">รอตรวจสอบ</button>
      <button id="sgr-tab-all" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-500" data-tab="all">ทั้งหมด</button>
    </div>
    <div id="sgr-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>
    </div>
  </div>`);let n="pending";const l=async()=>{document.getElementById("sgr-list").innerHTML='<div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>';const o=n==="pending"?await Ms().catch(()=>[]):await So().catch(()=>[]),x=document.getElementById("sgr-list");if(!o.length){x.innerHTML=`<div class="text-center py-16 text-gray-300"><p class="text-4xl mb-3">🔀</p><p class="text-sm">${n==="pending"?"ไม่มีคำขอรอตรวจสอบ":"ยังไม่มีคำขอ"}</p></div>`;return}x.innerHTML=o.map(r=>{var i,a;const d=t[r.status]??t.pending;return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="font-semibold text-sm text-gray-800 truncate">${Fe(r.subject_name??"—")} <span class="text-xs text-gray-400 font-mono">${Fe(r.subject_code??"")}</span></p>
            <p class="text-xs text-gray-500 mt-0.5">${Fe(((i=r.students)==null?void 0:i.full_name)??"—")} · ${Fe(((a=r.students)==null?void 0:a.student_code)??"")} · ${Fe(r.class_level??"")}</p>
            <p class="text-xs text-gray-500 mt-1">${s(r.current_group)} → ${s(r.requested_group)}</p>
            <p class="text-[11px] text-gray-400 mt-1">${e(r.created_at)}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${d.cls}">${d.label}</span>
            ${r.status==="pending"?`<button class="sgr-review-btn text-xs font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50" data-id="${r.id}">ตรวจสอบ</button>`:""}
          </div>
        </div>
      </div>`}).join(""),x.querySelectorAll(".sgr-review-btn").forEach(r=>{r.addEventListener("click",()=>Fi(o.find(d=>d.id===Number(r.dataset.id)),l))})};document.querySelectorAll(".sgr-tab").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.tab,document.querySelectorAll(".sgr-tab").forEach(x=>{x.className=`sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold ${x.dataset.tab===n?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}`}),l()})}),await l()}function Fi(e,s){var l;if(!e)return;const t=document.createElement("div");t.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">🔀 ตรวจสอบคำขอย้ายกลุ่มวิชา</h3>
        <p class="text-xs text-gray-500 mt-1">${Fe(((l=e.students)==null?void 0:l.full_name)??"—")} ขอย้าย "${Fe(e.subject_name??"")}" ${e.current_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"} → ${e.requested_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"}</p>
      </div>
      <div class="flex-1 overflow-y-auto px-5 py-4">
        <p class="text-xs text-gray-500 mb-2">เลือกห้องในระดับชั้น <b>${Fe(e.class_level??"")}</b> ที่จะให้มีผลจริง (ค่าเริ่มต้นเลือกทุกห้องที่สอนวิชารหัสเดียวกันไว้ให้แล้ว ปรับได้อิสระ):</p>
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
    </div>`,document.body.appendChild(t);const n=()=>t.remove();t.querySelector("#sgr-cancel").addEventListener("click",n),No(e.id).then(o=>{const x=t.querySelector("#sgr-candidates");if(!o.length){x.innerHTML='<p class="text-center text-gray-400 text-sm py-4">ไม่พบห้องที่สอนวิชารหัสนี้ในระดับชั้นเดียวกัน</p>';return}x.innerHTML=o.map(r=>`
      <label class="flex items-center gap-2.5 border border-gray-100 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-50">
        <input type="checkbox" class="sgr-candidate-cb" value="${r.class_id}" checked />
        <span class="flex-1 text-sm text-gray-700">${Fe(r.class_name??"")}</span>
        <span class="text-[11px] text-gray-400">${r.student_count} คน · ${r.current_group==="sasana"?"🕌":"📖"}</span>
      </label>`).join("")}).catch(()=>{t.querySelector("#sgr-candidates").innerHTML='<p class="text-center text-red-400 text-sm py-4">โหลดรายชื่อห้องไม่สำเร็จ</p>'}),t.querySelector("#sgr-approve").addEventListener("click",async o=>{var r;const x=[...t.querySelectorAll(".sgr-candidate-cb:checked")].map(d=>Number(d.value));if(!x.length){N("เลือกอย่างน้อย 1 ห้อง","warning");return}if(confirm(`อนุมัติย้ายกลุ่มให้ ${x.length} ห้องที่เลือก?`)){o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await Do(e.id,x),N("อนุมัติแล้ว ✅","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+he(d),"error"),o.target.disabled=!1,o.target.textContent="อนุมัติที่เลือก"}}}),t.querySelector("#sgr-reject").addEventListener("click",async o=>{var r;if(!confirm("ปฏิเสธคำขอนี้?"))return;const x=t.querySelector("#sgr-comment").value.trim();o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await Ho(e.id,x),N("ปฏิเสธคำขอแล้ว","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+he(d),"error"),o.target.disabled=!1,o.target.textContent="ปฏิเสธ"}})}async function un(){Ie("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",Se(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let e=[],s=[],t="manage",n="สามัญ",l="",o="",x="";const r=g=>{if(!g)return null;const m=g.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return m?m[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},d=g=>g?/^(PR|อก\.|อป\.)/i.test(g)?"ศาสนา":/^ปวช\./i.test(g)?"ปวช":"สามัญ":"สามัญ",i={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},a=g=>e.map(m=>m.class_name).filter(m=>m&&d(m)===g).sort((m,k)=>m.localeCompare(k,"th")),p=g=>{const m=a(g),k=[...new Set(m.map($=>r($)).filter(Boolean))],_=i[g]||[];return[...new Set([..._,...k])].sort(($,S)=>$.localeCompare(S,"th"))},w=async()=>{const[g,m,k]=await Promise.all([na(),Et(),Zn()]);s=m,e=[...new Set(g.map($=>$.class_name).filter(Boolean))].map($=>k.find(q=>q.class_name===$)||{class_name:$,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},y=g=>s.find(m=>m.id===g),v=()=>{let g=document.getElementById("hc-print-roster-styles");g||(g=document.createElement("style"),g.id="hc-print-roster-styles",document.head.appendChild(g)),g.textContent=`
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
    `;const m=document.createElement("div");m.id="hc-print-roster-area",document.body.appendChild(m);const k=e.filter(S=>!(d(S.class_name)!==n||l&&r(S.class_name)!==l||o&&S.class_name!==o)).sort((S,q)=>S.class_name.localeCompare(q.class_name,"th"));let _="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";l&&(_+=` ระดับชั้น ${l}`),o&&(_+=` ห้อง ${o}`);const $=k.map((S,q)=>{const D=y(S.head_student_id),L=y(S.vice_head_student_id),C=D!=null&&D.image_url?`<img src="${D.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',O=L!=null&&L.image_url?`<img src="${L.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',z=D?`<b>${ae(D.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${D.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',M=L?`<b>${ae(L.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${L.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${q+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${ae(S.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${C}
              <div>${z}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${O}
              <div>${M}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${ae(S.notes??"")}</td>
        </tr>
      `}).join("");m.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${_}</div>
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
              ${$||'<tr><td colspan="5" style="text-align:center;padding:20px;color:#9ca3af;">ไม่พบข้อมูลห้องเรียน</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `,m.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},m.querySelector("#pr-btn-close-preview").onclick=()=>{m.remove()}},f=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,T=()=>{const g=x.trim().toLowerCase(),m=e.filter(k=>!(d(k.class_name)!==n||g&&!k.class_name.toLowerCase().includes(g))).sort((k,_)=>k.class_name.localeCompare(_.class_name,"th"));return m.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':m.map(k=>{const _=y(k.head_student_id),$=y(k.vice_head_student_id),S=_!=null&&_.image_url?`<img src="${_.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',q=$!=null&&$.image_url?`<img src="${$.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${ae(k.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${n}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${S}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${_?ae(_.full_name):"— ยังไม่ระบุ —"}</span>
                  ${_?`<span class="text-xs text-gray-400 font-mono">รหัส: ${_.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${q}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${$?ae($.full_name):"— ยังไม่ระบุ —"}</span>
                  ${$?`<span class="text-xs text-gray-400 font-mono">รหัส: ${$.student_code}</span>`:""}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${k.head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
              <p>เกียรติบัตรรอง: ${k.vice_head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${ae(k.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},c=()=>{const g=e.filter(m=>!(d(m.class_name)!==n||l&&r(m.class_name)!==l||o&&m.class_name!==o)).sort((m,k)=>m.class_name.localeCompare(k.class_name,"th"));return g.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':g.map((m,k)=>{const _=y(m.head_student_id),$=y(m.vice_head_student_id),S=_!=null&&_.image_url?`<img src="${_.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',q=$!=null&&$.image_url?`<img src="${$.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${k+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${ae(m.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${S}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${_?ae(_.full_name):"— ยังไม่ระบุ —"}</p>
                ${_?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${_.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${q}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${$?ae($.full_name):"— ยังไม่ระบุ —"}</p>
                ${$?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${$.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${ae(m.notes??"")}
          </td>
        </tr>
      `}).join("")},u=()=>{const g=e.filter(m=>!(d(m.class_name)!==n||l&&r(m.class_name)!==l||o&&m.class_name!==o)).length;t==="manage"?Se(`
        <div class="space-y-5 animate-fade">
          ${f()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${n==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${n==="ศาสนา"?"selected":""}>ศาสนา</option>
                <option value="ปวช" ${n==="ปวช"?"selected":""}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${ae(x)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${g}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${T()}
          </div>
        </div>
      `):(Se(`
        <div class="space-y-5 animate-fade">
          ${f()}

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
              <span class="text-xs text-gray-400">พบข้อมูลหัวหน้า/รองหัวหน้าทั้งหมด <b class="text-gray-700">${g}</b> ห้อง</span>
              <div class="flex gap-2">
                <button id="btn-cert-settings"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shadow-sm">
                  ⚙️ ตั้งค่าแสดงเกียรติบัตร
                </button>
                <button id="btn-print-leaders-roster"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  ${g===0?"disabled":""}>
                  🖨️ พิมพ์ใบรายชื่อ (${g})
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
                  ${c()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `),B()),I()},B=()=>{const g=document.getElementById("pr-filter-level");if(!g)return;const m=p(n);g.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${m.map(k=>`<option value="${k}" ${k===l?"selected":""}>${k}</option>`).join("")}
    `,h()},h=()=>{const g=document.getElementById("pr-filter-class");if(!g)return;const k=a(n).filter(_=>l?r(_)===l:!0);g.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${k.length} ห้อง) --</option>
      ${k.map(_=>`<option value="${_}" ${_===o?"selected":""}>ห้อง ${_}</option>`).join("")}
    `},I=()=>{var g,m,k,_,$,S,q,D,L;(g=document.getElementById("tab-manage"))==null||g.addEventListener("click",()=>{t="manage",u()}),(m=document.getElementById("tab-print"))==null||m.addEventListener("click",()=>{t="print",u()}),(k=document.getElementById("hc-filter-category"))==null||k.addEventListener("change",C=>{n=C.target.value,u()}),(_=document.getElementById("hc-search-classes"))==null||_.addEventListener("input",C=>{x=C.target.value;const O=document.getElementById("hc-cards-grid");O&&(O.innerHTML=T()),A()}),A(),($=document.getElementById("pr-filter-category"))==null||$.addEventListener("change",C=>{n=C.target.value,l="",o="",B(),E()}),(S=document.getElementById("pr-filter-level"))==null||S.addEventListener("change",C=>{l=C.target.value,o="",h(),E()}),(q=document.getElementById("pr-filter-class"))==null||q.addEventListener("change",C=>{o=C.target.value,E()}),(D=document.getElementById("btn-print-leaders-roster"))==null||D.addEventListener("click",v),(L=document.getElementById("btn-cert-settings"))==null||L.addEventListener("click",j)},E=()=>{const g=document.getElementById("pr-table-body");g&&(g.innerHTML=c());const m=e.filter(_=>!(d(_.class_name)!==n||l&&r(_.class_name)!==l||o&&_.class_name!==o)).length,k=document.getElementById("btn-print-leaders-roster");k&&(k.disabled=m===0,k.textContent=`🖨️ พิมพ์ใบรายชื่อ (${m})`)},A=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(g=>{g.addEventListener("click",()=>{const m=g.dataset.room,k=e.find(_=>_.class_name===m);k&&b(k)})})},j=()=>{const g=document.createElement("div");g.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const m=e.some(q=>q.show_cert);g.innerHTML=`
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
            <input type="checkbox" id="csm-global-toggle" class="sr-only peer" ${m?"checked":""}>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex justify-end shrink-0">
          <button id="csm-btn-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">เสร็จสิ้น</button>
        </div>
      </div>
    `,document.body.appendChild(g);const k=g.querySelector("#csm-global-toggle"),_=g.querySelector("#csm-status-text"),$=q=>{_.textContent=q?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};$(m),k.addEventListener("change",async()=>{const q=k.checked;k.disabled=!0,_.textContent="กำลังบันทึก...";try{await ro(q),e.forEach(D=>{D.show_cert=q}),$(q),N(q?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(D){N("บันทึกผิดพลาด: "+D.message,"error"),k.checked=!q,$(!q)}finally{k.disabled=!1}});const S=()=>g.remove();g.querySelector("#csm-modal-close").onclick=S,g.querySelector("#csm-btn-close").onclick=S},b=g=>{const m=document.createElement("div");m.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let k=y(g.head_student_id),_=y(g.vice_head_student_id);m.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขหัวหน้าและรองหัวหน้าห้อง</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">ห้องเรียน ${g.class_name}</p>
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
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(k==null?void 0:k.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${k?`
                ${k.image_url?`<img src="${k.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${ae(k.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${k.student_code} · ห้อง ${k.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Head Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-head-cert-in" placeholder="https://..." value="${g.head_cert_url??""}"
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
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(_==null?void 0:_.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${_?`
                ${_.image_url?`<img src="${_.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${ae(_.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${_.student_code} · ห้อง ${_.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Vice Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-vice-cert-in" placeholder="https://..." value="${g.vice_head_cert_url??""}"
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
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">${g.notes??""}</textarea>
            </div>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end shrink-0">
          <button id="ld-btn-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
          <button id="ld-btn-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">บันทึกข้อมูล</button>
        </div>
      </div>
    `,document.body.appendChild(m);let $=g.head_student_id,S=g.vice_head_student_id;const q=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},D=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},L=M=>{const F=document.getElementById("ld-head-card");if(M){$=M.id;const P=M.image_url?`<img src="${M.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';F.innerHTML=`
          ${P}
          <div>
            <p class="font-bold text-gray-800">${ae(M.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${M.student_code} · ห้อง ${M.main_room||"—"}</p>
          </div>
        `}else $=null,F.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},C=M=>{const F=document.getElementById("ld-vice-card");if(M){S=M.id;const P=M.image_url?`<img src="${M.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';F.innerHTML=`
          ${P}
          <div>
            <p class="font-bold text-gray-800">${ae(M.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${M.student_code} · ห้อง ${M.main_room||"—"}</p>
          </div>
        `}else S=null,F.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async M=>{const F=M.target.value.trim();if(F.length===5){q();const P=await ns(F).catch(()=>null);L(P)}else F.length===0&&($=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async M=>{const F=M.target.value.trim();if(F.length===5){D();const P=await ns(F).catch(()=>null);C(P)}else F.length===0&&(S=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const O=async(M,F)=>{const P=M.files[0];if(P){F.disabled=!0,F.value="กำลังอัปโหลดไฟล์...";try{const R=P.name.split(".").pop(),Y=`certificates/${g.id}/${M.id}-${Date.now()}.${R}`;let J=P;P.type.startsWith("image/")&&(J=await ol(P,{maxWidth:1600,quality:.88}));const{error:H}=await le.storage.from("system-assets").upload(Y,J,{upsert:!0,contentType:P.type});if(H)throw H;const{data:U}=le.storage.from("system-assets").getPublicUrl(Y);F.value=U.publicUrl}catch(R){N("อัปโหลดล้มเหลว: "+R.message,"error"),F.value=""}finally{F.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{O(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{O(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const z=()=>m.remove();document.getElementById("ld-modal-close").onclick=z,document.getElementById("ld-btn-cancel").onclick=z,document.getElementById("ld-btn-save").onclick=async()=>{const M=document.getElementById("ld-btn-save");M.disabled=!0,M.textContent="กำลังบันทึก...";const F=document.getElementById("ld-head-cert-in").value.trim(),P=document.getElementById("ld-vice-cert-in").value.trim(),R=document.getElementById("ld-notes-in").value.trim();try{await po(g.class_name,$,S,F,P,R),g.head_student_id=$,g.vice_head_student_id=S,g.head_cert_url=F,g.vice_head_cert_url=P,g.notes=R,N("บันทึกข้อมูลเรียบร้อยแล้ว","success"),z(),u()}catch(Y){N("เกิดข้อผิดพลาด: "+Y.message,"error"),M.disabled=!1,M.textContent="บันทึกข้อมูล"}}};await w(),u()}const pc=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:Rr,renderAnnouncements:Yr,renderAutoscaleHistory:Kr,renderClasses:Ja,renderClassroomLeaders:un,renderClassroomsAdmin:Pr,renderCouncilRepNominationSummary:Zr,renderCurriculum:_t,renderDepartments:Tr,renderDeptTable:pa,renderDonations:Xr,renderFeedbackAdmin:en,renderHolidays:qr,renderHomeroom:jr,renderHouseColors:Qr,renderImport:Ar,renderLifeSkillAdmin:Nr,renderMyReligionGroup:Oi,renderOverview:Oa,renderPayments:Mr,renderPeriods:ma,renderPrayerAdmin:Hr,renderReadingAdmin:Dr,renderRegisteredTeachers:ta,renderReligionGroups:on,renderRolePermissions:Jr,renderScoreColConfig:Br,renderSettings:Qa,renderStudents:Ir,renderSubjectGroupRequests:cn,renderSubjectTable:Za,renderSubjects:St,renderSupervisorAnnouncements:Li,renderTeacherTable:Dt,renderTeachers:Cr,renderUsageStats:Or,renderWorkCalendar:nn,renderWorkCalendarView:Hi},Symbol.toStringTag,{value:"Module"}));export{Zr as A,un as B,cn as C,en as D,Xr as E,wr as F,it as G,dt as H,vr as I,Id as J,Ye as K,wd as L,Qr as M,Jr as N,nn as O,Aa as P,Kr as Q,Yr as R,pc as S,on as a,Pr as b,Or as c,Rr as d,Ar as e,Qa as f,Hr as g,Dr as h,Nr as i,Mr as j,qr as k,ta as l,Br as m,jr as n,ma as o,_t as p,Tr as q,St as r,Ir as s,Ja as t,Cr as u,bd as v,Oa as w,Dt as x,Za as y,pa as z};
