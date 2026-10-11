const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pp5-doc-DT_3IQge.js","assets/api-C-roKrdU.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/score-display-CQ4dUIPx.js","assets/ui-CdgrLWzs.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-D0Lb_BpE.js"])))=>i.map(i=>d[i]);
import{_ as Nn,a as y,g as le}from"./ui-CdgrLWzs.js";import{getMyClasses as an,getSystemConfig as ln,getAcademicTerms as Mn,getScoreColumns as he,getClassStudents as Bn,getStudentScores as kt,getSheetColumnOptionsForTypes as Tn,createScoreColumn as Ie,getLifeSkillColumns as An,fillPrayerScoresForReligionClass as Rn,syncAutoAttendanceScoreColumns as Fn,getReadingScoreColumns as Gn,getReadingScores as On,getClassScoreRounding as Hn,detectAssignmentKind as zn,updateScoreColumn as Ae,exportClassGradesToGradeOnline as Pn,saveClassScoreRounding as Un,updateColumnSortOrders as Vn,setColumnAutoAttendanceSync as Kn,deleteScoreColumn as st,saveStudentScore as Et,applyScoreOverride as Yn,updateClassStudentSpecialResult as Wn,getTeacherExamRequests as Qn,reviewExamRequest as Jt,updateExamResult as Zt}from"./api-C-roKrdU.js";import{s as Xn,i as Dt,a as Jn,b as Zn,e as ht,n as en,c as Dn}from"./score-display-CQ4dUIPx.js";import{g as es,M as ts,N as ns}from"./regrade-api-CbX4L_dw.js";import{s as dn}from"./supabase-BV-W2lsh.js";import{i as ss}from"./skill-groups-BY1NTbf4.js";import{openScoreScanner as tn}from"./score-qr-scanner-VIO-qDxr.js";import{setActiveNav as qt,setTitle as Ct,setContent as je,_htmlEsc as J,applyReadingGradesFromConfig as rs,_readingGrade as os}from"./teacher-views-utils-D0Lb_BpE.js";const St="pp5:gradebook-updated",cn="pp5_gradebook_update",as="pp5-gradebook-sync-v1";let Ce=null;try{Ce=new BroadcastChannel(as)}catch{}function ls(u){const r={...u,eventId:`${Date.now()}-${Math.random().toString(36).slice(2)}`,updatedAt:new Date().toISOString()};window.dispatchEvent(new CustomEvent(St,{detail:r}));try{Ce==null||Ce.postMessage(r)}catch{}try{localStorage.setItem(cn,JSON.stringify(r))}catch{}return r}function ds(u){const r=new Set,w=S=>{!(S!=null&&S.eventId)||r.has(S.eventId)||(r.add(S.eventId),r.size>100&&r.delete(r.values().next().value),u(S))},I=S=>w(S.detail),T=S=>w(S.data),B=S=>{if(!(S.key!==cn||!S.newValue))try{w(JSON.parse(S.newValue))}catch{}};return window.addEventListener(St,I),Ce==null||Ce.addEventListener("message",T),window.addEventListener("storage",B),()=>{window.removeEventListener(St,I),Ce==null||Ce.removeEventListener("message",T),window.removeEventListener("storage",B)}}const nn=new TextEncoder;function mn(u){return String(u??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function is(u){let r="";for(let w=u+1;w>0;w=Math.floor((w-1)/26))r=String.fromCharCode(65+(w-1)%26)+r;return r}function cs(u,r){if(r==null||r==="")return"";if(typeof r=="number"&&Number.isFinite(r))return`<c r="${u}"><v>${r}</v></c>`;const w=String(r),I=/^\s|\s$/.test(w)?' xml:space="preserve"':"";return`<c r="${u}" t="inlineStr"><is><t${I}>${mn(w)}</t></is></c>`}function ms(u){const r=u.map((I,T)=>{const B=I.map((S,Y)=>cs(`${is(Y)}${T+1}`,S)).join("");return`<row r="${T+1}">${B}</row>`}).join("");return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="A1:E${Math.max(u.length,1)}"/>
  <sheetViews><sheetView workbookViewId="0" showGridLines="1"/></sheetViews>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="34" customWidth="1"/>
    <col min="4" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>${r}</sheetData>
  <pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/>
</worksheet>`}function us(u){return(String(u??"").replace(/[\\/?*\[\]:]/g,"").trim()||"GradeOnline").slice(0,31)}function sn(u){return String(u??"").replace(/[\\/:*?"<>|]/g,"-").trim()||"GradeOnline"}function te(u,r,w){u.setUint16(r,w,!0)}function pe(u,r,w){u.setUint32(r,w>>>0,!0)}const xs=(()=>{const u=new Uint32Array(256);for(let r=0;r<256;r++){let w=r;for(let I=0;I<8;I++)w=w&1?3988292384^w>>>1:w>>>1;u[r]=w>>>0}return u})();function ps(u){let r=4294967295;for(const w of u)r=xs[(r^w)&255]^r>>>8;return(r^4294967295)>>>0}function rn(u){const r=u.reduce((T,B)=>T+B.length,0),w=new Uint8Array(r);let I=0;for(const T of u)w.set(T,I),I+=T.length;return w}function bs(u){const r=[],w=[];let I=0;for(const Y of u){const R=nn.encode(Y.name),F=nn.encode(Y.content),ee=ps(F),X=new Uint8Array(30+R.length+F.length),C=new DataView(X.buffer);pe(C,0,67324752),te(C,4,20),te(C,6,0),te(C,8,0),te(C,10,0),te(C,12,0),pe(C,14,ee),pe(C,18,F.length),pe(C,22,F.length),te(C,26,R.length),te(C,28,0),X.set(R,30),X.set(F,30+R.length),r.push(X);const O=new Uint8Array(46+R.length),U=new DataView(O.buffer);pe(U,0,33639248),te(U,4,20),te(U,6,20),te(U,8,0),te(U,10,0),te(U,12,0),te(U,14,0),pe(U,16,ee),pe(U,20,F.length),pe(U,24,F.length),te(U,28,R.length),te(U,30,0),te(U,32,0),te(U,34,0),te(U,36,0),pe(U,38,0),pe(U,42,I),O.set(R,46),w.push(O),I+=X.length}const T=rn(w),B=new Uint8Array(22),S=new DataView(B.buffer);return pe(S,0,101010256),te(S,4,0),te(S,6,0),te(S,8,u.length),te(S,10,u.length),pe(S,12,T.length),pe(S,16,I),te(S,20,0),rn([...r,T,B])}function gs({subjectName:u,className:r,records:w}){const T=[["เลขที่","รหัสนักเรียน","ชื่อ-สกุล","คะแนนรวม","เกรด"],...w.map((ee,X)=>[X+1,String(ee.studentCode??""),String(ee.studentName??""),ee.total===""||ee.total==null?"":Number(ee.total),String(ee.grade??"")])],B=us(u||r||"GradeOnline"),S=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="${mn(B)}" sheetId="1" r:id="rId1"/></sheets>
</workbook>`,Y=[{name:"[Content_Types].xml",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`},{name:"_rels/.rels",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`},{name:"xl/workbook.xml",content:S},{name:"xl/_rels/workbook.xml.rels",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`},{name:"xl/worksheets/sheet1.xml",content:ms(T)}],R=new Blob([bs(Y)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),F=document.createElement("a");F.href=URL.createObjectURL(R),F.download=`GradeOnline-${sn(u||"รายวิชา")}-${sn(r||"ห้องเรียน")}.xlsx`,F.click(),setTimeout(()=>URL.revokeObjectURL(F.href),1e3)}async function un(u){if(qt("grades"),Ct("บันทึกคะแนน","scores"),je(`<div class="flex justify-center py-20 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายการห้องเรียน...</div>`),!(u!=null&&u.id)){je('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">⚠️</p><p>ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p></div>');return}try{const[r,w,I]=await Promise.all([an(u.id),ln().catch(()=>({})),Mn().catch(()=>[])]),T=parseInt(w.academicYear??w.academic_year??2568),B=parseInt(w.semester??1),S=c=>`${c.academic_year!=null&&Number.isFinite(+c.academic_year)?+c.academic_year:T}:${c.semester!=null&&Number.isFinite(+c.semester)?+c.semester:B}`,Y=c=>{const[_,k]=c.split(":");return`ภาคเรียนที่ ${k}/${_}`},R=`${T}:${B}`,F=(I??[]).map(c=>`${c.academic_year}:${c.semester}`),ee=[...new Set([R,...F,...r.map(S)])].sort((c,_)=>c===R?-1:_===R?1:_.localeCompare(c,void 0,{numeric:!0})),X=localStorage.getItem(`pp5_teacher_grade_term_${u.id}`),C=ee.includes(X)?X:R,O=c=>{const _=r.filter(f=>S(f)===c),k=c!==R,A=document.getElementById("grade-history-class-list");A&&(A.innerHTML=_.length?_.map(f=>{var W,Z;return`
        <article class="rounded-2xl border ${k?"border-amber-200 bg-amber-50/30":"border-gray-100 bg-white"} p-4 shadow-sm flex items-center justify-between gap-3">
          <div class="min-w-0">
            <p class="text-xs text-gray-400 font-mono">${J(((W=f.master_subjects)==null?void 0:W.subject_code)??"—")} · ${J(Y(c))}</p>
            <h3 class="font-bold text-gray-800 truncate mt-1">${J(((Z=f.master_subjects)==null?void 0:Z.subject_name)??"—")}</h3>
            <p class="text-sm text-gray-500 truncate">ห้อง ${J(f.class_name??"—")}</p>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <button class="grade-history-open px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold" data-class-id="${f.id}">📝 คะแนน</button>
            <button class="grade-history-pp5 px-3 py-2 rounded-xl border border-violet-200 text-violet-700 hover:bg-violet-50 text-xs font-semibold" data-class-id="${f.id}">📄 ปพ.5</button>
          </div>
        </article>`}).join(""):'<div class="rounded-2xl border border-dashed border-gray-200 p-10 text-center text-sm text-gray-400">ภาคเรียนนี้ยังไม่มีห้องเรียน</div>',A.querySelectorAll(".grade-history-open").forEach(f=>f.addEventListener("click",()=>{const W=r.find(Z=>Z.id===Number(f.dataset.classId));W&&(window._backToClasses=()=>un(u),Ee(u,W))})),A.querySelectorAll(".grade-history-pp5").forEach(f=>f.addEventListener("click",async()=>{const W=Number(f.dataset.classId),{openPP5Doc:Z}=await Nn(async()=>{const{openPP5Doc:re}=await import("./pp5-doc-DT_3IQge.js");return{openPP5Doc:re}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));await Z(W)})))};je(`<div class="animate-fade space-y-4">
      <div class="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div><h2 class="font-bold text-indigo-900">📝 บันทึกคะแนน</h2><p class="text-xs text-indigo-600 mt-1">เลือกภาคเรียนเพื่อเปิดคะแนนและเอกสาร ปพ.5 ของภาคเรียนนั้น</p></div>
          <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
            <span>กำลังดู</span>
            <select id="grade-history-term" class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700">
              ${ee.map(c=>`<option value="${J(c)}" ${c===C?"selected":""}>${J(Y(c))}${c===R?" (ปัจจุบัน)":" (ย้อนหลัง)"}</option>`).join("")}
            </select>
          </label>
        </div>
      </div>
      <div id="grade-history-note" class="text-xs text-gray-500"></div>
      <div id="grade-history-class-list" class="space-y-3"></div>
    </div>`);const U=document.getElementById("grade-history-term"),g=()=>{const c=U.value,_=document.getElementById("grade-history-note");_&&(_.textContent=c===R?"แสดงห้องเรียนของภาคเรียนปัจจุบัน":"โหมดข้อมูลย้อนหลัง: แก้ไขคะแนน ร เป็น 0 ได้ และเปิด/ดาวน์โหลด ปพ.5 ของภาคเรียนเดิมได้ โดยไม่ปะปนกับภาคเรียนปัจจุบัน"),O(c)};U.addEventListener("change",()=>{localStorage.setItem(`pp5_teacher_grade_term_${u.id}`,U.value),g()}),U.value=C,g()}catch(r){console.error("[renderGrades] โหลดรายการห้องเรียนไม่สำเร็จ",r),je('<div class="text-center py-20 text-red-400"><p class="text-4xl mb-3">⚠️</p><p>โหลดรายการห้องเรียนไม่สำเร็จ</p></div>')}}let it=null;function fs(u){return u>=80?4:u>=75?3.5:u>=70?3:u>=65?2.5:u>=60?2:u>=55?1.5:u>=50?1:0}function ys(u){return u>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:u>=2.5?{label:"ดี",cls:"text-blue-600"}:u>=1?{label:"ผ่าน",cls:"text-amber-500"}:{label:"ไม่ผ่าน",cls:"text-red-600"}}function hs(u,r,w){if(w)return{allowed:!0,claimedRoom:null};let I=null;try{I=localStorage.getItem(`pp5_gradeonline_room_${u}`)}catch{}return!I||I===r?{allowed:!0,claimedRoom:I}:{allowed:!1,claimedRoom:I}}function vs(u,r){try{localStorage.setItem(`pp5_gradeonline_room_${u}`,r)}catch{}}function ws(u,r){var I;(I=document.getElementById("gol-room-paywall"))==null||I.remove();const w=document.createElement("div");w.id="gol-room-paywall",w.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",w.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative">
      <button id="gol-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์ส่งคะแนนเข้า GradeOnline ใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${J(u)}</b> ไว้แล้ว
        ${r?`<br><br>ต้องการใช้กับห้อง <b>${J(r)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ (สรุปเกรดเข้าระบบแก้ค้างเก่ายังส่งได้ตามปกติ)
      </p>
      <button id="gol-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(w),w.querySelector("#gol-pw-close").addEventListener("click",()=>w.remove()),w.querySelector("#gol-pw-donate").addEventListener("click",()=>{var T;w.remove(),(T=document.getElementById("btn-donate-float"))==null||T.click()})}function $s(u,r){var T;(T=document.getElementById("gol-result-modal"))==null||T.remove();const w=document.createElement("div");w.id="gol-result-modal",w.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",w.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📤 ส่งคะแนนเข้า GradeOnline</h3>
        <button id="gol-result-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-4 space-y-4 text-sm text-gray-600">
        <p class="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">เตรียมคะแนนไว้แล้ว ${r} คน — ใช้รหัสด้านล่างตอนกดปุ่มบุ๊กมาร์กในหน้า GradeOnline</p>
        <div class="text-center bg-gray-50 rounded-xl py-3">
          <p class="text-[11px] text-gray-400 mb-1">รหัสอ้างอิง</p>
          <p class="text-2xl font-mono font-bold tracking-widest text-indigo-700">${J(u)}</p>
        </div>
        <div class="text-center space-y-2">
          <p class="text-xs">ยังไม่เคยติดตั้ง? <b>ลากปุ่มนี้</b> ไปวางที่แถบบุ๊กมาร์กของเบราว์เซอร์ (ทำครั้งเดียว)</p>
          <a
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-lg"
            style="cursor:grab"
            href="javascript:(function(){var s=document.createElement('script');s.src='https://ghhambal.github.io/pp5online/js/gradeonline-bridge-push.js?v='+Date.now();document.body.appendChild(s);})();"
            onclick="alert('อย่ากดปุ่มนี้ตรงๆ นะครับ — ให้ลาก (drag) ปุ่มนี้ไปวางที่แถบบุ๊กมาร์กด้านบนของเบราว์เซอร์แทน'); return false;"
          >📥 ดึงคะแนนเข้า GradeOnline</a>
        </div>
        <ol class="space-y-1.5 text-xs list-decimal list-inside">
          <li>เปิดหน้า GradeOnline (azizstan.net) ไปที่วิชา/ห้องที่ต้องการกรอกคะแนน</li>
          <li>กดปุ่มบุ๊กมาร์กที่ลากไว้ แล้ววางรหัสอ้างอิงด้านบนตอนที่ระบบถาม</li>
          <li>สคริปต์จะกรอกคะแนนรวม+เกรดให้ทีละคนแบบไม่รีบ — <b>ตรวจสอบให้ดีก่อนกดปุ่มบันทึกของ GradeOnline เอง</b> (ไม่บันทึกให้อัตโนมัติ)</li>
        </ol>
        <p class="text-[11px] text-gray-400 text-center">ไม่เห็นแถบบุ๊กมาร์ก? กด ⌘/Ctrl+Shift+B เพื่อเปิดก่อน</p>
      </div>
    </div>`,document.body.appendChild(w);const I=()=>w.remove();w.querySelector("#gol-result-close").onclick=I,w.onclick=B=>{B.target===w&&I()}}async function Ee(u,r){var I,T,B,S,Y,R,F,ee;it==null||it(),it=null,window._currentGradeTeacher=u,qt("grades"),Ct("บันทึกคะแนน","scores");const w=r.master_subjects;je(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`);try{let X=r.id;if(r.source_class_id){const{data:e}=await dn.from("classes").select("id, academic_year, semester").eq("id",r.source_class_id).maybeSingle(),n=r.academic_year!=null&&r.semester!=null,l=(e==null?void 0:e.academic_year)!=null&&(e==null?void 0:e.semester)!=null;e&&(!n||l&&+e.academic_year==+r.academic_year&&+e.semester==+r.semester)&&(X=e.id)}const C=he(X),[O,U,g,[c,_,k],A,f,W]=await Promise.all([Bn(r.id),C,C.then(e=>kt(X,e)),Tn(r.id,["กลางภาค","ปลายภาค","ระหว่างเรียน"]),ln().catch(()=>({})),u?an(u.id).catch(()=>[]):Promise.resolve([]),es().catch(()=>({}))]),Z=parseInt(r.academic_year??A.academicYear??2568),re=parseInt(r.semester??A.semester??1),Se=parseInt(A.academicYear??2568),Re=parseInt(A.semester??1),de=Z!==Se||re!==Re,be=ts(W);rs(A),r.course_id&&U.length===0&&setTimeout(async()=>{var e;try{const n=f.filter(d=>{if(d.id===r.id||d.course_id!==r.course_id)return!1;const E=r.academic_year??Se,q=r.semester??Re;return(d.academic_year??Se)===E&&(d.semester??Re)===q}),l=(await Promise.all(n.map(async d=>{const E=await he(d.id).catch(()=>[]);return E.length?{...d,cols:E}:null}))).filter(Boolean);if(!l.length)return;(e=document.getElementById("grade-same-subj-popup"))==null||e.remove();const x=document.createElement("div");x.id="grade-same-subj-popup",x.className="fixed inset-0 z-[190] flex items-center justify-center p-6",x.style.background="rgba(0,0,0,0.45)",x.innerHTML=`
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
                <div class="text-3xl mb-2">📋</div>
                <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
                <p class="text-indigo-100 text-xs mt-1">ยังไม่มีคอลัมน์คะแนน — ต้องการคัดลอกจากห้องที่มีอยู่แล้วไหม?</p>
              </div>
              <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
                ${l.map(d=>`
                <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">${d.class_name}</p>
                    <p class="text-xs text-gray-400">${d.cols.length} คอลัมน์</p>
                  </div>
                  <button class="grade-copy-cols flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
                    data-src="${d.id}">
                    คัดลอก
                  </button>
                </div>`).join("")}
              </div>
              <div class="px-5 pb-5">
                <button id="grade-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
              </div>
            </div>`,document.body.appendChild(x),x.querySelector("#grade-ssp-close").addEventListener("click",()=>x.remove()),x.querySelectorAll(".grade-copy-cols").forEach(d=>{d.addEventListener("click",async()=>{const E=l.find(q=>q.id===parseInt(d.dataset.src));d.disabled=!0,d.textContent="⏳";try{for(const q of E.cols)await Ie({class_id:r.id,assignment_name:q.assignment_name,assignment_type:q.assignment_type,sheet_column:q.sheet_column??"",max_score:q.max_score});y(`คัดลอก ${E.cols.length} คอลัมน์จาก ${E.class_name} ✅`,"success"),x.remove(),Ee(u,r)}catch(q){y("คัดลอกไม่สำเร็จ: "+le(q),"error"),d.disabled=!1,d.textContent="คัดลอก"}})})}catch{}},600);const ue=Z,ve=re,rt=(w==null?void 0:w.subject_group)??"",Ke=ss(r==null?void 0:r.skill_group),mt=["AGM","AGMVOC"].includes(rt);let Q=g,oe=[];Ke?oe=(await An(r.academic_year??ue,r.semester??ve,"สามัญ")).slice(0,3).map(n=>n.name):mt&&(de?oe=["คะแนนมาเรียน","คะแนนละหมาด"]:(oe=(await Rn(r.id,{semesterStart:A.semester_start,semesterEnd:A.semester_end,attendanceScoreMode:A.attendanceScoreMode??"recorded"})).columnNames??["คะแนนมาเรียน","คะแนนละหมาด"],Q=await kt(r.id)));try{if(!de){const e=await Fn(r.id,{attendanceScoreMode:A.attendanceScoreMode??"recorded"});e.columns>0&&(Q=await kt(r.id),e.skipped>0&&y(`ดึงคะแนนมาเรียนอัตโนมัติแล้ว (ข้าม ${e.skipped} รายการที่เคยแก้คะแนนด้วยมือ)`,"success"))}}catch(e){console.error("syncAutoAttendanceScoreColumns failed",e)}let Ne=[],Fe=[];try{Ne=await Gn(ue,ve),Fe=Ne.length?await On(Ne.map(e=>e.id),O.map(e=>e.id)):[],Ne.length?Fe.length||y(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนห้องนี้ ภาค ${ve}/${ue}`,"warning"):y(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ ภาค ${ve}/${ue}`,"warning")}catch(e){console.error("load reading evaluation failed",e),y(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${le(e)}`,"error")}const Ye={};for(const e of Fe)Ye[e.student_id]=(Ye[e.student_id]??0)+(parseFloat(e.score)||0);const ut={},Me=Ne.reduce((e,n)=>e+(parseFloat(n.max_score)||0),0);for(const[e,n]of Object.entries(Ye)){const l=Me>0?n/Me*100:0,x=os(l);ut[parseInt(e)]={score100:l,label:x.label,cls:x.cls}}let se=oe.length?await he(X):U;if(se.length===0){const e=(n,l)=>Ie({class_id:r.id,assignment_name:`คะแนนที่ ${l}`,max_score:20,assignment_type:n,sheet_column:""});for(let n=1;n<=5;n++)await e("midterm",n);for(let n=1;n<=5;n++)await e("final",n);se=await he(r.id)}se=Xn(se,oe);const xn=new Set(oe.length?se.filter(e=>oe.includes(e.assignment_name)).map(e=>e.id):[]),V=e=>{const n=typeof e=="object"?e==null?void 0:e.id:e;return xn.has(n)},Lt=e=>e.assignment_name==="คะแนนละหมาด"?`คะแนนระบบกลาง (แก้ไขไม่ได้)
คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา
หากคะแนนว่าง = ครูที่ปรึกษาศาสนายังไม่ได้บันทึกในสัปดาห์นั้น`:"คะแนนระบบกลาง: แก้ไขไม่ได้",ae=se.filter(Dt),qe=se.filter(e=>e.column_type==="derived"),xe=se.filter(e=>e.column_type==="override"),It=se.filter(Jn),vt=se.filter(e=>(e.column_type??"regular")==="regular"&&!Dt(e)),We=Object.fromEntries(se.map(e=>[e.id,e])),H=vt.filter(e=>e.assignment_type!=="final"&&e.assignment_type!=="ปลายภาค"),z=vt.filter(e=>e.assignment_type==="final"||e.assignment_type==="ปลายภาค"),Ge=Zn(ae),jt=`gradeToggles_${(u==null?void 0:u.id)??"guest"}_${r.id}`,Oe=(()=>{try{return JSON.parse(localStorage.getItem(jt)??"{}")}catch{return{}}})(),wt=()=>{try{localStorage.setItem(jt,JSON.stringify({columnRoundSettings:He,toggleForceGrade:Je,toggleKhuna:Ue,toggleRead:Ze,showBonusCols:ie,toggleScoreColors:ot}))}catch{}};let ie=Oe.showBonusCols??!1,Qe=!1;const G={};for(const e of Q)G[e.student_id]||(G[e.student_id]={}),G[e.student_id][e.score_column_id]={orig:e.original_score,retake:e.retake_score,final:e.final_score??e.original_score,history:e.score_history??[]};for(const e of O)e.special_result&&(G[e.id]||(G[e.id]={}),G[e.id].__force=e.special_result);const we=(e,n)=>{var l,x,d,E;return((x=(l=G[e])==null?void 0:l[n])==null?void 0:x.final)??((E=(d=G[e])==null?void 0:d[n])==null?void 0:E.orig)??null},pn=(e,n)=>{if(n.column_type==="derived")return!0;const l=we(e,n.id);return l!==null&&l!==""&&Number.isFinite(Number(l))},Nt=e=>It.length>0&&It.every(n=>pn(e,n)),xt=(e,n)=>{var l,x,d;return(((d=(x=(l=G[e])==null?void 0:l[n])==null?void 0:x.history)==null?void 0:d.length)??0)>1},Es=(e,n)=>n.reduce((l,x)=>l+(parseFloat(we(e,x.id))||0),0),Xe=e=>e.reduce((n,l)=>n+(parseFloat(l.max_score)||0),0),bn=(e,n)=>{const l=parseFloat(we(e,n.id))||0;if(!n.bonus_formula)return l;const x=Object.fromEntries(Ge.map(E=>[E.var,parseFloat(we(e,E.id))||0])),d=ht(n.bonus_formula,x)??0;return n.max_score?Math.min(l+d,n.max_score):l+d},Mt=(e,n)=>n.reduce((l,x)=>l+bn(e,x),0),Bt=(e,n)=>{if(!e.formula)return 0;const l={};for(const x of e.formula_refs??[])l[x.var]=parseFloat(we(n,x.col_id))||0;return ht(e.formula,l)??0};let $t=!1;const gn=await Hn(r.id).catch(()=>($t=!0,null));let He=en(gn??Oe.columnRoundSettings??{total:Oe.toggleRound??!0}),ze=He.forcedGradeColor==="black"?"black":"red";const pt=e=>!!He[e],Pe=(e,n)=>{if(n===""||n==null)return n??"";if(!pt(e))return n;const l=parseFloat(n);return Number.isFinite(l)?Math.round(l):n},ge=(e,n,l=1)=>pt(e)?Math.round(n):Number(n.toFixed(l));let Je=Oe.toggleForceGrade??!1,Ue=Oe.toggleKhuna??!0,Ze=Oe.toggleRead??!0,ot=Oe.toggleScoreColors??!1;const fn=["0","ร","มส","มผ"],yn=A.forceGradeOptions?String(A.forceGradeOptions).split(",").map(e=>e.trim()).filter(Boolean):fn,at=(e,n)=>{if(!ot||n===""||n==null||!Number.isFinite(Number(n))||!(Number(e.max_score)>0))return"";const l=Math.max(0,Math.min(1,Number(n)/Number(e.max_score))),x=Math.round(l*120);return`background-color:hsl(${x} 72% 88%);color:hsl(${x} 55% 24%);`},hn=(e,n,l)=>{const x=e==null?void 0:e.closest("td");x&&(x.style.cssText=`width:${x.offsetWidth||K}px;min-width:${K}px;height:30px;${at(n,l)}`)},Le=e=>{const n=Xe(H),l=Xe(z),x=qe.reduce((p,o)=>p+(parseFloat(o.max_score)||0),0),d=Mt(e,H),E=Mt(e,z),q=qe.reduce((p,o)=>p+(Bt(o,e)||0),0),$=n+l+x,t=d+E+q,s=ge("total",t,1),h=Dn(He,t),v=$>0?h/$*100:0,j=fs(v),a=ys(j);return{midRaw:d,finRaw:E,pct:v,total:s,grade:j,khuna:a}},Tt=()=>{const e=[];return{records:O.map(l=>{var t;const{pct:x,grade:d}=Le(l.id),E=((t=G[l.id])==null?void 0:t.__force)||"",q=String(E).trim(),$=q!==""&&Number.isFinite(Number(q));return!Nt(l.id)&&(!q||$)?(e.push(l),null):{studentCode:l.student_code,studentName:l.full_name,total:q&&!$?"":Math.round(x*10)/10,grade:E||(d>0?String(d):"0")}}).filter(Boolean),incomplete:e}},At="sticky left-0 z-20 bg-white border border-gray-200",bt="sticky z-20 bg-white border border-gray-200",D="border border-gray-200 text-center text-xs",Rt=160,K=76,De=(e,n,l,x="bg-emerald-500 text-white shadow-sm",d="bg-gray-100 text-gray-500 hover:bg-gray-200")=>`<button class="grade-toggle text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all select-none whitespace-nowrap ${l?x:d}"
        data-toggle="${e}">${n}</button>`,vn=(e,n)=>{if(V(n)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}const l=[...H,...z].find(o=>o.id===n),x=(l==null?void 0:l.assignment_type)==="final",d=zn((l==null?void 0:l.assignment_name)||""),E=d==="กลางภาค"||d==="ปลายภาค"||d==="สอบปรับ";let q;E&&x?q=_:E&&!x?q=c:q=k.cols.length>0?k:x?_:c;const $=q.cols,t=q.isFixed;if(document.querySelectorAll(".sheet-col-popup").forEach(o=>o.remove()),t&&$.length===1){const o=$[0];if(e.textContent.trim()!==o){Ae(n,{sheet_column:o}).catch(()=>{}),e.textContent=o;const i=[...H,...z].find(b=>b.id===n);i&&(i.sheet_column=o)}return}const s=e.getBoundingClientRect(),h=e.textContent.trim(),v=document.createElement("div");v.className="sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",v.style.cssText=`top:${s.bottom+4}px;left:${Math.max(4,s.left-20)}px;min-width:${$.length>0?220:180}px`;const j=(l==null?void 0:l.assignment_name)||(x?"ปลายภาค":"กลางภาค");v.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${j}</span>
          ${t?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':""}</p>
        ${$.length>0?`
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${$.map(o=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${o===h?"border-blue-500 bg-blue-50 text-blue-700 font-bold":"border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"}"
            data-val="${o}" >${o}</button>`).join("")}
        </div>`:""}
        ${t?`<input id="scp-inp" type="hidden" value="${$[0]||h}"/>`:`<input id="scp-inp" type="text" value="${h==="—"?"":h}" placeholder="${$.length>0?"หรือพิมพ์เอง...":"เช่น EK"}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(v);const a=v.querySelector("#scp-inp");a.focus(),a.select(),a.addEventListener("input",o=>{o.target.value=o.target.value.toUpperCase()}),v.querySelectorAll(".scp-opt").forEach(o=>{o.addEventListener("click",()=>{a.value=o.dataset.val,v.querySelectorAll(".scp-opt").forEach(i=>{i.className=i.className.replace("border-blue-500 bg-blue-50 text-blue-700 font-bold","border-gray-200 text-gray-600")}),o.className=o.className.replace("border-gray-200 text-gray-600","border-blue-500 bg-blue-50 text-blue-700 font-bold")})});const p=async()=>{const o=a.value.trim().toUpperCase()||null;try{await Ae(n,{sheet_column:o}),e.textContent=o||"—";const i=[...H,...z].find(b=>b.id===n);i&&(i.sheet_column=o),v.remove()}catch{y("บันทึกไม่สำเร็จ","error")}};a.addEventListener("keydown",o=>{o.key==="Enter"&&p()}),v.querySelector("#scp-save").addEventListener("click",p),v.querySelector("#scp-cancel").addEventListener("click",()=>v.remove()),setTimeout(()=>{const o=i=>{!v.contains(i.target)&&i.target!==e&&(v.remove(),document.removeEventListener("click",o))};document.addEventListener("click",o)},100)},wn=(e,n)=>{if(V(n)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}document.querySelectorAll(".max-score-popup").forEach($=>$.remove());const l=[...H,...z].find($=>$.id===n),x=e.getBoundingClientRect(),d=document.createElement("div");d.className="max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",d.style.cssText=`top:${x.bottom+4}px;left:${Math.max(4,x.left-20)}px;min-width:160px`,d.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${(l==null?void 0:l.max_score)||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(d);const E=d.querySelector("#msp-inp");E.focus(),E.select();const q=async()=>{const $=Math.max(1,parseFloat(E.value)||1);try{await Ae(n,{max_score:$}),l&&(l.max_score=$),d.remove(),fe()}catch{y("บันทึกไม่สำเร็จ","error")}};E.addEventListener("keydown",$=>{$.key==="Enter"&&q()}),d.querySelector("#msp-save").addEventListener("click",q),d.querySelector("#msp-cancel").addEventListener("click",()=>d.remove()),setTimeout(()=>{const $=t=>{!d.contains(t.target)&&t.target!==e&&(d.remove(),document.removeEventListener("click",$))};document.addEventListener("click",$)},100)},$n=(e,n,l)=>{var j;(j=document.getElementById("sg-detail-modal"))==null||j.remove();const{midRaw:x,finRaw:d,total:E,grade:q,khuna:$}=l,t=Xe(H),s=Xe(z),h=a=>{var i,b;const p=((i=n[a.id])==null?void 0:i.final)??((b=n[a.id])==null?void 0:b.orig)??null,o=p!=null&&a.max_score>0?(p/a.max_score*100).toFixed(0):"—";return`<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${a.assignment_name||"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${p??"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${a.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${o}%</td>
        </tr>`},v=document.createElement("div");v.id="sg-detail-modal",v.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",v.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${e.image_url?`<img src="${e.image_url}" class="w-9 h-11 rounded-lg object-cover border border-gray-200 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${e.full_name}</p>
            <p class="text-xs text-gray-400">${e.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${q>0?q.toFixed(1):"0"}</p>
            <p class="text-xs font-medium ${$.cls}">${$.label}</p>
          </div>
          <button id="sg-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-4 space-y-4">
          ${H.length>0?`<div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-blue-100">
              <thead><tr class="bg-blue-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${H.map(h).join("")}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${ge("mid_subtotal",x,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${t}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${t>0?(x/t*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          ${z.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${z.map(h).join("")}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${ge("fin_subtotal",d,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${s}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${s>0?(d/s*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${E>0?E:"—"}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${q>0?q.toFixed(1):"0"}
              <span class="text-sm font-semibold ${$.cls}"> — ${$.label}</span></p>
          </div>
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#sg-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",a=>{a.target===v&&v.remove()})};let gt="",lt="all",et="all",Be=!1,Ve=null;const Ft=e=>{var x;const n=gt.trim().toLowerCase();if(n&&!`${e.student_code??""} ${e.full_name??""}`.toLowerCase().includes(n))return!1;const l=Nt(e.id);if(lt==="incomplete"&&l||lt==="complete"&&!l)return!1;if(et!=="all"){const d=String(((x=G[e.id])==null?void 0:x.__force)??"").trim(),{grade:E}=Le(e.id);if(et==="flagged"&&!d&&!(l&&E===0)||et==="special"&&!d)return!1}return!0},_n=()=>{const e=!!gt.trim()||lt!=="all"||et!=="all",n=document.getElementById("grade-filter-badge"),l=document.getElementById("btn-grade-filter");n&&n.classList.toggle("hidden",!e),l&&(l.classList.toggle("bg-indigo-50",e),l.classList.toggle("border-indigo-300",e),l.classList.toggle("text-indigo-700",e));const x=document.getElementById("grade-filter-summary");if(x){const d=O.filter(Ft).length;x.textContent=e?`แสดง ${d} จาก ${O.length} คน`:`ทั้งหมด ${O.length} คน`}},Te=()=>{const e=document.getElementById("grade-grid-wrap");e&&(e.querySelectorAll("tr[data-sid]").forEach(n=>{const l=O.find(x=>Number(x.id)===Number(n.dataset.sid));n.style.display=l&&Ft(l)?"":"none"}),_n())},ft=()=>{const e=document.getElementById("grade-grid-wrap");e&&(Ve=[],e.querySelectorAll(".grade-input").forEach(n=>{Ve.push({el:n,type:"input",val:n.value}),n.value=""}),e.querySelectorAll('[id^="gmid-"],[id^="gfin-"],[id^="gtotal-"],[id^="ggrade-"],[id^="gkhuna-"],[id^="gread-"],.grade-derived-td').forEach(n=>{Ve.push({el:n,type:"text",val:n.innerHTML}),n.innerHTML="—"}),window._pp5HideScores=!0)},kn=()=>{window._pp5HideScores=!1,Ve==null||Ve.forEach(({el:e,type:n,val:l})=>{n==="input"?e.value=l:e.innerHTML=l}),Ve=null},dt=()=>{var n,l,x,d,E,q,$;const e=document.getElementById("grade-togglebar");e&&(e.innerHTML=`
        <div class="relative flex w-full items-center justify-between gap-3 px-4 py-2 bg-white">
          <div class="min-w-0">
            <p class="text-[11px] font-semibold text-gray-500">มุมมองและคำสั่งเพิ่มเติม</p>
            <p class="text-[10px] text-gray-400 hidden sm:block">คำสั่งเหล่านี้เปลี่ยนการแสดงผลหรือส่งออกข้อมูลเท่านั้น</p>
          </div>
          <button id="btn-grade-more" type="button"
            class="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition">
            ⚙️ ตัวเลือกเพิ่มเติม <span class="text-[10px]">▾</span>
          </button>
          <div id="grade-more-menu" class="hidden absolute right-4 top-[calc(100%-1px)] z-[70] w-[min(92vw,470px)] max-h-[min(70vh,520px)] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
            <div class="mb-3">
              <p class="px-1 mb-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">การแสดงผล</p>
              <div class="flex flex-wrap gap-1.5">
                <button id="btn-hide-scores" type="button" class="text-[11px] px-3 py-1.5 rounded-lg font-semibold transition ${Be?"bg-amber-50 text-amber-700 border border-amber-300":"bg-gray-100 text-gray-500 hover:bg-gray-200"}">
                  👁 ${Be?"แสดงคะแนน":"ซ่อนคะแนน"}
                </button>
                <button id="btn-round-settings" type="button" class="text-[11px] px-3 py-1.5 rounded-lg font-semibold transition bg-gray-100 text-gray-500 hover:bg-gray-200">🔢 ปัดเลข</button>
                ${De("khuna","คุณลักษณะ",Ue)}
                ${De("read","การอ่าน",Ze)}
                ${De("scoreColors","🎨 จัดสีช่องคะแนน",ot,"bg-emerald-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
                ${De("forceGrade","บังคับเกรด",Je,"bg-rose-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
                ${De("bonus","⭐ คะแนนเก็บ/พิเศษ",ie,"bg-amber-500 text-white shadow-sm","bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100")}
                ${ie&&ae.length?De("formula-link","🔗 เชื่อมสูตร",Qe,"bg-violet-500 text-white shadow-sm","bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100"):""}
              </div>
            </div>
            <div class="border-t border-gray-100 pt-3">
              <p class="px-1 mb-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">ส่งออกและส่งต่อ</p>
              <div class="flex flex-wrap gap-1.5">
                <button id="btn-export-gradeonline-excel" type="button" class="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-teal-600 text-white shadow-sm hover:bg-teal-700 transition">📥 ดาวน์โหลด Excel GradeOnline</button>
                ${be?`
                <button id="btn-export-gradeonline" type="button" class="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-purple-600 text-white shadow-sm hover:bg-purple-700 transition">📤 ส่งคะแนนเข้า GradeOnline</button>
                <button id="btn-submit-regrade" type="button" class="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-pink-600 text-white shadow-sm hover:bg-pink-700 transition" title="ส่งรายชื่อนักเรียนที่ติด 0 หรือผลพิเศษเข้าระบบแก้ค้างเก่า">📤 ส่งแก้ค้างเก่า</button>`:""}
              </div>
            </div>
          </div>
        </div>`,(n=document.getElementById("btn-grade-more"))==null||n.addEventListener("click",t=>{var s;t.stopPropagation(),(s=document.getElementById("grade-more-menu"))==null||s.classList.toggle("hidden")}),(l=document.getElementById("grade-more-menu"))==null||l.addEventListener("click",t=>t.stopPropagation()),(x=document.getElementById("btn-hide-scores"))==null||x.addEventListener("click",function(){Be=!Be,document.getElementById("grade-grid-wrap")&&(Be?ft():kn(),dt())}),(d=document.getElementById("btn-submit-regrade"))==null||d.addEventListener("click",async()=>{const t=document.getElementById("btn-submit-regrade"),s=O.map(h=>{var p;const{grade:v}=Le(h.id),a=(((p=G[h.id])==null?void 0:p.__force)??"")||(v===0?"0":"");return a?{student_id:h.id,grade_failed_at:a}:null}).filter(Boolean);if(!s.length){y("ไม่มีนักเรียนติดในห้องนี้ตอนนี้","info");return}if(confirm(`พบนักเรียนติด ${s.length} คนในห้องนี้ ยืนยันส่งเข้าระบบแก้ค้างเก่าเลยไหม? (รายชื่อที่เคยส่งไปแล้วจะไม่ถูกส่งซ้ำ)`)){t.disabled=!0,t.textContent="กำลังส่ง...";try{const h=await ns(r.id,s);y(`ส่งสำเร็จ ✅ พบติด ${h.total_failing} คน — เพิ่มเข้าระบบใหม่ ${h.submitted} คน (ที่เหลือมีอยู่แล้ว)`,"success")}catch(h){y("ส่งไม่สำเร็จ: "+le(h),"error")}finally{t.disabled=!1,t.textContent="📤 ส่งแก้ค้างเก่า"}}}),(E=document.getElementById("btn-export-gradeonline-excel"))==null||E.addEventListener("click",()=>{const t=document.getElementById("btn-export-gradeonline-excel"),{records:s,incomplete:h}=Tt();if(h.length){const v=h.slice(0,3).map(j=>j.full_name).join(", ");y(`ยังมีนักเรียนกรอกคะแนนไม่ครบ ${h.length} คน${v?` เช่น ${v}`:""} — กรุณากรอกให้ครบก่อนส่งออก`,"error");return}if(!s.length){y("ยังไม่มีข้อมูลคะแนนที่พร้อมส่งออก","error");return}t.disabled=!0;try{gs({subjectName:w==null?void 0:w.subject_name,className:r.class_name,records:s}),y(`ดาวน์โหลดไฟล์ Excel แล้ว ${s.length} คน — นำเข้าใน GradeOnline ได้เลย`,"success")}finally{t.disabled=!1}}),(q=document.getElementById("btn-export-gradeonline"))==null||q.addEventListener("click",async()=>{const t=document.getElementById("btn-export-gradeonline"),s=(window._pp5DonorTierIndex??0)>=2,h=hs(u==null?void 0:u.id,r.class_name,s);if(!h.allowed){ws(h.claimedRoom,r.class_name);return}const{records:v,incomplete:j}=Tt();if(j.length){const a=j.slice(0,3).map(p=>p.full_name).join(", ");y(`ยังมีนักเรียนกรอกคะแนนไม่ครบ ${j.length} คน${a?` เช่น ${a}`:""} — กรุณากรอกให้ครบก่อนส่งเข้า GradeOnline`,"error");return}if(!v.length){y("ยังไม่มีข้อมูลคะแนนที่พร้อมส่งเข้า GradeOnline","error");return}if(confirm(`เตรียมส่งคะแนนรวม(เต็ม 100)+เกรดของนักเรียน ${v.length} คนในห้องนี้ไปรอที่ GradeOnline ยืนยันไหม?`)){t.disabled=!0,t.textContent="กำลังเตรียมข้อมูล...";try{const a=await Pn(r.id,u==null?void 0:u.id,w==null?void 0:w.subject_name,r.class_name,v);!s&&!h.claimedRoom&&vs(u==null?void 0:u.id,r.class_name),$s(a,v.length)}catch(a){y("เตรียมข้อมูลไม่สำเร็จ: "+le(a),"error")}finally{t.disabled=!1,t.textContent="📤 ส่งคะแนนเข้า GradeOnline"}}}),($=document.getElementById("btn-round-settings"))==null||$.addEventListener("click",Gt),e.querySelectorAll(".grade-toggle").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.toggle;s==="forceGrade"&&(Je=!Je),s==="khuna"&&(Ue=!Ue),s==="read"&&(Ze=!Ze),s==="scoreColors"&&(ot=!ot),s==="bonus"&&(ie=!ie,ie||(Qe=!1),ie&&ae.length===0&&y('ยังไม่มีคอลัมน์พิเศษ — กด "จัดการคอลัมน์" เพื่อเพิ่ม',"info")),s==="formula-link"&&(Qe=!Qe),wt(),dt(),fe(),Te(),Be&&ft()})}))},Gt=()=>{var x;(x=document.getElementById("round-settings-popup"))==null||x.remove();const e=document.createElement("div");e.id="round-settings-popup",e.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const n=(d,E,q)=>`
        <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-50 last:border-0">
          <span class="text-xs text-gray-700 truncate">${J(E??"")}${q!=null?` <span class="text-gray-400">(เต็ม ${q})</span>`:""}</span>
          <button type="button" class="round-set-toggle flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${pt(d)?"bg-emerald-500 text-white":"bg-gray-100 text-gray-500"}"
            data-key="${d}">${pt(d)?"จำนวนเต็ม":"ทศนิยม"}</button>
        </div>`;e.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 flex-shrink-0">
            <h3 class="font-bold text-gray-800 text-sm">🔢 ตั้งค่าการปัดเลขคะแนน</h3>
            <p class="text-[11px] text-gray-500 mt-0.5">คะแนนรายช่องยังเก็บตามจริง ส่วนคะแนนรวมที่เลือกปัดจะใช้คำนวณเกรดด้วย กดบันทึกใช้ร่วมกันเพื่อใช้ในหน้าครู นักเรียน และ ปพ.5</p>
            ${$t?'<p class="text-xs text-red-600 mt-1">ยังโหลดค่าร่วมไม่ได้ กรุณาตรวจการติดตั้ง SQL และการเชื่อมต่อ</p>':""}
          </div>
          <div class="overflow-y-auto flex-1 px-4 py-2">
            <p class="text-[11px] font-bold text-amber-600 uppercase tracking-wide mt-2 mb-1">ผลรวม</p>
            <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-100">
              <span class="text-xs text-gray-700">สีเกรดบังคับในเอกสาร ปพ.5</span>
              <button type="button" id="forced-grade-color-toggle" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${ze==="red"?"bg-red-500 text-white":"bg-gray-900 text-white"}">${ze==="red"?"สีแดง":"สีดำ"}</button>
            </div>
            ${n("mid_subtotal","รวมกลางภาค")}
            ${n("fin_subtotal","รวมปลายภาค")}
            ${n("total","คะแนนรวมทั้งหมด")}
            ${H.length?`<p class="text-[11px] font-bold text-blue-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์กลางภาค</p>${H.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${z.length?`<p class="text-[11px] font-bold text-purple-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์ปลายภาค</p>${z.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${xe.length?`<p class="text-[11px] font-bold text-teal-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์อื่นๆ</p>${xe.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${qe.length?`<p class="text-[11px] font-bold text-indigo-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์คำนวณสูตร</p>${qe.map(d=>n(`derived_${d.id}`,d.assignment_name,d.max_score)).join("")}`:""}
            ${ie&&ae.length?`<p class="text-[11px] font-bold text-amber-500 uppercase tracking-wide mt-3 mb-1">คะแนนเก็บ/พิเศษ</p>${ae.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
          </div>
          <div class="px-4 py-3 border-t border-gray-100 flex-shrink-0">
            <button id="round-settings-save" class="w-full mb-2 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold">บันทึกใช้ร่วมกัน</button>
            <button id="round-settings-close" class="w-full py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">ปิด</button>
          </div>
        </div>`,document.body.appendChild(e);const l=()=>e.remove();e.querySelector("#round-settings-save").addEventListener("click",async d=>{const E=d.currentTarget;E.disabled=!0,E.textContent="กำลังบันทึก…",e.querySelectorAll(".round-set-toggle").forEach(q=>{q.disabled=!0});try{await Un(r.id,{...en(He),forcedGradeColor:ze}),$t=!1,wt(),y("บันทึกค่าปัดเลขร่วมสำหรับครู นักเรียน และ ปพ.5 แล้ว","success"),l()}catch(q){y("บันทึกค่าร่วมไม่สำเร็จ กรุณาตรวจการติดตั้ง SQL: "+le(q),"error"),E.disabled=!1,E.textContent="บันทึกใช้ร่วมกัน",e.querySelectorAll(".round-set-toggle").forEach($=>{$.disabled=!1})}}),e.querySelector("#round-settings-close").addEventListener("click",l),e.querySelector("#forced-grade-color-toggle").addEventListener("click",d=>{ze=ze==="red"?"black":"red",d.currentTarget.className=`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${ze==="red"?"bg-red-500 text-white":"bg-gray-900 text-white"}`,d.currentTarget.textContent=ze==="red"?"สีแดง":"สีดำ"}),e.addEventListener("click",d=>{d.target===e&&l()}),e.querySelectorAll(".round-set-toggle").forEach(d=>{d.addEventListener("click",()=>{const E=d.dataset.key;He[E]=!He[E],wt(),fe(),Gt()})})},En=e=>{var x,d,E;(x=document.getElementById("formula-link-popup"))==null||x.remove();const n=document.createElement("div");n.id="formula-link-popup",n.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const l=Ge.length?Ge.map(q=>`<span class="font-mono font-bold text-violet-700">${q.var}</span> = "${q.assignment_name}"`).join("  |  "):'<span class="text-gray-400">ยังไม่มีคอลัมน์พิเศษ</span>';n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-gradient-to-br from-violet-500 to-purple-600 px-5 py-4">
            <h3 class="text-white font-bold text-sm">🔗 เชื่อมสูตรจากคะแนนพิเศษ</h3>
            <p class="text-violet-100 text-xs mt-0.5">คอลัมน์: <span class="font-semibold">${J(e.assignment_name)}</span> (เต็ม ${e.max_score??"?"})</p>
            <p class="text-violet-200 text-[10px] mt-1">สูตรจะบวกเพิ่มเข้าคะแนนที่กรอก ไม่เกินคะแนนเต็ม</p>
          </div>
          <div class="p-4 space-y-3">
            <div class="bg-violet-50 rounded-xl p-3 text-xs text-violet-800">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้:</p>
              <p id="flp-vars">${l}</p>
              <p class="mt-1 text-violet-500">ฟังก์ชัน: MIN, MAX, IF, ROUND, SUM, AVG, CLAMP</p>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">สูตร <span class="text-red-400">*</span></label>
              <div class="flex gap-2">
                <input id="flp-formula" type="text" value="${J(e.bonus_formula??"")}"
                  placeholder="เช่น MIN(A,5)  หรือ  A*0.5+B"
                  class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm font-mono focus:outline-none focus:border-violet-400"/>
                <button id="flp-test" class="px-3 py-2 rounded-xl bg-violet-100 text-violet-700 text-xs font-medium hover:bg-violet-200 whitespace-nowrap">ทดสอบ</button>
              </div>
              <p id="flp-result" class="text-xs mt-1 hidden"></p>
            </div>
            <div class="flex gap-2">
              ${e.bonus_formula?'<button id="flp-clear" class="flex-1 py-2.5 rounded-xl border border-red-200 text-red-500 text-xs hover:bg-red-50 transition">ลบสูตร</button>':""}
              <button id="flp-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="flp-save" class="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition">บันทึก</button>
            </div>
          </div>
        </div>`,document.body.appendChild(n),n.querySelector("#flp-cancel").addEventListener("click",()=>n.remove()),(d=n.querySelector("#flp-test"))==null||d.addEventListener("click",()=>{const q=n.querySelector("#flp-formula").value.trim(),$=n.querySelector("#flp-result");if(!q){$.classList.add("hidden");return}const t=Object.fromEntries(Ge.map(h=>[h.var,5])),s=ht(q,t);if($.classList.remove("hidden"),s===null)$.className="text-xs mt-1 text-red-500",$.textContent="⚠️ สูตรไม่ถูกต้อง";else{$.className="text-xs mt-1 text-emerald-600";const h=Ge.map(j=>`${j.var}=5`).join(", "),v=e.max_score?Math.min(0+s,e.max_score):s;$.textContent=`✅ ตัวอย่าง (${h||"ไม่มี"}) → bonus=${s} → คะแนนจริง MIN(0+${s},${e.max_score??"∞"}) = ${v}`}}),(E=n.querySelector("#flp-clear"))==null||E.addEventListener("click",async()=>{try{await Ae(e.id,{bonus_formula:null,bonus_formula_refs:[]}),e.bonus_formula=null,e.bonus_formula_refs=[],y("ลบสูตรแล้ว ✅","success"),n.remove(),dt(),fe(),Te(),Be&&ft()}catch{y("บันทึกไม่สำเร็จ","error")}}),n.querySelector("#flp-save").addEventListener("click",async()=>{const q=n.querySelector("#flp-formula").value.trim();if(!q){y("กรุณากรอกสูตร","warning");return}if(ht(q,Object.fromEntries(Ge.map(s=>[s.var,5])))===null){y("สูตรไม่ถูกต้อง","warning");return}const $=Ge.map(s=>({var:s.var,col_id:s.id})),t=n.querySelector("#flp-save");t.disabled=!0,t.textContent="⏳";try{await Ae(e.id,{bonus_formula:q,bonus_formula_refs:$}),e.bonus_formula=q,e.bonus_formula_refs=$,y("บันทึกสูตรแล้ว ✅","success"),n.remove(),dt(),fe(),Te(),Be&&ft()}catch{y("บันทึกไม่สำเร็จ","error"),t.disabled=!1,t.textContent="บันทึก"}})},Ot=(()=>{var l;const e={};for(const x of se)V(x)&&(e[l=x.assignment_name]??(e[l]=[])).push(x);const n=new Set;for(const x of Object.values(e))if(!(x.length<=1)){x.sort((d,E)=>d.id-E.id);for(const d of x.slice(1))n.add(d.id)}return n})(),Sn=()=>{var s,h,v,j;(s=document.getElementById("manage-cols-modal"))==null||s.remove();const e=document.createElement("div");e.id="manage-cols-modal",e.className="fixed inset-0 z-[600] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4";const n=(a,p=[])=>{const o=V(a),i=o&&Ot.has(a.id),b=o&&!i,m=p.findIndex(N=>N.id===a.id),L=!o&&m>0&&!V(p[m-1]),M=!o&&m>=0&&m<p.length-1;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${b?"border-emerald-100 bg-emerald-50/70":i?"border-amber-200 bg-amber-50/70":"border-gray-100 hover:border-gray-200 bg-gray-50/60"}">
          ${b?'<span class="w-4 text-emerald-500 text-xs flex-shrink-0">🔒</span>':i?`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-amber-500 flex-shrink-0" data-colid="${a.id}" title="คอลัมน์ซ้ำ (ระบบสร้างผิดพลาด)" />`:`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-colid="${a.id}" />`}
          <div class="flex flex-col gap-0.5 flex-shrink-0">
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${L?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${a.id}" data-dir="up" ${L?"":"disabled"}>▲</button>
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${M?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${a.id}" data-dir="down" ${M?"":"disabled"}>▼</button>
          </div>
          <span class="flex-1 text-xs text-gray-700 truncate">${a.assignment_name||"—"}${i?' <span class="text-amber-600 font-semibold">(ซ้ำ)</span>':""}</span>
          <span class="text-[11px] text-gray-400">/${a.max_score||0}</span>
          ${o?"":`
          <button class="mcm-sync-toggle text-[10px] font-semibold px-1.5 py-0.5 rounded-lg flex-shrink-0 ${a.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-300 hover:bg-gray-100 hover:text-gray-500"}"
            data-colid="${a.id}"
            title="${a.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}">🔄</button>`}
          ${b?'<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>':`<button class="mcm-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${a.id}" title="ลบคอลัมน์${i?"ซ้ำ":""}">🗑</button>`}
        </div>`},l=a=>`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-100 bg-amber-50/40">
          <input type="text" class="mcm-bonus-name flex-1 text-xs text-amber-800 bg-transparent border-b border-transparent focus:border-amber-300 focus:outline-none px-0.5 min-w-0"
            value="${(a.assignment_name||"").replace(/"/g,"&quot;")}" data-bonusid="${a.id}" />
          <span class="text-[11px] text-amber-400 flex-shrink-0">${a.max_score?"/"+a.max_score:"∞"}</span>
          <button class="mcm-bonus-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${a.id}" title="ลบคอลัมน์">🗑</button>
        </div>`,x=a=>{var p,o;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-teal-100 bg-teal-50/40">
          <span class="flex-1 text-xs text-teal-800 truncate">${J(a.assignment_name||"—")}</span>
          <span class="text-[10px] text-teal-500 flex-shrink-0 truncate max-w-[90px]" title="เชื่อมกับ: ${J(((p=We[a.link_column_id])==null?void 0:p.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗 ${J(((o=We[a.link_column_id])==null?void 0:o.assignment_name)??"—")}</span>
          <button class="mcm-override-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${a.id}" title="ลบคอลัมน์">🗑</button>
        </div>`};e.innerHTML=`<div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[80vh] flex flex-col">
        <div class="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ จัดการคอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">ลบหรือเพิ่มคอลัมน์คะแนน</p>
          </div>
          <button id="mcm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-5 space-y-4">
          ${H.length<5||z.length<5?`
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-center gap-3">
            <span class="text-xl">✨</span>
            <div class="flex-1">
              <p class="text-xs font-medium text-indigo-800">เติมคอลัมน์เริ่มต้นครบ 5+5</p>
              <p class="text-[11px] text-indigo-400">สร้างคอลัมน์เปล่าจนครบกลางภาค 5 + ปลายภาค 5</p>
            </div>
            <button id="mcm-fill-default" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition flex-shrink-0">เติมให้ครบ</button>
          </div>`:""}
          <!-- bulk bar -->
          <div id="mcm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="mcm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="mcm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-blue-700 text-sm">📘 กลางภาค <span class="font-normal text-gray-400">(${H.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${H.map(a=>n(a,H)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${z.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${z.map(a=>n(a,z)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-600 text-sm">⭐ คะแนนพิเศษ (Bonus) <span class="font-normal text-gray-400">(${ae.length} คอลัมน์)</span></h4>
            </div>
            <div id="mcm-bonus-list" class="space-y-1.5">${ae.map(l).join("")}</div>
            <button id="mcm-add-bonus" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-amber-200 text-amber-500 hover:border-amber-400 hover:bg-amber-50 text-sm transition-colors">＋ เพิ่มคอลัมน์พิเศษ</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-teal-700 text-sm">🔄 ปรับคะแนน <span class="font-normal text-gray-400">(${xe.length} คอลัมน์)</span></h4>
            </div>
            <p class="text-[11px] text-gray-400 mb-1.5">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</p>
            <div id="mcm-override-list" class="space-y-1.5">${xe.map(x).join("")}</div>
            <button id="mcm-add-override" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-teal-200 text-teal-600 hover:border-teal-400 hover:bg-teal-50 text-sm transition-colors">＋ เพิ่มคอลัมน์ปรับคะแนน</button>
          </div>
        </div>
      </div>`,document.body.appendChild(e),e.querySelector("#mcm-close").addEventListener("click",()=>e.remove());const d=(a,p)=>{var i;(i=document.getElementById("mcm-del-confirm"))==null||i.remove();const o=document.createElement("div");o.id="mcm-del-confirm",o.className="fixed inset-0 z-[700] flex items-center justify-center p-6",o.style.background="rgba(0,0,0,0.5)",o.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">🗑️</div>
            <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">${a}</p>
            <div class="flex gap-3">
              <button id="mcm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="mcm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition">ลบเลย</button>
            </div>
          </div>`,document.body.appendChild(o),o.querySelector("#mcm-conf-no").addEventListener("click",()=>o.remove()),o.querySelector("#mcm-conf-yes").addEventListener("click",()=>{o.remove(),p()})},E=()=>{e.querySelectorAll(".mcm-col-list").forEach((a,p)=>{const o=p===0?H:z;a.innerHTML=o.map(i=>n(i,o)).join("")}),q()},q=()=>{var p;e.querySelectorAll(".mcm-move").forEach(o=>{o.addEventListener("click",async()=>{if(o.disabled)return;const i=parseInt(o.dataset.colid),b=o.dataset.dir,m=H.findIndex(ce=>ce.id===i)!==-1?H:z,L=m.findIndex(ce=>ce.id===i),M=b==="up"?L-1:L+1;if(M<0||M>=m.length||V(m[M]))return;const N=m[L],P=m[M];m[L]=P,m[M]=N;const me=N.sort_order??(L+1)*10,ne=P.sort_order??(M+1)*10;N.sort_order=ne,P.sort_order=me,await Vn([{id:N.id,sort_order:ne},{id:P.id,sort_order:me}]),fe(),E()})}),e.querySelectorAll(".mcm-sync-toggle").forEach(o=>{o.addEventListener("click",()=>{const i=parseInt(o.dataset.colid),b=[...H,...z].find(M=>M.id===i);if(!b)return;const m=!b.auto_attendance_sync,L=async()=>{try{await Kn(i,m),b.auto_attendance_sync=m,y(m?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้านี้ ✅":"ปิดใช้งานแล้ว","success"),E()}catch{y("บันทึกไม่สำเร็จ","error")}};m?d(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${b.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้าบันทึกคะแนน — คนที่เคยแก้คะแนนด้วยมือไว้ก่อนจะไม่ถูกทับ</span>`,L):L()})}),e.querySelectorAll(".mcm-del").forEach(o=>{o.addEventListener("click",()=>{const i=parseInt(o.dataset.colid),b=[...H,...z].find(L=>L.id===i),m=Ot.has(i);if(V(i)&&!m){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้","warning");return}d(m?`คอลัมน์นี้เป็น <span class="font-semibold">คอลัมน์ซ้ำ</span> ของ "${(b==null?void 0:b.assignment_name)||""}" (เกิดจากระบบสร้างคอลัมน์ซ้ำผิดพลาด)<br/><span class="text-xs text-gray-500">คะแนนของคอลัมน์นี้เป็นค่าที่ระบบเติมอัตโนมัติ ลบได้อย่างปลอดภัย — ระบบจะเติมคะแนนกลับให้ถูกต้องในคอลัมน์ที่เหลือของรอบถัดไป</span>`:`ต้องการลบ <span class="font-semibold">"${(b==null?void 0:b.assignment_name)||"คอลัมน์นี้"}"</span> ใช่ไหม?<br/><span class="text-xs text-red-500">คะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย</span>`,async()=>{var L,M;try{await st(i);const N=H.findIndex(ne=>ne.id===i),P=z.findIndex(ne=>ne.id===i);N!==-1&&H.splice(N,1),P!==-1&&z.splice(P,1),y("ลบคอลัมน์แล้ว ✅","success"),fe();const me=e.querySelector(".overflow-auto");me&&((M=(L=me.querySelector(".space-y-1\\.5"))==null?void 0:L.remove)==null||M.call(L),e.querySelectorAll(".mcm-col-list").forEach((ne,ce)=>{const $e=ce===0?H:z;ne.innerHTML=$e.map(_e=>n(_e,$e)).join("")}),q())}catch{y("ลบไม่สำเร็จ","error")}})})});const a=()=>{const o=[...e.querySelectorAll(".mcm-cb:checked")],i=e.querySelector("#mcm-bulk-bar");if(i){i.classList.toggle("hidden",o.length===0);const b=i.querySelector("#mcm-bulk-count");b&&(b.textContent=`เลือก ${o.length} รายการ`)}};e.querySelectorAll(".mcm-cb").forEach(o=>o.addEventListener("change",a)),(p=e.querySelector("#mcm-bulk-del"))==null||p.addEventListener("click",()=>{const o=[...e.querySelectorAll(".mcm-cb:checked")];if(!o.length)return;const i=o.map(b=>{const m=[...H,...z].find(L=>L.id===parseInt(b.dataset.colid));return(m==null?void 0:m.assignment_name)??`ID ${b.dataset.colid}`}).join(", ");d(`ลบ ${o.length} คอลัมน์:<br/><span class="font-semibold text-sm">${i}</span>`,async()=>{try{for(const b of o){const m=parseInt(b.dataset.colid);await st(m);const L=H.findIndex(N=>N.id===m),M=z.findIndex(N=>N.id===m);L!==-1&&H.splice(L,1),M!==-1&&z.splice(M,1)}y(`ลบ ${o.length} คอลัมน์แล้ว ✅`,"success"),fe(),e.querySelectorAll(".mcm-col-list").forEach((b,m)=>{b.innerHTML=(m===0?H:z).map(n).join("")}),q()}catch{y("ลบไม่สำเร็จ","error")}})})};q();const $=()=>{e.querySelectorAll(".mcm-bonus-name").forEach(a=>{a.addEventListener("blur",async()=>{const p=parseInt(a.dataset.bonusid),o=a.value.trim();if(o)try{await Ae(p,{assignment_name:o});const i=ae.find(b=>b.id===p);i&&(i.assignment_name=o),fe()}catch{y("บันทึกไม่สำเร็จ","error")}}),a.addEventListener("keydown",p=>{p.key==="Enter"&&(p.preventDefault(),a.blur())})}),e.querySelectorAll(".mcm-bonus-del").forEach(a=>{a.addEventListener("click",()=>{const p=parseInt(a.dataset.colid),o=ae.find(i=>i.id===p);d(`ลบคอลัมน์พิเศษ <span class="font-semibold">"${(o==null?void 0:o.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await st(p);const i=ae.findIndex(m=>m.id===p);i!==-1&&ae.splice(i,1),y("ลบคอลัมน์พิเศษแล้ว ✅","success"),fe();const b=e.querySelector("#mcm-bonus-list");b&&(b.innerHTML=ae.map(l).join(""),$())}catch{y("ลบไม่สำเร็จ","error")}})})})};$();const t=()=>{e.querySelectorAll(".mcm-override-del").forEach(a=>{a.addEventListener("click",()=>{const p=parseInt(a.dataset.colid),o=xe.find(i=>i.id===p);d(`ลบคอลัมน์ปรับคะแนน <span class="font-semibold">"${(o==null?void 0:o.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย (คะแนนในคอลัมน์หลักที่เคยปรับไปแล้วจะไม่ถูกย้อนกลับ)</span>`,async()=>{try{await st(p);const i=xe.findIndex(m=>m.id===p);i!==-1&&xe.splice(i,1),y("ลบคอลัมน์ปรับคะแนนแล้ว ✅","success"),fe();const b=e.querySelector("#mcm-override-list");b&&(b.innerHTML=xe.map(x).join(""),t())}catch{y("ลบไม่สำเร็จ","error")}})})})};t(),(h=e.querySelector("#mcm-add-override"))==null||h.addEventListener("click",()=>{var o;(o=document.getElementById("quick-add-override-mcm"))==null||o.remove();const a=vt,p=document.createElement("div");p.id="quick-add-override-mcm",p.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",p.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-teal-700">🔄 เพิ่มคอลัมน์ปรับคะแนน</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qom-name" type="text" placeholder="เช่น คะแนนสอบปรับ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">เชื่อมกับคอลัมน์หลัก <span class="text-red-400">*</span></label>
              <select id="qom-link" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-200">
                <option value="">— เลือกคอลัมน์ —</option>
                ${a.map(i=>`<option value="${i.id}">${J(i.assignment_name)} (${J(i.assignment_type??"—")} · เต็ม ${i.max_score??"—"})</option>`).join("")}
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">วิธีปรับคะแนน</label>
              <select id="qom-mode" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-200">
                <option value="max">ใช้คะแนนที่มากกว่า (เขียนทับเฉพาะตอนคะแนนใหม่สูงกว่า)</option>
                <option value="add">บวกเพิ่มจากคะแนนตั้งต้น (คะแนนใหม่ = คะแนนตั้งต้น + คอลัมน์นี้เสมอ)</option>
              </select>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qom-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qom-save" class="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(p),p.querySelector("#qom-cancel").addEventListener("click",()=>p.remove()),p.querySelector("#qom-name").focus(),p.querySelector("#qom-save").addEventListener("click",async()=>{const i=p.querySelector("#qom-name").value.trim(),b=Number(p.querySelector("#qom-link").value)||null,m=p.querySelector("#qom-mode").value==="add"?"add":"max";if(!i){y("กรุณากรอกชื่อคอลัมน์","warning");return}if(!b){y("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const L=a.find(N=>N.id===b),M=p.querySelector("#qom-save");M.disabled=!0,M.textContent="⏳";try{await Ie({class_id:r.id,assignment_name:i,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:(L==null?void 0:L.max_score)??null,column_type:"override",link_column_id:b,override_mode:m}),p.remove(),e.remove(),Ee(u,r),y(`เพิ่ม "${i}" แล้ว ✅`,"success")}catch(N){y("เพิ่มไม่สำเร็จ: "+le(N),"error"),M.disabled=!1,M.textContent="เพิ่ม"}})}),(v=e.querySelector("#mcm-add-bonus"))==null||v.addEventListener("click",()=>{var p;(p=document.getElementById("quick-add-bonus-mcm"))==null||p.remove();const a=document.createElement("div");a.id="quick-add-bonus-mcm",a.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",a.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qbm-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qbm-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qbm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qbm-save" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(a),a.querySelector("#qbm-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#qbm-name").focus(),a.querySelector("#qbm-save").addEventListener("click",async()=>{const o=a.querySelector("#qbm-name").value.trim(),i=a.querySelector("#qbm-max").value?parseFloat(a.querySelector("#qbm-max").value):null;if(!o){y("กรุณากรอกชื่อคอลัมน์","warning");return}const b=a.querySelector("#qbm-save");b.disabled=!0,b.textContent="⏳";try{const m=await Ie({class_id:r.id,assignment_name:o,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:i,column_type:"bonus",formula:null,formula_refs:[]});a.remove(),e.remove(),Ee(u,r),y(`เพิ่ม "${o}" แล้ว ✅`,"success")}catch(m){y("เพิ่มไม่สำเร็จ: "+le(m),"error"),b.disabled=!1,b.textContent="เพิ่ม"}})}),e.querySelectorAll(".mcm-add").forEach(a=>{a.addEventListener("click",()=>{e.remove(),on(r,a.dataset.type,()=>Ee(u,r))})}),(j=e.querySelector("#mcm-fill-default"))==null||j.addEventListener("click",async()=>{const a=e.querySelector("#mcm-fill-default");a.disabled=!0,a.textContent="กำลังสร้าง...";try{const p=Math.max(0,5-H.length),o=Math.max(0,5-z.length),i=(b,m)=>Ie({class_id:r.id,assignment_name:`คะแนนที่ ${m}`,max_score:20,assignment_type:b,sheet_column:""});for(let b=1;b<=p;b++)await i("midterm",H.length+b);for(let b=1;b<=o;b++)await i("final",z.length+b);e.remove(),Ee(u,r)}catch{y("สร้างคอลัมน์ไม่สำเร็จ","error"),a.disabled=!1,a.textContent="เติมให้ครบ"}})},qn=e=>{if(!Ze)return'<td class="border border-sky-100 text-center text-gray-300 text-[10px]">—</td>';const n=ut[e];return n?'<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold '+n.cls+'" id="gread-'+e+'">'+n.label+"</td>":'<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-'+e+'">—</td>'},Cn=e=>{const n=new Date(e);return`${n.getDate()}/${n.getMonth()+1} ${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}`},Ln=(e,n,l,x)=>{var t;if((t=document.getElementById("score-hist-popup"))==null||t.remove(),!(x!=null&&x.length))return;let d="",E=0;x.forEach((s,h)=>{E+=s.d,h===0?d+=String(s.d):d+=s.d>=0?` + ${s.d}`:` − ${Math.abs(s.d)}`}),d+=` = ${Math.round(E*1e3)/1e3}`;const q=O.find(s=>s.id===e),$=document.createElement("div");$.id="score-hist-popup",$.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",$.style.background="rgba(0,0,0,0.4)",$.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
            <p class="font-bold text-indigo-700 text-sm">ประวัติคะแนน — ${J(l)}</p>
            <p class="text-xs text-indigo-400">${J((q==null?void 0:q.full_name)??"")}</p>
          </div>
          <div class="p-4">
            <div class="space-y-1 mb-3 max-h-44 overflow-y-auto">
              ${x.map(s=>`
                <div class="flex justify-between items-center text-xs py-1 border-b border-gray-50">
                  <span class="text-gray-400">${Cn(s.at)}</span>
                  <span class="font-semibold ${s.d>=0?"text-emerald-600":"text-rose-600"}">${s.d>=0?"+":""}${s.d}</span>
                </div>`).join("")}
            </div>
            <div class="bg-indigo-50 rounded-xl px-3 py-2 text-xs font-mono text-indigo-700 text-center">${d}</div>
          </div>
          <div class="px-5 pb-4 flex gap-2">
            <button id="hist-reset" class="flex-1 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs hover:bg-rose-50 transition">รีเซ็ตประวัติ</button>
            <button id="hist-close" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ปิด</button>
          </div>
        </div>`,document.body.appendChild($),$.querySelector("#hist-close").addEventListener("click",()=>$.remove()),$.querySelector("#hist-reset").addEventListener("click",async()=>{var h,v,j,a,p;const s=(v=(h=G[e])==null?void 0:h[n])==null?void 0:v.final;if(s==null){$.remove();return}try{const o=await Et(r.id,e,n,s,{});if(o){G[e]||(G[e]={}),G[e][n]={orig:((j=o.history[0])==null?void 0:j.d)??o.final,retake:null,final:o.final,history:o.history};const i=document.getElementById("grade-grid-wrap"),b=i==null?void 0:i.querySelector(`.grade-input[data-sid="${e}"][data-col="${n}"]`);b&&(b.value=o.final!==null?String(o.final):""),(p=(a=b==null?void 0:b.closest("td"))==null?void 0:a.querySelector(".hist-indicator"))==null||p.remove(),y("รีเซ็ตประวัติแล้ว","success"),await _applyOverrideIfNeeded(e,n)}}catch{y("ไม่สำเร็จ","error")}$.remove()}),$.addEventListener("click",s=>{s.target===$&&$.remove()})},In=(e,n,l)=>{var q;(q=document.getElementById("mass-score-popup"))==null||q.remove();const x=document.createElement("div");x.id="mass-score-popup",x.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",x.style.background="rgba(0,0,0,0.4)",x.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div class="bg-blue-50 px-5 py-3 border-b border-blue-100">
            <p class="font-bold text-blue-700 text-sm">ตั้งคะแนนทั้งห้อง</p>
            <p class="text-xs text-blue-400">${J(n)}${l?" (เต็ม "+l+")":""}</p>
          </div>
          <div class="p-4 space-y-2">
            <p class="text-xs text-gray-500">ใส่ตัวเลข หรือ +/- สำหรับสะสม</p>
            <input type="text" id="mass-inp" inputmode="decimal" autocomplete="off"
              class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="+5 / 10 / -2"/>
            <p id="mass-preview" class="text-xs text-center text-gray-400 h-4"></p>
          </div>
          <div class="px-5 pb-5 flex gap-2">
            <button id="mass-cancel" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ยกเลิก</button>
            <button id="mass-confirm" class="flex-1 py-2.5 rounded-2xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition">ตั้งค่า</button>
          </div>
        </div>`,document.body.appendChild(x);const d=x.querySelector("#mass-inp"),E=x.querySelector("#mass-preview");d.addEventListener("input",()=>{const $=d.value.trim();if(!$){E.textContent="";return}const t=parseFloat($);if(isNaN(t)){E.textContent="";return}E.textContent=/^[+-]/.test($)?`บวก/ลบ ${t>=0?"+":""}${t} ใน ${O.length} คน`:`ตั้งเป็น ${t} ใน ${O.length} คน`}),x.querySelector("#mass-cancel").addEventListener("click",()=>x.remove()),x.querySelector("#mass-confirm").addEventListener("click",async()=>{var j,a,p,o;const $=d.value.trim();if(!$){x.remove();return}const t=x.querySelector("#mass-confirm");t.disabled=!0,t.textContent="⏳";let s=0,h=0,v=0;for(const i of O){const b=((a=(j=G[i.id])==null?void 0:j[e])==null?void 0:a.history)??[];try{const m=await Et(r.id,i.id,e,$,{currentHistory:b,max:l??null});if(m){m.clamped&&v++,G[i.id]||(G[i.id]={}),G[i.id][e]={orig:((p=m.history[0])==null?void 0:p.d)??m.final,retake:null,final:m.final,history:m.history};const L=document.getElementById("grade-grid-wrap"),M=L==null?void 0:L.querySelector(`.grade-input[data-sid="${i.id}"][data-col="${e}"]`);M&&(M.value=m.final!==null?String(m.final):"",M.style.boxShadow="0 0 0 2px #059669",setTimeout(()=>M.style.boxShadow="",700));const N=M==null?void 0:M.closest("td");if(m.history.length>1){if(!(N!=null&&N.querySelector(".hist-indicator"))){const P=document.createElement("span");P.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl",P.textContent="Δ",P.dataset.sid=i.id,P.dataset.col=e,N==null||N.appendChild(P)}}else(o=N==null?void 0:N.querySelector(".hist-indicator"))==null||o.remove();s++,await _applyOverrideIfNeeded(i.id,e)}}catch{h++}}O.forEach(i=>{var ke;const{midRaw:b,finRaw:m,total:L,grade:M,khuna:N}=Le(i.id),P=((ke=G[i.id])==null?void 0:ke.__force)??"",me=document.getElementById(`gmid-${i.id}`),ne=document.getElementById(`gfin-${i.id}`);me&&(me.textContent=b>0?ge("mid_subtotal",b,1):"—"),ne&&(ne.textContent=m>0?ge("fin_subtotal",m,1):"—");const ce=document.getElementById(`gtotal-${i.id}`),$e=document.getElementById(`ggrade-${i.id}`),_e=document.getElementById(`gkhuna-${i.id}`);ce&&(ce.textContent=L>0?L:"—"),$e&&($e.textContent=P||(M>0?M.toFixed(1):"0")),_e&&(_e.textContent=N.label,_e.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${N.cls}`)}),y(`ตั้งคะแนนสำเร็จ ${s}/${O.length} คน${v?" (ปรับ "+v+" คนที่เกินคะแนนเต็มอัตโนมัติ)":""}${h?" (ล้มเหลว "+h+")":""}`,s>0?"success":"error"),x.remove()}),x.addEventListener("click",$=>{$.target===x&&x.remove()}),setTimeout(()=>d.focus(),60)},fe=()=>{var $;const e=Xe(H),n=Xe(z),l=document.getElementById("grade-grid-wrap");if(!l)return;const x=`
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${At} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${bt} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${bt} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${Rt}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${H.length+1}" class="${D} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${e>0?" (เต็ม "+e+")":""}</th>
          <th colspan="${z.length+1}" class="${D} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${n>0?" (เต็ม "+n+")":""}</th>
          ${qe.length?`<th colspan="${qe.length}" class="${D} bg-indigo-600 text-white font-semibold py-1.5">🧮 อ้างอิงสูตร</th>`:""}
          ${xe.length?`<th colspan="${xe.length}" class="${D} bg-teal-600 text-white font-semibold py-1.5">🔄 ปรับคะแนน</th>`:""}
          ${ie?`<th colspan="${ae.length+1}" class="${D} bg-amber-500 text-white font-semibold py-1.5">⭐ คะแนนเก็บ/พิเศษ</th>`:""}
          <th class="${D} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${e+n+qe.reduce((t,s)=>t+(parseFloat(s.max_score)||0),0)||"?"}</div></th>
          <th class="${D} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${Je?`<th class="${D} bg-rose-50 text-rose-600 text-xs" style="min-width:32px;width:32px" rowspan="3"><div class="text-[9px] font-semibold leading-tight">บัง<br/>คับ</div></th>`:""}
          <th class="${D} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ${Ue?"":'<div class="text-[9px] font-normal text-emerald-300">ปิดอยู่</div>'}</th>
          <th class="${D} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">${Ze?"ผลประเมิน":"ปิดอยู่"}</div></th>
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${H.map(t=>`<th class="${D} bg-blue-50" style="width:${K}px;min-width:${K}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${V(t)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-blue-600 cursor-pointer hover:bg-blue-100"}"
                data-colid="${t.id}" title="${V(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${t.sheet_column||"—"}</span>
              <button class="btn-mass-score text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${J(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${V(t)?"":`<button class="btn-scan-col text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${Qe?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${t.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${t.id}" title="${t.bonus_formula?"🔗 = "+t.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${D} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${z.map(t=>`<th class="${D} bg-purple-50" style="width:${K}px;min-width:${K}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${V(t)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-purple-600 cursor-pointer hover:bg-purple-100"}"
                data-colid="${t.id}" title="${V(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${t.sheet_column||"—"}</span>
              <button class="btn-mass-score text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${J(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${V(t)?"":`<button class="btn-scan-col text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${Qe?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${t.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${t.id}" title="${t.bonus_formula?"🔗 = "+t.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${D} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
          ${qe.map(t=>`<th class="${D} bg-indigo-50" style="width:${K}px;min-width:${K}px">
            <span class="text-[10px] text-indigo-400 font-mono block text-center truncate" title="${t.formula??""}">${t.formula??"—"}</span>
          </th>`).join("")}
          ${xe.map(t=>{var s;return`<th class="${D} bg-teal-50" style="width:${K}px;min-width:${K}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[10px] text-teal-500 flex-1 text-center truncate" title="เชื่อมกับ: ${J(((s=We[t.link_column_id])==null?void 0:s.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗</span>
              <button class="btn-mass-score text-teal-300 hover:text-teal-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${J(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
            </div>
          </th>`}).join("")}
          ${ie?ae.map(t=>`<th class="${D} bg-amber-50" style="width:${K}px;min-width:${K}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[11px] text-amber-500 flex-1 text-center">${t.sheet_column||"—"}</span>
              <button class="btn-mass-score text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${J(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${V(t)?"":`<button class="btn-scan-col text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
            </div>
          </th>`).join(""):""}
          ${ie?`<th class="${D} bg-amber-50" style="width:30px">
            <button class="btn-add-bonus text-amber-500 hover:bg-amber-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block">＋</button></th>`:""}
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${H.map(t=>`<th class="${D} bg-blue-50" style="width:${K}px;min-width:${K}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${V(t)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-blue-50"}"
              contenteditable="${V(t)?"false":"true"}" data-colid="${t.id}" data-field="assignment_name" title="${V(t)?Lt(t):""}">${t.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${V(t)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-blue-500 hover:underline"}"
              data-colid="${t.id}" title="${V(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${t.max_score||0}</span></span>
            ${t.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${D} bg-blue-50" style="width:30px"></th>
          ${z.map(t=>`<th class="${D} bg-purple-50" style="width:${K}px;min-width:${K}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${V(t)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-purple-50"}"
              contenteditable="${V(t)?"false":"true"}" data-colid="${t.id}" data-field="assignment_name" title="${V(t)?Lt(t):""}">${t.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${V(t)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-purple-500 hover:underline"}"
              data-colid="${t.id}" title="${V(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${t.max_score||0}</span></span>
            ${t.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${D} bg-purple-50" style="width:30px"></th>
          ${qe.map(t=>`<th class="${D} bg-indigo-50" style="width:${K}px;min-width:${K}px">
            <span class="text-[11px] text-indigo-700 font-medium block text-center truncate">${t.assignment_name}</span>
            <span class="text-[10px] text-indigo-400">/${t.max_score??"?"}</span>
          </th>`).join("")}
          ${xe.map(t=>`<th class="${D} bg-teal-50" style="width:${K}px;min-width:${K}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-teal-700 cursor-text hover:bg-teal-100"
              contenteditable="true" data-colid="${t.id}" data-field="assignment_name">${t.assignment_name||"—"}</span>
            <span class="text-[10px] text-teal-400">/${t.max_score??"?"}</span>
          </th>`).join("")}
          ${ie?ae.map(t=>`<th class="${D} bg-amber-50" style="width:${K}px;min-width:${K}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-amber-700 cursor-text hover:bg-amber-100"
              contenteditable="true" data-colid="${t.id}" data-field="assignment_name">${t.assignment_name||"—"}</span>
            <span class="text-[10px] text-amber-400">${t.max_score?"/"+t.max_score:"(ไม่จำกัด)"}</span>
          </th>`).join(""):""}
          ${ie?`<th class="${D} bg-amber-50" style="width:30px"></th>`:""}
        </tr>`,d=O.map((t,s)=>{var b;const{midRaw:h,finRaw:v,total:j,grade:a,khuna:p}=Le(t.id),o=((b=G[t.id])==null?void 0:b.__force)??"",i=o||(a>0?a.toFixed(1):"0");return`<tr class="hover:bg-gray-50 transition" data-sid="${t.id}">
          <td class="${At} text-center text-gray-400" style="width:28px">${s+1}</td>
          <td class="${bt} text-center font-mono text-gray-600" style="left:28px;width:64px">${t.student_code}</td>
          <td class="${bt} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${Rt}px" data-idx="${s}">
            <div class="flex items-center gap-1.5 py-1">
              ${t.image_url?`<img src="${t.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${t.full_name}</span>
            </div>
          </td>
          ${H.map(m=>{const L=we(t.id,m.id)??"",M=xt(t.id,m.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${K}px;min-width:${K}px;height:30px;${at(m,L)}">
            <input class="grade-input w-full h-full text-center text-xs ${V(m)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Pe(m.id,L)}" placeholder="—"
              data-sid="${t.id}" data-col="${m.id}" data-max="${m.max_score}" ${V(m)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${M?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gmid-${t.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${h>0?ge("mid_subtotal",h,1):"—"}</td>
          ${z.map(m=>{const L=we(t.id,m.id)??"",M=xt(t.id,m.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${K}px;min-width:${K}px;height:30px;${at(m,L)}">
            <input class="grade-input w-full h-full text-center text-xs ${V(m)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Pe(m.id,L)}" placeholder="—"
              data-sid="${t.id}" data-col="${m.id}" data-max="${m.max_score}" ${V(m)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${M?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gfin-${t.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${v>0?ge("fin_subtotal",v,1):"—"}</td>
          ${qe.map(m=>{const L=Bt(m,t.id),M=L!==null&&L!==0?ge(`derived_${m.id}`,L,2):"—";return`<td class="border border-indigo-100 bg-indigo-50/40 text-center text-xs text-indigo-700 font-medium grade-derived-td" style="width:${K}px;min-width:${K}px;height:30px" title="คำนวณจาก: ${m.formula??""}">${M}</td>`}).join("")}
          ${xe.map(m=>{const L=we(t.id,m.id)??"",M=xt(t.id,m.id);return`<td class="border border-teal-100 text-center p-0 relative" style="width:${K}px;min-width:${K}px;height:30px;${at(m,L)}">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-teal-50 focus:outline-none focus:ring-1 focus:ring-teal-300 focus:rounded"
              type="text" inputmode="decimal" value="${Pe(m.id,L)}" placeholder="—"
              data-sid="${t.id}" data-col="${m.id}" data-max="${m.max_score??9999}"/>
            ${M?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          ${ie?ae.map(m=>{const L=we(t.id,m.id)??"",M=xt(t.id,m.id);return`<td class="border border-amber-100 text-center p-0 relative" style="width:${K}px;min-width:${K}px;height:30px;${at(m,L)}">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-300 focus:rounded"
              type="text" inputmode="decimal" value="${Pe(m.id,L)}" placeholder="—"
              data-sid="${t.id}" data-col="${m.id}" data-max="${m.max_score??9999}"/>
            ${M?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${m.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join(""):""}
          ${ie?'<td class="border border-amber-50 bg-amber-50/30" style="width:30px;height:30px"></td>':""}
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${t.id}" style="min-width:58px">${j>0?j:"—"}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${t.id}" style="min-width:50px">${i}</td>
          ${Je?`<td class="border border-rose-100 text-center bg-rose-50 cursor-pointer hover:bg-rose-100 transition force-cell" style="min-width:32px;height:30px" data-sid="${t.id}">
            <span class="text-xs font-bold ${o?"text-rose-600":"text-rose-200"}">${o||"+"}</span></td>`:""}
          <td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${Ue?p.cls:"text-gray-300"}" id="gkhuna-${t.id}">${Ue?p.label:"—"}</td>
          ${qn(t.id)}
        </tr>`}).join("");l.innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${x}</thead><tbody>${d}</tbody></table>`;const E=l.querySelector("table"),q=async(t,s)=>{var _e,ke,tt,yt,ye;const h=We[s];if(!h||h.column_type!=="override"||!h.link_column_id)return;const v=(ke=(_e=G[t])==null?void 0:_e[s])==null?void 0:ke.final;if(v==null)return;const j=h.link_column_id,a=(tt=We[j])==null?void 0:tt.max_score,p=await Yn({studentId:t,mainColumnId:j,overrideValue:v,overrideMode:h.override_mode,mainMaxScore:typeof a=="number"?a:null});if(!p.applied)return;G[t][j]={orig:((yt=p.history[0])==null?void 0:yt.d)??p.score,retake:null,final:p.score,history:p.history};const o=l.querySelector(`.grade-input[data-sid="${t}"][data-col="${j}"]`);o&&(o.value=p.score!==null?String(Pe(j,p.score)):"",o.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",o.style.background="#f0fdf4",setTimeout(()=>{o.style.boxShadow="",o.style.background=""},900));const{midRaw:i,finRaw:b,total:m,grade:L,khuna:M}=Le(t),N=((ye=G[t])==null?void 0:ye.__force)??"",P=document.getElementById(`gmid-${t}`),me=document.getElementById(`gfin-${t}`);P&&(P.textContent=i>0?ge("mid_subtotal",i,1):"—"),me&&(me.textContent=b>0?ge("fin_subtotal",b,1):"—");const ne=document.getElementById(`gtotal-${t}`),ce=document.getElementById(`ggrade-${t}`),$e=document.getElementById(`gkhuna-${t}`);ne&&(ne.textContent=m>0?m:"—"),ce&&(ce.textContent=N||(L>0?L.toFixed(1):"0")),$e&&($e.textContent=M.label,$e.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${M.cls}`),y(`ปรับคะแนนอัตโนมัติ → ${p.score} (จากคอลัมน์ปรับคะแนน) ✅`,"success")};E.addEventListener("focusin",t=>{const s=t.target.closest(".grade-input");if(!s)return;const h=we(Number(s.dataset.sid),Number(s.dataset.col));s.value=h==null?"":String(h)}),E.addEventListener("focusout",t=>{const s=t.target.closest(".grade-input");s&&(s.value=Pe(s.dataset.col,s.value))}),E.addEventListener("change",async t=>{var v,j,a,p,o,i,b,m,L,M;const s=t.target.closest(".grade-input"),h=t.target.closest(".force-input");if(s){const N=parseInt(s.dataset.sid),P=parseInt(s.dataset.col),me=parseFloat(s.dataset.max);if(V(P)){y("คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้","warning"),s.value=((j=(v=G[N])==null?void 0:v[P])==null?void 0:j.final)??"";return}let ne=s.value.trim();const ce=we(N,P);if(ne===""&&ce==null||ne!==""&&ce!=null&&Number(ne)===Number(ce))return;const $e=((p=(a=G[N])==null?void 0:a[P])==null?void 0:p.history)??[];G[N]||(G[N]={}),s.style.outline="2px solid #6366f1",s.style.outlineOffset="1px",(o=document.getElementById("grade-saving"))==null||o.classList.remove("hidden");try{const _e=await Et(r.id,N,P,ne===""?null:ne,{currentHistory:$e,max:isNaN(me)?null:me});if(!_e){s.value=((i=G[N][P])==null?void 0:i.final)??"";return}const{final:ke,history:tt,clamped:yt}=_e;G[N][P]={orig:((b=tt[0])==null?void 0:b.d)??ke,retake:null,final:ke,history:tt},s.value=Pe(P,ke),hn(s,We[P],ke),s.title="",yt&&y(`คะแนนเกินคะแนนเต็ม ปรับให้เป็น ${ke} อัตโนมัติ`,"warning");const ye=s.closest("td");if(tt.length>1){if(!(ye!=null&&ye.querySelector(".hist-indicator"))){const nt=document.createElement("span");nt.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none",nt.textContent="Δ",nt.dataset.sid=N,nt.dataset.col=P,nt.title="ดูประวัติคะแนน",ye==null||ye.appendChild(nt)}}else(m=ye==null?void 0:ye.querySelector(".hist-indicator"))==null||m.remove();s.style.outline="",s.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",s.style.background="#f0fdf4",setTimeout(()=>{s.style.boxShadow="",s.style.background=""},900);const{midRaw:zt,finRaw:Pt,total:Ut,grade:Vt,khuna:Kt}=Le(N),jn=((L=G[N])==null?void 0:L.__force)??"",Yt=document.getElementById(`gmid-${N}`),Wt=document.getElementById(`gfin-${N}`);Yt&&(Yt.textContent=zt>0?ge("mid_subtotal",zt,1):"—"),Wt&&(Wt.textContent=Pt>0?ge("fin_subtotal",Pt,1):"—");const Qt=document.getElementById(`gtotal-${N}`),Xt=document.getElementById(`ggrade-${N}`),_t=document.getElementById(`gkhuna-${N}`);Qt&&(Qt.textContent=Ut>0?Ut:"—"),Xt&&(Xt.textContent=jn||(Vt>0?Vt.toFixed(1):"0")),_t&&(_t.textContent=Kt.label,_t.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${Kt.cls}`),await q(N,P)}catch{y("บันทึกไม่สำเร็จ","error")}finally{(M=document.getElementById("grade-saving"))==null||M.classList.add("hidden")}}}),E.addEventListener("input",t=>{var i,b;const s=t.target.closest(".grade-input");if(!s)return;const h=s.value.trim();if(!/^[+-]/.test(h)){s.title="";return}const v=parseInt(s.dataset.sid),j=parseInt(s.dataset.col),a=((b=(i=G[v])==null?void 0:i[j])==null?void 0:b.final)??0,p=parseFloat(h);if(isNaN(p)){s.title="";return}const o=Math.round((a+p)*1e3)/1e3;s.title=`${a} ${p>=0?"+":"−"} ${Math.abs(p)} = ${o}`}),E.addEventListener("click",t=>{var j,a;const s=t.target.closest(".hist-indicator");if(s){const p=parseInt(s.dataset.sid),o=parseInt(s.dataset.col),i=((a=(j=G[p])==null?void 0:j[o])==null?void 0:a.history)??[],b=[...H,...z,...ae].find(m=>m.id===o);Ln(p,o,(b==null?void 0:b.assignment_name)??"",i);return}const h=t.target.closest(".btn-mass-score");if(h){In(parseInt(h.dataset.colid),h.dataset.colname,h.dataset.max?parseFloat(h.dataset.max):null);return}const v=t.target.closest(".btn-scan-col");if(v){tn({classId:r.id,className:r.class_name,initialColumnId:parseInt(v.dataset.colid)});return}}),E.addEventListener("click",t=>{var p,o;const s=t.target.closest(".force-cell");if(!s)return;const h=parseInt(s.dataset.sid);(p=document.getElementById("force-grade-popup"))==null||p.remove();const v=((o=G[h])==null?void 0:o.__force)??"",j=document.createElement("div");j.id="force-grade-popup",j.className="fixed inset-0 z-[400] flex items-end sm:items-center justify-center p-4",j.style.background="rgba(0,0,0,0.4)";const a=O.find(i=>i.id===h);j.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div class="bg-rose-50 px-5 py-3 border-b border-rose-100">
              <p class="font-bold text-rose-700 text-sm">บังคับเกรด</p>
              <p class="text-xs text-rose-400">${(a==null?void 0:a.full_name)??""}</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-4 gap-2 mb-3">
                ${yn.map(i=>`
                  <button class="force-pick py-2.5 rounded-xl text-sm font-bold border transition
                    ${i===v?"bg-rose-500 text-white border-rose-500":"bg-white text-rose-600 border-rose-200 hover:bg-rose-50"}"
                    data-grade="${i}">${i}</button>`).join("")}
                <button class="force-pick py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 col-span-4"
                  data-grade="">ล้างค่า (ใช้เกรดปกติ)</button>
              </div>
            </div>
          </div>`,document.body.appendChild(j),j.addEventListener("click",async i=>{const b=i.target.closest(".force-pick");if(!b&&i.target===j){j.remove();return}if(!b)return;const m=b.dataset.grade;b.disabled=!0;try{await Wn(a==null?void 0:a.enrollment_id,m)}catch(P){y("บันทึกบังคับเกรดไม่สำเร็จ: "+le(P),"error"),b.disabled=!1;return}G[h]||(G[h]={}),G[h].__force=m,a&&(a.special_result=m||null);const{grade:L}=Le(h),M=document.getElementById(`ggrade-${h}`);M&&(M.textContent=m||(L>0?L.toFixed(1):"0"));const N=s.querySelector("span");N&&(N.textContent=m||"+",N.className=`text-xs font-bold ${m?"text-rose-600":"text-rose-200"}`),j.remove()})}),E.addEventListener("keydown",t=>{var M,N;const s=t.target.closest(".grade-input");if(!s||!["Tab","Enter","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key))return;t.preventDefault();const v=[...l.querySelectorAll(".grade-input")],j=[...new Set(v.map(P=>P.dataset.sid))],p=[...new Set(v.map(P=>P.dataset.col))].length,o=v.indexOf(s),i=Math.floor(o/p),b=o%p;let m=i,L=b;switch(t.key){case"Enter":case"ArrowDown":m=i<j.length-1?i+1:i;break;case"ArrowUp":m=i>0?i-1:0;break;case"Tab":(M=v[o+(t.shiftKey?-1:1)])==null||M.focus();return;case"ArrowRight":L=b<p-1?b+1:b;break;case"ArrowLeft":L=b>0?b-1:0;break}(N=v[m*p+L])==null||N.focus()}),l.querySelectorAll(".col-edit").forEach(t=>{t.addEventListener("blur",async()=>{const s=parseInt(t.dataset.colid),h=t.textContent.trim();if(!V(s))try{await Ae(s,{assignment_name:h||null});const v=[...H,...z,...ae].find(j=>j.id===s);v&&(v.assignment_name=h)}catch{y("บันทึกไม่สำเร็จ","error")}}),t.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),t.blur())})}),l.querySelectorAll(".col-sheet-ref").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.dataset.colid);if(V(s)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}vn(t,s)})}),l.querySelectorAll(".col-max").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.dataset.colid);if(V(s)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}wn(t,s)})}),l.querySelectorAll(".btn-add-col").forEach(t=>{t.addEventListener("click",()=>on(r,t.dataset.type,()=>Ee(u,r)))}),($=l.querySelector(".btn-add-bonus"))==null||$.addEventListener("click",()=>{var h;(h=document.getElementById("quick-add-bonus"))==null||h.remove();const t=document.createElement("div");t.id="quick-add-bonus",t.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/40 p-4",t.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qb-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qb-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qb-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qb-add" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(t),t.querySelector("#qb-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",v=>{v.target===t&&t.remove()});const s=t.querySelector("#qb-name");s.focus(),t.querySelector("#qb-add").addEventListener("click",async()=>{const v=s.value.trim(),j=t.querySelector("#qb-max").value?parseFloat(t.querySelector("#qb-max").value):null;if(!v){y("กรุณากรอกชื่อคอลัมน์","warning");return}const a=t.querySelector("#qb-add");a.disabled=!0,a.textContent="⏳";try{await Ie({class_id:r.id,assignment_name:v,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:j,column_type:"bonus",formula:null,formula_refs:[]}),y(`เพิ่ม "${v}" แล้ว ✅`,"success"),t.remove(),Ee(u,r)}catch(p){y("เพิ่มไม่สำเร็จ: "+le(p),"error"),a.disabled=!1,a.textContent="เพิ่ม"}})}),l.querySelectorAll(".btn-formula-link").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.dataset.colid),h=[...H,...z].find(v=>v.id===s);h&&En(h)})}),l.querySelectorAll(".student-name-cell").forEach(t=>{t.addEventListener("click",()=>{const s=O[parseInt(t.dataset.idx)];$n(s,G[s.id]??{},Le(s.id))})})};je(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0 flex-wrap">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${(w==null?void 0:w.subject_name)??"—"} · ${r.class_name} · ${O.length} คน</p>
        </div>
        <div id="grade-saving" class="hidden bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
        <div class="flex items-center gap-1.5 flex-wrap justify-end">
        <button id="btn-grade-filter" type="button" class="relative flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          🔍 <span class="hidden sm:inline text-xs">ค้นหา/กรอง</span><span id="grade-filter-badge" class="hidden absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-2 ring-white"></span>
        </button>
        <button id="btn-scan-score" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-sky-200 text-sm text-sky-600 hover:bg-sky-50 transition flex-shrink-0">
          📷 <span class="hidden sm:inline text-xs">สแกนคะแนน</span>
        </button>
        <button id="btn-copy-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-indigo-200 text-sm text-indigo-600 hover:bg-indigo-50 transition flex-shrink-0">
          📋 <span class="hidden sm:inline text-xs">คัดลอกคอลัมน์</span>
        </button>
        <button id="btn-manage-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          ⚙️ <span class="hidden sm:inline text-xs">จัดการคอลัมน์</span>
        </button>
        </div>
      </div>
      <div id="grade-filterbar" class="hidden border-b border-indigo-100 bg-indigo-50/50 px-4 py-2.5 flex-shrink-0">
        <div class="flex items-center gap-2 flex-wrap">
          <label class="relative flex-1 min-w-[190px] max-w-md">
            <span class="sr-only">ค้นหาชื่อหรือรหัสนักเรียน</span>
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">⌕</span>
            <input id="grade-filter-search" type="search" autocomplete="off" placeholder="ค้นหาชื่อหรือรหัสนักเรียน" class="w-full rounded-xl border border-indigo-100 bg-white py-2 pl-8 pr-3 text-xs text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
          </label>
          <select id="grade-filter-completion" class="rounded-xl border border-indigo-100 bg-white px-3 py-2 text-xs text-gray-600 outline-none focus:border-indigo-400">
            <option value="all">สถานะคะแนน: ทั้งหมด</option>
            <option value="incomplete">ยังกรอกไม่ครบ</option>
            <option value="complete">กรอกครบแล้ว</option>
          </select>
          <select id="grade-filter-result" class="rounded-xl border border-indigo-100 bg-white px-3 py-2 text-xs text-gray-600 outline-none focus:border-indigo-400">
            <option value="all">ผลการเรียน: ทั้งหมด</option>
            <option value="flagged">ติด 0/ผลพิเศษ</option>
            <option value="special">มีผลพิเศษ</option>
          </select>
          <span id="grade-filter-summary" class="text-[11px] font-semibold text-indigo-600 whitespace-nowrap"></span>
          <button id="grade-filter-clear" type="button" class="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-gray-500 hover:bg-white hover:text-indigo-600 transition">ล้างตัวกรอง</button>
        </div>
      </div>
      <div id="grade-togglebar" class="flex border-b border-gray-100 bg-white flex-shrink-0 min-h-[42px]"></div>
      <div class="flex-1 overflow-auto" id="grade-grid-wrap"></div>
    </div>`),(I=document.getElementById("btn-grade-filter"))==null||I.addEventListener("click",()=>{var e,n;(e=document.getElementById("grade-filterbar"))==null||e.classList.toggle("hidden"),(n=document.getElementById("grade-filter-search"))==null||n.focus()}),(T=document.getElementById("grade-filter-search"))==null||T.addEventListener("input",e=>{gt=e.target.value,Te()}),(B=document.getElementById("grade-filter-completion"))==null||B.addEventListener("change",e=>{lt=e.target.value,Te()}),(S=document.getElementById("grade-filter-result"))==null||S.addEventListener("change",e=>{et=e.target.value,Te()}),(Y=document.getElementById("grade-filter-clear"))==null||Y.addEventListener("click",()=>{gt="",lt="all",et="all";const e=document.getElementById("grade-filter-search"),n=document.getElementById("grade-filter-completion"),l=document.getElementById("grade-filter-result");e&&(e.value=""),n&&(n.value="all"),l&&(l.value="all"),Te()}),(R=document.getElementById("btn-manage-cols"))==null||R.addEventListener("click",Sn),(F=document.getElementById("btn-copy-cols"))==null||F.addEventListener("click",()=>_s(r,f)),(ee=document.getElementById("btn-scan-score"))==null||ee.addEventListener("click",()=>{tn({classId:r.id,className:r.class_name})}),dt(),fe(),Te();let Ht=null;it=ds(e=>{!se.some(l=>Number(l.id)===Number(e.columnId))&&Number(e.classId)!==Number(X)||document.getElementById("grade-grid-wrap")&&(clearTimeout(Ht),Ht=setTimeout(()=>Ee(u,r),120))})}catch(X){y("โหลดข้อมูลไม่สำเร็จ: "+le(X),"error")}}async function _s(u,r){var T;y("กำลังโหลด...","info");const w=(await Promise.all((r??[]).filter(B=>B.id!==u.id).map(async B=>{const S=await he(B.id).catch(()=>[]);return S.length?{...B,cols:S}:null}))).filter(Boolean);if(!w.length){y("ไม่พบห้องอื่นที่มีคอลัมน์คะแนน","info");return}(T=document.getElementById("copy-cols-popup"))==null||T.remove();const I=document.createElement("div");I.id="copy-cols-popup",I.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",I.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
        <div class="text-3xl mb-2">📋</div>
        <h3 class="text-white font-bold text-base">สำเนาคอลัมน์คะแนน</h3>
        <p class="text-indigo-100 text-xs mt-1">เลือกห้องที่ต้องการคัดลอกคอลัมน์จาก</p>
      </div>
      <div class="p-5 space-y-2 max-h-72 overflow-y-auto">
        ${w.map(B=>{var S;return`
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${B.class_name}</p>
            <p class="text-xs text-gray-400">${((S=B.master_subjects)==null?void 0:S.subject_name)??""} · ${B.cols.length} คอลัมน์</p>
          </div>
          <button class="ccp-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            data-src="${B.id}">คัดลอก</button>
        </div>`}).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="ccp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
      </div>
    </div>`,document.body.appendChild(I),I.querySelector("#ccp-close").addEventListener("click",()=>I.remove()),I.querySelectorAll(".ccp-btn").forEach(B=>{B.addEventListener("click",async()=>{var R;const S=w.find(F=>F.id===parseInt(B.dataset.src));(R=document.getElementById("ccp-confirm"))==null||R.remove();const Y=document.createElement("div");Y.id="ccp-confirm",Y.className="fixed inset-0 z-[300] flex items-center justify-center p-6",Y.style.background="rgba(0,0,0,0.5)",Y.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">📋</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการ Mirror</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">
          คอลัมน์ของห้องนี้จะถูกทำให้เหมือน<br/>
          <span class="font-semibold text-indigo-700">${S.class_name}</span><br/>
          <span class="text-xs text-red-500">คอลัมน์ที่ต่างออกไปจะถูกลบหรือเพิ่ม/แก้ไข</span>
        </p>
        <div class="flex gap-3">
          <button id="ccp-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccp-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(Y),Y.querySelector("#ccp-conf-no").addEventListener("click",()=>Y.remove()),Y.querySelector("#ccp-conf-yes").addEventListener("click",async()=>{Y.remove(),B.disabled=!0,B.textContent="⏳";try{const F=await he(u.id).catch(()=>[]),ee=Object.fromEntries(S.cols.map(C=>[C.assignment_name,C])),X=Object.fromEntries(F.map(C=>[C.assignment_name,C]));for(const C of F)ee[C.assignment_name]||await st(C.id).catch(()=>{});for(const C of S.cols)X[C.assignment_name]?await Ae(X[C.assignment_name].id,{assignment_type:C.assignment_type,sheet_column:C.sheet_column??"",max_score:C.max_score,assignment_name:C.assignment_name}).catch(()=>{}):await Ie({class_id:u.id,assignment_name:C.assignment_name,assignment_type:C.assignment_type,sheet_column:C.sheet_column??"",max_score:C.max_score});y(`Mirror จาก ${S.class_name} สำเร็จ ✅`,"success"),I.remove(),Ee(window._currentGradeTeacher,u)}catch(F){y("Mirror ไม่สำเร็จ: "+le(F),"error"),B.disabled=!1,B.textContent="คัดลอก"}})})})}async function ks(u,r,w){var X;const I=w.filter(C=>C.course_id===u);if(!I.length){y("ยังไม่มีห้องเรียนในคอร์สนี้","warning");return}y("กำลังโหลด...","info");const T=I[0];let B=await he(T.id).catch(()=>[]);const S=()=>B.filter(C=>C.assignment_type==="midterm"||C.assignment_type==="กลางภาค"),Y=()=>B.filter(C=>C.assignment_type==="final"||C.assignment_type==="ปลายภาค");(X=document.getElementById("course-cols-modal"))==null||X.remove();const R=document.createElement("div");R.id="course-cols-modal",R.className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4";const F=C=>`
    <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/60">
      <input type="checkbox" class="ccm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-name="${J(C.assignment_name)}" />
      <span class="flex-1 text-xs text-gray-700 truncate">${C.assignment_name}</span>
      <span class="text-[11px] text-gray-400">/${C.max_score||0}</span>
      <button class="ccm-del text-gray-300 hover:text-red-400 text-lg px-1 rounded hover:bg-red-50 transition" data-name="${J(C.assignment_name)}">🗑</button>
    </div>`,ee=()=>{var g;R.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>
        <div class="px-5 py-4 border-b flex items-start justify-between gap-3 flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ คอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">${r} · sync ${I.length} ห้อง</p>
          </div>
          <button id="ccm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none flex-shrink-0">×</button>
        </div>

        <div class="overflow-auto flex-1 p-5 space-y-4">
          <!-- bulk bar -->
          <div id="ccm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="ccm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="ccm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>

          <div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค <span class="font-normal text-gray-400">(${S().length})</span></h4>
            <div class="space-y-1.5">${S().map(F).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition" data-type="กลางภาค">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค <span class="font-normal text-gray-400">(${Y().length})</span></h4>
            <div class="space-y-1.5">${Y().map(F).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition" data-type="ปลายภาค">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`;const C=(c,_)=>{var A;(A=document.getElementById("ccm-confirm"))==null||A.remove();const k=document.createElement("div");k.id="ccm-confirm",k.className="fixed inset-0 z-[300] flex items-center justify-center p-6",k.style.background="rgba(0,0,0,0.5)",k.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">🗑️</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">${c}</p>
        <div class="flex gap-3">
          <button id="ccm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบเลย</button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#ccm-conf-no").addEventListener("click",()=>k.remove()),k.querySelector("#ccm-conf-yes").addEventListener("click",()=>{k.remove(),_()})},O=async c=>{for(const _ of I){const k=await he(_.id).catch(()=>[]);for(const A of c){const f=k.find(W=>W.assignment_name===A);f&&await st(f.id).catch(()=>{})}}B=await he(T.id).catch(()=>[]),y(`ลบสำเร็จ — sync ทุก ${I.length} ห้องแล้ว ✅`,"success"),ee()},U=()=>{const c=[...R.querySelectorAll(".ccm-cb:checked")],_=R.querySelector("#ccm-bulk-bar");if(_){_.classList.toggle("hidden",!c.length);const k=_.querySelector("#ccm-bulk-count");k&&(k.textContent=`เลือก ${c.length} รายการ`)}};R.querySelector("#ccm-close").addEventListener("click",()=>R.remove()),R.querySelectorAll(".ccm-cb").forEach(c=>c.addEventListener("change",U)),(g=R.querySelector("#ccm-bulk-del"))==null||g.addEventListener("click",()=>{const _=[...R.querySelectorAll(".ccm-cb:checked")].map(k=>k.dataset.name);C(`ลบ ${_.length} คอลัมน์จากทุกห้อง?<br/><span class="font-semibold text-sm">${_.join(", ")}</span>`,()=>O(_))}),R.querySelectorAll(".ccm-del").forEach(c=>{c.addEventListener("click",()=>{C(`ลบ <span class="font-semibold">"${c.dataset.name}"</span> จากทุก ${I.length} ห้อง?`,()=>O([c.dataset.name]))})}),R.querySelectorAll(".ccm-add").forEach(c=>{c.addEventListener("click",()=>{var W,Z;const _=c.dataset.type;(W=document.getElementById("add-col-modal"))==null||W.remove();const k=!!(T!=null&&T.google_sheet_id),A=_==="ปลายภาค"?"purple":"blue",f=document.createElement("div");f.id="add-col-modal",f.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",f.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${_}</h3>
          <p class="text-xs text-gray-400 mb-4">จะเพิ่มใน <b>ทุก ${I.length} ห้อง</b> ของ ${r}</p>
          <div class="space-y-3">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
              <input id="acol2-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${A}-400"/></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
                <input id="acol2-max" type="number" min="1" value="20"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${A}-400"/></div>
              ${k?`<div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
                <input id="acol2-sheet" type="text" placeholder="EH"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${A}-400"/></div>`:'<input id="acol2-sheet" type="hidden" value=""/>'}
            </div>
            <div id="acol2-msg" class="hidden text-xs text-red-500"></div>
            <div class="flex gap-3 pt-1">
              <button id="acol2-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="acol2-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มทุกห้อง</button>
            </div>
          </div>
        </div>`,document.body.appendChild(f),(Z=f.querySelector("#acol2-sheet"))==null||Z.addEventListener("input",re=>{re.target.value=re.target.value.toUpperCase()}),f.querySelector("#acol2-cancel").addEventListener("click",()=>f.remove()),f.querySelector("#acol2-save").addEventListener("click",async()=>{var ue;const re=f.querySelector("#acol2-name").value.trim(),Se=parseFloat(f.querySelector("#acol2-max").value)||20,Re=(((ue=f.querySelector("#acol2-sheet"))==null?void 0:ue.value)??"").trim().toUpperCase()||null,de=f.querySelector("#acol2-msg");if(!re){de.textContent="กรุณาระบุชื่องาน",de.classList.remove("hidden");return}const be=f.querySelector("#acol2-save");be.disabled=!0,be.textContent="⏳ กำลังเพิ่ม...";try{for(const ve of I)(await he(ve.id).catch(()=>[])).some(Ke=>Ke.assignment_name===re)||await Ie({class_id:ve.id,assignment_name:re,assignment_type:_,sheet_column:Re??"",max_score:Se});f.remove(),y(`เพิ่ม "${re}" ใน ${I.length} ห้องแล้ว ✅`,"success"),B=await he(T.id).catch(()=>[]),ee()}catch(ve){de.textContent="เกิดข้อผิดพลาด: "+le(ve),de.classList.remove("hidden"),be.disabled=!1,be.textContent="เพิ่มทุกห้อง"}})})})};document.body.appendChild(R),ee()}function on(u,r,w){var Y,R;(Y=document.getElementById("add-col-modal"))==null||Y.remove();const I=r==="final"?"ปลายภาค":"กลางภาค",T=r==="final"?"purple":"blue",B=!!(u!=null&&u.google_sheet_id),S=document.createElement("div");S.id="add-col-modal",S.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",S.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${I}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${I}</b></p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${T}-400"/>
        <button type="button" id="acol-quick-adj" class="mt-1 text-xs text-teal-600 hover:text-teal-800 underline">⚡ ปรับคะแนนเก็บ (คะแนนเต็มกำหนดเอง)</button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${T}-400"/>
        </div>
        ${B?`
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${T}-400"/>
        </div>`:'<input id="acol-sheet" type="hidden" value=""/>'}
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`,document.body.appendChild(S),(R=S.querySelector("#acol-sheet"))==null||R.addEventListener("input",F=>{F.target.value=F.target.value.toUpperCase()}),S.querySelector("#acol-quick-adj").addEventListener("click",()=>{S.querySelector("#acol-name").value=`ปรับคะแนนเก็บ (${I})`;const F=S.querySelector("#acol-max");F.focus(),F.select()}),S.querySelector("#acol-cancel").addEventListener("click",()=>S.remove()),S.querySelector("#acol-save").addEventListener("click",async()=>{var U;const F=S.querySelector("#acol-name").value.trim(),ee=parseFloat(S.querySelector("#acol-max").value)||20,X=(((U=S.querySelector("#acol-sheet"))==null?void 0:U.value)??"").trim().toUpperCase()||null,C=S.querySelector("#acol-msg");if(!F){C.textContent="กรุณาระบุชื่องาน",C.classList.remove("hidden");return}const O=S.querySelector("#acol-save");O.disabled=!0,O.textContent="กำลังเพิ่ม...";try{await Ie({class_id:u.id,assignment_name:F,max_score:ee,sheet_column:X??"",assignment_type:r}),S.remove(),y(`เพิ่มคอลัมน์ "${F}" แล้ว`,"success"),w()}catch(g){C.textContent="เกิดข้อผิดพลาด: "+le(g),C.classList.remove("hidden"),O.disabled=!1,O.textContent="เพิ่มคอลัมน์"}})}async function ct(u){if(qt("requests"),Ct("คำร้องนักเรียน"),!u){je('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">🔔</p><p>กรุณาเข้าสู่ระบบ</p></div>');return}je(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const r=await Qn(u.id).catch(()=>[]),w=[{key:"pending",label:"รอดำเนินการ",cls:"text-amber-600"},{key:"approved",label:"อนุมัติแล้ว",cls:"text-emerald-600"},{key:"attended",label:"มาสอบแล้ว",cls:"text-blue-600"},{key:"absent",label:"ขาดสอบ/ผิดนัด",cls:"text-red-600"},{key:"rejected",label:"ปฏิเสธ",cls:"text-red-500"},{key:"all",label:"ทั้งหมด",cls:"text-gray-600"}];let I="pending",T=null,B=null;const S=(g,c)=>c==="all"?!0:c==="attended"?g.status==="approved"&&g.exam_attended===!0:c==="absent"?g.status==="approved"&&g.exam_attended===!1:g.status===c,Y=g=>r.filter(c=>S(c,g)).length,R=g=>{const c=new Map;return g.forEach(_=>{_.request_type&&c.set(_.request_type,(c.get(_.request_type)||0)+1)}),[...c.entries()].map(([_,k])=>({type:_,count:k})).sort((_,k)=>k.count-_.count)},F=g=>{const c=new Map;return g.forEach(_=>{const k=_.class_score_columns;k&&(c.has(k.id)||c.set(k.id,{id:k.id,name:k.assignment_name,count:0}),c.get(k.id).count++)}),[...c.values()].sort((_,k)=>k.count-_.count)},ee=g=>{if(!g)return"—";const c=new Date(g);return`${c.getDate()}/${c.getMonth()+1}/${c.getFullYear()+543}`},X=g=>{var re;const c=g.students,_=g.classes,k=g.class_score_columns,A=g.status==="approved"&&g.exam_attended==null,f=g.status==="approved"&&g.exam_attended===!0,W=g.status==="pending"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">⏳ รอดำเนินการ</span>':g.status==="approved"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ อนุมัติ</span>':'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">✕ ปฏิเสธ</span>',Z=g.exam_attended===!0?`<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">📝 มาสอบแล้ว${g.exam_score!=null?" · <b>"+g.exam_score+"</b> คะแนน":" (ยังไม่ได้ใส่คะแนน)"}</span>`:g.exam_attended===!1?'<span class="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">❌ ขาดสอบ/ผิดนัด</span>':"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4" id="req-card-${g.id}">
      <!-- Header -->
      <div class="flex items-start gap-3 mb-3">
        <div class="w-9 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-white/40 shadow-sm bg-gradient-to-tr from-indigo-300 to-purple-300
                    flex items-center justify-center text-white text-sm font-bold">
          ${c!=null&&c.image_url?`<img src="${c.image_url}" class="w-full h-full object-cover"/>`:((c==null?void 0:c.full_name)??"น").charAt(0)}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${(c==null?void 0:c.full_name)??"—"}</p>
          <p class="text-xs text-gray-400">${(c==null?void 0:c.student_code)??""} · ${(c==null?void 0:c.main_room)??""}</p>
        </div>
        ${W}
      </div>
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-600 mb-3">
        <div class="flex gap-2"><span class="text-gray-400 w-16">วิชา</span><span class="font-medium text-gray-800">${((re=_==null?void 0:_.master_subjects)==null?void 0:re.subject_name)??"—"} (${(_==null?void 0:_.class_name)??""})</span></div>
        <div class="flex gap-2"><span class="text-gray-400 w-16">ประเภท</span><span>${g.request_type}</span></div>
        ${k?`<div class="flex gap-2"><span class="text-gray-400 w-16">หัวข้อ</span><span>${k.assignment_name} (เต็ม ${k.max_score})</span></div>`:""}
        <div class="flex gap-2"><span class="text-gray-400 w-16">วันที่</span><span>${ee(g.requested_date)}${g.requested_period_no?" · คาบ "+g.requested_period_no:""}</span></div>
        ${g.reason?`<div class="flex gap-2"><span class="text-gray-400 w-16">เหตุผล</span><span>${g.reason}</span></div>`:""}
        ${g.teacher_comment?`<div class="flex gap-2"><span class="text-gray-400 w-16">หมายเหตุ</span><span class="${g.status==="rejected"?"text-red-600":"text-emerald-600"} font-medium">${g.teacher_comment}</span></div>`:""}
        ${Z?`<div class="mt-1">${Z}</div>`:""}
      </div>
      <!-- Actions -->
      ${g.status==="pending"?`
      <div class="flex gap-2">
        <button onclick="window._approveRequest(${g.id})"
          class="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition">
          ✅ อนุมัติ
        </button>
        <button onclick="window._rejectRequest(${g.id})"
          class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition">
          ✕ ปฏิเสธ
        </button>
      </div>`:""}
      ${A?`
      <div class="border-t border-gray-100 pt-3">
        <p class="text-xs text-gray-500 mb-2 font-medium">📋 บันทึกผลการสอบ</p>
        <div class="flex gap-2">
          <button onclick="window._markAttended(${g.id})"
            class="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
            📝 มาสอบแล้ว + ใส่คะแนน
          </button>
          <button onclick="window._markAbsent(${g.id}, ${(c==null?void 0:c.id)??"null"})"
            class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 text-xs font-semibold hover:bg-red-100 transition">
            ❌ ขาดสอบ/ผิดนัด
          </button>
        </div>
      </div>`:""}
      ${f?`
      <div class="border-t border-gray-100 pt-3 flex items-center justify-between">
        <p class="text-xs text-blue-600 font-medium">📝 มาสอบแล้ว${g.exam_score!=null?" · คะแนน "+g.exam_score:""}</p>
        <button onclick="window._markAttended(${g.id})"
          class="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition font-medium">
          ✏️ แก้ไขคะแนน
        </button>
      </div>`:""}
    </div>`},C=()=>{const g=r.filter(f=>S(f,I)),c=R(g);T&&!c.some(f=>f.type===T)&&(T=null);const _=T?g.filter(f=>f.request_type===T):g,k=F(_);B&&!k.some(f=>f.id===B)&&(B=null);const A=B?_.filter(f=>{var W;return((W=f.class_score_columns)==null?void 0:W.id)===B}):_;document.getElementById("req-type-filter").innerHTML=c.length>1?`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${T?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-purple-600 text-white border-purple-600"}"
        data-type="">ทุกประเภทการสอบ</button>
      ${c.map(f=>`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${T===f.type?"bg-purple-600 text-white border-purple-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-type="${f.type}">${f.type} (${f.count})</button>`).join("")}`:"",document.querySelectorAll(".req-type-tab").forEach(f=>{f.addEventListener("click",()=>{T=f.dataset.type||null,C()})}),document.getElementById("req-col-filter").innerHTML=k.length>1?`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${B?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-indigo-600 text-white border-indigo-600"}"
        data-col="">ทุกช่องคะแนน</button>
      ${k.map(f=>`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${B===f.id?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-col="${f.id}">${f.name} (${f.count})</button>`).join("")}`:"",document.querySelectorAll(".req-col-tab").forEach(f=>{f.addEventListener("click",()=>{B=f.dataset.col?Number(f.dataset.col):null,C()})}),document.getElementById("req-content").innerHTML=A.length?`<div class="space-y-3">${A.map(X).join("")}</div>`:`<div class="text-center py-16 text-gray-300">
          <p class="text-4xl mb-3">📭</p>
          <p class="text-sm">ไม่มีคำร้อง${I!=="all"?"ในสถานะนี้":""}${T?"ในประเภทนี้":""}${B?"ในช่องคะแนนนี้":""}</p>
        </div>`,document.querySelectorAll(".req-tab").forEach(f=>{const W=f.dataset.filter===I;f.className=`req-tab flex-1 py-2 text-xs font-medium rounded-lg transition
        ${W?"bg-white shadow text-indigo-700":"text-gray-500 hover:text-gray-700"}`})};je(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs text-gray-400">${r.length} รายการ</span>
    </div>
    <!-- Filter tabs -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-100 rounded-xl p-1 mb-4">
      ${w.map(g=>`
      <button class="req-tab flex-1 py-2 text-xs font-medium rounded-lg transition text-gray-500 hover:text-gray-700"
        data-filter="${g.key}">
        ${g.label}${Y(g.key)>0||g.key==="all"?` (${Y(g.key)})`:""}
      </button>`).join("")}
    </div>
    <!-- Filter by ประเภทการสอบ -->
    <div id="req-type-filter" class="flex flex-wrap gap-1.5 mb-3"></div>
    <!-- Filter by ช่องคะแนน -->
    <div id="req-col-filter" class="flex flex-wrap gap-1.5 mb-4"></div>
    <div id="req-content"></div>
  </div>`),document.querySelectorAll(".req-tab").forEach(g=>{g.addEventListener("click",()=>{I=g.dataset.filter,C()})}),C();const O=({title:g,body:c,confirmLabel:_,confirmCls:k="bg-emerald-600 hover:bg-emerald-700",onConfirm:A})=>{var W;(W=document.getElementById("req-modal"))==null||W.remove();const f=document.createElement("div");f.id="req-modal",f.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",f.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
        <div class="px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">${g}</h3>
        </div>
        <div class="px-5 py-4">${c}</div>
        <div class="px-5 pb-5 flex gap-2">
          <button id="req-modal-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="req-modal-confirm"
            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold ${k}">
            ${_}
          </button>
        </div>
      </div>`,document.body.appendChild(f),f.querySelector("#req-modal-cancel").addEventListener("click",()=>f.remove()),f.addEventListener("click",Z=>{Z.target===f&&f.remove()}),f.querySelector("#req-modal-confirm").addEventListener("click",()=>{A(f)})},U=async(g,c,_)=>{var A,f,W;const k=(A=g==null?void 0:g.students)==null?void 0:A.profile_id;if(k)try{const Z=((W=(f=g==null?void 0:g.classes)==null?void 0:f.master_subjects)==null?void 0:W.subject_name)??"วิชา";await dn.functions.invoke("send-push",{body:{title:`📋 คำร้องขอสอบ: ${c}`,body:`${Z}${_?" — "+_:""}`,url:"student.html",profileIds:[k]}})}catch{}};window._approveRequest=g=>{O({title:"✅ อนุมัติคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">หมายเหตุถึงนักเรียน <span class="text-gray-400">(ไม่บังคับ)</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="เช่น นัดสอบวันอังคาร คาบ 3 ห้องครู..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"></textarea>`,confirmLabel:"ยืนยันอนุมัติ",onConfirm:async c=>{const _=c.querySelector("#req-modal-comment").value.trim()||null;c.remove();try{await Jt(g,{status:"approved",teacher_comment:_}),y("อนุมัติคำร้องแล้ว ✅","success");const k=r.find(A=>A.id===g);k&&U(k,"อนุมัติแล้ว ✅",_),ct(u)}catch(k){y("ไม่สำเร็จ: "+le(k),"error")}}})},window._rejectRequest=g=>{O({title:"✕ ปฏิเสธคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">เหตุผลที่ปฏิเสธ <span class="text-red-500">*</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="กรุณาระบุเหตุผล..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"></textarea>
             <p class="text-xs text-red-400 mt-1">บังคับกรอกทุกครั้งที่ปฏิเสธ</p>`,confirmLabel:"ยืนยันปฏิเสธ",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async c=>{const _=c.querySelector("#req-modal-comment").value.trim();if(!_){y("กรุณาระบุเหตุผลก่อนปฏิเสธ","warning");return}c.remove();try{await Jt(g,{status:"rejected",teacher_comment:_}),y("บันทึกการปฏิเสธแล้ว","success");const k=r.find(A=>A.id===g);k&&U(k,"ถูกปฏิเสธ ✕",_),ct(u)}catch(k){y("ไม่สำเร็จ: "+le(k),"error")}}})},window._markAttended=async g=>{var rt,Ke,mt;const c=r.find(Q=>Number(Q.id)===Number(g)),_=(rt=c==null?void 0:c.students)==null?void 0:rt.id,k=(Ke=c==null?void 0:c.classes)==null?void 0:Ke.id,A=c==null?void 0:c.exam_score,f=A!=null;if(!_||!k){y("ไม่พบข้อมูลนักเรียนหรือห้องเรียนของคำร้องนี้","error");return}const W=String((c==null?void 0:c.request_type)??"").includes("ปรับคะแนน");let Z;try{Z=(await he(k)).filter(Q=>["regular","override"].includes(Q.column_type??"regular"))}catch(Q){y("โหลดคอลัมน์คะแนนไม่สำเร็จ: "+le(Q),"error");return}if(!Z.length){y("วิชานี้ยังไม่มีคอลัมน์คะแนนที่สามารถบันทึกได้","warning");return}const re=Number((mt=c==null?void 0:c.class_score_columns)==null?void 0:mt.id);if(!W){const Q=Z.find(oe=>Number(oe.id)===re);Q&&(Z=[Q])}const Se=Z.find(Q=>Number(Q.id)===re)??Z[0],Re=Z.map(Q=>`
      <option value="${Q.id}" data-max="${Number(Q.max_score??100)}"
        ${Number(Q.id)===Number(Se.id)?"selected":""}>
        ${Q.column_type==="override"?"🔄 ปรับคะแนน — ":""}${J(Q.assignment_name)} (เต็ม ${Number(Q.max_score??100)})
      </option>`).join("");O({title:f?"✏️ แก้ไขคะแนน":"📝 บันทึกผลการสอบ — มาสอบ",body:`<label class="block text-sm text-gray-600 mb-1.5">บันทึกลงคอลัมน์ <span class="text-red-500">*</span></label>
             <select id="req-modal-column" ${W?"":"disabled"}
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4">
               ${Re}
             </select>
             ${W?'<p class="text-xs text-blue-600 -mt-2 mb-4">เลือกคอลัมน์ที่จะรับคะแนนสอบปรับคะแนนครั้งนี้</p>':""}
             <label class="block text-sm text-gray-600 mb-1.5">คะแนนที่สอบได้ <span class="text-red-500">*</span> <span id="req-modal-max-label" class="text-gray-400">(เต็ม ${Number(Se.max_score??100)})</span></label>
             <input id="req-modal-score" type="number" min="0" max="${Number(Se.max_score??100)}" step="0.5"
               value="${f?A:""}"
               placeholder="0 – ${Number(Se.max_score??100)}"
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300" />`,confirmLabel:f?"บันทึกการแก้ไข":"บันทึกคะแนน",confirmCls:"bg-blue-600 hover:bg-blue-700",onConfirm:async Q=>{const oe=Q.querySelector("#req-modal-column"),Ne=Number(oe.value),Fe=oe.options[oe.selectedIndex],Ye=Number((Fe==null?void 0:Fe.dataset.max)??100),ut=Q.querySelector("#req-modal-score").value,Me=parseFloat(ut);if(isNaN(Me)||Me<0||Me>Ye){y(`คะแนนต้องอยู่ระหว่าง 0 – ${Ye}`,"warning");return}Q.remove();try{const se=await Zt(g,{exam_attended:!0,exam_score:Me,studentId:_,assignmentId:Ne});ls({classId:k,columnId:Ne,studentId:_,score:Me}),y(se!=null&&se.linkedColumnId?"บันทึกคะแนนปรับและอัปเดตคอลัมน์หลักแล้ว ✅":f?"แก้ไขคะแนนแล้ว ✅":"บันทึกผลสอบและคะแนนแล้ว ✅","success"),ct(u)}catch(se){y("ไม่สำเร็จ: "+le(se),"error")}}});const de=document.getElementById("req-modal"),be=de==null?void 0:de.querySelector("#req-modal-column"),ue=de==null?void 0:de.querySelector("#req-modal-score"),ve=de==null?void 0:de.querySelector("#req-modal-max-label");be==null||be.addEventListener("change",()=>{const Q=be.options[be.selectedIndex],oe=Number((Q==null?void 0:Q.dataset.max)??100);ue.max=String(oe),ue.placeholder=`0 – ${oe}`,ve.textContent=`(เต็ม ${oe})`,ue.value!==""&&Number(ue.value)>oe&&(ue.value="")})},window._markAbsent=(g,c)=>{const _=r.filter(k=>{var A;return((A=k.students)==null?void 0:A.id)===c&&k.exam_attended===!1}).length;O({title:"❌ ขาดสอบ / ผิดนัด",body:`<p class="text-sm text-gray-600 mb-2">ยืนยันว่านักเรียนไม่มาสอบตามนัด?</p>
             ${_>=1?`<div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                    ⚠️ นักเรียนผิดนัดมาแล้ว <b>${_}</b> ครั้ง
                    ${_+1>=2?"<br/>หากยืนยัน จะครบ 2 ครั้ง — <b>นักเรียนจะไม่สามารถยื่นคำร้องได้อีก</b>":""}
                  </div>`:""}`,confirmLabel:"ยืนยัน — ขาดสอบ/ผิดนัด",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async k=>{k.remove();try{await Zt(g,{exam_attended:!1,exam_score:null}),y("บันทึกว่าขาดสอบ/ผิดนัดแล้ว","success"),ct(u)}catch(A){y("ไม่สำเร็จ: "+le(A),"error")}}})}}const Bs=Object.freeze(Object.defineProperty({__proto__:null,_openCourseColsModal:ks,renderGrades:un,renderGradesGrid:Ee,renderRequests:ct},Symbol.toStringTag,{value:"Module"}));export{ks as _,Ee as a,ct as b,ls as p,un as r,Bs as t};
