const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/tutorial-FuIPnEx0.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/ui-Dh03k4iX.js","assets/teacher-views-donor-chat-xe-Dhac5.js","assets/storage-D6nkcVz6.js","assets/teacher-SRnLzIgv.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sports-portals.js_v_10.22-BrIjazIR.js","assets/impersonation-C66q0Y-O.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-qsIWmalF.js","assets/wen-sso-CcN06Rhh.js","assets/azfutsal-modal-wts4xj80.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-C8s-TuM0.js","assets/teacher-views-classes-s_CI5F_w.js","assets/pp5-doc-CVTwqJKw.js","assets/teacher-views-grades-DyBe1K7u.js","assets/score-qr-scanner-SDrghEsT.js","assets/teacher-views-attendance-C31WiJPz.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-certificates-jK9ebQ-w.js","assets/certificate-engine-Ciw2pKHx.js","assets/certificate-editor-CGT2GcIB.js","assets/student-views-DJMSwDcA.js","assets/student-api-q3ZleCC5.js","assets/quiz-api-DaBneRGn.js"])))=>i.map(i=>d[i]);
import{_ as ne,c as kt,s as Rt,a as T,b as Me,g as bt,h as Pt,j as yt}from"./ui-Dh03k4iX.js";import{getExecClassOverview as Ba,getDepartments as Le,getSystemConfig as ce,getTeachers as ue,getLeavePermissionDashboard as Ta,getAllAppFeedback as Nt,getAllPaymentRequests as _e,deleteTeacher as ja,getMasterSubjects as Ze,deleteSubject as Aa,deleteDepartment as qa,deletePeriod as Ma,updateTeacher as Da,createTeacher as Ha,updateDepartment as Ra,createDepartment as Pa,upsertPeriod as Na,upsertHoliday as Oa,deleteHoliday as za,getPeriods as Fa,getCurriculumStandards as Va,updateCurriculumStandard as Ua,createCurriculumStandard as Ga,importCurriculumStandards as Wa,deleteCurriculumStandard as Ya,getClasses as et,createSubject as Ka,updateSystemConfig as se,deleteClass as Ot,getUniqueRooms as Qa,getUniqueReligionRooms as zt,deleteHomeroomTeacher as Ja,getHomeroomTeachers as Et,getStudents as He,deleteStudent as Xa,updateStudent as Za,getClassrooms as St,getScoreColumnConfig as en,upsertScoreColumnConfig as tn,getReligionGroups as Be,getSchoolHolidaysFull as an,updateClassroom as nn,createClassroom as sn,getLifeSkillColumns as rn,getReadingScoreColumns as on,getHouseGroups as ln,updateTeacherPosition as pt,deleteReligionGroup as dn,updateReligionGroup as cn,createReligionGroup as pn,getReligionGroupMembers as un,getClassroomLeaders as mn,deleteClassroom as gn,fillLifeSkillScoresToClassScores as xn,fillPrayerScoresToReligionClassScores as bn,assignStudentsHouseColor as Lt,setReligionGroupMembers as yn,getAllReadingScores as fn,deleteReadingScoreColumn as hn,updateAllClassroomCertsToggle as vn,getAllLifeSkillScores as wn,deleteLifeSkillColumn as _n,updateReadingScoreColumn as $n,createReadingScoreColumn as kn,getStudentsByReligionRoom as En,getPrayerRecordsByRoom as Sn,getStudentByCode as It,updateClassroomLeaders as Ln,updateLifeSkillColumn as In,createLifeSkillColumn as Cn,autoEnrollStudentsByRoom as Bn,getTeachersWithPositions as Tn,startNewSemester as jn,getScheduleTeacherIds as An,mergeTeacherAccounts as qn,unlinkTeacherAccount as Mn,getStats as Dn,getRolePermissions as Hn,saveRolePermission as Rn,getUsageStats as Pn,reviewPaymentRequest as Ue,approveTeacherQuota as nt,setFeedbackRead as Nn,setFeedbackCategory as On,deleteAppFeedback as zn,advisorResetStudentPassword as Fn,markStudentPasswordResetNotice as Vn,setFeedbackStatusReply as Ct,updateAnnouncement as st,createAnnouncement as rt,getAllAnnouncements as Un,getAnnouncementCommentsBulk as Gn,deleteAnnouncement as Wn,getPaymentSlipViewUrl as Yn,getPrayerMonitoringData as Kn,getLifeSkillMonitoringData as Qn,getReadingMonitoringData as Jn,getAnnouncementComments as Xn,deleteAnnouncementComment as Zn,assignHomeroomTeacher as Ft,savePrayerCellAdmin as es}from"./api-1xsyVspL.js";import{r as ts}from"./leave-monitor.js_v_10.18-Dz2vtIpz.js";import{s as le}from"./supabase-BV-W2lsh.js";import{r as as,a as ns,b as ss,c as rs,d as os,e as ls,D as ot,h as Bt,i as lt,j as ds,S as Tt,s as is,C as cs,k as ps}from"./sports-portals.js_v_10.22-BrIjazIR.js";import{u as us,a as jt,p as Vt,c as ms,q as gs,j as xs,o as bs}from"./storage-D6nkcVz6.js";import{_dateInputValue as ys,applyReadingGradesFromConfig as At,_readingGrade as Ut,READING_GRADES as Ae,_htmlEsc as We}from"./teacher-views-utils-B2Iz3UWp.js";import{r as fs}from"./teacher-views-grades-DyBe1K7u.js";import{r as hs,a as vs,b as ws,c as Gt}from"./teacher-views-classes-s_CI5F_w.js";import{renderCourseForm as _s}from"./teacher-views-BzTMalao.js";import"./browser-JP79f-a9.js";import{i as $s,a as ks,p as Es,b as Ss}from"./import-D0GLDW1_.js";import{a as Wt}from"./theme-DIdoXkqD.js";import{f as Ls}from"./leave-time-CrS9gT63.js";import{b as Is}from"./anti-pull-refresh-BGrI1pMY.js";import{o as Cs}from"./impersonation-C66q0Y-O.js";import{A as Bs,o as Ts}from"./azfutsal-modal-wts4xj80.js";const ie=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function js(t){document.querySelectorAll("[data-nav]").forEach(r=>{const s=r.dataset.nav===t;r.classList.toggle("bg-indigo-800",s),r.classList.toggle("text-white",s),r.classList.toggle("text-indigo-200",!s)})}function dt(t){document.getElementById("main-content").innerHTML=t}const Yt={green:"ปกติ",yellow:"เริ่มช้า",red:"ต้องตามงาน",gray:"ยังไม่เริ่ม"},As={green:"bg-emerald-100 text-emerald-700",yellow:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-600",gray:"bg-gray-100 text-gray-400"},qs={doc:"📋",dates:"📅",att:"✅",score:"📝"},Ms={doc:"ปก ปพ.5",dates:"วันที่สอน",att:"เช็คชื่อ",score:"บันทึกคะแนน"};function Oe(t,r,s,o="w-8 h-8 text-base"){return`<span class="inline-flex items-center justify-center ${o} rounded-lg ${As[s]}" title="${r}">${t}</span>`}function Ee(t,r,s="w-8 h-8 text-base"){return Oe(qs[t],`${Ms[t]}: ${Yt[r]}`,r,s)}const Ds={doc:"สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว",dates:"สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว",att:"สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา",score:"สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%"};function Hs(t){return["AGM","AGMVOC"].includes(t)?"ศาสนา":t==="ACDMVOC"?"สามัญปวช":"สามัญ"}function Rs(t,r){const s=Hs(t.subject_group);return r.find(o=>o.dept_code===t.dept&&o.category===s)??r.find(o=>o.dept_code===t.dept)??r.find(o=>o.dept_name===t.dept)??null}function Ps(t,r){return t.dept?r.find(s=>s.dept_code===t.dept&&s.category===t.category)??r.find(s=>s.dept_code===t.dept)??null:null}function Ns(t,r){return Math.round((new Date(t)-new Date(r))/864e5)}function Os(t,r){const s=t.has_doc_rows?"green":"red",o=t.has_teaching_dates?"green":"red";let m;if(!t.has_teaching_dates||t.day1_date&&t.day1_date>r)m="gray";else if(!t.last_check_date)m="red";else{const w=Ns(r,t.last_check_date);m=w<=7?"green":w<=14?"yellow":"red"}let y;if(!t.score_col_count)y="gray";else{const w=t.student_count*t.score_col_count,a=w>0?t.score_filled_count/w:0;y=a>=.8?"green":a>0?"yellow":"red"}return{doc:s,dates:o,att:m,score:y}}function Pe(t){const r=t.filter(s=>s!=="gray");return r.length===0?"gray":r.includes("red")?"red":r.includes("yellow")?"yellow":"green"}function it(t){return Object.values(t).some(r=>r==="red"||r==="yellow")}async function zs(){var U,Y;js("exec-overview"),document.getElementById("page-title").textContent="ภาพรวมผู้บริหาร",dt(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`);let t,r,s,o,m;try{[t,r,s,o,m]=await Promise.all([Ba(),Le(),ce().catch(()=>({})),ue(),Ta(60).catch(()=>null)])}catch(M){dt(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${ie(M.message??"")}</p>
    </div>`);return}const y=s.academicYear??s.academic_year??"",w=s.semester??"",a=new Date().toISOString().slice(0,10),v=t.filter(M=>M.subject_id!=null).map(M=>{const F=Rs(M,r);return{...M,deptKey:(F==null?void 0:F.id)!=null?`d${F.id}`:`u_${M.dept??"-"}`,deptName:(F==null?void 0:F.dept_name)??M.dept??"ไม่ระบุกลุ่มสาระ",status:Os(M,a)}}),b=new Map;for(const M of v)b.has(M.deptKey)||b.set(M.deptKey,{deptName:M.deptName,rows:[]}),b.get(M.deptKey).rows.push(M);const e=[...b.entries()].map(([M,F])=>({key:M,...F})).sort((M,F)=>M.deptName.localeCompare(F.deptName,"th")),l=new Map;for(const M of v)M.teacher_id!=null&&(l.has(M.teacher_id)||l.set(M.teacher_id,[]),l.get(M.teacher_id).push(M));const u=o.filter(M=>M.staff_type==="ครู").map(M=>{const F=l.get(M.id)??[],z=M.profile_id!=null,V=F.length,K=V>0?Pe(F.map(te=>te.status.att)):"gray";let X;if(F[0])X={key:F[0].deptKey,name:F[0].deptName};else{const te=Ps(M,r);X=te?{key:`d${te.id}`,name:te.dept_name}:{key:null,name:"ไม่ระบุกลุ่มสาระ"}}let G;return z?V===0?G=2:K==="red"?G=1.5:K==="yellow"?G=1:G=0:G=3,{teacherId:M.id,teacherName:M.full_name,deptKey:X.key,deptName:X.name,registered:z,classCount:V,attWorst:K,severity:G}}).sort((M,F)=>F.severity-M.severity||M.teacherName.localeCompare(F.teacherName,"th")),d=u.filter(M=>!M.registered).length,f=u.filter(M=>M.registered&&M.classCount===0).length,B=u.filter(M=>M.registered&&M.classCount>0&&(M.attWorst==="red"||M.attWorst==="yellow")).length,C=u.filter(M=>M.severity>0).length;function h(M){const F=v.filter(X=>X.status[M]!=="gray"),z=F.filter(X=>X.status[M]==="green").length,V=v.length-F.length;return{pct:F.length>0?Math.round(z/F.length*100):null,green:z,total:F.length,grayCount:V}}const _={doc:h("doc"),dates:h("dates"),att:h("att"),score:h("score")},D=u.length,A=u.filter(M=>M.registered).length,E=u.filter(M=>M.registered&&M.classCount>0).length,L=u.filter(M=>M.registered&&M.classCount>0&&M.attWorst==="green").length,$={registered:{pct:D>0?Math.round(A/D*100):null,num:A,total:D},courses:{pct:A>0?Math.round(E/A*100):null,num:E,total:A},attendance:{pct:E>0?Math.round(L/E*100):null,num:L,total:E}},S=v.filter(M=>it(M.status)).length,q=v.length>0?Math.round(S/v.length*100):0;function i(){if(!m)return"";const M=m.rows||[],F=m.summary||{active:0,overdue:0,returnedToday:0,totalWeek:0},z=new Date,V=X=>X.status!=="active"?X.status==="returned"?"กลับแล้ว":"เลยเวลา":Ls(X.created_at,X.allowed_duration,z).text,K=M.filter(X=>X.status==="active").slice(0,8);return`
      <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden mb-6">
        <div class="px-5 py-3.5 border-b border-amber-100 bg-amber-50 flex items-center justify-between gap-3">
          <div>
            <h4 class="font-bold text-amber-900 text-sm">🚪 สถานะใบอนุญาตออกนอกห้อง</h4>
            <p class="text-xs text-amber-700/70 mt-0.5">ข้อมูลสัปดาห์ปัจจุบัน</p>
          </div>
          <span class="text-xs text-amber-700 font-bold">รวม ${F.totalWeek} ครั้ง</span>
        </div>
        <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div class="rounded-xl bg-amber-50 border border-amber-100 px-3 py-2">
            <p class="text-[10px] font-bold text-amber-700/70">กำลังอยู่นอกห้อง</p>
            <p class="text-xl font-extrabold text-amber-700">${F.active}</p>
          </div>
          <div class="rounded-xl bg-red-50 border border-red-100 px-3 py-2">
            <p class="text-[10px] font-bold text-red-700/70">เลยเวลา</p>
            <p class="text-xl font-extrabold text-red-700">${F.overdue}</p>
          </div>
          <div class="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2">
            <p class="text-[10px] font-bold text-emerald-700/70">กลับแล้ววันนี้</p>
            <p class="text-xl font-extrabold text-emerald-700">${F.returnedToday}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2">
            <p class="text-[10px] font-bold text-indigo-700/70">สัปดาห์นี้</p>
            <p class="text-xl font-extrabold text-indigo-700">${F.totalWeek}</p>
          </div>
        </div>
        ${K.length?`
          <div class="border-t border-gray-50 divide-y divide-gray-50">
            ${K.map(X=>{var G,te,ee,oe;return`
              <div class="px-5 py-3 flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${ie(((G=X.students)==null?void 0:G.full_name)||"—")}</p>
                  <p class="text-xs text-gray-400 truncate">${ie(((te=X.classes)==null?void 0:te.class_name)||((ee=X.students)==null?void 0:ee.main_room)||"—")} · ${ie(X.reason||"—")} · ${ie(((oe=X.teachers)==null?void 0:oe.full_name)||"—")}</p>
                </div>
                <span class="flex-shrink-0 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">${V(X)}</span>
              </div>
            `}).join("")}
          </div>
        `:'<div class="border-t border-gray-50 px-5 py-5 text-center text-sm text-gray-400">ตอนนี้ไม่มีนักเรียนอยู่นอกห้อง</div>'}
      </div>
    `}let g=null,p="attention",n="",c=null;const x={unregistered:"🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน","no-courses":"📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน","att-behind":"✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน"};function j(){return e.map(M=>{const F={doc:Pe(M.rows.map(K=>K.status.doc)),dates:Pe(M.rows.map(K=>K.status.dates)),att:Pe(M.rows.map(K=>K.status.att)),score:Pe(M.rows.map(K=>K.status.score))},z=M.rows.filter(K=>it(K.status)).length,V=g===M.key;return`
        <button type="button" data-dept-key="${M.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${V?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-100"}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${ie(M.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${M.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${Ee("doc",F.doc)}
            ${Ee("dates",F.dates)}
            ${Ee("att",F.att)}
            ${Ee("score",F.score)}
          </div>
          <p class="text-xs ${z>0?"text-amber-600 font-semibold":"text-emerald-600"}">
            ${z>0?`⚠️ ${z} ห้องต้องตามงาน`:"✅ ปกติทั้งหมด"}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${V?"🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายละเอียด ▸"}</p>
        </button>`}).join("")}function H(){var V;const M=g?(V=e.find(K=>K.key===g))==null?void 0:V.deptName:null,F=p==="all"?"ห้องเรียนทั้งหมด":"ห้องที่ต้องตามงาน";return`
      <div>
        <h4 class="font-bold text-gray-700">📋 ${M?`${F} · ${ie(M)}`:`${F} (ทั้งโรงเรียน)`}</h4>
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
                 ${p==="all"?"bg-indigo-50 text-indigo-600 border-indigo-200":"bg-white text-gray-500 border-gray-200 hover:border-gray-300"}">
          ${p==="all"?"👁️ ดูทั้งหมด":"⚠️ เฉพาะที่ต้องตามงาน"}
        </button>
        ${g?'<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>':""}
      </div>`}function k(){let M=v;return p==="attention"&&(M=M.filter(F=>it(F.status))),g&&(M=M.filter(F=>F.deptKey===g)),n&&(M=M.filter(F=>(F.class_name??"").toLowerCase().includes(n)||(F.subject_name??"").toLowerCase().includes(n)||(F.teacher_name??"").toLowerCase().includes(n))),M=[...M].sort((F,z)=>{const V=K=>Object.values(K).reduce((X,G)=>X+(G==="red"?2:G==="yellow"?1:0),0);return V(z.status)-V(F.status)}),M.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>':`
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
            ${M.map(F=>`
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${ie(F.class_name)}</p>
                  <p class="text-xs text-gray-400">${ie(F.subject_name??"")}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${ie(F.teacher_name??"-")}</td>
                <td class="px-4 py-2 text-gray-500">${ie(F.deptName)}</td>
                <td class="px-4 py-2 text-center">${Ee("doc",F.status.doc,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ee("att",F.status.att,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ee("score",F.status.score,"w-7 h-7 text-sm")}</td>
                <td class="px-4 py-2 text-center">${Ee("dates",F.status.dates,"w-7 h-7 text-sm")}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`}function I(){let M=u;c==="unregistered"?M=M.filter(V=>!V.registered):c==="no-courses"?M=M.filter(V=>V.registered&&V.classCount===0):c==="att-behind"?M=M.filter(V=>V.registered&&V.classCount>0&&(V.attWorst==="red"||V.attWorst==="yellow")):p==="attention"&&(M=M.filter(V=>V.severity>0)),g&&(M=M.filter(V=>V.deptKey===g)),n&&(M=M.filter(V=>(V.teacherName??"").toLowerCase().includes(n)));const F=c?`${x[c]} (${M.length} คน)`:p==="all"?`ครูผู้สอนทั้งหมด (${M.length}/${u.length} คน)`:`ครูที่ต้องติดตาม (${M.length} คน)`,z=M.length===0?'<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>':`<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
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
              ${M.map(V=>`
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${ie(V.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${ie(V.deptName)}</td>
                  <td class="px-4 py-2 text-center">${Oe("🔑",V.registered?"ลงทะเบียนใช้งานแล้ว":"ยังไม่ลงทะเบียนใช้งาน",V.registered?"green":"red","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${Oe("📚",V.classCount>0?`มีวิชา/ห้องที่สอน ${V.classCount} ห้อง`:V.registered?"ยังไม่เพิ่มวิชา/ห้องที่สอน":"ยังไม่ลงทะเบียน",V.classCount>0?"green":V.registered?"red":"gray","w-7 h-7 text-sm")}</td>
                  <td class="px-4 py-2 text-center">${V.classCount>0?Oe("✅",`เช็คชื่อ: ${Yt[V.attWorst]}`,V.attWorst,"w-7 h-7 text-sm"):Oe("✅","ยังไม่มีวิชา/ห้องที่สอน","gray","w-7 h-7 text-sm")}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`;return`
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${F}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${c?'<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>':""}
      </div>
      ${z}`}function R({icon:M,label:F,info:z,pct:V,numerator:K,denominator:X,unit:G="ห้อง",extraNote:te="",filterKey:ee=null,active:oe=!1}){const ge=V==null?"text-gray-400":V>=80?"text-emerald-700":V>=50?"text-amber-600":"text-red-600",ye=ee?"button":"div",Ie=ee?' type="button"':"",Fe=ee?` data-teacher-filter="${ee}"`:"";return`
      <${ye}${Ie}${Fe} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${ee?` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${oe?"border-indigo-400 ring-2 ring-indigo-100":""}`:""}" title="${ie(z)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${M}</div>
          <p class="text-sm font-semibold text-gray-600">${F} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${ge}">${V==null?"—":V+"%"}</p>
        <p class="text-xs text-gray-400 mt-1">${X>0?`${K}/${X} ${G}`:"ไม่มีข้อมูล"}${te}</p>
        ${ee?`<p class="text-[10px] text-indigo-400 mt-1">${oe?"🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก":"คลิกเพื่อดูรายชื่อ ▸"}</p>`:""}
      </${ye}>`}function N(M,F,z){const V=_[z];return R({icon:M,label:F,info:Ds[z],pct:V.pct,numerator:V.green,denominator:V.total,unit:"ห้อง",extraNote:V.grayCount>0?` <span class="text-gray-300">· ยังไม่เริ่ม ${V.grayCount}</span>`:""})}function O(M,F,z,V,K="",X=null){return R({icon:M,label:F,info:z,pct:V.pct,numerator:V.num,denominator:V.total,unit:"คน",extraNote:K,filterKey:X,active:c===X})}function Q(){return`
      ${O("🔑","ลงทะเบียนใช้งาน","สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)",$.registered,d>0?` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${d}</span>`:"","unregistered")}
      ${O("📚","สร้างตารางสอน/เพิ่มวิชา","สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)",$.courses,f>0?` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${f}</span>`:"","no-courses")}
      ${O("✅","เช็คชื่อเป็นปัจจุบัน","สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)",$.attendance,B>0?` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${B}</span>`:"","att-behind")}`}function W(){var M,F,z;document.querySelectorAll(".exec-dept-card").forEach(V=>{V.addEventListener("click",()=>{var X;const K=V.dataset.deptKey;g===K?(g=null,p="attention"):(g=K,p="all"),P(),(X=document.getElementById("exec-table-section"))==null||X.scrollIntoView({behavior:"smooth",block:"start"})})}),(M=document.getElementById("exec-clear-filter"))==null||M.addEventListener("click",()=>{g=null,p="attention",P()}),(F=document.getElementById("exec-toggle-scope"))==null||F.addEventListener("click",()=>{p=p==="all"?"attention":"all",P()}),document.querySelectorAll("[data-teacher-filter]").forEach(V=>{V.addEventListener("click",()=>{var X;const K=V.dataset.teacherFilter;c=c===K?null:K,g=null,n="",P(),(X=document.getElementById("exec-teacher-section"))==null||X.scrollIntoView({behavior:"smooth",block:"start"})})}),(z=document.getElementById("exec-teacher-clear-filter"))==null||z.addEventListener("click",()=>{c=null,P()})}function P(){document.getElementById("exec-teacher-kpi").innerHTML=Q(),document.getElementById("exec-dept-cards").innerHTML=j(),document.getElementById("exec-table-header").innerHTML=H(),document.getElementById("exec-class-table").innerHTML=k(),document.getElementById("exec-teacher-section").innerHTML=I();const M=document.getElementById("exec-dept-select");M&&(M.value=g??"");const F=document.getElementById("exec-search");F&&(F.value=n),W()}dt(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${y?`ปีการศึกษา ${ie(y)}`:""}${w?` ภาคเรียนที่ ${ie(w)}`:""}${y||w?" · ":""}ทั้งหมด ${v.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${S>0?"text-amber-700":"text-emerald-700"} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${S} ห้อง</b> (${q}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${C>0?`
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${C} คน</b> ที่ต้องติดตาม
        ${d>0?` · ยังไม่ลงทะเบียนใช้งาน <b>${d}</b> คน`:""}
        ${f>0?` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${f}</b> คน`:""}
        ${B>0?` · เช็คชื่อไม่เป็นปัจจุบัน <b>${B}</b> คน`:""}
      </p>`:`
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${Q()}
    </div>

    ${i()}

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
        ${e.map(M=>`<option value="${M.key}">${ie(M.deptName)}</option>`).join("")}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${H()}
      </div>
      <div id="exec-class-table">${k()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${I()}
    </div>
  </div>`),(U=document.getElementById("exec-search"))==null||U.addEventListener("input",M=>{n=M.target.value.trim().toLowerCase(),P()}),(Y=document.getElementById("exec-dept-select"))==null||Y.addEventListener("change",M=>{g=M.target.value||null,p=g?"all":"attention",P()}),W()}const Fs="10.22.663",Vs="regrade.html",Us=()=>{const t=new URL(Vs,window.location.href);return t.searchParams.set("v",Bs),t.href},Qe=(t,r)=>{t&&(t.textContent=r,clearTimeout(t._regradeStatusTimer),t._regradeStatusTimer=setTimeout(()=>{t.textContent=""},1800))},Gs=async(t,r)=>{try{await navigator.clipboard.writeText(t),Qe(r,"คัดลอกลิงก์แล้ว")}catch{Qe(r,"คัดลอกไม่สำเร็จ")}},Ws=async(t,r)=>{try{if(navigator.share){await navigator.share({title:"แก้ค้างเก่า",text:"ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์",url:t});return}await navigator.clipboard.writeText(t),Qe(r,"คัดลอกลิงก์แล้ว")}catch{Qe(r,"แชร์ไม่สำเร็จ")}};function Ys(){var w,a,v,b;(w=document.getElementById("regrade-modal"))==null||w.remove();const t=Us(),r=document.body.style.overflow;document.body.style.overflow="hidden";const s=document.createElement("div");s.id="regrade-modal",s.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col",s.innerHTML=`
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
  `;const o=()=>{document.removeEventListener("keydown",m),document.body.style.overflow=r,s.remove(),window.closeRegradeModal===o&&(window.closeRegradeModal=null)},m=e=>{e.key==="Escape"&&o()};document.addEventListener("keydown",m),document.body.appendChild(s),window.closeRegradeModal=o;const y=s.querySelector("[data-regrade-status]");(a=s.querySelector("[data-regrade-close]"))==null||a.addEventListener("click",o),(v=s.querySelector("[data-regrade-copy]"))==null||v.addEventListener("click",()=>Gs(t,y)),(b=s.querySelector("[data-regrade-share]"))==null||b.addEventListener("click",()=>Ws(t,y))}async function Ks(){Rt(!0);const{data:{session:t}}=await le.auth.getSession();if(!t)return window.location.replace("index.html"),null;const{data:r,error:s}=await le.from("profiles").select("role, is_also_admin").eq("id",t.user.id).maybeSingle();return s||(r==null?void 0:r.role)!=="admin"&&!(r!=null&&r.is_also_admin)?(T("หน้านี้สำหรับผู้ดูแลระบบเท่านั้น","warning"),setTimeout(()=>window.location.replace("teacher.html"),600),null):t}async function Qs(t){try{const{data:r}=await le.from("profiles").select("role, user_code").eq("id",t).maybeSingle();let s="ผู้ใช้งาน";if((r==null?void 0:r.role)==="teacher"||(r==null?void 0:r.role)==="admin"){const{data:m}=await le.from("teachers").select("full_name").eq("profile_id",t).maybeSingle();s=(m==null?void 0:m.full_name)??(r==null?void 0:r.user_code)??"ผู้ใช้งาน"}const o=(r==null?void 0:r.role)==="admin"?"ผู้ดูแลระบบ":"ครูผู้สอน";document.getElementById("user-name").textContent=s,document.getElementById("user-role").textContent=o,document.getElementById("user-avatar").textContent=s.charAt(0).toUpperCase()}catch{}}async function Js(t){const r=document.getElementById("header-switch-slot");if(!r)return;r.innerHTML="";const{data:s}=await le.from("profiles").select("is_also_admin").eq("id",t).maybeSingle();if(!(s!=null&&s.is_also_admin))return;const o=document.createElement("a");o.id="btn-switch-teacher",o.href="teacher.html",o.title="สลับไปหน้าครู",o.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1",o.innerHTML="<span>👨‍🏫</span><span>สลับเป็นครู</span>",r.appendChild(o)}async function Xs(){await le.auth.signOut(),T("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}async function Zs(t=null){var s,o,m;const r=document.getElementById("teacher-modal");document.getElementById("modal-id").value="",document.getElementById("modal-code").value="",document.getElementById("modal-name").value="",document.getElementById("modal-category").value="",document.getElementById("modal-phone").value="",document.getElementById("modal-login-email").value="",document.getElementById("modal-username").value="",document.getElementById("modal-image-url").value="",(s=window._clearPositionRows)==null||s.call(window),document.getElementById("modal-title").textContent=t?"แก้ไขข้อมูลครู":"เพิ่มครูใหม่";try{const{getDepartments:y}=await ne(async()=>{const{getDepartments:v}=await import("./api-1xsyVspL.js");return{getDepartments:v}},__vite__mapDeps([0,1])),w=await y(),a=document.getElementById("modal-position-dept");a.innerHTML='<option value="">— เลือกกลุ่มสาระ —</option>'+w.map(v=>`<option value="${v.id}">${v.dept_name}</option>`).join("")}catch{}if(t)try{const{data:y}=await(await ne(async()=>{const{supabase:a}=await import("./supabase-BV-W2lsh.js").then(v=>v.a);return{supabase:a}},[])).supabase.from("teachers").select("id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id").eq("id",t).single();document.getElementById("modal-id").value=y.id,document.getElementById("modal-code").value=y.teacher_code??"",document.getElementById("modal-name").value=y.full_name??"",document.getElementById("modal-category").value=y.category??"",document.getElementById("modal-phone").value=y.phone??"",document.getElementById("modal-login-email").value=y.login_email??"",document.getElementById("modal-username").value=y.username??"",document.getElementById("modal-image-url").value=y.image_url??"";const w=(o=y.positions)!=null&&o.length?y.positions:y.position?[y.position]:[];(m=window._setPositionRows)==null||m.call(window,w),w.includes("dept_head")&&(document.getElementById("modal-position-dept").value=y.position_dept_id??""),Kt(y.image_url,y.full_name)}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}r.classList.remove("hidden"),r.classList.add("flex"),document.getElementById("modal-name").focus()}function ut(){const t=document.getElementById("teacher-modal");t.classList.add("hidden"),t.classList.remove("flex")}async function er(t){var v,b,e;t.preventDefault();const r=document.getElementById("modal-save-btn"),s=document.getElementById("modal-id").value,o=document.getElementById("modal-username").value.trim().toLowerCase();if(o&&!/^[a-z0-9._-]{3,32}$/.test(o)){T("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning");return}const m=((v=window._getPositionValues)==null?void 0:v.call(window))??[],y=["religion_group_head","religion_subgroup_head","classroom_leaders_admin","regrade_executive","executive"],w=m.find(l=>!y.includes(l))||null,a={teacher_code:document.getElementById("modal-code").value.trim()||null,full_name:document.getElementById("modal-name").value.trim(),category:document.getElementById("modal-category").value||null,phone:document.getElementById("modal-phone").value.trim()||null,login_email:document.getElementById("modal-login-email").value.trim()||null,username:o||null,image_url:document.getElementById("modal-image-url").value.trim()||null,position:w,positions:m,position_dept_id:m.includes("dept_head")&&parseInt(document.getElementById("modal-position-dept").value)||null};if(!a.full_name){T("กรุณากรอกชื่อ-นามสกุล","warning");return}Me(r,!0);try{const l=(e=(b=document.getElementById("modal-photo-file"))==null?void 0:b.files)==null?void 0:e[0];if(l){const u=s||`new_${Date.now()}`;a.image_url=await us(u,l)}s?await Da(Number(s),a):await Ha(a),T("บันทึกข้อมูลสำเร็จ","success"),ut(),ze(await ue())}catch(l){T("บันทึกไม่สำเร็จ: "+(l.message??""),"error")}finally{Me(r,!1)}}async function tr(t,r){if(confirm(`ยืนยันการลบ "${r}" ออกจากระบบ?`))try{await ja(Number(t)),T(`ลบ "${r}" แล้ว`,"success"),ze(await ue())}catch{T("ลบไม่สำเร็จ กรุณาลองใหม่","error")}}function Kt(t,r){const s=document.getElementById("modal-avatar-preview");s&&(t?s.innerHTML=`<img src="${t}" class="w-full h-full object-cover" />`:s.innerHTML=(r??"?").charAt(0).toUpperCase())}async function ar(t=null){const r=document.getElementById("subject-modal");if(document.getElementById("subject-modal-title").textContent=t?"แก้ไขรายวิชา":"เพิ่มรายวิชา",["sub-id","sub-code","sub-name","sub-dept","sub-grade","sub-credit","sub-learning-area"].forEach(s=>{document.getElementById(s).value=""}),document.getElementById("sub-skill-group").value="",t)try{const o=(await Ze()).find(m=>m.id===t);o&&(document.getElementById("sub-id").value=o.id,document.getElementById("sub-code").value=o.subject_code??"",document.getElementById("sub-name").value=o.subject_name??"",document.getElementById("sub-dept").value=o.dept??"",document.getElementById("sub-grade").value=o.grade_level??"",document.getElementById("sub-credit").value=o.credit??"",document.getElementById("sub-learning-area").value=o.learning_area??"",document.getElementById("sub-skill-group").value=o.skill_group??"")}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}r.classList.replace("hidden","flex")}async function nr(t,r){if(confirm(`ยืนยันลบวิชา "${r}"?`))try{await Aa(Number(t)),T(`ลบ "${r}" แล้ว`,"success"),_t(await Ze())}catch{T("ลบไม่สำเร็จ","error")}}async function sr(t=null){const r=document.getElementById("dept-modal");["dept-id","dept-code","dept-name","dept-teacher-code","dept-photo-url","dept-sign-url","dept-category"].forEach(u=>{const d=document.getElementById(u);d&&(d.value="")}),document.getElementById("dept-photo-preview").innerHTML="👤",document.getElementById("dept-sign-preview").innerHTML="ลายเซ็น",document.getElementById("dept-teacher-search").value="",document.getElementById("dept-teacher-code-input").value="";const s=document.getElementById("dept-selected-teacher");s.classList.add("hidden"),s.classList.remove("flex"),document.getElementById("dept-modal-title").textContent=t?"แก้ไขกลุ่มสาระ":"เพิ่มกลุ่มสาระ";let o=[];try{o=await ue()}catch{}const m=document.getElementById("dept-teacher-code-input"),y=document.getElementById("dept-teacher-search"),w=document.getElementById("dept-teacher-dropdown"),a=document.getElementById("dept-selected-teacher"),v=document.getElementById("dept-selected-name"),b=document.getElementById("dept-clear-teacher"),e=u=>{document.getElementById("dept-teacher-code").value=u?u.teacher_code??"":"",u?(m.value=u.teacher_code??"",y.value=u.full_name??"",v.textContent=`${u.full_name}${u.teacher_code?` (${u.teacher_code})`:""}`,a.classList.remove("hidden"),a.classList.add("flex")):(m.value="",y.value="",a.classList.add("hidden"),a.classList.remove("flex")),w.classList.add("hidden")},l=u=>{w.innerHTML=u.length?u.map(d=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${d.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${d.teacher_code??""}</span>
            <span class="font-medium text-gray-800">${d.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>',w.querySelectorAll(".teacher-option").forEach(d=>{d.addEventListener("mousedown",f=>{f.preventDefault(),e(o.find(B=>String(B.id)===d.dataset.id))})}),w.classList.remove("hidden")};if(m.oninput=()=>{const u=m.value.trim().toLowerCase();if(!u){e(null);return}const d=o.find(f=>(f.teacher_code??"").toLowerCase()===u);if(d)e(d);else{const f=o.filter(B=>(B.teacher_code??"").toLowerCase().startsWith(u));f.length&&l(f)}},y.onfocus=()=>l(o),y.oninput=()=>{const u=y.value.toLowerCase();l(u?o.filter(d=>d.full_name.toLowerCase().includes(u)||(d.teacher_code??"").toLowerCase().includes(u)):o)},y.onblur=()=>setTimeout(()=>w.classList.add("hidden"),150),b==null||b.addEventListener("click",()=>e(null)),t)try{const d=(await Le()).find(f=>f.id===t);if(d){document.getElementById("dept-id").value=d.id,document.getElementById("dept-code").value=d.dept_code??"",document.getElementById("dept-name").value=d.dept_name??"",document.getElementById("dept-teacher-code").value=d.teacher_code??"",document.getElementById("dept-photo-url").value=d.head_photo_url??"",document.getElementById("dept-sign-url").value=d.head_sign_url??"";const f=document.getElementById("dept-category");if(f&&(f.value=d.category??""),d.teacher_code){const B=o.find(C=>C.teacher_code===d.teacher_code);B&&e(B)}d.head_photo_url&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${d.head_photo_url}" class="w-full h-full object-cover" />`),d.head_sign_url&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${d.head_sign_url}" class="w-full h-full object-contain" />`)}}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}r.classList.remove("hidden"),r.classList.add("flex")}function Ye(){document.getElementById("dept-modal").classList.replace("flex","hidden")}async function rr(t){var y,w,a,v,b,e,l,u;t.preventDefault();const r=document.getElementById("dept-save-btn"),s=document.getElementById("dept-id").value,o=document.getElementById("dept-code").value.trim().toUpperCase(),m=document.getElementById("dept-name").value.trim();if(!o||!m){T("กรุณากรอกรหัสและชื่อกลุ่มสาระ","warning");return}Me(r,!0);try{const d=document.getElementById("dept-teacher-code").value||null,f=d?((a=(w=(y=document.getElementById("dept-selected-name"))==null?void 0:y.textContent)==null?void 0:w.split(" (")[0])==null?void 0:a.trim())??null:null,B={dept_code:o,dept_name:m,head_name:f,teacher_code:d,head_photo_url:document.getElementById("dept-photo-url").value||null,head_sign_url:document.getElementById("dept-sign-url").value||null,category:((v=document.getElementById("dept-category"))==null?void 0:v.value)||null},C=(e=(b=document.getElementById("dept-photo-file"))==null?void 0:b.files)==null?void 0:e[0];C&&(B.head_photo_url=await jt(o,"photo",C));const h=(u=(l=document.getElementById("dept-sign-file"))==null?void 0:l.files)==null?void 0:u[0];h&&(B.head_sign_url=await jt(o,"sign",h)),s?await Ra(Number(s),B):await Pa(B),T("บันทึกสำเร็จ","success"),Ye(),tt(await Le())}catch(d){T("บันทึกไม่สำเร็จ: "+(d.message??""),"error")}finally{Me(r,!1)}}async function or(t,r){if(confirm(`ยืนยันลบกลุ่มสาระ "${r}"?`))try{await qa(Number(t)),T(`ลบ "${r}" แล้ว`,"success"),tt(await Le())}catch{T("ลบไม่สำเร็จ","error")}}function lr(t=null){var o,m,y;const r=document.getElementById("period-modal"),s=t?((o=window._periodsCache)==null?void 0:o[t])??null:null;document.getElementById("period-id").value=t??"",document.getElementById("period-no").value=(s==null?void 0:s.period_no)??"",document.getElementById("period-start").value=((m=s==null?void 0:s.start_time)==null?void 0:m.slice(0,5))??"",document.getElementById("period-end").value=((y=s==null?void 0:s.end_time)==null?void 0:y.slice(0,5))??"",document.getElementById("period-modal-title").textContent=t?"แก้ไขคาบเรียน":"เพิ่มคาบเรียน",r.classList.remove("hidden"),r.classList.add("flex")}function Ke(){document.getElementById("period-modal").classList.replace("flex","hidden")}async function dr(t){t.preventDefault();const r=document.getElementById("period-save-btn"),s=document.getElementById("period-id").value,o={period_no:parseInt(document.getElementById("period-no").value),start_time:document.getElementById("period-start").value,end_time:document.getElementById("period-end").value};if(!o.period_no||!o.start_time||!o.end_time){T("กรุณากรอกข้อมูลให้ครบ","warning");return}s&&(o.id=Number(s)),Me(r,!0);try{await Na(o),T("บันทึกสำเร็จ","success"),Ke(),at()}catch(m){T("บันทึกไม่สำเร็จ: "+(m.message??""),"error")}finally{Me(r,!1)}}async function ir(t){if(confirm("ยืนยันลบคาบเรียนนี้?"))try{await Ma(Number(t)),T("ลบแล้ว","success"),at()}catch{T("ลบไม่สำเร็จ","error")}}async function mt(){try{const r=(await _e()).filter(o=>o.status==="pending").length,s=document.getElementById("badge-payments");if(!s)return;r>0?(s.textContent=r>9?"9+":r,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}async function gt(){try{const r=(await Nt()).filter(o=>!o.is_read).length,s=document.getElementById("badge-feedback");if(!s)return;r>0?(s.textContent=r>9?"9+":r,s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.add("hidden"),s.classList.remove("flex"))}catch{}}window._refreshFeedbackBadge=gt;window._refreshPaymentBadge=mt;window._goBack=()=>De();window.openTeacherModal=Zs;window.handleDeleteTeacher=tr;window.openSubjectModal=ar;window.handleDeleteSubject=nr;window.openDeptModal=sr;window.handleDeleteDept=or;window.openPeriodModal=lr;window.handleDeletePeriod=ir;window._adminViewSchedule=async(t,r)=>{var b;(b=document.getElementById("admin-sched-overlay"))==null||b.remove();const{getSystemConfig:s}=await ne(async()=>{const{getSystemConfig:e}=await import("./api-1xsyVspL.js");return{getSystemConfig:e}},__vite__mapDeps([0,1])),o=await s().catch(()=>({})),m=parseInt(o.academicYear??2568),y=parseInt(o.semester??1),w=document.createElement("div");w.id="admin-sched-overlay",w.className="fixed inset-0 z-[200] bg-gray-50 flex flex-col",w.innerHTML=`
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-5 h-14 flex items-center gap-4 flex-shrink-0 shadow-sm">
      <button id="aso-close"
        class="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 font-medium transition">
        ← กลับ
      </button>
      <div class="w-px h-5 bg-gray-200"></div>
      <div>
        <p class="text-sm font-bold text-gray-800">🗓️ ตารางสอน — ${r}</p>
        <p class="text-xs text-gray-400">ภาค ${y} / ${m} · แก้ไขได้</p>
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
    </div>`,document.body.appendChild(w),w.querySelector("#aso-close").addEventListener("click",()=>w.remove());const a=w.querySelector("#aso-content"),v=document.getElementById("main-content");v&&(v.id="main-content-bak"),a.id="main-content";try{await hs({id:t,full_name:r},m,y,o)}finally{a.id="aso-content",v&&(v.id="main-content")}};document.addEventListener("DOMContentLoaded",async()=>{var e,l,u,d,f,B,C,h,_,D,A,E,L,$,S,q,i;Is();const t=await Ks();if(!t)return;await Wt("admin");const r=document.getElementById("app-version");r&&(r.textContent=`v${Fs}`,r.classList.add("cursor-pointer","hover:underline"),r.addEventListener("click",()=>kt(t.user.id,!0,!0))),(e=t==null?void 0:t.user)!=null&&e.id&&kt(t.user.id,!1,!0),(l=document.getElementById("btn-logout"))==null||l.addEventListener("click",Xs);const s=[{label:"🗂️ หัวหน้ากลุ่มสาระ/กลุ่มศาสนา",options:[{value:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{value:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{value:"religion_subgroup_head",label:"หัวหน้ากลุ่มย่อย (ศาสนา)"}]},{label:"📋 ฝ่ายทะเบียน",options:[{value:"registrar_samai",label:"หัวหน้าฝ่ายทะเบียน (สามัญ)"},{value:"registrar_religion",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)"},{value:"registrar_pvch",label:"หัวหน้าฝ่ายทะเบียน (ปวช)"}]},{label:"🎓 ฝ่ายวิชาการ",options:[{value:"academic_samai",label:"หัวหน้าวิชาการสามัญ"},{value:"academic_religion",label:"หัวหน้าวิชาการศาสนา"},{value:"academic_pvch",label:"หัวหน้าวิชาการปวช"}]},{label:"🎖️ ผู้บริหาร",options:[{value:"executive",label:"ผู้บริหาร (ภาพรวมทั้งระบบ — สภานักเรียน ฯลฯ)"}]},{label:"📊 ระบบแก้ค้างเก่า",options:[{value:"regrade_executive",label:"ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)"}]},{label:"⚙️ อื่นๆ",options:[{value:"house_color_admin",label:"ผู้รับผิดชอบสีนักเรียน"},{value:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"},{value:"council_advisor",label:"ครูที่ปรึกษาสภานักเรียน"}]}],o=()=>'<option value="">— ไม่มี —</option>'+s.map(g=>`<optgroup label="${g.label}">${g.options.map(p=>`<option value="${p.value}">${p.label}</option>`).join("")}</optgroup>`).join("");function m(){const g=[...document.querySelectorAll(".pos-row-sel")].map(p=>p.value);document.getElementById("modal-pos-dept-wrap").classList.toggle("hidden",!g.includes("dept_head"))}function y(){const g=[...document.querySelectorAll(".pos-row-sel")],p=g.map(n=>n.value).filter(Boolean);g.forEach(n=>{[...n.options].forEach(c=>{c.value&&(c.disabled=p.includes(c.value)&&n.value!==c.value)})})}function w(g=""){const p=document.getElementById("modal-positions-list"),n=document.createElement("div");n.className="pos-row flex items-center gap-2",n.innerHTML=`
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${o()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`,n.querySelector(".pos-row-sel").value=g,n.querySelector(".pos-row-sel").addEventListener("change",()=>{m(),y()}),n.querySelector(".pos-row-del").addEventListener("click",()=>{n.remove(),m(),y()}),p.appendChild(n),m(),y()}window._addPositionRow=w,window._clearPositionRows=()=>{document.getElementById("modal-positions-list").innerHTML="",w(),m()},window._setPositionRows=g=>{document.getElementById("modal-positions-list").innerHTML="",(g!=null&&g.length?g:[""]).forEach(n=>w(n)),m()},window._getPositionValues=()=>[...document.querySelectorAll(".pos-row-sel")].map(g=>g.value).filter(Boolean),(u=document.getElementById("btn-add-position"))==null||u.addEventListener("click",()=>w()),w(),(d=document.getElementById("modal-close"))==null||d.addEventListener("click",ut),(f=document.getElementById("modal-backdrop"))==null||f.addEventListener("click",ut),(B=document.getElementById("teacher-form"))==null||B.addEventListener("submit",er),(C=document.getElementById("modal-photo-file"))==null||C.addEventListener("change",g=>{const p=g.target.files[0];p&&Kt(URL.createObjectURL(p),"")}),(h=document.getElementById("dept-modal-close"))==null||h.addEventListener("click",Ye),(_=document.getElementById("dept-modal-backdrop"))==null||_.addEventListener("click",Ye),(D=document.getElementById("dept-modal-cancel"))==null||D.addEventListener("click",Ye),(A=document.getElementById("dept-form"))==null||A.addEventListener("submit",rr),(E=document.getElementById("dept-photo-file"))==null||E.addEventListener("change",g=>{const p=g.target.files[0];p&&(document.getElementById("dept-photo-preview").innerHTML=`<img src="${URL.createObjectURL(p)}" class="w-full h-full object-cover" />`)}),(L=document.getElementById("dept-sign-file"))==null||L.addEventListener("change",g=>{const p=g.target.files[0];p&&(document.getElementById("dept-sign-preview").innerHTML=`<img src="${URL.createObjectURL(p)}" class="w-full h-full object-contain" />`)}),($=document.getElementById("period-modal-close"))==null||$.addEventListener("click",Ke),(S=document.getElementById("period-modal-backdrop"))==null||S.addEventListener("click",Ke),(q=document.getElementById("period-modal-cancel"))==null||q.addEventListener("click",Ke),(i=document.getElementById("period-form"))==null||i.addEventListener("submit",dr),await Qs(t.user.id),Js(t.user.id);const a={overview:xt,"exec-overview":zs,teachers:Xt,classes:wt,students:Zt,departments:ta,subjects:De,curriculum:qe,periods:at,homeroom:aa,"score-col-config":na,"registered-teachers":Je,holidays:sa,payments:oa,"life-skill-admin":la,"reading-admin":da,"prayer-admin":ia,settings:ea,import:ra,"admin-profile":ca,"usage-stats":pa,"classrooms-admin":ua,"course-doc-lang":()=>vs(null,!0),announcements:()=>ha(),"work-calendar":()=>ka(null),"role-permissions":()=>va(),"religion-groups":Ea,"tutorial-admin":()=>ne(async()=>{const{renderTutorialAdmin:g}=await import("./tutorial-FuIPnEx0.js");return{renderTutorialAdmin:g}},__vite__mapDeps([2,0,1,3,4])).then(({renderTutorialAdmin:g})=>g()),"house-colors":()=>wa(),"sports-admin":()=>Cs({admin:!0}),azfutsal:()=>Ts(),regrade:()=>Ys(),"sports-shirt-summary":()=>ls(),"sports-fund-admin":()=>os(),"sports-overview-admin":()=>rs(),"sports-evaluation":()=>ss(),"shirt-vote-settings":()=>ns(),"shirt-vote-dashboard":()=>as(),donations:()=>_a(),"feedback-admin":()=>$a(),"donor-chat-admin":()=>ne(()=>import("./teacher-views-donor-chat-xe-Dhac5.js"),__vite__mapDeps([5,4,0,1,3,6,7,8,9,10,11,12,13,14,15,16,2,17,18])).then(g=>g.renderDonorChatAdmin()),"student-qr-print":()=>ne(()=>import("./teacher-views-classes-s_CI5F_w.js").then(g=>g.t),__vite__mapDeps([19,4,0,1,9,10,11,6,20,3,21,18,22,23,24,25])).then(g=>g.renderStudentQRPrint(null,null)),"classroom-leaders":()=>Ia(),certificates:()=>ne(()=>import("./teacher-views-certificates-jK9ebQ-w.js"),__vite__mapDeps([26,4,27,1,6,28,3])).then(async g=>{const{getMyTeacherProfile:p}=await ne(async()=>{const{getMyTeacherProfile:c}=await import("./api-1xsyVspL.js");return{getMyTeacherProfile:c}},__vite__mapDeps([0,1])),n=await p(t.user.id).catch(()=>null);return g.renderCertificateManager(n)})};document.querySelectorAll("[data-nav]").forEach(g=>{g.addEventListener("click",p=>{var c,x;p.preventDefault();const n=g.dataset.nav;if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}a[n]&&a[n](),(c=document.getElementById("sidebar"))==null||c.classList.add("-translate-x-full"),(x=document.getElementById("sidebar-overlay"))==null||x.classList.add("hidden")})}),mt(),setInterval(mt,6e4),gt(),setInterval(gt,6e4),Rt(!1),window._adminNav=g=>{a[g]&&a[g]()},window.addEventListener("pp5:open-sports-shirt-summary",()=>a["sports-shirt-summary"]()),window.addEventListener("pp5:open-shirt-vote-settings",()=>a["shirt-vote-settings"]()),window.addEventListener("pp5:open-shirt-vote-dashboard",()=>a["shirt-vote-dashboard"]());const v=new URLSearchParams(location.search),b=v.get("view");b&&a[b]?(window._pendingQRTab=v.get("tab")||null,a[b]()):await xt()});function $e(t){if(!t)return"";const r=t.indexOf("/");return r>0?t.slice(0,r).trim():t.trim()}function Te(t){if(!t)return"";const r=t.indexOf("/");return r>0?t.slice(r+1).trim():""}function pe(t){return[...new Set(t.filter(Boolean))].sort()}const de="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400",he="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400",ve=t=>String(t??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"),J=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function re(t){document.querySelectorAll("[data-nav]").forEach(r=>{r.classList.toggle("bg-indigo-800",r.dataset.nav===t),r.classList.toggle("text-white",r.dataset.nav===t),r.classList.toggle("text-indigo-200",r.dataset.nav!==t)})}function ae(t){document.getElementById("main-content").innerHTML=t}async function xt(){re("overview"),document.getElementById("page-title").textContent="ภาพรวมระบบ",ae(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[t,r,s]=await Promise.all([Dn(),_e().catch(()=>[]),ue().catch(()=>[])]);Object.entries(t).forEach(([d,f])=>{const B=document.getElementById(`stat-${d}`);B&&(B.textContent=f.toLocaleString())});const o=s.filter(d=>d.profile_id).length,m=s.length-o,y=document.getElementById("stat-registered"),w=document.getElementById("stat-unregistered");y&&(y.textContent=o),w&&(w.textContent=m);const a=r.filter(d=>d.status==="pending"),v=document.getElementById("pending-payments-list");v&&(a.length?v.innerHTML=a.slice(0,3).map(d=>{var f;return`
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${((f=d.teachers)==null?void 0:f.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">${d.package_type==="semester"?`เหมาทั้งเทอม ${d.amount??299} บ.`:`รายห้อง ${parseInt(d.room_count??1)||1} ห้อง ${d.amount??49} บ.`} · ${new Date(d.created_at).toLocaleDateString("th-TH")}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`}).join("")+(a.length>3?`<p class="text-xs text-center text-gray-400 pt-2">และอีก ${a.length-3} รายการ</p>`:""):v.innerHTML='<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>');const b=document.getElementById("training-todo-shell");if(b)try{const{getAllAnnouncements:d,getAnnouncementRsvps:f}=await ne(async()=>{const{getAllAnnouncements:_,getAnnouncementRsvps:D}=await import("./api-1xsyVspL.js");return{getAllAnnouncements:_,getAnnouncementRsvps:D}},__vite__mapDeps([0,1])),B=await d(),C=new Date().toISOString().slice(0,10),h=B.filter(_=>_.ann_type==="training"&&_.is_active&&_.event_date>=C).sort((_,D)=>_.event_date.localeCompare(D.event_date));if(h.length){const _=await Promise.all(h.map(E=>f(E.id).catch(()=>[]))),D=E=>new Date(E+"T00:00:00").toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short"}),A=E=>String(E??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");b.innerHTML=`
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${h.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${h.map((E,L)=>{var p;const $=_[L]??[],S=$.filter(n=>n.response==="yes").length,q=$.filter(n=>n.response==="maybe").length,i=$.filter(n=>n.response==="no").length,g=$.length;return`
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${A(E.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${D(E.event_date)}
                        ${(p=E.event_periods)!=null&&p.length?` · 🕐 คาบ ${E.event_periods.sort((n,c)=>n-c).join(",")}`:""}
                        ${E.event_location?` · 📍 ${A(E.event_location)}`:""}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${g?`
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${S}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${q}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${i}</span>
                      `:'<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>'}
                    </div>
                  </div>`}).join("")}
              </div>
            </div>`}}catch{}const e=document.getElementById("leave-monitor-shell");e&&await ts(e,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร",externalUrl:"public-monitor.html"});const l=await ce().catch(()=>({})),u=document.getElementById("monitor-shell");u&&gr(u,l)}catch{T("โหลดข้อมูลสรุปไม่สำเร็จ","error")}}function ft(t,r,s){const o={};for(const m of t)m.main_room&&(o[m.main_room]=[]);for(const m of r){const y=m[s];y&&(o[y]||(o[y]=[]),o[y].push({id:m.id,full_name:m.full_name??"",student_code:m.student_code??""}))}return o}async function cr(t,r,s){const{records:o,students:m,homerooms:y}=await Kn(t,r),w=ft(y,m,"religion_room"),a={},v={},b=new Set;for(const h of o){const _=h.main_room,D=h.week_number;!_||!D||(b.add(D),a[_]||(a[_]={}),a[_][D]||(a[_][D]=new Set),a[_][D].add(h.student_id),h.status==="absent"&&(v[_]||(v[_]={}),v[_][D]||(v[_][D]=new Set),v[_][D].add(h.student_id)))}const e=s?mr(s):Math.max(...b,0),l=e>0?Array.from({length:e},(h,_)=>_+1):[...b].sort((h,_)=>h-_),u=Object.keys(w),d=u.filter(h=>{var A,E;const _=w[h].length,D=((E=(A=a[h])==null?void 0:A[e-1])==null?void 0:E.size)??0;return _>0&&D<_}),f=u.filter(h=>{var D;const _=(D=v[h])==null?void 0:D[e-2];return _!=null&&_.size?[..._].some(A=>!o.filter(L=>L.main_room===h&&L.week_number===e-1&&L.student_id===A).some(L=>L.status==="followed"||L.status==="avoid")):!1}),B=u.length,C=u.filter(h=>{var D,A;const _=w[h].length;return _?(((A=(D=a[h])==null?void 0:D[e-1])==null?void 0:A.size)??0)>=_:!1}).length;return{total:B,done:C,recordPending:d.length,followPending:f.length,week:e,_raw:{records:o,students:m,roomStudents:w,weekRoomRec:a,weekRoomAbsent:v,weeks:l,W:e,homerooms:y}}}async function pr(t,r){const{columns:s,scores:o,students:m,homerooms:y}=await Qn(t,r),w=ft(y,m,"main_room"),a=new Set(o.map(e=>e.student_id)),v=Object.keys(w),b=v.filter(e=>w[e].length>0&&w[e].every(l=>a.has(l.id??l))).length;return{total:v.length,done:b,pending:v.length-b,_raw:{columns:s,scores:o,students:m,roomStudents:w,scored:a,homerooms:y}}}async function ur(t,r){const{columns:s,scores:o,students:m,homerooms:y}=await Jn(t,r),w=ft(y,m,"main_room"),a=new Set(o.map(e=>e.student_id)),v=Object.keys(w),b=v.filter(e=>w[e].length>0&&w[e].every(l=>a.has(l.id??l))).length;return{total:v.length,done:b,pending:v.length-b,_raw:{columns:s,scores:o,students:m,roomStudents:w,scored:a,homerooms:y}}}function mr(t){if(!t)return 0;const r=new Date(t);if(isNaN(r))return 0;const s=Date.now()-r.getTime();return s<0?0:Math.floor(s/(7*24*60*60*1e3))+1}async function gr(t,r){const s=parseInt(r.academicYear??2568),o=parseInt(r.semester??1);t.innerHTML=`
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
    </div>`;const[m,y,w,a]=await Promise.allSettled([cr(s,o,r.semester_start),pr(s,o),ur(s,o),ue().catch(()=>[])]),v=a.status==="fulfilled"?a.value:[],b=(e,l)=>{const u=document.getElementById(`card-${e}`);if(!u)return;if(l.status==="rejected"){u.innerHTML='<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>';return}const d=l.value;if(e==="prayer"){const f=d.total>0?Math.round(d.done/d.total*100):0,B=d.recordPending+d.followPending;u.innerHTML=`
        <p class="text-3xl font-extrabold ${f>=100?"text-emerald-600":f>=60?"text-amber-500":"text-red-500"}">${f}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${d.done}/${d.total} ห้อง (สัปดาห์ที่ ${d.week-1})</p>
        ${B>0?`<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${d.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${d.recordPending} ห้อง</span>`:""}
          ${d.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${d.followPending} ห้อง</span>`:""}
        </div>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}else{const f=d.total>0?Math.round(d.done/d.total*100):0;u.innerHTML=`
        <p class="text-3xl font-extrabold ${f>=100?"text-emerald-600":f>=60?"text-amber-500":"text-red-500"}">${f}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${d.done}/${d.total} ห้อง</p>
        ${d.pending>0?`<p class="text-[10px] text-red-500 mt-1">ค้าง ${d.pending} ห้อง</p>`:'<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>'}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`}};b("prayer",m),b("lifeskill",y),b("reading",w),t.querySelectorAll(".monitor-card").forEach(e=>{e.addEventListener("click",()=>{var d,f,B;const l=e.dataset.type,u=l==="prayer"?(d=m.value)==null?void 0:d._raw:l==="lifeskill"?(f=y.value)==null?void 0:f._raw:(B=w.value)==null?void 0:B._raw;xr(l,u,r,s,o,v)})})}function xr(t,r,s,o,m,y=[]){var l;(l=document.getElementById("monitor-modal"))==null||l.remove();const w={prayer:"🕌 ละหมาด — รายสัปดาห์",lifeskill:"🌱 ทักษะชีวิต — รายเทอม",reading:"📖 อ่านคิดวิเคราะห์ — รายเทอม"},a=document.createElement("div");a.id="monitor-modal",a.className="fixed inset-0 z-[90] flex flex-col bg-white",a.innerHTML=`
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${w[t]}</h2>
        <p class="text-xs text-gray-400">ภาค ${s.semester??"—"}/${s.academicYear??"—"}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`,document.body.appendChild(a),a.querySelector("#monitor-modal-close").addEventListener("click",()=>a.remove());const v=a.querySelector("#modal-body"),e={allTeachers:y,year:o,sem:m,category:t==="prayer"?"ศาสนา":"สามัญ"};t==="prayer"&&br(v,r,e),t==="lifeskill"&&Qt(v,r,o,m,e),t==="reading"&&Jt(v,r,o,m,e),a.querySelector("#modal-print-btn").addEventListener("click",()=>yr(s,t)),a.querySelector("#modal-doc-btn").addEventListener("click",()=>hr(s,t,r))}function ht(t,r,s,o){const m=r[t],{allTeachers:y,year:w,sem:a,category:v}=o??{};if(m)return`<p class="font-semibold text-gray-800 text-xs leading-tight">${m}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${t}</p>`;(y??[]).map(e=>`<option value="${e.id}">${e.full_name??""}${e.teacher_code?` (${e.teacher_code})`:""}</option>`).join("");const b=`pick-${t.replace(/[^a-zA-Z0-9]/g,"_")}`;return`<p class="text-[11px] font-medium text-gray-500">${t}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${t}" data-picker="${b}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${b}" class="hidden mt-2 flex gap-1 items-center">
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
        data-room="${t}" data-year="${w}" data-sem="${a}" data-cat="${v}">บันทึก</button>
    </div>`}function br(t,r,s={}){var p;if(!r){t.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{records:o,roomStudents:m,weekRoomRec:y,weekRoomAbsent:w,weeks:a,W:v,homerooms:b}=r,e=Object.keys(m).sort((n,c)=>n.localeCompare(c,void 0,{numeric:!0})),l={},u={};for(const n of b??[])n.main_room&&(l[n.main_room]=((p=n.teachers)==null?void 0:p.full_name)??"",u[n.main_room]=n);const d="border border-gray-100 text-center text-[10px] px-2 py-2",f="px-4 py-2 text-sm font-medium border-b-2 transition",B=`${f} border-indigo-600 text-indigo-700 bg-indigo-50`,C=`${f} border-transparent text-gray-500 hover:text-gray-700`,h=(n,c="")=>`<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${ht(n,l,u,s)}${c}
  </td>`,_=n=>{const c=n??(v>0?v-1:v),x=a.map(H=>`<option value="${H}" ${H===c?"selected":""}>${H===v?`สัปดาห์ที่ ${H} (ปัจจุบัน)`:H===v-1?`สัปดาห์ที่ ${H} (ควรกรอก)`:`สัปดาห์ที่ ${H}`}</option>`).join(""),j=e.map(H=>{var U,Y;const I=(m[H]??[]).length,R=((Y=(U=y[H])==null?void 0:U[c])==null?void 0:Y.size)??0,N=I>0?Math.round(R/I*100):0,O=I===0?"bg-gray-50 text-gray-300":R===0?"bg-red-50 text-red-400":N>=100?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700",Q=N>=100?"bg-emerald-500":N>=50?"bg-amber-400":"bg-red-400",P=I>0&&R<I?'<span class="text-[9px] text-amber-600 ml-1">📋</span>':"";return`<tr class="hover:bg-gray-50">
        ${h(H,P)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${I}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${O}">
          <div class="font-bold">${I>0?N+"%":"—"}</div>
          <div class="text-[9px] opacity-70">${I>0?R+"/"+I:""}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${I>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${Q} h-2 rounded-full" style="width:${N}%"></div></div>
            <span class="text-[10px] font-bold ${N>=100?"text-emerald-600":N>=50?"text-amber-600":"text-red-500"}">${N}%</span>
          </div>`:'<span class="text-[10px] text-gray-300">ไม่มีนักเรียน</span>'}
        </td>
      </tr>`}).join("");return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">เลือกสัปดาห์:</label>
      <select id="prayer-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${x}
      </select>
      <span class="text-[11px] text-gray-400">${e.length} ห้อง</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${d} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${d} bg-gray-100">นักเรียน</th>
          <th class="${d} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${d} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${j}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`},D=n=>{var R;const c=n??(v>1?v-2:a[0]??1),x=c+1,j=a.map(N=>`<option value="${N}" ${N===c?"selected":""}>${N===v-2?`สัปดาห์ที่ ${N} (ควรติดตาม)`:N===v-1?`สัปดาห์ที่ ${N} (ล่าสุด)`:`สัปดาห์ที่ ${N}`}</option>`).join(""),H=(N,O)=>({followed:'<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>',overdue:'<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>',pending:`<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${O}</span>`})[N]??"",k=[];for(const N of e){const O=m[N]??[],Q=Object.fromEntries(O.map(P=>[P.id??P,P])),W=[...((R=w[N])==null?void 0:R[c])??[]];for(const P of W){const U=Q[P],F=o.filter(z=>z.main_room===N&&z.week_number===x&&z.student_id===P).some(z=>z.status==="followed"||z.status==="avoid")?"followed":x>v?"pending":"overdue";k.push({room:N,stu:U,status:F})}}const I=k.length?k.map(({room:N,stu:O,status:Q})=>{const W=l[N];return`<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${W?`<p class="font-semibold text-gray-800 text-xs">${W}</p><p class="text-[10px] text-gray-400">${N}</p>`:`<p class="font-semibold text-gray-800 text-xs">${N}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${(O==null?void 0:O.full_name)??"—"}</p>
          <p class="text-[10px] text-gray-400">${(O==null?void 0:O.student_code)??""}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${H(Q,x)}</td>
      </tr>`}).join(""):`<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${c}</td></tr>`;return`<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${j}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${x} · พบ ${k.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${d} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${d} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${d} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${I}</tbody>
      </table>
    </div>`},A=v>0?v-1:0,E=e.filter(n=>{var c;return((c=m[n])==null?void 0:c.length)>0}).length,L=e.reduce((n,c)=>{var x;return n+(((x=m[c])==null?void 0:x.length)??0)},0),$=(n,c,x=72)=>{const I=2*Math.PI*26,R=I*n/100;return`<svg width="${x}" height="${x}" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="26" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="36" cy="36" r="26" fill="none" stroke="${c}" stroke-width="8"
        stroke-dasharray="${R} ${I}" stroke-dashoffset="${I/4}" stroke-linecap="round"/>
      <text x="36" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="${c}">${n}%</text>
    </svg>`},S=n=>{const c=t.querySelector("#prayer-dashboard");if(!c)return;if(a.length===0){c.innerHTML='<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>';return}if(!n)return;const x=e.filter(O=>{var W,P;const Q=m[O].length;return Q>0&&(((P=(W=y[O])==null?void 0:W[n])==null?void 0:P.size)??0)<Q}),j=e.filter(O=>{var P,U;const Q=m[O].length,W=((U=(P=y[O])==null?void 0:P[n])==null?void 0:U.size)??0;return Q>0&&W>=Q}),H=e.filter(O=>{var W;const Q=(W=w[O])==null?void 0:W[n-1];return Q!=null&&Q.size?[...Q].some(P=>!o.filter(Y=>Y.main_room===O&&Y.week_number===n&&Y.student_id===P).some(Y=>Y.status==="followed"||Y.status==="avoid")):!1}),k=j.length,I=x.length,R=e.reduce((O,Q)=>{var W,P;return O+(((P=(W=y[Q])==null?void 0:W[n])==null?void 0:P.size)??0)},0),N=E>0?Math.round(k/E*100):0;c.innerHTML=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${E}</p>
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
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${L}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${$(N,N>=100?"#10b981":N>=50?"#f59e0b":"#ef4444")}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${n}</p>
          <p class="text-xs text-gray-400 mt-0.5">${k} / ${E} ห้อง บันทึกครบ</p>
          ${H.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${H.length} ห้อง</p>`:""}
          ${N>=100?'<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>':""}
        </div>
      </div>
      ${I>0?`
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${I})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${x.map(O=>{var Y,M;const Q=m[O].length,W=((M=(Y=y[O])==null?void 0:Y[n])==null?void 0:M.size)??0,P=Math.round(W/Q*100),U=l[O];return`<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${O}</span>
                ${U?`<span class="text-amber-600 truncate block">${U}</span>`:""}
              </div>
              <span class="flex-shrink-0 font-bold ${P===0?"text-red-500":"text-amber-600"}">${W}/${Q}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${P===0?"bg-red-400":"bg-amber-400"}" style="width:${P}%"></div>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:`<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${n}</p></div>
      </div>`}
    </div>`};t.innerHTML=`
    <div id="prayer-dashboard"></div>
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${B}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${C}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`;const q=t.querySelector("#prayer-tab-content");let i="record";const g=(n,c)=>{i=n,q.innerHTML=n==="record"?_(c):D(c),n==="record"&&S(c??A),t.querySelectorAll(".prayer-tab").forEach(H=>{H.className=H.dataset.tab===n?`prayer-tab ${B}`:`prayer-tab ${C}`});const x=q.querySelector("#prayer-week-sel");x&&x.addEventListener("change",H=>g("record",parseInt(H.target.value)));const j=q.querySelector("#prayer-follow-week-sel");j&&j.addEventListener("change",H=>g("follow",parseInt(H.target.value))),vt(q,s,()=>g(i,c))};t.querySelectorAll(".prayer-tab").forEach(n=>n.addEventListener("click",()=>g(n.dataset.tab))),g("record",A)}function Qt(t,r,s,o,m={}){var d;if(!r){t.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:y,roomStudents:w,scored:a,homerooms:v}=r;if(!y.length){t.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>';return}const b={},e={};for(const f of v??[])f.main_room&&(b[f.main_room]=((d=f.teachers)==null?void 0:d.full_name)??"",e[f.main_room]=f);const l=Object.keys(w).sort((f,B)=>f.localeCompare(B,void 0,{numeric:!0})),u="border border-gray-100 text-center text-[10px] px-2 py-2";t.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${u} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${u} bg-gray-100">นักเรียน</th>
          <th class="${u} bg-emerald-50 text-emerald-700">กรอกแล้ว</th>
          <th class="${u} bg-red-50 text-red-500">ค้าง</th>
          <th class="${u} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${l.map(f=>{const B=w[f]??[],C=B.length,h=B.filter(E=>a.has(E.id??E)).length,_=C-h,D=C>0?Math.round(h/C*100):0,A=D>=100?"bg-emerald-500":D>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${ht(f,b,e,m)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${C}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${h}</td>
              <td class="border border-gray-100 text-center ${_>0?"text-red-500 font-medium":"text-gray-300"}">${_||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${A} h-2 rounded-full" style="width:${D}%"></div></div>
                  <span class="text-[10px] font-bold ${D>=100?"text-emerald-600":D>=50?"text-amber-600":"text-red-500"}">${D}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${o}/${s} · ${l.length} ห้อง</p>`,vt(t,m,()=>Qt(t,r,s,o,m))}function Jt(t,r,s,o,m={}){var d;if(!r){t.innerHTML='<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>';return}const{columns:y,roomStudents:w,scored:a,homerooms:v}=r;if(!y.length){t.innerHTML='<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>';return}const b={},e={};for(const f of v??[])f.main_room&&(b[f.main_room]=((d=f.teachers)==null?void 0:d.full_name)??"",e[f.main_room]=f);const l=Object.keys(w).sort((f,B)=>f.localeCompare(B,void 0,{numeric:!0})),u="border border-gray-100 text-center text-[10px] px-2 py-2";t.innerHTML=`
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${u} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${u} bg-gray-100">นักเรียน</th>
          <th class="${u} bg-indigo-50 text-indigo-700">กรอกแล้ว</th>
          <th class="${u} bg-red-50 text-red-500">ค้าง</th>
          <th class="${u} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${l.map(f=>{const B=w[f]??[],C=B.length,h=B.filter(E=>a.has(E.id??E)).length,_=C-h,D=C>0?Math.round(h/C*100):0,A=D>=100?"bg-indigo-500":D>=50?"bg-amber-400":"bg-red-400";return`<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${ht(f,b,e,m)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${C}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${h}</td>
              <td class="border border-gray-100 text-center ${_>0?"text-red-500 font-medium":"text-gray-300"}">${_||"—"}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${A} h-2 rounded-full" style="width:${D}%"></div></div>
                  <span class="text-[10px] font-bold ${D>=100?"text-indigo-600":D>=50?"text-amber-600":"text-red-500"}">${D}%</span>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${o}/${s} · ${l.length} ห้อง · ${y.length} หัวข้อ</p>`,vt(t,m,()=>Jt(t,r,s,o,m))}async function vt(t,r,s){const{allTeachers:o,year:m,sem:y,category:w}=r??{};if(!(o!=null&&o.length))return;const a={};t.querySelectorAll(".hr-sel-wrap").forEach(v=>{const b=v.closest('[id^="pick-"]');b&&(a[b.id]=yt({wrap:v,teachers:o,value:null,placeholder:"ค้นหาชื่อหรือรหัสครู..."}))}),t.querySelectorAll(".hr-assign-btn").forEach(v=>{v.addEventListener("click",()=>{const b=v.dataset.picker,e=document.getElementById(b);e&&e.classList.toggle("hidden")})}),t.querySelectorAll(".hr-save-btn").forEach(v=>{v.addEventListener("click",async()=>{var u;const b=v.dataset.room,e=`pick-${b.replace(/[^a-zA-Z0-9]/g,"_")}`,l=(u=a[e])==null?void 0:u.getValue();if(!l){T("กรุณาเลือกครู","error");return}v.disabled=!0,v.textContent="...";try{await Ft({teacher_id:l,main_room:b,category:w,academic_year:m,semester:y}),T(`ระบุครูที่ปรึกษาห้อง ${b} แล้ว ✅`,"success"),s&&s()}catch(d){T("บันทึกไม่สำเร็จ: "+(d.message??""),"error"),v.disabled=!1,v.textContent="บันทึก"}})})}function yr(t,r){const s={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[r]??r,o=document.getElementById("modal-body");if(!o){T("ไม่พบเนื้อหาสำหรับพิมพ์","error");return}const m=o.cloneNode(!0);m.querySelectorAll("button, select, input").forEach(a=>a.remove());const y=m.innerHTML,w=`<!DOCTYPE html><html lang="th"><head>
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
    <p>โรงเรียน: ${t.samaiSchoolName??t.schoolName??""} &nbsp;·&nbsp; ภาค ${t.semester??"—"}/${t.academicYear??"—"} &nbsp;·&nbsp; พิมพ์: ${new Date().toLocaleDateString("th-TH")}</p>
    ${y}
  </body></html>`;bs(w,{autoprint:!0})}function fr(t,r,s){var b;const o={};for(const e of(r==null?void 0:r.homerooms)??[])e.main_room&&(o[e.main_room]=((b=e.teachers)==null?void 0:b.full_name)??"—");if(t==="prayer"){const{roomStudents:e,weekRoomRec:l,W:u}=r??{};if(!e)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const f=Object.keys(e).sort((C,h)=>C.localeCompare(h,void 0,{numeric:!0})).filter(C=>{var _,D;const h=e[C].length;return h?(((D=(_=l[C])==null?void 0:_[u-1])==null?void 0:D.size)??0)<h:!1});return f.length?`<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${f.map((C,h)=>{var A,E;const _=e[C].length,D=((E=(A=l[C])==null?void 0:A[u-1])==null?void 0:E.size)??0;return`<tr>
        <td>${h+1}</td>
        <td>${o[C]??"—"}</td>
        <td>${C}</td>
        <td>${_}</td>
        <td>${D}</td>
        <td style="color:#dc2626">${_-D}</td>
      </tr>`}).join("")}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(u??0)-1} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'}const{roomStudents:m,scored:y}=r??{};if(!m)return'<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>';const a=Object.keys(m).sort((e,l)=>e.localeCompare(l,void 0,{numeric:!0})).filter(e=>{const l=m[e]??[];return l.length>0&&!l.every(u=>y.has(u.id??u))});return a.length?`<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${a.map((e,l)=>{const u=m[e]??[],d=u.filter(f=>y.has(f.id??f)).length;return`<tr>
      <td>${l+1}</td>
      <td>${o[e]??"—"}</td>
      <td>${e}</td>
      <td>${u.length}</td>
      <td>${d}</td>
      <td style="color:#dc2626">${u.length-d}</td>
    </tr>`}).join("")}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${s.semester??"—"}/${s.academicYear??"—"} ณ วันที่ ${new Date().toLocaleDateString("th-TH")}</p>`:'<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'}function hr(t,r,s){const o={prayer:"ละหมาด",lifeskill:"ทักษะชีวิต",reading:"อ่านคิดวิเคราะห์"}[r]??r,m=new Date,y=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],w=`${m.getDate()} ${y[m.getMonth()]} ${m.getFullYear()+543}`,a=t.samaiSchoolName??t.schoolName??"โรงเรียน",v=fr(r,s,t),b=`<!DOCTYPE html><html lang="th"><head>
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
    ${v}
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
  </body></html>`,e=new Blob(["\uFEFF"+b],{type:"application/msword;charset=utf-8"}),l=URL.createObjectURL(e),u=document.createElement("a");u.href=l,u.download=`บันทึกข้อความ_${o}_${t.academicYear??new Date().getFullYear()+543}.doc`,u.click(),setTimeout(()=>URL.revokeObjectURL(l),2e3)}async function Xt(){var t;re("teachers"),document.getElementById("page-title").textContent="จัดการครู / บุคลากร",ae(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const r=await ue(),s=pe(r.map(w=>w.dept)),o=pe(r.map(w=>w.skill_group));ae(`<div class="max-w-6xl mx-auto animate-fade">
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
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${he} flex-1 min-w-40" />
          <select id="tf-dept" class="${de}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${s.map(w=>`<option value="${w}">${w}</option>`).join("")}
          </select>
          <select id="tf-skill" class="${de}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${o.map(w=>`<option value="${w}">${w}</option>`).join("")}
          </select>
          <select id="tf-subg" class="${de}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${de}">
            <option value="">ทุกประเภท</option>
            <option value="ครู">ครู</option>
            <option value="บุคลากร">บุคลากร</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="tf-count" class="font-semibold text-indigo-600">${r.length}</span> / ${r.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="teacher-table-wrap"></div>
      </div>
    </div>`),ze(r);let m=r;window._impersonateTeacher=async w=>{const a=r.find(v=>v.id===w);if(!a){T("ไม่พบข้อมูลครู","error");return}try{const{startImpersonation:v}=await ne(async()=>{const{startImpersonation:b}=await import("./impersonation-C66q0Y-O.js").then(e=>e.i);return{startImpersonation:b}},__vite__mapDeps([11,1]));await v(le,a),window.location.href="teacher.html"}catch(v){console.error("Cannot start impersonation:",v);const b=/function|schema cache|start_admin_impersonation|edge/i.test((v==null?void 0:v.message)||"");T(b?"ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate":(v==null?void 0:v.message)||"ไม่สามารถเริ่มโหมดสวมบทบาทได้","error")}};const y=()=>{const w=document.getElementById("tf-q").value.toLowerCase(),a=document.getElementById("tf-dept").value,v=document.getElementById("tf-skill").value,b=document.getElementById("tf-subg").value,e=document.getElementById("tf-type").value,l=r.filter(u=>(!w||[u.full_name,u.teacher_code,u.dept,u.skill_group].some(d=>(d??"").toLowerCase().includes(w)))&&(!a||u.dept===a)&&(!v||u.skill_group===v)&&(!b||u.subject_group===b)&&(!e||u.staff_type===e));document.getElementById("tf-count").textContent=l.length,m=l,ze(l)};["tf-q","tf-dept","tf-skill","tf-subg","tf-type"].forEach(w=>{var a,v;(a=document.getElementById(w))==null||a.addEventListener("input",y),(v=document.getElementById(w))==null||v.addEventListener("change",y)}),(t=document.getElementById("teacher-export-csv"))==null||t.addEventListener("click",()=>{const w=d=>["ACDMVOC","AGMVOC"].includes(d.subject_group)?"ปวช":d.category==="ศาสนา"?"ศาสนา":d.category==="สามัญ"||d.subject_group?"สามัญ":"-",a=["ลำดับ","รหัสครู","ชื่อสกุล","กลุ่มครู","เบอร์ติดต่อ"],v=m.map((d,f)=>[f+1,d.teacher_code??"",d.full_name??"",w(d),d.phone??""]),b="\uFEFF"+[a,...v].map(d=>d.map(f=>`"${String(f).replace(/"/g,'""')}"`).join(",")).join(`
`),e=new Blob([b],{type:"text/csv;charset=utf-8"}),l=URL.createObjectURL(e),u=document.createElement("a");u.href=l,u.download="รายชื่อครู-บุคลากร.csv",document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(l),T("ดาวน์โหลด CSV แล้ว ✅","success")})}catch{T("โหลดข้อมูลครูไม่สำเร็จ","error")}}function ze(t){const r=document.getElementById("teacher-table-wrap");if(!r)return;if(t.length===0){r.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">👩‍🏫</p>
      <p class="font-medium">ยังไม่มีครูในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มครูใหม่" เพื่อเริ่มต้น</p>
    </div>`;return}const s=o=>o?`<span class="px-2 py-0.5 rounded-full text-xs font-medium ${{สามัญ:"bg-blue-50 text-blue-700",ศาสนา:"bg-amber-50 text-amber-700"}[o]??""}">${o}</span>`:"—";r.innerHTML=`
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
              ${s(o.category)}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._adminViewSchedule(${o.id},'${ve(o.full_name)}')"
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
    </table></div>`}async function Je(){re("registered-teachers"),document.getElementById("page-title").textContent="บัญชีผู้ใช้ครู",ae(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const t=await ce().catch(()=>({})),r=parseInt(t.academicYear??new Date().getFullYear()+543),s=parseInt(t.semester??1),[o,m,y,w]=await Promise.all([ue(),An(r,s).catch(()=>[]),_e().catch(()=>[]),et().catch(()=>[])]),a=new Set(m),v=y.filter(n=>n.status==="approved"),b=new Map;w.forEach(n=>{var x;const c=(x=n.master_subjects)==null?void 0:x.teacher_id;c&&b.set(c,(b.get(c)??0)+1)});const e=n=>{const c=n.teachers_quota,x=b.get(n.id)??(c==null?void 0:c.total_classes_created)??0,j=v.filter(N=>{var O;return((O=N.teachers)==null?void 0:O.id)===n.id}),H=j.filter(N=>N.package_type==="per_subject").reduce((N,O)=>N+(parseInt(O.room_count??1)||1),0),k=j.some(N=>N.package_type==="semester")||(c==null?void 0:c.package_type)==="semester",I=(c==null?void 0:c.is_paid)&&!(c!=null&&c.package_type)&&!k&&!H,R=parseInt(t.freeClassQuota??2);return k||I?{label:k?"เหมาทั้งเทอม":"แพ็กเกจเดิม",detail:`ใช้แล้ว ${x} ห้อง`,cls:"bg-emerald-50 text-emerald-700 border-emerald-100"}:H>0?{label:`รายห้อง ${H} ห้อง`,detail:`ใช้แล้ว ${x}/${R+H} ห้อง`,cls:"bg-indigo-50 text-indigo-700 border-indigo-100"}:{label:"ยังไม่เลือก",detail:`ใช้โควตาฟรี ${x}/${R} ห้อง`,cls:x>=R?"bg-amber-50 text-amber-700 border-amber-100":"bg-gray-50 text-gray-600 border-gray-100"}},l=o.filter(n=>n.profile_id),u=o.filter(n=>!n.profile_id),d=l.filter(n=>a.has(n.id)),f=l.filter(n=>!a.has(n.id)),B=(n,c,x,j)=>`<button type="button" data-rt-tab="${n}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${j} flex items-center justify-center text-xl font-bold">${x}</div>
        <p class="text-sm text-gray-500">${c}</p>
      </button>`,C=[...new Set(o.map(n=>n.dept).filter(Boolean))].sort(),h={};for(const n of o){const c=(n.full_name??"").toLowerCase().replace(/\s+/g,"");c&&(h[c]||(h[c]=[]),h[c].push(n))}const _=Object.values(h).filter(n=>n.length>1).map(n=>n.slice().sort((c,x)=>(c.registered_at??"")<(x.registered_at??"")?-1:1));ae(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${B("all","ทั้งหมด",o.length,"bg-indigo-100 text-indigo-700")}
        ${B("registered","มีบัญชีแล้ว",l.length,"bg-emerald-100 text-emerald-700")}
        ${B("unregistered","ยังไม่ลงทะเบียน",u.length,"bg-amber-100 text-amber-700")}
        ${B("duplicates","บัญชีซ้ำ",_.length,_.length>0?"bg-red-100 text-red-700":"bg-gray-100 text-gray-400")}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${B("scheduled","สร้างตารางสอนแล้ว",d.length,"bg-green-100 text-green-700")}
        ${B("unscheduled","ยังไม่สร้างตารางสอน",f.length,"bg-gray-100 text-gray-600")}
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${he} flex-1 min-w-40" />
          <select id="rt-cat" class="${de}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${de}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${C.map(n=>`<option value="${n}">${n}</option>`).join("")}
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
    </div>`);let D=o,A="all",E=null;const L=()=>{document.querySelectorAll("[data-rt-tab]").forEach(n=>{var x;const c=n.dataset.rtTab===A||n.dataset.rtTab===E;n.classList.toggle("border-emerald-400",c),n.classList.toggle("bg-emerald-50",c),n.classList.toggle("shadow-lg",c),n.classList.toggle("shadow-emerald-100",c),n.classList.toggle("ring-2",c),n.classList.toggle("ring-emerald-200",c),n.classList.toggle("border-gray-100",!c),(x=n.querySelector("p"))==null||x.classList.toggle("text-emerald-700",c)})},$=n=>b.get(n.id)??0,S=n=>a.has(n.id)?"✓":"—",q=()=>{const n=document.getElementById("rt-dup-list");if(n){if(!_.length){n.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`;return}n.innerHTML=_.map((c,x)=>{const j=c.map((k,I)=>`
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${I===0?"border-emerald-300 bg-emerald-50":"border-gray-200 hover:border-emerald-200"}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${x}" value="${k.id}"
              class="mt-1 accent-emerald-600" ${I===0?"checked":""} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${k.image_url?`<img src="${k.image_url}" class="w-7 h-7 rounded-full object-cover" />`:""}
                <span class="font-semibold text-gray-800">${We(k.full_name??"—")}</span>
                <span class="text-xs font-mono text-indigo-500">${k.teacher_code??"—"}</span>
                ${k.profile_id?'<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>':'<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>'}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${$(k)}</span>
                <span>🗓️ ตาราง ${S(k)}</span>
                ${k.login_email?`<span>✉️ ${We(k.login_email)}</span>`:""}
                ${k.registered_at?`<span>📅 ${new Date(k.registered_at).toLocaleDateString("th-TH")}</span>`:""}
                <span class="text-gray-300">ID: ${k.id}</span>
              </div>
            </div>
          </label>`).join(""),H=c.map(k=>k.id).join(",");return`
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${x}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${x+1} — ${We(c[0].full_name??"")}
              <span class="ml-2 text-red-500">(${c.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${j}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${x},'${H}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`}).join("")}};window._mergeDupGroup=async(n,c)=>{var R;const x=c.split(",").map(Number),j=Number((R=document.querySelector(`input[name="dup-keep-${n}"]:checked`))==null?void 0:R.value);if(!j){T("เลือกบัญชีที่ต้องการเก็บก่อน","warning");return}const H=x.filter(N=>N!==j);if(!H.length){T("ไม่มีบัญชีซ้ำที่จะลบ","info");return}const k=o.find(N=>N.id===j);if(!confirm(`ยืนยันรวมบัญชี?

เก็บ: ${k==null?void 0:k.full_name} (ID ${j})
ลบ: ID ${H.join(", ")}

ข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`))return;const I=document.querySelector(`[data-dup-group="${n}"] button`);I&&(I.disabled=!0,I.textContent="⏳ กำลังรวม...");try{for(const N of H)await qn(j,N);T(`รวมบัญชีสำเร็จ — เหลือ ID ${j}`,"success"),Je()}catch(N){T("เกิดข้อผิดพลาด: "+(N.message??""),"error"),I&&(I.disabled=!1,I.textContent="🔀 รวมบัญชีและลบบัญชีซ้ำ")}};const i=n=>{var x,j,H,k;const c=n==="duplicates";if((x=document.getElementById("rt-main-section"))==null||x.classList.toggle("hidden",c),(j=document.getElementById("rt-duplicates-section"))==null||j.classList.toggle("hidden",!c),(H=document.getElementById("rt-schedule-stats"))==null||H.classList.toggle("hidden",!0),c){A="duplicates",E=null,L(),q();return}n==="scheduled"||n==="unscheduled"?(A="registered",E=n):(A=n,E=null),D=A==="registered"?l:A==="unregistered"?u:o,(k=document.getElementById("rt-schedule-stats"))==null||k.classList.toggle("hidden",A!=="registered"),L(),p()},g=n=>{const c=document.getElementById("reg-teacher-table");if(c){if(!n.length){c.innerHTML=`<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`;return}c.innerHTML=`
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
              ${n.map(x=>{const j=(x.full_name??"?").charAt(0).toUpperCase(),H=!!x.profile_id,k=a.has(x.id),I=e(x);return`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${x.image_url?`<img src="${x.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`:`<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${H?"bg-gradient-to-tr from-indigo-400 to-purple-400 text-white":"bg-gray-200 text-gray-500"}">${j}</div>`}
                      <div>
                        <p class="font-semibold text-gray-800">${x.full_name??"—"}</p>
                        <p class="text-xs text-gray-400">${x.dept??""}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">
                    ${x.teacher_code??"—"}
                  </td>
                  <td class="px-4 py-3 text-center hidden md:table-cell">
                    ${x.category?`<span class="px-2 py-0.5 rounded-full text-xs font-medium
                            ${x.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">
                          ${x.category}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
                  </td>
                  <td class="px-4 py-3 hidden lg:table-cell">
                    <span class="inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${I.cls}">
                      ${I.label}
                    </span>
                    <p class="text-[11px] text-gray-400 mt-1">${I.detail}</p>
                  </td>
                  <td class="px-4 py-3 text-center">
                    ${H?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`:`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`}
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${H?`<button onclick="window._adminViewSchedule(${x.id},'${ve(x.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${k?"text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100":"text-violet-600 border-transparent hover:text-violet-800"}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${x.id}, '${ve(x.full_name)}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`:'<span class="text-xs text-gray-300">—</span>'}
                  </td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>`}},p=()=>{var k,I,R;const n=(((k=document.getElementById("rt-q"))==null?void 0:k.value)??"").toLowerCase(),c=((I=document.getElementById("rt-cat"))==null?void 0:I.value)??"",x=((R=document.getElementById("rt-dept"))==null?void 0:R.value)??"",j=D.filter(N=>(!n||[N.full_name,N.teacher_code].some(O=>(O??"").toLowerCase().includes(n)))&&(!c||N.category===c)&&(!x||N.dept===x)&&(!E||(E==="scheduled"?a.has(N.id):!a.has(N.id)))),H=document.getElementById("rt-count");H&&(H.textContent=j.length),g(j)};document.querySelectorAll("[data-rt-tab]").forEach(n=>{n.addEventListener("click",()=>i(n.dataset.rtTab))}),i("all"),["rt-q","rt-cat","rt-dept"].forEach(n=>{var c,x;(c=document.getElementById(n))==null||c.addEventListener("input",p),(x=document.getElementById(n))==null||x.addEventListener("change",p)}),window.handleUnlinkTeacher=async(n,c)=>{if(confirm(`ยืนยันยกเลิกบัญชีของ "${c}"?
ครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`))try{await Mn(n),T(`ยกเลิกบัญชี "${c}" แล้ว`,"success"),Je()}catch(x){T("เกิดข้อผิดพลาด: "+(x.message??""),"error")}}}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}}async function wt(){re("classes"),document.getElementById("page-title").textContent="จัดการห้องเรียน",ae(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{const[t,r]=await Promise.all([et(),ue().catch(()=>[])]),s=Object.fromEntries(r.map(m=>[m.id,m])),o=document.getElementById("class-list");if(t.length===0){o.innerHTML=`<div class="text-center py-16 text-gray-400">
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
        ${t.map(m=>{var y,w;return`
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
            ${(y=m.master_subjects)!=null&&y.teacher_id?`<button onclick="window._adminViewSchedule(${m.master_subjects.teacher_id},'${ve(((w=s[m.master_subjects.teacher_id])==null?void 0:w.full_name)??m.master_subjects.subject_name??m.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
            <button onclick="window._adminEditClass(${m.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${m.id},'${(m.class_name??"").replace(/'/g,"")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table></div>`,window._adminClassCache=Object.fromEntries(t.map(m=>[m.id,m])),window._adminEditClass=m=>{var w;const y=(w=window._adminClassCache)==null?void 0:w[m];y&&Gt(null,y)},window._adminDeleteClass=async(m,y)=>{if(confirm(`ยืนยันลบห้องเรียน "${y}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`))try{await Ot(m),T(`ลบห้องเรียน "${y}" แล้ว`,"success"),wt()}catch(w){T("ลบไม่สำเร็จ: "+(w.message??""),"error")}}}catch{T("โหลดข้อมูลห้องเรียนไม่สำเร็จ","error")}}async function Zt(){re("students"),document.getElementById("page-title").textContent="จัดการนักเรียน",ae(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let v=function(e,l,u){var f;(f=document.getElementById("stu-modal"))==null||f.remove();const d=document.createElement("div");d.id="stu-modal",d.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",d.innerHTML=`
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
        </div>`,document.body.appendChild(d),d.querySelector("#stu-close").addEventListener("click",()=>d.remove()),d.querySelector("#stu-cancel").addEventListener("click",()=>d.remove()),d.addEventListener("click",B=>{B.target===d&&d.remove()}),d.querySelector("#sf-auth-pw-fill").addEventListener("click",()=>{d.querySelector("#sf-auth-pw").value=d.querySelector("#sf-code").value.trim()}),d.querySelector("#stu-form").addEventListener("submit",async B=>{B.preventDefault();const C=d.querySelector("#stu-save");C.disabled=!0,C.textContent="กำลังบันทึก...";try{const h={student_code:d.querySelector("#sf-code").value.trim()||null,full_name:d.querySelector("#sf-name").value.trim()||null,main_room:d.querySelector("#sf-main-room").value.trim()||null,religion_room:d.querySelector("#sf-rel-room").value.trim()||null,gender:d.querySelector("#sf-gender-val").value||null,house_color:d.querySelector("#sf-house-color").value.trim()||null,sports_shirt_size:d.querySelector("#sf-shirt-size").value.trim()||null},_=d.querySelector("#sf-auth-email").value.trim()||null,D=d.querySelector("#sf-auth-pw").value.trim()||null;if(!e.profile_id&&!D){T("กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ","warning"),C.disabled=!1,C.textContent="บันทึก";return}await u(h,_||D?{email:_,password:D}:null),T("บันทึกสำเร็จ","success"),d.remove()}catch(h){T("บันทึกไม่สำเร็จ: "+(h.message??""),"error")}finally{C.disabled=!1,C.textContent="บันทึก"}})};const t=await He(),r=pe(t.map(e=>$e(e.main_room))),s=pe(t.map(e=>Te(e.main_room))),o=pe(t.map(e=>e.house_color)),m=pe(t.map(e=>e.sports_shirt_size));ae(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${he} flex-1 min-w-40" />
          <select id="sf-grade" class="${de}">
            <option value="">ทุกระดับชั้น</option>
            ${r.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <select id="sf-room" class="${de}">
            <option value="">ทุกห้อง</option>
            ${s.map(e=>`<option value="${e}">ห้อง ${e}</option>`).join("")}
          </select>
          <select id="sf-gender" class="${de}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <select id="sf-house" class="${de}">
            <option value="">ทุกสี</option>
            ${o.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <select id="sf-shirt" class="${de}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${m.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <select id="sf-page-size" class="${de}">
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
    </div>`);let y=Object.fromEntries(t.map(e=>[e.id,e])),w=1e3;const a=e=>{const l=document.getElementById("student-table-wrap"),u=w==="all"?e:e.slice(0,w);if(document.getElementById("sf-count").textContent=e.length,document.getElementById("sf-showing").textContent=u.length,!e.length){l.innerHTML=`<div class="text-center py-16 text-gray-400">
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
          ${u.map(d=>`
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${d.image_url?`<img src="${d.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(d.full_name??"?").charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${d.full_name??"—"}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${d.student_code??"—"}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${d.main_room??"—"}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${d.religion_room?`<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${d.religion_room}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${d.gender??"—"}</td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${d.house_color?`<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${d.house_color}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${d.sports_shirt_size?`<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${d.sports_shirt_size}</span>`:'<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${d.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${d.id},'${(d.full_name??"").replace(/'/g,"")}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
      ${u.length<e.length?`<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`:""}
      </div>`};window._deleteStudent=async(e,l)=>{if(confirm(`ยืนยันลบนักเรียน "${l}"?
ข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`))try{await Xa(e),delete y[e],t.splice(t.findIndex(u=>u.id===e),1),T(`ลบ "${l}" แล้ว`,"success"),b()}catch(u){T("ลบไม่สำเร็จ: "+(u.message??""),"error")}},window._editStudent=async e=>{const l=y[e];if(!l)return;let u="";try{const{data:d,error:f}=await le.rpc("lookup_student_by_code",{p_student_code:l.student_code});!f&&d&&d[0]&&(u=d[0].login_email||"")}catch(d){console.error(d)}v(l,u,async(d,f)=>{if(await Za(e,d),f&&(f.email||f.password)){const{error:B}=await le.rpc("admin_update_student_auth",{p_student_id:e,p_new_email:f.email||null,p_new_password:f.password||null});if(B)throw B}Object.assign(l,d),y[e]=l,b()})},a(t);const b=()=>{const e=document.getElementById("sf-q").value.toLowerCase(),l=document.getElementById("sf-grade").value,u=document.getElementById("sf-room"),d=u.value,f=pe(t.filter(A=>!l||$e(A.main_room)===l).map(A=>Te(A.main_room)));f.includes(d)||(u.value=""),u.innerHTML='<option value="">ทุกห้อง</option>'+f.map(A=>`<option value="${A}" ${A===u.value?"selected":""}>ห้อง ${A}</option>`).join("");const B=u.value,C=document.getElementById("sf-gender").value,h=document.getElementById("sf-house").value,_=document.getElementById("sf-shirt").value,D=document.getElementById("sf-page-size").value;w=D==="all"?"all":Number(D),a(t.filter(A=>(!e||[A.full_name,A.student_code,A.main_room,A.religion_room].some(E=>(E??"").toLowerCase().includes(e)))&&(!l||$e(A.main_room)===l)&&(!B||Te(A.main_room)===B)&&(!C||A.gender===C)&&(!h||A.house_color===h)&&(!_||A.sports_shirt_size===_)))};["sf-q","sf-grade","sf-room","sf-gender","sf-house","sf-shirt","sf-page-size"].forEach(e=>{var l,u;(l=document.getElementById(e))==null||l.addEventListener("input",b),(u=document.getElementById(e))==null||u.addEventListener("change",b)})}catch{T("โหลดข้อมูลนักเรียนไม่สำเร็จ","error")}}async function vr(){const{getCommentPhrases:t,addCommentPhrase:r,updateCommentPhrase:s,deleteCommentPhrase:o}=await ne(async()=>{const{getCommentPhrases:b,addCommentPhrase:e,updateCommentPhrase:l,deleteCommentPhrase:u}=await import("./api-1xsyVspL.js");return{getCommentPhrases:b,addCommentPhrase:e,updateCommentPhrase:l,deleteCommentPhrase:u}},__vite__mapDeps([0,1])),m=[{key:"general",label:"ทั่วไป"},{key:"profile",label:"โปรไฟล์"},{key:"dates",label:"วันสอน"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"คะแนน"}],y={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},w={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a=document.createElement("div");a.style.cssText="padding:4px 0;";async function v(){const b=await t().catch(()=>[]);a.innerHTML=`
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${m.map(e=>{const l=b.filter(u=>u.metric===e.key);return`
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${y[e.key]};color:${w[e.key]};padding:3px 12px;border-radius:20px;">${e.label}</span>
            <button class="ph-add-btn" data-metric="${e.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${l.map(u=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f9fafb;border-radius:8px;">
                <input class="ph-edit-inp" data-id="${u.id}" value="${u.phrase.replace(/"/g,"&quot;")}"
                  style="flex:1;border:none;background:transparent;font-size:13px;font-family:inherit;outline:none;"/>
                <button class="ph-save-btn" data-id="${u.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #059669;border-radius:6px;background:#d1fae5;color:#065f46;cursor:pointer;font-family:inherit;white-space:nowrap;">
                  บันทึก
                </button>
                <button class="ph-del-btn" data-id="${u.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:6px;background:#fee2e2;color:#dc2626;cursor:pointer;font-family:inherit;">
                  ลบ
                </button>
              </div>`).join("")}
            ${l.length?"":'<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>'}
          </div>
        </div>`}).join("")}
    `,a.querySelectorAll(".ph-add-btn").forEach(e=>{e.onclick=async()=>{const l=prompt("พิมพ์ประโยคใหม่:");l!=null&&l.trim()&&(await r(e.dataset.metric,l.trim()),v())}}),a.querySelectorAll(".ph-save-btn").forEach(e=>{e.onclick=async()=>{const l=a.querySelector(`.ph-edit-inp[data-id="${e.dataset.id}"]`);await s(parseInt(e.dataset.id),l.value.trim()),e.textContent="✓",setTimeout(()=>e.textContent="บันทึก",1e3)}}),a.querySelectorAll(".ph-del-btn").forEach(e=>{e.onclick=async()=>{confirm("ลบประโยคนี้?")&&(await o(parseInt(e.dataset.id)),v())}})}return await v(),a}async function ea(){re("settings"),document.getElementById("page-title").textContent="ตั้งค่าระบบ",ae(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`);try{const[t,r,s]=await Promise.all([ce(),Le().catch(()=>[]),Tn().catch(()=>[])]);t.feedbackQuotaTeacher=t.feedbackQuotaTeacher||"5",t.feedbackQuotaStudent=t.feedbackQuotaStudent||"3",t.freeAttendanceScanLimit=t.freeAttendanceScanLimit||"2",t.freeRandomPickerLimit=t.freeRandomPickerLimit||"1",t.freeTimerLimit=t.freeTimerLimit||"1",t.freeDashboardLimit=t.freeDashboardLimit||"0",t.freePromptAiLimit=t.freePromptAiLimit||"1";const o=["MATH","SC","ENG","THAI","SOC","ART","HEALTH","OCC","VOC","ISL","ARB","BM","BML","MLB"],m=[...new Set([...o,...r.map(u=>u.dept_code).filter(Boolean),...s.map(u=>u.dept).filter(Boolean)])].sort(),y={appColor:"#007bff",loginColor:"#4f46e5",adminColor:"#4f46e5",teacherDefaultColor:"#059669",teacherLanguageColor:"#2563eb",teacherLifeColor:"#059669",teacherAcademicColor:"#ea580c",teacherVocColor:"#7c3aed",teacherReligionColor:"#b45309",studentColor:"#0891b2"},w="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200";window._testGeminiKey=async(u,d,f)=>{var h,_,D,A,E;const B=(_=(h=document.getElementById(d))==null?void 0:h.value)==null?void 0:_.trim(),C=document.getElementById(f);if(!B){C.textContent="⚠️ ยังไม่ได้ใส่ Key",C.className="text-xs text-amber-500 font-medium";return}u.textContent="⏳",u.disabled=!0;try{const L=((A=(D=document.getElementById("cfg-geminiModel"))==null?void 0:D.value)==null?void 0:A.trim())||"gemini-1.5-flash",$=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${L}:generateContent?key=${B}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"hi"}]}]})});if($.ok)C.textContent="✅ ใช้งานได้",C.className="text-xs text-emerald-600 font-semibold";else{const q=((E=(await $.json().catch(()=>({}))).error)==null?void 0:E.message)??`HTTP ${$.status}`;C.textContent=`❌ ${q.slice(0,60)}`,C.className="text-xs text-red-500 font-medium"}}catch{C.textContent="❌ เชื่อมต่อไม่ได้",C.className="text-xs text-red-500 font-medium"}u.textContent="ทดสอบ",u.disabled=!1};const a=({key:u,label:d,type:f,options:B,placeholder:C,hint:h,rows:_,syncFrom:D})=>{const A=t[u]??"",E=`id="cfg-${u}" data-key="${u}"`,L=($,S="")=>`<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${d}</label>
          ${$}
          ${S?`<p class="text-[11px] text-gray-400 mt-1">${S}</p>`:""}
        </div>`;if(f==="color")return L(`
        <div class="flex items-center gap-3">
          <input type="color" ${E} value="${A||y[u]||"#007bff"}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${u}-txt" class="text-sm font-mono text-gray-600">${A||y[u]||"#007bff"}</span>
        </div>`,h);if(f==="date")return L(`<input type="date" ${E} value="${A}" class="${w}" />`,h);if(f==="select")return L(`
        <select ${E} class="${w} bg-white">
          ${(B??[]).map($=>{const S=typeof $=="object"?$.value:$,q=typeof $=="object"?$.label:$;return`<option value="${S}" ${S===A?"selected":""}>${q}</option>`}).join("")}
        </select>`,h);if(f==="textarea")return L(`<textarea ${E} rows="${_??3}" placeholder="${C??""}"
          class="${w} resize-none">${A??""}</textarea>`,h);if(f==="upload")return L(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${A?`<img src="${A}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`:'<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${A?"เปลี่ยนรูป":"อัปโหลดรูป"}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${u}" />
          </label>
          <input type="hidden" ${E} value="${A}" />
        </div>`,h);if(f==="toggle"){const $=A==="true";return L(`
          <button type="button" ${E} data-on="${$}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${$?"bg-emerald-500":"bg-gray-300"}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${$?"28":"2"}px)"></span>
          </button>`,h)}if(f==="password"){const $=/^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(u),S=`const i=document.getElementById('cfg-${u}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`,q=$?`<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${u}','cfg-${u}-st')">ทดสอบ</button>
             <span id="cfg-${u}-st" class="text-xs text-gray-400"></span>`:"";return L(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${E} value="${A}" class="${w} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${S}">ดู</button>
            ${q}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`,h)}return L(D?`
        <div class="flex gap-2 items-center">
          <input type="text" ${E} value="${A??""}" placeholder="${C??""}" class="${w} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${D}','${u}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`:`<input type="text" ${E} value="${A??""}" placeholder="${C??""}" class="${w}" />`,h)},v=[{id:"general",icon:"⚙️",label:"ทั่วไป"},{id:"theme",icon:"🎨",label:"ธีมสี"},{id:"school",icon:"🏫",label:"สถานศึกษา"},{id:"prayer",icon:"🕌",label:"ระบบละหมาด"},{id:"contact",icon:"📞",label:"ติดต่อ"},{id:"payment",icon:"💳",label:"ชำระเงิน"},{id:"package",icon:"📦",label:"แพ็กเกจ"},{id:"student",icon:"👦",label:"นักเรียน"},{id:"phrases",icon:"💬",label:"ประโยคสำเร็จรูป"},{id:"sync",icon:"🔗",label:"Google Sync"},{id:"template",icon:"📄",label:"เทมเพลต ปพ.5"},{id:"schedule",icon:"🗓️",label:"ตารางสอน"},{id:"council",icon:"🏛️",label:"สภานักเรียน"}],b=u=>{const d=(f,B)=>`<div class="mb-6">
          ${f?`<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${f}</p>`:""}
          ${B.map(a).join("")}
        </div>`;if(u==="general")return[d("ปีการศึกษา",[{key:"semester",label:"ภาคเรียนที่",type:"select",options:["1","2"]},{key:"academicYear",label:"ปีการศึกษา (พ.ศ.)",type:"text",placeholder:"เช่น 2568"}]),`<div id="start-new-semester-box" class="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
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
        </div>`,d("หน้าเข้าสู่ระบบ",[{key:"loginColor",label:"สีพื้นหลัง Login",type:"color"},{key:"loginLogoUrl",label:"โลโก้หน้า Login",type:"upload"},{key:"appColor",label:"สีหลักของระบบ",type:"color"},{key:"studentLoginTitle",label:"หัวข้อหลักหน้า Login นักเรียน",type:"text",placeholder:"เข้าสู่ระบบนักเรียน"},{key:"studentLoginSubtitle",label:"Subtitle หน้า Login นักเรียน",type:"text",placeholder:"เช่น โรงเรียนมูลนิธิอาซิซสถาน",hint:"ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน"}]),d("เบ็ดเตล็ด",[{key:"developerCreditText",label:"ข้อความเครดิตผู้พัฒนา",type:"text",placeholder:"พัฒนาโดย..."},{key:"iconTileStyle",label:'รูปแบบไอคอน "ระบบอื่นๆ" ในหน้าภาพรวม',type:"select",options:[{value:"shadow",label:"เงาสีเข้ม (แนะนำ)"},{value:"glossy",label:"เงามันแบบ 3D"},{value:"glass",label:"กระจกฝ้า"}],hint:'กำหนดรูปแบบไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมทั้งฝั่งครูและนักเรียนพร้อมกัน'}])].join("");if(u==="theme")return`
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[{key:"adminColor",label:"แอดมิน"},{key:"teacherDefaultColor",label:"ครูทั่วไป"},{key:"teacherLanguageColor",label:"ครูกลุ่มภาษา"},{key:"teacherLifeColor",label:"ครูกลุ่มชีวิต"},{key:"teacherAcademicColor",label:"ครูกลุ่มวิชาการ"},{key:"teacherVocColor",label:"ครูปวช/สามัญปวช"},{key:"teacherReligionColor",label:"ครูกลุ่มศาสนา"},{key:"studentColor",label:"นักเรียน"}].map(f=>a({...f,type:"color"})).join("")}
        </div>`;if(u==="school"){const f=(B,C)=>[{key:`${B}SchoolName`,label:C.name,type:"text"},{key:`${B}SchoolAddress`,label:"ที่ตั้ง (อำเภอ จังหวัด)",type:"text",placeholder:"อำเภอ... จังหวัด..."},{key:`${B}LogoUrl`,label:"โลโก้สี",type:"upload"},{key:`${B}LogoBwUrl`,label:"โลโก้ขาวดำ",type:"upload"},{key:`${B}DirectorName`,label:"ผู้อำนวยการ",type:"text"},{key:`${B}DirectorSignUrl`,label:"ลายเซ็นผู้อำนวยการ",type:"upload"},{key:`${B}DirectorTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"ผู้อำนวยการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น'},{key:`${B}AcademicHeadName`,label:B==="samai"?"หัวหน้าวิชาการ (สามัญ)":"หัวหน้าวิชาการ",type:"text",syncFrom:B==="samai"?"academic_samai":"academic_pvch"},{key:`${B}AcademicHeadSignUrl`,label:B==="samai"?"ลายเซ็นหัวหน้าวิชาการ (สามัญ)":"ลายเซ็นหัวหน้าวิชาการ",type:"upload"},{key:`${B}AcademicHeadTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น'},...B==="samai"?[{key:"agmAcademicHeadName",label:"หัวหน้าวิชาการ (ศาสนา)",type:"text",syncFrom:"academic_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmAcademicHeadSignUrl",label:"ลายเซ็นหัวหน้าวิชาการ (ศาสนา)",type:"upload"},{key:"agmAcademicHeadTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้าฝ่ายบริหารวิชาการ"}]:[],{key:`${B}RegistrarName`,label:B==="samai"?"หัวหน้าฝ่ายทะเบียน (สามัญ)":"หัวหน้าฝ่ายทะเบียน",type:"text",syncFrom:B==="samai"?"registrar_samai":"registrar_pvch"},{key:`${B}RegistrarSignUrl`,label:B==="samai"?"ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)":"ลายเซ็นหัวหน้าฝ่ายทะเบียน",type:"upload"},{key:`${B}RegistrarTitle`,label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล",hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น'},...B==="samai"?[{key:"agmRegistrarName",label:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"text",syncFrom:"registrar_religion",hint:"ใช้ในเอกสารรายวิชาศาสนา (AGM)"},{key:"agmRegistrarSignUrl",label:"ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)",type:"upload"},{key:"agmRegistrarTitle",label:"ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)",type:"text",placeholder:"หัวหน้างานวัดผลและประเมินผล"}]:[]];return`
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${f("samai",{name:"ชื่อโรงเรียน"}).map(a).join("")}</div>
          <div id="school-porwor" class="hidden">${f("porwor",{name:"ชื่อวิทยาลัย"}).map(a).join("")}</div>`}if(u==="prayer")return[d("ช่วงเวลาภาคเรียน",[{key:"semester_start",label:"วันเปิดภาคเรียน",type:"date",hint:"ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด"},{key:"semester_end",label:"วันปิดภาคเรียน",type:"date"}]),d("การคำนวณคะแนนมาเรียน (วิชาศาสนา)",[{key:"attendanceScoreMode",label:"ตัวหารของคะแนนมาเรียน",type:"select",options:[{value:"recorded",label:"จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)"},{value:"total",label:"จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง"}],hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5'}])].join("");if(u==="contact")return[d("ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)",[{key:"contactPhone",label:"เบอร์โทรศัพท์",type:"text",placeholder:"08x-xxx-xxxx"},{key:"contactLine",label:"LINE OA / LINE ID",type:"text",placeholder:"@lineid"},{key:"contactFacebook",label:"Facebook Page URL",type:"text",placeholder:"https://fb.com/..."},{key:"contactEmail",label:"อีเมลติดต่อ",type:"text",placeholder:"admin@school.ac.th"},{key:"contactOther",label:"ช่องทางอื่น",type:"text",placeholder:"แสดงข้อความตรงๆ เช่น Line OA: ชื่อ"}]),d("โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)",[{key:"feedbackQuotaTeacher",label:"จำนวนครั้งสูงสุด — ครู",type:"select",options:Array.from({length:15},(f,B)=>String(B+1)),hint:"ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน"},{key:"feedbackQuotaStudent",label:"จำนวนครั้งสูงสุด — นักเรียน",type:"select",options:Array.from({length:15},(f,B)=>String(B+1)),hint:"ค่าเริ่มต้น 3 ครั้ง/เดือน"}])].join("");if(u==="payment")return[d("บัญชีรับโอน",[{key:"paymentBankName",label:"ธนาคาร",type:"text",placeholder:"ธนาคารกสิกรไทย"},{key:"paymentAccountName",label:"ชื่อบัญชี",type:"text"},{key:"paymentAccountNo",label:"เลขที่บัญชี",type:"text",placeholder:"xxx-x-xxxxx-x"},{key:"paymentPromptpay",label:"เบอร์/เลข PromptPay",type:"text",placeholder:"08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x"}]),d("QR และหมายเหตุ",[{key:"paymentQrUrl",label:"QR Code PromptPay",type:"upload"},{key:"paymentNote",label:"หมายเหตุ",type:"text",placeholder:"เช่น โอนในวันทำการ จ-ศ 08:00-16:00"}])].join("");if(u==="package"){const B=Array.from({length:5},(D,A)=>{const E=A+1,L=`donationStickerImg${E}`,$=t[L]??"";return`
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${$?`<img src="${$}" class="w-full h-full object-contain" id="sticker-prev-${E}" />`:`<span id="sticker-prev-${E}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${E}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${L}" data-n="${E}" />
              </label>
              ${$?`<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${L}" data-n="${E}">ลบ</button>`:""}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${L}" value="${$}" />
              ${$?`<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${$}</p>`:""}
            </div>
          </div>`}).join(""),C=[{id:"quota",label:"🏆 โควตา / โหมด"},{id:"donation",label:"🎁 Donation"},{id:"popup",label:"💬 ข้อความ Popup"},{id:"legacy",label:"🔧 โหมดเดิม"}],h={quota:[d("การแจ้งเตือนก่อนเข้าสอน",[{key:"notifyBeforeMinutes",label:"แจ้งเตือนก่อนเข้าสอนกี่นาที",type:"text",placeholder:"10",hint:"ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)"}]),d("โหมดระบบโควตา",[{key:"quotaMode",label:"โหมดเมื่อครูครบโควตา",type:"select",options:[{value:"payment",label:"โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)"},{value:"school_sponsored",label:"โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท"}],hint:"เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี"},{key:"freeClassQuota",label:"โควตาห้องฟรี (ห้อง)",type:"text",placeholder:"3"}]),d("โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)",[{key:"freeAttendanceScanLimit",label:"สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)",type:"text",placeholder:"2",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)"},{key:"freeRandomPickerLimit",label:"สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeTimerLimit",label:"จับเวลาเต็มจอ (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)"},{key:"freeDashboardLimit",label:"เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)",type:"text",placeholder:"0",hint:"จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)"},{key:"freePromptAiLimit",label:"สร้าง Prompt AI (ครั้งตลอดชีพ)",type:"text",placeholder:"1",hint:"จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)"},{key:"quizFreeStartLimit",label:"เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)",type:"text",placeholder:"2",hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้'}])].join(""),donation:[d("การแสดงผล",[{key:"donationPromoEnabled",label:"แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน",type:"toggle",hint:"เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)"}]),d("ยอดและปุ่มลัด",[{key:"donationMinAmount",label:"ยอดโดเนทขั้นต่ำ (บาท)",type:"text",placeholder:"99",hint:"ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้"},{key:"donationAmountStep",label:"ช่วงเพิ่มราคาปุ่มลัด (บาท)",type:"text",placeholder:"50",hint:"เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99"},{key:"donationQuickCount",label:"จำนวนปุ่มราคาลัด",type:"text",placeholder:"4",hint:"แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ"}]),d("การ์ดขอบคุณ",[{key:"donationThankYouCard",label:"ข้อความในการ์ดขอบคุณ",type:"textarea",rows:6,placeholder:`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...`,hint:"เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ"}]),`<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(D=>`
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${D}">
                  👁️ ระดับ ${D}
                </button>`).join("")}
              </div>
            </div>`,(()=>{const D=String(t.donationSpecialFeatures??"").trim(),E=D?D.split(`
`).filter(Boolean).map(q=>{const i=q.split("|").map(g=>g.trim());return{icon:i[0]||"✨",text:i[1]||"",minTier:parseInt(i[2])||1}}):[["🌱","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1]].map(([q,i,g])=>({icon:q,text:i,minTier:g})),L=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],$=(q,i)=>i?`border:2px solid ${L[q-1]};color:${L[q-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff",S=(q,i)=>`
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${i}" data-min-tier="${q.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${q.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${q.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(g=>`
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${$(g,q.minTier===g)}" data-n="${g}" title="ระดับ ${g}">${g}</button>`).join("")}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`;return`
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${E.map((q,i)=>S(q,i)).join("")}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(t.donationSpecialFeatures??"").replace(/"/g,"&quot;")}" />
              </div>`})(),d("Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน",[{key:"donationGeminiKey1",label:"API Key หลัก (ลำดับ 1)",type:"password",placeholder:"AIza...",hint:"ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ"},{key:"donationGeminiKey2",label:"API Key สำรอง (ลำดับ 2)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey3",label:"API Key สำรอง (ลำดับ 3)",type:"password",placeholder:"AIza..."},{key:"donationGeminiKey4",label:"API Key สำรอง (ลำดับ 4)",type:"password",placeholder:"AIza..."},{key:"donationGeminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash",hint:"เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)"}]),`<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${B}</div>
            </div>`,d("ระดับตรา/สติกเกอร์ผู้สนับสนุน",[{key:"donationStickerTiers",label:"ตั้งค่าระดับ (textarea)",type:"textarea",rows:6,placeholder:`99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ
149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ
199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ
249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้`,hint:"รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด"}]),d("👑 หน้าอธิบายฟีเจอร์ Smart Classroom",[{key:"smartClassroomLandingTitle",label:"หัวข้อหลัก",type:"text",placeholder:"Smart Classroom — หน้าควบคุมขณะสอนสด"},{key:"smartClassroomLandingDesc",label:"คำอธิบาย",type:"textarea",rows:5,placeholder:"รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...",hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"'},{key:"smartClassroomLandingImg1",label:"รูปภาพประกอบ 1",type:"upload"},{key:"smartClassroomLandingImg2",label:"รูปภาพประกอบ 2",type:"upload"},{key:"smartClassroomLandingImg3",label:"รูปภาพประกอบ 3",type:"upload"}])].join(""),popup:[d("ข้อความใน Popup โหมดใหม่",[{key:"sponsoredHeaderTitle",label:"หัวข้อหลัก",type:"text",placeholder:"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"},{key:"sponsoredBoxTitle",label:"หัวข้อกล่องสีเขียว",type:"text",placeholder:"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"},{key:"sponsoredBoxBody",label:"ข้อความในกล่องสีเขียว",type:"textarea",rows:3,placeholder:"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา..."},{key:"sponsoredDonateBtn",label:"ข้อความปุ่มโดเนท (หลัก)",type:"text",placeholder:"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"},{key:"sponsoredDonateSub",label:"ข้อความปุ่มโดเนท (รอง)",type:"text",placeholder:"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"},{key:"sponsoredAccessBtn",label:"ข้อความปุ่มรับสิทธิ์",type:"text",placeholder:"✨ รับของขวัญจากโรงเรียนเลย"},{key:"sponsoredFooter",label:"ข้อความด้านล่าง",type:"text",placeholder:"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}])].join(""),legacy:[d("โควตาและราคา (โหมดเดิม)",[{key:"pricePerClass",label:"ราคาเพิ่มรายห้อง (บาท)",type:"text",placeholder:"49"},{key:"priceSemester",label:"ราคาแพ็กเกจเหมาทั้งเทอม (บาท)",type:"text",placeholder:"299"}]),d("คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)",[{key:"pkgPerClassDesc",label:"คำอธิบายรายห้อง",type:"text",placeholder:"เพิ่มห้องเรียนได้ 1 ห้อง"},{key:"pkgSemesterDesc",label:"คำอธิบายเหมาทั้งเทอม",type:"text",placeholder:"ไม่จำกัดห้องตลอดภาคเรียน"}])].join("")},_="quota";return`
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${C.map(D=>`
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${D.id===_?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
              data-pstab="${D.id}">${D.label}</button>`).join("")}
          </div>
          ${C.map(D=>`
          <div id="pkg-panel-${D.id}" ${D.id!==_?'class="hidden"':""}>
            ${h[D.id]??""}
          </div>`).join("")}`}if(u==="student")return[d("การแสดงข้อมูลในหน้าจัดการนักเรียนของครู",[{key:"showStudentHouseColor",label:"แสดงคอลัมน์ประจำสี",type:"toggle"},{key:"showStudentSportsShirtSize",label:"แสดงคอลัมน์ไซด์เสื้อกีฬาสี",type:"toggle"}]),d("QR Code นักเรียน (เช็คชื่อละหมาด)",[{key:"studentQrDailyLimit",label:"จำกัดจำนวนครั้งที่สร้างต่อวัน",type:"text",placeholder:"เช่น 3",description:"ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)"},{key:"studentQrExpirySeconds",label:"อายุการใช้งานของ QR Code (วินาที)",type:"text",placeholder:"เช่น 60",description:"ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)"}]),d("ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)",[{key:"qrReissueFee",label:"ค่าธรรมเนียมออกใหม่ (บาท)",type:"text",placeholder:"เช่น 5",description:"จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)"},{key:"qrReissueDoneMessage",label:"ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว",type:"text",placeholder:"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง",description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)'}]),d("ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)",[{key:"forceGradeOptions",label:"รายการเกรด (คั่นด้วยจุลภาค)",type:"text",placeholder:"เช่น 0,ร,มส,มผ",description:"ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน"}]),d("ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet",[{key:"studentSyncSheetId",label:"Google Sheet ID / URL แหล่งข้อมูลนักเรียน",type:"text",placeholder:"วาง ID หรือ URL ของ Google Sheet"},{key:"studentSyncTabName",label:"ชื่อแท็บข้อมูลนักเรียน",type:"text",placeholder:"เช่น students หรือ ชื่อนักเรียน"},{key:"studentSyncHeaderRow",label:"แถวหัวตาราง",type:"text",placeholder:"1"}]),`<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
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
        </div>`].join("");if(u==="sync"){const f=[["classInfoSubjectNameCell","ชื่อรายวิชา"],["classInfoSubjectCodeCell","รหัสวิชา"],["classInfoCreditCell","หน่วยกิต"],["classInfoGradeCell","ชั้นเรียน"],["classInfoHeadStudentCell","หัวหน้าห้อง"],["classInfoDay1Cell","วันสอนคาบ 1"],["classInfoDay2Cell","วันสอนคาบ 2"],["classInfoDay3Cell","วันสอนคาบ 3"],["classInfoDay4Cell","วันสอนคาบ 4"],["classInfoDay5Cell","วันสอนคาบ 5"],["classInfoDay6Cell","วันสอนคาบ 6"],["classInfoTeacherNameCell","ครูผู้สอน"],["classInfoTeacherPhoneCell","เบอร์ติดต่อ"],["classInfoDeptCell","กลุ่มสาระ"],["classInfoHeadDeptCell","หัวหน้าหมวด"]];return`
          ${a({key:"centralGasUrl",label:"Central GAS URL",type:"text",placeholder:"https://script.google.com/macros/s/...",hint:"Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ"})}
          ${a({key:"classInfoTab",label:"ชื่อแท็บข้อมูลรายวิชาในชีทครู",type:"text",placeholder:"ข้อมูลรายวิชา"})}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${f.map(([B,C])=>{const h=t[B]??"";return`<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${C}</p>
                <input type="text" id="cfg-${B}" data-key="${B}" value="${h}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`}).join("")}
          </div>`}return u==="template"?[d("",[{key:"pp5PreviewEditEnabled",label:"ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้",type:"toggle",hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ'}]),`<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${cs.map(f=>a({key:f.key,label:`${f.category} — ${f.label}`,type:"text",placeholder:f.defaultId,hint:`default: ${f.defaultId}`})).join("")}`].join(""):u==="phrases"?vr():u==="schedule"?[d("การแสดงผลตาราง",[{key:"hasFriday",label:"เปิดสอนวันศุกร์",type:"toggle",hint:"เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู"}]),d("AI วิเคราะห์ตาราง (Gemini)",[{key:"scheduleVisionEnabled",label:"เปิดฟีเจอร์วิเคราะห์รูปตาราง",type:"toggle"},{key:"geminiApiKey",label:"Fallback Key ลำดับ 1 (หลัก)",type:"password",hint:"ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ"},{key:"geminiApiKey2",label:"Fallback Key ลำดับ 2",type:"password"},{key:"geminiApiKey3",label:"Fallback Key ลำดับ 3",type:"password"},{key:"geminiApiKey4",label:"Fallback Key ลำดับ 4",type:"password"},{key:"geminiApiKey5",label:"Fallback Key ลำดับ 5",type:"password"},{key:"geminiModel",label:"Gemini Model",type:"text",placeholder:"gemini-2.5-flash"}]),d("Gemini API Key แยกต่อกลุ่มสาระ",m.length?m.map(f=>({key:`geminiKey_${f}`,label:`Key กลุ่มสาระ ${f}`,type:"password",hint:`ครูที่มี dept = ${f} จะใช้ key นี้โดยอัตโนมัติ`})):[{key:"geminiKey_MATH",label:"Key กลุ่มสาระ MATH (ตัวอย่าง)",type:"password"}])].join(""):u==="council"?[d("การแสดงผล",[{key:"council_visible_to_all",label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น',type:"toggle",hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง'},{key:"council_test_student_codes",label:"รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)",type:"textarea",rows:3,placeholder:"เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน",hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน'}])].join(""):""};let e="general";ae(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${v.map(u=>`
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${u.id===e?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-tab="${u.id}">
            <span>${u.icon}</span><span class="hidden sm:inline">${u.label}</span>
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
    </div>`);const l=u=>{var g;e=u,document.querySelectorAll(".cfg-tab").forEach(p=>{const n=p.dataset.tab===u;p.className=`cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${n?"bg-indigo-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`});const d=b(u),f=document.getElementById("cfg-panel-inner");d instanceof Promise?(f.innerHTML='<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>',d.then(p=>{f.innerHTML="",p instanceof Element?f.appendChild(p):f.innerHTML=p??""})):d instanceof Element?(f.innerHTML="",f.appendChild(d)):f.innerHTML=d??"",document.getElementById("cfg-save-hint").textContent="",document.querySelectorAll("#cfg-panel-inner input[type=color]").forEach(p=>{p.addEventListener("input",()=>{const n=document.getElementById(`${p.id}-txt`);n&&(n.textContent=p.value)})});const B=()=>{const n=[...document.querySelectorAll("#feat-editor .feat-row")].map(x=>{var I,R;const j=((I=x.querySelector(".feat-icon"))==null?void 0:I.value.trim())||"✨",H=((R=x.querySelector(".feat-text"))==null?void 0:R.value.trim())||"",k=x.dataset.minTier||"1";return H?`${j}|${H}|${k}`:null}).filter(Boolean).join(`
`),c=document.getElementById("cfg-donationSpecialFeatures");c&&(c.value=n)},C=["#22C55E","#A855F7","#F59E0B","#3B82F6","#D4A017"],h=p=>{var n,c,x;p.querySelectorAll(".feat-tier-btn").forEach(j=>{j.addEventListener("click",()=>{const H=parseInt(j.dataset.n);p.dataset.minTier=String(H),p.querySelectorAll(".feat-tier-btn").forEach(k=>{const I=parseInt(k.dataset.n);k.style.cssText=I===H?`border:2px solid ${C[I-1]};color:${C[I-1]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}),B()})}),(n=p.querySelector(".feat-icon"))==null||n.addEventListener("input",B),(c=p.querySelector(".feat-text"))==null||c.addEventListener("input",B),(x=p.querySelector(".feat-del"))==null||x.addEventListener("click",()=>{p.remove(),B()})};document.querySelectorAll("#feat-editor .feat-row").forEach(h),(g=document.getElementById("feat-add"))==null||g.addEventListener("click",()=>{var x;const p=document.getElementById("feat-editor");if(!p)return;const n=p.children.length,c=document.createElement("div");c.className="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl",c.dataset.idx=n,c.dataset.minTier="1",c.innerHTML=`
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(j=>`
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${j===1?`border:2px solid ${C[0]};color:${C[0]};background:#fff;font-weight:700`:"border:2px solid #e5e7eb;color:#d1d5db;background:#fff"}"
              data-n="${j}" title="ระดับ ${j}">${j}</button>`).join("")}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`,p.appendChild(c),h(c),(x=c.querySelector(".feat-text"))==null||x.focus()}),document.querySelectorAll(".pkg-stab").forEach(p=>{p.addEventListener("click",()=>{var c;const n=p.dataset.pstab;document.querySelectorAll(".pkg-stab").forEach(x=>{x.className=`pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${x.dataset.pstab===n?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.querySelectorAll('[id^="pkg-panel-"]').forEach(x=>x.classList.add("hidden")),(c=document.getElementById(`pkg-panel-${n}`))==null||c.classList.remove("hidden")})}),document.querySelectorAll(".pkg-sticker-upload").forEach(p=>{p.addEventListener("change",async n=>{const c=n.target.files[0];if(!c)return;if(c.type!=="image/png"){T("กรุณาเลือกไฟล์ PNG เท่านั้น","error"),p.value="";return}const x=p.dataset.skey,j=p.dataset.n;p.disabled=!0;try{const H=await gs(x,c),k=document.getElementById(`cfg-${x}`);k&&(k.value=H),await se(x,H);const I=document.getElementById(`sticker-prev-${j}`);if(I){const R=document.createElement("img");R.src=H,R.className="w-full h-full object-contain",I.replaceWith(R),R.id=`sticker-prev-${j}`}T(`อัปโหลดสติกเกอร์ ${j} สำเร็จ ✅`,"success")}catch(H){T("อัปโหลดไม่สำเร็จ: "+(H.message??""),"error")}finally{p.disabled=!1}})});const _=p=>{const n=String(p.donationStickerTiers??"").trim(),c=parseInt(p.donationMinAmount??99)||99,x=parseInt(p.donationAmountStep??50)||50;return(n?n.split(`
`).filter(Boolean).map(k=>{const[I,R,N,O,Q]=k.split("|").map(W=>W.trim());return{amount:parseInt(I)||0,sticker:R||"🏅",title:N||"",note:O||"",color:Q||""}}).filter(k=>k.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([k,I,R,N,O])=>({amount:k,sticker:I,title:R,note:N,color:O}))).sort((k,I)=>k.amount-I.amount).map((k,I)=>{const R=(p[`donationStickerImg${I+1}`]??"").trim();return R&&/^https?:\/\//.test(R)?{...k,sticker:R}:k})},D=p=>{const n=String(p.donationSpecialFeatures??"").trim(),c=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4]];return n?n.split(`
`).filter(Boolean).map(x=>{const j=x.split("|").map(H=>H.trim());return{icon:j[0]||"✨",text:j[1]||j[0]||x,minTier:parseInt(j[2])||1}}).filter(x=>x.text):c.map(([x,j,H])=>({icon:x,text:j,minTier:H}))},A=(p,n,c,x=4)=>{var Q;(Q=document.getElementById("tier-preview-modal"))==null||Q.remove();const j=p.color||"#f59e0b",H=parseInt(j.slice(1,3),16),k=parseInt(j.slice(3,5),16),I=parseInt(j.slice(5,7),16),R=String(p.sticker??""),N=/^https?:\/\//.test(R)?`<img src="${R}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${R}</div>`,O=document.createElement("div");O.id="tier-preview-modal",O.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",O.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${H},${k},${I},0.85),rgba(${H},${k},${I},1))">
              ${N}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${p.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${p.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${c}
              </div>
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษที่คุณครูได้รับ</p>
                <div class="space-y-1.5">
                  ${n.map(W=>x>=(W.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${W.icon}</span><span>${W.text}</span></div>`:`<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${W.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${W.minTier}+</span></div>`).join("")}
                </div>
              </div>
              ${p.note?`<p class="text-xs text-center text-gray-400 italic">"${p.note}"</p>`:""}
              <p class="text-[10px] text-gray-400 text-center leading-relaxed">
                ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
                คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
              </p>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <p class="text-[10px] text-center text-amber-500 mb-2 font-semibold">🔧 โหมดตัวอย่าง (Admin)</p>
              <button class="w-full py-2.5 rounded-2xl text-white font-bold text-sm"
                style="background:rgba(${H},${k},${I},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`,document.body.appendChild(O),O.addEventListener("click",W=>{W.target===O&&O.remove()})};document.querySelectorAll(".tier-preview-btn").forEach(p=>{p.addEventListener("click",()=>{const n=parseInt(p.dataset.tier),c={};document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(I=>{const R=I.id.replace(/^cfg-/,"");c[R]=I.value??I.dataset.on});const x=_(c),j=D(c),H=x[n-1]??x[0];if(!H){T("ยังไม่มีข้อมูล tier","warning");return}const k=(c.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`;A(H,j,k,n)})}),document.querySelectorAll(".pkg-sticker-clear").forEach(p=>{p.addEventListener("click",async()=>{const n=p.dataset.skey,c=p.dataset.n;await se(n,"").catch(()=>{});const x=document.getElementById(`cfg-${n}`);x&&(x.value="");const j=document.getElementById(`sticker-prev-${c}`);j&&(j.outerHTML=`<span id="sticker-prev-${c}" class="text-2xl text-gray-300">🏅</span>`),p.remove(),T("ลบสติกเกอร์แล้ว","success")})}),document.querySelectorAll(".school-stab").forEach(p=>{p.addEventListener("click",()=>{const n=p.dataset.stab;document.querySelectorAll(".school-stab").forEach(c=>{c.className=`school-stab px-5 py-2 rounded-xl text-sm font-semibold ${c.dataset.stab===n?"bg-indigo-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}),document.getElementById("school-samai").classList.toggle("hidden",n!=="samai"),document.getElementById("school-porwor").classList.toggle("hidden",n!=="porwor")})});const E=document.getElementById("btn-sync-students-now"),L=document.getElementById("btn-download-student-sync-template");L&&L.addEventListener("click",()=>{const n="\uFEFF"+[["รหัสนักเรียน","ชื่อ-สกุล","ห้องสามัญ","ห้องศาสนา","เพศ","รูปภาพ","ประจำสี","ไซด์เสื้อกีฬาสี"],["24166","นายตัวอย่าง นักเรียน","ม.5/2 Delima","อป.1/9 An-Nasa'i","ชาย","https://example.com/student-photo.jpg","เขียว","L"]].map(H=>H.map(k=>`"${String(k).replace(/"/g,'""')}"`).join(",")).join(`
`),c=new Blob([n],{type:"text/csv;charset=utf-8"}),x=URL.createObjectURL(c),j=document.createElement("a");j.href=x,j.download="pp5-students-sync-template.csv",document.body.appendChild(j),j.click(),j.remove(),URL.revokeObjectURL(x),T("ดาวน์โหลดเท็มเพลทแล้ว ✅","success")});const $=document.getElementById("btn-start-new-semester"),S=document.getElementById("start-new-semester-target");if($){const p=parseInt(t.semester??1),n=parseInt(t.academicYear??new Date().getFullYear()+543),c=p===1?2:1,x=p===1?n:n+1;S&&(S.textContent=`ตอนนี้: ภาคเรียนที่ ${p}/${n}  →  จะขึ้นเป็น: ภาคเรียนที่ ${c}/${x}`),$.addEventListener("click",async()=>{if(confirm(`ยืนยันขึ้นภาคเรียนที่ ${c}/${x}?

ระบบจะสร้างห้องเรียนใหม่ (เปล่า ไม่มีคะแนน/คอลัมน์เดิม) ให้ทุกวิชาที่มีอยู่ในภาคเรียนที่ ${p}/${n} แล้วลงทะเบียนนักเรียนอัตโนมัติตามห้องสามัญ/ห้องศาสนาปัจจุบัน

ห้องเรียนเทอมเก่าจะไม่ถูกลบ ยังแก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ`)){$.disabled=!0,$.textContent="⏳ กำลังดำเนินการ...";try{const j=await jn(x,c);t.semester=String(c),t.academicYear=String(x),T(`ขึ้นภาคเรียนที่ ${c}/${x} สำเร็จ ✅ สร้างห้องเรียนใหม่ ${j.classes_created} ห้อง · ลงทะเบียนนักเรียนอัตโนมัติ ${j.students_enrolled} คน`,"success"),l("general")}catch(j){T("ขึ้นภาคเรียนใหม่ไม่สำเร็จ: "+(j.message??""),"error"),$.disabled=!1,$.textContent="🔄 ขึ้นภาคเรียนใหม่"}}})}const q=p=>{const n=document.getElementById("student-sync-log-section"),c=document.getElementById("student-sync-log-content");if(!n||!c)return;const x=new Date(p.synced_at),j=x.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),H=x.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),k=p.triggered_by==="auto"?"⏱ อัตโนมัติ":"👆 มือ",I=(p.new_students||[]).map(N=>`<span class="text-green-700">${N.full_name} (${N.student_code})</span>`).join(", ")||"—",R=(p.deactivated_students||[]).map(N=>`<span class="text-red-500">${N.full_name} (${N.student_code})</span>`).join(", ")||"—";c.innerHTML=`
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${j} ${H}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${k}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${p.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${p.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${p.new_count} คน:</span> ${I}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${p.deactivated_count} คน:</span> ${R}
          </div>`,n.classList.remove("hidden")},i=async()=>{try{const{data:p}=await le.from("student_sync_logs").select("*").order("synced_at",{ascending:!1}).limit(1).maybeSingle();p&&q(p)}catch{}};i(),E&&E.addEventListener("click",async()=>{var x,j,H,k,I,R;const p=((j=(x=document.getElementById("cfg-studentSyncSheetId"))==null?void 0:x.value)==null?void 0:j.trim())||"",n=((k=(H=document.getElementById("cfg-studentSyncTabName"))==null?void 0:H.value)==null?void 0:k.trim())||"",c=((R=(I=document.getElementById("cfg-studentSyncHeaderRow"))==null?void 0:I.value)==null?void 0:R.trim())||"1";E.disabled=!0,E.textContent="กำลังซิงก์...";try{await Promise.all([se("studentSyncSheetId",p),se("studentSyncTabName",n),se("studentSyncHeaderRow",c)]);const N=await ps({sourceSheetId:p,tabName:n,headerRow:c}),O=`ซิงก์สำเร็จ: อ่าน ${N.read??0} แถว / บันทึก ${N.written??0} คน / ใหม่ ${N.newCount??0} / ซ่อน ${N.deactivatedCount??0} ✅`;T(O,"success"),i()}catch(N){T("ซิงก์นักเรียนไม่สำเร็จ: "+(N.message??""),"error")}finally{E.disabled=!1,E.textContent="🔄 ซิงก์นักเรียนตอนนี้"}}),document.querySelectorAll("#cfg-panel-inner .cfg-upload-file").forEach(p=>{p.addEventListener("change",async n=>{var H,k;const c=n.target.files[0];if(!c)return;const x=p.dataset.key,j=document.getElementById(`cfg-${x}`);p.disabled=!0;try{const I=await xs(x,c);j&&(j.value=I),await se(x,I),T("อัปโหลดสำเร็จ ✅","success");const R=(H=p.closest(".flex"))==null?void 0:H.querySelector("img"),N=(k=p.closest(".flex"))==null?void 0:k.querySelector("div.w-14");R?R.src=I:N&&(N.outerHTML=`<img src="${I}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />`)}catch(I){T("อัปโหลดไม่สำเร็จ: "+(I.message??""),"error")}finally{p.disabled=!1}})})};document.querySelectorAll(".cfg-tab").forEach(u=>u.addEventListener("click",()=>l(u.dataset.tab))),l(e),window._syncPositionToField=async(u,d,f)=>{const B=f.textContent;f.disabled=!0,f.textContent="กำลังดึง...";try{const C=s.find(_=>_.position===u);if(!C){T(`ยังไม่มีครูที่กำหนดบทบาท "${u}"`,"warning");return}const h=document.getElementById(`cfg-${d}`);h&&(h.value=C.full_name,h.dispatchEvent(new Event("input")),T(`ดึงชื่อ "${C.full_name}" สำเร็จ`,"success"))}catch{T("ดึงข้อมูลไม่สำเร็จ","error")}finally{f.disabled=!1,f.textContent=B}},document.getElementById("cfg-save-btn").addEventListener("click",async()=>{const u=document.getElementById("cfg-save-btn"),d=document.querySelectorAll("#cfg-panel-inner [data-key]");u.disabled=!0,u.textContent="กำลังบันทึก...";try{await Promise.all([...d].map(f=>{const B=f.tagName==="BUTTON"?f.dataset.on??"false":f.value;return se(f.dataset.key,B)})),await Wt("admin",{},!0),T("บันทึกสำเร็จ ✅","success"),document.getElementById("cfg-save-hint").textContent=`บันทึกล่าสุด: ${new Date().toLocaleTimeString("th-TH")}`}catch(f){console.error("บันทึกการตั้งค่าไม่สำเร็จ:",f),T("บันทึกไม่สำเร็จ: "+((f==null?void 0:f.message)||"ไม่ทราบสาเหตุ"),"error")}finally{u.disabled=!1,u.textContent="บันทึก"}})}catch{T("โหลดการตั้งค่าไม่สำเร็จ","error")}}async function ta(){re("departments"),document.getElementById("page-title").textContent="กลุ่มสาระการเรียนรู้",ae(`<div class="max-w-6xl mx-auto animate-fade">
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
  </div>`);try{tt(await Le())}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}}function tt(t){const r=document.getElementById("dept-table-wrap");if(r){if(!t.length){r.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🗂️</p>
      <p class="font-medium">ยังไม่มีกลุ่มสาระในระบบ</p>
    </div>`;return}r.innerHTML=`
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
        ${t.map(s=>`
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
    </table>`}}async function at(){re("periods"),document.getElementById("page-title").textContent="คาบและเวลาเรียน",ae(`<div class="max-w-2xl mx-auto animate-fade">
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
  </div>`);try{const t=await Fa();window._periodsCache=Object.fromEntries(t.map(s=>[s.id,s]));const r=document.getElementById("period-list");if(!t.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🕐</p><p class="font-medium">ยังไม่มีข้อมูลคาบเรียน</p>
      </div>`;return}r.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-center">คาบที่</th>
          <th class="px-5 py-3 text-center">เวลาเริ่ม</th>
          <th class="px-5 py-3 text-center">เวลาสิ้นสุด</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${t.map(s=>{var o,m;return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 text-center">
            <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm
                         inline-flex items-center justify-center">${s.period_no}</span>
          </td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(o=s.start_time)==null?void 0:o.slice(0,5)}</td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${(m=s.end_time)==null?void 0:m.slice(0,5)}</td>
          <td class="px-5 py-3 text-right">
            <button onclick="openPeriodModal(${s.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeletePeriod(${s.id})"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}}function wr(t){const r=[];let s=[],o="",m=!1;for(let a=0;a<String(t??"").length;a++){const v=t[a],b=t[a+1];m?v==='"'&&b==='"'?(o+='"',a++):v==='"'?m=!1:o+=v:v==='"'?m=!0:v===","?(s.push(o),o=""):v===`
`?(s.push(o),r.push(s),s=[],o=""):v!=="\r"&&(o+=v)}if((o||s.length)&&(s.push(o),r.push(s)),r.length<2)return[];const y=r[0].map(a=>a.trim()),w=["subject_name","subject_code","dept","grade_level","strand","topic","item_no","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"];return r.slice(1).map(a=>{const v=Object.fromEntries(y.map((e,l)=>[e,a[l]??""])),b={};return w.forEach(e=>{const l=String(v[e]??"").trim();if(e==="item_no"){const u=Number(l);b[e]=l&&Number.isFinite(u)?u:null}else b[e]=l||null}),b}).filter(a=>a.subject_name||a.subject_code||a.standard_text||a.indicator_text||a.learning_outcome_text)}function be(t,r,s="",o="text"){const m=o==="textarea"?`<textarea name="${t}" rows="3" dir="auto" class="${he} w-full min-h-[92px] resize-y">${J(s)}</textarea>`:`<input name="${t}" value="${J(s)}" dir="auto" class="${he} w-full" />`;return`<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${r}</span>
    ${m}
  </label>`}async function qe(){var t;re("curriculum"),document.getElementById("page-title").textContent="จัดการหลักสูตร",ae(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{let r=window._curriculumFilters||{q:"",dept:"",gradeLevel:"",subjectCode:""};const[s,o]=await Promise.all([Va(r),Le().catch(()=>[])]),m=pe([...o.map(e=>e.dept_name),...o.map(e=>e.dept_code),...s.map(e=>e.dept)]),y=pe(s.map(e=>e.grade_level)),w=Object.fromEntries(s.map(e=>[e.id,e]));window._curriculumRows=w;const a=(e={})=>{const l=!!e.id,u=document.createElement("div");u.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",u.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${l?"แก้ไขข้อมูลหลักสูตร":"เพิ่มข้อมูลหลักสูตร"}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${be("subject_name","ชื่อรายวิชา",e.subject_name)}
            ${be("subject_code","รหัสวิชา",e.subject_code)}
            ${be("dept","กลุ่มสาระ/กลุ่มวิชา",e.dept)}
            ${be("grade_level","ระดับชั้น",e.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${be("strand","สาระ",e.strand)}
            ${be("topic","เรื่อง/สาระการเรียนรู้",e.topic)}
            ${be("item_no","ลำดับข้อ",e.item_no??"")}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${be("standard_code","รหัสมาตรฐาน",e.standard_code)}
            ${be("indicator_code","รหัสตัวชี้วัด",e.indicator_code)}
          </div>
          ${be("standard_text","มาตรฐานการเรียนรู้",e.standard_text,"textarea")}
          ${be("indicator_text","ตัวชี้วัด",e.indicator_text,"textarea")}
          ${be("learning_outcome_text","ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)",e.learning_outcome_text,"textarea")}
          ${be("source_note","แหล่งที่มา/หมายเหตุ",e.source_note,"textarea")}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`,document.body.appendChild(u),u.querySelectorAll("[data-close]").forEach(d=>d.addEventListener("click",()=>u.remove())),u.querySelector("#curriculum-form").addEventListener("submit",async d=>{d.preventDefault();const f=new FormData(d.currentTarget),B={};["subject_name","subject_code","dept","grade_level","strand","topic","standard_code","standard_text","indicator_code","indicator_text","learning_outcome_text","source_note"].forEach(_=>{B[_]=String(f.get(_)??"").trim()||null});const C=String(f.get("item_no")??"").trim(),h=Number(C);B.item_no=C&&Number.isFinite(h)?h:null;try{l?await Ua(e.id,B):await Ga(B),T("บันทึกข้อมูลหลักสูตรแล้ว","success"),u.remove(),await qe()}catch(_){T(_.message||"บันทึกไม่สำเร็จ","error")}})},v=()=>{const e=document.createElement("div"),l="subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note";e.className="fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
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
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${he} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${he} w-full font-mono text-xs" placeholder="${l}
ภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`,document.body.appendChild(e),e.querySelectorAll("[data-close]").forEach(u=>u.addEventListener("click",()=>e.remove())),e.querySelector("#curriculum-csv-file").addEventListener("change",u=>{var B;const d=(B=u.target.files)==null?void 0:B[0];if(!d)return;const f=new FileReader;f.onload=()=>{e.querySelector("#curriculum-csv-text").value=f.result||""},f.readAsText(d)}),e.querySelector("#curriculum-import-submit").addEventListener("click",async()=>{const u=wr(e.querySelector("#curriculum-csv-text").value);if(!u.length)return T("ไม่พบข้อมูลที่นำเข้าได้","warning");try{const d=await Wa(u);T(`นำเข้าแล้ว ${d} รายการ`,"success"),e.remove(),await qe()}catch(d){T(d.message||"นำเข้าไม่สำเร็จ","error")}})};window._curriculumOpenModal=()=>a(),window._curriculumEdit=e=>{var l;return a(((l=window._curriculumRows)==null?void 0:l[e])||{})},window._curriculumDelete=async e=>{if(confirm("ลบข้อมูลหลักสูตรรายการนี้?"))try{await Ya(e),T("ลบข้อมูลแล้ว","success"),await qe()}catch(l){T(l.message||"ลบไม่สำเร็จ","error")}},window._curriculumOpenImport=v,ae(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
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
        <input id="cur-filter-q" value="${J(r.q)}" class="${he}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${J(r.subjectCode)}" class="${he}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${de}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${m.map(e=>`<option value="${J(e)}" ${e===r.dept?"selected":""}>${J(e)}</option>`).join("")}
        </select>
        <select id="cur-filter-grade" class="${de}">
          <option value="">ทุกระดับชั้น</option>
          ${y.map(e=>`<option value="${J(e)}" ${e===r.gradeLevel?"selected":""}>${J(e)}</option>`).join("")}
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
              ${s.length?s.map(e=>`<tr class="hover:bg-gray-50/70 align-top">
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-900">${J(e.subject_name||"ไม่ระบุวิชา")}</div>
                  <div class="text-indigo-500 font-mono">${J(e.subject_code||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${J(e.dept||"—")} · ${J(e.grade_level||"ทุกชั้น")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${J(e.topic||"—")}</div>
                  <div class="text-xs text-gray-400 mt-1">${J(e.strand||"")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${J(e.standard_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${J(e.standard_text||"—")}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${J(e.indicator_code||"")}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${J(e.indicator_text||e.learning_outcome_text||"—")}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${ve(e.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${ve(e.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join(""):'<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>`);const b=()=>{var e,l,u,d;r={q:((e=document.getElementById("cur-filter-q"))==null?void 0:e.value)||"",subjectCode:((l=document.getElementById("cur-filter-code"))==null?void 0:l.value)||"",dept:((u=document.getElementById("cur-filter-dept"))==null?void 0:u.value)||"",gradeLevel:((d=document.getElementById("cur-filter-grade"))==null?void 0:d.value)||""},window._curriculumFilters=r,qe()};["cur-filter-q","cur-filter-code"].forEach(e=>{var l;(l=document.getElementById(e))==null||l.addEventListener("keydown",u=>{u.key==="Enter"&&b()})}),["cur-filter-dept","cur-filter-grade"].forEach(e=>{var l;(l=document.getElementById(e))==null||l.addEventListener("change",b)}),(t=document.getElementById("cur-filter-submit"))==null||t.addEventListener("click",b)}catch(r){ae(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${J(r.message||r)}
    </div>`)}}async function De(){var t;re("subjects"),document.getElementById("page-title").textContent="จัดการรายวิชา",ae(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[r,s,o,m,y]=await Promise.all([Ze(),et(),ue().catch(()=>[]),Le().catch(()=>[]),ce().catch(()=>({}))]),w=Object.fromEntries(o.map(E=>[E.id,E])),a=Object.fromEntries(m.map(E=>[E.dept_code,E])),v=Object.fromEntries(m.map(E=>[E.dept_name,E])),b=E=>{var L;return{...E,_teacher_name:((L=w[E.teacher_id])==null?void 0:L.full_name)??""}},e=r.map(b),l=s.map(E=>{var L;return{...E,master_subjects:E.master_subjects?{...E.master_subjects,_teacher_name:((L=w[E.master_subjects.teacher_id])==null?void 0:L.full_name)??""}:E.master_subjects}}),u=pe(e.map(E=>E.dept)),d=pe(e.map(E=>E.skill_group));let f={sheetId:y.subjectSyncSheetId||ds,tabName:y.subjectSyncTabName||lt,keyField:y.subjectSyncKeyField||Bt,columns:(()=>{try{const E=JSON.parse(y.subjectSyncColumns||"null");return Array.isArray(E)&&E.length?E:ot}catch{return ot}})()};ae(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${J(f.tabName||lt)}
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
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${he} flex-1 min-w-40" />
          <select id="subf-dept" class="${de}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${u.map(E=>`<option value="${E}">${E}</option>`).join("")}
          </select>
          <select id="subf-skill" class="${de}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${d.map(E=>`<option value="${E}">${E}</option>`).join("")}
          </select>
          <select id="subf-subg" class="${de}">
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
    </div>`);let C="course";const h=()=>{const E=document.getElementById("sub-action-btn");E&&(E.innerHTML=C==="course"?"<span>＋</span> เพิ่มคอร์ส":C==="class"?"<span>＋</span> เพิ่มรายวิชา":"<span>✓</span> บันทึกตั้งค่า");const L=document.getElementById("btn-sync-subjects-central");L&&(L.textContent=`↑ ซิงค์รายวิชา → ${f.tabName||lt}`)},_=()=>e.map(E=>{const L=w[E.teacher_id]??{},$=a[E.dept]??v[E.dept]??{},S=L.full_name??"",q=E.subject_name??"",i=E.subject_code??"";return{subject_group:E.subject_group??"",sbJect:`${q}_(${i})_${S}`,subject_name:q,subject_code:i,credit:E.credit??"",year:y.academicYear??"",semester:y.semester??"",grade_level:E.grade_level??"",teacher_name:S,teacher_code:L.teacher_code??"",dept_name:$.dept_name??E.dept??"",dept_code:$.dept_code??E.dept??""}}),D=()=>{var L;const E=new Set(f.columns);document.getElementById("subject-table-wrap").innerHTML=`
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${J(f.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${J(f.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${Tt.map($=>`
                <option value="${J($.key)}" ${f.keyField===$.key?"selected":""}>
                  ${J($.key)} - ${J($.label)}
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
            ${Tt.map($=>`
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${J($.key)}" ${E.has($.key)?"checked":""} />
                <span>
                  <span class="font-semibold">${J($.key)}</span>
                  <span class="block text-xs text-gray-400">${J($.label)}</span>
                </span>
              </label>
            `).join("")}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`,(L=document.getElementById("subject-sync-select-defaults"))==null||L.addEventListener("click",()=>{document.querySelectorAll(".subject-sync-col").forEach($=>{$.checked=ot.includes($.value)})})},A=()=>{var q;if((q=document.getElementById("subject-filter-bar"))==null||q.classList.toggle("hidden",C==="sync"),h(),C==="sync"){D();return}const E=document.getElementById("subf-q").value.toLowerCase(),L=document.getElementById("subf-dept").value,$=document.getElementById("subf-skill").value,S=document.getElementById("subf-subg").value;if(C==="course"){const i=e.filter(g=>(!E||[g.subject_code,g.subject_name,g.dept].some(p=>(p??"").toLowerCase().includes(E)))&&(!L||g.dept===L)&&(!$||g.skill_group===$)&&(!S||g.subject_group===S));document.getElementById("subf-count").textContent=i.length,_t(i)}else{const i=l.filter(g=>{var p,n;return(!E||(g.class_name??"").toLowerCase().includes(E)||(((p=g.master_subjects)==null?void 0:p.subject_name)??"").toLowerCase().includes(E))&&(!L||((n=g.master_subjects)==null?void 0:n.dept)===L)});document.getElementById("subf-count").textContent=i.length,_r(i)}};window._subAction=async()=>{var E,L,$;if(C==="course")_s(null,async(S,q=[])=>{await Ka(S,q),await De()});else if(C==="class")$r();else{const S=((E=document.getElementById("subject-sync-sheet-id"))==null?void 0:E.value.trim())??"",q=((L=document.getElementById("subject-sync-tab-name"))==null?void 0:L.value.trim())??"",i=(($=document.getElementById("subject-sync-key-field"))==null?void 0:$.value)??Bt,g=[...document.querySelectorAll(".subject-sync-col:checked")].map(x=>x.value),p=g.includes(i)?g:[i,...g];if(!S||!q){T("กรุณากรอก Sheet ID และชื่อแท็บปลายทาง","warning");return}if(!p.length){T("กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์","warning");return}const n=document.getElementById("sub-action-btn"),c=n==null?void 0:n.innerHTML;n&&(n.disabled=!0,n.textContent="กำลังบันทึก...");try{await Promise.all([se("subjectSyncSheetId",S),se("subjectSyncTabName",q),se("subjectSyncKeyField",i),se("subjectSyncColumns",JSON.stringify(p))]),f={sheetId:S,tabName:q,keyField:i,columns:p},h(),T("บันทึกตั้งค่าซิงค์รายวิชาแล้ว","success")}catch(x){T("บันทึกตั้งค่าไม่สำเร็จ: "+(x.message??""),"error")}finally{n&&(n.disabled=!1,n.innerHTML=c),h()}}},window._adminRegisterClass=async E=>{const L=e.find($=>$.id===E);L?ws(null,L):T("ไม่พบคอร์ส","error")},window._adminEditClass=E=>{var $;const L=($=window._adminClassCache)==null?void 0:$[E];L?Gt(null,L):T("ไม่พบข้อมูลห้องเรียน","error")},window._adminScoreCols=(E,L)=>{window._goBack=()=>De(),fs(null,E,L)},window._adminDeleteClass=async(E,L)=>{if(confirm(`ยืนยันลบ "${L}"?
ข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`))try{await Ot(E),T(`ลบ "${L}" แล้ว`,"success"),A()}catch($){T("ลบไม่สำเร็จ: "+($.message??""),"error")}},(t=document.getElementById("btn-sync-subjects-central"))==null||t.addEventListener("click",async E=>{const L=E.currentTarget,$=L.textContent;try{L.disabled=!0,L.textContent="กำลังซิงค์...";const S=await is(_(),{sheetId:f.sheetId,tabName:f.tabName,headers:f.columns,keyField:f.keyField});T(`ส่งคำสั่งซิงค์รายวิชา ${S} รายการไปแท็บ ${f.tabName} แล้ว`,"success")}catch(S){T("ซิงค์รายวิชาไม่สำเร็จ: "+(S.message??""),"error")}finally{L.disabled=!1,L.textContent=$}}),window._switchSubjectTab=E=>{C=E,document.getElementById("stab-course").className=E==="course"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-class").className=E==="class"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("stab-sync").className=E==="sync"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",A()},["subf-q","subf-dept","subf-skill","subf-subg"].forEach(E=>{var L,$;(L=document.getElementById(E))==null||L.addEventListener("input",A),($=document.getElementById(E))==null||$.addEventListener("change",A)}),A()}catch{T("โหลดรายวิชาไม่สำเร็จ","error")}}function _t(t){const r=document.getElementById("subject-table-wrap");if(r){if(!t.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">📚</p><p class="font-medium">ไม่พบรายวิชา</p></div>`;return}r.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
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
      ${t.map(s=>`
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
          ${s.teacher_id?`<button onclick="window._adminViewSchedule(${s.teacher_id},'${ve(s._teacher_name||s.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`:""}
          <button onclick="openSubjectModal(${s.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${s.id},'${ve(s.subject_name)}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join("")}
    </tbody>
  </table></div>`}}function _r(t){const r=document.getElementById("subject-table-wrap");if(r){if(window._adminClassCache=Object.fromEntries(t.map(s=>[s.id,s])),!t.length){r.innerHTML=`<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">🏫</p><p class="font-medium">ไม่พบรายวิชาที่เปิดสอน</p></div>`;return}r.innerHTML=`<div class="overflow-x-auto"><table class="w-full text-sm">
    <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
      <tr>
        <th class="px-4 py-3 text-left">ห้อง / วิชา</th>
        <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">Sheet</th>
        <th class="px-4 py-3 text-right">จัดการ</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-50">
      ${t.map(s=>{var o,m,y,w;return`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${s.class_name??"—"}</p>
          <p class="text-xs text-indigo-500">${((o=s.master_subjects)==null?void 0:o.subject_name)??"—"}</p>
          ${(m=s.master_subjects)!=null&&m._teacher_name?`<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${s.master_subjects._teacher_name}</p>`:""}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${(y=s.master_subjects)!=null&&y.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${s.master_subjects.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center hidden md:table-cell">
          ${s.google_sheet_id?'<span class="text-green-500 text-xs">✓</span>':'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-right">
          ${(w=s.master_subjects)!=null&&w.teacher_id?`<button onclick="window._adminViewSchedule(${s.master_subjects.teacher_id},'${ve(s.master_subjects._teacher_name||s.master_subjects.subject_name||s.class_name)}')"
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
  </table></div>`}}async function aa(){var e;re("homeroom"),document.getElementById("page-title").textContent="ครูที่ปรึกษา";const t=await ce().catch(()=>({})),r=parseInt(t.academicYear??new Date().getFullYear()+543),s=parseInt(t.semester??1);ae(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาคเรียน ${s}/${r}</p>
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
  </div>`);const[o,m,y]=await Promise.all([ue().catch(()=>[]),Qa().catch(()=>[]),zt().catch(()=>[])]);let w="สามัญ";const a=l=>Object.fromEntries(l.filter(u=>u.category===w).map(u=>[u.main_room,u])),v=()=>{document.querySelectorAll(".hr-tab").forEach(l=>{const u=l.dataset.hrTab===w;l.className=u?"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition":"hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition"})},b=async()=>{v();const l=await Et(r,s),u=a(l),d=w==="สามัญ"?m:y,f=document.getElementById("homeroom-table-wrap");if(!d.length){f.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${w}</p></div>`;return}f.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${d.map(B=>{var h,_;const C=u[B];return`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${B}</td>
          <td class="px-5 py-3 text-gray-600">
            ${C?`<span class="font-medium text-gray-800">${((h=C.teachers)==null?void 0:h.full_name)??"—"}</span>
                 <span class="text-xs text-gray-400 ml-1">${(_=C.teachers)!=null&&_.teacher_code?`(${C.teachers.teacher_code})`:""}</span>`:`<button onclick="window._openHomeroomPicker('${ve(B)}','${w}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${ve(B)}','${w}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${C?"เปลี่ยน":"เลือกครู"}</button>
            ${C?`<button onclick="window._deleteHomeroom(${C.id},'${ve(B)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`:""}
          </td>
        </tr>`}).join("")}
      </tbody>
    </table>`};await b(),window._deleteHomeroom=async(l,u)=>{if(confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${u}?`))try{await Ja(l),T("ลบแล้ว","success"),await b()}catch{T("ลบไม่สำเร็จ","error")}},window._openHomeroomPicker=(l,u)=>{var D;(D=document.getElementById("hr-picker"))==null||D.remove();let d=null;const f=document.createElement("div");f.id="hr-picker",f.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",f.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${u} · ห้อง ${l}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${de}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${de}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`,document.body.appendChild(f);const B=f.querySelector("#hrp-results"),C=f.querySelector("#hrp-save"),h=A=>{B.innerHTML=A.length?A.slice(0,20).map(E=>`
          <button type="button" data-id="${E.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${E.teacher_code??"—"}</span>
            <span class="font-medium text-gray-800">${E.full_name}</span>
          </button>`).join(""):'<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>',B.querySelectorAll(".hrp-option").forEach(E=>{E.addEventListener("click",()=>{d=o.find(L=>String(L.id)===E.dataset.id),B.querySelectorAll(".hrp-option").forEach(L=>L.classList.remove("bg-emerald-50","text-emerald-700")),E.classList.add("bg-emerald-50","text-emerald-700"),C.disabled=!1})})},_=()=>{const A=f.querySelector("#hrp-code").value.trim().toLowerCase(),E=f.querySelector("#hrp-name").value.trim().toLowerCase();h(o.filter(L=>(!A||(L.teacher_code??"").toLowerCase().includes(A))&&(!E||(L.full_name??"").toLowerCase().includes(E))))};f.querySelector("#hrp-close").addEventListener("click",()=>f.remove()),f.addEventListener("click",A=>{A.target===f&&f.remove()}),f.querySelector("#hrp-code").addEventListener("input",_),f.querySelector("#hrp-name").addEventListener("input",_),C.addEventListener("click",async()=>{if(d){C.disabled=!0,C.textContent="กำลังบันทึก...";try{await Ft({teacher_id:d.id,main_room:l,category:u,academic_year:r,semester:s}),T("บันทึกครูที่ปรึกษาสำเร็จ","success"),f.remove(),await b()}catch(A){T("บันทึกไม่สำเร็จ: "+(A.message??""),"error"),C.disabled=!1,C.textContent="เลือกครูที่ปรึกษา"}}}),h(o)},document.querySelectorAll(".hr-tab").forEach(l=>{l.addEventListener("click",async()=>{w=l.dataset.hrTab,await b()})}),(e=document.getElementById("hr-export-csv"))==null||e.addEventListener("click",async()=>{try{const l=await Et(r,s),u=a(l),d=w==="สามัญ"?m:y,f=["ห้อง","ชื่อสกุลครูที่ปรึกษา","เบอร์ติดต่อ"],B=d.map(A=>{var L,$;const E=u[A];return[A,((L=E==null?void 0:E.teachers)==null?void 0:L.full_name)??"",(($=E==null?void 0:E.teachers)==null?void 0:$.phone)??""]}),C="\uFEFF"+[f,...B].map(A=>A.map(E=>`"${String(E).replace(/"/g,'""')}"`).join(",")).join(`
`),h=new Blob([C],{type:"text/csv;charset=utf-8"}),_=URL.createObjectURL(h),D=document.createElement("a");D.href=_,D.download=`ครูที่ปรึกษา-${w}-${s}-${r}.csv`,document.body.appendChild(D),D.click(),D.remove(),URL.revokeObjectURL(_),T("ดาวน์โหลด CSV แล้ว ✅","success")}catch(l){T("ดาวน์โหลดไม่สำเร็จ: "+(l.message??""),"error")}})}async function na(){re("score-col-config"),document.getElementById("page-title").textContent="คอลัมน์คะแนน (Sheet)";const t=b=>{let e=0;for(const l of b)e=e*26+l.charCodeAt(0)-64;return e},r=b=>{let e="";for(;b>0;)b--,e=String.fromCharCode(65+b%26)+e,b=Math.floor(b/26);return e},s=(b,e)=>{const l=[];for(let u=t(b);u<=t(e);u++)l.push(r(u));return l},o=[{label:"EH – EV (กลางภาค/ระหว่างเรียน)",cols:s("EH","EV"),color:"bg-blue-100 text-blue-700 border-blue-300"},{label:"EX – FE (ปลายภาค)",cols:s("EX","FE"),color:"bg-purple-100 text-purple-700 border-purple-300"}];o.flatMap(b=>b.cols);const m=["วิชาการ","ภาษา","ชีวิต","ศาสนามัธยม","ศาสนาปวช","สามัญปวช"],y=["ระหว่างเรียน","กลางภาค","ปลายภาค"],w=await en().catch(()=>[]),a={};m.forEach(b=>{a[b]={},y.forEach(e=>{const l=w.find(u=>u.skill_group===b&&u.assignment_type===e);a[b][e]=new Set(l?l.allowed_columns.split(",").map(u=>u.trim()).filter(Boolean):[])})});const v=(b,e)=>o.map(l=>`
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${l.label}</span>
      ${l.cols.map(u=>`<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${a[b][e].has(u)?"bg-emerald-500 text-white border-emerald-500":"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
          data-sg="${b}" data-at="${e}" data-col="${u}">
          ${u}
        </button>`).join("")}
    </div>`).join("");ae(`<div class="max-w-5xl mx-auto animate-fade">
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
      ${o.map(b=>`
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded ${b.color.split(" ")[0]} border ${b.color.split(" ")[2]}"></span>
        <span class="text-gray-600 font-mono font-medium">${b.label}</span>
      </div>`).join("")}
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded bg-emerald-500"></span>
        <span class="text-gray-600">= เลือกแล้ว</span>
      </div>
    </div>

    <!-- Grid per skill group -->
    <div class="space-y-4">
      ${m.map(b=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${b}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${b}"
              ${w.find(e=>e.skill_group===b&&e.is_fixed)?"checked":""} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${y.map(e=>`
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${e}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${b.replace(/\s/g,"_")}-${e.replace(/\s/g,"_")}">
                  ${a[b][e].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${v(b,e)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${b}" data-at="${e}">ล้าง</button>
            </div>
          </div>`).join("")}
        </div>
      </div>`).join("")}
    </div>
  </div>`),document.addEventListener("click",b=>{const e=b.target.closest(".col-btn");if(!e)return;const{sg:l,at:u,col:d}=e.dataset;a[l][u].has(d)?(a[l][u].delete(d),e.className=e.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")):(a[l][u].add(d),e.className=e.className.replace("bg-white text-gray-500 border-gray-200 hover:border-gray-400","bg-emerald-500 text-white border-emerald-500"));const f=document.getElementById(`scc-count-${l.replace(/\s/g,"_")}-${u.replace(/\s/g,"_")}`);f&&(f.textContent=`${a[l][u].size} คอลัมน์`);const B=document.querySelector(`.scc-clear-btn[data-sg="${l}"][data-at="${u}"]`);B&&(B.style.opacity=a[l][u].size>0?"1":"0.3")}),document.querySelectorAll(".scc-clear-btn").forEach(b=>{b.addEventListener("click",()=>{const{sg:e,at:l}=b.dataset;a[e][l].clear(),document.querySelectorAll(`.col-btn[data-sg="${e}"][data-at="${l}"]`).forEach(d=>{d.className=d.className.replace("bg-emerald-500 text-white border-emerald-500","bg-white text-gray-500 border-gray-200 hover:border-gray-400")});const u=document.getElementById(`scc-count-${e.replace(/\s/g,"_")}-${l.replace(/\s/g,"_")}`);u&&(u.textContent="0 คอลัมน์")})}),document.getElementById("scc-save-btn").addEventListener("click",async()=>{const b=document.getElementById("scc-save-btn");b.disabled=!0,b.textContent="กำลังบันทึก...";try{const e=[];m.forEach(l=>{var d;const u=((d=document.querySelector(`.scc-lock[data-sg="${l}"]`))==null?void 0:d.checked)??!1;y.forEach(f=>{const B=[...a[l][f]].join(",");B&&e.push({skill_group:l,assignment_type:f,allowed_columns:B,is_fixed:u})})});for(const l of e)await tn(l);T(`บันทึก ${e.length} รายการสำเร็จ ✅`,"success")}catch(e){T("บันทึกไม่สำเร็จ: "+(e.message??""),"error")}finally{b.disabled=!1,b.textContent="💾 บันทึกทั้งหมด"}})}async function $r(){re("subjects"),document.getElementById("page-title").textContent="เลือกคอร์สวิชา";const t=await Ze().catch(()=>[]);document.getElementById("main-content").innerHTML=`
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
                ${t.map(r=>`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-3">
                    <p class="font-semibold text-gray-800">${r.subject_name}</p>
                    <p class="text-xs font-mono text-indigo-500">${r.subject_code??"—"}</p>
                  </td>
                  <td class="px-5 py-3 hidden sm:table-cell">
                    ${r.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${r.dept}</span>`:"—"}
                  </td>
                  <td class="px-5 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${r.grade_level??"—"}</td>
                  <td class="px-5 py-3 text-right">
                    <button onclick="window._adminRegisterClass(${r.id})"
                      class="btn-primary px-4 py-1.5 text-white text-xs font-medium rounded-lg">
                      ลงทะเบียนห้อง
                    </button>
                  </td>
                </tr>`).join("")}
              </tbody>
            </table>`:'<div class="text-center py-16 text-gray-400"><p class="text-4xl mb-3">📖</p><p>ยังไม่มีคอร์สวิชา — สร้างคอร์สก่อน</p></div>'}
      </div>
    </div>`,window.renderSubjects=De}async function sa(){var m;re("holidays"),document.getElementById("page-title").textContent="วันหยุดโรงเรียน";const t=await ce().catch(()=>({})),r=t.academicYear??t.academic_year??new Date().getFullYear()+543,s=t.semester??1,o=async()=>{const y=await an(r,s).catch(()=>[]),w=document.getElementById("holiday-table");if(w){if(!y.length){w.innerHTML=`<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`;return}w.innerHTML=`<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
        <tr>
          <th class="px-4 py-3 text-left">วันที่</th>
          <th class="px-4 py-3 text-left">คำอธิบาย</th>
          <th class="px-4 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${y.map(a=>`
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 font-mono text-indigo-600">${a.holiday_date}</td>
            <td class="px-4 py-3 text-gray-700">${a.description??"—"}</td>
            <td class="px-4 py-3 text-right">
              <button onclick="window._deleteHoliday(${a.id})"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join("")}
      </tbody>
    </table>`}};ae(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${r} ภาค ${s} — ระบบจะ highlight วันนี้ในตารางเช็คชื่อ</p>
    </div>

    <!-- Add form -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-700 mb-3">เพิ่มวันหยุด</h3>
      <div class="flex flex-wrap gap-3">
        <input id="hol-date" type="date" class="${he} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${he} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`),await o(),(m=document.getElementById("hol-add"))==null||m.addEventListener("click",async()=>{const y=document.getElementById("hol-date").value,w=document.getElementById("hol-desc").value.trim()||null;if(!y){T("กรุณาเลือกวันที่","warning");return}const a=parseInt(y.slice(0,4),10),v=new Date().getFullYear();if(Math.abs(a-v)>3){T(`ปี ${a} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${v}) กรุณาตรวจสอบวันที่อีกครั้ง`,"error");return}try{await Oa({holiday_date:y,description:w,academic_year:r,semester:s}),document.getElementById("hol-date").value="",document.getElementById("hol-desc").value="",T("เพิ่มวันหยุดแล้ว","success"),await o()}catch(b){T("เกิดข้อผิดพลาด: "+(b.message??""),"error")}}),window._deleteHoliday=async y=>{if(confirm("ลบวันหยุดนี้?"))try{await za(y),T("ลบแล้ว","success"),await o()}catch{T("ลบไม่สำเร็จ","error")}}}function ra(){re("import"),document.getElementById("page-title").textContent="นำเข้าข้อมูล CSV",ae(`
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

    </div>`);let t="teachers",r=[];window.switchImportTab=m=>{t=m,r=[],document.getElementById("import-preview").classList.add("hidden");const y={teachers:"<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)",students:"<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size"};document.getElementById("import-hint").innerHTML=y[m],document.getElementById("tab-teachers").className=m==="teachers"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",document.getElementById("tab-students").className=m==="students"?"px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white":"px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"};const s=m=>{if(!m||!m.name.endsWith(".csv")){T("กรุณาเลือกไฟล์ .csv เท่านั้น","warning");return}const y=new FileReader;y.onload=w=>{r=Es(w.target.result),document.getElementById("preview-count").textContent=`พบข้อมูล ${r.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`,document.getElementById("preview-table").innerHTML=Ss(r,t),document.getElementById("import-preview").classList.remove("hidden")},y.readAsText(m,"UTF-8")};document.getElementById("csv-file").addEventListener("change",m=>s(m.target.files[0]));const o=document.getElementById("drop-zone");o.addEventListener("dragover",m=>{m.preventDefault(),o.classList.add("border-indigo-400","bg-indigo-50")}),o.addEventListener("dragleave",()=>o.classList.remove("border-indigo-400","bg-indigo-50")),o.addEventListener("drop",m=>{m.preventDefault(),o.classList.remove("border-indigo-400","bg-indigo-50"),s(m.dataTransfer.files[0])}),document.getElementById("btn-import").addEventListener("click",async()=>{if(!r.length)return;const m=document.getElementById("btn-import"),y=document.getElementById("import-progress"),w=document.getElementById("progress-bar"),a=document.getElementById("progress-text");m.disabled=!0,y.classList.remove("hidden");const v=(b,e)=>{const l=Math.round(b/e*100);w.style.width=l+"%",a.textContent=`${b} / ${e} แถว`};try{const e=await(t==="teachers"?$s:ks)(r,v);if(T(`นำเข้าสำเร็จ ${e} รายการ`,"success"),w.style.width="100%",t==="students"){a.textContent="กำลังรีเฟรชรายชื่อในห้องเรียน...";try{const l=await Bn();T(`รีเฟรชรายชื่อห้องเรียนแล้ว (${(l==null?void 0:l.enrolled)??0} รายการ)`,"success")}catch{}a.textContent=`นำเข้าสำเร็จ ${e} รายการ — รีเฟรชห้องเรียนแล้ว`}}catch(b){T("นำเข้าไม่สำเร็จ: "+(b.message??""),"error")}finally{m.disabled=!1}})}async function oa(){var m,y,w;re("payments"),document.getElementById("page-title").textContent="การชำระเงิน",ae(`<div class="max-w-2xl mx-auto animate-fade">
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
      ${["ทั้งหมด","รอตรวจสอบ","อนุมัติแล้ว","ปฏิเสธ"].map((a,v)=>`<button class="pay-tab text-sm font-medium px-3 py-2 border-b-2 transition
          ${v===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-400 hover:text-gray-600"}"
          data-filter="${["all","pending","approved","rejected"][v]}">${a}</button>`).join("")}
    </div>

    <div id="pay-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div>
        <p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`);let t=[],r="all";const s=()=>{const a=document.getElementById("pay-list");if(!a)return;const v={pending:0,approved:1,rejected:2},b=(r==="all"?t:t.filter(e=>e.status===r)).slice().sort((e,l)=>{const u=(v[e.status]??9)-(v[l.status]??9);return u!==0?u:new Date(l.created_at)-new Date(e.created_at)});if(!b.length){a.innerHTML=`<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`;return}a.innerHTML=b.map(e=>{var f,B,C,h,_;const l={pending:{label:"⏳ รอตรวจสอบ",cls:"bg-amber-100 text-amber-700"},approved:{label:"✅ อนุมัติแล้ว",cls:"bg-emerald-100 text-emerald-700"},rejected:{label:"❌ ปฏิเสธ",cls:"bg-red-100 text-red-700"}}[e.status]??{label:e.status,cls:"bg-gray-100 text-gray-600"},u={semester:`📦 เหมาทั้งเทอม (${e.amount??299} บ.)`,per_subject:`📘 รายห้อง ${parseInt(e.room_count??1)||1} ห้อง (${e.amount??49} บ.)`,donation:`☕ โดเนท ${e.amount??0} บ.`,school_sponsored:"🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)"}[e.package_type]??`${e.package_type} (${e.amount??0} บ.)`,d=new Date(e.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${e.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${e.status==="pending"?`<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${e.id}" data-teacher="${(f=e.teachers)==null?void 0:f.id}" data-pkg="${e.package_type}" />`:""}
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(((B=e.teachers)==null?void 0:B.full_name)??"?").charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${((C=e.teachers)==null?void 0:C.full_name)??"—"}</p>
              <p class="text-xs text-gray-400">รหัส ${((h=e.teachers)==null?void 0:h.teacher_code)??"—"} · ${((_=e.teachers)==null?void 0:_.phone)??"—"}</p>
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
            <span class="font-medium text-gray-700">${u}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">ส่งเมื่อ</span>
            <span class="text-gray-600">${d}</span>
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
            data-url="${J(e.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>`:`
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${e.status==="pending"?(()=>{var D,A,E;return e.package_type==="donation"?`
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${e.id}" data-teacher="${(D=e.teachers)==null?void 0:D.id}">
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
              data-id="${e.id}" data-teacher="${(E=e.teachers)==null?void 0:E.id}" data-pkg="${e.package_type}">
              ✅ อนุมัติ
            </button>
          </div>`})():""}
      </div>`}).join(""),a.querySelectorAll(".donate-ack-btn").forEach(e=>{e.addEventListener("click",async()=>{var d,f;const u=((d=(await ce().catch(()=>({}))).donationThankYouCard)==null?void 0:d.trim())||"ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏";if(confirm(`รับทราบการโดเนทนี้?
ระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)){e.disabled=!0,e.textContent="⏳ กำลังดำเนินการ...";try{await Ue(parseInt(e.dataset.id),"approved",u),await nt(parseInt(e.dataset.teacher),"donation"),T("รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว","success"),(f=window._refreshPaymentBadge)==null||f.call(window),t=await _e(),s()}catch{T("เกิดข้อผิดพลาด","error"),e.disabled=!1,e.textContent="☕ รับทราบ / ขอบคุณ"}}})}),a.querySelectorAll(".approve-btn").forEach(e=>{e.addEventListener("click",async()=>{var d;const l=e.dataset.pkg==="school_sponsored";if(confirm(l?"อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?":`อนุมัติคำขอนี้?
ครูจะสามารถสร้างห้องเรียนได้ทันที`)){e.disabled=!0,e.textContent="⏳ กำลังอนุมัติ...";try{await Ue(parseInt(e.dataset.id),"approved"),await nt(parseInt(e.dataset.teacher),e.dataset.pkg),T("อนุมัติแล้ว ✅","success"),(d=window._refreshPaymentBadge)==null||d.call(window),t=await _e(),s()}catch{T("เกิดข้อผิดพลาด","error"),e.disabled=!1,e.textContent=l?"🏫 อนุมัติสิทธิ์":"✅ อนุมัติ"}}})}),a.querySelectorAll(".reject-btn").forEach(e=>{e.addEventListener("click",()=>{Er(parseInt(e.dataset.id),async l=>{var u;await Ue(parseInt(e.dataset.id),"rejected",l),T("ปฏิเสธแล้ว","info"),(u=window._refreshPaymentBadge)==null||u.call(window),t=await _e(),s()})})}),a.querySelectorAll(".view-slip-btn").forEach(e=>{e.addEventListener("click",()=>kr(e.dataset.url))})};try{t=await _e(),s()}catch{T("โหลดข้อมูลไม่สำเร็จ","error")}document.querySelectorAll(".pay-tab").forEach(a=>{a.addEventListener("click",()=>{r=a.dataset.filter,document.querySelectorAll(".pay-tab").forEach(v=>{v.classList.toggle("border-indigo-600",v===a),v.classList.toggle("text-indigo-600",v===a),v.classList.toggle("border-transparent",v!==a),v.classList.toggle("text-gray-400",v!==a)}),s()})}),(m=document.getElementById("pay-refresh"))==null||m.addEventListener("click",async()=>{t=await _e(),s(),T("รีเฟรชแล้ว","success")}),document.getElementById("pay-list").addEventListener("change",a=>{if(!a.target.classList.contains("pay-cb"))return;const v=document.querySelectorAll(".pay-cb:checked"),b=document.getElementById("pay-bulk-approve");v.length>0?(b.classList.remove("hidden"),b.textContent=`✅ อนุมัติ ${v.length} คน`):b.classList.add("hidden")});const o=async a=>{var b,e;let v=0;for(const l of a)try{await Ue(parseInt(l.id),"approved"),await nt(parseInt(l.teacher),l.pkg),v++}catch{}T(`อนุมัติ ${v}/${a.length} รายการ ✅`,"success"),(b=window._refreshPaymentBadge)==null||b.call(window),t=await _e(),s(),(e=document.getElementById("pay-bulk-approve"))==null||e.classList.add("hidden")};(y=document.getElementById("pay-bulk-approve"))==null||y.addEventListener("click",async()=>{const a=[...document.querySelectorAll(".pay-cb:checked")];a.length&&confirm(`อนุมัติ ${a.length} คนที่เลือก?`)&&await o(a.map(v=>({id:v.dataset.id,teacher:v.dataset.teacher,pkg:v.dataset.pkg})))}),(w=document.getElementById("pay-approve-all"))==null||w.addEventListener("click",async()=>{const a=t.filter(v=>v.status==="pending");if(!a.length){T("ไม่มีรายการที่รออนุมัติ","info");return}confirm(`อนุมัติทั้งหมด ${a.length} รายการ?`)&&await o(a.map(v=>{var b;return{id:v.id,teacher:(b=v.teachers)==null?void 0:b.id,pkg:v.package_type}}))})}async function kr(t){const r=document.createElement("div");r.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4",r.innerHTML=`
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${J(t)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`,document.body.appendChild(r),r.querySelector("button").addEventListener("click",()=>r.remove()),r.addEventListener("click",a=>{a.target===r&&r.remove()});const s=r.querySelector("#slip-viewer"),o=r.querySelector("#slip-download"),m=await Yn(t),y=J(m),w=String(m).split("?")[0].toLowerCase().endsWith(".pdf");o&&(o.href=m),s&&(s.innerHTML=w?`<iframe src="${y}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`:`<img src="${y}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`)}function Er(t,r){const s=document.createElement("div");s.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`,document.body.appendChild(s),s.querySelector("#rj-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#rj-confirm").addEventListener("click",async()=>{const o=s.querySelector("#reject-note").value.trim()||null;s.remove(),await r(o)})}async function la(){re("life-skill-admin"),document.getElementById("page-title").textContent="คะแนนทักษะชีวิต";const t=await ce().catch(()=>({})),r=parseInt(t.academicYear??2568),s=parseInt(t.semester??1),o=async()=>{const y=await rn(r,s,"สามัญ").catch(()=>[]);m(y)},m=y=>{var B;const w=C=>`
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
        </table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>',v=C=>C.replace("SheetId","SheetTab"),b=C=>C.replace("SheetId","StudentRange"),e=(C,h)=>`
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${h})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${C}" value="${t[C]??""}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${C}" value="${t[v(C)]??""}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${C}" value="${t[b(C)]??"J8:J3000"}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${C}" data-tab-key="${v(C)}" data-range-key="${b(C)}">บันทึก</button>
        </div>
      </div>`;ae(`<div class="max-w-5xl mx-auto animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${s} / ${r}</p>
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
    </div>`);const l=[...y];(B=document.getElementById("btn-fill-ls-classes"))==null||B.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนทักษะชีวิตไปยังรายวิชากลุ่มทักษะชีวิตทั้งหมด?"))return;const C=document.getElementById("btn-fill-ls-classes"),h=C.textContent;C.disabled=!0,C.textContent="กำลังเติม...";try{const _=await xn(r,s);T(`เติมทักษะชีวิต ${_.classes} รายวิชา / ${_.scores} คะแนนแล้ว`,"success")}catch(_){T("เติมไม่สำเร็จ: "+(_.message??""),"error")}finally{C.disabled=!1,C.textContent=h}});const u=async()=>{var p;document.getElementById("lsk-tab-actions").innerHTML=`
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
        </div>`;const[{columns:C,scores:h},_]=await Promise.all([wn(r,s).catch(()=>({columns:[],scores:[]})),He().catch(()=>[])]),D=(C??[]).filter(n=>n.category==="สามัญ"),A={};for(const n of h)A[n.student_id]||(A[n.student_id]={}),A[n.student_id][n.column_id]=n.score;const E=_.filter(n=>(n==null?void 0:n.id)&&(n==null?void 0:n.student_code)&&(n==null?void 0:n.main_room)).sort((n,c)=>(n.main_room??"").localeCompare(c.main_room??"",void 0,{numeric:!0})||(n.student_code??"").localeCompare(c.student_code??"")),L=document.getElementById("lsk-filter-grade"),$=document.getElementById("lsk-filter-room");L.innerHTML='<option value="">ทุกระดับชั้น</option>'+pe(E.map(n=>$e(n.main_room))).map(n=>`<option value="${n}">${n}</option>`).join("");const S=()=>{const n=L.value,c=$.value,x=pe(E.filter(j=>!n||$e(j.main_room)===n).map(j=>Te(j.main_room)));$.innerHTML='<option value="">ทุกห้อง</option>'+x.map(j=>`<option value="${j}" ${j===c?"selected":""}>ห้อง ${j}</option>`).join(""),c&&!x.includes(c)&&($.value="")},q=n=>{if(document.getElementById("lsk-filter-count").textContent=`${n.length} คน`,!n.length){document.getElementById("lsk-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("lsk-score-table").innerHTML=`
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${D.map(c=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${c.name}<br><span class="font-normal text-gray-400">(${c.max_score})</span></th>`).join("")}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${n.map((c,x)=>{const j=D.reduce((H,k)=>{var I;return H+(((I=A[c.id])==null?void 0:I[k.id])??0)},0);return`<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${x+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${c.student_code??"—"}</td>
                  <td class="px-3 py-2 text-gray-800">${c.full_name??"—"}</td>
                  <td class="px-3 py-2 text-gray-400">${c.main_room??"—"}</td>
                  ${D.map(H=>{var I;const k=(I=A[c.id])==null?void 0:I[H.id];return`<td class="px-2 py-2 text-center ${k!=null?"text-gray-800 font-medium":"text-gray-300"}">${k??"—"}</td>`}).join("")}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${j||"—"}</td>
                </tr>`}).join("")}
            </tbody>
          </table>`};S();let i=[...E];q(i);const g=()=>{S();const n=L.value,c=$.value,x=document.getElementById("lsk-filter-search").value.toLowerCase();i=E.filter(j=>{var H,k;return(!n||$e(j.main_room)===n)&&(!c||Te(j.main_room)===c)&&(!x||((H=j.full_name)==null?void 0:H.toLowerCase().includes(x))||((k=j.student_code)==null?void 0:k.includes(x)))}),q(i)};L.addEventListener("change",g),$.addEventListener("change",g),document.getElementById("lsk-filter-search").addEventListener("input",g),(p=document.getElementById("btn-sync-ls"))==null||p.addEventListener("click",async()=>{const n=document.getElementById("btn-sync-ls");n.disabled=!0,n.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:c}=await ne(async()=>{const{syncCentralBatch:R}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(N=>N.n);return{syncCentralBatch:R}},__vite__mapDeps([10,4,1,11,6,9]));if(!D.length){T("ยังไม่มีคอลัมน์สำหรับซิงค์","warning");return}if(!t.lifeSkillSheetIdSamai)throw new Error("ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)");const x=i.map(R=>({id:R.id,student_code:R.student_code})),j=new Set(x.map(R=>R.id)),H=new Set(D.map(R=>R.id)),k=h.filter(R=>j.has(R.student_id)&&H.has(R.column_id)),I=await c(t.lifeSkillSheetIdSamai,t.lifeSkillSheetTabSamai,D,k,x,{studentColRange:t.lifeSkillStudentRangeSamai||"J8:J3000"});if(!I){T("ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}T(`ส่งคำสั่ง Sync ทักษะชีวิต ${x.length} คน / ${I} คะแนนแล้ว`,"success")}catch(c){T("Sync ไม่สำเร็จ: "+(c.message??""),"error")}finally{n.disabled=!1,n.textContent="↑ Sync ไปชีทกลาง"}})},d=()=>{document.getElementById("lsk-tab-actions").innerHTML=`
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`,document.getElementById("lsk-tab-content").innerHTML=`<div class="space-y-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${y.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${a(y)}</div>
          ${e("lifeSkillSheetIdSamai","สามัญ")}
        </div>
      </div>`,document.getElementById("lsk-add-btn").addEventListener("click",()=>qt(null,r,s,o)),document.querySelectorAll(".lsk-edit").forEach(C=>{C.addEventListener("click",()=>{const h=l.find(_=>_.id===+C.dataset.id);h&&qt(h,r,s,o)})}),document.querySelectorAll(".lsk-del").forEach(C=>{C.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${C.dataset.name}"?`))try{await _n(+C.dataset.id),T("ลบแล้ว","success"),o()}catch(h){T("ลบไม่สำเร็จ: "+(h.message??""),"error")}})}),document.querySelectorAll(".lsk-save-sheet").forEach(C=>{C.addEventListener("click",async()=>{var S,q,i;const h=C.dataset.key,_=C.dataset.tabKey,D=C.dataset.rangeKey,A=((S=document.getElementById(`lsk-sheet-${h}`))==null?void 0:S.value.trim())??"",E=((q=document.getElementById(`lsk-tab-${h}`))==null?void 0:q.value.trim())??"",L=((i=document.getElementById(`lsk-range-${h}`))==null?void 0:i.value.trim())??"J8:J3000",$=C.textContent;C.disabled=!0,C.textContent="⏳";try{await Promise.all([se(h,A),se(_,E),se(D,L)]),t[h]=A,t[_]=E,t[D]=L,C.textContent="✅",C.style.background="#16a34a",setTimeout(()=>{C.disabled=!1,C.textContent=$,C.style.background=""},1500),T("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),C.disabled=!1,C.textContent=$}})})},f=C=>{document.querySelectorAll("[data-tab]").forEach(h=>{const _=h.dataset.tab===C;h.className=_?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),C==="scores"?u():d()};document.getElementById("lsk-tab-scores").addEventListener("click",()=>f("scores")),document.getElementById("lsk-tab-config").addEventListener("click",()=>f("config")),f("scores")};o()}function qt(t,r,s,o){var w;(w=document.getElementById("lsk-modal"))==null||w.remove();const m=!!t,y=document.createElement("div");y.id="lsk-modal",y.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",y.innerHTML=`
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
    </div>`,document.body.appendChild(y),y.querySelector("#lsk-cancel").addEventListener("click",()=>y.remove()),y.addEventListener("click",a=>{a.target===y&&y.remove()}),y.querySelector("#lsk-form").addEventListener("submit",async a=>{a.preventDefault();const v=y.querySelector("#lsk-save");v.disabled=!0,v.textContent="กำลังบันทึก...";try{const b={name:y.querySelector("#lsk-name").value.trim(),max_score:parseInt(y.querySelector("#lsk-max").value)||20,sort_order:parseInt(y.querySelector("#lsk-order").value)||0,sheet_col:y.querySelector("#lsk-sheetcol").value.trim().toUpperCase()||null,category:"สามัญ",academic_year:r,semester:s};m?await In(t.id,b):await Cn(b),T("บันทึกสำเร็จ","success"),y.remove(),o()}catch(b){T("บันทึกไม่สำเร็จ: "+(b.message??""),"error"),v.disabled=!1,v.textContent=m?"บันทึก":"เพิ่ม"}})}const Sr=t=>{const r=Ut(t);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${r.cls}">${r.label}</span>`};async function da(){re("reading-admin"),document.getElementById("page-title").textContent="คะแนนอ่านคิดวิเคราะห์";const t=await ce().catch(()=>({})),r=parseInt(t.academicYear??2568),s=parseInt(t.semester??1);At(t);const o=e=>`
    <tr class="hover:bg-gray-50 transition" data-id="${e.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${e.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${e.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${e.sheet_col??"—"}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${e.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${e.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${e.id}" data-name="${e.name}">ลบ</button>
      </td>
    </tr>`;let m=[];const y=async()=>{var l;m=await on(r,s).catch(()=>[]),w();const e=((l=document.querySelector("[data-tab].bg-white"))==null?void 0:l.dataset.tab)??"scores";b(e)},w=()=>{ae(`<div class="max-w-5xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${s} / ${r}</p>
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
    </div>`),document.getElementById("rsa-tab-scores").addEventListener("click",()=>b("scores")),document.getElementById("rsa-tab-config").addEventListener("click",()=>b("config"))},a=async()=>{var E,L;document.getElementById("rsa-tab-actions").innerHTML=`
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
      </div>`;const[{columns:e,scores:l},u]=await Promise.all([fn(r,s).catch(()=>({columns:[],scores:[]})),He().catch(()=>[])]),d={};for(const $ of l)d[$.student_id]||(d[$.student_id]={}),d[$.student_id][$.column_id]=$.score;const f=u.filter($=>($==null?void 0:$.id)&&($==null?void 0:$.student_code)&&($==null?void 0:$.main_room)).sort(($,S)=>($.main_room??"").localeCompare(S.main_room??"",void 0,{numeric:!0})||($.student_code??"").localeCompare(S.student_code??"")),B=document.getElementById("rsa-filter-grade"),C=document.getElementById("rsa-filter-room");B.innerHTML='<option value="">ทุกระดับชั้น</option>'+pe(f.map($=>$e($.main_room))).map($=>`<option value="${$}">${$}</option>`).join("");const h=()=>{const $=B.value,S=C.value,q=pe(f.filter(i=>!$||$e(i.main_room)===$).map(i=>Te(i.main_room)));C.innerHTML='<option value="">ทุกห้อง</option>'+q.map(i=>`<option value="${i}" ${i===S?"selected":""}>ห้อง ${i}</option>`).join(""),S&&!q.includes(S)&&(C.value="")},_=$=>{if(document.getElementById("rsa-filter-count").textContent=`${$.length} คน`,!$.length){document.getElementById("rsa-score-table").innerHTML='<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>';return}document.getElementById("rsa-score-table").innerHTML=`
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${e.map(S=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${S.name}<br><span class="font-normal text-gray-400">(${S.max_score})</span></th>`).join("")}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${$.map((S,q)=>{const i=e.reduce((n,c)=>{var x;return n+(((x=d[S.id])==null?void 0:x[c.id])??0)},0),g=i/2,p=i>0?Sr(g):'<span class="text-gray-300">—</span>';return`<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${q+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${S.student_code??"—"}</td>
                <td class="px-3 py-2 text-gray-800">${S.full_name??"—"}</td>
                <td class="px-3 py-2 text-gray-400">${S.main_room??"—"}</td>
                ${e.map(n=>{var x;const c=(x=d[S.id])==null?void 0:x[n.id];return`<td class="px-2 py-2 text-center ${c!=null?"text-gray-800 font-medium":"text-gray-300"}">${c??"—"}</td>`}).join("")}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${i||"—"}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${i>0?g.toFixed(1).replace(/\.0$/,""):"—"}</td>
                <td class="px-3 py-2 text-center">${p}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`};h();let D=[...f];_(D);const A=()=>{h();const $=B.value,S=C.value,q=document.getElementById("rsa-filter-search").value.toLowerCase();D=f.filter(i=>{var g,p;return(!$||$e(i.main_room)===$)&&(!S||Te(i.main_room)===S)&&(!q||((g=i.full_name)==null?void 0:g.toLowerCase().includes(q))||((p=i.student_code)==null?void 0:p.includes(q)))}),_(D)};B.addEventListener("change",A),C.addEventListener("change",A),document.getElementById("rsa-filter-search").addEventListener("input",A),(E=document.getElementById("btn-sync-rs"))==null||E.addEventListener("click",async()=>{const $=document.getElementById("btn-sync-rs");if(!t.readingScoreSheetId){T("ยังไม่ได้ตั้งค่า Sheet ID","warning");return}$.disabled=!0,$.textContent="⏳ กำลัง Sync...";try{const{syncCentralBatch:S}=await ne(async()=>{const{syncCentralBatch:c}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(x=>x.n);return{syncCentralBatch:c}},__vite__mapDeps([10,4,1,11,6,9])),q=D.map(c=>({id:c.id,student_code:c.student_code})),i=new Set(q.map(c=>c.id)),g=new Set(e.map(c=>c.id)),p=l.filter(c=>i.has(c.student_id)&&g.has(c.column_id)),n=await S(t.readingScoreSheetId,t.readingScoreSheetTab,e,p,q,{studentColRange:t.readingScoreStudentRange||"J8:J3000"});if(!n){T("ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก","warning");return}T(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${q.length} คน / ${n} คะแนนแล้ว`,"success")}catch(S){T("Sync ไม่สำเร็จ: "+(S.message??""),"error")}finally{$.disabled=!1,$.textContent="↑ Sync ไปชีทกลาง"}}),(L=document.getElementById("btn-fill-reading-eval"))==null||L.addEventListener("click",async()=>{const $=document.getElementById("btn-fill-reading-eval");if(!t.readingEvalClassSheetCol){T("ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)","warning");return}$.disabled=!0,$.textContent="⏳ กำลังป้อน...";try{const{syncReadingEvalToClassSheets:S}=await ne(async()=>{const{syncReadingEvalToClassSheets:p}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(n=>n.n);return{syncReadingEvalToClassSheets:p}},__vite__mapDeps([10,4,1,11,6,9])),{getAllClassesForFill:q}=await ne(async()=>{const{getAllClassesForFill:p}=await import("./api-1xsyVspL.js");return{getAllClassesForFill:p}},__vite__mapDeps([0,1])),i={};for(const p of f){const n=e.reduce((c,x)=>{var j;return c+(((j=d[p.id])==null?void 0:j[x.id])??0)},0);if(n>0){const c=n/2;i[p.id]={label:Ut(c).label,score100:c}}}const g=await q();await S(g,i,t.readingEvalClassSheetCol),T(`ป้อนผลประเมินอ่านฯ ไป ${g.length} ห้องสำเร็จ`,"success")}catch(S){T("ป้อนไม่สำเร็จ: "+(S.message??""),"error")}finally{$.disabled=!1,$.textContent="📝 ป้อนผล → ทุกวิชา"}})},v=()=>{var l,u,d;document.getElementById("rsa-tab-actions").innerHTML=`
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`;const e=m.length?`<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${m.map(o).join("")}</tbody></table>`:'<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>';document.getElementById("rsa-tab-content").innerHTML=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${m.length} หัวข้อ · รวม ${m.reduce((f,B)=>f+B.max_score,0)} คะแนน</span>
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
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${Ae.map(f=>f.label).join("/")})</span>
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
          ${Ae.map((f,B)=>`
            <div class="flex items-center gap-2" data-rsa-grade-row="${B}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${B+1}:</span>
              <input type="text" data-rsa-label value="${We(f.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${f.min}" min="0" max="100" ${B===Ae.length-1?"disabled":""}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${B===Ae.length-1?"bg-gray-50 text-gray-400":""}" />
              <span class="text-xs text-gray-400">${B===Ae.length-1?"ลงไป (ต่ำสุดเสมอ)":"ขึ้นไป"}</span>
            </div>`).join("")}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
          </div>
        </div>
      </div>`,document.getElementById("rsa-add-btn").addEventListener("click",()=>Ht(null,r,s,y)),document.querySelectorAll(".rsa-edit").forEach(f=>{f.addEventListener("click",()=>{const B=m.find(C=>C.id===+f.dataset.id);B&&Ht(B,r,s,y)})}),document.querySelectorAll(".rsa-del").forEach(f=>{f.addEventListener("click",async()=>{if(confirm(`ลบหัวข้อ "${f.dataset.name}"?`))try{await hn(+f.dataset.id),T("ลบแล้ว","success"),y()}catch(B){T("ลบไม่สำเร็จ: "+(B.message??""),"error")}})}),(l=document.getElementById("rsa-save-sheet"))==null||l.addEventListener("click",async()=>{var _,D,A;const f=document.getElementById("rsa-save-sheet"),B=((_=document.getElementById("rsa-sheet-id"))==null?void 0:_.value.trim())??"",C=((D=document.getElementById("rsa-sheet-tab"))==null?void 0:D.value.trim())??"",h=((A=document.getElementById("rsa-student-range"))==null?void 0:A.value.trim())??"J8:J3000";f.disabled=!0,f.textContent="⏳";try{await Promise.all([se("readingScoreSheetId",B),se("readingScoreSheetTab",C),se("readingScoreStudentRange",h)]),t.readingScoreSheetId=B,t.readingScoreSheetTab=C,t.readingScoreStudentRange=h,f.textContent="✅",f.style.background="#16a34a",setTimeout(()=>{f.disabled=!1,f.textContent="บันทึก",f.style.background=""},1500),T("บันทึก Sheet ID + ชื่อแท็บแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),f.disabled=!1,f.textContent="บันทึก"}}),(u=document.getElementById("rsa-save-eval-col"))==null||u.addEventListener("click",async()=>{var C;const f=document.getElementById("rsa-save-eval-col"),B=(((C=document.getElementById("rsa-eval-col"))==null?void 0:C.value.trim())??"").toUpperCase();f.disabled=!0,f.textContent="⏳";try{await se("readingEvalClassSheetCol",B),t.readingEvalClassSheetCol=B,f.textContent="✅",f.style.background="#16a34a",setTimeout(()=>{f.disabled=!1,f.textContent="บันทึก",f.style.background=""},1500),T("บันทึกคอลัมน์ผลประเมินแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),f.disabled=!1,f.textContent="บันทึก"}}),(d=document.getElementById("rsa-save-grades"))==null||d.addEventListener("click",async()=>{const f=document.getElementById("rsa-save-grades"),B=document.getElementById("rsa-grades-err");B.textContent="";const C=[...document.querySelectorAll("[data-rsa-grade-row]")].map((h,_)=>({label:h.querySelector("[data-rsa-label]").value.trim(),min:_===Ae.length-1?0:parseFloat(h.querySelector("[data-rsa-min]").value)}));if(C.some(h=>!h.label)){B.textContent="กรอกชื่อระดับให้ครบทุกช่อง";return}if(C.some(h=>Number.isNaN(h.min)||h.min<0||h.min>100)){B.textContent="คะแนนต้องอยู่ระหว่าง 0-100";return}for(let h=0;h<C.length-1;h++)if(C[h].min<=C[h+1].min){B.textContent="คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย";return}f.disabled=!0,f.textContent="⏳";try{await se("readingEvalThresholds",JSON.stringify(C)),At({readingEvalThresholds:JSON.stringify(C)}),f.textContent="✅",f.style.background="#16a34a",setTimeout(()=>{f.disabled=!1,f.textContent="บันทึกเกณฑ์",f.style.background=""},1500),T("บันทึกเกณฑ์การประเมินแล้ว","success")}catch(h){T("บันทึกไม่สำเร็จ: "+(h.message??""),"error"),f.disabled=!1,f.textContent="บันทึกเกณฑ์"}})},b=e=>{document.querySelectorAll("[data-tab]").forEach(l=>{l.className=l.dataset.tab===e?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),e==="scores"?a():v()};y()}const Se={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}};function Ne(t,r){var y;(y=document.getElementById("admin-picker"))==null||y.remove();const s=document.createElement("div");s.id="admin-picker",s.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const o=(t.target.closest("td,th,button")??t.target).getBoundingClientRect();s.style.top=Math.min(o.bottom+4,window.innerHeight-60)+"px",s.style.left=Math.max(4,Math.min(o.left,window.innerWidth-220))+"px";const m=document.createElement("button");m.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",m.textContent="✕ ล้าง",m.onclick=()=>{s.remove(),r(null)},s.appendChild(m),Object.entries(Se).forEach(([w,a])=>{const v=document.createElement("button");v.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${a.bg} ${a.color} hover:opacity-80 transition`,v.textContent=a.label,v.title=a.fullLabel,v.onclick=()=>{s.remove(),r(w)},s.appendChild(v)}),document.body.appendChild(s),setTimeout(()=>document.addEventListener("click",()=>s.remove(),{once:!0}),50)}const Mt=["อา","จ","อ","พ","พฤ","ศ","ส"];function Lr(t,r){const s=[],o=new Date(t),m=new Date(r),y=o.getDay()%7;y&&o.setDate(o.getDate()-y);let w=new Date(o),a=1;for(;w<=m;){const v=[];for(let b=0;b<5;b++){const e=new Date(w);e.setDate(e.getDate()+b),e<=m&&v.push({date:new Date(e),ds:e.toISOString().slice(0,10)})}v.length&&(s.push({n:a,days:v}),a++),w.setDate(w.getDate()+7)}return s}function Dt(t,r){const s=r.reduce((m,y)=>{var w;return m+(((w=Se[t[y.ds]])==null?void 0:w.score)??0)},0),o=r.length*2;return o>0?Math.min(10,Math.max(0,Math.round(s/o*100)/10)):0}function Ge(t){return`${t.getDate()}/${t.getMonth()+1}`}async function ia(t){var f,B,C,h;re("prayer-admin"),document.getElementById("page-title").textContent="คะแนนละหมาด";let r=null,s=t;if(!s)try{const{data:_}=await le.auth.getSession(),D=((B=(f=_==null?void 0:_.session)==null?void 0:f.user)==null?void 0:B.id)??null;if(D){const{data:A}=await le.from("teachers").select("*").eq("profile_id",D).maybeSingle();s=A??null}}catch(_){console.error("Failed to load teacher session:",_)}const[o,m]=await Promise.all([ce().catch(()=>({})),zt().catch(()=>[])]),y=m,w=(o.prayerScannerTeachers||"").split(/[\s,]+/).map(_=>_.trim()).filter(Boolean);let a=!1;if(s){const{data:_}=await le.from("profiles").select("role").eq("id",s.profile_id).maybeSingle();a=w.includes(s.teacher_code)||s.staff_type==="แอดมิน"||s.position==="admin"||(_==null?void 0:_.role)==="admin"}ae(`<div class="max-w-5xl mx-auto animate-fade">
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
  </div>`);const v=()=>{var W;const _=o.semester_start,D=o.semester_end,A=_&&D?Lr(_,D):[],E=A.flatMap(P=>P.days);if(document.getElementById("pr-tab-actions").innerHTML=`
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
      </div>`,(W=document.getElementById("btn-fill-prayer-classes"))==null||W.addEventListener("click",async()=>{if(!confirm("ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?"))return;const P=document.getElementById("btn-fill-prayer-classes"),U=P.textContent;P.disabled=!0,P.textContent="กำลังเติม...";try{const Y=await bn({semesterStart:o.semester_start,semesterEnd:o.semester_end,attendanceScoreMode:o.attendanceScoreMode??"recorded"});T(`เติมรายวิชาศาสนา ${Y.classes} รายวิชา / ${Y.scores} คะแนนแล้ว`,"success")}catch(Y){T("เติมไม่สำเร็จ: "+(Y.message??""),"error")}finally{P.disabled=!1,P.textContent=U}}),document.getElementById("pr-tab-content").innerHTML=`
      <div class="flex items-center gap-2 flex-wrap mb-3">
        <!-- Room searchable picker -->
        <div class="relative" id="pr-room-picker-wrap">
          <button id="pr-room-btn" type="button"
            class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px] text-left flex items-center justify-between gap-2">
            <span id="pr-room-label" class="truncate">${y[0]??"—"}</span>
            <span class="text-gray-400">▾</span>
          </button>
          <div id="pr-room-dropdown"
            class="hidden absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            <div class="p-2 border-b border-gray-100">
              <input id="pr-room-search" type="text" placeholder="ค้นหาห้อง... (74 ห้อง)"
                class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div id="pr-room-list" class="overflow-y-auto" style="max-height:260px">
              ${y.map(P=>`<button type="button" data-room="${P}"
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
          ${Object.values(Se).map(P=>`<span class="px-1.5 py-0.5 ${P.bg} ${P.color} rounded cursor-default">${P.label}=${P.fullLabel??""}</span>`).join("")}
        </div>
      </div>
      ${!_||!D?`<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`:`<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`,!_||!D)return;const L="border border-gray-200 text-center text-xs select-none",$="sticky left-0 z-20 bg-white border border-gray-200",S="sticky z-20 bg-white border border-gray-200",q=P=>P>=8?"text-emerald-600":P>=6?"text-amber-500":"text-red-600",i=30,g=160,p={};let n=[],c=[];const x=(P,U=!0)=>{P&&(P.style.outline=`2px solid ${U?"#059669":"#ef4444"}`,P.style.outlineOffset="1px",setTimeout(()=>{P.style.outline="",P.style.outlineOffset=""},700))},j=async(P,U,Y,M)=>{var V;p[P]||(p[P]={}),M===null?delete p[P][U]:p[P][U]=M;const F=document.querySelector(`.pr-cell[data-sid="${P}"][data-date="${U}"]`);if(F){const K=M?Se[M]:null;Object.values(Se).forEach(X=>F.classList.remove(X.bg)),K?(F.classList.add(K.bg),F.innerHTML=`<span class="${K.color} text-xs">${K.label}</span>`):F.innerHTML=""}k(P);const z=document.querySelector(`.adm-cell[data-sid="${P}"][data-date="${U}"]`);if(z){const K=M?Se[M]:null;z.className=`adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${K?K.bg+" border-transparent":"bg-gray-50 border-gray-100"}`,z.innerHTML=K?`<span class="${K.color}">${K.label}</span>`:'<span class="text-gray-200">·</span>'}try{const K=((V=A.find(X=>X.days.some(G=>G.ds===U)))==null?void 0:V.n)??null;await es(P,Y,U,M,K,"แอดมิน"),x(F,!0),x(z,!0)}catch(K){console.error("[prayer save]",K),x(F,!1),x(z,!1),T("บันทึกไม่สำเร็จ: "+(K.message??""),"error")}},H=async(P,U)=>{const M=(await Promise.allSettled(P.map(([F,z,V])=>j(F,z,U,V)))).filter(F=>F.status==="rejected").length;M>0&&T(`บันทึกไม่สำเร็จ ${M} รายการ`,"error")},k=P=>{const U=p[P]??{},Y=Dt(U,E),M=document.getElementById(`pr-sc-${P}`);M&&(M.textContent=Y,M.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${q(Y)} text-xs`)},I=(P,U)=>{if(document.getElementById("pr-filter-count").textContent=`${P.length} คน · ${E.length} วัน`,!P.length){document.getElementById("pr-grid-wrap").innerHTML='<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>';return}document.getElementById("pr-grid-wrap").innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${$} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${S} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${S} bg-gray-50 text-left px-2" style="left:96px;min-width:${g}px">ชื่อ-นามสกุล</th>
              ${A.map(Y=>`<th colspan="${Y.days.length}"
                class="${L} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${Y.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${Y.n}">
                Week${Y.n} ✎</th>`).join("")}
              <th class="${L} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${$} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${S} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${S} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${g}px">ชื่อ</th>
              ${A.flatMap(Y=>Y.days.map(M=>`<th class="${L} bg-gray-100 text-gray-400 font-normal"
                style="width:${i}px;min-width:${i}px;font-size:9px">
                ${Mt[M.date.getDay()]}<br/>${Ge(M.date)}</th>`)).join("")}
              <th class="${L} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${P.map((Y,M)=>{const F=p[Y.id]??{},z=Dt(F,E);return`<tr class="hover:bg-gray-50/60" data-sid="${Y.id}">
                <td class="${$} text-center text-gray-400" style="width:28px">${M+1}</td>
                <td class="${S} text-center font-mono text-gray-600" style="left:28px;width:68px">${Y.student_code??"—"}</td>
                <td class="${S} px-2" style="left:96px;min-width:${g}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${Y.image_url?`<img src="${Y.image_url}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${Y.full_name??"—"}</span>
                  </div>
                </td>
                ${A.flatMap(V=>V.days.map(K=>{const X=F[K.ds]??null,G=X?Se[X]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${G?G.bg:""}"
                    data-sid="${Y.id}" data-date="${K.ds}" data-room="${U}"
                    style="width:${i}px;min-width:${i}px;height:28px">
                    ${G?`<span class="${G.color} text-xs">${G.label}</span>`:""}
                  </td>`})).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${q(z)} text-xs"
                  id="pr-sc-${Y.id}" style="min-width:48px">${z}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`,document.getElementById("pr-grid-wrap").addEventListener("click",Y=>{const M=Y.target.closest(".pr-week-th");if(!M)return;const F=+M.dataset.week,z=A.find(V=>V.n===F);z&&Q(z,n,N)}),document.getElementById("pr-grid-wrap").addEventListener("click",Y=>{const M=Y.target.closest(".pr-cell");if(!M)return;Y.stopPropagation();const F=+M.dataset.sid,z=M.dataset.date,V=M.dataset.room;Ne(Y,K=>j(F,z,V,K))})},R=async(P,U="")=>{document.getElementById("pr-grid-wrap").innerHTML='<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>';try{const[Y,M]=await Promise.all([En(P),Sn(P,_,D)]);n=Y,Object.keys(p).forEach(z=>delete p[z]);for(const z of n)p[z.id]={};for(const z of M)p[z.student_id]||(p[z.student_id]={}),p[z.student_id][z.check_date]=z.status;c=E.map(z=>z.ds);const F=U?n.filter(z=>{var V,K;return((V=z.full_name)==null?void 0:V.toLowerCase().includes(U))||((K=z.student_code)==null?void 0:K.includes(U))}):n;I(F,P)}catch(Y){document.getElementById("pr-grid-wrap").innerHTML=`<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${Y.message}</div>`}};let N=y[0]??"";const O=P=>{N=P,document.getElementById("pr-room-label").textContent=P,document.getElementById("pr-room-dropdown").classList.add("hidden"),document.querySelectorAll(".pr-room-item").forEach(Y=>{const M=Y.dataset.room===P;Y.classList.toggle("bg-indigo-50",M),Y.classList.toggle("font-semibold",M),Y.classList.toggle("text-indigo-700",M)});const U=document.getElementById("pr-filter-search").value.toLowerCase();R(P,U)};document.getElementById("pr-room-btn").addEventListener("click",P=>{P.stopPropagation();const U=document.getElementById("pr-room-dropdown");U.classList.toggle("hidden"),U.classList.contains("hidden")||document.getElementById("pr-room-search").focus()}),document.getElementById("pr-room-search").addEventListener("input",P=>{const U=P.target.value.toLowerCase();document.querySelectorAll(".pr-room-item").forEach(Y=>{Y.style.display=Y.dataset.room.toLowerCase().includes(U)?"":"none"})}),document.getElementById("pr-room-list").addEventListener("click",P=>{const U=P.target.closest(".pr-room-item");U&&O(U.dataset.room)}),document.addEventListener("click",()=>{var P;(P=document.getElementById("pr-room-dropdown"))==null||P.classList.add("hidden")},{capture:!0,once:!1}),N&&O(N),document.getElementById("pr-filter-search").addEventListener("input",P=>{const U=P.target.value.toLowerCase();if(!n.length)return;const Y=U?n.filter(M=>{var F,z;return((F=M.full_name)==null?void 0:F.toLowerCase().includes(U))||((z=M.student_code)==null?void 0:z.includes(U))}):n;I(Y,N)}),document.getElementById("btn-sync-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-prayer");if(!o.prayerSheetId){T("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}const U=Object.values(p).flatMap(M=>Object.keys(M)),Y=[...new Set([...c,...U])].sort();if(!Y.length){T("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.disabled=!0,P.textContent="⏳ กำลัง Sync...";try{const{syncPrayerSheet:M}=await ne(async()=>{const{syncPrayerSheet:z}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(V=>V.n);return{syncPrayerSheet:z}},__vite__mapDeps([10,4,1,11,6,9])),F=n.map(z=>({id:z.id,student_code:z.student_code}));await M(o.prayerSheetId,o.prayerSheetTab||"Solat",o.prayerStudentRange||"A3:A3000",Y,p,F),T(`Sync ละหมาด ${F.length} คน × ${Y.length} วัน สำเร็จ`,"success")}catch(M){T("Sync ไม่สำเร็จ: "+(M.message??""),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ห้องนี้"}}),document.getElementById("btn-sync-all-prayer").addEventListener("click",async()=>{const P=document.getElementById("btn-sync-all-prayer");if(!o.prayerSheetId){T("ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า","warning");return}P.disabled=!0,P.textContent="⏳ กำลังโหลดทุกห้อง...";try{const{syncPrayerSheet:U}=await ne(async()=>{const{syncPrayerSheet:ee}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(oe=>oe.n);return{syncPrayerSheet:ee}},__vite__mapDeps([10,4,1,11,6,9])),{getAllPrayerRecords:Y,getStudents:M}=await ne(async()=>{const{getAllPrayerRecords:ee,getStudents:oe}=await import("./api-1xsyVspL.js");return{getAllPrayerRecords:ee,getStudents:oe}},__vite__mapDeps([0,1])),[F,z]=await Promise.all([Y(),M()]),V={};for(const ee of F)V[ee.student_id]||(V[ee.student_id]={}),V[ee.student_id][ee.check_date]=ee.status;const X=z.filter(ee=>ee.religion_room).map(ee=>({id:ee.id,student_code:ee.student_code})),G=[...new Set(F.map(ee=>ee.check_date))].sort(),te=[...new Set([...c,...G])].sort();if(!te.length||!X.length){T("ยังไม่มีข้อมูลละหมาดในระบบ","warning");return}P.textContent=`⏳ Sync ${X.length} คน × ${te.length} วัน...`,await U(o.prayerSheetId,o.prayerSheetTab||"Solat",o.prayerStudentRange||"A3:A3000",te,V,X),T(`✅ Sync ทุกห้อง ${X.length} คน × ${te.length} วัน สำเร็จ`,"success")}catch(U){T("Sync ไม่สำเร็จ: "+(U.message??""),"error")}finally{P.disabled=!1,P.textContent="↑ Sync ทุกห้อง"}});const Q=(P,U,Y)=>{var V;(V=document.getElementById("admin-prayer-modal"))==null||V.remove();const M=document.createElement("div");M.id="admin-prayer-modal",M.className="fixed inset-0 z-[80] flex flex-col bg-white";const F=`${Ge(P.days[0].date)}–${Ge(P.days[P.days.length-1].date)}`,z=(K,X)=>{var ee;const G=((ee=p[K])==null?void 0:ee[X])??null,te=G?Se[G]:null;return`<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${te?te.bg+" border-transparent":"bg-gray-50"}"
          data-sid="${K}" data-date="${X}" data-room="${Y}">
          ${te?`<span class="${te.color}">${te.label}</span>`:'<span class="text-gray-200">·</span>'}
        </button>`};M.innerHTML=`
        <div class="bg-emerald-700 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button id="adm-modal-close" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${P.n}</p>
            <p class="text-xs text-emerald-200">${F} · ${Y}</p>
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
                ${P.days.map(K=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${Mt[K.date.getDay()]} ${Ge(K.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${K.ds}" data-room="${Y}">AllDay</button>
                  </th>`).join("")}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${U.map(K=>`
                <tr class="hover:bg-gray-50/50" data-sid="${K.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${K.image_url?`<img src="${K.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-xs">👤</div>'}
                      <span class="text-gray-800 truncate max-w-[120px]">${K.full_name??"—"}</span>
                    </div>
                  </td>
                  ${P.days.map(X=>`<td class="px-2 py-2 text-center">${z(K.id,X.ds)}</td>`).join("")}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${K.id}" data-room="${Y}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>`,document.body.appendChild(M),M.querySelector("#adm-modal-body").addEventListener("click",K=>{const X=K.target.closest(".adm-cell");if(!X)return;K.stopPropagation();const G=+X.dataset.sid,te=X.dataset.date;Ne(K,ee=>j(G,te,Y,ee))}),M.querySelectorAll(".adm-day-all").forEach(K=>{K.addEventListener("click",X=>{X.stopPropagation();const G=K.dataset.date;Ne(X,te=>H(U.map(ee=>[ee.id,G,te]),Y))})}),M.querySelectorAll(".adm-row-all").forEach(K=>{K.addEventListener("click",X=>{X.stopPropagation();const G=+K.dataset.sid;Ne(X,te=>H(P.days.map(ee=>[G,ee.ds,te]),Y))})}),M.querySelector("#adm-all-check").addEventListener("click",K=>{K.stopPropagation(),Ne(K,X=>H(U.flatMap(G=>P.days.map(te=>[G.id,te.ds,X])),Y))}),M.querySelector("#adm-modal-close").addEventListener("click",()=>M.remove())}},b=()=>{document.getElementById("pr-tab-actions").innerHTML="",r&&(clearInterval(r),r=null);const _=new Date().toLocaleDateString("sv");document.getElementById("pr-tab-content").innerHTML=`
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
    `;let D=[],A="",E=!1;const L=1e3,$=n=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[n]||"ไม่ระบุพื้นที่",S=n=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[n]||"bg-gray-50 text-gray-500 border-gray-100",q=async n=>{const c=[];for(let x=0;;x+=L){const{data:j,error:H}=await le.from("prayer_records").select("id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)").eq("check_date",n).not("location","is",null).order("created_at",{ascending:!1}).range(x,x+L-1);if(H)throw H;if(c.push(...j??[]),!j||j.length<L)break}return c},i=async()=>{var x;if(!document.getElementById("hist-table-body")){r&&(clearInterval(r),r=null);return}const c=((x=document.getElementById("hist-date-input"))==null?void 0:x.value)||_;if(!E){E=!0;try{D=await q(c),g()}catch(j){console.error("Fetch history failed:",j);const H=document.getElementById("hist-table-body");H&&(H.innerHTML=`<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${j.message}</td></tr>`)}finally{E=!1}}},g=()=>{var M,F;const n=((M=document.getElementById("hist-loc-filter"))==null?void 0:M.value)||"",c=(((F=document.getElementById("hist-search-input"))==null?void 0:F.value)||"").trim().toLowerCase(),x=D.filter(z=>{var V,K,X,G;if(n&&z.location!==n||A&&(z.scanned_by||((V=z.teachers)==null?void 0:V.full_name)||"บันทึกมือ (เดิม)")!==A)return!1;if(c){const te=(((K=z.students)==null?void 0:K.full_name)||"").toLowerCase(),ee=(((X=z.students)==null?void 0:X.student_code)||"").toLowerCase(),oe=(z.main_room||"").toLowerCase(),ge=(z.scanned_by||((G=z.teachers)==null?void 0:G.full_name)||"บันทึกมือ (เดิม)").toLowerCase(),ye=z.input_method==="manual"?"กรอกรหัส manual":"qr";return te.includes(c)||ee.includes(c)||oe.includes(c)||ge.includes(c)||ye.includes(c)}return!0}),j=x.length,H=x.filter(z=>z.status==="pray").length,k=x.filter(z=>z.status==="usor").length,I=j-H-k,R=document.getElementById("stat-hist-total"),N=document.getElementById("stat-hist-pray"),O=document.getElementById("stat-hist-usor"),Q=document.getElementById("stat-hist-other");R&&(R.textContent=j),N&&(N.textContent=H),O&&(O.textContent=k),Q&&(Q.textContent=I);const W=new Set;D.forEach(z=>{var K;const V=z.scanned_by||((K=z.teachers)==null?void 0:K.full_name);V&&W.add(V)});const P=document.getElementById("hist-operators-wrap");P&&(W.size===0?P.innerHTML='<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>':(P.innerHTML=Array.from(W).map(z=>{const V=A===z;return`<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${z.includes("(ครู)")||z.includes("ครู")?V?"bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm":"bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer":V?"bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm":"bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer"}" data-op="${z}">${V?"✓ ":""}${z}</span>`}).join(""),P.querySelectorAll(".op-filter-chip").forEach(z=>{z.addEventListener("click",()=>{const V=z.dataset.op;A=A===V?"":V,g()})})));const U=document.getElementById("hist-table-count");U&&(U.textContent=`${x.length} รายการ`);const Y=document.getElementById("hist-table-body");if(Y){if(x.length===0){Y.innerHTML='<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>';return}Y.innerHTML=x.map((z,V)=>{var Ie;const K=z.created_at?new Date(z.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",X=z.students,G=X!=null&&X.image_url?`<img src="${X.image_url}" class="student-avatar-premium" />`:`<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${((X==null?void 0:X.full_name)||"?").charAt(0)}</div>`,te=X?`<div class="flex items-center gap-2.5">
              ${G}
              <div>
                <p class="font-bold text-gray-800 leading-none">${X.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${X.student_code}</p>
              </div>
            </div>`:`<span class="text-gray-400">ไม่พบชื่อ (รหัส ${z.student_id})</span>`,ee={pray:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',usor:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',absent:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',followed:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',avoid:'<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'}[z.status]||`<span class="text-gray-400">${z.status||"—"}</span>`,oe=z.scanned_by||((Ie=z.teachers)==null?void 0:Ie.full_name)||"บันทึกมือ (เดิม)",ge=z.input_method==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>':"",ye=z.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>':"";return`
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${x.length-V}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${K}</td>
            <td class="px-4 py-3">${te}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${z.main_room||"—"}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${S(z.location)}">
                ${$(z.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${oe}</span>
              <div class="flex flex-wrap gap-1">${ge}${ye}</div>
            </td>
            <td class="px-4 py-3 text-center">${ee}</td>
          </tr>
        `}).join("")}},p=()=>{r&&(clearInterval(r),r=null);const n=document.getElementById("hist-live-toggle");n&&n.checked&&(r=setInterval(i,4e3))};setTimeout(()=>{var x,j,H;(x=document.getElementById("btn-hist-refresh"))==null||x.addEventListener("click",i),(j=document.getElementById("hist-date-input"))==null||j.addEventListener("change",()=>{A="",i()}),(H=document.getElementById("hist-loc-filter"))==null||H.addEventListener("change",g);const n=document.getElementById("hist-search-input");n&&n.addEventListener("input",g);const c=document.getElementById("hist-live-toggle");c&&c.addEventListener("change",p),i(),p()},50)},e=(_,D=!1)=>_==null||_===""?D:["1","true","yes","on"].includes(String(_).trim().toLowerCase()),l=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${y.map(_=>`<option value="${_}">${_}</option>`).join("")}
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
      </div>`,document.getElementById("pr-save-cfg").addEventListener("click",async()=>{const _=document.getElementById("pr-save-cfg"),D=document.getElementById("pr-sheet-id").value.trim(),A=document.getElementById("pr-sheet-tab").value.trim()||"Solat",E=document.getElementById("pr-stu-range").value.trim()||"A3:A3000";_.disabled=!0,_.textContent="⏳ กำลังบันทึก...";try{await Promise.all([se("prayerSheetId",D),se("prayerSheetTab",A),se("prayerStudentRange",E)]),o.prayerSheetId=D,o.prayerSheetTab=A,o.prayerStudentRange=E,_.textContent="✅ บันทึกแล้ว",_.style.background="#16a34a",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึกการตั้งค่า",_.style.background=""},1800),T("บันทึก Sheet config ละหมาดแล้ว","success")}catch{T("บันทึกไม่สำเร็จ","error"),_.disabled=!1,_.textContent="บันทึกการตั้งค่า"}}),document.getElementById("pr-save-scanner-safety").addEventListener("click",async()=>{var $,S,q;const _=document.getElementById("pr-save-scanner-safety"),D=($=document.getElementById("pr-guard-male"))!=null&&$.checked?"true":"false",A=(S=document.getElementById("pr-guard-female"))!=null&&S.checked?"true":"false",E=parseInt(((q=document.getElementById("pr-manual-monthly-limit"))==null?void 0:q.value)||"2",10),L=String(Math.max(0,Math.min(31,Number.isFinite(E)?E:2)));_.disabled=!0,_.textContent="⏳ กำลังบันทึก...";try{await Promise.all([se("prayerSameRoomGuardMaleEnabled",D),se("prayerSameRoomGuardFemaleEnabled",A),se("prayerManualEntryMonthlyLimit",L)]),o.prayerSameRoomGuardMaleEnabled=D,o.prayerSameRoomGuardFemaleEnabled=A,o.prayerManualEntryMonthlyLimit=L,T("บันทึกความปลอดภัยระบบสแกนแล้ว","success"),_.textContent="✅ บันทึกแล้ว",setTimeout(()=>{_.disabled=!1,_.textContent="บันทึกความปลอดภัยระบบสแกน"},1600)}catch(i){T("บันทึกไม่สำเร็จ: "+(i.message??""),"error"),_.disabled=!1,_.textContent="บันทึกความปลอดภัยระบบสแกน"}})},u=()=>{document.getElementById("pr-tab-actions").innerHTML="",document.getElementById("pr-tab-content").innerHTML=`
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
    `;let _=[],D={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""};const A=[{key:"Sun",label:"อา",full:"อาทิตย์"},{key:"Mon",label:"จ",full:"จันทร์"},{key:"Tue",label:"อ",full:"อังคาร"},{key:"Wed",label:"พ",full:"พุธ"},{key:"Thu",label:"พฤ",full:"พฤหัสบดี"}],E=i=>(i||"").split(/[\s,]+/).map(g=>g.trim()).filter(Boolean),L=i=>String(i||"").trim(),$=i=>({all:"ทั้งหมด",male:"ชาย",female:"หญิง",teacher:"ครู"})[i]||"ทั้งหมด",S=async(i,g)=>{const p=await ce().catch(()=>({})),n=new Set(E(p.prayerExtendedScannerStudents));g?n.add(String(i)):n.delete(String(i));const c=Array.from(n).join(",");return await se("prayerExtendedScannerStudents",c),o.prayerExtendedScannerStudents=c,c};document.getElementById("pr-save-scanner-time-cfg").addEventListener("click",async()=>{const i=document.getElementById("pr-save-scanner-time-cfg"),g=document.getElementById("pr-scan-start").value.trim()||"12:20",p=document.getElementById("pr-scan-end").value.trim()||"12:50",n=document.getElementById("pr-scan-ext-end").value.trim()||"13:05";if(![g,p,n].every(x=>/^\d{1,2}:\d{2}$/.test(x))){T("กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20","warning");return}i.disabled=!0,i.textContent="⏳ กำลังบันทึก...";try{await Promise.all([se("prayerScanStartTime",g),se("prayerScanEndTime",p),se("prayerScanExtendedEndTime",n)]),o.prayerScanStartTime=g,o.prayerScanEndTime=p,o.prayerScanExtendedEndTime=n,T("บันทึกช่วงเวลาสแกนละหมาดแล้ว","success"),i.textContent="✅ บันทึกแล้ว",setTimeout(()=>{i.disabled=!1,i.textContent="บันทึกช่วงเวลาสแกน"},1600)}catch(x){T("บันทึกไม่สำเร็จ: "+(x.message??""),"error"),i.disabled=!1,i.textContent="บันทึกช่วงเวลาสแกน"}});const q=async()=>{var g,p;const i=document.getElementById("scanners-list-wrap");if(i)try{const{data:n,error:c}=await le.from("students").select("id, student_code, full_name, main_room, gender, image_url").eq("can_scan_prayer",!0).order("student_code");if(c)throw c;const x=await ce().catch(()=>({})),j=n??[],H=E(x.prayerScannerTeachers),k=new Set(E(x.prayerExtendedScannerStudents));let I=[];if(H.length>0){const{data:G,error:te}=await le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",H).order("teacher_code");if(te)throw te;I=G??[]}const R=j.length+I.length;if(document.getElementById("scanner-count-badge").textContent=`${R} คน`,R===0){i.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>';return}const N=Object.fromEntries(A.map(G=>[G.key,new Set(E(x[`prayerScanner${G.key}`]))])),O=j.map(G=>{const te=String(G.student_code||"").trim(),ee=A.filter(ge=>{var ye;return(ye=N[ge.key])==null?void 0:ye.has(te)}).map(ge=>ge.key),oe=k.has(te);return{...G,type:"student",code:te,name:G.full_name||"",roomInfo:G.main_room||"",gender:L(G.gender),permission:oe?"extended":"normal",permissionLabel:oe?"ขยายเวลา":"ทั่วไป",assignedDays:ee,searchText:[te,G.full_name,G.main_room,G.gender,oe?"ขยายเวลา":"ทั่วไป"].join(" ").toLowerCase()}}),Q=I.map(G=>({...G,type:"teacher",code:String(G.teacher_code||"").trim(),name:G.full_name||"",roomInfo:G.dept||"",gender:"",permission:"teacher",permissionLabel:"คุณครู",assignedDays:[],searchText:[G.teacher_code,G.full_name,G.dept,"ครู คุณครู"].join(" ").toLowerCase()})),W=[...O,...Q],P=pe(W.map(G=>G.roomInfo)),U=O.filter(G=>G.gender==="ชาย").length,Y=O.filter(G=>G.gender==="หญิง").length,M=O.filter(G=>G.permission==="extended").length,F=O.filter(G=>G.assignedDays.length===0).length,z=(G,te,ee="indigo")=>{const oe={indigo:"bg-indigo-50 text-indigo-700 border-indigo-100",emerald:"bg-emerald-50 text-emerald-700 border-emerald-100",rose:"bg-rose-50 text-rose-700 border-rose-100",amber:"bg-amber-50 text-amber-700 border-amber-100",slate:"bg-slate-50 text-slate-700 border-slate-100"};return`
            <div class="rounded-xl border ${oe[ee]||oe.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${G}</p>
              <p class="text-lg font-extrabold leading-tight">${te}</p>
            </div>
          `};i.innerHTML=`
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${z("ทั้งหมด",R,"indigo")}
              ${z("ชาย",U,"emerald")}
              ${z("หญิง",Y,"rose")}
              ${z("ครู",I.length,"slate")}
              ${z("ขยายเวลา",M,"amber")}
              ${z("ยังไม่มีเวร",F,F?"rose":"slate")}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[["all",`ทั้งหมด ${R}`],["male",`ชาย ${U}`],["female",`หญิง ${Y}`],["teacher",`ครู ${I.length}`]].map(([G,te])=>`
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
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${$(D.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `;const V=()=>{const G=D,te=G.q.trim().toLowerCase();return W.filter(ee=>!(G.audience==="male"&&!(ee.type==="student"&&ee.gender==="ชาย")||G.audience==="female"&&!(ee.type==="student"&&ee.gender==="หญิง")||G.audience==="teacher"&&ee.type!=="teacher"||G.type&&ee.type!==G.type||G.gender&&ee.gender!==G.gender||G.room&&ee.roomInfo!==G.room||G.permission&&ee.permission!==G.permission||G.day==="none"&&!(ee.type==="student"&&ee.assignedDays.length===0)||G.day&&G.day!=="none"&&!ee.assignedDays.includes(G.day)||te&&!ee.searchText.includes(te)))},K=()=>{i.querySelectorAll(".scanner-audience-tab").forEach(ee=>{const oe=ee.dataset.scannerAudience===D.audience;ee.className=oe?"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm":"scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700"});const G=document.getElementById("scanner-filtered-count");G&&(G.textContent=V().length);const te=document.getElementById("scanner-active-audience-label");te&&(te.textContent=$(D.audience))},X=()=>{var ye,Ie,Fe;K();const G=V(),te=document.getElementById("scanner-table-wrap"),ee=document.getElementById("scanner-filtered-count");ee&&(ee.textContent=G.length),document.getElementById("scanner-count-badge").textContent=G.length===R?`${R} คน`:`${G.length}/${R} คน`;const oe=(Ie=(ye=document.activeElement)==null?void 0:ye.id)!=null&&Ie.startsWith("scanner-filter-")?document.activeElement.id:"",ge=oe==="scanner-filter-q"?document.activeElement.selectionStart:null;if(te.innerHTML=`
            <table class="w-full text-xs min-w-[980px]">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-left align-top">
                    <span class="block mb-1">ประเภท</span>
                    <select id="scanner-filter-type" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="student" ${D.type==="student"?"selected":""}>นักเรียน</option>
                      <option value="teacher" ${D.type==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-2 py-3 text-left align-top">
                    <span class="block mb-1">รหัส/ค้นหา</span>
                    <input id="scanner-filter-q" value="${J(D.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${P.map(Z=>`<option value="${J(Z)}" ${D.room===Z?"selected":""}>${J(Z)}</option>`).join("")}
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">เพศ</span>
                    <select id="scanner-filter-gender" class="w-24 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="ชาย" ${D.gender==="ชาย"?"selected":""}>ชาย</option>
                      <option value="หญิง" ${D.gender==="หญิง"?"selected":""}>หญิง</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ประเภทสิทธิ์</span>
                    <select id="scanner-filter-permission" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="normal" ${D.permission==="normal"?"selected":""}>ทั่วไป</option>
                      <option value="extended" ${D.permission==="extended"?"selected":""}>ขยายเวลา</option>
                      <option value="teacher" ${D.permission==="teacher"?"selected":""}>ครู</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">วันรับผิดชอบ</span>
                    <select id="scanner-filter-day" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${A.map(Z=>`<option value="${Z.key}" ${D.day===Z.key?"selected":""}>${Z.full}</option>`).join("")}
                      <option value="none" ${D.day==="none"?"selected":""}>ยังไม่กำหนด</option>
                    </select>
                  </th>
                  <th class="px-4 py-3 text-right align-top">การจัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${G.length?G.map(Z=>{if(Z.type==="teacher")return`
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${J(Z.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${Z.image_url?`<img src="${J(Z.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`:'<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>'}
                            <span class="font-medium text-gray-800">${J(Z.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${J(Z.roomInfo||"—")}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${J(Z.code)}" data-name="${J(Z.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `;const fe=A.map(me=>`
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${Z.assignedDays.includes(me.key)?"bg-indigo-600 text-white border-indigo-700 shadow-sm":"bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600"}"
                        data-code="${J(Z.code)}" data-day="${me.key}" data-name="${J(Z.name)}" title="เวรวัน${me.full}">
                        ${me.label}
                      </button>
                    `).join(" ");return`
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${J(Z.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${Z.image_url?`<img src="${J(Z.image_url)}" class="student-avatar-premium w-6 h-8" />`:'<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>'}
                          <span class="font-medium text-gray-800">${J(Z.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${J(Z.roomInfo||"—")}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${Z.gender==="หญิง"?"bg-rose-50 text-rose-700 border-rose-100":"bg-sky-50 text-sky-700 border-sky-100"} text-[10px] font-bold border">${J(Z.gender||"—")}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${Z.permission==="extended"?"bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100":"bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"}"
                          data-code="${J(Z.code)}" data-name="${J(Z.name)}" data-extended="${Z.permission==="extended"?"1":"0"}">
                          ${Z.permission==="extended"?"ขยายเวลา":"ทั่วไป"}
                        </button>
                      </td>
                      <td class="px-3 py-2">
                        <div class="flex gap-1 items-center">
                          ${fe}
                          ${Z.assignedDays.length===0?'<span class="ml-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold">ยังไม่มีเวร</span>':""}
                        </div>
                      </td>
                      <td class="px-4 py-2 text-right">
                        <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                          data-id="${Z.id}" data-code="${J(Z.code)}" data-name="${J(Z.name)}" data-type="student">
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
          `,["scanner-filter-type","scanner-filter-room","scanner-filter-gender","scanner-filter-permission","scanner-filter-day"].forEach(Z=>{var fe;(fe=document.getElementById(Z))==null||fe.addEventListener("change",me=>{const xe=Z.replace("scanner-filter-","");D[xe]=me.target.value,X()})}),(Fe=document.getElementById("scanner-filter-q"))==null||Fe.addEventListener("input",Z=>{D.q=Z.target.value,X()}),oe){const Z=document.getElementById(oe);Z==null||Z.focus(),oe==="scanner-filter-q"&&ge!==null&&(Z==null||Z.setSelectionRange(ge,ge))}i.querySelectorAll(".btn-toggle-extended-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const fe=Z.dataset.code,me=Z.dataset.name,xe=Z.dataset.extended!=="1";Z.disabled=!0,Z.textContent="กำลังบันทึก...";try{await S(fe,xe),T(`ปรับสิทธิ์ "${me}" เป็น${xe?"ขยายเวลา":"ทั่วไป"}แล้ว`,"success"),q()}catch(we){T("ปรับสิทธิ์ไม่สำเร็จ: "+we.message,"error"),Z.disabled=!1,Z.textContent=Z.dataset.extended==="1"?"ขยายเวลา":"ทั่วไป"}})}),i.querySelectorAll(".btn-toggle-day-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{var we;const fe=Z.dataset.code,me=Z.dataset.day,xe=Z.dataset.name;Z.disabled=!0;try{const ke=await ce().catch(()=>({})),je=`prayerScanner${me}`;let Ce=E(ke[je]);Ce.includes(fe)?Ce=Ce.filter(Re=>Re!==fe):Ce.push(fe),await se(je,Ce.join(","));const Ve=((we=A.find(Re=>Re.key===me))==null?void 0:we.full)||me;T(`ปรับสิทธิ์เวรวัน${Ve} ของ "${xe}" สำเร็จ`,"success"),q()}catch(ke){T("ปรับสิทธิ์เวรล้มเหลว: "+ke.message,"error"),Z.disabled=!1}})}),i.querySelectorAll(".btn-revoke-scanner").forEach(Z=>{Z.addEventListener("click",async()=>{const fe=Z.dataset.type,me=Z.dataset.name;if(confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${me}" หรือไม่?`))try{if(fe==="student"){const xe=+Z.dataset.id,we=Z.dataset.code,{error:ke}=await le.from("students").update({can_scan_prayer:!1}).eq("id",xe);if(ke)throw ke;await S(we,!1);const je=await ce().catch(()=>({}));for(const Ce of A){const Ve=`prayerScanner${Ce.key}`,Re=E(je[Ve]).filter(Ca=>Ca!==we);await se(Ve,Re.join(","))}}else{const xe=Z.dataset.code,we=await ce().catch(()=>({})),ke=E(we.prayerScannerTeachers).filter(je=>je!==xe);await se("prayerScannerTeachers",ke.join(","))}T(`ถอนสิทธิ์ "${me}" สำเร็จ`,"success"),q()}catch(xe){T("ทำรายการไม่สำเร็จ: "+xe.message,"error")}})})};i.querySelectorAll("[data-scanner-audience]").forEach(G=>{G.addEventListener("click",()=>{D.audience=G.dataset.scannerAudience,D.type="",D.gender="",D.audience==="teacher"&&(D.day="",D.permission=""),X()})}),(g=document.getElementById("btn-filter-unassigned-scanner"))==null||g.addEventListener("click",()=>{D.day="none",D.type="student",X()}),(p=document.getElementById("btn-reset-scanner-filters"))==null||p.addEventListener("click",()=>{D={audience:"all",type:"",gender:"",room:"",permission:"",day:"",q:""},X()}),X()}catch(n){i.innerHTML=`<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${n.message}</div>`}};document.getElementById("btn-search-scanner-students").addEventListener("click",async()=>{const i=document.getElementById("pr-scanner-search-input").value.trim();if(!i){T("กรุณากรอกรหัสนักเรียนหรือรหัสครู","warning");return}const g=i.split(/[\s,]+/).map(p=>p.trim()).filter(Boolean);if(g.length)try{const[p,n]=await Promise.all([le.from("students").select("id, student_code, full_name, main_room, gender, image_url").in("student_code",g),le.from("teachers").select("id, teacher_code, full_name, dept, image_url").in("teacher_code",g)]);if(p.error)throw p.error;if(n.error)throw n.error;const c=p.data??[],x=n.data??[];_=[...c.map(k=>({...k,code:k.student_code,type:"student",display_info:`รหัส ${k.student_code} · ห้อง ${k.main_room||"—"} · ${k.gender||"ไม่ระบุเพศ"}`})),...x.map(k=>({...k,code:k.teacher_code,type:"teacher",display_info:`รหัสครู ${k.teacher_code} · กลุ่มสาระ ${k.dept||"—"}`}))];const j=document.getElementById("scanner-preview-container"),H=document.getElementById("scanner-preview-cards");if(!_.length){j.classList.add("hidden"),T("ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ","warning");return}j.classList.remove("hidden"),H.innerHTML=_.map(k=>`
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
        `).join("")}catch(p){T("ค้นหาล้มเหลว: "+p.message,"error")}}),document.getElementById("btn-confirm-scanner-grant").addEventListener("click",async()=>{if(!_.length)return;const i=document.getElementById("btn-confirm-scanner-grant");i.disabled=!0,i.textContent="⏳ กำลังบันทึก...";try{const g=_.filter(n=>n.type==="student").map(n=>n.id),p=_.filter(n=>n.type==="teacher").map(n=>n.code);if(g.length>0){const{error:n}=await le.from("students").update({can_scan_prayer:!0}).in("id",g);if(n)throw n}if(p.length>0){const n=await ce().catch(()=>({}));let c=E(n.prayerScannerTeachers);p.forEach(x=>{c.includes(x)||c.push(x)}),await se("prayerScannerTeachers",c.join(","))}T(`มอบสิทธิ์สำเร็จ ${_.length} คน`,"success"),document.getElementById("pr-scanner-search-input").value="",document.getElementById("scanner-preview-container").classList.add("hidden"),_=[],q()}catch(g){T("บันทึกไม่สำเร็จ: "+g.message,"error")}finally{i.disabled=!1,i.textContent="✓ ยืนยันและมอบสิทธิ์สแกนเนอร์"}}),q()},d=_=>{r&&(clearInterval(r),r=null),document.querySelectorAll("[data-tab]").forEach(D=>{D.className=D.dataset.tab===_?"px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700":"px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700"}),_==="scores"?v():_==="history"?b():_==="scanners"?u():l()};document.getElementById("pr-tab-scores").addEventListener("click",()=>d("scores")),(C=document.getElementById("pr-tab-history"))==null||C.addEventListener("click",()=>d("history")),document.getElementById("pr-tab-scanners").addEventListener("click",()=>d("scanners")),document.getElementById("pr-tab-config").addEventListener("click",()=>d("config")),a&&((h=document.getElementById("pr-tab-scanner-cam"))==null||h.addEventListener("click",async()=>{const{renderStudentPrayerScanner:_}=await ne(async()=>{const{renderStudentPrayerScanner:D}=await import("./student-views-DJMSwDcA.js");return{renderStudentPrayerScanner:D}},__vite__mapDeps([29,4,30,1,12,0,3,31,24,6,9,18,27,16]));_(s)})),d("scores")}function Ht(t,r,s,o){var w;(w=document.getElementById("rsa-modal"))==null||w.remove();const m=!!t,y=document.createElement("div");y.id="rsa-modal",y.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",y.innerHTML=`
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
    </div>`,document.body.appendChild(y),y.querySelector("#rsa-cancel").addEventListener("click",()=>y.remove()),y.addEventListener("click",a=>{a.target===y&&y.remove()}),y.querySelector("#rsa-form").addEventListener("submit",async a=>{a.preventDefault();const v=y.querySelector("#rsa-save");v.disabled=!0,v.textContent="กำลังบันทึก...";try{const b={name:y.querySelector("#rsa-name").value.trim(),max_score:parseInt(y.querySelector("#rsa-max").value)||20,sort_order:parseInt(y.querySelector("#rsa-order").value)||0,sheet_col:y.querySelector("#rsa-sheetcol").value.trim().toUpperCase()||null,academic_year:r,semester:s};m?await $n(t.id,b):await kn(b),T("บันทึกสำเร็จ","success"),y.remove(),o()}catch(b){T("บันทึกไม่สำเร็จ: "+(b.message??""),"error"),v.disabled=!1,v.textContent=m?"บันทึก":"เพิ่ม"}})}async function ca(){var w,a,v,b;re("admin-profile"),document.getElementById("page-title").textContent="โปรไฟล์ของฉัน";let t=null,r="",s=null;try{const{data:e}=await le.auth.getSession();if(t=((a=(w=e==null?void 0:e.session)==null?void 0:w.user)==null?void 0:a.id)??null,r=((b=(v=e==null?void 0:e.session)==null?void 0:v.user)==null?void 0:b.email)??"",t){const{data:l}=await le.from("teachers").select("id, full_name, image_url, username, login_email").eq("profile_id",t).maybeSingle();s=l??null}}catch{}const o="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white";ae(`<div class="max-w-lg mx-auto animate-fade">

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
      ${s!=null&&s.username?`<p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-700 font-mono">${s.username}</span></p>`:'<p class="text-xs text-amber-500 mb-3">⚠️ ยังไม่ได้ตั้งยูเซอร์เนม — ตั้งเพื่อ login โดยไม่ต้องใช้อีเมล</p>'}
      <input id="adm-username" type="text" value="${(s==null?void 0:s.username)??""}"
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
      <p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-600">${r}</span></p>
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
  </div>`);const m=(e,l,u)=>{const d=document.getElementById(e);d.className=`text-xs text-center mt-2 py-2 rounded-lg ${u?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,d.textContent=l,d.classList.remove("hidden"),setTimeout(()=>d.classList.add("hidden"),3500)},y=async e=>{const{data:l,error:u}=await le.rpc("upsert_admin_teacher_profile",{p_profile_id:t,p_full_name:e.full_name??null,p_username:e.username??null,p_login_email:e.login_email??null});if(u)throw u;return l};document.getElementById("btn-save-name").addEventListener("click",async()=>{const e=document.getElementById("btn-save-name"),l=document.getElementById("adm-name").value.trim();if(!l){m("name-msg","กรุณากรอกชื่อ-นามสกุล",!1);return}e.disabled=!0,e.textContent="กำลังบันทึก...";try{await y({full_name:l,login_email:r}),m("name-msg","บันทึกชื่อสำเร็จ ✅",!0);const u=document.getElementById("user-name");u&&(u.textContent=l)}catch(u){m("name-msg","บันทึกไม่สำเร็จ: "+(u.message??""),!1)}finally{e.disabled=!1,e.textContent="บันทึกชื่อ"}}),document.getElementById("btn-save-username").addEventListener("click",async()=>{var d,f;const e=document.getElementById("btn-save-username"),l=document.getElementById("adm-username").value.trim().toLowerCase(),u=/^[a-z0-9._-]{3,32}$/.test(l);if(!l){m("username-msg","กรุณากรอก username",!1);return}if(!u){m("username-msg","username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _",!1);return}e.disabled=!0,e.textContent="กำลังบันทึก...";try{await y({username:l,login_email:r}),m("username-msg",`บันทึก username "${l}" สำเร็จ ✅ ใช้ login ได้เลย`,!0),document.getElementById("adm-username").value=l}catch(B){const C=(d=B.message)!=null&&d.includes("unique")||(f=B.message)!=null&&f.includes("duplicate")?`username "${l}" ถูกใช้แล้ว — ลองชื่ออื่น`:"บันทึกไม่สำเร็จ: "+(B.message??"");m("username-msg",C,!1)}finally{e.disabled=!1,e.textContent="บันทึก Username"}}),document.getElementById("adm-username").addEventListener("input",e=>{const l=e.target.selectionStart;e.target.value=e.target.value.toLowerCase().replace(/[^a-z0-9._-]/g,""),e.target.setSelectionRange(l,l)}),document.getElementById("btn-save-email").addEventListener("click",async()=>{const e=document.getElementById("btn-save-email"),l=document.getElementById("adm-email").value.trim();if(!l||!l.includes("@")){m("email-msg","กรุณากรอกอีเมลให้ถูกต้อง",!1);return}e.disabled=!0,e.textContent="กำลังส่งลิงก์...";try{const{error:u}=await le.auth.updateUser({email:l});if(u)throw u;m("email-msg","ส่งลิงก์ยืนยันไปที่ "+l+" แล้ว ✅",!0),document.getElementById("adm-email").value=""}catch(u){m("email-msg","ไม่สำเร็จ: "+(u.message??""),!1)}finally{e.disabled=!1,e.textContent="เปลี่ยนอีเมล"}}),document.getElementById("btn-save-pw").addEventListener("click",async()=>{const e=document.getElementById("btn-save-pw"),l=document.getElementById("adm-pw").value,u=document.getElementById("adm-pw2").value;if(!l||l.length<6){m("pw-msg","รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!1);return}if(l!==u){m("pw-msg","รหัสผ่านทั้งสองช่องไม่ตรงกัน",!1);return}e.disabled=!0,e.textContent="กำลังเปลี่ยน...";try{const{error:d}=await le.auth.updateUser({password:l});if(d)throw d;m("pw-msg","เปลี่ยนรหัสผ่านสำเร็จ ✅",!0),document.getElementById("adm-pw").value="",document.getElementById("adm-pw2").value=""}catch(d){m("pw-msg","ไม่สำเร็จ: "+(d.message??""),!1)}finally{e.disabled=!1,e.textContent="เปลี่ยนรหัสผ่าน"}})}async function pa(){var w;const t=a=>{document.getElementById("main-content").innerHTML=a};(a=>{document.querySelectorAll("[data-nav]").forEach(v=>{const b=v.dataset.nav===a;v.classList.toggle("bg-indigo-800",b),v.classList.toggle("text-white",b),v.classList.toggle("text-indigo-200",!b)})})("usage-stats"),document.getElementById("page-title").textContent="สถิติการใช้งาน";const o=new Date().toLocaleDateString("th-TH",{month:"long",year:"numeric"}),m=(a,v,b,e)=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${a} ${v}</p>
      <p id="${b}-today" class="text-3xl font-extrabold ${e}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${b}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${b}-total" class="font-bold text-gray-600">—</span>
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
  </div>`);const y=async()=>{try{const a=await Pn();document.getElementById("stat-teacher-today").textContent=a.teacherToday,document.getElementById("stat-teacher-month").textContent=a.teacherMonth,document.getElementById("stat-teacher-total").textContent=a.teacherTotal,document.getElementById("stat-student-today").textContent=a.studentToday,document.getElementById("stat-student-month").textContent=a.studentMonth,document.getElementById("stat-student-total").textContent=a.studentTotal,document.getElementById("stat-updated").textContent=new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}catch{T("โหลดสถิติไม่สำเร็จ","error")}};await y(),(w=document.getElementById("stat-refresh"))==null||w.addEventListener("click",y)}async function ua(){var w;const t=a=>{document.getElementById("main-content").innerHTML=a};(a=>document.querySelectorAll("[data-nav]").forEach(v=>{v.classList.toggle("bg-indigo-800",v.dataset.nav===a),v.classList.toggle("text-white",v.dataset.nav===a),v.classList.toggle("text-indigo-200",v.dataset.nav!==a)}))("classrooms-admin"),document.getElementById("page-title").textContent="ห้องเรียน/แผนผัง";const s=["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6"],o=async()=>{const a=await St(),v=s.map(e=>({building:e,rooms:a.filter(l=>l.building===e)}));[...new Set(a.map(e=>e.building).filter(e=>!s.includes(e)))].forEach(e=>v.push({building:e,rooms:a.filter(l=>l.building===e)})),document.getElementById("crm-content").innerHTML=v.filter(e=>e.rooms.length>0).map(e=>`
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
      </div>`).join(""),document.querySelectorAll(".crm-add-btn").forEach(e=>{e.addEventListener("click",()=>y(null,e.dataset.building,a))}),document.querySelectorAll(".crm-edit-btn").forEach(e=>{const l=a.find(u=>u.id===parseInt(e.dataset.id));l&&e.addEventListener("click",()=>y(l,l.building,a))}),document.querySelectorAll(".crm-del-btn").forEach(e=>{e.addEventListener("click",()=>{const l=a.find(u=>u.id===parseInt(e.dataset.id));m(l)})})},m=a=>{var b;(b=document.getElementById("crm-confirm"))==null||b.remove();const v=document.createElement("div");v.id="crm-confirm",v.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",v.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${a==null?void 0:a.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${a==null?void 0:a.building}${a!=null&&a.name?" · "+a.name:""}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`,document.body.appendChild(v),v.querySelector("#crm-conf-no").addEventListener("click",()=>v.remove()),v.querySelector("#crm-conf-yes").addEventListener("click",async()=>{v.remove();try{await gn(a.id),T("ลบห้องแล้ว ✅","success"),o()}catch(e){T("ลบไม่สำเร็จ: "+(e.message??""),"error")}})},y=(a,v,b)=>{var u;(u=document.getElementById("crm-modal"))==null||u.remove();const e=[...new Set(["อาคาร 1","อาคาร 2","อาคาร 3","อาคาร 4","อาคาร 5","อาคาร 6",...b.map(d=>d.building)])],l=document.createElement("div");l.id="crm-modal",l.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",l.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${a?"แก้ไขห้อง":"เพิ่มห้องใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${e.map(d=>`<option value="${d}" ${d===((a==null?void 0:a.building)??v)?"selected":""}>${d}</option>`).join("")}
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
    </div>`,document.body.appendChild(l),l.querySelector("#crm-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#crm-save").addEventListener("click",async()=>{const d=l.querySelector("#crm-save"),f=l.querySelector("#crm-building").value,B=l.querySelector("#crm-number").value.trim(),C=l.querySelector("#crm-name").value.trim()||null,h=l.querySelector("#crm-teaching").checked;if(!f||!B){T("กรุณากรอกอาคารและหมายเลขห้อง","warning");return}d.disabled=!0,d.textContent="⏳";try{a?await nn(a.id,{building:f,room_number:B,name:C,is_teaching_room:h}):await sn({building:f,room_number:B,name:C,is_teaching_room:h}),T(a?"แก้ไขแล้ว ✅":"เพิ่มห้องแล้ว ✅","success"),l.remove(),o()}catch(_){T("บันทึกไม่สำเร็จ: "+(_.message??""),"error"),d.disabled=!1,d.textContent="บันทึก"}})};t(`<div class="max-w-3xl mx-auto animate-fade">
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
  </div>`),await o(),(w=document.getElementById("crm-add-new"))==null||w.addEventListener("click",async()=>{const a=await St().catch(()=>[]);y(null,"อาคาร 1",a)})}const Ir=(t,r=[])=>[1,2,3,4,5,6,7,8,9].map(s=>{const o=r.includes(s);return`<button type="button" data-period="${s}"
      class="${t}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${o?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-400"}">${s}</button>`}).join(""),$t=(t,r,s="",o=[])=>`
  <div class="${t}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${t}-session-label text-xs font-semibold text-violet-700">วันที่ ${r+1}</span>
      <button type="button" class="${t}-session-remove ${r===0?"hidden":""} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${t}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${s}"/>
    <div class="flex flex-wrap gap-1.5 ${t}-session-pills">${Ir(t,o)}</div>
  </div>`;function ma(t,r){const s=t.querySelector(`#${r}-sessions-list`),o=()=>{s.querySelectorAll(`.${r}-session-pill`).forEach(y=>{y.onclick=null,y.addEventListener("click",()=>{const w=y.classList.contains("bg-violet-600");y.className=`${r}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${w?"bg-white text-gray-600 border-gray-200 hover:border-violet-400":"bg-violet-600 text-white border-violet-600"}`})}),s.querySelectorAll(`.${r}-session-remove`).forEach(y=>{y.onclick=null,y.addEventListener("click",()=>{y.closest(`.${r}-session`).remove(),m()})})},m=()=>{const y=[...s.querySelectorAll(`.${r}-session`)];y.forEach((w,a)=>{w.querySelector(`.${r}-session-label`).textContent=`วันที่ ${a+1}`,w.querySelector(`.${r}-session-remove`).classList.toggle("hidden",y.length<=1)}),o()};t.querySelector(`#${r}-add-session`).addEventListener("click",()=>{const y=s.querySelectorAll(`.${r}-session`).length,w=document.createElement("div");w.innerHTML=$t(r,y),s.appendChild(w.firstElementChild),m()}),o()}function ga(t,r){return[...t.querySelectorAll(`.${r}-session`)].map(s=>({date:s.querySelector(`.${r}-session-date`).value,periods:[...s.querySelectorAll(`.${r}-session-pill.bg-violet-600`)].map(o=>parseInt(o.dataset.period))}))}const Cr={teacher:'<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',student:'<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',futsal_player:'<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>'},xa=t=>Cr[t]??"",ba=t=>{var s,o;const r=(((s=t.target_teacher_ids)==null?void 0:s.length)??0)+(((o=t.target_student_ids)==null?void 0:o.length)??0);return r?`<span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[11px] font-bold">🎯 เจาะจง ${r} คน</span>`:""};async function ya(t,r,s="all"){try{const o=s==="teacher"?["all_teachers"]:s==="student"?["all_students"]:s==="futsal_player"?[]:["all_teachers","all_students"];await Promise.all(o.map(m=>le.functions.invoke("send-push",{body:{title:`📢 ${t}`,body:(r??"").slice(0,150),url:m==="all_students"?"student.html":"teacher.html",target:m}})))}catch{}}let ct=null;function fa(){return ct||(ct=Promise.all([ue(),He()]).then(([t,r])=>({teachers:t,students:r})).catch(()=>({teachers:[],students:[]}))),ct}async function ha(){var w;re("announcements"),document.getElementById("page-title").textContent="ประกาศ";const t=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=a=>new Date(a).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ae(`<div class="animate-fade">
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
  </div>`);const s=async()=>{const a=document.getElementById("ann-list");if(!a)return;let v;try{v=await Un()}catch{a.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!v.length){a.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const b={};try{(await Gn(v.map(l=>l.id))).forEach(l=>{b[l.announcement_id]=(b[l.announcement_id]??0)+1})}catch{}a.innerHTML=v.map(e=>{var l,u;return`
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
              ${xa(e.audience)}
              ${ba(e)}
              ${e.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${t(e.title)}</h3>
            ${e.ann_type==="training"&&e.event_date?`
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📅 ${r(e.event_date)}</span>
                ${e.event_location?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📍 ${t(e.event_location)}</span>`:""}
                ${(l=e.event_periods)!=null&&l.length?`<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${e.event_periods.sort((d,f)=>d-f).join(", ")}</span>`:""}
              </div>`:e.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">${t(e.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">
              ${r(e.created_at)}
              ${(u=e.teachers)!=null&&u.full_name?` · 📝 ${t(e.teachers.full_name)}`:" · ⚙️ แอดมิน"}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${e.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${e.id}" data-title="${t(e.title)}">💬 ${b[e.id]??0} ความคิดเห็น</button>
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
      </div>`}).join(""),a.querySelectorAll(".ann-toggle-btn").forEach(e=>{e.addEventListener("click",async()=>{const l=Number(e.dataset.id),u=e.dataset.active==="true";e.disabled=!0,e.textContent="...";try{await st(l,{isActive:!u}),await s()}catch{T("บันทึกไม่สำเร็จ","error"),e.disabled=!1}})}),a.querySelectorAll(".ann-edit-btn").forEach(e=>{e.addEventListener("click",()=>{const l=v.find(u=>u.id===Number(e.dataset.id));l&&y(l,s)})}),a.querySelectorAll(".ann-del-btn").forEach(e=>{e.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${e.dataset.title}" ?`)){e.disabled=!0;try{await Wn(Number(e.dataset.id)),await s()}catch{T("ลบไม่สำเร็จ","error"),e.disabled=!1}}})}),a.querySelectorAll(".ann-rsvp-list-btn").forEach(e=>{e.addEventListener("click",async()=>m(Number(e.dataset.id),e.dataset.title))}),a.querySelectorAll(".ann-comments-view-btn").forEach(e=>{e.addEventListener("click",async()=>o(Number(e.dataset.id),e.dataset.title,s))})},o=async(a,v,b)=>{const e=await Xn(a).catch(()=>[]),l=d=>new Date(d).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),u=document.createElement("div");u.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${t(v)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${e.length?e.map(d=>{var f,B;return`
            <div class="flex items-start gap-2" data-comment-id="${d.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${t((((f=d.teachers)==null?void 0:f.full_name)??"?").charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${t(((B=d.teachers)==null?void 0:B.full_name)??"ครู")}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${d.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${t(d.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${l(d.created_at)}</p>
              </div>
            </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
        </div>
      </div>`,document.body.appendChild(u),u.querySelector("#comments-list-close").onclick=()=>u.remove(),u.addEventListener("click",d=>{d.target===u&&u.remove()}),u.querySelectorAll(".comment-del-btn").forEach(d=>{d.addEventListener("click",async()=>{var f;if(confirm("ลบความคิดเห็นนี้?"))try{await Zn(Number(d.dataset.id)),(f=u.querySelector(`[data-comment-id="${d.dataset.id}"]`))==null||f.remove(),await(b==null?void 0:b())}catch(B){T("ลบไม่สำเร็จ: "+(B.message??""),"error")}})})},m=async(a,v)=>{const{getAnnouncementRsvps:b}=await ne(async()=>{const{getAnnouncementRsvps:B}=await import("./api-1xsyVspL.js");return{getAnnouncementRsvps:B}},__vite__mapDeps([0,1])),e=await b(a).catch(()=>[]),l={yes:[],maybe:[],no:[]};e.forEach(B=>{l[B.response]&&l[B.response].push(B)});const u=B=>{var C,h;return`<li class="text-sm text-gray-700">${t(((C=B.teachers)==null?void 0:C.full_name)??"?")} <span class="text-xs text-gray-400">${((h=B.teachers)==null?void 0:h.dept)??""}</span></li>`},d=(B,C,h,_)=>l[B].length?`
      <div class="mb-4">
        <p class="text-xs font-bold ${_} mb-1.5">${C} ${h} (${l[B].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${l[B].map(u).join("")}</ul>
      </div>`:"",f=document.createElement("div");f.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",f.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[220px]">${t(v)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="rsvp-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5">
          ${e.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
          ${d("yes","✅","สนใจเข้าร่วมแน่นอน","text-emerald-700")}
          ${d("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
          ${d("no","❌","ไม่สนใจ","text-gray-500")}
          ${e.length?`<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${e.length} คน</p>`:""}
        </div>
      </div>`,document.body.appendChild(f),f.querySelector("#rsvp-list-close").onclick=()=>f.remove(),f.addEventListener("click",B=>{B.target===f&&f.remove()})},y=(a,v)=>{var S;(S=document.getElementById("ann-modal"))==null||S.remove();const b=document.createElement("div");b.id="ann-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const e=!!(a!=null&&a.id);b.innerHTML=`
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
                ${$t("ann",0,(a==null?void 0:a.event_date)??"",(a==null?void 0:a.event_periods)??[])}
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
      </div>`,document.body.appendChild(b);const l=()=>b.remove();b.querySelector("#ann-modal-close").onclick=l,b.querySelector("#ann-modal-cancel").onclick=l,b.addEventListener("click",q=>{q.target===b&&l()});let u=null,d=null;fa().then(({teachers:q,students:i})=>{document.body.contains(b)&&(u=bt({wrap:b.querySelector("#ann-target-teachers-wrap"),chipsWrap:b.querySelector("#ann-target-teachers-chips"),teachers:q,value:(a==null?void 0:a.target_teacher_ids)??[]}),d=Pt({wrap:b.querySelector("#ann-target-students-wrap"),chipsWrap:b.querySelector("#ann-target-students-chips"),students:i,value:(a==null?void 0:a.target_student_ids)??[]}))});const f=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],B=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],C=(q,i)=>{const g=document.createElement("div");g.className="mt-1.5 hidden",g.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${i.map(p=>`<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${p}">${p}</button>`).join("")}
        </div>`,q.parentNode.appendChild(g),q.addEventListener("focus",()=>g.classList.remove("hidden")),q.addEventListener("blur",()=>setTimeout(()=>g.classList.add("hidden"),150)),g.querySelectorAll(".ann-chip").forEach(p=>{p.addEventListener("mousedown",n=>n.preventDefault()),p.addEventListener("click",()=>{q.value.trim()?q.value+=(q.tagName==="TEXTAREA"?`
`:" ")+p.dataset.val:q.value=p.dataset.val,q.focus()})})};C(b.querySelector("#ann-title"),f),C(b.querySelector("#ann-body"),B);let h=(a==null?void 0:a.file_url)??null;const _=b.querySelector("#ann-image-status"),D=b.querySelector("#ann-image-preview"),A=b.querySelector("#ann-image-preview-img");b.querySelector("#ann-image-file").addEventListener("change",async q=>{var g;const i=(g=q.target.files)==null?void 0:g[0];if(i){_.textContent="กำลังอัปโหลด...";try{h=await Vt(i),A.src=h,D.classList.remove("hidden"),_.textContent="อัปโหลดสำเร็จ ✅"}catch(p){_.textContent="อัปโหลดไม่สำเร็จ: "+(p.message??"")}q.target.value=""}}),b.querySelector("#ann-image-remove").addEventListener("click",()=>{h=null,D.classList.add("hidden"),_.textContent=""});let E=[];b.querySelector("#ann-cal-ref").addEventListener("click",async()=>{const q=b.querySelector("#ann-cal-picker");if(!q.classList.contains("hidden")){q.classList.add("hidden");return}q.classList.remove("hidden");const i=b.querySelector("#ann-cal-event-sel");if(i.options.length<=1)try{const{getWorkCalendarEvents:g,getSchoolConfig:p}=await ne(async()=>{const{getWorkCalendarEvents:j,getSchoolConfig:H}=await import("./api-1xsyVspL.js");return{getWorkCalendarEvents:j,getSchoolConfig:H}},__vite__mapDeps([0,1]));let n=new Date().getFullYear()+543,c=1;try{const j=await p();n=j.academic_year,c=j.semester}catch{}E=await g(n,c);const x={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};E.forEach(j=>{const H=document.createElement("option");H.value=j.id;const k=j.event_type==="inspection"&&j.round_number?` ครั้งที่ ${j.round_number}`:"",I=new Date(j.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});H.textContent=`${x[j.event_type]??"📌"}${k} ${j.label} (${I})`,i.appendChild(H)})}catch(g){i.innerHTML=`<option>โหลดไม่สำเร็จ: ${g.message}</option>`}}),b.querySelector("#ann-cal-event-sel").addEventListener("change",()=>{const q=+b.querySelector("#ann-cal-event-sel").value,i=E.find(x=>x.id===q),g=b.querySelector("#ann-cal-preview"),p=b.querySelector("#ann-cal-fill");if(!i){g.classList.add("hidden"),p.classList.add("hidden");return}const n=(i.work_calendar_items||[]).sort((x,j)=>x.sort_order-j.sort_order),c=new Date(i.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});g.innerHTML=`<p class="font-semibold">${i.label}</p>
        <p class="text-indigo-600">📅 ${c}${i.event_type==="inspection"&&i.round_number?` · ครั้งที่ ${i.round_number}`:""}</p>
        ${i.description?`<p>${i.description}</p>`:""}
        ${n.length?`<ul class="mt-1 space-y-0.5">${n.map(x=>`<li>☑ ${x.item_label}</li>`).join("")}</ul>`:""}`,g.classList.remove("hidden"),p.classList.remove("hidden")}),b.querySelector("#ann-cal-fill").addEventListener("click",()=>{const q=+b.querySelector("#ann-cal-event-sel").value,i=E.find(x=>x.id===q);if(!i)return;const g=(i.work_calendar_items||[]).sort((x,j)=>x.sort_order-j.sort_order),p=new Date(i.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),n=i.event_type==="inspection"&&i.round_number?` ครั้งที่ ${i.round_number}`:"";b.querySelector("#ann-title").value=i.label+(n?` (${n.trim()})`:"");const c=[];i.description&&c.push(i.description),g.length&&(c.push("สิ่งที่ต้องเตรียม:"),g.forEach(x=>c.push(`• ${x.item_label}`))),c.push(`กำหนดวันที่: ${p}`),b.querySelector("#ann-body").value=c.join(`
`),i.event_date&&(b.querySelector("#ann-due").value=i.event_date),b.querySelector("#ann-cal-picker").classList.add("hidden")}),b.querySelectorAll(".ann-type-btn").forEach(q=>{q.addEventListener("click",()=>{const i=q.dataset.type;b.querySelectorAll(".ann-type-btn").forEach(g=>{const p=g.dataset.type==="training";g.className=`ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${g.dataset.type===i?p?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":p?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),b.querySelector("#ann-training-fields").classList.toggle("hidden",i!=="training")})});const L=q=>q==="teacher"?"bg-sky-600 text-white border-sky-600":q==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",$=q=>q==="teacher"?"hover:border-sky-300":q==="student"?"hover:border-teal-300":"hover:border-indigo-300";b.querySelectorAll(".ann-audience-btn").forEach(q=>{q.addEventListener("click",()=>{b.querySelectorAll(".ann-audience-btn").forEach(i=>{i.className=`ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${i.dataset.audience===q.dataset.audience?L(i.dataset.audience):`bg-white text-gray-600 border-gray-200 ${$(i.dataset.audience)}`}`})})}),ma(b,"ann"),b.querySelectorAll(".ann-filter-btn").forEach(q=>{q.addEventListener("click",()=>{b.querySelectorAll(".ann-filter-btn").forEach(i=>{i.className=`ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${i.dataset.filter===q.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),b.querySelector("#ann-modal-save").addEventListener("click",async()=>{var Q,W;const q=b.querySelector("#ann-title").value.trim();if(!q){T("กรุณากรอกหัวข้อ","warning");return}const i=b.querySelector("#ann-body").value.trim()||null,g=b.querySelector("#ann-active-toggle").dataset.on==="true",p=b.querySelector("#ann-pin").dataset.on==="true"?1:0,n=b.querySelector("#ann-ack").dataset.on==="true",c=b.querySelector("#ann-due").value||null,x=b.querySelector(".ann-type-btn.bg-violet-600")||(a==null?void 0:a.ann_type)==="training"?"training":"general",j=((Q=b.querySelector(".ann-audience-btn.text-white"))==null?void 0:Q.dataset.audience)??(a==null?void 0:a.audience)??"all",H=b.querySelector("#ann-video-url").value.trim()||null,k=x==="training"&&b.querySelector("#ann-event-location").value.trim()||null,I=((W=b.querySelector(".ann-filter-btn.bg-violet-600"))==null?void 0:W.dataset.filter)??(a==null?void 0:a.schedule_filter)??"all",R=(u==null?void 0:u.getValue())??(a==null?void 0:a.target_teacher_ids)??[],N=(d==null?void 0:d.getValue())??(a==null?void 0:a.target_student_ids)??[];if(x==="training"){if(!k){T("กรุณาระบุสถานที่","warning");return}const P=ga(b,"ann");for(const Y of P){if(!Y.date){T("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!Y.periods.length){T("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const U=b.querySelector("#ann-modal-save");U.disabled=!0,U.textContent="กำลังบันทึก...";try{e?await st(a.id,{title:q,body:i,isActive:g,priority:p,requiresAck:n,dueDate:c,annType:x,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:k,scheduleFilter:I,fileUrl:h,videoUrl:H,audience:j,targetTeacherIds:R,targetStudentIds:N}):P.length>1?(await Promise.all(P.map(Y=>rt({title:q,body:i,isActive:g,priority:p,requiresAck:n,dueDate:c,annType:x,eventDate:Y.date,eventPeriods:Y.periods,eventLocation:k,scheduleFilter:I,fileUrl:h,videoUrl:H,audience:j,targetTeacherIds:R,targetStudentIds:N}))),T(`สร้าง ${P.length} ประกาศสำเร็จ ✅`,"success")):(await rt({title:q,body:i,isActive:g,priority:p,requiresAck:n,dueDate:c,annType:x,eventDate:P[0].date,eventPeriods:P[0].periods,eventLocation:k,scheduleFilter:I,fileUrl:h,videoUrl:H,audience:j,targetTeacherIds:R,targetStudentIds:N}),T("บันทึกสำเร็จ ✅","success")),l(),await v()}catch(Y){T("บันทึกไม่สำเร็จ: "+(Y.message??""),"error"),U.disabled=!1,U.textContent="บันทึก"}return}const O=b.querySelector("#ann-modal-save");O.disabled=!0,O.textContent="กำลังบันทึก...";try{e?await st(a.id,{title:q,body:i,isActive:g,priority:p,requiresAck:n,dueDate:c,annType:x,fileUrl:h,videoUrl:H,audience:j,targetTeacherIds:R,targetStudentIds:N}):await rt({title:q,body:i,isActive:g,priority:p,requiresAck:n,dueDate:c,annType:x,fileUrl:h,videoUrl:H,audience:j,targetTeacherIds:R,targetStudentIds:N}),!e&&g&&ya(q,i,j),T("บันทึกสำเร็จ ✅","success"),l(),await v()}catch(P){T("บันทึกไม่สำเร็จ: "+(P.message??""),"error"),O.disabled=!1,O.textContent="บันทึก"}})};(w=document.getElementById("ann-create-btn"))==null||w.addEventListener("click",()=>y(null,s)),await s()}const Br={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},Tr=t=>Br[t]??"แอดมิน",jr=t=>t?t.startsWith("academic")?"bg-blue-100 text-blue-700":t.startsWith("registrar")?"bg-violet-100 text-violet-700":t==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600";async function Ar(t,r=!1){var B,C;const{getMyAnnouncements:s,createAnnouncement:o,updateAnnouncement:m,deleteAnnouncement:y,getAckStats:w,getAnnouncementCommentsBulk:a,getAnnouncementComments:v,deleteAnnouncementComment:b}=await ne(async()=>{const{getMyAnnouncements:h,createAnnouncement:_,updateAnnouncement:D,deleteAnnouncement:A,getAckStats:E,getAnnouncementCommentsBulk:L,getAnnouncementComments:$,deleteAnnouncementComment:S}=await import("./api-1xsyVspL.js");return{getMyAnnouncements:h,createAnnouncement:_,updateAnnouncement:D,deleteAnnouncement:A,getAckStats:E,getAnnouncementCommentsBulk:L,getAnnouncementComments:$,deleteAnnouncementComment:S}},__vite__mapDeps([0,1])),e=((B=t==null?void 0:t.positions)!=null&&B.length?t.positions[0]:t==null?void 0:t.position)??null;re("announcements"),document.getElementById("page-title").textContent="จัดการประกาศ";const l=h=>String(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),u=h=>new Date(h).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"});ae(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${jr(e)}">${Tr(e)}</span>
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
  </div>`);const d=async()=>{const h=document.getElementById("sann-list");if(!h)return;let _;try{_=await s(t.id)}catch{h.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!_.length){h.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`;return}const D=L=>L?new Date(L).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",A=L=>{if(!L)return"";const $=Math.ceil((new Date(L)-new Date)/864e5);return $<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${D(L)}</span>`:$<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${D(L)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${D(L)}</span>`},E={};try{(await a(_.map($=>$.id))).forEach($=>{E[$.announcement_id]=(E[$.announcement_id]??0)+1})}catch{}h.innerHTML=_.map(L=>`
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
              ${xa(L.audience)}
              ${ba(L)}
              ${L.video_url?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>':""}
              ${A(L.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${l(L.title)}</h3>
            ${L.body?`<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${l(L.body)}</p>`:""}
            <p class="text-[11px] text-gray-400 mt-2">${u(L.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${L.like_count??0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${L.id}" data-title="${l(L.title)}">💬 ${E[L.id]??0} ความคิดเห็น</button>
              <span>👁️ ${L.view_count??0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${L.requires_ack?`<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${L.id}" data-title="${l(L.title)}">📊 สถิติ</button>`:""}
            ${L.ann_type==="training"?`<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${L.id}" data-title="${l(L.title)}">👥 รายชื่อ</button>`:""}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${L.is_active?"border-gray-200 text-gray-500 hover:bg-gray-50":"border-emerald-200 text-emerald-600 hover:bg-emerald-50"}"
              data-id="${L.id}" data-active="${L.is_active}">
              ${L.is_active?"⏸ ปิด":"▶ เปิด"}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${L.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${L.id}" data-title="${l(L.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join(""),h.querySelectorAll(".sann-stat-btn").forEach(L=>{L.addEventListener("click",async()=>{const $=Number(L.dataset.id),S=L.dataset.title,q=document.getElementById("sann-stat-modal");q&&q.remove();const i=document.createElement("div");i.id="sann-stat-modal",i.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",i.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${l(S)}</p>
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
          </div>`,document.body.appendChild(i),i.querySelector("#sann-stat-close").onclick=()=>i.remove(),i.addEventListener("click",g=>{g.target===i&&i.remove()});try{const{acked:g,pending:p}=await w($),n=i.querySelector("#sann-stat-body"),c=x=>new Date(x).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});n.innerHTML=`
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${g.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${p.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${g.length?`
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${g.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${g.map(x=>`
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${l(x.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${c(x.acked_at)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
            ${p.length?`
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${p.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${p.map(x=>`
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${l(x.full_name)}</span>
                    </div>`).join("")}
                </div>
              </div>`:""}
          `}catch{i.querySelector("#sann-stat-body").innerHTML='<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'}})}),h.querySelectorAll(".sann-rsvp-list-btn").forEach(L=>{L.addEventListener("click",async()=>{const{getAnnouncementRsvps:$}=await ne(async()=>{const{getAnnouncementRsvps:c}=await import("./api-1xsyVspL.js");return{getAnnouncementRsvps:c}},__vite__mapDeps([0,1])),S=await $(Number(L.dataset.id)).catch(()=>[]),q=L.dataset.title,i={yes:[],maybe:[],no:[],none:[]};S.forEach(c=>(i[c.response]??i.none).push(c));const g=c=>{var x,j;return`<li class="text-sm text-gray-700">${l(((x=c.teachers)==null?void 0:x.full_name)??"?")} <span class="text-xs text-gray-400">${((j=c.teachers)==null?void 0:j.dept)??""}</span></li>`},p=(c,x,j,H)=>i[c].length?`
          <div class="mb-3">
            <p class="text-xs font-bold ${H} mb-1">${x} ${j} (${i[c].length})</p>
            <ul class="space-y-0.5 pl-3">${i[c].map(g).join("")}</ul>
          </div>`:"",n=document.createElement("div");n.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${q}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${S.length?"":'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>'}
              ${p("yes","✅","เข้าร่วมแน่นอน","text-emerald-700")}
              ${p("maybe","🤔","ไม่แน่ใจ","text-amber-700")}
              ${p("no","❌","ไม่สนใจ","text-gray-500")}
            </div>
          </div>`,document.body.appendChild(n),n.querySelector("#rsvp-list-close").onclick=()=>n.remove(),n.addEventListener("click",c=>{c.target===n&&n.remove()})})}),h.querySelectorAll(".ann-comments-view-btn").forEach(L=>{L.addEventListener("click",async()=>{const $=Number(L.dataset.id),S=L.dataset.title,q=await v($).catch(()=>[]),i=p=>new Date(p).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}),g=document.createElement("div");g.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",g.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${l(S)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${q.length?q.map(p=>{var n,c;return`
                <div class="flex items-start gap-2" data-comment-id="${p.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${l((((n=p.teachers)==null?void 0:n.full_name)??"?").charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${l(((c=p.teachers)==null?void 0:c.full_name)??"ครู")}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${p.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${l(p.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${i(p.created_at)}</p>
                  </div>
                </div>`}).join(""):'<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>'}
            </div>
          </div>`,document.body.appendChild(g),g.querySelector("#comments-list-close").onclick=()=>g.remove(),g.addEventListener("click",p=>{p.target===g&&g.remove()}),g.querySelectorAll(".comment-del-btn").forEach(p=>{p.addEventListener("click",async()=>{var n;if(confirm("ลบความคิดเห็นนี้?"))try{await b(Number(p.dataset.id)),(n=g.querySelector(`[data-comment-id="${p.dataset.id}"]`))==null||n.remove(),await d()}catch(c){T("ลบไม่สำเร็จ: "+(c.message??""),"error")}})})})}),h.querySelectorAll(".sann-toggle-btn").forEach(L=>{L.addEventListener("click",async()=>{L.disabled=!0;try{await m(Number(L.dataset.id),{isActive:L.dataset.active!=="true"}),await d()}catch{T("บันทึกไม่สำเร็จ","error"),L.disabled=!1}})}),h.querySelectorAll(".sann-edit-btn").forEach(L=>{L.addEventListener("click",()=>{const $=_.find(S=>S.id===Number(L.dataset.id));$&&f($)})}),h.querySelectorAll(".sann-del-btn").forEach(L=>{L.addEventListener("click",async()=>{if(confirm(`ลบประกาศ "${L.dataset.title}" ?`)){L.disabled=!0;try{await y(Number(L.dataset.id)),await d()}catch{T("ลบไม่สำเร็จ","error"),L.disabled=!1}}})})},f=(h=null)=>{var H;(H=document.getElementById("sann-modal"))==null||H.remove();const _=document.createElement("div");_.id="sann-modal",_.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const D=!!(h!=null&&h.id);_.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${D?"✏️ แก้ไขประกาศ":"➕ สร้างประกาศใหม่"}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${l((h==null?void 0:h.title)??"")}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${l((h==null?void 0:h.body)??"")}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${h!=null&&h.file_url?"":"hidden"} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${l((h==null?void 0:h.file_url)??"")}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${l((h==null?void 0:h.video_url)??"")}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ (admin เท่านั้นที่เปลี่ยนประเภทได้) -->
          ${r?`
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((h==null?void 0:h.ann_type)??"general")==="general"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(h==null?void 0:h.ann_type)==="training"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>`:""}
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${((h==null?void 0:h.audience)??"all")==="all"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(h==null?void 0:h.audience)==="teacher"?"bg-sky-600 text-white border-sky-600":"bg-white text-gray-600 border-gray-200 hover:border-sky-300"}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(h==null?void 0:h.audience)==="student"?"bg-teal-600 text-white border-teal-600":"bg-white text-gray-600 border-gray-200 hover:border-teal-300"}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(h==null?void 0:h.audience)==="futsal_player"?"bg-pink-600 text-white border-pink-600":"bg-white text-gray-600 border-gray-200 hover:border-pink-300"}">⚽ นักกีฬาฟุตซอล</button>
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
          <div id="sann-training-fields" class="${(h==null?void 0:h.ann_type)==="training"?"":"hidden"} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="sann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${l((h==null?void 0:h.event_location)??"")}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${$t("sann",0,(h==null?void 0:h.event_date)??"",(h==null?void 0:h.event_periods)??[])}
              </div>
              ${D?'<div id="sann-add-session" class="hidden"></div>':`<button type="button" id="sann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((h==null?void 0:h.schedule_filter)??"all")==="all"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${((h==null?void 0:h.schedule_filter)??"all")==="any"?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="sann-active-toggle" data-on="${(h==null?void 0:h.is_active)!==!1?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(h==null?void 0:h.is_active)!==!1?"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${(h==null?void 0:h.is_active)!==!1?"● แสดงให้ครูเห็น":"○ ปิดอยู่"}
            </button>
            <button type="button" id="sann-pin" data-on="${((h==null?void 0:h.priority)??0)>0?"true":"false"}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${((h==null?void 0:h.priority)??0)>0?"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
              ${((h==null?void 0:h.priority)??0)>0?"⭐ ปักหมุด":"☆ ปักหมุด"}
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
              <button type="button" id="sann-ack" data-on="${h!=null&&h.requires_ack?"true":"false"}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${h!=null&&h.requires_ack?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="sann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${(h==null?void 0:h.due_date)??""}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button id="sann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="sann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(_);const A=()=>_.remove();_.querySelector("#sann-modal-close").onclick=A,_.querySelector("#sann-modal-cancel").onclick=A,_.addEventListener("click",k=>{k.target===_&&A()});let E=null,L=null;fa().then(({teachers:k,students:I})=>{document.body.contains(_)&&(E=bt({wrap:_.querySelector("#sann-target-teachers-wrap"),chipsWrap:_.querySelector("#sann-target-teachers-chips"),teachers:k,value:(h==null?void 0:h.target_teacher_ids)??[]}),L=Pt({wrap:_.querySelector("#sann-target-students-wrap"),chipsWrap:_.querySelector("#sann-target-students-chips"),students:I,value:(h==null?void 0:h.target_student_ids)??[]}))});const $=["ประชุมครูประจำเดือน","แจ้งกำหนดส่งแบบฟอร์ม","ขอความร่วมมือ","แจ้งกำหนดการสอบ","แจ้งปฏิทินกิจกรรม"],S=["ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด","ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน","หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ"],q=(k,I)=>{const R=document.createElement("div");R.className="mt-1.5 hidden",R.innerHTML=`<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${I.map(N=>`<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${N}">${N}</button>`).join("")}
        </div>`,k.parentNode.appendChild(R),k.addEventListener("focus",()=>R.classList.remove("hidden")),k.addEventListener("blur",()=>setTimeout(()=>R.classList.add("hidden"),150)),R.querySelectorAll(".sann-chip").forEach(N=>{N.addEventListener("mousedown",O=>O.preventDefault()),N.addEventListener("click",()=>{k.value.trim()?k.value+=(k.tagName==="TEXTAREA"?`
`:" ")+N.dataset.val:k.value=N.dataset.val,k.focus()})})};q(_.querySelector("#sann-title"),$),q(_.querySelector("#sann-body"),S);let i=(h==null?void 0:h.file_url)??null;const g=_.querySelector("#sann-image-status"),p=_.querySelector("#sann-image-preview"),n=_.querySelector("#sann-image-preview-img");_.querySelector("#sann-image-file").addEventListener("change",async k=>{var R;const I=(R=k.target.files)==null?void 0:R[0];if(I){g.textContent="กำลังอัปโหลด...";try{i=await Vt(I),n.src=i,p.classList.remove("hidden"),g.textContent="อัปโหลดสำเร็จ ✅"}catch(N){g.textContent="อัปโหลดไม่สำเร็จ: "+(N.message??"")}k.target.value=""}}),_.querySelector("#sann-image-remove").addEventListener("click",()=>{i=null,p.classList.add("hidden"),g.textContent=""});let c=[];_.querySelector("#sann-cal-ref").addEventListener("click",async()=>{const k=_.querySelector("#sann-cal-picker");if(!k.classList.contains("hidden")){k.classList.add("hidden");return}k.classList.remove("hidden");const I=_.querySelector("#sann-cal-event-sel");if(I.options.length<=1)try{const{getWorkCalendarEvents:R,getSchoolConfig:N}=await ne(async()=>{const{getWorkCalendarEvents:P,getSchoolConfig:U}=await import("./api-1xsyVspL.js");return{getWorkCalendarEvents:P,getSchoolConfig:U}},__vite__mapDeps([0,1]));let O=new Date().getFullYear()+543,Q=1;try{const P=await N();O=P.academic_year,Q=P.semester}catch{}c=await R(O,Q);const W={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};c.forEach(P=>{const U=document.createElement("option");U.value=P.id;const Y=P.event_type==="inspection"&&P.round_number?` ครั้งที่ ${P.round_number}`:"",M=new Date(P.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});U.textContent=`${W[P.event_type]??"📌"}${Y} ${P.label} (${M})`,I.appendChild(U)})}catch(R){I.innerHTML=`<option>โหลดไม่สำเร็จ: ${R.message}</option>`}}),_.querySelector("#sann-cal-event-sel").addEventListener("change",()=>{const k=+_.querySelector("#sann-cal-event-sel").value,I=c.find(W=>W.id===k),R=_.querySelector("#sann-cal-preview"),N=_.querySelector("#sann-cal-fill");if(!I){R.classList.add("hidden"),N.classList.add("hidden");return}const O=(I.work_calendar_items||[]).sort((W,P)=>W.sort_order-P.sort_order),Q=new Date(I.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"});R.innerHTML=`<p class="font-semibold">${I.label}</p>
        <p class="text-indigo-600">📅 ${Q}${I.event_type==="inspection"&&I.round_number?` · ครั้งที่ ${I.round_number}`:""}</p>
        ${I.description?`<p>${I.description}</p>`:""}
        ${O.length?`<ul class="mt-1 space-y-0.5">${O.map(W=>`<li>☑ ${W.item_label}</li>`).join("")}</ul>`:""}`,R.classList.remove("hidden"),N.classList.remove("hidden")}),_.querySelector("#sann-cal-fill").addEventListener("click",()=>{const k=+_.querySelector("#sann-cal-event-sel").value,I=c.find(W=>W.id===k);if(!I)return;const R=(I.work_calendar_items||[]).sort((W,P)=>W.sort_order-P.sort_order),N=new Date(I.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),O=I.event_type==="inspection"&&I.round_number?` ครั้งที่ ${I.round_number}`:"";_.querySelector("#sann-title").value=I.label+(O?` (${O.trim()})`:"");const Q=[];I.description&&Q.push(I.description),R.length&&(Q.push("สิ่งที่ต้องเตรียม:"),R.forEach(W=>Q.push(`• ${W.item_label}`))),Q.push(`กำหนดวันที่: ${N}`),_.querySelector("#sann-body").value=Q.join(`
`),I.event_date&&(_.querySelector("#sann-due").value=I.event_date),_.querySelector("#sann-cal-picker").classList.add("hidden")}),_.querySelectorAll(".sann-type-btn").forEach(k=>{k.addEventListener("click",()=>{const I=k.dataset.type;_.querySelectorAll(".sann-type-btn").forEach(R=>{const N=R.dataset.type==="training";R.className=`sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${R.dataset.type===I?N?"bg-violet-600 text-white border-violet-600":"bg-indigo-600 text-white border-indigo-600":N?"bg-white text-gray-600 border-gray-200 hover:border-violet-300":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),_.querySelector("#sann-training-fields").classList.toggle("hidden",I!=="training")})});const x=k=>k==="teacher"?"bg-sky-600 text-white border-sky-600":k==="student"?"bg-teal-600 text-white border-teal-600":"bg-indigo-600 text-white border-indigo-600",j=k=>k==="teacher"?"hover:border-sky-300":k==="student"?"hover:border-teal-300":"hover:border-indigo-300";_.querySelectorAll(".sann-audience-btn").forEach(k=>{k.addEventListener("click",()=>{_.querySelectorAll(".sann-audience-btn").forEach(I=>{I.className=`sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${I.dataset.audience===k.dataset.audience?x(I.dataset.audience):`bg-white text-gray-600 border-gray-200 ${j(I.dataset.audience)}`}`})})}),ma(_,"sann"),_.querySelectorAll(".sann-filter-btn").forEach(k=>{k.addEventListener("click",()=>{_.querySelectorAll(".sann-filter-btn").forEach(I=>{I.className=`sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${I.dataset.filter===k.dataset.filter?"bg-violet-600 text-white border-violet-600":"bg-white text-gray-600 border-gray-200 hover:border-violet-300"}`})})}),_.querySelector("#sann-modal-save").addEventListener("click",async()=>{var K,X;const k=_.querySelector("#sann-title").value.trim();if(!k){T("กรุณากรอกหัวข้อ","warning");return}const I=_.querySelector("#sann-body").value.trim()||null,R=_.querySelector("#sann-active-toggle").dataset.on==="true",N=_.querySelector("#sann-pin").dataset.on==="true"?1:0,O=_.querySelector("#sann-ack").dataset.on==="true",Q=_.querySelector("#sann-due").value||null,W=_.querySelector(".sann-type-btn.bg-violet-600")||(h==null?void 0:h.ann_type)==="training"?"training":"general",P=((K=_.querySelector(".sann-audience-btn.text-white"))==null?void 0:K.dataset.audience)??(h==null?void 0:h.audience)??"all",U=_.querySelector("#sann-video-url").value.trim()||null,Y=W==="training"&&_.querySelector("#sann-event-location").value.trim()||null,M=((X=_.querySelector(".sann-filter-btn.bg-violet-600"))==null?void 0:X.dataset.filter)??(h==null?void 0:h.schedule_filter)??"all",F=(E==null?void 0:E.getValue())??(h==null?void 0:h.target_teacher_ids)??[],z=(L==null?void 0:L.getValue())??(h==null?void 0:h.target_student_ids)??[];if(W==="training"){if(!Y){T("กรุณาระบุสถานที่","warning");return}const G=ga(_,"sann");for(const ee of G){if(!ee.date){T("กรุณาระบุวันที่ให้ครบทุกช่วง","warning");return}if(!ee.periods.length){T("กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง","warning");return}}const te=_.querySelector("#sann-modal-save");te.disabled=!0,te.textContent="กำลังบันทึก...";try{D?await m(h.id,{title:k,body:I,isActive:R,priority:N,requiresAck:O,dueDate:Q,annType:W,eventDate:G[0].date,eventPeriods:G[0].periods,eventLocation:Y,scheduleFilter:M,fileUrl:i,videoUrl:U,audience:P,targetTeacherIds:F,targetStudentIds:z}):G.length>1?(await Promise.all(G.map(ee=>o({title:k,body:I,isActive:R,priority:N,teacherId:t.id,creatorRole:e,requiresAck:O,dueDate:Q,annType:W,eventDate:ee.date,eventPeriods:ee.periods,eventLocation:Y,scheduleFilter:M,fileUrl:i,videoUrl:U,audience:P,targetTeacherIds:F,targetStudentIds:z}))),T(`สร้าง ${G.length} ประกาศสำเร็จ ✅`,"success")):(await o({title:k,body:I,isActive:R,priority:N,teacherId:t.id,creatorRole:e,requiresAck:O,dueDate:Q,annType:W,eventDate:G[0].date,eventPeriods:G[0].periods,eventLocation:Y,scheduleFilter:M,fileUrl:i,videoUrl:U,audience:P,targetTeacherIds:F,targetStudentIds:z}),T("บันทึกสำเร็จ ✅","success")),A(),await d()}catch(ee){T("บันทึกไม่สำเร็จ: "+(ee.message??""),"error");const oe=_.querySelector("#sann-modal-save");oe.disabled=!1,oe.textContent="บันทึก"}return}const V=_.querySelector("#sann-modal-save");V.disabled=!0,V.textContent="กำลังบันทึก...";try{D?await m(h.id,{title:k,body:I,isActive:R,priority:N,requiresAck:O,dueDate:Q,annType:W,fileUrl:i,videoUrl:U,audience:P,targetTeacherIds:F,targetStudentIds:z}):await o({title:k,body:I,isActive:R,priority:N,teacherId:t.id,creatorRole:e,requiresAck:O,dueDate:Q,annType:W,fileUrl:i,videoUrl:U,audience:P,targetTeacherIds:F,targetStudentIds:z}),!D&&R&&ya(k,I,P),T("บันทึกสำเร็จ ✅","success"),A(),await d()}catch(G){T("บันทึกไม่สำเร็จ: "+(G.message??""),"error"),V.disabled=!1,V.textContent="บันทึก"}})};(C=document.getElementById("sann-create-btn"))==null||C.addEventListener("click",()=>f(null)),await d()}async function va(){var m;re("role-permissions"),document.getElementById("page-title").textContent="สิทธิ์บทบาท";const t=[{key:"dept_head",label:"หัวหน้ากลุ่มสาระ"},{key:"religion_group_head",label:"หัวหน้ากลุ่ม (ศาสนา)"},{key:"registrar_samai",label:"ทะเบียน (สามัญ)"},{key:"registrar_religion",label:"ทะเบียน (ศาสนา)"},{key:"registrar_pvch",label:"ทะเบียน (ปวช)"},{key:"academic_samai",label:"วิชาการ (สามัญ)"},{key:"academic_religion",label:"วิชาการ (ศาสนา)"},{key:"academic_pvch",label:"วิชาการ (ปวช)"},{key:"house_color_admin",label:"ผู้ดูแลสีนักเรียน/กีฬาสี"},{key:"classroom_leaders_admin",label:"ผู้ดูแลหัวหน้า/รองหัวหน้า"}],r=[{group:"📢 ประกาศ",features:[{key:"announce_create",label:"สร้างประกาศ"},{key:"announce_manage",label:"แก้ไข/ลบประกาศ"}]},{group:"📚 วิชาการ",features:[{key:"lang_config",label:"ตั้งค่าคำอธิบายฯ"},{key:"menu_curriculum",label:"หลักสูตรแกนกลาง"},{key:"menu_subjects",label:"รายวิชา"},{key:"menu_departments",label:"กลุ่มสาระ"},{key:"manage_religion_groups",label:"จัดการกลุ่มวิชาศาสนา"},{key:"menu_score_config",label:"คอลัมน์คะแนน"},{key:"menu_life_skill",label:"คะแนนทักษะชีวิต"},{key:"menu_reading",label:"คะแนนการอ่าน"},{key:"menu_prayer",label:"บันทึกละหมาด"}]},{group:"📋 ทะเบียน/บุคลากร",features:[{key:"menu_students",label:"นักเรียน"},{key:"menu_homeroom",label:"ครูที่ปรึกษา"},{key:"menu_holidays",label:"วันหยุด"},{key:"menu_periods",label:"คาบเรียน"},{key:"menu_classrooms",label:"ห้องเรียน"},{key:"menu_house_colors",label:"สีนักเรียน"},{key:"menu_sports_admin",label:"ระบบกีฬาสี"},{key:"menu_classroom_leaders",label:"จัดการหัวหน้า/รองหัวหน้า"}]},{group:"🔍 นิเทศ/ติดตาม",features:[{key:"work_calendar",label:"ปฏิทินปฏิบัติงาน"}]}];r.flatMap(y=>y.features),ae(`<div class="animate-fade">
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
  </div>`);let s={};try{s=await Hn()}catch{}const o=(m=document.querySelector("#perm-loading"))==null?void 0:m.closest(".bg-white");o&&(o.innerHTML=`
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 w-44">ฟีเจอร์</th>
            ${t.map(y=>`<th class="px-3 py-3.5 text-center text-xs font-bold text-gray-600 min-w-[80px]">${y.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${r.map(y=>`
            <tr class="bg-indigo-50/50 border-y border-indigo-100">
              <td colspan="${t.length+1}" class="px-5 py-2 text-xs font-bold text-indigo-600 uppercase tracking-wider sticky left-0">${y.group}</td>
            </tr>
            ${y.features.map(w=>`
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${w.label}</td>
                ${t.map(a=>{var b;const v=((b=s[a.key])==null?void 0:b[w.key])??!1;return`<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${v?"bg-emerald-500":"bg-gray-300"}"
                      data-position="${a.key}" data-feature="${w.key}" data-on="${v}">
                      <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ml-0.5"
                        style="transform:translateX(${v?"20":"0"}px)"></span>
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
    </div>`,o.querySelectorAll(".perm-toggle").forEach(y=>{y.addEventListener("click",async()=>{const w=y.dataset.position,a=y.dataset.feature,v=y.dataset.on==="true",b=!v;y.disabled=!0;try{await Rn(w,a,b),y.dataset.on=String(b),y.className=`perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${b?"bg-emerald-500":"bg-gray-300"}`,y.querySelector("span").style.transform=`translateX(${b?"20":"0"}px)`,s[w]||(s[w]={}),s[w][a]=b,T(`${b?"เปิด":"ปิด"}สิทธิ์สำเร็จ`,"success")}catch{T("บันทึกไม่สำเร็จ","error")}y.disabled=!1})}))}async function wa(){re("house-colors"),document.getElementById("page-title").textContent="จัดการสีนักเรียน";let t=[],r=[],s=[],o="สามัญ",m="",y="",w="",a="",v="";const b=k=>{if(!k)return null;const I=k.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return I?I[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},e=k=>k?/^(PR|อก\.|อป\.)/i.test(k)?"ศาสนา":/^ปวช\./i.test(k)?"ปวช":"สามัญ":"สามัญ",l={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},u=k=>{const I=k==="ศาสนา";return[...new Set(s.map(R=>I?R.religion_room:R.main_room).filter(Boolean))].filter(R=>e(R)===k).sort((R,N)=>R.localeCompare(N,"th"))},d=k=>{const I=u(k),R=[...new Set(I.map(O=>b(O)).filter(Boolean))],N=l[k]||[];return[...new Set([...N,...R])].sort((O,Q)=>O.localeCompare(Q,"th"))},f=async()=>{[t,r,s]=await Promise.all([ln(),ue(),He()])},B=(k,I="w-3.5 h-3.5")=>`<span class="inline-block ${I} rounded-full flex-shrink-0" style="background:${k}"></span>`,C=k=>t.find(I=>I.name===k),h=k=>s.filter(I=>I.house_color===k).length,_=()=>s.filter(k=>!k.house_color).length,D=k=>{let I=document.getElementById("hc-print-roster-styles");I||(I=document.createElement("style"),I.id="hc-print-roster-styles",document.head.appendChild(I)),I.textContent=`
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
    `;const R=document.createElement("div");R.id="hc-print-roster-area",document.body.appendChild(R);const N=o==="ศาสนา",O=new Map;k.forEach(P=>{const U=(N?P.religion_room:P.main_room)||"ไม่มีห้องเรียน";O.has(U)||O.set(U,[]),O.get(U).push(P)});const Q=Array.from(O.keys()).sort((P,U)=>P.localeCompare(U,"th"));let W="";Q.forEach((P,U)=>{const M=O.get(P).sort((V,K)=>(V.student_code||"").localeCompare(K.student_code||""));let F="ใบรายชื่อนักเรียน";w&&(w==="__none__"?F+=" (ไม่มีสี)":F+=` กลุ่มสี${w}`),F+=` ห้อง ${P}`,a&&(F+=` (${a})`);const z=M.map((V,K)=>{const X=C(V.house_color),G=X?`<span class="color-badge" style="color: ${X.color_hex}">
               สี${V.house_color}
             </span>`:'<span style="color: #9ca3af;">— ไม่มีสี —</span>',te=V.image_url?`<img src="${V.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>';return`
          <tr>
            <td style="text-align: center; width: 45px;">${K+1}</td>
            <td>
              <div class="stu-info-wrap">
                ${te}
                <div class="stu-details">
                  <div class="stu-name">${J(V.full_name)}</div>
                  <div class="stu-meta">รหัส: ${J(V.student_code||"—")} | สามัญ: ${J(V.main_room||"—")} | ศาสนา: ${J(V.religion_room||"—")}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${G}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${J(V.sports_shirt_size||"")}</td>
            <td style="width: 120px;"></td>
          </tr>
        `}).join("");W+=`
        <div class="roster-page-block">
          <div class="roster-title">${J(F)}</div>
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
              ${z}
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
    `,R.querySelector("#hc-btn-confirm-print").onclick=()=>{window.print()},R.querySelector("#hc-btn-close-preview").onclick=()=>{R.remove()}},A=()=>r.find(k=>k.position==="house_color_admin"),E=(k,I)=>{const N=(I?t.filter(O=>O.gender===I):t).map(O=>`<option value="${J(O.name)}" ${O.name===k?"selected":""}>สี${J(O.name)}</option>`).join("");return`<option value="" ${k?"":"selected"}>— ไม่มีสี —</option>`+N},L=()=>{const k=v.toLowerCase(),I=o==="ศาสนา";return s.filter(R=>{var O,Q;const N=I?R.religion_room:R.main_room;return!(!N||y&&N!==y||m&&!y&&b(N)!==m||!m&&!y&&e(N)!==o||w==="__none__"&&R.house_color||w&&w!=="__none__"&&R.house_color!==w||a&&R.gender!==a||k&&!((O=R.full_name)!=null&&O.toLowerCase().includes(k))&&!((Q=R.student_code)!=null&&Q.toLowerCase().includes(k))&&!N.toLowerCase().includes(k))})},$=k=>k?"hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm":"hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm",S=()=>{const k=t.filter(W=>W.gender==="ชาย"),I=t.filter(W=>W.gender==="หญิง"),R=_(),N=W=>{const P=w===W.name,U=h(W.name);return`<button class="${$(P)}" data-color="${J(W.name)}"
               style="${P?`border-color:${W.color_hex};color:${W.color_hex};background:${W.color_hex}18`:`border-color:${W.color_hex}55;color:#374151`}">
        ${B(W.color_hex)} สี${J(W.name)}
        <span class="ml-1 font-bold" style="color:${W.color_hex}">${U}</span>
      </button>`},O=w==="__none__",Q=`<button class="${$(O)}" data-color="__none__"
               style="${O?"border-color:#9ca3af;color:#6b7280;background:#f3f4f6":"border-color:#e5e7eb;color:#6b7280"}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${R}</span>
      </button>`;return`
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${k.map(N).join("")}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${I.map(N).join("")}
          ${Q}
        </div>
      </div>`},q=()=>{const k=L();if(!k.length)return'<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>';const I=o==="ศาสนา";return k.map(R=>{const N=C(R.house_color),O=N?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${N.color_hex}">
             ${B(N.color_hex,"w-2.5 h-2.5")} ${J(R.house_color)}
           </span>`:'<span class="text-xs text-gray-400">—</span>',Q=N?`background:${N.color_hex}12`:"",W=I?R.religion_room:R.main_room,P=R.image_url?`<img src="${R.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`:'<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>';return`<tr class="transition border-b border-gray-100 last:border-0" style="${Q}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${J(R.student_code??"")}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${P}
            <div>${J(R.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${J(W??"—")}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${J(R.gender??"—")}</td>
        <td class="px-4 py-2.5">${O}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${R.id}" data-current="${J(R.house_color??"")}">
            ${E(R.house_color,R.gender)}
          </select>
        </td>
      </tr>`}).join("")},i=()=>{const k=A(),I=L().length;ae(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${k?`ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${J(k.full_name)}</span>`:'<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>'}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${s.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${_()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${S()}
        ${w?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':""}
      </div>

      <!-- Search + filter bar -->
      <div class="flex flex-wrap gap-3 items-center">
        <input id="hc-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..."
          value="${J(v)}"
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
          <tbody id="hc-tbody">${q()}</tbody>
        </table>
      </div>
    </div>`),H()},g=()=>{const k=document.getElementById("hc-tbody");k&&(k.innerHTML=q()),c();const I=L().length;document.querySelectorAll(".text-xs.text-gray-400").forEach(O=>{O.textContent.includes("พบ")&&(O.innerHTML=`พบ <b class="text-gray-700">${I}</b> คน`)});const R=document.getElementById("hc-print-roster-btn");R&&(R.disabled=I===0,R.textContent=`🖨️ พิมพ์ใบรายชื่อ (${I})`);const N=document.getElementById("hc-clear-colors-btn");N&&(N.disabled=I===0,N.textContent=`🗑️ ล้างสี (${I})`)},p=()=>{var I;const k=document.querySelector(".bg-white.rounded-2xl.border.border-gray-200.p-4");k&&(k.innerHTML=S()+(w?'<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>':"")),n(),(I=document.getElementById("hc-clear-filter"))==null||I.addEventListener("click",()=>{w="",p(),g()})},n=()=>{document.querySelectorAll(".hc-chip").forEach(k=>{k.addEventListener("click",()=>{const I=k.dataset.color;w=w===I?"":I,p(),g()})})},c=()=>{document.querySelectorAll(".hc-color-sel").forEach(k=>{k.addEventListener("change",async()=>{const I=k.dataset.sid,R=k.dataset.current,N=k.value||null;k.disabled=!0;try{await Lt([I],N);const O=s.find(U=>String(U.id)===String(I));O&&(O.house_color=N),k.dataset.current=N??"";const Q=k.closest("tr"),W=Q==null?void 0:Q.children[4];if(W){const U=C(N);W.innerHTML=U?`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${U.color_hex}">
                   ${B(U.color_hex,"w-2.5 h-2.5")} ${J(N)}
                 </span>`:'<span class="text-xs text-gray-400">—</span>'}const P=C(N);Q&&(Q.style.background=P?`${P.color_hex}12`:""),k.classList.add("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),setTimeout(()=>k.classList.remove("border-emerald-400","bg-emerald-50","shadow-[0_0_0_3px_rgba(52,211,153,0.35)]"),2e3),p()}catch{T("บันทึกไม่สำเร็จ","error"),k.value=R??""}k.disabled=!1})})},x=()=>{const k=document.getElementById("hc-filter-category"),I=document.getElementById("hc-filter-level");if(!k||!I)return;o=k.value;const R=d(o);I.innerHTML=`
      <option value="">-- เลือกระดับชั้น --</option>
      ${R.map(N=>`<option value="${N}" ${N===m?"selected":""}>${N}</option>`).join("")}
    `,j()},j=()=>{const k=document.getElementById("hc-filter-level"),I=document.getElementById("hc-filter-class");if(!k||!I)return;m=k.value;const N=u(o).filter(O=>m?b(O)===m:!0);I.innerHTML=`
      <option value="">-- เลือกห้องเรียน (${N.length} ห้อง) --</option>
      ${N.map(O=>`
        <option value="${O}" ${O===y?"selected":""}>${O}</option>
      `).join("")}
    `},H=()=>{var k,I,R,N,O,Q,W,P;n(),c(),(k=document.getElementById("hc-clear-filter"))==null||k.addEventListener("click",()=>{w="",p(),g()}),(I=document.getElementById("hc-search"))==null||I.addEventListener("input",U=>{v=U.target.value,g()}),(R=document.getElementById("hc-filter-gender"))==null||R.addEventListener("change",U=>{a=U.target.value,g()}),(N=document.getElementById("hc-filter-category"))==null||N.addEventListener("change",U=>{o=U.target.value,m="",y="",x(),g()}),(O=document.getElementById("hc-filter-level"))==null||O.addEventListener("change",U=>{m=U.target.value,y="",j(),g()}),(Q=document.getElementById("hc-filter-class"))==null||Q.addEventListener("change",U=>{y=U.target.value,g()}),(W=document.getElementById("hc-print-roster-btn"))==null||W.addEventListener("click",()=>{const U=L();U.length>0&&D(U)}),(P=document.getElementById("hc-clear-colors-btn"))==null||P.addEventListener("click",async()=>{const U=L();if(!U.length||!confirm(`ยืนยันล้างสีนักเรียน ${U.length} คนที่แสดงในตาราง?`))return;const Y=document.getElementById("hc-clear-colors-btn");Y.disabled=!0,Y.textContent="กำลังล้างสี...";try{await Lt(U.map(M=>M.id),null),U.forEach(M=>{M.house_color=null}),T(`ล้างสีสำเร็จ ${U.length} คน`,"success"),p(),g()}catch{T("เกิดข้อผิดพลาด","error"),Y.disabled=!1,Y.textContent=`🗑️ ล้างสี (${U.length})`}}),x()};await f(),i()}async function _a(){var B,C,h,_,D;re("donations"),document.getElementById("page-title").textContent="ผู้สนับสนุน";const t=A=>A?new Date(A).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"}):"—",r=A=>Number(A??0).toLocaleString("th-TH"),s=A=>!A.slip_url&&String(A.admin_note??"").startsWith("[เงินสด]"),o=A=>{const E=String((A==null?void 0:A.donationStickerTiers)??"").trim();return(E?E.split(`
`).filter(Boolean).map(S=>{const[q,i,g,,p]=S.split("|").map(n=>n.trim());return{amount:parseInt(q)||0,sticker:i||"🏅",title:g||"",color:p||""}}).filter(S=>S.amount>0):[[49,"🌱","ครูผู้จุดประกาย","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","#D4A017"]].map(([S,q,i,g])=>({amount:S,sticker:q,title:i,color:g}))).sort((S,q)=>S.amount-q.amount).map((S,q)=>{const i=((A==null?void 0:A[`donationStickerImg${q+1}`])??"").trim();return i&&/^https?:\/\//.test(i)?{...S,sticker:i}:S})},m=(A,E)=>{let L=null;for(const $ of E)A>=$.amount&&(L=$);return L},y=(A,E="w-8 h-8")=>A?/^https?:\/\//.test(A.sticker)?`<img src="${A.sticker}" class="${E} object-contain" title="${A.title}" />`:`<span class="text-xl" title="${A.title}">${A.sticker}</span>`:"";ae(`
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
      ${["ยอดรวมอนุมัติ","รออนุมัติ","จำนวนผู้โดเนท","เฉลี่ยต่อคน"].map((A,E)=>`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${A}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${E}">—</p>
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
  </div>`);let w=[],a=[],v={};const b=async()=>{var q;const{supabase:A}=await ne(async()=>{const{supabase:i}=await import("./supabase-BV-W2lsh.js").then(g=>g.a);return{supabase:i}},[]),{getSystemConfig:E,getPaymentSlipViewUrl:L}=await ne(async()=>{const{getSystemConfig:i,getPaymentSlipViewUrl:g}=await import("./api-1xsyVspL.js");return{getSystemConfig:i,getPaymentSlipViewUrl:g}},__vite__mapDeps([0,1])),[$,{data:S}]=await Promise.all([E().catch(()=>({})),A.from("payment_requests").select("id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, teachers(id, full_name, teacher_code, phone, image_url)").eq("package_type","donation").order("created_at",{ascending:!1})]);a=o($),w=S??[];for(const i of w)i.slip_url&&!s(i)&&(i._resolvedSlip=await L(i.slip_url).catch(()=>i.slip_url));v={};for(const i of w){if(i.status!=="approved")continue;const g=(q=i.teachers)==null?void 0:q.id;g&&(v[g]=(v[g]??0)+(Number(i.amount)||0))}e(),l()},e=()=>{const A=w.filter(i=>i.status==="approved"),E=A.reduce((i,g)=>i+(Number(g.amount)||0),0),L=w.filter(i=>i.status==="pending").length,$=new Set(A.map(i=>{var g;return(g=i.teachers)==null?void 0:g.id})).size,S=$?Math.round(E/$):0,q=[r(E)+" ฿",L,$+" คน",r(S)+" ฿"];document.querySelectorAll(".don-stat-val").forEach((i,g)=>{i.textContent=q[g]})},l=()=>{var g,p,n,c;const A=document.getElementById("don-table");if(!A)return;const E=(((g=document.getElementById("don-search"))==null?void 0:g.value)??"").toLowerCase(),L=((p=document.getElementById("don-filter-status"))==null?void 0:p.value)??"all",$=((n=document.getElementById("don-filter-method"))==null?void 0:n.value)??"all",S=((c=document.getElementById("don-filter-sort"))==null?void 0:c.value)??"date_desc";let q=w.filter(x=>{const j=x.teachers;return!(E&&!String((j==null?void 0:j.full_name)??"").toLowerCase().includes(E)&&!String((j==null?void 0:j.teacher_code)??"").includes(E)||L!=="all"&&x.status!==L||$==="cash"&&!s(x)||$==="transfer"&&s(x))});if(S==="date_asc"?q.sort((x,j)=>new Date(x.created_at)-new Date(j.created_at)):S==="amount_desc"&&q.sort((x,j)=>(j.amount??0)-(x.amount??0)),!q.length){A.innerHTML='<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}const i=x=>({pending:'<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>',approved:'<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>',rejected:'<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>'})[x]??`<span class="text-gray-400 text-xs">${x}</span>`;A.innerHTML=`
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
        ${q.map((x,j)=>{const H=x.teachers,k=s(x),I=String(x.admin_note??"").replace(/^\[เงินสด\]\s*/,""),R=v[H==null?void 0:H.id]??0,N=m(R,a),O=H!=null&&H.image_url?`<img src="${H.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`:`<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${((H==null?void 0:H.full_name)??"?").charAt(0)}</div>`;return`<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${x.id}" data-tid="${(H==null?void 0:H.id)??""}">
            <td class="px-3 py-3 text-gray-400 text-xs">${j+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${O}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${(H==null?void 0:H.full_name)??"—"}</p>
                  <p class="text-xs text-gray-400">${(H==null?void 0:H.teacher_code)??""}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${y(N)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${r(x.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${k?'<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>':`<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${x._resolvedSlip??""}" data-id="${x.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${i(x.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${t(x.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${I}">${I||"—"}</td>
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
    </table>`,A.querySelectorAll(".don-row").forEach(x=>{x.addEventListener("click",()=>u(x.dataset.tid))}),A.querySelectorAll(".don-slip").forEach(x=>{x.addEventListener("click",async j=>{j.stopPropagation();let H=x.dataset.url;if(!H){const I=w.find(R=>R.id===Number(x.dataset.id));if(I!=null&&I.slip_url){const{getPaymentSlipViewUrl:R}=await ne(async()=>{const{getPaymentSlipViewUrl:N}=await import("./api-1xsyVspL.js");return{getPaymentSlipViewUrl:N}},__vite__mapDeps([0,1]));H=await R(I.slip_url).catch(()=>I.slip_url)}}if(!H){T("ไม่พบสลิป","warning");return}const k=document.createElement("div");k.className="fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out",k.innerHTML=`<img src="${H}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`,k.addEventListener("click",()=>k.remove()),document.body.appendChild(k)})}),A.querySelectorAll(".don-approve").forEach(x=>{x.addEventListener("click",async j=>{j.stopPropagation();const{reviewPaymentRequest:H}=await ne(async()=>{const{reviewPaymentRequest:k}=await import("./api-1xsyVspL.js");return{reviewPaymentRequest:k}},__vite__mapDeps([0,1]));await H(Number(x.dataset.id),"approved").catch(()=>{}),T("อนุมัติแล้ว ✅","success"),await b()})}),A.querySelectorAll(".don-reject").forEach(x=>{x.addEventListener("click",async j=>{j.stopPropagation();const H=prompt("เหตุผล (ถ้ามี):")??"",{reviewPaymentRequest:k}=await ne(async()=>{const{reviewPaymentRequest:I}=await import("./api-1xsyVspL.js");return{reviewPaymentRequest:I}},__vite__mapDeps([0,1]));await k(Number(x.dataset.id),"rejected",H||null).catch(()=>{}),T("ปฏิเสธแล้ว","info"),await b()})}),A.querySelectorAll(".don-edit").forEach(x=>{x.addEventListener("click",j=>{j.stopPropagation(),f(Number(x.dataset.id))})})},u=A=>{if(!A)return;const E=Number(A),L=w.filter(H=>{var k;return((k=H.teachers)==null?void 0:k.id)===E});if(!L.length)return;const $=L[0].teachers,S=L.filter(H=>H.status==="approved"),q=S.reduce((H,k)=>H+(Number(k.amount)||0),0),i=m(q,a),g=(i==null?void 0:i.color)??"#10b981",p=parseInt(g.slice(1,3),16),n=parseInt(g.slice(3,5),16),c=parseInt(g.slice(5,7),16),x=$!=null&&$.image_url?`<img src="${$.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`:`<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${(($==null?void 0:$.full_name)??"?").charAt(0)}</div>`,j=document.createElement("div");j.className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4",j.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${p},${n},${c},0.9),rgba(${p},${n},${c},1))">
          ${x}
          ${i?`<div class="text-3xl mb-1">${/^https?:\/\//.test(i.sticker)?`<img src="${i.sticker}" class="w-12 h-12 object-contain mx-auto"/>`:i.sticker}</div>`:""}
          <p class="text-white font-bold text-base leading-tight">${($==null?void 0:$.full_name)??"—"}</p>
          <p class="text-white/70 text-xs mt-0.5">${($==null?void 0:$.teacher_code)??""}</p>
          ${i?`<span class="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">${i.title}</span>`:""}
        </div>
        <!-- stats -->
        <div class="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ยอดรวม</p>
            <p class="font-bold text-emerald-600">${r(q)} ฿</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ครั้งทั้งหมด</p>
            <p class="font-bold text-gray-700">${L.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${S.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${L.map(H=>{const k=s(H),I=String(H.admin_note??"").replace(/^\[เงินสด\]\s*/,""),R={pending:"⏳",approved:"✅",rejected:"❌"}[H.status]??"";return`<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${t(H.created_at)}</span>
                <span class="text-[11px] ${k?"text-gray-500":"text-blue-500"}">${k?"💵":"🧾"}</span>
                ${I?`<span class="text-xs text-gray-400 truncate max-w-[80px]">${I}</span>`:""}
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-emerald-700">${r(H.amount)} ฿</span>
                <span>${R}</span>
              </div>
            </div>`}).join("")}
        </div>
        <div class="px-5 pb-5">
          <button class="don-sum-close w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        </div>
      </div>`,document.body.appendChild(j),j.querySelector(".don-sum-close").addEventListener("click",()=>j.remove()),j.addEventListener("click",H=>{H.target===j&&j.remove()})},d=async()=>{const{getTeachers:A}=await ne(async()=>{const{getTeachers:S}=await import("./api-1xsyVspL.js");return{getTeachers:S}},__vite__mapDeps([0,1])),E=await A().catch(()=>[]),L=document.createElement("div");L.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",L.innerHTML=`
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
      </div>`,document.body.appendChild(L);const $=yt({wrap:L.querySelector("#don-teacher-wrap"),teachers:[...E].sort((S,q)=>(S.full_name??"").localeCompare(q.full_name??"","th"))});L.querySelector("#don-add-cancel").addEventListener("click",()=>L.remove()),L.querySelector("#don-add-confirm").addEventListener("click",async()=>{const S=$.getValue(),q=Number(L.querySelector("#don-add-amount").value),i=L.querySelector("#don-add-note").value.trim();if(!S){T("กรุณาเลือกครู","warning");return}if(!q){T("กรุณาใส่จำนวนเงิน","warning");return}const{createPaymentRequest:g}=await ne(async()=>{const{createPaymentRequest:p}=await import("./api-1xsyVspL.js");return{createPaymentRequest:p}},__vite__mapDeps([0,1]));await g({teacher_id:parseInt(S),package_type:"donation",amount:q,status:"approved",admin_note:`[เงินสด] ${i}`.trim(),reviewed_at:new Date().toISOString()}).catch(p=>{T("บันทึกไม่สำเร็จ: "+(p.message??""),"error")}),T("บันทึกโดเนทเงินสดแล้ว ✅","success"),L.remove(),await b()})},f=A=>{const E=w.find(S=>S.id===A);if(!E)return;const L=String(E.admin_note??"").replace(/^\[เงินสด\]\s*/,""),$=document.createElement("div");$.className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4",$.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${E.amount??""}"
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
      </div>`,document.body.appendChild($),$.querySelector("#don-edit-cancel").addEventListener("click",()=>$.remove()),$.querySelector("#don-edit-save").addEventListener("click",async()=>{const S=Number($.querySelector("#don-edit-amount").value),q=$.querySelector("#don-edit-note").value.trim(),i=s(E)?"[เงินสด] ":"",{supabase:g}=await ne(async()=>{const{supabase:n}=await import("./supabase-BV-W2lsh.js").then(c=>c.a);return{supabase:n}},[]),{error:p}=await g.from("payment_requests").update({amount:S,admin_note:(i+q).trim()||null}).eq("id",A);if(p){T("แก้ไขไม่สำเร็จ","error");return}T("บันทึกแล้ว ✅","success"),$.remove(),await b()})};(B=document.getElementById("don-search"))==null||B.addEventListener("input",l),(C=document.getElementById("don-filter-status"))==null||C.addEventListener("change",l),(h=document.getElementById("don-filter-method"))==null||h.addEventListener("change",l),(_=document.getElementById("don-filter-sort"))==null||_.addEventListener("change",l),(D=document.getElementById("don-add"))==null||D.addEventListener("click",d),await b()}async function $a(){var e,l,u,d;re("feedback-admin"),document.getElementById("page-title").textContent="Feedback ถึงแอดมิน";const t=f=>String(f??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=f=>f?new Date(f).toLocaleString("th-TH",{year:"2-digit",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—",s={compliment:"😊 ชื่นชม / ขอบคุณ",suggestion:"💡 ข้อเสนอแนะ",problem:"🐞 แจ้งปัญหา / ข้อบกพร่อง",password_reset:"🔑 ขอรีเซ็ทรหัสผ่าน",other:"💬 อื่นๆ"},o=["suggestion","problem","password_reset"],m=[{value:"pending",label:"🕐 รอดำเนินการ",cls:"bg-gray-100 text-gray-600"},{value:"in_progress",label:"🔧 กำลังแก้ไข",cls:"bg-amber-100 text-amber-700"},{value:"resolved",label:"✅ แก้ไขแล้ว",cls:"bg-emerald-100 text-emerald-700"}],y=Object.fromEntries(m.map(f=>[f.value,f]));ae(`
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
  </div>`);let w=[];const a=async()=>{w=await Nt().catch(()=>[]),v(),b()},v=()=>{var B;const f=document.getElementById("fb-cat-stats");f&&(f.innerHTML=Object.keys(s).map(C=>{const h=w.filter(E=>E.category===C),_=h.length,D=h.filter(E=>!E.is_read).length;let A='<p class="text-[10px] text-gray-300 mt-0.5">—</p>';if(o.includes(C)){const E=h.filter(L=>L.status==="resolved").length;A=`<p class="text-[10px] font-semibold mt-0.5 ${E===_&&_>0?"text-emerald-600":"text-amber-600"}">✅ ดำเนินการแล้ว ${E}/${_}</p>`}else D&&(A=`<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${D}</p>`);return`
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${C}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${s[C]}</p>
          <p class="text-xl font-bold text-gray-800">${_}</p>
          ${A}
        </div>`}).join(""),f.querySelectorAll(".fb-cat-card").forEach(C=>C.addEventListener("click",()=>{var _;const h=document.getElementById("fb-filter-cat");h&&(h.value=C.dataset.cat,b()),(_=document.getElementById("fb-list"))==null||_.scrollIntoView({behavior:"smooth",block:"start"})}))),(B=window._refreshFeedbackBadge)==null||B.call(window)},b=()=>{var A,E,L,$;const f=document.getElementById("fb-list");if(!f)return;const B=(((A=document.getElementById("fb-search"))==null?void 0:A.value)??"").toLowerCase(),C=((E=document.getElementById("fb-filter-role"))==null?void 0:E.value)??"all",h=((L=document.getElementById("fb-filter-cat"))==null?void 0:L.value)??"all",_=(($=document.getElementById("fb-filter-read"))==null?void 0:$.value)??"all";let D=w.filter(S=>{var i,g,p;const q=[S.sender_name,S.message,(i=S.student)==null?void 0:i.student_code,(g=S.student)==null?void 0:g.main_room,(p=S.student)==null?void 0:p.religion_room,...(S.messages??[]).map(n=>n.message)].join(" ").toLowerCase();return!(B&&!q.includes(B)||C!=="all"&&S.sender_role!==C||h!=="all"&&S.category!==h||_==="unread"&&S.is_read||_==="read"&&!S.is_read)});if(!D.length){f.innerHTML='<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>';return}f.innerHTML=D.map(S=>{var q,i,g,p,n,c;return`
      <div class="bg-white rounded-2xl border ${S.is_read?"border-gray-100":"border-indigo-200 ring-1 ring-indigo-100"} shadow-sm p-4 fb-card" data-id="${S.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${t(S.sender_name??"?").charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${t(S.sender_name||"—")}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${S.sender_role==="teacher"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}">${S.sender_role==="teacher"?"ครู":"นักเรียน"}</span>
              </p>
              <p class="text-[11px] text-gray-400">${r(S.created_at)}</p>
              ${S.sender_role==="student"?`<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${t(((q=S.student)==null?void 0:q.student_code)||"—")} · ห้องสามัญ ${t(((i=S.student)==null?void 0:i.main_room)||"—")} · ห้องศาสนา ${t(((g=S.student)==null?void 0:g.religion_room)||"—")}</p>`:""}
            </div>
          </div>
          ${S.is_read?"":'<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>'}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${S.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(s).map(([x,j])=>`<option value="${x}" ${S.category===x?"selected":""}>${j}</option>`).join("")}
          </select>
          ${o.includes(S.category)?`<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${((p=y[S.status])==null?void 0:p.cls)??"bg-gray-100 text-gray-600"}">${((n=y[S.status])==null?void 0:n.label)??S.status}</span>`:""}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${t(S.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${t(S.message)}</p><p class="text-[9px] text-slate-400 mt-1">${r(S.created_at)}</p></div></div>
          ${(S.messages??[]).map(x=>x.author_role==="admin"?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${t(x.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${r(x.created_at)}</p></div></div>`:`<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${t(S.sender_name||"ผู้ส่ง")}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${t(x.message)}</p><p class="text-[9px] text-slate-400 mt-1">${r(x.created_at)}</p></div></div>`).join("")}
          ${S.admin_reply&&!(S.messages??[]).some(x=>x.author_role==="admin"&&x.message===S.admin_reply)?`<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${t(S.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${S.replied_at?r(S.replied_at):""}</p></div></div>`:""}
        </div>
        ${S.category==="password_reset"&&S.sender_role==="student"&&((c=S.student)!=null&&c.id)?S.status==="resolved"?'<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>':`<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${S.id}" data-sid="${S.student.id}" data-code="${t(S.student.student_code||"")}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${t(S.student.student_code||"")})
              </button>`:""}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${S.id}" data-read="${S.is_read}">
            ${S.is_read?"↩️ ทำเป็นยังไม่อ่าน":"✓ ทำเครื่องหมายว่าอ่านแล้ว"}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${S.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${S.id}">
              ${m.map(x=>`<option value="${x.value}" ${S.status===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${S.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${S.replied_at?`ตอบล่าสุด ${r(S.replied_at)}`:"ยังไม่มีคำตอบจากแอดมิน"}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${S.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`}).join(""),f.querySelectorAll(".fb-toggle-read").forEach(S=>S.addEventListener("click",async()=>{const q=parseInt(S.dataset.id),i=S.dataset.read==="true";try{await Nn(q,!i)}catch{T("บันทึกไม่สำเร็จ","error");return}const g=w.find(p=>p.id===q);g&&(g.is_read=!i),v(),b()})),f.querySelectorAll(".fb-category-sel").forEach(S=>S.addEventListener("change",async()=>{const q=parseInt(S.dataset.id),i=S.value,g=w.find(n=>n.id===q),p=g==null?void 0:g.category;S.disabled=!0;try{await On(q,i)}catch{T("เปลี่ยนหมวดหมู่ไม่สำเร็จ","error"),S.disabled=!1,S.value=p;return}g&&(g.category=i),T("เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว","success"),b()})),f.querySelectorAll(".fb-delete").forEach(S=>S.addEventListener("click",async()=>{const q=parseInt(S.dataset.id);if(confirm("ยืนยันลบความคิดเห็นนี้?")){try{await zn(q)}catch{T("ลบไม่สำเร็จ","error");return}w=w.filter(i=>i.id!==q),T("ลบแล้ว","success"),v(),b()}})),f.querySelectorAll(".fb-pw-reset-btn").forEach(S=>S.addEventListener("click",async()=>{const q=parseInt(S.dataset.id),i=parseInt(S.dataset.sid),g=S.dataset.code;if(!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${g} เป็นรหัสนักเรียน (${g}) จริงหรือไม่?`))return;const p=S.textContent;S.disabled=!0,S.textContent="⏳ กำลังรีเซ็ท...";try{await Fn(i,g),await Vn(i).catch(()=>{}),await Ct(q,{status:"resolved",adminReply:`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${g}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`})}catch(c){T("รีเซ็ทไม่สำเร็จ: "+(c.message??""),"error"),S.disabled=!1,S.textContent=p;return}const n=w.find(c=>c.id===q);if(n){n.status="resolved";const c=new Date().toISOString(),x=`รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${g}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`;n.admin_reply=x,n.replied_at=c,n.messages=[...n.messages??[],{id:`local-${Date.now()}`,feedback_id:q,author_role:"admin",message:x,created_at:c}]}T("รีเซ็ทรหัสผ่านสำเร็จแล้ว","success"),v(),b()})),f.querySelectorAll(".fb-save-status").forEach(S=>S.addEventListener("click",async()=>{var c,x;const q=parseInt(S.dataset.id),i=S.closest(".fb-card"),g=(c=i.querySelector(".fb-status-sel"))==null?void 0:c.value,p=(x=i.querySelector(".fb-reply-input"))==null?void 0:x.value.trim();S.disabled=!0,S.textContent="⏳ กำลังบันทึก...";try{await Ct(q,{status:g,adminReply:p})}catch{T("บันทึกไม่สำเร็จ","error"),S.disabled=!1,S.textContent="💾 บันทึก";return}const n=w.find(j=>j.id===q);if(n&&(n.status=g,p)){const j=new Date().toISOString();n.admin_reply=p,n.replied_at=j,n.messages=[...n.messages??[],{id:`local-${Date.now()}`,feedback_id:q,author_role:"admin",message:p,created_at:j}]}T(p?"ส่งข้อความและบันทึกสถานะแล้ว":"บันทึกสถานะแล้ว","success"),v(),b()}))};(e=document.getElementById("fb-search"))==null||e.addEventListener("input",b),(l=document.getElementById("fb-filter-role"))==null||l.addEventListener("change",b),(u=document.getElementById("fb-filter-cat"))==null||u.addEventListener("change",b),(d=document.getElementById("fb-filter-read"))==null||d.addEventListener("change",b),await a()}async function qr(){const{getWorkCalendarEvents:t,getSchoolConfig:r}=await ne(async()=>{const{getWorkCalendarEvents:v,getSchoolConfig:b}=await import("./api-1xsyVspL.js");return{getWorkCalendarEvents:v,getSchoolConfig:b}},__vite__mapDeps([0,1]));re("work-calendar-view"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const s=v=>String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),o={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},m={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},y=v=>new Date(v+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),w=v=>new Date(v+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let a={academic_year:new Date().getFullYear()+543,semester:1};try{a=await r()}catch{}ae(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="mb-6">
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${a.academic_year} ภาคเรียนที่ ${a.semester}</p>
    </div>
    <div id="wcalv-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
  </div>`);try{const v=await t(a.academic_year,a.semester),b=document.getElementById("wcalv-list");if(!v.length){b.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรมในปฏิทิน</div>';return}const e=ys(new Date);b.innerHTML=v.map(l=>{const u=(l.work_calendar_items||[]).sort((B,C)=>B.sort_order-C.sort_order),d=l.event_date<e,f=l.event_type==="inspection"&&l.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${l.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border ${d?"border-gray-100 opacity-60":"border-gray-100"} shadow-sm p-4">
        <div class="flex flex-wrap items-center gap-1.5 mb-1">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${m[l.event_type]}">${o[l.event_type]}</span>
          ${f}
          ${d?'<span class="text-[11px] text-gray-400">ผ่านมาแล้ว</span>':'<span class="text-[11px] font-semibold text-emerald-600">กำลังจะมาถึง</span>'}
          <span class="text-xs text-gray-400 ml-auto">${l.end_date&&l.end_date!==l.event_date?`${w(l.event_date)} – ${y(l.end_date)}`:y(l.event_date)}</span>
        </div>
        <p class="font-semibold text-gray-800 text-sm">${s(l.label)}</p>
        ${l.description?`<p class="text-xs text-gray-500 mt-0.5">${s(l.description)}</p>`:""}
        ${u.length?`<div class="mt-2 border-t border-gray-50 pt-2">
          <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">สิ่งที่จะตรวจ</p>
          <ul class="space-y-0.5">${u.map(B=>`<li class="text-xs text-gray-600 flex gap-1.5"><span class="text-indigo-400">☑</span>${s(B.item_label)}</li>`).join("")}</ul>
        </div>`:""}
      </div>`}).join("")}catch(v){const b=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;");document.getElementById("wcalv-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${b(v.message)}</div>`}}async function ka(t){const{getWorkCalendarEvents:r,createWorkCalendarEvent:s,updateWorkCalendarEvent:o,deleteWorkCalendarEvent:m,replaceWorkCalendarItems:y,getSchoolConfig:w}=await ne(async()=>{const{getWorkCalendarEvents:$,createWorkCalendarEvent:S,updateWorkCalendarEvent:q,deleteWorkCalendarEvent:i,replaceWorkCalendarItems:g,getSchoolConfig:p}=await import("./api-1xsyVspL.js");return{getWorkCalendarEvents:$,createWorkCalendarEvent:S,updateWorkCalendarEvent:q,deleteWorkCalendarEvent:i,replaceWorkCalendarItems:g,getSchoolConfig:p}},__vite__mapDeps([0,1]));re("work-calendar"),document.getElementById("page-title").textContent="ปฏิทินปฏิบัติงาน";const a=$=>String($??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),v={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},b={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"},e=$=>new Date($+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"long",year:"numeric"}),l=$=>new Date($+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});let u={academic_year:new Date().getFullYear()+543,semester:1};try{u=await w()}catch{}const d=u.academic_year,f=u.semester;ae(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${d} ภาคเรียนที่ ${f}</p>
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
              ${Object.entries(v).map(([$,S])=>`
                <button data-type="${$}" class="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${$==="inspection"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}">${S}</button>
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
  </div>`);let B=[],C=null;function h(){const $=document.getElementById("wcal-list");if(!B.length){$.innerHTML='<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรม<br><span class="text-xs">กดปุ่ม + เพิ่มกิจกรรม เพื่อเริ่มต้น</span></div>';return}$.innerHTML=B.map(S=>{const q=(S.work_calendar_items||[]).sort((g,p)=>g.sort_order-p.sort_order),i=S.event_type==="inspection"&&S.round_number?`<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${S.round_number}</span>`:"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition" data-ev-id="${S.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-1.5 mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${b[S.event_type]}">${v[S.event_type]}</span>
              ${i}
              <span class="text-xs text-gray-400">${S.end_date&&S.end_date!==S.event_date?`${l(S.event_date)} – ${e(S.end_date)}`:e(S.event_date)}</span>
            </div>
            <p class="font-semibold text-gray-800 text-sm">${a(S.label)}</p>
            ${S.description?`<p class="text-xs text-gray-500 mt-0.5">${a(S.description)}</p>`:""}
            ${q.length?`<ul class="mt-2 space-y-0.5">${q.map(g=>`<li class="text-xs text-gray-500 flex gap-1.5"><span class="text-indigo-400 mt-0.5">☑</span>${a(g.item_label)}</li>`).join("")}</ul>`:""}
          </div>
          <div class="flex gap-1.5 shrink-0">
            <button class="wcal-edit-btn p-2 rounded-xl bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 transition text-sm" data-ev-id="${S.id}" title="แก้ไข">✏️</button>
            <button class="wcal-del-btn p-2 rounded-xl bg-gray-50 hover:bg-rose-50 text-gray-500 hover:text-rose-600 transition text-sm" data-ev-id="${S.id}" title="ลบ">🗑️</button>
          </div>
        </div>
      </div>`}).join("")}function _($=""){const S=document.getElementById("wcal-items-list"),q=document.createElement("div");q.className="flex gap-2 items-center",q.innerHTML=`<input type="text" maxlength="100" value="${a($)}" placeholder="เช่น ตรวจโปรไฟล์ครูครบถ้วน" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
      <button class="p-1.5 text-gray-400 hover:text-rose-500 transition wcal-remove-item">✕</button>`,q.querySelector(".wcal-remove-item").onclick=()=>q.remove(),S.appendChild(q)}function D($=null){C=($==null?void 0:$.id)??null;const S=document.getElementById("wcal-modal");document.getElementById("wcal-modal-title").textContent=$?"แก้ไขกิจกรรม":"เพิ่มกิจกรรม",document.querySelectorAll(".wcal-type-pill").forEach(q=>{const i=q.dataset.type===(($==null?void 0:$.event_type)??"inspection");q.className=`wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${i?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}),document.getElementById("wcal-round").value=($==null?void 0:$.round_number)??"",document.getElementById("wcal-date").value=($==null?void 0:$.event_date)??"",document.getElementById("wcal-end-date").value=($==null?void 0:$.end_date)??"",document.getElementById("wcal-label").value=($==null?void 0:$.label)??"",document.getElementById("wcal-desc").value=($==null?void 0:$.description)??"",document.getElementById("wcal-items-list").innerHTML="",(($==null?void 0:$.work_calendar_items)||[]).sort((q,i)=>q.sort_order-i.sort_order).forEach(q=>_(q.item_label)),L(),S.classList.remove("hidden"),setTimeout(()=>document.getElementById("wcal-label").focus(),50)}function A(){document.getElementById("wcal-modal").classList.add("hidden"),C=null}function E(){var $;return(($=document.querySelector(".wcal-type-pill.bg-indigo-600"))==null?void 0:$.dataset.type)??"inspection"}function L(){document.getElementById("wcal-round-row").classList.toggle("hidden",E()!=="inspection")}document.getElementById("wcal-create-btn").addEventListener("click",()=>D()),document.getElementById("wcal-modal-cancel").addEventListener("click",A),document.getElementById("wcal-modal-backdrop").addEventListener("click",A),document.getElementById("wcal-add-item").addEventListener("click",()=>_()),document.getElementById("wcal-type-pills").addEventListener("click",$=>{const S=$.target.closest(".wcal-type-pill");S&&(document.querySelectorAll(".wcal-type-pill").forEach(q=>{q.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}),S.className="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-indigo-600 text-white border-indigo-600",L())}),document.getElementById("wcal-list").addEventListener("click",$=>{const S=$.target.closest(".wcal-edit-btn"),q=$.target.closest(".wcal-del-btn");if(S){const i=B.find(g=>g.id===+S.dataset.evId);i&&D(i)}if(q){const i=B.find(g=>g.id===+q.dataset.evId);if(!i||!confirm(`ลบ "${i.label}" ใช่ไหม?
ความคิดเห็น/บันทึกที่อ้างอิงกิจกรรมนี้จะไม่ถูกลบ แต่จะสูญเสียการอ้างอิง`))return;m(i.id).then(()=>{B=B.filter(g=>g.id!==i.id),h()}).catch(g=>alert("ลบไม่สำเร็จ: "+g.message))}}),document.getElementById("wcal-modal-save").addEventListener("click",async()=>{const $=E(),S=parseInt(document.getElementById("wcal-round").value)||null,q=document.getElementById("wcal-date").value,i=document.getElementById("wcal-end-date").value||null,g=document.getElementById("wcal-label").value.trim(),p=document.getElementById("wcal-desc").value.trim();if(!q||!g){alert("กรุณากรอกวันที่และชื่อกิจกรรม");return}if(i&&i<q){alert("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น");return}const n=[...document.querySelectorAll("#wcal-items-list input")].map(x=>x.value.trim()).filter(Boolean),c=document.getElementById("wcal-modal-save");c.textContent="กำลังบันทึก...",c.disabled=!0;try{let x;C?(x=await o(C,{eventType:$,roundNumber:S,eventDate:q,endDate:i,label:g,description:p}),await y(C,n),x.work_calendar_items=n.map((j,H)=>({item_label:j,sort_order:H})),B=B.map(j=>j.id===C?x:j)):(x=await s({eventType:$,roundNumber:S,eventDate:q,endDate:i,label:g,description:p,academicYear:d,semester:f,createdByTeacherId:t==null?void 0:t.id}),await y(x.id,n),x.work_calendar_items=n.map((j,H)=>({item_label:j,sort_order:H})),B.push(x),B.sort((j,H)=>j.event_date.localeCompare(H.event_date))),h(),A()}catch(x){alert("บันทึกไม่สำเร็จ: "+x.message)}finally{c.textContent="บันทึก",c.disabled=!1}});try{B=await r(d,f)}catch($){document.getElementById("wcal-list").innerHTML=`<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${a($.message)}</div>`;return}h()}function Mr(t){return t.filter(r=>r.category==="ศาสนา"||["AGM","AGMVOC"].includes(r.subject_group)).concat(t.filter(r=>!r.category&&!["AGM","AGMVOC","ACDMVOC"].includes(r.subject_group))).filter((r,s,o)=>o.findIndex(m=>m.id===r.id)===s)}async function Ea(){re("religion-groups"),document.getElementById("page-title").textContent="กลุ่มรายวิชาศาสนา",ae(`<div class="max-w-4xl mx-auto animate-fade">
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
  </div>`);let t=[],r=[];try{[t,r]=await Promise.all([Be(),ue()])}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}Xe(t),document.getElementById("btn-add-rg").onclick=()=>Sa(null,r,async()=>{const s=await Be();Xe(s)})}function Xe(t){const r=document.getElementById("rg-table-wrap");if(r){if(!t.length){r.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่มีกลุ่มในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มกลุ่ม" เพื่อเริ่มต้น</p>
    </div>`;return}r.innerHTML=`
    <table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ชื่อกลุ่ม</th>
          <th class="px-5 py-3 text-left">หัวหน้ากลุ่ม</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50" id="rg-tbody">
        ${t.map(s=>{var m;const o=s.teachers;return`<tr class="hover:bg-gray-50 transition" data-gid="${s.id}">
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${J(s.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${o?`<div class="flex items-center gap-2">
                    ${o.image_url?`<img src="${o.image_url}" class="w-7 h-7 rounded-full object-cover" />`:`<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${J(((m=o.full_name)==null?void 0:m.charAt(0))??"?")}</div>`}
                    <div>
                      <span class="font-medium">${J(o.full_name)}</span>
                      ${o.teacher_code?`<span class="block text-xs font-mono text-gray-400">${o.teacher_code}</span>`:""}
                    </div>
                  </div>`:'<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${s.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${s.id}" data-name="${J(s.name)}">ลบ</button>
            </td>
          </tr>`}).join("")}
      </tbody>
    </table>`,r.querySelectorAll(".rg-edit").forEach(s=>{s.onclick=async()=>{const o=+s.dataset.gid,y=(await Be()).find(a=>a.id===o),w=await ue();Sa(y,w,async()=>{Xe(await Be())})}}),r.querySelectorAll(".rg-del").forEach(s=>{s.onclick=async()=>{const o=+s.dataset.gid,m=s.dataset.name;if(confirm(`ลบกลุ่ม "${m}" ใช่ไหม?
หัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`))try{const w=(await Be()).find(a=>a.id===o);w!=null&&w.leader_id&&await pt(w.leader_id,null,"religion_subgroup_head"),await dn(o),T("ลบกลุ่มแล้ว","success"),Xe(await Be())}catch(y){T("ลบไม่สำเร็จ: "+y.message,"error")}}})}}function Sa(t,r,s){const o=!!t,m=document.createElement("div");m.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4";const y=[...r].sort((a,v)=>(a.full_name??"").localeCompare(v.full_name??"","th"));m.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${o?"แก้ไขกลุ่ม":"เพิ่มกลุ่มใหม่"}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${J((t==null?void 0:t.name)??"")}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
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
    </div>`,document.body.appendChild(m);const w=yt({wrap:m.querySelector("#rg-leader-wrap"),teachers:y,value:(t==null?void 0:t.leader_id)??null});m.querySelector("#rg-modal-close").onclick=()=>m.remove(),m.querySelector("#rg-cancel").onclick=()=>m.remove(),m.querySelector("#rg-save").onclick=async()=>{const a=m.querySelector("#rg-name").value.trim();if(!a){T("กรุณาระบุชื่อกลุ่ม","error");return}const v=w.getValue(),b=(t==null?void 0:t.leader_id)??null,e=m.querySelector("#rg-save");e.disabled=!0,e.textContent="กำลังบันทึก...";try{o?(await cn(t.id,{name:a,leader_id:v}),b&&b!==+v&&await pt(b,null,"religion_subgroup_head")):await pn({name:a,leader_id:v}),v&&await pt(+v,"religion_subgroup_head"),T(o?"บันทึกแล้ว":"เพิ่มกลุ่มแล้ว","success"),m.remove(),s()}catch(l){T("บันทึกไม่สำเร็จ: "+l.message,"error"),e.disabled=!1,e.textContent="บันทึก"}}}async function Dr(t){re("my-religion-group"),document.getElementById("page-title").textContent="กลุ่มของฉัน",ae(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);let r=[],s=[];try{[r,s]=await Promise.all([Be(),ue()])}catch{T("โหลดข้อมูลไม่สำเร็จ","error");return}const o=r.find(w=>w.leader_id===t.id),m=document.getElementById("mrg-content");if(!o){m.innerHTML=`<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`;return}const y=Mr(s);await La(o,y)}async function La(t,r){const s=document.getElementById("mrg-content");let o=[];try{o=await un(t.id)}catch{T("โหลดสมาชิกไม่สำเร็จ","error");return}s.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${J(t.name)}</h3>
        <p class="text-xs text-gray-400 mt-0.5">สมาชิกในกลุ่ม ${o.length} คน</p>
      </div>
      <button id="btn-mrg-add" class="btn-primary px-4 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มสมาชิก
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${o.length?`
        <ul class="divide-y divide-gray-50">
          ${o.map(m=>{var w;const y=m.teachers;return`
            <li class="px-5 py-3 flex items-center gap-3">
              ${y!=null&&y.image_url?`<img src="${y.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${J(((w=y==null?void 0:y.full_name)==null?void 0:w.charAt(0))??"?")}</div>`}
              <div>
                <span class="font-medium text-gray-800">${J((y==null?void 0:y.full_name)??"")}</span>
                ${y!=null&&y.teacher_code?`<span class="block text-xs font-mono text-gray-400">${y.teacher_code}</span>`:""}
              </div>
            </li>`}).join("")}
        </ul>`:`
        <div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">👥</p>
          <p class="font-medium">ยังไม่มีสมาชิกในกลุ่ม</p>
          <p class="text-xs mt-1">กดปุ่ม "เพิ่มสมาชิก" เพื่อเริ่มต้น</p>
        </div>`}
    </div>`,document.getElementById("btn-mrg-add").onclick=()=>Hr(t,r,o,async()=>{await La(t,r)})}function Hr(t,r,s,o){const m=document.createElement("div");m.className="fixed inset-0 z-[9000] bg-white flex flex-col",m.innerHTML=`
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${J(t.name)}"</h3>
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
    </div>`,document.body.appendChild(m);const y=bt({wrap:m.querySelector("#mrg-member-wrap"),chipsWrap:m.querySelector("#mrg-chips"),teachers:r,value:s.map(w=>w.teacher_id)});m.querySelector("#mrg-modal-close").onclick=()=>m.remove(),m.querySelector("#mrg-cancel").onclick=()=>m.remove(),m.querySelector("#mrg-save").onclick=async()=>{const w=y.getValue(),a=m.querySelector("#mrg-save");a.disabled=!0,a.textContent="กำลังบันทึก...";try{await yn(t.id,w),m.remove(),await o(),Rr(t,r.filter(v=>w.includes(v.id)))}catch(v){T("บันทึกไม่สำเร็จ: "+v.message,"error"),a.disabled=!1,a.textContent="บันทึก"}}}function Rr(t,r){const s=document.createElement("div");s.className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${J(t.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${r.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${r.length?`<ul class="divide-y divide-gray-50">
          ${r.map(o=>{var m;return`<li class="py-2.5 flex items-center gap-3">
            ${o.image_url?`<img src="${o.image_url}" class="w-8 h-8 rounded-full object-cover" />`:`<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${J(((m=o.full_name)==null?void 0:m.charAt(0))??"?")}</div>`}
            <div>
              <span class="font-medium text-gray-800">${J(o.full_name??"")}</span>
              ${o.teacher_code?`<span class="block text-xs font-mono text-gray-400">${o.teacher_code}</span>`:""}
            </div>
          </li>`}).join("")}
        </ul>`:'<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>'}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`,document.body.appendChild(s),s.querySelector("#mrg-summary-close").onclick=()=>s.remove()}async function Ia(){re("classroom-leaders"),document.getElementById("page-title").textContent="จัดการหัวหน้าและรองหัวหน้าห้อง",ae(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `);let t=[],r=[],s="manage",o="สามัญ",m="",y="",w="";const a=i=>{if(!i)return null;const g=i.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return g?g[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},v=i=>i?/^(PR|อก\.|อป\.)/i.test(i)?"ศาสนา":/^ปวช\./i.test(i)?"ปวช":"สามัญ":"สามัญ",b={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},e=i=>t.map(g=>g.class_name).filter(g=>g&&v(g)===i).sort((g,p)=>g.localeCompare(p,"th")),l=i=>{const g=e(i),p=[...new Set(g.map(c=>a(c)).filter(Boolean))],n=b[i]||[];return[...new Set([...n,...p])].sort((c,x)=>c.localeCompare(x,"th"))},u=async()=>{const[i,g,p]=await Promise.all([et(),He(),mn()]);r=g,t=[...new Set(i.map(c=>c.class_name).filter(Boolean))].map(c=>p.find(j=>j.class_name===c)||{class_name:c,head_student_id:null,vice_head_student_id:null,head_cert_url:null,vice_head_cert_url:null,show_cert:!0,notes:null})},d=i=>r.find(g=>g.id===i),f=()=>{let i=document.getElementById("hc-print-roster-styles");i||(i=document.createElement("style"),i.id="hc-print-roster-styles",document.head.appendChild(i)),i.textContent=`
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
    `;const g=document.createElement("div");g.id="hc-print-roster-area",document.body.appendChild(g);const p=t.filter(x=>!(v(x.class_name)!==o||m&&a(x.class_name)!==m||y&&x.class_name!==y)).sort((x,j)=>x.class_name.localeCompare(j.class_name,"th"));let n="ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน";m&&(n+=` ระดับชั้น ${m}`),y&&(n+=` ห้อง ${y}`);const c=p.map((x,j)=>{const H=d(x.head_student_id),k=d(x.vice_head_student_id),I=H!=null&&H.image_url?`<img src="${H.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',R=k!=null&&k.image_url?`<img src="${k.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`:'<div class="stu-img-placeholder">👤</div>',N=H?`<b>${J(H.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${H.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>',O=k?`<b>${J(k.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${k.student_code}</span>`:'<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>';return`
        <tr>
          <td style="text-align: center; width: 45px;">${j+1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${J(x.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${I}
              <div>${N}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${R}
              <div>${O}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${J(x.notes??"")}</td>
        </tr>
      `}).join("");g.innerHTML=`
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${n}</div>
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
              ${c||'<tr><td colspan="5" style="text-align:center;padding:20px;color:#9ca3af;">ไม่พบข้อมูลห้องเรียน</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `,g.querySelector("#pr-btn-confirm-print").onclick=()=>{window.print()},g.querySelector("#pr-btn-close-preview").onclick=()=>{g.remove()}},B=()=>`
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${s==="manage"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${s==="print"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `,C=()=>{const i=w.trim().toLowerCase(),g=t.filter(p=>!(v(p.class_name)!==o||i&&!p.class_name.toLowerCase().includes(i))).sort((p,n)=>p.class_name.localeCompare(n.class_name,"th"));return g.length===0?'<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>':g.map(p=>{const n=d(p.head_student_id),c=d(p.vice_head_student_id),x=n!=null&&n.image_url?`<img src="${n.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>',j=c!=null&&c.image_url?`<img src="${c.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>';return`
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${J(p.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${o}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${x}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${n?J(n.full_name):"— ยังไม่ระบุ —"}</span>
                  ${n?`<span class="text-xs text-gray-400 font-mono">รหัส: ${n.student_code}</span>`:""}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${j}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${c?J(c.full_name):"— ยังไม่ระบุ —"}</span>
                  ${c?`<span class="text-xs text-gray-400 font-mono">รหัส: ${c.student_code}</span>`:""}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${p.head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
              <p>เกียรติบัตรรอง: ${p.vice_head_cert_url?"🟢 มีแล้ว":"🔴 ไม่มี"}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${J(p.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `}).join("")},h=()=>{const i=t.filter(g=>!(v(g.class_name)!==o||m&&a(g.class_name)!==m||y&&g.class_name!==y)).sort((g,p)=>g.class_name.localeCompare(p.class_name,"th"));return i.length===0?'<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>':i.map((g,p)=>{const n=d(g.head_student_id),c=d(g.vice_head_student_id),x=n!=null&&n.image_url?`<img src="${n.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>',j=c!=null&&c.image_url?`<img src="${c.image_url}" class="student-avatar-premium" />`:'<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>';return`
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${p+1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${J(g.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${x}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${n?J(n.full_name):"— ยังไม่ระบุ —"}</p>
                ${n?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${n.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${j}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${c?J(c.full_name):"— ยังไม่ระบุ —"}</p>
                ${c?`<p class="text-[10px] text-gray-400 font-mono">รหัส ${c.student_code}</p>`:""}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${J(g.notes??"")}
          </td>
        </tr>
      `}).join("")},_=()=>{const i=t.filter(g=>!(v(g.class_name)!==o||m&&a(g.class_name)!==m||y&&g.class_name!==y)).length;s==="manage"?ae(`
        <div class="space-y-5 animate-fade">
          ${B()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${o==="สามัญ"?"selected":""}>สามัญ</option>
                <option value="ศาสนา" ${o==="ศาสนา"?"selected":""}>ศาสนา</option>
                <option value="ปวช" ${o==="ปวช"?"selected":""}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${J(w)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${i}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${C()}
          </div>
        </div>
      `):(ae(`
        <div class="space-y-5 animate-fade">
          ${B()}

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
                  ${h()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `),D()),E()},D=()=>{const i=document.getElementById("pr-filter-level");if(!i)return;const g=l(o);i.innerHTML=`
      <option value="">-- ทุกระดับชั้น --</option>
      ${g.map(p=>`<option value="${p}" ${p===m?"selected":""}>${p}</option>`).join("")}
    `,A()},A=()=>{const i=document.getElementById("pr-filter-class");if(!i)return;const p=e(o).filter(n=>m?a(n)===m:!0);i.innerHTML=`
      <option value="">-- ทั้งระดับชั้น (${p.length} ห้อง) --</option>
      ${p.map(n=>`<option value="${n}" ${n===y?"selected":""}>ห้อง ${n}</option>`).join("")}
    `},E=()=>{var i,g,p,n,c,x,j,H,k;(i=document.getElementById("tab-manage"))==null||i.addEventListener("click",()=>{s="manage",_()}),(g=document.getElementById("tab-print"))==null||g.addEventListener("click",()=>{s="print",_()}),(p=document.getElementById("hc-filter-category"))==null||p.addEventListener("change",I=>{o=I.target.value,_()}),(n=document.getElementById("hc-search-classes"))==null||n.addEventListener("input",I=>{w=I.target.value;const R=document.getElementById("hc-cards-grid");R&&(R.innerHTML=C()),$()}),$(),(c=document.getElementById("pr-filter-category"))==null||c.addEventListener("change",I=>{o=I.target.value,m="",y="",D(),L()}),(x=document.getElementById("pr-filter-level"))==null||x.addEventListener("change",I=>{m=I.target.value,y="",A(),L()}),(j=document.getElementById("pr-filter-class"))==null||j.addEventListener("change",I=>{y=I.target.value,L()}),(H=document.getElementById("btn-print-leaders-roster"))==null||H.addEventListener("click",f),(k=document.getElementById("btn-cert-settings"))==null||k.addEventListener("click",S)},L=()=>{const i=document.getElementById("pr-table-body");i&&(i.innerHTML=h());const g=t.filter(n=>!(v(n.class_name)!==o||m&&a(n.class_name)!==m||y&&n.class_name!==y)).length,p=document.getElementById("btn-print-leaders-roster");p&&(p.disabled=g===0,p.textContent=`🖨️ พิมพ์ใบรายชื่อ (${g})`)},$=()=>{document.querySelectorAll(".btn-edit-leaders").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.room,p=t.find(n=>n.class_name===g);p&&q(p)})})},S=()=>{const i=document.createElement("div");i.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";const g=t.some(j=>j.show_cert);i.innerHTML=`
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
    `,document.body.appendChild(i);const p=i.querySelector("#csm-global-toggle"),n=i.querySelector("#csm-status-text"),c=j=>{n.textContent=j?"🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)":"🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)"};c(g),p.addEventListener("change",async()=>{const j=p.checked;p.disabled=!0,n.textContent="กำลังบันทึก...";try{await vn(j),t.forEach(H=>{H.show_cert=j}),c(j),T(j?"เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว":"ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว","success")}catch(H){T("บันทึกผิดพลาด: "+H.message,"error"),p.checked=!j,c(!j)}finally{p.disabled=!1}});const x=()=>i.remove();i.querySelector("#csm-modal-close").onclick=x,i.querySelector("#csm-btn-close").onclick=x},q=i=>{const g=document.createElement("div");g.className="fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade";let p=d(i.head_student_id),n=d(i.vice_head_student_id);g.innerHTML=`
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
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(p==null?void 0:p.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${p?`
                ${p.image_url?`<img src="${p.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${J(p.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${p.student_code} · ห้อง ${p.main_room||"—"}</p>
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
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${(n==null?void 0:n.student_code)??""}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${n?`
                ${n.image_url?`<img src="${n.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>'}
                <div>
                  <p class="font-bold text-gray-800">${J(n.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${n.student_code} · ห้อง ${n.main_room||"—"}</p>
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
    `,document.body.appendChild(g);let c=i.head_student_id,x=i.vice_head_student_id;const j=()=>{document.getElementById("ld-head-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},H=()=>{document.getElementById("ld-vice-card").innerHTML='<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>'},k=O=>{const Q=document.getElementById("ld-head-card");if(O){c=O.id;const W=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';Q.innerHTML=`
          ${W}
          <div>
            <p class="font-bold text-gray-800">${J(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else c=null,Q.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'},I=O=>{const Q=document.getElementById("ld-vice-card");if(O){x=O.id;const W=O.image_url?`<img src="${O.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />`:'<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>';Q.innerHTML=`
          ${W}
          <div>
            <p class="font-bold text-gray-800">${J(O.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${O.student_code} · ห้อง ${O.main_room||"—"}</p>
          </div>
        `}else x=null,Q.innerHTML='<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>'};document.getElementById("ld-head-code-in").addEventListener("input",async O=>{const Q=O.target.value.trim();if(Q.length===5){j();const W=await It(Q).catch(()=>null);k(W)}else Q.length===0&&(c=null,document.getElementById("ld-head-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')}),document.getElementById("ld-vice-code-in").addEventListener("input",async O=>{const Q=O.target.value.trim();if(Q.length===5){H();const W=await It(Q).catch(()=>null);I(W)}else Q.length===0&&(x=null,document.getElementById("ld-vice-card").innerHTML='<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>')});const R=async(O,Q)=>{const W=O.files[0];if(W){Q.disabled=!0,Q.value="กำลังอัปโหลดไฟล์...";try{const P=W.name.split(".").pop(),U=`certificates/${i.id}/${O.id}-${Date.now()}.${P}`;let Y=W;W.type.startsWith("image/")&&(Y=await ms(W,{maxWidth:1600,quality:.88}));const{error:M}=await le.storage.from("system-assets").upload(U,Y,{upsert:!0,contentType:W.type});if(M)throw M;const{data:F}=le.storage.from("system-assets").getPublicUrl(U);Q.value=F.publicUrl}catch(P){T("อัปโหลดล้มเหลว: "+P.message,"error"),Q.value=""}finally{Q.disabled=!1}}};document.getElementById("ld-head-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-head-cert-file"),document.getElementById("ld-head-cert-in"))}),document.getElementById("ld-vice-cert-file").addEventListener("change",()=>{R(document.getElementById("ld-vice-cert-file"),document.getElementById("ld-vice-cert-in"))});const N=()=>g.remove();document.getElementById("ld-modal-close").onclick=N,document.getElementById("ld-btn-cancel").onclick=N,document.getElementById("ld-btn-save").onclick=async()=>{const O=document.getElementById("ld-btn-save");O.disabled=!0,O.textContent="กำลังบันทึก...";const Q=document.getElementById("ld-head-cert-in").value.trim(),W=document.getElementById("ld-vice-cert-in").value.trim(),P=document.getElementById("ld-notes-in").value.trim();try{await Ln(i.class_name,c,x,Q,W,P),i.head_student_id=c,i.vice_head_student_id=x,i.head_cert_url=Q,i.vice_head_cert_url=W,i.notes=P,T("บันทึกข้อมูลเรียบร้อยแล้ว","success"),N(),_()}catch(U){T("เกิดข้อผิดพลาด: "+U.message,"error"),O.disabled=!1,O.textContent="บันทึกข้อมูล"}}};await u(),_()}const ao=Object.freeze(Object.defineProperty({__proto__:null,renderAdminProfile:ca,renderAnnouncements:ha,renderClasses:wt,renderClassroomLeaders:Ia,renderClassroomsAdmin:ua,renderCurriculum:qe,renderDepartments:ta,renderDeptTable:tt,renderDonations:_a,renderFeedbackAdmin:$a,renderHolidays:sa,renderHomeroom:aa,renderHouseColors:wa,renderImport:ra,renderLifeSkillAdmin:la,renderMyReligionGroup:Dr,renderOverview:xt,renderPayments:oa,renderPeriods:at,renderPrayerAdmin:ia,renderReadingAdmin:da,renderRegisteredTeachers:Je,renderReligionGroups:Ea,renderRolePermissions:va,renderScoreColConfig:na,renderSettings:ea,renderStudents:Zt,renderSubjectTable:_t,renderSubjects:De,renderSupervisorAnnouncements:Ar,renderTeacherTable:ze,renderTeachers:Xt,renderUsageStats:pa,renderWorkCalendar:ka,renderWorkCalendarView:qr},Symbol.toStringTag,{value:"Module"}));export{Fs as A,Ia as B,$a as C,_a as D,Ys as E,wa as F,va as G,ka as H,ha as I,ao as J,Ea as a,ua as b,pa as c,ca as d,ra as e,ea as f,ia as g,da as h,la as i,oa as j,sa as k,Je as l,na as m,aa as n,at as o,qe as p,ta as q,De as r,Zt as s,wt as t,Xt as u,zs as v,xt as w,ze as x,_t as y,tt as z};
