const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-Bf4Tf4Cp.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/admin-subject-management-CaV5l0Cv.js","assets/ui-Dw34xP85.js","assets/ai-prompt-gate-D6R7FVed.js","assets/admin-schedule-management-CY8Fjl_P.js","assets/teacher-views-classes-Dfj6NaFe.js","assets/browser-JP79f-a9.js","assets/sync-DqwcQWV1.js","assets/regrade-api-CLR_bWyN.js","assets/pp5-doc-CXhD6zs9.js","assets/score-display-CQ4dUIPx.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-CcIxYoIw.js","assets/storage-CuUjCgvI.js","assets/teacher-views-grades-DEPKarZO.js","assets/score-qr-scanner-DlvhhgkY.js","assets/teacher-views-attendance-BcU-JXax.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/admin-schedule-import-C7BHs1Li.js","assets/tutorial-DqRRkJk5.js","assets/teacher-views-donor-chat-Ccw2OW67.js","assets/teacher-B2ZUQRZE.js","assets/regrade-notifications--64rJp2Z.js","assets/promptpay-CIuxvxIA.js","assets/theme-qDnPEUQn.js","assets/academic-term-switcher-BEH7jaVk.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CvrEZx9U.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/sports-portals.js_v_10.22-Dz4YR1a0.js","assets/sports-awards-admin-6oCPrlSb.js","assets/terangganu-api-C1IjZK4l.js","assets/teacher-views-certificates-Ct7phr74.js","assets/certificate-engine-C9CSnChU.js","assets/certificate-editor-Bnyi9SE_.js","assets/student-views-Wi1nWdWa.js","assets/student-api-DXsWQ_3V.js","assets/quiz-api-BIDUVPR5.js"])))=>i.map(i=>d[i]);
import{a as N,g as fe,_ as Se,d as Xa,i as ln,s as Ts,b as _t,j as Oa,k as js,l as Pa}from"./ui-Dw34xP85.js";import{getExecClassOverview as dn,getDepartments as nt,getSystemConfig as Me,getTeachers as He,getLeavePermissionDashboard as cn,getPendingSubjectGroupRequests as Bs,getAllAppFeedback as qs,getAllPaymentRequests as Ze,deleteTeacher as un,getMasterSubjects as aa,deleteSubject as pn,deleteDepartment as mn,deletePeriod as xn,updateTeacher as gn,createTeacher as bn,updateDepartment as yn,createDepartment as fn,upsertPeriod as hn,upsertHoliday as vn,deleteHoliday as wn,getPeriods as _n,getCurriculumStandards as $n,updateCurriculumStandard as kn,createCurriculumStandard as Sn,importCurriculumStandards as En,deleteCurriculumStandard as Ln,getClasses as sa,createSubject as Cn,updateSystemConfig as Ee,deleteClass as As,getAcademicTerms as ra,getUniqueRooms as In,getUniqueReligionRooms as Ms,deleteHomeroomTeacher as Tn,getHomeroomTeachers as zt,getStudents as St,deleteStudent as jn,updateStudent as Bn,getClassrooms as es,getScoreColumnConfig as qn,upsertScoreColumnConfig as An,getReligionGroups as ct,getSchoolHolidaysFull as Mn,upsertHomeroomTeachersBatch as Nn,updateClassroom as Dn,createClassroom as Hn,getLifeSkillColumns as Rn,getReadingScoreColumns as On,getHouseGroups as Pn,updateTeacherPosition as Ia,deleteReligionGroup as zn,updateReligionGroup as Fn,createReligionGroup as Un,getReligionGroupMembers as Vn,getClassroomLeaders as Gn,deleteClassroom as Wn,fillLifeSkillScoresToClassScores as Yn,fillPrayerScoresToReligionClassScores as Kn,assignStudentsHouseColor as ts,setReligionGroupMembers as Jn,getAllReadingScores as Qn,deleteReadingScoreColumn as Zn,updateAllClassroomCertsToggle as Xn,getAllLifeSkillScores as eo,deleteLifeSkillColumn as to,updateReadingScoreColumn as ao,createReadingScoreColumn as so,getStudentsByReligionRoom as ro,getPrayerRecordsByRoom as no,getStudentByCode as as,updateClassroomLeaders as oo,updateLifeSkillColumn as lo,createLifeSkillColumn as io,autoEnrollStudentsByRoom as co,getTeachersWithPositions as uo,previewNewSemester as po,purgeTermSourceDataBatch as mo,startNewSemester as xo,getScheduleTeacherIds as go,mergeTeacherAccounts as bo,unlinkTeacherAccount as yo,getStats as ss,getAllCouncilRepNominations as fo,getRolePermissions as ho,saveRolePermission as vo,getAllAnnouncements as Ns,getUsageStats as wo,reviewPaymentRequest as Rt,approveTeacherQuota as xa,getAllSubjectGroupRequests as _o,setFeedbackRead as rs,setFeedbackCategory as $o,deleteAppFeedback as ko,advisorResetStudentPassword as So,markStudentPasswordResetNotice as Eo,setFeedbackStatusReply as ns,updateAnnouncement as ga,createAnnouncement as ba,getAnnouncementCommentsBulk as Lo,deleteAnnouncement as Co,getPaymentSlipViewUrl as Io,getPrayerMonitoringData as To,getLifeSkillMonitoringData as jo,getReadingMonitoringData as Bo,getCandidateClassesForGroupRequest as qo,approveSubjectGroupRequest as Ao,rejectSubjectGroupRequest as Mo,notifyFeedbackReply as No,getAnnouncementComments as Do,deleteAnnouncementComment as Ho,assignHomeroomTeacher as Ds,savePrayerCellAdmin as Ro}from"./api-Bf4Tf4Cp.js";import{r as Oo}from"./leave-monitor.js_v_10.18-BV4BodaP.js";import{b as Po,A as zo,o as Fo,c as Hs,a as We,d as Ta,r as Rs}from"./academic-term-switcher-BEH7jaVk.js";import{s as ie}from"./supabase-BV-W2lsh.js";import{DEFAULT_SUBJECT_SYNC_COLUMNS as ya,DEFAULT_SUBJECT_SYNC_KEY_FIELD as os,DEFAULT_SUBJECT_SYNC_TAB as fa,DEFAULT_SUBJECT_SYNC_SHEET_ID as Uo,SUBJECT_SYNC_COLUMNS as ls,syncSubjectCatalog as Vo,COPY_TEMPLATE_CONFIG as Go,syncStudentsFromSheetNow as Wo}from"./sync-DqwcQWV1.js";import{o as Os}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as ds,_dateInputValue as Ps,_readingGrade as zs,READING_GRADES as ft,_htmlEsc as Oe,parseSubjectVisuals as Yo,SUBJECT_VISUAL_PRESETS as is}from"./teacher-views-utils-CcIxYoIw.js";import{r as Ko,a as Jo,b as Qo,c as Fs,d as Zo}from"./teacher-views-classes-Dfj6NaFe.js";import{renderCourseForm as Xo}from"./teacher-views-BeOZLsOo.js";import"./browser-JP79f-a9.js";import{uploadShirtDesignHtml as el,uploadShirtDesignColorImage as tl,uploadTeacherPhoto as al,uploadDeptAsset as cs,uploadAnnouncementImage as Us,compressImage as sl,uploadStickerPng as us,uploadSystemAsset as rl}from"./storage-CuUjCgvI.js";import{c as Vs}from"./ai-prompt-gate-D6R7FVed.js";import"./teacher-views-grades-DEPKarZO.js";import{n as ps,d as nl,s as ol,a as ll,W as dl}from"./workload-scheduler-C9WpzjbH.js";import{i as il,a as cl,p as ul,b as pl}from"./import-B9koCv_2.js";import{a as Gs}from"./theme-qDnPEUQn.js";import{f as ml}from"./leave-time-CrS9gT63.js";import{b as xl}from"./anti-pull-refresh-BGrI1pMY.js";import{o as gl}from"./azizgames-modal-CZNvwg6f.js";import{r as bl}from"./sports-awards-admin-6oCPrlSb.js";import{getEffectiveUser as Ws,getEffectiveProfileId as Ys}from"./impersonation-0xVfgYVY.js";const yl=["ci_micro","ci_small","ci_medium"],fl={ci_micro:1,ci_small:2,ci_medium:3},hl={ci_micro:"Micro",ci_small:"Small",ci_medium:"Medium"},vl=7*60*60*1e3,wl=/^\d{4}-\d{2}-\d{2}$/,ms=/^(?:([01]\d|2[0-3]):([0-5]\d)|24:00)$/,Gt=e=>yl.includes(e),xs=e=>wl.test(String(e??""))&&!Number.isNaN(Date.parse(`${e}T00:00:00Z`))&&new Date(`${e}T00:00:00Z`).toISOString().slice(0,10)===e,Wt=e=>e==="24:00"?1440:Number(e.slice(0,2))*60+Number(e.slice(3)),Ks=e=>new Date(`${e}T00:00:00Z`),Js=e=>e.toISOString().slice(0,10),_l=(e,s)=>{const t=Ks(e);return t.setUTCDate(t.getUTCDate()+s),Js(t)},gs=e=>Ks(e).getUTCDay(),Mt=e=>hl[e]??e,Yt=e=>fl[e]??0;function $l(e){var t;if(!e||e.schemaVersion!==1)return e;const s=[];for(const n of Array.isArray(e.periods)?e.periods:[])for(let l=0;l<7;l+=1){const o=(t=n.days)==null?void 0:t[l];o!=null&&o.enabled&&s.push({id:`legacy-${s.length+1}`,startDate:n.startDate,endDate:n.endDate,days:[l],start:o.start,end:o.end,targetTier:"ci_medium",label:"ช่วงเดิมจากตาราง Medium"})}return{schemaVersion:2,enabled:!!e.enabled,timezone:"Asia/Bangkok",defaultTier:"ci_micro",guardrail:e.guardrail,rules:s}}function kl(e){const s=$l(e);return!s||typeof s!="object"||s.schemaVersion!==2?s:{schemaVersion:2,enabled:!!s.enabled,timezone:s.timezone||"Asia/Bangkok",defaultTier:Gt(s.defaultTier)?s.defaultTier:"ci_micro",guardrail:s.guardrail,rules:(Array.isArray(s.rules)?s.rules:[]).map((t,n)=>({id:t.id||`rule-${n+1}`,startDate:t.startDate,endDate:t.endDate,days:[...new Set((Array.isArray(t.days)?t.days:[]).map(Number))],start:t.start,end:t.end,targetTier:Gt(t.targetTier)?t.targetTier:"ci_micro",label:String(t.label??"")}))}}function Xe(e){const s=kl(e);if(!s||s.schemaVersion!==2||typeof s.enabled!="boolean"||!Array.isArray(s.rules))throw new Error("รูปแบบตารางเวลาไม่ถูกต้อง");if(!Gt(s.defaultTier))throw new Error("ระดับเครื่องเริ่มต้นไม่ถูกต้อง");if(!["Asia/Bangkok"].includes(s.timezone))throw new Error("โซนเวลาต้องเป็น Asia/Bangkok");if(s.rules.length>200)throw new Error("เพิ่มช่วงเวลาได้ไม่เกิน 200 ช่วง");for(const t of s.rules){if(!xs(t.startDate)||!xs(t.endDate)||t.startDate>t.endDate)throw new Error("กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง");if(!Array.isArray(t.days)||!t.days.length||t.days.some(n=>!Number.isInteger(n)||n<0||n>6))throw new Error("กรุณาเลือกวันอย่างน้อยหนึ่งวัน");if(!ms.test(t.start)||!ms.test(t.end)||Wt(t.start)===Wt(t.end))throw new Error("เวลาเริ่มและเวลาสิ้นสุดต้องถูกต้องและไม่เท่ากัน");if(!Gt(t.targetTier))throw new Error("ระดับเครื่องในช่วงเวลาไม่ถูกต้อง")}if(s.enabled&&!s.rules.length)throw new Error("กรุณากำหนดอย่างน้อยหนึ่งช่วงเวลาก่อนเปิดใช้งาน");return s}function Sl(e,s){const t=gs(s),n=_l(s,-1),l=gs(n),o=[];for(const p of e.rules){const r=Wt(p.start),d=Wt(p.end);if(r<d){s>=p.startDate&&s<=p.endDate&&p.days.includes(t)&&o.push({start:r,end:d,targetTier:p.targetTier,id:p.id});continue}s>=p.startDate&&s<=p.endDate&&p.days.includes(t)&&o.push({start:r,end:1440,targetTier:p.targetTier,id:p.id}),n>=p.startDate&&n<=p.endDate&&p.days.includes(l)&&o.push({start:0,end:d,targetTier:p.targetTier,id:p.id})}return o.filter(p=>p.end>p.start)}function za(e,s){const t=Xe(e),n=new Set([0,1440]),l=Sl(t,s);for(const r of l)n.add(r.start),n.add(r.end);const o=[...n].sort((r,d)=>r-d),p=[];for(let r=0;r<o.length-1;r+=1){const d=o[r],u=o[r+1],a=d+(u-d)/2,h=l.filter(v=>a>=v.start&&a<v.end).reduce((v,w)=>Yt(w.targetTier)>Yt(v)?w.targetTier:v,t.defaultTier),f=p[p.length-1];(f==null?void 0:f.targetTier)===h&&f.end===d?f.end=u:p.push({start:d,end:u,targetTier:h})}return p}function El(e,s=new Date){var p;const t=Xe(e);if(!t.enabled)return null;const n=new Date(s.getTime()+vl),l=Js(n),o=n.getUTCHours()*60+n.getUTCMinutes();return((p=za(t,l).find(r=>o>=r.start&&o<r.end))==null?void 0:p.targetTier)??t.defaultTier}const Ll=()=>({schemaVersion:2,enabled:!1,timezone:"Asia/Bangkok",defaultTier:"ci_micro",rules:[]}),Ot={minimumMediumHoldMinutes:60,minimumSmallHoldMinutes:30,healthyStreakRequired:3,recoveryLockMinutes:60};function bs(e={}){const s=(t,n,l,o)=>{const p=Number(t);return Number.isFinite(p)?Math.max(l,Math.min(o,p)):n};return{minimumMediumHoldMinutes:s(e.minimumMediumHoldMinutes,Ot.minimumMediumHoldMinutes,0,24*60),minimumSmallHoldMinutes:s(e.minimumSmallHoldMinutes,Ot.minimumSmallHoldMinutes,0,24*60),healthyStreakRequired:Math.round(s(e.healthyStreakRequired,Ot.healthyStreakRequired,1,12)),recoveryLockMinutes:s(e.recoveryLockMinutes,Ot.recoveryLockMinutes,0,24*60)}}const na={ci_micro:.01344,ci_small:.0206,ci_medium:.0822},Qs=(e,s)=>{const t=new Date(e.getTime());return t.setUTCDate(t.getUTCDate()+s),t},Zs=e=>e.toISOString().slice(0,10);function Xs(){return Object.fromEntries(Object.keys(na).map(e=>[e,0]))}function Cl(e,s){const t=Xs();for(const o of za(e,Zs(s)))t[o.targetTier]+=o.end-o.start;const n=Object.fromEntries(Object.entries(t).map(([o,p])=>[o,p/60])),l=Object.entries(n).reduce((o,[p,r])=>o+r*na[p],0);return{...n,tierHours:n,tierMinutes:t,usd:l,mediumHours:n.ci_medium,smallHours:n.ci_small,microHours:n.ci_micro}}function ha(e,s,t){const n={usd:0,days:t,tierHours:Xs()};for(let l=0;l<t;l+=1){const o=Cl(e,Qs(s,l));n.usd+=o.usd;for(const p of Object.keys(n.tierHours))n.tierHours[p]+=o.tierHours[p]}return{...n,mediumHours:n.tierHours.ci_medium,smallHours:n.tierHours.ci_small,microHours:n.tierHours.ci_micro}}function Il(e,s){const t=Xe(e),n=new Date(`${s}T00:00:00Z`);if(Number.isNaN(n.getTime())||Zs(n)!==s)throw new Error("วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง");const l=Qs(n,-((n.getUTCDay()+6)%7)),o=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1)),p=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0)).getUTCDate(),r={day:ha(t,n,1),week:ha(t,l,7),month:ha(t,o,p)};return r.defaultTier=t.defaultTier,r.defaultTierLabel=Mt(t.defaultTier),r.tierOrder=Object.keys(na).sort((d,u)=>Yt(d)-Yt(u)),r}const er=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],Ne=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),tr=[["ci_micro","Micro"],["ci_small","Small"],["ci_medium","Medium"]],ar={ci_micro:"border-slate-300 bg-slate-50 text-slate-700",ci_small:"border-emerald-300 bg-emerald-50 text-emerald-800",ci_medium:"border-rose-300 bg-rose-50 text-rose-800"},Tl=er,va=[{key:"prayer",label:"🙏 ละหมาด",description:"ควบคุมช่วง polling และจอแสดงผลการเช็คชื่อละหมาด",features:["prayer_monitor"]},{key:"leave",label:"🚪 ออกนอกห้องเรียน",description:"ควบคุมจอติดตามนักเรียนออกนอกห้องเรียน",features:["leave_monitor"]},{key:"sports",label:"🏅 กีฬาสี",description:"ควบคุมจอสด scoreboard และคิว live ของกีฬาสี",features:["azizgames","azfutsal"]}],Kt=()=>new Date(Date.now()+7*36e5).toISOString().slice(0,10),ja=e=>`border rounded-lg px-3 py-1.5 text-xs transition ${e?"bg-indigo-700 border-indigo-700 text-white":"bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`,sr=e=>tr.map(([s,t])=>`<option value="${s}" ${e===s?"selected":""}>${t}</option>`).join(""),ys=()=>({id:`rule-${Date.now()}-${Math.random().toString(16).slice(2)}`,startDate:Kt(),endDate:Kt(),days:[1,2,3,4,5],start:"07:45",end:"16:30",targetTier:"ci_medium",label:"ช่วงใช้งานหลัก"}),jl=(e,s)=>{const t=dl[e],n=s.features[e],l=ll(e,new Date,s),o=l.nextTransitionAt?new Date(l.nextTransitionAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"}):"—";return`<section class="border rounded-2xl p-4" data-workload-feature="${e}">
    <div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-bold">${t.label}</h3><p class="text-xs text-gray-500">${t.description}</p></div><div class="text-right text-xs"><div class="font-bold">${l.status}</div><div class="text-gray-500">เปลี่ยนถัดไป: ${Ne(o)}</div></div></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Mode<select name="mode" class="block border rounded-lg p-2 w-full mt-1"><option ${n.mode==="AUTO"?"selected":""}>AUTO</option><option ${n.mode==="ON"?"selected":""}>ON</option><option ${n.mode==="OFF"?"selected":""}>OFF</option></select></label>
      ${t.dateRange?`<label class="text-sm">วันที่เริ่ม<input name="dateFrom" type="date" value="${Ne(n.dateFrom||"")}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input name="dateTo" type="date" value="${Ne(n.dateTo||"")}" class="block border rounded-lg p-2 w-full mt-1"></label>`:"<span></span><span></span>"}
      <div class="grid grid-cols-2 gap-2"><label class="text-sm">เริ่ม<input name="start" type="time" value="${Ne(n.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">สิ้นสุด<input name="end" type="time" value="${Ne(n.end)}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3"><label class="text-sm">Buffer ก่อน (นาที)<input name="bufferBefore" type="number" min="0" max="1440" value="${n.bufferBefore}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Buffer หลัง (นาที)<input name="bufferAfter" type="number" min="0" max="1440" value="${n.bufferAfter}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    <div class="flex flex-wrap gap-2 mt-3">${n.days.map((p,r)=>`<label class="inline-flex items-center gap-1 text-xs border rounded-lg px-2 py-1"><input type="checkbox" name="day-${r}" ${p?"checked":""}>${Tl[r]}</label>`).join("")}</div>
  </section>`},Bl=e=>{try{return`<div class="flex h-9 overflow-hidden rounded-lg border bg-gray-100">${za(e,Kt()).map(t=>{const n=Math.max(1,(t.end-t.start)/1440*100),l=`${String(Math.floor(t.start/60)).padStart(2,"0")}:${String(t.start%60).padStart(2,"0")}`,o=`${String(Math.floor(t.end/60)).padStart(2,"0")}:${String(t.end%60).padStart(2,"0")}`;return`<div class="${ar[t.targetTier]} border-r flex items-center justify-center text-[10px] font-bold overflow-hidden" style="width:${n}%" title="${Mt(t.targetTier)} ${l}–${o}">${n>8?`${Mt(t.targetTier)} ${l}–${o}`:""}</div>`}).join("")}</div>`}catch{return'<div class="rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">กรอกช่วงเวลาให้ครบเพื่อดูตัวอย่าง Timeline</div>'}},ql=(e,s)=>`<section class="bg-white border rounded-2xl p-4 shadow-sm" data-rule="${s}" data-rule-id="${Ne(e.id)}">
  <div class="flex flex-wrap gap-3 items-end justify-between">
    <div class="flex flex-wrap gap-3 items-end"><label class="text-sm">วันที่เริ่ม<input required type="date" name="startDate" value="${Ne(e.startDate)}" class="block border rounded-lg p-2 mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input required type="date" name="endDate" value="${Ne(e.endDate)}" class="block border rounded-lg p-2 mt-1"></label></div>
    <div class="flex gap-2"><button type="button" data-duplicate-rule class="border rounded-lg px-3 py-2 text-sm">ทำสำเนา</button><button type="button" data-remove-rule class="border rounded-lg px-3 py-2 text-sm text-red-700">ลบช่วงนี้</button></div>
  </div>
  <div class="mt-3 flex flex-wrap gap-2 items-center"><span class="text-sm font-medium mr-1">วันที่ใช้:</span>${er.map((t,n)=>`<button type="button" data-day-toggle="${n}" data-selected="${e.days.includes(n)}" class="${ja(e.days.includes(n))}">${t.slice(0,3)}</button>`).join("")}<button type="button" data-day-preset="weekdays" class="text-xs underline text-indigo-700 ml-2">จ–ศ</button><button type="button" data-day-preset="all" class="text-xs underline text-indigo-700">ทุกวัน</button></div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">เวลาเริ่ม<input required type="time" name="start" value="${Ne(e.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">เวลาสิ้นสุด<input required type="time" name="end" value="${Ne(e.end)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">ระดับเครื่อง<select name="targetTier" class="block border rounded-lg p-2 w-full mt-1">${sr(e.targetTier)}</select></label><label class="text-sm">หมายเหตุ<input name="label" value="${Ne(e.label)}" maxlength="80" placeholder="เช่น ช่วงเรียน / ช่วงกลางคืน" class="block border rounded-lg p-2 w-full mt-1"></label></div>
</section>`;async function Ba(){document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-white",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-indigo-200",d.dataset.nav!=="autoscale-settings")}),document.getElementById("page-title").textContent="ตั้งค่ากำลังเครื่องฐานข้อมูล";const e=document.getElementById("main-content");e.innerHTML='<p class="p-6">กำลังโหลดตารางเวลา...</p>';let s,t,n={},l=Kt(),o="overview";try{const{data:d,error:u}=await ie.from("system_config").select("key,value,updated_at").in("key",["autoscaleSchedule","autoscaleState","workloadSchedule"]);if(u)throw u;const a=d.find(v=>v.key==="autoscaleSchedule"),m=a!=null&&a.value?JSON.parse(a.value):Ll();s={...Xe(m),guardrail:bs(m.guardrail)};const h=d.find(v=>v.key==="autoscaleState");n=h?{...JSON.parse(h.value),updatedAt:h.updated_at}:{};const f=d.find(v=>v.key==="workloadSchedule");t=ps(f!=null&&f.value?JSON.parse(f.value):nl())}catch(d){e.innerHTML=`<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${Ne(d.message)}</p>`;return}const p=()=>{var d,u,a,m,h;return{schemaVersion:2,enabled:s.enabled,timezone:"Asia/Bangkok",defaultTier:((d=e.querySelector("[name=defaultTier]"))==null?void 0:d.value)||s.defaultTier,guardrail:{minimumMediumHoldMinutes:Number(((u=e.querySelector("[name=minimumMediumHoldMinutes]"))==null?void 0:u.value)||s.guardrail.minimumMediumHoldMinutes),minimumSmallHoldMinutes:Number(((a=e.querySelector("[name=minimumSmallHoldMinutes]"))==null?void 0:a.value)||s.guardrail.minimumSmallHoldMinutes),healthyStreakRequired:Number(((m=e.querySelector("[name=healthyStreakRequired]"))==null?void 0:m.value)||s.guardrail.healthyStreakRequired),recoveryLockMinutes:Number(((h=e.querySelector("[name=recoveryLockMinutes]"))==null?void 0:h.value)||s.guardrail.recoveryLockMinutes)},rules:[...e.querySelectorAll("[data-rule]")].map((f,v)=>({id:f.dataset.ruleId||`rule-${v+1}`,startDate:f.querySelector("[name=startDate]").value,endDate:f.querySelector("[name=endDate]").value,days:[...f.querySelectorAll('[data-day-toggle][data-selected="true"]')].map(w=>Number(w.dataset.dayToggle)),start:f.querySelector("[name=start]").value,end:f.querySelector("[name=end]").value,targetTier:f.querySelector("[name=targetTier]").value,label:f.querySelector("[name=label]").value}))}},r=()=>{let d=null;try{d=s.enabled?El(s):null}catch{}const u=d?Mt(d):s.enabled?"กรุณาตรวจตารางเวลา":"คงระดับเดิม",a=Number(n.scheduleSchemaVersion)>=2,m=tr.map(([w,$])=>`<span class="inline-flex items-center gap-2 border rounded-xl px-3 py-2 ${ar[w]}"><span class="font-bold">${$}</span><span>$${na[w].toFixed(5)}/ชม.</span></span>`).join("");e.innerHTML=`<div class="space-y-5 animate-fade">
      <div role="tablist" aria-label="กลุ่มการตั้งค่ากำลังเครื่อง" class="bg-white border rounded-2xl p-2 shadow-sm flex flex-wrap gap-2"><button type="button" role="tab" data-autoscale-tab="overview" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">📊 ภาพรวม</button><button type="button" role="tab" data-autoscale-tab="schedule" class="flex-1 min-w-[190px] rounded-xl px-4 py-3 text-sm font-bold transition">🗓️ ตารางปรับกำลังเครื่อง</button>${va.map(w=>`<button type="button" role="tab" data-autoscale-tab="${w.key}" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">${w.label}</button>`).join("")}</div>
      <div id="autoscale-panel-overview" data-autoscale-panel="overview" role="tabpanel" class="space-y-5"><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>${n.mode!=="schedule"||!a?'<p class="mt-3 text-red-700">backend ยังไม่พร้อมสำหรับตาราง Micro / Small / Medium — กรุณา deploy autoscale-tick รุ่นใหม่ แล้วกดรีเฟรชสถานะก่อนบันทึก</p>':""}<p class="text-sm text-gray-600 mt-2">ระบบจะเลือกเป้าหมายตามช่วงเวลาที่กำหนด: Micro → Small → Medium และจะลดระดับก็ต่อเมื่อ health/guardrail ผ่าน</p><p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับปัจจุบัน ไม่ใช่ปิดฐานข้อมูล</p><div class="mt-4 border rounded-xl p-4 ${s.enabled?"bg-green-50 border-green-300 text-green-900":"bg-gray-100 border-gray-300 text-gray-800"}"><p class="text-lg font-bold">สถานะตาราง: ${s.enabled?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"}</p><p class="text-sm mt-1">เป้าหมายตามเวลาตอนนี้: <strong>${u}</strong></p></div><p class="text-xs text-gray-500 mt-2">ระดับเครื่องที่ตรวจจาก Supabase: ${Ne(n.currentTier||"ยังไม่มีข้อมูล")} · ตรวจระดับจริงล่าสุด: ${n.currentTierObservedAt?Ne(new Date(n.currentTierObservedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"ยังไม่เคยตรวจ"}</p><p class="text-xs text-gray-500 mt-1">สถานะงาน: ${Ne(n.status||"—")} · คำสั่งที่รอยืนยัน: ${Ne(n.pendingTier?Mt(n.pendingTier):"ไม่มี")}</p>${n.lastError?`<p class="text-xs text-amber-700 mt-1">รายละเอียด: ${Ne(n.lastError)}</p>`:""}<div class="flex flex-wrap gap-3 mt-4"><button id="as-enable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-green-700 border-green-700 text-white":"bg-white border-green-700 text-green-800"}">เปิดใช้งาน${s.enabled?" ✓":""}</button><button id="as-disable" class="border rounded-xl px-4 py-2 ${s.enabled?"bg-white border-gray-300 text-gray-700":"bg-gray-700 border-gray-700 text-white"}">ปิดใช้งาน${s.enabled?"":" ✓"}</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div></div><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold">💰 ราคาอ้างอิง Compute</h2><div class="flex flex-wrap gap-2 mt-3">${m}</div><label class="block text-sm mt-4">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${l}" class="border rounded-lg p-2 mt-1"></label><div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div><p class="text-xs text-gray-500 mt-3">เป็นค่าประมาณตามตาราง ไม่ใช่ยอดบิลจริง และควรตรวจราคากับ Supabase ก่อนใช้งานจริง</p></div></div>
      <form id="as-form" data-autoscale-panel="schedule" role="tabpanel" class="space-y-4"><section class="border rounded-2xl p-4 bg-amber-50"><h3 class="font-bold">🛡️ Guardrail การลดระดับ</h3><p class="text-xs text-gray-600 mt-1">การเปลี่ยนขึ้นทำได้ในรอบตรวจถัดไป ส่วนการลดจะรอ health ปกติ, healthy streak และช่วง hold ที่กำหนด</p><div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Hold หลัง Medium (นาที)<input name="minimumMediumHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumMediumHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Hold หลัง Small (นาที)<input name="minimumSmallHoldMinutes" type="number" min="0" max="1440" value="${s.guardrail.minimumSmallHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Healthy streak (รอบ)<input name="healthyStreakRequired" type="number" min="1" max="12" value="${s.guardrail.healthyStreakRequired}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Recovery lock (นาที)<input name="recoveryLockMinutes" type="number" min="0" max="1440" value="${s.guardrail.recoveryLockMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label></div></section><section class="border rounded-2xl p-4 bg-white"><div class="flex flex-wrap justify-between gap-3 items-end"><div><h3 class="font-bold">ตารางช่วงเวลา</h3><p class="text-xs text-gray-500 mt-1">กำหนดวันซ้ำได้หลายวัน และกรอกข้ามวันได้ เช่น 22:00–02:00</p></div><label class="text-sm">ระดับพื้นฐานนอกช่วงเวลา<select name="defaultTier" class="border rounded-lg p-2 ml-2">${sr(s.defaultTier)}</select></label></div><div class="mt-4">${Bl(s)}</div></section><div id="as-rules" class="space-y-4">${s.rules.map(ql).join("")}</div><div class="flex flex-wrap gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงเวลา</button><button type="button" id="as-weekday-template" class="border bg-white rounded-xl px-4 py-2">สร้างตารางวันเรียนพื้นฐาน</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div><p class="text-xs text-gray-500">ระบบจะเลือก tier สูงสุดเมื่อช่วงเวลาซ้อนกัน และมีผลในรอบตรวจถัดไป ปกติทุก 5 นาที</p></form>
      ${va.map(w=>`<section id="autoscale-panel-${w.key}" data-autoscale-panel="${w.key}" role="tabpanel" class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">${w.label}</h2><p class="text-sm text-gray-600 mt-2">${w.description} · AUTO ใช้ตาราง, ON บังคับเปิด, OFF บังคับปิด</p><div class="space-y-4 mt-4">${w.features.map($=>jl($,t)).join("")}</div></section>`).join("")}
      <div data-autoscale-workload-actions class="hidden flex gap-3 bg-white border rounded-2xl p-4 shadow-sm"><button type="button" id="workload-save" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกการตั้งค่า Workload ทั้งหมด</button><button type="button" id="workload-refresh" class="border rounded-xl px-4 py-2">รีเฟรช Workload</button><p class="self-center text-xs text-gray-500">บันทึกครั้งเดียว ครอบคลุมทุกแท็บ</p></div>
    </div>`;const h=w=>{o=w,e.querySelectorAll("[data-autoscale-tab]").forEach(x=>{const i=x.dataset.autoscaleTab===o;x.setAttribute("aria-selected",String(i)),x.classList.toggle("bg-indigo-700",i),x.classList.toggle("text-white",i),x.classList.toggle("shadow-sm",i),x.classList.toggle("bg-gray-100",!i),x.classList.toggle("text-gray-700",!i)}),e.querySelectorAll("[data-autoscale-panel]").forEach(x=>x.classList.toggle("hidden",x.dataset.autoscalePanel!==o));const $=va.some(x=>x.key===o);e.querySelectorAll("[data-autoscale-workload-actions]").forEach(x=>x.classList.toggle("hidden",!$))};e.querySelectorAll("[data-autoscale-tab]").forEach(w=>{w.id=`autoscale-tab-${w.dataset.autoscaleTab}`,w.onclick=()=>h(w.dataset.autoscaleTab)}),h(o);const f=()=>{try{const w=Il({...p(),enabled:!1},l);e.querySelector("#as-cost-tags").innerHTML=[["day","รายวัน"],["week","รายสัปดาห์"],["month","รายเดือน"]].map(([$,x])=>{const i=w[$];return`<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${x} (${i.days} วัน)</span><strong>$${i.usd.toFixed(4)}</strong><span class="block text-xs">Micro ${i.microHours.toFixed(1)} ชม. · Small ${i.smallHours.toFixed(1)} ชม. · Medium ${i.mediumHours.toFixed(1)} ชม.</span></span>`}).join("")}catch{const w=e.querySelector("#as-cost-tags");w&&(w.textContent="กรุณากรอกวันที่ เวลา วัน และระดับเครื่องให้ครบเพื่อคำนวณ")}};e.querySelector("#as-cost-date").onchange=w=>{l=w.target.value,f()},e.querySelector("#as-form").addEventListener("input",f),f();const v=async w=>{try{const $=w===!1?{...s,enabled:!1}:{...p(),enabled:w===!0?!0:s.enabled},x=Xe($);if(!a||x.enabled&&n.mode!=="schedule")throw new Error("backend ยังไม่พร้อมสำหรับ schema ตารางใหม่ กรุณา deploy autoscale-tick แล้วกดรีเฟรชสถานะก่อน");e.querySelectorAll("button").forEach(j=>{j.disabled=!0});const{error:i}=await ie.from("system_config").upsert({key:"autoscaleSchedule",value:JSON.stringify(x),updated_at:new Date().toISOString()},{onConflict:"key"});if(i)throw i;s={...x,guardrail:bs(x.guardrail)},r(),N("บันทึกแล้ว มีผลในรอบตรวจถัดไป","success")}catch($){N(Ne($.message),"error"),e.querySelectorAll("button").forEach(x=>{x.disabled=!1})}};e.querySelector("#as-form").onsubmit=w=>{w.preventDefault(),v()},e.querySelector("#as-enable").onclick=()=>v(!0),e.querySelector("#as-disable").onclick=()=>v(!1),e.querySelector("#as-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Ba()},e.querySelector("#as-add").onclick=()=>{s=Xe({...p(),enabled:!1}),s.rules.push(ys()),r()},e.querySelector("#as-weekday-template").onclick=()=>{s=Xe({...p(),enabled:!1}),s.rules=[ys()],r()},e.querySelectorAll("[data-remove-rule]").forEach(w=>w.onclick=()=>{s=Xe({...p(),enabled:!1});const $=w.closest("[data-rule]");s.rules.splice(Number($.dataset.rule),1),r()}),e.querySelectorAll("[data-duplicate-rule]").forEach(w=>w.onclick=()=>{s=Xe({...p(),enabled:!1});const $=w.closest("[data-rule]"),x={...s.rules[Number($.dataset.rule)],id:`rule-${Date.now()}`,label:`${s.rules[Number($.dataset.rule)].label||"ช่วงเวลา"} สำเนา`};s.rules.splice(Number($.dataset.rule)+1,0,x),r()}),e.querySelectorAll("[data-day-toggle]").forEach(w=>w.onclick=()=>{const $=w.dataset.selected!=="true";w.dataset.selected=String($),w.className=ja($),f()}),e.querySelectorAll("[data-day-preset]").forEach(w=>w.onclick=()=>{const $=w.closest("[data-rule]"),x=w.dataset.dayPreset==="all"?[0,1,2,3,4,5,6]:[1,2,3,4,5];$.querySelectorAll("[data-day-toggle]").forEach(i=>{const j=x.includes(Number(i.dataset.dayToggle));i.dataset.selected=String(j),i.className=ja(j)}),f()}),e.querySelector("#workload-save").onclick=async()=>{try{e.querySelectorAll("button").forEach(w=>{w.disabled=!0}),t=ps({schemaVersion:1,timezone:"Asia/Bangkok",features:Object.fromEntries([...e.querySelectorAll("[data-workload-feature]")].map(w=>{var $,x;return[w.dataset.workloadFeature,{mode:w.querySelector("[name=mode]").value,dateFrom:(($=w.querySelector("[name=dateFrom]"))==null?void 0:$.value)||null,dateTo:((x=w.querySelector("[name=dateTo]"))==null?void 0:x.value)||null,start:w.querySelector("[name=start]").value,end:w.querySelector("[name=end]").value,bufferBefore:Number(w.querySelector("[name=bufferBefore]").value||0),bufferAfter:Number(w.querySelector("[name=bufferAfter]").value||0),days:[...w.querySelectorAll("input[type=checkbox][name^=day-]")].map(i=>i.checked)}]}))}),await ol(t),N("บันทึก Workload Control แล้ว","success"),r()}catch(w){N(Ne(w.message),"error"),e.querySelectorAll("button").forEach($=>{$.disabled=!1})}},e.querySelector("#workload-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&Ba()}};r()}const Al=1e3,Ml=250,Nl=6e4,rr="pp5-full-backup",nr=1,Dl="pp5-full-backup-state",mt="sessions",Hl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];class or{constructor(){this.state=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytes=0}update(s){this.bytes+=s.byteLength;let t=0;if(this.bufferLength){const n=Math.min(64-this.bufferLength,s.byteLength);this.buffer.set(s.subarray(0,n),this.bufferLength),this.bufferLength+=n,t+=n,this.bufferLength===64&&(this.process(this.buffer),this.bufferLength=0)}for(;t+64<=s.byteLength;)this.process(s.subarray(t,t+64)),t+=64;return t<s.byteLength&&(this.buffer.set(s.subarray(t),0),this.bufferLength=s.byteLength-t),this}process(s){const t=new Uint32Array(64);for(let m=0;m<16;m++){const h=m*4;t[m]=(s[h]<<24|s[h+1]<<16|s[h+2]<<8|s[h+3])>>>0}for(let m=16;m<64;m++){const h=t[m-15],f=t[m-2],v=(h>>>7|h<<25)^(h>>>18|h<<14)^h>>>3,w=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10;t[m]=t[m-16]+v+t[m-7]+w>>>0}let[n,l,o,p,r,d,u,a]=this.state;for(let m=0;m<64;m++){const h=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),f=r&d^~r&u,v=a+h+f+Hl[m]+t[m]>>>0,w=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),$=n&l^n&o^l&o,x=w+$>>>0;a=u,u=d,d=r,r=p+v>>>0,p=o,o=l,l=n,n=v+x>>>0}this.state[0]=this.state[0]+n>>>0,this.state[1]=this.state[1]+l>>>0,this.state[2]=this.state[2]+o>>>0,this.state[3]=this.state[3]+p>>>0,this.state[4]=this.state[4]+r>>>0,this.state[5]=this.state[5]+d>>>0,this.state[6]=this.state[6]+u>>>0,this.state[7]=this.state[7]+a>>>0}hex(){const s=this.bytes*8,t=this.bufferLength<56?56-this.bufferLength:120-this.bufferLength,n=new Uint8Array(t+8);n[0]=128;const l=Math.floor(s/4294967296),o=s>>>0;return n[n.length-8]=l>>>24&255,n[n.length-7]=l>>>16&255,n[n.length-6]=l>>>8&255,n[n.length-5]=l&255,n[n.length-4]=o>>>24&255,n[n.length-3]=o>>>16&255,n[n.length-2]=o>>>8&255,n[n.length-1]=o&255,this.update(n),[...this.state].map(p=>p.toString(16).padStart(8,"0")).join("")}}function Fa(e){return String(e??"").replace(/[^0-9A-Za-zก-๙._-]+/g,"-").replace(/^-+|-+$/g,"")||"pp5"}function Rl(){return lr("full")}function Ol(){return lr("term")}function lr(e){if(typeof window>"u"||typeof window.showSaveFilePicker!="function")return null;const s=`pp5-${e}-backup-${Fa(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;let t;try{t=window.showSaveFilePicker({suggestedName:s,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})}catch(l){t=Promise.reject(l)}const n=t.then(l=>({fileHandle:l}),l=>({error:l}));return{fileName:s,fileHandlePromise:n}}async function oa(e){const s=new or,t=e.stream().getReader();for(;;){const{value:n,done:l}=await t.read();if(l)break;n!=null&&n.byteLength&&s.update(n)}return s.hex()}function dr(e,s){const t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=s,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1500)}function Ua(){return new Promise((e,s)=>{if(typeof indexedDB>"u")return e(null);const t=indexedDB.open(Dl,1);t.onupgradeneeded=()=>t.result.createObjectStore(mt,{keyPath:"id"}),t.onsuccess=()=>e(t.result),t.onerror=()=>s(t.error??new Error("เปิดพื้นที่บันทึกจุดสำรองข้อมูลไม่สำเร็จ"))})}async function la(e="active"){const s=await Ua();return s?new Promise((t,n)=>{const l=s.transaction(mt,"readonly").objectStore(mt).get(e);l.onsuccess=()=>{s.close(),t(l.result??null)},l.onerror=()=>{s.close(),n(l.error)}}):null}async function et(e,s=e.id??"active"){const t=await Ua();return t?new Promise((n,l)=>{const o=t.transaction(mt,"readwrite").objectStore(mt).put({...e,id:s});o.onsuccess=()=>{t.close(),n(!0)},o.onerror=()=>{t.close(),l(o.error)}}):!1}async function da(e="active"){const s=await Ua();if(s)return new Promise((t,n)=>{const l=s.transaction(mt,"readwrite").objectStore(mt).delete(e);l.onsuccess=()=>{s.close(),t()},l.onerror=()=>{s.close(),n(l.error)}})}async function qa(e){if(!e)throw new Error("ไม่พบไฟล์สำรองเดิมสำหรับทำต่อ");const s={mode:"readwrite"};if(typeof e.queryPermission=="function"&&await e.queryPermission(s)!=="granted"&&(typeof e.requestPermission!="function"||await e.requestPermission(s)!=="granted"))throw new Error("ไม่ได้รับสิทธิ์เขียนไฟล์สำรองเดิม กรุณาอนุญาตการเข้าถึงไฟล์แล้วลองใหม่");try{await e.getFile()}catch(t){if((t==null?void 0:t.name)==="NotFoundError"){const n=new Error("ไม่พบไฟล์สำรองเดิมแล้ว กรุณาล้างงานสำรองค้างและเลือกตำแหน่งไฟล์ใหม่");throw n.code="BACKUP_FILE_MISSING",n}throw t}}async function Pl(e){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง");const s=new CompressionStream("gzip"),t=s.writable.getWriter();return await t.write(new TextEncoder().encode(e)),await t.close(),new Uint8Array(await new Response(s.readable).arrayBuffer())}async function Jt(e,s=0){let t=s;return{get offset(){return t},async write(n){const l=await Pl(n),o=await e.createWritable({keepExistingData:!0});try{await o.truncate(t),await o.seek(t),await o.write(l),await o.close(),t+=l.byteLength}catch(p){try{await o.abort()}catch{}throw p}},async close(){},async abort(){}}}async function it(e,s,t,{timeoutMs:n=Nl}={}){for(let o=1;o<=4;o+=1){const p=typeof AbortController<"u"?new AbortController:null,r=Date.now();let d,u;try{t==null||t(`กำลังติดต่อฐานข้อมูล: ${s} · ครั้งที่ ${o}/4`);const a=Promise.resolve().then(()=>e(p==null?void 0:p.signal));let m;return n>0&&(m=new Promise((h,f)=>{d=setTimeout(()=>{p==null||p.abort();const v=new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`);v.code="BACKUP_REQUEST_TIMEOUT",f(v)},n)})),u=setInterval(()=>{const h=Math.floor((Date.now()-r)/1e3);t==null||t(`กำลังรอฐานข้อมูลตอบกลับ: ${s} · ${h} วินาที · ครั้งที่ ${o}/4`)},1e4),await(m?Promise.race([a,m]):a)}catch(a){const m=p!=null&&p.signal.aborted?Object.assign(new Error(`รอฐานข้อมูลตอบกลับเกิน ${Math.round(n/1e3)} วินาที (${s})`),{code:"BACKUP_REQUEST_TIMEOUT"}):a;if(o>=4)throw m;t==null||t(`${(m==null?void 0:m.message)||`เชื่อมต่อ ${s} ไม่สำเร็จ`} · กำลังลองใหม่ครั้งที่ ${o}/3...`),await new Promise(h=>setTimeout(h,750*2**(o-1)))}finally{clearTimeout(d),clearInterval(u)}}}async function wa(){var t,n,l,o;const e=await la().catch(()=>null);if(!e)return null;const s=ir(e);return{fileName:e.fileName,phase:e.phase,tableIndex:e.tableIndex??0,tableCount:((t=e.catalog)==null?void 0:t.length)??0,tableName:((l=(n=e.catalog)==null?void 0:n[e.tableIndex])==null?void 0:l.table_name)??null,rowOffset:e.tableCount??e.tableOffset??0,storageIndex:e.storageIndex??0,storageCount:((o=e.storageObjects)==null?void 0:o.length)??0,progress:s}}async function zl(){await da()}function Qt(e,s){return`term:${Number(e)}:${Number(s)}`}async function fs(e,s){const t=await la(Qt(e,s)).catch(()=>null);return t!=null&&t.fileHandle?{fileName:t.fileName,academicYear:t.academicYear,semester:t.semester,counts:t.counts??{},completedRows:Object.values(t.counts??{}).reduce((n,l)=>n+Number(l||0),0)+Number(t.tableCount||0),totalRows:Object.values(t.expectedCounts??{}).reduce((n,l)=>n+Number(l||0),0)}:null}async function Fl(e,s){await da(Qt(e,s))}function ir(e,s={}){var w;const t=(e==null?void 0:e.catalog)??[],n=(e==null?void 0:e.counts)??{},l=s.phase??(e==null?void 0:e.phase)??"tables",o=s.tableIndex??(e==null?void 0:e.tableIndex)??0,p=s.tableCount??(e==null?void 0:e.tableCount)??0,r=s.storageIndex??(e==null?void 0:e.storageIndex)??0,d=s.storageCount??((w=e==null?void 0:e.storageObjects)==null?void 0:w.length)??0,u=t.map($=>Math.max(Number($.estimated_rows)||0,0)),a=u.reduce(($,x)=>$+x,0),m=u.slice(0,o).reduce(($,x,i)=>{var j;return $+(x||Number(n[(j=t[i])==null?void 0:j.table_name])||0)},0),h=u[o]||0,f=a>0?Math.min(1,(m+Math.min(p,h||p))/a):t.length>0?Math.min(1,(o+(p>0?.5:0))/t.length):0;return{percent:l==="tables"?Math.min(89,Math.round(f*90)):l==="storage"?Math.min(99,90+(d>0?Math.round(r/d*9):0)):l==="finalizing"?99:0,estimatedTotalRows:a,completedRows:m+p,currentTableRows:p,currentTableEstimate:h,tableIndex:o,tableCount:t.length,storageIndex:r,storageCount:d}}function Ul(e){const s=new Map(e.map(o=>[o.table_name,o])),t=new Map,n=[],l=o=>{var p;if(t.get(o)!==2&&t.get(o)!==1){t.set(o,1);for(const r of((p=s.get(o))==null?void 0:p.depends_on)??[])s.has(r)&&l(r);t.set(o,2),n.push(s.get(o))}};for(const o of e)l(o.table_name);return n.filter(Boolean)}async function cr(e,s=null){if(typeof CompressionStream>"u")throw new Error("เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง กรุณาใช้ Chrome, Edge หรือ Safari รุ่นปัจจุบัน");const t=new CompressionStream("gzip"),n=t.writable.getWriter();if(s||typeof window<"u"&&typeof window.showSaveFilePicker=="function"){const d=await(s??await window.showSaveFilePicker({suggestedName:e,types:[{description:"ไฟล์สำรอง ปพ.5",accept:{"application/gzip":[".jsonl.gz"]}}]})).createWritable(),[u,a]=t.readable.tee(),m=u.pipeTo(d),h=new or;let f=0;const v=(async()=>{const w=a.getReader();for(;;){const{value:$,done:x}=await w.read();if(x)break;$!=null&&$.byteLength&&(h.update($),f+=$.byteLength)}})();return{async write(w){await n.write(new TextEncoder().encode(w))},async close(){return await n.close(),await Promise.all([m,v]),{blob:null,sha256:h.hex(),byteSize:f,savedToDisk:!0}},async abort(){try{await n.abort()}catch{}try{await d.abort()}catch{}}}}const l=[],o=t.readable.getReader(),p=(async()=>{for(;;){const{value:r,done:d}=await o.read();if(d)break;r!=null&&r.byteLength&&l.push(r)}})();return{async write(r){await n.write(new TextEncoder().encode(r))},async close(){await n.close(),await p;const r=new Blob(l,{type:"application/gzip"});return{blob:r,sha256:await oa(r),byteSize:r.size,savedToDisk:!1}}}}async function _a(e,s=null){s==null||s("ส่งคำขอรายการตารางไปยังฐานข้อมูล");const{data:t,error:n}=await ie.rpc("admin_full_backup_catalog").abortSignal(e);if(n)throw n;const l=Array.isArray(t)?t:[];if(!l.length)throw new Error("ไม่พบรายการข้อมูลสำหรับสำรอง");s==null||s(`ได้รับรายการ ${l.length.toLocaleString()} ตารางแล้ว · กำลังจัดลำดับความสัมพันธ์`);const o=Ul(l);if(o.length!==l.length)throw new Error("จัดเตรียมรายการตารางสำรองไม่ครบ");return s==null||s("จัดลำดับตารางแล้ว · กำลังเตรียมไฟล์สำรอง"),o}async function Vl(e,s,t){const{data:n,error:l}=await ie.rpc("admin_full_backup_read_cursor",{p_table:e,p_cursor:s||null,p_limit:Al}).abortSignal(t);if(l)throw l;const o=n&&typeof n=="object"&&!Array.isArray(n)?n:{rows:Array.isArray(n)?n:[],next_cursor:null,has_more:!1};return{rows:Array.isArray(o.rows)?o.rows:[],nextCursor:o.next_cursor||null,hasMore:!!o.has_more}}function hs(e,s,t,n,l,o={}){if(!e)return;e(n,l,ir(s??{catalog:t,counts:{}},o))}async function Gl(e){const{data:s,error:t}=await ie.rpc("admin_full_backup_storage_catalog").abortSignal(e);if(t)throw t;return s??{buckets:[],objects:[]}}async function Wl(e){const s=await new Promise((t,n)=>{const l=new FileReader;l.onload=()=>t(l.result),l.onerror=()=>n(l.error??new Error("อ่านไฟล์ Storage ไม่สำเร็จ")),l.readAsDataURL(e)});return String(s).split(",",2)[1]??""}function Yl(e,s="application/octet-stream"){const t=atob(e),n=new Uint8Array(t.length);for(let l=0;l<t.length;l++)n[l]=t.charCodeAt(l);return new Blob([n],{type:s})}async function Kl({onProgress:e,saveTarget:s=null}={}){var a,m,h,f;let t=await la().catch(()=>null),n,l,o,p=null,r=!1;if(t!=null&&t.fileHandle){if(e==null||e("ตรวจสอบสิทธิ์เข้าถึงไฟล์สำรองเดิม"),await qa(t.fileHandle),n=t.catalog??await _a(void 0,v=>e==null?void 0:e(v)),n.some(v=>v.estimated_rows==null)){const v=await it($=>_a($,x=>e==null?void 0:e(x)),"สถิติรายการตาราง",e);v.length===n.length&&v.every(($,x)=>{var i;return $.table_name===((i=n[x])==null?void 0:i.table_name)})&&(n=v,t.catalog=v)}l=t.fileName,p=t.fileHandle,r=!0,o=await Jt(p,t.byteOffset??0),t.status="running",await et(t),e==null||e(`กำลังทำสำรองต่อจาก ${t.tableName??"จุดล่าสุด"}`)}else{let v=null;if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรอง...");const{fileHandle:w,error:$}=await s.fileHandlePromise;if($)throw $;v=w}e==null||e("กำลังอ่านรายการตาราง..."),n=await it(w=>_a(w,$=>e==null?void 0:e($)),"รายการตาราง",e),l=(s==null?void 0:s.fileName)??`pp5-full-backup-${Fa(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`,v?(e==null||e("ตรวจสอบสิทธิ์เขียนไฟล์สำรอง"),p=v,await qa(p),r=!0,t={id:"active",status:"running",fileName:l,fileHandle:p,catalog:n,paginationVersion:2,phase:"tables",tableIndex:0,tableCursor:null,tableCount:0,storageObjects:null,storageIndex:0,counts:{},headerWritten:!1,endWritten:!1,byteOffset:0},e==null||e("บันทึกจุดเริ่มต้นสำหรับทำสำรองต่อได้"),await et(t),o=await Jt(p,0)):o=await cr(l)}const d=(t==null?void 0:t.counts)??{},u=async(v={})=>{!r||!t||(Object.assign(t,v,{byteOffset:o.offset??t.byteOffset??0,updatedAt:new Date().toISOString()}),await et(t))};try{t!=null&&t.headerWritten||(await o.write(JSON.stringify({format:rr,version:nr,created_at:new Date().toISOString(),scope:"all-public-application-tables",note:"รวมข้อมูลแอปพลิเคชันทั้งหมดใน public schema และไฟล์ใน Supabase Storage ไม่รวม auth.users รหัสผ่าน และระบบภายใน Supabase",catalog:n.map(_=>({table_name:_.table_name,depends_on:_.depends_on??[]}))})+`
`),await u({headerWritten:!0}));const v=r?t.tableIndex??0:0;for(let _=v;_<n.length;_+=1){const C=n[_];let T=r&&_===v?t.tableCursor??null:null,D=r&&_===v?t.tableCount??0:0;for(;;){const q=await it(c=>Vl(C.table_name,T,c),`ข้อมูล ${C.table_name}`,e),y=q.rows;if(y.length){const c=y.map(g=>JSON.stringify({kind:"row",table:C.table_name,row:g})).join(`
`)+`
`;await o.write(c),T=q.nextCursor,D+=y.length,await u({phase:"tables",tableIndex:_,tableCursor:T,tableCount:D})}if(hs(e,t,n,`สำรอง ${C.table_name} (${_+1}/${n.length})`,D,{phase:"tables",tableIndex:_,tableCount:D}),!q.hasMore)break}d[C.table_name]=D,await u({phase:"tables",tableIndex:_+1,tableCursor:null,tableCount:0,counts:d})}let w=t==null?void 0:t.storageObjects;w||(w=(await it(C=>Gl(C),"รายการไฟล์ Storage",e)).objects??[],await u({phase:"storage",storageObjects:w,storageIndex:0}));const $=r?t.storageIndex??0:0;for(let _=$;_<w.length;_+=1){const C=w[_],T=await it(async()=>{const{data:y,error:c}=await ie.storage.from(C.bucket_id).download(C.name);if(c)throw new Error(`สำรองไฟล์ Storage ${C.bucket_id}/${C.name} ไม่สำเร็จ: ${c.message}`);return y},`ไฟล์ ${C.bucket_id}/${C.name}`,e,{timeoutMs:0}),D=await Wl(T);await o.write(JSON.stringify({kind:"storage",bucket:C.bucket_id,name:C.name,content_type:T.type||((a=C.metadata)==null?void 0:a.mimetype)||"application/octet-stream",data:D})+`
`);const q=`storage:${C.bucket_id}`;d[q]=(d[q]??0)+1,await u({phase:"storage",storageIndex:_+1,counts:d}),hs(e,t,n,`สำรองไฟล์ ${C.bucket_id} (${_+1}/${w.length})`,d[q],{phase:"storage",storageIndex:_+1,storageCount:w.length})}t!=null&&t.endWritten||(await o.write(JSON.stringify({kind:"end",counts:d})+`
`),await u({phase:"finalizing",endWritten:!0,counts:d}));let x;if(r){const _=await p.getFile();x={blob:null,sha256:await oa(_),byteSize:_.size,savedToDisk:!0}}else x=await o.close();const{data:i,error:j}=await ie.rpc("admin_record_full_backup",{p_file_name:l,p_byte_size:x.byteSize,p_sha256:x.sha256,p_table_counts:d});if(j)throw j;return x.blob&&dr(x.blob,l),await da(),{backupId:i==null?void 0:i.id,fileName:l,byteSize:x.byteSize,sha256:x.sha256,counts:d,tableCount:n.length,savedToDisk:x.savedToDisk}}catch(v){throw r&&t&&(t.status="paused",await et(t).catch(()=>{})),await((f=(m=o==null?void 0:o.abort)==null?void 0:(h=m.call(o)).catch)==null?void 0:f.call(h,()=>{})),v}}async function Jl({onProgress:e,saveTarget:s=null,resume:t=!1,academicYear:n,semester:l}={}){var m,h,f,v,w;let o=null,p=null,r=null,d=!1,u,a=(s==null?void 0:s.fileName)??`pp5-term-backup-${Fa(new Date().toISOString().replace(/[:.]/g,"-"))}.jsonl.gz`;try{if(t){if(r=await la(Qt(n,l)).catch(()=>null),!r)throw new Error("ไม่พบงานสำรองภาคเรียนที่ทำต่อได้ กรุณาเริ่มสำรองใหม่");await qa(r.fileHandle),u=r.manifest,a=r.fileName,p=r.fileHandle,d=!0,o=await Jt(p,r.byteOffset??0),e==null||e(`ทำสำรองต่อจาก ${r.table??"จุดล่าสุด"}`)}else if(s!=null&&s.fileHandlePromise){e==null||e("กำลังรอเลือกตำแหน่งไฟล์สำรองภาคเรียน");const{fileHandle:c,error:g}=await s.fileHandlePromise;if(g)throw g;p=c}u||(u=await it(async c=>{const{data:g,error:k}=await ie.rpc("admin_term_backup_catalog").abortSignal(c);if(k)throw k;return g},"สรุปข้อมูลภาคเรียน",e));const $={attendances:Number((m=u==null?void 0:u.counts)==null?void 0:m.attendances),prayer_records:Number((h=u==null?void 0:u.counts)==null?void 0:h.prayer_records)};if(!Number.isInteger(u==null?void 0:u.academic_year)||![1,2].includes(Number(u==null?void 0:u.semester))||!Number.isSafeInteger($.attendances)||$.attendances<0||!Number.isSafeInteger($.prayer_records)||$.prayer_records<0)throw new Error("ข้อมูลสรุปสำหรับสำรองภาคเรียนไม่ถูกต้อง");if(r&&(Number(r.academicYear)!==Number(u.academic_year)||Number(r.semester)!==Number(u.semester)||JSON.stringify(r.expectedCounts)!==JSON.stringify($)))throw new Error("ข้อมูลภาคเรียนเปลี่ยนจากตอนเริ่มสำรอง กรุณาล้างงานค้างและเริ่มใหม่เพื่อป้องกันไฟล์ไม่ครบ");const x=$.attendances+$.prayer_records;if(!p&&x>1e5)throw new Error("ข้อมูลมีขนาดใหญ่ กรุณาใช้ Chrome หรือ Edge ที่รองรับการเลือกตำแหน่งไฟล์โดยตรง");o||(e==null||e("ได้รับจำนวนข้อมูลแล้ว · กำลังเตรียมไฟล์สำรอง"),o=p?await Jt(p,0):await cr(a),d=!!p,d&&(r={id:Qt(u.academic_year,u.semester),status:"running",fileName:a,fileHandle:p,manifest:u,academicYear:Number(u.academic_year),semester:Number(u.semester),expectedCounts:$,counts:{},tableIndex:0,cursor:null,tableCount:0,byteOffset:0,headerWritten:!1},await et(r)));const i=(r==null?void 0:r.counts)??{},j=Object.values(i).reduce((c,g)=>c+Number(g||0),0)+(d?Number(r.tableCount||0):0);r!=null&&r.headerWritten||(await o.write(JSON.stringify({format:"pp5-term-backup",version:1,created_at:new Date().toISOString(),scope:"term-rollover-source-data",academic_year:Number(u.academic_year),semester:Number(u.semester),semester_start:u.semester_start??null,semester_end:u.semester_end??null,expected_counts:$,tables:["attendances","prayer_records"]})+`
`),d&&(r.byteOffset=o.offset,r.headerWritten=!0,await et(r)));let _=j;const C=d?Number(r.tableIndex??0):0,T=["attendances","prayer_records"];for(let c=C;c<T.length;c+=1){const g=T[c];let k=d&&c===C?r.cursor??null:null,b=d&&c===C?Number(r.tableCount??0):0;do{const L=await it(async B=>{const{data:H,error:S}=await ie.rpc("admin_term_backup_read_cursor",{p_table:g,p_academic_year:Number(u.academic_year),p_semester:Number(u.semester),p_cursor:k,p_limit:1e3}).abortSignal(B);if(S)throw S;return H},`ข้อมูล ${g}`,e),E=Array.isArray(L==null?void 0:L.rows)?L.rows:[];if(L!=null&&L.has_more&&(!E.length||!L.next_cursor))throw new Error(`อ่านข้อมูล ${g} ไม่ต่อเนื่อง ระบบหยุดเพื่อป้องกันไฟล์ไม่ครบ`);if(E.length){await o.write(E.map(H=>JSON.stringify({kind:"row",table:g,row:H})).join(`
`)+`
`),b+=E.length,_+=E.length,k=L.next_cursor;const B=x>0?Math.min(98,Math.floor(_/x*98)):98;e==null||e(`สำรอง ${g} · ${b.toLocaleString()}/${$[g].toLocaleString()} รายการ`,b,{percent:B,completedRows:_,totalRows:x,table:g}),d&&(r.tableIndex=c,r.table=g,r.cursor=k,r.tableCount=b,r.counts=i,r.byteOffset=o.offset,r.updatedAt=new Date().toISOString(),await et(r))}if(!(L!=null&&L.has_more))break}while(!0);if(b!==$[g])throw new Error(`จำนวนข้อมูล ${g} ไม่ตรงกับที่ตรวจนับไว้ (${b.toLocaleString()}/${$[g].toLocaleString()}) กรุณาสำรองใหม่`);i[g]=b,d&&(r.tableIndex=c+1,r.table=T[c+1]??"ตรวจสอบไฟล์",r.cursor=null,r.tableCount=0,r.counts=i,r.byteOffset=o.offset,await et(r))}await o.write(JSON.stringify({kind:"end",counts:i})+`
`),e==null||e("อ่านข้อมูลครบแล้ว · กำลังปิดและตรวจสอบไฟล์");let D;if(d){await o.close();const c=await p.getFile();D={blob:null,sha256:await oa(c),byteSize:c.size,savedToDisk:!0}}else D=await o.close();if(!D.byteSize||!/^[0-9a-f]{64}$/.test(D.sha256))throw new Error("ตรวจสอบขนาดหรือค่า SHA-256 ของไฟล์ไม่ผ่าน");const{data:q,error:y}=await ie.rpc("admin_record_term_backup",{p_academic_year:Number(u.academic_year),p_semester:Number(u.semester),p_semester_start:u.semester_start??null,p_semester_end:u.semester_end??null,p_file_name:a,p_byte_size:D.byteSize,p_sha256:D.sha256,p_table_counts:i});if(y)throw y;return D.blob&&dr(D.blob,a),d&&(r!=null&&r.id)&&await da(r.id),{backupId:q==null?void 0:q.id,fileName:a,byteSize:D.byteSize,sha256:D.sha256,counts:i,academicYear:Number(u.academic_year),semester:Number(u.semester),savedToDisk:D.savedToDisk}}catch($){throw d&&(r!=null&&r.id)&&(r.status="paused",await et(r).catch(()=>{})),await((w=(f=o==null?void 0:o.abort)==null?void 0:(v=f.call(o)).catch)==null?void 0:w.call(v,()=>{})),$}}async function*Ql(e){var o;if(!((o=e==null?void 0:e.name)!=null&&o.endsWith(".gz"))&&(e==null?void 0:e.type)!=="application/gzip")throw new Error("กรุณาเลือกไฟล์สำรอง .jsonl.gz ที่สร้างจากระบบ ปพ.5");const t=e.stream().pipeThrough(new DecompressionStream("gzip")).getReader(),n=new TextDecoder;let l="";for(;;){const{value:p,done:r}=await t.read();if(r)break;l+=n.decode(p,{stream:!0});const d=l.split(`
`);l=d.pop()??"";for(const u of d)u.trim()&&(yield u)}l+=n.decode(),l.trim()&&(yield l)}async function Zl(e,s){if(!s.length)return;const{error:t}=await ie.rpc("admin_full_backup_restore_table",{p_table:e,p_rows:s});if(t)throw t}async function Xl(e,s,t,n){if(!s.length)return;const{error:l}=await ie.rpc("admin_restore_term_backup_table",{p_table:e,p_academic_year:t,p_semester:n,p_rows:s});if(l)throw l}async function ed(e){const s=Yl(e.data,e.content_type),{error:t}=await ie.storage.from(e.bucket).upload(e.name,s,{upsert:!0,contentType:e.content_type||"application/octet-stream"});if(t)throw t}async function td(e,{onProgress:s}={}){var h,f;const t=await oa(e),{data:n,error:l}=await ie.from("academic_term_backups").select("id, file_name, byte_size, backup_scope, academic_year, semester, table_counts").eq("sha256",t).eq("status","verified").maybeSingle();if(l)throw l;if(!n)throw new Error("ไฟล์นี้ไม่ตรงกับไฟล์ Full Backup ที่ระบบเคยบันทึกไว้");let o=null,p=null,r=!1,d=[];const u={},a=async()=>{!p||!d.length||(r?await Xl(p,d,o.academic_year,o.semester):await Zl(p,d),u[p]=(u[p]??0)+d.length,s==null||s(`กู้คืน ${p}`,u[p]),d=[])};for await(const v of Ql(e)){const w=JSON.parse(v);if(!w.kind&&(w.format===rr||w.format==="pp5-term-backup")){if(o=w,r=w.format==="pp5-term-backup",r){if(o.version!==1||o.scope!=="term-rollover-source-data"||n.backup_scope!=="term"||Number(n.academic_year)!==Number(o.academic_year)||Number(n.semester)!==Number(o.semester)||!Array.isArray(o.tables)||o.tables.length!==2||!o.tables.includes("attendances")||!o.tables.includes("prayer_records"))throw new Error("ไฟล์สำรองภาคเรียนหรือข้อมูลลงทะเบียนไม่ตรงกัน")}else if(o.version!==nr||o.scope!=="all-public-application-tables"||n.backup_scope!=="full")throw new Error("เวอร์ชันหรือขอบเขตไฟล์สำรองไม่รองรับ");continue}if(w.kind!=="end"){if(w.kind==="storage"){await a(),await ed(w);const $=`storage:${w.bucket}`;u[$]=(u[$]??0)+1,s==null||s(`กู้คืนไฟล์ ${w.bucket}`,u[$]);continue}if(w.kind!=="row"||!w.table||!w.row)throw new Error("รูปแบบไฟล์สำรองไม่ถูกต้อง");if(r&&!["attendances","prayer_records"].includes(w.table))throw new Error("ไฟล์สำรองภาคเรียนมีตารางนอกขอบเขตที่อนุญาต");p!==w.table&&(await a(),p=w.table),d.push(w.row),d.length>=Ml&&await a()}}if(await a(),!o)throw new Error("ไม่พบหัวไฟล์สำรอง");if(r){for(const v of["attendances","prayer_records"])if(Number(u[v]??0)!==Number(((h=o.expected_counts)==null?void 0:h[v])??-1)||Number(u[v]??0)!==Number(((f=n.table_counts)==null?void 0:f[v])??-2))throw new Error(`จำนวนข้อมูล ${v} ในไฟล์ไม่ตรงกับรายการสำรองที่ระบบรับรองไว้`)}const{error:m}=await ie.from("academic_term_backups").update({restored_at:new Date().toISOString()}).eq("id",n.id);return m&&console.warn("บันทึกประวัติการกู้คืนไม่สำเร็จ:",m),{counts:u,sha256:t,createdAt:o.created_at}}async function ad(e,s){const{data:t,error:n}=await ie.from("academic_term_backups").select("id, backup_scope, academic_year, semester").eq("status","verified").order("created_at",{ascending:!1}).limit(100);if(n)throw n;const l=(t??[]).find(o=>o.backup_scope==="full"||o.backup_scope==="term"&&Number(o.academic_year)===Number(e)&&Number(o.semester)===Number(s));return(l==null?void 0:l.id)??null}const De=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function sd(e){document.querySelectorAll("[data-nav]").forEach(s=>{const t=s.dataset.nav===e;s.classList.toggle("bg-indigo-800",t),s.classList.toggle("text-white",t),s.classList.toggle("text-indigo-200",!t)})}function $a(e){document.getElementById("main-content").innerHTML=e}const ur={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},rd={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},nd={doc:"📋",dates:"📅",att:"✅",score:"📝"},od={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function At(e,s,t,n="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${n} rounded-lg ${rd[t]}" title="${s}">${e}</span>`}function at(e,s,t="w-8 h-8 text-base"){return At(nd[e],`${od[e]}: ${ur[s]}`,s,t)}const ld={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function dd(e){return["AGM","AGMVOC"].includes(e)?"ศาสนา":e==="ACDMVOC"?"สามัญปวช":"สามัญ"}function id(e,s){const t=dd(e.subject_group);return s.find(n=>n.dept_code===e.dept&&n.category===t)??s.find(n=>n.dept_code===e.dept)??s.find(n=>n.dept_name===e.dept)??null}function cd(e,s){return e.dept?s.find(t=>t.dept_code===e.dept&&t.category===e.category)??s.find(t=>t.dept_code===e.dept)??null:null}function ud(e,s){return Math.round((new Date(e)-new Date(s))/864e5)}function pd(e,s){const t=e.has_doc_rows?"green":"red",n=e.has_teaching_dates?"green":"red";let l;if(!e.has_teaching_dates||e.day1_date&&e.day1_date>s)l="gray";else if(!e.last_check_date)l="red";else{const p=ud(s,e.last_check_date);l=p<=7?"green":p<=14?"yellow":"red"}let o;if(!e.score_col_count)o="gray";else{const p=e.student_count*e.score_col_count,r=p>0?e.score_filled_count/p:0;o=r>=.8?"green":r>0?"yellow":"red"}return{doc:t,dates:n,att:l,score:o}}function It(e){const s=e.filter(t=>t!=="gray");return s.length===0?"gray":s.includes("red")?"red":s.includes("yellow")?"yellow":"green"}function ka(e){return Object.values(e).some(s=>s==="red"||s==="yellow")}async function md(){var W,Y;sd("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",$a(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let e,s,t,n,l;try{[e,s,t,n,l]=await Promise.all([dn(),nt(),Me().catch(()=>({})),He(),cn(60).catch(()=>null)])}catch(M){$a(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${De(fe(M))}</p>
    </div>`);return}const o=t.academicYear??t.academic_year??"",p=t.semester??"",r=new Date().toISOString().slice(0,10),d=e.filter(M=>M.subject_id!=null).map(M=>{const V=id(M,s);return{...M,deptKey:(V==null?void 0:V.id)!=null?`d${V.id}`:`u_${M.dept??"-"}`,deptName:(V==null?void 0:V.dept_name)??M.dept??"ไม่ระบุกลุ่มสาระ",status:pd(M,r)}}),u=new Map;for(const M of d)u.has(M.deptKey)||u.set(M.deptKey,{deptName:M.deptName,rows:[]}),u.get(M.deptKey).rows.push(M);const a=[...u.entries()].map(([M,V])=>({key:M,...V})).sort((M,V)=>M.deptName.localeCompare(V.deptName,"th")),m=new Map;for(const M of d)M.teacher_id!=null&&(m.has(M.teacher_id)||m.set(M.teacher_id,[]),m.get(M.teacher_id).push(M));const h=n.filter(M=>M.staff_type==="ครู").map(M=>{const V=m.get(M.id)??[],K=M.profile_id!=null,Q=V.length,Z=Q>0?It(V.map(me=>me.status.att)):"gray";let se;if(V[0])se={key:V[0].deptKey,name:V[0].deptName};else{const me=cd(M,s);se=me?{key:`d${me.id}`,name:me.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let ae;return K?Q===0?ae=2:Z==="red"?ae=1.5:Z==="yellow"?ae=1:ae=0:ae=3,{teacherId:M.id,teacherName:M.full_name,deptKey:se.key,deptName:se.name,registered:K,classCount:Q,attWorst:Z,severity:ae}}).sort((M,V)=>V.severity-M.severity||M.teacherName.localeCompare(V.teacherName,"th")),f=h.filter(M=>!M.registered).length,v=h.filter(M=>M.registered&&M.classCount===0).length,w=h.filter(M=>M.registered&&M.classCount>0&&(M.attWorst==="red"||M.attWorst==="yellow")).length,$=h.filter(M=>M.severity>0).length;function x(M){const V=d.filter(se=>se.status[M]!=="gray"),K=V.filter(se=>se.status[M]==="green").length,Q=d.length-V.length;return{pct:V.length>0?Math.round(K/V.length*100):null,green:K,total:V.length,grayCount:Q}}const i={doc:x("doc"),dates:x("dates"),att:x("att"),score:x("score")},j=h.length,_=h.filter(M=>M.registered).length,C=h.filter(M=>M.registered&&M.classCount>0).length,T=h.filter(M=>M.registered&&M.classCount>0&&M.attWorst==="green").length,D={registered:{pct:j>0?Math.round(_/j*100):null,num:_,total:j},courses:{pct:_>0?Math.round(C/_*100):null,num:C,total:_},attendance:{pct:C>0?Math.round(T/C*100):null,num:T,total:C}},q=d.filter(M=>ka(M.status)).length,y=d.length>0?Math.round(q/d.length*100):0;function c(){if(!l)return"";const M=l.rows||[],V=l.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},K=new Date,Q=se=>se.status!=="active"?se.status==="returned"?"กลับแล้ว":"เลยเวลา":ml(se.created_at,se.allowed_duration,K).text,Z=M.filter(se=>se.status==="active").slice(0,8);return`
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
            ${Z.map(se=>{var ae,me,ue,we;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${De(((ae=se.students)==null?void 0:ae.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${De(((me=se.classes)==null?void 0:me.class_name)||((ue=se.students)==null?void 0:ue.main_room)||"—")} · ${De(se.reason||"—")} · ${De(((we=se.teachers)==null?void 0:we.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${Q(se)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let g=null,k="attention",b="",L=null;const E={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function B(){return a.map(M=>{const V={doc:It(M.rows.map(Z=>Z.status.doc)),dates:It(M.rows.map(Z=>Z.status.dates)),att:It(M.rows.map(Z=>Z.status.att)),score:It(M.rows.map(Z=>Z.status.score))},K=M.rows.filter(Z=>ka(Z.status)).length,Q=g===M.key;return`
        <button type="button" data-dept-key="${M.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${Q?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${De(M.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${M.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${at("doc",V.doc)}
            ${at("dates",V.dates)}
            ${at("att",V.att)}
            ${at("score",V.score)}
          </div>
          <p class="text-xs ${K>0?"text-amber-600 font-semibold":"text-emerald-600"}">
            ${K>0?`⚠️ ${K} ห้องต้องตามงาน`:"✅ ปกติทั้งหมด"}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${Q?"🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายละเอียด ▸"}</p>
        </button>`}).join("")}function H(){var Q;const M=g?(Q=a.find(Z=>Z.key===g))==null?void 0:Q.deptName:null,V=k==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${M?`${V} · ${De(M)}`:`${V} (ทั้งโรงเรียน)`}</h4>
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
        ${g?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function S(){let M=d;return k==="attention"&&(M=M.filter(V=>ka(V.status))),g&&(M=M.filter(V=>V.deptKey===g)),b&&(M=M.filter(V=>(V.class_name??"").toLowerCase().includes(b)||(V.subject_name??"").toLowerCase().includes(b)||(V.teacher_name??"").toLowerCase().includes(b))),M=[...M].sort((V,K)=>{const Q=Z=>Object.values(Z).reduce((se,ae)=>se+(ae==="red"?2:ae==="yellow"?1:0),0);return Q(K.status)-Q(V.status)}),M.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
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
            ${M.map(V=>`
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${De(V.class_name)}</p>
                  <p class="text-xs text-gray-400">${De(V.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${De(V.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${De(V.deptName)}</td>
                <td class="px-4 py-2 text-center">${at("doc",V.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${at("att",V.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${at("score",V.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${at("dates",V.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function I(){let M=h;L==="unregistered"?M=M.filter(Q=>!Q.registered):L==="no-courses"?M=M.filter(Q=>Q.registered&&Q.classCount===0):L==="att-behind"?M=M.filter(Q=>Q.registered&&Q.classCount>0&&(Q.attWorst==="red"||Q.attWorst==="yellow")):k==="attention"&&(M=M.filter(Q=>Q.severity>0)),g&&(M=M.filter(Q=>Q.deptKey===g)),b&&(M=M.filter(Q=>(Q.teacherName??"").toLowerCase().includes(b)));const V=L?`${E[L]} (${M.length} คน)`:k==="all"?`ครูผู้สอนทั้งหมด (${M.length}/${h.length} คน)`:`ครูที่ต้องติดตาม (${M.length} คน)`,K=M.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
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
              ${M.map(Q=>`
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${De(Q.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${De(Q.deptName)}</td>
                  <td class="px-4 py-2 text-center">${At("🔑",Q.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",Q.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${At("📚",Q.classCount>0?`มีวิชา/ห้องที่สอน ${Q.classCount} ห้อง`:Q.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",Q.classCount>0?"green":Q.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Q.classCount>0?At("✅",`เช็คชื่อ: ${ur[Q.attWorst]}`,Q.attWorst,"w-7 h-7 text-sm"):At("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`;return`
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${V}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${L?'<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>':""}
      </div>
      ${K}`}function R({icon:M,label:V,info:K,pct:Q,numerator:Z,denominator:se,unit:ae="ห้อง",extraNote:me="",filterKey:ue=null,active:we=!1}){const Ie=Q==null?"text-gray-400":Q>=80?"text-emerald-700":Q>=50?"text-amber-600":"text-red-600",Te=ue?"button":"div",Fe=ue?' type="button"':"",Je=ue?` data-teacher-filter="${ue}"`:"";return`
      <${Te}${Fe}${Je} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${ue?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${we?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${De(K)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${M}</div>
          <p class="text-sm font-semibold text-gray-600">${V} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${Ie}">${Q==null?"—":Q+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${se>0?`${Z}/${se} ${ae}`:"ไม่มีข้อมูล"}${me}</p>
        ${ue?`<p class="text-[10px] text-indigo-400 mt-1">${we?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${Te}>`}function F(M,V,K){const Q=i[K];return R({icon:M,label:V,info:ld[K],pct:Q.pct,numerator:Q.green,denominator:Q.total,unit:"ห้อง",extraNote:Q.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${Q.grayCount}</span>`:""})}function A(M,V,K,Q,Z="",se=null){return R({icon:M,label:V,info:K,pct:Q.pct,numerator:Q.num,denominator:Q.total,unit:"คน",extraNote:Z,filterKey:se,active:L===se})}function U(){return`
      ${A("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",D.registered,f>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${f}</span>`:"","unregistered")}
      ${A("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",D.courses,v>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${v}</span>`:"","no-courses")}
      ${A("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",D.attendance,w>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${w}</span>`:"","att-behind")}`}function z(){var M,V,K;document.querySelectorAll(".exec-dept-card").forEach(Q=>{Q.addEventListener("click",()=>{var se;const Z=Q.dataset.deptKey;g===Z?(g=null,k="attention"):(g=Z,k="all"),O(),(se=document.getElementById("exec-table-section"))==null||se.scrollIntoView({behavior:"smooth",block:"start"})})}),(M=document.getElementById("exec-clear-filter"))==null||M.addEventListener("click",()=>{g=null,k="attention",O()}),(V=document.getElementById("exec-toggle-scope"))==null||V.addEventListener("click",()=>{k=k==="all"?"attention":"all",O()}),document.querySelectorAll("[data-teacher-filter]").forEach(Q=>{Q.addEventListener("click",()=>{var se;const Z=Q.dataset.teacherFilter;L=L===Z?null:Z,g=null,b="",O(),(se=document.getElementById("exec-teacher-section"))==null||se.scrollIntoView({behavior:"smooth",block:"start"})})}),(K=document.getElementById("exec-teacher-clear-filter"))==null||K.addEventListener("click",()=>{L=null,O()})}function O(){document.getElementById("exec-teacher-kpi").innerHTML=U(),document.getElementById("exec-dept-cards").innerHTML=B(),document.getElementById("exec-table-header").innerHTML=H(),document.getElementById("exec-class-table").innerHTML=S(),document.getElementById("exec-teacher-section").innerHTML=I();const M=document.getElementById("exec-dept-select");M&&(M.value=g??"");const V=document.getElementById("exec-search");V&&(V.value=b),z()}$a(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${o?`ปีการศึกษา ${De(o)}`:""}${p?` ภาคเรียนที่ ${De(p)}`:""}${o||p?" · ":""}ทั้งหมด ${d.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${q>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${q} ห้อง</b> (${y}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${$>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${$} คน</b> ที่ต้องติดตาม
        ${f>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${f}</b> คน`:""}
        ${v>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${v}</b> คน`:""}
        ${w>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${w}</b> คน`:""}
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
        ${a.map(M=>`<option value="${M.key}">${De(M.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${H()}
      </div>
      <div id="exec-class-table">${S()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${I()}
    </div>
  </div>`),(W=document.getElementById("exec-search"))==null||W.addEventListener("input",M=>{b=M.target.value.trim().toLowerCase(),O()}),(Y=document.getElementById("exec-dept-select"))==null||Y.addEventListener("change",M=>{g=M.target.value||null,k=g?"all":"attention",O()}),z()}const xd="regrade.html",gd=()=>{const e=new URL(xd,window.location.href);return e.searchParams.set("v",Po),e.href},Zt=(e,s)=>{e&&(e.textContent=s,clearTimeout(e._regradeStatusTimer),e._regradeStatusTimer=setTimeout(()=>{e.textContent=""},1800))},bd=async(e,s)=>{try{await navigator.clipboard.writeText(e),Zt(s,"คัดลอกลิงก์แล้ว")}catch{Zt(s,"คัดลอกไม่สำเร็จ")}},yd=async(e,s)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:e});return}await navigator.clipboard.writeText(e),Zt(s,"คัดลอกลิงก์แล้ว")}catch{Zt(s,"แชร์ไม่สำเร็จ")}};function fd(){var p,r,d,u;(p=document.getElementById("regrade-modal"))==null||p.remove();const e=gd(),s=document.body.style.overflow;document.body.style.overflow="hidden";const t=document.createElement("div");t.id="regrade-modal",t.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",t.innerHTML=`
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
  `;const n=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=s,t.remove(),window.closeRegradeModal===n&&(window.closeRegradeModal=null)},l=a=>{a.key==="Escape"&&n()};document.addEventListener("keydown",l),document.body.appendChild(t),window.closeRegradeModal=n;const o=t.querySelector("[data-regrade-status]");(r=t.querySelector("[data-regrade-close]"))==null||r.addEventListener("click",n),(d=t.querySelector("[data-regrade-copy]"))==null||d.addEventListener("click",()=>bd(e,o)),(u=t.querySelector("[data-regrade-share]"))==null||u.addEventListener("click",()=>yd(e,o))}const re=(e="")=>String(e??"").replace(/[&<>'"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[s]),vs=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Sa=e=>{if(!e)return"";const s=new Date(e);if(Number.isNaN(s.getTime()))return"";const t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`},Et=()=>document.getElementById("stu-content")||document.getElementById("main-content"),hd="00000000-0000-0000-0000-000000000001",pr=[{code:"SS",chest:34},{code:"S",chest:36},{code:"M",chest:38},{code:"L",chest:40},{code:"XL",chest:42},{code:"2X",chest:44},{code:"3X",chest:46},{code:"4X",chest:48},{code:"5X",chest:50},{code:"6X",chest:52},{code:"7X",chest:54},{code:"8X",chest:56}],xe=(e,s="success")=>{const t=document.createElement("div");t.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-3 rounded-xl text-white text-sm shadow-xl ${s==="error"?"bg-red-600":"bg-emerald-600"}`,t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),3e3)},Lt=()=>'<div class="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800"><h3 class="font-bold">ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี</h3><p class="text-sm mt-2">ให้แอดมินรันไฟล์ <code>patch_sports_student_team_portal.sql</code> ใน Supabase SQL Editor</p></div>',vt=(e,s,t,n)=>`<div class="rounded-2xl border p-4 ${n?"bg-emerald-50 border-emerald-200":"bg-slate-50 border-slate-200"}"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-sm text-slate-800">${re(s)}</h3><p class="text-xs text-slate-500 mt-1">${re(t)}</p><span class="inline-block mt-3 px-2 py-1 rounded-full text-[11px] font-bold ${n?"bg-emerald-100 text-emerald-700":"bg-slate-200 text-slate-600"}">${n?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span></div><button type="button" data-cfg="${re(e)}" data-enabled="${n?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${n?"bg-red-50 text-red-700 border border-red-200":"bg-emerald-600 text-white"}">${n?"ปิดใช้งาน":"เปิดใช้งาน"}</button></div></div>`,ws=(e,s,t=!0)=>`<button type="button" data-team-perm="${re(e)}" data-enabled="${t?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold border ${t?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}">${t?"อนุญาต":"ไม่อนุญาต"}: ${re(s)}</button>`;(location.pathname.startsWith("/pp5online/")?"/pp5online/":"/")+"";async function ia(e,s,t=1e3){let n=[],l=0;for(;;){const{data:o,error:p}=await s(ie.from(e)).range(l,l+t-1);if(p)throw p;if(n=n.concat(o||[]),!o||o.length<t)break;l+=t}return n}async function mr(e){var n;if(!e)return!1;const{data:s}=await ie.from("teachers").select("positions,position,staff_type").eq("profile_id",e).maybeSingle();return s?((n=s.positions)!=null&&n.length?s.positions:s.position?[s.position]:[]).includes("house_color_admin")||s.staff_type==="แอดมิน":!1}async function vd(e){const{data:s}=await ie.from("settings").select("value").eq("key","public_buttons").maybeSingle(),t=s!=null&&s.value&&typeof s.value=="object"?s.value:{};await ie.from("settings").upsert({key:"public_buttons",value:{athlete_size:!1,athlete_registration:!1,athlete_print:!0,athlete_certificate:!0,...t,athlete_size:!!e},description:"Controls which athlete-page actions are visible and usable by public visitors.",updated_at:new Date().toISOString()},{onConflict:"key"})}async function Ct(){const[{data:e},{data:s},{data:t}]=await Promise.all([ie.from("events").select("*").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),ie.from("sports_portal_settings").select("*").limit(1).maybeSingle(),ie.from("settings").select("value").eq("key","shirt_sizes").maybeSingle()]),n=Array.isArray(t==null?void 0:t.value)&&t.value.length?t.value:pr;return{event:e||{id:hd,name:"AZIZGAMES"},cfg:s,shirtSizes:n}}async function wd(e){const{error:s}=await ie.from("settings").upsert({key:"shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}async function _d(e){const{error:s}=await ie.from("settings").upsert({key:"teacher_shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(s)throw s}function xr(e){const s=[];return(e||[]).forEach(t=>{const n=_s(t.event_date),l=_s(t.end_date||t.event_date);if(n)for(let o=new Date(n);o<=(l||n);o.setDate(o.getDate()+1))s.push({date:$d(o),label:t.label})}),s.sort((t,n)=>t.date<n.date?1:-1)}function _s(e){if(!e)return null;const[s,t,n]=String(e).slice(0,10).split("-").map(Number);return new Date(s,t-1,n)}function $d(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}async function kd(e,s){const t=e.querySelector("#sports-gallery-type-admin");if(!t)return;t.innerHTML='<div class="py-8 text-center text-gray-400">กำลังโหลดประเภทภาพกิจกรรม...</div>';const{data:n,error:l}=await ie.from("sports_gallery_upload_types").select("*").eq("event_id",s.id).order("event_date",{ascending:!0,nullsFirst:!1}).order("display_order").order("created_at");if(l){t.innerHTML='<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">ยังไม่พร้อมใช้งานส่วนจัดการประเภทภาพกิจกรรม — กรุณารันไฟล์ <code>patch_sports_gallery_upload_types.sql</code> ใน Supabase SQL Editor</div>';return}let o=n||[];const p=()=>{var r;t.innerHTML=`
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
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีประเภทภาพกิจกรรม</p>'}</div>`,(r=t.querySelector("#gallery-type-add"))==null||r.addEventListener("click",async()=>{const d=t.querySelector("#gallery-type-new-name").value.trim(),u=t.querySelector("#gallery-type-new-date").value||null;if(!d)return xe("กรุณากรอกชื่อประเภทภาพกิจกรรม","error");const a=t.querySelector("#gallery-type-add");a.disabled=!0;const{data:m,error:h}=await ie.from("sports_gallery_upload_types").insert({event_id:s.id,name:d,event_date:u,is_active:!0,display_order:o.length*10}).select("*").single();if(h)return a.disabled=!1,xe(h.message,"error");o.push(m),xe("เพิ่มประเภทภาพกิจกรรมแล้ว"),p()}),t.querySelectorAll("[data-gallery-type-save]").forEach(d=>d.addEventListener("click",async()=>{const u=t.querySelector(`[data-gallery-type-row="${d.dataset.galleryTypeSave}"]`),a=u.querySelector("[data-gallery-type-name]").value.trim(),m=u.querySelector("[data-gallery-type-date]").value||null;if(!a)return xe("ชื่อประเภทต้องไม่ว่าง","error");d.disabled=!0;const{data:h,error:f}=await ie.from("sports_gallery_upload_types").update({name:a,event_date:m,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeSave).select("*").single();if(f)return d.disabled=!1,xe(f.message,"error");o=o.map(v=>v.id===h.id?h:v),xe("บันทึกการแก้ไขแล้ว"),p()})),t.querySelectorAll("[data-gallery-type-active]").forEach(d=>d.addEventListener("click",async()=>{const u=d.dataset.active!=="true";d.disabled=!0;const{data:a,error:m}=await ie.from("sports_gallery_upload_types").update({is_active:u,updated_at:new Date().toISOString()}).eq("id",d.dataset.galleryTypeActive).select("*").single();if(m)return d.disabled=!1,xe(m.message,"error");o=o.map(h=>h.id===a.id?a:h),xe(u?"เปิดใช้งานรายการแล้ว":"ปิดใช้งานรายการแล้ว"),p()}))};p()}async function Ge(){var s,t,n,l,o,p,r,d;const e=Et();e.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>';try{const{event:u,cfg:a,shirtSizes:m}=await Ct();let h=m.map(y=>({...y}));const{data:f}=await ie.from("settings").select("value").eq("key","teacher_shirt_sizes").maybeSingle();let v=(Array.isArray(f==null?void 0:f.value)&&f.value.length?f.value:pr).map(y=>({...y}));const w=await Ys(ie),{data:$}=await ie.from("profiles").select("role,is_also_admin").eq("id",w).maybeSingle(),x=($==null?void 0:$.role)==="admin"||($==null?void 0:$.is_also_admin)===!0||await mr(w);if((a==null?void 0:a.shirt_summary_enabled)===!1&&!x){e.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}const{data:i}=await ie.from("sports_team_memberships").select("team_color_id,role,permissions").eq("event_id",u.id).eq("profile_id",w).eq("is_active",!0),j=x||(i||[]).some(y=>y.role==="lead_teacher"),[{data:_},C,{data:T}]=await Promise.all([ie.from("team_colors").select("id,name,hex_color").eq("event_id",u.id).order("display_order"),ia("sports_shirt_requests",y=>y.select("status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)").eq("event_id",u.id)),x?ie.from("sports_team_identity_requests").select("*,team_colors(name,logo_url)").eq("event_id",u.id).eq("status","pending_admin"):Promise.resolve({data:[]})]),D=m.map(y=>y.code),q=(C||[]).filter(y=>["confirmed","advisor_updated"].includes(y.status));if(e.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${x?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><div class="flex gap-2"><button id="open-sports-overview" type="button" class="px-4 py-2 bg-sky-600 text-white rounded-xl text-sm font-bold">📊 ภาพรวมกีฬาสี</button><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div></div><div class="grid md:grid-cols-4 gap-3">${vt("shirt_request_enabled","รับจำนงไซซ์เสื้อ","นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน",!!(a!=null&&a.shirt_request_enabled))}${vt("shirt_summary_enabled","หน้าสรุปยอดเสื้อ","ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้",!!(a!=null&&a.shirt_summary_enabled))}${vt("team_workspace_enabled","จัดการสีของฉัน","ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้",!!(a!=null&&a.team_workspace_enabled))}${vt("shirt_vote_enabled","โหวตแบบเสื้อกีฬาสี","นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้",!!(a!=null&&a.shirt_vote_enabled))}${vt("teacher_shirt_request_enabled","รับแจ้งไซซ์เสื้อคุณครู","คุณครูจะเห็นปุ่มแจ้งไซซ์ในหน้าภาพรวม แยกจากของนักเรียน",!!(a!=null&&a.teacher_shirt_request_enabled))}</div><div class="grid md:grid-cols-2 gap-3 mt-3"><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">ค่าบำรุงสี (บาท/คน)</h3><p class="text-xs text-gray-500 mt-1">จำนวนเงินเริ่มต้นที่จะบันทึกทุกครั้งที่สแกน QR เก็บค่าบำรุง</p><input id="cfg-dues-amount" type="number" min="0" step="1" value="${Number((a==null?void 0:a.dues_amount)??30)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (%)</h3><p class="text-xs text-gray-500 mt-1">ค่าเริ่มต้นทุกสี — พ่อสี/แม่สีแต่ละคนตั้งค่าเฉพาะสีตัวเองทับได้ในหน้าจัดการสี</p><input id="cfg-cert-threshold" type="number" min="0" max="100" step="1" value="${Number((a==null?void 0:a.cert_attendance_threshold_pct)??80)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div></div></section>`:""}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${(C==null?void 0:C.length)||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(C||[]).filter(y=>y.status==="pending").length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${q.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${D.map(y=>`<th>${re(y)}</th>`).join("")}<th>รวม</th></tr></thead><tbody>${(_||[]).map(y=>{const c=q.filter(g=>{var k;return((k=g.students)==null?void 0:k.house_color)===y.name});return`<tr class="border-t"><td class="p-3 font-bold" style="color:${y.hex_color}">สี${re(y.name)}</td>${D.map(g=>`<td class="text-center">${c.filter(k=>k.confirmed_size===g).length}</td>`).join("")}<td class="text-center font-bold">${c.length}</td></tr>`}).join("")}</tbody></table></div>${j?'<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>':""}${x?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${(T==null?void 0:T.map(y=>{var c;return`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${y.proposed_logo_url?`<img src="${re(y.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:""}<div class="flex-1"><b>ทีมสี${re((c=y.team_colors)==null?void 0:c.name)}</b><p class="text-xs text-gray-500">${re(y.proposed_name||y.proposed_motto||"เปลี่ยนโลโก้/อัตลักษณ์")}</p></div><button data-review="${y.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${y.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`}).join(""))||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:""}</div>`,x){const y=document.createElement("section");y.id="sports-gallery-type-admin",y.className="bg-white border rounded-2xl p-5";const c=e.querySelector("#sports-team-membership-admin");c?c.before(y):(s=e.querySelector(".max-w-7xl"))==null||s.appendChild(y),await kd(e,u),await bl(e.querySelector(".max-w-7xl")||e,u.id);const g=(t=e.querySelector("#cfg-dues-amount"))==null?void 0:t.closest(".grid");g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-violet-50 border-violet-200"><h3 class="font-bold text-sm text-violet-900">ค่าเสื้อกีฬาสี (บาท/คน)</h3><p class="text-xs text-violet-700 mt-1">ยอดที่ครูที่ปรึกษาศาสนาจะบันทึกเมื่อสแกนรับชำระ แยกชาย/หญิงเพราะราคาต่างกัน ตั้งเป็น 0 เพื่อปิดรับชำระของเพศนั้นชั่วคราว</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-violet-700">👦 ชาย</span><input id="cfg-shirt-payment-amount-m" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_m)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-violet-700">👧 หญิง</span><input id="cfg-shirt-payment-amount-w" type="number" min="0" step="1" value="${Number((a==null?void 0:a.shirt_payment_amount_w)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),(n=e.querySelector("#cfg-shirt-payment-amount-m"))==null||n.addEventListener("input",E=>{Ge.pendingCfg={...Ge.pendingCfg||{},shirt_payment_amount_m:Math.max(0,Number(E.target.value)||0)}}),(l=e.querySelector("#cfg-shirt-payment-amount-w"))==null||l.addEventListener("input",E=>{Ge.pendingCfg={...Ge.pendingCfg||{},shirt_payment_amount_w:Math.max(0,Number(E.target.value)||0)}}),g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-teal-50 border-teal-200"><h3 class="font-bold text-sm text-teal-900">📏 ไซซ์เริ่มต้นขั้นต่ำ</h3><p class="text-xs text-teal-700 mt-1">ไซซ์ที่เล็กกว่าที่เลือกจะถูกซ่อนจากตัวเลือกของกลุ่มนั้นอัตโนมัติ (เฉพาะตอนนักเรียนเลือกไซซ์เอง — ตารางสรุปยอดยังโชว์ครบทุกไซซ์)</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-teal-700">ม.ต้น (ม.1-3)</span><select id="cfg-shirt-size-min-junior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${m.map(E=>`<option value="${re(E.code)}" ${(a==null?void 0:a.shirt_size_min_junior)===E.code?"selected":""}>${re(E.code)}</option>`).join("")}</select></label><label class="block"><span class="text-xs text-teal-700">ม.ปลาย/ปวช (ม.4-6, ปวช.1-3)</span><select id="cfg-shirt-size-min-senior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${m.map(E=>`<option value="${re(E.code)}" ${((a==null?void 0:a.shirt_size_min_senior)||"M")===E.code?"selected":""}>${re(E.code)}</option>`).join("")}</select></label></div></div>`),g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-sky-50 border-sky-200"><h3 class="font-bold text-sm text-sky-900">🎽 วันเช็คชื่อเข้าสีวันแรก</h3><p class="text-xs text-sky-700 mt-1">เฉพาะวันนี้ ให้ครูที่ปรึกษา (สามัญ/ศาสนา) เช็คชื่อนักเรียนแทนฝ่ายสี (ฝ่ายสีเห็นข้อมูลอ่านอย่างเดียวชั่วคราว) เว้นว่างเพื่อปิดระบบนี้</p><input id="cfg-advisor-checkin-date" type="date" value="${re((a==null?void 0:a.advisor_checkin_date)||"")}" class="mt-3 w-full border border-sky-200 rounded-xl px-3 py-2 text-sm bg-white"><label class="flex items-center gap-2 mt-3 text-xs text-sky-800 cursor-pointer"><input id="cfg-advisor-checkin-backfill" type="checkbox" ${a!=null&&a.advisor_checkin_backfill_enabled?"checked":""} class="w-4 h-4">เปิดให้ครูที่ปรึกษาเช็คชื่อ<b>ย้อนหลัง</b>ได้ (เลือกวันที่จากปฏิทินปฏิบัติงาน ไม่จำกัดแค่วันที่ตั้งไว้ด้านบน — ใช้แก้ห้องที่ครูลา/ตกหล่น)</label></div>`),g==null||g.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-emerald-50 border-emerald-200 md:col-span-2"><h3 class="font-bold text-sm text-emerald-900">🏃 ช่วงเวลารับสมัครและแก้ไขข้อมูลนักกีฬา</h3><p class="text-xs text-emerald-700 mt-1">หลังปิดรับสมัคร สามารถเปิดช่วงแก้ไขข้อมูลเดิมให้ครูและสต๊าฟแต่ละสีได้ โดยแก้ได้เฉพาะนักกีฬาของสีตนเอง เช่น หมายเลขเสื้อ ไม่สามารถเพิ่มหรือถอนรายชื่อผ่านช่องทางนี้</p><div class="grid md:grid-cols-3 gap-2 mt-3"><label class="block"><span class="text-xs text-emerald-800">ปิดรับสมัคร</span><input id="cfg-athlete-registration-closes" type="datetime-local" value="${re(Sa(a==null?void 0:a.athlete_registration_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">เปิดให้ฝ่ายสีแก้ไข</span><input id="cfg-athlete-edit-opens" type="datetime-local" value="${re(Sa(a==null?void 0:a.athlete_edit_opens_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">ปิดการแก้ไข</span><input id="cfg-athlete-edit-closes" type="datetime-local" value="${re(Sa(a==null?void 0:a.athlete_edit_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),g==null||g.insertAdjacentHTML("afterend",'<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👕 ไซซ์เสื้อที่เปิดให้แจ้งได้</h3><button id="shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border">+ เพิ่มไซซ์</button></div><p class="text-xs text-gray-500 mb-3">ตั้งค่าที่นี่หรือฝั่ง AZIZGAMES ก็ได้ บันทึกในตารางเดียวกัน อีกฝั่งเห็นอัตโนมัติ — กด "บันทึกการตั้งค่า" ด้านบนเพื่อบันทึกด้วย</p><div id="shirt-size-rows" class="space-y-2"></div></div>');const k=()=>{const E=e.querySelector("#shirt-size-rows");E&&(E.innerHTML=h.map((B,H)=>`<div class="flex items-center gap-2" data-size-row="${H}"><input data-size-code value="${re(B.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-size-chest type="number" min="0" value="${re(B.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-size-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),E.querySelectorAll("[data-size-row]").forEach(B=>{const H=Number(B.dataset.sizeRow);B.querySelector("[data-size-code]").addEventListener("input",S=>{h[H].code=S.target.value}),B.querySelector("[data-size-chest]").addEventListener("input",S=>{h[H].chest=S.target.value}),B.querySelector("[data-size-remove]").addEventListener("click",()=>{h.splice(H,1),k()})}))};k(),e.querySelector("#shirt-size-add").addEventListener("click",()=>{h.push({code:"",chest:""}),k()}),(p=(o=e.querySelector("#shirt-size-rows"))==null?void 0:o.closest("div.rounded-2xl"))==null||p.insertAdjacentHTML("afterend",`<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👔 ไซซ์เสื้อคุณครู</h3><button id="teacher-shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border hidden">+ เพิ่มไซซ์</button></div><label class="flex items-center gap-2 text-xs text-gray-600 mb-3"><input id="teacher-shirt-use-student-sizes" type="checkbox" ${(a==null?void 0:a.teacher_shirt_use_student_sizes)!==!1?"checked":""} class="w-4 h-4">ใช้ตารางไซซ์เดียวกับนักเรียน (ปลดติ๊กเพื่อตั้งไซซ์แยกสำหรับครู)</label><div id="teacher-shirt-size-rows" class="space-y-2"></div></div>`);const b=()=>{const E=e.querySelector("#teacher-shirt-size-rows");E&&(E.innerHTML=v.map((B,H)=>`<div class="flex items-center gap-2" data-tsize-row="${H}"><input data-tsize-code value="${re(B.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-tsize-chest type="number" min="0" value="${re(B.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-tsize-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),E.querySelectorAll("[data-tsize-row]").forEach(B=>{const H=Number(B.dataset.tsizeRow);B.querySelector("[data-tsize-code]").addEventListener("input",S=>{v[H].code=S.target.value}),B.querySelector("[data-tsize-chest]").addEventListener("input",S=>{v[H].chest=S.target.value}),B.querySelector("[data-tsize-remove]").addEventListener("click",()=>{v.splice(H,1),b()})}))},L=()=>{var B;const E=(B=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:B.checked;e.querySelector("#teacher-shirt-size-rows").style.display=E?"none":"",e.querySelector("#teacher-shirt-size-add").classList.toggle("hidden",!!E)};b(),L(),e.querySelector("#teacher-shirt-use-student-sizes").addEventListener("change",L),e.querySelector("#teacher-shirt-size-add").addEventListener("click",()=>{v.push({code:"",chest:""}),b()})}e.querySelector("#shirt-export").onclick=()=>{const y=["รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ",...q.map(g=>{var k,b,L,E;return[(k=g.students)==null?void 0:k.student_code,(b=g.students)==null?void 0:b.full_name,(L=g.students)==null?void 0:L.main_room,(E=g.students)==null?void 0:E.house_color,g.confirmed_size,g.status].map(B=>`"${String(B||"").replaceAll('"','""')}"`).join(",")})],c=document.createElement("a");c.href=URL.createObjectURL(new Blob(["\uFEFF"+y.join(`
`)],{type:"text/csv"})),c.download="sports-shirt-summary.csv",c.click(),URL.revokeObjectURL(c.href)},e.querySelectorAll("[data-cfg]").forEach(y=>y.addEventListener("click",()=>{const c=y.dataset.enabled!=="true";y.dataset.enabled=c?"true":"false",Ge.pendingCfg={...Ge.pendingCfg||{},[y.dataset.cfg]:c},y.textContent=c?"ปิดใช้งาน":"เปิดใช้งาน",xe("เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน")})),(r=e.querySelector("#open-sports-overview"))==null||r.addEventListener("click",()=>gr()),(d=e.querySelector("#cfg-save"))==null||d.addEventListener("click",async()=>{var H,S,I,R,F,A,U;const y=z=>{var W;const O=(W=e.querySelector(z))==null?void 0:W.value;return O?new Date(O).toISOString():null},c=y("#cfg-athlete-registration-closes"),g=y("#cfg-athlete-edit-opens"),k=y("#cfg-athlete-edit-closes");if(g&&c&&new Date(g)<new Date(c))return xe("เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร","error");if(k&&g&&new Date(k)<=new Date(g))return xe("เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข","error");const b={shirt_request_enabled:!!(a!=null&&a.shirt_request_enabled),shirt_summary_enabled:!!(a!=null&&a.shirt_summary_enabled),team_workspace_enabled:!!(a!=null&&a.team_workspace_enabled),shirt_vote_enabled:!!(a!=null&&a.shirt_vote_enabled),teacher_shirt_request_enabled:!!(a!=null&&a.teacher_shirt_request_enabled),teacher_shirt_use_student_sizes:((H=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:H.checked)!==!1,dues_amount:Number((S=e.querySelector("#cfg-dues-amount"))==null?void 0:S.value)||30,cert_attendance_threshold_pct:Number((I=e.querySelector("#cfg-cert-threshold"))==null?void 0:I.value)||80,advisor_checkin_date:((R=e.querySelector("#cfg-advisor-checkin-date"))==null?void 0:R.value)||null,advisor_checkin_backfill_enabled:!!((F=e.querySelector("#cfg-advisor-checkin-backfill"))!=null&&F.checked),shirt_size_min_junior:((A=e.querySelector("#cfg-shirt-size-min-junior"))==null?void 0:A.value)||null,shirt_size_min_senior:((U=e.querySelector("#cfg-shirt-size-min-senior"))==null?void 0:U.value)||null,athlete_registration_closes_at:c,athlete_edit_opens_at:g,athlete_edit_closes_at:k,...Ge.pendingCfg||{}},{error:L}=await ie.from("sports_portal_settings").update({...b,updated_at:new Date().toISOString()}).eq("event_id",u.id);if(L)return xe(L.message,"error");const E=h.filter(z=>String(z.code||"").trim()).map(z=>({code:String(z.code).trim(),chest:Number(z.chest)||0}));if(E.length)try{await wd(E)}catch(z){xe("บันทึกไซซ์เสื้อไม่สำเร็จ: "+z.message,"error")}const B=v.filter(z=>String(z.code||"").trim()).map(z=>({code:String(z.code).trim(),chest:Number(z.chest)||0}));if(B.length)try{await _d(B)}catch(z){xe("บันทึกไซซ์เสื้อครูไม่สำเร็จ: "+z.message,"error")}try{await vd(b.shirt_request_enabled)}catch(z){console.warn("Unable to sync AZIZGAMES shirt button",z)}Ge.pendingCfg={},xe("บันทึกการเปิดใช้งานแล้ว"),Ge()}),e.querySelectorAll("[data-review]").forEach(y=>y.onclick=async()=>{const{error:c}=await ie.rpc("review_team_identity",{p_request:y.dataset.review,p_decision:y.dataset.decision,p_comment:null});if(c)return xe(c.message,"error");xe("บันทึกผลตรวจสอบแล้ว"),Ge()}),j&&Ft(e,u,_||[],{isAdmin:x,myTeamMemberships:i||[]})}catch(u){console.error(u),e.innerHTML=Lt()}}function Sd({wrap:e,items:s,placeholder:t="ค้นหา...",emptyLabel:n="-- เลือก --",photoClass:l="w-7 h-9 rounded object-cover flex-shrink-0 border",onChange:o=null}){let p=null,r=!1;e.style.position="relative",e.innerHTML=`
    <div class="ps-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ps-display flex-1 text-sm text-gray-400 truncate">${re(n)}</span>
      <svg class="ps-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ps-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100"><input class="ps-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${re(t)}" autocomplete="off"></div>
      <ul class="ps-list max-h-52 overflow-y-auto"></ul>
    </div>`;const d=e.querySelector(".ps-input"),u=e.querySelector(".ps-dropdown"),a=e.querySelector(".ps-search"),m=e.querySelector(".ps-list"),h=e.querySelector(".ps-display"),f=e.querySelector(".ps-arrow");function v(x=""){const i=x.toLowerCase(),j=s.filter(_=>!x||(_.label||"").toLowerCase().includes(i)||(_.sub||"").toLowerCase().includes(i));m.innerHTML=j.length?j.map(_=>{const C=(p==null?void 0:p.id)===_.id;return`<li data-id="${re(String(_.id))}" class="ps-opt px-3 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 ${C?"bg-indigo-50 font-semibold text-indigo-700":"text-gray-700"}">
        ${_.photo?`<img src="${re(_.photo)}" class="${l}">`:""}
        <span class="truncate">${re(_.label)}${_.sub?` <span class="text-xs text-gray-400 font-mono">${re(_.sub)}</span>`:""}</span>
      </li>`}).join(""):'<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบรายการ</li>',m.querySelectorAll(".ps-opt").forEach(_=>_.addEventListener("mousedown",C=>{C.preventDefault(),p=s.find(T=>String(T.id)===_.dataset.id)||null,h.textContent=p?p.label:n,h.classList.toggle("text-gray-400",!p),h.classList.toggle("text-gray-800",!!p),$(),o==null||o((p==null?void 0:p.id)??null)}))}function w(){r=!0,u.classList.remove("hidden"),f.style.transform="rotate(180deg)",a.value="",v(),setTimeout(()=>a.focus(),50)}function $(){r=!1,u.classList.add("hidden"),f.style.transform=""}return d.addEventListener("click",()=>r?$():w()),d.addEventListener("keydown",x=>{(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),r?$():w())}),a.addEventListener("input",()=>v(a.value.trim())),document.addEventListener("mousedown",x=>{r&&!e.contains(x.target)&&$()},!0),{getValue:()=>(p==null?void 0:p.id)??null,reset:()=>{p=null,h.textContent=n,h.classList.add("text-gray-400"),h.classList.remove("text-gray-800")}}}async function Ft(e,s,t=[],n={isAdmin:!1,myTeamMemberships:[]}){var m,h,f,v,w,$,x;const l=e.querySelector("#sports-team-membership-admin");if(!l)return;const o={lead_teacher:"หัวหน้าครูประจำสี",teacher:"ครูประจำสี",staff_lead:"หัวหน้านักเรียนสต๊าฟสี",staff:"นักเรียนสต๊าฟสี"},p={members:"สมาชิก",registrations:"ลงทะเบียนกีฬา",announcements:"ประกาศ",tasks:"งานของสี",shirt_summary:"สรุปเสื้อ",attendance:"เช็คชื่อ",dues:"เก็บค่าบำรุงสี",expenses:"บันทึกรายรับ-รายจ่ายสี",comp_assign:"มอบหมายรายการแข่งขัน"},r=i=>/^\s*(?:ม\.?\s*[456]|ปวช\.?\s*[123])(?:\s*\/|\s|$)/i.test(String((i==null?void 0:i.main_room)||"")),d=new Set((n.myTeamMemberships||[]).filter(i=>i.role==="lead_teacher").map(i=>i.team_color_id)),u=n.isAdmin?t:t.filter(i=>d.has(i.id)),a=!!n.isAdmin;if(!u.length){l.innerHTML='<div class="p-6 text-center text-gray-400">ยังไม่มีสีที่คุณมีสิทธิ์มอบหมายสต๊าฟ</div>';return}try{const[{data:i,error:j},{data:_},C]=await Promise.all([ie.from("sports_team_memberships").select("*,team_colors(name,hex_color),teachers(full_name,teacher_code),students(full_name,student_code,main_room)").eq("event_id",s.id).eq("is_active",!0).order("created_at",{ascending:!1}),ie.from("teachers").select("id,teacher_code,full_name,dept,image_url,profile_id").not("profile_id","is",null).order("full_name"),ia("students",H=>H.select("id,student_code,full_name,main_room,profile_id,is_active,image_url,team_color_id,house_color").order("student_code"))]);if(j)throw j;const T=new Set(u.map(H=>H.id)),D=(i||[]).filter(H=>n.isAdmin||T.has(H.team_color_id)),q=new Set((i||[]).filter(H=>H.role==="staff_lead").map(H=>H.team_color_id));let y=[];l.innerHTML=`<div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="font-bold">🛡️ มอบหมายผู้ดูแลประจำสี</h2><p class="text-xs text-gray-500 mt-1">${n.isAdmin?"แอดมินกำหนดครูประจำสีและนักเรียนสต๊าฟได้ทุกสี":"พ่อสี/แม่สีมอบหมายได้เฉพาะนักเรียนสต๊าฟในสีของตนเอง"}</p></div><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ใช้งานอยู่ ${(i==null?void 0:i.length)||0} คน</span></div>
      <div class="grid lg:grid-cols-5 gap-3 mb-4">
        <select id="team-member-color" class="team-field rounded-xl px-3 py-2 text-sm">${u.map(H=>`<option value="${re(H.id)}">สี${re(H.name)}</option>`).join("")}</select>
        <input id="team-member-code-input" class="team-field rounded-xl px-3 py-2 text-sm lg:col-span-2" placeholder="กรอกรหัสครู/รหัสนักเรียน เช่น 1087, 608001">
        <select id="team-member-role" class="team-field rounded-xl px-3 py-2 text-sm">
          ${a?'<option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option>':""}
          <option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option>
          <option value="staff">นักเรียนสต๊าฟสี</option>
        </select>
        <button id="team-member-search" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">ค้นหารายชื่อ</button>
      </div>
      <p class="text-[11px] text-gray-500 -mt-2 mb-3">มอบสิทธิ์นักเรียนระดับ ม.4–ม.6 และ ปวช.1–3 ที่อยู่สีเดียวกันและมีบัญชีเข้าใช้งานระบบแล้ว</p>
      <div class="flex flex-wrap gap-2 mb-4">${Object.entries(p).map(([H,S])=>ws(H,S,!0)).join("")}</div>
      <div id="team-member-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4">
        <p class="text-xs font-bold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบหมาย:</p>
        <div id="team-member-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div>
        <button id="team-member-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันและมอบหมายสิทธิ์ประจำสี</button>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 mt-2 mb-2"><h3 class="font-bold text-sm">📋 ตรวจสอบรายชื่อผู้ได้รับสิทธิ์</h3><span id="team-member-count" class="text-xs text-gray-500"></span></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <select id="team-member-filter-color" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${u.map(H=>`<option value="${re(H.id)}">สี${re(H.name)}</option>`).join("")}</select>
        <select id="team-member-filter-role" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกบทบาท</option><option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option><option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option><option value="staff">นักเรียนสต๊าฟสี</option></select>
        <input id="team-member-filter-search" class="team-field rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ/รหัสครู/รหัสนักเรียน...">
      </div>
      <div id="team-member-table-wrap"></div>`;const c=()=>{var F;const H=(F=l.querySelector("#team-member-color"))==null?void 0:F.value,S=l.querySelector("#team-member-role"),I=S==null?void 0:S.querySelector('option[value="staff_lead"]');if(!S||!I)return;const R=q.has(H);I.disabled=R,I.textContent=R?"หัวหน้านักเรียนสต๊าฟสี (มีแล้ว — เลือกนักเรียนสต๊าฟสีแทน)":"หัวหน้านักเรียนสต๊าฟสี",R&&S.value==="staff_lead"&&(S.value="staff")};c(),(m=l.querySelector("#team-member-color"))==null||m.addEventListener("change",c);const g=H=>{var S,I,R,F;return(S=H.teachers)!=null&&S.full_name?`${H.teachers.full_name}${H.teachers.teacher_code?` (${H.teachers.teacher_code})`:""}`:`${((I=H.students)==null?void 0:I.student_code)||""} ${((R=H.students)==null?void 0:R.full_name)||""} ${(F=H.students)!=null&&F.main_room?`· ${H.students.main_room}`:""}`},k=(H,S)=>{var F;(F=document.getElementById("team-member-edit-modal"))==null||F.remove();const I=document.createElement("div");I.id="team-member-edit-modal",I.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",I.setAttribute("role","dialog"),I.setAttribute("aria-modal","true"),I.innerHTML='<div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"><div class="p-5 border-b border-gray-100"><h3 class="font-bold text-gray-800">✏️ แก้ไขสิทธิ์</h3><p class="text-xs text-gray-500 mt-1">แตะเพื่อเปิด/ปิดสิทธิ์แต่ละอย่าง แล้วกดบันทึก</p></div><div class="p-5"><div id="team-member-edit-perms" class="flex flex-wrap gap-2"></div></div><div class="p-4 border-t border-gray-100 flex gap-2"><button id="team-member-edit-cancel" class="flex-1 py-2.5 rounded-xl border text-sm font-bold">ยกเลิก</button><button id="team-member-edit-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold">บันทึก</button></div></div>',document.body.appendChild(I);const R=I.querySelector("#team-member-edit-perms");R.innerHTML=Object.entries(p).map(([A,U])=>ws(A,U,(S==null?void 0:S[A])===!0)).join(""),R.querySelectorAll("[data-team-perm]").forEach(A=>A.addEventListener("click",()=>{const U=A.dataset.enabled!=="true";A.dataset.enabled=U?"true":"false",A.className=`px-3 py-2 rounded-xl text-xs font-bold border ${U?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const z=(A.textContent.split(":").pop()||"").trim();A.textContent=`${U?"อนุญาต":"ไม่อนุญาต"}: ${z}`})),I.querySelector("#team-member-edit-cancel").onclick=()=>I.remove(),I.onclick=A=>{A.target===I&&I.remove()},I.querySelector("#team-member-edit-save").onclick=async()=>{const A={};R.querySelectorAll("[data-team-perm]").forEach(z=>A[z.dataset.teamPerm]=z.dataset.enabled==="true");const{error:U}=await ie.from("sports_team_memberships").update({permissions:A}).eq("id",H);if(U)return xe(U.message,"error");I.remove(),xe("บันทึกสิทธิ์แล้ว"),Ft(e,s,t,n)}},b=()=>{var U,z,O;const H=((U=l.querySelector("#team-member-filter-color"))==null?void 0:U.value)||"",S=((z=l.querySelector("#team-member-filter-role"))==null?void 0:z.value)||"",I=(((O=l.querySelector("#team-member-filter-search"))==null?void 0:O.value)||"").trim().toLowerCase(),R=D.filter(W=>!(H&&W.team_color_id!==H||S&&W.role!==S||I&&!g(W).toLowerCase().includes(I))),F=l.querySelector("#team-member-count");F&&(F.textContent=`แสดง ${R.length} จาก ${D.length} คน`);const A=l.querySelector("#team-member-table-wrap");A.innerHTML=`<div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${R.map(W=>{var K,Q;const Y=g(W),M=Object.entries(W.permissions||{}).filter(([,Z])=>Z).map(([Z])=>p[Z]||Z).join(", ")||"ไม่มีสิทธิ์ย่อย",V=n.isAdmin||W.student_id&&["staff_lead","staff"].includes(W.role);return`<tr class="border-t"><td class="p-3 font-medium">${re(Y||"ไม่พบชื่อ")}</td><td class="p-3"><span class="font-bold" style="color:${re(((K=W.team_colors)==null?void 0:K.hex_color)||"#334155")}">สี${re(((Q=W.team_colors)==null?void 0:Q.name)||"—")}</span></td><td class="p-3">${re(o[W.role]||W.role)}</td><td class="p-3 text-xs text-gray-500">${re(M)}</td><td class="p-3 text-right whitespace-nowrap">${V?`<button data-team-member-edit="${re(W.id)}" data-perms='${re(JSON.stringify(W.permissions||{}))}' class="px-3 py-1.5 rounded-lg border text-indigo-600 text-xs mr-1">แก้ไขสิทธิ์</button><button data-team-member-remove="${re(W.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join("")||`<tr><td colspan="5" class="p-6 text-center text-gray-400">${D.length?"ไม่พบรายชื่อที่ตรงกับตัวกรอง":"ยังไม่มีผู้ได้รับสิทธิ์ประจำสี"}</td></tr>`}</tbody></table></div>`,A.querySelectorAll("[data-team-member-remove]").forEach(W=>W.addEventListener("click",async()=>{const{error:Y}=await ie.from("sports_team_memberships").update({is_active:!1,ends_at:new Date().toISOString()}).eq("id",W.dataset.teamMemberRemove);if(Y)return xe(Y.message,"error");xe("ปิดสิทธิ์แล้ว"),Ft(e,s,t,n)})),A.querySelectorAll("[data-team-member-edit]").forEach(W=>W.addEventListener("click",()=>{let Y={};try{Y=JSON.parse(W.dataset.perms||"{}")}catch{Y={}}k(W.dataset.teamMemberEdit,Y)}))};b(),(h=l.querySelector("#team-member-filter-color"))==null||h.addEventListener("change",b),(f=l.querySelector("#team-member-filter-role"))==null||f.addEventListener("change",b),(v=l.querySelector("#team-member-filter-search"))==null||v.addEventListener("input",b);const L=H=>String(H||"").split(/[\s,]+/).map(S=>S.trim()).filter(Boolean),E=H=>{var I;(I=document.getElementById("team-member-lookup-issue"))==null||I.remove();const S=document.createElement("div");S.id="team-member-lookup-issue",S.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",S.setAttribute("role","dialog"),S.setAttribute("aria-modal","true"),S.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"><div class="p-5 border-b border-red-100 bg-red-50"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-full bg-red-100 grid place-items-center text-xl flex-shrink-0">🔎</div><div><h3 class="font-bold text-red-800">ไม่สามารถเลือกรายชื่อนี้ได้</h3><p class="text-xs text-red-600 mt-1">ระบบตรวจสอบพบสาเหตุดังต่อไปนี้</p></div></div></div><div class="p-5 space-y-2 max-h-[55vh] overflow-y-auto">${H.map(R=>`<div class="rounded-xl border border-gray-200 p-3"><b class="text-sm text-gray-800">รหัส ${re(R.code)}</b><p class="text-xs text-gray-600 mt-1">${re(R.reason)}</p></div>`).join("")}</div><div class="p-4 border-t border-gray-100"><button id="team-member-lookup-close" class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold">รับทราบ</button></div></div>`,document.body.appendChild(S),S.querySelector("#team-member-lookup-close").onclick=()=>S.remove(),S.onclick=R=>{R.target===S&&S.remove()}},B=()=>{const H=l.querySelector("#team-member-preview"),S=l.querySelector("#team-member-preview-cards");if(!y.length){H==null||H.classList.add("hidden");return}H==null||H.classList.remove("hidden"),S.innerHTML=y.map(I=>`<div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">${I.image_url?`<img src="${re(I.image_url)}" class="${I.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} object-cover flex-shrink-0">`:`<div class="${I.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} bg-indigo-50 text-indigo-600 grid place-items-center font-bold flex-shrink-0">${I.kind==="teacher"?"ครู":"นร"}</div>`}<div class="min-w-0"><p class="font-bold text-gray-800 text-xs truncate">${re(I.full_name)} <span class="ml-1 px-1.5 py-0.5 rounded ${I.kind==="teacher"?"bg-amber-100 text-amber-800":"bg-emerald-100 text-emerald-800"} text-[9px] font-bold">${I.kind==="teacher"?"คุณครู":"นักเรียนสต๊าฟ"}</span></p><p class="text-[10px] text-gray-400">${re(I.detail)}</p></div></div>`).join("")};(w=l.querySelector("#team-member-search"))==null||w.addEventListener("click",()=>{var O,W;const H=L((O=l.querySelector("#team-member-code-input"))==null?void 0:O.value);if(!H.length)return xe("กรุณากรอกรหัสครูหรือรหัสนักเรียน","error");const S=(W=l.querySelector("#team-member-color"))==null?void 0:W.value,I=u.find(Y=>Y.id===S),R=new Set(H.map(String)),F=a?(_||[]).filter(Y=>R.has(String(Y.teacher_code))).map(Y=>({...Y,kind:"teacher",code:Y.teacher_code,detail:`รหัสครู ${Y.teacher_code} · กลุ่มสาระ ${Y.dept||"—"}`})):[],A=new Set(F.map(Y=>String(Y.code))),U=[],z=[];H.forEach(Y=>{if(A.has(String(Y)))return;const M=(C||[]).filter(K=>String(K.student_code)===String(Y));if(!M.length){z.push({code:Y,reason:"ไม่พบรหัสนักเรียนนี้ในฐานข้อมูล"});return}const V=M.find(K=>K.is_active)||M[0];if(!V.is_active){z.push({code:Y,reason:"บัญชีนักเรียนถูกปิดสถานะ ไม่ใช่นักเรียนที่กำลังใช้งาน"});return}if(!(V.team_color_id===S||V.house_color===(I==null?void 0:I.name))){z.push({code:Y,reason:`นักเรียนอยู่สี${V.house_color||"อื่น"} ไม่ใช่สี${(I==null?void 0:I.name)||"ที่เลือก"}`});return}if(!r(V)){z.push({code:Y,reason:`นักเรียนอยู่ห้อง ${V.main_room||"ไม่ระบุ"} ระบบอนุญาตให้มอบสิทธิ์เฉพาะ ม.4–ม.6 และ ปวช.1–3`});return}if(!V.profile_id){z.push({code:Y,reason:"นักเรียนยังไม่มีบัญชีเข้าใช้งานระบบ จึงยังผูกสิทธิ์ประจำสีไม่ได้"});return}U.push({...V,kind:"student",code:V.student_code,detail:`รหัส ${V.student_code} · ห้อง ${V.main_room||"—"} · สี${(I==null?void 0:I.name)||"—"}`})}),y=[...F,...U],z.length&&E(z),y.length&&B()}),($=l.querySelector("#team-member-code-input"))==null||$.addEventListener("keydown",H=>{var S;H.key==="Enter"&&(H.preventDefault(),(S=l.querySelector("#team-member-search"))==null||S.click())}),(x=l.querySelector("#team-member-add"))==null||x.addEventListener("click",async()=>{var A,U;const H=(A=l.querySelector("#team-member-role"))==null?void 0:A.value,S=(U=l.querySelector("#team-member-color"))==null?void 0:U.value;if(!S||!y.length)return xe("กรุณาเลือกสีและค้นหารายชื่อก่อน","error");if(!n.isAdmin&&!d.has(S))return xe("หัวหน้าครูประจำสีมอบหมายได้เฉพาะสีของตนเอง","error");if(y.some(z=>z.kind==="student")&&!["staff_lead","staff"].includes(H))return xe("บทบาทนี้ใช้กับครูเท่านั้น หากจะมอบหมายให้นักเรียนให้เลือกบทบาทนักเรียนสต๊าฟ","error");if(y.some(z=>z.kind==="teacher")&&!["lead_teacher","teacher"].includes(H))return xe("บทบาทนี้ใช้กับนักเรียนเท่านั้น หากจะมอบหมายให้ครูให้เลือกบทบาทครูประจำสี","error");if(H==="staff_lead"&&(q.has(S)||y.length>1))return xe("สีนี้มีหัวหน้านักเรียนสต๊าฟสีอยู่แล้ว หรือเลือกได้ทีละ 1 คนเท่านั้นสำหรับบทบาทนี้","error");const I={};l.querySelectorAll("[data-team-perm]").forEach(z=>I[z.dataset.teamPerm]=z.dataset.enabled==="true");const R=y.map(z=>({event_id:s.id,team_color_id:S,profile_id:z.profile_id,teacher_id:z.kind==="teacher"?Number(z.id):null,student_id:z.kind==="student"?Number(z.id):null,role:H,permissions:I,is_active:!0,ends_at:null})),{error:F}=await ie.from("sports_team_memberships").upsert(R,{onConflict:"event_id,team_color_id,profile_id"});if(F)return xe(F.message,"error");xe(`มอบหมายสิทธิ์ประจำสีแล้ว ${R.length} คน`),Ft(e,s,t,n)}),l.querySelectorAll("[data-team-perm]").forEach(H=>H.addEventListener("click",()=>{const S=H.dataset.enabled!=="true";H.dataset.enabled=S?"true":"false",H.className=`px-3 py-2 rounded-xl text-xs font-bold border ${S?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const I=(H.textContent.split(":").pop()||"").trim();H.textContent=`${S?"อนุญาต":"ไม่อนุญาต"}: ${I}`}))}catch(i){console.error(i),l.innerHTML='<div class="p-5 rounded-2xl bg-red-50 text-red-700 text-sm">โหลดหน้ามอบหมายผู้ดูแลสีไม่สำเร็จ</div>'}}async function Ed(){const e=Et();e.innerHTML='<div class="py-16 text-center">กำลังโหลดบัญชีเงินกีฬาสี...</div>';try{const{event:s}=await Ct(),[{data:t,error:n},{data:l,error:o}]=await Promise.all([ie.from("team_colors").select("id,name,hex_color,gender").eq("event_id",s.id).order("gender").order("display_order"),ie.from("sports_team_fund_entries").select("*").eq("event_id",s.id).in("category",["school_support","prize"]).order("entry_date",{ascending:!1}).order("created_at",{ascending:!1})]);if(n)throw n;if(o)throw o;let p=l||[];const r=u=>(t||[]).find(a=>a.id===u);e.innerHTML=`<div class="max-w-5xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">💰 บัญชีเงินกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">เพิ่ม/แก้ไข/ลบเงินสนับสนุนโรงเรียนและเงินรางวัลของแต่ละสี — ข้อมูลจะไปแสดงในหน้า "สีของฉัน" ของนักเรียนทุกคนทันที</p></div>
      <section class="bg-white border rounded-2xl p-5">
        <h2 class="font-bold mb-3">➕ เพิ่มรายการใหม่</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          <select id="fund-admin-color" class="border rounded-xl px-3 py-2 text-sm">${(t||[]).map(u=>`<option value="${re(u.id)}">สี${re(u.name)} (${u.gender==="M"?"ชาย":"หญิง"})</option>`).join("")}</select>
          <select id="fund-admin-category" class="border rounded-xl px-3 py-2 text-sm"><option value="school_support">เงินสนับสนุนโรงเรียน</option><option value="prize">เงินรางวัล</option></select>
          <input id="fund-admin-amount" type="number" min="1" step="1" placeholder="จำนวนเงิน" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-desc" type="text" placeholder="รายละเอียด เช่น ชนะเลิศฟุตซอลชาย ม.ต้น" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-date" type="date" value="${vs()}" class="border rounded-xl px-3 py-2 text-sm">
        </div>
        <button id="fund-admin-submit" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">➕ เพิ่มรายการ</button>
        <div id="fund-admin-status" class="text-xs text-gray-500 mt-2"></div>
      </section>
      <section class="bg-white border rounded-2xl overflow-hidden">
        <div class="p-4 border-b bg-gray-50"><h2 class="font-bold text-sm">📋 รายการทั้งหมด (${p.length})</h2></div>
        <div id="fund-admin-list" class="divide-y"></div>
      </section>
    </div>`;const d=()=>{const u=e.querySelector("#fund-admin-list");u.innerHTML=p.length?p.map(a=>{const m=r(a.team_color_id);return`<div class="p-3 flex items-center gap-3" data-fund-row="${re(a.id)}">
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
        </div>`}).join(""):'<p class="p-8 text-center text-gray-400 text-sm">ยังไม่มีรายการ</p>',u.querySelectorAll("[data-fund-del]").forEach(a=>a.onclick=async()=>{if(!confirm("ลบรายการนี้?"))return;const m=a.dataset.fundDel,{error:h}=await ie.from("sports_team_fund_entries").delete().eq("id",m);if(h){xe(h.message,"error");return}p=p.filter(f=>String(f.id)!==String(m)),xe("ลบรายการแล้ว"),d()}),u.querySelectorAll("[data-fund-edit]").forEach(a=>a.onclick=()=>{const m=a.dataset.fundEdit,h=u.querySelector(`[data-fund-row="${m}"]`),f=p.find(w=>String(w.id)===String(m)),v=h.querySelector("[data-fund-view]");v.innerHTML=`<div class="grid sm:grid-cols-3 gap-1.5">
          <input data-edit-amount type="number" min="1" step="1" value="${Number(f.amount)}" class="border rounded-lg px-2 py-1.5 text-xs">
          <input data-edit-desc type="text" value="${re(f.description)}" class="border rounded-lg px-2 py-1.5 text-xs sm:col-span-2">
          <input data-edit-date type="date" value="${f.entry_date}" class="border rounded-lg px-2 py-1.5 text-xs">
          <div class="flex gap-1.5"><button data-edit-save class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">บันทึก</button><button data-edit-cancel class="px-3 py-1.5 rounded-lg border text-xs font-bold">ยกเลิก</button></div>
        </div>`,v.querySelector("[data-edit-cancel]").onclick=()=>d(),v.querySelector("[data-edit-save]").onclick=async()=>{const w=Number(v.querySelector("[data-edit-amount]").value),$=v.querySelector("[data-edit-desc]").value.trim(),x=v.querySelector("[data-edit-date]").value;if(!w||w<=0||!$){xe("กรอกข้อมูลให้ครบ","error");return}const{error:i}=await ie.from("sports_team_fund_entries").update({amount:w,description:$,entry_date:x}).eq("id",m);if(i){xe(i.message,"error");return}Object.assign(f,{amount:w,description:$,entry_date:x}),xe("แก้ไขแล้ว"),d()}})};d(),e.querySelector("#fund-admin-submit").onclick=async()=>{const u=e.querySelector("#fund-admin-color").value,a=e.querySelector("#fund-admin-category").value,m=Number(e.querySelector("#fund-admin-amount").value),h=e.querySelector("#fund-admin-desc").value.trim(),f=e.querySelector("#fund-admin-date").value||vs(),v=e.querySelector("#fund-admin-status");if(!m||m<=0||!h){v.textContent="กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ",v.className="text-xs text-red-600 mt-2";return}const w=e.querySelector("#fund-admin-submit");w.disabled=!0;const{data:$,error:x}=await ie.from("sports_team_fund_entries").insert({event_id:s.id,team_color_id:u,category:a,amount:m,description:h,entry_date:f}).select().single();if(w.disabled=!1,x){v.textContent="บันทึกไม่สำเร็จ: "+x.message,v.className="text-xs text-red-600 mt-2";return}p.unshift($),e.querySelector("#fund-admin-amount").value="",e.querySelector("#fund-admin-desc").value="",v.textContent="",xe("เพิ่มรายการแล้ว"),d()}}catch(s){console.error(s),e.innerHTML=Lt()}}async function gr(){const e=Et();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดภาพรวมกีฬาสี...</div>';try{const{event:s}=await Ct(),[{data:t,error:n},{data:l}]=await Promise.all([ie.rpc("get_sports_admin_overview",{p_event:s.id}),ie.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);if(n)throw n;const o=(t==null?void 0:t.colors)||[],p=(t==null?void 0:t.attendance)||[],r=(t==null?void 0:t.dues)||[],d=(t==null?void 0:t.fund)||[],u=[...new Map(xr(l).map(_=>[_.date,_.label])).entries()].map(([_,C])=>({date:_,label:C})).sort((_,C)=>_.date<C.date?-1:1),a=u.map(_=>_.date),m=new Map(p.map(_=>[`${_.team_color_id}|${_.session_date}`,Number(_.checked_count)])),h=new Map(r.map(_=>[_.team_color_id,_])),f=new Map(d.map(_=>[_.team_color_id,_])),v=_=>_>=80?"bg-emerald-500":_>=50?"bg-amber-500":"bg-red-500",w=()=>a.length?`<div class="overflow-x-auto"><table class="w-full text-sm border-collapse">
        <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left sticky left-0 bg-gray-50 z-10">สี</th>${u.map(_=>`<th class="p-2 text-center whitespace-nowrap"><div>${re(_.date)}</div>${_.label?`<div class="text-[10px] font-normal text-gray-400">${re(_.label)}</div>`:""}</th>`).join("")}</tr></thead>
        <tbody>${o.map(_=>{const C=Number(_.member_count)||0;return`<tr class="border-b"><td class="p-2 font-bold sticky left-0 bg-white z-10" style="color:${re(_.hex_color)}">สี${re(_.name)}</td>${a.map(T=>{const D=m.get(`${_.id}|${T}`)||0,q=C?Math.round(D*100/C):0;return`<td class="p-2 text-center"><div class="inline-flex flex-col items-center gap-1"><span class="text-xs font-bold">${D}/${C}</span><div class="w-14 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full ${v(q)}" style="width:${q}%"></div></div></div></td>`}).join("")}</tr>`}).join("")}</tbody>
      </table></div>`:'<p class="text-sm text-gray-400 text-center py-10">ยังไม่มีวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน — ไปตั้งวันที่ในหน้าปฏิทินปฏิบัติงานก่อน</p>',$=()=>{const _=o.reduce((D,q)=>D+(Number(q.member_count)||0),0),C=r.reduce((D,q)=>D+(Number(q.paid_count)||0),0),T=r.reduce((D,q)=>D+(Number(q.total_amount)||0),0);return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-center">จ่ายแล้ว</th><th class="p-3 text-center">ยังไม่จ่าย</th><th class="p-3 text-center">%</th><th class="p-3 text-right">ยอดรวม (บาท)</th></tr></thead>
        <tbody>${o.map(D=>{const q=h.get(D.id)||{paid_count:0,total_amount:0},y=Number(D.member_count)||0,c=Number(q.paid_count)||0,g=y?Math.round(c*100/y):0;return`<tr class="border-b"><td class="p-3 font-bold" style="color:${re(D.hex_color)}">สี${re(D.name)}</td><td class="p-3 text-center">${c}</td><td class="p-3 text-center">${Math.max(0,y-c)}</td><td class="p-3 text-center">${g}%</td><td class="p-3 text-right font-bold">${Number(q.total_amount||0).toLocaleString("th-TH")}</td></tr>`}).join("")}
        <tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-center">${C}</td><td class="p-3 text-center">${Math.max(0,_-C)}</td><td class="p-3"></td><td class="p-3 text-right">${T.toLocaleString("th-TH")}</td></tr>
        </tbody>
      </table></div>`},x=()=>{let _=0,C=0,T=0,D=0;const q=o.map(c=>{const g=h.get(c.id)||{total_amount:0},k=f.get(c.id)||{school_support:0,prize:0,expense:0},b=Number(g.total_amount)||0,L=Number(k.school_support)||0,E=Number(k.prize)||0,B=Number(k.expense)||0,H=b+L+E-B;return _+=b,C+=L,T+=E,D+=B,`<tr class="border-b"><td class="p-3 font-bold" style="color:${re(c.hex_color)}">สี${re(c.name)}</td><td class="p-3 text-right">${b.toLocaleString("th-TH")}</td><td class="p-3 text-right">${L.toLocaleString("th-TH")}</td><td class="p-3 text-right">${E.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${B.toLocaleString("th-TH")}</td><td class="p-3 text-right font-bold ${H<0?"text-red-600":"text-emerald-600"}">${H.toLocaleString("th-TH")}</td></tr>`}).join(""),y=_+C+T-D;return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-right">ค่าบำรุง</th><th class="p-3 text-right">สนับสนุนโรงเรียน</th><th class="p-3 text-right">เงินรางวัล</th><th class="p-3 text-right">รายจ่าย</th><th class="p-3 text-right">คงเหลือ</th></tr></thead>
        <tbody>${q}<tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-right">${_.toLocaleString("th-TH")}</td><td class="p-3 text-right">${C.toLocaleString("th-TH")}</td><td class="p-3 text-right">${T.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${D.toLocaleString("th-TH")}</td><td class="p-3 text-right ${y<0?"text-red-600":"text-emerald-600"}">${y.toLocaleString("th-TH")}</td></tr></tbody>
      </table></div>`};e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">📊 ภาพรวมกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">สรุปเช็คชื่อรายวัน ค่าบำรุงสี และบัญชีของทุกสี เทียบกันในหน้าเดียว — ดูสถานะการประเมิน/คะแนนได้ที่หน้า "ประเมินกีฬาสี"</p></div>
      <div id="sports-ov-tabs" class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">
        <button type="button" data-ov-tab="attendance" class="px-4 py-2 rounded-lg text-sm font-bold transition">📷 เช็คชื่อรายวัน</button>
        <button type="button" data-ov-tab="dues" class="px-4 py-2 rounded-lg text-sm font-bold transition">💰 ค่าบำรุงสี</button>
        <button type="button" data-ov-tab="ledger" class="px-4 py-2 rounded-lg text-sm font-bold transition">📒 บัญชีสี</button>
      </div>
      <section class="bg-white border rounded-2xl p-5"><div id="sports-ov-body"></div></section>
    </div>`;let i="attendance";const j=()=>{e.querySelectorAll("[data-ov-tab]").forEach(_=>{const C=_.dataset.ovTab===i;_.className=`px-4 py-2 rounded-lg text-sm font-bold transition ${C?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}`}),e.querySelector("#sports-ov-body").innerHTML=i==="attendance"?w():i==="dues"?$():x()};e.querySelectorAll("[data-ov-tab]").forEach(_=>_.onclick=()=>{i=_.dataset.ovTab,j()}),j()}catch(s){console.error(s),e.innerHTML=Lt()}}const ht={parade:"🕌 ขบวนพาเหรด/ความร่วมมือสี",page:"📣 หน้าเว็บเพจ",color_eval:"🎨 วันเข้าสีเดิม",sports_day:"🏟️ วันกีฬาสีจริง"},Ea={แดง:"#ef4444",น้ำเงิน:"#3b82f6",เขียว:"#10b981",น้ำตาล:"#92400e",ส้ม:"#f97316",ฟ้า:"#0ea5e9",ม่วง:"#a855f7",เทา:"#6b7280"},Tt=["แดง","น้ำเงิน","เขียว","น้ำตาล"],jt=["ส้ม","ฟ้า","ม่วง","เทา"];async function lt(){const e=Et();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดหน้าประเมินกีฬาสี...</div>';try{const{event:s}=await Ct(),t=await Ys(ie),{data:n}=await ie.from("profiles").select("role,is_also_admin").eq("id",t).maybeSingle(),l=(n==null?void 0:n.role)==="admin"||(n==null?void 0:n.is_also_admin)===!0||await mr(t),o="pp5:"+t,[{data:p},{data:r},{data:d},u,{data:a},{data:m}]=await Promise.all([ie.from("team_colors").select("id,name,hex_color,logo_url,gender").eq("event_id",s.id).order("gender").order("display_order"),ie.from("sports_score_criteria").select("*").eq("event_id",s.id).eq("is_active",!0).order("category").order("display_order"),ie.from("sports_score_evaluators").select("*").eq("event_id",s.id).eq("profile_id",t).eq("is_active",!0),ia("sports_score_entries",G=>G.select("id,criteria_id,team_color_id,session_id,judge_username,score,updated_at").eq("event_id",s.id).order("updated_at",{ascending:!0}).order("id",{ascending:!0})),ie.from("color_totals").select("*").eq("event_id",s.id),ie.from("sports_evaluation_sessions").select("*").eq("event_id",s.id).order("session_type").order("day_no")]);let h={colors:[],attendance:[]},f=[],v=null;const w=l||(d||[]).length>0;if(w){const[{data:G,error:J},{data:de,error:oe}]=await Promise.all([ie.rpc("get_sports_attendance_overview",{p_event:s.id}),ie.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);h=G||{colors:[],attendance:[]},f=de||[],v=J||oe||null}let $=[],x=[],i=[];if(l){const[{data:G},{data:J},{data:de}]=await Promise.all([ie.from("sports_score_evaluators").select("*").eq("event_id",s.id).order("created_at",{ascending:!1}),ie.from("teachers").select("id,full_name,teacher_code,profile_id,image_url").order("full_name"),ie.from("sports_evaluation_judges").select("id,name,username,role,criteria_id").eq("event_id",s.id)]);$=G||[],x=(J||[]).filter(oe=>oe.profile_id),i=de||[]}const j=new Map(x.map(G=>[G.profile_id,G])),_=new Map((r||[]).map(G=>[G.id,G])),C=new Map((u||[]).filter(G=>G.judge_username===o).map(G=>[`${G.criteria_id}|${G.team_color_id}|${G.session_id||""}`,Number(G.score)])),T=new Set((d||[]).filter(G=>!G.criteria_id).map(G=>G.category)),D=new Set((d||[]).filter(G=>G.criteria_id).map(G=>G.criteria_id)),q=l?r||[]:(r||[]).filter(G=>T.has(G.category)||D.has(G.id)),y=[...new Set(q.map(G=>G.category))];let c="M",g=y[0]||null,k=null,b=null,L=!1,E="M",B=null,H="cumulative",S="ALL";const I=G=>{const J=String(G||"").indexOf(" - ");return J===-1?G:G.slice(0,J)};let R=null;const F=()=>{var $e;if(!q.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><p class="text-gray-400">คุณยังไม่ได้รับมอบหมายให้ประเมินหมวดใด — ติดต่อแอดมินเพื่อขอสิทธิ์ (ดูสรุปคะแนนได้ที่แท็บ "สรุปคะแนนทุกสี")</p></section>';const G=q.filter(he=>he.category===g),J=new Map;if(g==="sports_day")(m||[]).filter(he=>he.session_type==="sports_day").forEach(he=>{const ke=G.filter(Ce=>Ce.session_id===he.id);ke.length&&J.set(he.id,{label:he.name,criteria:ke})});else if(g==="color_eval"){(m||[]).filter(ke=>ke.session_type==="color_day").sort((ke,Ce)=>(ke.day_no||0)-(Ce.day_no||0)).forEach(ke=>{const Ce=G.filter(Be=>Be.session_id===ke.id);Ce.length&&J.set(ke.id,{label:ke.name,criteria:Ce})});const he=G.filter(ke=>!ke.session_id);he.length&&J.set("legacy",{label:"หัวข้อเดิมที่ยังไม่ผูกวัน",criteria:he})}else g==="page"||g==="parade"?G.length&&J.set("all",{label:"หัวข้อทั้งหมด",criteria:G}):G.forEach(he=>{const ke=I(he.name);J.has(ke)||J.set(ke,{label:ke,criteria:[]}),J.get(ke).criteria.push(he)});const de=[...J.keys()];(!k||!de.includes(k))&&(k=de[0]||null);const oe=J.get(k),X=(oe==null?void 0:oe.criteria)||G,ee=de.map(he=>J.get(he).label),pe=(m||[]).find(he=>he.id===k),ye=(pe==null?void 0:pe.status)==="closed"&&!l,be=(p||[]).filter(he=>he.gender===c);(!b||!be.some(he=>he.id===b))&&(b=(($e=be[0])==null?void 0:$e.id)||null);const ve=be.find(he=>he.id===b)||null,ge=he=>{const ke=X.map(Be=>C.get(`${Be.id}|${he.id}|${Be.session_id||""}`)),Ce=ke.filter(Be=>Be!==void 0).length;return{saved:Ce,total:ke.length,complete:ke.length>0&&Ce===ke.length}};return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div><h2 class="font-bold">📝 ให้คะแนนประเมิน</h2><p class="text-xs text-gray-500 mt-1">กรอกคะแนนแต่ละสีแล้วกดบันทึกด้านล่าง — แก้ไขซ้ำได้เสมอ</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-eval-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${c==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-eval-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${c==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        ${y.length>1?`<div class="flex flex-wrap gap-2 mb-4">${y.map(he=>`<button type="button" data-eval-cattab="${he}" class="px-4 py-2 rounded-xl text-xs font-bold border transition ${he===g?"bg-indigo-600 text-white border-indigo-600":"text-gray-600 border-gray-200 hover:bg-gray-50"}">${re(ht[he]||he)}</button>`).join("")}</div>`:""}
        ${de.length>1?`<div class="mb-4"><label class="text-xs font-bold text-gray-600 block mb-1.5">${g==="sports_day"?"🏟️ เลือกวันกีฬาสีจริง":"📅 เลือกรอบ/วันที่จะประเมิน"}</label><select id="eval-session-select" class="w-full sm:w-80 border rounded-xl px-3 py-2.5 text-sm font-bold">${de.map(he=>`<option value="${re(he)}" ${he===k?"selected":""}>${re(J.get(he).label)}</option>`).join("")}</select></div>`:""}
        <div class="sticky top-2 z-10 -mx-1 px-1 py-2 mb-3 bg-white/95 backdrop-blur">
          <div class="flex gap-2 overflow-x-auto pb-1">
            ${be.map((he,ke)=>{const Ce=(c==="W"?jt:Tt)[ke]||he.name,Be=Ea[Ce]||he.hex_color||"#94a3b8",ot=ge(he),Ye=he.id===b;return`<button type="button" data-eval-color="${he.id}" ${L&&!Ye?"disabled":""} class="flex-shrink-0 min-w-[92px] px-3 py-2 rounded-xl border text-left transition ${Ye?"ring-2 ring-indigo-500 border-indigo-400":"border-gray-200"} ${L&&!Ye?"opacity-50 cursor-not-allowed":""}" style="background:${re(Be)}12">
                <span class="block text-xs font-bold" style="color:${re(Be)}">สี${re(Ce)}</span>
                <span class="block text-[10px] text-gray-500 mt-0.5">${ot.complete?"✓ ครบแล้ว":ot.saved?`${ot.saved}/${ot.total} บันทึกแล้ว`:"ยังไม่เริ่ม"}</span>
              </button>`}).join("")}
          </div>
          ${ve?`          <p class="text-xs text-gray-500 mt-2">กำลังประเมิน: <b>สี${re((c==="W"?jt:Tt)[be.indexOf(ve)]||ve.name)}</b>${ye?" · ปิดรับคะแนนแล้ว":L?" · มีการแก้ไขที่ยังไม่ได้บันทึก":""}</p>`:""}
        </div>
        ${ve?(()=>{const he=be.indexOf(ve),ke=(c==="W"?jt:Tt)[he]||ve.name,Ce=Ea[ke]||ve.hex_color||"#94a3b8",Be=re((ke||"?").slice(0,1)),Ye=X.map(qe=>C.get(`${qe.id}|${ve.id}|${qe.session_id||""}`)).filter(qe=>qe!==void 0).reduce((qe,Ke)=>qe+Number(Ke||0),0),xt=X.reduce((qe,Ke)=>qe+Number(Ke.max_score||0),0),Qe=[["อีบาดัต",2],["ความสะอาด",3],["เข้าแถว/เช็คชื่อ",3],["นักกีฬา",3],["สต๊าฟ",4],["กองเชียร์",4]],gt=[];return X.forEach((qe,Ke)=>{var bt;const Dt=qe.group_name||qe.group_key,pa=g==="page"||g==="parade"?"หัวข้อทั้งหมด":g==="sports_day"?((bt=Qe.find(([,yt],ma)=>{const Za=Qe.slice(0,ma).reduce((nn,[,on])=>nn+on,0);return Ke>=Za&&Ke<Za+yt}))==null?void 0:bt[0])||"เกณฑ์อื่นๆ":I(qe.name),Ht=Dt||pa;let Ae=gt.find(yt=>yt.label===Ht);Ae||(Ae={label:Ht,criteria:[]},gt.push(Ae)),Ae.criteria.push(qe)}),`<div class="rounded-2xl border overflow-hidden" style="border-color:${re(Ce)}55">
            <div class="flex items-center gap-3 p-3" style="background:${re(Ce)}14">
              ${ve.logo_url?`<img data-color-logo src="${re(ve.logo_url)}" class="w-11 h-11 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${re(Ce)}"><div data-color-logo-fallback class="hidden w-11 h-11 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${re(Ce)}">${Be}</div>`:`<div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${re(Ce)}">${Be}</div>`}
              <div><b class="text-sm" style="color:${re(Ce)}">สี${re(ke)}</b><p class="text-xs text-gray-500 mt-0.5">รวม <span id="eval-current-total">${Ye}</span> / ${xt}</p></div>
            </div>
            <div class="p-3 space-y-2 bg-white">
              ${gt.map((qe,Ke)=>{const pa=qe.criteria.map(Ae=>C.get(`${Ae.id}|${ve.id}|${Ae.session_id||""}`)).filter(Ae=>Ae!==void 0).length,Ht=qe.criteria.reduce((Ae,bt)=>Ae+Number(bt.max_score||0),0);return`<details class="border rounded-xl overflow-hidden" ${Ke===0?"open":""}>
                  <summary class="cursor-pointer list-none flex items-center justify-between gap-3 px-3 py-2.5 bg-gray-50 hover:bg-gray-100">
                    <span class="text-xs font-bold text-gray-700">${re(qe.label)}</span>
                    <span class="text-[10px] text-gray-500">${pa}/${qe.criteria.length} ข้อ · เต็ม ${Ht}</span>
                  </summary>
                  <div class="p-3 space-y-2">
                    ${qe.criteria.map(Ae=>{const bt=C.get(`${Ae.id}|${ve.id}|${Ae.session_id||""}`),yt=I(Ae.name),ma=ee.length>1&&yt!==Ae.name?Ae.name.slice(yt.length+3):Ae.name;return`<div class="flex items-center justify-between gap-2">
                        <label class="text-xs text-gray-600 flex-1">${re(ma)}</label>
                        <div class="flex items-center gap-1 flex-shrink-0">
                          <input type="number" inputmode="numeric" min="0" max="${Number(Ae.max_score)}" step="1" value="${bt??""}" data-score-input data-crit="${Ae.id}" data-color="${ve.id}" ${ye?"disabled":""} class="w-16 border rounded-lg px-2 py-1.5 text-center text-sm">
                          <span class="text-[10px] text-gray-400 w-10">/ ${Number(Ae.max_score)}</span>
                        </div>
                      </div>`}).join("")}
                  </div>
                </details>`}).join("")}
            </div>
          </div>`})():""}
        <div class="sticky bottom-2 z-10 mt-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 backdrop-blur py-2">
          <span class="text-xs text-gray-500">${L?"กรุณาบันทึกก่อนเปลี่ยนสี":"เลือกสีจากแถบด้านบน"}</span>
          <button id="eval-submit" type="button" ${ye?"disabled":""} class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold disabled:opacity-50">${ye?"🔒 ปิดรับคะแนน":"💾 บันทึกสีนี้"}</button>
        </div>
      </section>`},A=()=>{const G=J=>J.map(de=>`<div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2" data-crit-row="${de.id}"><span class="flex-1 text-sm" data-crit-view>${re(de.name)}</span><span class="text-xs text-gray-500 w-20 text-right" data-crit-view>เต็ม ${Number(de.max_score)}</span><button type="button" data-crit-edit="${de.id}" class="px-2 py-1 text-xs border rounded-lg text-indigo-600">แก้ไข</button><button type="button" data-crit-del="${de.id}" class="px-2 py-1 text-xs border rounded-lg text-red-600">ลบ</button></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>';return["parade","page","color_eval","sports_day"].map(J=>{const de=(r||[]).filter(ee=>ee.category===J),oe=J==="color_eval"?(m||[]).filter(ee=>ee.session_type==="color_day").sort((ee,pe)=>(ee.day_no||0)-(pe.day_no||0)):J==="sports_day"?(m||[]).filter(ee=>ee.session_type==="sports_day").sort((ee,pe)=>ee.day_no-pe.day_no):[],X=oe.map(ee=>({label:ee.name,rows:de.filter(pe=>pe.session_id===ee.id)}));if(oe.length||X.push({label:"หัวข้อทั้งหมด",rows:de}),J==="color_eval"){const ee=de.filter(pe=>!pe.session_id);ee.length&&X.push({label:"หัวข้อเดิมที่ยังไม่ผูกวัน",rows:ee})}return`<div class="mb-4"><h4 class="text-sm font-bold text-gray-700 mb-2">${ht[J]}</h4><div class="space-y-2" data-crit-cat="${J}">${X.map((ee,pe)=>`<details class="border rounded-xl overflow-hidden" ${pe===0?"open":""}><summary class="cursor-pointer list-none flex items-center justify-between px-3 py-2 bg-gray-50 text-xs font-bold">${re(ee.label)}<span class="text-gray-500">${ee.rows.length} หัวข้อ</span></summary><div class="p-2 space-y-1.5">${G(ee.rows)}</div></details>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>'}</div></div>`}).join("")},U=()=>{if(!$.length)return'<p class="text-sm text-gray-400 text-center py-4">ยังไม่มีผู้ประเมิน</p>';const G=new Map;return $.forEach(J=>{G.has(J.profile_id)||G.set(J.profile_id,[]),G.get(J.profile_id).push(J)}),[...G.entries()].map(([J,de])=>{const oe=j.get(J);return`<div class="flex items-start gap-3 bg-gray-50 rounded-xl p-3 mb-2"><div class="flex-1 min-w-0"><b class="text-sm block truncate">${re((oe==null?void 0:oe.full_name)||"ไม่พบชื่อ (บัญชีอาจถูกลบ)")}</b><div class="flex flex-wrap gap-1.5 mt-1.5">${de.map(X=>{var ee;return`<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">${re(ht[X.category]||X.category)}${X.criteria_id?` · ${re(((ee=_.get(X.criteria_id))==null?void 0:ee.name)||"")}`:""}${X.role_label?` · ${re(X.role_label)}`:""}<button type="button" data-eval-del="${X.id}" class="ml-1 text-red-500 font-black">✕</button></span>`}).join("")}</div></div></div>`}).join("")},z=()=>`<div class="mb-6"><h3 class="font-bold text-sm mb-3">🏟️ วันกีฬาสีจริง</h3><div class="grid sm:grid-cols-2 gap-3">${(m||[]).filter(J=>J.session_type==="sports_day").sort((J,de)=>J.day_no-de.day_no).map(J=>`<div class="border rounded-xl p-3 space-y-2">
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
          ${A()}
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
          <h3 class="font-bold text-sm mb-3">🧑‍⚖️ ผู้ประเมิน (${$.length} รายการ)</h3>
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
    </section>`,W=G=>(r||[]).filter(J=>J.category===G).reduce((J,de)=>J+(Number(de.max_score)||0),0),Y=W("parade")||100,M=W("page")||100,V=W("color_eval")||100,K=new Map((a||[]).map(G=>[G.team_color_id,G])),Q=G=>(r||[]).map(J=>{const de=(u||[]).filter(X=>X.criteria_id===J.id&&X.team_color_id===G).map(X=>Number(X.score)),oe=de.length?Math.round(de.reduce((X,ee)=>X+ee,0)/de.length*100)/100:0;return{crit:J,avg:oe,count:de.length}}).filter(J=>J.count>0),Z=(G,J,de)=>`<div class="space-y-1"><div class="flex justify-between text-xs text-gray-500"><span>${re(G)}</span><span class="font-bold text-gray-700">${Number(J).toLocaleString("th-TH")} / ${Number(de).toLocaleString("th-TH")}</span></div><div class="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-indigo-500 rounded-full" style="width:${de?Math.min(100,J/de*100):0}%"></div></div></div>`,se=()=>{const G=(m||[]).filter(ee=>ee.session_type==="sports_day").sort((ee,pe)=>ee.day_no-pe.day_no);if(!G.length)return"";const J=(r||[]).filter(ee=>ee.category==="sports_day"),de=(ee,pe)=>J.filter(ye=>ye.session_id===pe).reduce((ye,be)=>{const ve=(u||[]).filter(ge=>ge.criteria_id===be.id&&ge.team_color_id===ee).map(ge=>Number(ge.score)).filter(Number.isFinite);return ye+(ve.length?ve.reduce((ge,$e)=>ge+$e,0)/ve.length:0)},0),oe=ee=>J.filter(pe=>pe.session_id===ee).reduce((pe,ye)=>pe+Number(ye.max_score||0),0),X=(p||[]).filter(ee=>ee.gender===E).map((ee,pe)=>{const ye=G.map($e=>de(ee.id,$e.id)),be=G.map(oe),ve=H==="cumulative"?ye.reduce(($e,he)=>$e+he,0):ye[Number(H)-1]||0,ge=H==="cumulative"?be.reduce(($e,he)=>$e+he,0):be[Number(H)-1]||0;return{c:ee,name:(E==="W"?jt:Tt)[pe]||ee.name,total:ve,max:ge,values:ye}}).sort((ee,pe)=>pe.total-ee.total);return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><h2 class="font-bold">🏟️ สรุปวันกีฬาสีจริง</h2><p class="text-xs text-gray-500 mt-1">คะแนนเฉลี่ยจากผู้ประเมิน แยกวันและสะสม 4 วัน</p></div>
          <div class="flex flex-wrap gap-1">${G.map(ee=>`<button type="button" data-summary-sports-day="${ee.day_no}" class="px-3 py-1.5 rounded-lg text-xs font-bold ${H===String(ee.day_no)?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">วันที่ ${ee.day_no}</button>`).join("")}<button type="button" data-summary-sports-day="cumulative" class="px-3 py-1.5 rounded-lg text-xs font-bold ${H==="cumulative"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">สะสม</button></div>
        </div>
        <div class="space-y-2">${X.map((ee,pe)=>`<div class="flex items-center gap-3 rounded-xl border p-3"><span class="w-7 text-center font-bold text-gray-400">#${pe+1}</span><span class="flex-1 font-bold">สี${re(ee.name)}</span><span class="font-black">${ee.total.toFixed(2)} / ${ee.max}</span></div>`).join("")}</div>
      </section>`},ae=()=>{const G=(p||[]).filter(oe=>oe.gender===E),J=E==="W"?jt:Tt,de=G.map((oe,X)=>{const ee=J[X]||oe.name,pe=K.get(oe.id)||{};return{c:oe,canonicalName:ee,t:pe,grand:Number(pe.grand_total)||0}}).sort((oe,X)=>X.grand-oe.grand);return`${se()}${Bd((a||[]).filter(oe=>oe.gender===E),null,E)}<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div><h2 class="font-bold">🏅 สรุปคะแนนทุกสี</h2><p class="text-xs text-gray-500 mt-1">รวมคะแนนกรรมการ + กีฬา + พื้นบ้าน/ทักษะ + อีบาดัต + เหรียญรางวัล ข้อมูลเดียวกับระบบกีฬาสีหลัก อัปเดตสด</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-sum-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${E==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-sum-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${E==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        <div class="space-y-3">
          ${de.map((oe,X)=>{const ee=Ea[oe.canonicalName]||oe.c.hex_color||"#94a3b8",pe=re(oe.canonicalName.slice(0,1)),ye=B===oe.c.id,be=Q(oe.c.id);return`<div class="rounded-2xl border overflow-hidden">
              <button type="button" data-toggle-expand="${oe.c.id}" class="w-full flex items-center justify-between gap-3 p-3.5" style="background:${re(ee)}14">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="w-6 text-center font-bold text-sm text-gray-400 flex-shrink-0">#${X+1}</span>
                  ${oe.c.logo_url?`<img data-color-logo src="${re(oe.c.logo_url)}" class="w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${re(ee)}"><div data-color-logo-fallback class="hidden w-10 h-10 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${re(ee)}">${pe}</div>`:`<div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${re(ee)}">${pe}</div>`}
                  <b class="text-sm truncate" style="color:${re(ee)}">สี${re(oe.canonicalName)}</b>
                </div>
                <div class="flex items-center gap-3 flex-shrink-0">
                  <span class="px-3.5 py-1.5 rounded-xl bg-gray-900 text-yellow-400 font-black text-sm">${oe.grand.toLocaleString("th-TH")}</span>
                  <span class="text-gray-400">${ye?"▲":"▼"}</span>
                </div>
              </button>
              ${ye?`<div class="p-4 border-t bg-gray-50 space-y-4">
                <div class="grid sm:grid-cols-2 gap-3">
                  ${Z("🕌 พาเหรด/ความร่วมมือสี",Number(oe.t.parade_total)||0,Y)}
                  ${Z("📣 หน้าเว็บเพจ",Number(oe.t.page_total)||0,M)}
                  ${Z("🎨 วันเข้าสี/วันกีฬาสีจริง",Number(oe.t.color_eval_total)||0,V)}
                  ${Z("🧹 วิชาการสะสม",Number(oe.t.academic_total)||0,100)}
                  ${Z("🏃 กีฬาสากล + กรีฑา",Number(oe.t.sports_total)||0,150)}
                  ${Z("🎯 พื้นบ้าน / ทักษะ",Number(oe.t.folk_skill_total)||0,150)}
                  ${Z("🕋 อีบาดัต",Number(oe.t.ibadat_total)||0,100)}
                </div>
                <div class="flex flex-wrap gap-2 text-xs font-bold">
                  <span class="px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700">🥇 ทอง ${Number(oe.t.gold_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">🥈 เงิน ${Number(oe.t.silver_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700">🥉 ทองแดง ${Number(oe.t.bronze_count)||0}</span>
                </div>
                <div class="border-t pt-3">
                  <p class="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">รายละเอียดคะแนนแยกหัวข้อ (เฉลี่ยจากผู้ประเมินทุกคน)</p>
                  ${be.length?`<div class="space-y-1.5">${be.map(ve=>{var ge;return`<div class="flex items-center justify-between gap-2 bg-white border rounded-lg px-3 py-2"><span class="text-xs text-gray-600">${re(((ge=ht[ve.crit.category])==null?void 0:ge.split(" ")[0])||"")} ${re(ve.crit.name)}</span><b class="text-xs">${ve.avg} / ${Number(ve.crit.max_score)}</b></div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 text-center py-3">ยังไม่มีผู้ประเมินให้คะแนน</p>'}
                </div>
              </div>`:""}
            </div>`}).join("")}
        </div>
      </section>`},me=j,ue=new Map;($||[]).forEach(G=>{ue.has(G.profile_id)||ue.set(G.profile_id,new Set),ue.get(G.profile_id).add(G.category)});const we=[...[...ue.entries()].map(([G,J])=>{var de;return{name:((de=me.get(G))==null?void 0:de.full_name)||"ไม่พบชื่อ",source:"ครู ปพ.5",categories:[...J],judgeUsername:"pp5:"+G}}),...(i||[]).map(G=>({name:G.name,source:"กรรมการ AZIZGAMES",categories:[G.role==="colorEval"?"color_eval":G.role],judgeUsername:G.username}))],Ie=new Map;(u||[]).forEach(G=>{Ie.has(G.judge_username)||Ie.set(G.judge_username,[]),Ie.get(G.judge_username).push(G)});const Te=(p||[]).length||8,Fe=(r||[]).map(G=>{const J=(u||[]).filter(ee=>ee.criteria_id===G.id),de=new Set(J.map(ee=>ee.team_color_id)).size,oe=new Set(J.map(ee=>ee.judge_username)).size,X=J.length?Math.round(J.reduce((ee,pe)=>ee+Number(pe.score),0)/J.length*100)/100:0;return{crit:G,colorsScored:de,judgesCount:oe,avg:X,submitted:J.length}}),Je=()=>`<section class="bg-white border rounded-2xl p-5 space-y-6">
      <div>
        <h2 class="font-bold mb-1">🧑‍⚖️ สถานะผู้ประเมิน</h2>
        <p class="text-xs text-gray-500 mb-3">ความครบถ้วนของแต่ละเกณฑ์ (${Te} สี) และสถานะการส่งคะแนนของผู้ประเมินทุกคน</p>
        <div class="overflow-x-auto"><table class="w-full text-sm">
          <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left">หัวข้อ</th><th class="p-2 text-center">สีที่มีคะแนน</th><th class="p-2 text-center">ผู้ประเมิน</th><th class="p-2 text-center">เฉลี่ย</th></tr></thead>
          <tbody>${Fe.map(G=>{var J;return`<tr class="border-b"><td class="p-2">${re(((J=ht[G.crit.category])==null?void 0:J.split(" ")[0])||"")} ${re(G.crit.name)}</td><td class="p-2 text-center ${G.colorsScored<Te?"text-amber-600 font-bold":"text-emerald-600 font-bold"}">${G.colorsScored}/${Te}</td><td class="p-2 text-center">${G.judgesCount}</td><td class="p-2 text-center font-bold">${G.submitted?G.avg+" / "+Number(G.crit.max_score):"—"}</td></tr>`}).join("")||'<tr><td colspan="4" class="p-6 text-center text-gray-400">ยังไม่มีหัวข้อเกณฑ์ในระบบ</td></tr>'}</tbody>
        </table></div>
      </div>
      <div>
        <h3 class="font-bold text-sm mb-3">รายชื่อผู้ประเมิน (${we.length} คน)</h3>
        <div class="space-y-2">${we.map(G=>{const J=Ie.get(G.judgeUsername)||[],de=J.length,oe=de?J.reduce((X,ee)=>ee.updated_at>X?ee.updated_at:X,J[0].updated_at):null;return`<div class="flex items-center justify-between gap-3 bg-gray-50 rounded-xl p-3"><div class="min-w-0"><b class="text-sm block truncate">${re(G.name)}</b><p class="text-xs text-gray-500 mt-0.5">${re(G.source)} · ${G.categories.map(X=>re(ht[X]||X)).join(", ")}</p></div><div class="text-right flex-shrink-0"><span class="px-3 py-1 rounded-full text-xs font-bold ${de?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-400"}">${de?de+" รายการ":"ยังไม่ส่งคะแนน"}</span>${oe?`<p class="text-[10px] text-gray-400 mt-1">ล่าสุด ${new Date(oe).toLocaleDateString("th-TH",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}</p>`:""}</div></div>`}).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีผู้ประเมินในระบบ</p>'}</div>
      </div>
    </section>`,P=()=>{if(v)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">⚠️</div><h2 class="font-bold text-gray-800">โหลดสรุปเช็คชื่อเข้าสีไม่สำเร็จ</h2><p class="text-xs text-gray-500 mt-2">กรุณารีเฟรชหน้า หรือตรวจสอบสิทธิ์ผู้ประเมินและการตั้งค่าปฏิทินกีฬาสี</p></section>';const G=h.colors||[],J=[...new Map(xr(f).map(ge=>[ge.date,ge.label])).entries()].map(([ge,$e])=>({date:ge,label:$e})).sort((ge,$e)=>ge.date<$e.date?-1:1);if(!G.length)return'<section class="bg-white border rounded-2xl p-8 text-center text-gray-400">ยังไม่มีข้อมูลสีในกิจกรรมนี้</section>';if(!J.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">📅</div><h2 class="font-bold text-gray-800">ยังไม่มีวันเข้าสีในปฏิทินปฏิบัติงาน</h2><p class="text-xs text-gray-500 mt-2">กรุณาตั้งวันเข้าสีหรือวันกีฬาสีจริงในปฏิทินก่อนดูเปอร์เซ็นต์</p></section>';const de=G.filter(ge=>S==="ALL"||ge.gender===S),oe=new Map((h.attendance||[]).map(ge=>[`${ge.team_color_id}|${ge.session_date}`,Number(ge.checked_count)||0])),X=(ge,$e)=>$e?Math.round(ge*1e3/$e)/10:0,ee=ge=>ge>=80?"text-emerald-600":ge>=50?"text-amber-600":"text-red-600",pe=de.map(ge=>{const $e=Number(ge.member_count)||0,he=J.map(Ce=>({checked:oe.get(`${ge.id}|${Ce.date}`)||0,total:$e,pct:X(oe.get(`${ge.id}|${Ce.date}`)||0,$e)})),ke=he.length?Math.round(he.reduce((Ce,Be)=>Ce+Be.pct,0)/he.length*10)/10:0;return{c:ge,total:$e,daily:he,average:ke}}),ye=J.map((ge,$e)=>{const he=pe.reduce((Ce,Be)=>Ce+Be.daily[$e].checked,0),ke=pe.reduce((Ce,Be)=>Ce+Be.total,0);return{checked:he,total:ke,pct:X(he,ke)}}),be=pe.reduce((ge,$e)=>ge+$e.total,0),ve=ye.length?Math.round(ye.reduce((ge,$e)=>ge+$e.pct,0)/ye.length*10)/10:0;return`<section class="bg-white border rounded-2xl p-5 space-y-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="font-bold">📷 สรุปเปอร์เซ็นต์การเช็คชื่อเข้าสี</h2><p class="text-xs text-gray-500 mt-1">คำนวณจากผู้ที่เช็คชื่อแล้ว ÷ สมาชิกทั้งหมดของสีนั้น แยกตามวันที่ตั้งไว้ในปฏิทินปฏิบัติงาน</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-attendance-gender="ALL" class="px-3 py-1.5 rounded-lg text-xs font-bold ${S==="ALL"?"bg-indigo-600 text-white":"text-gray-600"}">👥 ทุกสี</button>
            <button type="button" data-attendance-gender="M" class="px-3 py-1.5 rounded-lg text-xs font-bold ${S==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 สีชาย</button>
            <button type="button" data-attendance-gender="W" class="px-3 py-1.5 rounded-lg text-xs font-bold ${S==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 สีหญิง</button>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-3">
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 p-3"><p class="text-xs text-indigo-700">จำนวนสีที่แสดง</p><b class="text-2xl text-indigo-900">${pe.length}</b> <span class="text-xs text-indigo-700">สี</span></div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3"><p class="text-xs text-slate-600">สมาชิกตามสี</p><b class="text-2xl text-slate-900">${be.toLocaleString("th-TH")}</b> <span class="text-xs text-slate-600">คน</span></div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 p-3"><p class="text-xs text-emerald-700">เฉลี่ยรวมทุกวัน</p><b class="text-2xl ${ee(ve)}">${ve}%</b></div>
        </div>
        <div class="overflow-x-auto border rounded-xl">
          <table class="w-full text-sm border-collapse min-w-[760px]">
            <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left sticky left-0 bg-gray-50 z-10">สี</th><th class="p-3 text-center whitespace-nowrap">สมาชิก</th>${J.map(ge=>`<th class="p-3 text-center whitespace-nowrap"><div>${re(ge.date)}</div><div class="text-[10px] font-normal text-gray-400">${re(ge.label||"")}</div></th>`).join("")}<th class="p-3 text-center whitespace-nowrap">เฉลี่ยรายวัน</th></tr></thead>
            <tbody>${pe.map(ge=>`<tr class="border-b"><td class="p-3 font-bold sticky left-0 bg-white z-10" style="color:${re(ge.c.hex_color||"#475569")}">สี${re(ge.c.name)}</td><td class="p-3 text-center text-gray-600">${ge.total}</td>${ge.daily.map($e=>`<td class="p-3 text-center"><b class="${ee($e.pct)}">${$e.pct}%</b><div class="text-[10px] text-gray-400 mt-0.5">${$e.checked}/${$e.total}</div></td>`).join("")}<td class="p-3 text-center font-black ${ee(ge.average)}">${ge.average}%</td></tr>`).join("")}</tbody>
            <tfoot><tr class="bg-gray-50 font-bold"><td class="p-3 sticky left-0 bg-gray-50 z-10">รวมตามวันที่</td><td class="p-3 text-center">${be}</td>${ye.map(ge=>`<td class="p-3 text-center"><span class="${ee(ge.pct)}">${ge.pct}%</span><div class="text-[10px] text-gray-500 mt-0.5">${ge.checked}/${ge.total}</div></td>`).join("")}<td class="p-3 text-center ${ee(ve)}">${ve}%</td></tr></tfoot>
          </table>
        </div>
        <p class="text-[11px] text-gray-400">หมายเหตุ: ตัวหารสมาชิกใช้หลักเดียวกับหน้า “ภาพรวมกีฬาสี” และนับการเช็คชื่อซ้ำของคนเดิมในวันเดียวเป็น 1 คน</p>
      </section>`},ce=[{key:"score",label:"📝 ให้คะแนน",show:!0},{key:"summary",label:"🏅 สรุปคะแนนทุกสี",show:!0},{key:"attendance",label:"📷 เช็คชื่อเข้าสี (%)",show:w},{key:"status",label:"🧑‍⚖️ สถานะผู้ประเมิน",show:l},{key:"settings",label:"⚙️ ตั้งค่า",show:l}].filter(G=>G.show);let le=q.length?"score":l?"status":"summary";const ne=()=>{var G,J,de,oe;e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
        <div><h1 class="text-2xl font-bold">🧑‍⚖️ ประเมินกีฬาสี</h1><p class="text-sm text-gray-500">ให้คะแนน ดูสรุปผล และติดตามสถานะผู้ประเมิน ทุกอย่างในหน้าเดียว</p></div>
        <div class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">${ce.map(X=>`<button type="button" data-eval-main-tab="${X.key}" class="px-4 py-2 rounded-lg text-sm font-bold transition ${le===X.key?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}">${X.label}</button>`).join("")}</div>
        <div id="eval-tab-body">${le==="score"?F():le==="summary"?ae():le==="attendance"?P():le==="status"?Je():O()}</div>
      </div>`,e.querySelectorAll("[data-eval-main-tab]").forEach(X=>X.onclick=()=>{le=X.dataset.evalMainTab,ne()}),e.querySelectorAll("[data-eval-gender]").forEach(X=>X.onclick=()=>{if(L)return xe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนกลุ่มสี","warning");c=X.dataset.evalGender,b=null,ne()}),e.querySelectorAll("[data-eval-cattab]").forEach(X=>X.onclick=()=>{if(L)return xe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนหัวข้อ","warning");g=X.dataset.evalCattab,b=null,ne()}),e.querySelectorAll("[data-color-logo]").forEach(X=>X.onerror=()=>{X.classList.add("hidden");const ee=X.nextElementSibling;ee==null||ee.classList.remove("hidden"),ee==null||ee.classList.add("flex")}),(G=e.querySelector("#eval-session-select"))==null||G.addEventListener("change",X=>{if(L)return X.target.value=k||"",xe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนรอบ","warning");k=X.target.value,b=null,ne()}),e.querySelectorAll("[data-eval-color]").forEach(X=>X.onclick=()=>{if(L)return xe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนสลับสี","warning");b=X.dataset.evalColor,ne()}),e.querySelectorAll("[data-score-input]").forEach(X=>X.addEventListener("input",()=>{const ee=X.value.trim();ee!==""&&(Number(ee)<0||Number(ee)>Number(X.max))&&(X.value=Math.max(0,Math.min(Number(X.max),Number(ee)||0))),L=!0})),(J=e.querySelector("#eval-submit"))==null||J.addEventListener("click",async()=>{const X=[];if(e.querySelectorAll("[data-score-input]").forEach(be=>{const ve=String(be.value).trim();if(ve==="")return;const ge=_.get(be.dataset.crit);X.push({event_id:s.id,criteria_id:be.dataset.crit,team_color_id:be.dataset.color,session_id:(ge==null?void 0:ge.session_id)||null,judge_username:o,score:Number(ve),updated_at:new Date().toISOString()})}),!X.length)return xe("กรุณากรอกคะแนนอย่างน้อย 1 ช่อง","error");const ee=(m||[]).find(be=>be.id===k);if((ee==null?void 0:ee.status)==="closed"&&!l)return xe("รอบนี้ปิดรับคะแนนแล้ว","error");const pe=e.querySelector("#eval-submit");pe.disabled=!0,pe.textContent="กำลังบันทึก...";const{error:ye}=await ie.from("sports_score_entries").upsert(X,{onConflict:"criteria_id,team_color_id,judge_username"});if(pe.disabled=!1,pe.textContent="💾 บันทึกคะแนนประเมิน",ye)return xe(ye.message,"error");X.forEach(be=>C.set(`${be.criteria_id}|${be.team_color_id}|${be.session_id||""}`,be.score)),L=!1,xe("บันทึกคะแนนประเมินแล้ว"),ne()}),le==="summary"&&(e.querySelectorAll("[data-sum-gender]").forEach(X=>X.onclick=()=>{E=X.dataset.sumGender,B=null,ne()}),e.querySelectorAll("[data-toggle-expand]").forEach(X=>X.onclick=()=>{const ee=X.dataset.toggleExpand;B=B===ee?null:ee,ne()}),e.querySelectorAll("[data-summary-sports-day]").forEach(X=>X.onclick=()=>{H=X.dataset.summarySportsDay,ne()})),le==="attendance"&&e.querySelectorAll("[data-attendance-gender]").forEach(X=>X.onclick=()=>{S=X.dataset.attendanceGender,ne()}),!(le!=="settings"||!l)&&(R=Sd({wrap:e.querySelector("#eval-teacher-picker-wrap"),items:x.map(X=>({id:X.profile_id,label:X.full_name,sub:X.teacher_code,photo:X.image_url})),placeholder:"พิมพ์ชื่อครู...",emptyLabel:"-- เลือกครูผู้ประเมิน --",photoClass:"w-7 h-9 rounded object-cover flex-shrink-0 border"}),e.querySelectorAll("[data-session-save]").forEach(X=>X.addEventListener("click",async()=>{var be,ve,ge;const ee=X.dataset.sessionSave,pe={name:(be=e.querySelector(`[data-session-name="${ee}"]`))==null?void 0:be.value.trim(),event_date:((ve=e.querySelector(`[data-session-date="${ee}"]`))==null?void 0:ve.value)||null,status:(ge=e.querySelector(`[data-session-status="${ee}"]`))==null?void 0:ge.value,updated_at:new Date().toISOString()};if(!pe.name)return xe("กรุณาระบุชื่อวัน","error");const{error:ye}=await ie.from("sports_evaluation_sessions").update(pe).eq("id",ee);if(ye)return xe(ye.message,"error");xe("บันทึกวันกีฬาสีแล้ว"),lt()})),(de=e.querySelector("#crit-new-add"))==null||de.addEventListener("click",async()=>{const X=e.querySelector("#crit-new-category").value,ee=e.querySelector("#crit-new-session").value||null,pe=e.querySelector("#crit-new-name").value.trim(),ye=Number(e.querySelector("#crit-new-max").value);if(!pe||!ye||ye<=0)return xe("กรอกชื่อหัวข้อและคะแนนเต็มให้ครบ","error");if((X==="color_eval"||X==="sports_day")&&!ee)return xe("กรุณาเลือกรอบ/วันที่ของหัวข้อนี้","error");const be=(r||[]).filter(ge=>ge.category===X).length,{error:ve}=await ie.from("sports_score_criteria").insert({event_id:s.id,category:X,session_id:ee,name:pe,max_score:ye,display_order:be});if(ve)return xe(ve.message,"error");xe("เพิ่มหัวข้อแล้ว"),lt()}),e.querySelectorAll("[data-crit-edit]").forEach(X=>X.addEventListener("click",()=>{const ee=e.querySelector(`[data-crit-row="${X.dataset.critEdit}"]`),pe=_.get(X.dataset.critEdit);ee.innerHTML=`<input data-edit-name value="${re(pe.name)}" class="flex-1 border rounded-lg px-2 py-1.5 text-xs"><input data-edit-max type="number" min="1" value="${Number(pe.max_score)}" class="w-20 border rounded-lg px-2 py-1.5 text-xs"><button type="button" data-edit-save class="px-2 py-1 text-xs bg-emerald-600 text-white rounded-lg">บันทึก</button><button type="button" data-edit-cancel class="px-2 py-1 text-xs border rounded-lg">ยกเลิก</button>`,ee.querySelector("[data-edit-cancel]").onclick=()=>ne(),ee.querySelector("[data-edit-save]").onclick=async()=>{const ye=ee.querySelector("[data-edit-name]").value.trim(),be=Number(ee.querySelector("[data-edit-max]").value);if(!ye||!be||be<=0)return xe("กรอกข้อมูลให้ครบ","error");const{error:ve}=await ie.from("sports_score_criteria").update({name:ye,max_score:be}).eq("id",pe.id);if(ve)return xe(ve.message,"error");xe("แก้ไขแล้ว"),lt()}})),e.querySelectorAll("[data-crit-del]").forEach(X=>X.addEventListener("click",async()=>{if(!confirm("ลบหัวข้อนี้? คะแนนที่เคยให้ไว้ในหัวข้อนี้จะไม่ถูกนับต่อ"))return;const{error:ee}=await ie.from("sports_score_criteria").delete().eq("id",X.dataset.critDel);if(ee)return xe(ee.message,"error");xe("ลบหัวข้อแล้ว"),lt()})),(oe=e.querySelector("#eval-add-btn"))==null||oe.addEventListener("click",async()=>{const X=R==null?void 0:R.getValue();if(!X)return xe("เลือกครูก่อน","error");const ee=[...e.querySelectorAll("[data-eval-cat]:checked")].map(ve=>ve.dataset.evalCat);if(!ee.length)return xe("เลือกอย่างน้อย 1 หมวด","error");const pe=e.querySelector("#eval-role-label").value.trim()||null,ye=ee.map(ve=>({event_id:s.id,profile_id:X,category:ve,role_label:pe})),{error:be}=await ie.from("sports_score_evaluators").insert(ye);if(be)return be.code==="23505"?xe("มีบางหมวดที่มอบหมายให้ครูคนนี้ไว้แล้ว","error"):xe(be.message,"error");xe("เพิ่มผู้ประเมินแล้ว"),lt()}),e.querySelectorAll("[data-eval-del]").forEach(X=>X.addEventListener("click",async()=>{if(!confirm("ลบสิทธิ์ประเมินรายการนี้?"))return;const{error:ee}=await ie.from("sports_score_evaluators").delete().eq("id",X.dataset.evalDel);if(ee)return xe(ee.message,"error");xe("ลบแล้ว"),lt()})))};ne()}catch(s){console.error(s),e.innerHTML=Lt()}}async function dt(e="ชาย"){var t,n,l,o,p;const s=Et();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:r,cfg:d}=await Ct(),u=await Ws(ie),{data:a}=await ie.from("profiles").select("role,is_also_admin").eq("id",u.id).maybeSingle();if(!((a==null?void 0:a.role)==="admin"||(a==null?void 0:a.is_also_admin)===!0)){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:h,error:f},{data:v},{data:w}]=await Promise.all([ie.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",r.id).eq("gender",e).order("design_no"),ie.from("sports_shirt_vote_managers").select("*,teachers(full_name,teacher_code)").eq("event_id",r.id),ie.from("teachers").select("id,teacher_code,full_name,dept,profile_id").not("profile_id","is",null).order("full_name")]);if(f)throw f;(h||[]).forEach(_=>{_.sports_shirt_design_colors=(_.sports_shirt_design_colors||[]).sort((C,T)=>C.display_order-T.display_order)});let $=[];const x=_=>_?new Date(_).toISOString().slice(0,16):"",i=(h||[]).map(_=>`
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
    `).join(""),j=(v||[]).map(_=>{var C,T;return`<tr class="border-t"><td class="p-3">${re(((C=_.teachers)==null?void 0:C.full_name)||"ไม่พบชื่อ")}${(T=_.teachers)!=null&&T.teacher_code?` (${re(_.teachers.teacher_code)})`:""}</td><td class="p-3 text-right"><button data-vote-manager-remove="${_.id}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button></td></tr>`}).join("")||'<tr><td colspan="2" class="p-6 text-center text-gray-400">ยังไม่มีครูที่ได้รับสิทธิ์เพิ่ม</td></tr>';s.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <h1 class="text-2xl font-bold">🗳️ ตั้งค่าโหวตแบบเสื้อกีฬาสี</h1>
      <div class="bg-white border rounded-2xl p-5">
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">เปิดโหวตตั้งแต่</label><input id="vote-opens-at" type="datetime-local" value="${x(d==null?void 0:d.shirt_vote_opens_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ปิดโหวตเมื่อ</label><input id="vote-closes-at" type="datetime-local" value="${x(d==null?void 0:d.shirt_vote_closes_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-window-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกช่วงเวลาโหวต (ใช้ร่วมกันทั้งชาย-หญิง)</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">🌐 โหมดโหวตสาธารณะ (ไม่ต้องล็อกอิน)</h3>
        <p class="text-xs text-gray-500 mb-3">เปิดหน้าแยกให้นักเรียนกรอกรหัสนักเรียนเข้าโหวตได้โดยไม่ต้องล็อกอิน ปพ.5 — เหมาะกับจุดโหวตหน้างาน (kiosk) เข้าที่ <code>shirt-vote-public.html</code></p>
        <div class="mb-3">${vt("shirt_vote_public_enabled","เปิดโหมดโหวตไม่ล็อกอิน","นักเรียนกรอกรหัสนักเรียนแล้วเข้าโหวตได้ทันที",!!(d!=null&&d.shirt_vote_public_enabled))}</div>
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
        <div class="grid md:grid-cols-2 gap-4">${i}</div>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">👤 มอบสิทธิ์ครูดูแดชบอร์ดผลโหวต</h3>
        <div class="flex gap-2 mb-3"><input id="vote-manager-code-input" class="flex-1 border rounded-xl px-3 py-2 text-sm" placeholder="กรอกรหัสครู เช่น 1087, 1092"><button id="vote-manager-search" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">ค้นหา</button></div>
        <div id="vote-manager-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4"><div id="vote-manager-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div><button id="vote-manager-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันมอบสิทธิ์</button></div>
        <div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ครู</th><th></th></tr></thead><tbody>${j}</tbody></table></div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-gender]").forEach(_=>_.addEventListener("click",()=>dt(_.dataset.voteGender))),s.querySelectorAll("[data-color-image]").forEach(_=>_.addEventListener("change",()=>{var D;const C=(D=_.files)==null?void 0:D[0];if(!C)return;const T=s.querySelector(`[data-color-preview="${_.dataset.colorImage}"]`);T&&(T.innerHTML=`<img src="${URL.createObjectURL(C)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`)})),(t=s.querySelector("#vote-window-save"))==null||t.addEventListener("click",async()=>{var D,q;const _=(D=s.querySelector("#vote-opens-at"))==null?void 0:D.value,C=(q=s.querySelector("#vote-closes-at"))==null?void 0:q.value,{error:T}=await ie.from("sports_portal_settings").update({shirt_vote_opens_at:_?new Date(_).toISOString():null,shirt_vote_closes_at:C?new Date(C).toISOString():null,updated_at:new Date().toISOString()}).eq("event_id",r.id);if(T)return xe(T.message,"error");xe("บันทึกช่วงเวลาโหวตแล้ว"),dt(e)}),s.querySelectorAll('[data-cfg="shirt_vote_public_enabled"]').forEach(_=>_.addEventListener("click",()=>{const C=_.dataset.enabled!=="true";_.dataset.enabled=C?"true":"false",_.textContent=C?"ปิดใช้งาน":"เปิดใช้งาน"})),(n=s.querySelector("#vote-public-save"))==null||n.addEventListener("click",async()=>{var D,q,y,c;const _=s.querySelector('[data-cfg="shirt_vote_public_enabled"]'),C={shirt_vote_public_enabled:(_==null?void 0:_.dataset.enabled)==="true",shirt_vote_tutorial_url:((q=(D=s.querySelector("#vote-public-tutorial-url"))==null?void 0:D.value)==null?void 0:q.trim())||null,shirt_vote_intro_url:((c=(y=s.querySelector("#vote-public-intro-url"))==null?void 0:y.value)==null?void 0:c.trim())||null,updated_at:new Date().toISOString()},{error:T}=await ie.from("sports_portal_settings").update(C).eq("event_id",r.id);if(T)return xe(T.message,"error");xe("บันทึกโหมดโหวตสาธารณะแล้ว"),dt(e)}),s.querySelectorAll("[data-design-save]").forEach(_=>_.addEventListener("click",async()=>{var q,y,c,g,k,b;const C=_.dataset.designSave,T=((y=(q=s.querySelector(`[data-design-name="${C}"]`))==null?void 0:q.value)==null?void 0:y.trim())||null,D=(g=(c=s.querySelector(`[data-design-html="${C}"]`))==null?void 0:c.files)==null?void 0:g[0];_.disabled=!0,_.textContent="กำลังบันทึก...";try{const L={name:T,updated_at:new Date().toISOString()};D&&(L.html_url=await el(C,D));const{error:E}=await ie.from("sports_shirt_designs").update(L).eq("id",C);if(E)throw E;const B=s.querySelectorAll(`[data-color-design="${C}"]`);for(const H of B){const S=(k=H.files)==null?void 0:k[0];if(!S)continue;const I=H.dataset.colorImage,R=await tl(C,I,S),{error:F}=await ie.from("sports_shirt_design_colors").update({image_url:R,updated_at:new Date().toISOString()}).eq("id",I);if(F)throw F}xe("บันทึกแบบเสื้อแล้ว"),dt(e)}catch(L){xe(L.message,"error"),_.disabled=!1,_.textContent=`บันทึกแบบที่ ${((b=(h||[]).find(E=>E.id===C))==null?void 0:b.design_no)||""}`}})),(l=s.querySelector("#vote-manager-search"))==null||l.addEventListener("click",()=>{var q;const _=String(((q=s.querySelector("#vote-manager-code-input"))==null?void 0:q.value)||"").split(/[\s,]+/).map(y=>y.trim()).filter(Boolean);if(!_.length)return xe("กรุณากรอกรหัสครู","error");const C=new Set(_.map(String));if($=(w||[]).filter(y=>C.has(String(y.teacher_code))),!$.length)return xe("ไม่พบรหัสครูที่ตรงกัน","error");const T=s.querySelector("#vote-manager-preview"),D=s.querySelector("#vote-manager-preview-cards");T.classList.remove("hidden"),D.innerHTML=$.map(y=>`<div class="bg-white rounded-xl border border-indigo-100 p-3"><p class="font-bold text-gray-800 text-xs">${re(y.full_name)}</p><p class="text-[10px] text-gray-400">รหัสครู ${re(y.teacher_code)} · กลุ่มสาระ ${re(y.dept||"—")}</p></div>`).join("")}),(o=s.querySelector("#vote-manager-code-input"))==null||o.addEventListener("keydown",_=>{var C;_.key==="Enter"&&(_.preventDefault(),(C=s.querySelector("#vote-manager-search"))==null||C.click())}),(p=s.querySelector("#vote-manager-add"))==null||p.addEventListener("click",async()=>{if(!$.length)return xe("กรุณาค้นหารายชื่อก่อน","error");const _=$.map(T=>({event_id:r.id,teacher_id:T.id,profile_id:T.profile_id,granted_by:null})),{error:C}=await ie.from("sports_shirt_vote_managers").upsert(_,{onConflict:"event_id,teacher_id"});if(C)return xe(C.message,"error");xe(`มอบสิทธิ์แล้ว ${_.length} คน`),dt(e)}),s.querySelectorAll("[data-vote-manager-remove]").forEach(_=>_.addEventListener("click",async()=>{const{error:C}=await ie.from("sports_shirt_vote_managers").delete().eq("id",_.dataset.voteManagerRemove);if(C)return xe(C.message,"error");xe("ปิดสิทธิ์แล้ว"),dt(e)}))}catch(r){console.error(r),s.innerHTML=Lt()}}async function br(e="ชาย"){const s=Et();s.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:t}=await Ct(),n=await Ws(ie),{data:l}=await ie.from("profiles").select("role,is_also_admin").eq("id",n.id).maybeSingle(),o=(l==null?void 0:l.role)==="admin"||(l==null?void 0:l.is_also_admin)===!0,{data:p}=await ie.from("sports_shirt_vote_managers").select("id").eq("event_id",t.id).eq("profile_id",n.id).maybeSingle();if(!o&&!p){s.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:r,error:d},u]=await Promise.all([ie.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",t.id).eq("gender",e).order("design_no"),ia("sports_shirt_votes",i=>i.select("design_id").eq("event_id",t.id))]);if(d)throw d;const a=new Set((r||[]).map(i=>i.id)),m={};(u||[]).forEach(i=>{a.has(i.design_id)&&(m[i.design_id]=(m[i.design_id]||0)+1)});const h=Object.values(m).reduce((i,j)=>i+j,0),f=Math.max(0,...(r||[]).map(i=>m[i.id]||0)),v=[...r||[]].sort((i,j)=>(m[j.id]||0)-(m[i.id]||0)),w=i=>i===0?"🥇":i===1?"🥈":i===2?"🥉":`#${i+1}`,$={},x=v.map((i,j)=>{const _=m[i.id]||0,C=h?Math.round(_/h*100):0,T=(i.sports_shirt_design_colors||[]).filter(y=>y.image_url);$[i.id]=T.length?Math.floor(Math.random()*T.length):0;const D=T[$[i.id]]||null;return`
        <div class="flex items-center gap-4 p-3 rounded-2xl ${_>0&&_===f?"bg-indigo-50/60":""}">
          <span class="w-8 text-center text-sm font-bold text-gray-400 flex-shrink-0">${w(j)}</span>
          <div class="relative flex-shrink-0">
            ${D!=null&&D.image_url?`<img data-shirt-dash-img="${i.id}" src="${re(D.image_url)}" class="w-14 h-14 object-contain bg-gray-50 rounded-xl border">`:'<div class="w-14 h-14 bg-gray-50 rounded-xl border grid place-items-center text-gray-300 text-xl">👕</div>'}
            ${T.length>1?`<button data-shirt-dash-swap="${i.id}" class="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center text-[11px]" title="สลับสี">🔄</button>`:""}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-700 truncate mb-1">${re(i.name||`แบบที่ ${i.design_no}`)}</p>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden"><div class="bg-indigo-500 h-full rounded-full transition-all" style="width:${C}%"></div></div>
              <span class="w-24 text-xs text-right text-gray-500 flex-shrink-0">${_} คน (${C}%)</span>
            </div>
          </div>
        </div>
      `}).join("");s.innerHTML=`<div class="max-w-3xl mx-auto space-y-5">
      <div class="flex items-center justify-between"><h1 class="text-2xl font-bold">📊 ผลโหวตแบบเสื้อกีฬาสี</h1><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">โหวตแล้ว ${h} คน</span></div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-dash-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="ชาย"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👦 ชาย</button>
          <button data-vote-dash-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="หญิง"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👧 หญิง</button>
        </div>
        <div class="divide-y divide-gray-50">${x||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีแบบเสื้อของเพศนี้</p>'}</div>
      </div>
    </div>`,s.querySelectorAll("[data-vote-dash-gender]").forEach(i=>i.addEventListener("click",()=>br(i.dataset.voteDashGender))),s.querySelectorAll("[data-shirt-dash-swap]").forEach(i=>i.addEventListener("click",()=>{const j=i.dataset.shirtDashSwap,_=(r||[]).find(D=>D.id===j),C=((_==null?void 0:_.sports_shirt_design_colors)||[]).filter(D=>D.image_url);if(!C.length)return;$[j]=(($[j]||0)+1)%C.length;const T=s.querySelector(`[data-shirt-dash-img="${j}"]`);T&&(T.src=C[$[j]].image_url)}))}catch(t){console.error(t),s.innerHTML=Lt()}}const yr="sports_offline_queue",fr=()=>{try{return JSON.parse(localStorage.getItem(yr)||"[]")}catch{return[]}},Ld=e=>localStorage.setItem(yr,JSON.stringify(e));let La=!1;const Cd=new Set;function Id(){const e=fr();Cd.forEach(s=>{try{s(e)}catch(t){console.warn(t)}})}async function Td(e){const s=e.type==="attendance"?"sports_attendance":"sports_team_dues",{error:t}=await ie.from(s).insert(e.payload);if(t&&t.code!=="23505")throw t}async function jd(){if(La)return;let e=fr();if(!e.length)return;La=!0;let s=0;for(const t of e)try{await Td(t),s++}catch{break}La=!1,s>0&&(e=e.slice(s),Ld(e),Id())}window.addEventListener("online",()=>jd());const Bt=[{key:"sports_total",label:"คะแนนกีฬา (สากล + กรีฑา)",icon:"🏃"},{key:"folk_skill_total",label:"กีฬาพื้นบ้าน / ทักษะ",icon:"🎯"},{key:"parade_total",label:"พาเหรด (สวนสนาม)",icon:"🕌"},{key:"page_total",label:"เพจ Facebook",icon:"📣"},{key:"ibadat_total",label:"คะแนนอีบาดัต",icon:"🕋"},{key:"grand_total",label:"คะแนนรวมทั้งหมด",icon:"🏆"}],Bd=(e,s,t,n=5)=>{const l=(e||[]).filter(r=>!t||r.gender===t),o=Bt[n]||Bt[5],p=[...l].sort((r,d)=>(Number(d[o.key])||0)-(Number(r[o.key])||0));return`<section class="bg-white border rounded-2xl p-5">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
      <div><h2 class="font-bold">📊 อันดับคะแนนแยกหมวด</h2><p class="text-xs text-gray-500 mt-1">เปรียบเทียบเฉพาะสี${t==="W"?"หญิง":"ชาย"} · คะแนนกีฬา = กีฬาสากลรวมกรีฑา</p></div>
    </div>
    <div class="rounded-2xl border bg-gray-50 p-4">
      <div class="flex items-center justify-between gap-3 mb-3">
        <button type="button" data-sports-rank-nav="prev" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===0?"disabled":""} aria-label="ดูหมวดก่อนหน้า">‹</button>
        <div class="text-center min-w-0"><div class="text-lg">${o.icon}</div><h3 class="text-sm font-bold text-gray-700">อันดับ${o.label}</h3><p class="text-[10px] text-gray-400">หมวด ${n+1} / ${Bt.length}</p></div>
        <button type="button" data-sports-rank-nav="next" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===Bt.length-1?"disabled":""} aria-label="ดูหมวดถัดไป">›</button>
      </div>
      <div class="flex justify-center gap-1.5 mb-3">${Bt.map((r,d)=>`<button type="button" data-sports-rank-index="${d}" aria-label="ดู${r.label}" class="h-2 rounded-full transition ${d===n?"w-5 bg-indigo-600":"w-2 bg-gray-300"}"></button>`).join("")}</div>
      <div class="space-y-1.5">${p.map((r,d)=>`<div class="flex items-center gap-2 text-sm rounded-xl bg-white px-3 py-2 ${r.color_name===s?"font-black text-indigo-700 ring-1 ring-indigo-200":""}"><span class="w-7 text-center text-gray-400">#${d+1}</span><span class="flex-1 truncate">สี${re(r.color_name)}</span><b>${Number(r[o.key]||0).toLocaleString("th-TH")}</b></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีคะแนน</p>'}</div>
    </div>
  </section>`};async function qd(){Ts(!0);const{data:{session:e}}=await ie.auth.getSession();if(!e)return window.location.replace("index.html"),null;const{data:s,error:t}=await ie.from("profiles").select("role, is_also_admin").eq("id",e.user.id).maybeSingle();return t||(s==null?void 0:s.role)!=="admin"&&!(s!=null&&s.is_also_admin)?(N("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):e}async function Ad(e){try{const{data:s}=await ie.from("profiles").select("role, user_code").eq("id",e).maybeSingle();let t="ผู้ใช้งาน";if((s==null?void 0:s.role)==="teacher"||(s==null?void 0:s.role)==="admin"){const{data:l}=await ie.from("teachers").select("full_name").eq("profile_id",e).maybeSingle();t=(l==null?void 0:l.full_name)??(s==null?void 0:s.user_code)??"ผู้ใช้งาน"}const n=(s==null?void 0:s.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=t,document.getElementById("user-role").textContent=n,document.getElementById("user-avatar").textContent=t.charAt(0).toUpperCase()}catch{}}async function Md(e){const s=document.getElementById("header-switch-slot");if(!s)return;s.innerHTML="";const{data:t}=await ie.from("profiles").select("is_also_admin").eq("id",e).maybeSingle();if(!(t!=null&&t.is_also_admin))return;const n=document.createElement("a");n.id="btn-switch-teacher",n.href="teacher.html",n.title="สลับไปหน้าครู",n.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",n.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",s.appendChild(n)}async function Nd(){await ie.auth.signOut(),N("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function Dd(e=null){var t,n,l;const s=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(t=window._clearPositionRows)==null||t.call(window),document.getElementById("modal-title").textContent=e?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:o}=await Se(async()=>{const{getDepartments:d}=await import("./api-Bf4Tf4Cp.js");return{getDepartments:d}},__vite__mapDeps([0,1,2,3,4])),p=await o(),r=document.getElementById("modal-position-dept");r.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+p.map(d=>`<option value="${d.id}">${d.dept_name}</option>`).join("")}catch{}if(e)try{const{data:o}=await(await Se(async()=>{const{supabase:r}=await import("./supabase-BV-W2lsh.js").then(d=>d.a);return{supabase:r}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",e).single();document.getElementById("modal-id").value=o.id,document.getElementById("modal-code").value=o.teacher_code??"",document.getElementById("modal-name").value=o.full_name??"",document.getElementById("modal-category").value=o.category??"",document.getElementById("modal-phone").value=o.phone??"",document.getElementById("modal-login-email").value=o.login_email??"",document.getElementById("modal-username").value=o.username??"",document.getElementById("modal-image-url").value=o.image_url??"";const p=(n=o.positions)!=null&&n.length?o.positions:o.position?[o.position]:[];(l=window._setPositionRows)==null||l.call(window,p),p.includes("dept_head")&&(document.getElementById("modal-position-dept").value=o.position_dept_id??""),hr(o.image_url,o.full_name)}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex"),document.getElementById("modal-name").focus()}function Aa(){const e=document.getElementById("teacher-modal");e.classList.add("hidden"),e.classList.remove("flex")}async function Hd(e){var d,u,a;e.preventDefault();const s=document.getElementById("modal-save-btn"),t=document.getElementById("modal-id").value,n=document.getElementById("modal-username").value.trim().toLowerCase();if(n&&!/^[a-z0-9._-]{3,32}$/.test(n)){N("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const l=((d=window._getPositionValues)==null?void 0:d.call(window))??[],o=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],p=l.find(m=>!o.includes(m))||null,r={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:n||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:p,positions:l,position_dept_id:l.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!r.full_name){N("กรุณากรอกชื่อ-นามสกุล","warning");return}_t(s,!0);try{const m=(a=(u=document.getElementById("modal-photo-file"))==null?void 0:u.files)==null?void 0:a[0];if(m){const h=t||`new_${Date.now()}`;r.image_url=await al(h,m)}t?await gn(Number(t),r):await bn(r),N("บันทึกข้อมูลสำเร็จ","success"),Aa(),Nt(await He())}catch(m){N("บันทึกไม่สำเร็จ: "+fe(m),"error")}finally{_t(s,!1)}}async function Rd(e,s){if(confirm(`ยืนยันการลบ "${s}" ออกจากระบบ?`))try{await un(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),Nt(await He())}catch{N("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function hr(e,s){const t=document.getElementById("modal-avatar-preview");t&&(e?t.innerHTML=`<img src="${e}" class="w-full h-full object-cover" />`:t.innerHTML=(s??"?").charAt(0).toUpperCase())}async function Od(e=null){const s=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=e?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(t=>{document.getElementById(t).value=""}),document.getElementById("sub-skill-group").value="",e)try{const n=(await aa()).find(l=>l.id===e);n&&(document.getElementById("sub-id").value=n.id,document.getElementById("sub-code").value=n.subject_code??"",document.getElementById("sub-name").value=n.subject_name??"",document.getElementById("sub-dept").value=n.dept??"",document.getElementById("sub-grade").value=n.grade_level??"",document.getElementById("sub-credit").value=n.credit??"",document.getElementById("sub-learning-area").value=n.learning_area??"",document.getElementById("sub-skill-group").value=n.skill_group??"")}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}s.classList.replace("hidden","flex")}async function Pd(e,s){if(confirm(`ยืนยันลบวิชา "${s}"?`))try{await pn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),Ja(await aa())}catch{N("ลบไม่สำเร็จ","error")}}async function zd(e=null){const s=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(h=>{const f=document.getElementById(h);f&&(f.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const t=document.getElementById("dept-selected-teacher");t.classList.add("hidden"),t.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=e?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let n=[];try{n=await He()}catch{}const l=document.getElementById("dept-teacher-code-input"),o=document.getElementById("dept-teacher-search"),p=document.getElementById("dept-teacher-dropdown"),r=document.getElementById("dept-selected-teacher"),d=document.getElementById("dept-selected-name"),u=document.getElementById("dept-clear-teacher"),a=h=>{document.getElementById("dept-teacher-code").value=h?h.teacher_code??"":"",h?(l.value=h.teacher_code??"",o.value=h.full_name??"",d.textContent=`${h.full_name}${h.teacher_code?` (${h.teacher_code})`:""}`,r.classList.remove("hidden"),r.classList.add("flex")):(l.value="",o.value="",r.classList.add("hidden"),r.classList.remove("flex")),p.classList.add("hidden")},m=h=>{p.innerHTML=h.length?h.map(f=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${f.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${f.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${f.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',p.querySelectorAll(".teacher-option").forEach(f=>{f.addEventListener("mousedown",v=>{v.preventDefault(),a(n.find(w=>String(w.id)===f.dataset.id))})}),p.classList.remove("hidden")};if(l.oninput=()=>{const h=l.value.trim().toLowerCase();if(!h){a(null);return}const f=n.find(v=>(v.teacher_code??"").toLowerCase()===h);if(f)a(f);else{const v=n.filter(w=>(w.teacher_code??"").toLowerCase().startsWith(h));v.length&&m(v)}},o.onfocus=()=>m(n),o.oninput=()=>{const h=o.value.toLowerCase();m(h?n.filter(f=>f.full_name.toLowerCase().includes(h)||(f.teacher_code??"").toLowerCase().includes(h)):n)},o.onblur=()=>setTimeout(()=>p.classList.add("hidden"),150),u==null||u.addEventListener("click",()=>a(null)),e)try{const f=(await nt()).find(v=>v.id===e);if(f){document.getElementById("dept-id").value=f.id,document.getElementById("dept-code").value=f.dept_code??"",document.getElementById("dept-name").value=f.dept_name??"",document.getElementById("dept-teacher-code").value=f.teacher_code??"",document.getElementById("dept-photo-url").value=f.head_photo_url??"",document.getElementById("dept-sign-url").value=f.head_sign_url??"";const v=document.getElementById("dept-category");if(v&&(v.value=f.category??""),f.teacher_code){const w=n.find($=>$.teacher_code===f.teacher_code);w&&a(w)}f.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${f.head_photo_url}" class="w-full h-full object-cover" />`),f.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${f.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex")}function Ut(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function Fd(e){var o,p,r,d,u,a,m,h;e.preventDefault();const s=document.getElementById("dept-save-btn"),t=document.getElementById("dept-id").value,n=document.getElementById("dept-code").value.trim().toUpperCase(),l=document.getElementById("dept-name").value.trim();if(!n||!l){N("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}_t(s,!0);try{const f=document.getElementById("dept-teacher-code").value||null,v=f?((r=(p=(o=document.getElementById("dept-selected-name"))==null?void 0:o.textContent)==null?void 0:p.split(" (")[0])==null?void 0:r.trim())??null:null,w={dept_code:n,dept_name:l,head_name:v,teacher_code:f,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((d=document.getElementById("dept-category"))==null?void 0:d.value)||null},$=(a=(u=document.getElementById("dept-photo-file"))==null?void 0:u.files)==null?void 0:a[0];$&&(w.head_photo_url=await cs(n,"photo",$));const x=(h=(m=document.getElementById("dept-sign-file"))==null?void 0:m.files)==null?void 0:h[0];x&&(w.head_sign_url=await cs(n,"sign",x)),t?await yn(Number(t),w):await fn(w),N("บันทึกสำเร็จ","success"),Ut(),ca(await nt())}catch(f){N("บันทึกไม่สำเร็จ: "+fe(f),"error")}finally{_t(s,!1)}}async function Ud(e,s){if(confirm(`ยืนยันลบกลุ่มสาระ "${s}"?`))try{await mn(Number(e)),N(`ลบ "${s}" แล้ว`,"success"),ca(await nt())}catch{N("ลบไม่สำเร็จ","error")}}function Vd(e=null){var n,l,o;const s=document.getElementById("period-modal"),t=e?((n=window._periodsCache)==null?void 0:n[e])??null:null;document.getElementById("period-id").value=e??"",document.getElementById("period-no").value=(t==null?void 0:t.period_no)??"",document.getElementById("period-start").value=((l=t==null?void 0:t.start_time)==null?void 0:l.slice(0,5))??"",document.getElementById("period-end").value=((o=t==null?void 0:t.end_time)==null?void 0:o.slice(0,5))??"",document.getElementById("period-modal-title").textContent=e?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",s.classList.remove("hidden"),s.classList.add("flex")}function Vt(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function Gd(e){e.preventDefault();const s=document.getElementById("period-save-btn"),t=document.getElementById("period-id").value,n={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!n.period_no||!n.start_time||!n.end_time){N("กรุณากรอกข้อมูลให้ครบ","warning");return}t&&(n.id=Number(t)),_t(s,!0);try{await hn(n),N("บันทึกสำเร็จ","success"),Vt(),ua()}catch(l){N("บันทึกไม่สำเร็จ: "+fe(l),"error")}finally{_t(s,!1)}}async function Wd(e){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await xn(Number(e)),N("ลบแล้ว","success"),ua()}catch{N("ลบไม่สำเร็จ","error")}}async function Ma(){try{const s=(await Ze()).filter(n=>n.status==="pending").length,t=document.getElementById("badge-payments");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Na(){try{const s=(await qs()).filter(n=>!n.is_read).length,t=document.getElementById("badge-feedback");if(!t)return;s>0?(t.textContent=s>9?"9+":s,t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))}catch{}}async function Da(){try{const e=await Bs(),s=document.getElementById("badge-subject-group");if(!s)return;e.length>0?(s.textContent=e.length>9?"9+":e.length,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}window._refreshSubjectGroupBadge=Da;window._refreshFeedbackBadge=Na;window._refreshPaymentBadge=Ma;window._goBack=()=>kt();window.openTeacherModal=Dd;window.handleDeleteTeacher=Rd;window.openSubjectModal=Od;window.handleDeleteSubject=Pd;window.openDeptModal=zd;window.handleDeleteDept=Ud;window.openPeriodModal=Vd;window.handleDeletePeriod=Wd;window._adminViewSchedule=async(e,s)=>{var u;(u=document.getElementById("admin-sched-overlay"))==null||u.remove();const{getSystemConfig:t}=await Se(async()=>{const{getSystemConfig:a}=await import("./api-Bf4Tf4Cp.js");return{getSystemConfig:a}},__vite__mapDeps([0,1,2,3,4])),n=await t().catch(()=>({})),l=parseInt(n.academicYear??2568),o=parseInt(n.semester??1),p=document.createElement("div");p.id="admin-sched-overlay",p.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",p.innerHTML=`
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
    </div>`,document.body.appendChild(p),p.querySelector("#aso-close").addEventListener("click",()=>p.remove());const r=p.querySelector("#aso-content"),d=document.getElementById("main-content");d&&(d.id="main-content-bak"),r.id="main-content";try{await Ko({id:e,full_name:s},l,o,n)}finally{r.id="aso-content",d&&(d.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var a,m,h,f,v,w,$,x,i,j,_,C,T,D,q,y,c;xl();const e=await qd();if(!e)return;await Gs("admin");const s=document.getElementById("app-version");s&&(s.textContent=`v${zo}`,s.classList.add("cursor-pointer","hover:underline"),s.addEventListener("click",()=>Xa(e.user.id,!0,!0))),(a=e==null?void 0:e.user)!=null&&a.id&&Xa(e.user.id,!1,!0),ln(),(m=document.getElementById("btn-logout"))==null||m.addEventListener("click",Nd);const t=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],n=()=>'<option value="">— ไม่มี —</option>'+t.map(g=>`<optgroup label="${g.label}">${g.options.map(k=>`<option value="${k.value}">${k.label}</option>`).join("")}</optgroup>`).join("");function l(){const g=[...document.querySelectorAll(".pos-row-sel")].map(k=>k.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!g.includes("dept_head"))}function o(){const g=[...document.querySelectorAll(".pos-row-sel")],k=g.map(b=>b.value).filter(Boolean);g.forEach(b=>{[...b.options].forEach(L=>{L.value&&(L.disabled=k.includes(L.value)&&b.value!==L.value)})})}function p(g=""){const k=document.getElementById("modal-positions-list"),b=document.createElement("div");b.className="pos-row flex items-center gap-2",b.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${n()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,b.querySelector(".pos-row-sel").value=g,b.querySelector(".pos-row-sel").addEventListener("change",()=>{l(),o()}),b.querySelector(".pos-row-del").addEventListener("click",()=>{b.remove(),l(),o()}),k.appendChild(b),l(),o()}window._addPositionRow=p,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",p(),l()},window._setPositionRows=g=>{document.getElementById("modal-positions-list").innerHTML="",(g!=null&&g.length?g:[""]).forEach(b=>p(b)),l()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(g=>g.value).filter(Boolean),(h=document.getElementById("btn-add-position"))==null||h.addEventListener("click",()=>p()),p(),(f=document.getElementById("modal-close"))==null||f.addEventListener("click",Aa),(v=document.getElementById("modal-backdrop"))==null||v.addEventListener("click",Aa),(w=document.getElementById("teacher-form"))==null||w.addEventListener("submit",Hd),($=document.getElementById("modal-photo-file"))==null||$.addEventListener("change",g=>{const k=g.target.files[0];k&&hr(URL.createObjectURL(k),"")}),(x=document.getElementById("dept-modal-close"))==null||x.addEventListener("click",Ut),(i=document.getElementById("dept-modal-backdrop"))==null||i.addEventListener("click",Ut),(j=document.getElementById("dept-modal-cancel"))==null||j.addEventListener("click",Ut),(_=document.getElementById("dept-form"))==null||_.addEventListener("submit",Fd),(C=document.getElementById("dept-photo-file"))==null||C.addEventListener("change",g=>{const k=g.target.files[0];k&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL(k)}" class="w-full h-full object-cover" />`)}),(T=document.getElementById("dept-sign-file"))==null||T.addEventListener("change",g=>{const k=g.target.files[0];k&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL(k)}" class="w-full h-full object-contain" />`)}),(D=document.getElementById("period-modal-close"))==null||D.addEventListener("click",Vt),(q=document.getElementById("period-modal-backdrop"))==null||q.addEventListener("click",Vt),(y=document.getElementById("period-modal-cancel"))==null||y.addEventListener("click",Vt),(c=document.getElementById("period-form"))==null||c.addEventListener("submit",Gd),await Ad(e.user.id),Md(e.user.id);const r={overview:Ha,"exec-overview":md,teachers:_r,classes:Ya,students:$r,departments:kr,subjects:kt,"subject-admin":()=>Se(async()=>{const{renderAdminSubjectManagement:g}=await import("./admin-subject-management-CaV5l0Cv.js");return{renderAdminSubjectManagement:g}},__vite__mapDeps([5,0,1,2,3,4,6,7])).then(({renderAdminSubjectManagement:g})=>g()),curriculum:wt,periods:ua,"schedule-admin":()=>Se(async()=>{const{renderAdminScheduleManagement:g}=await import("./admin-schedule-management-CY8Fjl_P.js");return{renderAdminScheduleManagement:g}},__vite__mapDeps([8,6,0,1,2,3,4,9,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(({renderAdminScheduleManagement:g})=>g()),"schedule-admin-import":()=>Se(async()=>{const{renderAdminScheduleImport:g}=await import("./admin-schedule-import-C7BHs1Li.js");return{renderAdminScheduleImport:g}},__vite__mapDeps([23,0,1,2,3,4,6,7])).then(({renderAdminScheduleImport:g})=>g({onBack:()=>r["schedule-admin"]()})),homeroom:Sr,"score-col-config":Er,"registered-teachers":Xt,holidays:Lr,payments:Ir,"life-skill-admin":Tr,"reading-admin":jr,"prayer-admin":Br,settings:Ka,import:Cr,"admin-profile":qr,"usage-stats":Ar,"classrooms-admin":Mr,"course-doc-lang":()=>Jo(null,!0),announcements:()=>zr(),"autoscale-history":()=>Fr(),"autoscale-settings":()=>Ba(),"work-calendar":()=>Xr(null),"role-permissions":()=>Ur(),"religion-groups":en,"tutorial-admin":()=>Se(async()=>{const{renderTutorialAdmin:g}=await import("./tutorial-DqRRkJk5.js");return{renderTutorialAdmin:g}},__vite__mapDeps([24,0,1,2,3,4,16,6])).then(({renderTutorialAdmin:g})=>g()),"house-colors":()=>Vr(),"sports-admin":()=>gl({admin:!0}),azfutsal:()=>Fo(),regrade:()=>fd(),"sports-shirt-summary":()=>Ge(),"sports-fund-admin":()=>Ed(),"sports-overview-admin":()=>gr(),"sports-evaluation":()=>lt(),"shirt-vote-settings":()=>dt(),"shirt-vote-dashboard":()=>br(),donations:()=>Wr(),"feedback-admin":()=>Yr(),"subject-group-requests":()=>sn(),"donor-chat-admin":()=>Se(()=>import("./teacher-views-donor-chat-Ccw2OW67.js"),__vite__mapDeps([25,6,0,1,2,3,4,16,17,26,27,28,10,11,29,30,31,32,33,34,35,36,15,24,37,12])).then(g=>g.renderDonorChatAdmin()),"student-qr-print":()=>Se(()=>import("./teacher-views-classes-Dfj6NaFe.js").then(g=>g.t),__vite__mapDeps([9,6,0,1,2,3,4,10,11,12,13,14,15,16,17,7,18,19,20,21,22])).then(g=>g.renderStudentQRPrint(null,null)),"classroom-leaders":()=>rn(),"council-rep-nominations":()=>Gr(),certificates:()=>Se(()=>import("./teacher-views-certificates-Ct7phr74.js"),__vite__mapDeps([38,6,39,1,15,40,17,16])).then(async g=>{const{getMyTeacherProfile:k}=await Se(async()=>{const{getMyTeacherProfile:L}=await import("./api-Bf4Tf4Cp.js");return{getMyTeacherProfile:L}},__vite__mapDeps([0,1,2,3,4])),b=await k(e.user.id).catch(()=>null);return g.renderCertificateManager(b)})};document.querySelectorAll("[data-nav]").forEach(g=>{g.addEventListener("click",k=>{var L,E;k.preventDefault();const b=g.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}r[b]&&r[b](),(L=document.getElementById("sidebar"))==null||L.classList.add("-translate-x-full"),(E=document.getElementById("sidebar-overlay"))==null||E.classList.add("hidden")})}),Ma(),setInterval(Ma,6e4),Na(),setInterval(Na,6e4),Da(),setInterval(Da,6e4),Ts(!1),window._adminNav=g=>{r[g]&&r[g]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>r["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>r["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>r["shirt-vote-dashboard"]());const d=new URLSearchParams(location.search),u=d.get("view");u&&r[u]?(window._pendingQRTab=d.get("tab")||null,r[u]()):await Ha()});function tt(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(0,s).trim():e.trim()}function ut(e){if(!e)return"";const s=e.indexOf("/");return s>0?e.slice(s+1).trim():""}function Re(e){return[...new Set(e.filter(Boolean))].sort()}const je="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",Ue="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",Ve=e=>String(e??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),te=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Yd({year:e,semester:s,start:t,end:n,preview:l}){return new Promise(o=>{var u;const p=document.createElement("div");p.id="semester-rollover-confirm-modal",p.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",p.innerHTML=`
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
              ${[["คอร์สเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.courses_to_archive,"คอร์ส"],["ห้องเรียนเดิมที่จะเก็บเป็นประวัติ",l==null?void 0:l.classes_to_archive,"ห้อง"],["ผู้สนับสนุนที่มีสิทธิ์ส่วนลดเทอมใหม่",l==null?void 0:l.eligible_supporters,"คน"],["ข้อมูลเข้าเรียนที่จะล้างหลังสำรอง",l==null?void 0:l.attendances_to_clear,"รายการ"],["ข้อมูลละหมาดที่จะล้างหลังสำรอง",l==null?void 0:l.prayer_records_to_clear,"รายการ"]].map(([a,m,h])=>`<div class="flex items-start justify-between gap-4 py-2.5 text-sm"><dt class="text-slate-600">${a}</dt><dd class="shrink-0 font-bold tabular-nums text-slate-900">${Number(m??0).toLocaleString()} ${h}</dd></div>`).join("")}
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
      </section>`;const r=a=>{p.remove(),document.removeEventListener("keydown",d),o(a)},d=a=>{a.key==="Escape"&&r(!1)};p.addEventListener("click",a=>{(a.target===p||a.target.closest('[data-action="cancel"]'))&&r(!1),a.target.closest('[data-action="confirm"]')&&r(!0)}),document.addEventListener("keydown",d),document.body.appendChild(p),(u=p.querySelector('[data-action="cancel"]'))==null||u.focus()})}function Kd(){const e=document.createElement("div");return e.className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6",e.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="semester-rollover-progress-title" class="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
    <h2 id="semester-rollover-progress-title" class="text-lg font-extrabold text-slate-900">กำลังเตรียมพื้นที่ภาคเรียนใหม่</h2>
    <p data-progress-label class="mt-2 text-sm text-slate-600">กำลังเริ่ม...</p>
    <div class="mt-4 h-3 overflow-hidden rounded-full bg-slate-100"><div data-progress-bar class="h-full w-0 rounded-full bg-indigo-600 transition-[width] duration-200"></div></div>
    <p data-progress-count class="mt-2 text-right text-xs font-semibold tabular-nums text-indigo-700">0%</p>
    <p class="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">อย่าปิดหน้าต่างระหว่างกำลังทำงาน หากการเชื่อมต่อขาด ข้อมูลที่ลบไปแล้วอยู่ในไฟล์สำรอง และสามารถกดขึ้นภาคเรียนใหม่อีกครั้งเพื่อทำต่อจากข้อมูลที่เหลือ</p>
  </section>`,document.body.appendChild(e),{update(s,t){e.querySelector("[data-progress-label]").textContent=s,e.querySelector("[data-progress-count]").textContent=`${Math.max(0,Math.min(100,Math.floor(t)))}%`,e.querySelector("[data-progress-bar]").style.width=`${Math.max(0,Math.min(100,t))}%`},close(){e.remove()}}}function $t(e){return String(e??"").normalize("NFKC").toLowerCase().replace(/^(ว่าที่ร้อยตรี|ว่าที่ร้อยโท|ว่าที่ร้อยเอก|นางสาว|น.ส.|นาย|นาง|ดร\.?|คุณ)\s*/u,"").replace(/[\s._,()\[\]{}\-–—:;"'`]/g,"")}function Jd(e,s){const t=[...$t(e)],n=[...$t(s)],l=Array.from({length:n.length+1},(o,p)=>p);for(let o=1;o<=t.length;o++){const p=[o];for(let r=1;r<=n.length;r++)p[r]=Math.min(p[r-1]+1,l[r]+1,l[r-1]+(t[o-1]===n[r-1]?0:1));for(let r=0;r<=n.length;r++)l[r]=p[r]}return l[n.length]}function Qd(e,s){const t=$t(e),n=$t(s);return!t||!n?0:t===n?1:1-Jd(t,n)/Math.max(t.length,n.length)}function Le(e){document.querySelectorAll("[data-nav]").forEach(s=>{s.classList.toggle("bg-indigo-800",s.dataset.nav===e),s.classList.toggle("text-white",s.dataset.nav===e),s.classList.toggle("text-indigo-200",s.dataset.nav!==e)})}function _e(e){document.getElementById("main-content").innerHTML=e}async function Ha(){var p;Le("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ";const[e,s]=await Promise.all([Me().catch(()=>({})),ra().catch(()=>[])]),t=Hs(s,e),n=We(Ta(e));let l=n;try{const r=localStorage.getItem("pp5_admin_overview_term");t.some(d=>We(d)===r)&&(l=r)}catch{}const o=t.find(r=>We(r)===l)??Ta(e);_e(`<div class="max-w-6xl mx-auto animate-fade">
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
            ${Rs(t,l,n)}
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
  </div>`);try{const[r,d,u]=await Promise.all([ss(o.academic_year,o.semester),Ze().catch(()=>[]),He().catch(()=>[])]);(p=document.getElementById("admin-overview-term-switcher"))==null||p.addEventListener("change",async _=>{l=_.target.value;try{localStorage.setItem("pp5_admin_overview_term",l)}catch{}const C=t.find(D=>We(D)===l);if(!C)return;const T=_.target;T.disabled=!0;try{const D=await ss(C.academic_year,C.semester);Object.entries(D).forEach(([q,y])=>{const c=document.getElementById(`stat-${q}`);c&&(c.textContent=Number(y??0).toLocaleString())})}catch{N("โหลดสถิติของภาคเรียนที่เลือกไม่สำเร็จ","error")}finally{T.disabled=!1}}),Object.entries(r).forEach(([_,C])=>{const T=document.getElementById(`stat-${_}`);T&&(T.textContent=C.toLocaleString())});const a=u.filter(_=>_.profile_id).length,m=u.length-a,h=document.getElementById("stat-registered"),f=document.getElementById("stat-unregistered");h&&(h.textContent=a),f&&(f.textContent=m);const v=d.filter(_=>_.status==="pending"),w=document.getElementById("pending-payments-list");w&&(v.length?w.innerHTML=v.slice(0,3).map(_=>{var C;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((C=_.teachers)==null?void 0:C.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${_.package_type==="semester"?`เหมาทั้งเทอม ${_.amount??299} บ.`:`รายห้อง ${parseInt(_.room_count??1)||1} ห้อง ${_.amount??49} บ.`} · ${new Date(_.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(v.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${v.length-3} รายการ</p>`:""):w.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const $=document.getElementById("training-todo-shell");if($)try{const{getAllAnnouncements:_,getAnnouncementRsvps:C}=await Se(async()=>{const{getAllAnnouncements:y,getAnnouncementRsvps:c}=await import("./api-Bf4Tf4Cp.js");return{getAllAnnouncements:y,getAnnouncementRsvps:c}},__vite__mapDeps([0,1,2,3,4])),T=await _(),D=new Date().toISOString().slice(0,10),q=T.filter(y=>y.ann_type==="training"&&y.is_active&&y.event_date>=D).sort((y,c)=>y.event_date.localeCompare(c.event_date));if(q.length){const y=await Promise.all(q.map(k=>C(k.id).catch(()=>[]))),c=k=>new Date(k+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),g=k=>String(k??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");$.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${q.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${q.map((k,b)=>{var I;const L=y[b]??[],E=L.filter(R=>R.response==="yes").length,B=L.filter(R=>R.response==="maybe").length,H=L.filter(R=>R.response==="no").length,S=L.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${g(k.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${c(k.event_date)}
                        ${(I=k.event_periods)!=null&&I.length?` · 🕐 คาบ ${k.event_periods.sort((R,F)=>R-F).join(",")}`:""}
                        ${k.event_location?` · 📍 ${g(k.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${S?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${E}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${B}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${H}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const x=document.getElementById("leave-monitor-shell");x&&await Oo(x,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const i=await Me().catch(()=>({})),j=document.getElementById("monitor-shell");j&&ai(j,i)}catch{N("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function Va(e,s,t){const n={};for(const l of e)l.main_room&&(n[l.main_room]=[]);for(const l of s){const o=l[t];o&&(n[o]||(n[o]=[]),n[o].push({id:l.id,full_name:l.full_name??"",student_code:l.student_code??""}))}return n}async function Zd(e,s,t){const{records:n,students:l,homerooms:o}=await To(e,s),p=Va(o,l,"religion_room"),r={},d={},u=new Set;for(const x of n){const i=x.main_room,j=x.week_number;!i||!j||(u.add(j),r[i]||(r[i]={}),r[i][j]||(r[i][j]=new Set),r[i][j].add(x.student_id),x.status==="absent"&&(d[i]||(d[i]={}),d[i][j]||(d[i][j]=new Set),d[i][j].add(x.student_id)))}const a=t?ti(t):Math.max(...u,0),m=a>0?Array.from({length:a},(x,i)=>i+1):[...u].sort((x,i)=>x-i),h=Object.keys(p),f=h.filter(x=>{var _,C;const i=p[x].length,j=((C=(_=r[x])==null?void 0:_[a-1])==null?void 0:C.size)??0;return i>0&&j<i}),v=h.filter(x=>{var j;const i=(j=d[x])==null?void 0:j[a-2];return i!=null&&i.size?[...i].some(_=>!n.filter(T=>T.main_room===x&&T.week_number===a-1&&T.student_id===_).some(T=>T.status==="followed"||T.status==="avoid")):!1}),w=h.length,$=h.filter(x=>{var j,_;const i=p[x].length;return i?(((_=(j=r[x])==null?void 0:j[a-1])==null?void 0:_.size)??0)>=i:!1}).length;return{total:w,done:$,recordPending:f.length,followPending:v.length,week:a,_raw:{records:n,students:l,roomStudents:p,weekRoomRec:r,weekRoomAbsent:d,weeks:m,W:a,homerooms:o}}}async function Xd(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await jo(e,s),p=Va(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(p),u=d.filter(a=>p[a].length>0&&p[a].every(m=>r.has(m.id??m))).length;return{total:d.length,done:u,pending:d.length-u,_raw:{columns:t,scores:n,students:l,roomStudents:p,scored:r,homerooms:o}}}async function ei(e,s){const{columns:t,scores:n,students:l,homerooms:o}=await Bo(e,s),p=Va(o,l,"main_room"),r=new Set(n.map(a=>a.student_id)),d=Object.keys(p),u=d.filter(a=>p[a].length>0&&p[a].every(m=>r.has(m.id??m))).length;return{total:d.length,done:u,pending:d.length-u,_raw:{columns:t,scores:n,students:l,roomStudents:p,scored:r,homerooms:o}}}function ti(e){if(!e)return 0;const s=new Date(e);if(isNaN(s))return 0;const t=Date.now()-s.getTime();return t<0?0:Math.floor(t/(7*24*60*60*1e3))+1}async function ai(e,s){const t=parseInt(s.academicYear??2568),n=parseInt(s.semester??1);e.innerHTML=`
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
    </div>`;const[l,o,p,r]=await Promise.allSettled([Zd(t,n,s.semester_start),Xd(t,n),ei(t,n),He().catch(()=>[])]),d=r.status==="fulfilled"?r.value:[],u=(a,m)=>{const h=document.getElementById(`card-${a}`);if(!h)return;if(m.status==="rejected"){h.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const f=m.value;if(a==="prayer"){const v=f.total>0?Math.round(f.done/f.total*100):0,w=f.recordPending+f.followPending;h.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${f.done}/${f.total} ห้อง (สัปดาห์ที่ ${f.week-1})</p>
        ${w>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${f.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${f.recordPending} ห้อง</span>`:""}
          ${f.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${f.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const v=f.total>0?Math.round(f.done/f.total*100):0;h.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${f.done}/${f.total} ห้อง</p>
        ${f.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${f.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};u("prayer",l),u("lifeskill",o),u("reading",p),e.querySelectorAll(".monitor-card").forEach(a=>{a.addEventListener("click",()=>{var f,v,w;const m=a.dataset.type,h=m==="prayer"?(f=l.value)==null?void 0:f._raw:m==="lifeskill"?(v=o.value)==null?void 0:v._raw:(w=p.value)==null?void 0:w._raw;si(m,h,s,t,n,d)})})}function si(e,s,t,n,l,o=[]){var m;(m=document.getElementById("monitor-modal"))==null||m.remove();const p={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},r=document.createElement("div");r.id="monitor-modal",r.className="fixed inset-0 z-[90] flex flex-col bg-white",r.innerHTML=`
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${p[e]}</h2>
        <p class="text-xs text-gray-400">ภาค ${t.semester??"—"}/${t.academicYear??"—"}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`,document.body.appendChild(r),r.querySelector("#monitor-modal-close").addEventListener("click",()=>r.remove());const d=r.querySelector("#modal-body"),a={allTeachers:o,year:n,sem:l,category:e==="prayer"?"ศาสนา":"สามัญ"};e==="prayer"&&ri(d,s,a),e==="lifeskill"&&vr(d,s,n,l,a),e==="reading"&&wr(d,s,n,l,a),r.querySelector("#modal-print-btn").addEventListener("click",()=>ni(t,e)),r.querySelector("#modal-doc-btn").addEventListener("click",()=>li(t,e,s))}function Ga(e,s,t,n){const l=s[e],{allTeachers:o,year:p,sem:r,category:d}=n??{};if(l)return`<p class="font-semibold text-gray-800 text-xs leading-tight">${l}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${e}</p>`;(o??[]).map(a=>`<option value="${a.id}">${a.full_name??""}${a.teacher_code?` (${a.teacher_code})`:""}</option>`).join("");const u=`pick-${e.replace(/[^a-zA-Z0-9]/g,"_")}`;return`<p class="text-[11px] font-medium text-gray-500">${e}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${e}" data-picker="${u}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${u}" class="hidden mt-2 flex gap-1 items-center">
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
        data-room="${e}" data-year="${p}" data-sem="${r}" data-cat="${d}">บันทึก</button>
    </div>`}function ri(e,s,t={}){var k;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:n,roomStudents:l,weekRoomRec:o,weekRoomAbsent:p,weeks:r,W:d,homerooms:u}=s,a=Object.keys(l).sort((b,L)=>b.localeCompare(L,void 0,{numeric:!0})),m={},h={};for(const b of u??[])b.main_room&&(m[b.main_room]=((k=b.teachers)==null?void 0:k.full_name)??"",h[b.main_room]=b);const f="border border-gray-100 text-center text-[10px] px-2 py-2",v="px-4 py-2 text-sm font-medium border-b-2 transition",w=`${v} border-indigo-600 text-indigo-700 bg-indigo-50`,$=`${v} border-transparent text-gray-500 hover:text-gray-700`,x=(b,L="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${Ga(b,m,h,t)}${L}
  </td>`,i=b=>{const L=b??(d>0?d-1:d),E=r.map(H=>`<option value="${H}" ${H===L?"selected":""}>${H===d?`สัปดาห์ที่ ${H} (ปัจจุบัน)`:H===d-1?`สัปดาห์ที่ ${H} (ควรกรอก)`:`สัปดาห์ที่ ${H}`}</option>`).join(""),B=a.map(H=>{var W,Y;const I=(l[H]??[]).length,R=((Y=(W=o[H])==null?void 0:W[L])==null?void 0:Y.size)??0,F=I>0?Math.round(R/I*100):0,A=I===0?"bg-gray-50 text-gray-300":R===0?"bg-red-50 text-red-400":F>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",U=F>=100?"bg-emerald-500":F>=50?"bg-amber-400":"bg-red-400",O=I>0&&R<I?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${x(H,O)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${I}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${A}">
          <div class="font-bold">${I>0?F+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${I>0?R+"/"+I:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${I>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${U} h-2 rounded-full" style="width:${F}%"></div></div>
            <span class="text-[10px] font-bold ${F>=100?"text-emerald-600":F>=50?"text-amber-600":"text-red-500"}">${F}%</span>
          </div>`:'<span class="text-[10px] text-gray-300">ไม่มีนักเรียน</span>'}
        </td>
      </tr>`}).join("");return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">เลือกสัปดาห์:</label>
      <select id="prayer-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${E}
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
        <tbody>${B}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},j=b=>{var R;const L=b??(d>1?d-2:r[0]??1),E=L+1,B=r.map(F=>`<option value="${F}" ${F===L?"selected":""}>${F===d-2?`สัปดาห์ที่ ${F} (ควรติดตาม)`:F===d-1?`สัปดาห์ที่ ${F} (ล่าสุด)`:`สัปดาห์ที่ ${F}`}</option>`).join(""),H=(F,A)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${A}</span>`})[F]??"",S=[];for(const F of a){const A=l[F]??[],U=Object.fromEntries(A.map(O=>[O.id??O,O])),z=[...((R=p[F])==null?void 0:R[L])??[]];for(const O of z){const W=U[O],V=n.filter(K=>K.main_room===F&&K.week_number===E&&K.student_id===O).some(K=>K.status==="followed"||K.status==="avoid")?"followed":E>d?"pending":"overdue";S.push({room:F,stu:W,status:V})}}const I=S.length?S.map(({room:F,stu:A,status:U})=>{const z=m[F];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${z?`<p class="font-semibold text-gray-800 text-xs">${z}</p><p class="text-[10px] text-gray-400">${F}</p>`:`<p class="font-semibold text-gray-800 text-xs">${F}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(A==null?void 0:A.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(A==null?void 0:A.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${H(U,E)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${L}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${B}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${E} · พบ ${S.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${f} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${f} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${f} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${I}</tbody>
      </table>
    </div>`},_=d>0?d-1:0,C=a.filter(b=>{var L;return((L=l[b])==null?void 0:L.length)>0}).length,T=a.reduce((b,L)=>{var E;return b+(((E=l[L])==null?void 0:E.length)??0)},0),D=(b,L,E=72)=>{const I=2*Math.PI*26,R=I*b/100;return`<svg width="${E}" height="${E}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${L}" stroke-width="8"
        stroke-dasharray="${R} ${I}" stroke-dashoffset="${I/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${L}">${b}%</text>
    </svg>`},q=b=>{const L=e.querySelector("#prayer-dashboard");if(!L)return;if(r.length===0){L.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!b)return;const E=a.filter(A=>{var z,O;const U=l[A].length;return U>0&&(((O=(z=o[A])==null?void 0:z[b])==null?void 0:O.size)??0)<U}),B=a.filter(A=>{var O,W;const U=l[A].length,z=((W=(O=o[A])==null?void 0:O[b])==null?void 0:W.size)??0;return U>0&&z>=U}),H=a.filter(A=>{var z;const U=(z=p[A])==null?void 0:z[b-1];return U!=null&&U.size?[...U].some(O=>!n.filter(Y=>Y.main_room===A&&Y.week_number===b&&Y.student_id===O).some(Y=>Y.status==="followed"||Y.status==="avoid")):!1}),S=B.length,I=E.length,R=a.reduce((A,U)=>{var z,O;return A+(((O=(z=o[U])==null?void 0:z[b])==null?void 0:O.size)??0)},0),F=C>0?Math.round(S/C*100):0;L.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${C}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">ห้องทั้งหมด</p>
      </div>
      <div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-emerald-600">${S}</p>
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
        ${D(F,F>=100?"#10b981":F>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${b}</p>
          <p class="text-xs text-gray-400 mt-0.5">${S} / ${C} ห้อง บันทึกครบ</p>
          ${H.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${H.length} ห้อง</p>`:""}
          ${F>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${I>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${I})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${E.map(A=>{var Y,M;const U=l[A].length,z=((M=(Y=o[A])==null?void 0:Y[b])==null?void 0:M.size)??0,O=Math.round(z/U*100),W=m[A];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${A}</span>
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
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${b}</p></div>
      </div>`}
    </div>`};e.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${w}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${$}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const y=e.querySelector("#prayer-tab-content");let c="record";const g=(b,L)=>{c=b,y.innerHTML=b==="record"?i(L):j(L),b==="record"&&q(L??_),e.querySelectorAll(".prayer-tab").forEach(H=>{H.className=H.dataset.tab===b?`prayer-tab ${w}`:`prayer-tab ${$}`});const E=y.querySelector("#prayer-week-sel");E&&E.addEventListener("change",H=>g("record",parseInt(H.target.value)));const B=y.querySelector("#prayer-follow-week-sel");B&&B.addEventListener("change",H=>g("follow",parseInt(H.target.value))),Wa(y,t,()=>g(c,L))};e.querySelectorAll(".prayer-tab").forEach(b=>b.addEventListener("click",()=>g(b.dataset.tab))),g("record",_)}function vr(e,s,t,n,l={}){var f;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:p,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const u={},a={};for(const v of d??[])v.main_room&&(u[v.main_room]=((f=v.teachers)==null?void 0:f.full_name)??"",a[v.main_room]=v);const m=Object.keys(p).sort((v,w)=>v.localeCompare(w,void 0,{numeric:!0})),h="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${h} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${h} bg-gray-100">นักเรียน</th>
          <th class="${h} bg-emerald-50 text-emerald-700">กรอกแล้ว</th>
          <th class="${h} bg-red-50 text-red-500">ค้าง</th>
          <th class="${h} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${m.map(v=>{const w=p[v]??[],$=w.length,x=w.filter(C=>r.has(C.id??C)).length,i=$-x,j=$>0?Math.round(x/$*100):0,_=j>=100?"bg-emerald-500":j>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ga(v,u,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${$}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${x}</td>
              <td class="border border-gray-100 text-center ${i>0?"text-red-500 font-medium":"text-gray-300"}">${i||"—"}</td>
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
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${m.length} ห้อง</p>`,Wa(e,l,()=>vr(e,s,t,n,l))}function wr(e,s,t,n,l={}){var f;if(!s){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:p,scored:r,homerooms:d}=s;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const u={},a={};for(const v of d??[])v.main_room&&(u[v.main_room]=((f=v.teachers)==null?void 0:f.full_name)??"",a[v.main_room]=v);const m=Object.keys(p).sort((v,w)=>v.localeCompare(w,void 0,{numeric:!0})),h="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${h} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${h} bg-gray-100">นักเรียน</th>
          <th class="${h} bg-indigo-50 text-indigo-700">กรอกแล้ว</th>
          <th class="${h} bg-red-50 text-red-500">ค้าง</th>
          <th class="${h} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${m.map(v=>{const w=p[v]??[],$=w.length,x=w.filter(C=>r.has(C.id??C)).length,i=$-x,j=$>0?Math.round(x/$*100):0,_=j>=100?"bg-indigo-500":j>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Ga(v,u,a,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${$}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${x}</td>
              <td class="border border-gray-100 text-center ${i>0?"text-red-500 font-medium":"text-gray-300"}">${i||"—"}</td>
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
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${t} · ${m.length} ห้อง · ${o.length} หัวข้อ</p>`,Wa(e,l,()=>wr(e,s,t,n,l))}async function Wa(e,s,t){const{allTeachers:n,year:l,sem:o,category:p}=s??{};if(!(n!=null&&n.length))return;const r={};e.querySelectorAll(".hr-sel-wrap").forEach(d=>{const u=d.closest('[id^="pick-"]');u&&(r[u.id]=Pa({wrap:d,teachers:n,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),e.querySelectorAll(".hr-assign-btn").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.picker,a=document.getElementById(u);a&&a.classList.toggle("hidden")})}),e.querySelectorAll(".hr-save-btn").forEach(d=>{d.addEventListener("click",async()=>{var h;const u=d.dataset.room,a=`pick-${u.replace(/[^a-zA-Z0-9]/g,"_")}`,m=(h=r[a])==null?void 0:h.getValue();if(!m){N("กรุณาเลือกครู","error");return}d.disabled=!0,d.textContent="...";try{await Ds({teacher_id:m,main_room:u,category:p,academic_year:l,semester:o}),N(`ระบุครูที่ปรึกษาห้อง ${u} แล้ว ✅`,"success"),t&&t()}catch(f){N("บันทึกไม่สำเร็จ: "+fe(f),"error"),d.disabled=!1,d.textContent="บันทึก"}})})}function ni(e,s){const t={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,n=document.getElementById("modal-body");if(!n){N("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const l=n.cloneNode(!0);l.querySelectorAll("button, select, input").forEach(r=>r.remove());const o=l.innerHTML,p=`<!DOCTYPE html><html lang="th"><head>
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
  </body></html>`;Os(p,{autoprint:!0})}function oi(e,s,t){var u;const n={};for(const a of(s==null?void 0:s.homerooms)??[])a.main_room&&(n[a.main_room]=((u=a.teachers)==null?void 0:u.full_name)??"—");if(e==="prayer"){const{roomStudents:a,weekRoomRec:m,W:h}=s??{};if(!a)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const v=Object.keys(a).sort(($,x)=>$.localeCompare(x,void 0,{numeric:!0})).filter($=>{var i,j;const x=a[$].length;return x?(((j=(i=m[$])==null?void 0:i[h-1])==null?void 0:j.size)??0)<x:!1});return v.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${v.map(($,x)=>{var _,C;const i=a[$].length,j=((C=(_=m[$])==null?void 0:_[h-1])==null?void 0:C.size)??0;return`<tr>
        <td>${x+1}</td>
        <td>${n[$]??"—"}</td>
        <td>${$}</td>
        <td>${i}</td>
        <td>${j}</td>
        <td style="color:#dc2626">${i-j}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(h??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:l,scored:o}=s??{};if(!l)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const r=Object.keys(l).sort((a,m)=>a.localeCompare(m,void 0,{numeric:!0})).filter(a=>{const m=l[a]??[];return m.length>0&&!m.every(h=>o.has(h.id??h))});return r.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${r.map((a,m)=>{const h=l[a]??[],f=h.filter(v=>o.has(v.id??v)).length;return`<tr>
      <td>${m+1}</td>
      <td>${n[a]??"—"}</td>
      <td>${a}</td>
      <td>${h.length}</td>
      <td>${f}</td>
      <td style="color:#dc2626">${h.length-f}</td>
    </tr>`}).join("")}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${t.semester??"—"}/${t.academicYear??"—"} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'}function li(e,s,t){const n={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,l=new Date,o=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],p=`${l.getDate()} ${o[l.getMonth()]} ${l.getFullYear()+543}`,r=e.samaiSchoolName??e.schoolName??"โรงเรียน",d=oi(s,t,e),u=`<!DOCTYPE html><html lang="th"><head>
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
      <div class="field"><span class="field-label">วันที่&nbsp;&nbsp;</span><span class="field-val">${p}</span></div>
      <div class="field"><span class="field-label">เรื่อง&nbsp;&nbsp;</span><span class="field-val">รายงานความคืบหน้าการบันทึกข้อมูล${n} ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"}</span></div>
      <div class="field"><span class="field-label">เรียน&nbsp;&nbsp;</span><span class="field-val">ผู้อำนวยการโรงเรียน${r}</span></div>
    </div>
    <hr style="border:none;border-top:1px solid #ccc;margin:12px 0"/>
    <p class="indent">ตามที่โรงเรียน${r} ได้ใช้ระบบ ปพ.5 ออนไลน์ ในการบันทึกข้อมูล${n}ของนักเรียน
ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"} นั้น</p>
    <p class="indent">บัดนี้ ฝ่ายวิชาการได้ตรวจสอบสถานะการดำเนินงาน ณ วันที่ ${p}
พบว่ายังมีครูที่ปรึกษาบางห้องที่ยังไม่ได้ดำเนินการกรอกข้อมูล ดังรายละเอียดต่อไปนี้</p>
    ${d}
    <p class="indent">จึงเรียนมาเพื่อโปรดทราบ และขอให้ผู้เกี่ยวข้องเร่งดำเนินการกรอกข้อมูลให้แล้วเสร็จ
ภายในระยะเวลาที่กำหนด หากมีข้อสงสัยประการใดโปรดติดต่อฝ่ายวิชาการโดยตรง</p>
    <div class="sign-block">
      <p style="margin:0 0 4px">ลงชื่อ</p>
      <div class="sign-line"></div>
      <p style="margin:0">(....................................)</p>
      <p style="margin:4px 0 0">ตำแหน่ง .....................................</p>
      <p style="margin:4px 0 0">${p}</p>
    </div>
    <div style="clear:both"></div>
  </body></html>`,a=new Blob(["\uFEFF"+u],{type:"application/msword;charset=utf-8"}),m=URL.createObjectURL(a),h=document.createElement("a");h.href=m,h.download=`บันทึกข้อความ_${n}_${e.academicYear??new Date().getFullYear()+543}.doc`,h.click(),setTimeout(()=>URL.revokeObjectURL(m),2e3)}async function _r(){var e;Le("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",_e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const s=await He(),t=Re(s.map(p=>p.dept)),n=Re(s.map(p=>p.skill_group));_e(`<div class="max-w-6xl mx-auto animate-fade">
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
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${Ue} flex-1 min-w-40" />
          <select id="tf-dept" class="${je}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${t.map(p=>`<option value="${p}">${p}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${je}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${n.map(p=>`<option value="${p}">${p}</option>`).join("")}
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
          พบ <span id="tf-count" class="font-semibold text-indigo-600">${s.length}</span> / ${s.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="teacher-table-wrap"></div>
      </div>
    </div>`),Nt(s);let l=s;window._impersonateTeacher=async p=>{const r=s.find(d=>d.id===p);if(!r){N("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:d}=await Se(async()=>{const{startImpersonation:u}=await import("./impersonation-0xVfgYVY.js");return{startImpersonation:u}},[]);await d(ie,r),window.location.href="teacher.html"}catch(d){console.error("Cannot start impersonation:",d);const u=/function|schema cache|start_admin_impersonation|edge/i.test((d==null?void 0:d.message)||"");N(u?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(d==null?void 0:d.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const o=()=>{const p=document.getElementById("tf-q").value.toLowerCase(),r=document.getElementById("tf-dept").value,d=document.getElementById("tf-skill").value,u=document.getElementById("tf-subg").value,a=document.getElementById("tf-type").value,m=s.filter(h=>(!p||[h.full_name,h.teacher_code,h.dept,h.skill_group].some(f=>(f??"").toLowerCase().includes(p)))&&(!r||h.dept===r)&&(!d||h.skill_group===d)&&(!u||h.subject_group===u)&&(!a||h.staff_type===a));document.getElementById("tf-count").textContent=m.length,l=m,Nt(m)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(p=>{var r,d;(r=document.getElementById(p))==null||r.addEventListener("input",o),(d=document.getElementById(p))==null||d.addEventListener("change",o)}),(e=document.getElementById("teacher-export-csv"))==null||e.addEventListener("click",()=>{const p=f=>["ACDMVOC","AGMVOC"].includes(f.subject_group)?"ปวช":f.category==="ศาสนา"?"ศาสนา":f.category==="สามัญ"||f.subject_group?"สามัญ":"-",r=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],d=l.map((f,v)=>[v+1,f.teacher_code??"",f.full_name??"",p(f),f.phone??""]),u="\uFEFF"+[r,...d].map(f=>f.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join(`
`),a=new Blob([u],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(a),h=document.createElement("a");h.href=m,h.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(m),N("ดาวน์โหลด CSV แล้ว ✅","success")})}catch{N("โหลดข้อมูลครูไม่สำเร็จ","error")}}function Nt(e){const s=document.getElementById("teacher-table-wrap");if(!s)return;if(e.length===0){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
    </table></div>`}async function Xt(){Le("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",_e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),[n,l,o,p]=await Promise.all([He(),go(s,t).catch(()=>[]),Ze().catch(()=>[]),sa().catch(()=>[])]),r=new Set(l),d=Date.parse(String(e.semester_start??"")),u=E=>{if(!Number.isFinite(d))return!0;const B=Date.parse(String(E.reviewed_at??E.created_at??""));return Number.isFinite(B)&&B>=d},a=o.filter(E=>E.status==="approved"&&u(E)),m=new Map;p.forEach(E=>{var H;if(E.academic_year!=null&&(+E.academic_year!==s||+E.semester!==t))return;const B=(H=E.master_subjects)==null?void 0:H.teacher_id;B&&m.set(B,(m.get(B)??0)+1)});const h=E=>{const B=E.teachers_quota,H=m.get(E.id)??(B==null?void 0:B.total_classes_created)??0,S=a.filter(U=>{var z;return((z=U.teachers)==null?void 0:z.id)===E.id}),I=S.filter(U=>U.package_type==="per_subject").reduce((U,z)=>U+(parseInt(z.room_count??1)||1),0),R=S.some(U=>U.package_type==="semester")||(B==null?void 0:B.package_type)==="semester",F=(B==null?void 0:B.is_paid)&&!(B!=null&&B.package_type)&&!R&&!I,A=parseInt(e.freeClassQuota??2);return R||F?{label:R?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${H} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:I>0?{label:`รายห้อง ${I} ห้อง`,detail:`ใช้แล้ว ${H}/${A+I} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${H}/${A} ห้อง`,cls:H>=A?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},f=n.filter(E=>E.profile_id),v=n.filter(E=>!E.profile_id),w=f.filter(E=>r.has(E.id)),$=f.filter(E=>!r.has(E.id)),x=(E,B,H,S)=>`<button type="button" data-rt-tab="${E}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${S} flex items-center justify-center text-xl font-bold">${H}</div>
        <p class="text-sm text-gray-500">${B}</p>
      </button>`,i=[...new Set(n.map(E=>E.dept).filter(Boolean))].sort(),j={};for(const E of n){const B=(E.full_name??"").toLowerCase().replace(/\s+/g,"");B&&(j[B]||(j[B]=[]),j[B].push(E))}const _=Object.values(j).filter(E=>E.length>1).map(E=>E.slice().sort((B,H)=>(B.registered_at??"")<(H.registered_at??"")?-1:1));_e(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${x("all","ทั้งหมด",n.length,"bg-indigo-100 text-indigo-700")}
        ${x("registered","มีบัญชีแล้ว",f.length,"bg-emerald-100 text-emerald-700")}
        ${x("unregistered","ยังไม่ลงทะเบียน",v.length,"bg-amber-100 text-amber-700")}
        ${x("duplicates","บัญชีซ้ำ",_.length,_.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${x("scheduled","สร้างตารางสอนแล้ว",w.length,"bg-green-100 text-green-700")}
        ${x("unscheduled","ยังไม่สร้างตารางสอน",$.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${Ue} flex-1 min-w-40" />
          <select id="rt-cat" class="${je}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${je}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${i.map(E=>`<option value="${E}">${E}</option>`).join("")}
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
    </div>`);let C=n,T="all",D=null;const q=()=>{document.querySelectorAll("[data-rt-tab]").forEach(E=>{var H;const B=E.dataset.rtTab===T||E.dataset.rtTab===D;E.classList.toggle("border-emerald-400",B),E.classList.toggle("bg-emerald-50",B),E.classList.toggle("shadow-lg",B),E.classList.toggle("shadow-emerald-100",B),E.classList.toggle("ring-2",B),E.classList.toggle("ring-emerald-200",B),E.classList.toggle("border-gray-100",!B),(H=E.querySelector("p"))==null||H.classList.toggle("text-emerald-700",B)})},y=E=>m.get(E.id)??0,c=E=>r.has(E.id)?"✓":"—",g=()=>{const E=document.getElementById("rt-dup-list");if(E){if(!_.length){E.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}E.innerHTML=_.map((B,H)=>{const S=B.map((R,F)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${F===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${H}" value="${R.id}"
              class="mt-1 accent-emerald-600" ${F===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${R.image_url?`<img src="${R.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${Oe(R.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${R.teacher_code??"—"}</span>
                ${R.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${y(R)}</span>
                <span>🗓️ ตาราง ${c(R)}</span>
                ${R.login_email?`<span>✉️ ${Oe(R.login_email)}</span>`:""}
                ${R.registered_at?`<span>📅 ${new Date(R.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${R.id}</span>
              </div>
            </div>
          </label>`).join(""),I=B.map(R=>R.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${H}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${H+1} — ${Oe(B[0].full_name??"")}
              <span class="ml-2 text-red-500">(${B.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${S}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${H},'${I}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(E,B)=>{var A;const H=B.split(",").map(Number),S=Number((A=document.querySelector(`input[name="dup-keep-${E}"]:checked`))==null?void 0:A.value);if(!S){N("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const I=H.filter(U=>U!==S);if(!I.length){N("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const R=n.find(U=>U.id===S);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${R==null?void 0:R.full_name} (ID ${S})
ลบ: ID ${I.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const F=document.querySelector(`[data-dup-group="${E}"] button`);F&&(F.disabled=!0,F.textContent="⏳ กำลังรวม...");try{for(const U of I)await bo(S,U);N(`รวมบัญชีสำเร็จ — เหลือ ID ${S}`,"success"),Xt()}catch(U){N("เกิดข้อผิดพลาด: "+fe(U),"error"),F&&(F.disabled=!1,F.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const k=E=>{var H,S,I,R;const B=E==="duplicates";if((H=document.getElementById("rt-main-section"))==null||H.classList.toggle("hidden",B),(S=document.getElementById("rt-duplicates-section"))==null||S.classList.toggle("hidden",!B),(I=document.getElementById("rt-schedule-stats"))==null||I.classList.toggle("hidden",!0),B){T="duplicates",D=null,q(),g();return}E==="scheduled"||E==="unscheduled"?(T="registered",D=E):(T=E,D=null),C=T==="registered"?f:T==="unregistered"?v:n,(R=document.getElementById("rt-schedule-stats"))==null||R.classList.toggle("hidden",T!=="registered"),q(),L()},b=E=>{const B=document.getElementById("reg-teacher-table");if(B){if(!E.length){B.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`;return}B.innerHTML=`
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
              ${E.map(H=>{const S=(H.full_name??"?").charAt(0).toUpperCase(),I=!!H.profile_id,R=r.has(H.id),F=h(H);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${H.image_url?`<img src="${H.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${I?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${S}</div>`}
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
                    ${I?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`:`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`}
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${I?`<button onclick="window._adminViewSchedule(${H.id},'${Ve(H.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${R?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${H.id}, '${Ve(H.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},L=()=>{var R,F,A;const E=(((R=document.getElementById("rt-q"))==null?void 0:R.value)??"").toLowerCase(),B=((F=document.getElementById("rt-cat"))==null?void 0:F.value)??"",H=((A=document.getElementById("rt-dept"))==null?void 0:A.value)??"",S=C.filter(U=>(!E||[U.full_name,U.teacher_code].some(z=>(z??"").toLowerCase().includes(E)))&&(!B||U.category===B)&&(!H||U.dept===H)&&(!D||(D==="scheduled"?r.has(U.id):!r.has(U.id)))),I=document.getElementById("rt-count");I&&(I.textContent=S.length),b(S)};document.querySelectorAll("[data-rt-tab]").forEach(E=>{E.addEventListener("click",()=>k(E.dataset.rtTab))}),k("all"),["rt-q","rt-cat","rt-dept"].forEach(E=>{var B,H;(B=document.getElementById(E))==null||B.addEventListener("input",L),(H=document.getElementById(E))==null||H.addEventListener("change",L)}),window.handleUnlinkTeacher=async(E,B)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${B}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await yo(E),N(`ยกเลิกบัญชี "${B}" แล้ว`,"success"),Xt()}catch(H){N("เกิดข้อผิดพลาด: "+fe(H),"error")}}}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}async function Ya(){Le("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",_e(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[e,s]=await Promise.all([sa(),He().catch(()=>[])]),t=Object.fromEntries(s.map(l=>[l.id,l])),n=document.getElementById("class-list");if(e.length===0){n.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${e.map(l=>{var o,p;return`
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
            ${(o=l.master_subjects)!=null&&o.teacher_id?`<button onclick="window._adminViewSchedule(${l.master_subjects.teacher_id},'${Ve(((p=t[l.master_subjects.teacher_id])==null?void 0:p.full_name)??l.master_subjects.subject_name??l.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${l.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${l.id},'${(l.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(e.map(l=>[l.id,l])),window._adminEditClass=l=>{var p;const o=(p=window._adminClassCache)==null?void 0:p[l];o&&Fs(null,o)},window._adminDeleteClass=async(l,o)=>{if(confirm(`ยืนยันลบห้องเรียน "${o}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await As(l),N(`ลบห้องเรียน "${o}" แล้ว`,"success"),Ya()}catch(p){N("ลบไม่สำเร็จ: "+fe(p),"error")}}}catch{N("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function $r(){Le("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",_e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let d=function(a,m,h){var v;(v=document.getElementById("stu-modal"))==null||v.remove();const f=document.createElement("div");f.id="stu-modal",f.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",f.innerHTML=`
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
        </div>`,document.body.appendChild(f),f.querySelector("#stu-close").addEventListener("click",()=>f.remove()),f.querySelector("#stu-cancel").addEventListener("click",()=>f.remove()),f.addEventListener("click",w=>{w.target===f&&f.remove()}),f.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{f.querySelector("#sf-auth-pw").value=f.querySelector("#sf-code").value.trim()}),f.querySelector("#stu-form").addEventListener("submit",async w=>{w.preventDefault();const $=f.querySelector("#stu-save");$.disabled=!0,$.textContent="กำลังบันทึก...";try{const x={student_code:f.querySelector("#sf-code").value.trim()||null,full_name:f.querySelector("#sf-name").value.trim()||null,main_room:f.querySelector("#sf-main-room").value.trim()||null,religion_room:f.querySelector("#sf-rel-room").value.trim()||null,gender:f.querySelector("#sf-gender-val").value||null,house_color:f.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:f.querySelector("#sf-shirt-size").value.trim()||null},i=f.querySelector("#sf-auth-email").value.trim()||null,j=f.querySelector("#sf-auth-pw").value.trim()||null;if(!a.profile_id&&!j){N("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),$.disabled=!1,$.textContent="บันทึก";return}await h(x,i||j?{email:i,password:j}:null),N("บันทึกสำเร็จ","success"),f.remove()}catch(x){N("บันทึกไม่สำเร็จ: "+fe(x),"error")}finally{$.disabled=!1,$.textContent="บันทึก"}})};const e=await St(),s=Re(e.map(a=>tt(a.main_room))),t=Re(e.map(a=>ut(a.main_room))),n=Re(e.map(a=>a.house_color)),l=Re(e.map(a=>a.sports_shirt_size));_e(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${Ue} flex-1 min-w-40" />
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
    </div>`);let o=Object.fromEntries(e.map(a=>[a.id,a])),p=1e3;const r=a=>{const m=document.getElementById("student-table-wrap"),h=p==="all"?a:a.slice(0,p);if(document.getElementById("sf-count").textContent=a.length,document.getElementById("sf-showing").textContent=h.length,!a.length){m.innerHTML=`<div class="text-center py-16 text-gray-400">
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
          ${h.map(f=>`
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
      ${h.length<a.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(a,m)=>{if(confirm(`ยืนยันลบนักเรียน "${m}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await jn(a),delete o[a],e.splice(e.findIndex(h=>h.id===a),1),N(`ลบ "${m}" แล้ว`,"success"),u()}catch(h){N("ลบไม่สำเร็จ: "+fe(h),"error")}},window._editStudent=async a=>{const m=o[a];if(!m)return;let h="";try{const{data:f,error:v}=await ie.rpc("lookup_student_by_code",{p_student_code:m.student_code});!v&&f&&f[0]&&(h=f[0].login_email||"")}catch(f){console.error(f)}d(m,h,async(f,v)=>{if(await Bn(a,f),v&&(v.email||v.password)){const{error:w}=await ie.rpc("admin_update_student_auth",{p_student_id:a,p_new_email:v.email||null,p_new_password:v.password||null});if(w)throw w}Object.assign(m,f),o[a]=m,u()})},r(e);const u=()=>{const a=document.getElementById("sf-q").value.toLowerCase(),m=document.getElementById("sf-grade").value,h=document.getElementById("sf-room"),f=h.value,v=Re(e.filter(_=>!m||tt(_.main_room)===m).map(_=>ut(_.main_room)));v.includes(f)||(h.value=""),h.innerHTML='<option value="">ทุกห้อง</option>'+v.map(_=>`<option value="${_}" ${_===h.value?"selected":""}>ห้อง ${_}</option>`).join("");const w=h.value,$=document.getElementById("sf-gender").value,x=document.getElementById("sf-house").value,i=document.getElementById("sf-shirt").value,j=document.getElementById("sf-page-size").value;p=j==="all"?"all":Number(j),r(e.filter(_=>(!a||[_.full_name,_.student_code,_.main_room,_.religion_room].some(C=>(C??"").toLowerCase().includes(a)))&&(!m||tt(_.main_room)===m)&&(!w||ut(_.main_room)===w)&&(!$||_.gender===$)&&(!x||_.house_color===x)&&(!i||_.sports_shirt_size===i)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(a=>{var m,h;(m=document.getElementById(a))==null||m.addEventListener("input",u),(h=document.getElementById(a))==null||h.addEventListener("change",u)})}catch{N("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function di(){const{getCommentPhrases:e,addCommentPhrase:s,updateCommentPhrase:t,deleteCommentPhrase:n}=await Se(async()=>{const{getCommentPhrases:u,addCommentPhrase:a,updateCommentPhrase:m,deleteCommentPhrase:h}=await import("./api-Bf4Tf4Cp.js");return{getCommentPhrases:u,addCommentPhrase:a,updateCommentPhrase:m,deleteCommentPhrase:h}},__vite__mapDeps([0,1,2,3,4])),l=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],o={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},p={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},r=document.createElement("div");r.style.cssText="padding:4px 0;";async function d(){const u=await e().catch(()=>[]);r.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${l.map(a=>{const m=u.filter(h=>h.metric===a.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${o[a.key]};color:${p[a.key]};padding:3px 12px;border-radius:20px;">${a.label}</span>
            <button class="ph-add-btn" data-metric="${a.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${m.map(h=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f9fafb;border-radius:8px;">
                <input class="ph-edit-inp" data-id="${h.id}" value="${h.phrase.replace(/"/g,"&quot;")}"
                  style="flex:1;border:none;background:transparent;font-size:13px;font-family:inherit;outline:none;"/>
                <button class="ph-save-btn" data-id="${h.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #059669;border-radius:6px;background:#d1fae5;color:#065f46;cursor:pointer;font-family:inherit;white-space:nowrap;">
                  บันทึก
                </button>
                <button class="ph-del-btn" data-id="${h.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:6px;background:#fee2e2;color:#dc2626;cursor:pointer;font-family:inherit;">
                  ลบ
                </button>
              </div>`).join("")}
            ${m.length?"":'<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>'}
          </div>
        </div>`}).join("")}
    `,r.querySelectorAll(".ph-add-btn").forEach(a=>{a.onclick=async()=>{const m=prompt("พิมพ์ประโยคใหม่:");m!=null&&m.trim()&&(await s(a.dataset.metric,m.trim()),d())}}),r.querySelectorAll(".ph-save-btn").forEach(a=>{a.onclick=async()=>{const m=r.querySelector(`.ph-edit-inp[data-id="${a.dataset.id}"]`);await t(parseInt(a.dataset.id),m.value.trim()),a.textContent="✓",setTimeout(()=>a.textContent="บันทึก",1e3)}}),r.querySelectorAll(".ph-del-btn").forEach(a=>{a.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await n(parseInt(a.dataset.id)),d())}})}return await d(),r}async function Ka(){Le("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",_e(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[e,s,t,n]=await Promise.all([Me(),ra().catch(()=>[]),nt().catch(()=>[]),uo().catch(()=>[])]);e.feedbackQuotaTeacher=e.feedbackQuotaTeacher||"5",e.feedbackQuotaStudent=e.feedbackQuotaStudent||"3",e.freeAttendanceScanLimit=e.freeAttendanceScanLimit||"2",e.freeRandomPickerLimit=e.freeRandomPickerLimit||"1",e.freeTimerLimit=e.freeTimerLimit||"1",e.freeDashboardLimit=e.freeDashboardLimit||"0",e.freePromptAiLimit=e.freePromptAiLimit||"1";let l=Yo(e);window._latestFullBackupId=null;const o=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],p=[...new Set([...o,...t.map(v=>v.dept_code).filter(Boolean),...n.map(v=>v.dept).filter(Boolean)])].sort(),r={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},d="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(v,w,$)=>{var j,_,C,T,D;const x=(_=(j=document.getElementById(w))==null?void 0:j.value)==null?void 0:_.trim(),i=document.getElementById($);if(!x){i.textContent="⚠️ ยังไม่ได้ใส่ Key",i.className="text-xs text-amber-500 font-medium";return}v.textContent="⏳",v.disabled=!0;try{const q=((T=(C=document.getElementById("cfg-geminiModel"))==null?void 0:C.value)==null?void 0:T.trim())||"gemini-1.5-flash",y=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${q}:generateContent?key=${x}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if(y.ok)i.textContent="✅ ใช้งานได้",i.className="text-xs text-emerald-600 font-semibold";else{const g=((D=(await y.json().catch(()=>({}))).error)==null?void 0:D.message)??`HTTP ${y.status}`;i.textContent=`❌ ${g.slice(0,60)}`,i.className="text-xs text-red-500 font-medium"}}catch{i.textContent="❌ เชื่อมต่อไม่ได้",i.className="text-xs text-red-500 font-medium"}v.textContent="ทดสอบ",v.disabled=!1};const u=({key:v,label:w,type:$,options:x,placeholder:i,hint:j,rows:_,syncFrom:C})=>{var y;const T=e[v]??"",D=`id="cfg-${v}" data-key="${v}"`,q=(c,g="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${w}</label>
          ${c}
          ${g?`<p class="text-[11px] text-gray-400 mt-1">${g}</p>`:""}
        </div>`;if($==="color")return q(`
        <div class="flex items-center gap-3">
          <input type="color" ${D} value="${T||r[v]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${v}-txt" class="text-sm font-mono text-gray-600">${T||r[v]||"#007bff"}</span>
        </div>`,j);if($==="date")return q(`<input type="date" ${D} value="${T}" class="${d}" />`,j);if($==="select")return q(`
        <select ${D} class="${d} bg-white">
          ${(x??[]).map(c=>{const g=typeof c=="object"?c.value:c,k=typeof c=="object"?c.label:c;return`<option value="${g}" ${g===T?"selected":""}>${k}</option>`}).join("")}
        </select>`,j);if($==="choice"){const c=T||((y=x==null?void 0:x[0])==null?void 0:y.value)||"";return q(`
          <input type="hidden" ${D} value="${te(c)}" />
          <div class="flex flex-wrap gap-2" role="group" aria-label="${te(w)}">
            ${(x??[]).map(g=>{const k=typeof g=="object"?g.value:g,b=typeof g=="object"?g.label:g;return`<button type="button" class="cfg-choice px-3 py-2 rounded-xl border text-sm font-semibold transition ${k===c?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}" data-choice-key="${te(v)}" data-choice-value="${te(k)}">
                ${te(b)}
              </button>`}).join("")}
          </div>`,j)}if($==="textarea")return q(`<textarea ${D} rows="${_??3}" placeholder="${i??""}"
          class="${d} resize-none">${T??""}</textarea>`,j);if($==="upload")return q(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${T?`<img src="${T}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${T?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${v}" />
          </label>
          ${/(?:LogoUrl|LogoBwUrl)$/.test(v)?`<button type="button"
            class="cfg-upload-clear ${T?"":"hidden"} flex-shrink-0 px-3 py-2 rounded-lg border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition"
            data-key="${v}">🗑️ ล้างโลโก้</button>`:""}
          <input type="hidden" ${D} value="${T}" />
        </div>`,j);if($==="toggle"){const c=T==="true";return q(`
          <button type="button" ${D} data-on="${c}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${c?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${c?"28":"2"}px)"></span>
          </button>`,j)}if($==="password"){const c=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(v),g=`const i=document.getElementById('cfg-${v}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,k=c?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${v}','cfg-${v}-st')">ทดสอบ</button>
             <span id="cfg-${v}-st" class="text-xs text-gray-400"></span>`:"";return q(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${D} value="${T}" class="${d} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${g}">ดู</button>
            ${k}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,j)}return q(C?`
        <div class="flex gap-2 items-center">
          <input type="text" ${D} value="${T??""}" placeholder="${i??""}" class="${d} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${C}','${v}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${D} value="${T??""}" placeholder="${i??""}" class="${d}" />`,j)},a=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"term-data",icon:"🗃️",label:"ข้อมูลทั้งหมด"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"subject-icons",icon:"📚",label:"ไอคอนรายวิชา"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],m=v=>{const w=($,x)=>`<div class="mb-6">
          ${$?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${$}</p>`:""}
          ${x.map(u).join("")}
        </div>`;if(v==="subject-icons"){const $=new Set(is.map(_=>_.key)),x=(_,C=!1)=>{const T=l[_.key],D=_.defaultValue??"",q=(T==null?void 0:T.type)==="emoji"?T.value:C?"":D,y=(T==null?void 0:T.type)==="image"?T.value:"";return`<div data-subject-visual-row="true" data-subject-visual-original="${te(_.key)}" class="rounded-2xl border border-gray-200 bg-gray-50/70 p-3" data-image-url="${te(y)}">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
              <div class="subject-visual-preview flex-shrink-0 w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-4xl overflow-hidden shadow-sm">
                ${y?`<img src="${te(y)}" alt="" class="w-full h-full object-contain" />`:te(q||"✨")}
              </div>
              <div class="min-w-0 flex-1 space-y-1.5">
                ${C?`<input type="text" class="subject-visual-key ${d}" value="${te(_.key)}" placeholder="เช่น code:ค33102 หรือ dept:MATH" />`:`<p class="text-sm font-bold text-gray-700">${te(_.label)}</p><p class="text-[11px] text-gray-400 font-mono">${te(_.key)}</p>`}
                <input type="text" class="subject-visual-value ${d}" value="${te(q)}" maxlength="8" placeholder="ใส่อิโมจิ เช่น 🇹🇭 หรือ 📘" />
              </div>
              <label class="cursor-pointer inline-flex flex-shrink-0 items-center justify-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50 transition">
                📁 PNG
                <input type="file" accept="image/png" class="hidden subject-visual-upload" />
              </label>
              ${C?'<button type="button" class="subject-visual-remove flex-shrink-0 px-2 py-2 rounded-xl text-xs text-red-500 hover:bg-red-50" title="ลบกติกานี้">ลบ</button>':""}
            </div>
          </div>`},i=is.map(_=>x(_)).join(""),j=Object.keys(l).filter(_=>!$.has(_)).map(_=>x({key:_,label:_},!0)).join("");return`<div class="space-y-5">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
            <p class="text-sm font-bold text-indigo-900">📚 ไอคอน/อิโมจิประจำรายวิชา</p>
            <p class="mt-1 text-xs leading-relaxed text-indigo-700">กำหนดภาพที่แสดงบนการ์ดคอร์สและห้องเรียนได้ตามกลุ่มวิชา ภาษา หรือรหัสวิชา ระบบจะเลือกกติกาเฉพาะรหัสวิชาก่อน แล้วจึงเลือกภาษา/กลุ่มสาระ/ค่าเริ่มต้นตามลำดับ</p>
            <p class="mt-2 text-[11px] text-indigo-600">PNG จะรักษาพื้นหลังโปร่งใส เหมาะสำหรับภาพตกแต่งขนาดใหญ่ที่วางซ้อนมุมขวาล่างของการ์ด</p>
          </div>
          <div class="space-y-2.5">${i}</div>
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
            ${(s.length?s:[{academic_year:e.academicYear,semester:e.semester,start_date:e.semester_start,end_date:e.semester_end,is_current:!0}]).map($=>`
              <div class="flex flex-wrap items-center justify-between gap-2 rounded-xl border ${$.is_current?"border-emerald-200 bg-emerald-50/60":"border-gray-100 bg-gray-50/60"} px-3 py-2.5">
                <div class="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <span>${$.is_current?"🟢":"🗂️"}</span>
                  <span>ภาค ${te($.semester)}/${te($.academic_year)}</span>
                  ${$.is_current?'<span class="text-[10px] rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">ปัจจุบัน</span>':'<span class="text-[10px] rounded-full bg-gray-200 text-gray-500 px-2 py-0.5">ย้อนหลัง</span>'}
                </div>
                <span class="text-[11px] text-gray-400">${te($.start_date??"—")} ถึง ${te($.end_date??"—")}</span>
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
        </div>`,w("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),w("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(v==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map($=>u({...$,type:"color"})).join("")}
        </div>`;if(v==="school"){const $=(x,i)=>[{key:`${x}SchoolName`,label:i.name,type:"text"},{key:`${x}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${x}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${x}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${x}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${x}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${x}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${x}AcademicHeadName`,label:x==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:x==="samai"?"academic_samai":"academic_pvch"},{key:`${x}AcademicHeadSignUrl`,label:x==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${x}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...x==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${x}RegistrarName`,label:x==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:x==="samai"?"registrar_samai":"registrar_pvch"},{key:`${x}RegistrarSignUrl`,label:x==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${x}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...x==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"},{key:"religionDeptHeadSource",label:"ชื่อหัวหน้ากลุ่มสาระในเอกสาร ปพ.5 (วิชาศาสนา)",type:"choice",options:[{value:"central",label:"ใช้หัวหน้ากลุ่มสาระกลาง"},{value:"subgroup",label:"ใช้หัวหน้ากลุ่มย่อยของครูผู้สอน"}],hint:"ใช้กับทั้งศาสนามัธยม (AGM) และศาสนาปวช. (AGMVOC) — หากเลือกหัวหน้ากลุ่มย่อยแต่ยังไม่พบกลุ่มของครู ระบบจะสำรองเป็นหัวหน้ากลุ่มสาระกลาง"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${$("samai",{name:"ชื่อโรงเรียน"}).map(u).join("")}</div>
          <div id="school-porwor" class="hidden">${$("porwor",{name:"ชื่อวิทยาลัย"}).map(u).join("")}</div>`}if(v==="prayer")return[w("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),w("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(v==="contact")return[w("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),w("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},($,x)=>String(x+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},($,x)=>String(x+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(v==="payment")return[w("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),w("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(v==="package"){const x=Array.from({length:5},(C,T)=>{const D=T+1,q=`donationStickerImg${D}`,y=e[q]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${y?`<img src="${y}" class="w-full h-full object-contain" id="sticker-prev-${D}" />`:`<span id="sticker-prev-${D}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${D}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${q}" data-n="${D}" />
              </label>
              ${y?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${q}" data-n="${D}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${q}" value="${y}" />
              ${y?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${y}</p>`:""}
            </div>
          </div>`}).join(""),i=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],j={quota:[w("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),w("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),w("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[w("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),w("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),w("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(C=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${C}">
                  👁️ ระดับ ${C}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const C=String(e.donationSpecialFeatures??"").trim(),D=C?C.split(`
`).filter(Boolean).map(g=>{const k=g.split("|").map(b=>b.trim());return{icon:k[0]||"✨",text:k[1]||"",minTier:parseInt(k[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([g,k,b])=>({icon:g,text:k,minTier:b})),q=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],y=(g,k)=>k?`border:2px solid ${q[g-1]};color:${q[g-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",c=(g,k)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${k}" data-min-tier="${g.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${g.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${g.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(b=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${y(b,g.minTier===b)}" data-n="${b}" title="ระดับ ${b}">${b}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${D.map((g,k)=>c(g,k)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(e.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),w("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${x}</div>
            </div>`,w("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),w("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[w("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[w("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),w("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},_="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${i.map(C=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${C.id===_?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${C.id}">${C.label}</button>`).join("")}
          </div>
          ${i.map(C=>`
          <div id="pkg-panel-${C.id}" ${C.id!==_?'class="hidden"':""}>
            ${j[C.id]??""}
          </div>`).join("")}`}if(v==="student")return[w("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),w("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),w("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),w("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),w("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
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
        </div>`].join("");if(v==="sync"){const $=[["classInfoSubjectNameCell","ชื่อรายวิชา"],["classInfoSubjectCodeCell","รหัสวิชา"],["classInfoCreditCell","หน่วยกิต"],["classInfoGradeCell","ชั้นเรียน"],["classInfoHeadStudentCell","หัวหน้าห้อง"],["classInfoDay1Cell","วันสอนคาบ 1"],["classInfoDay2Cell","วันสอนคาบ 2"],["classInfoDay3Cell","วันสอนคาบ 3"],["classInfoDay4Cell","วันสอนคาบ 4"],["classInfoDay5Cell","วันสอนคาบ 5"],["classInfoDay6Cell","วันสอนคาบ 6"],["classInfoTeacherNameCell","ครูผู้สอน"],["classInfoTeacherPhoneCell","เบอร์ติดต่อ"],["classInfoDeptCell","กลุ่มสาระ"],["classInfoHeadDeptCell","หัวหน้าหมวด"]];return`
          ${u({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          ${u({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${$.map(([x,i])=>{const j=e[x]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${i}</p>
                <input type="text" id="cfg-${x}" data-key="${x}" value="${j}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return v==="template"?[w("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${Go.map($=>u({key:$.key,label:`${$.category} — ${$.label}`,type:"text",placeholder:$.defaultId,hint:`default: ${$.defaultId}`})).join("")}`].join(""):v==="phrases"?di():v==="schedule"?[w("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),w("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),w("Gemini API Key แยกต่อกลุ่มสาระ",p.length?p.map($=>({key:`geminiKey_${$}`,label:`Key กลุ่มสาระ ${$}`,type:"password",hint:`ครูที่มี dept = ${$} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):v==="council"?[w("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let h="general";_e(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${a.map(v=>`
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${v.id===h?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
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
    </div>`);const f=v=>{var Fe,Je;h=v,document.querySelectorAll(".cfg-tab").forEach(P=>{const ce=P.dataset.tab===v;P.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${ce?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const w=m(v),$=document.getElementById("cfg-panel-inner");w instanceof Promise?($.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',w.then(P=>{$.innerHTML="",P instanceof Element?$.appendChild(P):$.innerHTML=P??""})):w instanceof Element?($.innerHTML="",$.appendChild(w)):$.innerHTML=w??"",document.getElementById("cfg-save-hint").textContent="";const x=document.getElementById("btn-create-full-backup"),i=document.getElementById("btn-reset-full-backup"),j=document.getElementById("full-backup-status"),_=document.getElementById("full-backup-progress-wrap"),C=document.getElementById("full-backup-progress-label"),T=document.getElementById("full-backup-progress-detail"),D=document.getElementById("full-backup-progress-bar"),q=document.getElementById("full-backup-progress-note"),y=document.getElementById("btn-create-term-backup"),c=document.getElementById("btn-resume-term-backup"),g=document.getElementById("btn-clear-term-backup"),k=document.getElementById("term-backup-status"),b=document.getElementById("term-backup-progress-wrap"),L=document.getElementById("term-backup-progress-label"),E=document.getElementById("term-backup-progress-count"),B=document.getElementById("term-backup-progress-bar"),H=async P=>{if(!P&&!confirm("สร้างไฟล์สำรองเฉพาะข้อมูลการเข้าเรียนและคะแนนละหมาดของภาคเรียนปัจจุบันใช่หรือไม่?"))return;const ce=P?null:Ol(),le=parseInt(e.academicYear??e.academic_year),ne=parseInt(e.semester);let G=P?"กำลังตรวจสอบจุดสำรองเดิม":"กำลังเริ่มสำรองข้อมูล";const J=Date.now();let de=J;y&&(y.disabled=!0),c&&(c.disabled=!0),g&&(g.disabled=!0),y&&(y.textContent=P?"⏳ กำลังทำสำรองต่อ...":"⏳ กำลังสำรองข้อมูลภาคเรียน..."),b==null||b.classList.remove("hidden"),L&&(L.textContent=G),E&&(E.textContent=""),!P&&B&&(B.style.width="0%");const oe=setInterval(()=>{if(Date.now()-de<15e3||!k)return;const X=Math.floor((Date.now()-J)/1e3);k.textContent=`${G} · ${X.toLocaleString()} วินาที`},5e3);try{const X=await Jl({saveTarget:ce,resume:P,academicYear:le,semester:ne,onProgress:(ee,pe,ye)=>{G=ee,de=Date.now(),k&&(k.textContent=ee),L&&(L.textContent=`${ee}${(ye==null?void 0:ye.percent)!=null?` · ${ye.percent}%`:""}`),E&&(E.textContent=(ye==null?void 0:ye.totalRows)!=null?`${ye.completedRows.toLocaleString()}/${ye.totalRows.toLocaleString()} รายการ`:pe?`${pe.toLocaleString()} รายการ`:""),B&&(ye==null?void 0:ye.percent)!=null&&(B.style.width=`${Math.max(0,Math.min(100,ye.percent))}%`)}});window._latestTermBackupId=X.backupId,y&&(y.disabled=!1),k&&(k.textContent=`สำเร็จ ${X.academicYear}/${X.semester} · เข้าเรียน ${X.counts.attendances.toLocaleString()} · ละหมาด ${X.counts.prayer_records.toLocaleString()} · ${(X.byteSize/1024/1024).toFixed(1)} MB`),L&&(L.textContent="ตรวจสอบและลงทะเบียนไฟล์สำรองสำเร็จ · 100%"),B&&(B.style.width="100%"),c==null||c.classList.add("hidden"),g==null||g.classList.add("hidden"),N("สำรองข้อมูลที่จะล้างก่อนขึ้นภาคเรียนสำเร็จ ✅","success")}catch(X){k&&(k.textContent=(X==null?void 0:X.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ไม่มีข้อมูลถูกลบ":"สำรองข้อมูลภาคเรียนไม่สำเร็จ · ตรวจสอบข้อความผิดพลาดและเลือก “ทำสำรองต่อ” ได้"),N("สำรองข้อมูลภาคเรียนไม่สำเร็จ: "+fe(X),"error");const ee=await fs(le,ne);c==null||c.classList.toggle("hidden",!ee),g==null||g.classList.toggle("hidden",!ee),y&&ee&&(y.disabled=!0,y.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่")}finally{if(clearInterval(oe),y){const X=c&&!c.classList.contains("hidden");y.disabled=!!X,y.textContent=X?"⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่":"⬇️ สำรองข้อมูลก่อนขึ้นภาคเรียน"}c&&(c.disabled=!1),g&&(g.disabled=!1)}};y&&!y.dataset.bound&&(y.dataset.bound="true",y.addEventListener("click",()=>H(!1))),c&&!c.dataset.bound&&(c.dataset.bound="true",c.addEventListener("click",()=>H(!0))),g&&!g.dataset.bound&&(g.dataset.bound="true",g.addEventListener("click",async()=>{const P=parseInt(e.academicYear??e.academic_year),ce=parseInt(e.semester);if(confirm("ล้างเฉพาะจุดสำรองภาคเรียนที่ค้างในเบราว์เซอร์ใช่หรือไม่? ไฟล์ที่เลือกไว้จะไม่ถูกลบ"))try{await Fl(P,ce),c.classList.add("hidden"),g.classList.add("hidden"),y&&(y.disabled=!1),k&&(k.textContent="ล้างจุดสำรองค้างแล้ว · สามารถเริ่มไฟล์ใหม่ได้")}catch(le){N("ล้างจุดสำรองค้างไม่สำเร็จ: "+fe(le),"error")}})),c&&fs(parseInt(e.academicYear??e.academic_year),parseInt(e.semester)).then(P=>{c.classList.toggle("hidden",!P),g==null||g.classList.toggle("hidden",!P),y&&(y.disabled=!!P),y&&P&&(y.textContent="⏸ มีงานค้าง · ทำต่อหรือล้างก่อนเริ่มใหม่"),P&&k&&(k.textContent=`พบงานค้าง ${P.academicYear}/${P.semester} · ต่อจาก ${P.completedRows.toLocaleString()}/${P.totalRows.toLocaleString()} รายการ`)}).catch(P=>console.warn("อ่านจุดสำรองภาคเรียนไม่สำเร็จ:",P));let S=null,I=!1;const R=P=>{var le;if(!_||!P)return;_.classList.remove("hidden");const ce=Math.max(0,Math.min(100,Number(P.percent)||0));if(C&&(C.textContent=`ความคืบหน้าโดยประมาณ ${ce}%`),D&&(D.style.width=`${ce}%`,(le=D.parentElement)==null||le.setAttribute("aria-valuenow",String(ce))),T){const ne=P.tableCount?`ตาราง ${Math.min(P.tableIndex+1,P.tableCount).toLocaleString()}/${P.tableCount.toLocaleString()}`:"",G=P.estimatedTotalRows?`ข้อมูลประมาณ ${P.completedRows.toLocaleString()}/${P.estimatedTotalRows.toLocaleString()} รายการ`:"";T.textContent=[ne,G].filter(Boolean).join(" · ")}q&&(P.storageCount>0&&P.percent>=90?q.textContent=`กำลังสำรองไฟล์ Storage ${P.storageIndex.toLocaleString()}/${P.storageCount.toLocaleString()}`:P.currentTableEstimate>0?q.textContent=`ตารางปัจจุบัน: ${P.currentTableRows.toLocaleString()}/${P.currentTableEstimate.toLocaleString()} รายการ (ตัวเลขโดยประมาณจากสถิติฐานข้อมูล)`:q.textContent="กำลังอ่านและเขียนข้อมูลเป็นช่วง ๆ สามารถสำรองต่อจากจุดล่าสุดได้หากการเชื่อมต่อหลุด")},F=async()=>{const P=await wa().catch(()=>null);if(S=P,I=!0,x&&(x.disabled=!1),i&&(i.classList.toggle("hidden",!P),i.disabled=!1),!!x){if(!P){x.textContent="⬇️ สำรองข้อมูลทั้งหมด";return}if(x.textContent="▶️ สำรองต่อจากจุดล่าสุด",j){const ce=P.phase==="finalizing"?"กำลังตรวจสอบไฟล์สำรอง":P.phase==="storage"?`ไฟล์ Storage ${P.storageIndex.toLocaleString()}/${P.storageCount.toLocaleString()}`:`${P.tableName??"ตาราง"} ${P.tableIndex+1}/${P.tableCount}`;j.textContent=`พบงานสำรองที่หยุดไว้ · ${ce}${P.phase==="storage"||P.phase==="finalizing"?"":` · ${P.rowOffset.toLocaleString()} รายการ`}`,R(P.progress)}}};x&&(x.disabled=!0),F(),x&&!x.dataset.bound&&(x.dataset.bound="true",x.addEventListener("click",async()=>{if(!I){N("กำลังตรวจงานสำรองค้าง กรุณารอสักครู่แล้วลองใหม่","info");return}if(!confirm("ยืนยันสร้างไฟล์สำรองข้อมูลทั้งหมดของระบบ? ไฟล์อาจมีข้อมูลส่วนบุคคลจำนวนมาก"))return;const P=S?null:Rl();let ce=Date.now();const le=ce;x.disabled=!0,i&&(i.disabled=!0),x.textContent="⏳ กำลังสำรองข้อมูลทั้งหมด...";let ne=P?"กำลังเลือกตำแหน่งไฟล์สำรอง":"กำลังเตรียมรายการตาราง";j&&(j.textContent=ne),R({percent:0,tableIndex:0,tableCount:0,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0});const G=setInterval(()=>{if(!j||Date.now()-ce<15e3)return;const J=Math.floor((Date.now()-le)/1e3);j.textContent=`กำลังทำขั้นตอน: ${ne} · ${J.toLocaleString()} วินาที`},5e3);try{const J=await Kl({saveTarget:P,onProgress:(de,oe,X)=>{ce=Date.now(),ne=de,j&&(j.textContent=`${de}${oe?` · ${oe.toLocaleString()} รายการ`:""}`),R(X)}});window._latestFullBackupId=J.backupId;try{localStorage.setItem("pp5_latest_full_backup_id",J.backupId??"")}catch{}j&&(j.textContent=`สำเร็จ: ${J.fileName} · ${Math.round(J.byteSize/1024/1024)} MB · ${J.tableCount} ตาราง`),R({percent:100,tableIndex:J.tableCount,tableCount:J.tableCount,completedRows:0,estimatedTotalRows:0,storageIndex:0,storageCount:0}),N(`สำรองข้อมูลทั้งหมดสำเร็จ และ${J.savedToDisk?"บันทึกไฟล์ลงดิสก์แล้ว":"ดาวน์โหลดไฟล์แล้ว"} ✅`,"success")}catch(J){const de=await wa().catch(()=>null);S=de,j&&(j.textContent=(J==null?void 0:J.name)==="AbortError"?"ยกเลิกการเลือกตำแหน่งไฟล์ · ข้อมูลในฐานข้อมูลไม่ถูกเปลี่ยนแปลง":de?`หยุดไว้ชั่วคราว · กดปุ่มเดิมเพื่อสำรองต่อจาก ${de.tableName??"จุดล่าสุด"}`:"สำรองข้อมูลไม่สำเร็จ"),(J==null?void 0:J.code)==="BACKUP_FILE_MISSING"&&j&&(j.textContent="ไม่พบไฟล์เดิมแล้ว · กด “ล้างงานสำรองค้าง” แล้วเริ่มสำรองใหม่"),N("สำรองข้อมูลไม่สำเร็จ: "+fe(J),"error")}finally{clearInterval(G),x.disabled=!1;const J=await wa().catch(()=>null);S=J,I=!0,x.textContent=J?"▶️ สำรองต่อจากจุดล่าสุด":"⬇️ สำรองข้อมูลทั้งหมด",i&&(i.classList.toggle("hidden",!J),i.disabled=!1)}})),i&&!i.dataset.bound&&(i.dataset.bound="true",i.addEventListener("click",async()=>{if(confirm("ล้างเฉพาะงานสำรองค้างในเบราว์เซอร์ใช่หรือไม่? การทำงานนี้จะไม่ลบข้อมูลในฐานข้อมูลหรือไฟล์อื่น")){i.disabled=!0;try{await zl(),j&&(j.textContent="ล้างงานสำรองค้างแล้ว · กด “สำรองข้อมูลทั้งหมด” เพื่อเลือกตำแหน่งไฟล์ใหม่"),_&&_.classList.add("hidden"),x&&(x.textContent="⬇️ สำรองข้อมูลทั้งหมด"),i.classList.add("hidden"),N("ล้างงานสำรองค้างแล้ว สามารถเริ่มไฟล์ใหม่ได้ ✅","success")}catch(P){i.disabled=!1,N("ล้างงานสำรองค้างไม่สำเร็จ: "+fe(P),"error")}}}));const A=document.getElementById("full-backup-file"),U=document.getElementById("btn-restore-full-backup"),z=document.getElementById("full-restore-status");A&&U&&!A.dataset.bound&&(A.dataset.bound="true",A.addEventListener("change",()=>{var P,ce;U.disabled=!((P=A.files)!=null&&P[0]),z&&(z.textContent=(ce=A.files)!=null&&ce[0]?`เลือกไฟล์: ${A.files[0].name}`:"")}),U.addEventListener("click",async()=>{var ce;const P=(ce=A.files)==null?void 0:ce[0];if(P&&confirm("ยืนยันกู้คืนข้อมูลตามขอบเขตของไฟล์นี้? ระบบจะเพิ่มหรือปรับเฉพาะข้อมูลในไฟล์ และไม่ลบข้อมูลอื่น")){U.disabled=!0,U.textContent="⏳ กำลังกู้คืน...";try{const le=await td(P,{onProgress:(ne,G)=>{z&&(z.textContent=`${ne} · ${G.toLocaleString()} รายการ`)}});z&&(z.textContent=`กู้คืนสำเร็จ · SHA-256: ${le.sha256.slice(0,16)}…`),N("กู้คืนข้อมูลจากไฟล์สำรองสำเร็จ ✅","success")}catch(le){z&&(z.textContent="กู้คืนข้อมูลไม่สำเร็จ"),N("กู้คืนข้อมูลไม่สำเร็จ: "+fe(le),"error")}finally{U.disabled=!1,U.textContent="♻️ กู้คืนจากไฟล์สำรอง"}}})),document.querySelectorAll(".cfg-choice").forEach(P=>{P.addEventListener("click",()=>{var ne;const ce=P.dataset.choiceKey,le=document.getElementById(`cfg-${ce}`);le&&(le.value=P.dataset.choiceValue),(ne=P.parentElement)==null||ne.querySelectorAll(".cfg-choice").forEach(G=>{const J=G===P;G.classList.toggle("border-indigo-500",J),G.classList.toggle("bg-indigo-50",J),G.classList.toggle("text-indigo-700",J),G.classList.toggle("border-gray-200",!J),G.classList.toggle("bg-white",!J),G.classList.toggle("text-gray-500",!J)})})}),document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(P=>{P.addEventListener("input",()=>{const ce=document.getElementById(`${P.id}-txt`);ce&&(ce.textContent=P.value)})});const O=document.getElementById("cfg-subjectVisuals"),W=()=>{document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"]').forEach(P=>{var J,de,oe,X,ee;const ce=(J=P.dataset.subjectVisualOriginal)==null?void 0:J.trim(),le=((de=P.querySelector(".subject-visual-key"))==null?void 0:de.value.trim())||((oe=P.dataset.subjectVisualOriginal)==null?void 0:oe.trim()),ne=(X=P.querySelector(".subject-visual-value"))==null?void 0:X.value.trim(),G=(ee=P.dataset.imageUrl)==null?void 0:ee.trim();ce&&ce!==le&&delete l[ce],le&&(ne?l[le]={type:"emoji",value:ne.slice(0,8)}:G?l[le]={type:"image",value:G}:delete l[le])}),O&&(O.value=JSON.stringify(l))},Y=P=>{var ce,le;P.querySelectorAll(".subject-visual-key, .subject-visual-value").forEach(ne=>{ne.addEventListener("input",()=>{W();const G=P.querySelector(".subject-visual-preview");G&&ne.classList.contains("subject-visual-value")&&ne.value.trim()&&(G.textContent=ne.value.trim())})}),(ce=P.querySelector(".subject-visual-remove"))==null||ce.addEventListener("click",()=>{var G;const ne=(G=P.querySelector(".subject-visual-key"))==null?void 0:G.value.trim();ne&&delete l[ne],P.remove(),W()}),(le=P.querySelector(".subject-visual-upload"))==null||le.addEventListener("change",async ne=>{var oe,X,ee;const G=(oe=ne.target.files)==null?void 0:oe[0];if(!G)return;if(G.type!=="image/png"){N("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),ne.target.value="";return}const J=((X=P.querySelector(".subject-visual-key"))==null?void 0:X.value.trim())||((ee=P.dataset.subjectVisualOriginal)==null?void 0:ee.trim());if(!J){N("กรุณาระบุคีย์ก่อนอัปโหลด เช่น code:ค33102","warning"),ne.target.value="";return}const de=J.replace(/[^a-zA-Z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,80)||`icon-${Date.now()}`;ne.target.disabled=!0;try{const pe=await us(`subject-visuals/${de}`,G);P.dataset.imageUrl=pe;const ye=P.querySelector(".subject-visual-value");ye&&(ye.value="");const be=P.querySelector(".subject-visual-preview");be&&(be.innerHTML=`<img src="${te(pe)}" alt="" class="w-full h-full object-contain" />`),W(),N("อัปโหลดไอคอนรายวิชาสำเร็จ · กดบันทึกเพื่อใช้งาน","success")}catch(pe){N("อัปโหลดไอคอนไม่สำเร็จ: "+fe(pe),"error")}finally{ne.target.disabled=!1,ne.target.value=""}})};document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"]').forEach(Y),(Fe=document.querySelector("[data-subject-visual-add]"))==null||Fe.addEventListener("click",()=>{var le;const P=document.querySelector("[data-subject-visual-custom-list]");if(!P)return;const ce=document.createElement("div");ce.setAttribute("data-subject-visual-row","true"),ce.className="rounded-2xl border border-gray-200 bg-gray-50/70 p-3",ce.innerHTML=`<div class="flex flex-col sm:flex-row sm:items-center gap-3">
          <div class="subject-visual-preview flex-shrink-0 w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-4xl overflow-hidden shadow-sm">✨</div>
          <div class="min-w-0 flex-1 space-y-1.5">
            <input type="text" class="subject-visual-key input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="เช่น code:ค33102 หรือ dept:MATH" />
            <input type="text" class="subject-visual-value input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" maxlength="8" placeholder="ใส่อิโมจิ เช่น 🇹🇭 หรือ 📘" />
          </div>
          <label class="cursor-pointer inline-flex flex-shrink-0 items-center justify-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 bg-white text-xs font-bold text-indigo-700 hover:bg-indigo-50 transition">📁 PNG<input type="file" accept="image/png" class="hidden subject-visual-upload" /></label>
          <button type="button" class="subject-visual-remove flex-shrink-0 px-2 py-2 rounded-xl text-xs text-red-500 hover:bg-red-50">ลบ</button>
        </div>`,P.appendChild(ce),Y(ce),(le=ce.querySelector(".subject-visual-key"))==null||le.focus()});const M=()=>{const ce=[...document.querySelectorAll("#feat-editor .feat-row")].map(ne=>{var oe,X;const G=((oe=ne.querySelector(".feat-icon"))==null?void 0:oe.value.trim())||"✨",J=((X=ne.querySelector(".feat-text"))==null?void 0:X.value.trim())||"",de=ne.dataset.minTier||"1";return J?`${G}|${J}|${de}`:null}).filter(Boolean).join(`
`),le=document.getElementById("cfg-donationSpecialFeatures");le&&(le.value=ce)},V=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],K=P=>{var ce,le,ne;P.querySelectorAll(".feat-tier-btn").forEach(G=>{G.addEventListener("click",()=>{const J=parseInt(G.dataset.n);P.dataset.minTier=String(J),P.querySelectorAll(".feat-tier-btn").forEach(de=>{const oe=parseInt(de.dataset.n);de.style.cssText=oe===J?`border:2px solid ${V[oe-1]};color:${V[oe-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),M()})}),(ce=P.querySelector(".feat-icon"))==null||ce.addEventListener("input",M),(le=P.querySelector(".feat-text"))==null||le.addEventListener("input",M),(ne=P.querySelector(".feat-del"))==null||ne.addEventListener("click",()=>{P.remove(),M()})};document.querySelectorAll("#feat-editor .feat-row").forEach(K),(Je=document.getElementById("feat-add"))==null||Je.addEventListener("click",()=>{var ne;const P=document.getElementById("feat-editor");if(!P)return;const ce=P.children.length,le=document.createElement("div");le.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",le.dataset.idx=ce,le.dataset.minTier="1",le.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(G=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${G===1?`border:2px solid ${V[0]};color:${V[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${G}" title="ระดับ ${G}">${G}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,P.appendChild(le),K(le),(ne=le.querySelector(".feat-text"))==null||ne.focus()}),document.querySelectorAll(".pkg-stab").forEach(P=>{P.addEventListener("click",()=>{var le;const ce=P.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(ne=>{ne.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${ne.dataset.pstab===ce?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(ne=>ne.classList.add("hidden")),(le=document.getElementById(`pkg-panel-${ce}`))==null||le.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(P=>{P.addEventListener("change",async ce=>{const le=ce.target.files[0];if(!le)return;if(le.type!=="image/png"){N("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),P.value="";return}const ne=P.dataset.skey,G=P.dataset.n;P.disabled=!0;try{const J=await us(ne,le),de=document.getElementById(`cfg-${ne}`);de&&(de.value=J),await Ee(ne,J);const oe=document.getElementById(`sticker-prev-${G}`);if(oe){const X=document.createElement("img");X.src=J,X.className="w-full h-full object-contain",oe.replaceWith(X),X.id=`sticker-prev-${G}`}N(`อัปโหลดสติกเกอร์ ${G} สำเร็จ ✅`,"success")}catch(J){N("อัปโหลดไม่สำเร็จ: "+fe(J),"error")}finally{P.disabled=!1}})});const Q=P=>{const ce=String(P.donationStickerTiers??"").trim(),le=parseInt(P.donationMinAmount??99)||99,ne=parseInt(P.donationAmountStep??50)||50;return(ce?ce.split(`
`).filter(Boolean).map(de=>{const[oe,X,ee,pe,ye]=de.split("|").map(be=>be.trim());return{amount:parseInt(oe)||0,sticker:X||"🏅",title:ee||"",note:pe||"",color:ye||""}}).filter(de=>de.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([de,oe,X,ee,pe])=>({amount:de,sticker:oe,title:X,note:ee,color:pe}))).sort((de,oe)=>de.amount-oe.amount).map((de,oe)=>{const X=(P[`donationStickerImg${oe+1}`]??"").trim();return X&&/^https?:\/\//.test(X)?{...de,sticker:X}:de})},Z=P=>{const ce=String(P.donationSpecialFeatures??"").trim(),le=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return ce?ce.split(`
`).filter(Boolean).map(ne=>{const G=ne.split("|").map(J=>J.trim());return{icon:G[0]||"✨",text:G[1]||G[0]||ne,minTier:parseInt(G[2])||1}}).filter(ne=>ne.text):le.map(([ne,G,J])=>({icon:ne,text:G,minTier:J}))},se=(P,ce,le,ne=4)=>{var ye;(ye=document.getElementById("tier-preview-modal"))==null||ye.remove();const G=P.color||"#f59e0b",J=parseInt(G.slice(1,3),16),de=parseInt(G.slice(3,5),16),oe=parseInt(G.slice(5,7),16),X=String(P.sticker??""),ee=/^https?:\/\//.test(X)?`<img src="${X}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${X}</div>`,pe=document.createElement("div");pe.id="tier-preview-modal",pe.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",pe.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${J},${de},${oe},0.85),rgba(${J},${de},${oe},1))">
              ${ee}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${P.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${P.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${le}
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
                style="background:rgba(${J},${de},${oe},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(pe),pe.addEventListener("click",be=>{be.target===pe&&pe.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(P=>{P.addEventListener("click",()=>{const ce=parseInt(P.dataset.tier),le={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(oe=>{const X=oe.id.replace(/^cfg-/,"");le[X]=oe.value??oe.dataset.on});const ne=Q(le),G=Z(le),J=ne[ce-1]??ne[0];if(!J){N("ยังไม่มีข้อมูล tier","warning");return}const de=(le.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;se(J,G,de,ce)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.skey,le=P.dataset.n;await Ee(ce,"").catch(()=>{});const ne=document.getElementById(`cfg-${ce}`);ne&&(ne.value="");const G=document.getElementById(`sticker-prev-${le}`);G&&(G.outerHTML=`<span id="sticker-prev-${le}" class="text-2xl text-gray-300">🏅</span>`),P.remove(),N("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(P=>{P.addEventListener("click",()=>{const ce=P.dataset.stab;document.querySelectorAll(".school-stab").forEach(le=>{le.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${le.dataset.stab===ce?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",ce!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",ce!=="porwor")})});const ae=document.getElementById("btn-sync-students-now"),me=document.getElementById("btn-download-student-sync-template");me&&me.addEventListener("click",()=>{const ce="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(J=>J.map(de=>`"${String(de).replace(/"/g,'""')}"`).join(",")).join(`
`),le=new Blob([ce],{type:"text/csv;charset=utf-8"}),ne=URL.createObjectURL(le),G=document.createElement("a");G.href=ne,G.download="pp5-students-sync-template.csv",document.body.appendChild(G),G.click(),G.remove(),URL.revokeObjectURL(ne),N("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const ue=document.getElementById("btn-start-new-semester"),we=document.getElementById("start-new-semester-target");if(ue){const P=parseInt(e.semester??1),ce=parseInt(e.academicYear??new Date().getFullYear()+543),le=P===1?2:1,ne=P===1?ce:ce+1;we&&(we.textContent=`ตอนนี้: ภาคเรียนที่ ${P}/${ce}  →  จะขึ้นเป็น: ภาคเรียนที่ ${le}/${ne}`),ue.addEventListener("click",async()=>{var de,oe,X;const G=((de=document.getElementById("start-new-semester-start"))==null?void 0:de.value)??"",J=((oe=document.getElementById("start-new-semester-end"))==null?void 0:oe.value)??"";if(!G||!J||J<G){N("กรุณาระบุวันเปิด-ปิดภาคเรียนใหม่ให้ถูกต้อง","warning");return}ue.disabled=!0,ue.textContent="⏳ กำลังตรวจสอบไฟล์สำรอง...";try{const ee=await ad(ce,P);if(!ee){N("กรุณาสร้างไฟล์สำรองที่ตรวจสอบแล้วของภาคเรียนปัจจุบันก่อน","warning"),(X=document.querySelector('.cfg-tab[data-tab="term-data"]'))==null||X.click(),ue.disabled=!1,ue.textContent="🔄 ขึ้นภาคเรียนใหม่";return}ue.textContent="⏳ กำลังดำเนินการ...";const pe=await po(ne,le,G,J);if(!await Yd({year:ne,semester:le,start:G,end:J,preview:pe})){ue.disabled=!1,ue.textContent="🔄 ขึ้นภาคเรียนใหม่";return}const be=Kd(),ve=Number((pe==null?void 0:pe.attendances_to_clear)??0),ge=Number((pe==null?void 0:pe.prayer_records_to_clear)??0),$e=ve+ge;let he=0;const ke=async(Ce,Be,ot)=>{let Ye=!0,xt=0;for(;Ye;){be.update(`กำลังล้าง${Be}: ${he.toLocaleString()} / ${$e.toLocaleString()} รายการ`,$e?he*100/$e:90);const Qe=await mo(Ce,ee,5e3),gt=Number((Qe==null?void 0:Qe.deleted_rows)??0);if(he+=gt,Ye=!!(Qe!=null&&Qe.has_more),gt===0&&Ye){if(xt+=1,xt>=3)throw new Error(`พบข้อมูล${Be}ที่ยังล้างไม่สำเร็จ กรุณาลองดำเนินการต่ออีกครั้ง`);await new Promise(Dt=>setTimeout(Dt,500*xt))}else xt=0;const qe=ot===0||!Ye,Ke=$e?Math.min(90,he*90/$e):90;be.update(qe?`ล้าง${Be}แล้ว ${he.toLocaleString()} / ${$e.toLocaleString()} รายการ`:`กำลังล้าง${Be}: ${he.toLocaleString()} / ${$e.toLocaleString()} รายการ`,Ke)}};try{await ke("attendances","ข้อมูลเข้าเรียน",ve),await ke("prayer_records","คะแนนละหมาด",ge),be.update("กำลังบันทึกภาคเรียนใหม่และตั้งค่าสิทธิ์...",95),await xo(ne,le,G,J,ee,!0),be.update("ขึ้นภาคเรียนใหม่สำเร็จ",100)}finally{be.close()}e.semester=String(le),e.academicYear=String(ne),e.semester_start=G,e.semester_end=J,e.unlimitedTeacherClassCreation="true",N(`ขึ้นภาคเรียนที่ ${le}/${ne} สำเร็จ ✅ สำรองข้อมูลแล้ว ล้างข้อมูลเข้าเรียน/ละหมาด และเปิดให้ครูสร้างห้องได้ไม่จำกัด`,"success"),Ka()}catch(ee){const pe=(ee==null?void 0:ee.code)==="57014"?"คำสั่งใช้เวลานานเกินกำหนด ข้อมูลที่ล้างสำเร็จแล้วยังอยู่ในไฟล์สำรอง กดขึ้นภาคเรียนใหม่อีกครั้งเพื่อทำต่อจากรายการที่เหลือ":fe(ee);N("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+pe,"error"),ue.disabled=!1,ue.textContent="🔄 ขึ้นภาคเรียนใหม่"}})}const Ie=P=>{const ce=document.getElementById("student-sync-log-section"),le=document.getElementById("student-sync-log-content");if(!ce||!le)return;const ne=new Date(P.synced_at),G=ne.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),J=ne.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),de=P.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",oe=(P.new_students||[]).map(ee=>`<span class="text-green-700">${ee.full_name} (${ee.student_code})</span>`).join(", ")||"—",X=(P.deactivated_students||[]).map(ee=>`<span class="text-red-500">${ee.full_name} (${ee.student_code})</span>`).join(", ")||"—";le.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${G} ${J}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${de}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${P.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${P.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${P.new_count} คน:</span> ${oe}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${P.deactivated_count} คน:</span> ${X}
          </div>`,ce.classList.remove("hidden")},Te=async()=>{try{const{data:P}=await ie.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();P&&Ie(P)}catch{}};Te(),ae&&ae.addEventListener("click",async()=>{var ne,G,J,de,oe,X;const P=((G=(ne=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:ne.value)==null?void 0:G.trim())||"",ce=((de=(J=document.getElementById("cfg-studentSyncTabName"))==null?void 0:J.value)==null?void 0:de.trim())||"",le=((X=(oe=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:oe.value)==null?void 0:X.trim())||"1";ae.disabled=!0,ae.textContent="กำลังซิงก์...";try{await Promise.all([Ee("studentSyncSheetId",P),Ee("studentSyncTabName",ce),Ee("studentSyncHeaderRow",le)]);const ee=await Wo({sourceSheetId:P,tabName:ce,headerRow:le}),pe=`ซิงก์สำเร็จ: อ่าน ${ee.read??0} แถว / บันทึก ${ee.written??0} คน / ใหม่ ${ee.newCount??0} / ซ่อน ${ee.deactivatedCount??0} ✅`;N(pe,"success"),Te()}catch(ee){N("ซิงก์นักเรียนไม่สำเร็จ: "+fe(ee),"error")}finally{ae.disabled=!1,ae.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(P=>{P.addEventListener("change",async ce=>{var J,de,oe,X;const le=ce.target.files[0];if(!le)return;const ne=P.dataset.key,G=document.getElementById(`cfg-${ne}`);P.disabled=!0;try{const ee=await rl(ne,le),pe=/(?:LogoUrl|LogoBwUrl)$/.test(ne)?`${ee}${ee.includes("?")?"&":"?"}v=${Date.now()}`:ee;G&&(G.value=pe),await Ee(ne,pe),N("อัปโหลดสำเร็จ ✅","success");const ye=(J=P.closest(".flex"))==null?void 0:J.querySelector("img"),be=(de=P.closest(".flex"))==null?void 0:de.querySelector("div.w-14");ye?ye.src=pe:be&&(be.outerHTML=`<img src="${pe}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`),(X=(oe=P.closest(".flex"))==null?void 0:oe.querySelector(".cfg-upload-clear"))==null||X.classList.remove("hidden")}catch(ee){N("อัปโหลดไม่สำเร็จ: "+fe(ee),"error")}finally{P.disabled=!1}})}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-clear").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.key;if(!(!ce||!confirm("ต้องการล้างโลโก้นี้ออกจากการตั้งค่าหรือไม่?"))){P.disabled=!0;try{await Ee(ce,"");const le=P.closest(".flex"),ne=document.getElementById(`cfg-${ce}`);ne&&(ne.value="");const G=le==null?void 0:le.querySelector("img");G&&(G.outerHTML='<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'),P.classList.add("hidden"),N("ล้างโลโก้แล้ว ✅","success")}catch(le){N("ล้างโลโก้ไม่สำเร็จ: "+fe(le),"error")}finally{P.disabled=!1}}})})};document.querySelectorAll(".cfg-tab").forEach(v=>v.addEventListener("click",()=>f(v.dataset.tab))),f(h),window._syncPositionToField=async(v,w,$)=>{const x=$.textContent;$.disabled=!0,$.textContent="กำลังดึง...";try{const i=n.find(_=>_.position===v);if(!i){N(`ยังไม่มีครูที่กำหนดบทบาท "${v}"`,"warning");return}const j=document.getElementById(`cfg-${w}`);j&&(j.value=i.full_name,j.dispatchEvent(new Event("input")),N(`ดึงชื่อ "${i.full_name}" สำเร็จ`,"success"))}catch{N("ดึงข้อมูลไม่สำเร็จ","error")}finally{$.disabled=!1,$.textContent=x}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const v=document.getElementById("cfg-save-btn");document.getElementById("cfg-subjectVisuals")&&document.querySelectorAll('#cfg-panel-inner [data-subject-visual-row="true"] .subject-visual-key, #cfg-panel-inner [data-subject-visual-row="true"] .subject-visual-value').forEach($=>$.dispatchEvent(new Event("input")));const w=document.querySelectorAll("#cfg-panel-inner [data-key]:not(.cfg-upload-file):not(.cfg-upload-clear)");v.disabled=!0,v.textContent="กำลังบันทึก...";try{await Promise.all([...w].map($=>{const x=$.tagName==="BUTTON"?$.dataset.on??"false":$.value;return Ee($.dataset.key,x)})),await Gs("admin",{},!0),N("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch($){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",$),N("บันทึกไม่สำเร็จ: "+(($==null?void 0:$.message)||"ไม่ทราบสาเหตุ"),"error")}finally{v.disabled=!1,v.textContent="บันทึก"}})}catch{N("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function kr(){Le("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",_e(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{ca(await nt())}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}function ca(e){const s=document.getElementById("dept-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
    </table>`}}async function ua(){Le("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",_e(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);try{const e=await _n();window._periodsCache=Object.fromEntries(e.map(t=>[t.id,t]));const s=document.getElementById("period-list");if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
    </table>`}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}}function ii(e){const s=[];let t=[],n="",l=!1;for(let r=0;r<String(e??"").length;r++){const d=e[r],u=e[r+1];l?d==='"'&&u==='"'?(n+='"',r++):d==='"'?l=!1:n+=d:d==='"'?l=!0:d===","?(t.push(n),n=""):d===`
`?(t.push(n),s.push(t),t=[],n=""):d!=="\r"&&(n+=d)}if((n||t.length)&&(t.push(n),s.push(t)),s.length<2)return[];const o=s[0].map(r=>r.trim()),p=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return s.slice(1).map(r=>{const d=Object.fromEntries(o.map((a,m)=>[a,r[m]??""])),u={};return p.forEach(a=>{const m=String(d[a]??"").trim();if(a==="item_no"){const h=Number(m);u[a]=m&&Number.isFinite(h)?h:null}else u[a]=m||null}),u}).filter(r=>r.subject_name||r.subject_code||r.standard_text||r.indicator_text||r.learning_outcome_text)}function ze(e,s,t="",n="text"){const l=n==="textarea"?`<textarea name="${e}" rows="3" dir="auto" class="${Ue} w-full min-h-[92px] resize-y">${te(t)}</textarea>`:`<input name="${e}" value="${te(t)}" dir="auto" class="${Ue} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${s}</span>
    ${l}
  </label>`}async function wt(){var e;Le("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",_e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let s=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[t,n]=await Promise.all([$n(s),nt().catch(()=>[])]),l=Re([...n.map(a=>a.dept_name),...n.map(a=>a.dept_code),...t.map(a=>a.dept)]),o=Re(t.map(a=>a.grade_level)),p=Object.fromEntries(t.map(a=>[a.id,a]));window._curriculumRows=p;const r=(a={})=>{const m=!!a.id,h=document.createElement("div");h.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",h.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${m?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${ze("subject_name","ชื่อรายวิชา",a.subject_name)}
            ${ze("subject_code","รหัสวิชา",a.subject_code)}
            ${ze("dept","กลุ่มสาระ/กลุ่มวิชา",a.dept)}
            ${ze("grade_level","ระดับชั้น",a.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${ze("strand","สาระ",a.strand)}
            ${ze("topic","เรื่อง/สาระการเรียนรู้",a.topic)}
            ${ze("item_no","ลำดับข้อ",a.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${ze("standard_code","รหัสมาตรฐาน",a.standard_code)}
            ${ze("indicator_code","รหัสตัวชี้วัด",a.indicator_code)}
          </div>
          ${ze("standard_text","มาตรฐานการเรียนรู้",a.standard_text,"textarea")}
          ${ze("indicator_text","ตัวชี้วัด",a.indicator_text,"textarea")}
          ${ze("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",a.learning_outcome_text,"textarea")}
          ${ze("source_note","แหล่งที่มา/หมายเหตุ",a.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(h),h.querySelectorAll("[data-close]").forEach(f=>f.addEventListener("click",()=>h.remove())),h.querySelector("#curriculum-form").addEventListener("submit",async f=>{f.preventDefault();const v=new FormData(f.currentTarget),w={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(i=>{w[i]=String(v.get(i)??"").trim()||null});const $=String(v.get("item_no")??"").trim(),x=Number($);w.item_no=$&&Number.isFinite(x)?x:null;try{m?await kn(a.id,w):await Sn(w),N("บันทึกข้อมูลหลักสูตรแล้ว","success"),h.remove(),await wt()}catch(i){N(i.message||"บันทึกไม่สำเร็จ","error")}})},d=()=>{const a=document.createElement("div"),m="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";a.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
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
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${Ue} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${Ue} w-full font-mono text-xs" placeholder="${m}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(a),a.querySelectorAll("[data-close]").forEach(h=>h.addEventListener("click",()=>a.remove())),a.querySelector("#curriculum-csv-file").addEventListener("change",h=>{var w;const f=(w=h.target.files)==null?void 0:w[0];if(!f)return;const v=new FileReader;v.onload=()=>{a.querySelector("#curriculum-csv-text").value=v.result||""},v.readAsText(f)}),a.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const h=ii(a.querySelector("#curriculum-csv-text").value);if(!h.length)return N("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const f=await En(h);N(`นำเข้าแล้ว ${f} รายการ`,"success"),a.remove(),await wt()}catch(f){N(f.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>r(),window._curriculumEdit=a=>{var m;return r(((m=window._curriculumRows)==null?void 0:m[a])||{})},window._curriculumDelete=async a=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await Ln(a),N("ลบข้อมูลแล้ว","success"),await wt()}catch(m){N(m.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=d,_e(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
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
        <input id="cur-filter-q" value="${te(s.q)}" class="${Ue}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${te(s.subjectCode)}" class="${Ue}" placeholder="รหัสวิชา..." />
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
                  <button onclick="_curriculumEdit('${Ve(a.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${Ve(a.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const u=()=>{var a,m,h,f;s={q:((a=document.getElementById("cur-filter-q"))==null?void 0:a.value)||"",subjectCode:((m=document.getElementById("cur-filter-code"))==null?void 0:m.value)||"",dept:((h=document.getElementById("cur-filter-dept"))==null?void 0:h.value)||"",gradeLevel:((f=document.getElementById("cur-filter-grade"))==null?void 0:f.value)||""},window._curriculumFilters=s,wt()};["cur-filter-q","cur-filter-code"].forEach(a=>{var m;(m=document.getElementById(a))==null||m.addEventListener("keydown",h=>{h.key==="Enter"&&u()})}),["cur-filter-dept","cur-filter-grade"].forEach(a=>{var m;(m=document.getElementById(a))==null||m.addEventListener("change",u)}),(e=document.getElementById("cur-filter-submit"))==null||e.addEventListener("click",u)}catch(s){_e(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${te(s.message||s)}
    </div>`)}}async function kt(){var e;Le("subjects"),document.getElementById("page-title").textContent="คอร์สและห้องเรียน",_e(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,t,n,l,o]=await Promise.all([aa(),sa(),He().catch(()=>[]),nt().catch(()=>[]),Me().catch(()=>({}))]),p=Object.fromEntries(n.map(q=>[q.id,q])),r=Object.fromEntries(l.map(q=>[q.dept_code,q])),d=Object.fromEntries(l.map(q=>[q.dept_name,q])),u=q=>{var y;return{...q,_teacher_name:((y=p[q.teacher_id])==null?void 0:y.full_name)??""}},a=Number(o.academicYear??o.academic_year??new Date().getFullYear()+543),m=Number(o.semester??1),h=q=>Number(q==null?void 0:q.academic_year)===a&&Number(q==null?void 0:q.semester)===m,f=s.filter(h).map(u),v=t.filter(h).map(q=>{var y;return{...q,master_subjects:q.master_subjects?{...q.master_subjects,_teacher_name:((y=p[q.master_subjects.teacher_id])==null?void 0:y.full_name)??""}:q.master_subjects}}),w=Re(f.map(q=>q.dept)),$=Re(f.map(q=>q.skill_group));let x={sheetId:o.subjectSyncSheetId||Uo,tabName:o.subjectSyncTabName||fa,keyField:o.subjectSyncKeyField||os,columns:(()=>{try{const q=JSON.parse(o.subjectSyncColumns||"null");return Array.isArray(q)&&q.length?q:ya}catch{return ya}})()};_e(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${te(x.tabName||fa)}
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
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${Ue} flex-1 min-w-40" />
          <select id="subf-dept" class="${je}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${w.map(q=>`<option value="${q}">${q}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${je}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${$.map(q=>`<option value="${q}">${q}</option>`).join("")}
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
    </div>`);let j="course";const _=()=>{const q=document.getElementById("sub-action-btn");q&&(q.innerHTML=j==="course"?"<span>＋</span> เพิ่มคอร์ส":j==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const y=document.getElementById("btn-sync-subjects-central");y&&(y.textContent=`↑ ซิงค์รายวิชา → ${x.tabName||fa}`)},C=()=>f.map(q=>{const y=p[q.teacher_id]??{},c=r[q.dept]??d[q.dept]??{},g=y.full_name??"",k=q.subject_name??"",b=q.subject_code??"";return{subject_group:q.subject_group??"",sbJect:`${k}_(${b})_${g}`,subject_name:k,subject_code:b,credit:q.credit??"",year:o.academicYear??"",semester:o.semester??"",grade_level:q.grade_level??"",teacher_name:g,teacher_code:y.teacher_code??"",dept_name:c.dept_name??q.dept??"",dept_code:c.dept_code??q.dept??""}}),T=()=>{var y;const q=new Set(x.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${te(x.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${te(x.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${ls.map(c=>`
                <option value="${te(c.key)}" ${x.keyField===c.key?"selected":""}>
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
            ${ls.map(c=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${te(c.key)}" ${q.has(c.key)?"checked":""} />
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
        </div>`,(y=document.getElementById("subject-sync-select-defaults"))==null||y.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach(c=>{c.checked=ya.includes(c.value)})})},D=()=>{var k;if((k=document.getElementById("subject-filter-bar"))==null||k.classList.toggle("hidden",j==="sync"),_(),j==="sync"){T();return}const q=document.getElementById("subf-q").value.toLowerCase(),y=document.getElementById("subf-dept").value,c=document.getElementById("subf-skill").value,g=document.getElementById("subf-subg").value;if(j==="course"){const b=f.filter(L=>(!q||[L.subject_code,L.subject_name,L.dept].some(E=>(E??"").toLowerCase().includes(q)))&&(!y||L.dept===y)&&(!c||L.skill_group===c)&&(!g||L.subject_group===g));document.getElementById("subf-count").textContent=b.length,Ja(b)}else{const b=v.filter(L=>{var E,B;return(!q||(L.class_name??"").toLowerCase().includes(q)||(((E=L.master_subjects)==null?void 0:E.subject_name)??"").toLowerCase().includes(q))&&(!y||((B=L.master_subjects)==null?void 0:B.dept)===y)});document.getElementById("subf-count").textContent=b.length,ci(b)}};window._subAction=async()=>{var q,y,c;if(j==="course")Xo(null,async(g,k=[])=>{await Cn(g,k),await kt()});else if(j==="class")ui();else{const g=((q=document.getElementById("subject-sync-sheet-id"))==null?void 0:q.value.trim())??"",k=((y=document.getElementById("subject-sync-tab-name"))==null?void 0:y.value.trim())??"",b=((c=document.getElementById("subject-sync-key-field"))==null?void 0:c.value)??os,L=[...document.querySelectorAll(".subject-sync-col:checked")].map(S=>S.value),E=L.includes(b)?L:[b,...L];if(!g||!k){N("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!E.length){N("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const B=document.getElementById("sub-action-btn"),H=B==null?void 0:B.innerHTML;B&&(B.disabled=!0,B.textContent="กำลังบันทึก...");try{await Promise.all([Ee("subjectSyncSheetId",g),Ee("subjectSyncTabName",k),Ee("subjectSyncKeyField",b),Ee("subjectSyncColumns",JSON.stringify(E))]),x={sheetId:g,tabName:k,keyField:b,columns:E},_(),N("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(S){N("บันทึกตั้งค่าไม่สำเร็จ: "+fe(S),"error")}finally{B&&(B.disabled=!1,B.innerHTML=H),_()}}},window._adminRegisterClass=async q=>{const y=f.find(c=>c.id===q);y?Qo(null,y):N("ไม่พบคอร์ส","error")},window._adminEditClass=q=>{var c;const y=(c=window._adminClassCache)==null?void 0:c[q];y?Fs(null,y):N("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(q,y)=>{window._goBack=()=>kt(),Zo(null,q,y)},window._adminDeleteClass=async(q,y)=>{if(confirm(`ยืนยันลบ "${y}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await As(q),N(`ลบ "${y}" แล้ว`,"success"),D()}catch(c){N("ลบไม่สำเร็จ: "+fe(c),"error")}},(e=document.getElementById("btn-sync-subjects-central"))==null||e.addEventListener("click",async q=>{const y=q.currentTarget,c=y.textContent;try{y.disabled=!0,y.textContent="กำลังซิงค์...";const g=await Vo(C(),{sheetId:x.sheetId,tabName:x.tabName,headers:x.columns,keyField:x.keyField});N(`ส่งคำสั่งซิงค์รายวิชา ${g} รายการไปแท็บ ${x.tabName} แล้ว`,"success")}catch(g){N("ซิงค์รายวิชาไม่สำเร็จ: "+fe(g),"error")}finally{y.disabled=!1,y.textContent=c}}),window._switchSubjectTab=q=>{j=q,document.getElementById("stab-course").className=q==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=q==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=q==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",D()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(q=>{var y,c;(y=document.getElementById(q))==null||y.addEventListener("input",D),(c=document.getElementById(q))==null||c.addEventListener("change",D)}),D()}catch{N("โหลดรายวิชาไม่สำเร็จ","error")}}function Ja(e){const s=document.getElementById("subject-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
  </table></div>`}}function ci(e){const s=document.getElementById("subject-table-wrap");if(s){if(window._adminClassCache=Object.fromEntries(e.map(t=>[t.id,t])),!e.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
      ${e.map(t=>{var n,l,o,p;return`
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
          ${(p=t.master_subjects)!=null&&p.teacher_id?`<button onclick="window._adminViewSchedule(${t.master_subjects.teacher_id},'${Ve(t.master_subjects._teacher_name||t.master_subjects.subject_name||t.class_name)}')"
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
  </table></div>`}}async function Sr(){var j,_;Le("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??new Date().getFullYear()+543),t=parseInt(e.semester??1),n=await ra().catch(()=>[]),l=new Map;for(const C of n){const T=parseInt(C.academic_year),D=parseInt(C.semester);Number.isInteger(T)&&Number.isInteger(D)&&l.set(`${D}/${T}`,{...C,academic_year:T,semester:D})}l.has(`${t}/${s}`)||l.set(`${t}/${s}`,{academic_year:s,semester:t,is_current:!0,status:"current"});const o=[...l.values()].sort((C,T)=>Number(T.academic_year)-Number(C.academic_year)||Number(T.semester)-Number(C.semester)),p=o.find(C=>C.academic_year===s&&C.semester===t)??o.find(C=>C.is_current)??o[0];let r=p.academic_year,d=p.semester;_e(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const[u,a,m]=await Promise.all([He().catch(()=>[]),In().catch(()=>[]),Ms().catch(()=>[])]);let h="สามัญ";const f=()=>{document.querySelectorAll(".hr-term-tab").forEach(T=>{const D=T.dataset.hrTerm===`${d}/${r}`;T.className=D?"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white transition":"hr-term-tab px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"});const C=document.getElementById("hr-term-label");C&&(C.textContent=`ภาคเรียน ${d}/${r}`)},v=C=>Object.fromEntries(C.filter(T=>T.category===h).map(T=>[T.main_room,T])),w=()=>{document.querySelectorAll(".hr-tab").forEach(C=>{const T=C.dataset.hrTab===h;C.className=T?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},$=async()=>{f(),w();const C=await zt(r,d),T=v(C),D=h==="สามัญ"?a:m,q=document.getElementById("homeroom-table-wrap");if(!D.length){q.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${h}</p></div>`;return}q.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${D.map(y=>{var g,k;const c=T[y];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${y}</td>
          <td class="px-5 py-3 text-gray-600">
            ${c?`<span class="font-medium text-gray-800">${((g=c.teachers)==null?void 0:g.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${(k=c.teachers)!=null&&k.teacher_code?`(${c.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${Ve(y)}','${h}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${Ve(y)}','${h}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${c?"เปลี่ยน":"เลือกครู"}</button>
            ${c?`<button onclick="window._deleteHomeroom(${c.id},'${Ve(y)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await $(),window._deleteHomeroom=async(C,T)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${T}?`))try{await Tn(C),N("ลบแล้ว","success"),await $()}catch{N("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(C,T)=>{var b;(b=document.getElementById("hr-picker"))==null||b.remove();let D=null;const q=document.createElement("div");q.id="hr-picker",q.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",q.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${T} · ห้อง ${C}</p>
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
      </div>`,document.body.appendChild(q);const y=q.querySelector("#hrp-results"),c=q.querySelector("#hrp-save"),g=L=>{y.innerHTML=L.length?L.slice(0,20).map(E=>`
          <button type="button" data-id="${E.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${E.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${E.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',y.querySelectorAll(".hrp-option").forEach(E=>{E.addEventListener("click",()=>{D=u.find(B=>String(B.id)===E.dataset.id),y.querySelectorAll(".hrp-option").forEach(B=>B.classList.remove("bg-emerald-50","text-emerald-700")),E.classList.add("bg-emerald-50","text-emerald-700"),c.disabled=!1})})},k=()=>{const L=q.querySelector("#hrp-code").value.trim().toLowerCase(),E=q.querySelector("#hrp-name").value.trim().toLowerCase();g(u.filter(B=>(!L||(B.teacher_code??"").toLowerCase().includes(L))&&(!E||(B.full_name??"").toLowerCase().includes(E))))};q.querySelector("#hrp-close").addEventListener("click",()=>q.remove()),q.addEventListener("click",L=>{L.target===q&&q.remove()}),q.querySelector("#hrp-code").addEventListener("input",k),q.querySelector("#hrp-name").addEventListener("input",k),c.addEventListener("click",async()=>{if(D){c.disabled=!0,c.textContent="กำลังบันทึก...";try{await Ds({teacher_id:D.id,main_room:C,category:T,academic_year:r,semester:d}),N("บันทึกครูที่ปรึกษาสำเร็จ","success"),q.remove(),await $()}catch(L){N("บันทึกไม่สำเร็จ: "+fe(L),"error"),c.disabled=!1,c.textContent="เลือกครูที่ปรึกษา"}}}),g(u)};const x=()=>{const C=[...u].sort((T,D)=>String(T.full_name??"").localeCompare(String(D.full_name??""),"th")).map((T,D)=>`${D+1}. ${T.teacher_code??"ไม่มีรหัส"} | ${T.full_name??"ไม่มีชื่อ"} | ${T.category??"ไม่ระบุประเภท"}`).join(`
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
${C||"ไม่พบรายชื่อครู"}`},i=()=>{var F;(F=document.getElementById("hr-ai-import-modal"))==null||F.remove();const C=document.createElement("div");C.id="hr-ai-import-modal",C.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",C.innerHTML=`
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
      </div>`,document.body.appendChild(C);const T=C.querySelector("#hr-ai-prompt"),D=Vs({copyButton:C.querySelector("#hr-ai-copy-prompt")}),q=()=>C.remove();C.querySelector("#hr-ai-close").addEventListener("click",q),C.querySelector("#hr-ai-cancel").addEventListener("click",q),C.addEventListener("click",A=>{A.target===C&&q()}),C.querySelector("#hr-ai-generate-prompt").addEventListener("click",()=>{T.value=x(),D.markGenerated(),C.querySelector("#hr-ai-copy-prompt").textContent="📋 คัดลอก",N("สร้างคำสั่ง AI รายชื่อครูที่ปรึกษาแล้ว","success")}),C.querySelector("#hr-ai-copy-prompt").addEventListener("click",async A=>{if(!D.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(T.value),A.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(A.currentTarget)&&(A.currentTarget.textContent="📋 คัดลอก")},1500)}catch{T.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}});let y=[];const c=C.querySelector("#hr-ai-error"),g=C.querySelector("#hr-ai-preview-wrap"),k=C.querySelector("#hr-ai-preview"),b=C.querySelector("#hr-ai-apply"),L=C.querySelector("#hr-ai-summary"),E=A=>String(A??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim(),B=(A,U)=>{const z=String(U??"").trim().toLowerCase();if(z){const V=u.filter(K=>String(K.teacher_code??"").trim().toLowerCase()===z);if(V.length===1)return{teacher:V[0],status:"exact",score:1};if(V.length>1)return{teacher:V[0],status:"ambiguous",score:1}}const O=$t(A),W=u.filter(V=>$t(V.full_name)===O);if(W.length===1)return{teacher:W[0],status:"exact",score:1};if(W.length>1)return{teacher:W[0],status:"ambiguous",score:1};const M=u.map(V=>({teacher:V,score:Qd(A,V.full_name)})).sort((V,K)=>K.score-V.score)[0];return M&&M.score>=.72?{...M,status:"suggested"}:{teacher:null,status:"unmatched",score:(M==null?void 0:M.score)??0}},H=(A,U)=>{const z=String(A??"").trim().replace(/^ห้อง\s*/u,""),O=U==="ศาสนา"?m:a,W=z.replace(/\s+/g,"").toLowerCase();return O.find(Y=>String(Y).replace(/\s+/g,"").toLowerCase()===W)??null},S=A=>{if(!A.teacherId||!A.mainRoom)return{label:"ไม่พบข้อมูล ต้องเลือกเอง",cls:"text-red-700 bg-red-50 border-red-100"};const U=A.matchStatus==="exact"||A.teacherReviewed,z=A.roomExact||A.roomReviewed;return U&&z?{label:A.matchStatus==="exact"&&A.roomExact?"ตรงกับฐานข้อมูล":"ตรวจสอบแล้ว",cls:"text-emerald-700 bg-emerald-50 border-emerald-100"}:{label:"โปรดตรวจสอบ",cls:"text-amber-700 bg-amber-50 border-amber-100"}},I=()=>{const A=y.filter(z=>!z.mainRoom||!z.teacherId),U=y.filter(z=>z.matchStatus!=="exact"&&!z.teacherReviewed||!z.roomExact&&!z.roomReviewed);b.disabled=!y.length||A.length>0||U.length>0,y.length?A.length?L.textContent=`ทั้งหมด ${y.length} รายการ · ยังเลือกข้อมูลไม่ครบ ${A.length} รายการ`:U.length?L.textContent=`ทั้งหมด ${y.length} รายการ · กรุณาตรวจสอบอีก ${U.length} รายการ`:L.textContent=`ทั้งหมด ${y.length} รายการ · พร้อมบันทึก`:L.textContent=""},R=()=>{k.innerHTML=y.map((A,U)=>{const z=S(A),O=A.category==="ศาสนา"?m:a,W=[...u].sort((Y,M)=>String(Y.full_name??"").localeCompare(String(M.full_name??""),"th"));return`<div class="ai-advisor-row rounded-2xl border border-gray-200 p-3 sm:p-4" data-ai-row="${U}">
          <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <p class="text-sm font-bold text-gray-800">รายการที่ ${U+1}</p>
              <p class="text-xs text-gray-500 mt-1">ชื่อในคำสั่ง: <span class="font-medium text-gray-700">${te(A.sourceName||"ไม่ระบุ")}</span>${A.sourceCode?` · รหัสในคำสั่ง: ${te(A.sourceCode)}`:""}</p>
              ${A.suggestedName?`<p class="text-[11px] text-indigo-500 mt-1">AI แนะนำจากรายชื่อระบบ: ${te(A.suggestedName)}${A.suggestedCode?` (${te(A.suggestedCode)})`:""}</p>`:""}
              ${A.note?`<p class="text-[11px] text-gray-400 mt-1">หมายเหตุ AI: ${te(A.note)}</p>`:""}
            </div>
            <span class="ai-row-status text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${z.cls}">${z.label}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <label class="text-xs text-gray-500">ประเภท
              <select data-ai-category="${U}" class="${je} w-full mt-1">
                <option value="สามัญ" ${A.category==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${A.category==="ศาสนา"?"selected":""}>ศาสนา</option>
              </select>
            </label>
            <label class="text-xs text-gray-500">ห้องเรียน
              <select data-ai-room="${U}" class="${je} w-full mt-1">
                <option value="">— เลือกห้อง —</option>
                ${O.map(Y=>`<option value="${te(Y)}" ${Y===A.mainRoom?"selected":""}>${te(Y)}</option>`).join("")}
              </select>
            </label>
            <label class="text-xs text-gray-500">ชื่อครูในระบบ ปพ.5
              <select data-ai-teacher="${U}" class="${je} w-full mt-1">
                <option value="">— เลือกครู —</option>
                ${W.map(Y=>`<option value="${te(Y.id)}" ${String(Y.id)===String(A.teacherId??"")?"selected":""}>${te(Y.full_name)}${Y.teacher_code?` (${te(Y.teacher_code)})`:""}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>`}).join(""),k.querySelectorAll("[data-ai-category]").forEach(A=>A.addEventListener("change",U=>{const z=y[Number(U.currentTarget.dataset.aiCategory)];z.category=U.currentTarget.value,z.mainRoom=null,z.roomExact=!1,z.roomReviewed=!0,R(),I()})),k.querySelectorAll("[data-ai-room]").forEach(A=>A.addEventListener("change",U=>{const z=y[Number(U.currentTarget.dataset.aiRoom)];z.mainRoom=U.currentTarget.value||null,z.roomReviewed=!0,R(),I()})),k.querySelectorAll("[data-ai-teacher]").forEach(A=>A.addEventListener("change",U=>{const z=y[Number(U.currentTarget.dataset.aiTeacher)];z.teacherId=U.currentTarget.value?Number(U.currentTarget.value):null,z.teacherReviewed=!0,R(),I()})),I()};C.querySelector("#hr-ai-parse").addEventListener("click",()=>{c.classList.add("hidden");try{const A=JSON.parse(E(C.querySelector("#hr-ai-json").value)),U=Array.isArray(A)?A:A.assignments??A.homeroom_assignments??A.data??A.rows;if(!Array.isArray(U)||!U.length)throw new Error("ไม่พบรายการ assignments ใน JSON");const z=new Set;y=U.map((O,W)=>{var Te;const Y=["สามัญ","ศาสนา"].includes(O.category)?O.category:h,M=O.teacher_name_from_order??O.teacher_name??O.teacher??O.advisor_name??"",V=O.teacher_code_from_order??O.teacher_code??O.code??"",K=O.teacher_name_suggestion??O.matched_teacher_name??"",Q=O.teacher_code_suggestion??O.matched_teacher_code??"",Z=O.main_room??O.room??O.class_name??O.classroom??"",se=H(Z,Y),ae=B(M,V),me=B(K,Q),ue=ae.status==="exact"?ae:me.teacher?{...me,status:"suggested"}:ae,we=`${Y}|${se??String(Z).trim()}`,Ie=z.has(we);return z.add(we),{category:Y,sourceName:M,sourceCode:V,suggestedName:K,suggestedCode:Q,note:O.note??"",sourcePage:O.source_page??"",mainRoom:se,roomExact:!!se,roomReviewed:!1,teacherId:((Te=ue.teacher)==null?void 0:Te.id)??null,teacherReviewed:!1,matchStatus:Ie?"ambiguous":ue.status,matchScore:ue.score}}),g.classList.remove("hidden"),R()}catch(A){c.textContent=`อ่าน JSON ไม่สำเร็จ: ${A.message}`,c.classList.remove("hidden"),g.classList.add("hidden"),y=[],I()}}),b.addEventListener("click",async()=>{if(b.disabled)return;const A=await zt(r,d).catch(()=>[]),U=y.filter(z=>{const O=A.find(W=>W.main_room===z.mainRoom&&W.category===z.category);return!O||Number(O.teacher_id)!==Number(z.teacherId)}).length;if(confirm(`ยืนยันนำเข้าครูที่ปรึกษา ${y.length} รายการ?

ระบบจะเพิ่มหรือเปลี่ยนรายการที่แตกต่างจำนวน ${U} รายการ ในภาคเรียน ${d}/${r}`)){b.disabled=!0,b.textContent="กำลังบันทึก...";try{const z=await Nn(y.map(O=>({teacher_id:O.teacherId,main_room:O.mainRoom,category:O.category,academic_year:r,semester:d})));N(`นำเข้าครูที่ปรึกษาสำเร็จ ${z.length} รายการ ✅`,"success"),q(),await $()}catch(z){N(`บันทึกไม่สำเร็จ: ${fe(z)}`,"error"),b.disabled=!1,b.textContent="✅ ยืนยันนำเข้าและบันทึก"}}})};(j=document.getElementById("hr-ai-import"))==null||j.addEventListener("click",i),document.querySelectorAll(".hr-term-tab").forEach(C=>{C.addEventListener("click",async()=>{const[T,D]=String(C.dataset.hrTerm??"").split("/").map(Number);!Number.isInteger(T)||!Number.isInteger(D)||(d=T,r=D,await $())})}),document.querySelectorAll(".hr-tab").forEach(C=>{C.addEventListener("click",async()=>{h=C.dataset.hrTab,await $()})}),(_=document.getElementById("hr-export-csv"))==null||_.addEventListener("click",async()=>{try{const C=await zt(r,d),T=v(C),D=h==="สามัญ"?a:m,q=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],y=D.map(L=>{var B,H;const E=T[L];return[L,((B=E==null?void 0:E.teachers)==null?void 0:B.full_name)??"",((H=E==null?void 0:E.teachers)==null?void 0:H.phone)??""]}),c="\uFEFF"+[q,...y].map(L=>L.map(E=>`"${String(E).replace(/"/g,'""')}"`).join(",")).join(`
`),g=new Blob([c],{type:"text/csv;charset=utf-8"}),k=URL.createObjectURL(g),b=document.createElement("a");b.href=k,b.download=`ครูที่ปรึกษา-${h}-${d}-${r}.csv`,document.body.appendChild(b),b.click(),b.remove(),URL.revokeObjectURL(k),N("ดาวน์โหลด CSV แล้ว ✅","success")}catch(C){N("ดาวน์โหลดไม่สำเร็จ: "+fe(C),"error")}})}async function Er(){Le("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const e=u=>{let a=0;for(const m of u)a=a*26+m.charCodeAt(0)-64;return a},s=u=>{let a="";for(;u>0;)u--,a=String.fromCharCode(65+u%26)+a,u=Math.floor(u/26);return a},t=(u,a)=>{const m=[];for(let h=e(u);h<=e(a);h++)m.push(s(h));return m},n=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:t("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:t("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];n.flatMap(u=>u.cols);const l=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],o=["ระหว่างเรียน","กลางภาค","ปลายภาค"],p=await qn().catch(()=>[]),r={};l.forEach(u=>{r[u]={},o.forEach(a=>{const m=p.find(h=>h.skill_group===u&&h.assignment_type===a);r[u][a]=new Set(m?m.allowed_columns.split(",").map(h=>h.trim()).filter(Boolean):[])})});const d=(u,a)=>n.map(m=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${m.label}</span>
      ${m.cols.map(h=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${r[u][a].has(h)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${u}" data-at="${a}" data-col="${h}">
          ${h}
        </button>`).join("")}
    </div>`).join("");_e(`<div class="max-w-5xl mx-auto animate-fade">
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
      ${n.map(u=>`
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded ${u.color.split(" ")[0]} border ${u.color.split(" ")[2]}"></span>
        <span class="text-gray-600 font-mono font-medium">${u.label}</span>
      </div>`).join("")}
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded bg-emerald-500"></span>
        <span class="text-gray-600">= เลือกแล้ว</span>
      </div>
    </div>

    <!-- Grid per skill group -->
    <div class="space-y-4">
      ${l.map(u=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${u}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${u}"
              ${p.find(a=>a.skill_group===u&&a.is_fixed)?"checked":""} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${o.map(a=>`
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${a}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${u.replace(/\s/g,"_")}-${a.replace(/\s/g,"_")}">
                  ${r[u][a].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${d(u,a)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${u}" data-at="${a}">ล้าง</button>
            </div>
          </div>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </div>`),document.addEventListener("click",u=>{const a=u.target.closest(".col-btn");if(!a)return;const{sg:m,at:h,col:f}=a.dataset;r[m][h].has(f)?(r[m][h].delete(f),a.className=a.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(r[m][h].add(f),a.className=a.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const v=document.getElementById(`scc-count-${m.replace(/\s/g,"_")}-${h.replace(/\s/g,"_")}`);v&&(v.textContent=`${r[m][h].size} คอลัมน์`);const w=document.querySelector(`.scc-clear-btn[data-sg="${m}"][data-at="${h}"]`);w&&(w.style.opacity=r[m][h].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(u=>{u.addEventListener("click",()=>{const{sg:a,at:m}=u.dataset;r[a][m].clear(),document.querySelectorAll(`.col-btn[data-sg="${a}"][data-at="${m}"]`).forEach(f=>{f.className=f.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const h=document.getElementById(`scc-count-${a.replace(/\s/g,"_")}-${m.replace(/\s/g,"_")}`);h&&(h.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const u=document.getElementById("scc-save-btn");u.disabled=!0,u.textContent="กำลังบันทึก...";try{const a=[];l.forEach(m=>{var f;const h=((f=document.querySelector(`.scc-lock[data-sg="${m}"]`))==null?void 0:f.checked)??!1;o.forEach(v=>{const w=[...r[m][v]].join(",");w&&a.push({skill_group:m,assignment_type:v,allowed_columns:w,is_fixed:h})})});for(const m of a)await An(m);N(`บันทึก ${a.length} รายการสำเร็จ ✅`,"success")}catch(a){N("บันทึกไม่สำเร็จ: "+fe(a),"error")}finally{u.disabled=!1,u.textContent="💾 บันทึกทั้งหมด"}})}async function ui(){Le("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const e=await aa().catch(()=>[]);document.getElementById("main-content").innerHTML=`
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
    </div>`,window.renderSubjects=kt}async function Lr(){var l;Le("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const e=await Me().catch(()=>({})),s=e.academicYear??e.academic_year??new Date().getFullYear()+543,t=e.semester??1,n=async()=>{const o=await Mn(s,t).catch(()=>[]),p=document.getElementById("holiday-table");if(p){if(!o.length){p.innerHTML=`<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`;return}p.innerHTML=`<table class="w-full text-sm">
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
    </table>`}};_e(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${s} ภาค ${t} — ระบบจะ highlight วันนี้ในตารางเช็คชื่อ</p>
    </div>

    <!-- Add form -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-700 mb-3">เพิ่มวันหยุด</h3>
      <div class="flex flex-wrap gap-3">
        <input id="hol-date" type="date" class="${Ue} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${Ue} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`),await n(),(l=document.getElementById("hol-add"))==null||l.addEventListener("click",async()=>{const o=document.getElementById("hol-date").value,p=document.getElementById("hol-desc").value.trim()||null;if(!o){N("กรุณาเลือกวันที่","warning");return}const r=parseInt(o.slice(0,4),10),d=new Date().getFullYear();if(Math.abs(r-d)>3){N(`ปี ${r} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${d}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await vn({holiday_date:o,description:p,academic_year:s,semester:t}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",N("เพิ่มวันหยุดแล้ว","success"),await n()}catch(u){N("เกิดข้อผิดพลาด: "+fe(u),"error")}}),window._deleteHoliday=async o=>{if(confirm("ลบวันหยุดนี้?"))try{await wn(o),N("ลบแล้ว","success"),await n()}catch{N("ลบไม่สำเร็จ","error")}}}function Cr(){Le("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",_e(`
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

    </div>`);let e="teachers",s=[];window.switchImportTab=l=>{e=l,s=[],document.getElementById("import-preview").classList.add("hidden");const o={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=o[l],document.getElementById("tab-teachers").className=l==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=l==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const t=l=>{if(!l||!l.name.endsWith(".csv")){N("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const o=new FileReader;o.onload=p=>{s=ul(p.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${s.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=pl(s,e),document.getElementById("import-preview").classList.remove("hidden")},o.readAsText(l,"UTF-8")};document.getElementById("csv-file").addEventListener("change",l=>t(l.target.files[0]));const n=document.getElementById("drop-zone");n.addEventListener("dragover",l=>{l.preventDefault(),n.classList.add("border-indigo-400","bg-indigo-50")}),n.addEventListener("dragleave",()=>n.classList.remove("border-indigo-400","bg-indigo-50")),n.addEventListener("drop",l=>{l.preventDefault(),n.classList.remove("border-indigo-400","bg-indigo-50"),t(l.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!s.length)return;const l=document.getElementById("btn-import"),o=document.getElementById("import-progress"),p=document.getElementById("progress-bar"),r=document.getElementById("progress-text");l.disabled=!0,o.classList.remove("hidden");const d=(u,a)=>{const m=Math.round(u/a*100);p.style.width=m+"%",r.textContent=`${u} / ${a} แถว`};try{const a=await(e==="teachers"?il:cl)(s,d);if(N(`นำเข้าสำเร็จ ${a} รายการ`,"success"),p.style.width="100%",e==="students"){r.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const m=await co();N(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(m==null?void 0:m.enrolled)??0} รายการ)`,"success")}catch{}r.textContent=`นำเข้าสำเร็จ ${a} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(u){N("นำเข้าไม่สำเร็จ: "+fe(u),"error")}finally{l.disabled=!1}})}async function Ir(){var l,o,p;Le("payments"),document.getElementById("page-title").textContent="การชำระเงิน",_e(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);let e=[],s="all";const t=()=>{const r=document.getElementById("pay-list");if(!r)return;const d={pending:0,approved:1,rejected:2},u=(s==="all"?e:e.filter(a=>a.status===s)).slice().sort((a,m)=>{const h=(d[a.status]??9)-(d[m.status]??9);return h!==0?h:new Date(m.created_at)-new Date(a.created_at)});if(!u.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}r.innerHTML=u.map(a=>{var v,w,$,x,i;const m={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[a.status]??{label:a.status,cls:"bg-gray-100 text-gray-600"},h={semester:`📦 เหมาทั้งเทอม (${a.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(a.room_count??1)||1} ห้อง (${a.amount??49} บ.)`,donation:a.supporter_renewal_entitlement_id?`🎁 ต่ออายุผู้สนับสนุน ระดับ ${a.donation_tier??"-"} · ${a.amount??0} บ. (ลด ${a.discount_percent??0}%)`:`☕ โดเนท ${a.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[a.package_type]??`${a.package_type} (${a.amount??0} บ.)`,f=new Date(a.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${a.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${a.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${a.id}" data-teacher="${(v=a.teachers)==null?void 0:v.id}" data-pkg="${a.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(((w=a.teachers)==null?void 0:w.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${(($=a.teachers)==null?void 0:$.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((x=a.teachers)==null?void 0:x.teacher_code)??"—"} · ${((i=a.teachers)==null?void 0:i.phone)??"—"}</p>
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
            <span class="font-medium text-gray-700">${h}</span>
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
      </div>`}).join(""),r.querySelectorAll(".donate-ack-btn").forEach(a=>{a.addEventListener("click",async()=>{var f,v;const h=((f=(await Me().catch(()=>({}))).donationThankYouCard)==null?void 0:f.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){a.disabled=!0,a.textContent="⏳ กำลังดำเนินการ...";try{await Rt(parseInt(a.dataset.id),"approved",h),await xa(parseInt(a.dataset.teacher),"donation"),N("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(v=window._refreshPaymentBadge)==null||v.call(window),e=await Ze(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent="☕ รับทราบ / ขอบคุณ"}}})}),r.querySelectorAll(".approve-btn").forEach(a=>{a.addEventListener("click",async()=>{var f;const m=a.dataset.pkg==="school_sponsored";if(confirm(m?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){a.disabled=!0,a.textContent="⏳ กำลังอนุมัติ...";try{await Rt(parseInt(a.dataset.id),"approved"),await xa(parseInt(a.dataset.teacher),a.dataset.pkg),N("อนุมัติแล้ว ✅","success"),(f=window._refreshPaymentBadge)==null||f.call(window),e=await Ze(),t()}catch{N("เกิดข้อผิดพลาด","error"),a.disabled=!1,a.textContent=m?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),r.querySelectorAll(".reject-btn").forEach(a=>{a.addEventListener("click",()=>{mi(parseInt(a.dataset.id),async m=>{var h;await Rt(parseInt(a.dataset.id),"rejected",m),N("ปฏิเสธแล้ว","info"),(h=window._refreshPaymentBadge)==null||h.call(window),e=await Ze(),t()})})}),r.querySelectorAll(".view-slip-btn").forEach(a=>{a.addEventListener("click",()=>pi(a.dataset.url))})};try{e=await Ze(),t()}catch{N("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(r=>{r.addEventListener("click",()=>{s=r.dataset.filter,document.querySelectorAll(".pay-tab").forEach(d=>{d.classList.toggle("border-indigo-600",d===r),d.classList.toggle("text-indigo-600",d===r),d.classList.toggle("border-transparent",d!==r),d.classList.toggle("text-gray-400",d!==r)}),t()})}),(l=document.getElementById("pay-refresh"))==null||l.addEventListener("click",async()=>{e=await Ze(),t(),N("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",r=>{if(!r.target.classList.contains("pay-cb"))return;const d=document.querySelectorAll(".pay-cb:checked"),u=document.getElementById("pay-bulk-approve");d.length>0?(u.classList.remove("hidden"),u.textContent=`✅ อนุมัติ ${d.length} คน`):u.classList.add("hidden")});const n=async r=>{var u,a;let d=0;for(const m of r)try{await Rt(parseInt(m.id),"approved"),await xa(parseInt(m.teacher),m.pkg),d++}catch{}N(`อนุมัติ ${d}/${r.length} รายการ ✅`,"success"),(u=window._refreshPaymentBadge)==null||u.call(window),e=await Ze(),t(),(a=document.getElementById("pay-bulk-approve"))==null||a.classList.add("hidden")};(o=document.getElementById("pay-bulk-approve"))==null||o.addEventListener("click",async()=>{const r=[...document.querySelectorAll(".pay-cb:checked")];r.length&&confirm(`อนุมัติ ${r.length} คนที่เลือก?`)&&await n(r.map(d=>({id:d.dataset.id,teacher:d.dataset.teacher,pkg:d.dataset.pkg})))}),(p=document.getElementById("pay-approve-all"))==null||p.addEventListener("click",async()=>{const r=e.filter(d=>d.status==="pending");if(!r.length){N("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${r.length} รายการ?`)&&await n(r.map(d=>{var u;return{id:d.id,teacher:(u=d.teachers)==null?void 0:u.id,pkg:d.package_type}}))})}async function pi(e){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",s.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${te(e)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(s),s.querySelector("button").addEventListener("click",()=>s.remove()),s.addEventListener("click",r=>{r.target===s&&s.remove()});const t=s.querySelector("#slip-viewer"),n=s.querySelector("#slip-download"),l=await Io(e),o=te(l),p=String(l).split("?")[0].toLowerCase().endsWith(".pdf");n&&(n.href=l),t&&(t.innerHTML=p?`<iframe src="${o}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${o}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`)}function mi(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#rj-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#rj-confirm").addEventListener("click",async()=>{const n=t.querySelector("#reject-note").value.trim()||null;t.remove(),await s(n)})}async function Tr(){Le("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1),n=async()=>{const o=await Rn(s,t,"สามัญ").catch(()=>[]);l(o)},l=o=>{var w;const p=$=>`
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
          <tbody class="divide-y divide-gray-50">${$.map(p).join("")}</tbody>
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',d=$=>$.replace("SheetId","SheetTab"),u=$=>$.replace("SheetId","StudentRange"),a=($,x)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${x})</p>
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
          <input type="text" id="lsk-range-${$}" value="${e[u($)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${$}" data-tab-key="${d($)}" data-range-key="${u($)}">บันทึก</button>
        </div>
      </div>`;_e(`<div class="max-w-5xl mx-auto animate-fade">
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
    </div>`);const m=[...o];(w=document.getElementById("btn-fill-ls-classes"))==null||w.addEventListener("click",async()=>{if(!confirm("ยืนยันซ่อมคะแนนรายวิชาทักษะชีวิตในภาคเรียนนี้ให้ตรงกับส่วนกลาง? คะแนนที่ล้างในส่วนกลางจะถูกล้างในรายวิชาด้วย"))return;const $=document.getElementById("btn-fill-ls-classes"),x=$.textContent;$.disabled=!0,$.textContent="กำลังเติม...";try{const i=await Yn(s,t);N(`เติมทักษะชีวิต ${i.classes} รายวิชา / ${i.scores} คะแนนแล้ว`,"success")}catch(i){N("เติมไม่สำเร็จ: "+fe(i),"error")}finally{$.disabled=!1,$.textContent=x}});const h=async()=>{var k;document.getElementById("lsk-tab-actions").innerHTML=`
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
        </div>`;const[{columns:$,scores:x},i]=await Promise.all([eo(s,t).catch(()=>({columns:[],scores:[]})),St().catch(()=>[])]),j=($??[]).filter(b=>b.category==="สามัญ"),_={};for(const b of x)_[b.student_id]||(_[b.student_id]={}),_[b.student_id][b.column_id]=b.score;const C=i.filter(b=>(b==null?void 0:b.id)&&(b==null?void 0:b.student_code)&&(b==null?void 0:b.main_room)).sort((b,L)=>(b.main_room??"").localeCompare(L.main_room??"",void 0,{numeric:!0})||(b.student_code??"").localeCompare(L.student_code??"")),T=document.getElementById("lsk-filter-grade"),D=document.getElementById("lsk-filter-room");T.innerHTML='<option value="">ทุกระดับชั้น</option>'+Re(C.map(b=>tt(b.main_room))).map(b=>`<option value="${b}">${b}</option>`).join("");const q=()=>{const b=T.value,L=D.value,E=Re(C.filter(B=>!b||tt(B.main_room)===b).map(B=>ut(B.main_room)));D.innerHTML='<option value="">ทุกห้อง</option>'+E.map(B=>`<option value="${B}" ${B===L?"selected":""}>ห้อง ${B}</option>`).join(""),L&&!E.includes(L)&&(D.value="")},y=b=>{if(document.getElementById("lsk-filter-count").textContent=`${b.length} คน`,!b.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${j.map(L=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${L.name}<br><span class="font-normal text-gray-400">(${L.max_score})</span></th>`).join("")}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${b.map((L,E)=>{const B=j.reduce((H,S)=>{var I;return H+(((I=_[L.id])==null?void 0:I[S.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${E+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${L.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${L.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${L.main_room??"—"}</td>
                  ${j.map(H=>{var I;const S=(I=_[L.id])==null?void 0:I[H.id];return`<td class="px-2 py-2 text-center ${S!=null?"text-gray-800 font-medium":"text-gray-300"}">${S??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${B||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};q();let c=[...C];y(c);const g=()=>{q();const b=T.value,L=D.value,E=document.getElementById("lsk-filter-search").value.toLowerCase();c=C.filter(B=>{var H,S;return(!b||tt(B.main_room)===b)&&(!L||ut(B.main_room)===L)&&(!E||((H=B.full_name)==null?void 0:H.toLowerCase().includes(E))||((S=B.student_code)==null?void 0:S.includes(E)))}),y(c)};T.addEventListener("change",g),D.addEventListener("change",g),document.getElementById("lsk-filter-search").addEventListener("input",g),(k=document.getElementById("btn-sync-ls"))==null||k.addEventListener("click",async()=>{const b=document.getElementById("btn-sync-ls");b.disabled=!0,b.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:L}=await Se(async()=>{const{syncCentralBatch:R}=await import("./sync-DqwcQWV1.js");return{syncCentralBatch:R}},__vite__mapDeps([11,6,4]));if(!j.length){N("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!e.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const E=c.map(R=>({id:R.id,student_code:R.student_code})),B=new Set(E.map(R=>R.id)),H=new Set(j.map(R=>R.id)),S=x.filter(R=>B.has(R.student_id)&&H.has(R.column_id)),I=await L(e.lifeSkillSheetIdSamai,e.lifeSkillSheetTabSamai,j,S,E,{studentColRange:e.lifeSkillStudentRangeSamai||"J8:J3000"});if(!I){N("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync ทักษะชีวิต ${E.length} คน / ${I} คะแนนแล้ว`,"success")}catch(L){N("Sync ไม่สำเร็จ: "+fe(L),"error")}finally{b.disabled=!1,b.textContent="↑ Sync ไปชีทกลาง"}})},f=()=>{document.getElementById("lsk-tab-actions").innerHTML=`
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
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>$s(null,s,t,n)),document.querySelectorAll(".lsk-edit").forEach($=>{$.addEventListener("click",()=>{const x=m.find(i=>i.id===+$.dataset.id);x&&$s(x,s,t,n)})}),document.querySelectorAll(".lsk-del").forEach($=>{$.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${$.dataset.name}"?`))try{await to(+$.dataset.id),N("ลบแล้ว","success"),n()}catch(x){N("ลบไม่สำเร็จ: "+fe(x),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach($=>{$.addEventListener("click",async()=>{var q,y,c;const x=$.dataset.key,i=$.dataset.tabKey,j=$.dataset.rangeKey,_=((q=document.getElementById(`lsk-sheet-${x}`))==null?void 0:q.value.trim())??"",C=((y=document.getElementById(`lsk-tab-${x}`))==null?void 0:y.value.trim())??"",T=((c=document.getElementById(`lsk-range-${x}`))==null?void 0:c.value.trim())??"J8:J3000",D=$.textContent;$.disabled=!0,$.textContent="⏳";try{await Promise.all([Ee(x,_),Ee(i,C),Ee(j,T)]),e[x]=_,e[i]=C,e[j]=T,$.textContent="✅",$.style.background="#16a34a",setTimeout(()=>{$.disabled=!1,$.textContent=D,$.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),$.disabled=!1,$.textContent=D}})})},v=$=>{document.querySelectorAll("[data-tab]").forEach(x=>{const i=x.dataset.tab===$;x.className=i?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),$==="scores"?h():f()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>v("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>v("config")),v("scores")};n()}function $s(e,s,t,n){var p;(p=document.getElementById("lsk-modal"))==null||p.remove();const l=!!e,o=document.createElement("div");o.id="lsk-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#lsk-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#lsk-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#lsk-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const u={name:o.querySelector("#lsk-name").value.trim(),max_score:parseInt(o.querySelector("#lsk-max").value)||20,sort_order:parseInt(o.querySelector("#lsk-order").value)||0,sheet_col:o.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:s,semester:t};l?await lo(e.id,u):await io(u),N("บันทึกสำเร็จ","success"),o.remove(),n()}catch(u){N("บันทึกไม่สำเร็จ: "+fe(u),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}const xi=e=>{const s=zs(e);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${s.cls}">${s.label}</span>`};async function jr(){Le("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const e=await Me().catch(()=>({})),s=parseInt(e.academicYear??2568),t=parseInt(e.semester??1);ds(e);const n=a=>`
    <tr class="hover:bg-gray-50 transition" data-id="${a.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${a.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${a.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${a.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${a.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${a.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${a.id}" data-name="${a.name}">ลบ</button>
      </td>
    </tr>`;let l=[];const o=async()=>{var m;l=await On(s,t).catch(()=>[]),p();const a=((m=document.querySelector("[data-tab].bg-white"))==null?void 0:m.dataset.tab)??"scores";u(a)},p=()=>{_e(`<div class="max-w-5xl mx-auto animate-fade">
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
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>u("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>u("config"))},r=async()=>{var C,T;document.getElementById("rsa-tab-actions").innerHTML=`
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
      </div>`;const[{columns:a,scores:m},h]=await Promise.all([Qn(s,t).catch(()=>({columns:[],scores:[]})),St().catch(()=>[])]),f={};for(const D of m)f[D.student_id]||(f[D.student_id]={}),f[D.student_id][D.column_id]=D.score;const v=h.filter(D=>(D==null?void 0:D.id)&&(D==null?void 0:D.student_code)&&(D==null?void 0:D.main_room)).sort((D,q)=>(D.main_room??"").localeCompare(q.main_room??"",void 0,{numeric:!0})||(D.student_code??"").localeCompare(q.student_code??"")),w=document.getElementById("rsa-filter-grade"),$=document.getElementById("rsa-filter-room");w.innerHTML='<option value="">ทุกระดับชั้น</option>'+Re(v.map(D=>tt(D.main_room))).map(D=>`<option value="${D}">${D}</option>`).join("");const x=()=>{const D=w.value,q=$.value,y=Re(v.filter(c=>!D||tt(c.main_room)===D).map(c=>ut(c.main_room)));$.innerHTML='<option value="">ทุกห้อง</option>'+y.map(c=>`<option value="${c}" ${c===q?"selected":""}>ห้อง ${c}</option>`).join(""),q&&!y.includes(q)&&($.value="")},i=D=>{if(document.getElementById("rsa-filter-count").textContent=`${D.length} คน`,!D.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${a.map(q=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${q.name}<br><span class="font-normal text-gray-400">(${q.max_score})</span></th>`).join("")}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${D.map((q,y)=>{const c=a.reduce((b,L)=>{var E;return b+(((E=f[q.id])==null?void 0:E[L.id])??0)},0),g=c/2,k=c>0?xi(g):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${y+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${q.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${q.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${q.main_room??"—"}</td>
                ${a.map(b=>{var E;const L=(E=f[q.id])==null?void 0:E[b.id];return`<td class="px-2 py-2 text-center ${L!=null?"text-gray-800 font-medium":"text-gray-300"}">${L??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${c||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${c>0?g.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${k}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};x();let j=[...v];i(j);const _=()=>{x();const D=w.value,q=$.value,y=document.getElementById("rsa-filter-search").value.toLowerCase();j=v.filter(c=>{var g,k;return(!D||tt(c.main_room)===D)&&(!q||ut(c.main_room)===q)&&(!y||((g=c.full_name)==null?void 0:g.toLowerCase().includes(y))||((k=c.student_code)==null?void 0:k.includes(y)))}),i(j)};w.addEventListener("change",_),$.addEventListener("change",_),document.getElementById("rsa-filter-search").addEventListener("input",_),(C=document.getElementById("btn-sync-rs"))==null||C.addEventListener("click",async()=>{const D=document.getElementById("btn-sync-rs");if(!e.readingScoreSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}D.disabled=!0,D.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:q}=await Se(async()=>{const{syncCentralBatch:L}=await import("./sync-DqwcQWV1.js");return{syncCentralBatch:L}},__vite__mapDeps([11,6,4])),y=j.map(L=>({id:L.id,student_code:L.student_code})),c=new Set(y.map(L=>L.id)),g=new Set(a.map(L=>L.id)),k=m.filter(L=>c.has(L.student_id)&&g.has(L.column_id)),b=await q(e.readingScoreSheetId,e.readingScoreSheetTab,a,k,y,{studentColRange:e.readingScoreStudentRange||"J8:J3000"});if(!b){N("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}N(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${y.length} คน / ${b} คะแนนแล้ว`,"success")}catch(q){N("Sync ไม่สำเร็จ: "+fe(q),"error")}finally{D.disabled=!1,D.textContent="↑ Sync ไปชีทกลาง"}}),(T=document.getElementById("btn-fill-reading-eval"))==null||T.addEventListener("click",async()=>{const D=document.getElementById("btn-fill-reading-eval");if(!e.readingEvalClassSheetCol){N("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}D.disabled=!0,D.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:q}=await Se(async()=>{const{syncReadingEvalToClassSheets:k}=await import("./sync-DqwcQWV1.js");return{syncReadingEvalToClassSheets:k}},__vite__mapDeps([11,6,4])),{getAllClassesForFill:y}=await Se(async()=>{const{getAllClassesForFill:k}=await import("./api-Bf4Tf4Cp.js");return{getAllClassesForFill:k}},__vite__mapDeps([0,1,2,3,4])),c={};for(const k of v){const b=a.reduce((L,E)=>{var B;return L+(((B=f[k.id])==null?void 0:B[E.id])??0)},0);if(b>0){const L=b/2;c[k.id]={label:zs(L).label,score100:L}}}const g=await y();await q(g,c,e.readingEvalClassSheetCol),N(`ป้อนผลประเมินอ่านฯ ไป ${g.length} ห้องสำเร็จ`,"success")}catch(q){N("ป้อนไม่สำเร็จ: "+fe(q),"error")}finally{D.disabled=!1,D.textContent="📝 ป้อนผล → ทุกวิชา"}})},d=()=>{var m,h,f;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const a=l.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${l.map(n).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${l.length} หัวข้อ · รวม ${l.reduce((v,w)=>v+w.max_score,0)} คะแนน</span>
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
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${ft.map(v=>v.label).join("/")})</span>
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
          ${ft.map((v,w)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${w}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${w+1}:</span>
              <input type="text" data-rsa-label value="${Oe(v.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${v.min}" min="0" max="100" ${w===ft.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${w===ft.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${w===ft.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>Es(null,s,t,o)),document.querySelectorAll(".rsa-edit").forEach(v=>{v.addEventListener("click",()=>{const w=l.find($=>$.id===+v.dataset.id);w&&Es(w,s,t,o)})}),document.querySelectorAll(".rsa-del").forEach(v=>{v.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${v.dataset.name}"?`))try{await Zn(+v.dataset.id),N("ลบแล้ว","success"),o()}catch(w){N("ลบไม่สำเร็จ: "+fe(w),"error")}})}),(m=document.getElementById("rsa-save-sheet"))==null||m.addEventListener("click",async()=>{var i,j,_;const v=document.getElementById("rsa-save-sheet"),w=((i=document.getElementById("rsa-sheet-id"))==null?void 0:i.value.trim())??"",$=((j=document.getElementById("rsa-sheet-tab"))==null?void 0:j.value.trim())??"",x=((_=document.getElementById("rsa-student-range"))==null?void 0:_.value.trim())??"J8:J3000";v.disabled=!0,v.textContent="⏳";try{await Promise.all([Ee("readingScoreSheetId",w),Ee("readingScoreSheetTab",$),Ee("readingScoreStudentRange",x)]),e.readingScoreSheetId=w,e.readingScoreSheetTab=$,e.readingScoreStudentRange=x,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),N("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(h=document.getElementById("rsa-save-eval-col"))==null||h.addEventListener("click",async()=>{var $;const v=document.getElementById("rsa-save-eval-col"),w=((($=document.getElementById("rsa-eval-col"))==null?void 0:$.value.trim())??"").toUpperCase();v.disabled=!0,v.textContent="⏳";try{await Ee("readingEvalClassSheetCol",w),e.readingEvalClassSheetCol=w,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),N("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(f=document.getElementById("rsa-save-grades"))==null||f.addEventListener("click",async()=>{const v=document.getElementById("rsa-save-grades"),w=document.getElementById("rsa-grades-err");w.textContent="";const $=[...document.querySelectorAll("[data-rsa-grade-row]")].map((x,i)=>({label:x.querySelector("[data-rsa-label]").value.trim(),min:i===ft.length-1?0:parseFloat(x.querySelector("[data-rsa-min]").value)}));if($.some(x=>!x.label)){w.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if($.some(x=>Number.isNaN(x.min)||x.min<0||x.min>100)){w.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let x=0;x<$.length-1;x++)if($[x].min<=$[x+1].min){w.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}v.disabled=!0,v.textContent="⏳";try{await Ee("readingEvalThresholds",JSON.stringify($)),ds({readingEvalThresholds:JSON.stringify($)}),v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึกเกณฑ์",v.style.background=""},1500),N("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(x){N("บันทึกไม่สำเร็จ: "+fe(x),"error"),v.disabled=!1,v.textContent="บันทึกเกณฑ์"}})},u=a=>{document.querySelectorAll("[data-tab]").forEach(m=>{m.className=m.dataset.tab===a?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),a==="scores"?r():d()};o()}const st={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function qt(e,s){var o;(o=document.getElementById("admin-picker"))==null||o.remove();const t=document.createElement("div");t.id="admin-picker",t.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const n=(e.target.closest("td,th,button")??e.target).getBoundingClientRect();t.style.top=Math.min(n.bottom+4,window.innerHeight-60)+"px",t.style.left=Math.max(4,Math.min(n.left,window.innerWidth-220))+"px";const l=document.createElement("button");l.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",l.textContent="✕ ล้าง",l.onclick=()=>{t.remove(),s(null)},t.appendChild(l),Object.entries(st).forEach(([p,r])=>{const d=document.createElement("button");d.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${r.bg} ${r.color} hover:opacity-80 transition`,d.textContent=r.label,d.title=r.fullLabel,d.onclick=()=>{t.remove(),s(p)},t.appendChild(d)}),document.body.appendChild(t),setTimeout(()=>document.addEventListener("click",()=>t.remove(),{once:!0}),50)}const ks=["อา","จ","อ","พ","พฤ","ศ","ส"];function gi(e,s){const t=[],n=new Date(e),l=new Date(s),o=n.getDay()%7;o&&n.setDate(n.getDate()-o);let p=new Date(n),r=1;for(;p<=l;){const d=[];for(let u=0;u<5;u++){const a=new Date(p);a.setDate(a.getDate()+u),a<=l&&d.push({date:new Date(a),ds:a.toISOString().slice(0,10)})}d.length&&(t.push({n:r,days:d}),r++),p.setDate(p.getDate()+7)}return t}function Ss(e,s){const t=s.reduce((l,o)=>{var p;return l+(((p=st[e[o.ds]])==null?void 0:p.score)??0)},0),n=s.length*2;return n>0?Math.min(10,Math.max(0,Math.round(t/n*100)/10)):0}function Pt(e){return`${e.getDate()}/${e.getMonth()+1}`}async function Br(e){var v,w,$,x;Le("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let s=null,t=e;if(!t)try{const{data:i}=await ie.auth.getSession(),j=((w=(v=i==null?void 0:i.session)==null?void 0:v.user)==null?void 0:w.id)??null;if(j){const{data:_}=await ie.from("teachers").select("*").eq("profile_id",j).maybeSingle();t=_??null}}catch(i){console.error("Failed to load teacher session:",i)}const[n,l]=await Promise.all([Me().catch(()=>({})),Ms().catch(()=>[])]),o=l,p=(n.prayerScannerTeachers||"").split(/[\s,]+/).map(i=>i.trim()).filter(Boolean);let r=!1;if(t){const{data:i}=await ie.from("profiles").select("role").eq("id",t.profile_id).maybeSingle();r=p.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(i==null?void 0:i.role)==="admin"}_e(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const d=()=>{var z;const i=n.semester_start,j=n.semester_end,_=i&&j?gi(i,j):[],C=_.flatMap(O=>O.days);if(document.getElementById("pr-tab-actions").innerHTML=`
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
      </div>`,(z=document.getElementById("btn-fill-prayer-classes"))==null||z.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const O=document.getElementById("btn-fill-prayer-classes"),W=O.textContent;O.disabled=!0,O.textContent="กำลังเติม...";try{const Y=await Kn({semesterStart:n.semester_start,semesterEnd:n.semester_end,attendanceScoreMode:n.attendanceScoreMode??"recorded"});N(`เติมรายวิชาศาสนา ${Y.classes} รายวิชา / ${Y.scores} คะแนนแล้ว`,"success")}catch(Y){N("เติมไม่สำเร็จ: "+fe(Y),"error")}finally{O.disabled=!1,O.textContent=W}}),document.getElementById("pr-tab-content").innerHTML=`
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
          ${Object.values(st).map(O=>`<span class="px-1.5 py-0.5 ${O.bg} ${O.color} rounded cursor-default">${O.label}=${O.fullLabel??""}</span>`).join("")}
        </div>
      </div>
      ${!i||!j?`<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`:`<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`,!i||!j)return;const T="border border-gray-200 text-center text-xs select-none",D="sticky left-0 z-20 bg-white border border-gray-200",q="sticky z-20 bg-white border border-gray-200",y=O=>O>=8?"text-emerald-600":O>=6?"text-amber-500":"text-red-600",c=30,g=160,k={};let b=[],L=[];const E=(O,W=!0)=>{O&&(O.style.outline=`2px solid ${W?"#059669":"#ef4444"}`,O.style.outlineOffset="1px",setTimeout(()=>{O.style.outline="",O.style.outlineOffset=""},700))},B=async(O,W,Y,M)=>{var Q;k[O]||(k[O]={}),M===null?delete k[O][W]:k[O][W]=M;const V=document.querySelector(`.pr-cell[data-sid="${O}"][data-date="${W}"]`);if(V){const Z=M?st[M]:null;Object.values(st).forEach(se=>V.classList.remove(se.bg)),Z?(V.classList.add(Z.bg),V.innerHTML=`<span class="${Z.color} text-xs">${Z.label}</span>`):V.innerHTML=""}S(O);const K=document.querySelector(`.adm-cell[data-sid="${O}"][data-date="${W}"]`);if(K){const Z=M?st[M]:null;K.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${Z?Z.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,K.innerHTML=Z?`<span class="${Z.color}">${Z.label}</span>`:'<span class="text-gray-200">·</span>'}try{const Z=((Q=_.find(se=>se.days.some(ae=>ae.ds===W)))==null?void 0:Q.n)??null;await Ro(O,Y,W,M,Z,"แอดมิน"),E(V,!0),E(K,!0)}catch(Z){console.error("[prayer save]",Z),E(V,!1),E(K,!1),N("บันทึกไม่สำเร็จ: "+fe(Z),"error")}},H=async(O,W)=>{const M=(await Promise.allSettled(O.map(([V,K,Q])=>B(V,K,W,Q)))).filter(V=>V.status==="rejected").length;M>0&&N(`บันทึกไม่สำเร็จ ${M} รายการ`,"error")},S=O=>{const W=k[O]??{},Y=Ss(W,C),M=document.getElementById(`pr-sc-${O}`);M&&(M.textContent=Y,M.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${y(Y)} text-xs`)},I=(O,W)=>{if(document.getElementById("pr-filter-count").textContent=`${O.length} คน · ${C.length} วัน`,!O.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${D} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${q} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${q} bg-gray-50 text-left px-2" style="left:96px;min-width:${g}px">ชื่อ-นามสกุล</th>
              ${_.map(Y=>`<th colspan="${Y.days.length}"
                class="${T} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${Y.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${Y.n}">
                Week${Y.n} ✎</th>`).join("")}
              <th class="${T} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${D} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${q} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${q} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${g}px">ชื่อ</th>
              ${_.flatMap(Y=>Y.days.map(M=>`<th class="${T} bg-gray-100 text-gray-400 font-normal"
                style="width:${c}px;min-width:${c}px;font-size:9px">
                ${ks[M.date.getDay()]}<br/>${Pt(M.date)}</th>`)).join("")}
              <th class="${T} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${O.map((Y,M)=>{const V=k[Y.id]??{},K=Ss(V,C);return`<tr class="hover:bg-gray-50/60" data-sid="${Y.id}">
                <td class="${D} text-center text-gray-400" style="width:28px">${M+1}</td>
                <td class="${q} text-center font-mono text-gray-600" style="left:28px;width:68px">${Y.student_code??"—"}</td>
                <td class="${q} px-2" style="left:96px;min-width:${g}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${Y.image_url?`<img src="${Y.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${Y.full_name??"—"}</span>
                  </div>
                </td>
                ${_.flatMap(Q=>Q.days.map(Z=>{const se=V[Z.ds]??null,ae=se?st[se]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${ae?ae.bg:""}"
                    data-sid="${Y.id}" data-date="${Z.ds}" data-room="${W}"
                    style="width:${c}px;min-width:${c}px;height:28px">
                    ${ae?`<span class="${ae.color} text-xs">${ae.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${y(K)} text-xs"
                  id="pr-sc-${Y.id}" style="min-width:48px">${K}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",Y=>{const M=Y.target.closest(".pr-week-th");if(!M)return;const V=+M.dataset.week,K=_.find(Q=>Q.n===V);K&&U(K,b,F)}),document.getElementById("pr-grid-wrap").addEventListener("click",Y=>{const M=Y.target.closest(".pr-cell");if(!M)return;Y.stopPropagation();const V=+M.dataset.sid,K=M.dataset.date,Q=M.dataset.room;qt(Y,Z=>B(V,K,Q,Z))})},R=async(O,W="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[Y,M]=await Promise.all([ro(O),no(O,i,j)]);b=Y,Object.keys(k).forEach(K=>delete k[K]);for(const K of b)k[K.id]={};for(const K of M)k[K.student_id]||(k[K.student_id]={}),k[K.student_id][K.check_date]=K.status;L=C.map(K=>K.ds);const V=W?b.filter(K=>{var Q,Z;return((Q=K.full_name)==null?void 0:Q.toLowerCase().includes(W))||((Z=K.student_code)==null?void 0:Z.includes(W))}):b;I(V,O)}catch(Y){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${Y.message}</div>`}};let F=o[0]??"";const A=O=>{F=O,document.getElementById("pr-room-label").textContent=O,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(Y=>{const M=Y.dataset.room===O;Y.classList.toggle("bg-indigo-50",M),Y.classList.toggle("font-semibold",M),Y.classList.toggle("text-indigo-700",M)});const W=document.getElementById("pr-filter-search").value.toLowerCase();R(O,W)};document.getElementById("pr-room-btn").addEventListener("click",O=>{O.stopPropagation();const W=document.getElementById("pr-room-dropdown");W.classList.toggle("hidden"),W.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",O=>{const W=O.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(Y=>{Y.style.display=Y.dataset.room.toLowerCase().includes(W)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",O=>{const W=O.target.closest(".pr-room-item");W&&A(W.dataset.room)}),document.addEventListener("click",()=>{var O;(O=document.getElementById("pr-room-dropdown"))==null||O.classList.add("hidden")},{capture:!0,once:!1}),F&&A(F),document.getElementById("pr-filter-search").addEventListener("input",O=>{const W=O.target.value.toLowerCase();if(!b.length)return;const Y=W?b.filter(M=>{var V,K;return((V=M.full_name)==null?void 0:V.toLowerCase().includes(W))||((K=M.student_code)==null?void 0:K.includes(W))}):b;I(Y,F)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const O=document.getElementById("btn-sync-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const W=Object.values(k).flatMap(M=>Object.keys(M)),Y=[...new Set([...L,...W])].sort();if(!Y.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}O.disabled=!0,O.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:M}=await Se(async()=>{const{syncPrayerSheet:K}=await import("./sync-DqwcQWV1.js");return{syncPrayerSheet:K}},__vite__mapDeps([11,6,4])),V=b.map(K=>({id:K.id,student_code:K.student_code}));await M(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",Y,k,V),N(`Sync ละหมาด ${V.length} คน × ${Y.length} วัน สำเร็จ`,"success")}catch(M){N("Sync ไม่สำเร็จ: "+fe(M),"error")}finally{O.disabled=!1,O.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const O=document.getElementById("btn-sync-all-prayer");if(!n.prayerSheetId){N("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}O.disabled=!0,O.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:W}=await Se(async()=>{const{syncPrayerSheet:ue}=await import("./sync-DqwcQWV1.js");return{syncPrayerSheet:ue}},__vite__mapDeps([11,6,4])),{getAllPrayerRecords:Y,getStudents:M}=await Se(async()=>{const{getAllPrayerRecords:ue,getStudents:we}=await import("./api-Bf4Tf4Cp.js");return{getAllPrayerRecords:ue,getStudents:we}},__vite__mapDeps([0,1,2,3,4])),[V,K]=await Promise.all([Y(),M()]),Q={};for(const ue of V)Q[ue.student_id]||(Q[ue.student_id]={}),Q[ue.student_id][ue.check_date]=ue.status;const se=K.filter(ue=>ue.religion_room).map(ue=>({id:ue.id,student_code:ue.student_code})),ae=[...new Set(V.map(ue=>ue.check_date))].sort(),me=[...new Set([...L,...ae])].sort();if(!me.length||!se.length){N("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}O.textContent=`⏳ Sync ${se.length} คน × ${me.length} วัน...`,await W(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",me,Q,se),N(`✅ Sync ทุกห้อง ${se.length} คน × ${me.length} วัน สำเร็จ`,"success")}catch(W){N("Sync ไม่สำเร็จ: "+fe(W),"error")}finally{O.disabled=!1,O.textContent="↑ Sync ทุกห้อง"}});const U=(O,W,Y)=>{var Q;(Q=document.getElementById("admin-prayer-modal"))==null||Q.remove();const M=document.createElement("div");M.id="admin-prayer-modal",M.className="fixed inset-0 z-[80] flex flex-col bg-white";const V=`${Pt(O.days[0].date)}–${Pt(O.days[O.days.length-1].date)}`,K=(Z,se)=>{var ue;const ae=((ue=k[Z])==null?void 0:ue[se])??null,me=ae?st[ae]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${me?me.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${Z}" data-date="${se}" data-room="${Y}">
          ${me?`<span class="${me.color}">${me.label}</span>`:'<span class="text-gray-200">·</span>'}
        </button>`};M.innerHTML=`
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
                    <div class="font-semibold text-gray-700">${ks[Z.date.getDay()]} ${Pt(Z.date)}</div>
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
        </div>`,document.body.appendChild(M),M.querySelector("#adm-modal-body").addEventListener("click",Z=>{const se=Z.target.closest(".adm-cell");if(!se)return;Z.stopPropagation();const ae=+se.dataset.sid,me=se.dataset.date;qt(Z,ue=>B(ae,me,Y,ue))}),M.querySelectorAll(".adm-day-all").forEach(Z=>{Z.addEventListener("click",se=>{se.stopPropagation();const ae=Z.dataset.date;qt(se,me=>H(W.map(ue=>[ue.id,ae,me]),Y))})}),M.querySelectorAll(".adm-row-all").forEach(Z=>{Z.addEventListener("click",se=>{se.stopPropagation();const ae=+Z.dataset.sid;qt(se,me=>H(O.days.map(ue=>[ae,ue.ds,me]),Y))})}),M.querySelector("#adm-all-check").addEventListener("click",Z=>{Z.stopPropagation(),qt(Z,se=>H(W.flatMap(ae=>O.days.map(me=>[ae.id,me.ds,se])),Y))}),M.querySelector("#adm-modal-close").addEventListener("click",()=>M.remove())}},u=()=>{document.getElementById("pr-tab-actions").innerHTML="",s&&(clearInterval(s),s=null);const i=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Filters panel -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
          <h3 class="font-bold text-gray-800 text-sm flex items-center gap-1.5">
            🔍 คัดกรองข้อมูล
          </h3>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">เลือกวันที่สแกน</label>
            <input type="date" id="hist-date-input" value="${i}"
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
    `;let j=[],_="",C=!1;const T=1e3,D=b=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[b]||"ไม่ระบุพื้นที่",q=b=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[b]||"bg-gray-50 text-gray-500 border-gray-100",y=async b=>{const L=[];for(let E=0;;E+=T){const{data:B,error:H}=await ie.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",b).not("location","is",null).order("created_at",{ascending:!1}).range(E,E+T-1);if(H)throw H;if(L.push(...B??[]),!B||B.length<T)break}return L},c=async()=>{var E;if(!document.getElementById("hist-table-body")){s&&(clearInterval(s),s=null);return}const L=((E=document.getElementById("hist-date-input"))==null?void 0:E.value)||i;if(!C){C=!0;try{j=await y(L),g()}catch(B){console.error("Fetch history failed:",B);const H=document.getElementById("hist-table-body");H&&(H.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${B.message}</td></tr>`)}finally{C=!1}}},g=()=>{var M,V;const b=((M=document.getElementById("hist-loc-filter"))==null?void 0:M.value)||"",L=(((V=document.getElementById("hist-search-input"))==null?void 0:V.value)||"").trim().toLowerCase(),E=j.filter(K=>{var Q,Z,se,ae;if(b&&K.location!==b||_&&(K.scanned_by||((Q=K.teachers)==null?void 0:Q.full_name)||"บันทึกมือ (เดิม)")!==_)return!1;if(L){const me=(((Z=K.students)==null?void 0:Z.full_name)||"").toLowerCase(),ue=(((se=K.students)==null?void 0:se.student_code)||"").toLowerCase(),we=(K.main_room||"").toLowerCase(),Ie=(K.scanned_by||((ae=K.teachers)==null?void 0:ae.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),Te=K.input_method==="manual"?"กรอกรหัส manual":"qr";return me.includes(L)||ue.includes(L)||we.includes(L)||Ie.includes(L)||Te.includes(L)}return!0}),B=E.length,H=E.filter(K=>K.status==="pray").length,S=E.filter(K=>K.status==="usor").length,I=B-H-S,R=document.getElementById("stat-hist-total"),F=document.getElementById("stat-hist-pray"),A=document.getElementById("stat-hist-usor"),U=document.getElementById("stat-hist-other");R&&(R.textContent=B),F&&(F.textContent=H),A&&(A.textContent=S),U&&(U.textContent=I);const z=new Set;j.forEach(K=>{var Z;const Q=K.scanned_by||((Z=K.teachers)==null?void 0:Z.full_name);Q&&z.add(Q)});const O=document.getElementById("hist-operators-wrap");O&&(z.size===0?O.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(O.innerHTML=Array.from(z).map(K=>{const Q=_===K;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${K.includes("(ครู)")||K.includes("ครู")?Q?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":Q?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${K}">${Q?"✓ ":""}${K}</span>`}).join(""),O.querySelectorAll(".op-filter-chip").forEach(K=>{K.addEventListener("click",()=>{const Q=K.dataset.op;_=_===Q?"":Q,g()})})));const W=document.getElementById("hist-table-count");W&&(W.textContent=`${E.length} รายการ`);const Y=document.getElementById("hist-table-body");if(Y){if(E.length===0){Y.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}Y.innerHTML=E.map((K,Q)=>{var Fe;const Z=K.created_at?new Date(K.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",se=K.students,ae=se!=null&&se.image_url?`<img src="${se.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((se==null?void 0:se.full_name)||"?").charAt(0)}</div>`,me=se?`<div class="flex items-center gap-2.5">
              ${ae}
              <div>
                <p class="font-bold text-gray-800 leading-none">${se.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${se.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${K.student_id})</span>`,ue={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[K.status]||`<span class="text-gray-400">${K.status||"—"}</span>`,we=K.scanned_by||((Fe=K.teachers)==null?void 0:Fe.full_name)||"บันทึกมือ (เดิม)",Ie=K.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",Te=K.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${E.length-Q}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${Z}</td>
            <td class="px-4 py-3">${me}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${K.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${q(K.location)}">
                ${D(K.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${we}</span>
              <div class="flex flex-wrap gap-1">${Ie}${Te}</div>
            </td>
            <td class="px-4 py-3 text-center">${ue}</td>
          </tr>
        `}).join("")}},k=()=>{s&&(clearInterval(s),s=null);const b=document.getElementById("hist-live-toggle");b&&b.checked&&(s=setInterval(c,4e3))};setTimeout(()=>{var E,B,H;(E=document.getElementById("btn-hist-refresh"))==null||E.addEventListener("click",c),(B=document.getElementById("hist-date-input"))==null||B.addEventListener("change",()=>{_="",c()}),(H=document.getElementById("hist-loc-filter"))==null||H.addEventListener("change",g);const b=document.getElementById("hist-search-input");b&&b.addEventListener("input",g);const L=document.getElementById("hist-live-toggle");L&&L.addEventListener("change",k),c(),k()},50)},a=(i,j=!1)=>i==null||i===""?j:["1","true","yes","on"].includes(String(i).trim().toLowerCase()),m=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${o.map(i=>`<option value="${i}">${i}</option>`).join("")}
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
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const i=document.getElementById("pr-save-cfg"),j=document.getElementById("pr-sheet-id").value.trim(),_=document.getElementById("pr-sheet-tab").value.trim()||"Solat",C=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";i.disabled=!0,i.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerSheetId",j),Ee("prayerSheetTab",_),Ee("prayerStudentRange",C)]),n.prayerSheetId=j,n.prayerSheetTab=_,n.prayerStudentRange=C,i.textContent="✅ บันทึกแล้ว",i.style.background="#16a34a",setTimeout(()=>{i.disabled=!1,i.textContent="บันทึกการตั้งค่า",i.style.background=""},1800),N("บันทึก Sheet config ละหมาดแล้ว","success")}catch{N("บันทึกไม่สำเร็จ","error"),i.disabled=!1,i.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var D,q,y;const i=document.getElementById("pr-save-scanner-safety"),j=(D=document.getElementById("pr-guard-male"))!=null&&D.checked?"true":"false",_=(q=document.getElementById("pr-guard-female"))!=null&&q.checked?"true":"false",C=parseInt(((y=document.getElementById("pr-manual-monthly-limit"))==null?void 0:y.value)||"2",10),T=String(Math.max(0,Math.min(31,Number.isFinite(C)?C:2)));i.disabled=!0,i.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerSameRoomGuardMaleEnabled",j),Ee("prayerSameRoomGuardFemaleEnabled",_),Ee("prayerManualEntryMonthlyLimit",T)]),n.prayerSameRoomGuardMaleEnabled=j,n.prayerSameRoomGuardFemaleEnabled=_,n.prayerManualEntryMonthlyLimit=T,N("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),i.textContent="✅ บันทึกแล้ว",setTimeout(()=>{i.disabled=!1,i.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(c){N("บันทึกไม่สำเร็จ: "+fe(c),"error"),i.disabled=!1,i.textContent="บันทึกความปลอดภัยระบบสแกน"}})},h=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
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
    `;let i=[],j={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const _=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],C=c=>(c||"").split(/[\s,]+/).map(g=>g.trim()).filter(Boolean),T=c=>String(c||"").trim(),D=c=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[c]||"ทั้งหมด",q=async(c,g)=>{const k=await Me().catch(()=>({})),b=new Set(C(k.prayerExtendedScannerStudents));g?b.add(String(c)):b.delete(String(c));const L=Array.from(b).join(",");return await Ee("prayerExtendedScannerStudents",L),n.prayerExtendedScannerStudents=L,L};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const c=document.getElementById("pr-save-scanner-time-cfg"),g=document.getElementById("pr-scan-start").value.trim()||"12:20",k=document.getElementById("pr-scan-end").value.trim()||"12:50",b=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![g,k,b].every(E=>/^\d{1,2}:\d{2}$/.test(E))){N("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}c.disabled=!0,c.textContent="⏳ กำลังบันทึก...";try{await Promise.all([Ee("prayerScanStartTime",g),Ee("prayerScanEndTime",k),Ee("prayerScanExtendedEndTime",b)]),n.prayerScanStartTime=g,n.prayerScanEndTime=k,n.prayerScanExtendedEndTime=b,N("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),c.textContent="✅ บันทึกแล้ว",setTimeout(()=>{c.disabled=!1,c.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(E){N("บันทึกไม่สำเร็จ: "+fe(E),"error"),c.disabled=!1,c.textContent="บันทึกช่วงเวลาสแกน"}});const y=async()=>{var g,k;const c=document.getElementById("scanners-list-wrap");if(c)try{const{data:b,error:L}=await ie.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if(L)throw L;const E=await Me().catch(()=>({})),B=b??[],H=C(E.prayerScannerTeachers),S=new Set(C(E.prayerExtendedScannerStudents));let I=[];if(H.length>0){const{data:ae,error:me}=await ie.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",H).order("teacher_code");if(me)throw me;I=ae??[]}const R=B.length+I.length;if(document.getElementById("scanner-count-badge").textContent=`${R} คน`,R===0){c.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const F=Object.fromEntries(_.map(ae=>[ae.key,new Set(C(E[`prayerScanner${ae.key}`]))])),A=B.map(ae=>{const me=String(ae.student_code||"").trim(),ue=_.filter(Ie=>{var Te;return(Te=F[Ie.key])==null?void 0:Te.has(me)}).map(Ie=>Ie.key),we=S.has(me);return{...ae,type:"student",code:me,name:ae.full_name||"",roomInfo:ae.main_room||"",gender:T(ae.gender),permission:we?"extended":"normal",permissionLabel:we?"ขยายเวลา":"ทั่วไป",assignedDays:ue,searchText:[me,ae.full_name,ae.main_room,ae.gender,we?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),U=I.map(ae=>({...ae,type:"teacher",code:String(ae.teacher_code||"").trim(),name:ae.full_name||"",roomInfo:ae.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[ae.teacher_code,ae.full_name,ae.dept,"ครู คุณครู"].join(" ").toLowerCase()})),z=[...A,...U],O=Re(z.map(ae=>ae.roomInfo)),W=A.filter(ae=>ae.gender==="ชาย").length,Y=A.filter(ae=>ae.gender==="หญิง").length,M=A.filter(ae=>ae.permission==="extended").length,V=A.filter(ae=>ae.assignedDays.length===0).length,K=(ae,me,ue="indigo")=>{const we={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${we[ue]||we.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${ae}</p>
              <p class="text-lg font-extrabold leading-tight">${me}</p>
            </div>
          `};c.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${K("ทั้งหมด",R,"indigo")}
              ${K("ชาย",W,"emerald")}
              ${K("หญิง",Y,"rose")}
              ${K("ครู",I.length,"slate")}
              ${K("ขยายเวลา",M,"amber")}
              ${K("ยังไม่มีเวร",V,V?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${R}`],["male",`ชาย ${W}`],["female",`หญิง ${Y}`],["teacher",`ครู ${I.length}`]].map(([ae,me])=>`
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
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${D(j.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const Q=()=>{const ae=j,me=ae.q.trim().toLowerCase();return z.filter(ue=>!(ae.audience==="male"&&!(ue.type==="student"&&ue.gender==="ชาย")||ae.audience==="female"&&!(ue.type==="student"&&ue.gender==="หญิง")||ae.audience==="teacher"&&ue.type!=="teacher"||ae.type&&ue.type!==ae.type||ae.gender&&ue.gender!==ae.gender||ae.room&&ue.roomInfo!==ae.room||ae.permission&&ue.permission!==ae.permission||ae.day==="none"&&!(ue.type==="student"&&ue.assignedDays.length===0)||ae.day&&ae.day!=="none"&&!ue.assignedDays.includes(ae.day)||me&&!ue.searchText.includes(me)))},Z=()=>{c.querySelectorAll(".scanner-audience-tab").forEach(ue=>{const we=ue.dataset.scannerAudience===j.audience;ue.className=we?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const ae=document.getElementById("scanner-filtered-count");ae&&(ae.textContent=Q().length);const me=document.getElementById("scanner-active-audience-label");me&&(me.textContent=D(j.audience))},se=()=>{var Te,Fe,Je;Z();const ae=Q(),me=document.getElementById("scanner-table-wrap"),ue=document.getElementById("scanner-filtered-count");ue&&(ue.textContent=ae.length),document.getElementById("scanner-count-badge").textContent=ae.length===R?`${R} คน`:`${ae.length}/${R} คน`;const we=(Fe=(Te=document.activeElement)==null?void 0:Te.id)!=null&&Fe.startsWith("scanner-filter-")?document.activeElement.id:"",Ie=we==="scanner-filter-q"?document.activeElement.selectionStart:null;if(me.innerHTML=`
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
                    `;const ce=_.map(le=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${P.assignedDays.includes(le.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${te(P.code)}" data-day="${le.key}" data-name="${te(P.name)}" title="เวรวัน${le.full}">
                        ${le.label}
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
          `,["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(P=>{var ce;(ce=document.getElementById(P))==null||ce.addEventListener("change",le=>{const ne=P.replace("scanner-filter-","");j[ne]=le.target.value,se()})}),(Je=document.getElementById("scanner-filter-q"))==null||Je.addEventListener("input",P=>{j.q=P.target.value,se()}),we){const P=document.getElementById(we);P==null||P.focus(),we==="scanner-filter-q"&&Ie!==null&&(P==null||P.setSelectionRange(Ie,Ie))}c.querySelectorAll(".btn-toggle-extended-scanner").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.code,le=P.dataset.name,ne=P.dataset.extended!=="1";P.disabled=!0,P.textContent="กำลังบันทึก...";try{await q(ce,ne),N(`ปรับสิทธิ์ "${le}" เป็น${ne?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),y()}catch(G){N("ปรับสิทธิ์ไม่สำเร็จ: "+G.message,"error"),P.disabled=!1,P.textContent=P.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),c.querySelectorAll(".btn-toggle-day-scanner").forEach(P=>{P.addEventListener("click",async()=>{var G;const ce=P.dataset.code,le=P.dataset.day,ne=P.dataset.name;P.disabled=!0;try{const J=await Me().catch(()=>({})),de=`prayerScanner${le}`;let oe=C(J[de]);oe.includes(ce)?oe=oe.filter(ee=>ee!==ce):oe.push(ce),await Ee(de,oe.join(","));const X=((G=_.find(ee=>ee.key===le))==null?void 0:G.full)||le;N(`ปรับสิทธิ์เวรวัน${X} ของ "${ne}" สำเร็จ`,"success"),y()}catch(J){N("ปรับสิทธิ์เวรล้มเหลว: "+J.message,"error"),P.disabled=!1}})}),c.querySelectorAll(".btn-revoke-scanner").forEach(P=>{P.addEventListener("click",async()=>{const ce=P.dataset.type,le=P.dataset.name;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${le}" หรือไม่?`))try{if(ce==="student"){const ne=+P.dataset.id,G=P.dataset.code,{error:J}=await ie.from("students").update({can_scan_prayer:!1}).eq("id",ne);if(J)throw J;await q(G,!1);const de=await Me().catch(()=>({}));for(const oe of _){const X=`prayerScanner${oe.key}`,ee=C(de[X]).filter(pe=>pe!==G);await Ee(X,ee.join(","))}}else{const ne=P.dataset.code,G=await Me().catch(()=>({})),J=C(G.prayerScannerTeachers).filter(de=>de!==ne);await Ee("prayerScannerTeachers",J.join(","))}N(`ถอนสิทธิ์ "${le}" สำเร็จ`,"success"),y()}catch(ne){N("ทำรายการไม่สำเร็จ: "+ne.message,"error")}})})};c.querySelectorAll("[data-scanner-audience]").forEach(ae=>{ae.addEventListener("click",()=>{j.audience=ae.dataset.scannerAudience,j.type="",j.gender="",j.audience==="teacher"&&(j.day="",j.permission=""),se()})}),(g=document.getElementById("btn-filter-unassigned-scanner"))==null||g.addEventListener("click",()=>{j.day="none",j.type="student",se()}),(k=document.getElementById("btn-reset-scanner-filters"))==null||k.addEventListener("click",()=>{j={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},se()}),se()}catch(b){c.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${b.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const c=document.getElementById("pr-scanner-search-input").value.trim();if(!c){N("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const g=c.split(/[\s,]+/).map(k=>k.trim()).filter(Boolean);if(g.length)try{const[k,b]=await Promise.all([ie.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",g),ie.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",g)]);if(k.error)throw k.error;if(b.error)throw b.error;const L=k.data??[],E=b.data??[];i=[...L.map(S=>({...S,code:S.student_code,type:"student",display_info:`รหัส ${S.student_code} · ห้อง ${S.main_room||"—"} · ${S.gender||"ไม่ระบุเพศ"}`})),...E.map(S=>({...S,code:S.teacher_code,type:"teacher",display_info:`รหัสครู ${S.teacher_code} · กลุ่มสาระ ${S.dept||"—"}`}))];const B=document.getElementById("scanner-preview-container"),H=document.getElementById("scanner-preview-cards");if(!i.length){B.classList.add("hidden"),N("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}B.classList.remove("hidden"),H.innerHTML=i.map(S=>`
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
        `).join("")}catch(k){N("ค้นหาล้มเหลว: "+k.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!i.length)return;const c=document.getElementById("btn-confirm-scanner-grant");c.disabled=!0,c.textContent="⏳ กำลังบันทึก...";try{const g=i.filter(b=>b.type==="student").map(b=>b.id),k=i.filter(b=>b.type==="teacher").map(b=>b.code);if(g.length>0){const{error:b}=await ie.from("students").update({can_scan_prayer:!0}).in("id",g);if(b)throw b}if(k.length>0){const b=await Me().catch(()=>({}));let L=C(b.prayerScannerTeachers);k.forEach(E=>{L.includes(E)||L.push(E)}),await Ee("prayerScannerTeachers",L.join(","))}N(`มอบสิทธิ์สำเร็จ ${i.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),i=[],y()}catch(g){N("บันทึกไม่สำเร็จ: "+g.message,"error")}finally{c.disabled=!1,c.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),y()},f=i=>{s&&(clearInterval(s),s=null),document.querySelectorAll("[data-tab]").forEach(j=>{j.className=j.dataset.tab===i?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),i==="scores"?d():i==="history"?u():i==="scanners"?h():m()};document.getElementById("pr-tab-scores").addEventListener("click",()=>f("scores")),($=document.getElementById("pr-tab-history"))==null||$.addEventListener("click",()=>f("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>f("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>f("config")),r&&((x=document.getElementById("pr-tab-scanner-cam"))==null||x.addEventListener("click",async()=>{const{renderStudentPrayerScanner:i}=await Se(async()=>{const{renderStudentPrayerScanner:j}=await import("./student-views-Wi1nWdWa.js");return{renderStudentPrayerScanner:j}},__vite__mapDeps([41,6,0,1,2,3,4,14,42,16,29,43,21,17,30,10,12,39,15]));i(t)})),f("scores")}function Es(e,s,t,n){var p;(p=document.getElementById("rsa-modal"))==null||p.remove();const l=!!e,o=document.createElement("div");o.id="rsa-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#rsa-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#rsa-form").addEventListener("submit",async r=>{r.preventDefault();const d=o.querySelector("#rsa-save");d.disabled=!0,d.textContent="กำลังบันทึก...";try{const u={name:o.querySelector("#rsa-name").value.trim(),max_score:parseInt(o.querySelector("#rsa-max").value)||20,sort_order:parseInt(o.querySelector("#rsa-order").value)||0,sheet_col:o.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:s,semester:t};l?await ao(e.id,u):await so(u),N("บันทึกสำเร็จ","success"),o.remove(),n()}catch(u){N("บันทึกไม่สำเร็จ: "+fe(u),"error"),d.disabled=!1,d.textContent=l?"บันทึก":"เพิ่ม"}})}async function qr(){var p,r,d,u;Le("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let e=null,s="",t=null;try{const{data:a}=await ie.auth.getSession();if(e=((r=(p=a==null?void 0:a.session)==null?void 0:p.user)==null?void 0:r.id)??null,s=((u=(d=a==null?void 0:a.session)==null?void 0:d.user)==null?void 0:u.email)??"",e){const{data:m}=await ie.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",e).maybeSingle();t=m??null}}catch{}const n="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";_e(`<div class="max-w-lg mx-auto animate-fade">

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
  </div>`);const l=(a,m,h)=>{const f=document.getElementById(a);f.className=`text-xs text-center mt-2 py-2 rounded-lg ${h?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,f.textContent=m,f.classList.remove("hidden"),setTimeout(()=>f.classList.add("hidden"),3500)},o=async a=>{const{data:m,error:h}=await ie.rpc("upsert_admin_teacher_profile",{p_profile_id:e,p_full_name:a.full_name??null,p_username:a.username??null,p_login_email:a.login_email??null});if(h)throw h;return m};document.getElementById("btn-save-name").addEventListener("click",async()=>{const a=document.getElementById("btn-save-name"),m=document.getElementById("adm-name").value.trim();if(!m){l("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({full_name:m,login_email:s}),l("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const h=document.getElementById("user-name");h&&(h.textContent=m)}catch(h){l("name-msg","บันทึกไม่สำเร็จ: "+fe(h),!1)}finally{a.disabled=!1,a.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var f,v;const a=document.getElementById("btn-save-username"),m=document.getElementById("adm-username").value.trim().toLowerCase(),h=/^[a-z0-9._-]{3,32}$/.test(m);if(!m){l("username-msg","กรุณากรอก username",!1);return}if(!h){l("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}a.disabled=!0,a.textContent="กำลังบันทึก...";try{await o({username:m,login_email:s}),l("username-msg",`บันทึก username "${m}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=m}catch(w){const $=(f=w.message)!=null&&f.includes("unique")||(v=w.message)!=null&&v.includes("duplicate")?`username "${m}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+fe(w);l("username-msg",$,!1)}finally{a.disabled=!1,a.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",a=>{const m=a.target.selectionStart;a.target.value=a.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),a.target.setSelectionRange(m,m)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const a=document.getElementById("btn-save-email"),m=document.getElementById("adm-email").value.trim();if(!m||!m.includes("@")){l("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}a.disabled=!0,a.textContent="กำลังส่งลิงก์...";try{const{error:h}=await ie.auth.updateUser({email:m});if(h)throw h;l("email-msg","ส่งลิงก์ยืนยันไปที่ "+m+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(h){l("email-msg","ไม่สำเร็จ: "+fe(h),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const a=document.getElementById("btn-save-pw"),m=document.getElementById("adm-pw").value,h=document.getElementById("adm-pw2").value;if(!m||m.length<6){l("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(m!==h){l("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}a.disabled=!0,a.textContent="กำลังเปลี่ยน...";try{const{error:f}=await ie.auth.updateUser({password:m});if(f)throw f;l("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(f){l("pw-msg","ไม่สำเร็จ: "+fe(f),!1)}finally{a.disabled=!1,a.textContent="เปลี่ยนรหัสผ่าน"}})}async function Ar(){var p;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>{document.querySelectorAll("[data-nav]").forEach(d=>{const u=d.dataset.nav===r;d.classList.toggle("bg-indigo-800",u),d.classList.toggle("text-white",u),d.classList.toggle("text-indigo-200",!u)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const n=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),l=(r,d,u,a)=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${r} ${d}</p>
      <p id="${u}-today" class="text-3xl font-extrabold ${a}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${u}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${u}-total" class="font-bold text-gray-600">—</span>
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
  </div>`);const o=async()=>{try{const r=await wo();document.getElementById("stat-teacher-today").textContent=r.teacherToday,document.getElementById("stat-teacher-month").textContent=r.teacherMonth,document.getElementById("stat-teacher-total").textContent=r.teacherTotal,document.getElementById("stat-student-today").textContent=r.studentToday,document.getElementById("stat-student-month").textContent=r.studentMonth,document.getElementById("stat-student-total").textContent=r.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{N("โหลดสถิติไม่สำเร็จ","error")}};await o(),(p=document.getElementById("stat-refresh"))==null||p.addEventListener("click",o)}async function Mr(){var p;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav===r),d.classList.toggle("text-white",d.dataset.nav===r),d.classList.toggle("text-indigo-200",d.dataset.nav!==r)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const t=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],n=async()=>{const r=await es(),d=t.map(a=>({building:a,rooms:r.filter(m=>m.building===a)}));[...new Set(r.map(a=>a.building).filter(a=>!t.includes(a)))].forEach(a=>d.push({building:a,rooms:r.filter(m=>m.building===a)})),document.getElementById("crm-content").innerHTML=d.filter(a=>a.rooms.length>0).map(a=>`
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
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(a=>{a.addEventListener("click",()=>o(null,a.dataset.building,r))}),document.querySelectorAll(".crm-edit-btn").forEach(a=>{const m=r.find(h=>h.id===parseInt(a.dataset.id));m&&a.addEventListener("click",()=>o(m,m.building,r))}),document.querySelectorAll(".crm-del-btn").forEach(a=>{a.addEventListener("click",()=>{const m=r.find(h=>h.id===parseInt(a.dataset.id));l(m)})})},l=r=>{var u;(u=document.getElementById("crm-confirm"))==null||u.remove();const d=document.createElement("div");d.id="crm-confirm",d.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",d.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${r==null?void 0:r.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${r==null?void 0:r.building}${r!=null&&r.name?" · "+r.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(d),d.querySelector("#crm-conf-no").addEventListener("click",()=>d.remove()),d.querySelector("#crm-conf-yes").addEventListener("click",async()=>{d.remove();try{await Wn(r.id),N("ลบห้องแล้ว ✅","success"),n()}catch(a){N("ลบไม่สำเร็จ: "+fe(a),"error")}})},o=(r,d,u)=>{var h;(h=document.getElementById("crm-modal"))==null||h.remove();const a=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...u.map(f=>f.building)])],m=document.createElement("div");m.id="crm-modal",m.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
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
    </div>`,document.body.appendChild(m),m.querySelector("#crm-cancel").addEventListener("click",()=>m.remove()),m.querySelector("#crm-save").addEventListener("click",async()=>{const f=m.querySelector("#crm-save"),v=m.querySelector("#crm-building").value,w=m.querySelector("#crm-number").value.trim(),$=m.querySelector("#crm-name").value.trim()||null,x=m.querySelector("#crm-teaching").checked;if(!v||!w){N("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}f.disabled=!0,f.textContent="⏳";try{r?await Dn(r.id,{building:v,room_number:w,name:$,is_teaching_room:x}):await Hn({building:v,room_number:w,name:$,is_teaching_room:x}),N(r?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),m.remove(),n()}catch(i){N("บันทึกไม่สำเร็จ: "+fe(i),"error"),f.disabled=!1,f.textContent="บันทึก"}})};e(`<div class="max-w-3xl mx-auto animate-fade">
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
  </div>`),await n(),(p=document.getElementById("crm-add-new"))==null||p.addEventListener("click",async()=>{const r=await es().catch(()=>[]);o(null,"อาคาร 1",r)})}const bi=(e,s=[])=>[1,2,3,4,5,6,7,8,9].map(t=>{const n=s.includes(t);return`<button type="button" data-period="${t}"
      class="${e}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${n?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-400"}">${t}</button>`}).join(""),Qa=(e,s,t="",n=[])=>`
  <div class="${e}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${e}-session-label text-xs font-semibold text-violet-700">วันที่ ${s+1}</span>
      <button type="button" class="${e}-session-remove ${s===0?"hidden":""} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${e}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${t}"/>
    <div class="flex flex-wrap gap-1.5 ${e}-session-pills">${bi(e,n)}</div>
  </div>`;function Nr(e,s){const t=e.querySelector(`#${s}-sessions-list`),n=()=>{t.querySelectorAll(`.${s}-session-pill`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{const p=o.classList.contains("bg-violet-600");o.className=`${s}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${p?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),t.querySelectorAll(`.${s}-session-remove`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{o.closest(`.${s}-session`).remove(),l()})})},l=()=>{const o=[...t.querySelectorAll(`.${s}-session`)];o.forEach((p,r)=>{p.querySelector(`.${s}-session-label`).textContent=`วันที่ ${r+1}`,p.querySelector(`.${s}-session-remove`).classList.toggle("hidden",o.length<=1)}),n()};e.querySelector(`#${s}-add-session`).addEventListener("click",()=>{const o=t.querySelectorAll(`.${s}-session`).length,p=document.createElement("div");p.innerHTML=Qa(s,o),t.appendChild(p.firstElementChild),l()}),n()}function Dr(e,s){return[...e.querySelectorAll(`.${s}-session`)].map(t=>({date:t.querySelector(`.${s}-session-date`).value,periods:[...t.querySelectorAll(`.${s}-session-pill.bg-violet-600`)].map(n=>parseInt(n.dataset.period))}))}const yi={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},Hr=e=>yi[e]??"",Rr=e=>{var t,n;const s=(((t=e.target_teacher_ids)==null?void 0:t.length)??0)+(((n=e.target_student_ids)==null?void 0:n.length)??0);return s?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${s} คน</span>`:""};async function Or(e,s,t="all"){try{const n=t==="teacher"?["all_teachers"]:t==="student"?["all_students"]:t==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(n.map(l=>ie.functions.invoke("send-push",{body:{title:`📢 ${e}`,body:(s??"").slice(0,150),url:l==="all_students"?"student.html":"teacher.html",target:l}})))}catch{}}let Ca=null;function Pr(){return Ca||(Ca=Promise.all([He(),St()]).then(([e,s])=>({teachers:e,students:s})).catch(()=>({teachers:[],students:[]}))),Ca}async function zr(){var p;Le("announcements"),document.getElementById("page-title").textContent="ประกาศ";const e=r=>String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=r=>new Date(r).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});_e(`<div class="animate-fade">
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
  </div>`);const t=async()=>{const r=document.getElementById("ann-list");if(!r)return;let d;try{d=await Ns()}catch{r.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!d.length){r.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const u={};try{(await Lo(d.map(m=>m.id))).forEach(m=>{u[m.announcement_id]=(u[m.announcement_id]??0)+1})}catch{}r.innerHTML=d.map(a=>{var m,h;return`
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
              ${Hr(a.audience)}
              ${Rr(a)}
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
              ${(h=a.teachers)!=null&&h.full_name?` · 📝 ${e(a.teachers.full_name)}`:" · ⚙️ แอดมิน"}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${a.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${a.id}" data-title="${e(a.title)}">💬 ${u[a.id]??0} ความคิดเห็น</button>
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
      </div>`}).join(""),r.querySelectorAll(".ann-toggle-btn").forEach(a=>{a.addEventListener("click",async()=>{const m=Number(a.dataset.id),h=a.dataset.active==="true";a.disabled=!0,a.textContent="...";try{await ga(m,{isActive:!h}),await t()}catch{N("บันทึกไม่สำเร็จ","error"),a.disabled=!1}})}),r.querySelectorAll(".ann-edit-btn").forEach(a=>{a.addEventListener("click",()=>{const m=d.find(h=>h.id===Number(a.dataset.id));m&&o(m,t)})}),r.querySelectorAll(".ann-del-btn").forEach(a=>{a.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${a.dataset.title}" ?`)){a.disabled=!0;try{await Co(Number(a.dataset.id)),await t()}catch{N("ลบไม่สำเร็จ","error"),a.disabled=!1}}})}),r.querySelectorAll(".ann-rsvp-list-btn").forEach(a=>{a.addEventListener("click",async()=>l(Number(a.dataset.id),a.dataset.title))}),r.querySelectorAll(".ann-comments-view-btn").forEach(a=>{a.addEventListener("click",async()=>n(Number(a.dataset.id),a.dataset.title,t))})},n=async(r,d,u)=>{const a=await Do(r).catch(()=>[]),m=f=>new Date(f).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",h.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${e(d)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${a.length?a.map(f=>{var v,w;return`
            <div class="flex items-start gap-2" data-comment-id="${f.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${e((((v=f.teachers)==null?void 0:v.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${e(((w=f.teachers)==null?void 0:w.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${f.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${e(f.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${m(f.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(h),h.querySelector("#comments-list-close").onclick=()=>h.remove(),h.addEventListener("click",f=>{f.target===h&&h.remove()}),h.querySelectorAll(".comment-del-btn").forEach(f=>{f.addEventListener("click",async()=>{var v;if(confirm("ลบความคิดเห็นนี้?"))try{await Ho(Number(f.dataset.id)),(v=h.querySelector(`[data-comment-id="${f.dataset.id}"]`))==null||v.remove(),await(u==null?void 0:u())}catch(w){N("ลบไม่สำเร็จ: "+fe(w),"error")}})})},l=async(r,d)=>{const{getAnnouncementRsvps:u}=await Se(async()=>{const{getAnnouncementRsvps:w}=await import("./api-Bf4Tf4Cp.js");return{getAnnouncementRsvps:w}},__vite__mapDeps([0,1,2,3,4])),a=await u(r).catch(()=>[]),m={yes:[],maybe:[],no:[]};a.forEach(w=>{m[w.response]&&m[w.response].push(w)});const h=w=>{var $,x;return`<li class="text-sm text-gray-700">${e((($=w.teachers)==null?void 0:$.full_name)??"?")} <span class="text-xs text-gray-400">${((x=w.teachers)==null?void 0:x.dept)??""}</span></li>`},f=(w,$,x,i)=>m[w].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${i} mb-1.5">${$} ${x} (${m[w].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${m[w].map(h).join("")}</ul>
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
      </div>`,document.body.appendChild(v),v.querySelector("#rsvp-list-close").onclick=()=>v.remove(),v.addEventListener("click",w=>{w.target===v&&v.remove()})},o=(r,d)=>{var q;(q=document.getElementById("ann-modal"))==null||q.remove();const u=document.createElement("div");u.id="ann-modal",u.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const a=!!(r!=null&&r.id);u.innerHTML=`
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
                ${Qa("ann",0,(r==null?void 0:r.event_date)??"",(r==null?void 0:r.event_periods)??[])}
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
      </div>`,document.body.appendChild(u);const m=()=>u.remove();u.querySelector("#ann-modal-close").onclick=m,u.querySelector("#ann-modal-cancel").onclick=m,u.addEventListener("click",y=>{y.target===u&&m()});let h=null,f=null;Pr().then(({teachers:y,students:c})=>{document.body.contains(u)&&(h=Oa({wrap:u.querySelector("#ann-target-teachers-wrap"),chipsWrap:u.querySelector("#ann-target-teachers-chips"),teachers:y,value:(r==null?void 0:r.target_teacher_ids)??[]}),f=js({wrap:u.querySelector("#ann-target-students-wrap"),chipsWrap:u.querySelector("#ann-target-students-chips"),students:c,value:(r==null?void 0:r.target_student_ids)??[]}))});const v=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],w=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],$=(y,c)=>{const g=document.createElement("div");g.className="mt-1.5 hidden",g.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${c.map(k=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${k}">${k}</button>`).join("")}
        </div>`,y.parentNode.appendChild(g),y.addEventListener("focus",()=>g.classList.remove("hidden")),y.addEventListener("blur",()=>setTimeout(()=>g.classList.add("hidden"),150)),g.querySelectorAll(".ann-chip").forEach(k=>{k.addEventListener("mousedown",b=>b.preventDefault()),k.addEventListener("click",()=>{y.value.trim()?y.value+=(y.tagName==="TEXTAREA"?`
`:" ")+k.dataset.val:y.value=k.dataset.val,y.focus()})})};$(u.querySelector("#ann-title"),v),$(u.querySelector("#ann-body"),w);let x=(r==null?void 0:r.file_url)??null;const i=u.querySelector("#ann-image-status"),j=u.querySelector("#ann-image-preview"),_=u.querySelector("#ann-image-preview-img");u.querySelector("#ann-image-file").addEventListener("change",async y=>{var g;const c=(g=y.target.files)==null?void 0:g[0];if(c){i.textContent="กำลังอัปโหลด...";try{x=await Us(c),_.src=x,j.classList.remove("hidden"),i.textContent="อัปโหลดสำเร็จ ✅"}catch(k){i.textContent="อัปโหลดไม่สำเร็จ: "+fe(k)}y.target.value=""}}),u.querySelector("#ann-image-remove").addEventListener("click",()=>{x=null,j.classList.add("hidden"),i.textContent=""});let C=[];u.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const y=u.querySelector("#ann-cal-picker");if(!y.classList.contains("hidden")){y.classList.add("hidden");return}y.classList.remove("hidden");const c=u.querySelector("#ann-cal-event-sel");if(c.options.length<=1)try{const{getWorkCalendarEvents:g,getSystemConfig:k}=await Se(async()=>{const{getWorkCalendarEvents:B,getSystemConfig:H}=await import("./api-Bf4Tf4Cp.js");return{getWorkCalendarEvents:B,getSystemConfig:H}},__vite__mapDeps([0,1,2,3,4]));let b=new Date().getFullYear()+543,L=1;try{const B=await k();b=B.academicYear??B.academic_year??b,L=B.semester??L}catch{}C=await g(b,L);const E={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};C.forEach(B=>{const H=document.createElement("option");H.value=B.id;const S=B.event_type==="inspection"&&B.round_number?` ครั้งที่ ${B.round_number}`:"",I=new Date(B.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});H.textContent=`${E[B.event_type]??"📌"}${S} ${B.label} (${I})`,c.appendChild(H)})}catch(g){c.innerHTML=`<option>โหลดไม่สำเร็จ: ${g.message}</option>`}}),u.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const y=+u.querySelector("#ann-cal-event-sel").value,c=C.find(E=>E.id===y),g=u.querySelector("#ann-cal-preview"),k=u.querySelector("#ann-cal-fill");if(!c){g.classList.add("hidden"),k.classList.add("hidden");return}const b=(c.work_calendar_items||[]).sort((E,B)=>E.sort_order-B.sort_order),L=new Date(c.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});g.innerHTML=`<p class="font-semibold">${c.label}</p>
        <p class="text-indigo-600">📅 ${L}${c.event_type==="inspection"&&c.round_number?` · ครั้งที่ ${c.round_number}`:""}</p>
        ${c.description?`<p>${c.description}</p>`:""}
        ${b.length?`<ul class="mt-1 space-y-0.5">${b.map(E=>`<li>☑ ${E.item_label}</li>`).join("")}</ul>`:""}`,g.classList.remove("hidden"),k.classList.remove("hidden")}),u.querySelector("#ann-cal-fill").addEventListener("click",()=>{const y=+u.querySelector("#ann-cal-event-sel").value,c=C.find(E=>E.id===y);if(!c)return;const g=(c.work_calendar_items||[]).sort((E,B)=>E.sort_order-B.sort_order),k=new Date(c.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),b=c.event_type==="inspection"&&c.round_number?` ครั้งที่ ${c.round_number}`:"";u.querySelector("#ann-title").value=c.label+(b?` (${b.trim()})`:"");const L=[];c.description&&L.push(c.description),g.length&&(L.push("สิ่งที่ต้องเตรียม:"),g.forEach(E=>L.push(`• ${E.item_label}`))),L.push(`กำหนดวันที่: ${k}`),u.querySelector("#ann-body").value=L.join(`
`),c.event_date&&(u.querySelector("#ann-due").value=c.event_date),u.querySelector("#ann-cal-picker").classList.add("hidden")}),u.querySelectorAll(".ann-type-btn").forEach(y=>{y.addEventListener("click",()=>{const c=y.dataset.type;u.querySelectorAll(".ann-type-btn").forEach(g=>{const k=g.dataset.type==="training";g.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${g.dataset.type===c?k?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":k?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),u.querySelector("#ann-training-fields").classList.toggle("hidden",c!=="training")})});const T=y=>y==="teacher"?"bg-sky-600 text-white border-sky-600":y==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",D=y=>y==="teacher"?"hover:border-sky-300":y==="student"?"hover:border-teal-300":"hover:border-indigo-300";u.querySelectorAll(".ann-audience-btn").forEach(y=>{y.addEventListener("click",()=>{u.querySelectorAll(".ann-audience-btn").forEach(c=>{c.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${c.dataset.audience===y.dataset.audience?T(c.dataset.audience):`bg-white text-gray-600 border-gray-200 ${D(c.dataset.audience)}`}`})})}),Nr(u,"ann"),u.querySelectorAll(".ann-filter-btn").forEach(y=>{y.addEventListener("click",()=>{u.querySelectorAll(".ann-filter-btn").forEach(c=>{c.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${c.dataset.filter===y.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),u.querySelector("#ann-modal-save").addEventListener("click",async()=>{var U,z;const y=u.querySelector("#ann-title").value.trim();if(!y){N("กรุณากรอกหัวข้อ","warning");return}const c=u.querySelector("#ann-body").value.trim()||null,g=u.querySelector("#ann-active-toggle").dataset.on==="true",k=u.querySelector("#ann-pin").dataset.on==="true"?1:0,b=u.querySelector("#ann-ack").dataset.on==="true",L=u.querySelector("#ann-due").value||null,E=u.querySelector(".ann-type-btn.bg-violet-600")||(r==null?void 0:r.ann_type)==="training"?"training":"general",B=((U=u.querySelector(".ann-audience-btn.text-white"))==null?void 0:U.dataset.audience)??(r==null?void 0:r.audience)??"all",H=u.querySelector("#ann-video-url").value.trim()||null,S=E==="training"&&u.querySelector("#ann-event-location").value.trim()||null,I=((z=u.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:z.dataset.filter)??(r==null?void 0:r.schedule_filter)??"all",R=(h==null?void 0:h.getValue())??(r==null?void 0:r.target_teacher_ids)??[],F=(f==null?void 0:f.getValue())??(r==null?void 0:r.target_student_ids)??[];if(E==="training"){if(!S){N("กรุณาระบุสถานที่","warning");return}const O=Dr(u,"ann");for(const Y of O){if(!Y.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!Y.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const W=u.querySelector("#ann-modal-save");W.disabled=!0,W.textContent="กำลังบันทึก...";try{a?await ga(r.id,{title:y,body:c,isActive:g,priority:k,requiresAck:b,dueDate:L,annType:E,eventDate:O[0].date,eventPeriods:O[0].periods,eventLocation:S,scheduleFilter:I,fileUrl:x,videoUrl:H,audience:B,targetTeacherIds:R,targetStudentIds:F}):O.length>1?(await Promise.all(O.map(Y=>ba({title:y,body:c,isActive:g,priority:k,requiresAck:b,dueDate:L,annType:E,eventDate:Y.date,eventPeriods:Y.periods,eventLocation:S,scheduleFilter:I,fileUrl:x,videoUrl:H,audience:B,targetTeacherIds:R,targetStudentIds:F}))),N(`สร้าง ${O.length} ประกาศสำเร็จ ✅`,"success")):(await ba({title:y,body:c,isActive:g,priority:k,requiresAck:b,dueDate:L,annType:E,eventDate:O[0].date,eventPeriods:O[0].periods,eventLocation:S,scheduleFilter:I,fileUrl:x,videoUrl:H,audience:B,targetTeacherIds:R,targetStudentIds:F}),N("บันทึกสำเร็จ ✅","success")),m(),await d()}catch(Y){N("บันทึกไม่สำเร็จ: "+fe(Y),"error"),W.disabled=!1,W.textContent="บันทึก"}return}const A=u.querySelector("#ann-modal-save");A.disabled=!0,A.textContent="กำลังบันทึก...";try{a?await ga(r.id,{title:y,body:c,isActive:g,priority:k,requiresAck:b,dueDate:L,annType:E,fileUrl:x,videoUrl:H,audience:B,targetTeacherIds:R,targetStudentIds:F}):await ba({title:y,body:c,isActive:g,priority:k,requiresAck:b,dueDate:L,annType:E,fileUrl:x,videoUrl:H,audience:B,targetTeacherIds:R,targetStudentIds:F}),!a&&g&&Or(y,c,B),N("บันทึกสำเร็จ ✅","success"),m(),await d()}catch(O){N("บันทึกไม่สำเร็จ: "+fe(O),"error"),A.disabled=!1,A.textContent="บันทึก"}})};(p=document.getElementById("ann-create-btn"))==null||p.addEventListener("click",()=>o(null,t)),await t()}async function Fr(){Le("autoscale-history"),document.getElementById("page-title").textContent="ประวัติปรับกำลังเครื่องอัตโนมัติ";const e=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=o=>new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),t=o=>o.includes("🔴")?{label:"ล้มเหลว",cls:"bg-red-100 text-red-700"}:o.includes("⚠️")?{label:"อัปเกรด",cls:"bg-amber-100 text-amber-700"}:o.includes("✅")?{label:"ลดระดับ",cls:"bg-emerald-100 text-emerald-700"}:o.includes("🧪")?{label:"ทดสอบ",cls:"bg-gray-100 text-gray-600"}:{label:"เหตุการณ์",cls:"bg-gray-100 text-gray-600"};_e(`<div class="animate-fade">
    <p class="text-xs text-gray-400 mb-6">บันทึกอัตโนมัติทุกครั้งที่ระบบปรับขนาด compute (Micro ↔ Medium) แยกจากหน้าประกาศทั่วไป</p>
    <div id="autoscale-history-wrap" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const n=document.getElementById("autoscale-history-wrap");let l;try{l=(await Ns()).filter(o=>o.ann_type==="system")}catch{n.innerHTML='<p class="text-red-400 text-sm p-6">โหลดไม่สำเร็จ</p>';return}if(!l.length){n.innerHTML=`<div class="p-16 text-center text-gray-400">
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
          ${l.map(o=>{const p=t(o.title||"");return`<tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 align-top">
              <td class="px-5 py-3.5 whitespace-nowrap text-gray-500 font-mono text-xs">${s(o.created_at)}</td>
              <td class="px-5 py-3.5 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${p.cls}">${p.label}</span>
              </td>
              <td class="px-5 py-3.5 text-gray-700">${e(o.body||o.title||"")}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`}const fi={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},hi=e=>fi[e]??"แอดมิน",vi=e=>e?e.startsWith("academic")?"bg-blue-100 text-blue-700":e.startsWith("registrar")?"bg-violet-100 text-violet-700":e==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function wi(e,s=!1){var w,$;const{getMyAnnouncements:t,createAnnouncement:n,updateAnnouncement:l,deleteAnnouncement:o,getAckStats:p,getAnnouncementCommentsBulk:r,getAnnouncementComments:d,deleteAnnouncementComment:u}=await Se(async()=>{const{getMyAnnouncements:x,createAnnouncement:i,updateAnnouncement:j,deleteAnnouncement:_,getAckStats:C,getAnnouncementCommentsBulk:T,getAnnouncementComments:D,deleteAnnouncementComment:q}=await import("./api-Bf4Tf4Cp.js");return{getMyAnnouncements:x,createAnnouncement:i,updateAnnouncement:j,deleteAnnouncement:_,getAckStats:C,getAnnouncementCommentsBulk:T,getAnnouncementComments:D,deleteAnnouncementComment:q}},__vite__mapDeps([0,1,2,3,4])),a=((w=e==null?void 0:e.positions)!=null&&w.length?e.positions[0]:e==null?void 0:e.position)??null;Le("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const m=x=>String(x??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),h=x=>new Date(x).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});_e(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${vi(a)}">${hi(a)}</span>
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
  </div>`);const f=async()=>{const x=document.getElementById("sann-list");if(!x)return;let i;try{i=await t(e.id)}catch{x.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!i.length){x.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const j=T=>T?new Date(T).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",_=T=>{if(!T)return"";const D=Math.ceil((new Date(T)-new Date)/864e5);return D<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${j(T)}</span>`:D<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${j(T)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${j(T)}</span>`},C={};try{(await r(i.map(D=>D.id))).forEach(D=>{C[D.announcement_id]=(C[D.announcement_id]??0)+1})}catch{}x.innerHTML=i.map(T=>`
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
              ${Hr(T.audience)}
              ${Rr(T)}
              ${T.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${_(T.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${m(T.title)}</h3>
            ${T.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${m(T.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${h(T.created_at)}</p>
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
      </div>`).join(""),x.querySelectorAll(".sann-stat-btn").forEach(T=>{T.addEventListener("click",async()=>{const D=Number(T.dataset.id),q=T.dataset.title,y=document.getElementById("sann-stat-modal");y&&y.remove();const c=document.createElement("div");c.id="sann-stat-modal",c.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",c.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${m(q)}</p>
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
          </div>`,document.body.appendChild(c),c.querySelector("#sann-stat-close").onclick=()=>c.remove(),c.addEventListener("click",g=>{g.target===c&&c.remove()});try{const{acked:g,pending:k}=await p(D),b=c.querySelector("#sann-stat-body"),L=E=>new Date(E).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});b.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${g.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${k.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${g.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${g.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${g.map(E=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${m(E.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${L(E.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${k.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${k.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${k.map(E=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${m(E.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{c.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),x.querySelectorAll(".sann-rsvp-list-btn").forEach(T=>{T.addEventListener("click",async()=>{const{getAnnouncementRsvps:D}=await Se(async()=>{const{getAnnouncementRsvps:L}=await import("./api-Bf4Tf4Cp.js");return{getAnnouncementRsvps:L}},__vite__mapDeps([0,1,2,3,4])),q=await D(Number(T.dataset.id)).catch(()=>[]),y=T.dataset.title,c={yes:[],maybe:[],no:[],none:[]};q.forEach(L=>(c[L.response]??c.none).push(L));const g=L=>{var E,B;return`<li class="text-sm text-gray-700">${m(((E=L.teachers)==null?void 0:E.full_name)??"?")} <span class="text-xs text-gray-400">${((B=L.teachers)==null?void 0:B.dept)??""}</span></li>`},k=(L,E,B,H)=>c[L].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${H} mb-1">${E} ${B} (${c[L].length})</p>
            <ul class="space-y-0.5 pl-3">${c[L].map(g).join("")}</ul>
          </div>`:"",b=document.createElement("div");b.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",b.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${y}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${q.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${k("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${k("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${k("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(b),b.querySelector("#rsvp-list-close").onclick=()=>b.remove(),b.addEventListener("click",L=>{L.target===b&&b.remove()})})}),x.querySelectorAll(".ann-comments-view-btn").forEach(T=>{T.addEventListener("click",async()=>{const D=Number(T.dataset.id),q=T.dataset.title,y=await d(D).catch(()=>[]),c=k=>new Date(k).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),g=document.createElement("div");g.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",g.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${m(q)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${y.length?y.map(k=>{var b,L;return`
                <div class="flex items-start gap-2" data-comment-id="${k.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${m((((b=k.teachers)==null?void 0:b.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${m(((L=k.teachers)==null?void 0:L.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${k.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${m(k.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${c(k.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(g),g.querySelector("#comments-list-close").onclick=()=>g.remove(),g.addEventListener("click",k=>{k.target===g&&g.remove()}),g.querySelectorAll(".comment-del-btn").forEach(k=>{k.addEventListener("click",async()=>{var b;if(confirm("ลบความคิดเห็นนี้?"))try{await u(Number(k.dataset.id)),(b=g.querySelector(`[data-comment-id="${k.dataset.id}"]`))==null||b.remove(),await f()}catch(L){N("ลบไม่สำเร็จ: "+fe(L),"error")}})})})}),x.querySelectorAll(".sann-toggle-btn").forEach(T=>{T.addEventListener("click",async()=>{T.disabled=!0;try{await l(Number(T.dataset.id),{isActive:T.dataset.active!=="true"}),await f()}catch{N("บันทึกไม่สำเร็จ","error"),T.disabled=!1}})}),x.querySelectorAll(".sann-edit-btn").forEach(T=>{T.addEventListener("click",()=>{const D=i.find(q=>q.id===Number(T.dataset.id));D&&v(D)})}),x.querySelectorAll(".sann-del-btn").forEach(T=>{T.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${T.dataset.title}" ?`)){T.disabled=!0;try{await o(Number(T.dataset.id)),await f()}catch{N("ลบไม่สำเร็จ","error"),T.disabled=!1}}})})},v=(x=null)=>{var H;(H=document.getElementById("sann-modal"))==null||H.remove();const i=document.createElement("div");i.id="sann-modal",i.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const j=!!(x!=null&&x.id);i.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${j?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${m((x==null?void 0:x.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${m((x==null?void 0:x.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${x!=null&&x.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${m((x==null?void 0:x.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${m((x==null?void 0:x.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
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
                value="${m((x==null?void 0:x.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${Qa("sann",0,(x==null?void 0:x.event_date)??"",(x==null?void 0:x.event_periods)??[])}
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
      </div>`,document.body.appendChild(i);const _=()=>i.remove();i.querySelector("#sann-modal-close").onclick=_,i.querySelector("#sann-modal-cancel").onclick=_,i.addEventListener("click",S=>{S.target===i&&_()});let C=null,T=null;Pr().then(({teachers:S,students:I})=>{document.body.contains(i)&&(C=Oa({wrap:i.querySelector("#sann-target-teachers-wrap"),chipsWrap:i.querySelector("#sann-target-teachers-chips"),teachers:S,value:(x==null?void 0:x.target_teacher_ids)??[]}),T=js({wrap:i.querySelector("#sann-target-students-wrap"),chipsWrap:i.querySelector("#sann-target-students-chips"),students:I,value:(x==null?void 0:x.target_student_ids)??[]}))});const D=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],q=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],y=(S,I)=>{const R=document.createElement("div");R.className="mt-1.5 hidden",R.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${I.map(F=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${F}">${F}</button>`).join("")}
        </div>`,S.parentNode.appendChild(R),S.addEventListener("focus",()=>R.classList.remove("hidden")),S.addEventListener("blur",()=>setTimeout(()=>R.classList.add("hidden"),150)),R.querySelectorAll(".sann-chip").forEach(F=>{F.addEventListener("mousedown",A=>A.preventDefault()),F.addEventListener("click",()=>{S.value.trim()?S.value+=(S.tagName==="TEXTAREA"?`
`:" ")+F.dataset.val:S.value=F.dataset.val,S.focus()})})};y(i.querySelector("#sann-title"),D),y(i.querySelector("#sann-body"),q);let c=(x==null?void 0:x.file_url)??null;const g=i.querySelector("#sann-image-status"),k=i.querySelector("#sann-image-preview"),b=i.querySelector("#sann-image-preview-img");i.querySelector("#sann-image-file").addEventListener("change",async S=>{var R;const I=(R=S.target.files)==null?void 0:R[0];if(I){g.textContent="กำลังอัปโหลด...";try{c=await Us(I),b.src=c,k.classList.remove("hidden"),g.textContent="อัปโหลดสำเร็จ ✅"}catch(F){g.textContent="อัปโหลดไม่สำเร็จ: "+fe(F)}S.target.value=""}}),i.querySelector("#sann-image-remove").addEventListener("click",()=>{c=null,k.classList.add("hidden"),g.textContent=""});let L=[];i.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const S=i.querySelector("#sann-cal-picker");if(!S.classList.contains("hidden")){S.classList.add("hidden");return}S.classList.remove("hidden");const I=i.querySelector("#sann-cal-event-sel");if(I.options.length<=1)try{const{getWorkCalendarEvents:R,getSystemConfig:F}=await Se(async()=>{const{getWorkCalendarEvents:O,getSystemConfig:W}=await import("./api-Bf4Tf4Cp.js");return{getWorkCalendarEvents:O,getSystemConfig:W}},__vite__mapDeps([0,1,2,3,4]));let A=new Date().getFullYear()+543,U=1;try{const O=await F();A=O.academicYear??O.academic_year??A,U=O.semester??U}catch{}L=await R(A,U);const z={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};L.forEach(O=>{const W=document.createElement("option");W.value=O.id;const Y=O.event_type==="inspection"&&O.round_number?` ครั้งที่ ${O.round_number}`:"",M=new Date(O.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});W.textContent=`${z[O.event_type]??"📌"}${Y} ${O.label} (${M})`,I.appendChild(W)})}catch(R){I.innerHTML=`<option>โหลดไม่สำเร็จ: ${R.message}</option>`}}),i.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const S=+i.querySelector("#sann-cal-event-sel").value,I=L.find(z=>z.id===S),R=i.querySelector("#sann-cal-preview"),F=i.querySelector("#sann-cal-fill");if(!I){R.classList.add("hidden"),F.classList.add("hidden");return}const A=(I.work_calendar_items||[]).sort((z,O)=>z.sort_order-O.sort_order),U=new Date(I.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});R.innerHTML=`<p class="font-semibold">${I.label}</p>
        <p class="text-indigo-600">📅 ${U}${I.event_type==="inspection"&&I.round_number?` · ครั้งที่ ${I.round_number}`:""}</p>
        ${I.description?`<p>${I.description}</p>`:""}
        ${A.length?`<ul class="mt-1 space-y-0.5">${A.map(z=>`<li>☑ ${z.item_label}</li>`).join("")}</ul>`:""}`,R.classList.remove("hidden"),F.classList.remove("hidden")}),i.querySelector("#sann-cal-fill").addEventListener("click",()=>{const S=+i.querySelector("#sann-cal-event-sel").value,I=L.find(z=>z.id===S);if(!I)return;const R=(I.work_calendar_items||[]).sort((z,O)=>z.sort_order-O.sort_order),F=new Date(I.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),A=I.event_type==="inspection"&&I.round_number?` ครั้งที่ ${I.round_number}`:"";i.querySelector("#sann-title").value=I.label+(A?` (${A.trim()})`:"");const U=[];I.description&&U.push(I.description),R.length&&(U.push("สิ่งที่ต้องเตรียม:"),R.forEach(z=>U.push(`• ${z.item_label}`))),U.push(`กำหนดวันที่: ${F}`),i.querySelector("#sann-body").value=U.join(`
`),I.event_date&&(i.querySelector("#sann-due").value=I.event_date),i.querySelector("#sann-cal-picker").classList.add("hidden")}),i.querySelectorAll(".sann-type-btn").forEach(S=>{S.addEventListener("click",()=>{const I=S.dataset.type;i.querySelectorAll(".sann-type-btn").forEach(R=>{const F=R.dataset.type==="training";R.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${R.dataset.type===I?F?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":F?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),i.querySelector("#sann-training-fields").classList.toggle("hidden",I!=="training")})});const E=S=>S==="teacher"?"bg-sky-600 text-white border-sky-600":S==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",B=S=>S==="teacher"?"hover:border-sky-300":S==="student"?"hover:border-teal-300":"hover:border-indigo-300";i.querySelectorAll(".sann-audience-btn").forEach(S=>{S.addEventListener("click",()=>{i.querySelectorAll(".sann-audience-btn").forEach(I=>{I.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${I.dataset.audience===S.dataset.audience?E(I.dataset.audience):`bg-white text-gray-600 border-gray-200 ${B(I.dataset.audience)}`}`})})}),Nr(i,"sann"),i.querySelectorAll(".sann-filter-btn").forEach(S=>{S.addEventListener("click",()=>{i.querySelectorAll(".sann-filter-btn").forEach(I=>{I.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${I.dataset.filter===S.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),i.querySelector("#sann-modal-save").addEventListener("click",async()=>{var Z,se;const S=i.querySelector("#sann-title").value.trim();if(!S){N("กรุณากรอกหัวข้อ","warning");return}const I=i.querySelector("#sann-body").value.trim()||null,R=i.querySelector("#sann-active-toggle").dataset.on==="true",F=i.querySelector("#sann-pin").dataset.on==="true"?1:0,A=i.querySelector("#sann-ack").dataset.on==="true",U=i.querySelector("#sann-due").value||null,z=i.querySelector(".sann-type-btn.bg-violet-600")||(x==null?void 0:x.ann_type)==="training"?"training":"general",O=((Z=i.querySelector(".sann-audience-btn.text-white"))==null?void 0:Z.dataset.audience)??(x==null?void 0:x.audience)??"all",W=i.querySelector("#sann-video-url").value.trim()||null,Y=z==="training"&&i.querySelector("#sann-event-location").value.trim()||null,M=((se=i.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:se.dataset.filter)??(x==null?void 0:x.schedule_filter)??"all",V=(C==null?void 0:C.getValue())??(x==null?void 0:x.target_teacher_ids)??[],K=(T==null?void 0:T.getValue())??(x==null?void 0:x.target_student_ids)??[];if(z==="training"){if(!Y){N("กรุณาระบุสถานที่","warning");return}const ae=Dr(i,"sann");for(const ue of ae){if(!ue.date){N("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!ue.periods.length){N("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const me=i.querySelector("#sann-modal-save");me.disabled=!0,me.textContent="กำลังบันทึก...";try{j?await l(x.id,{title:S,body:I,isActive:R,priority:F,requiresAck:A,dueDate:U,annType:z,eventDate:ae[0].date,eventPeriods:ae[0].periods,eventLocation:Y,scheduleFilter:M,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}):ae.length>1?(await Promise.all(ae.map(ue=>n({title:S,body:I,isActive:R,priority:F,teacherId:e.id,creatorRole:a,requiresAck:A,dueDate:U,annType:z,eventDate:ue.date,eventPeriods:ue.periods,eventLocation:Y,scheduleFilter:M,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}))),N(`สร้าง ${ae.length} ประกาศสำเร็จ ✅`,"success")):(await n({title:S,body:I,isActive:R,priority:F,teacherId:e.id,creatorRole:a,requiresAck:A,dueDate:U,annType:z,eventDate:ae[0].date,eventPeriods:ae[0].periods,eventLocation:Y,scheduleFilter:M,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}),N("บันทึกสำเร็จ ✅","success")),_(),await f()}catch(ue){N("บันทึกไม่สำเร็จ: "+fe(ue),"error");const we=i.querySelector("#sann-modal-save");we.disabled=!1,we.textContent="บันทึก"}return}const Q=i.querySelector("#sann-modal-save");Q.disabled=!0,Q.textContent="กำลังบันทึก...";try{j?await l(x.id,{title:S,body:I,isActive:R,priority:F,requiresAck:A,dueDate:U,annType:z,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}):await n({title:S,body:I,isActive:R,priority:F,teacherId:e.id,creatorRole:a,requiresAck:A,dueDate:U,annType:z,fileUrl:c,videoUrl:W,audience:O,targetTeacherIds:V,targetStudentIds:K}),!j&&R&&Or(S,I,O),N("บันทึกสำเร็จ ✅","success"),_(),await f()}catch(ae){N("บันทึกไม่สำเร็จ: "+fe(ae),"error"),Q.disabled=!1,Q.textContent="บันทึก"}})};($=document.getElementById("sann-create-btn"))==null||$.addEventListener("click",()=>v(null)),await f()}async function Ur(){var l;Le("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const e=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],s=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];s.flatMap(o=>o.features),_e(`<div class="animate-fade">
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
  </div>`);let t={};try{t=await ho()}catch{}const n=(l=document.querySelector("#perm-loading"))==null?void 0:l.closest(".bg-white");n&&(n.innerHTML=`
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
            ${o.features.map(p=>`
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${p.label}</td>
                ${e.map(r=>{var u;const d=((u=t[r.key])==null?void 0:u[p.key])??!1;return`<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${d?"bg-emerald-500":"bg-gray-300"}"
                      data-position="${r.key}" data-feature="${p.key}" data-on="${d}">
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
    </div>`,n.querySelectorAll(".perm-toggle").forEach(o=>{o.addEventListener("click",async()=>{const p=o.dataset.position,r=o.dataset.feature,d=o.dataset.on==="true",u=!d;o.disabled=!0;try{await vo(p,r,u),o.dataset.on=String(u),o.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${u?"bg-emerald-500":"bg-gray-300"}`,o.querySelector("span").style.transform=`translateX(${u?"20":"0"}px)`,t[p]||(t[p]={}),t[p][r]=u,N(`${u?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{N("บันทึกไม่สำเร็จ","error")}o.disabled=!1})}))}async function Vr(){Le("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let e=[],s=[],t=[],n="สามัญ",l="",o="",p="",r="",d="";const u=S=>{if(!S)return null;const I=S.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return I?I[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},a=S=>S?/^(PR|อก\.|อป\.)/i.test(S)?"ศาสนา":/^ปวช\./i.test(S)?"ปวช":"สามัญ":"สามัญ",m={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},h=S=>{const I=S==="ศาสนา";return[...new Set(t.map(R=>I?R.religion_room:R.main_room).filter(Boolean))].filter(R=>a(R)===S).sort((R,F)=>R.localeCompare(F,"th"))},f=S=>{const I=h(S),R=[...new Set(I.map(A=>u(A)).filter(Boolean))],F=m[S]||[];return[...new Set([...F,...R])].sort((A,U)=>A.localeCompare(U,"th"))},v=async()=>{[e,s,t]=await Promise.all([Pn(),He(),St()])},w=(S,I="w-3.5 h-3.5")=>`<span class="inline-block ${I} rounded-full flex-shrink-0" style="background:${S}"></span>`,$=S=>e.find(I=>I.name===S),x=S=>t.filter(I=>I.house_color===S).length,i=()=>t.filter(S=>!S.house_color).length,j=S=>{let I=document.getElementById("hc-print-roster-styles");I||(I=document.createElement("style"),I.id="hc-print-roster-styles",document.head.appendChild(I)),I.textContent=`
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
    `;const R=document.createElement("div");R.id="hc-print-roster-area",document.body.appendChild(R);const F=n==="ศาสนา",A=new Map;S.forEach(O=>{const W=(F?O.religion_room:O.main_room)||"ไม่มีห้องเรียน";A.has(W)||A.set(W,[]),A.get(W).push(O)});const U=Array.from(A.keys()).sort((O,W)=>O.localeCompare(W,"th"));let z="";U.forEach((O,W)=>{const M=A.get(O).sort((Q,Z)=>(Q.student_code||"").localeCompare(Z.student_code||""));let V="ใบรายชื่อนักเรียน";p&&(p==="__none__"?V+=" (ไม่มีสี)":V+=` กลุ่มสี${p}`),V+=` ห้อง ${O}`,r&&(V+=` (${r})`);const K=M.map((Q,Z)=>{const se=$(Q.house_color),ae=se?`<span class="color-badge" style="color: ${se.color_hex}">
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
    `,R.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},R.querySelector("#hc-btn-close-preview").onclick=()=>{R.remove()}},_=()=>s.find(S=>S.position==="house_color_admin"),C=(S,I)=>{const F=(I?e.filter(A=>A.gender===I):e).map(A=>`<option value="${te(A.name)}" ${A.name===S?"selected":""}>สี${te(A.name)}</option>`).join("");return`<option value="" ${S?"":"selected"}>— ไม่มีสี —</option>`+F},T=()=>{const S=d.toLowerCase(),I=n==="ศาสนา";return t.filter(R=>{var A,U;const F=I?R.religion_room:R.main_room;return!(!F||o&&F!==o||l&&!o&&u(F)!==l||!l&&!o&&a(F)!==n||p==="__none__"&&R.house_color||p&&p!=="__none__"&&R.house_color!==p||r&&R.gender!==r||S&&!((A=R.full_name)!=null&&A.toLowerCase().includes(S))&&!((U=R.student_code)!=null&&U.toLowerCase().includes(S))&&!F.toLowerCase().includes(S))})},D=S=>S?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",q=()=>{const S=e.filter(z=>z.gender==="ชาย"),I=e.filter(z=>z.gender==="หญิง"),R=i(),F=z=>{const O=p===z.name,W=x(z.name);return`<button class="${D(O)}" data-color="${te(z.name)}"
               style="${O?`border-color:${z.color_hex};color:${z.color_hex};background:${z.color_hex}18`:`border-color:${z.color_hex}55;color:#374151`}">
        ${w(z.color_hex)} สี${te(z.name)}
        <span class="ml-1 font-bold" style="color:${z.color_hex}">${W}</span>
      </button>`},A=p==="__none__",U=`<button class="${D(A)}" data-color="__none__"
               style="${A?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${R}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${S.map(F).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${I.map(F).join("")}
          ${U}
        </div>
      </div>`},y=()=>{const S=T();if(!S.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const I=n==="ศาสนา";return S.map(R=>{const F=$(R.house_color),A=F?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${F.color_hex}">
             ${w(F.color_hex,"w-2.5 h-2.5")} ${te(R.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',U=F?`background:${F.color_hex}12`:"",z=I?R.religion_room:R.main_room,O=R.image_url?`<img src="${R.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
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
        <td class="px-4 py-2.5">${A}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${R.id}" data-current="${te(R.house_color??"")}">
            ${C(R.house_color,R.gender)}
          </select>
        </td>
      </tr>`}).join("")},c=()=>{const S=_(),I=T().length;_e(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${S?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${te(S.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${t.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${i()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${q()}
        ${p?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':""}
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
          <tbody id="hc-tbody">${y()}</tbody>
        </table>
      </div>
    </div>`),H()},g=()=>{const S=document.getElementById("hc-tbody");S&&(S.innerHTML=y()),L();const I=T().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(A=>{A.textContent.includes("พบ")&&(A.innerHTML=`พบ <b class="text-gray-700">${I}</b> คน`)});const R=document.getElementById("hc-print-roster-btn");R&&(R.disabled=I===0,R.textContent=`🖨️ พิมพ์ใบรายชื่อ (${I})`);const F=document.getElementById("hc-clear-colors-btn");F&&(F.disabled=I===0,F.textContent=`🗑️ ล้างสี (${I})`)},k=()=>{var I;const S=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");S&&(S.innerHTML=q()+(p?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),b(),(I=document.getElementById("hc-clear-filter"))==null||I.addEventListener("click",()=>{p="",k(),g()})},b=()=>{document.querySelectorAll(".hc-chip").forEach(S=>{S.addEventListener("click",()=>{const I=S.dataset.color;p=p===I?"":I,k(),g()})})},L=()=>{document.querySelectorAll(".hc-color-sel").forEach(S=>{S.addEventListener("change",async()=>{const I=S.dataset.sid,R=S.dataset.current,F=S.value||null;S.disabled=!0;try{await ts([I],F);const A=t.find(W=>String(W.id)===String(I));A&&(A.house_color=F),S.dataset.current=F??"";const U=S.closest("tr"),z=U==null?void 0:U.children[4];if(z){const W=$(F);z.innerHTML=W?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${W.color_hex}">
                   ${w(W.color_hex,"w-2.5 h-2.5")} ${te(F)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const O=$(F);U&&(U.style.background=O?`${O.color_hex}12`:""),S.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>S.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),k()}catch{N("บันทึกไม่สำเร็จ","error"),S.value=R??""}S.disabled=!1})})},E=()=>{const S=document.getElementById("hc-filter-category"),I=document.getElementById("hc-filter-level");if(!S||!I)return;n=S.value;const R=f(n);I.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${R.map(F=>`<option value="${F}" ${F===l?"selected":""}>${F}</option>`).join("")}
    `,B()},B=()=>{const S=document.getElementById("hc-filter-level"),I=document.getElementById("hc-filter-class");if(!S||!I)return;l=S.value;const F=h(n).filter(A=>l?u(A)===l:!0);I.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${F.length} ห้อง) --</option>
      ${F.map(A=>`
        <option value="${A}" ${A===o?"selected":""}>${A}</option>
      `).join("")}
    `},H=()=>{var S,I,R,F,A,U,z,O;b(),L(),(S=document.getElementById("hc-clear-filter"))==null||S.addEventListener("click",()=>{p="",k(),g()}),(I=document.getElementById("hc-search"))==null||I.addEventListener("input",W=>{d=W.target.value,g()}),(R=document.getElementById("hc-filter-gender"))==null||R.addEventListener("change",W=>{r=W.target.value,g()}),(F=document.getElementById("hc-filter-category"))==null||F.addEventListener("change",W=>{n=W.target.value,l="",o="",E(),g()}),(A=document.getElementById("hc-filter-level"))==null||A.addEventListener("change",W=>{l=W.target.value,o="",B(),g()}),(U=document.getElementById("hc-filter-class"))==null||U.addEventListener("change",W=>{o=W.target.value,g()}),(z=document.getElementById("hc-print-roster-btn"))==null||z.addEventListener("click",()=>{const W=T();W.length>0&&j(W)}),(O=document.getElementById("hc-clear-colors-btn"))==null||O.addEventListener("click",async()=>{const W=T();if(!W.length||!confirm(`ยืนยันล้างสีนักเรียน ${W.length} คนที่แสดงในตาราง?`))return;const Y=document.getElementById("hc-clear-colors-btn");Y.disabled=!0,Y.textContent="กำลังล้างสี...";try{await ts(W.map(M=>M.id),null),W.forEach(M=>{M.house_color=null}),N(`ล้างสีสำเร็จ ${W.length} คน`,"success"),k(),g()}catch{N("เกิดข้อผิดพลาด","error"),Y.disabled=!1,Y.textContent=`🗑️ ล้างสี (${W.length})`}}),E()};await v(),c()}async function Gr(){Le("council-rep-nominations"),document.getElementById("page-title").textContent="สรุปรายชื่อตัวแทนสภานักเรียน";const e=["ม.3","ม.4","ม.5"];let s="",t="",n="";const l=await Me().catch(()=>({})),o=String(l.academicYear??l.academic_year??new Date().getFullYear()+543),p=Number(l.semester??1),[r,d]=await Promise.all([zt(o,p).catch(()=>[]),fo(o,p).catch(()=>[])]),u=i=>{var j;return((j=(i||"").match(/^ม\.\d+/))==null?void 0:j[0])??null},a=[...new Set(r.filter(i=>i.category==="สามัญ"&&e.includes(u(i.main_room))).map(i=>i.main_room))].sort((i,j)=>i.localeCompare(j,"th")),m={};a.forEach(i=>{m[i]=0}),d.forEach(i=>{m[i.main_room]!=null&&m[i.main_room]++});const h=a.filter(i=>m[i]>=2),f=a.filter(i=>m[i]>0&&m[i]<2),v=a.filter(i=>m[i]===0),w=()=>d.filter(i=>{var j,_,C;if(t&&u(i.main_room)!==t||n&&((j=i.students)==null?void 0:j.gender)!==n)return!1;if(s){const T=s.toLowerCase();if(!`${((_=i.students)==null?void 0:_.full_name)??""} ${((C=i.students)==null?void 0:C.student_code)??""} ${i.main_room??""}`.toLowerCase().includes(T))return!1}return!0}),$=i=>i.length?i.map(j=>{var _,C,T,D;return`
    <tr class="border-t border-gray-100">
      <td class="px-4 py-2.5">${te(j.main_room)}</td>
      <td class="px-4 py-2.5 font-medium">${te(((_=j.students)==null?void 0:_.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${te(((C=j.students)==null?void 0:C.student_code)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${te(((T=j.students)==null?void 0:T.gender)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${te(((D=j.teachers)==null?void 0:D.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-400 text-xs">${j.created_at?new Date(j.created_at).toLocaleDateString("th-TH"):"—"}</td>
    </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ไม่พบรายการ</td></tr>',x=()=>{var j,_,C,T;const i=w();_e(`<div class="space-y-5 animate-fade">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ส่งครบ 2 คน</p><b class="text-2xl text-emerald-700">${h.length}</b><p class="text-[11px] text-emerald-600 mt-0.5">จาก ${a.length} ห้อง</p></div>
        <div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">ส่งไม่ครบ</p><b class="text-2xl text-amber-700">${f.length}</b>${f.length?`<p class="text-[11px] text-amber-600 mt-0.5 truncate" title="${te(f.join(", "))}">${te(f.join(", "))}</p>`:""}</div>
        <div class="bg-red-50 rounded-2xl p-4"><p class="text-xs text-red-700">ยังไม่ส่งเลย</p><b class="text-2xl text-red-700">${v.length}</b>${v.length?`<p class="text-[11px] text-red-600 mt-0.5 truncate" title="${te(v.join(", "))}">${te(v.join(", "))}</p>`:""}</div>
      </div>

      <div class="flex flex-wrap gap-3 items-center">
        <input id="crn-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..." value="${te(s)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="crn-filter-grade" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
          ${e.map(D=>`<option value="${D}" ${t===D?"selected":""}>${D}</option>`).join("")}
        </select>
        <select id="crn-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${n==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${n==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${i.length}</b> รายการ</span>
        <button id="crn-print-btn" class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" ${i.length===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${i.length})
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
          <tbody>${$(i)}</tbody>
        </table>
      </div>
    </div>`),(j=document.getElementById("crn-search"))==null||j.addEventListener("input",D=>{s=D.target.value,x()}),(_=document.getElementById("crn-filter-grade"))==null||_.addEventListener("change",D=>{t=D.target.value,x()}),(C=document.getElementById("crn-filter-gender"))==null||C.addEventListener("change",D=>{n=D.target.value,x()}),(T=document.getElementById("crn-print-btn"))==null||T.addEventListener("click",()=>{const D=w(),q=`<!doctype html><html><head><meta charset="utf-8"><title>รายชื่อตัวแทนสภานักเรียน</title>
        <style>
          body{font-family:'Sarabun','TH Sarabun New',sans-serif;padding:24px;color:#111}
          h1{font-size:18px;margin:0 0 4px}
          p.sub{font-size:12px;color:#666;margin:0 0 16px}
          table{width:100%;border-collapse:collapse;font-size:13px}
          th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
          th{background:#f3f4f6}
        </style></head><body>
        <h1>รายชื่อตัวแทนสภานักเรียน${t?" ระดับชั้น "+t:""}</h1>
        <p class="sub">ปีการศึกษา ${te(o)} · พิมพ์เมื่อ ${new Date().toLocaleDateString("th-TH")} · ทั้งหมด ${D.length} รายการ</p>
        <table><thead><tr><th>ห้อง</th><th>ชื่อ-สกุล</th><th>รหัส</th><th>เพศ</th><th>ครูผู้เสนอ</th></tr></thead>
        <tbody>${D.map(y=>{var c,g,k,b;return`<tr><td>${te(y.main_room)}</td><td>${te(((c=y.students)==null?void 0:c.full_name)??"—")}</td><td>${te(((g=y.students)==null?void 0:g.student_code)??"—")}</td><td>${te(((k=y.students)==null?void 0:k.gender)??"—")}</td><td>${te(((b=y.teachers)==null?void 0:b.full_name)??"—")}</td></tr>`}).join("")}</tbody>
        </table></body></html>`;Os(q)})};x()}async function Wr(){var k,b,L,E,B,H;Le("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const[e,s]=await Promise.all([Me().catch(()=>({})),ra().catch(()=>[])]),t=Hs(s,e),n=Ta(e),l=We(n);let o=l;try{const S=localStorage.getItem("pp5_admin_donations_term");t.some(I=>We(I)===S)&&(o=S)}catch{}const p=S=>Number(S==null?void 0:S.academic_year)*2+Number(S==null?void 0:S.semester),r=S=>S?new Date(S).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",d=S=>Number(S??0).toLocaleString("th-TH"),u=S=>!S.slip_url&&String(S.admin_note??"").startsWith("[เงินสด]"),a=S=>{const I=String((S==null?void 0:S.donationStickerTiers)??"").trim();return(I?I.split(`
`).filter(Boolean).map(A=>{const[U,z,O,,W]=A.split("|").map(Y=>Y.trim());return{amount:parseInt(U)||0,sticker:z||"🏅",title:O||"",color:W||""}}).filter(A=>A.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([A,U,z,O])=>({amount:A,sticker:U,title:z,color:O}))).sort((A,U)=>A.amount-U.amount).map((A,U)=>{const z=((S==null?void 0:S[`donationStickerImg${U+1}`])??"").trim();return z&&/^https?:\/\//.test(z)?{...A,sticker:z}:A})},m=(S,I)=>{let R=null;for(const F of I)S>=F.amount&&(R=F);return R},h=(S,I="w-8 h-8")=>S?/^https?:\/\//.test(S.sticker)?`<img src="${S.sticker}" class="${I} object-contain" title="${S.title}" />`:`<span class="text-xl" title="${S.title}">${S.sticker}</span>`:"";_e(`
  <div class="max-w-4xl mx-auto animate-fade space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามการสนับสนุนแยกตามภาคเรียน พร้อมสถานะครูเดิม/รายใหม่/ยังไม่มีรายการ</p>
      </div>
      <label class="flex items-center gap-2 text-sm font-semibold text-indigo-700">
        <span>เลือกภาคเรียน</span>
        <select id="don-term-switcher" class="max-w-[240px] border border-indigo-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${Rs(t,o,l)}
        </select>
      </label>
      <button id="don-add" ${o!==l?'disabled title="เพิ่มเงินสดได้เฉพาะภาคเรียนปัจจุบัน"':""} class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition">
        + เพิ่มเงินสด
      </button>
    </div>

    <p id="don-term-note" class="text-xs text-gray-500 -mt-3"></p>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      ${["ยอดรวมอนุมัติ","รออนุมัติ","ผู้สนับสนุนแล้ว","เฉลี่ยต่อคน","เดิมที่ต่ออายุ","รายใหม่","ยังไม่สนับสนุน"].map((S,I)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${S}</p>
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
  </div>`);let f=[],v=[],w=[],$={},x=[],i=[],j=e;const _=S=>{const I=i.find(z=>Number(z.id)===Number(S.supporter_renewal_entitlement_id));if(I)return`${Number(I.target_academic_year)}:${Number(I.target_semester)}`;const R=String(S.created_at??"").slice(0,10);if(!R)return"";const F=t.find(z=>z.start_date&&z.end_date&&R>=z.start_date&&R<=z.end_date);if(F)return We(F);const A=t.filter(z=>z.start_date&&R<z.start_date).sort((z,O)=>z.start_date.localeCompare(O.start_date))[0],U=A?(Date.parse(`${A.start_date}T00:00:00Z`)-Date.parse(`${R}T00:00:00Z`))/864e5:1/0;return U>=0&&U<=45?We(A):""},C=S=>{const I=t.find(A=>We(A)===o),R=p(I),F=(I==null?void 0:I.start_date)||(o===l?j.semester_start:null);return f.some(A=>{var W;if(Number((W=A.teachers)==null?void 0:W.id)!==Number(S)||A.status!=="approved")return!1;const U=i.find(Y=>Number(Y.id)===Number(A.supporter_renewal_entitlement_id));if(U)return p({academic_year:U.source_academic_year,semester:U.source_semester})<R;const z=_(A),O=t.find(Y=>We(Y)===z);return O?p(O)<R:!!(F&&String(A.reviewed_at??A.created_at??"").slice(0,10)<F)})},T=async()=>{var K,Q;const{supabase:S}=await Se(async()=>{const{supabase:Z}=await import("./supabase-BV-W2lsh.js").then(se=>se.a);return{supabase:Z}},[]),{getSystemConfig:I,getPaymentSlipViewUrl:R}=await Se(async()=>{const{getSystemConfig:Z,getPaymentSlipViewUrl:se}=await import("./api-Bf4Tf4Cp.js");return{getSystemConfig:Z,getPaymentSlipViewUrl:se}},__vite__mapDeps([0,1,2,3,4])),[F,{data:A},U,{data:z}]=await Promise.all([I().catch(()=>({})),S.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, supporter_renewal_entitlement_id, donation_tier, discount_percent, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1}),He().catch(()=>[]),S.from("supporter_renewal_entitlements").select("id, teacher_id, source_academic_year, source_semester, target_academic_year, target_semester")]);j=F??e,w=a(j),x=U??[],i=z??[],f=(A??[]).map(Z=>({...Z,_termKey:_(Z)})),v=f.filter(Z=>Z._termKey===o);const O=t.find(Z=>We(Z)===o),W=document.getElementById("don-teacher-coverage"),Y=document.getElementById("don-term-note");Y&&(Y.textContent=O!=null&&O.start_date&&(O!=null&&O.end_date)?`ช่วงข้อมูล ${r(O.start_date)} – ${r(O.end_date)} · รายการต่ออายุที่เชื่อมสิทธิ์จะยึดภาคเป้าหมาย แม้ส่งคำขอก่อนวันเปิดภาค`:"หมายเหตุ: ภาคเรียนนี้ไม่มีช่วงวันที่ในทะเบียน ระบบจึงแยกคำขอที่ระบุภาคเรียนผ่านสิทธิ์ต่ออายุได้เท่านั้น");const M=new Map;for(const Z of v){const se=Number((K=Z.teachers)==null?void 0:K.id);se&&(M.has(se)||M.set(se,[]),M.get(se).push(Z))}const V=x.map(Z=>{const se=M.get(Number(Z.id))??[],ae=se.filter(Ie=>Ie.status==="approved"),me=se.some(Ie=>Ie.status==="pending"),ue=C(Z.id),we=ae.length?ue?"เดิม · ต่ออายุแล้ว":"รายใหม่ · สนับสนุนแล้ว":me?ue?"เดิม · รอตรวจสอบ":"รายใหม่ · รอตรวจสอบ":se.length?ue?"เดิม · คำขอถูกปฏิเสธ":"รายใหม่ · คำขอถูกปฏิเสธ":ue?"เดิม · ยังไม่สนับสนุนเทอมนี้":"ยังไม่เคยสนับสนุน";return{teacher:Z,requests:se,approved:ae,pending:me,prior:ue,kind:we,total:ae.reduce((Ie,Te)=>Ie+(Number(Te.amount)||0),0)}}).sort((Z,se)=>{const ae=me=>me.approved.length?0:me.pending?1:me.prior?2:3;return ae(Z)-ae(se)||String(Z.teacher.full_name??"").localeCompare(String(se.teacher.full_name??""),"th")});W&&(W.innerHTML=V.length?`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead class="sticky top-0 bg-gray-50"><tr>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">ครู</th>
          <th class="text-left px-4 py-2 text-xs font-semibold text-gray-500">สถานะภาคนี้</th>
          <th class="text-right px-4 py-2 text-xs font-semibold text-gray-500">ยอดอนุมัติ</th>
        </tr></thead><tbody class="divide-y divide-gray-50">${V.map(Z=>`
          <tr class="hover:bg-gray-50"><td class="px-4 py-2.5"><span class="font-medium text-gray-800">${Oe(Z.teacher.full_name??"—")}</span>
            <span class="ml-1 text-xs text-gray-400">${Oe(Z.teacher.teacher_code??"")}</span></td>
            <td class="px-4 py-2.5"><span class="px-2 py-1 rounded-full text-[11px] font-semibold ${Z.approved.length?"bg-emerald-50 text-emerald-700":Z.pending?"bg-amber-50 text-amber-700":"bg-gray-100 text-gray-500"}">${Z.kind}</span></td>
            <td class="px-4 py-2.5 text-right font-semibold ${Z.total?"text-emerald-700":"text-gray-400"}">${Z.total?`${d(Z.total)} ฿`:"—"}</td></tr>`).join("")}</tbody></table></div>`:'<p class="text-center py-8 text-sm text-gray-400">ไม่พบรายชื่อครู</p>');for(const Z of v)Z.slip_url&&!u(Z)&&(Z._resolvedSlip=await R(Z.slip_url).catch(()=>Z.slip_url));$={};for(const Z of v){if(Z.status!=="approved")continue;const se=(Q=Z.teachers)==null?void 0:Q.id;se&&($[se]=($[se]??0)+(Number(Z.amount)||0))}D(),q()},D=()=>{const S=v.filter(Y=>Y.status==="approved"),I=S.reduce((Y,M)=>Y+(Number(M.amount)||0),0),R=v.filter(Y=>Y.status==="pending").length,F=new Set(S.map(Y=>{var M;return(M=Y.teachers)==null?void 0:M.id})).size,A=F?Math.round(I/F):0,U=new Set(S.filter(Y=>{var M;return C((M=Y.teachers)==null?void 0:M.id)}).map(Y=>{var M;return(M=Y.teachers)==null?void 0:M.id})).size,z=Math.max(0,F-U),O=Math.max(0,x.length-F),W=[d(I)+" ฿",R,F+" คน",d(A)+" ฿",U+" คน",z+" คน",O+" คน"];document.querySelectorAll(".don-stat-val").forEach((Y,M)=>{Y.textContent=W[M]})},q=()=>{var O,W,Y,M;const S=document.getElementById("don-table");if(!S)return;const I=(((O=document.getElementById("don-search"))==null?void 0:O.value)??"").toLowerCase(),R=((W=document.getElementById("don-filter-status"))==null?void 0:W.value)??"all",F=((Y=document.getElementById("don-filter-method"))==null?void 0:Y.value)??"all",A=((M=document.getElementById("don-filter-sort"))==null?void 0:M.value)??"date_desc";let U=v.filter(V=>{const K=V.teachers;return!(I&&!String((K==null?void 0:K.full_name)??"").toLowerCase().includes(I)&&!String((K==null?void 0:K.teacher_code)??"").includes(I)||R!=="all"&&V.status!==R||F==="cash"&&!u(V)||F==="transfer"&&u(V))});if(A==="date_asc"?U.sort((V,K)=>new Date(V.created_at)-new Date(K.created_at)):A==="amount_desc"&&U.sort((V,K)=>(K.amount??0)-(V.amount??0)),!U.length){S.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const z=V=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[V]??`<span class="text-gray-400 text-xs">${V}</span>`;S.innerHTML=`
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
        ${U.map((V,K)=>{const Q=V.teachers,Z=u(V),se=String(V.admin_note??"").replace(/^\[เงินสด\]\s*/,""),ae=$[Q==null?void 0:Q.id]??0,me=m(ae,w),ue=C(Q==null?void 0:Q.id)?"เดิม":"รายใหม่",we=Q!=null&&Q.image_url?`<img src="${Q.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((Q==null?void 0:Q.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${V.id}" data-tid="${(Q==null?void 0:Q.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${K+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${we}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(Q==null?void 0:Q.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(Q==null?void 0:Q.teacher_code)??""} · ${ue}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${h(me)}</td>
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
    </table>`,S.querySelectorAll(".don-row").forEach(V=>{V.addEventListener("click",()=>y(V.dataset.tid))}),S.querySelectorAll(".don-slip").forEach(V=>{V.addEventListener("click",async K=>{K.stopPropagation();let Q=V.dataset.url;if(!Q){const se=f.find(ae=>ae.id===Number(V.dataset.id));if(se!=null&&se.slip_url){const{getPaymentSlipViewUrl:ae}=await Se(async()=>{const{getPaymentSlipViewUrl:me}=await import("./api-Bf4Tf4Cp.js");return{getPaymentSlipViewUrl:me}},__vite__mapDeps([0,1,2,3,4]));Q=await ae(se.slip_url).catch(()=>se.slip_url)}}if(!Q){N("ไม่พบสลิป","warning");return}const Z=document.createElement("div");Z.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",Z.innerHTML=`<img src="${Q}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,Z.addEventListener("click",()=>Z.remove()),document.body.appendChild(Z)})}),S.querySelectorAll(".don-approve").forEach(V=>{V.addEventListener("click",async K=>{K.stopPropagation();const{reviewPaymentRequest:Q}=await Se(async()=>{const{reviewPaymentRequest:Z}=await import("./api-Bf4Tf4Cp.js");return{reviewPaymentRequest:Z}},__vite__mapDeps([0,1,2,3,4]));await Q(Number(V.dataset.id),"approved").catch(()=>{}),N("อนุมัติแล้ว ✅","success"),await T()})}),S.querySelectorAll(".don-reject").forEach(V=>{V.addEventListener("click",async K=>{K.stopPropagation();const Q=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:Z}=await Se(async()=>{const{reviewPaymentRequest:se}=await import("./api-Bf4Tf4Cp.js");return{reviewPaymentRequest:se}},__vite__mapDeps([0,1,2,3,4]));await Z(Number(V.dataset.id),"rejected",Q||null).catch(()=>{}),N("ปฏิเสธแล้ว","info"),await T()})}),S.querySelectorAll(".don-edit").forEach(V=>{V.addEventListener("click",K=>{K.stopPropagation(),g(Number(V.dataset.id))})})},y=S=>{if(!S)return;const I=Number(S),R=v.filter(Q=>{var Z;return((Z=Q.teachers)==null?void 0:Z.id)===I});if(!R.length)return;const F=R[0].teachers,A=R.filter(Q=>Q.status==="approved"),U=A.reduce((Q,Z)=>Q+(Number(Z.amount)||0),0),z=m(U,w),O=(z==null?void 0:z.color)??"#10b981",W=parseInt(O.slice(1,3),16),Y=parseInt(O.slice(3,5),16),M=parseInt(O.slice(5,7),16),V=F!=null&&F.image_url?`<img src="${F.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${((F==null?void 0:F.full_name)??"?").charAt(0)}</div>`,K=document.createElement("div");K.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",K.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${W},${Y},${M},0.9),rgba(${W},${Y},${M},1))">
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
            <p class="font-bold text-gray-700">${A.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${R.map(Q=>{const Z=u(Q),se=String(Q.admin_note??"").replace(/^\[เงินสด\]\s*/,""),ae={pending:"⏳",approved:"✅",rejected:"❌"}[Q.status]??"";return`<div class="flex items-center justify-between text-sm">
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
      </div>`,document.body.appendChild(K),K.querySelector(".don-sum-close").addEventListener("click",()=>K.remove()),K.addEventListener("click",Q=>{Q.target===K&&K.remove()})},c=async()=>{const{getTeachers:S}=await Se(async()=>{const{getTeachers:A}=await import("./api-Bf4Tf4Cp.js");return{getTeachers:A}},__vite__mapDeps([0,1,2,3,4])),I=await S().catch(()=>[]),R=document.createElement("div");R.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",R.innerHTML=`
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
      </div>`,document.body.appendChild(R);const F=Pa({wrap:R.querySelector("#don-teacher-wrap"),teachers:[...I].sort((A,U)=>(A.full_name??"").localeCompare(U.full_name??"","th"))});R.querySelector("#don-add-cancel").addEventListener("click",()=>R.remove()),R.querySelector("#don-add-confirm").addEventListener("click",async()=>{const A=F.getValue(),U=Number(R.querySelector("#don-add-amount").value),z=R.querySelector("#don-add-note").value.trim();if(!A){N("กรุณาเลือกครู","warning");return}if(!U){N("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:O}=await Se(async()=>{const{createPaymentRequest:W}=await import("./api-Bf4Tf4Cp.js");return{createPaymentRequest:W}},__vite__mapDeps([0,1,2,3,4]));await O({teacher_id:parseInt(A),package_type:"donation",amount:U,status:"approved",admin_note:`[เงินสด] ${z}`.trim(),reviewed_at:new Date().toISOString()}).catch(W=>{N("บันทึกไม่สำเร็จ: "+fe(W),"error")}),N("บันทึกโดเนทเงินสดแล้ว ✅","success"),R.remove(),await T()})},g=S=>{const I=f.find(A=>A.id===S);if(!I)return;const R=String(I.admin_note??"").replace(/^\[เงินสด\]\s*/,""),F=document.createElement("div");F.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",F.innerHTML=`
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
      </div>`,document.body.appendChild(F),F.querySelector("#don-edit-cancel").addEventListener("click",()=>F.remove()),F.querySelector("#don-edit-save").addEventListener("click",async()=>{const A=Number(F.querySelector("#don-edit-amount").value),U=F.querySelector("#don-edit-note").value.trim(),z=u(I)?"[เงินสด] ":"",{supabase:O}=await Se(async()=>{const{supabase:Y}=await import("./supabase-BV-W2lsh.js").then(M=>M.a);return{supabase:Y}},[]),{error:W}=await O.from("payment_requests").update({amount:A,admin_note:(z+U).trim()||null}).eq("id",S);if(W){N("แก้ไขไม่สำเร็จ","error");return}N("บันทึกแล้ว ✅","success"),F.remove(),await T()})};(k=document.getElementById("don-search"))==null||k.addEventListener("input",q),(b=document.getElementById("don-filter-status"))==null||b.addEventListener("change",q),(L=document.getElementById("don-filter-method"))==null||L.addEventListener("change",q),(E=document.getElementById("don-filter-sort"))==null||E.addEventListener("change",q),(B=document.getElementById("don-add"))==null||B.addEventListener("click",c),(H=document.getElementById("don-term-switcher"))==null||H.addEventListener("change",async S=>{o=S.target.value;try{localStorage.setItem("pp5_admin_donations_term",o)}catch{}const I=document.getElementById("don-add");I&&(I.disabled=o!==l,I.title=I.disabled?"เพิ่มเงินสดได้เฉพาะภาคเรียนปัจจุบัน":"");const R=document.getElementById("don-table");R&&(R.innerHTML='<div class="py-10 text-gray-400"><span class="animate-spin text-2xl">⏳</span><p class="mt-2 text-sm">กำลังโหลดข้อมูลภาคเรียน...</p></div>'),await T()}),await T()}async function Yr(){var m,h,f,v;Le("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const e=w=>String(w??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=w=>w?new Date(w).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",t={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},n=["suggestion","problem","password_reset"],l=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],o=Object.fromEntries(l.map(w=>[w.value,w]));_e(`
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
  </div>`);let p=[];const r=async()=>{p=await qs().catch(()=>[]),u(),a()},d=async(w,$)=>{if(!w)return;if(!w.is_read)try{await rs(w.id,!0),w.is_read=!0}catch{}const x=String($??"").slice(0,120);await No(w.profile_id,{title:"💬 แอดมินตอบกลับ Feedback ของคุณแล้ว",body:x||"เข้าไปดูคำตอบได้ที่เมนู Feedback ถึงแอดมิน",url:w.sender_role==="teacher"?"teacher.html":"student.html"}).catch(()=>{})},u=()=>{var $;const w=document.getElementById("fb-cat-stats");w&&(w.innerHTML=Object.keys(t).map(x=>{const i=p.filter(T=>T.category===x),j=i.length,_=i.filter(T=>!T.is_read).length;let C='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(n.includes(x)){const T=i.filter(D=>D.status==="resolved").length;C=`<p class="text-[10px] font-semibold mt-0.5 ${T===j&&j>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${T}/${j}</p>`}else _&&(C=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${_}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${x}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${t[x]}</p>
          <p class="text-xl font-bold text-gray-800">${j}</p>
          ${C}
        </div>`}).join(""),w.querySelectorAll(".fb-cat-card").forEach(x=>x.addEventListener("click",()=>{var j;const i=document.getElementById("fb-filter-cat");i&&(i.value=x.dataset.cat,a()),(j=document.getElementById("fb-list"))==null||j.scrollIntoView({behavior:"smooth",block:"start"})}))),($=window._refreshFeedbackBadge)==null||$.call(window)},a=()=>{var C,T,D,q;const w=document.getElementById("fb-list");if(!w)return;const $=(((C=document.getElementById("fb-search"))==null?void 0:C.value)??"").toLowerCase(),x=((T=document.getElementById("fb-filter-role"))==null?void 0:T.value)??"all",i=((D=document.getElementById("fb-filter-cat"))==null?void 0:D.value)??"all",j=((q=document.getElementById("fb-filter-read"))==null?void 0:q.value)??"all";let _=p.filter(y=>{var g,k,b;const c=[y.sender_name,y.message,(g=y.student)==null?void 0:g.student_code,(k=y.student)==null?void 0:k.main_room,(b=y.student)==null?void 0:b.religion_room,...(y.messages??[]).map(L=>L.message)].join(" ").toLowerCase();return!($&&!c.includes($)||x!=="all"&&y.sender_role!==x||i!=="all"&&y.category!==i||j==="unread"&&y.is_read||j==="read"&&!y.is_read)});if(!_.length){w.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}w.innerHTML=_.map(y=>{var c,g,k,b,L,E;return`
      <div class="bg-white rounded-2xl border ${y.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${y.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${e(y.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${e(y.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${y.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${y.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${s(y.created_at)}</p>
              ${y.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${e(((c=y.student)==null?void 0:c.student_code)||"—")} · ห้องสามัญ ${e(((g=y.student)==null?void 0:g.main_room)||"—")} · ห้องศาสนา ${e(((k=y.student)==null?void 0:k.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${y.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${y.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(t).map(([B,H])=>`<option value="${B}" ${y.category===B?"selected":""}>${H}</option>`).join("")}
          </select>
          ${n.includes(y.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((b=o[y.status])==null?void 0:b.cls)??"bg-gray-100 text-gray-600"}">${((L=o[y.status])==null?void 0:L.label)??y.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(y.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(y.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(y.created_at)}</p></div></div>
          ${(y.messages??[]).map(B=>B.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(B.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${s(B.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(y.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(B.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(B.created_at)}</p></div></div>`).join("")}
          ${y.admin_reply&&!(y.messages??[]).some(B=>B.author_role==="admin"&&B.message===y.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(y.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${y.replied_at?s(y.replied_at):""}</p></div></div>`:""}
        </div>
        ${y.category==="password_reset"&&y.sender_role==="student"&&((E=y.student)!=null&&E.id)?y.status==="resolved"?'<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>':`<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${y.id}" data-sid="${y.student.id}" data-code="${e(y.student.student_code||"")}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${e(y.student.student_code||"")})
              </button>`:""}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${y.id}" data-read="${y.is_read}">
            ${y.is_read?"↩️ ทำเป็นยังไม่อ่าน":"✓ ทำเครื่องหมายว่าอ่านแล้ว"}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${y.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${y.id}">
              ${l.map(B=>`<option value="${B.value}" ${y.status===B.value?"selected":""}>${B.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${y.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${y.replied_at?`ตอบล่าสุด ${s(y.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${y.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),w.querySelectorAll(".fb-toggle-read").forEach(y=>y.addEventListener("click",async()=>{const c=parseInt(y.dataset.id),g=y.dataset.read==="true";try{await rs(c,!g)}catch{N("บันทึกไม่สำเร็จ","error");return}const k=p.find(b=>b.id===c);k&&(k.is_read=!g),u(),a()})),w.querySelectorAll(".fb-category-sel").forEach(y=>y.addEventListener("change",async()=>{const c=parseInt(y.dataset.id),g=y.value,k=p.find(L=>L.id===c),b=k==null?void 0:k.category;y.disabled=!0;try{await $o(c,g)}catch{N("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),y.disabled=!1,y.value=b;return}k&&(k.category=g),N("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),a()})),w.querySelectorAll(".fb-delete").forEach(y=>y.addEventListener("click",async()=>{const c=parseInt(y.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await ko(c)}catch{N("ลบไม่สำเร็จ","error");return}p=p.filter(g=>g.id!==c),N("ลบแล้ว","success"),u(),a()}})),w.querySelectorAll(".fb-pw-reset-btn").forEach(y=>y.addEventListener("click",async()=>{const c=parseInt(y.dataset.id),g=parseInt(y.dataset.sid),k=y.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${k} เป็นรหัสนักเรียน (${k}) จริงหรือไม่?`))return;const b=y.textContent;y.disabled=!0,y.textContent="⏳ กำลังรีเซ็ท...";try{await So(g,k),await Eo(g).catch(()=>{}),await ns(c,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${k}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(E){N("รีเซ็ทไม่สำเร็จ: "+fe(E),"error"),y.disabled=!1,y.textContent=b;return}const L=p.find(E=>E.id===c);if(L){L.status="resolved";const E=new Date().toISOString(),B=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${k}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;L.admin_reply=B,L.replied_at=E,L.messages=[...L.messages??[],{id:`local-${Date.now()}`,feedback_id:c,author_role:"admin",message:B,created_at:E}],await d(L,B)}N("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),u(),a()})),w.querySelectorAll(".fb-save-status").forEach(y=>y.addEventListener("click",async()=>{var E,B;const c=parseInt(y.dataset.id),g=y.closest(".fb-card"),k=(E=g.querySelector(".fb-status-sel"))==null?void 0:E.value,b=(B=g.querySelector(".fb-reply-input"))==null?void 0:B.value.trim();y.disabled=!0,y.textContent="⏳ กำลังบันทึก...";try{await ns(c,{status:k,adminReply:b})}catch{N("บันทึกไม่สำเร็จ","error"),y.disabled=!1,y.textContent="💾 บันทึก";return}const L=p.find(H=>H.id===c);if(L&&(L.status=k,b)){const H=new Date().toISOString();L.admin_reply=b,L.replied_at=H,L.messages=[...L.messages??[],{id:`local-${Date.now()}`,feedback_id:c,author_role:"admin",message:b,created_at:H}],await d(L,b)}N(b?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),u(),a()}))};(m=document.getElementById("fb-search"))==null||m.addEventListener("input",a),(h=document.getElementById("fb-filter-role"))==null||h.addEventListener("change",a),(f=document.getElementById("fb-filter-cat"))==null||f.addEventListener("change",a),(v=document.getElementById("fb-filter-read"))==null||v.addEventListener("change",a),await r()}const Kr={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},rt={opening:{label:"เปิด–ปิดภาคเรียน",icon:"🚪",chip:"bg-emerald-50 text-emerald-700 border-emerald-100"},exam:{label:"การสอบ",icon:"📝",chip:"bg-violet-50 text-violet-700 border-violet-100"},student_activity:{label:"กิจกรรมนักเรียน",icon:"🎒",chip:"bg-cyan-50 text-cyan-700 border-cyan-100"},staff:{label:"ครูและบุคลากร",icon:"👥",chip:"bg-amber-50 text-amber-700 border-amber-100"},holiday:{label:"วันหยุด/วันสำคัญ",icon:"🔴",chip:"bg-rose-50 text-rose-700 border-rose-100"},deadline:{label:"กำหนดส่งเอกสาร",icon:"📤",chip:"bg-orange-50 text-orange-700 border-orange-100"},meeting:{label:"ประชุม",icon:"🤝",chip:"bg-blue-50 text-blue-700 border-blue-100"},other:{label:"อื่นๆ",icon:"📌",chip:"bg-gray-50 text-gray-600 border-gray-100"}},Ls=[{header:"bg-emerald-700",soft:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800"},{header:"bg-violet-700",soft:"bg-violet-50",border:"border-violet-200",text:"text-violet-800"},{header:"bg-cyan-700",soft:"bg-cyan-50",border:"border-cyan-200",text:"text-cyan-800"},{header:"bg-blue-700",soft:"bg-blue-50",border:"border-blue-200",text:"text-blue-800"},{header:"bg-amber-600",soft:"bg-amber-50",border:"border-amber-200",text:"text-amber-800"},{header:"bg-rose-700",soft:"bg-rose-50",border:"border-rose-200",text:"text-rose-800"},{header:"bg-orange-700",soft:"bg-orange-50",border:"border-orange-200",text:"text-orange-800"}],_i=["อา","จ","อ","พ","พฤ","ศ","ส"];function Pe(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ea(e){return String(e??"").slice(0,10)}function pt(e,s=!1){const t=ea(e);return t?new Date(`${t}T00:00:00`).toLocaleDateString("th-TH",s?{day:"numeric",month:"short",year:"numeric"}:{day:"numeric",month:"long",year:"numeric"}):"—"}function Ra(e){return ea(e).slice(0,7)}function Jr(e){return new Date(`${e}-01T00:00:00`).toLocaleDateString("th-TH",{month:"long",year:"numeric"})}function $i(e){return e.is_holiday?"holiday":rt[e.category]?e.category:e.event_type==="deadline"?"deadline":e.event_type==="meeting"?"meeting":/สอบ|คัดเลือก|วัดความรู้|TGAT|TPAT|A-level|I-Net|O-NET/i.test(e.label??"")?"exam":/เปิดเรียน|ปิดภาค|ลงทะเบียน/i.test(e.label??"")?"opening":"other"}function ki(e){return{...e,event_date:ea(e.event_date),end_date:e.end_date?ea(e.end_date):null,category:$i(e),work_calendar_items:(e.work_calendar_items??[]).slice().sort((s,t)=>(s.sort_order??0)-(t.sort_order??0))}}function Si(e,s){return e.filter(t=>{const n=t.end_date||t.event_date;return t.event_date<=s&&n>=s})}function Qr(e,s){const t=`${s}-01`,n=new Date(`${t}T00:00:00`),l=`${s}-${String(new Date(n.getFullYear(),n.getMonth()+1,0).getDate()).padStart(2,"0")}`,o=e.end_date||e.event_date;return e.event_date<=l&&o>=t}function Ei(e){const s=e.flatMap(o=>[o.event_date,o.end_date||o.event_date]).filter(Boolean).sort();if(!s.length)return[Ra(Ps(new Date))];const t=new Date(`${s[0].slice(0,7)}-01T00:00:00`),n=new Date(`${s.at(-1).slice(0,7)}-01T00:00:00`),l=[];for(const o=new Date(t);o<=n;o.setMonth(o.getMonth()+1))l.push(`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`);return l}function Li(e,s){return`ฉันจะแนบ PDF หรือภาพปฏิทินการปฏิบัติงานของโรงเรียนให้คุณอ่าน
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

ห้ามสร้างรายการซ้ำ ห้ามตัดรายการที่อยู่หลังช่วงเปิดเรียน และห้ามตัดกิจกรรมต่อเนื่องหลังสิ้นสุดภาคเรียน เช่น งานในเดือนเมษายน ให้ใส่เข้ามาตามเอกสารทั้งหมด`}function Cs(e){return String(e??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim()}function Is(e){const t=String(e??"").trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";let n=Number(t[1]);n>2400&&(n-=543);const l=Number(t[2]),o=Number(t[3]),p=new Date(Date.UTC(n,l-1,o));return p.getUTCFullYear()!==n||p.getUTCMonth()!==l-1||p.getUTCDate()!==o?"":`${n}-${String(l).padStart(2,"0")}-${String(o).padStart(2,"0")}`}function Ci(e){const s=Is(e.event_date??e.start_date??e.date),t=e.end_date?Is(e.end_date):null,n=String(e.label??e.title??e.activity??"").trim(),l=rt[e.category]?e.category:"other";return{event_date:s,end_date:t||null,label:n,description:String(e.description??e.details??"").trim(),category:l,responsible_unit:String(e.responsible_unit??e.responsible??e.owner??"").trim(),week_number:Number.isInteger(Number(e.week_number))?Number(e.week_number):null,is_holiday:e.is_holiday===!0||e.is_holiday==="true",holiday_note:String(e.holiday_note??e.holiday??"").trim(),event_type:Kr[e.event_type]?e.event_type:"other",round_number:Number.isInteger(Number(e.round_number))?Number(e.round_number):null,source_page:Number.isInteger(Number(e.source_page))?Number(e.source_page):null,note:String(e.note??"").trim()}}function Ii(e,s=!1){const t=rt[e.category]||rt.other;return`<div class="${s?"text-[10px]":"text-xs"} rounded-lg border px-2 py-1 ${t.chip} truncate" title="${Pe(e.label)}">${t.icon} ${Pe(e.label)}</div>`}function Ti(e,s,t,{manager:n=!1}={}){const l=Ls[t%Ls.length],o=new Date(`${e}-01T00:00:00`),p=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),r=o.getDay(),d=[];for(let a=0;a<r;a++)d.push('<div class="min-h-[74px] bg-gray-50/50"></div>');for(let a=1;a<=p;a++){const m=`${e}-${String(a).padStart(2,"0")}`,h=Si(s,m);d.push(`<div class="min-h-[74px] p-1.5 border-t border-r border-gray-100 bg-white ${h.some(f=>f.is_holiday)?"bg-rose-50/60":""}">
      <div class="flex items-center justify-between gap-1 mb-1"><span class="text-[11px] font-bold ${h.some(f=>f.is_holiday)?"text-rose-600":"text-gray-500"}">${a}</span>${h.length?`<span class="text-[9px] text-gray-400">${h.length}</span>`:""}</div>
      <div class="space-y-1">${h.slice(0,3).map(f=>Ii(f,!0)).join("")}${h.length>3?`<div class="text-[10px] text-gray-400 px-1">+ อีก ${h.length-3}</div>`:""}</div>
    </div>`)}const u=s.filter(a=>Qr(a,e));return`<section class="rounded-3xl border ${l.border} bg-white shadow-sm overflow-hidden work-calendar-month" data-wcal-month="${e}">
    <div class="${l.header} text-white px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2">
      <div><h2 class="font-extrabold text-base">${Pe(Jr(e))}</h2><p class="text-[11px] text-white/80">ปฏิทินกิจกรรมและกำหนดการ</p></div>
      <span class="text-xs bg-white/15 rounded-full px-3 py-1">${u.length} รายการ</span>
    </div>
    <div class="grid grid-cols-7 border-l border-gray-100">${_i.map(a=>`<div class="text-center text-[10px] sm:text-xs font-bold ${l.text} ${l.soft} py-2 border-t border-r border-gray-100">${a}</div>`).join("")}${d.join("")}</div>
    <div class="border-t ${l.border} ${l.soft} p-3 sm:p-4">
      <div class="overflow-x-auto"><table class="w-full text-xs min-w-[680px]"><thead><tr class="text-gray-500 text-left"><th class="py-2 px-2 w-[18%]">วัน/เดือน/ปี</th><th class="py-2 px-2">กิจกรรม/งาน</th><th class="py-2 px-2 w-[22%]">ผู้รับผิดชอบ</th><th class="py-2 px-2 w-[12%]">สัปดาห์</th><th class="py-2 px-2 w-[16%]">หมายเหตุ</th>${n?'<th class="py-2 px-2 w-[86px]">จัดการ</th>':""}</tr></thead><tbody class="divide-y divide-white/80">${u.length?u.map(a=>{const m=a.end_date&&a.end_date!==a.event_date?`${pt(a.event_date,!0)} – ${pt(a.end_date,!0)}`:pt(a.event_date,!0),h=a.is_holiday?'<span class="ml-1 text-rose-600 font-bold">วันหยุด</span>':"";return`<tr class="align-top"><td class="py-2 px-2 font-semibold ${a.is_holiday?"text-rose-600":"text-gray-700"}">${m}${h}</td><td class="py-2 px-2"><div class="font-bold text-gray-800">${Pe(a.label)}</div>${a.description?`<div class="text-gray-500 mt-0.5">${Pe(a.description)}</div>`:""}</td><td class="py-2 px-2 text-gray-600">${Pe(a.responsible_unit||"—")}</td><td class="py-2 px-2 text-gray-600">${a.week_number?`สัปดาห์ที่ ${a.week_number}`:"—"}</td><td class="py-2 px-2 text-gray-500">${Pe(a.holiday_note||a.note||"—")}</td>${n?`<td class="py-2 px-2 whitespace-nowrap"><div class="flex flex-wrap gap-1.5"><button type="button" class="wcal-edit-btn inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-2 py-1 text-[11px] font-bold text-indigo-700 hover:bg-indigo-100" data-ev-id="${a.id}" title="แก้ไขกิจกรรม">✏️ แก้ไข</button><button type="button" class="wcal-del-btn inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-ev-id="${a.id}" title="ลบกิจกรรม">🗑️ ลบ</button></div></td>`:""}</tr>`}).join(""):`<tr><td colspan="${n?6:5}" class="py-6 text-center text-gray-400">ยังไม่มีรายการในเดือนนี้</td></tr>`}</tbody></table></div>
    </div>
  </section>`}function ji({academicYear:e,semester:s,events:t,teacher:n,importEvents:l}){var x;(x=document.getElementById("wcal-ai-modal"))==null||x.remove();const o=document.createElement("div");o.id="wcal-ai-modal",o.className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",o.innerHTML=`<div class="bg-white w-full sm:max-w-6xl max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl">
    <div class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-5 sm:px-7 py-4 flex items-start justify-between gap-4"><div><h3 class="font-bold text-gray-800">🤖 เพิ่มปฏิทินจาก JSON ที่ AI สร้าง</h3><p class="text-xs text-gray-500 mt-1">อัปโหลด PDF/ภาพให้ AI ภายนอก แล้วนำ JSON กลับมาตรวจสอบที่นี่ก่อนบันทึก</p></div><button id="wcal-ai-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button></div>
    <div class="p-5 sm:p-7 space-y-5">
      <div class="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-xs text-violet-900 leading-relaxed"><b>ความปลอดภัย:</b> ระบบจะไม่ส่งข้อมูลเข้า database จาก JSON ทันที ต้องตรวจสอบรายการและกดยืนยันก่อนทุกครั้ง รายการวันที่และชื่อซ้ำจะถูกข้ามโดยไม่เขียนทับข้อมูลเดิม</div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><section class="rounded-2xl border border-gray-200 p-4"><div class="flex items-center justify-between gap-2 mb-2"><div><h4 class="font-semibold text-sm text-gray-800">1) Prompt สำหรับ AI</h4><p class="text-[11px] text-gray-400 mt-0.5">กดสร้าง Prompt ก่อนคัดลอก แล้วแนบเอกสารต้นฉบับให้ AI</p></div><div class="flex gap-2"><button id="wcal-ai-generate" type="button" class="text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-lg">⚡ สร้าง Prompt</button><button id="wcal-ai-copy" type="button" hidden disabled aria-disabled="true" class="text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg disabled:opacity-40">📋 คัดลอก</button></div></div><textarea id="wcal-ai-prompt" readonly rows="18" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y bg-gray-50"></textarea></section>
      <section class="rounded-2xl border border-gray-200 p-4"><h4 class="font-semibold text-sm text-gray-800">2) วาง JSON ที่ AI สร้าง</h4><p class="text-[11px] text-gray-400 mt-0.5 mb-2">รองรับ JSON ที่ครอบด้วย \`\`\`json ... \`\`\`</p><textarea id="wcal-ai-json" rows="18" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs leading-5 resize-y font-mono" placeholder="วาง JSON ที่ได้จาก AI ที่นี่"></textarea><button id="wcal-ai-parse" class="w-full mt-3 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold">🔍 ตรวจสอบ JSON และแสดงตัวอย่าง</button><p id="wcal-ai-error" class="hidden text-xs text-red-600 mt-2 whitespace-pre-wrap"></p></section></div>
      <section id="wcal-ai-preview-wrap" class="hidden rounded-2xl border border-gray-200 overflow-hidden"><div class="bg-gray-50 px-4 py-3 border-b border-gray-200"><h4 class="font-semibold text-sm text-gray-800">3) ตรวจสอบก่อนนำเข้า</h4><p id="wcal-ai-summary" class="text-xs text-gray-500 mt-0.5"></p><p class="text-[11px] text-amber-700 mt-1">หากรายการใดขึ้น “ข้อมูลไม่ครบ” ให้กด 🗑️ ลบรายการนี้ก่อนยืนยันนำเข้า</p></div><div id="wcal-ai-preview" class="p-4 space-y-2 max-h-[40vh] overflow-y-auto"></div></section>
    </div><div class="sticky bottom-0 bg-white/95 backdrop-blur border-t border-gray-100 px-5 sm:px-7 py-4 flex flex-col-reverse sm:flex-row justify-end gap-2"><button id="wcal-ai-cancel" class="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button><button id="wcal-ai-apply" disabled class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold disabled:opacity-40">✅ ยืนยันนำเข้าปฏิทิน</button></div></div>`,document.body.appendChild(o);const p=o.querySelector("#wcal-ai-prompt"),r=o.querySelector("#wcal-ai-copy"),d=Vs({copyButton:r}),u=()=>o.remove();o.querySelector("#wcal-ai-close").onclick=u,o.querySelector("#wcal-ai-cancel").onclick=u,o.addEventListener("click",i=>{i.target===o&&u()}),o.querySelector("#wcal-ai-generate").onclick=()=>{p.value=Li(e,s),d.markGenerated(),r.textContent="📋 คัดลอก",N("สร้าง Prompt ปฏิทินแล้ว","success")},r.onclick=async i=>{if(!d.isReady()){N("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(p.value),i.currentTarget.textContent="คัดลอกแล้ว ✅",setTimeout(()=>{document.body.contains(i.currentTarget)&&(i.currentTarget.textContent="📋 คัดลอก")},1500)}catch{p.select(),document.execCommand("copy"),N("คัดลอกแล้ว ✅","success")}};const a=o.querySelector("#wcal-ai-error"),m=o.querySelector("#wcal-ai-preview-wrap"),h=o.querySelector("#wcal-ai-preview"),f=o.querySelector("#wcal-ai-summary"),v=o.querySelector("#wcal-ai-apply");let w=[];const $=()=>{const i=w.filter(_=>!_.event_date||!_.label||_.end_date&&_.end_date<_.event_date),j=w.filter(_=>_.duplicate);f.textContent=`ทั้งหมด ${w.length} รายการ · ซ้ำ ${j.length} รายการ · ${i.length?`ข้อมูลไม่ครบ ${i.length} รายการ`:"พร้อมตรวจสอบและนำเข้า"}`,v.disabled=!w.length||i.length>0,h.innerHTML=w.map((_,C)=>`<div class="rounded-2xl border ${_.duplicate?"border-amber-200 bg-amber-50/50":"border-gray-200 bg-white"} p-3"><div class="flex flex-wrap items-start justify-between gap-2"><div><p class="font-bold text-sm text-gray-800">${C+1}. ${Pe(_.label||"ไม่พบชื่อกิจกรรม")}</p><p class="text-xs text-gray-500 mt-1">${_.event_date?pt(_.event_date,!0):"ไม่พบวันที่"}${_.end_date?` – ${pt(_.end_date,!0)}`:""} · ${Pe((rt[_.category]||rt.other).label)}</p><p class="text-xs text-gray-500 mt-1">ผู้รับผิดชอบ: ${Pe(_.responsible_unit||"—")} · สัปดาห์: ${_.week_number||"—"} · หน้า ${_.source_page||"—"}</p>${_.note?`<p class="text-[11px] text-amber-700 mt-1">หมายเหตุ AI: ${Pe(_.note)}</p>`:""}</div><div class="flex flex-wrap items-center gap-2"><span class="text-[11px] font-semibold px-2.5 py-1 rounded-lg ${_.duplicate?"bg-amber-100 text-amber-700":!_.event_date||!_.label?"bg-red-100 text-red-700":"bg-emerald-100 text-emerald-700"}">${_.duplicate?"รายการซ้ำ จะข้าม":!_.event_date||!_.label?"ข้อมูลไม่ครบ":"ผ่านการตรวจรูปแบบ"}</span><button type="button" class="wcal-preview-delete inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-bold text-rose-700 hover:bg-rose-100" data-wcal-preview-delete="${C}" title="นำรายการนี้ออกจากชุดนำเข้า">🗑️ ลบรายการนี้</button></div></div></div>`).join("")};h.addEventListener("click",i=>{const j=i.target.closest("[data-wcal-preview-delete]");if(!j)return;const _=Number(j.dataset.wcalPreviewDelete);!Number.isInteger(_)||!w[_]||(w.splice(_,1),$())}),o.querySelector("#wcal-ai-parse").onclick=()=>{a.classList.add("hidden");try{const i=JSON.parse(Cs(o.querySelector("#wcal-ai-json").value)),j=Array.isArray(i)?i:i.events??i.calendar_events??i.items??i.data;if(!Array.isArray(j)||!j.length)throw new Error("ไม่พบรายการ events ใน JSON");const _=Number(i.academic_year??e),C=Number(i.semester??s);if(_!==Number(e)||C!==Number(s))throw new Error(`JSON ระบุภาคเรียน ${C}/${_} แต่หน้าปัจจุบันคือ ${s}/${e}`);const T=i.source_title||i.title||"ปฏิทินปฏิบัติงาน";w=j.map(D=>({...Ci(D),source_title:T,source_revision:i.source_revision||"",source_document_name:i.source_document_name||""})),w.forEach(D=>{D.duplicate=t.some(q=>q.event_date===D.event_date&&String(q.label).trim().toLowerCase()===D.label.toLowerCase())}),m.classList.remove("hidden"),$(),o.dataset.sourceTitle=T,o.dataset.sourceRevision=i.source_revision||"",o.dataset.sourceDocumentName=i.source_document_name||""}catch(i){a.textContent=`อ่าน JSON ไม่สำเร็จ: ${i.message}`,a.classList.remove("hidden"),m.classList.add("hidden"),w=[],v.disabled=!0}},v.onclick=async()=>{var i;if(!v.disabled&&confirm(`ยืนยันนำเข้ากิจกรรม ${w.length} รายการในภาคเรียน ${s}/${e}?
รายการที่ซ้ำจะถูกข้าม และข้อมูลเดิมจะไม่ถูกเขียนทับ`)){v.disabled=!0,v.textContent="กำลังบันทึก...";try{const j=await l({academicYear:e,semester:s,sourceTitle:o.dataset.sourceTitle||"ปฏิทินปฏิบัติงาน",sourceRevision:o.dataset.sourceRevision||"",sourceDocumentName:o.dataset.sourceDocumentName||"",rawPayload:JSON.parse(Cs(o.querySelector("#wcal-ai-json").value)),events:w,createdByTeacherId:n==null?void 0:n.id});N(`นำเข้าสำเร็จ ${(j==null?void 0:j.inserted_count)??w.length} รายการ${j!=null&&j.skipped_count?` · ข้ามรายการซ้ำ ${j.skipped_count} รายการ`:""} ✅`,"success"),u(),await((i=window._reloadWorkCalendar)==null?void 0:i.call(window))}catch(j){N(`นำเข้าไม่สำเร็จ: ${j.message}`,"error"),v.disabled=!1,v.textContent="✅ ยืนยันนำเข้าปฏิทิน"}}}}async function Zr({manager:e=!1,teacher:s=null}={}){var T,D,q,y;const{getWorkCalendarEvents:t,getAcademicTerms:n,getSystemConfig:l,createWorkCalendarEvent:o,updateWorkCalendarEvent:p,deleteWorkCalendarEvent:r,replaceWorkCalendarItems:d,importWorkCalendarEvents:u}=await Se(async()=>{const{getWorkCalendarEvents:c,getAcademicTerms:g,getSystemConfig:k,createWorkCalendarEvent:b,updateWorkCalendarEvent:L,deleteWorkCalendarEvent:E,replaceWorkCalendarItems:B,importWorkCalendarEvents:H}=await import("./api-Bf4Tf4Cp.js");return{getWorkCalendarEvents:c,getAcademicTerms:g,getSystemConfig:k,createWorkCalendarEvent:b,updateWorkCalendarEvent:L,deleteWorkCalendarEvent:E,replaceWorkCalendarItems:B,importWorkCalendarEvents:H}},__vite__mapDeps([0,1,2,3,4]));Le(e?"work-calendar":"work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const a=await l().catch(()=>({})),m=Number(a.academicYear??a.academic_year??new Date().getFullYear()+543),h=Number(a.semester??1),v=[...await n().catch(()=>[]),{academic_year:m,semester:1},{academic_year:m,semester:2},{academic_year:m,semester:h,is_current:!0}].filter((c,g,k)=>k.findIndex(b=>Number(b.academic_year)===Number(c.academic_year)&&Number(b.semester)===Number(c.semester))===g).sort((c,g)=>Number(g.academic_year)-Number(c.academic_year)||Number(g.semester)-Number(c.semester));let w=m,$=h;const x=v.map(c=>`<option value="${Number(c.academic_year)}-${Number(c.semester)}" ${Number(c.academic_year)===w&&Number(c.semester)===$?"selected":""}>ภาคเรียนที่ ${Number(c.semester)}/${Number(c.academic_year)}${c.is_current?" (ปัจจุบัน)":""}</option>`).join("");_e(`<div class="animate-fade max-w-7xl mx-auto pb-8"><div class="flex flex-wrap items-start justify-between gap-3 mb-5"><div><p class="text-xs text-gray-400 mb-1">ปฏิทินทางการของโรงเรียน · แสดงตามเดือนและตารางกิจกรรม</p><div class="flex flex-wrap items-center gap-2"><select id="wcal-term" class="border border-indigo-200 bg-indigo-50 text-indigo-700 rounded-xl px-3 py-2 text-sm font-bold outline-none">${x}</select><span id="wcal-period" class="text-xs text-gray-500"></span></div></div>${e?'<div class="flex flex-wrap gap-2"><button id="wcal-ai-import" class="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold shadow-sm">🤖 นำเข้าจาก AI JSON</button><button id="wcal-create-btn" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm">＋ เพิ่มกิจกรรม</button></div>':""}</div>
    <div class="rounded-3xl border border-sky-100 bg-sky-50 p-4 sm:p-5 mb-5"><div class="flex flex-wrap items-start gap-3"><div class="text-2xl">📅</div><div class="flex-1 min-w-[240px]"><h2 class="font-extrabold text-sky-900">ปฏิทินการปฏิบัติงานโรงเรียน</h2><p class="text-xs text-sky-700 mt-1">รูปแบบนี้ยึดโครงสร้างปฏิทินฝ่ายวิชาการ: ปฏิทินรายเดือน กิจกรรม ผู้รับผิดชอบ สัปดาห์ และวันหยุดสำคัญ</p></div><span id="wcal-source-badge" class="text-[11px] font-semibold text-sky-700 bg-white/70 border border-sky-100 rounded-full px-3 py-1.5">ยังไม่ได้ระบุเอกสารต้นทาง</span></div></div>
    <div id="wcal-summary" class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5"></div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 mb-5"><div class="grid grid-cols-1 md:grid-cols-[1fr_180px_180px] gap-2"><input id="wcal-search" class="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200" placeholder="🔎 ค้นหากิจกรรม ผู้รับผิดชอบ หรือหมายเหตุ"><select id="wcal-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกประเภท</option>${Object.entries(rt).map(([c,g])=>`<option value="${c}">${g.icon} ${g.label}</option>`).join("")}</select><select id="wcal-month" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ทุกเดือน</option></select></div></div>
    <div id="wcal-body"><div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div></div>
  </div>${e?`<div id="wcal-modal" class="hidden fixed inset-0 z-[80] flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="wcal-modal-backdrop"></div><div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"><div class="p-5 sm:p-6"><h3 id="wcal-modal-title" class="text-lg font-bold text-gray-800 mb-4">เพิ่มกิจกรรม</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><label class="text-xs font-semibold text-gray-500">ประเภทกิจกรรม<select id="wcal-event-type" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(Kr).map(([c,g])=>`<option value="${c}">${g}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">หมวดหมู่<select id="wcal-event-category" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">${Object.entries(rt).map(([c,g])=>`<option value="${c}">${g.icon} ${g.label}</option>`).join("")}</select></label><label class="text-xs font-semibold text-gray-500">วันที่เริ่มต้น *<input id="wcal-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500">วันที่สิ้นสุด<input id="wcal-end-date" type="date" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">ชื่อกิจกรรม *<input id="wcal-label" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น เปิดเรียนภาคเรียนที่ 2/2569"></label><label class="text-xs font-semibold text-gray-500">ผู้รับผิดชอบ<input id="wcal-responsible" maxlength="180" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="ฝ่ายวิชาการ"></label><label class="text-xs font-semibold text-gray-500">สัปดาห์ที่<input id="wcal-week" type="number" min="1" max="99" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" placeholder="เช่น 1"></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">รายละเอียด<textarea id="wcal-desc" rows="2" maxlength="800" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="text-xs font-semibold text-gray-500 sm:col-span-2">หมายเหตุ/วันหยุด<textarea id="wcal-note" rows="2" maxlength="500" class="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 text-sm resize-y"></textarea></label><label class="sm:col-span-2 flex items-center gap-2 text-sm text-rose-700"><input id="wcal-holiday" type="checkbox" class="w-4 h-4"> ทำเครื่องหมายเป็นวันหยุด/วันสำคัญ</label></div><div class="mt-4"><p class="text-xs font-semibold text-gray-500 mb-2">Checklist เดิม (ถ้ามี)</p><div id="wcal-items-list" class="space-y-2"></div><button id="wcal-add-item" class="mt-2 text-indigo-600 text-sm font-semibold">＋ เพิ่มรายการ</button></div><div class="flex gap-3 mt-6"><button id="wcal-modal-cancel" class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600">ยกเลิก</button><button id="wcal-modal-save" class="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold">บันทึก</button></div></div></div></div>`:""}`);let i=[],j=null;const _=async()=>{const c=document.getElementById("wcal-body");c.innerHTML='<div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลด...</div>';try{i=(await t(w,$)).map(ki),C()}catch(g){c.innerHTML=`<div class="text-center py-12 text-red-500 text-sm">โหลดไม่สำเร็จ: ${Pe(g.message)}</div>`}},C=()=>{var O,W,Y;const c=String(((O=document.getElementById("wcal-search"))==null?void 0:O.value)??"").trim().toLowerCase(),g=((W=document.getElementById("wcal-category"))==null?void 0:W.value)??"",k=((Y=document.getElementById("wcal-month"))==null?void 0:Y.value)??"",b=i.filter(M=>{const V=[M.label,M.description,M.responsible_unit,M.note,M.holiday_note].join(" ").toLowerCase();return(!c||V.includes(c))&&(!g||M.category===g)&&(!k||Ra(M.event_date)===k||Ra(M.end_date||M.event_date)===k)}),L=Ei(b.length?b:i),E=document.getElementById("wcal-month"),B=E==null?void 0:E.value;E&&(E.innerHTML=`<option value="">ทุกเดือน</option>${L.map(M=>`<option value="${M}">${Pe(Jr(M))}</option>`).join("")}`,L.includes(B)?E.value=B:k&&(E.value=k));const H=document.getElementById("wcal-summary"),S=Ps(new Date),I=i.filter(M=>(M.end_date||M.event_date)>=S).length,R=i.filter(M=>M.category==="exam").length,F=i.filter(M=>M.is_holiday||M.category==="holiday").length;H.innerHTML=[["📋",i.length,"กิจกรรมทั้งหมด","bg-indigo-50 text-indigo-700"],["⏳",I,"กิจกรรมที่ยังไม่สิ้นสุด","bg-emerald-50 text-emerald-700"],["📝",R,"รายการสอบ","bg-violet-50 text-violet-700"],["🔴",F,"วันหยุด/วันสำคัญ","bg-rose-50 text-rose-700"]].map(([M,V,K,Q])=>`<div class="rounded-2xl border border-gray-100 bg-white shadow-sm px-4 py-3 flex items-center gap-3"><span class="w-10 h-10 rounded-xl ${Q} flex items-center justify-center text-lg">${M}</span><div><p class="text-xl font-extrabold text-gray-800">${V}</p><p class="text-[11px] text-gray-500">${K}</p></div></div>`).join("");const A=i.find(M=>M.source_document_name||M.source_revision),U=document.getElementById("wcal-source-badge");U&&(U.textContent=A?`📄 ${A.source_document_name||"เอกสารฝ่ายวิชาการ"}${A.source_revision?` · ฉบับ ${A.source_revision}`:""}`:"📝 เพิ่มด้วยมือ/ข้อมูลเดิม");const z=document.getElementById("wcal-period");z&&(z.textContent=i.length?`${pt(i[0].event_date,!0)} – ${pt(i.at(-1).end_date||i.at(-1).event_date,!0)}`:"ยังไม่มีช่วงวันที่"),document.getElementById("wcal-body").innerHTML=b.length?`<div class="space-y-5">${L.map((M,V)=>Ti(M,b.filter(K=>Qr(K,M)),V,{manager:e})).join("")}</div>`:'<div class="rounded-3xl border border-dashed border-gray-200 bg-white text-center py-16 text-gray-400 text-sm">ไม่พบกิจกรรมตามตัวกรอง</div>'};if(window._reloadWorkCalendar=_,(T=document.getElementById("wcal-term"))==null||T.addEventListener("change",async c=>{const[g,k]=c.target.value.split("-").map(Number);w=g,$=k,await _()}),(D=document.getElementById("wcal-search"))==null||D.addEventListener("input",C),(q=document.getElementById("wcal-category"))==null||q.addEventListener("change",C),(y=document.getElementById("wcal-month"))==null||y.addEventListener("change",C),e){const c=b=>{const L=document.getElementById("wcal-items-list"),E=document.createElement("div");E.className="flex gap-2 items-center",E.innerHTML=`<input maxlength="150" value="${Pe(b)}" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm"><button class="wcal-remove-item text-gray-400 hover:text-rose-500">✕</button>`,E.querySelector("button").onclick=()=>E.remove(),L.appendChild(E)},g=()=>{document.getElementById("wcal-modal").classList.add("hidden"),j=null},k=b=>{j=(b==null?void 0:b.id)??null,document.getElementById("wcal-modal-title").textContent=b?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.getElementById("wcal-event-type").value=(b==null?void 0:b.event_type)??"other",document.getElementById("wcal-event-category").value=(b==null?void 0:b.category)??"other",document.getElementById("wcal-date").value=(b==null?void 0:b.event_date)??"",document.getElementById("wcal-end-date").value=(b==null?void 0:b.end_date)??"",document.getElementById("wcal-label").value=(b==null?void 0:b.label)??"",document.getElementById("wcal-responsible").value=(b==null?void 0:b.responsible_unit)??"",document.getElementById("wcal-week").value=(b==null?void 0:b.week_number)??"",document.getElementById("wcal-desc").value=(b==null?void 0:b.description)??"",document.getElementById("wcal-note").value=(b==null?void 0:b.holiday_note)??(b==null?void 0:b.note)??"",document.getElementById("wcal-holiday").checked=!!(b!=null&&b.is_holiday),document.getElementById("wcal-items-list").innerHTML="",((b==null?void 0:b.work_calendar_items)??[]).forEach(L=>c(L.item_label)),document.getElementById("wcal-modal").classList.remove("hidden")};document.getElementById("wcal-create-btn").onclick=()=>k(),document.getElementById("wcal-modal-cancel").onclick=g,document.getElementById("wcal-modal-backdrop").onclick=g,document.getElementById("wcal-add-item").onclick=()=>c(""),document.getElementById("wcal-body").addEventListener("click",async b=>{const L=b.target.closest(".wcal-edit-btn"),E=b.target.closest(".wcal-del-btn");if(L){const B=i.find(H=>Number(H.id)===Number(L.dataset.evId));B&&k(B)}if(E){const B=i.find(H=>Number(H.id)===Number(E.dataset.evId));if(!B||!confirm(`ลบ “${B.label}” ใช่ไหม?`))return;try{await r(B.id),N("ลบกิจกรรมแล้ว","success"),await _()}catch(H){N(`ลบไม่สำเร็จ: ${H.message}`,"error")}}}),document.getElementById("wcal-modal-save").onclick=async()=>{const b=document.getElementById("wcal-event-type").value,L=document.getElementById("wcal-event-category").value,E=document.getElementById("wcal-date").value,B=document.getElementById("wcal-end-date").value||null,H=document.getElementById("wcal-label").value.trim();if(!E||!H)return N("กรุณากรอกวันที่และชื่อกิจกรรม","warning");if(B&&B<E)return N("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");const S={eventType:b,eventDate:E,endDate:B,label:H,description:document.getElementById("wcal-desc").value.trim(),category:L,responsibleUnit:document.getElementById("wcal-responsible").value.trim(),weekNumber:Number(document.getElementById("wcal-week").value)||null,isHoliday:document.getElementById("wcal-holiday").checked,holidayNote:document.getElementById("wcal-note").value.trim()},I=document.getElementById("wcal-modal-save");I.disabled=!0,I.textContent="กำลังบันทึก...";try{let R;j?(R=await p(j,S),await d(j,[...document.querySelectorAll("#wcal-items-list input")].map(F=>F.value.trim()).filter(Boolean))):(R=await o({...S,academicYear:w,semester:$,createdByTeacherId:s==null?void 0:s.id}),await d(R.id,[...document.querySelectorAll("#wcal-items-list input")].map(F=>F.value.trim()).filter(Boolean))),g(),N("บันทึกกิจกรรมแล้ว","success"),await _()}catch(R){N(`บันทึกไม่สำเร็จ: ${R.message}`,"error")}finally{I.disabled=!1,I.textContent="บันทึก"}},document.getElementById("wcal-ai-import").onclick=()=>ji({academicYear:w,semester:$,events:i,teacher:s,importEvents:b=>u(b)})}await _()}async function Bi(){return Zr({manager:!1})}async function Xr(e){return Zr({manager:!0,teacher:e})}function qi(e){return e.filter(s=>s.category==="ศาสนา"||["AGM","AGMVOC"].includes(s.subject_group)).concat(e.filter(s=>!s.category&&!["AGM","AGMVOC","ACDMVOC"].includes(s.subject_group))).filter((s,t,n)=>n.findIndex(l=>l.id===s.id)===t)}async function en(){Le("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",_e(`<div class="max-w-4xl mx-auto animate-fade">
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
  </div>`);let e=[],s=[];try{[e,s]=await Promise.all([ct(),He()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}ta(e),document.getElementById("btn-add-rg").onclick=()=>tn(null,s,async()=>{const t=await ct();ta(t)})}function ta(e){const s=document.getElementById("rg-table-wrap");if(s){if(!e.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
    </table>`,s.querySelectorAll(".rg-edit").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,o=(await ct()).find(r=>r.id===n),p=await He();tn(o,p,async()=>{ta(await ct())})}}),s.querySelectorAll(".rg-del").forEach(t=>{t.onclick=async()=>{const n=+t.dataset.gid,l=t.dataset.name;if(confirm(`ลบกลุ่ม "${l}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const p=(await ct()).find(r=>r.id===n);p!=null&&p.leader_id&&await Ia(p.leader_id,null,"religion_subgroup_head"),await zn(n),N("ลบกลุ่มแล้ว","success"),ta(await ct())}catch(o){N("ลบไม่สำเร็จ: "+o.message,"error")}}})}}function tn(e,s,t){const n=!!e,l=document.createElement("div");l.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const o=[...s].sort((r,d)=>(r.full_name??"").localeCompare(d.full_name??"","th"));l.innerHTML=`
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
    </div>`,document.body.appendChild(l);const p=Pa({wrap:l.querySelector("#rg-leader-wrap"),teachers:o,value:(e==null?void 0:e.leader_id)??null});l.querySelector("#rg-modal-close").onclick=()=>l.remove(),l.querySelector("#rg-cancel").onclick=()=>l.remove(),l.querySelector("#rg-save").onclick=async()=>{const r=l.querySelector("#rg-name").value.trim();if(!r){N("กรุณาระบุชื่อกลุ่ม","error");return}const d=p.getValue(),u=(e==null?void 0:e.leader_id)??null,a=l.querySelector("#rg-save");a.disabled=!0,a.textContent="กำลังบันทึก...";try{n?(await Fn(e.id,{name:r,leader_id:d}),u&&u!==+d&&await Ia(u,null,"religion_subgroup_head")):await Un({name:r,leader_id:d}),d&&await Ia(+d,"religion_subgroup_head"),N(n?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),l.remove(),t()}catch(m){N("บันทึกไม่สำเร็จ: "+m.message,"error"),a.disabled=!1,a.textContent="บันทึก"}}}async function Ai(e){Le("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",_e(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let s=[],t=[];try{[s,t]=await Promise.all([ct(),He()])}catch{N("โหลดข้อมูลไม่สำเร็จ","error");return}const n=s.find(p=>p.leader_id===e.id),l=document.getElementById("mrg-content");if(!n){l.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const o=qi(t);await an(n,o)}async function an(e,s){const t=document.getElementById("mrg-content");let n=[];try{n=await Vn(e.id)}catch{N("โหลดสมาชิกไม่สำเร็จ","error");return}t.innerHTML=`
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
          ${n.map(l=>{var p;const o=l.teachers;return`
            <li class="px-5 py-3 flex items-center gap-3">
              ${o!=null&&o.image_url?`<img src="${o.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${te(((p=o==null?void 0:o.full_name)==null?void 0:p.charAt(0))??"?")}</div>`}
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
    </div>`,document.getElementById("btn-mrg-add").onclick=()=>Mi(e,s,n,async()=>{await an(e,s)})}function Mi(e,s,t,n){const l=document.createElement("div");l.className="fixed inset-0 z-[9000] bg-white flex flex-col",l.innerHTML=`
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
    </div>`,document.body.appendChild(l);const o=Oa({wrap:l.querySelector("#mrg-member-wrap"),chipsWrap:l.querySelector("#mrg-chips"),teachers:s,value:t.map(p=>p.teacher_id)});l.querySelector("#mrg-modal-close").onclick=()=>l.remove(),l.querySelector("#mrg-cancel").onclick=()=>l.remove(),l.querySelector("#mrg-save").onclick=async()=>{const p=o.getValue(),r=l.querySelector("#mrg-save");r.disabled=!0,r.textContent="กำลังบันทึก...";try{await Jn(e.id,p),l.remove(),await n(),Ni(e,s.filter(d=>p.includes(d.id)))}catch(d){N("บันทึกไม่สำเร็จ: "+d.message,"error"),r.disabled=!1,r.textContent="บันทึก"}}}function Ni(e,s){const t=document.createElement("div");t.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
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
    </div>`,document.body.appendChild(t),t.querySelector("#mrg-summary-close").onclick=()=>t.remove()}async function sn(){Le("subject-group-requests"),document.getElementById("page-title").textContent="คำขอย้ายกลุ่มวิชา";const e=o=>o?new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—",s=o=>o==="sasana"?"🕌 ศาสนา":"📖 สามัญ",t={pending:{label:"🕐 รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธแล้ว",cls:"bg-red-100 text-red-600"}};_e(`
  <div class="max-w-3xl mx-auto animate-fade space-y-4">
    <p class="text-xs text-gray-400">คำขอจากนักเรียนที่เห็นว่าวิชาบางวิชาถูกจัดกลุ่มสามัญ/ศาสนาผิดหลักสูตร — อนุมัติแล้วจะมีผลเฉพาะห้องที่คุณเลือกเท่านั้น</p>
    <div class="flex items-center gap-2">
      <button id="sgr-tab-pending" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-tab="pending">รอตรวจสอบ</button>
      <button id="sgr-tab-all" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-500" data-tab="all">ทั้งหมด</button>
    </div>
    <div id="sgr-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>
    </div>
  </div>`);let n="pending";const l=async()=>{document.getElementById("sgr-list").innerHTML='<div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>';const o=n==="pending"?await Bs().catch(()=>[]):await _o().catch(()=>[]),p=document.getElementById("sgr-list");if(!o.length){p.innerHTML=`<div class="text-center py-16 text-gray-300"><p class="text-4xl mb-3">🔀</p><p class="text-sm">${n==="pending"?"ไม่มีคำขอรอตรวจสอบ":"ยังไม่มีคำขอ"}</p></div>`;return}p.innerHTML=o.map(r=>{var u,a;const d=t[r.status]??t.pending;return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="font-semibold text-sm text-gray-800 truncate">${Oe(r.subject_name??"—")} <span class="text-xs text-gray-400 font-mono">${Oe(r.subject_code??"")}</span></p>
            <p class="text-xs text-gray-500 mt-0.5">${Oe(((u=r.students)==null?void 0:u.full_name)??"—")} · ${Oe(((a=r.students)==null?void 0:a.student_code)??"")} · ${Oe(r.class_level??"")}</p>
            <p class="text-xs text-gray-500 mt-1">${s(r.current_group)} → ${s(r.requested_group)}</p>
            <p class="text-[11px] text-gray-400 mt-1">${e(r.created_at)}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${d.cls}">${d.label}</span>
            ${r.status==="pending"?`<button class="sgr-review-btn text-xs font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50" data-id="${r.id}">ตรวจสอบ</button>`:""}
          </div>
        </div>
      </div>`}).join(""),p.querySelectorAll(".sgr-review-btn").forEach(r=>{r.addEventListener("click",()=>Di(o.find(d=>d.id===Number(r.dataset.id)),l))})};document.querySelectorAll(".sgr-tab").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.tab,document.querySelectorAll(".sgr-tab").forEach(p=>{p.className=`sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold ${p.dataset.tab===n?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}`}),l()})}),await l()}function Di(e,s){var l;if(!e)return;const t=document.createElement("div");t.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">🔀 ตรวจสอบคำขอย้ายกลุ่มวิชา</h3>
        <p class="text-xs text-gray-500 mt-1">${Oe(((l=e.students)==null?void 0:l.full_name)??"—")} ขอย้าย "${Oe(e.subject_name??"")}" ${e.current_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"} → ${e.requested_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"}</p>
      </div>
      <div class="flex-1 overflow-y-auto px-5 py-4">
        <p class="text-xs text-gray-500 mb-2">เลือกห้องในระดับชั้น <b>${Oe(e.class_level??"")}</b> ที่จะให้มีผลจริง (ค่าเริ่มต้นเลือกทุกห้องที่สอนวิชารหัสเดียวกันไว้ให้แล้ว ปรับได้อิสระ):</p>
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
    </div>`,document.body.appendChild(t);const n=()=>t.remove();t.querySelector("#sgr-cancel").addEventListener("click",n),qo(e.id).then(o=>{const p=t.querySelector("#sgr-candidates");if(!o.length){p.innerHTML='<p class="text-center text-gray-400 text-sm py-4">ไม่พบห้องที่สอนวิชารหัสนี้ในระดับชั้นเดียวกัน</p>';return}p.innerHTML=o.map(r=>`
      <label class="flex items-center gap-2.5 border border-gray-100 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-50">
        <input type="checkbox" class="sgr-candidate-cb" value="${r.class_id}" checked />
        <span class="flex-1 text-sm text-gray-700">${Oe(r.class_name??"")}</span>
        <span class="text-[11px] text-gray-400">${r.student_count} คน · ${r.current_group==="sasana"?"🕌":"📖"}</span>
      </label>`).join("")}).catch(()=>{t.querySelector("#sgr-candidates").innerHTML='<p class="text-center text-red-400 text-sm py-4">โหลดรายชื่อห้องไม่สำเร็จ</p>'}),t.querySelector("#sgr-approve").addEventListener("click",async o=>{var r;const p=[...t.querySelectorAll(".sgr-candidate-cb:checked")].map(d=>Number(d.value));if(!p.length){N("เลือกอย่างน้อย 1 ห้อง","warning");return}if(confirm(`อนุมัติย้ายกลุ่มให้ ${p.length} ห้องที่เลือก?`)){o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await Ao(e.id,p),N("อนุมัติแล้ว ✅","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+fe(d),"error"),o.target.disabled=!1,o.target.textContent="อนุมัติที่เลือก"}}}),t.querySelector("#sgr-reject").addEventListener("click",async o=>{var r;if(!confirm("ปฏิเสธคำขอนี้?"))return;const p=t.querySelector("#sgr-comment").value.trim();o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await Mo(e.id,p),N("ปฏิเสธคำขอแล้ว","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),s()}catch(d){N("บันทึกไม่สำเร็จ: "+fe(d),"error"),o.target.disabled=!1,o.target.textContent="ปฏิเสธ"}})}async function rn(){Le("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",_e(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let e=[],s=[],t="manage",n="สามัญ",l="",o="",p="";const r=c=>{if(!c)return null;const g=c.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return g?g[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},d=c=>c?/^(PR|อก\.|อป\.)/i.test(c)?"ศาสนา":/^ปวช\./i.test(c)?"ปวช":"สามัญ":"สามัญ",u={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},a=c=>e.map(g=>g.class_name).filter(g=>g&&d(g)===c).sort((g,k)=>g.localeCompare(k,"th")),m=c=>{const g=a(c),k=[...new Set(g.map(L=>r(L)).filter(Boolean))],b=u[c]||[];return[...new Set([...b,...k])].sort((L,E)=>L.localeCompare(E,"th"))},h=async()=>{const[c,g,k]=await Promise.all([sa(),St(),Gn()]);s=g,e=[...new Set(c.map(L=>L.class_name).filter(Boolean))].map(L=>k.find(B=>B.class_name===L)||{class_name:L,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},f=c=>s.find(g=>g.id===c),v=()=>{let c=document.getElementById("hc-print-roster-styles");c||(c=document.createElement("style"),c.id="hc-print-roster-styles",document.head.appendChild(c)),c.textContent=`
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
    `;const g=document.createElement("div");g.id="hc-print-roster-area",document.body.appendChild(g);const k=e.filter(E=>!(d(E.class_name)!==n||l&&r(E.class_name)!==l||o&&E.class_name!==o)).sort((E,B)=>E.class_name.localeCompare(B.class_name,"th"));let b="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";l&&(b+=` ระดับชั้น ${l}`),o&&(b+=` ห้อง ${o}`);const L=k.map((E,B)=>{const H=f(E.head_student_id),S=f(E.vice_head_student_id),I=H!=null&&H.image_url?`<img src="${H.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',R=S!=null&&S.image_url?`<img src="${S.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',F=H?`<b>${te(H.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${H.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',A=S?`<b>${te(S.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${S.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${B+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${te(E.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${I}
              <div>${F}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${R}
              <div>${A}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${te(E.notes??"")}</td>
        </tr>
      `}).join("");g.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${b}</div>
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
    `,g.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},g.querySelector("#pr-btn-close-preview").onclick=()=>{g.remove()}},w=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${t==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,$=()=>{const c=p.trim().toLowerCase(),g=e.filter(k=>!(d(k.class_name)!==n||c&&!k.class_name.toLowerCase().includes(c))).sort((k,b)=>k.class_name.localeCompare(b.class_name,"th"));return g.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':g.map(k=>{const b=f(k.head_student_id),L=f(k.vice_head_student_id),E=b!=null&&b.image_url?`<img src="${b.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',B=L!=null&&L.image_url?`<img src="${L.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${te(k.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${n}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${E}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${b?te(b.full_name):"— ยังไม่ระบุ —"}</span>
                  ${b?`<span class="text-xs text-gray-400 font-mono">รหัส: ${b.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${B}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${L?te(L.full_name):"— ยังไม่ระบุ —"}</span>
                  ${L?`<span class="text-xs text-gray-400 font-mono">รหัส: ${L.student_code}</span>`:""}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${k.head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
              <p>เกียรติบัตรรอง: ${k.vice_head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${te(k.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},x=()=>{const c=e.filter(g=>!(d(g.class_name)!==n||l&&r(g.class_name)!==l||o&&g.class_name!==o)).sort((g,k)=>g.class_name.localeCompare(k.class_name,"th"));return c.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':c.map((g,k)=>{const b=f(g.head_student_id),L=f(g.vice_head_student_id),E=b!=null&&b.image_url?`<img src="${b.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',B=L!=null&&L.image_url?`<img src="${L.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${k+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${te(g.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${E}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${b?te(b.full_name):"— ยังไม่ระบุ —"}</p>
                ${b?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${b.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${B}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${L?te(L.full_name):"— ยังไม่ระบุ —"}</p>
                ${L?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${L.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${te(g.notes??"")}
          </td>
        </tr>
      `}).join("")},i=()=>{const c=e.filter(g=>!(d(g.class_name)!==n||l&&r(g.class_name)!==l||o&&g.class_name!==o)).length;t==="manage"?_e(`
        <div class="space-y-5 animate-fade">
          ${w()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${n==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${n==="ศาสนา"?"selected":""}>ศาสนา</option>
                <option value="ปวช" ${n==="ปวช"?"selected":""}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${te(p)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${c}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${$()}
          </div>
        </div>
      `):(_e(`
        <div class="space-y-5 animate-fade">
          ${w()}

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
                  ${x()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `),j()),C()},j=()=>{const c=document.getElementById("pr-filter-level");if(!c)return;const g=m(n);c.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${g.map(k=>`<option value="${k}" ${k===l?"selected":""}>${k}</option>`).join("")}
    `,_()},_=()=>{const c=document.getElementById("pr-filter-class");if(!c)return;const k=a(n).filter(b=>l?r(b)===l:!0);c.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${k.length} ห้อง) --</option>
      ${k.map(b=>`<option value="${b}" ${b===o?"selected":""}>ห้อง ${b}</option>`).join("")}
    `},C=()=>{var c,g,k,b,L,E,B,H,S;(c=document.getElementById("tab-manage"))==null||c.addEventListener("click",()=>{t="manage",i()}),(g=document.getElementById("tab-print"))==null||g.addEventListener("click",()=>{t="print",i()}),(k=document.getElementById("hc-filter-category"))==null||k.addEventListener("change",I=>{n=I.target.value,i()}),(b=document.getElementById("hc-search-classes"))==null||b.addEventListener("input",I=>{p=I.target.value;const R=document.getElementById("hc-cards-grid");R&&(R.innerHTML=$()),D()}),D(),(L=document.getElementById("pr-filter-category"))==null||L.addEventListener("change",I=>{n=I.target.value,l="",o="",j(),T()}),(E=document.getElementById("pr-filter-level"))==null||E.addEventListener("change",I=>{l=I.target.value,o="",_(),T()}),(B=document.getElementById("pr-filter-class"))==null||B.addEventListener("change",I=>{o=I.target.value,T()}),(H=document.getElementById("btn-print-leaders-roster"))==null||H.addEventListener("click",v),(S=document.getElementById("btn-cert-settings"))==null||S.addEventListener("click",q)},T=()=>{const c=document.getElementById("pr-table-body");c&&(c.innerHTML=x());const g=e.filter(b=>!(d(b.class_name)!==n||l&&r(b.class_name)!==l||o&&b.class_name!==o)).length,k=document.getElementById("btn-print-leaders-roster");k&&(k.disabled=g===0,k.textContent=`🖨️ พิมพ์ใบรายชื่อ (${g})`)},D=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.room,k=e.find(b=>b.class_name===g);k&&y(k)})})},q=()=>{const c=document.createElement("div");c.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const g=e.some(B=>B.show_cert);c.innerHTML=`
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
    `,document.body.appendChild(c);const k=c.querySelector("#csm-global-toggle"),b=c.querySelector("#csm-status-text"),L=B=>{b.textContent=B?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};L(g),k.addEventListener("change",async()=>{const B=k.checked;k.disabled=!0,b.textContent="กำลังบันทึก...";try{await Xn(B),e.forEach(H=>{H.show_cert=B}),L(B),N(B?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(H){N("บันทึกผิดพลาด: "+H.message,"error"),k.checked=!B,L(!B)}finally{k.disabled=!1}});const E=()=>c.remove();c.querySelector("#csm-modal-close").onclick=E,c.querySelector("#csm-btn-close").onclick=E},y=c=>{const g=document.createElement("div");g.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let k=f(c.head_student_id),b=f(c.vice_head_student_id);g.innerHTML=`
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
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(k==null?void 0:k.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${k?`
                ${k.image_url?`<img src="${k.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${te(k.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${k.student_code} · ห้อง ${k.main_room||"—"}</p>
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
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(b==null?void 0:b.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${b?`
                ${b.image_url?`<img src="${b.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${te(b.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${b.student_code} · ห้อง ${b.main_room||"—"}</p>
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
    `,document.body.appendChild(g);let L=c.head_student_id,E=c.vice_head_student_id;const B=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},H=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},S=A=>{const U=document.getElementById("ld-head-card");if(A){L=A.id;const z=A.image_url?`<img src="${A.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';U.innerHTML=`
          ${z}
          <div>
            <p class="font-bold text-gray-800">${te(A.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${A.student_code} · ห้อง ${A.main_room||"—"}</p>
          </div>
        `}else L=null,U.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},I=A=>{const U=document.getElementById("ld-vice-card");if(A){E=A.id;const z=A.image_url?`<img src="${A.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';U.innerHTML=`
          ${z}
          <div>
            <p class="font-bold text-gray-800">${te(A.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${A.student_code} · ห้อง ${A.main_room||"—"}</p>
          </div>
        `}else E=null,U.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async A=>{const U=A.target.value.trim();if(U.length===5){B();const z=await as(U).catch(()=>null);S(z)}else U.length===0&&(L=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async A=>{const U=A.target.value.trim();if(U.length===5){H();const z=await as(U).catch(()=>null);I(z)}else U.length===0&&(E=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const R=async(A,U)=>{const z=A.files[0];if(z){U.disabled=!0,U.value="กำลังอัปโหลดไฟล์...";try{const O=z.name.split(".").pop(),W=`certificates/${c.id}/${A.id}-${Date.now()}.${O}`;let Y=z;z.type.startsWith("image/")&&(Y=await sl(z,{maxWidth:1600,quality:.88}));const{error:M}=await ie.storage.from("system-assets").upload(W,Y,{upsert:!0,contentType:z.type});if(M)throw M;const{data:V}=ie.storage.from("system-assets").getPublicUrl(W);U.value=V.publicUrl}catch(O){N("อัปโหลดล้มเหลว: "+O.message,"error"),U.value=""}finally{U.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const F=()=>g.remove();document.getElementById("ld-modal-close").onclick=F,document.getElementById("ld-btn-cancel").onclick=F,document.getElementById("ld-btn-save").onclick=async()=>{const A=document.getElementById("ld-btn-save");A.disabled=!0,A.textContent="กำลังบันทึก...";const U=document.getElementById("ld-head-cert-in").value.trim(),z=document.getElementById("ld-vice-cert-in").value.trim(),O=document.getElementById("ld-notes-in").value.trim();try{await oo(c.class_name,L,E,U,z,O),c.head_student_id=L,c.vice_head_student_id=E,c.head_cert_url=U,c.vice_head_cert_url=z,c.notes=O,N("บันทึกข้อมูลเรียบร้อยแล้ว","success"),F(),i()}catch(W){N("เกิดข้อผิดพลาด: "+W.message,"error"),A.disabled=!1,A.textContent="บันทึกข้อมูล"}}};await h(),i()}const oc=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:qr,renderAnnouncements:zr,renderAutoscaleHistory:Fr,renderClasses:Ya,renderClassroomLeaders:rn,renderClassroomsAdmin:Mr,renderCouncilRepNominationSummary:Gr,renderCurriculum:wt,renderDepartments:kr,renderDeptTable:ca,renderDonations:Wr,renderFeedbackAdmin:Yr,renderHolidays:Lr,renderHomeroom:Sr,renderHouseColors:Vr,renderImport:Cr,renderLifeSkillAdmin:Tr,renderMyReligionGroup:Ai,renderOverview:Ha,renderPayments:Ir,renderPeriods:ua,renderPrayerAdmin:Br,renderReadingAdmin:jr,renderRegisteredTeachers:Xt,renderReligionGroups:en,renderRolePermissions:Ur,renderScoreColConfig:Er,renderSettings:Ka,renderStudents:$r,renderSubjectGroupRequests:sn,renderSubjectTable:Ja,renderSubjects:kt,renderSupervisorAnnouncements:wi,renderTeacherTable:Nt,renderTeachers:_r,renderUsageStats:Ar,renderWorkCalendar:Xr,renderWorkCalendarView:Bi},Symbol.toStringTag,{value:"Module"}));export{Gr as A,rn as B,sn as C,Yr as D,Wr as E,br as F,dt as G,lt as H,gr as I,Ed as J,Ge as K,fd as L,Vr as M,Ur as N,Xr as O,Ba as P,Fr as Q,zr as R,oc as S,en as a,Mr as b,Ar as c,qr as d,Cr as e,Ka as f,Br as g,jr as h,Tr as i,Ir as j,Lr as k,Xt as l,Er as m,Sr as n,ua as o,wt as p,kr as q,kt as r,$r as s,Ya as t,_r as u,md as v,Ha as w,Nt as x,Ja as y,ca as z};
