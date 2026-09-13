const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-Cf_Y4s92.js","assets/supabase-BV-W2lsh.js","assets/tutorial-ByeZ0chX.js","assets/teacher-views-utils-BWmONzsh.js","assets/ui-FQqAmrdo.js","assets/version.js_v_10.22-ffVTG8-v.js","assets/teacher-views-donor-chat-S4b33U06.js","assets/storage-D6nkcVz6.js","assets/teacher-DkO8mDLW.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sports-portals.js_v_10.22-D7ID6515.js","assets/impersonation-BOpkwoRR.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-BsRasLc4.js","assets/wen-sso-CcN06Rhh.js","assets/azfutsal-modal-3jBbVg9C.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-C8s-TuM0.js","assets/teacher-views-classes-dyQ0iCt1.js","assets/pp5-doc-DfU8adgJ.js","assets/teacher-views-grades-YSTUQyr0.js","assets/score-qr-scanner-eQmyTC7-.js","assets/teacher-views-attendance-3FnuSi2-.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-certificates-BF1vp8k7.js","assets/certificate-engine-R4UFir_Q.js","assets/certificate-editor-CnKFwhYE.js","assets/student-views-DYl1Vkbm.js","assets/student-api-GdZ3AenK.js","assets/quiz-api-DaBneRGn.js"])))=>i.map(i=>d[i]);
import{a as B,g as ae,_ as se,d as Bt,i as Va,s as Gt,b as Re,j as _t,k as Yt,l as $t}from"./ui-FQqAmrdo.js";import{getExecClassOverview as Ga,getDepartments as Be,getSystemConfig as ce,getTeachers as me,getLeavePermissionDashboard as Ya,getPendingSubjectGroupRequests as Wt,getAllAppFeedback as Kt,getAllPaymentRequests as Ee,deleteTeacher as Wa,getMasterSubjects as nt,deleteSubject as Ka,deleteDepartment as Qa,deletePeriod as Ja,updateTeacher as Xa,createTeacher as Za,updateDepartment as en,createDepartment as tn,upsertPeriod as an,upsertHoliday as nn,deleteHoliday as sn,getPeriods as rn,getCurriculumStandards as on,updateCurriculumStandard as ln,createCurriculumStandard as dn,importCurriculumStandards as cn,deleteCurriculumStandard as pn,getClasses as st,createSubject as un,updateSystemConfig as oe,deleteClass as Qt,getUniqueRooms as mn,getUniqueReligionRooms as Jt,deleteHomeroomTeacher as xn,getHomeroomTeachers as gt,getStudents as Ne,deleteStudent as gn,updateStudent as bn,getClassrooms as Tt,getScoreColumnConfig as yn,upsertScoreColumnConfig as fn,getReligionGroups as Ae,getSchoolHolidaysFull as hn,updateClassroom as vn,createClassroom as wn,getLifeSkillColumns as _n,getReadingScoreColumns as $n,getHouseGroups as kn,updateTeacherPosition as bt,deleteReligionGroup as En,updateReligionGroup as Sn,createReligionGroup as Ln,getReligionGroupMembers as In,getClassroomLeaders as Cn,deleteClassroom as Bn,fillLifeSkillScoresToClassScores as Tn,fillPrayerScoresToReligionClassScores as jn,assignStudentsHouseColor as jt,setReligionGroupMembers as An,getAllReadingScores as qn,deleteReadingScoreColumn as Mn,updateAllClassroomCertsToggle as Dn,getAllLifeSkillScores as Hn,deleteLifeSkillColumn as Rn,updateReadingScoreColumn as Pn,createReadingScoreColumn as Nn,getStudentsByReligionRoom as On,getPrayerRecordsByRoom as Fn,getStudentByCode as At,updateClassroomLeaders as zn,updateLifeSkillColumn as Un,createLifeSkillColumn as Vn,autoEnrollStudentsByRoom as Gn,getTeachersWithPositions as Yn,startNewSemester as Wn,getScheduleTeacherIds as Kn,mergeTeacherAccounts as Qn,unlinkTeacherAccount as Jn,getStats as Xn,getAllCouncilRepNominations as Zn,getRolePermissions as es,saveRolePermission as ts,getAllAnnouncements as Xt,getUsageStats as as,reviewPaymentRequest as Ke,approveTeacherQuota as lt,getAllSubjectGroupRequests as ns,setFeedbackRead as qt,setFeedbackCategory as ss,deleteAppFeedback as rs,advisorResetStudentPassword as os,markStudentPasswordResetNotice as ls,setFeedbackStatusReply as Mt,updateAnnouncement as dt,createAnnouncement as it,getAnnouncementCommentsBulk as ds,deleteAnnouncement as is,getPaymentSlipViewUrl as cs,getPrayerMonitoringData as ps,getLifeSkillMonitoringData as us,getReadingMonitoringData as ms,getCandidateClassesForGroupRequest as xs,approveSubjectGroupRequest as gs,rejectSubjectGroupRequest as bs,notifyFeedbackReply as ys,getAnnouncementComments as fs,deleteAnnouncementComment as hs,assignHomeroomTeacher as Zt,savePrayerCellAdmin as vs}from"./api-Cf_Y4s92.js";import{r as ws}from"./leave-monitor.js_v_10.18-Dilj5yL_.js";import{s as le}from"./supabase-BV-W2lsh.js";import{r as _s,a as $s,b as ks,c as Es,d as Ss,e as Ls,D as ct,h as Dt,i as pt,j as Is,S as Ht,s as Cs,C as Bs,k as Ts}from"./sports-portals.js_v_10.22-D7ID6515.js";import{u as js,a as Rt,p as ea,c as As,q as qs,j as Ms,o as ta}from"./storage-D6nkcVz6.js";import{_dateInputValue as Ds,applyReadingGradesFromConfig as Pt,_readingGrade as aa,READING_GRADES as De,_htmlEsc as he}from"./teacher-views-utils-BWmONzsh.js";import{r as Hs}from"./teacher-views-grades-YSTUQyr0.js";import{r as Rs,a as Ps,b as Ns,c as na}from"./teacher-views-classes-dyQ0iCt1.js";import{renderCourseForm as Os}from"./teacher-views-jqu-uPJr.js";import"./browser-JP79f-a9.js";import{i as Fs,a as zs,p as Us,b as Vs}from"./import-D0GLDW1_.js";import{a as sa}from"./theme-DIdoXkqD.js";import{f as Gs}from"./leave-time-CrS9gT63.js";import{A as Ys}from"./version.js_v_10.22-ffVTG8-v.js";import{b as Ws}from"./anti-pull-refresh-BGrI1pMY.js";import{o as Ks}from"./impersonation-BOpkwoRR.js";import{A as Qs,o as Js}from"./azfutsal-modal-3jBbVg9C.js";function Ve(t){if(!t||t.schemaVersion!==1||typeof t.enabled!="boolean"||!Array.isArray(t.periods))throw new Error("รูปแบบตารางเวลาไม่ถูกต้อง");if(t.periods.length>30)throw new Error("เพิ่มช่วงวันที่ได้ไม่เกิน 30 ช่วง");const s=n=>/^\d{4}-\d{2}-\d{2}$/.test(n)&&!Number.isNaN(Date.parse(n))&&new Date(n).toISOString().slice(0,10)===n;for(const n of t.periods){if(!s(n.startDate)||!s(n.endDate)||n.startDate>n.endDate)throw new Error("กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง");if(!Array.isArray(n.days)||n.days.length!==7)throw new Error("ต้องกำหนดเวลาครบทั้ง 7 วัน");for(const o of n.days){if(typeof o.enabled!="boolean")throw new Error("สถานะวันไม่ถูกต้อง");if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(o.start)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(o.end)||o.start>=o.end)throw new Error("เวลาเริ่มต้องก่อนเวลาสิ้นสุดภายในวันเดียวกัน")}}if(t.enabled&&!t.periods.some(n=>n.days.some(o=>o.enabled)))throw new Error("กรุณากำหนดอย่างน้อยหนึ่งวันก่อนเปิดใช้งาน");return t}function Xs(t,s=new Date){if(Ve(t),!t.enabled)return null;const n=new Date(s.getTime()+7*60*60*1e3),o=n.toISOString().slice(0,10),m=n.toISOString().slice(11,16),d=n.getUTCDay();return t.periods.some(w=>o>=w.startDate&&o<=w.endDate&&w.days[d].enabled&&m>=w.days[d].start&&m<w.days[d].end)?"ci_medium":"ci_micro"}const Nt=()=>({schemaVersion:1,enabled:!1,periods:[]}),Ot={ci_micro:.01344,ci_medium:.0822};function Zs(t,s){Ve({...t,enabled:!1});const n=new Date(`${s}T00:00:00Z`);if(Number.isNaN(n.getTime())||n.toISOString().slice(0,10)!==s)throw new Error("วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง");const o=a=>{const f=a.toISOString().slice(0,10),p=v=>Number(v.slice(0,2))*60+Number(v.slice(3)),e=t.periods.filter(v=>f>=v.startDate&&f<=v.endDate&&v.days[a.getUTCDay()].enabled).map(v=>v.days[a.getUTCDay()]).map(v=>[p(v.start),p(v.end)]).sort((v,I)=>v[0]-I[0]);let l=0,c=0;for(const[v,I]of e)c+=Math.max(0,I-Math.max(v,l)),l=Math.max(l,I);const i=c/60;return{mediumHours:i,usd:i*Ot.ci_medium+(24-i)*Ot.ci_micro}},m=(a,f)=>{let p=0,e=0;for(let l=0;l<f;l++){const c=o(new Date(a.getTime()+l*864e5));p+=c.usd,e+=c.mediumHours}return{usd:p,mediumHours:e,days:f}},d=new Date(n.getTime()-(n.getUTCDay()+6)%7*864e5),w=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1));return{day:m(n,1),week:m(d,7),month:m(w,new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0)).getUTCDate())}}const Qe=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],ye=t=>String(t??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]);async function ra(){document.querySelectorAll("[data-nav]").forEach(d=>{d.classList.toggle("bg-indigo-800",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-white",d.dataset.nav==="autoscale-settings"),d.classList.toggle("text-indigo-200",d.dataset.nav!=="autoscale-settings")}),document.getElementById("page-title").textContent="ตั้งค่ากำลังเครื่องฐานข้อมูล";const t=document.getElementById("main-content");t.innerHTML='<p class="p-6">กำลังโหลดตารางเวลา...</p>';let s,n={},o=new Date(Date.now()+7*36e5).toISOString().slice(0,10);try{const{data:d,error:w}=await le.from("system_config").select("key,value,updated_at").in("key",["autoscaleSchedule","autoscaleState"]);if(w)throw w;const a=d.find(p=>p.key==="autoscaleSchedule");s=a?Ve(JSON.parse(a.value)):Nt();const f=d.find(p=>p.key==="autoscaleState");n=f?{...JSON.parse(f.value),updatedAt:f.updated_at}:{}}catch(d){t.innerHTML=`<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${ye(d.message)}</p>`;return}const m=()=>{let d="ยังไม่บันทึก / กรุณาตรวจตารางเวลา";try{d=s.enabled?Xs(s)==="ci_medium"?"Medium":"Micro":"คงระดับเดิม"}catch{}t.innerHTML=`<div class="space-y-5 animate-fade">
      <div class="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>
        ${n.mode!=="schedule"?'<p class="mt-3 text-red-700">ยังไม่พบ backend ตารางเวลารุ่นใหม่ ต้องรัน patch_autoscale_schedule.sql และ deploy autoscale-tick ก่อนเปิดใช้งาน (push หน้าเว็บอย่างเดียวไม่เปลี่ยนระบบเดิม)</p>':""}
        <p class="text-sm text-gray-600 mt-2">กำลังเครื่องใช้ร่วมกันทั้งโรงเรียน ในช่วงที่กำหนดใช้ Medium นอกช่วงใช้ Micro ไม่ปรับตาม health check อีก</p>
        <p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับเดิม ไม่ใช่ปิดฐานข้อมูล การปรับอาจใช้เวลาหลายนาทีและทำให้การบันทึกสะดุด ควรเผื่อเวลาก่อนเริ่ม/หลังเลิกงาน</p>
        <p class="mt-3 font-semibold">สถานะตารางที่แสดง: ${s.enabled?"🟢 เปิดใช้งาน":"⚪ ปิดใช้งาน"} · เป้าหมายตามเวลาตอนนี้: ${d}</p>
        <p class="text-xs text-gray-500 mt-2">ระดับที่ระบบตรวจพบล่าสุด: ${ye(n.currentTier||"ยังไม่มีข้อมูลใหม่")} · ตรวจล่าสุด: ${n.updatedAt?ye(new Date(n.updatedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"—"}</p>
        <p class="text-xs text-gray-500 mt-1">${ye(n.lastAction||"ยังไม่มีการปรับ")} ${n.lastError?"· "+ye(n.lastError):""}</p>
        <p class="text-xs text-gray-500 mt-1">สถานะงาน: ${ye(n.status||"—")} · คำสั่งที่รอยืนยัน: ${ye(n.pendingTier||"ไม่มี")} · เว้นคำสั่งถึง: ${n.nextResizeAllowedAt?ye(new Date(n.nextResizeAllowedAt).toLocaleString("th-TH",{timeZone:"Asia/Bangkok"})):"—"}</p>
        <div class="flex gap-3 mt-4"><button id="as-enable" class="bg-green-700 text-white rounded-xl px-4 py-2">เปิดใช้งาน</button><button id="as-disable" class="bg-gray-700 text-white rounded-xl px-4 py-2">ปิดใช้งาน</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div>
      </div>
      <div class="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 class="font-bold">💰 ประมาณค่า Compute ตามตารางเมื่อเปิดใช้งาน</h2>
        <label class="block text-sm mt-3">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${o}" class="border rounded-lg p-2"></label>
        <div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div>
        <p class="text-xs text-gray-500 mt-3">รายวัน = วันที่เลือก · รายสัปดาห์ = จันทร์–อาทิตย์ของวันที่เลือก · รายเดือน = เดือนปฏิทินของวันที่เลือก คำนวณช่วงซ้อนกันครั้งเดียว</p>
        <p class="text-xs text-gray-500 mt-2">Micro $0.01344/ชั่วโมง · Medium $0.0822/ชั่วโมง (USD ตรวจราคา 13 ก.ย. 2026) ก่อนหักเครดิต ไม่รวมแพ็กเกจ ภาษี ดิสก์ และค่าใช้งานอื่น เป็นประมาณตามตาราง ไม่ใช่ยอดบิลจริง และไม่รวมความคลาดเคลื่อนจากรอบตรวจ/ระยะปรับเครื่อง <a class="underline" href="https://supabase.com/docs/guides/platform/compute-and-disk" target="_blank" rel="noopener noreferrer">ราคาจาก Supabase</a></p>
      </div>
      <form id="as-form" class="space-y-4">
        <div id="as-periods" class="space-y-4">${s.periods.map((p,e)=>`<section class="bg-white border rounded-2xl p-5 shadow-sm" data-period="${e}">
          <div class="flex flex-wrap gap-3 items-end"><label>วันที่เริ่ม<input required type="date" name="startDate" value="${ye(p.startDate)}" class="block border rounded-lg p-2"></label><label>วันที่สิ้นสุด<input required type="date" name="endDate" value="${ye(p.endDate)}" class="block border rounded-lg p-2"></label><button type="button" data-remove="${e}" class="text-red-600 border rounded-lg p-2">ลบช่วงนี้</button></div>
          <div class="mt-4 space-y-2">${p.days.map((l,c)=>`<div class="flex flex-wrap gap-3 items-center" data-day="${c}" data-enabled="${l.enabled}"><span class="w-20">${Qe[c]}</span><button type="button" data-day-action class="border rounded-lg px-3 py-2">${l.enabled?"ใช้งาน · ปิดวัน":"ไม่ใช้งาน · เปิดวัน"}</button><input aria-label="เวลาเริ่ม${Qe[c]}" type="time" required name="start" value="${ye(l.start)}" class="border rounded-lg p-2"><span>ถึง</span><input aria-label="เวลาสิ้นสุด${Qe[c]}" type="time" required name="end" value="${ye(l.end)}" class="border rounded-lg p-2"></div>`).join("")}</div>
        </section>`).join("")}</div>
        <p class="text-sm text-gray-500">เพิ่มได้หลายช่วงวันที่ ช่วงซ้อนกันจะใช้ Medium หากตรงกับช่วงใดช่วงหนึ่ง เวลาต้องเริ่มและสิ้นสุดภายในวันเดียวกัน</p>
        <div class="flex gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงวันที่</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div>
        <p class="text-xs text-gray-500">การตั้งค่าจะมีผลในรอบตรวจถัดไป (ปกติทุก 5 นาที) ไม่สั่งปรับเครื่องจากหน้านี้โดยตรง</p>
      </form>
    </div>`;const w=()=>({schemaVersion:1,enabled:s.enabled,periods:[...t.querySelectorAll("[data-period]")].map(p=>({startDate:p.querySelector("[name=startDate]").value,endDate:p.querySelector("[name=endDate]").value,days:[...p.querySelectorAll("[data-day]")].map(e=>({enabled:e.dataset.enabled==="true",start:e.querySelector("[name=start]").value,end:e.querySelector("[name=end]").value}))}))}),a=()=>{try{const p=Zs(w(),o);t.querySelector("#as-cost-tags").innerHTML=[["day","รายวัน"],["week","รายสัปดาห์"],["month","รายเดือน"]].map(([e,l])=>`<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${l} (${p[e].days} วัน)</span><strong>$${p[e].usd.toFixed(2)}</strong><span class="block text-xs">Medium ${p[e].mediumHours.toFixed(1)} ชั่วโมง</span></span>`).join("")}catch{t.querySelector("#as-cost-tags").textContent="กรุณากรอกวันที่และเวลาให้ครบเพื่อคำนวณ"}};t.querySelector("#as-cost-date").onchange=p=>{o=p.target.value,a()},t.querySelector("#as-form").addEventListener("input",a),a();const f=async p=>{try{let e=w();if(p===!1){const{data:c,error:i}=await le.from("system_config").select("value").eq("key","autoscaleSchedule").maybeSingle();if(i)throw i;e=c?Ve(JSON.parse(c.value)):Nt()}if(p!==void 0&&(e.enabled=p),e.enabled&&n.mode!=="schedule")throw new Error("กรุณาติดตั้ง SQL และ Edge Function รุ่นใหม่ก่อนเปิดใช้งาน");Ve(e),t.querySelectorAll("button").forEach(c=>c.disabled=!0);const{error:l}=await le.from("system_config").upsert({key:"autoscaleSchedule",value:JSON.stringify(e),updated_at:new Date().toISOString()},{onConflict:"key"});if(l)throw l;s=e,m(),B("บันทึกแล้ว มีผลในรอบตรวจถัดไป","success")}catch(e){B(ye(e.message),"error"),t.querySelectorAll("button").forEach(l=>l.disabled=!1)}};t.querySelector("#as-form").onsubmit=p=>{p.preventDefault(),f()},t.querySelector("#as-enable").onclick=()=>f(!0),t.querySelector("#as-disable").onclick=()=>f(!1),t.querySelector("#as-refresh").onclick=()=>{confirm("รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?")&&ra()},t.querySelector("#as-add").onclick=()=>{if(s=w(),s.periods.length>=30){B("เพิ่มได้ไม่เกิน 30 ช่วง","warning");return}const p=new Date(Date.now()+7*36e5).toISOString().slice(0,10);s.periods.push({startDate:p,endDate:p,days:Qe.map(()=>({enabled:!0,start:"07:00",end:"19:00"}))}),m()},t.querySelectorAll("[data-remove]").forEach(p=>p.onclick=()=>{s=w(),s.periods.splice(Number(p.dataset.remove),1),m()}),t.querySelectorAll("[data-day-action]").forEach(p=>p.onclick=()=>{const e=p.closest("[data-day]");e.dataset.enabled=e.dataset.enabled==="true"?"false":"true",p.textContent=e.dataset.enabled==="true"?"ใช้งาน · ปิดวัน":"ไม่ใช้งาน · เปิดวัน",a()})};m()}const pe=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function er(t){document.querySelectorAll("[data-nav]").forEach(s=>{const n=s.dataset.nav===t;s.classList.toggle("bg-indigo-800",n),s.classList.toggle("text-white",n),s.classList.toggle("text-indigo-200",!n)})}function ut(t){document.getElementById("main-content").innerHTML=t}const oa={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},tr={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},ar={doc:"📋",dates:"📅",att:"✅",score:"📝"},nr={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function Ue(t,s,n,o="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${o} rounded-lg ${tr[n]}" title="${s}">${t}</span>`}function Ie(t,s,n="w-8 h-8 text-base"){return Ue(ar[t],`${nr[t]}: ${oa[s]}`,s,n)}const sr={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function rr(t){return["AGM","AGMVOC"].includes(t)?"ศาสนา":t==="ACDMVOC"?"สามัญปวช":"สามัญ"}function or(t,s){const n=rr(t.subject_group);return s.find(o=>o.dept_code===t.dept&&o.category===n)??s.find(o=>o.dept_code===t.dept)??s.find(o=>o.dept_name===t.dept)??null}function lr(t,s){return t.dept?s.find(n=>n.dept_code===t.dept&&n.category===t.category)??s.find(n=>n.dept_code===t.dept)??null:null}function dr(t,s){return Math.round((new Date(t)-new Date(s))/864e5)}function ir(t,s){const n=t.has_doc_rows?"green":"red",o=t.has_teaching_dates?"green":"red";let m;if(!t.has_teaching_dates||t.day1_date&&t.day1_date>s)m="gray";else if(!t.last_check_date)m="red";else{const w=dr(s,t.last_check_date);m=w<=7?"green":w<=14?"yellow":"red"}let d;if(!t.score_col_count)d="gray";else{const w=t.student_count*t.score_col_count,a=w>0?t.score_filled_count/w:0;d=a>=.8?"green":a>0?"yellow":"red"}return{doc:n,dates:o,att:m,score:d}}function Fe(t){const s=t.filter(n=>n!=="gray");return s.length===0?"gray":s.includes("red")?"red":s.includes("yellow")?"yellow":"green"}function mt(t){return Object.values(t).some(s=>s==="red"||s==="yellow")}async function cr(){var V,K;er("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",ut(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let t,s,n,o,m;try{[t,s,n,o,m]=await Promise.all([Ga(),Be(),ce().catch(()=>({})),me(),Ya(60).catch(()=>null)])}catch(D){ut(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${pe(ae(D))}</p>
    </div>`);return}const d=n.academicYear??n.academic_year??"",w=n.semester??"",a=new Date().toISOString().slice(0,10),f=t.filter(D=>D.subject_id!=null).map(D=>{const z=or(D,s);return{...D,deptKey:(z==null?void 0:z.id)!=null?`d${z.id}`:`u_${D.dept??"-"}`,deptName:(z==null?void 0:z.dept_name)??D.dept??"ไม่ระบุกลุ่มสาระ",status:ir(D,a)}}),p=new Map;for(const D of f)p.has(D.deptKey)||p.set(D.deptKey,{deptName:D.deptName,rows:[]}),p.get(D.deptKey).rows.push(D);const e=[...p.entries()].map(([D,z])=>({key:D,...z})).sort((D,z)=>D.deptName.localeCompare(z.deptName,"th")),l=new Map;for(const D of f)D.teacher_id!=null&&(l.has(D.teacher_id)||l.set(D.teacher_id,[]),l.get(D.teacher_id).push(D));const c=o.filter(D=>D.staff_type==="ครู").map(D=>{const z=l.get(D.id)??[],F=D.profile_id!=null,U=z.length,Q=U>0?Fe(z.map(te=>te.status.att)):"gray";let X;if(z[0])X={key:z[0].deptKey,name:z[0].deptName};else{const te=lr(D,s);X=te?{key:`d${te.id}`,name:te.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let G;return F?U===0?G=2:Q==="red"?G=1.5:Q==="yellow"?G=1:G=0:G=3,{teacherId:D.id,teacherName:D.full_name,deptKey:X.key,deptName:X.name,registered:F,classCount:U,attWorst:Q,severity:G}}).sort((D,z)=>z.severity-D.severity||D.teacherName.localeCompare(z.teacherName,"th")),i=c.filter(D=>!D.registered).length,v=c.filter(D=>D.registered&&D.classCount===0).length,I=c.filter(D=>D.registered&&D.classCount>0&&(D.attWorst==="red"||D.attWorst==="yellow")).length,T=c.filter(D=>D.severity>0).length;function b(D){const z=f.filter(X=>X.status[D]!=="gray"),F=z.filter(X=>X.status[D]==="green").length,U=f.length-z.length;return{pct:z.length>0?Math.round(F/z.length*100):null,green:F,total:z.length,grayCount:U}}const _={doc:b("doc"),dates:b("dates"),att:b("att"),score:b("score")},q=c.length,A=c.filter(D=>D.registered).length,L=c.filter(D=>D.registered&&D.classCount>0).length,S=c.filter(D=>D.registered&&D.classCount>0&&D.attWorst==="green").length,k={registered:{pct:q>0?Math.round(A/q*100):null,num:A,total:q},courses:{pct:A>0?Math.round(L/A*100):null,num:L,total:A},attendance:{pct:L>0?Math.round(S/L*100):null,num:S,total:L}},H=f.filter(D=>mt(D.status)).length,$=f.length>0?Math.round(H/f.length*100):0;function x(){if(!m)return"";const D=m.rows||[],z=m.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},F=new Date,U=X=>X.status!=="active"?X.status==="returned"?"กลับแล้ว":"เลยเวลา":Gs(X.created_at,X.allowed_duration,F).text,Q=D.filter(X=>X.status==="active").slice(0,8);return`
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
        ${Q.length?`
          <div class="border-t border-gray-50 divide-y divide-gray-50">
            ${Q.map(X=>{var G,te,ee,de;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${pe(((G=X.students)==null?void 0:G.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${pe(((te=X.classes)==null?void 0:te.class_name)||((ee=X.students)==null?void 0:ee.main_room)||"—")} · ${pe(X.reason||"—")} · ${pe(((de=X.teachers)==null?void 0:de.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${U(X)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let y=null,g="attention",r="",u=null;const h={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function C(){return e.map(D=>{const z={doc:Fe(D.rows.map(Q=>Q.status.doc)),dates:Fe(D.rows.map(Q=>Q.status.dates)),att:Fe(D.rows.map(Q=>Q.status.att)),score:Fe(D.rows.map(Q=>Q.status.score))},F=D.rows.filter(Q=>mt(Q.status)).length,U=y===D.key;return`
        <button type="button" data-dept-key="${D.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${U?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${pe(D.deptName)}</h4>
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
        </button>`}).join("")}function M(){var U;const D=y?(U=e.find(Q=>Q.key===y))==null?void 0:U.deptName:null,z=g==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${D?`${z} · ${pe(D)}`:`${z} (ทั้งโรงเรียน)`}</h4>
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
        ${y?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function E(){let D=f;return g==="attention"&&(D=D.filter(z=>mt(z.status))),y&&(D=D.filter(z=>z.deptKey===y)),r&&(D=D.filter(z=>(z.class_name??"").toLowerCase().includes(r)||(z.subject_name??"").toLowerCase().includes(r)||(z.teacher_name??"").toLowerCase().includes(r))),D=[...D].sort((z,F)=>{const U=Q=>Object.values(Q).reduce((X,G)=>X+(G==="red"?2:G==="yellow"?1:0),0);return U(F.status)-U(z.status)}),D.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
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
                  <p class="font-medium text-gray-700">${pe(z.class_name)}</p>
                  <p class="text-xs text-gray-400">${pe(z.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${pe(z.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${pe(z.deptName)}</td>
                <td class="px-4 py-2 text-center">${Ie("doc",z.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ie("att",z.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ie("score",z.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ie("dates",z.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function j(){let D=c;u==="unregistered"?D=D.filter(U=>!U.registered):u==="no-courses"?D=D.filter(U=>U.registered&&U.classCount===0):u==="att-behind"?D=D.filter(U=>U.registered&&U.classCount>0&&(U.attWorst==="red"||U.attWorst==="yellow")):g==="attention"&&(D=D.filter(U=>U.severity>0)),y&&(D=D.filter(U=>U.deptKey===y)),r&&(D=D.filter(U=>(U.teacherName??"").toLowerCase().includes(r)));const z=u?`${h[u]} (${D.length} คน)`:g==="all"?`ครูผู้สอนทั้งหมด (${D.length}/${c.length} คน)`:`ครูที่ต้องติดตาม (${D.length} คน)`,F=D.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
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
                  <td class="px-4 py-2 font-medium text-gray-700">${pe(U.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${pe(U.deptName)}</td>
                  <td class="px-4 py-2 text-center">${Ue("🔑",U.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",U.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Ue("📚",U.classCount>0?`มีวิชา/ห้องที่สอน ${U.classCount} ห้อง`:U.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",U.classCount>0?"green":U.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${U.classCount>0?Ue("✅",`เช็คชื่อ: ${oa[U.attWorst]}`,U.attWorst,"w-7 h-7 text-sm"):Ue("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
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
      ${F}`}function R({icon:D,label:z,info:F,pct:U,numerator:Q,denominator:X,unit:G="ห้อง",extraNote:te="",filterKey:ee=null,active:de=!1}){const ge=U==null?"text-gray-400":U>=80?"text-emerald-700":U>=50?"text-amber-600":"text-red-600",ve=ee?"button":"div",Te=ee?' type="button"':"",Ye=ee?` data-teacher-filter="${ee}"`:"";return`
      <${ve}${Te}${Ye} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${ee?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${de?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${pe(F)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${D}</div>
          <p class="text-sm font-semibold text-gray-600">${z} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${ge}">${U==null?"—":U+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${X>0?`${Q}/${X} ${G}`:"ไม่มีข้อมูล"}${te}</p>
        ${ee?`<p class="text-[10px] text-indigo-400 mt-1">${de?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${ve}>`}function N(D,z,F){const U=_[F];return R({icon:D,label:z,info:sr[F],pct:U.pct,numerator:U.green,denominator:U.total,unit:"ห้อง",extraNote:U.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${U.grayCount}</span>`:""})}function O(D,z,F,U,Q="",X=null){return R({icon:D,label:z,info:F,pct:U.pct,numerator:U.num,denominator:U.total,unit:"คน",extraNote:Q,filterKey:X,active:u===X})}function J(){return`
      ${O("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",k.registered,i>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${i}</span>`:"","unregistered")}
      ${O("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",k.courses,v>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${v}</span>`:"","no-courses")}
      ${O("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",k.attendance,I>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${I}</span>`:"","att-behind")}`}function W(){var D,z,F;document.querySelectorAll(".exec-dept-card").forEach(U=>{U.addEventListener("click",()=>{var X;const Q=U.dataset.deptKey;y===Q?(y=null,g="attention"):(y=Q,g="all"),P(),(X=document.getElementById("exec-table-section"))==null||X.scrollIntoView({behavior:"smooth",block:"start"})})}),(D=document.getElementById("exec-clear-filter"))==null||D.addEventListener("click",()=>{y=null,g="attention",P()}),(z=document.getElementById("exec-toggle-scope"))==null||z.addEventListener("click",()=>{g=g==="all"?"attention":"all",P()}),document.querySelectorAll("[data-teacher-filter]").forEach(U=>{U.addEventListener("click",()=>{var X;const Q=U.dataset.teacherFilter;u=u===Q?null:Q,y=null,r="",P(),(X=document.getElementById("exec-teacher-section"))==null||X.scrollIntoView({behavior:"smooth",block:"start"})})}),(F=document.getElementById("exec-teacher-clear-filter"))==null||F.addEventListener("click",()=>{u=null,P()})}function P(){document.getElementById("exec-teacher-kpi").innerHTML=J(),document.getElementById("exec-dept-cards").innerHTML=C(),document.getElementById("exec-table-header").innerHTML=M(),document.getElementById("exec-class-table").innerHTML=E(),document.getElementById("exec-teacher-section").innerHTML=j();const D=document.getElementById("exec-dept-select");D&&(D.value=y??"");const z=document.getElementById("exec-search");z&&(z.value=r),W()}ut(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${d?`ปีการศึกษา ${pe(d)}`:""}${w?` ภาคเรียนที่ ${pe(w)}`:""}${d||w?" · ":""}ทั้งหมด ${f.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${H>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${H} ห้อง</b> (${$}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${T>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${T} คน</b> ที่ต้องติดตาม
        ${i>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${i}</b> คน`:""}
        ${v>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${v}</b> คน`:""}
        ${I>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${I}</b> คน`:""}
      </p>`:`
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${J()}
    </div>

    ${x()}

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
      ${C()}
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
        ${e.map(D=>`<option value="${D.key}">${pe(D.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${M()}
      </div>
      <div id="exec-class-table">${E()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${j()}
    </div>
  </div>`),(V=document.getElementById("exec-search"))==null||V.addEventListener("input",D=>{r=D.target.value.trim().toLowerCase(),P()}),(K=document.getElementById("exec-dept-select"))==null||K.addEventListener("change",D=>{y=D.target.value||null,g=y?"all":"attention",P()}),W()}const pr="regrade.html",ur=()=>{const t=new URL(pr,window.location.href);return t.searchParams.set("v",Qs),t.href},et=(t,s)=>{t&&(t.textContent=s,clearTimeout(t._regradeStatusTimer),t._regradeStatusTimer=setTimeout(()=>{t.textContent=""},1800))},mr=async(t,s)=>{try{await navigator.clipboard.writeText(t),et(s,"คัดลอกลิงก์แล้ว")}catch{et(s,"คัดลอกไม่สำเร็จ")}},xr=async(t,s)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:t});return}await navigator.clipboard.writeText(t),et(s,"คัดลอกลิงก์แล้ว")}catch{et(s,"แชร์ไม่สำเร็จ")}};function gr(){var w,a,f,p;(w=document.getElementById("regrade-modal"))==null||w.remove();const t=ur(),s=document.body.style.overflow;document.body.style.overflow="hidden";const n=document.createElement("div");n.id="regrade-modal",n.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",n.innerHTML=`
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
    <iframe src="${t}" class="flex-1 w-full border-0 bg-white" title="แก้ค้างเก่า"></iframe>
  `;const o=()=>{document.removeEventListener("keydown",m),document.body.style.overflow=s,n.remove(),window.closeRegradeModal===o&&(window.closeRegradeModal=null)},m=e=>{e.key==="Escape"&&o()};document.addEventListener("keydown",m),document.body.appendChild(n),window.closeRegradeModal=o;const d=n.querySelector("[data-regrade-status]");(a=n.querySelector("[data-regrade-close]"))==null||a.addEventListener("click",o),(f=n.querySelector("[data-regrade-copy]"))==null||f.addEventListener("click",()=>mr(t,d)),(p=n.querySelector("[data-regrade-share]"))==null||p.addEventListener("click",()=>xr(t,d))}async function br(){Gt(!0);const{data:{session:t}}=await le.auth.getSession();if(!t)return window.location.replace("index.html"),null;const{data:s,error:n}=await le.from("profiles").select("role, is_also_admin").eq("id",t.user.id).maybeSingle();return n||(s==null?void 0:s.role)!=="admin"&&!(s!=null&&s.is_also_admin)?(B("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):t}async function yr(t){try{const{data:s}=await le.from("profiles").select("role, user_code").eq("id",t).maybeSingle();let n="ผู้ใช้งาน";if((s==null?void 0:s.role)==="teacher"||(s==null?void 0:s.role)==="admin"){const{data:m}=await le.from("teachers").select("full_name").eq("profile_id",t).maybeSingle();n=(m==null?void 0:m.full_name)??(s==null?void 0:s.user_code)??"ผู้ใช้งาน"}const o=(s==null?void 0:s.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=n,document.getElementById("user-role").textContent=o,document.getElementById("user-avatar").textContent=n.charAt(0).toUpperCase()}catch{}}async function fr(t){const s=document.getElementById("header-switch-slot");if(!s)return;s.innerHTML="";const{data:n}=await le.from("profiles").select("is_also_admin").eq("id",t).maybeSingle();if(!(n!=null&&n.is_also_admin))return;const o=document.createElement("a");o.id="btn-switch-teacher",o.href="teacher.html",o.title="สลับไปหน้าครู",o.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",o.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",s.appendChild(o)}async function hr(){await le.auth.signOut(),B("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function vr(t=null){var n,o,m;const s=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(n=window._clearPositionRows)==null||n.call(window),document.getElementById("modal-title").textContent=t?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:d}=await se(async()=>{const{getDepartments:f}=await import("./api-Cf_Y4s92.js");return{getDepartments:f}},__vite__mapDeps([0,1])),w=await d(),a=document.getElementById("modal-position-dept");a.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+w.map(f=>`<option value="${f.id}">${f.dept_name}</option>`).join("")}catch{}if(t)try{const{data:d}=await(await se(async()=>{const{supabase:a}=await import("./supabase-BV-W2lsh.js").then(f=>f.a);return{supabase:a}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",t).single();document.getElementById("modal-id").value=d.id,document.getElementById("modal-code").value=d.teacher_code??"",document.getElementById("modal-name").value=d.full_name??"",document.getElementById("modal-category").value=d.category??"",document.getElementById("modal-phone").value=d.phone??"",document.getElementById("modal-login-email").value=d.login_email??"",document.getElementById("modal-username").value=d.username??"",document.getElementById("modal-image-url").value=d.image_url??"";const w=(o=d.positions)!=null&&o.length?d.positions:d.position?[d.position]:[];(m=window._setPositionRows)==null||m.call(window,w),w.includes("dept_head")&&(document.getElementById("modal-position-dept").value=d.position_dept_id??""),la(d.image_url,d.full_name)}catch{B("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex"),document.getElementById("modal-name").focus()}function yt(){const t=document.getElementById("teacher-modal");t.classList.add("hidden"),t.classList.remove("flex")}async function wr(t){var f,p,e;t.preventDefault();const s=document.getElementById("modal-save-btn"),n=document.getElementById("modal-id").value,o=document.getElementById("modal-username").value.trim().toLowerCase();if(o&&!/^[a-z0-9._-]{3,32}$/.test(o)){B("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const m=((f=window._getPositionValues)==null?void 0:f.call(window))??[],d=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],w=m.find(l=>!d.includes(l))||null,a={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:o||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:w,positions:m,position_dept_id:m.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!a.full_name){B("กรุณากรอกชื่อ-นามสกุล","warning");return}Re(s,!0);try{const l=(e=(p=document.getElementById("modal-photo-file"))==null?void 0:p.files)==null?void 0:e[0];if(l){const c=n||`new_${Date.now()}`;a.image_url=await js(c,l)}n?await Xa(Number(n),a):await Za(a),B("บันทึกข้อมูลสำเร็จ","success"),yt(),Ge(await me())}catch(l){B("บันทึกไม่สำเร็จ: "+ae(l),"error")}finally{Re(s,!1)}}async function _r(t,s){if(confirm(`ยืนยันการลบ "${s}" ออกจากระบบ?`))try{await Wa(Number(t)),B(`ลบ "${s}" แล้ว`,"success"),Ge(await me())}catch{B("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function la(t,s){const n=document.getElementById("modal-avatar-preview");n&&(t?n.innerHTML=`<img src="${t}" class="w-full h-full object-cover" />`:n.innerHTML=(s??"?").charAt(0).toUpperCase())}async function $r(t=null){const s=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=t?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(n=>{document.getElementById(n).value=""}),document.getElementById("sub-skill-group").value="",t)try{const o=(await nt()).find(m=>m.id===t);o&&(document.getElementById("sub-id").value=o.id,document.getElementById("sub-code").value=o.subject_code??"",document.getElementById("sub-name").value=o.subject_name??"",document.getElementById("sub-dept").value=o.dept??"",document.getElementById("sub-grade").value=o.grade_level??"",document.getElementById("sub-credit").value=o.credit??"",document.getElementById("sub-learning-area").value=o.learning_area??"",document.getElementById("sub-skill-group").value=o.skill_group??"")}catch{B("โหลดข้อมูลไม่สำเร็จ","error")}s.classList.replace("hidden","flex")}async function kr(t,s){if(confirm(`ยืนยันลบวิชา "${s}"?`))try{await Ka(Number(t)),B(`ลบ "${s}" แล้ว`,"success"),It(await nt())}catch{B("ลบไม่สำเร็จ","error")}}async function Er(t=null){const s=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(c=>{const i=document.getElementById(c);i&&(i.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const n=document.getElementById("dept-selected-teacher");n.classList.add("hidden"),n.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=t?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let o=[];try{o=await me()}catch{}const m=document.getElementById("dept-teacher-code-input"),d=document.getElementById("dept-teacher-search"),w=document.getElementById("dept-teacher-dropdown"),a=document.getElementById("dept-selected-teacher"),f=document.getElementById("dept-selected-name"),p=document.getElementById("dept-clear-teacher"),e=c=>{document.getElementById("dept-teacher-code").value=c?c.teacher_code??"":"",c?(m.value=c.teacher_code??"",d.value=c.full_name??"",f.textContent=`${c.full_name}${c.teacher_code?` (${c.teacher_code})`:""}`,a.classList.remove("hidden"),a.classList.add("flex")):(m.value="",d.value="",a.classList.add("hidden"),a.classList.remove("flex")),w.classList.add("hidden")},l=c=>{w.innerHTML=c.length?c.map(i=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${i.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${i.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${i.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',w.querySelectorAll(".teacher-option").forEach(i=>{i.addEventListener("mousedown",v=>{v.preventDefault(),e(o.find(I=>String(I.id)===i.dataset.id))})}),w.classList.remove("hidden")};if(m.oninput=()=>{const c=m.value.trim().toLowerCase();if(!c){e(null);return}const i=o.find(v=>(v.teacher_code??"").toLowerCase()===c);if(i)e(i);else{const v=o.filter(I=>(I.teacher_code??"").toLowerCase().startsWith(c));v.length&&l(v)}},d.onfocus=()=>l(o),d.oninput=()=>{const c=d.value.toLowerCase();l(c?o.filter(i=>i.full_name.toLowerCase().includes(c)||(i.teacher_code??"").toLowerCase().includes(c)):o)},d.onblur=()=>setTimeout(()=>w.classList.add("hidden"),150),p==null||p.addEventListener("click",()=>e(null)),t)try{const i=(await Be()).find(v=>v.id===t);if(i){document.getElementById("dept-id").value=i.id,document.getElementById("dept-code").value=i.dept_code??"",document.getElementById("dept-name").value=i.dept_name??"",document.getElementById("dept-teacher-code").value=i.teacher_code??"",document.getElementById("dept-photo-url").value=i.head_photo_url??"",document.getElementById("dept-sign-url").value=i.head_sign_url??"";const v=document.getElementById("dept-category");if(v&&(v.value=i.category??""),i.teacher_code){const I=o.find(T=>T.teacher_code===i.teacher_code);I&&e(I)}i.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${i.head_photo_url}" class="w-full h-full object-cover" />`),i.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${i.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{B("โหลดข้อมูลไม่สำเร็จ","error");return}s.classList.remove("hidden"),s.classList.add("flex")}function Xe(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function Sr(t){var d,w,a,f,p,e,l,c;t.preventDefault();const s=document.getElementById("dept-save-btn"),n=document.getElementById("dept-id").value,o=document.getElementById("dept-code").value.trim().toUpperCase(),m=document.getElementById("dept-name").value.trim();if(!o||!m){B("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}Re(s,!0);try{const i=document.getElementById("dept-teacher-code").value||null,v=i?((a=(w=(d=document.getElementById("dept-selected-name"))==null?void 0:d.textContent)==null?void 0:w.split(" (")[0])==null?void 0:a.trim())??null:null,I={dept_code:o,dept_name:m,head_name:v,teacher_code:i,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((f=document.getElementById("dept-category"))==null?void 0:f.value)||null},T=(e=(p=document.getElementById("dept-photo-file"))==null?void 0:p.files)==null?void 0:e[0];T&&(I.head_photo_url=await Rt(o,"photo",T));const b=(c=(l=document.getElementById("dept-sign-file"))==null?void 0:l.files)==null?void 0:c[0];b&&(I.head_sign_url=await Rt(o,"sign",b)),n?await en(Number(n),I):await tn(I),B("บันทึกสำเร็จ","success"),Xe(),rt(await Be())}catch(i){B("บันทึกไม่สำเร็จ: "+ae(i),"error")}finally{Re(s,!1)}}async function Lr(t,s){if(confirm(`ยืนยันลบกลุ่มสาระ "${s}"?`))try{await Qa(Number(t)),B(`ลบ "${s}" แล้ว`,"success"),rt(await Be())}catch{B("ลบไม่สำเร็จ","error")}}function Ir(t=null){var o,m,d;const s=document.getElementById("period-modal"),n=t?((o=window._periodsCache)==null?void 0:o[t])??null:null;document.getElementById("period-id").value=t??"",document.getElementById("period-no").value=(n==null?void 0:n.period_no)??"",document.getElementById("period-start").value=((m=n==null?void 0:n.start_time)==null?void 0:m.slice(0,5))??"",document.getElementById("period-end").value=((d=n==null?void 0:n.end_time)==null?void 0:d.slice(0,5))??"",document.getElementById("period-modal-title").textContent=t?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",s.classList.remove("hidden"),s.classList.add("flex")}function Ze(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function Cr(t){t.preventDefault();const s=document.getElementById("period-save-btn"),n=document.getElementById("period-id").value,o={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!o.period_no||!o.start_time||!o.end_time){B("กรุณากรอกข้อมูลให้ครบ","warning");return}n&&(o.id=Number(n)),Re(s,!0);try{await an(o),B("บันทึกสำเร็จ","success"),Ze(),ot()}catch(m){B("บันทึกไม่สำเร็จ: "+ae(m),"error")}finally{Re(s,!1)}}async function Br(t){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await Ja(Number(t)),B("ลบแล้ว","success"),ot()}catch{B("ลบไม่สำเร็จ","error")}}async function ft(){try{const s=(await Ee()).filter(o=>o.status==="pending").length,n=document.getElementById("badge-payments");if(!n)return;s>0?(n.textContent=s>9?"9+":s,n.classList.remove("hidden"),n.classList.add("flex")):(n.classList.add("hidden"),n.classList.remove("flex"))}catch{}}async function ht(){try{const s=(await Kt()).filter(o=>!o.is_read).length,n=document.getElementById("badge-feedback");if(!n)return;s>0?(n.textContent=s>9?"9+":s,n.classList.remove("hidden"),n.classList.add("flex")):(n.classList.add("hidden"),n.classList.remove("flex"))}catch{}}async function vt(){try{const t=await Wt(),s=document.getElementById("badge-subject-group");if(!s)return;t.length>0?(s.textContent=t.length>9?"9+":t.length,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}window._refreshSubjectGroupBadge=vt;window._refreshFeedbackBadge=ht;window._refreshPaymentBadge=ft;window._goBack=()=>Pe();window.openTeacherModal=vr;window.handleDeleteTeacher=_r;window.openSubjectModal=$r;window.handleDeleteSubject=kr;window.openDeptModal=Er;window.handleDeleteDept=Lr;window.openPeriodModal=Ir;window.handleDeletePeriod=Br;window._adminViewSchedule=async(t,s)=>{var p;(p=document.getElementById("admin-sched-overlay"))==null||p.remove();const{getSystemConfig:n}=await se(async()=>{const{getSystemConfig:e}=await import("./api-Cf_Y4s92.js");return{getSystemConfig:e}},__vite__mapDeps([0,1])),o=await n().catch(()=>({})),m=parseInt(o.academicYear??2568),d=parseInt(o.semester??1),w=document.createElement("div");w.id="admin-sched-overlay",w.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",w.innerHTML=`
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-5 h-14 flex items-center gap-4 flex-shrink-0 shadow-sm">
      <button id="aso-close"
        class="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 font-medium transition">
        ← กลับ
      </button>
      <div class="w-px h-5 bg-gray-200"></div>
      <div>
        <p class="text-sm font-bold text-gray-800">🗓️ ตารางสอน — ${s}</p>
        <p class="text-xs text-gray-400">ภาค ${d} / ${m} · แก้ไขได้</p>
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
    </div>`,document.body.appendChild(w),w.querySelector("#aso-close").addEventListener("click",()=>w.remove());const a=w.querySelector("#aso-content"),f=document.getElementById("main-content");f&&(f.id="main-content-bak"),a.id="main-content";try{await Rs({id:t,full_name:s},m,d,o)}finally{a.id="aso-content",f&&(f.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var e,l,c,i,v,I,T,b,_,q,A,L,S,k,H,$,x;Ws();const t=await br();if(!t)return;await sa("admin");const s=document.getElementById("app-version");s&&(s.textContent=`v${Ys}`,s.classList.add("cursor-pointer","hover:underline"),s.addEventListener("click",()=>Bt(t.user.id,!0,!0))),(e=t==null?void 0:t.user)!=null&&e.id&&Bt(t.user.id,!1,!0),Va(),(l=document.getElementById("btn-logout"))==null||l.addEventListener("click",hr);const n=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],o=()=>'<option value="">— ไม่มี —</option>'+n.map(y=>`<optgroup label="${y.label}">${y.options.map(g=>`<option value="${g.value}">${g.label}</option>`).join("")}</optgroup>`).join("");function m(){const y=[...document.querySelectorAll(".pos-row-sel")].map(g=>g.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!y.includes("dept_head"))}function d(){const y=[...document.querySelectorAll(".pos-row-sel")],g=y.map(r=>r.value).filter(Boolean);y.forEach(r=>{[...r.options].forEach(u=>{u.value&&(u.disabled=g.includes(u.value)&&r.value!==u.value)})})}function w(y=""){const g=document.getElementById("modal-positions-list"),r=document.createElement("div");r.className="pos-row flex items-center gap-2",r.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${o()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,r.querySelector(".pos-row-sel").value=y,r.querySelector(".pos-row-sel").addEventListener("change",()=>{m(),d()}),r.querySelector(".pos-row-del").addEventListener("click",()=>{r.remove(),m(),d()}),g.appendChild(r),m(),d()}window._addPositionRow=w,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",w(),m()},window._setPositionRows=y=>{document.getElementById("modal-positions-list").innerHTML="",(y!=null&&y.length?y:[""]).forEach(r=>w(r)),m()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(y=>y.value).filter(Boolean),(c=document.getElementById("btn-add-position"))==null||c.addEventListener("click",()=>w()),w(),(i=document.getElementById("modal-close"))==null||i.addEventListener("click",yt),(v=document.getElementById("modal-backdrop"))==null||v.addEventListener("click",yt),(I=document.getElementById("teacher-form"))==null||I.addEventListener("submit",wr),(T=document.getElementById("modal-photo-file"))==null||T.addEventListener("change",y=>{const g=y.target.files[0];g&&la(URL.createObjectURL(g),"")}),(b=document.getElementById("dept-modal-close"))==null||b.addEventListener("click",Xe),(_=document.getElementById("dept-modal-backdrop"))==null||_.addEventListener("click",Xe),(q=document.getElementById("dept-modal-cancel"))==null||q.addEventListener("click",Xe),(A=document.getElementById("dept-form"))==null||A.addEventListener("submit",Sr),(L=document.getElementById("dept-photo-file"))==null||L.addEventListener("change",y=>{const g=y.target.files[0];g&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL(g)}" class="w-full h-full object-cover" />`)}),(S=document.getElementById("dept-sign-file"))==null||S.addEventListener("change",y=>{const g=y.target.files[0];g&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL(g)}" class="w-full h-full object-contain" />`)}),(k=document.getElementById("period-modal-close"))==null||k.addEventListener("click",Ze),(H=document.getElementById("period-modal-backdrop"))==null||H.addEventListener("click",Ze),($=document.getElementById("period-modal-cancel"))==null||$.addEventListener("click",Ze),(x=document.getElementById("period-form"))==null||x.addEventListener("submit",Cr),await yr(t.user.id),fr(t.user.id);const a={overview:wt,"exec-overview":cr,teachers:ca,classes:Lt,students:pa,departments:ma,subjects:Pe,curriculum:He,periods:ot,homeroom:xa,"score-col-config":ga,"registered-teachers":tt,holidays:ba,payments:fa,"life-skill-admin":ha,"reading-admin":va,"prayer-admin":wa,settings:ua,import:ya,"admin-profile":_a,"usage-stats":$a,"classrooms-admin":ka,"course-doc-lang":()=>Ps(null,!0),announcements:()=>Ta(),"autoscale-history":()=>ja(),"autoscale-settings":()=>ra(),"work-calendar":()=>Ra(null),"role-permissions":()=>Aa(),"religion-groups":Pa,"tutorial-admin":()=>se(async()=>{const{renderTutorialAdmin:y}=await import("./tutorial-ByeZ0chX.js");return{renderTutorialAdmin:y}},__vite__mapDeps([2,0,1,3,4,5])).then(({renderTutorialAdmin:y})=>y()),"house-colors":()=>qa(),"sports-admin":()=>Ks({admin:!0}),azfutsal:()=>Js(),regrade:()=>gr(),"sports-shirt-summary":()=>Ls(),"sports-fund-admin":()=>Ss(),"sports-overview-admin":()=>Es(),"sports-evaluation":()=>ks(),"shirt-vote-settings":()=>$s(),"shirt-vote-dashboard":()=>_s(),donations:()=>Da(),"feedback-admin":()=>Ha(),"subject-group-requests":()=>Fa(),"donor-chat-admin":()=>se(()=>import("./teacher-views-donor-chat-S4b33U06.js"),__vite__mapDeps([6,4,5,0,1,3,7,8,9,10,11,12,13,14,15,16,17,2,18,19])).then(y=>y.renderDonorChatAdmin()),"student-qr-print":()=>se(()=>import("./teacher-views-classes-dyQ0iCt1.js").then(y=>y.t),__vite__mapDeps([20,4,5,0,1,10,11,12,7,21,3,22,19,23,24,25,26])).then(y=>y.renderStudentQRPrint(null,null)),"classroom-leaders":()=>za(),"council-rep-nominations":()=>Ma(),certificates:()=>se(()=>import("./teacher-views-certificates-BF1vp8k7.js"),__vite__mapDeps([27,4,5,28,1,7,29,3])).then(async y=>{const{getMyTeacherProfile:g}=await se(async()=>{const{getMyTeacherProfile:u}=await import("./api-Cf_Y4s92.js");return{getMyTeacherProfile:u}},__vite__mapDeps([0,1])),r=await g(t.user.id).catch(()=>null);return y.renderCertificateManager(r)})};document.querySelectorAll("[data-nav]").forEach(y=>{y.addEventListener("click",g=>{var u,h;g.preventDefault();const r=y.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}a[r]&&a[r](),(u=document.getElementById("sidebar"))==null||u.classList.add("-translate-x-full"),(h=document.getElementById("sidebar-overlay"))==null||h.classList.add("hidden")})}),ft(),setInterval(ft,6e4),ht(),setInterval(ht,6e4),vt(),setInterval(vt,6e4),Gt(!1),window._adminNav=y=>{a[y]&&a[y]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>a["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>a["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>a["shirt-vote-dashboard"]());const f=new URLSearchParams(location.search),p=f.get("view");p&&a[p]?(window._pendingQRTab=f.get("tab")||null,a[p]()):await wt()});function Se(t){if(!t)return"";const s=t.indexOf("/");return s>0?t.slice(0,s).trim():t.trim()}function qe(t){if(!t)return"";const s=t.indexOf("/");return s>0?t.slice(s+1).trim():""}function ue(t){return[...new Set(t.filter(Boolean))].sort()}const ie="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",_e="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",$e=t=>String(t??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),Y=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function re(t){document.querySelectorAll("[data-nav]").forEach(s=>{s.classList.toggle("bg-indigo-800",s.dataset.nav===t),s.classList.toggle("text-white",s.dataset.nav===t),s.classList.toggle("text-indigo-200",s.dataset.nav!==t)})}function ne(t){document.getElementById("main-content").innerHTML=t}async function wt(){re("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ",ne(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-8 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">ยินดีต้อนรับเข้าสู่ระบบ ปพ.5 👋</h3>
      <p class="text-gray-500 text-sm">จัดการข้อมูลครู นักเรียน และห้องเรียนได้จากเมนูด้านซ้าย</p>
    </div>

    <!-- สถิติหลัก -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4" id="stat-grid">
      ${["teachers","students","classes","subjects","prayer"].map(t=>`
        <button type="button" onclick="window._adminNav?.('${t==="classes"?"classrooms-admin":t==="prayer"?"prayer-admin":t}')"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 text-left
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl
            ${t==="teachers"?"bg-indigo-100":t==="students"?"bg-purple-100":t==="classes"?"bg-blue-100":t==="subjects"?"bg-green-100":"bg-rose-100"}">
            ${{teachers:"👩‍🏫",students:"👦",classes:"🏫",subjects:"📚",prayer:"🕌"}[t]}
          </div>
          <div>
            <p class="text-xs text-gray-500">${{teachers:"ครูผู้สอน",students:"นักเรียน",classes:"ห้องเรียน",subjects:"รายวิชา",prayer:"คะแนนละหมาด"}[t]}</p>
            <p id="stat-${t}" class="text-2xl font-bold
              ${t==="teachers"?"text-indigo-700":t==="students"?"text-purple-700":t==="classes"?"text-blue-700":t==="subjects"?"text-green-700":"text-rose-700"}">—</p>
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
  </div>`);try{const[t,s,n]=await Promise.all([Xn(),Ee().catch(()=>[]),me().catch(()=>[])]);Object.entries(t).forEach(([i,v])=>{const I=document.getElementById(`stat-${i}`);I&&(I.textContent=v.toLocaleString())});const o=n.filter(i=>i.profile_id).length,m=n.length-o,d=document.getElementById("stat-registered"),w=document.getElementById("stat-unregistered");d&&(d.textContent=o),w&&(w.textContent=m);const a=s.filter(i=>i.status==="pending"),f=document.getElementById("pending-payments-list");f&&(a.length?f.innerHTML=a.slice(0,3).map(i=>{var v;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((v=i.teachers)==null?void 0:v.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${i.package_type==="semester"?`เหมาทั้งเทอม ${i.amount??299} บ.`:`รายห้อง ${parseInt(i.room_count??1)||1} ห้อง ${i.amount??49} บ.`} · ${new Date(i.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(a.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${a.length-3} รายการ</p>`:""):f.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const p=document.getElementById("training-todo-shell");if(p)try{const{getAllAnnouncements:i,getAnnouncementRsvps:v}=await se(async()=>{const{getAllAnnouncements:_,getAnnouncementRsvps:q}=await import("./api-Cf_Y4s92.js");return{getAllAnnouncements:_,getAnnouncementRsvps:q}},__vite__mapDeps([0,1])),I=await i(),T=new Date().toISOString().slice(0,10),b=I.filter(_=>_.ann_type==="training"&&_.is_active&&_.event_date>=T).sort((_,q)=>_.event_date.localeCompare(q.event_date));if(b.length){const _=await Promise.all(b.map(L=>v(L.id).catch(()=>[]))),q=L=>new Date(L+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),A=L=>String(L??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");p.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${b.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${b.map((L,S)=>{var g;const k=_[S]??[],H=k.filter(r=>r.response==="yes").length,$=k.filter(r=>r.response==="maybe").length,x=k.filter(r=>r.response==="no").length,y=k.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${A(L.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${q(L.event_date)}
                        ${(g=L.event_periods)!=null&&g.length?` · 🕐 คาบ ${L.event_periods.sort((r,u)=>r-u).join(",")}`:""}
                        ${L.event_location?` · 📍 ${A(L.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${y?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${H}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${$}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${x}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const e=document.getElementById("leave-monitor-shell");e&&await ws(e,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const l=await ce().catch(()=>({})),c=document.getElementById("monitor-shell");c&&Mr(c,l)}catch{B("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function kt(t,s,n){const o={};for(const m of t)m.main_room&&(o[m.main_room]=[]);for(const m of s){const d=m[n];d&&(o[d]||(o[d]=[]),o[d].push({id:m.id,full_name:m.full_name??"",student_code:m.student_code??""}))}return o}async function Tr(t,s,n){const{records:o,students:m,homerooms:d}=await ps(t,s),w=kt(d,m,"religion_room"),a={},f={},p=new Set;for(const b of o){const _=b.main_room,q=b.week_number;!_||!q||(p.add(q),a[_]||(a[_]={}),a[_][q]||(a[_][q]=new Set),a[_][q].add(b.student_id),b.status==="absent"&&(f[_]||(f[_]={}),f[_][q]||(f[_][q]=new Set),f[_][q].add(b.student_id)))}const e=n?qr(n):Math.max(...p,0),l=e>0?Array.from({length:e},(b,_)=>_+1):[...p].sort((b,_)=>b-_),c=Object.keys(w),i=c.filter(b=>{var A,L;const _=w[b].length,q=((L=(A=a[b])==null?void 0:A[e-1])==null?void 0:L.size)??0;return _>0&&q<_}),v=c.filter(b=>{var q;const _=(q=f[b])==null?void 0:q[e-2];return _!=null&&_.size?[..._].some(A=>!o.filter(S=>S.main_room===b&&S.week_number===e-1&&S.student_id===A).some(S=>S.status==="followed"||S.status==="avoid")):!1}),I=c.length,T=c.filter(b=>{var q,A;const _=w[b].length;return _?(((A=(q=a[b])==null?void 0:q[e-1])==null?void 0:A.size)??0)>=_:!1}).length;return{total:I,done:T,recordPending:i.length,followPending:v.length,week:e,_raw:{records:o,students:m,roomStudents:w,weekRoomRec:a,weekRoomAbsent:f,weeks:l,W:e,homerooms:d}}}async function jr(t,s){const{columns:n,scores:o,students:m,homerooms:d}=await us(t,s),w=kt(d,m,"main_room"),a=new Set(o.map(e=>e.student_id)),f=Object.keys(w),p=f.filter(e=>w[e].length>0&&w[e].every(l=>a.has(l.id??l))).length;return{total:f.length,done:p,pending:f.length-p,_raw:{columns:n,scores:o,students:m,roomStudents:w,scored:a,homerooms:d}}}async function Ar(t,s){const{columns:n,scores:o,students:m,homerooms:d}=await ms(t,s),w=kt(d,m,"main_room"),a=new Set(o.map(e=>e.student_id)),f=Object.keys(w),p=f.filter(e=>w[e].length>0&&w[e].every(l=>a.has(l.id??l))).length;return{total:f.length,done:p,pending:f.length-p,_raw:{columns:n,scores:o,students:m,roomStudents:w,scored:a,homerooms:d}}}function qr(t){if(!t)return 0;const s=new Date(t);if(isNaN(s))return 0;const n=Date.now()-s.getTime();return n<0?0:Math.floor(n/(7*24*60*60*1e3))+1}async function Mr(t,s){const n=parseInt(s.academicYear??2568),o=parseInt(s.semester??1);t.innerHTML=`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="font-bold text-gray-800 mb-4">📊 ติดตามความคืบหน้า</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="monitor-cards">
        ${["prayer","lifeskill","reading"].map(e=>`
        <div class="monitor-card rounded-xl border border-gray-100 p-4 cursor-pointer hover:shadow-md hover:border-indigo-200 transition bg-gray-50"
          data-type="${e}">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">${{prayer:"🕌",lifeskill:"🌱",reading:"📖"}[e]}</span>
            <p class="font-semibold text-sm text-gray-700">${{prayer:"ละหมาด (รายสัปดาห์)",lifeskill:"ทักษะชีวิต (รายเทอม)",reading:"อ่านคิดวิเคราะห์ (รายเทอม)"}[e]}</p>
          </div>
          <div id="card-${e}" class="text-center py-4 text-gray-300 text-xs">กำลังโหลด...</div>
        </div>`).join("")}
      </div>
    </div>`;const[m,d,w,a]=await Promise.allSettled([Tr(n,o,s.semester_start),jr(n,o),Ar(n,o),me().catch(()=>[])]),f=a.status==="fulfilled"?a.value:[],p=(e,l)=>{const c=document.getElementById(`card-${e}`);if(!c)return;if(l.status==="rejected"){c.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const i=l.value;if(e==="prayer"){const v=i.total>0?Math.round(i.done/i.total*100):0,I=i.recordPending+i.followPending;c.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${i.done}/${i.total} ห้อง (สัปดาห์ที่ ${i.week-1})</p>
        ${I>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${i.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${i.recordPending} ห้อง</span>`:""}
          ${i.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${i.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const v=i.total>0?Math.round(i.done/i.total*100):0;c.innerHTML=`
        <p class="text-3xl font-extrabold ${v>=100?"text-emerald-600":v>=60?"text-amber-500":"text-red-500"}">${v}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${i.done}/${i.total} ห้อง</p>
        ${i.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${i.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};p("prayer",m),p("lifeskill",d),p("reading",w),t.querySelectorAll(".monitor-card").forEach(e=>{e.addEventListener("click",()=>{var i,v,I;const l=e.dataset.type,c=l==="prayer"?(i=m.value)==null?void 0:i._raw:l==="lifeskill"?(v=d.value)==null?void 0:v._raw:(I=w.value)==null?void 0:I._raw;Dr(l,c,s,n,o,f)})})}function Dr(t,s,n,o,m,d=[]){var l;(l=document.getElementById("monitor-modal"))==null||l.remove();const w={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},a=document.createElement("div");a.id="monitor-modal",a.className="fixed inset-0 z-[90] flex flex-col bg-white",a.innerHTML=`
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${w[t]}</h2>
        <p class="text-xs text-gray-400">ภาค ${n.semester??"—"}/${n.academicYear??"—"}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`,document.body.appendChild(a),a.querySelector("#monitor-modal-close").addEventListener("click",()=>a.remove());const f=a.querySelector("#modal-body"),e={allTeachers:d,year:o,sem:m,category:t==="prayer"?"ศาสนา":"สามัญ"};t==="prayer"&&Hr(f,s,e),t==="lifeskill"&&da(f,s,o,m,e),t==="reading"&&ia(f,s,o,m,e),a.querySelector("#modal-print-btn").addEventListener("click",()=>Rr(n,t)),a.querySelector("#modal-doc-btn").addEventListener("click",()=>Nr(n,t,s))}function Et(t,s,n,o){const m=s[t],{allTeachers:d,year:w,sem:a,category:f}=o??{};if(m)return`<p class="font-semibold text-gray-800 text-xs leading-tight">${m}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${t}</p>`;(d??[]).map(e=>`<option value="${e.id}">${e.full_name??""}${e.teacher_code?` (${e.teacher_code})`:""}</option>`).join("");const p=`pick-${t.replace(/[^a-zA-Z0-9]/g,"_")}`;return`<p class="text-[11px] font-medium text-gray-500">${t}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${t}" data-picker="${p}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${p}" class="hidden mt-2 flex gap-1 items-center">
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
        data-room="${t}" data-year="${w}" data-sem="${a}" data-cat="${f}">บันทึก</button>
    </div>`}function Hr(t,s,n={}){var g;if(!s){t.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:o,roomStudents:m,weekRoomRec:d,weekRoomAbsent:w,weeks:a,W:f,homerooms:p}=s,e=Object.keys(m).sort((r,u)=>r.localeCompare(u,void 0,{numeric:!0})),l={},c={};for(const r of p??[])r.main_room&&(l[r.main_room]=((g=r.teachers)==null?void 0:g.full_name)??"",c[r.main_room]=r);const i="border border-gray-100 text-center text-[10px] px-2 py-2",v="px-4 py-2 text-sm font-medium border-b-2 transition",I=`${v} border-indigo-600 text-indigo-700 bg-indigo-50`,T=`${v} border-transparent text-gray-500 hover:text-gray-700`,b=(r,u="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${Et(r,l,c,n)}${u}
  </td>`,_=r=>{const u=r??(f>0?f-1:f),h=a.map(M=>`<option value="${M}" ${M===u?"selected":""}>${M===f?`สัปดาห์ที่ ${M} (ปัจจุบัน)`:M===f-1?`สัปดาห์ที่ ${M} (ควรกรอก)`:`สัปดาห์ที่ ${M}`}</option>`).join(""),C=e.map(M=>{var V,K;const j=(m[M]??[]).length,R=((K=(V=d[M])==null?void 0:V[u])==null?void 0:K.size)??0,N=j>0?Math.round(R/j*100):0,O=j===0?"bg-gray-50 text-gray-300":R===0?"bg-red-50 text-red-400":N>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",J=N>=100?"bg-emerald-500":N>=50?"bg-amber-400":"bg-red-400",P=j>0&&R<j?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${b(M,P)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${j}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${O}">
          <div class="font-bold">${j>0?N+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${j>0?R+"/"+j:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${j>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${J} h-2 rounded-full" style="width:${N}%"></div></div>
            <span class="text-[10px] font-bold ${N>=100?"text-emerald-600":N>=50?"text-amber-600":"text-red-500"}">${N}%</span>
          </div>`:'<span class="text-[10px] text-gray-300">ไม่มีนักเรียน</span>'}
        </td>
      </tr>`}).join("");return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">เลือกสัปดาห์:</label>
      <select id="prayer-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${h}
      </select>
      <span class="text-[11px] text-gray-400">${e.length} ห้อง</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${i} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${i} bg-gray-100">นักเรียน</th>
          <th class="${i} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${i} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${C}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},q=r=>{var R;const u=r??(f>1?f-2:a[0]??1),h=u+1,C=a.map(N=>`<option value="${N}" ${N===u?"selected":""}>${N===f-2?`สัปดาห์ที่ ${N} (ควรติดตาม)`:N===f-1?`สัปดาห์ที่ ${N} (ล่าสุด)`:`สัปดาห์ที่ ${N}`}</option>`).join(""),M=(N,O)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${O}</span>`})[N]??"",E=[];for(const N of e){const O=m[N]??[],J=Object.fromEntries(O.map(P=>[P.id??P,P])),W=[...((R=w[N])==null?void 0:R[u])??[]];for(const P of W){const V=J[P],z=o.filter(F=>F.main_room===N&&F.week_number===h&&F.student_id===P).some(F=>F.status==="followed"||F.status==="avoid")?"followed":h>f?"pending":"overdue";E.push({room:N,stu:V,status:z})}}const j=E.length?E.map(({room:N,stu:O,status:J})=>{const W=l[N];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${W?`<p class="font-semibold text-gray-800 text-xs">${W}</p><p class="text-[10px] text-gray-400">${N}</p>`:`<p class="font-semibold text-gray-800 text-xs">${N}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(O==null?void 0:O.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(O==null?void 0:O.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${M(J,h)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${u}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${C}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${h} · พบ ${E.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${i} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${i} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${i} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${j}</tbody>
      </table>
    </div>`},A=f>0?f-1:0,L=e.filter(r=>{var u;return((u=m[r])==null?void 0:u.length)>0}).length,S=e.reduce((r,u)=>{var h;return r+(((h=m[u])==null?void 0:h.length)??0)},0),k=(r,u,h=72)=>{const j=2*Math.PI*26,R=j*r/100;return`<svg width="${h}" height="${h}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${u}" stroke-width="8"
        stroke-dasharray="${R} ${j}" stroke-dashoffset="${j/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${u}">${r}%</text>
    </svg>`},H=r=>{const u=t.querySelector("#prayer-dashboard");if(!u)return;if(a.length===0){u.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!r)return;const h=e.filter(O=>{var W,P;const J=m[O].length;return J>0&&(((P=(W=d[O])==null?void 0:W[r])==null?void 0:P.size)??0)<J}),C=e.filter(O=>{var P,V;const J=m[O].length,W=((V=(P=d[O])==null?void 0:P[r])==null?void 0:V.size)??0;return J>0&&W>=J}),M=e.filter(O=>{var W;const J=(W=w[O])==null?void 0:W[r-1];return J!=null&&J.size?[...J].some(P=>!o.filter(K=>K.main_room===O&&K.week_number===r&&K.student_id===P).some(K=>K.status==="followed"||K.status==="avoid")):!1}),E=C.length,j=h.length,R=e.reduce((O,J)=>{var W,P;return O+(((P=(W=d[J])==null?void 0:W[r])==null?void 0:P.size)??0)},0),N=L>0?Math.round(E/L*100):0;u.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${L}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">ห้องทั้งหมด</p>
      </div>
      <div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-emerald-600">${E}</p>
        <p class="text-[11px] text-emerald-500 mt-0.5">บันทึกครบแล้ว</p>
      </div>
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-amber-600">${j}</p>
        <p class="text-[11px] text-amber-500 mt-0.5">ยังค้างอยู่</p>
      </div>
      <div class="bg-indigo-50 rounded-2xl border border-indigo-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-indigo-600">${R}</p>
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${S}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${k(N,N>=100?"#10b981":N>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${r}</p>
          <p class="text-xs text-gray-400 mt-0.5">${E} / ${L} ห้อง บันทึกครบ</p>
          ${M.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${M.length} ห้อง</p>`:""}
          ${N>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${j>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${j})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${h.map(O=>{var K,D;const J=m[O].length,W=((D=(K=d[O])==null?void 0:K[r])==null?void 0:D.size)??0,P=Math.round(W/J*100),V=l[O];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${O}</span>
                ${V?`<span class="text-amber-600 truncate block">${V}</span>`:""}
              </div>
              <span class="flex-shrink-0 font-bold ${P===0?"text-red-500":"text-amber-600"}">${W}/${J}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${P===0?"bg-red-400":"bg-amber-400"}" style="width:${P}%"></div>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:`<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${r}</p></div>
      </div>`}
    </div>`};t.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${I}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${T}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const $=t.querySelector("#prayer-tab-content");let x="record";const y=(r,u)=>{x=r,$.innerHTML=r==="record"?_(u):q(u),r==="record"&&H(u??A),t.querySelectorAll(".prayer-tab").forEach(M=>{M.className=M.dataset.tab===r?`prayer-tab ${I}`:`prayer-tab ${T}`});const h=$.querySelector("#prayer-week-sel");h&&h.addEventListener("change",M=>y("record",parseInt(M.target.value)));const C=$.querySelector("#prayer-follow-week-sel");C&&C.addEventListener("change",M=>y("follow",parseInt(M.target.value))),St($,n,()=>y(x,u))};t.querySelectorAll(".prayer-tab").forEach(r=>r.addEventListener("click",()=>y(r.dataset.tab))),y("record",A)}function da(t,s,n,o,m={}){var i;if(!s){t.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:d,roomStudents:w,scored:a,homerooms:f}=s;if(!d.length){t.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const p={},e={};for(const v of f??[])v.main_room&&(p[v.main_room]=((i=v.teachers)==null?void 0:i.full_name)??"",e[v.main_room]=v);const l=Object.keys(w).sort((v,I)=>v.localeCompare(I,void 0,{numeric:!0})),c="border border-gray-100 text-center text-[10px] px-2 py-2";t.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${c} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${c} bg-gray-100">นักเรียน</th>
          <th class="${c} bg-emerald-50 text-emerald-700">กรอกแล้ว</th>
          <th class="${c} bg-red-50 text-red-500">ค้าง</th>
          <th class="${c} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${l.map(v=>{const I=w[v]??[],T=I.length,b=I.filter(L=>a.has(L.id??L)).length,_=T-b,q=T>0?Math.round(b/T*100):0,A=q>=100?"bg-emerald-500":q>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Et(v,p,e,m)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${T}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${b}</td>
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
    <p class="text-xs text-gray-400 mt-2">* ภาค ${o}/${n} · ${l.length} ห้อง</p>`,St(t,m,()=>da(t,s,n,o,m))}function ia(t,s,n,o,m={}){var i;if(!s){t.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:d,roomStudents:w,scored:a,homerooms:f}=s;if(!d.length){t.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const p={},e={};for(const v of f??[])v.main_room&&(p[v.main_room]=((i=v.teachers)==null?void 0:i.full_name)??"",e[v.main_room]=v);const l=Object.keys(w).sort((v,I)=>v.localeCompare(I,void 0,{numeric:!0})),c="border border-gray-100 text-center text-[10px] px-2 py-2";t.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${c} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${c} bg-gray-100">นักเรียน</th>
          <th class="${c} bg-indigo-50 text-indigo-700">กรอกแล้ว</th>
          <th class="${c} bg-red-50 text-red-500">ค้าง</th>
          <th class="${c} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${l.map(v=>{const I=w[v]??[],T=I.length,b=I.filter(L=>a.has(L.id??L)).length,_=T-b,q=T>0?Math.round(b/T*100):0,A=q>=100?"bg-indigo-500":q>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${Et(v,p,e,m)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${T}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${b}</td>
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
    <p class="text-xs text-gray-400 mt-2">* ภาค ${o}/${n} · ${l.length} ห้อง · ${d.length} หัวข้อ</p>`,St(t,m,()=>ia(t,s,n,o,m))}async function St(t,s,n){const{allTeachers:o,year:m,sem:d,category:w}=s??{};if(!(o!=null&&o.length))return;const a={};t.querySelectorAll(".hr-sel-wrap").forEach(f=>{const p=f.closest('[id^="pick-"]');p&&(a[p.id]=$t({wrap:f,teachers:o,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),t.querySelectorAll(".hr-assign-btn").forEach(f=>{f.addEventListener("click",()=>{const p=f.dataset.picker,e=document.getElementById(p);e&&e.classList.toggle("hidden")})}),t.querySelectorAll(".hr-save-btn").forEach(f=>{f.addEventListener("click",async()=>{var c;const p=f.dataset.room,e=`pick-${p.replace(/[^a-zA-Z0-9]/g,"_")}`,l=(c=a[e])==null?void 0:c.getValue();if(!l){B("กรุณาเลือกครู","error");return}f.disabled=!0,f.textContent="...";try{await Zt({teacher_id:l,main_room:p,category:w,academic_year:m,semester:d}),B(`ระบุครูที่ปรึกษาห้อง ${p} แล้ว ✅`,"success"),n&&n()}catch(i){B("บันทึกไม่สำเร็จ: "+ae(i),"error"),f.disabled=!1,f.textContent="บันทึก"}})})}function Rr(t,s){const n={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,o=document.getElementById("modal-body");if(!o){B("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const m=o.cloneNode(!0);m.querySelectorAll("button, select, input").forEach(a=>a.remove());const d=m.innerHTML,w=`<!DOCTYPE html><html lang="th"><head>
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
    <p>โรงเรียน: ${t.samaiSchoolName??t.schoolName??""} &nbsp;·&nbsp; ภาค ${t.semester??"—"}/${t.academicYear??"—"} &nbsp;·&nbsp; พิมพ์: ${new Date().toLocaleDateString("th-TH")}</p>
    ${d}
  </body></html>`;ta(w,{autoprint:!0})}function Pr(t,s,n){var p;const o={};for(const e of(s==null?void 0:s.homerooms)??[])e.main_room&&(o[e.main_room]=((p=e.teachers)==null?void 0:p.full_name)??"—");if(t==="prayer"){const{roomStudents:e,weekRoomRec:l,W:c}=s??{};if(!e)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const v=Object.keys(e).sort((T,b)=>T.localeCompare(b,void 0,{numeric:!0})).filter(T=>{var _,q;const b=e[T].length;return b?(((q=(_=l[T])==null?void 0:_[c-1])==null?void 0:q.size)??0)<b:!1});return v.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${v.map((T,b)=>{var A,L;const _=e[T].length,q=((L=(A=l[T])==null?void 0:A[c-1])==null?void 0:L.size)??0;return`<tr>
        <td>${b+1}</td>
        <td>${o[T]??"—"}</td>
        <td>${T}</td>
        <td>${_}</td>
        <td>${q}</td>
        <td style="color:#dc2626">${_-q}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(c??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:m,scored:d}=s??{};if(!m)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const a=Object.keys(m).sort((e,l)=>e.localeCompare(l,void 0,{numeric:!0})).filter(e=>{const l=m[e]??[];return l.length>0&&!l.every(c=>d.has(c.id??c))});return a.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${a.map((e,l)=>{const c=m[e]??[],i=c.filter(v=>d.has(v.id??v)).length;return`<tr>
      <td>${l+1}</td>
      <td>${o[e]??"—"}</td>
      <td>${e}</td>
      <td>${c.length}</td>
      <td>${i}</td>
      <td style="color:#dc2626">${c.length-i}</td>
    </tr>`}).join("")}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${n.semester??"—"}/${n.academicYear??"—"} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'}function Nr(t,s,n){const o={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[s]??s,m=new Date,d=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],w=`${m.getDate()} ${d[m.getMonth()]} ${m.getFullYear()+543}`,a=t.samaiSchoolName??t.schoolName??"โรงเรียน",f=Pr(s,n,t),p=`<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>บันทึกข้อความ — ${o}</title>
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
      <div class="field"><span class="field-label">เรื่อง&nbsp;&nbsp;</span><span class="field-val">รายงานความคืบหน้าการบันทึกข้อมูล${o} ภาคเรียนที่ ${t.semester??"—"} ปีการศึกษา ${t.academicYear??"—"}</span></div>
      <div class="field"><span class="field-label">เรียน&nbsp;&nbsp;</span><span class="field-val">ผู้อำนวยการโรงเรียน${a}</span></div>
    </div>
    <hr style="border:none;border-top:1px solid #ccc;margin:12px 0"/>
    <p class="indent">ตามที่โรงเรียน${a} ได้ใช้ระบบ ปพ.5 ออนไลน์ ในการบันทึกข้อมูล${o}ของนักเรียน
ภาคเรียนที่ ${t.semester??"—"} ปีการศึกษา ${t.academicYear??"—"} นั้น</p>
    <p class="indent">บัดนี้ ฝ่ายวิชาการได้ตรวจสอบสถานะการดำเนินงาน ณ วันที่ ${w}
พบว่ายังมีครูที่ปรึกษาบางห้องที่ยังไม่ได้ดำเนินการกรอกข้อมูล ดังรายละเอียดต่อไปนี้</p>
    ${f}
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
  </body></html>`,e=new Blob(["\uFEFF"+p],{type:"application/msword;charset=utf-8"}),l=URL.createObjectURL(e),c=document.createElement("a");c.href=l,c.download=`บันทึกข้อความ_${o}_${t.academicYear??new Date().getFullYear()+543}.doc`,c.click(),setTimeout(()=>URL.revokeObjectURL(l),2e3)}async function ca(){var t;re("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const s=await me(),n=ue(s.map(w=>w.dept)),o=ue(s.map(w=>w.skill_group));ne(`<div class="max-w-6xl mx-auto animate-fade">
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
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${_e} flex-1 min-w-40" />
          <select id="tf-dept" class="${ie}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${n.map(w=>`<option value="${w}">${w}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${ie}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${o.map(w=>`<option value="${w}">${w}</option>`).join("")}
          </select>
          <select id="tf-subg" class="${ie}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${ie}">
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
    </div>`),Ge(s);let m=s;window._impersonateTeacher=async w=>{const a=s.find(f=>f.id===w);if(!a){B("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:f}=await se(async()=>{const{startImpersonation:p}=await import("./impersonation-BOpkwoRR.js").then(e=>e.i);return{startImpersonation:p}},__vite__mapDeps([12,5,1]));await f(le,a),window.location.href="teacher.html"}catch(f){console.error("Cannot start impersonation:",f);const p=/function|schema cache|start_admin_impersonation|edge/i.test((f==null?void 0:f.message)||"");B(p?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(f==null?void 0:f.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const d=()=>{const w=document.getElementById("tf-q").value.toLowerCase(),a=document.getElementById("tf-dept").value,f=document.getElementById("tf-skill").value,p=document.getElementById("tf-subg").value,e=document.getElementById("tf-type").value,l=s.filter(c=>(!w||[c.full_name,c.teacher_code,c.dept,c.skill_group].some(i=>(i??"").toLowerCase().includes(w)))&&(!a||c.dept===a)&&(!f||c.skill_group===f)&&(!p||c.subject_group===p)&&(!e||c.staff_type===e));document.getElementById("tf-count").textContent=l.length,m=l,Ge(l)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(w=>{var a,f;(a=document.getElementById(w))==null||a.addEventListener("input",d),(f=document.getElementById(w))==null||f.addEventListener("change",d)}),(t=document.getElementById("teacher-export-csv"))==null||t.addEventListener("click",()=>{const w=i=>["ACDMVOC","AGMVOC"].includes(i.subject_group)?"ปวช":i.category==="ศาสนา"?"ศาสนา":i.category==="สามัญ"||i.subject_group?"สามัญ":"-",a=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],f=m.map((i,v)=>[v+1,i.teacher_code??"",i.full_name??"",w(i),i.phone??""]),p="\uFEFF"+[a,...f].map(i=>i.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join(`
`),e=new Blob([p],{type:"text/csv;charset=utf-8"}),l=URL.createObjectURL(e),c=document.createElement("a");c.href=l,c.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(l),B("ดาวน์โหลด CSV แล้ว ✅","success")})}catch{B("โหลดข้อมูลครูไม่สำเร็จ","error")}}function Ge(t){const s=document.getElementById("teacher-table-wrap");if(!s)return;if(t.length===0){s.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">👩‍🏫</p>
      <p class="font-medium">ยังไม่มีครูในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มครูใหม่" เพื่อเริ่มต้น</p>
    </div>`;return}const n=o=>o?`<span class="px-2 py-0.5 rounded-full text-xs font-medium ${{สามัญ:"bg-blue-50 text-blue-700",ศาสนา:"bg-amber-50 text-amber-700"}[o]??""}">${o}</span>`:"—";s.innerHTML=`
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
        ${t.map(o=>{o.teachers_quota;const m=(o.full_name??"?").charAt(0).toUpperCase();return`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                ${o.image_url?`<img src="${o.image_url}" alt="" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 text-white
                                flex items-center justify-center font-bold text-sm flex-shrink-0">${m}</div>`}
                <div>
                  <p class="font-semibold text-gray-800">${o.full_name??"—"}</p>
                  <p class="text-xs text-gray-400">${o.phone??""}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">${o.teacher_code??"—"}</td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${o.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${o.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${o.subject_group?`<span class="px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 font-mono">${o.subject_group}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden lg:table-cell">
              ${n(o.category)}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._adminViewSchedule(${o.id},'${$e(o.full_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>
              <button onclick="window._impersonateTeacher(${o.id})"
                class="text-xs text-orange-500 hover:text-orange-700 font-medium mr-3">🎭 สวมบทบาท</button>
              <button onclick="openTeacherModal(${o.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="handleDeleteTeacher(${o.id}, '${o.full_name}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table></div>`}async function tt(){re("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const t=await ce().catch(()=>({})),s=parseInt(t.academicYear??new Date().getFullYear()+543),n=parseInt(t.semester??1),[o,m,d,w]=await Promise.all([me(),Kn(s,n).catch(()=>[]),Ee().catch(()=>[]),st().catch(()=>[])]),a=new Set(m),f=d.filter(r=>r.status==="approved"),p=new Map;w.forEach(r=>{var h;const u=(h=r.master_subjects)==null?void 0:h.teacher_id;u&&p.set(u,(p.get(u)??0)+1)});const e=r=>{const u=r.teachers_quota,h=p.get(r.id)??(u==null?void 0:u.total_classes_created)??0,C=f.filter(N=>{var O;return((O=N.teachers)==null?void 0:O.id)===r.id}),M=C.filter(N=>N.package_type==="per_subject").reduce((N,O)=>N+(parseInt(O.room_count??1)||1),0),E=C.some(N=>N.package_type==="semester")||(u==null?void 0:u.package_type)==="semester",j=(u==null?void 0:u.is_paid)&&!(u!=null&&u.package_type)&&!E&&!M,R=parseInt(t.freeClassQuota??2);return E||j?{label:E?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${h} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:M>0?{label:`รายห้อง ${M} ห้อง`,detail:`ใช้แล้ว ${h}/${R+M} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${h}/${R} ห้อง`,cls:h>=R?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},l=o.filter(r=>r.profile_id),c=o.filter(r=>!r.profile_id),i=l.filter(r=>a.has(r.id)),v=l.filter(r=>!a.has(r.id)),I=(r,u,h,C)=>`<button type="button" data-rt-tab="${r}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${C} flex items-center justify-center text-xl font-bold">${h}</div>
        <p class="text-sm text-gray-500">${u}</p>
      </button>`,T=[...new Set(o.map(r=>r.dept).filter(Boolean))].sort(),b={};for(const r of o){const u=(r.full_name??"").toLowerCase().replace(/\s+/g,"");u&&(b[u]||(b[u]=[]),b[u].push(r))}const _=Object.values(b).filter(r=>r.length>1).map(r=>r.slice().sort((u,h)=>(u.registered_at??"")<(h.registered_at??"")?-1:1));ne(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${I("all","ทั้งหมด",o.length,"bg-indigo-100 text-indigo-700")}
        ${I("registered","มีบัญชีแล้ว",l.length,"bg-emerald-100 text-emerald-700")}
        ${I("unregistered","ยังไม่ลงทะเบียน",c.length,"bg-amber-100 text-amber-700")}
        ${I("duplicates","บัญชีซ้ำ",_.length,_.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${I("scheduled","สร้างตารางสอนแล้ว",i.length,"bg-green-100 text-green-700")}
        ${I("unscheduled","ยังไม่สร้างตารางสอน",v.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${_e} flex-1 min-w-40" />
          <select id="rt-cat" class="${ie}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${ie}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${T.map(r=>`<option value="${r}">${r}</option>`).join("")}
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="rt-count" class="font-semibold text-indigo-600">${o.length}</span>
          / ${o.length} รายการ
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
    </div>`);let q=o,A="all",L=null;const S=()=>{document.querySelectorAll("[data-rt-tab]").forEach(r=>{var h;const u=r.dataset.rtTab===A||r.dataset.rtTab===L;r.classList.toggle("border-emerald-400",u),r.classList.toggle("bg-emerald-50",u),r.classList.toggle("shadow-lg",u),r.classList.toggle("shadow-emerald-100",u),r.classList.toggle("ring-2",u),r.classList.toggle("ring-emerald-200",u),r.classList.toggle("border-gray-100",!u),(h=r.querySelector("p"))==null||h.classList.toggle("text-emerald-700",u)})},k=r=>p.get(r.id)??0,H=r=>a.has(r.id)?"✓":"—",$=()=>{const r=document.getElementById("rt-dup-list");if(r){if(!_.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}r.innerHTML=_.map((u,h)=>{const C=u.map((E,j)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${j===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${h}" value="${E.id}"
              class="mt-1 accent-emerald-600" ${j===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${E.image_url?`<img src="${E.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${he(E.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${E.teacher_code??"—"}</span>
                ${E.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${k(E)}</span>
                <span>🗓️ ตาราง ${H(E)}</span>
                ${E.login_email?`<span>✉️ ${he(E.login_email)}</span>`:""}
                ${E.registered_at?`<span>📅 ${new Date(E.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${E.id}</span>
              </div>
            </div>
          </label>`).join(""),M=u.map(E=>E.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${h}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${h+1} — ${he(u[0].full_name??"")}
              <span class="ml-2 text-red-500">(${u.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${C}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${h},'${M}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(r,u)=>{var R;const h=u.split(",").map(Number),C=Number((R=document.querySelector(`input[name="dup-keep-${r}"]:checked`))==null?void 0:R.value);if(!C){B("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const M=h.filter(N=>N!==C);if(!M.length){B("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const E=o.find(N=>N.id===C);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${E==null?void 0:E.full_name} (ID ${C})
ลบ: ID ${M.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const j=document.querySelector(`[data-dup-group="${r}"] button`);j&&(j.disabled=!0,j.textContent="⏳ กำลังรวม...");try{for(const N of M)await Qn(C,N);B(`รวมบัญชีสำเร็จ — เหลือ ID ${C}`,"success"),tt()}catch(N){B("เกิดข้อผิดพลาด: "+ae(N),"error"),j&&(j.disabled=!1,j.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const x=r=>{var h,C,M,E;const u=r==="duplicates";if((h=document.getElementById("rt-main-section"))==null||h.classList.toggle("hidden",u),(C=document.getElementById("rt-duplicates-section"))==null||C.classList.toggle("hidden",!u),(M=document.getElementById("rt-schedule-stats"))==null||M.classList.toggle("hidden",!0),u){A="duplicates",L=null,S(),$();return}r==="scheduled"||r==="unscheduled"?(A="registered",L=r):(A=r,L=null),q=A==="registered"?l:A==="unregistered"?c:o,(E=document.getElementById("rt-schedule-stats"))==null||E.classList.toggle("hidden",A!=="registered"),S(),g()},y=r=>{const u=document.getElementById("reg-teacher-table");if(u){if(!r.length){u.innerHTML=`<div class="text-center py-12 text-gray-400">
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
              ${r.map(h=>{const C=(h.full_name??"?").charAt(0).toUpperCase(),M=!!h.profile_id,E=a.has(h.id),j=e(h);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${h.image_url?`<img src="${h.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${M?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${C}</div>`}
                      <div>
                        <p class="font-semibold text-gray-800">${h.full_name??"—"}</p>
                        <p class="text-xs text-gray-400">${h.dept??""}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">
                    ${h.teacher_code??"—"}
                  </td>
                  <td class="px-4 py-3 text-center hidden md:table-cell">
                    ${h.category?`<span class="px-2 py-0.5 rounded-full text-xs font-medium
                            ${h.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">
                          ${h.category}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
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
                    ${M?`<button onclick="window._adminViewSchedule(${h.id},'${$e(h.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${E?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${h.id}, '${$e(h.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},g=()=>{var E,j,R;const r=(((E=document.getElementById("rt-q"))==null?void 0:E.value)??"").toLowerCase(),u=((j=document.getElementById("rt-cat"))==null?void 0:j.value)??"",h=((R=document.getElementById("rt-dept"))==null?void 0:R.value)??"",C=q.filter(N=>(!r||[N.full_name,N.teacher_code].some(O=>(O??"").toLowerCase().includes(r)))&&(!u||N.category===u)&&(!h||N.dept===h)&&(!L||(L==="scheduled"?a.has(N.id):!a.has(N.id)))),M=document.getElementById("rt-count");M&&(M.textContent=C.length),y(C)};document.querySelectorAll("[data-rt-tab]").forEach(r=>{r.addEventListener("click",()=>x(r.dataset.rtTab))}),x("all"),["rt-q","rt-cat","rt-dept"].forEach(r=>{var u,h;(u=document.getElementById(r))==null||u.addEventListener("input",g),(h=document.getElementById(r))==null||h.addEventListener("change",g)}),window.handleUnlinkTeacher=async(r,u)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${u}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await Jn(r),B(`ยกเลิกบัญชี "${u}" แล้ว`,"success"),tt()}catch(h){B("เกิดข้อผิดพลาด: "+ae(h),"error")}}}catch{B("โหลดข้อมูลไม่สำเร็จ","error")}}async function Lt(){re("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",ne(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[t,s]=await Promise.all([st(),me().catch(()=>[])]),n=Object.fromEntries(s.map(m=>[m.id,m])),o=document.getElementById("class-list");if(t.length===0){o.innerHTML=`<div class="text-center py-16 text-gray-400">
        <p class="text-4xl mb-3">🏫</p><p class="font-medium">ยังไม่มีห้องเรียนในระบบ</p>
      </div>`;return}o.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
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
        ${t.map(m=>{var d,w;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4 font-semibold text-gray-800">${m.class_name??"—"}</td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            ${m.master_subjects?`<span class="font-mono text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded mr-1">${m.master_subjects.subject_code??"—"}</span>${m.master_subjects.subject_name??"—"}`:"—"}
          </td>
          <td class="px-5 py-4 hidden md:table-cell">
            <span class="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">${m.skill_group??"—"}</span>
          </td>
          <td class="px-5 py-4 text-xs text-gray-400 hidden lg:table-cell font-mono">
            ${m.google_sheet_id?`<span class="truncate block max-w-[160px]">${m.google_sheet_id}</span>`:"—"}
          </td>
          <td class="px-5 py-4 text-right whitespace-nowrap">
            ${(d=m.master_subjects)!=null&&d.teacher_id?`<button onclick="window._adminViewSchedule(${m.master_subjects.teacher_id},'${$e(((w=n[m.master_subjects.teacher_id])==null?void 0:w.full_name)??m.master_subjects.subject_name??m.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${m.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${m.id},'${(m.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(t.map(m=>[m.id,m])),window._adminEditClass=m=>{var w;const d=(w=window._adminClassCache)==null?void 0:w[m];d&&na(null,d)},window._adminDeleteClass=async(m,d)=>{if(confirm(`ยืนยันลบห้องเรียน "${d}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await Qt(m),B(`ลบห้องเรียน "${d}" แล้ว`,"success"),Lt()}catch(w){B("ลบไม่สำเร็จ: "+ae(w),"error")}}}catch{B("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function pa(){re("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let f=function(e,l,c){var v;(v=document.getElementById("stu-modal"))==null||v.remove();const i=document.createElement("div");i.id="stu-modal",i.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",i.innerHTML=`
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
                  <input id="sf-code" type="text" value="${e.student_code??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">เพศ</label>
                  <select id="sf-gender-val" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-white">
                    <option value="">—</option>
                    <option value="ชาย" ${e.gender==="ชาย"?"selected":""}>ชาย</option>
                    <option value="หญิง" ${e.gender==="หญิง"?"selected":""}>หญิง</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
                <input id="sf-name" type="text" value="${e.full_name??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องสามัญ</label>
                  <input id="sf-main-room" type="text" value="${e.main_room??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องศาสนา</label>
                  <input id="sf-rel-room" type="text" value="${e.religion_room??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ประจำสี</label>
                  <input id="sf-house-color" type="text" value="${e.house_color??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ไซด์เสื้อกีฬาสี</label>
                  <input id="sf-shirt-size" type="text" value="${e.sports_shirt_size??""}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
              </div>
              
              <!-- Auth Accounts Section -->
              <div class="border-t border-gray-100 my-4 pt-3">
                <p class="text-xs font-bold text-indigo-600 mb-2 flex items-center gap-1">🔒 บัญชีผู้ใช้งานนักเรียน</p>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">อีเมลเข้าใช้งาน (แก้ไขกู้คืน)</label>
                    <input id="sf-auth-email" type="email" value="${e.profile_id?l:`stu${e.student_code}@student.pp5.local`}"
                      class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-gray-50 text-gray-600" />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">${e.profile_id?"ตั้งรหัสผ่านใหม่ (ระบุเมื่อต้องการเปลี่ยน)":"ตั้งรหัสผ่านเริ่มต้น (จะเปิดบัญชีให้อัตโนมัติ)"}</label>
                    <div class="flex gap-2">
                      <input id="sf-auth-pw" type="text" placeholder="อย่างน้อย 6 ตัวอักษร"
                        class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                      <button type="button" id="sf-auth-pw-fill" title="ใช้รหัสนักเรียนเป็นรหัสผ่าน"
                        class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition whitespace-nowrap">
                        🔄 = รหัสนักเรียน
                      </button>
                    </div>
                    <p class="text-[11px] text-gray-400 mt-1">
                      ${e.profile_id?"กรอกแล้วกดบันทึก จะเปลี่ยนรหัสผ่านทันที นักเรียนใช้ชุดใหม่นี้เข้าระบบครั้งถัดไปได้เลย":"นักเรียนคนนี้ยังไม่เคยเปิดบัญชี — ระบุรหัสผ่านแล้วกดบันทึก ระบบจะสร้างบัญชีให้อัตโนมัติ ไม่ต้องรอนักเรียนเปิดเอง"}
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
        </div>`,document.body.appendChild(i),i.querySelector("#stu-close").addEventListener("click",()=>i.remove()),i.querySelector("#stu-cancel").addEventListener("click",()=>i.remove()),i.addEventListener("click",I=>{I.target===i&&i.remove()}),i.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{i.querySelector("#sf-auth-pw").value=i.querySelector("#sf-code").value.trim()}),i.querySelector("#stu-form").addEventListener("submit",async I=>{I.preventDefault();const T=i.querySelector("#stu-save");T.disabled=!0,T.textContent="กำลังบันทึก...";try{const b={student_code:i.querySelector("#sf-code").value.trim()||null,full_name:i.querySelector("#sf-name").value.trim()||null,main_room:i.querySelector("#sf-main-room").value.trim()||null,religion_room:i.querySelector("#sf-rel-room").value.trim()||null,gender:i.querySelector("#sf-gender-val").value||null,house_color:i.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:i.querySelector("#sf-shirt-size").value.trim()||null},_=i.querySelector("#sf-auth-email").value.trim()||null,q=i.querySelector("#sf-auth-pw").value.trim()||null;if(!e.profile_id&&!q){B("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),T.disabled=!1,T.textContent="บันทึก";return}await c(b,_||q?{email:_,password:q}:null),B("บันทึกสำเร็จ","success"),i.remove()}catch(b){B("บันทึกไม่สำเร็จ: "+ae(b),"error")}finally{T.disabled=!1,T.textContent="บันทึก"}})};const t=await Ne(),s=ue(t.map(e=>Se(e.main_room))),n=ue(t.map(e=>qe(e.main_room))),o=ue(t.map(e=>e.house_color)),m=ue(t.map(e=>e.sports_shirt_size));ne(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${_e} flex-1 min-w-40" />
          <select id="sf-grade" class="${ie}">
            <option value="">ทุกระดับชั้น</option>
            ${s.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <select id="sf-room" class="${ie}">
            <option value="">ทุกห้อง</option>
            ${n.map(e=>`<option value="${e}">ห้อง ${e}</option>`).join("")}
          </select>
          <select id="sf-gender" class="${ie}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <select id="sf-house" class="${ie}">
            <option value="">ทุกสี</option>
            ${o.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <select id="sf-shirt" class="${ie}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${m.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <select id="sf-page-size" class="${ie}">
            <option value="50">แสดง 50 คน</option>
            <option value="100">แสดง 100 คน</option>
            <option value="500">แสดง 500 คน</option>
            <option value="1000" selected>แสดง 1000 คน</option>
            <option value="all">แสดงทั้งหมด</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          แสดง <span id="sf-showing" class="font-semibold text-indigo-600">${Math.min(t.length,1e3)}</span>
          จาก <span id="sf-count" class="font-semibold text-indigo-600">${t.length}</span>
          / ${t.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="student-table-wrap"></div>
      </div>
    </div>`);let d=Object.fromEntries(t.map(e=>[e.id,e])),w=1e3;const a=e=>{const l=document.getElementById("student-table-wrap"),c=w==="all"?e:e.slice(0,w);if(document.getElementById("sf-count").textContent=e.length,document.getElementById("sf-showing").textContent=c.length,!e.length){l.innerHTML=`<div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">🔍</p><p>ไม่พบข้อมูลที่ค้นหา</p></div>`;return}l.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
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
          ${c.map(i=>`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${i.image_url?`<img src="${i.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(i.full_name??"?").charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${i.full_name??"—"}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${i.student_code??"—"}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${i.main_room??"—"}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${i.religion_room?`<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${i.religion_room}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${i.gender??"—"}</td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${i.house_color?`<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${i.house_color}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${i.sports_shirt_size?`<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${i.sports_shirt_size}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${i.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${i.id},'${(i.full_name??"").replace(/'/g,"")}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      ${c.length<e.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(e,l)=>{if(confirm(`ยืนยันลบนักเรียน "${l}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await gn(e),delete d[e],t.splice(t.findIndex(c=>c.id===e),1),B(`ลบ "${l}" แล้ว`,"success"),p()}catch(c){B("ลบไม่สำเร็จ: "+ae(c),"error")}},window._editStudent=async e=>{const l=d[e];if(!l)return;let c="";try{const{data:i,error:v}=await le.rpc("lookup_student_by_code",{p_student_code:l.student_code});!v&&i&&i[0]&&(c=i[0].login_email||"")}catch(i){console.error(i)}f(l,c,async(i,v)=>{if(await bn(e,i),v&&(v.email||v.password)){const{error:I}=await le.rpc("admin_update_student_auth",{p_student_id:e,p_new_email:v.email||null,p_new_password:v.password||null});if(I)throw I}Object.assign(l,i),d[e]=l,p()})},a(t);const p=()=>{const e=document.getElementById("sf-q").value.toLowerCase(),l=document.getElementById("sf-grade").value,c=document.getElementById("sf-room"),i=c.value,v=ue(t.filter(A=>!l||Se(A.main_room)===l).map(A=>qe(A.main_room)));v.includes(i)||(c.value=""),c.innerHTML='<option value="">ทุกห้อง</option>'+v.map(A=>`<option value="${A}" ${A===c.value?"selected":""}>ห้อง ${A}</option>`).join("");const I=c.value,T=document.getElementById("sf-gender").value,b=document.getElementById("sf-house").value,_=document.getElementById("sf-shirt").value,q=document.getElementById("sf-page-size").value;w=q==="all"?"all":Number(q),a(t.filter(A=>(!e||[A.full_name,A.student_code,A.main_room,A.religion_room].some(L=>(L??"").toLowerCase().includes(e)))&&(!l||Se(A.main_room)===l)&&(!I||qe(A.main_room)===I)&&(!T||A.gender===T)&&(!b||A.house_color===b)&&(!_||A.sports_shirt_size===_)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(e=>{var l,c;(l=document.getElementById(e))==null||l.addEventListener("input",p),(c=document.getElementById(e))==null||c.addEventListener("change",p)})}catch{B("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function Or(){const{getCommentPhrases:t,addCommentPhrase:s,updateCommentPhrase:n,deleteCommentPhrase:o}=await se(async()=>{const{getCommentPhrases:p,addCommentPhrase:e,updateCommentPhrase:l,deleteCommentPhrase:c}=await import("./api-Cf_Y4s92.js");return{getCommentPhrases:p,addCommentPhrase:e,updateCommentPhrase:l,deleteCommentPhrase:c}},__vite__mapDeps([0,1])),m=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],d={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},w={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a=document.createElement("div");a.style.cssText="padding:4px 0;";async function f(){const p=await t().catch(()=>[]);a.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${m.map(e=>{const l=p.filter(c=>c.metric===e.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${d[e.key]};color:${w[e.key]};padding:3px 12px;border-radius:20px;">${e.label}</span>
            <button class="ph-add-btn" data-metric="${e.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${l.map(c=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f9fafb;border-radius:8px;">
                <input class="ph-edit-inp" data-id="${c.id}" value="${c.phrase.replace(/"/g,"&quot;")}"
                  style="flex:1;border:none;background:transparent;font-size:13px;font-family:inherit;outline:none;"/>
                <button class="ph-save-btn" data-id="${c.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #059669;border-radius:6px;background:#d1fae5;color:#065f46;cursor:pointer;font-family:inherit;white-space:nowrap;">
                  บันทึก
                </button>
                <button class="ph-del-btn" data-id="${c.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:6px;background:#fee2e2;color:#dc2626;cursor:pointer;font-family:inherit;">
                  ลบ
                </button>
              </div>`).join("")}
            ${l.length?"":'<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>'}
          </div>
        </div>`}).join("")}
    `,a.querySelectorAll(".ph-add-btn").forEach(e=>{e.onclick=async()=>{const l=prompt("พิมพ์ประโยคใหม่:");l!=null&&l.trim()&&(await s(e.dataset.metric,l.trim()),f())}}),a.querySelectorAll(".ph-save-btn").forEach(e=>{e.onclick=async()=>{const l=a.querySelector(`.ph-edit-inp[data-id="${e.dataset.id}"]`);await n(parseInt(e.dataset.id),l.value.trim()),e.textContent="✓",setTimeout(()=>e.textContent="บันทึก",1e3)}}),a.querySelectorAll(".ph-del-btn").forEach(e=>{e.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await o(parseInt(e.dataset.id)),f())}})}return await f(),a}async function ua(){re("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",ne(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[t,s,n]=await Promise.all([ce(),Be().catch(()=>[]),Yn().catch(()=>[])]);t.feedbackQuotaTeacher=t.feedbackQuotaTeacher||"5",t.feedbackQuotaStudent=t.feedbackQuotaStudent||"3",t.freeAttendanceScanLimit=t.freeAttendanceScanLimit||"2",t.freeRandomPickerLimit=t.freeRandomPickerLimit||"1",t.freeTimerLimit=t.freeTimerLimit||"1",t.freeDashboardLimit=t.freeDashboardLimit||"0",t.freePromptAiLimit=t.freePromptAiLimit||"1";const o=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],m=[...new Set([...o,...s.map(c=>c.dept_code).filter(Boolean),...n.map(c=>c.dept).filter(Boolean)])].sort(),d={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},w="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(c,i,v)=>{var b,_,q,A,L;const I=(_=(b=document.getElementById(i))==null?void 0:b.value)==null?void 0:_.trim(),T=document.getElementById(v);if(!I){T.textContent="⚠️ ยังไม่ได้ใส่ Key",T.className="text-xs text-amber-500 font-medium";return}c.textContent="⏳",c.disabled=!0;try{const S=((A=(q=document.getElementById("cfg-geminiModel"))==null?void 0:q.value)==null?void 0:A.trim())||"gemini-1.5-flash",k=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${S}:generateContent?key=${I}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if(k.ok)T.textContent="✅ ใช้งานได้",T.className="text-xs text-emerald-600 font-semibold";else{const $=((L=(await k.json().catch(()=>({}))).error)==null?void 0:L.message)??`HTTP ${k.status}`;T.textContent=`❌ ${$.slice(0,60)}`,T.className="text-xs text-red-500 font-medium"}}catch{T.textContent="❌ เชื่อมต่อไม่ได้",T.className="text-xs text-red-500 font-medium"}c.textContent="ทดสอบ",c.disabled=!1};const a=({key:c,label:i,type:v,options:I,placeholder:T,hint:b,rows:_,syncFrom:q})=>{const A=t[c]??"",L=`id="cfg-${c}" data-key="${c}"`,S=(k,H="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${i}</label>
          ${k}
          ${H?`<p class="text-[11px] text-gray-400 mt-1">${H}</p>`:""}
        </div>`;if(v==="color")return S(`
        <div class="flex items-center gap-3">
          <input type="color" ${L} value="${A||d[c]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${c}-txt" class="text-sm font-mono text-gray-600">${A||d[c]||"#007bff"}</span>
        </div>`,b);if(v==="date")return S(`<input type="date" ${L} value="${A}" class="${w}" />`,b);if(v==="select")return S(`
        <select ${L} class="${w} bg-white">
          ${(I??[]).map(k=>{const H=typeof k=="object"?k.value:k,$=typeof k=="object"?k.label:k;return`<option value="${H}" ${H===A?"selected":""}>${$}</option>`}).join("")}
        </select>`,b);if(v==="textarea")return S(`<textarea ${L} rows="${_??3}" placeholder="${T??""}"
          class="${w} resize-none">${A??""}</textarea>`,b);if(v==="upload")return S(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${A?`<img src="${A}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${A?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${c}" />
          </label>
          <input type="hidden" ${L} value="${A}" />
        </div>`,b);if(v==="toggle"){const k=A==="true";return S(`
          <button type="button" ${L} data-on="${k}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${k?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${k?"28":"2"}px)"></span>
          </button>`,b)}if(v==="password"){const k=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(c),H=`const i=document.getElementById('cfg-${c}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,$=k?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${c}','cfg-${c}-st')">ทดสอบ</button>
             <span id="cfg-${c}-st" class="text-xs text-gray-400"></span>`:"";return S(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${L} value="${A}" class="${w} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${H}">ดู</button>
            ${$}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,b)}return S(q?`
        <div class="flex gap-2 items-center">
          <input type="text" ${L} value="${A??""}" placeholder="${T??""}" class="${w} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${q}','${c}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${L} value="${A??""}" placeholder="${T??""}" class="${w}" />`,b)},f=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],p=c=>{const i=(v,I)=>`<div class="mb-6">
          ${v?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${v}</p>`:""}
          ${I.map(a).join("")}
        </div>`;if(c==="general")return[i("ปีการศึกษา",[{key:"semester",label:"ภาคเรียนที่",type:"select",options:["1","2"]},{key:"academicYear",label:"ปีการศึกษา (พ.ศ.)",type:"text",placeholder:"เช่น 2568"}]),`<div id="start-new-semester-box" class="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
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
        </div>`,i("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),i("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(c==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map(v=>a({...v,type:"color"})).join("")}
        </div>`;if(c==="school"){const v=(I,T)=>[{key:`${I}SchoolName`,label:T.name,type:"text"},{key:`${I}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${I}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${I}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${I}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${I}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${I}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${I}AcademicHeadName`,label:I==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:I==="samai"?"academic_samai":"academic_pvch"},{key:`${I}AcademicHeadSignUrl`,label:I==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${I}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...I==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${I}RegistrarName`,label:I==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:I==="samai"?"registrar_samai":"registrar_pvch"},{key:`${I}RegistrarSignUrl`,label:I==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${I}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...I==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${v("samai",{name:"ชื่อโรงเรียน"}).map(a).join("")}</div>
          <div id="school-porwor" class="hidden">${v("porwor",{name:"ชื่อวิทยาลัย"}).map(a).join("")}</div>`}if(c==="prayer")return[i("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),i("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(c==="contact")return[i("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),i("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},(v,I)=>String(I+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},(v,I)=>String(I+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(c==="payment")return[i("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),i("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(c==="package"){const I=Array.from({length:5},(q,A)=>{const L=A+1,S=`donationStickerImg${L}`,k=t[S]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${k?`<img src="${k}" class="w-full h-full object-contain" id="sticker-prev-${L}" />`:`<span id="sticker-prev-${L}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${L}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${S}" data-n="${L}" />
              </label>
              ${k?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${S}" data-n="${L}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${S}" value="${k}" />
              ${k?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${k}</p>`:""}
            </div>
          </div>`}).join(""),T=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],b={quota:[i("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),i("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),i("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[i("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),i("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),i("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(q=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${q}">
                  👁️ ระดับ ${q}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const q=String(t.donationSpecialFeatures??"").trim(),L=q?q.split(`
`).filter(Boolean).map($=>{const x=$.split("|").map(y=>y.trim());return{icon:x[0]||"✨",text:x[1]||"",minTier:parseInt(x[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([$,x,y])=>({icon:$,text:x,minTier:y})),S=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],k=($,x)=>x?`border:2px solid ${S[$-1]};color:${S[$-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",H=($,x)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${x}" data-min-tier="${$.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${$.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${$.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(y=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${k(y,$.minTier===y)}" data-n="${y}" title="ระดับ ${y}">${y}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${L.map(($,x)=>H($,x)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(t.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),i("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${I}</div>
            </div>`,i("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),i("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[i("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[i("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),i("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},_="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${T.map(q=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${q.id===_?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${q.id}">${q.label}</button>`).join("")}
          </div>
          ${T.map(q=>`
          <div id="pkg-panel-${q.id}" ${q.id!==_?'class="hidden"':""}>
            ${b[q.id]??""}
          </div>`).join("")}`}if(c==="student")return[i("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),i("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),i("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),i("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),i("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
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
          ${a({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          ${a({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${v.map(([I,T])=>{const b=t[I]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${T}</p>
                <input type="text" id="cfg-${I}" data-key="${I}" value="${b}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return c==="template"?[i("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${Bs.map(v=>a({key:v.key,label:`${v.category} — ${v.label}`,type:"text",placeholder:v.defaultId,hint:`default: ${v.defaultId}`})).join("")}`].join(""):c==="phrases"?Or():c==="schedule"?[i("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),i("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),i("Gemini API Key แยกต่อกลุ่มสาระ",m.length?m.map(v=>({key:`geminiKey_${v}`,label:`Key กลุ่มสาระ ${v}`,type:"password",hint:`ครูที่มี dept = ${v} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):c==="council"?[i("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let e="general";ne(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${f.map(c=>`
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${c.id===e?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
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
    </div>`);const l=c=>{var y;e=c,document.querySelectorAll(".cfg-tab").forEach(g=>{const r=g.dataset.tab===c;g.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${r?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const i=p(c),v=document.getElementById("cfg-panel-inner");i instanceof Promise?(v.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',i.then(g=>{v.innerHTML="",g instanceof Element?v.appendChild(g):v.innerHTML=g??""})):i instanceof Element?(v.innerHTML="",v.appendChild(i)):v.innerHTML=i??"",document.getElementById("cfg-save-hint").textContent="",document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(g=>{g.addEventListener("input",()=>{const r=document.getElementById(`${g.id}-txt`);r&&(r.textContent=g.value)})});const I=()=>{const r=[...document.querySelectorAll("#feat-editor .feat-row")].map(h=>{var j,R;const C=((j=h.querySelector(".feat-icon"))==null?void 0:j.value.trim())||"✨",M=((R=h.querySelector(".feat-text"))==null?void 0:R.value.trim())||"",E=h.dataset.minTier||"1";return M?`${C}|${M}|${E}`:null}).filter(Boolean).join(`
`),u=document.getElementById("cfg-donationSpecialFeatures");u&&(u.value=r)},T=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],b=g=>{var r,u,h;g.querySelectorAll(".feat-tier-btn").forEach(C=>{C.addEventListener("click",()=>{const M=parseInt(C.dataset.n);g.dataset.minTier=String(M),g.querySelectorAll(".feat-tier-btn").forEach(E=>{const j=parseInt(E.dataset.n);E.style.cssText=j===M?`border:2px solid ${T[j-1]};color:${T[j-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),I()})}),(r=g.querySelector(".feat-icon"))==null||r.addEventListener("input",I),(u=g.querySelector(".feat-text"))==null||u.addEventListener("input",I),(h=g.querySelector(".feat-del"))==null||h.addEventListener("click",()=>{g.remove(),I()})};document.querySelectorAll("#feat-editor .feat-row").forEach(b),(y=document.getElementById("feat-add"))==null||y.addEventListener("click",()=>{var h;const g=document.getElementById("feat-editor");if(!g)return;const r=g.children.length,u=document.createElement("div");u.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",u.dataset.idx=r,u.dataset.minTier="1",u.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(C=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${C===1?`border:2px solid ${T[0]};color:${T[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${C}" title="ระดับ ${C}">${C}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,g.appendChild(u),b(u),(h=u.querySelector(".feat-text"))==null||h.focus()}),document.querySelectorAll(".pkg-stab").forEach(g=>{g.addEventListener("click",()=>{var u;const r=g.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(h=>{h.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${h.dataset.pstab===r?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(h=>h.classList.add("hidden")),(u=document.getElementById(`pkg-panel-${r}`))==null||u.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(g=>{g.addEventListener("change",async r=>{const u=r.target.files[0];if(!u)return;if(u.type!=="image/png"){B("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),g.value="";return}const h=g.dataset.skey,C=g.dataset.n;g.disabled=!0;try{const M=await qs(h,u),E=document.getElementById(`cfg-${h}`);E&&(E.value=M),await oe(h,M);const j=document.getElementById(`sticker-prev-${C}`);if(j){const R=document.createElement("img");R.src=M,R.className="w-full h-full object-contain",j.replaceWith(R),R.id=`sticker-prev-${C}`}B(`อัปโหลดสติกเกอร์ ${C} สำเร็จ ✅`,"success")}catch(M){B("อัปโหลดไม่สำเร็จ: "+ae(M),"error")}finally{g.disabled=!1}})});const _=g=>{const r=String(g.donationStickerTiers??"").trim(),u=parseInt(g.donationMinAmount??99)||99,h=parseInt(g.donationAmountStep??50)||50;return(r?r.split(`
`).filter(Boolean).map(E=>{const[j,R,N,O,J]=E.split("|").map(W=>W.trim());return{amount:parseInt(j)||0,sticker:R||"🏅",title:N||"",note:O||"",color:J||""}}).filter(E=>E.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([E,j,R,N,O])=>({amount:E,sticker:j,title:R,note:N,color:O}))).sort((E,j)=>E.amount-j.amount).map((E,j)=>{const R=(g[`donationStickerImg${j+1}`]??"").trim();return R&&/^https?:\/\//.test(R)?{...E,sticker:R}:E})},q=g=>{const r=String(g.donationSpecialFeatures??"").trim(),u=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return r?r.split(`
`).filter(Boolean).map(h=>{const C=h.split("|").map(M=>M.trim());return{icon:C[0]||"✨",text:C[1]||C[0]||h,minTier:parseInt(C[2])||1}}).filter(h=>h.text):u.map(([h,C,M])=>({icon:h,text:C,minTier:M}))},A=(g,r,u,h=4)=>{var J;(J=document.getElementById("tier-preview-modal"))==null||J.remove();const C=g.color||"#f59e0b",M=parseInt(C.slice(1,3),16),E=parseInt(C.slice(3,5),16),j=parseInt(C.slice(5,7),16),R=String(g.sticker??""),N=/^https?:\/\//.test(R)?`<img src="${R}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${R}</div>`,O=document.createElement("div");O.id="tier-preview-modal",O.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",O.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${M},${E},${j},0.85),rgba(${M},${E},${j},1))">
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
                  ${r.map(W=>h>=(W.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${W.icon}</span><span>${W.text}</span></div>`:`<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${W.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${W.minTier}+</span></div>`).join("")}
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
                style="background:rgba(${M},${E},${j},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(O),O.addEventListener("click",W=>{W.target===O&&O.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(g=>{g.addEventListener("click",()=>{const r=parseInt(g.dataset.tier),u={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(j=>{const R=j.id.replace(/^cfg-/,"");u[R]=j.value??j.dataset.on});const h=_(u),C=q(u),M=h[r-1]??h[0];if(!M){B("ยังไม่มีข้อมูล tier","warning");return}const E=(u.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;A(M,C,E,r)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(g=>{g.addEventListener("click",async()=>{const r=g.dataset.skey,u=g.dataset.n;await oe(r,"").catch(()=>{});const h=document.getElementById(`cfg-${r}`);h&&(h.value="");const C=document.getElementById(`sticker-prev-${u}`);C&&(C.outerHTML=`<span id="sticker-prev-${u}" class="text-2xl text-gray-300">🏅</span>`),g.remove(),B("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(g=>{g.addEventListener("click",()=>{const r=g.dataset.stab;document.querySelectorAll(".school-stab").forEach(u=>{u.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${u.dataset.stab===r?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",r!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",r!=="porwor")})});const L=document.getElementById("btn-sync-students-now"),S=document.getElementById("btn-download-student-sync-template");S&&S.addEventListener("click",()=>{const r="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(M=>M.map(E=>`"${String(E).replace(/"/g,'""')}"`).join(",")).join(`
`),u=new Blob([r],{type:"text/csv;charset=utf-8"}),h=URL.createObjectURL(u),C=document.createElement("a");C.href=h,C.download="pp5-students-sync-template.csv",document.body.appendChild(C),C.click(),C.remove(),URL.revokeObjectURL(h),B("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const k=document.getElementById("btn-start-new-semester"),H=document.getElementById("start-new-semester-target");if(k){const g=parseInt(t.semester??1),r=parseInt(t.academicYear??new Date().getFullYear()+543),u=g===1?2:1,h=g===1?r:r+1;H&&(H.textContent=`ตอนนี้: ภาคเรียนที่ ${g}/${r}  →  จะขึ้นเป็น: ภาคเรียนที่ ${u}/${h}`),k.addEventListener("click",async()=>{if(confirm(`ยืนยันขึ้นภาคเรียนที่ ${u}/${h}?

ระบบจะสร้างห้องเรียนใหม่ (เปล่า ไม่มีคะแนน/คอลัมน์เดิม) ให้ทุกวิชาที่มีอยู่ในภาคเรียนที่ ${g}/${r} แล้วลงทะเบียนนักเรียนอัตโนมัติตามห้องสามัญ/ห้องศาสนาปัจจุบัน

ห้องเรียนเทอมเก่าจะไม่ถูกลบ ยังแก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ`)){k.disabled=!0,k.textContent="⏳ กำลังดำเนินการ...";try{const C=await Wn(h,u);t.semester=String(u),t.academicYear=String(h),B(`ขึ้นภาคเรียนที่ ${u}/${h} สำเร็จ ✅ สร้างห้องเรียนใหม่ ${C.classes_created} ห้อง · ลงทะเบียนนักเรียนอัตโนมัติ ${C.students_enrolled} คน`,"success"),l("general")}catch(C){B("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+ae(C),"error"),k.disabled=!1,k.textContent="🔄 ขึ้นภาคเรียนใหม่"}}})}const $=g=>{const r=document.getElementById("student-sync-log-section"),u=document.getElementById("student-sync-log-content");if(!r||!u)return;const h=new Date(g.synced_at),C=h.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),M=h.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),E=g.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",j=(g.new_students||[]).map(N=>`<span class="text-green-700">${N.full_name} (${N.student_code})</span>`).join(", ")||"—",R=(g.deactivated_students||[]).map(N=>`<span class="text-red-500">${N.full_name} (${N.student_code})</span>`).join(", ")||"—";u.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${C} ${M}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${E}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${g.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${g.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${g.new_count} คน:</span> ${j}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${g.deactivated_count} คน:</span> ${R}
          </div>`,r.classList.remove("hidden")},x=async()=>{try{const{data:g}=await le.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();g&&$(g)}catch{}};x(),L&&L.addEventListener("click",async()=>{var h,C,M,E,j,R;const g=((C=(h=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:h.value)==null?void 0:C.trim())||"",r=((E=(M=document.getElementById("cfg-studentSyncTabName"))==null?void 0:M.value)==null?void 0:E.trim())||"",u=((R=(j=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:j.value)==null?void 0:R.trim())||"1";L.disabled=!0,L.textContent="กำลังซิงก์...";try{await Promise.all([oe("studentSyncSheetId",g),oe("studentSyncTabName",r),oe("studentSyncHeaderRow",u)]);const N=await Ts({sourceSheetId:g,tabName:r,headerRow:u}),O=`ซิงก์สำเร็จ: อ่าน ${N.read??0} แถว / บันทึก ${N.written??0} คน / ใหม่ ${N.newCount??0} / ซ่อน ${N.deactivatedCount??0} ✅`;B(O,"success"),x()}catch(N){B("ซิงก์นักเรียนไม่สำเร็จ: "+ae(N),"error")}finally{L.disabled=!1,L.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(g=>{g.addEventListener("change",async r=>{var M,E;const u=r.target.files[0];if(!u)return;const h=g.dataset.key,C=document.getElementById(`cfg-${h}`);g.disabled=!0;try{const j=await Ms(h,u);C&&(C.value=j),await oe(h,j),B("อัปโหลดสำเร็จ ✅","success");const R=(M=g.closest(".flex"))==null?void 0:M.querySelector("img"),N=(E=g.closest(".flex"))==null?void 0:E.querySelector("div.w-14");R?R.src=j:N&&(N.outerHTML=`<img src="${j}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`)}catch(j){B("อัปโหลดไม่สำเร็จ: "+ae(j),"error")}finally{g.disabled=!1}})})};document.querySelectorAll(".cfg-tab").forEach(c=>c.addEventListener("click",()=>l(c.dataset.tab))),l(e),window._syncPositionToField=async(c,i,v)=>{const I=v.textContent;v.disabled=!0,v.textContent="กำลังดึง...";try{const T=n.find(_=>_.position===c);if(!T){B(`ยังไม่มีครูที่กำหนดบทบาท "${c}"`,"warning");return}const b=document.getElementById(`cfg-${i}`);b&&(b.value=T.full_name,b.dispatchEvent(new Event("input")),B(`ดึงชื่อ "${T.full_name}" สำเร็จ`,"success"))}catch{B("ดึงข้อมูลไม่สำเร็จ","error")}finally{v.disabled=!1,v.textContent=I}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const c=document.getElementById("cfg-save-btn"),i=document.querySelectorAll("#cfg-panel-inner [data-key]");c.disabled=!0,c.textContent="กำลังบันทึก...";try{await Promise.all([...i].map(v=>{const I=v.tagName==="BUTTON"?v.dataset.on??"false":v.value;return oe(v.dataset.key,I)})),await sa("admin",{},!0),B("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch(v){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",v),B("บันทึกไม่สำเร็จ: "+((v==null?void 0:v.message)||"ไม่ทราบสาเหตุ"),"error")}finally{c.disabled=!1,c.textContent="บันทึก"}})}catch{B("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function ma(){re("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",ne(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{rt(await Be())}catch{B("โหลดข้อมูลไม่สำเร็จ","error")}}function rt(t){const s=document.getElementById("dept-table-wrap");if(s){if(!t.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${t.map(n=>`
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
    </table>`}}async function ot(){re("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",ne(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);try{const t=await rn();window._periodsCache=Object.fromEntries(t.map(n=>[n.id,n]));const s=document.getElementById("period-list");if(!t.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
        ${t.map(n=>{var o,m;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 text-center">
            <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm
                         inline-flex items-center justify-center">${n.period_no}</span>
          </td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(o=n.start_time)==null?void 0:o.slice(0,5)}</td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(m=n.end_time)==null?void 0:m.slice(0,5)}</td>
          <td class="px-5 py-3 text-right">
            <button onclick="openPeriodModal(${n.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeletePeriod(${n.id})"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`}catch{B("โหลดข้อมูลไม่สำเร็จ","error")}}function Fr(t){const s=[];let n=[],o="",m=!1;for(let a=0;a<String(t??"").length;a++){const f=t[a],p=t[a+1];m?f==='"'&&p==='"'?(o+='"',a++):f==='"'?m=!1:o+=f:f==='"'?m=!0:f===","?(n.push(o),o=""):f===`
`?(n.push(o),s.push(n),n=[],o=""):f!=="\r"&&(o+=f)}if((o||n.length)&&(n.push(o),s.push(n)),s.length<2)return[];const d=s[0].map(a=>a.trim()),w=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return s.slice(1).map(a=>{const f=Object.fromEntries(d.map((e,l)=>[e,a[l]??""])),p={};return w.forEach(e=>{const l=String(f[e]??"").trim();if(e==="item_no"){const c=Number(l);p[e]=l&&Number.isFinite(c)?c:null}else p[e]=l||null}),p}).filter(a=>a.subject_name||a.subject_code||a.standard_text||a.indicator_text||a.learning_outcome_text)}function fe(t,s,n="",o="text"){const m=o==="textarea"?`<textarea name="${t}" rows="3" dir="auto" class="${_e} w-full min-h-[92px] resize-y">${Y(n)}</textarea>`:`<input name="${t}" value="${Y(n)}" dir="auto" class="${_e} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${s}</span>
    ${m}
  </label>`}async function He(){var t;re("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let s=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[n,o]=await Promise.all([on(s),Be().catch(()=>[])]),m=ue([...o.map(e=>e.dept_name),...o.map(e=>e.dept_code),...n.map(e=>e.dept)]),d=ue(n.map(e=>e.grade_level)),w=Object.fromEntries(n.map(e=>[e.id,e]));window._curriculumRows=w;const a=(e={})=>{const l=!!e.id,c=document.createElement("div");c.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",c.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${l?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${fe("subject_name","ชื่อรายวิชา",e.subject_name)}
            ${fe("subject_code","รหัสวิชา",e.subject_code)}
            ${fe("dept","กลุ่มสาระ/กลุ่มวิชา",e.dept)}
            ${fe("grade_level","ระดับชั้น",e.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${fe("strand","สาระ",e.strand)}
            ${fe("topic","เรื่อง/สาระการเรียนรู้",e.topic)}
            ${fe("item_no","ลำดับข้อ",e.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${fe("standard_code","รหัสมาตรฐาน",e.standard_code)}
            ${fe("indicator_code","รหัสตัวชี้วัด",e.indicator_code)}
          </div>
          ${fe("standard_text","มาตรฐานการเรียนรู้",e.standard_text,"textarea")}
          ${fe("indicator_text","ตัวชี้วัด",e.indicator_text,"textarea")}
          ${fe("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",e.learning_outcome_text,"textarea")}
          ${fe("source_note","แหล่งที่มา/หมายเหตุ",e.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(c),c.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>c.remove())),c.querySelector("#curriculum-form").addEventListener("submit",async i=>{i.preventDefault();const v=new FormData(i.currentTarget),I={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(_=>{I[_]=String(v.get(_)??"").trim()||null});const T=String(v.get("item_no")??"").trim(),b=Number(T);I.item_no=T&&Number.isFinite(b)?b:null;try{l?await ln(e.id,I):await dn(I),B("บันทึกข้อมูลหลักสูตรแล้ว","success"),c.remove(),await He()}catch(_){B(_.message||"บันทึกไม่สำเร็จ","error")}})},f=()=>{const e=document.createElement("div"),l="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";e.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
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
            <code class="block whitespace-pre-wrap break-all text-xs">${l}</code>
          </div>
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${_e} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${_e} w-full font-mono text-xs" placeholder="${l}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(e),e.querySelectorAll("[data-close]").forEach(c=>c.addEventListener("click",()=>e.remove())),e.querySelector("#curriculum-csv-file").addEventListener("change",c=>{var I;const i=(I=c.target.files)==null?void 0:I[0];if(!i)return;const v=new FileReader;v.onload=()=>{e.querySelector("#curriculum-csv-text").value=v.result||""},v.readAsText(i)}),e.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const c=Fr(e.querySelector("#curriculum-csv-text").value);if(!c.length)return B("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const i=await cn(c);B(`นำเข้าแล้ว ${i} รายการ`,"success"),e.remove(),await He()}catch(i){B(i.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>a(),window._curriculumEdit=e=>{var l;return a(((l=window._curriculumRows)==null?void 0:l[e])||{})},window._curriculumDelete=async e=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await pn(e),B("ลบข้อมูลแล้ว","success"),await He()}catch(l){B(l.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=f,ne(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
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
        <input id="cur-filter-q" value="${Y(s.q)}" class="${_e}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${Y(s.subjectCode)}" class="${_e}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${ie}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${m.map(e=>`<option value="${Y(e)}" ${e===s.dept?"selected":""}>${Y(e)}</option>`).join("")}
        </select>
        <select id="cur-filter-grade" class="${ie}">
          <option value="">ทุกระดับชั้น</option>
          ${d.map(e=>`<option value="${Y(e)}" ${e===s.gradeLevel?"selected":""}>${Y(e)}</option>`).join("")}
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
              ${n.length?n.map(e=>`<tr class="hover:bg-gray-50/70 align-top">
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-900">${Y(e.subject_name||"ไม่ระบุวิชา")}</div>
                  <div class="text-indigo-500 font-mono">${Y(e.subject_code||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${Y(e.dept||"—")} · ${Y(e.grade_level||"ทุกชั้น")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${Y(e.topic||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${Y(e.strand||"")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${Y(e.standard_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${Y(e.standard_text||"—")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${Y(e.indicator_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${Y(e.indicator_text||e.learning_outcome_text||"—")}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${$e(e.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${$e(e.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const p=()=>{var e,l,c,i;s={q:((e=document.getElementById("cur-filter-q"))==null?void 0:e.value)||"",subjectCode:((l=document.getElementById("cur-filter-code"))==null?void 0:l.value)||"",dept:((c=document.getElementById("cur-filter-dept"))==null?void 0:c.value)||"",gradeLevel:((i=document.getElementById("cur-filter-grade"))==null?void 0:i.value)||""},window._curriculumFilters=s,He()};["cur-filter-q","cur-filter-code"].forEach(e=>{var l;(l=document.getElementById(e))==null||l.addEventListener("keydown",c=>{c.key==="Enter"&&p()})}),["cur-filter-dept","cur-filter-grade"].forEach(e=>{var l;(l=document.getElementById(e))==null||l.addEventListener("change",p)}),(t=document.getElementById("cur-filter-submit"))==null||t.addEventListener("click",p)}catch(s){ne(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${Y(s.message||s)}
    </div>`)}}async function Pe(){var t;re("subjects"),document.getElementById("page-title").textContent="จัดการรายวิชา",ne(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,n,o,m,d]=await Promise.all([nt(),st(),me().catch(()=>[]),Be().catch(()=>[]),ce().catch(()=>({}))]),w=Object.fromEntries(o.map(L=>[L.id,L])),a=Object.fromEntries(m.map(L=>[L.dept_code,L])),f=Object.fromEntries(m.map(L=>[L.dept_name,L])),p=L=>{var S;return{...L,_teacher_name:((S=w[L.teacher_id])==null?void 0:S.full_name)??""}},e=s.map(p),l=n.map(L=>{var S;return{...L,master_subjects:L.master_subjects?{...L.master_subjects,_teacher_name:((S=w[L.master_subjects.teacher_id])==null?void 0:S.full_name)??""}:L.master_subjects}}),c=ue(e.map(L=>L.dept)),i=ue(e.map(L=>L.skill_group));let v={sheetId:d.subjectSyncSheetId||Is,tabName:d.subjectSyncTabName||pt,keyField:d.subjectSyncKeyField||Dt,columns:(()=>{try{const L=JSON.parse(d.subjectSyncColumns||"null");return Array.isArray(L)&&L.length?L:ct}catch{return ct}})()};ne(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${Y(v.tabName||pt)}
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
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${_e} flex-1 min-w-40" />
          <select id="subf-dept" class="${ie}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${c.map(L=>`<option value="${L}">${L}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${ie}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${i.map(L=>`<option value="${L}">${L}</option>`).join("")}
          </select>
          <select id="subf-subg" class="${ie}">
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
    </div>`);let T="course";const b=()=>{const L=document.getElementById("sub-action-btn");L&&(L.innerHTML=T==="course"?"<span>＋</span> เพิ่มคอร์ส":T==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const S=document.getElementById("btn-sync-subjects-central");S&&(S.textContent=`↑ ซิงค์รายวิชา → ${v.tabName||pt}`)},_=()=>e.map(L=>{const S=w[L.teacher_id]??{},k=a[L.dept]??f[L.dept]??{},H=S.full_name??"",$=L.subject_name??"",x=L.subject_code??"";return{subject_group:L.subject_group??"",sbJect:`${$}_(${x})_${H}`,subject_name:$,subject_code:x,credit:L.credit??"",year:d.academicYear??"",semester:d.semester??"",grade_level:L.grade_level??"",teacher_name:H,teacher_code:S.teacher_code??"",dept_name:k.dept_name??L.dept??"",dept_code:k.dept_code??L.dept??""}}),q=()=>{var S;const L=new Set(v.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${Y(v.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${Y(v.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${Ht.map(k=>`
                <option value="${Y(k.key)}" ${v.keyField===k.key?"selected":""}>
                  ${Y(k.key)} - ${Y(k.label)}
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
            ${Ht.map(k=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${Y(k.key)}" ${L.has(k.key)?"checked":""} />
                <span>
                  <span class="font-semibold">${Y(k.key)}</span>
                  <span class="block text-xs text-gray-400">${Y(k.label)}</span>
                </span>
              </label>
            `).join("")}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`,(S=document.getElementById("subject-sync-select-defaults"))==null||S.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach(k=>{k.checked=ct.includes(k.value)})})},A=()=>{var $;if(($=document.getElementById("subject-filter-bar"))==null||$.classList.toggle("hidden",T==="sync"),b(),T==="sync"){q();return}const L=document.getElementById("subf-q").value.toLowerCase(),S=document.getElementById("subf-dept").value,k=document.getElementById("subf-skill").value,H=document.getElementById("subf-subg").value;if(T==="course"){const x=e.filter(y=>(!L||[y.subject_code,y.subject_name,y.dept].some(g=>(g??"").toLowerCase().includes(L)))&&(!S||y.dept===S)&&(!k||y.skill_group===k)&&(!H||y.subject_group===H));document.getElementById("subf-count").textContent=x.length,It(x)}else{const x=l.filter(y=>{var g,r;return(!L||(y.class_name??"").toLowerCase().includes(L)||(((g=y.master_subjects)==null?void 0:g.subject_name)??"").toLowerCase().includes(L))&&(!S||((r=y.master_subjects)==null?void 0:r.dept)===S)});document.getElementById("subf-count").textContent=x.length,zr(x)}};window._subAction=async()=>{var L,S,k;if(T==="course")Os(null,async(H,$=[])=>{await un(H,$),await Pe()});else if(T==="class")Ur();else{const H=((L=document.getElementById("subject-sync-sheet-id"))==null?void 0:L.value.trim())??"",$=((S=document.getElementById("subject-sync-tab-name"))==null?void 0:S.value.trim())??"",x=((k=document.getElementById("subject-sync-key-field"))==null?void 0:k.value)??Dt,y=[...document.querySelectorAll(".subject-sync-col:checked")].map(h=>h.value),g=y.includes(x)?y:[x,...y];if(!H||!$){B("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!g.length){B("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const r=document.getElementById("sub-action-btn"),u=r==null?void 0:r.innerHTML;r&&(r.disabled=!0,r.textContent="กำลังบันทึก...");try{await Promise.all([oe("subjectSyncSheetId",H),oe("subjectSyncTabName",$),oe("subjectSyncKeyField",x),oe("subjectSyncColumns",JSON.stringify(g))]),v={sheetId:H,tabName:$,keyField:x,columns:g},b(),B("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(h){B("บันทึกตั้งค่าไม่สำเร็จ: "+ae(h),"error")}finally{r&&(r.disabled=!1,r.innerHTML=u),b()}}},window._adminRegisterClass=async L=>{const S=e.find(k=>k.id===L);S?Ns(null,S):B("ไม่พบคอร์ส","error")},window._adminEditClass=L=>{var k;const S=(k=window._adminClassCache)==null?void 0:k[L];S?na(null,S):B("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(L,S)=>{window._goBack=()=>Pe(),Hs(null,L,S)},window._adminDeleteClass=async(L,S)=>{if(confirm(`ยืนยันลบ "${S}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await Qt(L),B(`ลบ "${S}" แล้ว`,"success"),A()}catch(k){B("ลบไม่สำเร็จ: "+ae(k),"error")}},(t=document.getElementById("btn-sync-subjects-central"))==null||t.addEventListener("click",async L=>{const S=L.currentTarget,k=S.textContent;try{S.disabled=!0,S.textContent="กำลังซิงค์...";const H=await Cs(_(),{sheetId:v.sheetId,tabName:v.tabName,headers:v.columns,keyField:v.keyField});B(`ส่งคำสั่งซิงค์รายวิชา ${H} รายการไปแท็บ ${v.tabName} แล้ว`,"success")}catch(H){B("ซิงค์รายวิชาไม่สำเร็จ: "+ae(H),"error")}finally{S.disabled=!1,S.textContent=k}}),window._switchSubjectTab=L=>{T=L,document.getElementById("stab-course").className=L==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=L==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=L==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",A()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(L=>{var S,k;(S=document.getElementById(L))==null||S.addEventListener("input",A),(k=document.getElementById(L))==null||k.addEventListener("change",A)}),A()}catch{B("โหลดรายวิชาไม่สำเร็จ","error")}}function It(t){const s=document.getElementById("subject-table-wrap");if(s){if(!t.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
      ${t.map(n=>`
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
          ${n.teacher_id?`<button onclick="window._adminViewSchedule(${n.teacher_id},'${$e(n._teacher_name||n.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
          <button onclick="openSubjectModal(${n.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${n.id},'${$e(n.subject_name)}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join("")}
    </tbody>
  </table></div>`}}function zr(t){const s=document.getElementById("subject-table-wrap");if(s){if(window._adminClassCache=Object.fromEntries(t.map(n=>[n.id,n])),!t.length){s.innerHTML=`<div class="text-center py-12 text-gray-400">
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
      ${t.map(n=>{var o,m,d,w;return`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${n.class_name??"—"}</p>
          <p class="text-xs text-indigo-500">${((o=n.master_subjects)==null?void 0:o.subject_name)??"—"}</p>
          ${(m=n.master_subjects)!=null&&m._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${n.master_subjects._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${(d=n.master_subjects)!=null&&d.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${n.master_subjects.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center hidden md:table-cell">
          ${n.google_sheet_id?'<span class="text-green-500 text-xs">✓</span>':'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-right">
          ${(w=n.master_subjects)!=null&&w.teacher_id?`<button onclick="window._adminViewSchedule(${n.master_subjects.teacher_id},'${$e(n.master_subjects._teacher_name||n.master_subjects.subject_name||n.class_name)}')"
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
  </table></div>`}}async function xa(){var e;re("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const t=await ce().catch(()=>({})),s=parseInt(t.academicYear??new Date().getFullYear()+543),n=parseInt(t.semester??1);ne(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const[o,m,d]=await Promise.all([me().catch(()=>[]),mn().catch(()=>[]),Jt().catch(()=>[])]);let w="สามัญ";const a=l=>Object.fromEntries(l.filter(c=>c.category===w).map(c=>[c.main_room,c])),f=()=>{document.querySelectorAll(".hr-tab").forEach(l=>{const c=l.dataset.hrTab===w;l.className=c?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},p=async()=>{f();const l=await gt(s,n),c=a(l),i=w==="สามัญ"?m:d,v=document.getElementById("homeroom-table-wrap");if(!i.length){v.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${w}</p></div>`;return}v.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${i.map(I=>{var b,_;const T=c[I];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${I}</td>
          <td class="px-5 py-3 text-gray-600">
            ${T?`<span class="font-medium text-gray-800">${((b=T.teachers)==null?void 0:b.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${(_=T.teachers)!=null&&_.teacher_code?`(${T.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${$e(I)}','${w}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${$e(I)}','${w}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${T?"เปลี่ยน":"เลือกครู"}</button>
            ${T?`<button onclick="window._deleteHomeroom(${T.id},'${$e(I)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await p(),window._deleteHomeroom=async(l,c)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${c}?`))try{await xn(l),B("ลบแล้ว","success"),await p()}catch{B("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(l,c)=>{var q;(q=document.getElementById("hr-picker"))==null||q.remove();let i=null;const v=document.createElement("div");v.id="hr-picker",v.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",v.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${c} · ห้อง ${l}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${ie}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${ie}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`,document.body.appendChild(v);const I=v.querySelector("#hrp-results"),T=v.querySelector("#hrp-save"),b=A=>{I.innerHTML=A.length?A.slice(0,20).map(L=>`
          <button type="button" data-id="${L.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${L.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${L.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',I.querySelectorAll(".hrp-option").forEach(L=>{L.addEventListener("click",()=>{i=o.find(S=>String(S.id)===L.dataset.id),I.querySelectorAll(".hrp-option").forEach(S=>S.classList.remove("bg-emerald-50","text-emerald-700")),L.classList.add("bg-emerald-50","text-emerald-700"),T.disabled=!1})})},_=()=>{const A=v.querySelector("#hrp-code").value.trim().toLowerCase(),L=v.querySelector("#hrp-name").value.trim().toLowerCase();b(o.filter(S=>(!A||(S.teacher_code??"").toLowerCase().includes(A))&&(!L||(S.full_name??"").toLowerCase().includes(L))))};v.querySelector("#hrp-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",A=>{A.target===v&&v.remove()}),v.querySelector("#hrp-code").addEventListener("input",_),v.querySelector("#hrp-name").addEventListener("input",_),T.addEventListener("click",async()=>{if(i){T.disabled=!0,T.textContent="กำลังบันทึก...";try{await Zt({teacher_id:i.id,main_room:l,category:c,academic_year:s,semester:n}),B("บันทึกครูที่ปรึกษาสำเร็จ","success"),v.remove(),await p()}catch(A){B("บันทึกไม่สำเร็จ: "+ae(A),"error"),T.disabled=!1,T.textContent="เลือกครูที่ปรึกษา"}}}),b(o)},document.querySelectorAll(".hr-tab").forEach(l=>{l.addEventListener("click",async()=>{w=l.dataset.hrTab,await p()})}),(e=document.getElementById("hr-export-csv"))==null||e.addEventListener("click",async()=>{try{const l=await gt(s,n),c=a(l),i=w==="สามัญ"?m:d,v=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],I=i.map(A=>{var S,k;const L=c[A];return[A,((S=L==null?void 0:L.teachers)==null?void 0:S.full_name)??"",((k=L==null?void 0:L.teachers)==null?void 0:k.phone)??""]}),T="\uFEFF"+[v,...I].map(A=>A.map(L=>`"${String(L).replace(/"/g,'""')}"`).join(",")).join(`
`),b=new Blob([T],{type:"text/csv;charset=utf-8"}),_=URL.createObjectURL(b),q=document.createElement("a");q.href=_,q.download=`ครูที่ปรึกษา-${w}-${n}-${s}.csv`,document.body.appendChild(q),q.click(),q.remove(),URL.revokeObjectURL(_),B("ดาวน์โหลด CSV แล้ว ✅","success")}catch(l){B("ดาวน์โหลดไม่สำเร็จ: "+ae(l),"error")}})}async function ga(){re("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const t=p=>{let e=0;for(const l of p)e=e*26+l.charCodeAt(0)-64;return e},s=p=>{let e="";for(;p>0;)p--,e=String.fromCharCode(65+p%26)+e,p=Math.floor(p/26);return e},n=(p,e)=>{const l=[];for(let c=t(p);c<=t(e);c++)l.push(s(c));return l},o=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:n("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:n("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];o.flatMap(p=>p.cols);const m=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],d=["ระหว่างเรียน","กลางภาค","ปลายภาค"],w=await yn().catch(()=>[]),a={};m.forEach(p=>{a[p]={},d.forEach(e=>{const l=w.find(c=>c.skill_group===p&&c.assignment_type===e);a[p][e]=new Set(l?l.allowed_columns.split(",").map(c=>c.trim()).filter(Boolean):[])})});const f=(p,e)=>o.map(l=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${l.label}</span>
      ${l.cols.map(c=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${a[p][e].has(c)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${p}" data-at="${e}" data-col="${c}">
          ${c}
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
      ${o.map(p=>`
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
      ${m.map(p=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${p}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${p}"
              ${w.find(e=>e.skill_group===p&&e.is_fixed)?"checked":""} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${d.map(e=>`
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${e}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${p.replace(/\s/g,"_")}-${e.replace(/\s/g,"_")}">
                  ${a[p][e].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${f(p,e)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${p}" data-at="${e}">ล้าง</button>
            </div>
          </div>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </div>`),document.addEventListener("click",p=>{const e=p.target.closest(".col-btn");if(!e)return;const{sg:l,at:c,col:i}=e.dataset;a[l][c].has(i)?(a[l][c].delete(i),e.className=e.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(a[l][c].add(i),e.className=e.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const v=document.getElementById(`scc-count-${l.replace(/\s/g,"_")}-${c.replace(/\s/g,"_")}`);v&&(v.textContent=`${a[l][c].size} คอลัมน์`);const I=document.querySelector(`.scc-clear-btn[data-sg="${l}"][data-at="${c}"]`);I&&(I.style.opacity=a[l][c].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(p=>{p.addEventListener("click",()=>{const{sg:e,at:l}=p.dataset;a[e][l].clear(),document.querySelectorAll(`.col-btn[data-sg="${e}"][data-at="${l}"]`).forEach(i=>{i.className=i.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const c=document.getElementById(`scc-count-${e.replace(/\s/g,"_")}-${l.replace(/\s/g,"_")}`);c&&(c.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const p=document.getElementById("scc-save-btn");p.disabled=!0,p.textContent="กำลังบันทึก...";try{const e=[];m.forEach(l=>{var i;const c=((i=document.querySelector(`.scc-lock[data-sg="${l}"]`))==null?void 0:i.checked)??!1;d.forEach(v=>{const I=[...a[l][v]].join(",");I&&e.push({skill_group:l,assignment_type:v,allowed_columns:I,is_fixed:c})})});for(const l of e)await fn(l);B(`บันทึก ${e.length} รายการสำเร็จ ✅`,"success")}catch(e){B("บันทึกไม่สำเร็จ: "+ae(e),"error")}finally{p.disabled=!1,p.textContent="💾 บันทึกทั้งหมด"}})}async function Ur(){re("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const t=await nt().catch(()=>[]);document.getElementById("main-content").innerHTML=`
    <div class="max-w-4xl mx-auto animate-fade">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="renderSubjects()" class="text-sm text-gray-500 hover:text-indigo-600">← กลับ</button>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        ${t.length?`<table class="w-full text-sm">
              <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                <tr>
                  <th class="px-5 py-3 text-left">รหัส / ชื่อวิชา</th>
                  <th class="px-5 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
                  <th class="px-5 py-3 text-center hidden md:table-cell">ชั้นปี</th>
                  <th class="px-5 py-3 text-right">เลือก</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${t.map(s=>`
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
    </div>`,window.renderSubjects=Pe}async function ba(){var m;re("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const t=await ce().catch(()=>({})),s=t.academicYear??t.academic_year??new Date().getFullYear()+543,n=t.semester??1,o=async()=>{const d=await hn(s,n).catch(()=>[]),w=document.getElementById("holiday-table");if(w){if(!d.length){w.innerHTML=`<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`;return}w.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
        <tr>
          <th class="px-4 py-3 text-left">วันที่</th>
          <th class="px-4 py-3 text-left">คำอธิบาย</th>
          <th class="px-4 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${d.map(a=>`
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
        <input id="hol-date" type="date" class="${_e} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${_e} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`),await o(),(m=document.getElementById("hol-add"))==null||m.addEventListener("click",async()=>{const d=document.getElementById("hol-date").value,w=document.getElementById("hol-desc").value.trim()||null;if(!d){B("กรุณาเลือกวันที่","warning");return}const a=parseInt(d.slice(0,4),10),f=new Date().getFullYear();if(Math.abs(a-f)>3){B(`ปี ${a} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${f}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await nn({holiday_date:d,description:w,academic_year:s,semester:n}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",B("เพิ่มวันหยุดแล้ว","success"),await o()}catch(p){B("เกิดข้อผิดพลาด: "+ae(p),"error")}}),window._deleteHoliday=async d=>{if(confirm("ลบวันหยุดนี้?"))try{await sn(d),B("ลบแล้ว","success"),await o()}catch{B("ลบไม่สำเร็จ","error")}}}function ya(){re("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",ne(`
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

    </div>`);let t="teachers",s=[];window.switchImportTab=m=>{t=m,s=[],document.getElementById("import-preview").classList.add("hidden");const d={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=d[m],document.getElementById("tab-teachers").className=m==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=m==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const n=m=>{if(!m||!m.name.endsWith(".csv")){B("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const d=new FileReader;d.onload=w=>{s=Us(w.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${s.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=Vs(s,t),document.getElementById("import-preview").classList.remove("hidden")},d.readAsText(m,"UTF-8")};document.getElementById("csv-file").addEventListener("change",m=>n(m.target.files[0]));const o=document.getElementById("drop-zone");o.addEventListener("dragover",m=>{m.preventDefault(),o.classList.add("border-indigo-400","bg-indigo-50")}),o.addEventListener("dragleave",()=>o.classList.remove("border-indigo-400","bg-indigo-50")),o.addEventListener("drop",m=>{m.preventDefault(),o.classList.remove("border-indigo-400","bg-indigo-50"),n(m.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!s.length)return;const m=document.getElementById("btn-import"),d=document.getElementById("import-progress"),w=document.getElementById("progress-bar"),a=document.getElementById("progress-text");m.disabled=!0,d.classList.remove("hidden");const f=(p,e)=>{const l=Math.round(p/e*100);w.style.width=l+"%",a.textContent=`${p} / ${e} แถว`};try{const e=await(t==="teachers"?Fs:zs)(s,f);if(B(`นำเข้าสำเร็จ ${e} รายการ`,"success"),w.style.width="100%",t==="students"){a.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const l=await Gn();B(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(l==null?void 0:l.enrolled)??0} รายการ)`,"success")}catch{}a.textContent=`นำเข้าสำเร็จ ${e} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(p){B("นำเข้าไม่สำเร็จ: "+ae(p),"error")}finally{m.disabled=!1}})}async function fa(){var m,d,w;re("payments"),document.getElementById("page-title").textContent="การชำระเงิน",ne(`<div class="max-w-2xl mx-auto animate-fade">
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
      ${["ทั้งหมด","รอตรวจสอบ","อนุมัติแล้ว","ปฏิเสธ"].map((a,f)=>`<button class="pay-tab text-sm font-medium px-3 py-2 border-b-2 transition
          ${f===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-400 hover:text-gray-600"}"
          data-filter="${["all","pending","approved","rejected"][f]}">${a}</button>`).join("")}
    </div>

    <div id="pay-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div>
        <p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`);let t=[],s="all";const n=()=>{const a=document.getElementById("pay-list");if(!a)return;const f={pending:0,approved:1,rejected:2},p=(s==="all"?t:t.filter(e=>e.status===s)).slice().sort((e,l)=>{const c=(f[e.status]??9)-(f[l.status]??9);return c!==0?c:new Date(l.created_at)-new Date(e.created_at)});if(!p.length){a.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}a.innerHTML=p.map(e=>{var v,I,T,b,_;const l={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[e.status]??{label:e.status,cls:"bg-gray-100 text-gray-600"},c={semester:`📦 เหมาทั้งเทอม (${e.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(e.room_count??1)||1} ห้อง (${e.amount??49} บ.)`,donation:`☕ โดเนท ${e.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[e.package_type]??`${e.package_type} (${e.amount??0} บ.)`,i=new Date(e.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${e.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${e.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${e.id}" data-teacher="${(v=e.teachers)==null?void 0:v.id}" data-pkg="${e.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(((I=e.teachers)==null?void 0:I.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${((T=e.teachers)==null?void 0:T.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((b=e.teachers)==null?void 0:b.teacher_code)??"—"} · ${((_=e.teachers)==null?void 0:_.phone)??"—"}</p>
            </div>
          </div>
          <span class="text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${l.cls}">
            ${l.label}
          </span>
        </div>

        <!-- รายละเอียด -->
        <div class="px-4 py-3 space-y-2">
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">แพ็กเกจ</span>
            <span class="font-medium text-gray-700">${c}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">ส่งเมื่อ</span>
            <span class="text-gray-600">${i}</span>
          </div>
          ${e.admin_note?`
          <div class="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500">
            💬 หมายเหตุ: ${e.admin_note}
          </div>`:""}
        </div>

        <!-- สลิป -->
        ${e.slip_url?`
        <div class="px-4 pb-3">
          <button class="view-slip-btn w-full py-2 rounded-xl border border-gray-200 text-sm text-indigo-600 font-medium hover:bg-indigo-50 transition"
            data-url="${Y(e.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>`:`
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${e.status==="pending"?(()=>{var q,A,L;return e.package_type==="donation"?`
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${e.id}" data-teacher="${(q=e.teachers)==null?void 0:q.id}">
              ☕ รับทราบ / ขอบคุณ
            </button>
          </div>`:e.package_type==="school_sponsored"?`
          <div class="px-4 pb-4">
            <button class="approve-btn flex-1 w-full py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${e.id}" data-teacher="${(A=e.teachers)==null?void 0:A.id}" data-pkg="${e.package_type}">
              🏫 อนุมัติสิทธิ์
            </button>
          </div>`:`
          <div class="flex gap-2 px-4 pb-4">
            <button class="reject-btn flex-1 py-2.5 rounded-xl border-2 border-red-200 text-red-600
                           text-sm font-semibold hover:bg-red-50 transition" data-id="${e.id}">
              ❌ ปฏิเสธ
            </button>
            <button class="approve-btn flex-1 py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${e.id}" data-teacher="${(L=e.teachers)==null?void 0:L.id}" data-pkg="${e.package_type}">
              ✅ อนุมัติ
            </button>
          </div>`})():""}
      </div>`}).join(""),a.querySelectorAll(".donate-ack-btn").forEach(e=>{e.addEventListener("click",async()=>{var i,v;const c=((i=(await ce().catch(()=>({}))).donationThankYouCard)==null?void 0:i.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){e.disabled=!0,e.textContent="⏳ กำลังดำเนินการ...";try{await Ke(parseInt(e.dataset.id),"approved",c),await lt(parseInt(e.dataset.teacher),"donation"),B("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(v=window._refreshPaymentBadge)==null||v.call(window),t=await Ee(),n()}catch{B("เกิดข้อผิดพลาด","error"),e.disabled=!1,e.textContent="☕ รับทราบ / ขอบคุณ"}}})}),a.querySelectorAll(".approve-btn").forEach(e=>{e.addEventListener("click",async()=>{var i;const l=e.dataset.pkg==="school_sponsored";if(confirm(l?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){e.disabled=!0,e.textContent="⏳ กำลังอนุมัติ...";try{await Ke(parseInt(e.dataset.id),"approved"),await lt(parseInt(e.dataset.teacher),e.dataset.pkg),B("อนุมัติแล้ว ✅","success"),(i=window._refreshPaymentBadge)==null||i.call(window),t=await Ee(),n()}catch{B("เกิดข้อผิดพลาด","error"),e.disabled=!1,e.textContent=l?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),a.querySelectorAll(".reject-btn").forEach(e=>{e.addEventListener("click",()=>{Gr(parseInt(e.dataset.id),async l=>{var c;await Ke(parseInt(e.dataset.id),"rejected",l),B("ปฏิเสธแล้ว","info"),(c=window._refreshPaymentBadge)==null||c.call(window),t=await Ee(),n()})})}),a.querySelectorAll(".view-slip-btn").forEach(e=>{e.addEventListener("click",()=>Vr(e.dataset.url))})};try{t=await Ee(),n()}catch{B("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(a=>{a.addEventListener("click",()=>{s=a.dataset.filter,document.querySelectorAll(".pay-tab").forEach(f=>{f.classList.toggle("border-indigo-600",f===a),f.classList.toggle("text-indigo-600",f===a),f.classList.toggle("border-transparent",f!==a),f.classList.toggle("text-gray-400",f!==a)}),n()})}),(m=document.getElementById("pay-refresh"))==null||m.addEventListener("click",async()=>{t=await Ee(),n(),B("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",a=>{if(!a.target.classList.contains("pay-cb"))return;const f=document.querySelectorAll(".pay-cb:checked"),p=document.getElementById("pay-bulk-approve");f.length>0?(p.classList.remove("hidden"),p.textContent=`✅ อนุมัติ ${f.length} คน`):p.classList.add("hidden")});const o=async a=>{var p,e;let f=0;for(const l of a)try{await Ke(parseInt(l.id),"approved"),await lt(parseInt(l.teacher),l.pkg),f++}catch{}B(`อนุมัติ ${f}/${a.length} รายการ ✅`,"success"),(p=window._refreshPaymentBadge)==null||p.call(window),t=await Ee(),n(),(e=document.getElementById("pay-bulk-approve"))==null||e.classList.add("hidden")};(d=document.getElementById("pay-bulk-approve"))==null||d.addEventListener("click",async()=>{const a=[...document.querySelectorAll(".pay-cb:checked")];a.length&&confirm(`อนุมัติ ${a.length} คนที่เลือก?`)&&await o(a.map(f=>({id:f.dataset.id,teacher:f.dataset.teacher,pkg:f.dataset.pkg})))}),(w=document.getElementById("pay-approve-all"))==null||w.addEventListener("click",async()=>{const a=t.filter(f=>f.status==="pending");if(!a.length){B("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${a.length} รายการ?`)&&await o(a.map(f=>{var p;return{id:f.id,teacher:(p=f.teachers)==null?void 0:p.id,pkg:f.package_type}}))})}async function Vr(t){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",s.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${Y(t)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(s),s.querySelector("button").addEventListener("click",()=>s.remove()),s.addEventListener("click",a=>{a.target===s&&s.remove()});const n=s.querySelector("#slip-viewer"),o=s.querySelector("#slip-download"),m=await cs(t),d=Y(m),w=String(m).split("?")[0].toLowerCase().endsWith(".pdf");o&&(o.href=m),n&&(n.innerHTML=w?`<iframe src="${d}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${d}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`)}function Gr(t,s){const n=document.createElement("div");n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#rj-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#rj-confirm").addEventListener("click",async()=>{const o=n.querySelector("#reject-note").value.trim()||null;n.remove(),await s(o)})}async function ha(){re("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const t=await ce().catch(()=>({})),s=parseInt(t.academicYear??2568),n=parseInt(t.semester??1),o=async()=>{const d=await _n(s,n,"สามัญ").catch(()=>[]);m(d)},m=d=>{var I;const w=T=>`
      <tr class="hover:bg-gray-50 transition lsk-row" data-id="${T.id}">
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${T.name}</td>
        <td class="px-4 py-3 text-center text-sm text-gray-600">${T.max_score}</td>
        <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${T.sheet_col??"—"}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-400">${T.sort_order}</td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <button class="lsk-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${T.id}">แก้ไข</button>
          <button class="lsk-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${T.id}" data-name="${T.name}">ลบ</button>
        </td>
      </tr>`,a=T=>T.length?`<table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th>
              <th class="px-4 py-3 text-center">คะแนนเต็ม</th>
              <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th>
              <th class="px-4 py-3 text-center">ลำดับ</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">${T.map(w).join("")}</tbody>
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',f=T=>T.replace("SheetId","SheetTab"),p=T=>T.replace("SheetId","StudentRange"),e=(T,b)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${b})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${T}" value="${t[T]??""}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${T}" value="${t[f(T)]??""}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${T}" value="${t[p(T)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${T}" data-tab-key="${f(T)}" data-range-key="${p(T)}">บันทึก</button>
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
    </div>`);const l=[...d];(I=document.getElementById("btn-fill-ls-classes"))==null||I.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนทักษะชีวิตไปยังรายวิชากลุ่มทักษะชีวิตทั้งหมด?"))return;const T=document.getElementById("btn-fill-ls-classes"),b=T.textContent;T.disabled=!0,T.textContent="กำลังเติม...";try{const _=await Tn(s,n);B(`เติมทักษะชีวิต ${_.classes} รายวิชา / ${_.scores} คะแนนแล้ว`,"success")}catch(_){B("เติมไม่สำเร็จ: "+ae(_),"error")}finally{T.disabled=!1,T.textContent=b}});const c=async()=>{var g;document.getElementById("lsk-tab-actions").innerHTML=`
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
        </div>`;const[{columns:T,scores:b},_]=await Promise.all([Hn(s,n).catch(()=>({columns:[],scores:[]})),Ne().catch(()=>[])]),q=(T??[]).filter(r=>r.category==="สามัญ"),A={};for(const r of b)A[r.student_id]||(A[r.student_id]={}),A[r.student_id][r.column_id]=r.score;const L=_.filter(r=>(r==null?void 0:r.id)&&(r==null?void 0:r.student_code)&&(r==null?void 0:r.main_room)).sort((r,u)=>(r.main_room??"").localeCompare(u.main_room??"",void 0,{numeric:!0})||(r.student_code??"").localeCompare(u.student_code??"")),S=document.getElementById("lsk-filter-grade"),k=document.getElementById("lsk-filter-room");S.innerHTML='<option value="">ทุกระดับชั้น</option>'+ue(L.map(r=>Se(r.main_room))).map(r=>`<option value="${r}">${r}</option>`).join("");const H=()=>{const r=S.value,u=k.value,h=ue(L.filter(C=>!r||Se(C.main_room)===r).map(C=>qe(C.main_room)));k.innerHTML='<option value="">ทุกห้อง</option>'+h.map(C=>`<option value="${C}" ${C===u?"selected":""}>ห้อง ${C}</option>`).join(""),u&&!h.includes(u)&&(k.value="")},$=r=>{if(document.getElementById("lsk-filter-count").textContent=`${r.length} คน`,!r.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
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
              ${r.map((u,h)=>{const C=q.reduce((M,E)=>{var j;return M+(((j=A[u.id])==null?void 0:j[E.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${h+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${u.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${u.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${u.main_room??"—"}</td>
                  ${q.map(M=>{var j;const E=(j=A[u.id])==null?void 0:j[M.id];return`<td class="px-2 py-2 text-center ${E!=null?"text-gray-800 font-medium":"text-gray-300"}">${E??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${C||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};H();let x=[...L];$(x);const y=()=>{H();const r=S.value,u=k.value,h=document.getElementById("lsk-filter-search").value.toLowerCase();x=L.filter(C=>{var M,E;return(!r||Se(C.main_room)===r)&&(!u||qe(C.main_room)===u)&&(!h||((M=C.full_name)==null?void 0:M.toLowerCase().includes(h))||((E=C.student_code)==null?void 0:E.includes(h)))}),$(x)};S.addEventListener("change",y),k.addEventListener("change",y),document.getElementById("lsk-filter-search").addEventListener("input",y),(g=document.getElementById("btn-sync-ls"))==null||g.addEventListener("click",async()=>{const r=document.getElementById("btn-sync-ls");r.disabled=!0,r.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:u}=await se(async()=>{const{syncCentralBatch:R}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(N=>N.n);return{syncCentralBatch:R}},__vite__mapDeps([11,4,5,1,12,7,10]));if(!q.length){B("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!t.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const h=x.map(R=>({id:R.id,student_code:R.student_code})),C=new Set(h.map(R=>R.id)),M=new Set(q.map(R=>R.id)),E=b.filter(R=>C.has(R.student_id)&&M.has(R.column_id)),j=await u(t.lifeSkillSheetIdSamai,t.lifeSkillSheetTabSamai,q,E,h,{studentColRange:t.lifeSkillStudentRangeSamai||"J8:J3000"});if(!j){B("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}B(`ส่งคำสั่ง Sync ทักษะชีวิต ${h.length} คน / ${j} คะแนนแล้ว`,"success")}catch(u){B("Sync ไม่สำเร็จ: "+ae(u),"error")}finally{r.disabled=!1,r.textContent="↑ Sync ไปชีทกลาง"}})},i=()=>{document.getElementById("lsk-tab-actions").innerHTML=`
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`,document.getElementById("lsk-tab-content").innerHTML=`<div class="space-y-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${d.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${a(d)}</div>
          ${e("lifeSkillSheetIdSamai","สามัญ")}
        </div>
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>Ft(null,s,n,o)),document.querySelectorAll(".lsk-edit").forEach(T=>{T.addEventListener("click",()=>{const b=l.find(_=>_.id===+T.dataset.id);b&&Ft(b,s,n,o)})}),document.querySelectorAll(".lsk-del").forEach(T=>{T.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${T.dataset.name}"?`))try{await Rn(+T.dataset.id),B("ลบแล้ว","success"),o()}catch(b){B("ลบไม่สำเร็จ: "+ae(b),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach(T=>{T.addEventListener("click",async()=>{var H,$,x;const b=T.dataset.key,_=T.dataset.tabKey,q=T.dataset.rangeKey,A=((H=document.getElementById(`lsk-sheet-${b}`))==null?void 0:H.value.trim())??"",L=(($=document.getElementById(`lsk-tab-${b}`))==null?void 0:$.value.trim())??"",S=((x=document.getElementById(`lsk-range-${b}`))==null?void 0:x.value.trim())??"J8:J3000",k=T.textContent;T.disabled=!0,T.textContent="⏳";try{await Promise.all([oe(b,A),oe(_,L),oe(q,S)]),t[b]=A,t[_]=L,t[q]=S,T.textContent="✅",T.style.background="#16a34a",setTimeout(()=>{T.disabled=!1,T.textContent=k,T.style.background=""},1500),B("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{B("บันทึกไม่สำเร็จ","error"),T.disabled=!1,T.textContent=k}})})},v=T=>{document.querySelectorAll("[data-tab]").forEach(b=>{const _=b.dataset.tab===T;b.className=_?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),T==="scores"?c():i()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>v("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>v("config")),v("scores")};o()}function Ft(t,s,n,o){var w;(w=document.getElementById("lsk-modal"))==null||w.remove();const m=!!t,d=document.createElement("div");d.id="lsk-modal",d.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",d.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${m?"แก้ไขหัวข้อ":"เพิ่มหัวข้อ"}</h3>
      <form id="lsk-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อหัวข้อ <span class="text-red-400">*</span></label>
          <input id="lsk-name" type="text" value="${(t==null?void 0:t.name)??""}" placeholder="เช่น ปฏิบัติศาสนา"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
            <input id="lsk-max" type="number" min="1" max="100" value="${(t==null?void 0:t.max_score)??20}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ลำดับ</label>
            <input id="lsk-order" type="number" min="0" value="${(t==null?void 0:t.sort_order)??0}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Google Sheet <span class="text-xs text-gray-400">(เช่น EH)</span></label>
          <input id="lsk-sheetcol" type="text" value="${(t==null?void 0:t.sheet_col)??""}" placeholder="EH"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase" />
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button" id="lsk-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button type="submit" id="lsk-save"
            class="btn-primary flex-1 py-2.5 rounded-xl text-white text-sm font-semibold">
            ${m?"บันทึก":"เพิ่ม"}
          </button>
        </div>
      </form>
    </div>`,document.body.appendChild(d),d.querySelector("#lsk-cancel").addEventListener("click",()=>d.remove()),d.addEventListener("click",a=>{a.target===d&&d.remove()}),d.querySelector("#lsk-form").addEventListener("submit",async a=>{a.preventDefault();const f=d.querySelector("#lsk-save");f.disabled=!0,f.textContent="กำลังบันทึก...";try{const p={name:d.querySelector("#lsk-name").value.trim(),max_score:parseInt(d.querySelector("#lsk-max").value)||20,sort_order:parseInt(d.querySelector("#lsk-order").value)||0,sheet_col:d.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:s,semester:n};m?await Un(t.id,p):await Vn(p),B("บันทึกสำเร็จ","success"),d.remove(),o()}catch(p){B("บันทึกไม่สำเร็จ: "+ae(p),"error"),f.disabled=!1,f.textContent=m?"บันทึก":"เพิ่ม"}})}const Yr=t=>{const s=aa(t);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${s.cls}">${s.label}</span>`};async function va(){re("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const t=await ce().catch(()=>({})),s=parseInt(t.academicYear??2568),n=parseInt(t.semester??1);Pt(t);const o=e=>`
    <tr class="hover:bg-gray-50 transition" data-id="${e.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${e.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${e.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${e.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${e.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${e.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${e.id}" data-name="${e.name}">ลบ</button>
      </td>
    </tr>`;let m=[];const d=async()=>{var l;m=await $n(s,n).catch(()=>[]),w();const e=((l=document.querySelector("[data-tab].bg-white"))==null?void 0:l.dataset.tab)??"scores";p(e)},w=()=>{ne(`<div class="max-w-5xl mx-auto animate-fade">
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
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>p("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>p("config"))},a=async()=>{var L,S;document.getElementById("rsa-tab-actions").innerHTML=`
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
      </div>`;const[{columns:e,scores:l},c]=await Promise.all([qn(s,n).catch(()=>({columns:[],scores:[]})),Ne().catch(()=>[])]),i={};for(const k of l)i[k.student_id]||(i[k.student_id]={}),i[k.student_id][k.column_id]=k.score;const v=c.filter(k=>(k==null?void 0:k.id)&&(k==null?void 0:k.student_code)&&(k==null?void 0:k.main_room)).sort((k,H)=>(k.main_room??"").localeCompare(H.main_room??"",void 0,{numeric:!0})||(k.student_code??"").localeCompare(H.student_code??"")),I=document.getElementById("rsa-filter-grade"),T=document.getElementById("rsa-filter-room");I.innerHTML='<option value="">ทุกระดับชั้น</option>'+ue(v.map(k=>Se(k.main_room))).map(k=>`<option value="${k}">${k}</option>`).join("");const b=()=>{const k=I.value,H=T.value,$=ue(v.filter(x=>!k||Se(x.main_room)===k).map(x=>qe(x.main_room)));T.innerHTML='<option value="">ทุกห้อง</option>'+$.map(x=>`<option value="${x}" ${x===H?"selected":""}>ห้อง ${x}</option>`).join(""),H&&!$.includes(H)&&(T.value="")},_=k=>{if(document.getElementById("rsa-filter-count").textContent=`${k.length} คน`,!k.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${e.map(H=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${H.name}<br><span class="font-normal text-gray-400">(${H.max_score})</span></th>`).join("")}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${k.map((H,$)=>{const x=e.reduce((r,u)=>{var h;return r+(((h=i[H.id])==null?void 0:h[u.id])??0)},0),y=x/2,g=x>0?Yr(y):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${$+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${H.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${H.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${H.main_room??"—"}</td>
                ${e.map(r=>{var h;const u=(h=i[H.id])==null?void 0:h[r.id];return`<td class="px-2 py-2 text-center ${u!=null?"text-gray-800 font-medium":"text-gray-300"}">${u??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${x||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${x>0?y.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${g}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};b();let q=[...v];_(q);const A=()=>{b();const k=I.value,H=T.value,$=document.getElementById("rsa-filter-search").value.toLowerCase();q=v.filter(x=>{var y,g;return(!k||Se(x.main_room)===k)&&(!H||qe(x.main_room)===H)&&(!$||((y=x.full_name)==null?void 0:y.toLowerCase().includes($))||((g=x.student_code)==null?void 0:g.includes($)))}),_(q)};I.addEventListener("change",A),T.addEventListener("change",A),document.getElementById("rsa-filter-search").addEventListener("input",A),(L=document.getElementById("btn-sync-rs"))==null||L.addEventListener("click",async()=>{const k=document.getElementById("btn-sync-rs");if(!t.readingScoreSheetId){B("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}k.disabled=!0,k.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:H}=await se(async()=>{const{syncCentralBatch:u}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(h=>h.n);return{syncCentralBatch:u}},__vite__mapDeps([11,4,5,1,12,7,10])),$=q.map(u=>({id:u.id,student_code:u.student_code})),x=new Set($.map(u=>u.id)),y=new Set(e.map(u=>u.id)),g=l.filter(u=>x.has(u.student_id)&&y.has(u.column_id)),r=await H(t.readingScoreSheetId,t.readingScoreSheetTab,e,g,$,{studentColRange:t.readingScoreStudentRange||"J8:J3000"});if(!r){B("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}B(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${$.length} คน / ${r} คะแนนแล้ว`,"success")}catch(H){B("Sync ไม่สำเร็จ: "+ae(H),"error")}finally{k.disabled=!1,k.textContent="↑ Sync ไปชีทกลาง"}}),(S=document.getElementById("btn-fill-reading-eval"))==null||S.addEventListener("click",async()=>{const k=document.getElementById("btn-fill-reading-eval");if(!t.readingEvalClassSheetCol){B("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}k.disabled=!0,k.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:H}=await se(async()=>{const{syncReadingEvalToClassSheets:g}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(r=>r.n);return{syncReadingEvalToClassSheets:g}},__vite__mapDeps([11,4,5,1,12,7,10])),{getAllClassesForFill:$}=await se(async()=>{const{getAllClassesForFill:g}=await import("./api-Cf_Y4s92.js");return{getAllClassesForFill:g}},__vite__mapDeps([0,1])),x={};for(const g of v){const r=e.reduce((u,h)=>{var C;return u+(((C=i[g.id])==null?void 0:C[h.id])??0)},0);if(r>0){const u=r/2;x[g.id]={label:aa(u).label,score100:u}}}const y=await $();await H(y,x,t.readingEvalClassSheetCol),B(`ป้อนผลประเมินอ่านฯ ไป ${y.length} ห้องสำเร็จ`,"success")}catch(H){B("ป้อนไม่สำเร็จ: "+ae(H),"error")}finally{k.disabled=!1,k.textContent="📝 ป้อนผล → ทุกวิชา"}})},f=()=>{var l,c,i;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const e=m.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${m.map(o).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${m.length} หัวข้อ · รวม ${m.reduce((v,I)=>v+I.max_score,0)} คะแนน</span>
        </div>
        <div>${e}</div>
        <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet</p>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
            <input type="text" id="rsa-sheet-id" value="${t.readingScoreSheetId??""}" placeholder="1BxiMV..."
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
            <input type="text" id="rsa-sheet-tab" value="${t.readingScoreSheetTab??""}" placeholder="Sheet1"
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
            <input type="text" id="rsa-student-range" value="${t.readingScoreStudentRange??"J8:J3000"}" placeholder="เช่น J8:J3000"
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <button id="rsa-save-sheet" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0">บันทึก</button>
          </div>
          <div class="border-t border-gray-100 mt-3 pt-3">
            <p class="text-xs font-semibold text-gray-500 mb-2">📝 ป้อนผลประเมิน → ชีทรายวิชา (ทุกห้อง)</p>
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-400 w-20 flex-shrink-0">คอลัมน์:</span>
              <input type="text" id="rsa-eval-col" value="${t.readingEvalClassSheetCol??""}" placeholder="เช่น EZ"
                class="w-24 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono uppercase bg-white focus:outline-none focus:ring-2 focus:ring-violet-300" maxlength="4" />
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${De.map(v=>v.label).join("/")})</span>
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
          ${De.map((v,I)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${I}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${I+1}:</span>
              <input type="text" data-rsa-label value="${he(v.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${v.min}" min="0" max="100" ${I===De.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${I===De.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${I===De.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>Vt(null,s,n,d)),document.querySelectorAll(".rsa-edit").forEach(v=>{v.addEventListener("click",()=>{const I=m.find(T=>T.id===+v.dataset.id);I&&Vt(I,s,n,d)})}),document.querySelectorAll(".rsa-del").forEach(v=>{v.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${v.dataset.name}"?`))try{await Mn(+v.dataset.id),B("ลบแล้ว","success"),d()}catch(I){B("ลบไม่สำเร็จ: "+ae(I),"error")}})}),(l=document.getElementById("rsa-save-sheet"))==null||l.addEventListener("click",async()=>{var _,q,A;const v=document.getElementById("rsa-save-sheet"),I=((_=document.getElementById("rsa-sheet-id"))==null?void 0:_.value.trim())??"",T=((q=document.getElementById("rsa-sheet-tab"))==null?void 0:q.value.trim())??"",b=((A=document.getElementById("rsa-student-range"))==null?void 0:A.value.trim())??"J8:J3000";v.disabled=!0,v.textContent="⏳";try{await Promise.all([oe("readingScoreSheetId",I),oe("readingScoreSheetTab",T),oe("readingScoreStudentRange",b)]),t.readingScoreSheetId=I,t.readingScoreSheetTab=T,t.readingScoreStudentRange=b,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),B("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{B("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(c=document.getElementById("rsa-save-eval-col"))==null||c.addEventListener("click",async()=>{var T;const v=document.getElementById("rsa-save-eval-col"),I=(((T=document.getElementById("rsa-eval-col"))==null?void 0:T.value.trim())??"").toUpperCase();v.disabled=!0,v.textContent="⏳";try{await oe("readingEvalClassSheetCol",I),t.readingEvalClassSheetCol=I,v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึก",v.style.background=""},1500),B("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{B("บันทึกไม่สำเร็จ","error"),v.disabled=!1,v.textContent="บันทึก"}}),(i=document.getElementById("rsa-save-grades"))==null||i.addEventListener("click",async()=>{const v=document.getElementById("rsa-save-grades"),I=document.getElementById("rsa-grades-err");I.textContent="";const T=[...document.querySelectorAll("[data-rsa-grade-row]")].map((b,_)=>({label:b.querySelector("[data-rsa-label]").value.trim(),min:_===De.length-1?0:parseFloat(b.querySelector("[data-rsa-min]").value)}));if(T.some(b=>!b.label)){I.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if(T.some(b=>Number.isNaN(b.min)||b.min<0||b.min>100)){I.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let b=0;b<T.length-1;b++)if(T[b].min<=T[b+1].min){I.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}v.disabled=!0,v.textContent="⏳";try{await oe("readingEvalThresholds",JSON.stringify(T)),Pt({readingEvalThresholds:JSON.stringify(T)}),v.textContent="✅",v.style.background="#16a34a",setTimeout(()=>{v.disabled=!1,v.textContent="บันทึกเกณฑ์",v.style.background=""},1500),B("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(b){B("บันทึกไม่สำเร็จ: "+ae(b),"error"),v.disabled=!1,v.textContent="บันทึกเกณฑ์"}})},p=e=>{document.querySelectorAll("[data-tab]").forEach(l=>{l.className=l.dataset.tab===e?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),e==="scores"?a():f()};d()}const Ce={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function ze(t,s){var d;(d=document.getElementById("admin-picker"))==null||d.remove();const n=document.createElement("div");n.id="admin-picker",n.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const o=(t.target.closest("td,th,button")??t.target).getBoundingClientRect();n.style.top=Math.min(o.bottom+4,window.innerHeight-60)+"px",n.style.left=Math.max(4,Math.min(o.left,window.innerWidth-220))+"px";const m=document.createElement("button");m.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",m.textContent="✕ ล้าง",m.onclick=()=>{n.remove(),s(null)},n.appendChild(m),Object.entries(Ce).forEach(([w,a])=>{const f=document.createElement("button");f.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${a.bg} ${a.color} hover:opacity-80 transition`,f.textContent=a.label,f.title=a.fullLabel,f.onclick=()=>{n.remove(),s(w)},n.appendChild(f)}),document.body.appendChild(n),setTimeout(()=>document.addEventListener("click",()=>n.remove(),{once:!0}),50)}const zt=["อา","จ","อ","พ","พฤ","ศ","ส"];function Wr(t,s){const n=[],o=new Date(t),m=new Date(s),d=o.getDay()%7;d&&o.setDate(o.getDate()-d);let w=new Date(o),a=1;for(;w<=m;){const f=[];for(let p=0;p<5;p++){const e=new Date(w);e.setDate(e.getDate()+p),e<=m&&f.push({date:new Date(e),ds:e.toISOString().slice(0,10)})}f.length&&(n.push({n:a,days:f}),a++),w.setDate(w.getDate()+7)}return n}function Ut(t,s){const n=s.reduce((m,d)=>{var w;return m+(((w=Ce[t[d.ds]])==null?void 0:w.score)??0)},0),o=s.length*2;return o>0?Math.min(10,Math.max(0,Math.round(n/o*100)/10)):0}function Je(t){return`${t.getDate()}/${t.getMonth()+1}`}async function wa(t){var v,I,T,b;re("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let s=null,n=t;if(!n)try{const{data:_}=await le.auth.getSession(),q=((I=(v=_==null?void 0:_.session)==null?void 0:v.user)==null?void 0:I.id)??null;if(q){const{data:A}=await le.from("teachers").select("*").eq("profile_id",q).maybeSingle();n=A??null}}catch(_){console.error("Failed to load teacher session:",_)}const[o,m]=await Promise.all([ce().catch(()=>({})),Jt().catch(()=>[])]),d=m,w=(o.prayerScannerTeachers||"").split(/[\s,]+/).map(_=>_.trim()).filter(Boolean);let a=!1;if(n){const{data:_}=await le.from("profiles").select("role").eq("id",n.profile_id).maybeSingle();a=w.includes(n.teacher_code)||n.staff_type==="แอดมิน"||n.position==="admin"||(_==null?void 0:_.role)==="admin"}ne(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const f=()=>{var W;const _=o.semester_start,q=o.semester_end,A=_&&q?Wr(_,q):[],L=A.flatMap(P=>P.days);if(document.getElementById("pr-tab-actions").innerHTML=`
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
      </div>`,(W=document.getElementById("btn-fill-prayer-classes"))==null||W.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const P=document.getElementById("btn-fill-prayer-classes"),V=P.textContent;P.disabled=!0,P.textContent="กำลังเติม...";try{const K=await jn({semesterStart:o.semester_start,semesterEnd:o.semester_end,attendanceScoreMode:o.attendanceScoreMode??"recorded"});B(`เติมรายวิชาศาสนา ${K.classes} รายวิชา / ${K.scores} คะแนนแล้ว`,"success")}catch(K){B("เติมไม่สำเร็จ: "+ae(K),"error")}finally{P.disabled=!1,P.textContent=V}}),document.getElementById("pr-tab-content").innerHTML=`
      <div class="flex items-center gap-2 flex-wrap mb-3">
        <!-- Room searchable picker -->
        <div class="relative" id="pr-room-picker-wrap">
          <button id="pr-room-btn" type="button"
            class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px] text-left flex items-center justify-between gap-2">
            <span id="pr-room-label" class="truncate">${d[0]??"—"}</span>
            <span class="text-gray-400">▾</span>
          </button>
          <div id="pr-room-dropdown"
            class="hidden absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            <div class="p-2 border-b border-gray-100">
              <input id="pr-room-search" type="text" placeholder="ค้นหาห้อง... (74 ห้อง)"
                class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div id="pr-room-list" class="overflow-y-auto" style="max-height:260px">
              ${d.map(P=>`<button type="button" data-room="${P}"
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
           </div>`}`,!_||!q)return;const S="border border-gray-200 text-center text-xs select-none",k="sticky left-0 z-20 bg-white border border-gray-200",H="sticky z-20 bg-white border border-gray-200",$=P=>P>=8?"text-emerald-600":P>=6?"text-amber-500":"text-red-600",x=30,y=160,g={};let r=[],u=[];const h=(P,V=!0)=>{P&&(P.style.outline=`2px solid ${V?"#059669":"#ef4444"}`,P.style.outlineOffset="1px",setTimeout(()=>{P.style.outline="",P.style.outlineOffset=""},700))},C=async(P,V,K,D)=>{var U;g[P]||(g[P]={}),D===null?delete g[P][V]:g[P][V]=D;const z=document.querySelector(`.pr-cell[data-sid="${P}"][data-date="${V}"]`);if(z){const Q=D?Ce[D]:null;Object.values(Ce).forEach(X=>z.classList.remove(X.bg)),Q?(z.classList.add(Q.bg),z.innerHTML=`<span class="${Q.color} text-xs">${Q.label}</span>`):z.innerHTML=""}E(P);const F=document.querySelector(`.adm-cell[data-sid="${P}"][data-date="${V}"]`);if(F){const Q=D?Ce[D]:null;F.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${Q?Q.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,F.innerHTML=Q?`<span class="${Q.color}">${Q.label}</span>`:'<span class="text-gray-200">·</span>'}try{const Q=((U=A.find(X=>X.days.some(G=>G.ds===V)))==null?void 0:U.n)??null;await vs(P,K,V,D,Q,"แอดมิน"),h(z,!0),h(F,!0)}catch(Q){console.error("[prayer save]",Q),h(z,!1),h(F,!1),B("บันทึกไม่สำเร็จ: "+ae(Q),"error")}},M=async(P,V)=>{const D=(await Promise.allSettled(P.map(([z,F,U])=>C(z,F,V,U)))).filter(z=>z.status==="rejected").length;D>0&&B(`บันทึกไม่สำเร็จ ${D} รายการ`,"error")},E=P=>{const V=g[P]??{},K=Ut(V,L),D=document.getElementById(`pr-sc-${P}`);D&&(D.textContent=K,D.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${$(K)} text-xs`)},j=(P,V)=>{if(document.getElementById("pr-filter-count").textContent=`${P.length} คน · ${L.length} วัน`,!P.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${k} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${H} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${H} bg-gray-50 text-left px-2" style="left:96px;min-width:${y}px">ชื่อ-นามสกุล</th>
              ${A.map(K=>`<th colspan="${K.days.length}"
                class="${S} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${K.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${K.n}">
                Week${K.n} ✎</th>`).join("")}
              <th class="${S} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${k} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${H} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${H} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${y}px">ชื่อ</th>
              ${A.flatMap(K=>K.days.map(D=>`<th class="${S} bg-gray-100 text-gray-400 font-normal"
                style="width:${x}px;min-width:${x}px;font-size:9px">
                ${zt[D.date.getDay()]}<br/>${Je(D.date)}</th>`)).join("")}
              <th class="${S} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${P.map((K,D)=>{const z=g[K.id]??{},F=Ut(z,L);return`<tr class="hover:bg-gray-50/60" data-sid="${K.id}">
                <td class="${k} text-center text-gray-400" style="width:28px">${D+1}</td>
                <td class="${H} text-center font-mono text-gray-600" style="left:28px;width:68px">${K.student_code??"—"}</td>
                <td class="${H} px-2" style="left:96px;min-width:${y}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${K.image_url?`<img src="${K.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${K.full_name??"—"}</span>
                  </div>
                </td>
                ${A.flatMap(U=>U.days.map(Q=>{const X=z[Q.ds]??null,G=X?Ce[X]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${G?G.bg:""}"
                    data-sid="${K.id}" data-date="${Q.ds}" data-room="${V}"
                    style="width:${x}px;min-width:${x}px;height:28px">
                    ${G?`<span class="${G.color} text-xs">${G.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${$(F)} text-xs"
                  id="pr-sc-${K.id}" style="min-width:48px">${F}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",K=>{const D=K.target.closest(".pr-week-th");if(!D)return;const z=+D.dataset.week,F=A.find(U=>U.n===z);F&&J(F,r,N)}),document.getElementById("pr-grid-wrap").addEventListener("click",K=>{const D=K.target.closest(".pr-cell");if(!D)return;K.stopPropagation();const z=+D.dataset.sid,F=D.dataset.date,U=D.dataset.room;ze(K,Q=>C(z,F,U,Q))})},R=async(P,V="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[K,D]=await Promise.all([On(P),Fn(P,_,q)]);r=K,Object.keys(g).forEach(F=>delete g[F]);for(const F of r)g[F.id]={};for(const F of D)g[F.student_id]||(g[F.student_id]={}),g[F.student_id][F.check_date]=F.status;u=L.map(F=>F.ds);const z=V?r.filter(F=>{var U,Q;return((U=F.full_name)==null?void 0:U.toLowerCase().includes(V))||((Q=F.student_code)==null?void 0:Q.includes(V))}):r;j(z,P)}catch(K){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${K.message}</div>`}};let N=d[0]??"";const O=P=>{N=P,document.getElementById("pr-room-label").textContent=P,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(K=>{const D=K.dataset.room===P;K.classList.toggle("bg-indigo-50",D),K.classList.toggle("font-semibold",D),K.classList.toggle("text-indigo-700",D)});const V=document.getElementById("pr-filter-search").value.toLowerCase();R(P,V)};document.getElementById("pr-room-btn").addEventListener("click",P=>{P.stopPropagation();const V=document.getElementById("pr-room-dropdown");V.classList.toggle("hidden"),V.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",P=>{const V=P.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(K=>{K.style.display=K.dataset.room.toLowerCase().includes(V)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",P=>{const V=P.target.closest(".pr-room-item");V&&O(V.dataset.room)}),document.addEventListener("click",()=>{var P;(P=document.getElementById("pr-room-dropdown"))==null||P.classList.add("hidden")},{capture:!0,once:!1}),N&&O(N),document.getElementById("pr-filter-search").addEventListener("input",P=>{const V=P.target.value.toLowerCase();if(!r.length)return;const K=V?r.filter(D=>{var z,F;return((z=D.full_name)==null?void 0:z.toLowerCase().includes(V))||((F=D.student_code)==null?void 0:F.includes(V))}):r;j(K,N)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-prayer");if(!o.prayerSheetId){B("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const V=Object.values(g).flatMap(D=>Object.keys(D)),K=[...new Set([...u,...V])].sort();if(!K.length){B("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.disabled=!0,P.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:D}=await se(async()=>{const{syncPrayerSheet:F}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(U=>U.n);return{syncPrayerSheet:F}},__vite__mapDeps([11,4,5,1,12,7,10])),z=r.map(F=>({id:F.id,student_code:F.student_code}));await D(o.prayerSheetId,o.prayerSheetTab||"Solat",o.prayerStudentRange||"A3:A3000",K,g,z),B(`Sync ละหมาด ${z.length} คน × ${K.length} วัน สำเร็จ`,"success")}catch(D){B("Sync ไม่สำเร็จ: "+ae(D),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-all-prayer");if(!o.prayerSheetId){B("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}P.disabled=!0,P.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:V}=await se(async()=>{const{syncPrayerSheet:ee}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(de=>de.n);return{syncPrayerSheet:ee}},__vite__mapDeps([11,4,5,1,12,7,10])),{getAllPrayerRecords:K,getStudents:D}=await se(async()=>{const{getAllPrayerRecords:ee,getStudents:de}=await import("./api-Cf_Y4s92.js");return{getAllPrayerRecords:ee,getStudents:de}},__vite__mapDeps([0,1])),[z,F]=await Promise.all([K(),D()]),U={};for(const ee of z)U[ee.student_id]||(U[ee.student_id]={}),U[ee.student_id][ee.check_date]=ee.status;const X=F.filter(ee=>ee.religion_room).map(ee=>({id:ee.id,student_code:ee.student_code})),G=[...new Set(z.map(ee=>ee.check_date))].sort(),te=[...new Set([...u,...G])].sort();if(!te.length||!X.length){B("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.textContent=`⏳ Sync ${X.length} คน × ${te.length} วัน...`,await V(o.prayerSheetId,o.prayerSheetTab||"Solat",o.prayerStudentRange||"A3:A3000",te,U,X),B(`✅ Sync ทุกห้อง ${X.length} คน × ${te.length} วัน สำเร็จ`,"success")}catch(V){B("Sync ไม่สำเร็จ: "+ae(V),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ทุกห้อง"}});const J=(P,V,K)=>{var U;(U=document.getElementById("admin-prayer-modal"))==null||U.remove();const D=document.createElement("div");D.id="admin-prayer-modal",D.className="fixed inset-0 z-[80] flex flex-col bg-white";const z=`${Je(P.days[0].date)}–${Je(P.days[P.days.length-1].date)}`,F=(Q,X)=>{var ee;const G=((ee=g[Q])==null?void 0:ee[X])??null,te=G?Ce[G]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${te?te.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${Q}" data-date="${X}" data-room="${K}">
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
                ${P.days.map(Q=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${zt[Q.date.getDay()]} ${Je(Q.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${Q.ds}" data-room="${K}">AllDay</button>
                  </th>`).join("")}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${V.map(Q=>`
                <tr class="hover:bg-gray-50/50" data-sid="${Q.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${Q.image_url?`<img src="${Q.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-xs">👤</div>'}
                      <span class="text-gray-800 truncate max-w-[120px]">${Q.full_name??"—"}</span>
                    </div>
                  </td>
                  ${P.days.map(X=>`<td class="px-2 py-2 text-center">${F(Q.id,X.ds)}</td>`).join("")}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${Q.id}" data-room="${K}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`,document.body.appendChild(D),D.querySelector("#adm-modal-body").addEventListener("click",Q=>{const X=Q.target.closest(".adm-cell");if(!X)return;Q.stopPropagation();const G=+X.dataset.sid,te=X.dataset.date;ze(Q,ee=>C(G,te,K,ee))}),D.querySelectorAll(".adm-day-all").forEach(Q=>{Q.addEventListener("click",X=>{X.stopPropagation();const G=Q.dataset.date;ze(X,te=>M(V.map(ee=>[ee.id,G,te]),K))})}),D.querySelectorAll(".adm-row-all").forEach(Q=>{Q.addEventListener("click",X=>{X.stopPropagation();const G=+Q.dataset.sid;ze(X,te=>M(P.days.map(ee=>[G,ee.ds,te]),K))})}),D.querySelector("#adm-all-check").addEventListener("click",Q=>{Q.stopPropagation(),ze(Q,X=>M(V.flatMap(G=>P.days.map(te=>[G.id,te.ds,X])),K))}),D.querySelector("#adm-modal-close").addEventListener("click",()=>D.remove())}},p=()=>{document.getElementById("pr-tab-actions").innerHTML="",s&&(clearInterval(s),s=null);const _=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
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
    `;let q=[],A="",L=!1;const S=1e3,k=r=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[r]||"ไม่ระบุพื้นที่",H=r=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[r]||"bg-gray-50 text-gray-500 border-gray-100",$=async r=>{const u=[];for(let h=0;;h+=S){const{data:C,error:M}=await le.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",r).not("location","is",null).order("created_at",{ascending:!1}).range(h,h+S-1);if(M)throw M;if(u.push(...C??[]),!C||C.length<S)break}return u},x=async()=>{var h;if(!document.getElementById("hist-table-body")){s&&(clearInterval(s),s=null);return}const u=((h=document.getElementById("hist-date-input"))==null?void 0:h.value)||_;if(!L){L=!0;try{q=await $(u),y()}catch(C){console.error("Fetch history failed:",C);const M=document.getElementById("hist-table-body");M&&(M.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${C.message}</td></tr>`)}finally{L=!1}}},y=()=>{var D,z;const r=((D=document.getElementById("hist-loc-filter"))==null?void 0:D.value)||"",u=(((z=document.getElementById("hist-search-input"))==null?void 0:z.value)||"").trim().toLowerCase(),h=q.filter(F=>{var U,Q,X,G;if(r&&F.location!==r||A&&(F.scanned_by||((U=F.teachers)==null?void 0:U.full_name)||"บันทึกมือ (เดิม)")!==A)return!1;if(u){const te=(((Q=F.students)==null?void 0:Q.full_name)||"").toLowerCase(),ee=(((X=F.students)==null?void 0:X.student_code)||"").toLowerCase(),de=(F.main_room||"").toLowerCase(),ge=(F.scanned_by||((G=F.teachers)==null?void 0:G.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),ve=F.input_method==="manual"?"กรอกรหัส manual":"qr";return te.includes(u)||ee.includes(u)||de.includes(u)||ge.includes(u)||ve.includes(u)}return!0}),C=h.length,M=h.filter(F=>F.status==="pray").length,E=h.filter(F=>F.status==="usor").length,j=C-M-E,R=document.getElementById("stat-hist-total"),N=document.getElementById("stat-hist-pray"),O=document.getElementById("stat-hist-usor"),J=document.getElementById("stat-hist-other");R&&(R.textContent=C),N&&(N.textContent=M),O&&(O.textContent=E),J&&(J.textContent=j);const W=new Set;q.forEach(F=>{var Q;const U=F.scanned_by||((Q=F.teachers)==null?void 0:Q.full_name);U&&W.add(U)});const P=document.getElementById("hist-operators-wrap");P&&(W.size===0?P.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(P.innerHTML=Array.from(W).map(F=>{const U=A===F;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${F.includes("(ครู)")||F.includes("ครู")?U?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":U?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${F}">${U?"✓ ":""}${F}</span>`}).join(""),P.querySelectorAll(".op-filter-chip").forEach(F=>{F.addEventListener("click",()=>{const U=F.dataset.op;A=A===U?"":U,y()})})));const V=document.getElementById("hist-table-count");V&&(V.textContent=`${h.length} รายการ`);const K=document.getElementById("hist-table-body");if(K){if(h.length===0){K.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}K.innerHTML=h.map((F,U)=>{var Te;const Q=F.created_at?new Date(F.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",X=F.students,G=X!=null&&X.image_url?`<img src="${X.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((X==null?void 0:X.full_name)||"?").charAt(0)}</div>`,te=X?`<div class="flex items-center gap-2.5">
              ${G}
              <div>
                <p class="font-bold text-gray-800 leading-none">${X.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${X.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${F.student_id})</span>`,ee={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[F.status]||`<span class="text-gray-400">${F.status||"—"}</span>`,de=F.scanned_by||((Te=F.teachers)==null?void 0:Te.full_name)||"บันทึกมือ (เดิม)",ge=F.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",ve=F.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${h.length-U}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${Q}</td>
            <td class="px-4 py-3">${te}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${F.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${H(F.location)}">
                ${k(F.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${de}</span>
              <div class="flex flex-wrap gap-1">${ge}${ve}</div>
            </td>
            <td class="px-4 py-3 text-center">${ee}</td>
          </tr>
        `}).join("")}},g=()=>{s&&(clearInterval(s),s=null);const r=document.getElementById("hist-live-toggle");r&&r.checked&&(s=setInterval(x,4e3))};setTimeout(()=>{var h,C,M;(h=document.getElementById("btn-hist-refresh"))==null||h.addEventListener("click",x),(C=document.getElementById("hist-date-input"))==null||C.addEventListener("change",()=>{A="",x()}),(M=document.getElementById("hist-loc-filter"))==null||M.addEventListener("change",y);const r=document.getElementById("hist-search-input");r&&r.addEventListener("input",y);const u=document.getElementById("hist-live-toggle");u&&u.addEventListener("change",g),x(),g()},50)},e=(_,q=!1)=>_==null||_===""?q:["1","true","yes","on"].includes(String(_).trim().toLowerCase()),l=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${d.map(_=>`<option value="${_}">${_}</option>`).join("")}
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
            <input type="text" id="pr-sheet-id" value="${o.prayerSheetId??""}" placeholder="วาง ID จาก URL ของ Google Sheet"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ชื่อแท็บ</label>
            <input type="text" id="pr-sheet-tab" value="${o.prayerSheetTab??"Solat"}" placeholder="Solat"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ช่วงรหัสนักเรียน</label>
            <input type="text" id="pr-stu-range" value="${o.prayerStudentRange??"A3:A3000"}" placeholder="A3:A3000"
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
                ${e(o.prayerSameRoomGuardMaleEnabled,!0)?"checked":""} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนชายห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ถ้าเปิดไว้ แกนนำนักเรียนจะบันทึกเพื่อนห้องเดียวกันไม่ได้</span>
              </span>
            </label>
            <label class="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 cursor-pointer">
              <input id="pr-guard-female" type="checkbox" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ${e(o.prayerSameRoomGuardFemaleEnabled,!1)?"checked":""} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนหญิงห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ปิดไว้ได้เมื่อจุดสแกนมีแกนนำน้อยหรือมีห้องเดียวเป็นหลัก</span>
              </span>
            </label>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">จำนวนครั้งที่อนุญาตให้กรอกรหัสแทน QR Code ต่อเดือน/นักเรียน</label>
            <input type="number" min="0" max="31" id="pr-manual-monthly-limit" value="${Number.isFinite(parseInt(o.prayerManualEntryMonthlyLimit??"2",10))?parseInt(o.prayerManualEntryMonthlyLimit??"2",10):2}"
              class="w-32 text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">ตั้งเป็น 0 เพื่อปิดการบันทึกด้วยการกรอกรหัส</p>
          </div>
          <button id="pr-save-scanner-safety"
            class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition">
            บันทึกความปลอดภัยระบบสแกน
          </button>
        </div>
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const _=document.getElementById("pr-save-cfg"),q=document.getElementById("pr-sheet-id").value.trim(),A=document.getElementById("pr-sheet-tab").value.trim()||"Solat",L=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";_.disabled=!0,_.textContent="⏳ กำลังบันทึก...";try{await Promise.all([oe("prayerSheetId",q),oe("prayerSheetTab",A),oe("prayerStudentRange",L)]),o.prayerSheetId=q,o.prayerSheetTab=A,o.prayerStudentRange=L,_.textContent="✅ บันทึกแล้ว",_.style.background="#16a34a",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึกการตั้งค่า",_.style.background=""},1800),B("บันทึก Sheet config ละหมาดแล้ว","success")}catch{B("บันทึกไม่สำเร็จ","error"),_.disabled=!1,_.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var k,H,$;const _=document.getElementById("pr-save-scanner-safety"),q=(k=document.getElementById("pr-guard-male"))!=null&&k.checked?"true":"false",A=(H=document.getElementById("pr-guard-female"))!=null&&H.checked?"true":"false",L=parseInt((($=document.getElementById("pr-manual-monthly-limit"))==null?void 0:$.value)||"2",10),S=String(Math.max(0,Math.min(31,Number.isFinite(L)?L:2)));_.disabled=!0,_.textContent="⏳ กำลังบันทึก...";try{await Promise.all([oe("prayerSameRoomGuardMaleEnabled",q),oe("prayerSameRoomGuardFemaleEnabled",A),oe("prayerManualEntryMonthlyLimit",S)]),o.prayerSameRoomGuardMaleEnabled=q,o.prayerSameRoomGuardFemaleEnabled=A,o.prayerManualEntryMonthlyLimit=S,B("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),_.textContent="✅ บันทึกแล้ว",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(x){B("บันทึกไม่สำเร็จ: "+ae(x),"error"),_.disabled=!1,_.textContent="บันทึกความปลอดภัยระบบสแกน"}})},c=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">⏱️ ช่วงเวลาเปิดระบบสแกนละหมาด</span>
        </div>
        <div class="px-5 py-4 space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">เวลาเริ่มสแกน</label>
              <input type="text" id="pr-scan-start" value="${o.prayerScanStartTime??"12:20"}" placeholder="12:20"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับแกนนำทั่วไป</label>
              <input type="text" id="pr-scan-end" value="${o.prayerScanEndTime??"12:50"}" placeholder="12:50"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับประธาน/รองประธาน</label>
              <input type="text" id="pr-scan-ext-end" value="${o.prayerScanExtendedEndTime??"13:05"}" placeholder="13:05"
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
    `;let _=[],q={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const A=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],L=x=>(x||"").split(/[\s,]+/).map(y=>y.trim()).filter(Boolean),S=x=>String(x||"").trim(),k=x=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[x]||"ทั้งหมด",H=async(x,y)=>{const g=await ce().catch(()=>({})),r=new Set(L(g.prayerExtendedScannerStudents));y?r.add(String(x)):r.delete(String(x));const u=Array.from(r).join(",");return await oe("prayerExtendedScannerStudents",u),o.prayerExtendedScannerStudents=u,u};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const x=document.getElementById("pr-save-scanner-time-cfg"),y=document.getElementById("pr-scan-start").value.trim()||"12:20",g=document.getElementById("pr-scan-end").value.trim()||"12:50",r=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![y,g,r].every(h=>/^\d{1,2}:\d{2}$/.test(h))){B("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}x.disabled=!0,x.textContent="⏳ กำลังบันทึก...";try{await Promise.all([oe("prayerScanStartTime",y),oe("prayerScanEndTime",g),oe("prayerScanExtendedEndTime",r)]),o.prayerScanStartTime=y,o.prayerScanEndTime=g,o.prayerScanExtendedEndTime=r,B("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),x.textContent="✅ บันทึกแล้ว",setTimeout(()=>{x.disabled=!1,x.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(h){B("บันทึกไม่สำเร็จ: "+ae(h),"error"),x.disabled=!1,x.textContent="บันทึกช่วงเวลาสแกน"}});const $=async()=>{var y,g;const x=document.getElementById("scanners-list-wrap");if(x)try{const{data:r,error:u}=await le.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if(u)throw u;const h=await ce().catch(()=>({})),C=r??[],M=L(h.prayerScannerTeachers),E=new Set(L(h.prayerExtendedScannerStudents));let j=[];if(M.length>0){const{data:G,error:te}=await le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",M).order("teacher_code");if(te)throw te;j=G??[]}const R=C.length+j.length;if(document.getElementById("scanner-count-badge").textContent=`${R} คน`,R===0){x.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const N=Object.fromEntries(A.map(G=>[G.key,new Set(L(h[`prayerScanner${G.key}`]))])),O=C.map(G=>{const te=String(G.student_code||"").trim(),ee=A.filter(ge=>{var ve;return(ve=N[ge.key])==null?void 0:ve.has(te)}).map(ge=>ge.key),de=E.has(te);return{...G,type:"student",code:te,name:G.full_name||"",roomInfo:G.main_room||"",gender:S(G.gender),permission:de?"extended":"normal",permissionLabel:de?"ขยายเวลา":"ทั่วไป",assignedDays:ee,searchText:[te,G.full_name,G.main_room,G.gender,de?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),J=j.map(G=>({...G,type:"teacher",code:String(G.teacher_code||"").trim(),name:G.full_name||"",roomInfo:G.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[G.teacher_code,G.full_name,G.dept,"ครู คุณครู"].join(" ").toLowerCase()})),W=[...O,...J],P=ue(W.map(G=>G.roomInfo)),V=O.filter(G=>G.gender==="ชาย").length,K=O.filter(G=>G.gender==="หญิง").length,D=O.filter(G=>G.permission==="extended").length,z=O.filter(G=>G.assignedDays.length===0).length,F=(G,te,ee="indigo")=>{const de={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${de[ee]||de.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${G}</p>
              <p class="text-lg font-extrabold leading-tight">${te}</p>
            </div>
          `};x.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${F("ทั้งหมด",R,"indigo")}
              ${F("ชาย",V,"emerald")}
              ${F("หญิง",K,"rose")}
              ${F("ครู",j.length,"slate")}
              ${F("ขยายเวลา",D,"amber")}
              ${F("ยังไม่มีเวร",z,z?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${R}`],["male",`ชาย ${V}`],["female",`หญิง ${K}`],["teacher",`ครู ${j.length}`]].map(([G,te])=>`
                  <button type="button" data-scanner-audience="${G}"
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
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${k(q.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const U=()=>{const G=q,te=G.q.trim().toLowerCase();return W.filter(ee=>!(G.audience==="male"&&!(ee.type==="student"&&ee.gender==="ชาย")||G.audience==="female"&&!(ee.type==="student"&&ee.gender==="หญิง")||G.audience==="teacher"&&ee.type!=="teacher"||G.type&&ee.type!==G.type||G.gender&&ee.gender!==G.gender||G.room&&ee.roomInfo!==G.room||G.permission&&ee.permission!==G.permission||G.day==="none"&&!(ee.type==="student"&&ee.assignedDays.length===0)||G.day&&G.day!=="none"&&!ee.assignedDays.includes(G.day)||te&&!ee.searchText.includes(te)))},Q=()=>{x.querySelectorAll(".scanner-audience-tab").forEach(ee=>{const de=ee.dataset.scannerAudience===q.audience;ee.className=de?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const G=document.getElementById("scanner-filtered-count");G&&(G.textContent=U().length);const te=document.getElementById("scanner-active-audience-label");te&&(te.textContent=k(q.audience))},X=()=>{var ve,Te,Ye;Q();const G=U(),te=document.getElementById("scanner-table-wrap"),ee=document.getElementById("scanner-filtered-count");ee&&(ee.textContent=G.length),document.getElementById("scanner-count-badge").textContent=G.length===R?`${R} คน`:`${G.length}/${R} คน`;const de=(Te=(ve=document.activeElement)==null?void 0:ve.id)!=null&&Te.startsWith("scanner-filter-")?document.activeElement.id:"",ge=de==="scanner-filter-q"?document.activeElement.selectionStart:null;if(te.innerHTML=`
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
                    <input id="scanner-filter-q" value="${Y(q.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${P.map(Z=>`<option value="${Y(Z)}" ${q.room===Z?"selected":""}>${Y(Z)}</option>`).join("")}
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
                ${G.length?G.map(Z=>{if(Z.type==="teacher")return`
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${Y(Z.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${Z.image_url?`<img src="${Y(Z.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`:'<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>'}
                            <span class="font-medium text-gray-800">${Y(Z.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${Y(Z.roomInfo||"—")}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${Y(Z.code)}" data-name="${Y(Z.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `;const we=A.map(xe=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${Z.assignedDays.includes(xe.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${Y(Z.code)}" data-day="${xe.key}" data-name="${Y(Z.name)}" title="เวรวัน${xe.full}">
                        ${xe.label}
                      </button>
                    `).join(" ");return`
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${Y(Z.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${Z.image_url?`<img src="${Y(Z.image_url)}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                          <span class="font-medium text-gray-800">${Y(Z.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${Y(Z.roomInfo||"—")}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${Z.gender==="หญิง"?"bg-rose-50 text-rose-700 border-rose-100":"bg-sky-50 text-sky-700 border-sky-100"} text-[10px] font-bold border">${Y(Z.gender||"—")}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${Z.permission==="extended"?"bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100":"bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"}"
                          data-code="${Y(Z.code)}" data-name="${Y(Z.name)}" data-extended="${Z.permission==="extended"?"1":"0"}">
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
                          data-id="${Z.id}" data-code="${Y(Z.code)}" data-name="${Y(Z.name)}" data-type="student">
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
          `,["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(Z=>{var we;(we=document.getElementById(Z))==null||we.addEventListener("change",xe=>{const be=Z.replace("scanner-filter-","");q[be]=xe.target.value,X()})}),(Ye=document.getElementById("scanner-filter-q"))==null||Ye.addEventListener("input",Z=>{q.q=Z.target.value,X()}),de){const Z=document.getElementById(de);Z==null||Z.focus(),de==="scanner-filter-q"&&ge!==null&&(Z==null||Z.setSelectionRange(ge,ge))}x.querySelectorAll(".btn-toggle-extended-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const we=Z.dataset.code,xe=Z.dataset.name,be=Z.dataset.extended!=="1";Z.disabled=!0,Z.textContent="กำลังบันทึก...";try{await H(we,be),B(`ปรับสิทธิ์ "${xe}" เป็น${be?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),$()}catch(ke){B("ปรับสิทธิ์ไม่สำเร็จ: "+ke.message,"error"),Z.disabled=!1,Z.textContent=Z.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),x.querySelectorAll(".btn-toggle-day-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{var ke;const we=Z.dataset.code,xe=Z.dataset.day,be=Z.dataset.name;Z.disabled=!0;try{const Le=await ce().catch(()=>({})),Me=`prayerScanner${xe}`;let je=L(Le[Me]);je.includes(we)?je=je.filter(Oe=>Oe!==we):je.push(we),await oe(Me,je.join(","));const We=((ke=A.find(Oe=>Oe.key===xe))==null?void 0:ke.full)||xe;B(`ปรับสิทธิ์เวรวัน${We} ของ "${be}" สำเร็จ`,"success"),$()}catch(Le){B("ปรับสิทธิ์เวรล้มเหลว: "+Le.message,"error"),Z.disabled=!1}})}),x.querySelectorAll(".btn-revoke-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const we=Z.dataset.type,xe=Z.dataset.name;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${xe}" หรือไม่?`))try{if(we==="student"){const be=+Z.dataset.id,ke=Z.dataset.code,{error:Le}=await le.from("students").update({can_scan_prayer:!1}).eq("id",be);if(Le)throw Le;await H(ke,!1);const Me=await ce().catch(()=>({}));for(const je of A){const We=`prayerScanner${je.key}`,Oe=L(Me[We]).filter(Ua=>Ua!==ke);await oe(We,Oe.join(","))}}else{const be=Z.dataset.code,ke=await ce().catch(()=>({})),Le=L(ke.prayerScannerTeachers).filter(Me=>Me!==be);await oe("prayerScannerTeachers",Le.join(","))}B(`ถอนสิทธิ์ "${xe}" สำเร็จ`,"success"),$()}catch(be){B("ทำรายการไม่สำเร็จ: "+be.message,"error")}})})};x.querySelectorAll("[data-scanner-audience]").forEach(G=>{G.addEventListener("click",()=>{q.audience=G.dataset.scannerAudience,q.type="",q.gender="",q.audience==="teacher"&&(q.day="",q.permission=""),X()})}),(y=document.getElementById("btn-filter-unassigned-scanner"))==null||y.addEventListener("click",()=>{q.day="none",q.type="student",X()}),(g=document.getElementById("btn-reset-scanner-filters"))==null||g.addEventListener("click",()=>{q={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},X()}),X()}catch(r){x.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${r.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const x=document.getElementById("pr-scanner-search-input").value.trim();if(!x){B("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const y=x.split(/[\s,]+/).map(g=>g.trim()).filter(Boolean);if(y.length)try{const[g,r]=await Promise.all([le.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",y),le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",y)]);if(g.error)throw g.error;if(r.error)throw r.error;const u=g.data??[],h=r.data??[];_=[...u.map(E=>({...E,code:E.student_code,type:"student",display_info:`รหัส ${E.student_code} · ห้อง ${E.main_room||"—"} · ${E.gender||"ไม่ระบุเพศ"}`})),...h.map(E=>({...E,code:E.teacher_code,type:"teacher",display_info:`รหัสครู ${E.teacher_code} · กลุ่มสาระ ${E.dept||"—"}`}))];const C=document.getElementById("scanner-preview-container"),M=document.getElementById("scanner-preview-cards");if(!_.length){C.classList.add("hidden"),B("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}C.classList.remove("hidden"),M.innerHTML=_.map(E=>`
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
        `).join("")}catch(g){B("ค้นหาล้มเหลว: "+g.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!_.length)return;const x=document.getElementById("btn-confirm-scanner-grant");x.disabled=!0,x.textContent="⏳ กำลังบันทึก...";try{const y=_.filter(r=>r.type==="student").map(r=>r.id),g=_.filter(r=>r.type==="teacher").map(r=>r.code);if(y.length>0){const{error:r}=await le.from("students").update({can_scan_prayer:!0}).in("id",y);if(r)throw r}if(g.length>0){const r=await ce().catch(()=>({}));let u=L(r.prayerScannerTeachers);g.forEach(h=>{u.includes(h)||u.push(h)}),await oe("prayerScannerTeachers",u.join(","))}B(`มอบสิทธิ์สำเร็จ ${_.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),_=[],$()}catch(y){B("บันทึกไม่สำเร็จ: "+y.message,"error")}finally{x.disabled=!1,x.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),$()},i=_=>{s&&(clearInterval(s),s=null),document.querySelectorAll("[data-tab]").forEach(q=>{q.className=q.dataset.tab===_?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),_==="scores"?f():_==="history"?p():_==="scanners"?c():l()};document.getElementById("pr-tab-scores").addEventListener("click",()=>i("scores")),(T=document.getElementById("pr-tab-history"))==null||T.addEventListener("click",()=>i("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>i("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>i("config")),a&&((b=document.getElementById("pr-tab-scanner-cam"))==null||b.addEventListener("click",async()=>{const{renderStudentPrayerScanner:_}=await se(async()=>{const{renderStudentPrayerScanner:q}=await import("./student-views-DYl1Vkbm.js");return{renderStudentPrayerScanner:q}},__vite__mapDeps([30,4,5,31,1,3,0,13,32,25,7,10,19,28,17]));_(n)})),i("scores")}function Vt(t,s,n,o){var w;(w=document.getElementById("rsa-modal"))==null||w.remove();const m=!!t,d=document.createElement("div");d.id="rsa-modal",d.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",d.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${m?"แก้ไขหัวข้อ":"เพิ่มหัวข้อ"}</h3>
      <form id="rsa-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อหัวข้อ <span class="text-red-400">*</span></label>
          <input id="rsa-name" type="text" value="${(t==null?void 0:t.name)??""}" placeholder="เช่น การอ่านออกเสียง"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
            <input id="rsa-max" type="number" min="1" max="100" value="${(t==null?void 0:t.max_score)??20}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ลำดับ</label>
            <input id="rsa-order" type="number" min="0" value="${(t==null?void 0:t.sort_order)??0}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Google Sheet</label>
          <input id="rsa-sheetcol" type="text" value="${(t==null?void 0:t.sheet_col)??""}" placeholder="เช่น EH"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase" />
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button" id="rsa-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button type="submit" id="rsa-save"
            class="btn-primary flex-1 py-2.5 rounded-xl text-white text-sm font-semibold">${m?"บันทึก":"เพิ่ม"}</button>
        </div>
      </form>
    </div>`,document.body.appendChild(d),d.querySelector("#rsa-cancel").addEventListener("click",()=>d.remove()),d.addEventListener("click",a=>{a.target===d&&d.remove()}),d.querySelector("#rsa-form").addEventListener("submit",async a=>{a.preventDefault();const f=d.querySelector("#rsa-save");f.disabled=!0,f.textContent="กำลังบันทึก...";try{const p={name:d.querySelector("#rsa-name").value.trim(),max_score:parseInt(d.querySelector("#rsa-max").value)||20,sort_order:parseInt(d.querySelector("#rsa-order").value)||0,sheet_col:d.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:s,semester:n};m?await Pn(t.id,p):await Nn(p),B("บันทึกสำเร็จ","success"),d.remove(),o()}catch(p){B("บันทึกไม่สำเร็จ: "+ae(p),"error"),f.disabled=!1,f.textContent=m?"บันทึก":"เพิ่ม"}})}async function _a(){var w,a,f,p;re("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let t=null,s="",n=null;try{const{data:e}=await le.auth.getSession();if(t=((a=(w=e==null?void 0:e.session)==null?void 0:w.user)==null?void 0:a.id)??null,s=((p=(f=e==null?void 0:e.session)==null?void 0:f.user)==null?void 0:p.email)??"",t){const{data:l}=await le.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",t).maybeSingle();n=l??null}}catch{}const o="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";ne(`<div class="max-w-lg mx-auto animate-fade">

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
        placeholder="ชื่อ-นามสกุล" class="${o} mb-3" />
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
        class="${o} mb-1 font-mono lowercase" maxlength="32" />
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
        class="${o} mb-3" />
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
        class="${o} mb-2" />
      <input id="adm-pw2" type="password" placeholder="ยืนยันรหัสผ่านใหม่"
        class="${o} mb-3" />
      <button id="btn-save-pw"
        class="w-full py-2.5 rounded-xl bg-gray-700 text-white text-sm font-semibold hover:bg-gray-800 transition">
        เปลี่ยนรหัสผ่าน
      </button>
      <div id="pw-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>
  </div>`);const m=(e,l,c)=>{const i=document.getElementById(e);i.className=`text-xs text-center mt-2 py-2 rounded-lg ${c?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,i.textContent=l,i.classList.remove("hidden"),setTimeout(()=>i.classList.add("hidden"),3500)},d=async e=>{const{data:l,error:c}=await le.rpc("upsert_admin_teacher_profile",{p_profile_id:t,p_full_name:e.full_name??null,p_username:e.username??null,p_login_email:e.login_email??null});if(c)throw c;return l};document.getElementById("btn-save-name").addEventListener("click",async()=>{const e=document.getElementById("btn-save-name"),l=document.getElementById("adm-name").value.trim();if(!l){m("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}e.disabled=!0,e.textContent="กำลังบันทึก...";try{await d({full_name:l,login_email:s}),m("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const c=document.getElementById("user-name");c&&(c.textContent=l)}catch(c){m("name-msg","บันทึกไม่สำเร็จ: "+ae(c),!1)}finally{e.disabled=!1,e.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var i,v;const e=document.getElementById("btn-save-username"),l=document.getElementById("adm-username").value.trim().toLowerCase(),c=/^[a-z0-9._-]{3,32}$/.test(l);if(!l){m("username-msg","กรุณากรอก username",!1);return}if(!c){m("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}e.disabled=!0,e.textContent="กำลังบันทึก...";try{await d({username:l,login_email:s}),m("username-msg",`บันทึก username "${l}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=l}catch(I){const T=(i=I.message)!=null&&i.includes("unique")||(v=I.message)!=null&&v.includes("duplicate")?`username "${l}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+ae(I);m("username-msg",T,!1)}finally{e.disabled=!1,e.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",e=>{const l=e.target.selectionStart;e.target.value=e.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),e.target.setSelectionRange(l,l)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const e=document.getElementById("btn-save-email"),l=document.getElementById("adm-email").value.trim();if(!l||!l.includes("@")){m("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}e.disabled=!0,e.textContent="กำลังส่งลิงก์...";try{const{error:c}=await le.auth.updateUser({email:l});if(c)throw c;m("email-msg","ส่งลิงก์ยืนยันไปที่ "+l+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(c){m("email-msg","ไม่สำเร็จ: "+ae(c),!1)}finally{e.disabled=!1,e.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const e=document.getElementById("btn-save-pw"),l=document.getElementById("adm-pw").value,c=document.getElementById("adm-pw2").value;if(!l||l.length<6){m("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(l!==c){m("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}e.disabled=!0,e.textContent="กำลังเปลี่ยน...";try{const{error:i}=await le.auth.updateUser({password:l});if(i)throw i;m("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(i){m("pw-msg","ไม่สำเร็จ: "+ae(i),!1)}finally{e.disabled=!1,e.textContent="เปลี่ยนรหัสผ่าน"}})}async function $a(){var w;const t=a=>{document.getElementById("main-content").innerHTML=a};(a=>{document.querySelectorAll("[data-nav]").forEach(f=>{const p=f.dataset.nav===a;f.classList.toggle("bg-indigo-800",p),f.classList.toggle("text-white",p),f.classList.toggle("text-indigo-200",!p)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const o=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),m=(a,f,p,e)=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${a} ${f}</p>
      <p id="${p}-today" class="text-3xl font-extrabold ${e}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${p}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${p}-total" class="font-bold text-gray-600">—</span>
      </div>
    </div>`;t(`<div class="max-w-xl mx-auto animate-fade">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">${o}</p>
      </div>
      <button id="stat-refresh" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">🔄 รีเฟรช</button>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      ${m("👨‍🏫","ครู","stat-teacher","text-indigo-600")}
      ${m("🎒","นักเรียน","stat-student","text-emerald-600")}
    </div>
    <p class="text-center text-[11px] text-gray-400">อัปเดตล่าสุด: <span id="stat-updated">—</span></p>
  </div>`);const d=async()=>{try{const a=await as();document.getElementById("stat-teacher-today").textContent=a.teacherToday,document.getElementById("stat-teacher-month").textContent=a.teacherMonth,document.getElementById("stat-teacher-total").textContent=a.teacherTotal,document.getElementById("stat-student-today").textContent=a.studentToday,document.getElementById("stat-student-month").textContent=a.studentMonth,document.getElementById("stat-student-total").textContent=a.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{B("โหลดสถิติไม่สำเร็จ","error")}};await d(),(w=document.getElementById("stat-refresh"))==null||w.addEventListener("click",d)}async function ka(){var w;const t=a=>{document.getElementById("main-content").innerHTML=a};(a=>document.querySelectorAll("[data-nav]").forEach(f=>{f.classList.toggle("bg-indigo-800",f.dataset.nav===a),f.classList.toggle("text-white",f.dataset.nav===a),f.classList.toggle("text-indigo-200",f.dataset.nav!==a)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const n=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],o=async()=>{const a=await Tt(),f=n.map(e=>({building:e,rooms:a.filter(l=>l.building===e)}));[...new Set(a.map(e=>e.building).filter(e=>!n.includes(e)))].forEach(e=>f.push({building:e,rooms:a.filter(l=>l.building===e)})),document.getElementById("crm-content").innerHTML=f.filter(e=>e.rooms.length>0).map(e=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50 bg-gray-50/50">
          <h3 class="font-bold text-gray-700">🏫 ${e.building}
            <span class="text-xs font-normal text-gray-400 ml-1">${e.rooms.length} ห้อง</span>
          </h3>
          <button class="crm-add-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            data-building="${e.building}">＋ เพิ่มห้อง</button>
        </div>
        <div class="divide-y divide-gray-50">
          ${e.rooms.map(l=>`
          <div class="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition" data-id="${l.id}">
            <span class="w-20 font-mono text-sm font-semibold text-indigo-700 flex-shrink-0">${l.room_number}</span>
            <span class="flex-1 text-sm text-gray-700">${l.name??"—"}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${l.is_teaching_room?"bg-emerald-50 text-emerald-700":"bg-gray-100 text-gray-500"}">
              ${l.is_teaching_room?"ห้องเรียน":"ห้องพิเศษ"}
            </span>
            <button class="crm-edit-btn text-xs text-indigo-400 hover:text-indigo-700 px-2" data-id="${l.id}">แก้ไข</button>
            <button class="crm-del-btn text-xs text-red-400 hover:text-red-600 px-1" data-id="${l.id}">ลบ</button>
          </div>`).join("")}
        </div>
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(e=>{e.addEventListener("click",()=>d(null,e.dataset.building,a))}),document.querySelectorAll(".crm-edit-btn").forEach(e=>{const l=a.find(c=>c.id===parseInt(e.dataset.id));l&&e.addEventListener("click",()=>d(l,l.building,a))}),document.querySelectorAll(".crm-del-btn").forEach(e=>{e.addEventListener("click",()=>{const l=a.find(c=>c.id===parseInt(e.dataset.id));m(l)})})},m=a=>{var p;(p=document.getElementById("crm-confirm"))==null||p.remove();const f=document.createElement("div");f.id="crm-confirm",f.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",f.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${a==null?void 0:a.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${a==null?void 0:a.building}${a!=null&&a.name?" · "+a.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(f),f.querySelector("#crm-conf-no").addEventListener("click",()=>f.remove()),f.querySelector("#crm-conf-yes").addEventListener("click",async()=>{f.remove();try{await Bn(a.id),B("ลบห้องแล้ว ✅","success"),o()}catch(e){B("ลบไม่สำเร็จ: "+ae(e),"error")}})},d=(a,f,p)=>{var c;(c=document.getElementById("crm-modal"))==null||c.remove();const e=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...p.map(i=>i.building)])],l=document.createElement("div");l.id="crm-modal",l.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",l.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${a?"แก้ไขห้อง":"เพิ่มห้องใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${e.map(i=>`<option value="${i}" ${i===((a==null?void 0:a.building)??f)?"selected":""}>${i}</option>`).join("")}
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
    </div>`,document.body.appendChild(l),l.querySelector("#crm-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#crm-save").addEventListener("click",async()=>{const i=l.querySelector("#crm-save"),v=l.querySelector("#crm-building").value,I=l.querySelector("#crm-number").value.trim(),T=l.querySelector("#crm-name").value.trim()||null,b=l.querySelector("#crm-teaching").checked;if(!v||!I){B("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}i.disabled=!0,i.textContent="⏳";try{a?await vn(a.id,{building:v,room_number:I,name:T,is_teaching_room:b}):await wn({building:v,room_number:I,name:T,is_teaching_room:b}),B(a?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),l.remove(),o()}catch(_){B("บันทึกไม่สำเร็จ: "+ae(_),"error"),i.disabled=!1,i.textContent="บันทึก"}})};t(`<div class="max-w-3xl mx-auto animate-fade">
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
  </div>`),await o(),(w=document.getElementById("crm-add-new"))==null||w.addEventListener("click",async()=>{const a=await Tt().catch(()=>[]);d(null,"อาคาร 1",a)})}const Kr=(t,s=[])=>[1,2,3,4,5,6,7,8,9].map(n=>{const o=s.includes(n);return`<button type="button" data-period="${n}"
      class="${t}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${o?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-400"}">${n}</button>`}).join(""),Ct=(t,s,n="",o=[])=>`
  <div class="${t}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${t}-session-label text-xs font-semibold text-violet-700">วันที่ ${s+1}</span>
      <button type="button" class="${t}-session-remove ${s===0?"hidden":""} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${t}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${n}"/>
    <div class="flex flex-wrap gap-1.5 ${t}-session-pills">${Kr(t,o)}</div>
  </div>`;function Ea(t,s){const n=t.querySelector(`#${s}-sessions-list`),o=()=>{n.querySelectorAll(`.${s}-session-pill`).forEach(d=>{d.onclick=null,d.addEventListener("click",()=>{const w=d.classList.contains("bg-violet-600");d.className=`${s}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${w?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),n.querySelectorAll(`.${s}-session-remove`).forEach(d=>{d.onclick=null,d.addEventListener("click",()=>{d.closest(`.${s}-session`).remove(),m()})})},m=()=>{const d=[...n.querySelectorAll(`.${s}-session`)];d.forEach((w,a)=>{w.querySelector(`.${s}-session-label`).textContent=`วันที่ ${a+1}`,w.querySelector(`.${s}-session-remove`).classList.toggle("hidden",d.length<=1)}),o()};t.querySelector(`#${s}-add-session`).addEventListener("click",()=>{const d=n.querySelectorAll(`.${s}-session`).length,w=document.createElement("div");w.innerHTML=Ct(s,d),n.appendChild(w.firstElementChild),m()}),o()}function Sa(t,s){return[...t.querySelectorAll(`.${s}-session`)].map(n=>({date:n.querySelector(`.${s}-session-date`).value,periods:[...n.querySelectorAll(`.${s}-session-pill.bg-violet-600`)].map(o=>parseInt(o.dataset.period))}))}const Qr={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},La=t=>Qr[t]??"",Ia=t=>{var n,o;const s=(((n=t.target_teacher_ids)==null?void 0:n.length)??0)+(((o=t.target_student_ids)==null?void 0:o.length)??0);return s?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${s} คน</span>`:""};async function Ca(t,s,n="all"){try{const o=n==="teacher"?["all_teachers"]:n==="student"?["all_students"]:n==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(o.map(m=>le.functions.invoke("send-push",{body:{title:`📢 ${t}`,body:(s??"").slice(0,150),url:m==="all_students"?"student.html":"teacher.html",target:m}})))}catch{}}let xt=null;function Ba(){return xt||(xt=Promise.all([me(),Ne()]).then(([t,s])=>({teachers:t,students:s})).catch(()=>({teachers:[],students:[]}))),xt}async function Ta(){var w;re("announcements"),document.getElementById("page-title").textContent="ประกาศ";const t=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=a=>new Date(a).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ne(`<div class="animate-fade">
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
  </div>`);const n=async()=>{const a=document.getElementById("ann-list");if(!a)return;let f;try{f=await Xt()}catch{a.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!f.length){a.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const p={};try{(await ds(f.map(l=>l.id))).forEach(l=>{p[l.announcement_id]=(p[l.announcement_id]??0)+1})}catch{}a.innerHTML=f.map(e=>{var l,c;return`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${e.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${e.id}">
        ${e.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':e.ann_type==="training"?'<div class="h-1 bg-gradient-to-r from-violet-400 to-purple-400"></div>':e.is_active?'<div class="h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${e.ann_type==="training"?"bg-violet-50":e.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${e.priority>0?"📌":e.ann_type==="training"?"🎓":e.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide
                ${e.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${e.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${e.ann_type==="training"?'<span class="px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full text-[11px] font-bold">🎓 อบรม/กิจกรรม</span>':""}
              ${e.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${La(e.audience)}
              ${Ia(e)}
              ${e.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${t(e.title)}</h3>
            ${e.ann_type==="training"&&e.event_date?`
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📅 ${s(e.event_date)}</span>
                ${e.event_location?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📍 ${t(e.event_location)}</span>`:""}
                ${(l=e.event_periods)!=null&&l.length?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${e.event_periods.sort((i,v)=>i-v).join(", ")}</span>`:""}
              </div>`:e.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">${t(e.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">
              ${s(e.created_at)}
              ${(c=e.teachers)!=null&&c.full_name?` · 📝 ${t(e.teachers.full_name)}`:" · ⚙️ แอดมิน"}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${e.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${e.id}" data-title="${t(e.title)}">💬 ${p[e.id]??0} ความคิดเห็น</button>
              <span>👁️ ${e.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${e.ann_type==="training"?`<button class="ann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${e.id}" data-title="${t(e.title)}">👥 รายชื่อ</button>`:""}
            <button class="ann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${e.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${e.id}" data-active="${e.is_active}">
              ${e.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="ann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${e.id}">✏️ แก้ไข</button>
            <button class="ann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 hover:text-red-600 transition"
              data-id="${e.id}" data-title="${t(e.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`}).join(""),a.querySelectorAll(".ann-toggle-btn").forEach(e=>{e.addEventListener("click",async()=>{const l=Number(e.dataset.id),c=e.dataset.active==="true";e.disabled=!0,e.textContent="...";try{await dt(l,{isActive:!c}),await n()}catch{B("บันทึกไม่สำเร็จ","error"),e.disabled=!1}})}),a.querySelectorAll(".ann-edit-btn").forEach(e=>{e.addEventListener("click",()=>{const l=f.find(c=>c.id===Number(e.dataset.id));l&&d(l,n)})}),a.querySelectorAll(".ann-del-btn").forEach(e=>{e.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${e.dataset.title}" ?`)){e.disabled=!0;try{await is(Number(e.dataset.id)),await n()}catch{B("ลบไม่สำเร็จ","error"),e.disabled=!1}}})}),a.querySelectorAll(".ann-rsvp-list-btn").forEach(e=>{e.addEventListener("click",async()=>m(Number(e.dataset.id),e.dataset.title))}),a.querySelectorAll(".ann-comments-view-btn").forEach(e=>{e.addEventListener("click",async()=>o(Number(e.dataset.id),e.dataset.title,n))})},o=async(a,f,p)=>{const e=await fs(a).catch(()=>[]),l=i=>new Date(i).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),c=document.createElement("div");c.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${t(f)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${e.length?e.map(i=>{var v,I;return`
            <div class="flex items-start gap-2" data-comment-id="${i.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${t((((v=i.teachers)==null?void 0:v.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${t(((I=i.teachers)==null?void 0:I.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${i.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${t(i.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${l(i.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(c),c.querySelector("#comments-list-close").onclick=()=>c.remove(),c.addEventListener("click",i=>{i.target===c&&c.remove()}),c.querySelectorAll(".comment-del-btn").forEach(i=>{i.addEventListener("click",async()=>{var v;if(confirm("ลบความคิดเห็นนี้?"))try{await hs(Number(i.dataset.id)),(v=c.querySelector(`[data-comment-id="${i.dataset.id}"]`))==null||v.remove(),await(p==null?void 0:p())}catch(I){B("ลบไม่สำเร็จ: "+ae(I),"error")}})})},m=async(a,f)=>{const{getAnnouncementRsvps:p}=await se(async()=>{const{getAnnouncementRsvps:I}=await import("./api-Cf_Y4s92.js");return{getAnnouncementRsvps:I}},__vite__mapDeps([0,1])),e=await p(a).catch(()=>[]),l={yes:[],maybe:[],no:[]};e.forEach(I=>{l[I.response]&&l[I.response].push(I)});const c=I=>{var T,b;return`<li class="text-sm text-gray-700">${t(((T=I.teachers)==null?void 0:T.full_name)??"?")} <span class="text-xs text-gray-400">${((b=I.teachers)==null?void 0:b.dept)??""}</span></li>`},i=(I,T,b,_)=>l[I].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${_} mb-1.5">${T} ${b} (${l[I].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${l[I].map(c).join("")}</ul>
      </div>`:"",v=document.createElement("div");v.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",v.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[220px]">${t(f)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="rsvp-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5">
          ${e.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
          ${i("yes","✅","สนใจเข้าร่วมแน่นอน","text-emerald-700")}
          ${i("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
          ${i("no","❌","ไม่สนใจ","text-gray-500")}
          ${e.length?`<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${e.length} คน</p>`:""}
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#rsvp-list-close").onclick=()=>v.remove(),v.addEventListener("click",I=>{I.target===v&&v.remove()})},d=(a,f)=>{var H;(H=document.getElementById("ann-modal"))==null||H.remove();const p=document.createElement("div");p.id="ann-modal",p.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const e=!!(a!=null&&a.id);p.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <h3 class="font-bold text-gray-800 text-base">${e?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="ann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4 overflow-y-auto flex-1">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="ann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${t((a==null?void 0:a.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="ann-body" rows="4" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${t((a==null?void 0:a.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="ann-image-preview" class="${a!=null&&a.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="ann-image-preview-img" src="${t((a==null?void 0:a.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="ann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="ann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="ann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="ann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${t((a==null?void 0:a.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
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
                value="${t((a==null?void 0:a.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="ann-sessions-list" class="space-y-2">
                ${Ct("ann",0,(a==null?void 0:a.event_date)??"",(a==null?void 0:a.event_periods)??[])}
              </div>
              ${e?'<div id="ann-add-session" class="hidden"></div>':`<button type="button" id="ann-add-session"
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
      </div>`,document.body.appendChild(p);const l=()=>p.remove();p.querySelector("#ann-modal-close").onclick=l,p.querySelector("#ann-modal-cancel").onclick=l,p.addEventListener("click",$=>{$.target===p&&l()});let c=null,i=null;Ba().then(({teachers:$,students:x})=>{document.body.contains(p)&&(c=_t({wrap:p.querySelector("#ann-target-teachers-wrap"),chipsWrap:p.querySelector("#ann-target-teachers-chips"),teachers:$,value:(a==null?void 0:a.target_teacher_ids)??[]}),i=Yt({wrap:p.querySelector("#ann-target-students-wrap"),chipsWrap:p.querySelector("#ann-target-students-chips"),students:x,value:(a==null?void 0:a.target_student_ids)??[]}))});const v=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],I=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],T=($,x)=>{const y=document.createElement("div");y.className="mt-1.5 hidden",y.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${x.map(g=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${g}">${g}</button>`).join("")}
        </div>`,$.parentNode.appendChild(y),$.addEventListener("focus",()=>y.classList.remove("hidden")),$.addEventListener("blur",()=>setTimeout(()=>y.classList.add("hidden"),150)),y.querySelectorAll(".ann-chip").forEach(g=>{g.addEventListener("mousedown",r=>r.preventDefault()),g.addEventListener("click",()=>{$.value.trim()?$.value+=($.tagName==="TEXTAREA"?`
`:" ")+g.dataset.val:$.value=g.dataset.val,$.focus()})})};T(p.querySelector("#ann-title"),v),T(p.querySelector("#ann-body"),I);let b=(a==null?void 0:a.file_url)??null;const _=p.querySelector("#ann-image-status"),q=p.querySelector("#ann-image-preview"),A=p.querySelector("#ann-image-preview-img");p.querySelector("#ann-image-file").addEventListener("change",async $=>{var y;const x=(y=$.target.files)==null?void 0:y[0];if(x){_.textContent="กำลังอัปโหลด...";try{b=await ea(x),A.src=b,q.classList.remove("hidden"),_.textContent="อัปโหลดสำเร็จ ✅"}catch(g){_.textContent="อัปโหลดไม่สำเร็จ: "+ae(g)}$.target.value=""}}),p.querySelector("#ann-image-remove").addEventListener("click",()=>{b=null,q.classList.add("hidden"),_.textContent=""});let L=[];p.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const $=p.querySelector("#ann-cal-picker");if(!$.classList.contains("hidden")){$.classList.add("hidden");return}$.classList.remove("hidden");const x=p.querySelector("#ann-cal-event-sel");if(x.options.length<=1)try{const{getWorkCalendarEvents:y,getSchoolConfig:g}=await se(async()=>{const{getWorkCalendarEvents:C,getSchoolConfig:M}=await import("./api-Cf_Y4s92.js");return{getWorkCalendarEvents:C,getSchoolConfig:M}},__vite__mapDeps([0,1]));let r=new Date().getFullYear()+543,u=1;try{const C=await g();r=C.academic_year,u=C.semester}catch{}L=await y(r,u);const h={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};L.forEach(C=>{const M=document.createElement("option");M.value=C.id;const E=C.event_type==="inspection"&&C.round_number?` ครั้งที่ ${C.round_number}`:"",j=new Date(C.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});M.textContent=`${h[C.event_type]??"📌"}${E} ${C.label} (${j})`,x.appendChild(M)})}catch(y){x.innerHTML=`<option>โหลดไม่สำเร็จ: ${y.message}</option>`}}),p.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const $=+p.querySelector("#ann-cal-event-sel").value,x=L.find(h=>h.id===$),y=p.querySelector("#ann-cal-preview"),g=p.querySelector("#ann-cal-fill");if(!x){y.classList.add("hidden"),g.classList.add("hidden");return}const r=(x.work_calendar_items||[]).sort((h,C)=>h.sort_order-C.sort_order),u=new Date(x.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});y.innerHTML=`<p class="font-semibold">${x.label}</p>
        <p class="text-indigo-600">📅 ${u}${x.event_type==="inspection"&&x.round_number?` · ครั้งที่ ${x.round_number}`:""}</p>
        ${x.description?`<p>${x.description}</p>`:""}
        ${r.length?`<ul class="mt-1 space-y-0.5">${r.map(h=>`<li>☑ ${h.item_label}</li>`).join("")}</ul>`:""}`,y.classList.remove("hidden"),g.classList.remove("hidden")}),p.querySelector("#ann-cal-fill").addEventListener("click",()=>{const $=+p.querySelector("#ann-cal-event-sel").value,x=L.find(h=>h.id===$);if(!x)return;const y=(x.work_calendar_items||[]).sort((h,C)=>h.sort_order-C.sort_order),g=new Date(x.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),r=x.event_type==="inspection"&&x.round_number?` ครั้งที่ ${x.round_number}`:"";p.querySelector("#ann-title").value=x.label+(r?` (${r.trim()})`:"");const u=[];x.description&&u.push(x.description),y.length&&(u.push("สิ่งที่ต้องเตรียม:"),y.forEach(h=>u.push(`• ${h.item_label}`))),u.push(`กำหนดวันที่: ${g}`),p.querySelector("#ann-body").value=u.join(`
`),x.event_date&&(p.querySelector("#ann-due").value=x.event_date),p.querySelector("#ann-cal-picker").classList.add("hidden")}),p.querySelectorAll(".ann-type-btn").forEach($=>{$.addEventListener("click",()=>{const x=$.dataset.type;p.querySelectorAll(".ann-type-btn").forEach(y=>{const g=y.dataset.type==="training";y.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${y.dataset.type===x?g?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":g?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),p.querySelector("#ann-training-fields").classList.toggle("hidden",x!=="training")})});const S=$=>$==="teacher"?"bg-sky-600 text-white border-sky-600":$==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",k=$=>$==="teacher"?"hover:border-sky-300":$==="student"?"hover:border-teal-300":"hover:border-indigo-300";p.querySelectorAll(".ann-audience-btn").forEach($=>{$.addEventListener("click",()=>{p.querySelectorAll(".ann-audience-btn").forEach(x=>{x.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${x.dataset.audience===$.dataset.audience?S(x.dataset.audience):`bg-white text-gray-600 border-gray-200 ${k(x.dataset.audience)}`}`})})}),Ea(p,"ann"),p.querySelectorAll(".ann-filter-btn").forEach($=>{$.addEventListener("click",()=>{p.querySelectorAll(".ann-filter-btn").forEach(x=>{x.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${x.dataset.filter===$.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),p.querySelector("#ann-modal-save").addEventListener("click",async()=>{var J,W;const $=p.querySelector("#ann-title").value.trim();if(!$){B("กรุณากรอกหัวข้อ","warning");return}const x=p.querySelector("#ann-body").value.trim()||null,y=p.querySelector("#ann-active-toggle").dataset.on==="true",g=p.querySelector("#ann-pin").dataset.on==="true"?1:0,r=p.querySelector("#ann-ack").dataset.on==="true",u=p.querySelector("#ann-due").value||null,h=p.querySelector(".ann-type-btn.bg-violet-600")||(a==null?void 0:a.ann_type)==="training"?"training":"general",C=((J=p.querySelector(".ann-audience-btn.text-white"))==null?void 0:J.dataset.audience)??(a==null?void 0:a.audience)??"all",M=p.querySelector("#ann-video-url").value.trim()||null,E=h==="training"&&p.querySelector("#ann-event-location").value.trim()||null,j=((W=p.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:W.dataset.filter)??(a==null?void 0:a.schedule_filter)??"all",R=(c==null?void 0:c.getValue())??(a==null?void 0:a.target_teacher_ids)??[],N=(i==null?void 0:i.getValue())??(a==null?void 0:a.target_student_ids)??[];if(h==="training"){if(!E){B("กรุณาระบุสถานที่","warning");return}const P=Sa(p,"ann");for(const K of P){if(!K.date){B("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!K.periods.length){B("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const V=p.querySelector("#ann-modal-save");V.disabled=!0,V.textContent="กำลังบันทึก...";try{e?await dt(a.id,{title:$,body:x,isActive:y,priority:g,requiresAck:r,dueDate:u,annType:h,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:E,scheduleFilter:j,fileUrl:b,videoUrl:M,audience:C,targetTeacherIds:R,targetStudentIds:N}):P.length>1?(await Promise.all(P.map(K=>it({title:$,body:x,isActive:y,priority:g,requiresAck:r,dueDate:u,annType:h,eventDate:K.date,eventPeriods:K.periods,eventLocation:E,scheduleFilter:j,fileUrl:b,videoUrl:M,audience:C,targetTeacherIds:R,targetStudentIds:N}))),B(`สร้าง ${P.length} ประกาศสำเร็จ ✅`,"success")):(await it({title:$,body:x,isActive:y,priority:g,requiresAck:r,dueDate:u,annType:h,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:E,scheduleFilter:j,fileUrl:b,videoUrl:M,audience:C,targetTeacherIds:R,targetStudentIds:N}),B("บันทึกสำเร็จ ✅","success")),l(),await f()}catch(K){B("บันทึกไม่สำเร็จ: "+ae(K),"error"),V.disabled=!1,V.textContent="บันทึก"}return}const O=p.querySelector("#ann-modal-save");O.disabled=!0,O.textContent="กำลังบันทึก...";try{e?await dt(a.id,{title:$,body:x,isActive:y,priority:g,requiresAck:r,dueDate:u,annType:h,fileUrl:b,videoUrl:M,audience:C,targetTeacherIds:R,targetStudentIds:N}):await it({title:$,body:x,isActive:y,priority:g,requiresAck:r,dueDate:u,annType:h,fileUrl:b,videoUrl:M,audience:C,targetTeacherIds:R,targetStudentIds:N}),!e&&y&&Ca($,x,C),B("บันทึกสำเร็จ ✅","success"),l(),await f()}catch(P){B("บันทึกไม่สำเร็จ: "+ae(P),"error"),O.disabled=!1,O.textContent="บันทึก"}})};(w=document.getElementById("ann-create-btn"))==null||w.addEventListener("click",()=>d(null,n)),await n()}async function ja(){re("autoscale-history"),document.getElementById("page-title").textContent="ประวัติปรับกำลังเครื่องอัตโนมัติ";const t=d=>String(d??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=d=>new Date(d).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),n=d=>d.includes("🔴")?{label:"ล้มเหลว",cls:"bg-red-100 text-red-700"}:d.includes("⚠️")?{label:"อัปเกรด",cls:"bg-amber-100 text-amber-700"}:d.includes("✅")?{label:"ลดระดับ",cls:"bg-emerald-100 text-emerald-700"}:d.includes("🧪")?{label:"ทดสอบ",cls:"bg-gray-100 text-gray-600"}:{label:"เหตุการณ์",cls:"bg-gray-100 text-gray-600"};ne(`<div class="animate-fade">
    <p class="text-xs text-gray-400 mb-6">บันทึกอัตโนมัติทุกครั้งที่ระบบปรับขนาด compute (Micro ↔ Medium) แยกจากหน้าประกาศทั่วไป</p>
    <div id="autoscale-history-wrap" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const o=document.getElementById("autoscale-history-wrap");let m;try{m=(await Xt()).filter(d=>d.ann_type==="system")}catch{o.innerHTML='<p class="text-red-400 text-sm p-6">โหลดไม่สำเร็จ</p>';return}if(!m.length){o.innerHTML=`<div class="p-16 text-center text-gray-400">
      <div class="text-5xl mb-4">🖥️</div>
      <p class="font-semibold text-gray-500">ยังไม่มีประวัติการปรับกำลังเครื่อง</p>
      <p class="text-xs mt-1">ระบบจะบันทึกอัตโนมัติทุกครั้งที่ปรับขนาด compute</p>
    </div>`;return}o.innerHTML=`
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
          ${m.map(d=>{const w=n(d.title||"");return`<tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 align-top">
              <td class="px-5 py-3.5 whitespace-nowrap text-gray-500 font-mono text-xs">${s(d.created_at)}</td>
              <td class="px-5 py-3.5 whitespace-nowrap">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${w.cls}">${w.label}</span>
              </td>
              <td class="px-5 py-3.5 text-gray-700">${t(d.body||d.title||"")}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`}const Jr={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},Xr=t=>Jr[t]??"แอดมิน",Zr=t=>t?t.startsWith("academic")?"bg-blue-100 text-blue-700":t.startsWith("registrar")?"bg-violet-100 text-violet-700":t==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function eo(t,s=!1){var I,T;const{getMyAnnouncements:n,createAnnouncement:o,updateAnnouncement:m,deleteAnnouncement:d,getAckStats:w,getAnnouncementCommentsBulk:a,getAnnouncementComments:f,deleteAnnouncementComment:p}=await se(async()=>{const{getMyAnnouncements:b,createAnnouncement:_,updateAnnouncement:q,deleteAnnouncement:A,getAckStats:L,getAnnouncementCommentsBulk:S,getAnnouncementComments:k,deleteAnnouncementComment:H}=await import("./api-Cf_Y4s92.js");return{getMyAnnouncements:b,createAnnouncement:_,updateAnnouncement:q,deleteAnnouncement:A,getAckStats:L,getAnnouncementCommentsBulk:S,getAnnouncementComments:k,deleteAnnouncementComment:H}},__vite__mapDeps([0,1])),e=((I=t==null?void 0:t.positions)!=null&&I.length?t.positions[0]:t==null?void 0:t.position)??null;re("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const l=b=>String(b??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=b=>new Date(b).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ne(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${Zr(e)}">${Xr(e)}</span>
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
  </div>`);const i=async()=>{const b=document.getElementById("sann-list");if(!b)return;let _;try{_=await n(t.id)}catch{b.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!_.length){b.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const q=S=>S?new Date(S).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",A=S=>{if(!S)return"";const k=Math.ceil((new Date(S)-new Date)/864e5);return k<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${q(S)}</span>`:k<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${q(S)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${q(S)}</span>`},L={};try{(await a(_.map(k=>k.id))).forEach(k=>{L[k.announcement_id]=(L[k.announcement_id]??0)+1})}catch{}b.innerHTML=_.map(S=>`
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${S.is_active?"border-gray-100":"border-dashed border-gray-200 opacity-70"}" data-id="${S.id}">
        ${S.priority>0?'<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>':S.is_active?'<div class="h-1 bg-gradient-to-r from-indigo-400 to-blue-400"></div>':'<div class="h-1 bg-gray-200"></div>'}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${S.is_active?"bg-indigo-50":"bg-gray-100"}">
            ${S.priority>0?"📌":S.requires_ack?"🔔":S.is_active?"📢":"📄"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold
                ${S.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}">
                ${S.is_active?"● แสดงอยู่":"○ ปิดอยู่"}
              </span>
              ${S.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${S.requires_ack?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${La(S.audience)}
              ${Ia(S)}
              ${S.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${A(S.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${l(S.title)}</h3>
            ${S.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${l(S.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${c(S.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${S.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${S.id}" data-title="${l(S.title)}">💬 ${L[S.id]??0} ความคิดเห็น</button>
              <span>👁️ ${S.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${S.requires_ack?`<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${S.id}" data-title="${l(S.title)}">📊 สถิติ</button>`:""}
            ${S.ann_type==="training"?`<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${S.id}" data-title="${l(S.title)}">👥 รายชื่อ</button>`:""}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${S.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${S.id}" data-active="${S.is_active}">
              ${S.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${S.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${S.id}" data-title="${l(S.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join(""),b.querySelectorAll(".sann-stat-btn").forEach(S=>{S.addEventListener("click",async()=>{const k=Number(S.dataset.id),H=S.dataset.title,$=document.getElementById("sann-stat-modal");$&&$.remove();const x=document.createElement("div");x.id="sann-stat-modal",x.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",x.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${l(H)}</p>
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
          </div>`,document.body.appendChild(x),x.querySelector("#sann-stat-close").onclick=()=>x.remove(),x.addEventListener("click",y=>{y.target===x&&x.remove()});try{const{acked:y,pending:g}=await w(k),r=x.querySelector("#sann-stat-body"),u=h=>new Date(h).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});r.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${y.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${g.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${y.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${y.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${y.map(h=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${l(h.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${u(h.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${g.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${g.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${g.map(h=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${l(h.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{x.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),b.querySelectorAll(".sann-rsvp-list-btn").forEach(S=>{S.addEventListener("click",async()=>{const{getAnnouncementRsvps:k}=await se(async()=>{const{getAnnouncementRsvps:u}=await import("./api-Cf_Y4s92.js");return{getAnnouncementRsvps:u}},__vite__mapDeps([0,1])),H=await k(Number(S.dataset.id)).catch(()=>[]),$=S.dataset.title,x={yes:[],maybe:[],no:[],none:[]};H.forEach(u=>(x[u.response]??x.none).push(u));const y=u=>{var h,C;return`<li class="text-sm text-gray-700">${l(((h=u.teachers)==null?void 0:h.full_name)??"?")} <span class="text-xs text-gray-400">${((C=u.teachers)==null?void 0:C.dept)??""}</span></li>`},g=(u,h,C,M)=>x[u].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${M} mb-1">${h} ${C} (${x[u].length})</p>
            <ul class="space-y-0.5 pl-3">${x[u].map(y).join("")}</ul>
          </div>`:"",r=document.createElement("div");r.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${$}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${H.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${g("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${g("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${g("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(r),r.querySelector("#rsvp-list-close").onclick=()=>r.remove(),r.addEventListener("click",u=>{u.target===r&&r.remove()})})}),b.querySelectorAll(".ann-comments-view-btn").forEach(S=>{S.addEventListener("click",async()=>{const k=Number(S.dataset.id),H=S.dataset.title,$=await f(k).catch(()=>[]),x=g=>new Date(g).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),y=document.createElement("div");y.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",y.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${l(H)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${$.length?$.map(g=>{var r,u;return`
                <div class="flex items-start gap-2" data-comment-id="${g.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${l((((r=g.teachers)==null?void 0:r.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${l(((u=g.teachers)==null?void 0:u.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${g.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${l(g.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${x(g.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(y),y.querySelector("#comments-list-close").onclick=()=>y.remove(),y.addEventListener("click",g=>{g.target===y&&y.remove()}),y.querySelectorAll(".comment-del-btn").forEach(g=>{g.addEventListener("click",async()=>{var r;if(confirm("ลบความคิดเห็นนี้?"))try{await p(Number(g.dataset.id)),(r=y.querySelector(`[data-comment-id="${g.dataset.id}"]`))==null||r.remove(),await i()}catch(u){B("ลบไม่สำเร็จ: "+ae(u),"error")}})})})}),b.querySelectorAll(".sann-toggle-btn").forEach(S=>{S.addEventListener("click",async()=>{S.disabled=!0;try{await m(Number(S.dataset.id),{isActive:S.dataset.active!=="true"}),await i()}catch{B("บันทึกไม่สำเร็จ","error"),S.disabled=!1}})}),b.querySelectorAll(".sann-edit-btn").forEach(S=>{S.addEventListener("click",()=>{const k=_.find(H=>H.id===Number(S.dataset.id));k&&v(k)})}),b.querySelectorAll(".sann-del-btn").forEach(S=>{S.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${S.dataset.title}" ?`)){S.disabled=!0;try{await d(Number(S.dataset.id)),await i()}catch{B("ลบไม่สำเร็จ","error"),S.disabled=!1}}})})},v=(b=null)=>{var M;(M=document.getElementById("sann-modal"))==null||M.remove();const _=document.createElement("div");_.id="sann-modal",_.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const q=!!(b!=null&&b.id);_.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${q?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${l((b==null?void 0:b.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${l((b==null?void 0:b.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${b!=null&&b.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${l((b==null?void 0:b.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${l((b==null?void 0:b.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
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
                value="${l((b==null?void 0:b.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${Ct("sann",0,(b==null?void 0:b.event_date)??"",(b==null?void 0:b.event_periods)??[])}
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
      </div>`,document.body.appendChild(_);const A=()=>_.remove();_.querySelector("#sann-modal-close").onclick=A,_.querySelector("#sann-modal-cancel").onclick=A,_.addEventListener("click",E=>{E.target===_&&A()});let L=null,S=null;Ba().then(({teachers:E,students:j})=>{document.body.contains(_)&&(L=_t({wrap:_.querySelector("#sann-target-teachers-wrap"),chipsWrap:_.querySelector("#sann-target-teachers-chips"),teachers:E,value:(b==null?void 0:b.target_teacher_ids)??[]}),S=Yt({wrap:_.querySelector("#sann-target-students-wrap"),chipsWrap:_.querySelector("#sann-target-students-chips"),students:j,value:(b==null?void 0:b.target_student_ids)??[]}))});const k=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],H=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],$=(E,j)=>{const R=document.createElement("div");R.className="mt-1.5 hidden",R.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${j.map(N=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${N}">${N}</button>`).join("")}
        </div>`,E.parentNode.appendChild(R),E.addEventListener("focus",()=>R.classList.remove("hidden")),E.addEventListener("blur",()=>setTimeout(()=>R.classList.add("hidden"),150)),R.querySelectorAll(".sann-chip").forEach(N=>{N.addEventListener("mousedown",O=>O.preventDefault()),N.addEventListener("click",()=>{E.value.trim()?E.value+=(E.tagName==="TEXTAREA"?`
`:" ")+N.dataset.val:E.value=N.dataset.val,E.focus()})})};$(_.querySelector("#sann-title"),k),$(_.querySelector("#sann-body"),H);let x=(b==null?void 0:b.file_url)??null;const y=_.querySelector("#sann-image-status"),g=_.querySelector("#sann-image-preview"),r=_.querySelector("#sann-image-preview-img");_.querySelector("#sann-image-file").addEventListener("change",async E=>{var R;const j=(R=E.target.files)==null?void 0:R[0];if(j){y.textContent="กำลังอัปโหลด...";try{x=await ea(j),r.src=x,g.classList.remove("hidden"),y.textContent="อัปโหลดสำเร็จ ✅"}catch(N){y.textContent="อัปโหลดไม่สำเร็จ: "+ae(N)}E.target.value=""}}),_.querySelector("#sann-image-remove").addEventListener("click",()=>{x=null,g.classList.add("hidden"),y.textContent=""});let u=[];_.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const E=_.querySelector("#sann-cal-picker");if(!E.classList.contains("hidden")){E.classList.add("hidden");return}E.classList.remove("hidden");const j=_.querySelector("#sann-cal-event-sel");if(j.options.length<=1)try{const{getWorkCalendarEvents:R,getSchoolConfig:N}=await se(async()=>{const{getWorkCalendarEvents:P,getSchoolConfig:V}=await import("./api-Cf_Y4s92.js");return{getWorkCalendarEvents:P,getSchoolConfig:V}},__vite__mapDeps([0,1]));let O=new Date().getFullYear()+543,J=1;try{const P=await N();O=P.academic_year,J=P.semester}catch{}u=await R(O,J);const W={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};u.forEach(P=>{const V=document.createElement("option");V.value=P.id;const K=P.event_type==="inspection"&&P.round_number?` ครั้งที่ ${P.round_number}`:"",D=new Date(P.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});V.textContent=`${W[P.event_type]??"📌"}${K} ${P.label} (${D})`,j.appendChild(V)})}catch(R){j.innerHTML=`<option>โหลดไม่สำเร็จ: ${R.message}</option>`}}),_.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const E=+_.querySelector("#sann-cal-event-sel").value,j=u.find(W=>W.id===E),R=_.querySelector("#sann-cal-preview"),N=_.querySelector("#sann-cal-fill");if(!j){R.classList.add("hidden"),N.classList.add("hidden");return}const O=(j.work_calendar_items||[]).sort((W,P)=>W.sort_order-P.sort_order),J=new Date(j.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});R.innerHTML=`<p class="font-semibold">${j.label}</p>
        <p class="text-indigo-600">📅 ${J}${j.event_type==="inspection"&&j.round_number?` · ครั้งที่ ${j.round_number}`:""}</p>
        ${j.description?`<p>${j.description}</p>`:""}
        ${O.length?`<ul class="mt-1 space-y-0.5">${O.map(W=>`<li>☑ ${W.item_label}</li>`).join("")}</ul>`:""}`,R.classList.remove("hidden"),N.classList.remove("hidden")}),_.querySelector("#sann-cal-fill").addEventListener("click",()=>{const E=+_.querySelector("#sann-cal-event-sel").value,j=u.find(W=>W.id===E);if(!j)return;const R=(j.work_calendar_items||[]).sort((W,P)=>W.sort_order-P.sort_order),N=new Date(j.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),O=j.event_type==="inspection"&&j.round_number?` ครั้งที่ ${j.round_number}`:"";_.querySelector("#sann-title").value=j.label+(O?` (${O.trim()})`:"");const J=[];j.description&&J.push(j.description),R.length&&(J.push("สิ่งที่ต้องเตรียม:"),R.forEach(W=>J.push(`• ${W.item_label}`))),J.push(`กำหนดวันที่: ${N}`),_.querySelector("#sann-body").value=J.join(`
`),j.event_date&&(_.querySelector("#sann-due").value=j.event_date),_.querySelector("#sann-cal-picker").classList.add("hidden")}),_.querySelectorAll(".sann-type-btn").forEach(E=>{E.addEventListener("click",()=>{const j=E.dataset.type;_.querySelectorAll(".sann-type-btn").forEach(R=>{const N=R.dataset.type==="training";R.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${R.dataset.type===j?N?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":N?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),_.querySelector("#sann-training-fields").classList.toggle("hidden",j!=="training")})});const h=E=>E==="teacher"?"bg-sky-600 text-white border-sky-600":E==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",C=E=>E==="teacher"?"hover:border-sky-300":E==="student"?"hover:border-teal-300":"hover:border-indigo-300";_.querySelectorAll(".sann-audience-btn").forEach(E=>{E.addEventListener("click",()=>{_.querySelectorAll(".sann-audience-btn").forEach(j=>{j.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${j.dataset.audience===E.dataset.audience?h(j.dataset.audience):`bg-white text-gray-600 border-gray-200 ${C(j.dataset.audience)}`}`})})}),Ea(_,"sann"),_.querySelectorAll(".sann-filter-btn").forEach(E=>{E.addEventListener("click",()=>{_.querySelectorAll(".sann-filter-btn").forEach(j=>{j.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${j.dataset.filter===E.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),_.querySelector("#sann-modal-save").addEventListener("click",async()=>{var Q,X;const E=_.querySelector("#sann-title").value.trim();if(!E){B("กรุณากรอกหัวข้อ","warning");return}const j=_.querySelector("#sann-body").value.trim()||null,R=_.querySelector("#sann-active-toggle").dataset.on==="true",N=_.querySelector("#sann-pin").dataset.on==="true"?1:0,O=_.querySelector("#sann-ack").dataset.on==="true",J=_.querySelector("#sann-due").value||null,W=_.querySelector(".sann-type-btn.bg-violet-600")||(b==null?void 0:b.ann_type)==="training"?"training":"general",P=((Q=_.querySelector(".sann-audience-btn.text-white"))==null?void 0:Q.dataset.audience)??(b==null?void 0:b.audience)??"all",V=_.querySelector("#sann-video-url").value.trim()||null,K=W==="training"&&_.querySelector("#sann-event-location").value.trim()||null,D=((X=_.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:X.dataset.filter)??(b==null?void 0:b.schedule_filter)??"all",z=(L==null?void 0:L.getValue())??(b==null?void 0:b.target_teacher_ids)??[],F=(S==null?void 0:S.getValue())??(b==null?void 0:b.target_student_ids)??[];if(W==="training"){if(!K){B("กรุณาระบุสถานที่","warning");return}const G=Sa(_,"sann");for(const ee of G){if(!ee.date){B("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!ee.periods.length){B("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const te=_.querySelector("#sann-modal-save");te.disabled=!0,te.textContent="กำลังบันทึก...";try{q?await m(b.id,{title:E,body:j,isActive:R,priority:N,requiresAck:O,dueDate:J,annType:W,eventDate:G[0].date,eventPeriods:G[0].periods,eventLocation:K,scheduleFilter:D,fileUrl:x,videoUrl:V,audience:P,targetTeacherIds:z,targetStudentIds:F}):G.length>1?(await Promise.all(G.map(ee=>o({title:E,body:j,isActive:R,priority:N,teacherId:t.id,creatorRole:e,requiresAck:O,dueDate:J,annType:W,eventDate:ee.date,eventPeriods:ee.periods,eventLocation:K,scheduleFilter:D,fileUrl:x,videoUrl:V,audience:P,targetTeacherIds:z,targetStudentIds:F}))),B(`สร้าง ${G.length} ประกาศสำเร็จ ✅`,"success")):(await o({title:E,body:j,isActive:R,priority:N,teacherId:t.id,creatorRole:e,requiresAck:O,dueDate:J,annType:W,eventDate:G[0].date,eventPeriods:G[0].periods,eventLocation:K,scheduleFilter:D,fileUrl:x,videoUrl:V,audience:P,targetTeacherIds:z,targetStudentIds:F}),B("บันทึกสำเร็จ ✅","success")),A(),await i()}catch(ee){B("บันทึกไม่สำเร็จ: "+ae(ee),"error");const de=_.querySelector("#sann-modal-save");de.disabled=!1,de.textContent="บันทึก"}return}const U=_.querySelector("#sann-modal-save");U.disabled=!0,U.textContent="กำลังบันทึก...";try{q?await m(b.id,{title:E,body:j,isActive:R,priority:N,requiresAck:O,dueDate:J,annType:W,fileUrl:x,videoUrl:V,audience:P,targetTeacherIds:z,targetStudentIds:F}):await o({title:E,body:j,isActive:R,priority:N,teacherId:t.id,creatorRole:e,requiresAck:O,dueDate:J,annType:W,fileUrl:x,videoUrl:V,audience:P,targetTeacherIds:z,targetStudentIds:F}),!q&&R&&Ca(E,j,P),B("บันทึกสำเร็จ ✅","success"),A(),await i()}catch(G){B("บันทึกไม่สำเร็จ: "+ae(G),"error"),U.disabled=!1,U.textContent="บันทึก"}})};(T=document.getElementById("sann-create-btn"))==null||T.addEventListener("click",()=>v(null)),await i()}async function Aa(){var m;re("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const t=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],s=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];s.flatMap(d=>d.features),ne(`<div class="animate-fade">
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
  </div>`);let n={};try{n=await es()}catch{}const o=(m=document.querySelector("#perm-loading"))==null?void 0:m.closest(".bg-white");o&&(o.innerHTML=`
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 w-44">ฟีเจอร์</th>
            ${t.map(d=>`<th class="px-3 py-3.5 text-center text-xs font-bold text-gray-600 min-w-[80px]">${d.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${s.map(d=>`
            <tr class="bg-indigo-50/50 border-y border-indigo-100">
              <td colspan="${t.length+1}" class="px-5 py-2 text-xs font-bold text-indigo-600 uppercase tracking-wider sticky left-0">${d.group}</td>
            </tr>
            ${d.features.map(w=>`
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${w.label}</td>
                ${t.map(a=>{var p;const f=((p=n[a.key])==null?void 0:p[w.key])??!1;return`<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${f?"bg-emerald-500":"bg-gray-300"}"
                      data-position="${a.key}" data-feature="${w.key}" data-on="${f}">
                      <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ml-0.5"
                        style="transform:translateX(${f?"20":"0"}px)"></span>
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
    </div>`,o.querySelectorAll(".perm-toggle").forEach(d=>{d.addEventListener("click",async()=>{const w=d.dataset.position,a=d.dataset.feature,f=d.dataset.on==="true",p=!f;d.disabled=!0;try{await ts(w,a,p),d.dataset.on=String(p),d.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${p?"bg-emerald-500":"bg-gray-300"}`,d.querySelector("span").style.transform=`translateX(${p?"20":"0"}px)`,n[w]||(n[w]={}),n[w][a]=p,B(`${p?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{B("บันทึกไม่สำเร็จ","error")}d.disabled=!1})}))}async function qa(){re("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let t=[],s=[],n=[],o="สามัญ",m="",d="",w="",a="",f="";const p=E=>{if(!E)return null;const j=E.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return j?j[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},e=E=>E?/^(PR|อก\.|อป\.)/i.test(E)?"ศาสนา":/^ปวช\./i.test(E)?"ปวช":"สามัญ":"สามัญ",l={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},c=E=>{const j=E==="ศาสนา";return[...new Set(n.map(R=>j?R.religion_room:R.main_room).filter(Boolean))].filter(R=>e(R)===E).sort((R,N)=>R.localeCompare(N,"th"))},i=E=>{const j=c(E),R=[...new Set(j.map(O=>p(O)).filter(Boolean))],N=l[E]||[];return[...new Set([...N,...R])].sort((O,J)=>O.localeCompare(J,"th"))},v=async()=>{[t,s,n]=await Promise.all([kn(),me(),Ne()])},I=(E,j="w-3.5 h-3.5")=>`<span class="inline-block ${j} rounded-full flex-shrink-0" style="background:${E}"></span>`,T=E=>t.find(j=>j.name===E),b=E=>n.filter(j=>j.house_color===E).length,_=()=>n.filter(E=>!E.house_color).length,q=E=>{let j=document.getElementById("hc-print-roster-styles");j||(j=document.createElement("style"),j.id="hc-print-roster-styles",document.head.appendChild(j)),j.textContent=`
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
    `;const R=document.createElement("div");R.id="hc-print-roster-area",document.body.appendChild(R);const N=o==="ศาสนา",O=new Map;E.forEach(P=>{const V=(N?P.religion_room:P.main_room)||"ไม่มีห้องเรียน";O.has(V)||O.set(V,[]),O.get(V).push(P)});const J=Array.from(O.keys()).sort((P,V)=>P.localeCompare(V,"th"));let W="";J.forEach((P,V)=>{const D=O.get(P).sort((U,Q)=>(U.student_code||"").localeCompare(Q.student_code||""));let z="ใบรายชื่อนักเรียน";w&&(w==="__none__"?z+=" (ไม่มีสี)":z+=` กลุ่มสี${w}`),z+=` ห้อง ${P}`,a&&(z+=` (${a})`);const F=D.map((U,Q)=>{const X=T(U.house_color),G=X?`<span class="color-badge" style="color: ${X.color_hex}">
               สี${U.house_color}
             </span>`:'<span style="color: #9ca3af;">— ไม่มีสี —</span>',te=U.image_url?`<img src="${U.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>';return`
          <tr>
            <td style="text-align: center; width: 45px;">${Q+1}</td>
            <td>
              <div class="stu-info-wrap">
                ${te}
                <div class="stu-details">
                  <div class="stu-name">${Y(U.full_name)}</div>
                  <div class="stu-meta">รหัส: ${Y(U.student_code||"—")} | สามัญ: ${Y(U.main_room||"—")} | ศาสนา: ${Y(U.religion_room||"—")}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${G}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${Y(U.sports_shirt_size||"")}</td>
            <td style="width: 120px;"></td>
          </tr>
        `}).join("");W+=`
        <div class="roster-page-block">
          <div class="roster-title">${Y(z)}</div>
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
        ${W}
      </div>
    `,R.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},R.querySelector("#hc-btn-close-preview").onclick=()=>{R.remove()}},A=()=>s.find(E=>E.position==="house_color_admin"),L=(E,j)=>{const N=(j?t.filter(O=>O.gender===j):t).map(O=>`<option value="${Y(O.name)}" ${O.name===E?"selected":""}>สี${Y(O.name)}</option>`).join("");return`<option value="" ${E?"":"selected"}>— ไม่มีสี —</option>`+N},S=()=>{const E=f.toLowerCase(),j=o==="ศาสนา";return n.filter(R=>{var O,J;const N=j?R.religion_room:R.main_room;return!(!N||d&&N!==d||m&&!d&&p(N)!==m||!m&&!d&&e(N)!==o||w==="__none__"&&R.house_color||w&&w!=="__none__"&&R.house_color!==w||a&&R.gender!==a||E&&!((O=R.full_name)!=null&&O.toLowerCase().includes(E))&&!((J=R.student_code)!=null&&J.toLowerCase().includes(E))&&!N.toLowerCase().includes(E))})},k=E=>E?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",H=()=>{const E=t.filter(W=>W.gender==="ชาย"),j=t.filter(W=>W.gender==="หญิง"),R=_(),N=W=>{const P=w===W.name,V=b(W.name);return`<button class="${k(P)}" data-color="${Y(W.name)}"
               style="${P?`border-color:${W.color_hex};color:${W.color_hex};background:${W.color_hex}18`:`border-color:${W.color_hex}55;color:#374151`}">
        ${I(W.color_hex)} สี${Y(W.name)}
        <span class="ml-1 font-bold" style="color:${W.color_hex}">${V}</span>
      </button>`},O=w==="__none__",J=`<button class="${k(O)}" data-color="__none__"
               style="${O?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${R}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${E.map(N).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${j.map(N).join("")}
          ${J}
        </div>
      </div>`},$=()=>{const E=S();if(!E.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const j=o==="ศาสนา";return E.map(R=>{const N=T(R.house_color),O=N?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${N.color_hex}">
             ${I(N.color_hex,"w-2.5 h-2.5")} ${Y(R.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',J=N?`background:${N.color_hex}12`:"",W=j?R.religion_room:R.main_room,P=R.image_url?`<img src="${R.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`:'<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>';return`<tr class="transition border-b border-gray-100 last:border-0" style="${J}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${Y(R.student_code??"")}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${P}
            <div>${Y(R.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${Y(W??"—")}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${Y(R.gender??"—")}</td>
        <td class="px-4 py-2.5">${O}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${R.id}" data-current="${Y(R.house_color??"")}">
            ${L(R.house_color,R.gender)}
          </select>
        </td>
      </tr>`}).join("")},x=()=>{const E=A(),j=S().length;ne(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${E?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${Y(E.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
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
          value="${Y(f)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="สามัญ" ${o==="สามัญ"?"selected":""}>สามัญ</option>
          <option value="ศาสนา" ${o==="ศาสนา"?"selected":""}>ศาสนา</option>
          <option value="ปวช" ${o==="ปวช"?"selected":""}>ปวช</option>
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
          <tbody id="hc-tbody">${$()}</tbody>
        </table>
      </div>
    </div>`),M()},y=()=>{const E=document.getElementById("hc-tbody");E&&(E.innerHTML=$()),u();const j=S().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(O=>{O.textContent.includes("พบ")&&(O.innerHTML=`พบ <b class="text-gray-700">${j}</b> คน`)});const R=document.getElementById("hc-print-roster-btn");R&&(R.disabled=j===0,R.textContent=`🖨️ พิมพ์ใบรายชื่อ (${j})`);const N=document.getElementById("hc-clear-colors-btn");N&&(N.disabled=j===0,N.textContent=`🗑️ ล้างสี (${j})`)},g=()=>{var j;const E=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");E&&(E.innerHTML=H()+(w?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),r(),(j=document.getElementById("hc-clear-filter"))==null||j.addEventListener("click",()=>{w="",g(),y()})},r=()=>{document.querySelectorAll(".hc-chip").forEach(E=>{E.addEventListener("click",()=>{const j=E.dataset.color;w=w===j?"":j,g(),y()})})},u=()=>{document.querySelectorAll(".hc-color-sel").forEach(E=>{E.addEventListener("change",async()=>{const j=E.dataset.sid,R=E.dataset.current,N=E.value||null;E.disabled=!0;try{await jt([j],N);const O=n.find(V=>String(V.id)===String(j));O&&(O.house_color=N),E.dataset.current=N??"";const J=E.closest("tr"),W=J==null?void 0:J.children[4];if(W){const V=T(N);W.innerHTML=V?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${V.color_hex}">
                   ${I(V.color_hex,"w-2.5 h-2.5")} ${Y(N)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const P=T(N);J&&(J.style.background=P?`${P.color_hex}12`:""),E.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>E.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),g()}catch{B("บันทึกไม่สำเร็จ","error"),E.value=R??""}E.disabled=!1})})},h=()=>{const E=document.getElementById("hc-filter-category"),j=document.getElementById("hc-filter-level");if(!E||!j)return;o=E.value;const R=i(o);j.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${R.map(N=>`<option value="${N}" ${N===m?"selected":""}>${N}</option>`).join("")}
    `,C()},C=()=>{const E=document.getElementById("hc-filter-level"),j=document.getElementById("hc-filter-class");if(!E||!j)return;m=E.value;const N=c(o).filter(O=>m?p(O)===m:!0);j.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${N.length} ห้อง) --</option>
      ${N.map(O=>`
        <option value="${O}" ${O===d?"selected":""}>${O}</option>
      `).join("")}
    `},M=()=>{var E,j,R,N,O,J,W,P;r(),u(),(E=document.getElementById("hc-clear-filter"))==null||E.addEventListener("click",()=>{w="",g(),y()}),(j=document.getElementById("hc-search"))==null||j.addEventListener("input",V=>{f=V.target.value,y()}),(R=document.getElementById("hc-filter-gender"))==null||R.addEventListener("change",V=>{a=V.target.value,y()}),(N=document.getElementById("hc-filter-category"))==null||N.addEventListener("change",V=>{o=V.target.value,m="",d="",h(),y()}),(O=document.getElementById("hc-filter-level"))==null||O.addEventListener("change",V=>{m=V.target.value,d="",C(),y()}),(J=document.getElementById("hc-filter-class"))==null||J.addEventListener("change",V=>{d=V.target.value,y()}),(W=document.getElementById("hc-print-roster-btn"))==null||W.addEventListener("click",()=>{const V=S();V.length>0&&q(V)}),(P=document.getElementById("hc-clear-colors-btn"))==null||P.addEventListener("click",async()=>{const V=S();if(!V.length||!confirm(`ยืนยันล้างสีนักเรียน ${V.length} คนที่แสดงในตาราง?`))return;const K=document.getElementById("hc-clear-colors-btn");K.disabled=!0,K.textContent="กำลังล้างสี...";try{await jt(V.map(D=>D.id),null),V.forEach(D=>{D.house_color=null}),B(`ล้างสีสำเร็จ ${V.length} คน`,"success"),g(),y()}catch{B("เกิดข้อผิดพลาด","error"),K.disabled=!1,K.textContent=`🗑️ ล้างสี (${V.length})`}}),h()};await v(),x()}async function Ma(){re("council-rep-nominations"),document.getElementById("page-title").textContent="สรุปรายชื่อตัวแทนสภานักเรียน";const t=["ม.3","ม.4","ม.5"];let s="",n="",o="";const m=await ce().catch(()=>({})),d=String(m.academicYear??m.academic_year??new Date().getFullYear()+543),[w,a]=await Promise.all([gt(d).catch(()=>[]),Zn(d).catch(()=>[])]),f=b=>{var _;return((_=(b||"").match(/^ม\.\d+/))==null?void 0:_[0])??null},p=[...new Set(w.filter(b=>b.category==="สามัญ"&&t.includes(f(b.main_room))).map(b=>b.main_room))].sort((b,_)=>b.localeCompare(_,"th")),e={};p.forEach(b=>{e[b]=0}),a.forEach(b=>{e[b.main_room]!=null&&e[b.main_room]++});const l=p.filter(b=>e[b]>=2),c=p.filter(b=>e[b]>0&&e[b]<2),i=p.filter(b=>e[b]===0),v=()=>a.filter(b=>{var _,q,A;if(n&&f(b.main_room)!==n||o&&((_=b.students)==null?void 0:_.gender)!==o)return!1;if(s){const L=s.toLowerCase();if(!`${((q=b.students)==null?void 0:q.full_name)??""} ${((A=b.students)==null?void 0:A.student_code)??""} ${b.main_room??""}`.toLowerCase().includes(L))return!1}return!0}),I=b=>b.length?b.map(_=>{var q,A,L,S;return`
    <tr class="border-t border-gray-100">
      <td class="px-4 py-2.5">${Y(_.main_room)}</td>
      <td class="px-4 py-2.5 font-medium">${Y(((q=_.students)==null?void 0:q.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${Y(((A=_.students)==null?void 0:A.student_code)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${Y(((L=_.students)==null?void 0:L.gender)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-500">${Y(((S=_.teachers)==null?void 0:S.full_name)??"—")}</td>
      <td class="px-4 py-2.5 text-gray-400 text-xs">${_.created_at?new Date(_.created_at).toLocaleDateString("th-TH"):"—"}</td>
    </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ไม่พบรายการ</td></tr>',T=()=>{var _,q,A,L;const b=v();ne(`<div class="space-y-5 animate-fade">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ส่งครบ 2 คน</p><b class="text-2xl text-emerald-700">${l.length}</b><p class="text-[11px] text-emerald-600 mt-0.5">จาก ${p.length} ห้อง</p></div>
        <div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">ส่งไม่ครบ</p><b class="text-2xl text-amber-700">${c.length}</b>${c.length?`<p class="text-[11px] text-amber-600 mt-0.5 truncate" title="${Y(c.join(", "))}">${Y(c.join(", "))}</p>`:""}</div>
        <div class="bg-red-50 rounded-2xl p-4"><p class="text-xs text-red-700">ยังไม่ส่งเลย</p><b class="text-2xl text-red-700">${i.length}</b>${i.length?`<p class="text-[11px] text-red-600 mt-0.5 truncate" title="${Y(i.join(", "))}">${Y(i.join(", "))}</p>`:""}</div>
      </div>

      <div class="flex flex-wrap gap-3 items-center">
        <input id="crn-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..." value="${Y(s)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="crn-filter-grade" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
          ${t.map(S=>`<option value="${S}" ${n===S?"selected":""}>${S}</option>`).join("")}
        </select>
        <select id="crn-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${o==="ชาย"?"selected":""}>👦 ชาย</option>
          <option value="หญิง" ${o==="หญิง"?"selected":""}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${b.length}</b> รายการ</span>
        <button id="crn-print-btn" class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" ${b.length===0?"disabled":""}>
          🖨️ พิมพ์ใบรายชื่อ (${b.length})
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
          <tbody>${I(b)}</tbody>
        </table>
      </div>
    </div>`),(_=document.getElementById("crn-search"))==null||_.addEventListener("input",S=>{s=S.target.value,T()}),(q=document.getElementById("crn-filter-grade"))==null||q.addEventListener("change",S=>{n=S.target.value,T()}),(A=document.getElementById("crn-filter-gender"))==null||A.addEventListener("change",S=>{o=S.target.value,T()}),(L=document.getElementById("crn-print-btn"))==null||L.addEventListener("click",()=>{const S=v(),k=`<!doctype html><html><head><meta charset="utf-8"><title>รายชื่อตัวแทนสภานักเรียน</title>
        <style>
          body{font-family:'Sarabun','TH Sarabun New',sans-serif;padding:24px;color:#111}
          h1{font-size:18px;margin:0 0 4px}
          p.sub{font-size:12px;color:#666;margin:0 0 16px}
          table{width:100%;border-collapse:collapse;font-size:13px}
          th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
          th{background:#f3f4f6}
        </style></head><body>
        <h1>รายชื่อตัวแทนสภานักเรียน${n?" ระดับชั้น "+n:""}</h1>
        <p class="sub">ปีการศึกษา ${Y(d)} · พิมพ์เมื่อ ${new Date().toLocaleDateString("th-TH")} · ทั้งหมด ${S.length} รายการ</p>
        <table><thead><tr><th>ห้อง</th><th>ชื่อ-สกุล</th><th>รหัส</th><th>เพศ</th><th>ครูผู้เสนอ</th></tr></thead>
        <tbody>${S.map(H=>{var $,x,y,g;return`<tr><td>${Y(H.main_room)}</td><td>${Y((($=H.students)==null?void 0:$.full_name)??"—")}</td><td>${Y(((x=H.students)==null?void 0:x.student_code)??"—")}</td><td>${Y(((y=H.students)==null?void 0:y.gender)??"—")}</td><td>${Y(((g=H.teachers)==null?void 0:g.full_name)??"—")}</td></tr>`}).join("")}</tbody>
        </table></body></html>`;ta(k)})};T()}async function Da(){var I,T,b,_,q;re("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const t=A=>A?new Date(A).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",s=A=>Number(A??0).toLocaleString("th-TH"),n=A=>!A.slip_url&&String(A.admin_note??"").startsWith("[เงินสด]"),o=A=>{const L=String((A==null?void 0:A.donationStickerTiers)??"").trim();return(L?L.split(`
`).filter(Boolean).map(H=>{const[$,x,y,,g]=H.split("|").map(r=>r.trim());return{amount:parseInt($)||0,sticker:x||"🏅",title:y||"",color:g||""}}).filter(H=>H.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([H,$,x,y])=>({amount:H,sticker:$,title:x,color:y}))).sort((H,$)=>H.amount-$.amount).map((H,$)=>{const x=((A==null?void 0:A[`donationStickerImg${$+1}`])??"").trim();return x&&/^https?:\/\//.test(x)?{...H,sticker:x}:H})},m=(A,L)=>{let S=null;for(const k of L)A>=k.amount&&(S=k);return S},d=(A,L="w-8 h-8")=>A?/^https?:\/\//.test(A.sticker)?`<img src="${A.sticker}" class="${L} object-contain" title="${A.title}" />`:`<span class="text-xl" title="${A.title}">${A.sticker}</span>`:"";ne(`
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
      ${["ยอดรวมอนุมัติ","รออนุมัติ","จำนวนผู้โดเนท","เฉลี่ยต่อคน"].map((A,L)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${A}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${L}">—</p>
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
  </div>`);let w=[],a=[],f={};const p=async()=>{var $;const{supabase:A}=await se(async()=>{const{supabase:x}=await import("./supabase-BV-W2lsh.js").then(y=>y.a);return{supabase:x}},[]),{getSystemConfig:L,getPaymentSlipViewUrl:S}=await se(async()=>{const{getSystemConfig:x,getPaymentSlipViewUrl:y}=await import("./api-Cf_Y4s92.js");return{getSystemConfig:x,getPaymentSlipViewUrl:y}},__vite__mapDeps([0,1])),[k,{data:H}]=await Promise.all([L().catch(()=>({})),A.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1})]);a=o(k),w=H??[];for(const x of w)x.slip_url&&!n(x)&&(x._resolvedSlip=await S(x.slip_url).catch(()=>x.slip_url));f={};for(const x of w){if(x.status!=="approved")continue;const y=($=x.teachers)==null?void 0:$.id;y&&(f[y]=(f[y]??0)+(Number(x.amount)||0))}e(),l()},e=()=>{const A=w.filter(x=>x.status==="approved"),L=A.reduce((x,y)=>x+(Number(y.amount)||0),0),S=w.filter(x=>x.status==="pending").length,k=new Set(A.map(x=>{var y;return(y=x.teachers)==null?void 0:y.id})).size,H=k?Math.round(L/k):0,$=[s(L)+" ฿",S,k+" คน",s(H)+" ฿"];document.querySelectorAll(".don-stat-val").forEach((x,y)=>{x.textContent=$[y]})},l=()=>{var y,g,r,u;const A=document.getElementById("don-table");if(!A)return;const L=(((y=document.getElementById("don-search"))==null?void 0:y.value)??"").toLowerCase(),S=((g=document.getElementById("don-filter-status"))==null?void 0:g.value)??"all",k=((r=document.getElementById("don-filter-method"))==null?void 0:r.value)??"all",H=((u=document.getElementById("don-filter-sort"))==null?void 0:u.value)??"date_desc";let $=w.filter(h=>{const C=h.teachers;return!(L&&!String((C==null?void 0:C.full_name)??"").toLowerCase().includes(L)&&!String((C==null?void 0:C.teacher_code)??"").includes(L)||S!=="all"&&h.status!==S||k==="cash"&&!n(h)||k==="transfer"&&n(h))});if(H==="date_asc"?$.sort((h,C)=>new Date(h.created_at)-new Date(C.created_at)):H==="amount_desc"&&$.sort((h,C)=>(C.amount??0)-(h.amount??0)),!$.length){A.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const x=h=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[h]??`<span class="text-gray-400 text-xs">${h}</span>`;A.innerHTML=`
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
        ${$.map((h,C)=>{const M=h.teachers,E=n(h),j=String(h.admin_note??"").replace(/^\[เงินสด\]\s*/,""),R=f[M==null?void 0:M.id]??0,N=m(R,a),O=M!=null&&M.image_url?`<img src="${M.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((M==null?void 0:M.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${h.id}" data-tid="${(M==null?void 0:M.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${C+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${O}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(M==null?void 0:M.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(M==null?void 0:M.teacher_code)??""}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${d(N)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${s(h.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${E?'<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>':`<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${h._resolvedSlip??""}" data-id="${h.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${x(h.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${t(h.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${j}">${j||"—"}</td>
            <td class="px-3 py-3">
              <div class="flex gap-1 justify-end" onclick="event.stopPropagation()">
                ${h.status==="pending"?`
                  <button class="don-approve text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium" data-id="${h.id}">✅</button>
                  <button class="don-reject  text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium" data-id="${h.id}">❌</button>
                `:""}
                <button class="don-edit text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 font-medium" data-id="${h.id}">✏️</button>
              </div>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,A.querySelectorAll(".don-row").forEach(h=>{h.addEventListener("click",()=>c(h.dataset.tid))}),A.querySelectorAll(".don-slip").forEach(h=>{h.addEventListener("click",async C=>{C.stopPropagation();let M=h.dataset.url;if(!M){const j=w.find(R=>R.id===Number(h.dataset.id));if(j!=null&&j.slip_url){const{getPaymentSlipViewUrl:R}=await se(async()=>{const{getPaymentSlipViewUrl:N}=await import("./api-Cf_Y4s92.js");return{getPaymentSlipViewUrl:N}},__vite__mapDeps([0,1]));M=await R(j.slip_url).catch(()=>j.slip_url)}}if(!M){B("ไม่พบสลิป","warning");return}const E=document.createElement("div");E.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",E.innerHTML=`<img src="${M}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,E.addEventListener("click",()=>E.remove()),document.body.appendChild(E)})}),A.querySelectorAll(".don-approve").forEach(h=>{h.addEventListener("click",async C=>{C.stopPropagation();const{reviewPaymentRequest:M}=await se(async()=>{const{reviewPaymentRequest:E}=await import("./api-Cf_Y4s92.js");return{reviewPaymentRequest:E}},__vite__mapDeps([0,1]));await M(Number(h.dataset.id),"approved").catch(()=>{}),B("อนุมัติแล้ว ✅","success"),await p()})}),A.querySelectorAll(".don-reject").forEach(h=>{h.addEventListener("click",async C=>{C.stopPropagation();const M=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:E}=await se(async()=>{const{reviewPaymentRequest:j}=await import("./api-Cf_Y4s92.js");return{reviewPaymentRequest:j}},__vite__mapDeps([0,1]));await E(Number(h.dataset.id),"rejected",M||null).catch(()=>{}),B("ปฏิเสธแล้ว","info"),await p()})}),A.querySelectorAll(".don-edit").forEach(h=>{h.addEventListener("click",C=>{C.stopPropagation(),v(Number(h.dataset.id))})})},c=A=>{if(!A)return;const L=Number(A),S=w.filter(M=>{var E;return((E=M.teachers)==null?void 0:E.id)===L});if(!S.length)return;const k=S[0].teachers,H=S.filter(M=>M.status==="approved"),$=H.reduce((M,E)=>M+(Number(E.amount)||0),0),x=m($,a),y=(x==null?void 0:x.color)??"#10b981",g=parseInt(y.slice(1,3),16),r=parseInt(y.slice(3,5),16),u=parseInt(y.slice(5,7),16),h=k!=null&&k.image_url?`<img src="${k.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${((k==null?void 0:k.full_name)??"?").charAt(0)}</div>`,C=document.createElement("div");C.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",C.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${g},${r},${u},0.9),rgba(${g},${r},${u},1))">
          ${h}
          ${x?`<div class="text-3xl mb-1">${/^https?:\/\//.test(x.sticker)?`<img src="${x.sticker}" class="w-12 h-12 object-contain mx-auto"/>`:x.sticker}</div>`:""}
          <p class="text-white font-bold text-base leading-tight">${(k==null?void 0:k.full_name)??"—"}</p>
          <p class="text-white/70 text-xs mt-0.5">${(k==null?void 0:k.teacher_code)??""}</p>
          ${x?`<span class="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">${x.title}</span>`:""}
        </div>
        <!-- stats -->
        <div class="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ยอดรวม</p>
            <p class="font-bold text-emerald-600">${s($)} ฿</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ครั้งทั้งหมด</p>
            <p class="font-bold text-gray-700">${S.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${H.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${S.map(M=>{const E=n(M),j=String(M.admin_note??"").replace(/^\[เงินสด\]\s*/,""),R={pending:"⏳",approved:"✅",rejected:"❌"}[M.status]??"";return`<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${t(M.created_at)}</span>
                <span class="text-[11px] ${E?"text-gray-500":"text-blue-500"}">${E?"💵":"🧾"}</span>
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
      </div>`,document.body.appendChild(C),C.querySelector(".don-sum-close").addEventListener("click",()=>C.remove()),C.addEventListener("click",M=>{M.target===C&&C.remove()})},i=async()=>{const{getTeachers:A}=await se(async()=>{const{getTeachers:H}=await import("./api-Cf_Y4s92.js");return{getTeachers:H}},__vite__mapDeps([0,1])),L=await A().catch(()=>[]),S=document.createElement("div");S.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",S.innerHTML=`
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
      </div>`,document.body.appendChild(S);const k=$t({wrap:S.querySelector("#don-teacher-wrap"),teachers:[...L].sort((H,$)=>(H.full_name??"").localeCompare($.full_name??"","th"))});S.querySelector("#don-add-cancel").addEventListener("click",()=>S.remove()),S.querySelector("#don-add-confirm").addEventListener("click",async()=>{const H=k.getValue(),$=Number(S.querySelector("#don-add-amount").value),x=S.querySelector("#don-add-note").value.trim();if(!H){B("กรุณาเลือกครู","warning");return}if(!$){B("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:y}=await se(async()=>{const{createPaymentRequest:g}=await import("./api-Cf_Y4s92.js");return{createPaymentRequest:g}},__vite__mapDeps([0,1]));await y({teacher_id:parseInt(H),package_type:"donation",amount:$,status:"approved",admin_note:`[เงินสด] ${x}`.trim(),reviewed_at:new Date().toISOString()}).catch(g=>{B("บันทึกไม่สำเร็จ: "+ae(g),"error")}),B("บันทึกโดเนทเงินสดแล้ว ✅","success"),S.remove(),await p()})},v=A=>{const L=w.find(H=>H.id===A);if(!L)return;const S=String(L.admin_note??"").replace(/^\[เงินสด\]\s*/,""),k=document.createElement("div");k.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",k.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${L.amount??""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-edit-note" type="text" value="${S}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-edit-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button id="don-edit-save"   class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#don-edit-cancel").addEventListener("click",()=>k.remove()),k.querySelector("#don-edit-save").addEventListener("click",async()=>{const H=Number(k.querySelector("#don-edit-amount").value),$=k.querySelector("#don-edit-note").value.trim(),x=n(L)?"[เงินสด] ":"",{supabase:y}=await se(async()=>{const{supabase:r}=await import("./supabase-BV-W2lsh.js").then(u=>u.a);return{supabase:r}},[]),{error:g}=await y.from("payment_requests").update({amount:H,admin_note:(x+$).trim()||null}).eq("id",A);if(g){B("แก้ไขไม่สำเร็จ","error");return}B("บันทึกแล้ว ✅","success"),k.remove(),await p()})};(I=document.getElementById("don-search"))==null||I.addEventListener("input",l),(T=document.getElementById("don-filter-status"))==null||T.addEventListener("change",l),(b=document.getElementById("don-filter-method"))==null||b.addEventListener("change",l),(_=document.getElementById("don-filter-sort"))==null||_.addEventListener("change",l),(q=document.getElementById("don-add"))==null||q.addEventListener("click",i),await p()}async function Ha(){var l,c,i,v;re("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const t=I=>String(I??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=I=>I?new Date(I).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",n={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},o=["suggestion","problem","password_reset"],m=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],d=Object.fromEntries(m.map(I=>[I.value,I]));ne(`
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
  </div>`);let w=[];const a=async()=>{w=await Kt().catch(()=>[]),p(),e()},f=async(I,T)=>{if(!I)return;if(!I.is_read)try{await qt(I.id,!0),I.is_read=!0}catch{}const b=String(T??"").slice(0,120);await ys(I.profile_id,{title:"💬 แอดมินตอบกลับ Feedback ของคุณแล้ว",body:b||"เข้าไปดูคำตอบได้ที่เมนู Feedback ถึงแอดมิน",url:I.sender_role==="teacher"?"teacher.html":"student.html"}).catch(()=>{})},p=()=>{var T;const I=document.getElementById("fb-cat-stats");I&&(I.innerHTML=Object.keys(n).map(b=>{const _=w.filter(S=>S.category===b),q=_.length,A=_.filter(S=>!S.is_read).length;let L='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(o.includes(b)){const S=_.filter(k=>k.status==="resolved").length;L=`<p class="text-[10px] font-semibold mt-0.5 ${S===q&&q>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${S}/${q}</p>`}else A&&(L=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${A}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${b}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${n[b]}</p>
          <p class="text-xl font-bold text-gray-800">${q}</p>
          ${L}
        </div>`}).join(""),I.querySelectorAll(".fb-cat-card").forEach(b=>b.addEventListener("click",()=>{var q;const _=document.getElementById("fb-filter-cat");_&&(_.value=b.dataset.cat,e()),(q=document.getElementById("fb-list"))==null||q.scrollIntoView({behavior:"smooth",block:"start"})}))),(T=window._refreshFeedbackBadge)==null||T.call(window)},e=()=>{var L,S,k,H;const I=document.getElementById("fb-list");if(!I)return;const T=(((L=document.getElementById("fb-search"))==null?void 0:L.value)??"").toLowerCase(),b=((S=document.getElementById("fb-filter-role"))==null?void 0:S.value)??"all",_=((k=document.getElementById("fb-filter-cat"))==null?void 0:k.value)??"all",q=((H=document.getElementById("fb-filter-read"))==null?void 0:H.value)??"all";let A=w.filter($=>{var y,g,r;const x=[$.sender_name,$.message,(y=$.student)==null?void 0:y.student_code,(g=$.student)==null?void 0:g.main_room,(r=$.student)==null?void 0:r.religion_room,...($.messages??[]).map(u=>u.message)].join(" ").toLowerCase();return!(T&&!x.includes(T)||b!=="all"&&$.sender_role!==b||_!=="all"&&$.category!==_||q==="unread"&&$.is_read||q==="read"&&!$.is_read)});if(!A.length){I.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}I.innerHTML=A.map($=>{var x,y,g,r,u,h;return`
      <div class="bg-white rounded-2xl border ${$.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${$.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${t($.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${t($.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${$.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${$.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${s($.created_at)}</p>
              ${$.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${t(((x=$.student)==null?void 0:x.student_code)||"—")} · ห้องสามัญ ${t(((y=$.student)==null?void 0:y.main_room)||"—")} · ห้องศาสนา ${t(((g=$.student)==null?void 0:g.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${$.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${$.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(n).map(([C,M])=>`<option value="${C}" ${$.category===C?"selected":""}>${M}</option>`).join("")}
          </select>
          ${o.includes($.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((r=d[$.status])==null?void 0:r.cls)??"bg-gray-100 text-gray-600"}">${((u=d[$.status])==null?void 0:u.label)??$.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${t($.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${t($.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s($.created_at)}</p></div></div>
          ${($.messages??[]).map(C=>C.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${t(C.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${s(C.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${t($.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${t(C.message)}</p><p class="text-[9px] text-slate-400 mt-1">${s(C.created_at)}</p></div></div>`).join("")}
          ${$.admin_reply&&!($.messages??[]).some(C=>C.author_role==="admin"&&C.message===$.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${t($.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${$.replied_at?s($.replied_at):""}</p></div></div>`:""}
        </div>
        ${$.category==="password_reset"&&$.sender_role==="student"&&((h=$.student)!=null&&h.id)?$.status==="resolved"?'<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>':`<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${$.id}" data-sid="${$.student.id}" data-code="${t($.student.student_code||"")}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${t($.student.student_code||"")})
              </button>`:""}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${$.id}" data-read="${$.is_read}">
            ${$.is_read?"↩️ ทำเป็นยังไม่อ่าน":"✓ ทำเครื่องหมายว่าอ่านแล้ว"}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${$.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${$.id}">
              ${m.map(C=>`<option value="${C.value}" ${$.status===C.value?"selected":""}>${C.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${$.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${$.replied_at?`ตอบล่าสุด ${s($.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${$.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),I.querySelectorAll(".fb-toggle-read").forEach($=>$.addEventListener("click",async()=>{const x=parseInt($.dataset.id),y=$.dataset.read==="true";try{await qt(x,!y)}catch{B("บันทึกไม่สำเร็จ","error");return}const g=w.find(r=>r.id===x);g&&(g.is_read=!y),p(),e()})),I.querySelectorAll(".fb-category-sel").forEach($=>$.addEventListener("change",async()=>{const x=parseInt($.dataset.id),y=$.value,g=w.find(u=>u.id===x),r=g==null?void 0:g.category;$.disabled=!0;try{await ss(x,y)}catch{B("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),$.disabled=!1,$.value=r;return}g&&(g.category=y),B("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),e()})),I.querySelectorAll(".fb-delete").forEach($=>$.addEventListener("click",async()=>{const x=parseInt($.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await rs(x)}catch{B("ลบไม่สำเร็จ","error");return}w=w.filter(y=>y.id!==x),B("ลบแล้ว","success"),p(),e()}})),I.querySelectorAll(".fb-pw-reset-btn").forEach($=>$.addEventListener("click",async()=>{const x=parseInt($.dataset.id),y=parseInt($.dataset.sid),g=$.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${g} เป็นรหัสนักเรียน (${g}) จริงหรือไม่?`))return;const r=$.textContent;$.disabled=!0,$.textContent="⏳ กำลังรีเซ็ท...";try{await os(y,g),await ls(y).catch(()=>{}),await Mt(x,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${g}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(h){B("รีเซ็ทไม่สำเร็จ: "+ae(h),"error"),$.disabled=!1,$.textContent=r;return}const u=w.find(h=>h.id===x);if(u){u.status="resolved";const h=new Date().toISOString(),C=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${g}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;u.admin_reply=C,u.replied_at=h,u.messages=[...u.messages??[],{id:`local-${Date.now()}`,feedback_id:x,author_role:"admin",message:C,created_at:h}],await f(u,C)}B("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),p(),e()})),I.querySelectorAll(".fb-save-status").forEach($=>$.addEventListener("click",async()=>{var h,C;const x=parseInt($.dataset.id),y=$.closest(".fb-card"),g=(h=y.querySelector(".fb-status-sel"))==null?void 0:h.value,r=(C=y.querySelector(".fb-reply-input"))==null?void 0:C.value.trim();$.disabled=!0,$.textContent="⏳ กำลังบันทึก...";try{await Mt(x,{status:g,adminReply:r})}catch{B("บันทึกไม่สำเร็จ","error"),$.disabled=!1,$.textContent="💾 บันทึก";return}const u=w.find(M=>M.id===x);if(u&&(u.status=g,r)){const M=new Date().toISOString();u.admin_reply=r,u.replied_at=M,u.messages=[...u.messages??[],{id:`local-${Date.now()}`,feedback_id:x,author_role:"admin",message:r,created_at:M}],await f(u,r)}B(r?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),p(),e()}))};(l=document.getElementById("fb-search"))==null||l.addEventListener("input",e),(c=document.getElementById("fb-filter-role"))==null||c.addEventListener("change",e),(i=document.getElementById("fb-filter-cat"))==null||i.addEventListener("change",e),(v=document.getElementById("fb-filter-read"))==null||v.addEventListener("change",e),await a()}async function to(){const{getWorkCalendarEvents:t,getSchoolConfig:s}=await se(async()=>{const{getWorkCalendarEvents:f,getSchoolConfig:p}=await import("./api-Cf_Y4s92.js");return{getWorkCalendarEvents:f,getSchoolConfig:p}},__vite__mapDeps([0,1]));re("work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const n=f=>String(f??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),o={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},m={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},d=f=>new Date(f+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),w=f=>new Date(f+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let a={academic_year:new Date().getFullYear()+543,semester:1};try{a=await s()}catch{}ne(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="mb-6">
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${a.academic_year} ภาคเรียนที่ ${a.semester}</p>
    </div>
    <div id="wcalv-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
  </div>`);try{const f=await t(a.academic_year,a.semester),p=document.getElementById("wcalv-list");if(!f.length){p.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรมในปฏิทิน</div>';return}const e=Ds(new Date);p.innerHTML=f.map(l=>{const c=(l.work_calendar_items||[]).sort((I,T)=>I.sort_order-T.sort_order),i=l.event_date<e,v=l.event_type==="inspection"&&l.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${l.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border ${i?"border-gray-100 opacity-60":"border-gray-100"} shadow-sm p-4">
        <div class="flex flex-wrap items-center gap-1.5 mb-1">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${m[l.event_type]}">${o[l.event_type]}</span>
          ${v}
          ${i?'<span class="text-[11px] text-gray-400">ผ่านมาแล้ว</span>':'<span class="text-[11px] font-semibold text-emerald-600">กำลังจะมาถึง</span>'}
          <span class="text-xs text-gray-400 ml-auto">${l.end_date&&l.end_date!==l.event_date?`${w(l.event_date)} – ${d(l.end_date)}`:d(l.event_date)}</span>
        </div>
        <p class="font-semibold text-gray-800 text-sm">${n(l.label)}</p>
        ${l.description?`<p class="text-xs text-gray-500 mt-0.5">${n(l.description)}</p>`:""}
        ${c.length?`<div class="mt-2 border-t border-gray-50 pt-2">
          <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">สิ่งที่จะตรวจ</p>
          <ul class="space-y-0.5">${c.map(I=>`<li class="text-xs text-gray-600 flex gap-1.5"><span class="text-indigo-400">☑</span>${n(I.item_label)}</li>`).join("")}</ul>
        </div>`:""}
      </div>`}).join("")}catch(f){const p=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");document.getElementById("wcalv-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${p(f.message)}</div>`}}async function Ra(t){const{getWorkCalendarEvents:s,createWorkCalendarEvent:n,updateWorkCalendarEvent:o,deleteWorkCalendarEvent:m,replaceWorkCalendarItems:d,getSchoolConfig:w}=await se(async()=>{const{getWorkCalendarEvents:k,createWorkCalendarEvent:H,updateWorkCalendarEvent:$,deleteWorkCalendarEvent:x,replaceWorkCalendarItems:y,getSchoolConfig:g}=await import("./api-Cf_Y4s92.js");return{getWorkCalendarEvents:k,createWorkCalendarEvent:H,updateWorkCalendarEvent:$,deleteWorkCalendarEvent:x,replaceWorkCalendarItems:y,getSchoolConfig:g}},__vite__mapDeps([0,1]));re("work-calendar"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const a=k=>String(k??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),f={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},p={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},e=k=>new Date(k+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),l=k=>new Date(k+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let c={academic_year:new Date().getFullYear()+543,semester:1};try{c=await w()}catch{}const i=c.academic_year,v=c.semester;ne(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${i} ภาคเรียนที่ ${v}</p>
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
              ${Object.entries(f).map(([k,H])=>`
                <button data-type="${k}" class="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${k==="inspection"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">${H}</button>
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
  </div>`);let I=[],T=null;function b(){const k=document.getElementById("wcal-list");if(!I.length){k.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรม<br><span class="text-xs">กดปุ่ม + เพิ่มกิจกรรม เพื่อเริ่มต้น</span></div>';return}k.innerHTML=I.map(H=>{const $=(H.work_calendar_items||[]).sort((y,g)=>y.sort_order-g.sort_order),x=H.event_type==="inspection"&&H.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${H.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition" data-ev-id="${H.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-1.5 mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${p[H.event_type]}">${f[H.event_type]}</span>
              ${x}
              <span class="text-xs text-gray-400">${H.end_date&&H.end_date!==H.event_date?`${l(H.event_date)} – ${e(H.end_date)}`:e(H.event_date)}</span>
            </div>
            <p class="font-semibold text-gray-800 text-sm">${a(H.label)}</p>
            ${H.description?`<p class="text-xs text-gray-500 mt-0.5">${a(H.description)}</p>`:""}
            ${$.length?`<ul class="mt-2 space-y-0.5">${$.map(y=>`<li class="text-xs text-gray-500 flex gap-1.5"><span class="text-indigo-400 mt-0.5">☑</span>${a(y.item_label)}</li>`).join("")}</ul>`:""}
          </div>
          <div class="flex gap-1.5 shrink-0">
            <button class="wcal-edit-btn p-2 rounded-xl bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 transition text-sm" data-ev-id="${H.id}" title="แก้ไข">✏️</button>
            <button class="wcal-del-btn p-2 rounded-xl bg-gray-50 hover:bg-rose-50 text-gray-500 hover:text-rose-600 transition text-sm" data-ev-id="${H.id}" title="ลบ">🗑️</button>
          </div>
        </div>
      </div>`}).join("")}function _(k=""){const H=document.getElementById("wcal-items-list"),$=document.createElement("div");$.className="flex gap-2 items-center",$.innerHTML=`<input type="text" maxlength="100" value="${a(k)}" placeholder="เช่น ตรวจโปรไฟล์ครูครบถ้วน" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
      <button class="p-1.5 text-gray-400 hover:text-rose-500 transition wcal-remove-item">✕</button>`,$.querySelector(".wcal-remove-item").onclick=()=>$.remove(),H.appendChild($)}function q(k=null){T=(k==null?void 0:k.id)??null;const H=document.getElementById("wcal-modal");document.getElementById("wcal-modal-title").textContent=k?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.querySelectorAll(".wcal-type-pill").forEach($=>{const x=$.dataset.type===((k==null?void 0:k.event_type)??"inspection");$.className=`wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${x?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),document.getElementById("wcal-round").value=(k==null?void 0:k.round_number)??"",document.getElementById("wcal-date").value=(k==null?void 0:k.event_date)??"",document.getElementById("wcal-end-date").value=(k==null?void 0:k.end_date)??"",document.getElementById("wcal-label").value=(k==null?void 0:k.label)??"",document.getElementById("wcal-desc").value=(k==null?void 0:k.description)??"",document.getElementById("wcal-items-list").innerHTML="",((k==null?void 0:k.work_calendar_items)||[]).sort(($,x)=>$.sort_order-x.sort_order).forEach($=>_($.item_label)),S(),H.classList.remove("hidden"),setTimeout(()=>document.getElementById("wcal-label").focus(),50)}function A(){document.getElementById("wcal-modal").classList.add("hidden"),T=null}function L(){var k;return((k=document.querySelector(".wcal-type-pill.bg-indigo-600"))==null?void 0:k.dataset.type)??"inspection"}function S(){document.getElementById("wcal-round-row").classList.toggle("hidden",L()!=="inspection")}document.getElementById("wcal-create-btn").addEventListener("click",()=>q()),document.getElementById("wcal-modal-cancel").addEventListener("click",A),document.getElementById("wcal-modal-backdrop").addEventListener("click",A),document.getElementById("wcal-add-item").addEventListener("click",()=>_()),document.getElementById("wcal-type-pills").addEventListener("click",k=>{const H=k.target.closest(".wcal-type-pill");H&&(document.querySelectorAll(".wcal-type-pill").forEach($=>{$.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}),H.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-indigo-600 text-white border-indigo-600",S())}),document.getElementById("wcal-list").addEventListener("click",k=>{const H=k.target.closest(".wcal-edit-btn"),$=k.target.closest(".wcal-del-btn");if(H){const x=I.find(y=>y.id===+H.dataset.evId);x&&q(x)}if($){const x=I.find(y=>y.id===+$.dataset.evId);if(!x||!confirm(`ลบ "${x.label}" ใช่ไหม?
ความคิดเห็น/บันทึกที่อ้างอิงกิจกรรมนี้จะไม่ถูกลบ แต่จะสูญเสียการอ้างอิง`))return;m(x.id).then(()=>{I=I.filter(y=>y.id!==x.id),b()}).catch(y=>alert("ลบไม่สำเร็จ: "+y.message))}}),document.getElementById("wcal-modal-save").addEventListener("click",async()=>{const k=L(),H=parseInt(document.getElementById("wcal-round").value)||null,$=document.getElementById("wcal-date").value,x=document.getElementById("wcal-end-date").value||null,y=document.getElementById("wcal-label").value.trim(),g=document.getElementById("wcal-desc").value.trim();if(!$||!y){alert("กรุณากรอกวันที่และชื่อกิจกรรม");return}if(x&&x<$){alert("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น");return}const r=[...document.querySelectorAll("#wcal-items-list input")].map(h=>h.value.trim()).filter(Boolean),u=document.getElementById("wcal-modal-save");u.textContent="กำลังบันทึก...",u.disabled=!0;try{let h;T?(h=await o(T,{eventType:k,roundNumber:H,eventDate:$,endDate:x,label:y,description:g}),await d(T,r),h.work_calendar_items=r.map((C,M)=>({item_label:C,sort_order:M})),I=I.map(C=>C.id===T?h:C)):(h=await n({eventType:k,roundNumber:H,eventDate:$,endDate:x,label:y,description:g,academicYear:i,semester:v,createdByTeacherId:t==null?void 0:t.id}),await d(h.id,r),h.work_calendar_items=r.map((C,M)=>({item_label:C,sort_order:M})),I.push(h),I.sort((C,M)=>C.event_date.localeCompare(M.event_date))),b(),A()}catch(h){alert("บันทึกไม่สำเร็จ: "+h.message)}finally{u.textContent="บันทึก",u.disabled=!1}});try{I=await s(i,v)}catch(k){document.getElementById("wcal-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${a(k.message)}</div>`;return}b()}function ao(t){return t.filter(s=>s.category==="ศาสนา"||["AGM","AGMVOC"].includes(s.subject_group)).concat(t.filter(s=>!s.category&&!["AGM","AGMVOC","ACDMVOC"].includes(s.subject_group))).filter((s,n,o)=>o.findIndex(m=>m.id===s.id)===n)}async function Pa(){re("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",ne(`<div class="max-w-4xl mx-auto animate-fade">
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
  </div>`);let t=[],s=[];try{[t,s]=await Promise.all([Ae(),me()])}catch{B("โหลดข้อมูลไม่สำเร็จ","error");return}at(t),document.getElementById("btn-add-rg").onclick=()=>Na(null,s,async()=>{const n=await Ae();at(n)})}function at(t){const s=document.getElementById("rg-table-wrap");if(s){if(!t.length){s.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${t.map(n=>{var m;const o=n.teachers;return`<tr class="hover:bg-gray-50 transition" data-gid="${n.id}">
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${Y(n.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${o?`<div class="flex items-center gap-2">
                    ${o.image_url?`<img src="${o.image_url}" class="w-7 h-7 rounded-full object-cover" />`:`<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${Y(((m=o.full_name)==null?void 0:m.charAt(0))??"?")}</div>`}
                    <div>
                      <span class="font-medium">${Y(o.full_name)}</span>
                      ${o.teacher_code?`<span class="block text-xs font-mono text-gray-400">${o.teacher_code}</span>`:""}
                    </div>
                  </div>`:'<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${n.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${n.id}" data-name="${Y(n.name)}">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,s.querySelectorAll(".rg-edit").forEach(n=>{n.onclick=async()=>{const o=+n.dataset.gid,d=(await Ae()).find(a=>a.id===o),w=await me();Na(d,w,async()=>{at(await Ae())})}}),s.querySelectorAll(".rg-del").forEach(n=>{n.onclick=async()=>{const o=+n.dataset.gid,m=n.dataset.name;if(confirm(`ลบกลุ่ม "${m}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const w=(await Ae()).find(a=>a.id===o);w!=null&&w.leader_id&&await bt(w.leader_id,null,"religion_subgroup_head"),await En(o),B("ลบกลุ่มแล้ว","success"),at(await Ae())}catch(d){B("ลบไม่สำเร็จ: "+d.message,"error")}}})}}function Na(t,s,n){const o=!!t,m=document.createElement("div");m.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const d=[...s].sort((a,f)=>(a.full_name??"").localeCompare(f.full_name??"","th"));m.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${o?"แก้ไขกลุ่ม":"เพิ่มกลุ่มใหม่"}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${Y((t==null?void 0:t.name)??"")}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
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
    </div>`,document.body.appendChild(m);const w=$t({wrap:m.querySelector("#rg-leader-wrap"),teachers:d,value:(t==null?void 0:t.leader_id)??null});m.querySelector("#rg-modal-close").onclick=()=>m.remove(),m.querySelector("#rg-cancel").onclick=()=>m.remove(),m.querySelector("#rg-save").onclick=async()=>{const a=m.querySelector("#rg-name").value.trim();if(!a){B("กรุณาระบุชื่อกลุ่ม","error");return}const f=w.getValue(),p=(t==null?void 0:t.leader_id)??null,e=m.querySelector("#rg-save");e.disabled=!0,e.textContent="กำลังบันทึก...";try{o?(await Sn(t.id,{name:a,leader_id:f}),p&&p!==+f&&await bt(p,null,"religion_subgroup_head")):await Ln({name:a,leader_id:f}),f&&await bt(+f,"religion_subgroup_head"),B(o?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),m.remove(),n()}catch(l){B("บันทึกไม่สำเร็จ: "+l.message,"error"),e.disabled=!1,e.textContent="บันทึก"}}}async function no(t){re("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",ne(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let s=[],n=[];try{[s,n]=await Promise.all([Ae(),me()])}catch{B("โหลดข้อมูลไม่สำเร็จ","error");return}const o=s.find(w=>w.leader_id===t.id),m=document.getElementById("mrg-content");if(!o){m.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const d=ao(n);await Oa(o,d)}async function Oa(t,s){const n=document.getElementById("mrg-content");let o=[];try{o=await In(t.id)}catch{B("โหลดสมาชิกไม่สำเร็จ","error");return}n.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${Y(t.name)}</h3>
        <p class="text-xs text-gray-400 mt-0.5">สมาชิกในกลุ่ม ${o.length} คน</p>
      </div>
      <button id="btn-mrg-add" class="btn-primary px-4 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มสมาชิก
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${o.length?`
        <ul class="divide-y divide-gray-50">
          ${o.map(m=>{var w;const d=m.teachers;return`
            <li class="px-5 py-3 flex items-center gap-3">
              ${d!=null&&d.image_url?`<img src="${d.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${Y(((w=d==null?void 0:d.full_name)==null?void 0:w.charAt(0))??"?")}</div>`}
              <div>
                <span class="font-medium text-gray-800">${Y((d==null?void 0:d.full_name)??"")}</span>
                ${d!=null&&d.teacher_code?`<span class="block text-xs font-mono text-gray-400">${d.teacher_code}</span>`:""}
              </div>
            </li>`}).join("")}
        </ul>`:`
        <div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">👥</p>
          <p class="font-medium">ยังไม่มีสมาชิกในกลุ่ม</p>
          <p class="text-xs mt-1">กดปุ่ม "เพิ่มสมาชิก" เพื่อเริ่มต้น</p>
        </div>`}
    </div>`,document.getElementById("btn-mrg-add").onclick=()=>so(t,s,o,async()=>{await Oa(t,s)})}function so(t,s,n,o){const m=document.createElement("div");m.className="fixed inset-0 z-[9000] bg-white flex flex-col",m.innerHTML=`
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${Y(t.name)}"</h3>
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
    </div>`,document.body.appendChild(m);const d=_t({wrap:m.querySelector("#mrg-member-wrap"),chipsWrap:m.querySelector("#mrg-chips"),teachers:s,value:n.map(w=>w.teacher_id)});m.querySelector("#mrg-modal-close").onclick=()=>m.remove(),m.querySelector("#mrg-cancel").onclick=()=>m.remove(),m.querySelector("#mrg-save").onclick=async()=>{const w=d.getValue(),a=m.querySelector("#mrg-save");a.disabled=!0,a.textContent="กำลังบันทึก...";try{await An(t.id,w),m.remove(),await o(),ro(t,s.filter(f=>w.includes(f.id)))}catch(f){B("บันทึกไม่สำเร็จ: "+f.message,"error"),a.disabled=!1,a.textContent="บันทึก"}}}function ro(t,s){const n=document.createElement("div");n.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${Y(t.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${s.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${s.length?`<ul class="divide-y divide-gray-50">
          ${s.map(o=>{var m;return`<li class="py-2.5 flex items-center gap-3">
            ${o.image_url?`<img src="${o.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${Y(((m=o.full_name)==null?void 0:m.charAt(0))??"?")}</div>`}
            <div>
              <span class="font-medium text-gray-800">${Y(o.full_name??"")}</span>
              ${o.teacher_code?`<span class="block text-xs font-mono text-gray-400">${o.teacher_code}</span>`:""}
            </div>
          </li>`}).join("")}
        </ul>`:'<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>'}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#mrg-summary-close").onclick=()=>n.remove()}async function Fa(){re("subject-group-requests"),document.getElementById("page-title").textContent="คำขอย้ายกลุ่มวิชา";const t=d=>d?new Date(d).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—",s=d=>d==="sasana"?"🕌 ศาสนา":"📖 สามัญ",n={pending:{label:"🕐 รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธแล้ว",cls:"bg-red-100 text-red-600"}};ne(`
  <div class="max-w-3xl mx-auto animate-fade space-y-4">
    <p class="text-xs text-gray-400">คำขอจากนักเรียนที่เห็นว่าวิชาบางวิชาถูกจัดกลุ่มสามัญ/ศาสนาผิดหลักสูตร — อนุมัติแล้วจะมีผลเฉพาะห้องที่คุณเลือกเท่านั้น</p>
    <div class="flex items-center gap-2">
      <button id="sgr-tab-pending" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-tab="pending">รอตรวจสอบ</button>
      <button id="sgr-tab-all" class="sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-500" data-tab="all">ทั้งหมด</button>
    </div>
    <div id="sgr-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>
    </div>
  </div>`);let o="pending";const m=async()=>{document.getElementById("sgr-list").innerHTML='<div class="text-center py-12 text-gray-400"><div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p></div>';const d=o==="pending"?await Wt().catch(()=>[]):await ns().catch(()=>[]),w=document.getElementById("sgr-list");if(!d.length){w.innerHTML=`<div class="text-center py-16 text-gray-300"><p class="text-4xl mb-3">🔀</p><p class="text-sm">${o==="pending"?"ไม่มีคำขอรอตรวจสอบ":"ยังไม่มีคำขอ"}</p></div>`;return}w.innerHTML=d.map(a=>{var p,e;const f=n[a.status]??n.pending;return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="font-semibold text-sm text-gray-800 truncate">${he(a.subject_name??"—")} <span class="text-xs text-gray-400 font-mono">${he(a.subject_code??"")}</span></p>
            <p class="text-xs text-gray-500 mt-0.5">${he(((p=a.students)==null?void 0:p.full_name)??"—")} · ${he(((e=a.students)==null?void 0:e.student_code)??"")} · ${he(a.class_level??"")}</p>
            <p class="text-xs text-gray-500 mt-1">${s(a.current_group)} → ${s(a.requested_group)}</p>
            <p class="text-[11px] text-gray-400 mt-1">${t(a.created_at)}</p>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${f.cls}">${f.label}</span>
            ${a.status==="pending"?`<button class="sgr-review-btn text-xs font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50" data-id="${a.id}">ตรวจสอบ</button>`:""}
          </div>
        </div>
      </div>`}).join(""),w.querySelectorAll(".sgr-review-btn").forEach(a=>{a.addEventListener("click",()=>oo(d.find(f=>f.id===Number(a.dataset.id)),m))})};document.querySelectorAll(".sgr-tab").forEach(d=>{d.addEventListener("click",()=>{o=d.dataset.tab,document.querySelectorAll(".sgr-tab").forEach(w=>{w.className=`sgr-tab flex-1 py-2 rounded-xl text-sm font-semibold ${w.dataset.tab===o?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}`}),m()})}),await m()}function oo(t,s){var m;if(!t)return;const n=document.createElement("div");n.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">🔀 ตรวจสอบคำขอย้ายกลุ่มวิชา</h3>
        <p class="text-xs text-gray-500 mt-1">${he(((m=t.students)==null?void 0:m.full_name)??"—")} ขอย้าย "${he(t.subject_name??"")}" ${t.current_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"} → ${t.requested_group==="sasana"?"🕌 ศาสนา":"📖 สามัญ"}</p>
      </div>
      <div class="flex-1 overflow-y-auto px-5 py-4">
        <p class="text-xs text-gray-500 mb-2">เลือกห้องในระดับชั้น <b>${he(t.class_level??"")}</b> ที่จะให้มีผลจริง (ค่าเริ่มต้นเลือกทุกห้องที่สอนวิชารหัสเดียวกันไว้ให้แล้ว ปรับได้อิสระ):</p>
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
    </div>`,document.body.appendChild(n);const o=()=>n.remove();n.querySelector("#sgr-cancel").addEventListener("click",o),xs(t.id).then(d=>{const w=n.querySelector("#sgr-candidates");if(!d.length){w.innerHTML='<p class="text-center text-gray-400 text-sm py-4">ไม่พบห้องที่สอนวิชารหัสนี้ในระดับชั้นเดียวกัน</p>';return}w.innerHTML=d.map(a=>`
      <label class="flex items-center gap-2.5 border border-gray-100 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-50">
        <input type="checkbox" class="sgr-candidate-cb" value="${a.class_id}" checked />
        <span class="flex-1 text-sm text-gray-700">${he(a.class_name??"")}</span>
        <span class="text-[11px] text-gray-400">${a.student_count} คน · ${a.current_group==="sasana"?"🕌":"📖"}</span>
      </label>`).join("")}).catch(()=>{n.querySelector("#sgr-candidates").innerHTML='<p class="text-center text-red-400 text-sm py-4">โหลดรายชื่อห้องไม่สำเร็จ</p>'}),n.querySelector("#sgr-approve").addEventListener("click",async d=>{var a;const w=[...n.querySelectorAll(".sgr-candidate-cb:checked")].map(f=>Number(f.value));if(!w.length){B("เลือกอย่างน้อย 1 ห้อง","warning");return}if(confirm(`อนุมัติย้ายกลุ่มให้ ${w.length} ห้องที่เลือก?`)){d.target.disabled=!0,d.target.textContent="กำลังบันทึก...";try{await gs(t.id,w),B("อนุมัติแล้ว ✅","success"),(a=window._refreshSubjectGroupBadge)==null||a.call(window),o(),s()}catch(f){B("บันทึกไม่สำเร็จ: "+ae(f),"error"),d.target.disabled=!1,d.target.textContent="อนุมัติที่เลือก"}}}),n.querySelector("#sgr-reject").addEventListener("click",async d=>{var a;if(!confirm("ปฏิเสธคำขอนี้?"))return;const w=n.querySelector("#sgr-comment").value.trim();d.target.disabled=!0,d.target.textContent="กำลังบันทึก...";try{await bs(t.id,w),B("ปฏิเสธคำขอแล้ว","success"),(a=window._refreshSubjectGroupBadge)==null||a.call(window),o(),s()}catch(f){B("บันทึกไม่สำเร็จ: "+ae(f),"error"),d.target.disabled=!1,d.target.textContent="ปฏิเสธ"}})}async function za(){re("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",ne(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let t=[],s=[],n="manage",o="สามัญ",m="",d="",w="";const a=x=>{if(!x)return null;const y=x.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return y?y[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},f=x=>x?/^(PR|อก\.|อป\.)/i.test(x)?"ศาสนา":/^ปวช\./i.test(x)?"ปวช":"สามัญ":"สามัญ",p={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},e=x=>t.map(y=>y.class_name).filter(y=>y&&f(y)===x).sort((y,g)=>y.localeCompare(g,"th")),l=x=>{const y=e(x),g=[...new Set(y.map(u=>a(u)).filter(Boolean))],r=p[x]||[];return[...new Set([...r,...g])].sort((u,h)=>u.localeCompare(h,"th"))},c=async()=>{const[x,y,g]=await Promise.all([st(),Ne(),Cn()]);s=y,t=[...new Set(x.map(u=>u.class_name).filter(Boolean))].map(u=>g.find(C=>C.class_name===u)||{class_name:u,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},i=x=>s.find(y=>y.id===x),v=()=>{let x=document.getElementById("hc-print-roster-styles");x||(x=document.createElement("style"),x.id="hc-print-roster-styles",document.head.appendChild(x)),x.textContent=`
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
    `;const y=document.createElement("div");y.id="hc-print-roster-area",document.body.appendChild(y);const g=t.filter(h=>!(f(h.class_name)!==o||m&&a(h.class_name)!==m||d&&h.class_name!==d)).sort((h,C)=>h.class_name.localeCompare(C.class_name,"th"));let r="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";m&&(r+=` ระดับชั้น ${m}`),d&&(r+=` ห้อง ${d}`);const u=g.map((h,C)=>{const M=i(h.head_student_id),E=i(h.vice_head_student_id),j=M!=null&&M.image_url?`<img src="${M.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',R=E!=null&&E.image_url?`<img src="${E.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',N=M?`<b>${Y(M.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${M.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',O=E?`<b>${Y(E.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${E.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${C+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${Y(h.class_name)}</td>
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
          <td style="font-size: 11px; color: #374151;">${Y(h.notes??"")}</td>
        </tr>
      `}).join("");y.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${r}</div>
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
    `,y.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},y.querySelector("#pr-btn-close-preview").onclick=()=>{y.remove()}},I=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${n==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${n==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,T=()=>{const x=w.trim().toLowerCase(),y=t.filter(g=>!(f(g.class_name)!==o||x&&!g.class_name.toLowerCase().includes(x))).sort((g,r)=>g.class_name.localeCompare(r.class_name,"th"));return y.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':y.map(g=>{const r=i(g.head_student_id),u=i(g.vice_head_student_id),h=r!=null&&r.image_url?`<img src="${r.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',C=u!=null&&u.image_url?`<img src="${u.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${Y(g.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${o}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${h}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${r?Y(r.full_name):"— ยังไม่ระบุ —"}</span>
                  ${r?`<span class="text-xs text-gray-400 font-mono">รหัส: ${r.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${C}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${u?Y(u.full_name):"— ยังไม่ระบุ —"}</span>
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
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${Y(g.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},b=()=>{const x=t.filter(y=>!(f(y.class_name)!==o||m&&a(y.class_name)!==m||d&&y.class_name!==d)).sort((y,g)=>y.class_name.localeCompare(g.class_name,"th"));return x.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':x.map((y,g)=>{const r=i(y.head_student_id),u=i(y.vice_head_student_id),h=r!=null&&r.image_url?`<img src="${r.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',C=u!=null&&u.image_url?`<img src="${u.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${g+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${Y(y.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${h}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${r?Y(r.full_name):"— ยังไม่ระบุ —"}</p>
                ${r?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${r.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${C}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${u?Y(u.full_name):"— ยังไม่ระบุ —"}</p>
                ${u?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${u.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${Y(y.notes??"")}
          </td>
        </tr>
      `}).join("")},_=()=>{const x=t.filter(y=>!(f(y.class_name)!==o||m&&a(y.class_name)!==m||d&&y.class_name!==d)).length;n==="manage"?ne(`
        <div class="space-y-5 animate-fade">
          ${I()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${o==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${o==="ศาสนา"?"selected":""}>ศาสนา</option>
                <option value="ปวช" ${o==="ปวช"?"selected":""}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${Y(w)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${x}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${T()}
          </div>
        </div>
      `):(ne(`
        <div class="space-y-5 animate-fade">
          ${I()}

          <!-- Printing filters (Aligned with QR screen) -->
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">1. ระบบหลักสูตร</label>
                <select id="pr-filter-category" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value="สามัญ" ${o==="สามัญ"?"selected":""}>สามัญ</option>
                  <option value="ศาสนา" ${o==="ศาสนา"?"selected":""}>ศาสนา</option>
                  <option value="ปวช" ${o==="ปวช"?"selected":""}>ปวช</option>
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
              <span class="text-xs text-gray-400">พบข้อมูลหัวหน้า/รองหัวหน้าทั้งหมด <b class="text-gray-700">${x}</b> ห้อง</span>
              <div class="flex gap-2">
                <button id="btn-cert-settings"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shadow-sm">
                  ⚙️ ตั้งค่าแสดงเกียรติบัตร
                </button>
                <button id="btn-print-leaders-roster"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  ${x===0?"disabled":""}>
                  🖨️ พิมพ์ใบรายชื่อ (${x})
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
      `),q()),L()},q=()=>{const x=document.getElementById("pr-filter-level");if(!x)return;const y=l(o);x.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${y.map(g=>`<option value="${g}" ${g===m?"selected":""}>${g}</option>`).join("")}
    `,A()},A=()=>{const x=document.getElementById("pr-filter-class");if(!x)return;const g=e(o).filter(r=>m?a(r)===m:!0);x.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${g.length} ห้อง) --</option>
      ${g.map(r=>`<option value="${r}" ${r===d?"selected":""}>ห้อง ${r}</option>`).join("")}
    `},L=()=>{var x,y,g,r,u,h,C,M,E;(x=document.getElementById("tab-manage"))==null||x.addEventListener("click",()=>{n="manage",_()}),(y=document.getElementById("tab-print"))==null||y.addEventListener("click",()=>{n="print",_()}),(g=document.getElementById("hc-filter-category"))==null||g.addEventListener("change",j=>{o=j.target.value,_()}),(r=document.getElementById("hc-search-classes"))==null||r.addEventListener("input",j=>{w=j.target.value;const R=document.getElementById("hc-cards-grid");R&&(R.innerHTML=T()),k()}),k(),(u=document.getElementById("pr-filter-category"))==null||u.addEventListener("change",j=>{o=j.target.value,m="",d="",q(),S()}),(h=document.getElementById("pr-filter-level"))==null||h.addEventListener("change",j=>{m=j.target.value,d="",A(),S()}),(C=document.getElementById("pr-filter-class"))==null||C.addEventListener("change",j=>{d=j.target.value,S()}),(M=document.getElementById("btn-print-leaders-roster"))==null||M.addEventListener("click",v),(E=document.getElementById("btn-cert-settings"))==null||E.addEventListener("click",H)},S=()=>{const x=document.getElementById("pr-table-body");x&&(x.innerHTML=b());const y=t.filter(r=>!(f(r.class_name)!==o||m&&a(r.class_name)!==m||d&&r.class_name!==d)).length,g=document.getElementById("btn-print-leaders-roster");g&&(g.disabled=y===0,g.textContent=`🖨️ พิมพ์ใบรายชื่อ (${y})`)},k=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.room,g=t.find(r=>r.class_name===y);g&&$(g)})})},H=()=>{const x=document.createElement("div");x.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const y=t.some(C=>C.show_cert);x.innerHTML=`
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
    `,document.body.appendChild(x);const g=x.querySelector("#csm-global-toggle"),r=x.querySelector("#csm-status-text"),u=C=>{r.textContent=C?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};u(y),g.addEventListener("change",async()=>{const C=g.checked;g.disabled=!0,r.textContent="กำลังบันทึก...";try{await Dn(C),t.forEach(M=>{M.show_cert=C}),u(C),B(C?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(M){B("บันทึกผิดพลาด: "+M.message,"error"),g.checked=!C,u(!C)}finally{g.disabled=!1}});const h=()=>x.remove();x.querySelector("#csm-modal-close").onclick=h,x.querySelector("#csm-btn-close").onclick=h},$=x=>{const y=document.createElement("div");y.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let g=i(x.head_student_id),r=i(x.vice_head_student_id);y.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขหัวหน้าและรองหัวหน้าห้อง</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">ห้องเรียน ${x.class_name}</p>
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
                  <p class="font-bold text-gray-800">${Y(g.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${g.student_code} · ห้อง ${g.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Head Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-head-cert-in" placeholder="https://..." value="${x.head_cert_url??""}"
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
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(r==null?void 0:r.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${r?`
                ${r.image_url?`<img src="${r.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${Y(r.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${r.student_code} · ห้อง ${r.main_room||"—"}</p>
                </div>
              `:'<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>'}
            </div>
            
            <!-- Vice Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-vice-cert-in" placeholder="https://..." value="${x.vice_head_cert_url??""}"
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
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">${x.notes??""}</textarea>
            </div>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end shrink-0">
          <button id="ld-btn-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
          <button id="ld-btn-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">บันทึกข้อมูล</button>
        </div>
      </div>
    `,document.body.appendChild(y);let u=x.head_student_id,h=x.vice_head_student_id;const C=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},M=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},E=O=>{const J=document.getElementById("ld-head-card");if(O){u=O.id;const W=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';J.innerHTML=`
          ${W}
          <div>
            <p class="font-bold text-gray-800">${Y(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else u=null,J.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},j=O=>{const J=document.getElementById("ld-vice-card");if(O){h=O.id;const W=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';J.innerHTML=`
          ${W}
          <div>
            <p class="font-bold text-gray-800">${Y(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else h=null,J.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async O=>{const J=O.target.value.trim();if(J.length===5){C();const W=await At(J).catch(()=>null);E(W)}else J.length===0&&(u=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async O=>{const J=O.target.value.trim();if(J.length===5){M();const W=await At(J).catch(()=>null);j(W)}else J.length===0&&(h=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const R=async(O,J)=>{const W=O.files[0];if(W){J.disabled=!0,J.value="กำลังอัปโหลดไฟล์...";try{const P=W.name.split(".").pop(),V=`certificates/${x.id}/${O.id}-${Date.now()}.${P}`;let K=W;W.type.startsWith("image/")&&(K=await As(W,{maxWidth:1600,quality:.88}));const{error:D}=await le.storage.from("system-assets").upload(V,K,{upsert:!0,contentType:W.type});if(D)throw D;const{data:z}=le.storage.from("system-assets").getPublicUrl(V);J.value=z.publicUrl}catch(P){B("อัปโหลดล้มเหลว: "+P.message,"error"),J.value=""}finally{J.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const N=()=>y.remove();document.getElementById("ld-modal-close").onclick=N,document.getElementById("ld-btn-cancel").onclick=N,document.getElementById("ld-btn-save").onclick=async()=>{const O=document.getElementById("ld-btn-save");O.disabled=!0,O.textContent="กำลังบันทึก...";const J=document.getElementById("ld-head-cert-in").value.trim(),W=document.getElementById("ld-vice-cert-in").value.trim(),P=document.getElementById("ld-notes-in").value.trim();try{await zn(x.class_name,u,h,J,W,P),x.head_student_id=u,x.vice_head_student_id=h,x.head_cert_url=J,x.vice_head_cert_url=W,x.notes=P,B("บันทึกข้อมูลเรียบร้อยแล้ว","success"),N(),_()}catch(V){B("เกิดข้อผิดพลาด: "+V.message,"error"),O.disabled=!1,O.textContent="บันทึกข้อมูล"}}};await c(),_()}const So=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:_a,renderAnnouncements:Ta,renderAutoscaleHistory:ja,renderClasses:Lt,renderClassroomLeaders:za,renderClassroomsAdmin:ka,renderCouncilRepNominationSummary:Ma,renderCurriculum:He,renderDepartments:ma,renderDeptTable:rt,renderDonations:Da,renderFeedbackAdmin:Ha,renderHolidays:ba,renderHomeroom:xa,renderHouseColors:qa,renderImport:ya,renderLifeSkillAdmin:ha,renderMyReligionGroup:no,renderOverview:wt,renderPayments:fa,renderPeriods:ot,renderPrayerAdmin:wa,renderReadingAdmin:va,renderRegisteredTeachers:tt,renderReligionGroups:Pa,renderRolePermissions:Aa,renderScoreColConfig:ga,renderSettings:ua,renderStudents:pa,renderSubjectGroupRequests:Fa,renderSubjectTable:It,renderSubjects:Pe,renderSupervisorAnnouncements:eo,renderTeacherTable:Ge,renderTeachers:ca,renderUsageStats:$a,renderWorkCalendar:Ra,renderWorkCalendarView:to},Symbol.toStringTag,{value:"Module"}));export{Ma as A,za as B,Fa as C,Ha as D,Da as E,gr as F,qa as G,Aa as H,Ra as I,ra as J,ja as K,Ta as L,So as M,Pa as a,ka as b,$a as c,_a as d,ya as e,ua as f,wa as g,va as h,ha as i,fa as j,ba as k,tt as l,ga as m,xa as n,ot as o,He as p,ma as q,Pe as r,pa as s,Lt as t,ca as u,cr as v,wt as w,Ge as x,It as y,rt as z};
