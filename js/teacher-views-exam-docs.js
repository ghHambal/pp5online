import { getClassStudents, getMyClasses, getSystemConfig } from './api.js'
import { showToast } from './ui.js'
import {
  INPUT_CLS, SELECT_CLS,
  setActiveNav, setContent, setTitle, _htmlEsc,
} from './teacher-views-utils.js'

const STORAGE_KEY = 'pp5_exam_docs_draft_v1'
const LOGO_LEFT = 'https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT'
const LOGO_RIGHT = 'https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj'
const SIGN_ROWS_PER_COLUMN = 25
const SIGN_ROWS_PER_PAGE = SIGN_ROWS_PER_COLUMN * 2

const TH_MONTHS = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
]

const LANGS = {
  th: {
    key: 'th',
    label: 'สามัญ (ไทย)',
    dir: 'ltr',
    font: '"Sarabun", "TH Sarabun New", sans-serif',
    button: 'พิมพ์ / บันทึก PDF',
    loading: 'กำลังโหลดรายชื่อ...',
    signListTitle: 'แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ',
    examCoverTitle: 'ใบปะหน้าข้อสอบ',
    absentTitle: 'แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)',
    envelopeTitle: 'ใบปะหน้าซองข้อสอบ',
    examType: 'ข้อสอบวัดผล',
    term: 'ภาคเรียนที่',
    year: 'ปีการศึกษา',
    subject: 'รายวิชา',
    subjectCode: 'รหัสวิชา',
    examDate: 'สอบวันที่',
    examTime: 'เวลาที่สอบ',
    teacher: 'ชื่อ-สกุล(ครูผู้สอน)',
    classLevel: 'ชั้น',
    totalStudents: 'จำนวนนักเรียนทั้งหมด',
    presentStudents: 'จำนวนนักเรียนที่เข้าสอบ',
    absentStudents: 'จำนวนนักเรียนที่ขาดสอบ',
    studentUnit: 'คน',
    examAmount: 'จำนวนข้อสอบ',
    examUnit: 'ชุด',
    no: 'เลขที่',
    studentCode: 'เลขประจำตัว',
    studentName: 'ชื่อ-สกุล',
    absentName: 'ชื่อ-สกุล(นักเรียนที่ขาดสอบ)',
    signature: 'ลงชื่อ',
    note: 'หมายเหตุ',
    examiner: 'ลงชื่อครูผู้คุมสอบ',
    envelopeSubject: 'ข้อสอบวิชา',
    envelopeDate: 'สอบวันที่',
    envelopeMonth: 'เดือน',
    envelopeYear: 'พ.ศ.',
    envelopeTime: 'สอบเวลา',
    envelopeTo: 'ถึง',
    envelopeClass: 'ชั้น',
    envelopeStudents: 'จำนวนนักเรียน',
    envelopeTeacher: 'ชื่อครูผู้สอน',
    examRoom: 'ห้องสอบ',
    groupPart: 'กลุ่ม / แผนก',
    periodPart: 'คาบสอบ',
  },
  ar: {
    key: 'ar',
    label: 'ศาสนา (อาหรับ)',
    dir: 'rtl',
    font: '"Amiri", serif',
    button: 'طباعة / حفظ PDF',
    loading: '...النظام يقوم بتحميل المعلومات',
    signListTitle: 'قائمة أسماء طلاب مدرسة عزيزستان',
    examCoverTitle: 'ورقة الأسئلة الاختبار',
    absentTitle: 'نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار',
    envelopeTitle: 'غلاف ظرف أوراق الأسئلة',
    examType: 'نوع الاختبار',
    term: 'الفصل الدراسي',
    year: 'للعام الدراسي',
    subject: 'المادة',
    subjectCode: 'رمز المقرر',
    examDate: 'تاريخ الاختبار',
    examTime: 'وقت الاختبار',
    teacher: 'الاسم ـ اللقب (المعلم)',
    classLevel: 'الصف',
    totalStudents: 'إجمالي عدد الطلاب',
    presentStudents: 'عدد الطلاب الحاضرين',
    absentStudents: 'عدد الطلاب الغائبين',
    studentUnit: 'طالب',
    examAmount: 'إجمالي عدد أوراق الأسئلة',
    examUnit: 'ورقة',
    no: 'رقم',
    studentCode: 'رقم الطالب',
    studentName: 'الاسم ـ اللقب',
    absentName: 'الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)',
    signature: 'التوقيع',
    note: 'ملاحظات',
    examiner: 'الاسم ـ اللقب (مراقب/مراقبة الاختبار)',
    envelopeSubject: 'المادة',
    envelopeDate: 'تاريخ الاختبار',
    envelopeMonth: 'الشهر',
    envelopeYear: 'السنة',
    envelopeTime: 'وقت الاختبار',
    envelopeTo: 'إلى',
    envelopeClass: 'الصف',
    envelopeStudents: 'إجمالي عدد الطلاب',
    envelopeTeacher: 'اسم المعلم',
    examRoom: 'غرفة الاختبار',
    groupPart: 'المجموعة (القسم)',
    periodPart: 'الحصة (وقت الاختبار)',
  },
  jawi: {
    key: 'jawi',
    label: 'ศาสนา (ยาวี)',
    dir: 'rtl',
    font: '"Amiri", serif',
    button: 'PDF چيتق / سيمڤن',
    loading: '...سيستم سدڠ ممواوت معلومات',
    signListTitle: 'سناراي نام ڤلاجر مدرسة عزيزستان',
    examCoverTitle: 'موك سمڤول سوءالن ڤڤريقسأن',
    absentTitle: 'بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن',
    envelopeTitle: 'موك سمڤول سامڤول سوءالن ڤڤريقسأن',
    examType: 'جنيس ڤڤريقسأن',
    term: 'ڤڠڬل',
    year: 'تاهون ڤڠاجين',
    subject: 'ماده',
    subjectCode: 'كود كورسوس',
    examDate: 'تڠكل ڤريقسا',
    examTime: 'ماس ڤريقسا',
    teacher: 'نام - باق (ڤڠاجر)',
    classLevel: 'كلس',
    totalStudents: 'جومله ڤلاجر سموا',
    presentStudents: 'جومله ڤلاجر يڠ حاضر',
    absentStudents: 'جومله ڤلاجر يڠ غائب',
    studentUnit: 'اورڠ',
    examAmount: 'جومله كرتس سؤالن سموا',
    examUnit: 'ورقة',
    no: 'رقم',
    studentCode: 'نومبور ڤلاجر',
    studentName: 'نام - باق',
    absentName: 'نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)',
    signature: 'تندا تاڠن',
    note: 'کتراڠن',
    examiner: 'نام - باق (ڤڠاوس ڤڤريقسأن)',
    envelopeSubject: 'ماده',
    envelopeDate: 'تڠكل ڤريقسا',
    envelopeMonth: 'بولن',
    envelopeYear: 'تاهون',
    envelopeTime: 'ماس ڤريقسا',
    envelopeTo: 'هيڠݢ',
    envelopeClass: 'كلس',
    envelopeStudents: 'جومله ڤلاجر',
    envelopeTeacher: 'نام ڤڠاجر',
    examRoom: 'بيليق ڤريقسا',
    groupPart: 'كومڤولن / بهاڬين',
    periodPart: 'حصة (ماس ڤريقسا)',
  },
}

