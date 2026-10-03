const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-J-Ak1T-Y.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/tutorial-C3EpULMT.js","assets/teacher-views-utils-D4PCqVsX.js","assets/ui-BRupvAcB.js","assets/teacher-views-donor-chat-CqRXptr9.js","assets/storage-CuUjCgvI.js","assets/teacher-KTKXfqj4.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sync-Bgbsg-ec.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-DGb4Ysbu.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/academic-term-switcher-BnvBvx15.js","assets/sports-portals.js_v_10.22-kVNs_U_9.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-DtUo0XvO.js","assets/teacher-views-classes-DL4zHYyC.js","assets/pp5-doc-x5ykYQ5S.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-grades-BZQUk4FN.js","assets/score-qr-scanner-VY_3enml.js","assets/teacher-views-attendance-B8qX3FnK.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-certificates-h1tZX8oq.js","assets/certificate-engine-CN0kp0dY.js","assets/certificate-editor-CPm5WZt-.js","assets/student-views-BUKOlkJv.js","assets/student-api-CjEjxwy9.js","assets/quiz-api-BIDUVPR5.js"])))=>i.map(i=>d[i]);
import{a as D,g as me,_ as he,d as Ta,i as br,s as Za,b as ct,j as ya,k as es,l as fa}from"./ui-BRupvAcB.js";import{getExecClassOverview as yr,getDepartments as Xe,getSystemConfig as qe,getTeachers as Ne,getLeavePermissionDashboard as fr,getPendingSubjectGroupRequests as ts,getAllAppFeedback as as,getAllPaymentRequests as Ge,deleteTeacher as hr,getMasterSubjects as Pt,deleteSubject as vr,deleteDepartment as wr,deletePeriod as _r,updateTeacher as $r,createTeacher as kr,updateDepartment as Er,createDepartment as Sr,upsertPeriod as Lr,upsertHoliday as Cr,deleteHoliday as Ir,getPeriods as Tr,getCurriculumStandards as Br,updateCurriculumStandard as jr,createCurriculumStandard as qr,importCurriculumStandards as Ar,deleteCurriculumStandard as Mr,getClasses as Ot,createSubject as Dr,updateSystemConfig as _e,deleteClass as ss,getUniqueRooms as Hr,getUniqueReligionRooms as rs,deleteHomeroomTeacher as Nr,getHomeroomTeachers as da,getStudents as ut,deleteStudent as Rr,updateStudent as Pr,getClassrooms as Ba,getScoreColumnConfig as Or,upsertScoreColumnConfig as zr,getReligionGroups as tt,getSchoolHolidaysFull as Fr,updateClassroom as Ur,createClassroom as Vr,getLifeSkillColumns as Gr,getReadingScoreColumns as Wr,getHouseGroups as Yr,updateTeacherPosition as ia,deleteReligionGroup as Kr,updateReligionGroup as Qr,createReligionGroup as Jr,getReligionGroupMembers as Xr,getClassroomLeaders as Zr,deleteClassroom as en,fillLifeSkillScoresToClassScores as tn,fillPrayerScoresToReligionClassScores as an,assignStudentsHouseColor as ja,setReligionGroupMembers as sn,getAllReadingScores as rn,deleteReadingScoreColumn as nn,updateAllClassroomCertsToggle as on,getAllLifeSkillScores as ln,deleteLifeSkillColumn as dn,updateReadingScoreColumn as cn,createReadingScoreColumn as pn,getStudentsByReligionRoom as un,getPrayerRecordsByRoom as mn,getStudentByCode as qa,updateClassroomLeaders as xn,updateLifeSkillColumn as gn,createLifeSkillColumn as bn,autoEnrollStudentsByRoom as yn,getAcademicTerms as fn,getTeachersWithPositions as hn,previewNewSemester as vn,startNewSemester as wn,getScheduleTeacherIds as _n,mergeTeacherAccounts as $n,unlinkTeacherAccount as kn,getStats as En,getAllCouncilRepNominations as Sn,getRolePermissions as Ln,saveRolePermission as Cn,getAllAnnouncements as ns,getUsageStats as In,reviewPaymentRequest as Lt,approveTeacherQuota as Kt,getAllSubjectGroupRequests as Tn,setFeedbackRead as Aa,setFeedbackCategory as Bn,deleteAppFeedback as jn,advisorResetStudentPassword as qn,markStudentPasswordResetNotice as An,setFeedbackStatusReply as Ma,updateAnnouncement as Qt,createAnnouncement as Jt,getAnnouncementCommentsBulk as Mn,deleteAnnouncement as Dn,getPaymentSlipViewUrl as Hn,getPrayerMonitoringData as Nn,getLifeSkillMonitoringData as Rn,getReadingMonitoringData as Pn,getCandidateClassesForGroupRequest as On,approveSubjectGroupRequest as zn,rejectSubjectGroupRequest as Fn,notifyFeedbackReply as Un,getAnnouncementComments as Vn,deleteAnnouncementComment as Gn,assignHomeroomTeacher as os,savePrayerCellAdmin as Wn}from"./api-J-Ak1T-Y.js";import{r as Yn}from"./leave-monitor.js_v_10.18-HBhfoKqd.js";import{s as se}from"./supabase-BV-W2lsh.js";import{DEFAULT_SUBJECT_SYNC_COLUMNS as Xt,DEFAULT_SUBJECT_SYNC_KEY_FIELD as Da,DEFAULT_SUBJECT_SYNC_TAB as Zt,DEFAULT_SUBJECT_SYNC_SHEET_ID as Kn,SUBJECT_SYNC_COLUMNS as Ha,syncSubjectCatalog as Qn,COPY_TEMPLATE_CONFIG as Jn,syncStudentsFromSheetNow as Xn}from"./sync-Bgbsg-ec.js";import{o as ls}from"./print-overlay-BVfxEd6n.js";import{_dateInputValue as Zn,applyReadingGradesFromConfig as Na,_readingGrade as ds,READING_GRADES as ot,_htmlEsc as Oe}from"./teacher-views-utils-D4PCqVsX.js";import{r as eo,a as to,b as ao,c as is,d as so}from"./teacher-views-classes-DL4zHYyC.js";import{renderCourseForm as ro}from"./teacher-views-CWNu-rJ1.js";import"./browser-JP79f-a9.js";import{uploadShirtDesignHtml as no,uploadShirtDesignColorImage as oo,uploadTeacherPhoto as lo,uploadDeptAsset as Ra,uploadAnnouncementImage as cs,compressImage as io,uploadStickerPng as co,uploadSystemAsset as po}from"./storage-CuUjCgvI.js";import"./teacher-views-grades-BZQUk4FN.js";import{n as Pa,d as uo,s as mo,a as xo,W as go}from"./workload-scheduler-C9WpzjbH.js";import{i as bo,a as yo,p as fo,b as ho}from"./import-CWvnWIc3.js";import{a as ps}from"./theme-qDnPEUQn.js";import{f as vo}from"./leave-time-CrS9gT63.js";import{b as wo}from"./anti-pull-refresh-BGrI1pMY.js";import{o as _o}from"./azizgames-modal-CZNvwg6f.js";import{A as $o,o as ko}from"./academic-term-switcher-BnvBvx15.js";import{r as Eo}from"./sports-awards-admin-6oCPrlSb.js";import{getEffectiveUser as us,getEffectiveProfileId as ms}from"./impersonation-0xVfgYVY.js";const So=["ci_micro","ci_small","ci_medium"],Lo={ci_micro:1,ci_small:2,ci_medium:3},Co={ci_micro:"Micro",ci_small:"Small",ci_medium:"Medium"},Io=7*60*60*1e3,To=/^\d{4}-\d{2}-\d{2}$/,Oa=/^(?:([01]\d|2[0-3]):([0-5]\d)|24:00)$/,qt=e=>So.includes(e),za=e=>To.test(String(e??""))&&!Number.isNaN(Date.parse(`${e}T00:00:00Z`))&&new Date(`${e}T00:00:00Z`).toISOString().slice(0,10)===e,At=e=>e==="24:00"?1440:Number(e.slice(0,2))*60+Number(e.slice(3)),xs=e=>new Date(`${e}T00:00:00Z`),gs=e=>e.toISOString().slice(0,10),Bo=(e,a)=>{const s=xs(e);return s.setUTCDate(s.getUTCDate()+a),gs(s)},Fa=e=>xs(e).getUTCDay(),kt=e=>Co[e]??e,Mt=e=>Lo[e]??0;function jo(e){var s;if(!e||e.schemaVersion!==1)return e;const a=[];for(const n of Array.isArray(e.periods)?e.periods:[])for(let l=0;l<7;l+=1){const o=(s=n.days)==null?void 0:s[l];o!=null&&o.enabled&&a.push({id:`legacy-${a.length+1}`,startDate:n.startDate,endDate:n.endDate,days:[l],start:o.start,end:o.end,targetTier:"ci_medium",label:"ช่วงเดิมจากตาราง Medium"})}return{schemaVersion:2,enabled:!!e.enabled,timezone:"Asia/Bangkok",defaultTier:"ci_micro",guardrail:e.guardrail,rules:a}}function qo(e){const a=jo(e);return!a||typeof a!="object"||a.schemaVersion!==2?a:{schemaVersion:2,enabled:!!a.enabled,timezone:a.timezone||"Asia/Bangkok",defaultTier:qt(a.defaultTier)?a.defaultTier:"ci_micro",guardrail:a.guardrail,rules:(Array.isArray(a.rules)?a.rules:[]).map((s,n)=>({id:s.id||`rule-${n+1}`,startDate:s.startDate,endDate:s.endDate,days:[...new Set((Array.isArray(s.days)?s.days:[]).map(Number))],start:s.start,end:s.end,targetTier:qt(s.targetTier)?s.targetTier:"ci_micro",label:String(s.label??"")}))}}function We(e){const a=qo(e);if(!a||a.schemaVersion!==2||typeof a.enabled!="boolean"||!Array.isArray(a.rules))throw new Error("รูปแบบตารางเวลาไม่ถูกต้อง");if(!qt(a.defaultTier))throw new Error("ระดับเครื่องเริ่มต้นไม่ถูกต้อง");if(!["Asia/Bangkok"].includes(a.timezone))throw new Error("โซนเวลาต้องเป็น Asia/Bangkok");if(a.rules.length>200)throw new Error("เพิ่มช่วงเวลาได้ไม่เกิน 200 ช่วง");for(const s of a.rules){if(!za(s.startDate)||!za(s.endDate)||s.startDate>s.endDate)throw new Error("กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง");if(!Array.isArray(s.days)||!s.days.length||s.days.some(n=>!Number.isInteger(n)||n<0||n>6))throw new Error("กรุณาเลือกวันอย่างน้อยหนึ่งวัน");if(!Oa.test(s.start)||!Oa.test(s.end)||At(s.start)===At(s.end))throw new Error("เวลาเริ่มและเวลาสิ้นสุดต้องถูกต้องและไม่เท่ากัน");if(!qt(s.targetTier))throw new Error("ระดับเครื่องในช่วงเวลาไม่ถูกต้อง")}if(a.enabled&&!a.rules.length)throw new Error("กรุณากำหนดอย่างน้อยหนึ่งช่วงเวลาก่อนเปิดใช้งาน");return a}function Ao(e,a){const s=Fa(a),n=Bo(a,-1),l=Fa(n),o=[];for(const b of e.rules){const r=At(b.start),u=At(b.end);if(r<u){a>=b.startDate&&a<=b.endDate&&b.days.includes(s)&&o.push({start:r,end:u,targetTier:b.targetTier,id:b.id});continue}a>=b.startDate&&a<=b.endDate&&b.days.includes(s)&&o.push({start:r,end:1440,targetTier:b.targetTier,id:b.id}),n>=b.startDate&&n<=b.endDate&&b.days.includes(l)&&o.push({start:0,end:u,targetTier:b.targetTier,id:b.id})}return o.filter(b=>b.end>b.start)}function ha(e,a){const s=We(e),n=new Set([0,1440]),l=Ao(s,a);for(const r of l)n.add(r.start),n.add(r.end);const o=[...n].sort((r,u)=>r-u),b=[];for(let r=0;r<o.length-1;r+=1){const u=o[r],h=o[r+1],t=u+(h-u)/2,w=l.filter(L=>t>=L.start&&t<L.end).reduce((L,v)=>Mt(v.targetTier)>Mt(L)?v.targetTier:L,s.defaultTier),c=b[b.length-1];(c==null?void 0:c.targetTier)===w&&c.end===u?c.end=h:b.push({start:u,end:h,targetTier:w})}return b}function Mo(e,a=new Date){var b;const s=We(e);if(!s.enabled)return null;const n=new Date(a.getTime()+Io),l=gs(n),o=n.getUTCHours()*60+n.getUTCMinutes();return((b=ha(s,l).find(r=>o>=r.start&&o<r.end))==null?void 0:b.targetTier)??s.defaultTier}const Do=()=>({schemaVersion:2,enabled:!1,timezone:"Asia/Bangkok",defaultTier:"ci_micro",rules:[]}),Ct={minimumMediumHoldMinutes:60,minimumSmallHoldMinutes:30,healthyStreakRequired:3,recoveryLockMinutes:60};function Ua(e={}){const a=(s,n,l,o)=>{const b=Number(s);return Number.isFinite(b)?Math.max(l,Math.min(o,b)):n};return{minimumMediumHoldMinutes:a(e.minimumMediumHoldMinutes,Ct.minimumMediumHoldMinutes,0,24*60),minimumSmallHoldMinutes:a(e.minimumSmallHoldMinutes,Ct.minimumSmallHoldMinutes,0,24*60),healthyStreakRequired:Math.round(a(e.healthyStreakRequired,Ct.healthyStreakRequired,1,12)),recoveryLockMinutes:a(e.recoveryLockMinutes,Ct.recoveryLockMinutes,0,24*60)}}const zt={ci_micro:.01344,ci_small:.0206,ci_medium:.0822},bs=(e,a)=>{const s=new Date(e.getTime());return s.setUTCDate(s.getUTCDate()+a),s},ys=e=>e.toISOString().slice(0,10);function fs(){return Object.fromEntries(Object.keys(zt).map(e=>[e,0]))}function Ho(e,a){const s=fs();for(const o of ha(e,ys(a)))s[o.targetTier]+=o.end-o.start;const n=Object.fromEntries(Object.entries(s).map(([o,b])=>[o,b/60])),l=Object.entries(n).reduce((o,[b,r])=>o+r*zt[b],0);return{...n,tierHours:n,tierMinutes:s,usd:l,mediumHours:n.ci_medium,smallHours:n.ci_small,microHours:n.ci_micro}}function ea(e,a,s){const n={usd:0,days:s,tierHours:fs()};for(let l=0;l<s;l+=1){const o=Ho(e,bs(a,l));n.usd+=o.usd;for(const b of Object.keys(n.tierHours))n.tierHours[b]+=o.tierHours[b]}return{...n,mediumHours:n.tierHours.ci_medium,smallHours:n.tierHours.ci_small,microHours:n.tierHours.ci_micro}}function No(e,a){const s=We(e),n=new Date(`${a}T00:00:00Z`);if(Number.isNaN(n.getTime())||ys(n)!==a)throw new Error("วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง");const l=bs(n,-((n.getUTCDay()+6)%7)),o=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1)),b=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0)).getUTCDate(),r={day:ea(s,n,1),week:ea(s,l,7),month:ea(s,o,b)};return r.defaultTier=s.defaultTier,r.defaultTierLabel=kt(s.defaultTier),r.tierOrder=Object.keys(zt).sort((u,h)=>Mt(u)-Mt(h)),r}const hs=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],Ae=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),vs=[["ci_micro","Micro"],["ci_small","Small"],["ci_medium","Medium"]],ws={ci_micro:"border-slate-300 bg-slate-50 text-slate-700",ci_small:"border-emerald-300 bg-emerald-50 text-emerald-800",ci_medium:"border-rose-300 bg-rose-50 text-rose-800"},Ro=hs,ta=[{key:"prayer",label:"🙏 ละหมาด",description:"ควบคุมช่วง polling และจอแสดงผลการเช็คชื่อละหมาด",features:["prayer_monitor"]},{key:"leave",label:"🚪 ออกนอกห้องเรียน",description:"ควบคุมจอติดตามนักเรียนออกนอกห้องเรียน",features:["leave_monitor"]},{key:"sports",label:"🏅 กีฬาสี",description:"ควบคุมจอสด scoreboard และคิว live ของกีฬาสี",features:["azizgames","azfutsal"]}],Dt=()=>new Date(Date.now()+7*36e5).toISOString().slice(0,10),ca=e=>`border rounded-lg px-3 py-1.5 text-xs transition ${e?"bg-indigo-700 border-indigo-700 text-white":"bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`,_s=e=>vs.map(([a,s])=>`<option value="${a}" ${e===a?"selected":""}>${s}</option>`).join(""),Va=()=>({id:`rule-${Date.now()}-${Math.random().toString(16).slice(2)}`,startDate:Dt(),endDate:Dt(),days:[1,2,3,4,5],start:"07:45",end:"16:30",targetTier:"ci_medium",label:"ช่วงใช้งานหลัก"}),Po=(e,a)=>{const s=go[e],n=a.features[e],l=xo(e,new Date,a),o=l.nextTransitionAt?new Date(l.nextTransitionAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"}):"—";return`<section class="border rounded-2xl p-4" data-workload-feature="${e}">
    <div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-bold">${s.label}</h3><p class="text-xs text-gray-500">${s.description}</p></div><div class="text-right text-xs"><div class="font-bold">${l.status}</div><div class="text-gray-500">เปลี่ยนถัดไป: ${Ae(o)}</div></div></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Mode<select name="mode" class="block border rounded-lg p-2 w-full mt-1"><option ${n.mode==="AUTO"?"selected":""}>AUTO</option><option ${n.mode==="ON"?"selected":""}>ON</option><option ${n.mode==="OFF"?"selected":""}>OFF</option></select></label>
      ${s.dateRange?`<label class="text-sm">วันที่เริ่ม<input name="dateFrom" type="date" value="${Ae(n.dateFrom||"")}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input name="dateTo" type="date" value="${Ae(n.dateTo||"")}" class="block border rounded-lg p-2 w-full mt-1"></label>`:"<span></span><span></span>"}
      <div class="grid grid-cols-2 gap-2"><label class="text-sm">เริ่ม<input name="start" type="time" value="${Ae(n.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">สิ้นสุด<input name="end" type="time" value="${Ae(n.end)}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3"><label class="text-sm">Buffer ก่อน (นาที)<input name="bufferBefore" type="number" min="0" max="1440" value="${n.bufferBefore}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Buffer หลัง (นาที)<input name="bufferAfter" type="number" min="0" max="1440" value="${n.bufferAfter}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    <div class="flex flex-wrap gap-2 mt-3">${n.days.map((b,r)=>`<label class="inline-flex items-center gap-1 text-xs border rounded-lg px-2 py-1"><input type="checkbox" name="day-${r}" ${b?"checked":""}>${Ro[r]}</label>`).join("")}</div>
  </section>`},Oo=e=>{try{return`<div class="flex h-9 overflow-hidden rounded-lg border bg-gray-100">${ha(e,Dt()).map(s=>{const n=Math.max(1,(s.end-s.start)/1440*100),l=`${String(Math.floor(s.start/60)).padStart(2,"0")}:${String(s.start%60).padStart(2,"0")}`,o=`${String(Math.floor(s.end/60)).padStart(2,"0")}:${String(s.end%60).padStart(2,"0")}`;return`<div class="${ws[s.targetTier]} border-r flex items-center justify-center text-[10px] font-bold overflow-hidden" style="width:${n}%" title="${kt(s.targetTier)} ${l}–${o}">${n>8?`${kt(s.targetTier)} ${l}–${o}`:""}</div>`}).join("")}</div>`}catch{return'<div class="rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">กรอกช่วงเวลาให้ครบเพื่อดูตัวอย่าง Timeline</div>'}},zo=(e,a)=>`<section class="bg-white border rounded-2xl p-4 shadow-sm" data-rule="${a}" data-rule-id="${Ae(e.id)}">
  <div class="flex flex-wrap gap-3 items-end justify-between">
    <div class="flex flex-wrap gap-3 items-end"><label class="text-sm">วันที่เริ่ม<input required type="date" name="startDate" value="${Ae(e.startDate)}" class="block border rounded-lg p-2 mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input required type="date" name="endDate" value="${Ae(e.endDate)}" class="block border rounded-lg p-2 mt-1"></label></div>
    <div class="flex gap-2"><button type="button" data-duplicate-rule class="border rounded-lg px-3 py-2 text-sm">ทำสำเนา</button><button type="button" data-remove-rule class="border rounded-lg px-3 py-2 text-sm text-red-700">ลบช่วงนี้</button></div>
  </div>
  <div class="mt-3 flex flex-wrap gap-2 items-center"><span class="text-sm font-medium mr-1">วันที่ใช้:</span>${hs.map((s,n)=>`<button type="button" data-day-toggle="${n}" data-selected="${e.days.includes(n)}" class="${ca(e.days.includes(n))}">${s.slice(0,3)}</button>`).join("")}<button type="button" data-day-preset="weekdays" class="text-xs underline text-indigo-700 ml-2">จ–ศ</button><button type="button" data-day-preset="all" class="text-xs underline text-indigo-700">ทุกวัน</button></div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">เวลาเริ่ม<input required type="time" name="start" value="${Ae(e.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">เวลาสิ้นสุด<input required type="time" name="end" value="${Ae(e.end)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">ระดับเครื่อง<select name="targetTier" class="block border rounded-lg p-2 w-full mt-1">${_s(e.targetTier)}</select></label><label class="text-sm">หมายเหตุ<input name="label" value="${Ae(e.label)}" maxlength="80" placeholder="เช่น ช่วงเรียน / ช่วงกลางคืน" class="block border rounded-lg p-2 w-full mt-1"></label></div>
</section>`;async function pa(){document.querySelectorAll("[data-nav]").forEach(u=>{u.classList.toggle("bg-indigo-800",u.dataset.nav==="autoscale-settings"),u.classList.toggle("text-white",u.dataset.nav==="autoscale-settings"),u.classList.toggle("text-indigo-200",u.dataset.nav!=="autoscale-settings")}),document.getElementById("page-title").textContent="ตั้งค่ากำลังเครื่องฐานข้อมูล";const e=document.getElementById("main-content");e.innerHTML='<p class="p-6">กำลังโหลดตารางเวลา...</p>';let a,s,n={},l=Dt(),o="overview";try{const{data:u,error:h}=await se.from("system_config").select("key,value,updated_at").in("key",["autoscaleSchedule","autoscaleState","workloadSchedule"]);if(h)throw h;const t=u.find(L=>L.key==="autoscaleSchedule"),p=t!=null&&t.value?JSON.parse(t.value):Do();a={...We(p),guardrail:Ua(p.guardrail)};const w=u.find(L=>L.key==="autoscaleState");n=w?{...JSON.parse(w.value),updatedAt:w.updated_at}:{};const c=u.find(L=>L.key==="workloadSchedule");s=Pa(c!=null&&c.value?JSON.parse(c.value):uo())}catch(u){e.innerHTML=`<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${Ae(u.message)}</p>`;return}const b=()=>{var u,h,t,p,w;return{schemaVersion:2,enabled:a.enabled,timezone:"Asia/Bangkok",defaultTier:((u=e.querySelector("[name=defaultTier]"))==null?void 0:u.value)||a.defaultTier,guardrail:{minimumMediumHoldMinutes:Number(((h=e.querySelector("[name=minimumMediumHoldMinutes]"))==null?void 0:h.value)||a.guardrail.minimumMediumHoldMinutes),minimumSmallHoldMinutes:Number(((t=e.querySelector("[name=minimumSmallHoldMinutes]"))==null?void 0:t.value)||a.guardrail.minimumSmallHoldMinutes),healthyStreakRequired:Number(((p=e.querySelector("[name=healthyStreakRequired]"))==null?void 0:p.value)||a.guardrail.healthyStreakRequired),recoveryLockMinutes:Number(((w=e.querySelector("[name=recoveryLockMinutes]"))==null?void 0:w.value)||a.guardrail.recoveryLockMinutes)},rules:[...e.querySelectorAll("[data-rule]")].map((c,L)=>({id:c.dataset.ruleId||`rule-${L+1}`,startDate:c.querySelector("[name=startDate]").value,endDate:c.querySelector("[name=endDate]").value,days:[...c.querySelectorAll('[data-day-toggle][data-selected="true"]')].map(v=>Number(v.dataset.dayToggle)),start:c.querySelector("[name=start]").value,end:c.querySelector("[name=end]").value,targetTier:c.querySelector("[name=targetTier]").value,label:c.querySelector("[name=label]").value}))}},r=()=>{let u=null;try{u=a.enabled?Mo(a):null}catch{}const h=u?kt(u):a.enabled?"กรุณาตรวจตารางเวลา":"คงระดับเดิม",t=Number(n.scheduleSchemaVersion)>=2,p=vs.map(([v,C])=>`<span class="inline-flex items-center gap-2 border rounded-xl px-3 py-2 ${ws[v]}"><span class="font-bold">${C}</span><span>$${zt[v].toFixed(5)}/ชม.</span></span>`).join("");e.innerHTML=`<div class="space-y-5 animate-fade">
      <div role="tablist" aria-label="กลุ่มการตั้งค่ากำลังเครื่อง" class="bg-white border rounded-2xl p-2 shadow-sm flex flex-wrap gap-2"><button type="button" role="tab" data-autoscale-tab="overview" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">📊 ภาพรวม</button><button type="button" role="tab" data-autoscale-tab="schedule" class="flex-1 min-w-[190px] rounded-xl px-4 py-3 text-sm font-bold transition">🗓️ ตารางปรับกำลังเครื่อง</button>${ta.map(v=>`<button type="button" role="tab" data-autoscale-tab="${v.key}" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">${v.label}</button>`).join("")}</div>
      <div id="autoscale-panel-overview" data-autoscale-panel="overview" role="tabpanel" class="space-y-5"><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>${n.mode!=="schedule"||!t?'<p class="mt-3 text-red-700">backend ยังไม่พร้อมสำหรับตาราง Micro / Small / Medium — กรุณา deploy autoscale-tick รุ่นใหม่ แล้วกดรีเฟรชสถานะก่อนบันทึก</p>':""}<p class="text-sm text-gray-600 mt-2">ระบบจะเลือกเป้าหมายตามช่วงเวลาที่กำหนด: Micro → Small → Medium และจะลดระดับก็ต่อเมื่อ health/guardrail ผ่าน</p><p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับปัจจุบัน ไม่ใช่ปิดฐานข้อมูล</p><div class="mt-4 border rounded-xl p-4 ${a.enabled?"bg-green-50 border-green-300 text-green-900":"bg-gray-100 border-gray-300 text-gray-800"}"><p class="text-lg font-bold">สถานะตาราง: ${a.enabled?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"}</p><p class="text-sm mt-1">เป้าหมายตามเวลาตอนนี้: <strong>${h}</strong></p></div><p class="text-xs text-gray-500 mt-2">ระดับที่ตรวจพบล่าสุด: ${Ae(n.currentTier||"ยังไม่มีข้อมูลใหม่")} · ตรวจล่าสุด: ${n.updatedAt?Ae(new Date(n.updatedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"—"}</p><p class="text-xs text-gray-500 mt-1">สถานะงาน: ${Ae(n.status||"—")} · คำสั่งที่รอยืนยัน: ${Ae(n.pendingTier?kt(n.pendingTier):"ไม่มี")}</p><div class="flex flex-wrap gap-3 mt-4"><button id="as-enable" class="border rounded-xl px-4 py-2 ${a.enabled?"bg-green-700 border-green-700 text-white":"bg-white border-green-700 text-green-800"}">เปิดใช้งาน${a.enabled?" ✓":""}</button><button id="as-disable" class="border rounded-xl px-4 py-2 ${a.enabled?"bg-white border-gray-300 text-gray-700":"bg-gray-700 border-gray-700 text-white"}">ปิดใช้งาน${a.enabled?"":" ✓"}</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div></div><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold">💰 ราคาอ้างอิง Compute</h2><div class="flex flex-wrap gap-2 mt-3">${p}</div><label class="block text-sm mt-4">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${l}" class="border rounded-lg p-2 mt-1"></label><div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div><p class="text-xs text-gray-500 mt-3">เป็นค่าประมาณตามตาราง ไม่ใช่ยอดบิลจริง และควรตรวจราคากับ Supabase ก่อนใช้งานจริง</p></div></div>
      <form id="as-form" data-autoscale-panel="schedule" role="tabpanel" class="space-y-4"><section class="border rounded-2xl p-4 bg-amber-50"><h3 class="font-bold">🛡️ Guardrail การลดระดับ</h3><p class="text-xs text-gray-600 mt-1">การเปลี่ยนขึ้นทำได้ในรอบตรวจถัดไป ส่วนการลดจะรอ health ปกติ, healthy streak และช่วง hold ที่กำหนด</p><div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Hold หลัง Medium (นาที)<input name="minimumMediumHoldMinutes" type="number" min="0" max="1440" value="${a.guardrail.minimumMediumHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Hold หลัง Small (นาที)<input name="minimumSmallHoldMinutes" type="number" min="0" max="1440" value="${a.guardrail.minimumSmallHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Healthy streak (รอบ)<input name="healthyStreakRequired" type="number" min="1" max="12" value="${a.guardrail.healthyStreakRequired}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Recovery lock (นาที)<input name="recoveryLockMinutes" type="number" min="0" max="1440" value="${a.guardrail.recoveryLockMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label></div></section><section class="border rounded-2xl p-4 bg-white"><div class="flex flex-wrap justify-between gap-3 items-end"><div><h3 class="font-bold">ตารางช่วงเวลา</h3><p class="text-xs text-gray-500 mt-1">กำหนดวันซ้ำได้หลายวัน และกรอกข้ามวันได้ เช่น 22:00–02:00</p></div><label class="text-sm">ระดับพื้นฐานนอกช่วงเวลา<select name="defaultTier" class="border rounded-lg p-2 ml-2">${_s(a.defaultTier)}</select></label></div><div class="mt-4">${Oo(a)}</div></section><div id="as-rules" class="space-y-4">${a.rules.map(zo).join("")}</div><div class="flex flex-wrap gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงเวลา</button><button type="button" id="as-weekday-template" class="border bg-white rounded-xl px-4 py-2">สร้างตารางวันเรียนพื้นฐาน</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div><p class="text-xs text-gray-500">ระบบจะเลือก tier สูงสุดเมื่อช่วงเวลาซ้อนกัน และมีผลในรอบตรวจถัดไป ปกติทุก 5 นาที</p></form>
      ${ta.map(v=>`<section id="autoscale-panel-${v.key}" data-autoscale-panel="${v.key}" role="tabpanel" class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">${v.label}</h2><p class="text-sm text-gray-600 mt-2">${v.description} · AUTO ใช้ตาราง, ON บังคับเปิด, OFF บังคับปิด</p><div class="space-y-4 mt-4">${v.features.map(C=>Po(C,s)).join("")}</div></section>`).join("")}
      <div data-autoscale-workload-actions class="hidden flex gap-3 bg-white border rounded-2xl p-4 shadow-sm"><button type="button" id="workload-save" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกการตั้งค่า Workload ทั้งหมด</button><button type="button" id="workload-refresh" class="border rounded-xl px-4 py-2">รีเฟรช Workload</button><p class="self-center text-xs text-gray-500">บันทึกครั้งเดียว ครอบคลุมทุกแท็บ</p></div>
    </div>`;const w=v=>{o=v,e.querySelectorAll("[data-autoscale-tab]").forEach(m=>{const y=m.dataset.autoscaleTab===o;m.setAttribute("aria-selected",String(y)),m.classList.toggle("bg-indigo-700",y),m.classList.toggle("text-white",y),m.classList.toggle("shadow-sm",y),m.classList.toggle("bg-gray-100",!y),m.classList.toggle("text-gray-700",!y)}),e.querySelectorAll("[data-autoscale-panel]").forEach(m=>m.classList.toggle("hidden",m.dataset.autoscalePanel!==o));const C=ta.some(m=>m.key===o);e.querySelectorAll("[data-autoscale-workload-actions]").forEach(m=>m.classList.toggle("hidden",!C))};e.querySelectorAll("[data-autoscale-tab]").forEach(v=>{v.id=`autoscale-tab-${v.dataset.autoscaleTab}`,v.onclick=()=>w(v.dataset.autoscaleTab)}),w(o);const c=()=>{try{const v=No({...b(),enabled:!1},l);e.querySelector("#as-cost-tags").innerHTML=[["day","รายวัน"],["week","รายสัปดาห์"],["month","รายเดือน"]].map(([C,m])=>{const y=v[C];return`<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${m} (${y.days} วัน)</span><strong>$${y.usd.toFixed(4)}</strong><span class="block text-xs">Micro ${y.microHours.toFixed(1)} ชม. · Small ${y.smallHours.toFixed(1)} ชม. · Medium ${y.mediumHours.toFixed(1)} ชม.</span></span>`}).join("")}catch{const v=e.querySelector("#as-cost-tags");v&&(v.textContent="กรุณากรอกวันที่ เวลา วัน และระดับเครื่องให้ครบเพื่อคำนวณ")}};e.querySelector("#as-cost-date").onchange=v=>{l=v.target.value,c()},e.querySelector("#as-form").addEventListener("input",c),c();const L=async v=>{try{const C=v===!1?{...a,enabled:!1}:{...b(),enabled:v===!0?!0:a.enabled},m=We(C);if(!t||m.enabled&&n.mode!=="schedule")throw new Error("backend ยังไม่พร้อมสำหรับ schema ตารางใหม่ กรุณา deploy autoscale-tick แล้วกดรีเฟรชสถานะก่อน");e.querySelectorAll("button").forEach(H=>{H.disabled=!0});const{error:y}=await se.from("system_config").upsert({key:"autoscaleSchedule",value:JSON.stringify(m),updated_at:new Date().toISOString()},{onConflict:"key"});if(y)throw y;a={...m,guardrail:Ua(m.guardrail)},r(),D("บันทึกแล้ว มีผลในรอบตรวจถัดไป","success")}catch(C){D(Ae(C.message),"error"),e.querySelectorAll("button").forEach(m=>{m.disabled=!1})}};e.querySelector("#as-form").onsubmit=v=>{v.preventDefault(),L()},e.querySelector("#as-enable").onclick=()=>L(!0),e.querySelector("#as-disable").onclick=()=>L(!1),e.querySelector("#as-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&pa()},e.querySelector("#as-add").onclick=()=>{a=We({...b(),enabled:!1}),a.rules.push(Va()),r()},e.querySelector("#as-weekday-template").onclick=()=>{a=We({...b(),enabled:!1}),a.rules=[Va()],r()},e.querySelectorAll("[data-remove-rule]").forEach(v=>v.onclick=()=>{a=We({...b(),enabled:!1});const C=v.closest("[data-rule]");a.rules.splice(Number(C.dataset.rule),1),r()}),e.querySelectorAll("[data-duplicate-rule]").forEach(v=>v.onclick=()=>{a=We({...b(),enabled:!1});const C=v.closest("[data-rule]"),m={...a.rules[Number(C.dataset.rule)],id:`rule-${Date.now()}`,label:`${a.rules[Number(C.dataset.rule)].label||"ช่วงเวลา"} สำเนา`};a.rules.splice(Number(C.dataset.rule)+1,0,m),r()}),e.querySelectorAll("[data-day-toggle]").forEach(v=>v.onclick=()=>{const C=v.dataset.selected!=="true";v.dataset.selected=String(C),v.className=ca(C),c()}),e.querySelectorAll("[data-day-preset]").forEach(v=>v.onclick=()=>{const C=v.closest("[data-rule]"),m=v.dataset.dayPreset==="all"?[0,1,2,3,4,5,6]:[1,2,3,4,5];C.querySelectorAll("[data-day-toggle]").forEach(y=>{const H=m.includes(Number(y.dataset.dayToggle));y.dataset.selected=String(H),y.className=ca(H)}),c()}),e.querySelector("#workload-save").onclick=async()=>{try{e.querySelectorAll("button").forEach(v=>{v.disabled=!0}),s=Pa({schemaVersion:1,timezone:"Asia/Bangkok",features:Object.fromEntries([...e.querySelectorAll("[data-workload-feature]")].map(v=>{var C,m;return[v.dataset.workloadFeature,{mode:v.querySelector("[name=mode]").value,dateFrom:((C=v.querySelector("[name=dateFrom]"))==null?void 0:C.value)||null,dateTo:((m=v.querySelector("[name=dateTo]"))==null?void 0:m.value)||null,start:v.querySelector("[name=start]").value,end:v.querySelector("[name=end]").value,bufferBefore:Number(v.querySelector("[name=bufferBefore]").value||0),bufferAfter:Number(v.querySelector("[name=bufferAfter]").value||0),days:[...v.querySelectorAll("input[type=checkbox][name^=day-]")].map(y=>y.checked)}]}))}),await mo(s),D("บันทึก Workload Control แล้ว","success"),r()}catch(v){D(Ae(v.message),"error"),e.querySelectorAll("button").forEach(C=>{C.disabled=!1})}},e.querySelector("#workload-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&pa()}};r()}const Me=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Fo(e){document.querySelectorAll("[data-nav]").forEach(a=>{const s=a.dataset.nav===e;a.classList.toggle("bg-indigo-800",s),a.classList.toggle("text-white",s),a.classList.toggle("text-indigo-200",!s)})}function aa(e){document.getElementById("main-content").innerHTML=e}const $s={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},Uo={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},Vo={doc:"📋",dates:"📅",att:"✅",score:"📝"},Go={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function $t(e,a,s,n="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${n} rounded-lg ${Uo[s]}" title="${a}">${e}</span>`}function Qe(e,a,s="w-8 h-8 text-base"){return $t(Vo[e],`${Go[e]}: ${$s[a]}`,a,s)}const Wo={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function Yo(e){return["AGM","AGMVOC"].includes(e)?"ศาสนา":e==="ACDMVOC"?"สามัญปวช":"สามัญ"}function Ko(e,a){const s=Yo(e.subject_group);return a.find(n=>n.dept_code===e.dept&&n.category===s)??a.find(n=>n.dept_code===e.dept)??a.find(n=>n.dept_name===e.dept)??null}function Qo(e,a){return e.dept?a.find(s=>s.dept_code===e.dept&&s.category===e.category)??a.find(s=>s.dept_code===e.dept)??null:null}function Jo(e,a){return Math.round((new Date(e)-new Date(a))/864e5)}function Xo(e,a){const s=e.has_doc_rows?"green":"red",n=e.has_teaching_dates?"green":"red";let l;if(!e.has_teaching_dates||e.day1_date&&e.day1_date>a)l="gray";else if(!e.last_check_date)l="red";else{const b=Jo(a,e.last_check_date);l=b<=7?"green":b<=14?"yellow":"red"}let o;if(!e.score_col_count)o="gray";else{const b=e.student_count*e.score_col_count,r=b>0?e.score_filled_count/b:0;o=r>=.8?"green":r>0?"yellow":"red"}return{doc:s,dates:n,att:l,score:o}}function ft(e){const a=e.filter(s=>s!=="gray");return a.length===0?"gray":a.includes("red")?"red":a.includes("yellow")?"yellow":"green"}function sa(e){return Object.values(e).some(a=>a==="red"||a==="yellow")}async function Zo(){var F,W;Fo("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",aa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let e,a,s,n,l;try{[e,a,s,n,l]=await Promise.all([yr(),Xe(),qe().catch(()=>({})),Ne(),fr(60).catch(()=>null)])}catch(R){aa(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${Me(me(R))}</p>
    </div>`);return}const o=s.academicYear??s.academic_year??"",b=s.semester??"",r=new Date().toISOString().slice(0,10),u=e.filter(R=>R.subject_id!=null).map(R=>{const V=Ko(R,a);return{...R,deptKey:(V==null?void 0:V.id)!=null?`d${V.id}`:`u_${R.dept??"-"}`,deptName:(V==null?void 0:V.dept_name)??R.dept??"ไม่ระบุกลุ่มสาระ",status:Xo(R,r)}}),h=new Map;for(const R of u)h.has(R.deptKey)||h.set(R.deptKey,{deptName:R.deptName,rows:[]}),h.get(R.deptKey).rows.push(R);const t=[...h.entries()].map(([R,V])=>({key:R,...V})).sort((R,V)=>R.deptName.localeCompare(V.deptName,"th")),p=new Map;for(const R of u)R.teacher_id!=null&&(p.has(R.teacher_id)||p.set(R.teacher_id,[]),p.get(R.teacher_id).push(R));const w=n.filter(R=>R.staff_type==="ครู").map(R=>{const V=p.get(R.id)??[],G=R.profile_id!=null,Y=V.length,te=Y>0?ft(V.map(ce=>ce.status.att)):"gray";let re;if(V[0])re={key:V[0].deptKey,name:V[0].deptName};else{const ce=Qo(R,a);re=ce?{key:`d${ce.id}`,name:ce.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let Z;return G?Y===0?Z=2:te==="red"?Z=1.5:te==="yellow"?Z=1:Z=0:Z=3,{teacherId:R.id,teacherName:R.full_name,deptKey:re.key,deptName:re.name,registered:G,classCount:Y,attWorst:te,severity:Z}}).sort((R,V)=>V.severity-R.severity||R.teacherName.localeCompare(V.teacherName,"th")),c=w.filter(R=>!R.registered).length,L=w.filter(R=>R.registered&&R.classCount===0).length,v=w.filter(R=>R.registered&&R.classCount>0&&(R.attWorst==="red"||R.attWorst==="yellow")).length,C=w.filter(R=>R.severity>0).length;function m(R){const V=u.filter(re=>re.status[R]!=="gray"),G=V.filter(re=>re.status[R]==="green").length,Y=u.length-V.length;return{pct:V.length>0?Math.round(G/V.length*100):null,green:G,total:V.length,grayCount:Y}}const y={doc:m("doc"),dates:m("dates"),att:m("att"),score:m("score")},H=w.length,_=w.filter(R=>R.registered).length,A=w.filter(R=>R.registered&&R.classCount>0).length,q=w.filter(R=>R.registered&&R.classCount>0&&R.attWorst==="green").length,j={registered:{pct:H>0?Math.round(_/H*100):null,num:_,total:H},courses:{pct:_>0?Math.round(A/_*100):null,num:A,total:_},attendance:{pct:A>0?Math.round(q/A*100):null,num:q,total:A}},B=u.filter(R=>sa(R.status)).length,g=u.length>0?Math.round(B/u.length*100):0;function d(){if(!l)return"";const R=l.rows||[],V=l.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},G=new Date,Y=re=>re.status!=="active"?re.status==="returned"?"กลับแล้ว":"เลยเวลา":vo(re.created_at,re.allowed_duration,G).text,te=R.filter(re=>re.status==="active").slice(0,8);return`
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
        ${te.length?`
          <div class="border-t border-gray-50 divide-y divide-gray-50">
            ${te.map(re=>{var Z,ce,ne,ke;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${Me(((Z=re.students)==null?void 0:Z.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${Me(((ce=re.classes)==null?void 0:ce.class_name)||((ne=re.students)==null?void 0:ne.main_room)||"—")} · ${Me(re.reason||"—")} · ${Me(((ke=re.teachers)==null?void 0:ke.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${Y(re)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let f=null,I="attention",i="",$=null;const x={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function S(){return t.map(R=>{const V={doc:ft(R.rows.map(te=>te.status.doc)),dates:ft(R.rows.map(te=>te.status.dates)),att:ft(R.rows.map(te=>te.status.att)),score:ft(R.rows.map(te=>te.status.score))},G=R.rows.filter(te=>sa(te.status)).length,Y=f===R.key;return`
        <button type="button" data-dept-key="${R.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${Y?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${Me(R.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${R.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${Qe("doc",V.doc)}
            ${Qe("dates",V.dates)}
            ${Qe("att",V.att)}
            ${Qe("score",V.score)}
          </div>
          <p class="text-xs ${G>0?"text-amber-600 font-semibold":"text-emerald-600"}">
            ${G>0?`⚠️ ${G} ห้องต้องตามงาน`:"✅ ปกติทั้งหมด"}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${Y?"🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายละเอียด ▸"}</p>
        </button>`}).join("")}function k(){var Y;const R=f?(Y=t.find(te=>te.key===f))==null?void 0:Y.deptName:null,V=I==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${R?`${V} · ${Me(R)}`:`${V} (ทั้งโรงเรียน)`}</h4>
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
                 ${I==="all"?"bg-indigo-50 text-indigo-600 border-indigo-200":"bg-white text-gray-500 border-gray-200 hover:border-gray-300"}">
          ${I==="all"?"👁️ ดูทั้งหมด":"⚠️ เฉพาะที่ต้องตามงาน"}
        </button>
        ${f?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function E(){let R=u;return I==="attention"&&(R=R.filter(V=>sa(V.status))),f&&(R=R.filter(V=>V.deptKey===f)),i&&(R=R.filter(V=>(V.class_name??"").toLowerCase().includes(i)||(V.subject_name??"").toLowerCase().includes(i)||(V.teacher_name??"").toLowerCase().includes(i))),R=[...R].sort((V,G)=>{const Y=te=>Object.values(te).reduce((re,Z)=>re+(Z==="red"?2:Z==="yellow"?1:0),0);return Y(G.status)-Y(V.status)}),R.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
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
            ${R.map(V=>`
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${Me(V.class_name)}</p>
                  <p class="text-xs text-gray-400">${Me(V.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${Me(V.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${Me(V.deptName)}</td>
                <td class="px-4 py-2 text-center">${Qe("doc",V.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Qe("att",V.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Qe("score",V.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Qe("dates",V.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function T(){let R=w;$==="unregistered"?R=R.filter(Y=>!Y.registered):$==="no-courses"?R=R.filter(Y=>Y.registered&&Y.classCount===0):$==="att-behind"?R=R.filter(Y=>Y.registered&&Y.classCount>0&&(Y.attWorst==="red"||Y.attWorst==="yellow")):I==="attention"&&(R=R.filter(Y=>Y.severity>0)),f&&(R=R.filter(Y=>Y.deptKey===f)),i&&(R=R.filter(Y=>(Y.teacherName??"").toLowerCase().includes(i)));const V=$?`${x[$]} (${R.length} คน)`:I==="all"?`ครูผู้สอนทั้งหมด (${R.length}/${w.length} คน)`:`ครูที่ต้องติดตาม (${R.length} คน)`,G=R.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
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
              ${R.map(Y=>`
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${Me(Y.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${Me(Y.deptName)}</td>
                  <td class="px-4 py-2 text-center">${$t("🔑",Y.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",Y.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${$t("📚",Y.classCount>0?`มีวิชา/ห้องที่สอน ${Y.classCount} ห้อง`:Y.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",Y.classCount>0?"green":Y.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Y.classCount>0?$t("✅",`เช็คชื่อ: ${$s[Y.attWorst]}`,Y.attWorst,"w-7 h-7 text-sm"):$t("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`;return`
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${V}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${$?'<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>':""}
      </div>
      ${G}`}function M({icon:R,label:V,info:G,pct:Y,numerator:te,denominator:re,unit:Z="ห้อง",extraNote:ce="",filterKey:ne=null,active:ke=!1}){const Be=Y==null?"text-gray-400":Y>=80?"text-emerald-700":Y>=50?"text-amber-600":"text-red-600",De=ne?"button":"div",Ve=ne?' type="button"':"",st=ne?` data-teacher-filter="${ne}"`:"";return`
      <${De}${Ve}${st} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${ne?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${ke?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${Me(G)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${R}</div>
          <p class="text-sm font-semibold text-gray-600">${V} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${Be}">${Y==null?"—":Y+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${re>0?`${te}/${re} ${Z}`:"ไม่มีข้อมูล"}${ce}</p>
        ${ne?`<p class="text-[10px] text-indigo-400 mt-1">${ke?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${De}>`}function N(R,V,G){const Y=y[G];return M({icon:R,label:V,info:Wo[G],pct:Y.pct,numerator:Y.green,denominator:Y.total,unit:"ห้อง",extraNote:Y.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${Y.grayCount}</span>`:""})}function O(R,V,G,Y,te="",re=null){return M({icon:R,label:V,info:G,pct:Y.pct,numerator:Y.num,denominator:Y.total,unit:"คน",extraNote:te,filterKey:re,active:$===re})}function U(){return`
      ${O("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",j.registered,c>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${c}</span>`:"","unregistered")}
      ${O("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",j.courses,L>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${L}</span>`:"","no-courses")}
      ${O("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",j.attendance,v>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${v}</span>`:"","att-behind")}`}function z(){var R,V,G;document.querySelectorAll(".exec-dept-card").forEach(Y=>{Y.addEventListener("click",()=>{var re;const te=Y.dataset.deptKey;f===te?(f=null,I="attention"):(f=te,I="all"),P(),(re=document.getElementById("exec-table-section"))==null||re.scrollIntoView({behavior:"smooth",block:"start"})})}),(R=document.getElementById("exec-clear-filter"))==null||R.addEventListener("click",()=>{f=null,I="attention",P()}),(V=document.getElementById("exec-toggle-scope"))==null||V.addEventListener("click",()=>{I=I==="all"?"attention":"all",P()}),document.querySelectorAll("[data-teacher-filter]").forEach(Y=>{Y.addEventListener("click",()=>{var re;const te=Y.dataset.teacherFilter;$=$===te?null:te,f=null,i="",P(),(re=document.getElementById("exec-teacher-section"))==null||re.scrollIntoView({behavior:"smooth",block:"start"})})}),(G=document.getElementById("exec-teacher-clear-filter"))==null||G.addEventListener("click",()=>{$=null,P()})}function P(){document.getElementById("exec-teacher-kpi").innerHTML=U(),document.getElementById("exec-dept-cards").innerHTML=S(),document.getElementById("exec-table-header").innerHTML=k(),document.getElementById("exec-class-table").innerHTML=E(),document.getElementById("exec-teacher-section").innerHTML=T();const R=document.getElementById("exec-dept-select");R&&(R.value=f??"");const V=document.getElementById("exec-search");V&&(V.value=i),z()}aa(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${o?`ปีการศึกษา ${Me(o)}`:""}${b?` ภาคเรียนที่ ${Me(b)}`:""}${o||b?" · ":""}ทั้งหมด ${u.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${B>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${B} ห้อง</b> (${g}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${C>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${C} คน</b> ที่ต้องติดตาม
        ${c>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${c}</b> คน`:""}
        ${L>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${L}</b> คน`:""}
        ${v>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${v}</b> คน`:""}
      </p>`:`
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${U()}
    </div>

    ${d()}

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
      ${S()}
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
        ${t.map(R=>`<option value="${R.key}">${Me(R.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${k()}
      </div>
      <div id="exec-class-table">${E()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${T()}
    </div>
  </div>`),(F=document.getElementById("exec-search"))==null||F.addEventListener("input",R=>{i=R.target.value.trim().toLowerCase(),P()}),(W=document.getElementById("exec-dept-select"))==null||W.addEventListener("change",R=>{f=R.target.value||null,I=f?"all":"attention",P()}),z()}const el="10.22.879",tl="regrade.html",al=()=>{const e=new URL(tl,window.location.href);return e.searchParams.set("v",$o),e.href},Ht=(e,a)=>{e&&(e.textContent=a,clearTimeout(e._regradeStatusTimer),e._regradeStatusTimer=setTimeout(()=>{e.textContent=""},1800))},sl=async(e,a)=>{try{await navigator.clipboard.writeText(e),Ht(a,"คัดลอกลิงก์แล้ว")}catch{Ht(a,"คัดลอกไม่สำเร็จ")}},rl=async(e,a)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:e});return}await navigator.clipboard.writeText(e),Ht(a,"คัดลอกลิงก์แล้ว")}catch{Ht(a,"แชร์ไม่สำเร็จ")}};function nl(){var b,r,u,h;(b=document.getElementById("regrade-modal"))==null||b.remove();const e=al(),a=document.body.style.overflow;document.body.style.overflow="hidden";const s=document.createElement("div");s.id="regrade-modal",s.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",s.innerHTML=`
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
  `;const n=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=a,s.remove(),window.closeRegradeModal===n&&(window.closeRegradeModal=null)},l=t=>{t.key==="Escape"&&n()};document.addEventListener("keydown",l),document.body.appendChild(s),window.closeRegradeModal=n;const o=s.querySelector("[data-regrade-status]");(r=s.querySelector("[data-regrade-close]"))==null||r.addEventListener("click",n),(u=s.querySelector("[data-regrade-copy]"))==null||u.addEventListener("click",()=>sl(e,o)),(h=s.querySelector("[data-regrade-share]"))==null||h.addEventListener("click",()=>rl(e,o))}const Q=(e="")=>String(e??"").replace(/[&<>'"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[a]),Ga=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},ra=e=>{if(!e)return"";const a=new Date(e);if(Number.isNaN(a.getTime()))return"";const s=n=>String(n).padStart(2,"0");return`${a.getFullYear()}-${s(a.getMonth()+1)}-${s(a.getDate())}T${s(a.getHours())}:${s(a.getMinutes())}`},mt=()=>document.getElementById("stu-content")||document.getElementById("main-content"),ol="00000000-0000-0000-0000-000000000001",ks=[{code:"SS",chest:34},{code:"S",chest:36},{code:"M",chest:38},{code:"L",chest:40},{code:"XL",chest:42},{code:"2X",chest:44},{code:"3X",chest:46},{code:"4X",chest:48},{code:"5X",chest:50},{code:"6X",chest:52},{code:"7X",chest:54},{code:"8X",chest:56}],oe=(e,a="success")=>{const s=document.createElement("div");s.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-3 rounded-xl text-white text-sm shadow-xl ${a==="error"?"bg-red-600":"bg-emerald-600"}`,s.textContent=e,document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)},xt=()=>'<div class="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800"><h3 class="font-bold">ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี</h3><p class="text-sm mt-2">ให้แอดมินรันไฟล์ <code>patch_sports_student_team_portal.sql</code> ใน Supabase SQL Editor</p></div>',dt=(e,a,s,n)=>`<div class="rounded-2xl border p-4 ${n?"bg-emerald-50 border-emerald-200":"bg-slate-50 border-slate-200"}"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-sm text-slate-800">${Q(a)}</h3><p class="text-xs text-slate-500 mt-1">${Q(s)}</p><span class="inline-block mt-3 px-2 py-1 rounded-full text-[11px] font-bold ${n?"bg-emerald-100 text-emerald-700":"bg-slate-200 text-slate-600"}">${n?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span></div><button type="button" data-cfg="${Q(e)}" data-enabled="${n?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${n?"bg-red-50 text-red-700 border border-red-200":"bg-emerald-600 text-white"}">${n?"ปิดใช้งาน":"เปิดใช้งาน"}</button></div></div>`,Wa=(e,a,s=!0)=>`<button type="button" data-team-perm="${Q(e)}" data-enabled="${s?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold border ${s?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}">${s?"อนุญาต":"ไม่อนุญาต"}: ${Q(a)}</button>`;(location.pathname.startsWith("/pp5online/")?"/pp5online/":"/")+"";async function Ft(e,a,s=1e3){let n=[],l=0;for(;;){const{data:o,error:b}=await a(se.from(e)).range(l,l+s-1);if(b)throw b;if(n=n.concat(o||[]),!o||o.length<s)break;l+=s}return n}async function Es(e){var n;if(!e)return!1;const{data:a}=await se.from("teachers").select("positions,position,staff_type").eq("profile_id",e).maybeSingle();return a?((n=a.positions)!=null&&n.length?a.positions:a.position?[a.position]:[]).includes("house_color_admin")||a.staff_type==="แอดมิน":!1}async function ll(e){const{data:a}=await se.from("settings").select("value").eq("key","public_buttons").maybeSingle(),s=a!=null&&a.value&&typeof a.value=="object"?a.value:{};await se.from("settings").upsert({key:"public_buttons",value:{athlete_size:!1,athlete_registration:!1,athlete_print:!0,athlete_certificate:!0,...s,athlete_size:!!e},description:"Controls which athlete-page actions are visible and usable by public visitors.",updated_at:new Date().toISOString()},{onConflict:"key"})}async function gt(){const[{data:e},{data:a},{data:s}]=await Promise.all([se.from("events").select("*").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),se.from("sports_portal_settings").select("*").limit(1).maybeSingle(),se.from("settings").select("value").eq("key","shirt_sizes").maybeSingle()]),n=Array.isArray(s==null?void 0:s.value)&&s.value.length?s.value:ks;return{event:e||{id:ol,name:"AZIZGAMES"},cfg:a,shirtSizes:n}}async function dl(e){const{error:a}=await se.from("settings").upsert({key:"shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(a)throw a}async function il(e){const{error:a}=await se.from("settings").upsert({key:"teacher_shirt_sizes",value:e,updated_at:new Date().toISOString()},{onConflict:"key"});if(a)throw a}function Ss(e){const a=[];return(e||[]).forEach(s=>{const n=Ya(s.event_date),l=Ya(s.end_date||s.event_date);if(n)for(let o=new Date(n);o<=(l||n);o.setDate(o.getDate()+1))a.push({date:cl(o),label:s.label})}),a.sort((s,n)=>s.date<n.date?1:-1)}function Ya(e){if(!e)return null;const[a,s,n]=String(e).slice(0,10).split("-").map(Number);return new Date(a,s-1,n)}function cl(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}async function pl(e,a){const s=e.querySelector("#sports-gallery-type-admin");if(!s)return;s.innerHTML='<div class="py-8 text-center text-gray-400">กำลังโหลดประเภทภาพกิจกรรม...</div>';const{data:n,error:l}=await se.from("sports_gallery_upload_types").select("*").eq("event_id",a.id).order("event_date",{ascending:!0,nullsFirst:!1}).order("display_order").order("created_at");if(l){s.innerHTML='<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">ยังไม่พร้อมใช้งานส่วนจัดการประเภทภาพกิจกรรม — กรุณารันไฟล์ <code>patch_sports_gallery_upload_types.sql</code> ใน Supabase SQL Editor</div>';return}let o=n||[];const b=()=>{var r;s.innerHTML=`
      <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div><h2 class="font-bold">📸 ประเภทภาพกิจกรรม</h2><p class="text-xs text-gray-500 mt-1">เพิ่มชื่อและวันที่สำหรับให้สต๊าฟเลือกตอนอัปโหลด ปิดใช้งานแล้วรูปเดิมยังอยู่ครบ</p></div>
      </div>
      <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 rounded-2xl bg-slate-50 border p-3 mb-4">
        <input id="gallery-type-new-name" class="border rounded-xl px-3 py-2 text-sm bg-white" placeholder="เช่น บรรยากาศวันเข้าสี วันที่ 2">
        <input id="gallery-type-new-date" type="date" class="border rounded-xl px-3 py-2 text-sm bg-white">
        <button id="gallery-type-add" class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">เพิ่มรายการ</button>
      </div>
      <div class="space-y-2">${o.map(u=>`
        <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 items-center rounded-2xl border p-3 ${u.is_active?"bg-white":"bg-slate-50 opacity-75"}" data-gallery-type-row="${Q(u.id)}">
          <input data-gallery-type-name class="border rounded-xl px-3 py-2 text-sm bg-white" value="${Q(u.name)}">
          <input data-gallery-type-date type="date" class="border rounded-xl px-3 py-2 text-sm bg-white" value="${Q(u.event_date||"")}">
          <div class="flex gap-2 md:justify-end">
            <button data-gallery-type-save="${Q(u.id)}" class="px-3 py-2 rounded-xl border border-indigo-200 text-indigo-700 text-xs font-bold">บันทึกแก้ไข</button>
            <button data-gallery-type-active="${Q(u.id)}" data-active="${u.is_active?"true":"false"}" class="px-3 py-2 rounded-xl text-xs font-bold ${u.is_active?"border border-red-200 text-red-700 bg-red-50":"bg-emerald-600 text-white"}">${u.is_active?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีประเภทภาพกิจกรรม</p>'}</div>`,(r=s.querySelector("#gallery-type-add"))==null||r.addEventListener("click",async()=>{const u=s.querySelector("#gallery-type-new-name").value.trim(),h=s.querySelector("#gallery-type-new-date").value||null;if(!u)return oe("กรุณากรอกชื่อประเภทภาพกิจกรรม","error");const t=s.querySelector("#gallery-type-add");t.disabled=!0;const{data:p,error:w}=await se.from("sports_gallery_upload_types").insert({event_id:a.id,name:u,event_date:h,is_active:!0,display_order:o.length*10}).select("*").single();if(w)return t.disabled=!1,oe(w.message,"error");o.push(p),oe("เพิ่มประเภทภาพกิจกรรมแล้ว"),b()}),s.querySelectorAll("[data-gallery-type-save]").forEach(u=>u.addEventListener("click",async()=>{const h=s.querySelector(`[data-gallery-type-row="${u.dataset.galleryTypeSave}"]`),t=h.querySelector("[data-gallery-type-name]").value.trim(),p=h.querySelector("[data-gallery-type-date]").value||null;if(!t)return oe("ชื่อประเภทต้องไม่ว่าง","error");u.disabled=!0;const{data:w,error:c}=await se.from("sports_gallery_upload_types").update({name:t,event_date:p,updated_at:new Date().toISOString()}).eq("id",u.dataset.galleryTypeSave).select("*").single();if(c)return u.disabled=!1,oe(c.message,"error");o=o.map(L=>L.id===w.id?w:L),oe("บันทึกการแก้ไขแล้ว"),b()})),s.querySelectorAll("[data-gallery-type-active]").forEach(u=>u.addEventListener("click",async()=>{const h=u.dataset.active!=="true";u.disabled=!0;const{data:t,error:p}=await se.from("sports_gallery_upload_types").update({is_active:h,updated_at:new Date().toISOString()}).eq("id",u.dataset.galleryTypeActive).select("*").single();if(p)return u.disabled=!1,oe(p.message,"error");o=o.map(w=>w.id===t.id?t:w),oe(h?"เปิดใช้งานรายการแล้ว":"ปิดใช้งานรายการแล้ว"),b()}))};b()}async function Ue(){var a,s,n,l,o,b,r,u;const e=mt();e.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>';try{const{event:h,cfg:t,shirtSizes:p}=await gt();let w=p.map(g=>({...g}));const{data:c}=await se.from("settings").select("value").eq("key","teacher_shirt_sizes").maybeSingle();let L=(Array.isArray(c==null?void 0:c.value)&&c.value.length?c.value:ks).map(g=>({...g}));const v=await ms(se),{data:C}=await se.from("profiles").select("role,is_also_admin").eq("id",v).maybeSingle(),m=(C==null?void 0:C.role)==="admin"||(C==null?void 0:C.is_also_admin)===!0||await Es(v);if((t==null?void 0:t.shirt_summary_enabled)===!1&&!m){e.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}const{data:y}=await se.from("sports_team_memberships").select("team_color_id,role,permissions").eq("event_id",h.id).eq("profile_id",v).eq("is_active",!0),H=m||(y||[]).some(g=>g.role==="lead_teacher"),[{data:_},A,{data:q}]=await Promise.all([se.from("team_colors").select("id,name,hex_color").eq("event_id",h.id).order("display_order"),Ft("sports_shirt_requests",g=>g.select("status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)").eq("event_id",h.id)),m?se.from("sports_team_identity_requests").select("*,team_colors(name,logo_url)").eq("event_id",h.id).eq("status","pending_admin"):Promise.resolve({data:[]})]),j=p.map(g=>g.code),B=(A||[]).filter(g=>["confirmed","advisor_updated"].includes(g.status));if(e.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${m?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><div class="flex gap-2"><button id="open-sports-overview" type="button" class="px-4 py-2 bg-sky-600 text-white rounded-xl text-sm font-bold">📊 ภาพรวมกีฬาสี</button><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div></div><div class="grid md:grid-cols-4 gap-3">${dt("shirt_request_enabled","รับจำนงไซซ์เสื้อ","นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน",!!(t!=null&&t.shirt_request_enabled))}${dt("shirt_summary_enabled","หน้าสรุปยอดเสื้อ","ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้",!!(t!=null&&t.shirt_summary_enabled))}${dt("team_workspace_enabled","จัดการสีของฉัน","ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้",!!(t!=null&&t.team_workspace_enabled))}${dt("shirt_vote_enabled","โหวตแบบเสื้อกีฬาสี","นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้",!!(t!=null&&t.shirt_vote_enabled))}${dt("teacher_shirt_request_enabled","รับแจ้งไซซ์เสื้อคุณครู","คุณครูจะเห็นปุ่มแจ้งไซซ์ในหน้าภาพรวม แยกจากของนักเรียน",!!(t!=null&&t.teacher_shirt_request_enabled))}</div><div class="grid md:grid-cols-2 gap-3 mt-3"><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">ค่าบำรุงสี (บาท/คน)</h3><p class="text-xs text-gray-500 mt-1">จำนวนเงินเริ่มต้นที่จะบันทึกทุกครั้งที่สแกน QR เก็บค่าบำรุง</p><input id="cfg-dues-amount" type="number" min="0" step="1" value="${Number((t==null?void 0:t.dues_amount)??30)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (%)</h3><p class="text-xs text-gray-500 mt-1">ค่าเริ่มต้นทุกสี — พ่อสี/แม่สีแต่ละคนตั้งค่าเฉพาะสีตัวเองทับได้ในหน้าจัดการสี</p><input id="cfg-cert-threshold" type="number" min="0" max="100" step="1" value="${Number((t==null?void 0:t.cert_attendance_threshold_pct)??80)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div></div></section>`:""}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${(A==null?void 0:A.length)||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(A||[]).filter(g=>g.status==="pending").length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${B.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${j.map(g=>`<th>${Q(g)}</th>`).join("")}<th>รวม</th></tr></thead><tbody>${(_||[]).map(g=>{const d=B.filter(f=>{var I;return((I=f.students)==null?void 0:I.house_color)===g.name});return`<tr class="border-t"><td class="p-3 font-bold" style="color:${g.hex_color}">สี${Q(g.name)}</td>${j.map(f=>`<td class="text-center">${d.filter(I=>I.confirmed_size===f).length}</td>`).join("")}<td class="text-center font-bold">${d.length}</td></tr>`}).join("")}</tbody></table></div>${H?'<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>':""}${m?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${(q==null?void 0:q.map(g=>{var d;return`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${g.proposed_logo_url?`<img src="${Q(g.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:""}<div class="flex-1"><b>ทีมสี${Q((d=g.team_colors)==null?void 0:d.name)}</b><p class="text-xs text-gray-500">${Q(g.proposed_name||g.proposed_motto||"เปลี่ยนโลโก้/อัตลักษณ์")}</p></div><button data-review="${g.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${g.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`}).join(""))||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:""}</div>`,m){const g=document.createElement("section");g.id="sports-gallery-type-admin",g.className="bg-white border rounded-2xl p-5";const d=e.querySelector("#sports-team-membership-admin");d?d.before(g):(a=e.querySelector(".max-w-7xl"))==null||a.appendChild(g),await pl(e,h),await Eo(e.querySelector(".max-w-7xl")||e,h.id);const f=(s=e.querySelector("#cfg-dues-amount"))==null?void 0:s.closest(".grid");f==null||f.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-violet-50 border-violet-200"><h3 class="font-bold text-sm text-violet-900">ค่าเสื้อกีฬาสี (บาท/คน)</h3><p class="text-xs text-violet-700 mt-1">ยอดที่ครูที่ปรึกษาศาสนาจะบันทึกเมื่อสแกนรับชำระ แยกชาย/หญิงเพราะราคาต่างกัน ตั้งเป็น 0 เพื่อปิดรับชำระของเพศนั้นชั่วคราว</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-violet-700">👦 ชาย</span><input id="cfg-shirt-payment-amount-m" type="number" min="0" step="1" value="${Number((t==null?void 0:t.shirt_payment_amount_m)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-violet-700">👧 หญิง</span><input id="cfg-shirt-payment-amount-w" type="number" min="0" step="1" value="${Number((t==null?void 0:t.shirt_payment_amount_w)||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),(n=e.querySelector("#cfg-shirt-payment-amount-m"))==null||n.addEventListener("input",x=>{Ue.pendingCfg={...Ue.pendingCfg||{},shirt_payment_amount_m:Math.max(0,Number(x.target.value)||0)}}),(l=e.querySelector("#cfg-shirt-payment-amount-w"))==null||l.addEventListener("input",x=>{Ue.pendingCfg={...Ue.pendingCfg||{},shirt_payment_amount_w:Math.max(0,Number(x.target.value)||0)}}),f==null||f.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-teal-50 border-teal-200"><h3 class="font-bold text-sm text-teal-900">📏 ไซซ์เริ่มต้นขั้นต่ำ</h3><p class="text-xs text-teal-700 mt-1">ไซซ์ที่เล็กกว่าที่เลือกจะถูกซ่อนจากตัวเลือกของกลุ่มนั้นอัตโนมัติ (เฉพาะตอนนักเรียนเลือกไซซ์เอง — ตารางสรุปยอดยังโชว์ครบทุกไซซ์)</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-teal-700">ม.ต้น (ม.1-3)</span><select id="cfg-shirt-size-min-junior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${p.map(x=>`<option value="${Q(x.code)}" ${(t==null?void 0:t.shirt_size_min_junior)===x.code?"selected":""}>${Q(x.code)}</option>`).join("")}</select></label><label class="block"><span class="text-xs text-teal-700">ม.ปลาย/ปวช (ม.4-6, ปวช.1-3)</span><select id="cfg-shirt-size-min-senior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${p.map(x=>`<option value="${Q(x.code)}" ${((t==null?void 0:t.shirt_size_min_senior)||"M")===x.code?"selected":""}>${Q(x.code)}</option>`).join("")}</select></label></div></div>`),f==null||f.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-sky-50 border-sky-200"><h3 class="font-bold text-sm text-sky-900">🎽 วันเช็คชื่อเข้าสีวันแรก</h3><p class="text-xs text-sky-700 mt-1">เฉพาะวันนี้ ให้ครูที่ปรึกษา (สามัญ/ศาสนา) เช็คชื่อนักเรียนแทนฝ่ายสี (ฝ่ายสีเห็นข้อมูลอ่านอย่างเดียวชั่วคราว) เว้นว่างเพื่อปิดระบบนี้</p><input id="cfg-advisor-checkin-date" type="date" value="${Q((t==null?void 0:t.advisor_checkin_date)||"")}" class="mt-3 w-full border border-sky-200 rounded-xl px-3 py-2 text-sm bg-white"><label class="flex items-center gap-2 mt-3 text-xs text-sky-800 cursor-pointer"><input id="cfg-advisor-checkin-backfill" type="checkbox" ${t!=null&&t.advisor_checkin_backfill_enabled?"checked":""} class="w-4 h-4">เปิดให้ครูที่ปรึกษาเช็คชื่อ<b>ย้อนหลัง</b>ได้ (เลือกวันที่จากปฏิทินปฏิบัติงาน ไม่จำกัดแค่วันที่ตั้งไว้ด้านบน — ใช้แก้ห้องที่ครูลา/ตกหล่น)</label></div>`),f==null||f.insertAdjacentHTML("beforeend",`<div class="rounded-2xl border p-4 bg-emerald-50 border-emerald-200 md:col-span-2"><h3 class="font-bold text-sm text-emerald-900">🏃 ช่วงเวลารับสมัครและแก้ไขข้อมูลนักกีฬา</h3><p class="text-xs text-emerald-700 mt-1">หลังปิดรับสมัคร สามารถเปิดช่วงแก้ไขข้อมูลเดิมให้ครูและสต๊าฟแต่ละสีได้ โดยแก้ได้เฉพาะนักกีฬาของสีตนเอง เช่น หมายเลขเสื้อ ไม่สามารถเพิ่มหรือถอนรายชื่อผ่านช่องทางนี้</p><div class="grid md:grid-cols-3 gap-2 mt-3"><label class="block"><span class="text-xs text-emerald-800">ปิดรับสมัคร</span><input id="cfg-athlete-registration-closes" type="datetime-local" value="${Q(ra(t==null?void 0:t.athlete_registration_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">เปิดให้ฝ่ายสีแก้ไข</span><input id="cfg-athlete-edit-opens" type="datetime-local" value="${Q(ra(t==null?void 0:t.athlete_edit_opens_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">ปิดการแก้ไข</span><input id="cfg-athlete-edit-closes" type="datetime-local" value="${Q(ra(t==null?void 0:t.athlete_edit_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`),f==null||f.insertAdjacentHTML("afterend",'<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👕 ไซซ์เสื้อที่เปิดให้แจ้งได้</h3><button id="shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border">+ เพิ่มไซซ์</button></div><p class="text-xs text-gray-500 mb-3">ตั้งค่าที่นี่หรือฝั่ง AZIZGAMES ก็ได้ บันทึกในตารางเดียวกัน อีกฝั่งเห็นอัตโนมัติ — กด "บันทึกการตั้งค่า" ด้านบนเพื่อบันทึกด้วย</p><div id="shirt-size-rows" class="space-y-2"></div></div>');const I=()=>{const x=e.querySelector("#shirt-size-rows");x&&(x.innerHTML=w.map((S,k)=>`<div class="flex items-center gap-2" data-size-row="${k}"><input data-size-code value="${Q(S.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-size-chest type="number" min="0" value="${Q(S.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-size-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),x.querySelectorAll("[data-size-row]").forEach(S=>{const k=Number(S.dataset.sizeRow);S.querySelector("[data-size-code]").addEventListener("input",E=>{w[k].code=E.target.value}),S.querySelector("[data-size-chest]").addEventListener("input",E=>{w[k].chest=E.target.value}),S.querySelector("[data-size-remove]").addEventListener("click",()=>{w.splice(k,1),I()})}))};I(),e.querySelector("#shirt-size-add").addEventListener("click",()=>{w.push({code:"",chest:""}),I()}),(b=(o=e.querySelector("#shirt-size-rows"))==null?void 0:o.closest("div.rounded-2xl"))==null||b.insertAdjacentHTML("afterend",`<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👔 ไซซ์เสื้อคุณครู</h3><button id="teacher-shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border hidden">+ เพิ่มไซซ์</button></div><label class="flex items-center gap-2 text-xs text-gray-600 mb-3"><input id="teacher-shirt-use-student-sizes" type="checkbox" ${(t==null?void 0:t.teacher_shirt_use_student_sizes)!==!1?"checked":""} class="w-4 h-4">ใช้ตารางไซซ์เดียวกับนักเรียน (ปลดติ๊กเพื่อตั้งไซซ์แยกสำหรับครู)</label><div id="teacher-shirt-size-rows" class="space-y-2"></div></div>`);const i=()=>{const x=e.querySelector("#teacher-shirt-size-rows");x&&(x.innerHTML=L.map((S,k)=>`<div class="flex items-center gap-2" data-tsize-row="${k}"><input data-tsize-code value="${Q(S.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-tsize-chest type="number" min="0" value="${Q(S.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-tsize-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join(""),x.querySelectorAll("[data-tsize-row]").forEach(S=>{const k=Number(S.dataset.tsizeRow);S.querySelector("[data-tsize-code]").addEventListener("input",E=>{L[k].code=E.target.value}),S.querySelector("[data-tsize-chest]").addEventListener("input",E=>{L[k].chest=E.target.value}),S.querySelector("[data-tsize-remove]").addEventListener("click",()=>{L.splice(k,1),i()})}))},$=()=>{var S;const x=(S=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:S.checked;e.querySelector("#teacher-shirt-size-rows").style.display=x?"none":"",e.querySelector("#teacher-shirt-size-add").classList.toggle("hidden",!!x)};i(),$(),e.querySelector("#teacher-shirt-use-student-sizes").addEventListener("change",$),e.querySelector("#teacher-shirt-size-add").addEventListener("click",()=>{L.push({code:"",chest:""}),i()})}e.querySelector("#shirt-export").onclick=()=>{const g=["รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ",...B.map(f=>{var I,i,$,x;return[(I=f.students)==null?void 0:I.student_code,(i=f.students)==null?void 0:i.full_name,($=f.students)==null?void 0:$.main_room,(x=f.students)==null?void 0:x.house_color,f.confirmed_size,f.status].map(S=>`"${String(S||"").replaceAll('"','""')}"`).join(",")})],d=document.createElement("a");d.href=URL.createObjectURL(new Blob(["\uFEFF"+g.join(`
`)],{type:"text/csv"})),d.download="sports-shirt-summary.csv",d.click(),URL.revokeObjectURL(d.href)},e.querySelectorAll("[data-cfg]").forEach(g=>g.addEventListener("click",()=>{const d=g.dataset.enabled!=="true";g.dataset.enabled=d?"true":"false",Ue.pendingCfg={...Ue.pendingCfg||{},[g.dataset.cfg]:d},g.textContent=d?"ปิดใช้งาน":"เปิดใช้งาน",oe("เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน")})),(r=e.querySelector("#open-sports-overview"))==null||r.addEventListener("click",()=>Ls()),(u=e.querySelector("#cfg-save"))==null||u.addEventListener("click",async()=>{var k,E,T,M,N,O,U;const g=z=>{var F;const P=(F=e.querySelector(z))==null?void 0:F.value;return P?new Date(P).toISOString():null},d=g("#cfg-athlete-registration-closes"),f=g("#cfg-athlete-edit-opens"),I=g("#cfg-athlete-edit-closes");if(f&&d&&new Date(f)<new Date(d))return oe("เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร","error");if(I&&f&&new Date(I)<=new Date(f))return oe("เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข","error");const i={shirt_request_enabled:!!(t!=null&&t.shirt_request_enabled),shirt_summary_enabled:!!(t!=null&&t.shirt_summary_enabled),team_workspace_enabled:!!(t!=null&&t.team_workspace_enabled),shirt_vote_enabled:!!(t!=null&&t.shirt_vote_enabled),teacher_shirt_request_enabled:!!(t!=null&&t.teacher_shirt_request_enabled),teacher_shirt_use_student_sizes:((k=e.querySelector("#teacher-shirt-use-student-sizes"))==null?void 0:k.checked)!==!1,dues_amount:Number((E=e.querySelector("#cfg-dues-amount"))==null?void 0:E.value)||30,cert_attendance_threshold_pct:Number((T=e.querySelector("#cfg-cert-threshold"))==null?void 0:T.value)||80,advisor_checkin_date:((M=e.querySelector("#cfg-advisor-checkin-date"))==null?void 0:M.value)||null,advisor_checkin_backfill_enabled:!!((N=e.querySelector("#cfg-advisor-checkin-backfill"))!=null&&N.checked),shirt_size_min_junior:((O=e.querySelector("#cfg-shirt-size-min-junior"))==null?void 0:O.value)||null,shirt_size_min_senior:((U=e.querySelector("#cfg-shirt-size-min-senior"))==null?void 0:U.value)||null,athlete_registration_closes_at:d,athlete_edit_opens_at:f,athlete_edit_closes_at:I,...Ue.pendingCfg||{}},{error:$}=await se.from("sports_portal_settings").update({...i,updated_at:new Date().toISOString()}).eq("event_id",h.id);if($)return oe($.message,"error");const x=w.filter(z=>String(z.code||"").trim()).map(z=>({code:String(z.code).trim(),chest:Number(z.chest)||0}));if(x.length)try{await dl(x)}catch(z){oe("บันทึกไซซ์เสื้อไม่สำเร็จ: "+z.message,"error")}const S=L.filter(z=>String(z.code||"").trim()).map(z=>({code:String(z.code).trim(),chest:Number(z.chest)||0}));if(S.length)try{await il(S)}catch(z){oe("บันทึกไซซ์เสื้อครูไม่สำเร็จ: "+z.message,"error")}try{await ll(i.shirt_request_enabled)}catch(z){console.warn("Unable to sync AZIZGAMES shirt button",z)}Ue.pendingCfg={},oe("บันทึกการเปิดใช้งานแล้ว"),Ue()}),e.querySelectorAll("[data-review]").forEach(g=>g.onclick=async()=>{const{error:d}=await se.rpc("review_team_identity",{p_request:g.dataset.review,p_decision:g.dataset.decision,p_comment:null});if(d)return oe(d.message,"error");oe("บันทึกผลตรวจสอบแล้ว"),Ue()}),H&&Tt(e,h,_||[],{isAdmin:m,myTeamMemberships:y||[]})}catch(h){console.error(h),e.innerHTML=xt()}}function ul({wrap:e,items:a,placeholder:s="ค้นหา...",emptyLabel:n="-- เลือก --",photoClass:l="w-7 h-9 rounded object-cover flex-shrink-0 border",onChange:o=null}){let b=null,r=!1;e.style.position="relative",e.innerHTML=`
    <div class="ps-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ps-display flex-1 text-sm text-gray-400 truncate">${Q(n)}</span>
      <svg class="ps-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ps-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100"><input class="ps-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${Q(s)}" autocomplete="off"></div>
      <ul class="ps-list max-h-52 overflow-y-auto"></ul>
    </div>`;const u=e.querySelector(".ps-input"),h=e.querySelector(".ps-dropdown"),t=e.querySelector(".ps-search"),p=e.querySelector(".ps-list"),w=e.querySelector(".ps-display"),c=e.querySelector(".ps-arrow");function L(m=""){const y=m.toLowerCase(),H=a.filter(_=>!m||(_.label||"").toLowerCase().includes(y)||(_.sub||"").toLowerCase().includes(y));p.innerHTML=H.length?H.map(_=>{const A=(b==null?void 0:b.id)===_.id;return`<li data-id="${Q(String(_.id))}" class="ps-opt px-3 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 ${A?"bg-indigo-50 font-semibold text-indigo-700":"text-gray-700"}">
        ${_.photo?`<img src="${Q(_.photo)}" class="${l}">`:""}
        <span class="truncate">${Q(_.label)}${_.sub?` <span class="text-xs text-gray-400 font-mono">${Q(_.sub)}</span>`:""}</span>
      </li>`}).join(""):'<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบรายการ</li>',p.querySelectorAll(".ps-opt").forEach(_=>_.addEventListener("mousedown",A=>{A.preventDefault(),b=a.find(q=>String(q.id)===_.dataset.id)||null,w.textContent=b?b.label:n,w.classList.toggle("text-gray-400",!b),w.classList.toggle("text-gray-800",!!b),C(),o==null||o((b==null?void 0:b.id)??null)}))}function v(){r=!0,h.classList.remove("hidden"),c.style.transform="rotate(180deg)",t.value="",L(),setTimeout(()=>t.focus(),50)}function C(){r=!1,h.classList.add("hidden"),c.style.transform=""}return u.addEventListener("click",()=>r?C():v()),u.addEventListener("keydown",m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),r?C():v())}),t.addEventListener("input",()=>L(t.value.trim())),document.addEventListener("mousedown",m=>{r&&!e.contains(m.target)&&C()},!0),{getValue:()=>(b==null?void 0:b.id)??null,reset:()=>{b=null,w.textContent=n,w.classList.add("text-gray-400"),w.classList.remove("text-gray-800")}}}async function Tt(e,a,s=[],n={isAdmin:!1,myTeamMemberships:[]}){var p,w,c,L,v,C,m;const l=e.querySelector("#sports-team-membership-admin");if(!l)return;const o={lead_teacher:"หัวหน้าครูประจำสี",teacher:"ครูประจำสี",staff_lead:"หัวหน้านักเรียนสต๊าฟสี",staff:"นักเรียนสต๊าฟสี"},b={members:"สมาชิก",registrations:"ลงทะเบียนกีฬา",announcements:"ประกาศ",tasks:"งานของสี",shirt_summary:"สรุปเสื้อ",attendance:"เช็คชื่อ",dues:"เก็บค่าบำรุงสี",expenses:"บันทึกรายรับ-รายจ่ายสี",comp_assign:"มอบหมายรายการแข่งขัน"},r=y=>/^\s*(?:ม\.?\s*[456]|ปวช\.?\s*[123])(?:\s*\/|\s|$)/i.test(String((y==null?void 0:y.main_room)||"")),u=new Set((n.myTeamMemberships||[]).filter(y=>y.role==="lead_teacher").map(y=>y.team_color_id)),h=n.isAdmin?s:s.filter(y=>u.has(y.id)),t=!!n.isAdmin;if(!h.length){l.innerHTML='<div class="p-6 text-center text-gray-400">ยังไม่มีสีที่คุณมีสิทธิ์มอบหมายสต๊าฟ</div>';return}try{const[{data:y,error:H},{data:_},A]=await Promise.all([se.from("sports_team_memberships").select("*,team_colors(name,hex_color),teachers(full_name,teacher_code),students(full_name,student_code,main_room)").eq("event_id",a.id).eq("is_active",!0).order("created_at",{ascending:!1}),se.from("teachers").select("id,teacher_code,full_name,dept,image_url,profile_id").not("profile_id","is",null).order("full_name"),Ft("students",k=>k.select("id,student_code,full_name,main_room,profile_id,is_active,image_url,team_color_id,house_color").order("student_code"))]);if(H)throw H;const q=new Set(h.map(k=>k.id)),j=(y||[]).filter(k=>n.isAdmin||q.has(k.team_color_id)),B=new Set((y||[]).filter(k=>k.role==="staff_lead").map(k=>k.team_color_id));let g=[];l.innerHTML=`<div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="font-bold">🛡️ มอบหมายผู้ดูแลประจำสี</h2><p class="text-xs text-gray-500 mt-1">${n.isAdmin?"แอดมินกำหนดครูประจำสีและนักเรียนสต๊าฟได้ทุกสี":"พ่อสี/แม่สีมอบหมายได้เฉพาะนักเรียนสต๊าฟในสีของตนเอง"}</p></div><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ใช้งานอยู่ ${(y==null?void 0:y.length)||0} คน</span></div>
      <div class="grid lg:grid-cols-5 gap-3 mb-4">
        <select id="team-member-color" class="team-field rounded-xl px-3 py-2 text-sm">${h.map(k=>`<option value="${Q(k.id)}">สี${Q(k.name)}</option>`).join("")}</select>
        <input id="team-member-code-input" class="team-field rounded-xl px-3 py-2 text-sm lg:col-span-2" placeholder="กรอกรหัสครู/รหัสนักเรียน เช่น 1087, 608001">
        <select id="team-member-role" class="team-field rounded-xl px-3 py-2 text-sm">
          ${t?'<option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option>':""}
          <option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option>
          <option value="staff">นักเรียนสต๊าฟสี</option>
        </select>
        <button id="team-member-search" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">ค้นหารายชื่อ</button>
      </div>
      <p class="text-[11px] text-gray-500 -mt-2 mb-3">มอบสิทธิ์นักเรียนระดับ ม.4–ม.6 และ ปวช.1–3 ที่อยู่สีเดียวกันและมีบัญชีเข้าใช้งานระบบแล้ว</p>
      <div class="flex flex-wrap gap-2 mb-4">${Object.entries(b).map(([k,E])=>Wa(k,E,!0)).join("")}</div>
      <div id="team-member-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4">
        <p class="text-xs font-bold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบหมาย:</p>
        <div id="team-member-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div>
        <button id="team-member-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันและมอบหมายสิทธิ์ประจำสี</button>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 mt-2 mb-2"><h3 class="font-bold text-sm">📋 ตรวจสอบรายชื่อผู้ได้รับสิทธิ์</h3><span id="team-member-count" class="text-xs text-gray-500"></span></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <select id="team-member-filter-color" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${h.map(k=>`<option value="${Q(k.id)}">สี${Q(k.name)}</option>`).join("")}</select>
        <select id="team-member-filter-role" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกบทบาท</option><option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option><option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option><option value="staff">นักเรียนสต๊าฟสี</option></select>
        <input id="team-member-filter-search" class="team-field rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ/รหัสครู/รหัสนักเรียน...">
      </div>
      <div id="team-member-table-wrap"></div>`;const d=()=>{var N;const k=(N=l.querySelector("#team-member-color"))==null?void 0:N.value,E=l.querySelector("#team-member-role"),T=E==null?void 0:E.querySelector('option[value="staff_lead"]');if(!E||!T)return;const M=B.has(k);T.disabled=M,T.textContent=M?"หัวหน้านักเรียนสต๊าฟสี (มีแล้ว — เลือกนักเรียนสต๊าฟสีแทน)":"หัวหน้านักเรียนสต๊าฟสี",M&&E.value==="staff_lead"&&(E.value="staff")};d(),(p=l.querySelector("#team-member-color"))==null||p.addEventListener("change",d);const f=k=>{var E,T,M,N;return(E=k.teachers)!=null&&E.full_name?`${k.teachers.full_name}${k.teachers.teacher_code?` (${k.teachers.teacher_code})`:""}`:`${((T=k.students)==null?void 0:T.student_code)||""} ${((M=k.students)==null?void 0:M.full_name)||""} ${(N=k.students)!=null&&N.main_room?`· ${k.students.main_room}`:""}`},I=(k,E)=>{var N;(N=document.getElementById("team-member-edit-modal"))==null||N.remove();const T=document.createElement("div");T.id="team-member-edit-modal",T.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",T.setAttribute("role","dialog"),T.setAttribute("aria-modal","true"),T.innerHTML='<div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"><div class="p-5 border-b border-gray-100"><h3 class="font-bold text-gray-800">✏️ แก้ไขสิทธิ์</h3><p class="text-xs text-gray-500 mt-1">แตะเพื่อเปิด/ปิดสิทธิ์แต่ละอย่าง แล้วกดบันทึก</p></div><div class="p-5"><div id="team-member-edit-perms" class="flex flex-wrap gap-2"></div></div><div class="p-4 border-t border-gray-100 flex gap-2"><button id="team-member-edit-cancel" class="flex-1 py-2.5 rounded-xl border text-sm font-bold">ยกเลิก</button><button id="team-member-edit-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold">บันทึก</button></div></div>',document.body.appendChild(T);const M=T.querySelector("#team-member-edit-perms");M.innerHTML=Object.entries(b).map(([O,U])=>Wa(O,U,(E==null?void 0:E[O])===!0)).join(""),M.querySelectorAll("[data-team-perm]").forEach(O=>O.addEventListener("click",()=>{const U=O.dataset.enabled!=="true";O.dataset.enabled=U?"true":"false",O.className=`px-3 py-2 rounded-xl text-xs font-bold border ${U?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const z=(O.textContent.split(":").pop()||"").trim();O.textContent=`${U?"อนุญาต":"ไม่อนุญาต"}: ${z}`})),T.querySelector("#team-member-edit-cancel").onclick=()=>T.remove(),T.onclick=O=>{O.target===T&&T.remove()},T.querySelector("#team-member-edit-save").onclick=async()=>{const O={};M.querySelectorAll("[data-team-perm]").forEach(z=>O[z.dataset.teamPerm]=z.dataset.enabled==="true");const{error:U}=await se.from("sports_team_memberships").update({permissions:O}).eq("id",k);if(U)return oe(U.message,"error");T.remove(),oe("บันทึกสิทธิ์แล้ว"),Tt(e,a,s,n)}},i=()=>{var U,z,P;const k=((U=l.querySelector("#team-member-filter-color"))==null?void 0:U.value)||"",E=((z=l.querySelector("#team-member-filter-role"))==null?void 0:z.value)||"",T=(((P=l.querySelector("#team-member-filter-search"))==null?void 0:P.value)||"").trim().toLowerCase(),M=j.filter(F=>!(k&&F.team_color_id!==k||E&&F.role!==E||T&&!f(F).toLowerCase().includes(T))),N=l.querySelector("#team-member-count");N&&(N.textContent=`แสดง ${M.length} จาก ${j.length} คน`);const O=l.querySelector("#team-member-table-wrap");O.innerHTML=`<div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${M.map(F=>{var G,Y;const W=f(F),R=Object.entries(F.permissions||{}).filter(([,te])=>te).map(([te])=>b[te]||te).join(", ")||"ไม่มีสิทธิ์ย่อย",V=n.isAdmin||F.student_id&&["staff_lead","staff"].includes(F.role);return`<tr class="border-t"><td class="p-3 font-medium">${Q(W||"ไม่พบชื่อ")}</td><td class="p-3"><span class="font-bold" style="color:${Q(((G=F.team_colors)==null?void 0:G.hex_color)||"#334155")}">สี${Q(((Y=F.team_colors)==null?void 0:Y.name)||"—")}</span></td><td class="p-3">${Q(o[F.role]||F.role)}</td><td class="p-3 text-xs text-gray-500">${Q(R)}</td><td class="p-3 text-right whitespace-nowrap">${V?`<button data-team-member-edit="${Q(F.id)}" data-perms='${Q(JSON.stringify(F.permissions||{}))}' class="px-3 py-1.5 rounded-lg border text-indigo-600 text-xs mr-1">แก้ไขสิทธิ์</button><button data-team-member-remove="${Q(F.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join("")||`<tr><td colspan="5" class="p-6 text-center text-gray-400">${j.length?"ไม่พบรายชื่อที่ตรงกับตัวกรอง":"ยังไม่มีผู้ได้รับสิทธิ์ประจำสี"}</td></tr>`}</tbody></table></div>`,O.querySelectorAll("[data-team-member-remove]").forEach(F=>F.addEventListener("click",async()=>{const{error:W}=await se.from("sports_team_memberships").update({is_active:!1,ends_at:new Date().toISOString()}).eq("id",F.dataset.teamMemberRemove);if(W)return oe(W.message,"error");oe("ปิดสิทธิ์แล้ว"),Tt(e,a,s,n)})),O.querySelectorAll("[data-team-member-edit]").forEach(F=>F.addEventListener("click",()=>{let W={};try{W=JSON.parse(F.dataset.perms||"{}")}catch{W={}}I(F.dataset.teamMemberEdit,W)}))};i(),(w=l.querySelector("#team-member-filter-color"))==null||w.addEventListener("change",i),(c=l.querySelector("#team-member-filter-role"))==null||c.addEventListener("change",i),(L=l.querySelector("#team-member-filter-search"))==null||L.addEventListener("input",i);const $=k=>String(k||"").split(/[\s,]+/).map(E=>E.trim()).filter(Boolean),x=k=>{var T;(T=document.getElementById("team-member-lookup-issue"))==null||T.remove();const E=document.createElement("div");E.id="team-member-lookup-issue",E.className="fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4",E.setAttribute("role","dialog"),E.setAttribute("aria-modal","true"),E.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"><div class="p-5 border-b border-red-100 bg-red-50"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-full bg-red-100 grid place-items-center text-xl flex-shrink-0">🔎</div><div><h3 class="font-bold text-red-800">ไม่สามารถเลือกรายชื่อนี้ได้</h3><p class="text-xs text-red-600 mt-1">ระบบตรวจสอบพบสาเหตุดังต่อไปนี้</p></div></div></div><div class="p-5 space-y-2 max-h-[55vh] overflow-y-auto">${k.map(M=>`<div class="rounded-xl border border-gray-200 p-3"><b class="text-sm text-gray-800">รหัส ${Q(M.code)}</b><p class="text-xs text-gray-600 mt-1">${Q(M.reason)}</p></div>`).join("")}</div><div class="p-4 border-t border-gray-100"><button id="team-member-lookup-close" class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold">รับทราบ</button></div></div>`,document.body.appendChild(E),E.querySelector("#team-member-lookup-close").onclick=()=>E.remove(),E.onclick=M=>{M.target===E&&E.remove()}},S=()=>{const k=l.querySelector("#team-member-preview"),E=l.querySelector("#team-member-preview-cards");if(!g.length){k==null||k.classList.add("hidden");return}k==null||k.classList.remove("hidden"),E.innerHTML=g.map(T=>`<div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">${T.image_url?`<img src="${Q(T.image_url)}" class="${T.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} object-cover flex-shrink-0">`:`<div class="${T.kind==="student"?"w-10 h-14":"w-10 h-10 rounded-full"} bg-indigo-50 text-indigo-600 grid place-items-center font-bold flex-shrink-0">${T.kind==="teacher"?"ครู":"นร"}</div>`}<div class="min-w-0"><p class="font-bold text-gray-800 text-xs truncate">${Q(T.full_name)} <span class="ml-1 px-1.5 py-0.5 rounded ${T.kind==="teacher"?"bg-amber-100 text-amber-800":"bg-emerald-100 text-emerald-800"} text-[9px] font-bold">${T.kind==="teacher"?"คุณครู":"นักเรียนสต๊าฟ"}</span></p><p class="text-[10px] text-gray-400">${Q(T.detail)}</p></div></div>`).join("")};(v=l.querySelector("#team-member-search"))==null||v.addEventListener("click",()=>{var P,F;const k=$((P=l.querySelector("#team-member-code-input"))==null?void 0:P.value);if(!k.length)return oe("กรุณากรอกรหัสครูหรือรหัสนักเรียน","error");const E=(F=l.querySelector("#team-member-color"))==null?void 0:F.value,T=h.find(W=>W.id===E),M=new Set(k.map(String)),N=t?(_||[]).filter(W=>M.has(String(W.teacher_code))).map(W=>({...W,kind:"teacher",code:W.teacher_code,detail:`รหัสครู ${W.teacher_code} · กลุ่มสาระ ${W.dept||"—"}`})):[],O=new Set(N.map(W=>String(W.code))),U=[],z=[];k.forEach(W=>{if(O.has(String(W)))return;const R=(A||[]).filter(G=>String(G.student_code)===String(W));if(!R.length){z.push({code:W,reason:"ไม่พบรหัสนักเรียนนี้ในฐานข้อมูล"});return}const V=R.find(G=>G.is_active)||R[0];if(!V.is_active){z.push({code:W,reason:"บัญชีนักเรียนถูกปิดสถานะ ไม่ใช่นักเรียนที่กำลังใช้งาน"});return}if(!(V.team_color_id===E||V.house_color===(T==null?void 0:T.name))){z.push({code:W,reason:`นักเรียนอยู่สี${V.house_color||"อื่น"} ไม่ใช่สี${(T==null?void 0:T.name)||"ที่เลือก"}`});return}if(!r(V)){z.push({code:W,reason:`นักเรียนอยู่ห้อง ${V.main_room||"ไม่ระบุ"} ระบบอนุญาตให้มอบสิทธิ์เฉพาะ ม.4–ม.6 และ ปวช.1–3`});return}if(!V.profile_id){z.push({code:W,reason:"นักเรียนยังไม่มีบัญชีเข้าใช้งานระบบ จึงยังผูกสิทธิ์ประจำสีไม่ได้"});return}U.push({...V,kind:"student",code:V.student_code,detail:`รหัส ${V.student_code} · ห้อง ${V.main_room||"—"} · สี${(T==null?void 0:T.name)||"—"}`})}),g=[...N,...U],z.length&&x(z),g.length&&S()}),(C=l.querySelector("#team-member-code-input"))==null||C.addEventListener("keydown",k=>{var E;k.key==="Enter"&&(k.preventDefault(),(E=l.querySelector("#team-member-search"))==null||E.click())}),(m=l.querySelector("#team-member-add"))==null||m.addEventListener("click",async()=>{var O,U;const k=(O=l.querySelector("#team-member-role"))==null?void 0:O.value,E=(U=l.querySelector("#team-member-color"))==null?void 0:U.value;if(!E||!g.length)return oe("กรุณาเลือกสีและค้นหารายชื่อก่อน","error");if(!n.isAdmin&&!u.has(E))return oe("หัวหน้าครูประจำสีมอบหมายได้เฉพาะสีของตนเอง","error");if(g.some(z=>z.kind==="student")&&!["staff_lead","staff"].includes(k))return oe("บทบาทนี้ใช้กับครูเท่านั้น หากจะมอบหมายให้นักเรียนให้เลือกบทบาทนักเรียนสต๊าฟ","error");if(g.some(z=>z.kind==="teacher")&&!["lead_teacher","teacher"].includes(k))return oe("บทบาทนี้ใช้กับนักเรียนเท่านั้น หากจะมอบหมายให้ครูให้เลือกบทบาทครูประจำสี","error");if(k==="staff_lead"&&(B.has(E)||g.length>1))return oe("สีนี้มีหัวหน้านักเรียนสต๊าฟสีอยู่แล้ว หรือเลือกได้ทีละ 1 คนเท่านั้นสำหรับบทบาทนี้","error");const T={};l.querySelectorAll("[data-team-perm]").forEach(z=>T[z.dataset.teamPerm]=z.dataset.enabled==="true");const M=g.map(z=>({event_id:a.id,team_color_id:E,profile_id:z.profile_id,teacher_id:z.kind==="teacher"?Number(z.id):null,student_id:z.kind==="student"?Number(z.id):null,role:k,permissions:T,is_active:!0,ends_at:null})),{error:N}=await se.from("sports_team_memberships").upsert(M,{onConflict:"event_id,team_color_id,profile_id"});if(N)return oe(N.message,"error");oe(`มอบหมายสิทธิ์ประจำสีแล้ว ${M.length} คน`),Tt(e,a,s,n)}),l.querySelectorAll("[data-team-perm]").forEach(k=>k.addEventListener("click",()=>{const E=k.dataset.enabled!=="true";k.dataset.enabled=E?"true":"false",k.className=`px-3 py-2 rounded-xl text-xs font-bold border ${E?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-slate-50 text-slate-500 border-slate-200"}`;const T=(k.textContent.split(":").pop()||"").trim();k.textContent=`${E?"อนุญาต":"ไม่อนุญาต"}: ${T}`}))}catch(y){console.error(y),l.innerHTML='<div class="p-5 rounded-2xl bg-red-50 text-red-700 text-sm">โหลดหน้ามอบหมายผู้ดูแลสีไม่สำเร็จ</div>'}}async function ml(){const e=mt();e.innerHTML='<div class="py-16 text-center">กำลังโหลดบัญชีเงินกีฬาสี...</div>';try{const{event:a}=await gt(),[{data:s,error:n},{data:l,error:o}]=await Promise.all([se.from("team_colors").select("id,name,hex_color,gender").eq("event_id",a.id).order("gender").order("display_order"),se.from("sports_team_fund_entries").select("*").eq("event_id",a.id).in("category",["school_support","prize"]).order("entry_date",{ascending:!1}).order("created_at",{ascending:!1})]);if(n)throw n;if(o)throw o;let b=l||[];const r=h=>(s||[]).find(t=>t.id===h);e.innerHTML=`<div class="max-w-5xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">💰 บัญชีเงินกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">เพิ่ม/แก้ไข/ลบเงินสนับสนุนโรงเรียนและเงินรางวัลของแต่ละสี — ข้อมูลจะไปแสดงในหน้า "สีของฉัน" ของนักเรียนทุกคนทันที</p></div>
      <section class="bg-white border rounded-2xl p-5">
        <h2 class="font-bold mb-3">➕ เพิ่มรายการใหม่</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          <select id="fund-admin-color" class="border rounded-xl px-3 py-2 text-sm">${(s||[]).map(h=>`<option value="${Q(h.id)}">สี${Q(h.name)} (${h.gender==="M"?"ชาย":"หญิง"})</option>`).join("")}</select>
          <select id="fund-admin-category" class="border rounded-xl px-3 py-2 text-sm"><option value="school_support">เงินสนับสนุนโรงเรียน</option><option value="prize">เงินรางวัล</option></select>
          <input id="fund-admin-amount" type="number" min="1" step="1" placeholder="จำนวนเงิน" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-desc" type="text" placeholder="รายละเอียด เช่น ชนะเลิศฟุตซอลชาย ม.ต้น" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-date" type="date" value="${Ga()}" class="border rounded-xl px-3 py-2 text-sm">
        </div>
        <button id="fund-admin-submit" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">➕ เพิ่มรายการ</button>
        <div id="fund-admin-status" class="text-xs text-gray-500 mt-2"></div>
      </section>
      <section class="bg-white border rounded-2xl overflow-hidden">
        <div class="p-4 border-b bg-gray-50"><h2 class="font-bold text-sm">📋 รายการทั้งหมด (${b.length})</h2></div>
        <div id="fund-admin-list" class="divide-y"></div>
      </section>
    </div>`;const u=()=>{const h=e.querySelector("#fund-admin-list");h.innerHTML=b.length?b.map(t=>{const p=r(t.team_color_id);return`<div class="p-3 flex items-center gap-3" data-fund-row="${Q(t.id)}">
          <span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${Q((p==null?void 0:p.hex_color)||"#94a3b8")}"></span>
          <div class="min-w-0 flex-1" data-fund-view>
            <div class="flex items-center gap-2 flex-wrap"><b class="text-sm">สี${Q((p==null?void 0:p.name)||"—")}</b><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${t.category==="prize"?"bg-amber-100 text-amber-700":"bg-blue-100 text-blue-700"}">${t.category==="prize"?"เงินรางวัล":"เงินสนับสนุนโรงเรียน"}</span></div>
            <p class="text-sm text-gray-700 mt-0.5">${Q(t.description)}</p>
            <p class="text-[11px] text-gray-400 mt-0.5">${new Date(t.entry_date).toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"})}</p>
          </div>
          <b class="flex-shrink-0 text-emerald-600">+${Number(t.amount).toLocaleString("th-TH")}</b>
          <div class="flex gap-1.5 flex-shrink-0">
            <button data-fund-edit="${Q(t.id)}" class="px-2.5 py-1.5 rounded-lg border text-xs font-bold text-gray-600 hover:bg-gray-50">แก้ไข</button>
            <button data-fund-del="${Q(t.id)}" class="px-2.5 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50">ลบ</button>
          </div>
        </div>`}).join(""):'<p class="p-8 text-center text-gray-400 text-sm">ยังไม่มีรายการ</p>',h.querySelectorAll("[data-fund-del]").forEach(t=>t.onclick=async()=>{if(!confirm("ลบรายการนี้?"))return;const p=t.dataset.fundDel,{error:w}=await se.from("sports_team_fund_entries").delete().eq("id",p);if(w){oe(w.message,"error");return}b=b.filter(c=>String(c.id)!==String(p)),oe("ลบรายการแล้ว"),u()}),h.querySelectorAll("[data-fund-edit]").forEach(t=>t.onclick=()=>{const p=t.dataset.fundEdit,w=h.querySelector(`[data-fund-row="${p}"]`),c=b.find(v=>String(v.id)===String(p)),L=w.querySelector("[data-fund-view]");L.innerHTML=`<div class="grid sm:grid-cols-3 gap-1.5">
          <input data-edit-amount type="number" min="1" step="1" value="${Number(c.amount)}" class="border rounded-lg px-2 py-1.5 text-xs">
          <input data-edit-desc type="text" value="${Q(c.description)}" class="border rounded-lg px-2 py-1.5 text-xs sm:col-span-2">
          <input data-edit-date type="date" value="${c.entry_date}" class="border rounded-lg px-2 py-1.5 text-xs">
          <div class="flex gap-1.5"><button data-edit-save class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">บันทึก</button><button data-edit-cancel class="px-3 py-1.5 rounded-lg border text-xs font-bold">ยกเลิก</button></div>
        </div>`,L.querySelector("[data-edit-cancel]").onclick=()=>u(),L.querySelector("[data-edit-save]").onclick=async()=>{const v=Number(L.querySelector("[data-edit-amount]").value),C=L.querySelector("[data-edit-desc]").value.trim(),m=L.querySelector("[data-edit-date]").value;if(!v||v<=0||!C){oe("กรอกข้อมูลให้ครบ","error");return}const{error:y}=await se.from("sports_team_fund_entries").update({amount:v,description:C,entry_date:m}).eq("id",p);if(y){oe(y.message,"error");return}Object.assign(c,{amount:v,description:C,entry_date:m}),oe("แก้ไขแล้ว"),u()}})};u(),e.querySelector("#fund-admin-submit").onclick=async()=>{const h=e.querySelector("#fund-admin-color").value,t=e.querySelector("#fund-admin-category").value,p=Number(e.querySelector("#fund-admin-amount").value),w=e.querySelector("#fund-admin-desc").value.trim(),c=e.querySelector("#fund-admin-date").value||Ga(),L=e.querySelector("#fund-admin-status");if(!p||p<=0||!w){L.textContent="กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ",L.className="text-xs text-red-600 mt-2";return}const v=e.querySelector("#fund-admin-submit");v.disabled=!0;const{data:C,error:m}=await se.from("sports_team_fund_entries").insert({event_id:a.id,team_color_id:h,category:t,amount:p,description:w,entry_date:c}).select().single();if(v.disabled=!1,m){L.textContent="บันทึกไม่สำเร็จ: "+m.message,L.className="text-xs text-red-600 mt-2";return}b.unshift(C),e.querySelector("#fund-admin-amount").value="",e.querySelector("#fund-admin-desc").value="",L.textContent="",oe("เพิ่มรายการแล้ว"),u()}}catch(a){console.error(a),e.innerHTML=xt()}}async function Ls(){const e=mt();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดภาพรวมกีฬาสี...</div>';try{const{event:a}=await gt(),[{data:s,error:n},{data:l}]=await Promise.all([se.rpc("get_sports_admin_overview",{p_event:a.id}),se.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);if(n)throw n;const o=(s==null?void 0:s.colors)||[],b=(s==null?void 0:s.attendance)||[],r=(s==null?void 0:s.dues)||[],u=(s==null?void 0:s.fund)||[],h=[...new Map(Ss(l).map(_=>[_.date,_.label])).entries()].map(([_,A])=>({date:_,label:A})).sort((_,A)=>_.date<A.date?-1:1),t=h.map(_=>_.date),p=new Map(b.map(_=>[`${_.team_color_id}|${_.session_date}`,Number(_.checked_count)])),w=new Map(r.map(_=>[_.team_color_id,_])),c=new Map(u.map(_=>[_.team_color_id,_])),L=_=>_>=80?"bg-emerald-500":_>=50?"bg-amber-500":"bg-red-500",v=()=>t.length?`<div class="overflow-x-auto"><table class="w-full text-sm border-collapse">
        <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left sticky left-0 bg-gray-50 z-10">สี</th>${h.map(_=>`<th class="p-2 text-center whitespace-nowrap"><div>${Q(_.date)}</div>${_.label?`<div class="text-[10px] font-normal text-gray-400">${Q(_.label)}</div>`:""}</th>`).join("")}</tr></thead>
        <tbody>${o.map(_=>{const A=Number(_.member_count)||0;return`<tr class="border-b"><td class="p-2 font-bold sticky left-0 bg-white z-10" style="color:${Q(_.hex_color)}">สี${Q(_.name)}</td>${t.map(q=>{const j=p.get(`${_.id}|${q}`)||0,B=A?Math.round(j*100/A):0;return`<td class="p-2 text-center"><div class="inline-flex flex-col items-center gap-1"><span class="text-xs font-bold">${j}/${A}</span><div class="w-14 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full ${L(B)}" style="width:${B}%"></div></div></div></td>`}).join("")}</tr>`}).join("")}</tbody>
      </table></div>`:'<p class="text-sm text-gray-400 text-center py-10">ยังไม่มีวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน — ไปตั้งวันที่ในหน้าปฏิทินปฏิบัติงานก่อน</p>',C=()=>{const _=o.reduce((j,B)=>j+(Number(B.member_count)||0),0),A=r.reduce((j,B)=>j+(Number(B.paid_count)||0),0),q=r.reduce((j,B)=>j+(Number(B.total_amount)||0),0);return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-center">จ่ายแล้ว</th><th class="p-3 text-center">ยังไม่จ่าย</th><th class="p-3 text-center">%</th><th class="p-3 text-right">ยอดรวม (บาท)</th></tr></thead>
        <tbody>${o.map(j=>{const B=w.get(j.id)||{paid_count:0,total_amount:0},g=Number(j.member_count)||0,d=Number(B.paid_count)||0,f=g?Math.round(d*100/g):0;return`<tr class="border-b"><td class="p-3 font-bold" style="color:${Q(j.hex_color)}">สี${Q(j.name)}</td><td class="p-3 text-center">${d}</td><td class="p-3 text-center">${Math.max(0,g-d)}</td><td class="p-3 text-center">${f}%</td><td class="p-3 text-right font-bold">${Number(B.total_amount||0).toLocaleString("th-TH")}</td></tr>`}).join("")}
        <tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-center">${A}</td><td class="p-3 text-center">${Math.max(0,_-A)}</td><td class="p-3"></td><td class="p-3 text-right">${q.toLocaleString("th-TH")}</td></tr>
        </tbody>
      </table></div>`},m=()=>{let _=0,A=0,q=0,j=0;const B=o.map(d=>{const f=w.get(d.id)||{total_amount:0},I=c.get(d.id)||{school_support:0,prize:0,expense:0},i=Number(f.total_amount)||0,$=Number(I.school_support)||0,x=Number(I.prize)||0,S=Number(I.expense)||0,k=i+$+x-S;return _+=i,A+=$,q+=x,j+=S,`<tr class="border-b"><td class="p-3 font-bold" style="color:${Q(d.hex_color)}">สี${Q(d.name)}</td><td class="p-3 text-right">${i.toLocaleString("th-TH")}</td><td class="p-3 text-right">${$.toLocaleString("th-TH")}</td><td class="p-3 text-right">${x.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${S.toLocaleString("th-TH")}</td><td class="p-3 text-right font-bold ${k<0?"text-red-600":"text-emerald-600"}">${k.toLocaleString("th-TH")}</td></tr>`}).join(""),g=_+A+q-j;return`<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left">สี</th><th class="p-3 text-right">ค่าบำรุง</th><th class="p-3 text-right">สนับสนุนโรงเรียน</th><th class="p-3 text-right">เงินรางวัล</th><th class="p-3 text-right">รายจ่าย</th><th class="p-3 text-right">คงเหลือ</th></tr></thead>
        <tbody>${B}<tr class="bg-gray-50 font-bold"><td class="p-3">รวมทุกสี</td><td class="p-3 text-right">${_.toLocaleString("th-TH")}</td><td class="p-3 text-right">${A.toLocaleString("th-TH")}</td><td class="p-3 text-right">${q.toLocaleString("th-TH")}</td><td class="p-3 text-right text-red-600">${j.toLocaleString("th-TH")}</td><td class="p-3 text-right ${g<0?"text-red-600":"text-emerald-600"}">${g.toLocaleString("th-TH")}</td></tr></tbody>
      </table></div>`};e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">📊 ภาพรวมกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">สรุปเช็คชื่อรายวัน ค่าบำรุงสี และบัญชีของทุกสี เทียบกันในหน้าเดียว — ดูสถานะการประเมิน/คะแนนได้ที่หน้า "ประเมินกีฬาสี"</p></div>
      <div id="sports-ov-tabs" class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">
        <button type="button" data-ov-tab="attendance" class="px-4 py-2 rounded-lg text-sm font-bold transition">📷 เช็คชื่อรายวัน</button>
        <button type="button" data-ov-tab="dues" class="px-4 py-2 rounded-lg text-sm font-bold transition">💰 ค่าบำรุงสี</button>
        <button type="button" data-ov-tab="ledger" class="px-4 py-2 rounded-lg text-sm font-bold transition">📒 บัญชีสี</button>
      </div>
      <section class="bg-white border rounded-2xl p-5"><div id="sports-ov-body"></div></section>
    </div>`;let y="attendance";const H=()=>{e.querySelectorAll("[data-ov-tab]").forEach(_=>{const A=_.dataset.ovTab===y;_.className=`px-4 py-2 rounded-lg text-sm font-bold transition ${A?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}`}),e.querySelector("#sports-ov-body").innerHTML=y==="attendance"?v():y==="dues"?C():m()};e.querySelectorAll("[data-ov-tab]").forEach(_=>_.onclick=()=>{y=_.dataset.ovTab,H()}),H()}catch(a){console.error(a),e.innerHTML=xt()}}const lt={parade:"🕌 ขบวนพาเหรด/ความร่วมมือสี",page:"📣 หน้าเว็บเพจ",color_eval:"🎨 วันเข้าสีเดิม",sports_day:"🏟️ วันกีฬาสีจริง"},na={แดง:"#ef4444",น้ำเงิน:"#3b82f6",เขียว:"#10b981",น้ำตาล:"#92400e",ส้ม:"#f97316",ฟ้า:"#0ea5e9",ม่วง:"#a855f7",เทา:"#6b7280"},ht=["แดง","น้ำเงิน","เขียว","น้ำตาล"],vt=["ส้ม","ฟ้า","ม่วง","เทา"];async function Ze(){const e=mt();e.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดหน้าประเมินกีฬาสี...</div>';try{const{event:a}=await gt(),s=await ms(se),{data:n}=await se.from("profiles").select("role,is_also_admin").eq("id",s).maybeSingle(),l=(n==null?void 0:n.role)==="admin"||(n==null?void 0:n.is_also_admin)===!0||await Es(s),o="pp5:"+s,[{data:b},{data:r},{data:u},h,{data:t},{data:p}]=await Promise.all([se.from("team_colors").select("id,name,hex_color,logo_url,gender").eq("event_id",a.id).order("gender").order("display_order"),se.from("sports_score_criteria").select("*").eq("event_id",a.id).eq("is_active",!0).order("category").order("display_order"),se.from("sports_score_evaluators").select("*").eq("event_id",a.id).eq("profile_id",s).eq("is_active",!0),Ft("sports_score_entries",K=>K.select("id,criteria_id,team_color_id,session_id,judge_username,score,updated_at").eq("event_id",a.id).order("updated_at",{ascending:!0}).order("id",{ascending:!0})),se.from("color_totals").select("*").eq("event_id",a.id),se.from("sports_evaluation_sessions").select("*").eq("event_id",a.id).order("session_type").order("day_no")]);let w={colors:[],attendance:[]},c=[],L=null;const v=l||(u||[]).length>0;if(v){const[{data:K,error:ae},{data:pe,error:de}]=await Promise.all([se.rpc("get_sports_attendance_overview",{p_event:a.id}),se.from("work_calendar_events").select("id,label,event_date,end_date").or("label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%")]);w=K||{colors:[],attendance:[]},c=pe||[],L=ae||de||null}let C=[],m=[],y=[];if(l){const[{data:K},{data:ae},{data:pe}]=await Promise.all([se.from("sports_score_evaluators").select("*").eq("event_id",a.id).order("created_at",{ascending:!1}),se.from("teachers").select("id,full_name,teacher_code,profile_id,image_url").order("full_name"),se.from("sports_evaluation_judges").select("id,name,username,role,criteria_id").eq("event_id",a.id)]);C=K||[],m=(ae||[]).filter(de=>de.profile_id),y=pe||[]}const H=new Map(m.map(K=>[K.profile_id,K])),_=new Map((r||[]).map(K=>[K.id,K])),A=new Map((h||[]).filter(K=>K.judge_username===o).map(K=>[`${K.criteria_id}|${K.team_color_id}|${K.session_id||""}`,Number(K.score)])),q=new Set((u||[]).filter(K=>!K.criteria_id).map(K=>K.category)),j=new Set((u||[]).filter(K=>K.criteria_id).map(K=>K.criteria_id)),B=l?r||[]:(r||[]).filter(K=>q.has(K.category)||j.has(K.id)),g=[...new Set(B.map(K=>K.category))];let d="M",f=g[0]||null,I=null,i=null,$=!1,x="M",S=null,k="cumulative",E="ALL";const T=K=>{const ae=String(K||"").indexOf(" - ");return ae===-1?K:K.slice(0,ae)};let M=null;const N=()=>{var $e;if(!B.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><p class="text-gray-400">คุณยังไม่ได้รับมอบหมายให้ประเมินหมวดใด — ติดต่อแอดมินเพื่อขอสิทธิ์ (ดูสรุปคะแนนได้ที่แท็บ "สรุปคะแนนทุกสี")</p></section>';const K=B.filter(xe=>xe.category===f),ae=new Map;if(f==="sports_day")(p||[]).filter(xe=>xe.session_type==="sports_day").forEach(xe=>{const we=K.filter(Ee=>Ee.session_id===xe.id);we.length&&ae.set(xe.id,{label:xe.name,criteria:we})});else if(f==="color_eval"){(p||[]).filter(we=>we.session_type==="color_day").sort((we,Ee)=>(we.day_no||0)-(Ee.day_no||0)).forEach(we=>{const Ee=K.filter(je=>je.session_id===we.id);Ee.length&&ae.set(we.id,{label:we.name,criteria:Ee})});const xe=K.filter(we=>!we.session_id);xe.length&&ae.set("legacy",{label:"หัวข้อเดิมที่ยังไม่ผูกวัน",criteria:xe})}else f==="page"||f==="parade"?K.length&&ae.set("all",{label:"หัวข้อทั้งหมด",criteria:K}):K.forEach(xe=>{const we=T(xe.name);ae.has(we)||ae.set(we,{label:we,criteria:[]}),ae.get(we).criteria.push(xe)});const pe=[...ae.keys()];(!I||!pe.includes(I))&&(I=pe[0]||null);const de=ae.get(I),ee=(de==null?void 0:de.criteria)||K,X=pe.map(xe=>ae.get(xe).label),ue=(p||[]).find(xe=>xe.id===I),fe=(ue==null?void 0:ue.status)==="closed"&&!l,be=(b||[]).filter(xe=>xe.gender===d);(!i||!be.some(xe=>xe.id===i))&&(i=(($e=be[0])==null?void 0:$e.id)||null);const ge=be.find(xe=>xe.id===i)||null,ie=xe=>{const we=ee.map(je=>A.get(`${je.id}|${xe.id}|${je.session_id||""}`)),Ee=we.filter(je=>je!==void 0).length;return{saved:Ee,total:we.length,complete:we.length>0&&Ee===we.length}};return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div><h2 class="font-bold">📝 ให้คะแนนประเมิน</h2><p class="text-xs text-gray-500 mt-1">กรอกคะแนนแต่ละสีแล้วกดบันทึกด้านล่าง — แก้ไขซ้ำได้เสมอ</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-eval-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${d==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-eval-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${d==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        ${g.length>1?`<div class="flex flex-wrap gap-2 mb-4">${g.map(xe=>`<button type="button" data-eval-cattab="${xe}" class="px-4 py-2 rounded-xl text-xs font-bold border transition ${xe===f?"bg-indigo-600 text-white border-indigo-600":"text-gray-600 border-gray-200 hover:bg-gray-50"}">${Q(lt[xe]||xe)}</button>`).join("")}</div>`:""}
        ${pe.length>1?`<div class="mb-4"><label class="text-xs font-bold text-gray-600 block mb-1.5">${f==="sports_day"?"🏟️ เลือกวันกีฬาสีจริง":"📅 เลือกรอบ/วันที่จะประเมิน"}</label><select id="eval-session-select" class="w-full sm:w-80 border rounded-xl px-3 py-2.5 text-sm font-bold">${pe.map(xe=>`<option value="${Q(xe)}" ${xe===I?"selected":""}>${Q(ae.get(xe).label)}</option>`).join("")}</select></div>`:""}
        <div class="sticky top-2 z-10 -mx-1 px-1 py-2 mb-3 bg-white/95 backdrop-blur">
          <div class="flex gap-2 overflow-x-auto pb-1">
            ${be.map((xe,we)=>{const Ee=(d==="W"?vt:ht)[we]||xe.name,je=na[Ee]||xe.hex_color||"#94a3b8",bt=ie(xe),yt=xe.id===i;return`<button type="button" data-eval-color="${xe.id}" ${$&&!yt?"disabled":""} class="flex-shrink-0 min-w-[92px] px-3 py-2 rounded-xl border text-left transition ${yt?"ring-2 ring-indigo-500 border-indigo-400":"border-gray-200"} ${$&&!yt?"opacity-50 cursor-not-allowed":""}" style="background:${Q(je)}12">
                <span class="block text-xs font-bold" style="color:${Q(je)}">สี${Q(Ee)}</span>
                <span class="block text-[10px] text-gray-500 mt-0.5">${bt.complete?"✓ ครบแล้ว":bt.saved?`${bt.saved}/${bt.total} บันทึกแล้ว`:"ยังไม่เริ่ม"}</span>
              </button>`}).join("")}
          </div>
          ${ge?`          <p class="text-xs text-gray-500 mt-2">กำลังประเมิน: <b>สี${Q((d==="W"?vt:ht)[be.indexOf(ge)]||ge.name)}</b>${fe?" · ปิดรับคะแนนแล้ว":$?" · มีการแก้ไขที่ยังไม่ได้บันทึก":""}</p>`:""}
        </div>
        ${ge?(()=>{const xe=be.indexOf(ge),we=(d==="W"?vt:ht)[xe]||ge.name,Ee=na[we]||ge.hex_color||"#94a3b8",je=Q((we||"?").slice(0,1)),yt=ee.map(Ie=>A.get(`${Ie.id}|${ge.id}|${Ie.session_id||""}`)).filter(Ie=>Ie!==void 0).reduce((Ie,Ke)=>Ie+Number(Ke||0),0),mr=ee.reduce((Ie,Ke)=>Ie+Number(Ke.max_score||0),0),La=[["อีบาดัต",2],["ความสะอาด",3],["เข้าแถว/เช็คชื่อ",3],["นักกีฬา",3],["สต๊าฟ",4],["กองเชียร์",4]],Gt=[];return ee.forEach((Ie,Ke)=>{var rt;const Ca=Ie.group_name||Ie.group_key,Wt=f==="page"||f==="parade"?"หัวข้อทั้งหมด":f==="sports_day"?((rt=La.find(([,nt],Yt)=>{const Ia=La.slice(0,Yt).reduce((xr,[,gr])=>xr+gr,0);return Ke>=Ia&&Ke<Ia+nt}))==null?void 0:rt[0])||"เกณฑ์อื่นๆ":T(Ie.name),St=Ca||Wt;let Ce=Gt.find(nt=>nt.label===St);Ce||(Ce={label:St,criteria:[]},Gt.push(Ce)),Ce.criteria.push(Ie)}),`<div class="rounded-2xl border overflow-hidden" style="border-color:${Q(Ee)}55">
            <div class="flex items-center gap-3 p-3" style="background:${Q(Ee)}14">
              ${ge.logo_url?`<img data-color-logo src="${Q(ge.logo_url)}" class="w-11 h-11 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${Q(Ee)}"><div data-color-logo-fallback class="hidden w-11 h-11 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${Q(Ee)}">${je}</div>`:`<div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${Q(Ee)}">${je}</div>`}
              <div><b class="text-sm" style="color:${Q(Ee)}">สี${Q(we)}</b><p class="text-xs text-gray-500 mt-0.5">รวม <span id="eval-current-total">${yt}</span> / ${mr}</p></div>
            </div>
            <div class="p-3 space-y-2 bg-white">
              ${Gt.map((Ie,Ke)=>{const Wt=Ie.criteria.map(Ce=>A.get(`${Ce.id}|${ge.id}|${Ce.session_id||""}`)).filter(Ce=>Ce!==void 0).length,St=Ie.criteria.reduce((Ce,rt)=>Ce+Number(rt.max_score||0),0);return`<details class="border rounded-xl overflow-hidden" ${Ke===0?"open":""}>
                  <summary class="cursor-pointer list-none flex items-center justify-between gap-3 px-3 py-2.5 bg-gray-50 hover:bg-gray-100">
                    <span class="text-xs font-bold text-gray-700">${Q(Ie.label)}</span>
                    <span class="text-[10px] text-gray-500">${Wt}/${Ie.criteria.length} ข้อ · เต็ม ${St}</span>
                  </summary>
                  <div class="p-3 space-y-2">
                    ${Ie.criteria.map(Ce=>{const rt=A.get(`${Ce.id}|${ge.id}|${Ce.session_id||""}`),nt=T(Ce.name),Yt=X.length>1&&nt!==Ce.name?Ce.name.slice(nt.length+3):Ce.name;return`<div class="flex items-center justify-between gap-2">
                        <label class="text-xs text-gray-600 flex-1">${Q(Yt)}</label>
                        <div class="flex items-center gap-1 flex-shrink-0">
                          <input type="number" inputmode="numeric" min="0" max="${Number(Ce.max_score)}" step="1" value="${rt??""}" data-score-input data-crit="${Ce.id}" data-color="${ge.id}" ${fe?"disabled":""} class="w-16 border rounded-lg px-2 py-1.5 text-center text-sm">
                          <span class="text-[10px] text-gray-400 w-10">/ ${Number(Ce.max_score)}</span>
                        </div>
                      </div>`}).join("")}
                  </div>
                </details>`}).join("")}
            </div>
          </div>`})():""}
        <div class="sticky bottom-2 z-10 mt-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 backdrop-blur py-2">
          <span class="text-xs text-gray-500">${$?"กรุณาบันทึกก่อนเปลี่ยนสี":"เลือกสีจากแถบด้านบน"}</span>
          <button id="eval-submit" type="button" ${fe?"disabled":""} class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold disabled:opacity-50">${fe?"🔒 ปิดรับคะแนน":"💾 บันทึกสีนี้"}</button>
        </div>
      </section>`},O=()=>{const K=ae=>ae.map(pe=>`<div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2" data-crit-row="${pe.id}"><span class="flex-1 text-sm" data-crit-view>${Q(pe.name)}</span><span class="text-xs text-gray-500 w-20 text-right" data-crit-view>เต็ม ${Number(pe.max_score)}</span><button type="button" data-crit-edit="${pe.id}" class="px-2 py-1 text-xs border rounded-lg text-indigo-600">แก้ไข</button><button type="button" data-crit-del="${pe.id}" class="px-2 py-1 text-xs border rounded-lg text-red-600">ลบ</button></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>';return["parade","page","color_eval","sports_day"].map(ae=>{const pe=(r||[]).filter(X=>X.category===ae),de=ae==="color_eval"?(p||[]).filter(X=>X.session_type==="color_day").sort((X,ue)=>(X.day_no||0)-(ue.day_no||0)):ae==="sports_day"?(p||[]).filter(X=>X.session_type==="sports_day").sort((X,ue)=>X.day_no-ue.day_no):[],ee=de.map(X=>({label:X.name,rows:pe.filter(ue=>ue.session_id===X.id)}));if(de.length||ee.push({label:"หัวข้อทั้งหมด",rows:pe}),ae==="color_eval"){const X=pe.filter(ue=>!ue.session_id);X.length&&ee.push({label:"หัวข้อเดิมที่ยังไม่ผูกวัน",rows:X})}return`<div class="mb-4"><h4 class="text-sm font-bold text-gray-700 mb-2">${lt[ae]}</h4><div class="space-y-2" data-crit-cat="${ae}">${ee.map((X,ue)=>`<details class="border rounded-xl overflow-hidden" ${ue===0?"open":""}><summary class="cursor-pointer list-none flex items-center justify-between px-3 py-2 bg-gray-50 text-xs font-bold">${Q(X.label)}<span class="text-gray-500">${X.rows.length} หัวข้อ</span></summary><div class="p-2 space-y-1.5">${K(X.rows)}</div></details>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีหัวข้อ</p>'}</div></div>`}).join("")},U=()=>{if(!C.length)return'<p class="text-sm text-gray-400 text-center py-4">ยังไม่มีผู้ประเมิน</p>';const K=new Map;return C.forEach(ae=>{K.has(ae.profile_id)||K.set(ae.profile_id,[]),K.get(ae.profile_id).push(ae)}),[...K.entries()].map(([ae,pe])=>{const de=H.get(ae);return`<div class="flex items-start gap-3 bg-gray-50 rounded-xl p-3 mb-2"><div class="flex-1 min-w-0"><b class="text-sm block truncate">${Q((de==null?void 0:de.full_name)||"ไม่พบชื่อ (บัญชีอาจถูกลบ)")}</b><div class="flex flex-wrap gap-1.5 mt-1.5">${pe.map(ee=>{var X;return`<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">${Q(lt[ee.category]||ee.category)}${ee.criteria_id?` · ${Q(((X=_.get(ee.criteria_id))==null?void 0:X.name)||"")}`:""}${ee.role_label?` · ${Q(ee.role_label)}`:""}<button type="button" data-eval-del="${ee.id}" class="ml-1 text-red-500 font-black">✕</button></span>`}).join("")}</div></div></div>`}).join("")},z=()=>`<div class="mb-6"><h3 class="font-bold text-sm mb-3">🏟️ วันกีฬาสีจริง</h3><div class="grid sm:grid-cols-2 gap-3">${(p||[]).filter(ae=>ae.session_type==="sports_day").sort((ae,pe)=>ae.day_no-pe.day_no).map(ae=>`<div class="border rounded-xl p-3 space-y-2">
        <div class="flex items-center justify-between"><b>วันที่ ${ae.day_no}</b><span class="text-xs font-bold ${ae.status==="open"?"text-emerald-600":ae.status==="closed"?"text-red-600":"text-gray-500"}">${ae.status==="open"?"เปิดรับคะแนน":ae.status==="closed"?"ปิดรับคะแนน":"ยังไม่เปิด"}</span></div>
        <input data-session-name="${ae.id}" value="${Q(ae.name)}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <input data-session-date="${ae.id}" type="date" value="${ae.event_date||""}" class="w-full border rounded-lg px-2 py-1.5 text-sm">
        <div class="flex gap-2"><select data-session-status="${ae.id}" class="flex-1 border rounded-lg px-2 py-1.5 text-sm"><option value="upcoming" ${ae.status==="upcoming"?"selected":""}>ยังไม่เปิด</option><option value="open" ${ae.status==="open"?"selected":""}>เปิดรับคะแนน</option><option value="closed" ${ae.status==="closed"?"selected":""}>ปิดรับคะแนน</option></select><button type="button" data-session-save="${ae.id}" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold">บันทึก</button></div>
      </div>`).join("")}</div></div>`,P=()=>`<section class="bg-white border rounded-2xl p-5">
      <div class="mb-4"><h2 class="font-bold">⚙️ ตั้งค่าการประเมิน</h2><p class="text-xs text-gray-500 mt-1">จัดการหัวข้อ/คะแนนเต็ม และมอบหมายครูผู้ประเมิน</p></div>
      ${z()}
      <div class="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 class="font-bold text-sm mb-3">📋 หัวข้อเกณฑ์การประเมิน</h3>
          ${O()}
          <div class="grid sm:grid-cols-4 gap-2 mt-3">
            <select id="crit-new-category" class="border rounded-xl px-3 py-2 text-sm">
              <option value="parade">🕌 ขบวนพาเหรด/ความร่วมมือสี</option>
              <option value="color_eval">🎨 วันเข้าสีเดิม</option>
              <option value="page">📣 หน้าเว็บเพจ</option>
              <option value="sports_day">🏟️ วันกีฬาสีจริง</option>
            </select>
            <select id="crit-new-session" class="border rounded-xl px-3 py-2 text-sm sm:col-span-4">
              <option value="">-- เลือกรอบ/วัน (จำเป็นสำหรับวันเข้าสีและวันกีฬาสีจริง) --</option>
              ${(p||[]).filter(K=>K.session_type==="color_day"||K.session_type==="sports_day").sort((K,ae)=>(K.session_type+K.day_no).localeCompare(ae.session_type+ae.day_no)).map(K=>`<option value="${K.id}">${Q(K.name)}</option>`).join("")}
            </select>
            <input id="crit-new-name" placeholder="ชื่อหัวข้อ" class="border rounded-xl px-3 py-2 text-sm sm:col-span-2">
            <input id="crit-new-max" type="number" min="1" value="10" class="border rounded-xl px-3 py-2 text-sm" placeholder="คะแนนเต็ม">
          </div>
          <button id="crit-new-add" type="button" class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">➕ เพิ่มหัวข้อ</button>
        </div>
        <div>
          <h3 class="font-bold text-sm mb-3">🧑‍⚖️ ผู้ประเมิน (${C.length} รายการ)</h3>
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
    </section>`,F=K=>(r||[]).filter(ae=>ae.category===K).reduce((ae,pe)=>ae+(Number(pe.max_score)||0),0),W=F("parade")||100,R=F("page")||100,V=F("color_eval")||100,G=new Map((t||[]).map(K=>[K.team_color_id,K])),Y=K=>(r||[]).map(ae=>{const pe=(h||[]).filter(ee=>ee.criteria_id===ae.id&&ee.team_color_id===K).map(ee=>Number(ee.score)),de=pe.length?Math.round(pe.reduce((ee,X)=>ee+X,0)/pe.length*100)/100:0;return{crit:ae,avg:de,count:pe.length}}).filter(ae=>ae.count>0),te=(K,ae,pe)=>`<div class="space-y-1"><div class="flex justify-between text-xs text-gray-500"><span>${Q(K)}</span><span class="font-bold text-gray-700">${Number(ae).toLocaleString("th-TH")} / ${Number(pe).toLocaleString("th-TH")}</span></div><div class="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-indigo-500 rounded-full" style="width:${pe?Math.min(100,ae/pe*100):0}%"></div></div></div>`,re=()=>{const K=(p||[]).filter(X=>X.session_type==="sports_day").sort((X,ue)=>X.day_no-ue.day_no);if(!K.length)return"";const ae=(r||[]).filter(X=>X.category==="sports_day"),pe=(X,ue)=>ae.filter(fe=>fe.session_id===ue).reduce((fe,be)=>{const ge=(h||[]).filter(ie=>ie.criteria_id===be.id&&ie.team_color_id===X).map(ie=>Number(ie.score)).filter(Number.isFinite);return fe+(ge.length?ge.reduce((ie,$e)=>ie+$e,0)/ge.length:0)},0),de=X=>ae.filter(ue=>ue.session_id===X).reduce((ue,fe)=>ue+Number(fe.max_score||0),0),ee=(b||[]).filter(X=>X.gender===x).map((X,ue)=>{const fe=K.map($e=>pe(X.id,$e.id)),be=K.map(de),ge=k==="cumulative"?fe.reduce(($e,xe)=>$e+xe,0):fe[Number(k)-1]||0,ie=k==="cumulative"?be.reduce(($e,xe)=>$e+xe,0):be[Number(k)-1]||0;return{c:X,name:(x==="W"?vt:ht)[ue]||X.name,total:ge,max:ie,values:fe}}).sort((X,ue)=>ue.total-X.total);return`<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><h2 class="font-bold">🏟️ สรุปวันกีฬาสีจริง</h2><p class="text-xs text-gray-500 mt-1">คะแนนเฉลี่ยจากผู้ประเมิน แยกวันและสะสม 4 วัน</p></div>
          <div class="flex flex-wrap gap-1">${K.map(X=>`<button type="button" data-summary-sports-day="${X.day_no}" class="px-3 py-1.5 rounded-lg text-xs font-bold ${k===String(X.day_no)?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">วันที่ ${X.day_no}</button>`).join("")}<button type="button" data-summary-sports-day="cumulative" class="px-3 py-1.5 rounded-lg text-xs font-bold ${k==="cumulative"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}">สะสม</button></div>
        </div>
        <div class="space-y-2">${ee.map((X,ue)=>`<div class="flex items-center gap-3 rounded-xl border p-3"><span class="w-7 text-center font-bold text-gray-400">#${ue+1}</span><span class="flex-1 font-bold">สี${Q(X.name)}</span><span class="font-black">${X.total.toFixed(2)} / ${X.max}</span></div>`).join("")}</div>
      </section>`},Z=()=>{const K=(b||[]).filter(de=>de.gender===x),ae=x==="W"?vt:ht,pe=K.map((de,ee)=>{const X=ae[ee]||de.name,ue=G.get(de.id)||{};return{c:de,canonicalName:X,t:ue,grand:Number(ue.grand_total)||0}}).sort((de,ee)=>ee.grand-de.grand);return`${re()}${hl((t||[]).filter(de=>de.gender===x),null,x)}<section class="bg-white border rounded-2xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div><h2 class="font-bold">🏅 สรุปคะแนนทุกสี</h2><p class="text-xs text-gray-500 mt-1">รวมคะแนนกรรมการ + กีฬา + พื้นบ้าน/ทักษะ + อีบาดัต + เหรียญรางวัล ข้อมูลเดียวกับระบบกีฬาสีหลัก อัปเดตสด</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-sum-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition ${x==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 กลุ่มสีชาย</button>
            <button type="button" data-sum-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition ${x==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 กลุ่มสีหญิง</button>
          </div>
        </div>
        <div class="space-y-3">
          ${pe.map((de,ee)=>{const X=na[de.canonicalName]||de.c.hex_color||"#94a3b8",ue=Q(de.canonicalName.slice(0,1)),fe=S===de.c.id,be=Y(de.c.id);return`<div class="rounded-2xl border overflow-hidden">
              <button type="button" data-toggle-expand="${de.c.id}" class="w-full flex items-center justify-between gap-3 p-3.5" style="background:${Q(X)}14">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="w-6 text-center font-bold text-sm text-gray-400 flex-shrink-0">#${ee+1}</span>
                  ${de.c.logo_url?`<img data-color-logo src="${Q(de.c.logo_url)}" class="w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 bg-white" style="border-color:${Q(X)}"><div data-color-logo-fallback class="hidden w-10 h-10 rounded-full items-center justify-center text-white font-black flex-shrink-0" style="background:${Q(X)}">${ue}</div>`:`<div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style="background:${Q(X)}">${ue}</div>`}
                  <b class="text-sm truncate" style="color:${Q(X)}">สี${Q(de.canonicalName)}</b>
                </div>
                <div class="flex items-center gap-3 flex-shrink-0">
                  <span class="px-3.5 py-1.5 rounded-xl bg-gray-900 text-yellow-400 font-black text-sm">${de.grand.toLocaleString("th-TH")}</span>
                  <span class="text-gray-400">${fe?"▲":"▼"}</span>
                </div>
              </button>
              ${fe?`<div class="p-4 border-t bg-gray-50 space-y-4">
                <div class="grid sm:grid-cols-2 gap-3">
                  ${te("🕌 พาเหรด/ความร่วมมือสี",Number(de.t.parade_total)||0,W)}
                  ${te("📣 หน้าเว็บเพจ",Number(de.t.page_total)||0,R)}
                  ${te("🎨 วันเข้าสี/วันกีฬาสีจริง",Number(de.t.color_eval_total)||0,V)}
                  ${te("🧹 วิชาการสะสม",Number(de.t.academic_total)||0,100)}
                  ${te("🏃 กีฬาสากล + กรีฑา",Number(de.t.sports_total)||0,150)}
                  ${te("🎯 พื้นบ้าน / ทักษะ",Number(de.t.folk_skill_total)||0,150)}
                  ${te("🕋 อีบาดัต",Number(de.t.ibadat_total)||0,100)}
                </div>
                <div class="flex flex-wrap gap-2 text-xs font-bold">
                  <span class="px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700">🥇 ทอง ${Number(de.t.gold_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">🥈 เงิน ${Number(de.t.silver_count)||0}</span>
                  <span class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700">🥉 ทองแดง ${Number(de.t.bronze_count)||0}</span>
                </div>
                <div class="border-t pt-3">
                  <p class="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">รายละเอียดคะแนนแยกหัวข้อ (เฉลี่ยจากผู้ประเมินทุกคน)</p>
                  ${be.length?`<div class="space-y-1.5">${be.map(ge=>{var ie;return`<div class="flex items-center justify-between gap-2 bg-white border rounded-lg px-3 py-2"><span class="text-xs text-gray-600">${Q(((ie=lt[ge.crit.category])==null?void 0:ie.split(" ")[0])||"")} ${Q(ge.crit.name)}</span><b class="text-xs">${ge.avg} / ${Number(ge.crit.max_score)}</b></div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 text-center py-3">ยังไม่มีผู้ประเมินให้คะแนน</p>'}
                </div>
              </div>`:""}
            </div>`}).join("")}
        </div>
      </section>`},ce=H,ne=new Map;(C||[]).forEach(K=>{ne.has(K.profile_id)||ne.set(K.profile_id,new Set),ne.get(K.profile_id).add(K.category)});const ke=[...[...ne.entries()].map(([K,ae])=>{var pe;return{name:((pe=ce.get(K))==null?void 0:pe.full_name)||"ไม่พบชื่อ",source:"ครู ปพ.5",categories:[...ae],judgeUsername:"pp5:"+K}}),...(y||[]).map(K=>({name:K.name,source:"กรรมการ AZIZGAMES",categories:[K.role==="colorEval"?"color_eval":K.role],judgeUsername:K.username}))],Be=new Map;(h||[]).forEach(K=>{Be.has(K.judge_username)||Be.set(K.judge_username,[]),Be.get(K.judge_username).push(K)});const De=(b||[]).length||8,Ve=(r||[]).map(K=>{const ae=(h||[]).filter(X=>X.criteria_id===K.id),pe=new Set(ae.map(X=>X.team_color_id)).size,de=new Set(ae.map(X=>X.judge_username)).size,ee=ae.length?Math.round(ae.reduce((X,ue)=>X+Number(ue.score),0)/ae.length*100)/100:0;return{crit:K,colorsScored:pe,judgesCount:de,avg:ee,submitted:ae.length}}),st=()=>`<section class="bg-white border rounded-2xl p-5 space-y-6">
      <div>
        <h2 class="font-bold mb-1">🧑‍⚖️ สถานะผู้ประเมิน</h2>
        <p class="text-xs text-gray-500 mb-3">ความครบถ้วนของแต่ละเกณฑ์ (${De} สี) และสถานะการส่งคะแนนของผู้ประเมินทุกคน</p>
        <div class="overflow-x-auto"><table class="w-full text-sm">
          <thead><tr class="border-b bg-gray-50"><th class="p-2 text-left">หัวข้อ</th><th class="p-2 text-center">สีที่มีคะแนน</th><th class="p-2 text-center">ผู้ประเมิน</th><th class="p-2 text-center">เฉลี่ย</th></tr></thead>
          <tbody>${Ve.map(K=>{var ae;return`<tr class="border-b"><td class="p-2">${Q(((ae=lt[K.crit.category])==null?void 0:ae.split(" ")[0])||"")} ${Q(K.crit.name)}</td><td class="p-2 text-center ${K.colorsScored<De?"text-amber-600 font-bold":"text-emerald-600 font-bold"}">${K.colorsScored}/${De}</td><td class="p-2 text-center">${K.judgesCount}</td><td class="p-2 text-center font-bold">${K.submitted?K.avg+" / "+Number(K.crit.max_score):"—"}</td></tr>`}).join("")||'<tr><td colspan="4" class="p-6 text-center text-gray-400">ยังไม่มีหัวข้อเกณฑ์ในระบบ</td></tr>'}</tbody>
        </table></div>
      </div>
      <div>
        <h3 class="font-bold text-sm mb-3">รายชื่อผู้ประเมิน (${ke.length} คน)</h3>
        <div class="space-y-2">${ke.map(K=>{const ae=Be.get(K.judgeUsername)||[],pe=ae.length,de=pe?ae.reduce((ee,X)=>X.updated_at>ee?X.updated_at:ee,ae[0].updated_at):null;return`<div class="flex items-center justify-between gap-3 bg-gray-50 rounded-xl p-3"><div class="min-w-0"><b class="text-sm block truncate">${Q(K.name)}</b><p class="text-xs text-gray-500 mt-0.5">${Q(K.source)} · ${K.categories.map(ee=>Q(lt[ee]||ee)).join(", ")}</p></div><div class="text-right flex-shrink-0"><span class="px-3 py-1 rounded-full text-xs font-bold ${pe?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-400"}">${pe?pe+" รายการ":"ยังไม่ส่งคะแนน"}</span>${de?`<p class="text-[10px] text-gray-400 mt-1">ล่าสุด ${new Date(de).toLocaleDateString("th-TH",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}</p>`:""}</div></div>`}).join("")||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีผู้ประเมินในระบบ</p>'}</div>
      </div>
    </section>`,le=()=>{if(L)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">⚠️</div><h2 class="font-bold text-gray-800">โหลดสรุปเช็คชื่อเข้าสีไม่สำเร็จ</h2><p class="text-xs text-gray-500 mt-2">กรุณารีเฟรชหน้า หรือตรวจสอบสิทธิ์ผู้ประเมินและการตั้งค่าปฏิทินกีฬาสี</p></section>';const K=w.colors||[],ae=[...new Map(Ss(c).map(ie=>[ie.date,ie.label])).entries()].map(([ie,$e])=>({date:ie,label:$e})).sort((ie,$e)=>ie.date<$e.date?-1:1);if(!K.length)return'<section class="bg-white border rounded-2xl p-8 text-center text-gray-400">ยังไม่มีข้อมูลสีในกิจกรรมนี้</section>';if(!ae.length)return'<section class="bg-white border rounded-2xl p-8 text-center"><div class="text-3xl mb-2">📅</div><h2 class="font-bold text-gray-800">ยังไม่มีวันเข้าสีในปฏิทินปฏิบัติงาน</h2><p class="text-xs text-gray-500 mt-2">กรุณาตั้งวันเข้าสีหรือวันกีฬาสีจริงในปฏิทินก่อนดูเปอร์เซ็นต์</p></section>';const pe=K.filter(ie=>E==="ALL"||ie.gender===E),de=new Map((w.attendance||[]).map(ie=>[`${ie.team_color_id}|${ie.session_date}`,Number(ie.checked_count)||0])),ee=(ie,$e)=>$e?Math.round(ie*1e3/$e)/10:0,X=ie=>ie>=80?"text-emerald-600":ie>=50?"text-amber-600":"text-red-600",ue=pe.map(ie=>{const $e=Number(ie.member_count)||0,xe=ae.map(Ee=>({checked:de.get(`${ie.id}|${Ee.date}`)||0,total:$e,pct:ee(de.get(`${ie.id}|${Ee.date}`)||0,$e)})),we=xe.length?Math.round(xe.reduce((Ee,je)=>Ee+je.pct,0)/xe.length*10)/10:0;return{c:ie,total:$e,daily:xe,average:we}}),fe=ae.map((ie,$e)=>{const xe=ue.reduce((Ee,je)=>Ee+je.daily[$e].checked,0),we=ue.reduce((Ee,je)=>Ee+je.total,0);return{checked:xe,total:we,pct:ee(xe,we)}}),be=ue.reduce((ie,$e)=>ie+$e.total,0),ge=fe.length?Math.round(fe.reduce((ie,$e)=>ie+$e.pct,0)/fe.length*10)/10:0;return`<section class="bg-white border rounded-2xl p-5 space-y-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="font-bold">📷 สรุปเปอร์เซ็นต์การเช็คชื่อเข้าสี</h2><p class="text-xs text-gray-500 mt-1">คำนวณจากผู้ที่เช็คชื่อแล้ว ÷ สมาชิกทั้งหมดของสีนั้น แยกตามวันที่ตั้งไว้ในปฏิทินปฏิบัติงาน</p></div>
          <div class="inline-flex p-1 rounded-xl bg-gray-100 gap-1">
            <button type="button" data-attendance-gender="ALL" class="px-3 py-1.5 rounded-lg text-xs font-bold ${E==="ALL"?"bg-indigo-600 text-white":"text-gray-600"}">👥 ทุกสี</button>
            <button type="button" data-attendance-gender="M" class="px-3 py-1.5 rounded-lg text-xs font-bold ${E==="M"?"bg-emerald-600 text-white":"text-gray-600"}">👦 สีชาย</button>
            <button type="button" data-attendance-gender="W" class="px-3 py-1.5 rounded-lg text-xs font-bold ${E==="W"?"bg-rose-600 text-white":"text-gray-600"}">👧 สีหญิง</button>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-3">
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 p-3"><p class="text-xs text-indigo-700">จำนวนสีที่แสดง</p><b class="text-2xl text-indigo-900">${ue.length}</b> <span class="text-xs text-indigo-700">สี</span></div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3"><p class="text-xs text-slate-600">สมาชิกตามสี</p><b class="text-2xl text-slate-900">${be.toLocaleString("th-TH")}</b> <span class="text-xs text-slate-600">คน</span></div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 p-3"><p class="text-xs text-emerald-700">เฉลี่ยรวมทุกวัน</p><b class="text-2xl ${X(ge)}">${ge}%</b></div>
        </div>
        <div class="overflow-x-auto border rounded-xl">
          <table class="w-full text-sm border-collapse min-w-[760px]">
            <thead><tr class="border-b bg-gray-50"><th class="p-3 text-left sticky left-0 bg-gray-50 z-10">สี</th><th class="p-3 text-center whitespace-nowrap">สมาชิก</th>${ae.map(ie=>`<th class="p-3 text-center whitespace-nowrap"><div>${Q(ie.date)}</div><div class="text-[10px] font-normal text-gray-400">${Q(ie.label||"")}</div></th>`).join("")}<th class="p-3 text-center whitespace-nowrap">เฉลี่ยรายวัน</th></tr></thead>
            <tbody>${ue.map(ie=>`<tr class="border-b"><td class="p-3 font-bold sticky left-0 bg-white z-10" style="color:${Q(ie.c.hex_color||"#475569")}">สี${Q(ie.c.name)}</td><td class="p-3 text-center text-gray-600">${ie.total}</td>${ie.daily.map($e=>`<td class="p-3 text-center"><b class="${X($e.pct)}">${$e.pct}%</b><div class="text-[10px] text-gray-400 mt-0.5">${$e.checked}/${$e.total}</div></td>`).join("")}<td class="p-3 text-center font-black ${X(ie.average)}">${ie.average}%</td></tr>`).join("")}</tbody>
            <tfoot><tr class="bg-gray-50 font-bold"><td class="p-3 sticky left-0 bg-gray-50 z-10">รวมตามวันที่</td><td class="p-3 text-center">${be}</td>${fe.map(ie=>`<td class="p-3 text-center"><span class="${X(ie.pct)}">${ie.pct}%</span><div class="text-[10px] text-gray-500 mt-0.5">${ie.checked}/${ie.total}</div></td>`).join("")}<td class="p-3 text-center ${X(ge)}">${ge}%</td></tr></tfoot>
          </table>
        </div>
        <p class="text-[11px] text-gray-400">หมายเหตุ: ตัวหารสมาชิกใช้หลักเดียวกับหน้า “ภาพรวมกีฬาสี” และนับการเช็คชื่อซ้ำของคนเดิมในวันเดียวเป็น 1 คน</p>
      </section>`},Re=[{key:"score",label:"📝 ให้คะแนน",show:!0},{key:"summary",label:"🏅 สรุปคะแนนทุกสี",show:!0},{key:"attendance",label:"📷 เช็คชื่อเข้าสี (%)",show:v},{key:"status",label:"🧑‍⚖️ สถานะผู้ประเมิน",show:l},{key:"settings",label:"⚙️ ตั้งค่า",show:l}].filter(K=>K.show);let Le=B.length?"score":l?"status":"summary";const Se=()=>{var K,ae,pe,de;e.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
        <div><h1 class="text-2xl font-bold">🧑‍⚖️ ประเมินกีฬาสี</h1><p class="text-sm text-gray-500">ให้คะแนน ดูสรุปผล และติดตามสถานะผู้ประเมิน ทุกอย่างในหน้าเดียว</p></div>
        <div class="inline-flex flex-wrap p-1 rounded-xl bg-gray-100 gap-1">${Re.map(ee=>`<button type="button" data-eval-main-tab="${ee.key}" class="px-4 py-2 rounded-lg text-sm font-bold transition ${Le===ee.key?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-200"}">${ee.label}</button>`).join("")}</div>
        <div id="eval-tab-body">${Le==="score"?N():Le==="summary"?Z():Le==="attendance"?le():Le==="status"?st():P()}</div>
      </div>`,e.querySelectorAll("[data-eval-main-tab]").forEach(ee=>ee.onclick=()=>{Le=ee.dataset.evalMainTab,Se()}),e.querySelectorAll("[data-eval-gender]").forEach(ee=>ee.onclick=()=>{if($)return oe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนกลุ่มสี","warning");d=ee.dataset.evalGender,i=null,Se()}),e.querySelectorAll("[data-eval-cattab]").forEach(ee=>ee.onclick=()=>{if($)return oe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนหัวข้อ","warning");f=ee.dataset.evalCattab,i=null,Se()}),e.querySelectorAll("[data-color-logo]").forEach(ee=>ee.onerror=()=>{ee.classList.add("hidden");const X=ee.nextElementSibling;X==null||X.classList.remove("hidden"),X==null||X.classList.add("flex")}),(K=e.querySelector("#eval-session-select"))==null||K.addEventListener("change",ee=>{if($)return ee.target.value=I||"",oe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนเปลี่ยนรอบ","warning");I=ee.target.value,i=null,Se()}),e.querySelectorAll("[data-eval-color]").forEach(ee=>ee.onclick=()=>{if($)return oe("กรุณาบันทึกคะแนนของสีปัจจุบันก่อนสลับสี","warning");i=ee.dataset.evalColor,Se()}),e.querySelectorAll("[data-score-input]").forEach(ee=>ee.addEventListener("input",()=>{const X=ee.value.trim();X!==""&&(Number(X)<0||Number(X)>Number(ee.max))&&(ee.value=Math.max(0,Math.min(Number(ee.max),Number(X)||0))),$=!0})),(ae=e.querySelector("#eval-submit"))==null||ae.addEventListener("click",async()=>{const ee=[];if(e.querySelectorAll("[data-score-input]").forEach(be=>{const ge=String(be.value).trim();if(ge==="")return;const ie=_.get(be.dataset.crit);ee.push({event_id:a.id,criteria_id:be.dataset.crit,team_color_id:be.dataset.color,session_id:(ie==null?void 0:ie.session_id)||null,judge_username:o,score:Number(ge),updated_at:new Date().toISOString()})}),!ee.length)return oe("กรุณากรอกคะแนนอย่างน้อย 1 ช่อง","error");const X=(p||[]).find(be=>be.id===I);if((X==null?void 0:X.status)==="closed"&&!l)return oe("รอบนี้ปิดรับคะแนนแล้ว","error");const ue=e.querySelector("#eval-submit");ue.disabled=!0,ue.textContent="กำลังบันทึก...";const{error:fe}=await se.from("sports_score_entries").upsert(ee,{onConflict:"criteria_id,team_color_id,judge_username"});if(ue.disabled=!1,ue.textContent="💾 บันทึกคะแนนประเมิน",fe)return oe(fe.message,"error");ee.forEach(be=>A.set(`${be.criteria_id}|${be.team_color_id}|${be.session_id||""}`,be.score)),$=!1,oe("บันทึกคะแนนประเมินแล้ว"),Se()}),Le==="summary"&&(e.querySelectorAll("[data-sum-gender]").forEach(ee=>ee.onclick=()=>{x=ee.dataset.sumGender,S=null,Se()}),e.querySelectorAll("[data-toggle-expand]").forEach(ee=>ee.onclick=()=>{const X=ee.dataset.toggleExpand;S=S===X?null:X,Se()}),e.querySelectorAll("[data-summary-sports-day]").forEach(ee=>ee.onclick=()=>{k=ee.dataset.summarySportsDay,Se()})),Le==="attendance"&&e.querySelectorAll("[data-attendance-gender]").forEach(ee=>ee.onclick=()=>{E=ee.dataset.attendanceGender,Se()}),!(Le!=="settings"||!l)&&(M=ul({wrap:e.querySelector("#eval-teacher-picker-wrap"),items:m.map(ee=>({id:ee.profile_id,label:ee.full_name,sub:ee.teacher_code,photo:ee.image_url})),placeholder:"พิมพ์ชื่อครู...",emptyLabel:"-- เลือกครูผู้ประเมิน --",photoClass:"w-7 h-9 rounded object-cover flex-shrink-0 border"}),e.querySelectorAll("[data-session-save]").forEach(ee=>ee.addEventListener("click",async()=>{var be,ge,ie;const X=ee.dataset.sessionSave,ue={name:(be=e.querySelector(`[data-session-name="${X}"]`))==null?void 0:be.value.trim(),event_date:((ge=e.querySelector(`[data-session-date="${X}"]`))==null?void 0:ge.value)||null,status:(ie=e.querySelector(`[data-session-status="${X}"]`))==null?void 0:ie.value,updated_at:new Date().toISOString()};if(!ue.name)return oe("กรุณาระบุชื่อวัน","error");const{error:fe}=await se.from("sports_evaluation_sessions").update(ue).eq("id",X);if(fe)return oe(fe.message,"error");oe("บันทึกวันกีฬาสีแล้ว"),Ze()})),(pe=e.querySelector("#crit-new-add"))==null||pe.addEventListener("click",async()=>{const ee=e.querySelector("#crit-new-category").value,X=e.querySelector("#crit-new-session").value||null,ue=e.querySelector("#crit-new-name").value.trim(),fe=Number(e.querySelector("#crit-new-max").value);if(!ue||!fe||fe<=0)return oe("กรอกชื่อหัวข้อและคะแนนเต็มให้ครบ","error");if((ee==="color_eval"||ee==="sports_day")&&!X)return oe("กรุณาเลือกรอบ/วันที่ของหัวข้อนี้","error");const be=(r||[]).filter(ie=>ie.category===ee).length,{error:ge}=await se.from("sports_score_criteria").insert({event_id:a.id,category:ee,session_id:X,name:ue,max_score:fe,display_order:be});if(ge)return oe(ge.message,"error");oe("เพิ่มหัวข้อแล้ว"),Ze()}),e.querySelectorAll("[data-crit-edit]").forEach(ee=>ee.addEventListener("click",()=>{const X=e.querySelector(`[data-crit-row="${ee.dataset.critEdit}"]`),ue=_.get(ee.dataset.critEdit);X.innerHTML=`<input data-edit-name value="${Q(ue.name)}" class="flex-1 border rounded-lg px-2 py-1.5 text-xs"><input data-edit-max type="number" min="1" value="${Number(ue.max_score)}" class="w-20 border rounded-lg px-2 py-1.5 text-xs"><button type="button" data-edit-save class="px-2 py-1 text-xs bg-emerald-600 text-white rounded-lg">บันทึก</button><button type="button" data-edit-cancel class="px-2 py-1 text-xs border rounded-lg">ยกเลิก</button>`,X.querySelector("[data-edit-cancel]").onclick=()=>Se(),X.querySelector("[data-edit-save]").onclick=async()=>{const fe=X.querySelector("[data-edit-name]").value.trim(),be=Number(X.querySelector("[data-edit-max]").value);if(!fe||!be||be<=0)return oe("กรอกข้อมูลให้ครบ","error");const{error:ge}=await se.from("sports_score_criteria").update({name:fe,max_score:be}).eq("id",ue.id);if(ge)return oe(ge.message,"error");oe("แก้ไขแล้ว"),Ze()}})),e.querySelectorAll("[data-crit-del]").forEach(ee=>ee.addEventListener("click",async()=>{if(!confirm("ลบหัวข้อนี้? คะแนนที่เคยให้ไว้ในหัวข้อนี้จะไม่ถูกนับต่อ"))return;const{error:X}=await se.from("sports_score_criteria").delete().eq("id",ee.dataset.critDel);if(X)return oe(X.message,"error");oe("ลบหัวข้อแล้ว"),Ze()})),(de=e.querySelector("#eval-add-btn"))==null||de.addEventListener("click",async()=>{const ee=M==null?void 0:M.getValue();if(!ee)return oe("เลือกครูก่อน","error");const X=[...e.querySelectorAll("[data-eval-cat]:checked")].map(ge=>ge.dataset.evalCat);if(!X.length)return oe("เลือกอย่างน้อย 1 หมวด","error");const ue=e.querySelector("#eval-role-label").value.trim()||null,fe=X.map(ge=>({event_id:a.id,profile_id:ee,category:ge,role_label:ue})),{error:be}=await se.from("sports_score_evaluators").insert(fe);if(be)return be.code==="23505"?oe("มีบางหมวดที่มอบหมายให้ครูคนนี้ไว้แล้ว","error"):oe(be.message,"error");oe("เพิ่มผู้ประเมินแล้ว"),Ze()}),e.querySelectorAll("[data-eval-del]").forEach(ee=>ee.addEventListener("click",async()=>{if(!confirm("ลบสิทธิ์ประเมินรายการนี้?"))return;const{error:X}=await se.from("sports_score_evaluators").delete().eq("id",ee.dataset.evalDel);if(X)return oe(X.message,"error");oe("ลบแล้ว"),Ze()})))};Se()}catch(a){console.error(a),e.innerHTML=xt()}}async function et(e="ชาย"){var s,n,l,o,b;const a=mt();a.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:r,cfg:u}=await gt(),h=await us(se),{data:t}=await se.from("profiles").select("role,is_also_admin").eq("id",h.id).maybeSingle();if(!((t==null?void 0:t.role)==="admin"||(t==null?void 0:t.is_also_admin)===!0)){a.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:w,error:c},{data:L},{data:v}]=await Promise.all([se.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",r.id).eq("gender",e).order("design_no"),se.from("sports_shirt_vote_managers").select("*,teachers(full_name,teacher_code)").eq("event_id",r.id),se.from("teachers").select("id,teacher_code,full_name,dept,profile_id").not("profile_id","is",null).order("full_name")]);if(c)throw c;(w||[]).forEach(_=>{_.sports_shirt_design_colors=(_.sports_shirt_design_colors||[]).sort((A,q)=>A.display_order-q.display_order)});let C=[];const m=_=>_?new Date(_).toISOString().slice(0,16):"",y=(w||[]).map(_=>`
      <div class="border rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between"><b>แบบที่ ${_.design_no}</b>${_.html_url?'<span class="text-[10px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">มี 3 มิติ</span>':""}</div>
        <input data-design-name="${_.id}" value="${Q(_.name||"")}" placeholder="ชื่อแบบ" class="w-full border rounded-lg px-2 py-1.5 text-xs">
        <label class="block text-[10px] text-gray-400">ไฟล์ HTML 3 มิติ (ออปชัน ใช้ร่วมทุกสี)</label>
        <input data-design-html="${_.id}" type="file" accept="text/html,.html" class="w-full text-xs">
        <div class="grid grid-cols-2 gap-2 pt-1">
          ${(_.sports_shirt_design_colors||[]).map(A=>`
            <div class="border rounded-xl p-2">
              <div data-color-preview="${A.id}">${A.image_url?`<img src="${Q(A.image_url)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`:'<div class="w-full h-20 bg-gray-50 rounded-lg border grid place-items-center text-gray-300 text-xl mb-1">👕</div>'}</div>
              <p class="text-[10px] font-bold text-gray-600 text-center mb-1">สี${Q(A.color_name)}</p>
              <input data-color-image="${A.id}" data-color-design="${_.id}" type="file" accept="image/png,image/jpeg,image/webp" class="w-full text-[10px]">
            </div>
          `).join("")}
        </div>
        <button data-design-save="${_.id}" class="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold mt-1">บันทึกแบบที่ ${_.design_no}</button>
      </div>
    `).join(""),H=(L||[]).map(_=>{var A,q;return`<tr class="border-t"><td class="p-3">${Q(((A=_.teachers)==null?void 0:A.full_name)||"ไม่พบชื่อ")}${(q=_.teachers)!=null&&q.teacher_code?` (${Q(_.teachers.teacher_code)})`:""}</td><td class="p-3 text-right"><button data-vote-manager-remove="${_.id}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button></td></tr>`}).join("")||'<tr><td colspan="2" class="p-6 text-center text-gray-400">ยังไม่มีครูที่ได้รับสิทธิ์เพิ่ม</td></tr>';a.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <h1 class="text-2xl font-bold">🗳️ ตั้งค่าโหวตแบบเสื้อกีฬาสี</h1>
      <div class="bg-white border rounded-2xl p-5">
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">เปิดโหวตตั้งแต่</label><input id="vote-opens-at" type="datetime-local" value="${m(u==null?void 0:u.shirt_vote_opens_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ปิดโหวตเมื่อ</label><input id="vote-closes-at" type="datetime-local" value="${m(u==null?void 0:u.shirt_vote_closes_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-window-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกช่วงเวลาโหวต (ใช้ร่วมกันทั้งชาย-หญิง)</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">🌐 โหมดโหวตสาธารณะ (ไม่ต้องล็อกอิน)</h3>
        <p class="text-xs text-gray-500 mb-3">เปิดหน้าแยกให้นักเรียนกรอกรหัสนักเรียนเข้าโหวตได้โดยไม่ต้องล็อกอิน ปพ.5 — เหมาะกับจุดโหวตหน้างาน (kiosk) เข้าที่ <code>shirt-vote-public.html</code></p>
        <div class="mb-3">${dt("shirt_vote_public_enabled","เปิดโหมดโหวตไม่ล็อกอิน","นักเรียนกรอกรหัสนักเรียนแล้วเข้าโหวตได้ทันที",!!(u!=null&&u.shirt_vote_public_enabled))}</div>
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปคู่มือการเริ่มใช้งาน</label><input id="vote-public-tutorial-url" value="${Q((u==null?void 0:u.shirt_vote_tutorial_url)||"")}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปแนะนำ ปพ.5</label><input id="vote-public-intro-url" value="${Q((u==null?void 0:u.shirt_vote_intro_url)||"")}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-public-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกโหมดโหวตสาธารณะ</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="ชาย"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👦 ชาย</button>
          <button data-vote-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="หญิง"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👧 หญิง</button>
        </div>
        <div class="grid md:grid-cols-2 gap-4">${y}</div>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">👤 มอบสิทธิ์ครูดูแดชบอร์ดผลโหวต</h3>
        <div class="flex gap-2 mb-3"><input id="vote-manager-code-input" class="flex-1 border rounded-xl px-3 py-2 text-sm" placeholder="กรอกรหัสครู เช่น 1087, 1092"><button id="vote-manager-search" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">ค้นหา</button></div>
        <div id="vote-manager-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4"><div id="vote-manager-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div><button id="vote-manager-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันมอบสิทธิ์</button></div>
        <div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ครู</th><th></th></tr></thead><tbody>${H}</tbody></table></div>
      </div>
    </div>`,a.querySelectorAll("[data-vote-gender]").forEach(_=>_.addEventListener("click",()=>et(_.dataset.voteGender))),a.querySelectorAll("[data-color-image]").forEach(_=>_.addEventListener("change",()=>{var j;const A=(j=_.files)==null?void 0:j[0];if(!A)return;const q=a.querySelector(`[data-color-preview="${_.dataset.colorImage}"]`);q&&(q.innerHTML=`<img src="${URL.createObjectURL(A)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`)})),(s=a.querySelector("#vote-window-save"))==null||s.addEventListener("click",async()=>{var j,B;const _=(j=a.querySelector("#vote-opens-at"))==null?void 0:j.value,A=(B=a.querySelector("#vote-closes-at"))==null?void 0:B.value,{error:q}=await se.from("sports_portal_settings").update({shirt_vote_opens_at:_?new Date(_).toISOString():null,shirt_vote_closes_at:A?new Date(A).toISOString():null,updated_at:new Date().toISOString()}).eq("event_id",r.id);if(q)return oe(q.message,"error");oe("บันทึกช่วงเวลาโหวตแล้ว"),et(e)}),a.querySelectorAll('[data-cfg="shirt_vote_public_enabled"]').forEach(_=>_.addEventListener("click",()=>{const A=_.dataset.enabled!=="true";_.dataset.enabled=A?"true":"false",_.textContent=A?"ปิดใช้งาน":"เปิดใช้งาน"})),(n=a.querySelector("#vote-public-save"))==null||n.addEventListener("click",async()=>{var j,B,g,d;const _=a.querySelector('[data-cfg="shirt_vote_public_enabled"]'),A={shirt_vote_public_enabled:(_==null?void 0:_.dataset.enabled)==="true",shirt_vote_tutorial_url:((B=(j=a.querySelector("#vote-public-tutorial-url"))==null?void 0:j.value)==null?void 0:B.trim())||null,shirt_vote_intro_url:((d=(g=a.querySelector("#vote-public-intro-url"))==null?void 0:g.value)==null?void 0:d.trim())||null,updated_at:new Date().toISOString()},{error:q}=await se.from("sports_portal_settings").update(A).eq("event_id",r.id);if(q)return oe(q.message,"error");oe("บันทึกโหมดโหวตสาธารณะแล้ว"),et(e)}),a.querySelectorAll("[data-design-save]").forEach(_=>_.addEventListener("click",async()=>{var B,g,d,f,I,i;const A=_.dataset.designSave,q=((g=(B=a.querySelector(`[data-design-name="${A}"]`))==null?void 0:B.value)==null?void 0:g.trim())||null,j=(f=(d=a.querySelector(`[data-design-html="${A}"]`))==null?void 0:d.files)==null?void 0:f[0];_.disabled=!0,_.textContent="กำลังบันทึก...";try{const $={name:q,updated_at:new Date().toISOString()};j&&($.html_url=await no(A,j));const{error:x}=await se.from("sports_shirt_designs").update($).eq("id",A);if(x)throw x;const S=a.querySelectorAll(`[data-color-design="${A}"]`);for(const k of S){const E=(I=k.files)==null?void 0:I[0];if(!E)continue;const T=k.dataset.colorImage,M=await oo(A,T,E),{error:N}=await se.from("sports_shirt_design_colors").update({image_url:M,updated_at:new Date().toISOString()}).eq("id",T);if(N)throw N}oe("บันทึกแบบเสื้อแล้ว"),et(e)}catch($){oe($.message,"error"),_.disabled=!1,_.textContent=`บันทึกแบบที่ ${((i=(w||[]).find(x=>x.id===A))==null?void 0:i.design_no)||""}`}})),(l=a.querySelector("#vote-manager-search"))==null||l.addEventListener("click",()=>{var B;const _=String(((B=a.querySelector("#vote-manager-code-input"))==null?void 0:B.value)||"").split(/[\s,]+/).map(g=>g.trim()).filter(Boolean);if(!_.length)return oe("กรุณากรอกรหัสครู","error");const A=new Set(_.map(String));if(C=(v||[]).filter(g=>A.has(String(g.teacher_code))),!C.length)return oe("ไม่พบรหัสครูที่ตรงกัน","error");const q=a.querySelector("#vote-manager-preview"),j=a.querySelector("#vote-manager-preview-cards");q.classList.remove("hidden"),j.innerHTML=C.map(g=>`<div class="bg-white rounded-xl border border-indigo-100 p-3"><p class="font-bold text-gray-800 text-xs">${Q(g.full_name)}</p><p class="text-[10px] text-gray-400">รหัสครู ${Q(g.teacher_code)} · กลุ่มสาระ ${Q(g.dept||"—")}</p></div>`).join("")}),(o=a.querySelector("#vote-manager-code-input"))==null||o.addEventListener("keydown",_=>{var A;_.key==="Enter"&&(_.preventDefault(),(A=a.querySelector("#vote-manager-search"))==null||A.click())}),(b=a.querySelector("#vote-manager-add"))==null||b.addEventListener("click",async()=>{if(!C.length)return oe("กรุณาค้นหารายชื่อก่อน","error");const _=C.map(q=>({event_id:r.id,teacher_id:q.id,profile_id:q.profile_id,granted_by:null})),{error:A}=await se.from("sports_shirt_vote_managers").upsert(_,{onConflict:"event_id,teacher_id"});if(A)return oe(A.message,"error");oe(`มอบสิทธิ์แล้ว ${_.length} คน`),et(e)}),a.querySelectorAll("[data-vote-manager-remove]").forEach(_=>_.addEventListener("click",async()=>{const{error:A}=await se.from("sports_shirt_vote_managers").delete().eq("id",_.dataset.voteManagerRemove);if(A)return oe(A.message,"error");oe("ปิดสิทธิ์แล้ว"),et(e)}))}catch(r){console.error(r),a.innerHTML=xt()}}async function Cs(e="ชาย"){const a=mt();a.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>';try{const{event:s}=await gt(),n=await us(se),{data:l}=await se.from("profiles").select("role,is_also_admin").eq("id",n.id).maybeSingle(),o=(l==null?void 0:l.role)==="admin"||(l==null?void 0:l.is_also_admin)===!0,{data:b}=await se.from("sports_shirt_vote_managers").select("id").eq("event_id",s.id).eq("profile_id",n.id).maybeSingle();if(!o&&!b){a.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}const[{data:r,error:u},h]=await Promise.all([se.from("sports_shirt_designs").select("*,sports_shirt_design_colors(*)").eq("event_id",s.id).eq("gender",e).order("design_no"),Ft("sports_shirt_votes",y=>y.select("design_id").eq("event_id",s.id))]);if(u)throw u;const t=new Set((r||[]).map(y=>y.id)),p={};(h||[]).forEach(y=>{t.has(y.design_id)&&(p[y.design_id]=(p[y.design_id]||0)+1)});const w=Object.values(p).reduce((y,H)=>y+H,0),c=Math.max(0,...(r||[]).map(y=>p[y.id]||0)),L=[...r||[]].sort((y,H)=>(p[H.id]||0)-(p[y.id]||0)),v=y=>y===0?"🥇":y===1?"🥈":y===2?"🥉":`#${y+1}`,C={},m=L.map((y,H)=>{const _=p[y.id]||0,A=w?Math.round(_/w*100):0,q=(y.sports_shirt_design_colors||[]).filter(g=>g.image_url);C[y.id]=q.length?Math.floor(Math.random()*q.length):0;const j=q[C[y.id]]||null;return`
        <div class="flex items-center gap-4 p-3 rounded-2xl ${_>0&&_===c?"bg-indigo-50/60":""}">
          <span class="w-8 text-center text-sm font-bold text-gray-400 flex-shrink-0">${v(H)}</span>
          <div class="relative flex-shrink-0">
            ${j!=null&&j.image_url?`<img data-shirt-dash-img="${y.id}" src="${Q(j.image_url)}" class="w-14 h-14 object-contain bg-gray-50 rounded-xl border">`:'<div class="w-14 h-14 bg-gray-50 rounded-xl border grid place-items-center text-gray-300 text-xl">👕</div>'}
            ${q.length>1?`<button data-shirt-dash-swap="${y.id}" class="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center text-[11px]" title="สลับสี">🔄</button>`:""}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-700 truncate mb-1">${Q(y.name||`แบบที่ ${y.design_no}`)}</p>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden"><div class="bg-indigo-500 h-full rounded-full transition-all" style="width:${A}%"></div></div>
              <span class="w-24 text-xs text-right text-gray-500 flex-shrink-0">${_} คน (${A}%)</span>
            </div>
          </div>
        </div>
      `}).join("");a.innerHTML=`<div class="max-w-3xl mx-auto space-y-5">
      <div class="flex items-center justify-between"><h1 class="text-2xl font-bold">📊 ผลโหวตแบบเสื้อกีฬาสี</h1><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">โหวตแล้ว ${w} คน</span></div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-dash-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="ชาย"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👦 ชาย</button>
          <button data-vote-dash-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${e==="หญิง"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200"}">👧 หญิง</button>
        </div>
        <div class="divide-y divide-gray-50">${m||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีแบบเสื้อของเพศนี้</p>'}</div>
      </div>
    </div>`,a.querySelectorAll("[data-vote-dash-gender]").forEach(y=>y.addEventListener("click",()=>Cs(y.dataset.voteDashGender))),a.querySelectorAll("[data-shirt-dash-swap]").forEach(y=>y.addEventListener("click",()=>{const H=y.dataset.shirtDashSwap,_=(r||[]).find(j=>j.id===H),A=((_==null?void 0:_.sports_shirt_design_colors)||[]).filter(j=>j.image_url);if(!A.length)return;C[H]=((C[H]||0)+1)%A.length;const q=a.querySelector(`[data-shirt-dash-img="${H}"]`);q&&(q.src=A[C[H]].image_url)}))}catch(s){console.error(s),a.innerHTML=xt()}}const Is="sports_offline_queue",Ts=()=>{try{return JSON.parse(localStorage.getItem(Is)||"[]")}catch{return[]}},xl=e=>localStorage.setItem(Is,JSON.stringify(e));let oa=!1;const gl=new Set;function bl(){const e=Ts();gl.forEach(a=>{try{a(e)}catch(s){console.warn(s)}})}async function yl(e){const a=e.type==="attendance"?"sports_attendance":"sports_team_dues",{error:s}=await se.from(a).insert(e.payload);if(s&&s.code!=="23505")throw s}async function fl(){if(oa)return;let e=Ts();if(!e.length)return;oa=!0;let a=0;for(const s of e)try{await yl(s),a++}catch{break}oa=!1,a>0&&(e=e.slice(a),xl(e),bl())}window.addEventListener("online",()=>fl());const wt=[{key:"sports_total",label:"คะแนนกีฬา (สากล + กรีฑา)",icon:"🏃"},{key:"folk_skill_total",label:"กีฬาพื้นบ้าน / ทักษะ",icon:"🎯"},{key:"parade_total",label:"พาเหรด (สวนสนาม)",icon:"🕌"},{key:"page_total",label:"เพจ Facebook",icon:"📣"},{key:"ibadat_total",label:"คะแนนอีบาดัต",icon:"🕋"},{key:"grand_total",label:"คะแนนรวมทั้งหมด",icon:"🏆"}],hl=(e,a,s,n=5)=>{const l=(e||[]).filter(r=>!s||r.gender===s),o=wt[n]||wt[5],b=[...l].sort((r,u)=>(Number(u[o.key])||0)-(Number(r[o.key])||0));return`<section class="bg-white border rounded-2xl p-5">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
      <div><h2 class="font-bold">📊 อันดับคะแนนแยกหมวด</h2><p class="text-xs text-gray-500 mt-1">เปรียบเทียบเฉพาะสี${s==="W"?"หญิง":"ชาย"} · คะแนนกีฬา = กีฬาสากลรวมกรีฑา</p></div>
    </div>
    <div class="rounded-2xl border bg-gray-50 p-4">
      <div class="flex items-center justify-between gap-3 mb-3">
        <button type="button" data-sports-rank-nav="prev" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===0?"disabled":""} aria-label="ดูหมวดก่อนหน้า">‹</button>
        <div class="text-center min-w-0"><div class="text-lg">${o.icon}</div><h3 class="text-sm font-bold text-gray-700">อันดับ${o.label}</h3><p class="text-[10px] text-gray-400">หมวด ${n+1} / ${wt.length}</p></div>
        <button type="button" data-sports-rank-nav="next" class="w-9 h-9 rounded-xl bg-white border text-gray-700 text-2xl leading-none disabled:opacity-30" ${n===wt.length-1?"disabled":""} aria-label="ดูหมวดถัดไป">›</button>
      </div>
      <div class="flex justify-center gap-1.5 mb-3">${wt.map((r,u)=>`<button type="button" data-sports-rank-index="${u}" aria-label="ดู${r.label}" class="h-2 rounded-full transition ${u===n?"w-5 bg-indigo-600":"w-2 bg-gray-300"}"></button>`).join("")}</div>
      <div class="space-y-1.5">${b.map((r,u)=>`<div class="flex items-center gap-2 text-sm rounded-xl bg-white px-3 py-2 ${r.color_name===a?"font-black text-indigo-700 ring-1 ring-indigo-200":""}"><span class="w-7 text-center text-gray-400">#${u+1}</span><span class="flex-1 truncate">สี${Q(r.color_name)}</span><b>${Number(r[o.key]||0).toLocaleString("th-TH")}</b></div>`).join("")||'<p class="text-xs text-gray-400">ยังไม่มีคะแนน</p>'}</div>
    </div>
  </section>`};async function vl(){Za(!0);const{data:{session:e}}=await se.auth.getSession();if(!e)return window.location.replace("index.html"),null;const{data:a,error:s}=await se.from("profiles").select("role, is_also_admin").eq("id",e.user.id).maybeSingle();return s||(a==null?void 0:a.role)!=="admin"&&!(a!=null&&a.is_also_admin)?(D("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):e}async function wl(e){try{const{data:a}=await se.from("profiles").select("role, user_code").eq("id",e).maybeSingle();let s="ผู้ใช้งาน";if((a==null?void 0:a.role)==="teacher"||(a==null?void 0:a.role)==="admin"){const{data:l}=await se.from("teachers").select("full_name").eq("profile_id",e).maybeSingle();s=(l==null?void 0:l.full_name)??(a==null?void 0:a.user_code)??"ผู้ใช้งาน"}const n=(a==null?void 0:a.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=s,document.getElementById("user-role").textContent=n,document.getElementById("user-avatar").textContent=s.charAt(0).toUpperCase()}catch{}}async function _l(e){const a=document.getElementById("header-switch-slot");if(!a)return;a.innerHTML="";const{data:s}=await se.from("profiles").select("is_also_admin").eq("id",e).maybeSingle();if(!(s!=null&&s.is_also_admin))return;const n=document.createElement("a");n.id="btn-switch-teacher",n.href="teacher.html",n.title="สลับไปหน้าครู",n.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",n.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",a.appendChild(n)}async function $l(){await se.auth.signOut(),D("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function kl(e=null){var s,n,l;const a=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(s=window._clearPositionRows)==null||s.call(window),document.getElementById("modal-title").textContent=e?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:o}=await he(async()=>{const{getDepartments:u}=await import("./api-J-Ak1T-Y.js");return{getDepartments:u}},__vite__mapDeps([0,1,2,3,4])),b=await o(),r=document.getElementById("modal-position-dept");r.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+b.map(u=>`<option value="${u.id}">${u.dept_name}</option>`).join("")}catch{}if(e)try{const{data:o}=await(await he(async()=>{const{supabase:r}=await import("./supabase-BV-W2lsh.js").then(u=>u.a);return{supabase:r}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",e).single();document.getElementById("modal-id").value=o.id,document.getElementById("modal-code").value=o.teacher_code??"",document.getElementById("modal-name").value=o.full_name??"",document.getElementById("modal-category").value=o.category??"",document.getElementById("modal-phone").value=o.phone??"",document.getElementById("modal-login-email").value=o.login_email??"",document.getElementById("modal-username").value=o.username??"",document.getElementById("modal-image-url").value=o.image_url??"";const b=(n=o.positions)!=null&&n.length?o.positions:o.position?[o.position]:[];(l=window._setPositionRows)==null||l.call(window,b),b.includes("dept_head")&&(document.getElementById("modal-position-dept").value=o.position_dept_id??""),Bs(o.image_url,o.full_name)}catch{D("โหลดข้อมูลไม่สำเร็จ","error");return}a.classList.remove("hidden"),a.classList.add("flex"),document.getElementById("modal-name").focus()}function ua(){const e=document.getElementById("teacher-modal");e.classList.add("hidden"),e.classList.remove("flex")}async function El(e){var u,h,t;e.preventDefault();const a=document.getElementById("modal-save-btn"),s=document.getElementById("modal-id").value,n=document.getElementById("modal-username").value.trim().toLowerCase();if(n&&!/^[a-z0-9._-]{3,32}$/.test(n)){D("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const l=((u=window._getPositionValues)==null?void 0:u.call(window))??[],o=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],b=l.find(p=>!o.includes(p))||null,r={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:n||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:b,positions:l,position_dept_id:l.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!r.full_name){D("กรุณากรอกชื่อ-นามสกุล","warning");return}ct(a,!0);try{const p=(t=(h=document.getElementById("modal-photo-file"))==null?void 0:h.files)==null?void 0:t[0];if(p){const w=s||`new_${Date.now()}`;r.image_url=await lo(w,p)}s?await $r(Number(s),r):await kr(r),D("บันทึกข้อมูลสำเร็จ","success"),ua(),Et(await Ne())}catch(p){D("บันทึกไม่สำเร็จ: "+me(p),"error")}finally{ct(a,!1)}}async function Sl(e,a){if(confirm(`ยืนยันการลบ "${a}" ออกจากระบบ?`))try{await hr(Number(e)),D(`ลบ "${a}" แล้ว`,"success"),Et(await Ne())}catch{D("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function Bs(e,a){const s=document.getElementById("modal-avatar-preview");s&&(e?s.innerHTML=`<img src="${e}" class="w-full h-full object-cover" />`:s.innerHTML=(a??"?").charAt(0).toUpperCase())}async function Ll(e=null){const a=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=e?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(s=>{document.getElementById(s).value=""}),document.getElementById("sub-skill-group").value="",e)try{const n=(await Pt()).find(l=>l.id===e);n&&(document.getElementById("sub-id").value=n.id,document.getElementById("sub-code").value=n.subject_code??"",document.getElementById("sub-name").value=n.subject_name??"",document.getElementById("sub-dept").value=n.dept??"",document.getElementById("sub-grade").value=n.grade_level??"",document.getElementById("sub-credit").value=n.credit??"",document.getElementById("sub-learning-area").value=n.learning_area??"",document.getElementById("sub-skill-group").value=n.skill_group??"")}catch{D("โหลดข้อมูลไม่สำเร็จ","error")}a.classList.replace("hidden","flex")}async function Cl(e,a){if(confirm(`ยืนยันลบวิชา "${a}"?`))try{await vr(Number(e)),D(`ลบ "${a}" แล้ว`,"success"),Ea(await Pt())}catch{D("ลบไม่สำเร็จ","error")}}async function Il(e=null){const a=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(w=>{const c=document.getElementById(w);c&&(c.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const s=document.getElementById("dept-selected-teacher");s.classList.add("hidden"),s.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=e?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let n=[];try{n=await Ne()}catch{}const l=document.getElementById("dept-teacher-code-input"),o=document.getElementById("dept-teacher-search"),b=document.getElementById("dept-teacher-dropdown"),r=document.getElementById("dept-selected-teacher"),u=document.getElementById("dept-selected-name"),h=document.getElementById("dept-clear-teacher"),t=w=>{document.getElementById("dept-teacher-code").value=w?w.teacher_code??"":"",w?(l.value=w.teacher_code??"",o.value=w.full_name??"",u.textContent=`${w.full_name}${w.teacher_code?` (${w.teacher_code})`:""}`,r.classList.remove("hidden"),r.classList.add("flex")):(l.value="",o.value="",r.classList.add("hidden"),r.classList.remove("flex")),b.classList.add("hidden")},p=w=>{b.innerHTML=w.length?w.map(c=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${c.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${c.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${c.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',b.querySelectorAll(".teacher-option").forEach(c=>{c.addEventListener("mousedown",L=>{L.preventDefault(),t(n.find(v=>String(v.id)===c.dataset.id))})}),b.classList.remove("hidden")};if(l.oninput=()=>{const w=l.value.trim().toLowerCase();if(!w){t(null);return}const c=n.find(L=>(L.teacher_code??"").toLowerCase()===w);if(c)t(c);else{const L=n.filter(v=>(v.teacher_code??"").toLowerCase().startsWith(w));L.length&&p(L)}},o.onfocus=()=>p(n),o.oninput=()=>{const w=o.value.toLowerCase();p(w?n.filter(c=>c.full_name.toLowerCase().includes(w)||(c.teacher_code??"").toLowerCase().includes(w)):n)},o.onblur=()=>setTimeout(()=>b.classList.add("hidden"),150),h==null||h.addEventListener("click",()=>t(null)),e)try{const c=(await Xe()).find(L=>L.id===e);if(c){document.getElementById("dept-id").value=c.id,document.getElementById("dept-code").value=c.dept_code??"",document.getElementById("dept-name").value=c.dept_name??"",document.getElementById("dept-teacher-code").value=c.teacher_code??"",document.getElementById("dept-photo-url").value=c.head_photo_url??"",document.getElementById("dept-sign-url").value=c.head_sign_url??"";const L=document.getElementById("dept-category");if(L&&(L.value=c.category??""),c.teacher_code){const v=n.find(C=>C.teacher_code===c.teacher_code);v&&t(v)}c.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${c.head_photo_url}" class="w-full h-full object-cover" />`),c.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${c.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{D("โหลดข้อมูลไม่สำเร็จ","error");return}a.classList.remove("hidden"),a.classList.add("flex")}function Bt(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function Tl(e){var o,b,r,u,h,t,p,w;e.preventDefault();const a=document.getElementById("dept-save-btn"),s=document.getElementById("dept-id").value,n=document.getElementById("dept-code").value.trim().toUpperCase(),l=document.getElementById("dept-name").value.trim();if(!n||!l){D("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}ct(a,!0);try{const c=document.getElementById("dept-teacher-code").value||null,L=c?((r=(b=(o=document.getElementById("dept-selected-name"))==null?void 0:o.textContent)==null?void 0:b.split(" (")[0])==null?void 0:r.trim())??null:null,v={dept_code:n,dept_name:l,head_name:L,teacher_code:c,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((u=document.getElementById("dept-category"))==null?void 0:u.value)||null},C=(t=(h=document.getElementById("dept-photo-file"))==null?void 0:h.files)==null?void 0:t[0];C&&(v.head_photo_url=await Ra(n,"photo",C));const m=(w=(p=document.getElementById("dept-sign-file"))==null?void 0:p.files)==null?void 0:w[0];m&&(v.head_sign_url=await Ra(n,"sign",m)),s?await Er(Number(s),v):await Sr(v),D("บันทึกสำเร็จ","success"),Bt(),Ut(await Xe())}catch(c){D("บันทึกไม่สำเร็จ: "+me(c),"error")}finally{ct(a,!1)}}async function Bl(e,a){if(confirm(`ยืนยันลบกลุ่มสาระ "${a}"?`))try{await wr(Number(e)),D(`ลบ "${a}" แล้ว`,"success"),Ut(await Xe())}catch{D("ลบไม่สำเร็จ","error")}}function jl(e=null){var n,l,o;const a=document.getElementById("period-modal"),s=e?((n=window._periodsCache)==null?void 0:n[e])??null:null;document.getElementById("period-id").value=e??"",document.getElementById("period-no").value=(s==null?void 0:s.period_no)??"",document.getElementById("period-start").value=((l=s==null?void 0:s.start_time)==null?void 0:l.slice(0,5))??"",document.getElementById("period-end").value=((o=s==null?void 0:s.end_time)==null?void 0:o.slice(0,5))??"",document.getElementById("period-modal-title").textContent=e?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",a.classList.remove("hidden"),a.classList.add("flex")}function jt(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function ql(e){e.preventDefault();const a=document.getElementById("period-save-btn"),s=document.getElementById("period-id").value,n={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!n.period_no||!n.start_time||!n.end_time){D("กรุณากรอกข้อมูลให้ครบ","warning");return}s&&(n.id=Number(s)),ct(a,!0);try{await Lr(n),D("บันทึกสำเร็จ","success"),jt(),Vt()}catch(l){D("บันทึกไม่สำเร็จ: "+me(l),"error")}finally{ct(a,!1)}}async function Al(e){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await _r(Number(e)),D("ลบแล้ว","success"),Vt()}catch{D("ลบไม่สำเร็จ","error")}}async function ma(){try{const a=(await Ge()).filter(n=>n.status==="pending").length,s=document.getElementById("badge-payments");if(!s)return;a>0?(s.textContent=a>9?"9+":a,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}async function xa(){try{const a=(await as()).filter(n=>!n.is_read).length,s=document.getElementById("badge-feedback");if(!s)return;a>0?(s.textContent=a>9?"9+":a,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}async function ga(){try{const e=await ts(),a=document.getElementById("badge-subject-group");if(!a)return;e.length>0?(a.textContent=e.length>9?"9+":e.length,a.classList.remove("hidden"),a.classList.add("flex")):(a.classList.add("hidden"),a.classList.remove("flex"))}catch{}}window._refreshSubjectGroupBadge=ga;window._refreshFeedbackBadge=xa;window._refreshPaymentBadge=ma;window._goBack=()=>pt();window.openTeacherModal=kl;window.handleDeleteTeacher=Sl;window.openSubjectModal=Ll;window.handleDeleteSubject=Cl;window.openDeptModal=Il;window.handleDeleteDept=Bl;window.openPeriodModal=jl;window.handleDeletePeriod=Al;window._adminViewSchedule=async(e,a)=>{var h;(h=document.getElementById("admin-sched-overlay"))==null||h.remove();const{getSystemConfig:s}=await he(async()=>{const{getSystemConfig:t}=await import("./api-J-Ak1T-Y.js");return{getSystemConfig:t}},__vite__mapDeps([0,1,2,3,4])),n=await s().catch(()=>({})),l=parseInt(n.academicYear??2568),o=parseInt(n.semester??1),b=document.createElement("div");b.id="admin-sched-overlay",b.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",b.innerHTML=`
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-5 h-14 flex items-center gap-4 flex-shrink-0 shadow-sm">
      <button id="aso-close"
        class="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 font-medium transition">
        ← กลับ
      </button>
      <div class="w-px h-5 bg-gray-200"></div>
      <div>
        <p class="text-sm font-bold text-gray-800">🗓️ ตารางสอน — ${a}</p>
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
    </div>`,document.body.appendChild(b),b.querySelector("#aso-close").addEventListener("click",()=>b.remove());const r=b.querySelector("#aso-content"),u=document.getElementById("main-content");u&&(u.id="main-content-bak"),r.id="main-content";try{await eo({id:e,full_name:a},l,o,n)}finally{r.id="aso-content",u&&(u.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var t,p,w,c,L,v,C,m,y,H,_,A,q,j,B,g,d;wo();const e=await vl();if(!e)return;await ps("admin");const a=document.getElementById("app-version");a&&(a.textContent=`v${el}`,a.classList.add("cursor-pointer","hover:underline"),a.addEventListener("click",()=>Ta(e.user.id,!0,!0))),(t=e==null?void 0:e.user)!=null&&t.id&&Ta(e.user.id,!1,!0),br(),(p=document.getElementById("btn-logout"))==null||p.addEventListener("click",$l);const s=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],n=()=>'<option value="">— ไม่มี —</option>'+s.map(f=>`<optgroup label="${f.label}">${f.options.map(I=>`<option value="${I.value}">${I.label}</option>`).join("")}</optgroup>`).join("");function l(){const f=[...document.querySelectorAll(".pos-row-sel")].map(I=>I.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!f.includes("dept_head"))}function o(){const f=[...document.querySelectorAll(".pos-row-sel")],I=f.map(i=>i.value).filter(Boolean);f.forEach(i=>{[...i.options].forEach($=>{$.value&&($.disabled=I.includes($.value)&&i.value!==$.value)})})}function b(f=""){const I=document.getElementById("modal-positions-list"),i=document.createElement("div");i.className="pos-row flex items-center gap-2",i.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${n()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,i.querySelector(".pos-row-sel").value=f,i.querySelector(".pos-row-sel").addEventListener("change",()=>{l(),o()}),i.querySelector(".pos-row-del").addEventListener("click",()=>{i.remove(),l(),o()}),I.appendChild(i),l(),o()}window._addPositionRow=b,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",b(),l()},window._setPositionRows=f=>{document.getElementById("modal-positions-list").innerHTML="",(f!=null&&f.length?f:[""]).forEach(i=>b(i)),l()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(f=>f.value).filter(Boolean),(w=document.getElementById("btn-add-position"))==null||w.addEventListener("click",()=>b()),b(),(c=document.getElementById("modal-close"))==null||c.addEventListener("click",ua),(L=document.getElementById("modal-backdrop"))==null||L.addEventListener("click",ua),(v=document.getElementById("teacher-form"))==null||v.addEventListener("submit",El),(C=document.getElementById("modal-photo-file"))==null||C.addEventListener("change",f=>{const I=f.target.files[0];I&&Bs(URL.createObjectURL(I),"")}),(m=document.getElementById("dept-modal-close"))==null||m.addEventListener("click",Bt),(y=document.getElementById("dept-modal-backdrop"))==null||y.addEventListener("click",Bt),(H=document.getElementById("dept-modal-cancel"))==null||H.addEventListener("click",Bt),(_=document.getElementById("dept-form"))==null||_.addEventListener("submit",Tl),(A=document.getElementById("dept-photo-file"))==null||A.addEventListener("change",f=>{const I=f.target.files[0];I&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL(I)}" class="w-full h-full object-cover" />`)}),(q=document.getElementById("dept-sign-file"))==null||q.addEventListener("change",f=>{const I=f.target.files[0];I&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL(I)}" class="w-full h-full object-contain" />`)}),(j=document.getElementById("period-modal-close"))==null||j.addEventListener("click",jt),(B=document.getElementById("period-modal-backdrop"))==null||B.addEventListener("click",jt),(g=document.getElementById("period-modal-cancel"))==null||g.addEventListener("click",jt),(d=document.getElementById("period-form"))==null||d.addEventListener("submit",ql),await wl(e.user.id),_l(e.user.id);const r={overview:ba,"exec-overview":Zo,teachers:As,classes:$a,students:Ms,departments:Ds,subjects:pt,curriculum:it,periods:Vt,homeroom:Hs,"score-col-config":Ns,"registered-teachers":Nt,holidays:Rs,payments:Os,"life-skill-admin":zs,"reading-admin":Fs,"prayer-admin":Us,settings:ka,import:Ps,"admin-profile":Vs,"usage-stats":Gs,"classrooms-admin":Ws,"course-doc-lang":()=>to(null,!0),announcements:()=>er(),"autoscale-history":()=>tr(),"autoscale-settings":()=>pa(),"work-calendar":()=>lr(null),"role-permissions":()=>ar(),"religion-groups":dr,"tutorial-admin":()=>he(async()=>{const{renderTutorialAdmin:f}=await import("./tutorial-C3EpULMT.js");return{renderTutorialAdmin:f}},__vite__mapDeps([5,0,1,2,3,4,6,7])).then(({renderTutorialAdmin:f})=>f()),"house-colors":()=>sr(),"sports-admin":()=>_o({admin:!0}),azfutsal:()=>ko(),regrade:()=>nl(),"sports-shirt-summary":()=>Ue(),"sports-fund-admin":()=>ml(),"sports-overview-admin":()=>Ls(),"sports-evaluation":()=>Ze(),"shirt-vote-settings":()=>et(),"shirt-vote-dashboard":()=>Cs(),donations:()=>nr(),"feedback-admin":()=>or(),"subject-group-requests":()=>pr(),"donor-chat-admin":()=>he(()=>import("./teacher-views-donor-chat-CqRXptr9.js"),__vite__mapDeps([8,7,0,1,2,3,4,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,5,23,24])).then(f=>f.renderDonorChatAdmin()),"student-qr-print":()=>he(()=>import("./teacher-views-classes-DL4zHYyC.js").then(f=>f.t),__vite__mapDeps([25,7,0,1,2,3,4,12,13,26,27,22,6,9,28,24,29,30,31,32])).then(f=>f.renderStudentQRPrint(null,null)),"classroom-leaders":()=>ur(),"council-rep-nominations":()=>rr(),certificates:()=>he(()=>import("./teacher-views-certificates-h1tZX8oq.js"),__vite__mapDeps([33,7,34,1,22,35,9,6])).then(async f=>{const{getMyTeacherProfile:I}=await he(async()=>{const{getMyTeacherProfile:$}=await import("./api-J-Ak1T-Y.js");return{getMyTeacherProfile:$}},__vite__mapDeps([0,1,2,3,4])),i=await I(e.user.id).catch(()=>null);return f.renderCertificateManager(i)})};document.querySelectorAll("[data-nav]").forEach(f=>{f.addEventListener("click",I=>{var $,x;I.preventDefault();const i=f.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}r[i]&&r[i](),($=document.getElementById("sidebar"))==null||$.classList.add("-translate-x-full"),(x=document.getElementById("sidebar-overlay"))==null||x.classList.add("hidden")})}),ma(),setInterval(ma,6e4),xa(),setInterval(xa,6e4),ga(),setInterval(ga,6e4),Za(!1),window._adminNav=f=>{r[f]&&r[f]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>r["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>r["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>r["shirt-vote-dashboard"]());const u=new URLSearchParams(location.search),h=u.get("view");h&&r[h]?(window._pendingQRTab=u.get("tab")||null,r[h]()):await ba()});function Ye(e){if(!e)return"";const a=e.indexOf("/");return a>0?e.slice(0,a).trim():e.trim()}function at(e){if(!e)return"";const a=e.indexOf("/");return a>0?e.slice(a+1).trim():""}function He(e){return[...new Set(e.filter(Boolean))].sort()}const Te="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",ze="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",Fe=e=>String(e??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),J=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ve(e){document.querySelectorAll("[data-nav]").forEach(a=>{a.classList.toggle("bg-indigo-800",a.dataset.nav===e),a.classList.toggle("text-white",a.dataset.nav===e),a.classList.toggle("text-indigo-200",a.dataset.nav!==e)})}function ye(e){document.getElementById("main-content").innerHTML=e}async function ba(){ve("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ",ye(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[e,a,s]=await Promise.all([En(),Ge().catch(()=>[]),Ne().catch(()=>[])]);Object.entries(e).forEach(([c,L])=>{const v=document.getElementById(`stat-${c}`);v&&(v.textContent=L.toLocaleString())});const n=s.filter(c=>c.profile_id).length,l=s.length-n,o=document.getElementById("stat-registered"),b=document.getElementById("stat-unregistered");o&&(o.textContent=n),b&&(b.textContent=l);const r=a.filter(c=>c.status==="pending"),u=document.getElementById("pending-payments-list");u&&(r.length?u.innerHTML=r.slice(0,3).map(c=>{var L;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((L=c.teachers)==null?void 0:L.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${c.package_type==="semester"?`เหมาทั้งเทอม ${c.amount??299} บ.`:`รายห้อง ${parseInt(c.room_count??1)||1} ห้อง ${c.amount??49} บ.`} · ${new Date(c.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(r.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${r.length-3} รายการ</p>`:""):u.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const h=document.getElementById("training-todo-shell");if(h)try{const{getAllAnnouncements:c,getAnnouncementRsvps:L}=await he(async()=>{const{getAllAnnouncements:y,getAnnouncementRsvps:H}=await import("./api-J-Ak1T-Y.js");return{getAllAnnouncements:y,getAnnouncementRsvps:H}},__vite__mapDeps([0,1,2,3,4])),v=await c(),C=new Date().toISOString().slice(0,10),m=v.filter(y=>y.ann_type==="training"&&y.is_active&&y.event_date>=C).sort((y,H)=>y.event_date.localeCompare(H.event_date));if(m.length){const y=await Promise.all(m.map(A=>L(A.id).catch(()=>[]))),H=A=>new Date(A+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),_=A=>String(A??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");h.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${m.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${m.map((A,q)=>{var I;const j=y[q]??[],B=j.filter(i=>i.response==="yes").length,g=j.filter(i=>i.response==="maybe").length,d=j.filter(i=>i.response==="no").length,f=j.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${_(A.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${H(A.event_date)}
                        ${(I=A.event_periods)!=null&&I.length?` · 🕐 คาบ ${A.event_periods.sort((i,$)=>i-$).join(",")}`:""}
                        ${A.event_location?` · 📍 ${_(A.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${f?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${B}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${g}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${d}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const t=document.getElementById("leave-monitor-shell");t&&await Yn(t,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const p=await qe().catch(()=>({})),w=document.getElementById("monitor-shell");w&&Rl(w,p)}catch{D("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function va(e,a,s){const n={};for(const l of e)l.main_room&&(n[l.main_room]=[]);for(const l of a){const o=l[s];o&&(n[o]||(n[o]=[]),n[o].push({id:l.id,full_name:l.full_name??"",student_code:l.student_code??""}))}return n}async function Ml(e,a,s){const{records:n,students:l,homerooms:o}=await Nn(e,a),b=va(o,l,"religion_room"),r={},u={},h=new Set;for(const m of n){const y=m.main_room,H=m.week_number;!y||!H||(h.add(H),r[y]||(r[y]={}),r[y][H]||(r[y][H]=new Set),r[y][H].add(m.student_id),m.status==="absent"&&(u[y]||(u[y]={}),u[y][H]||(u[y][H]=new Set),u[y][H].add(m.student_id)))}const t=s?Nl(s):Math.max(...h,0),p=t>0?Array.from({length:t},(m,y)=>y+1):[...h].sort((m,y)=>m-y),w=Object.keys(b),c=w.filter(m=>{var _,A;const y=b[m].length,H=((A=(_=r[m])==null?void 0:_[t-1])==null?void 0:A.size)??0;return y>0&&H<y}),L=w.filter(m=>{var H;const y=(H=u[m])==null?void 0:H[t-2];return y!=null&&y.size?[...y].some(_=>!n.filter(q=>q.main_room===m&&q.week_number===t-1&&q.student_id===_).some(q=>q.status==="followed"||q.status==="avoid")):!1}),v=w.length,C=w.filter(m=>{var H,_;const y=b[m].length;return y?(((_=(H=r[m])==null?void 0:H[t-1])==null?void 0:_.size)??0)>=y:!1}).length;return{total:v,done:C,recordPending:c.length,followPending:L.length,week:t,_raw:{records:n,students:l,roomStudents:b,weekRoomRec:r,weekRoomAbsent:u,weeks:p,W:t,homerooms:o}}}async function Dl(e,a){const{columns:s,scores:n,students:l,homerooms:o}=await Rn(e,a),b=va(o,l,"main_room"),r=new Set(n.map(t=>t.student_id)),u=Object.keys(b),h=u.filter(t=>b[t].length>0&&b[t].every(p=>r.has(p.id??p))).length;return{total:u.length,done:h,pending:u.length-h,_raw:{columns:s,scores:n,students:l,roomStudents:b,scored:r,homerooms:o}}}async function Hl(e,a){const{columns:s,scores:n,students:l,homerooms:o}=await Pn(e,a),b=va(o,l,"main_room"),r=new Set(n.map(t=>t.student_id)),u=Object.keys(b),h=u.filter(t=>b[t].length>0&&b[t].every(p=>r.has(p.id??p))).length;return{total:u.length,done:h,pending:u.length-h,_raw:{columns:s,scores:n,students:l,roomStudents:b,scored:r,homerooms:o}}}function Nl(e){if(!e)return 0;const a=new Date(e);if(isNaN(a))return 0;const s=Date.now()-a.getTime();return s<0?0:Math.floor(s/(7*24*60*60*1e3))+1}async function Rl(e,a){const s=parseInt(a.academicYear??2568),n=parseInt(a.semester??1);e.innerHTML=`
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
    </div>`;const[l,o,b,r]=await Promise.allSettled([Ml(s,n,a.semester_start),Dl(s,n),Hl(s,n),Ne().catch(()=>[])]),u=r.status==="fulfilled"?r.value:[],h=(t,p)=>{const w=document.getElementById(`card-${t}`);if(!w)return;if(p.status==="rejected"){w.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const c=p.value;if(t==="prayer"){const L=c.total>0?Math.round(c.done/c.total*100):0,v=c.recordPending+c.followPending;w.innerHTML=`
        <p class="text-3xl font-extrabold ${L>=100?"text-emerald-600":L>=60?"text-amber-500":"text-red-500"}">${L}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${c.done}/${c.total} ห้อง (สัปดาห์ที่ ${c.week-1})</p>
        ${v>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${c.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${c.recordPending} ห้อง</span>`:""}
          ${c.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${c.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const L=c.total>0?Math.round(c.done/c.total*100):0;w.innerHTML=`
        <p class="text-3xl font-extrabold ${L>=100?"text-emerald-600":L>=60?"text-amber-500":"text-red-500"}">${L}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${c.done}/${c.total} ห้อง</p>
        ${c.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${c.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};h("prayer",l),h("lifeskill",o),h("reading",b),e.querySelectorAll(".monitor-card").forEach(t=>{t.addEventListener("click",()=>{var c,L,v;const p=t.dataset.type,w=p==="prayer"?(c=l.value)==null?void 0:c._raw:p==="lifeskill"?(L=o.value)==null?void 0:L._raw:(v=b.value)==null?void 0:v._raw;Pl(p,w,a,s,n,u)})})}function Pl(e,a,s,n,l,o=[]){var p;(p=document.getElementById("monitor-modal"))==null||p.remove();const b={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},r=document.createElement("div");r.id="monitor-modal",r.className="fixed inset-0 z-[90] flex flex-col bg-white",r.innerHTML=`
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${b[e]}</h2>
        <p class="text-xs text-gray-400">ภาค ${s.semester??"—"}/${s.academicYear??"—"}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`,document.body.appendChild(r),r.querySelector("#monitor-modal-close").addEventListener("click",()=>r.remove());const u=r.querySelector("#modal-body"),t={allTeachers:o,year:n,sem:l,category:e==="prayer"?"ศาสนา":"สามัญ"};e==="prayer"&&Ol(u,a,t),e==="lifeskill"&&js(u,a,n,l,t),e==="reading"&&qs(u,a,n,l,t),r.querySelector("#modal-print-btn").addEventListener("click",()=>zl(s,e)),r.querySelector("#modal-doc-btn").addEventListener("click",()=>Ul(s,e,a))}function wa(e,a,s,n){const l=a[e],{allTeachers:o,year:b,sem:r,category:u}=n??{};if(l)return`<p class="font-semibold text-gray-800 text-xs leading-tight">${l}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${e}</p>`;(o??[]).map(t=>`<option value="${t.id}">${t.full_name??""}${t.teacher_code?` (${t.teacher_code})`:""}</option>`).join("");const h=`pick-${e.replace(/[^a-zA-Z0-9]/g,"_")}`;return`<p class="text-[11px] font-medium text-gray-500">${e}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${e}" data-picker="${h}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${h}" class="hidden mt-2 flex gap-1 items-center">
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
        data-room="${e}" data-year="${b}" data-sem="${r}" data-cat="${u}">บันทึก</button>
    </div>`}function Ol(e,a,s={}){var I;if(!a){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:n,roomStudents:l,weekRoomRec:o,weekRoomAbsent:b,weeks:r,W:u,homerooms:h}=a,t=Object.keys(l).sort((i,$)=>i.localeCompare($,void 0,{numeric:!0})),p={},w={};for(const i of h??[])i.main_room&&(p[i.main_room]=((I=i.teachers)==null?void 0:I.full_name)??"",w[i.main_room]=i);const c="border border-gray-100 text-center text-[10px] px-2 py-2",L="px-4 py-2 text-sm font-medium border-b-2 transition",v=`${L} border-indigo-600 text-indigo-700 bg-indigo-50`,C=`${L} border-transparent text-gray-500 hover:text-gray-700`,m=(i,$="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${wa(i,p,w,s)}${$}
  </td>`,y=i=>{const $=i??(u>0?u-1:u),x=r.map(k=>`<option value="${k}" ${k===$?"selected":""}>${k===u?`สัปดาห์ที่ ${k} (ปัจจุบัน)`:k===u-1?`สัปดาห์ที่ ${k} (ควรกรอก)`:`สัปดาห์ที่ ${k}`}</option>`).join(""),S=t.map(k=>{var F,W;const T=(l[k]??[]).length,M=((W=(F=o[k])==null?void 0:F[$])==null?void 0:W.size)??0,N=T>0?Math.round(M/T*100):0,O=T===0?"bg-gray-50 text-gray-300":M===0?"bg-red-50 text-red-400":N>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",U=N>=100?"bg-emerald-500":N>=50?"bg-amber-400":"bg-red-400",P=T>0&&M<T?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${m(k,P)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${T}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${O}">
          <div class="font-bold">${T>0?N+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${T>0?M+"/"+T:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${T>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${U} h-2 rounded-full" style="width:${N}%"></div></div>
            <span class="text-[10px] font-bold ${N>=100?"text-emerald-600":N>=50?"text-amber-600":"text-red-500"}">${N}%</span>
          </div>`:'<span class="text-[10px] text-gray-300">ไม่มีนักเรียน</span>'}
        </td>
      </tr>`}).join("");return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">เลือกสัปดาห์:</label>
      <select id="prayer-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${x}
      </select>
      <span class="text-[11px] text-gray-400">${t.length} ห้อง</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${c} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${c} bg-gray-100">นักเรียน</th>
          <th class="${c} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${c} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${S}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},H=i=>{var M;const $=i??(u>1?u-2:r[0]??1),x=$+1,S=r.map(N=>`<option value="${N}" ${N===$?"selected":""}>${N===u-2?`สัปดาห์ที่ ${N} (ควรติดตาม)`:N===u-1?`สัปดาห์ที่ ${N} (ล่าสุด)`:`สัปดาห์ที่ ${N}`}</option>`).join(""),k=(N,O)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${O}</span>`})[N]??"",E=[];for(const N of t){const O=l[N]??[],U=Object.fromEntries(O.map(P=>[P.id??P,P])),z=[...((M=b[N])==null?void 0:M[$])??[]];for(const P of z){const F=U[P],V=n.filter(G=>G.main_room===N&&G.week_number===x&&G.student_id===P).some(G=>G.status==="followed"||G.status==="avoid")?"followed":x>u?"pending":"overdue";E.push({room:N,stu:F,status:V})}}const T=E.length?E.map(({room:N,stu:O,status:U})=>{const z=p[N];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${z?`<p class="font-semibold text-gray-800 text-xs">${z}</p><p class="text-[10px] text-gray-400">${N}</p>`:`<p class="font-semibold text-gray-800 text-xs">${N}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(O==null?void 0:O.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(O==null?void 0:O.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${k(U,x)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${$}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${S}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${x} · พบ ${E.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${c} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${c} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${c} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${T}</tbody>
      </table>
    </div>`},_=u>0?u-1:0,A=t.filter(i=>{var $;return(($=l[i])==null?void 0:$.length)>0}).length,q=t.reduce((i,$)=>{var x;return i+(((x=l[$])==null?void 0:x.length)??0)},0),j=(i,$,x=72)=>{const T=2*Math.PI*26,M=T*i/100;return`<svg width="${x}" height="${x}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${$}" stroke-width="8"
        stroke-dasharray="${M} ${T}" stroke-dashoffset="${T/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${$}">${i}%</text>
    </svg>`},B=i=>{const $=e.querySelector("#prayer-dashboard");if(!$)return;if(r.length===0){$.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!i)return;const x=t.filter(O=>{var z,P;const U=l[O].length;return U>0&&(((P=(z=o[O])==null?void 0:z[i])==null?void 0:P.size)??0)<U}),S=t.filter(O=>{var P,F;const U=l[O].length,z=((F=(P=o[O])==null?void 0:P[i])==null?void 0:F.size)??0;return U>0&&z>=U}),k=t.filter(O=>{var z;const U=(z=b[O])==null?void 0:z[i-1];return U!=null&&U.size?[...U].some(P=>!n.filter(W=>W.main_room===O&&W.week_number===i&&W.student_id===P).some(W=>W.status==="followed"||W.status==="avoid")):!1}),E=S.length,T=x.length,M=t.reduce((O,U)=>{var z,P;return O+(((P=(z=o[U])==null?void 0:z[i])==null?void 0:P.size)??0)},0),N=A>0?Math.round(E/A*100):0;$.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${A}</p>
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
        <p class="text-2xl font-extrabold text-indigo-600">${M}</p>
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${q}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${j(N,N>=100?"#10b981":N>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${i}</p>
          <p class="text-xs text-gray-400 mt-0.5">${E} / ${A} ห้อง บันทึกครบ</p>
          ${k.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${k.length} ห้อง</p>`:""}
          ${N>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${T>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${T})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${x.map(O=>{var W,R;const U=l[O].length,z=((R=(W=o[O])==null?void 0:W[i])==null?void 0:R.size)??0,P=Math.round(z/U*100),F=p[O];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${O}</span>
                ${F?`<span class="text-amber-600 truncate block">${F}</span>`:""}
              </div>
              <span class="flex-shrink-0 font-bold ${P===0?"text-red-500":"text-amber-600"}">${z}/${U}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${P===0?"bg-red-400":"bg-amber-400"}" style="width:${P}%"></div>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:`<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${i}</p></div>
      </div>`}
    </div>`};e.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${v}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${C}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const g=e.querySelector("#prayer-tab-content");let d="record";const f=(i,$)=>{d=i,g.innerHTML=i==="record"?y($):H($),i==="record"&&B($??_),e.querySelectorAll(".prayer-tab").forEach(k=>{k.className=k.dataset.tab===i?`prayer-tab ${v}`:`prayer-tab ${C}`});const x=g.querySelector("#prayer-week-sel");x&&x.addEventListener("change",k=>f("record",parseInt(k.target.value)));const S=g.querySelector("#prayer-follow-week-sel");S&&S.addEventListener("change",k=>f("follow",parseInt(k.target.value))),_a(g,s,()=>f(d,$))};e.querySelectorAll(".prayer-tab").forEach(i=>i.addEventListener("click",()=>f(i.dataset.tab))),f("record",_)}function js(e,a,s,n,l={}){var c;if(!a){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:b,scored:r,homerooms:u}=a;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const h={},t={};for(const L of u??[])L.main_room&&(h[L.main_room]=((c=L.teachers)==null?void 0:c.full_name)??"",t[L.main_room]=L);const p=Object.keys(b).sort((L,v)=>L.localeCompare(v,void 0,{numeric:!0})),w="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
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
          ${p.map(L=>{const v=b[L]??[],C=v.length,m=v.filter(A=>r.has(A.id??A)).length,y=C-m,H=C>0?Math.round(m/C*100):0,_=H>=100?"bg-emerald-500":H>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${wa(L,h,t,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${C}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${m}</td>
              <td class="border border-gray-100 text-center ${y>0?"text-red-500 font-medium":"text-gray-300"}">${y||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${_} h-2 rounded-full" style="width:${H}%"></div></div>
                  <span class="text-[10px] font-bold ${H>=100?"text-emerald-600":H>=50?"text-amber-600":"text-red-500"}">${H}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${s} · ${p.length} ห้อง</p>`,_a(e,l,()=>js(e,a,s,n,l))}function qs(e,a,s,n,l={}){var c;if(!a){e.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:o,roomStudents:b,scored:r,homerooms:u}=a;if(!o.length){e.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const h={},t={};for(const L of u??[])L.main_room&&(h[L.main_room]=((c=L.teachers)==null?void 0:c.full_name)??"",t[L.main_room]=L);const p=Object.keys(b).sort((L,v)=>L.localeCompare(v,void 0,{numeric:!0})),w="border border-gray-100 text-center text-[10px] px-2 py-2";e.innerHTML=`
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
          ${p.map(L=>{const v=b[L]??[],C=v.length,m=v.filter(A=>r.has(A.id??A)).length,y=C-m,H=C>0?Math.round(m/C*100):0,_=H>=100?"bg-indigo-500":H>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${wa(L,h,t,l)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${C}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${m}</td>
              <td class="border border-gray-100 text-center ${y>0?"text-red-500 font-medium":"text-gray-300"}">${y||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${_} h-2 rounded-full" style="width:${H}%"></div></div>
                  <span class="text-[10px] font-bold ${H>=100?"text-indigo-600":H>=50?"text-amber-600":"text-red-500"}">${H}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${n}/${s} · ${p.length} ห้อง · ${o.length} หัวข้อ</p>`,_a(e,l,()=>qs(e,a,s,n,l))}async function _a(e,a,s){const{allTeachers:n,year:l,sem:o,category:b}=a??{};if(!(n!=null&&n.length))return;const r={};e.querySelectorAll(".hr-sel-wrap").forEach(u=>{const h=u.closest('[id^="pick-"]');h&&(r[h.id]=fa({wrap:u,teachers:n,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),e.querySelectorAll(".hr-assign-btn").forEach(u=>{u.addEventListener("click",()=>{const h=u.dataset.picker,t=document.getElementById(h);t&&t.classList.toggle("hidden")})}),e.querySelectorAll(".hr-save-btn").forEach(u=>{u.addEventListener("click",async()=>{var w;const h=u.dataset.room,t=`pick-${h.replace(/[^a-zA-Z0-9]/g,"_")}`,p=(w=r[t])==null?void 0:w.getValue();if(!p){D("กรุณาเลือกครู","error");return}u.disabled=!0,u.textContent="...";try{await os({teacher_id:p,main_room:h,category:b,academic_year:l,semester:o}),D(`ระบุครูที่ปรึกษาห้อง ${h} แล้ว ✅`,"success"),s&&s()}catch(c){D("บันทึกไม่สำเร็จ: "+me(c),"error"),u.disabled=!1,u.textContent="บันทึก"}})})}function zl(e,a){const s={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[a]??a,n=document.getElementById("modal-body");if(!n){D("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const l=n.cloneNode(!0);l.querySelectorAll("button, select, input").forEach(r=>r.remove());const o=l.innerHTML,b=`<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>ติดตามความคืบหน้า — ${s}</title>
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
    <h2>ติดตามความคืบหน้า — ${s}</h2>
    <p>โรงเรียน: ${e.samaiSchoolName??e.schoolName??""} &nbsp;·&nbsp; ภาค ${e.semester??"—"}/${e.academicYear??"—"} &nbsp;·&nbsp; พิมพ์: ${new Date().toLocaleDateString("th-TH")}</p>
    ${o}
  </body></html>`;ls(b,{autoprint:!0})}function Fl(e,a,s){var h;const n={};for(const t of(a==null?void 0:a.homerooms)??[])t.main_room&&(n[t.main_room]=((h=t.teachers)==null?void 0:h.full_name)??"—");if(e==="prayer"){const{roomStudents:t,weekRoomRec:p,W:w}=a??{};if(!t)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const L=Object.keys(t).sort((C,m)=>C.localeCompare(m,void 0,{numeric:!0})).filter(C=>{var y,H;const m=t[C].length;return m?(((H=(y=p[C])==null?void 0:y[w-1])==null?void 0:H.size)??0)<m:!1});return L.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${L.map((C,m)=>{var _,A;const y=t[C].length,H=((A=(_=p[C])==null?void 0:_[w-1])==null?void 0:A.size)??0;return`<tr>
        <td>${m+1}</td>
        <td>${n[C]??"—"}</td>
        <td>${C}</td>
        <td>${y}</td>
        <td>${H}</td>
        <td style="color:#dc2626">${y-H}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(w??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:l,scored:o}=a??{};if(!l)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const r=Object.keys(l).sort((t,p)=>t.localeCompare(p,void 0,{numeric:!0})).filter(t=>{const p=l[t]??[];return p.length>0&&!p.every(w=>o.has(w.id??w))});return r.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${r.map((t,p)=>{const w=l[t]??[],c=w.filter(L=>o.has(L.id??L)).length;return`<tr>
      <td>${p+1}</td>
      <td>${n[t]??"—"}</td>
      <td>${t}</td>
      <td>${w.length}</td>
      <td>${c}</td>
      <td style="color:#dc2626">${w.length-c}</td>
    </tr>`}).join("")}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${s.semester??"—"}/${s.academicYear??"—"} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'}function Ul(e,a,s){const n={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[a]??a,l=new Date,o=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],b=`${l.getDate()} ${o[l.getMonth()]} ${l.getFullYear()+543}`,r=e.samaiSchoolName??e.schoolName??"โรงเรียน",u=Fl(a,s,e),h=`<!DOCTYPE html><html lang="th"><head>
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
      <div class="field"><span class="field-label">วันที่&nbsp;&nbsp;</span><span class="field-val">${b}</span></div>
      <div class="field"><span class="field-label">เรื่อง&nbsp;&nbsp;</span><span class="field-val">รายงานความคืบหน้าการบันทึกข้อมูล${n} ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"}</span></div>
      <div class="field"><span class="field-label">เรียน&nbsp;&nbsp;</span><span class="field-val">ผู้อำนวยการโรงเรียน${r}</span></div>
    </div>
    <hr style="border:none;border-top:1px solid #ccc;margin:12px 0"/>
    <p class="indent">ตามที่โรงเรียน${r} ได้ใช้ระบบ ปพ.5 ออนไลน์ ในการบันทึกข้อมูล${n}ของนักเรียน
ภาคเรียนที่ ${e.semester??"—"} ปีการศึกษา ${e.academicYear??"—"} นั้น</p>
    <p class="indent">บัดนี้ ฝ่ายวิชาการได้ตรวจสอบสถานะการดำเนินงาน ณ วันที่ ${b}
พบว่ายังมีครูที่ปรึกษาบางห้องที่ยังไม่ได้ดำเนินการกรอกข้อมูล ดังรายละเอียดต่อไปนี้</p>
    ${u}
    <p class="indent">จึงเรียนมาเพื่อโปรดทราบ และขอให้ผู้เกี่ยวข้องเร่งดำเนินการกรอกข้อมูลให้แล้วเสร็จ
ภายในระยะเวลาที่กำหนด หากมีข้อสงสัยประการใดโปรดติดต่อฝ่ายวิชาการโดยตรง</p>
    <div class="sign-block">
      <p style="margin:0 0 4px">ลงชื่อ</p>
      <div class="sign-line"></div>
      <p style="margin:0">(....................................)</p>
      <p style="margin:4px 0 0">ตำแหน่ง .....................................</p>
      <p style="margin:4px 0 0">${b}</p>
    </div>
    <div style="clear:both"></div>
  </body></html>`,t=new Blob(["\uFEFF"+h],{type:"application/msword;charset=utf-8"}),p=URL.createObjectURL(t),w=document.createElement("a");w.href=p,w.download=`บันทึกข้อความ_${n}_${e.academicYear??new Date().getFullYear()+543}.doc`,w.click(),setTimeout(()=>URL.revokeObjectURL(p),2e3)}async function As(){var e;ve("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",ye(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const a=await Ne(),s=He(a.map(b=>b.dept)),n=He(a.map(b=>b.skill_group));ye(`<div class="max-w-6xl mx-auto animate-fade">
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
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${ze} flex-1 min-w-40" />
          <select id="tf-dept" class="${Te}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${s.map(b=>`<option value="${b}">${b}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${Te}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${n.map(b=>`<option value="${b}">${b}</option>`).join("")}
          </select>
          <select id="tf-subg" class="${Te}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${Te}">
            <option value="">ทุกประเภท</option>
            <option value="ครู">ครู</option>
            <option value="บุคลากร">บุคลากร</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="tf-count" class="font-semibold text-indigo-600">${a.length}</span> / ${a.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="teacher-table-wrap"></div>
      </div>
    </div>`),Et(a);let l=a;window._impersonateTeacher=async b=>{const r=a.find(u=>u.id===b);if(!r){D("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:u}=await he(async()=>{const{startImpersonation:h}=await import("./impersonation-0xVfgYVY.js");return{startImpersonation:h}},[]);await u(se,r),window.location.href="teacher.html"}catch(u){console.error("Cannot start impersonation:",u);const h=/function|schema cache|start_admin_impersonation|edge/i.test((u==null?void 0:u.message)||"");D(h?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(u==null?void 0:u.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const o=()=>{const b=document.getElementById("tf-q").value.toLowerCase(),r=document.getElementById("tf-dept").value,u=document.getElementById("tf-skill").value,h=document.getElementById("tf-subg").value,t=document.getElementById("tf-type").value,p=a.filter(w=>(!b||[w.full_name,w.teacher_code,w.dept,w.skill_group].some(c=>(c??"").toLowerCase().includes(b)))&&(!r||w.dept===r)&&(!u||w.skill_group===u)&&(!h||w.subject_group===h)&&(!t||w.staff_type===t));document.getElementById("tf-count").textContent=p.length,l=p,Et(p)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(b=>{var r,u;(r=document.getElementById(b))==null||r.addEventListener("input",o),(u=document.getElementById(b))==null||u.addEventListener("change",o)}),(e=document.getElementById("teacher-export-csv"))==null||e.addEventListener("click",()=>{const b=c=>["ACDMVOC","AGMVOC"].includes(c.subject_group)?"ปวช":c.category==="ศาสนา"?"ศาสนา":c.category==="สามัญ"||c.subject_group?"สามัญ":"-",r=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],u=l.map((c,L)=>[L+1,c.teacher_code??"",c.full_name??"",b(c),c.phone??""]),h="\uFEFF"+[r,...u].map(c=>c.map(L=>`"${String(L).replace(/"/g,'""')}"`).join(",")).join(`
`),t=new Blob([h],{type:"text/csv;charset=utf-8"}),p=URL.createObjectURL(t),w=document.createElement("a");w.href=p,w.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(w),w.click(),w.remove(),URL.revokeObjectURL(p),D("ดาวน์โหลด CSV แล้ว ✅","success")})}catch{D("โหลดข้อมูลครูไม่สำเร็จ","error")}}function Et(e){const a=document.getElementById("teacher-table-wrap");if(!a)return;if(e.length===0){a.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">👩‍🏫</p>
      <p class="font-medium">ยังไม่มีครูในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มครูใหม่" เพื่อเริ่มต้น</p>
    </div>`;return}const s=n=>n?`<span class="px-2 py-0.5 rounded-full text-xs font-medium ${{สามัญ:"bg-blue-50 text-blue-700",ศาสนา:"bg-amber-50 text-amber-700"}[n]??""}">${n}</span>`:"—";a.innerHTML=`
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
              ${s(n.category)}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._adminViewSchedule(${n.id},'${Fe(n.full_name)}')"
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
    </table></div>`}async function Nt(){ve("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",ye(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const e=await qe().catch(()=>({})),a=parseInt(e.academicYear??new Date().getFullYear()+543),s=parseInt(e.semester??1),[n,l,o,b]=await Promise.all([Ne(),_n(a,s).catch(()=>[]),Ge().catch(()=>[]),Ot().catch(()=>[])]),r=new Set(l),u=Date.parse(String(e.semester_start??"")),h=x=>{if(!Number.isFinite(u))return!0;const S=Date.parse(String(x.reviewed_at??x.created_at??""));return Number.isFinite(S)&&S>=u},t=o.filter(x=>x.status==="approved"&&h(x)),p=new Map;b.forEach(x=>{var k;if(x.academic_year!=null&&(+x.academic_year!==a||+x.semester!==s))return;const S=(k=x.master_subjects)==null?void 0:k.teacher_id;S&&p.set(S,(p.get(S)??0)+1)});const w=x=>{const S=x.teachers_quota,k=p.get(x.id)??(S==null?void 0:S.total_classes_created)??0,E=t.filter(U=>{var z;return((z=U.teachers)==null?void 0:z.id)===x.id}),T=E.filter(U=>U.package_type==="per_subject").reduce((U,z)=>U+(parseInt(z.room_count??1)||1),0),M=E.some(U=>U.package_type==="semester")||(S==null?void 0:S.package_type)==="semester",N=(S==null?void 0:S.is_paid)&&!(S!=null&&S.package_type)&&!M&&!T,O=parseInt(e.freeClassQuota??2);return M||N?{label:M?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${k} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:T>0?{label:`รายห้อง ${T} ห้อง`,detail:`ใช้แล้ว ${k}/${O+T} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${k}/${O} ห้อง`,cls:k>=O?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},c=n.filter(x=>x.profile_id),L=n.filter(x=>!x.profile_id),v=c.filter(x=>r.has(x.id)),C=c.filter(x=>!r.has(x.id)),m=(x,S,k,E)=>`<button type="button" data-rt-tab="${x}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${E} flex items-center justify-center text-xl font-bold">${k}</div>
        <p class="text-sm text-gray-500">${S}</p>
      </button>`,y=[...new Set(n.map(x=>x.dept).filter(Boolean))].sort(),H={};for(const x of n){const S=(x.full_name??"").toLowerCase().replace(/\s+/g,"");S&&(H[S]||(H[S]=[]),H[S].push(x))}const _=Object.values(H).filter(x=>x.length>1).map(x=>x.slice().sort((S,k)=>(S.registered_at??"")<(k.registered_at??"")?-1:1));ye(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${m("all","ทั้งหมด",n.length,"bg-indigo-100 text-indigo-700")}
        ${m("registered","มีบัญชีแล้ว",c.length,"bg-emerald-100 text-emerald-700")}
        ${m("unregistered","ยังไม่ลงทะเบียน",L.length,"bg-amber-100 text-amber-700")}
        ${m("duplicates","บัญชีซ้ำ",_.length,_.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${m("scheduled","สร้างตารางสอนแล้ว",v.length,"bg-green-100 text-green-700")}
        ${m("unscheduled","ยังไม่สร้างตารางสอน",C.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${ze} flex-1 min-w-40" />
          <select id="rt-cat" class="${Te}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${Te}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${y.map(x=>`<option value="${x}">${x}</option>`).join("")}
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
    </div>`);let A=n,q="all",j=null;const B=()=>{document.querySelectorAll("[data-rt-tab]").forEach(x=>{var k;const S=x.dataset.rtTab===q||x.dataset.rtTab===j;x.classList.toggle("border-emerald-400",S),x.classList.toggle("bg-emerald-50",S),x.classList.toggle("shadow-lg",S),x.classList.toggle("shadow-emerald-100",S),x.classList.toggle("ring-2",S),x.classList.toggle("ring-emerald-200",S),x.classList.toggle("border-gray-100",!S),(k=x.querySelector("p"))==null||k.classList.toggle("text-emerald-700",S)})},g=x=>p.get(x.id)??0,d=x=>r.has(x.id)?"✓":"—",f=()=>{const x=document.getElementById("rt-dup-list");if(x){if(!_.length){x.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}x.innerHTML=_.map((S,k)=>{const E=S.map((M,N)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${N===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${k}" value="${M.id}"
              class="mt-1 accent-emerald-600" ${N===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${M.image_url?`<img src="${M.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${Oe(M.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${M.teacher_code??"—"}</span>
                ${M.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${g(M)}</span>
                <span>🗓️ ตาราง ${d(M)}</span>
                ${M.login_email?`<span>✉️ ${Oe(M.login_email)}</span>`:""}
                ${M.registered_at?`<span>📅 ${new Date(M.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${M.id}</span>
              </div>
            </div>
          </label>`).join(""),T=S.map(M=>M.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${k}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${k+1} — ${Oe(S[0].full_name??"")}
              <span class="ml-2 text-red-500">(${S.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${E}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${k},'${T}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(x,S)=>{var O;const k=S.split(",").map(Number),E=Number((O=document.querySelector(`input[name="dup-keep-${x}"]:checked`))==null?void 0:O.value);if(!E){D("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const T=k.filter(U=>U!==E);if(!T.length){D("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const M=n.find(U=>U.id===E);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${M==null?void 0:M.full_name} (ID ${E})
ลบ: ID ${T.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const N=document.querySelector(`[data-dup-group="${x}"] button`);N&&(N.disabled=!0,N.textContent="⏳ กำลังรวม...");try{for(const U of T)await $n(E,U);D(`รวมบัญชีสำเร็จ — เหลือ ID ${E}`,"success"),Nt()}catch(U){D("เกิดข้อผิดพลาด: "+me(U),"error"),N&&(N.disabled=!1,N.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const I=x=>{var k,E,T,M;const S=x==="duplicates";if((k=document.getElementById("rt-main-section"))==null||k.classList.toggle("hidden",S),(E=document.getElementById("rt-duplicates-section"))==null||E.classList.toggle("hidden",!S),(T=document.getElementById("rt-schedule-stats"))==null||T.classList.toggle("hidden",!0),S){q="duplicates",j=null,B(),f();return}x==="scheduled"||x==="unscheduled"?(q="registered",j=x):(q=x,j=null),A=q==="registered"?c:q==="unregistered"?L:n,(M=document.getElementById("rt-schedule-stats"))==null||M.classList.toggle("hidden",q!=="registered"),B(),$()},i=x=>{const S=document.getElementById("reg-teacher-table");if(S){if(!x.length){S.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`;return}S.innerHTML=`
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
              ${x.map(k=>{const E=(k.full_name??"?").charAt(0).toUpperCase(),T=!!k.profile_id,M=r.has(k.id),N=w(k);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${k.image_url?`<img src="${k.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${T?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${E}</div>`}
                      <div>
                        <p class="font-semibold text-gray-800">${k.full_name??"—"}</p>
                        <p class="text-xs text-gray-400">${k.dept??""}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">
                    ${k.teacher_code??"—"}
                  </td>
                  <td class="px-4 py-3 text-center hidden md:table-cell">
                    ${k.category?`<span class="px-2 py-0.5 rounded-full text-xs font-medium
                            ${k.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">
                          ${k.category}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
                  </td>
                  <td class="px-4 py-3 hidden lg:table-cell">
                    <span class="inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${N.cls}">
                      ${N.label}
                    </span>
                    <p class="text-[11px] text-gray-400 mt-1">${N.detail}</p>
                  </td>
                  <td class="px-4 py-3 text-center">
                    ${T?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`:`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`}
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${T?`<button onclick="window._adminViewSchedule(${k.id},'${Fe(k.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${M?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${k.id}, '${Fe(k.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},$=()=>{var M,N,O;const x=(((M=document.getElementById("rt-q"))==null?void 0:M.value)??"").toLowerCase(),S=((N=document.getElementById("rt-cat"))==null?void 0:N.value)??"",k=((O=document.getElementById("rt-dept"))==null?void 0:O.value)??"",E=A.filter(U=>(!x||[U.full_name,U.teacher_code].some(z=>(z??"").toLowerCase().includes(x)))&&(!S||U.category===S)&&(!k||U.dept===k)&&(!j||(j==="scheduled"?r.has(U.id):!r.has(U.id)))),T=document.getElementById("rt-count");T&&(T.textContent=E.length),i(E)};document.querySelectorAll("[data-rt-tab]").forEach(x=>{x.addEventListener("click",()=>I(x.dataset.rtTab))}),I("all"),["rt-q","rt-cat","rt-dept"].forEach(x=>{var S,k;(S=document.getElementById(x))==null||S.addEventListener("input",$),(k=document.getElementById(x))==null||k.addEventListener("change",$)}),window.handleUnlinkTeacher=async(x,S)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${S}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await kn(x),D(`ยกเลิกบัญชี "${S}" แล้ว`,"success"),Nt()}catch(k){D("เกิดข้อผิดพลาด: "+me(k),"error")}}}catch{D("โหลดข้อมูลไม่สำเร็จ","error")}}async function $a(){ve("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",ye(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[e,a]=await Promise.all([Ot(),Ne().catch(()=>[])]),s=Object.fromEntries(a.map(l=>[l.id,l])),n=document.getElementById("class-list");if(e.length===0){n.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${e.map(l=>{var o,b;return`
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
            ${(o=l.master_subjects)!=null&&o.teacher_id?`<button onclick="window._adminViewSchedule(${l.master_subjects.teacher_id},'${Fe(((b=s[l.master_subjects.teacher_id])==null?void 0:b.full_name)??l.master_subjects.subject_name??l.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${l.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${l.id},'${(l.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(e.map(l=>[l.id,l])),window._adminEditClass=l=>{var b;const o=(b=window._adminClassCache)==null?void 0:b[l];o&&is(null,o)},window._adminDeleteClass=async(l,o)=>{if(confirm(`ยืนยันลบห้องเรียน "${o}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await ss(l),D(`ลบห้องเรียน "${o}" แล้ว`,"success"),$a()}catch(b){D("ลบไม่สำเร็จ: "+me(b),"error")}}}catch{D("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function Ms(){ve("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",ye(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let u=function(t,p,w){var L;(L=document.getElementById("stu-modal"))==null||L.remove();const c=document.createElement("div");c.id="stu-modal",c.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",c.innerHTML=`
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
                    <input id="sf-auth-email" type="email" value="${t.profile_id?p:`stu${t.student_code}@student.pp5.local`}"
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
        </div>`,document.body.appendChild(c),c.querySelector("#stu-close").addEventListener("click",()=>c.remove()),c.querySelector("#stu-cancel").addEventListener("click",()=>c.remove()),c.addEventListener("click",v=>{v.target===c&&c.remove()}),c.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{c.querySelector("#sf-auth-pw").value=c.querySelector("#sf-code").value.trim()}),c.querySelector("#stu-form").addEventListener("submit",async v=>{v.preventDefault();const C=c.querySelector("#stu-save");C.disabled=!0,C.textContent="กำลังบันทึก...";try{const m={student_code:c.querySelector("#sf-code").value.trim()||null,full_name:c.querySelector("#sf-name").value.trim()||null,main_room:c.querySelector("#sf-main-room").value.trim()||null,religion_room:c.querySelector("#sf-rel-room").value.trim()||null,gender:c.querySelector("#sf-gender-val").value||null,house_color:c.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:c.querySelector("#sf-shirt-size").value.trim()||null},y=c.querySelector("#sf-auth-email").value.trim()||null,H=c.querySelector("#sf-auth-pw").value.trim()||null;if(!t.profile_id&&!H){D("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),C.disabled=!1,C.textContent="บันทึก";return}await w(m,y||H?{email:y,password:H}:null),D("บันทึกสำเร็จ","success"),c.remove()}catch(m){D("บันทึกไม่สำเร็จ: "+me(m),"error")}finally{C.disabled=!1,C.textContent="บันทึก"}})};const e=await ut(),a=He(e.map(t=>Ye(t.main_room))),s=He(e.map(t=>at(t.main_room))),n=He(e.map(t=>t.house_color)),l=He(e.map(t=>t.sports_shirt_size));ye(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${ze} flex-1 min-w-40" />
          <select id="sf-grade" class="${Te}">
            <option value="">ทุกระดับชั้น</option>
            ${a.map(t=>`<option value="${t}">${t}</option>`).join("")}
          </select>
          <select id="sf-room" class="${Te}">
            <option value="">ทุกห้อง</option>
            ${s.map(t=>`<option value="${t}">ห้อง ${t}</option>`).join("")}
          </select>
          <select id="sf-gender" class="${Te}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <select id="sf-house" class="${Te}">
            <option value="">ทุกสี</option>
            ${n.map(t=>`<option value="${t}">${t}</option>`).join("")}
          </select>
          <select id="sf-shirt" class="${Te}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${l.map(t=>`<option value="${t}">${t}</option>`).join("")}
          </select>
          <select id="sf-page-size" class="${Te}">
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
    </div>`);let o=Object.fromEntries(e.map(t=>[t.id,t])),b=1e3;const r=t=>{const p=document.getElementById("student-table-wrap"),w=b==="all"?t:t.slice(0,b);if(document.getElementById("sf-count").textContent=t.length,document.getElementById("sf-showing").textContent=w.length,!t.length){p.innerHTML=`<div class="text-center py-16 text-gray-400">
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
          ${w.map(c=>`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${c.image_url?`<img src="${c.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(c.full_name??"?").charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${c.full_name??"—"}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${c.student_code??"—"}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${c.main_room??"—"}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${c.religion_room?`<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${c.religion_room}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${c.gender??"—"}</td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${c.house_color?`<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${c.house_color}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${c.sports_shirt_size?`<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${c.sports_shirt_size}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${c.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${c.id},'${(c.full_name??"").replace(/'/g,"")}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      ${w.length<t.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(t,p)=>{if(confirm(`ยืนยันลบนักเรียน "${p}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await Rr(t),delete o[t],e.splice(e.findIndex(w=>w.id===t),1),D(`ลบ "${p}" แล้ว`,"success"),h()}catch(w){D("ลบไม่สำเร็จ: "+me(w),"error")}},window._editStudent=async t=>{const p=o[t];if(!p)return;let w="";try{const{data:c,error:L}=await se.rpc("lookup_student_by_code",{p_student_code:p.student_code});!L&&c&&c[0]&&(w=c[0].login_email||"")}catch(c){console.error(c)}u(p,w,async(c,L)=>{if(await Pr(t,c),L&&(L.email||L.password)){const{error:v}=await se.rpc("admin_update_student_auth",{p_student_id:t,p_new_email:L.email||null,p_new_password:L.password||null});if(v)throw v}Object.assign(p,c),o[t]=p,h()})},r(e);const h=()=>{const t=document.getElementById("sf-q").value.toLowerCase(),p=document.getElementById("sf-grade").value,w=document.getElementById("sf-room"),c=w.value,L=He(e.filter(_=>!p||Ye(_.main_room)===p).map(_=>at(_.main_room)));L.includes(c)||(w.value=""),w.innerHTML='<option value="">ทุกห้อง</option>'+L.map(_=>`<option value="${_}" ${_===w.value?"selected":""}>ห้อง ${_}</option>`).join("");const v=w.value,C=document.getElementById("sf-gender").value,m=document.getElementById("sf-house").value,y=document.getElementById("sf-shirt").value,H=document.getElementById("sf-page-size").value;b=H==="all"?"all":Number(H),r(e.filter(_=>(!t||[_.full_name,_.student_code,_.main_room,_.religion_room].some(A=>(A??"").toLowerCase().includes(t)))&&(!p||Ye(_.main_room)===p)&&(!v||at(_.main_room)===v)&&(!C||_.gender===C)&&(!m||_.house_color===m)&&(!y||_.sports_shirt_size===y)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(t=>{var p,w;(p=document.getElementById(t))==null||p.addEventListener("input",h),(w=document.getElementById(t))==null||w.addEventListener("change",h)})}catch{D("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function Vl(){const{getCommentPhrases:e,addCommentPhrase:a,updateCommentPhrase:s,deleteCommentPhrase:n}=await he(async()=>{const{getCommentPhrases:h,addCommentPhrase:t,updateCommentPhrase:p,deleteCommentPhrase:w}=await import("./api-J-Ak1T-Y.js");return{getCommentPhrases:h,addCommentPhrase:t,updateCommentPhrase:p,deleteCommentPhrase:w}},__vite__mapDeps([0,1,2,3,4])),l=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],o={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},b={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},r=document.createElement("div");r.style.cssText="padding:4px 0;";async function u(){const h=await e().catch(()=>[]);r.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${l.map(t=>{const p=h.filter(w=>w.metric===t.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${o[t.key]};color:${b[t.key]};padding:3px 12px;border-radius:20px;">${t.label}</span>
            <button class="ph-add-btn" data-metric="${t.key}"
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
    `,r.querySelectorAll(".ph-add-btn").forEach(t=>{t.onclick=async()=>{const p=prompt("พิมพ์ประโยคใหม่:");p!=null&&p.trim()&&(await a(t.dataset.metric,p.trim()),u())}}),r.querySelectorAll(".ph-save-btn").forEach(t=>{t.onclick=async()=>{const p=r.querySelector(`.ph-edit-inp[data-id="${t.dataset.id}"]`);await s(parseInt(t.dataset.id),p.value.trim()),t.textContent="✓",setTimeout(()=>t.textContent="บันทึก",1e3)}}),r.querySelectorAll(".ph-del-btn").forEach(t=>{t.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await n(parseInt(t.dataset.id)),u())}})}return await u(),r}async function ka(){ve("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",ye(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[e,a,s,n]=await Promise.all([qe(),fn().catch(()=>[]),Xe().catch(()=>[]),hn().catch(()=>[])]);e.feedbackQuotaTeacher=e.feedbackQuotaTeacher||"5",e.feedbackQuotaStudent=e.feedbackQuotaStudent||"3",e.freeAttendanceScanLimit=e.freeAttendanceScanLimit||"2",e.freeRandomPickerLimit=e.freeRandomPickerLimit||"1",e.freeTimerLimit=e.freeTimerLimit||"1",e.freeDashboardLimit=e.freeDashboardLimit||"0",e.freePromptAiLimit=e.freePromptAiLimit||"1";const l=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],o=[...new Set([...l,...s.map(c=>c.dept_code).filter(Boolean),...n.map(c=>c.dept).filter(Boolean)])].sort(),b={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},r="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(c,L,v)=>{var y,H,_,A,q;const C=(H=(y=document.getElementById(L))==null?void 0:y.value)==null?void 0:H.trim(),m=document.getElementById(v);if(!C){m.textContent="⚠️ ยังไม่ได้ใส่ Key",m.className="text-xs text-amber-500 font-medium";return}c.textContent="⏳",c.disabled=!0;try{const j=((A=(_=document.getElementById("cfg-geminiModel"))==null?void 0:_.value)==null?void 0:A.trim())||"gemini-1.5-flash",B=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${j}:generateContent?key=${C}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if(B.ok)m.textContent="✅ ใช้งานได้",m.className="text-xs text-emerald-600 font-semibold";else{const d=((q=(await B.json().catch(()=>({}))).error)==null?void 0:q.message)??`HTTP ${B.status}`;m.textContent=`❌ ${d.slice(0,60)}`,m.className="text-xs text-red-500 font-medium"}}catch{m.textContent="❌ เชื่อมต่อไม่ได้",m.className="text-xs text-red-500 font-medium"}c.textContent="ทดสอบ",c.disabled=!1};const u=({key:c,label:L,type:v,options:C,placeholder:m,hint:y,rows:H,syncFrom:_})=>{var B;const A=e[c]??"",q=`id="cfg-${c}" data-key="${c}"`,j=(g,d="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${L}</label>
          ${g}
          ${d?`<p class="text-[11px] text-gray-400 mt-1">${d}</p>`:""}
        </div>`;if(v==="color")return j(`
        <div class="flex items-center gap-3">
          <input type="color" ${q} value="${A||b[c]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${c}-txt" class="text-sm font-mono text-gray-600">${A||b[c]||"#007bff"}</span>
        </div>`,y);if(v==="date")return j(`<input type="date" ${q} value="${A}" class="${r}" />`,y);if(v==="select")return j(`
        <select ${q} class="${r} bg-white">
          ${(C??[]).map(g=>{const d=typeof g=="object"?g.value:g,f=typeof g=="object"?g.label:g;return`<option value="${d}" ${d===A?"selected":""}>${f}</option>`}).join("")}
        </select>`,y);if(v==="choice"){const g=A||((B=C==null?void 0:C[0])==null?void 0:B.value)||"";return j(`
          <input type="hidden" ${q} value="${J(g)}" />
          <div class="flex flex-wrap gap-2" role="group" aria-label="${J(L)}">
            ${(C??[]).map(d=>{const f=typeof d=="object"?d.value:d,I=typeof d=="object"?d.label:d;return`<button type="button" class="cfg-choice px-3 py-2 rounded-xl border text-sm font-semibold transition ${f===g?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}" data-choice-key="${J(c)}" data-choice-value="${J(f)}">
                ${J(I)}
              </button>`}).join("")}
          </div>`,y)}if(v==="textarea")return j(`<textarea ${q} rows="${H??3}" placeholder="${m??""}"
          class="${r} resize-none">${A??""}</textarea>`,y);if(v==="upload")return j(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${A?`<img src="${A}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${A?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${c}" />
          </label>
          <input type="hidden" ${q} value="${A}" />
        </div>`,y);if(v==="toggle"){const g=A==="true";return j(`
          <button type="button" ${q} data-on="${g}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${g?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${g?"28":"2"}px)"></span>
          </button>`,y)}if(v==="password"){const g=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(c),d=`const i=document.getElementById('cfg-${c}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,f=g?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${c}','cfg-${c}-st')">ทดสอบ</button>
             <span id="cfg-${c}-st" class="text-xs text-gray-400"></span>`:"";return j(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${q} value="${A}" class="${r} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${d}">ดู</button>
            ${f}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,y)}return j(_?`
        <div class="flex gap-2 items-center">
          <input type="text" ${q} value="${A??""}" placeholder="${m??""}" class="${r} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${_}','${c}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${q} value="${A??""}" placeholder="${m??""}" class="${r}" />`,y)},h=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],t=c=>{const L=(v,C)=>`<div class="mb-6">
          ${v?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${v}</p>`:""}
          ${C.map(u).join("")}
        </div>`;if(c==="general")return[`<section class="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">ภาคเรียนปัจจุบันของระบบ</p>
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-xl bg-white border border-indigo-100 px-4 py-2.5 text-sm font-bold text-indigo-800">
              📚 ภาคเรียนที่ ${J(e.semester??"—")} / ${J(e.academicYear??e.academic_year??"—")}
            </span>
            <span class="text-xs text-indigo-600">การเปลี่ยนภาคเรียนต้องใช้ปุ่ม “ขึ้นภาคเรียนใหม่” ด้านล่าง เพื่อให้ระบบเก็บประวัติและสร้างพื้นที่ว่างอย่างปลอดภัย</span>
          </div>
          <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-indigo-700">
            <span>เปิดภาคเรียน: ${J(e.semester_start??"—")}</span>
            <span>ปิดภาคเรียน: ${J(e.semester_end??"—")}</span>
          </div>
        </section>
        <section class="mb-6 rounded-2xl border border-gray-200 bg-white p-4">
          <div class="flex items-center justify-between gap-3 mb-3">
            <div>
              <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">ประวัติภาคเรียน</p>
              <p class="text-[11px] text-gray-400 mt-1">ใช้สำหรับตรวจสอบและเป็นรายการให้ครู/นักเรียนเลือกดูข้อมูลย้อนหลัง</p>
            </div>
            <span class="text-[11px] text-gray-400">${a.length} ภาคเรียน</span>
          </div>
          <div class="space-y-2">
            ${(a.length?a:[{academic_year:e.academicYear,semester:e.semester,start_date:e.semester_start,end_date:e.semester_end,is_current:!0}]).map(v=>`
              <div class="flex flex-wrap items-center justify-between gap-2 rounded-xl border ${v.is_current?"border-emerald-200 bg-emerald-50/60":"border-gray-100 bg-gray-50/60"} px-3 py-2.5">
                <div class="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <span>${v.is_current?"🟢":"🗂️"}</span>
                  <span>ภาค ${J(v.semester)}/${J(v.academic_year)}</span>
                  ${v.is_current?'<span class="text-[10px] rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">ปัจจุบัน</span>':'<span class="text-[10px] rounded-full bg-gray-200 text-gray-500 px-2 py-0.5">ย้อนหลัง</span>'}
                </div>
                <span class="text-[11px] text-gray-400">${J(v.start_date??"—")} ถึง ${J(v.end_date??"—")}</span>
              </div>`).join("")}
          </div>
        </section>`,`<div id="start-new-semester-box" class="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p class="text-sm font-bold text-amber-900">🔄 ขึ้นภาคเรียนใหม่</p>
          <p class="text-xs text-amber-800 mt-1.5 leading-relaxed">
            เปลี่ยนระบบเป็นปี/ภาคเรียนใหม่แบบพื้นที่ว่าง — <b>ไม่สร้างคอร์สวิชา ห้องเรียน หรือการลงทะเบียนนักเรียนให้อัตโนมัติ</b>
            ครูผู้สอนจะเป็นผู้สร้างคอร์สและห้องเรียนที่สอนเอง ส่วนข้อมูลภาคเรียนเก่าจะไม่ถูกลบและยังเก็บไว้เป็นประวัติ
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
        </div>`,L("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),L("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(c==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map(v=>u({...v,type:"color"})).join("")}
        </div>`;if(c==="school"){const v=(C,m)=>[{key:`${C}SchoolName`,label:m.name,type:"text"},{key:`${C}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${C}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${C}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${C}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${C}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${C}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${C}AcademicHeadName`,label:C==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:C==="samai"?"academic_samai":"academic_pvch"},{key:`${C}AcademicHeadSignUrl`,label:C==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${C}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...C==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${C}RegistrarName`,label:C==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:C==="samai"?"registrar_samai":"registrar_pvch"},{key:`${C}RegistrarSignUrl`,label:C==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${C}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...C==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"},{key:"religionDeptHeadSource",label:"ชื่อหัวหน้ากลุ่มสาระในเอกสาร ปพ.5 (วิชาศาสนา)",type:"choice",options:[{value:"central",label:"ใช้หัวหน้ากลุ่มสาระกลาง"},{value:"subgroup",label:"ใช้หัวหน้ากลุ่มย่อยของครูผู้สอน"}],hint:"ใช้กับทั้งศาสนามัธยม (AGM) และศาสนาปวช. (AGMVOC) — หากเลือกหัวหน้ากลุ่มย่อยแต่ยังไม่พบกลุ่มของครู ระบบจะสำรองเป็นหัวหน้ากลุ่มสาระกลาง"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${v("samai",{name:"ชื่อโรงเรียน"}).map(u).join("")}</div>
          <div id="school-porwor" class="hidden">${v("porwor",{name:"ชื่อวิทยาลัย"}).map(u).join("")}</div>`}if(c==="prayer")return[L("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),L("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(c==="contact")return[L("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),L("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},(v,C)=>String(C+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},(v,C)=>String(C+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(c==="payment")return[L("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),L("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(c==="package"){const C=Array.from({length:5},(_,A)=>{const q=A+1,j=`donationStickerImg${q}`,B=e[j]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${B?`<img src="${B}" class="w-full h-full object-contain" id="sticker-prev-${q}" />`:`<span id="sticker-prev-${q}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${q}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${j}" data-n="${q}" />
              </label>
              ${B?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${j}" data-n="${q}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${j}" value="${B}" />
              ${B?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${B}</p>`:""}
            </div>
          </div>`}).join(""),m=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],y={quota:[L("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),L("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),L("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[L("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),L("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),L("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(_=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${_}">
                  👁️ ระดับ ${_}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const _=String(e.donationSpecialFeatures??"").trim(),q=_?_.split(`
`).filter(Boolean).map(d=>{const f=d.split("|").map(I=>I.trim());return{icon:f[0]||"✨",text:f[1]||"",minTier:parseInt(f[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([d,f,I])=>({icon:d,text:f,minTier:I})),j=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],B=(d,f)=>f?`border:2px solid ${j[d-1]};color:${j[d-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",g=(d,f)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${f}" data-min-tier="${d.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${d.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${d.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(I=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${B(I,d.minTier===I)}" data-n="${I}" title="ระดับ ${I}">${I}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${q.map((d,f)=>g(d,f)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(e.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),L("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${C}</div>
            </div>`,L("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),L("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[L("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[L("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),L("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},H="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${m.map(_=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${_.id===H?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${_.id}">${_.label}</button>`).join("")}
          </div>
          ${m.map(_=>`
          <div id="pkg-panel-${_.id}" ${_.id!==H?'class="hidden"':""}>
            ${y[_.id]??""}
          </div>`).join("")}`}if(c==="student")return[L("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),L("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),L("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),L("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),L("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
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
        </div>`].join("");if(c==="sync"){const v=[["classInfoSubjectNameCell","ชื่อรายวิชา"],["classInfoSubjectCodeCell","รหัสวิชา"],["classInfoCreditCell","หน่วยกิต"],["classInfoGradeCell","ชั้นเรียน"],["classInfoHeadStudentCell","หัวหน้าห้อง"],["classInfoDay1Cell","วันสอนคาบ 1"],["classInfoDay2Cell","วันสอนคาบ 2"],["classInfoDay3Cell","วันสอนคาบ 3"],["classInfoDay4Cell","วันสอนคาบ 4"],["classInfoDay5Cell","วันสอนคาบ 5"],["classInfoDay6Cell","วันสอนคาบ 6"],["classInfoTeacherNameCell","ครูผู้สอน"],["classInfoTeacherPhoneCell","เบอร์ติดต่อ"],["classInfoDeptCell","กลุ่มสาระ"],["classInfoHeadDeptCell","หัวหน้าหมวด"]];return`
          ${u({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          ${u({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${v.map(([C,m])=>{const y=e[C]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${m}</p>
                <input type="text" id="cfg-${C}" data-key="${C}" value="${y}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return c==="template"?[L("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${Jn.map(v=>u({key:v.key,label:`${v.category} — ${v.label}`,type:"text",placeholder:v.defaultId,hint:`default: ${v.defaultId}`})).join("")}`].join(""):c==="phrases"?Vl():c==="schedule"?[L("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),L("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),L("Gemini API Key แยกต่อกลุ่มสาระ",o.length?o.map(v=>({key:`geminiKey_${v}`,label:`Key กลุ่มสาระ ${v}`,type:"password",hint:`ครูที่มี dept = ${v} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):c==="council"?[L("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let p="general";ye(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${h.map(c=>`
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${c.id===p?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-tab="${c.id}">
            <span>${c.icon}</span><span class="hidden sm:inline">${c.label}</span>
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
    </div>`);const w=c=>{var I;p=c,document.querySelectorAll(".cfg-tab").forEach(i=>{const $=i.dataset.tab===c;i.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${$?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const L=t(c),v=document.getElementById("cfg-panel-inner");L instanceof Promise?(v.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',L.then(i=>{v.innerHTML="",i instanceof Element?v.appendChild(i):v.innerHTML=i??""})):L instanceof Element?(v.innerHTML="",v.appendChild(L)):v.innerHTML=L??"",document.getElementById("cfg-save-hint").textContent="",document.querySelectorAll(".cfg-choice").forEach(i=>{i.addEventListener("click",()=>{var S;const $=i.dataset.choiceKey,x=document.getElementById(`cfg-${$}`);x&&(x.value=i.dataset.choiceValue),(S=i.parentElement)==null||S.querySelectorAll(".cfg-choice").forEach(k=>{const E=k===i;k.classList.toggle("border-indigo-500",E),k.classList.toggle("bg-indigo-50",E),k.classList.toggle("text-indigo-700",E),k.classList.toggle("border-gray-200",!E),k.classList.toggle("bg-white",!E),k.classList.toggle("text-gray-500",!E)})})}),document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(i=>{i.addEventListener("input",()=>{const $=document.getElementById(`${i.id}-txt`);$&&($.textContent=i.value)})});const C=()=>{const $=[...document.querySelectorAll("#feat-editor .feat-row")].map(S=>{var M,N;const k=((M=S.querySelector(".feat-icon"))==null?void 0:M.value.trim())||"✨",E=((N=S.querySelector(".feat-text"))==null?void 0:N.value.trim())||"",T=S.dataset.minTier||"1";return E?`${k}|${E}|${T}`:null}).filter(Boolean).join(`
`),x=document.getElementById("cfg-donationSpecialFeatures");x&&(x.value=$)},m=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],y=i=>{var $,x,S;i.querySelectorAll(".feat-tier-btn").forEach(k=>{k.addEventListener("click",()=>{const E=parseInt(k.dataset.n);i.dataset.minTier=String(E),i.querySelectorAll(".feat-tier-btn").forEach(T=>{const M=parseInt(T.dataset.n);T.style.cssText=M===E?`border:2px solid ${m[M-1]};color:${m[M-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),C()})}),($=i.querySelector(".feat-icon"))==null||$.addEventListener("input",C),(x=i.querySelector(".feat-text"))==null||x.addEventListener("input",C),(S=i.querySelector(".feat-del"))==null||S.addEventListener("click",()=>{i.remove(),C()})};document.querySelectorAll("#feat-editor .feat-row").forEach(y),(I=document.getElementById("feat-add"))==null||I.addEventListener("click",()=>{var S;const i=document.getElementById("feat-editor");if(!i)return;const $=i.children.length,x=document.createElement("div");x.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",x.dataset.idx=$,x.dataset.minTier="1",x.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(k=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${k===1?`border:2px solid ${m[0]};color:${m[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${k}" title="ระดับ ${k}">${k}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,i.appendChild(x),y(x),(S=x.querySelector(".feat-text"))==null||S.focus()}),document.querySelectorAll(".pkg-stab").forEach(i=>{i.addEventListener("click",()=>{var x;const $=i.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(S=>{S.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${S.dataset.pstab===$?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(S=>S.classList.add("hidden")),(x=document.getElementById(`pkg-panel-${$}`))==null||x.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(i=>{i.addEventListener("change",async $=>{const x=$.target.files[0];if(!x)return;if(x.type!=="image/png"){D("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),i.value="";return}const S=i.dataset.skey,k=i.dataset.n;i.disabled=!0;try{const E=await co(S,x),T=document.getElementById(`cfg-${S}`);T&&(T.value=E),await _e(S,E);const M=document.getElementById(`sticker-prev-${k}`);if(M){const N=document.createElement("img");N.src=E,N.className="w-full h-full object-contain",M.replaceWith(N),N.id=`sticker-prev-${k}`}D(`อัปโหลดสติกเกอร์ ${k} สำเร็จ ✅`,"success")}catch(E){D("อัปโหลดไม่สำเร็จ: "+me(E),"error")}finally{i.disabled=!1}})});const H=i=>{const $=String(i.donationStickerTiers??"").trim(),x=parseInt(i.donationMinAmount??99)||99,S=parseInt(i.donationAmountStep??50)||50;return($?$.split(`
`).filter(Boolean).map(T=>{const[M,N,O,U,z]=T.split("|").map(P=>P.trim());return{amount:parseInt(M)||0,sticker:N||"🏅",title:O||"",note:U||"",color:z||""}}).filter(T=>T.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([T,M,N,O,U])=>({amount:T,sticker:M,title:N,note:O,color:U}))).sort((T,M)=>T.amount-M.amount).map((T,M)=>{const N=(i[`donationStickerImg${M+1}`]??"").trim();return N&&/^https?:\/\//.test(N)?{...T,sticker:N}:T})},_=i=>{const $=String(i.donationSpecialFeatures??"").trim(),x=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return $?$.split(`
`).filter(Boolean).map(S=>{const k=S.split("|").map(E=>E.trim());return{icon:k[0]||"✨",text:k[1]||k[0]||S,minTier:parseInt(k[2])||1}}).filter(S=>S.text):x.map(([S,k,E])=>({icon:S,text:k,minTier:E}))},A=(i,$,x,S=4)=>{var z;(z=document.getElementById("tier-preview-modal"))==null||z.remove();const k=i.color||"#f59e0b",E=parseInt(k.slice(1,3),16),T=parseInt(k.slice(3,5),16),M=parseInt(k.slice(5,7),16),N=String(i.sticker??""),O=/^https?:\/\//.test(N)?`<img src="${N}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${N}</div>`,U=document.createElement("div");U.id="tier-preview-modal",U.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",U.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${E},${T},${M},0.85),rgba(${E},${T},${M},1))">
              ${O}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${i.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${i.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${x}
              </div>
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษที่คุณครูได้รับ</p>
                <div class="space-y-1.5">
                  ${$.map(P=>S>=(P.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${P.icon}</span><span>${P.text}</span></div>`:`<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${P.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${P.minTier}+</span></div>`).join("")}
                </div>
              </div>
              ${i.note?`<p class="text-xs text-center text-gray-400 italic">"${i.note}"</p>`:""}
              <p class="text-[10px] text-gray-400 text-center leading-relaxed">
                ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
                คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
              </p>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <p class="text-[10px] text-center text-amber-500 mb-2 font-semibold">🔧 โหมดตัวอย่าง (Admin)</p>
              <button class="w-full py-2.5 rounded-2xl text-white font-bold text-sm"
                style="background:rgba(${E},${T},${M},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(U),U.addEventListener("click",P=>{P.target===U&&U.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(i=>{i.addEventListener("click",()=>{const $=parseInt(i.dataset.tier),x={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(M=>{const N=M.id.replace(/^cfg-/,"");x[N]=M.value??M.dataset.on});const S=H(x),k=_(x),E=S[$-1]??S[0];if(!E){D("ยังไม่มีข้อมูล tier","warning");return}const T=(x.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;A(E,k,T,$)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(i=>{i.addEventListener("click",async()=>{const $=i.dataset.skey,x=i.dataset.n;await _e($,"").catch(()=>{});const S=document.getElementById(`cfg-${$}`);S&&(S.value="");const k=document.getElementById(`sticker-prev-${x}`);k&&(k.outerHTML=`<span id="sticker-prev-${x}" class="text-2xl text-gray-300">🏅</span>`),i.remove(),D("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(i=>{i.addEventListener("click",()=>{const $=i.dataset.stab;document.querySelectorAll(".school-stab").forEach(x=>{x.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${x.dataset.stab===$?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",$!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",$!=="porwor")})});const q=document.getElementById("btn-sync-students-now"),j=document.getElementById("btn-download-student-sync-template");j&&j.addEventListener("click",()=>{const $="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(E=>E.map(T=>`"${String(T).replace(/"/g,'""')}"`).join(",")).join(`
`),x=new Blob([$],{type:"text/csv;charset=utf-8"}),S=URL.createObjectURL(x),k=document.createElement("a");k.href=S,k.download="pp5-students-sync-template.csv",document.body.appendChild(k),k.click(),k.remove(),URL.revokeObjectURL(S),D("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const B=document.getElementById("btn-start-new-semester"),g=document.getElementById("start-new-semester-target");if(B){const i=parseInt(e.semester??1),$=parseInt(e.academicYear??new Date().getFullYear()+543),x=i===1?2:1,S=i===1?$:$+1;g&&(g.textContent=`ตอนนี้: ภาคเรียนที่ ${i}/${$}  →  จะขึ้นเป็น: ภาคเรียนที่ ${x}/${S}`),B.addEventListener("click",async()=>{var T,M;const k=((T=document.getElementById("start-new-semester-start"))==null?void 0:T.value)??"",E=((M=document.getElementById("start-new-semester-end"))==null?void 0:M.value)??"";if(!k||!E||E<k){D("กรุณาระบุวันเปิด-ปิดภาคเรียนใหม่ให้ถูกต้อง","warning");return}B.disabled=!0,B.textContent="⏳ กำลังดำเนินการ...";try{const N=await vn(S,x,k,E),O=[`คอร์สเดิมที่จะถูกเก็บเป็นประวัติ: ${Number((N==null?void 0:N.courses_to_archive)??0).toLocaleString()} คอร์ส`,`ห้องเรียนเดิมที่จะถูกเก็บเป็นประวัติ: ${Number((N==null?void 0:N.classes_to_archive)??0).toLocaleString()} ห้อง`,`ผู้สนับสนุนที่มีสิทธิ์ส่วนลดต่อเทอมใหม่: ${Number((N==null?void 0:N.eligible_supporters)??0).toLocaleString()} คน`].join(`
`);if(!confirm(`ยืนยันขึ้นภาคเรียนที่ ${x}/${S}?

วันเปิด: ${k}
วันปิด: ${E}

${O}

ภาคเรียนใหม่จะเป็นพื้นที่ว่าง ครูต้องสร้างคอร์สและห้องเรียนใหม่เอง
ข้อมูลเดิมจะไม่ถูกลบ และจะไม่สร้างการลงทะเบียนนักเรียนให้อัตโนมัติ`)){B.disabled=!1,B.textContent="🔄 ขึ้นภาคเรียนใหม่";return}await wn(S,x,k,E),e.semester=String(x),e.academicYear=String(S),e.semester_start=k,e.semester_end=E,e.unlimitedTeacherClassCreation="true",D(`ขึ้นภาคเรียนที่ ${x}/${S} สำเร็จ ✅ ล้างสิทธิ์ผู้สนับสนุนรอบเดิม และเปิดให้ครูสร้างห้องได้ไม่จำกัด`,"success"),ka()}catch(N){D("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+me(N),"error"),B.disabled=!1,B.textContent="🔄 ขึ้นภาคเรียนใหม่"}})}const d=i=>{const $=document.getElementById("student-sync-log-section"),x=document.getElementById("student-sync-log-content");if(!$||!x)return;const S=new Date(i.synced_at),k=S.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),E=S.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),T=i.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",M=(i.new_students||[]).map(O=>`<span class="text-green-700">${O.full_name} (${O.student_code})</span>`).join(", ")||"—",N=(i.deactivated_students||[]).map(O=>`<span class="text-red-500">${O.full_name} (${O.student_code})</span>`).join(", ")||"—";x.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${k} ${E}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${T}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${i.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${i.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${i.new_count} คน:</span> ${M}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${i.deactivated_count} คน:</span> ${N}
          </div>`,$.classList.remove("hidden")},f=async()=>{try{const{data:i}=await se.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();i&&d(i)}catch{}};f(),q&&q.addEventListener("click",async()=>{var S,k,E,T,M,N;const i=((k=(S=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:S.value)==null?void 0:k.trim())||"",$=((T=(E=document.getElementById("cfg-studentSyncTabName"))==null?void 0:E.value)==null?void 0:T.trim())||"",x=((N=(M=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:M.value)==null?void 0:N.trim())||"1";q.disabled=!0,q.textContent="กำลังซิงก์...";try{await Promise.all([_e("studentSyncSheetId",i),_e("studentSyncTabName",$),_e("studentSyncHeaderRow",x)]);const O=await Xn({sourceSheetId:i,tabName:$,headerRow:x}),U=`ซิงก์สำเร็จ: อ่าน ${O.read??0} แถว / บันทึก ${O.written??0} คน / ใหม่ ${O.newCount??0} / ซ่อน ${O.deactivatedCount??0} ✅`;D(U,"success"),f()}catch(O){D("ซิงก์นักเรียนไม่สำเร็จ: "+me(O),"error")}finally{q.disabled=!1,q.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(i=>{i.addEventListener("change",async $=>{var E,T;const x=$.target.files[0];if(!x)return;const S=i.dataset.key,k=document.getElementById(`cfg-${S}`);i.disabled=!0;try{const M=await po(S,x);k&&(k.value=M),await _e(S,M),D("อัปโหลดสำเร็จ ✅","success");const N=(E=i.closest(".flex"))==null?void 0:E.querySelector("img"),O=(T=i.closest(".flex"))==null?void 0:T.querySelector("div.w-14");N?N.src=M:O&&(O.outerHTML=`<img src="${M}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`)}catch(M){D("อัปโหลดไม่สำเร็จ: "+me(M),"error")}finally{i.disabled=!1}})})};document.querySelectorAll(".cfg-tab").forEach(c=>c.addEventListener("click",()=>w(c.dataset.tab))),w(p),window._syncPositionToField=async(c,L,v)=>{const C=v.textContent;v.disabled=!0,v.textContent="กำลังดึง...";try{const m=n.find(H=>H.position===c);if(!m){D(`ยังไม่มีครูที่กำหนดบทบาท "${c}"`,"warning");return}const y=document.getElementById(`cfg-${L}`);y&&(y.value=m.full_name,y.dispatchEvent(new Event("input")),D(`ดึงชื่อ "${m.full_name}" สำเร็จ`,"success"))}catch{D("ดึงข้อมูลไม่สำเร็จ","error")}finally{v.disabled=!1,v.textContent=C}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const c=document.getElementById("cfg-save-btn"),L=document.querySelectorAll("#cfg-panel-inner [data-key]");c.disabled=!0,c.textContent="กำลังบันทึก...";try{await Promise.all([...L].map(v=>{const C=v.tagName==="BUTTON"?v.dataset.on??"false":v.value;return _e(v.dataset.key,C)})),await ps("admin",{},!0),D("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch(v){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",v),D("บันทึกไม่สำเร็จ: "+((v==null?void 0:v.message)||"ไม่ทราบสาเหตุ"),"error")}finally{c.disabled=!1,c.textContent="บันทึก"}})}catch{D("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function Ds(){ve("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",ye(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{Ut(await Xe())}catch{D("โหลดข้อมูลไม่สำเร็จ","error")}}function Ut(e){const a=document.getElementById("dept-table-wrap");if(a){if(!e.length){a.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🗂️</p>
      <p class="font-medium">ยังไม่มีกลุ่มสาระในระบบ</p>
    </div>`;return}a.innerHTML=`
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
        ${e.map(s=>`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4">
            <span class="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mr-2">${s.dept_code}</span>
            <span class="font-semibold text-gray-800">${s.dept_name}</span>
          </td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            <div class="flex items-center gap-2">
              ${s.head_photo_url?`<img src="${s.head_photo_url}" class="w-7 h-7 rounded-full object-cover" />`:'<div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">?</div>'}
              <div>
                <span>${s.head_name??"—"}</span>
                ${s.teacher_code?`<span class="block text-xs font-mono text-gray-400">${s.teacher_code}</span>`:""}
              </div>
            </div>
          </td>
          <td class="px-5 py-4 text-center hidden md:table-cell">
            ${s.head_sign_url?`<img src="${s.head_sign_url}" class="h-8 max-w-[80px] mx-auto object-contain" />`:'<span class="text-gray-300 text-xs">ไม่มีลายเซ็น</span>'}
          </td>
          <td class="px-5 py-4 text-right">
            <button onclick="openDeptModal(${s.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeleteDept(${s.id}, '${s.dept_name.replace(/'/g,"\\'")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`).join("")}
      </tbody>
    </table>`}}async function Vt(){ve("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",ye(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);try{const e=await Tr();window._periodsCache=Object.fromEntries(e.map(s=>[s.id,s]));const a=document.getElementById("period-list");if(!e.length){a.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🕐</p><p class="font-medium">ยังไม่มีข้อมูลคาบเรียน</p>
      </div>`;return}a.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-center">คาบที่</th>
          <th class="px-5 py-3 text-center">เวลาเริ่ม</th>
          <th class="px-5 py-3 text-center">เวลาสิ้นสุด</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${e.map(s=>{var n,l;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 text-center">
            <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm
                         inline-flex items-center justify-center">${s.period_no}</span>
          </td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(n=s.start_time)==null?void 0:n.slice(0,5)}</td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(l=s.end_time)==null?void 0:l.slice(0,5)}</td>
          <td class="px-5 py-3 text-right">
            <button onclick="openPeriodModal(${s.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeletePeriod(${s.id})"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`}catch{D("โหลดข้อมูลไม่สำเร็จ","error")}}function Gl(e){const a=[];let s=[],n="",l=!1;for(let r=0;r<String(e??"").length;r++){const u=e[r],h=e[r+1];l?u==='"'&&h==='"'?(n+='"',r++):u==='"'?l=!1:n+=u:u==='"'?l=!0:u===","?(s.push(n),n=""):u===`
`?(s.push(n),a.push(s),s=[],n=""):u!=="\r"&&(n+=u)}if((n||s.length)&&(s.push(n),a.push(s)),a.length<2)return[];const o=a[0].map(r=>r.trim()),b=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return a.slice(1).map(r=>{const u=Object.fromEntries(o.map((t,p)=>[t,r[p]??""])),h={};return b.forEach(t=>{const p=String(u[t]??"").trim();if(t==="item_no"){const w=Number(p);h[t]=p&&Number.isFinite(w)?w:null}else h[t]=p||null}),h}).filter(r=>r.subject_name||r.subject_code||r.standard_text||r.indicator_text||r.learning_outcome_text)}function Pe(e,a,s="",n="text"){const l=n==="textarea"?`<textarea name="${e}" rows="3" dir="auto" class="${ze} w-full min-h-[92px] resize-y">${J(s)}</textarea>`:`<input name="${e}" value="${J(s)}" dir="auto" class="${ze} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${a}</span>
    ${l}
  </label>`}async function it(){var e;ve("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",ye(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let a=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[s,n]=await Promise.all([Br(a),Xe().catch(()=>[])]),l=He([...n.map(t=>t.dept_name),...n.map(t=>t.dept_code),...s.map(t=>t.dept)]),o=He(s.map(t=>t.grade_level)),b=Object.fromEntries(s.map(t=>[t.id,t]));window._curriculumRows=b;const r=(t={})=>{const p=!!t.id,w=document.createElement("div");w.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",w.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${p?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${Pe("subject_name","ชื่อรายวิชา",t.subject_name)}
            ${Pe("subject_code","รหัสวิชา",t.subject_code)}
            ${Pe("dept","กลุ่มสาระ/กลุ่มวิชา",t.dept)}
            ${Pe("grade_level","ระดับชั้น",t.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${Pe("strand","สาระ",t.strand)}
            ${Pe("topic","เรื่อง/สาระการเรียนรู้",t.topic)}
            ${Pe("item_no","ลำดับข้อ",t.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${Pe("standard_code","รหัสมาตรฐาน",t.standard_code)}
            ${Pe("indicator_code","รหัสตัวชี้วัด",t.indicator_code)}
          </div>
          ${Pe("standard_text","มาตรฐานการเรียนรู้",t.standard_text,"textarea")}
          ${Pe("indicator_text","ตัวชี้วัด",t.indicator_text,"textarea")}
          ${Pe("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",t.learning_outcome_text,"textarea")}
          ${Pe("source_note","แหล่งที่มา/หมายเหตุ",t.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(w),w.querySelectorAll("[data-close]").forEach(c=>c.addEventListener("click",()=>w.remove())),w.querySelector("#curriculum-form").addEventListener("submit",async c=>{c.preventDefault();const L=new FormData(c.currentTarget),v={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(y=>{v[y]=String(L.get(y)??"").trim()||null});const C=String(L.get("item_no")??"").trim(),m=Number(C);v.item_no=C&&Number.isFinite(m)?m:null;try{p?await jr(t.id,v):await qr(v),D("บันทึกข้อมูลหลักสูตรแล้ว","success"),w.remove(),await it()}catch(y){D(y.message||"บันทึกไม่สำเร็จ","error")}})},u=()=>{const t=document.createElement("div"),p="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";t.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
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
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${ze} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${ze} w-full font-mono text-xs" placeholder="${p}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelectorAll("[data-close]").forEach(w=>w.addEventListener("click",()=>t.remove())),t.querySelector("#curriculum-csv-file").addEventListener("change",w=>{var v;const c=(v=w.target.files)==null?void 0:v[0];if(!c)return;const L=new FileReader;L.onload=()=>{t.querySelector("#curriculum-csv-text").value=L.result||""},L.readAsText(c)}),t.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const w=Gl(t.querySelector("#curriculum-csv-text").value);if(!w.length)return D("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const c=await Ar(w);D(`นำเข้าแล้ว ${c} รายการ`,"success"),t.remove(),await it()}catch(c){D(c.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>r(),window._curriculumEdit=t=>{var p;return r(((p=window._curriculumRows)==null?void 0:p[t])||{})},window._curriculumDelete=async t=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await Mr(t),D("ลบข้อมูลแล้ว","success"),await it()}catch(p){D(p.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=u,ye(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
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
        <input id="cur-filter-q" value="${J(a.q)}" class="${ze}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${J(a.subjectCode)}" class="${ze}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${Te}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${l.map(t=>`<option value="${J(t)}" ${t===a.dept?"selected":""}>${J(t)}</option>`).join("")}
        </select>
        <select id="cur-filter-grade" class="${Te}">
          <option value="">ทุกระดับชั้น</option>
          ${o.map(t=>`<option value="${J(t)}" ${t===a.gradeLevel?"selected":""}>${J(t)}</option>`).join("")}
        </select>
        <button id="cur-filter-submit" class="rounded-xl bg-gray-900 text-white font-semibold px-4 py-2 hover:bg-gray-800">ค้นหา</button>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-4 border-b flex items-center justify-between">
          <h3 class="font-bold text-gray-800">รายการหลักสูตร</h3>
          <span class="text-sm text-gray-400">พบ <b class="text-indigo-600">${s.length}</b> รายการ</span>
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
              ${s.length?s.map(t=>`<tr class="hover:bg-gray-50/70 align-top">
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-900">${J(t.subject_name||"ไม่ระบุวิชา")}</div>
                  <div class="text-indigo-500 font-mono">${J(t.subject_code||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${J(t.dept||"—")} · ${J(t.grade_level||"ทุกชั้น")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${J(t.topic||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${J(t.strand||"")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${J(t.standard_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${J(t.standard_text||"—")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${J(t.indicator_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${J(t.indicator_text||t.learning_outcome_text||"—")}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${Fe(t.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${Fe(t.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const h=()=>{var t,p,w,c;a={q:((t=document.getElementById("cur-filter-q"))==null?void 0:t.value)||"",subjectCode:((p=document.getElementById("cur-filter-code"))==null?void 0:p.value)||"",dept:((w=document.getElementById("cur-filter-dept"))==null?void 0:w.value)||"",gradeLevel:((c=document.getElementById("cur-filter-grade"))==null?void 0:c.value)||""},window._curriculumFilters=a,it()};["cur-filter-q","cur-filter-code"].forEach(t=>{var p;(p=document.getElementById(t))==null||p.addEventListener("keydown",w=>{w.key==="Enter"&&h()})}),["cur-filter-dept","cur-filter-grade"].forEach(t=>{var p;(p=document.getElementById(t))==null||p.addEventListener("change",h)}),(e=document.getElementById("cur-filter-submit"))==null||e.addEventListener("click",h)}catch(a){ye(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${J(a.message||a)}
    </div>`)}}async function pt(){var e;ve("subjects"),document.getElementById("page-title").textContent="จัดการรายวิชา",ye(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[a,s,n,l,o]=await Promise.all([Pt(),Ot(),Ne().catch(()=>[]),Xe().catch(()=>[]),qe().catch(()=>({}))]),b=Object.fromEntries(n.map(B=>[B.id,B])),r=Object.fromEntries(l.map(B=>[B.dept_code,B])),u=Object.fromEntries(l.map(B=>[B.dept_name,B])),h=B=>{var g;return{...B,_teacher_name:((g=b[B.teacher_id])==null?void 0:g.full_name)??""}},t=Number(o.academicYear??o.academic_year??new Date().getFullYear()+543),p=Number(o.semester??1),w=B=>Number(B==null?void 0:B.academic_year)===t&&Number(B==null?void 0:B.semester)===p,c=a.filter(w).map(h),L=s.filter(w).map(B=>{var g;return{...B,master_subjects:B.master_subjects?{...B.master_subjects,_teacher_name:((g=b[B.master_subjects.teacher_id])==null?void 0:g.full_name)??""}:B.master_subjects}}),v=He(c.map(B=>B.dept)),C=He(c.map(B=>B.skill_group));let m={sheetId:o.subjectSyncSheetId||Kn,tabName:o.subjectSyncTabName||Zt,keyField:o.subjectSyncKeyField||Da,columns:(()=>{try{const B=JSON.parse(o.subjectSyncColumns||"null");return Array.isArray(B)&&B.length?B:Xt}catch{return Xt}})()};ye(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${J(m.tabName||Zt)}
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
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${ze} flex-1 min-w-40" />
          <select id="subf-dept" class="${Te}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${v.map(B=>`<option value="${B}">${B}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${Te}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${C.map(B=>`<option value="${B}">${B}</option>`).join("")}
          </select>
          <select id="subf-subg" class="${Te}">
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
    </div>`);let H="course";const _=()=>{const B=document.getElementById("sub-action-btn");B&&(B.innerHTML=H==="course"?"<span>＋</span> เพิ่มคอร์ส":H==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const g=document.getElementById("btn-sync-subjects-central");g&&(g.textContent=`↑ ซิงค์รายวิชา → ${m.tabName||Zt}`)},A=()=>c.map(B=>{const g=b[B.teacher_id]??{},d=r[B.dept]??u[B.dept]??{},f=g.full_name??"",I=B.subject_name??"",i=B.subject_code??"";return{subject_group:B.subject_group??"",sbJect:`${I}_(${i})_${f}`,subject_name:I,subject_code:i,credit:B.credit??"",year:o.academicYear??"",semester:o.semester??"",grade_level:B.grade_level??"",teacher_name:f,teacher_code:g.teacher_code??"",dept_name:d.dept_name??B.dept??"",dept_code:d.dept_code??B.dept??""}}),q=()=>{var g;const B=new Set(m.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${J(m.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${J(m.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${Ha.map(d=>`
                <option value="${J(d.key)}" ${m.keyField===d.key?"selected":""}>
                  ${J(d.key)} - ${J(d.label)}
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
            ${Ha.map(d=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${J(d.key)}" ${B.has(d.key)?"checked":""} />
                <span>
                  <span class="font-semibold">${J(d.key)}</span>
                  <span class="block text-xs text-gray-400">${J(d.label)}</span>
                </span>
              </label>
            `).join("")}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`,(g=document.getElementById("subject-sync-select-defaults"))==null||g.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach(d=>{d.checked=Xt.includes(d.value)})})},j=()=>{var I;if((I=document.getElementById("subject-filter-bar"))==null||I.classList.toggle("hidden",H==="sync"),_(),H==="sync"){q();return}const B=document.getElementById("subf-q").value.toLowerCase(),g=document.getElementById("subf-dept").value,d=document.getElementById("subf-skill").value,f=document.getElementById("subf-subg").value;if(H==="course"){const i=c.filter($=>(!B||[$.subject_code,$.subject_name,$.dept].some(x=>(x??"").toLowerCase().includes(B)))&&(!g||$.dept===g)&&(!d||$.skill_group===d)&&(!f||$.subject_group===f));document.getElementById("subf-count").textContent=i.length,Ea(i)}else{const i=L.filter($=>{var x,S;return(!B||($.class_name??"").toLowerCase().includes(B)||(((x=$.master_subjects)==null?void 0:x.subject_name)??"").toLowerCase().includes(B))&&(!g||((S=$.master_subjects)==null?void 0:S.dept)===g)});document.getElementById("subf-count").textContent=i.length,Wl(i)}};window._subAction=async()=>{var B,g,d;if(H==="course")ro(null,async(f,I=[])=>{await Dr(f,I),await pt()});else if(H==="class")Yl();else{const f=((B=document.getElementById("subject-sync-sheet-id"))==null?void 0:B.value.trim())??"",I=((g=document.getElementById("subject-sync-tab-name"))==null?void 0:g.value.trim())??"",i=((d=document.getElementById("subject-sync-key-field"))==null?void 0:d.value)??Da,$=[...document.querySelectorAll(".subject-sync-col:checked")].map(E=>E.value),x=$.includes(i)?$:[i,...$];if(!f||!I){D("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!x.length){D("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const S=document.getElementById("sub-action-btn"),k=S==null?void 0:S.innerHTML;S&&(S.disabled=!0,S.textContent="กำลังบันทึก...");try{await Promise.all([_e("subjectSyncSheetId",f),_e("subjectSyncTabName",I),_e("subjectSyncKeyField",i),_e("subjectSyncColumns",JSON.stringify(x))]),m={sheetId:f,tabName:I,keyField:i,columns:x},_(),D("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(E){D("บันทึกตั้งค่าไม่สำเร็จ: "+me(E),"error")}finally{S&&(S.disabled=!1,S.innerHTML=k),_()}}},window._adminRegisterClass=async B=>{const g=c.find(d=>d.id===B);g?ao(null,g):D("ไม่พบคอร์ส","error")},window._adminEditClass=B=>{var d;const g=(d=window._adminClassCache)==null?void 0:d[B];g?is(null,g):D("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(B,g)=>{window._goBack=()=>pt(),so(null,B,g)},window._adminDeleteClass=async(B,g)=>{if(confirm(`ยืนยันลบ "${g}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await ss(B),D(`ลบ "${g}" แล้ว`,"success"),j()}catch(d){D("ลบไม่สำเร็จ: "+me(d),"error")}},(e=document.getElementById("btn-sync-subjects-central"))==null||e.addEventListener("click",async B=>{const g=B.currentTarget,d=g.textContent;try{g.disabled=!0,g.textContent="กำลังซิงค์...";const f=await Qn(A(),{sheetId:m.sheetId,tabName:m.tabName,headers:m.columns,keyField:m.keyField});D(`ส่งคำสั่งซิงค์รายวิชา ${f} รายการไปแท็บ ${m.tabName} แล้ว`,"success")}catch(f){D("ซิงค์รายวิชาไม่สำเร็จ: "+me(f),"error")}finally{g.disabled=!1,g.textContent=d}}),window._switchSubjectTab=B=>{H=B,document.getElementById("stab-course").className=B==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=B==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=B==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",j()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(B=>{var g,d;(g=document.getElementById(B))==null||g.addEventListener("input",j),(d=document.getElementById(B))==null||d.addEventListener("change",j)}),j()}catch{D("โหลดรายวิชาไม่สำเร็จ","error")}}function Ea(e){const a=document.getElementById("subject-table-wrap");if(a){if(!e.length){a.innerHTML=`<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">📚</p><p class="font-medium">ไม่พบรายวิชา</p></div>`;return}a.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
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
      ${e.map(s=>`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${s.subject_name}</p>
          <p class="text-xs text-indigo-500 font-mono">${s.subject_code??"—"}</p>
          ${s._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${s._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${s.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${s.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.grade_level??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.credit??"—"}</td>
        <td class="px-4 py-3 text-right">
          ${s.teacher_id?`<button onclick="window._adminViewSchedule(${s.teacher_id},'${Fe(s._teacher_name||s.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
          <button onclick="openSubjectModal(${s.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${s.id},'${Fe(s.subject_name)}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join("")}
    </tbody>
  </table></div>`}}function Wl(e){const a=document.getElementById("subject-table-wrap");if(a){if(window._adminClassCache=Object.fromEntries(e.map(s=>[s.id,s])),!e.length){a.innerHTML=`<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">🏫</p><p class="font-medium">ไม่พบรายวิชาที่เปิดสอน</p></div>`;return}a.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
    <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
      <tr>
        <th class="px-4 py-3 text-left">ห้อง / วิชา</th>
        <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">Sheet</th>
        <th class="px-4 py-3 text-right">จัดการ</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-50">
      ${e.map(s=>{var n,l,o,b;return`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${s.class_name??"—"}</p>
          <p class="text-xs text-indigo-500">${((n=s.master_subjects)==null?void 0:n.subject_name)??"—"}</p>
          ${(l=s.master_subjects)!=null&&l._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${s.master_subjects._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${(o=s.master_subjects)!=null&&o.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${s.master_subjects.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center hidden md:table-cell">
          ${s.google_sheet_id?'<span class="text-green-500 text-xs">✓</span>':'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-right">
          ${(b=s.master_subjects)!=null&&b.teacher_id?`<button onclick="window._adminViewSchedule(${s.master_subjects.teacher_id},'${Fe(s.master_subjects._teacher_name||s.master_subjects.subject_name||s.class_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-2">🗓️ ตาราง</button>`:""}
          <button onclick="window._adminScoreCols(${s.id},'${s.class_name}')"
            class="text-xs bg-amber-500 text-white px-2 py-1 rounded-lg hover:bg-amber-600 mr-2">📋 คะแนน</button>
          <button onclick="window._adminEditClass(${s.id})"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
          <button onclick="window._adminDeleteClass(${s.id},'${s.class_name}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`}).join("")}
    </tbody>
  </table></div>`}}async function Hs(){var t;ve("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const e=await qe().catch(()=>({})),a=parseInt(e.academicYear??new Date().getFullYear()+543),s=parseInt(e.semester??1);ye(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาคเรียน ${s}/${a}</p>
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
  </div>`);const[n,l,o]=await Promise.all([Ne().catch(()=>[]),Hr().catch(()=>[]),rs().catch(()=>[])]);let b="สามัญ";const r=p=>Object.fromEntries(p.filter(w=>w.category===b).map(w=>[w.main_room,w])),u=()=>{document.querySelectorAll(".hr-tab").forEach(p=>{const w=p.dataset.hrTab===b;p.className=w?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},h=async()=>{u();const p=await da(a,s),w=r(p),c=b==="สามัญ"?l:o,L=document.getElementById("homeroom-table-wrap");if(!c.length){L.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${b}</p></div>`;return}L.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${c.map(v=>{var m,y;const C=w[v];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${v}</td>
          <td class="px-5 py-3 text-gray-600">
            ${C?`<span class="font-medium text-gray-800">${((m=C.teachers)==null?void 0:m.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${(y=C.teachers)!=null&&y.teacher_code?`(${C.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${Fe(v)}','${b}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${Fe(v)}','${b}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${C?"เปลี่ยน":"เลือกครู"}</button>
            ${C?`<button onclick="window._deleteHomeroom(${C.id},'${Fe(v)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await h(),window._deleteHomeroom=async(p,w)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${w}?`))try{await Nr(p),D("ลบแล้ว","success"),await h()}catch{D("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(p,w)=>{var H;(H=document.getElementById("hr-picker"))==null||H.remove();let c=null;const L=document.createElement("div");L.id="hr-picker",L.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",L.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${w} · ห้อง ${p}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${Te}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${Te}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`,document.body.appendChild(L);const v=L.querySelector("#hrp-results"),C=L.querySelector("#hrp-save"),m=_=>{v.innerHTML=_.length?_.slice(0,20).map(A=>`
          <button type="button" data-id="${A.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${A.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${A.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',v.querySelectorAll(".hrp-option").forEach(A=>{A.addEventListener("click",()=>{c=n.find(q=>String(q.id)===A.dataset.id),v.querySelectorAll(".hrp-option").forEach(q=>q.classList.remove("bg-emerald-50","text-emerald-700")),A.classList.add("bg-emerald-50","text-emerald-700"),C.disabled=!1})})},y=()=>{const _=L.querySelector("#hrp-code").value.trim().toLowerCase(),A=L.querySelector("#hrp-name").value.trim().toLowerCase();m(n.filter(q=>(!_||(q.teacher_code??"").toLowerCase().includes(_))&&(!A||(q.full_name??"").toLowerCase().includes(A))))};L.querySelector("#hrp-close").addEventListener("click",()=>L.remove()),L.addEventListener("click",_=>{_.target===L&&L.remove()}),L.querySelector("#hrp-code").addEventListener("input",y),L.querySelector("#hrp-name").addEventListener("input",y),C.addEventListener("click",async()=>{if(c){C.disabled=!0,C.textContent="กำลังบันทึก...";try{await os({teacher_id:c.id,main_room:p,category:w,academic_year:a,semester:s}),D("บันทึกครูที่ปรึกษาสำเร็จ","success"),L.remove(),await h()}catch(_){D("บันทึกไม่สำเร็จ: "+me(_),"error"),C.disabled=!1,C.textContent="เลือกครูที่ปรึกษา"}}}),m(n)},document.querySelectorAll(".hr-tab").forEach(p=>{p.addEventListener("click",async()=>{b=p.dataset.hrTab,await h()})}),(t=document.getElementById("hr-export-csv"))==null||t.addEventListener("click",async()=>{try{const p=await da(a,s),w=r(p),c=b==="สามัญ"?l:o,L=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],v=c.map(_=>{var q,j;const A=w[_];return[_,((q=A==null?void 0:A.teachers)==null?void 0:q.full_name)??"",((j=A==null?void 0:A.teachers)==null?void 0:j.phone)??""]}),C="\uFEFF"+[L,...v].map(_=>_.map(A=>`"${String(A).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([C],{type:"text/csv;charset=utf-8"}),y=URL.createObjectURL(m),H=document.createElement("a");H.href=y,H.download=`ครูที่ปรึกษา-${b}-${s}-${a}.csv`,document.body.appendChild(H),H.click(),H.remove(),URL.revokeObjectURL(y),D("ดาวน์โหลด CSV แล้ว ✅","success")}catch(p){D("ดาวน์โหลดไม่สำเร็จ: "+me(p),"error")}})}async function Ns(){ve("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const e=h=>{let t=0;for(const p of h)t=t*26+p.charCodeAt(0)-64;return t},a=h=>{let t="";for(;h>0;)h--,t=String.fromCharCode(65+h%26)+t,h=Math.floor(h/26);return t},s=(h,t)=>{const p=[];for(let w=e(h);w<=e(t);w++)p.push(a(w));return p},n=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:s("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:s("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];n.flatMap(h=>h.cols);const l=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],o=["ระหว่างเรียน","กลางภาค","ปลายภาค"],b=await Or().catch(()=>[]),r={};l.forEach(h=>{r[h]={},o.forEach(t=>{const p=b.find(w=>w.skill_group===h&&w.assignment_type===t);r[h][t]=new Set(p?p.allowed_columns.split(",").map(w=>w.trim()).filter(Boolean):[])})});const u=(h,t)=>n.map(p=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${p.label}</span>
      ${p.cols.map(w=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${r[h][t].has(w)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${h}" data-at="${t}" data-col="${w}">
          ${w}
        </button>`).join("")}
    </div>`).join("");ye(`<div class="max-w-5xl mx-auto animate-fade">
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
      ${n.map(h=>`
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded ${h.color.split(" ")[0]} border ${h.color.split(" ")[2]}"></span>
        <span class="text-gray-600 font-mono font-medium">${h.label}</span>
      </div>`).join("")}
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded bg-emerald-500"></span>
        <span class="text-gray-600">= เลือกแล้ว</span>
      </div>
    </div>

    <!-- Grid per skill group -->
    <div class="space-y-4">
      ${l.map(h=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${h}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${h}"
              ${b.find(t=>t.skill_group===h&&t.is_fixed)?"checked":""} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${o.map(t=>`
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${t}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${h.replace(/\s/g,"_")}-${t.replace(/\s/g,"_")}">
                  ${r[h][t].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${u(h,t)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${h}" data-at="${t}">ล้าง</button>
            </div>
          </div>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </div>`),document.addEventListener("click",h=>{const t=h.target.closest(".col-btn");if(!t)return;const{sg:p,at:w,col:c}=t.dataset;r[p][w].has(c)?(r[p][w].delete(c),t.className=t.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(r[p][w].add(c),t.className=t.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const L=document.getElementById(`scc-count-${p.replace(/\s/g,"_")}-${w.replace(/\s/g,"_")}`);L&&(L.textContent=`${r[p][w].size} คอลัมน์`);const v=document.querySelector(`.scc-clear-btn[data-sg="${p}"][data-at="${w}"]`);v&&(v.style.opacity=r[p][w].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(h=>{h.addEventListener("click",()=>{const{sg:t,at:p}=h.dataset;r[t][p].clear(),document.querySelectorAll(`.col-btn[data-sg="${t}"][data-at="${p}"]`).forEach(c=>{c.className=c.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const w=document.getElementById(`scc-count-${t.replace(/\s/g,"_")}-${p.replace(/\s/g,"_")}`);w&&(w.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const h=document.getElementById("scc-save-btn");h.disabled=!0,h.textContent="กำลังบันทึก...";try{const t=[];l.forEach(p=>{var c;const w=((c=document.querySelector(`.scc-lock[data-sg="${p}"]`))==null?void 0:c.checked)??!1;o.forEach(L=>{const v=[...r[p][L]].join(",");v&&t.push({skill_group:p,assignment_type:L,allowed_columns:v,is_fixed:w})})});for(const p of t)await zr(p);D(`บันทึก ${t.length} รายการสำเร็จ ✅`,"success")}catch(t){D("บันทึกไม่สำเร็จ: "+me(t),"error")}finally{h.disabled=!1,h.textContent="💾 บันทึกทั้งหมด"}})}async function Yl(){ve("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const e=await Pt().catch(()=>[]);document.getElementById("main-content").innerHTML=`
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
                ${e.map(a=>`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-3">
                    <p class="font-semibold text-gray-800">${a.subject_name}</p>
                    <p class="text-xs font-mono text-indigo-500">${a.subject_code??"—"}</p>
                  </td>
                  <td class="px-5 py-3 hidden sm:table-cell">
                    ${a.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${a.dept}</span>`:"—"}
                  </td>
                  <td class="px-5 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${a.grade_level??"—"}</td>
                  <td class="px-5 py-3 text-right">
                    <button onclick="window._adminRegisterClass(${a.id})"
                      class="btn-primary px-4 py-1.5 text-white text-xs font-medium rounded-lg">
                      ลงทะเบียนห้อง
                    </button>
                  </td>
                </tr>`).join("")}
              </tbody>
            </table>`:'<div class="text-center py-16 text-gray-400"><p class="text-4xl mb-3">📖</p><p>ยังไม่มีคอร์สวิชา — สร้างคอร์สก่อน</p></div>'}
      </div>
    </div>`,window.renderSubjects=pt}async function Rs(){var l;ve("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const e=await qe().catch(()=>({})),a=e.academicYear??e.academic_year??new Date().getFullYear()+543,s=e.semester??1,n=async()=>{const o=await Fr(a,s).catch(()=>[]),b=document.getElementById("holiday-table");if(b){if(!o.length){b.innerHTML=`<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`;return}b.innerHTML=`<table class="w-full text-sm">
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
    </table>`}};ye(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${a} ภาค ${s} — ระบบจะ highlight วันนี้ในตารางเช็คชื่อ</p>
    </div>

    <!-- Add form -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-700 mb-3">เพิ่มวันหยุด</h3>
      <div class="flex flex-wrap gap-3">
        <input id="hol-date" type="date" class="${ze} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${ze} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`),await n(),(l=document.getElementById("hol-add"))==null||l.addEventListener("click",async()=>{const o=document.getElementById("hol-date").value,b=document.getElementById("hol-desc").value.trim()||null;if(!o){D("กรุณาเลือกวันที่","warning");return}const r=parseInt(o.slice(0,4),10),u=new Date().getFullYear();if(Math.abs(r-u)>3){D(`ปี ${r} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${u}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await Cr({holiday_date:o,description:b,academic_year:a,semester:s}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",D("เพิ่มวันหยุดแล้ว","success"),await n()}catch(h){D("เกิดข้อผิดพลาด: "+me(h),"error")}}),window._deleteHoliday=async o=>{if(confirm("ลบวันหยุดนี้?"))try{await Ir(o),D("ลบแล้ว","success"),await n()}catch{D("ลบไม่สำเร็จ","error")}}}function Ps(){ve("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",ye(`
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

    </div>`);let e="teachers",a=[];window.switchImportTab=l=>{e=l,a=[],document.getElementById("import-preview").classList.add("hidden");const o={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=o[l],document.getElementById("tab-teachers").className=l==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=l==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const s=l=>{if(!l||!l.name.endsWith(".csv")){D("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const o=new FileReader;o.onload=b=>{a=fo(b.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${a.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=ho(a,e),document.getElementById("import-preview").classList.remove("hidden")},o.readAsText(l,"UTF-8")};document.getElementById("csv-file").addEventListener("change",l=>s(l.target.files[0]));const n=document.getElementById("drop-zone");n.addEventListener("dragover",l=>{l.preventDefault(),n.classList.add("border-indigo-400","bg-indigo-50")}),n.addEventListener("dragleave",()=>n.classList.remove("border-indigo-400","bg-indigo-50")),n.addEventListener("drop",l=>{l.preventDefault(),n.classList.remove("border-indigo-400","bg-indigo-50"),s(l.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!a.length)return;const l=document.getElementById("btn-import"),o=document.getElementById("import-progress"),b=document.getElementById("progress-bar"),r=document.getElementById("progress-text");l.disabled=!0,o.classList.remove("hidden");const u=(h,t)=>{const p=Math.round(h/t*100);b.style.width=p+"%",r.textContent=`${h} / ${t} แถว`};try{const t=await(e==="teachers"?bo:yo)(a,u);if(D(`นำเข้าสำเร็จ ${t} รายการ`,"success"),b.style.width="100%",e==="students"){r.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const p=await yn();D(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(p==null?void 0:p.enrolled)??0} รายการ)`,"success")}catch{}r.textContent=`นำเข้าสำเร็จ ${t} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(h){D("นำเข้าไม่สำเร็จ: "+me(h),"error")}finally{l.disabled=!1}})}async function Os(){var l,o,b;ve("payments"),document.getElementById("page-title").textContent="การชำระเงิน",ye(`<div class="max-w-2xl mx-auto animate-fade">
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
      ${["ทั้งหมด","รอตรวจสอบ","อนุมัติแล้ว","ปฏิเสธ"].map((r,u)=>`<button class="pay-tab text-sm font-medium px-3 py-2 border-b-2 transition
          ${u===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-400 hover:text-gray-600"}"
          data-filter="${["all","pending","approved","rejected"][u]}">${r}</button>`).join("")}
    </div>

    <div id="pay-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div>
        <p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`);let e=[],a="all";const s=()=>{const r=document.getElementById("pay-list");if(!r)return;const u={pending:0,approved:1,rejected:2},h=(a==="all"?e:e.filter(t=>t.status===a)).slice().sort((t,p)=>{const w=(u[t.status]??9)-(u[p.status]??9);return w!==0?w:new Date(p.created_at)-new Date(t.created_at)});if(!h.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}r.innerHTML=h.map(t=>{var L,v,C,m,y;const p={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[t.status]??{label:t.status,cls:"bg-gray-100 text-gray-600"},w={semester:`📦 เหมาทั้งเทอม (${t.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(t.room_count??1)||1} ห้อง (${t.amount??49} บ.)`,donation:t.supporter_renewal_entitlement_id?`🎁 ต่ออายุผู้สนับสนุน ระดับ ${t.donation_tier??"-"} · ${t.amount??0} บ. (ลด ${t.discount_percent??0}%)`:`☕ โดเนท ${t.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[t.package_type]??`${t.package_type} (${t.amount??0} บ.)`,c=new Date(t.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${t.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${t.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${t.id}" data-teacher="${(L=t.teachers)==null?void 0:L.id}" data-pkg="${t.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(((v=t.teachers)==null?void 0:v.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${((C=t.teachers)==null?void 0:C.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((m=t.teachers)==null?void 0:m.teacher_code)??"—"} · ${((y=t.teachers)==null?void 0:y.phone)??"—"}</p>
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
            <span class="text-gray-600">${c}</span>
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
            data-url="${J(t.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>`:`
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${t.status==="pending"?(()=>{var H,_,A;return t.package_type==="donation"?`
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${t.id}" data-teacher="${(H=t.teachers)==null?void 0:H.id}">
              ☕ รับทราบ / ขอบคุณ
            </button>
          </div>`:t.package_type==="school_sponsored"?`
          <div class="px-4 pb-4">
            <button class="approve-btn flex-1 w-full py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${t.id}" data-teacher="${(_=t.teachers)==null?void 0:_.id}" data-pkg="${t.package_type}">
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
              data-id="${t.id}" data-teacher="${(A=t.teachers)==null?void 0:A.id}" data-pkg="${t.package_type}">
              ✅ อนุมัติ
            </button>
          </div>`})():""}
      </div>`}).join(""),r.querySelectorAll(".donate-ack-btn").forEach(t=>{t.addEventListener("click",async()=>{var c,L;const w=((c=(await qe().catch(()=>({}))).donationThankYouCard)==null?void 0:c.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){t.disabled=!0,t.textContent="⏳ กำลังดำเนินการ...";try{await Lt(parseInt(t.dataset.id),"approved",w),await Kt(parseInt(t.dataset.teacher),"donation"),D("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(L=window._refreshPaymentBadge)==null||L.call(window),e=await Ge(),s()}catch{D("เกิดข้อผิดพลาด","error"),t.disabled=!1,t.textContent="☕ รับทราบ / ขอบคุณ"}}})}),r.querySelectorAll(".approve-btn").forEach(t=>{t.addEventListener("click",async()=>{var c;const p=t.dataset.pkg==="school_sponsored";if(confirm(p?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){t.disabled=!0,t.textContent="⏳ กำลังอนุมัติ...";try{await Lt(parseInt(t.dataset.id),"approved"),await Kt(parseInt(t.dataset.teacher),t.dataset.pkg),D("อนุมัติแล้ว ✅","success"),(c=window._refreshPaymentBadge)==null||c.call(window),e=await Ge(),s()}catch{D("เกิดข้อผิดพลาด","error"),t.disabled=!1,t.textContent=p?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),r.querySelectorAll(".reject-btn").forEach(t=>{t.addEventListener("click",()=>{Ql(parseInt(t.dataset.id),async p=>{var w;await Lt(parseInt(t.dataset.id),"rejected",p),D("ปฏิเสธแล้ว","info"),(w=window._refreshPaymentBadge)==null||w.call(window),e=await Ge(),s()})})}),r.querySelectorAll(".view-slip-btn").forEach(t=>{t.addEventListener("click",()=>Kl(t.dataset.url))})};try{e=await Ge(),s()}catch{D("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(r=>{r.addEventListener("click",()=>{a=r.dataset.filter,document.querySelectorAll(".pay-tab").forEach(u=>{u.classList.toggle("border-indigo-600",u===r),u.classList.toggle("text-indigo-600",u===r),u.classList.toggle("border-transparent",u!==r),u.classList.toggle("text-gray-400",u!==r)}),s()})}),(l=document.getElementById("pay-refresh"))==null||l.addEventListener("click",async()=>{e=await Ge(),s(),D("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",r=>{if(!r.target.classList.contains("pay-cb"))return;const u=document.querySelectorAll(".pay-cb:checked"),h=document.getElementById("pay-bulk-approve");u.length>0?(h.classList.remove("hidden"),h.textContent=`✅ อนุมัติ ${u.length} คน`):h.classList.add("hidden")});const n=async r=>{var h,t;let u=0;for(const p of r)try{await Lt(parseInt(p.id),"approved"),await Kt(parseInt(p.teacher),p.pkg),u++}catch{}D(`อนุมัติ ${u}/${r.length} รายการ ✅`,"success"),(h=window._refreshPaymentBadge)==null||h.call(window),e=await Ge(),s(),(t=document.getElementById("pay-bulk-approve"))==null||t.classList.add("hidden")};(o=document.getElementById("pay-bulk-approve"))==null||o.addEventListener("click",async()=>{const r=[...document.querySelectorAll(".pay-cb:checked")];r.length&&confirm(`อนุมัติ ${r.length} คนที่เลือก?`)&&await n(r.map(u=>({id:u.dataset.id,teacher:u.dataset.teacher,pkg:u.dataset.pkg})))}),(b=document.getElementById("pay-approve-all"))==null||b.addEventListener("click",async()=>{const r=e.filter(u=>u.status==="pending");if(!r.length){D("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${r.length} รายการ?`)&&await n(r.map(u=>{var h;return{id:u.id,teacher:(h=u.teachers)==null?void 0:h.id,pkg:u.package_type}}))})}async function Kl(e){const a=document.createElement("div");a.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",a.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${J(e)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(a),a.querySelector("button").addEventListener("click",()=>a.remove()),a.addEventListener("click",r=>{r.target===a&&a.remove()});const s=a.querySelector("#slip-viewer"),n=a.querySelector("#slip-download"),l=await Hn(e),o=J(l),b=String(l).split("?")[0].toLowerCase().endsWith(".pdf");n&&(n.href=l),s&&(s.innerHTML=b?`<iframe src="${o}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${o}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`)}function Ql(e,a){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`,document.body.appendChild(s),s.querySelector("#rj-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#rj-confirm").addEventListener("click",async()=>{const n=s.querySelector("#reject-note").value.trim()||null;s.remove(),await a(n)})}async function zs(){ve("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const e=await qe().catch(()=>({})),a=parseInt(e.academicYear??2568),s=parseInt(e.semester??1),n=async()=>{const o=await Gr(a,s,"สามัญ").catch(()=>[]);l(o)},l=o=>{var v;const b=C=>`
      <tr class="hover:bg-gray-50 transition lsk-row" data-id="${C.id}">
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${C.name}</td>
        <td class="px-4 py-3 text-center text-sm text-gray-600">${C.max_score}</td>
        <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${C.sheet_col??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-400">${C.sort_order}</td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <button class="lsk-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${C.id}">แก้ไข</button>
          <button class="lsk-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${C.id}" data-name="${C.name}">ลบ</button>
        </td>
      </tr>`,r=C=>C.length?`<table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th>
              <th class="px-4 py-3 text-center">คะแนนเต็ม</th>
              <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th>
              <th class="px-4 py-3 text-center">ลำดับ</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">${C.map(b).join("")}</tbody>
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',u=C=>C.replace("SheetId","SheetTab"),h=C=>C.replace("SheetId","StudentRange"),t=(C,m)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${m})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${C}" value="${e[C]??""}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${C}" value="${e[u(C)]??""}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${C}" value="${e[h(C)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${C}" data-tab-key="${u(C)}" data-range-key="${h(C)}">บันทึก</button>
        </div>
      </div>`;ye(`<div class="max-w-5xl mx-auto animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${s} / ${a}</p>
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
    </div>`);const p=[...o];(v=document.getElementById("btn-fill-ls-classes"))==null||v.addEventListener("click",async()=>{if(!confirm("ยืนยันซ่อมคะแนนรายวิชาทักษะชีวิตในภาคเรียนนี้ให้ตรงกับส่วนกลาง? คะแนนที่ล้างในส่วนกลางจะถูกล้างในรายวิชาด้วย"))return;const C=document.getElementById("btn-fill-ls-classes"),m=C.textContent;C.disabled=!0,C.textContent="กำลังเติม...";try{const y=await tn(a,s);D(`เติมทักษะชีวิต ${y.classes} รายวิชา / ${y.scores} คะแนนแล้ว`,"success")}catch(y){D("เติมไม่สำเร็จ: "+me(y),"error")}finally{C.disabled=!1,C.textContent=m}});const w=async()=>{var I;document.getElementById("lsk-tab-actions").innerHTML=`
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
        </div>`;const[{columns:C,scores:m},y]=await Promise.all([ln(a,s).catch(()=>({columns:[],scores:[]})),ut().catch(()=>[])]),H=(C??[]).filter(i=>i.category==="สามัญ"),_={};for(const i of m)_[i.student_id]||(_[i.student_id]={}),_[i.student_id][i.column_id]=i.score;const A=y.filter(i=>(i==null?void 0:i.id)&&(i==null?void 0:i.student_code)&&(i==null?void 0:i.main_room)).sort((i,$)=>(i.main_room??"").localeCompare($.main_room??"",void 0,{numeric:!0})||(i.student_code??"").localeCompare($.student_code??"")),q=document.getElementById("lsk-filter-grade"),j=document.getElementById("lsk-filter-room");q.innerHTML='<option value="">ทุกระดับชั้น</option>'+He(A.map(i=>Ye(i.main_room))).map(i=>`<option value="${i}">${i}</option>`).join("");const B=()=>{const i=q.value,$=j.value,x=He(A.filter(S=>!i||Ye(S.main_room)===i).map(S=>at(S.main_room)));j.innerHTML='<option value="">ทุกห้อง</option>'+x.map(S=>`<option value="${S}" ${S===$?"selected":""}>ห้อง ${S}</option>`).join(""),$&&!x.includes($)&&(j.value="")},g=i=>{if(document.getElementById("lsk-filter-count").textContent=`${i.length} คน`,!i.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${H.map($=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${$.name}<br><span class="font-normal text-gray-400">(${$.max_score})</span></th>`).join("")}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${i.map(($,x)=>{const S=H.reduce((k,E)=>{var T;return k+(((T=_[$.id])==null?void 0:T[E.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${x+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${$.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${$.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${$.main_room??"—"}</td>
                  ${H.map(k=>{var T;const E=(T=_[$.id])==null?void 0:T[k.id];return`<td class="px-2 py-2 text-center ${E!=null?"text-gray-800 font-medium":"text-gray-300"}">${E??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${S||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};B();let d=[...A];g(d);const f=()=>{B();const i=q.value,$=j.value,x=document.getElementById("lsk-filter-search").value.toLowerCase();d=A.filter(S=>{var k,E;return(!i||Ye(S.main_room)===i)&&(!$||at(S.main_room)===$)&&(!x||((k=S.full_name)==null?void 0:k.toLowerCase().includes(x))||((E=S.student_code)==null?void 0:E.includes(x)))}),g(d)};q.addEventListener("change",f),j.addEventListener("change",f),document.getElementById("lsk-filter-search").addEventListener("input",f),(I=document.getElementById("btn-sync-ls"))==null||I.addEventListener("click",async()=>{const i=document.getElementById("btn-sync-ls");i.disabled=!0,i.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:$}=await he(async()=>{const{syncCentralBatch:M}=await import("./sync-Bgbsg-ec.js");return{syncCentralBatch:M}},__vite__mapDeps([13,7,4]));if(!H.length){D("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!e.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const x=d.map(M=>({id:M.id,student_code:M.student_code})),S=new Set(x.map(M=>M.id)),k=new Set(H.map(M=>M.id)),E=m.filter(M=>S.has(M.student_id)&&k.has(M.column_id)),T=await $(e.lifeSkillSheetIdSamai,e.lifeSkillSheetTabSamai,H,E,x,{studentColRange:e.lifeSkillStudentRangeSamai||"J8:J3000"});if(!T){D("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}D(`ส่งคำสั่ง Sync ทักษะชีวิต ${x.length} คน / ${T} คะแนนแล้ว`,"success")}catch($){D("Sync ไม่สำเร็จ: "+me($),"error")}finally{i.disabled=!1,i.textContent="↑ Sync ไปชีทกลาง"}})},c=()=>{document.getElementById("lsk-tab-actions").innerHTML=`
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`,document.getElementById("lsk-tab-content").innerHTML=`<div class="space-y-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${o.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${r(o)}</div>
          ${t("lifeSkillSheetIdSamai","สามัญ")}
        </div>
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>Ka(null,a,s,n)),document.querySelectorAll(".lsk-edit").forEach(C=>{C.addEventListener("click",()=>{const m=p.find(y=>y.id===+C.dataset.id);m&&Ka(m,a,s,n)})}),document.querySelectorAll(".lsk-del").forEach(C=>{C.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${C.dataset.name}"?`))try{await dn(+C.dataset.id),D("ลบแล้ว","success"),n()}catch(m){D("ลบไม่สำเร็จ: "+me(m),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach(C=>{C.addEventListener("click",async()=>{var B,g,d;const m=C.dataset.key,y=C.dataset.tabKey,H=C.dataset.rangeKey,_=((B=document.getElementById(`lsk-sheet-${m}`))==null?void 0:B.value.trim())??"",A=((g=document.getElementById(`lsk-tab-${m}`))==null?void 0:g.value.trim())??"",q=((d=document.getElementById(`lsk-range-${m}`))==null?void 0:d.value.trim())??"J8:J3000",j=C.textContent;C.disabled=!0,C.textContent="⏳";try{await Promise.all([_e(m,_),_e(y,A),_e(H,q)]),e[m]=_,e[y]=A,e[H]=q,C.textContent="✅",C.style.background="#16a34a",setTimeout(()=>{C.disabled=!1,C.textContent=j,C.style.background=""},1500),D("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{D("บันทึกไม่สำเร็จ","error"),C.disabled=!1,C.textContent=j}})})},L=C=>{document.querySelectorAll("[data-tab]").forEach(m=>{const y=m.dataset.tab===C;m.className=y?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),C==="scores"?w():c()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>L("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>L("config")),L("scores")};n()}function Ka(e,a,s,n){var b;(b=document.getElementById("lsk-modal"))==null||b.remove();const l=!!e,o=document.createElement("div");o.id="lsk-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#lsk-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#lsk-form").addEventListener("submit",async r=>{r.preventDefault();const u=o.querySelector("#lsk-save");u.disabled=!0,u.textContent="กำลังบันทึก...";try{const h={name:o.querySelector("#lsk-name").value.trim(),max_score:parseInt(o.querySelector("#lsk-max").value)||20,sort_order:parseInt(o.querySelector("#lsk-order").value)||0,sheet_col:o.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:a,semester:s};l?await gn(e.id,h):await bn(h),D("บันทึกสำเร็จ","success"),o.remove(),n()}catch(h){D("บันทึกไม่สำเร็จ: "+me(h),"error"),u.disabled=!1,u.textContent=l?"บันทึก":"เพิ่ม"}})}const Jl=e=>{const a=ds(e);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${a.cls}">${a.label}</span>`};async function Fs(){ve("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const e=await qe().catch(()=>({})),a=parseInt(e.academicYear??2568),s=parseInt(e.semester??1);Na(e);const n=t=>`
    <tr class="hover:bg-gray-50 transition" data-id="${t.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${t.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${t.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${t.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${t.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${t.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${t.id}" data-name="${t.name}">ลบ</button>
      </td>
    </tr>`;let l=[];const o=async()=>{var p;l=await Wr(a,s).catch(()=>[]),b();const t=((p=document.querySelector("[data-tab].bg-white"))==null?void 0:p.dataset.tab)??"scores";h(t)},b=()=>{ye(`<div class="max-w-5xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${s} / ${a}</p>
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
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>h("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>h("config"))},r=async()=>{var A,q;document.getElementById("rsa-tab-actions").innerHTML=`
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
      </div>`;const[{columns:t,scores:p},w]=await Promise.all([rn(a,s).catch(()=>({columns:[],scores:[]})),ut().catch(()=>[])]),c={};for(const j of p)c[j.student_id]||(c[j.student_id]={}),c[j.student_id][j.column_id]=j.score;const L=w.filter(j=>(j==null?void 0:j.id)&&(j==null?void 0:j.student_code)&&(j==null?void 0:j.main_room)).sort((j,B)=>(j.main_room??"").localeCompare(B.main_room??"",void 0,{numeric:!0})||(j.student_code??"").localeCompare(B.student_code??"")),v=document.getElementById("rsa-filter-grade"),C=document.getElementById("rsa-filter-room");v.innerHTML='<option value="">ทุกระดับชั้น</option>'+He(L.map(j=>Ye(j.main_room))).map(j=>`<option value="${j}">${j}</option>`).join("");const m=()=>{const j=v.value,B=C.value,g=He(L.filter(d=>!j||Ye(d.main_room)===j).map(d=>at(d.main_room)));C.innerHTML='<option value="">ทุกห้อง</option>'+g.map(d=>`<option value="${d}" ${d===B?"selected":""}>ห้อง ${d}</option>`).join(""),B&&!g.includes(B)&&(C.value="")},y=j=>{if(document.getElementById("rsa-filter-count").textContent=`${j.length} คน`,!j.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${t.map(B=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${B.name}<br><span class="font-normal text-gray-400">(${B.max_score})</span></th>`).join("")}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${j.map((B,g)=>{const d=t.reduce((i,$)=>{var x;return i+(((x=c[B.id])==null?void 0:x[$.id])??0)},0),f=d/2,I=d>0?Jl(f):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${g+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${B.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${B.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${B.main_room??"—"}</td>
                ${t.map(i=>{var x;const $=(x=c[B.id])==null?void 0:x[i.id];return`<td class="px-2 py-2 text-center ${$!=null?"text-gray-800 font-medium":"text-gray-300"}">${$??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${d||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${d>0?f.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${I}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};m();let H=[...L];y(H);const _=()=>{m();const j=v.value,B=C.value,g=document.getElementById("rsa-filter-search").value.toLowerCase();H=L.filter(d=>{var f,I;return(!j||Ye(d.main_room)===j)&&(!B||at(d.main_room)===B)&&(!g||((f=d.full_name)==null?void 0:f.toLowerCase().includes(g))||((I=d.student_code)==null?void 0:I.includes(g)))}),y(H)};v.addEventListener("change",_),C.addEventListener("change",_),document.getElementById("rsa-filter-search").addEventListener("input",_),(A=document.getElementById("btn-sync-rs"))==null||A.addEventListener("click",async()=>{const j=document.getElementById("btn-sync-rs");if(!e.readingScoreSheetId){D("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}j.disabled=!0,j.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:B}=await he(async()=>{const{syncCentralBatch:$}=await import("./sync-Bgbsg-ec.js");return{syncCentralBatch:$}},__vite__mapDeps([13,7,4])),g=H.map($=>({id:$.id,student_code:$.student_code})),d=new Set(g.map($=>$.id)),f=new Set(t.map($=>$.id)),I=p.filter($=>d.has($.student_id)&&f.has($.column_id)),i=await B(e.readingScoreSheetId,e.readingScoreSheetTab,t,I,g,{studentColRange:e.readingScoreStudentRange||"J8:J3000"});if(!i){D("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}D(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${g.length} คน / ${i} คะแนนแล้ว`,"success")}catch(B){D("Sync ไม่สำเร็จ: "+me(B),"error")}finally{j.disabled=!1,j.textContent="↑ Sync ไปชีทกลาง"}}),(q=document.getElementById("btn-fill-reading-eval"))==null||q.addEventListener("click",async()=>{const j=document.getElementById("btn-fill-reading-eval");if(!e.readingEvalClassSheetCol){D("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}j.disabled=!0,j.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:B}=await he(async()=>{const{syncReadingEvalToClassSheets:I}=await import("./sync-Bgbsg-ec.js");return{syncReadingEvalToClassSheets:I}},__vite__mapDeps([13,7,4])),{getAllClassesForFill:g}=await he(async()=>{const{getAllClassesForFill:I}=await import("./api-J-Ak1T-Y.js");return{getAllClassesForFill:I}},__vite__mapDeps([0,1,2,3,4])),d={};for(const I of L){const i=t.reduce(($,x)=>{var S;return $+(((S=c[I.id])==null?void 0:S[x.id])??0)},0);if(i>0){const $=i/2;d[I.id]={label:ds($).label,score100:$}}}const f=await g();await B(f,d,e.readingEvalClassSheetCol),D(`ป้อนผลประเมินอ่านฯ ไป ${f.length} ห้องสำเร็จ`,"success")}catch(B){D("ป้อนไม่สำเร็จ: "+me(B),"error")}finally{j.disabled=!1,j.textContent="📝 ป้อนผล → ทุกวิชา"}})},u=()=>{var p,w,c;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const t=l.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${l.map(n).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${l.length} หัวข้อ · รวม ${l.reduce((L,v)=>L+v.max_score,0)} คะแนน</span>
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
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${ot.map(L=>L.label).join("/")})</span>
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
          ${ot.map((L,v)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${v}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${v+1}:</span>
              <input type="text" data-rsa-label value="${Oe(L.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${L.min}" min="0" max="100" ${v===ot.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${v===ot.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${v===ot.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>Xa(null,a,s,o)),document.querySelectorAll(".rsa-edit").forEach(L=>{L.addEventListener("click",()=>{const v=l.find(C=>C.id===+L.dataset.id);v&&Xa(v,a,s,o)})}),document.querySelectorAll(".rsa-del").forEach(L=>{L.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${L.dataset.name}"?`))try{await nn(+L.dataset.id),D("ลบแล้ว","success"),o()}catch(v){D("ลบไม่สำเร็จ: "+me(v),"error")}})}),(p=document.getElementById("rsa-save-sheet"))==null||p.addEventListener("click",async()=>{var y,H,_;const L=document.getElementById("rsa-save-sheet"),v=((y=document.getElementById("rsa-sheet-id"))==null?void 0:y.value.trim())??"",C=((H=document.getElementById("rsa-sheet-tab"))==null?void 0:H.value.trim())??"",m=((_=document.getElementById("rsa-student-range"))==null?void 0:_.value.trim())??"J8:J3000";L.disabled=!0,L.textContent="⏳";try{await Promise.all([_e("readingScoreSheetId",v),_e("readingScoreSheetTab",C),_e("readingScoreStudentRange",m)]),e.readingScoreSheetId=v,e.readingScoreSheetTab=C,e.readingScoreStudentRange=m,L.textContent="✅",L.style.background="#16a34a",setTimeout(()=>{L.disabled=!1,L.textContent="บันทึก",L.style.background=""},1500),D("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{D("บันทึกไม่สำเร็จ","error"),L.disabled=!1,L.textContent="บันทึก"}}),(w=document.getElementById("rsa-save-eval-col"))==null||w.addEventListener("click",async()=>{var C;const L=document.getElementById("rsa-save-eval-col"),v=(((C=document.getElementById("rsa-eval-col"))==null?void 0:C.value.trim())??"").toUpperCase();L.disabled=!0,L.textContent="⏳";try{await _e("readingEvalClassSheetCol",v),e.readingEvalClassSheetCol=v,L.textContent="✅",L.style.background="#16a34a",setTimeout(()=>{L.disabled=!1,L.textContent="บันทึก",L.style.background=""},1500),D("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{D("บันทึกไม่สำเร็จ","error"),L.disabled=!1,L.textContent="บันทึก"}}),(c=document.getElementById("rsa-save-grades"))==null||c.addEventListener("click",async()=>{const L=document.getElementById("rsa-save-grades"),v=document.getElementById("rsa-grades-err");v.textContent="";const C=[...document.querySelectorAll("[data-rsa-grade-row]")].map((m,y)=>({label:m.querySelector("[data-rsa-label]").value.trim(),min:y===ot.length-1?0:parseFloat(m.querySelector("[data-rsa-min]").value)}));if(C.some(m=>!m.label)){v.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if(C.some(m=>Number.isNaN(m.min)||m.min<0||m.min>100)){v.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let m=0;m<C.length-1;m++)if(C[m].min<=C[m+1].min){v.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}L.disabled=!0,L.textContent="⏳";try{await _e("readingEvalThresholds",JSON.stringify(C)),Na({readingEvalThresholds:JSON.stringify(C)}),L.textContent="✅",L.style.background="#16a34a",setTimeout(()=>{L.disabled=!1,L.textContent="บันทึกเกณฑ์",L.style.background=""},1500),D("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(m){D("บันทึกไม่สำเร็จ: "+me(m),"error"),L.disabled=!1,L.textContent="บันทึกเกณฑ์"}})},h=t=>{document.querySelectorAll("[data-tab]").forEach(p=>{p.className=p.dataset.tab===t?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),t==="scores"?r():u()};o()}const Je={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function _t(e,a){var o;(o=document.getElementById("admin-picker"))==null||o.remove();const s=document.createElement("div");s.id="admin-picker",s.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const n=(e.target.closest("td,th,button")??e.target).getBoundingClientRect();s.style.top=Math.min(n.bottom+4,window.innerHeight-60)+"px",s.style.left=Math.max(4,Math.min(n.left,window.innerWidth-220))+"px";const l=document.createElement("button");l.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",l.textContent="✕ ล้าง",l.onclick=()=>{s.remove(),a(null)},s.appendChild(l),Object.entries(Je).forEach(([b,r])=>{const u=document.createElement("button");u.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${r.bg} ${r.color} hover:opacity-80 transition`,u.textContent=r.label,u.title=r.fullLabel,u.onclick=()=>{s.remove(),a(b)},s.appendChild(u)}),document.body.appendChild(s),setTimeout(()=>document.addEventListener("click",()=>s.remove(),{once:!0}),50)}const Qa=["อา","จ","อ","พ","พฤ","ศ","ส"];function Xl(e,a){const s=[],n=new Date(e),l=new Date(a),o=n.getDay()%7;o&&n.setDate(n.getDate()-o);let b=new Date(n),r=1;for(;b<=l;){const u=[];for(let h=0;h<5;h++){const t=new Date(b);t.setDate(t.getDate()+h),t<=l&&u.push({date:new Date(t),ds:t.toISOString().slice(0,10)})}u.length&&(s.push({n:r,days:u}),r++),b.setDate(b.getDate()+7)}return s}function Ja(e,a){const s=a.reduce((l,o)=>{var b;return l+(((b=Je[e[o.ds]])==null?void 0:b.score)??0)},0),n=a.length*2;return n>0?Math.min(10,Math.max(0,Math.round(s/n*100)/10)):0}function It(e){return`${e.getDate()}/${e.getMonth()+1}`}async function Us(e){var L,v,C,m;ve("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let a=null,s=e;if(!s)try{const{data:y}=await se.auth.getSession(),H=((v=(L=y==null?void 0:y.session)==null?void 0:L.user)==null?void 0:v.id)??null;if(H){const{data:_}=await se.from("teachers").select("*").eq("profile_id",H).maybeSingle();s=_??null}}catch(y){console.error("Failed to load teacher session:",y)}const[n,l]=await Promise.all([qe().catch(()=>({})),rs().catch(()=>[])]),o=l,b=(n.prayerScannerTeachers||"").split(/[\s,]+/).map(y=>y.trim()).filter(Boolean);let r=!1;if(s){const{data:y}=await se.from("profiles").select("role").eq("id",s.profile_id).maybeSingle();r=b.includes(s.teacher_code)||s.staff_type==="แอดมิน"||s.position==="admin"||(y==null?void 0:y.role)==="admin"}ye(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const u=()=>{var z;const y=n.semester_start,H=n.semester_end,_=y&&H?Xl(y,H):[],A=_.flatMap(P=>P.days);if(document.getElementById("pr-tab-actions").innerHTML=`
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
      </div>`,(z=document.getElementById("btn-fill-prayer-classes"))==null||z.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const P=document.getElementById("btn-fill-prayer-classes"),F=P.textContent;P.disabled=!0,P.textContent="กำลังเติม...";try{const W=await an({semesterStart:n.semester_start,semesterEnd:n.semester_end,attendanceScoreMode:n.attendanceScoreMode??"recorded"});D(`เติมรายวิชาศาสนา ${W.classes} รายวิชา / ${W.scores} คะแนนแล้ว`,"success")}catch(W){D("เติมไม่สำเร็จ: "+me(W),"error")}finally{P.disabled=!1,P.textContent=F}}),document.getElementById("pr-tab-content").innerHTML=`
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
              ${o.map(P=>`<button type="button" data-room="${P}"
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
          ${Object.values(Je).map(P=>`<span class="px-1.5 py-0.5 ${P.bg} ${P.color} rounded cursor-default">${P.label}=${P.fullLabel??""}</span>`).join("")}
        </div>
      </div>
      ${!y||!H?`<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`:`<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`,!y||!H)return;const q="border border-gray-200 text-center text-xs select-none",j="sticky left-0 z-20 bg-white border border-gray-200",B="sticky z-20 bg-white border border-gray-200",g=P=>P>=8?"text-emerald-600":P>=6?"text-amber-500":"text-red-600",d=30,f=160,I={};let i=[],$=[];const x=(P,F=!0)=>{P&&(P.style.outline=`2px solid ${F?"#059669":"#ef4444"}`,P.style.outlineOffset="1px",setTimeout(()=>{P.style.outline="",P.style.outlineOffset=""},700))},S=async(P,F,W,R)=>{var Y;I[P]||(I[P]={}),R===null?delete I[P][F]:I[P][F]=R;const V=document.querySelector(`.pr-cell[data-sid="${P}"][data-date="${F}"]`);if(V){const te=R?Je[R]:null;Object.values(Je).forEach(re=>V.classList.remove(re.bg)),te?(V.classList.add(te.bg),V.innerHTML=`<span class="${te.color} text-xs">${te.label}</span>`):V.innerHTML=""}E(P);const G=document.querySelector(`.adm-cell[data-sid="${P}"][data-date="${F}"]`);if(G){const te=R?Je[R]:null;G.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${te?te.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,G.innerHTML=te?`<span class="${te.color}">${te.label}</span>`:'<span class="text-gray-200">·</span>'}try{const te=((Y=_.find(re=>re.days.some(Z=>Z.ds===F)))==null?void 0:Y.n)??null;await Wn(P,W,F,R,te,"แอดมิน"),x(V,!0),x(G,!0)}catch(te){console.error("[prayer save]",te),x(V,!1),x(G,!1),D("บันทึกไม่สำเร็จ: "+me(te),"error")}},k=async(P,F)=>{const R=(await Promise.allSettled(P.map(([V,G,Y])=>S(V,G,F,Y)))).filter(V=>V.status==="rejected").length;R>0&&D(`บันทึกไม่สำเร็จ ${R} รายการ`,"error")},E=P=>{const F=I[P]??{},W=Ja(F,A),R=document.getElementById(`pr-sc-${P}`);R&&(R.textContent=W,R.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${g(W)} text-xs`)},T=(P,F)=>{if(document.getElementById("pr-filter-count").textContent=`${P.length} คน · ${A.length} วัน`,!P.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${j} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${B} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${B} bg-gray-50 text-left px-2" style="left:96px;min-width:${f}px">ชื่อ-นามสกุล</th>
              ${_.map(W=>`<th colspan="${W.days.length}"
                class="${q} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${W.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${W.n}">
                Week${W.n} ✎</th>`).join("")}
              <th class="${q} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${j} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${B} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${B} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${f}px">ชื่อ</th>
              ${_.flatMap(W=>W.days.map(R=>`<th class="${q} bg-gray-100 text-gray-400 font-normal"
                style="width:${d}px;min-width:${d}px;font-size:9px">
                ${Qa[R.date.getDay()]}<br/>${It(R.date)}</th>`)).join("")}
              <th class="${q} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${P.map((W,R)=>{const V=I[W.id]??{},G=Ja(V,A);return`<tr class="hover:bg-gray-50/60" data-sid="${W.id}">
                <td class="${j} text-center text-gray-400" style="width:28px">${R+1}</td>
                <td class="${B} text-center font-mono text-gray-600" style="left:28px;width:68px">${W.student_code??"—"}</td>
                <td class="${B} px-2" style="left:96px;min-width:${f}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${W.image_url?`<img src="${W.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${W.full_name??"—"}</span>
                  </div>
                </td>
                ${_.flatMap(Y=>Y.days.map(te=>{const re=V[te.ds]??null,Z=re?Je[re]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${Z?Z.bg:""}"
                    data-sid="${W.id}" data-date="${te.ds}" data-room="${F}"
                    style="width:${d}px;min-width:${d}px;height:28px">
                    ${Z?`<span class="${Z.color} text-xs">${Z.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${g(G)} text-xs"
                  id="pr-sc-${W.id}" style="min-width:48px">${G}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",W=>{const R=W.target.closest(".pr-week-th");if(!R)return;const V=+R.dataset.week,G=_.find(Y=>Y.n===V);G&&U(G,i,N)}),document.getElementById("pr-grid-wrap").addEventListener("click",W=>{const R=W.target.closest(".pr-cell");if(!R)return;W.stopPropagation();const V=+R.dataset.sid,G=R.dataset.date,Y=R.dataset.room;_t(W,te=>S(V,G,Y,te))})},M=async(P,F="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[W,R]=await Promise.all([un(P),mn(P,y,H)]);i=W,Object.keys(I).forEach(G=>delete I[G]);for(const G of i)I[G.id]={};for(const G of R)I[G.student_id]||(I[G.student_id]={}),I[G.student_id][G.check_date]=G.status;$=A.map(G=>G.ds);const V=F?i.filter(G=>{var Y,te;return((Y=G.full_name)==null?void 0:Y.toLowerCase().includes(F))||((te=G.student_code)==null?void 0:te.includes(F))}):i;T(V,P)}catch(W){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${W.message}</div>`}};let N=o[0]??"";const O=P=>{N=P,document.getElementById("pr-room-label").textContent=P,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(W=>{const R=W.dataset.room===P;W.classList.toggle("bg-indigo-50",R),W.classList.toggle("font-semibold",R),W.classList.toggle("text-indigo-700",R)});const F=document.getElementById("pr-filter-search").value.toLowerCase();M(P,F)};document.getElementById("pr-room-btn").addEventListener("click",P=>{P.stopPropagation();const F=document.getElementById("pr-room-dropdown");F.classList.toggle("hidden"),F.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",P=>{const F=P.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(W=>{W.style.display=W.dataset.room.toLowerCase().includes(F)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",P=>{const F=P.target.closest(".pr-room-item");F&&O(F.dataset.room)}),document.addEventListener("click",()=>{var P;(P=document.getElementById("pr-room-dropdown"))==null||P.classList.add("hidden")},{capture:!0,once:!1}),N&&O(N),document.getElementById("pr-filter-search").addEventListener("input",P=>{const F=P.target.value.toLowerCase();if(!i.length)return;const W=F?i.filter(R=>{var V,G;return((V=R.full_name)==null?void 0:V.toLowerCase().includes(F))||((G=R.student_code)==null?void 0:G.includes(F))}):i;T(W,N)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-prayer");if(!n.prayerSheetId){D("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const F=Object.values(I).flatMap(R=>Object.keys(R)),W=[...new Set([...$,...F])].sort();if(!W.length){D("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.disabled=!0,P.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:R}=await he(async()=>{const{syncPrayerSheet:G}=await import("./sync-Bgbsg-ec.js");return{syncPrayerSheet:G}},__vite__mapDeps([13,7,4])),V=i.map(G=>({id:G.id,student_code:G.student_code}));await R(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",W,I,V),D(`Sync ละหมาด ${V.length} คน × ${W.length} วัน สำเร็จ`,"success")}catch(R){D("Sync ไม่สำเร็จ: "+me(R),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-all-prayer");if(!n.prayerSheetId){D("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}P.disabled=!0,P.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:F}=await he(async()=>{const{syncPrayerSheet:ne}=await import("./sync-Bgbsg-ec.js");return{syncPrayerSheet:ne}},__vite__mapDeps([13,7,4])),{getAllPrayerRecords:W,getStudents:R}=await he(async()=>{const{getAllPrayerRecords:ne,getStudents:ke}=await import("./api-J-Ak1T-Y.js");return{getAllPrayerRecords:ne,getStudents:ke}},__vite__mapDeps([0,1,2,3,4])),[V,G]=await Promise.all([W(),R()]),Y={};for(const ne of V)Y[ne.student_id]||(Y[ne.student_id]={}),Y[ne.student_id][ne.check_date]=ne.status;const re=G.filter(ne=>ne.religion_room).map(ne=>({id:ne.id,student_code:ne.student_code})),Z=[...new Set(V.map(ne=>ne.check_date))].sort(),ce=[...new Set([...$,...Z])].sort();if(!ce.length||!re.length){D("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.textContent=`⏳ Sync ${re.length} คน × ${ce.length} วัน...`,await F(n.prayerSheetId,n.prayerSheetTab||"Solat",n.prayerStudentRange||"A3:A3000",ce,Y,re),D(`✅ Sync ทุกห้อง ${re.length} คน × ${ce.length} วัน สำเร็จ`,"success")}catch(F){D("Sync ไม่สำเร็จ: "+me(F),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ทุกห้อง"}});const U=(P,F,W)=>{var Y;(Y=document.getElementById("admin-prayer-modal"))==null||Y.remove();const R=document.createElement("div");R.id="admin-prayer-modal",R.className="fixed inset-0 z-[80] flex flex-col bg-white";const V=`${It(P.days[0].date)}–${It(P.days[P.days.length-1].date)}`,G=(te,re)=>{var ne;const Z=((ne=I[te])==null?void 0:ne[re])??null,ce=Z?Je[Z]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${ce?ce.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${te}" data-date="${re}" data-room="${W}">
          ${ce?`<span class="${ce.color}">${ce.label}</span>`:'<span class="text-gray-200">·</span>'}
        </button>`};R.innerHTML=`
        <div class="bg-emerald-700 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button id="adm-modal-close" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${P.n}</p>
            <p class="text-xs text-emerald-200">${V} · ${W}</p>
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
                ${P.days.map(te=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${Qa[te.date.getDay()]} ${It(te.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${te.ds}" data-room="${W}">AllDay</button>
                  </th>`).join("")}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${F.map(te=>`
                <tr class="hover:bg-gray-50/50" data-sid="${te.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${te.image_url?`<img src="${te.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-xs">👤</div>'}
                      <span class="text-gray-800 truncate max-w-[120px]">${te.full_name??"—"}</span>
                    </div>
                  </td>
                  ${P.days.map(re=>`<td class="px-2 py-2 text-center">${G(te.id,re.ds)}</td>`).join("")}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${te.id}" data-room="${W}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`,document.body.appendChild(R),R.querySelector("#adm-modal-body").addEventListener("click",te=>{const re=te.target.closest(".adm-cell");if(!re)return;te.stopPropagation();const Z=+re.dataset.sid,ce=re.dataset.date;_t(te,ne=>S(Z,ce,W,ne))}),R.querySelectorAll(".adm-day-all").forEach(te=>{te.addEventListener("click",re=>{re.stopPropagation();const Z=te.dataset.date;_t(re,ce=>k(F.map(ne=>[ne.id,Z,ce]),W))})}),R.querySelectorAll(".adm-row-all").forEach(te=>{te.addEventListener("click",re=>{re.stopPropagation();const Z=+te.dataset.sid;_t(re,ce=>k(P.days.map(ne=>[Z,ne.ds,ce]),W))})}),R.querySelector("#adm-all-check").addEventListener("click",te=>{te.stopPropagation(),_t(te,re=>k(F.flatMap(Z=>P.days.map(ce=>[Z.id,ce.ds,re])),W))}),R.querySelector("#adm-modal-close").addEventListener("click",()=>R.remove())}},h=()=>{document.getElementById("pr-tab-actions").innerHTML="",a&&(clearInterval(a),a=null);const y=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Filters panel -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
          <h3 class="font-bold text-gray-800 text-sm flex items-center gap-1.5">
            🔍 คัดกรองข้อมูล
          </h3>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">เลือกวันที่สแกน</label>
            <input type="date" id="hist-date-input" value="${y}"
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
    `;let H=[],_="",A=!1;const q=1e3,j=i=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[i]||"ไม่ระบุพื้นที่",B=i=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[i]||"bg-gray-50 text-gray-500 border-gray-100",g=async i=>{const $=[];for(let x=0;;x+=q){const{data:S,error:k}=await se.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",i).not("location","is",null).order("created_at",{ascending:!1}).range(x,x+q-1);if(k)throw k;if($.push(...S??[]),!S||S.length<q)break}return $},d=async()=>{var x;if(!document.getElementById("hist-table-body")){a&&(clearInterval(a),a=null);return}const $=((x=document.getElementById("hist-date-input"))==null?void 0:x.value)||y;if(!A){A=!0;try{H=await g($),f()}catch(S){console.error("Fetch history failed:",S);const k=document.getElementById("hist-table-body");k&&(k.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${S.message}</td></tr>`)}finally{A=!1}}},f=()=>{var R,V;const i=((R=document.getElementById("hist-loc-filter"))==null?void 0:R.value)||"",$=(((V=document.getElementById("hist-search-input"))==null?void 0:V.value)||"").trim().toLowerCase(),x=H.filter(G=>{var Y,te,re,Z;if(i&&G.location!==i||_&&(G.scanned_by||((Y=G.teachers)==null?void 0:Y.full_name)||"บันทึกมือ (เดิม)")!==_)return!1;if($){const ce=(((te=G.students)==null?void 0:te.full_name)||"").toLowerCase(),ne=(((re=G.students)==null?void 0:re.student_code)||"").toLowerCase(),ke=(G.main_room||"").toLowerCase(),Be=(G.scanned_by||((Z=G.teachers)==null?void 0:Z.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),De=G.input_method==="manual"?"กรอกรหัส manual":"qr";return ce.includes($)||ne.includes($)||ke.includes($)||Be.includes($)||De.includes($)}return!0}),S=x.length,k=x.filter(G=>G.status==="pray").length,E=x.filter(G=>G.status==="usor").length,T=S-k-E,M=document.getElementById("stat-hist-total"),N=document.getElementById("stat-hist-pray"),O=document.getElementById("stat-hist-usor"),U=document.getElementById("stat-hist-other");M&&(M.textContent=S),N&&(N.textContent=k),O&&(O.textContent=E),U&&(U.textContent=T);const z=new Set;H.forEach(G=>{var te;const Y=G.scanned_by||((te=G.teachers)==null?void 0:te.full_name);Y&&z.add(Y)});const P=document.getElementById("hist-operators-wrap");P&&(z.size===0?P.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(P.innerHTML=Array.from(z).map(G=>{const Y=_===G;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${G.includes("(ครู)")||G.includes("ครู")?Y?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":Y?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${G}">${Y?"✓ ":""}${G}</span>`}).join(""),P.querySelectorAll(".op-filter-chip").forEach(G=>{G.addEventListener("click",()=>{const Y=G.dataset.op;_=_===Y?"":Y,f()})})));const F=document.getElementById("hist-table-count");F&&(F.textContent=`${x.length} รายการ`);const W=document.getElementById("hist-table-body");if(W){if(x.length===0){W.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}W.innerHTML=x.map((G,Y)=>{var Ve;const te=G.created_at?new Date(G.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",re=G.students,Z=re!=null&&re.image_url?`<img src="${re.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((re==null?void 0:re.full_name)||"?").charAt(0)}</div>`,ce=re?`<div class="flex items-center gap-2.5">
              ${Z}
              <div>
                <p class="font-bold text-gray-800 leading-none">${re.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${re.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${G.student_id})</span>`,ne={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[G.status]||`<span class="text-gray-400">${G.status||"—"}</span>`,ke=G.scanned_by||((Ve=G.teachers)==null?void 0:Ve.full_name)||"บันทึกมือ (เดิม)",Be=G.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",De=G.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${x.length-Y}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${te}</td>
            <td class="px-4 py-3">${ce}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${G.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${B(G.location)}">
                ${j(G.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${ke}</span>
              <div class="flex flex-wrap gap-1">${Be}${De}</div>
            </td>
            <td class="px-4 py-3 text-center">${ne}</td>
          </tr>
        `}).join("")}},I=()=>{a&&(clearInterval(a),a=null);const i=document.getElementById("hist-live-toggle");i&&i.checked&&(a=setInterval(d,4e3))};setTimeout(()=>{var x,S,k;(x=document.getElementById("btn-hist-refresh"))==null||x.addEventListener("click",d),(S=document.getElementById("hist-date-input"))==null||S.addEventListener("change",()=>{_="",d()}),(k=document.getElementById("hist-loc-filter"))==null||k.addEventListener("change",f);const i=document.getElementById("hist-search-input");i&&i.addEventListener("input",f);const $=document.getElementById("hist-live-toggle");$&&$.addEventListener("change",I),d(),I()},50)},t=(y,H=!1)=>y==null||y===""?H:["1","true","yes","on"].includes(String(y).trim().toLowerCase()),p=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${o.map(y=>`<option value="${y}">${y}</option>`).join("")}
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
                ${t(n.prayerSameRoomGuardMaleEnabled,!0)?"checked":""} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนชายห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ถ้าเปิดไว้ แกนนำนักเรียนจะบันทึกเพื่อนห้องเดียวกันไม่ได้</span>
              </span>
            </label>
            <label class="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 cursor-pointer">
              <input id="pr-guard-female" type="checkbox" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ${t(n.prayerSameRoomGuardFemaleEnabled,!1)?"checked":""} />
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
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const y=document.getElementById("pr-save-cfg"),H=document.getElementById("pr-sheet-id").value.trim(),_=document.getElementById("pr-sheet-tab").value.trim()||"Solat",A=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";y.disabled=!0,y.textContent="⏳ กำลังบันทึก...";try{await Promise.all([_e("prayerSheetId",H),_e("prayerSheetTab",_),_e("prayerStudentRange",A)]),n.prayerSheetId=H,n.prayerSheetTab=_,n.prayerStudentRange=A,y.textContent="✅ บันทึกแล้ว",y.style.background="#16a34a",setTimeout(()=>{y.disabled=!1,y.textContent="บันทึกการตั้งค่า",y.style.background=""},1800),D("บันทึก Sheet config ละหมาดแล้ว","success")}catch{D("บันทึกไม่สำเร็จ","error"),y.disabled=!1,y.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var j,B,g;const y=document.getElementById("pr-save-scanner-safety"),H=(j=document.getElementById("pr-guard-male"))!=null&&j.checked?"true":"false",_=(B=document.getElementById("pr-guard-female"))!=null&&B.checked?"true":"false",A=parseInt(((g=document.getElementById("pr-manual-monthly-limit"))==null?void 0:g.value)||"2",10),q=String(Math.max(0,Math.min(31,Number.isFinite(A)?A:2)));y.disabled=!0,y.textContent="⏳ กำลังบันทึก...";try{await Promise.all([_e("prayerSameRoomGuardMaleEnabled",H),_e("prayerSameRoomGuardFemaleEnabled",_),_e("prayerManualEntryMonthlyLimit",q)]),n.prayerSameRoomGuardMaleEnabled=H,n.prayerSameRoomGuardFemaleEnabled=_,n.prayerManualEntryMonthlyLimit=q,D("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),y.textContent="✅ บันทึกแล้ว",setTimeout(()=>{y.disabled=!1,y.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(d){D("บันทึกไม่สำเร็จ: "+me(d),"error"),y.disabled=!1,y.textContent="บันทึกความปลอดภัยระบบสแกน"}})},w=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
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
    `;let y=[],H={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const _=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],A=d=>(d||"").split(/[\s,]+/).map(f=>f.trim()).filter(Boolean),q=d=>String(d||"").trim(),j=d=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[d]||"ทั้งหมด",B=async(d,f)=>{const I=await qe().catch(()=>({})),i=new Set(A(I.prayerExtendedScannerStudents));f?i.add(String(d)):i.delete(String(d));const $=Array.from(i).join(",");return await _e("prayerExtendedScannerStudents",$),n.prayerExtendedScannerStudents=$,$};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const d=document.getElementById("pr-save-scanner-time-cfg"),f=document.getElementById("pr-scan-start").value.trim()||"12:20",I=document.getElementById("pr-scan-end").value.trim()||"12:50",i=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![f,I,i].every(x=>/^\d{1,2}:\d{2}$/.test(x))){D("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}d.disabled=!0,d.textContent="⏳ กำลังบันทึก...";try{await Promise.all([_e("prayerScanStartTime",f),_e("prayerScanEndTime",I),_e("prayerScanExtendedEndTime",i)]),n.prayerScanStartTime=f,n.prayerScanEndTime=I,n.prayerScanExtendedEndTime=i,D("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),d.textContent="✅ บันทึกแล้ว",setTimeout(()=>{d.disabled=!1,d.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(x){D("บันทึกไม่สำเร็จ: "+me(x),"error"),d.disabled=!1,d.textContent="บันทึกช่วงเวลาสแกน"}});const g=async()=>{var f,I;const d=document.getElementById("scanners-list-wrap");if(d)try{const{data:i,error:$}=await se.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if($)throw $;const x=await qe().catch(()=>({})),S=i??[],k=A(x.prayerScannerTeachers),E=new Set(A(x.prayerExtendedScannerStudents));let T=[];if(k.length>0){const{data:Z,error:ce}=await se.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",k).order("teacher_code");if(ce)throw ce;T=Z??[]}const M=S.length+T.length;if(document.getElementById("scanner-count-badge").textContent=`${M} คน`,M===0){d.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const N=Object.fromEntries(_.map(Z=>[Z.key,new Set(A(x[`prayerScanner${Z.key}`]))])),O=S.map(Z=>{const ce=String(Z.student_code||"").trim(),ne=_.filter(Be=>{var De;return(De=N[Be.key])==null?void 0:De.has(ce)}).map(Be=>Be.key),ke=E.has(ce);return{...Z,type:"student",code:ce,name:Z.full_name||"",roomInfo:Z.main_room||"",gender:q(Z.gender),permission:ke?"extended":"normal",permissionLabel:ke?"ขยายเวลา":"ทั่วไป",assignedDays:ne,searchText:[ce,Z.full_name,Z.main_room,Z.gender,ke?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),U=T.map(Z=>({...Z,type:"teacher",code:String(Z.teacher_code||"").trim(),name:Z.full_name||"",roomInfo:Z.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[Z.teacher_code,Z.full_name,Z.dept,"ครู คุณครู"].join(" ").toLowerCase()})),z=[...O,...U],P=He(z.map(Z=>Z.roomInfo)),F=O.filter(Z=>Z.gender==="ชาย").length,W=O.filter(Z=>Z.gender==="หญิง").length,R=O.filter(Z=>Z.permission==="extended").length,V=O.filter(Z=>Z.assignedDays.length===0).length,G=(Z,ce,ne="indigo")=>{const ke={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${ke[ne]||ke.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${Z}</p>
              <p class="text-lg font-extrabold leading-tight">${ce}</p>
            </div>
          `};d.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${G("ทั้งหมด",M,"indigo")}
              ${G("ชาย",F,"emerald")}
              ${G("หญิง",W,"rose")}
              ${G("ครู",T.length,"slate")}
              ${G("ขยายเวลา",R,"amber")}
              ${G("ยังไม่มีเวร",V,V?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${M}`],["male",`ชาย ${F}`],["female",`หญิง ${W}`],["teacher",`ครู ${T.length}`]].map(([Z,ce])=>`
                  <button type="button" data-scanner-audience="${Z}"
                    class="scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition">
                    ${ce}
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
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${j(H.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const Y=()=>{const Z=H,ce=Z.q.trim().toLowerCase();return z.filter(ne=>!(Z.audience==="male"&&!(ne.type==="student"&&ne.gender==="ชาย")||Z.audience==="female"&&!(ne.type==="student"&&ne.gender==="หญิง")||Z.audience==="teacher"&&ne.type!=="teacher"||Z.type&&ne.type!==Z.type||Z.gender&&ne.gender!==Z.gender||Z.room&&ne.roomInfo!==Z.room||Z.permission&&ne.permission!==Z.permission||Z.day==="none"&&!(ne.type==="student"&&ne.assignedDays.length===0)||Z.day&&Z.day!=="none"&&!ne.assignedDays.includes(Z.day)||ce&&!ne.searchText.includes(ce)))},te=()=>{d.querySelectorAll(".scanner-audience-tab").forEach(ne=>{const ke=ne.dataset.scannerAudience===H.audience;ne.className=ke?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const Z=document.getElementById("scanner-filtered-count");Z&&(Z.textContent=Y().length);const ce=document.getElementById("scanner-active-audience-label");ce&&(ce.textContent=j(H.audience))},re=()=>{var De,Ve,st;te();const Z=Y(),ce=document.getElementById("scanner-table-wrap"),ne=document.getElementById("scanner-filtered-count");ne&&(ne.textContent=Z.length),document.getElementById("scanner-count-badge").textContent=Z.length===M?`${M} คน`:`${Z.length}/${M} คน`;const ke=(Ve=(De=document.activeElement)==null?void 0:De.id)!=null&&Ve.startsWith("scanner-filter-")?document.activeElement.id:"",Be=ke==="scanner-filter-q"?document.activeElement.selectionStart:null;if(ce.innerHTML=`
            <table class="w-full text-xs min-w-[980px]">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-left align-top">
                    <span class="block mb-1">ประเภท</span>
                    <select id="scanner-filter-type" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="student" ${H.type==="student"?"selected":""}>นักเรียน</option>
                      <option value="teacher" ${H.type==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-2 py-3 text-left align-top">
                    <span class="block mb-1">รหัส/ค้นหา</span>
                    <input id="scanner-filter-q" value="${J(H.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${P.map(le=>`<option value="${J(le)}" ${H.room===le?"selected":""}>${J(le)}</option>`).join("")}
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">เพศ</span>
                    <select id="scanner-filter-gender" class="w-24 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="ชาย" ${H.gender==="ชาย"?"selected":""}>ชาย</option>
                      <option value="หญิง" ${H.gender==="หญิง"?"selected":""}>หญิง</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ประเภทสิทธิ์</span>
                    <select id="scanner-filter-permission" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="normal" ${H.permission==="normal"?"selected":""}>ทั่วไป</option>
                      <option value="extended" ${H.permission==="extended"?"selected":""}>ขยายเวลา</option>
                      <option value="teacher" ${H.permission==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">วันรับผิดชอบ</span>
                    <select id="scanner-filter-day" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${_.map(le=>`<option value="${le.key}" ${H.day===le.key?"selected":""}>${le.full}</option>`).join("")}
                      <option value="none" ${H.day==="none"?"selected":""}>ยังไม่กำหนด</option>
                    </select>
                  </th>
                  <th class="px-4 py-3 text-right align-top">การจัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${Z.length?Z.map(le=>{if(le.type==="teacher")return`
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${J(le.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${le.image_url?`<img src="${J(le.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`:'<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>'}
                            <span class="font-medium text-gray-800">${J(le.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${J(le.roomInfo||"—")}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${J(le.code)}" data-name="${J(le.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `;const Re=_.map(Le=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${le.assignedDays.includes(Le.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${J(le.code)}" data-day="${Le.key}" data-name="${J(le.name)}" title="เวรวัน${Le.full}">
                        ${Le.label}
                      </button>
                    `).join(" ");return`
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${J(le.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${le.image_url?`<img src="${J(le.image_url)}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                          <span class="font-medium text-gray-800">${J(le.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${J(le.roomInfo||"—")}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${le.gender==="หญิง"?"bg-rose-50 text-rose-700 border-rose-100":"bg-sky-50 text-sky-700 border-sky-100"} text-[10px] font-bold border">${J(le.gender||"—")}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${le.permission==="extended"?"bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100":"bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"}"
                          data-code="${J(le.code)}" data-name="${J(le.name)}" data-extended="${le.permission==="extended"?"1":"0"}">
                          ${le.permission==="extended"?"ขยายเวลา":"ทั่วไป"}
                        </button>
                      </td>
                      <td class="px-3 py-2">
                        <div class="flex gap-1 items-center">
                          ${Re}
                          ${le.assignedDays.length===0?'<span class="ml-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold">ยังไม่มีเวร</span>':""}
                        </div>
                      </td>
                      <td class="px-4 py-2 text-right">
                        <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                          data-id="${le.id}" data-code="${J(le.code)}" data-name="${J(le.name)}" data-type="student">
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
          `,["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(le=>{var Re;(Re=document.getElementById(le))==null||Re.addEventListener("change",Le=>{const Se=le.replace("scanner-filter-","");H[Se]=Le.target.value,re()})}),(st=document.getElementById("scanner-filter-q"))==null||st.addEventListener("input",le=>{H.q=le.target.value,re()}),ke){const le=document.getElementById(ke);le==null||le.focus(),ke==="scanner-filter-q"&&Be!==null&&(le==null||le.setSelectionRange(Be,Be))}d.querySelectorAll(".btn-toggle-extended-scanner").forEach(le=>{le.addEventListener("click",async()=>{const Re=le.dataset.code,Le=le.dataset.name,Se=le.dataset.extended!=="1";le.disabled=!0,le.textContent="กำลังบันทึก...";try{await B(Re,Se),D(`ปรับสิทธิ์ "${Le}" เป็น${Se?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),g()}catch(K){D("ปรับสิทธิ์ไม่สำเร็จ: "+K.message,"error"),le.disabled=!1,le.textContent=le.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),d.querySelectorAll(".btn-toggle-day-scanner").forEach(le=>{le.addEventListener("click",async()=>{var K;const Re=le.dataset.code,Le=le.dataset.day,Se=le.dataset.name;le.disabled=!0;try{const ae=await qe().catch(()=>({})),pe=`prayerScanner${Le}`;let de=A(ae[pe]);de.includes(Re)?de=de.filter(X=>X!==Re):de.push(Re),await _e(pe,de.join(","));const ee=((K=_.find(X=>X.key===Le))==null?void 0:K.full)||Le;D(`ปรับสิทธิ์เวรวัน${ee} ของ "${Se}" สำเร็จ`,"success"),g()}catch(ae){D("ปรับสิทธิ์เวรล้มเหลว: "+ae.message,"error"),le.disabled=!1}})}),d.querySelectorAll(".btn-revoke-scanner").forEach(le=>{le.addEventListener("click",async()=>{const Re=le.dataset.type,Le=le.dataset.name;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${Le}" หรือไม่?`))try{if(Re==="student"){const Se=+le.dataset.id,K=le.dataset.code,{error:ae}=await se.from("students").update({can_scan_prayer:!1}).eq("id",Se);if(ae)throw ae;await B(K,!1);const pe=await qe().catch(()=>({}));for(const de of _){const ee=`prayerScanner${de.key}`,X=A(pe[ee]).filter(ue=>ue!==K);await _e(ee,X.join(","))}}else{const Se=le.dataset.code,K=await qe().catch(()=>({})),ae=A(K.prayerScannerTeachers).filter(pe=>pe!==Se);await _e("prayerScannerTeachers",ae.join(","))}D(`ถอนสิทธิ์ "${Le}" สำเร็จ`,"success"),g()}catch(Se){D("ทำรายการไม่สำเร็จ: "+Se.message,"error")}})})};d.querySelectorAll("[data-scanner-audience]").forEach(Z=>{Z.addEventListener("click",()=>{H.audience=Z.dataset.scannerAudience,H.type="",H.gender="",H.audience==="teacher"&&(H.day="",H.permission=""),re()})}),(f=document.getElementById("btn-filter-unassigned-scanner"))==null||f.addEventListener("click",()=>{H.day="none",H.type="student",re()}),(I=document.getElementById("btn-reset-scanner-filters"))==null||I.addEventListener("click",()=>{H={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},re()}),re()}catch(i){d.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${i.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const d=document.getElementById("pr-scanner-search-input").value.trim();if(!d){D("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const f=d.split(/[\s,]+/).map(I=>I.trim()).filter(Boolean);if(f.length)try{const[I,i]=await Promise.all([se.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",f),se.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",f)]);if(I.error)throw I.error;if(i.error)throw i.error;const $=I.data??[],x=i.data??[];y=[...$.map(E=>({...E,code:E.student_code,type:"student",display_info:`รหัส ${E.student_code} · ห้อง ${E.main_room||"—"} · ${E.gender||"ไม่ระบุเพศ"}`})),...x.map(E=>({...E,code:E.teacher_code,type:"teacher",display_info:`รหัสครู ${E.teacher_code} · กลุ่มสาระ ${E.dept||"—"}`}))];const S=document.getElementById("scanner-preview-container"),k=document.getElementById("scanner-preview-cards");if(!y.length){S.classList.add("hidden"),D("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}S.classList.remove("hidden"),k.innerHTML=y.map(E=>`
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
        `).join("")}catch(I){D("ค้นหาล้มเหลว: "+I.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!y.length)return;const d=document.getElementById("btn-confirm-scanner-grant");d.disabled=!0,d.textContent="⏳ กำลังบันทึก...";try{const f=y.filter(i=>i.type==="student").map(i=>i.id),I=y.filter(i=>i.type==="teacher").map(i=>i.code);if(f.length>0){const{error:i}=await se.from("students").update({can_scan_prayer:!0}).in("id",f);if(i)throw i}if(I.length>0){const i=await qe().catch(()=>({}));let $=A(i.prayerScannerTeachers);I.forEach(x=>{$.includes(x)||$.push(x)}),await _e("prayerScannerTeachers",$.join(","))}D(`มอบสิทธิ์สำเร็จ ${y.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),y=[],g()}catch(f){D("บันทึกไม่สำเร็จ: "+f.message,"error")}finally{d.disabled=!1,d.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),g()},c=y=>{a&&(clearInterval(a),a=null),document.querySelectorAll("[data-tab]").forEach(H=>{H.className=H.dataset.tab===y?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),y==="scores"?u():y==="history"?h():y==="scanners"?w():p()};document.getElementById("pr-tab-scores").addEventListener("click",()=>c("scores")),(C=document.getElementById("pr-tab-history"))==null||C.addEventListener("click",()=>c("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>c("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>c("config")),r&&((m=document.getElementById("pr-tab-scanner-cam"))==null||m.addEventListener("click",async()=>{const{renderStudentPrayerScanner:y}=await he(async()=>{const{renderStudentPrayerScanner:H}=await import("./student-views-BUKOlkJv.js");return{renderStudentPrayerScanner:H}},__vite__mapDeps([36,7,0,1,2,3,4,27,37,6,14,38,31,9,12,24,34,22,19]));y(s)})),c("scores")}function Xa(e,a,s,n){var b;(b=document.getElementById("rsa-modal"))==null||b.remove();const l=!!e,o=document.createElement("div");o.id="rsa-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#rsa-cancel").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),o.querySelector("#rsa-form").addEventListener("submit",async r=>{r.preventDefault();const u=o.querySelector("#rsa-save");u.disabled=!0,u.textContent="กำลังบันทึก...";try{const h={name:o.querySelector("#rsa-name").value.trim(),max_score:parseInt(o.querySelector("#rsa-max").value)||20,sort_order:parseInt(o.querySelector("#rsa-order").value)||0,sheet_col:o.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:a,semester:s};l?await cn(e.id,h):await pn(h),D("บันทึกสำเร็จ","success"),o.remove(),n()}catch(h){D("บันทึกไม่สำเร็จ: "+me(h),"error"),u.disabled=!1,u.textContent=l?"บันทึก":"เพิ่ม"}})}async function Vs(){var b,r,u,h;ve("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let e=null,a="",s=null;try{const{data:t}=await se.auth.getSession();if(e=((r=(b=t==null?void 0:t.session)==null?void 0:b.user)==null?void 0:r.id)??null,a=((h=(u=t==null?void 0:t.session)==null?void 0:u.user)==null?void 0:h.email)??"",e){const{data:p}=await se.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",e).maybeSingle();s=p??null}}catch{}const n="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";ye(`<div class="max-w-lg mx-auto animate-fade">

    <!-- Avatar -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4 flex flex-col items-center">
      <div id="adm-avatar"
        class="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500
               text-white text-3xl font-bold flex items-center justify-center overflow-hidden border-4 border-white shadow-md mb-3">
        ${s!=null&&s.image_url?`<img src="${s.image_url}" class="w-full h-full object-cover"/>`:((s==null?void 0:s.full_name)??"A").charAt(0).toUpperCase()}
      </div>
      <p class="text-sm font-semibold text-gray-700">${(s==null?void 0:s.full_name)??"ผู้ดูแลระบบ"}</p>
      <p class="text-xs text-indigo-500 mt-0.5">ผู้ดูแลระบบ</p>
    </div>

    <!-- แก้ไขชื่อ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-3 text-sm">📝 ชื่อ-นามสกุล</h3>
      <input id="adm-name" type="text" value="${(s==null?void 0:s.full_name)??""}"
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
      ${s!=null&&s.username?`<p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-700 font-mono">${s.username}</span></p>`:'<p class="text-xs text-amber-500 mb-3">⚠️ ยังไม่ได้ตั้งยูเซอร์เนม — ตั้งเพื่อ login โดยไม่ต้องใช้อีเมล</p>'}
      <input id="adm-username" type="text" value="${(s==null?void 0:s.username)??""}"
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
      <p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-600">${a}</span></p>
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
  </div>`);const l=(t,p,w)=>{const c=document.getElementById(t);c.className=`text-xs text-center mt-2 py-2 rounded-lg ${w?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,c.textContent=p,c.classList.remove("hidden"),setTimeout(()=>c.classList.add("hidden"),3500)},o=async t=>{const{data:p,error:w}=await se.rpc("upsert_admin_teacher_profile",{p_profile_id:e,p_full_name:t.full_name??null,p_username:t.username??null,p_login_email:t.login_email??null});if(w)throw w;return p};document.getElementById("btn-save-name").addEventListener("click",async()=>{const t=document.getElementById("btn-save-name"),p=document.getElementById("adm-name").value.trim();if(!p){l("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}t.disabled=!0,t.textContent="กำลังบันทึก...";try{await o({full_name:p,login_email:a}),l("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const w=document.getElementById("user-name");w&&(w.textContent=p)}catch(w){l("name-msg","บันทึกไม่สำเร็จ: "+me(w),!1)}finally{t.disabled=!1,t.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var c,L;const t=document.getElementById("btn-save-username"),p=document.getElementById("adm-username").value.trim().toLowerCase(),w=/^[a-z0-9._-]{3,32}$/.test(p);if(!p){l("username-msg","กรุณากรอก username",!1);return}if(!w){l("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}t.disabled=!0,t.textContent="กำลังบันทึก...";try{await o({username:p,login_email:a}),l("username-msg",`บันทึก username "${p}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=p}catch(v){const C=(c=v.message)!=null&&c.includes("unique")||(L=v.message)!=null&&L.includes("duplicate")?`username "${p}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+me(v);l("username-msg",C,!1)}finally{t.disabled=!1,t.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",t=>{const p=t.target.selectionStart;t.target.value=t.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),t.target.setSelectionRange(p,p)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const t=document.getElementById("btn-save-email"),p=document.getElementById("adm-email").value.trim();if(!p||!p.includes("@")){l("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}t.disabled=!0,t.textContent="กำลังส่งลิงก์...";try{const{error:w}=await se.auth.updateUser({email:p});if(w)throw w;l("email-msg","ส่งลิงก์ยืนยันไปที่ "+p+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(w){l("email-msg","ไม่สำเร็จ: "+me(w),!1)}finally{t.disabled=!1,t.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const t=document.getElementById("btn-save-pw"),p=document.getElementById("adm-pw").value,w=document.getElementById("adm-pw2").value;if(!p||p.length<6){l("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(p!==w){l("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}t.disabled=!0,t.textContent="กำลังเปลี่ยน...";try{const{error:c}=await se.auth.updateUser({password:p});if(c)throw c;l("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(c){l("pw-msg","ไม่สำเร็จ: "+me(c),!1)}finally{t.disabled=!1,t.textContent="เปลี่ยนรหัสผ่าน"}})}async function Gs(){var b;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>{document.querySelectorAll("[data-nav]").forEach(u=>{const h=u.dataset.nav===r;u.classList.toggle("bg-indigo-800",h),u.classList.toggle("text-white",h),u.classList.toggle("text-indigo-200",!h)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const n=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),l=(r,u,h,t)=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${r} ${u}</p>
      <p id="${h}-today" class="text-3xl font-extrabold ${t}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${h}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${h}-total" class="font-bold text-gray-600">—</span>
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
  </div>`);const o=async()=>{try{const r=await In();document.getElementById("stat-teacher-today").textContent=r.teacherToday,document.getElementById("stat-teacher-month").textContent=r.teacherMonth,document.getElementById("stat-teacher-total").textContent=r.teacherTotal,document.getElementById("stat-student-today").textContent=r.studentToday,document.getElementById("stat-student-month").textContent=r.studentMonth,document.getElementById("stat-student-total").textContent=r.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{D("โหลดสถิติไม่สำเร็จ","error")}};await o(),(b=document.getElementById("stat-refresh"))==null||b.addEventListener("click",o)}async function Ws(){var b;const e=r=>{document.getElementById("main-content").innerHTML=r};(r=>document.querySelectorAll("[data-nav]").forEach(u=>{u.classList.toggle("bg-indigo-800",u.dataset.nav===r),u.classList.toggle("text-white",u.dataset.nav===r),u.classList.toggle("text-indigo-200",u.dataset.nav!==r)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const s=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],n=async()=>{const r=await Ba(),u=s.map(t=>({building:t,rooms:r.filter(p=>p.building===t)}));[...new Set(r.map(t=>t.building).filter(t=>!s.includes(t)))].forEach(t=>u.push({building:t,rooms:r.filter(p=>p.building===t)})),document.getElementById("crm-content").innerHTML=u.filter(t=>t.rooms.length>0).map(t=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50 bg-gray-50/50">
          <h3 class="font-bold text-gray-700">🏫 ${t.building}
            <span class="text-xs font-normal text-gray-400 ml-1">${t.rooms.length} ห้อง</span>
          </h3>
          <button class="crm-add-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            data-building="${t.building}">＋ เพิ่มห้อง</button>
        </div>
        <div class="divide-y divide-gray-50">
          ${t.rooms.map(p=>`
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
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(t=>{t.addEventListener("click",()=>o(null,t.dataset.building,r))}),document.querySelectorAll(".crm-edit-btn").forEach(t=>{const p=r.find(w=>w.id===parseInt(t.dataset.id));p&&t.addEventListener("click",()=>o(p,p.building,r))}),document.querySelectorAll(".crm-del-btn").forEach(t=>{t.addEventListener("click",()=>{const p=r.find(w=>w.id===parseInt(t.dataset.id));l(p)})})},l=r=>{var h;(h=document.getElementById("crm-confirm"))==null||h.remove();const u=document.createElement("div");u.id="crm-confirm",u.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",u.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${r==null?void 0:r.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${r==null?void 0:r.building}${r!=null&&r.name?" · "+r.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(u),u.querySelector("#crm-conf-no").addEventListener("click",()=>u.remove()),u.querySelector("#crm-conf-yes").addEventListener("click",async()=>{u.remove();try{await en(r.id),D("ลบห้องแล้ว ✅","success"),n()}catch(t){D("ลบไม่สำเร็จ: "+me(t),"error")}})},o=(r,u,h)=>{var w;(w=document.getElementById("crm-modal"))==null||w.remove();const t=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...h.map(c=>c.building)])],p=document.createElement("div");p.id="crm-modal",p.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",p.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${r?"แก้ไขห้อง":"เพิ่มห้องใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${t.map(c=>`<option value="${c}" ${c===((r==null?void 0:r.building)??u)?"selected":""}>${c}</option>`).join("")}
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
    </div>`,document.body.appendChild(p),p.querySelector("#crm-cancel").addEventListener("click",()=>p.remove()),p.querySelector("#crm-save").addEventListener("click",async()=>{const c=p.querySelector("#crm-save"),L=p.querySelector("#crm-building").value,v=p.querySelector("#crm-number").value.trim(),C=p.querySelector("#crm-name").value.trim()||null,m=p.querySelector("#crm-teaching").checked;if(!L||!v){D("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}c.disabled=!0,c.textContent="⏳";try{r?await Ur(r.id,{building:L,room_number:v,name:C,is_teaching_room:m}):await Vr({building:L,room_number:v,name:C,is_teaching_room:m}),D(r?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),p.remove(),n()}catch(y){D("บันทึกไม่สำเร็จ: "+me(y),"error"),c.disabled=!1,c.textContent="บันทึก"}})};e(`<div class="max-w-3xl mx-auto animate-fade">
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
  </div>`),await n(),(b=document.getElementById("crm-add-new"))==null||b.addEventListener("click",async()=>{const r=await Ba().catch(()=>[]);o(null,"อาคาร 1",r)})}const Zl=(e,a=[])=>[1,2,3,4,5,6,7,8,9].map(s=>{const n=a.includes(s);return`<button type="button" data-period="${s}"
      class="${e}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${n?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-400"}">${s}</button>`}).join(""),Sa=(e,a,s="",n=[])=>`
  <div class="${e}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${e}-session-label text-xs font-semibold text-violet-700">วันที่ ${a+1}</span>
      <button type="button" class="${e}-session-remove ${a===0?"hidden":""} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${e}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${s}"/>
    <div class="flex flex-wrap gap-1.5 ${e}-session-pills">${Zl(e,n)}</div>
  </div>`;function Ys(e,a){const s=e.querySelector(`#${a}-sessions-list`),n=()=>{s.querySelectorAll(`.${a}-session-pill`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{const b=o.classList.contains("bg-violet-600");o.className=`${a}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${b?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),s.querySelectorAll(`.${a}-session-remove`).forEach(o=>{o.onclick=null,o.addEventListener("click",()=>{o.closest(`.${a}-session`).remove(),l()})})},l=()=>{const o=[...s.querySelectorAll(`.${a}-session`)];o.forEach((b,r)=>{b.querySelector(`.${a}-session-label`).textContent=`วันที่ ${r+1}`,b.querySelector(`.${a}-session-remove`).classList.toggle("hidden",o.length<=1)}),n()};e.querySelector(`#${a}-add-session`).addEventListener("click",()=>{const o=s.querySelectorAll(`.${a}-session`).length,b=document.createElement("div");b.innerHTML=Sa(a,o),s.appendChild(b.firstElementChild),l()}),n()}function Ks(e,a){return[...e.querySelectorAll(`.${a}-session`)].map(s=>({date:s.querySelector(`.${a}-session-date`).value,periods:[...s.querySelectorAll(`.${a}-session-pill.bg-violet-600`)].map(n=>parseInt(n.dataset.period))}))}const ed={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},Qs=e=>ed[e]??"",Js=e=>{var s,n;const a=(((s=e.target_teacher_ids)==null?void 0:s.length)??0)+(((n=e.target_student_ids)==null?void 0:n.length)??0);return a?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${a} คน</span>`:""};async function Xs(e,a,s="all"){try{const n=s==="teacher"?["all_teachers"]:s==="student"?["all_students"]:s==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(n.map(l=>se.functions.invoke("send-push",{body:{title:`📢 ${e}`,body:(a??"").slice(0,150),url:l==="all_students"?"student.html":"teacher.html",target:l}})))}catch{}}let la=null;function Zs(){return la||(la=Promise.all([Ne(),ut()]).then(([e,a])=>({teachers:e,students:a})).catch(()=>({teachers:[],students:[]}))),la}async function er(){var b;ve("announcements"),document.getElementById("page-title").textContent="ประกาศ";const e=r=>String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=r=>new Date(r).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ye(`<div class="animate-fade">
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
  </div>`);const s=async()=>{const r=document.getElementById("ann-list");if(!r)return;let u;try{u=await ns()}catch{r.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!u.length){r.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const h={};try{(await Mn(u.map(p=>p.id))).forEach(p=>{h[p.announcement_id]=(h[p.announcement_id]??0)+1})}catch{}r.innerHTML=u.map(t=>{var p,w;return`
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
              ${Qs(t.audience)}
              ${Js(t)}
              ${t.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${e(t.title)}</h3>
            ${t.ann_type==="training"&&t.event_date?`
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📅 ${a(t.event_date)}</span>
                ${t.event_location?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📍 ${e(t.event_location)}</span>`:""}
                ${(p=t.event_periods)!=null&&p.length?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${t.event_periods.sort((c,L)=>c-L).join(", ")}</span>`:""}
              </div>`:t.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">${e(t.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">
              ${a(t.created_at)}
              ${(w=t.teachers)!=null&&w.full_name?` · 📝 ${e(t.teachers.full_name)}`:" · ⚙️ แอดมิน"}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${t.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${t.id}" data-title="${e(t.title)}">💬 ${h[t.id]??0} ความคิดเห็น</button>
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
      </div>`}).join(""),r.querySelectorAll(".ann-toggle-btn").forEach(t=>{t.addEventListener("click",async()=>{const p=Number(t.dataset.id),w=t.dataset.active==="true";t.disabled=!0,t.textContent="...";try{await Qt(p,{isActive:!w}),await s()}catch{D("บันทึกไม่สำเร็จ","error"),t.disabled=!1}})}),r.querySelectorAll(".ann-edit-btn").forEach(t=>{t.addEventListener("click",()=>{const p=u.find(w=>w.id===Number(t.dataset.id));p&&o(p,s)})}),r.querySelectorAll(".ann-del-btn").forEach(t=>{t.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${t.dataset.title}" ?`)){t.disabled=!0;try{await Dn(Number(t.dataset.id)),await s()}catch{D("ลบไม่สำเร็จ","error"),t.disabled=!1}}})}),r.querySelectorAll(".ann-rsvp-list-btn").forEach(t=>{t.addEventListener("click",async()=>l(Number(t.dataset.id),t.dataset.title))}),r.querySelectorAll(".ann-comments-view-btn").forEach(t=>{t.addEventListener("click",async()=>n(Number(t.dataset.id),t.dataset.title,s))})},n=async(r,u,h)=>{const t=await Vn(r).catch(()=>[]),p=c=>new Date(c).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),w=document.createElement("div");w.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",w.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${e(u)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${t.length?t.map(c=>{var L,v;return`
            <div class="flex items-start gap-2" data-comment-id="${c.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${e((((L=c.teachers)==null?void 0:L.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${e(((v=c.teachers)==null?void 0:v.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${c.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${e(c.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${p(c.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(w),w.querySelector("#comments-list-close").onclick=()=>w.remove(),w.addEventListener("click",c=>{c.target===w&&w.remove()}),w.querySelectorAll(".comment-del-btn").forEach(c=>{c.addEventListener("click",async()=>{var L;if(confirm("ลบความคิดเห็นนี้?"))try{await Gn(Number(c.dataset.id)),(L=w.querySelector(`[data-comment-id="${c.dataset.id}"]`))==null||L.remove(),await(h==null?void 0:h())}catch(v){D("ลบไม่สำเร็จ: "+me(v),"error")}})})},l=async(r,u)=>{const{getAnnouncementRsvps:h}=await he(async()=>{const{getAnnouncementRsvps:v}=await import("./api-J-Ak1T-Y.js");return{getAnnouncementRsvps:v}},__vite__mapDeps([0,1,2,3,4])),t=await h(r).catch(()=>[]),p={yes:[],maybe:[],no:[]};t.forEach(v=>{p[v.response]&&p[v.response].push(v)});const w=v=>{var C,m;return`<li class="text-sm text-gray-700">${e(((C=v.teachers)==null?void 0:C.full_name)??"?")} <span class="text-xs text-gray-400">${((m=v.teachers)==null?void 0:m.dept)??""}</span></li>`},c=(v,C,m,y)=>p[v].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${y} mb-1.5">${C} ${m} (${p[v].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${p[v].map(w).join("")}</ul>
      </div>`:"",L=document.createElement("div");L.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",L.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[220px]">${e(u)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="rsvp-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5">
          ${t.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
          ${c("yes","✅","สนใจเข้าร่วมแน่นอน","text-emerald-700")}
          ${c("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
          ${c("no","❌","ไม่สนใจ","text-gray-500")}
          ${t.length?`<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${t.length} คน</p>`:""}
        </div>
      </div>`,document.body.appendChild(L),L.querySelector("#rsvp-list-close").onclick=()=>L.remove(),L.addEventListener("click",v=>{v.target===L&&L.remove()})},o=(r,u)=>{var B;(B=document.getElementById("ann-modal"))==null||B.remove();const h=document.createElement("div");h.id="ann-modal",h.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const t=!!(r!=null&&r.id);h.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <h3 class="font-bold text-gray-800 text-base">${t?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
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
                ${Sa("ann",0,(r==null?void 0:r.event_date)??"",(r==null?void 0:r.event_periods)??[])}
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
      </div>`,document.body.appendChild(h);const p=()=>h.remove();h.querySelector("#ann-modal-close").onclick=p,h.querySelector("#ann-modal-cancel").onclick=p,h.addEventListener("click",g=>{g.target===h&&p()});let w=null,c=null;Zs().then(({teachers:g,students:d})=>{document.body.contains(h)&&(w=ya({wrap:h.querySelector("#ann-target-teachers-wrap"),chipsWrap:h.querySelector("#ann-target-teachers-chips"),teachers:g,value:(r==null?void 0:r.target_teacher_ids)??[]}),c=es({wrap:h.querySelector("#ann-target-students-wrap"),chipsWrap:h.querySelector("#ann-target-students-chips"),students:d,value:(r==null?void 0:r.target_student_ids)??[]}))});const L=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],v=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],C=(g,d)=>{const f=document.createElement("div");f.className="mt-1.5 hidden",f.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${d.map(I=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${I}">${I}</button>`).join("")}
        </div>`,g.parentNode.appendChild(f),g.addEventListener("focus",()=>f.classList.remove("hidden")),g.addEventListener("blur",()=>setTimeout(()=>f.classList.add("hidden"),150)),f.querySelectorAll(".ann-chip").forEach(I=>{I.addEventListener("mousedown",i=>i.preventDefault()),I.addEventListener("click",()=>{g.value.trim()?g.value+=(g.tagName==="TEXTAREA"?`
`:" ")+I.dataset.val:g.value=I.dataset.val,g.focus()})})};C(h.querySelector("#ann-title"),L),C(h.querySelector("#ann-body"),v);let m=(r==null?void 0:r.file_url)??null;const y=h.querySelector("#ann-image-status"),H=h.querySelector("#ann-image-preview"),_=h.querySelector("#ann-image-preview-img");h.querySelector("#ann-image-file").addEventListener("change",async g=>{var f;const d=(f=g.target.files)==null?void 0:f[0];if(d){y.textContent="กำลังอัปโหลด...";try{m=await cs(d),_.src=m,H.classList.remove("hidden"),y.textContent="อัปโหลดสำเร็จ ✅"}catch(I){y.textContent="อัปโหลดไม่สำเร็จ: "+me(I)}g.target.value=""}}),h.querySelector("#ann-image-remove").addEventListener("click",()=>{m=null,H.classList.add("hidden"),y.textContent=""});let A=[];h.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const g=h.querySelector("#ann-cal-picker");if(!g.classList.contains("hidden")){g.classList.add("hidden");return}g.classList.remove("hidden");const d=h.querySelector("#ann-cal-event-sel");if(d.options.length<=1)try{const{getWorkCalendarEvents:f,getSystemConfig:I}=await he(async()=>{const{getWorkCalendarEvents:S,getSystemConfig:k}=await import("./api-J-Ak1T-Y.js");return{getWorkCalendarEvents:S,getSystemConfig:k}},__vite__mapDeps([0,1,2,3,4]));let i=new Date().getFullYear()+543,$=1;try{const S=await I();i=S.academicYear??S.academic_year??i,$=S.semester??$}catch{}A=await f(i,$);const x={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};A.forEach(S=>{const k=document.createElement("option");k.value=S.id;const E=S.event_type==="inspection"&&S.round_number?` ครั้งที่ ${S.round_number}`:"",T=new Date(S.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});k.textContent=`${x[S.event_type]??"📌"}${E} ${S.label} (${T})`,d.appendChild(k)})}catch(f){d.innerHTML=`<option>โหลดไม่สำเร็จ: ${f.message}</option>`}}),h.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const g=+h.querySelector("#ann-cal-event-sel").value,d=A.find(x=>x.id===g),f=h.querySelector("#ann-cal-preview"),I=h.querySelector("#ann-cal-fill");if(!d){f.classList.add("hidden"),I.classList.add("hidden");return}const i=(d.work_calendar_items||[]).sort((x,S)=>x.sort_order-S.sort_order),$=new Date(d.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});f.innerHTML=`<p class="font-semibold">${d.label}</p>
        <p class="text-indigo-600">📅 ${$}${d.event_type==="inspection"&&d.round_number?` · ครั้งที่ ${d.round_number}`:""}</p>
        ${d.description?`<p>${d.description}</p>`:""}
        ${i.length?`<ul class="mt-1 space-y-0.5">${i.map(x=>`<li>☑ ${x.item_label}</li>`).join("")}</ul>`:""}`,f.classList.remove("hidden"),I.classList.remove("hidden")}),h.querySelector("#ann-cal-fill").addEventListener("click",()=>{const g=+h.querySelector("#ann-cal-event-sel").value,d=A.find(x=>x.id===g);if(!d)return;const f=(d.work_calendar_items||[]).sort((x,S)=>x.sort_order-S.sort_order),I=new Date(d.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),i=d.event_type==="inspection"&&d.round_number?` ครั้งที่ ${d.round_number}`:"";h.querySelector("#ann-title").value=d.label+(i?` (${i.trim()})`:"");const $=[];d.description&&$.push(d.description),f.length&&($.push("สิ่งที่ต้องเตรียม:"),f.forEach(x=>$.push(`• ${x.item_label}`))),$.push(`กำหนดวันที่: ${I}`),h.querySelector("#ann-body").value=$.join(`
`),d.event_date&&(h.querySelector("#ann-due").value=d.event_date),h.querySelector("#ann-cal-picker").classList.add("hidden")}),h.querySelectorAll(".ann-type-btn").forEach(g=>{g.addEventListener("click",()=>{const d=g.dataset.type;h.querySelectorAll(".ann-type-btn").forEach(f=>{const I=f.dataset.type==="training";f.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${f.dataset.type===d?I?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":I?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),h.querySelector("#ann-training-fields").classList.toggle("hidden",d!=="training")})});const q=g=>g==="teacher"?"bg-sky-600 text-white border-sky-600":g==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",j=g=>g==="teacher"?"hover:border-sky-300":g==="student"?"hover:border-teal-300":"hover:border-indigo-300";h.querySelectorAll(".ann-audience-btn").forEach(g=>{g.addEventListener("click",()=>{h.querySelectorAll(".ann-audience-btn").forEach(d=>{d.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${d.dataset.audience===g.dataset.audience?q(d.dataset.audience):`bg-white text-gray-600 border-gray-200 ${j(d.dataset.audience)}`}`})})}),Ys(h,"ann"),h.querySelectorAll(".ann-filter-btn").forEach(g=>{g.addEventListener("click",()=>{h.querySelectorAll(".ann-filter-btn").forEach(d=>{d.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${d.dataset.filter===g.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),h.querySelector("#ann-modal-save").addEventListener("click",async()=>{var U,z;const g=h.querySelector("#ann-title").value.trim();if(!g){D("กรุณากรอกหัวข้อ","warning");return}const d=h.querySelector("#ann-body").value.trim()||null,f=h.querySelector("#ann-active-toggle").dataset.on==="true",I=h.querySelector("#ann-pin").dataset.on==="true"?1:0,i=h.querySelector("#ann-ack").dataset.on==="true",$=h.querySelector("#ann-due").value||null,x=h.querySelector(".ann-type-btn.bg-violet-600")||(r==null?void 0:r.ann_type)==="training"?"training":"general",S=((U=h.querySelector(".ann-audience-btn.text-white"))==null?void 0:U.dataset.audience)??(r==null?void 0:r.audience)??"all",k=h.querySelector("#ann-video-url").value.trim()||null,E=x==="training"&&h.querySelector("#ann-event-location").value.trim()||null,T=((z=h.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:z.dataset.filter)??(r==null?void 0:r.schedule_filter)??"all",M=(w==null?void 0:w.getValue())??(r==null?void 0:r.target_teacher_ids)??[],N=(c==null?void 0:c.getValue())??(r==null?void 0:r.target_student_ids)??[];if(x==="training"){if(!E){D("กรุณาระบุสถานที่","warning");return}const P=Ks(h,"ann");for(const W of P){if(!W.date){D("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!W.periods.length){D("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const F=h.querySelector("#ann-modal-save");F.disabled=!0,F.textContent="กำลังบันทึก...";try{t?await Qt(r.id,{title:g,body:d,isActive:f,priority:I,requiresAck:i,dueDate:$,annType:x,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:E,scheduleFilter:T,fileUrl:m,videoUrl:k,audience:S,targetTeacherIds:M,targetStudentIds:N}):P.length>1?(await Promise.all(P.map(W=>Jt({title:g,body:d,isActive:f,priority:I,requiresAck:i,dueDate:$,annType:x,eventDate:W.date,eventPeriods:W.periods,eventLocation:E,scheduleFilter:T,fileUrl:m,videoUrl:k,audience:S,targetTeacherIds:M,targetStudentIds:N}))),D(`สร้าง ${P.length} ประกาศสำเร็จ ✅`,"success")):(await Jt({title:g,body:d,isActive:f,priority:I,requiresAck:i,dueDate:$,annType:x,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:E,scheduleFilter:T,fileUrl:m,videoUrl:k,audience:S,targetTeacherIds:M,targetStudentIds:N}),D("บันทึกสำเร็จ ✅","success")),p(),await u()}catch(W){D("บันทึกไม่สำเร็จ: "+me(W),"error"),F.disabled=!1,F.textContent="บันทึก"}return}const O=h.querySelector("#ann-modal-save");O.disabled=!0,O.textContent="กำลังบันทึก...";try{t?await Qt(r.id,{title:g,body:d,isActive:f,priority:I,requiresAck:i,dueDate:$,annType:x,fileUrl:m,videoUrl:k,audience:S,targetTeacherIds:M,targetStudentIds:N}):await Jt({title:g,body:d,isActive:f,priority:I,requiresAck:i,dueDate:$,annType:x,fileUrl:m,videoUrl:k,audience:S,targetTeacherIds:M,targetStudentIds:N}),!t&&f&&Xs(g,d,S),D("บันทึกสำเร็จ ✅","success"),p(),await u()}catch(P){D("บันทึกไม่สำเร็จ: "+me(P),"error"),O.disabled=!1,O.textContent="บันทึก"}})};(b=document.getElementById("ann-create-btn"))==null||b.addEventListener("click",()=>o(null,s)),await s()}async function tr(){ve("autoscale-history"),document.getElementById("page-title").textContent="ประวัติปรับกำลังเครื่องอัตโนมัติ";const e=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=o=>new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),s=o=>o.includes("🔴")?{label:"ล้มเหลว",cls:"bg-red-100 text-red-700"}:o.includes("⚠️")?{label:"อัปเกรด",cls:"bg-amber-100 text-amber-700"}:o.includes("✅")?{label:"ลดระดับ",cls:"bg-emerald-100 text-emerald-700"}:o.includes("🧪")?{label:"ทดสอบ",cls:"bg-gray-100 text-gray-600"}:{label:"เหตุการณ์",cls:"bg-gray-100 text-gray-600"};ye(`<div class="animate-fade">
    <p class="text-xs text-gray-400 mb-6">บันทึกอัตโนมัติทุกครั้งที่ระบบปรับขนาด compute (Micro ↔ Medium) แยกจากหน้าประกาศทั่วไป</p>
    <div id="autoscale-history-wrap" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const n=document.getElementById("autoscale-history-wrap");let l;try{l=(await ns()).filter(o=>o.ann_type==="system")}catch{n.innerHTML='<p class="text-red-400 text-sm p-6">โหลดไม่สำเร็จ</p>';return}if(!l.length){n.innerHTML=`<div class="p-16 text-center text-gray-400">
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
          ${l.map(o=>{const b=s(o.title||"");return`<tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 align-top">
              <td class="px-5 py-3.5 whitespace-nowrap text-gray-500 font-mono text-xs">${a(o.created_at)}</td>
              <td class="px-5 py-3.5 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${b.cls}">${b.label}</span>
              </td>
              <td class="px-5 py-3.5 text-gray-700">${e(o.body||o.title||"")}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`}const td={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},ad=e=>td[e]??"แอดมิน",sd=e=>e?e.startsWith("academic")?"bg-blue-100 text-blue-700":e.startsWith("registrar")?"bg-violet-100 text-violet-700":e==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function rd(e,a=!1){var v,C;const{getMyAnnouncements:s,createAnnouncement:n,updateAnnouncement:l,deleteAnnouncement:o,getAckStats:b,getAnnouncementCommentsBulk:r,getAnnouncementComments:u,deleteAnnouncementComment:h}=await he(async()=>{const{getMyAnnouncements:m,createAnnouncement:y,updateAnnouncement:H,deleteAnnouncement:_,getAckStats:A,getAnnouncementCommentsBulk:q,getAnnouncementComments:j,deleteAnnouncementComment:B}=await import("./api-J-Ak1T-Y.js");return{getMyAnnouncements:m,createAnnouncement:y,updateAnnouncement:H,deleteAnnouncement:_,getAckStats:A,getAnnouncementCommentsBulk:q,getAnnouncementComments:j,deleteAnnouncementComment:B}},__vite__mapDeps([0,1,2,3,4])),t=((v=e==null?void 0:e.positions)!=null&&v.length?e.positions[0]:e==null?void 0:e.position)??null;ve("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const p=m=>String(m??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),w=m=>new Date(m).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ye(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${sd(t)}">${ad(t)}</span>
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
  </div>`);const c=async()=>{const m=document.getElementById("sann-list");if(!m)return;let y;try{y=await s(e.id)}catch{m.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!y.length){m.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const H=q=>q?new Date(q).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",_=q=>{if(!q)return"";const j=Math.ceil((new Date(q)-new Date)/864e5);return j<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${H(q)}</span>`:j<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${H(q)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${H(q)}</span>`},A={};try{(await r(y.map(j=>j.id))).forEach(j=>{A[j.announcement_id]=(A[j.announcement_id]??0)+1})}catch{}m.innerHTML=y.map(q=>`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${q.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${q.id}">
        ${q.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':q.is_active?'<div class="h-1 bg-gradient-to-r from-indigo-400 to-blue-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${q.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${q.priority>0?"📌":q.requires_ack?"🔔":q.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold
                ${q.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${q.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${q.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${q.requires_ack?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${Qs(q.audience)}
              ${Js(q)}
              ${q.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${_(q.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${p(q.title)}</h3>
            ${q.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${p(q.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${w(q.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${q.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${q.id}" data-title="${p(q.title)}">💬 ${A[q.id]??0} ความคิดเห็น</button>
              <span>👁️ ${q.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${q.requires_ack?`<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${q.id}" data-title="${p(q.title)}">📊 สถิติ</button>`:""}
            ${q.ann_type==="training"?`<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${q.id}" data-title="${p(q.title)}">👥 รายชื่อ</button>`:""}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${q.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${q.id}" data-active="${q.is_active}">
              ${q.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${q.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${q.id}" data-title="${p(q.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join(""),m.querySelectorAll(".sann-stat-btn").forEach(q=>{q.addEventListener("click",async()=>{const j=Number(q.dataset.id),B=q.dataset.title,g=document.getElementById("sann-stat-modal");g&&g.remove();const d=document.createElement("div");d.id="sann-stat-modal",d.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",d.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${p(B)}</p>
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
          </div>`,document.body.appendChild(d),d.querySelector("#sann-stat-close").onclick=()=>d.remove(),d.addEventListener("click",f=>{f.target===d&&d.remove()});try{const{acked:f,pending:I}=await b(j),i=d.querySelector("#sann-stat-body"),$=x=>new Date(x).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});i.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${f.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${I.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${f.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${f.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${f.map(x=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${p(x.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${$(x.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${I.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${I.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${I.map(x=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${p(x.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{d.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),m.querySelectorAll(".sann-rsvp-list-btn").forEach(q=>{q.addEventListener("click",async()=>{const{getAnnouncementRsvps:j}=await he(async()=>{const{getAnnouncementRsvps:$}=await import("./api-J-Ak1T-Y.js");return{getAnnouncementRsvps:$}},__vite__mapDeps([0,1,2,3,4])),B=await j(Number(q.dataset.id)).catch(()=>[]),g=q.dataset.title,d={yes:[],maybe:[],no:[],none:[]};B.forEach($=>(d[$.response]??d.none).push($));const f=$=>{var x,S;return`<li class="text-sm text-gray-700">${p(((x=$.teachers)==null?void 0:x.full_name)??"?")} <span class="text-xs text-gray-400">${((S=$.teachers)==null?void 0:S.dept)??""}</span></li>`},I=($,x,S,k)=>d[$].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${k} mb-1">${x} ${S} (${d[$].length})</p>
            <ul class="space-y-0.5 pl-3">${d[$].map(f).join("")}</ul>
          </div>`:"",i=document.createElement("div");i.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${g}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${B.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${I("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${I("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${I("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(i),i.querySelector("#rsvp-list-close").onclick=()=>i.remove(),i.addEventListener("click",$=>{$.target===i&&i.remove()})})}),m.querySelectorAll(".ann-comments-view-btn").forEach(q=>{q.addEventListener("click",async()=>{const j=Number(q.dataset.id),B=q.dataset.title,g=await u(j).catch(()=>[]),d=I=>new Date(I).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),f=document.createElement("div");f.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",f.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${p(B)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${g.length?g.map(I=>{var i,$;return`
                <div class="flex items-start gap-2" data-comment-id="${I.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${p((((i=I.teachers)==null?void 0:i.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${p((($=I.teachers)==null?void 0:$.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${I.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${p(I.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${d(I.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(f),f.querySelector("#comments-list-close").onclick=()=>f.remove(),f.addEventListener("click",I=>{I.target===f&&f.remove()}),f.querySelectorAll(".comment-del-btn").forEach(I=>{I.addEventListener("click",async()=>{var i;if(confirm("ลบความคิดเห็นนี้?"))try{await h(Number(I.dataset.id)),(i=f.querySelector(`[data-comment-id="${I.dataset.id}"]`))==null||i.remove(),await c()}catch($){D("ลบไม่สำเร็จ: "+me($),"error")}})})})}),m.querySelectorAll(".sann-toggle-btn").forEach(q=>{q.addEventListener("click",async()=>{q.disabled=!0;try{await l(Number(q.dataset.id),{isActive:q.dataset.active!=="true"}),await c()}catch{D("บันทึกไม่สำเร็จ","error"),q.disabled=!1}})}),m.querySelectorAll(".sann-edit-btn").forEach(q=>{q.addEventListener("click",()=>{const j=y.find(B=>B.id===Number(q.dataset.id));j&&L(j)})}),m.querySelectorAll(".sann-del-btn").forEach(q=>{q.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${q.dataset.title}" ?`)){q.disabled=!0;try{await o(Number(q.dataset.id)),await c()}catch{D("ลบไม่สำเร็จ","error"),q.disabled=!1}}})})},L=(m=null)=>{var k;(k=document.getElementById("sann-modal"))==null||k.remove();const y=document.createElement("div");y.id="sann-modal",y.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const H=!!(m!=null&&m.id);y.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${H?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${p((m==null?void 0:m.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${p((m==null?void 0:m.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${m!=null&&m.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${p((m==null?void 0:m.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${p((m==null?void 0:m.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ (admin เท่านั้นที่เปลี่ยนประเภทได้) -->
          ${a?`
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((m==null?void 0:m.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(m==null?void 0:m.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>`:""}
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((m==null?void 0:m.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(m==null?void 0:m.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(m==null?void 0:m.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(m==null?void 0:m.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
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
          <div id="sann-training-fields" class="${(m==null?void 0:m.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="sann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${p((m==null?void 0:m.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${Sa("sann",0,(m==null?void 0:m.event_date)??"",(m==null?void 0:m.event_periods)??[])}
              </div>
              ${H?'<div id="sann-add-session" class="hidden"></div>':`<button type="button" id="sann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((m==null?void 0:m.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((m==null?void 0:m.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="sann-active-toggle" data-on="${(m==null?void 0:m.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(m==null?void 0:m.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(m==null?void 0:m.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="sann-pin" data-on="${((m==null?void 0:m.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((m==null?void 0:m.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((m==null?void 0:m.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
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
              <button type="button" id="sann-ack" data-on="${m!=null&&m.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${m!=null&&m.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="sann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(m==null?void 0:m.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button id="sann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="sann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(y);const _=()=>y.remove();y.querySelector("#sann-modal-close").onclick=_,y.querySelector("#sann-modal-cancel").onclick=_,y.addEventListener("click",E=>{E.target===y&&_()});let A=null,q=null;Zs().then(({teachers:E,students:T})=>{document.body.contains(y)&&(A=ya({wrap:y.querySelector("#sann-target-teachers-wrap"),chipsWrap:y.querySelector("#sann-target-teachers-chips"),teachers:E,value:(m==null?void 0:m.target_teacher_ids)??[]}),q=es({wrap:y.querySelector("#sann-target-students-wrap"),chipsWrap:y.querySelector("#sann-target-students-chips"),students:T,value:(m==null?void 0:m.target_student_ids)??[]}))});const j=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],B=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],g=(E,T)=>{const M=document.createElement("div");M.className="mt-1.5 hidden",M.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${T.map(N=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${N}">${N}</button>`).join("")}
        </div>`,E.parentNode.appendChild(M),E.addEventListener("focus",()=>M.classList.remove("hidden")),E.addEventListener("blur",()=>setTimeout(()=>M.classList.add("hidden"),150)),M.querySelectorAll(".sann-chip").forEach(N=>{N.addEventListener("mousedown",O=>O.preventDefault()),N.addEventListener("click",()=>{E.value.trim()?E.value+=(E.tagName==="TEXTAREA"?`
`:" ")+N.dataset.val:E.value=N.dataset.val,E.focus()})})};g(y.querySelector("#sann-title"),j),g(y.querySelector("#sann-body"),B);let d=(m==null?void 0:m.file_url)??null;const f=y.querySelector("#sann-image-status"),I=y.querySelector("#sann-image-preview"),i=y.querySelector("#sann-image-preview-img");y.querySelector("#sann-image-file").addEventListener("change",async E=>{var M;const T=(M=E.target.files)==null?void 0:M[0];if(T){f.textContent="กำลังอัปโหลด...";try{d=await cs(T),i.src=d,I.classList.remove("hidden"),f.textContent="อัปโหลดสำเร็จ ✅"}catch(N){f.textContent="อัปโหลดไม่สำเร็จ: "+me(N)}E.target.value=""}}),y.querySelector("#sann-image-remove").addEventListener("click",()=>{d=null,I.classList.add("hidden"),f.textContent=""});let $=[];y.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const E=y.querySelector("#sann-cal-picker");if(!E.classList.contains("hidden")){E.classList.add("hidden");return}E.classList.remove("hidden");const T=y.querySelector("#sann-cal-event-sel");if(T.options.length<=1)try{const{getWorkCalendarEvents:M,getSystemConfig:N}=await he(async()=>{const{getWorkCalendarEvents:P,getSystemConfig:F}=await import("./api-J-Ak1T-Y.js");return{getWorkCalendarEvents:P,getSystemConfig:F}},__vite__mapDeps([0,1,2,3,4]));let O=new Date().getFullYear()+543,U=1;try{const P=await N();O=P.academicYear??P.academic_year??O,U=P.semester??U}catch{}$=await M(O,U);const z={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};$.forEach(P=>{const F=document.createElement("option");F.value=P.id;const W=P.event_type==="inspection"&&P.round_number?` ครั้งที่ ${P.round_number}`:"",R=new Date(P.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});F.textContent=`${z[P.event_type]??"📌"}${W} ${P.label} (${R})`,T.appendChild(F)})}catch(M){T.innerHTML=`<option>โหลดไม่สำเร็จ: ${M.message}</option>`}}),y.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const E=+y.querySelector("#sann-cal-event-sel").value,T=$.find(z=>z.id===E),M=y.querySelector("#sann-cal-preview"),N=y.querySelector("#sann-cal-fill");if(!T){M.classList.add("hidden"),N.classList.add("hidden");return}const O=(T.work_calendar_items||[]).sort((z,P)=>z.sort_order-P.sort_order),U=new Date(T.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});M.innerHTML=`<p class="font-semibold">${T.label}</p>
        <p class="text-indigo-600">📅 ${U}${T.event_type==="inspection"&&T.round_number?` · ครั้งที่ ${T.round_number}`:""}</p>
        ${T.description?`<p>${T.description}</p>`:""}
        ${O.length?`<ul class="mt-1 space-y-0.5">${O.map(z=>`<li>☑ ${z.item_label}</li>`).join("")}</ul>`:""}`,M.classList.remove("hidden"),N.classList.remove("hidden")}),y.querySelector("#sann-cal-fill").addEventListener("click",()=>{const E=+y.querySelector("#sann-cal-event-sel").value,T=$.find(z=>z.id===E);if(!T)return;const M=(T.work_calendar_items||[]).sort((z,P)=>z.sort_order-P.sort_order),N=new Date(T.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),O=T.event_type==="inspection"&&T.round_number?` ครั้งที่ ${T.round_number}`:"";y.querySelector("#sann-title").value=T.label+(O?` (${O.trim()})`:"");const U=[];T.description&&U.push(T.description),M.length&&(U.push("สิ่งที่ต้องเตรียม:"),M.forEach(z=>U.push(`• ${z.item_label}`))),U.push(`กำหนดวันที่: ${N}`),y.querySelector("#sann-body").value=U.join(`
`),T.event_date&&(y.querySelector("#sann-due").value=T.event_date),y.querySelector("#sann-cal-picker").classList.add("hidden")}),y.querySelectorAll(".sann-type-btn").forEach(E=>{E.addEventListener("click",()=>{const T=E.dataset.type;y.querySelectorAll(".sann-type-btn").forEach(M=>{const N=M.dataset.type==="training";M.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${M.dataset.type===T?N?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":N?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),y.querySelector("#sann-training-fields").classList.toggle("hidden",T!=="training")})});const x=E=>E==="teacher"?"bg-sky-600 text-white border-sky-600":E==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",S=E=>E==="teacher"?"hover:border-sky-300":E==="student"?"hover:border-teal-300":"hover:border-indigo-300";y.querySelectorAll(".sann-audience-btn").forEach(E=>{E.addEventListener("click",()=>{y.querySelectorAll(".sann-audience-btn").forEach(T=>{T.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${T.dataset.audience===E.dataset.audience?x(T.dataset.audience):`bg-white text-gray-600 border-gray-200 ${S(T.dataset.audience)}`}`})})}),Ys(y,"sann"),y.querySelectorAll(".sann-filter-btn").forEach(E=>{E.addEventListener("click",()=>{y.querySelectorAll(".sann-filter-btn").forEach(T=>{T.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${T.dataset.filter===E.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),y.querySelector("#sann-modal-save").addEventListener("click",async()=>{var te,re;const E=y.querySelector("#sann-title").value.trim();if(!E){D("กรุณากรอกหัวข้อ","warning");return}const T=y.querySelector("#sann-body").value.trim()||null,M=y.querySelector("#sann-active-toggle").dataset.on==="true",N=y.querySelector("#sann-pin").dataset.on==="true"?1:0,O=y.querySelector("#sann-ack").dataset.on==="true",U=y.querySelector("#sann-due").value||null,z=y.querySelector(".sann-type-btn.bg-violet-600")||(m==null?void 0:m.ann_type)==="training"?"training":"general",P=((te=y.querySelector(".sann-audience-btn.text-white"))==null?void 0:te.dataset.audience)??(m==null?void 0:m.audience)??"all",F=y.querySelector("#sann-video-url").value.trim()||null,W=z==="training"&&y.querySelector("#sann-event-location").value.trim()||null,R=((re=y.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:re.dataset.filter)??(m==null?void 0:m.schedule_filter)??"all",V=(A==null?void 0:A.getValue())??(m==null?void 0:m.target_teacher_ids)??[],G=(q==null?void 0:q.getValue())??(m==null?void 0:m.target_student_ids)??[];if(z==="training"){if(!W){D("กรุณาระบุสถานที่","warning");return}const Z=Ks(y,"sann");for(const ne of Z){if(!ne.date){D("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!ne.periods.length){D("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const ce=y.querySelector("#sann-modal-save");ce.disabled=!0,ce.textContent="กำลังบันทึก...";try{H?await l(m.id,{title:E,body:T,isActive:M,priority:N,requiresAck:O,dueDate:U,annType:z,eventDate:Z[0].date,eventPeriods:Z[0].periods,eventLocation:W,scheduleFilter:R,fileUrl:d,videoUrl:F,audience:P,targetTeacherIds:V,targetStudentIds:G}):Z.length>1?(await Promise.all(Z.map(ne=>n({title:E,body:T,isActive:M,priority:N,teacherId:e.id,creatorRole:t,requiresAck:O,dueDate:U,annType:z,eventDate:ne.date,eventPeriods:ne.periods,eventLocation:W,scheduleFilter:R,fileUrl:d,videoUrl:F,audience:P,targetTeacherIds:V,targetStudentIds:G}))),D(`สร้าง ${Z.length} ประกาศสำเร็จ ✅`,"success")):(await n({title:E,body:T,isActive:M,priority:N,teacherId:e.id,creatorRole:t,requiresAck:O,dueDate:U,annType:z,eventDate:Z[0].date,eventPeriods:Z[0].periods,eventLocation:W,scheduleFilter:R,fileUrl:d,videoUrl:F,audience:P,targetTeacherIds:V,targetStudentIds:G}),D("บันทึกสำเร็จ ✅","success")),_(),await c()}catch(ne){D("บันทึกไม่สำเร็จ: "+me(ne),"error");const ke=y.querySelector("#sann-modal-save");ke.disabled=!1,ke.textContent="บันทึก"}return}const Y=y.querySelector("#sann-modal-save");Y.disabled=!0,Y.textContent="กำลังบันทึก...";try{H?await l(m.id,{title:E,body:T,isActive:M,priority:N,requiresAck:O,dueDate:U,annType:z,fileUrl:d,videoUrl:F,audience:P,targetTeacherIds:V,targetStudentIds:G}):await n({title:E,body:T,isActive:M,priority:N,teacherId:e.id,creatorRole:t,requiresAck:O,dueDate:U,annType:z,fileUrl:d,videoUrl:F,audience:P,targetTeacherIds:V,targetStudentIds:G}),!H&&M&&Xs(E,T,P),D("บันทึกสำเร็จ ✅","success"),_(),await c()}catch(Z){D("บันทึกไม่สำเร็จ: "+me(Z),"error"),Y.disabled=!1,Y.textContent="บันทึก"}})};(C=document.getElementById("sann-create-btn"))==null||C.addEventListener("click",()=>L(null)),await c()}async function ar(){var l;ve("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const e=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],a=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];a.flatMap(o=>o.features),ye(`<div class="animate-fade">
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
  </div>`);let s={};try{s=await Ln()}catch{}const n=(l=document.querySelector("#perm-loading"))==null?void 0:l.closest(".bg-white");n&&(n.innerHTML=`
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 w-44">ฟีเจอร์</th>
            ${e.map(o=>`<th class="px-3 py-3.5 text-center text-xs font-bold text-gray-600 min-w-[80px]">${o.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${a.map(o=>`
            <tr class="bg-indigo-50/50 border-y border-indigo-100">
              <td colspan="${e.length+1}" class="px-5 py-2 text-xs font-bold text-indigo-600 uppercase tracking-wider sticky left-0">${o.group}</td>
            </tr>
            ${o.features.map(b=>`
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${b.label}</td>
                ${e.map(r=>{var h;const u=((h=s[r.key])==null?void 0:h[b.key])??!1;return`<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${u?"bg-emerald-500":"bg-gray-300"}"
                      data-position="${r.key}" data-feature="${b.key}" data-on="${u}">
                      <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ml-0.5"
                        style="transform:translateX(${u?"20":"0"}px)"></span>
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
    </div>`,n.querySelectorAll(".perm-toggle").forEach(o=>{o.addEventListener("click",async()=>{const b=o.dataset.position,r=o.dataset.feature,u=o.dataset.on==="true",h=!u;o.disabled=!0;try{await Cn(b,r,h),o.dataset.on=String(h),o.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${h?"bg-emerald-500":"bg-gray-300"}`,o.querySelector("span").style.transform=`translateX(${h?"20":"0"}px)`,s[b]||(s[b]={}),s[b][r]=h,D(`${h?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{D("บันทึกไม่สำเร็จ","error")}o.disabled=!1})}))}async function sr(){ve("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let e=[],a=[],s=[],n="สามัญ",l="",o="",b="",r="",u="";const h=E=>{if(!E)return null;const T=E.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return T?T[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},t=E=>E?/^(PR|อก\.|อป\.)/i.test(E)?"ศาสนา":/^ปวช\./i.test(E)?"ปวช":"สามัญ":"สามัญ",p={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},w=E=>{const T=E==="ศาสนา";return[...new Set(s.map(M=>T?M.religion_room:M.main_room).filter(Boolean))].filter(M=>t(M)===E).sort((M,N)=>M.localeCompare(N,"th"))},c=E=>{const T=w(E),M=[...new Set(T.map(O=>h(O)).filter(Boolean))],N=p[E]||[];return[...new Set([...N,...M])].sort((O,U)=>O.localeCompare(U,"th"))},L=async()=>{[e,a,s]=await Promise.all([Yr(),Ne(),ut()])},v=(E,T="w-3.5 h-3.5")=>`<span class="inline-block ${T} rounded-full flex-shrink-0" style="background:${E}"></span>`,C=E=>e.find(T=>T.name===E),m=E=>s.filter(T=>T.house_color===E).length,y=()=>s.filter(E=>!E.house_color).length,H=E=>{let T=document.getElementById("hc-print-roster-styles");T||(T=document.createElement("style"),T.id="hc-print-roster-styles",document.head.appendChild(T)),T.textContent=`
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
    `;const M=document.createElement("div");M.id="hc-print-roster-area",document.body.appendChild(M);const N=n==="ศาสนา",O=new Map;E.forEach(P=>{const F=(N?P.religion_room:P.main_room)||"ไม่มีห้องเรียน";O.has(F)||O.set(F,[]),O.get(F).push(P)});const U=Array.from(O.keys()).sort((P,F)=>P.localeCompare(F,"th"));let z="";U.forEach((P,F)=>{const R=O.get(P).sort((Y,te)=>(Y.student_code||"").localeCompare(te.student_code||""));let V="ใบรายชื่อนักเรียน";b&&(b==="__none__"?V+=" (ไม่มีสี)":V+=` กลุ่มสี${b}`),V+=` ห้อง ${P}`,r&&(V+=` (${r})`);const G=R.map((Y,te)=>{const re=C(Y.house_color),Z=re?`<span class="color-badge" style="color: ${re.color_hex}">
               สี${Y.house_color}
             </span>`:'<span style="color: #9ca3af;">— ไม่มีสี —</span>',ce=Y.image_url?`<img src="${Y.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>';return`
          <tr>
            <td style="text-align: center; width: 45px;">${te+1}</td>
            <td>
              <div class="stu-info-wrap">
                ${ce}
                <div class="stu-details">
                  <div class="stu-name">${J(Y.full_name)}</div>
                  <div class="stu-meta">รหัส: ${J(Y.student_code||"—")} | สามัญ: ${J(Y.main_room||"—")} | ศาสนา: ${J(Y.religion_room||"—")}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${Z}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${J(Y.sports_shirt_size||"")}</td>
            <td style="width: 120px;"></td>
          </tr>
        `}).join("");z+=`
        <div class="roster-page-block">
          <div class="roster-title">${J(V)}</div>
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
              ${G}
            </tbody>
          </table>
        </div>
      `}),M.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="hc-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="hc-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        ${z}
      </div>
    `,M.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},M.querySelector("#hc-btn-close-preview").onclick=()=>{M.remove()}},_=()=>a.find(E=>E.position==="house_color_admin"),A=(E,T)=>{const N=(T?e.filter(O=>O.gender===T):e).map(O=>`<option value="${J(O.name)}" ${O.name===E?"selected":""}>สี${J(O.name)}</option>`).join("");return`<option value="" ${E?"":"selected"}>— ไม่มีสี —</option>`+N},q=()=>{const E=u.toLowerCase(),T=n==="ศาสนา";return s.filter(M=>{var O,U;const N=T?M.religion_room:M.main_room;return!(!N||o&&N!==o||l&&!o&&h(N)!==l||!l&&!o&&t(N)!==n||b==="__none__"&&M.house_color||b&&b!=="__none__"&&M.house_color!==b||r&&M.gender!==r||E&&!((O=M.full_name)!=null&&O.toLowerCase().includes(E))&&!((U=M.student_code)!=null&&U.toLowerCase().includes(E))&&!N.toLowerCase().includes(E))})},j=E=>E?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",B=()=>{const E=e.filter(z=>z.gender==="ชาย"),T=e.filter(z=>z.gender==="หญิง"),M=y(),N=z=>{const P=b===z.name,F=m(z.name);return`<button class="${j(P)}" data-color="${J(z.name)}"
               style="${P?`border-color:${z.color_hex};color:${z.color_hex};background:${z.color_hex}18`:`border-color:${z.color_hex}55;color:#374151`}">
        ${v(z.color_hex)} สี${J(z.name)}
        <span class="ml-1 font-bold" style="color:${z.color_hex}">${F}</span>
      </button>`},O=b==="__none__",U=`<button class="${j(O)}" data-color="__none__"
               style="${O?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${M}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${E.map(N).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${T.map(N).join("")}
          ${U}
        </div>
      </div>`},g=()=>{const E=q();if(!E.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const T=n==="ศาสนา";return E.map(M=>{const N=C(M.house_color),O=N?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${N.color_hex}">
             ${v(N.color_hex,"w-2.5 h-2.5")} ${J(M.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',U=N?`background:${N.color_hex}12`:"",z=T?M.religion_room:M.main_room,P=M.image_url?`<img src="${M.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`:'<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>';return`<tr class="transition border-b border-gray-100 last:border-0" style="${U}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${J(M.student_code??"")}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${P}
            <div>${J(M.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${J(z??"—")}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${J(M.gender??"—")}</td>
        <td class="px-4 py-2.5">${O}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${M.id}" data-current="${J(M.house_color??"")}">
            ${A(M.house_color,M.gender)}
          </select>
        </td>
      </tr>`}).join("")},d=()=>{const E=_(),T=q().length;ye(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${E?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${J(E.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${s.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${y()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${B()}
        ${b?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':""}
      </div>

      <!-- Search + filter bar -->
      <div class="flex flex-wrap gap-3 items-center">
        <input id="hc-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..."
          value="${J(u)}"
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
          <tbody id="hc-tbody">${g()}</tbody>
        </table>
      </div>
    </div>`),k()},f=()=>{const E=document.getElementById("hc-tbody");E&&(E.innerHTML=g()),$();const T=q().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(O=>{O.textContent.includes("พบ")&&(O.innerHTML=`พบ <b class="text-gray-700">${T}</b> คน`)});const M=document.getElementById("hc-print-roster-btn");M&&(M.disabled=T===0,M.textContent=`🖨️ พิมพ์ใบรายชื่อ (${T})`);const N=document.getElementById("hc-clear-colors-btn");N&&(N.disabled=T===0,N.textContent=`🗑️ ล้างสี (${T})`)},I=()=>{var T;const E=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");E&&(E.innerHTML=B()+(b?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),i(),(T=document.getElementById("hc-clear-filter"))==null||T.addEventListener("click",()=>{b="",I(),f()})},i=()=>{document.querySelectorAll(".hc-chip").forEach(E=>{E.addEventListener("click",()=>{const T=E.dataset.color;b=b===T?"":T,I(),f()})})},$=()=>{document.querySelectorAll(".hc-color-sel").forEach(E=>{E.addEventListener("change",async()=>{const T=E.dataset.sid,M=E.dataset.current,N=E.value||null;E.disabled=!0;try{await ja([T],N);const O=s.find(F=>String(F.id)===String(T));O&&(O.house_color=N),E.dataset.current=N??"";const U=E.closest("tr"),z=U==null?void 0:U.children[4];if(z){const F=C(N);z.innerHTML=F?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${F.color_hex}">
                   ${v(F.color_hex,"w-2.5 h-2.5")} ${J(N)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const P=C(N);U&&(U.style.background=P?`${P.color_hex}12`:""),E.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>E.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),I()}catch{D("บันทึกไม่สำเร็จ","error"),E.value=M??""}E.disabled=!1})})},x=()=>{const E=document.getElementById("hc-filter-category"),T=document.getElementById("hc-filter-level");if(!E||!T)return;n=E.value;const M=c(n);T.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${M.map(N=>`<option value="${N}" ${N===l?"selected":""}>${N}</option>`).join("")}
    `,S()},S=()=>{const E=document.getElementById("hc-filter-level"),T=document.getElementById("hc-filter-class");if(!E||!T)return;l=E.value;const N=w(n).filter(O=>l?h(O)===l:!0);T.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${N.length} ห้อง) --</option>
      ${N.map(O=>`
        <option value="${O}" ${O===o?"selected":""}>${O}</option>
      `).join("")}
    `},k=()=>{var E,T,M,N,O,U,z,P;i(),$(),(E=document.getElementById("hc-clear-filter"))==null||E.addEventListener("click",()=>{b="",I(),f()}),(T=document.getElementById("hc-search"))==null||T.addEventListener("input",F=>{u=F.target.value,f()}),(M=document.getElementById("hc-filter-gender"))==null||M.addEventListener("change",F=>{r=F.target.value,f()}),(N=document.getElementById("hc-filter-category"))==null||N.addEventListener("change",F=>{n=F.target.value,l="",o="",x(),f()}),(O=document.getElementById("hc-filter-level"))==null||O.addEventListener("change",F=>{l=F.target.value,o="",S(),f()}),(U=document.getElementById("hc-filter-class"))==null||U.addEventListener("change",F=>{o=F.target.value,f()}),(z=document.getElementById("hc-print-roster-btn"))==null||z.addEventListener("click",()=>{const F=q();F.length>0&&H(F)}),(P=document.getElementById("hc-clear-colors-btn"))==null||P.addEventListener("click",async()=>{const F=q();if(!F.length||!confirm(`ยืนยันล้างสีนักเรียน ${F.length} คนที่แสดงในตาราง?`))return;const W=document.getElementById("hc-clear-colors-btn");W.disabled=!0,W.textContent="กำลังล้างสี...";try{await ja(F.map(R=>R.id),null),F.forEach(R=>{R.house_color=null}),D(`ล้างสีสำเร็จ ${F.length} คน`,"success"),I(),f()}catch{D("เกิดข้อผิดพลาด","error"),W.disabled=!1,W.textContent=`🗑️ ล้างสี (${F.length})`}}),x()};await L(),d()}async function rr(){ve("council-rep-nominations"),document.getElementById("page-title").textContent="สรุปรายชื่อตัวแทนสภานักเรียน";const e=["ม.3","ม.4","ม.5"];let a="",s="",n="";const l=await qe().catch(()=>({})),o=String(l.academicYear??l.academic_year??new Date().getFullYear()+543),[b,r]=await Promise.all([da(o).catch(()=>[]),Sn(o).catch(()=>[])]),u=m=>{var y;return((y=(m||"").match(/^ม\.\d+/))==null?void 0:y[0])??null},h=[...new Set(b.filter(m=>m.category==="สามัญ"&&e.includes(u(m.main_room))).map(m=>m.main_room))].sort((m,y)=>m.localeCompare(y,"th")),t={};h.forEach(m=>{t[m]=0}),r.forEach(m=>{t[m.main_room]!=null&&t[m.main_room]++});const p=h.filter(m=>t[m]>=2),w=h.filter(m=>t[m]>0&&t[m]<2),c=h.filter(m=>t[m]===0),L=()=>r.filter(m=>{var y,H,_;if(s&&u(m.main_room)!==s||n&&((y=m.students)==null?void 0:y.gender)!==n)return!1;if(a){const A=a.toLowerCase();if(!`${((H=m.students)==null?void 0:H.full_name)??""} ${((_=m.students)==null?void 0:_.student_code)??""} ${m.main_room??""}`.toLowerCase().includes(A))return!1}return!0}),v=m=>m.length?m.map(y=>{var H,_,A,q;return`
    <tr class="border-t border-gray-100">
      <td class="px-4 py-2.5">${J(y.main_room)}</td>
      <td class="px-4 py-2.5 font-medium">${J(((H=y.students)==null?void 0:H.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${J(((_=y.students)==null?void 0:_.student_code)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${J(((A=y.students)==null?void 0:A.gender)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${J(((q=y.teachers)==null?void 0:q.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-400 text-xs">${y.created_at?new Date(y.created_at).toLocaleDateString("th-TH"):"—"}</td>
    </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ไม่พบรายการ</td></tr>',C=()=>{var y,H,_,A;const m=L();ye(`<div class="space-y-5 animate-fade">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ส่งครบ 2 คน</p><b class="text-2xl text-emerald-700">${p.length}</b><p class="text-[11px] text-emerald-600 mt-0.5">จาก ${h.length} ห้อง</p></div>
        <div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">ส่งไม่ครบ</p><b class="text-2xl text-amber-700">${w.length}</b>${w.length?`<p class="text-[11px] text-amber-600 mt-0.5 truncate" title="${J(w.join(", "))}">${J(w.join(", "))}</p>`:""}</div>
        <div class="bg-red-50 rounded-2xl p-4"><p class="text-xs text-red-700">ยังไม่ส่งเลย</p><b class="text-2xl text-red-700">${c.length}</b>${c.length?`<p class="text-[11px] text-red-600 mt-0.5 truncate" title="${J(c.join(", "))}">${J(c.join(", "))}</p>`:""}</div>
      </div>

      <div class="flex flex-wrap gap-3 items-center">
        <input id="crn-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..." value="${J(a)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="crn-filter-grade" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
          ${e.map(q=>`<option value="${q}" ${s===q?"selected":""}>${q}</option>`).join("")}
        </select>
        <select id="crn-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${n==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${n==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${m.length}</b> รายการ</span>
        <button id="crn-print-btn" class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" ${m.length===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${m.length})
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
          <tbody>${v(m)}</tbody>
        </table>
      </div>
    </div>`),(y=document.getElementById("crn-search"))==null||y.addEventListener("input",q=>{a=q.target.value,C()}),(H=document.getElementById("crn-filter-grade"))==null||H.addEventListener("change",q=>{s=q.target.value,C()}),(_=document.getElementById("crn-filter-gender"))==null||_.addEventListener("change",q=>{n=q.target.value,C()}),(A=document.getElementById("crn-print-btn"))==null||A.addEventListener("click",()=>{const q=L(),j=`<!doctype html><html><head><meta charset="utf-8"><title>รายชื่อตัวแทนสภานักเรียน</title>
        <style>
          body{font-family:'Sarabun','TH Sarabun New',sans-serif;padding:24px;color:#111}
          h1{font-size:18px;margin:0 0 4px}
          p.sub{font-size:12px;color:#666;margin:0 0 16px}
          table{width:100%;border-collapse:collapse;font-size:13px}
          th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
          th{background:#f3f4f6}
        </style></head><body>
        <h1>รายชื่อตัวแทนสภานักเรียน${s?" ระดับชั้น "+s:""}</h1>
        <p class="sub">ปีการศึกษา ${J(o)} · พิมพ์เมื่อ ${new Date().toLocaleDateString("th-TH")} · ทั้งหมด ${q.length} รายการ</p>
        <table><thead><tr><th>ห้อง</th><th>ชื่อ-สกุล</th><th>รหัส</th><th>เพศ</th><th>ครูผู้เสนอ</th></tr></thead>
        <tbody>${q.map(B=>{var g,d,f,I;return`<tr><td>${J(B.main_room)}</td><td>${J(((g=B.students)==null?void 0:g.full_name)??"—")}</td><td>${J(((d=B.students)==null?void 0:d.student_code)??"—")}</td><td>${J(((f=B.students)==null?void 0:f.gender)??"—")}</td><td>${J(((I=B.teachers)==null?void 0:I.full_name)??"—")}</td></tr>`}).join("")}</tbody>
        </table></body></html>`;ls(j)})};C()}async function nr(){var v,C,m,y,H;ve("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const e=_=>_?new Date(_).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",a=_=>Number(_??0).toLocaleString("th-TH"),s=_=>!_.slip_url&&String(_.admin_note??"").startsWith("[เงินสด]"),n=_=>{const A=String((_==null?void 0:_.donationStickerTiers)??"").trim();return(A?A.split(`
`).filter(Boolean).map(B=>{const[g,d,f,,I]=B.split("|").map(i=>i.trim());return{amount:parseInt(g)||0,sticker:d||"🏅",title:f||"",color:I||""}}).filter(B=>B.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([B,g,d,f])=>({amount:B,sticker:g,title:d,color:f}))).sort((B,g)=>B.amount-g.amount).map((B,g)=>{const d=((_==null?void 0:_[`donationStickerImg${g+1}`])??"").trim();return d&&/^https?:\/\//.test(d)?{...B,sticker:d}:B})},l=(_,A)=>{let q=null;for(const j of A)_>=j.amount&&(q=j);return q},o=(_,A="w-8 h-8")=>_?/^https?:\/\//.test(_.sticker)?`<img src="${_.sticker}" class="${A} object-contain" title="${_.title}" />`:`<span class="text-xl" title="${_.title}">${_.sticker}</span>`:"";ye(`
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
      ${["ยอดรวมอนุมัติ","รออนุมัติ","จำนวนผู้โดเนท","เฉลี่ยต่อคน"].map((_,A)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${_}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${A}">—</p>
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
  </div>`);let b=[],r=[],u={};const h=async()=>{var g;const{supabase:_}=await he(async()=>{const{supabase:d}=await import("./supabase-BV-W2lsh.js").then(f=>f.a);return{supabase:d}},[]),{getSystemConfig:A,getPaymentSlipViewUrl:q}=await he(async()=>{const{getSystemConfig:d,getPaymentSlipViewUrl:f}=await import("./api-J-Ak1T-Y.js");return{getSystemConfig:d,getPaymentSlipViewUrl:f}},__vite__mapDeps([0,1,2,3,4])),[j,{data:B}]=await Promise.all([A().catch(()=>({})),_.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1})]);r=n(j),b=B??[];for(const d of b)d.slip_url&&!s(d)&&(d._resolvedSlip=await q(d.slip_url).catch(()=>d.slip_url));u={};for(const d of b){if(d.status!=="approved")continue;const f=(g=d.teachers)==null?void 0:g.id;f&&(u[f]=(u[f]??0)+(Number(d.amount)||0))}t(),p()},t=()=>{const _=b.filter(d=>d.status==="approved"),A=_.reduce((d,f)=>d+(Number(f.amount)||0),0),q=b.filter(d=>d.status==="pending").length,j=new Set(_.map(d=>{var f;return(f=d.teachers)==null?void 0:f.id})).size,B=j?Math.round(A/j):0,g=[a(A)+" ฿",q,j+" คน",a(B)+" ฿"];document.querySelectorAll(".don-stat-val").forEach((d,f)=>{d.textContent=g[f]})},p=()=>{var f,I,i,$;const _=document.getElementById("don-table");if(!_)return;const A=(((f=document.getElementById("don-search"))==null?void 0:f.value)??"").toLowerCase(),q=((I=document.getElementById("don-filter-status"))==null?void 0:I.value)??"all",j=((i=document.getElementById("don-filter-method"))==null?void 0:i.value)??"all",B=(($=document.getElementById("don-filter-sort"))==null?void 0:$.value)??"date_desc";let g=b.filter(x=>{const S=x.teachers;return!(A&&!String((S==null?void 0:S.full_name)??"").toLowerCase().includes(A)&&!String((S==null?void 0:S.teacher_code)??"").includes(A)||q!=="all"&&x.status!==q||j==="cash"&&!s(x)||j==="transfer"&&s(x))});if(B==="date_asc"?g.sort((x,S)=>new Date(x.created_at)-new Date(S.created_at)):B==="amount_desc"&&g.sort((x,S)=>(S.amount??0)-(x.amount??0)),!g.length){_.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const d=x=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[x]??`<span class="text-gray-400 text-xs">${x}</span>`;_.innerHTML=`
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
        ${g.map((x,S)=>{const k=x.teachers,E=s(x),T=String(x.admin_note??"").replace(/^\[เงินสด\]\s*/,""),M=u[k==null?void 0:k.id]??0,N=l(M,r),O=k!=null&&k.image_url?`<img src="${k.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((k==null?void 0:k.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${x.id}" data-tid="${(k==null?void 0:k.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${S+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${O}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(k==null?void 0:k.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(k==null?void 0:k.teacher_code)??""}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${o(N)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${a(x.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${E?'<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>':`<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${x._resolvedSlip??""}" data-id="${x.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${d(x.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${e(x.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${T}">${T||"—"}</td>
            <td class="px-3 py-3">
              <div class="flex gap-1 justify-end" onclick="event.stopPropagation()">
                ${x.status==="pending"?`
                  <button class="don-approve text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium" data-id="${x.id}">✅</button>
                  <button class="don-reject  text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium" data-id="${x.id}">❌</button>
                `:""}
                <button class="don-edit text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 font-medium" data-id="${x.id}">✏️</button>
              </div>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,_.querySelectorAll(".don-row").forEach(x=>{x.addEventListener("click",()=>w(x.dataset.tid))}),_.querySelectorAll(".don-slip").forEach(x=>{x.addEventListener("click",async S=>{S.stopPropagation();let k=x.dataset.url;if(!k){const T=b.find(M=>M.id===Number(x.dataset.id));if(T!=null&&T.slip_url){const{getPaymentSlipViewUrl:M}=await he(async()=>{const{getPaymentSlipViewUrl:N}=await import("./api-J-Ak1T-Y.js");return{getPaymentSlipViewUrl:N}},__vite__mapDeps([0,1,2,3,4]));k=await M(T.slip_url).catch(()=>T.slip_url)}}if(!k){D("ไม่พบสลิป","warning");return}const E=document.createElement("div");E.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",E.innerHTML=`<img src="${k}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,E.addEventListener("click",()=>E.remove()),document.body.appendChild(E)})}),_.querySelectorAll(".don-approve").forEach(x=>{x.addEventListener("click",async S=>{S.stopPropagation();const{reviewPaymentRequest:k}=await he(async()=>{const{reviewPaymentRequest:E}=await import("./api-J-Ak1T-Y.js");return{reviewPaymentRequest:E}},__vite__mapDeps([0,1,2,3,4]));await k(Number(x.dataset.id),"approved").catch(()=>{}),D("อนุมัติแล้ว ✅","success"),await h()})}),_.querySelectorAll(".don-reject").forEach(x=>{x.addEventListener("click",async S=>{S.stopPropagation();const k=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:E}=await he(async()=>{const{reviewPaymentRequest:T}=await import("./api-J-Ak1T-Y.js");return{reviewPaymentRequest:T}},__vite__mapDeps([0,1,2,3,4]));await E(Number(x.dataset.id),"rejected",k||null).catch(()=>{}),D("ปฏิเสธแล้ว","info"),await h()})}),_.querySelectorAll(".don-edit").forEach(x=>{x.addEventListener("click",S=>{S.stopPropagation(),L(Number(x.dataset.id))})})},w=_=>{if(!_)return;const A=Number(_),q=b.filter(k=>{var E;return((E=k.teachers)==null?void 0:E.id)===A});if(!q.length)return;const j=q[0].teachers,B=q.filter(k=>k.status==="approved"),g=B.reduce((k,E)=>k+(Number(E.amount)||0),0),d=l(g,r),f=(d==null?void 0:d.color)??"#10b981",I=parseInt(f.slice(1,3),16),i=parseInt(f.slice(3,5),16),$=parseInt(f.slice(5,7),16),x=j!=null&&j.image_url?`<img src="${j.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${((j==null?void 0:j.full_name)??"?").charAt(0)}</div>`,S=document.createElement("div");S.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",S.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${I},${i},${$},0.9),rgba(${I},${i},${$},1))">
          ${x}
          ${d?`<div class="text-3xl mb-1">${/^https?:\/\//.test(d.sticker)?`<img src="${d.sticker}" class="w-12 h-12 object-contain mx-auto"/>`:d.sticker}</div>`:""}
          <p class="text-white font-bold text-base leading-tight">${(j==null?void 0:j.full_name)??"—"}</p>
          <p class="text-white/70 text-xs mt-0.5">${(j==null?void 0:j.teacher_code)??""}</p>
          ${d?`<span class="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">${d.title}</span>`:""}
        </div>
        <!-- stats -->
        <div class="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ยอดรวม</p>
            <p class="font-bold text-emerald-600">${a(g)} ฿</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ครั้งทั้งหมด</p>
            <p class="font-bold text-gray-700">${q.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${B.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${q.map(k=>{const E=s(k),T=String(k.admin_note??"").replace(/^\[เงินสด\]\s*/,""),M={pending:"⏳",approved:"✅",rejected:"❌"}[k.status]??"";return`<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${e(k.created_at)}</span>
                <span class="text-[11px] ${E?"text-gray-500":"text-blue-500"}">${E?"💵":"🧾"}</span>
                ${T?`<span class="text-xs text-gray-400 truncate max-w-[80px]">${T}</span>`:""}
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-emerald-700">${a(k.amount)} ฿</span>
                <span>${M}</span>
              </div>
            </div>`}).join("")}
        </div>
        <div class="px-5 pb-5">
          <button class="don-sum-close w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(S),S.querySelector(".don-sum-close").addEventListener("click",()=>S.remove()),S.addEventListener("click",k=>{k.target===S&&S.remove()})},c=async()=>{const{getTeachers:_}=await he(async()=>{const{getTeachers:B}=await import("./api-J-Ak1T-Y.js");return{getTeachers:B}},__vite__mapDeps([0,1,2,3,4])),A=await _().catch(()=>[]),q=document.createElement("div");q.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",q.innerHTML=`
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
      </div>`,document.body.appendChild(q);const j=fa({wrap:q.querySelector("#don-teacher-wrap"),teachers:[...A].sort((B,g)=>(B.full_name??"").localeCompare(g.full_name??"","th"))});q.querySelector("#don-add-cancel").addEventListener("click",()=>q.remove()),q.querySelector("#don-add-confirm").addEventListener("click",async()=>{const B=j.getValue(),g=Number(q.querySelector("#don-add-amount").value),d=q.querySelector("#don-add-note").value.trim();if(!B){D("กรุณาเลือกครู","warning");return}if(!g){D("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:f}=await he(async()=>{const{createPaymentRequest:I}=await import("./api-J-Ak1T-Y.js");return{createPaymentRequest:I}},__vite__mapDeps([0,1,2,3,4]));await f({teacher_id:parseInt(B),package_type:"donation",amount:g,status:"approved",admin_note:`[เงินสด] ${d}`.trim(),reviewed_at:new Date().toISOString()}).catch(I=>{D("บันทึกไม่สำเร็จ: "+me(I),"error")}),D("บันทึกโดเนทเงินสดแล้ว ✅","success"),q.remove(),await h()})},L=_=>{const A=b.find(B=>B.id===_);if(!A)return;const q=String(A.admin_note??"").replace(/^\[เงินสด\]\s*/,""),j=document.createElement("div");j.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",j.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${A.amount??""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-edit-note" type="text" value="${q}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-edit-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button id="don-edit-save"   class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(j),j.querySelector("#don-edit-cancel").addEventListener("click",()=>j.remove()),j.querySelector("#don-edit-save").addEventListener("click",async()=>{const B=Number(j.querySelector("#don-edit-amount").value),g=j.querySelector("#don-edit-note").value.trim(),d=s(A)?"[เงินสด] ":"",{supabase:f}=await he(async()=>{const{supabase:i}=await import("./supabase-BV-W2lsh.js").then($=>$.a);return{supabase:i}},[]),{error:I}=await f.from("payment_requests").update({amount:B,admin_note:(d+g).trim()||null}).eq("id",_);if(I){D("แก้ไขไม่สำเร็จ","error");return}D("บันทึกแล้ว ✅","success"),j.remove(),await h()})};(v=document.getElementById("don-search"))==null||v.addEventListener("input",p),(C=document.getElementById("don-filter-status"))==null||C.addEventListener("change",p),(m=document.getElementById("don-filter-method"))==null||m.addEventListener("change",p),(y=document.getElementById("don-filter-sort"))==null||y.addEventListener("change",p),(H=document.getElementById("don-add"))==null||H.addEventListener("click",c),await h()}async function or(){var p,w,c,L;ve("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const e=v=>String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=v=>v?new Date(v).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",s={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},n=["suggestion","problem","password_reset"],l=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],o=Object.fromEntries(l.map(v=>[v.value,v]));ye(`
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
  </div>`);let b=[];const r=async()=>{b=await as().catch(()=>[]),h(),t()},u=async(v,C)=>{if(!v)return;if(!v.is_read)try{await Aa(v.id,!0),v.is_read=!0}catch{}const m=String(C??"").slice(0,120);await Un(v.profile_id,{title:"💬 แอดมินตอบกลับ Feedback ของคุณแล้ว",body:m||"เข้าไปดูคำตอบได้ที่เมนู Feedback ถึงแอดมิน",url:v.sender_role==="teacher"?"teacher.html":"student.html"}).catch(()=>{})},h=()=>{var C;const v=document.getElementById("fb-cat-stats");v&&(v.innerHTML=Object.keys(s).map(m=>{const y=b.filter(q=>q.category===m),H=y.length,_=y.filter(q=>!q.is_read).length;let A='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(n.includes(m)){const q=y.filter(j=>j.status==="resolved").length;A=`<p class="text-[10px] font-semibold mt-0.5 ${q===H&&H>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${q}/${H}</p>`}else _&&(A=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${_}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${m}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${s[m]}</p>
          <p class="text-xl font-bold text-gray-800">${H}</p>
          ${A}
        </div>`}).join(""),v.querySelectorAll(".fb-cat-card").forEach(m=>m.addEventListener("click",()=>{var H;const y=document.getElementById("fb-filter-cat");y&&(y.value=m.dataset.cat,t()),(H=document.getElementById("fb-list"))==null||H.scrollIntoView({behavior:"smooth",block:"start"})}))),(C=window._refreshFeedbackBadge)==null||C.call(window)},t=()=>{var A,q,j,B;const v=document.getElementById("fb-list");if(!v)return;const C=(((A=document.getElementById("fb-search"))==null?void 0:A.value)??"").toLowerCase(),m=((q=document.getElementById("fb-filter-role"))==null?void 0:q.value)??"all",y=((j=document.getElementById("fb-filter-cat"))==null?void 0:j.value)??"all",H=((B=document.getElementById("fb-filter-read"))==null?void 0:B.value)??"all";let _=b.filter(g=>{var f,I,i;const d=[g.sender_name,g.message,(f=g.student)==null?void 0:f.student_code,(I=g.student)==null?void 0:I.main_room,(i=g.student)==null?void 0:i.religion_room,...(g.messages??[]).map($=>$.message)].join(" ").toLowerCase();return!(C&&!d.includes(C)||m!=="all"&&g.sender_role!==m||y!=="all"&&g.category!==y||H==="unread"&&g.is_read||H==="read"&&!g.is_read)});if(!_.length){v.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}v.innerHTML=_.map(g=>{var d,f,I,i,$,x;return`
      <div class="bg-white rounded-2xl border ${g.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${g.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${e(g.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${e(g.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${g.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${g.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${a(g.created_at)}</p>
              ${g.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${e(((d=g.student)==null?void 0:d.student_code)||"—")} · ห้องสามัญ ${e(((f=g.student)==null?void 0:f.main_room)||"—")} · ห้องศาสนา ${e(((I=g.student)==null?void 0:I.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${g.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${g.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(s).map(([S,k])=>`<option value="${S}" ${g.category===S?"selected":""}>${k}</option>`).join("")}
          </select>
          ${n.includes(g.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((i=o[g.status])==null?void 0:i.cls)??"bg-gray-100 text-gray-600"}">${(($=o[g.status])==null?void 0:$.label)??g.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(g.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(g.message)}</p><p class="text-[9px] text-slate-400 mt-1">${a(g.created_at)}</p></div></div>
          ${(g.messages??[]).map(S=>S.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(S.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${a(S.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${e(g.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${e(S.message)}</p><p class="text-[9px] text-slate-400 mt-1">${a(S.created_at)}</p></div></div>`).join("")}
          ${g.admin_reply&&!(g.messages??[]).some(S=>S.author_role==="admin"&&S.message===g.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${e(g.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${g.replied_at?a(g.replied_at):""}</p></div></div>`:""}
        </div>
        ${g.category==="password_reset"&&g.sender_role==="student"&&((x=g.student)!=null&&x.id)?g.status==="resolved"?'<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>':`<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${g.id}" data-sid="${g.student.id}" data-code="${e(g.student.student_code||"")}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${e(g.student.student_code||"")})
              </button>`:""}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${g.id}" data-read="${g.is_read}">
            ${g.is_read?"↩️ ทำเป็นยังไม่อ่าน":"✓ ทำเครื่องหมายว่าอ่านแล้ว"}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${g.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${g.id}">
              ${l.map(S=>`<option value="${S.value}" ${g.status===S.value?"selected":""}>${S.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${g.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${g.replied_at?`ตอบล่าสุด ${a(g.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${g.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),v.querySelectorAll(".fb-toggle-read").forEach(g=>g.addEventListener("click",async()=>{const d=parseInt(g.dataset.id),f=g.dataset.read==="true";try{await Aa(d,!f)}catch{D("บันทึกไม่สำเร็จ","error");return}const I=b.find(i=>i.id===d);I&&(I.is_read=!f),h(),t()})),v.querySelectorAll(".fb-category-sel").forEach(g=>g.addEventListener("change",async()=>{const d=parseInt(g.dataset.id),f=g.value,I=b.find($=>$.id===d),i=I==null?void 0:I.category;g.disabled=!0;try{await Bn(d,f)}catch{D("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),g.disabled=!1,g.value=i;return}I&&(I.category=f),D("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),t()})),v.querySelectorAll(".fb-delete").forEach(g=>g.addEventListener("click",async()=>{const d=parseInt(g.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await jn(d)}catch{D("ลบไม่สำเร็จ","error");return}b=b.filter(f=>f.id!==d),D("ลบแล้ว","success"),h(),t()}})),v.querySelectorAll(".fb-pw-reset-btn").forEach(g=>g.addEventListener("click",async()=>{const d=parseInt(g.dataset.id),f=parseInt(g.dataset.sid),I=g.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${I} เป็นรหัสนักเรียน (${I}) จริงหรือไม่?`))return;const i=g.textContent;g.disabled=!0,g.textContent="⏳ กำลังรีเซ็ท...";try{await qn(f,I),await An(f).catch(()=>{}),await Ma(d,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${I}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(x){D("รีเซ็ทไม่สำเร็จ: "+me(x),"error"),g.disabled=!1,g.textContent=i;return}const $=b.find(x=>x.id===d);if($){$.status="resolved";const x=new Date().toISOString(),S=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${I}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;$.admin_reply=S,$.replied_at=x,$.messages=[...$.messages??[],{id:`local-${Date.now()}`,feedback_id:d,author_role:"admin",message:S,created_at:x}],await u($,S)}D("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),h(),t()})),v.querySelectorAll(".fb-save-status").forEach(g=>g.addEventListener("click",async()=>{var x,S;const d=parseInt(g.dataset.id),f=g.closest(".fb-card"),I=(x=f.querySelector(".fb-status-sel"))==null?void 0:x.value,i=(S=f.querySelector(".fb-reply-input"))==null?void 0:S.value.trim();g.disabled=!0,g.textContent="⏳ กำลังบันทึก...";try{await Ma(d,{status:I,adminReply:i})}catch{D("บันทึกไม่สำเร็จ","error"),g.disabled=!1,g.textContent="💾 บันทึก";return}const $=b.find(k=>k.id===d);if($&&($.status=I,i)){const k=new Date().toISOString();$.admin_reply=i,$.replied_at=k,$.messages=[...$.messages??[],{id:`local-${Date.now()}`,feedback_id:d,author_role:"admin",message:i,created_at:k}],await u($,i)}D(i?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),h(),t()}))};(p=document.getElementById("fb-search"))==null||p.addEventListener("input",t),(w=document.getElementById("fb-filter-role"))==null||w.addEventListener("change",t),(c=document.getElementById("fb-filter-cat"))==null||c.addEventListener("change",t),(L=document.getElementById("fb-filter-read"))==null||L.addEventListener("change",t),await r()}async function nd(){const{getWorkCalendarEvents:e,getSystemConfig:a}=await he(async()=>{const{getWorkCalendarEvents:u,getSystemConfig:h}=await import("./api-J-Ak1T-Y.js");return{getWorkCalendarEvents:u,getSystemConfig:h}},__vite__mapDeps([0,1,2,3,4]));ve("work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const s=u=>String(u??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),n={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},l={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},o=u=>new Date(u+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),b=u=>new Date(u+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let r={academic_year:new Date().getFullYear()+543,semester:1};try{const u=await a();r={academic_year:u.academicYear??u.academic_year??r.academic_year,semester:u.semester??r.semester}}catch{}ye(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="mb-6">
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${r.academic_year} ภาคเรียนที่ ${r.semester}</p>
    </div>
    <div id="wcalv-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
  </div>`);try{const u=await e(r.academic_year,r.semester),h=document.getElementById("wcalv-list");if(!u.length){h.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรมในปฏิทิน</div>';return}const t=Zn(new Date);h.innerHTML=u.map(p=>{const w=(p.work_calendar_items||[]).sort((v,C)=>v.sort_order-C.sort_order),c=p.event_date<t,L=p.event_type==="inspection"&&p.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${p.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border ${c?"border-gray-100 opacity-60":"border-gray-100"} shadow-sm p-4">
        <div class="flex flex-wrap items-center gap-1.5 mb-1">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${l[p.event_type]}">${n[p.event_type]}</span>
          ${L}
          ${c?'<span class="text-[11px] text-gray-400">ผ่านมาแล้ว</span>':'<span class="text-[11px] font-semibold text-emerald-600">กำลังจะมาถึง</span>'}
          <span class="text-xs text-gray-400 ml-auto">${p.end_date&&p.end_date!==p.event_date?`${b(p.event_date)} – ${o(p.end_date)}`:o(p.event_date)}</span>
        </div>
        <p class="font-semibold text-gray-800 text-sm">${s(p.label)}</p>
        ${p.description?`<p class="text-xs text-gray-500 mt-0.5">${s(p.description)}</p>`:""}
        ${w.length?`<div class="mt-2 border-t border-gray-50 pt-2">
          <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">สิ่งที่จะตรวจ</p>
          <ul class="space-y-0.5">${w.map(v=>`<li class="text-xs text-gray-600 flex gap-1.5"><span class="text-indigo-400">☑</span>${s(v.item_label)}</li>`).join("")}</ul>
        </div>`:""}
      </div>`}).join("")}catch(u){const h=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");document.getElementById("wcalv-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${h(u.message)}</div>`}}async function lr(e){const{getWorkCalendarEvents:a,createWorkCalendarEvent:s,updateWorkCalendarEvent:n,deleteWorkCalendarEvent:l,replaceWorkCalendarItems:o,getSystemConfig:b}=await he(async()=>{const{getWorkCalendarEvents:j,createWorkCalendarEvent:B,updateWorkCalendarEvent:g,deleteWorkCalendarEvent:d,replaceWorkCalendarItems:f,getSystemConfig:I}=await import("./api-J-Ak1T-Y.js");return{getWorkCalendarEvents:j,createWorkCalendarEvent:B,updateWorkCalendarEvent:g,deleteWorkCalendarEvent:d,replaceWorkCalendarItems:f,getSystemConfig:I}},__vite__mapDeps([0,1,2,3,4]));ve("work-calendar"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const r=j=>String(j??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),u={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},h={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},t=j=>new Date(j+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),p=j=>new Date(j+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let w={academic_year:new Date().getFullYear()+543,semester:1};try{const j=await b();w={academic_year:j.academicYear??j.academic_year??w.academic_year,semester:j.semester??w.semester}}catch{}const c=w.academic_year,L=w.semester;ye(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${c} ภาคเรียนที่ ${L}</p>
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
              ${Object.entries(u).map(([j,B])=>`
                <button data-type="${j}" class="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${j==="inspection"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">${B}</button>
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
  </div>`);let v=[],C=null;function m(){const j=document.getElementById("wcal-list");if(!v.length){j.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรม<br><span class="text-xs">กดปุ่ม + เพิ่มกิจกรรม เพื่อเริ่มต้น</span></div>';return}j.innerHTML=v.map(B=>{const g=(B.work_calendar_items||[]).sort((f,I)=>f.sort_order-I.sort_order),d=B.event_type==="inspection"&&B.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${B.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition" data-ev-id="${B.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-1.5 mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${h[B.event_type]}">${u[B.event_type]}</span>
              ${d}
              <span class="text-xs text-gray-400">${B.end_date&&B.end_date!==B.event_date?`${p(B.event_date)} – ${t(B.end_date)}`:t(B.event_date)}</span>
            </div>
            <p class="font-semibold text-gray-800 text-sm">${r(B.label)}</p>
            ${B.description?`<p class="text-xs text-gray-500 mt-0.5">${r(B.description)}</p>`:""}
            ${g.length?`<ul class="mt-2 space-y-0.5">${g.map(f=>`<li class="text-xs text-gray-500 flex gap-1.5"><span class="text-indigo-400 mt-0.5">☑</span>${r(f.item_label)}</li>`).join("")}</ul>`:""}
          </div>
          <div class="flex gap-1.5 shrink-0">
            <button class="wcal-edit-btn p-2 rounded-xl bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 transition text-sm" data-ev-id="${B.id}" title="แก้ไข">✏️</button>
            <button class="wcal-del-btn p-2 rounded-xl bg-gray-50 hover:bg-rose-50 text-gray-500 hover:text-rose-600 transition text-sm" data-ev-id="${B.id}" title="ลบ">🗑️</button>
          </div>
        </div>
      </div>`}).join("")}function y(j=""){const B=document.getElementById("wcal-items-list"),g=document.createElement("div");g.className="flex gap-2 items-center",g.innerHTML=`<input type="text" maxlength="100" value="${r(j)}" placeholder="เช่น ตรวจโปรไฟล์ครูครบถ้วน" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
      <button class="p-1.5 text-gray-400 hover:text-rose-500 transition wcal-remove-item">✕</button>`,g.querySelector(".wcal-remove-item").onclick=()=>g.remove(),B.appendChild(g)}function H(j=null){C=(j==null?void 0:j.id)??null;const B=document.getElementById("wcal-modal");document.getElementById("wcal-modal-title").textContent=j?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.querySelectorAll(".wcal-type-pill").forEach(g=>{const d=g.dataset.type===((j==null?void 0:j.event_type)??"inspection");g.className=`wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${d?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),document.getElementById("wcal-round").value=(j==null?void 0:j.round_number)??"",document.getElementById("wcal-date").value=(j==null?void 0:j.event_date)??"",document.getElementById("wcal-end-date").value=(j==null?void 0:j.end_date)??"",document.getElementById("wcal-label").value=(j==null?void 0:j.label)??"",document.getElementById("wcal-desc").value=(j==null?void 0:j.description)??"",document.getElementById("wcal-items-list").innerHTML="",((j==null?void 0:j.work_calendar_items)||[]).sort((g,d)=>g.sort_order-d.sort_order).forEach(g=>y(g.item_label)),q(),B.classList.remove("hidden"),setTimeout(()=>document.getElementById("wcal-label").focus(),50)}function _(){document.getElementById("wcal-modal").classList.add("hidden"),C=null}function A(){var j;return((j=document.querySelector(".wcal-type-pill.bg-indigo-600"))==null?void 0:j.dataset.type)??"inspection"}function q(){document.getElementById("wcal-round-row").classList.toggle("hidden",A()!=="inspection")}document.getElementById("wcal-create-btn").addEventListener("click",()=>H()),document.getElementById("wcal-modal-cancel").addEventListener("click",_),document.getElementById("wcal-modal-backdrop").addEventListener("click",_),document.getElementById("wcal-add-item").addEventListener("click",()=>y()),document.getElementById("wcal-type-pills").addEventListener("click",j=>{const B=j.target.closest(".wcal-type-pill");B&&(document.querySelectorAll(".wcal-type-pill").forEach(g=>{g.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}),B.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-indigo-600 text-white border-indigo-600",q())}),document.getElementById("wcal-list").addEventListener("click",j=>{const B=j.target.closest(".wcal-edit-btn"),g=j.target.closest(".wcal-del-btn");if(B){const d=v.find(f=>f.id===+B.dataset.evId);d&&H(d)}if(g){const d=v.find(f=>f.id===+g.dataset.evId);if(!d||!confirm(`ลบ "${d.label}" ใช่ไหม?
ความคิดเห็น/บันทึกที่อ้างอิงกิจกรรมนี้จะไม่ถูกลบ แต่จะสูญเสียการอ้างอิง`))return;l(d.id).then(()=>{v=v.filter(f=>f.id!==d.id),m()}).catch(f=>alert("ลบไม่สำเร็จ: "+f.message))}}),document.getElementById("wcal-modal-save").addEventListener("click",async()=>{const j=A(),B=parseInt(document.getElementById("wcal-round").value)||null,g=document.getElementById("wcal-date").value,d=document.getElementById("wcal-end-date").value||null,f=document.getElementById("wcal-label").value.trim(),I=document.getElementById("wcal-desc").value.trim();if(!g||!f){alert("กรุณากรอกวันที่และชื่อกิจกรรม");return}if(d&&d<g){alert("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น");return}const i=[...document.querySelectorAll("#wcal-items-list input")].map(x=>x.value.trim()).filter(Boolean),$=document.getElementById("wcal-modal-save");$.textContent="กำลังบันทึก...",$.disabled=!0;try{let x;C?(x=await n(C,{eventType:j,roundNumber:B,eventDate:g,endDate:d,label:f,description:I}),await o(C,i),x.work_calendar_items=i.map((S,k)=>({item_label:S,sort_order:k})),v=v.map(S=>S.id===C?x:S)):(x=await s({eventType:j,roundNumber:B,eventDate:g,endDate:d,label:f,description:I,academicYear:c,semester:L,createdByTeacherId:e==null?void 0:e.id}),await o(x.id,i),x.work_calendar_items=i.map((S,k)=>({item_label:S,sort_order:k})),v.push(x),v.sort((S,k)=>S.event_date.localeCompare(k.event_date))),m(),_()}catch(x){alert("บันทึกไม่สำเร็จ: "+x.message)}finally{$.textContent="บันทึก",$.disabled=!1}});try{v=await a(c,L)}catch(j){document.getElementById("wcal-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${r(j.message)}</div>`;return}m()}function od(e){return e.filter(a=>a.category==="ศาสนา"||["AGM","AGMVOC"].includes(a.subject_group)).concat(e.filter(a=>!a.category&&!["AGM","AGMVOC","ACDMVOC"].includes(a.subject_group))).filter((a,s,n)=>n.findIndex(l=>l.id===a.id)===s)}async function dr(){ve("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",ye(`<div class="max-w-4xl mx-auto animate-fade">
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
  </div>`);let e=[],a=[];try{[e,a]=await Promise.all([tt(),Ne()])}catch{D("โหลดข้อมูลไม่สำเร็จ","error");return}Rt(e),document.getElementById("btn-add-rg").onclick=()=>ir(null,a,async()=>{const s=await tt();Rt(s)})}function Rt(e){const a=document.getElementById("rg-table-wrap");if(a){if(!e.length){a.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่มีกลุ่มในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มกลุ่ม" เพื่อเริ่มต้น</p>
    </div>`;return}a.innerHTML=`
    <table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ชื่อกลุ่ม</th>
          <th class="px-5 py-3 text-left">หัวหน้ากลุ่ม</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50" id="rg-tbody">
        ${e.map(s=>{var l;const n=s.teachers;return`<tr class="hover:bg-gray-50 transition" data-gid="${s.id}">
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${J(s.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${n?`<div class="flex items-center gap-2">
                    ${n.image_url?`<img src="${n.image_url}" class="w-7 h-7 rounded-full object-cover" />`:`<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${J(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
                    <div>
                      <span class="font-medium">${J(n.full_name)}</span>
                      ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
                    </div>
                  </div>`:'<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${s.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${s.id}" data-name="${J(s.name)}">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,a.querySelectorAll(".rg-edit").forEach(s=>{s.onclick=async()=>{const n=+s.dataset.gid,o=(await tt()).find(r=>r.id===n),b=await Ne();ir(o,b,async()=>{Rt(await tt())})}}),a.querySelectorAll(".rg-del").forEach(s=>{s.onclick=async()=>{const n=+s.dataset.gid,l=s.dataset.name;if(confirm(`ลบกลุ่ม "${l}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const b=(await tt()).find(r=>r.id===n);b!=null&&b.leader_id&&await ia(b.leader_id,null,"religion_subgroup_head"),await Kr(n),D("ลบกลุ่มแล้ว","success"),Rt(await tt())}catch(o){D("ลบไม่สำเร็จ: "+o.message,"error")}}})}}function ir(e,a,s){const n=!!e,l=document.createElement("div");l.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const o=[...a].sort((r,u)=>(r.full_name??"").localeCompare(u.full_name??"","th"));l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${n?"แก้ไขกลุ่ม":"เพิ่มกลุ่มใหม่"}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${J((e==null?void 0:e.name)??"")}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
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
    </div>`,document.body.appendChild(l);const b=fa({wrap:l.querySelector("#rg-leader-wrap"),teachers:o,value:(e==null?void 0:e.leader_id)??null});l.querySelector("#rg-modal-close").onclick=()=>l.remove(),l.querySelector("#rg-cancel").onclick=()=>l.remove(),l.querySelector("#rg-save").onclick=async()=>{const r=l.querySelector("#rg-name").value.trim();if(!r){D("กรุณาระบุชื่อกลุ่ม","error");return}const u=b.getValue(),h=(e==null?void 0:e.leader_id)??null,t=l.querySelector("#rg-save");t.disabled=!0,t.textContent="กำลังบันทึก...";try{n?(await Qr(e.id,{name:r,leader_id:u}),h&&h!==+u&&await ia(h,null,"religion_subgroup_head")):await Jr({name:r,leader_id:u}),u&&await ia(+u,"religion_subgroup_head"),D(n?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),l.remove(),s()}catch(p){D("บันทึกไม่สำเร็จ: "+p.message,"error"),t.disabled=!1,t.textContent="บันทึก"}}}async function ld(e){ve("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",ye(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let a=[],s=[];try{[a,s]=await Promise.all([tt(),Ne()])}catch{D("โหลดข้อมูลไม่สำเร็จ","error");return}const n=a.find(b=>b.leader_id===e.id),l=document.getElementById("mrg-content");if(!n){l.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const o=od(s);await cr(n,o)}async function cr(e,a){const s=document.getElementById("mrg-content");let n=[];try{n=await Xr(e.id)}catch{D("โหลดสมาชิกไม่สำเร็จ","error");return}s.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${J(e.name)}</h3>
        <p class="text-xs text-gray-400 mt-0.5">สมาชิกในกลุ่ม ${n.length} คน</p>
      </div>
      <button id="btn-mrg-add" class="btn-primary px-4 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มสมาชิก
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${n.length?`
        <ul class="divide-y divide-gray-50">
          ${n.map(l=>{var b;const o=l.teachers;return`
            <li class="px-5 py-3 flex items-center gap-3">
              ${o!=null&&o.image_url?`<img src="${o.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${J(((b=o==null?void 0:o.full_name)==null?void 0:b.charAt(0))??"?")}</div>`}
              <div>
                <span class="font-medium text-gray-800">${J((o==null?void 0:o.full_name)??"")}</span>
                ${o!=null&&o.teacher_code?`<span class="block text-xs font-mono text-gray-400">${o.teacher_code}</span>`:""}
              </div>
            </li>`}).join("")}
        </ul>`:`
        <div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">👥</p>
          <p class="font-medium">ยังไม่มีสมาชิกในกลุ่ม</p>
          <p class="text-xs mt-1">กดปุ่ม "เพิ่มสมาชิก" เพื่อเริ่มต้น</p>
        </div>`}
    </div>`,document.getElementById("btn-mrg-add").onclick=()=>dd(e,a,n,async()=>{await cr(e,a)})}function dd(e,a,s,n){const l=document.createElement("div");l.className="fixed inset-0 z-[9000] bg-white flex flex-col",l.innerHTML=`
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${J(e.name)}"</h3>
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
    </div>`,document.body.appendChild(l);const o=ya({wrap:l.querySelector("#mrg-member-wrap"),chipsWrap:l.querySelector("#mrg-chips"),teachers:a,value:s.map(b=>b.teacher_id)});l.querySelector("#mrg-modal-close").onclick=()=>l.remove(),l.querySelector("#mrg-cancel").onclick=()=>l.remove(),l.querySelector("#mrg-save").onclick=async()=>{const b=o.getValue(),r=l.querySelector("#mrg-save");r.disabled=!0,r.textContent="กำลังบันทึก...";try{await sn(e.id,b),l.remove(),await n(),id(e,a.filter(u=>b.includes(u.id)))}catch(u){D("บันทึกไม่สำเร็จ: "+u.message,"error"),r.disabled=!1,r.textContent="บันทึก"}}}function id(e,a){const s=document.createElement("div");s.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${J(e.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${a.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${a.length?`<ul class="divide-y divide-gray-50">
          ${a.map(n=>{var l;return`<li class="py-2.5 flex items-center gap-3">
            ${n.image_url?`<img src="${n.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${J(((l=n.full_name)==null?void 0:l.charAt(0))??"?")}</div>`}
            <div>
              <span class="font-medium text-gray-800">${J(n.full_name??"")}</span>
              ${n.teacher_code?`<span class="block text-xs font-mono text-gray-400">${n.teacher_code}</span>`:""}
            </div>
          </li>`}).join("")}
        </ul>`:'<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>'}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`,document.body.appendChild(s),s.querySelector("#mrg-summary-close").onclick=()=>s.remove()}async function pr(){ve("subject-group-requests"),document.getElementById("page-title").textContent="คำขอย้ายกลุ่มวิชา";const e=o=>o?new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—",a=o=>o==="sasana"?"🕌 ศาสนา":"📖 สามัญ",s={pending:{label:"🕐 รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธแล้ว",cls:"bg-red-100 text-red-600"}};ye(`
  <div class="max-w-3xl mx-auto animate-fade space-y-4">
    <p class="text-xs text-gray-400">คำขอจากนักเรียนที่เห็นว่าวิชาบางวิชาถูกจัดกลุ่มสามัญ/ศาสนาผิดหลักสูตร — อนุมัติแล้วจะมีผลเฉพาะห้องที่คุณเลือกเท่านั้น</p>
    <div class="flex items-center gap-2">
      <button id="sgr-tab-pending" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-tab="pending">รอตรวจสอบ</button>
      <button id="sgr-tab-all" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-500" data-tab="all">ทั้งหมด</button>
    </div>
    <div id="sgr-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>
    </div>
  </div>`);let n="pending";const l=async()=>{document.getElementById("sgr-list").innerHTML='<div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>';const o=n==="pending"?await ts().catch(()=>[]):await Tn().catch(()=>[]),b=document.getElementById("sgr-list");if(!o.length){b.innerHTML=`<div class="text-center py-16 text-gray-300"><p class="text-4xl mb-3">🔀</p><p class="text-sm">${n==="pending"?"ไม่มีคำขอรอตรวจสอบ":"ยังไม่มีคำขอ"}</p></div>`;return}b.innerHTML=o.map(r=>{var h,t;const u=s[r.status]??s.pending;return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="font-semibold text-sm text-gray-800 truncate">${Oe(r.subject_name??"—")} <span class="text-xs text-gray-400 font-mono">${Oe(r.subject_code??"")}</span></p>
            <p class="text-xs text-gray-500 mt-0.5">${Oe(((h=r.students)==null?void 0:h.full_name)??"—")} · ${Oe(((t=r.students)==null?void 0:t.student_code)??"")} · ${Oe(r.class_level??"")}</p>
            <p class="text-xs text-gray-500 mt-1">${a(r.current_group)} → ${a(r.requested_group)}</p>
            <p class="text-[11px] text-gray-400 mt-1">${e(r.created_at)}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${u.cls}">${u.label}</span>
            ${r.status==="pending"?`<button class="sgr-review-btn text-xs font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50" data-id="${r.id}">ตรวจสอบ</button>`:""}
          </div>
        </div>
      </div>`}).join(""),b.querySelectorAll(".sgr-review-btn").forEach(r=>{r.addEventListener("click",()=>cd(o.find(u=>u.id===Number(r.dataset.id)),l))})};document.querySelectorAll(".sgr-tab").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.tab,document.querySelectorAll(".sgr-tab").forEach(b=>{b.className=`sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold ${b.dataset.tab===n?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}`}),l()})}),await l()}function cd(e,a){var l;if(!e)return;const s=document.createElement("div");s.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
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
    </div>`,document.body.appendChild(s);const n=()=>s.remove();s.querySelector("#sgr-cancel").addEventListener("click",n),On(e.id).then(o=>{const b=s.querySelector("#sgr-candidates");if(!o.length){b.innerHTML='<p class="text-center text-gray-400 text-sm py-4">ไม่พบห้องที่สอนวิชารหัสนี้ในระดับชั้นเดียวกัน</p>';return}b.innerHTML=o.map(r=>`
      <label class="flex items-center gap-2.5 border border-gray-100 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-50">
        <input type="checkbox" class="sgr-candidate-cb" value="${r.class_id}" checked />
        <span class="flex-1 text-sm text-gray-700">${Oe(r.class_name??"")}</span>
        <span class="text-[11px] text-gray-400">${r.student_count} คน · ${r.current_group==="sasana"?"🕌":"📖"}</span>
      </label>`).join("")}).catch(()=>{s.querySelector("#sgr-candidates").innerHTML='<p class="text-center text-red-400 text-sm py-4">โหลดรายชื่อห้องไม่สำเร็จ</p>'}),s.querySelector("#sgr-approve").addEventListener("click",async o=>{var r;const b=[...s.querySelectorAll(".sgr-candidate-cb:checked")].map(u=>Number(u.value));if(!b.length){D("เลือกอย่างน้อย 1 ห้อง","warning");return}if(confirm(`อนุมัติย้ายกลุ่มให้ ${b.length} ห้องที่เลือก?`)){o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await zn(e.id,b),D("อนุมัติแล้ว ✅","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),a()}catch(u){D("บันทึกไม่สำเร็จ: "+me(u),"error"),o.target.disabled=!1,o.target.textContent="อนุมัติที่เลือก"}}}),s.querySelector("#sgr-reject").addEventListener("click",async o=>{var r;if(!confirm("ปฏิเสธคำขอนี้?"))return;const b=s.querySelector("#sgr-comment").value.trim();o.target.disabled=!0,o.target.textContent="กำลังบันทึก...";try{await Fn(e.id,b),D("ปฏิเสธคำขอแล้ว","success"),(r=window._refreshSubjectGroupBadge)==null||r.call(window),n(),a()}catch(u){D("บันทึกไม่สำเร็จ: "+me(u),"error"),o.target.disabled=!1,o.target.textContent="ปฏิเสธ"}})}async function ur(){ve("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",ye(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let e=[],a=[],s="manage",n="สามัญ",l="",o="",b="";const r=d=>{if(!d)return null;const f=d.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return f?f[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},u=d=>d?/^(PR|อก\.|อป\.)/i.test(d)?"ศาสนา":/^ปวช\./i.test(d)?"ปวช":"สามัญ":"สามัญ",h={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},t=d=>e.map(f=>f.class_name).filter(f=>f&&u(f)===d).sort((f,I)=>f.localeCompare(I,"th")),p=d=>{const f=t(d),I=[...new Set(f.map($=>r($)).filter(Boolean))],i=h[d]||[];return[...new Set([...i,...I])].sort(($,x)=>$.localeCompare(x,"th"))},w=async()=>{const[d,f,I]=await Promise.all([Ot(),ut(),Zr()]);a=f,e=[...new Set(d.map($=>$.class_name).filter(Boolean))].map($=>I.find(S=>S.class_name===$)||{class_name:$,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},c=d=>a.find(f=>f.id===d),L=()=>{let d=document.getElementById("hc-print-roster-styles");d||(d=document.createElement("style"),d.id="hc-print-roster-styles",document.head.appendChild(d)),d.textContent=`
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
    `;const f=document.createElement("div");f.id="hc-print-roster-area",document.body.appendChild(f);const I=e.filter(x=>!(u(x.class_name)!==n||l&&r(x.class_name)!==l||o&&x.class_name!==o)).sort((x,S)=>x.class_name.localeCompare(S.class_name,"th"));let i="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";l&&(i+=` ระดับชั้น ${l}`),o&&(i+=` ห้อง ${o}`);const $=I.map((x,S)=>{const k=c(x.head_student_id),E=c(x.vice_head_student_id),T=k!=null&&k.image_url?`<img src="${k.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',M=E!=null&&E.image_url?`<img src="${E.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',N=k?`<b>${J(k.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${k.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',O=E?`<b>${J(E.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${E.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${S+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${J(x.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${T}
              <div>${N}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${M}
              <div>${O}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${J(x.notes??"")}</td>
        </tr>
      `}).join("");f.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${i}</div>
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
    `,f.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},f.querySelector("#pr-btn-close-preview").onclick=()=>{f.remove()}},v=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${s==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${s==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,C=()=>{const d=b.trim().toLowerCase(),f=e.filter(I=>!(u(I.class_name)!==n||d&&!I.class_name.toLowerCase().includes(d))).sort((I,i)=>I.class_name.localeCompare(i.class_name,"th"));return f.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':f.map(I=>{const i=c(I.head_student_id),$=c(I.vice_head_student_id),x=i!=null&&i.image_url?`<img src="${i.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',S=$!=null&&$.image_url?`<img src="${$.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${J(I.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${n}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${x}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${i?J(i.full_name):"— ยังไม่ระบุ —"}</span>
                  ${i?`<span class="text-xs text-gray-400 font-mono">รหัส: ${i.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${S}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${$?J($.full_name):"— ยังไม่ระบุ —"}</span>
                  ${$?`<span class="text-xs text-gray-400 font-mono">รหัส: ${$.student_code}</span>`:""}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${I.head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
              <p>เกียรติบัตรรอง: ${I.vice_head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${J(I.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},m=()=>{const d=e.filter(f=>!(u(f.class_name)!==n||l&&r(f.class_name)!==l||o&&f.class_name!==o)).sort((f,I)=>f.class_name.localeCompare(I.class_name,"th"));return d.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':d.map((f,I)=>{const i=c(f.head_student_id),$=c(f.vice_head_student_id),x=i!=null&&i.image_url?`<img src="${i.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',S=$!=null&&$.image_url?`<img src="${$.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${I+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${J(f.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${x}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${i?J(i.full_name):"— ยังไม่ระบุ —"}</p>
                ${i?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${i.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${S}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${$?J($.full_name):"— ยังไม่ระบุ —"}</p>
                ${$?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${$.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${J(f.notes??"")}
          </td>
        </tr>
      `}).join("")},y=()=>{const d=e.filter(f=>!(u(f.class_name)!==n||l&&r(f.class_name)!==l||o&&f.class_name!==o)).length;s==="manage"?ye(`
        <div class="space-y-5 animate-fade">
          ${v()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${n==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${n==="ศาสนา"?"selected":""}>ศาสนา</option>
                <option value="ปวช" ${n==="ปวช"?"selected":""}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${J(b)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${d}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${C()}
          </div>
        </div>
      `):(ye(`
        <div class="space-y-5 animate-fade">
          ${v()}

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
              <span class="text-xs text-gray-400">พบข้อมูลหัวหน้า/รองหัวหน้าทั้งหมด <b class="text-gray-700">${d}</b> ห้อง</span>
              <div class="flex gap-2">
                <button id="btn-cert-settings"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shadow-sm">
                  ⚙️ ตั้งค่าแสดงเกียรติบัตร
                </button>
                <button id="btn-print-leaders-roster"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  ${d===0?"disabled":""}>
                  🖨️ พิมพ์ใบรายชื่อ (${d})
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
                  ${m()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `),H()),A()},H=()=>{const d=document.getElementById("pr-filter-level");if(!d)return;const f=p(n);d.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${f.map(I=>`<option value="${I}" ${I===l?"selected":""}>${I}</option>`).join("")}
    `,_()},_=()=>{const d=document.getElementById("pr-filter-class");if(!d)return;const I=t(n).filter(i=>l?r(i)===l:!0);d.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${I.length} ห้อง) --</option>
      ${I.map(i=>`<option value="${i}" ${i===o?"selected":""}>ห้อง ${i}</option>`).join("")}
    `},A=()=>{var d,f,I,i,$,x,S,k,E;(d=document.getElementById("tab-manage"))==null||d.addEventListener("click",()=>{s="manage",y()}),(f=document.getElementById("tab-print"))==null||f.addEventListener("click",()=>{s="print",y()}),(I=document.getElementById("hc-filter-category"))==null||I.addEventListener("change",T=>{n=T.target.value,y()}),(i=document.getElementById("hc-search-classes"))==null||i.addEventListener("input",T=>{b=T.target.value;const M=document.getElementById("hc-cards-grid");M&&(M.innerHTML=C()),j()}),j(),($=document.getElementById("pr-filter-category"))==null||$.addEventListener("change",T=>{n=T.target.value,l="",o="",H(),q()}),(x=document.getElementById("pr-filter-level"))==null||x.addEventListener("change",T=>{l=T.target.value,o="",_(),q()}),(S=document.getElementById("pr-filter-class"))==null||S.addEventListener("change",T=>{o=T.target.value,q()}),(k=document.getElementById("btn-print-leaders-roster"))==null||k.addEventListener("click",L),(E=document.getElementById("btn-cert-settings"))==null||E.addEventListener("click",B)},q=()=>{const d=document.getElementById("pr-table-body");d&&(d.innerHTML=m());const f=e.filter(i=>!(u(i.class_name)!==n||l&&r(i.class_name)!==l||o&&i.class_name!==o)).length,I=document.getElementById("btn-print-leaders-roster");I&&(I.disabled=f===0,I.textContent=`🖨️ พิมพ์ใบรายชื่อ (${f})`)},j=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.room,I=e.find(i=>i.class_name===f);I&&g(I)})})},B=()=>{const d=document.createElement("div");d.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const f=e.some(S=>S.show_cert);d.innerHTML=`
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
    `,document.body.appendChild(d);const I=d.querySelector("#csm-global-toggle"),i=d.querySelector("#csm-status-text"),$=S=>{i.textContent=S?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};$(f),I.addEventListener("change",async()=>{const S=I.checked;I.disabled=!0,i.textContent="กำลังบันทึก...";try{await on(S),e.forEach(k=>{k.show_cert=S}),$(S),D(S?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(k){D("บันทึกผิดพลาด: "+k.message,"error"),I.checked=!S,$(!S)}finally{I.disabled=!1}});const x=()=>d.remove();d.querySelector("#csm-modal-close").onclick=x,d.querySelector("#csm-btn-close").onclick=x},g=d=>{const f=document.createElement("div");f.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let I=c(d.head_student_id),i=c(d.vice_head_student_id);f.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขหัวหน้าและรองหัวหน้าห้อง</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">ห้องเรียน ${d.class_name}</p>
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
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(I==null?void 0:I.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${I?`
                ${I.image_url?`<img src="${I.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${J(I.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${I.student_code} · ห้อง ${I.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Head Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-head-cert-in" placeholder="https://..." value="${d.head_cert_url??""}"
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
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(i==null?void 0:i.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${i?`
                ${i.image_url?`<img src="${i.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${J(i.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${i.student_code} · ห้อง ${i.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Vice Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-vice-cert-in" placeholder="https://..." value="${d.vice_head_cert_url??""}"
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
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">${d.notes??""}</textarea>
            </div>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end shrink-0">
          <button id="ld-btn-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
          <button id="ld-btn-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">บันทึกข้อมูล</button>
        </div>
      </div>
    `,document.body.appendChild(f);let $=d.head_student_id,x=d.vice_head_student_id;const S=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},k=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},E=O=>{const U=document.getElementById("ld-head-card");if(O){$=O.id;const z=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';U.innerHTML=`
          ${z}
          <div>
            <p class="font-bold text-gray-800">${J(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else $=null,U.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},T=O=>{const U=document.getElementById("ld-vice-card");if(O){x=O.id;const z=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';U.innerHTML=`
          ${z}
          <div>
            <p class="font-bold text-gray-800">${J(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else x=null,U.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async O=>{const U=O.target.value.trim();if(U.length===5){S();const z=await qa(U).catch(()=>null);E(z)}else U.length===0&&($=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async O=>{const U=O.target.value.trim();if(U.length===5){k();const z=await qa(U).catch(()=>null);T(z)}else U.length===0&&(x=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const M=async(O,U)=>{const z=O.files[0];if(z){U.disabled=!0,U.value="กำลังอัปโหลดไฟล์...";try{const P=z.name.split(".").pop(),F=`certificates/${d.id}/${O.id}-${Date.now()}.${P}`;let W=z;z.type.startsWith("image/")&&(W=await io(z,{maxWidth:1600,quality:.88}));const{error:R}=await se.storage.from("system-assets").upload(F,W,{upsert:!0,contentType:z.type});if(R)throw R;const{data:V}=se.storage.from("system-assets").getPublicUrl(F);U.value=V.publicUrl}catch(P){D("อัปโหลดล้มเหลว: "+P.message,"error"),U.value=""}finally{U.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{M(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{M(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const N=()=>f.remove();document.getElementById("ld-modal-close").onclick=N,document.getElementById("ld-btn-cancel").onclick=N,document.getElementById("ld-btn-save").onclick=async()=>{const O=document.getElementById("ld-btn-save");O.disabled=!0,O.textContent="กำลังบันทึก...";const U=document.getElementById("ld-head-cert-in").value.trim(),z=document.getElementById("ld-vice-cert-in").value.trim(),P=document.getElementById("ld-notes-in").value.trim();try{await xn(d.class_name,$,x,U,z,P),d.head_student_id=$,d.vice_head_student_id=x,d.head_cert_url=U,d.vice_head_cert_url=z,d.notes=P,D("บันทึกข้อมูลเรียบร้อยแล้ว","success"),N(),y()}catch(F){D("เกิดข้อผิดพลาด: "+F.message,"error"),O.disabled=!1,O.textContent="บันทึกข้อมูล"}}};await w(),y()}const jd=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:Vs,renderAnnouncements:er,renderAutoscaleHistory:tr,renderClasses:$a,renderClassroomLeaders:ur,renderClassroomsAdmin:Ws,renderCouncilRepNominationSummary:rr,renderCurriculum:it,renderDepartments:Ds,renderDeptTable:Ut,renderDonations:nr,renderFeedbackAdmin:or,renderHolidays:Rs,renderHomeroom:Hs,renderHouseColors:sr,renderImport:Ps,renderLifeSkillAdmin:zs,renderMyReligionGroup:ld,renderOverview:ba,renderPayments:Os,renderPeriods:Vt,renderPrayerAdmin:Us,renderReadingAdmin:Fs,renderRegisteredTeachers:Nt,renderReligionGroups:dr,renderRolePermissions:ar,renderScoreColConfig:Ns,renderSettings:ka,renderStudents:Ms,renderSubjectGroupRequests:pr,renderSubjectTable:Ea,renderSubjects:pt,renderSupervisorAnnouncements:rd,renderTeacherTable:Et,renderTeachers:As,renderUsageStats:Gs,renderWorkCalendar:lr,renderWorkCalendarView:nd},Symbol.toStringTag,{value:"Module"}));export{el as A,rr as B,ur as C,pr as D,or as E,nr as F,Cs as G,et as H,Ze as I,Ls as J,ml as K,Ue as L,nl as M,sr as N,ar as O,lr as P,pa as Q,tr as R,er as S,jd as T,dr as a,Ws as b,Gs as c,Vs as d,Ps as e,ka as f,Us as g,Fs as h,zs as i,Os as j,Rs as k,Nt as l,Ns as m,Hs as n,Vt as o,it as p,Ds as q,pt as r,Ms as s,$a as t,As as u,Zo as v,ba as w,Et as x,Ea as y,Ut as z};
