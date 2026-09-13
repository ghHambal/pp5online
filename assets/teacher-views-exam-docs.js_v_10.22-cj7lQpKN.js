import{getMyClasses as oe,getSystemConfig as le,getTeachers as ie,getClassStudents as re}from"./api-Cf_Y4s92.js";import{g as Q,a as R}from"./ui-FQqAmrdo.js";import{o as de}from"./storage-D6nkcVz6.js";import{setActiveNav as ce,setTitle as me,setContent as D,_htmlEsc as t,SELECT_CLS as k,INPUT_CLS as g}from"./teacher-views-utils-BWmONzsh.js";import"./supabase-BV-W2lsh.js";import"./version.js_v_10.22-ffVTG8-v.js";const ee="pp5_exam_docs_draft_v1",W="pp5_exam_docs_pending_class_id",te="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",pe="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",P=27,_=P*2,ae=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],I={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},E={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},xe=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let o={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...E},loadingStudents:!1},M=[];const ue=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},ge=()=>{try{return JSON.parse(localStorage.getItem(ee)||"{}")||{}}catch{return{}}},L=()=>{localStorage.setItem(ee,JSON.stringify(o.form))},ve=()=>{let e="";try{e=sessionStorage.getItem(W)||"",sessionStorage.removeItem(W)}catch{}const n=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,n?String(n):""},j=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},ne=e=>[...e||[]].sort((n,a)=>String(n.student_code||"").localeCompare(String(a.student_code||""),"th",{numeric:!0})),Y=e=>{if(!e)return"";const n=new Date(`${e}T00:00:00`);return Number.isNaN(n.getTime())?"":`${n.getDate()} เดือน ${ae[n.getMonth()]} พ.ศ. ${n.getFullYear()+543}`},be=e=>{if(!e)return{day:"",month:"",year:""};const n=new Date(`${e}T00:00:00`);return Number.isNaN(n.getTime())?{day:"",month:"",year:""}:{day:String(n.getDate()),month:ae[n.getMonth()],year:String(n.getFullYear()+543)}},G=e=>{const n=e.startTime||"",a=e.endTime||"";return n&&a?`${n} - ${a}`:n||a||""},q=(e,n)=>e?n.key==="th"?`${e} น.`:e:"",fe=e=>{const n=String(e||"").trim();if(!n)return{room:"",name:""};const a=n.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(a)return{room:a[1],name:a[2].trim()};const[s,...l]=n.split(/\s+/);return{room:s,name:l.join(" ").trim()}},C=e=>{const n=String(e||"").trim().toUpperCase();return n==="ชาย"||n==="M"||n==="MALE"?"M":n==="หญิง"||n==="F"||n==="W"||n==="FEMALE"?"F":""},O=()=>{const e=new Set((o.students||[]).map(n=>C(n.gender)).filter(Boolean));return e.has("M")&&e.has("F")},he=()=>{const e=o.form,n=o.students||[];if(e.studentScope!=="split"||!O())return[n];const a=n.filter(l=>C(l.gender)==="M"),s=n.filter(l=>C(l.gender)==="F");return e.splitPrintMode==="both"?[a,s]:[e.splitGender==="F"?s:a]},$e=()=>{const e=o.form;if(e.studentScope!=="split"||!O())return"";const n=o.students.filter(s=>C(s.gender)==="M").length,a=o.students.filter(s=>C(s.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${n} + หญิง ${a})`:e.splitGender==="F"?` (เฉพาะหญิง ${a} คน)`:` (เฉพาะชาย ${n} คน)`},ye=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),J=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),K=(e,n,a,s=a.loading,l=0)=>{const i=e||[],r=i.map((c,u)=>`
    <tr>
      <td>${n+u}</td>
      <td>${t(c.student_code||"")}</td>
      <td class="nm">${t(c.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),d=Array.from({length:Math.max(0,l-i.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return r||d?r+d:`<tr><td colspan="4" class="empty-students">${t(s)}</td></tr>`},we=(e,n,a,s,l,i)=>{const r=e.slice(n*_,(n+1)*_),d=r.slice(0,P),c=r.slice(P,_),u=n*_+1,x=u+P;return`
    <div class="exam-doc-paper ${i} sign-list ${n>0?"exam-doc-page-break":""}">
      ${A(a.signListTitle)}
      ${F(a,s,l)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${t(a.studentCode)}</th>
                <th>${t(a.studentName)}</th>
                <th style="width:80px;">${t(a.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${K(d,u,a)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${t(a.studentCode)}</th>
                <th>${t(a.studentName)}</th>
                <th style="width:80px;">${t(a.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${K(c,x,a," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${B(a,l)}
    </div>`},X=(e,n)=>n?`${e}. .................................................... <span class="textColor">(${t(n)})</span>`:`${e}. ...........................................................................................`,B=(e,n)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${t(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${X(1,n.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${X(2,n.invigilator2)}</div>
      </div>
    </div>
  </div>`,A=e=>`
  <div class="header">
    <img src="${te}" alt="">
    <h2>${t(e)}</h2>
    <img src="${pe}" alt="">
  </div>`,F=(e,n,a)=>`
  <div class="infoG">
    <div class="info1">
      ${t(e.examType)}: <span class="textColor">${t(a.examType||"")}</span>
      ${t(e.term)}: <span class="textColor">${t(a.semester||"")}</span>
      ${t(e.year)}: <span class="textColor">${t(a.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${t(e.subject)}: <span class="textColor">${t(n.subjectName||"")}</span>
      ${t(e.subjectCode)}: <span class="textColor">${t(n.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${t(e.examDate)}: <span class="textColor">${t(a.examDateLabel||Y(a.examDate))}</span>
      ${t(e.examTime)}: <span class="textColor">${t(a.examTimeLabel||G(a))}</span>
    </div>
    <div class="info4">
      ${t(e.teacher)}: <span class="textColor">${t(n.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${t(e.classLevel)}: <span class="textColor">${t(n.className||"")}</span>
    </div>
  </div>`,Se=e=>`
  <div class="header-single">
    <img src="${te}" alt="">
    <h2>${t(e)}</h2>
  </div>`,Z=(e,n)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${t(n||"")}</span>
  </div>`,Ce=(e,n,a,s)=>{const[l,i]=String(s.room||"").split("/");return`
  <div class="env-line">
    ${t(e.envTerm)} <span class="textColor env-blank-sm">${t(a.semester||"")}</span>
    ${t(e.envYear)} <span class="textColor env-blank-sm">${t(a.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${t(e.envSubject)} <span class="textColor env-blank-lg">${t(n.subjectName||"")}</span>
    ${t(e.envClass)} <span class="textColor env-blank-sm">${t(l||"")}</span> / <span class="textColor env-blank-sm">${t(i||"")}</span>
  </div>
  <div class="env-line">
    ${t(e.envTeacher)} <span class="textColor env-blank-lg">${t(n.teacherName||"")}</span>
  </div>
  <div class="env-line env-invigilator-heading">${t(e.envInvigilatorHeading)}:-</div>
  ${Z(1,a.invigilator1)}
  ${Z(2,a.invigilator2)}
  <table class="envelope-summary-table">
    <tbody>
      <tr><th>${t(e.envDate)}</th><td class="textColor">${t(a.examDateLabel||Y(a.examDate))}</td></tr>
      <tr><th>${t(e.envPeriod)}</th><td class="textColor">${t(a.examTimeLabel||G(a))}</td></tr>
      <tr><th>${t(e.envGroup)}</th><td class="textColor">${t(a.classPart||"")}</td></tr>
      <tr><th>${t(e.envRoomNo)}</th><td class="textColor">${t(a.examRoom||"")}</td></tr>
    </tbody>
  </table>
  <div class="env-footer-dept">${t(e.envFooterDept)}</div>`},Te=(e,n)=>{var h,w;const a=o.form,s=I[a.lang]||I.th,l=o.selectedClass||{},i=j(l),r=ne(e),d=r.length,c=be(a.examDate),u=(h=o.teacher)!=null&&h.phone?` (${o.teacher.phone})`:"",x={className:l.class_name||"",subjectName:a.subjectLabel||i.subject_name||"",subjectCode:i.subject_code||"",teacherName:(((w=o.teacher)==null?void 0:w.full_name)||"")+u},$=Math.max(1,Math.ceil(r.length/_)),v=s.dir==="rtl"?"rtl":"ltr",m=n==="all"||n==="portrait",b=n==="all"||n==="envelope",y=n==="envelope"?" envelope-only":n==="portrait"?" portrait-only":"",p=a.examAmount||String(d),f=fe(x.className);return`
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
        --exam-font: ${s.font};
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

      .exam-doc-paper.envelope-religious {
        display: flex;
        flex-direction: column;
        padding-top: 14mm;
      }

      .header-single {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 20px;
      }

      .header-single img {
        width: 100px;
        margin-bottom: 10px;
      }

      .header-single h2 {
        font-size: 20pt;
        font-weight: 700;
        margin: 0;
      }

      .env-line {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        font-size: 17pt;
        margin-top: 34px;
      }

      .env-blank-sm {
        display: inline-block;
        min-width: 60px;
        text-align: center;
      }

      .env-blank-lg {
        display: inline-block;
        flex-grow: 1;
        min-width: 220px;
      }

      .env-blank-full {
        display: inline-block;
        flex-grow: 1;
        min-width: 260px;
      }

      .env-invigilator-heading {
        font-size: 17pt;
        font-weight: 700;
        margin-top: 46px;
      }

      .env-invigilator-row {
        font-size: 16pt;
        margin-top: 28px;
      }

      .envelope-summary-table {
        margin-top: 54px;
      }

      .envelope-summary-table th,
      .envelope-summary-table td {
        font-size: 15pt;
        padding: 14px;
      }

      .envelope-summary-table th {
        width: 45%;
        background: #f3f4f6;
      }

      .exam-doc-paper .env-footer-dept {
        margin-top: auto;
        padding-top: 24px;
        font-size: 11pt;
        direction: rtl;
        text-align: left;
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
    <div id="exam-doc-print-area" class="${y.trim()}">
    ${m?`
    ${Array.from({length:$},(H,se)=>we(r,se,s,x,a,v)).join("")}

    <div class="exam-doc-paper ${v} exam-doc-page-break">
      ${A(s.examCoverTitle)}
      ${F(s,x,a)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${t(s.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${d}</span> ${t(s.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${t(s.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${t(s.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${t(s.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${t(s.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${t(s.no)}</th>
            <th>${t(s.studentCode)}</th>
            <th>${t(s.absentName)}</th>
            <th>${t(s.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${J(15)}
        </tbody>
      </table>
      ${B(s,a)}
    </div>

    <div class="exam-doc-paper ${v} exam-doc-page-break">
      ${A(s.absentTitle)}
      ${F(s,x,a)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${t(s.no)}</th>
            <th>${t(s.studentCode)}</th>
            <th>${t(s.absentName)}</th>
            <th>${t(s.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${J(15)}
        </tbody>
      </table>
      ${B(s,a)}
    </div>
    `:""}

    ${b?a.lang==="th"?`
    <div class="exam-doc-paper ${v} landscape ${m?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${t(s.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${t(s.envelopeSubject)} <span class="textColor">${t(x.subjectName)}</span> ${t(s.subjectCode)} <span class="textColor">${t(x.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${a.examDateLabel?`${t(s.envelopeDate)} <span class="textColor">${t(a.examDateLabel)}</span>`:`${t(s.envelopeDate)} <span class="textColor">${t(c.day)}</span> ${t(s.envelopeMonth)} <span class="textColor">${t(c.month)}</span> ${t(s.envelopeYear)} <span class="textColor">${t(c.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${a.examTimeLabel?`${t(s.envelopeTime)} <span class="textColor">${t(a.examTimeLabel)}</span>`:`${t(s.envelopeTime)} <span class="textColor">${t(q(a.startTime,s))}</span> ${t(s.envelopeTo)} <span class="textColor">${t(q(a.endTime,s))}</span>`}
        </div>
        <div class="infoNP4">
          ${t(s.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${t(f.room)}</span>${f.name?`<span class="exam-envelope-class-name">${t(f.name)}</span>`:""}</span> ${t(s.envelopeStudents)} <span class="textColor">${d}</span> ${t(s.studentUnit)} ${t(s.examAmount)} <span class="textColor">${t(p)}</span> ${t(s.examUnit)}
        </div>
        <div class="infoNP5">
          ${t(s.envelopeTeacher)} <span class="textColor">${t(x.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${v} envelope-religious ${m?"exam-doc-page-break":""}">
      ${Se(s.envSchoolName)}
      ${Ce(s,x,a,f)}
    </div>
    `:""}
    </div>`},U=(e="all")=>{const a=he().map(c=>Te(c,e));if(a.length<=1)return a[0]||"";const s=a[0].match(/<style[\s\S]*?<\/style>/),l=s?s[0]:"",i=a[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),r=i?i[1]:"",d=a.map(c=>{const u=c.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return u?u[1]:""});return`${l}
<div id="exam-doc-print-area" class="${r}">${d.join("")}</div>`},ke=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${U("all")}
</body>
</html>`;de(e,{autoprint:!0})},_e=()=>{const e=o.selectedClass,n=j(e);return e?`${n.subject_code||"-"} · ${n.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function Ee(){M.forEach(e=>{try{e()}catch{}}),M=[]}function V(e,n){const a=document.getElementById(e),s=document.getElementById(`${e}-list`);if(!a||!s)return;const l=o.teachers||[],i=()=>{s.classList.add("hidden")},r=m=>{a.value=m.full_name||"",o.form[n]=a.value,L(),N(),i()},d=()=>{const m=a.value.trim(),b=m.toLowerCase(),y=l.filter(p=>!m||ye(p).includes(b)).slice(0,10);if(!l.length){s.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!y.length){s.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}s.innerHTML=y.map(p=>`
      <button type="button" data-id="${p.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${p.image_url?`<img src="${p.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${t((p.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${t(p.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${t(p.teacher_code||"—")}${p.dept?` · ${t(p.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),s.querySelectorAll(".exam-teacher-option").forEach(p=>{p.addEventListener("mousedown",f=>{f.preventDefault();const h=l.find(w=>String(w.id)===String(p.dataset.id));h&&r(h)})})},c=()=>{d(),s.classList.remove("hidden")},u=()=>{o.form[n]=a.value,L(),N(),c()},x=()=>c(),$=m=>{if(m.key==="Escape"&&i(),m.key==="Enter"){const b=s.querySelector(".exam-teacher-option");b&&!s.classList.contains("hidden")&&(m.preventDefault(),b.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},v=m=>{!a.contains(m.target)&&!s.contains(m.target)&&i()};a.addEventListener("input",u),a.addEventListener("focus",x),a.addEventListener("keydown",$),document.addEventListener("mousedown",v,!0),M.push(()=>{a.removeEventListener("input",u),a.removeEventListener("focus",x),a.removeEventListener("keydown",$),document.removeEventListener("mousedown",v,!0)})}function T(){const e=o.form,n=o.classes.map(a=>{const s=j(a),l=`${s.subject_code||"-"} · ${s.subject_name||"-"} · ${a.class_name||"-"}`;return`<option value="${a.id}" ${String(e.classId)===String(a.id)?"selected":""}>${t(l)}</option>`}).join("");D(`
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
            <select id="exam-class-id" class="${k}">
              <option value="">เลือกห้องเรียน</option>
              ${n}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${k}">
              ${Object.values(I).map(a=>`<option value="${a.key}" ${e.lang===a.key?"selected":""}>${t(a.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${g}" value="${t(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${xe.map(a=>`<option value="${t(a)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${g}" value="${t(e.subjectLabel)}" placeholder="${t(j(o.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${g}" value="${t(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${g}" value="${t(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${g}" value="${t(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${g}" value="${t(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${g}" value="${t(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${g}" value="${t(e.examDateLabel)}" placeholder="${t(Y(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${g}" value="${t(e.examTimeLabel)}" placeholder="${t(G(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${g}" value="${t(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${g}" value="${t(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${g}" value="${t(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${g}" value="${t(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${g}" value="${t(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${g}" value="${t(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${O()?(()=>{const a=o.students.filter(i=>C(i.gender)==="M").length,s=o.students.filter(i=>C(i.gender)==="F").length,l=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${k}">
              <option value="all" ${l?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${l?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${l?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${k}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${a} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${s} คน)</option>
            </select>
          </label>
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รูปแบบพิมพ์</span>
            <select id="exam-split-print-mode" class="${k}">
              <option value="single" ${e.splitPrintMode!=="both"?"selected":""}>พิมพ์ทีละเพศ (เฉพาะเพศที่เลือกอยู่)</option>
              <option value="both" ${e.splitPrintMode==="both"?"selected":""}>พิมพ์ทีเดียวทั้งสองเพศ (ชายก่อน ต่อด้วยหญิง)</option>
            </select>
          </label>`:""}
        </div>`})():""}

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${t(_e())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${o.students.length} คน${t($e())}</span>
          ${o.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${U()}</div>
      </section>
    </div>`),Ne()}async function z(){const e=o.form.classId;if(o.selectedClass=o.classes.find(n=>String(n.id)===String(e))||null,o.students=[],!!e){o.loadingStudents=!0,T();try{o.students=ne(await re(e))}catch(n){console.error(n),R("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+Q(n),"error")}finally{o.loadingStudents=!1}}}function S(){var e,n,a,s,l,i,r,d,c,u,x,$,v,m,b,y,p,f,h,w;o.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((n=document.getElementById("exam-subject-label"))==null?void 0:n.value)||"",lang:((a=document.getElementById("exam-lang"))==null?void 0:a.value)||"th",examType:((s=document.getElementById("exam-type"))==null?void 0:s.value)||"",semester:((l=document.getElementById("exam-semester"))==null?void 0:l.value)||"",academicYear:((i=document.getElementById("exam-year"))==null?void 0:i.value)||"",examDate:((r=document.getElementById("exam-date"))==null?void 0:r.value)||"",startTime:((d=document.getElementById("exam-start"))==null?void 0:d.value)||"",endTime:((c=document.getElementById("exam-end"))==null?void 0:c.value)||"",examDateLabel:((u=document.getElementById("exam-date-label"))==null?void 0:u.value)||"",examTimeLabel:((x=document.getElementById("exam-time-label"))==null?void 0:x.value)||"",classPart:(($=document.getElementById("exam-class-part"))==null?void 0:$.value)||"",periodPart:((v=document.getElementById("exam-period-part"))==null?void 0:v.value)||"",examRoom:((m=document.getElementById("exam-room"))==null?void 0:m.value)||"",examAmount:((b=document.getElementById("exam-amount"))==null?void 0:b.value)||"",invigilator1:((y=document.getElementById("exam-invigilator-1"))==null?void 0:y.value)||"",invigilator2:((p=document.getElementById("exam-invigilator-2"))==null?void 0:p.value)||"",studentScope:((f=document.getElementById("exam-student-scope"))==null?void 0:f.value)||"all",splitGender:((h=document.getElementById("exam-split-gender"))==null?void 0:h.value)||"M",splitPrintMode:((w=document.getElementById("exam-split-print-mode"))==null?void 0:w.value)||"single"},o.selectedClass=o.classes.find(H=>String(H.id)===String(o.form.classId))||null,L()}function N(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=U())}function Le(){return S(),N(),o.form.classId?!0:(R("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function Ne(){var n,a,s,l;Ee(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(i=>{var r,d;(r=document.getElementById(i))==null||r.addEventListener("input",()=>{S(),N()}),(d=document.getElementById(i))==null||d.addEventListener("change",()=>{S(),N()})}),(n=document.getElementById("exam-class-id"))==null||n.addEventListener("change",async()=>{S(),L(),await z(),T()}),(a=document.getElementById("exam-lang"))==null||a.addEventListener("change",()=>{S(),T()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(i=>{var r;(r=document.getElementById(i))==null||r.addEventListener("change",()=>{S(),T()})}),(s=document.getElementById("exam-doc-refresh"))==null||s.addEventListener("click",async()=>{S(),await z(),T(),R("รีเฟรชรายชื่อแล้ว","success")}),(l=document.getElementById("exam-doc-print"))==null||l.addEventListener("click",()=>{Le()&&ke()}),V("exam-invigilator-1","invigilator1"),V("exam-invigilator-2","invigilator2")}async function Ae(e){ce("exam-docs"),me("เอกสารช่วงสอบ","exam-docs"),D(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[n,a,s]=await Promise.all([oe((e==null?void 0:e.id)??null),le().catch(()=>({})),ie().catch(()=>[])]),l=ge(),i=ve(),r={...E,semester:String(a.semester||E.semester||""),academicYear:String(a.academicYear||E.academicYear||""),examDate:ue(),invigilator1:(e==null?void 0:e.full_name)||"",...l};i&&n.some(d=>String(d.id)===String(i))&&(r.classId=String(i)),o={teacher:e,classes:n,teachers:s,students:[],selectedClass:null,loadingStudents:!1,form:r},o.form.examType||(o.form.examType=E.examType),i&&L(),o.selectedClass=o.classes.find(d=>String(d.id)===String(o.form.classId))||null,await z(),T()}catch(n){console.error(n),D(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${t(Q(n))}
    </div>`)}}export{Ae as renderExamDocuments};
