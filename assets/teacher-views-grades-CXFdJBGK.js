import{getScoreColumns as ve,getClassStudents as mn,getStudentScores as xt,getSheetColumnOptionsForTypes as un,getSystemConfig as xn,getMyClasses as pn,createScoreColumn as je,getLifeSkillColumns as bn,fillPrayerScoresForReligionClass as gn,syncAutoAttendanceScoreColumns as fn,getReadingScoreColumns as yn,getReadingScores as hn,getClassScoreRounding as vn,detectAssignmentKind as wn,updateScoreColumn as Ne,exportClassGradesToGradeOnline as $n,saveClassScoreRounding as _n,updateColumnSortOrders as kn,setColumnAutoAttendanceSync as En,deleteScoreColumn as Xe,saveStudentScore as pt,applyScoreOverride as Sn,updateClassStudentSpecialResult as qn,getTeacherExamRequests as Cn,reviewExamRequest as At,updateExamResult as Rt}from"./api-CWYJTdOa.js";import{s as Ln,i as Ft,a as In,b as jn,e as dt,n as Gt,c as Mn}from"./score-display-CQ4dUIPx.js";import{g as Nn,K as Tn}from"./regrade-api-JnlABjxU.js";import{a as y,g as oe}from"./ui-MMtcTwtt.js";import{s as Bn}from"./supabase-BV-W2lsh.js";import{i as An}from"./skill-groups-BY1NTbf4.js";import{openScoreScanner as Ot}from"./score-qr-scanner-CfDHgG4i.js";import{setActiveNav as gt,setTitle as ft,setContent as Je,applyReadingGradesFromConfig as Rn,_readingGrade as Fn,_htmlEsc as Y}from"./teacher-views-utils-bZoYj54P.js";const bt="pp5:gradebook-updated",Vt="pp5_gradebook_update",Gn="pp5-gradebook-sync-v1";let Ce=null;try{Ce=new BroadcastChannel(Gn)}catch{}function On(u){const o={...u,eventId:`${Date.now()}-${Math.random().toString(36).slice(2)}`,updatedAt:new Date().toISOString()};window.dispatchEvent(new CustomEvent(bt,{detail:o}));try{Ce==null||Ce.postMessage(o)}catch{}try{localStorage.setItem(Vt,JSON.stringify(o))}catch{}return o}function Hn(u){const o=new Set,w=E=>{!(E!=null&&E.eventId)||o.has(E.eventId)||(o.add(E.eventId),o.size>100&&o.delete(o.values().next().value),u(E))},L=E=>w(E.detail),A=E=>w(E.data),B=E=>{if(!(E.key!==Vt||!E.newValue))try{w(JSON.parse(E.newValue))}catch{}};return window.addEventListener(bt,L),Ce==null||Ce.addEventListener("message",A),window.addEventListener("storage",B),()=>{window.removeEventListener(bt,L),Ce==null||Ce.removeEventListener("message",A),window.removeEventListener("storage",B)}}const Ht=new TextEncoder;function Kt(u){return String(u??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function zn(u){let o="";for(let w=u+1;w>0;w=Math.floor((w-1)/26))o=String.fromCharCode(65+(w-1)%26)+o;return o}function Un(u,o){if(o==null||o==="")return"";if(typeof o=="number"&&Number.isFinite(o))return`<c r="${u}"><v>${o}</v></c>`;const w=String(o),L=/^\s|\s$/.test(w)?' xml:space="preserve"':"";return`<c r="${u}" t="inlineStr"><is><t${L}>${Kt(w)}</t></is></c>`}function Pn(u){const o=u.map((L,A)=>{const B=L.map((E,P)=>Un(`${zn(P)}${A+1}`,E)).join("");return`<row r="${A+1}">${B}</row>`}).join("");return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="A1:E${Math.max(u.length,1)}"/>
  <sheetViews><sheetView workbookViewId="0" showGridLines="1"/></sheetViews>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="34" customWidth="1"/>
    <col min="4" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>${o}</sheetData>
  <pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/>
</worksheet>`}function Vn(u){return(String(u??"").replace(/[\\/?*\[\]:]/g,"").trim()||"GradeOnline").slice(0,31)}function zt(u){return String(u??"").replace(/[\\/:*?"<>|]/g,"-").trim()||"GradeOnline"}function X(u,o,w){u.setUint16(o,w,!0)}function pe(u,o,w){u.setUint32(o,w>>>0,!0)}const Kn=(()=>{const u=new Uint32Array(256);for(let o=0;o<256;o++){let w=o;for(let L=0;L<8;L++)w=w&1?3988292384^w>>>1:w>>>1;u[o]=w>>>0}return u})();function Wn(u){let o=4294967295;for(const w of u)o=Kn[(o^w)&255]^o>>>8;return(o^4294967295)>>>0}function Ut(u){const o=u.reduce((A,B)=>A+B.length,0),w=new Uint8Array(o);let L=0;for(const A of u)w.set(A,L),L+=A.length;return w}function Qn(u){const o=[],w=[];let L=0;for(const P of u){const U=Ht.encode(P.name),R=Ht.encode(P.content),J=Wn(R),te=new Uint8Array(30+U.length+R.length),I=new DataView(te.buffer);pe(I,0,67324752),X(I,4,20),X(I,6,0),X(I,8,0),X(I,10,0),X(I,12,0),pe(I,14,J),pe(I,18,R.length),pe(I,22,R.length),X(I,26,U.length),X(I,28,0),te.set(U,30),te.set(R,30+U.length),o.push(te);const ne=new Uint8Array(46+U.length),K=new DataView(ne.buffer);pe(K,0,33639248),X(K,4,20),X(K,6,20),X(K,8,0),X(K,10,0),X(K,12,0),X(K,14,0),pe(K,16,J),pe(K,20,R.length),pe(K,24,R.length),X(K,28,U.length),X(K,30,0),X(K,32,0),X(K,34,0),X(K,36,0),pe(K,38,0),pe(K,42,L),ne.set(U,46),w.push(ne),L+=te.length}const A=Ut(w),B=new Uint8Array(22),E=new DataView(B.buffer);return pe(E,0,101010256),X(E,4,0),X(E,6,0),X(E,8,u.length),X(E,10,u.length),pe(E,12,A.length),pe(E,16,L),X(E,20,0),Ut([...o,A,B])}function Xn({subjectName:u,className:o,records:w}){const A=[["เลขที่","รหัสนักเรียน","ชื่อ-สกุล","คะแนนรวม","เกรด"],...w.map((J,te)=>[te+1,String(J.studentCode??""),String(J.studentName??""),J.total===""||J.total==null?"":Number(J.total),String(J.grade??"")])],B=Vn(u||o||"GradeOnline"),E=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="${Kt(B)}" sheetId="1" r:id="rId1"/></sheets>
</workbook>`,P=[{name:"[Content_Types].xml",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`},{name:"_rels/.rels",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`},{name:"xl/workbook.xml",content:E},{name:"xl/_rels/workbook.xml.rels",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`},{name:"xl/worksheets/sheet1.xml",content:Pn(A)}],U=new Blob([Qn(P)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),R=document.createElement("a");R.href=URL.createObjectURL(U),R.download=`GradeOnline-${zt(u||"รายวิชา")}-${zt(o||"ห้องเรียน")}.xlsx`,R.click(),setTimeout(()=>URL.revokeObjectURL(R.href),1e3)}function Jn(){gt("grades"),ft("บันทึกคะแนน","scores"),Je(`<div class="text-center py-20 text-gray-400">
    <p class="text-5xl mb-4">📝</p>
    <p class="font-medium text-gray-600">เลือกห้องเรียนจากเมนู "ห้องเรียนของฉัน"</p>
    <p class="text-sm mt-2">แล้วกดปุ่ม 📝 คะแนน ที่การ์ดห้องเรียน</p>
  </div>`)}let De=null;function Yn(u){return u>=80?4:u>=75?3.5:u>=70?3:u>=65?2.5:u>=60?2:u>=55?1.5:u>=50?1:0}function Zn(u){return u>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:u>=2.5?{label:"ดี",cls:"text-blue-600"}:u>=1?{label:"ผ่าน",cls:"text-amber-500"}:{label:"ไม่ผ่าน",cls:"text-red-600"}}function Dn(u,o,w){if(w)return{allowed:!0,claimedRoom:null};let L=null;try{L=localStorage.getItem(`pp5_gradeonline_room_${u}`)}catch{}return!L||L===o?{allowed:!0,claimedRoom:L}:{allowed:!1,claimedRoom:L}}function es(u,o){try{localStorage.setItem(`pp5_gradeonline_room_${u}`,o)}catch{}}function ts(u,o){var L;(L=document.getElementById("gol-room-paywall"))==null||L.remove();const w=document.createElement("div");w.id="gol-room-paywall",w.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",w.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative">
      <button id="gol-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์ส่งคะแนนเข้า GradeOnline ใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${Y(u)}</b> ไว้แล้ว
        ${o?`<br><br>ต้องการใช้กับห้อง <b>${Y(o)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ (สรุปเกรดเข้าระบบแก้ค้างเก่ายังส่งได้ตามปกติ)
      </p>
      <button id="gol-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(w),w.querySelector("#gol-pw-close").addEventListener("click",()=>w.remove()),w.querySelector("#gol-pw-donate").addEventListener("click",()=>{var A;w.remove(),(A=document.getElementById("btn-donate-float"))==null||A.click()})}function ns(u,o){var A;(A=document.getElementById("gol-result-modal"))==null||A.remove();const w=document.createElement("div");w.id="gol-result-modal",w.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",w.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📤 ส่งคะแนนเข้า GradeOnline</h3>
        <button id="gol-result-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-4 space-y-4 text-sm text-gray-600">
        <p class="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">เตรียมคะแนนไว้แล้ว ${o} คน — ใช้รหัสด้านล่างตอนกดปุ่มบุ๊กมาร์กในหน้า GradeOnline</p>
        <div class="text-center bg-gray-50 rounded-xl py-3">
          <p class="text-[11px] text-gray-400 mb-1">รหัสอ้างอิง</p>
          <p class="text-2xl font-mono font-bold tracking-widest text-indigo-700">${Y(u)}</p>
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
    </div>`,document.body.appendChild(w);const L=()=>w.remove();w.querySelector("#gol-result-close").onclick=L,w.onclick=B=>{B.target===w&&L()}}async function qe(u,o){var L,A,B,E;De==null||De(),De=null,window._currentGradeTeacher=u,gt("grades"),ft("บันทึกคะแนน","scores");const w=o.master_subjects;Je(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`);try{const P=o.source_class_id??o.id,U=ve(P),[R,J,te,[I,ne,K],b,g,C]=await Promise.all([mn(o.id),U,U.then(e=>xt(P,e)),un(o.id,["กลางภาค","ปลายภาค","ระหว่างเรียน"]),xn().catch(()=>({})),u?pn(u.id).catch(()=>[]):Promise.resolve([]),Nn().catch(()=>({}))]),S=!!C.live_submit_open_date&&new Date().toISOString().slice(0,10)>=C.live_submit_open_date;Rn(b),o.course_id&&J.length===0&&setTimeout(async()=>{var e;try{const n=g.filter(d=>d.id!==o.id&&d.course_id===o.course_id),c=(await Promise.all(n.map(async d=>{const v=await ve(d.id).catch(()=>[]);return v.length?{...d,cols:v}:null}))).filter(Boolean);if(!c.length)return;(e=document.getElementById("grade-same-subj-popup"))==null||e.remove();const x=document.createElement("div");x.id="grade-same-subj-popup",x.className="fixed inset-0 z-[190] flex items-center justify-center p-6",x.style.background="rgba(0,0,0,0.45)",x.innerHTML=`
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
                <div class="text-3xl mb-2">📋</div>
                <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
                <p class="text-indigo-100 text-xs mt-1">ยังไม่มีคอลัมน์คะแนน — ต้องการคัดลอกจากห้องที่มีอยู่แล้วไหม?</p>
              </div>
              <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
                ${c.map(d=>`
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
            </div>`,document.body.appendChild(x),x.querySelector("#grade-ssp-close").addEventListener("click",()=>x.remove()),x.querySelectorAll(".grade-copy-cols").forEach(d=>{d.addEventListener("click",async()=>{const v=c.find(h=>h.id===parseInt(d.dataset.src));d.disabled=!0,d.textContent="⏳";try{for(const h of v.cols)await je({class_id:o.id,assignment_name:h.assignment_name,assignment_type:h.assignment_type,sheet_column:h.sheet_column??"",max_score:h.max_score});y(`คัดลอก ${v.cols.length} คอลัมน์จาก ${v.class_name} ✅`,"success"),x.remove(),qe(u,o)}catch(h){y("คัดลอกไม่สำเร็จ: "+oe(h),"error"),d.disabled=!1,d.textContent="คัดลอก"}})})}catch{}},600);const z=parseInt(b.academicYear??2568),k=parseInt(b.semester??1),Q=(w==null?void 0:w.subject_group)??"",se=An(o==null?void 0:o.skill_group),le=["AGM","AGMVOC"].includes(Q);let Ee=te,Se=[];se?Se=(await bn(o.academic_year??z,o.semester??k,"สามัญ")).slice(0,3).map(n=>n.name):le&&(Se=(await gn(o.id,{semesterStart:b.semester_start,semesterEnd:b.semester_end,attendanceScoreMode:b.attendanceScoreMode??"recorded"})).columnNames??["คะแนนมาเรียน","คะแนนละหมาด"],Ee=await xt(o.id));try{const e=await fn(o.id,{attendanceScoreMode:b.attendanceScoreMode??"recorded"});e.columns>0&&(Ee=await xt(o.id),e.skipped>0&&y(`ดึงคะแนนมาเรียนอัตโนมัติแล้ว (ข้าม ${e.skipped} รายการที่เคยแก้คะแนนด้วยมือ)`,"success"))}catch(e){console.error("syncAutoAttendanceScoreColumns failed",e)}let D=[],ce=[];try{D=await yn(z,k),ce=D.length?await hn(D.map(e=>e.id),R.map(e=>e.id)):[],D.length?ce.length||y(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนห้องนี้ ภาค ${k}/${z}`,"warning"):y(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ ภาค ${k}/${z}`,"warning")}catch(e){console.error("load reading evaluation failed",e),y(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${oe(e)}`,"error")}const be={};for(const e of ce)be[e.student_id]=(be[e.student_id]??0)+(parseFloat(e.score)||0);const Le={},Oe=D.reduce((e,n)=>e+(parseFloat(n.max_score)||0),0);for(const[e,n]of Object.entries(be)){const c=Oe>0?n/Oe*100:0,x=Fn(c);Le[parseInt(e)]={score100:c,label:x.label,cls:x.cls}}let re=Se.length?await ve(P):J;if(re.length===0){const e=(n,c)=>je({class_id:o.id,assignment_name:`คะแนนที่ ${c}`,max_score:20,assignment_type:n,sheet_column:""});for(let n=1;n<=5;n++)await e("midterm",n);for(let n=1;n<=5;n++)await e("final",n);re=await ve(o.id)}re=Ln(re,Se);const tt=new Set(Se.length?re.filter(e=>Se.includes(e.assignment_name)).map(e=>e.id):[]),j=e=>{const n=typeof e=="object"?e==null?void 0:e.id:e;return tt.has(n)},xe=e=>e.assignment_name==="คะแนนละหมาด"?`คะแนนระบบกลาง (แก้ไขไม่ได้)
คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา
หากคะแนนว่าง = ครูที่ปรึกษาศาสนายังไม่ได้บันทึกในสัปดาห์นั้น`:"คะแนนระบบกลาง: แก้ไขไม่ได้",Z=re.filter(Ft),me=re.filter(e=>e.column_type==="derived"),ae=re.filter(e=>e.column_type==="override"),nt=re.filter(In),Ie=re.filter(e=>(e.column_type??"regular")==="regular"&&!Ft(e)),ge=Object.fromEntries(re.map(e=>[e.id,e])),G=Ie.filter(e=>e.assignment_type!=="final"&&e.assignment_type!=="ปลายภาค"),O=Ie.filter(e=>e.assignment_type==="final"||e.assignment_type==="ปลายภาค"),Te=jn(Z),yt=`gradeToggles_${(u==null?void 0:u.id)??"guest"}_${o.id}`,Be=(()=>{try{return JSON.parse(localStorage.getItem(yt)??"{}")}catch{return{}}})(),it=()=>{try{localStorage.setItem(yt,JSON.stringify({columnRoundSettings:Ae,toggleForceGrade:Ue,toggleKhuna:Ge,toggleRead:Pe,showBonusCols:de,toggleScoreColors:Ye}))}catch{}};let de=Be.showBonusCols??!1,He=!1;const F={};for(const e of Ee)F[e.student_id]||(F[e.student_id]={}),F[e.student_id][e.score_column_id]={orig:e.original_score,retake:e.retake_score,final:e.final_score??e.original_score,history:e.score_history??[]};for(const e of R)e.special_result&&(F[e.id]||(F[e.id]={}),F[e.id].__force=e.special_result);const we=(e,n)=>{var c,x,d,v;return((x=(c=F[e])==null?void 0:c[n])==null?void 0:x.final)??((v=(d=F[e])==null?void 0:d[n])==null?void 0:v.orig)??null},Wt=(e,n)=>{if(n.column_type==="derived")return!0;const c=we(e,n.id);return c!==null&&c!==""&&Number.isFinite(Number(c))},Qt=e=>nt.length>0&&nt.every(n=>Wt(e,n)),st=(e,n)=>{var c,x,d;return(((d=(x=(c=F[e])==null?void 0:c[n])==null?void 0:x.history)==null?void 0:d.length)??0)>1},os=(e,n)=>n.reduce((c,x)=>c+(parseFloat(we(e,x.id))||0),0),ze=e=>e.reduce((n,c)=>n+(parseFloat(c.max_score)||0),0),Xt=(e,n)=>{const c=parseFloat(we(e,n.id))||0;if(!n.bonus_formula)return c;const x=Object.fromEntries(Te.map(v=>[v.var,parseFloat(we(e,v.id))||0])),d=dt(n.bonus_formula,x)??0;return n.max_score?Math.min(c+d,n.max_score):c+d},ht=(e,n)=>n.reduce((c,x)=>c+Xt(e,x),0),vt=(e,n)=>{if(!e.formula)return 0;const c={};for(const x of e.formula_refs??[])c[x.var]=parseFloat(we(n,x.col_id))||0;return dt(e.formula,c)??0};let ct=!1;const Jt=await vn(o.id).catch(()=>(ct=!0,null));let Ae=Gt(Jt??Be.columnRoundSettings??{total:Be.toggleRound??!0}),Re=Ae.forcedGradeColor==="black"?"black":"red";const rt=e=>!!Ae[e],Fe=(e,n)=>{if(n===""||n==null)return n??"";if(!rt(e))return n;const c=parseFloat(n);return Number.isFinite(c)?Math.round(c):n},fe=(e,n,c=1)=>rt(e)?Math.round(n):Number(n.toFixed(c));let Ue=Be.toggleForceGrade??!1,Ge=Be.toggleKhuna??!0,Pe=Be.toggleRead??!0,Ye=Be.toggleScoreColors??!1;const Yt=["0","ร","มส","มผ"],Zt=b.forceGradeOptions?String(b.forceGradeOptions).split(",").map(e=>e.trim()).filter(Boolean):Yt,Ze=(e,n)=>{if(!Ye||n===""||n==null||!Number.isFinite(Number(n))||!(Number(e.max_score)>0))return"";const c=Math.max(0,Math.min(1,Number(n)/Number(e.max_score))),x=Math.round(c*120);return`background-color:hsl(${x} 72% 88%);color:hsl(${x} 55% 24%);`},Dt=(e,n,c)=>{const x=e==null?void 0:e.closest("td");x&&(x.style.cssText=`width:${x.offsetWidth||V}px;min-width:${V}px;height:30px;${Ze(n,c)}`)},Me=e=>{const n=ze(G),c=ze(O),x=me.reduce((p,s)=>p+(parseFloat(s.max_score)||0),0),d=ht(e,G),v=ht(e,O),h=me.reduce((p,s)=>p+(vt(s,e)||0),0),f=n+c+x,t=d+v+h,r=fe("total",t,1),_=Mn(Ae,t),$=f>0?_/f*100:0,T=Yn($),a=Zn(T);return{midRaw:d,finRaw:v,pct:$,total:r,grade:T,khuna:a}},wt=()=>{const e=[];return{records:R.map(c=>{var t;const{pct:x,grade:d}=Me(c.id),v=((t=F[c.id])==null?void 0:t.__force)||"",h=String(v).trim(),f=h!==""&&Number.isFinite(Number(h));return!Qt(c.id)&&(!h||f)?(e.push(c),null):{studentCode:c.student_code,studentName:c.full_name,total:h&&!f?"":Math.round(x*10)/10,grade:v||(d>0?String(d):"0")}}).filter(Boolean),incomplete:e}},$t="sticky left-0 z-20 bg-white border border-gray-200",ot="sticky z-20 bg-white border border-gray-200",W="border border-gray-200 text-center text-xs",_t=160,V=76,Ve=(e,n,c,x="bg-emerald-500 text-white shadow-sm",d="bg-gray-100 text-gray-500 hover:bg-gray-200")=>`<button class="grade-toggle text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all select-none whitespace-nowrap ${c?x:d}"
        data-toggle="${e}">${n}</button>`,en=(e,n)=>{if(j(n)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}const c=[...G,...O].find(s=>s.id===n),x=(c==null?void 0:c.assignment_type)==="final",d=wn((c==null?void 0:c.assignment_name)||""),v=d==="กลางภาค"||d==="ปลายภาค"||d==="สอบปรับ";let h;v&&x?h=ne:v&&!x?h=I:h=K.cols.length>0?K:x?ne:I;const f=h.cols,t=h.isFixed;if(document.querySelectorAll(".sheet-col-popup").forEach(s=>s.remove()),t&&f.length===1){const s=f[0];if(e.textContent.trim()!==s){Ne(n,{sheet_column:s}).catch(()=>{}),e.textContent=s;const l=[...G,...O].find(m=>m.id===n);l&&(l.sheet_column=s)}return}const r=e.getBoundingClientRect(),_=e.textContent.trim(),$=document.createElement("div");$.className="sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",$.style.cssText=`top:${r.bottom+4}px;left:${Math.max(4,r.left-20)}px;min-width:${f.length>0?220:180}px`;const T=(c==null?void 0:c.assignment_name)||(x?"ปลายภาค":"กลางภาค");$.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${T}</span>
          ${t?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':""}</p>
        ${f.length>0?`
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${f.map(s=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${s===_?"border-blue-500 bg-blue-50 text-blue-700 font-bold":"border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"}"
            data-val="${s}" >${s}</button>`).join("")}
        </div>`:""}
        ${t?`<input id="scp-inp" type="hidden" value="${f[0]||_}"/>`:`<input id="scp-inp" type="text" value="${_==="—"?"":_}" placeholder="${f.length>0?"หรือพิมพ์เอง...":"เช่น EK"}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild($);const a=$.querySelector("#scp-inp");a.focus(),a.select(),a.addEventListener("input",s=>{s.target.value=s.target.value.toUpperCase()}),$.querySelectorAll(".scp-opt").forEach(s=>{s.addEventListener("click",()=>{a.value=s.dataset.val,$.querySelectorAll(".scp-opt").forEach(l=>{l.className=l.className.replace("border-blue-500 bg-blue-50 text-blue-700 font-bold","border-gray-200 text-gray-600")}),s.className=s.className.replace("border-gray-200 text-gray-600","border-blue-500 bg-blue-50 text-blue-700 font-bold")})});const p=async()=>{const s=a.value.trim().toUpperCase()||null;try{await Ne(n,{sheet_column:s}),e.textContent=s||"—";const l=[...G,...O].find(m=>m.id===n);l&&(l.sheet_column=s),$.remove()}catch{y("บันทึกไม่สำเร็จ","error")}};a.addEventListener("keydown",s=>{s.key==="Enter"&&p()}),$.querySelector("#scp-save").addEventListener("click",p),$.querySelector("#scp-cancel").addEventListener("click",()=>$.remove()),setTimeout(()=>{const s=l=>{!$.contains(l.target)&&l.target!==e&&($.remove(),document.removeEventListener("click",s))};document.addEventListener("click",s)},100)},tn=(e,n)=>{if(j(n)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}document.querySelectorAll(".max-score-popup").forEach(f=>f.remove());const c=[...G,...O].find(f=>f.id===n),x=e.getBoundingClientRect(),d=document.createElement("div");d.className="max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",d.style.cssText=`top:${x.bottom+4}px;left:${Math.max(4,x.left-20)}px;min-width:160px`,d.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${(c==null?void 0:c.max_score)||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(d);const v=d.querySelector("#msp-inp");v.focus(),v.select();const h=async()=>{const f=Math.max(1,parseFloat(v.value)||1);try{await Ne(n,{max_score:f}),c&&(c.max_score=f),d.remove(),ye()}catch{y("บันทึกไม่สำเร็จ","error")}};v.addEventListener("keydown",f=>{f.key==="Enter"&&h()}),d.querySelector("#msp-save").addEventListener("click",h),d.querySelector("#msp-cancel").addEventListener("click",()=>d.remove()),setTimeout(()=>{const f=t=>{!d.contains(t.target)&&t.target!==e&&(d.remove(),document.removeEventListener("click",f))};document.addEventListener("click",f)},100)},nn=(e,n,c)=>{var T;(T=document.getElementById("sg-detail-modal"))==null||T.remove();const{midRaw:x,finRaw:d,total:v,grade:h,khuna:f}=c,t=ze(G),r=ze(O),_=a=>{var l,m;const p=((l=n[a.id])==null?void 0:l.final)??((m=n[a.id])==null?void 0:m.orig)??null,s=p!=null&&a.max_score>0?(p/a.max_score*100).toFixed(0):"—";return`<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${a.assignment_name||"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${p??"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${a.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${s}%</td>
        </tr>`},$=document.createElement("div");$.id="sg-detail-modal",$.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",$.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${e.image_url?`<img src="${e.image_url}" class="w-9 h-11 rounded-lg object-cover border border-gray-200 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${e.full_name}</p>
            <p class="text-xs text-gray-400">${e.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${h>0?h.toFixed(1):"0"}</p>
            <p class="text-xs font-medium ${f.cls}">${f.label}</p>
          </div>
          <button id="sg-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-4 space-y-4">
          ${G.length>0?`<div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-blue-100">
              <thead><tr class="bg-blue-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${G.map(_).join("")}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${fe("mid_subtotal",x,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${t}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${t>0?(x/t*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          ${O.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${O.map(_).join("")}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${fe("fin_subtotal",d,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${r}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${r>0?(d/r*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${v>0?v:"—"}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${h>0?h.toFixed(1):"0"}
              <span class="text-sm font-semibold ${f.cls}"> — ${f.label}</span></p>
          </div>
        </div>
      </div>`,document.body.appendChild($),$.querySelector("#sg-close").addEventListener("click",()=>$.remove()),$.addEventListener("click",a=>{a.target===$&&$.remove()})},at=()=>{var n,c,x,d;const e=document.getElementById("grade-togglebar");e&&(e.innerHTML=`
        <div class="flex items-center gap-1.5 px-3 py-2 ml-auto flex-wrap justify-end">
          <button id="btn-round-settings" type="button" class="text-[11px] px-3 py-1.5 rounded-lg font-semibold transition bg-gray-100 text-gray-500 hover:bg-gray-200">🔢 ปัดเลข</button>
          ${Ve("khuna","คุณลักษณะ",Ge)}
          ${Ve("read","การอ่าน",Pe)}
          ${Ve("scoreColors","🎨 จัดสีช่องคะแนน",Ye,"bg-emerald-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          ${Ve("forceGrade","บังคับเกรด",Ue,"bg-rose-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
          ${Ve("bonus","⭐ คะแนนเก็บ/พิเศษ",de,"bg-amber-500 text-white shadow-sm","bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100")}
          ${de&&Z.length?Ve("formula-link","🔗 เชื่อมสูตร",He,"bg-violet-500 text-white shadow-sm","bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100"):""}
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          <button id="btn-export-gradeonline-excel" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 text-white shadow-sm hover:bg-teal-700 transition">
            📥 ดาวน์โหลด Excel GradeOnline
          </button>
          ${S?`
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          <button id="btn-submit-regrade" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-600 text-white shadow-sm hover:bg-pink-700 transition">
            📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า
          </button>
          <button id="btn-export-gradeonline" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 text-white shadow-sm hover:bg-purple-700 transition">
            📤 ส่งคะแนนเข้า GradeOnline
          </button>`:""}
        </div>`,(n=document.getElementById("btn-submit-regrade"))==null||n.addEventListener("click",async()=>{const v=document.getElementById("btn-submit-regrade"),h=R.map(f=>{var $;const{grade:t}=Me(f.id),_=((($=F[f.id])==null?void 0:$.__force)??"")||(t===0?"0":"");return _?{student_id:f.id,grade_failed_at:_}:null}).filter(Boolean);if(!h.length){y("ไม่มีนักเรียนติดในห้องนี้ตอนนี้","info");return}if(confirm(`พบนักเรียนติด ${h.length} คนในห้องนี้ ยืนยันส่งเข้าระบบแก้ค้างเก่าเลยไหม? (รายชื่อที่เคยส่งไปแล้วจะไม่ถูกส่งซ้ำ)`)){v.disabled=!0,v.textContent="กำลังส่ง...";try{const f=await Tn(o.id,h);y(`ส่งสำเร็จ ✅ พบติด ${f.total_failing} คน — เพิ่มเข้าระบบใหม่ ${f.submitted} คน (ที่เหลือมีอยู่แล้ว)`,"success")}catch(f){y("ส่งไม่สำเร็จ: "+oe(f),"error")}finally{v.disabled=!1,v.textContent="📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า"}}}),(c=document.getElementById("btn-export-gradeonline-excel"))==null||c.addEventListener("click",()=>{const v=document.getElementById("btn-export-gradeonline-excel"),{records:h,incomplete:f}=wt();if(f.length){const t=f.slice(0,3).map(r=>r.full_name).join(", ");y(`ยังมีนักเรียนกรอกคะแนนไม่ครบ ${f.length} คน${t?` เช่น ${t}`:""} — กรุณากรอกให้ครบก่อนส่งออก`,"error");return}if(!h.length){y("ยังไม่มีข้อมูลคะแนนที่พร้อมส่งออก","error");return}v.disabled=!0;try{Xn({subjectName:w==null?void 0:w.subject_name,className:o.class_name,records:h}),y(`ดาวน์โหลดไฟล์ Excel แล้ว ${h.length} คน — นำเข้าใน GradeOnline ได้เลย`,"success")}finally{v.disabled=!1}}),(x=document.getElementById("btn-export-gradeonline"))==null||x.addEventListener("click",async()=>{const v=document.getElementById("btn-export-gradeonline"),h=(window._pp5DonorTierIndex??0)>=2,f=Dn(u==null?void 0:u.id,o.class_name,h);if(!f.allowed){ts(f.claimedRoom,o.class_name);return}const{records:t,incomplete:r}=wt();if(r.length){const _=r.slice(0,3).map($=>$.full_name).join(", ");y(`ยังมีนักเรียนกรอกคะแนนไม่ครบ ${r.length} คน${_?` เช่น ${_}`:""} — กรุณากรอกให้ครบก่อนส่งเข้า GradeOnline`,"error");return}if(!t.length){y("ยังไม่มีข้อมูลคะแนนที่พร้อมส่งเข้า GradeOnline","error");return}if(confirm(`เตรียมส่งคะแนนรวม(เต็ม 100)+เกรดของนักเรียน ${t.length} คนในห้องนี้ไปรอที่ GradeOnline ยืนยันไหม?`)){v.disabled=!0,v.textContent="กำลังเตรียมข้อมูล...";try{const _=await $n(o.id,u==null?void 0:u.id,w==null?void 0:w.subject_name,o.class_name,t);!h&&!f.claimedRoom&&es(u==null?void 0:u.id,o.class_name),ns(_,t.length)}catch(_){y("เตรียมข้อมูลไม่สำเร็จ: "+oe(_),"error")}finally{v.disabled=!1,v.textContent="📤 ส่งคะแนนเข้า GradeOnline"}}}),(d=document.getElementById("btn-round-settings"))==null||d.addEventListener("click",kt),e.querySelectorAll(".grade-toggle").forEach(v=>{v.addEventListener("click",()=>{const h=v.dataset.toggle;h==="forceGrade"&&(Ue=!Ue),h==="khuna"&&(Ge=!Ge),h==="read"&&(Pe=!Pe),h==="scoreColors"&&(Ye=!Ye),h==="bonus"&&(de=!de,de||(He=!1),de&&Z.length===0&&y('ยังไม่มีคอลัมน์พิเศษ — กด "จัดการคอลัมน์" เพื่อเพิ่ม',"info")),h==="formula-link"&&(He=!He),it(),at(),ye()})}))},kt=()=>{var x;(x=document.getElementById("round-settings-popup"))==null||x.remove();const e=document.createElement("div");e.id="round-settings-popup",e.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const n=(d,v,h)=>`
        <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-50 last:border-0">
          <span class="text-xs text-gray-700 truncate">${Y(v??"")}${h!=null?` <span class="text-gray-400">(เต็ม ${h})</span>`:""}</span>
          <button type="button" class="round-set-toggle flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${rt(d)?"bg-emerald-500 text-white":"bg-gray-100 text-gray-500"}"
            data-key="${d}">${rt(d)?"จำนวนเต็ม":"ทศนิยม"}</button>
        </div>`;e.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 flex-shrink-0">
            <h3 class="font-bold text-gray-800 text-sm">🔢 ตั้งค่าการปัดเลขคะแนน</h3>
            <p class="text-[11px] text-gray-500 mt-0.5">คะแนนรายช่องยังเก็บตามจริง ส่วนคะแนนรวมที่เลือกปัดจะใช้คำนวณเกรดด้วย กดบันทึกใช้ร่วมกันเพื่อใช้ในหน้าครู นักเรียน และ ปพ.5</p>
            ${ct?'<p class="text-xs text-red-600 mt-1">ยังโหลดค่าร่วมไม่ได้ กรุณาตรวจการติดตั้ง SQL และการเชื่อมต่อ</p>':""}
          </div>
          <div class="overflow-y-auto flex-1 px-4 py-2">
            <p class="text-[11px] font-bold text-amber-600 uppercase tracking-wide mt-2 mb-1">ผลรวม</p>
            <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-100">
              <span class="text-xs text-gray-700">สีเกรดบังคับในเอกสาร ปพ.5</span>
              <button type="button" id="forced-grade-color-toggle" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${Re==="red"?"bg-red-500 text-white":"bg-gray-900 text-white"}">${Re==="red"?"สีแดง":"สีดำ"}</button>
            </div>
            ${n("mid_subtotal","รวมกลางภาค")}
            ${n("fin_subtotal","รวมปลายภาค")}
            ${n("total","คะแนนรวมทั้งหมด")}
            ${G.length?`<p class="text-[11px] font-bold text-blue-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์กลางภาค</p>${G.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${O.length?`<p class="text-[11px] font-bold text-purple-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์ปลายภาค</p>${O.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${ae.length?`<p class="text-[11px] font-bold text-teal-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์อื่นๆ</p>${ae.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
            ${me.length?`<p class="text-[11px] font-bold text-indigo-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์คำนวณสูตร</p>${me.map(d=>n(`derived_${d.id}`,d.assignment_name,d.max_score)).join("")}`:""}
            ${de&&Z.length?`<p class="text-[11px] font-bold text-amber-500 uppercase tracking-wide mt-3 mb-1">คะแนนเก็บ/พิเศษ</p>${Z.map(d=>n(d.id,d.assignment_name,d.max_score)).join("")}`:""}
          </div>
          <div class="px-4 py-3 border-t border-gray-100 flex-shrink-0">
            <button id="round-settings-save" class="w-full mb-2 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold">บันทึกใช้ร่วมกัน</button>
            <button id="round-settings-close" class="w-full py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">ปิด</button>
          </div>
        </div>`,document.body.appendChild(e);const c=()=>e.remove();e.querySelector("#round-settings-save").addEventListener("click",async d=>{const v=d.currentTarget;v.disabled=!0,v.textContent="กำลังบันทึก…",e.querySelectorAll(".round-set-toggle").forEach(h=>{h.disabled=!0});try{await _n(o.id,{...Gt(Ae),forcedGradeColor:Re}),ct=!1,it(),y("บันทึกค่าปัดเลขร่วมสำหรับครู นักเรียน และ ปพ.5 แล้ว","success"),c()}catch(h){y("บันทึกค่าร่วมไม่สำเร็จ กรุณาตรวจการติดตั้ง SQL: "+oe(h),"error"),v.disabled=!1,v.textContent="บันทึกใช้ร่วมกัน",e.querySelectorAll(".round-set-toggle").forEach(f=>{f.disabled=!1})}}),e.querySelector("#round-settings-close").addEventListener("click",c),e.querySelector("#forced-grade-color-toggle").addEventListener("click",d=>{Re=Re==="red"?"black":"red",d.currentTarget.className=`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${Re==="red"?"bg-red-500 text-white":"bg-gray-900 text-white"}`,d.currentTarget.textContent=Re==="red"?"สีแดง":"สีดำ"}),e.addEventListener("click",d=>{d.target===e&&c()}),e.querySelectorAll(".round-set-toggle").forEach(d=>{d.addEventListener("click",()=>{const v=d.dataset.key;Ae[v]=!Ae[v],it(),ye(),kt()})})},sn=e=>{var x,d,v;(x=document.getElementById("formula-link-popup"))==null||x.remove();const n=document.createElement("div");n.id="formula-link-popup",n.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const c=Te.length?Te.map(h=>`<span class="font-mono font-bold text-violet-700">${h.var}</span> = "${h.assignment_name}"`).join("  |  "):'<span class="text-gray-400">ยังไม่มีคอลัมน์พิเศษ</span>';n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-gradient-to-br from-violet-500 to-purple-600 px-5 py-4">
            <h3 class="text-white font-bold text-sm">🔗 เชื่อมสูตรจากคะแนนพิเศษ</h3>
            <p class="text-violet-100 text-xs mt-0.5">คอลัมน์: <span class="font-semibold">${Y(e.assignment_name)}</span> (เต็ม ${e.max_score??"?"})</p>
            <p class="text-violet-200 text-[10px] mt-1">สูตรจะบวกเพิ่มเข้าคะแนนที่กรอก ไม่เกินคะแนนเต็ม</p>
          </div>
          <div class="p-4 space-y-3">
            <div class="bg-violet-50 rounded-xl p-3 text-xs text-violet-800">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้:</p>
              <p id="flp-vars">${c}</p>
              <p class="mt-1 text-violet-500">ฟังก์ชัน: MIN, MAX, IF, ROUND, SUM, AVG, CLAMP</p>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">สูตร <span class="text-red-400">*</span></label>
              <div class="flex gap-2">
                <input id="flp-formula" type="text" value="${Y(e.bonus_formula??"")}"
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
        </div>`,document.body.appendChild(n),n.querySelector("#flp-cancel").addEventListener("click",()=>n.remove()),(d=n.querySelector("#flp-test"))==null||d.addEventListener("click",()=>{const h=n.querySelector("#flp-formula").value.trim(),f=n.querySelector("#flp-result");if(!h){f.classList.add("hidden");return}const t=Object.fromEntries(Te.map(_=>[_.var,5])),r=dt(h,t);if(f.classList.remove("hidden"),r===null)f.className="text-xs mt-1 text-red-500",f.textContent="⚠️ สูตรไม่ถูกต้อง";else{f.className="text-xs mt-1 text-emerald-600";const _=Te.map(T=>`${T.var}=5`).join(", "),$=e.max_score?Math.min(0+r,e.max_score):r;f.textContent=`✅ ตัวอย่าง (${_||"ไม่มี"}) → bonus=${r} → คะแนนจริง MIN(0+${r},${e.max_score??"∞"}) = ${$}`}}),(v=n.querySelector("#flp-clear"))==null||v.addEventListener("click",async()=>{try{await Ne(e.id,{bonus_formula:null,bonus_formula_refs:[]}),e.bonus_formula=null,e.bonus_formula_refs=[],y("ลบสูตรแล้ว ✅","success"),n.remove(),at(),ye()}catch{y("บันทึกไม่สำเร็จ","error")}}),n.querySelector("#flp-save").addEventListener("click",async()=>{const h=n.querySelector("#flp-formula").value.trim();if(!h){y("กรุณากรอกสูตร","warning");return}if(dt(h,Object.fromEntries(Te.map(r=>[r.var,5])))===null){y("สูตรไม่ถูกต้อง","warning");return}const f=Te.map(r=>({var:r.var,col_id:r.id})),t=n.querySelector("#flp-save");t.disabled=!0,t.textContent="⏳";try{await Ne(e.id,{bonus_formula:h,bonus_formula_refs:f}),e.bonus_formula=h,e.bonus_formula_refs=f,y("บันทึกสูตรแล้ว ✅","success"),n.remove(),at(),ye()}catch{y("บันทึกไม่สำเร็จ","error"),t.disabled=!1,t.textContent="บันทึก"}})},Et=(()=>{var c;const e={};for(const x of re)j(x)&&(e[c=x.assignment_name]??(e[c]=[])).push(x);const n=new Set;for(const x of Object.values(e))if(!(x.length<=1)){x.sort((d,v)=>d.id-v.id);for(const d of x.slice(1))n.add(d.id)}return n})(),rn=()=>{var r,_,$,T;(r=document.getElementById("manage-cols-modal"))==null||r.remove();const e=document.createElement("div");e.id="manage-cols-modal",e.className="fixed inset-0 z-[600] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4";const n=(a,p=[])=>{const s=j(a),l=s&&Et.has(a.id),m=s&&!l,i=p.findIndex(M=>M.id===a.id),q=!s&&i>0&&!j(p[i-1]),N=!s&&i>=0&&i<p.length-1;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${m?"border-emerald-100 bg-emerald-50/70":l?"border-amber-200 bg-amber-50/70":"border-gray-100 hover:border-gray-200 bg-gray-50/60"}">
          ${m?'<span class="w-4 text-emerald-500 text-xs flex-shrink-0">🔒</span>':l?`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-amber-500 flex-shrink-0" data-colid="${a.id}" title="คอลัมน์ซ้ำ (ระบบสร้างผิดพลาด)" />`:`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-colid="${a.id}" />`}
          <div class="flex flex-col gap-0.5 flex-shrink-0">
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${q?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${a.id}" data-dir="up" ${q?"":"disabled"}>▲</button>
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${N?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${a.id}" data-dir="down" ${N?"":"disabled"}>▼</button>
          </div>
          <span class="flex-1 text-xs text-gray-700 truncate">${a.assignment_name||"—"}${l?' <span class="text-amber-600 font-semibold">(ซ้ำ)</span>':""}</span>
          <span class="text-[11px] text-gray-400">/${a.max_score||0}</span>
          ${s?"":`
          <button class="mcm-sync-toggle text-[10px] font-semibold px-1.5 py-0.5 rounded-lg flex-shrink-0 ${a.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-300 hover:bg-gray-100 hover:text-gray-500"}"
            data-colid="${a.id}"
            title="${a.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}">🔄</button>`}
          ${m?'<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>':`<button class="mcm-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${a.id}" title="ลบคอลัมน์${l?"ซ้ำ":""}">🗑</button>`}
        </div>`},c=a=>`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-100 bg-amber-50/40">
          <input type="text" class="mcm-bonus-name flex-1 text-xs text-amber-800 bg-transparent border-b border-transparent focus:border-amber-300 focus:outline-none px-0.5 min-w-0"
            value="${(a.assignment_name||"").replace(/"/g,"&quot;")}" data-bonusid="${a.id}" />
          <span class="text-[11px] text-amber-400 flex-shrink-0">${a.max_score?"/"+a.max_score:"∞"}</span>
          <button class="mcm-bonus-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${a.id}" title="ลบคอลัมน์">🗑</button>
        </div>`,x=a=>{var p,s;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-teal-100 bg-teal-50/40">
          <span class="flex-1 text-xs text-teal-800 truncate">${Y(a.assignment_name||"—")}</span>
          <span class="text-[10px] text-teal-500 flex-shrink-0 truncate max-w-[90px]" title="เชื่อมกับ: ${Y(((p=ge[a.link_column_id])==null?void 0:p.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗 ${Y(((s=ge[a.link_column_id])==null?void 0:s.assignment_name)??"—")}</span>
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
          ${G.length<5||O.length<5?`
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
              <h4 class="font-semibold text-blue-700 text-sm">📘 กลางภาค <span class="font-normal text-gray-400">(${G.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${G.map(a=>n(a,G)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${O.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${O.map(a=>n(a,O)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-600 text-sm">⭐ คะแนนพิเศษ (Bonus) <span class="font-normal text-gray-400">(${Z.length} คอลัมน์)</span></h4>
            </div>
            <div id="mcm-bonus-list" class="space-y-1.5">${Z.map(c).join("")}</div>
            <button id="mcm-add-bonus" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-amber-200 text-amber-500 hover:border-amber-400 hover:bg-amber-50 text-sm transition-colors">＋ เพิ่มคอลัมน์พิเศษ</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-teal-700 text-sm">🔄 ปรับคะแนน <span class="font-normal text-gray-400">(${ae.length} คอลัมน์)</span></h4>
            </div>
            <p class="text-[11px] text-gray-400 mb-1.5">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</p>
            <div id="mcm-override-list" class="space-y-1.5">${ae.map(x).join("")}</div>
            <button id="mcm-add-override" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-teal-200 text-teal-600 hover:border-teal-400 hover:bg-teal-50 text-sm transition-colors">＋ เพิ่มคอลัมน์ปรับคะแนน</button>
          </div>
        </div>
      </div>`,document.body.appendChild(e),e.querySelector("#mcm-close").addEventListener("click",()=>e.remove());const d=(a,p)=>{var l;(l=document.getElementById("mcm-del-confirm"))==null||l.remove();const s=document.createElement("div");s.id="mcm-del-confirm",s.className="fixed inset-0 z-[700] flex items-center justify-center p-6",s.style.background="rgba(0,0,0,0.5)",s.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">🗑️</div>
            <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">${a}</p>
            <div class="flex gap-3">
              <button id="mcm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="mcm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition">ลบเลย</button>
            </div>
          </div>`,document.body.appendChild(s),s.querySelector("#mcm-conf-no").addEventListener("click",()=>s.remove()),s.querySelector("#mcm-conf-yes").addEventListener("click",()=>{s.remove(),p()})},v=()=>{e.querySelectorAll(".mcm-col-list").forEach((a,p)=>{const s=p===0?G:O;a.innerHTML=s.map(l=>n(l,s)).join("")}),h()},h=()=>{var p;e.querySelectorAll(".mcm-move").forEach(s=>{s.addEventListener("click",async()=>{if(s.disabled)return;const l=parseInt(s.dataset.colid),m=s.dataset.dir,i=G.findIndex(ie=>ie.id===l)!==-1?G:O,q=i.findIndex(ie=>ie.id===l),N=m==="up"?q-1:q+1;if(N<0||N>=i.length||j(i[N]))return;const M=i[q],H=i[N];i[q]=H,i[N]=M;const ue=M.sort_order??(q+1)*10,ee=H.sort_order??(N+1)*10;M.sort_order=ee,H.sort_order=ue,await kn([{id:M.id,sort_order:ee},{id:H.id,sort_order:ue}]),ye(),v()})}),e.querySelectorAll(".mcm-sync-toggle").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.colid),m=[...G,...O].find(N=>N.id===l);if(!m)return;const i=!m.auto_attendance_sync,q=async()=>{try{await En(l,i),m.auto_attendance_sync=i,y(i?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้านี้ ✅":"ปิดใช้งานแล้ว","success"),v()}catch{y("บันทึกไม่สำเร็จ","error")}};i?d(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${m.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้าบันทึกคะแนน — คนที่เคยแก้คะแนนด้วยมือไว้ก่อนจะไม่ถูกทับ</span>`,q):q()})}),e.querySelectorAll(".mcm-del").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.colid),m=[...G,...O].find(q=>q.id===l),i=Et.has(l);if(j(l)&&!i){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้","warning");return}d(i?`คอลัมน์นี้เป็น <span class="font-semibold">คอลัมน์ซ้ำ</span> ของ "${(m==null?void 0:m.assignment_name)||""}" (เกิดจากระบบสร้างคอลัมน์ซ้ำผิดพลาด)<br/><span class="text-xs text-gray-500">คะแนนของคอลัมน์นี้เป็นค่าที่ระบบเติมอัตโนมัติ ลบได้อย่างปลอดภัย — ระบบจะเติมคะแนนกลับให้ถูกต้องในคอลัมน์ที่เหลือของรอบถัดไป</span>`:`ต้องการลบ <span class="font-semibold">"${(m==null?void 0:m.assignment_name)||"คอลัมน์นี้"}"</span> ใช่ไหม?<br/><span class="text-xs text-red-500">คะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย</span>`,async()=>{var q,N;try{await Xe(l);const M=G.findIndex(ee=>ee.id===l),H=O.findIndex(ee=>ee.id===l);M!==-1&&G.splice(M,1),H!==-1&&O.splice(H,1),y("ลบคอลัมน์แล้ว ✅","success"),ye();const ue=e.querySelector(".overflow-auto");ue&&((N=(q=ue.querySelector(".space-y-1\\.5"))==null?void 0:q.remove)==null||N.call(q),e.querySelectorAll(".mcm-col-list").forEach((ee,ie)=>{const $e=ie===0?G:O;ee.innerHTML=$e.map(_e=>n(_e,$e)).join("")}),h())}catch{y("ลบไม่สำเร็จ","error")}})})});const a=()=>{const s=[...e.querySelectorAll(".mcm-cb:checked")],l=e.querySelector("#mcm-bulk-bar");if(l){l.classList.toggle("hidden",s.length===0);const m=l.querySelector("#mcm-bulk-count");m&&(m.textContent=`เลือก ${s.length} รายการ`)}};e.querySelectorAll(".mcm-cb").forEach(s=>s.addEventListener("change",a)),(p=e.querySelector("#mcm-bulk-del"))==null||p.addEventListener("click",()=>{const s=[...e.querySelectorAll(".mcm-cb:checked")];if(!s.length)return;const l=s.map(m=>{const i=[...G,...O].find(q=>q.id===parseInt(m.dataset.colid));return(i==null?void 0:i.assignment_name)??`ID ${m.dataset.colid}`}).join(", ");d(`ลบ ${s.length} คอลัมน์:<br/><span class="font-semibold text-sm">${l}</span>`,async()=>{try{for(const m of s){const i=parseInt(m.dataset.colid);await Xe(i);const q=G.findIndex(M=>M.id===i),N=O.findIndex(M=>M.id===i);q!==-1&&G.splice(q,1),N!==-1&&O.splice(N,1)}y(`ลบ ${s.length} คอลัมน์แล้ว ✅`,"success"),ye(),e.querySelectorAll(".mcm-col-list").forEach((m,i)=>{m.innerHTML=(i===0?G:O).map(n).join("")}),h()}catch{y("ลบไม่สำเร็จ","error")}})})};h();const f=()=>{e.querySelectorAll(".mcm-bonus-name").forEach(a=>{a.addEventListener("blur",async()=>{const p=parseInt(a.dataset.bonusid),s=a.value.trim();if(s)try{await Ne(p,{assignment_name:s});const l=Z.find(m=>m.id===p);l&&(l.assignment_name=s),ye()}catch{y("บันทึกไม่สำเร็จ","error")}}),a.addEventListener("keydown",p=>{p.key==="Enter"&&(p.preventDefault(),a.blur())})}),e.querySelectorAll(".mcm-bonus-del").forEach(a=>{a.addEventListener("click",()=>{const p=parseInt(a.dataset.colid),s=Z.find(l=>l.id===p);d(`ลบคอลัมน์พิเศษ <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Xe(p);const l=Z.findIndex(i=>i.id===p);l!==-1&&Z.splice(l,1),y("ลบคอลัมน์พิเศษแล้ว ✅","success"),ye();const m=e.querySelector("#mcm-bonus-list");m&&(m.innerHTML=Z.map(c).join(""),f())}catch{y("ลบไม่สำเร็จ","error")}})})})};f();const t=()=>{e.querySelectorAll(".mcm-override-del").forEach(a=>{a.addEventListener("click",()=>{const p=parseInt(a.dataset.colid),s=ae.find(l=>l.id===p);d(`ลบคอลัมน์ปรับคะแนน <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย (คะแนนในคอลัมน์หลักที่เคยปรับไปแล้วจะไม่ถูกย้อนกลับ)</span>`,async()=>{try{await Xe(p);const l=ae.findIndex(i=>i.id===p);l!==-1&&ae.splice(l,1),y("ลบคอลัมน์ปรับคะแนนแล้ว ✅","success"),ye();const m=e.querySelector("#mcm-override-list");m&&(m.innerHTML=ae.map(x).join(""),t())}catch{y("ลบไม่สำเร็จ","error")}})})})};t(),(_=e.querySelector("#mcm-add-override"))==null||_.addEventListener("click",()=>{var s;(s=document.getElementById("quick-add-override-mcm"))==null||s.remove();const a=Ie,p=document.createElement("div");p.id="quick-add-override-mcm",p.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",p.innerHTML=`
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
                ${a.map(l=>`<option value="${l.id}">${Y(l.assignment_name)} (${Y(l.assignment_type??"—")} · เต็ม ${l.max_score??"—"})</option>`).join("")}
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
          </div>`,document.body.appendChild(p),p.querySelector("#qom-cancel").addEventListener("click",()=>p.remove()),p.querySelector("#qom-name").focus(),p.querySelector("#qom-save").addEventListener("click",async()=>{const l=p.querySelector("#qom-name").value.trim(),m=Number(p.querySelector("#qom-link").value)||null,i=p.querySelector("#qom-mode").value==="add"?"add":"max";if(!l){y("กรุณากรอกชื่อคอลัมน์","warning");return}if(!m){y("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const q=a.find(M=>M.id===m),N=p.querySelector("#qom-save");N.disabled=!0,N.textContent="⏳";try{await je({class_id:o.id,assignment_name:l,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:(q==null?void 0:q.max_score)??null,column_type:"override",link_column_id:m,override_mode:i}),p.remove(),e.remove(),qe(u,o),y(`เพิ่ม "${l}" แล้ว ✅`,"success")}catch(M){y("เพิ่มไม่สำเร็จ: "+oe(M),"error"),N.disabled=!1,N.textContent="เพิ่ม"}})}),($=e.querySelector("#mcm-add-bonus"))==null||$.addEventListener("click",()=>{var p;(p=document.getElementById("quick-add-bonus-mcm"))==null||p.remove();const a=document.createElement("div");a.id="quick-add-bonus-mcm",a.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",a.innerHTML=`
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
          </div>`,document.body.appendChild(a),a.querySelector("#qbm-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#qbm-name").focus(),a.querySelector("#qbm-save").addEventListener("click",async()=>{const s=a.querySelector("#qbm-name").value.trim(),l=a.querySelector("#qbm-max").value?parseFloat(a.querySelector("#qbm-max").value):null;if(!s){y("กรุณากรอกชื่อคอลัมน์","warning");return}const m=a.querySelector("#qbm-save");m.disabled=!0,m.textContent="⏳";try{const i=await je({class_id:o.id,assignment_name:s,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:l,column_type:"bonus",formula:null,formula_refs:[]});a.remove(),e.remove(),qe(u,o),y(`เพิ่ม "${s}" แล้ว ✅`,"success")}catch(i){y("เพิ่มไม่สำเร็จ: "+oe(i),"error"),m.disabled=!1,m.textContent="เพิ่ม"}})}),e.querySelectorAll(".mcm-add").forEach(a=>{a.addEventListener("click",()=>{e.remove(),Pt(o,a.dataset.type,()=>qe(u,o))})}),(T=e.querySelector("#mcm-fill-default"))==null||T.addEventListener("click",async()=>{const a=e.querySelector("#mcm-fill-default");a.disabled=!0,a.textContent="กำลังสร้าง...";try{const p=Math.max(0,5-G.length),s=Math.max(0,5-O.length),l=(m,i)=>je({class_id:o.id,assignment_name:`คะแนนที่ ${i}`,max_score:20,assignment_type:m,sheet_column:""});for(let m=1;m<=p;m++)await l("midterm",G.length+m);for(let m=1;m<=s;m++)await l("final",O.length+m);e.remove(),qe(u,o)}catch{y("สร้างคอลัมน์ไม่สำเร็จ","error"),a.disabled=!1,a.textContent="เติมให้ครบ"}})},on=e=>{if(!Pe)return'<td class="border border-sky-100 text-center text-gray-300 text-[10px]">—</td>';const n=Le[e];return n?'<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold '+n.cls+'" id="gread-'+e+'">'+n.label+"</td>":'<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-'+e+'">—</td>'},an=e=>{const n=new Date(e);return`${n.getDate()}/${n.getMonth()+1} ${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}`},ln=(e,n,c,x)=>{var t;if((t=document.getElementById("score-hist-popup"))==null||t.remove(),!(x!=null&&x.length))return;let d="",v=0;x.forEach((r,_)=>{v+=r.d,_===0?d+=String(r.d):d+=r.d>=0?` + ${r.d}`:` − ${Math.abs(r.d)}`}),d+=` = ${Math.round(v*1e3)/1e3}`;const h=R.find(r=>r.id===e),f=document.createElement("div");f.id="score-hist-popup",f.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",f.style.background="rgba(0,0,0,0.4)",f.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
            <p class="font-bold text-indigo-700 text-sm">ประวัติคะแนน — ${Y(c)}</p>
            <p class="text-xs text-indigo-400">${Y((h==null?void 0:h.full_name)??"")}</p>
          </div>
          <div class="p-4">
            <div class="space-y-1 mb-3 max-h-44 overflow-y-auto">
              ${x.map(r=>`
                <div class="flex justify-between items-center text-xs py-1 border-b border-gray-50">
                  <span class="text-gray-400">${an(r.at)}</span>
                  <span class="font-semibold ${r.d>=0?"text-emerald-600":"text-rose-600"}">${r.d>=0?"+":""}${r.d}</span>
                </div>`).join("")}
            </div>
            <div class="bg-indigo-50 rounded-xl px-3 py-2 text-xs font-mono text-indigo-700 text-center">${d}</div>
          </div>
          <div class="px-5 pb-4 flex gap-2">
            <button id="hist-reset" class="flex-1 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs hover:bg-rose-50 transition">รีเซ็ตประวัติ</button>
            <button id="hist-close" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ปิด</button>
          </div>
        </div>`,document.body.appendChild(f),f.querySelector("#hist-close").addEventListener("click",()=>f.remove()),f.querySelector("#hist-reset").addEventListener("click",async()=>{var _,$,T,a,p;const r=($=(_=F[e])==null?void 0:_[n])==null?void 0:$.final;if(r==null){f.remove();return}try{const s=await pt(o.id,e,n,r,{});if(s){F[e]||(F[e]={}),F[e][n]={orig:((T=s.history[0])==null?void 0:T.d)??s.final,retake:null,final:s.final,history:s.history};const l=document.getElementById("grade-grid-wrap"),m=l==null?void 0:l.querySelector(`.grade-input[data-sid="${e}"][data-col="${n}"]`);m&&(m.value=s.final!==null?String(s.final):""),(p=(a=m==null?void 0:m.closest("td"))==null?void 0:a.querySelector(".hist-indicator"))==null||p.remove(),y("รีเซ็ตประวัติแล้ว","success"),await _applyOverrideIfNeeded(e,n)}}catch{y("ไม่สำเร็จ","error")}f.remove()}),f.addEventListener("click",r=>{r.target===f&&f.remove()})},dn=(e,n,c)=>{var h;(h=document.getElementById("mass-score-popup"))==null||h.remove();const x=document.createElement("div");x.id="mass-score-popup",x.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",x.style.background="rgba(0,0,0,0.4)",x.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div class="bg-blue-50 px-5 py-3 border-b border-blue-100">
            <p class="font-bold text-blue-700 text-sm">ตั้งคะแนนทั้งห้อง</p>
            <p class="text-xs text-blue-400">${Y(n)}${c?" (เต็ม "+c+")":""}</p>
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
        </div>`,document.body.appendChild(x);const d=x.querySelector("#mass-inp"),v=x.querySelector("#mass-preview");d.addEventListener("input",()=>{const f=d.value.trim();if(!f){v.textContent="";return}const t=parseFloat(f);if(isNaN(t)){v.textContent="";return}v.textContent=/^[+-]/.test(f)?`บวก/ลบ ${t>=0?"+":""}${t} ใน ${R.length} คน`:`ตั้งเป็น ${t} ใน ${R.length} คน`}),x.querySelector("#mass-cancel").addEventListener("click",()=>x.remove()),x.querySelector("#mass-confirm").addEventListener("click",async()=>{var T,a,p,s;const f=d.value.trim();if(!f){x.remove();return}const t=x.querySelector("#mass-confirm");t.disabled=!0,t.textContent="⏳";let r=0,_=0,$=0;for(const l of R){const m=((a=(T=F[l.id])==null?void 0:T[e])==null?void 0:a.history)??[];try{const i=await pt(o.id,l.id,e,f,{currentHistory:m,max:c??null});if(i){i.clamped&&$++,F[l.id]||(F[l.id]={}),F[l.id][e]={orig:((p=i.history[0])==null?void 0:p.d)??i.final,retake:null,final:i.final,history:i.history};const q=document.getElementById("grade-grid-wrap"),N=q==null?void 0:q.querySelector(`.grade-input[data-sid="${l.id}"][data-col="${e}"]`);N&&(N.value=i.final!==null?String(i.final):"",N.style.boxShadow="0 0 0 2px #059669",setTimeout(()=>N.style.boxShadow="",700));const M=N==null?void 0:N.closest("td");if(i.history.length>1){if(!(M!=null&&M.querySelector(".hist-indicator"))){const H=document.createElement("span");H.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl",H.textContent="Δ",H.dataset.sid=l.id,H.dataset.col=e,M==null||M.appendChild(H)}}else(s=M==null?void 0:M.querySelector(".hist-indicator"))==null||s.remove();r++,await _applyOverrideIfNeeded(l.id,e)}}catch{_++}}R.forEach(l=>{var ke;const{midRaw:m,finRaw:i,total:q,grade:N,khuna:M}=Me(l.id),H=((ke=F[l.id])==null?void 0:ke.__force)??"",ue=document.getElementById(`gmid-${l.id}`),ee=document.getElementById(`gfin-${l.id}`);ue&&(ue.textContent=m>0?fe("mid_subtotal",m,1):"—"),ee&&(ee.textContent=i>0?fe("fin_subtotal",i,1):"—");const ie=document.getElementById(`gtotal-${l.id}`),$e=document.getElementById(`ggrade-${l.id}`),_e=document.getElementById(`gkhuna-${l.id}`);ie&&(ie.textContent=q>0?q:"—"),$e&&($e.textContent=H||(N>0?N.toFixed(1):"0")),_e&&(_e.textContent=M.label,_e.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${M.cls}`)}),y(`ตั้งคะแนนสำเร็จ ${r}/${R.length} คน${$?" (ปรับ "+$+" คนที่เกินคะแนนเต็มอัตโนมัติ)":""}${_?" (ล้มเหลว "+_+")":""}`,r>0?"success":"error"),x.remove()}),x.addEventListener("click",f=>{f.target===x&&x.remove()}),setTimeout(()=>d.focus(),60)},ye=()=>{var f;const e=ze(G),n=ze(O),c=document.getElementById("grade-grid-wrap");if(!c)return;const x=`
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${$t} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${ot} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${ot} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${_t}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${G.length+1}" class="${W} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${e>0?" (เต็ม "+e+")":""}</th>
          <th colspan="${O.length+1}" class="${W} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${n>0?" (เต็ม "+n+")":""}</th>
          ${me.length?`<th colspan="${me.length}" class="${W} bg-indigo-600 text-white font-semibold py-1.5">🧮 อ้างอิงสูตร</th>`:""}
          ${ae.length?`<th colspan="${ae.length}" class="${W} bg-teal-600 text-white font-semibold py-1.5">🔄 ปรับคะแนน</th>`:""}
          ${de?`<th colspan="${Z.length+1}" class="${W} bg-amber-500 text-white font-semibold py-1.5">⭐ คะแนนเก็บ/พิเศษ</th>`:""}
          <th class="${W} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${e+n+me.reduce((t,r)=>t+(parseFloat(r.max_score)||0),0)||"?"}</div></th>
          <th class="${W} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${Ue?`<th class="${W} bg-rose-50 text-rose-600 text-xs" style="min-width:32px;width:32px" rowspan="3"><div class="text-[9px] font-semibold leading-tight">บัง<br/>คับ</div></th>`:""}
          <th class="${W} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ${Ge?"":'<div class="text-[9px] font-normal text-emerald-300">ปิดอยู่</div>'}</th>
          <th class="${W} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">${Pe?"ผลประเมิน":"ปิดอยู่"}</div></th>
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${G.map(t=>`<th class="${W} bg-blue-50" style="width:${V}px;min-width:${V}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${j(t)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-blue-600 cursor-pointer hover:bg-blue-100"}"
                data-colid="${t.id}" title="${j(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${t.sheet_column||"—"}</span>
              <button class="btn-mass-score text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${Y(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${j(t)?"":`<button class="btn-scan-col text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${He?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${t.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${t.id}" title="${t.bonus_formula?"🔗 = "+t.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${W} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${O.map(t=>`<th class="${W} bg-purple-50" style="width:${V}px;min-width:${V}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${j(t)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-purple-600 cursor-pointer hover:bg-purple-100"}"
                data-colid="${t.id}" title="${j(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${t.sheet_column||"—"}</span>
              <button class="btn-mass-score text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${Y(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${j(t)?"":`<button class="btn-scan-col text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${He?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${t.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${t.id}" title="${t.bonus_formula?"🔗 = "+t.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${W} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
          ${me.map(t=>`<th class="${W} bg-indigo-50" style="width:${V}px;min-width:${V}px">
            <span class="text-[10px] text-indigo-400 font-mono block text-center truncate" title="${t.formula??""}">${t.formula??"—"}</span>
          </th>`).join("")}
          ${ae.map(t=>{var r;return`<th class="${W} bg-teal-50" style="width:${V}px;min-width:${V}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[10px] text-teal-500 flex-1 text-center truncate" title="เชื่อมกับ: ${Y(((r=ge[t.link_column_id])==null?void 0:r.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗</span>
              <button class="btn-mass-score text-teal-300 hover:text-teal-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${Y(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
            </div>
          </th>`}).join("")}
          ${de?Z.map(t=>`<th class="${W} bg-amber-50" style="width:${V}px;min-width:${V}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[11px] text-amber-500 flex-1 text-center">${t.sheet_column||"—"}</span>
              <button class="btn-mass-score text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${Y(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${j(t)?"":`<button class="btn-scan-col text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
            </div>
          </th>`).join(""):""}
          ${de?`<th class="${W} bg-amber-50" style="width:30px">
            <button class="btn-add-bonus text-amber-500 hover:bg-amber-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block">＋</button></th>`:""}
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${G.map(t=>`<th class="${W} bg-blue-50" style="width:${V}px;min-width:${V}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${j(t)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-blue-50"}"
              contenteditable="${j(t)?"false":"true"}" data-colid="${t.id}" data-field="assignment_name" title="${j(t)?xe(t):""}">${t.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${j(t)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-blue-500 hover:underline"}"
              data-colid="${t.id}" title="${j(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${t.max_score||0}</span></span>
            ${t.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${W} bg-blue-50" style="width:30px"></th>
          ${O.map(t=>`<th class="${W} bg-purple-50" style="width:${V}px;min-width:${V}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${j(t)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-purple-50"}"
              contenteditable="${j(t)?"false":"true"}" data-colid="${t.id}" data-field="assignment_name" title="${j(t)?xe(t):""}">${t.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${j(t)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-purple-500 hover:underline"}"
              data-colid="${t.id}" title="${j(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${t.max_score||0}</span></span>
            ${t.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${W} bg-purple-50" style="width:30px"></th>
          ${me.map(t=>`<th class="${W} bg-indigo-50" style="width:${V}px;min-width:${V}px">
            <span class="text-[11px] text-indigo-700 font-medium block text-center truncate">${t.assignment_name}</span>
            <span class="text-[10px] text-indigo-400">/${t.max_score??"?"}</span>
          </th>`).join("")}
          ${ae.map(t=>`<th class="${W} bg-teal-50" style="width:${V}px;min-width:${V}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-teal-700 cursor-text hover:bg-teal-100"
              contenteditable="true" data-colid="${t.id}" data-field="assignment_name">${t.assignment_name||"—"}</span>
            <span class="text-[10px] text-teal-400">/${t.max_score??"?"}</span>
          </th>`).join("")}
          ${de?Z.map(t=>`<th class="${W} bg-amber-50" style="width:${V}px;min-width:${V}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-amber-700 cursor-text hover:bg-amber-100"
              contenteditable="true" data-colid="${t.id}" data-field="assignment_name">${t.assignment_name||"—"}</span>
            <span class="text-[10px] text-amber-400">${t.max_score?"/"+t.max_score:"(ไม่จำกัด)"}</span>
          </th>`).join(""):""}
          ${de?`<th class="${W} bg-amber-50" style="width:30px"></th>`:""}
        </tr>`,d=R.map((t,r)=>{var m;const{midRaw:_,finRaw:$,total:T,grade:a,khuna:p}=Me(t.id),s=((m=F[t.id])==null?void 0:m.__force)??"",l=s||(a>0?a.toFixed(1):"0");return`<tr class="hover:bg-gray-50 transition" data-sid="${t.id}">
          <td class="${$t} text-center text-gray-400" style="width:28px">${r+1}</td>
          <td class="${ot} text-center font-mono text-gray-600" style="left:28px;width:64px">${t.student_code}</td>
          <td class="${ot} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${_t}px" data-idx="${r}">
            <div class="flex items-center gap-1.5 py-1">
              ${t.image_url?`<img src="${t.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${t.full_name}</span>
            </div>
          </td>
          ${G.map(i=>{const q=we(t.id,i.id)??"",N=st(t.id,i.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${V}px;min-width:${V}px;height:30px;${Ze(i,q)}">
            <input class="grade-input w-full h-full text-center text-xs ${j(i)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Fe(i.id,q)}" placeholder="—"
              data-sid="${t.id}" data-col="${i.id}" data-max="${i.max_score}" ${j(i)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gmid-${t.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${_>0?fe("mid_subtotal",_,1):"—"}</td>
          ${O.map(i=>{const q=we(t.id,i.id)??"",N=st(t.id,i.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${V}px;min-width:${V}px;height:30px;${Ze(i,q)}">
            <input class="grade-input w-full h-full text-center text-xs ${j(i)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Fe(i.id,q)}" placeholder="—"
              data-sid="${t.id}" data-col="${i.id}" data-max="${i.max_score}" ${j(i)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gfin-${t.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${$>0?fe("fin_subtotal",$,1):"—"}</td>
          ${me.map(i=>{const q=vt(i,t.id),N=q!==null&&q!==0?fe(`derived_${i.id}`,q,2):"—";return`<td class="border border-indigo-100 bg-indigo-50/40 text-center text-xs text-indigo-700 font-medium grade-derived-td" style="width:${V}px;min-width:${V}px;height:30px" title="คำนวณจาก: ${i.formula??""}">${N}</td>`}).join("")}
          ${ae.map(i=>{const q=we(t.id,i.id)??"",N=st(t.id,i.id);return`<td class="border border-teal-100 text-center p-0 relative" style="width:${V}px;min-width:${V}px;height:30px;${Ze(i,q)}">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-teal-50 focus:outline-none focus:ring-1 focus:ring-teal-300 focus:rounded"
              type="text" inputmode="decimal" value="${Fe(i.id,q)}" placeholder="—"
              data-sid="${t.id}" data-col="${i.id}" data-max="${i.max_score??9999}"/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          ${de?Z.map(i=>{const q=we(t.id,i.id)??"",N=st(t.id,i.id);return`<td class="border border-amber-100 text-center p-0 relative" style="width:${V}px;min-width:${V}px;height:30px;${Ze(i,q)}">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-300 focus:rounded"
              type="text" inputmode="decimal" value="${Fe(i.id,q)}" placeholder="—"
              data-sid="${t.id}" data-col="${i.id}" data-max="${i.max_score??9999}"/>
            ${N?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${i.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join(""):""}
          ${de?'<td class="border border-amber-50 bg-amber-50/30" style="width:30px;height:30px"></td>':""}
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${t.id}" style="min-width:58px">${T>0?T:"—"}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${t.id}" style="min-width:50px">${l}</td>
          ${Ue?`<td class="border border-rose-100 text-center bg-rose-50 cursor-pointer hover:bg-rose-100 transition force-cell" style="min-width:32px;height:30px" data-sid="${t.id}">
            <span class="text-xs font-bold ${s?"text-rose-600":"text-rose-200"}">${s||"+"}</span></td>`:""}
          <td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${Ge?p.cls:"text-gray-300"}" id="gkhuna-${t.id}">${Ge?p.label:"—"}</td>
          ${on(t.id)}
        </tr>`}).join("");c.innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${x}</thead><tbody>${d}</tbody></table>`;const v=c.querySelector("table"),h=async(t,r)=>{var _e,ke,We,lt,he;const _=ge[r];if(!_||_.column_type!=="override"||!_.link_column_id)return;const $=(ke=(_e=F[t])==null?void 0:_e[r])==null?void 0:ke.final;if($==null)return;const T=_.link_column_id,a=(We=ge[T])==null?void 0:We.max_score,p=await Sn({studentId:t,mainColumnId:T,overrideValue:$,overrideMode:_.override_mode,mainMaxScore:typeof a=="number"?a:null});if(!p.applied)return;F[t][T]={orig:((lt=p.history[0])==null?void 0:lt.d)??p.score,retake:null,final:p.score,history:p.history};const s=c.querySelector(`.grade-input[data-sid="${t}"][data-col="${T}"]`);s&&(s.value=p.score!==null?String(Fe(T,p.score)):"",s.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",s.style.background="#f0fdf4",setTimeout(()=>{s.style.boxShadow="",s.style.background=""},900));const{midRaw:l,finRaw:m,total:i,grade:q,khuna:N}=Me(t),M=((he=F[t])==null?void 0:he.__force)??"",H=document.getElementById(`gmid-${t}`),ue=document.getElementById(`gfin-${t}`);H&&(H.textContent=l>0?fe("mid_subtotal",l,1):"—"),ue&&(ue.textContent=m>0?fe("fin_subtotal",m,1):"—");const ee=document.getElementById(`gtotal-${t}`),ie=document.getElementById(`ggrade-${t}`),$e=document.getElementById(`gkhuna-${t}`);ee&&(ee.textContent=i>0?i:"—"),ie&&(ie.textContent=M||(q>0?q.toFixed(1):"0")),$e&&($e.textContent=N.label,$e.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${N.cls}`),y(`ปรับคะแนนอัตโนมัติ → ${p.score} (จากคอลัมน์ปรับคะแนน) ✅`,"success")};v.addEventListener("focusin",t=>{const r=t.target.closest(".grade-input");if(!r)return;const _=we(Number(r.dataset.sid),Number(r.dataset.col));r.value=_==null?"":String(_)}),v.addEventListener("focusout",t=>{const r=t.target.closest(".grade-input");r&&(r.value=Fe(r.dataset.col,r.value))}),v.addEventListener("change",async t=>{var $,T,a,p,s,l,m,i,q,N;const r=t.target.closest(".grade-input"),_=t.target.closest(".force-input");if(r){const M=parseInt(r.dataset.sid),H=parseInt(r.dataset.col),ue=parseFloat(r.dataset.max);if(j(H)){y("คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้","warning"),r.value=((T=($=F[M])==null?void 0:$[H])==null?void 0:T.final)??"";return}let ee=r.value.trim();const ie=we(M,H);if(ee===""&&ie==null||ee!==""&&ie!=null&&Number(ee)===Number(ie))return;const $e=((p=(a=F[M])==null?void 0:a[H])==null?void 0:p.history)??[];F[M]||(F[M]={}),r.style.outline="2px solid #6366f1",r.style.outlineOffset="1px",(s=document.getElementById("grade-saving"))==null||s.classList.remove("hidden");try{const _e=await pt(o.id,M,H,ee===""?null:ee,{currentHistory:$e,max:isNaN(ue)?null:ue});if(!_e){r.value=((l=F[M][H])==null?void 0:l.final)??"";return}const{final:ke,history:We,clamped:lt}=_e;F[M][H]={orig:((m=We[0])==null?void 0:m.d)??ke,retake:null,final:ke,history:We},r.value=Fe(H,ke),Dt(r,ge[H],ke),r.title="",lt&&y(`คะแนนเกินคะแนนเต็ม ปรับให้เป็น ${ke} อัตโนมัติ`,"warning");const he=r.closest("td");if(We.length>1){if(!(he!=null&&he.querySelector(".hist-indicator"))){const Qe=document.createElement("span");Qe.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none",Qe.textContent="Δ",Qe.dataset.sid=M,Qe.dataset.col=H,Qe.title="ดูประวัติคะแนน",he==null||he.appendChild(Qe)}}else(i=he==null?void 0:he.querySelector(".hist-indicator"))==null||i.remove();r.style.outline="",r.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",r.style.background="#f0fdf4",setTimeout(()=>{r.style.boxShadow="",r.style.background=""},900);const{midRaw:qt,finRaw:Ct,total:Lt,grade:It,khuna:jt}=Me(M),cn=((q=F[M])==null?void 0:q.__force)??"",Mt=document.getElementById(`gmid-${M}`),Nt=document.getElementById(`gfin-${M}`);Mt&&(Mt.textContent=qt>0?fe("mid_subtotal",qt,1):"—"),Nt&&(Nt.textContent=Ct>0?fe("fin_subtotal",Ct,1):"—");const Tt=document.getElementById(`gtotal-${M}`),Bt=document.getElementById(`ggrade-${M}`),ut=document.getElementById(`gkhuna-${M}`);Tt&&(Tt.textContent=Lt>0?Lt:"—"),Bt&&(Bt.textContent=cn||(It>0?It.toFixed(1):"0")),ut&&(ut.textContent=jt.label,ut.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${jt.cls}`),await h(M,H)}catch{y("บันทึกไม่สำเร็จ","error")}finally{(N=document.getElementById("grade-saving"))==null||N.classList.add("hidden")}}}),v.addEventListener("input",t=>{var l,m;const r=t.target.closest(".grade-input");if(!r)return;const _=r.value.trim();if(!/^[+-]/.test(_)){r.title="";return}const $=parseInt(r.dataset.sid),T=parseInt(r.dataset.col),a=((m=(l=F[$])==null?void 0:l[T])==null?void 0:m.final)??0,p=parseFloat(_);if(isNaN(p)){r.title="";return}const s=Math.round((a+p)*1e3)/1e3;r.title=`${a} ${p>=0?"+":"−"} ${Math.abs(p)} = ${s}`}),v.addEventListener("click",t=>{var T,a;const r=t.target.closest(".hist-indicator");if(r){const p=parseInt(r.dataset.sid),s=parseInt(r.dataset.col),l=((a=(T=F[p])==null?void 0:T[s])==null?void 0:a.history)??[],m=[...G,...O,...Z].find(i=>i.id===s);ln(p,s,(m==null?void 0:m.assignment_name)??"",l);return}const _=t.target.closest(".btn-mass-score");if(_){dn(parseInt(_.dataset.colid),_.dataset.colname,_.dataset.max?parseFloat(_.dataset.max):null);return}const $=t.target.closest(".btn-scan-col");if($){Ot({classId:o.id,className:o.class_name,initialColumnId:parseInt($.dataset.colid)});return}}),v.addEventListener("click",t=>{var p,s;const r=t.target.closest(".force-cell");if(!r)return;const _=parseInt(r.dataset.sid);(p=document.getElementById("force-grade-popup"))==null||p.remove();const $=((s=F[_])==null?void 0:s.__force)??"",T=document.createElement("div");T.id="force-grade-popup",T.className="fixed inset-0 z-[400] flex items-end sm:items-center justify-center p-4",T.style.background="rgba(0,0,0,0.4)";const a=R.find(l=>l.id===_);T.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div class="bg-rose-50 px-5 py-3 border-b border-rose-100">
              <p class="font-bold text-rose-700 text-sm">บังคับเกรด</p>
              <p class="text-xs text-rose-400">${(a==null?void 0:a.full_name)??""}</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-4 gap-2 mb-3">
                ${Zt.map(l=>`
                  <button class="force-pick py-2.5 rounded-xl text-sm font-bold border transition
                    ${l===$?"bg-rose-500 text-white border-rose-500":"bg-white text-rose-600 border-rose-200 hover:bg-rose-50"}"
                    data-grade="${l}">${l}</button>`).join("")}
                <button class="force-pick py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 col-span-4"
                  data-grade="">ล้างค่า (ใช้เกรดปกติ)</button>
              </div>
            </div>
          </div>`,document.body.appendChild(T),T.addEventListener("click",async l=>{const m=l.target.closest(".force-pick");if(!m&&l.target===T){T.remove();return}if(!m)return;const i=m.dataset.grade;m.disabled=!0;try{await qn(a==null?void 0:a.enrollment_id,i)}catch(H){y("บันทึกบังคับเกรดไม่สำเร็จ: "+oe(H),"error"),m.disabled=!1;return}F[_]||(F[_]={}),F[_].__force=i,a&&(a.special_result=i||null);const{grade:q}=Me(_),N=document.getElementById(`ggrade-${_}`);N&&(N.textContent=i||(q>0?q.toFixed(1):"0"));const M=r.querySelector("span");M&&(M.textContent=i||"+",M.className=`text-xs font-bold ${i?"text-rose-600":"text-rose-200"}`),T.remove()})}),v.addEventListener("keydown",t=>{var N,M;const r=t.target.closest(".grade-input");if(!r||!["Tab","Enter","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key))return;t.preventDefault();const $=[...c.querySelectorAll(".grade-input")],T=[...new Set($.map(H=>H.dataset.sid))],p=[...new Set($.map(H=>H.dataset.col))].length,s=$.indexOf(r),l=Math.floor(s/p),m=s%p;let i=l,q=m;switch(t.key){case"Enter":case"ArrowDown":i=l<T.length-1?l+1:l;break;case"ArrowUp":i=l>0?l-1:0;break;case"Tab":(N=$[s+(t.shiftKey?-1:1)])==null||N.focus();return;case"ArrowRight":q=m<p-1?m+1:m;break;case"ArrowLeft":q=m>0?m-1:0;break}(M=$[i*p+q])==null||M.focus()}),c.querySelectorAll(".col-edit").forEach(t=>{t.addEventListener("blur",async()=>{const r=parseInt(t.dataset.colid),_=t.textContent.trim();if(!j(r))try{await Ne(r,{assignment_name:_||null});const $=[...G,...O,...Z].find(T=>T.id===r);$&&($.assignment_name=_)}catch{y("บันทึกไม่สำเร็จ","error")}}),t.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),t.blur())})}),c.querySelectorAll(".col-sheet-ref").forEach(t=>{t.addEventListener("click",()=>{const r=parseInt(t.dataset.colid);if(j(r)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}en(t,r)})}),c.querySelectorAll(".col-max").forEach(t=>{t.addEventListener("click",()=>{const r=parseInt(t.dataset.colid);if(j(r)){y("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}tn(t,r)})}),c.querySelectorAll(".btn-add-col").forEach(t=>{t.addEventListener("click",()=>Pt(o,t.dataset.type,()=>qe(u,o)))}),(f=c.querySelector(".btn-add-bonus"))==null||f.addEventListener("click",()=>{var _;(_=document.getElementById("quick-add-bonus"))==null||_.remove();const t=document.createElement("div");t.id="quick-add-bonus",t.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/40 p-4",t.innerHTML=`
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
          </div>`,document.body.appendChild(t),t.querySelector("#qb-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",$=>{$.target===t&&t.remove()});const r=t.querySelector("#qb-name");r.focus(),t.querySelector("#qb-add").addEventListener("click",async()=>{const $=r.value.trim(),T=t.querySelector("#qb-max").value?parseFloat(t.querySelector("#qb-max").value):null;if(!$){y("กรุณากรอกชื่อคอลัมน์","warning");return}const a=t.querySelector("#qb-add");a.disabled=!0,a.textContent="⏳";try{await je({class_id:o.id,assignment_name:$,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:T,column_type:"bonus",formula:null,formula_refs:[]}),y(`เพิ่ม "${$}" แล้ว ✅`,"success"),t.remove(),qe(u,o)}catch(p){y("เพิ่มไม่สำเร็จ: "+oe(p),"error"),a.disabled=!1,a.textContent="เพิ่ม"}})}),c.querySelectorAll(".btn-formula-link").forEach(t=>{t.addEventListener("click",()=>{const r=parseInt(t.dataset.colid),_=[...G,...O].find($=>$.id===r);_&&sn(_)})}),c.querySelectorAll(".student-name-cell").forEach(t=>{t.addEventListener("click",()=>{const r=R[parseInt(t.dataset.idx)];nn(r,F[r.id]??{},Me(r.id))})})};Je(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${(w==null?void 0:w.subject_name)??"—"} · ${o.class_name} · ${R.length} คน</p>
        </div>
        <div id="grade-saving" class="hidden bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
        <button id="btn-scan-score" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-sky-200 text-sm text-sky-600 hover:bg-sky-50 transition flex-shrink-0">
          📷 <span class="hidden sm:inline text-xs">สแกนคะแนน</span>
        </button>
        <button id="btn-copy-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-indigo-200 text-sm text-indigo-600 hover:bg-indigo-50 transition flex-shrink-0">
          📋 <span class="hidden sm:inline text-xs">สำเนาคอลัมน์</span>
        </button>
        <button id="btn-manage-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          ⚙️ <span class="hidden sm:inline text-xs">จัดการคอลัมน์</span>
        </button>
        <button id="btn-hide-scores" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          👁 <span class="hidden sm:inline text-xs">ซ่อนคะแนน</span>
        </button>
      </div>
      <div id="grade-togglebar" class="flex border-b border-gray-100 bg-white flex-shrink-0 overflow-x-auto min-h-[42px]"></div>
      <div class="flex-1 overflow-auto" id="grade-grid-wrap"></div>
    </div>`),(L=document.getElementById("btn-manage-cols"))==null||L.addEventListener("click",rn),(A=document.getElementById("btn-copy-cols"))==null||A.addEventListener("click",()=>ss(o,g)),(B=document.getElementById("btn-scan-score"))==null||B.addEventListener("click",()=>{Ot({classId:o.id,className:o.class_name})});let mt=!1,Ke=null;(E=document.getElementById("btn-hide-scores"))==null||E.addEventListener("click",function(){mt=!mt;const e=document.getElementById("grade-grid-wrap");e&&(mt?(Ke=[],e.querySelectorAll(".grade-input").forEach(n=>{Ke.push({el:n,type:"input",val:n.value}),n.value=""}),e.querySelectorAll('[id^="gmid-"],[id^="gfin-"],[id^="gtotal-"],[id^="ggrade-"],[id^="gkhuna-"],[id^="gread-"],.grade-derived-td').forEach(n=>{Ke.push({el:n,type:"text",val:n.innerHTML}),n.innerHTML="—"}),window._pp5HideScores=!0,this.innerHTML='👁 <span class="hidden sm:inline text-xs">แสดงคะแนน</span>',this.classList.add("bg-amber-50","border-amber-300","text-amber-700"),this.classList.remove("text-gray-500","border-gray-200")):(window._pp5HideScores=!1,Ke&&(Ke.forEach(({el:n,type:c,val:x})=>{c==="input"?n.value=x:n.innerHTML=x}),Ke=null),this.innerHTML='👁 <span class="hidden sm:inline text-xs">ซ่อนคะแนน</span>',this.classList.remove("bg-amber-50","border-amber-300","text-amber-700"),this.classList.add("text-gray-500","border-gray-200")))}),at(),ye();let St=null;De=Hn(e=>{!re.some(c=>Number(c.id)===Number(e.columnId))&&Number(e.classId)!==Number(P)||document.getElementById("grade-grid-wrap")&&(clearTimeout(St),St=setTimeout(()=>qe(u,o),120))})}catch(P){y("โหลดข้อมูลไม่สำเร็จ: "+oe(P),"error")}}async function ss(u,o){var A;y("กำลังโหลด...","info");const w=(await Promise.all((o??[]).filter(B=>B.id!==u.id).map(async B=>{const E=await ve(B.id).catch(()=>[]);return E.length?{...B,cols:E}:null}))).filter(Boolean);if(!w.length){y("ไม่พบห้องอื่นที่มีคอลัมน์คะแนน","info");return}(A=document.getElementById("copy-cols-popup"))==null||A.remove();const L=document.createElement("div");L.id="copy-cols-popup",L.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",L.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
        <div class="text-3xl mb-2">📋</div>
        <h3 class="text-white font-bold text-base">สำเนาคอลัมน์คะแนน</h3>
        <p class="text-indigo-100 text-xs mt-1">เลือกห้องที่ต้องการคัดลอกคอลัมน์จาก</p>
      </div>
      <div class="p-5 space-y-2 max-h-72 overflow-y-auto">
        ${w.map(B=>{var E;return`
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${B.class_name}</p>
            <p class="text-xs text-gray-400">${((E=B.master_subjects)==null?void 0:E.subject_name)??""} · ${B.cols.length} คอลัมน์</p>
          </div>
          <button class="ccp-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            data-src="${B.id}">คัดลอก</button>
        </div>`}).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="ccp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
      </div>
    </div>`,document.body.appendChild(L),L.querySelector("#ccp-close").addEventListener("click",()=>L.remove()),L.querySelectorAll(".ccp-btn").forEach(B=>{B.addEventListener("click",async()=>{var U;const E=w.find(R=>R.id===parseInt(B.dataset.src));(U=document.getElementById("ccp-confirm"))==null||U.remove();const P=document.createElement("div");P.id="ccp-confirm",P.className="fixed inset-0 z-[300] flex items-center justify-center p-6",P.style.background="rgba(0,0,0,0.5)",P.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">📋</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการ Mirror</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">
          คอลัมน์ของห้องนี้จะถูกทำให้เหมือน<br/>
          <span class="font-semibold text-indigo-700">${E.class_name}</span><br/>
          <span class="text-xs text-red-500">คอลัมน์ที่ต่างออกไปจะถูกลบหรือเพิ่ม/แก้ไข</span>
        </p>
        <div class="flex gap-3">
          <button id="ccp-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccp-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(P),P.querySelector("#ccp-conf-no").addEventListener("click",()=>P.remove()),P.querySelector("#ccp-conf-yes").addEventListener("click",async()=>{P.remove(),B.disabled=!0,B.textContent="⏳";try{const R=await ve(u.id).catch(()=>[]),J=Object.fromEntries(E.cols.map(I=>[I.assignment_name,I])),te=Object.fromEntries(R.map(I=>[I.assignment_name,I]));for(const I of R)J[I.assignment_name]||await Xe(I.id).catch(()=>{});for(const I of E.cols)te[I.assignment_name]?await Ne(te[I.assignment_name].id,{assignment_type:I.assignment_type,sheet_column:I.sheet_column??"",max_score:I.max_score,assignment_name:I.assignment_name}).catch(()=>{}):await je({class_id:u.id,assignment_name:I.assignment_name,assignment_type:I.assignment_type,sheet_column:I.sheet_column??"",max_score:I.max_score});y(`Mirror จาก ${E.class_name} สำเร็จ ✅`,"success"),L.remove(),qe(window._currentGradeTeacher,u)}catch(R){y("Mirror ไม่สำเร็จ: "+oe(R),"error"),B.disabled=!1,B.textContent="คัดลอก"}})})})}async function rs(u,o,w){var te;const L=w.filter(I=>I.course_id===u);if(!L.length){y("ยังไม่มีห้องเรียนในคอร์สนี้","warning");return}y("กำลังโหลด...","info");const A=L[0];let B=await ve(A.id).catch(()=>[]);const E=()=>B.filter(I=>I.assignment_type==="midterm"||I.assignment_type==="กลางภาค"),P=()=>B.filter(I=>I.assignment_type==="final"||I.assignment_type==="ปลายภาค");(te=document.getElementById("course-cols-modal"))==null||te.remove();const U=document.createElement("div");U.id="course-cols-modal",U.className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4";const R=I=>`
    <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/60">
      <input type="checkbox" class="ccm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-name="${Y(I.assignment_name)}" />
      <span class="flex-1 text-xs text-gray-700 truncate">${I.assignment_name}</span>
      <span class="text-[11px] text-gray-400">/${I.max_score||0}</span>
      <button class="ccm-del text-gray-300 hover:text-red-400 text-lg px-1 rounded hover:bg-red-50 transition" data-name="${Y(I.assignment_name)}">🗑</button>
    </div>`,J=()=>{var b;U.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>
        <div class="px-5 py-4 border-b flex items-start justify-between gap-3 flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ คอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">${o} · sync ${L.length} ห้อง</p>
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
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค <span class="font-normal text-gray-400">(${E().length})</span></h4>
            <div class="space-y-1.5">${E().map(R).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition" data-type="กลางภาค">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค <span class="font-normal text-gray-400">(${P().length})</span></h4>
            <div class="space-y-1.5">${P().map(R).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition" data-type="ปลายภาค">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`;const I=(g,C)=>{var z;(z=document.getElementById("ccm-confirm"))==null||z.remove();const S=document.createElement("div");S.id="ccm-confirm",S.className="fixed inset-0 z-[300] flex items-center justify-center p-6",S.style.background="rgba(0,0,0,0.5)",S.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">🗑️</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">${g}</p>
        <div class="flex gap-3">
          <button id="ccm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบเลย</button>
        </div>
      </div>`,document.body.appendChild(S),S.querySelector("#ccm-conf-no").addEventListener("click",()=>S.remove()),S.querySelector("#ccm-conf-yes").addEventListener("click",()=>{S.remove(),C()})},ne=async g=>{for(const C of L){const S=await ve(C.id).catch(()=>[]);for(const z of g){const k=S.find(Q=>Q.assignment_name===z);k&&await Xe(k.id).catch(()=>{})}}B=await ve(A.id).catch(()=>[]),y(`ลบสำเร็จ — sync ทุก ${L.length} ห้องแล้ว ✅`,"success"),J()},K=()=>{const g=[...U.querySelectorAll(".ccm-cb:checked")],C=U.querySelector("#ccm-bulk-bar");if(C){C.classList.toggle("hidden",!g.length);const S=C.querySelector("#ccm-bulk-count");S&&(S.textContent=`เลือก ${g.length} รายการ`)}};U.querySelector("#ccm-close").addEventListener("click",()=>U.remove()),U.querySelectorAll(".ccm-cb").forEach(g=>g.addEventListener("change",K)),(b=U.querySelector("#ccm-bulk-del"))==null||b.addEventListener("click",()=>{const C=[...U.querySelectorAll(".ccm-cb:checked")].map(S=>S.dataset.name);I(`ลบ ${C.length} คอลัมน์จากทุกห้อง?<br/><span class="font-semibold text-sm">${C.join(", ")}</span>`,()=>ne(C))}),U.querySelectorAll(".ccm-del").forEach(g=>{g.addEventListener("click",()=>{I(`ลบ <span class="font-semibold">"${g.dataset.name}"</span> จากทุก ${L.length} ห้อง?`,()=>ne([g.dataset.name]))})}),U.querySelectorAll(".ccm-add").forEach(g=>{g.addEventListener("click",()=>{var Q,se;const C=g.dataset.type;(Q=document.getElementById("add-col-modal"))==null||Q.remove();const S=!!(A!=null&&A.google_sheet_id),z=C==="ปลายภาค"?"purple":"blue",k=document.createElement("div");k.id="add-col-modal",k.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",k.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${C}</h3>
          <p class="text-xs text-gray-400 mb-4">จะเพิ่มใน <b>ทุก ${L.length} ห้อง</b> ของ ${o}</p>
          <div class="space-y-3">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
              <input id="acol2-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${z}-400"/></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
                <input id="acol2-max" type="number" min="1" value="20"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${z}-400"/></div>
              ${S?`<div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
                <input id="acol2-sheet" type="text" placeholder="EH"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${z}-400"/></div>`:'<input id="acol2-sheet" type="hidden" value=""/>'}
            </div>
            <div id="acol2-msg" class="hidden text-xs text-red-500"></div>
            <div class="flex gap-3 pt-1">
              <button id="acol2-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="acol2-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มทุกห้อง</button>
            </div>
          </div>
        </div>`,document.body.appendChild(k),(se=k.querySelector("#acol2-sheet"))==null||se.addEventListener("input",le=>{le.target.value=le.target.value.toUpperCase()}),k.querySelector("#acol2-cancel").addEventListener("click",()=>k.remove()),k.querySelector("#acol2-save").addEventListener("click",async()=>{var be;const le=k.querySelector("#acol2-name").value.trim(),Ee=parseFloat(k.querySelector("#acol2-max").value)||20,Se=(((be=k.querySelector("#acol2-sheet"))==null?void 0:be.value)??"").trim().toUpperCase()||null,D=k.querySelector("#acol2-msg");if(!le){D.textContent="กรุณาระบุชื่องาน",D.classList.remove("hidden");return}const ce=k.querySelector("#acol2-save");ce.disabled=!0,ce.textContent="⏳ กำลังเพิ่ม...";try{for(const Le of L)(await ve(Le.id).catch(()=>[])).some(re=>re.assignment_name===le)||await je({class_id:Le.id,assignment_name:le,assignment_type:C,sheet_column:Se??"",max_score:Ee});k.remove(),y(`เพิ่ม "${le}" ใน ${L.length} ห้องแล้ว ✅`,"success"),B=await ve(A.id).catch(()=>[]),J()}catch(Le){D.textContent="เกิดข้อผิดพลาด: "+oe(Le),D.classList.remove("hidden"),ce.disabled=!1,ce.textContent="เพิ่มทุกห้อง"}})})})};document.body.appendChild(U),J()}function Pt(u,o,w){var P,U;(P=document.getElementById("add-col-modal"))==null||P.remove();const L=o==="final"?"ปลายภาค":"กลางภาค",A=o==="final"?"purple":"blue",B=!!(u!=null&&u.google_sheet_id),E=document.createElement("div");E.id="add-col-modal",E.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",E.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${L}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${L}</b></p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${A}-400"/>
        <button type="button" id="acol-quick-adj" class="mt-1 text-xs text-teal-600 hover:text-teal-800 underline">⚡ ปรับคะแนนเก็บ (คะแนนเต็มกำหนดเอง)</button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${A}-400"/>
        </div>
        ${B?`
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${A}-400"/>
        </div>`:'<input id="acol-sheet" type="hidden" value=""/>'}
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`,document.body.appendChild(E),(U=E.querySelector("#acol-sheet"))==null||U.addEventListener("input",R=>{R.target.value=R.target.value.toUpperCase()}),E.querySelector("#acol-quick-adj").addEventListener("click",()=>{E.querySelector("#acol-name").value=`ปรับคะแนนเก็บ (${L})`;const R=E.querySelector("#acol-max");R.focus(),R.select()}),E.querySelector("#acol-cancel").addEventListener("click",()=>E.remove()),E.querySelector("#acol-save").addEventListener("click",async()=>{var K;const R=E.querySelector("#acol-name").value.trim(),J=parseFloat(E.querySelector("#acol-max").value)||20,te=(((K=E.querySelector("#acol-sheet"))==null?void 0:K.value)??"").trim().toUpperCase()||null,I=E.querySelector("#acol-msg");if(!R){I.textContent="กรุณาระบุชื่องาน",I.classList.remove("hidden");return}const ne=E.querySelector("#acol-save");ne.disabled=!0,ne.textContent="กำลังเพิ่ม...";try{await je({class_id:u.id,assignment_name:R,max_score:J,sheet_column:te??"",assignment_type:o}),E.remove(),y(`เพิ่มคอลัมน์ "${R}" แล้ว`,"success"),w()}catch(b){I.textContent="เกิดข้อผิดพลาด: "+oe(b),I.classList.remove("hidden"),ne.disabled=!1,ne.textContent="เพิ่มคอลัมน์"}})}async function et(u){if(gt("requests"),ft("คำร้องนักเรียน"),!u){Je('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">🔔</p><p>กรุณาเข้าสู่ระบบ</p></div>');return}Je(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const o=await Cn(u.id).catch(()=>[]),w=[{key:"pending",label:"รอดำเนินการ",cls:"text-amber-600"},{key:"approved",label:"อนุมัติแล้ว",cls:"text-emerald-600"},{key:"attended",label:"มาสอบแล้ว",cls:"text-blue-600"},{key:"absent",label:"ขาดสอบ/ผิดนัด",cls:"text-red-600"},{key:"rejected",label:"ปฏิเสธ",cls:"text-red-500"},{key:"all",label:"ทั้งหมด",cls:"text-gray-600"}];let L="pending",A=null,B=null;const E=(b,g)=>g==="all"?!0:g==="attended"?b.status==="approved"&&b.exam_attended===!0:g==="absent"?b.status==="approved"&&b.exam_attended===!1:b.status===g,P=b=>o.filter(g=>E(g,b)).length,U=b=>{const g=new Map;return b.forEach(C=>{C.request_type&&g.set(C.request_type,(g.get(C.request_type)||0)+1)}),[...g.entries()].map(([C,S])=>({type:C,count:S})).sort((C,S)=>S.count-C.count)},R=b=>{const g=new Map;return b.forEach(C=>{const S=C.class_score_columns;S&&(g.has(S.id)||g.set(S.id,{id:S.id,name:S.assignment_name,count:0}),g.get(S.id).count++)}),[...g.values()].sort((C,S)=>S.count-C.count)},J=b=>{if(!b)return"—";const g=new Date(b);return`${g.getDate()}/${g.getMonth()+1}/${g.getFullYear()+543}`},te=b=>{var le;const g=b.students,C=b.classes,S=b.class_score_columns,z=b.status==="approved"&&b.exam_attended==null,k=b.status==="approved"&&b.exam_attended===!0,Q=b.status==="pending"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">⏳ รอดำเนินการ</span>':b.status==="approved"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ อนุมัติ</span>':'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">✕ ปฏิเสธ</span>',se=b.exam_attended===!0?`<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">📝 มาสอบแล้ว${b.exam_score!=null?" · <b>"+b.exam_score+"</b> คะแนน":" (ยังไม่ได้ใส่คะแนน)"}</span>`:b.exam_attended===!1?'<span class="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">❌ ขาดสอบ/ผิดนัด</span>':"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4" id="req-card-${b.id}">
      <!-- Header -->
      <div class="flex items-start gap-3 mb-3">
        <div class="w-9 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-white/40 shadow-sm bg-gradient-to-tr from-indigo-300 to-purple-300
                    flex items-center justify-center text-white text-sm font-bold">
          ${g!=null&&g.image_url?`<img src="${g.image_url}" class="w-full h-full object-cover"/>`:((g==null?void 0:g.full_name)??"น").charAt(0)}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${(g==null?void 0:g.full_name)??"—"}</p>
          <p class="text-xs text-gray-400">${(g==null?void 0:g.student_code)??""} · ${(g==null?void 0:g.main_room)??""}</p>
        </div>
        ${Q}
      </div>
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-600 mb-3">
        <div class="flex gap-2"><span class="text-gray-400 w-16">วิชา</span><span class="font-medium text-gray-800">${((le=C==null?void 0:C.master_subjects)==null?void 0:le.subject_name)??"—"} (${(C==null?void 0:C.class_name)??""})</span></div>
        <div class="flex gap-2"><span class="text-gray-400 w-16">ประเภท</span><span>${b.request_type}</span></div>
        ${S?`<div class="flex gap-2"><span class="text-gray-400 w-16">หัวข้อ</span><span>${S.assignment_name} (เต็ม ${S.max_score})</span></div>`:""}
        <div class="flex gap-2"><span class="text-gray-400 w-16">วันที่</span><span>${J(b.requested_date)}${b.requested_period_no?" · คาบ "+b.requested_period_no:""}</span></div>
        ${b.reason?`<div class="flex gap-2"><span class="text-gray-400 w-16">เหตุผล</span><span>${b.reason}</span></div>`:""}
        ${b.teacher_comment?`<div class="flex gap-2"><span class="text-gray-400 w-16">หมายเหตุ</span><span class="${b.status==="rejected"?"text-red-600":"text-emerald-600"} font-medium">${b.teacher_comment}</span></div>`:""}
        ${se?`<div class="mt-1">${se}</div>`:""}
      </div>
      <!-- Actions -->
      ${b.status==="pending"?`
      <div class="flex gap-2">
        <button onclick="window._approveRequest(${b.id})"
          class="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition">
          ✅ อนุมัติ
        </button>
        <button onclick="window._rejectRequest(${b.id})"
          class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition">
          ✕ ปฏิเสธ
        </button>
      </div>`:""}
      ${z?`
      <div class="border-t border-gray-100 pt-3">
        <p class="text-xs text-gray-500 mb-2 font-medium">📋 บันทึกผลการสอบ</p>
        <div class="flex gap-2">
          <button onclick="window._markAttended(${b.id})"
            class="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
            📝 มาสอบแล้ว + ใส่คะแนน
          </button>
          <button onclick="window._markAbsent(${b.id}, ${(g==null?void 0:g.id)??"null"})"
            class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 text-xs font-semibold hover:bg-red-100 transition">
            ❌ ขาดสอบ/ผิดนัด
          </button>
        </div>
      </div>`:""}
      ${k?`
      <div class="border-t border-gray-100 pt-3 flex items-center justify-between">
        <p class="text-xs text-blue-600 font-medium">📝 มาสอบแล้ว${b.exam_score!=null?" · คะแนน "+b.exam_score:""}</p>
        <button onclick="window._markAttended(${b.id})"
          class="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition font-medium">
          ✏️ แก้ไขคะแนน
        </button>
      </div>`:""}
    </div>`},I=()=>{const b=o.filter(k=>E(k,L)),g=U(b);A&&!g.some(k=>k.type===A)&&(A=null);const C=A?b.filter(k=>k.request_type===A):b,S=R(C);B&&!S.some(k=>k.id===B)&&(B=null);const z=B?C.filter(k=>{var Q;return((Q=k.class_score_columns)==null?void 0:Q.id)===B}):C;document.getElementById("req-type-filter").innerHTML=g.length>1?`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${A?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-purple-600 text-white border-purple-600"}"
        data-type="">ทุกประเภทการสอบ</button>
      ${g.map(k=>`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${A===k.type?"bg-purple-600 text-white border-purple-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-type="${k.type}">${k.type} (${k.count})</button>`).join("")}`:"",document.querySelectorAll(".req-type-tab").forEach(k=>{k.addEventListener("click",()=>{A=k.dataset.type||null,I()})}),document.getElementById("req-col-filter").innerHTML=S.length>1?`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${B?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-indigo-600 text-white border-indigo-600"}"
        data-col="">ทุกช่องคะแนน</button>
      ${S.map(k=>`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${B===k.id?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-col="${k.id}">${k.name} (${k.count})</button>`).join("")}`:"",document.querySelectorAll(".req-col-tab").forEach(k=>{k.addEventListener("click",()=>{B=k.dataset.col?Number(k.dataset.col):null,I()})}),document.getElementById("req-content").innerHTML=z.length?`<div class="space-y-3">${z.map(te).join("")}</div>`:`<div class="text-center py-16 text-gray-300">
          <p class="text-4xl mb-3">📭</p>
          <p class="text-sm">ไม่มีคำร้อง${L!=="all"?"ในสถานะนี้":""}${A?"ในประเภทนี้":""}${B?"ในช่องคะแนนนี้":""}</p>
        </div>`,document.querySelectorAll(".req-tab").forEach(k=>{const Q=k.dataset.filter===L;k.className=`req-tab flex-1 py-2 text-xs font-medium rounded-lg transition
        ${Q?"bg-white shadow text-indigo-700":"text-gray-500 hover:text-gray-700"}`})};Je(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs text-gray-400">${o.length} รายการ</span>
    </div>
    <!-- Filter tabs -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-100 rounded-xl p-1 mb-4">
      ${w.map(b=>`
      <button class="req-tab flex-1 py-2 text-xs font-medium rounded-lg transition text-gray-500 hover:text-gray-700"
        data-filter="${b.key}">
        ${b.label}${P(b.key)>0||b.key==="all"?` (${P(b.key)})`:""}
      </button>`).join("")}
    </div>
    <!-- Filter by ประเภทการสอบ -->
    <div id="req-type-filter" class="flex flex-wrap gap-1.5 mb-3"></div>
    <!-- Filter by ช่องคะแนน -->
    <div id="req-col-filter" class="flex flex-wrap gap-1.5 mb-4"></div>
    <div id="req-content"></div>
  </div>`),document.querySelectorAll(".req-tab").forEach(b=>{b.addEventListener("click",()=>{L=b.dataset.filter,I()})}),I();const ne=({title:b,body:g,confirmLabel:C,confirmCls:S="bg-emerald-600 hover:bg-emerald-700",onConfirm:z})=>{var Q;(Q=document.getElementById("req-modal"))==null||Q.remove();const k=document.createElement("div");k.id="req-modal",k.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",k.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
        <div class="px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">${b}</h3>
        </div>
        <div class="px-5 py-4">${g}</div>
        <div class="px-5 pb-5 flex gap-2">
          <button id="req-modal-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="req-modal-confirm"
            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold ${S}">
            ${C}
          </button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#req-modal-cancel").addEventListener("click",()=>k.remove()),k.addEventListener("click",se=>{se.target===k&&k.remove()}),k.querySelector("#req-modal-confirm").addEventListener("click",()=>{z(k)})},K=async(b,g,C)=>{var z,k,Q;const S=(z=b==null?void 0:b.students)==null?void 0:z.profile_id;if(S)try{const se=((Q=(k=b==null?void 0:b.classes)==null?void 0:k.master_subjects)==null?void 0:Q.subject_name)??"วิชา";await Bn.functions.invoke("send-push",{body:{title:`📋 คำร้องขอสอบ: ${g}`,body:`${se}${C?" — "+C:""}`,url:"student.html",profileIds:[S]}})}catch{}};window._approveRequest=b=>{ne({title:"✅ อนุมัติคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">หมายเหตุถึงนักเรียน <span class="text-gray-400">(ไม่บังคับ)</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="เช่น นัดสอบวันอังคาร คาบ 3 ห้องครู..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"></textarea>`,confirmLabel:"ยืนยันอนุมัติ",onConfirm:async g=>{const C=g.querySelector("#req-modal-comment").value.trim()||null;g.remove();try{await At(b,{status:"approved",teacher_comment:C}),y("อนุมัติคำร้องแล้ว ✅","success");const S=o.find(z=>z.id===b);S&&K(S,"อนุมัติแล้ว ✅",C),et(u)}catch(S){y("ไม่สำเร็จ: "+oe(S),"error")}}})},window._rejectRequest=b=>{ne({title:"✕ ปฏิเสธคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">เหตุผลที่ปฏิเสธ <span class="text-red-500">*</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="กรุณาระบุเหตุผล..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"></textarea>
             <p class="text-xs text-red-400 mt-1">บังคับกรอกทุกครั้งที่ปฏิเสธ</p>`,confirmLabel:"ยืนยันปฏิเสธ",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async g=>{const C=g.querySelector("#req-modal-comment").value.trim();if(!C){y("กรุณาระบุเหตุผลก่อนปฏิเสธ","warning");return}g.remove();try{await At(b,{status:"rejected",teacher_comment:C}),y("บันทึกการปฏิเสธแล้ว","success");const S=o.find(z=>z.id===b);S&&K(S,"ถูกปฏิเสธ ✕",C),et(u)}catch(S){y("ไม่สำเร็จ: "+oe(S),"error")}}})},window._markAttended=async b=>{var Oe,re,tt;const g=o.find(j=>Number(j.id)===Number(b)),C=(Oe=g==null?void 0:g.students)==null?void 0:Oe.id,S=(re=g==null?void 0:g.classes)==null?void 0:re.id,z=g==null?void 0:g.exam_score,k=z!=null;if(!C||!S){y("ไม่พบข้อมูลนักเรียนหรือห้องเรียนของคำร้องนี้","error");return}const Q=String((g==null?void 0:g.request_type)??"").includes("ปรับคะแนน");let se;try{se=(await ve(S)).filter(j=>["regular","override"].includes(j.column_type??"regular"))}catch(j){y("โหลดคอลัมน์คะแนนไม่สำเร็จ: "+oe(j),"error");return}if(!se.length){y("วิชานี้ยังไม่มีคอลัมน์คะแนนที่สามารถบันทึกได้","warning");return}const le=Number((tt=g==null?void 0:g.class_score_columns)==null?void 0:tt.id);if(!Q){const j=se.find(xe=>Number(xe.id)===le);j&&(se=[j])}const Ee=se.find(j=>Number(j.id)===le)??se[0],Se=se.map(j=>`
      <option value="${j.id}" data-max="${Number(j.max_score??100)}"
        ${Number(j.id)===Number(Ee.id)?"selected":""}>
        ${j.column_type==="override"?"🔄 ปรับคะแนน — ":""}${Y(j.assignment_name)} (เต็ม ${Number(j.max_score??100)})
      </option>`).join("");ne({title:k?"✏️ แก้ไขคะแนน":"📝 บันทึกผลการสอบ — มาสอบ",body:`<label class="block text-sm text-gray-600 mb-1.5">บันทึกลงคอลัมน์ <span class="text-red-500">*</span></label>
             <select id="req-modal-column" ${Q?"":"disabled"}
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4">
               ${Se}
             </select>
             ${Q?'<p class="text-xs text-blue-600 -mt-2 mb-4">เลือกคอลัมน์ที่จะรับคะแนนสอบปรับคะแนนครั้งนี้</p>':""}
             <label class="block text-sm text-gray-600 mb-1.5">คะแนนที่สอบได้ <span class="text-red-500">*</span> <span id="req-modal-max-label" class="text-gray-400">(เต็ม ${Number(Ee.max_score??100)})</span></label>
             <input id="req-modal-score" type="number" min="0" max="${Number(Ee.max_score??100)}" step="0.5"
               value="${k?z:""}"
               placeholder="0 – ${Number(Ee.max_score??100)}"
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300" />`,confirmLabel:k?"บันทึกการแก้ไข":"บันทึกคะแนน",confirmCls:"bg-blue-600 hover:bg-blue-700",onConfirm:async j=>{const xe=j.querySelector("#req-modal-column"),Z=Number(xe.value),me=xe.options[xe.selectedIndex],ae=Number((me==null?void 0:me.dataset.max)??100),nt=j.querySelector("#req-modal-score").value,Ie=parseFloat(nt);if(isNaN(Ie)||Ie<0||Ie>ae){y(`คะแนนต้องอยู่ระหว่าง 0 – ${ae}`,"warning");return}j.remove();try{const ge=await Rt(b,{exam_attended:!0,exam_score:Ie,studentId:C,assignmentId:Z});On({classId:S,columnId:Z,studentId:C,score:Ie}),y(ge!=null&&ge.linkedColumnId?"บันทึกคะแนนปรับและอัปเดตคอลัมน์หลักแล้ว ✅":k?"แก้ไขคะแนนแล้ว ✅":"บันทึกผลสอบและคะแนนแล้ว ✅","success"),et(u)}catch(ge){y("ไม่สำเร็จ: "+oe(ge),"error")}}});const D=document.getElementById("req-modal"),ce=D==null?void 0:D.querySelector("#req-modal-column"),be=D==null?void 0:D.querySelector("#req-modal-score"),Le=D==null?void 0:D.querySelector("#req-modal-max-label");ce==null||ce.addEventListener("change",()=>{const j=ce.options[ce.selectedIndex],xe=Number((j==null?void 0:j.dataset.max)??100);be.max=String(xe),be.placeholder=`0 – ${xe}`,Le.textContent=`(เต็ม ${xe})`,be.value!==""&&Number(be.value)>xe&&(be.value="")})},window._markAbsent=(b,g)=>{const C=o.filter(S=>{var z;return((z=S.students)==null?void 0:z.id)===g&&S.exam_attended===!1}).length;ne({title:"❌ ขาดสอบ / ผิดนัด",body:`<p class="text-sm text-gray-600 mb-2">ยืนยันว่านักเรียนไม่มาสอบตามนัด?</p>
             ${C>=1?`<div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                    ⚠️ นักเรียนผิดนัดมาแล้ว <b>${C}</b> ครั้ง
                    ${C+1>=2?"<br/>หากยืนยัน จะครบ 2 ครั้ง — <b>นักเรียนจะไม่สามารถยื่นคำร้องได้อีก</b>":""}
                  </div>`:""}`,confirmLabel:"ยืนยัน — ขาดสอบ/ผิดนัด",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async S=>{S.remove();try{await Rt(b,{exam_attended:!1,exam_score:null}),y("บันทึกว่าขาดสอบ/ผิดนัดแล้ว","success"),et(u)}catch(z){y("ไม่สำเร็จ: "+oe(z),"error")}}})}}const ps=Object.freeze(Object.defineProperty({__proto__:null,_openCourseColsModal:rs,renderGrades:Jn,renderGradesGrid:qe,renderRequests:et},Symbol.toStringTag,{value:"Module"}));export{rs as _,qe as a,et as b,On as p,Jn as r,ps as t};
