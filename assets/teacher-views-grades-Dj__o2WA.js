const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pp5-doc-Dyumokif.js","assets/api-vSXCr5aV.js","assets/supabase-BV-W2lsh.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/score-display-EKXBehKd.js","assets/ui-DU3V9L7w.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-PYNJrmMY.js"])))=>i.map(i=>d[i]);
import{_ as lr,a as f,g as fe}from"./ui-DU3V9L7w.js";import{c as Mn,b as Tn,K as dr,bV as Fe,bS as ir,d2 as en,d3 as cr,bW as De,aF as ur,d4 as mr,d5 as pr,aG as xr,c_ as br,d6 as gr,d7 as fr,bY as lt,d8 as yr,d9 as hr,bX as vr,bZ as wr,b_ as Nt,da as Lt,db as $r,dc as _r,cc as kr,dd as Sr,de as Sn,df as En}from"./api-vSXCr5aV.js";import{s as Er,i as tn,b as qr,a as Cr,e as It,n as qn,c as Lr}from"./score-display-EKXBehKd.js";import{g as Ir,S as Nr,V as jr}from"./regrade-menu-window-DuuFB9GJ.js";import{s as An}from"./supabase-BV-W2lsh.js";import{i as Mr}from"./skill-groups-BY1NTbf4.js";import{openScoreScanner as Cn}from"./score-qr-scanner-Dqudf-xM.js";import{setActiveNav as rn,setTitle as sn,setContent as et,_htmlEsc as K,applyReadingGradesFromConfig as Tr,_readingGrade as Ar}from"./teacher-views-utils-PYNJrmMY.js";const nn="pp5:gradebook-updated",Bn="pp5_gradebook_update",Br="pp5-gradebook-sync-v1";let Ye=null;try{Ye=new BroadcastChannel(Br)}catch{}function Rr(y){const a={...y,eventId:`${Date.now()}-${Math.random().toString(36).slice(2)}`,updatedAt:new Date().toISOString()};window.dispatchEvent(new CustomEvent(nn,{detail:a}));try{Ye==null||Ye.postMessage(a)}catch{}try{localStorage.setItem(Bn,JSON.stringify(a))}catch{}return a}function Gr(y){const a=new Set,E=B=>{!(B!=null&&B.eventId)||a.has(B.eventId)||(a.add(B.eventId),a.size>100&&a.delete(a.values().next().value),y(B))},G=B=>E(B.detail),U=B=>E(B.data),H=B=>{if(!(B.key!==Bn||!B.newValue))try{E(JSON.parse(B.newValue))}catch{}};return window.addEventListener(nn,G),Ye==null||Ye.addEventListener("message",U),window.addEventListener("storage",H),()=>{window.removeEventListener(nn,G),Ye==null||Ye.removeEventListener("message",U),window.removeEventListener("storage",H)}}const Ln=new TextEncoder;function Rn(y){return String(y??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function Or(y){let a="";for(let E=y+1;E>0;E=Math.floor((E-1)/26))a=String.fromCharCode(65+(E-1)%26)+a;return a}function Fr(y,a){if(a==null||a==="")return"";if(typeof a=="number"&&Number.isFinite(a))return`<c r="${y}"><v>${a}</v></c>`;const E=String(a),G=/^\s|\s$/.test(E)?' xml:space="preserve"':"";return`<c r="${y}" t="inlineStr"><is><t${G}>${Rn(E)}</t></is></c>`}function Hr(y){const a=y.map((G,U)=>{const H=G.map((B,oe)=>Fr(`${Or(oe)}${U+1}`,B)).join("");return`<row r="${U+1}">${H}</row>`}).join("");return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="A1:E${Math.max(y.length,1)}"/>
  <sheetViews><sheetView workbookViewId="0" showGridLines="1"/></sheetViews>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="34" customWidth="1"/>
    <col min="4" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>${a}</sheetData>
  <pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/>
</worksheet>`}function zr(y){return(String(y??"").replace(/[\\/?*\[\]:]/g,"").trim()||"GradeOnline").slice(0,31)}function In(y){return String(y??"").replace(/[\\/:*?"<>|]/g,"-").trim()||"GradeOnline"}function ge(y,a,E){y.setUint16(a,E,!0)}function Ae(y,a,E){y.setUint32(a,E>>>0,!0)}const Ur=(()=>{const y=new Uint32Array(256);for(let a=0;a<256;a++){let E=a;for(let G=0;G<8;G++)E=E&1?3988292384^E>>>1:E>>>1;y[a]=E>>>0}return y})();function Vr(y){let a=4294967295;for(const E of y)a=Ur[(a^E)&255]^a>>>8;return(a^4294967295)>>>0}function Nn(y){const a=y.reduce((U,H)=>U+H.length,0),E=new Uint8Array(a);let G=0;for(const U of y)E.set(U,G),G+=U.length;return E}function Pr(y){const a=[],E=[];let G=0;for(const oe of y){const J=Ln.encode(oe.name),Y=Ln.encode(oe.content),pe=Vr(Y),be=new Uint8Array(30+J.length+Y.length),R=new DataView(be.buffer);Ae(R,0,67324752),ge(R,4,20),ge(R,6,0),ge(R,8,0),ge(R,10,0),ge(R,12,0),Ae(R,14,pe),Ae(R,18,Y.length),Ae(R,22,Y.length),ge(R,26,J.length),ge(R,28,0),be.set(J,30),be.set(Y,30+J.length),a.push(be);const ye=new Uint8Array(46+J.length),z=new DataView(ye.buffer);Ae(z,0,33639248),ge(z,4,20),ge(z,6,20),ge(z,8,0),ge(z,10,0),ge(z,12,0),ge(z,14,0),Ae(z,16,pe),Ae(z,20,Y.length),Ae(z,24,Y.length),ge(z,28,J.length),ge(z,30,0),ge(z,32,0),ge(z,34,0),ge(z,36,0),Ae(z,38,0),Ae(z,42,G),ye.set(J,46),E.push(ye),G+=be.length}const U=Nn(E),H=new Uint8Array(22),B=new DataView(H.buffer);return Ae(B,0,101010256),ge(B,4,0),ge(B,6,0),ge(B,8,y.length),ge(B,10,y.length),Ae(B,12,U.length),Ae(B,16,G),ge(B,20,0),Nn([...a,U,H])}function Kr({subjectName:y,className:a,records:E}){const U=[["เลขที่","รหัสนักเรียน","ชื่อ-สกุล","คะแนนรวม","เกรด"],...E.map((pe,be)=>[be+1,String(pe.studentCode??""),String(pe.studentName??""),pe.total===""||pe.total==null?"":Number(pe.total),String(pe.grade??"")])],H=zr(y||a||"GradeOnline"),B=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="${Rn(H)}" sheetId="1" r:id="rId1"/></sheets>
</workbook>`,oe=[{name:"[Content_Types].xml",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`},{name:"_rels/.rels",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`},{name:"xl/workbook.xml",content:B},{name:"xl/_rels/workbook.xml.rels",content:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`},{name:"xl/worksheets/sheet1.xml",content:Hr(U)}],J=new Blob([Pr(oe)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),Y=document.createElement("a");Y.href=URL.createObjectURL(J),Y.download=`GradeOnline-${In(y||"รายวิชา")}-${In(a||"ห้องเรียน")}.xlsx`,Y.click(),setTimeout(()=>URL.revokeObjectURL(Y.href),1e3)}async function Gn(y){if(rn("grades"),sn("บันทึกคะแนน","scores"),et(`<div class="flex justify-center py-20 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายการห้องเรียน...</div>`),!(y!=null&&y.id)){et('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">⚠️</p><p>ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p></div>');return}try{const[a,E,G]=await Promise.all([Mn(y.id),Tn().catch(()=>({})),dr().catch(()=>[])]),U=parseInt(E.academicYear??E.academic_year??2568),H=parseInt(E.semester??1),B=g=>`${g.academic_year!=null&&Number.isFinite(+g.academic_year)?+g.academic_year:U}:${g.semester!=null&&Number.isFinite(+g.semester)?+g.semester:H}`,oe=g=>{const[M,T]=g.split(":");return`ภาคเรียนที่ ${T}/${M}`},J=`${U}:${H}`,Y=(G??[]).map(g=>`${g.academic_year}:${g.semester}`),pe=[...new Set([J,...Y,...a.map(B)])].sort((g,M)=>g===J?-1:M===J?1:M.localeCompare(g,void 0,{numeric:!0})),be=localStorage.getItem(`pp5_teacher_grade_term_${y.id}`),R=pe.includes(be)?be:J,ye=g=>{const M=a.filter(v=>B(v)===g),T=g!==J,Q=document.getElementById("grade-history-class-list");Q&&(Q.innerHTML=M.length?M.map(v=>{var re,ce;return`
        <article class="rounded-2xl border ${T?"border-amber-200 bg-amber-50/30":"border-gray-100 bg-white"} p-4 shadow-sm flex items-center justify-between gap-3">
          <div class="min-w-0">
            <p class="text-xs text-gray-400 font-mono">${K(((re=v.master_subjects)==null?void 0:re.subject_code)??"—")} · ${K(oe(g))}</p>
            <h3 class="font-bold text-gray-800 truncate mt-1">${K(((ce=v.master_subjects)==null?void 0:ce.subject_name)??"—")}</h3>
            <p class="text-sm text-gray-500 truncate">ห้อง ${K(v.class_name??"—")}</p>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <button class="grade-history-open px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold" data-class-id="${v.id}">📝 คะแนน</button>
            <button class="grade-history-pp5 px-3 py-2 rounded-xl border border-violet-200 text-violet-700 hover:bg-violet-50 text-xs font-semibold" data-class-id="${v.id}">📄 ปพ.5</button>
          </div>
        </article>`}).join(""):'<div class="rounded-2xl border border-dashed border-gray-200 p-10 text-center text-sm text-gray-400">ภาคเรียนนี้ยังไม่มีห้องเรียน</div>',Q.querySelectorAll(".grade-history-open").forEach(v=>v.addEventListener("click",()=>{const re=a.find(ce=>ce.id===Number(v.dataset.classId));re&&(window._backToClasses=()=>Gn(y),Be(y,re))})),Q.querySelectorAll(".grade-history-pp5").forEach(v=>v.addEventListener("click",async()=>{const re=Number(v.dataset.classId),{openPP5Doc:ce}=await lr(async()=>{const{openPP5Doc:we}=await import("./pp5-doc-Dyumokif.js").then(He=>He.p);return{openPP5Doc:we}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]));await ce(re)})))};et(`<div class="animate-fade space-y-4">
      <div class="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div><h2 class="font-bold text-indigo-900">📝 บันทึกคะแนน</h2><p class="text-xs text-indigo-600 mt-1">เลือกภาคเรียนเพื่อเปิดคะแนนและเอกสาร ปพ.5 ของภาคเรียนนั้น</p></div>
          <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
            <span>กำลังดู</span>
            <select id="grade-history-term" class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700">
              ${pe.map(g=>`<option value="${K(g)}" ${g===R?"selected":""}>${K(oe(g))}${g===J?" (ปัจจุบัน)":" (ย้อนหลัง)"}</option>`).join("")}
            </select>
          </label>
        </div>
      </div>
      <div id="grade-history-note" class="text-xs text-gray-500"></div>
      <div id="grade-history-class-list" class="space-y-3"></div>
    </div>`);const z=document.getElementById("grade-history-term"),_=()=>{const g=z.value,M=document.getElementById("grade-history-note");M&&(M.textContent=g===J?"แสดงห้องเรียนของภาคเรียนปัจจุบัน":"โหมดข้อมูลย้อนหลัง: แก้ไขคะแนน ร เป็น 0 ได้ และเปิด/ดาวน์โหลด ปพ.5 ของภาคเรียนเดิมได้ โดยไม่ปะปนกับภาคเรียนปัจจุบัน"),ye(g)};z.addEventListener("change",()=>{localStorage.setItem(`pp5_teacher_grade_term_${y.id}`,z.value),_()}),z.value=R,_()}catch(a){console.error("[renderGrades] โหลดรายการห้องเรียนไม่สำเร็จ",a),et('<div class="text-center py-20 text-red-400"><p class="text-4xl mb-3">⚠️</p><p>โหลดรายการห้องเรียนไม่สำเร็จ</p></div>')}}let Rt=null;function Jr(y){return y>=80?4:y>=75?3.5:y>=70?3:y>=65?2.5:y>=60?2:y>=55?1.5:y>=50?1:0}function Wr(y){return y>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:y>=2.5?{label:"ดี",cls:"text-blue-600"}:y>=1?{label:"ผ่าน",cls:"text-amber-500"}:{label:"ไม่ผ่าน",cls:"text-red-600"}}function Yr(y,a,E){if(E)return{allowed:!0,claimedRoom:null};let G=null;try{G=localStorage.getItem(`pp5_gradeonline_room_${y}`)}catch{}return!G||G===a?{allowed:!0,claimedRoom:G}:{allowed:!1,claimedRoom:G}}function Xr(y,a){try{localStorage.setItem(`pp5_gradeonline_room_${y}`,a)}catch{}}function Qr(y,a){var G;(G=document.getElementById("gol-room-paywall"))==null||G.remove();const E=document.createElement("div");E.id="gol-room-paywall",E.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",E.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative">
      <button id="gol-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์ส่งคะแนนเข้า GradeOnline ใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${K(y)}</b> ไว้แล้ว
        ${a?`<br><br>ต้องการใช้กับห้อง <b>${K(a)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ (สรุปเกรดเข้าระบบแก้ค้างเก่ายังส่งได้ตามปกติ)
      </p>
      <button id="gol-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(E),E.querySelector("#gol-pw-close").addEventListener("click",()=>E.remove()),E.querySelector("#gol-pw-donate").addEventListener("click",()=>{var U;E.remove(),(U=document.getElementById("btn-donate-float"))==null||U.click()})}function Zr(y,a){var U;(U=document.getElementById("gol-result-modal"))==null||U.remove();const E=document.createElement("div");E.id="gol-result-modal",E.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",E.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📤 ส่งคะแนนเข้า GradeOnline</h3>
        <button id="gol-result-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-4 space-y-4 text-sm text-gray-600">
        <p class="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">เตรียมคะแนนไว้แล้ว ${a} คน — ใช้รหัสด้านล่างตอนกดปุ่มบุ๊กมาร์กในหน้า GradeOnline</p>
        <div class="text-center bg-gray-50 rounded-xl py-3">
          <p class="text-[11px] text-gray-400 mb-1">รหัสอ้างอิง</p>
          <p class="text-2xl font-mono font-bold tracking-widest text-indigo-700">${K(y)}</p>
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
    </div>`,document.body.appendChild(E);const G=()=>E.remove();E.querySelector("#gol-result-close").onclick=G,E.onclick=H=>{H.target===E&&G()}}async function Be(y,a){var G,U,H,B,oe,J,Y,pe,be;Rt==null||Rt(),Rt=null,window._currentGradeTeacher=y,rn("grades"),sn("บันทึกคะแนน","scores");const E=a.master_subjects;et(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`);try{let R=a.id;if(a.source_class_id){const{data:e}=await An.from("classes").select("id, academic_year, semester").eq("id",a.source_class_id).maybeSingle(),r=a.academic_year!=null&&a.semester!=null,o=(e==null?void 0:e.academic_year)!=null&&(e==null?void 0:e.semester)!=null;e&&(!r||o&&+e.academic_year==+a.academic_year&&+e.semester==+a.semester)&&(R=e.id)}const ye=Fe(R),[z,_,g,[M,T,Q],v,re,ce]=await Promise.all([ir(a.id),ye,ye.then(e=>en(R,e)),cr(a.id,["กลางภาค","ปลายภาค","ระหว่างเรียน"]),Tn().catch(()=>({})),y?Mn(y.id).catch(()=>[]):Promise.resolve([]),Ir().catch(()=>({}))]),we=parseInt(a.academic_year??v.academicYear??2568),He=parseInt(a.semester??v.semester??1),dt=parseInt(v.academicYear??2568),$e=parseInt(v.semester??1),Ie=we!==dt||He!==$e,Ve=Nr(ce);Tr(v),a.course_id&&_.length===0&&setTimeout(async()=>{var e;try{const r=re.filter(i=>{if(i.id===a.id||i.course_id!==a.course_id)return!1;const w=a.academic_year??dt,c=a.semester??$e;return(i.academic_year??dt)===w&&(i.semester??$e)===c}),o=(await Promise.all(r.map(async i=>{const w=await Fe(i.id).catch(()=>[]);return w.length?{...i,cols:w}:null}))).filter(Boolean);if(!o.length)return;(e=document.getElementById("grade-same-subj-popup"))==null||e.remove();const u=document.createElement("div");u.id="grade-same-subj-popup",u.className="fixed inset-0 z-[190] flex items-center justify-center p-6",u.style.background="rgba(0,0,0,0.45)",u.innerHTML=`
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
                <div class="text-3xl mb-2">📋</div>
                <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
                <p class="text-indigo-100 text-xs mt-1">ยังไม่มีคอลัมน์คะแนน — ต้องการคัดลอกจากห้องที่มีอยู่แล้วไหม?</p>
              </div>
              <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
                ${o.map(i=>`
                <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">${i.class_name}</p>
                    <p class="text-xs text-gray-400">${i.cols.length} คอลัมน์</p>
                  </div>
                  <button class="grade-copy-cols flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
                    data-src="${i.id}">
                    คัดลอก
                  </button>
                </div>`).join("")}
              </div>
              <div class="px-5 pb-5">
                <button id="grade-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
              </div>
            </div>`,document.body.appendChild(u),u.querySelector("#grade-ssp-close").addEventListener("click",()=>u.remove()),u.querySelectorAll(".grade-copy-cols").forEach(i=>{i.addEventListener("click",async()=>{const w=o.find(c=>c.id===parseInt(i.dataset.src));i.disabled=!0,i.textContent="⏳";try{for(const c of w.cols)await De({class_id:a.id,assignment_name:c.assignment_name,assignment_type:c.assignment_type,sheet_column:c.sheet_column??"",max_score:c.max_score});f(`คัดลอก ${w.cols.length} คอลัมน์จาก ${w.class_name} ✅`,"success"),u.remove(),Be(y,a)}catch(c){f("คัดลอกไม่สำเร็จ: "+fe(c),"error"),i.disabled=!1,i.textContent="คัดลอก"}})})}catch{}},600);const ze=we,tt=He,bt=(E==null?void 0:E.subject_group)??"",Ot=Mr(a==null?void 0:a.skill_group),de=["AGM","AGMVOC"].includes(bt);let qe=g,Pe=[];Ot?Pe=(await ur(a.academic_year??ze,a.semester??tt,"สามัญ")).slice(0,3).map(r=>r.name):de&&(Ie?Pe=["คะแนนมาเรียน","คะแนนละหมาด"]:(Pe=(await mr(a.id,{semesterStart:v.semester_start,semesterEnd:v.semester_end,attendanceScoreMode:v.attendanceScoreMode??"recorded"})).columnNames??["คะแนนมาเรียน","คะแนนละหมาด"],qe=await en(a.id)));try{if(!Ie){const e=await pr(a.id,{attendanceScoreMode:v.attendanceScoreMode??"recorded"});e.columns>0&&(qe=await en(a.id),e.skipped>0&&f(`ดึงคะแนนมาเรียนอัตโนมัติแล้ว (ข้าม ${e.skipped} รายการที่เคยแก้คะแนนด้วยมือ)`,"success"))}}catch(e){console.error("syncAutoAttendanceScoreColumns failed",e)}let Xe=[],gt=[];try{Xe=await xr(ze,tt),gt=Xe.length?await br(Xe.map(e=>e.id),z.map(e=>e.id)):[],Xe.length?gt.length||f(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนห้องนี้ ภาค ${tt}/${ze}`,"warning"):f(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ ภาค ${tt}/${ze}`,"warning")}catch(e){console.error("load reading evaluation failed",e),f(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${fe(e)}`,"error")}const jt={};for(const e of gt)jt[e.student_id]=(jt[e.student_id]??0)+(parseFloat(e.score)||0);const nt={},rt=Xe.reduce((e,r)=>e+(parseFloat(r.max_score)||0),0);for(const[e,r]of Object.entries(jt)){const o=rt>0?r/rt*100:0,u=Ar(o);nt[parseInt(e)]={score100:o,label:u.label,cls:u.cls}}let _e=Pe.length?await Fe(R):_;if(_e.length===0){const e=(r,o)=>De({class_id:a.id,assignment_name:`คะแนนที่ ${o}`,max_score:20,assignment_type:r,sheet_column:""});for(let r=1;r<=5;r++)await e("midterm",r);for(let r=1;r<=5;r++)await e("final",r);_e=await Fe(a.id)}_e=Er(_e,Pe);const On=new Set(Pe.length?_e.filter(e=>Pe.includes(e.assignment_name)).map(e=>e.id):[]),te=e=>{const r=typeof e=="object"?e==null?void 0:e.id:e;return On.has(r)},on=e=>e.assignment_name==="คะแนนละหมาด"?`คะแนนระบบกลาง (แก้ไขไม่ได้)
คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา
หากคะแนนว่าง = ครูที่ปรึกษาศาสนายังไม่ได้บันทึกในสัปดาห์นั้น`:"คะแนนระบบกลาง: แก้ไขไม่ได้",ke=_e.filter(tn),Ke=_e.filter(e=>e.column_type==="derived"),Ne=_e.filter(e=>e.column_type==="override"),an=_e.filter(qr),Kt=_e.filter(e=>(e.column_type??"regular")==="regular"&&!tn(e)),je=Object.fromEntries(_e.map(e=>[e.id,e])),X=Kt.filter(e=>e.assignment_type!=="final"&&e.assignment_type!=="ปลายภาค"),Z=Kt.filter(e=>e.assignment_type==="final"||e.assignment_type==="ปลายภาค"),it=Cr(ke),ln=`gradeToggles_${(y==null?void 0:y.id)??"guest"}_${a.id}`,ct=(()=>{try{return JSON.parse(localStorage.getItem(ln)??"{}")}catch{return{}}})(),Ft=()=>{try{localStorage.setItem(ln,JSON.stringify({columnRoundSettings:ut,toggleForceGrade:ht,toggleKhuna:pt,toggleRead:vt,showBonusCols:Ee,toggleScoreColors:Mt}))}catch{}};let Ee=ct.showBonusCols??!1,ft=!1;const F={};for(const e of qe)F[e.student_id]||(F[e.student_id]={}),F[e.student_id][e.score_column_id]={orig:e.original_score,retake:e.retake_score,final:e.final_score??e.original_score,history:e.score_history??[],score_formula:e.score_formula??null,score_formula_refs:e.score_formula_refs??[]};for(const e of z)e.special_result&&(F[e.id]||(F[e.id]={}),F[e.id].__force=e.special_result);const Je=(e,r)=>{var o,u,i,w;return((u=(o=F[e])==null?void 0:o[r])==null?void 0:u.final)??((w=(i=F[e])==null?void 0:i[r])==null?void 0:w.orig)??null},dn=(e,r)=>{const o=Je(e,r);return o==null||o===""?0:Number(o)||0},Fn=(e,r)=>{if(r.column_type==="derived")return!0;const o=Je(e,r.id);return o!==null&&o!==""&&Number.isFinite(Number(o))},cn=e=>an.length>0&&an.every(r=>Fn(e,r)),Ht=(e,r)=>{var o,u,i;return(((i=(u=(o=F[e])==null?void 0:o[r])==null?void 0:u.history)==null?void 0:i.length)??0)>1},ts=(e,r)=>r.reduce((o,u)=>o+(parseFloat(Je(e,u.id))||0),0),yt=e=>e.reduce((r,o)=>r+(parseFloat(o.max_score)||0),0),Jt=(e,r,o=new Set)=>{var L;const u=`${e}:${r.id}`;if(o.has(u))return null;const i=new Set(o);i.add(u);const w=(L=F[e])==null?void 0:L[r.id];if(w!=null&&w.score_formula){const D=w.score_formula_refs??[],b=D.map(d=>Wt(d.student_id??e,d.col_id,i));if(D.length&&b.every(d=>d==null||d===""))return null;const N=Object.fromEntries(D.map((d,p)=>[d.var,b[p]])),s=It(w.score_formula,N);return s==null||!Number.isFinite(s)?null:Math.max(0,r.max_score?Math.min(s,Number(r.max_score)):s)}const c=Je(e,r.id),k=c!=null&&c!=="",q=dn(e,r.id);if(!r.bonus_formula)return k?q:null;if(!k&&it.every(D=>{const b=Je(e,D.id);return b==null||b===""}))return null;const j=Object.fromEntries(it.map(D=>[D.var,dn(e,D.id)])),P=It(r.bonus_formula,j)??0;return r.max_score?Math.min(q+P,r.max_score):q+P},Wt=(e,r,o=new Set)=>{const u=je[r];if(!u)return null;const i=`${e}:${u.id}`;if(o.has(i))return null;const w=new Set(o);return w.add(i),u.column_type==="derived"?Yt(u,e,w):Jt(e,u,o)},We=(e,r)=>{const o=Jt(e,r);return o??""},un=(e,r)=>r.reduce((o,u)=>o+Jt(e,u),0),Yt=(e,r,o=new Set)=>{if(!e.formula)return 0;const u=e.formula_refs??[],i=u.map(c=>Wt(c.student_id??r,c.col_id,o));if(u.length&&i.every(c=>c==null||c===""))return null;const w=Object.fromEntries(u.map((c,k)=>[c.var,i[k]??0]));return It(e.formula,w)??0};let Xt=!1;const Hn=await gr(a.id).catch(()=>(Xt=!0,null));let ut=qn(Hn??ct.columnRoundSettings??{total:ct.toggleRound??!0}),mt=ut.forcedGradeColor==="black"?"black":"red";const zt=e=>!!ut[e],st=(e,r)=>{if(r===""||r==null)return r??"";if(!zt(e))return r;const o=parseFloat(r);return Number.isFinite(o)?Math.round(o):r},Re=(e,r,o=1)=>zt(e)?Math.round(r):Number(r.toFixed(o));let ht=ct.toggleForceGrade??!1,pt=ct.toggleKhuna??!0,vt=ct.toggleRead??!0,Mt=ct.toggleScoreColors??!1;const zn=["0","ร","มส","มผ"],Un=v.forceGradeOptions?String(v.forceGradeOptions).split(",").map(e=>e.trim()).filter(Boolean):zn,Tt=(e,r)=>{if(!Mt||r===""||r==null||!Number.isFinite(Number(r))||!(Number(e.max_score)>0))return"";const o=Math.max(0,Math.min(1,Number(r)/Number(e.max_score))),u=Math.round(o*120);return`background-color:hsl(${u} 72% 88%);color:hsl(${u} 55% 24%);`},Vn=(e,r,o)=>{const u=e==null?void 0:e.closest("td");u&&(u.style.cssText=`width:${u.offsetWidth||se}px;min-width:${se}px;height:30px;${Tt(r,o)}`)},Qe=e=>{const r=yt(X),o=yt(Z),u=Ke.reduce((N,s)=>N+(parseFloat(s.max_score)||0),0),i=un(e,X),w=un(e,Z),c=Ke.reduce((N,s)=>N+(Yt(s,e)||0),0),k=r+o+u,q=i+w+c,j=Re("total",q,1),P=Lr(ut,q),L=k>0?P/k*100:0,D=Jr(L),b=Wr(D);return{midRaw:i,finRaw:w,pct:L,total:j,grade:D,khuna:b}},mn=()=>{const e=[];return{records:z.map(o=>{var q;const{pct:u,grade:i}=Qe(o.id),w=((q=F[o.id])==null?void 0:q.__force)||"",c=String(w).trim(),k=c!==""&&Number.isFinite(Number(c));return!cn(o.id)&&(!c||k)?(e.push(o),null):{studentCode:o.student_code,studentName:o.full_name,total:c&&!k?"":Math.round(u*10)/10,grade:w||(i>0?String(i):"0")}}).filter(Boolean),incomplete:e}},pn="sticky left-0 z-20 bg-white border border-gray-200",Ut="sticky z-20 bg-white border border-gray-200",ue="border border-gray-200 text-center text-xs",xn=160,se=76,wt=(e,r,o,u="bg-emerald-500 text-white shadow-sm",i="bg-gray-100 text-gray-500 hover:bg-gray-200")=>`<button class="grade-toggle text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all select-none whitespace-nowrap ${o?u:i}"
        data-toggle="${e}">${r}</button>`,Pn=(e,r)=>{if(te(r)){f("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}const o=[...X,...Z].find(s=>s.id===r),u=(o==null?void 0:o.assignment_type)==="final",i=fr((o==null?void 0:o.assignment_name)||""),w=i==="กลางภาค"||i==="ปลายภาค"||i==="สอบปรับ";let c;w&&u?c=T:w&&!u?c=M:c=Q.cols.length>0?Q:u?T:M;const k=c.cols,q=c.isFixed;if(document.querySelectorAll(".sheet-col-popup").forEach(s=>s.remove()),q&&k.length===1){const s=k[0];if(e.textContent.trim()!==s){lt(r,{sheet_column:s}).catch(()=>{}),e.textContent=s;const d=[...X,...Z].find(p=>p.id===r);d&&(d.sheet_column=s)}return}const j=e.getBoundingClientRect(),P=e.textContent.trim(),L=document.createElement("div");L.className="sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",L.style.cssText=`top:${j.bottom+4}px;left:${Math.max(4,j.left-20)}px;min-width:${k.length>0?220:180}px`;const D=(o==null?void 0:o.assignment_name)||(u?"ปลายภาค":"กลางภาค");L.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${D}</span>
          ${q?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':""}</p>
        ${k.length>0?`
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${k.map(s=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${s===P?"border-blue-500 bg-blue-50 text-blue-700 font-bold":"border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"}"
            data-val="${s}" >${s}</button>`).join("")}
        </div>`:""}
        ${q?`<input id="scp-inp" type="hidden" value="${k[0]||P}"/>`:`<input id="scp-inp" type="text" value="${P==="—"?"":P}" placeholder="${k.length>0?"หรือพิมพ์เอง...":"เช่น EK"}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(L);const b=L.querySelector("#scp-inp");b.focus(),b.select(),b.addEventListener("input",s=>{s.target.value=s.target.value.toUpperCase()}),L.querySelectorAll(".scp-opt").forEach(s=>{s.addEventListener("click",()=>{b.value=s.dataset.val,L.querySelectorAll(".scp-opt").forEach(d=>{d.className=d.className.replace("border-blue-500 bg-blue-50 text-blue-700 font-bold","border-gray-200 text-gray-600")}),s.className=s.className.replace("border-gray-200 text-gray-600","border-blue-500 bg-blue-50 text-blue-700 font-bold")})});const N=async()=>{const s=b.value.trim().toUpperCase()||null;try{await lt(r,{sheet_column:s}),e.textContent=s||"—";const d=[...X,...Z].find(p=>p.id===r);d&&(d.sheet_column=s),L.remove()}catch{f("บันทึกไม่สำเร็จ","error")}};b.addEventListener("keydown",s=>{s.key==="Enter"&&N()}),L.querySelector("#scp-save").addEventListener("click",N),L.querySelector("#scp-cancel").addEventListener("click",()=>L.remove()),setTimeout(()=>{const s=d=>{!L.contains(d.target)&&d.target!==e&&(L.remove(),document.removeEventListener("click",s))};document.addEventListener("click",s)},100)},Kn=(e,r)=>{if(te(r)){f("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}document.querySelectorAll(".max-score-popup").forEach(k=>k.remove());const o=[...X,...Z].find(k=>k.id===r),u=e.getBoundingClientRect(),i=document.createElement("div");i.className="max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",i.style.cssText=`top:${u.bottom+4}px;left:${Math.max(4,u.left-20)}px;min-width:160px`,i.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${(o==null?void 0:o.max_score)||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(i);const w=i.querySelector("#msp-inp");w.focus(),w.select();const c=async()=>{const k=Math.max(1,parseFloat(w.value)||1);try{await lt(r,{max_score:k}),o&&(o.max_score=k),i.remove(),ve()}catch{f("บันทึกไม่สำเร็จ","error")}};w.addEventListener("keydown",k=>{k.key==="Enter"&&c()}),i.querySelector("#msp-save").addEventListener("click",c),i.querySelector("#msp-cancel").addEventListener("click",()=>i.remove()),setTimeout(()=>{const k=q=>{!i.contains(q.target)&&q.target!==e&&(i.remove(),document.removeEventListener("click",k))};document.addEventListener("click",k)},100)},Jn=(e,r,o)=>{var D;(D=document.getElementById("sg-detail-modal"))==null||D.remove();const{midRaw:u,finRaw:i,total:w,grade:c,khuna:k}=o,q=yt(X),j=yt(Z),P=b=>{var d,p;const N=((d=r[b.id])==null?void 0:d.final)??((p=r[b.id])==null?void 0:p.orig)??null,s=N!=null&&b.max_score>0?(N/b.max_score*100).toFixed(0):"—";return`<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${b.assignment_name||"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${N??"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${b.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${s}%</td>
        </tr>`},L=document.createElement("div");L.id="sg-detail-modal",L.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",L.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${e.image_url?`<img src="${e.image_url}" class="w-9 h-11 rounded-lg object-cover border border-gray-200 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${e.full_name}</p>
            <p class="text-xs text-gray-400">${e.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${c>0?c.toFixed(1):"0"}</p>
            <p class="text-xs font-medium ${k.cls}">${k.label}</p>
          </div>
          <button id="sg-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-4 space-y-4">
          ${X.length>0?`<div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-blue-100">
              <thead><tr class="bg-blue-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${X.map(P).join("")}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${Re("mid_subtotal",u,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${q}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${q>0?(u/q*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          ${Z.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${Z.map(P).join("")}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${Re("fin_subtotal",i,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${j}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${j>0?(i/j*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${w>0?w:"—"}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${c>0?c.toFixed(1):"0"}
              <span class="text-sm font-semibold ${k.cls}"> — ${k.label}</span></p>
          </div>
        </div>
      </div>`,document.body.appendChild(L),L.querySelector("#sg-close").addEventListener("click",()=>L.remove()),L.addEventListener("click",b=>{b.target===L&&L.remove()})};let Vt="",At="all",$t="all",Me=!1,xt=null;const bn=e=>{var u;const r=Vt.trim().toLowerCase();if(r&&!`${e.student_code??""} ${e.full_name??""}`.toLowerCase().includes(r))return!1;const o=cn(e.id);if(At==="incomplete"&&o||At==="complete"&&!o)return!1;if($t!=="all"){const i=String(((u=F[e.id])==null?void 0:u.__force)??"").trim(),{grade:w}=Qe(e.id);if($t==="flagged"&&!i&&!(o&&w===0)||$t==="special"&&!i)return!1}return!0},Wn=()=>{const e=!!Vt.trim()||At!=="all"||$t!=="all",r=document.getElementById("grade-filter-badge"),o=document.getElementById("btn-grade-filter");r&&r.classList.toggle("hidden",!e),o&&(o.classList.toggle("bg-indigo-50",e),o.classList.toggle("border-indigo-300",e),o.classList.toggle("text-indigo-700",e));const u=document.getElementById("grade-filter-summary");if(u){const i=z.filter(bn).length;u.textContent=e?`แสดง ${i} จาก ${z.length} คน`:`ทั้งหมด ${z.length} คน`}},Te=()=>{const e=document.getElementById("grade-grid-wrap");e&&(e.querySelectorAll("tr[data-sid]").forEach(r=>{const o=z.find(u=>Number(u.id)===Number(r.dataset.sid));r.style.display=o&&bn(o)?"":"none"}),Wn())},Ze=()=>{const e=document.getElementById("grade-grid-wrap");e&&(xt=[],e.querySelectorAll(".grade-input").forEach(r=>{xt.push({el:r,type:"input",val:r.value}),r.value=""}),e.querySelectorAll('[id^="gmid-"],[id^="gfin-"],[id^="gtotal-"],[id^="ggrade-"],[id^="gkhuna-"],[id^="gread-"],.grade-derived-td').forEach(r=>{xt.push({el:r,type:"text",val:r.innerHTML}),r.innerHTML="—"}),window._pp5HideScores=!0)},Yn=()=>{window._pp5HideScores=!1,xt==null||xt.forEach(({el:e,type:r,val:o})=>{r==="input"?e.value=o:e.innerHTML=o}),xt=null},Bt=()=>{var r,o,u,i,w,c,k;const e=document.getElementById("grade-togglebar");e&&(e.innerHTML=`
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
                <button id="btn-hide-scores" type="button" class="text-[11px] px-3 py-1.5 rounded-lg font-semibold transition ${Me?"bg-amber-50 text-amber-700 border border-amber-300":"bg-gray-100 text-gray-500 hover:bg-gray-200"}">
                  👁 ${Me?"แสดงคะแนน":"ซ่อนคะแนน"}
                </button>
                <button id="btn-round-settings" type="button" class="text-[11px] px-3 py-1.5 rounded-lg font-semibold transition bg-gray-100 text-gray-500 hover:bg-gray-200">🔢 ปัดเลข</button>
                ${wt("khuna","คุณลักษณะ",pt)}
                ${wt("read","การอ่าน",vt)}
                ${wt("scoreColors","🎨 จัดสีช่องคะแนน",Mt,"bg-emerald-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
                ${wt("forceGrade","บังคับเกรด",ht,"bg-rose-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
                ${wt("bonus","⭐ คะแนนเก็บ/พิเศษ",Ee,"bg-amber-500 text-white shadow-sm","bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100")}
                ${Ee&&ke.length?wt("formula-link","🔗 เชื่อมสูตร",ft,"bg-violet-500 text-white shadow-sm","bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100"):""}
              </div>
            </div>
            <div class="border-t border-gray-100 pt-3">
              <p class="px-1 mb-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">ส่งออกและส่งต่อ</p>
              <div class="flex flex-wrap gap-1.5">
                <button id="btn-export-gradeonline-excel" type="button" class="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-teal-600 text-white shadow-sm hover:bg-teal-700 transition">📥 ดาวน์โหลด Excel GradeOnline</button>
                ${Ve?`
                <button id="btn-export-gradeonline" type="button" class="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-purple-600 text-white shadow-sm hover:bg-purple-700 transition">📤 ส่งคะแนนเข้า GradeOnline</button>
                <button id="btn-submit-regrade" type="button" class="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-pink-600 text-white shadow-sm hover:bg-pink-700 transition" title="ส่งรายชื่อนักเรียนที่ติด 0 หรือผลพิเศษเข้าระบบแก้ค้างเก่า">📤 ส่งแก้ค้างเก่า</button>`:""}
              </div>
            </div>
          </div>
        </div>`,(r=document.getElementById("btn-grade-more"))==null||r.addEventListener("click",q=>{var j;q.stopPropagation(),(j=document.getElementById("grade-more-menu"))==null||j.classList.toggle("hidden")}),(o=document.getElementById("grade-more-menu"))==null||o.addEventListener("click",q=>q.stopPropagation()),(u=document.getElementById("btn-hide-scores"))==null||u.addEventListener("click",function(){Me=!Me,document.getElementById("grade-grid-wrap")&&(Me?Ze():Yn(),Bt())}),(i=document.getElementById("btn-submit-regrade"))==null||i.addEventListener("click",async()=>{const q=document.getElementById("btn-submit-regrade"),j=z.map(P=>{var N;const{grade:L}=Qe(P.id),b=(((N=F[P.id])==null?void 0:N.__force)??"")||(L===0?"0":"");return b?{student_id:P.id,grade_failed_at:b}:null}).filter(Boolean);if(!j.length){f("ไม่มีนักเรียนติดในห้องนี้ตอนนี้","info");return}if(confirm(`พบนักเรียนติด ${j.length} คนในห้องนี้ ยืนยันส่งเข้าระบบแก้ค้างเก่าเลยไหม? (รายชื่อที่เคยส่งไปแล้วจะไม่ถูกส่งซ้ำ)`)){q.disabled=!0,q.textContent="กำลังส่ง...";try{const P=await jr(a.id,j);f(`ส่งสำเร็จ ✅ พบติด ${P.total_failing} คน — เพิ่มเข้าระบบใหม่ ${P.submitted} คน (ที่เหลือมีอยู่แล้ว)`,"success")}catch(P){f("ส่งไม่สำเร็จ: "+fe(P),"error")}finally{q.disabled=!1,q.textContent="📤 ส่งแก้ค้างเก่า"}}}),(w=document.getElementById("btn-export-gradeonline-excel"))==null||w.addEventListener("click",()=>{const q=document.getElementById("btn-export-gradeonline-excel"),{records:j,incomplete:P}=mn();if(P.length){const L=P.slice(0,3).map(D=>D.full_name).join(", ");f(`ยังมีนักเรียนกรอกคะแนนไม่ครบ ${P.length} คน${L?` เช่น ${L}`:""} — กรุณากรอกให้ครบก่อนส่งออก`,"error");return}if(!j.length){f("ยังไม่มีข้อมูลคะแนนที่พร้อมส่งออก","error");return}q.disabled=!0;try{Kr({subjectName:E==null?void 0:E.subject_name,className:a.class_name,records:j}),f(`ดาวน์โหลดไฟล์ Excel แล้ว ${j.length} คน — นำเข้าใน GradeOnline ได้เลย`,"success")}finally{q.disabled=!1}}),(c=document.getElementById("btn-export-gradeonline"))==null||c.addEventListener("click",async()=>{const q=document.getElementById("btn-export-gradeonline"),j=(window._pp5DonorTierIndex??0)>=2,P=Yr(y==null?void 0:y.id,a.class_name,j);if(!P.allowed){Qr(P.claimedRoom,a.class_name);return}const{records:L,incomplete:D}=mn();if(D.length){const b=D.slice(0,3).map(N=>N.full_name).join(", ");f(`ยังมีนักเรียนกรอกคะแนนไม่ครบ ${D.length} คน${b?` เช่น ${b}`:""} — กรุณากรอกให้ครบก่อนส่งเข้า GradeOnline`,"error");return}if(!L.length){f("ยังไม่มีข้อมูลคะแนนที่พร้อมส่งเข้า GradeOnline","error");return}if(confirm(`เตรียมส่งคะแนนรวม(เต็ม 100)+เกรดของนักเรียน ${L.length} คนในห้องนี้ไปรอที่ GradeOnline ยืนยันไหม?`)){q.disabled=!0,q.textContent="กำลังเตรียมข้อมูล...";try{const b=await yr(a.id,y==null?void 0:y.id,E==null?void 0:E.subject_name,a.class_name,L);!j&&!P.claimedRoom&&Xr(y==null?void 0:y.id,a.class_name),Zr(b,L.length)}catch(b){f("เตรียมข้อมูลไม่สำเร็จ: "+fe(b),"error")}finally{q.disabled=!1,q.textContent="📤 ส่งคะแนนเข้า GradeOnline"}}}),(k=document.getElementById("btn-round-settings"))==null||k.addEventListener("click",gn),e.querySelectorAll(".grade-toggle").forEach(q=>{q.addEventListener("click",()=>{const j=q.dataset.toggle;j==="forceGrade"&&(ht=!ht),j==="khuna"&&(pt=!pt),j==="read"&&(vt=!vt),j==="scoreColors"&&(Mt=!Mt),j==="bonus"&&(Ee=!Ee,Ee||(ft=!1),Ee&&ke.length===0&&f('ยังไม่มีคอลัมน์พิเศษ — กด "จัดการคอลัมน์" เพื่อเพิ่ม',"info")),j==="formula-link"&&(ft=!ft),Ft(),Bt(),ve(),Te(),Me&&Ze()})}))},gn=()=>{var u;(u=document.getElementById("round-settings-popup"))==null||u.remove();const e=document.createElement("div");e.id="round-settings-popup",e.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const r=(i,w,c)=>`
        <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-50 last:border-0">
          <span class="text-xs text-gray-700 truncate">${K(w??"")}${c!=null?` <span class="text-gray-400">(เต็ม ${c})</span>`:""}</span>
          <button type="button" class="round-set-toggle flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${zt(i)?"bg-emerald-500 text-white":"bg-gray-100 text-gray-500"}"
            data-key="${i}">${zt(i)?"จำนวนเต็ม":"ทศนิยม"}</button>
        </div>`;e.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 flex-shrink-0">
            <h3 class="font-bold text-gray-800 text-sm">🔢 ตั้งค่าการปัดเลขคะแนน</h3>
            <p class="text-[11px] text-gray-500 mt-0.5">คะแนนรายช่องยังเก็บตามจริง ส่วนคะแนนรวมที่เลือกปัดจะใช้คำนวณเกรดด้วย กดบันทึกใช้ร่วมกันเพื่อใช้ในหน้าครู นักเรียน และ ปพ.5</p>
            ${Xt?'<p class="text-xs text-red-600 mt-1">ยังโหลดค่าร่วมไม่ได้ กรุณาตรวจการติดตั้ง SQL และการเชื่อมต่อ</p>':""}
          </div>
          <div class="overflow-y-auto flex-1 px-4 py-2">
            <p class="text-[11px] font-bold text-amber-600 uppercase tracking-wide mt-2 mb-1">ผลรวม</p>
            <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-100">
              <span class="text-xs text-gray-700">สีเกรดบังคับในเอกสาร ปพ.5</span>
              <button type="button" id="forced-grade-color-toggle" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${mt==="red"?"bg-red-500 text-white":"bg-gray-900 text-white"}">${mt==="red"?"สีแดง":"สีดำ"}</button>
            </div>
            ${r("mid_subtotal","รวมกลางภาค")}
            ${r("fin_subtotal","รวมปลายภาค")}
            ${r("total","คะแนนรวมทั้งหมด")}
            ${X.length?`<p class="text-[11px] font-bold text-blue-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์กลางภาค</p>${X.map(i=>r(i.id,i.assignment_name,i.max_score)).join("")}`:""}
            ${Z.length?`<p class="text-[11px] font-bold text-purple-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์ปลายภาค</p>${Z.map(i=>r(i.id,i.assignment_name,i.max_score)).join("")}`:""}
            ${Ne.length?`<p class="text-[11px] font-bold text-teal-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์อื่นๆ</p>${Ne.map(i=>r(i.id,i.assignment_name,i.max_score)).join("")}`:""}
            ${Ke.length?`<p class="text-[11px] font-bold text-indigo-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์คำนวณสูตร</p>${Ke.map(i=>r(`derived_${i.id}`,i.assignment_name,i.max_score)).join("")}`:""}
            ${Ee&&ke.length?`<p class="text-[11px] font-bold text-amber-500 uppercase tracking-wide mt-3 mb-1">คะแนนเก็บ/พิเศษ</p>${ke.map(i=>r(i.id,i.assignment_name,i.max_score)).join("")}`:""}
          </div>
          <div class="px-4 py-3 border-t border-gray-100 flex-shrink-0">
            <button id="round-settings-save" class="w-full mb-2 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold">บันทึกใช้ร่วมกัน</button>
            <button id="round-settings-close" class="w-full py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">ปิด</button>
          </div>
        </div>`,document.body.appendChild(e);const o=()=>e.remove();e.querySelector("#round-settings-save").addEventListener("click",async i=>{const w=i.currentTarget;w.disabled=!0,w.textContent="กำลังบันทึก…",e.querySelectorAll(".round-set-toggle").forEach(c=>{c.disabled=!0});try{await hr(a.id,{...qn(ut),forcedGradeColor:mt}),Xt=!1,Ft(),f("บันทึกค่าปัดเลขร่วมสำหรับครู นักเรียน และ ปพ.5 แล้ว","success"),o()}catch(c){f("บันทึกค่าร่วมไม่สำเร็จ กรุณาตรวจการติดตั้ง SQL: "+fe(c),"error"),w.disabled=!1,w.textContent="บันทึกใช้ร่วมกัน",e.querySelectorAll(".round-set-toggle").forEach(k=>{k.disabled=!1})}}),e.querySelector("#round-settings-close").addEventListener("click",o),e.querySelector("#forced-grade-color-toggle").addEventListener("click",i=>{mt=mt==="red"?"black":"red",i.currentTarget.className=`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${mt==="red"?"bg-red-500 text-white":"bg-gray-900 text-white"}`,i.currentTarget.textContent=mt==="red"?"สีแดง":"สีดำ"}),e.addEventListener("click",i=>{i.target===e&&o()}),e.querySelectorAll(".round-set-toggle").forEach(i=>{i.addEventListener("click",()=>{const w=i.dataset.key;ut[w]=!ut[w],Ft(),ve(),gn()})})};let ot=null;const Xn=e=>{if(ot=ot===e.id?null:e.id,ve(),ot!=null){const r=document.getElementById("grade-formula-input");r==null||r.focus(),r==null||r.setSelectionRange(r.value.length,r.value.length)}},Qn=()=>{const e=[...X,...Z].find(o=>o.id===ot);if(!e)return"";const r=it.map(o=>`<button type="button" data-formula-var="${o.var}"
        class="inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-white px-2.5 py-1.5 text-xs hover:bg-violet-50 hover:border-violet-400">
        <span class="font-mono font-bold text-violet-700">${o.var}</span><span>${K(o.assignment_name)}</span>
      </button>`).join("")||'<span class="text-xs text-gray-400">ยังไม่มีคอลัมน์คะแนนพิเศษให้เลือก</span>';return`<section class="sticky top-0 z-40 border-b border-violet-200 bg-violet-50/95 p-3 shadow-sm backdrop-blur" data-formula-editor>
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div><h3 class="text-sm font-bold text-violet-900">🔗 สูตรคะแนน: ${K(e.assignment_name)}</h3>
            <p class="text-[11px] text-violet-700">พิมพ์ = เพื่อเริ่มสูตร เช่น =SUM( แล้วคลิกคอลัมน์เพื่อแทรกตัวแปร · สูตรจะบวกเพิ่มและไม่เกินคะแนนเต็ม</p></div>
          <button type="button" id="grade-formula-close" class="rounded-lg px-2 py-1 text-xs text-gray-500 hover:bg-white">ปิด</button>
        </div>
        <div class="mt-2 flex flex-wrap gap-2">
          <input id="grade-formula-input" type="text" value="${K(e.bonus_formula??"")}"
            placeholder="พิมพ์ =SUM( หรือ = แล้วเลือกคอลัมน์"
            class="min-w-[240px] flex-1 rounded-lg border border-violet-300 bg-white px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-violet-200" />
          <button type="button" id="grade-formula-test" class="rounded-lg bg-violet-100 px-3 py-2 text-xs font-medium text-violet-800 hover:bg-violet-200">ทดสอบ</button>
          ${e.bonus_formula?'<button type="button" id="grade-formula-clear" class="rounded-lg border border-red-200 px-3 py-2 text-xs text-red-600 hover:bg-red-50">ลบสูตร</button>':""}
          <button type="button" id="grade-formula-save" class="rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white hover:bg-violet-700">บันทึกสูตร</button>
        </div>
        <div id="grade-formula-templates" class="mt-2 hidden flex-wrap items-center gap-1.5">
          <span class="mr-1 text-[11px] text-gray-500">สูตรตัวอย่าง:</span>
          ${["=SUM(","=MIN(","=MAX(","=AVG(","=IF("].map(o=>`<button type="button" data-formula-template="${o}" class="rounded-md border border-violet-200 bg-white px-2 py-1 font-mono text-[11px] text-violet-700 hover:bg-violet-100">${o}</button>`).join("")}
        </div>
        <div class="mt-2 flex flex-wrap items-center gap-1.5"><span class="text-[11px] text-gray-500">คลิกคอลัมน์เพื่อแทรก:</span>${r}</div>
        <p id="grade-formula-result" class="mt-1 hidden text-xs"></p>
      </section>`},Zn=e=>{var w;const r=[...X,...Z].find(c=>c.id===ot);if(!r)return;const o=e.querySelector("#grade-formula-input"),u=e.querySelector("#grade-formula-templates"),i=c=>{const k=o.selectionStart??o.value.length,q=o.selectionEnd??k;o.setRangeText(c,k,q,"end"),o.focus(),o.dispatchEvent(new Event("input",{bubbles:!0}))};o.addEventListener("input",()=>u.classList.toggle("hidden",!o.value.trim().startsWith("="))),u.classList.toggle("hidden",!o.value.trim().startsWith("=")),e.querySelectorAll("[data-formula-template]").forEach(c=>c.addEventListener("click",()=>{o.value=c.dataset.formulaTemplate,o.focus(),o.setSelectionRange(o.value.length,o.value.length),u.classList.remove("hidden")})),e.querySelectorAll("[data-formula-var]").forEach(c=>c.addEventListener("click",()=>i(c.dataset.formulaVar))),e.querySelector("#grade-formula-close").addEventListener("click",()=>{ot=null,ve()}),e.querySelector("#grade-formula-test").addEventListener("click",()=>{const c=e.querySelector("#grade-formula-result"),k=It(o.value,Object.fromEntries(it.map(q=>[q.var,5])));c.classList.remove("hidden"),c.className=`mt-1 text-xs ${k==null?"text-red-600":"text-emerald-700"}`,c.textContent=k==null?"สูตรยังไม่สมบูรณ์หรือไม่ถูกต้อง":`ตัวอย่างเมื่อแต่ละคอลัมน์มี 5 คะแนน: โบนัสที่ได้ ${k} คะแนน`}),(w=e.querySelector("#grade-formula-clear"))==null||w.addEventListener("click",async()=>{try{await lt(r.id,{bonus_formula:null,bonus_formula_refs:[]}),r.bonus_formula=null,r.bonus_formula_refs=[],ot=null,f("ลบสูตรแล้ว ✅","success"),Bt(),ve(),Te(),Me&&Ze()}catch{f("บันทึกไม่สำเร็จ","error")}}),e.querySelector("#grade-formula-save").addEventListener("click",async c=>{const k=o.value.trim();if(!k){f("กรุณากรอกสูตร","warning");return}if(It(k,Object.fromEntries(it.map(j=>[j.var,5])))==null){f("สูตรยังไม่สมบูรณ์หรือไม่ถูกต้อง","warning");return}const q=c.currentTarget;q.disabled=!0,q.textContent="กำลังบันทึก…";try{await lt(r.id,{bonus_formula:k,bonus_formula_refs:it.map(j=>({var:j.var,col_id:j.id}))}),r.bonus_formula=k,r.bonus_formula_refs=it.map(j=>({var:j.var,col_id:j.id})),ot=null,f("บันทึกสูตรแล้ว ✅","success"),Bt(),ve(),Te(),Me&&Ze()}catch{f("บันทึกไม่สำเร็จ","error"),q.disabled=!1,q.textContent="บันทึกสูตร"}})},fn=(()=>{var o;const e={};for(const u of _e)te(u)&&(e[o=u.assignment_name]??(e[o]=[])).push(u);const r=new Set;for(const u of Object.values(e))if(!(u.length<=1)){u.sort((i,w)=>i.id-w.id);for(const i of u.slice(1))r.add(i.id)}return r})(),Dn=()=>{var j,P,L,D;(j=document.getElementById("manage-cols-modal"))==null||j.remove();const e=document.createElement("div");e.id="manage-cols-modal",e.className="fixed inset-0 z-[600] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4";const r=(b,N=[])=>{const s=te(b),d=s&&fn.has(b.id),p=s&&!d,t=N.findIndex(m=>m.id===b.id),n=!s&&t>0&&!te(N[t-1]),l=!s&&t>=0&&t<N.length-1;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${p?"border-emerald-100 bg-emerald-50/70":d?"border-amber-200 bg-amber-50/70":"border-gray-100 hover:border-gray-200 bg-gray-50/60"}">
          ${p?'<span class="w-4 text-emerald-500 text-xs flex-shrink-0">🔒</span>':d?`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-amber-500 flex-shrink-0" data-colid="${b.id}" title="คอลัมน์ซ้ำ (ระบบสร้างผิดพลาด)" />`:`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-colid="${b.id}" />`}
          <div class="flex flex-col gap-0.5 flex-shrink-0">
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${n?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${b.id}" data-dir="up" ${n?"":"disabled"}>▲</button>
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${l?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${b.id}" data-dir="down" ${l?"":"disabled"}>▼</button>
          </div>
          <span class="flex-1 text-xs text-gray-700 truncate">${b.assignment_name||"—"}${d?' <span class="text-amber-600 font-semibold">(ซ้ำ)</span>':""}</span>
          <span class="text-[11px] text-gray-400">/${b.max_score||0}</span>
          ${s?"":`
          <button class="mcm-sync-toggle text-[10px] font-semibold px-1.5 py-0.5 rounded-lg flex-shrink-0 ${b.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-300 hover:bg-gray-100 hover:text-gray-500"}"
            data-colid="${b.id}"
            title="${b.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}">🔄</button>`}
          ${p?'<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>':`<button class="mcm-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${b.id}" title="ลบคอลัมน์${d?"ซ้ำ":""}">🗑</button>`}
        </div>`},o=b=>`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-100 bg-amber-50/40">
          <input type="text" class="mcm-bonus-name flex-1 text-xs text-amber-800 bg-transparent border-b border-transparent focus:border-amber-300 focus:outline-none px-0.5 min-w-0"
            value="${(b.assignment_name||"").replace(/"/g,"&quot;")}" data-bonusid="${b.id}" />
          <span class="text-[11px] text-amber-400 flex-shrink-0">${b.max_score?"/"+b.max_score:"∞"}</span>
          <button class="mcm-bonus-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${b.id}" title="ลบคอลัมน์">🗑</button>
        </div>`,u=b=>{var N,s;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-teal-100 bg-teal-50/40">
          <span class="flex-1 text-xs text-teal-800 truncate">${K(b.assignment_name||"—")}</span>
          <span class="text-[10px] text-teal-500 flex-shrink-0 truncate max-w-[90px]" title="เชื่อมกับ: ${K(((N=je[b.link_column_id])==null?void 0:N.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗 ${K(((s=je[b.link_column_id])==null?void 0:s.assignment_name)??"—")}</span>
          <button class="mcm-override-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${b.id}" title="ลบคอลัมน์">🗑</button>
        </div>`};e.innerHTML=`<div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[80vh] flex flex-col">
        <div class="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ จัดการคอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">ลบหรือเพิ่มคอลัมน์คะแนน</p>
          </div>
          <button id="mcm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-5 space-y-4">
          ${X.length<5||Z.length<5?`
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
              <h4 class="font-semibold text-blue-700 text-sm">📘 กลางภาค <span class="font-normal text-gray-400">(${X.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${X.map(b=>r(b,X)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${Z.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${Z.map(b=>r(b,Z)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-600 text-sm">⭐ คะแนนพิเศษ (Bonus) <span class="font-normal text-gray-400">(${ke.length} คอลัมน์)</span></h4>
            </div>
            <div id="mcm-bonus-list" class="space-y-1.5">${ke.map(o).join("")}</div>
            <button id="mcm-add-bonus" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-amber-200 text-amber-500 hover:border-amber-400 hover:bg-amber-50 text-sm transition-colors">＋ เพิ่มคอลัมน์พิเศษ</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-teal-700 text-sm">🔄 ปรับคะแนน <span class="font-normal text-gray-400">(${Ne.length} คอลัมน์)</span></h4>
            </div>
            <p class="text-[11px] text-gray-400 mb-1.5">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</p>
            <div id="mcm-override-list" class="space-y-1.5">${Ne.map(u).join("")}</div>
            <button id="mcm-add-override" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-teal-200 text-teal-600 hover:border-teal-400 hover:bg-teal-50 text-sm transition-colors">＋ เพิ่มคอลัมน์ปรับคะแนน</button>
          </div>
        </div>
      </div>`,document.body.appendChild(e),e.querySelector("#mcm-close").addEventListener("click",()=>e.remove());const i=(b,N)=>{var d;(d=document.getElementById("mcm-del-confirm"))==null||d.remove();const s=document.createElement("div");s.id="mcm-del-confirm",s.className="fixed inset-0 z-[700] flex items-center justify-center p-6",s.style.background="rgba(0,0,0,0.5)",s.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">🗑️</div>
            <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">${b}</p>
            <div class="flex gap-3">
              <button id="mcm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="mcm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition">ลบเลย</button>
            </div>
          </div>`,document.body.appendChild(s),s.querySelector("#mcm-conf-no").addEventListener("click",()=>s.remove()),s.querySelector("#mcm-conf-yes").addEventListener("click",()=>{s.remove(),N()})},w=()=>{e.querySelectorAll(".mcm-col-list").forEach((b,N)=>{const s=N===0?X:Z;b.innerHTML=s.map(d=>r(d,s)).join("")}),c()},c=()=>{var N;e.querySelectorAll(".mcm-move").forEach(s=>{s.addEventListener("click",async()=>{if(s.disabled)return;const d=parseInt(s.dataset.colid),p=s.dataset.dir,t=X.findIndex(x=>x.id===d)!==-1?X:Z,n=t.findIndex(x=>x.id===d),l=p==="up"?n-1:n+1;if(l<0||l>=t.length||te(t[l]))return;const m=t[n],$=t[l];t[n]=$,t[l]=m;const C=m.sort_order??(n+1)*10,I=$.sort_order??(l+1)*10;m.sort_order=I,$.sort_order=C,await vr([{id:m.id,sort_order:I},{id:$.id,sort_order:C}]),ve(),w()})}),e.querySelectorAll(".mcm-sync-toggle").forEach(s=>{s.addEventListener("click",()=>{const d=parseInt(s.dataset.colid),p=[...X,...Z].find(l=>l.id===d);if(!p)return;const t=!p.auto_attendance_sync,n=async()=>{try{await wr(d,t),p.auto_attendance_sync=t,f(t?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้านี้ ✅":"ปิดใช้งานแล้ว","success"),w()}catch{f("บันทึกไม่สำเร็จ","error")}};t?i(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${p.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้าบันทึกคะแนน — คนที่เคยแก้คะแนนด้วยมือไว้ก่อนจะไม่ถูกทับ</span>`,n):n()})}),e.querySelectorAll(".mcm-del").forEach(s=>{s.addEventListener("click",()=>{const d=parseInt(s.dataset.colid),p=[...X,...Z].find(n=>n.id===d),t=fn.has(d);if(te(d)&&!t){f("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้","warning");return}i(t?`คอลัมน์นี้เป็น <span class="font-semibold">คอลัมน์ซ้ำ</span> ของ "${(p==null?void 0:p.assignment_name)||""}" (เกิดจากระบบสร้างคอลัมน์ซ้ำผิดพลาด)<br/><span class="text-xs text-gray-500">คะแนนของคอลัมน์นี้เป็นค่าที่ระบบเติมอัตโนมัติ ลบได้อย่างปลอดภัย — ระบบจะเติมคะแนนกลับให้ถูกต้องในคอลัมน์ที่เหลือของรอบถัดไป</span>`:`ต้องการลบ <span class="font-semibold">"${(p==null?void 0:p.assignment_name)||"คอลัมน์นี้"}"</span> ใช่ไหม?<br/><span class="text-xs text-red-500">คะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย</span>`,async()=>{var n,l;try{await Nt(d);const m=X.findIndex(I=>I.id===d),$=Z.findIndex(I=>I.id===d);m!==-1&&X.splice(m,1),$!==-1&&Z.splice($,1),f("ลบคอลัมน์แล้ว ✅","success"),ve();const C=e.querySelector(".overflow-auto");C&&((l=(n=C.querySelector(".space-y-1\\.5"))==null?void 0:n.remove)==null||l.call(n),e.querySelectorAll(".mcm-col-list").forEach((I,x)=>{const S=x===0?X:Z;I.innerHTML=S.map(A=>r(A,S)).join("")}),c())}catch{f("ลบไม่สำเร็จ","error")}})})});const b=()=>{const s=[...e.querySelectorAll(".mcm-cb:checked")],d=e.querySelector("#mcm-bulk-bar");if(d){d.classList.toggle("hidden",s.length===0);const p=d.querySelector("#mcm-bulk-count");p&&(p.textContent=`เลือก ${s.length} รายการ`)}};e.querySelectorAll(".mcm-cb").forEach(s=>s.addEventListener("change",b)),(N=e.querySelector("#mcm-bulk-del"))==null||N.addEventListener("click",()=>{const s=[...e.querySelectorAll(".mcm-cb:checked")];if(!s.length)return;const d=s.map(p=>{const t=[...X,...Z].find(n=>n.id===parseInt(p.dataset.colid));return(t==null?void 0:t.assignment_name)??`ID ${p.dataset.colid}`}).join(", ");i(`ลบ ${s.length} คอลัมน์:<br/><span class="font-semibold text-sm">${d}</span>`,async()=>{try{for(const p of s){const t=parseInt(p.dataset.colid);await Nt(t);const n=X.findIndex(m=>m.id===t),l=Z.findIndex(m=>m.id===t);n!==-1&&X.splice(n,1),l!==-1&&Z.splice(l,1)}f(`ลบ ${s.length} คอลัมน์แล้ว ✅`,"success"),ve(),e.querySelectorAll(".mcm-col-list").forEach((p,t)=>{p.innerHTML=(t===0?X:Z).map(r).join("")}),c()}catch{f("ลบไม่สำเร็จ","error")}})})};c();const k=()=>{e.querySelectorAll(".mcm-bonus-name").forEach(b=>{b.addEventListener("blur",async()=>{const N=parseInt(b.dataset.bonusid),s=b.value.trim();if(s)try{await lt(N,{assignment_name:s});const d=ke.find(p=>p.id===N);d&&(d.assignment_name=s),ve()}catch{f("บันทึกไม่สำเร็จ","error")}}),b.addEventListener("keydown",N=>{N.key==="Enter"&&(N.preventDefault(),b.blur())})}),e.querySelectorAll(".mcm-bonus-del").forEach(b=>{b.addEventListener("click",()=>{const N=parseInt(b.dataset.colid),s=ke.find(d=>d.id===N);i(`ลบคอลัมน์พิเศษ <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Nt(N);const d=ke.findIndex(t=>t.id===N);d!==-1&&ke.splice(d,1),f("ลบคอลัมน์พิเศษแล้ว ✅","success"),ve();const p=e.querySelector("#mcm-bonus-list");p&&(p.innerHTML=ke.map(o).join(""),k())}catch{f("ลบไม่สำเร็จ","error")}})})})};k();const q=()=>{e.querySelectorAll(".mcm-override-del").forEach(b=>{b.addEventListener("click",()=>{const N=parseInt(b.dataset.colid),s=Ne.find(d=>d.id===N);i(`ลบคอลัมน์ปรับคะแนน <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย (คะแนนในคอลัมน์หลักที่เคยปรับไปแล้วจะไม่ถูกย้อนกลับ)</span>`,async()=>{try{await Nt(N);const d=Ne.findIndex(t=>t.id===N);d!==-1&&Ne.splice(d,1),f("ลบคอลัมน์ปรับคะแนนแล้ว ✅","success"),ve();const p=e.querySelector("#mcm-override-list");p&&(p.innerHTML=Ne.map(u).join(""),q())}catch{f("ลบไม่สำเร็จ","error")}})})})};q(),(P=e.querySelector("#mcm-add-override"))==null||P.addEventListener("click",()=>{var s;(s=document.getElementById("quick-add-override-mcm"))==null||s.remove();const b=Kt,N=document.createElement("div");N.id="quick-add-override-mcm",N.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",N.innerHTML=`
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
                ${b.map(d=>`<option value="${d.id}">${K(d.assignment_name)} (${K(d.assignment_type??"—")} · เต็ม ${d.max_score??"—"})</option>`).join("")}
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
          </div>`,document.body.appendChild(N),N.querySelector("#qom-cancel").addEventListener("click",()=>N.remove()),N.querySelector("#qom-name").focus(),N.querySelector("#qom-save").addEventListener("click",async()=>{const d=N.querySelector("#qom-name").value.trim(),p=Number(N.querySelector("#qom-link").value)||null,t=N.querySelector("#qom-mode").value==="add"?"add":"max";if(!d){f("กรุณากรอกชื่อคอลัมน์","warning");return}if(!p){f("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const n=b.find(m=>m.id===p),l=N.querySelector("#qom-save");l.disabled=!0,l.textContent="⏳";try{await De({class_id:a.id,assignment_name:d,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:(n==null?void 0:n.max_score)??null,column_type:"override",link_column_id:p,override_mode:t}),N.remove(),e.remove(),Be(y,a),f(`เพิ่ม "${d}" แล้ว ✅`,"success")}catch(m){f("เพิ่มไม่สำเร็จ: "+fe(m),"error"),l.disabled=!1,l.textContent="เพิ่ม"}})}),(L=e.querySelector("#mcm-add-bonus"))==null||L.addEventListener("click",()=>{var N;(N=document.getElementById("quick-add-bonus-mcm"))==null||N.remove();const b=document.createElement("div");b.id="quick-add-bonus-mcm",b.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",b.innerHTML=`
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
          </div>`,document.body.appendChild(b),b.querySelector("#qbm-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#qbm-name").focus(),b.querySelector("#qbm-save").addEventListener("click",async()=>{const s=b.querySelector("#qbm-name").value.trim(),d=b.querySelector("#qbm-max").value?parseFloat(b.querySelector("#qbm-max").value):null;if(!s){f("กรุณากรอกชื่อคอลัมน์","warning");return}const p=b.querySelector("#qbm-save");p.disabled=!0,p.textContent="⏳";try{const t=await De({class_id:a.id,assignment_name:s,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:d,column_type:"bonus",formula:null,formula_refs:[]});b.remove(),e.remove(),Be(y,a),f(`เพิ่ม "${s}" แล้ว ✅`,"success")}catch(t){f("เพิ่มไม่สำเร็จ: "+fe(t),"error"),p.disabled=!1,p.textContent="เพิ่ม"}})}),e.querySelectorAll(".mcm-add").forEach(b=>{b.addEventListener("click",()=>{e.remove(),jn(a,b.dataset.type,()=>Be(y,a))})}),(D=e.querySelector("#mcm-fill-default"))==null||D.addEventListener("click",async()=>{const b=e.querySelector("#mcm-fill-default");b.disabled=!0,b.textContent="กำลังสร้าง...";try{const N=Math.max(0,5-X.length),s=Math.max(0,5-Z.length),d=(p,t)=>De({class_id:a.id,assignment_name:`คะแนนที่ ${t}`,max_score:20,assignment_type:p,sheet_column:""});for(let p=1;p<=N;p++)await d("midterm",X.length+p);for(let p=1;p<=s;p++)await d("final",Z.length+p);e.remove(),Be(y,a)}catch{f("สร้างคอลัมน์ไม่สำเร็จ","error"),b.disabled=!1,b.textContent="เติมให้ครบ"}})},er=e=>{if(!vt)return'<td class="border border-sky-100 text-center text-gray-300 text-[10px]">—</td>';const r=nt[e];return r?'<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold '+r.cls+'" id="gread-'+e+'">'+r.label+"</td>":'<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-'+e+'">—</td>'},tr=e=>{const r=new Date(e);return`${r.getDate()}/${r.getMonth()+1} ${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`},nr=(e,r,o,u)=>{var q;if((q=document.getElementById("score-hist-popup"))==null||q.remove(),!(u!=null&&u.length))return;let i="",w=0;u.forEach((j,P)=>{w+=j.d,P===0?i+=String(j.d):i+=j.d>=0?` + ${j.d}`:` − ${Math.abs(j.d)}`}),i+=` = ${Math.round(w*1e3)/1e3}`;const c=z.find(j=>j.id===e),k=document.createElement("div");k.id="score-hist-popup",k.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",k.style.background="rgba(0,0,0,0.4)",k.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
            <p class="font-bold text-indigo-700 text-sm">ประวัติคะแนน — ${K(o)}</p>
            <p class="text-xs text-indigo-400">${K((c==null?void 0:c.full_name)??"")}</p>
          </div>
          <div class="p-4">
            <div class="space-y-1 mb-3 max-h-44 overflow-y-auto">
              ${u.map(j=>`
                <div class="flex justify-between items-center text-xs py-1 border-b border-gray-50">
                  <span class="text-gray-400">${tr(j.at)}</span>
                  <span class="font-semibold ${j.d>=0?"text-emerald-600":"text-rose-600"}">${j.d>=0?"+":""}${j.d}</span>
                </div>`).join("")}
            </div>
            <div class="bg-indigo-50 rounded-xl px-3 py-2 text-xs font-mono text-indigo-700 text-center">${i}</div>
          </div>
          <div class="px-5 pb-4 flex gap-2">
            <button id="hist-reset" class="flex-1 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs hover:bg-rose-50 transition">รีเซ็ตประวัติ</button>
            <button id="hist-close" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ปิด</button>
          </div>
        </div>`,document.body.appendChild(k),k.querySelector("#hist-close").addEventListener("click",()=>k.remove()),k.querySelector("#hist-reset").addEventListener("click",async()=>{var P,L,D,b,N;const j=(L=(P=F[e])==null?void 0:P[r])==null?void 0:L.final;if(j==null){k.remove();return}try{const s=await Lt(a.id,e,r,j,{});if(s){F[e]||(F[e]={}),F[e][r]={orig:((D=s.history[0])==null?void 0:D.d)??s.final,retake:null,final:s.final,history:s.history};const d=document.getElementById("grade-grid-wrap"),p=d==null?void 0:d.querySelector(`.grade-input[data-sid="${e}"][data-col="${r}"]`);p&&(p.value=s.final!==null?String(s.final):""),(N=(b=p==null?void 0:p.closest("td"))==null?void 0:b.querySelector(".hist-indicator"))==null||N.remove(),f("รีเซ็ตประวัติแล้ว","success"),await _applyOverrideIfNeeded(e,r)}}catch{f("ไม่สำเร็จ","error")}k.remove()}),k.addEventListener("click",j=>{j.target===k&&k.remove()})},rr=(e,r,o)=>{var c;(c=document.getElementById("mass-score-popup"))==null||c.remove();const u=document.createElement("div");u.id="mass-score-popup",u.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",u.style.background="rgba(0,0,0,0.4)",u.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div class="bg-blue-50 px-5 py-3 border-b border-blue-100">
            <p class="font-bold text-blue-700 text-sm">ตั้งคะแนนทั้งห้อง</p>
            <p class="text-xs text-blue-400">${K(r)}${o?" (เต็ม "+o+")":""}</p>
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
        </div>`,document.body.appendChild(u);const i=u.querySelector("#mass-inp"),w=u.querySelector("#mass-preview");i.addEventListener("input",()=>{const k=i.value.trim();if(!k){w.textContent="";return}const q=parseFloat(k);if(isNaN(q)){w.textContent="";return}w.textContent=/^[+-]/.test(k)?`บวก/ลบ ${q>=0?"+":""}${q} ใน ${z.length} คน`:`ตั้งเป็น ${q} ใน ${z.length} คน`}),u.querySelector("#mass-cancel").addEventListener("click",()=>u.remove()),u.querySelector("#mass-confirm").addEventListener("click",async()=>{var D,b,N,s;const k=i.value.trim();if(!k){u.remove();return}const q=u.querySelector("#mass-confirm");q.disabled=!0,q.textContent="⏳";let j=0,P=0,L=0;for(const d of z){const p=((b=(D=F[d.id])==null?void 0:D[e])==null?void 0:b.history)??[];try{const t=await Lt(a.id,d.id,e,k,{currentHistory:p,max:o??null});if(t){t.clamped&&L++,F[d.id]||(F[d.id]={}),F[d.id][e]={orig:((N=t.history[0])==null?void 0:N.d)??t.final,retake:null,final:t.final,history:t.history};const n=document.getElementById("grade-grid-wrap"),l=n==null?void 0:n.querySelector(`.grade-input[data-sid="${d.id}"][data-col="${e}"]`);l&&(l.value=t.final!==null?String(t.final):"",l.style.boxShadow="0 0 0 2px #059669",setTimeout(()=>l.style.boxShadow="",700));const m=l==null?void 0:l.closest("td");if(t.history.length>1){if(!(m!=null&&m.querySelector(".hist-indicator"))){const $=document.createElement("span");$.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl",$.textContent="Δ",$.dataset.sid=d.id,$.dataset.col=e,m==null||m.appendChild($)}}else(s=m==null?void 0:m.querySelector(".hist-indicator"))==null||s.remove();j++,await _applyOverrideIfNeeded(d.id,e)}}catch{P++}}z.forEach(d=>{var h;const{midRaw:p,finRaw:t,total:n,grade:l,khuna:m}=Qe(d.id),$=((h=F[d.id])==null?void 0:h.__force)??"",C=document.getElementById(`gmid-${d.id}`),I=document.getElementById(`gfin-${d.id}`);C&&(C.textContent=p>0?Re("mid_subtotal",p,1):"—"),I&&(I.textContent=t>0?Re("fin_subtotal",t,1):"—");const x=document.getElementById(`gtotal-${d.id}`),S=document.getElementById(`ggrade-${d.id}`),A=document.getElementById(`gkhuna-${d.id}`);x&&(x.textContent=n>0?n:"—"),S&&(S.textContent=$||(l>0?l.toFixed(1):"0")),A&&(A.textContent=m.label,A.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${m.cls}`)}),f(`ตั้งคะแนนสำเร็จ ${j}/${z.length} คน${L?" (ปรับ "+L+" คนที่เกินคะแนนเต็มอัตโนมัติ)":""}${P?" (ล้มเหลว "+P+")":""}`,j>0?"success":"error"),u.remove()}),u.addEventListener("click",k=>{k.target===u&&u.remove()}),setTimeout(()=>i.focus(),60)};let W=null,_t=null;const sr=()=>`<section data-cell-formula-editor class="hidden sticky top-0 z-40 border-b border-violet-200 bg-violet-50/95 p-3 shadow-sm backdrop-blur">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div><div class="text-sm font-bold text-violet-900">สูตรเฉพาะช่องคะแนน</div><p class="text-[11px] text-violet-700">พิมพ์ = แล้วใส่สูตร หรือคลิกหัวคอลัมน์/ช่องคะแนนเพื่อแทรกการอ้างอิง · Enter บันทึก · Esc ยกเลิก</p></div>
        <div class="flex flex-wrap gap-1">${["=SUM(","=MIN(","=MAX(","=AVG(","=IF("].map(e=>`<button type="button" data-cell-template="${e}" class="rounded-md border border-violet-200 bg-white px-2 py-1 font-mono text-[11px] text-violet-700 hover:bg-violet-100">${e}</button>`).join("")}</div>
      </div><div data-cell-refs class="mt-2 flex flex-wrap gap-1 text-[11px] text-gray-600"></div>
    </section>`,ve=()=>{var d,p;_t==null||_t.abort(),_t=null;const e=yt(X),r=yt(Z),o=document.getElementById("grade-grid-wrap");if(!o)return;const u=`
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${pn} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${Ut} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${Ut} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${xn}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${X.length+1}" class="${ue} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${e>0?" (เต็ม "+e+")":""}</th>
          <th colspan="${Z.length+1}" class="${ue} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${r>0?" (เต็ม "+r+")":""}</th>
          ${Ke.length?`<th colspan="${Ke.length}" class="${ue} bg-indigo-600 text-white font-semibold py-1.5">🧮 อ้างอิงสูตร</th>`:""}
          ${Ne.length?`<th colspan="${Ne.length}" class="${ue} bg-teal-600 text-white font-semibold py-1.5">🔄 ปรับคะแนน</th>`:""}
          ${Ee?`<th colspan="${ke.length+1}" class="${ue} bg-amber-500 text-white font-semibold py-1.5">⭐ คะแนนเก็บ/พิเศษ</th>`:""}
          <th class="${ue} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${e+r+Ke.reduce((t,n)=>t+(parseFloat(n.max_score)||0),0)||"?"}</div></th>
          <th class="${ue} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${ht?`<th class="${ue} bg-rose-50 text-rose-600 text-xs" style="min-width:32px;width:32px" rowspan="3"><div class="text-[9px] font-semibold leading-tight">บัง<br/>คับ</div></th>`:""}
          <th class="${ue} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ${pt?"":'<div class="text-[9px] font-normal text-emerald-300">ปิดอยู่</div>'}</th>
          <th class="${ue} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">${vt?"ผลประเมิน":"ปิดอยู่"}</div></th>
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${X.map(t=>`<th class="${ue} bg-blue-50" style="width:${se}px;min-width:${se}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${te(t)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-blue-600 cursor-pointer hover:bg-blue-100"}"
                data-colid="${t.id}" title="${te(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${t.sheet_column||"—"}</span>
              <button class="btn-select-grade-col text-blue-400 hover:text-blue-700 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="เลือกทั้งคอลัมน์คะแนน">▤</button>
              <button class="btn-mass-score text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${K(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${te(t)?"":`<button class="btn-scan-col text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${ft?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${t.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${t.id}" title="${t.bonus_formula?"🔗 = "+t.bonus_formula:"เปิดแถบสูตรในตาราง"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${ue} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${Z.map(t=>`<th class="${ue} bg-purple-50" style="width:${se}px;min-width:${se}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${te(t)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-purple-600 cursor-pointer hover:bg-purple-100"}"
                data-colid="${t.id}" title="${te(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${t.sheet_column||"—"}</span>
              <button class="btn-select-grade-col text-purple-400 hover:text-purple-700 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="เลือกทั้งคอลัมน์คะแนน">▤</button>
              <button class="btn-mass-score text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${K(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${te(t)?"":`<button class="btn-scan-col text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${ft?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${t.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${t.id}" title="${t.bonus_formula?"🔗 = "+t.bonus_formula:"เปิดแถบสูตรในตาราง"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${ue} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
          ${Ke.map(t=>`<th class="${ue} bg-indigo-50" style="width:${se}px;min-width:${se}px">
            <span class="text-[10px] text-indigo-400 font-mono block text-center truncate" title="${t.formula??""}">${t.formula??"—"}</span>
          </th>`).join("")}
          ${Ne.map(t=>{var n;return`<th class="${ue} bg-teal-50" style="width:${se}px;min-width:${se}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[10px] text-teal-500 flex-1 text-center truncate" title="เชื่อมกับ: ${K(((n=je[t.link_column_id])==null?void 0:n.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗</span>
              <button class="btn-select-grade-col text-teal-400 hover:text-teal-700 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="เลือกทั้งคอลัมน์คะแนน">▤</button>
              <button class="btn-mass-score text-teal-300 hover:text-teal-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${K(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
            </div>
          </th>`}).join("")}
          ${Ee?ke.map(t=>`<th class="${ue} bg-amber-50" style="width:${se}px;min-width:${se}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[11px] text-amber-500 flex-1 text-center">${t.sheet_column||"—"}</span>
              <button class="btn-select-grade-col text-amber-400 hover:text-amber-700 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="เลือกทั้งคอลัมน์คะแนน">▤</button>
              <button class="btn-mass-score text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" data-colname="${K(t.assignment_name)}" data-max="${t.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${te(t)?"":`<button class="btn-scan-col text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${t.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
            </div>
          </th>`).join(""):""}
          ${Ee?`<th class="${ue} bg-amber-50" style="width:30px">
            <button class="btn-add-bonus text-amber-500 hover:bg-amber-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block">＋</button></th>`:""}
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${X.map(t=>`<th class="${ue} bg-blue-50" style="width:${se}px;min-width:${se}px">
            <span class="col-edit formula-ref text-[11px] px-1 rounded block truncate ${te(t)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-blue-50"}"
              contenteditable="${te(t)?"false":"true"}" data-colid="${t.id}" data-field="assignment_name" title="${te(t)?on(t):""}">${t.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${te(t)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-blue-500 hover:underline"}"
              data-colid="${t.id}" title="${te(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${t.max_score||0}</span></span>
            ${t.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${ue} bg-blue-50" style="width:30px"></th>
          ${Z.map(t=>`<th class="${ue} bg-purple-50" style="width:${se}px;min-width:${se}px">
            <span class="col-edit formula-ref text-[11px] px-1 rounded block truncate ${te(t)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-purple-50"}"
              contenteditable="${te(t)?"false":"true"}" data-colid="${t.id}" data-field="assignment_name" title="${te(t)?on(t):""}">${t.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${te(t)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-purple-500 hover:underline"}"
              data-colid="${t.id}" title="${te(t)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${t.max_score||0}</span></span>
            ${t.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${ue} bg-purple-50" style="width:30px"></th>
          ${Ke.map(t=>`<th class="${ue} bg-indigo-50" style="width:${se}px;min-width:${se}px">
            <span class="text-[11px] text-indigo-700 font-medium block text-center truncate">${t.assignment_name}</span>
            <span class="text-[10px] text-indigo-400">/${t.max_score??"?"}</span>
          </th>`).join("")}
          ${Ne.map(t=>`<th class="${ue} bg-teal-50" style="width:${se}px;min-width:${se}px">
            <span class="col-edit formula-ref text-[11px] px-1 rounded block truncate text-teal-700 cursor-text hover:bg-teal-100"
              contenteditable="true" data-colid="${t.id}" data-field="assignment_name">${t.assignment_name||"—"}</span>
            <span class="text-[10px] text-teal-400">/${t.max_score??"?"}</span>
          </th>`).join("")}
          ${Ee?ke.map(t=>`<th class="${ue} bg-amber-50" style="width:${se}px;min-width:${se}px">
            <span class="col-edit formula-ref text-[11px] px-1 rounded block truncate text-amber-700 cursor-text hover:bg-amber-100"
              contenteditable="true" data-colid="${t.id}" data-field="assignment_name">${t.assignment_name||"—"}</span>
            <span class="text-[10px] text-amber-400">${t.max_score?"/"+t.max_score:"(ไม่จำกัด)"}</span>
          </th>`).join(""):""}
          ${Ee?`<th class="${ue} bg-amber-50" style="width:30px"></th>`:""}
        </tr>`,i=z.map((t,n)=>{var A;const{midRaw:l,finRaw:m,total:$,grade:C,khuna:I}=Qe(t.id),x=((A=F[t.id])==null?void 0:A.__force)??"",S=x||(C>0?C.toFixed(1):"0");return`<tr class="hover:bg-gray-50 transition" data-sid="${t.id}">
          <td class="${pn} text-center text-gray-400" style="width:28px">${n+1}</td>
          <td class="${Ut} text-center font-mono text-gray-600" style="left:28px;width:64px">${t.student_code}</td>
          <td class="${Ut} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${xn}px" data-idx="${n}">
            <div class="flex items-center gap-1.5 py-1">
              ${t.image_url?`<img src="${t.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${t.full_name}</span>
            </div>
          </td>
          ${X.map(h=>{const O=We(t.id,h)??"",V=Ht(t.id,h.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${se}px;min-width:${se}px;height:30px;${Tt(h,O)}">
            <input class="grade-input w-full h-full text-center text-xs ${te(h)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${st(h.id,O)}" placeholder="—"
              data-sid="${t.id}" data-col="${h.id}" data-max="${h.max_score}" ${te(h)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${V?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${h.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gmid-${t.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${l>0?Re("mid_subtotal",l,1):"—"}</td>
          ${Z.map(h=>{const O=We(t.id,h)??"",V=Ht(t.id,h.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${se}px;min-width:${se}px;height:30px;${Tt(h,O)}">
            <input class="grade-input w-full h-full text-center text-xs ${te(h)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${st(h.id,O)}" placeholder="—"
              data-sid="${t.id}" data-col="${h.id}" data-max="${h.max_score}" ${te(h)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${V?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${h.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gfin-${t.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${m>0?Re("fin_subtotal",m,1):"—"}</td>
          ${Ke.map(h=>{const O=Yt(h,t.id),V=O!==null&&O!==0?Re(`derived_${h.id}`,O,2):"—";return`<td class="border border-indigo-100 bg-indigo-50/40 text-center text-xs text-indigo-700 font-medium grade-derived-td" style="width:${se}px;min-width:${se}px;height:30px" title="คำนวณจาก: ${h.formula??""}">${V}</td>`}).join("")}
          ${Ne.map(h=>{const O=We(t.id,h)??"",V=Ht(t.id,h.id);return`<td class="border border-teal-100 text-center p-0 relative" style="width:${se}px;min-width:${se}px;height:30px;${Tt(h,O)}">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-teal-50 focus:outline-none focus:ring-1 focus:ring-teal-300 focus:rounded"
              type="text" inputmode="decimal" value="${st(h.id,O)}" placeholder="—"
              data-sid="${t.id}" data-col="${h.id}" data-max="${h.max_score??9999}"/>
            ${V?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${h.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          ${Ee?ke.map(h=>{const O=We(t.id,h)??"",V=Ht(t.id,h.id);return`<td class="border border-amber-100 text-center p-0 relative" style="width:${se}px;min-width:${se}px;height:30px;${Tt(h,O)}">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-300 focus:rounded"
              type="text" inputmode="decimal" value="${st(h.id,O)}" placeholder="—"
              data-sid="${t.id}" data-col="${h.id}" data-max="${h.max_score??9999}"/>
            ${V?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${t.id}" data-col="${h.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join(""):""}
          ${Ee?'<td class="border border-amber-50 bg-amber-50/30" style="width:30px;height:30px"></td>':""}
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${t.id}" style="min-width:58px">${$>0?$:"—"}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${t.id}" style="min-width:50px">${S}</td>
          ${ht?`<td class="border border-rose-100 text-center bg-rose-50 cursor-pointer hover:bg-rose-100 transition force-cell" style="min-width:32px;height:30px" data-sid="${t.id}">
            <span class="text-xs font-bold ${x?"text-rose-600":"text-rose-200"}">${x||"+"}</span></td>`:""}
          <td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${pt?I.cls:"text-gray-300"}" id="gkhuna-${t.id}">${pt?I.label:"—"}</td>
          ${er(t.id)}
        </tr>`}).join("");o.innerHTML=`${Qn()}${sr()}<div class="sticky top-0 z-20 flex min-h-8 items-center gap-2 border-b border-gray-200 bg-white/95 px-3 py-1 text-[11px] text-gray-500 backdrop-blur"><span>ลากเลือกหลายช่อง · คลิก ▤ เลือกทั้งคอลัมน์ · Ctrl/Cmd+C คัดลอก · Ctrl/Cmd+V วางคะแนนที่แสดง</span><span data-grade-range-status class="font-medium text-indigo-700"></span><button type="button" data-grade-range-delete class="hidden ml-auto rounded-lg border border-rose-200 px-2 py-1 font-bold text-rose-600 hover:bg-rose-50">🗑 ลบคะแนนที่เลือก</button></div><table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${u}</thead><tbody>${i}</tbody></table>`,Zn(o);const w=o.querySelector("table");_t=new AbortController;let c=null,k=!1;const q=()=>[...w.querySelectorAll("tbody tr")].map(t=>[...t.querySelectorAll(".grade-input")]),j=()=>{var x,S,A;const t=q();if(w.querySelectorAll("td.grade-range-selected").forEach(h=>{h.classList.remove("grade-range-selected"),h.style.boxShadow=""}),!c)return;const n=Math.min(c.r1,c.r2),l=Math.max(c.r1,c.r2),m=Math.min(c.c1,c.c2),$=Math.max(c.c1,c.c2);let C=0;for(let h=n;h<=l;h++)for(let O=m;O<=$;O++){const V=(S=(x=t[h])==null?void 0:x[O])==null?void 0:S.closest("td");V&&(V.classList.add("grade-range-selected"),V.style.boxShadow="inset 0 0 0 2px #6366f1",C++)}const I=o.querySelector("[data-grade-range-status]");I&&(I.textContent=`${C} ช่องที่เลือก`),(A=o.querySelector("[data-grade-range-delete]"))==null||A.classList.toggle("hidden",!C)},P=t=>{var C;const n=q(),l=t.closest("tr"),m=n.findIndex((I,x)=>l===w.querySelectorAll("tbody tr")[x]),$=((C=n[m])==null?void 0:C.indexOf(t))??-1;return m<0||$<0?null:{r:m,c:$}};w.addEventListener("mousedown",t=>{if(W)return;const n=t.target.closest(".grade-input");if(!n)return;const l=P(n);l&&(t.preventDefault(),n.focus({preventScroll:!0}),n.select(),c={r1:l.r,c1:l.c,r2:l.r,c2:l.c},k=!0,j())}),w.addEventListener("mouseover",t=>{if(!k||W)return;const n=t.target.closest(".grade-input"),l=n&&P(n);!l||!c||l.r===c.r2&&l.c===c.c2||(c.r2=l.r,c.c2=l.c,j())}),document.addEventListener("mouseup",()=>{k=!1},{signal:_t.signal}),w.addEventListener("click",t=>{var C,I,x;const n=t.target.closest(".btn-select-grade-col");if(!n||W)return;t.preventDefault(),t.stopPropagation();const l=q(),m=String(n.dataset.colid),$=((C=l[0])==null?void 0:C.findIndex(S=>S.dataset.col===m))??-1;$<0||!l.length||(c={r1:0,c1:$,r2:l.length-1,c2:$},j(),(x=(I=l[0])==null?void 0:I[$])==null||x.focus({preventScroll:!0}))}),w.addEventListener("copy",t=>{var x;if(!c||W)return;const n=q(),l=Math.min(c.r1,c.r2),m=Math.max(c.r1,c.r2),$=Math.min(c.c1,c.c2),C=Math.max(c.c1,c.c2),I=n.slice(l,m+1).map(S=>S.slice($,C+1).map(A=>{const h=je[Number(A.dataset.col)],O=h?We(Number(A.dataset.sid),h):null;return O==null?"":String(O)}).join("	")).join(`
`);(x=t.clipboardData)==null||x.setData("text/plain",I),t.preventDefault()}),w.addEventListener("paste",async t=>{var h,O,V,ae,ie,he;const n=t.target.closest(".grade-input");if(!n||W)return;const l=(h=t.clipboardData)==null?void 0:h.getData("text/plain");if(l==null)return;t.preventDefault();const m=l.replace(/\r/g,"").split(`
`).map(le=>le.split("	"));for(;m.length>1&&m[m.length-1].length===1&&m[m.length-1][0]==="";)m.pop();if(!m.length)return;const $=P(n),C=q(),I=c?{r:Math.min(c.r1,c.r2),c:Math.min(c.c1,c.c2)}:$;if(!I)return;const x=[];for(let le=0;le<m.length&&I.r+le<C.length;le++)for(let ee=0;ee<m[le].length&&I.c+ee<(((O=C[I.r+le])==null?void 0:O.length)??0);ee++){const xe=C[I.r+le][I.c+ee];if(!xe||xe.disabled||te(Number(xe.dataset.col)))continue;const Se=m[le][ee].trim();if(Se!==""&&!/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(Se)){f("วางได้เฉพาะคะแนนตัวเลขหรือช่องว่าง สูตรจะวางเป็นค่าคะแนนที่แสดงอยู่","warning");return}x.push({input:xe,value:Se})}if(!x.length)return;const S=document.getElementById("grade-saving");S==null||S.classList.remove("hidden");let A=0;try{for(const{input:le,value:ee}of x){const xe=Number(le.dataset.sid),Se=Number(le.dataset.col),Ge=parseFloat(le.dataset.max),ne=Je(xe,Se);if(F[xe]||(F[xe]={}),!((V=F[xe][Se])!=null&&V.score_formula)&&(ee===""&&ne==null||ee!==""&&ne!=null&&Number(ee)===Number(ne)))continue;const me=await Lt(a.id,xe,Se,ee===""?null:ee,{currentHistory:((ie=(ae=F[xe])==null?void 0:ae[Se])==null?void 0:ie.history)??[],max:Number.isFinite(Ge)?Ge:null});if(!me)continue;const{final:Ue,history:Oe,clamped:kt}=me;F[xe][Se]={orig:((he=Oe[0])==null?void 0:he.d)??Ue,retake:null,final:Ue,history:Oe,score_formula:null,score_formula_refs:[]},A++,kt&&f(`คะแนนเกินคะแนนเต็ม ปรับให้เป็น ${Ue} อัตโนมัติ`,"warning"),await s(xe,Se)}A&&(ve(),Te(),Me&&Ze(),f(`วางคะแนนสำเร็จ ${A} ช่อง`,"success"))}catch(le){f("วางคะแนนได้บางส่วน แต่มีรายการบันทึกไม่สำเร็จ: "+fe(le),"error"),ve(),Te(),Me&&Ze()}finally{S==null||S.classList.add("hidden")}}),(d=o.querySelector("[data-grade-range-delete]"))==null||d.addEventListener("click",async()=>{var A,h;if(!c||W)return;const t=q(),n=Math.min(c.r1,c.r2),l=Math.max(c.r1,c.r2),m=Math.min(c.c1,c.c2),$=Math.max(c.c1,c.c2),C=[];for(let O=n;O<=l;O++)for(let V=m;V<=$;V++){const ae=(A=t[O])==null?void 0:A[V];ae&&!ae.disabled&&!te(Number(ae.dataset.col))&&Je(Number(ae.dataset.sid),Number(ae.dataset.col))!=null&&C.push(ae)}if(!C.length){f("ช่วงที่เลือกไม่มีคะแนนที่ลบได้","info");return}if(!confirm(`ล้างคะแนน ${C.length} ช่องที่เลือกใช่หรือไม่?`))return;const I=o.querySelector("[data-grade-range-delete]"),x=document.getElementById("grade-saving");I.disabled=!0,x==null||x.classList.remove("hidden");let S=0;try{for(const O of C){const V=Number(O.dataset.sid),ae=Number(O.dataset.col),ie=(h=F[V])==null?void 0:h[ae],he=await Lt(a.id,V,ae,null,{currentHistory:(ie==null?void 0:ie.history)??[],max:Number(O.dataset.max)||null});he&&(F[V][ae]={orig:null,retake:null,final:null,history:he.history??[],score_formula:null,score_formula_refs:[]},S++)}ve(),Te(),Me&&Ze(),f(`ลบคะแนนแล้ว ${S} ช่อง`,"success")}catch(O){ve(),Te(),Me&&Ze(),f(`ลบได้ ${S} ช่อง แต่มีรายการไม่สำเร็จ: ${fe(O)}`,"error")}finally{x==null||x.classList.add("hidden"),I.disabled=!1}});const L=o.querySelector("[data-cell-formula-editor]"),D=()=>{const t=L==null?void 0:L.querySelector("[data-cell-refs]");!t||!W||(t.innerHTML=W.refs.map(n=>{const l=je[n.col_id],m=z.find($=>Number($.id)===Number(n.student_id??W.sid));return`<span class="rounded-full bg-white border border-violet-200 px-2 py-1"><b class="font-mono text-violet-700">${n.var}</b> = ${K((l==null?void 0:l.assignment_name)??"คอลัมน์")} · ${n.student_id?K((m==null?void 0:m.full_name)??"นักเรียน"):"แถวเดียวกัน"}</span>`}).join("")||"<span>คลิกหัวคอลัมน์เพื่ออ้างอิงคะแนนของนักเรียนแถวนี้ หรือคลิกช่องอื่นเพื่ออ้างอิงช่องนั้นโดยตรง</span>")},b=t=>{var $;const n=Number(t.dataset.sid),l=Number(t.dataset.col);if((W==null?void 0:W.input)===t)return;const m=($=F[n])==null?void 0:$[l];W={input:t,sid:n,colId:l,refs:[...(m==null?void 0:m.score_formula_refs)??[]]},L==null||L.classList.remove("hidden"),D()},N=(t,n=W==null?void 0:W.sid)=>{if(!W||!n||!je[t])return;const l=new Set(W.refs.map(S=>S.var)),m=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].find(S=>!l.has(S));if(!m){f("สูตรนี้อ้างอิงได้สูงสุด 26 ช่อง","warning");return}const $={var:m,col_id:Number(t)};Number(n)!==W.sid&&($.student_id=Number(n)),W.refs.push($);const C=W.input,I=C.selectionStart??C.value.length,x=C.selectionEnd??I;C.setRangeText(m,I,x,"end"),C.focus(),C.dispatchEvent(new Event("input",{bubbles:!0})),D()};L==null||L.querySelectorAll("[data-cell-template]").forEach(t=>t.addEventListener("mousedown",n=>n.preventDefault())),L==null||L.querySelectorAll("[data-cell-template]").forEach(t=>t.addEventListener("click",()=>{if(!W)return;const n=W.input;n.value=t.dataset.cellTemplate,n.focus(),n.setSelectionRange(n.value.length,n.value.length),n.dispatchEvent(new Event("input",{bubbles:!0}))})),w.addEventListener("input",t=>{const n=t.target.closest(".grade-input");n&&(n.value.trim().startsWith("=")?b(n):(W==null?void 0:W.input)===n&&(W=null,L==null||L.classList.add("hidden")))}),w.addEventListener("mousedown",t=>{if(!W)return;const n=t.target.closest(".formula-ref, .col-sheet-ref"),l=t.target.closest(".grade-input");if(n){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),N(Number(n.dataset.colid));return}l&&l!==W.input&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),N(Number(l.dataset.col),Number(l.dataset.sid)))},!0),w.addEventListener("keydown",t=>{const n=t.target.closest(".grade-input");!n||(W==null?void 0:W.input)!==n||(t.key==="Escape"&&(t.preventDefault(),W=null,L==null||L.classList.add("hidden"),n.value=st(n.dataset.col,Je(Number(n.dataset.sid),Number(n.dataset.col))??""),n.blur()),t.key==="Enter"&&(t.preventDefault(),n.blur()))},!0);const s=async(t,n)=>{var Se,Ge,ne,me,Ue;const l=je[n];if(!l||l.column_type!=="override"||!l.link_column_id)return;const m=(Ge=(Se=F[t])==null?void 0:Se[n])==null?void 0:Ge.final;if(m==null)return;const $=l.link_column_id,C=(ne=je[$])==null?void 0:ne.max_score,I=await $r({studentId:t,mainColumnId:$,overrideValue:m,overrideMode:l.override_mode,mainMaxScore:typeof C=="number"?C:null});if(!I.applied)return;F[t][$]={orig:((me=I.history[0])==null?void 0:me.d)??I.score,retake:null,final:I.score,history:I.history};const x=o.querySelector(`.grade-input[data-sid="${t}"][data-col="${$}"]`);x&&(x.value=I.score!==null?String(st($,I.score)):"",x.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",x.style.background="#f0fdf4",setTimeout(()=>{x.style.boxShadow="",x.style.background=""},900));const{midRaw:S,finRaw:A,total:h,grade:O,khuna:V}=Qe(t),ae=((Ue=F[t])==null?void 0:Ue.__force)??"",ie=document.getElementById(`gmid-${t}`),he=document.getElementById(`gfin-${t}`);ie&&(ie.textContent=S>0?Re("mid_subtotal",S,1):"—"),he&&(he.textContent=A>0?Re("fin_subtotal",A,1):"—");const le=document.getElementById(`gtotal-${t}`),ee=document.getElementById(`ggrade-${t}`),xe=document.getElementById(`gkhuna-${t}`);le&&(le.textContent=h>0?h:"—"),ee&&(ee.textContent=ae||(O>0?O.toFixed(1):"0")),xe&&(xe.textContent=V.label,xe.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${V.cls}`),f(`ปรับคะแนนอัตโนมัติ → ${I.score} (จากคอลัมน์ปรับคะแนน) ✅`,"success")};w.addEventListener("focusin",t=>{var I;const n=t.target.closest(".grade-input");if(!n)return;const l=Number(n.dataset.sid),m=Number(n.dataset.col),$=(I=F[l])==null?void 0:I[m],C=Je(l,m);n.value=($==null?void 0:$.score_formula)??(C==null?"":String(C)),$!=null&&$.score_formula&&(b(n),n.setSelectionRange(n.value.length,n.value.length))}),w.addEventListener("focusout",t=>{const n=t.target.closest(".grade-input");if(!n)return;const l=Number(n.dataset.sid),m=je[Number(n.dataset.col)];if(n.value.trim().startsWith("="))return;const $=m?We(l,m):n.value;n.value=st(n.dataset.col,$)}),w.addEventListener("change",async t=>{var m,$,C,I,x,S,A,h,O,V,ae,ie,he,le,ee,xe,Se,Ge;const n=t.target.closest(".grade-input"),l=t.target.closest(".force-input");if(n){const ne=parseInt(n.dataset.sid),me=parseInt(n.dataset.col),Ue=parseFloat(n.dataset.max);if(te(me)){f("คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้","warning"),n.value=(($=(m=F[ne])==null?void 0:m[me])==null?void 0:$.final)??"";return}let Oe=n.value.trim();const kt=(W==null?void 0:W.input)===n?W:null;if(Oe.startsWith("=")){const at=(kt==null?void 0:kt.refs)??((I=(C=F[ne])==null?void 0:C[me])==null?void 0:I.score_formula_refs)??[],St=new Set([`${ne}:${me}`]),Et=at.map(Le=>Wt(Number(Le.student_id??ne),Number(Le.col_id),St)),Zt=Object.fromEntries(at.map((Le,qt)=>[Le.var,Et[qt]])),Ce=It(Oe,Zt);if(Ce==null||!Number.isFinite(Ce)){f("สูตรยังไม่สมบูรณ์ หรืออ้างอิงวนกลับมาที่ช่องนี้","warning"),n.focus();return}const Pt=at.length&&Et.every(Le=>Le==null||Le==="")?null:Math.max(0,Number.isFinite(Ue)?Math.min(Ce,Ue):Ce);n.style.outline="2px solid #6366f1",n.style.outlineOffset="1px",(x=document.getElementById("grade-saving"))==null||x.classList.remove("hidden");try{const Le=await _r(ne,me,Oe,at,Pt),qt=((S=F[ne])==null?void 0:S[me])??{};F[ne][me]={...qt,final:Le.final,score_formula:Oe,score_formula_refs:at},W=null,L==null||L.classList.add("hidden"),f(`บันทึกสูตรในช่อง ${((A=je[me])==null?void 0:A.assignment_name)??""} แล้ว ✅`,"success"),ve(),Te(),Me&&Ze()}catch(Le){f("บันทึกสูตรไม่สำเร็จ: "+fe(Le),"error"),n.focus()}finally{(h=document.getElementById("grade-saving"))==null||h.classList.add("hidden")}return}kt&&(W=null,L==null||L.classList.add("hidden"));const Qt=Je(ne,me);if(!((V=(O=F[ne])==null?void 0:O[me])!=null&&V.score_formula)&&(Oe===""&&Qt==null||Oe!==""&&Qt!=null&&Number(Oe)===Number(Qt)))return;const or=((ie=(ae=F[ne])==null?void 0:ae[me])==null?void 0:ie.history)??[];F[ne]||(F[ne]={}),n.style.outline="2px solid #6366f1",n.style.outlineOffset="1px",(he=document.getElementById("grade-saving"))==null||he.classList.remove("hidden");try{const at=await Lt(a.id,ne,me,Oe===""?null:Oe,{currentHistory:or,max:isNaN(Ue)?null:Ue});if(!at){n.value=((le=F[ne][me])==null?void 0:le.final)??"";return}const{final:St,history:Et,clamped:Zt}=at;F[ne][me]={orig:((ee=Et[0])==null?void 0:ee.d)??St,retake:null,final:St,history:Et,score_formula:null,score_formula_refs:[]},n.value=st(me,We(ne,je[me])),Vn(n,je[me],St),n.title="",Zt&&f(`คะแนนเกินคะแนนเต็ม ปรับให้เป็น ${St} อัตโนมัติ`,"warning");const Ce=n.closest("td");if(Et.length>1){if(!(Ce!=null&&Ce.querySelector(".hist-indicator"))){const Ct=document.createElement("span");Ct.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none",Ct.textContent="Δ",Ct.dataset.sid=ne,Ct.dataset.col=me,Ct.title="ดูประวัติคะแนน",Ce==null||Ce.appendChild(Ct)}}else(xe=Ce==null?void 0:Ce.querySelector(".hist-indicator"))==null||xe.remove();n.style.outline="",n.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",n.style.background="#f0fdf4",setTimeout(()=>{n.style.boxShadow="",n.style.background=""},900);const{midRaw:Pt,finRaw:Le,total:qt,grade:hn,khuna:vn}=Qe(ne),ar=((Se=F[ne])==null?void 0:Se.__force)??"",wn=document.getElementById(`gmid-${ne}`),$n=document.getElementById(`gfin-${ne}`);wn&&(wn.textContent=Pt>0?Re("mid_subtotal",Pt,1):"—"),$n&&($n.textContent=Le>0?Re("fin_subtotal",Le,1):"—");const _n=document.getElementById(`gtotal-${ne}`),kn=document.getElementById(`ggrade-${ne}`),Dt=document.getElementById(`gkhuna-${ne}`);_n&&(_n.textContent=qt>0?qt:"—"),kn&&(kn.textContent=ar||(hn>0?hn.toFixed(1):"0")),Dt&&(Dt.textContent=vn.label,Dt.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${vn.cls}`),await s(ne,me)}catch{f("บันทึกไม่สำเร็จ","error")}finally{(Ge=document.getElementById("grade-saving"))==null||Ge.classList.add("hidden")}}}),w.addEventListener("input",t=>{var S,A;const n=t.target.closest(".grade-input");if(!n)return;const l=n.value.trim();if(!/^[+-]/.test(l)){n.title="";return}const m=parseInt(n.dataset.sid),$=parseInt(n.dataset.col),C=((A=(S=F[m])==null?void 0:S[$])==null?void 0:A.final)??0,I=parseFloat(l);if(isNaN(I)){n.title="";return}const x=Math.round((C+I)*1e3)/1e3;n.title=`${C} ${I>=0?"+":"−"} ${Math.abs(I)} = ${x}`}),w.addEventListener("click",t=>{var $,C;const n=t.target.closest(".hist-indicator");if(n){const I=parseInt(n.dataset.sid),x=parseInt(n.dataset.col),S=((C=($=F[I])==null?void 0:$[x])==null?void 0:C.history)??[],A=[...X,...Z,...ke].find(h=>h.id===x);nr(I,x,(A==null?void 0:A.assignment_name)??"",S);return}const l=t.target.closest(".btn-mass-score");if(l){rr(parseInt(l.dataset.colid),l.dataset.colname,l.dataset.max?parseFloat(l.dataset.max):null);return}const m=t.target.closest(".btn-scan-col");if(m){Cn({classId:a.id,className:a.class_name,initialColumnId:parseInt(m.dataset.colid)});return}}),w.addEventListener("click",t=>{var I,x;const n=t.target.closest(".force-cell");if(!n)return;const l=parseInt(n.dataset.sid);(I=document.getElementById("force-grade-popup"))==null||I.remove();const m=((x=F[l])==null?void 0:x.__force)??"",$=document.createElement("div");$.id="force-grade-popup",$.className="fixed inset-0 z-[400] flex items-end sm:items-center justify-center p-4",$.style.background="rgba(0,0,0,0.4)";const C=z.find(S=>S.id===l);$.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div class="bg-rose-50 px-5 py-3 border-b border-rose-100">
              <p class="font-bold text-rose-700 text-sm">บังคับเกรด</p>
              <p class="text-xs text-rose-400">${(C==null?void 0:C.full_name)??""}</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-4 gap-2 mb-3">
                ${Un.map(S=>`
                  <button class="force-pick py-2.5 rounded-xl text-sm font-bold border transition
                    ${S===m?"bg-rose-500 text-white border-rose-500":"bg-white text-rose-600 border-rose-200 hover:bg-rose-50"}"
                    data-grade="${S}">${S}</button>`).join("")}
                <button class="force-pick py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 col-span-4"
                  data-grade="">ล้างค่า (ใช้เกรดปกติ)</button>
              </div>
            </div>
          </div>`,document.body.appendChild($),$.addEventListener("click",async S=>{const A=S.target.closest(".force-pick");if(!A&&S.target===$){$.remove();return}if(!A)return;const h=A.dataset.grade;A.disabled=!0;try{await kr(C==null?void 0:C.enrollment_id,h)}catch(ie){f("บันทึกบังคับเกรดไม่สำเร็จ: "+fe(ie),"error"),A.disabled=!1;return}F[l]||(F[l]={}),F[l].__force=h,C&&(C.special_result=h||null);const{grade:O}=Qe(l),V=document.getElementById(`ggrade-${l}`);V&&(V.textContent=h||(O>0?O.toFixed(1):"0"));const ae=n.querySelector("span");ae&&(ae.textContent=h||"+",ae.className=`text-xs font-bold ${h?"text-rose-600":"text-rose-200"}`),$.remove()})}),w.addEventListener("keydown",t=>{var V,ae;const n=t.target.closest(".grade-input");if(!n||!["Tab","Enter","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key))return;t.preventDefault();const m=[...o.querySelectorAll(".grade-input")],$=[...new Set(m.map(ie=>ie.dataset.sid))],I=[...new Set(m.map(ie=>ie.dataset.col))].length,x=m.indexOf(n),S=Math.floor(x/I),A=x%I;let h=S,O=A;switch(t.key){case"Enter":case"ArrowDown":h=S<$.length-1?S+1:S;break;case"ArrowUp":h=S>0?S-1:0;break;case"Tab":(V=m[x+(t.shiftKey?-1:1)])==null||V.focus();return;case"ArrowRight":O=A<I-1?A+1:A;break;case"ArrowLeft":O=A>0?A-1:0;break}(ae=m[h*I+O])==null||ae.focus()}),o.querySelectorAll(".col-edit").forEach(t=>{t.addEventListener("blur",async()=>{const n=parseInt(t.dataset.colid),l=t.textContent.trim();if(!te(n))try{await lt(n,{assignment_name:l||null});const m=[...X,...Z,...ke].find($=>$.id===n);m&&(m.assignment_name=l)}catch{f("บันทึกไม่สำเร็จ","error")}}),t.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),t.blur())})}),o.querySelectorAll(".col-sheet-ref").forEach(t=>{t.addEventListener("click",()=>{if(W)return;const n=parseInt(t.dataset.colid);if(te(n)){f("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}Pn(t,n)})}),o.querySelectorAll(".col-max").forEach(t=>{t.addEventListener("click",()=>{const n=parseInt(t.dataset.colid);if(te(n)){f("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}Kn(t,n)})}),o.querySelectorAll(".btn-add-col").forEach(t=>{t.addEventListener("click",()=>jn(a,t.dataset.type,()=>Be(y,a)))}),(p=o.querySelector(".btn-add-bonus"))==null||p.addEventListener("click",()=>{var l;(l=document.getElementById("quick-add-bonus"))==null||l.remove();const t=document.createElement("div");t.id="quick-add-bonus",t.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/40 p-4",t.innerHTML=`
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
          </div>`,document.body.appendChild(t),t.querySelector("#qb-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",m=>{m.target===t&&t.remove()});const n=t.querySelector("#qb-name");n.focus(),t.querySelector("#qb-add").addEventListener("click",async()=>{const m=n.value.trim(),$=t.querySelector("#qb-max").value?parseFloat(t.querySelector("#qb-max").value):null;if(!m){f("กรุณากรอกชื่อคอลัมน์","warning");return}const C=t.querySelector("#qb-add");C.disabled=!0,C.textContent="⏳";try{await De({class_id:a.id,assignment_name:m,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:$,column_type:"bonus",formula:null,formula_refs:[]}),f(`เพิ่ม "${m}" แล้ว ✅`,"success"),t.remove(),Be(y,a)}catch(I){f("เพิ่มไม่สำเร็จ: "+fe(I),"error"),C.disabled=!1,C.textContent="เพิ่ม"}})}),o.querySelectorAll(".btn-formula-link").forEach(t=>{t.addEventListener("click",()=>{const n=parseInt(t.dataset.colid),l=[...X,...Z].find(m=>m.id===n);l&&Xn(l)})}),o.querySelectorAll(".student-name-cell").forEach(t=>{t.addEventListener("click",()=>{const n=z[parseInt(t.dataset.idx)];Jn(n,F[n.id]??{},Qe(n.id))})})};et(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0 flex-wrap">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${(E==null?void 0:E.subject_name)??"—"} · ${a.class_name} · ${z.length} คน</p>
        </div>
        <div id="grade-saving" class="hidden bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
        <div class="flex items-center gap-1.5 flex-wrap justify-end">
        <button id="btn-grade-filter" type="button" class="relative flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          🔍 <span class="hidden sm:inline text-xs">ค้นหา/กรอง</span><span id="grade-filter-badge" class="hidden absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-2 ring-white"></span>
        </button>
        <button id="btn-scan-score" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-sky-200 text-sm text-sky-600 hover:bg-sky-50 transition flex-shrink-0">
          📷 <span class="hidden sm:inline text-xs">สแกนคะแนน</span>
        </button>
        <button id="btn-ai-score" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-violet-200 text-sm text-violet-700 hover:bg-violet-50 transition flex-shrink-0">🤖 <span class="hidden sm:inline text-xs">เพิ่มคะแนนด้วย AI</span></button>
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
    </div>`),(G=document.getElementById("btn-grade-filter"))==null||G.addEventListener("click",()=>{var e,r;(e=document.getElementById("grade-filterbar"))==null||e.classList.toggle("hidden"),(r=document.getElementById("grade-filter-search"))==null||r.focus()}),(U=document.getElementById("grade-filter-search"))==null||U.addEventListener("input",e=>{Vt=e.target.value,Te()}),(H=document.getElementById("grade-filter-completion"))==null||H.addEventListener("change",e=>{At=e.target.value,Te()}),(B=document.getElementById("grade-filter-result"))==null||B.addEventListener("change",e=>{$t=e.target.value,Te()}),(oe=document.getElementById("grade-filter-clear"))==null||oe.addEventListener("click",()=>{Vt="",At="all",$t="all";const e=document.getElementById("grade-filter-search"),r=document.getElementById("grade-filter-completion"),o=document.getElementById("grade-filter-result");e&&(e.value=""),r&&(r.value="all"),o&&(o.value="all"),Te()}),(J=document.getElementById("btn-manage-cols"))==null||J.addEventListener("click",Dn),(Y=document.getElementById("btn-copy-cols"))==null||Y.addEventListener("click",()=>Dr(a,re)),(pe=document.getElementById("btn-scan-score"))==null||pe.addEventListener("click",()=>{Cn({classId:a.id,className:a.class_name})}),(be=document.getElementById("btn-ai-score"))==null||be.addEventListener("click",()=>{const e=document.createElement("div");e.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-3";const r=_e.map(s=>{const d=te(s),p=d||["derived","override"].includes(s.column_type),t=d?"คะแนนระบบ · เลือกไม่ได้":s.column_type==="derived"?"คอลัมน์คำนวณ · เลือกไม่ได้":s.column_type==="override"?"คอลัมน์ปรับคะแนน · เลือกไม่ได้":"",n=Number(s.max_score),l=Number.isFinite(n)&&n>0;return`<div class="flex items-center gap-2 rounded-lg border border-gray-100 px-2.5 py-2 ${p?"bg-gray-50 opacity-60":"bg-white hover:border-violet-200"}"><label class="flex min-w-0 flex-1 cursor-${p?"not-allowed":"pointer"} items-center gap-2 text-xs"><input type="checkbox" data-ai-colid="${s.id}" ${p?"disabled":""} class="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-violet-600"><span class="min-w-0"><b class="block truncate text-gray-800">${K(s.assignment_name||"คอลัมน์ไม่มีชื่อ")}</b><small class="text-gray-500">${K(s.assignment_type??"คะแนนพิเศษ")} · ${l?`เต็ม ${K(s.max_score)}`:"ไม่จำกัด"}${t?` · ${t}`:""}</small></span></label><input type="number" min="0.01" step="any" data-ai-colmax="${s.id}" value="${l?K(s.max_score):""}" ${l?"readonly":"disabled"} placeholder="เต็ม" title="คะแนนเต็มที่ให้ AI ใช้ประเมิน" class="w-24 rounded-md border border-gray-200 px-2 py-1.5 text-xs ${l?"bg-gray-50 text-gray-500":""}"></div>`}).join("");e.innerHTML=`<section class="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"><header class="border-b px-5 py-4"><h3 class="font-extrabold text-gray-900">🤖 เพิ่มคะแนนด้วย AI</h3><p class="mt-1 text-xs text-gray-500">เลือกหลายคอลัมน์และนักเรียน → สร้างคำสั่งให้ AI → วางผลคะแนนเพื่อตรวจสอบก่อนบันทึก</p></header><div class="overflow-y-auto p-5 space-y-4"><div><div class="mb-2 flex items-center justify-between gap-3"><b class="text-xs font-bold text-gray-700">เลือกคอลัมน์คะแนนที่จะให้ AI ประเมิน</b><button type="button" data-ai-selectall-cols class="text-xs font-bold text-violet-700">เลือกทุกคอลัมน์</button></div><div data-ai-columns class="grid max-h-56 grid-cols-1 gap-1.5 overflow-y-auto rounded-xl border border-gray-200 bg-gray-50/50 p-2 sm:grid-cols-2">${r||'<p class="p-3 text-xs text-gray-400">ยังไม่มีคอลัมน์คะแนนในห้องนี้</p>'}</div><p class="mt-1 text-[11px] text-gray-500">แสดงคอลัมน์ทั้งหมดในห้องนี้ คอลัมน์ระบบ ล็อก คำนวณ และปรับคะแนนจะแสดงแต่เลือกไม่ได้ ส่วนหัวตารางตัวอย่างเปลี่ยนคอลัมน์ปลายทางได้</p></div><label class="block text-xs font-bold text-gray-600">เกณฑ์หรือข้อมูลประกอบ<textarea data-ai-criteria rows="3" class="mt-1 w-full rounded-lg border px-3 py-2 font-normal" placeholder="วางเกณฑ์การให้คะแนน/สรุปผลงานนักเรียน"></textarea></label><div class="flex items-center justify-between"><b class="text-xs text-gray-700">เลือกนักเรียนที่จะให้ AI ช่วยประเมิน</b><button type="button" data-ai-selectall-students class="text-xs font-bold text-indigo-600">เลือกทั้งหมด</button></div><div data-ai-students class="grid max-h-40 grid-cols-1 gap-1 overflow-y-auto rounded-lg border p-2 sm:grid-cols-2">${z.map(s=>`<label class="flex items-center gap-2 rounded px-2 py-1 text-xs hover:bg-gray-50"><input type="checkbox" data-ai-sid="${s.id}" checked><span>${K(s.student_code)} · ${K(s.full_name)}</span></label>`).join("")}</div><button type="button" data-ai-prompt class="rounded-lg bg-violet-700 px-4 py-2 text-xs font-bold text-white">✨ สร้างคำสั่งและคัดลอก</button><textarea data-ai-output rows="5" class="w-full rounded-lg border px-3 py-2 font-mono text-xs" placeholder="วางกล่องโค้ด JSON เช่น &#96;&#96;&#96;json&#10;[{&quot;student_code&quot;:&quot;26056&quot;,&quot;scores&quot;:{&quot;123&quot;:8,&quot;124&quot;:17}}]&#10;&#96;&#96;&#96;"></textarea><label class="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[11px] text-amber-900"><input type="checkbox" data-ai-overwrite class="mt-0.5"><span>อนุญาตเขียนทับคะแนนและประวัติเดิมของนักเรียนในคอลัมน์ที่เลือก</span></label><div data-ai-review class="hidden overflow-hidden rounded-xl border border-emerald-200"><div data-ai-review-summary class="border-b border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900"></div><div class="max-h-64 overflow-auto"><table class="w-full border-collapse text-xs"><thead data-ai-review-head class="sticky top-0 z-10 bg-gray-50"></thead><tbody data-ai-review-rows></tbody></table></div></div><p class="text-[11px] text-gray-500">ระบบจะบันทึกลงคอลัมน์ปลายทางที่เลือกในหัวตาราง และไม่สร้างคอลัมน์ใหม่</p></div><footer class="flex justify-end gap-2 border-t px-5 py-3"><button type="button" data-ai-close class="rounded-lg border px-4 py-2 text-xs font-bold text-gray-600">ปิด</button><button type="button" data-ai-save class="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white">ตรวจคะแนน</button></footer></section>`,document.body.appendChild(e);const o=()=>e.remove(),u=e.querySelector("[data-ai-save]"),i=e.querySelector("[data-ai-review]"),w=e.querySelector("[data-ai-review-head]"),c=e.querySelector("[data-ai-review-summary]"),k=e.querySelector("[data-ai-review-rows]");let q=null;const j=()=>{q=null,i.classList.add("hidden"),w.innerHTML="",k.innerHTML="",u.disabled=!1,u.textContent="ตรวจคะแนน"},P=()=>[...e.querySelectorAll("[data-ai-colid]:checked")].map(s=>{const d=_e.find(t=>Number(t.id)===Number(s.dataset.aiColid)),p=e.querySelector(`[data-ai-colmax="${s.dataset.aiColid}"]`);return d?{col:d,max:Number(p==null?void 0:p.value)}:null}).filter(Boolean),L=()=>{e.querySelectorAll("[data-ai-colid]").forEach(p=>{const t=_e.find(m=>Number(m.id)===Number(p.dataset.aiColid)),n=e.querySelector(`[data-ai-colmax="${p.dataset.aiColid}"]`);if(!n)return;const l=Number(t==null?void 0:t.max_score);n.disabled=p.disabled||!p.checked&&!(Number.isFinite(l)&&l>0)});const s=[...e.querySelectorAll("[data-ai-colid]:not(:disabled)")],d=s.length>0&&s.every(p=>p.checked);e.querySelector("[data-ai-selectall-cols]").textContent=d?"ยกเลิกเลือกคอลัมน์":"เลือกทุกคอลัมน์"},D=(s,d)=>{var n;const p=(n=F[s.id])==null?void 0:n[d.id],t=We(s.id,d);return p!=null&&p.score_formula?`สูตรเดิม (${t===""?"ยังไม่มีผล":t})`:t==null||t===""?"ว่าง":String(t)},b=()=>{if(!q)return;const s=q,d=s.selectedColumns.map(({col:x})=>{const S=e.querySelector(`[data-ai-review-target="${x.id}"]`);return{sourceCol:x,targetCol:_e.find(A=>Number(A.id)===Number(S==null?void 0:S.value))}}),p=s.baseEntries.map(x=>{var he,le;const S=d.find(ee=>Number(ee.sourceCol.id)===Number(x.sourceCol.id)),A=S==null?void 0:S.targetCol,h=Number(A==null?void 0:A.max_score),O=Number.isFinite(h)&&h>0?h:x.sourceMax,V=A?We(x.student.id,A):null,ae=!!(A&&((le=(he=F[x.student.id])==null?void 0:he[A.id])!=null&&le.score_formula)),ie=A?D(x.student,A):"—";return{...x,col:A,max:O,oldValue:ie,hasFormula:ae,maxChanged:O!==x.sourceMax,overwrites:ae||V!=null&&V!==""&&Number(V)!==x.score,valid:!!(A&&x.score<=O)}}),t=d.map(x=>{var S;return(S=x.targetCol)==null?void 0:S.id}).filter(x=>x!=null),n=new Set(t).size!==t.length,l=p.filter(x=>!x.valid).length,m=p.filter(x=>x.overwrites).length,$=p.filter(x=>x.maxChanged).length,C=[];n&&C.push("เลือกคอลัมน์ปลายทางซ้ำกัน กรุณาเลือกคอลัมน์ให้ไม่ซ้ำ"),l&&C.push(`มี ${l} คะแนนเกินคะแนนเต็มของคอลัมน์ปลายทาง`),C.length?(c.className="border-b border-rose-100 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-800",c.textContent=C.join(" · ")):(c.className="border-b border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900",c.textContent=`${p.length} ช่องคะแนน · ${s.selectedStudents.length} คน · ${d.length} คอลัมน์${m?` · เขียนทับ ${m} ช่อง`:""}${$?` · ${$} ช่องมีคะแนนเต็ม AI/ปลายทางต่างกัน`:""}${m&&!e.querySelector("[data-ai-overwrite]").checked?" · ติ๊กยืนยันเขียนทับเพื่อบันทึก":""}`),k.innerHTML=s.selectedStudents.map(x=>{const S=s.selectedColumns.map(A=>{const h=p.find(V=>Number(V.student.id)===Number(x.id)&&Number(V.sourceCol.id)===Number(A.col.id));return h?`<td class="border-b px-2 py-2 text-right ${!h.valid||n?"bg-rose-50 text-rose-700":h.overwrites||h.maxChanged?"bg-amber-50":""}"><span class="text-gray-500">${K(h.oldValue)} → </span><b>${h.score}/${h.max}</b>${h.maxChanged?`<small class="block text-amber-700">AI ประเมินเต็ม ${h.sourceMax}</small>`:""}</td>`:'<td class="border-b px-2 py-2 text-right text-gray-400">—</td>'}).join("");return`<tr><td class="sticky left-0 border-b bg-white px-2 py-2 font-medium">${K(x.student_code)} · ${K(x.full_name)}</td>${S}</tr>`}).join(""),q={...s,targetColumns:d,entries:p,overwriteCount:m,hasDuplicateTarget:n,invalidCount:l};const I=C.length>0||m>0&&!e.querySelector("[data-ai-overwrite]").checked;u.disabled=I,u.textContent=I?"แก้ตัวเลือกก่อนบันทึก":`ยืนยันบันทึก ${p.length} คะแนน`},N=(s,d,p)=>{w.innerHTML=`<tr><th class="sticky left-0 z-20 min-w-48 border-b bg-gray-50 px-2 py-2 text-left">นักเรียน</th>${s.map(({col:t})=>{const n=_e.map(l=>{const m=te(l)||["derived","override"].includes(l.column_type),$=l.max_score!=null?` · เต็ม ${K(l.max_score)}`:" · ไม่จำกัด";return`<option value="${l.id}" ${Number(l.id)===Number(t.id)?"selected":""} ${m?"disabled":""}>${K(l.assignment_name||"คอลัมน์ไม่มีชื่อ")}${$}${m?" · เลือกไม่ได้":""}</option>`}).join("");return`<th class="min-w-52 border-b bg-gray-50 px-2 py-2 text-left"><select data-ai-review-target="${t.id}" class="w-full min-w-48 rounded-lg border border-violet-200 bg-white px-2 py-1.5 text-xs font-bold text-violet-800" aria-label="เลือกคอลัมน์ปลายทางสำหรับ ${K(t.assignment_name)}">${n}</select></th>`}).join("")}</tr>`,q={selectedColumns:s,selectedStudents:d,baseEntries:p},i.classList.remove("hidden"),b()};e.querySelector("[data-ai-close]").addEventListener("click",o),e.addEventListener("click",s=>{s.target===e&&o()}),e.addEventListener("change",s=>{if(s.target.matches("[data-ai-review-target]")){b();return}if(s.target.matches("[data-ai-overwrite]")){b();return}s.target.matches("[data-ai-colid]")&&L(),s.target.matches("[data-ai-colid], [data-ai-sid]")&&j()}),e.addEventListener("input",s=>{s.target.matches("[data-ai-output], [data-ai-criteria], [data-ai-colmax]")&&j()}),e.querySelector("[data-ai-selectall-cols]").addEventListener("click",()=>{j();const s=[...e.querySelectorAll("[data-ai-colid]:not(:disabled)")],d=s.length>0&&s.every(p=>p.checked);s.forEach(p=>{p.checked=!d}),L()}),e.querySelector("[data-ai-selectall-students]").addEventListener("click",()=>{j();const s=[...e.querySelectorAll("[data-ai-sid]")],d=s.every(p=>p.checked);s.forEach(p=>{p.checked=!d}),e.querySelector("[data-ai-selectall-students]").textContent=d?"เลือกทั้งหมด":"ยกเลิกทั้งหมด"}),L(),e.querySelector("[data-ai-prompt]").addEventListener("click",async()=>{var I;j();const s=[...e.querySelectorAll("[data-ai-sid]:checked")].map(x=>z.find(S=>String(S.id)===x.dataset.aiSid)).filter(Boolean),d=P(),p=e.querySelector("[data-ai-criteria]").value.trim();if(!s.length||!d.length||!p){f("เลือกคอลัมน์ นักเรียน และกรอกเกณฑ์ก่อน","warning");return}const t=d.find(x=>!(x.max>0));if(t){f(`ระบุคะแนนเต็มสำหรับคอลัมน์ "${t.col.assignment_name}" ก่อน`,"warning"),(I=e.querySelector(`[data-ai-colmax="${t.col.id}"]`))==null||I.focus();return}const n=d.map(({col:x,max:S})=>({column_id:String(x.id),name:x.assignment_name,max_score:S})),l=s.map(x=>JSON.stringify({student_code:x.student_code,name:x.full_name})).join(`,
`),m=Object.fromEntries(n.map(x=>[x.column_id,0])),$=JSON.stringify({student_code:"26056",scores:m}),C=`ช่วยประเมินคะแนนงานของวิชา ${(E==null?void 0:E.subject_name)??""} ตามเกณฑ์นี้อย่างเป็นธรรม: ${p}
คอลัมน์ที่ต้องให้คะแนน (column_id ใช้เป็นคีย์ใน scores):
${JSON.stringify(n,null,2)}
รายชื่อนักเรียน:
[${l}]
ตอบกลับเป็น JSON array เท่านั้น รูปแบบ ${$} โดยให้ครบทุกคอลัมน์ที่เลือกสำหรับนักเรียนทุกคน คะแนนแต่ละคอลัมน์ต้องอยู่ระหว่าง 0 ถึงคะแนนเต็มของคอลัมน์นั้น ให้ครอบ JSON ทั้งหมดไว้ใน Markdown code block ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) ห้ามมีข้อความหรือคำอธิบายอยู่นอกกล่อง`;try{await navigator.clipboard.writeText(C),f("คัดลอกคำสั่งแล้ว นำไปให้ AI ประเมิน จากนั้นวางผล JSON ด้านล่าง","success")}catch{f("สร้างคำสั่งแล้ว แต่คัดลอกอัตโนมัติไม่ได้ กรุณาอนุญาต Clipboard","warning")}}),u.addEventListener("click",async()=>{var C,I;if(q){b();const{entries:x,targetColumns:S,selectedStudents:A,overwriteCount:h,hasDuplicateTarget:O,invalidCount:V}=q;if(O||V){f("แก้คอลัมน์ปลายทางและคะแนนที่เกินคะแนนเต็มก่อนบันทึก","warning");return}if(h&&!e.querySelector("[data-ai-overwrite]").checked){f("เลือกยืนยันเขียนทับคะแนนเดิมก่อนบันทึก","warning");return}const ae=S.map(le=>{var ee;return((ee=le.targetCol)==null?void 0:ee.assignment_name)??"ไม่พบคอลัมน์"}).join(", ");if(!confirm(`บันทึก ${x.length} คะแนนให้ ${A.length} คน ลงคอลัมน์ปลายทางเหล่านี้?
${ae}${h?`
จะเขียนทับคะแนนและประวัติเดิม ${h} ช่อง`:""}`))return;const ie=document.getElementById("grade-saving");u.disabled=!0,ie==null||ie.classList.remove("hidden");let he=0;try{for(const ee of x){const xe=We(ee.student.id,ee.col);if(!!!((I=(C=F[ee.student.id])==null?void 0:C[ee.col.id])!=null&&I.score_formula)&&xe!=null&&xe!==""&&Number(xe)===ee.score)continue;const Ge=Number(ee.col.max_score),ne=Number.isFinite(Ge)&&Ge>0?Ge:ee.max;if(!await Lt(a.id,ee.student.id,ee.col.id,ee.score,{max:ne}))throw new Error(`บันทึกคะแนนของ ${ee.student.student_code} ในคอลัมน์ ${ee.col.assignment_name} ไม่สำเร็จ`);he++}S.some(ee=>tn(ee.targetCol))&&(Ee=!0,Ft());const le=x.length-he;f(`บันทึกคะแนนลง ${S.length} คอลัมน์แล้ว ${he} ช่อง${le?` (คะแนนเดิมตรงกัน ${le} ช่อง ไม่ได้เขียนซ้ำ)`:""}`,"success"),o(),Be(y,a)}catch(le){f(`บันทึกได้ ${he}/${x.length} ช่อง: ${fe(le)}`,"error"),u.disabled=!1,he&&Be(y,a)}finally{ie==null||ie.classList.add("hidden")}return}const s=[...e.querySelectorAll("[data-ai-sid]:checked")].map(x=>z.find(S=>String(S.id)===x.dataset.aiSid)).filter(Boolean),d=P(),p=e.querySelector("[data-ai-output]").value.trim();if(!s.length||!d.length||!p){f("เลือกคอลัมน์ นักเรียน และวางผลจาก AI ก่อน","warning");return}const t=d.find(x=>!(x.max>0));if(t){f(`ระบุคะแนนเต็มสำหรับคอลัมน์ "${t.col.assignment_name}" ก่อน`,"warning");return}let n;try{n=JSON.parse(p.replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,""))}catch{f("รูปแบบผลลัพธ์ไม่ใช่ JSON ที่ถูกต้อง","error");return}if(!Array.isArray(n)||n.length!==s.length||n.some(x=>!x||typeof x!="object"||Array.isArray(x))){f(`ผล AI ต้องเป็นรายการนักเรียนให้ครบ ${s.length} คน`,"error");return}const l=new Map(s.map(x=>[String(x.student_code),x])),m=new Set,$=[];for(const x of n){const S=l.get(String(x.student_code));if(!S||m.has(String(S.id))||!x.scores||typeof x.scores!="object"||Array.isArray(x.scores)){f("ตรวจไม่ผ่าน: รหัสนักเรียนต้องอยู่ในรายชื่อที่เลือกและไม่ซ้ำ พร้อมมี scores แยกตามคอลัมน์","error");return}m.add(String(S.id));for(const{col:A,max:h}of d){const O=x.scores[String(A.id)],V=Number(O);if(!((typeof O=="number"||typeof O=="string"&&O.trim()!=="")&&Number.isFinite(V)&&V>=0&&V<=h)){f(`คะแนนของ ${S.student_code} ในคอลัมน์ "${A.assignment_name}" ต้องอยู่ระหว่าง 0-${h}`,"error");return}$.push({student:S,sourceCol:A,sourceMax:h,score:V})}}if(m.size!==s.length){f("ผล AI ต้องมีนักเรียนทุกคนที่เลือก","error");return}N(d,s,$)})}),Bt(),ve(),Te();let yn=null;Rt=Gr(e=>{!_e.some(o=>Number(o.id)===Number(e.columnId))&&Number(e.classId)!==Number(R)||document.getElementById("grade-grid-wrap")&&(clearTimeout(yn),yn=setTimeout(()=>Be(y,a),120))})}catch(R){f("โหลดข้อมูลไม่สำเร็จ: "+fe(R),"error")}}async function Dr(y,a){var U;f("กำลังโหลด...","info");const E=(await Promise.all((a??[]).filter(H=>H.id!==y.id).map(async H=>{const B=await Fe(H.id).catch(()=>[]);return B.length?{...H,cols:B}:null}))).filter(Boolean);if(!E.length){f("ไม่พบห้องอื่นที่มีคอลัมน์คะแนน","info");return}(U=document.getElementById("copy-cols-popup"))==null||U.remove();const G=document.createElement("div");G.id="copy-cols-popup",G.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",G.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
        <div class="text-3xl mb-2">📋</div>
        <h3 class="text-white font-bold text-base">สำเนาคอลัมน์คะแนน</h3>
        <p class="text-indigo-100 text-xs mt-1">เลือกห้องที่ต้องการคัดลอกคอลัมน์จาก</p>
      </div>
      <div class="p-5 space-y-2 max-h-72 overflow-y-auto">
        ${E.map(H=>{var B;return`
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${H.class_name}</p>
            <p class="text-xs text-gray-400">${((B=H.master_subjects)==null?void 0:B.subject_name)??""} · ${H.cols.length} คอลัมน์</p>
          </div>
          <button class="ccp-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            data-src="${H.id}">คัดลอก</button>
        </div>`}).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="ccp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
      </div>
    </div>`,document.body.appendChild(G),G.querySelector("#ccp-close").addEventListener("click",()=>G.remove()),G.querySelectorAll(".ccp-btn").forEach(H=>{H.addEventListener("click",async()=>{var J;const B=E.find(Y=>Y.id===parseInt(H.dataset.src));(J=document.getElementById("ccp-confirm"))==null||J.remove();const oe=document.createElement("div");oe.id="ccp-confirm",oe.className="fixed inset-0 z-[300] flex items-center justify-center p-6",oe.style.background="rgba(0,0,0,0.5)",oe.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">📋</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการ Mirror</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">
          คอลัมน์ของห้องนี้จะถูกทำให้เหมือน<br/>
          <span class="font-semibold text-indigo-700">${B.class_name}</span><br/>
          <span class="text-xs text-red-500">คอลัมน์ที่ต่างออกไปจะถูกลบหรือเพิ่ม/แก้ไข</span>
        </p>
        <div class="flex gap-3">
          <button id="ccp-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccp-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(oe),oe.querySelector("#ccp-conf-no").addEventListener("click",()=>oe.remove()),oe.querySelector("#ccp-conf-yes").addEventListener("click",async()=>{oe.remove(),H.disabled=!0,H.textContent="⏳";try{const Y=await Fe(y.id).catch(()=>[]),pe=Object.fromEntries(B.cols.map(R=>[R.assignment_name,R])),be=Object.fromEntries(Y.map(R=>[R.assignment_name,R]));for(const R of Y)pe[R.assignment_name]||await Nt(R.id).catch(()=>{});for(const R of B.cols)be[R.assignment_name]?await lt(be[R.assignment_name].id,{assignment_type:R.assignment_type,sheet_column:R.sheet_column??"",max_score:R.max_score,assignment_name:R.assignment_name}).catch(()=>{}):await De({class_id:y.id,assignment_name:R.assignment_name,assignment_type:R.assignment_type,sheet_column:R.sheet_column??"",max_score:R.max_score});f(`Mirror จาก ${B.class_name} สำเร็จ ✅`,"success"),G.remove(),Be(window._currentGradeTeacher,y)}catch(Y){f("Mirror ไม่สำเร็จ: "+fe(Y),"error"),H.disabled=!1,H.textContent="คัดลอก"}})})})}async function es(y,a,E){var be;const G=E.filter(R=>R.course_id===y);if(!G.length){f("ยังไม่มีห้องเรียนในคอร์สนี้","warning");return}f("กำลังโหลด...","info");const U=G[0];let H=await Fe(U.id).catch(()=>[]);const B=()=>H.filter(R=>R.assignment_type==="midterm"||R.assignment_type==="กลางภาค"),oe=()=>H.filter(R=>R.assignment_type==="final"||R.assignment_type==="ปลายภาค");(be=document.getElementById("course-cols-modal"))==null||be.remove();const J=document.createElement("div");J.id="course-cols-modal",J.className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4";const Y=R=>`
    <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/60">
      <input type="checkbox" class="ccm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-name="${K(R.assignment_name)}" />
      <span class="flex-1 text-xs text-gray-700 truncate">${R.assignment_name}</span>
      <span class="text-[11px] text-gray-400">/${R.max_score||0}</span>
      <button class="ccm-del text-gray-300 hover:text-red-400 text-lg px-1 rounded hover:bg-red-50 transition" data-name="${K(R.assignment_name)}">🗑</button>
    </div>`,pe=()=>{var _;J.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>
        <div class="px-5 py-4 border-b flex items-start justify-between gap-3 flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ คอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">${a} · sync ${G.length} ห้อง</p>
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
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค <span class="font-normal text-gray-400">(${B().length})</span></h4>
            <div class="space-y-1.5">${B().map(Y).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition" data-type="กลางภาค">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค <span class="font-normal text-gray-400">(${oe().length})</span></h4>
            <div class="space-y-1.5">${oe().map(Y).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition" data-type="ปลายภาค">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`;const R=(g,M)=>{var Q;(Q=document.getElementById("ccm-confirm"))==null||Q.remove();const T=document.createElement("div");T.id="ccm-confirm",T.className="fixed inset-0 z-[300] flex items-center justify-center p-6",T.style.background="rgba(0,0,0,0.5)",T.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">🗑️</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">${g}</p>
        <div class="flex gap-3">
          <button id="ccm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบเลย</button>
        </div>
      </div>`,document.body.appendChild(T),T.querySelector("#ccm-conf-no").addEventListener("click",()=>T.remove()),T.querySelector("#ccm-conf-yes").addEventListener("click",()=>{T.remove(),M()})},ye=async g=>{for(const M of G){const T=await Fe(M.id).catch(()=>[]);for(const Q of g){const v=T.find(re=>re.assignment_name===Q);v&&await Nt(v.id).catch(()=>{})}}H=await Fe(U.id).catch(()=>[]),f(`ลบสำเร็จ — sync ทุก ${G.length} ห้องแล้ว ✅`,"success"),pe()},z=()=>{const g=[...J.querySelectorAll(".ccm-cb:checked")],M=J.querySelector("#ccm-bulk-bar");if(M){M.classList.toggle("hidden",!g.length);const T=M.querySelector("#ccm-bulk-count");T&&(T.textContent=`เลือก ${g.length} รายการ`)}};J.querySelector("#ccm-close").addEventListener("click",()=>J.remove()),J.querySelectorAll(".ccm-cb").forEach(g=>g.addEventListener("change",z)),(_=J.querySelector("#ccm-bulk-del"))==null||_.addEventListener("click",()=>{const M=[...J.querySelectorAll(".ccm-cb:checked")].map(T=>T.dataset.name);R(`ลบ ${M.length} คอลัมน์จากทุกห้อง?<br/><span class="font-semibold text-sm">${M.join(", ")}</span>`,()=>ye(M))}),J.querySelectorAll(".ccm-del").forEach(g=>{g.addEventListener("click",()=>{R(`ลบ <span class="font-semibold">"${g.dataset.name}"</span> จากทุก ${G.length} ห้อง?`,()=>ye([g.dataset.name]))})}),J.querySelectorAll(".ccm-add").forEach(g=>{g.addEventListener("click",()=>{var re,ce;const M=g.dataset.type;(re=document.getElementById("add-col-modal"))==null||re.remove();const T=!!(U!=null&&U.google_sheet_id),Q=M==="ปลายภาค"?"purple":"blue",v=document.createElement("div");v.id="add-col-modal",v.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",v.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${M}</h3>
          <p class="text-xs text-gray-400 mb-4">จะเพิ่มใน <b>ทุก ${G.length} ห้อง</b> ของ ${a}</p>
          <div class="space-y-3">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
              <input id="acol2-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${Q}-400"/></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
                <input id="acol2-max" type="number" min="1" value="20"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${Q}-400"/></div>
              ${T?`<div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
                <input id="acol2-sheet" type="text" placeholder="EH"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${Q}-400"/></div>`:'<input id="acol2-sheet" type="hidden" value=""/>'}
            </div>
            <div id="acol2-msg" class="hidden text-xs text-red-500"></div>
            <div class="flex gap-3 pt-1">
              <button id="acol2-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="acol2-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มทุกห้อง</button>
            </div>
          </div>
        </div>`,document.body.appendChild(v),(ce=v.querySelector("#acol2-sheet"))==null||ce.addEventListener("input",we=>{we.target.value=we.target.value.toUpperCase()}),v.querySelector("#acol2-cancel").addEventListener("click",()=>v.remove()),v.querySelector("#acol2-save").addEventListener("click",async()=>{var Ve;const we=v.querySelector("#acol2-name").value.trim(),He=parseFloat(v.querySelector("#acol2-max").value)||20,dt=(((Ve=v.querySelector("#acol2-sheet"))==null?void 0:Ve.value)??"").trim().toUpperCase()||null,$e=v.querySelector("#acol2-msg");if(!we){$e.textContent="กรุณาระบุชื่องาน",$e.classList.remove("hidden");return}const Ie=v.querySelector("#acol2-save");Ie.disabled=!0,Ie.textContent="⏳ กำลังเพิ่ม...";try{for(const ze of G)(await Fe(ze.id).catch(()=>[])).some(bt=>bt.assignment_name===we)||await De({class_id:ze.id,assignment_name:we,assignment_type:M,sheet_column:dt??"",max_score:He});v.remove(),f(`เพิ่ม "${we}" ใน ${G.length} ห้องแล้ว ✅`,"success"),H=await Fe(U.id).catch(()=>[]),pe()}catch(ze){$e.textContent="เกิดข้อผิดพลาด: "+fe(ze),$e.classList.remove("hidden"),Ie.disabled=!1,Ie.textContent="เพิ่มทุกห้อง"}})})})};document.body.appendChild(J),pe()}function jn(y,a,E){var oe,J;(oe=document.getElementById("add-col-modal"))==null||oe.remove();const G=a==="final"?"ปลายภาค":"กลางภาค",U=a==="final"?"purple":"blue",H=!!(y!=null&&y.google_sheet_id),B=document.createElement("div");B.id="add-col-modal",B.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",B.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${G}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${G}</b></p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${U}-400"/>
        <button type="button" id="acol-quick-adj" class="mt-1 text-xs text-teal-600 hover:text-teal-800 underline">⚡ ปรับคะแนนเก็บ (คะแนนเต็มกำหนดเอง)</button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${U}-400"/>
        </div>
        ${H?`
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${U}-400"/>
        </div>`:'<input id="acol-sheet" type="hidden" value=""/>'}
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`,document.body.appendChild(B),(J=B.querySelector("#acol-sheet"))==null||J.addEventListener("input",Y=>{Y.target.value=Y.target.value.toUpperCase()}),B.querySelector("#acol-quick-adj").addEventListener("click",()=>{B.querySelector("#acol-name").value=`ปรับคะแนนเก็บ (${G})`;const Y=B.querySelector("#acol-max");Y.focus(),Y.select()}),B.querySelector("#acol-cancel").addEventListener("click",()=>B.remove()),B.querySelector("#acol-save").addEventListener("click",async()=>{var z;const Y=B.querySelector("#acol-name").value.trim(),pe=parseFloat(B.querySelector("#acol-max").value)||20,be=(((z=B.querySelector("#acol-sheet"))==null?void 0:z.value)??"").trim().toUpperCase()||null,R=B.querySelector("#acol-msg");if(!Y){R.textContent="กรุณาระบุชื่องาน",R.classList.remove("hidden");return}const ye=B.querySelector("#acol-save");ye.disabled=!0,ye.textContent="กำลังเพิ่ม...";try{await De({class_id:y.id,assignment_name:Y,max_score:pe,sheet_column:be??"",assignment_type:a}),B.remove(),f(`เพิ่มคอลัมน์ "${Y}" แล้ว`,"success"),E()}catch(_){R.textContent="เกิดข้อผิดพลาด: "+fe(_),R.classList.remove("hidden"),ye.disabled=!1,ye.textContent="เพิ่มคอลัมน์"}})}async function Gt(y){if(rn("requests"),sn("คำร้องนักเรียน"),!y){et('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">🔔</p><p>กรุณาเข้าสู่ระบบ</p></div>');return}et(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const a=await Sr(y.id).catch(()=>[]),E=[{key:"pending",label:"รอดำเนินการ",cls:"text-amber-600"},{key:"approved",label:"อนุมัติแล้ว",cls:"text-emerald-600"},{key:"attended",label:"มาสอบแล้ว",cls:"text-blue-600"},{key:"absent",label:"ขาดสอบ/ผิดนัด",cls:"text-red-600"},{key:"rejected",label:"ปฏิเสธ",cls:"text-red-500"},{key:"all",label:"ทั้งหมด",cls:"text-gray-600"}];let G="pending",U=null,H=null;const B=(_,g)=>g==="all"?!0:g==="attended"?_.status==="approved"&&_.exam_attended===!0:g==="absent"?_.status==="approved"&&_.exam_attended===!1:_.status===g,oe=_=>a.filter(g=>B(g,_)).length,J=_=>{const g=new Map;return _.forEach(M=>{M.request_type&&g.set(M.request_type,(g.get(M.request_type)||0)+1)}),[...g.entries()].map(([M,T])=>({type:M,count:T})).sort((M,T)=>T.count-M.count)},Y=_=>{const g=new Map;return _.forEach(M=>{const T=M.class_score_columns;T&&(g.has(T.id)||g.set(T.id,{id:T.id,name:T.assignment_name,count:0}),g.get(T.id).count++)}),[...g.values()].sort((M,T)=>T.count-M.count)},pe=_=>{if(!_)return"—";const g=new Date(_);return`${g.getDate()}/${g.getMonth()+1}/${g.getFullYear()+543}`},be=_=>{var we;const g=_.students,M=_.classes,T=_.class_score_columns,Q=_.status==="approved"&&_.exam_attended==null,v=_.status==="approved"&&_.exam_attended===!0,re=_.status==="pending"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">⏳ รอดำเนินการ</span>':_.status==="approved"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ อนุมัติ</span>':'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">✕ ปฏิเสธ</span>',ce=_.exam_attended===!0?`<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">📝 มาสอบแล้ว${_.exam_score!=null?" · <b>"+_.exam_score+"</b> คะแนน":" (ยังไม่ได้ใส่คะแนน)"}</span>`:_.exam_attended===!1?'<span class="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">❌ ขาดสอบ/ผิดนัด</span>':"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4" id="req-card-${_.id}">
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
        ${re}
      </div>
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-600 mb-3">
        <div class="flex gap-2"><span class="text-gray-400 w-16">วิชา</span><span class="font-medium text-gray-800">${((we=M==null?void 0:M.master_subjects)==null?void 0:we.subject_name)??"—"} (${(M==null?void 0:M.class_name)??""})</span></div>
        <div class="flex gap-2"><span class="text-gray-400 w-16">ประเภท</span><span>${_.request_type}</span></div>
        ${T?`<div class="flex gap-2"><span class="text-gray-400 w-16">หัวข้อ</span><span>${T.assignment_name} (เต็ม ${T.max_score})</span></div>`:""}
        <div class="flex gap-2"><span class="text-gray-400 w-16">วันที่</span><span>${pe(_.requested_date)}${_.requested_period_no?" · คาบ "+_.requested_period_no:""}</span></div>
        ${_.reason?`<div class="flex gap-2"><span class="text-gray-400 w-16">เหตุผล</span><span>${_.reason}</span></div>`:""}
        ${_.teacher_comment?`<div class="flex gap-2"><span class="text-gray-400 w-16">หมายเหตุ</span><span class="${_.status==="rejected"?"text-red-600":"text-emerald-600"} font-medium">${_.teacher_comment}</span></div>`:""}
        ${ce?`<div class="mt-1">${ce}</div>`:""}
      </div>
      <!-- Actions -->
      ${_.status==="pending"?`
      <div class="flex gap-2">
        <button onclick="window._approveRequest(${_.id})"
          class="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition">
          ✅ อนุมัติ
        </button>
        <button onclick="window._rejectRequest(${_.id})"
          class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition">
          ✕ ปฏิเสธ
        </button>
      </div>`:""}
      ${Q?`
      <div class="border-t border-gray-100 pt-3">
        <p class="text-xs text-gray-500 mb-2 font-medium">📋 บันทึกผลการสอบ</p>
        <div class="flex gap-2">
          <button onclick="window._markAttended(${_.id})"
            class="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
            📝 มาสอบแล้ว + ใส่คะแนน
          </button>
          <button onclick="window._markAbsent(${_.id}, ${(g==null?void 0:g.id)??"null"})"
            class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 text-xs font-semibold hover:bg-red-100 transition">
            ❌ ขาดสอบ/ผิดนัด
          </button>
        </div>
      </div>`:""}
      ${v?`
      <div class="border-t border-gray-100 pt-3 flex items-center justify-between">
        <p class="text-xs text-blue-600 font-medium">📝 มาสอบแล้ว${_.exam_score!=null?" · คะแนน "+_.exam_score:""}</p>
        <button onclick="window._markAttended(${_.id})"
          class="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition font-medium">
          ✏️ แก้ไขคะแนน
        </button>
      </div>`:""}
    </div>`},R=()=>{const _=a.filter(v=>B(v,G)),g=J(_);U&&!g.some(v=>v.type===U)&&(U=null);const M=U?_.filter(v=>v.request_type===U):_,T=Y(M);H&&!T.some(v=>v.id===H)&&(H=null);const Q=H?M.filter(v=>{var re;return((re=v.class_score_columns)==null?void 0:re.id)===H}):M;document.getElementById("req-type-filter").innerHTML=g.length>1?`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${U?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-purple-600 text-white border-purple-600"}"
        data-type="">ทุกประเภทการสอบ</button>
      ${g.map(v=>`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${U===v.type?"bg-purple-600 text-white border-purple-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-type="${v.type}">${v.type} (${v.count})</button>`).join("")}`:"",document.querySelectorAll(".req-type-tab").forEach(v=>{v.addEventListener("click",()=>{U=v.dataset.type||null,R()})}),document.getElementById("req-col-filter").innerHTML=T.length>1?`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${H?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-indigo-600 text-white border-indigo-600"}"
        data-col="">ทุกช่องคะแนน</button>
      ${T.map(v=>`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${H===v.id?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-col="${v.id}">${v.name} (${v.count})</button>`).join("")}`:"",document.querySelectorAll(".req-col-tab").forEach(v=>{v.addEventListener("click",()=>{H=v.dataset.col?Number(v.dataset.col):null,R()})}),document.getElementById("req-content").innerHTML=Q.length?`<div class="space-y-3">${Q.map(be).join("")}</div>`:`<div class="text-center py-16 text-gray-300">
          <p class="text-4xl mb-3">📭</p>
          <p class="text-sm">ไม่มีคำร้อง${G!=="all"?"ในสถานะนี้":""}${U?"ในประเภทนี้":""}${H?"ในช่องคะแนนนี้":""}</p>
        </div>`,document.querySelectorAll(".req-tab").forEach(v=>{const re=v.dataset.filter===G;v.className=`req-tab flex-1 py-2 text-xs font-medium rounded-lg transition
        ${re?"bg-white shadow text-indigo-700":"text-gray-500 hover:text-gray-700"}`})};et(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs text-gray-400">${a.length} รายการ</span>
    </div>
    <!-- Filter tabs -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-100 rounded-xl p-1 mb-4">
      ${E.map(_=>`
      <button class="req-tab flex-1 py-2 text-xs font-medium rounded-lg transition text-gray-500 hover:text-gray-700"
        data-filter="${_.key}">
        ${_.label}${oe(_.key)>0||_.key==="all"?` (${oe(_.key)})`:""}
      </button>`).join("")}
    </div>
    <!-- Filter by ประเภทการสอบ -->
    <div id="req-type-filter" class="flex flex-wrap gap-1.5 mb-3"></div>
    <!-- Filter by ช่องคะแนน -->
    <div id="req-col-filter" class="flex flex-wrap gap-1.5 mb-4"></div>
    <div id="req-content"></div>
  </div>`),document.querySelectorAll(".req-tab").forEach(_=>{_.addEventListener("click",()=>{G=_.dataset.filter,R()})}),R();const ye=({title:_,body:g,confirmLabel:M,confirmCls:T="bg-emerald-600 hover:bg-emerald-700",onConfirm:Q})=>{var re;(re=document.getElementById("req-modal"))==null||re.remove();const v=document.createElement("div");v.id="req-modal",v.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",v.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
        <div class="px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">${_}</h3>
        </div>
        <div class="px-5 py-4">${g}</div>
        <div class="px-5 pb-5 flex gap-2">
          <button id="req-modal-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="req-modal-confirm"
            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold ${T}">
            ${M}
          </button>
        </div>
      </div>`,document.body.appendChild(v),v.querySelector("#req-modal-cancel").addEventListener("click",()=>v.remove()),v.addEventListener("click",ce=>{ce.target===v&&v.remove()}),v.querySelector("#req-modal-confirm").addEventListener("click",()=>{Q(v)})},z=async(_,g,M)=>{var Q,v,re;const T=(Q=_==null?void 0:_.students)==null?void 0:Q.profile_id;if(T)try{const ce=((re=(v=_==null?void 0:_.classes)==null?void 0:v.master_subjects)==null?void 0:re.subject_name)??"วิชา";await An.functions.invoke("send-push",{body:{title:`📋 คำร้องขอสอบ: ${g}`,body:`${ce}${M?" — "+M:""}`,url:"student.html",profileIds:[T]}})}catch{}};window._approveRequest=_=>{ye({title:"✅ อนุมัติคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">หมายเหตุถึงนักเรียน <span class="text-gray-400">(ไม่บังคับ)</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="เช่น นัดสอบวันอังคาร คาบ 3 ห้องครู..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"></textarea>`,confirmLabel:"ยืนยันอนุมัติ",onConfirm:async g=>{const M=g.querySelector("#req-modal-comment").value.trim()||null;g.remove();try{await Sn(_,{status:"approved",teacher_comment:M}),f("อนุมัติคำร้องแล้ว ✅","success");const T=a.find(Q=>Q.id===_);T&&z(T,"อนุมัติแล้ว ✅",M),Gt(y)}catch(T){f("ไม่สำเร็จ: "+fe(T),"error")}}})},window._rejectRequest=_=>{ye({title:"✕ ปฏิเสธคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">เหตุผลที่ปฏิเสธ <span class="text-red-500">*</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="กรุณาระบุเหตุผล..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"></textarea>
             <p class="text-xs text-red-400 mt-1">บังคับกรอกทุกครั้งที่ปฏิเสธ</p>`,confirmLabel:"ยืนยันปฏิเสธ",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async g=>{const M=g.querySelector("#req-modal-comment").value.trim();if(!M){f("กรุณาระบุเหตุผลก่อนปฏิเสธ","warning");return}g.remove();try{await Sn(_,{status:"rejected",teacher_comment:M}),f("บันทึกการปฏิเสธแล้ว","success");const T=a.find(Q=>Q.id===_);T&&z(T,"ถูกปฏิเสธ ✕",M),Gt(y)}catch(T){f("ไม่สำเร็จ: "+fe(T),"error")}}})},window._markAttended=async _=>{var tt,bt,Ot;const g=a.find(de=>Number(de.id)===Number(_)),M=(tt=g==null?void 0:g.students)==null?void 0:tt.id,T=(bt=g==null?void 0:g.classes)==null?void 0:bt.id,Q=g==null?void 0:g.exam_score,v=Q!=null;if(!M||!T){f("ไม่พบข้อมูลนักเรียนหรือห้องเรียนของคำร้องนี้","error");return}const re=String((g==null?void 0:g.request_type)??"").includes("ปรับคะแนน");let ce;try{ce=(await Fe(T)).filter(de=>["regular","override"].includes(de.column_type??"regular"))}catch(de){f("โหลดคอลัมน์คะแนนไม่สำเร็จ: "+fe(de),"error");return}if(!ce.length){f("วิชานี้ยังไม่มีคอลัมน์คะแนนที่สามารถบันทึกได้","warning");return}const we=Number((Ot=g==null?void 0:g.class_score_columns)==null?void 0:Ot.id);if(!re){const de=ce.find(qe=>Number(qe.id)===we);de&&(ce=[de])}const He=ce.find(de=>Number(de.id)===we)??ce[0],dt=ce.map(de=>`
      <option value="${de.id}" data-max="${Number(de.max_score??100)}"
        ${Number(de.id)===Number(He.id)?"selected":""}>
        ${de.column_type==="override"?"🔄 ปรับคะแนน — ":""}${K(de.assignment_name)} (เต็ม ${Number(de.max_score??100)})
      </option>`).join("");ye({title:v?"✏️ แก้ไขคะแนน":"📝 บันทึกผลการสอบ — มาสอบ",body:`<label class="block text-sm text-gray-600 mb-1.5">บันทึกลงคอลัมน์ <span class="text-red-500">*</span></label>
             <select id="req-modal-column" ${re?"":"disabled"}
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4">
               ${dt}
             </select>
             ${re?'<p class="text-xs text-blue-600 -mt-2 mb-4">เลือกคอลัมน์ที่จะรับคะแนนสอบปรับคะแนนครั้งนี้</p>':""}
             <label class="block text-sm text-gray-600 mb-1.5">คะแนนที่สอบได้ <span class="text-red-500">*</span> <span id="req-modal-max-label" class="text-gray-400">(เต็ม ${Number(He.max_score??100)})</span></label>
             <input id="req-modal-score" type="number" min="0" max="${Number(He.max_score??100)}" step="0.5"
               value="${v?Q:""}"
               placeholder="0 – ${Number(He.max_score??100)}"
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300" />`,confirmLabel:v?"บันทึกการแก้ไข":"บันทึกคะแนน",confirmCls:"bg-blue-600 hover:bg-blue-700",onConfirm:async de=>{const qe=de.querySelector("#req-modal-column"),Pe=Number(qe.value),Xe=qe.options[qe.selectedIndex],gt=Number((Xe==null?void 0:Xe.dataset.max)??100),jt=de.querySelector("#req-modal-score").value,nt=parseFloat(jt);if(isNaN(nt)||nt<0||nt>gt){f(`คะแนนต้องอยู่ระหว่าง 0 – ${gt}`,"warning");return}de.remove();try{const rt=await En(_,{exam_attended:!0,exam_score:nt,studentId:M,assignmentId:Pe});Rr({classId:T,columnId:Pe,studentId:M,score:nt}),f(rt!=null&&rt.linkedColumnId?"บันทึกคะแนนปรับและอัปเดตคอลัมน์หลักแล้ว ✅":v?"แก้ไขคะแนนแล้ว ✅":"บันทึกผลสอบและคะแนนแล้ว ✅","success"),Gt(y)}catch(rt){f("ไม่สำเร็จ: "+fe(rt),"error")}}});const $e=document.getElementById("req-modal"),Ie=$e==null?void 0:$e.querySelector("#req-modal-column"),Ve=$e==null?void 0:$e.querySelector("#req-modal-score"),ze=$e==null?void 0:$e.querySelector("#req-modal-max-label");Ie==null||Ie.addEventListener("change",()=>{const de=Ie.options[Ie.selectedIndex],qe=Number((de==null?void 0:de.dataset.max)??100);Ve.max=String(qe),Ve.placeholder=`0 – ${qe}`,ze.textContent=`(เต็ม ${qe})`,Ve.value!==""&&Number(Ve.value)>qe&&(Ve.value="")})},window._markAbsent=(_,g)=>{const M=a.filter(T=>{var Q;return((Q=T.students)==null?void 0:Q.id)===g&&T.exam_attended===!1}).length;ye({title:"❌ ขาดสอบ / ผิดนัด",body:`<p class="text-sm text-gray-600 mb-2">ยืนยันว่านักเรียนไม่มาสอบตามนัด?</p>
             ${M>=1?`<div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                    ⚠️ นักเรียนผิดนัดมาแล้ว <b>${M}</b> ครั้ง
                    ${M+1>=2?"<br/>หากยืนยัน จะครบ 2 ครั้ง — <b>นักเรียนจะไม่สามารถยื่นคำร้องได้อีก</b>":""}
                  </div>`:""}`,confirmLabel:"ยืนยัน — ขาดสอบ/ผิดนัด",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async T=>{T.remove();try{await En(_,{exam_attended:!1,exam_score:null}),f("บันทึกว่าขาดสอบ/ผิดนัดแล้ว","success"),Gt(y)}catch(Q){f("ไม่สำเร็จ: "+fe(Q),"error")}}})}}const cs=Object.freeze(Object.defineProperty({__proto__:null,_openCourseColsModal:es,renderGrades:Gn,renderGradesGrid:Be,renderRequests:Gt},Symbol.toStringTag,{value:"Module"}));export{es as _,Be as a,Gt as b,Rr as p,Gn as r,cs as t};
