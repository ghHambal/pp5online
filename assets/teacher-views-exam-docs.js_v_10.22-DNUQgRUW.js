import{getMyClasses as Z,getSystemConfig as V,getTeachers as Q,getClassStudents as ee}from"./api-1xsyVspL.js";import{a as M}from"./ui-Dh03k4iX.js";import{o as te}from"./storage-D6nkcVz6.js";import{setActiveNav as ae,setTitle as ne,setContent as P,_htmlEsc as a,SELECT_CLS as N,INPUT_CLS as u}from"./teacher-views-utils-B2Iz3UWp.js";import"./supabase-BV-W2lsh.js";const q="pp5_exam_docs_draft_v1",F="pp5_exam_docs_pending_class_id",se="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",oe="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",k=27,y=k*2,W=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],j={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)"}},$={classId:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:""},J=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let s={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...$},loadingStudents:!1},L=[];const le=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},ie=()=>{try{return JSON.parse(localStorage.getItem(q)||"{}")||{}}catch{return{}}},S=()=>{localStorage.setItem(q,JSON.stringify(s.form))},re=()=>{let e="";try{e=sessionStorage.getItem(F)||"",sessionStorage.removeItem(F)}catch{}const n=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,n?String(n):""},O=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},K=e=>[...e||[]].sort((n,t)=>String(n.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),de=e=>{if(!e)return"";const n=new Date(`${e}T00:00:00`);return Number.isNaN(n.getTime())?"":`${n.getDate()} เดือน ${W[n.getMonth()]} พ.ศ. ${n.getFullYear()+543}`},ce=e=>{if(!e)return{day:"",month:"",year:""};const n=new Date(`${e}T00:00:00`);return Number.isNaN(n.getTime())?{day:"",month:"",year:""}:{day:String(n.getDate()),month:W[n.getMonth()],year:String(n.getFullYear()+543)}},me=e=>{const n=e.startTime||"",t=e.endTime||"";return n&&t?`${n} - ${t}`:n||t||""},R=(e,n)=>e?n.key==="th"?`${e} น.`:e:"",pe=e=>{const n=String(e||"").trim();if(!n)return{room:"",name:""};const t=n.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[o,...i]=n.split(/\s+/);return{room:o,name:i.join(" ").trim()}},xe=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),U=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),G=(e,n,t,o=t.loading,i=0)=>{const l=e||[],r=l.map((x,d)=>`
    <tr>
      <td>${n+d}</td>
      <td>${a(x.student_code||"")}</td>
      <td class="nm">${a(x.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),c=Array.from({length:Math.max(0,i-l.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return r||c?r+c:`<tr><td colspan="4" class="empty-students">${a(o)}</td></tr>`},ue=(e,n,t,o,i,l)=>{const r=e.slice(n*y,(n+1)*y),c=r.slice(0,k),x=r.slice(k,y),d=n*y+1,v=d+k;return`
    <div class="exam-doc-paper ${l} sign-list ${n>0?"exam-doc-page-break":""}">
      ${D(t.signListTitle)}
      ${A(t,o,i)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${a(t.studentCode)}</th>
                <th>${a(t.studentName)}</th>
                <th style="width:80px;">${a(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${G(c,d,t)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${a(t.studentCode)}</th>
                <th>${a(t.studentName)}</th>
                <th style="width:80px;">${a(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${G(x,v,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${I(t)}
    </div>`},I=(e,n)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${a(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>1. ...........................................................................................</div>
      </div>
      <div class="examiner-signature">
        <div>2. ...........................................................................................</div>
      </div>
    </div>
  </div>`,D=e=>`
  <div class="header">
    <img src="${se}" alt="">
    <h2>${a(e)}</h2>
    <img src="${oe}" alt="">
  </div>`,A=(e,n,t)=>`
  <div class="infoG">
    <div class="info1">
      ${a(e.examType)}: <span class="textColor">${a(t.examType||"")}</span>
      ${a(e.term)}: <span class="textColor">${a(t.semester||"")}</span>
      ${a(e.year)}: <span class="textColor">${a(t.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${a(e.subject)}: <span class="textColor">${a(n.subjectName||"")}</span>
      ${a(e.subjectCode)}: <span class="textColor">${a(n.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${a(e.examDate)}: <span class="textColor">${a(de(t.examDate))}</span>
      ${a(e.examTime)}: <span class="textColor">${a(me(t))}</span>
    </div>
    <div class="info4">
      ${a(e.teacher)}: <span class="textColor">${a(n.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${a(e.classLevel)}: <span class="textColor">${a(n.className||"")}</span>
    </div>
  </div>`,Y=(e="all")=>{var C,h;const n=s.form,t=j[n.lang]||j.th,o=s.selectedClass||{},i=O(o),l=K(s.students),r=l.length,c=ce(n.examDate),x=(C=s.teacher)!=null&&C.phone?` (${s.teacher.phone})`:"",d={className:o.class_name||"",subjectName:i.subject_name||"",subjectCode:i.subject_code||"",teacherName:(((h=s.teacher)==null?void 0:h.full_name)||"")+x},v=Math.max(1,Math.ceil(l.length/y)),g=t.dir==="rtl"?"rtl":"ltr",b=e==="all"||e==="portrait",p=e==="all"||e==="envelope",f=e==="envelope"?" envelope-only":e==="portrait"?" portrait-only":"",T=n.examAmount||String(r),m=pe(d.className);return`
    <style id="exam-doc-print-style">
      @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&family=Amiri:wght@400;700&display=swap');
      
      @page {
        size: A4 portrait;
        margin: 0;
      }

      @page landscape {
        size: A4 landscape;
        margin: 0;
      }

      #exam-doc-print-area {
        --exam-font: ${t.font};
        width: auto;
        margin: 0 auto;
      }

      #exam-doc-print-area.envelope-only { width: 297mm; }
      #exam-doc-print-area.portrait-only { width: 210mm; }

      .exam-doc-paper {
        font-family: var(--exam-font), 'Sarabun', sans-serif;
        font-size: 11pt;
        background: #fff;
        color: #111;
        box-sizing: border-box;
        width: 210mm;
        height: 297mm;
        margin: 0 auto 16px;
        padding: 10mm;
        box-shadow: 0 12px 30px rgba(15, 23, 42, .12);
        position: relative;
        overflow: hidden;
      }

      .exam-doc-paper.rtl {
        direction: rtl;
        text-align: right;
      }

      .exam-doc-paper.landscape {
        page: landscape;
        width: 297mm;
        height: 210mm;
        padding: 19mm 15mm 11mm 17mm;
        overflow: visible;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-bottom: 10px;
      }

      .header img {
        width: 60px;
      }

      .header h2 {
        font-size: 17pt;
        font-weight: 700;
        margin: 0;
      }

      .infoG {
        font-size: 11pt;
      }

      .infoG div {
        margin-bottom: 6px;
      }

      .info1,
      .info2,
      .info3,
      .info4,
      .info5,
      .infoNP1,
      .infoNP2,
      .infoNP3,
      .infoNP4,
      .infoNP5 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
      }

      .infoNP1,
      .infoNP2,
      .infoNP3,
      .infoNP4,
      .infoNP5 {
        margin-top: 50px;
      }

      .textColor {
        color: rgb(0, 33, 166);
        font-weight: bold;
        border-bottom: 2px dotted black;
        padding-bottom: 2px;
        flex-grow: 1;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
      }

      th,
      td {
        border: 1px solid black;
        padding: 3px;
        text-align: center;
        font-size: 11pt;
        line-height: 1.08;
      }

      .nm {
        text-align: left;
      }

      .column-container {
        display: flex;
        justify-content: space-between;
      }

      .column {
        width: 49%;
      }

      .examiner-signature {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }

      .exam-doc-paper.landscape .headerL {
        font-size: 40pt;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 1px;
      }

      .exam-doc-paper.landscape .infoNP {
        font-size: 32pt;
        line-height: 1;
        width: 100%;
        align-items: center;
        gap: 15px;
      }

      .exam-doc-paper.landscape .infoNP div {
        justify-content: center;
        gap: 5px;
        margin-bottom: 5px;
      }

      .exam-doc-paper.landscape .infoNP4 {
        flex-wrap: nowrap;
        gap: 7px;
        font-size: 30pt;
        white-space: nowrap;
      }

      .exam-doc-paper.landscape .exam-envelope-class {
        flex-grow: 0;
        flex-basis: 50mm;
        max-width: 50mm;
        min-height: 18mm;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 1;
        padding-bottom: 1px;
      }

      .exam-envelope-class-room {
        display: block;
        font-size: 32pt;
        font-weight: 700;
        line-height: .9;
      }

      .exam-envelope-class-name {
        display: block;
        max-width: 100%;
        margin-top: 2px;
        font-size: 17pt;
        font-weight: 700;
        line-height: .95;
        white-space: nowrap;
      }

      .exam-doc-paper.landscape .infoNP4 .textColor:not(.exam-envelope-class) {
        flex-grow: 0;
        min-width: 16mm;
        padding-left: 4px;
        padding-right: 4px;
      }

      @media print {
        @page {
          size: A4 portrait;
          margin: 0;
        }

        @page landscape {
          size: A4 landscape;
          margin: 0;
        }

        body * { visibility: hidden !important; }
        #exam-doc-print-area, #exam-doc-print-area * { visibility: visible !important; }
        #exam-doc-print-area {
          position: static;
          width: auto;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          width: auto;
          height: auto;
          margin: 0 !important;
          overflow: visible;
          font-size: 11pt;
          background: #fff !important;
        }

        .exam-doc-paper {
          margin: 0 !important;
          box-shadow: none !important;
          break-after: page;
          page-break-after: always;
        }

        .landscape,
        .exam-doc-paper.landscape {
          page: landscape;
          break-before: page;
          page-break-before: always;
        }

        .exam-doc-paper:last-child {
          break-after: auto;
          page-break-after: auto;
        }
      }
    </style>
    <div id="exam-doc-print-area" class="${f.trim()}">
    ${b?`
    ${Array.from({length:v},(z,X)=>ue(l,X,t,d,n,g)).join("")}

    <div class="exam-doc-paper ${g} exam-doc-page-break">
      ${D(t.examCoverTitle)}
      ${A(t,d,n)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${a(t.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${r}</span> ${a(t.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${a(t.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${a(t.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${a(t.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${a(t.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${a(t.no)}</th>
            <th>${a(t.studentCode)}</th>
            <th>${a(t.absentName)}</th>
            <th>${a(t.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${U(15)}
        </tbody>
      </table>
      ${I(t)}
    </div>

    <div class="exam-doc-paper ${g} exam-doc-page-break">
      ${D(t.absentTitle)}
      ${A(t,d,n)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${a(t.no)}</th>
            <th>${a(t.studentCode)}</th>
            <th>${a(t.absentName)}</th>
            <th>${a(t.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${U(15)}
        </tbody>
      </table>
      ${I(t)}
    </div>
    `:""}

    ${p?`
    <div class="exam-doc-paper ${g} landscape ${b?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${a(t.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${a(t.envelopeSubject)} <span class="textColor">${a(d.subjectName)}</span> ${a(t.subjectCode)} <span class="textColor">${a(d.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${a(t.envelopeDate)} <span class="textColor">${a(c.day)}</span> ${a(t.envelopeMonth)} <span class="textColor">${a(c.month)}</span> ${a(t.envelopeYear)} <span class="textColor">${a(c.year)}</span>
        </div>
        <div class="infoNP3">
          ${a(t.envelopeTime)} <span class="textColor">${a(R(n.startTime,t))}</span> ${a(t.envelopeTo)} <span class="textColor">${a(R(n.endTime,t))}</span>
        </div>
        <div class="infoNP4">
          ${a(t.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${a(m.room)}</span>${m.name?`<span class="exam-envelope-class-name">${a(m.name)}</span>`:""}</span> ${a(t.envelopeStudents)} <span class="textColor">${r}</span> ${a(t.studentUnit)} ${a(t.examAmount)} <span class="textColor">${a(T)}</span> ${a(t.examUnit)}
        </div>
        <div class="infoNP5">
          ${a(t.envelopeTeacher)} <span class="textColor">${a(d.teacherName)}</span>
        </div>
      </div>
    </div>
    `:""}
    </div>`},ge=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${Y("all")}
</body>
</html>`;te(e,{autoprint:!0})},ve=()=>{const e=s.selectedClass,n=O(e);return e?`${n.subject_code||"-"} · ${n.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function be(){L.forEach(e=>{try{e()}catch{}}),L=[]}function H(e,n){const t=document.getElementById(e),o=document.getElementById(`${e}-list`);if(!t||!o)return;const i=s.teachers||[],l=()=>{o.classList.add("hidden")},r=p=>{t.value=p.full_name||"",s.form[n]=t.value,S(),_(),l()},c=()=>{const p=t.value.trim(),f=p.toLowerCase(),T=i.filter(m=>!p||xe(m).includes(f)).slice(0,10);if(!i.length){o.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!T.length){o.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}o.innerHTML=T.map(m=>`
      <button type="button" data-id="${m.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${m.image_url?`<img src="${m.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${a((m.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${a(m.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${a(m.teacher_code||"—")}${m.dept?` · ${a(m.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),o.querySelectorAll(".exam-teacher-option").forEach(m=>{m.addEventListener("mousedown",C=>{C.preventDefault();const h=i.find(z=>String(z.id)===String(m.dataset.id));h&&r(h)})})},x=()=>{c(),o.classList.remove("hidden")},d=()=>{s.form[n]=t.value,S(),_(),x()},v=()=>x(),g=p=>{if(p.key==="Escape"&&l(),p.key==="Enter"){const f=o.querySelector(".exam-teacher-option");f&&!o.classList.contains("hidden")&&(p.preventDefault(),f.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},b=p=>{!t.contains(p.target)&&!o.contains(p.target)&&l()};t.addEventListener("input",d),t.addEventListener("focus",v),t.addEventListener("keydown",g),document.addEventListener("mousedown",b,!0),L.push(()=>{t.removeEventListener("input",d),t.removeEventListener("focus",v),t.removeEventListener("keydown",g),document.removeEventListener("mousedown",b,!0)})}function E(){const e=s.form,n=s.classes.map(t=>{const o=O(t),i=`${o.subject_code||"-"} · ${o.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${a(i)}</option>`}).join("");P(`
    <div class="animate-fade space-y-5">
      <style>
        .exam-doc-control-card { border-radius: 16px; border: 1px solid #e5e7eb; background: #fff; box-shadow: 0 8px 22px rgba(15, 23, 42, .06); }
        .exam-doc-preview-wrap { overflow-x: auto; padding: 14px; border-radius: 16px; background: #f8fafc; border: 1px solid #e5e7eb; }
        .exam-teacher-autocomplete { position: relative; }
        .exam-teacher-results { position: absolute; z-index: 40; left: 0; right: 0; top: calc(100% + 4px); max-height: 240px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; box-shadow: 0 18px 32px rgba(15, 23, 42, .14); }
        @media print { .exam-doc-screen-only { display: none !important; } }
      </style>
      <section class="exam-doc-screen-only exam-doc-control-card p-5">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
          <div>
            <h2 class="text-lg font-extrabold text-gray-800">เอกสารช่วงสอบ</h2>
            <p class="text-xs text-gray-400 mt-1">สร้างใบลงชื่อสอบ ใบปะหน้าข้อสอบ ใบแจ้งขาดสอบ และใบปะหน้าซองจากรายชื่อนักเรียนจริง</p>
          </div>
          <div class="flex gap-2 flex-wrap">
            <button id="exam-doc-refresh" class="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">รีเฟรชรายชื่อ</button>
            <button id="exam-doc-print" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 shadow-sm transition">พิมพ์ / บันทึก PDF</button>
          </div>
        </div>

        <div class="grid gap-4 lg:grid-cols-12">
          <label class="lg:col-span-5 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รายวิชา / ห้องเรียน</span>
            <select id="exam-class-id" class="${N}">
              <option value="">เลือกห้องเรียน</option>
              ${n}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${N}">
              ${Object.values(j).map(t=>`<option value="${t.key}" ${e.lang===t.key?"selected":""}>${a(t.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <select id="exam-type" class="${N}">
              ${J.map(t=>`
                <option value="${a(t)}" ${e.examType===t?"selected":""}>${a(t)}</option>
              `).join("")}
            </select>
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${u}" value="${a(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${u}" value="${a(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${u}" value="${a(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${u}" value="${a(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${u}" value="${a(e.endTime)}">
            </label>
          </div>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${u}" value="${a(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${u}" value="${a(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${u}" value="${a(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${u}" value="${a(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${u}" value="${a(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${u}" value="${a(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${a(ve())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${s.students.length} คน</span>
          ${s.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${Y()}</div>
      </section>
    </div>`),he()}async function B(){const e=s.form.classId;if(s.selectedClass=s.classes.find(n=>String(n.id)===String(e))||null,s.students=[],!!e){s.loadingStudents=!0,E();try{s.students=K(await ee(e))}catch(n){console.error(n),M("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+(n.message||""),"error")}finally{s.loadingStudents=!1}}}function w(){var e,n,t,o,i,l,r,c,x,d,v,g,b,p;s.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",lang:((n=document.getElementById("exam-lang"))==null?void 0:n.value)||"th",examType:((t=document.getElementById("exam-type"))==null?void 0:t.value)||"",semester:((o=document.getElementById("exam-semester"))==null?void 0:o.value)||"",academicYear:((i=document.getElementById("exam-year"))==null?void 0:i.value)||"",examDate:((l=document.getElementById("exam-date"))==null?void 0:l.value)||"",startTime:((r=document.getElementById("exam-start"))==null?void 0:r.value)||"",endTime:((c=document.getElementById("exam-end"))==null?void 0:c.value)||"",classPart:((x=document.getElementById("exam-class-part"))==null?void 0:x.value)||"",periodPart:((d=document.getElementById("exam-period-part"))==null?void 0:d.value)||"",examRoom:((v=document.getElementById("exam-room"))==null?void 0:v.value)||"",examAmount:((g=document.getElementById("exam-amount"))==null?void 0:g.value)||"",invigilator1:((b=document.getElementById("exam-invigilator-1"))==null?void 0:b.value)||"",invigilator2:((p=document.getElementById("exam-invigilator-2"))==null?void 0:p.value)||""},s.selectedClass=s.classes.find(f=>String(f.id)===String(s.form.classId))||null,S()}function _(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=Y())}function fe(){return w(),_(),s.form.classId?!0:(M("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function he(){var n,t,o;be(),["exam-lang","exam-type","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2"].forEach(i=>{var l,r;(l=document.getElementById(i))==null||l.addEventListener("input",()=>{w(),_()}),(r=document.getElementById(i))==null||r.addEventListener("change",()=>{w(),_()})}),(n=document.getElementById("exam-class-id"))==null||n.addEventListener("change",async()=>{w(),S(),await B(),E()}),(t=document.getElementById("exam-doc-refresh"))==null||t.addEventListener("click",async()=>{w(),await B(),E(),M("รีเฟรชรายชื่อแล้ว","success")}),(o=document.getElementById("exam-doc-print"))==null||o.addEventListener("click",()=>{fe()&&ge()}),H("exam-invigilator-1","invigilator1"),H("exam-invigilator-2","invigilator2")}async function Te(e){ae("exam-docs"),ne("เอกสารช่วงสอบ","exam-docs"),P(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[n,t,o]=await Promise.all([Z((e==null?void 0:e.id)??null),V().catch(()=>({})),Q().catch(()=>[])]),i=ie(),l=re(),r={...$,semester:String(t.semester||$.semester||""),academicYear:String(t.academicYear||$.academicYear||""),examDate:le(),invigilator1:(e==null?void 0:e.full_name)||"",...i};l&&n.some(c=>String(c.id)===String(l))&&(r.classId=String(l)),s={teacher:e,classes:n,teachers:o,students:[],selectedClass:null,loadingStudents:!1,form:r},J.includes(s.form.examType)||(s.form.examType=$.examType),l&&S(),s.selectedClass=s.classes.find(c=>String(c.id)===String(s.form.classId))||null,await B(),E()}catch(n){console.error(n),P(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${a(n.message||"")}
    </div>`)}}export{Te as renderExamDocuments};
