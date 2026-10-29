const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-CQwFwlFA.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/admin-subject-management-BjPfXwa4.js","assets/ui-Bnz8GMvV.js","assets/ai-prompt-gate-D6R7FVed.js","assets/admin-schedule-management-CZaewYhG.js","assets/teacher-views-classes-D9DmK5kb.js","assets/browser-JP79f-a9.js","assets/sync-C8r-x1ZV.js","assets/regrade-api-CLR_bWyN.js","assets/pp5-doc-DBagoZVA.js","assets/score-display-CQ4dUIPx.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-Du8GiC29.js","assets/storage-CuUjCgvI.js","assets/teacher-views-grades-DX_4l82u.js","assets/score-qr-scanner-BkLwDGpT.js","assets/teacher-views-attendance-B2Hv9l-t.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/admin-schedule-import-d9kR6dag.js","assets/tutorial-OYg6u0Vk.js","assets/teacher-views-donor-chat-Cw2WJ23l.js","assets/donation-utils-DtZioNqn.js","assets/teacher-views-certificates--YM_FRrm.js","assets/certificate-engine-C9CSnChU.js","assets/certificate-editor-DJRUUdUu.js","assets/student-views-jtTIrgpg.js","assets/student-api-Wv4_pEvv.js","assets/assignment-annotations-api-Y9qfMpYa.js","assets/theme-qDnPEUQn.js","assets/quiz-api-CIrXv0v0.js","assets/academic-term-switcher-CDqMXNGE.js"])))=>i.map(i=>d[i]);
import{a as N,g as he,_ as Se,A as xn,d as ts,i as gn,s as qs,b as $t,j as za,k as As,l as Fa}from"./ui-Bnz8GMvV.js";import{getExecClassOverview as bn,getDepartments as ot,getSystemConfig as Me,getTeachers as Re,getLeavePermissionDashboard as yn,getPendingSubjectGroupRequests as Ms,getAllAppFeedback as Ns,getAllPaymentRequests as Xe,deleteTeacher as fn,getMasterSubjects as ra,deleteSubject as hn,deleteDepartment as vn,deletePeriod as wn,updateTeacher as _n,createTeacher as $n,updateDepartment as kn,createDepartment as Sn,upsertPeriod as En,upsertHoliday as Ln,deleteHoliday as Cn,getPeriods as In,getCurriculumStandards as Tn,updateCurriculumStandard as jn,createCurriculumStandard as Bn,importCurriculumStandards as qn,deleteCurriculumStandard as An,getClasses as na,createSubject as Mn,updateSystemConfig as Ee,deleteClass as Ds,getAcademicTerms as oa,getUniqueRooms as Nn,getUniqueReligionRooms as Hs,deleteHomeroomTeacher as Dn,getHomeroomTeachers as Ft,getStudents as Et,deleteStudent as Hn,updateStudent as Rn,getClassrooms as as,getScoreColumnConfig as On,upsertScoreColumnConfig as Pn,getReligionGroups as ut,getSchoolHolidaysFull as zn,upsertHomeroomTeachersBatch as Fn,updateClassroom as Un,createClassroom as Vn,getLifeSkillColumns as ss,getReadingScoreColumns as Gn,getHouseGroups as Wn,updateTeacherPosition as ja,deleteReligionGroup as Yn,updateReligionGroup as Kn,createReligionGroup as Jn,getReligionGroupMembers as Qn,getClassroomLeaders as Zn,deleteClassroom as Xn,fillLifeSkillScoresToClassScores as Ut,fillPrayerScoresToReligionClassScores as eo,assignStudentsHouseColor as rs,setReligionGroupMembers as to,getAllReadingScores as ao,deleteReadingScoreColumn as so,updateAllClassroomCertsToggle as ro,getAllLifeSkillScores as no,createLifeSkillColumn as Rs,updateLifeSkillColumn as Os,deleteLifeSkillColumn as oo,updateReadingScoreColumn as lo,createReadingScoreColumn as io,getStudentsByReligionRoom as co,getPrayerRecordsByRoom as uo,getStudentByCode as ns,updateClassroomLeaders as po,autoEnrollStudentsByRoom as mo,getTeachersWithPositions as xo,previewNewSemester as go,purgeTermSourceDataBatch as bo,startNewSemester as yo,getScheduleTeacherIds as fo,mergeTeacherAccounts as ho,unlinkTeacherAccount as vo,getStats as os,getAllCouncilRepNominations as wo,getRolePermissions as _o,saveRolePermission as $o,getAllAnnouncements as Ps,getUsageStats as ko,reviewPaymentRequest as Ot,approveTeacherQuota as ba,getAllSubjectGroupRequests as So,setFeedbackRead as ls,setFeedbackCategory as Eo,deleteAppFeedback as Lo,advisorResetStudentPassword as Co,markStudentPasswordResetNotice as Io,setFeedbackStatusReply as ds,updateAnnouncement as ya,createAnnouncement as fa,getAnnouncementCommentsBulk as To,deleteAnnouncement as jo,getPaymentSlipViewUrl as Bo,getPrayerMonitoringData as qo,getLifeSkillMonitoringData as Ao,getReadingMonitoringData as Mo,getCandidateClassesForGroupRequest as No,approveSubjectGroupRequest as Do,rejectSubjectGroupRequest as Ho,notifyFeedbackReply as Ro,getAnnouncementComments as Oo,deleteAnnouncementComment as Po,assignHomeroomTeacher as zs,savePrayerCellAdmin as zo}from"./api-CQwFwlFA.js";import{r as Fo}from"./leave-monitor.js_v_10.18-CgkoZgHt.js";import{A as Uo,o as Vo,c as Fs,a as Ye,b as Ba,r as Us}from"./academic-term-switcher-CDqMXNGE.js";import{s as ie}from"./supabase-BV-W2lsh.js";import{DEFAULT_SUBJECT_SYNC_COLUMNS as ha,DEFAULT_SUBJECT_SYNC_KEY_FIELD as is,DEFAULT_SUBJECT_SYNC_TAB as va,DEFAULT_SUBJECT_SYNC_SHEET_ID as Go,SUBJECT_SYNC_COLUMNS as cs,syncSubjectCatalog as Wo,COPY_TEMPLATE_CONFIG as Yo,previewStudentsFromSheet as Ko,syncStudentsFromSheetNow as Jo}from"./sync-C8r-x1ZV.js";import{o as Vs}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as us,_dateInputValue as Gs,_readingGrade as Ws,READING_GRADES as ht,_htmlEsc as Pe,parseSubjectVisuals as Qo,SUBJECT_VISUAL_PRESETS as ps}from"./teacher-views-utils-Du8GiC29.js";import{r as Zo,a as Xo,b as el,c as Ys,d as tl}from"./teacher-views-classes-D9DmK5kb.js";import{renderCourseForm as al}from"./teacher-views-2s9snTSH.js";import"./browser-JP79f-a9.js";import{uploadShirtDesignHtml as sl,uploadShirtDesignColorImage as rl,uploadTeacherPhoto as nl,uploadDeptAsset as ms,uploadAnnouncementImage as Ks,compressImage as ol,uploadStickerPng as xs,uploadSystemAsset as ll}from"./storage-CuUjCgvI.js";import{c as Js}from"./ai-prompt-gate-D6R7FVed.js";import"./teacher-views-grades-DX_4l82u.js";import{n as gs,d as dl,s as il,a as cl,W as ul}from"./workload-scheduler-C9WpzjbH.js";import{i as pl,a as ml,p as xl,b as gl}from"./import-CkRxZwdc.js";import{a as Qs}from"./theme-qDnPEUQn.js";import{f as bl}from"./leave-time-CrS9gT63.js";import{b as yl}from"./anti-pull-refresh-BGrI1pMY.js";import{o as fl}from"./azizgames-modal-CZNvwg6f.js";import{r as hl}from"./sports-awards-admin-6oCPrlSb.js";import{getEffectiveUser as Zs,getEffectiveProfileId as Xs}from"./impersonation-0xVfgYVY.js";const vl=["ci_micro","ci_small","ci_medium"],wl={ci_micro:1,ci_small:2,ci_medium:3},_l={ci_micro:"Micro",ci_small:"Small",ci_medium:"Medium"},$l=7*60*60*1e3,kl=/^\d{4}-\d{2}-\d{2}$/,bs=/^(?:([01]\d|2[0-3]):([0-5]\d)|24:00)$/,Yt=e=>vl.includes(e),ys=e=>kl.test(String(e??""))&&!Number.isNaN(Date.parse(`${e}T00:00:00Z`))&&new Date(`${e}T00:00:00Z`).toISOString().slice(0,10)===e,Kt=e=>e==="24:00"?1440:Number(e.slice(0,2))*60+Number(e.slice(3)),er=e=>new Date(`${e}T00:00:00Z`),tr=e=>e.toISOString().slice(0,10),Sl=(e,s)=>{const t=er(e);return t.setUTCDate(t.getUTCDate()+s),tr(t)},fs=e=>er(e).getUTCDay(),Nt=e=>_l[e]??e,Jt=e=>wl[e]??0;function El(e){var t;if(!e||e.schemaVersion!==1)return e;const s=[];for(const n of Array.isArray(e.periods)?e.periods:[])for(let l=0;l<7;l+=1){const o=(t=n.days)==null?void 0:t[l];o!=null&&o.enabled&&s.push({id:`legacy-${s.length+1}`,startDate:n.startDate,endDate:n.endDate,days:[l],start:o.start,end:o.end,targetTier:"ci_medium",label:"ช่วงเดิมจากตาราง Medium"})}return{schemaVersion:2,enabled:!!e.enabled,timezone:"Asia/Bangkok",defaultTier:"ci_micro",guardrail:e.guardrail,rules:s}}function Ll(e){const s=El(e);return!s||typeof s!="object"||s.schemaVersion!==2?s:{schemaVersion:2,enabled:!!s.enabled,timezone:s.timezone||"Asia/Bangkok",defaultTier:Yt(s.defaultTier)?s.defaultTier:"ci_micro",guardrail:s.guardrail,rules:(Array.isArray(s.rules)?s.rules:[]).map((t,n)=>({id:t.id||`rule-${n+1}`,startDate:t.startDate,endDate:t.endDate,days:[...new Set((Array.isArray(t.days)?t.days:[]).map(Number))],start:t.start,end:t.end,targetTier:Yt(t.targetTier)?t.targetTier:"ci_micro",label:String(t.label??"")}))}}function et(e){const s=Ll(e);if(!s||s.schemaVersion!==2||typeof s.enabled!="boolean"||!Array.isArray(s.rules))throw new Error("รูปแบบตารางเวลาไม่ถูกต้อง");if(!Yt(s.defaultTier))throw new Error("ระดับเครื่องเริ่มต้นไม่ถูกต้อง");if(!["Asia/Bangkok"].includes(s.timezone))throw new Error("โซนเวลาต้องเป็น Asia/Bangkok");if(s.rules.length>200)throw new Error("เพิ่มช่วงเวลาได้ไม่เกิน 200 ช่วง");for(const t of s.rules){if(!ys(t.startDate)||!ys(t.endDate)||t.startDate>t.endDate)throw new Error("กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง");if(!Array.isArray(t.days)||!t.days.length||t.days.some(n=>!Number.isInteger(n)||n<0||n>6))throw new Error("กรุณาเลือกวันอย่างน้อยหนึ่งวัน");if(!bs.test(t.start)||!bs.test(t.end)||Kt(t.start)===Kt(t.end))throw new Error("เวลาเริ่มและเวลาสิ้นสุดต้องถูกต้องและไม่เท่ากัน");if(!Yt(t.targetTier))throw new Error("ระดับเครื่องในช่วงเวลาไม่ถูกต้อง")}if(s.enabled&&!s.rules.length)throw new Error("กรุณากำหนดอย่างน้อยหนึ่งช่วงเวลาก่อนเปิดใช้งาน");return s}function Cl(e,s){const t=fs(s),n=Sl(s,-1),l=fs(n),o=[];for(const x of e.rules){const r=Kt(x.start),d=Kt(x.end);if(r<d){s>=x.startDate&&s<=x.endDate&&x.days.includes(t)&&o.push({start:r,end:d,targetTier:x.targetTier,id:x.id});continue}s>=x.startDate&&s<=x.endDate&&x.days.includes(t)&&o.push({start:r,end:1440,targetTier:x.targetTier,id:x.id}),n>=x.startDate&&n<=x.endDate&&x.days.includes(l)&&o.push({start:0,end:d,targetTier:x.targetTier,id:x.id})}return o.filter(x=>x.end>x.start)}function Ua(e,s){const t=et(e),n=new Set([0,1440]),l=Cl(t,s);for(const r of l)n.add(r.start),n.add(r.end);const o=[...n].sort((r,d)=>r-d),x=[];for(let r=0;r<o.length-1;r+=1){const d=o[r],i=o[r+1],a=d+(i-d)/2,w=l.filter(v=>a>=v.start&&a<v.end).reduce((v,h)=>Jt(h.targetTier)>Jt(v)?h.targetTier:v,t.defaultTier),f=x[x.length-1];(f==null?void 0:f.targetTier)===w&&f.end===d?f.end=i:x.push({start:d,end:i,targetTier:w})}return x}function Il(e,s=new Date){var x;const t=et(e);if(!t.enabled)return null;const n=new Date(s.getTime()+$l),l=tr(n),o=n.getUTCHours()*60+n.getUTCMinutes();return((x=Ua(t,l).find(r=>o>=r.start&&o<r.end))==null?void 0:x.targetTier)??t.defaultTier}const Tl=()=>({schemaVersion:2,enabled:!1,timezone:"Asia/Bangkok",defaultTier:"ci_micro",rules:[]}),Pt={minimumMediumHoldMinutes:60,minimumSmallHoldMinutes:30,healthyStreakRequired:3,recoveryLockMinutes:60};function hs(e={}){const s=(t,n,l,o)=>{const x=Number(t);return Number.isFinite(x)?Math.max(l,Math.min(o,x)):n};return{minimumMediumHoldMinutes:s(e.minimumMediumHoldMinutes,Pt.minimumMediumHoldMinutes,0,24*60),minimumSmallHoldMinutes:s(e.minimumSmallHoldMinutes,Pt.minimumSmallHoldMinutes,0,24*60),healthyStreakRequired:Math.round(s(e.healthyStreakRequired,Pt.healthyStreakRequired,1,12)),recoveryLockMinutes:s(e.recoveryLockMinutes,Pt.recoveryLockMinutes,0,24*60)}}const la={ci_micro:.01344,ci_small:.0206,ci_medium:.0822},ar=(e,s)=>{const t=new Date(e.getTime());return t.setUTCDate(t.getUTCDate()+s),t},sr=e=>e.toISOString().slice(0,10);function rr(){return Object.fromEntries(Object.keys(la).map(e=>[e,0]))}function jl(e,s){const t=rr();for(const o of Ua(e,sr(s)))t[o.targetTier]+=o.end-o.start;const n=Object.fromEntries(Object.entries(t).map(([o,x])=>[o,x/60])),l=Object.entries(n).reduce((o,[x,r])=>o+r*la[x],0);return{...n,tierHours:n,tierMinutes:t,usd:l,mediumHours:n.ci_medium,smallHours:n.ci_small,microHours:n.ci_micro}}function wa(e,s,t){const n={usd:0,days:t,tierHours:rr()};for(let l=0;l<t;l+=1){const o=jl(e,ar(s,l));n.usd+=o.usd;for(const x of Object.keys(n.tierHours))n.tierHours[x]+=o.tierHours[x]}return{...n,mediumHours:n.tierHours.ci_medium,smallHours:n.tierHours.ci_small,microHours:n.tierHours.ci_micro}}function Bl(e,s){const t=et(e),n=new Date(`${s}T00:00:00Z`);if(Number.isNaN(n.getTime())||sr(n)!==s)throw new Error("วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง");const l=ar(n,-((n.getUTCDay()+6)%7)),o=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1)),x=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0)).getUTCDate(),r={day:wa(t,n,1),week:wa(t,l,7),month:wa(t,o,x)};return r.defaultTier=t.defaultTier,r.defaultTierLabel=Nt(t.defaultTier),r.tierOrder=Object.keys(la).sort((d,i)=>Jt(d)-Jt(i)),r}const nr=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],Ne=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),or=[["ci_micro","Micro"],["ci_small","Small"],["ci_medium","Medium"]],lr={ci_micro:"border-slate-300 bg-slate-50 text-slate-700",ci_small:"border-emerald-300 bg-emerald-50 text-emerald-800",ci_medium:"border-rose-300 bg-rose-50 text-rose-800"},ql=nr,_a=[{key:"prayer",label:"🙏 ละหมาด",description:"ควบคุมช่วง polling และจอแสดงผลการเช็คชื่อละหมาด",features:["prayer_monitor"]},{key:"leave",label:"🚪 ออกนอกห้องเรียน",description:"ควบคุมจอติดตามนักเรียนออกนอกห้องเรียน",features:["leave_monitor"]},{key:"sports",label:"🏅 กีฬาสี",description:"ควบคุมจอสด scoreboard และคิว live ของกีฬาสี",features:["azizgames","azfutsal"]}],Qt=()=>new Date(Date.now()+7*36e5).toISOString().slice(0,10),qa=e=>`border rounded-lg px-3 py-1.5 text-xs transition ${e?"bg-indigo-700 border-indigo-700 text-white":"bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`,dr=e=>or.map(([s,t])=>`<option value="${s}" ${e===s?"selected":""}>${t}</option>`).join(""),vs=()=>({id:`rule-${Date.now()}-${Math.random().toString(16).slice(2)}`,startDate:Qt(),endDate:Qt(),days:[1,2,3,4,5],start:"07:45",end:"16:30",targetTier:"ci_medium",label:"ช่วงใช้งานหลัก"}),Al=(e,s)=>{const t=ul[e],n=s.features[e],l=cl(e,new Date,s),o=l.nextTransitionAt?new Date(l.nextTransitionAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"}):"—";return`<section class="border rounded-2xl p-4" data-workload-feature="${e}">
    <div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-bold">${t.label}</h3><p class="text-xs text-gray-500">${t.description}</p></div><div class="text-right text-xs"><div class="font-bold">${l.status}</div><div class="text-gray-500">เปลี่ยนถัดไป: ${Ne(o)}</div></div></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Mode<select name="mode" class="block border rounded-lg p-2 w-full mt-1"><option ${n.mode==="AUTO"?"selected":""}>AUTO</option><option ${n.mode==="ON"?"selected":""}>ON</option><option ${n.mode==="OFF"?"selected":""}>OFF</option></select></label>
      ${t.dateRange?`<label class="text-sm">วันที่เริ่ม<input name="dateFrom" type="date" value="${Ne(n.dateFrom||"")}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input name="dateTo" type="date" value="${Ne(n.dateTo||"")}" class="block border rounded-lg p-2 w-full mt-1"></label>`:"<span></span><span></span>"}
      <div class="grid grid-cols-2 gap-2"><label class="text-sm">เริ่ม<input name="start" type="time" value="${Ne(n.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">สิ้นสุด<input name="end" type="time" value="${Ne(n.end)}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3"><label class="text-sm">Buffer ก่อน (นาที)<input name="bufferBefore" type="number" min="0" max="1440" value="${n.bufferBefore}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Buffer หลัง (นาที)<input name="bufferAfter" type="number" min="0" max="1440" value="${n.bufferAfter}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    <div class="flex flex-wrap gap-2 mt-3">${n.days.map((x,r)=>`<label class="inline-flex items-center gap-1 text-xs border rounded-lg px-2 py-1"><input type="checkbox" name="day-${r}" ${x?"checked":""}>${ql[r]}</label>`).join("")}</div>
  </section>`},Ml=e=>{try{return`<div class="flex h-9 overflow-hidden rounded-lg border bg-gray-100">${Ua(e,Qt()).map(t=>{const n=Math.max(1,(t.end-t.start)/1440*100),l=`${String(Math.floor(t.start/60)).padStart(2,"0")}:${String(t.start%60).padStart(2,"0")}`,o=`${String(Math.floor(t.end/60)).padStart(2,"0")}:${String(t.end%60).padStart(2,"0")}`;return`<div class="${lr[t.targetTier]} border-r flex items-center justify-center text-[10px] font-bold overflow-hidden" style="width:${n}%" title="${Nt(t.targetTier)} ${l}–${o}">${n>8?`${Nt(t.targetTier)} ${l}–${o}`:""}</div>`}).join("")}</div>`}catch{return'<div class="rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">กรอกช่วงเวลาให้ครบเพื่อดูตัวอย่าง Timeline</div>'}},Nl=(e,s)=>`<section class="bg-white border rounded-2xl p-4 shadow-sm" data-rule="${s}" data-rule-id="${Ne(e.id)}">
  <div class="flex flex-wrap gap-3 items-end justify-between">
    <div class="flex flex-wrap gap-3 items-end"><label class="text-sm">วันที่เริ่ม<input required type="date" name="startDate" value="${Ne(e.startDate)}" class="block border rounded-lg p-2 mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input required type="date" name="endDate" value="${Ne(e.endDate)}" class="block border rounded-lg p-2 mt-1"></label></div>
    <div class="flex gap-2"><button type="button" data-duplicate-rule class="border rounded-lg px-3 py-2 text-sm">ทำสำเนา</button><button type="button" data-remove-rule class="border rounded-lg px-3 py-2 text-sm text-red-700">ลบช่วงนี้</button></div>
  </div>
  <div class="mt-3 flex flex-wrap gap-2 items-center"><span class="text-sm font-medium mr-1">วันที่ใช้:</span>${nr.map((t,n)=>`<button type="button" data-day-toggle="${n}" data-selected="${e.days.includes(n)}" class="${qa(e.days.includes(n))}">${t.slice(0,3)}</button>`).join("")}<button type="button" data-day-preset="weekdays" class="text-xs underline text-indigo-700 ml-2">จ–ศ</button><button type="button" data-day-preset="all" class="text-xs underline text-indigo-700">ทุกวัน</button></div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">เวลาเริ่ม<input required type="time" name="start" value="${Ne(e.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">เวลาสิ้นสุด<input required type="time" name="end" value="${Ne(e.end)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">ระดับเครื่อง<select name="targetTier" class="block border rounded-lg p-2 w-full mt-1">${dr(e.targetTier)}</select></label><label class="text-sm">หมายเหตุ<input name="label" value="${Ne(e.label)}" maxlength="80" placeholder="เช่น ช่วงเรียน / ช่วงกลางคืน" class="block border rounded-lg p-2 w-full mt-1"></label></div>
</section>`;async function Aa(){document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-white",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-indigo-200",d.dataset.nav!=="autoscale-settings")}),document.getElementById("page-title").textContent="ตั้งค่ากำลังเครื่องฐานข้อมูล";const e=document.getElementById("main-content");e.innerHTML='<p class="p-6">กำลังโหลดตารางเวลา...</p>';let s,t,n={},l=Qt(),o="overview";try{const{data:d,error:i}=await ie.from("system_config").select("key,value,updated_at").in("key",["autoscaleSchedule","autoscaleState","workloadSchedule"]);if(i)throw i;const a=d.find(v=>v.key==="autoscaleSchedule"),m=a!=null&&a.value?JSON.parse(a.value):Tl();s={...et(m),guardrail:hs(m.guardrail)};const w=d.find(v=>v.key==="autoscaleState");n=w?{...JSON.parse(w.value),updatedAt:w.updated_at}:{};const f=d.find(v=>v.key==="workloadSchedule");t=gs(f!=null&&f.value?JSON.parse(f.value):dl())}catch(d){e.innerHTML=`<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${Ne(d.message)}</p>`;return}const x=()=>{var d,i,a,m,w;return{schemaVersion:2,enabled:s.enabled,timezone:"Asia/Bangkok",defaultTier:((d=e.querySelector("[name=defaultTier]"))==null?void 0:d.value)||s.defaultTier,guardrail:{minimumMediumHoldMinutes:Number(((i=e.querySelector("[name=minimumMediumHoldMinutes]"))==null?void 0:i.value)||s.guardrail.minimumMediumHoldMinutes),minimumSmallHoldMinutes:Number(((a=e.querySelector("[name=minimumSmallHoldMinutes]"))==null?void 0:a.value)||s.guardrail.minimumSmallHoldMinutes),healthyStreakRequired:Number(((m=e.querySelector("[name=healthyStreakRequired]"))==null?void 0:m.value)||s.guardrail.healthyStreakRequired),recoveryLockMinutes:Number(((w=e.querySelector("[name=recoveryLockMinutes]"))==null?void 0:w.value)||s.guardrail.recoveryLockMinutes)},rules:[...e.querySelectorAll("[data-rule]")].map((f,v)=>({id:f.dataset.ruleId||`rule-${v+1}`,startDate:f.querySelector("[name=startDate]").value,endDate:f.querySelector("[name=endDate]").value,days:[...f.querySelectorAll('[data-day-toggle][data-selected="true"]')].map(h=>Number(h.dataset.dayToggle)),start:f.querySelector("[name=start]").value,end:f.querySelector("[name=end]").value,targetTier:f.querySelector("[name=targetTier]").value,label:f.querySelector("[name=label]").value}))}},r=()=>{let d=null;try{d=s.enabled?Il(s):null}catch{}const i=d?Nt(d):s.enabled?"กรุณาตรวจตารางเวลา":"คงระดับเดิม",a=Number(n.scheduleSchemaVersion)>=2,m=or.map(([h,I])=>`<span class="inline-flex items-center gap-2 border rounded-xl px-3 py-2 ${lr[h]}"><span class="font-bold">${I}</span><span>$${la[h].toFixed(5)}/ชม.</span></span>`).join("");e.innerHTML=`<div class="space-y-5 animate-fade">
      <div role="tablist" aria-label="กลุ่มการตั้งค่ากำลังเครื่อง" class="bg-white border rounded-2xl p-2 shadow-sm flex flex-wrap gap-2"><button type="button" role="tab" data-autoscale-tab="overview" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">📊 ภาพรวม</button><button type="button" role="tab" data-autoscale-tab="schedule" class="flex-1 min-w-[190px] rounded-xl px-4 py-3 text-sm font-bold transition">🗓️ ตารางปรับกำลังเครื่อง</button>${_a.map(h=>`<button type="button" role="tab" data-autoscale-tab="${h.key}" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">${h.label}</button>`).join("")}</div>
      <div id="autoscale-panel-overview" data-autoscale-panel="overview" role="tabpanel" class="space-y-5"><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>${n.mode!=="schedule"||!a?'<p class="mt-3 text-red-700">backend ยังไม่พร้อมสำหรับตาราง Micro / Small / Medium — กรุณา deploy autoscale-tick รุ่นใหม่ แล้วกดรีเฟรชสถานะก่อนบันทึก</p>':""}<p class="text-sm text-gray-600 mt-2">ระบบจะเลือกเป้าหมายตามช่วงเวลาที่กำหนด: Micro → Small → Medium และจะลดระดับก็ต่อเมื่อ health/guardrail ผ่าน</p><p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับปัจจุบัน ไม่ใช่ปิดฐานข้อมูล</p><div class="mt-4 border rounded-xl p-4 ${s.enabled?"bg-green-50 border-green-300 text-green-900":"bg-gray-100 border-gray-300 text-gray-800"}"><p class="text-lg font-bold">สถานะตาราง: ${s.enabled?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"}</p><p class="text-sm mt-1">เป้าหมายตามเวลาตอนนี้: <strong>${i}</strong></p></div><p class="text-xs text-gray-500 mt-2">ระดับเครื่องที่ตรวจจาก Supabase: ${Ne(n.currentTier||"ยังไม่มีข้อมูล")} · ตรวจระดับจริงล่าสุด: ${n.currentTierObservedAt?Ne(new Date(n.currentTierObservedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"ยังไม่เคยตรวจ"}</p><p class="text-xs text-gray-500 mt-1">สถานะงาน: ${Ne(n.status||"—")} · คำสั่งที่รอยืนยัน: ${Ne(n.pendingTier?Nt(n.pendingTier):"ไม่มี")}</p>${n.lastError?`<p class="text-xs text-amber-700 mt-1">รายละเอียด: ${Ne(n.lastError)}</p>`:""}<div class="flex flex-wrap gap-3 mt-4"><button id="as-enable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-green-700 border-green-700 text-white":"bg-white border-green-700 text-green-800"}">เปิดใช้งาน${s.enabled?" ✓":""}</button><button id="as-disable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-white border-gray-300 text-gray-700":"bg-gray-700 border-gray-700 text-white"}">ปิดใช้งาน${s.enabled?"":" ✓"}</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div></div><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold">💰 ราคาอ้างอิง Compute</h2><div class="flex flex-wrap gap-2 mt-3">${m}</div><label class="block text-sm mt-4">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${l}" class="border rounded-lg p-2 mt-1"></label><div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div><p class="text-xs text-gray-500 mt-3">เป็นค่าประมาณตามตาราง ไม่ใช่ยอดบิลจริง และควรตรวจราคากับ Supabase ก่อนใช้งานจริง</p></div></div>
      <form id="as-form" data-autoscale-panel="schedule" role="tabpanel" class="space-y-4"><section class="border rounded-2xl p-4 bg-amber-50"><h3 class="font-bold">🛡️ Guardrail การลดระดับ</h3><p class="text-xs text-gray-600 mt-1">การเปลี่ยนขึ้นทำได้ในรอบตรวจถัดไป ส่วนการลดจะรอ health ปกติ, healthy streak และช่วง hold ที่กำหนด</p><div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Hold หลัง Medium (นาที)<input name="minimumMediumHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumMediumHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Hold หลัง Small (นาที)<input name="minimumSmallHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumSmallHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Healthy streak (รอบ)<input name="healthyStreakRequired" type="number" min="1" max="12" value="${s.guardrail.healthyStreakRequired}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Recovery lock (นาที)<input name="recoveryLockMinutes" type="number" min="0" max="1440" value="${s.guardrail.recoveryLockMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label></div></section><section class="border rounded-2xl p-4 bg-white"><div class="flex flex-wrap justify-between gap-3 items-end"><div><h3 class="font-bold">ตารางช่วงเวลา</h3><p class="text-xs text-gray-500 mt-1">กำหนดวันซ้ำได้หลายวัน และกรอกข้ามวันได้ เช่น 22:00–02:00</p></div><label class="text-sm">ระดับพื้นฐานนอกช่วงเวลา<select name="defaultTier" class="border rounded-lg p-2 ml-2">${dr(s.defaultTier)}</select></label></div><div class="mt-4">${Ml(s)}</div></section><div id="as-rules" class="space-y-4">${s.rules.map(Nl).join("")}</div><div class="flex flex-wrap gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงเวลา</button><button type="button" id="as-weekday-template" class="border bg-white rounded-xl px-4 py-2">สร้างตารางวันเรียนพื้นฐาน</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div><p class="text-xs text-gray-500">ระบบจะเลือก tier สูงสุดเมื่อช่วงเวลาซ้อนกัน และมีผลในรอบตรวจถัดไป ปกติทุก 5 นาที</p></form>
      ${_a.map(h=>`<section id="autoscale-panel-${h.key}" data-autoscale-panel="${h.key}" role="tabpanel" class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">${h.label}</h2><p class="text-sm text-gray-600 mt-2">${h.description} · AUTO ใช้ตาราง, ON บังคับเปิด, OFF บังคับปิด</p><div class="space-y-4 mt-4">${h.features.map(I=>Al(I,t)).join("")}</div></section>`).join("")}
      <div data-autoscale-workload-actions class="hidden flex gap-3 bg-white border rounded-2xl p-4 shadow-sm"><button type="button" id="workload-save" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกการตั้งค่า Workload ทั้งหมด</button><button type="button" id="workload-refresh" class="border rounded-xl px-4 py-2">รีเฟรช Workload</button><p class="self-center text-xs text-gray-500">บันทึกครั้งเดียว ครอบคลุมทุกแท็บ</p></div>
    </div>`;const w=h=>{o=h,e.querySelectorAll("[data-autoscale-tab]").forEach(u=>{const p=u.dataset.autoscaleTab===o;u.setAttribute("aria-selected",String(p)),u.classList.toggle("bg-indigo-700",p),u.classList.toggle("text-white",p),u.classList.toggle("shadow-sm",p),u.classList.toggle("bg-gray-100",!p),u.classList.toggle("text-gray-700",!p)}),e.querySelectorAll("[data-autoscale-panel]").forEach(u=>u.classList.toggle("hidden",u.dataset.autoscalePanel!==o));const I=_a.some(u=>u.key===o);e.querySelectorAll("[data-autoscale-workload-actions]").forEach(u=>u.classList.toggle("hidden",!I))};e.querySelectorAll("[data-autoscale-tab]").forEach(h=>{h.id=`autoscale-tab-${h.dataset.autoscaleTab}`,h.onclick=()=>w(h.dataset.autoscaleTab)}),w(o);const f=()=>{try{const h=Bl({...x(),enabled:!1},l);e.querySelector("#as-cost-tags").innerHTML=[["day","รายวัน"],["week","รายสัปดาห์"],["month","รายเดือน"]].map(([I,u])=>{const p=h[I];return`<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${u} (${p.days} วัน)</span><strong>$${p.usd.toFixed(4)}</strong><span class="block text-xs">Micro ${p.microHours.toFixed(1)} ชม. · Small ${p.smallHours.toFixed(1)} ชม. · Medium ${p.mediumHours.toFixed(1)} ชม.</span></span>`}).join("")}catch{const h=e.querySelector("#as-cost-tags");h&&(h.textContent="กรุณากรอกวันที่ เวลา วัน และระดับเครื่องให้ครบเพื่อคำนวณ")}};e.querySelector("#as-cost-date").onchange=h=>{l=h.target.value,f()},e.querySelector("#as-form").addEventListener("input",f),f();const v=async h=>{try{const I=h===!1?{...s,enabled:!1}:{...x(),enabled:h===!0?!0:s.enabled},u=et(I);if(!a||u.enabled&&n.mode!=="schedule")throw new Error("backend ยังไม่พร้อมสำหรับ schema ตารางใหม่ กรุณา deploy autoscale-tick แล้วกดรีเฟรชสถานะก่อน");e.querySelectorAll("button").forEach(j=>{j.disabled=!0});const{error:p}=await ie.from("system_config").upsert({key:"autoscaleSchedule",value:JSON.stringify(u),updated_at:new Date().toISOString()},{onConflict:"key"});if(p)throw p;s={...u,guardrail:hs(u.guardrail)},r(),N("บันทึกแล้ว มีผลในรอบตรวจถัดไป","success")}catch(I){N(Ne(I.message),"error"),e.querySelectorAll("button").forEach(u=>{u.disabled=!1})}};e.querySelector("#as-form").onsubmit=h=>{h.preventDefault(),v()},e.querySelector("#as-enable").onclick=()=>v(!0),e.querySelector("#as-disable").onclick=()=>v(!1),e.querySelector("#as-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Aa()},e.querySelector("#as-add").onclick=()=>{s=et({...x(),enabled:!1}),s.rules.push(vs()),r()},e.querySelector("#as-weekday-template").onclick=()=>{s=et({...x(),enabled:!1}),s.rules=[vs()],r()},e.querySelectorAll("[data-remove-rule]").forEach(h=>h.onclick=()=>{s=et({...x(),enabled:!1});const I=h.closest("[data-rule]");s.rules.splice(Number(I.dataset.rule),1),r()}),e.querySelectorAll("[data-duplicate-rule]").forEach(h=>h.onclick=()=>{s=et({...x(),enabled:!1});const I=h.closest("[data-rule]"),u={...s.rules[Number(I.dataset.rule)],id:`rule-${Date.now()}`,label:`${s.rules[Number(I.dataset.rule)].label||"ช่วงเวลา"} สำเนา`};s.rules.splice(Number(I.dataset.rule)+1,0,u),r()}),e.querySelectorAll("[data-day-toggle]").forEach(h=>h.onclick=()=>{const I=h.dataset.selected!=="true";h.dataset.selected=String(I),h.className=qa(I),f()}),e.querySelectorAll("[data-day-preset]").forEach(h=>h.onclick=()=>{const I=h.closest("[data-rule]"),u=h.dataset.dayPreset==="all"?[0,1,2,3,4,5,6]:[1,2,3,4,5];I.querySelectorAll("[data-day-toggle]").forEach(p=>{const j=u.includes(Number(p.dataset.dayToggle));p.dataset.selected=String(j),p.className=qa(j)}),f()}),e.querySelector("#workload-save").onclick=async()=>{try{e.querySelectorAll("button").forEach(h=>{h.disabled=!0}),t=gs({schemaVersion:1,timezone:"Asia/Bangkok",features:Object.fromEntries([...e.querySelectorAll("[data-workload-feature]")].map(h=>{var I,u;return[h.dataset.workloadFeature,{mode:h.querySelector("[name=mode]").value,dateFrom:((I=h.querySelector("[name=dateFrom]"))==null?void 0:I.value)||null,dateTo:((u=h.querySelector("[name=dateTo]"))==null?void 0:u.value)||null,start:h.querySelector("[name=start]").value,end:h.querySelector("[name=end]").value,bufferBefore:Number(h.querySelector("[name=bufferBefore]").value||0),bufferAfter:Number(h.querySelector("[name=bufferAfter]").value||0),days:[...h.querySelectorAll("input[type=checkbox][name^=day-]")].map(p=>p.checked)}]}))}),await il(t),N("บันทึก Workload Control แล้ว","success"),r()}catch(h){N(Ne(h.message),"error"),e.querySelectorAll("button").forEach(I=>{I.disabled=!1})}},e.querySelector("#workload-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Aa()}};r()}const Dl=1e3,Hl=250,Rl=6e4,ir="pp5-full-backup",cr=1,Ol="pp5-full-backup-state",xt="sessions",Pl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];class ur{constructor(){this.state=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytes=0}update(s){this.bytes+=s.byteLength;let t=0;if(this.bufferLength){const n=Math.min(64-this.bufferLength,s.byteLength);this.buffer.set(s.subarray(0,n),this.bufferLength),this.bufferLength+=n,t+=n,this.bufferLength===64&&(this.process(this.buffer),this.bufferLength=0)}for(;t+64<=s.byteLength;)this.process(s.subarray(t,t+64)),t+=64;return t<s.byteLength&&(this.buffer.set(s.subarray(t),0),this.bufferLength=s.byteLength-t),this}process(s){const t=new Uint32Array(64);for(let m=0;m<16;m++){const w=m*4;t[m]=(s[w]<<24|s[w+1]<<16|s[w+2]<<8|s[w+3])>>>0}for(let m=16;m<64;m++){const w=t[m-15],f=t[m-2],v=(w>>>7|w<<25)^(w>>>18|w<<14)^w>>>3,h=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10;t[m]=t[m-16]+v+t[m-7]+h>>>0}let[n,l,o,x,r,d,i,a]=this.state;for(let m=0;m<64;m++){const w=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),f=r&d^~r&i,v=a+w+f+Pl[m]+t[m]>>>0,h=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),I=n&l^n&o^l&o,u=h+I>>>0;a=i,i=d,d=r,r=x+v>>>0,x=o,o=l,l=n,n=v+u>>>0}this.state[0]=this.state[0]+n>>>0,this.state[1]=this.state[1]+l>>>0,this.state[2]=this.state[2]+o>>>0,this.state[3]=this.state[3]+x>>>0,this.state[4]=this.state[4]+r>>>0,this.state[5]=this.state[5]+d>>>0,this.state[6]=this.state[6]+i>>>0,this.state[7]=this.state[7]+a>>>0}hex(){const s=this.bytes*8,t=this.bufferLength<56?56-this.bufferLength:120-this.bufferLength,n=new Uint8Array(t+8);n[0]=128;const l=Math.floor(s/4294967296),o=s>>>0;return n[n.length-8]=l>>>24&255,n[n.length-7]=l>>>16&255,n[n.length-6]=l>>>8&255,n[n.length-5]=l&255,n[n.length-4]=o>>>24&255,n[n.length-3]=o>>>16&255,n[n.length-2]=o>>>8&255,n[n.length-1]=o&255,this.update(n),[...this.state].map(x=>x.toString(16).padStart(8,"0")).join("")}}function Va(e){return String(e??"").replace(/[^0-9A-Za-zก-๙._-]+/g,"-").replace(/^-+|-+$/g,"")||"pp5"}function zl(){return pr("full")}function Fl(){return pr("term")}function pr(e){if(typeof window>"u"||typeof window.showSaveFilePicker!="function")return null;const s=`pp5-${e}-backup-${Va(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;let t;try{t=window.showSaveFilePicker({suggestedName:s,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})}catch(l){t=Promise.reject(l)}const n=t.then(l=>({fileHandle:l}),l=>({error:l}));return{fileName:s,fileHandlePromise:n}}async function da(e){const s=new ur,t=e.stream().getReader();for(;;){const{value:n,done:l}=await t.read();if(l)break;n!=null&&n.byteLength&&s.update(n)}return s.hex()}function mr(e,s){const t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=s,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1500)}function Ga(){return new Promise((e,s)=>{if(typeof indexedDB>"u")return e(null);const t=indexedDB.open(Ol,1);t.onupgradeneeded=()=>t.result.createObjectStore(xt,{keyPath:"id"}),t.onsuccess=()=>e(t.result),t.onerror=()=>s(t.error??new Error("เปิดพื้นที่บันทึกจุดสำรองข้อมูลไม่สำเร็จ"))})}async function ia(e="active"){const s=await Ga();return s?new Promise((t,n)=>{const l=s.transaction(xt,"readonly").objectStore(xt).get(e);l.onsuccess=()=>{s.close(),t(l.result??null)},l.onerror=()=>{s.close(),n(l.error)}}):null}async function tt(e,s=e.id??"active"){const t=await Ga();return t?new Promise((n,l)=>{const o=t.transaction(xt,"readwrite").objectStore(xt).put({...e,id:s});o.onsuccess=()=>{t.close(),n(!0)},o.onerror=()=>{t.close(),l(o.error)}}):!1}async function ca(e="active"){const s=await Ga();if(s)return new Promise((t,n)=>{const l=s.transaction(xt,"readwrite").objectStore(xt).delete(e);l.onsuccess=()=>{s.close(),t()},l.onerror=()=>{s.close(),n(l.error)}})}async function Ma(e){if(!e)throw new Error("ไม่พบไฟล์สำรองเดิมสำหรับทำต่อ");const s={mode:"readwrite"};if(typeof e.queryPermission=="function"&&await e.queryPermission(s)!=="granted"&&(typeof e.requestPermission!="function"||await e.requestPermission(s)!=="granted"))throw new Error("ไม่ได้รับสิทธิ์เขียนไฟล์สำรองเดิม กรุณาอนุญาตการเข้าถึงไฟล์แล้วลองใหม่");try{await e.getFile()}catch(t){if((t==null?void 0:t.name)==="NotFoundError"){const n=new Error("ไม่พบไฟล์สำรองเดิมแล้ว กรุณาล้างงานสำรองค้างและเลือกตำแหน่งไฟล์ใหม่");throw n.code="BACKUP_FILE_MISSING",n}throw t}}async function Ul(e){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง");const s=new CompressionStream("gzip"),t=s.writable.getWriter();return await t.write(new TextEncoder().encode(e)),await t.close(),new Uint8Array(await new Response(s.readable).arrayBuffer())}async function Zt(e,s=0){let t=s;return{get offset(){return t},async write(n){const l=await Ul(n),o=await e.createWritable({keepExistingData:!0});try{await o.truncate(t),await o.seek(t),await o.write(l),await o.close(),t+=l.byteLength}catch(x){try{await o.abort()}catch{}throw x}},async close(){},async abort(){}}}async function ct(e,s,t,{timeoutMs:n=Rl}={}){for(let o=1;o<=4;o+=1){const x=typeof AbortController<"u"?new AbortController:null,r=Date.now();let d,i;try{t==null||t(`กำลังติดต่อฐานข้อมูล: ${s} · ครั้งที่ ${o}/4`);const a=Promise.resolve().then(()=>e(x==null?void 0:x.signal));let m;return n>0&&(m=new Promise((w,f)=>{d=setTimeout(()=>{x==null||x.abort();const v=new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`);v.code="BACKUP_REQUEST_TIMEOUT",f(v)},n)})),i=setInterval(()=>{const w=Math.floor((Date.now()-r)/1e3);t==null||t(`กำลังรอฐานข้อมูลตอบกลับ: ${s} · ${w} วินาที · ครั้งที่ ${o}/4`)},1e4),await(m?Promise.race([a,m]):a)}catch(a){const m=x!=null&&x.signal.aborted?Object.assign(new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`),{code:"BACKUP_REQUEST_TIMEOUT"}):a;if(o>=4)throw m;t==null||t(`${(m==null?void 0:m.message)||`เชื่อมต่อ ${s} ไม่สำเร็จ`} · กำลังลองใหม่ครั้งที่ ${o}/3...`),await new Promise(w=>setTimeout(w,750*2**(o-1)))}finally{clearTimeout(d),clearInterval(i)}}}async function $a(){var t,n,l,o;const e=await ia().catch(()=>null);if(!e)return null;const s=xr(e);return{fileName:e.fileName,phase:e.phase,tableIndex:e.tableIndex??0,tableCount:((t=e.catalog)==null?void 0:t.length)??0,tableName:((l=(n=e.catalog)==null?void 0:n[e.tableIndex])==null?void 0:l.table_name)??null,rowOffset:e.tableCount??e.tableOffset??0,storageIndex:e.storageIndex??0,storageCount:((o=e.storageObjects)==null?void 0:o.length)??0,progress:s}}async function Vl(){await ca()}function Xt(e,s){return`term:${Number(e)}:${Number(s)}`}async function ws(e,s){const t=await ia(Xt(e,s)).catch(()=>null);return t!=null&&t.fileHandle?{fileName:t.fileName,academicYear:t.academicYear,semester:t.semester,counts:t.counts??{},completedRows:Object.values(t.counts??{}).reduce((n,l)=>n+Number(l||0),0)+Number(t.tableCount||0),totalRows:Object.values(t.expectedCounts??{}).reduce((n,l)=>n+Number(l||0),0)}:null}async function Gl(e,s){await ca(Xt(e,s))}function xr(e,s={}){var h;const t=(e==null?void 0:e.catalog)??[],n=(e==null?void 0:e.counts)??{},l=s.phase??(e==null?void 0:e.phase)??"tables",o=s.tableIndex??(e==null?void 0:e.tableIndex)??0,x=s.tableCount??(e==null?void 0:e.tableCount)??0,r=s.storageIndex??(e==null?void 0:e.storageIndex)??0,d=s.storageCount??((h=e==null?void 0:e.storageObjects)==null?void 0:h.length)??0,i=t.map(I=>Math.max(Number(I.estimated_rows)||0,0)),a=i.reduce((I,u)=>I+u,0),m=i.slice(0,o).reduce((I,u,p)=>{var j;return I+(u||Number(n[(j=t[p])==null?void 0:j.table_name])||0)},0),w=i[o]||0,f=a>0?Math.min(1,(m+Math.min(x,w||x))/a):t.length>0?Math.min(1,(o+(x>0?.5:0))/t.length):0;return{percent:l==="tables"?Math.min(89,Math.round(f*90)):l==="storage"?Math.min(99,90+(d>0?Math.round(r/d*9):0)):l==="finalizing"?99:0,estimatedTotalRows:a,completedRows:m+x,currentTableRows:x,currentTableEstimate:w,tableIndex:o,tableCount:t.length,storageIndex:r,storageCount:d}}function Wl(e){const s=new Map(e.map(o=>[o.table_name,o])),t=new Map,n=[],l=o=>{var x;if(t.get(o)!==2&&t.get(o)!==1){t.set(o,1);for(const r of((x=s.get(o))==null?void 0:x.depends_on)??[])s.has(r)&&l(r);t.set(o,2),n.push(s.get(o))}};for(const o of e)l(o.table_name);return n.filter(Boolean)}async function gr(e,s=null){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง กรุณาใช้ Chrome, Edge หรือ Safari รุ่นปัจจุบัน");const t=new CompressionStream("gzip"),n=t.writable.getWriter();if(s||typeof window<"u"&&typeof window.showSaveFilePicker=="function"){const d=await(s??await window.showSaveFilePicker({suggestedName:e,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})).createWritable(),[i,a]=t.readable.tee(),m=i.pipeTo(d),w=new ur;let f=0;const v=(async()=>{const h=a.getReader();for(;;){const{value:I,done:u}=await h.read();if(u)break;I!=null&&I.byteLength&&(w.update(I),f+=I.byteLength)}})();return{async write(h){await n.write(new TextEncoder().encode(h))},async close(){return await n.close(),await Promise.all([m,v]),{blob:null,sha256:w.hex(),byteSize:f,savedToDisk:!0}},async abort(){try{await n.abort()}catch{}try{await d.abort()}catch{}}}}const l=[],o=t.readable.getReader(),x=(async()=>{for(;;){const{value:r,done:d}=await o.read();if(d)break;r!=null&&r.byteLength&&l.push(r)}})();return{async write(r){await n.write(new TextEncoder().encode(r))},async close(){await n.close(),await x;const r=new Blob(l,{type:"application/gzip"});return{blob:r,sha256:await da(r),byteSize:r.size,savedToDisk:!1}}}}async function ka(e,s=null){s==null||s("ส่งคำขอรายการตารางไปยังฐานข้อมูล");const{data:t,error:n}=await ie.rpc("admin_full_backup_catalog").abortSignal(e);if(n)throw n;const l=Array.isArray(t)?t:[];if(!l.length)throw new Error("ไม่พบรายการข้อมูลสำหรับสำรอง");s==null||s(`ได้รับรายการ ${l.length.toLocaleString()} ตารางแล้ว · กำลังจัดลำดับความสัมพันธ์`);const o=Wl(l);if(o.length!==l.length)throw new Error("จัดเตรียมรายการตารางสำรองไม่ครบ");return s==null||s("จัดลำดับตารางแล้ว · กำลังเตรียมไฟล์สำรอง"),o}async function Yl(e,s,t){const{data:n,error:l}=await ie.rpc("admin_full_backup_read_cursor",{p_table:e,p_cursor:s||null,p_limit:Dl}).abortSignal(t);if(l)throw l;const o=n&&typeof n=="object"&&!Array.isArray(n)?n:{rows:Array.isArray(n)?n:[],next_cursor:null,has_more:!1};return{rows:Array.isArray(o.rows)?o.rows:[],nextCursor:o.next_cursor||null,hasMore:!!o.has_more}}function _s(e,s,t,n,l,o={}){if(!e)return;e(n,l,xr(s??{catalog:t,counts:{}},o))}async function Kl(e){const{data:s,error:t}=await ie.rpc("admin_full_backup_storage_catalog").abortSignal(e);if(t)throw t;return s??{buckets:[],objects:[]}}async function Jl(e){const s=await new Promise((t,n)=>{const l=new FileReader;l.onload=()=>t(l.result),l.onerror=()=>n(l.error??new Error("อ่านไฟล์ Storage ไม่สำเร็จ")),l.readAsDataURL(e)});return String(s).split(",",2)[1]??""}function Ql(e,s="application/octet-stream"){const t=atob(e),n=new Uint8Array(t.length);for(let l=0;l<t.length;l++)n[l]=t.charCodeAt(l);return new Blob([n],{type:s})}async function Zl({onProgress:e,saveTarget:s=null}={}){var a,m,w,f;let t=await ia().catch(()=>null),n,l,o,x=null,r=!1;if(t!=null&&t.fileHandle){if(e==null||e("ตรวจสอบสิทธิ์เข้าถึงไฟล์สำรองเดิม"),await Ma(t.fileHandle),n=t.catalog??await ka(void 0,v=>e==null?void 0:e(v)),n.some(v=>v.estimated_rows==null)){const v=await ct(I=>ka(I,u=>e==null?void 0:e(u)),"สถิติรายการตาราง",e);v.length===n.length&&v.every((I,u)=>{var p;return I.table_name===((p=n[u])==null?void 0:p.table_name)})&&(n=v,t.catalog=v)}l=t.fileName,x=t.fileHandle,r=!0,o=await Zt(x,t.byteOffset??0),t.status="running",await tt(t),e==null||e(`กำลังทำสำรองต่อจาก ${t.tableName??"จุดล่าสุด"}`)}else{let v=null;if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรอง...");const{fileHandle:h,error:I}=await s.fileHandlePromise;if(I)throw I;v=h}e==null||e("กำลังอ่านรายการตาราง..."),n=await ct(h=>ka(h,I=>e==null?void 0:e(I)),"รายการตาราง",e),l=(s==null?void 0:s.fileName)??`pp5-full-backup-${Va(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`,v?(e==null||e("ตรวจสอบสิทธิ์เขียนไฟล์สำรอง"),x=v,await Ma(x),r=!0,t={id:"active",status:"running",fileName:l,fileHandle:x,catalog:n,paginationVersion:2,phase:"tables",tableIndex:0,tableCursor:null,tableCount:0,storageObjects:null,storageIndex:0,counts:{},headerWritten:!1,endWritten:!1,byteOffset:0},e==null||e("บันทึกจุดเริ่มต้นสำหรับทำสำรองต่อได้"),await tt(t),o=await Zt(x,0)):o=await gr(l)}const d=(t==null?void 0:t.counts)??{},i=async(v={})=>{!r||!t||(Object.assign(t,v,{byteOffset:o.offset??t.byteOffset??0,updatedAt:new Date().toISOString()}),await tt(t))};try{t!=null&&t.headerWritten||(await o.write(JSON.stringify({format:ir,version:cr,created_at:new Date().toISOString(),scope:"all-public-application-tables",note:"รวมข้อมูลแอปพลิเคชันทั้งหมดใน public schema และไฟล์ใน Supabase Storage ไม่รวม auth.users รหัสผ่าน และระบบภายใน Supabase",catalog:n.map(_=>({table_name:_.table_name,depends_on:_.depends_on??[]}))})+`
`),await i({headerWritten:!0}));const v=r?t.tableIndex??0:0;for(let _=v;_<n.length;_+=1){const C=n[_];let L=r&&_===v?t.tableCursor??null:null,q=r&&_===v?t.tableCount??0:0;for(;;){const B=await ct(c=>Yl(C.table_name,L,c),`ข้อมูล ${C.table_name}`,e),b=B.rows;if(b.length){const c=b.map(g=>JSON.stringify({kind:"row",table:C.table_name,row:g})).join(`
`)+`
`;await o.write(c),L=B.nextCursor,q+=b.length,await i({phase:"tables",tableIndex:_,tableCursor:L,tableCount:q})}if(_s(e,t,n,`สำรอง ${C.table_name} (${_+1}/${n.length})`,q,{phase:"tables",tableIndex:_,tableCount:q}),!B.hasMore)break}d[C.table_name]=q,await i({phase:"tables",tableIndex:_+1,tableCursor:null,tableCount:0,counts:d})}let h=t==null?void 0:t.storageObjects;h||(h=(await ct(C=>Kl(C),"รายการไฟล์ Storage",e)).objects??[],await i({phase:"storage",storageObjects:h,storageIndex:0}));const I=r?t.storageIndex??0:0;for(let _=I;_<h.length;_+=1){const C=h[_],L=await ct(async()=>{const{data:b,error:c}=await ie.storage.from(C.bucket_id).download(C.name);if(c)throw new Error(`สำรองไฟล์ Storage ${C.bucket_id}/${C.name} ไม่สำเร็จ: ${c.message}`);return b},`ไฟล์ ${C.bucket_id}/${C.name}`,e,{timeoutMs:0}),q=await Jl(L);await o.write(JSON.stringify({kind:"storage",bucket:C.bucket_id,name:C.name,content_type:L.type||((a=C.metadata)==null?void 0:a.mimetype)||"application/octet-stream",data:q})+`
`);const B=`storage:${C.bucket_id}`;d[B]=(d[B]??0)+1,await i({phase:"storage",storageIndex:_+1,counts:d}),_s(e,t,n,`สำรองไฟล์ ${C.bucket_id} (${_+1}/${h.length})`,d[B],{phase:"storage",storageIndex:_+1,storageCount:h.length})}t!=null&&t.endWritten||(await o.write(JSON.stringify({kind:"end",counts:d})+`
`),await i({phase:"finalizing",endWritten:!0,counts:d}));let u;if(r){const _=await x.getFile();u={blob:null,sha256:await da(_),byteSize:_.size,savedToDisk:!0}}else u=await o.close();const{data:p,error:j}=await ie.rpc("admin_record_full_backup",{p_file_name:l,p_byte_size:u.byteSize,p_sha256:u.sha256,p_table_counts:d});if(j)throw j;return u.blob&&mr(u.blob,l),await ca(),{backupId:p==null?void 0:p.id,fileName:l,byteSize:u.byteSize,sha256:u.sha256,counts:d,tableCount:n.length,savedToDisk:u.savedToDisk}}catch(v){throw r&&t&&(t.status="paused",await tt(t).catch(()=>{})),await((f=(m=o==null?void 0:o.abort)==null?void 0:(w=m.call(o)).catch)==null?void 0:f.call(w,()=>{})),v}}async function Xl({onProgress:e,saveTarget:s=null,resume:t=!1,academicYear:n,semester:l}={}){var m,w,f,v,h;let o=null,x=null,r=null,d=!1,i,a=(s==null?void 0:s.fileName)??`pp5-term-backup-${Va(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;try{if(t){if(r=await ia(Xt(n,l)).catch(()=>null),!r)throw new Error("ไม่พบงานสำรองภาคเรียนที่ทำต่อได้ กรุณาเริ่มสำรองใหม่");await Ma(r.fileHandle),i=r.manifest,a=r.fileName,x=r.fileHandle,d=!0,o=await Zt(x,r.byteOffset??0),e==null||e(`ทำสำรองต่อจาก ${r.table??"จุดล่าสุด"}`)}else if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรองภาคเรียน");const{fileHandle:c,error:g}=await s.fileHandlePromise;if(g)throw g;x=c}i||(i=await ct(async c=>{const{data:g,error:$}=await ie.rpc("admin_term_backup_catalog").abortSignal(c);if($)throw $;return g},"สรุปข้อมูลภาคเรียน",e));const I={attendances:Number((m=i==null?void 0:i.counts)==null?void 0:m.attendances),prayer_records:Number((w=i==null?void 0:i.counts)==null?void 0:w.prayer_records)};if(!Number.isInteger(i==null?void 0:i.academic_year)||![1,2].includes(Number(i==null?void 0:i.semester))||!Number.isSafeInteger(I.attendances)||I.attendances<0||!Number.isSafeInteger(I.prayer_records)||I.prayer_records<0)throw new Error("ข้อมูลสรุปสำหรับสำรองภาคเรียนไม่ถูกต้อง");if(r&&(Number(r.academicYear)!==Number(i.academic_year)||Number(r.semester)!==Number(i.semester)||JSON.stringify(r.expectedCounts)!==JSON.stringify(I)))throw new Error("ข้อมูลภาคเรียนเปลี่ยนจากตอนเริ่มสำรอง กรุณาล้างงานค้างและเริ่มใหม่เพื่อป้องกันไฟล์ไม่ครบ");const u=I.attendances+I.prayer_records;if(!x&&u>1e5)throw new Error("ข้อมูลมีขนาดใหญ่ กรุณาใช้ Chrome หรือ Edge ที่รองรับการเลือกตำแหน่งไฟล์โดยตรง");o||(e==null||e("ได้รับจำนวนข้อมูลแล้ว · กำลังเตรียมไฟล์สำรอง"),o=x?await Zt(x,0):await gr(a),d=!!x,d&&(r={id:Xt(i.academic_year,i.semester),status:"running",fileName:a,fileHandle:x,manifest:i,academicYear:Number(i.academic_year),semester:Number(i.semester),expectedCounts:I,counts:{},tableIndex:0,cursor:null,tableCount:0,byteOffset:0,headerWritten:!1},await tt(r)));const p=(r==null?void 0:r.counts)??{},j=Object.values(p).reduce((c,g)=>c+Number(g||0),0)+(d?Number(r.tableCount||0):0);r!=null&&r.headerWritten||(await o.write(JSON.stringify({format:"pp5-term-backup",version:1,created_at:new Date().toISOString(),scope:"term-rollover-source-data",academic_year:Number(i.academic_year),semester:Number(i.semester),semester_start:i.semester_start??null,semester_end:i.semester_end??null,expected_counts:I,tables:["attendances","prayer_records"]})+`
`),d&&(r.byteOffset=o.offset,r.headerWritten=!0,await tt(r)));let _=j;const C=d?Number(r.tableIndex??0):0,L=["attendances","prayer_records"];for(let c=C;c<L.length;c+=1){const g=L[c];let $=d&&c===C?r.cursor??null:null,y=d&&c===C?Number(r.tableCount??0):0;do{const k=await ct(async A=>{const{data:H,error:E}=await ie.rpc("admin_term_backup_read_cursor",{p_table:g,p_academic_year:Number(i.academic_year),p_semester:Number(i.semester),p_cursor:$,p_limit:1e3}).abortSignal(A);if(E)throw E;return H},`ข้อมูล ${g}`,e),S=Array.isArray(k==null?void 0:k.rows)?k.rows:[];if(k!=null&&k.has_more&&(!S.length||!k.next_cursor))throw new Error(`อ่านข้อมูล ${g} ไม่ต่อเนื่อง ระบบหยุดเพื่อป้องกันไฟล์ไม่ครบ`);if(S.length){await o.write(S.map(H=>JSON.stringify({kind:"row",table:g,row:H})).join(`
`)+`
`),y+=S.length,_+=S.length,$=k.next_cursor;const A=u>0?Math.min(98,Math.floor(_/u*98)):98;e==null||e(`สำรอง ${g} · ${y.toLocaleString()}/${I[g].toLocaleString()} รายการ`,y,{percent:A,completedRows:_,totalRows:u,table:g}),d&&(r.tableIndex=c,r.table=g,r.cursor=$,r.tableCount=y,r.counts=p,r.byteOffset=o.offset,r.updatedAt=new Date().toISOString(),await tt(r))}if(!(k!=null&&k.has_more))break}while(!0);if(y!==I[g])throw new Error(`จำนวนข้อมูล ${g} ไม่ตรงกับที่ตรวจนับไว้ (${y.toLocaleString()}/${I[g].toLocaleString()}) กรุณาสำรองใหม่`);p[g]=y,d&&(r.tableIndex=c+1,r.table=L[c+1]??"ตรวจสอบไฟล์",r.cursor=null,r.tableCount=0,r.counts=p,r.byteOffset=o.offset,await tt(r))}await o.write(JSON.stringify({kind:"end",counts:p})+`
`),e==null||e("อ่านข้อมูลครบแล้ว · กำลังปิดและตรวจสอบไฟล์");let q;if(d){await o.close();const c=await x.getFile();q={blob:null,sha256:await da(c),byteSize:c.size,savedToDisk:!0}}else q=await o.close();if(!q.byteSize||!/^[0-9a-f]{64}$/.test(q.sha256))throw new Error("ตรวจสอบขนาดหรือค่า SHA-256 ของไฟล์ไม่ผ่าน");const{data:B,error:b}=await ie.rpc("admin_record_term_backup",{p_academic_year:Number(i.academic_year),p_semester:Number(i.semester),p_semester_start:i.semester_start??null,p_semester_end:i.semester_end??null,p_file_name:a,p_byte_size:q.byteSize,p_sha256:q.sha256,p_table_counts:p});if(b)throw b;return q.blob&&mr(q.blob,a),d&&(r!=null&&r.id)&&await ca(r.id),{backupId:B==null?void 0:B.id,fileName:a,byteSize:q.byteSize,sha256:q.sha256,counts:p,academicYear:Number(i.academic_year),semester:Number(i.semester),savedToDisk:q.savedToDisk}}catch(I){throw d&&(r!=null&&r.id)&&(r.status="paused",await tt(r).catch(()=>{})),await((h=(f=o==null?void 0:o.abort)==null?void 0:(v=f.call(o)).catch)==null?void 0:h.call(v,()=>{})),I}}async function*ed(e){var o;if(!((o=e==null?void 0:e.name)!=null&&o.endsWith(".gz"))&&(e==null?void 0:e.type)!=="application/gzip")throw new Error("กรุณาเลือกไฟล์สำรอง .jsonl.gz ที่สร้างจากระบบ ปพ.5");const t=e.stream().pipeThrough(new DecompressionStream("gzip")).getReader(),n=new TextDecoder;let l="";for(;;){const{value:x,done:r}=await t.read();if(r)break;l+=n.decode(x,{stream:!0});const d=l.split(`
`);l=d.pop()??"";for(const i of d)i.trim()&&(yield i)}l+=n.decode(),l.trim()&&(yield l)}async function td(e,s){if(!s.length)return;const{error:t}=await ie.rpc("admin_full_backup_restore_table",{p_table:e,p_rows:s});if(t)throw t}async function ad(e,s,t,n){if(!s.length)return;const{error:l}=await ie.rpc("admin_restore_term_backup_table",{p_table:e,p_academic_year:t,p_semester:n,p_rows:s});if(l)throw l}async function sd(e){const s=Ql(e.data,e.content_type),{error:t}=await ie.storage.from(e.bucket).upload(e.name,s,{upsert:!0,contentType:e.content_type||"application/octet-stream"});if(t)throw t}async function rd(e,{onProgress:s}={}){var w,f;const t=await da(e),{data:n,error:l}=await ie.from("academic_term_backups").select("id, file_name, byte_size, backup_scope, academic_year, semester, table_counts").eq("sha256",t).eq("status","verified").maybeSingle();if(l)throw l;if(!n)throw new Error("ไฟล์นี้ไม่ตรงกับไฟล์ Full Backup ที่ระบบเคยบันทึกไว้");let o=null,x=null,r=!1,d=[];const i={},a=async()=>{!x||!d.length||(r?await ad(x,d,o.academic_year,o.semester):await td(x,d),i[x]=(i[x]??0)+d.length,s==null||s(`กู้คืน ${x}`,i[x]),d=[])};for await(const v of ed(e)){const h=JSON.parse(v);if(!h.kind&&(h.format===ir||h.format==="pp5-term-backup")){if(o=h,r=h.format==="pp5-term-backup",r){if(o.version!==1||o.scope!=="term-rollover-source-data"||n.backup_scope!=="term"||Number(n.academic_year)!==Number(o.academic_year)||Number(n.semester)!==Number(o.semester)||!Array.isArray(o.tables)||o.tables.length!==2||!o.tables.includes("attendances")||!o.tables.includes("prayer_records"))throw new Error("ไฟล์สำรองภาคเรียนหรือข้อมูลลงทะเบียนไม่ตรงกัน")}else if(o.version!==cr||o.scope!=="all-public-application-tables"||n.backup_scope!=="full")throw new Error("เวอร์ชันหรือขอบเขตไฟล์สำรองไม่รองรับ");continue}if(h.kind!=="end"){if(h.kind==="storage"){await a(),await sd(h);const I=`storage:${h.bucket}`;i[I]=(i[I]??0)+1,s==null||s(`กู้คืนไฟล์ ${h.bucket}`,i[I]);continue}if(h.kind!=="row"||!h.table||!h.row)throw new Error("รูปแบบไฟล์สำรองไม่ถูกต้อง");if(r&&!["attendances","prayer_records"].includes(h.table))throw new Error("ไฟล์สำรองภาคเรียนมีตารางนอกขอบเขตที่อนุญาต");x!==h.table&&(await a(),x=h.table),d.push(h.row),d.length>=Hl&&await a()}}if(await a(),!o)throw new Error("ไม่พบหัวไฟล์สำรอง");if(r){for(const v of["attendances","prayer_records"])if(Number(i[v]??0)!==Number(((w=o.expected_counts)==null?void 0:w[v])??-1)||Number(i[v]??0)!==Number(((f=n.table_counts)==null?void 0:f[v])??-2))throw new Error(`จำนวนข้อมูล ${v} ในไฟล์ไม่ตรงกับรายการสำรองที่ระบบรับรองไว้`)}const{error:m}=await ie.from("academic_term_backups").update({restored_at:new Date().toISOString()}).eq("id",n.id);return m&&console.warn("บันทึกประวัติการกู้คืนไม่สำเร็จ:",m),{counts:i,sha256:t,createdAt:o.created_at}}async function nd(e,s){const{data:t,error:n}=await ie.from("academic_term_backups").select("id, backup_scope, academic_year, semester").eq("status","verified").order("created_at",{ascending:!1}).limit(100);if(n)throw n;const l=(t??[]).find(o=>o.backup_scope==="full"||o.backup_scope==="term"&&Number(o.academic_year)===Number(e)&&Number(o.semester)===Number(s));return(l==null?void 0:l.id)??null}const De=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function od(e){document.querySelectorAll("[data-nav]").forEach(s=>{const t=s.dataset.nav===e;s.classList.toggle("bg-indigo-800",t),s.classList.toggle("text-white",t),s.classList.toggle("text-indigo-200",!t)})}function Sa(e){document.getElementById("main-content").innerHTML=e}const br={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},ld={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},dd={doc:"📋",dates:"📅",att:"✅",score:"📝"},id={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function Mt(e,s,t,n="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${n} rounded-lg ${ld[t]}" title="${s}">${e}</span>`}function st(e,s,t="w-8 h-8 text-base"){return Mt(dd[e],`${id[e]}: ${br[s]}`,s,t)}const cd={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function ud(e){return["AGM","AGMVOC"].includes(e)?"ศาสนา":e==="ACDMVOC"?"สามัญปวช":"สามัญ"}function pd(e,s){const t=ud(e.subject_group);return s.find(n=>n.dept_code===e.dept&&n.category===t)??s.find(n=>n.dept_code===e.dept)??s.find(n=>n.dept_name===e.dept)??null}function md(e,s){return e.dept?s.find(t=>t.dept_code===e.dept&&t.category===e.category)??s.find(t=>t.dept_code===e.dept)??null:null}function xd(e,s){return Math.round((new Date(e)-new Date(s))/864e5)}function gd(e,s){const t=e.has_doc_rows?"green":"red",n=e.has_teaching_dates?"green":"red";let l;if(!e.has_teaching_dates||e.day1_date&&e.day1_date>s)l="gray";else if(!e.last_check_date)l="red";else{const x=xd(s,e.last_check_date);l=x<=7?"green":x<=14?"yellow":"red"}let o;if(!e.score_col_count)o="gray";else{const x=e.student_count*e.score_col_count,r=x>0?e.score_filled_count/x:0;o=r>=.8?"green":r>0?"yellow":"red"}return{doc:t,dates:n,att:l,score:o}}function Tt(e){const s=e.filter(t=>t!=="gray");return s.length===0?"gray":s.includes("red")?"red":s.includes("yellow")?"yellow":"green"}function Ea(e){return Object.values(e).some(s=>s==="red"||s==="yellow")}async function bd(){var W,Y;od("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",Sa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let e,s,t,n,l;try{[e,s,t,n,l]=await Promise.all([bn(),ot(),Me().catch(()=>({})),Re(),yn(60).catch(()=>null)])}catch(D){Sa(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${De(he(D))}</p>
    </div>`);return}const o=t.academicYear??t.academic_year??"",x=t.semester??"",r=new Date().toISOString().slice(0,10),d=e.filter(D=>D.subject_id!=null).map(D=>{const V=pd(D,s);return{...D,deptKey:(V==null?void 0:V.id)!=null?`d${V.id}`:`u_${D.dept??"-"}`,deptName:(V==null?void 0:V.dept_name)??D.dept??"ไม่ระบุกลุ่มสาระ",status:gd(D,r)}}),i=new Map;for(const D of d)i.has(D.deptKey)||i.set(D.deptKey,{deptName:D.deptName,rows:[]}),i.get(D.deptKey).rows.push(D);const a=[...i.entries()].map(([D,V])=>({key:D,...V})).sort((D,V)=>D.deptName.localeCompare(V.deptName,"th")),m=new Map;for(const D of d)D.teacher_id!=null&&(m.has(D.teacher_id)||m.set(D.teacher_id,[]),m.get(D.teacher_id).push(D));const w=n.filter(D=>D.staff_type==="ครู").map(D=>{const V=m.get(D.id)??[],K=D.profile_id!=null,Q=V.length,Z=Q>0?Tt(V.map(me=>me.status.att)):"gray";let se;if(V[0])se={key:V[0].deptKey,name:V[0].deptName};else{const me=md(D,s);se=me?{key:`d${me.id}`,name:me.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let ae;return K?Q===0?ae=2:Z==="red"?ae=1.5:Z==="yellow"?ae=1:ae=0:ae=3,{teacherId:D.id,teacherName:D.full_name,deptKey:se.key,deptName:se.name,registered:K,classCount:Q,attWorst:Z,severity:ae}}).sort((D,V)=>V.severity-D.severity||D.teacherName.localeCompare(V.teacherName,"th")),f=w.filter(D=>!D.registered).length,v=w.filter(D=>D.registered&&D.classCount===0).length,h=w.filter(D=>D.registered&&D.classCount>0&&(D.attWorst==="red"||D.attWorst==="yellow")).length,I=w.filter(D=>D.severity>0).length;function u(D){const V=d.filter(se=>se.status[D]!=="gray"),K=V.filter(se=>se.status[D]==="green").length,Q=d.length-V.length;return{pct:V.length>0?Math.round(K/V.length*100):null,green:K,total:V.length,grayCount:Q}}const p={doc:u("doc"),dates:u("dates"),att:u("att"),score:u("score")},j=w.length,_=w.filter(D=>D.registered).length,C=w.filter(D=>D.registered&&D.classCount>0).length,L=w.filter(D=>D.registered&&D.classCount>0&&D.attWorst==="green").length,q={registered:{pct:j>0?Math.round(_/j*100):null,num:_,total:j},courses:{pct:_>0?Math.round(C/_*100):null,num:C,total:_},attendance:{pct:C>0?Math.round(L/C*100):null,num:L,total:C}},B=d.filter(D=>Ea(D.status)).length,b=d.length>0?Math.round(B/d.length*100):0;function c(){if(!l)return"";const D=l.rows||[],V=l.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},K=new Date,Q=se=>se.status!=="active"?se.status==="returned"?"กลับแล้ว":"เลยเวลา":bl(se.created_at,se.allowed_duration,K).text,Z=D.filter(se=>se.status==="active").slice(0,8);return`
      <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden mb-6">
        <div class="px-5 py-3.5 border-b border-amber-100 bg-amber-50 flex items-center justify-between gap-3">
          <div>
            <h4 class="font-bold text-amber-900 text-sm">🚪 สถานะใบอนุญาตออกนอกห้อง</h4>
            <p class="text-xs text-amber-700/70 mt-0.5">ข้อมูลสัปดาห์ปัจจุบัน</p>
          </div>
          <span class="text-xs text-amber-700 font-bold">รวม ${V.totalWeek} ครั้ง</span>
        </div>
        <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div class="rounded-xl bg-amber-50 border border-amber-100 px-3 py-2">
            <p class="text-[10px] font-bold text-amber-700/70">กำลังอยู่นอกห้อง</p>
            <p class="text-xl font-extrabold text-amber-700">${V.active}</p>
          </div>
          <div class="rounded-xl bg-red-50 border border-red-100 px-3 py-2">
            <p class="text-[10px] font-bold text-red-700/70">เลยเวลา</p>
            <p class="text-xl font-extrabold text-red-700">${V.overdue}</p>
          </div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2">
            <p class="text-[10px] font-bold text-emerald-700/70">กลับแล้ววันนี้</p>
            <p class="text-xl font-extrabold text-emerald-700">${V.returnedToday}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2">
            <p class="text-[10px] font-bold text-indigo-700/70">สัปดาห์นี้</p>
            <p class="text-xl font-extrabold text-indigo-700">${V.totalWeek}</p>
          </div>
        </div>
        ${Z.length?`
          <div class="border-t border-gray-50 divide-y divide-gray-50">
            ${Z.map(se=>{var ae,me,ue,_e;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${De(((ae=se.students)==null?void 0:ae.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${De(((me=se.classes)==null?void 0:me.class_name)||((ue=se.students)==null?void 0:ue.main_room)||"—")} · ${De(se.reason||"—")} · ${De(((_e=se.teachers)==null?void 0:_e.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${Q(se)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let g=null,$="attention",y="",k=null;const S={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function A(){return a.map(D=>{const V={doc:Tt(D.rows.map(Z=>Z.status.doc)),dates:Tt(D.rows.map(Z=>Z.status.dates)),att:Tt(D.rows.map(Z=>Z.status.att)),score:Tt(D.rows.map(Z=>Z.status.score))},K=D.rows.filter(Z=>Ea(Z.status)).length,Q=g===D.key;return`
        <button type="button" data-dept-key="${D.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${Q?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${De(D.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${D.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${st("doc",V.doc)}
            ${st("dates",V.dates)}
            ${st("att",V.att)}
            ${st("score",V.score)}
          </div>
          <p class="text-xs ${K>0?"text-amber-600 font-semibold":"text-emerald-600"}">
            ${K>0?`⚠️ ${K} ห้องต้องตามงาน`:"✅ ปกติทั้งหมด"}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${Q?"🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายละเอียด ▸"}</p>
        </button>`}).join("")}function H(){var Q;const D=g?(Q=a.find(Z=>Z.key===g))==null?void 0:Q.deptName:null,V=$==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${D?`${V} · ${De(D)}`:`${V} (ทั้งโรงเรียน)`}</h4>
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
                 ${$==="all"?"bg-indigo-50 text-indigo-600 border-indigo-200":"bg-white text-gray-500 border-gray-200 hover:border-gray-300"}">
          ${$==="all"?"👁️ ดูทั้งหมด":"⚠️ เฉพาะที่ต้องตามงาน"}
        </button>
        ${g?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function E(){let D=d;return $==="attention"&&(D=D.filter(V=>Ea(V.status))),g&&(D=D.filter(V=>V.deptKey===g)),y&&(D=D.filter(V=>(V.class_name??"").toLowerCase().includes(y)||(V.subject_name??"").toLowerCase().includes(y)||(V.teacher_name??"").toLowerCase().includes(y))),D=[...D].sort((V,K)=>{const Q=Z=>Object.values(Z).reduce((se,ae)=>se+(ae==="red"?2:ae==="yellow"?1:0),0);return Q(K.status)-Q(V.status)}),D.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
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
            ${D.map(V=>`
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${De(V.class_name)}</p>
                  <p class="text-xs text-gray-400">${De(V.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${De(V.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${De(V.deptName)}</td>
                <td class="px-4 py-2 text-center">${st("doc",V.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${st("att",V.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${st("score",V.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${st("dates",V.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function T(){let D=w;k==="unregistered"?D=D.filter(Q=>!Q.registered):k==="no-courses"?D=D.filter(Q=>Q.registered&&Q.classCount===0):k==="att-behind"?D=D.filter(Q=>Q.registered&&Q.classCount>0&&(Q.attWorst==="red"||Q.attWorst==="yellow")):$==="attention"&&(D=D.filter(Q=>Q.severity>0)),g&&(D=D.filter(Q=>Q.deptKey===g)),y&&(D=D.filter(Q=>(Q.teacherName??"").toLowerCase().includes(y)));const V=k?`${S[k]} (${D.length} คน)`:$==="all"?`ครูผู้สอนทั้งหมด (${D.length}/${w.length} คน)`:`ครูที่ต้องติดตาม (${D.length} คน)`,K=D.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
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
              ${D.map(Q=>`
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${De(Q.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${De(Q.deptName)}</td>
                  <td class="px-4 py-2 text-center">${Mt("🔑",Q.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",Q.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Mt("📚",Q.classCount>0?`มีวิชา/ห้องที่สอน ${Q.classCount} ห้อง`:Q.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",Q.classCount>0?"green":Q.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Q.classCount>0?Mt("✅",`เช็คชื่อ: ${br[Q.attWorst]}`,Q.attWorst,"w-7 h-7 text-sm"):Mt("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`;return`
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${V}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${k?'<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>':""}
      </div>
      ${K}`}function R({icon:D,label:V,info:K,pct:Q,numerator:Z,denominator:se,unit:ae="ห้อง",extraNote:me="",filterKey:ue=null,active:_e=!1}){const Ie=Q==null?"text-gray-400":Q>=80?"text-emerald-700":Q>=50?"text-amber-600":"text-red-600",Te=ue?"button":"div",Ue=ue?' type="button"':"",Qe=ue?` data-teacher-filter="${ue}"`:"";return`
      <${Te}${Ue}${Qe} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${ue?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${_e?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${De(K)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${D}</div>
          <p class="text-sm font-semibold text-gray-600">${V} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${Ie}">${Q==null?"—":Q+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${se>0?`${Z}/${se} ${ae}`:"ไม่มีข้อมูล"}${me}</p>
        ${ue?`<p class="text-[10px] text-indigo-400 mt-1">${_e?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${Te}>`}function F(D,V,K){const Q=p[K];return R({icon:D,label:V,info:cd[K],pct:Q.pct,numerator:Q.green,denominator:Q.total,unit:"ห้อง",extraNote:Q.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${Q.grayCount}</span>`:""})}function M(D,V,K,Q,Z="",se=null){return R({icon:D,label:V,info:K,pct:Q.pct,numerator:Q.num,denominator:Q.total,unit:"คน",extraNote:Z,filterKey:se,active:k===se})}function U(){return`
      ${M("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",q.registered,f>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${f}</span>`:"","unregistered")}
      ${M("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",q.courses,v>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${v}</span>`:"","no-courses")}
      ${M("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",q.attendance,h>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${h}</span>`:"","att-behind")}`}function z(){var D,V,K;document.querySelectorAll(".exec-dept-card").forEach(Q=>{Q.addEventListener("click",()=>{var se;const Z=Q.dataset.deptKey;g===Z?(g=null,$="attention"):(g=Z,$="all"),O(),(se=document.getElementById("exec-table-section"))==null||se.scrollIntoView({behavior:"smooth",block:"start"})})}),(D=document.getElementById("exec-clear-filter"))==null||D.addEventListener("click",()=>{g=null,$="attention",O()}),(V=document.getElementById("exec-toggle-scope"))==null||V.addEventListener("click",()=>{$=$==="all"?"attention":"all",O()}),document.querySelectorAll("[data-teacher-filter]").forEach(Q=>{Q.addEventListener("click",()=>{var se;const Z=Q.dataset.teacherFilter;k=k===Z?null:Z,g=null,y="",O(),(se=document.getElementById("exec-teacher-section"))==null||se.scrollIntoView({behavior:"smooth",block:"start"})})}),(K=document.getElementById("exec-teacher-clear-filter"))==null||K.addEventListener("click",()=>{k=null,O()})}function O(){document.getElementById("exec-teacher-kpi").innerHTML=U(),document.getElementById("exec-dept-cards").innerHTML=A(),document.getElementById("exec-table-header").innerHTML=H(),document.getElementById("exec-class-table").innerHTML=E(),document.getElementById("exec-teacher-section").innerHTML=T();const D=document.getElementById("exec-dept-select");D&&(D.value=g??"");const V=document.getElementById("exec-search");V&&(V.value=y),z()}Sa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${o?`ปีการศึกษา ${De(o)}`:""}${x?` ภาคเรียนที่ ${De(x)}`:""}${o||x?" · ":""}ทั้งหมด ${d.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${B>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${B} ห้อง</b> (${b}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${I>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${I} คน</b> ที่ต้องติดตาม
        ${f>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${f}</b> คน`:""}
        ${v>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${v}</b> คน`:""}
        ${h>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${h}</b> คน`:""}
      </p>`:`
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${U()}
    </div>

    ${c()}

    <h4 class="font-semibold text-gray-700 mb-1">📚 ภาพรวมห้องเรียนทั้งโรง</h4>
    <p class="text-xs text-gray-400 mb-3">สัดส่วนห้องเรียนที่ "ปกติ" ในแต่ละมิติ (ไม่รวมห้องที่ยังไม่เริ่มดำเนินการ)</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      ${F("📋","ปก ปพ.5","doc")}
      ${F("📅","วันที่สอน","dates")}
      ${F("✅","เช็คชื่อ","att")}
      ${F("📝","บันทึกคะแนน","score")}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</h4>
    <p class="text-xs text-gray-400 mb-3">💡 คลิกที่การ์ดเพื่อดูห้องเรียนทั้งหมดในกลุ่มสาระนั้น</p>
    <div id="exec-dept-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      ${A()}
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
        ${a.map(D=>`<option value="${D.key}">${De(D.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${H()}
      </div>
      <div id="exec-class-table">${E()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${T()}
    </div>
  </div>`),(W=document.getElementById("exec-search"))==null||W.addEventListener("input",D=>{y=D.target.value.trim().toLowerCase(),O()}),(Y=document.getElementById("exec-dept-select"))==null||Y.addEventListener("change",D=>{g=D.target.value||null,$=g?"all":"attention",O()}),z()}const yd="regrade.html",fd=()=>{const e=new URL(yd,window.location.href);return e.searchParams.set("v",Uo),e.href},ea=(e,s)=>{e&&(e.textContent=s,clearTimeout(e._regradeStatusTimer),e._regradeStatusTimer=setTimeout(()=>{e.textContent=""},1800))},hd=async(e,s)=>{try{await navigator.clipboard.writeText(e),ea(s,"คัดลอกลิงก์แล้ว")}catch{ea(s,"คัดลอกไม่สำเร็จ")}},vd=async(e,s)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:e});return}await navigator.clipboard.writeText(e),ea(s,"คัดลอกลิงก์แล้ว")}catch{ea(s,"แชร์ไม่สำเร็จ")}};function wd(){var x,r,d,i;(x=document.getElementById("regrade-modal"))==null||x.remove();const e=fd(),s=document.body.style.overflow;document.body.style.overflow="hidden";const t=document.createElement("div");t.id="regrade-modal",t.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",t.innerHTML=`
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
  `;const n=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=s,t.remove(),window.closeRegradeModal===n&&(window.closeRegradeModal=null)},l=a=>{a.key==="Escape"&&n()};document.addEventListener("keydown",l),document.body.appendChild(t),window.closeRegradeModal=n;const o=t.querySelector("[data-regrade-status]");(r=t.querySelector("[data-regrade-close]"))==null||r.addEventListener("click",n),(d=t.querySelector("[data-regrade-copy]"))==null||d.addEventListener("click",()=>hd(e,o)),(i=t.querySelector("[data-regrade-share]"))==null||i.addEventListener("click",()=>vd(e,o))}const re=(e="")=>String(e??"").replace(/[&<>'"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[s]),$s=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},La=e=>{if(!e)return"";const s=new Date(e);if(Number.isNaN(s.getTime()))return"";const t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`},Lt=()=>document.getElementById("stu-content")||document.getElementById("main-content"),_d="00000000-0000-0000-0000-000000000001",yr=[{code:"SS",chest:34},{code:"S",chest:36},{code:"M",chest:38},{code:"L",chest:40},{code:"XL",chest:42},{code:"2X",chest:44},{code:"3X",chest:46},{code:"4X",chest:48},{code:"5X",chest:50},{code:"6X",chest:52},{code:"7X",chest:54},{code:"8X",chest:56}],ge=(e,s="success")=>{const t=document.createElement("div");t.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-3 rounded-xl text-white text-sm shadow-xl ${s==="error"?"bg-red-600":"bg-emerald-600"}`,t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),3e3)},Ct=()=>'<div class="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800"><h3 class="font-bold">ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี</h3><p class="text-sm mt-2">ให้แอดมินรันไฟล์ <code>patch_sports_student_team_portal.sql</code> ใน Supabase SQL Editor</p></div>',wt=(e,s,t,n)=>`<div class="rounded-2xl border p-4 ${n?"bg-emerald-50 border-emerald-200":"bg-slate-50 border-slate-200"}"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-sm text-slate-800">${re(s)}</h3><p class="text-xs text-slate-500 mt-1">${re(t)}</p><span class="inline-block mt-3 px-2 py-1 rounded-full text-[11px] font-bold ${n?"bg-emerald-100 text-emerald-700":"bg-slate-200 text-slate-600"}">${n?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span></div><button type="button" data-cfg="${re(e)}" data-enabled="${n?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${n?"bg-red-50 text-red-700 border border-red-200":"bg-emerald-600 text-white"}">${n?"ปิดใช้งาน":"เปิดใช้งาน"}</button></div></div>`,ks=(e,s,t=!0)=>`<button type="button" data-team-perm="${re(e)}" data-enabled="${t?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold border ${t?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}">${t?"อนุญาต":"ไม่อนุญาต"}: ${re(s)}</button>`;(location.pathname.startsWith("/pp5online/")?"/pp5online/":"/")+"";async function ua(e,s,t=1e3){let n=[],l=0;for(;;){const{data:o,error:x}=await s(ie.from(e)).range(l,l+t-1);if(x)throw x;if(n=n.concat(o||[]),!o||o.length<t)break;l+=t}return n}async function fr(e){var n;if(!e)return!1;const{data:s}=await ie.from("teachers").select("positions,position,staff_type").eq("profile_id",e).maybeSingle();return s?((n=s.positions)!=null&&n.length?s.positions:s.position?[s.position]:[]).includes("house_color_admin")||s.staff_type==="แอดมิน":!1}async function $d(e){const{data:s}=await ie.from("settings").select("value").eq("key","public_buttons").maybeSingle(),t=s!=null&&s.value&&typeof s.value=="object"?s.value:{};await ie.from("settings").upsert({key:"public_buttons",value:{athlete_size:!1,athlete_registration:!1,athlete_print:!0,athlete_certificate:!0,...t,athlete_size:!!e},description:"Controls which athlete-page actions are visible and usable by public visitors.",updated_at:new Date().toISOString()},{onConflict:"key"})}async function It(){const[{data:e},{data:s},{data:t}]=await Promise.all([ie.from("events").select("*").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),ie.from("sports_portal_settings").select("*").limit(1).maybeSingle(),ie.from("settings").select("value").eq("key","shirt_sizes").maybeSingle()]),n=Array.isArray(t==null?void 0:t.value)&&t.value.length?t.value:yr;return{event:e||{id:_d,name:"AZIZGAMES"},cfg:s,shirtSizes:n}}async function kd(e){const{error:s}=await ie.from("settings").upsert({key:"shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}async function Sd(e){const{error:s}=await ie.from("settings").upsert({key:"teacher_shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}function hr(e){const s=[];return(e||[]).forEach(t=>{const n=Ss(t.event_date),l=Ss(t.end_date||t.event_date);if(n)for(let o=new Date(n);o<=(l||n);o.setDate(o.getDate()+1))s.push({date:Ed(o),label:t.label})}),s.sort((t,n)=>t.date<n.date?1:-1)}function Ss(e){if(!e)return null;const[s,t,n]=String(e).slice(0,10).split("-").map(Number);return new Date(s,t-1,n)}function Ed(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}async function Ld(e,s){const t=e.querySelector("#sports-gallery-type-admin");if(!t)return;t.innerHTML='<div class="py-8 text-center text-gray-400">กำลังโหลดประเภทภาพกิจกรรม...</div>';const{data:n,error:l}=await ie.from("sports_gallery_upload_types").select("*").eq("event_id",s.id).order("event_date",{ascending:!0,nullsFirst:!1}).order("display_order").order("created_at");if(l){t.innerHTML='<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">ยังไม่พร้อมใช้งานส่วนจัดการประเภทภาพกิจกรรม — กรุณารันไฟล์ <code>patch_sports_gallery_upload_types.sql</code> ใน Supabase SQL Editor</div>';return}let o=n||[];const x=()=>{var r;t.innerHTML=`
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
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีประเภทภาพกิจกรรม</p>'}</div>`,(r=t.querySelector("#gallery-type-add"))==null||r.addEventListener("click",async()=>{const d=t.querySelector("#gallery-type-new-name").value.trim(),i=t.querySelector("#gallery-type-new-date").value||null;if(!d)return ge("กรุณากรอกชื่อประเภทภาพกิจกรรม","error");const a=t.querySelector("#gallery-type-add");a.disabled=!0;const{data:m,error:w}=await ie.from("sports_gallery_upload_types").insert({event_id:s.id,name:d,event_date:i,is_active:!0,display_order:o.length*10}).select("*").single();if(w)return a.disabled=!1,ge(w.message,"error");o.push(m),ge("เพิ่มประเภทภาพกิจกรรมแล้ว"),x()}),t.querySelectorAll("[data-gallery-type-save]").forEach(d=>d.addEventListener("click",async()=>{const i=t.querySelector(`[data-gallery-type-row="${d.dataset.galleryTypeSave}"]`),a=i.querySelector("[data-gallery-type-name]").value.trim(),m=i.querySelector("[data-gallery-type-date]").value||null;if(!a)return ge("ชื่อประเภทต้องไม่ว่าง","error");d.disabled=!0;const{data:w,error:f}=await ie.from("sports_gallery_upload_types").update({name:a,event_date:m,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeSave).select("*").single();if(f)return d.disabled=!1,ge(f.message,"error");o=o.map(v=>v.id===w.id?w:v),ge("บันทึกการแก้ไขแล้ว"),x()})),t.querySelectorAll("[data-gallery-type-active]").forEach(d=>d.addEventListener("click",async()=>{const i=d.dataset.active!=="true";d.disabled=!0;const{data:a,error:m}=await ie.from("sports_gallery_upload_types").update({is_active:i,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeActive).select("*").single();if(m)return d.disabled=!1,ge(m.message,"error");o=o.map(w=>w.id===a.id?a:w),ge(i?"เปิดใช้งานรายการแล้ว":"ปิดใช้งานรายการแล้ว"),x()}))};x()}async function We(){var s,t,n,l,o,x,r,d;const e=Lt();e.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>';try{const{event:i,cfg:a,shirtSizes:m}=await It();let w=m.map(b=>({...b}));const{data:f}=await ie.from("settings").select("value").eq("key","teacher_shirt_sizes").maybeSingle();let v=(Array.isArray(f==null?void 0:f.value)&&f.value.length?f.value:yr).map(b=>({...b}));const h=await Xs(ie),{data:I}=await ie.from("profiles").select("role,is_also_admin").eq("id",h).maybeSingle(),u=(I==null?void 0:I.role)==="admin"||(I==null?void 0:I.is_also_admin)===!0||await fr(h);if((a==null?void 0:a.shirt_summary_enabled)===!1&&!u){e.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}const{data:p}=await ie.from("sports_team_memberships").select("team_color_id,role,permissions").eq("event_id",i.id).eq("profile_id",h).eq("is_active",!0),j=u||(p||[]).some(b=>b.role==="lead_teacher"),[{data:_},C,{data:L}]=await Promise.all([ie.from("team_colors").select("id,name,hex_color").eq("event_id",i.id).order("display_order"),ua("sports_shirt_requests",b=>b.select("status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)").eq("event_id",i.id)),u?ie.from("sports_team_identity_requests").select("*,team_colors(name,logo_url)").eq("event_id",i.id).eq("status","pending_admin"):Promise.resolve({data:[]})]),q=m.map(b=>b.code),B=(C||[]).filter(b=>["confirmed","advisor_updated"].includes(b.status));if(e.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${u?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><div class="flex gap-2"><button id="open-sports-overview" type="button" class="px-4 py-2 bg-sky-600 text-white rounded-xl text-sm font-bold">📊 ภาพรวมกีฬาสี</button><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div></div><div class="grid md:grid-cols-4 gap-3">${wt("shirt_request_enabled","รับจำนงไซซ์เสื้อ","นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน",!!(a!=null&&a.shirt_request_enabled))}${wt("shirt_summary_enabled","หน้าสรุปยอดเสื้อ","ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้",!!(a!=null&&a.shirt_summary_enabled))}${wt("team_workspace_enabled","จัดการสีของฉัน","ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้",!!(a!=null&&a.team_workspace_enabled))}${wt("shirt_vote_enabled","โหวตแบบเสื้อกีฬาสี","นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้",!!(a!=null&&a.shirt_vote_enabled))}${wt("teacher_shirt_request_enabled","รับแจ้งไซซ์เสื้อคุณครู","คุณครูจะเห็นปุ่มแจ้งไซซ์ในหน้าภาพรวม แยกจากของนักเรียน",!!(a!=null&&a.teacher_shirt_request_enabled))}</div><div class="grid md:grid-cols-2 gap-3 mt-3"><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">ค่าบำรุงสี (บาท/คน)</h3><p class="text-xs text-gray-500 mt-1">จำนวนเงินเริ่มต้นที่จะบันทึกทุกครั้งที่สแกน QR เก็บค่าบำรุง</p><input id="cfg-dues-amount" type="number" min="0" step="1" value="${Number((a==null?void 0:a.dues_amount)??30)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (%)</h3><p class="text-xs text-gray-500 mt-1">ค่าเริ่มต้นทุกสี — พ่อสี/แม่สีแต่ละคนตั้งค่าเฉพาะสีตัวเองทับได้ในหน้าจัดการสี</p><input id="cfg-cert-threshold" type="number" min="0" max="100" step="1" value="${Number((a==null?void 0:a.cert_attendance_threshold_pct)??80)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div></div></section>`:""}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${(C==null?void 0:C.length)||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(C||[]).filter(b=>b.status==="pending").length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${B.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${q.map(b=>`<th>${re(b)}</th>`).join("")}<th>รวม</th></tr></thead><tbody>${(_||[]).map(b=>{const c=B.filter(g=>{var $;return(($=g.students)==null?void 0:$.house_color)===b.name});return`<tr class="border-t"><td class="p-3 font-bold" style="color:${b.hex_color}">สี${re(b.name)}</td>${q.map(g=>`<td class="text-center">${c.filter($=>$.confirmed_size===g).length}</td>`).join("")}<td class="text-center font-bold">${c.length}</td></tr>`}).join("")}</tbody></table></div>${j?'<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>':""}${u?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${(L==null?void 0:L.map(b=>{var c;return`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${b.proposed_logo_url?`<img src="${re(b.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:""}<div class="flex-1"><b>ทีมสี${re((c=b.team_colors)==null?void 0:c.name)}</b><p class="text-xs text-gray-500">${re(b.proposed_name||b.proposed_motto||"เปลี่ยนโลโก้/อัตลักษณ์")}</p></div><button data-review="${b.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${b.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`}).join(""))||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:""}</div>`,u){const b=document.createElement("section");b.id="sports-gallery-type-admin",b.className="bg-white border rounded-2xl p-5";const c=e.querySelector("#sports-team-membership-admin");c?c.before(b):(s=e.querySelector(".max-w-7xl"))==null||s.appendChild(b),await Ld(e,i),await hl(e.querySelector(".max-w-7xl")||e,i.id);const g=(t=e.querySelector("#cfg-dues-amount"))==null?void 0:t.closest(".grid");g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-violet-50 border-violet-200"><h3 class="font-bold text-sm text-violet-900">ค่าเสื้อกีฬาสี (บาท/คน)</h3><p class="text-xs text-violet-700 mt-1">ยอดที่ครูที่ปรึกษาศาสนาจะบันทึกเมื่อสแกนรับชำระ แยกชาย/หญิงเพราะราคาต่างกัน ตั้งเป็น 0 เพื่อปิดรับชำระของเพศนั้นชั่วคราว</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-violet-700">👦 ชาย</span><input id="cfg-shirt-payment-amount-m" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_m)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-violet-700">👧 หญิง</span><input id="cfg-shirt-payment-amount-w" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_w)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),(n=e.querySelector("#cfg-shirt-payment-amount-m"))==null||n.addEventListener("input",S=>{We.pendingCfg={...We.pendingCfg||{},shirt_payment_amount_m:Math.max(0,Number(S.target.value)||0)}}),(l=e.querySelector("#cfg-shirt-payment-amount-w"))==null||l.addEventListener("input",S=>{We.pendingCfg={...We.pendingCfg||{},shirt_payment_amount_w:Math.max(0,Number(S.target.value)||0)}}),g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-teal-50 border-teal-200"><h3 class="font-bold text-sm text-teal-900">📏 ไซซ์เริ่มต้นขั้นต่ำ</h3><p class="text-xs text-teal-700 mt-1">ไซซ์ที่เล็กกว่าที่เลือกจะถูกซ่อนจากตัวเลือกของกลุ่มนั้นอัตโนมัติ (เฉพาะตอนนักเรียนเลือกไซซ์เอง — ตารางสรุปยอดยังโชว์ครบทุกไซซ์)</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-teal-700">ม.ต้น (ม.1-3)</span><select id="cfg-shirt-size-min-junior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${m.map(S=>`<option value="${re(S.code)}" ${(a==null?void 0:a.shirt_size_min_junior)===S.code?"selected":""}>${re(S.code)}</option>`).join("")}</select></label><label class="block"><span class="text-xs text-teal-700">ม.ปลาย/ปวช (ม.4-6, ปวช.1-3)</span><select id="cfg-shirt-size-min-senior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${m.map(S=>`<option value="${re(S.code)}" ${((a==null?void 0:a.shirt_size_min_senior)||"M")===S.code?"selected":""}>${re(S.code)}</option>`).join("")}</select></label></div></div>`),g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-sky-50 border-sky-200"><h3 class="font-bold text-sm text-sky-900">🎽 วันเช็คชื่อเข้าสีวันแรก</h3><p class="text-xs text-sky-700 mt-1">เฉพาะวันนี้ ให้ครูที่ปรึกษา (สามัญ/ศาสนา) เช็คชื่อนักเรียนแทนฝ่ายสี (ฝ่ายสีเห็นข้อมูลอ่านอย่างเดียวชั่วคราว) เว้นว่างเพื่อปิดระบบนี้</p><input id="cfg-advisor-checkin-date" type="date" value="${re((a==null?void 0:a.advisor_checkin_date)||"")}" class="mt-3 w-full border border-sky-200 rounded-xl px-3 py-2 text-sm bg-white"><label class="flex items-center gap-2 mt-3 text-xs text-sky-800 cursor-pointer"><input id="cfg-advisor-checkin-backfill" type="checkbox" ${a!=null&&a.advisor_checkin_backfill_enabled?"checked":""} class="w-4 h-4">เปิดให้ครูที่ปรึกษาเช็คชื่อ<b>ย้อนหลัง</b>ได้ (เลือกวันที่จากปฏิทินปฏิบัติงาน ไม่จำกัดแค่วันที่ตั้งไว้ด้านบน — ใช้แก้ห้องที่ครูลา/ตกหล่น)</label></div>`),g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-emerald-50 border-emerald-200 md:col-span-2"><h3 class="font-bold text-sm text-emerald-900">🏃 ช่วงเวลารับสมัครและแก้ไขข้อมูลนักกีฬา</h3><p class="text-xs text-emerald-700 mt-1">หลังปิดรับสมัคร สามารถเปิดช่วงแก้ไขข้อมูลเดิมให้ครูและสต๊าฟแต่ละสีได้ โดยแก้ได้เฉพาะนักกีฬาของสีตนเอง เช่น หมายเลขเสื้อ ไม่สามารถเพิ่มหรือถอนรายชื่อผ่านช่องทางนี้</p><div class="grid md:grid-cols-3 gap-2 mt-3"><label class="block"><span class="text-xs text-emerald-800">ปิดรับสมัคร</span><input id="cfg-athlete-registration-closes" type="datetime-local" value="${re(La(a==null?void 0:a.athlete_registration_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">เปิดให้ฝ่ายสีแก้ไข</span><input id="cfg-athlete-edit-opens" type="datetime-local" value="${re(La(a==null?void 0:a.athlete_edit_opens_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">ปิดการแก้ไข</span><input id="cfg-athlete-edit-closes" type="datetime-local" value="${re(La(a==null?void 0:a.athlete_edit_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),g==null||g.insertAdjacentHTML("afterend",'<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👕 ไซซ์เสื้อที่เปิดให้แจ้งได้</h3><button id="shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border">+ เพิ่มไซซ์</button></div><p class="text-xs text-gray-500 mb-3">ตั้งค่าที่นี่หรือฝั่ง AZIZGAMES ก็ได้ บันทึกในตารางเดียวกัน อีกฝั่งเห็นอัตโนมัติ — กด "บันทึกการตั้งค่า" ด้านบนเพื่อบันทึกด้วย</p><div id="shirt-size-rows" class="space-y-2"></div></div>');const $=()=>{const S=e.querySelector("#shirt-size-rows");S&&(S.innerHTML=w.map((A,H)=>`<div class="flex items-center gap-2" data-size-row="${H}"><input data-size-code value="${re(A.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-size-chest type="number" min="0" value="${re(A.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-size-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),S.querySelectorAll("[data-size-row]").forEach(A=>{const H=Number(A.dataset.sizeRow);A.querySelector("[data-size-code]").addEventListener("input",E=>{w[H].code=E.target.value}),A.querySelector("[data-size-chest]").addEventListener("input",E=>{w[H].chest=E.target.value}),A.querySelector("[data-size-remove]").addEventListener("click",()=>{w.splice(H,1),$()})}))};$(),e.querySelector("#shirt-size-add").addEventListener("click",()=>{w.push({code:"",chest:""}),$()}),(x=(o=e.querySelector("#shirt-size-rows"))==null?void 0:o.closest("div.rounded-2xl"))==null||x.insertAdjacentHTML("afterend",`<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👔 ไซซ์เสื้อคุณครู</h3><button id="teacher-shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border hidden">+ เพิ่มไซซ์</button></div><label class="flex items-center gap-2 text-xs text-gray-600 mb-3"><input id="teacher-shirt-use-student-sizes" type="checkbox" ${(a==null?void 0:a.teacher_shirt_use_student_sizes)!==!1?"checked":""} class="w-4 h-4">ใช้ตารางไซซ์เดียวกับนักเรียน (ปลดติ๊กเพื่อตั้งไซซ์แยกสำหรับครู)</label><div id="teacher-shirt-size-rows" class="space-y-2"></div></div>`);const y=()=>{const S=e.querySelector("#teacher-shirt-size-rows");S&&(S.innerHTML=v.map((A,H)=>`<div class="flex items-center gap-2" data-tsize-row="${H}"><input data-tsize-code value="${re(A.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-tsize-chest type="number" min="0" value="${re(A.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-tsize-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),S.querySelectorAll("[data-tsize-row]").forEach(A=>{const H=Number(A.dataset.tsizeRow);A.querySelector("[data-tsize-code]").addEventListener("input",E=>{v[H].code=E.target.value}),A.querySelector("[data-tsize-chest]").addEventListener("input",E=>{v[H].chest=E.target.value}),A.querySelector("[data-tsize-remove]").addEventListener("click",()=>{v.splice(H,1),y()})}))},k=()=>{var A;const S=(A=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:A.checked;e.querySelector("#teacher-shirt-size-rows").style.display=S?"none":"",e.querySelector("#teacher-shirt-size-add").classList.toggle("hidden",!!S)};y(),k(),e.querySelector("#teacher-shirt-use-student-sizes").addEventListener("change",k),e.querySelector("#teacher-shirt-size-add").addEventListener("click",()=>{v.push({code:"",chest:""}),y()})}e.querySelector("#shirt-export").onclick=()=>{const b=["รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ",...B.map(g=>{var $,y,k,S;return[($=g.students)==null?void 0:$.student_code,(y=g.students)==null?void 0:y.full_name,(k=g.students)==null?void 0:k.main_room,(S=g.students)==null?void 0:S.house_color,g.confirmed_size,g.status].map(A=>`"${String(A||"").replaceAll('"','""')}"`).join(",")})],c=document.createElement("a");c.href=URL.createObjectURL(new Blob(["\uFEFF"+b.join(`
`)],{type:"text/csv"})),c.download="sports-shirt-summary.csv",c.click(),URL.revokeObjectURL(c.href)},e.querySelectorAll("[data-cfg]").forEach(b=>b.addEventListener("click",()=>{const c=b.dataset.enabled!=="true";b.dataset.enabled=c?"true":"false",We.pendingCfg={...We.pendingCfg||{},[b.dataset.cfg]:c},b.textContent=c?"ปิดใช้งาน":"เปิดใช้งาน",ge("เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน")})),(r=e.querySelector("#open-sports-overview"))==null||r.addEventListener("click",()=>vr()),(d=e.querySelector("#cfg-save"))==null||d.addEventListener("click",async()=>{var H,E,T,R,F,M,U;const b=z=>{var W;const O=(W=e.querySelector(z))==null?void 0:W.value;return O?new Date(O).toISOString():null},c=b("#cfg-athlete-registration-closes"),g=b("#cfg-athlete-edit-opens"),$=b("#cfg-athlete-edit-closes");if(g&&c&&new Date(g)<new Date(c))return ge("เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร","error");if($&&g&&new Date($)<=new Date(g))return ge("เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข","error");const y={shirt_request_enabled:!!(a!=null&&a.shirt_request_enabled),shirt_summary_enabled:!!(a!=null&&a.shirt_summary_enabled),team_workspace_enabled:!!(a!=null&&a.team_workspace_enabled),shirt_vote_enabled:!!(a!=null&&a.shirt_vote_enabled),teacher_shirt_request_enabled:!!(a!=null&&a.teacher_shirt_request_enabled),teacher_shirt_use_student_sizes:((H=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:H.checked)!==!1,dues_amount:Number((E=e.querySelector("#cfg-dues-amount"))==null?void 0:E.value)||30,cert_attendance_threshold_pct:Number((T=e.querySelector("#cfg-cert-threshold"))==null?void 0:T.value)||80,advisor_checkin_date:((R=e.querySelector("#cfg-advisor-checkin-date"))==null?void 0:R.value)||null,advisor_checkin_backfill_enabled:!!((F=e.querySelector("#cfg-advisor-checkin-backfill"))!=null&&F.checked),shirt_size_min_junior:((M=e.querySelector("#cfg-shirt-size-min-junior"))==null?void 0:M.value)||null,shirt_size_min_senior:((U=e.querySelector("#cfg-shirt-size-min-senior"))==null?void 0:U.value)||null,athlete_registration_closes_at:c,athlete_edit_opens_at:g,athlete_edit_closes_at:$,...We.pendingCfg||{}},{error:k}=await ie.from("sports_portal_settings").update({...y,updated_at:new Date().toISOString()}).eq("event_id",i.id);if(k)return ge(k.message,"error");const S=w.filter(z=>String(z.code||"").trim()).map(z=>({code:String(z.code).trim(),chest:Number(z.chest)||0}));if(S.length)try{await kd(S)}catch(z){ge("บันทึกไซซ์เสื้อไม่สำเร็จ: "+z.message,"error")}const A=v.filter(z=>String(z.code||"").trim()).map(z=>({code:String(z.code).trim(),chest:Number(z.chest)||0}));if(A.length)try{await Sd(A)}catch(z){ge("บันทึกไซซ์เสื้อครูไม่สำเร็จ: "+z.message,"error")}try{await $d(y.shirt_request_enabled)}catch(z){console.warn("Unable to sync AZIZGAMES shirt button",z)}We.pendingCfg={},ge("บันทึกการเปิดใช้งานแล้ว"),We()}),e.querySelectorAll("[data-review]").forEach(b=>b.onclick=async()=>{const{error:c}=await ie.rpc("review_team_identity",{p_request:b.dataset.review,p_decision:b.dataset.decision,p_comment:null});if(c)return ge(c.message,"error");ge("บันทึกผลตรวจสอบแล้ว"),We()}),j&&Vt(e,i,_||[],{isAdmin:u,myTeamMemberships:p||[]})}catch(i){console.error(i),e.innerHTML=Ct()}}function Cd({wrap:e,items:s,placeholder:t="ค้นหา...",emptyLabel:n="-- เลือก --",photoClass:l="w-7 h-9 rounded object-cover flex-shrink-0 border",onChange:o=null}){let x=null,r=!1;e.style.position="relative",e.innerHTML=`
    <div class="ps-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ps-display flex-1 text-sm text-gray-400 truncate">${re(n)}</span>
      <svg class="ps-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ps-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100"><input class="ps-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${re(t)}" autocomplete="off"></div>
      <ul class="ps-list max-h-52 overflow-y-auto"></ul>
    </div>`;const d=e.querySelector(".ps-input"),i=e.querySelector(".ps-dropdown"),a=e.querySelector(".ps-search"),m=e.querySelector(".ps-list"),w=e.querySelector(".ps-display"),f=e.querySelector(".ps-arrow");function v(u=""){const p=u.toLowerCase(),j=s.filter(_=>!u||(_.label||"").toLowerCase().includes(p)||(_.sub||"").toLowerCase().includes(p));m.innerHTML=j.length?j.map(_=>{const C=(x==null?void 0:x.id)===_.id;return`<li data-id="${re(String(_.id))}" class="ps-opt px-3 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 ${C?"bg-indigo-50 font-semibold text-indigo-700":"text-gray-700"}">
        ${_.photo?`<img src="${re(_.photo)}" class="${l}">`:""}
        <span class="truncate">${re(_.label)}${_.sub?` <span class="text-xs text-gray-400 font-mono">${re(_.sub)}</span>`:""}</span>
      </li>`}).join(""):'<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบรายการ</li>',m.querySelectorAll(".ps-opt").forEach(_=>_.addEventListener("mousedown",C=>{C.preventDefault(),x=s.find(L=>String(L.id)===_.dataset.id)||null,w.textContent=x?x.label:n,w.classList.toggle("text-gray-400",!x),w.classList.toggle("text-gray-800",!!x),I(),o==null||o((x==null?void 0:x.id)??null)}))}function h(){r=!0,i.classList.remove("hidden"),f.style.transform="rotate(180deg)",a.value="",v(),setTimeout(()=>a.focus(),50)}function I(){r=!1,i.classList.add("hidden"),f.style.transform=""}return d.addEventListener("click",()=>r?I():h()),d.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),r?I():h())}),a.addEventListener("input",()=>v(a.value.trim())),document.addEventListener("mousedown",u=>{r&&!e.contains(u.target)&&I()},!0),{getValue:()=>(x==null?void 0:x.id)??null,reset:()=>{x=null,w.textContent=n,w.classList.add("text-gray-400"),w.classList.remove("text-gray-800")}}}async function Vt(e,s,t=[],n={isAdmin:!1,myTeamMemberships:[]}){var m,w,f,v,h,I,u;const l=e.querySelector("#sports-team-membership-admin");if(!l)return;const o={lead_teacher:"หัวหน้าครูประจำสี",teacher:"ครูประจำสี",staff_lead:"หัวหน้านักเรียนสต๊าฟสี",staff:"นักเรียนสต๊าฟสี"},x={members:"สมาชิก",registrations:"ลงทะเบียนกีฬา",announcements:"ประกาศ",tasks:"งานของสี",shirt_summary:"สรุปเสื้อ",attendance:"เช็คชื่อ",dues:"เก็บค่าบำรุงสี",expenses:"บันทึกรายรับ-รายจ่ายสี",comp_assign:"มอบหมายรายการแข่งขัน"},r=p=>/^\s*(?:ม\.?\s*[456]|ปวช\.?\s*[123])(?:\s*\/|\s|$)/i.test(String((p==null?void 0:p.main_room)||"")),d=new Set((n.myTeamMemberships||[]).filter(p=>p.role==="lead_teacher").map(p=>p.team_color_id)),i=n.isAdmin?t:t.filter(p=>d.has(p.id)),a=!!n.isAdmin;if(!i.length){l.innerHTML='<div class="p-6 text-center text-gray-400">ยังไม่มีสีที่คุณมีสิทธิ์มอบหมายสต๊าฟ</div>';return}try{const[{data:p,error:j},{data:_},C]=await Promise.all([ie.from("sports_team_memberships").select("*,team_colors(name,hex_color),teachers(full_name,teacher_code),students(full_name,student_code,main_room)").eq("event_id",s.id).eq("is_active",!0).order("created_at",{ascending:!1}),ie.from("teachers").select("id,teacher_code,full_name,dept,image_url,profile_id").not("profile_id","is",null).order("full_name"),ua("students",H=>H.select("id,student_code,full_name,main_room,profile_id,is_active,image_url,team_color_id,house_color").order("student_code"))]);if(j)throw j;const L=new Set(i.map(H=>H.id)),q=(p||[]).filter(H=>n.isAdmin||L.has(H.team_color_id)),B=new Set((p||[]).filter(H=>H.role==="staff_lead").map(H=>H.team_color_id));let b=[];l.innerHTML=`<div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="font-bold">🛡️ มอบหมายผู้ดูแลประจำสี</h2><p class="text-xs text-gray-500 mt-1">${n.isAdmin?"แอดมินกำหนดครูประจำสีและนักเรียนสต๊าฟได้ทุกสี":"พ่อสี/แม่สีมอบหมายได้เฉพาะนักเรียนสต๊าฟในสีของตนเอง"}</p></div><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ใช้งานอยู่ ${(p==null?void 0:p.length)||0} คน</span></div>
      <div class="grid lg:grid-cols-5 gap-3 mb-4">
        <select id="team-member-color" class="team-field rounded-xl px-3 py-2 text-sm">${i.map(H=>`<option value="${re(H.id)}">สี${re(H.name)}</option>`).join("")}</select>
        <input id="team-member-code-input" class="team-field rounded-xl px-3 py-2 text-sm lg:col-span-2" placeholder="กรอกรหัสครู/รหัสนักเรียน เช่น 1087, 608001">
        <select id="team-member-role" class="team-field rounded-xl px-3 py-2 text-sm">
          ${a?'<option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option>':""}
          <option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option>
          <option value="staff">นักเรียนสต๊าฟสี</option>
        </select>
        <button id="team-member-search" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">ค้นหารายชื่อ</button>
      </div>
      <p class="text-[11px] text-gray-500 -mt-2 mb-3">มอบสิทธิ์นักเรียนระดับ ม.4–ม.6 และ ปวช.1–3 ที่อยู่สีเดียวกันและมีบัญชีเข้าใช้งานระบบแล้ว</p>
      <div class="flex flex-wrap gap-2 mb-4">${Object.entries(x).map(([H,E])=>ks(H,E,!0)).join("")}</div>
      <div id="team-member-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4">
        <p class="text-xs font-bold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบหมาย:</p>
        <div id="team-member-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div>
        <button id="team-member-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันและมอบหมายสิทธิ์ประจำสี</button>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 mt-2 mb-2"><h3 class="font-bold text-sm">📋 ตรวจสอบรายชื่อผู้ได้รับสิทธิ์</h3><span id="team-member-count" class="text-xs text-gray-500"></span></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <select id="team-member-filter-color" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${i.map(H=>`<option value="${re(H.id)}">สี${re(H.name)}</option>`).join("")}</select>
        <select id="team-member-filter-role" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกบทบาท</option><option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option><option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option><option value="staff">นักเรียนสต๊าฟสี</option></select>
        <input id="team-member-filter-search" class="team-field rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ/รหัสครู/รหัสนักเรียน...">
      </div>
      <div id="team-member-table-wrap"></div>`;const c=()=>{var F;const H=(F=l.querySelector("#team-member-color"))==null?void 0:F.value,E=l.querySelector("#team-member-role"),T=E==null?void 0:E.querySelector('option[value="staff_lead"]');if(!E||!T)return;const R=B.has(H);T.disabled=R,T.textContent=R?"หัวหน้านักเรียนสต๊าฟสี (มีแล้ว — เลือกนักเรียนสต๊าฟสีแทน)":"หัวหน้านักเรียนสต๊าฟสี",R&&E.value==="staff_lead"&&(E.value="staff")};c(),(m=l.querySelector("#team-member-color"))==null||m.addEventListener("change",c);const g=H=>{var E,T,R,F;return(E=H.teachers)!=null&&E.full_name?`${H.teachers.full_name}${H.teachers.teacher_code?` (${H.teachers.teacher_code})`:""}`:`${((T=H.students)==null?void 0:T.student_code)||""} ${((R=H.students)==null?void 0:R.full_name)||""} ${(F=H.students)!=null&&F.main_room?`· ${H.students.main_room}`:""}`},$=(H,E)=>{var F;(F=document.getElementById("team-member-edit-modal"))==null||F.remove();const T=document.createElement("div");T.id="team-member-edit-modal",T.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",T.setAttribute("role","dialog"),T.setAttribute("aria-modal","true"),T.innerHTML='<div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"><div class="p-5 border-b border-gray-100"><h3 class="font-bold text-gray-800">✏️ แก้ไขสิทธิ์</h3><p class="text-xs text-gray-500 mt-1">แตะเพื่อเปิด/ปิดสิทธิ์แต่ละอย่าง แล้วกดบันทึก</p></div><div class="p-5"><div id="team-member-edit-perms" class="flex flex-wrap gap-2"></div></div><div class="p-4 border-t border-gray-100 flex gap-2"><button id="team-member-edit-cancel" class="flex-1 py-2.5 rounded-xl border text-sm font-bold">ยกเลิก</button><button id="team-member-edit-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold">บันทึก</button></div></div>',document.body.appendChild(T);const R=T.querySelector("#team-member-edit-perms");R.innerHTML=Object.entries(x).map(([M,U])=>ks(M,U,(E==null?void 0:E[M])===!0)).join(""),R.querySelectorAll("[data-team-perm]").forEach(M=>M.addEventListener("click",()=>{const U=M.dataset.enabled!=="true";M.dataset.enabled=U?"true":"false",M.className=`px-3 py-2 rounded-xl text-xs font-bold border ${U?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const z=(M.textContent.split(":").pop()||"").trim();M.textContent=`${U?"อนุญาต":"ไม่อนุญาต"}: ${z}`})),T.querySelector("#team-member-edit-cancel").onclick=()=>T.remove(),T.onclick=M=>{M.target===T&&T.remove()},T.querySelector("#team-member-edit-save").onclick=async()=>{const M={};R.querySelectorAll("[data-team-perm]").forEach(z=>M[z.dataset.teamPerm]=z.dataset.enabled==="true");const{error:U}=await ie.from("sports_team_memberships").update({permissions:M}).eq("id",H);if(U)return ge(U.message,"error");T.remove(),ge("บันทึกสิทธิ์แล้ว"),Vt(e,s,t,n)}},y=()=>{var U,z,O;const H=((U=l.querySelector("#team-member-filter-color"))==null?void 0:U.value)||"",E=((z=l.querySelector("#team-member-filter-role"))==null?void 0:z.value)||"",T=(((O=l.querySelector("#team-member-filter-search"))==null?void 0:O.value)||"").trim().toLowerCase(),R=q.filter(W=>!(H&&W.team_color_id!==H||E&&W.role!==E||T&&!g(W).toLowerCase().includes(T))),F=l.querySelector("#team-member-count");F&&(F.textContent=`แสดง ${R.length} จาก ${q.length} คน`);const M=l.querySelector("#team-member-table-wrap");M.innerHTML=`<div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${R.map(W=>{var K,Q;const Y=g(W),D=Object.entries(W.permissions||{}).filter(([,Z])=>Z).map(([Z])=>x[Z]||Z).join(", ")||"ไม่มีสิทธิ์ย่อย",V=n.isAdmin||W.student_id&&["staff_lead","staff"].includes(W.role);return`<tr class="border-t"><td class="p-3 font-medium">${re(Y||"ไม่พบชื่อ")}</td><td class="p-3"><span class="font-bold" style="color:${re(((K=W.team_colors)==null?void 0:K.hex_color)||"#334155")}">สี${re(((Q=W.team_colors)==null?void 0:Q.name)||"—")}</span></td><td class="p-3">${re(o[W.role]||W.role)}</td><td class="p-3 text-xs text-gray-500">${re(D)}</td><td class="p-3 text-right whitespace-nowrap">${V?`<button data-team-member-edit="${re(W.id)}" data-perms='${re(JSON.stringify(W.permissions||{}))}' class="px-3 py-1.5 rounded-lg border text-indigo-600 text-xs mr-1">แก้ไขสิทธิ์</button><button data-team-member-remove="${re(W.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join("")||`<tr><td colspan="5" class="p-6 text-center text-gray-400">${q.length?"ไม่พบรายชื่อที่ตรงกับตัวกรอง":"ยังไม่มีผู้ได้รับสิทธิ์ประจำสี"}</td></tr>`}</tbody></table></div>`,M.querySelectorAll("[data-team-member-remove]").forEach(W=>W.addEventListener("click",async()=>{const{error:Y}=await ie.from("sports_team_memberships").update({is_active:!1,ends_at:new Date().toISOString()}).eq("id",W.dataset.teamMemberRemove);if(Y)return ge(Y.message,"error");ge("ปิดสิทธิ์แล้ว"),Vt(e,s,t,n)})),M.querySelectorAll("[data-team-member-edit]").forEach(W=>W.addEventListener("click",()=>{let Y={};try{Y=JSON.parse(W.dataset.perms||"{}")}catch{Y={}}$(W.dataset.teamMemberEdit,Y)}))};y(),(w=l.querySelector("#team-member-filter-color"))==null||w.addEventListener("change",y),(f=l.querySelector("#team-member-filter-role"))==null||f.addEventListener("change",y),(v=l.querySelector("#team-member-filter-search"))==null||v.addEventListener("input",y);const k=H=>String(H||"").split(/[\s,]+/).map(E=>E.trim()).filter(Boolean),S=H=>{var T;(T=document.getElementById("team-member-lookup-issue"))==null||T.remove();const E=document.createElement("div");E.id="team-member-lookup-issue",E.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",E.setAttribute("role","dialog"),E.setAttribute("aria-modal","true"),E.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"><div class="p-5 border-b border-red-100 bg-red-50"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-full bg-red-100 grid place-items-center text-xl flex-shrink-0">🔎</div><div><h3 class="font-bold text-red-800">ไม่สามารถเลือกรายชื่อนี้ได้</h3><p class="text-xs text-red-600 mt-1">ระบบตรวจสอบพบสาเหตุดังต่อไปนี้</p></div></div></div><div class="p-5 space-y-2 max-h-[55vh] overflow-y-auto">${H.map(R=>`<div class="rounded-xl border border-gray-200 p-3"><b class="text-sm text-gray-800">รหัส ${re(R.code)}</b><p class="text-xs text-gray-600 mt-1">${re(R.reason)}</p></div>`).join("")}</div><div class="p-4 border-t border-gray-100"><button id="team-member-lookup-close" class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold">รับทราบ</button></div></div>`,document.body.appendChild(E),E.querySelector("#team-member-lookup-close").onclick=()=>E.remove(),E.onclick=R=>{R.target===E&&E.remove()}},A=()=>{const H=l.querySelector("#team-member-preview"),E=l.querySelector("#team-member-preview-cards");if(!b.length){H==null||H.classList.add("hidden");return}H==null||H.classList.remove("hidden"),E.innerHTML=b.map(T=>`<div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">${T.image_url?`<img src="${re(T.image_url)}" class="${T.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} object-cover flex-shrink-0">`:`<div class="${T.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} bg-indigo-50 text-indigo-600 grid place-items-center font-bold flex-shrink-0">${T.kind==="teacher"?"ครู":"นร"}</div>`}<div class="min-w-0"><p class="font-bold text-gray-800 text-xs truncate">${re(T.full_name)} <span class="ml-1 px-1.5 py-0.5 rounded ${T.kind==="teacher"?"bg-amber-100 text-amber-800":"bg-emerald-100 text-emerald-800"} text-[9px] font-bold">${T.kind==="teacher"?"คุณครู":"นักเรียนสต๊าฟ"}</span></p><p class="text-[10px] text-gray-400">${re(T.detail)}</p></div></div>`).join("")};(h=l.querySelector("#team-member-search"))==null||h.addEventListener("click",()=>{var O,W;const H=k((O=l.querySelector("#team-member-code-input"))==null?void 0:O.value);if(!H.length)return ge("กรุณากรอกรหัสครูหรือรหัสนักเรียน","error");const E=(W=l.querySelector("#team-member-color"))==null?void 0:W.value,T=i.find(Y=>Y.id===E),R=new Set(H.map(String)),F=a?(_||[]).filter(Y=>R.has(String(Y.teacher_code))).map(Y=>({...Y,kind:"teacher",code:Y.teacher_code,detail:`รหัสครู ${Y.teacher_code} · กลุ่มสาระ ${Y.dept||"—"}`})):[],M=new Set(F.map(Y=>String(Y.code))),U=[],z=[];H.forEach(Y=>{if(M.has(String(Y)))return;const D=(C||[]).filter(K=>String(K.student_code)===String(Y));if(!D.length){z.push({code:Y,reason:"ไม่พบรหัสนักเรียนนี้ในฐานข้อมูล"});return}const V=D.find(K=>K.is_active)||D[0];if(!V.is_active){z.push({code:Y,reason:"บัญชีนักเรียนถูกปิดสถานะ ไม่ใช่นักเรียนที่กำลังใช้งาน"});return}if(!(V.team_color_id===E||V.house_color===(T==null?void 0:T.name))){z.push({code:Y,reason:`นักเรียนอยู่สี${V.house_color||"อื่น"} ไม่ใช่สี${(T==null?void 0:T.name)||"ที่เลือก"}`});return}if(!r(V)){z.push({code:Y,reason:`นักเรียนอยู่ห้อง ${V.main_room||"ไม่ระบุ"} ระบบอนุญาตให้มอบสิทธิ์เฉพาะ ม.4–ม.6 และ ปวช.1–3`});return}if(!V.profile_id){z.push({code:Y,reason:"นักเรียนยังไม่มีบัญชีเข้าใช้งานระบบ จึงยังผูกสิทธิ์ประจำสีไม่ได้"});return}U.push({...V,kind:"student",code:V.student_code,detail:`รหัส ${V.student_code} · ห้อง ${V.main_room||"—"} · สี${(T==null?void 0:T.name)||"—"}`})}),b=[...F,...U],z.length&&S(z),b.length&&A()}),(I=l.querySelector("#team-member-code-input"))==null||I.addEventListener("keydown",H=>{var E;H.key==="Enter"&&(H.preventDefault(),(E=l.querySelector("#team-member-search"))==null||E.click())}),(u=l.querySelector("#team-member-add"))==null||u.addEventListener("click",async()=>{var M,U;const H=(M=l.querySelector("#team-member-role"))==null?void 0:M.value,E=(U=l.querySelector("#team-member-color"))==null?void 0:U.value;if(!E||!b.length)return ge("กรุณาเลือกสีและค้นหารายชื่อก่อน","error");if(!n.isAdmin&&!d.has(E))return ge("หัวหน้าครูประจำสีมอบหมายได้เฉพาะสีของตนเอง","error");if(b.some(z=>z.kind==="student")&&!["staff_lead","staff"].includes(H))return ge("บทบาทนี้ใช้กับครูเท่านั้น หากจะมอบหมายให้นักเรียนให้เลือกบทบาทนักเรียนสต๊าฟ","error");if(b.some(z=>z.kind==="teacher")&&!["lead_teacher","teacher"].includes(H))return ge("บทบาทนี้ใช้กับนักเรียนเท่านั้น หากจะมอบหมายให้ครูให้เลือกบทบาทครูประจำสี","error");if(H==="staff_lead"&&(B.has(E)||b.length>1))return ge("สีนี้มีหัวหน้านักเรียนสต๊าฟสีอยู่แล้ว หรือเลือกได้ทีละ 1 คนเท่านั้นสำหรับบทบาทนี้","error");const T={};l.querySelectorAll("[data-team-perm]").forEach(z=>T[z.dataset.teamPerm]=z.dataset.enabled==="true");const R=b.map(z=>({event_id:s.id,team_color_id:E,profile_id:z.profile_id,teacher_id:z.kind==="teacher"?Number(z.id):null,student_id:z.kind==="student"?Number(z.id):null,role:H,permissions:T,is_active:!0,ends_at:null})),{error:F}=await ie.from("sports_team_memberships").upsert(R,{onConflict:"event_id,team_color_id,profile_id"});if(F)return ge(F.message,"error");ge(`มอบหมายสิทธิ์ประจำสีแล้ว ${R.length} คน`),Vt(e,s,t,n)}),l.querySelectorAll("[data-team-perm]").forEach(H=>H.addEventListener("click",()=>{const E=H.dataset.enabled!=="true";H.dataset.enabled=E?"true":"false",H.className=`px-3 py-2 rounded-xl text-xs font-bold border ${E?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const T=(H.textContent.split(":").pop()||"").trim();H.textContent=`${E?"อนุญาต":"ไม่อนุญาต"}: ${T}`}))}catch(p){console.error(p),l.innerHTML='<div class="p-5 rounded-2xl bg-red-50 text-red-700 text-sm">โหลดหน้ามอบหมายผู้ดูแลสีไม่สำเร็จ</div>'}}async function Id(){const e=Lt();e.innerHTML='<div class="py-16 text-center">กำลังโหลดบัญชีเงินกีฬาสี...</div>';try{const{event:s}=await It(),[{data:t,error:n},{data:l,error:o}]=await Promise.all([ie.from("team_colors").select("id,name,hex_color,gender").eq("event_id",s.id).order("gender").order("display_order"),ie.from("sports_team_fund_entries").select("*").eq("event_id",s.id).in("category",["school_support","prize"]).order("entry_date",{ascending:!1}).order("created_at",{ascending:!1})]);if(n)throw n;if(o)throw o;let x=l||[];const r=i=>(t||[]).find(a=>a.id===i);e.innerHTML=`<div class="max-w-5xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">💰 บัญชีเงินกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">เพิ่ม/แก้ไข/ลบเงินสนับสนุนโรงเรียนและเงินรางวัลของแต่ละสี — ข้อมูลจะไปแสดงในหน้า "สีของฉัน" ของนักเรียนทุกคนทันที</p></div>
      <section class="bg-white border rounded-2xl p-5">
        <h2 class="font-bold mb-3">➕ เพิ่มรายการใหม่</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          <select id="fund-admin-color" class="border rounded-xl px-3 py-2 text-sm">${(t||[]).map(i=>`<option value="${re(i.id)}">สี${re(i.name)} (${i.gender==="M"?"ชาย":"หญิง"})</option>`).join("")}</select>
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
    </div>`;const d=()=>{const i=e.querySelector("#fund-admin-list");i.innerHTML=x.length?x.map(a=>{const m=r(a.team_color_id);return`<div class="p-3 flex items-center gap-3" data-fund-row="${re(a.id)}">
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
        </div>`}).join(""):'<p class="p-8 text-center text-gray-400 text-sm">ยังไม่มีรายการ</p>',i.querySelectorAll("[data-fund-del]").forEach(a=>a.onclick=async()=>{if(!confirm("ลบรายการนี้?"))return;const m=a.dataset.fundDel,{error:w}=await ie.from("sports_team_fund_entries").delete().eq("id",m);if(w){ge(w.message,"error");return}x=x.filter(f=>String(f.id)!==String(m)),ge("ลบรายการแล้ว"),d()}),i.querySelectorAll("[data-fund-edit]").forEach(a=>a.onclick=()=>{const m=a.dataset.fundEdit,w=i.querySelector(`[data-fund-row="${m}"]`),f=x.find(h=>String(h.id)===String(m)),v=w.querySelector("[data-fund-view]");v.innerHTML=`<div class="grid sm:grid-cols-3 gap-1.5">
          <input data-edit-amount type="number" min="1" step="1" value="${Number(f.amount)}" class="border rounded-lg px-2 py-1.5 text-xs">
          <input data-edit-desc type="text" value="${re(f.description)}" class="border rounded-lg px-2 py-1.5 text-xs sm:col-span-2">
          <input data-edit-date type="date" value="${f.entry_date}" class="border rounded-lg px-2 py-1.5 text-xs">
          <div class="flex gap-1.5"><button data-edit-save class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">บันทึก</button><button data-edit-cancel class="px-3 py-1.5 rounded-lg border text-xs font-bold">ยกเลิก</button></div>
        </div>`,v.querySelector("[data-edit-cancel]").onclick=()=>d(),v.querySelector("[data-edit-save]").onclick=async()=>{const h=Number(v.querySelector("[data-edit-amount]").value),I=v.querySelector("[data-edit-desc]").value.trim(),u=v.querySelector("[data-edit-date]").value;if(!h||h<=0||!I){ge("กรอกข้อมูลให้ครบ","error");return}const{error:p}=await ie.from("sports_team_fund_entries").update({amount:h,description:I,entry_date:u}).eq("id",m);if(p){ge(p.message,"error");return}Object.assign(f,{amount:h,description:I,entry_date:u}),ge("แก้ไขแล้ว"),d()}})};d(),e.querySelector("#fund-admin-submit").onclick=async()=>{const i=e.querySelector("#fund-admin-color").value,a=e.querySelector("#fund-admin-category").value,m=Number(e.querySelector("#fund-admin-amount").value),w=e.querySelector("#fund-admin-desc").value.trim(),f=e.querySelector("#fund-admin-date").value||$s(),v=e.querySelector("#fund-admin-status");if(!m||m<=0||!w){v.textContent="กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ",v.className="text-xs text-red-600 mt-2";return}const h=e.querySelector("#fund-admin-submit");h.disabled=!0;const{data:I,error:u}=await ie.from("sports_team_fund_entries").insert({event_id:s.id,team_color_id:i,category:a,amount:m,description:w,entry_date:f}).select().single();if(h.disabled=!1,u){v.textContent="บันทึกไม่สำเร็จ: "+u.message,v.className="text-xs text-red-600 mt-2";return}x.unshift(I),e.querySelector("#fund-admin-amount").value="",e.querySelector("#fund-admin-desc").value="",v.textContent="",ge("เพิ่มรายการแล้ว"),d()}}catch(s){console.error(s),e.innerHTML=Ct()}}async function vr(){const e=Lt();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดภาพรวมกีฬาสี...</div>';try{const{event:s}=await It(),[{data:t,error:n},{data:l}]=await Promise.all([ie.rpc("get_sports_admin_overview",{p_event:s.id}),ie.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);if(n)throw n;const o=(t==null?void 0:t.colors)||[],x=(t==null?void 0:t.attendance)||[],r=(t==null?void 0:t.dues)||[],d=(t==null?void 0:t.fund)||[],i=[...new Map(hr(l).map(_=>[_.date,_.label])).entries()].map(([_,C])=>({date:_,label:C})).sort((_,C)=>_.date<C.date?-1:1),a=i.map(_=>_.date),m=new Map(x.map(_=>[`${_.team_color_id}|${_.session_date}`,Number(_.checked_count)])),w=new Map(r.map(_=>[_.team_color_id,_])),f=new Map(d.map(_=>[_.team_color_id,_])),v=_=>_>=80?"bg-emerald-500":_>=50?"bg-amber-500":"bg-red-500",h=()=>a.length?`<div class="overflow-x-auto"><table class="w-full text-sm border-collapse">
        <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left sticky left-0 bg-gray-50 z-10">สี</th>${i.map(_=>`<th class="p-2 text-center whitespace-nowrap"><div>${re(_.date)}</div>${_.label?`<div class="text-[10px] font-normal text-gray-400">${re(_.label)}</div>`:""}</th>`).join("")}</tr></thead>
        <tbody>${o.map(_=>{const C=Number(_.member_count)||0;return`<tr class="border-b"><td class="p-2 font-bold sticky left-0 bg-white z-10" style="color:${re(_.hex_color)}">สี${re(_.name)}</td>${a.map(L=>{const q=m.get(`${_.id}|${L}`)||0,B=C?Math.round(q*100/C):0;return`<td class="p-2 text-center"><div class="inline-flex flex-col items-center gap-1"><span class="text-xs font-bold">${q}/${C}</span><div class="w-14 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full ${v(B)}" style="width:${B}%"></div></div></div></td>`}).join("")}</tr>`}).join("")}</tbody>
      </table></div>`:'<p class="text-sm text-gray-400 text-center py-10">ยังไม่มีวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน — ไปตั้งวันที่ในหน้าปฏิทินปฏิบัติงานก่อน</p>',I=()=>{const _=o.reduce((q,B)=>q+(Number(B.member_count)||0),0),C=r.reduce((q,B)=>q+(Number(B.paid_count)||0),0),L=r.reduce((q,B)=>q+(Number(B.total_amount)||0),0);return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-center">จ่ายแล้ว</th><th class="p-3 text-center">ยังไม่จ่าย</th><th class="p-3 text-center">%</th><th class="p-3 text-right">ยอดรวม (บาท)</th></tr></thead>
        <tbody>${o.map(q=>{const B=w.get(q.id)||{paid_count:0,total_amount:0},b=Number(q.member_count)||0,c=Number(B.paid_count)||0,g=b?Math.round(c*100/b):0;return`<tr class="border-b"><td class="p-3 font-bold" style="color:${re(q.hex_color)}">สี${re(q.name)}</td><td class="p-3 text-center">${c}</td><td class="p-3 text-center">${Math.max(0,b-c)}</td><td class="p-3 text-center">${g}%</td><td class="p-3 text-right font-bold">${Number(B.total_amount||0).toLocaleString("th-TH")}</td></tr>`}).join("")}
        <tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-center">${C}</td><td class="p-3 text-center">${Math.max(0,_-C)}</td><td class="p-3"></td><td class="p-3 text-right">${L.toLocaleString("th-TH")}</td></tr>
        </tbody>
      </table></div>`},u=()=>{let _=0,C=0,L=0,q=0;const B=o.map(c=>{const g=w.get(c.id)||{total_amount:0},$=f.get(c.id)||{school_support:0,prize:0,expense:0},y=Number(g.total_amount)||0,k=Number($.school_support)||0,S=Number($.prize)||0,A=Number($.expense)||0,H=y+k+S-A;return _+=y,C+=k,L+=S,q+=A,`<tr class="border-b"><td class="p-3 font-bold" style="color:${re(c.hex_color)}">สี${re(c.name)}</td><td class="p-3 text-right">${y.toLocaleString("th-TH")}</td><td class="p-3 text-right">${k.toLocaleString("th-TH")}</td><td class="p-3 text-right">${S.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${A.toLocaleString("th-TH")}</td><td class="p-3 text-right font-bold ${H<0?"text-red-600":"text-emerald-600"}">${H.toLocaleString("th-TH")}</td></tr>`}).join(""),b=_+C+L-q;return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-right">ค่าบำรุง</th><th class="p-3 text-right">สนับสนุนโรงเรียน</th><th class="p-3 text-right">เงินรางวัล</th><th class="p-3 text-right">รายจ่าย</th><th class="p-3 text-right">คงเหลือ</th></tr></thead>
        <tbody>${B}<tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-right">${_.toLocaleString("th-TH")}</td><td class="p-3 text-right">${C.toLocaleString("th-TH")}</td><td class="p-3 text-right">${L.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${q.toLocaleString("th-TH")}</td><td class="p-3 text-right ${b<0?"text-red-600":"text-emerald-600"}">${b.toLocaleString("th-TH")}</td></tr></tbody>
      </table></div>`};e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">📊 ภาพรวมกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">สรุปเช็คชื่อรายวัน ค่าบำรุงสี และบัญชีของทุกสี เทียบกันในหน้าเดียว — ดูสถานะการประเมิน/คะแนนได้ที่หน้า "ประเมินกีฬาสี"</p></div>
      <div id="sports-ov-tabs" class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">
        <button type="button" data-ov-tab="attendance" class="px-4 py-2 rounded-lg text-sm font-bold transition">📷 เช็คชื่อรายวัน</button>
        <button type="button" data-ov-tab="dues" class="px-4 py-2 rounded-lg text-sm font-bold transition">💰 ค่าบำรุงสี</button>
        <button type="button" data-ov-tab="ledger" class="px-4 py-2 rounded-lg text-sm font-bold transition">📒 บัญชีสี</button>
      </div>
      <section class="bg-white border rounded-2xl p-5"><div id="sports-ov-body"></div></section>
    </div>`;let p="attendance";const j=()=>{e.querySelectorAll("[data-ov-tab]").forEach(_=>{const C=_.dataset.ovTab===p;_.className=`px-4 py-2 rounded-lg text-sm font-bold transition ${C?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}`}),e.querySelector("#sports-ov-body").innerHTML=p==="attendance"?h():p==="dues"?I():u()};e.querySelectorAll("[data-ov-tab]").forEach(_=>_.onclick=()=>{p=_.dataset.ovTab,j()}),j()}catch(s){console.error(s),e.innerHTML=Ct()}}const vt={parade:"🕌 ขบวนพาเหรด/ความร่วมมือสี",page:"📣 หน้าเว็บเพจ",color_eval:"🎨 วันเข้าสีเดิม",sports_day:"🏟️ วันกีฬาสีจริง"},Ca={แดง:"#ef4444",น้ำเงิน:"#3b82f6",เขียว:"#10b981",น้ำตาล:"#92400e",ส้ม:"#f97316",ฟ้า:"#0ea5e9",ม่วง:"#a855f7",เทา:"#6b7280"},jt=["แดง","น้ำเงิน","เขียว","น้ำตาล"],Bt=["ส้ม","ฟ้า","ม่วง","เทา"];async function dt(){const e=Lt();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดหน้าประเมินกีฬาสี...</div>';try{const{event:s}=await It(),t=await Xs(ie),{data:n}=await ie.from("profiles").select("role,is_also_admin").eq("id",t).maybeSingle(),l=(n==null?void 0:n.role)==="admin"||(n==null?void 0:n.is_also_admin)===!0||await fr(t),o="pp5:"+t,[{data:x},{data:r},{data:d},i,{data:a},{data:m}]=await Promise.all([ie.from("team_colors").select("id,name,hex_color,logo_url,gender").eq("event_id",s.id).order("gender").order("display_order"),ie.from("sports_score_criteria").select("*").eq("event_id",s.id).eq("is_active",!0).order("category").order("display_order"),ie.from("sports_score_evaluators").select("*").eq("event_id",s.id).eq("profile_id",t).eq("is_active",!0),ua("sports_score_entries",G=>G.select("id,criteria_id,team_color_id,session_id,judge_username,score,updated_at").eq("event_id",s.id).order("updated_at",{ascending:!0}).order("id",{ascending:!0})),ie.from("color_totals").select("*").eq("event_id",s.id),ie.from("sports_evaluation_sessions").select("*").eq("event_id",s.id).order("session_type").order("day_no")]);let w={colors:[],attendance:[]},f=[],v=null;const h=l||(d||[]).length>0;if(h){const[{data:G,error:J},{data:de,error:le}]=await Promise.all([ie.rpc("get_sports_attendance_overview",{p_event:s.id}),ie.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);w=G||{colors:[],attendance:[]},f=de||[],v=J||le||null}let I=[],u=[],p=[];if(l){const[{data:G},{data:J},{data:de}]=await Promise.all([ie.from("sports_score_evaluators").select("*").eq("event_id",s.id).order("created_at",{ascending:!1}),ie.from("teachers").select("id,full_name,teacher_code,profile_id,image_url").order("full_name"),ie.from("sports_evaluation_judges").select("id,name,username,role,criteria_id").eq("event_id",s.id)]);I=G||[],u=(J||[]).filter(le=>le.profile_id),p=de||[]}const j=new Map(u.map(G=>[G.profile_id,G])),_=new Map((r||[]).map(G=>[G.id,G])),C=new Map((i||[]).filter(G=>G.judge_username===o).map(G=>[`${G.criteria_id}|${G.team_color_id}|${G.session_id||""}`,Number(G.score)])),L=new Set((d||[]).filter(G=>!G.criteria_id).map(G=>G.category)),q=new Set((d||[]).filter(G=>G.criteria_id).map(G=>G.criteria_id)),B=l?r||[]:(r||[]).filter(G=>L.has(G.category)||q.has(G.id)),b=[...new Set(B.map(G=>G.category))];let c="M",g=b[0]||null,$=null,y=null,k=!1,S="M",A=null,H="cumulative",E="ALL";const T=G=>{const J=String(G||"").indexOf(" - ");return J===-1?G:G.slice(0,J)};let R=null;const F=()=>{var we;if(!B.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><p class="text-gray-400">คุณยังไม่ได้รับมอบหมายให้ประเมินหมวดใด — ติดต่อแอดมินเพื่อขอสิทธิ์ (ดูสรุปคะแนนได้ที่แท็บ "สรุปคะแนนทุกสี")</p></section>';const G=B.filter(fe=>fe.category===g),J=new Map;if(g==="sports_day")(m||[]).filter(fe=>fe.session_type==="sports_day").forEach(fe=>{const ke=G.filter(Ce=>Ce.session_id===fe.id);ke.length&&J.set(fe.id,{label:fe.name,criteria:ke})});else if(g==="color_eval"){(m||[]).filter(ke=>ke.session_type==="color_day").sort((ke,Ce)=>(ke.day_no||0)-(Ce.day_no||0)).forEach(ke=>{const Ce=G.filter(Be=>Be.session_id===ke.id);Ce.length&&J.set(ke.id,{label:ke.name,criteria:Ce})});const fe=G.filter(ke=>!ke.session_id);fe.length&&J.set("legacy",{label:"หัวข้อเดิมที่ยังไม่ผูกวัน",criteria:fe})}else g==="page"||g==="parade"?G.length&&J.set("all",{label:"หัวข้อทั้งหมด",criteria:G}):G.forEach(fe=>{const ke=T(fe.name);J.has(ke)||J.set(ke,{label:ke,criteria:[]}),J.get(ke).criteria.push(fe)});const de=[...J.keys()];(!$||!de.includes($))&&($=de[0]||null);const le=J.get($),X=(le==null?void 0:le.criteria)||G,ee=de.map(fe=>J.get(fe).label),pe=(m||[]).find(fe=>fe.id===$),ye=(pe==null?void 0:pe.status)==="closed"&&!l,be=(x||[]).filter(fe=>fe.gender===c);(!y||!be.some(fe=>fe.id===y))&&(y=((we=be[0])==null?void 0:we.id)||null);const ve=be.find(fe=>fe.id===y)||null,xe=fe=>{const ke=X.map(Be=>C.get(`${Be.id}|${fe.id}|${Be.session_id||""}`)),Ce=ke.filter(Be=>Be!==void 0).length;return{saved:Ce,total:ke.length,complete:ke.length>0&&Ce===ke.length}};return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div><h2 class="font-bold">📝 ให้คะแนนประเมิน</h2><p class="text-xs text-gray-500 mt-1">กรอกคะแนนแต่ละสีแล้วกดบันทึกด้านล่าง — แก้ไขซ้ำได้เสมอ</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-eval-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${c==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-eval-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${c==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        ${b.length>1?`<div class="flex flex-wrap gap-2 mb-4">${b.map(fe=>`<button type="button" data-eval-cattab="${fe}" class="px-4 py-2 rounded-xl text-xs font-bold border transition ${fe===g?"bg-indigo-600 text-white border-indigo-600":"text-gray-600 border-gray-200 hover:bg-gray-50"}">${re(vt[fe]||fe)}</button>`).join("")}</div>`:""}
        ${de.length>1?`<div class="mb-4"><label class="text-xs font-bold text-gray-600 block mb-1.5">${g==="sports_day"?"🏟️ เลือกวันกีฬาสีจริง":"📅 เลือกรอบ/วันที่จะประเมิน"}</label><select id="eval-session-select" class="w-full sm:w-80 border rounded-xl px-3 py-2.5 text-sm font-bold">${de.map(fe=>`<option value="${re(fe)}" ${fe===$?"selected":""}>${re(J.get(fe).label)}</option>`).join("")}</select></div>`:""}
        <div class="sticky top-2 z-10 -mx-1 px-1 py-2 mb-3 bg-white/95 backdrop-blur">
          <div class="flex gap-2 overflow-x-auto pb-1">
            ${be.map((fe,ke)=>{const Ce=(c==="W"?Bt:jt)[ke]||fe.name,Be=Ca[Ce]||fe.hex_color||"#94a3b8",lt=xe(fe),Ke=fe.id===y;return`<button type="button" data-eval-color="${fe.id}" ${k&&!Ke?"disabled":""} class="flex-shrink-0 min-w-[92px] px-3 py-2 rounded-xl border text-left transition ${Ke?"ring-2 ring-indigo-500 border-indigo-400":"border-gray-200"} ${k&&!Ke?"opacity-50 cursor-not-allowed":""}" style="background:${re(Be)}12">
                <span class="block text-xs font-bold" style="color:${re(Be)}">สี${re(Ce)}</span>
                <span class="block text-[10px] text-gray-500 mt-0.5">${lt.complete?"✓ ครบแล้ว":lt.saved?`${lt.saved}/${lt.total} บันทึกแล้ว`:"ยังไม่เริ่ม"}</span>
              </button>`}).join("")}
          </div>
          ${ve?`          <p class="text-xs text-gray-500 mt-2">กำลังประเมิน: <b>สี${re((c==="W"?Bt:jt)[be.indexOf(ve)]||ve.name)}</b>${ye?" · ปิดรับคะแนนแล้ว":k?" · มีการแก้ไขที่ยังไม่ได้บันทึก":""}</p>`:""}
        </div>
        ${ve?(()=>{const fe=be.indexOf(ve),ke=(c==="W"?Bt:jt)[fe]||ve.name,Ce=Ca[ke]||ve.hex_color||"#94a3b8",Be=re((ke||"?").slice(0,1)),Ke=X.map(qe=>C.get(`${qe.id}|${ve.id}|${qe.session_id||""}`)).filter(qe=>qe!==void 0).reduce((qe,Je)=>qe+Number(Je||0),0),gt=X.reduce((qe,Je)=>qe+Number(Je.max_score||0),0),Ze=[["อีบาดัต",2],["ความสะอาด",3],["เข้าแถว/เช็คชื่อ",3],["นักกีฬา",3],["สต๊าฟ",4],["กองเชียร์",4]],bt=[];return X.forEach((qe,Je)=>{var yt;const Ht=qe.group_name||qe.group_key,xa=g==="page"||g==="parade"?"หัวข้อทั้งหมด":g==="sports_day"?((yt=Ze.find(([,ft],ga)=>{const es=Ze.slice(0,ga).reduce((pn,[,mn])=>pn+mn,0);return Je>=es&&Je<es+ft}))==null?void 0:yt[0])||"เกณฑ์อื่นๆ":T(qe.name),Rt=Ht||xa;let Ae=bt.find(ft=>ft.label===Rt);Ae||(Ae={label:Rt,criteria:[]},bt.push(Ae)),Ae.criteria.push(qe)}),`<div class="rounded-2xl border overflow-hidden" style="border-color:${re(Ce)}55">
            <div class="flex items-center gap-3 p-3" style="background:${re(Ce)}14">
              ${ve.logo_url?`<img data-color-logo src="${re(ve.logo_url)}" class="w-11 h-11 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${re(Ce)}"><div data-color-logo-fallback class="hidden w-11 h-11 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${re(Ce)}">${Be}</div>`:`<div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${re(Ce)}">${Be}</div>`}
              <div><b class="text-sm" style="color:${re(Ce)}">สี${re(ke)}</b><p class="text-xs text-gray-500 mt-0.5">รวม <span id="eval-current-total">${Ke}</span> / ${gt}</p></div>
            </div>
            <div class="p-3 space-y-2 bg-white">
              ${bt.map((qe,Je)=>{const xa=qe.criteria.map(Ae=>C.get(`${Ae.id}|${ve.id}|${Ae.session_id||""}`)).filter(Ae=>Ae!==void 0).length,Rt=qe.criteria.reduce((Ae,yt)=>Ae+Number(yt.max_score||0),0);return`<details class="border rounded-xl overflow-hidden" ${Je===0?"open":""}>
                  <summary class="cursor-pointer list-none flex items-center justify-between gap-3 px-3 py-2.5 bg-gray-50 hover:bg-gray-100">
                    <span class="text-xs font-bold text-gray-700">${re(qe.label)}</span>
                    <span class="text-[10px] text-gray-500">${xa}/${qe.criteria.length} ข้อ · เต็ม ${Rt}</span>
                  </summary>
                  <div class="p-3 space-y-2">
                    ${qe.criteria.map(Ae=>{const yt=C.get(`${Ae.id}|${ve.id}|${Ae.session_id||""}`),ft=T(Ae.name),ga=ee.length>1&&ft!==Ae.name?Ae.name.slice(ft.length+3):Ae.name;return`<div class="flex items-center justify-between gap-2">
                        <label class="text-xs text-gray-600 flex-1">${re(ga)}</label>
                        <div class="flex items-center gap-1 flex-shrink-0">
                          <input type="number" inputmode="numeric" min="0" max="${Number(Ae.max_score)}" step="1" value="${yt??""}" data-score-input data-crit="${Ae.id}" data-color="${ve.id}" ${ye?"disabled":""} class="w-16 border rounded-lg px-2 py-1.5 text-center text-sm">
                          <span class="text-[10px] text-gray-400 w-10">/ ${Number(Ae.max_score)}</span>
                        </div>
                      </div>`}).join("")}
                  </div>
                </details>`}).join("")}
            </div>
          </div>`})():""}
        <div class="sticky bottom-2 z-10 mt-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 backdrop-blur py-2">
          <span class="text-xs text-gray-500">${k?"กรุณาบันทึกก่อนเปลี่ยนสี":"เลือกสีจากแถบด้านบน"}</span>
          <button id="eval-submit" type="button" ${ye?"disabled":""} class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold disabled:opacity-50">${ye?"🔒 ปิดรับคะแนน":"💾 บันทึกสีนี้"}</button>
        </div>
      </section>`},M=()=>{const G=J=>J.map(de=>`<div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2" data-crit-row="${de.id}"><span class="flex-1 text-sm" data-crit-view>${re(de.name)}</span><span class="text-xs text-gray-500 w-20 text-right" data-crit-view>เต็ม ${Number(de.max_score)}</span><button type="button" data-crit-edit="${de.id}" class="px-2 py-1 text-xs border rounded-lg text-indigo-600">แก้ไข</button><button type="button" data-crit-del="${de.id}" class="px-2 py-1 text-xs border rounded-lg text-red-600">ลบ</button></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>';return["parade","page","color_eval","sports_day"].map(J=>{const de=(r||[]).filter(ee=>ee.category===J),le=J==="color_eval"?(m||[]).filter(ee=>ee.session_type==="color_day").sort((ee,pe)=>(ee.day_no||0)-(pe.day_no||0)):J==="sports_day"?(m||[]).filter(ee=>ee.session_type==="sports_day").sort((ee,pe)=>ee.day_no-pe.day_no):[],X=le.map(ee=>({label:ee.name,rows:de.filter(pe=>pe.session_id===ee.id)}));if(le.length||X.push({label:"หัวข้อทั้งหมด",rows:de}),J==="color_eval"){const ee=de.filter(pe=>!pe.session_id);ee.length&&X.push({label:"หัวข้อเดิมที่ยังไม่ผูกวัน",rows:ee})}return`<div class="mb-4"><h4 class="text-sm font-bold text-gray-700 mb-2">${vt[J]}</h4><div class="space-y-2" data-crit-cat="${J}">${X.map((ee,pe)=>`<details class="border rounded-xl overflow-hidden" ${pe===0?"open":""}><summary class="cursor-pointer list-none flex items-center justify-between px-3 py-2 bg-gray-50 text-xs font-bold">${re(ee.label)}<span class="text-gray-500">${ee.rows.length} หัวข้อ</span></summary><div class="p-2 space-y-1.5">${G(ee.rows)}</div></details>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>'}</div></div>`}).join("")},U=()=>{if(!I.length)return'<p class="text-sm text-gray-400 text-center py-4">ยังไม่มีผู้ประเมิน</p>';const G=new Map;return I.forEach(J=>{G.has(J.profile_id)||G.set(J.profile_id,[]),G.get(J.profile_id).push(J)}),[...G.entries()].map(([J,de])=>{const le=j.get(J);return`<div class="flex items-start gap-3 bg-gray-50 rounded-xl p-3 mb-2"><div class="flex-1 min-w-0"><b class="text-sm block truncate">${re((le==null?void 0:le.full_name)||"ไม่พบชื่อ (บัญชีอาจถูกลบ)")}</b><div class="flex flex-wrap gap-1.5 mt-1.5">${de.map(X=>{var ee;return`<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">${re(vt[X.category]||X.category)}${X.criteria_id?` · ${re(((ee=_.get(X.criteria_id))==null?void 0:ee.name)||"")}`:""}${X.role_label?` · ${re(X.role_label)}`:""}<button type="button" data-eval-del="${X.id}" class="ml-1 text-red-500 font-black">✕</button></span>`}).join("")}</div></div></div>`}).join("")},z=()=>`<div class="mb-6"><h3 class="font-bold text-sm mb-3">🏟️ วันกีฬาสีจริง</h3><div class="grid sm:grid-cols-2 gap-3">${(m||[]).filter(J=>J.session_type==="sports_day").sort((J,de)=>J.day_no-de.day_no).map(J=>`<div class="border rounded-xl p-3 space-y-2">
        <div class="flex items-center justify-between"><b>วันที่ ${J.day_no}</b><span class="text-xs font-bold ${J.status==="open"?"text-emerald-600":J.status==="closed"?"text-red-600":"text-gray-500"}">${J.status==="open"?"เปิดรับคะแนน":J.status==="closed"?"ปิดรับคะแนน":"ยังไม่เปิด"}</span></div>
        <input data-session-name="${J.id}" value="${re(J.name)}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <input data-session-date="${J.id}" type="date" value="${J.event_date||""}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <div class="flex gap-2"><select data-session-status="${J.id}" class="flex-1 border rounded-lg px-2 py-1.5 text-sm"><option value="upcoming" ${J.status==="upcoming"?"selected":""}>ยังไม่เปิด</option><option value="open" ${J.status==="open"?"selected":""}>เปิดรับคะแนน</option><option value="closed" ${J.status==="closed"?"selected":""}>ปิดรับคะแนน</option></select><button type="button" data-session-save="${J.id}" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold">บันทึก</button></div>
      </div>`).join("")}</div></div>`,O=()=>`<section class="bg-white border rounded-2xl p-5">
      <div class="mb-4"><h2 class="font-bold">⚙️ ตั้งค่าการประเมิน</h2><p class="text-xs text-gray-500 mt-1">จัดการหัวข้อ/คะแนนเต็ม และมอบหมายครูผู้ประเมิน</p></div>
      ${z()}
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
              ${(m||[]).filter(G=>G.session_type==="color_day"||G.session_type==="sports_day").sort((G,J)=>(G.session_type+G.day_no).localeCompare(J.session_type+J.day_no)).map(G=>`<option value="${G.id}">${re(G.name)}</option>`).join("")}
            </select>
            <input id="crit-new-name" placeholder="ชื่อหัวข้อ" class="border rounded-xl px-3 py-2 text-sm sm:col-span-2">
            <input id="crit-new-max" type="number" min="1" value="10" class="border rounded-xl px-3 py-2 text-sm" placeholder="คะแนนเต็ม">
          </div>
          <button id="crit-new-add" type="button" class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">➕ เพิ่มหัวข้อ</button>
        </div>
        <div>
          <h3 class="font-bold text-sm mb-3">🧑‍⚖️ ผู้ประเมิน (${I.length} รายการ)</h3>
          <div class="max-h-64 overflow-y-auto mb-3">${U()}</div>
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
    </section>`,W=G=>(r||[]).filter(J=>J.category===G).reduce((J,de)=>J+(Number(de.max_score)||0),0),Y=W("parade")||100,D=W("page")||100,V=W("color_eval")||100,K=new Map((a||[]).map(G=>[G.team_color_id,G])),Q=G=>(r||[]).map(J=>{const de=(i||[]).filter(X=>X.criteria_id===J.id&&X.team_color_id===G).map(X=>Number(X.score)),le=de.length?Math.round(de.reduce((X,ee)=>X+ee,0)/de.length*100)/100:0;return{crit:J,avg:le,count:de.length}}).filter(J=>J.count>0),Z=(G,J,de)=>`<div class="space-y-1"><div class="flex justify-between text-xs text-gray-500"><span>${re(G)}</span><span class="font-bold text-gray-700">${Number(J).toLocaleString("th-TH")} / ${Number(de).toLocaleString("th-TH")}</span></div><div class="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-indigo-500 rounded-full" style="width:${de?Math.min(100,J/de*100):0}%"></div></div></div>`,se=()=>{const G=(m||[]).filter(ee=>ee.session_type==="sports_day").sort((ee,pe)=>ee.day_no-pe.day_no);if(!G.length)return"";const J=(r||[]).filter(ee=>ee.category==="sports_day"),de=(ee,pe)=>J.filter(ye=>ye.session_id===pe).reduce((ye,be)=>{const ve=(i||[]).filter(xe=>xe.criteria_id===be.id&&xe.team_color_id===ee).map(xe=>Number(xe.score)).filter(Number.isFinite);return ye+(ve.length?ve.reduce((xe,we)=>xe+we,0)/ve.length:0)},0),le=ee=>J.filter(pe=>pe.session_id===ee).reduce((pe,ye)=>pe+Number(ye.max_score||0),0),X=(x||[]).filter(ee=>ee.gender===S).map((ee,pe)=>{const ye=G.map(we=>de(ee.id,we.id)),be=G.map(le),ve=H==="cumulative"?ye.reduce((we,fe)=>we+fe,0):ye[Number(H)-1]||0,xe=H==="cumulative"?be.reduce((we,fe)=>we+fe,0):be[Number(H)-1]||0;return{c:ee,name:(S==="W"?Bt:jt)[pe]||ee.name,total:ve,max:xe,values:ye}}).sort((ee,pe)=>pe.total-ee.total);return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><h2 class="font-bold">🏟️ สรุปวันกีฬาสีจริง</h2><p class="text-xs text-gray-500 mt-1">คะแนนเฉลี่ยจากผู้ประเมิน แยกวันและสะสม 4 วัน</p></div>
          <div class="flex flex-wrap gap-1">${G.map(ee=>`<button type="button" data-summary-sports-day="${ee.day_no}" class="px-3 py-1.5 rounded-lg text-xs font-bold ${H===String(ee.day_no)?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">วันที่ ${ee.day_no}</button>`).join("")}<button type="button" data-summary-sports-day="cumulative" class="px-3 py-1.5 rounded-lg text-xs font-bold ${H==="cumulative"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">สะสม</button></div>
        </div>
        <div class="space-y-2">${X.map((ee,pe)=>`<div class="flex items-center gap-3 rounded-xl border p-3"><span class="w-7 text-center font-bold text-gray-400">#${pe+1}</span><span class="flex-1 font-bold">สี${re(ee.name)}</span><span class="font-black">${ee.total.toFixed(2)} / ${ee.max}</span></div>`).join("")}</div>
      </section>`},ae=()=>{const G=(x||[]).filter(le=>le.gender===S),J=S==="W"?Bt:jt,de=G.map((le,X)=>{const ee=J[X]||le.name,pe=K.get(le.id)||{};return{c:le,canonicalName:ee,t:pe,grand:Number(pe.grand_total)||0}}).sort((le,X)=>X.grand-le.grand);return`${se()}${Md((a||[]).filter(le=>le.gender===S),null,S)}<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div><h2 class="font-bold">🏅 สรุปคะแนนทุกสี</h2><p class="text-xs text-gray-500 mt-1">รวมคะแนนกรรมการ + กีฬา + พื้นบ้าน/ทักษะ + อีบาดัต + เหรียญรางวัล ข้อมูลเดียวกับระบบกีฬาสีหลัก อัปเดตสด</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-sum-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${S==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-sum-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${S==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        <div class="space-y-3">
          ${de.map((le,X)=>{const ee=Ca[le.canonicalName]||le.c.hex_color||"#94a3b8",pe=re(le.canonicalName.slice(0,1)),ye=A===le.c.id,be=Q(le.c.id);return`<div class="rounded-2xl border overflow-hidden">
              <button type="button" data-toggle-expand="${le.c.id}" class="w-full flex items-center justify-between gap-3 p-3.5" style="background:${re(ee)}14">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="w-6 text-center font-bold text-sm text-gray-400 flex-shrink-0">#${X+1}</span>
                  ${le.c.logo_url?`<img data-color-logo src="${re(le.c.logo_url)}" class="w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${re(ee)}"><div data-color-logo-fallback class="hidden w-10 h-10 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${re(ee)}">${pe}</div>`:`<div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${re(ee)}">${pe}</div>`}
                  <b class="text-sm truncate" style="color:${re(ee)}">สี${re(le.canonicalName)}</b>
                </div>
                <div class="flex items-center gap-3 flex-shrink-0">
                  <span class="px-3.5 py-1.5 rounded-xl bg-gray-900 text-yellow-400 font-black text-sm">${le.grand.toLocaleString("th-TH")}</span>
                  <span class="text-gray-400">${ye?"▲":"▼"}</span>
                </div>
              </button>
              ${ye?`<div class="p-4 border-t bg-gray-50 space-y-4">
                <div class="grid sm:grid-cols-2 gap-3">
                  ${Z("🕌 พาเหรด/ความร่วมมือสี",Number(le.t.parade_total)||0,Y)}
                  ${Z("📣 หน้าเว็บเพจ",Number(le.t.page_total)||0,D)}
                  ${Z("🎨 วันเข้าสี/วันกีฬาสีจริง",Number(le.t.color_eval_total)||0,V)}
                  ${Z("🧹 วิชาการสะสม",Number(le.t.academic_total)||0,100)}
                  ${Z("🏃 กีฬาสากล + กรีฑา",Number(le.t.sports_total)||0,150)}
                  ${Z("🎯 พื้นบ้าน / ทักษะ",Number(le.t.folk_skill_total)||0,150)}
                  ${Z("🕋 อีบาดัต",Number(le.t.ibadat_total)||0,100)}
                </div>
                <div class="flex flex-wrap gap-2 text-xs font-bold">
                  <span class="px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700">🥇 ทอง ${Number(le.t.gold_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">🥈 เงิน ${Number(le.t.silver_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700">🥉 ทองแดง ${Number(le.t.bronze_count)||0}</span>
                </div>
                <div class="border-t pt-3">
                  <p class="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">รายละเอียดคะแนนแยกหัวข้อ (เฉลี่ยจากผู้ประเมินทุกคน)</p>
                  ${be.length?`<div class="space-y-1.5">${be.map(ve=>{var xe;return`<div class="flex items-center justify-between gap-2 bg-white border rounded-lg px-3 py-2"><span class="text-xs text-gray-600">${re(((xe=vt[ve.crit.category])==null?void 0:xe.split(" ")[0])||"")} ${re(ve.crit.name)}</span><b class="text-xs">${ve.avg} / ${Number(ve.crit.max_score)}</b></div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 text-center py-3">ยังไม่มีผู้ประเมินให้คะแนน</p>'}
                </div>
              </div>`:""}
            </div>`}).join("")}
        </div>
      </section>`},me=j,ue=new Map;(I||[]).forEach(G=>{ue.has(G.profile_id)||ue.set(G.profile_id,new Set),ue.get(G.profile_id).add(G.category)});const _e=[...[...ue.entries()].map(([G,J])=>{var de;return{name:((de=me.get(G))==null?void 0:de.full_name)||"ไม่พบชื่อ",source:"ครู ปพ.5",categories:[...J],judgeUsername:"pp5:"+G}}),...(p||[]).map(G=>({name:G.name,source:"กรรมการ AZIZGAMES",categories:[G.role==="colorEval"?"color_eval":G.role],judgeUsername:G.username}))],Ie=new Map;(i||[]).forEach(G=>{Ie.has(G.judge_username)||Ie.set(G.judge_username,[]),Ie.get(G.judge_username).push(G)});const Te=(x||[]).length||8,Ue=(r||[]).map(G=>{const J=(i||[]).filter(ee=>ee.criteria_id===G.id),de=new Set(J.map(ee=>ee.team_color_id)).size,le=new Set(J.map(ee=>ee.judge_username)).size,X=J.length?Math.round(J.reduce((ee,pe)=>ee+Number(pe.score),0)/J.length*100)/100:0;return{crit:G,colorsScored:de,judgesCount:le,avg:X,submitted:J.length}}),Qe=()=>`<section class="bg-white border rounded-2xl p-5 space-y-6">
      <div>
        <h2 class="font-bold mb-1">🧑‍⚖️ สถานะผู้ประเมิน</h2>
        <p class="text-xs text-gray-500 mb-3">ความครบถ้วนของแต่ละเกณฑ์ (${Te} สี) และสถานะการส่งคะแนนของผู้ประเมินทุกคน</p>
        <div class="overflow-x-auto"><table class="w-full text-sm">
          <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left">หัวข้อ</th><th class="p-2 text-center">สีที่มีคะแนน</th><th class="p-2 text-center">ผู้ประเมิน</th><th class="p-2 text-center">เฉลี่ย</th></tr></thead>
          <tbody>${Ue.map(G=>{var J;return`<tr class="border-b"><td class="p-2">${re(((J=vt[G.crit.category])==null?void 0:J.split(" ")[0])||"")} ${re(G.crit.name)}</td><td class="p-2 text-center ${G.colorsScored<Te?"text-amber-600 font-bold":"text-emerald-600 font-bold"}">${G.colorsScored}/${Te}</td><td class="p-2 text-center">${G.judgesCount}</td><td class="p-2 text-center font-bold">${G.submitted?G.avg+" / "+Number(G.crit.max_score):"—"}</td></tr>`}).join("")||'<tr><td colspan="4" class="p-6 text-center text-gray-400">ยังไม่มีหัวข้อเกณฑ์ในระบบ</td></tr>'}</tbody>
        </table></div>
      </div>
      <div>
        <h3 class="font-bold text-sm mb-3">รายชื่อผู้ประเมิน (${_e.length} คน)</h3>
        <div class="space-y-2">${_e.map(G=>{const J=Ie.get(G.judgeUsername)||[],de=J.length,le=de?J.reduce((X,ee)=>ee.updated_at>X?ee.updated_at:X,J[0].updated_at):null;return`<div class="flex items-center justify-between gap-3 bg-gray-50 rounded-xl p-3"><div class="min-w-0"><b class="text-sm block truncate">${re(G.name)}</b><p class="text-xs text-gray-500 mt-0.5">${re(G.source)} · ${G.categories.map(X=>re(vt[X]||X)).join(", ")}</p></div><div class="text-right flex-shrink-0"><span class="px-3 py-1 rounded-full text-xs font-bold ${de?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-400"}">${de?de+" รายการ":"ยังไม่ส่งคะแนน"}</span>${le?`<p class="text-[10px] text-gray-400 mt-1">ล่าสุด ${new Date(le).toLocaleDateString("th-TH",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}</p>`:""}</div></div>`}).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีผู้ประเมินในระบบ</p>'}</div>
      </div>
    </section>`,P=()=>{if(v)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">⚠️</div><h2 class="font-bold text-gray-800">โหลดสรุปเช็คชื่อเข้าสีไม่สำเร็จ</h2><p class="text-xs text-gray-500 mt-2">กรุณารีเฟรชหน้า หรือตรวจสอบสิทธิ์ผู้ประเมินและการตั้งค่าปฏิทินกีฬาสี</p></section>';const G=w.colors||[],J=[...new Map(hr(f).map(xe=>[xe.date,xe.label])).entries()].map(([xe,we])=>({date:xe,label:we})).sort((xe,we)=>xe.date<we.date?-1:1);if(!G.length)return'<section class="bg-white border rounded-2xl p-8 text-center text-gray-400">ยังไม่มีข้อมูลสีในกิจกรรมนี้</section>';if(!J.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">📅</div><h2 class="font-bold text-gray-800">ยังไม่มีวันเข้าสีในปฏิทินปฏิบัติงาน</h2><p class="text-xs text-gray-500 mt-2">กรุณาตั้งวันเข้าสีหรือวันกีฬาสีจริงในปฏิทินก่อนดูเปอร์เซ็นต์</p></section>';const de=G.filter(xe=>E==="ALL"||xe.gender===E),le=new Map((w.attendance||[]).map(xe=>[`${xe.team_color_id}|${xe.session_date}`,Number(xe.checked_count)||0])),X=(xe,we)=>we?Math.round(xe*1e3/we)/10:0,ee=xe=>xe>=80?"text-emerald-600":xe>=50?"text-amber-600":"text-red-600",pe=de.map(xe=>{const we=Number(xe.member_count)||0,fe=J.map(Ce=>({checked:le.get(`${xe.id}|${Ce.date}`)||0,total:we,pct:X(le.get(`${xe.id}|${Ce.date}`)||0,we)})),ke=fe.length?Math.round(fe.reduce((Ce,Be)=>Ce+Be.pct,0)/fe.length*10)/10:0;return{c:xe,total:we,daily:fe,average:ke}}),ye=J.map((xe,we)=>{const fe=pe.reduce((Ce,Be)=>Ce+Be.daily[we].checked,0),ke=pe.reduce((Ce,Be)=>Ce+Be.total,0);return{checked:fe,total:ke,pct:X(fe,ke)}}),be=pe.reduce((xe,we)=>xe+we.total,0),ve=ye.length?Math.round(ye.reduce((xe,we)=>xe+we.pct,0)/ye.length*10)/10:0;return`<section class="bg-white border rounded-2xl p-5 space-y-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="font-bold">📷 สรุปเปอร์เซ็นต์การเช็คชื่อเข้าสี</h2><p class="text-xs text-gray-500 mt-1">คำนวณจากผู้ที่เช็คชื่อแล้ว ÷ สมาชิกทั้งหมดของสีนั้น แยกตามวันที่ตั้งไว้ในปฏิทินปฏิบัติงาน</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-attendance-gender="ALL" class="px-3 py-1.5 rounded-lg text-xs font-bold ${E==="ALL"?"bg-indigo-600 text-white":"text-gray-600"}">👥 ทุกสี</button>
            <button type="button" data-attendance-gender="M" class="px-3 py-1.5 rounded-lg text-xs font-bold ${E==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 สีชาย</button>
            <button type="button" data-attendance-gender="W" class="px-3 py-1.5 rounded-lg text-xs font-bold ${E==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 สีหญิง</button>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-3">
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 p-3"><p class="text-xs text-indigo-700">จำนวนสีที่แสดง</p><b class="text-2xl text-indigo-900">${pe.length}</b> <span class="text-xs text-indigo-700">สี</span></div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3"><p class="text-xs text-slate-600">สมาชิกตามสี</p><b class="text-2xl text-slate-900">${be.toLocaleString("th-TH")}</b> <span class="text-xs text-slate-600">คน</span></div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 p-3"><p class="text-xs text-emerald-700">เฉลี่ยรวมทุกวัน</p><b class="text-2xl ${ee(ve)}">${ve}%</b></div>
        </div>
        <div class="overflow-x-auto border rounded-xl">
          <table class="w-full text-sm border-collapse min-w-[760px]">
            <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left sticky left-0 bg-gray-50 z-10">สี</th><th class="p-3 text-center whitespace-nowrap">สมาชิก</th>${J.map(xe=>`<th class="p-3 text-center whitespace-nowrap"><div>${re(xe.date)}</div><div class="text-[10px] font-normal text-gray-400">${re(xe.label||"")}</div></th>`).join("")}<th class="p-3 text-center whitespace-nowrap">เฉลี่ยรายวัน</th></tr></thead>
            <tbody>${pe.map(xe=>`<tr class="border-b"><td class="p-3 font-bold sticky left-0 bg-white z-10" style="color:${re(xe.c.hex_color||"#475569")}">สี${re(xe.c.name)}</td><td class="p-3 text-center text-gray-600">${xe.total}</td>${xe.daily.map(we=>`<td class="p-3 text-center"><b class="${ee(we.pct)}">${we.pct}%</b><div class="text-[10px] text-gray-400 mt-0.5">${we.checked}/${we.total}</div></td>`).join("")}<td class="p-3 text-center font-black ${ee(xe.average)}">${xe.average}%</td></tr>`).join("")}</tbody>
            <tfoot><tr class="bg-gray-50 font-bold"><td class="p-3 sticky left-0 bg-gray-50 z-10">รวมตามวันที่</td><td class="p-3 text-center">${be}</td>${ye.map(xe=>`<td class="p-3 text-center"><span class="${ee(xe.pct)}">${xe.pct}%</span><div class="text-[10px] text-gray-500 mt-0.5">${xe.checked}/${xe.total}</div></td>`).join("")}<td class="p-3 text-center ${ee(ve)}">${ve}%</td></tr></tfoot>
          </table>
        </div>
        <p class="text-[11px] text-gray-400">หมายเหตุ: ตัวหารสมาชิกใช้หลักเดียวกับหน้า “ภาพรวมกีฬาสี” และนับการเช็คชื่อซ้ำของคนเดิมในวันเดียวเป็น 1 คน</p>
      </section>`},ce=[{key:"score",label:"📝 ให้คะแนน",show:!0},{key:"summary",label:"🏅 สรุปคะแนนทุกสี",show:!0},{key:"attendance",label:"📷 เช็คชื่อเข้าสี (%)",show:h},{key:"status",label:"🧑‍⚖️ สถานะผู้ประเมิน",show:l},{key:"settings",label:"⚙️ ตั้งค่า",show:l}].filter(G=>G.show);let oe=B.length?"score":l?"status":"summary";const ne=()=>{var G,J,de,le;e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
        <div><h1 class="text-2xl font-bold">🧑‍⚖️ ประเมินกีฬาสี</h1><p class="text-sm text-gray-500">ให้คะแนน ดูสรุปผล และติดตามสถานะผู้ประเมิน ทุกอย่างในหน้าเดียว</p></div>
        <div class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">${ce.map(X=>`<button type="button" data-eval-main-tab="${X.key}" class="px-4 py-2 rounded-lg text-sm font-bold transition ${oe===X.key?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}">${X.label}</button>`).join("")}</div>
        <div id="eval-tab-body">${oe==="score"?F():oe==="summary"?ae():oe==="attendance"?P():oe==="status"?Qe():O()}</div>
      </div>`,e.querySelectorAll("[data-eval-main-tab]").forEach(X=>X.onclick=()=>{oe=X.dataset.evalMainTab,ne()}),e.querySelectorAll("[data-eval-gender]").forEach(X=>X.onclick=()=>{if(k)return ge("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนกลุ่มสี","warning");c=X.dataset.evalGender,y=null,ne()}),e.querySelectorAll("[data-eval-cattab]").forEach(X=>X.onclick=()=>{if(k)return ge("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนหัวข้อ","warning");g=X.dataset.evalCattab,y=null,ne()}),e.querySelectorAll("[data-color-logo]").forEach(X=>X.onerror=()=>{X.classList.add("hidden");const ee=X.nextElementSibling;ee==null||ee.classList.remove("hidden"),ee==null||ee.classList.add("flex")}),(G=e.querySelector("#eval-session-select"))==null||G.addEventListener("change",X=>{if(k)return X.target.value=$||"",ge("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนรอบ","warning");$=X.target.value,y=null,ne()}),e.querySelectorAll("[data-eval-color]").forEach(X=>X.onclick=()=>{if(k)return ge("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนสลับสี","warning");y=X.dataset.evalColor,ne()}),e.querySelectorAll("[data-score-input]").forEach(X=>X.addEventListener("input",()=>{const ee=X.value.trim();ee!==""&&(Number(ee)<0||Number(ee)>Number(X.max))&&(X.value=Math.max(0,Math.min(Number(X.max),Number(ee)||0))),k=!0})),(J=e.querySelector("#eval-submit"))==null||J.addEventListener("click",async()=>{const X=[];if(e.querySelectorAll("[data-score-input]").forEach(be=>{const ve=String(be.value).trim();if(ve==="")return;const xe=_.get(be.dataset.crit);X.push({event_id:s.id,criteria_id:be.dataset.crit,team_color_id:be.dataset.color,session_id:(xe==null?void 0:xe.session_id)||null,judge_username:o,score:Number(ve),updated_at:new Date().toISOString()})}),!X.length)return ge("กรุณากรอกคะแนนอย่างน้อย 1 ช่อง","error");const ee=(m||[]).find(be=>be.id===$);if((ee==null?void 0:ee.status)==="closed"&&!l)return ge("รอบนี้ปิดรับคะแนนแล้ว","error");const pe=e.querySelector("#eval-submit");pe.disabled=!0,pe.textContent="กำลังบันทึก...";const{error:ye}=await ie.from("sports_score_entries").upsert(X,{onConflict:"criteria_id,team_color_id,judge_username"});if(pe.disabled=!1,pe.textContent="💾 บันทึกคะแนนประเมิน",ye)return ge(ye.message,"error");X.forEach(be=>C.set(`${be.criteria_id}|${be.team_color_id}|${be.session_id||""}`,be.score)),k=!1,ge("บันทึกคะแนนประเมินแล้ว"),ne()}),oe==="summary"&&(e.querySelectorAll("[data-sum-gender]").forEach(X=>X.onclick=()=>{S=X.dataset.sumGender,A=null,ne()}),e.querySelectorAll("[data-toggle-expand]").forEach(X=>X.onclick=()=>{const ee=X.dataset.toggleExpand;A=A===ee?null:ee,ne()}),e.querySelectorAll("[data-summary-sports-day]").forEach(X=>X.onclick=()=>{H=X.dataset.summarySportsDay,ne()})),oe==="attendance"&&e.querySelectorAll("[data-attendance-gender]").forEach(X=>X.onclick=()=>{E=X.dataset.attendanceGender,ne()}),!(oe!=="settings"||!l)&&(R=Cd({wrap:e.querySelector("#eval-teacher-picker-wrap"),items:u.map(X=>({id:X.profile_id,label:X.full_name,sub:X.teacher_code,photo:X.image_url})),placeholder:"พิมพ์ชื่อครู...",emptyLabel:"-- เลือกครูผู้ประเมิน --",photoClass:"w-7 h-9 rounded object-cover flex-shrink-0 border"}),e.querySelectorAll("[data-session-save]").forEach(X=>X.addEventListener("click",async()=>{var be,ve,xe;const ee=X.dataset.sessionSave,pe={name:(be=e.querySelector(`[data-session-name="${ee}"]`))==null?void 0:be.value.trim(),event_date:((ve=e.querySelector(`[data-session-date="${ee}"]`))==null?void 0:ve.value)||null,status:(xe=e.querySelector(`[data-session-status="${ee}"]`))==null?void 0:xe.value,updated_at:new Date().toISOString()};if(!pe.name)return ge("กรุณาระบุชื่อวัน","error");const{error:ye}=await ie.from("sports_evaluation_sessions").update(pe).eq("id",ee);if(ye)return ge(ye.message,"error");ge("บันทึกวันกีฬาสีแล้ว"),dt()})),(de=e.querySelector("#crit-new-add"))==null||de.addEventListener("click",async()=>{const X=e.querySelector("#crit-new-category").value,ee=e.querySelector("#crit-new-session").value||null,pe=e.querySelector("#crit-new-name").value.trim(),ye=Number(e.querySelector("#crit-new-max").value);if(!pe||!ye||ye<=0)return ge("กรอกชื่อหัวข้อและคะแนนเต็มให้ครบ","error");if((X==="color_eval"||X==="sports_day")&&!ee)return ge("กรุณาเลือกรอบ/วันที่ของหัวข้อนี้","error");const be=(r||[]).filter(xe=>xe.category===X).length,{error:ve}=await ie.from("sports_score_criteria").insert({event_id:s.id,category:X,session_id:ee,name:pe,max_score:ye,display_order:be});if(ve)return ge(ve.message,"error");ge("เพิ่มหัวข้อแล้ว"),dt()}),e.querySelectorAll("[data-crit-edit]").forEach(X=>X.addEventListener("click",()=>{const ee=e.querySelector(`[data-crit-row="${X.dataset.critEdit}"]`),pe=_.get(X.dataset.critEdit);ee.innerHTML=`<input data-edit-name value="${re(pe.name)}" class="flex-1 border rounded-lg px-2 py-1.5 text-xs"><input data-edit-max type="number" min="1" value="${Number(pe.max_score)}" class="w-20 border rounded-lg px-2 py-1.5 text-xs"><button type="button" data-edit-save class="px-2 py-1 text-xs bg-emerald-600 text-white rounded-lg">บันทึก</button><button type="button" data-edit-cancel class="px-2 py-1 text-xs border rounded-lg">ยกเลิก</button>`,ee.querySelector("[data-edit-cancel]").onclick=()=>ne(),ee.querySelector("[data-edit-save]").onclick=async()=>{const ye=ee.querySelector("[data-edit-name]").value.trim(),be=Number(ee.querySelector("[data-edit-max]").value);if(!ye||!be||be<=0)return ge("กรอกข้อมูลให้ครบ","error");const{error:ve}=await ie.from("sports_score_criteria").update({name:ye,max_score:be}).eq("id",pe.id);if(ve)return ge(ve.message,"error");ge("แก้ไขแล้ว"),dt()}})),e.querySelectorAll("[data-crit-del]").forEach(X=>X.addEventListener("click",async()=>{if(!confirm("ลบหัวข้อนี้? คะแนนที่เคยให้ไว้ในหัวข้อนี้จะไม่ถูกนับต่อ"))return;const{error:ee}=await ie.from("sports_score_criteria").delete().eq("id",X.dataset.critDel);if(ee)return ge(ee.message,"error");ge("ลบหัวข้อแล้ว"),dt()})),(le=e.querySelector("#eval-add-btn"))==null||le.addEventListener("click",async()=>{const X=R==null?void 0:R.getValue();if(!X)return ge("เลือกครูก่อน","error");const ee=[...e.querySelectorAll("[data-eval-cat]:checked")].map(ve=>ve.dataset.evalCat);if(!ee.length)return ge("เลือกอย่างน้อย 1 หมวด","error");const pe=e.querySelector("#eval-role-label").value.trim()||null,ye=ee.map(ve=>({event_id:s.id,profile_id:X,category:ve,role_label:pe})),{error:be}=await ie.from("sports_score_evaluators").insert(ye);if(be)return be.code==="23505"?ge("มีบางหมวดที่มอบหมายให้ครูคนนี้ไว้แล้ว","error"):ge(be.message,"error");ge("เพิ่มผู้ประเมินแล้ว"),dt()}),e.querySelectorAll("[data-eval-del]").forEach(X=>X.addEventListener("click",async()=>{if(!confirm("ลบสิทธิ์ประเมินรายการนี้?"))return;const{error:ee}=await ie.from("sports_score_evaluators").delete().eq("id",X.dataset.evalDel);if(ee)return ge(ee.message,"error");ge("ลบแล้ว"),dt()})))};ne()}catch(s){console.error(s),e.innerHTML=Ct()}}async function it(e="ชาย"){var t,n,l,o,x;const s=Lt();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:r,cfg:d}=await It(),i=await Zs(ie),{data:a}=await ie.from("profiles").select("role,is_also_admin").eq("id",i.id).maybeSingle();if(!((a==null?void 0:a.role)==="admin"||(a==null?void 0:a.is_also_admin)===!0)){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:w,error:f},{data:v},{data:h}]=await Promise.all([ie.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",r.id).eq("gender",e).order("design_no"),ie.from("sports_shirt_vote_managers").select("*,teachers(full_name,teacher_code)").eq("event_id",r.id),ie.from("teachers").select("id,teacher_code,full_name,dept,profile_id").not("profile_id","is",null).order("full_name")]);if(f)throw f;(w||[]).forEach(_=>{_.sports_shirt_design_colors=(_.sports_shirt_design_colors||[]).sort((C,L)=>C.display_order-L.display_order)});let I=[];const u=_=>_?new Date(_).toISOString().slice(0,16):"",p=(w||[]).map(_=>`
      <div class="border rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between"><b>แบบที่ ${_.design_no}</b>${_.html_url?'<span class="text-[10px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">มี 3 มิติ</span>':""}</div>
        <input data-design-name="${_.id}" value="${re(_.name||"")}" placeholder="ชื่อแบบ" class="w-full border rounded-lg px-2 py-1.5 text-xs">
        <label class="block text-[10px] text-gray-400">ไฟล์ HTML 3 มิติ (ออปชัน ใช้ร่วมทุกสี)</label>
        <input data-design-html="${_.id}" type="file" accept="text/html,.html" class="w-full text-xs">
        <div class="grid grid-cols-2 gap-2 pt-1">
          ${(_.sports_shirt_design_colors||[]).map(C=>`
            <div class="border rounded-xl p-2">
              <div data-color-preview="${C.id}">${C.image_url?`<img src="${re(C.image_url)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`:'<div class="w-full h-20 bg-gray-50 rounded-lg border grid place-items-center text-gray-300 text-xl mb-1">👕</div>'}</div>
              <p class="text-[10px] font-bold text-gray-600 text-center mb-1">สี${re(C.color_name)}</p>
              <input data-color-image="${C.id}" data-color-design="${_.id}" type="file" accept="image/png,image/jpeg,image/webp" class="w-full text-[10px]">
            </div>
          `).join("")}
        </div>
        <button data-design-save="${_.id}" class="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold mt-1">บันทึกแบบที่ ${_.design_no}</button>
      </div>
    `).join(""),j=(v||[]).map(_=>{var C,L;return`<tr class="border-t"><td class="p-3">${re(((C=_.teachers)==null?void 0:C.full_name)||"ไม่พบชื่อ")}${(L=_.teachers)!=null&&L.teacher_code?` (${re(_.teachers.teacher_code)})`:""}</td><td class="p-3 text-right"><button data-vote-manager-remove="${_.id}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button></td></tr>`}).join("")||'<tr><td colspan="2" class="p-6 text-center text-gray-400">ยังไม่มีครูที่ได้รับสิทธิ์เพิ่ม</td></tr>';s.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <h1 class="text-2xl font-bold">🗳️ ตั้งค่าโหวตแบบเสื้อกีฬาสี</h1>
      <div class="bg-white border rounded-2xl p-5">
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">เปิดโหวตตั้งแต่</label><input id="vote-opens-at" type="datetime-local" value="${u(d==null?void 0:d.shirt_vote_opens_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ปิดโหวตเมื่อ</label><input id="vote-closes-at" type="datetime-local" value="${u(d==null?void 0:d.shirt_vote_closes_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-window-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกช่วงเวลาโหวต (ใช้ร่วมกันทั้งชาย-หญิง)</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">🌐 โหมดโหวตสาธารณะ (ไม่ต้องล็อกอิน)</h3>
        <p class="text-xs text-gray-500 mb-3">เปิดหน้าแยกให้นักเรียนกรอกรหัสนักเรียนเข้าโหวตได้โดยไม่ต้องล็อกอิน ปพ.5 — เหมาะกับจุดโหวตหน้างาน (kiosk) เข้าที่ <code>shirt-vote-public.html</code></p>
        <div class="mb-3">${wt("shirt_vote_public_enabled","เปิดโหมดโหวตไม่ล็อกอิน","นักเรียนกรอกรหัสนักเรียนแล้วเข้าโหวตได้ทันที",!!(d!=null&&d.shirt_vote_public_enabled))}</div>
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
        <div class="grid md:grid-cols-2 gap-4">${p}</div>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">👤 มอบสิทธิ์ครูดูแดชบอร์ดผลโหวต</h3>
        <div class="flex gap-2 mb-3"><input id="vote-manager-code-input" class="flex-1 border rounded-xl px-3 py-2 text-sm" placeholder="กรอกรหัสครู เช่น 1087, 1092"><button id="vote-manager-search" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">ค้นหา</button></div>
        <div id="vote-manager-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4"><div id="vote-manager-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div><button id="vote-manager-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันมอบสิทธิ์</button></div>
        <div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ครู</th><th></th></tr></thead><tbody>${j}</tbody></table></div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-gender]").forEach(_=>_.addEventListener("click",()=>it(_.dataset.voteGender))),s.querySelectorAll("[data-color-image]").forEach(_=>_.addEventListener("change",()=>{var q;const C=(q=_.files)==null?void 0:q[0];if(!C)return;const L=s.querySelector(`[data-color-preview="${_.dataset.colorImage}"]`);L&&(L.innerHTML=`<img src="${URL.createObjectURL(C)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`)})),(t=s.querySelector("#vote-window-save"))==null||t.addEventListener("click",async()=>{var q,B;const _=(q=s.querySelector("#vote-opens-at"))==null?void 0:q.value,C=(B=s.querySelector("#vote-closes-at"))==null?void 0:B.value,{error:L}=await ie.from("sports_portal_settings").update({shirt_vote_opens_at:_?new Date(_).toISOString():null,shirt_vote_closes_at:C?new Date(C).toISOString():null,updated_at:new Date().toISOString()}).eq("event_id",r.id);if(L)return ge(L.message,"error");ge("บันทึกช่วงเวลาโหวตแล้ว"),it(e)}),s.querySelectorAll('[data-cfg="shirt_vote_public_enabled"]').forEach(_=>_.addEventListener("click",()=>{const C=_.dataset.enabled!=="true";_.dataset.enabled=C?"true":"false",_.textContent=C?"ปิดใช้งาน":"เปิดใช้งาน"})),(n=s.querySelector("#vote-public-save"))==null||n.addEventListener("click",async()=>{var q,B,b,c;const _=s.querySelector('[data-cfg="shirt_vote_public_enabled"]'),C={shirt_vote_public_enabled:(_==null?void 0:_.dataset.enabled)==="true",shirt_vote_tutorial_url:((B=(q=s.querySelector("#vote-public-tutorial-url"))==null?void 0:q.value)==null?void 0:B.trim())||null,shirt_vote_intro_url:((c=(b=s.querySelector("#vote-public-intro-url"))==null?void 0:b.value)==null?void 0:c.trim())||null,updated_at:new Date().toISOString()},{error:L}=await ie.from("sports_portal_settings").update(C).eq("event_id",r.id);if(L)return ge(L.message,"error");ge("บันทึกโหมดโหวตสาธารณะแล้ว"),it(e)}),s.querySelectorAll("[data-design-save]").forEach(_=>_.addEventListener("click",async()=>{var B,b,c,g,$,y;const C=_.dataset.designSave,L=((b=(B=s.querySelector(`[data-design-name="${C}"]`))==null?void 0:B.value)==null?void 0:b.trim())||null,q=(g=(c=s.querySelector(`[data-design-html="${C}"]`))==null?void 0:c.files)==null?void 0:g[0];_.disabled=!0,_.textContent="กำลังบันทึก...";try{const k={name:L,updated_at:new Date().toISOString()};q&&(k.html_url=await sl(C,q));const{error:S}=await ie.from("sports_shirt_designs").update(k).eq("id",C);if(S)throw S;const A=s.querySelectorAll(`[data-color-design="${C}"]`);for(const H of A){const E=($=H.files)==null?void 0:$[0];if(!E)continue;const T=H.dataset.colorImage,R=await rl(C,T,E),{error:F}=await ie.from("sports_shirt_design_colors").update({image_url:R,updated_at:new Date().toISOString()}).eq("id",T);if(F)throw F}ge("บันทึกแบบเสื้อแล้ว"),it(e)}catch(k){ge(k.message,"error"),_.disabled=!1,_.textContent=`บันทึกแบบที่ ${((y=(w||[]).find(S=>S.id===C))==null?void 0:y.design_no)||""}`}})),(l=s.querySelector("#vote-manager-search"))==null||l.addEventListener("click",()=>{var B;const _=String(((B=s.querySelector("#vote-manager-code-input"))==null?void 0:B.value)||"").split(/[\s,]+/).map(b=>b.trim()).filter(Boolean);if(!_.length)return ge("กรุณากรอกรหัสครู","error");const C=new Set(_.map(String));if(I=(h||[]).filter(b=>C.has(String(b.teacher_code))),!I.length)return ge("ไม่พบรหัสครูที่ตรงกัน","error");const L=s.querySelector("#vote-manager-preview"),q=s.querySelector("#vote-manager-preview-cards");L.classList.remove("hidden"),q.innerHTML=I.map(b=>`<div class="bg-white rounded-xl border border-indigo-100 p-3"><p class="font-bold text-gray-800 text-xs">${re(b.full_name)}</p><p class="text-[10px] text-gray-400">รหัสครู ${re(b.teacher_code)} · กลุ่มสาระ ${re(b.dept||"—")}</p></div>`).join("")}),(o=s.querySelector("#vote-manager-code-input"))==null||o.addEventListener("keydown",_=>{var C;_.key==="Enter"&&(_.preventDefault(),(C=s.querySelector("#vote-manager-search"))==null||C.click())}),(x=s.querySelector("#vote-manager-add"))==null||x.addEventListener("click",async()=>{if(!I.length)return ge("กรุณาค้นหารายชื่อก่อน","error");const _=I.map(L=>({event_id:r.id,teacher_id:L.id,profile_id:L.profile_id,granted_by:null})),{error:C}=await ie.from("sports_shirt_vote_managers").upsert(_,{onConflict:"event_id,teacher_id"});if(C)return ge(C.message,"error");ge(`มอบสิทธิ์แล้ว ${_.length} คน`),it(e)}),s.querySelectorAll("[data-vote-manager-remove]").forEach(_=>_.addEventListener("click",async()=>{const{error:C}=await ie.from("sports_shirt_vote_managers").delete().eq("id",_.dataset.voteManagerRemove);if(C)return ge(C.message,"error");ge("ปิดสิทธิ์แล้ว"),it(e)}))}catch(r){console.error(r),s.innerHTML=Ct()}}async function wr(e="ชาย"){const s=Lt();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:t}=await It(),n=await Zs(ie),{data:l}=await ie.from("profiles").select("role,is_also_admin").eq("id",n.id).maybeSingle(),o=(l==null?void 0:l.role)==="admin"||(l==null?void 0:l.is_also_admin)===!0,{data:x}=await ie.from("sports_shirt_vote_managers").select("id").eq("event_id",t.id).eq("profile_id",n.id).maybeSingle();if(!o&&!x){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:r,error:d},i]=await Promise.all([ie.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",t.id).eq("gender",e).order("design_no"),ua("sports_shirt_votes",p=>p.select("design_id").eq("event_id",t.id))]);if(d)throw d;const a=new Set((r||[]).map(p=>p.id)),m={};(i||[]).forEach(p=>{a.has(p.design_id)&&(m[p.design_id]=(m[p.design_id]||0)+1)});const w=Object.values(m).reduce((p,j)=>p+j,0),f=Math.max(0,...(r||[]).map(p=>m[p.id]||0)),v=[...r||[]].sort((p,j)=>(m[j.id]||0)-(m[p.id]||0)),h=p=>p===0?"🥇":p===1?"🥈":p===2?"🥉":`#${p+1}`,I={},u=v.map((p,j)=>{const _=m[p.id]||0,C=w?Math.round(_/w*100):0,L=(p.sports_shirt_design_colors||[]).filter(b=>b.image_url);I[p.id]=L.length?Math.floor(Math.random()*L.length):0;const q=L[I[p.id]]||null;return`
        <div class="flex items-center gap-4 p-3 rounded-2xl ${_>0&&_===f?"bg-indigo-50/60":""}">
          <span class="w-8 text-center text-sm font-bold text-gray-400 flex-shrink-0">${h(j)}</span>
          <div class="relative flex-shrink-0">
            ${q!=null&&q.image_url?`<img data-shirt-dash-img="${p.id}" src="${re(q.image_url)}" class="w-14 h-14 object-contain bg-gray-50 rounded-xl border">`:'<div class="w-14 h-14 bg-gray-50 rounded-xl border grid place-items-center text-gray-300 text-xl">👕</div>'}
            ${L.length>1?`<button data-shirt-dash-swap="${p.id}" class="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center text-[11px]" title="สลับสี">🔄</button>`:""}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-700 truncate mb-1">${re(p.name||`แบบที่ ${p.design_no}`)}</p>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden"><div class="bg-indigo-500 h-full rounded-full transition-all" style="width:${C}%"></div></div>
              <span class="w-24 text-xs text-right text-gray-500 flex-shrink-0">${_} คน (${C}%)</span>
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
        <div class="divide-y divide-gray-50">${u||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีแบบเสื้อของเพศนี้</p>'}</div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-dash-gender]").forEach(p=>p.addEventListener("click",()=>wr(p.dataset.voteDashGender))),s.querySelectorAll("[data-shirt-dash-swap]").forEach(p=>p.addEventListener("click",()=>{const j=p.dataset.shirtDashSwap,_=(r||[]).find(q=>q.id===j),C=((_==null?void 0:_.sports_shirt_design_colors)||[]).filter(q=>q.image_url);if(!C.length)return;I[j]=((I[j]||0)+1)%C.length;const L=s.querySelector(`[data-shirt-dash-img="${j}"]`);L&&(L.src=C[I[j]].image_url)}))}catch(t){console.error(t),s.innerHTML=Ct()}}const _r="sports_offline_queue",$r=()=>{try{return JSON.parse(localStorage.getItem(_r)||"[]")}catch{return[]}},Td=e=>localStorage.setItem(_r,JSON.stringify(e));let Ia=!1;const jd=new Set;function Bd(){const e=$r();jd.forEach(s=>{try{s(e)}catch(t){console.warn(t)}})}async function qd(e){const s=e.type==="attendance"?"sports_attendance":"sports_team_dues",{error:t}=await ie.from(s).insert(e.payload);if(t&&t.code!=="23505")throw t}async function Ad(){if(Ia)return;let e=$r();if(!e.length)return;Ia=!0;let s=0;for(const t of e)try{await qd(t),s++}catch{break}Ia=!1,s>0&&(e=e.slice(s),Td(e),Bd())}window.addEventListener("online",()=>Ad());const qt=[{key:"sports_total",label:"คะแนนกีฬา (สากล + กรีฑา)",icon:"🏃"},{key:"folk_skill_total",label:"กีฬาพื้นบ้าน / ทักษะ",icon:"🎯"},{key:"parade_total",label:"พาเหรด (สวนสนาม)",icon:"🕌"},{key:"page_total",label:"เพจ Facebook",icon:"📣"},{key:"ibadat_total",label:"คะแนนอีบาดัต",icon:"🕋"},{key:"grand_total",label:"คะแนนรวมทั้งหมด",icon:"🏆"}],Md=(e,s,t,n=5)=>{const l=(e||[]).filter(r=>!t||r.gender===t),o=qt[n]||qt[5],x=[...l].sort((r,d)=>(Number(d[o.key])||0)-(Number(r[o.key])||0));return`<section class="bg-white border rounded-2xl p-5">
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
      <div class="space-y-1.5">${x.map((r,d)=>`<div class="flex items-center gap-2 text-sm rounded-xl bg-white px-3 py-2 ${r.color_name===s?"font-black text-indigo-700 ring-1 ring-indigo-200":""}"><span class="w-7 text-center text-gray-400">#${d+1}</span><span class="flex-1 truncate">สี${re(r.color_name)}</span><b>${Number(r[o.key]||0).toLocaleString("th-TH")}</b></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีคะแนน</p>'}</div>
    </div>
  </section>`};async function Nd(){qs(!0);const{data:{session:e}}=await ie.auth.getSession();if(!e)return window.location.replace("index.html"),null;const{data:s,error:t}=await ie.from("profiles").select("role, is_also_admin").eq("id",e.user.id).maybeSingle();return t||(s==null?void 0:s.role)!=="admin"&&!(s!=null&&s.is_also_admin)?(N("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):e}async function Dd(e){try{const{data:s}=await ie.from("profiles").select("role, user_code").eq("id",e).maybeSingle();let t="ผู้ใช้งาน";if((s==null?void 0:s.role)==="teacher"||(s==null?void 0:s.role)==="admin"){const{data:l}=await ie.from("teachers").select("full_name").eq("profile_id",e).maybeSingle();t=(l==null?void 0:l.full_name)??(s==null?void 0:s.user_code)??"ผู้ใช้งาน"}const n=(s==null?void 0:s.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=t,document.getElementById("user-role").textContent=n,document.getElementById("user-avatar").textContent=t.charAt(0).toUpperCase()}catch{}}async function Hd(e){const s=document.getElementById("header-switch-slot");if(!s)return;s.innerHTML="";const{data:t}=await ie.from("profiles").select("is_also_admin").eq("id",e).maybeSingle();if(!(t!=null&&t.is_also_admin))return;const n=document.createElement("a");n.id="btn-switch-teacher",n.href="teacher.html",n.title="สลับไปหน้าครู",n.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",n.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",s.appendChild(n)}async function Rd(){await ie.auth.signOut(),N("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function Od(e=null){var t,n,l;const s=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(t=window._clearPositionRows)==null||t.call(window),document.getElementById("modal-title").textContent=e?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:o}=await Se(async()=>{const{getDepartments:d}=await import("./api-CQwFwlFA.js");return{getDepartments:d}},__vite__mapDeps([0,1,2,3,4])),x=await o(),r=document.getElementById("modal-position-dept");r.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+x.map(d=>`<option value="${d.id}">${d.dept_name}</option>`).join("")}catch{}if(e)try{const{data:o}=await(await Se(async()=>{const{supabase:r}=await import("./supabase-BV-W2lsh.js").then(d=>d.a);return{supabase:r}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",e).single();document.getElementById("modal-id").value=o.id,document.getElementById("modal-code").value=o.teacher_code??"",document.getElementById("modal-name").value=o.full_name??"",document.getElementById("modal-category").value=o.category??"",document.getElementById("modal-phone").value=o.phone??"",document.getElementById("modal-login-email").value=o.login_email??"",document.getElementById("modal-username").value=o.username??"",document.getElementById("modal-image-url").value=o.image_url??"";const x=(n=o.positions)!=null&&n.length?o.positions:o.position?[o.position]:[];(l=window._setPositionRows)==null||l.call(window,x),x.includes("dept_head")&&(document.getElementById("modal-position-dept").value=o.position_dept_id??""),kr(o.image_url,o.full_name)}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex"),document.getElementById("modal-name").focus()}function Na(){const e=document.getElementById("teacher-modal");e.classList.add("hidden"),e.classList.remove("flex")}async function Pd(e){var d,i,a;e.preventDefault();const s=document.getElementById("modal-save-btn"),t=document.getElementById("modal-id").value,n=document.getElementById("modal-username").value.trim().toLowerCase();if(n&&!/^[a-z0-9._-]{3,32}$/.test(n)){N("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const l=((d=window._getPositionValues)==null?void 0:d.call(window))??[],o=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],x=l.find(m=>!o.includes(m))||null,r={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:n||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:x,positions:l,position_dept_id:l.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!r.full_name){N("กรุณากรอกชื่อ-นามสกุล","warning");return}$t(s,!0);try{const m=(a=(i=document.getElementById("modal-photo-file"))==null?void 0:i.files)==null?void 0:a[0];if(m){const w=t||`new_${Date.now()}`;r.image_url=await nl(w,m)}t?await _n(Number(t),r):await $n(r),N("บันทึกข้อมูลสำเร็จ","success"),Na(),Dt(await Re())}catch(m){N("บันทึกไม่สำเร็จ: "+he(m),"error")}finally{$t(s,!1)}}async function zd(e,s){if(confirm(`ยืนยันการลบ "${s}" ออกจากระบบ?`))try{await fn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),Dt(await Re())}catch{N("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function kr(e,s){const t=document.getElementById("modal-avatar-preview");t&&(e?t.innerHTML=`<img src="${e}" class="w-full h-full object-cover" />`:t.innerHTML=(s??"?").charAt(0).toUpperCase())}async function Fd(e=null){const s=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=e?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(t=>{document.getElementById(t).value=""}),document.getElementById("sub-skill-group").value="",e)try{const n=(await ra()).find(l=>l.id===e);n&&(document.getElementById("sub-id").value=n.id,document.getElementById("sub-code").value=n.subject_code??"",document.getElementById("sub-name").value=n.subject_name??"",document.getElementById("sub-dept").value=n.dept??"",document.getElementById("sub-grade").value=n.grade_level??"",document.getElementById("sub-credit").value=n.credit??"",document.getElementById("sub-learning-area").value=n.learning_area??"",document.getElementById("sub-skill-group").value=n.skill_group??"")}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}s.classList.replace("hidden","flex")}async function Ud(e,s){if(confirm(`ยืนยันลบวิชา "${s}"?`))try{await hn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),Za(await ra())}catch{N("ลบไม่สำเร็จ","error")}}async function Vd(e=null){const s=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(w=>{const f=document.getElementById(w);f&&(f.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const t=document.getElementById("dept-selected-teacher");t.classList.add("hidden"),t.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=e?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let n=[];try{n=await Re()}catch{}const l=document.getElementById("dept-teacher-code-input"),o=document.getElementById("dept-teacher-search"),x=document.getElementById("dept-teacher-dropdown"),r=document.getElementById("dept-selected-teacher"),d=document.getElementById("dept-selected-name"),i=document.getElementById("dept-clear-teacher"),a=w=>{document.getElementById("dept-teacher-code").value=w?w.teacher_code??"":"",w?(l.value=w.teacher_code??"",o.value=w.full_name??"",d.textContent=`${w.full_name}${w.teacher_code?` (${w.teacher_code})`:""}`,r.classList.remove("hidden"),r.classList.add("flex")):(l.value="",o.value="",r.classList.add("hidden"),r.classList.remove("flex")),x.classList.add("hidden")},m=w=>{x.innerHTML=w.length?w.map(f=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${f.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${f.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${f.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',x.querySelectorAll(".teacher-option").forEach(f=>{f.addEventListener("mousedown",v=>{v.preventDefault(),a(n.find(h=>String(h.id)===f.dataset.id))})}),x.classList.remove("hidden")};if(l.oninput=()=>{const w=l.value.trim().toLowerCase();if(!w){a(null);return}const f=n.find(v=>(v.teacher_code??"").toLowerCase()===w);if(f)a(f);else{const v=n.filter(h=>(h.teacher_code??"").toLowerCase().startsWith(w));v.length&&m(v)}},o.onfocus=()=>m(n),o.oninput=()=>{const w=o.value.toLowerCase();m(w?n.filter(f=>f.full_name.toLowerCase().includes(w)||(f.teacher_code??"").toLowerCase().includes(w)):n)},o.onblur=()=>setTimeout(()=>x.classList.add("hidden"),150),i==null||i.addEventListener("click",()=>a(null)),e)try{const f=(await ot()).find(v=>v.id===e);if(f){document.getElementById("dept-id").value=f.id,document.getElementById("dept-code").value=f.dept_code??"",document.getElementById("dept-name").value=f.dept_name??"",document.getElementById("dept-teacher-code").value=f.teacher_code??"",document.getElementById("dept-photo-url").value=f.head_photo_url??"",document.getElementById("dept-sign-url").value=f.head_sign_url??"";const v=document.getElementById("dept-category");if(v&&(v.value=f.category??""),f.teacher_code){const h=n.find(I=>I.teacher_code===f.teacher_code);h&&a(h)}f.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${f.head_photo_url}" class="w-full h-full object-cover" />`),f.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${f.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex")}function Gt(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function Gd(e){var o,x,r,d,i,a,m,w;e.preventDefault();const s=document.getElementById("dept-save-btn"),t=document.getElementById("dept-id").value,n=document.getElementById("dept-code").value.trim().toUpperCase(),l=document.getElementById("dept-name").value.trim();if(!n||!l){N("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}$t(s,!0);try{const f=document.getElementById("dept-teacher-code").value||null,v=f?((r=(x=(o=document.getElementById("dept-selected-name"))==null?void 0:o.textContent)==null?void 0:x.split(" (")[0])==null?void 0:r.trim())??null:null,h={dept_code:n,dept_name:l,head_name:v,teacher_code:f,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((d=document.getElementById("dept-category"))==null?void 0:d.value)||null},I=(a=(i=document.getElementById("dept-photo-file"))==null?void 0:i.files)==null?void 0:a[0];I&&(h.head_photo_url=await ms(n,"photo",I));const u=(w=(m=document.getElementById("dept-sign-file"))==null?void 0:m.files)==null?void 0:w[0];u&&(h.head_sign_url=await ms(n,"sign",u)),t?await kn(Number(t),h):await Sn(h),N("บันทึกสำเร็จ","success"),Gt(),pa(await ot())}catch(f){N("บันทึกไม่สำเร็จ: "+he(f),"error")}finally{$t(s,!1)}}async function Wd(e,s){if(confirm(`ยืนยันลบกลุ่มสาระ "${s}"?`))try{await vn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),pa(await ot())}catch{N("ลบไม่สำเร็จ","error")}}function Yd(e=null){var n,l,o;const s=document.getElementById("period-modal"),t=e?((n=window._periodsCache)==null?void 0:n[e])??null:null;document.getElementById("period-id").value=e??"",document.getElementById("period-no").value=(t==null?void 0:t.period_no)??"",document.getElementById("period-start").value=((l=t==null?void 0:t.start_time)==null?void 0:l.slice(0,5))??"",document.getElementById("period-end").value=((o=t==null?void 0:t.end_time)==null?void 0:o.slice(0,5))??"",document.getElementById("period-modal-title").textContent=e?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",s.classList.remove("hidden"),s.classList.add("flex")}function Wt(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function Kd(e){e.preventDefault();const s=document.getElementById("period-save-btn"),t=document.getElementById("period-id").value,n={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!n.period_no||!n.start_time||!n.end_time){N("กรุณากรอกข้อมูลให้ครบ","warning");return}t&&(n.id=Number(t)),$t(s,!0);try{await En(n),N("บันทึกสำเร็จ","success"),Wt(),ma()}catch(l){N("บันทึกไม่สำเร็จ: "+he(l),"error")}finally{$t(s,!1)}}async function Jd(e){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await wn(Number(e)),N("ลบแล้ว","success"),ma()}catch{N("ลบไม่สำเร็จ","error")}}async function Da(){try{const s=(await Xe()).filter(n=>n.status==="pending").length,t=document.getElementById("badge-payments");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Ha(){try{const s=(await Ns()).filter(n=>!n.is_read).length,t=document.getElementById("badge-feedback");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Ra(){try{const e=await Ms(),s=document.getElementById("badge-subject-group");if(!s)return;e.length>0?(s.textContent=e.length>9?"9+":e.length,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}window._refreshSubjectGroupBadge=Ra;window._refreshFeedbackBadge=Ha;window._refreshPaymentBadge=Da;window._goBack=()=>St();window.openTeacherModal=Od;window.handleDeleteTeacher=zd;window.openSubjectModal=Fd;window.handleDeleteSubject=Ud;window.openDeptModal=Vd;window.handleDeleteDept=Wd;window.openPeriodModal=Yd;window.handleDeletePeriod=Jd;window._adminViewSchedule=async(e,s)=>{var i;(i=document.getElementById("admin-sched-overlay"))==null||i.remove();const{getSystemConfig:t}=await Se(async()=>{const{getSystemConfig:a}=await import("./api-CQwFwlFA.js");return{getSystemConfig:a}},__vite__mapDeps([0,1,2,3,4])),n=await t().catch(()=>({})),l=parseInt(n.academicYear??2568),o=parseInt(n.semester??1),x=document.createElement("div");x.id="admin-sched-overlay",x.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",x.innerHTML=`
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
    </div>`,document.body.appendChild(x),x.querySelector("#aso-close").addEventListener("click",()=>x.remove());const r=x.querySelector("#aso-content"),d=document.getElementById("main-content");d&&(d.id="main-content-bak"),r.id="main-content";try{await Zo({id:e,full_name:s},l,o,n)}finally{r.id="aso-content",d&&(d.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var a,m,w,f,v,h,I,u,p,j,_,C,L,q,B,b,c;yl();const e=await Nd();if(!e)return;await Qs("admin");const s=document.getElementById("app-version");s&&(s.textContent=`v${xn}`,s.classList.add("cursor-pointer","hover:underline"),s.addEventListener("click",()=>ts(e.user.id,!0,!0))),(a=e==null?void 0:e.user)!=null&&a.id&&ts(e.user.id,!1,!0),gn(),(m=document.getElementById("btn-logout"))==null||m.addEventListener("click",Rd);const t=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],n=()=>'<option value="">— ไม่มี —</option>'+t.map(g=>`<optgroup label="${g.label}">${g.options.map($=>`<option value="${$.value}">${$.label}</option>`).join("")}</optgroup>`).join("");function l(){const g=[...document.querySelectorAll(".pos-row-sel")].map($=>$.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!g.includes("dept_head"))}function o(){const g=[...document.querySelectorAll(".pos-row-sel")],$=g.map(y=>y.value).filter(Boolean);g.forEach(y=>{[...y.options].forEach(k=>{k.value&&(k.disabled=$.includes(k.value)&&y.value!==k.value)})})}function x(g=""){const $=document.getElementById("modal-positions-list"),y=document.createElement("div");y.className="pos-row flex items-center gap-2",y.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${n()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,y.querySelector(".pos-row-sel").value=g,y.querySelector(".pos-row-sel").addEventListener("change",()=>{l(),o()}),y.querySelector(".pos-row-del").addEventListener("click",()=>{y.remove(),l(),o()}),$.appendChild(y),l(),o()}window._addPositionRow=x,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",x(),l()},window._setPositionRows=g=>{document.getElementById("modal-positions-list").innerHTML="",(g!=null&&g.length?g:[""]).forEach(y=>x(y)),l()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(g=>g.value).filter(Boolean),(w=document.getElementById("btn-add-position"))==null||w.addEventListener("click",()=>x()),x(),(f=document.getElementById("modal-close"))==null||f.addEventListener("click",Na),(v=document.getElementById("modal-backdrop"))==null||v.addEventListener("click",Na),(h=document.getElementById("teacher-form"))==null||h.addEventListener("submit",Pd),(I=document.getElementById("modal-photo-file"))==null||I.addEventListener("change",g=>{const $=g.target.files[0];$&&kr(URL.createObjectURL($),"")}),(u=document.getElementById("dept-modal-close"))==null||u.addEventListener("click",Gt),(p=document.getElementById("dept-modal-backdrop"))==null||p.addEventListener("click",Gt),(j=document.getElementById("dept-modal-cancel"))==null||j.addEventListener("click",Gt),(_=document.getElementById("dept-form"))==null||_.addEventListener("submit",Gd),(C=document.getElementById("dept-photo-file"))==null||C.addEventListener("change",g=>{const $=g.target.files[0];$&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL($)}" class="w-full h-full object-cover" />`)}),(L=document.getElementById("dept-sign-file"))==null||L.addEventListener("change",g=>{const $=g.target.files[0];$&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL($)}" class="w-full h-full object-contain" />`)}),(q=document.getElementById("period-modal-close"))==null||q.addEventListener("click",Wt),(B=document.getElementById("period-modal-backdrop"))==null||B.addEventListener("click",Wt),(b=document.getElementById("period-modal-cancel"))==null||b.addEventListener("click",Wt),(c=document.getElementById("period-form"))==null||c.addEventListener("submit",Kd),await Dd(e.user.id),Hd(e.user.id);const r={overview:Oa,"exec-overview":bd,teachers:Cr,classes:Ja,students:Ir,departments:Tr,subjects:St,"subject-admin":()=>Se(async()=>{const{renderAdminSubjectManagement:g}=await import("./admin-subject-management-BjPfXwa4.js");return{renderAdminSubjectManagement:g}},__vite__mapDeps([5,0,1,2,3,4,6,7])).then(({renderAdminSubjectManagement:g})=>g()),curriculum:_t,periods:ma,"schedule-admin":()=>Se(async()=>{const{renderAdminScheduleManagement:g}=await import("./admin-schedule-management-CZaewYhG.js");return{renderAdminScheduleManagement:g}},__vite__mapDeps([8,6,0,1,2,3,4,9,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(({renderAdminScheduleManagement:g})=>g()),"schedule-admin-import":()=>Se(async()=>{const{renderAdminScheduleImport:g}=await import("./admin-schedule-import-d9kR6dag.js");return{renderAdminScheduleImport:g}},__vite__mapDeps([23,0,1,2,3,4,6,7])).then(({renderAdminScheduleImport:g})=>g({onBack:()=>r["schedule-admin"]()})),homeroom:jr,"score-col-config":Br,"registered-teachers":ta,holidays:qr,payments:Mr,"life-skill-admin":Nr,"reading-admin":Dr,"prayer-admin":Hr,settings:Qa,import:Ar,"admin-profile":Rr,"usage-stats":Or,"classrooms-admin":Pr,"course-doc-lang":()=>Xo(null,!0),announcements:()=>Yr(),"autoscale-history":()=>Kr(),"autoscale-settings":()=>Aa(),"work-calendar":()=>nn(null),"role-permissions":()=>Jr(),"religion-groups":on,"tutorial-admin":()=>Se(async()=>{const{renderTutorialAdmin:g}=await import("./tutorial-OYg6u0Vk.js");return{renderTutorialAdmin:g}},__vite__mapDeps([24,0,1,2,3,4,16,6])).then(({renderTutorialAdmin:g})=>g()),"house-colors":()=>Qr(),"sports-admin":()=>fl({admin:!0}),azfutsal:()=>Vo(),regrade:()=>wd(),"sports-shirt-summary":()=>We(),"sports-fund-admin":()=>Id(),"sports-overview-admin":()=>vr(),"sports-evaluation":()=>dt(),"shirt-vote-settings":()=>it(),"shirt-vote-dashboard":()=>wr(),donations:()=>Xr(),"feedback-admin":()=>en(),"subject-group-requests":()=>cn(),"donor-chat-admin":()=>Se(()=>import("./teacher-views-donor-chat-Cw2WJ23l.js"),__vite__mapDeps([25,6,0,1,2,3,4,16,17,26])).then(g=>g.renderDonorChatAdmin()),"student-qr-print":()=>Se(()=>import("./teacher-views-classes-D9DmK5kb.js").then(g=>g.t),__vite__mapDeps([9,6,0,1,2,3,4,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(g=>g.renderStudentQRPrint(null,null)),"classroom-leaders":()=>un(),"council-rep-nominations":()=>Zr(),certificates:()=>Se(()=>import("./teacher-views-certificates--YM_FRrm.js"),__vite__mapDeps([27,6,28,1,15,29,17,16])).then(async g=>{const{getMyTeacherProfile:$}=await Se(async()=>{const{getMyTeacherProfile:k}=await import("./api-CQwFwlFA.js");return{getMyTeacherProfile:k}},__vite__mapDeps([0,1,2,3,4])),y=await $(e.user.id).catch(()=>null);return g.renderCertificateManager(y)})};document.querySelectorAll("[data-nav]").forEach(g=>{g.addEventListener("click",$=>{var k,S;$.preventDefault();const y=g.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}r[y]&&r[y](),(k=document.getElementById("sidebar"))==null||k.classList.add("-translate-x-full"),(S=document.getElementById("sidebar-overlay"))==null||S.classList.add("hidden")})}),Da(),setInterval(Da,6e4),Ha(),setInterval(Ha,6e4),Ra(),setInterval(Ra,6e4),qs(!1),window._adminNav=g=>{r[g]&&r[g]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>r["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>r["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>r["shirt-vote-dashboard"]());const d=new URLSearchParams(location.search),i=d.get("view");i&&r[i]?(window._pendingQRTab=d.get("tab")||null,r[i]()):await Oa()});const He=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]);function Qd(e){return new Promise(s=>{const t=document.activeElement,n=document.createElement("div");n.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3";const l={full_name:"ชื่อ",main_room:"ห้องสามัญ",religion_room:"ห้องศาสนา",gender:"เพศ",image_url:"รูปภาพ",is_active:"สถานะ",house_color:"สี",sports_shirt_size:"ไซซ์เสื้อ"},o=(d,i,a)=>`<details class="rounded-xl border p-3"><summary class="font-semibold cursor-pointer">${d}: ${He(i)} คน</summary><ul class="mt-2 text-sm space-y-1">${(a||[]).map(m=>{var w;return`<li>${He(m.student_code)} — ${He(m.full_name)}${(w=m.changes)!=null&&w.length?`<span class="block text-xs text-gray-500">${m.changes.map(f=>`${He(l[f.field]||f.field)}: ${He(f.before)} → ${He(f.after)}`).join("<br>")}</span>`:""}</li>`}).join("")||"<li>ไม่มีรายการ</li>"}</ul>${i>30?'<p class="text-xs text-gray-500 mt-2">แสดงตัวอย่าง 30 คนแรก</p>':""}</details>`;n.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="student-sync-preview-title" class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto p-5 space-y-3">
      <h2 id="student-sync-preview-title" class="font-bold text-xl">ตรวจสอบก่อนอัปเดตนักเรียน</h2>
      <p class="text-sm break-all">ภาคเรียน ${He(e.semester)}/${He(e.academicYear)} · แหล่งข้อมูล: ${He(e.sheetId)} / ${He(e.tabName)}</p>
      <p class="text-sm">อ่าน ${He(e.read)} แถว · ใช้ได้ ${He(e.valid)} คน · ข้าม ${He(e.skipped)} แถว · เปิดสถานะกลับมาเรียน ${He(e.reactivatedCount)} คน</p>
      ${o("นักเรียนใหม่",e.newCount,e.newStudents)}
      ${o("นักเรียนเดิมที่ข้อมูลเปลี่ยน",e.changedCount,e.changedStudents)}
      ${o("นักเรียนที่ยังใช้งานอยู่แต่ไม่พบในแหล่งข้อมูล",e.missingCount,e.missingStudents)}
      ${e.duplicateCount?`<p role="alert" class="text-red-700">พบรหัสซ้ำ ${He(e.duplicateCount)} แถว ต้องแก้ต้นทางก่อน: ${He((e.duplicateCodes||[]).join(", "))}</p>`:""}
      <p class="text-sm text-emerald-800 bg-emerald-50 rounded-xl p-3">จับคู่ด้วยรหัสนักเรียนเดิม รักษาคะแนนและประวัติเดิม คนที่ไม่พบในแหล่งข้อมูลจะคงสถานะไว้ให้ตรวจสอบ ระบบจะไม่ปิดสถานะอัตโนมัติ</p>
      <div class="flex justify-end gap-2"><button type="button" data-cancel class="border rounded-xl px-4 py-2">ยกเลิก</button><button type="button" data-confirm ${e.canSync?"":"disabled"} class="bg-emerald-700 text-white disabled:opacity-40 rounded-xl px-4 py-2">ยืนยันอัปเดต ${He(e.valid)} คน</button></div>
    </section>`;const x=d=>{document.removeEventListener("keydown",r),n.remove(),t==null||t.focus(),s(d)},r=d=>{if(d.key==="Escape"&&x(!1),d.key==="Tab"){const i=[...n.querySelectorAll("button:not(:disabled), summary")],a=i[0],m=i.at(-1);d.shiftKey&&document.activeElement===a?(d.preventDefault(),m.focus()):!d.shiftKey&&document.activeElement===m&&(d.preventDefault(),a.focus())}};n.addEventListener("click",d=>{d.target===n||d.target.closest("[data-cancel]")?x(!1):d.target.closest("[data-confirm]")&&e.canSync&&x(!0)}),document.addEventListener("keydown",r),document.body.appendChild(n),n.querySelector("[data-cancel]").focus()})}function at(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(0,s).trim():e.trim()}function pt(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(s+1).trim():""}function Oe(e){return[...new Set(e.filter(Boolean))].sort()}const je="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",Ve="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",Ge=e=>String(e??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),te=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Zd({year:e,semester:s,start:t,end:n,preview:l}){return new Promise(o=>{var i;const x=document.createElement("div");x.id="semester-rollover-confirm-modal",x.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",x.innerHTML=`
      <section role="dialog" aria-modal="true" aria-labelledby="semester-rollover-title"
        class="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <header class="shrink-0 border-b border-amber-100 bg-amber-50 px-5 py-4 sm:px-7">
          <p class="text-xs font-bold uppercase tracking-wide text-amber-700">ตรวจสอบก่อนดำเนินการ</p>
          <h2 id="semester-rollover-title" class="mt-1 text-lg font-extrabold text-slate-900">ยืนยันขึ้นภาคเรียนที่ ${s}/${e}</h2>
          <p class="mt-1 text-sm text-slate-600">อ่านรายการและผลที่จะเกิดขึ้นทั้งหมดก่อนยืนยัน</p>
        </header>
        <div class="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-5 py-4 sm:px-7">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 p-3"><p class="text-xs font-semibold text-slate-500">วันเปิดภาคเรียนใหม่</p><p class="mt-1 font-bold text-slate-800">${te(t)}</p></div>
            <div class="rounded-xl border border-slate-200 p-3"><p class="text-xs font-semibold text-slate-500">วันปิดภาคเรียนใหม่</p><p class="mt-1 font-bold text-slate-800">${te(n)}</p></div>
          </div>
          <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">✓ ไฟล์สำรองภาคเรียนปัจจุบันผ่านการตรวจสอบแล้ว</div>
          <section>
            <h3 class="mb-2 text-sm font-bold text-slate-800">สรุปข้อมูลที่จะจัดการ</h3>
            <dl class="divide-y divide-slate-100 rounded-xl border border-slate-200 px-3">
              ${[["คอร์สเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.courses_to_archive,"คอร์ส"],["ห้องเรียนเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.classes_to_archive,"ห้อง"],["ผู้สนับสนุนที่มีสิทธิ์ส่วนลดเทอมใหม่",l==null?void 0:l.eligible_supporters,"คน"],["ข้อมูลเข้าเรียนที่จะล้างหลังสำรอง",l==null?void 0:l.attendances_to_clear,"รายการ"],["ข้อมูลละหมาดที่จะล้างหลังสำรอง",l==null?void 0:l.prayer_records_to_clear,"รายการ"]].map(([a,m,w])=>`<div class="flex items-start justify-between gap-4 py-2.5 text-sm"><dt class="text-slate-600">${a}</dt><dd class="shrink-0 font-bold tabular-nums text-slate-900">${Number(m??0).toLocaleString()} ${w}</dd></div>`).join("")}
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
  </section>`,document.body.appendChild(e),{update(s,t){e.querySelector("[data-progress-label]").textContent=s,e.querySelector("[data-progress-count]").textContent=`${Math.max(0,Math.min(100,Math.floor(t)))}%`,e.querySelector("[data-progress-bar]").style.width=`${Math.max(0,Math.min(100,t))}%`},close(){e.remove()}}}function kt(e){return String(e??"").normalize("NFKC").toLowerCase().replace(/^(ว่าที่ร้อยตรี|ว่าที่ร้อยโท|ว่าที่ร้อยเอก|นางสาว|น.ส.|นาย|นาง|ดร\.?|คุณ)\s*/u,"").replace(/[\s._,()\[\]{}\-–—:;"'`]/g,"")}function ei(e,s){const t=[...kt(e)],n=[...kt(s)],l=Array.from({length:n.length+1},(o,x)=>x);for(let o=1;o<=t.length;o++){const x=[o];for(let r=1;r<=n.length;r++)x[r]=Math.min(x[r-1]+1,l[r]+1,l[r-1]+(t[o-1]===n[r-1]?0:1));for(let r=0;r<=n.length;r++)l[r]=x[r]}return l[n.length]}function ti(e,s){const t=kt(e),n=kt(s);return!t||!n?0:t===n?1:1-ei(t,n)/Math.max(t.length,n.length)}function Le(e){document.querySelectorAll("[data-nav]").forEach(s=>{s.classList.toggle("bg-indigo-800",s.dataset.nav===e),s.classList.toggle("text-white",s.dataset.nav===e),s.classList.toggle("text-indigo-200",s.dataset.nav!==e)})}function $e(e){document.getElementById("main-content").innerHTML=e}async function Oa(){var x;Le("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ";const[e,s]=await Promise.all([Me().catch(()=>({})),oa().catch(()=>[])]),t=Fs(s,e),n=Ye(Ba(e));let l=n;try{const r=localStorage.getItem("pp5_admin_overview_term");t.some(d=>Ye(d)===r)&&(l=r)}catch{}const o=t.find(r=>Ye(r)===l)??Ba(e);$e(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[r,d,i]=await Promise.all([os(o.academic_year,o.semester),Xe().catch(()=>[]),Re().catch(()=>[])]);(x=document.getElementById("admin-overview-term-switcher"))==null||x.addEventListener("change",async _=>{l=_.target.value;try{localStorage.setItem("pp5_admin_overview_term",l)}catch{}const C=t.find(q=>Ye(q)===l);if(!C)return;const L=_.target;L.disabled=!0;try{const q=await os(C.academic_year,C.semester);Object.entries(q).forEach(([B,b])=>{const c=document.getElementById(`stat-${B}`);c&&(c.textContent=Number(b??0).toLocaleString())})}catch{N("โหลดสถิติของภาคเรียนที่เลือกไม่สำเร็จ","error")}finally{L.disabled=!1}}),Object.entries(r).forEach(([_,C])=>{const L=document.getElementById(`stat-${_}`);L&&(L.textContent=C.toLocaleString())});const a=i.filter(_=>_.profile_id).length,m=i.length-a,w=document.getElementById("stat-registered"),f=document.getElementById("stat-unregistered");w&&(w.textContent=a),f&&(f.textContent=m);const v=d.filter(_=>_.status==="pending"),h=document.getElementById("pending-payments-list");h&&(v.length?h.innerHTML=v.slice(0,3).map(_=>{var C;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((C=_.teachers)==null?void 0:C.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${_.package_type==="semester"?`เหมาทั้งเทอม ${_.amount??299} บ.`:`รายห้อง ${parseInt(_.room_count??1)||1} ห้อง ${_.amount??49} บ.`} · ${new Date(_.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(v.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${v.length-3} รายการ</p>`:""):h.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const I=document.getElementById("training-todo-shell");if(I)try{const{getAllAnnouncements:_,getAnnouncementRsvps:C}=await Se(async()=>{const{getAllAnnouncements:b,getAnnouncementRsvps:c}=await import("./api-CQwFwlFA.js");return{getAllAnnouncements:b,getAnnouncementRsvps:c}},__vite__mapDeps([0,1,2,3,4])),L=await _(),q=new Date().toISOString().slice(0,10),B=L.filter(b=>b.ann_type==="training"&&b.is_active&&b.event_date>=q).sort((b,c)=>b.event_date.localeCompare(c.event_date));if(B.length){const b=await Promise.all(B.map($=>C($.id).catch(()=>[]))),c=$=>new Date($+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),g=$=>String($??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");I.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${B.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${B.map(($,y)=>{var T;const k=b[y]??[],S=k.filter(R=>R.response==="yes").length,A=k.filter(R=>R.response==="maybe").length,H=k.filter(R=>R.response==="no").length,E=k.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${g($.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${c($.event_date)}
                        ${(T=$.event_periods)!=null&&T.length?` · 🕐 คาบ ${$.event_periods.sort((R,F)=>R-F).join(",")}`:""}
                        ${$.event_location?` · 📍 ${g($.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${E?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${S}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${A}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${H}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const u=document.getElementById("leave-monitor-shell");u&&await Fo(u,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const p=await Me().catch(()=>({})),j=document.getElementById("monitor-shell");j&&oi(j,p)}catch{N("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function Wa(e,s,t){const n={};for(const l of e)l.main_room&&(n[l.main_room]=[]);for(const l of s){const o=l[t];o&&(n[o]||(n[o]=[]),n[o].push({id:l.id,full_name:l.full_name??"",student_code:l.student_code??""}))}return n}async function ai(e,s,t){const{records:n,students:l,homerooms:o}=await qo(e,s),x=Wa(o,l,"religion_room"),r={},d={},i=new Set;for(const u of n){const p=u.main_room,j=u.week_number;!p||!j||(i.add(j),r[p]||(r[p]={}),r[p][j]||(r[p][j]=new Set),r[p][j].add(u.student_id),u.status==="absent"&&(d[p]||(d[p]={}),d[p][j]||(d[p][j]=new Set),d[p][j].add(u.student_id)))}const a=t?ni(t):Math.max(...i,0),m=a>0?Array.from({length:a},(u,p)=>p+1):[...i].sort((u,p)=>u-p),w=Object.keys(x),f=w.filter(u=>{var _,C;const p=x[u].length,j=((C=(_=r[u])==null?void 0:_[a-1])==null?void 0:C.size)??0;return p>0&&j<p}),v=w.filter(u=>{var j;const p=(j=d[u])==null?void 0:j[a-2];return p!=null&&p.size?[...p].some(_=>!n.filter(L=>L.main_room===u&&L.week_number===a-1&&L.student_id===_).some(L=>L.status==="followed"||L.status==="avoid")):!1}),h=w.length,I=w.filter(u=>{var j,_;const p=x[u].length;return p?(((_=(j=r[u])==null?void 0:j[a-1])==null?void 0:_.size)??0)>=p:!1}).length;return{total:h,done:I,recordPending:f.length,followPending:v.length,week:a,_raw:{records:n,students:l,roomStudents:x,weekRoomRec:r,weekRoomAbsent:d,weeks:m,W:a,homerooms:o}}}async function si(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await Ao(e,s),x=Wa(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(x),i=d.filter(a=>x[a].length>0&&x[a].every(m=>r.has(m.id??m))).length;return{total:d.length,done:i,pending:d.length-i,_raw:{columns:t,scores:n,students:l,roomStudents:x,scored:r,homerooms:o}}}async function ri(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await Mo(e,s),x=Wa(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(x),i=d.filter(a=>x[a].length>0&&x[a].every(m=>r.has(m.id??m))).length;return{total:d.length,done:i,pending:d.length-i,_raw:{columns:t,scores:n,students:l,roomStudents:x,scored:r,homerooms:o}}}function ni(e){if(!e)return 0;const s=new Date(e);if(isNaN(s))return 0;const t=Date.now()-s.getTime();return t<0?0:Math.floor(t/(7*24*60*60*1e3))+1}async function oi(e,s){const t=parseInt(s.academicYear??2568),n=parseInt(s.semester??1);e.innerHTML=`
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
    </div>`;const[l,o,x,r]=await Promise.allSettled([ai(t,n,s.semester_start),si(t,n),ri(t,n),Re().catch(()=>[])]),d=r.status==="fulfilled"?r.value:[],i=(a,m)=>{const w=document.getElementById(`card-${a}`);if(!w)return;if(m.status==="rejected"){w.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const f=m.value;if(a==="prayer"){const v=f.total>0?Math.round(f.done/f.total*100):0,h=f.recordPending+f.followPending;w.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${f.done}/${f.total} ห้อง (สัปดาห์ที่ ${f.week-1})</p>
        ${h>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${f.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${f.recordPending} ห้อง</span>`:""}
          ${f.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${f.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const v=f.total>0?Math.round(f.done/f.total*100):0;w.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${f.done}/${f.total} ห้อง</p>
        ${f.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${f.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};i("prayer",l),i("lifeskill",o),i("reading",x),e.querySelectorAll(".monitor-card").forEach(a=>{a.addEventListener("click",()=>{var f,v,h;const m=a.dataset.type,w=m==="prayer"?(f=l.value)==null?void 0:f._raw:m==="lifeskill"?(v=o.value)==null?void 0:v._raw:(h=x.value)==null?void 0:h._raw;li(m,w,s,t,n,d)})})}function li(e,s,t,n,l,o=[]){var m;(m=document.getElementById("monitor-modal"))==null||m.remove();const x={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},r=document.createElement("div");r.id="monitor-modal",r.className="fixed inset-0 z-[90] flex flex-col bg-white",r.innerHTML=`
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
    </div>`}function di(e,s,t={}){var $;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:n,roomStudents:l,weekRoomRec:o,weekRoomAbsent:x,weeks:r,W:d,homerooms:i}=s,a=Object.keys(l).sort((y,k)=>y.localeCompare(k,void 0,{numeric:!0})),m={},w={};for(const y of i??[])y.main_room&&(m[y.main_room]=(($=y.teachers)==null?void 0:$.full_name)??"",w[y.main_room]=y);const f="border border-gray-100 text-center text-[10px] px-2 py-2",v="px-4 py-2 text-sm font-medium border-b-2 transition",h=`${v} border-indigo-600 text-indigo-700 bg-indigo-50`,I=`${v} border-transparent text-gray-500 hover:text-gray-700`,u=(y,k="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${Ya(y,m,w,t)}${k}
  </td>`,p=y=>{const k=y??(d>0?d-1:d),S=r.map(H=>`<option value="${H}" ${H===k?"selected":""}>${H===d?`สัปดาห์ที่ ${H} (ปัจจุบัน)`:H===d-1?`สัปดาห์ที่ ${H} (ควรกรอก)`:`สัปดาห์ที่ ${H}`}</option>`).join(""),A=a.map(H=>{var W,Y;const T=(l[H]??[]).length,R=((Y=(W=o[H])==null?void 0:W[k])==null?void 0:Y.size)??0,F=T>0?Math.round(R/T*100):0,M=T===0?"bg-gray-50 text-gray-300":R===0?"bg-red-50 text-red-400":F>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",U=F>=100?"bg-emerald-500":F>=50?"bg-amber-400":"bg-red-400",O=T>0&&R<T?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${u(H,O)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${T}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${M}">
          <div class="font-bold">${T>0?F+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${T>0?R+"/"+T:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${T>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${U} h-2 rounded-full" style="width:${F}%"></div></div>
            <span class="text-[10px] font-bold ${F>=100?"text-emerald-600":F>=50?"text-amber-600":"text-red-500"}">${F}%</span>
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
          <th class="${f} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${f} bg-gray-100">นักเรียน</th>
          <th class="${f} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${f} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${A}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},j=y=>{var R;const k=y??(d>1?d-2:r[0]??1),S=k+1,A=r.map(F=>`<option value="${F}" ${F===k?"selected":""}>${F===d-2?`สัปดาห์ที่ ${F} (ควรติดตาม)`:F===d-1?`สัปดาห์ที่ ${F} (ล่าสุด)`:`สัปดาห์ที่ ${F}`}</option>`).join(""),H=(F,M)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${M}</span>`})[F]??"",E=[];for(const F of a){const M=l[F]??[],U=Object.fromEntries(M.map(O=>[O.id??O,O])),z=[...((R=x[F])==null?void 0:R[k])??[]];for(const O of z){const W=U[O],V=n.filter(K=>K.main_room===F&&K.week_number===S&&K.student_id===O).some(K=>K.status==="followed"||K.status==="avoid")?"followed":S>d?"pending":"overdue";E.push({room:F,stu:W,status:V})}}const T=E.length?E.map(({room:F,stu:M,status:U})=>{const z=m[F];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${z?`<p class="font-semibold text-gray-800 text-xs">${z}</p><p class="text-[10px] text-gray-400">${F}</p>`:`<p class="font-semibold text-gray-800 text-xs">${F}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(M==null?void 0:M.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(M==null?void 0:M.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${H(U,S)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${k}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${A}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${S} · พบ ${E.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${f} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${f} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${f} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${T}</tbody>
      </table>
    </div>`},_=d>0?d-1:0,C=a.filter(y=>{var k;return((k=l[y])==null?void 0:k.length)>0}).length,L=a.reduce((y,k)=>{var S;return y+(((S=l[k])==null?void 0:S.length)??0)},0),q=(y,k,S=72)=>{const T=2*Math.PI*26,R=T*y/100;return`<svg width="${S}" height="${S}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${k}" stroke-width="8"
        stroke-dasharray="${R} ${T}" stroke-dashoffset="${T/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${k}">${y}%</text>
    </svg>`},B=y=>{const k=e.querySelector("#prayer-dashboard");if(!k)return;if(r.length===0){k.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!y)return;const S=a.filter(M=>{var z,O;const U=l[M].length;return U>0&&(((O=(z=o[M])==null?void 0:z[y])==null?void 0:O.size)??0)<U}),A=a.filter(M=>{var O,W;const U=l[M].length,z=((W=(O=o[M])==null?void 0:O[y])==null?void 0:W.size)??0;return U>0&&z>=U}),H=a.filter(M=>{var z;const U=(z=x[M])==null?void 0:z[y-1];return U!=null&&U.size?[...U].some(O=>!n.filter(Y=>Y.main_room===M&&Y.week_number===y&&Y.student_id===O).some(Y=>Y.status==="followed"||Y.status==="avoid")):!1}),E=A.length,T=S.length,R=a.reduce((M,U)=>{var z,O;return M+(((O=(z=o[U])==null?void 0:z[y])==null?void 0:O.size)??0)},0),F=C>0?Math.round(E/C*100):0;k.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${C}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">ห้องทั้งหมด</p>
      </div>
      <div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-emerald-600">${E}</p>
        <p class="text-[11px] text-emerald-500 mt-0.5">บันทึกครบแล้ว</p>
      </div>
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-amber-600">${T}</p>
        <p class="text-[11px] text-amber-500 mt-0.5">ยังค้างอยู่</p>
      </div>
      <div class="bg-indigo-50 rounded-2xl border border-indigo-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-indigo-600">${R}</p>
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${L}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${q(F,F>=100?"#10b981":F>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${y}</p>
          <p class="text-xs text-gray-400 mt-0.5">${E} / ${C} ห้อง บันทึกครบ</p>
          ${H.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${H.length} ห้อง</p>`:""}
          ${F>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${T>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${T})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${S.map(M=>{var Y,D;const U=l[M].length,z=((D=(Y=o[M])==null?void 0:Y[y])==null?void 0:D.size)??0,O=Math.round(z/U*100),W=m[M];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${M}</span>
                ${W?`<span class="text-amber-600 truncate block">${W}</span>`:""}
              </div>
              <span class="flex-shrink-0 font-bold ${O===0?"text-red-500":"text-amber-600"}">${z}/${U}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${O===0?"bg-red-400":"bg-amber-400"}" style="width:${O}%"></div>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:`<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${y}</p></div>
      </div>`}
    </div>`};e.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${h}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${I}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const b=e.querySelector("#prayer-tab-content");let c="record";const g=(y,k)=>{c=y,b.innerHTML=y==="record"?p(k):j(k),y==="record"&&B(k??_),e.querySelectorAll(".prayer-tab").forEach(H=>{H.className=H.dataset.tab===y?`prayer-tab ${h}`:`prayer-tab ${I}`});const S=b.querySelector("#prayer-week-sel");S&&S.addEventListener("change",H=>g("record",parseInt(H.target.value)));const A=b.querySelector("#prayer-follow-week-sel");A&&A.addEventListener("change",H=>g("follow",parseInt(H.target.value))),Ka(b,t,()=>g(c,k))};e.querySelectorAll(".prayer-tab").forEach(y=>y.addEventListener("click",()=>g(y.dataset.tab))),g("record",_)}function Sr(e,s,t,n,l={}){var f;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:x,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const i={},a={};for(const v of d??[])v.main_room&&(i[v.main_room]=((f=v.teachers)==null?void 0:f.full_name)??"",a[v.main_room]=v);const m=Object.keys(x).sort((v,h)=>v.localeCompare(h,void 0,{numeric:!0})),w="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
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
          ${m.map(v=>{const h=x[v]??[],I=h.length,u=h.filter(C=>r.has(C.id??C)).length,p=I-u,j=I>0?Math.round(u/I*100):0,_=j>=100?"bg-emerald-500":j>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ya(v,i,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${I}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${u}</td>
              <td class="border border-gray-100 text-center ${p>0?"text-red-500 font-medium":"text-gray-300"}">${p||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${_} h-2 rounded-full" style="width:${j}%"></div></div>
                  <span class="text-[10px] font-bold ${j>=100?"text-emerald-600":j>=50?"text-amber-600":"text-red-500"}">${j}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${m.length} ห้อง</p>`,Ka(e,l,()=>Sr(e,s,t,n,l))}function Er(e,s,t,n,l={}){var f;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:x,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const i={},a={};for(const v of d??[])v.main_room&&(i[v.main_room]=((f=v.teachers)==null?void 0:f.full_name)??"",a[v.main_room]=v);const m=Object.keys(x).sort((v,h)=>v.localeCompare(h,void 0,{numeric:!0})),w="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
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
          ${m.map(v=>{const h=x[v]??[],I=h.length,u=h.filter(C=>r.has(C.id??C)).length,p=I-u,j=I>0?Math.round(u/I*100):0,_=j>=100?"bg-indigo-500":j>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ya(v,i,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${I}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${u}</td>
              <td class="border border-gray-100 text-center ${p>0?"text-red-500 font-medium":"text-gray-300"}">${p||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${_} h-2 rounded-full" style="width:${j}%"></div></div>
                  <span class="text-[10px] font-bold ${j>=100?"text-indigo-600":j>=50?"text-amber-600":"text-red-500"}">${j}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${m.length} ห้อง · ${o.length} หัวข้อ</p>`,Ka(e,l,()=>Er(e,s,t,n,l))}async function Ka(e,s,t){const{allTeachers:n,year:l,sem:o,category:x}=s??{};if(!(n!=null&&n.length))return;const r={};e.querySelectorAll(".hr-sel-wrap").forEach(d=>{const i=d.closest('[id^="pick-"]');i&&(r[i.id]=Fa({wrap:d,teachers:n,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),e.querySelectorAll(".hr-assign-btn").forEach(d=>{d.addEventListener("click",()=>{const i=d.dataset.picker,a=document.getElementById(i);a&&a.classList.toggle("hidden")})}),e.querySelectorAll(".hr-save-btn").forEach(d=>{d.addEventListener("click",async()=>{var w;const i=d.dataset.room,a=`pick-${i.replace(/[^a-zA-Z0-9]/g,"_")}`,m=(w=r[a])==null?void 0:w.getValue();if(!m){N("กรุณาเลือกครู","error");return}d.disabled=!0,d.textContent="...";try{await zs({teacher_id:m,main_room:i,category:x,academic_year:l,semester:o}),N(`ระบุครูที่ปรึกษาห้อง ${i} แล้ว ✅`,"success"),t&&t()}catch(f){N("บันทึกไม่สำเร็จ: "+he(f),"error"),d.disabled=!1,d.textContent="บันทึก"}})})}function ii(e,s){const t={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,n=document.getElementById("modal-body");if(!n){N("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const l=n.cloneNode(!0);l.querySelectorAll("button, select, input").forEach(r=>r.remove());const o=l.innerHTML,x=`<!DOCTYPE html><html lang="th"><head>
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
  </body></html>`;Vs(x,{autoprint:!0})}function ci(e,s,t){var i;const n={};for(const a of(s==null?void 0:s.homerooms)??[])a.main_room&&(n[a.main_room]=((i=a.teachers)==null?void 0:i.full_name)??"—");if(e==="prayer"){const{roomStudents:a,weekRoomRec:m,W:w}=s??{};if(!a)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const v=Object.keys(a).sort((I,u)=>I.localeCompare(u,void 0,{numeric:!0})).filter(I=>{var p,j;const u=a[I].length;return u?(((j=(p=m[I])==null?void 0:p[w-1])==null?void 0:j.size)??0)<u:!1});return v.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${v.map((I,u)=>{var _,C;const p=a[I].length,j=((C=(_=m[I])==null?void 0:_[w-1])==null?void 0:C.size)??0;return`<tr>
        <td>${u+1}</td>
        <td>${n[I]??"—"}</td>
        <td>${I}</td>
        <td>${p}</td>
        <td>${j}</td>
        <td style="color:#dc2626">${p-j}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(w??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:l,scored:o}=s??{};if(!l)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const r=Object.keys(l).sort((a,m)=>a.localeCompare(m,void 0,{numeric:!0})).filter(a=>{const m=l[a]??[];return m.length>0&&!m.every(w=>o.has(w.id??w))});return r.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${r.map((a,m)=>{const w=l[a]??[],f=w.filter(v=>o.has(v.id??v)).length;return`<tr>
      <td>${m+1}</td>
      <td>${n[a]??"—"}</td>
      <td>${a}</td>
      <td>${w.length}</td>
      <td>${f}</td>
      <td style="color:#dc2626">${w.length-f}</td>
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
  </body></html>`,a=new Blob(["\uFEFF"+i],{type:"application/msword;charset=utf-8"}),m=URL.createObjectURL(a),w=document.createElement("a");w.href=m,w.download=`บันทึกข้อความ_${n}_${e.academicYear??new Date().getFullYear()+543}.doc`,w.click(),setTimeout(()=>URL.revokeObjectURL(m),2e3)}function pi(e){var r,d,i;(r=document.getElementById("wen-teacher-sync-modal"))==null||r.remove();const s=Array.isArray(e.items)?e.items:[],t=Array.isArray(e.conflicts)?e.conflicts:[],n=s.filter(a=>a.action==="add").length,l=s.filter(a=>a.action==="rename").length,o=document.createElement("div");o.id="wen-teacher-sync-modal",o.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",o.innerHTML=`
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
            <input type="checkbox" data-sync-code="${te(a.code)}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
            <span class="min-w-0 flex-1"><span class="font-mono text-xs text-indigo-600">${te(a.code)}</span>
              <span class="ml-2 rounded-full px-2 py-0.5 text-[10px] font-semibold ${a.action==="add"?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700"}">${a.action==="add"?"เพิ่มใหม่":"เปลี่ยนชื่อ"}</span>
              <span class="mt-1 block text-sm font-semibold text-gray-800">${te(a.source_name)}</span>
              ${a.action==="rename"?`<span class="mt-0.5 block text-xs text-gray-500">ชื่อเดิม: ${te(a.wen_name||"—")}</span>`:""}
            </span>
          </label>`).join("")}
        </div>`:'<p class="rounded-xl bg-gray-50 px-4 py-8 text-center text-sm text-gray-500">ไม่มีรายการที่ต้องเพิ่มหรือแก้ชื่อ</p>'}
        ${t.length?`<details class="mt-4 rounded-xl border border-amber-200 bg-amber-50/50 p-3">
          <summary class="cursor-pointer text-xs font-semibold text-amber-900">รายการที่ระบบข้าม (${t.length})</summary>
          <div class="mt-3 max-h-40 space-y-2 overflow-y-auto text-xs text-amber-900">
            ${t.map(a=>`<p><span class="font-mono">${te(a.code)}</span> · ${te(a.name)} — ${te(a.reason)}</p>`).join("")}
          </div>
        </details>`:""}
      </div>
      <footer class="flex flex-wrap justify-end gap-2 border-t border-gray-100 px-5 py-4">
        <button type="button" data-close class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button type="button" data-apply disabled class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40">อัปเดต 0 รายการที่เลือก</button>
      </footer>
    </section>`,document.body.appendChild(o);const x=()=>{const a=o.querySelectorAll("[data-sync-code]:checked").length,m=o.querySelector("[data-apply]");m.textContent=`อัปเดต ${a} รายการที่เลือก`,m.disabled=a===0};o.querySelectorAll("[data-close]").forEach(a=>a.addEventListener("click",()=>o.remove())),o.addEventListener("click",a=>{a.target===o&&o.remove()}),o.querySelectorAll("[data-sync-code]").forEach(a=>a.addEventListener("change",x)),x(),(d=o.querySelector("[data-select-all]"))==null||d.addEventListener("click",()=>{const a=[...o.querySelectorAll("[data-sync-code]")],m=a.some(w=>!w.checked);a.forEach(w=>{w.checked=m}),o.querySelector("[data-select-all]").textContent=m?"ยกเลิกทั้งหมด":"เลือกทั้งหมด",x()}),(i=o.querySelector("[data-apply]"))==null||i.addEventListener("click",async a=>{var f,v;const m=a.currentTarget,w=[...o.querySelectorAll("[data-sync-code]:checked")].map(h=>h.dataset.syncCode);if(w.length){m.disabled=!0,m.textContent="กำลังอัปเดต…";try{const h=await Lr({action:"apply",codes:w});o.remove();const I=`เพิ่ม ${h.added||0} · เปลี่ยนชื่อ ${h.renamed||0}`;h.failed?N(`อัปเดตบางส่วน: ${I} · ล้มเหลว ${h.failed} ราย (${((v=(f=h.failures)==null?void 0:f[0])==null?void 0:v.code)||""})`,"warning"):N(`อัปเดตรายชื่อระบบเวรเรียบร้อย ${I}`,"success")}catch(h){console.error("Wen teacher sync failed:",h),N((h==null?void 0:h.message)||"อัปเดตรายชื่อระบบเวรไม่สำเร็จ","error"),m.disabled=!1,x()}}})}async function mi(e){if(e.dataset.busy==="true")return;e.dataset.busy="true",e.disabled=!0;const s=e.textContent;e.textContent="กำลังตรวจรายชื่อ…";try{const t=await Lr({action:"preview"});pi(t)}catch(t){console.error("Wen teacher preview failed:",t),N((t==null?void 0:t.message)||"ตรวจรายชื่อระบบเวรไม่สำเร็จ","error")}finally{e.dataset.busy="false",e.disabled=!1,e.textContent=s}}async function Lr(e){const{data:s,error:t}=await ie.functions.invoke("sync-wen-teachers",{body:e});if(t){const n=t.context instanceof Response?t.context:null,l=await(n==null?void 0:n.clone().json().catch(()=>null));throw new Error((l==null?void 0:l.error)||t.message||"เรียกบริการซิงก์ไม่สำเร็จ")}if(s!=null&&s.error)throw new Error(s.error);return s}async function Cr(){var e,s;Le("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",$e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const t=await Re(),n=Oe(t.map(r=>r.dept)),l=Oe(t.map(r=>r.skill_group));$e(`<div class="max-w-6xl mx-auto animate-fade">
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
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${Ve} flex-1 min-w-40" />
          <select id="tf-dept" class="${je}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${n.map(r=>`<option value="${r}">${r}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${je}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${l.map(r=>`<option value="${r}">${r}</option>`).join("")}
          </select>
          <select id="tf-subg" class="${je}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${je}">
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
    </div>`),Dt(t);let o=t;window._impersonateTeacher=async r=>{const d=t.find(i=>i.id===r);if(!d){N("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:i}=await Se(async()=>{const{startImpersonation:a}=await import("./impersonation-0xVfgYVY.js");return{startImpersonation:a}},[]);await i(ie,d),window.location.href="teacher.html"}catch(i){console.error("Cannot start impersonation:",i);const a=/function|schema cache|start_admin_impersonation|edge/i.test((i==null?void 0:i.message)||"");N(a?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(i==null?void 0:i.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const x=()=>{const r=document.getElementById("tf-q").value.toLowerCase(),d=document.getElementById("tf-dept").value,i=document.getElementById("tf-skill").value,a=document.getElementById("tf-subg").value,m=document.getElementById("tf-type").value,w=t.filter(f=>(!r||[f.full_name,f.teacher_code,f.dept,f.skill_group].some(v=>(v??"").toLowerCase().includes(r)))&&(!d||f.dept===d)&&(!i||f.skill_group===i)&&(!a||f.subject_group===a)&&(!m||f.staff_type===m));document.getElementById("tf-count").textContent=w.length,o=w,Dt(w)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(r=>{var d,i;(d=document.getElementById(r))==null||d.addEventListener("input",x),(i=document.getElementById(r))==null||i.addEventListener("change",x)}),(e=document.getElementById("teacher-export-csv"))==null||e.addEventListener("click",()=>{const r=v=>["ACDMVOC","AGMVOC"].includes(v.subject_group)?"ปวช":v.category==="ศาสนา"?"ศาสนา":v.category==="สามัญ"||v.subject_group?"สามัญ":"-",d=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],i=o.map((v,h)=>[h+1,v.teacher_code??"",v.full_name??"",r(v),v.phone??""]),a="\uFEFF"+[d,...i].map(v=>v.map(h=>`"${String(h).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([a],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL(m),f=document.createElement("a");f.href=w,f.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(f),f.click(),f.remove(),URL.revokeObjectURL(w),N("ดาวน์โหลด CSV แล้ว ✅","success")}),(s=document.getElementById("teacher-sync-wen"))==null||s.addEventListener("click",r=>{mi(r.currentTarget)})}catch{N("โหลดข้อมูลครูไม่สำเร็จ","error")}}function Dt(e){const s=document.getElementById("teacher-table-wrap");if(!s)return;if(e.length===0){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
              <button onclick="window._adminViewSchedule(${n.id},'${Ge(n.full_name)}')"
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
    </table></div>`}async function ta(){Le("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",$e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),[n,l,o,x]=await Promise.all([Re(),fo(s,t).catch(()=>[]),Xe().catch(()=>[]),na().catch(()=>[])]),r=new Set(l),d=Date.parse(String(e.semester_start??"")),i=S=>{if(!Number.isFinite(d))return!0;const A=Date.parse(String(S.reviewed_at??S.created_at??""));return Number.isFinite(A)&&A>=d},a=o.filter(S=>S.status==="approved"&&i(S)),m=new Map;x.forEach(S=>{var H;if(S.academic_year!=null&&(+S.academic_year!==s||+S.semester!==t))return;const A=(H=S.master_subjects)==null?void 0:H.teacher_id;A&&m.set(A,(m.get(A)??0)+1)});const w=S=>{const A=S.teachers_quota,H=m.get(S.id)??(A==null?void 0:A.total_classes_created)??0,E=a.filter(U=>{var z;return((z=U.teachers)==null?void 0:z.id)===S.id}),T=E.filter(U=>U.package_type==="per_subject").reduce((U,z)=>U+(parseInt(z.room_count??1)||1),0),R=E.some(U=>U.package_type==="semester")||(A==null?void 0:A.package_type)==="semester",F=(A==null?void 0:A.is_paid)&&!(A!=null&&A.package_type)&&!R&&!T,M=parseInt(e.freeClassQuota??2);return R||F?{label:R?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${H} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:T>0?{label:`รายห้อง ${T} ห้อง`,detail:`ใช้แล้ว ${H}/${M+T} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${H}/${M} ห้อง`,cls:H>=M?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},f=n.filter(S=>S.profile_id),v=n.filter(S=>!S.profile_id),h=f.filter(S=>r.has(S.id)),I=f.filter(S=>!r.has(S.id)),u=(S,A,H,E)=>`<button type="button" data-rt-tab="${S}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${E} flex items-center justify-center text-xl font-bold">${H}</div>
        <p class="text-sm text-gray-500">${A}</p>
      </button>`,p=[...new Set(n.map(S=>S.dept).filter(Boolean))].sort(),j={};for(const S of n){const A=(S.full_name??"").toLowerCase().replace(/\s+/g,"");A&&(j[A]||(j[A]=[]),j[A].push(S))}const _=Object.values(j).filter(S=>S.length>1).map(S=>S.slice().sort((A,H)=>(A.registered_at??"")<(H.registered_at??"")?-1:1));$e(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${u("all","ทั้งหมด",n.length,"bg-indigo-100 text-indigo-700")}
        ${u("registered","มีบัญชีแล้ว",f.length,"bg-emerald-100 text-emerald-700")}
        ${u("unregistered","ยังไม่ลงทะเบียน",v.length,"bg-amber-100 text-amber-700")}
        ${u("duplicates","บัญชีซ้ำ",_.length,_.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${u("scheduled","สร้างตารางสอนแล้ว",h.length,"bg-green-100 text-green-700")}
        ${u("unscheduled","ยังไม่สร้างตารางสอน",I.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${Ve} flex-1 min-w-40" />
          <select id="rt-cat" class="${je}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${je}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${p.map(S=>`<option value="${S}">${S}</option>`).join("")}
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
    </div>`);let C=n,L="all",q=null;const B=()=>{document.querySelectorAll("[data-rt-tab]").forEach(S=>{var H;const A=S.dataset.rtTab===L||S.dataset.rtTab===q;S.classList.toggle("border-emerald-400",A),S.classList.toggle("bg-emerald-50",A),S.classList.toggle("shadow-lg",A),S.classList.toggle("shadow-emerald-100",A),S.classList.toggle("ring-2",A),S.classList.toggle("ring-emerald-200",A),S.classList.toggle("border-gray-100",!A),(H=S.querySelector("p"))==null||H.classList.toggle("text-emerald-700",A)})},b=S=>m.get(S.id)??0,c=S=>r.has(S.id)?"✓":"—",g=()=>{const S=document.getElementById("rt-dup-list");if(S){if(!_.length){S.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}S.innerHTML=_.map((A,H)=>{const E=A.map((R,F)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${F===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${H}" value="${R.id}"
              class="mt-1 accent-emerald-600" ${F===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${R.image_url?`<img src="${R.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${Pe(R.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${R.teacher_code??"—"}</span>
                ${R.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${b(R)}</span>
                <span>🗓️ ตาราง ${c(R)}</span>
                ${R.login_email?`<span>✉️ ${Pe(R.login_email)}</span>`:""}
                ${R.registered_at?`<span>📅 ${new Date(R.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${R.id}</span>
              </div>
            </div>
          </label>`).join(""),T=A.map(R=>R.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${H}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${H+1} — ${Pe(A[0].full_name??"")}
              <span class="ml-2 text-red-500">(${A.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${E}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${H},'${T}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(S,A)=>{var M;const H=A.split(",").map(Number),E=Number((M=document.querySelector(`input[name="dup-keep-${S}"]:checked`))==null?void 0:M.value);if(!E){N("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const T=H.filter(U=>U!==E);if(!T.length){N("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const R=n.find(U=>U.id===E);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${R==null?void 0:R.full_name} (ID ${E})
ลบ: ID ${T.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const F=document.querySelector(`[data-dup-group="${S}"] button`);F&&(F.disabled=!0,F.textContent="⏳ กำลังรวม...");try{for(const U of T)await ho(E,U);N(`รวมบัญชีสำเร็จ — เหลือ ID ${E}`,"success"),ta()}catch(U){N("เกิดข้อผิดพลาด: "+he(U),"error"),F&&(F.disabled=!1,F.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const $=S=>{var H,E,T,R;const A=S==="duplicates";if((H=document.getElementById("rt-main-section"))==null||H.classList.toggle("hidden",A),(E=document.getElementById("rt-duplicates-section"))==null||E.classList.toggle("hidden",!A),(T=document.getElementById("rt-schedule-stats"))==null||T.classList.toggle("hidden",!0),A){L="duplicates",q=null,B(),g();return}S==="scheduled"||S==="unscheduled"?(L="registered",q=S):(L=S,q=null),C=L==="registered"?f:L==="unregistered"?v:n,(R=document.getElementById("rt-schedule-stats"))==null||R.classList.toggle("hidden",L!=="registered"),B(),k()},y=S=>{const A=document.getElementById("reg-teacher-table");if(A){if(!S.length){A.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`;return}A.innerHTML=`
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
              ${S.map(H=>{const E=(H.full_name??"?").charAt(0).toUpperCase(),T=!!H.profile_id,R=r.has(H.id),F=w(H);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${H.image_url?`<img src="${H.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${T?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${E}</div>`}
                      <div>
                        <p class="font-semibold text-gray-800">${H.full_name??"—"}</p>
                        <p class="text-xs text-gray-400">${H.dept??""}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">
                    ${H.teacher_code??"—"}
                  </td>
                  <td class="px-4 py-3 text-center hidden md:table-cell">
                    ${H.category?`<span class="px-2 py-0.5 rounded-full text-xs font-medium
                            ${H.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">
                          ${H.category}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
                  </td>
                  <td class="px-4 py-3 hidden lg:table-cell">
                    <span class="inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${F.cls}">
                      ${F.label}
                    </span>
                    <p class="text-[11px] text-gray-400 mt-1">${F.detail}</p>
                  </td>
                  <td class="px-4 py-3 text-center">
                    ${T?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`:`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`}
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${T?`<button onclick="window._adminViewSchedule(${H.id},'${Ge(H.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${R?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${H.id}, '${Ge(H.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},k=()=>{var R,F,M;const S=(((R=document.getElementById("rt-q"))==null?void 0:R.value)??"").toLowerCase(),A=((F=document.getElementById("rt-cat"))==null?void 0:F.value)??"",H=((M=document.getElementById("rt-dept"))==null?void 0:M.value)??"",E=C.filter(U=>(!S||[U.full_name,U.teacher_code].some(z=>(z??"").toLowerCase().includes(S)))&&(!A||U.category===A)&&(!H||U.dept===H)&&(!q||(q==="scheduled"?r.has(U.id):!r.has(U.id)))),T=document.getElementById("rt-count");T&&(T.textContent=E.length),y(E)};document.querySelectorAll("[data-rt-tab]").forEach(S=>{S.addEventListener("click",()=>$(S.dataset.rtTab))}),$("all"),["rt-q","rt-cat","rt-dept"].forEach(S=>{var A,H;(A=document.getElementById(S))==null||A.addEventListener("input",k),(H=document.getElementById(S))==null||H.addEventListener("change",k)}),window.handleUnlinkTeacher=async(S,A)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${A}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await vo(S),N(`ยกเลิกบัญชี "${A}" แล้ว`,"success"),ta()}catch(H){N("เกิดข้อผิดพลาด: "+he(H),"error")}}}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}async function Ja(){Le("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",$e(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[e,s]=await Promise.all([na(),Re().catch(()=>[])]),t=Object.fromEntries(s.map(l=>[l.id,l])),n=document.getElementById("class-list");if(e.length===0){n.innerHTML=`<div class="text-center py-16 text-gray-400">
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
            ${(o=l.master_subjects)!=null&&o.teacher_id?`<button onclick="window._adminViewSchedule(${l.master_subjects.teacher_id},'${Ge(((x=t[l.master_subjects.teacher_id])==null?void 0:x.full_name)??l.master_subjects.subject_name??l.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${l.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${l.id},'${(l.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(e.map(l=>[l.id,l])),window._adminEditClass=l=>{var x;const o=(x=window._adminClassCache)==null?void 0:x[l];o&&Ys(null,o)},window._adminDeleteClass=async(l,o)=>{if(confirm(`ยืนยันลบห้องเรียน "${o}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await Ds(l),N(`ลบห้องเรียน "${o}" แล้ว`,"success"),Ja()}catch(x){N("ลบไม่สำเร็จ: "+he(x),"error")}}}catch{N("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function Ir(){Le("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",$e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let d=function(a,m,w){var v;(v=document.getElementById("stu-modal"))==null||v.remove();const f=document.createElement("div");f.id="stu-modal",f.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",f.innerHTML=`
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
        </div>`,document.body.appendChild(f),f.querySelector("#stu-close").addEventListener("click",()=>f.remove()),f.querySelector("#stu-cancel").addEventListener("click",()=>f.remove()),f.addEventListener("click",h=>{h.target===f&&f.remove()}),f.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{f.querySelector("#sf-auth-pw").value=f.querySelector("#sf-code").value.trim()}),f.querySelector("#stu-form").addEventListener("submit",async h=>{h.preventDefault();const I=f.querySelector("#stu-save");I.disabled=!0,I.textContent="กำลังบันทึก...";try{const u={student_code:f.querySelector("#sf-code").value.trim()||null,full_name:f.querySelector("#sf-name").value.trim()||null,main_room:f.querySelector("#sf-main-room").value.trim()||null,religion_room:f.querySelector("#sf-rel-room").value.trim()||null,gender:f.querySelector("#sf-gender-val").value||null,house_color:f.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:f.querySelector("#sf-shirt-size").value.trim()||null},p=f.querySelector("#sf-auth-email").value.trim()||null,j=f.querySelector("#sf-auth-pw").value.trim()||null;if(!a.profile_id&&!j){N("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),I.disabled=!1,I.textContent="บันทึก";return}await w(u,p||j?{email:p,password:j}:null),N("บันทึกสำเร็จ","success"),f.remove()}catch(u){N("บันทึกไม่สำเร็จ: "+he(u),"error")}finally{I.disabled=!1,I.textContent="บันทึก"}})};const e=await Et(),s=Oe(e.map(a=>at(a.main_room))),t=Oe(e.map(a=>pt(a.main_room))),n=Oe(e.map(a=>a.house_color)),l=Oe(e.map(a=>a.sports_shirt_size));$e(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${Ve} flex-1 min-w-40" />
          <select id="sf-grade" class="${je}">
            <option value="">ทุกระดับชั้น</option>
            ${s.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-room" class="${je}">
            <option value="">ทุกห้อง</option>
            ${t.map(a=>`<option value="${a}">ห้อง ${a}</option>`).join("")}
          </select>
          <select id="sf-gender" class="${je}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <select id="sf-house" class="${je}">
            <option value="">ทุกสี</option>
            ${n.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-shirt" class="${je}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${l.map(a=>`<option value="${a}">${a}</option>`).join("")}
          </select>
          <select id="sf-page-size" class="${je}">
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
    </div>`);let o=Object.fromEntries(e.map(a=>[a.id,a])),x=1e3;const r=a=>{const m=document.getElementById("student-table-wrap"),w=x==="all"?a:a.slice(0,x);if(document.getElementById("sf-count").textContent=a.length,document.getElementById("sf-showing").textContent=w.length,!a.length){m.innerHTML=`<div class="text-center py-16 text-gray-400">
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
          ${w.map(f=>`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${f.image_url?`<img src="${f.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(f.full_name??"?").charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${f.full_name??"—"}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${f.student_code??"—"}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${f.main_room??"—"}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${f.religion_room?`<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${f.religion_room}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${f.gender??"—"}</td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${f.house_color?`<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${f.house_color}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${f.sports_shirt_size?`<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${f.sports_shirt_size}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${f.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${f.id},'${(f.full_name??"").replace(/'/g,"")}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      ${w.length<a.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(a,m)=>{if(confirm(`ยืนยันลบนักเรียน "${m}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await Hn(a),delete o[a],e.splice(e.findIndex(w=>w.id===a),1),N(`ลบ "${m}" แล้ว`,"success"),i()}catch(w){N("ลบไม่สำเร็จ: "+he(w),"error")}},window._editStudent=async a=>{const m=o[a];if(!m)return;let w="";try{const{data:f,error:v}=await ie.rpc("lookup_student_by_code",{p_student_code:m.student_code});!v&&f&&f[0]&&(w=f[0].login_email||"")}catch(f){console.error(f)}d(m,w,async(f,v)=>{if(await Rn(a,f),v&&(v.email||v.password)){const{error:h}=await ie.rpc("admin_update_student_auth",{p_student_id:a,p_new_email:v.email||null,p_new_password:v.password||null});if(h)throw h}Object.assign(m,f),o[a]=m,i()})},r(e);const i=()=>{const a=document.getElementById("sf-q").value.toLowerCase(),m=document.getElementById("sf-grade").value,w=document.getElementById("sf-room"),f=w.value,v=Oe(e.filter(_=>!m||at(_.main_room)===m).map(_=>pt(_.main_room)));v.includes(f)||(w.value=""),w.innerHTML='<option value="">ทุกห้อง</option>'+v.map(_=>`<option value="${_}" ${_===w.value?"selected":""}>ห้อง ${_}</option>`).join("");const h=w.value,I=document.getElementById("sf-gender").value,u=document.getElementById("sf-house").value,p=document.getElementById("sf-shirt").value,j=document.getElementById("sf-page-size").value;x=j==="all"?"all":Number(j),r(e.filter(_=>(!a||[_.full_name,_.student_code,_.main_room,_.religion_room].some(C=>(C??"").toLowerCase().includes(a)))&&(!m||at(_.main_room)===m)&&(!h||pt(_.main_room)===h)&&(!I||_.gender===I)&&(!u||_.house_color===u)&&(!p||_.sports_shirt_size===p)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(a=>{var m,w;(m=document.getElementById(a))==null||m.addEventListener("input",i),(w=document.getElementById(a))==null||w.addEventListener("change",i)})}catch{N("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function xi(){const{getCommentPhrases:e,addCommentPhrase:s,updateCommentPhrase:t,deleteCommentPhrase:n}=await Se(async()=>{const{getCommentPhrases:i,addCommentPhrase:a,updateCommentPhrase:m,deleteCommentPhrase:w}=await import("./api-CQwFwlFA.js");return{getCommentPhrases:i,addCommentPhrase:a,updateCommentPhrase:m,deleteCommentPhrase:w}},__vite__mapDeps([0,1,2,3,4])),l=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],o={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},x={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},r=document.createElement("div");r.style.cssText="padding:4px 0;";async function d(){const i=await e().catch(()=>[]);r.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${l.map(a=>{const m=i.filter(w=>w.metric===a.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${o[a.key]};color:${x[a.key]};padding:3px 12px;border-radius:20px;">${a.label}</span>
            <button class="ph-add-btn" data-metric="${a.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${m.map(w=>`
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
            ${m.length?"":'<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>'}
          </div>
        </div>`}).join("")}
    `,r.querySelectorAll(".ph-add-btn").forEach(a=>{a.onclick=async()=>{const m=prompt("พิมพ์ประโยคใหม่:");m!=null&&m.trim()&&(await s(a.dataset.metric,m.trim()),d())}}),r.querySelectorAll(".ph-save-btn").forEach(a=>{a.onclick=async()=>{const m=r.querySelector(`.ph-edit-inp[data-id="${a.dataset.id}"]`);await t(parseInt(a.dataset.id),m.value.trim()),a.textContent="✓",setTimeout(()=>a.textContent="บันทึก",1e3)}}),r.querySelectorAll(".ph-del-btn").forEach(a=>{a.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await n(parseInt(a.dataset.id)),d())}})}return await d(),r}async function Qa(){Le("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",$e(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[e,s,t,n]=await Promise.all([Me(),oa().catch(()=>[]),ot().catch(()=>[]),xo().catch(()=>[])]);e.feedbackQuotaTeacher=e.feedbackQuotaTeacher||"5",e.feedbackQuotaStudent=e.feedbackQuotaStudent||"3",e.freeAttendanceScanLimit=e.freeAttendanceScanLimit||"2",e.freeRandomPickerLimit=e.freeRandomPickerLimit||"1",e.freeTimerLimit=e.freeTimerLimit||"1",e.freeDashboardLimit=e.freeDashboardLimit||"0",e.freePromptAiLimit=e.freePromptAiLimit||"1";let l=Qo(e);window._latestFullBackupId=null;const o=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],x=[...new Set([...o,...t.map(v=>v.dept_code).filter(Boolean),...n.map(v=>v.dept).filter(Boolean)])].sort(),r={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},d="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(v,h,I)=>{var j,_,C,L,q;const u=(_=(j=document.getElementById(h))==null?void 0:j.value)==null?void 0:_.trim(),p=document.getElementById(I);if(!u){p.textContent="⚠️ ยังไม่ได้ใส่ Key",p.className="text-xs text-amber-500 font-medium";return}v.textContent="⏳",v.disabled=!0;try{const B=((L=(C=document.getElementById("cfg-geminiModel"))==null?void 0:C.value)==null?void 0:L.trim())||"gemini-1.5-flash",b=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${B}:generateContent?key=${u}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if(b.ok)p.textContent="✅ ใช้งานได้",p.className="text-xs text-emerald-600 font-semibold";else{const g=((q=(await b.json().catch(()=>({}))).error)==null?void 0:q.message)??`HTTP ${b.status}`;p.textContent=`❌ ${g.slice(0,60)}`,p.className="text-xs text-red-500 font-medium"}}catch{p.textContent="❌ เชื่อมต่อไม่ได้",p.className="text-xs text-red-500 font-medium"}v.textContent="ทดสอบ",v.disabled=!1};const i=({key:v,label:h,type:I,options:u,placeholder:p,hint:j,rows:_,syncFrom:C})=>{var b;const L=e[v]??"",q=`id="cfg-${v}" data-key="${v}"`,B=(c,g="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${h}</label>
          ${c}
          ${g?`<p class="text-[11px] text-gray-400 mt-1">${g}</p>`:""}
        </div>`;if(I==="color")return B(`
        <div class="flex items-center gap-3">
          <input type="color" ${q} value="${L||r[v]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${v}-txt" class="text-sm font-mono text-gray-600">${L||r[v]||"#007bff"}</span>
        </div>`,j);if(I==="date")return B(`<input type="date" ${q} value="${L}" class="${d}" />`,j);if(I==="select")return B(`
        <select ${q} class="${d} bg-white">
          ${(u??[]).map(c=>{const g=typeof c=="object"?c.value:c,$=typeof c=="object"?c.label:c;return`<option value="${g}" ${g===L?"selected":""}>${$}</option>`}).join("")}
        </select>`,j);if(I==="choice"){const c=L||((b=u==null?void 0:u[0])==null?void 0:b.value)||"";return B(`
          <input type="hidden" ${q} value="${te(c)}" />
          <div class="flex flex-wrap gap-2" role="group" aria-label="${te(h)}">
            ${(u??[]).map(g=>{const $=typeof g=="object"?g.value:g,y=typeof g=="object"?g.label:g;return`<button type="button" class="cfg-choice px-3 py-2 rounded-xl border text-sm font-semibold transition ${$===c?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}" data-choice-key="${te(v)}" data-choice-value="${te($)}">
                ${te(y)}
              </button>`}).join("")}
          </div>`,j)}if(I==="textarea")return B(`<textarea ${q} rows="${_??3}" placeholder="${p??""}"
          class="${d} resize-none">${L??""}</textarea>`,j);if(I==="upload")return B(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${L?`<img src="${L}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${L?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${v}" />
          </label>
          ${/(?:LogoUrl|LogoBwUrl)$/.test(v)?`<button type="button"
            class="cfg-upload-clear ${L?"":"hidden"} flex-shrink-0 px-3 py-2 rounded-lg border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition"
            data-key="${v}">🗑️ ล้างโลโก้</button>`:""}
          <input type="hidden" ${q} value="${L}" />
        </div>`,j);if(I==="toggle"){const c=L==="true";return B(`
          <button type="button" ${q} data-on="${c}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${c?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${c?"28":"2"}px)"></span>
          </button>`,j)}if(I==="password"){const c=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(v),g=`const i=document.getElementById('cfg-${v}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,$=c?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${v}','cfg-${v}-st')">ทดสอบ</button>
             <span id="cfg-${v}-st" class="text-xs text-gray-400"></span>`:"";return B(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${q} value="${L}" class="${d} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${g}">ดู</button>
            ${$}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,j)}return B(C?`
        <div class="flex gap-2 items-center">
          <input type="text" ${q} value="${L??""}" placeholder="${p??""}" class="${d} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${C}','${v}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${q} value="${L??""}" placeholder="${p??""}" class="${d}" />`,j)},a=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"term-data",icon:"🗃️",label:"ข้อมูลทั้งหมด"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"subject-icons",icon:"📚",label:"ไอคอนรายวิชา"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],m=v=>{const h=(I,u)=>`<div class="mb-6">
          ${I?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${I}</p>`:""}
          ${u.map(i).join("")}
        </div>`;if(v==="subject-icons"){const I=new Set(ps.map(_=>_.key)),u=(_,C=!1)=>{const L=l[_.key],q=_.defaultValue??"",B=(L==null?void 0:L.type)==="emoji"?L.value:C?"":q,b=(L==null?void 0:L.type)==="image"?L.value:"";return`<div data-subject-visual-row="true" data-subject-visual-original="${te(_.key)}" class="rounded-2xl border border-gray-200 bg-gray-50/70 p-3" data-image-url="${te(b)}">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
              <div class="subject-visual-preview flex-shrink-0 w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-4xl overflow-hidden shadow-sm">
                ${b?`<img src="${te(b)}" alt="" class="w-full h-full object-contain" />`:te(B||"✨")}
              </div>
              <div class="min-w-0 flex-1 space-y-1.5">
                ${C?`<input type="text" class="subject-visual-key ${d}" value="${te(_.key)}" placeholder="เช่น code:ค33102 หรือ dept:MATH" />`:`<p class="text-sm font-bold text-gray-700">${te(_.label)}</p><p class="text-[11px] text-gray-400 font-mono">${te(_.key)}</p>`}
                <input type="text" class="subject-visual-value ${d}" value="${te(B)}" maxlength="8" placeholder="ใส่อิโมจิ เช่น 🇹🇭 หรือ 📘" />
              </div>
              <label class="cursor-pointer inline-flex flex-shrink-0 items-center justify-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50 transition">
                📁 PNG
                <input type="file" accept="image/png" class="hidden subject-visual-upload" />
              </label>
              ${C?'<button type="button" class="subject-visual-remove flex-shrink-0 px-2 py-2 rounded-xl text-xs text-red-500 hover:bg-red-50" title="ลบกติกานี้">ลบ</button>':""}
            </div>
          </div>`},p=ps.map(_=>u(_)).join(""),j=Object.keys(l).filter(_=>!I.has(_)).map(_=>u({key:_,label:_},!0)).join("");return`<div class="space-y-5">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
            <p class="text-sm font-bold text-indigo-900">📚 ไอคอน/อิโมจิประจำรายวิชา</p>
            <p class="mt-1 text-xs leading-relaxed text-indigo-700">กำหนดภาพที่แสดงบนการ์ดคอร์สและห้องเรียนได้ตามกลุ่มวิชา ภาษา หรือรหัสวิชา ระบบจะเลือกกติกาเฉพาะรหัสวิชาก่อน แล้วจึงเลือกภาษา/กลุ่มสาระ/ค่าเริ่มต้นตามลำดับ</p>
            <p class="mt-2 text-[11px] text-indigo-600">PNG จะรักษาพื้นหลังโปร่งใส เหมาะสำหรับภาพตกแต่งขนาดใหญ่ที่วางซ้อนมุมขวาล่างของการ์ด</p>
          </div>
          <div class="space-y-2.5">${p}</div>
          <div class="border-t border-gray-100 pt-5">
            <div class="flex items-center justify-between gap-3 mb-3">
              <div><p class="text-sm font-bold text-gray-700">กำหนดเฉพาะรายวิชา</p><p class="text-[11px] text-gray-400 mt-1">ใช้คีย์รูปแบบ <span class="font-mono">code:รหัสวิชา</span> เพื่อให้มีผลเฉพาะคอร์สนั้น</p></div>
              <button type="button" data-subject-visual-add class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50">＋ เพิ่มกติกา</button>
            </div>
            <div data-subject-visual-custom-list class="space-y-2.5">${j}</div>
          </div>
          <input type="hidden" id="cfg-subjectVisuals" data-key="subjectVisuals" value="${te(JSON.stringify(l))}" />
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
              📚 ภาคเรียนที่ ${te(e.semester??"—")} / ${te(e.academicYear??e.academic_year??"—")}
            </span>
            <span class="text-xs text-indigo-600">การเปลี่ยนภาคเรียนต้องใช้ปุ่ม “ขึ้นภาคเรียนใหม่” ด้านล่าง เพื่อให้ระบบเก็บประวัติและสร้างพื้นที่ว่างอย่างปลอดภัย</span>
          </div>
          <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-indigo-700">
            <span>เปิดภาคเรียน: ${te(e.semester_start??"—")}</span>
            <span>ปิดภาคเรียน: ${te(e.semester_end??"—")}</span>
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
            ${(s.length?s:[{academic_year:e.academicYear,semester:e.semester,start_date:e.semester_start,end_date:e.semester_end,is_current:!0}]).map(I=>`
              <div class="flex flex-wrap items-center justify-between gap-2 rounded-xl border ${I.is_current?"border-emerald-200 bg-emerald-50/60":"border-gray-100 bg-gray-50/60"} px-3 py-2.5">
                <div class="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <span>${I.is_current?"🟢":"🗂️"}</span>
                  <span>ภาค ${te(I.semester)}/${te(I.academic_year)}</span>
                  ${I.is_current?'<span class="text-[10px] rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">ปัจจุบัน</span>':'<span class="text-[10px] rounded-full bg-gray-200 text-gray-500 px-2 py-0.5">ย้อนหลัง</span>'}
                </div>
                <span class="text-[11px] text-gray-400">${te(I.start_date??"—")} ถึง ${te(I.end_date??"—")}</span>
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
        </div>`,h("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),h("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(v==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map(I=>i({...I,type:"color"})).join("")}
        </div>`;if(v==="school"){const I=(u,p)=>[{key:`${u}SchoolName`,label:p.name,type:"text"},{key:`${u}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${u}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${u}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${u}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${u}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${u}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${u}AcademicHeadName`,label:u==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:u==="samai"?"academic_samai":"academic_pvch"},{key:`${u}AcademicHeadSignUrl`,label:u==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${u}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...u==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${u}RegistrarName`,label:u==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:u==="samai"?"registrar_samai":"registrar_pvch"},{key:`${u}RegistrarSignUrl`,label:u==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${u}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...u==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"},{key:"religionDeptHeadSource",label:"ชื่อหัวหน้ากลุ่มสาระในเอกสาร ปพ.5 (วิชาศาสนา)",type:"choice",options:[{value:"central",label:"ใช้หัวหน้ากลุ่มสาระกลาง"},{value:"subgroup",label:"ใช้หัวหน้ากลุ่มย่อยของครูผู้สอน"}],hint:"ใช้กับทั้งศาสนามัธยม (AGM) และศาสนาปวช. (AGMVOC) — หากเลือกหัวหน้ากลุ่มย่อยแต่ยังไม่พบกลุ่มของครู ระบบจะสำรองเป็นหัวหน้ากลุ่มสาระกลาง"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${I("samai",{name:"ชื่อโรงเรียน"}).map(i).join("")}</div>
          <div id="school-porwor" class="hidden">${I("porwor",{name:"ชื่อวิทยาลัย"}).map(i).join("")}</div>`}if(v==="prayer")return[h("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),h("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(v==="contact")return[h("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),h("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},(I,u)=>String(u+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},(I,u)=>String(u+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(v==="payment")return[h("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),h("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(v==="package"){const u=Array.from({length:5},(C,L)=>{const q=L+1,B=`donationStickerImg${q}`,b=e[B]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${b?`<img src="${b}" class="w-full h-full object-contain" id="sticker-prev-${q}" />`:`<span id="sticker-prev-${q}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${q}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${B}" data-n="${q}" />
              </label>
              ${b?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${B}" data-n="${q}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${B}" value="${b}" />
              ${b?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${b}</p>`:""}
            </div>
          </div>`}).join(""),p=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],j={quota:[h("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),h("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),h("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[h("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),h("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),h("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(C=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${C}">
                  👁️ ระดับ ${C}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const C=String(e.donationSpecialFeatures??"").trim(),q=C?C.split(`
`).filter(Boolean).map(g=>{const $=g.split("|").map(y=>y.trim());return{icon:$[0]||"✨",text:$[1]||"",minTier:parseInt($[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([g,$,y])=>({icon:g,text:$,minTier:y})),B=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],b=(g,$)=>$?`border:2px solid ${B[g-1]};color:${B[g-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",c=(g,$)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${$}" data-min-tier="${g.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${g.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${g.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(y=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${b(y,g.minTier===y)}" data-n="${y}" title="ระดับ ${y}">${y}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${q.map((g,$)=>c(g,$)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(e.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),h("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${u}</div>
            </div>`,h("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),h("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[h("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[h("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),h("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},_="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${p.map(C=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${C.id===_?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${C.id}">${C.label}</button>`).join("")}
          </div>
          ${p.map(C=>`
          <div id="pkg-panel-${C.id}" ${C.id!==_?'class="hidden"':""}>
            ${j[C.id]??""}
          </div>`).join("")}`}if(v==="student")return[h("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),h("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),h("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),h("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),h("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
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
        </div>`].join("");if(v==="sync"){const I=[["classInfoSubjectNameCell","ชื่อรายวิชา"],["classInfoSubjectCodeCell","รหัสวิชา"],["classInfoCreditCell","หน่วยกิต"],["classInfoGradeCell","ชั้นเรียน"],["classInfoHeadStudentCell","หัวหน้าห้อง"],["classInfoDay1Cell","วันสอนคาบ 1"],["classInfoDay2Cell","วันสอนคาบ 2"],["classInfoDay3Cell","วันสอนคาบ 3"],["classInfoDay4Cell","วันสอนคาบ 4"],["classInfoDay5Cell","วันสอนคาบ 5"],["classInfoDay6Cell","วันสอนคาบ 6"],["classInfoTeacherNameCell","ครูผู้สอน"],["classInfoTeacherPhoneCell","เบอร์ติดต่อ"],["classInfoDeptCell","กลุ่มสาระ"],["classInfoHeadDeptCell","หัวหน้าหมวด"]];return`
          ${i({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          <div class="rounded-xl border border-amber-100 bg-amber-50 p-3 text-xs text-amber-800 mb-4">การตั้งค่าโฟลเดอร์ Drive สำหรับจัดเก็บแผนเป็นการตั้งค่าส่วนตัวของครูแต่ละคนและแต่ละภาคเรียน ให้ตั้งค่าได้จากหน้าศูนย์ส่ง/จัดเก็บแผนรายสัปดาห์ในหน้ารายวิชา</div>
          ${i({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${I.map(([u,p])=>{const j=e[u]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${p}</p>
                <input type="text" id="cfg-${u}" data-key="${u}" value="${j}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return v==="template"?[h("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${Yo.map(I=>i({key:I.key,label:`${I.category} — ${I.label}`,type:"text",placeholder:I.defaultId,hint:`default: ${I.defaultId}`})).join("")}`].join(""):v==="phrases"?xi():v==="schedule"?[h("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),h("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),h("Gemini API Key แยกต่อกลุ่มสาระ",x.length?x.map(I=>({key:`geminiKey_${I}`,label:`Key กลุ่มสาระ ${I}`,type:"password",hint:`ครูที่มี dept = ${I} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):v==="council"?[h("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let w="general";$e(`<div class="max-w-4xl mx-auto animate-fade">
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
    </div>`);const f=v=>{var Ue,Qe;w=v,document.querySelectorAll(".cfg-tab").forEach(P=>{const ce=P.dataset.tab===v;P.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${ce?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const h=m(v),I=document.getElementById("cfg-panel-inner");h instanceof Promise?(I.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',h.then(P=>{I.innerHTML="",P instanceof Element?I.appendChild(P):I.innerHTML=P??""})):h instanceof Element?(I.innerHTML="",I.appendChild(h)):I.innerHTML=h??"",document.getElementById("cfg-save-hint").textContent="";const u=document.getElementById("btn-create-full-backup"),p=document.getElementById("btn-reset-full-backup"),j=document.getElementById("full-backup-status"),_=document.getElementById("full-backup-progress-wrap"),C=document.getElementById("full-backup-progress-label"),L=document.getElementById("full-backup-progress-detail"),q=document.getElementById("full-backup-progress-bar"),B=document.getElementById("full-backup-progress-note"),b=document.getElementById("btn-create-term-backup"),c=document.getElementById("btn-resume-term-backup"),g=document.getElementById("btn-clear-term-backup"),$=document.getElementById("term-backup-status"),y=document.getElementById("term-backup-progress-wrap"),k=document.getElementById("term-backup-progress-label"),S=document.getElementById("term-backup-progress-count"),A=document.getElementById("term-backup-progress-bar"),H=async P=>{if(!P&&!confirm("สร้างไฟล์สำรองเฉพาะข้อมูลการเข้าเรียนและคะแนนละหมาดของภาคเรียนปัจจุบันใช่หรือไม่?"))return;const ce=P?null:Fl(),oe=parseInt(e.academicYear??e.academic_year),ne=parseInt(e.semester);let G=P?"กำลังตรวจสอบจุดสำรองเดิม":"กำลังเริ่มสำรองข้อมูล";const J=Date.now();let de=J;b&&(b.disabled=!0),c&&(c.disabled=!0),g&&(g.disabled=!0),b&&(b.textContent=P?"⏳ กำลังทำสำรองต่อ...":"⏳ กำลังสำรองข้อมูลภาคเรียน..."),y==null||y.classList.remove("hidden"),k&&(k.textContent=G),S&&(S.textContent=""),!P&&A&&(A.style.width="0%");const le=setInterval(()=>{if(Date.now()-de<15e3||!$)return;const X=Math.floor((Date.now()-J)/1e3);$.textContent=`${G} · ${X.toLocaleString()} วินาที`},5e3);try{const X=await Xl({saveTarget:ce,resume:P,academicYear:oe,semester:ne,onProgress:(ee,pe,ye)=>{G=ee,de=Date.now(),$&&($.textContent=ee),k&&(k.textContent=`${ee}${(ye==null?void 0:ye.percent)!=null?` · ${ye.percent}%`:""}`),S&&(S.textContent=(ye==null?void 0:ye.totalRows)!=null?`${ye.completedRows.toLocaleString()}/${ye.totalRows.toLocaleString()} รายการ`:pe?`${pe.toLocaleString()} รายการ`:""),A&&(ye==null?void 0:ye.percent)!=null&&(A.style.width=`${Math.max(0,Math.min(100,ye.percent))}%`)}});window._latestTermBackupId=X.backupId,b&&(b.disabled=!1),$&&($.textContent=`สำเร็จ ${X.academicYear}/${X.semester} · เข้าเรียน ${X.counts.attendances.toLocaleString()} · ละหมาด ${X.counts.prayer_records.toLocaleString()} · ${(X.byteSize/1024/1024).toFixed(1)} MB`),k&&(k.textContent="ตรวจสอบและลงทะเบียนไฟล์สำรองสำเร็จ · 100%"),A&&(A.style.width="100%"),c==null||c.classList.add("hidden"),g==null||g.classList.add("hidden"),N("สำรองข้อมูลที่จะล้างก่อนขึ้นภาคเรียนสำเร็จ ✅","success")}catch(X){$&&($.textContent=(X==null?void 0:X.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ไม่มีข้อมูลถูกลบ":"สำรองข้อมูลภาคเรียนไม่สำเร็จ · ตรวจสอบข้อความผิดพลาดและเลือก “ทำสำรองต่อ” ได้"),N("สำรองข้อมูลภาคเรียนไม่สำเร็จ: "+he(X),"error");const ee=await ws(oe,ne);c==null||c.classList.toggle("hidden",!ee),g==null||g.classList.toggle("hidden",!ee),b&&ee&&(b.disabled=!0,b.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่")}finally{if(clearInterval(le),b){const X=c&&!c.classList.contains("hidden");b.disabled=!!X,b.textContent=X?"⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่":"⬇️ สำรองข้อมูลก่อนขึ้นภาคเรียน"}c&&(c.disabled=!1),g&&(g.disabled=!1)}};b&&!b.dataset.bound&&(b.dataset.bound="true",b.addEventListener("click",()=>H(!1))),c&&!c.dataset.bound&&(c.dataset.bound="true",c.addEventListener("click",()=>H(!0))),g&&!g.dataset.bound&&(g.dataset.bound="true",g.addEventListener("click",async()=>{const P=parseInt(e.academicYear??e.academic_year),ce=parseInt(e.semester);if(confirm("ล้างเฉพาะจุดสำรองภาคเรียนที่ค้างในเบราว์เซอร์ใช่หรือไม่? ไฟล์ที่เลือกไว้จะไม่ถูกลบ"))try{await Gl(P,ce),c.classList.add("hidden"),g.classList.add("hidden"),b&&(b.disabled=!1),$&&($.textContent="ล้างจุดสำรองค้างแล้ว · สามารถเริ่มไฟล์ใหม่ได้")}catch(oe){N("ล้างจุดสำรองค้างไม่สำเร็จ: "+he(oe),"error")}})),c&&ws(parseInt(e.academicYear??e.academic_year),parseInt(e.semester)).then(P=>{c.classList.toggle("hidden",!P),g==null||g.classList.toggle("hidden",!P),b&&(b.disabled=!!P),b&&P&&(b.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่"),P&&$&&($.textContent=`พบงานค้าง ${P.academicYear}/${P.semester} · ต่อจาก ${P.completedRows.toLocaleString()}/${P.totalRows.toLocaleString()} รายการ`)}).catch(P=>console.warn("อ่านจุดสำรองภาคเรียนไม่สำเร็จ:",P));let E=null,T=!1;const R=P=>{var oe;if(!_||!P)return;_.classList.remove("hidden");const ce=Math.max(0,Math.min(100,Number(P.percent)||0));if(C&&(C.textContent=`ความคืบหน้าโดยประมาณ ${ce}%`),q&&(q.style.width=`${ce}%`,(oe=q.parentElement)==null||oe.setAttribute("aria-valuenow",String(ce))),L){const ne=P.tableCount?`ตาราง ${Math.min(P.tableIndex+1,P.tableCount).toLocaleString()}/${P.tableCount.toLocaleString()}`:"",G=P.estimatedTotalRows?`ข้อมูลประมาณ ${P.completedRows.toLocaleString()}/${P.estimatedTotalRows.toLocaleString()} รายการ`:"";L.textContent=[ne,G].filter(Boolean).join(" · ")}B&&(P.storageCount>0&&P.percent>=90?B.textContent=`กำลังสำรองไฟล์ Storage ${P.storageIndex.toLocaleString()}/${P.storageCount.toLocaleString()}`:P.currentTableEstimate>0?B.textContent=`ตารางปัจจุบัน: ${P.currentTableRows.toLocaleString()}/${P.currentTableEstimate.toLocaleString()} รายการ (ตัวเลขโดยประมาณจากสถิติฐานข้อมูล)`:B.textContent="กำลังอ่านและเขียนข้อมูลเป็นช่วง ๆ สามารถสำรองต่อจากจุดล่าสุดได้หากการเชื่อมต่อหลุด")},F=async()=>{const P=await $a().catch(()=>null);if(E=P,T=!0,u&&(u.disabled=!1),p&&(p.classList.toggle("hidden",!P),p.disabled=!1),!!u){if(!P){u.textContent="⬇️ สำรองข้อมูลทั้งหมด";return}if(u.textContent="▶️ สำรองต่อจากจุดล่าสุด",j){const ce=P.phase==="finalizing"?"กำลังตรวจสอบไฟล์สำรอง":P.phase==="storage"?`ไฟล์ Storage ${P.storageIndex.toLocaleString()}/${P.storageCount.toLocaleString()}`:`${P.tableName??"ตาราง"} ${P.tableIndex+1}/${P.tableCount}`;j.textContent=`พบงานสำรองที่หยุดไว้ · ${ce}${P.phase==="storage"||P.phase==="finalizing"?"":` · ${P.rowOffset.toLocaleString()} รายการ`}`,R(P.progress)}}};u&&(u.disabled=!0),F(),u&&!u.dataset.bound&&(u.dataset.bound="true",u.addEventListener("click",async()=>{if(!T){N("กำลังตรวจงานสำรองค้าง กรุณารอสักครู่แล้วลองใหม่","info");return}if(!confirm("ยืนยันสร้างไฟล์สำรองข้อมูลทั้งหมดของระบบ? ไฟล์อาจมีข้อมูลส่วนบุคคลจำนวนมาก"))return;const P=E?null:zl();let ce=Date.now();const oe=ce;u.disabled=!0,p&&(p.disabled=!0),u.textContent="⏳ กำลังสำรองข้อมูลทั้งหมด...";let ne=P?"กำลังเลือกตำแหน่งไฟล์สำรอง":"กำลังเตรียมรายการตาราง";j&&(j.textContent=ne),R({percent:0,tableIndex:0,tableCount:0,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0});const G=setInterval(()=>{if(!j||Date.now()-ce<15e3)return;const J=Math.floor((Date.now()-oe)/1e3);j.textContent=`กำลังทำขั้นตอน: ${ne} · ${J.toLocaleString()} วินาที`},5e3);try{const J=await Zl({saveTarget:P,onProgress:(de,le,X)=>{ce=Date.now(),ne=de,j&&(j.textContent=`${de}${le?` · ${le.toLocaleString()} รายการ`:""}`),R(X)}});window._latestFullBackupId=J.backupId;try{localStorage.setItem("pp5_latest_full_backup_id",J.backupId??"")}catch{}j&&(j.textContent=`สำเร็จ: ${J.fileName} · ${Math.round(J.byteSize/1024/1024)} MB · ${J.tableCount} ตาราง`),R({percent:100,tableIndex:J.tableCount,tableCount:J.tableCount,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0}),N(`สำรองข้อมูลทั้งหมดสำเร็จ และ${J.savedToDisk?"บันทึกไฟล์ลงดิสก์แล้ว":"ดาวน์โหลดไฟล์แล้ว"} ✅`,"success")}catch(J){const de=await $a().catch(()=>null);E=de,j&&(j.textContent=(J==null?void 0:J.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ข้อมูลในฐานข้อมูลไม่ถูกเปลี่ยนแปลง":de?`หยุดไว้ชั่วคราว · กดปุ่มเดิมเพื่อสำรองต่อจาก ${de.tableName??"จุดล่าสุด"}`:"สำรองข้อมูลไม่สำเร็จ"),(J==null?void 0:J.code)==="BACKUP_FILE_MISSING"&&j&&(j.textContent="ไม่พบไฟล์เดิมแล้ว · กด “ล้างงานสำรองค้าง” แล้วเริ่มสำรองใหม่"),N("สำรองข้อมูลไม่สำเร็จ: "+he(J),"error")}finally{clearInterval(G),u.disabled=!1;const J=await $a().catch(()=>null);E=J,T=!0,u.textContent=J?"▶️ สำรองต่อจากจุดล่าสุด":"⬇️ สำรองข้อมูลทั้งหมด",p&&(p.classList.toggle("hidden",!J),p.disabled=!1)}})),p&&!p.dataset.bound&&(p.dataset.bound="true",p.addEventListener("click",async()=>{if(confirm("ล้างเฉพาะงานสำรองค้างในเบราว์เซอร์ใช่หรือไม่? การทำงานนี้จะไม่ลบข้อมูลในฐานข้อมูลหรือไฟล์อื่น")){p.disabled=!0;try{await Vl(),j&&(j.textContent="ล้างงานสำรองค้างแล้ว · กด “สำรองข้อมูลทั้งหมด” เพื่อเลือกตำแหน่งไฟล์ใหม่"),_&&_.classList.add("hidden"),u&&(u.textContent="⬇️ สำรองข้อมูลทั้งหมด"),p.classList.add("hidden"),N("ล้างงานสำรองค้างแล้ว สามารถเริ่มไฟล์ใหม่ได้ ✅","success")}catch(P){p.disabled=!1,N("ล้างงานสำรองค้างไม่สำเร็จ: "+he(P),"error")}}}));const M=document.getElementById("full-backup-file"),U=document.getElementById("btn-restore-full-backup"),z=document.getElementById("full-restore-status");M&&U&&!M.dataset.bound&&(M.dataset.bound="true",M.addEventListener("change",()=>{var P,ce;U.disabled=!((P=M.files)!=null&&P[0]),z&&(z.textContent=(ce=M.files)!=null&&ce[0]?`เลือกไฟล์: ${M.files[0].name}`:"")}),U.addEventListener("click",async()=>{var ce;const P=(ce=M.files)==null?void 0:ce[0];if(P&&confirm("ยืนยันกู้คืนข้อมูลตามขอบเขตของไฟล์นี้? ระบบจะเพิ่มหรือปรับเฉพาะข้อมูลในไฟล์ และไม่ลบข้อมูลอื่น")){U.disabled=!0,U.textContent="⏳ กำลังกู้คืน...";try{const oe=await rd(P,{onProgress:(ne,G)=>{z&&(z.textContent=`${ne} · ${G.toLocaleString()} รายการ`)}});z&&(z.textContent=`กู้คืนสำเร็จ · SHA-256: ${oe.sha256.slice(0,16)}…`),N("กู้คืนข้อมูลจากไฟล์สำรองสำเร็จ ✅","success")}catch(oe){z&&(z.textContent="กู้คืนข้อมูลไม่สำเร็จ"),N("กู้คืนข้อมูลไม่สำเร็จ: "+he(oe),"error")}finally{U.disabled=!1,U.textContent="♻️ กู้คืนจากไฟล์สำรอง"}}})),document.querySelectorAll(".cfg-choice").forEach(P=>{P.addEventListener("click",()=>{var ne;const ce=P.dataset.choiceKey,oe=document.getElementById(`cfg-${ce}`);oe&&(oe.value=P.dataset.choiceValue),(ne=P.parentElement)==null||ne.querySelectorAll(".cfg-choice").forEach(G=>{const J=G===P;G.classList.toggle("border-indigo-500",J),G.classList.toggle("bg-indigo-50",J),G.classList.toggle("text-indigo-700",J),G.classList.toggle("border-gray-200",!J),G.classList.toggle("bg-white",!J),G.classList.toggle("text-gray-500",!J)})})}),document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(P=>{P.addEventListener("input",()=>{const ce=document.getElementById(`${P.id}-txt`);ce&&(ce.textContent=P.value)})});const O=document.getElementById("cfg-subjectVisuals"),W=()=>{document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"]').forEach(P=>{var J,de,le,X,ee;const ce=(J=P.dataset.subjectVisualOriginal)==null?void 0:J.trim(),oe=((de=P.querySelector(".subject-visual-key"))==null?void 0:de.value.trim())||((le=P.dataset.subjectVisualOriginal)==null?void 0:le.trim()),ne=(X=P.querySelector(".subject-visual-value"))==null?void 0:X.value.trim(),G=(ee=P.dataset.imageUrl)==null?void 0:ee.trim();ce&&ce!==oe&&delete l[ce],oe&&(ne?l[oe]={type:"emoji",value:ne.slice(0,8)}:G?l[oe]={type:"image",value:G}:delete l[oe])}),O&&(O.value=JSON.stringify(l))},Y=P=>{var ce,oe;P.querySelectorAll(".subject-visual-key, .subject-visual-value").forEach(ne=>{ne.addEventListener("input",()=>{W();const G=P.querySelector(".subject-visual-preview");G&&ne.classList.contains("subject-visual-value")&&ne.value.trim()&&(G.textContent=ne.value.trim())})}),(ce=P.querySelector(".subject-visual-remove"))==null||ce.addEventListener("click",()=>{var G;const ne=(G=P.querySelector(".subject-visual-key"))==null?void 0:G.value.trim();ne&&delete l[ne],P.remove(),W()}),(oe=P.querySelector(".subject-visual-upload"))==null||oe.addEventListener("change",async ne=>{var le,X,ee;const G=(le=ne.target.files)==null?void 0:le[0];if(!G)return;if(G.type!=="image/png"){N("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),ne.target.value="";return}const J=((X=P.querySelector(".subject-visual-key"))==null?void 0:X.value.trim())||((ee=P.dataset.subjectVisualOriginal)==null?void 0:ee.trim());if(!J){N("กรุณาระบุคีย์ก่อนอัปโหลด เช่น code:ค33102","warning"),ne.target.value="";return}const de=J.replace(/[^a-zA-Z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,80)||`icon-${Date.now()}`;ne.target.disabled=!0;try{const pe=await xs(`subject-visuals/${de}`,G);P.dataset.imageUrl=pe;const ye=P.querySelector(".subject-visual-value");ye&&(ye.value="");const be=P.querySelector(".subject-visual-preview");be&&(be.innerHTML=`<img src="${te(pe)}" alt="" class="w-full h-full object-contain" />`),W(),N("อัปโหลดไอคอนรายวิชาสำเร็จ · กดบันทึกเพื่อใช้งาน","success")}catch(pe){N("อัปโหลดไอคอนไม่สำเร็จ: "+he(pe),"error")}finally{ne.target.disabled=!1,ne.target.value=""}})};document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"]').forEach(Y),(Ue=document.querySelector("[data-subject-visual-add]"))==null||Ue.addEventListener("click",()=>{var oe;const P=document.querySelector("[data-subject-visual-custom-list]");if(!P)return;const ce=document.createElement("div");ce.setAttribute("data-subject-visual-row","true"),ce.className="rounded-2xl border border-gray-200 bg-gray-50/70 p-3",ce.innerHTML=`<div class="flex flex-col sm:flex-row sm:items-center gap-3">
          <div class="subject-visual-preview flex-shrink-0 w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-4xl overflow-hidden shadow-sm">✨</div>
          <div class="min-w-0 flex-1 space-y-1.5">
            <input type="text" class="subject-visual-key input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="เช่น code:ค33102 หรือ dept:MATH" />
            <input type="text" class="subject-visual-value input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" maxlength="8" placeholder="ใส่อิโมจิ เช่น 🇹🇭 หรือ 📘" />
          </div>
          <label class="cursor-pointer inline-flex flex-shrink-0 items-center justify-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50 transition">📁 PNG<input type="file" accept="image/png" class="hidden subject-visual-upload" /></label>
          <button type="button" class="subject-visual-remove flex-shrink-0 px-2 py-2 rounded-xl text-xs text-red-500 hover:bg-red-50">ลบ</button>
        </div>`,P.appendChild(ce),Y(ce),(oe=ce.querySelector(".subject-visual-key"))==null||oe.focus()});const D=()=>{const ce=[...document.querySelectorAll("#feat-editor .feat-row")].map(ne=>{var le,X;const G=((le=ne.querySelector(".feat-icon"))==null?void 0:le.value.trim())||"✨",J=((X=ne.querySelector(".feat-text"))==null?void 0:X.value.trim())||"",de=ne.dataset.minTier||"1";return J?`${G}|${J}|${de}`:null}).filter(Boolean).join(`
`),oe=document.getElementById("cfg-donationSpecialFeatures");oe&&(oe.value=ce)},V=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],K=P=>{var ce,oe,ne;P.querySelectorAll(".feat-tier-btn").forEach(G=>{G.addEventListener("click",()=>{const J=parseInt(G.dataset.n);P.dataset.minTier=String(J),P.querySelectorAll(".feat-tier-btn").forEach(de=>{const le=parseInt(de.dataset.n);de.style.cssText=le===J?`border:2px solid ${V[le-1]};color:${V[le-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),D()})}),(ce=P.querySelector(".feat-icon"))==null||ce.addEventListener("input",D),(oe=P.querySelector(".feat-text"))==null||oe.addEventListener("input",D),(ne=P.querySelector(".feat-del"))==null||ne.addEventListener("click",()=>{P.remove(),D()})};document.querySelectorAll("#feat-editor .feat-row").forEach(K),(Qe=document.getElementById("feat-add"))==null||Qe.addEventListener("click",()=>{var ne;const P=document.getElementById("feat-editor");if(!P)return;const ce=P.children.length,oe=document.createElement("div");oe.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",oe.dataset.idx=ce,oe.dataset.minTier="1",oe.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(G=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${G===1?`border:2px solid ${V[0]};color:${V[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${G}" title="ระดับ ${G}">${G}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,P.appendChild(oe),K(oe),(ne=oe.querySelector(".feat-text"))==null||ne.focus()}),document.querySelectorAll(".pkg-stab").forEach(P=>{P.addEventListener("click",()=>{var oe;const ce=P.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(ne=>{ne.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${ne.dataset.pstab===ce?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(ne=>ne.classList.add("hidden")),(oe=document.getElementById(`pkg-panel-${ce}`))==null||oe.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(P=>{P.addEventListener("change",async ce=>{const oe=ce.target.files[0];if(!oe)return;if(oe.type!=="image/png"){N("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),P.value="";return}const ne=P.dataset.skey,G=P.dataset.n;P.disabled=!0;try{const J=await xs(ne,oe),de=document.getElementById(`cfg-${ne}`);de&&(de.value=J),await Ee(ne,J);const le=document.getElementById(`sticker-prev-${G}`);if(le){const X=document.createElement("img");X.src=J,X.className="w-full h-full object-contain",le.replaceWith(X),X.id=`sticker-prev-${G}`}N(`อัปโหลดสติกเกอร์ ${G} สำเร็จ ✅`,"success")}catch(J){N("อัปโหลดไม่สำเร็จ: "+he(J),"error")}finally{P.disabled=!1}})});const Q=P=>{const ce=String(P.donationStickerTiers??"").trim(),oe=parseInt(P.donationMinAmount??99)||99,ne=parseInt(P.donationAmountStep??50)||50;return(ce?ce.split(`
`).filter(Boolean).map(de=>{const[le,X,ee,pe,ye]=de.split("|").map(be=>be.trim());return{amount:parseInt(le)||0,sticker:X||"🏅",title:ee||"",note:pe||"",color:ye||""}}).filter(de=>de.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([de,le,X,ee,pe])=>({amount:de,sticker:le,title:X,note:ee,color:pe}))).sort((de,le)=>de.amount-le.amount).map((de,le)=>{const X=(P[`donationStickerImg${le+1}`]??"").trim();return X&&/^https?:\/\//.test(X)?{...de,sticker:X}:de})},Z=P=>{const ce=String(P.donationSpecialFeatures??"").trim(),oe=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return ce?ce.split(`
`).filter(Boolean).map(ne=>{const G=ne.split("|").map(J=>J.trim());return{icon:G[0]||"✨",text:G[1]||G[0]||ne,minTier:parseInt(G[2])||1}}).filter(ne=>ne.text):oe.map(([ne,G,J])=>({icon:ne,text:G,minTier:J}))},se=(P,ce,oe,ne=4)=>{var ye;(ye=document.getElementById("tier-preview-modal"))==null||ye.remove();const G=P.color||"#f59e0b",J=parseInt(G.slice(1,3),16),de=parseInt(G.slice(3,5),16),le=parseInt(G.slice(5,7),16),X=String(P.sticker??""),ee=/^https?:\/\//.test(X)?`<img src="${X}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${X}</div>`,pe=document.createElement("div");pe.id="tier-preview-modal",pe.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",pe.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${J},${de},${le},0.85),rgba(${J},${de},${le},1))">
              ${ee}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${P.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${P.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${oe}
              </div>
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษที่คุณครูได้รับ</p>
                <div class="space-y-1.5">
                  ${ce.map(be=>ne>=(be.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${be.icon}</span><span>${be.text}</span></div>`:`<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${be.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${be.minTier}+</span></div>`).join("")}
                </div>
              </div>
              ${P.note?`<p class="text-xs text-center text-gray-400 italic">"${P.note}"</p>`:""}
              <p class="text-[10px] text-gray-400 text-center leading-relaxed">
                ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
                คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
              </p>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <p class="text-[10px] text-center text-amber-500 mb-2 font-semibold">🔧 โหมดตัวอย่าง (Admin)</p>
              <button class="w-full py-2.5 rounded-2xl text-white font-bold text-sm"
                style="background:rgba(${J},${de},${le},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(pe),pe.addEventListener("click",be=>{be.target===pe&&pe.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(P=>{P.addEventListener("click",()=>{const ce=parseInt(P.dataset.tier),oe={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(le=>{const X=le.id.replace(/^cfg-/,"");oe[X]=le.value??le.dataset.on});const ne=Q(oe),G=Z(oe),J=ne[ce-1]??ne[0];if(!J){N("ยังไม่มีข้อมูล tier","warning");return}const de=(oe.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;se(J,G,de,ce)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.skey,oe=P.dataset.n;await Ee(ce,"").catch(()=>{});const ne=document.getElementById(`cfg-${ce}`);ne&&(ne.value="");const G=document.getElementById(`sticker-prev-${oe}`);G&&(G.outerHTML=`<span id="sticker-prev-${oe}" class="text-2xl text-gray-300">🏅</span>`),P.remove(),N("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(P=>{P.addEventListener("click",()=>{const ce=P.dataset.stab;document.querySelectorAll(".school-stab").forEach(oe=>{oe.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${oe.dataset.stab===ce?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",ce!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",ce!=="porwor")})});const ae=document.getElementById("btn-sync-students-now"),me=document.getElementById("btn-download-student-sync-template");me&&me.addEventListener("click",()=>{const ce="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(J=>J.map(de=>`"${String(de).replace(/"/g,'""')}"`).join(",")).join(`
`),oe=new Blob([ce],{type:"text/csv;charset=utf-8"}),ne=URL.createObjectURL(oe),G=document.createElement("a");G.href=ne,G.download="pp5-students-sync-template.csv",document.body.appendChild(G),G.click(),G.remove(),URL.revokeObjectURL(ne),N("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const ue=document.getElementById("btn-start-new-semester"),_e=document.getElementById("start-new-semester-target");if(ue){const P=parseInt(e.semester??1),ce=parseInt(e.academicYear??new Date().getFullYear()+543),oe=P===1?2:1,ne=P===1?ce:ce+1;_e&&(_e.textContent=`ตอนนี้: ภาคเรียนที่ ${P}/${ce}  →  จะขึ้นเป็น: ภาคเรียนที่ ${oe}/${ne}`),ue.addEventListener("click",async()=>{var de,le,X;const G=((de=document.getElementById("start-new-semester-start"))==null?void 0:de.value)??"",J=((le=document.getElementById("start-new-semester-end"))==null?void 0:le.value)??"";if(!G||!J||J<G){N("กรุณาระบุวันเปิด-ปิดภาคเรียนใหม่ให้ถูกต้อง","warning");return}ue.disabled=!0,ue.textContent="⏳ กำลังตรวจสอบไฟล์สำรอง...";try{const ee=await nd(ce,P);if(!ee){N("กรุณาสร้างไฟล์สำรองที่ตรวจสอบแล้วของภาคเรียนปัจจุบันก่อน","warning"),(X=document.querySelector('.cfg-tab[data-tab="term-data"]'))==null||X.click(),ue.disabled=!1,ue.textContent="🔄 ขึ้นภาคเรียนใหม่";return}ue.textContent="⏳ กำลังดำเนินการ...";const pe=await go(ne,oe,G,J);if(!await Zd({year:ne,semester:oe,start:G,end:J,preview:pe})){ue.disabled=!1,ue.textContent="🔄 ขึ้นภาคเรียนใหม่";return}const be=Xd(),ve=Number((pe==null?void 0:pe.attendances_to_clear)??0),xe=Number((pe==null?void 0:pe.prayer_records_to_clear)??0),we=ve+xe;let fe=0;const ke=async(Ce,Be,lt)=>{let Ke=!0,gt=0;for(;Ke;){be.update(`กำลังล้าง${Be}: ${fe.toLocaleString()} / ${we.toLocaleString()} รายการ`,we?fe*100/we:90);const Ze=await bo(Ce,ee,5e3),bt=Number((Ze==null?void 0:Ze.deleted_rows)??0);if(fe+=bt,Ke=!!(Ze!=null&&Ze.has_more),bt===0&&Ke){if(gt+=1,gt>=3)throw new Error(`พบข้อมูล${Be}ที่ยังล้างไม่สำเร็จ กรุณาลองดำเนินการต่ออีกครั้ง`);await new Promise(Ht=>setTimeout(Ht,500*gt))}else gt=0;const qe=lt===0||!Ke,Je=we?Math.min(90,fe*90/we):90;be.update(qe?`ล้าง${Be}แล้ว ${fe.toLocaleString()} / ${we.toLocaleString()} รายการ`:`กำลังล้าง${Be}: ${fe.toLocaleString()} / ${we.toLocaleString()} รายการ`,Je)}};try{await ke("attendances","ข้อมูลเข้าเรียน",ve),await ke("prayer_records","คะแนนละหมาด",xe),be.update("กำลังบันทึกภาคเรียนใหม่และตั้งค่าสิทธิ์...",95),await yo(ne,oe,G,J,ee,!0),be.update("ขึ้นภาคเรียนใหม่สำเร็จ",100)}finally{be.close()}e.semester=String(oe),e.academicYear=String(ne),e.semester_start=G,e.semester_end=J,e.unlimitedTeacherClassCreation="true",N(`ขึ้นภาคเรียนที่ ${oe}/${ne} สำเร็จ ✅ สำรองข้อมูลแล้ว ล้างข้อมูลเข้าเรียน/ละหมาด และเปิดให้ครูสร้างห้องได้ไม่จำกัด`,"success"),Qa()}catch(ee){const pe=(ee==null?void 0:ee.code)==="57014"?"คำสั่งใช้เวลานานเกินกำหนด ข้อมูลที่ล้างสำเร็จแล้วยังอยู่ในไฟล์สำรอง กดขึ้นภาคเรียนใหม่อีกครั้งเพื่อทำต่อจากรายการที่เหลือ":he(ee);N("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+pe,"error"),ue.disabled=!1,ue.textContent="🔄 ขึ้นภาคเรียนใหม่"}})}const Ie=P=>{const ce=document.getElementById("student-sync-log-section"),oe=document.getElementById("student-sync-log-content");if(!ce||!oe)return;const ne=new Date(P.synced_at),G=ne.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),J=ne.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),de=P.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",le=(P.new_students||[]).map(ee=>`<span class="text-green-700">${ee.full_name} (${ee.student_code})</span>`).join(", ")||"—",X=(P.deactivated_students||[]).map(ee=>`<span class="text-red-500">${ee.full_name} (${ee.student_code})</span>`).join(", ")||"—";oe.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${G} ${J}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${de}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${P.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${P.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${P.new_count} คน:</span> ${le}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${P.deactivated_count} คน:</span> ${X}
          </div>`,ce.classList.remove("hidden")},Te=async()=>{try{const{data:P}=await ie.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();P&&Ie(P)}catch{}};Te(),ae&&ae.addEventListener("click",async()=>{var G,J,de,le,X,ee,pe,ye,be;const P=((J=(G=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:G.value)==null?void 0:J.trim())||"",ce=((le=(de=document.getElementById("cfg-studentSyncTabName"))==null?void 0:de.value)==null?void 0:le.trim())||"",oe=((ee=(X=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:X.value)==null?void 0:ee.trim())||"1",ne=document.getElementById("student-sync-status");ne&&(ne.textContent="กำลังตรวจสอบแหล่งข้อมูล ยังไม่บันทึกรายชื่อนักเรียน"),ae.disabled=!0,ae.textContent="กำลังตรวจสอบแหล่งข้อมูล...";try{if(!/^[a-zA-Z0-9_-]{20,}$/.test(P)&&!/^https:\/\/docs\.google\.com\/spreadsheets\/d\/[a-zA-Z0-9_-]{20,}/.test(P))throw new Error("กรุณาระบุ Google Sheet ID หรือ URL ที่ถูกต้อง");if(!Number.isInteger(Number(oe))||Number(oe)<1)throw new Error("แถวหัวตารางต้องเป็นจำนวนเต็มตั้งแต่ 1");const ve={sourceSheetId:P,tabName:ce,headerRow:oe},xe=await Ko(ve);if(ne&&(ne.textContent=`ตรวจสอบสำเร็จ: ใช้ได้ ${xe.valid} คน / รหัสซ้ำ ${xe.duplicateCount} แถว`),!await Qd(xe)){ne&&(ne.textContent="ยกเลิกแล้ว ยังไม่บันทึกรายชื่อนักเรียน");return}await Promise.all([Ee("studentSyncSheetId",P),Ee("studentSyncTabName",ce),Ee("studentSyncHeaderRow",oe)]),ae.textContent="กำลังบันทึกข้อมูลนักเรียน...";const we=await Jo({...ve,expectedFingerprint:xe.fingerprint}),fe=`ซิงก์สำเร็จ: อ่าน ${we.read??0} แถว / บันทึก ${we.written??0} คน / ใหม่ ${we.newCount??0} คน ✅`;ne&&(ne.textContent=fe+((pe=we.warnings)!=null&&pe.length?" — "+we.warnings.join(" / "):"")),N((ye=we.warnings)!=null&&ye.length?fe+" — "+we.warnings.join(" / "):fe,(be=we.warnings)!=null&&be.length?"warning":"success"),Te()}catch(ve){const xe="ซิงก์นักเรียนไม่สำเร็จ: "+he(ve)+(ve.mayHaveWritten?" — งานอาจบันทึกบางส่วนแล้ว กรุณาตรวจประวัติการซิงก์ก่อนลองใหม่":"");ne&&(ne.textContent=xe),N(xe,"error")}finally{ae.disabled=!1,ae.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(P=>{P.addEventListener("change",async ce=>{var J,de,le,X;const oe=ce.target.files[0];if(!oe)return;const ne=P.dataset.key,G=document.getElementById(`cfg-${ne}`);P.disabled=!0;try{const ee=await ll(ne,oe),pe=/(?:LogoUrl|LogoBwUrl)$/.test(ne)?`${ee}${ee.includes("?")?"&":"?"}v=${Date.now()}`:ee;G&&(G.value=pe),await Ee(ne,pe),N("อัปโหลดสำเร็จ ✅","success");const ye=(J=P.closest(".flex"))==null?void 0:J.querySelector("img"),be=(de=P.closest(".flex"))==null?void 0:de.querySelector("div.w-14");ye?ye.src=pe:be&&(be.outerHTML=`<img src="${pe}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`),(X=(le=P.closest(".flex"))==null?void 0:le.querySelector(".cfg-upload-clear"))==null||X.classList.remove("hidden")}catch(ee){N("อัปโหลดไม่สำเร็จ: "+he(ee),"error")}finally{P.disabled=!1}})}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-clear").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.key;if(!(!ce||!confirm("ต้องการล้างโลโก้นี้ออกจากการตั้งค่าหรือไม่?"))){P.disabled=!0;try{await Ee(ce,"");const oe=P.closest(".flex"),ne=document.getElementById(`cfg-${ce}`);ne&&(ne.value="");const G=oe==null?void 0:oe.querySelector("img");G&&(G.outerHTML='<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'),P.classList.add("hidden"),N("ล้างโลโก้แล้ว ✅","success")}catch(oe){N("ล้างโลโก้ไม่สำเร็จ: "+he(oe),"error")}finally{P.disabled=!1}}})})};document.querySelectorAll(".cfg-tab").forEach(v=>v.addEventListener("click",()=>f(v.dataset.tab))),f(w),window._syncPositionToField=async(v,h,I)=>{const u=I.textContent;I.disabled=!0,I.textContent="กำลังดึง...";try{const p=n.find(_=>_.position===v);if(!p){N(`ยังไม่มีครูที่กำหนดบทบาท "${v}"`,"warning");return}const j=document.getElementById(`cfg-${h}`);j&&(j.value=p.full_name,j.dispatchEvent(new Event("input")),N(`ดึงชื่อ "${p.full_name}" สำเร็จ`,"success"))}catch{N("ดึงข้อมูลไม่สำเร็จ","error")}finally{I.disabled=!1,I.textContent=u}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const v=document.getElementById("cfg-save-btn");document.getElementById("cfg-subjectVisuals")&&document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"] .subject-visual-key, #cfg-panel-inner [data-subject-visual-row="true"] .subject-visual-value').forEach(I=>I.dispatchEvent(new Event("input")));const h=document.querySelectorAll("#cfg-panel-inner [data-key]:not(.cfg-upload-file):not(.cfg-upload-clear)");v.disabled=!0,v.textContent="กำลังบันทึก...";try{await Promise.all([...h].map(I=>{const u=I.tagName==="BUTTON"?I.dataset.on??"false":I.value;return Ee(I.dataset.key,u)})),await Qs("admin",{},!0),N("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch(I){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",I),N("บันทึกไม่สำเร็จ: "+((I==null?void 0:I.message)||"ไม่ทราบสาเหตุ"),"error")}finally{v.disabled=!1,v.textContent="บันทึก"}})}catch{N("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function Tr(){Le("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",$e(`<div class="max-w-6xl mx-auto animate-fade">
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
    </table>`}}async function ma(){Le("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",$e(`<div class="max-w-2xl mx-auto animate-fade">
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
`?(t.push(n),s.push(t),t=[],n=""):d!=="\r"&&(n+=d)}if((n||t.length)&&(t.push(n),s.push(t)),s.length<2)return[];const o=s[0].map(r=>r.trim()),x=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return s.slice(1).map(r=>{const d=Object.fromEntries(o.map((a,m)=>[a,r[m]??""])),i={};return x.forEach(a=>{const m=String(d[a]??"").trim();if(a==="item_no"){const w=Number(m);i[a]=m&&Number.isFinite(w)?w:null}else i[a]=m||null}),i}).filter(r=>r.subject_name||r.subject_code||r.standard_text||r.indicator_text||r.learning_outcome_text)}function Fe(e,s,t="",n="text"){const l=n==="textarea"?`<textarea name="${e}" rows="3" dir="auto" class="${Ve} w-full min-h-[92px] resize-y">${te(t)}</textarea>`:`<input name="${e}" value="${te(t)}" dir="auto" class="${Ve} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${s}</span>
    ${l}
  </label>`}async function _t(){var e;Le("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",$e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let s=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[t,n]=await Promise.all([Tn(s),ot().catch(()=>[])]),l=Oe([...n.map(a=>a.dept_name),...n.map(a=>a.dept_code),...t.map(a=>a.dept)]),o=Oe(t.map(a=>a.grade_level)),x=Object.fromEntries(t.map(a=>[a.id,a]));window._curriculumRows=x;const r=(a={})=>{const m=!!a.id,w=document.createElement("div");w.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",w.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${m?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${Fe("subject_name","ชื่อรายวิชา",a.subject_name)}
            ${Fe("subject_code","รหัสวิชา",a.subject_code)}
            ${Fe("dept","กลุ่มสาระ/กลุ่มวิชา",a.dept)}
            ${Fe("grade_level","ระดับชั้น",a.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${Fe("strand","สาระ",a.strand)}
            ${Fe("topic","เรื่อง/สาระการเรียนรู้",a.topic)}
            ${Fe("item_no","ลำดับข้อ",a.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${Fe("standard_code","รหัสมาตรฐาน",a.standard_code)}
            ${Fe("indicator_code","รหัสตัวชี้วัด",a.indicator_code)}
          </div>
          ${Fe("standard_text","มาตรฐานการเรียนรู้",a.standard_text,"textarea")}
          ${Fe("indicator_text","ตัวชี้วัด",a.indicator_text,"textarea")}
          ${Fe("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",a.learning_outcome_text,"textarea")}
          ${Fe("source_note","แหล่งที่มา/หมายเหตุ",a.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(w),w.querySelectorAll("[data-close]").forEach(f=>f.addEventListener("click",()=>w.remove())),w.querySelector("#curriculum-form").addEventListener("submit",async f=>{f.preventDefault();const v=new FormData(f.currentTarget),h={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(p=>{h[p]=String(v.get(p)??"").trim()||null});const I=String(v.get("item_no")??"").trim(),u=Number(I);h.item_no=I&&Number.isFinite(u)?u:null;try{m?await jn(a.id,h):await Bn(h),N("บันทึกข้อมูลหลักสูตรแล้ว","success"),w.remove(),await _t()}catch(p){N(p.message||"บันทึกไม่สำเร็จ","error")}})},d=()=>{const a=document.createElement("div"),m="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";a.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
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
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${Ve} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${Ve} w-full font-mono text-xs" placeholder="${m}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(a),a.querySelectorAll("[data-close]").forEach(w=>w.addEventListener("click",()=>a.remove())),a.querySelector("#curriculum-csv-file").addEventListener("change",w=>{var h;const f=(h=w.target.files)==null?void 0:h[0];if(!f)return;const v=new FileReader;v.onload=()=>{a.querySelector("#curriculum-csv-text").value=v.result||""},v.readAsText(f)}),a.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const w=gi(a.querySelector("#curriculum-csv-text").value);if(!w.length)return N("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const f=await qn(w);N(`นำเข้าแล้ว ${f} รายการ`,"success"),a.remove(),await _t()}catch(f){N(f.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>r(),window._curriculumEdit=a=>{var m;return r(((m=window._curriculumRows)==null?void 0:m[a])||{})},window._curriculumDelete=async a=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await An(a),N("ลบข้อมูลแล้ว","success"),await _t()}catch(m){N(m.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=d,$e(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
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
        <input id="cur-filter-q" value="${te(s.q)}" class="${Ve}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${te(s.subjectCode)}" class="${Ve}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${je}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${l.map(a=>`<option value="${te(a)}" ${a===s.dept?"selected":""}>${te(a)}</option>`).join("")}
        </select>
        <select id="cur-filter-grade" class="${je}">
          <option value="">ทุกระดับชั้น</option>
          ${o.map(a=>`<option value="${te(a)}" ${a===s.gradeLevel?"selected":""}>${te(a)}</option>`).join("")}
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
                  <div class="font-semibold text-gray-900">${te(a.subject_name||"ไม่ระบุวิชา")}</div>
                  <div class="text-indigo-500 font-mono">${te(a.subject_code||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${te(a.dept||"—")} · ${te(a.grade_level||"ทุกชั้น")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${te(a.topic||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${te(a.strand||"")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${te(a.standard_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${te(a.standard_text||"—")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${te(a.indicator_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${te(a.indicator_text||a.learning_outcome_text||"—")}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${Ge(a.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${Ge(a.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const i=()=>{var a,m,w,f;s={q:((a=document.getElementById("cur-filter-q"))==null?void 0:a.value)||"",subjectCode:((m=document.getElementById("cur-filter-code"))==null?void 0:m.value)||"",dept:((w=document.getElementById("cur-filter-dept"))==null?void 0:w.value)||"",gradeLevel:((f=document.getElementById("cur-filter-grade"))==null?void 0:f.value)||""},window._curriculumFilters=s,_t()};["cur-filter-q","cur-filter-code"].forEach(a=>{var m;(m=document.getElementById(a))==null||m.addEventListener("keydown",w=>{w.key==="Enter"&&i()})}),["cur-filter-dept","cur-filter-grade"].forEach(a=>{var m;(m=document.getElementById(a))==null||m.addEventListener("change",i)}),(e=document.getElementById("cur-filter-submit"))==null||e.addEventListener("click",i)}catch(s){$e(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${te(s.message||s)}
    </div>`)}}async function St(){var e;Le("subjects"),document.getElementById("page-title").textContent="คอร์สและห้องเรียน",$e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,t,n,l,o]=await Promise.all([ra(),na(),Re().catch(()=>[]),ot().catch(()=>[]),Me().catch(()=>({}))]),x=Object.fromEntries(n.map(B=>[B.id,B])),r=Object.fromEntries(l.map(B=>[B.dept_code,B])),d=Object.fromEntries(l.map(B=>[B.dept_name,B])),i=B=>{var b;return{...B,_teacher_name:((b=x[B.teacher_id])==null?void 0:b.full_name)??""}},a=Number(o.academicYear??o.academic_year??new Date().getFullYear()+543),m=Number(o.semester??1),w=B=>Number(B==null?void 0:B.academic_year)===a&&Number(B==null?void 0:B.semester)===m,f=s.filter(w).map(i),v=t.filter(w).map(B=>{var b;return{...B,master_subjects:B.master_subjects?{...B.master_subjects,_teacher_name:((b=x[B.master_subjects.teacher_id])==null?void 0:b.full_name)??""}:B.master_subjects}}),h=Oe(f.map(B=>B.dept)),I=Oe(f.map(B=>B.skill_group));let u={sheetId:o.subjectSyncSheetId||Go,tabName:o.subjectSyncTabName||va,keyField:o.subjectSyncKeyField||is,columns:(()=>{try{const B=JSON.parse(o.subjectSyncColumns||"null");return Array.isArray(B)&&B.length?B:ha}catch{return ha}})()};$e(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${te(u.tabName||va)}
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
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${Ve} flex-1 min-w-40" />
          <select id="subf-dept" class="${je}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${h.map(B=>`<option value="${B}">${B}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${je}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${I.map(B=>`<option value="${B}">${B}</option>`).join("")}
          </select>
          <select id="subf-subg" class="${je}">
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
    </div>`);let j="course";const _=()=>{const B=document.getElementById("sub-action-btn");B&&(B.innerHTML=j==="course"?"<span>＋</span> เพิ่มคอร์ส":j==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const b=document.getElementById("btn-sync-subjects-central");b&&(b.textContent=`↑ ซิงค์รายวิชา → ${u.tabName||va}`)},C=()=>f.map(B=>{const b=x[B.teacher_id]??{},c=r[B.dept]??d[B.dept]??{},g=b.full_name??"",$=B.subject_name??"",y=B.subject_code??"";return{subject_group:B.subject_group??"",sbJect:`${$}_(${y})_${g}`,subject_name:$,subject_code:y,credit:B.credit??"",year:o.academicYear??"",semester:o.semester??"",grade_level:B.grade_level??"",teacher_name:g,teacher_code:b.teacher_code??"",dept_name:c.dept_name??B.dept??"",dept_code:c.dept_code??B.dept??""}}),L=()=>{var b;const B=new Set(u.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${te(u.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${te(u.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${cs.map(c=>`
                <option value="${te(c.key)}" ${u.keyField===c.key?"selected":""}>
                  ${te(c.key)} - ${te(c.label)}
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
            ${cs.map(c=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${te(c.key)}" ${B.has(c.key)?"checked":""} />
                <span>
                  <span class="font-semibold">${te(c.key)}</span>
                  <span class="block text-xs text-gray-400">${te(c.label)}</span>
                </span>
              </label>
            `).join("")}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`,(b=document.getElementById("subject-sync-select-defaults"))==null||b.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach(c=>{c.checked=ha.includes(c.value)})})},q=()=>{var $;if(($=document.getElementById("subject-filter-bar"))==null||$.classList.toggle("hidden",j==="sync"),_(),j==="sync"){L();return}const B=document.getElementById("subf-q").value.toLowerCase(),b=document.getElementById("subf-dept").value,c=document.getElementById("subf-skill").value,g=document.getElementById("subf-subg").value;if(j==="course"){const y=f.filter(k=>(!B||[k.subject_code,k.subject_name,k.dept].some(S=>(S??"").toLowerCase().includes(B)))&&(!b||k.dept===b)&&(!c||k.skill_group===c)&&(!g||k.subject_group===g));document.getElementById("subf-count").textContent=y.length,Za(y)}else{const y=v.filter(k=>{var S,A;return(!B||(k.class_name??"").toLowerCase().includes(B)||(((S=k.master_subjects)==null?void 0:S.subject_name)??"").toLowerCase().includes(B))&&(!b||((A=k.master_subjects)==null?void 0:A.dept)===b)});document.getElementById("subf-count").textContent=y.length,bi(y)}};window._subAction=async()=>{var B,b,c;if(j==="course")al(null,async(g,$=[])=>{await Mn(g,$),await St()});else if(j==="class")yi();else{const g=((B=document.getElementById("subject-sync-sheet-id"))==null?void 0:B.value.trim())??"",$=((b=document.getElementById("subject-sync-tab-name"))==null?void 0:b.value.trim())??"",y=((c=document.getElementById("subject-sync-key-field"))==null?void 0:c.value)??is,k=[...document.querySelectorAll(".subject-sync-col:checked")].map(E=>E.value),S=k.includes(y)?k:[y,...k];if(!g||!$){N("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!S.length){N("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const A=document.getElementById("sub-action-btn"),H=A==null?void 0:A.innerHTML;A&&(A.disabled=!0,A.textContent="กำลังบันทึก...");try{await Promise.all([Ee("subjectSyncSheetId",g),Ee("subjectSyncTabName",$),Ee("subjectSyncKeyField",y),Ee("subjectSyncColumns",JSON.stringify(S))]),u={sheetId:g,tabName:$,keyField:y,columns:S},_(),N("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(E){N("บันทึกตั้งค่าไม่สำเร็จ: "+he(E),"error")}finally{A&&(A.disabled=!1,A.innerHTML=H),_()}}},window._adminRegisterClass=async B=>{const b=f.find(c=>c.id===B);b?el(null,b):N("ไม่พบคอร์ส","error")},window._adminEditClass=B=>{var c;const b=(c=window._adminClassCache)==null?void 0:c[B];b?Ys(null,b):N("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(B,b)=>{window._goBack=()=>St(),tl(null,B,b)},window._adminDeleteClass=async(B,b)=>{if(confirm(`ยืนยันลบ "${b}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await Ds(B),N(`ลบ "${b}" แล้ว`,"success"),q()}catch(c){N("ลบไม่สำเร็จ: "+he(c),"error")}},(e=document.getElementById("btn-sync-subjects-central"))==null||e.addEventListener("click",async B=>{const b=B.currentTarget,c=b.textContent;try{b.disabled=!0,b.textContent="กำลังซิงค์...";const g=await Wo(C(),{sheetId:u.sheetId,tabName:u.tabName,headers:u.columns,keyField:u.keyField});N(`ส่งคำสั่งซิงค์รายวิชา ${g} รายการไปแท็บ ${u.tabName} แล้ว`,"success")}catch(g){N("ซิงค์รายวิชาไม่สำเร็จ: "+he(g),"error")}finally{b.disabled=!1,b.textContent=c}}),window._switchSubjectTab=B=>{j=B,document.getElementById("stab-course").className=B==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=B==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=B==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",q()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(B=>{var b,c;(b=document.getElementById(B))==null||b.addEventListener("input",q),(c=document.getElementById(B))==null||c.addEventListener("change",q)}),q()}catch{N("โหลดรายวิชาไม่สำเร็จ","error")}}function Za(e){const s=document.getElementById("subject-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
          ${t.teacher_id?`<button onclick="window._adminViewSchedule(${t.teacher_id},'${Ge(t._teacher_name||t.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
          <button onclick="openSubjectModal(${t.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${t.id},'${Ge(t.subject_name)}')"
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
          ${(x=t.master_subjects)!=null&&x.teacher_id?`<button onclick="window._adminViewSchedule(${t.master_subjects.teacher_id},'${Ge(t.master_subjects._teacher_name||t.master_subjects.subject_name||t.class_name)}')"
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
  </table></div>`}}async function jr(){var j,_;Le("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),n=await oa().catch(()=>[]),l=new Map;for(const C of n){const L=parseInt(C.academic_year),q=parseInt(C.semester);Number.isInteger(L)&&Number.isInteger(q)&&l.set(`${q}/${L}`,{...C,academic_year:L,semester:q})}l.has(`${t}/${s}`)||l.set(`${t}/${s}`,{academic_year:s,semester:t,is_current:!0,status:"current"});const o=[...l.values()].sort((C,L)=>Number(L.academic_year)-Number(C.academic_year)||Number(L.semester)-Number(C.semester)),x=o.find(C=>C.academic_year===s&&C.semester===t)??o.find(C=>C.is_current)??o[0];let r=x.academic_year,d=x.semester;$e(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const[i,a,m]=await Promise.all([Re().catch(()=>[]),Nn().catch(()=>[]),Hs().catch(()=>[])]);let w="สามัญ";const f=()=>{document.querySelectorAll(".hr-term-tab").forEach(L=>{const q=L.dataset.hrTerm===`${d}/${r}`;L.className=q?"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white transition":"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"});const C=document.getElementById("hr-term-label");C&&(C.textContent=`ภาคเรียน ${d}/${r}`)},v=C=>Object.fromEntries(C.filter(L=>L.category===w).map(L=>[L.main_room,L])),h=()=>{document.querySelectorAll(".hr-tab").forEach(C=>{const L=C.dataset.hrTab===w;C.className=L?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},I=async()=>{f(),h();const C=await Ft(r,d),L=v(C),q=w==="สามัญ"?a:m,B=document.getElementById("homeroom-table-wrap");if(!q.length){B.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${w}</p></div>`;return}B.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${q.map(b=>{var g,$;const c=L[b];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${b}</td>
          <td class="px-5 py-3 text-gray-600">
            ${c?`<span class="font-medium text-gray-800">${((g=c.teachers)==null?void 0:g.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${($=c.teachers)!=null&&$.teacher_code?`(${c.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${Ge(b)}','${w}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${Ge(b)}','${w}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${c?"เปลี่ยน":"เลือกครู"}</button>
            ${c?`<button onclick="window._deleteHomeroom(${c.id},'${Ge(b)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await I(),window._deleteHomeroom=async(C,L)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${L}?`))try{await Dn(C),N("ลบแล้ว","success"),await I()}catch{N("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(C,L)=>{var y;(y=document.getElementById("hr-picker"))==null||y.remove();let q=null;const B=document.createElement("div");B.id="hr-picker",B.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",B.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${L} · ห้อง ${C}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${je}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${je}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`,document.body.appendChild(B);const b=B.querySelector("#hrp-results"),c=B.querySelector("#hrp-save"),g=k=>{b.innerHTML=k.length?k.slice(0,20).map(S=>`
          <button type="button" data-id="${S.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${S.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${S.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',b.querySelectorAll(".hrp-option").forEach(S=>{S.addEventListener("click",()=>{q=i.find(A=>String(A.id)===S.dataset.id),b.querySelectorAll(".hrp-option").forEach(A=>A.classList.remove("bg-emerald-50","text-emerald-700")),S.classList.add("bg-emerald-50","text-emerald-700"),c.disabled=!1})})},$=()=>{const k=B.querySelector("#hrp-code").value.trim().toLowerCase(),S=B.querySelector("#hrp-name").value.trim().toLowerCase();g(i.filter(A=>(!k||(A.teacher_code??"").toLowerCase().includes(k))&&(!S||(A.full_name??"").toLowerCase().includes(S))))};B.querySelector("#hrp-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",k=>{k.target===B&&B.remove()}),B.querySelector("#hrp-code").addEventListener("input",$),B.querySelector("#hrp-name").addEventListener("input",$),c.addEventListener("click",async()=>{if(q){c.disabled=!0,c.textContent="กำลังบันทึก...";try{await zs({teacher_id:q.id,main_room:C,category:L,academic_year:r,semester:d}),N("บันทึกครูที่ปรึกษาสำเร็จ","success"),B.remove(),await I()}catch(k){N("บันทึกไม่สำเร็จ: "+he(k),"error"),c.disabled=!1,c.textContent="เลือกครูที่ปรึกษา"}}}),g(i)};const u=()=>{const C=[...i].sort((L,q)=>String(L.full_name??"").localeCompare(String(q.full_name??""),"th")).map((L,q)=>`${q+1}. ${L.teacher_code??"ไม่มีรหัส"} | ${L.full_name??"ไม่มีชื่อ"} | ${L.category??"ไม่ระบุประเภท"}`).join(`
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
${C||"ไม่พบรายชื่อครู"}`},p=()=>{var F;(F=document.getElementById("hr-ai-import-modal"))==null||F.remove();const C=document.createElement("div");C.id="hr-ai-import-modal",C.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",C.innerHTML=`
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
              <textarea id="hr-ai-prompt" readonly rows="15" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full ${je} text-xs leading-5 resize-y bg-gray-50"></textarea>
            </section>

            <section class="rounded-2xl border border-gray-200 p-4">
              <h4 class="font-semibold text-sm text-gray-800">2) วาง JSON ที่ AI สร้าง</h4>
              <p class="text-[11px] text-gray-400 mt-0.5 mb-2">รองรับ JSON ที่ครอบด้วยเครื่องหมาย \`\`\`json ... \`\`\` ด้วย</p>
              <textarea id="hr-ai-json" rows="15" class="w-full ${je} text-xs leading-5 resize-y font-mono" placeholder="วาง JSON ที่ได้จาก AI ที่นี่"></textarea>
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
      </div>`,document.body.appendChild(C);const L=C.querySelector("#hr-ai-prompt"),q=Js({copyButton:C.querySelector("#hr-ai-copy-prompt")}),B=()=>C.remove();C.querySelector("#hr-ai-close").addEventListener("click",B),C.querySelector("#hr-ai-cancel").addEventListener("click",B),C.addEventListener("click",M=>{M.target===C&&B()}),C.querySelector("#hr-ai-generate-prompt").addEventListener("click",()=>{L.value=u(),q.markGenerated(),C.querySelector("#hr-ai-copy-prompt").textContent="📋 คัดลอก",N("สร้างคำสั่ง AI รายชื่อครูที่ปรึกษาแล้ว","success")}),C.querySelector("#hr-ai-copy-prompt").addEventListener("click",async M=>{if(!q.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(L.value),M.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(M.currentTarget)&&(M.currentTarget.textContent="📋 คัดลอก")},1500)}catch{L.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}});let b=[];const c=C.querySelector("#hr-ai-error"),g=C.querySelector("#hr-ai-preview-wrap"),$=C.querySelector("#hr-ai-preview"),y=C.querySelector("#hr-ai-apply"),k=C.querySelector("#hr-ai-summary"),S=M=>String(M??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim(),A=(M,U)=>{const z=String(U??"").trim().toLowerCase();if(z){const V=i.filter(K=>String(K.teacher_code??"").trim().toLowerCase()===z);if(V.length===1)return{teacher:V[0],status:"exact",score:1};if(V.length>1)return{teacher:V[0],status:"ambiguous",score:1}}const O=kt(M),W=i.filter(V=>kt(V.full_name)===O);if(W.length===1)return{teacher:W[0],status:"exact",score:1};if(W.length>1)return{teacher:W[0],status:"ambiguous",score:1};const D=i.map(V=>({teacher:V,score:ti(M,V.full_name)})).sort((V,K)=>K.score-V.score)[0];return D&&D.score>=.72?{...D,status:"suggested"}:{teacher:null,status:"unmatched",score:(D==null?void 0:D.score)??0}},H=(M,U)=>{const z=String(M??"").trim().replace(/^ห้อง\s*/u,""),O=U==="ศาสนา"?m:a,W=z.replace(/\s+/g,"").toLowerCase();return O.find(Y=>String(Y).replace(/\s+/g,"").toLowerCase()===W)??null},E=M=>{if(!M.teacherId||!M.mainRoom)return{label:"ไม่พบข้อมูล ต้องเลือกเอง",cls:"text-red-700 bg-red-50 border-red-100"};const U=M.matchStatus==="exact"||M.teacherReviewed,z=M.roomExact||M.roomReviewed;return U&&z?{label:M.matchStatus==="exact"&&M.roomExact?"ตรงกับฐานข้อมูล":"ตรวจสอบแล้ว",cls:"text-emerald-700 bg-emerald-50 border-emerald-100"}:{label:"โปรดตรวจสอบ",cls:"text-amber-700 bg-amber-50 border-amber-100"}},T=()=>{const M=b.filter(z=>!z.mainRoom||!z.teacherId),U=b.filter(z=>z.matchStatus!=="exact"&&!z.teacherReviewed||!z.roomExact&&!z.roomReviewed);y.disabled=!b.length||M.length>0||U.length>0,b.length?M.length?k.textContent=`ทั้งหมด ${b.length} รายการ · ยังเลือกข้อมูลไม่ครบ ${M.length} รายการ`:U.length?k.textContent=`ทั้งหมด ${b.length} รายการ · กรุณาตรวจสอบอีก ${U.length} รายการ`:k.textContent=`ทั้งหมด ${b.length} รายการ · พร้อมบันทึก`:k.textContent=""},R=()=>{$.innerHTML=b.map((M,U)=>{const z=E(M),O=M.category==="ศาสนา"?m:a,W=[...i].sort((Y,D)=>String(Y.full_name??"").localeCompare(String(D.full_name??""),"th"));return`<div class="ai-advisor-row rounded-2xl border border-gray-200 p-3 sm:p-4" data-ai-row="${U}">
          <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <p class="text-sm font-bold text-gray-800">รายการที่ ${U+1}</p>
              <p class="text-xs text-gray-500 mt-1">ชื่อในคำสั่ง: <span class="font-medium text-gray-700">${te(M.sourceName||"ไม่ระบุ")}</span>${M.sourceCode?` · รหัสในคำสั่ง: ${te(M.sourceCode)}`:""}</p>
              ${M.suggestedName?`<p class="text-[11px] text-indigo-500 mt-1">AI แนะนำจากรายชื่อระบบ: ${te(M.suggestedName)}${M.suggestedCode?` (${te(M.suggestedCode)})`:""}</p>`:""}
              ${M.note?`<p class="text-[11px] text-gray-400 mt-1">หมายเหตุ AI: ${te(M.note)}</p>`:""}
            </div>
            <span class="ai-row-status text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${z.cls}">${z.label}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <label class="text-xs text-gray-500">ประเภท
              <select data-ai-category="${U}" class="${je} w-full mt-1">
                <option value="สามัญ" ${M.category==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${M.category==="ศาสนา"?"selected":""}>ศาสนา</option>
              </select>
            </label>
            <label class="text-xs text-gray-500">ห้องเรียน
              <select data-ai-room="${U}" class="${je} w-full mt-1">
                <option value="">— เลือกห้อง —</option>
                ${O.map(Y=>`<option value="${te(Y)}" ${Y===M.mainRoom?"selected":""}>${te(Y)}</option>`).join("")}
              </select>
            </label>
            <label class="text-xs text-gray-500">ชื่อครูในระบบ ปพ.5
              <select data-ai-teacher="${U}" class="${je} w-full mt-1">
                <option value="">— เลือกครู —</option>
                ${W.map(Y=>`<option value="${te(Y.id)}" ${String(Y.id)===String(M.teacherId??"")?"selected":""}>${te(Y.full_name)}${Y.teacher_code?` (${te(Y.teacher_code)})`:""}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>`}).join(""),$.querySelectorAll("[data-ai-category]").forEach(M=>M.addEventListener("change",U=>{const z=b[Number(U.currentTarget.dataset.aiCategory)];z.category=U.currentTarget.value,z.mainRoom=null,z.roomExact=!1,z.roomReviewed=!0,R(),T()})),$.querySelectorAll("[data-ai-room]").forEach(M=>M.addEventListener("change",U=>{const z=b[Number(U.currentTarget.dataset.aiRoom)];z.mainRoom=U.currentTarget.value||null,z.roomReviewed=!0,R(),T()})),$.querySelectorAll("[data-ai-teacher]").forEach(M=>M.addEventListener("change",U=>{const z=b[Number(U.currentTarget.dataset.aiTeacher)];z.teacherId=U.currentTarget.value?Number(U.currentTarget.value):null,z.teacherReviewed=!0,R(),T()})),T()};C.querySelector("#hr-ai-parse").addEventListener("click",()=>{c.classList.add("hidden");try{const M=JSON.parse(S(C.querySelector("#hr-ai-json").value)),U=Array.isArray(M)?M:M.assignments??M.homeroom_assignments??M.data??M.rows;if(!Array.isArray(U)||!U.length)throw new Error("ไม่พบรายการ assignments ใน JSON");const z=new Set;b=U.map((O,W)=>{var Te;const Y=["สามัญ","ศาสนา"].includes(O.category)?O.category:w,D=O.teacher_name_from_order??O.teacher_name??O.teacher??O.advisor_name??"",V=O.teacher_code_from_order??O.teacher_code??O.code??"",K=O.teacher_name_suggestion??O.matched_teacher_name??"",Q=O.teacher_code_suggestion??O.matched_teacher_code??"",Z=O.main_room??O.room??O.class_name??O.classroom??"",se=H(Z,Y),ae=A(D,V),me=A(K,Q),ue=ae.status==="exact"?ae:me.teacher?{...me,status:"suggested"}:ae,_e=`${Y}|${se??String(Z).trim()}`,Ie=z.has(_e);return z.add(_e),{category:Y,sourceName:D,sourceCode:V,suggestedName:K,suggestedCode:Q,note:O.note??"",sourcePage:O.source_page??"",mainRoom:se,roomExact:!!se,roomReviewed:!1,teacherId:((Te=ue.teacher)==null?void 0:Te.id)??null,teacherReviewed:!1,matchStatus:Ie?"ambiguous":ue.status,matchScore:ue.score}}),g.classList.remove("hidden"),R()}catch(M){c.textContent=`อ่าน JSON ไม่สำเร็จ: ${M.message}`,c.classList.remove("hidden"),g.classList.add("hidden"),b=[],T()}}),y.addEventListener("click",async()=>{if(y.disabled)return;const M=await Ft(r,d).catch(()=>[]),U=b.filter(z=>{const O=M.find(W=>W.main_room===z.mainRoom&&W.category===z.category);return!O||Number(O.teacher_id)!==Number(z.teacherId)}).length;if(confirm(`ยืนยันนำเข้าครูที่ปรึกษา ${b.length} รายการ?

ระบบจะเพิ่มหรือเปลี่ยนรายการที่แตกต่างจำนวน ${U} รายการ ในภาคเรียน ${d}/${r}`)){y.disabled=!0,y.textContent="กำลังบันทึก...";try{const z=await Fn(b.map(O=>({teacher_id:O.teacherId,main_room:O.mainRoom,category:O.category,academic_year:r,semester:d})));N(`นำเข้าครูที่ปรึกษาสำเร็จ ${z.length} รายการ ✅`,"success"),B(),await I()}catch(z){N(`บันทึกไม่สำเร็จ: ${he(z)}`,"error"),y.disabled=!1,y.textContent="✅ ยืนยันนำเข้าและบันทึก"}}})};(j=document.getElementById("hr-ai-import"))==null||j.addEventListener("click",p),document.querySelectorAll(".hr-term-tab").forEach(C=>{C.addEventListener("click",async()=>{const[L,q]=String(C.dataset.hrTerm??"").split("/").map(Number);!Number.isInteger(L)||!Number.isInteger(q)||(d=L,r=q,await I())})}),document.querySelectorAll(".hr-tab").forEach(C=>{C.addEventListener("click",async()=>{w=C.dataset.hrTab,await I()})}),(_=document.getElementById("hr-export-csv"))==null||_.addEventListener("click",async()=>{try{const C=await Ft(r,d),L=v(C),q=w==="สามัญ"?a:m,B=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],b=q.map(k=>{var A,H;const S=L[k];return[k,((A=S==null?void 0:S.teachers)==null?void 0:A.full_name)??"",((H=S==null?void 0:S.teachers)==null?void 0:H.phone)??""]}),c="\uFEFF"+[B,...b].map(k=>k.map(S=>`"${String(S).replace(/"/g,'""')}"`).join(",")).join(`
`),g=new Blob([c],{type:"text/csv;charset=utf-8"}),$=URL.createObjectURL(g),y=document.createElement("a");y.href=$,y.download=`ครูที่ปรึกษา-${w}-${d}-${r}.csv`,document.body.appendChild(y),y.click(),y.remove(),URL.revokeObjectURL($),N("ดาวน์โหลด CSV แล้ว ✅","success")}catch(C){N("ดาวน์โหลดไม่สำเร็จ: "+he(C),"error")}})}async function Br(){Le("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const e=i=>{let a=0;for(const m of i)a=a*26+m.charCodeAt(0)-64;return a},s=i=>{let a="";for(;i>0;)i--,a=String.fromCharCode(65+i%26)+a,i=Math.floor(i/26);return a},t=(i,a)=>{const m=[];for(let w=e(i);w<=e(a);w++)m.push(s(w));return m},n=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:t("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:t("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];n.flatMap(i=>i.cols);const l=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],o=["ระหว่างเรียน","กลางภาค","ปลายภาค"],x=await On().catch(()=>[]),r={};l.forEach(i=>{r[i]={},o.forEach(a=>{const m=x.find(w=>w.skill_group===i&&w.assignment_type===a);r[i][a]=new Set(m?m.allowed_columns.split(",").map(w=>w.trim()).filter(Boolean):[])})});const d=(i,a)=>n.map(m=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${m.label}</span>
      ${m.cols.map(w=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${r[i][a].has(w)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${i}" data-at="${a}" data-col="${w}">
          ${w}
        </button>`).join("")}
    </div>`).join("");$e(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`),document.addEventListener("click",i=>{const a=i.target.closest(".col-btn");if(!a)return;const{sg:m,at:w,col:f}=a.dataset;r[m][w].has(f)?(r[m][w].delete(f),a.className=a.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(r[m][w].add(f),a.className=a.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const v=document.getElementById(`scc-count-${m.replace(/\s/g,"_")}-${w.replace(/\s/g,"_")}`);v&&(v.textContent=`${r[m][w].size} คอลัมน์`);const h=document.querySelector(`.scc-clear-btn[data-sg="${m}"][data-at="${w}"]`);h&&(h.style.opacity=r[m][w].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(i=>{i.addEventListener("click",()=>{const{sg:a,at:m}=i.dataset;r[a][m].clear(),document.querySelectorAll(`.col-btn[data-sg="${a}"][data-at="${m}"]`).forEach(f=>{f.className=f.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const w=document.getElementById(`scc-count-${a.replace(/\s/g,"_")}-${m.replace(/\s/g,"_")}`);w&&(w.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const i=document.getElementById("scc-save-btn");i.disabled=!0,i.textContent="กำลังบันทึก...";try{const a=[];l.forEach(m=>{var f;const w=((f=document.querySelector(`.scc-lock[data-sg="${m}"]`))==null?void 0:f.checked)??!1;o.forEach(v=>{const h=[...r[m][v]].join(",");h&&a.push({skill_group:m,assignment_type:v,allowed_columns:h,is_fixed:w})})});for(const m of a)await Pn(m);N(`บันทึก ${a.length} รายการสำเร็จ ✅`,"success")}catch(a){N("บันทึกไม่สำเร็จ: "+he(a),"error")}finally{i.disabled=!1,i.textContent="💾 บันทึกทั้งหมด"}})}async function yi(){Le("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const e=await ra().catch(()=>[]);document.getElementById("main-content").innerHTML=`
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
    </div>`,window.renderSubjects=St}async function qr(){var l;Le("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const e=await Me().catch(()=>({})),s=e.academicYear??e.academic_year??new Date().getFullYear()+543,t=e.semester??1,n=async()=>{const o=await zn(s,t).catch(()=>[]),x=document.getElementById("holiday-table");if(x){if(!o.length){x.innerHTML=`<div class="text-center py-10 text-gray-400">
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
    </table>`}};$e(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${s} ภาค ${t} — ระบบจะ highlight วันนี้ในตารางเช็คชื่อ</p>
    </div>

    <!-- Add form -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-700 mb-3">เพิ่มวันหยุด</h3>
      <div class="flex flex-wrap gap-3">
        <input id="hol-date" type="date" class="${Ve} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${Ve} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`),await n(),(l=document.getElementById("hol-add"))==null||l.addEventListener("click",async()=>{const o=document.getElementById("hol-date").value,x=document.getElementById("hol-desc").value.trim()||null;if(!o){N("กรุณาเลือกวันที่","warning");return}const r=parseInt(o.slice(0,4),10),d=new Date().getFullYear();if(Math.abs(r-d)>3){N(`ปี ${r} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${d}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await Ln({holiday_date:o,description:x,academic_year:s,semester:t}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",N("เพิ่มวันหยุดแล้ว","success"),await n()}catch(i){N("เกิดข้อผิดพลาด: "+he(i),"error")}}),window._deleteHoliday=async o=>{if(confirm("ลบวันหยุดนี้?"))try{await Cn(o),N("ลบแล้ว","success"),await n()}catch{N("ลบไม่สำเร็จ","error")}}}function Ar(){Le("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",$e(`
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

    </div>`);let e="teachers",s=[];window.switchImportTab=l=>{e=l,s=[],document.getElementById("import-preview").classList.add("hidden");const o={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=o[l],document.getElementById("tab-teachers").className=l==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=l==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const t=l=>{if(!l||!l.name.endsWith(".csv")){N("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const o=new FileReader;o.onload=x=>{s=xl(x.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${s.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=gl(s,e),document.getElementById("import-preview").classList.remove("hidden")},o.readAsText(l,"UTF-8")};document.getElementById("csv-file").addEventListener("change",l=>t(l.target.files[0]));const n=document.getElementById("drop-zone");n.addEventListener("dragover",l=>{l.preventDefault(),n.classList.add("border-indigo-400","bg-indigo-50")}),n.addEventListener("dragleave",()=>n.classList.remove("border-indigo-400","bg-indigo-50")),n.addEventListener("drop",l=>{l.preventDefault(),n.classList.remove("border-indigo-400","bg-indigo-50"),t(l.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!s.length)return;const l=document.getElementById("btn-import"),o=document.getElementById("import-progress"),x=document.getElementById("progress-bar"),r=document.getElementById("progress-text");l.disabled=!0,o.classList.remove("hidden");const d=(i,a)=>{const m=Math.round(i/a*100);x.style.width=m+"%",r.textContent=`${i} / ${a} แถว`};try{const a=await(e==="teachers"?pl:ml)(s,d);if(N(`นำเข้าสำเร็จ ${a} รายการ`,"success"),x.style.width="100%",e==="students"){r.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const m=await mo();N(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(m==null?void 0:m.enrolled)??0} รายการ)`,"success")}catch{}r.textContent=`นำเข้าสำเร็จ ${a} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(i){N("นำเข้าไม่สำเร็จ: "+he(i),"error")}finally{l.disabled=!1}})}async function Mr(){var l,o,x;Le("payments"),document.getElementById("page-title").textContent="การชำระเงิน",$e(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);let e=[],s="all";const t=()=>{const r=document.getElementById("pay-list");if(!r)return;const d={pending:0,approved:1,rejected:2},i=(s==="all"?e:e.filter(a=>a.status===s)).slice().sort((a,m)=>{const w=(d[a.status]??9)-(d[m.status]??9);return w!==0?w:new Date(m.created_at)-new Date(a.created_at)});if(!i.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}r.innerHTML=i.map(a=>{var v,h,I,u,p;const m={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[a.status]??{label:a.status,cls:"bg-gray-100 text-gray-600"},w={semester:`📦 เหมาทั้งเทอม (${a.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(a.room_count??1)||1} ห้อง (${a.amount??49} บ.)`,donation:a.supporter_renewal_entitlement_id?`🎁 ต่ออายุผู้สนับสนุน ระดับ ${a.donation_tier??"-"} · ${a.amount??0} บ. (ลด ${a.discount_percent??0}%)`:`☕ โดเนท ${a.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[a.package_type]??`${a.package_type} (${a.amount??0} บ.)`,f=new Date(a.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${a.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${a.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${a.id}" data-teacher="${(v=a.teachers)==null?void 0:v.id}" data-pkg="${a.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(((h=a.teachers)==null?void 0:h.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${((I=a.teachers)==null?void 0:I.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((u=a.teachers)==null?void 0:u.teacher_code)??"—"} · ${((p=a.teachers)==null?void 0:p.phone)??"—"}</p>
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
            <span class="font-medium text-gray-700">${w}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">ส่งเมื่อ</span>
            <span class="text-gray-600">${f}</span>
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
            data-url="${te(a.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>`:`
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${a.status==="pending"?(()=>{var j,_,C;return a.package_type==="donation"?`
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${a.id}" data-teacher="${(j=a.teachers)==null?void 0:j.id}">
              ☕ รับทราบ / ขอบคุณ
            </button>
          </div>`:a.package_type==="school_sponsored"?`
          <div class="px-4 pb-4">
            <button class="approve-btn flex-1 w-full py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${a.id}" data-teacher="${(_=a.teachers)==null?void 0:_.id}" data-pkg="${a.package_type}">
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
      </div>`}).join(""),r.querySelectorAll(".donate-ack-btn").forEach(a=>{a.addEventListener("click",async()=>{var f,v;const w=((f=(await Me().catch(()=>({}))).donationThankYouCard)==null?void 0:f.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){a.disabled=!0,a.textContent="⏳ กำลังดำเนินการ...";try{await Ot(parseInt(a.dataset.id),"approved",w),await ba(parseInt(a.dataset.teacher),"donation"),N("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(v=window._refreshPaymentBadge)==null||v.call(window),e=await Xe(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent="☕ รับทราบ / ขอบคุณ"}}})}),r.querySelectorAll(".approve-btn").forEach(a=>{a.addEventListener("click",async()=>{var f;const m=a.dataset.pkg==="school_sponsored";if(confirm(m?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){a.disabled=!0,a.textContent="⏳ กำลังอนุมัติ...";try{await Ot(parseInt(a.dataset.id),"approved"),await ba(parseInt(a.dataset.teacher),a.dataset.pkg),N("อนุมัติแล้ว ✅","success"),(f=window._refreshPaymentBadge)==null||f.call(window),e=await Xe(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent=m?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),r.querySelectorAll(".reject-btn").forEach(a=>{a.addEventListener("click",()=>{hi(parseInt(a.dataset.id),async m=>{var w;await Ot(parseInt(a.dataset.id),"rejected",m),N("ปฏิเสธแล้ว","info"),(w=window._refreshPaymentBadge)==null||w.call(window),e=await Xe(),t()})})}),r.querySelectorAll(".view-slip-btn").forEach(a=>{a.addEventListener("click",()=>fi(a.dataset.url))})};try{e=await Xe(),t()}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(r=>{r.addEventListener("click",()=>{s=r.dataset.filter,document.querySelectorAll(".pay-tab").forEach(d=>{d.classList.toggle("border-indigo-600",d===r),d.classList.toggle("text-indigo-600",d===r),d.classList.toggle("border-transparent",d!==r),d.classList.toggle("text-gray-400",d!==r)}),t()})}),(l=document.getElementById("pay-refresh"))==null||l.addEventListener("click",async()=>{e=await Xe(),t(),N("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",r=>{if(!r.target.classList.contains("pay-cb"))return;const d=document.querySelectorAll(".pay-cb:checked"),i=document.getElementById("pay-bulk-approve");d.length>0?(i.classList.remove("hidden"),i.textContent=`✅ อนุมัติ ${d.length} คน`):i.classList.add("hidden")});const n=async r=>{var i,a;let d=0;for(const m of r)try{await Ot(parseInt(m.id),"approved"),await ba(parseInt(m.teacher),m.pkg),d++}catch{}N(`อนุมัติ ${d}/${r.length} รายการ ✅`,"success"),(i=window._refreshPaymentBadge)==null||i.call(window),e=await Xe(),t(),(a=document.getElementById("pay-bulk-approve"))==null||a.classList.add("hidden")};(o=document.getElementById("pay-bulk-approve"))==null||o.addEventListener("click",async()=>{const r=[...document.querySelectorAll(".pay-cb:checked")];r.length&&confirm(`อนุมัติ ${r.length} คนที่เลือก?`)&&await n(r.map(d=>({id:d.dataset.id,teacher:d.dataset.teacher,pkg:d.dataset.pkg})))}),(x=document.getElementById("pay-approve-all"))==null||x.addEventListener("click",async()=>{const r=e.filter(d=>d.status==="pending");if(!r.length){N("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${r.length} รายการ?`)&&await n(r.map(d=>{var i;return{id:d.id,teacher:(i=d.teachers)==null?void 0:i.id,pkg:d.package_type}}))})}async function fi(e){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",s.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${te(e)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(s),s.querySelector("button").addEventListener("click",()=>s.remove()),s.addEventListener("click",r=>{r.target===s&&s.remove()});const t=s.querySelector("#slip-viewer"),n=s.querySelector("#slip-download"),l=await Bo(e),o=te(l),x=String(l).split("?")[0].toLowerCase().endsWith(".pdf");n&&(n.href=l),t&&(t.innerHTML=x?`<iframe src="${o}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${o}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
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
    </div>`,document.body.appendChild(t),t.querySelector("#rj-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#rj-confirm").addEventListener("click",async()=>{const n=t.querySelector("#reject-note").value.trim()||null;t.remove(),await s(n)})}async function Nr(){Le("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1),n=async(o="scores")=>{const x=await ss(s,t,"สามัญ").catch(()=>[]);l(x,o)},l=(o,x="scores")=>{var I;const r=u=>`
      <tr class="hover:bg-gray-50 transition lsk-row" data-id="${u.id}">
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${u.name}</td>
        <td class="px-4 py-3 text-center text-sm text-gray-600">${u.max_score}</td>
        <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${u.sheet_col??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-400">${u.sort_order}</td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <button class="lsk-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${u.id}">แก้ไข</button>
          <button class="lsk-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${u.id}" data-name="${u.name}">ลบ</button>
        </td>
      </tr>`,d=u=>u.length?`<table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th>
              <th class="px-4 py-3 text-center">คะแนนเต็ม</th>
              <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th>
              <th class="px-4 py-3 text-center">ลำดับ</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">${u.map(r).join("")}</tbody>
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',i=u=>u.replace("SheetId","SheetTab"),a=u=>u.replace("SheetId","StudentRange"),m=(u,p)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${p})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${u}" value="${e[u]??""}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${u}" value="${e[i(u)]??""}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${u}" value="${e[a(u)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${u}" data-tab-key="${i(u)}" data-range-key="${a(u)}">บันทึก</button>
        </div>
      </div>`;$e(`<div class="max-w-5xl mx-auto animate-fade">
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
    </div>`);const w=[...o];(I=document.getElementById("btn-fill-ls-classes"))==null||I.addEventListener("click",async()=>{if(!confirm("ยืนยันซ่อมคะแนนรายวิชาทักษะชีวิตในภาคเรียนนี้ให้ตรงกับส่วนกลาง? คะแนนที่ล้างในส่วนกลางจะถูกล้างในรายวิชาด้วย"))return;const u=document.getElementById("btn-fill-ls-classes"),p=u.textContent;u.disabled=!0,u.textContent="กำลังเติม...";try{const j=await Ut(s,t);N(`เติมทักษะชีวิต ${j.classes} รายวิชา / ${j.scores} คะแนนแล้ว`,"success")}catch(j){N("เติมไม่สำเร็จ: "+he(j),"error")}finally{u.disabled=!1,u.textContent=p}});const f=async()=>{var y;document.getElementById("lsk-tab-actions").innerHTML=`
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
        </div>`;const[{columns:u,scores:p},j]=await Promise.all([no(s,t).catch(()=>({columns:[],scores:[]})),Et().catch(()=>[])]),_=(u??[]).filter(k=>k.category==="สามัญ"),C={};for(const k of p)C[k.student_id]||(C[k.student_id]={}),C[k.student_id][k.column_id]=k.score;const L=j.filter(k=>(k==null?void 0:k.id)&&(k==null?void 0:k.student_code)&&(k==null?void 0:k.main_room)).sort((k,S)=>(k.main_room??"").localeCompare(S.main_room??"",void 0,{numeric:!0})||(k.student_code??"").localeCompare(S.student_code??"")),q=document.getElementById("lsk-filter-grade"),B=document.getElementById("lsk-filter-room");q.innerHTML='<option value="">ทุกระดับชั้น</option>'+Oe(L.map(k=>at(k.main_room))).map(k=>`<option value="${k}">${k}</option>`).join("");const b=()=>{const k=q.value,S=B.value,A=Oe(L.filter(H=>!k||at(H.main_room)===k).map(H=>pt(H.main_room)));B.innerHTML='<option value="">ทุกห้อง</option>'+A.map(H=>`<option value="${H}" ${H===S?"selected":""}>ห้อง ${H}</option>`).join(""),S&&!A.includes(S)&&(B.value="")},c=k=>{if(document.getElementById("lsk-filter-count").textContent=`${k.length} คน`,!k.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${_.map(S=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${S.name}<br><span class="font-normal text-gray-400">(${S.max_score})</span></th>`).join("")}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${k.map((S,A)=>{const H=_.reduce((E,T)=>{var R;return E+(((R=C[S.id])==null?void 0:R[T.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${A+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${S.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${S.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${S.main_room??"—"}</td>
                  ${_.map(E=>{var R;const T=(R=C[S.id])==null?void 0:R[E.id];return`<td class="px-2 py-2 text-center ${T!=null?"text-gray-800 font-medium":"text-gray-300"}">${T??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${H||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};b();let g=[...L];c(g);const $=()=>{b();const k=q.value,S=B.value,A=document.getElementById("lsk-filter-search").value.toLowerCase();g=L.filter(H=>{var E,T;return(!k||at(H.main_room)===k)&&(!S||pt(H.main_room)===S)&&(!A||((E=H.full_name)==null?void 0:E.toLowerCase().includes(A))||((T=H.student_code)==null?void 0:T.includes(A)))}),c(g)};q.addEventListener("change",$),B.addEventListener("change",$),document.getElementById("lsk-filter-search").addEventListener("input",$),(y=document.getElementById("btn-sync-ls"))==null||y.addEventListener("click",async()=>{const k=document.getElementById("btn-sync-ls");k.disabled=!0,k.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:S}=await Se(async()=>{const{syncCentralBatch:F}=await import("./sync-C8r-x1ZV.js");return{syncCentralBatch:F}},__vite__mapDeps([11,6,4]));if(!_.length){N("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!e.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const A=g.map(F=>({id:F.id,student_code:F.student_code})),H=new Set(A.map(F=>F.id)),E=new Set(_.map(F=>F.id)),T=p.filter(F=>H.has(F.student_id)&&E.has(F.column_id)),R=await S(e.lifeSkillSheetIdSamai,e.lifeSkillSheetTabSamai,_,T,A,{studentColRange:e.lifeSkillStudentRangeSamai||"J8:J3000"});if(!R){N("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync ทักษะชีวิต ${A.length} คน / ${R} คะแนนแล้ว`,"success")}catch(S){N("Sync ไม่สำเร็จ: "+he(S),"error")}finally{k.disabled=!1,k.textContent="↑ Sync ไปชีทกลาง"}})},v=()=>{var C;document.getElementById("lsk-tab-actions").innerHTML=`
        ${o.length?"":'<button id="lsk-copy-prev-btn" class="px-4 py-2.5 border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-xl hover:bg-indigo-100">คัดลอกจากภาคก่อน</button>'}
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const u=o.reduce((L,q)=>L+(Number(q.max_score)||0),0),p=o.length?`
        <form id="lsk-score-settings" class="bg-emerald-50/60 rounded-2xl border border-emerald-100 p-5">
          <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 class="text-sm font-semibold text-emerald-900">กำหนดคะแนนเต็มแต่ละส่วน</h3>
              <p class="text-xs text-emerald-700 mt-1">ค่าที่บันทึกจะอัปเดตคอลัมน์กลางในรายวิชาทักษะชีวิตของภาค ${t}/${s}</p>
            </div>
            <span class="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-emerald-700 border border-emerald-100">รวม <span id="lsk-score-total">${u}</span> คะแนน</span>
          </div>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            ${o.map(L=>`
              <label class="block rounded-xl bg-white border border-emerald-100 p-3">
                <span class="block text-xs font-semibold text-gray-700 mb-2">${te(L.name)}</span>
                <span class="flex items-center gap-2">
                  <input type="number" min="1" max="100" step="1" required
                    data-lsk-max-id="${L.id}" value="${Number(L.max_score)||0}"
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
        ${p}
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${o.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${d(o)}</div>
          ${m("lifeSkillSheetIdSamai","สามัญ")}
        </div>
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>Es(null,s,t,()=>n("config"))),(C=document.getElementById("lsk-copy-prev-btn"))==null||C.addEventListener("click",async()=>{const L=document.getElementById("lsk-copy-prev-btn"),q=t===1?s-1:s,B=t===1?2:t-1;L.disabled=!0,L.textContent="กำลังคัดลอก...";try{const b=await ss(q,B,"สามัญ");if(!b.length)throw new Error(`ไม่พบโครงสร้างคะแนนภาค ${B}/${q}`);await Rs(b.map(g=>({name:g.name,max_score:g.max_score,sheet_col:g.sheet_col,sort_order:g.sort_order,category:"สามัญ",academic_year:s,semester:t})));const c=await Ut(s,t);N(`คัดลอก ${b.length} ส่วน และเติมให้ ${c.classes} รายวิชาแล้ว`,"success"),await n("config")}catch(b){N("คัดลอกไม่สำเร็จ: "+he(b),"error"),L.disabled=!1,L.textContent="คัดลอกจากภาคก่อน"}});const j=document.getElementById("lsk-score-settings"),_=()=>{const L=[...document.querySelectorAll("[data-lsk-max-id]")].reduce((B,b)=>B+(Number(b.value)||0),0),q=document.getElementById("lsk-score-total");q&&(q.textContent=L)};j==null||j.querySelectorAll("[data-lsk-max-id]").forEach(L=>L.addEventListener("input",_)),j==null||j.addEventListener("submit",async L=>{L.preventDefault();const q=document.getElementById("lsk-save-score-settings"),B=[...j.querySelectorAll("[data-lsk-max-id]")].map(b=>({id:Number(b.dataset.lskMaxId),maxScore:Number(b.value)}));if(B.some(b=>!Number.isInteger(b.maxScore)||b.maxScore<1||b.maxScore>100)){N("คะแนนเต็มแต่ละส่วนต้องเป็นจำนวนเต็ม 1–100","warning");return}q.disabled=!0,q.textContent="กำลังบันทึก...";try{await Promise.all(B.map(c=>Os(c.id,{max_score:c.maxScore})));const b=await Ut(s,t);N(`บันทึกคะแนนเต็ม และอัปเดต ${b.classes} รายวิชาแล้ว`,"success"),await n("config")}catch(b){N("บันทึกไม่สำเร็จ: "+he(b),"error"),q.disabled=!1,q.textContent="บันทึกคะแนนเต็ม"}}),document.querySelectorAll(".lsk-edit").forEach(L=>{L.addEventListener("click",()=>{const q=w.find(B=>B.id===+L.dataset.id);q&&Es(q,s,t,()=>n("config"))})}),document.querySelectorAll(".lsk-del").forEach(L=>{L.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${L.dataset.name}"?`))try{await oo(+L.dataset.id),N("ลบแล้ว","success"),n("config")}catch(q){N("ลบไม่สำเร็จ: "+he(q),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach(L=>{L.addEventListener("click",async()=>{var k,S,A;const q=L.dataset.key,B=L.dataset.tabKey,b=L.dataset.rangeKey,c=((k=document.getElementById(`lsk-sheet-${q}`))==null?void 0:k.value.trim())??"",g=((S=document.getElementById(`lsk-tab-${q}`))==null?void 0:S.value.trim())??"",$=((A=document.getElementById(`lsk-range-${q}`))==null?void 0:A.value.trim())??"J8:J3000",y=L.textContent;L.disabled=!0,L.textContent="⏳";try{await Promise.all([Ee(q,c),Ee(B,g),Ee(b,$)]),e[q]=c,e[B]=g,e[b]=$,L.textContent="✅",L.style.background="#16a34a",setTimeout(()=>{L.disabled=!1,L.textContent=y,L.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),L.disabled=!1,L.textContent=y}})})},h=u=>{document.querySelectorAll("[data-tab]").forEach(p=>{const j=p.dataset.tab===u;p.className=j?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),u==="scores"?f():v()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>h("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>h("config")),h(x)};n()}function Es(e,s,t,n){var x;(x=document.getElementById("lsk-modal"))==null||x.remove();const l=!!e,o=document.createElement("div");o.id="lsk-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#lsk-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#lsk-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#lsk-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const i={name:o.querySelector("#lsk-name").value.trim(),max_score:parseInt(o.querySelector("#lsk-max").value)||20,sort_order:parseInt(o.querySelector("#lsk-order").value)||0,sheet_col:o.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:s,semester:t};l?await Os(e.id,i):await Rs(i);const a=await Ut(s,t);N(`บันทึกสำเร็จ และอัปเดต ${a.classes} รายวิชาแล้ว`,"success"),o.remove(),n()}catch(i){N("บันทึกไม่สำเร็จ: "+he(i),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}const vi=e=>{const s=Ws(e);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${s.cls}">${s.label}</span>`};async function Dr(){Le("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1);us(e);const n=a=>`
    <tr class="hover:bg-gray-50 transition" data-id="${a.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${a.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${a.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${a.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${a.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${a.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${a.id}" data-name="${a.name}">ลบ</button>
      </td>
    </tr>`;let l=[];const o=async()=>{var m;l=await Gn(s,t).catch(()=>[]),x();const a=((m=document.querySelector("[data-tab].bg-white"))==null?void 0:m.dataset.tab)??"scores";i(a)},x=()=>{$e(`<div class="max-w-5xl mx-auto animate-fade">
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
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>i("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>i("config"))},r=async()=>{var C,L;document.getElementById("rsa-tab-actions").innerHTML=`
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
      </div>`;const[{columns:a,scores:m},w]=await Promise.all([ao(s,t).catch(()=>({columns:[],scores:[]})),Et().catch(()=>[])]),f={};for(const q of m)f[q.student_id]||(f[q.student_id]={}),f[q.student_id][q.column_id]=q.score;const v=w.filter(q=>(q==null?void 0:q.id)&&(q==null?void 0:q.student_code)&&(q==null?void 0:q.main_room)).sort((q,B)=>(q.main_room??"").localeCompare(B.main_room??"",void 0,{numeric:!0})||(q.student_code??"").localeCompare(B.student_code??"")),h=document.getElementById("rsa-filter-grade"),I=document.getElementById("rsa-filter-room");h.innerHTML='<option value="">ทุกระดับชั้น</option>'+Oe(v.map(q=>at(q.main_room))).map(q=>`<option value="${q}">${q}</option>`).join("");const u=()=>{const q=h.value,B=I.value,b=Oe(v.filter(c=>!q||at(c.main_room)===q).map(c=>pt(c.main_room)));I.innerHTML='<option value="">ทุกห้อง</option>'+b.map(c=>`<option value="${c}" ${c===B?"selected":""}>ห้อง ${c}</option>`).join(""),B&&!b.includes(B)&&(I.value="")},p=q=>{if(document.getElementById("rsa-filter-count").textContent=`${q.length} คน`,!q.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
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
            ${q.map((B,b)=>{const c=a.reduce((y,k)=>{var S;return y+(((S=f[B.id])==null?void 0:S[k.id])??0)},0),g=c/2,$=c>0?vi(g):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${b+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${B.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${B.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${B.main_room??"—"}</td>
                ${a.map(y=>{var S;const k=(S=f[B.id])==null?void 0:S[y.id];return`<td class="px-2 py-2 text-center ${k!=null?"text-gray-800 font-medium":"text-gray-300"}">${k??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${c||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${c>0?g.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${$}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};u();let j=[...v];p(j);const _=()=>{u();const q=h.value,B=I.value,b=document.getElementById("rsa-filter-search").value.toLowerCase();j=v.filter(c=>{var g,$;return(!q||at(c.main_room)===q)&&(!B||pt(c.main_room)===B)&&(!b||((g=c.full_name)==null?void 0:g.toLowerCase().includes(b))||(($=c.student_code)==null?void 0:$.includes(b)))}),p(j)};h.addEventListener("change",_),I.addEventListener("change",_),document.getElementById("rsa-filter-search").addEventListener("input",_),(C=document.getElementById("btn-sync-rs"))==null||C.addEventListener("click",async()=>{const q=document.getElementById("btn-sync-rs");if(!e.readingScoreSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}q.disabled=!0,q.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:B}=await Se(async()=>{const{syncCentralBatch:k}=await import("./sync-C8r-x1ZV.js");return{syncCentralBatch:k}},__vite__mapDeps([11,6,4])),b=j.map(k=>({id:k.id,student_code:k.student_code})),c=new Set(b.map(k=>k.id)),g=new Set(a.map(k=>k.id)),$=m.filter(k=>c.has(k.student_id)&&g.has(k.column_id)),y=await B(e.readingScoreSheetId,e.readingScoreSheetTab,a,$,b,{studentColRange:e.readingScoreStudentRange||"J8:J3000"});if(!y){N("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${b.length} คน / ${y} คะแนนแล้ว`,"success")}catch(B){N("Sync ไม่สำเร็จ: "+he(B),"error")}finally{q.disabled=!1,q.textContent="↑ Sync ไปชีทกลาง"}}),(L=document.getElementById("btn-fill-reading-eval"))==null||L.addEventListener("click",async()=>{const q=document.getElementById("btn-fill-reading-eval");if(!e.readingEvalClassSheetCol){N("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}q.disabled=!0,q.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:B}=await Se(async()=>{const{syncReadingEvalToClassSheets:$}=await import("./sync-C8r-x1ZV.js");return{syncReadingEvalToClassSheets:$}},__vite__mapDeps([11,6,4])),{getAllClassesForFill:b}=await Se(async()=>{const{getAllClassesForFill:$}=await import("./api-CQwFwlFA.js");return{getAllClassesForFill:$}},__vite__mapDeps([0,1,2,3,4])),c={};for(const $ of v){const y=a.reduce((k,S)=>{var A;return k+(((A=f[$.id])==null?void 0:A[S.id])??0)},0);if(y>0){const k=y/2;c[$.id]={label:Ws(k).label,score100:k}}}const g=await b();await B(g,c,e.readingEvalClassSheetCol),N(`ป้อนผลประเมินอ่านฯ ไป ${g.length} ห้องสำเร็จ`,"success")}catch(B){N("ป้อนไม่สำเร็จ: "+he(B),"error")}finally{q.disabled=!1,q.textContent="📝 ป้อนผล → ทุกวิชา"}})},d=()=>{var m,w,f;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const a=l.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${l.map(n).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${l.length} หัวข้อ · รวม ${l.reduce((v,h)=>v+h.max_score,0)} คะแนน</span>
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
          ${ht.map((v,h)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${h}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${h+1}:</span>
              <input type="text" data-rsa-label value="${Pe(v.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${v.min}" min="0" max="100" ${h===ht.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${h===ht.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${h===ht.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>Is(null,s,t,o)),document.querySelectorAll(".rsa-edit").forEach(v=>{v.addEventListener("click",()=>{const h=l.find(I=>I.id===+v.dataset.id);h&&Is(h,s,t,o)})}),document.querySelectorAll(".rsa-del").forEach(v=>{v.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${v.dataset.name}"?`))try{await so(+v.dataset.id),N("ลบแล้ว","success"),o()}catch(h){N("ลบไม่สำเร็จ: "+he(h),"error")}})}),(m=document.getElementById("rsa-save-sheet"))==null||m.addEventListener("click",async()=>{var p,j,_;const v=document.getElementById("rsa-save-sheet"),h=((p=document.getElementById("rsa-sheet-id"))==null?void 0:p.value.trim())??"",I=((j=document.getElementById("rsa-sheet-tab"))==null?void 0:j.value.trim())??"",u=((_=document.getElementById("rsa-student-range"))==null?void 0:_.value.trim())??"J8:J3000";v.disabled=!0,v.textContent="⏳";try{await Promise.all([Ee("readingScoreSheetId",h),Ee("readingScoreSheetTab",I),Ee("readingScoreStudentRange",u)]),e.readingScoreSheetId=h,e.readingScoreSheetTab=I,e.readingScoreStudentRange=u,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(w=document.getElementById("rsa-save-eval-col"))==null||w.addEventListener("click",async()=>{var I;const v=document.getElementById("rsa-save-eval-col"),h=(((I=document.getElementById("rsa-eval-col"))==null?void 0:I.value.trim())??"").toUpperCase();v.disabled=!0,v.textContent="⏳";try{await Ee("readingEvalClassSheetCol",h),e.readingEvalClassSheetCol=h,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),N("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(f=document.getElementById("rsa-save-grades"))==null||f.addEventListener("click",async()=>{const v=document.getElementById("rsa-save-grades"),h=document.getElementById("rsa-grades-err");h.textContent="";const I=[...document.querySelectorAll("[data-rsa-grade-row]")].map((u,p)=>({label:u.querySelector("[data-rsa-label]").value.trim(),min:p===ht.length-1?0:parseFloat(u.querySelector("[data-rsa-min]").value)}));if(I.some(u=>!u.label)){h.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if(I.some(u=>Number.isNaN(u.min)||u.min<0||u.min>100)){h.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let u=0;u<I.length-1;u++)if(I[u].min<=I[u+1].min){h.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}v.disabled=!0,v.textContent="⏳";try{await Ee("readingEvalThresholds",JSON.stringify(I)),us({readingEvalThresholds:JSON.stringify(I)}),v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึกเกณฑ์",v.style.background=""},1500),N("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(u){N("บันทึกไม่สำเร็จ: "+he(u),"error"),v.disabled=!1,v.textContent="บันทึกเกณฑ์"}})},i=a=>{document.querySelectorAll("[data-tab]").forEach(m=>{m.className=m.dataset.tab===a?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),a==="scores"?r():d()};o()}const rt={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function At(e,s){var o;(o=document.getElementById("admin-picker"))==null||o.remove();const t=document.createElement("div");t.id="admin-picker",t.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const n=(e.target.closest("td,th,button")??e.target).getBoundingClientRect();t.style.top=Math.min(n.bottom+4,window.innerHeight-60)+"px",t.style.left=Math.max(4,Math.min(n.left,window.innerWidth-220))+"px";const l=document.createElement("button");l.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",l.textContent="✕ ล้าง",l.onclick=()=>{t.remove(),s(null)},t.appendChild(l),Object.entries(rt).forEach(([x,r])=>{const d=document.createElement("button");d.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${r.bg} ${r.color} hover:opacity-80 transition`,d.textContent=r.label,d.title=r.fullLabel,d.onclick=()=>{t.remove(),s(x)},t.appendChild(d)}),document.body.appendChild(t),setTimeout(()=>document.addEventListener("click",()=>t.remove(),{once:!0}),50)}const Ls=["อา","จ","อ","พ","พฤ","ศ","ส"];function wi(e,s){const t=[],n=new Date(e),l=new Date(s),o=n.getDay()%7;o&&n.setDate(n.getDate()-o);let x=new Date(n),r=1;for(;x<=l;){const d=[];for(let i=0;i<5;i++){const a=new Date(x);a.setDate(a.getDate()+i),a<=l&&d.push({date:new Date(a),ds:a.toISOString().slice(0,10)})}d.length&&(t.push({n:r,days:d}),r++),x.setDate(x.getDate()+7)}return t}function Cs(e,s){const t=s.reduce((l,o)=>{var x;return l+(((x=rt[e[o.ds]])==null?void 0:x.score)??0)},0),n=s.length*2;return n>0?Math.min(10,Math.max(0,Math.round(t/n*100)/10)):0}function zt(e){return`${e.getDate()}/${e.getMonth()+1}`}async function Hr(e){var v,h,I,u;Le("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let s=null,t=e;if(!t)try{const{data:p}=await ie.auth.getSession(),j=((h=(v=p==null?void 0:p.session)==null?void 0:v.user)==null?void 0:h.id)??null;if(j){const{data:_}=await ie.from("teachers").select("*").eq("profile_id",j).maybeSingle();t=_??null}}catch(p){console.error("Failed to load teacher session:",p)}const[n,l]=await Promise.all([Me().catch(()=>({})),Hs().catch(()=>[])]),o=l,x=(n.prayerScannerTeachers||"").split(/[\s,]+/).map(p=>p.trim()).filter(Boolean);let r=!1;if(t){const{data:p}=await ie.from("profiles").select("role").eq("id",t.profile_id).maybeSingle();r=x.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(p==null?void 0:p.role)==="admin"}$e(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const d=()=>{var z;const p=n.semester_start,j=n.semester_end,_=p&&j?wi(p,j):[],C=_.flatMap(O=>O.days);if(document.getElementById("pr-tab-actions").innerHTML=`
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
      </div>`,(z=document.getElementById("btn-fill-prayer-classes"))==null||z.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const O=document.getElementById("btn-fill-prayer-classes"),W=O.textContent;O.disabled=!0,O.textContent="กำลังเติม...";try{const Y=await eo({semesterStart:n.semester_start,semesterEnd:n.semester_end,attendanceScoreMode:n.attendanceScoreMode??"recorded"});N(`เติมรายวิชาศาสนา ${Y.classes} รายวิชา / ${Y.scores} คะแนนแล้ว`,"success")}catch(Y){N("เติมไม่สำเร็จ: "+he(Y),"error")}finally{O.disabled=!1,O.textContent=W}}),document.getElementById("pr-tab-content").innerHTML=`
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
          ${Object.values(rt).map(O=>`<span class="px-1.5 py-0.5 ${O.bg} ${O.color} rounded cursor-default">${O.label}=${O.fullLabel??""}</span>`).join("")}
        </div>
      </div>
      ${!p||!j?`<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`:`<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`,!p||!j)return;const L="border border-gray-200 text-center text-xs select-none",q="sticky left-0 z-20 bg-white border border-gray-200",B="sticky z-20 bg-white border border-gray-200",b=O=>O>=8?"text-emerald-600":O>=6?"text-amber-500":"text-red-600",c=30,g=160,$={};let y=[],k=[];const S=(O,W=!0)=>{O&&(O.style.outline=`2px solid ${W?"#059669":"#ef4444"}`,O.style.outlineOffset="1px",setTimeout(()=>{O.style.outline="",O.style.outlineOffset=""},700))},A=async(O,W,Y,D)=>{var Q;$[O]||($[O]={}),D===null?delete $[O][W]:$[O][W]=D;const V=document.querySelector(`.pr-cell[data-sid="${O}"][data-date="${W}"]`);if(V){const Z=D?rt[D]:null;Object.values(rt).forEach(se=>V.classList.remove(se.bg)),Z?(V.classList.add(Z.bg),V.innerHTML=`<span class="${Z.color} text-xs">${Z.label}</span>`):V.innerHTML=""}E(O);const K=document.querySelector(`.adm-cell[data-sid="${O}"][data-date="${W}"]`);if(K){const Z=D?rt[D]:null;K.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${Z?Z.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,K.innerHTML=Z?`<span class="${Z.color}">${Z.label}</span>`:'<span class="text-gray-200">·</span>'}try{const Z=((Q=_.find(se=>se.days.some(ae=>ae.ds===W)))==null?void 0:Q.n)??null;await zo(O,Y,W,D,Z,"แอดมิน"),S(V,!0),S(K,!0)}catch(Z){console.error("[prayer save]",Z),S(V,!1),S(K,!1),N("บันทึกไม่สำเร็จ: "+he(Z),"error")}},H=async(O,W)=>{const D=(await Promise.allSettled(O.map(([V,K,Q])=>A(V,K,W,Q)))).filter(V=>V.status==="rejected").length;D>0&&N(`บันทึกไม่สำเร็จ ${D} รายการ`,"error")},E=O=>{const W=$[O]??{},Y=Cs(W,C),D=document.getElementById(`pr-sc-${O}`);D&&(D.textContent=Y,D.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${b(Y)} text-xs`)},T=(O,W)=>{if(document.getElementById("pr-filter-count").textContent=`${O.length} คน · ${C.length} วัน`,!O.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${q} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${B} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${B} bg-gray-50 text-left px-2" style="left:96px;min-width:${g}px">ชื่อ-นามสกุล</th>
              ${_.map(Y=>`<th colspan="${Y.days.length}"
                class="${L} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${Y.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${Y.n}">
                Week${Y.n} ✎</th>`).join("")}
              <th class="${L} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${q} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${B} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${B} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${g}px">ชื่อ</th>
              ${_.flatMap(Y=>Y.days.map(D=>`<th class="${L} bg-gray-100 text-gray-400 font-normal"
                style="width:${c}px;min-width:${c}px;font-size:9px">
                ${Ls[D.date.getDay()]}<br/>${zt(D.date)}</th>`)).join("")}
              <th class="${L} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${O.map((Y,D)=>{const V=$[Y.id]??{},K=Cs(V,C);return`<tr class="hover:bg-gray-50/60" data-sid="${Y.id}">
                <td class="${q} text-center text-gray-400" style="width:28px">${D+1}</td>
                <td class="${B} text-center font-mono text-gray-600" style="left:28px;width:68px">${Y.student_code??"—"}</td>
                <td class="${B} px-2" style="left:96px;min-width:${g}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${Y.image_url?`<img src="${Y.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${Y.full_name??"—"}</span>
                  </div>
                </td>
                ${_.flatMap(Q=>Q.days.map(Z=>{const se=V[Z.ds]??null,ae=se?rt[se]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${ae?ae.bg:""}"
                    data-sid="${Y.id}" data-date="${Z.ds}" data-room="${W}"
                    style="width:${c}px;min-width:${c}px;height:28px">
                    ${ae?`<span class="${ae.color} text-xs">${ae.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${b(K)} text-xs"
                  id="pr-sc-${Y.id}" style="min-width:48px">${K}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",Y=>{const D=Y.target.closest(".pr-week-th");if(!D)return;const V=+D.dataset.week,K=_.find(Q=>Q.n===V);K&&U(K,y,F)}),document.getElementById("pr-grid-wrap").addEventListener("click",Y=>{const D=Y.target.closest(".pr-cell");if(!D)return;Y.stopPropagation();const V=+D.dataset.sid,K=D.dataset.date,Q=D.dataset.room;At(Y,Z=>A(V,K,Q,Z))})},R=async(O,W="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[Y,D]=await Promise.all([co(O),uo(O,p,j)]);y=Y,Object.keys($).forEach(K=>delete $[K]);for(const K of y)$[K.id]={};for(const K of D)$[K.student_id]||($[K.student_id]={}),$[K.student_id][K.check_date]=K.status;k=C.map(K=>K.ds);const V=W?y.filter(K=>{var Q,Z;return((Q=K.full_name)==null?void 0:Q.toLowerCase().includes(W))||((Z=K.student_code)==null?void 0:Z.includes(W))}):y;T(V,O)}catch(Y){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${Y.message}</div>`}};let F=o[0]??"";const M=O=>{F=O,document.getElementById("pr-room-label").textContent=O,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(Y=>{const D=Y.dataset.room===O;Y.classList.toggle("bg-indigo-50",D),Y.classList.toggle("font-semibold",D),Y.classList.toggle("text-indigo-700",D)});const W=document.getElementById("pr-filter-search").value.toLowerCase();R(O,W)};document.getElementById("pr-room-btn").addEventListener("click",O=>{O.stopPropagation();const W=document.getElementById("pr-room-dropdown");W.classList.toggle("hidden"),W.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",O=>{const W=O.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(Y=>{Y.style.display=Y.dataset.room.toLowerCase().includes(W)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",O=>{const W=O.target.closest(".pr-room-item");W&&M(W.dataset.room)}),document.addEventListener("click",()=>{var O;(O=document.getElementById("pr-room-dropdown"))==null||O.classList.add("hidden")},{capture:!0,once:!1}),F&&M(F),document.getElementById("pr-filter-search").addEventListener("input",O=>{const W=O.target.value.toLowerCase();if(!y.length)return;const Y=W?y.filter(D=>{var V,K;return((V=D.full_name)==null?void 0:V.toLowerCase().includes(W))||((K=D.student_code)==null?void 0:K.includes(W))}):y;T(Y,F)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const O=document.getElementById("btn-sync-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const W=Object.values($).flatMap(D=>Object.keys(D)),Y=[...new Set([...k,...W])].sort();if(!Y.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}O.disabled=!0,O.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:D}=await Se(async()=>{const{syncPrayerSheet:K}=await import("./sync-C8r-x1ZV.js");return{syncPrayerSheet:K}},__vite__mapDeps([11,6,4])),V=y.map(K=>({id:K.id,student_code:K.student_code}));await D(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",Y,$,V),N(`Sync ละหมาด ${V.length} คน × ${Y.length} วัน สำเร็จ`,"success")}catch(D){N("Sync ไม่สำเร็จ: "+he(D),"error")}finally{O.disabled=!1,O.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const O=document.getElementById("btn-sync-all-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}O.disabled=!0,O.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:W}=await Se(async()=>{const{syncPrayerSheet:ue}=await import("./sync-C8r-x1ZV.js");return{syncPrayerSheet:ue}},__vite__mapDeps([11,6,4])),{getAllPrayerRecords:Y,getStudents:D}=await Se(async()=>{const{getAllPrayerRecords:ue,getStudents:_e}=await import("./api-CQwFwlFA.js");return{getAllPrayerRecords:ue,getStudents:_e}},__vite__mapDeps([0,1,2,3,4])),[V,K]=await Promise.all([Y(),D()]),Q={};for(const ue of V)Q[ue.student_id]||(Q[ue.student_id]={}),Q[ue.student_id][ue.check_date]=ue.status;const se=K.filter(ue=>ue.religion_room).map(ue=>({id:ue.id,student_code:ue.student_code})),ae=[...new Set(V.map(ue=>ue.check_date))].sort(),me=[...new Set([...k,...ae])].sort();if(!me.length||!se.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}O.textContent=`⏳ Sync ${se.length} คน × ${me.length} วัน...`,await W(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",me,Q,se),N(`✅ Sync ทุกห้อง ${se.length} คน × ${me.length} วัน สำเร็จ`,"success")}catch(W){N("Sync ไม่สำเร็จ: "+he(W),"error")}finally{O.disabled=!1,O.textContent="↑ Sync ทุกห้อง"}});const U=(O,W,Y)=>{var Q;(Q=document.getElementById("admin-prayer-modal"))==null||Q.remove();const D=document.createElement("div");D.id="admin-prayer-modal",D.className="fixed inset-0 z-[80] flex flex-col bg-white";const V=`${zt(O.days[0].date)}–${zt(O.days[O.days.length-1].date)}`,K=(Z,se)=>{var ue;const ae=((ue=$[Z])==null?void 0:ue[se])??null,me=ae?rt[ae]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${me?me.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${Z}" data-date="${se}" data-room="${Y}">
          ${me?`<span class="${me.color}">${me.label}</span>`:'<span class="text-gray-200">·</span>'}
        </button>`};D.innerHTML=`
        <div class="bg-emerald-700 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button id="adm-modal-close" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${O.n}</p>
            <p class="text-xs text-emerald-200">${V} · ${Y}</p>
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
                ${O.days.map(Z=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${Ls[Z.date.getDay()]} ${zt(Z.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${Z.ds}" data-room="${Y}">AllDay</button>
                  </th>`).join("")}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${W.map(Z=>`
                <tr class="hover:bg-gray-50/50" data-sid="${Z.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${Z.image_url?`<img src="${Z.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-xs">👤</div>'}
                      <span class="text-gray-800 truncate max-w-[120px]">${Z.full_name??"—"}</span>
                    </div>
                  </td>
                  ${O.days.map(se=>`<td class="px-2 py-2 text-center">${K(Z.id,se.ds)}</td>`).join("")}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${Z.id}" data-room="${Y}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`,document.body.appendChild(D),D.querySelector("#adm-modal-body").addEventListener("click",Z=>{const se=Z.target.closest(".adm-cell");if(!se)return;Z.stopPropagation();const ae=+se.dataset.sid,me=se.dataset.date;At(Z,ue=>A(ae,me,Y,ue))}),D.querySelectorAll(".adm-day-all").forEach(Z=>{Z.addEventListener("click",se=>{se.stopPropagation();const ae=Z.dataset.date;At(se,me=>H(W.map(ue=>[ue.id,ae,me]),Y))})}),D.querySelectorAll(".adm-row-all").forEach(Z=>{Z.addEventListener("click",se=>{se.stopPropagation();const ae=+Z.dataset.sid;At(se,me=>H(O.days.map(ue=>[ae,ue.ds,me]),Y))})}),D.querySelector("#adm-all-check").addEventListener("click",Z=>{Z.stopPropagation(),At(Z,se=>H(W.flatMap(ae=>O.days.map(me=>[ae.id,me.ds,se])),Y))}),D.querySelector("#adm-modal-close").addEventListener("click",()=>D.remove())}},i=()=>{document.getElementById("pr-tab-actions").innerHTML="",s&&(clearInterval(s),s=null);const p=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Filters panel -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
          <h3 class="font-bold text-gray-800 text-sm flex items-center gap-1.5">
            🔍 คัดกรองข้อมูล
          </h3>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">เลือกวันที่สแกน</label>
            <input type="date" id="hist-date-input" value="${p}"
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
    `;let j=[],_="",C=!1;const L=1e3,q=y=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[y]||"ไม่ระบุพื้นที่",B=y=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[y]||"bg-gray-50 text-gray-500 border-gray-100",b=async y=>{const k=[];for(let S=0;;S+=L){const{data:A,error:H}=await ie.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",y).not("location","is",null).order("created_at",{ascending:!1}).range(S,S+L-1);if(H)throw H;if(k.push(...A??[]),!A||A.length<L)break}return k},c=async()=>{var S;if(!document.getElementById("hist-table-body")){s&&(clearInterval(s),s=null);return}const k=((S=document.getElementById("hist-date-input"))==null?void 0:S.value)||p;if(!C){C=!0;try{j=await b(k),g()}catch(A){console.error("Fetch history failed:",A);const H=document.getElementById("hist-table-body");H&&(H.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${A.message}</td></tr>`)}finally{C=!1}}},g=()=>{var D,V;const y=((D=document.getElementById("hist-loc-filter"))==null?void 0:D.value)||"",k=(((V=document.getElementById("hist-search-input"))==null?void 0:V.value)||"").trim().toLowerCase(),S=j.filter(K=>{var Q,Z,se,ae;if(y&&K.location!==y||_&&(K.scanned_by||((Q=K.teachers)==null?void 0:Q.full_name)||"บันทึกมือ (เดิม)")!==_)return!1;if(k){const me=(((Z=K.students)==null?void 0:Z.full_name)||"").toLowerCase(),ue=(((se=K.students)==null?void 0:se.student_code)||"").toLowerCase(),_e=(K.main_room||"").toLowerCase(),Ie=(K.scanned_by||((ae=K.teachers)==null?void 0:ae.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),Te=K.input_method==="manual"?"กรอกรหัส manual":"qr";return me.includes(k)||ue.includes(k)||_e.includes(k)||Ie.includes(k)||Te.includes(k)}return!0}),A=S.length,H=S.filter(K=>K.status==="pray").length,E=S.filter(K=>K.status==="usor").length,T=A-H-E,R=document.getElementById("stat-hist-total"),F=document.getElementById("stat-hist-pray"),M=document.getElementById("stat-hist-usor"),U=document.getElementById("stat-hist-other");R&&(R.textContent=A),F&&(F.textContent=H),M&&(M.textContent=E),U&&(U.textContent=T);const z=new Set;j.forEach(K=>{var Z;const Q=K.scanned_by||((Z=K.teachers)==null?void 0:Z.full_name);Q&&z.add(Q)});const O=document.getElementById("hist-operators-wrap");O&&(z.size===0?O.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(O.innerHTML=Array.from(z).map(K=>{const Q=_===K;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${K.includes("(ครู)")||K.includes("ครู")?Q?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":Q?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${K}">${Q?"✓ ":""}${K}</span>`}).join(""),O.querySelectorAll(".op-filter-chip").forEach(K=>{K.addEventListener("click",()=>{const Q=K.dataset.op;_=_===Q?"":Q,g()})})));const W=document.getElementById("hist-table-count");W&&(W.textContent=`${S.length} รายการ`);const Y=document.getElementById("hist-table-body");if(Y){if(S.length===0){Y.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}Y.innerHTML=S.map((K,Q)=>{var Ue;const Z=K.created_at?new Date(K.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",se=K.students,ae=se!=null&&se.image_url?`<img src="${se.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((se==null?void 0:se.full_name)||"?").charAt(0)}</div>`,me=se?`<div class="flex items-center gap-2.5">
              ${ae}
              <div>
                <p class="font-bold text-gray-800 leading-none">${se.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${se.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${K.student_id})</span>`,ue={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[K.status]||`<span class="text-gray-400">${K.status||"—"}</span>`,_e=K.scanned_by||((Ue=K.teachers)==null?void 0:Ue.full_name)||"บันทึกมือ (เดิม)",Ie=K.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",Te=K.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${S.length-Q}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${Z}</td>
            <td class="px-4 py-3">${me}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${K.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${B(K.location)}">
                ${q(K.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${_e}</span>
              <div class="flex flex-wrap gap-1">${Ie}${Te}</div>
            </td>
            <td class="px-4 py-3 text-center">${ue}</td>
          </tr>
        `}).join("")}},$=()=>{s&&(clearInterval(s),s=null);const y=document.getElementById("hist-live-toggle");y&&y.checked&&(s=setInterval(c,4e3))};setTimeout(()=>{var S,A,H;(S=document.getElementById("btn-hist-refresh"))==null||S.addEventListener("click",c),(A=document.getElementById("hist-date-input"))==null||A.addEventListener("change",()=>{_="",c()}),(H=document.getElementById("hist-loc-filter"))==null||H.addEventListener("change",g);const y=document.getElementById("hist-search-input");y&&y.addEventListener("input",g);const k=document.getElementById("hist-live-toggle");k&&k.addEventListener("change",$),c(),$()},50)},a=(p,j=!1)=>p==null||p===""?j:["1","true","yes","on"].includes(String(p).trim().toLowerCase()),m=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${o.map(p=>`<option value="${p}">${p}</option>`).join("")}
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
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const p=document.getElementById("pr-save-cfg"),j=document.getElementById("pr-sheet-id").value.trim(),_=document.getElementById("pr-sheet-tab").value.trim()||"Solat",C=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";p.disabled=!0,p.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerSheetId",j),Ee("prayerSheetTab",_),Ee("prayerStudentRange",C)]),n.prayerSheetId=j,n.prayerSheetTab=_,n.prayerStudentRange=C,p.textContent="✅ บันทึกแล้ว",p.style.background="#16a34a",setTimeout(()=>{p.disabled=!1,p.textContent="บันทึกการตั้งค่า",p.style.background=""},1800),N("บันทึก Sheet config ละหมาดแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),p.disabled=!1,p.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var q,B,b;const p=document.getElementById("pr-save-scanner-safety"),j=(q=document.getElementById("pr-guard-male"))!=null&&q.checked?"true":"false",_=(B=document.getElementById("pr-guard-female"))!=null&&B.checked?"true":"false",C=parseInt(((b=document.getElementById("pr-manual-monthly-limit"))==null?void 0:b.value)||"2",10),L=String(Math.max(0,Math.min(31,Number.isFinite(C)?C:2)));p.disabled=!0,p.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerSameRoomGuardMaleEnabled",j),Ee("prayerSameRoomGuardFemaleEnabled",_),Ee("prayerManualEntryMonthlyLimit",L)]),n.prayerSameRoomGuardMaleEnabled=j,n.prayerSameRoomGuardFemaleEnabled=_,n.prayerManualEntryMonthlyLimit=L,N("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),p.textContent="✅ บันทึกแล้ว",setTimeout(()=>{p.disabled=!1,p.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(c){N("บันทึกไม่สำเร็จ: "+he(c),"error"),p.disabled=!1,p.textContent="บันทึกความปลอดภัยระบบสแกน"}})},w=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
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
    `;let p=[],j={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const _=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],C=c=>(c||"").split(/[\s,]+/).map(g=>g.trim()).filter(Boolean),L=c=>String(c||"").trim(),q=c=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[c]||"ทั้งหมด",B=async(c,g)=>{const $=await Me().catch(()=>({})),y=new Set(C($.prayerExtendedScannerStudents));g?y.add(String(c)):y.delete(String(c));const k=Array.from(y).join(",");return await Ee("prayerExtendedScannerStudents",k),n.prayerExtendedScannerStudents=k,k};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const c=document.getElementById("pr-save-scanner-time-cfg"),g=document.getElementById("pr-scan-start").value.trim()||"12:20",$=document.getElementById("pr-scan-end").value.trim()||"12:50",y=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![g,$,y].every(S=>/^\d{1,2}:\d{2}$/.test(S))){N("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}c.disabled=!0,c.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerScanStartTime",g),Ee("prayerScanEndTime",$),Ee("prayerScanExtendedEndTime",y)]),n.prayerScanStartTime=g,n.prayerScanEndTime=$,n.prayerScanExtendedEndTime=y,N("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),c.textContent="✅ บันทึกแล้ว",setTimeout(()=>{c.disabled=!1,c.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(S){N("บันทึกไม่สำเร็จ: "+he(S),"error"),c.disabled=!1,c.textContent="บันทึกช่วงเวลาสแกน"}});const b=async()=>{var g,$;const c=document.getElementById("scanners-list-wrap");if(c)try{const{data:y,error:k}=await ie.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if(k)throw k;const S=await Me().catch(()=>({})),A=y??[],H=C(S.prayerScannerTeachers),E=new Set(C(S.prayerExtendedScannerStudents));let T=[];if(H.length>0){const{data:ae,error:me}=await ie.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",H).order("teacher_code");if(me)throw me;T=ae??[]}const R=A.length+T.length;if(document.getElementById("scanner-count-badge").textContent=`${R} คน`,R===0){c.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const F=Object.fromEntries(_.map(ae=>[ae.key,new Set(C(S[`prayerScanner${ae.key}`]))])),M=A.map(ae=>{const me=String(ae.student_code||"").trim(),ue=_.filter(Ie=>{var Te;return(Te=F[Ie.key])==null?void 0:Te.has(me)}).map(Ie=>Ie.key),_e=E.has(me);return{...ae,type:"student",code:me,name:ae.full_name||"",roomInfo:ae.main_room||"",gender:L(ae.gender),permission:_e?"extended":"normal",permissionLabel:_e?"ขยายเวลา":"ทั่วไป",assignedDays:ue,searchText:[me,ae.full_name,ae.main_room,ae.gender,_e?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),U=T.map(ae=>({...ae,type:"teacher",code:String(ae.teacher_code||"").trim(),name:ae.full_name||"",roomInfo:ae.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[ae.teacher_code,ae.full_name,ae.dept,"ครู คุณครู"].join(" ").toLowerCase()})),z=[...M,...U],O=Oe(z.map(ae=>ae.roomInfo)),W=M.filter(ae=>ae.gender==="ชาย").length,Y=M.filter(ae=>ae.gender==="หญิง").length,D=M.filter(ae=>ae.permission==="extended").length,V=M.filter(ae=>ae.assignedDays.length===0).length,K=(ae,me,ue="indigo")=>{const _e={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${_e[ue]||_e.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${ae}</p>
              <p class="text-lg font-extrabold leading-tight">${me}</p>
            </div>
          `};c.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${K("ทั้งหมด",R,"indigo")}
              ${K("ชาย",W,"emerald")}
              ${K("หญิง",Y,"rose")}
              ${K("ครู",T.length,"slate")}
              ${K("ขยายเวลา",D,"amber")}
              ${K("ยังไม่มีเวร",V,V?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${R}`],["male",`ชาย ${W}`],["female",`หญิง ${Y}`],["teacher",`ครู ${T.length}`]].map(([ae,me])=>`
                  <button type="button" data-scanner-audience="${ae}"
                    class="scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition">
                    ${me}
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
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${q(j.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const Q=()=>{const ae=j,me=ae.q.trim().toLowerCase();return z.filter(ue=>!(ae.audience==="male"&&!(ue.type==="student"&&ue.gender==="ชาย")||ae.audience==="female"&&!(ue.type==="student"&&ue.gender==="หญิง")||ae.audience==="teacher"&&ue.type!=="teacher"||ae.type&&ue.type!==ae.type||ae.gender&&ue.gender!==ae.gender||ae.room&&ue.roomInfo!==ae.room||ae.permission&&ue.permission!==ae.permission||ae.day==="none"&&!(ue.type==="student"&&ue.assignedDays.length===0)||ae.day&&ae.day!=="none"&&!ue.assignedDays.includes(ae.day)||me&&!ue.searchText.includes(me)))},Z=()=>{c.querySelectorAll(".scanner-audience-tab").forEach(ue=>{const _e=ue.dataset.scannerAudience===j.audience;ue.className=_e?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const ae=document.getElementById("scanner-filtered-count");ae&&(ae.textContent=Q().length);const me=document.getElementById("scanner-active-audience-label");me&&(me.textContent=q(j.audience))},se=()=>{var Te,Ue,Qe;Z();const ae=Q(),me=document.getElementById("scanner-table-wrap"),ue=document.getElementById("scanner-filtered-count");ue&&(ue.textContent=ae.length),document.getElementById("scanner-count-badge").textContent=ae.length===R?`${R} คน`:`${ae.length}/${R} คน`;const _e=(Ue=(Te=document.activeElement)==null?void 0:Te.id)!=null&&Ue.startsWith("scanner-filter-")?document.activeElement.id:"",Ie=_e==="scanner-filter-q"?document.activeElement.selectionStart:null;if(me.innerHTML=`
            <table class="w-full text-xs min-w-[980px]">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-left align-top">
                    <span class="block mb-1">ประเภท</span>
                    <select id="scanner-filter-type" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="student" ${j.type==="student"?"selected":""}>นักเรียน</option>
                      <option value="teacher" ${j.type==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-2 py-3 text-left align-top">
                    <span class="block mb-1">รหัส/ค้นหา</span>
                    <input id="scanner-filter-q" value="${te(j.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${O.map(P=>`<option value="${te(P)}" ${j.room===P?"selected":""}>${te(P)}</option>`).join("")}
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">เพศ</span>
                    <select id="scanner-filter-gender" class="w-24 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="ชาย" ${j.gender==="ชาย"?"selected":""}>ชาย</option>
                      <option value="หญิง" ${j.gender==="หญิง"?"selected":""}>หญิง</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ประเภทสิทธิ์</span>
                    <select id="scanner-filter-permission" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="normal" ${j.permission==="normal"?"selected":""}>ทั่วไป</option>
                      <option value="extended" ${j.permission==="extended"?"selected":""}>ขยายเวลา</option>
                      <option value="teacher" ${j.permission==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">วันรับผิดชอบ</span>
                    <select id="scanner-filter-day" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${_.map(P=>`<option value="${P.key}" ${j.day===P.key?"selected":""}>${P.full}</option>`).join("")}
                      <option value="none" ${j.day==="none"?"selected":""}>ยังไม่กำหนด</option>
                    </select>
                  </th>
                  <th class="px-4 py-3 text-right align-top">การจัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${ae.length?ae.map(P=>{if(P.type==="teacher")return`
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${te(P.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${P.image_url?`<img src="${te(P.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`:'<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>'}
                            <span class="font-medium text-gray-800">${te(P.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${te(P.roomInfo||"—")}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${te(P.code)}" data-name="${te(P.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `;const ce=_.map(oe=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${P.assignedDays.includes(oe.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${te(P.code)}" data-day="${oe.key}" data-name="${te(P.name)}" title="เวรวัน${oe.full}">
                        ${oe.label}
                      </button>
                    `).join(" ");return`
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${te(P.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${P.image_url?`<img src="${te(P.image_url)}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                          <span class="font-medium text-gray-800">${te(P.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${te(P.roomInfo||"—")}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${P.gender==="หญิง"?"bg-rose-50 text-rose-700 border-rose-100":"bg-sky-50 text-sky-700 border-sky-100"} text-[10px] font-bold border">${te(P.gender||"—")}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${P.permission==="extended"?"bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100":"bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"}"
                          data-code="${te(P.code)}" data-name="${te(P.name)}" data-extended="${P.permission==="extended"?"1":"0"}">
                          ${P.permission==="extended"?"ขยายเวลา":"ทั่วไป"}
                        </button>
                      </td>
                      <td class="px-3 py-2">
                        <div class="flex gap-1 items-center">
                          ${ce}
                          ${P.assignedDays.length===0?'<span class="ml-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold">ยังไม่มีเวร</span>':""}
                        </div>
                      </td>
                      <td class="px-4 py-2 text-right">
                        <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                          data-id="${P.id}" data-code="${te(P.code)}" data-name="${te(P.name)}" data-type="student">
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
          `,["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(P=>{var ce;(ce=document.getElementById(P))==null||ce.addEventListener("change",oe=>{const ne=P.replace("scanner-filter-","");j[ne]=oe.target.value,se()})}),(Qe=document.getElementById("scanner-filter-q"))==null||Qe.addEventListener("input",P=>{j.q=P.target.value,se()}),_e){const P=document.getElementById(_e);P==null||P.focus(),_e==="scanner-filter-q"&&Ie!==null&&(P==null||P.setSelectionRange(Ie,Ie))}c.querySelectorAll(".btn-toggle-extended-scanner").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.code,oe=P.dataset.name,ne=P.dataset.extended!=="1";P.disabled=!0,P.textContent="กำลังบันทึก...";try{await B(ce,ne),N(`ปรับสิทธิ์ "${oe}" เป็น${ne?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),b()}catch(G){N("ปรับสิทธิ์ไม่สำเร็จ: "+G.message,"error"),P.disabled=!1,P.textContent=P.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),c.querySelectorAll(".btn-toggle-day-scanner").forEach(P=>{P.addEventListener("click",async()=>{var G;const ce=P.dataset.code,oe=P.dataset.day,ne=P.dataset.name;P.disabled=!0;try{const J=await Me().catch(()=>({})),de=`prayerScanner${oe}`;let le=C(J[de]);le.includes(ce)?le=le.filter(ee=>ee!==ce):le.push(ce),await Ee(de,le.join(","));const X=((G=_.find(ee=>ee.key===oe))==null?void 0:G.full)||oe;N(`ปรับสิทธิ์เวรวัน${X} ของ "${ne}" สำเร็จ`,"success"),b()}catch(J){N("ปรับสิทธิ์เวรล้มเหลว: "+J.message,"error"),P.disabled=!1}})}),c.querySelectorAll(".btn-revoke-scanner").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.type,oe=P.dataset.name;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${oe}" หรือไม่?`))try{if(ce==="student"){const ne=+P.dataset.id,G=P.dataset.code,{error:J}=await ie.from("students").update({can_scan_prayer:!1}).eq("id",ne);if(J)throw J;await B(G,!1);const de=await Me().catch(()=>({}));for(const le of _){const X=`prayerScanner${le.key}`,ee=C(de[X]).filter(pe=>pe!==G);await Ee(X,ee.join(","))}}else{const ne=P.dataset.code,G=await Me().catch(()=>({})),J=C(G.prayerScannerTeachers).filter(de=>de!==ne);await Ee("prayerScannerTeachers",J.join(","))}N(`ถอนสิทธิ์ "${oe}" สำเร็จ`,"success"),b()}catch(ne){N("ทำรายการไม่สำเร็จ: "+ne.message,"error")}})})};c.querySelectorAll("[data-scanner-audience]").forEach(ae=>{ae.addEventListener("click",()=>{j.audience=ae.dataset.scannerAudience,j.type="",j.gender="",j.audience==="teacher"&&(j.day="",j.permission=""),se()})}),(g=document.getElementById("btn-filter-unassigned-scanner"))==null||g.addEventListener("click",()=>{j.day="none",j.type="student",se()}),($=document.getElementById("btn-reset-scanner-filters"))==null||$.addEventListener("click",()=>{j={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},se()}),se()}catch(y){c.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${y.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const c=document.getElementById("pr-scanner-search-input").value.trim();if(!c){N("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const g=c.split(/[\s,]+/).map($=>$.trim()).filter(Boolean);if(g.length)try{const[$,y]=await Promise.all([ie.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",g),ie.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",g)]);if($.error)throw $.error;if(y.error)throw y.error;const k=$.data??[],S=y.data??[];p=[...k.map(E=>({...E,code:E.student_code,type:"student",display_info:`รหัส ${E.student_code} · ห้อง ${E.main_room||"—"} · ${E.gender||"ไม่ระบุเพศ"}`})),...S.map(E=>({...E,code:E.teacher_code,type:"teacher",display_info:`รหัสครู ${E.teacher_code} · กลุ่มสาระ ${E.dept||"—"}`}))];const A=document.getElementById("scanner-preview-container"),H=document.getElementById("scanner-preview-cards");if(!p.length){A.classList.add("hidden"),N("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}A.classList.remove("hidden"),H.innerHTML=p.map(E=>`
          <div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">
            ${E.type==="student"?E.image_url?`<img src="${E.image_url}" class="student-avatar-premium w-10 h-14" />`:'<div class="student-avatar-premium-placeholder w-10 h-14 bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">👤</div>':E.image_url?`<img src="${E.image_url}" class="w-10 h-10 rounded-full object-cover flex-shrink-0"/>`:'<div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">👨‍🏫</div>'}
            <div class="min-w-0">
              <p class="font-bold text-gray-800 text-xs truncate">
                ${E.full_name}
                ${E.type==="teacher"?'<span class="ml-1 px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">คุณครู</span>':""}
              </p>
              <p class="text-[10px] text-gray-400">${E.display_info}</p>
            </div>
          </div>
        `).join("")}catch($){N("ค้นหาล้มเหลว: "+$.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!p.length)return;const c=document.getElementById("btn-confirm-scanner-grant");c.disabled=!0,c.textContent="⏳ กำลังบันทึก...";try{const g=p.filter(y=>y.type==="student").map(y=>y.id),$=p.filter(y=>y.type==="teacher").map(y=>y.code);if(g.length>0){const{error:y}=await ie.from("students").update({can_scan_prayer:!0}).in("id",g);if(y)throw y}if($.length>0){const y=await Me().catch(()=>({}));let k=C(y.prayerScannerTeachers);$.forEach(S=>{k.includes(S)||k.push(S)}),await Ee("prayerScannerTeachers",k.join(","))}N(`มอบสิทธิ์สำเร็จ ${p.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),p=[],b()}catch(g){N("บันทึกไม่สำเร็จ: "+g.message,"error")}finally{c.disabled=!1,c.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),b()},f=p=>{s&&(clearInterval(s),s=null),document.querySelectorAll("[data-tab]").forEach(j=>{j.className=j.dataset.tab===p?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),p==="scores"?d():p==="history"?i():p==="scanners"?w():m()};document.getElementById("pr-tab-scores").addEventListener("click",()=>f("scores")),(I=document.getElementById("pr-tab-history"))==null||I.addEventListener("click",()=>f("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>f("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>f("config")),r&&((u=document.getElementById("pr-tab-scanner-cam"))==null||u.addEventListener("click",async()=>{const{renderStudentPrayerScanner:p}=await Se(async()=>{const{renderStudentPrayerScanner:j}=await import("./student-views-jtTIrgpg.js");return{renderStudentPrayerScanner:j}},__vite__mapDeps([30,6,0,1,2,3,4,14,31,32,16,33,34,21,17,10,12,28,15,35]));p(t)})),f("scores")}function Is(e,s,t,n){var x;(x=document.getElementById("rsa-modal"))==null||x.remove();const l=!!e,o=document.createElement("div");o.id="rsa-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#rsa-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#rsa-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#rsa-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const i={name:o.querySelector("#rsa-name").value.trim(),max_score:parseInt(o.querySelector("#rsa-max").value)||20,sort_order:parseInt(o.querySelector("#rsa-order").value)||0,sheet_col:o.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:s,semester:t};l?await lo(e.id,i):await io(i),N("บันทึกสำเร็จ","success"),o.remove(),n()}catch(i){N("บันทึกไม่สำเร็จ: "+he(i),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}async function Rr(){var x,r,d,i;Le("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let e=null,s="",t=null;try{const{data:a}=await ie.auth.getSession();if(e=((r=(x=a==null?void 0:a.session)==null?void 0:x.user)==null?void 0:r.id)??null,s=((i=(d=a==null?void 0:a.session)==null?void 0:d.user)==null?void 0:i.email)??"",e){const{data:m}=await ie.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",e).maybeSingle();t=m??null}}catch{}const n="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";$e(`<div class="max-w-lg mx-auto animate-fade">

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
  </div>`);const l=(a,m,w)=>{const f=document.getElementById(a);f.className=`text-xs text-center mt-2 py-2 rounded-lg ${w?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,f.textContent=m,f.classList.remove("hidden"),setTimeout(()=>f.classList.add("hidden"),3500)},o=async a=>{const{data:m,error:w}=await ie.rpc("upsert_admin_teacher_profile",{p_profile_id:e,p_full_name:a.full_name??null,p_username:a.username??null,p_login_email:a.login_email??null});if(w)throw w;return m};document.getElementById("btn-save-name").addEventListener("click",async()=>{const a=document.getElementById("btn-save-name"),m=document.getElementById("adm-name").value.trim();if(!m){l("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({full_name:m,login_email:s}),l("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const w=document.getElementById("user-name");w&&(w.textContent=m)}catch(w){l("name-msg","บันทึกไม่สำเร็จ: "+he(w),!1)}finally{a.disabled=!1,a.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var f,v;const a=document.getElementById("btn-save-username"),m=document.getElementById("adm-username").value.trim().toLowerCase(),w=/^[a-z0-9._-]{3,32}$/.test(m);if(!m){l("username-msg","กรุณากรอก username",!1);return}if(!w){l("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({username:m,login_email:s}),l("username-msg",`บันทึก username "${m}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=m}catch(h){const I=(f=h.message)!=null&&f.includes("unique")||(v=h.message)!=null&&v.includes("duplicate")?`username "${m}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+he(h);l("username-msg",I,!1)}finally{a.disabled=!1,a.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",a=>{const m=a.target.selectionStart;a.target.value=a.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),a.target.setSelectionRange(m,m)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const a=document.getElementById("btn-save-email"),m=document.getElementById("adm-email").value.trim();if(!m||!m.includes("@")){l("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}a.disabled=!0,a.textContent="กำลังส่งลิงก์...";try{const{error:w}=await ie.auth.updateUser({email:m});if(w)throw w;l("email-msg","ส่งลิงก์ยืนยันไปที่ "+m+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(w){l("email-msg","ไม่สำเร็จ: "+he(w),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const a=document.getElementById("btn-save-pw"),m=document.getElementById("adm-pw").value,w=document.getElementById("adm-pw2").value;if(!m||m.length<6){l("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(m!==w){l("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}a.disabled=!0,a.textContent="กำลังเปลี่ยน...";try{const{error:f}=await ie.auth.updateUser({password:m});if(f)throw f;l("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(f){l("pw-msg","ไม่สำเร็จ: "+he(f),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนรหัสผ่าน"}})}async function Or(){var x;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>{document.querySelectorAll("[data-nav]").forEach(d=>{const i=d.dataset.nav===r;d.classList.toggle("bg-indigo-800",i),d.classList.toggle("text-white",i),d.classList.toggle("text-indigo-200",!i)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const n=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),l=(r,d,i,a)=>`
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
  </div>`);const o=async()=>{try{const r=await ko();document.getElementById("stat-teacher-today").textContent=r.teacherToday,document.getElementById("stat-teacher-month").textContent=r.teacherMonth,document.getElementById("stat-teacher-total").textContent=r.teacherTotal,document.getElementById("stat-student-today").textContent=r.studentToday,document.getElementById("stat-student-month").textContent=r.studentMonth,document.getElementById("stat-student-total").textContent=r.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{N("โหลดสถิติไม่สำเร็จ","error")}};await o(),(x=document.getElementById("stat-refresh"))==null||x.addEventListener("click",o)}async function Pr(){var x;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav===r),d.classList.toggle("text-white",d.dataset.nav===r),d.classList.toggle("text-indigo-200",d.dataset.nav!==r)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const t=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],n=async()=>{const r=await as(),d=t.map(a=>({building:a,rooms:r.filter(m=>m.building===a)}));[...new Set(r.map(a=>a.building).filter(a=>!t.includes(a)))].forEach(a=>d.push({building:a,rooms:r.filter(m=>m.building===a)})),document.getElementById("crm-content").innerHTML=d.filter(a=>a.rooms.length>0).map(a=>`
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
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(a=>{a.addEventListener("click",()=>o(null,a.dataset.building,r))}),document.querySelectorAll(".crm-edit-btn").forEach(a=>{const m=r.find(w=>w.id===parseInt(a.dataset.id));m&&a.addEventListener("click",()=>o(m,m.building,r))}),document.querySelectorAll(".crm-del-btn").forEach(a=>{a.addEventListener("click",()=>{const m=r.find(w=>w.id===parseInt(a.dataset.id));l(m)})})},l=r=>{var i;(i=document.getElementById("crm-confirm"))==null||i.remove();const d=document.createElement("div");d.id="crm-confirm",d.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",d.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${r==null?void 0:r.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${r==null?void 0:r.building}${r!=null&&r.name?" · "+r.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(d),d.querySelector("#crm-conf-no").addEventListener("click",()=>d.remove()),d.querySelector("#crm-conf-yes").addEventListener("click",async()=>{d.remove();try{await Xn(r.id),N("ลบห้องแล้ว ✅","success"),n()}catch(a){N("ลบไม่สำเร็จ: "+he(a),"error")}})},o=(r,d,i)=>{var w;(w=document.getElementById("crm-modal"))==null||w.remove();const a=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...i.map(f=>f.building)])],m=document.createElement("div");m.id="crm-modal",m.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${r?"แก้ไขห้อง":"เพิ่มห้องใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${a.map(f=>`<option value="${f}" ${f===((r==null?void 0:r.building)??d)?"selected":""}>${f}</option>`).join("")}
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
    </div>`,document.body.appendChild(m),m.querySelector("#crm-cancel").addEventListener("click",()=>m.remove()),m.querySelector("#crm-save").addEventListener("click",async()=>{const f=m.querySelector("#crm-save"),v=m.querySelector("#crm-building").value,h=m.querySelector("#crm-number").value.trim(),I=m.querySelector("#crm-name").value.trim()||null,u=m.querySelector("#crm-teaching").checked;if(!v||!h){N("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}f.disabled=!0,f.textContent="⏳";try{r?await Un(r.id,{building:v,room_number:h,name:I,is_teaching_room:u}):await Vn({building:v,room_number:h,name:I,is_teaching_room:u}),N(r?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),m.remove(),n()}catch(p){N("บันทึกไม่สำเร็จ: "+he(p),"error"),f.disabled=!1,f.textContent="บันทึก"}})};e(`<div class="max-w-3xl mx-auto animate-fade">
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
  </div>`;function zr(e,s){const t=e.querySelector(`#${s}-sessions-list`),n=()=>{t.querySelectorAll(`.${s}-session-pill`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{const x=o.classList.contains("bg-violet-600");o.className=`${s}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${x?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),t.querySelectorAll(`.${s}-session-remove`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{o.closest(`.${s}-session`).remove(),l()})})},l=()=>{const o=[...t.querySelectorAll(`.${s}-session`)];o.forEach((x,r)=>{x.querySelector(`.${s}-session-label`).textContent=`วันที่ ${r+1}`,x.querySelector(`.${s}-session-remove`).classList.toggle("hidden",o.length<=1)}),n()};e.querySelector(`#${s}-add-session`).addEventListener("click",()=>{const o=t.querySelectorAll(`.${s}-session`).length,x=document.createElement("div");x.innerHTML=Xa(s,o),t.appendChild(x.firstElementChild),l()}),n()}function Fr(e,s){return[...e.querySelectorAll(`.${s}-session`)].map(t=>({date:t.querySelector(`.${s}-session-date`).value,periods:[...t.querySelectorAll(`.${s}-session-pill.bg-violet-600`)].map(n=>parseInt(n.dataset.period))}))}const $i={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},Ur=e=>$i[e]??"",Vr=e=>{var t,n;const s=(((t=e.target_teacher_ids)==null?void 0:t.length)??0)+(((n=e.target_student_ids)==null?void 0:n.length)??0);return s?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${s} คน</span>`:""};async function Gr(e,s,t="all"){try{const n=t==="teacher"?["all_teachers"]:t==="student"?["all_students"]:t==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(n.map(l=>ie.functions.invoke("send-push",{body:{title:`📢 ${e}`,body:(s??"").slice(0,150),url:l==="all_students"?"student.html":"teacher.html",target:l}})))}catch{}}let Ta=null;function Wr(){return Ta||(Ta=Promise.all([Re(),Et()]).then(([e,s])=>({teachers:e,students:s})).catch(()=>({teachers:[],students:[]}))),Ta}async function Yr(){var x;Le("announcements"),document.getElementById("page-title").textContent="ประกาศ";const e=r=>String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=r=>new Date(r).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});$e(`<div class="animate-fade">
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
      </div>`;return}const i={};try{(await To(d.map(m=>m.id))).forEach(m=>{i[m.announcement_id]=(i[m.announcement_id]??0)+1})}catch{}r.innerHTML=d.map(a=>{var m,w;return`
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
                ${(m=a.event_periods)!=null&&m.length?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${a.event_periods.sort((f,v)=>f-v).join(", ")}</span>`:""}
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
      </div>`}).join(""),r.querySelectorAll(".ann-toggle-btn").forEach(a=>{a.addEventListener("click",async()=>{const m=Number(a.dataset.id),w=a.dataset.active==="true";a.disabled=!0,a.textContent="...";try{await ya(m,{isActive:!w}),await t()}catch{N("บันทึกไม่สำเร็จ","error"),a.disabled=!1}})}),r.querySelectorAll(".ann-edit-btn").forEach(a=>{a.addEventListener("click",()=>{const m=d.find(w=>w.id===Number(a.dataset.id));m&&o(m,t)})}),r.querySelectorAll(".ann-del-btn").forEach(a=>{a.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${a.dataset.title}" ?`)){a.disabled=!0;try{await jo(Number(a.dataset.id)),await t()}catch{N("ลบไม่สำเร็จ","error"),a.disabled=!1}}})}),r.querySelectorAll(".ann-rsvp-list-btn").forEach(a=>{a.addEventListener("click",async()=>l(Number(a.dataset.id),a.dataset.title))}),r.querySelectorAll(".ann-comments-view-btn").forEach(a=>{a.addEventListener("click",async()=>n(Number(a.dataset.id),a.dataset.title,t))})},n=async(r,d,i)=>{const a=await Oo(r).catch(()=>[]),m=f=>new Date(f).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),w=document.createElement("div");w.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",w.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${e(d)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${a.length?a.map(f=>{var v,h;return`
            <div class="flex items-start gap-2" data-comment-id="${f.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${e((((v=f.teachers)==null?void 0:v.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${e(((h=f.teachers)==null?void 0:h.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${f.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${e(f.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${m(f.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(w),w.querySelector("#comments-list-close").onclick=()=>w.remove(),w.addEventListener("click",f=>{f.target===w&&w.remove()}),w.querySelectorAll(".comment-del-btn").forEach(f=>{f.addEventListener("click",async()=>{var v;if(confirm("ลบความคิดเห็นนี้?"))try{await Po(Number(f.dataset.id)),(v=w.querySelector(`[data-comment-id="${f.dataset.id}"]`))==null||v.remove(),await(i==null?void 0:i())}catch(h){N("ลบไม่สำเร็จ: "+he(h),"error")}})})},l=async(r,d)=>{const{getAnnouncementRsvps:i}=await Se(async()=>{const{getAnnouncementRsvps:h}=await import("./api-CQwFwlFA.js");return{getAnnouncementRsvps:h}},__vite__mapDeps([0,1,2,3,4])),a=await i(r).catch(()=>[]),m={yes:[],maybe:[],no:[]};a.forEach(h=>{m[h.response]&&m[h.response].push(h)});const w=h=>{var I,u;return`<li class="text-sm text-gray-700">${e(((I=h.teachers)==null?void 0:I.full_name)??"?")} <span class="text-xs text-gray-400">${((u=h.teachers)==null?void 0:u.dept)??""}</span></li>`},f=(h,I,u,p)=>m[h].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${p} mb-1.5">${I} ${u} (${m[h].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${m[h].map(w).join("")}</ul>
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
          ${f("yes","✅","สนใจเข้าร่วมแน่นอน","text-emerald-700")}
          ${f("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
          ${f("no","❌","ไม่สนใจ","text-gray-500")}
          ${a.length?`<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${a.length} คน</p>`:""}
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#rsvp-list-close").onclick=()=>v.remove(),v.addEventListener("click",h=>{h.target===v&&v.remove()})},o=(r,d)=>{var B;(B=document.getElementById("ann-modal"))==null||B.remove();const i=document.createElement("div");i.id="ann-modal",i.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const a=!!(r!=null&&r.id);i.innerHTML=`
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
      </div>`,document.body.appendChild(i);const m=()=>i.remove();i.querySelector("#ann-modal-close").onclick=m,i.querySelector("#ann-modal-cancel").onclick=m,i.addEventListener("click",b=>{b.target===i&&m()});let w=null,f=null;Wr().then(({teachers:b,students:c})=>{document.body.contains(i)&&(w=za({wrap:i.querySelector("#ann-target-teachers-wrap"),chipsWrap:i.querySelector("#ann-target-teachers-chips"),teachers:b,value:(r==null?void 0:r.target_teacher_ids)??[]}),f=As({wrap:i.querySelector("#ann-target-students-wrap"),chipsWrap:i.querySelector("#ann-target-students-chips"),students:c,value:(r==null?void 0:r.target_student_ids)??[]}))});const v=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],h=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],I=(b,c)=>{const g=document.createElement("div");g.className="mt-1.5 hidden",g.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${c.map($=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${$}">${$}</button>`).join("")}
        </div>`,b.parentNode.appendChild(g),b.addEventListener("focus",()=>g.classList.remove("hidden")),b.addEventListener("blur",()=>setTimeout(()=>g.classList.add("hidden"),150)),g.querySelectorAll(".ann-chip").forEach($=>{$.addEventListener("mousedown",y=>y.preventDefault()),$.addEventListener("click",()=>{b.value.trim()?b.value+=(b.tagName==="TEXTAREA"?`
`:" ")+$.dataset.val:b.value=$.dataset.val,b.focus()})})};I(i.querySelector("#ann-title"),v),I(i.querySelector("#ann-body"),h);let u=(r==null?void 0:r.file_url)??null;const p=i.querySelector("#ann-image-status"),j=i.querySelector("#ann-image-preview"),_=i.querySelector("#ann-image-preview-img");i.querySelector("#ann-image-file").addEventListener("change",async b=>{var g;const c=(g=b.target.files)==null?void 0:g[0];if(c){p.textContent="กำลังอัปโหลด...";try{u=await Ks(c),_.src=u,j.classList.remove("hidden"),p.textContent="อัปโหลดสำเร็จ ✅"}catch($){p.textContent="อัปโหลดไม่สำเร็จ: "+he($)}b.target.value=""}}),i.querySelector("#ann-image-remove").addEventListener("click",()=>{u=null,j.classList.add("hidden"),p.textContent=""});let C=[];i.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const b=i.querySelector("#ann-cal-picker");if(!b.classList.contains("hidden")){b.classList.add("hidden");return}b.classList.remove("hidden");const c=i.querySelector("#ann-cal-event-sel");if(c.options.length<=1)try{const{getWorkCalendarEvents:g,getSystemConfig:$}=await Se(async()=>{const{getWorkCalendarEvents:A,getSystemConfig:H}=await import("./api-CQwFwlFA.js");return{getWorkCalendarEvents:A,getSystemConfig:H}},__vite__mapDeps([0,1,2,3,4]));let y=new Date().getFullYear()+543,k=1;try{const A=await $();y=A.academicYear??A.academic_year??y,k=A.semester??k}catch{}C=await g(y,k);const S={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};C.forEach(A=>{const H=document.createElement("option");H.value=A.id;const E=A.event_type==="inspection"&&A.round_number?` ครั้งที่ ${A.round_number}`:"",T=new Date(A.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});H.textContent=`${S[A.event_type]??"📌"}${E} ${A.label} (${T})`,c.appendChild(H)})}catch(g){c.innerHTML=`<option>โหลดไม่สำเร็จ: ${g.message}</option>`}}),i.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const b=+i.querySelector("#ann-cal-event-sel").value,c=C.find(S=>S.id===b),g=i.querySelector("#ann-cal-preview"),$=i.querySelector("#ann-cal-fill");if(!c){g.classList.add("hidden"),$.classList.add("hidden");return}const y=(c.work_calendar_items||[]).sort((S,A)=>S.sort_order-A.sort_order),k=new Date(c.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});g.innerHTML=`<p class="font-semibold">${c.label}</p>
        <p class="text-indigo-600">📅 ${k}${c.event_type==="inspection"&&c.round_number?` · ครั้งที่ ${c.round_number}`:""}</p>
        ${c.description?`<p>${c.description}</p>`:""}
        ${y.length?`<ul class="mt-1 space-y-0.5">${y.map(S=>`<li>☑ ${S.item_label}</li>`).join("")}</ul>`:""}`,g.classList.remove("hidden"),$.classList.remove("hidden")}),i.querySelector("#ann-cal-fill").addEventListener("click",()=>{const b=+i.querySelector("#ann-cal-event-sel").value,c=C.find(S=>S.id===b);if(!c)return;const g=(c.work_calendar_items||[]).sort((S,A)=>S.sort_order-A.sort_order),$=new Date(c.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),y=c.event_type==="inspection"&&c.round_number?` ครั้งที่ ${c.round_number}`:"";i.querySelector("#ann-title").value=c.label+(y?` (${y.trim()})`:"");const k=[];c.description&&k.push(c.description),g.length&&(k.push("สิ่งที่ต้องเตรียม:"),g.forEach(S=>k.push(`• ${S.item_label}`))),k.push(`กำหนดวันที่: ${$}`),i.querySelector("#ann-body").value=k.join(`
`),c.event_date&&(i.querySelector("#ann-due").value=c.event_date),i.querySelector("#ann-cal-picker").classList.add("hidden")}),i.querySelectorAll(".ann-type-btn").forEach(b=>{b.addEventListener("click",()=>{const c=b.dataset.type;i.querySelectorAll(".ann-type-btn").forEach(g=>{const $=g.dataset.type==="training";g.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${g.dataset.type===c?$?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":$?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),i.querySelector("#ann-training-fields").classList.toggle("hidden",c!=="training")})});const L=b=>b==="teacher"?"bg-sky-600 text-white border-sky-600":b==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",q=b=>b==="teacher"?"hover:border-sky-300":b==="student"?"hover:border-teal-300":"hover:border-indigo-300";i.querySelectorAll(".ann-audience-btn").forEach(b=>{b.addEventListener("click",()=>{i.querySelectorAll(".ann-audience-btn").forEach(c=>{c.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${c.dataset.audience===b.dataset.audience?L(c.dataset.audience):`bg-white text-gray-600 border-gray-200 ${q(c.dataset.audience)}`}`})})}),zr(i,"ann"),i.querySelectorAll(".ann-filter-btn").forEach(b=>{b.addEventListener("click",()=>{i.querySelectorAll(".ann-filter-btn").forEach(c=>{c.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${c.dataset.filter===b.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),i.querySelector("#ann-modal-save").addEventListener("click",async()=>{var U,z;const b=i.querySelector("#ann-title").value.trim();if(!b){N("กรุณากรอกหัวข้อ","warning");return}const c=i.querySelector("#ann-body").value.trim()||null,g=i.querySelector("#ann-active-toggle").dataset.on==="true",$=i.querySelector("#ann-pin").dataset.on==="true"?1:0,y=i.querySelector("#ann-ack").dataset.on==="true",k=i.querySelector("#ann-due").value||null,S=i.querySelector(".ann-type-btn.bg-violet-600")||(r==null?void 0:r.ann_type)==="training"?"training":"general",A=((U=i.querySelector(".ann-audience-btn.text-white"))==null?void 0:U.dataset.audience)??(r==null?void 0:r.audience)??"all",H=i.querySelector("#ann-video-url").value.trim()||null,E=S==="training"&&i.querySelector("#ann-event-location").value.trim()||null,T=((z=i.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:z.dataset.filter)??(r==null?void 0:r.schedule_filter)??"all",R=(w==null?void 0:w.getValue())??(r==null?void 0:r.target_teacher_ids)??[],F=(f==null?void 0:f.getValue())??(r==null?void 0:r.target_student_ids)??[];if(S==="training"){if(!E){N("กรุณาระบุสถานที่","warning");return}const O=Fr(i,"ann");for(const Y of O){if(!Y.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!Y.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const W=i.querySelector("#ann-modal-save");W.disabled=!0,W.textContent="กำลังบันทึก...";try{a?await ya(r.id,{title:b,body:c,isActive:g,priority:$,requiresAck:y,dueDate:k,annType:S,eventDate:O[0].date,eventPeriods:O[0].periods,eventLocation:E,scheduleFilter:T,fileUrl:u,videoUrl:H,audience:A,targetTeacherIds:R,targetStudentIds:F}):O.length>1?(await Promise.all(O.map(Y=>fa({title:b,body:c,isActive:g,priority:$,requiresAck:y,dueDate:k,annType:S,eventDate:Y.date,eventPeriods:Y.periods,eventLocation:E,scheduleFilter:T,fileUrl:u,videoUrl:H,audience:A,targetTeacherIds:R,targetStudentIds:F}))),N(`สร้าง ${O.length} ประกาศสำเร็จ ✅`,"success")):(await fa({title:b,body:c,isActive:g,priority:$,requiresAck:y,dueDate:k,annType:S,eventDate:O[0].date,eventPeriods:O[0].periods,eventLocation:E,scheduleFilter:T,fileUrl:u,videoUrl:H,audience:A,targetTeacherIds:R,targetStudentIds:F}),N("บันทึกสำเร็จ ✅","success")),m(),await d()}catch(Y){N("บันทึกไม่สำเร็จ: "+he(Y),"error"),W.disabled=!1,W.textContent="บันทึก"}return}const M=i.querySelector("#ann-modal-save");M.disabled=!0,M.textContent="กำลังบันทึก...";try{a?await ya(r.id,{title:b,body:c,isActive:g,priority:$,requiresAck:y,dueDate:k,annType:S,fileUrl:u,videoUrl:H,audience:A,targetTeacherIds:R,targetStudentIds:F}):await fa({title:b,body:c,isActive:g,priority:$,requiresAck:y,dueDate:k,annType:S,fileUrl:u,videoUrl:H,audience:A,targetTeacherIds:R,targetStudentIds:F}),!a&&g&&Gr(b,c,A),N("บันทึกสำเร็จ ✅","success"),m(),await d()}catch(O){N("บันทึกไม่สำเร็จ: "+he(O),"error"),M.disabled=!1,M.textContent="บันทึก"}})};(x=document.getElementById("ann-create-btn"))==null||x.addEventListener("click",()=>o(null,t)),await t()}async function Kr(){Le("autoscale-history"),document.getElementById("page-title").textContent="ประวัติปรับกำลังเครื่องอัตโนมัติ";const e=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=o=>new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),t=o=>o.includes("🔴")?{label:"ล้มเหลว",cls:"bg-red-100 text-red-700"}:o.includes("⚠️")?{label:"อัปเกรด",cls:"bg-amber-100 text-amber-700"}:o.includes("✅")?{label:"ลดระดับ",cls:"bg-emerald-100 text-emerald-700"}:o.includes("🧪")?{label:"ทดสอบ",cls:"bg-gray-100 text-gray-600"}:{label:"เหตุการณ์",cls:"bg-gray-100 text-gray-600"};$e(`<div class="animate-fade">
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
    </div>`}const ki={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},Si=e=>ki[e]??"แอดมิน",Ei=e=>e?e.startsWith("academic")?"bg-blue-100 text-blue-700":e.startsWith("registrar")?"bg-violet-100 text-violet-700":e==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function Li(e,s=!1){var h,I;const{getMyAnnouncements:t,createAnnouncement:n,updateAnnouncement:l,deleteAnnouncement:o,getAckStats:x,getAnnouncementCommentsBulk:r,getAnnouncementComments:d,deleteAnnouncementComment:i}=await Se(async()=>{const{getMyAnnouncements:u,createAnnouncement:p,updateAnnouncement:j,deleteAnnouncement:_,getAckStats:C,getAnnouncementCommentsBulk:L,getAnnouncementComments:q,deleteAnnouncementComment:B}=await import("./api-CQwFwlFA.js");return{getMyAnnouncements:u,createAnnouncement:p,updateAnnouncement:j,deleteAnnouncement:_,getAckStats:C,getAnnouncementCommentsBulk:L,getAnnouncementComments:q,deleteAnnouncementComment:B}},__vite__mapDeps([0,1,2,3,4])),a=((h=e==null?void 0:e.positions)!=null&&h.length?e.positions[0]:e==null?void 0:e.position)??null;Le("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const m=u=>String(u??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),w=u=>new Date(u).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});$e(`<div class="animate-fade max-w-2xl mx-auto">
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
  </div>`);const f=async()=>{const u=document.getElementById("sann-list");if(!u)return;let p;try{p=await t(e.id)}catch{u.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!p.length){u.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const j=L=>L?new Date(L).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",_=L=>{if(!L)return"";const q=Math.ceil((new Date(L)-new Date)/864e5);return q<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${j(L)}</span>`:q<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${j(L)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${j(L)}</span>`},C={};try{(await r(p.map(q=>q.id))).forEach(q=>{C[q.announcement_id]=(C[q.announcement_id]??0)+1})}catch{}u.innerHTML=p.map(L=>`
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
              ${Ur(L.audience)}
              ${Vr(L)}
              ${L.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${_(L.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${m(L.title)}</h3>
            ${L.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${m(L.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${w(L.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${L.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${L.id}" data-title="${m(L.title)}">💬 ${C[L.id]??0} ความคิดเห็น</button>
              <span>👁️ ${L.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${L.requires_ack?`<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${L.id}" data-title="${m(L.title)}">📊 สถิติ</button>`:""}
            ${L.ann_type==="training"?`<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${L.id}" data-title="${m(L.title)}">👥 รายชื่อ</button>`:""}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${L.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${L.id}" data-active="${L.is_active}">
              ${L.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${L.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${L.id}" data-title="${m(L.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join(""),u.querySelectorAll(".sann-stat-btn").forEach(L=>{L.addEventListener("click",async()=>{const q=Number(L.dataset.id),B=L.dataset.title,b=document.getElementById("sann-stat-modal");b&&b.remove();const c=document.createElement("div");c.id="sann-stat-modal",c.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",c.innerHTML=`
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
          </div>`,document.body.appendChild(c),c.querySelector("#sann-stat-close").onclick=()=>c.remove(),c.addEventListener("click",g=>{g.target===c&&c.remove()});try{const{acked:g,pending:$}=await x(q),y=c.querySelector("#sann-stat-body"),k=S=>new Date(S).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});y.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${g.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${$.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${g.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${g.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${g.map(S=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${m(S.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${k(S.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${$.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${$.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${$.map(S=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${m(S.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{c.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),u.querySelectorAll(".sann-rsvp-list-btn").forEach(L=>{L.addEventListener("click",async()=>{const{getAnnouncementRsvps:q}=await Se(async()=>{const{getAnnouncementRsvps:k}=await import("./api-CQwFwlFA.js");return{getAnnouncementRsvps:k}},__vite__mapDeps([0,1,2,3,4])),B=await q(Number(L.dataset.id)).catch(()=>[]),b=L.dataset.title,c={yes:[],maybe:[],no:[],none:[]};B.forEach(k=>(c[k.response]??c.none).push(k));const g=k=>{var S,A;return`<li class="text-sm text-gray-700">${m(((S=k.teachers)==null?void 0:S.full_name)??"?")} <span class="text-xs text-gray-400">${((A=k.teachers)==null?void 0:A.dept)??""}</span></li>`},$=(k,S,A,H)=>c[k].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${H} mb-1">${S} ${A} (${c[k].length})</p>
            <ul class="space-y-0.5 pl-3">${c[k].map(g).join("")}</ul>
          </div>`:"",y=document.createElement("div");y.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",y.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${b}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${B.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${$("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${$("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${$("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(y),y.querySelector("#rsvp-list-close").onclick=()=>y.remove(),y.addEventListener("click",k=>{k.target===y&&y.remove()})})}),u.querySelectorAll(".ann-comments-view-btn").forEach(L=>{L.addEventListener("click",async()=>{const q=Number(L.dataset.id),B=L.dataset.title,b=await d(q).catch(()=>[]),c=$=>new Date($).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),g=document.createElement("div");g.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",g.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${m(B)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${b.length?b.map($=>{var y,k;return`
                <div class="flex items-start gap-2" data-comment-id="${$.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${m((((y=$.teachers)==null?void 0:y.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${m(((k=$.teachers)==null?void 0:k.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${$.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${m($.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${c($.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(g),g.querySelector("#comments-list-close").onclick=()=>g.remove(),g.addEventListener("click",$=>{$.target===g&&g.remove()}),g.querySelectorAll(".comment-del-btn").forEach($=>{$.addEventListener("click",async()=>{var y;if(confirm("ลบความคิดเห็นนี้?"))try{await i(Number($.dataset.id)),(y=g.querySelector(`[data-comment-id="${$.dataset.id}"]`))==null||y.remove(),await f()}catch(k){N("ลบไม่สำเร็จ: "+he(k),"error")}})})})}),u.querySelectorAll(".sann-toggle-btn").forEach(L=>{L.addEventListener("click",async()=>{L.disabled=!0;try{await l(Number(L.dataset.id),{isActive:L.dataset.active!=="true"}),await f()}catch{N("บันทึกไม่สำเร็จ","error"),L.disabled=!1}})}),u.querySelectorAll(".sann-edit-btn").forEach(L=>{L.addEventListener("click",()=>{const q=p.find(B=>B.id===Number(L.dataset.id));q&&v(q)})}),u.querySelectorAll(".sann-del-btn").forEach(L=>{L.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${L.dataset.title}" ?`)){L.disabled=!0;try{await o(Number(L.dataset.id)),await f()}catch{N("ลบไม่สำเร็จ","error"),L.disabled=!1}}})})},v=(u=null)=>{var H;(H=document.getElementById("sann-modal"))==null||H.remove();const p=document.createElement("div");p.id="sann-modal",p.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const j=!!(u!=null&&u.id);p.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${j?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${m((u==null?void 0:u.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${m((u==null?void 0:u.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${u!=null&&u.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${m((u==null?void 0:u.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${m((u==null?void 0:u.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ (admin เท่านั้นที่เปลี่ยนประเภทได้) -->
          ${s?`
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((u==null?void 0:u.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(u==null?void 0:u.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>`:""}
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((u==null?void 0:u.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(u==null?void 0:u.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(u==null?void 0:u.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(u==null?void 0:u.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
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
          <div id="sann-training-fields" class="${(u==null?void 0:u.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="sann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${m((u==null?void 0:u.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${Xa("sann",0,(u==null?void 0:u.event_date)??"",(u==null?void 0:u.event_periods)??[])}
              </div>
              ${j?'<div id="sann-add-session" class="hidden"></div>':`<button type="button" id="sann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((u==null?void 0:u.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((u==null?void 0:u.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="sann-active-toggle" data-on="${(u==null?void 0:u.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(u==null?void 0:u.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(u==null?void 0:u.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="sann-pin" data-on="${((u==null?void 0:u.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((u==null?void 0:u.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((u==null?void 0:u.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
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
              <button type="button" id="sann-ack" data-on="${u!=null&&u.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${u!=null&&u.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="sann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(u==null?void 0:u.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button id="sann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="sann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(p);const _=()=>p.remove();p.querySelector("#sann-modal-close").onclick=_,p.querySelector("#sann-modal-cancel").onclick=_,p.addEventListener("click",E=>{E.target===p&&_()});let C=null,L=null;Wr().then(({teachers:E,students:T})=>{document.body.contains(p)&&(C=za({wrap:p.querySelector("#sann-target-teachers-wrap"),chipsWrap:p.querySelector("#sann-target-teachers-chips"),teachers:E,value:(u==null?void 0:u.target_teacher_ids)??[]}),L=As({wrap:p.querySelector("#sann-target-students-wrap"),chipsWrap:p.querySelector("#sann-target-students-chips"),students:T,value:(u==null?void 0:u.target_student_ids)??[]}))});const q=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],B=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],b=(E,T)=>{const R=document.createElement("div");R.className="mt-1.5 hidden",R.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${T.map(F=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${F}">${F}</button>`).join("")}
        </div>`,E.parentNode.appendChild(R),E.addEventListener("focus",()=>R.classList.remove("hidden")),E.addEventListener("blur",()=>setTimeout(()=>R.classList.add("hidden"),150)),R.querySelectorAll(".sann-chip").forEach(F=>{F.addEventListener("mousedown",M=>M.preventDefault()),F.addEventListener("click",()=>{E.value.trim()?E.value+=(E.tagName==="TEXTAREA"?`
`:" ")+F.dataset.val:E.value=F.dataset.val,E.focus()})})};b(p.querySelector("#sann-title"),q),b(p.querySelector("#sann-body"),B);let c=(u==null?void 0:u.file_url)??null;const g=p.querySelector("#sann-image-status"),$=p.querySelector("#sann-image-preview"),y=p.querySelector("#sann-image-preview-img");p.querySelector("#sann-image-file").addEventListener("change",async E=>{var R;const T=(R=E.target.files)==null?void 0:R[0];if(T){g.textContent="กำลังอัปโหลด...";try{c=await Ks(T),y.src=c,$.classList.remove("hidden"),g.textContent="อัปโหลดสำเร็จ ✅"}catch(F){g.textContent="อัปโหลดไม่สำเร็จ: "+he(F)}E.target.value=""}}),p.querySelector("#sann-image-remove").addEventListener("click",()=>{c=null,$.classList.add("hidden"),g.textContent=""});let k=[];p.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const E=p.querySelector("#sann-cal-picker");if(!E.classList.contains("hidden")){E.classList.add("hidden");return}E.classList.remove("hidden");const T=p.querySelector("#sann-cal-event-sel");if(T.options.length<=1)try{const{getWorkCalendarEvents:R,getSystemConfig:F}=await Se(async()=>{const{getWorkCalendarEvents:O,getSystemConfig:W}=await import("./api-CQwFwlFA.js");return{getWorkCalendarEvents:O,getSystemConfig:W}},__vite__mapDeps([0,1,2,3,4]));let M=new Date().getFullYear()+543,U=1;try{const O=await F();M=O.academicYear??O.academic_year??M,U=O.semester??U}catch{}k=await R(M,U);const z={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};k.forEach(O=>{const W=document.createElement("option");W.value=O.id;const Y=O.event_type==="inspection"&&O.round_number?` ครั้งที่ ${O.round_number}`:"",D=new Date(O.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});W.textContent=`${z[O.event_type]??"📌"}${Y} ${O.label} (${D})`,T.appendChild(W)})}catch(R){T.innerHTML=`<option>โหลดไม่สำเร็จ: ${R.message}</option>`}}),p.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const E=+p.querySelector("#sann-cal-event-sel").value,T=k.find(z=>z.id===E),R=p.querySelector("#sann-cal-preview"),F=p.querySelector("#sann-cal-fill");if(!T){R.classList.add("hidden"),F.classList.add("hidden");return}const M=(T.work_calendar_items||[]).sort((z,O)=>z.sort_order-O.sort_order),U=new Date(T.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});R.innerHTML=`<p class="font-semibold">${T.label}</p>
        <p class="text-indigo-600">📅 ${U}${T.event_type==="inspection"&&T.round_number?` · ครั้งที่ ${T.round_number}`:""}</p>
        ${T.description?`<p>${T.description}</p>`:""}
        ${M.length?`<ul class="mt-1 space-y-0.5">${M.map(z=>`<li>☑ ${z.item_label}</li>`).join("")}</ul>`:""}`,R.classList.remove("hidden"),F.classList.remove("hidden")}),p.querySelector("#sann-cal-fill").addEventListener("click",()=>{const E=+p.querySelector("#sann-cal-event-sel").value,T=k.find(z=>z.id===E);if(!T)return;const R=(T.work_calendar_items||[]).sort((z,O)=>z.sort_order-O.sort_order),F=new Date(T.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),M=T.event_type==="inspection"&&T.round_number?` ครั้งที่ ${T.round_number}`:"";p.querySelector("#sann-title").value=T.label+(M?` (${M.trim()})`:"");const U=[];T.description&&U.push(T.description),R.length&&(U.push("สิ่งที่ต้องเตรียม:"),R.forEach(z=>U.push(`• ${z.item_label}`))),U.push(`กำหนดวันที่: ${F}`),p.querySelector("#sann-body").value=U.join(`
`),T.event_date&&(p.querySelector("#sann-due").value=T.event_date),p.querySelector("#sann-cal-picker").classList.add("hidden")}),p.querySelectorAll(".sann-type-btn").forEach(E=>{E.addEventListener("click",()=>{const T=E.dataset.type;p.querySelectorAll(".sann-type-btn").forEach(R=>{const F=R.dataset.type==="training";R.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${R.dataset.type===T?F?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":F?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),p.querySelector("#sann-training-fields").classList.toggle("hidden",T!=="training")})});const S=E=>E==="teacher"?"bg-sky-600 text-white border-sky-600":E==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",A=E=>E==="teacher"?"hover:border-sky-300":E==="student"?"hover:border-teal-300":"hover:border-indigo-300";p.querySelectorAll(".sann-audience-btn").forEach(E=>{E.addEventListener("click",()=>{p.querySelectorAll(".sann-audience-btn").forEach(T=>{T.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${T.dataset.audience===E.dataset.audience?S(T.dataset.audience):`bg-white text-gray-600 border-gray-200 ${A(T.dataset.audience)}`}`})})}),zr(p,"sann"),p.querySelectorAll(".sann-filter-btn").forEach(E=>{E.addEventListener("click",()=>{p.querySelectorAll(".sann-filter-btn").forEach(T=>{T.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${T.dataset.filter===E.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),p.querySelector("#sann-modal-save").addEventListener("click",async()=>{var Z,se;const E=p.querySelector("#sann-title").value.trim();if(!E){N("กรุณากรอกหัวข้อ","warning");return}const T=p.querySelector("#sann-body").value.trim()||null,R=p.querySelector("#sann-active-toggle").dataset.on==="true",F=p.querySelector("#sann-pin").dataset.on==="true"?1:0,M=p.querySelector("#sann-ack").dataset.on==="true",U=p.querySelector("#sann-due").value||null,z=p.querySelector(".sann-type-btn.bg-violet-600")||(u==null?void 0:u.ann_type)==="training"?"training":"general",O=((Z=p.querySelector(".sann-audience-btn.text-white"))==null?void 0:Z.dataset.audience)??(u==null?void 0:u.audience)??"all",W=p.querySelector("#sann-video-url").value.trim()||null,Y=z==="training"&&p.querySelector("#sann-event-location").value.trim()||null,D=((se=p.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:se.dataset.filter)??(u==null?void 0:u.schedule_filter)??"all",V=(C==null?void 0:C.getValue())??(u==null?void 0:u.target_teacher_ids)??[],K=(L==null?void 0:L.getValue())??(u==null?void 0:u.target_student_ids)??[];if(z==="training"){if(!Y){N("กรุณาระบุสถานที่","warning");return}const ae=Fr(p,"sann");for(const ue of ae){if(!ue.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!ue.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const me=p.querySelector("#sann-modal-save");me.disabled=!0,me.textContent="กำลังบันทึก...";try{j?await l(u.id,{title:E,body:T,isActive:R,priority:F,requiresAck:M,dueDate:U,annType:z,eventDate:ae[0].date,eventPeriods:ae[0].periods,eventLocation:Y,scheduleFilter:D,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}):ae.length>1?(await Promise.all(ae.map(ue=>n({title:E,body:T,isActive:R,priority:F,teacherId:e.id,creatorRole:a,requiresAck:M,dueDate:U,annType:z,eventDate:ue.date,eventPeriods:ue.periods,eventLocation:Y,scheduleFilter:D,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}))),N(`สร้าง ${ae.length} ประกาศสำเร็จ ✅`,"success")):(await n({title:E,body:T,isActive:R,priority:F,teacherId:e.id,creatorRole:a,requiresAck:M,dueDate:U,annType:z,eventDate:ae[0].date,eventPeriods:ae[0].periods,eventLocation:Y,scheduleFilter:D,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}),N("บันทึกสำเร็จ ✅","success")),_(),await f()}catch(ue){N("บันทึกไม่สำเร็จ: "+he(ue),"error");const _e=p.querySelector("#sann-modal-save");_e.disabled=!1,_e.textContent="บันทึก"}return}const Q=p.querySelector("#sann-modal-save");Q.disabled=!0,Q.textContent="กำลังบันทึก...";try{j?await l(u.id,{title:E,body:T,isActive:R,priority:F,requiresAck:M,dueDate:U,annType:z,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}):await n({title:E,body:T,isActive:R,priority:F,teacherId:e.id,creatorRole:a,requiresAck:M,dueDate:U,annType:z,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}),!j&&R&&Gr(E,T,O),N("บันทึกสำเร็จ ✅","success"),_(),await f()}catch(ae){N("บันทึกไม่สำเร็จ: "+he(ae),"error"),Q.disabled=!1,Q.textContent="บันทึก"}})};(I=document.getElementById("sann-create-btn"))==null||I.addEventListener("click",()=>v(null)),await f()}async function Jr(){var l;Le("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const e=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],s=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];s.flatMap(o=>o.features),$e(`<div class="animate-fade">
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
    </div>`,n.querySelectorAll(".perm-toggle").forEach(o=>{o.addEventListener("click",async()=>{const x=o.dataset.position,r=o.dataset.feature,d=o.dataset.on==="true",i=!d;o.disabled=!0;try{await $o(x,r,i),o.dataset.on=String(i),o.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${i?"bg-emerald-500":"bg-gray-300"}`,o.querySelector("span").style.transform=`translateX(${i?"20":"0"}px)`,t[x]||(t[x]={}),t[x][r]=i,N(`${i?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{N("บันทึกไม่สำเร็จ","error")}o.disabled=!1})}))}async function Qr(){Le("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let e=[],s=[],t=[],n="สามัญ",l="",o="",x="",r="",d="";const i=E=>{if(!E)return null;const T=E.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return T?T[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},a=E=>E?/^(PR|อก\.|อป\.)/i.test(E)?"ศาสนา":/^ปวช\./i.test(E)?"ปวช":"สามัญ":"สามัญ",m={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},w=E=>{const T=E==="ศาสนา";return[...new Set(t.map(R=>T?R.religion_room:R.main_room).filter(Boolean))].filter(R=>a(R)===E).sort((R,F)=>R.localeCompare(F,"th"))},f=E=>{const T=w(E),R=[...new Set(T.map(M=>i(M)).filter(Boolean))],F=m[E]||[];return[...new Set([...F,...R])].sort((M,U)=>M.localeCompare(U,"th"))},v=async()=>{[e,s,t]=await Promise.all([Wn(),Re(),Et()])},h=(E,T="w-3.5 h-3.5")=>`<span class="inline-block ${T} rounded-full flex-shrink-0" style="background:${E}"></span>`,I=E=>e.find(T=>T.name===E),u=E=>t.filter(T=>T.house_color===E).length,p=()=>t.filter(E=>!E.house_color).length,j=E=>{let T=document.getElementById("hc-print-roster-styles");T||(T=document.createElement("style"),T.id="hc-print-roster-styles",document.head.appendChild(T)),T.textContent=`
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
    `;const R=document.createElement("div");R.id="hc-print-roster-area",document.body.appendChild(R);const F=n==="ศาสนา",M=new Map;E.forEach(O=>{const W=(F?O.religion_room:O.main_room)||"ไม่มีห้องเรียน";M.has(W)||M.set(W,[]),M.get(W).push(O)});const U=Array.from(M.keys()).sort((O,W)=>O.localeCompare(W,"th"));let z="";U.forEach((O,W)=>{const D=M.get(O).sort((Q,Z)=>(Q.student_code||"").localeCompare(Z.student_code||""));let V="ใบรายชื่อนักเรียน";x&&(x==="__none__"?V+=" (ไม่มีสี)":V+=` กลุ่มสี${x}`),V+=` ห้อง ${O}`,r&&(V+=` (${r})`);const K=D.map((Q,Z)=>{const se=I(Q.house_color),ae=se?`<span class="color-badge" style="color: ${se.color_hex}">
               สี${Q.house_color}
             </span>`:'<span style="color: #9ca3af;">— ไม่มีสี —</span>',me=Q.image_url?`<img src="${Q.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>';return`
          <tr>
            <td style="text-align: center; width: 45px;">${Z+1}</td>
            <td>
              <div class="stu-info-wrap">
                ${me}
                <div class="stu-details">
                  <div class="stu-name">${te(Q.full_name)}</div>
                  <div class="stu-meta">รหัส: ${te(Q.student_code||"—")} | สามัญ: ${te(Q.main_room||"—")} | ศาสนา: ${te(Q.religion_room||"—")}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${ae}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${te(Q.sports_shirt_size||"")}</td>
            <td style="width: 120px;"></td>
          </tr>
        `}).join("");z+=`
        <div class="roster-page-block">
          <div class="roster-title">${te(V)}</div>
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
              ${K}
            </tbody>
          </table>
        </div>
      `}),R.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="hc-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="hc-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        ${z}
      </div>
    `,R.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},R.querySelector("#hc-btn-close-preview").onclick=()=>{R.remove()}},_=()=>s.find(E=>E.position==="house_color_admin"),C=(E,T)=>{const F=(T?e.filter(M=>M.gender===T):e).map(M=>`<option value="${te(M.name)}" ${M.name===E?"selected":""}>สี${te(M.name)}</option>`).join("");return`<option value="" ${E?"":"selected"}>— ไม่มีสี —</option>`+F},L=()=>{const E=d.toLowerCase(),T=n==="ศาสนา";return t.filter(R=>{var M,U;const F=T?R.religion_room:R.main_room;return!(!F||o&&F!==o||l&&!o&&i(F)!==l||!l&&!o&&a(F)!==n||x==="__none__"&&R.house_color||x&&x!=="__none__"&&R.house_color!==x||r&&R.gender!==r||E&&!((M=R.full_name)!=null&&M.toLowerCase().includes(E))&&!((U=R.student_code)!=null&&U.toLowerCase().includes(E))&&!F.toLowerCase().includes(E))})},q=E=>E?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",B=()=>{const E=e.filter(z=>z.gender==="ชาย"),T=e.filter(z=>z.gender==="หญิง"),R=p(),F=z=>{const O=x===z.name,W=u(z.name);return`<button class="${q(O)}" data-color="${te(z.name)}"
               style="${O?`border-color:${z.color_hex};color:${z.color_hex};background:${z.color_hex}18`:`border-color:${z.color_hex}55;color:#374151`}">
        ${h(z.color_hex)} สี${te(z.name)}
        <span class="ml-1 font-bold" style="color:${z.color_hex}">${W}</span>
      </button>`},M=x==="__none__",U=`<button class="${q(M)}" data-color="__none__"
               style="${M?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${R}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${E.map(F).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${T.map(F).join("")}
          ${U}
        </div>
      </div>`},b=()=>{const E=L();if(!E.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const T=n==="ศาสนา";return E.map(R=>{const F=I(R.house_color),M=F?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${F.color_hex}">
             ${h(F.color_hex,"w-2.5 h-2.5")} ${te(R.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',U=F?`background:${F.color_hex}12`:"",z=T?R.religion_room:R.main_room,O=R.image_url?`<img src="${R.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`:'<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>';return`<tr class="transition border-b border-gray-100 last:border-0" style="${U}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${te(R.student_code??"")}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${O}
            <div>${te(R.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${te(z??"—")}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${te(R.gender??"—")}</td>
        <td class="px-4 py-2.5">${M}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${R.id}" data-current="${te(R.house_color??"")}">
            ${C(R.house_color,R.gender)}
          </select>
        </td>
      </tr>`}).join("")},c=()=>{const E=_(),T=L().length;$e(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${E?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${te(E.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${t.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${p()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${B()}
        ${x?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':""}
      </div>

      <!-- Search + filter bar -->
      <div class="flex flex-wrap gap-3 items-center">
        <input id="hc-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..."
          value="${te(d)}"
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
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${T}</b> คน</span>
        <button id="hc-print-roster-btn"
          class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white
                 transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          ${T===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${T})
        </button>
        <button id="hc-clear-colors-btn"
          class="px-4 py-2 rounded-xl text-sm font-medium border border-red-200 text-red-500
                 hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          ${T===0?"disabled":""}>
          🗑️ ล้างสี (${T})
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
    </div>`),H()},g=()=>{const E=document.getElementById("hc-tbody");E&&(E.innerHTML=b()),k();const T=L().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(M=>{M.textContent.includes("พบ")&&(M.innerHTML=`พบ <b class="text-gray-700">${T}</b> คน`)});const R=document.getElementById("hc-print-roster-btn");R&&(R.disabled=T===0,R.textContent=`🖨️ พิมพ์ใบรายชื่อ (${T})`);const F=document.getElementById("hc-clear-colors-btn");F&&(F.disabled=T===0,F.textContent=`🗑️ ล้างสี (${T})`)},$=()=>{var T;const E=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");E&&(E.innerHTML=B()+(x?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),y(),(T=document.getElementById("hc-clear-filter"))==null||T.addEventListener("click",()=>{x="",$(),g()})},y=()=>{document.querySelectorAll(".hc-chip").forEach(E=>{E.addEventListener("click",()=>{const T=E.dataset.color;x=x===T?"":T,$(),g()})})},k=()=>{document.querySelectorAll(".hc-color-sel").forEach(E=>{E.addEventListener("change",async()=>{const T=E.dataset.sid,R=E.dataset.current,F=E.value||null;E.disabled=!0;try{await rs([T],F);const M=t.find(W=>String(W.id)===String(T));M&&(M.house_color=F),E.dataset.current=F??"";const U=E.closest("tr"),z=U==null?void 0:U.children[4];if(z){const W=I(F);z.innerHTML=W?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${W.color_hex}">
                   ${h(W.color_hex,"w-2.5 h-2.5")} ${te(F)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const O=I(F);U&&(U.style.background=O?`${O.color_hex}12`:""),E.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>E.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),$()}catch{N("บันทึกไม่สำเร็จ","error"),E.value=R??""}E.disabled=!1})})},S=()=>{const E=document.getElementById("hc-filter-category"),T=document.getElementById("hc-filter-level");if(!E||!T)return;n=E.value;const R=f(n);T.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${R.map(F=>`<option value="${F}" ${F===l?"selected":""}>${F}</option>`).join("")}
    `,A()},A=()=>{const E=document.getElementById("hc-filter-level"),T=document.getElementById("hc-filter-class");if(!E||!T)return;l=E.value;const F=w(n).filter(M=>l?i(M)===l:!0);T.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${F.length} ห้อง) --</option>
      ${F.map(M=>`
        <option value="${M}" ${M===o?"selected":""}>${M}</option>
      `).join("")}
    `},H=()=>{var E,T,R,F,M,U,z,O;y(),k(),(E=document.getElementById("hc-clear-filter"))==null||E.addEventListener("click",()=>{x="",$(),g()}),(T=document.getElementById("hc-search"))==null||T.addEventListener("input",W=>{d=W.target.value,g()}),(R=document.getElementById("hc-filter-gender"))==null||R.addEventListener("change",W=>{r=W.target.value,g()}),(F=document.getElementById("hc-filter-category"))==null||F.addEventListener("change",W=>{n=W.target.value,l="",o="",S(),g()}),(M=document.getElementById("hc-filter-level"))==null||M.addEventListener("change",W=>{l=W.target.value,o="",A(),g()}),(U=document.getElementById("hc-filter-class"))==null||U.addEventListener("change",W=>{o=W.target.value,g()}),(z=document.getElementById("hc-print-roster-btn"))==null||z.addEventListener("click",()=>{const W=L();W.length>0&&j(W)}),(O=document.getElementById("hc-clear-colors-btn"))==null||O.addEventListener("click",async()=>{const W=L();if(!W.length||!confirm(`ยืนยันล้างสีนักเรียน ${W.length} คนที่แสดงในตาราง?`))return;const Y=document.getElementById("hc-clear-colors-btn");Y.disabled=!0,Y.textContent="กำลังล้างสี...";try{await rs(W.map(D=>D.id),null),W.forEach(D=>{D.house_color=null}),N(`ล้างสีสำเร็จ ${W.length} คน`,"success"),$(),g()}catch{N("เกิดข้อผิดพลาด","error"),Y.disabled=!1,Y.textContent=`🗑️ ล้างสี (${W.length})`}}),S()};await v(),c()}async function Zr(){Le("council-rep-nominations"),document.getElementById("page-title").textContent="สรุปรายชื่อตัวแทนสภานักเรียน";const e=["ม.3","ม.4","ม.5"];let s="",t="",n="";const l=await Me().catch(()=>({})),o=String(l.academicYear??l.academic_year??new Date().getFullYear()+543),x=Number(l.semester??1),[r,d]=await Promise.all([Ft(o,x).catch(()=>[]),wo(o,x).catch(()=>[])]),i=p=>{var j;return((j=(p||"").match(/^ม\.\d+/))==null?void 0:j[0])??null},a=[...new Set(r.filter(p=>p.category==="สามัญ"&&e.includes(i(p.main_room))).map(p=>p.main_room))].sort((p,j)=>p.localeCompare(j,"th")),m={};a.forEach(p=>{m[p]=0}),d.forEach(p=>{m[p.main_room]!=null&&m[p.main_room]++});const w=a.filter(p=>m[p]>=2),f=a.filter(p=>m[p]>0&&m[p]<2),v=a.filter(p=>m[p]===0),h=()=>d.filter(p=>{var j,_,C;if(t&&i(p.main_room)!==t||n&&((j=p.students)==null?void 0:j.gender)!==n)return!1;if(s){const L=s.toLowerCase();if(!`${((_=p.students)==null?void 0:_.full_name)??""} ${((C=p.students)==null?void 0:C.student_code)??""} ${p.main_room??""}`.toLowerCase().includes(L))return!1}return!0}),I=p=>p.length?p.map(j=>{var _,C,L,q;return`
    <tr class="border-t border-gray-100">
      <td class="px-4 py-2.5">${te(j.main_room)}</td>
      <td class="px-4 py-2.5 font-medium">${te(((_=j.students)==null?void 0:_.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${te(((C=j.students)==null?void 0:C.student_code)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${te(((L=j.students)==null?void 0:L.gender)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${te(((q=j.teachers)==null?void 0:q.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-400 text-xs">${j.created_at?new Date(j.created_at).toLocaleDateString("th-TH"):"—"}</td>
    </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ไม่พบรายการ</td></tr>',u=()=>{var j,_,C,L;const p=h();$e(`<div class="space-y-5 animate-fade">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ส่งครบ 2 คน</p><b class="text-2xl text-emerald-700">${w.length}</b><p class="text-[11px] text-emerald-600 mt-0.5">จาก ${a.length} ห้อง</p></div>
        <div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">ส่งไม่ครบ</p><b class="text-2xl text-amber-700">${f.length}</b>${f.length?`<p class="text-[11px] text-amber-600 mt-0.5 truncate" title="${te(f.join(", "))}">${te(f.join(", "))}</p>`:""}</div>
        <div class="bg-red-50 rounded-2xl p-4"><p class="text-xs text-red-700">ยังไม่ส่งเลย</p><b class="text-2xl text-red-700">${v.length}</b>${v.length?`<p class="text-[11px] text-red-600 mt-0.5 truncate" title="${te(v.join(", "))}">${te(v.join(", "))}</p>`:""}</div>
      </div>

      <div class="flex flex-wrap gap-3 items-center">
        <input id="crn-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..." value="${te(s)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="crn-filter-grade" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
          ${e.map(q=>`<option value="${q}" ${t===q?"selected":""}>${q}</option>`).join("")}
        </select>
        <select id="crn-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${n==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${n==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${p.length}</b> รายการ</span>
        <button id="crn-print-btn" class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" ${p.length===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${p.length})
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
          <tbody>${I(p)}</tbody>
        </table>
      </div>
    </div>`),(j=document.getElementById("crn-search"))==null||j.addEventListener("input",q=>{s=q.target.value,u()}),(_=document.getElementById("crn-filter-grade"))==null||_.addEventListener("change",q=>{t=q.target.value,u()}),(C=document.getElementById("crn-filter-gender"))==null||C.addEventListener("change",q=>{n=q.target.value,u()}),(L=document.getElementById("crn-print-btn"))==null||L.addEventListener("click",()=>{const q=h(),B=`<!doctype html><html><head><meta charset="utf-8"><title>รายชื่อตัวแทนสภานักเรียน</title>
        <style>
          body{font-family:'Sarabun','TH Sarabun New',sans-serif;padding:24px;color:#111}
          h1{font-size:18px;margin:0 0 4px}
          p.sub{font-size:12px;color:#666;margin:0 0 16px}
          table{width:100%;border-collapse:collapse;font-size:13px}
          th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
          th{background:#f3f4f6}
        </style></head><body>
        <h1>รายชื่อตัวแทนสภานักเรียน${t?" ระดับชั้น "+t:""}</h1>
        <p class="sub">ปีการศึกษา ${te(o)} · พิมพ์เมื่อ ${new Date().toLocaleDateString("th-TH")} · ทั้งหมด ${q.length} รายการ</p>
        <table><thead><tr><th>ห้อง</th><th>ชื่อ-สกุล</th><th>รหัส</th><th>เพศ</th><th>ครูผู้เสนอ</th></tr></thead>
        <tbody>${q.map(b=>{var c,g,$,y;return`<tr><td>${te(b.main_room)}</td><td>${te(((c=b.students)==null?void 0:c.full_name)??"—")}</td><td>${te(((g=b.students)==null?void 0:g.student_code)??"—")}</td><td>${te((($=b.students)==null?void 0:$.gender)??"—")}</td><td>${te(((y=b.teachers)==null?void 0:y.full_name)??"—")}</td></tr>`}).join("")}</tbody>
        </table></body></html>`;Vs(B)})};u()}async function Xr(){var $,y,k,S,A,H;Le("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const[e,s]=await Promise.all([Me().catch(()=>({})),oa().catch(()=>[])]),t=Fs(s,e),n=Ba(e),l=Ye(n);let o=l;try{const E=localStorage.getItem("pp5_admin_donations_term");t.some(T=>Ye(T)===E)&&(o=E)}catch{}const x=E=>Number(E==null?void 0:E.academic_year)*2+Number(E==null?void 0:E.semester),r=E=>E?new Date(E).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",d=E=>Number(E??0).toLocaleString("th-TH"),i=E=>!E.slip_url&&String(E.admin_note??"").startsWith("[เงินสด]"),a=E=>{const T=String((E==null?void 0:E.donationStickerTiers)??"").trim();return(T?T.split(`
`).filter(Boolean).map(M=>{const[U,z,O,,W]=M.split("|").map(Y=>Y.trim());return{amount:parseInt(U)||0,sticker:z||"🏅",title:O||"",color:W||""}}).filter(M=>M.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([M,U,z,O])=>({amount:M,sticker:U,title:z,color:O}))).sort((M,U)=>M.amount-U.amount).map((M,U)=>{const z=((E==null?void 0:E[`donationStickerImg${U+1}`])??"").trim();return z&&/^https?:\/\//.test(z)?{...M,sticker:z}:M})},m=(E,T)=>{let R=null;for(const F of T)E>=F.amount&&(R=F);return R},w=(E,T="w-8 h-8")=>E?/^https?:\/\//.test(E.sticker)?`<img src="${E.sticker}" class="${T} object-contain" title="${E.title}" />`:`<span class="text-xl" title="${E.title}">${E.sticker}</span>`:"";$e(`
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
      ${["ยอดรวมอนุมัติ","รออนุมัติ","ผู้สนับสนุนแล้ว","เฉลี่ยต่อคน","เดิมที่ต่ออายุ","รายใหม่","ยังไม่สนับสนุน"].map((E,T)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${E}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${T}">—</p>
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
  </div>`);let f=[],v=[],h=[],I={},u=[],p=[],j=e;const _=E=>{const T=p.find(z=>Number(z.id)===Number(E.supporter_renewal_entitlement_id));if(T)return`${Number(T.target_academic_year)}:${Number(T.target_semester)}`;const R=String(E.created_at??"").slice(0,10);if(!R)return"";const F=t.find(z=>z.start_date&&z.end_date&&R>=z.start_date&&R<=z.end_date);if(F)return Ye(F);const M=t.filter(z=>z.start_date&&R<z.start_date).sort((z,O)=>z.start_date.localeCompare(O.start_date))[0],U=M?(Date.parse(`${M.start_date}T00:00:00Z`)-Date.parse(`${R}T00:00:00Z`))/864e5:1/0;return U>=0&&U<=45?Ye(M):""},C=E=>{const T=t.find(M=>Ye(M)===o),R=x(T),F=(T==null?void 0:T.start_date)||(o===l?j.semester_start:null);return f.some(M=>{var W;if(Number((W=M.teachers)==null?void 0:W.id)!==Number(E)||M.status!=="approved")return!1;const U=p.find(Y=>Number(Y.id)===Number(M.supporter_renewal_entitlement_id));if(U)return x({academic_year:U.source_academic_year,semester:U.source_semester})<R;const z=_(M),O=t.find(Y=>Ye(Y)===z);return O?x(O)<R:!!(F&&String(M.reviewed_at??M.created_at??"").slice(0,10)<F)})},L=async()=>{var K,Q;const{supabase:E}=await Se(async()=>{const{supabase:Z}=await import("./supabase-BV-W2lsh.js").then(se=>se.a);return{supabase:Z}},[]),{getSystemConfig:T,getPaymentSlipViewUrl:R}=await Se(async()=>{const{getSystemConfig:Z,getPaymentSlipViewUrl:se}=await import("./api-CQwFwlFA.js");return{getSystemConfig:Z,getPaymentSlipViewUrl:se}},__vite__mapDeps([0,1,2,3,4])),[F,{data:M},U,{data:z}]=await Promise.all([T().catch(()=>({})),E.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, supporter_renewal_entitlement_id, donation_tier, discount_percent, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1}),Re().catch(()=>[]),E.from("supporter_renewal_entitlements").select("id, teacher_id, source_academic_year, source_semester, target_academic_year, target_semester")]);j=F??e,h=a(j),u=U??[],p=z??[],f=(M??[]).map(Z=>({...Z,_termKey:_(Z)})),v=f.filter(Z=>Z._termKey===o);const O=t.find(Z=>Ye(Z)===o),W=document.getElementById("don-teacher-coverage"),Y=document.getElementById("don-term-note");Y&&(Y.textContent=O!=null&&O.start_date&&(O!=null&&O.end_date)?`ช่วงข้อมูล ${r(O.start_date)} – ${r(O.end_date)} · รายการต่ออายุที่เชื่อมสิทธิ์จะยึดภาคเป้าหมาย แม้ส่งคำขอก่อนวันเปิดภาค`:"หมายเหตุ: ภาคเรียนนี้ไม่มีช่วงวันที่ในทะเบียน ระบบจึงแยกคำขอที่ระบุภาคเรียนผ่านสิทธิ์ต่ออายุได้เท่านั้น");const D=new Map;for(const Z of v){const se=Number((K=Z.teachers)==null?void 0:K.id);se&&(D.has(se)||D.set(se,[]),D.get(se).push(Z))}const V=u.map(Z=>{const se=D.get(Number(Z.id))??[],ae=se.filter(Ie=>Ie.status==="approved"),me=se.some(Ie=>Ie.status==="pending"),ue=C(Z.id),_e=ae.length?ue?"เดิม · ต่ออายุแล้ว":"รายใหม่ · สนับสนุนแล้ว":me?ue?"เดิม · รอตรวจสอบ":"รายใหม่ · รอตรวจสอบ":se.length?ue?"เดิม · คำขอถูกปฏิเสธ":"รายใหม่ · คำขอถูกปฏิเสธ":ue?"เดิม · ยังไม่สนับสนุนเทอมนี้":"ยังไม่เคยสนับสนุน";return{teacher:Z,requests:se,approved:ae,pending:me,prior:ue,kind:_e,total:ae.reduce((Ie,Te)=>Ie+(Number(Te.amount)||0),0)}}).sort((Z,se)=>{const ae=me=>me.approved.length?0:me.pending?1:me.prior?2:3;return ae(Z)-ae(se)||String(Z.teacher.full_name??"").localeCompare(String(se.teacher.full_name??""),"th")});W&&(W.innerHTML=V.length?`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead class="sticky top-0 bg-gray-50"><tr>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">ครู</th>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">สถานะภาคนี้</th>
          <th class="text-right px-4 py-2 text-xs font-semibold text-gray-500">ยอดอนุมัติ</th>
        </tr></thead><tbody class="divide-y divide-gray-50">${V.map(Z=>`
          <tr class="hover:bg-gray-50"><td class="px-4 py-2.5"><span class="font-medium text-gray-800">${Pe(Z.teacher.full_name??"—")}</span>
            <span class="ml-1 text-xs text-gray-400">${Pe(Z.teacher.teacher_code??"")}</span></td>
            <td class="px-4 py-2.5"><span class="px-2 py-1 rounded-full text-[11px] font-semibold ${Z.approved.length?"bg-emerald-50 text-emerald-700":Z.pending?"bg-amber-50 text-amber-700":"bg-gray-100 text-gray-500"}">${Z.kind}</span></td>
            <td class="px-4 py-2.5 text-right font-semibold ${Z.total?"text-emerald-700":"text-gray-400"}">${Z.total?`${d(Z.total)} ฿`:"—"}</td></tr>`).join("")}</tbody></table></div>`:'<p class="text-center py-8 text-sm text-gray-400">ไม่พบรายชื่อครู</p>');for(const Z of v)Z.slip_url&&!i(Z)&&(Z._resolvedSlip=await R(Z.slip_url).catch(()=>Z.slip_url));I={};for(const Z of v){if(Z.status!=="approved")continue;const se=(Q=Z.teachers)==null?void 0:Q.id;se&&(I[se]=(I[se]??0)+(Number(Z.amount)||0))}q(),B()},q=()=>{const E=v.filter(Y=>Y.status==="approved"),T=E.reduce((Y,D)=>Y+(Number(D.amount)||0),0),R=v.filter(Y=>Y.status==="pending").length,F=new Set(E.map(Y=>{var D;return(D=Y.teachers)==null?void 0:D.id})).size,M=F?Math.round(T/F):0,U=new Set(E.filter(Y=>{var D;return C((D=Y.teachers)==null?void 0:D.id)}).map(Y=>{var D;return(D=Y.teachers)==null?void 0:D.id})).size,z=Math.max(0,F-U),O=Math.max(0,u.length-F),W=[d(T)+" ฿",R,F+" คน",d(M)+" ฿",U+" คน",z+" คน",O+" คน"];document.querySelectorAll(".don-stat-val").forEach((Y,D)=>{Y.textContent=W[D]})},B=()=>{var O,W,Y,D;const E=document.getElementById("don-table");if(!E)return;const T=(((O=document.getElementById("don-search"))==null?void 0:O.value)??"").toLowerCase(),R=((W=document.getElementById("don-filter-status"))==null?void 0:W.value)??"all",F=((Y=document.getElementById("don-filter-method"))==null?void 0:Y.value)??"all",M=((D=document.getElementById("don-filter-sort"))==null?void 0:D.value)??"date_desc";let U=v.filter(V=>{const K=V.teachers;return!(T&&!String((K==null?void 0:K.full_name)??"").toLowerCase().includes(T)&&!String((K==null?void 0:K.teacher_code)??"").includes(T)||R!=="all"&&V.status!==R||F==="cash"&&!i(V)||F==="transfer"&&i(V))});if(M==="date_asc"?U.sort((V,K)=>new Date(V.created_at)-new Date(K.created_at)):M==="amount_desc"&&U.sort((V,K)=>(K.amount??0)-(V.amount??0)),!U.length){E.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const z=V=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[V]??`<span class="text-gray-400 text-xs">${V}</span>`;E.innerHTML=`
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
        ${U.map((V,K)=>{const Q=V.teachers,Z=i(V),se=String(V.admin_note??"").replace(/^\[เงินสด\]\s*/,""),ae=I[Q==null?void 0:Q.id]??0,me=m(ae,h),ue=C(Q==null?void 0:Q.id)?"เดิม":"รายใหม่",_e=Q!=null&&Q.image_url?`<img src="${Q.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((Q==null?void 0:Q.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${V.id}" data-tid="${(Q==null?void 0:Q.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${K+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${_e}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(Q==null?void 0:Q.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(Q==null?void 0:Q.teacher_code)??""} · ${ue}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${w(me)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${d(V.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${Z?'<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>':`<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${V._resolvedSlip??""}" data-id="${V.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${z(V.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${r(V.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${se}">${se||"—"}</td>
            <td class="px-3 py-3">
              <div class="flex gap-1 justify-end" onclick="event.stopPropagation()">
                ${V.status==="pending"?`
                  <button class="don-approve text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium" data-id="${V.id}">✅</button>
                  <button class="don-reject  text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium" data-id="${V.id}">❌</button>
                `:""}
                <button class="don-edit text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 font-medium" data-id="${V.id}">✏️</button>
              </div>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,E.querySelectorAll(".don-row").forEach(V=>{V.addEventListener("click",()=>b(V.dataset.tid))}),E.querySelectorAll(".don-slip").forEach(V=>{V.addEventListener("click",async K=>{K.stopPropagation();let Q=V.dataset.url;if(!Q){const se=f.find(ae=>ae.id===Number(V.dataset.id));if(se!=null&&se.slip_url){const{getPaymentSlipViewUrl:ae}=await Se(async()=>{const{getPaymentSlipViewUrl:me}=await import("./api-CQwFwlFA.js");return{getPaymentSlipViewUrl:me}},__vite__mapDeps([0,1,2,3,4]));Q=await ae(se.slip_url).catch(()=>se.slip_url)}}if(!Q){N("ไม่พบสลิป","warning");return}const Z=document.createElement("div");Z.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",Z.innerHTML=`<img src="${Q}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,Z.addEventListener("click",()=>Z.remove()),document.body.appendChild(Z)})}),E.querySelectorAll(".don-approve").forEach(V=>{V.addEventListener("click",async K=>{K.stopPropagation();const{reviewPaymentRequest:Q}=await Se(async()=>{const{reviewPaymentRequest:Z}=await import("./api-CQwFwlFA.js");return{reviewPaymentRequest:Z}},__vite__mapDeps([0,1,2,3,4]));await Q(Number(V.dataset.id),"approved").catch(()=>{}),N("อนุมัติแล้ว ✅","success"),await L()})}),E.querySelectorAll(".don-reject").forEach(V=>{V.addEventListener("click",async K=>{K.stopPropagation();const Q=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:Z}=await Se(async()=>{const{reviewPaymentRequest:se}=await import("./api-CQwFwlFA.js");return{reviewPaymentRequest:se}},__vite__mapDeps([0,1,2,3,4]));await Z(Number(V.dataset.id),"rejected",Q||null).catch(()=>{}),N("ปฏิเสธแล้ว","info"),await L()})}),E.querySelectorAll(".don-edit").forEach(V=>{V.addEventListener("click",K=>{K.stopPropagation(),g(Number(V.dataset.id))})})},b=E=>{if(!E)return;const T=Number(E),R=v.filter(Q=>{var Z;return((Z=Q.teachers)==null?void 0:Z.id)===T});if(!R.length)return;const F=R[0].teachers,M=R.filter(Q=>Q.status==="approved"),U=M.reduce((Q,Z)=>Q+(Number(Z.amount)||0),0),z=m(U,h),O=(z==null?void 0:z.color)??"#10b981",W=parseInt(O.slice(1,3),16),Y=parseInt(O.slice(3,5),16),D=parseInt(O.slice(5,7),16),V=F!=null&&F.image_url?`<img src="${F.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${((F==null?void 0:F.full_name)??"?").charAt(0)}</div>`,K=document.createElement("div");K.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",K.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${W},${Y},${D},0.9),rgba(${W},${Y},${D},1))">
          ${V}
          ${z?`<div class="text-3xl mb-1">${/^https?:\/\//.test(z.sticker)?`<img src="${z.sticker}" class="w-12 h-12 object-contain mx-auto"/>`:z.sticker}</div>`:""}
          <p class="text-white font-bold text-base leading-tight">${(F==null?void 0:F.full_name)??"—"}</p>
          <p class="text-white/70 text-xs mt-0.5">${(F==null?void 0:F.teacher_code)??""}</p>
          ${z?`<span class="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">${z.title}</span>`:""}
        </div>
        <!-- stats -->
        <div class="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ยอดรวม</p>
            <p class="font-bold text-emerald-600">${d(U)} ฿</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ครั้งทั้งหมด</p>
            <p class="font-bold text-gray-700">${R.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${M.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${R.map(Q=>{const Z=i(Q),se=String(Q.admin_note??"").replace(/^\[เงินสด\]\s*/,""),ae={pending:"⏳",approved:"✅",rejected:"❌"}[Q.status]??"";return`<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${r(Q.created_at)}</span>
                <span class="text-[11px] ${Z?"text-gray-500":"text-blue-500"}">${Z?"💵":"🧾"}</span>
                ${se?`<span class="text-xs text-gray-400 truncate max-w-[80px]">${se}</span>`:""}
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-emerald-700">${d(Q.amount)} ฿</span>
                <span>${ae}</span>
              </div>
            </div>`}).join("")}
        </div>
        <div class="px-5 pb-5">
          <button class="don-sum-close w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(K),K.querySelector(".don-sum-close").addEventListener("click",()=>K.remove()),K.addEventListener("click",Q=>{Q.target===K&&K.remove()})},c=async()=>{const{getTeachers:E}=await Se(async()=>{const{getTeachers:M}=await import("./api-CQwFwlFA.js");return{getTeachers:M}},__vite__mapDeps([0,1,2,3,4])),T=await E().catch(()=>[]),R=document.createElement("div");R.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",R.innerHTML=`
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
      </div>`,document.body.appendChild(R);const F=Fa({wrap:R.querySelector("#don-teacher-wrap"),teachers:[...T].sort((M,U)=>(M.full_name??"").localeCompare(U.full_name??"","th"))});R.querySelector("#don-add-cancel").addEventListener("click",()=>R.remove()),R.querySelector("#don-add-confirm").addEventListener("click",async()=>{const M=F.getValue(),U=Number(R.querySelector("#don-add-amount").value),z=R.querySelector("#don-add-note").value.trim();if(!M){N("กรุณาเลือกครู","warning");return}if(!U){N("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:O}=await Se(async()=>{const{createPaymentRequest:W}=await import("./api-CQwFwlFA.js");return{createPaymentRequest:W}},__vite__mapDeps([0,1,2,3,4]));await O({teacher_id:parseInt(M),package_type:"donation",amount:U,status:"approved",admin_note:`[เงินสด] ${z}`.trim(),reviewed_at:new Date().toISOString()}).catch(W=>{N("บันทึกไม่สำเร็จ: "+he(W),"error")}),N("บันทึกโดเนทเงินสดแล้ว ✅","success"),R.remove(),await L()})},g=E=>{const T=f.find(M=>M.id===E);if(!T)return;const R=String(T.admin_note??"").replace(/^\[เงินสด\]\s*/,""),F=document.createElement("div");F.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",F.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${T.amount??""}"
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
      </div>`,document.body.appendChild(F),F.querySelector("#don-edit-cancel").addEventListener("click",()=>F.remove()),F.querySelector("#don-edit-save").addEventListener("click",async()=>{const M=Number(F.querySelector("#don-edit-amount").value),U=F.querySelector("#don-edit-note").value.trim(),z=i(T)?"[เงินสด] ":"",{supabase:O}=await Se(async()=>{const{supabase:Y}=await import("./supabase-BV-W2lsh.js").then(D=>D.a);return{supabase:Y}},[]),{error:W}=await O.from("payment_requests").update({amount:M,admin_note:(z+U).trim()||null}).eq("id",E);if(W){N("แก้ไขไม่สำเร็จ","error");return}N("บันทึกแล้ว ✅","success"),F.remove(),await L()})};($=document.getElementById("don-search"))==null||$.addEventListener("input",B),(y=document.getElementById("don-filter-status"))==null||y.addEventListener("change",B),(k=document.getElementById("don-filter-method"))==null||k.addEventListener("change",B),(S=document.getElementById("don-filter-sort"))==null||S.addEventListener("change",B),(A=document.getElementById("don-add"))==null||A.addEventListener("click",c),(H=document.getElementById("don-term-switcher"))==null||H.addEventListener("change",async E=>{o=E.target.value;try{localStorage.setItem("pp5_admin_donations_term",o)}catch{}const T=document.getElementById("don-add");T&&(T.disabled=o!==l,T.title=T.disabled?"เพิ่มเงินสดได้เฉพาะภาคเรียนปัจจุบัน":"");const R=document.getElementById("don-table");R&&(R.innerHTML='<div class="py-10 text-gray-400"><span class="animate-spin text-2xl">⏳</span><p class="mt-2 text-sm">กำลังโหลดข้อมูลภาคเรียน...</p></div>'),await L()}),await L()}async function en(){var m,w,f,v;Le("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const e=h=>String(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=h=>h?new Date(h).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",t={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},n=["suggestion","problem","password_reset"],l=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],o=Object.fromEntries(l.map(h=>[h.value,h]));$e(`
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
  </div>`);let x=[];const r=async()=>{x=await Ns().catch(()=>[]),i(),a()},d=async(h,I)=>{if(!h)return;if(!h.is_read)try{await ls(h.id,!0),h.is_read=!0}catch{}const u=String(I??"").slice(0,120);await Ro(h.profile_id,{title:"💬 แอดมินตอบกลับ Feedback ของคุณแล้ว",body:u||"เข้าไปดูคำตอบได้ที่เมนู Feedback ถึงแอดมิน",url:h.sender_role==="teacher"?"teacher.html":"student.html"}).catch(()=>{})},i=()=>{var I;const h=document.getElementById("fb-cat-stats");h&&(h.innerHTML=Object.keys(t).map(u=>{const p=x.filter(L=>L.category===u),j=p.length,_=p.filter(L=>!L.is_read).length;let C='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(n.includes(u)){const L=p.filter(q=>q.status==="resolved").length;C=`<p class="text-[10px] font-semibold mt-0.5 ${L===j&&j>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${L}/${j}</p>`}else _&&(C=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${_}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${u}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${t[u]}</p>
          <p class="text-xl font-bold text-gray-800">${j}</p>
          ${C}
        </div>`}).join(""),h.querySelectorAll(".fb-cat-card").forEach(u=>u.addEventListener("click",()=>{var j;const p=document.getElementById("fb-filter-cat");p&&(p.value=u.dataset.cat,a()),(j=document.getElementById("fb-list"))==null||j.scrollIntoView({behavior:"smooth",block:"start"})}))),(I=window._refreshFeedbackBadge)==null||I.call(window)},a=()=>{var C,L,q,B;const h=document.getElementById("fb-list");if(!h)return;const I=(((C=document.getElementById("fb-search"))==null?void 0:C.value)??"").toLowerCase(),u=((L=document.getElementById("fb-filter-role"))==null?void 0:L.value)??"all",p=((q=document.getElementById("fb-filter-cat"))==null?void 0:q.value)??"all",j=((B=document.getElementById("fb-filter-read"))==null?void 0:B.value)??"all";let _=x.filter(b=>{var g,$,y;const c=[b.sender_name,b.message,(g=b.student)==null?void 0:g.student_code,($=b.student)==null?void 0:$.main_room,(y=b.student)==null?void 0:y.religion_room,...(b.messages??[]).map(k=>k.message)].join(" ").toLowerCase();return!(I&&!c.includes(I)||u!=="all"&&b.sender_role!==u||p!=="all"&&b.category!==p||j==="unread"&&b.is_read||j==="read"&&!b.is_read)});if(!_.length){h.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}h.innerHTML=_.map(b=>{var c,g,$,y,k,S;return`
      <div class="bg-white rounded-2xl border ${b.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${b.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${e(b.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${e(b.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${b.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${b.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${s(b.created_at)}</p>
              ${b.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${e(((c=b.student)==null?void 0:c.student_code)||"—")} · ห้องสามัญ ${e(((g=b.student)==null?void 0:g.main_room)||"—")} · ห้องศาสนา ${e((($=b.student)==null?void 0:$.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${b.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${b.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(t).map(([A,H])=>`<option value="${A}" ${b.category===A?"selected":""}>${H}</option>`).join("")}
          </select>
          ${n.includes(b.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((y=o[b.status])==null?void 0:y.cls)??"bg-gray-100 text-gray-600"}">${((k=o[b.status])==null?void 0:k.label)??b.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(b.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(b.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(b.created_at)}</p></div></div>
          ${(b.messages??[]).map(A=>A.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(A.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${s(A.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(b.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(A.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(A.created_at)}</p></div></div>`).join("")}
          ${b.admin_reply&&!(b.messages??[]).some(A=>A.author_role==="admin"&&A.message===b.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(b.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${b.replied_at?s(b.replied_at):""}</p></div></div>`:""}
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
              ${l.map(A=>`<option value="${A.value}" ${b.status===A.value?"selected":""}>${A.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${b.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${b.replied_at?`ตอบล่าสุด ${s(b.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${b.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),h.querySelectorAll(".fb-toggle-read").forEach(b=>b.addEventListener("click",async()=>{const c=parseInt(b.dataset.id),g=b.dataset.read==="true";try{await ls(c,!g)}catch{N("บันทึกไม่สำเร็จ","error");return}const $=x.find(y=>y.id===c);$&&($.is_read=!g),i(),a()})),h.querySelectorAll(".fb-category-sel").forEach(b=>b.addEventListener("change",async()=>{const c=parseInt(b.dataset.id),g=b.value,$=x.find(k=>k.id===c),y=$==null?void 0:$.category;b.disabled=!0;try{await Eo(c,g)}catch{N("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),b.disabled=!1,b.value=y;return}$&&($.category=g),N("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),a()})),h.querySelectorAll(".fb-delete").forEach(b=>b.addEventListener("click",async()=>{const c=parseInt(b.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await Lo(c)}catch{N("ลบไม่สำเร็จ","error");return}x=x.filter(g=>g.id!==c),N("ลบแล้ว","success"),i(),a()}})),h.querySelectorAll(".fb-pw-reset-btn").forEach(b=>b.addEventListener("click",async()=>{const c=parseInt(b.dataset.id),g=parseInt(b.dataset.sid),$=b.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${$} เป็นรหัสนักเรียน (${$}) จริงหรือไม่?`))return;const y=b.textContent;b.disabled=!0,b.textContent="⏳ กำลังรีเซ็ท...";try{await Co(g,$),await Io(g).catch(()=>{}),await ds(c,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${$}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(S){N("รีเซ็ทไม่สำเร็จ: "+he(S),"error"),b.disabled=!1,b.textContent=y;return}const k=x.find(S=>S.id===c);if(k){k.status="resolved";const S=new Date().toISOString(),A=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${$}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;k.admin_reply=A,k.replied_at=S,k.messages=[...k.messages??[],{id:`local-${Date.now()}`,feedback_id:c,author_role:"admin",message:A,created_at:S}],await d(k,A)}N("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),i(),a()})),h.querySelectorAll(".fb-save-status").forEach(b=>b.addEventListener("click",async()=>{var S,A;const c=parseInt(b.dataset.id),g=b.closest(".fb-card"),$=(S=g.querySelector(".fb-status-sel"))==null?void 0:S.value,y=(A=g.querySelector(".fb-reply-input"))==null?void 0:A.value.trim();b.disabled=!0,b.textContent="⏳ กำลังบันทึก...";try{await ds(c,{status:$,adminReply:y})}catch{N("บันทึกไม่สำเร็จ","error"),b.disabled=!1,b.textContent="💾 บันทึก";return}const k=x.find(H=>H.id===c);if(k&&(k.status=$,y)){const H=new Date().toISOString();k.admin_reply=y,k.replied_at=H,k.messages=[...k.messages??[],{id:`local-${Date.now()}`,feedback_id:c,author_role:"admin",message:y,created_at:H}],await d(k,y)}N(y?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),i(),a()}))};(m=document.getElementById("fb-search"))==null||m.addEventListener("input",a),(w=document.getElementById("fb-filter-role"))==null||w.addEventListener("change",a),(f=document.getElementById("fb-filter-cat"))==null||f.addEventListener("change",a),(v=document.getElementById("fb-filter-read"))==null||v.addEventListener("change",a),await r()}const tn={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},nt={opening:{label:"เปิด–ปิดภาคเรียน",icon:"🚪",chip:"bg-emerald-50 text-emerald-700 border-emerald-100"},exam:{label:"การสอบ",icon:"📝",chip:"bg-violet-50 text-violet-700 border-violet-100"},student_activity:{label:"กิจกรรมนักเรียน",icon:"🎒",chip:"bg-cyan-50 text-cyan-700 border-cyan-100"},staff:{label:"ครูและบุคลากร",icon:"👥",chip:"bg-amber-50 text-amber-700 border-amber-100"},holiday:{label:"วันหยุด/วันสำคัญ",icon:"🔴",chip:"bg-rose-50 text-rose-700 border-rose-100"},deadline:{label:"กำหนดส่งเอกสาร",icon:"📤",chip:"bg-orange-50 text-orange-700 border-orange-100"},meeting:{label:"ประชุม",icon:"🤝",chip:"bg-blue-50 text-blue-700 border-blue-100"},other:{label:"อื่นๆ",icon:"📌",chip:"bg-gray-50 text-gray-600 border-gray-100"}},Ts=[{header:"bg-emerald-700",soft:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800"},{header:"bg-violet-700",soft:"bg-violet-50",border:"border-violet-200",text:"text-violet-800"},{header:"bg-cyan-700",soft:"bg-cyan-50",border:"border-cyan-200",text:"text-cyan-800"},{header:"bg-blue-700",soft:"bg-blue-50",border:"border-blue-200",text:"text-blue-800"},{header:"bg-amber-600",soft:"bg-amber-50",border:"border-amber-200",text:"text-amber-800"},{header:"bg-rose-700",soft:"bg-rose-50",border:"border-rose-200",text:"text-rose-800"},{header:"bg-orange-700",soft:"bg-orange-50",border:"border-orange-200",text:"text-orange-800"}],Ci=["อา","จ","อ","พ","พฤ","ศ","ส"];function ze(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function aa(e){return String(e??"").slice(0,10)}function mt(e,s=!1){const t=aa(e);return t?new Date(`${t}T00:00:00`).toLocaleDateString("th-TH",s?{day:"numeric",month:"short",year:"numeric"}:{day:"numeric",month:"long",year:"numeric"}):"—"}function Pa(e){return aa(e).slice(0,7)}function an(e){return new Date(`${e}-01T00:00:00`).toLocaleDateString("th-TH",{month:"long",year:"numeric"})}function Ii(e){return e.is_holiday?"holiday":nt[e.category]?e.category:e.event_type==="deadline"?"deadline":e.event_type==="meeting"?"meeting":/สอบ|คัดเลือก|วัดความรู้|TGAT|TPAT|A-level|I-Net|O-NET/i.test(e.label??"")?"exam":/เปิดเรียน|ปิดภาค|ลงทะเบียน/i.test(e.label??"")?"opening":"other"}function Ti(e){return{...e,event_date:aa(e.event_date),end_date:e.end_date?aa(e.end_date):null,category:Ii(e),work_calendar_items:(e.work_calendar_items??[]).slice().sort((s,t)=>(s.sort_order??0)-(t.sort_order??0))}}function ji(e,s){return e.filter(t=>{const n=t.end_date||t.event_date;return t.event_date<=s&&n>=s})}function sn(e,s){const t=`${s}-01`,n=new Date(`${t}T00:00:00`),l=`${s}-${String(new Date(n.getFullYear(),n.getMonth()+1,0).getDate()).padStart(2,"0")}`,o=e.end_date||e.event_date;return e.event_date<=l&&o>=t}function Bi(e){const s=e.flatMap(o=>[o.event_date,o.end_date||o.event_date]).filter(Boolean).sort();if(!s.length)return[Pa(Gs(new Date))];const t=new Date(`${s[0].slice(0,7)}-01T00:00:00`),n=new Date(`${s.at(-1).slice(0,7)}-01T00:00:00`),l=[];for(const o=new Date(t);o<=n;o.setMonth(o.getMonth()+1))l.push(`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`);return l}function qi(e,s){return`ฉันจะแนบ PDF หรือภาพปฏิทินการปฏิบัติงานของโรงเรียนให้คุณอ่าน
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

ห้ามสร้างรายการซ้ำ ห้ามตัดรายการที่อยู่หลังช่วงเปิดเรียน และห้ามตัดกิจกรรมต่อเนื่องหลังสิ้นสุดภาคเรียน เช่น งานในเดือนเมษายน ให้ใส่เข้ามาตามเอกสารทั้งหมด`}function js(e){return String(e??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim()}function Bs(e){const t=String(e??"").trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";let n=Number(t[1]);n>2400&&(n-=543);const l=Number(t[2]),o=Number(t[3]),x=new Date(Date.UTC(n,l-1,o));return x.getUTCFullYear()!==n||x.getUTCMonth()!==l-1||x.getUTCDate()!==o?"":`${n}-${String(l).padStart(2,"0")}-${String(o).padStart(2,"0")}`}function Ai(e){const s=Bs(e.event_date??e.start_date??e.date),t=e.end_date?Bs(e.end_date):null,n=String(e.label??e.title??e.activity??"").trim(),l=nt[e.category]?e.category:"other";return{event_date:s,end_date:t||null,label:n,description:String(e.description??e.details??"").trim(),category:l,responsible_unit:String(e.responsible_unit??e.responsible??e.owner??"").trim(),week_number:Number.isInteger(Number(e.week_number))?Number(e.week_number):null,is_holiday:e.is_holiday===!0||e.is_holiday==="true",holiday_note:String(e.holiday_note??e.holiday??"").trim(),event_type:tn[e.event_type]?e.event_type:"other",round_number:Number.isInteger(Number(e.round_number))?Number(e.round_number):null,source_page:Number.isInteger(Number(e.source_page))?Number(e.source_page):null,note:String(e.note??"").trim()}}function Mi(e,s=!1){const t=nt[e.category]||nt.other;return`<div class="${s?"text-[10px]":"text-xs"} rounded-lg border px-2 py-1 ${t.chip} truncate" title="${ze(e.label)}">${t.icon} ${ze(e.label)}</div>`}function Ni(e,s,t,{manager:n=!1}={}){const l=Ts[t%Ts.length],o=new Date(`${e}-01T00:00:00`),x=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),r=o.getDay(),d=[];for(let a=0;a<r;a++)d.push('<div class="min-h-[74px] bg-gray-50/50"></div>');for(let a=1;a<=x;a++){const m=`${e}-${String(a).padStart(2,"0")}`,w=ji(s,m);d.push(`<div class="min-h-[74px] p-1.5 border-t border-r border-gray-100 bg-white ${w.some(f=>f.is_holiday)?"bg-rose-50/60":""}">
      <div class="flex items-center justify-between gap-1 mb-1"><span class="text-[11px] font-bold ${w.some(f=>f.is_holiday)?"text-rose-600":"text-gray-500"}">${a}</span>${w.length?`<span class="text-[9px] text-gray-400">${w.length}</span>`:""}</div>
      <div class="space-y-1">${w.slice(0,3).map(f=>Mi(f,!0)).join("")}${w.length>3?`<div class="text-[10px] text-gray-400 px-1">+ อีก ${w.length-3}</div>`:""}</div>
    </div>`)}const i=s.filter(a=>sn(a,e));return`<section class="rounded-3xl border ${l.border} bg-white shadow-sm overflow-hidden work-calendar-month" data-wcal-month="${e}">
    <div class="${l.header} text-white px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2">
      <div><h2 class="font-extrabold text-base">${ze(an(e))}</h2><p class="text-[11px] text-white/80">ปฏิทินกิจกรรมและกำหนดการ</p></div>
      <span class="text-xs bg-white/15 rounded-full px-3 py-1">${i.length} รายการ</span>
    </div>
    <div class="grid grid-cols-7 border-l border-gray-100">${Ci.map(a=>`<div class="text-center text-[10px] sm:text-xs font-bold ${l.text} ${l.soft} py-2 border-t border-r border-gray-100">${a}</div>`).join("")}${d.join("")}</div>
    <div class="border-t ${l.border} ${l.soft} p-3 sm:p-4">
      <div class="overflow-x-auto"><table class="w-full text-xs min-w-[680px]"><thead><tr class="text-gray-500 text-left"><th class="py-2 px-2 w-[18%]">วัน/เดือน/ปี</th><th class="py-2 px-2">กิจกรรม/งาน</th><th class="py-2 px-2 w-[22%]">ผู้รับผิดชอบ</th><th class="py-2 px-2 w-[12%]">สัปดาห์</th><th class="py-2 px-2 w-[16%]">หมายเหตุ</th>${n?'<th class="py-2 px-2 w-[86px]">จัดการ</th>':""}</tr></thead><tbody class="divide-y divide-white/80">${i.length?i.map(a=>{const m=a.end_date&&a.end_date!==a.event_date?`${mt(a.event_date,!0)} – ${mt(a.end_date,!0)}`:mt(a.event_date,!0),w=a.is_holiday?'<span class="ml-1 text-rose-600 font-bold">วันหยุด</span>':"";return`<tr class="align-top"><td class="py-2 px-2 font-semibold ${a.is_holiday?"text-rose-600":"text-gray-700"}">${m}${w}</td><td class="py-2 px-2"><div class="font-bold text-gray-800">${ze(a.label)}</div>${a.description?`<div class="text-gray-500 mt-0.5">${ze(a.description)}</div>`:""}</td><td class="py-2 px-2 text-gray-600">${ze(a.responsible_unit||"—")}</td><td class="py-2 px-2 text-gray-600">${a.week_number?`สัปดาห์ที่ ${a.week_number}`:"—"}</td><td class="py-2 px-2 text-gray-500">${ze(a.holiday_note||a.note||"—")}</td>${n?`<td class="py-2 px-2 whitespace-nowrap"><div class="flex flex-wrap gap-1.5"><button type="button" class="wcal-edit-btn inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-2 py-1 text-[11px] font-bold text-indigo-700 hover:bg-indigo-100" data-ev-id="${a.id}" title="แก้ไขกิจกรรม">✏️ แก้ไข</button><button type="button" class="wcal-del-btn inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-ev-id="${a.id}" title="ลบกิจกรรม">🗑️ ลบ</button></div></td>`:""}</tr>`}).join(""):`<tr><td colspan="${n?6:5}" class="py-6 text-center text-gray-400">ยังไม่มีรายการในเดือนนี้</td></tr>`}</tbody></table></div>
    </div>
  </section>`}function Di({academicYear:e,semester:s,events:t,teacher:n,importEvents:l}){var u;(u=document.getElementById("wcal-ai-modal"))==null||u.remove();const o=document.createElement("div");o.id="wcal-ai-modal",o.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",o.innerHTML=`<div class="bg-white w-full sm:max-w-6xl max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl">
    <div class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-5 sm:px-7 py-4 flex items-start justify-between gap-4"><div><h3 class="font-bold text-gray-800">🤖 เพิ่มปฏิทินจาก JSON ที่ AI สร้าง</h3><p class="text-xs text-gray-500 mt-1">อัปโหลด PDF/ภาพให้ AI ภายนอก แล้วนำ JSON กลับมาตรวจสอบที่นี่ก่อนบันทึก</p></div><button id="wcal-ai-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button></div>
    <div class="p-5 sm:p-7 space-y-5">
      <div class="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-xs text-violet-900 leading-relaxed"><b>ความปลอดภัย:</b> ระบบจะไม่ส่งข้อมูลเข้า database จาก JSON ทันที ต้องตรวจสอบรายการและกดยืนยันก่อนทุกครั้ง รายการวันที่และชื่อซ้ำจะถูกข้ามโดยไม่เขียนทับข้อมูลเดิม</div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><section class="rounded-2xl border border-gray-200 p-4"><div class="flex items-center justify-between gap-2 mb-2"><div><h4 class="font-semibold text-sm text-gray-800">1) Prompt สำหรับ AI</h4><p class="text-[11px] text-gray-400 mt-0.5">กดสร้าง Prompt ก่อนคัดลอก แล้วแนบเอกสารต้นฉบับให้ AI</p></div><div class="flex gap-2"><button id="wcal-ai-generate" type="button" class="text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-lg">⚡ สร้าง Prompt</button><button id="wcal-ai-copy" type="button" hidden disabled aria-disabled="true" class="text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg disabled:opacity-40">📋 คัดลอก</button></div></div><textarea id="wcal-ai-prompt" readonly rows="18" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y bg-gray-50"></textarea></section>
      <section class="rounded-2xl border border-gray-200 p-4"><h4 class="font-semibold text-sm text-gray-800">2) วาง JSON ที่ AI สร้าง</h4><p class="text-[11px] text-gray-400 mt-0.5 mb-2">รองรับ JSON ที่ครอบด้วย \`\`\`json ... \`\`\`</p><textarea id="wcal-ai-json" rows="18" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y font-mono" placeholder="วาง JSON ที่ได้จาก AI ที่นี่"></textarea><button id="wcal-ai-parse" class="w-full mt-3 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold">🔍 ตรวจสอบ JSON และแสดงตัวอย่าง</button><p id="wcal-ai-error" class="hidden text-xs text-red-600 mt-2 whitespace-pre-wrap"></p></section></div>
      <section id="wcal-ai-preview-wrap" class="hidden rounded-2xl border border-gray-200 overflow-hidden"><div class="bg-gray-50 px-4 py-3 border-b border-gray-200"><h4 class="font-semibold text-sm text-gray-800">3) ตรวจสอบก่อนนำเข้า</h4><p id="wcal-ai-summary" class="text-xs text-gray-500 mt-0.5"></p><p class="text-[11px] text-amber-700 mt-1">หากรายการใดขึ้น “ข้อมูลไม่ครบ” ให้กด 🗑️ ลบรายการนี้ก่อนยืนยันนำเข้า</p></div><div id="wcal-ai-preview" class="p-4 space-y-2 max-h-[40vh] overflow-y-auto"></div></section>
    </div><div class="sticky bottom-0 bg-white/95 backdrop-blur border-t border-gray-100 px-5 sm:px-7 py-4 flex flex-col-reverse sm:flex-row justify-end gap-2"><button id="wcal-ai-cancel" class="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button><button id="wcal-ai-apply" disabled class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold disabled:opacity-40">✅ ยืนยันนำเข้าปฏิทิน</button></div></div>`,document.body.appendChild(o);const x=o.querySelector("#wcal-ai-prompt"),r=o.querySelector("#wcal-ai-copy"),d=Js({copyButton:r}),i=()=>o.remove();o.querySelector("#wcal-ai-close").onclick=i,o.querySelector("#wcal-ai-cancel").onclick=i,o.addEventListener("click",p=>{p.target===o&&i()}),o.querySelector("#wcal-ai-generate").onclick=()=>{x.value=qi(e,s),d.markGenerated(),r.textContent="📋 คัดลอก",N("สร้าง Prompt ปฏิทินแล้ว","success")},r.onclick=async p=>{if(!d.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(x.value),p.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(p.currentTarget)&&(p.currentTarget.textContent="📋 คัดลอก")},1500)}catch{x.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}};const a=o.querySelector("#wcal-ai-error"),m=o.querySelector("#wcal-ai-preview-wrap"),w=o.querySelector("#wcal-ai-preview"),f=o.querySelector("#wcal-ai-summary"),v=o.querySelector("#wcal-ai-apply");let h=[];const I=()=>{const p=h.filter(_=>!_.event_date||!_.label||_.end_date&&_.end_date<_.event_date),j=h.filter(_=>_.duplicate);f.textContent=`ทั้งหมด ${h.length} รายการ · ซ้ำ ${j.length} รายการ · ${p.length?`ข้อมูลไม่ครบ ${p.length} รายการ`:"พร้อมตรวจสอบและนำเข้า"}`,v.disabled=!h.length||p.length>0,w.innerHTML=h.map((_,C)=>`<div class="rounded-2xl border ${_.duplicate?"border-amber-200 bg-amber-50/50":"border-gray-200 bg-white"} p-3"><div class="flex flex-wrap items-start justify-between gap-2"><div><p class="font-bold text-sm text-gray-800">${C+1}. ${ze(_.label||"ไม่พบชื่อกิจกรรม")}</p><p class="text-xs text-gray-500 mt-1">${_.event_date?mt(_.event_date,!0):"ไม่พบวันที่"}${_.end_date?` – ${mt(_.end_date,!0)}`:""} · ${ze((nt[_.category]||nt.other).label)}</p><p class="text-xs text-gray-500 mt-1">ผู้รับผิดชอบ: ${ze(_.responsible_unit||"—")} · สัปดาห์: ${_.week_number||"—"} · หน้า ${_.source_page||"—"}</p>${_.note?`<p class="text-[11px] text-amber-700 mt-1">หมายเหตุ AI: ${ze(_.note)}</p>`:""}</div><div class="flex flex-wrap items-center gap-2"><span class="text-[11px] font-semibold px-2.5 py-1 rounded-lg ${_.duplicate?"bg-amber-100 text-amber-700":!_.event_date||!_.label?"bg-red-100 text-red-700":"bg-emerald-100 text-emerald-700"}">${_.duplicate?"รายการซ้ำ จะข้าม":!_.event_date||!_.label?"ข้อมูลไม่ครบ":"ผ่านการตรวจรูปแบบ"}</span><button type="button" class="wcal-preview-delete inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-wcal-preview-delete="${C}" title="นำรายการนี้ออกจากชุดนำเข้า">🗑️ ลบรายการนี้</button></div></div></div>`).join("")};w.addEventListener("click",p=>{const j=p.target.closest("[data-wcal-preview-delete]");if(!j)return;const _=Number(j.dataset.wcalPreviewDelete);!Number.isInteger(_)||!h[_]||(h.splice(_,1),I())}),o.querySelector("#wcal-ai-parse").onclick=()=>{a.classList.add("hidden");try{const p=JSON.parse(js(o.querySelector("#wcal-ai-json").value)),j=Array.isArray(p)?p:p.events??p.calendar_events??p.items??p.data;if(!Array.isArray(j)||!j.length)throw new Error("ไม่พบรายการ events ใน JSON");const _=Number(p.academic_year??e),C=Number(p.semester??s);if(_!==Number(e)||C!==Number(s))throw new Error(`JSON ระบุภาคเรียน ${C}/${_} แต่หน้าปัจจุบันคือ ${s}/${e}`);const L=p.source_title||p.title||"ปฏิทินปฏิบัติงาน";h=j.map(q=>({...Ai(q),source_title:L,source_revision:p.source_revision||"",source_document_name:p.source_document_name||""})),h.forEach(q=>{q.duplicate=t.some(B=>B.event_date===q.event_date&&String(B.label).trim().toLowerCase()===q.label.toLowerCase())}),m.classList.remove("hidden"),I(),o.dataset.sourceTitle=L,o.dataset.sourceRevision=p.source_revision||"",o.dataset.sourceDocumentName=p.source_document_name||""}catch(p){a.textContent=`อ่าน JSON ไม่สำเร็จ: ${p.message}`,a.classList.remove("hidden"),m.classList.add("hidden"),h=[],v.disabled=!0}},v.onclick=async()=>{var p;if(!v.disabled&&confirm(`ยืนยันนำเข้ากิจกรรม ${h.length} รายการในภาคเรียน ${s}/${e}?
รายการที่ซ้ำจะถูกข้าม และข้อมูลเดิมจะไม่ถูกเขียนทับ`)){v.disabled=!0,v.textContent="กำลังบันทึก...";try{const j=await l({academicYear:e,semester:s,sourceTitle:o.dataset.sourceTitle||"ปฏิทินปฏิบัติงาน",sourceRevision:o.dataset.sourceRevision||"",sourceDocumentName:o.dataset.sourceDocumentName||"",rawPayload:JSON.parse(js(o.querySelector("#wcal-ai-json").value)),events:h,createdByTeacherId:n==null?void 0:n.id});N(`นำเข้าสำเร็จ ${(j==null?void 0:j.inserted_count)??h.length} รายการ${j!=null&&j.skipped_count?` · ข้ามรายการซ้ำ ${j.skipped_count} รายการ`:""} ✅`,"success"),i(),await((p=window._reloadWorkCalendar)==null?void 0:p.call(window))}catch(j){N(`นำเข้าไม่สำเร็จ: ${j.message}`,"error"),v.disabled=!1,v.textContent="✅ ยืนยันนำเข้าปฏิทิน"}}}}async function rn({manager:e=!1,teacher:s=null}={}){var L,q,B,b;const{getWorkCalendarEvents:t,getAcademicTerms:n,getSystemConfig:l,createWorkCalendarEvent:o,updateWorkCalendarEvent:x,deleteWorkCalendarEvent:r,replaceWorkCalendarItems:d,importWorkCalendarEvents:i}=await Se(async()=>{const{getWorkCalendarEvents:c,getAcademicTerms:g,getSystemConfig:$,createWorkCalendarEvent:y,updateWorkCalendarEvent:k,deleteWorkCalendarEvent:S,replaceWorkCalendarItems:A,importWorkCalendarEvents:H}=await import("./api-CQwFwlFA.js");return{getWorkCalendarEvents:c,getAcademicTerms:g,getSystemConfig:$,createWorkCalendarEvent:y,updateWorkCalendarEvent:k,deleteWorkCalendarEvent:S,replaceWorkCalendarItems:A,importWorkCalendarEvents:H}},__vite__mapDeps([0,1,2,3,4]));Le(e?"work-calendar":"work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const a=await l().catch(()=>({})),m=Number(a.academicYear??a.academic_year??new Date().getFullYear()+543),w=Number(a.semester??1),v=[...await n().catch(()=>[]),{academic_year:m,semester:1},{academic_year:m,semester:2},{academic_year:m,semester:w,is_current:!0}].filter((c,g,$)=>$.findIndex(y=>Number(y.academic_year)===Number(c.academic_year)&&Number(y.semester)===Number(c.semester))===g).sort((c,g)=>Number(g.academic_year)-Number(c.academic_year)||Number(g.semester)-Number(c.semester));let h=m,I=w;const u=v.map(c=>`<option value="${Number(c.academic_year)}-${Number(c.semester)}" ${Number(c.academic_year)===h&&Number(c.semester)===I?"selected":""}>ภาคเรียนที่ ${Number(c.semester)}/${Number(c.academic_year)}${c.is_current?" (ปัจจุบัน)":""}</option>`).join("");$e(`<div class="animate-fade max-w-7xl mx-auto pb-8"><div class="flex flex-wrap items-start justify-between gap-3 mb-5"><div><p class="text-xs text-gray-400 mb-1">ปฏิทินทางการของโรงเรียน · แสดงตามเดือนและตารางกิจกรรม</p><div class="flex flex-wrap items-center gap-2"><select id="wcal-term" class="border border-indigo-200 bg-indigo-50 text-indigo-700 rounded-xl px-3 py-2 text-sm font-bold outline-none">${u}</select><span id="wcal-period" class="text-xs text-gray-500"></span></div></div>${e?'<div class="flex flex-wrap gap-2"><button id="wcal-ai-import" class="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold shadow-sm">🤖 นำเข้าจาก AI JSON</button><button id="wcal-create-btn" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm">＋ เพิ่มกิจกรรม</button></div>':""}</div>
    <div class="rounded-3xl border border-sky-100 bg-sky-50 p-4 sm:p-5 mb-5"><div class="flex flex-wrap items-start gap-3"><div class="text-2xl">📅</div><div class="flex-1 min-w-[240px]"><h2 class="font-extrabold text-sky-900">ปฏิทินการปฏิบัติงานโรงเรียน</h2><p class="text-xs text-sky-700 mt-1">รูปแบบนี้ยึดโครงสร้างปฏิทินฝ่ายวิชาการ: ปฏิทินรายเดือน กิจกรรม ผู้รับผิดชอบ สัปดาห์ และวันหยุดสำคัญ</p></div><span id="wcal-source-badge" class="text-[11px] font-semibold text-sky-700 bg-white/70 border border-sky-100 rounded-full px-3 py-1.5">ยังไม่ได้ระบุเอกสารต้นทาง</span></div></div>
    <div id="wcal-summary" class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5"></div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 mb-5"><div class="grid grid-cols-1 md:grid-cols-[1fr_180px_180px] gap-2"><input id="wcal-search" class="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200" placeholder="🔎 ค้นหากิจกรรม ผู้รับผิดชอบ หรือหมายเหตุ"><select id="wcal-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกประเภท</option>${Object.entries(nt).map(([c,g])=>`<option value="${c}">${g.icon} ${g.label}</option>`).join("")}</select><select id="wcal-month" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกเดือน</option></select></div></div>
    <div id="wcal-body"><div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div></div>
  </div>${e?`<div id="wcal-modal" class="hidden fixed inset-0 z-[80] flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="wcal-modal-backdrop"></div><div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"><div class="p-5 sm:p-6"><h3 id="wcal-modal-title" class="text-lg font-bold text-gray-800 mb-4">เพิ่มกิจกรรม</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><label class="text-xs font-semibold text-gray-500">ประเภทกิจกรรม<select id="wcal-event-type" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(tn).map(([c,g])=>`<option value="${c}">${g}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">หมวดหมู่<select id="wcal-event-category" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(nt).map(([c,g])=>`<option value="${c}">${g.icon} ${g.label}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">วันที่เริ่มต้น *<input id="wcal-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500">วันที่สิ้นสุด<input id="wcal-end-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">ชื่อกิจกรรม *<input id="wcal-label" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น เปิดเรียนภาคเรียนที่ 2/2569"></label><label class="text-xs font-semibold text-gray-500">ผู้รับผิดชอบ<input id="wcal-responsible" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="ฝ่ายวิชาการ"></label><label class="text-xs font-semibold text-gray-500">สัปดาห์ที่<input id="wcal-week" type="number" min="1" max="99" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น 1"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">รายละเอียด<textarea id="wcal-desc" rows="2" maxlength="800" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">หมายเหตุ/วันหยุด<textarea id="wcal-note" rows="2" maxlength="500" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="sm:col-span-2 flex items-center gap-2 text-sm text-rose-700"><input id="wcal-holiday" type="checkbox" class="w-4 h-4"> ทำเครื่องหมายเป็นวันหยุด/วันสำคัญ</label></div><div class="mt-4"><p class="text-xs font-semibold text-gray-500 mb-2">Checklist เดิม (ถ้ามี)</p><div id="wcal-items-list" class="space-y-2"></div><button id="wcal-add-item" class="mt-2 text-indigo-600 text-sm font-semibold">＋ เพิ่มรายการ</button></div><div class="flex gap-3 mt-6"><button id="wcal-modal-cancel" class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600">ยกเลิก</button><button id="wcal-modal-save" class="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold">บันทึก</button></div></div></div></div>`:""}`);let p=[],j=null;const _=async()=>{const c=document.getElementById("wcal-body");c.innerHTML='<div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div>';try{p=(await t(h,I)).map(Ti),C()}catch(g){c.innerHTML=`<div class="text-center py-12 text-red-500 text-sm">โหลดไม่สำเร็จ: ${ze(g.message)}</div>`}},C=()=>{var O,W,Y;const c=String(((O=document.getElementById("wcal-search"))==null?void 0:O.value)??"").trim().toLowerCase(),g=((W=document.getElementById("wcal-category"))==null?void 0:W.value)??"",$=((Y=document.getElementById("wcal-month"))==null?void 0:Y.value)??"",y=p.filter(D=>{const V=[D.label,D.description,D.responsible_unit,D.note,D.holiday_note].join(" ").toLowerCase();return(!c||V.includes(c))&&(!g||D.category===g)&&(!$||Pa(D.event_date)===$||Pa(D.end_date||D.event_date)===$)}),k=Bi(y.length?y:p),S=document.getElementById("wcal-month"),A=S==null?void 0:S.value;S&&(S.innerHTML=`<option value="">ทุกเดือน</option>${k.map(D=>`<option value="${D}">${ze(an(D))}</option>`).join("")}`,k.includes(A)?S.value=A:$&&(S.value=$));const H=document.getElementById("wcal-summary"),E=Gs(new Date),T=p.filter(D=>(D.end_date||D.event_date)>=E).length,R=p.filter(D=>D.category==="exam").length,F=p.filter(D=>D.is_holiday||D.category==="holiday").length;H.innerHTML=[["📋",p.length,"กิจกรรมทั้งหมด","bg-indigo-50 text-indigo-700"],["⏳",T,"กิจกรรมที่ยังไม่สิ้นสุด","bg-emerald-50 text-emerald-700"],["📝",R,"รายการสอบ","bg-violet-50 text-violet-700"],["🔴",F,"วันหยุด/วันสำคัญ","bg-rose-50 text-rose-700"]].map(([D,V,K,Q])=>`<div class="rounded-2xl border border-gray-100 bg-white shadow-sm px-4 py-3 flex items-center gap-3"><span class="w-10 h-10 rounded-xl ${Q} flex items-center justify-center text-lg">${D}</span><div><p class="text-xl font-extrabold text-gray-800">${V}</p><p class="text-[11px] text-gray-500">${K}</p></div></div>`).join("");const M=p.find(D=>D.source_document_name||D.source_revision),U=document.getElementById("wcal-source-badge");U&&(U.textContent=M?`📄 ${M.source_document_name||"เอกสารฝ่ายวิชาการ"}${M.source_revision?` · ฉบับ ${M.source_revision}`:""}`:"📝 เพิ่มด้วยมือ/ข้อมูลเดิม");const z=document.getElementById("wcal-period");z&&(z.textContent=p.length?`${mt(p[0].event_date,!0)} – ${mt(p.at(-1).end_date||p.at(-1).event_date,!0)}`:"ยังไม่มีช่วงวันที่"),document.getElementById("wcal-body").innerHTML=y.length?`<div class="space-y-5">${k.map((D,V)=>Ni(D,y.filter(K=>sn(K,D)),V,{manager:e})).join("")}</div>`:'<div class="rounded-3xl border border-dashed border-gray-200 bg-white text-center py-16 text-gray-400 text-sm">ไม่พบกิจกรรมตามตัวกรอง</div>'};if(window._reloadWorkCalendar=_,(L=document.getElementById("wcal-term"))==null||L.addEventListener("change",async c=>{const[g,$]=c.target.value.split("-").map(Number);h=g,I=$,await _()}),(q=document.getElementById("wcal-search"))==null||q.addEventListener("input",C),(B=document.getElementById("wcal-category"))==null||B.addEventListener("change",C),(b=document.getElementById("wcal-month"))==null||b.addEventListener("change",C),e){const c=y=>{const k=document.getElementById("wcal-items-list"),S=document.createElement("div");S.className="flex gap-2 items-center",S.innerHTML=`<input maxlength="150" value="${ze(y)}" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm"><button class="wcal-remove-item text-gray-400 hover:text-rose-500">✕</button>`,S.querySelector("button").onclick=()=>S.remove(),k.appendChild(S)},g=()=>{document.getElementById("wcal-modal").classList.add("hidden"),j=null},$=y=>{j=(y==null?void 0:y.id)??null,document.getElementById("wcal-modal-title").textContent=y?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.getElementById("wcal-event-type").value=(y==null?void 0:y.event_type)??"other",document.getElementById("wcal-event-category").value=(y==null?void 0:y.category)??"other",document.getElementById("wcal-date").value=(y==null?void 0:y.event_date)??"",document.getElementById("wcal-end-date").value=(y==null?void 0:y.end_date)??"",document.getElementById("wcal-label").value=(y==null?void 0:y.label)??"",document.getElementById("wcal-responsible").value=(y==null?void 0:y.responsible_unit)??"",document.getElementById("wcal-week").value=(y==null?void 0:y.week_number)??"",document.getElementById("wcal-desc").value=(y==null?void 0:y.description)??"",document.getElementById("wcal-note").value=(y==null?void 0:y.holiday_note)??(y==null?void 0:y.note)??"",document.getElementById("wcal-holiday").checked=!!(y!=null&&y.is_holiday),document.getElementById("wcal-items-list").innerHTML="",((y==null?void 0:y.work_calendar_items)??[]).forEach(k=>c(k.item_label)),document.getElementById("wcal-modal").classList.remove("hidden")};document.getElementById("wcal-create-btn").onclick=()=>$(),document.getElementById("wcal-modal-cancel").onclick=g,document.getElementById("wcal-modal-backdrop").onclick=g,document.getElementById("wcal-add-item").onclick=()=>c(""),document.getElementById("wcal-body").addEventListener("click",async y=>{const k=y.target.closest(".wcal-edit-btn"),S=y.target.closest(".wcal-del-btn");if(k){const A=p.find(H=>Number(H.id)===Number(k.dataset.evId));A&&$(A)}if(S){const A=p.find(H=>Number(H.id)===Number(S.dataset.evId));if(!A||!confirm(`ลบ “${A.label}” ใช่ไหม?`))return;try{await r(A.id),N("ลบกิจกรรมแล้ว","success"),await _()}catch(H){N(`ลบไม่สำเร็จ: ${H.message}`,"error")}}}),document.getElementById("wcal-modal-save").onclick=async()=>{const y=document.getElementById("wcal-event-type").value,k=document.getElementById("wcal-event-category").value,S=document.getElementById("wcal-date").value,A=document.getElementById("wcal-end-date").value||null,H=document.getElementById("wcal-label").value.trim();if(!S||!H)return N("กรุณากรอกวันที่และชื่อกิจกรรม","warning");if(A&&A<S)return N("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");const E={eventType:y,eventDate:S,endDate:A,label:H,description:document.getElementById("wcal-desc").value.trim(),category:k,responsibleUnit:document.getElementById("wcal-responsible").value.trim(),weekNumber:Number(document.getElementById("wcal-week").value)||null,isHoliday:document.getElementById("wcal-holiday").checked,holidayNote:document.getElementById("wcal-note").value.trim()},T=document.getElementById("wcal-modal-save");T.disabled=!0,T.textContent="กำลังบันทึก...";try{let R;j?(R=await x(j,E),await d(j,[...document.querySelectorAll("#wcal-items-list input")].map(F=>F.value.trim()).filter(Boolean))):(R=await o({...E,academicYear:h,semester:I,createdByTeacherId:s==null?void 0:s.id}),await d(R.id,[...document.querySelectorAll("#wcal-items-list input")].map(F=>F.value.trim()).filter(Boolean))),g(),N("บันทึกกิจกรรมแล้ว","success"),await _()}catch(R){N(`บันทึกไม่สำเร็จ: ${R.message}`,"error")}finally{T.disabled=!1,T.textContent="บันทึก"}},document.getElementById("wcal-ai-import").onclick=()=>Di({academicYear:h,semester:I,events:p,teacher:s,importEvents:y=>i(y)})}await _()}async function Hi(){return rn({manager:!1})}async function nn(e){return rn({manager:!0,teacher:e})}function Ri(e){return e.filter(s=>s.category==="ศาสนา"||["AGM","AGMVOC"].includes(s.subject_group)).concat(e.filter(s=>!s.category&&!["AGM","AGMVOC","ACDMVOC"].includes(s.subject_group))).filter((s,t,n)=>n.findIndex(l=>l.id===s.id)===t)}async function on(){Le("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",$e(`<div class="max-w-4xl mx-auto animate-fade">
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
  </div>`);let e=[],s=[];try{[e,s]=await Promise.all([ut(),Re()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}sa(e),document.getElementById("btn-add-rg").onclick=()=>ln(null,s,async()=>{const t=await ut();sa(t)})}function sa(e){const s=document.getElementById("rg-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${te(t.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${n?`<div class="flex items-center gap-2">
                    ${n.image_url?`<img src="${n.image_url}" class="w-7 h-7 rounded-full object-cover" />`:`<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${te(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
                    <div>
                      <span class="font-medium">${te(n.full_name)}</span>
                      ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
                    </div>
                  </div>`:'<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${t.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${t.id}" data-name="${te(t.name)}">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,s.querySelectorAll(".rg-edit").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,o=(await ut()).find(r=>r.id===n),x=await Re();ln(o,x,async()=>{sa(await ut())})}}),s.querySelectorAll(".rg-del").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,l=t.dataset.name;if(confirm(`ลบกลุ่ม "${l}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const x=(await ut()).find(r=>r.id===n);x!=null&&x.leader_id&&await ja(x.leader_id,null,"religion_subgroup_head"),await Yn(n),N("ลบกลุ่มแล้ว","success"),sa(await ut())}catch(o){N("ลบไม่สำเร็จ: "+o.message,"error")}}})}}function ln(e,s,t){const n=!!e,l=document.createElement("div");l.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const o=[...s].sort((r,d)=>(r.full_name??"").localeCompare(d.full_name??"","th"));l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${n?"แก้ไขกลุ่ม":"เพิ่มกลุ่มใหม่"}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${te((e==null?void 0:e.name)??"")}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
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
    </div>`,document.body.appendChild(l);const x=Fa({wrap:l.querySelector("#rg-leader-wrap"),teachers:o,value:(e==null?void 0:e.leader_id)??null});l.querySelector("#rg-modal-close").onclick=()=>l.remove(),l.querySelector("#rg-cancel").onclick=()=>l.remove(),l.querySelector("#rg-save").onclick=async()=>{const r=l.querySelector("#rg-name").value.trim();if(!r){N("กรุณาระบุชื่อกลุ่ม","error");return}const d=x.getValue(),i=(e==null?void 0:e.leader_id)??null,a=l.querySelector("#rg-save");a.disabled=!0,a.textContent="กำลังบันทึก...";try{n?(await Kn(e.id,{name:r,leader_id:d}),i&&i!==+d&&await ja(i,null,"religion_subgroup_head")):await Jn({name:r,leader_id:d}),d&&await ja(+d,"religion_subgroup_head"),N(n?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),l.remove(),t()}catch(m){N("บันทึกไม่สำเร็จ: "+m.message,"error"),a.disabled=!1,a.textContent="บันทึก"}}}async function Oi(e){Le("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",$e(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let s=[],t=[];try{[s,t]=await Promise.all([ut(),Re()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}const n=s.find(x=>x.leader_id===e.id),l=document.getElementById("mrg-content");if(!n){l.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const o=Ri(t);await dn(n,o)}async function dn(e,s){const t=document.getElementById("mrg-content");let n=[];try{n=await Qn(e.id)}catch{N("โหลดสมาชิกไม่สำเร็จ","error");return}t.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${te(e.name)}</h3>
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
              ${o!=null&&o.image_url?`<img src="${o.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${te(((x=o==null?void 0:o.full_name)==null?void 0:x.charAt(0))??"?")}</div>`}
              <div>
                <span class="font-medium text-gray-800">${te((o==null?void 0:o.full_name)??"")}</span>
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
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${te(e.name)}"</h3>
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
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${te(e.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${s.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${s.length?`<ul class="divide-y divide-gray-50">
          ${s.map(n=>{var l;return`<li class="py-2.5 flex items-center gap-3">
            ${n.image_url?`<img src="${n.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${te(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
            <div>
              <span class="font-medium text-gray-800">${te(n.full_name??"")}</span>
              ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
            </div>
          </li>`}).join("")}
        </ul>`:'<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>'}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#mrg-summary-close").onclick=()=>t.remove()}async function cn(){Le("subject-group-requests"),document.getElementById("page-title").textContent="คำขอย้ายกลุ่มวิชา";const e=o=>o?new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—",s=o=>o==="sasana"?"🕌 ศาสนา":"📖 สามัญ",t={pending:{label:"🕐 รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธแล้ว",cls:"bg-red-100 text-red-600"}};$e(`
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
            <p class="font-semibold text-sm text-gray-800 truncate">${Pe(r.subject_name??"—")} <span class="text-xs text-gray-400 font-mono">${Pe(r.subject_code??"")}</span></p>
            <p class="text-xs text-gray-500 mt-0.5">${Pe(((i=r.students)==null?void 0:i.full_name)??"—")} · ${Pe(((a=r.students)==null?void 0:a.student_code)??"")} · ${Pe(r.class_level??"")}</p>
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
        <p class="text-xs text-gray-500 mt-1">${Pe(((l=e.students)==null?void 0:l.full_name)??"—")} ขอย้าย "${Pe(e.subject_name??"")}" ${e.current_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"} → ${e.requested_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"}</p>
      </div>
      <div class="flex-1 overflow-y-auto px-5 py-4">
        <p class="text-xs text-gray-500 mb-2">เลือกห้องในระดับชั้น <b>${Pe(e.class_level??"")}</b> ที่จะให้มีผลจริง (ค่าเริ่มต้นเลือกทุกห้องที่สอนวิชารหัสเดียวกันไว้ให้แล้ว ปรับได้อิสระ):</p>
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
        <span class="flex-1 text-sm text-gray-700">${Pe(r.class_name??"")}</span>
        <span class="text-[11px] text-gray-400">${r.student_count} คน · ${r.current_group==="sasana"?"🕌":"📖"}</span>
      </label>`).join("")}).catch(()=>{t.querySelector("#sgr-candidates").innerHTML='<p class="text-center text-red-400 text-sm py-4">โหลดรายชื่อห้องไม่สำเร็จ</p>'}),t.querySelector("#sgr-approve").addEventListener("click",async o=>{var r;const x=[...t.querySelectorAll(".sgr-candidate-cb:checked")].map(d=>Number(d.value));if(!x.length){N("เลือกอย่างน้อย 1 ห้อง","warning");return}if(confirm(`อนุมัติย้ายกลุ่มให้ ${x.length} ห้องที่เลือก?`)){o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await Do(e.id,x),N("อนุมัติแล้ว ✅","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+he(d),"error"),o.target.disabled=!1,o.target.textContent="อนุมัติที่เลือก"}}}),t.querySelector("#sgr-reject").addEventListener("click",async o=>{var r;if(!confirm("ปฏิเสธคำขอนี้?"))return;const x=t.querySelector("#sgr-comment").value.trim();o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await Ho(e.id,x),N("ปฏิเสธคำขอแล้ว","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+he(d),"error"),o.target.disabled=!1,o.target.textContent="ปฏิเสธ"}})}async function un(){Le("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",$e(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let e=[],s=[],t="manage",n="สามัญ",l="",o="",x="";const r=c=>{if(!c)return null;const g=c.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return g?g[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},d=c=>c?/^(PR|อก\.|อป\.)/i.test(c)?"ศาสนา":/^ปวช\./i.test(c)?"ปวช":"สามัญ":"สามัญ",i={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},a=c=>e.map(g=>g.class_name).filter(g=>g&&d(g)===c).sort((g,$)=>g.localeCompare($,"th")),m=c=>{const g=a(c),$=[...new Set(g.map(k=>r(k)).filter(Boolean))],y=i[c]||[];return[...new Set([...y,...$])].sort((k,S)=>k.localeCompare(S,"th"))},w=async()=>{const[c,g,$]=await Promise.all([na(),Et(),Zn()]);s=g,e=[...new Set(c.map(k=>k.class_name).filter(Boolean))].map(k=>$.find(A=>A.class_name===k)||{class_name:k,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},f=c=>s.find(g=>g.id===c),v=()=>{let c=document.getElementById("hc-print-roster-styles");c||(c=document.createElement("style"),c.id="hc-print-roster-styles",document.head.appendChild(c)),c.textContent=`
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
    `;const g=document.createElement("div");g.id="hc-print-roster-area",document.body.appendChild(g);const $=e.filter(S=>!(d(S.class_name)!==n||l&&r(S.class_name)!==l||o&&S.class_name!==o)).sort((S,A)=>S.class_name.localeCompare(A.class_name,"th"));let y="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";l&&(y+=` ระดับชั้น ${l}`),o&&(y+=` ห้อง ${o}`);const k=$.map((S,A)=>{const H=f(S.head_student_id),E=f(S.vice_head_student_id),T=H!=null&&H.image_url?`<img src="${H.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',R=E!=null&&E.image_url?`<img src="${E.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',F=H?`<b>${te(H.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${H.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',M=E?`<b>${te(E.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${E.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${A+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${te(S.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${T}
              <div>${F}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${R}
              <div>${M}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${te(S.notes??"")}</td>
        </tr>
      `}).join("");g.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${y}</div>
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
              ${k||'<tr><td colspan="5" style="text-align:center;padding:20px;color:#9ca3af;">ไม่พบข้อมูลห้องเรียน</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `,g.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},g.querySelector("#pr-btn-close-preview").onclick=()=>{g.remove()}},h=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,I=()=>{const c=x.trim().toLowerCase(),g=e.filter($=>!(d($.class_name)!==n||c&&!$.class_name.toLowerCase().includes(c))).sort(($,y)=>$.class_name.localeCompare(y.class_name,"th"));return g.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':g.map($=>{const y=f($.head_student_id),k=f($.vice_head_student_id),S=y!=null&&y.image_url?`<img src="${y.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',A=k!=null&&k.image_url?`<img src="${k.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${te($.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${n}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${S}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${y?te(y.full_name):"— ยังไม่ระบุ —"}</span>
                  ${y?`<span class="text-xs text-gray-400 font-mono">รหัส: ${y.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${A}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${k?te(k.full_name):"— ยังไม่ระบุ —"}</span>
                  ${k?`<span class="text-xs text-gray-400 font-mono">รหัส: ${k.student_code}</span>`:""}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${$.head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
              <p>เกียรติบัตรรอง: ${$.vice_head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${te($.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},u=()=>{const c=e.filter(g=>!(d(g.class_name)!==n||l&&r(g.class_name)!==l||o&&g.class_name!==o)).sort((g,$)=>g.class_name.localeCompare($.class_name,"th"));return c.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':c.map((g,$)=>{const y=f(g.head_student_id),k=f(g.vice_head_student_id),S=y!=null&&y.image_url?`<img src="${y.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',A=k!=null&&k.image_url?`<img src="${k.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${$+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${te(g.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${S}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${y?te(y.full_name):"— ยังไม่ระบุ —"}</p>
                ${y?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${y.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${A}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${k?te(k.full_name):"— ยังไม่ระบุ —"}</p>
                ${k?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${k.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${te(g.notes??"")}
          </td>
        </tr>
      `}).join("")},p=()=>{const c=e.filter(g=>!(d(g.class_name)!==n||l&&r(g.class_name)!==l||o&&g.class_name!==o)).length;t==="manage"?$e(`
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
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${te(x)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${c}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${I()}
          </div>
        </div>
      `):($e(`
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
              <span class="text-xs text-gray-400">พบข้อมูลหัวหน้า/รองหัวหน้าทั้งหมด <b class="text-gray-700">${c}</b> ห้อง</span>
              <div class="flex gap-2">
                <button id="btn-cert-settings"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shadow-sm">
                  ⚙️ ตั้งค่าแสดงเกียรติบัตร
                </button>
                <button id="btn-print-leaders-roster"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  ${c===0?"disabled":""}>
                  🖨️ พิมพ์ใบรายชื่อ (${c})
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
                  ${u()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `),j()),C()},j=()=>{const c=document.getElementById("pr-filter-level");if(!c)return;const g=m(n);c.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${g.map($=>`<option value="${$}" ${$===l?"selected":""}>${$}</option>`).join("")}
    `,_()},_=()=>{const c=document.getElementById("pr-filter-class");if(!c)return;const $=a(n).filter(y=>l?r(y)===l:!0);c.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${$.length} ห้อง) --</option>
      ${$.map(y=>`<option value="${y}" ${y===o?"selected":""}>ห้อง ${y}</option>`).join("")}
    `},C=()=>{var c,g,$,y,k,S,A,H,E;(c=document.getElementById("tab-manage"))==null||c.addEventListener("click",()=>{t="manage",p()}),(g=document.getElementById("tab-print"))==null||g.addEventListener("click",()=>{t="print",p()}),($=document.getElementById("hc-filter-category"))==null||$.addEventListener("change",T=>{n=T.target.value,p()}),(y=document.getElementById("hc-search-classes"))==null||y.addEventListener("input",T=>{x=T.target.value;const R=document.getElementById("hc-cards-grid");R&&(R.innerHTML=I()),q()}),q(),(k=document.getElementById("pr-filter-category"))==null||k.addEventListener("change",T=>{n=T.target.value,l="",o="",j(),L()}),(S=document.getElementById("pr-filter-level"))==null||S.addEventListener("change",T=>{l=T.target.value,o="",_(),L()}),(A=document.getElementById("pr-filter-class"))==null||A.addEventListener("change",T=>{o=T.target.value,L()}),(H=document.getElementById("btn-print-leaders-roster"))==null||H.addEventListener("click",v),(E=document.getElementById("btn-cert-settings"))==null||E.addEventListener("click",B)},L=()=>{const c=document.getElementById("pr-table-body");c&&(c.innerHTML=u());const g=e.filter(y=>!(d(y.class_name)!==n||l&&r(y.class_name)!==l||o&&y.class_name!==o)).length,$=document.getElementById("btn-print-leaders-roster");$&&($.disabled=g===0,$.textContent=`🖨️ พิมพ์ใบรายชื่อ (${g})`)},q=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.room,$=e.find(y=>y.class_name===g);$&&b($)})})},B=()=>{const c=document.createElement("div");c.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const g=e.some(A=>A.show_cert);c.innerHTML=`
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
            <input type="checkbox" id="csm-global-toggle" class="sr-only peer" ${g?"checked":""}>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex justify-end shrink-0">
          <button id="csm-btn-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">เสร็จสิ้น</button>
        </div>
      </div>
    `,document.body.appendChild(c);const $=c.querySelector("#csm-global-toggle"),y=c.querySelector("#csm-status-text"),k=A=>{y.textContent=A?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};k(g),$.addEventListener("change",async()=>{const A=$.checked;$.disabled=!0,y.textContent="กำลังบันทึก...";try{await ro(A),e.forEach(H=>{H.show_cert=A}),k(A),N(A?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(H){N("บันทึกผิดพลาด: "+H.message,"error"),$.checked=!A,k(!A)}finally{$.disabled=!1}});const S=()=>c.remove();c.querySelector("#csm-modal-close").onclick=S,c.querySelector("#csm-btn-close").onclick=S},b=c=>{const g=document.createElement("div");g.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let $=f(c.head_student_id),y=f(c.vice_head_student_id);g.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขหัวหน้าและรองหัวหน้าห้อง</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">ห้องเรียน ${c.class_name}</p>
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
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${($==null?void 0:$.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${$?`
                ${$.image_url?`<img src="${$.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${te($.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${$.student_code} · ห้อง ${$.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Head Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-head-cert-in" placeholder="https://..." value="${c.head_cert_url??""}"
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
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(y==null?void 0:y.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${y?`
                ${y.image_url?`<img src="${y.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${te(y.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${y.student_code} · ห้อง ${y.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Vice Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-vice-cert-in" placeholder="https://..." value="${c.vice_head_cert_url??""}"
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
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">${c.notes??""}</textarea>
            </div>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end shrink-0">
          <button id="ld-btn-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
          <button id="ld-btn-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">บันทึกข้อมูล</button>
        </div>
      </div>
    `,document.body.appendChild(g);let k=c.head_student_id,S=c.vice_head_student_id;const A=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},H=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},E=M=>{const U=document.getElementById("ld-head-card");if(M){k=M.id;const z=M.image_url?`<img src="${M.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';U.innerHTML=`
          ${z}
          <div>
            <p class="font-bold text-gray-800">${te(M.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${M.student_code} · ห้อง ${M.main_room||"—"}</p>
          </div>
        `}else k=null,U.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},T=M=>{const U=document.getElementById("ld-vice-card");if(M){S=M.id;const z=M.image_url?`<img src="${M.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';U.innerHTML=`
          ${z}
          <div>
            <p class="font-bold text-gray-800">${te(M.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${M.student_code} · ห้อง ${M.main_room||"—"}</p>
          </div>
        `}else S=null,U.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async M=>{const U=M.target.value.trim();if(U.length===5){A();const z=await ns(U).catch(()=>null);E(z)}else U.length===0&&(k=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async M=>{const U=M.target.value.trim();if(U.length===5){H();const z=await ns(U).catch(()=>null);T(z)}else U.length===0&&(S=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const R=async(M,U)=>{const z=M.files[0];if(z){U.disabled=!0,U.value="กำลังอัปโหลดไฟล์...";try{const O=z.name.split(".").pop(),W=`certificates/${c.id}/${M.id}-${Date.now()}.${O}`;let Y=z;z.type.startsWith("image/")&&(Y=await ol(z,{maxWidth:1600,quality:.88}));const{error:D}=await ie.storage.from("system-assets").upload(W,Y,{upsert:!0,contentType:z.type});if(D)throw D;const{data:V}=ie.storage.from("system-assets").getPublicUrl(W);U.value=V.publicUrl}catch(O){N("อัปโหลดล้มเหลว: "+O.message,"error"),U.value=""}finally{U.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const F=()=>g.remove();document.getElementById("ld-modal-close").onclick=F,document.getElementById("ld-btn-cancel").onclick=F,document.getElementById("ld-btn-save").onclick=async()=>{const M=document.getElementById("ld-btn-save");M.disabled=!0,M.textContent="กำลังบันทึก...";const U=document.getElementById("ld-head-cert-in").value.trim(),z=document.getElementById("ld-vice-cert-in").value.trim(),O=document.getElementById("ld-notes-in").value.trim();try{await po(c.class_name,k,S,U,z,O),c.head_student_id=k,c.vice_head_student_id=S,c.head_cert_url=U,c.vice_head_cert_url=z,c.notes=O,N("บันทึกข้อมูลเรียบร้อยแล้ว","success"),F(),p()}catch(W){N("เกิดข้อผิดพลาด: "+W.message,"error"),M.disabled=!1,M.textContent="บันทึกข้อมูล"}}};await w(),p()}const pc=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:Rr,renderAnnouncements:Yr,renderAutoscaleHistory:Kr,renderClasses:Ja,renderClassroomLeaders:un,renderClassroomsAdmin:Pr,renderCouncilRepNominationSummary:Zr,renderCurriculum:_t,renderDepartments:Tr,renderDeptTable:pa,renderDonations:Xr,renderFeedbackAdmin:en,renderHolidays:qr,renderHomeroom:jr,renderHouseColors:Qr,renderImport:Ar,renderLifeSkillAdmin:Nr,renderMyReligionGroup:Oi,renderOverview:Oa,renderPayments:Mr,renderPeriods:ma,renderPrayerAdmin:Hr,renderReadingAdmin:Dr,renderRegisteredTeachers:ta,renderReligionGroups:on,renderRolePermissions:Jr,renderScoreColConfig:Br,renderSettings:Qa,renderStudents:Ir,renderSubjectGroupRequests:cn,renderSubjectTable:Za,renderSubjects:St,renderSupervisorAnnouncements:Li,renderTeacherTable:Dt,renderTeachers:Cr,renderUsageStats:Or,renderWorkCalendar:nn,renderWorkCalendarView:Hi},Symbol.toStringTag,{value:"Module"}));export{Zr as A,un as B,cn as C,en as D,Xr as E,wr as F,it as G,dt as H,vr as I,Id as J,We as K,wd as L,Qr as M,Jr as N,nn as O,Aa as P,Kr as Q,Yr as R,pc as S,on as a,Pr as b,Or as c,Rr as d,Ar as e,Qa as f,Hr as g,Dr as h,Nr as i,Mr as j,qr as k,ta as l,Br as m,jr as n,ma as o,_t as p,Tr as q,St as r,Ir as s,Ja as t,Cr as u,bd as v,Oa as w,Dt as x,Za as y,pa as z};