const DEFAULT_FORM = {
  classId: '',
  lang: 'th',
  examType: 'ปลายภาค',
  semester: '',
  academicYear: '',
  examDate: '',
  startTime: '08:30',
  endTime: '09:30',
  classPart: '',
  periodPart: '',
  examRoom: '',
  examAmount: '',
  invigilator1: '',
  invigilator2: '',
}

const EXAM_TYPE_OPTIONS = ['กลางภาค', 'ปรับคะแนนกลางภาค', 'ปลายภาค']

let _state = {
  teacher: null,
  classes: [],
  students: [],
  selectedClass: null,
  form: { ...DEFAULT_FORM },
  loadingStudents: false,
}

const _dateInputToday = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const _loadDraft = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}
  } catch {
    return {}
  }
}

const _saveDraft = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(_state.form))
}

const _classSubject = cls => {
  const ms = Array.isArray(cls?.master_subjects) ? cls.master_subjects[0] : cls?.master_subjects
  return ms || {}
}

const _sortStudents = students => [...(students || [])].sort((a, b) =>
  String(a.student_code || '').localeCompare(String(b.student_code || ''), 'th', { numeric: true })
)

const _thaiFullDate = value => {
  if (!value) return ''
  const d = new Date(`${value}T00:00:00`)
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getDate()} เดือน ${TH_MONTHS[d.getMonth()]} พ.ศ. ${d.getFullYear() + 543}`
}

const _datePartsTH = value => {
  if (!value) return { day: '', month: '', year: '' }
  const d = new Date(`${value}T00:00:00`)
  if (Number.isNaN(d.getTime())) return { day: '', month: '', year: '' }
  return { day: String(d.getDate()), month: TH_MONTHS[d.getMonth()], year: String(d.getFullYear() + 543) }
}

const _timeRange = form => {
  const start = form.startTime || ''
  const end = form.endTime || ''
  if (start && end) return `${start} - ${end}`
  return start || end || ''
}

const _line = (label, value, wide = false) => `
  <span class="exam-doc-field ${wide ? 'wide' : ''}">
    <span class="exam-doc-label">${_htmlEsc(label)}</span>
    <span class="exam-doc-value">${_htmlEsc(value || ' ')}</span>
  </span>`

const _envelopePair = (label, value, size = '') => `
  <span class="exam-doc-envelope-pair ${size}">
    <span class="exam-doc-envelope-label">${_htmlEsc(label)}</span>
    <span class="exam-doc-envelope-value">${_htmlEsc(value || ' ')}</span>
  </span>`

const _envelopeTime = (value, labels) => {
  if (!value) return ''
  return labels.key === 'th' ? `${value} น.` : value
}

const _blankRows = (count, cols = 4) => Array.from({ length: count }, () =>
  `<tr>${Array.from({ length: cols }, (_, i) => `<td class="${i === 0 ? 'exam-doc-row-height' : ''}"></td>`).join('')}</tr>`
).join('')

const _studentRows = (students, startNo, labels, emptyText = labels.loading) => (students || []).map((s, idx) => `
  <tr>
    <td>${startNo + idx}</td>
    <td>${_htmlEsc(s.student_code || '')}</td>
    <td class="name-cell">${_htmlEsc(s.full_name || '')}</td>
    <td></td>
  </tr>
`).join('') || `<tr><td colspan="4" class="empty-students">${_htmlEsc(emptyText)}</td></tr>`

const _studentSignPage = (students, pageIndex, labels, data, form, dirClass) => {
  const pageStudents = students.slice(pageIndex * SIGN_ROWS_PER_PAGE, (pageIndex + 1) * SIGN_ROWS_PER_PAGE)
  const left = pageStudents.slice(0, SIGN_ROWS_PER_COLUMN)
  const right = pageStudents.slice(SIGN_ROWS_PER_COLUMN, SIGN_ROWS_PER_PAGE)
  const startNo = pageIndex * SIGN_ROWS_PER_PAGE + 1
  const rightStartNo = startNo + SIGN_ROWS_PER_COLUMN

  return `
    <div class="exam-doc-paper ${dirClass} sign-list ${pageIndex > 0 ? 'exam-doc-page-break' : ''}">
      ${_header(labels.signListTitle)}
      ${_infoBlock(labels, data, form)}
      <div class="exam-doc-columns">
        <div>
          <table class="exam-doc-table">
            <thead><tr><th>${_htmlEsc(labels.no)}</th><th>${_htmlEsc(labels.studentCode)}</th><th>${_htmlEsc(labels.studentName)}</th><th>${_htmlEsc(labels.signature)}</th></tr></thead>
            <tbody>${_studentRows(left, startNo, labels)}</tbody>
          </table>
        </div>
        <div>
          <table class="exam-doc-table">
            <thead><tr><th>${_htmlEsc(labels.no)}</th><th>${_htmlEsc(labels.studentCode)}</th><th>${_htmlEsc(labels.studentName)}</th><th>${_htmlEsc(labels.signature)}</th></tr></thead>
            <tbody>${_studentRows(right, rightStartNo, labels, ' ')}</tbody>
          </table>
        </div>
      </div>
      ${_signature(labels, form)}
    </div>`
}

const _signature = (labels, form, withNames = false) => `
  <div class="exam-doc-signature">
    <div>${_htmlEsc(labels.examiner)}</div>
    <div class="exam-doc-signature-lines">
      <div>1. <span>${withNames ? _htmlEsc(form.invigilator1 || '') : '...........................................................................................'}</span></div>
      <div>2. <span>${withNames ? _htmlEsc(form.invigilator2 || '') : '...........................................................................................'}</span></div>
    </div>
  </div>`

const _header = title => `
  <div class="exam-doc-header">
    <img src="${LOGO_LEFT}" alt="">
    <h2>${_htmlEsc(title)}</h2>
    <img src="${LOGO_RIGHT}" alt="">
  </div>`

const _infoBlock = (labels, data, form) => `
  <div class="exam-doc-info">
    <div>
      ${_line(labels.examType, form.examType)}
      ${_line(labels.term, form.semester)}
      ${_line(labels.year, form.academicYear)}
    </div>
    <div>
      ${_line(labels.subject, data.subjectName, true)}
      ${_line(labels.subjectCode, data.subjectCode)}
    </div>
    <div>
      ${_line(labels.examDate, _thaiFullDate(form.examDate), true)}
      ${_line(labels.examTime, _timeRange(form))}
      ${form.periodPart ? _line(labels.periodPart, form.periodPart) : ''}
    </div>
    <div>
      ${_line(labels.teacher, data.teacherName, true)}
    </div>
    <div>
      ${_line(labels.classLevel, data.className)}
      ${form.classPart ? _line(labels.groupPart, form.classPart, true) : ''}
      ${form.examRoom ? _line(labels.examRoom, form.examRoom) : ''}
    </div>
  </div>`

const _summaryCounts = (labels, total, examAmount) => `
  <div class="exam-doc-counts">
    <div>${_htmlEsc(labels.totalStudents)} <span>${total}</span> ${_htmlEsc(labels.studentUnit)}</div>
    <div>${_htmlEsc(labels.presentStudents)} <span></span> ${_htmlEsc(labels.studentUnit)}</div>
    <div>${_htmlEsc(labels.absentStudents)} <span></span> ${_htmlEsc(labels.studentUnit)}</div>
    ${examAmount ? `<div>${_htmlEsc(labels.examAmount)} <span>${_htmlEsc(examAmount)}</span> ${_htmlEsc(labels.examUnit)}</div>` : ''}
  </div>`

const _absentTable = labels => `
  <table class="exam-doc-table">
    <thead>
      <tr>
        <th>${_htmlEsc(labels.no)}</th>
        <th>${_htmlEsc(labels.studentCode)}</th>
        <th>${_htmlEsc(labels.absentName)}</th>
        <th>${_htmlEsc(labels.note)}</th>
      </tr>
    </thead>
    <tbody>${_blankRows(15)}</tbody>
  </table>`

const _buildPrintHtml = (mode = 'all') => {
  const form = _state.form
  const labels = LANGS[form.lang] || LANGS.th
  const cls = _state.selectedClass || {}
  const ms = _classSubject(cls)
  const students = _sortStudents(_state.students)
  const total = students.length
  const parts = _datePartsTH(form.examDate)
  const data = {
    className: cls.class_name || '',
    subjectName: ms.subject_name || '',
    subjectCode: ms.subject_code || '',
    teacherName: _state.teacher?.full_name || '',
  }
  const signPageCount = Math.max(1, Math.ceil(students.length / SIGN_ROWS_PER_PAGE))
  const dirClass = labels.dir === 'rtl' ? 'rtl' : 'ltr'
  const includePortrait = mode === 'all' || mode === 'portrait'
  const includeEnvelope = mode === 'all' || mode === 'envelope'
  const defaultPageSize = mode === 'envelope' ? 'A4 landscape' : 'A4 portrait'
  const areaClass = mode === 'envelope' ? ' envelope-only' : (mode === 'portrait' ? ' portrait-only' : '')
  const examAmount = form.examAmount || String(total)

  return `
    <style id="exam-doc-print-style">
      @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&family=Amiri:wght@400;700&display=swap');
      #exam-doc-print-area { --exam-font: ${labels.font}; }
      #exam-doc-print-area.envelope-only { width: 297mm; }
      #exam-doc-print-area.portrait-only { width: 210mm; }
      .exam-doc-paper {
        width: 210mm; min-height: 297mm; margin: 0 auto 16px; padding: 8mm 10mm; box-sizing: border-box;
        background: #fff; color: #111; font-family: var(--exam-font); font-size: 11.4pt; box-shadow: 0 12px 30px rgba(15, 23, 42, .12);
      }
      .exam-doc-paper.rtl { direction: rtl; text-align: right; }
      .exam-doc-paper.landscape {
        width: 297mm; min-height: 210mm; padding: 0; overflow: visible;
        display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
      }
      .exam-doc-envelope-sheet {
        width: 100%; height: 100%; padding: 18mm 12mm 14mm; box-sizing: border-box;
        display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center;
      }
      .exam-doc-header { display: flex; align-items: center; justify-content: space-between; gap: 16px; text-align: center; margin-bottom: 7px; }
      .exam-doc-header img { width: 58px; height: 58px; object-fit: contain; }
      .exam-doc-header h2 { flex: 1; margin: 0; font-size: 17pt; font-weight: 700; line-height: 1.22; }
      .exam-doc-info { display: grid; gap: 4px; margin-bottom: 8px; }
      .exam-doc-info > div { display: flex; flex-wrap: wrap; gap: 8px 12px; align-items: baseline; }
      .exam-doc-field { display: inline-flex; align-items: baseline; gap: 6px; min-width: 120px; flex: 1 1 150px; }
      .exam-doc-field.wide { flex-basis: 280px; }
      .exam-doc-label { white-space: nowrap; }
      .exam-doc-value { flex: 1; min-height: 18px; color: #0021a6; font-weight: 700; border-bottom: 2px dotted #111; padding: 0 8px 1px; }
      .exam-doc-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: 8px; }
      .exam-doc-table { width: 100%; border-collapse: collapse; margin: 8px 0; table-layout: fixed; }
      .exam-doc-table th, .exam-doc-table td { border: 1px solid #111; padding: 2.5px 4px; text-align: center; vertical-align: middle; font-size: 10.6pt; line-height: 1.24; }
      .exam-doc-table th:nth-child(1), .exam-doc-table td:nth-child(1) { width: 31px; }
      .exam-doc-table th:nth-child(2), .exam-doc-table td:nth-child(2) { width: 68px; }
      .exam-doc-table th:nth-child(4), .exam-doc-table td:nth-child(4) { width: 62px; }
      .exam-doc-table .name-cell { text-align: left; }
      .exam-doc-paper.rtl .exam-doc-table .name-cell { text-align: right; }
      .empty-students { color: #6b7280; height: 80px; }
      .exam-doc-paper.sign-list .exam-doc-table td { height: auto; }
      .exam-doc-row-height { height: 8mm; }
      .exam-doc-signature { margin-top: 10px; display: flex; justify-content: flex-start; gap: 28px; align-items: flex-start; }
      .exam-doc-paper.rtl .exam-doc-signature { justify-content: flex-end; }
      .exam-doc-signature-lines { display: grid; gap: 10px; min-width: 310px; }
      .exam-doc-counts { margin: 8px 0 8px auto; width: min(90mm, 100%); display: grid; gap: 7px; text-align: right; }
      .exam-doc-paper.rtl .exam-doc-counts { margin-left: 0; margin-right: auto; }
      .exam-doc-counts span { display: inline-block; min-width: 34mm; color: #0021a6; font-weight: 700; border-bottom: 2px dotted #111; text-align: center; padding: 0 8px 1px; }
      .exam-doc-envelope-title { font-size: 38pt; font-weight: 700; margin: 4mm 0 14mm; line-height: 1.1; }
      .exam-doc-envelope-info { width: 100%; display: grid; gap: 7mm; font-size: 26pt; line-height: 1.16; }
      .exam-doc-envelope-row { display: flex; align-items: baseline; justify-content: center; gap: 7mm; flex-wrap: nowrap; width: 100%; }
      .exam-doc-envelope-row.compact { gap: 4mm; font-size: 24pt; }
      .exam-doc-envelope-with-unit { display: inline-flex; align-items: baseline; gap: 3mm; white-space: nowrap; }
      .exam-doc-envelope-pair { display: inline-flex; align-items: baseline; gap: 4mm; white-space: nowrap; }
      .exam-doc-envelope-label { color: #111; font-weight: 400; }
      .exam-doc-envelope-value {
        display: inline-block; min-width: 30mm; color: #0021a6; font-weight: 700;
        border-bottom: 2px dotted #111; text-align: center; padding: 0 6mm 1mm;
      }
      .exam-doc-envelope-pair.subject .exam-doc-envelope-value { min-width: 78mm; }
      .exam-doc-envelope-pair.code .exam-doc-envelope-value { min-width: 42mm; }
      .exam-doc-envelope-pair.day .exam-doc-envelope-value { min-width: 26mm; }
      .exam-doc-envelope-pair.month .exam-doc-envelope-value { min-width: 48mm; }
      .exam-doc-envelope-pair.year .exam-doc-envelope-value { min-width: 44mm; }
      .exam-doc-envelope-pair.time .exam-doc-envelope-value { min-width: 58mm; }
      .exam-doc-envelope-pair.class-name .exam-doc-envelope-value { min-width: 38mm; }
      .exam-doc-envelope-pair.count .exam-doc-envelope-value { min-width: 22mm; }
      .exam-doc-envelope-pair.teacher-name .exam-doc-envelope-value { min-width: 142mm; }
      .exam-doc-envelope-row.compact .exam-doc-envelope-value { padding-left: 4mm; padding-right: 4mm; }
      .exam-doc-envelope-row.compact .exam-doc-envelope-pair.class-name .exam-doc-envelope-value { min-width: 34mm; }
      .exam-doc-envelope-row.compact .exam-doc-envelope-pair.count .exam-doc-envelope-value { min-width: 18mm; }
      .exam-doc-page-break { break-before: page; page-break-before: always; }
      @media print {
        @page { size: ${defaultPageSize}; margin: 5mm; }
        @page exam-doc-landscape { size: A4 landscape; margin: 5mm; }
        html, body { width: auto; height: auto; min-width: 0; margin: 0 !important; padding: 0 !important; background: #fff !important; overflow: visible; font-size: 11pt; }
        body * { visibility: hidden !important; }
        #exam-doc-print-area, #exam-doc-print-area * { visibility: visible !important; }
        #exam-doc-print-area { position: static; width: auto; background: #fff; }
        .exam-doc-paper { width: 200mm; min-height: 0; height: 287mm; margin: 0; padding: 0; box-shadow: none; break-after: page; page-break-after: always; overflow: hidden; }
        .exam-doc-page-break { break-before: auto; page-break-before: auto; }
        .exam-doc-header { margin-bottom: 6px; }
        .exam-doc-header img { width: 60px; height: 60px; }
        .exam-doc-header h2 { font-size: 18pt; }
        .exam-doc-info { gap: 3px; margin-bottom: 6px; }
        .exam-doc-info > div { gap: 6px 10px; }
        .exam-doc-field { min-width: 110px; }
        .exam-doc-field.wide { flex-basis: 260px; }
        .exam-doc-columns { gap: 6px; margin-top: 7px; }
        .exam-doc-columns > div { min-width: 0; }
        .exam-doc-table { margin: 6px 0 8px; }
        .exam-doc-table th, .exam-doc-table td { font-size: 11pt; line-height: 1.12; padding: 2px 3px; }
        .exam-doc-table th:nth-child(1), .exam-doc-table td:nth-child(1) { width: 28px; }
        .exam-doc-table th:nth-child(2), .exam-doc-table td:nth-child(2) { width: 62px; }
        .exam-doc-table th:nth-child(4), .exam-doc-table td:nth-child(4) { width: 56px; }
        .exam-doc-paper.sign-list { display: flex; flex-direction: column; }
        .exam-doc-paper.sign-list .exam-doc-columns { flex: 1 1 auto; min-height: 0; align-items: stretch; }
        .exam-doc-paper.sign-list .exam-doc-columns > div { display: flex; min-height: 0; }
        .exam-doc-paper.sign-list .exam-doc-table { height: 100%; margin: 6px 0 6px; }
        .exam-doc-paper.sign-list .exam-doc-table td { height: auto; }
        .exam-doc-paper.sign-list .exam-doc-signature { flex: 0 0 auto; }
        .exam-doc-row-height { height: 11mm; }
        .exam-doc-signature { margin-top: 6px; }
        .exam-doc-signature-lines { gap: 7px; }
        .exam-doc-paper.landscape {
          page: exam-doc-landscape; width: 287mm; height: 200mm; min-height: 0; padding: 0; overflow: hidden;
          display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
        }
        .exam-doc-envelope-sheet { width: 100%; height: 100%; padding: 17mm 0 0; }
        .exam-doc-envelope-title { font-size: 38pt; margin: 0 0 14mm; }
        .exam-doc-envelope-info { gap: 7mm; font-size: 26pt; }
        .exam-doc-paper:last-child { break-after: auto; page-break-after: auto; }
      }
    </style>
    <div id="exam-doc-print-area" class="${areaClass.trim()}">
    ${includePortrait ? `
    ${Array.from({ length: signPageCount }, (_, idx) => _studentSignPage(students, idx, labels, data, form, dirClass)).join('')}

    <div class="exam-doc-paper ${dirClass} exam-doc-page-break">
      ${_header(labels.examCoverTitle)}
      ${_infoBlock(labels, data, form)}
      ${_summaryCounts(labels, total, form.examAmount)}
      ${_absentTable(labels)}
      ${_signature(labels, form)}
    </div>

    <div class="exam-doc-paper ${dirClass} exam-doc-page-break">
      ${_header(labels.absentTitle)}
      ${_infoBlock(labels, data, form)}
      ${_absentTable(labels)}
      ${_signature(labels, form)}
    </div>
    ` : ''}

    ${includeEnvelope ? `
    <div class="exam-doc-paper ${dirClass} landscape ${includePortrait ? 'exam-doc-page-break' : ''}">
      <div class="exam-doc-envelope-sheet">
        <div class="exam-doc-envelope-title">${_htmlEsc(labels.envelopeTitle)}</div>
        <div class="exam-doc-envelope-info">
          <div class="exam-doc-envelope-row">
            ${_envelopePair(labels.envelopeSubject, data.subjectName, 'subject')}
            ${_envelopePair(labels.subjectCode, data.subjectCode, 'code')}
          </div>
          <div class="exam-doc-envelope-row">
            ${_envelopePair(labels.envelopeDate, parts.day, 'day')}
            ${_envelopePair(labels.envelopeMonth, parts.month, 'month')}
            ${_envelopePair(labels.envelopeYear, parts.year, 'year')}
          </div>
          <div class="exam-doc-envelope-row">
            ${_envelopePair(labels.envelopeTime, _envelopeTime(form.startTime, labels), 'time')}
            ${_envelopePair(labels.envelopeTo, _envelopeTime(form.endTime, labels), 'time')}
          </div>
          <div class="exam-doc-envelope-row compact">
            ${_envelopePair(labels.envelopeClass, data.className, 'class-name')}
            <span class="exam-doc-envelope-with-unit">${_envelopePair(labels.envelopeStudents, String(total), 'count')}<span>${_htmlEsc(labels.studentUnit)}</span></span>
            <span class="exam-doc-envelope-with-unit">${_envelopePair(labels.examAmount, examAmount, 'count')}<span>${_htmlEsc(labels.examUnit)}</span></span>
          </div>
          <div class="exam-doc-envelope-row">
            ${_envelopePair(labels.envelopeTeacher, data.teacherName, 'teacher-name')}
          </div>
        </div>
      </div>
    </div>
    ` : ''}
    </div>`
}

const _openExamPrintWindow = () => {
  const html = `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${_buildPrintHtml('all')}
  <script>
    window.addEventListener('load', () => setTimeout(() => window.print(), 150));
  </script>
</body>
</html>`
  const win = window.open('', '_blank')
  if (!win) {
    showToast('เบราว์เซอร์บล็อกหน้าพิมพ์ กรุณาอนุญาต popup แล้วลองใหม่', 'warning')
    return
  }
  win.document.open()
  win.document.write(html)
  win.document.close()
}

const _selectedClassMeta = () => {
  const cls = _state.selectedClass
  const ms = _classSubject(cls)
  if (!cls) return 'ยังไม่ได้เลือกห้องเรียน'
  return `${ms.subject_code || '-'} · ${ms.subject_name || '-'} · ${cls.class_name || '-'}`
}

function _renderShell() {
  const f = _state.form
  const classOptions = _state.classes.map(c => {
    const ms = _classSubject(c)
    const label = `${ms.subject_code || '-'} · ${ms.subject_name || '-'} · ${c.class_name || '-'}`
    return `<option value="${c.id}" ${String(f.classId) === String(c.id) ? 'selected' : ''}>${_htmlEsc(label)}</option>`
  }).join('')

  setContent(`
    <div class="animate-fade space-y-5">
      <style>
        .exam-doc-control-card { border-radius: 16px; border: 1px solid #e5e7eb; background: #fff; box-shadow: 0 8px 22px rgba(15, 23, 42, .06); }
        .exam-doc-preview-wrap { overflow-x: auto; padding: 14px; border-radius: 16px; background: #f8fafc; border: 1px solid #e5e7eb; }
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
            <select id="exam-class-id" class="${SELECT_CLS}">
              <option value="">เลือกห้องเรียน</option>
              ${classOptions}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${SELECT_CLS}">
              ${Object.values(LANGS).map(l => `<option value="${l.key}" ${f.lang === l.key ? 'selected' : ''}>${_htmlEsc(l.label)}</option>`).join('')}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <select id="exam-type" class="${SELECT_CLS}">
              ${EXAM_TYPE_OPTIONS.map(type => `
                <option value="${_htmlEsc(type)}" ${f.examType === type ? 'selected' : ''}>${_htmlEsc(type)}</option>
              `).join('')}
            </select>
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${INPUT_CLS}" value="${_htmlEsc(f.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${INPUT_CLS}" value="${_htmlEsc(f.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${INPUT_CLS}" value="${_htmlEsc(f.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${INPUT_CLS}" value="${_htmlEsc(f.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${INPUT_CLS}" value="${_htmlEsc(f.endTime)}">
            </label>
          </div>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${INPUT_CLS}" value="${_htmlEsc(f.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${INPUT_CLS}" value="${_htmlEsc(f.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${INPUT_CLS}" value="${_htmlEsc(f.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${INPUT_CLS}" value="${_htmlEsc(f.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${INPUT_CLS}" value="${_htmlEsc(f.invigilator1)}">
          </label>
          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${INPUT_CLS}" value="${_htmlEsc(f.invigilator2)}">
          </label>
        </div>

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${_htmlEsc(_selectedClassMeta())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${_state.students.length} คน</span>
          ${_state.loadingStudents ? `<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>` : ''}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${_buildPrintHtml()}</div>
      </section>
    </div>`)

  _bind()
}

async function _loadStudentsForSelectedClass() {
  const classId = _state.form.classId
  _state.selectedClass = _state.classes.find(c => String(c.id) === String(classId)) || null
  _state.students = []
  if (!classId) return
  _state.loadingStudents = true
  _renderShell()
  try {
    _state.students = _sortStudents(await getClassStudents(classId))
  } catch (e) {
    console.error(e)
    showToast('โหลดรายชื่อนักเรียนไม่สำเร็จ: ' + (e.message || ''), 'error')
  } finally {
    _state.loadingStudents = false
  }
}

function _readForm() {
  _state.form = {
    classId: document.getElementById('exam-class-id')?.value || '',
    lang: document.getElementById('exam-lang')?.value || 'th',
    examType: document.getElementById('exam-type')?.value || '',
    semester: document.getElementById('exam-semester')?.value || '',
    academicYear: document.getElementById('exam-year')?.value || '',
    examDate: document.getElementById('exam-date')?.value || '',
    startTime: document.getElementById('exam-start')?.value || '',
    endTime: document.getElementById('exam-end')?.value || '',
    classPart: document.getElementById('exam-class-part')?.value || '',
    periodPart: document.getElementById('exam-period-part')?.value || '',
    examRoom: document.getElementById('exam-room')?.value || '',
    examAmount: document.getElementById('exam-amount')?.value || '',
    invigilator1: document.getElementById('exam-invigilator-1')?.value || '',
    invigilator2: document.getElementById('exam-invigilator-2')?.value || '',
  }
  _state.selectedClass = _state.classes.find(c => String(c.id) === String(_state.form.classId)) || null
  _saveDraft()
}

function _updatePreviewOnly() {
  const area = document.getElementById('exam-doc-preview-area')
  if (area) area.innerHTML = _buildPrintHtml()
}

function _ensureClassSelectedBeforePrint() {
  _readForm()
  _updatePreviewOnly()
  if (!_state.form.classId) {
    showToast('กรุณาเลือกห้องเรียนก่อนพิมพ์', 'warning')
    return false
  }
  return true
}

function _bind() {
  const redrawFields = [
    'exam-lang', 'exam-type', 'exam-semester', 'exam-year', 'exam-date',
    'exam-start', 'exam-end', 'exam-amount', 'exam-room', 'exam-period-part',
    'exam-class-part', 'exam-invigilator-1', 'exam-invigilator-2',
  ]
  redrawFields.forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      _readForm()
      _updatePreviewOnly()
    })
    document.getElementById(id)?.addEventListener('change', () => {
      _readForm()
      _updatePreviewOnly()
    })
  })

  document.getElementById('exam-class-id')?.addEventListener('change', async () => {
    _readForm()
    _saveDraft()
    await _loadStudentsForSelectedClass()
    _renderShell()
  })

  document.getElementById('exam-doc-refresh')?.addEventListener('click', async () => {
    _readForm()
    await _loadStudentsForSelectedClass()
    _renderShell()
    showToast('รีเฟรชรายชื่อแล้ว', 'success')
  })

  document.getElementById('exam-doc-print')?.addEventListener('click', () => {
    if (_ensureClassSelectedBeforePrint()) _openExamPrintWindow()
  })
}

export async function renderExamDocuments(teacher) {
  setActiveNav('exam-docs')
  setTitle('เอกสารช่วงสอบ', 'exam-docs')
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`)

  try {
    const [classes, cfg] = await Promise.all([
      getMyClasses(teacher?.id ?? null),
      getSystemConfig().catch(() => ({})),
    ])
    const draft = _loadDraft()
    _state = {
      teacher,
      classes,
      students: [],
      selectedClass: null,
      loadingStudents: false,
      form: {
        ...DEFAULT_FORM,
        semester: String(cfg.semester || DEFAULT_FORM.semester || ''),
        academicYear: String(cfg.academicYear || DEFAULT_FORM.academicYear || ''),
        examDate: _dateInputToday(),
        invigilator1: teacher?.full_name || '',
        ...draft,
      },
    }
    if (!EXAM_TYPE_OPTIONS.includes(_state.form.examType)) {
      _state.form.examType = DEFAULT_FORM.examType
    }
    _state.selectedClass = _state.classes.find(c => String(c.id) === String(_state.form.classId)) || null
    await _loadStudentsForSelectedClass()
    _renderShell()
  } catch (e) {
    console.error(e)
    setContent(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${_htmlEsc(e.message || '')}
    </div>`)
  }
}
