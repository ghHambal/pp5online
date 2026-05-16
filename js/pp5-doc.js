import {
  getSystemConfig, getClassStudents, getClassAttendanceAll,
  getScoreColumns, getStudentScores, getCourseDocPage2,
  getHomeroomTeachers, getDepartments, getTeacherById,
} from './api.js'
import { showToast } from './ui.js'
import { supabase } from './supabase.js'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function _esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

function _parseDateOnly(s) {
  if (!s) return null
  const [y,m,d] = String(s).split('-').map(Number)
  if (!y || !m || !d) return null
  return new Date(y, m - 1, d)
}

function _dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}

function _fmtDateTH(dateStr) {
  if (!dateStr) return ''
  const [y,m,d] = String(dateStr).split('-').map(Number)
  if (!y) return dateStr
  const thY = (y + 543) % 100
  return `${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}/${String(thY).padStart(2,'0')}`
}

function _thYear(y) { return (y ?? 0) + 543 }

function _generateSessions(classData, credit) {
  const perWeek = Math.round((credit ?? 1) * 2)
  const total   = Math.round((credit ?? 1) * 2 * 20)
  const bases   = ['day1_date','day2_date','day3_date','day4_date','day5_date','day6_date']
    .map(k => classData[k]).filter(Boolean).slice(0, perWeek)
    .map(s => _parseDateOnly(s)).filter(Boolean)
  if (!bases.length) return []
  const sessions = []
  let week = 0
  while (sessions.length < total) {
    for (const base of bases) {
      if (sessions.length >= total) break
      const d = new Date(base)
      d.setDate(d.getDate() + week * 7)
      sessions.push({ n: sessions.length + 1, date: d, ds: _dateKey(d) })
    }
    week++
  }
  return sessions
}

function _configPrefix(subjectGroup) {
  return ['ACDMVOC','AGMVOC'].includes(subjectGroup) ? 'porwor' : 'samai'
}

// ตัดชื่อห้องเหลือแค่ระดับชั้น เช่น "ม.5/6 Ash-Shafi'i" → "ม.5/6"
function _shortRoom(name) {
  return String(name ?? '').split(' ')[0]
}

// หาห้องที่มีนักเรียนเยอะที่สุด (ใช้ได้กับทั้ง main_room และ religion_room)
function _dominantRoom(students, field) {
  const counts = {}
  for (const st of students) {
    const r = st[field]
    if (r) counts[r] = (counts[r] ?? 0) + 1
  }
  let best = null, bestN = 0
  for (const [room, n] of Object.entries(counts)) {
    if (n > bestN) { bestN = n; best = room }
  }
  return best
}
function _dominantReligionRoom(students) { return _dominantRoom(students, 'religion_room') }
function _dominantMainRoom(students)     { return _dominantRoom(students, 'main_room') }

function _calcGrade(pct) {
  if (pct >= 80) return 4
  if (pct >= 75) return 3.5
  if (pct >= 70) return 3
  if (pct >= 65) return 2.5
  if (pct >= 60) return 2
  if (pct >= 55) return 1.5
  if (pct >= 50) return 1
  return 0
}

function _evalLabel(pct) {
  if (pct >= 80) return 'ดีเยี่ยม'
  if (pct >= 65) return 'ดี'
  if (pct >= 50) return 'ผ่าน'
  return 'ไม่ผ่าน'
}

// ─── Data Loader ──────────────────────────────────────────────────────────────

async function _loadDocData(classId) {
  // โหลด cfg ก่อนเพื่อเอา year/semester
  const cfg = await getSystemConfig()
  const academicYear = parseInt(cfg.academicYear ?? cfg.academic_year ?? 2568)
  const semester     = parseInt(cfg.semester ?? 1)

  const { data: cls, error: clsErr } = await supabase
    .from('classes')
    .select(`
      id, course_id, class_name, skill_group, google_sheet_id,
      head_student_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id ),
      students ( full_name, student_code )
    `)
    .eq('id', classId)
    .single()
  if (clsErr || !cls) throw new Error('โหลดข้อมูลห้องเรียนไม่สำเร็จ')

  const ms     = cls.master_subjects ?? {}
  const credit = ms.credit ?? 1
  const prefix = _configPrefix(ms.subject_group)

  const [students, attRows, scoreColumns, scores, depts, homerooms] = await Promise.all([
    getClassStudents(classId),
    getClassAttendanceAll(classId),
    getScoreColumns(classId),
    getStudentScores(classId),
    getDepartments(),
    getHomeroomTeachers(academicYear, semester).catch(() => []),
  ])

  const teacher = ms.teacher_id
    ? await getTeacherById(ms.teacher_id).catch(() => null)
    : null

  // ms.dept เก็บ dept_code → ค้นหาด้วย dept_code ก่อน แล้ว fallback dept_name
  const dept = depts.find(d => d.dept_code === ms.dept) ?? depts.find(d => d.dept_name === ms.dept) ?? null

  const courseDoc = ms.id
    ? await getCourseDocPage2(ms.id).catch(() => null)
    : null

  const sessions = _generateSessions(cls, credit)

  // attendance map: { studentId: { sessionNum: status } }
  const attMap = {}
  for (const r of attRows) {
    if (!attMap[r.student_id]) attMap[r.student_id] = {}
    attMap[r.student_id][r.session_number] = r.status
  }

  // score map: { studentId: { columnId: score } }
  const scoreMap = {}
  for (const r of scores) {
    if (!scoreMap[r.student_id]) scoreMap[r.student_id] = {}
    scoreMap[r.student_id][r.score_column_id] = r.score
  }

  // homeroom advisors
  const isRelSubject = ['AGM','AGMVOC'].includes(ms.subject_group)
  const classRoom    = _shortRoom(cls.class_name)
  const domMainRoom  = _dominantMainRoom(students)
  const domRelRoom   = _dominantReligionRoom(students)

  let hrSamai, hrReligion
  if (isRelSubject) {
    // วิชาศาสนา: ครูศาสนา = ห้องของชั้นนั้น, ครูสามัญ = dominant main_room ของนักเรียน
    hrReligion = homerooms.find(h => h.category === 'ศาสนา' && h.main_room === classRoom) ?? null
    hrSamai    = domMainRoom ? homerooms.find(h => h.category !== 'ศาสนา' && h.main_room === domMainRoom) ?? null : null
  } else {
    // วิชาสามัญ: ครูสามัญ = ห้องของชั้นนั้น (fallback dominant), ครูศาสนา = dominant religion_room
    hrSamai    = homerooms.find(h => h.category !== 'ศาสนา' && h.main_room === classRoom)
                  ?? (domMainRoom ? homerooms.find(h => h.category !== 'ศาสนา' && h.main_room === domMainRoom) : null)
                  ?? null
    hrReligion = domRelRoom ? homerooms.find(h => h.category === 'ศาสนา' && h.main_room === domRelRoom) ?? null : null
  }

  const deptNameTH = dept?.dept_name ?? ms.dept ?? ''
  return { cls, ms, credit, prefix, cfg, students, attMap, scoreColumns, scoreMap, teacher, dept, deptNameTH, courseDoc, sessions, hrSamai, hrReligion, academicYear, semester }
}

// ─── CSS ──────────────────────────────────────────────────────────────────────

function _getCSS() {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Sarabun', sans-serif; font-size: 10pt; color: #000; background: #fff; }

    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 12mm 12mm 12mm 18mm;
      page-break-after: always;
      position: relative;
    }
    .page-tight {
      width: 210mm;
      min-height: 297mm;
      padding: 8mm 8mm 8mm 8mm;
      page-break-after: always;
      position: relative;
    }
    .page:last-child, .page-tight:last-child, .score-wrap:last-child { page-break-after: avoid; }

    @media print {
      @page { size: A4 portrait; margin: 0; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display: none !important; }
    }

    table { border-collapse: collapse; width: 100%; }
    td, th { border: 1px solid #000; padding: 2px 3px; vertical-align: middle; }
    th { font-weight: 600; text-align: center; }

    .text-center { text-align: center; }
    .text-right  { text-align: right; }
    .font-bold   { font-weight: 700; }

    /* ── Page 1 — absolute mm layout (ported from reference HTML) ── */
    .page-p1 {
      position: relative; width: 210mm; height: 297mm;
      padding: 0; page-break-after: always; overflow: hidden;
    }
    .page-p1 .doc-code {
      position: absolute; top: 24.5mm; right: 31.5mm;
      font-size: 12pt; font-weight: 400;
    }
    .page-p1 .logo-wrap {
      position: absolute; top: 17.6mm; left: 50%;
      transform: translateX(-50%);
      width: 18.5mm; height: 18.5mm;
      border-radius: 50%; overflow: hidden;
      background: #fff;
      display: flex; align-items: center; justify-content: center;
    }
    .page-p1 .logo-wrap img {
      width: 100%; height: 100%; object-fit: contain; display: block;
    }
    .page-p1 .p1-title {
      position: absolute; top: 40.1mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 15.7pt; font-weight: 700; line-height: 1.05;
    }
    .page-p1 .level-row {
      position: absolute; top: 48.9mm; left: 0; width: 100%;
      font-size: 10.1pt; font-weight: 600;
    }
    .page-p1 .level-row .lbl {
      position: absolute; top: 0; text-align: left; white-space: nowrap;
    }
    .page-p1 .checks {
      position: absolute; top: -.15mm;
      display: grid; gap: .9mm; font-size: 9.4pt; font-weight: 600;
    }
    .page-p1 .check-line { display: flex; align-items: center; gap: 2.3mm; white-space: nowrap; }
    .page-p1 .box {
      position: relative; display: inline-block;
      width: 4.5mm; height: 4.5mm;
      border: .52mm solid #111; border-radius: .6mm;
      vertical-align: middle; flex: 0 0 auto;
    }
    .page-p1 .box.checked { background: #111; }
    .page-p1 .box.checked::after {
      content: ""; position: absolute;
      left: 3px; top: .2mm; width: 1.5mm; height: 2.8mm;
      border: solid #fff; border-width: 0 .52mm .52mm 0; transform: rotate(45deg);
    }
    .page-p1 .school {
      position: absolute; top: 72mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 24pt; line-height: 1.15; font-weight: 700;
    }
    .page-p1 .school-sub {
      position: absolute; top: 84.2mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 20pt; line-height: 1.15; font-weight: 700;
    }
    .page-p1 .info {
      position: absolute; top: 94.6mm; left: 17.7mm; width: 174.7mm;
      font-size: 10.5pt; font-weight: 600;
    }
    .page-p1 .info-line {
      display: flex; align-items: flex-end; gap: 2.6mm;
      margin-bottom: 1.45mm; white-space: nowrap;
    }
    .page-p1 .info-row-one {
      display: grid; grid-template-columns: 32mm 1fr;
      align-items: end; margin-bottom: 1.45mm;
    }
    .page-p1 .uline {
      display: inline-block; min-height: 5.2mm;
      border-bottom: .35mm dotted #777;
      text-align: center; line-height: 5mm;
      padding: 0 1.5mm; font-weight: 600; white-space: nowrap;
    }
    .page-p1 .uline-xl { display: block; min-height: 5.2mm; border-bottom: .35mm dotted #777; text-align: left; padding-left: 4mm; line-height: 5mm; font-weight: 600; }
    .page-p1 .w-xs  { width: 17mm; } .page-p1 .w-sm  { width: 24mm; }
    .page-p1 .w-md  { width: 33mm; } .page-p1 .w-lg  { width: 48mm; }
    .page-p1 .w-yr  { width: 35mm; } .page-p1 .w-cd  { width: 25mm; }

    .page-p1 .summary-box {
      position: absolute; top: 139.9mm; left: 17.7mm; width: 174.7mm;
      border: .75mm solid #111;
    }
    .page-p1 .summary-box table { width: 100%; border-collapse: collapse; table-layout: fixed; }
    .page-p1 .summary-box th, .page-p1 .summary-box td {
      border: 1.5px solid #111; padding: .8mm 1mm;
      text-align: center; vertical-align: middle; font-size: 10.5pt; font-weight: 600;
    }
    .page-p1 .summary-box tr:first-child th { border-top: 0; }
    .page-p1 .summary-box tr > *:first-child { border-left: 0; }
    .page-p1 .summary-box tr > *:last-child  { border-right: 0; }
    .page-p1 .summary-box tr:last-child td,
    .page-p1 .summary-box tr:last-child th   { border-bottom: 0; }
    .page-p1 .col-tot { width: 18.8mm; } .page-p1 .col-g   { width: 10.65mm; }
    .page-p1 .col-gs  { width: 14.5mm; } .page-p1 .col-note{ width: 39mm; }
    .page-p1 .col-elbl{ width: 46.5mm; }
    .page-p1 .grade-table th, .page-p1 .grade-table td { height: 6.25mm; }
    .page-p1 .grade-table tr:first-child th { height: 7.1mm; }
    .page-p1 .stitle  { font-size: 10.2pt; }
    .page-p1 .evspc   { height: 6.35mm; border-left: 0 !important; border-right: 0 !important; }
    .page-p1 .eval-table tr:first-child th { border-top: 1.5px solid #111; }
    .page-p1 .eval-table th, .page-p1 .eval-table td { height: 9.35mm; }

    .page-p1 .approval {
      position: absolute; top: 208.1mm; left: 17.7mm;
      width: 174.7mm; height: 72.7mm;
      border: .75mm solid #111; padding: 3.8mm 5.5mm 3.5mm;
      font-size: 10.4pt; font-weight: 600;
    }
    .page-p1 .apl-title { margin-bottom: 3mm; font-size: 10.6pt; font-weight: 700; }
    .page-p1 .sig-row {
      display: grid; grid-template-columns: 13mm 1fr 52mm;
      align-items: end; gap: 1.4mm; margin-bottom: .55mm;
    }
    .page-p1 .sig-line {
      display: block; border-bottom: .35mm dotted #777;
      text-align: center; line-height: 5mm; min-height: 5.2mm; font-weight: 700;
    }
    .page-p1 .consider { margin-top: 3.2mm; font-weight: 700; }
    .page-p1 .ctr-block { margin: 1.8mm auto 0; width: 66%; text-align: center; }
    .page-p1 .ctr-sig {
      display: grid; grid-template-columns: 12mm 1fr;
      align-items: end; gap: 5px; margin: 0 auto; width: 100%;
    }
    .page-p1 .p1-role { margin-top: .6mm; }
    .page-p1 .decision {
      display: flex; justify-content: center; gap: 12mm;
      align-items: center; margin-top: 2mm; font-size: 11.5pt;
    }
    .page-p1 .decision .box { width: 5.8mm; height: 5.8mm; border-color: #888; border-width: .65mm; }
    .page-p1 .decision .box.checked { background: #888; }
    .page-p1 .director { margin-top: 2mm; }

    /* ── Page 2 ── */
    .p2-wrap { width: 210mm; min-height: 297mm; padding: 10mm 14mm 10mm 14mm; page-break-after: always; display: flex; flex-direction: column; }
    .p2-logo-wrap { width: 18mm; height: 18mm; border-radius: 50%; overflow: hidden; background: #fff; margin: 0 auto 2mm; display: flex; align-items: center; justify-content: center; }
    .p2-logo-wrap img { width: 100%; height: 100%; object-fit: contain; display: block; }
    .p2-title { text-align: center; font-size: 13pt; font-weight: 700; margin-bottom: 2mm; }
    .p2-hdr { font-size: 9.5pt; margin-bottom: 2mm; display: grid; grid-template-columns: 1fr 1fr; gap: 0 5mm; }
    .p2-hdr-col { display: flex; flex-direction: column; gap: 1.2mm; }
    .p2-hdr-row { display: flex; align-items: baseline; gap: 1mm; }
    .p2-label { flex-shrink: 0; white-space: nowrap; }
    .p2-uline { display: inline-block; border-bottom: .3mm dashed #555; min-width: 8mm; text-align: center; padding: 0 1mm; font-weight: 600; flex-shrink: 0; }
    .p2-uline-fill { flex: 1; min-width: 15mm; }
    .std-table { width: 100%; border-collapse: collapse; flex: 1; height: 0; }
    .std-table th { font-size: 10pt; padding: 1.5mm 2mm; border: .4mm solid #000; text-align: center; font-weight: 700; }
    .std-table td { border: .4mm solid #000; padding: 0 2mm; vertical-align: top; font-size: 9.5pt; }
    .std-table td:first-child { width: 32mm; }
    .std-table td.std-row { height: 7mm; }
    .std-fill-row { height: 100%; }
    .std-fill-row td {
      border: .4mm solid #000;
      background-image: repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent calc(7mm - .4mm),
        #000 calc(7mm - .4mm),
        #000 7mm
      );
      background-size: 100% 7mm;
      background-origin: border-box;
    }
    .p2-footer { display: flex; gap: 6mm; margin-top: 3mm; font-size: 9pt; }
    .p2-obj { flex: 0 0 auto; width: 60mm; }
    .p2-obj p { margin-bottom: 1mm; }
    .p2-obj u { min-width: 18mm; display: inline-block; text-align: center; text-decoration: none; border-bottom: .3mm dashed #555; }
    .p2-char { flex: 1; }
    .p2-char-title { font-weight: 700; margin-bottom: 1mm; }
    .p2-char-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 2mm; font-size: 8.5pt; }
    .p2-sig { text-align: right; margin-top: 3mm; font-size: 9.5pt; }

    /* ── Page 3 attendance ── */
    .att-top   { display: flex; align-items: flex-start; gap: 3mm; margin-bottom: 2mm; }
    .att-logo  { width: 18mm; height: 18mm; flex-shrink: 0; border-radius: 50%; overflow: hidden; background: #fff; display: flex; align-items: center; justify-content: center; }
    .att-logo img { width: 100%; height: 100%; object-fit: contain; }
    .att-info  { flex: 1; font-size: 9pt; }
    .att-title { font-weight: 700; font-size: 10pt; text-align: center; margin-bottom: 1.5mm; }
    .att-hdr-row { display: flex; align-items: baseline; gap: 1.5mm; margin-bottom: 1mm; }
    .att-hdr-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 5mm; margin-bottom: 1mm; }
    .att-hdr-col { display: flex; align-items: baseline; gap: 1mm; }
    .att-label { flex-shrink: 0; white-space: nowrap; }
    .att-uline { display: inline-block; border-bottom: .3mm dashed #555; min-width: 8mm; text-align: center; padding: 0 1mm; font-weight: 600; flex-shrink: 0; }
    .att-uline-fill { flex: 1; min-width: 15mm; }
    .att-table  { table-layout: fixed; font-size: 6.5pt; width: 100%; border-collapse: collapse; }
    .att-table th { padding: 1px 2px; font-size: 6.5pt; border: .4mm solid #000; }
    .att-table td { padding: 0; font-size: 6.5pt; text-align: center; border: .3mm solid #000; height: 5.5mm; }
    .att-name  { text-align: left !important; font-size: 7pt; padding-left: 1mm !important; white-space: nowrap; overflow: hidden; }
    .att-code  { font-size: 6.5pt; }
    .att-desc  { font-size: 6pt; font-weight: normal; line-height: 1.3; }
    .att-absent { color: #c00; font-weight: 700; }
    .att-leave  { color: #00c; font-weight: 700; }
    .att-sick   { color: #c60; font-weight: 700; }

    /* ── Page 4 scores ── */
    .score-wrap { width: 210mm; min-height: 297mm; padding: 16mm 10mm 12mm; page-break-after: always; }
    .score-top-info { display: grid; grid-template-columns: 1.25fr .95fr .75fr .75fr .9fr; gap: 5mm; align-items: end; font-size: 10px; font-weight: 700; line-height: 1; margin-bottom: 2mm; }
    .sc-field { display: flex; align-items: end; white-space: nowrap; gap: 2mm; }
    .sc-field .sc-lbl { flex: 0 0 auto; }
    .sc-field .sc-val { flex: 1 1 auto; min-width: 18mm; text-align: center; border-bottom: 1px dotted #000; padding: 0 1mm 1px; font-weight: 700; }
    .grade-sheet { width: 100%; border-collapse: collapse; table-layout: fixed; border: 2px solid #000; font-size: 10px; line-height: 1.05; }
    .grade-sheet th, .grade-sheet td { border: 1px solid #000; padding: 1px 2px; text-align: center; vertical-align: middle; height: var(--row-h, 5.8mm); overflow: hidden; }
    .grade-sheet th { font-weight: 700; }
    .grade-sheet .gs-name { text-align: left; padding-left: 2mm; }
    .grade-sheet .v { height: 25mm !important; padding: 0; overflow: visible; }
    .grade-sheet .v > span { writing-mode: vertical-rl; transform: rotate(180deg); display: inline-block; white-space: nowrap; line-height: 1; font-size: 9px; overflow: visible; }
    .grade-sheet .gs-small { font-size: 9px; }
    .grade-sheet .score-full { font-size: 10px; height: 4.5mm !important; }
    .grade-sheet .blank-head { background: #fff; }
    /* signature */
    .score-sig { width: 100%; margin-top: 3.5mm; padding-left: 42mm; padding-right: 4mm; font-size: 11px; font-weight: 700; line-height: 1; }
    .score-sig-row { display: grid; grid-template-columns: 16mm 1fr 44mm; column-gap: 2mm; align-items: end; height: 6.7mm; margin-bottom: .5mm; }
    .score-sig-lbl { text-align: left; padding-bottom: .7mm; }
    .score-sig-line { border-bottom: 1px dotted #000; min-height: 4mm; text-align: center; padding-bottom: .6mm; font-weight: 600; }
    .score-sig-role { text-align: left; padding-bottom: .7mm; white-space: nowrap; }

    /* ── Page 5 ── */
    .date-table th { font-size: 9pt; padding: 2px 4px; }
    .date-table td { font-size: 9pt; padding: 2px 4px; text-align: center; }
  `
}

// ─── Page 1: หน้าปก ───────────────────────────────────────────────────────────

function _buildPage1(d) {
  const { cls, ms, credit, prefix, cfg, students, scoreColumns, scoreMap, teacher, dept, deptNameTH, hrSamai, hrReligion, academicYear, semester } = d

  const schoolName    = _esc(cfg[`${prefix}SchoolName`] ?? cfg.samaiSchoolName ?? '')
  const schoolAddress = _esc(cfg[`${prefix}SchoolAddress`] ?? cfg.samaiSchoolAddress ?? '')
  // ใช้โลโก้ขาวดำสำหรับเอกสาร
  const logoUrl = cfg[`${prefix}LogoBwUrl`] ?? cfg[`${prefix}LogoUrl`] ?? cfg.samaiLogoBwUrl ?? cfg.samaiLogoUrl ?? ''

  const dirName    = _esc(cfg[`${prefix}DirectorName`] ?? '')
  const dirSign    = cfg[`${prefix}DirectorSignUrl`] ?? ''
  const acadName   = _esc(cfg[`${prefix}AcademicHeadName`] ?? '')
  const acadSign   = cfg[`${prefix}AcademicHeadSignUrl`] ?? ''
  const regName    = _esc(cfg[`${prefix}RegistrarName`] ?? '')
  const regSign    = cfg[`${prefix}RegistrarSignUrl`] ?? ''
  const deptHeadName = _esc(dept?.head_name ?? '')
  const deptHeadSign = dept?.head_sign_url ?? ''

  const isReligion   = ['AGM','AGMVOC'].includes(ms.subject_group)
  const className    = cls.class_name ?? ''

  // ตรวจระดับชั้น
  const isHighSchool = !isReligion && (
    ['4','5','6'].some(n => (ms.grade_level ?? '').includes(n)) ||
    ['ACDMVOC'].includes(ms.subject_group)
  )
  // ระดับชั้นศาสนา: PR=ตอนต้น, อก.=ตอนกลาง, อป.=ตอนปลาย
  const relLevel = isReligion
    ? (className.startsWith('PR') ? 'PR'
      : className.startsWith('อก') ? 'อก'
      : className.startsWith('อป') ? 'อป' : '')
    : ''

  const totalHrsPerWeek = credit * 2
  const totalHrs        = credit * 2 * 20

  // compute grade distribution
  const maxTotal = scoreColumns.reduce((s, c) => s + (c.max_score ?? 0), 0)
  const gradeCounts = { 4:0, '3.5':0, 3:0, '2.5':0, 2:0, '1.5':0, 1:0, 0:0 }
  const evalReadCount  = { ดีเยี่ยม:0, ดี:0, ผ่าน:0, ไม่ผ่าน:0 }
  const evalCharCount  = { ดีเยี่ยม:0, ดี:0, ผ่าน:0, ไม่ผ่าน:0 }
  const readCol  = scoreColumns.find(c => (c.assignment_name ?? '').includes('อ่าน'))
  const charCol  = scoreColumns.find(c => (c.assignment_name ?? '').includes('คุณลักษณะ') || (c.assignment_name ?? '').includes('จิตพิสัย'))

  for (const st of students) {
    const stScores = scoreMap[st.id] ?? {}
    const total = scoreColumns.reduce((s, c) => s + (stScores[c.id] ?? 0), 0)
    if (maxTotal > 0) {
      const pct = (total / maxTotal) * 100
      const g   = _calcGrade(pct)
      const key = String(g)
      if (key in gradeCounts) gradeCounts[key]++
    }
    if (readCol) {
      const rs = stScores[readCol.id]
      if (rs != null) {
        const lbl = _evalLabel((rs / (readCol.max_score || 1)) * 100)
        evalReadCount[lbl]++
      }
    }
    if (charCol) {
      const cs = stScores[charCol.id]
      if (cs != null) {
        const lbl = _evalLabel((cs / (charCol.max_score || 1)) * 100)
        evalCharCount[lbl]++
      }
    }
  }

  const box = (checked) => `<span class="box${checked?' checked':''}"></span>`

  // level label & checks positions
  const levelLbl  = isReligion ? 'ระดับชั้นอิสลามศึกษา' : 'ระดับชั้นมัธยมศึกษา'
  const lblLeft   = isReligion ? '76mm' : '83mm'
  const chkLeft   = isReligion ? '115mm' : '117.4mm'

  const checksHTML = isReligion ? `
    <div class="check-line">${box(relLevel==='PR')}<span>ตอนต้น (PR)</span></div>
    <div class="check-line">${box(relLevel==='อก')}<span>ตอนกลาง (อก.)</span></div>
    <div class="check-line">${box(relLevel==='อป')}<span>ตอนปลาย (อป.)</span></div>
  ` : `
    <div class="check-line">${box(!isHighSchool)}<span>ตอนต้น (ม.1-ม.3)</span></div>
    <div class="check-line">${box(isHighSchool)}<span>ตอนปลาย (ม.4-ม.6)</span></div>
  `

  const infoRow2 = isReligion ? `
    <div class="info-line">
      <span>กลุ่มสาระการเรียนรู้</span><span class="uline w-md">${_esc(deptNameTH)}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${_esc(ms.subject_code??'')}</span>
    </div>` : `
    <div class="info-line">
      <span>กลุ่มสาระการเรียนรู้</span><span class="uline w-md">${_esc(deptNameTH)}</span>
      <span>รายวิชา</span><span class="uline w-lg">${_esc(ms.subject_name??'')}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${_esc(ms.subject_code??'')}</span>
    </div>`

  const gradeRow = [4,'3.5',3,'2.5',2,'1.5',1,0].map(g=>`<td>${gradeCounts[String(g)]||''}</td>`).join('')
  const readRow  = ['ดีเยี่ยม','ดี','ผ่าน','ไม่ผ่าน'].map(k=>`<td>${evalReadCount[k]||''}</td>`).join('')
  const charRow  = ['ดีเยี่ยม','ดี','ผ่าน','ไม่ผ่าน'].map(k=>`<td>${evalCharCount[k]||''}</td>`).join('')

  return `
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${logoUrl ? `<div class="logo-wrap"><img src="${_esc(logoUrl)}" alt="ตราโรงเรียน" /></div>` : ''}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${lblLeft};">${levelLbl}</div>
      <div class="checks" style="left:${chkLeft};">${checksHTML}</div>
    </section>

    <div class="school">${schoolName}</div>
    <div class="school-sub">${schoolAddress}</div>

    <section class="info">
      <div class="info-line">
        <span>${levelLbl}</span><span class="uline w-sm">${_esc(_shortRoom(cls.class_name))}</span>
        <span>ภาคเรียนที่</span><span class="uline w-md">${semester}</span>
        <span>ปีการศึกษา</span><span class="uline w-yr">${academicYear}</span>
      </div>
      ${infoRow2}
      <div class="info-line">
        <span>จำนวน</span><span class="uline w-xs">${credit}</span>
        <span>หน่วยกิต</span>
        <span>เวลาเรียน</span><span class="uline w-xs">${totalHrsPerWeek}</span>
        <span>ชั่วโมง/สัปดาห์</span>
        <span>รวมเวลาเรียน</span><span class="uline w-xs">${totalHrs}</span>
        <span>ชั่วโมง/ภาค</span>
      </div>
      <div class="info-row-one"><span>ครูผู้สอน</span><span class="uline-xl">${_esc(teacher?.full_name??'')}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาสามัญ</span><span class="uline-xl">${_esc(hrSamai?.teachers?.full_name??'')}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาศาสนา</span><span class="uline-xl">${_esc(hrReligion?.teachers?.full_name??'')}</span></div>
    </section>

    <section class="summary-box">
      <table class="grade-table">
        <colgroup>
          <col class="col-tot"/>
          <col span="8" class="col-g"/>
          <col span="2" class="col-gs"/>
          <col class="col-note"/>
        </colgroup>
        <tr>
          <th rowspan="3">จำนวน<br>นักเรียน<br>ทั้งหมด</th>
          <th colspan="10">สรุปผลการเรียน</th>
          <th>หมายเหตุ</th>
        </tr>
        <tr>
          <th colspan="10" class="stitle">จำนวนนักเรียนที่ได้รับผลการเรียน</th>
          <td rowspan="2"></td>
        </tr>
        <tr>
          <th>4</th><th>3.5</th><th>3</th><th>2.5</th>
          <th>2</th><th>1.5</th><th>1</th><th>0</th>
          <th>ร</th><th>มส</th>
        </tr>
        <tr>
          <td>${students.length}</td>${gradeRow}<td></td><td></td><td></td>
        </tr>
        <tr><td colspan="12" class="evspc"></td></tr>
      </table>
      <table class="eval-table">
        <colgroup>
          <col class="col-elbl"/><col/><col/><col/><col/><col class="col-note"/>
        </colgroup>
        <tr>
          <th>สรุปผลการประเมิน</th>
          <th>ดีเยี่ยม</th><th>ดี</th><th>ผ่าน</th><th>ไม่ผ่าน</th><th>หมายเหตุ</th>
        </tr>
        <tr>
          <td>การประเมินการอ่าน คิด<br>วิเคราะห์และเขียนสื่อความ</td>
          ${readRow}<td></td>
        </tr>
        <tr>
          <td>การประเมินคุณลักษณะ<br>อันพึงประสงค์</td>
          ${charRow}<td></td>
        </tr>
      </table>
    </section>

    <section class="approval">
      <div class="apl-title">การอนุมัติผลการพัฒนาคุณภาพผู้เรียน</div>

      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${_esc(teacher?.full_name??'')}</span>
        <span>ครูผู้สอน</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${deptHeadName}</span>
        <span>หัวหน้าหมวดวิชา</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${regName}</span>
        <span>หัวหน้างานวัดผลและประเมินผล</span>
      </div>

      <div class="consider">เสนอเพื่อพิจารณา</div>

      <div class="ctr-block">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${acadName}</span>
        </div>
        <div class="p1-role">หัวหน้าฝ่ายบริหารวิชาการ</div>
      </div>

      <div class="decision">
        <span>${box(true)}&nbsp; อนุมัติ</span>
        <span>${box(false)}&nbsp; ไม่อนุมัติ</span>
      </div>

      <div class="ctr-block director">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${dirName}</span>
        </div>
        <div class="p1-role">ผู้อำนวยการ${schoolName}</div>
      </div>
    </section>
  </div>`
}

// ─── Page 2: มาตรฐานการเรียนรู้และตัวชี้วัด ─────────────────────────────────

function _buildPage2(d) {
  const { cls, ms, credit, cfg, courseDoc, teacher, deptNameTH, academicYear, semester, prefix } = d

  const logoUrl  = cfg[`${prefix}LogoBwUrl`] ?? cfg[`${prefix}LogoUrl`] ?? cfg.samaiLogoBwUrl ?? cfg.samaiLogoUrl ?? ''
  const cols    = Array.isArray(courseDoc?.table_columns) ? courseDoc.table_columns : ['มาตรฐานการเรียนรู้','ตัวชี้วัด']
  const rawRows = Array.isArray(courseDoc?.table_rows) ? courseDoc.table_rows : []
  // ไม่ pad แถวว่าง — ใช้ .std-fill-row ยืดเต็มพื้นที่ที่เหลือแทน
  const rows    = rawRows
  const _joinInts = (arr) => Array.isArray(arr) && arr.length ? arr.join(',') : ''
  const allObj   = _joinInts(courseDoc?.between_objective_items)
  const midObj   = _joinInts(courseDoc?.midterm_objective_items)
  const finalObj = _joinInts(courseDoc?.final_objective_items)
  const isReligion = ['AGM','AGMVOC'].includes(ms.subject_group)

  const CHAR_L = ['1 รักชาติ ศาสน์ กษัตริย์','2 ซื่อสัตย์สุจริต','3 มีวินัย','4 ใฝ่เรียนรู้','5 อยู่อย่างพอเพียง']
  const CHAR_R = ['6 มุ่งมั่นในการทำงาน','7 รักความเป็นไทย','8 มีจิตสาธารณะ','9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ']

  const uline = (v, w = '25mm') =>
    `<span class="p2-uline" style="min-width:${w};">${_esc(v)}</span>`

  const levelLbl = isReligion ? 'ระดับชั้นอิสลามศึกษา' : 'ระดับชั้น'

  return `
  <div class="p2-wrap">
    <!-- Logo + Title -->
    ${logoUrl ? `<div class="p2-logo-wrap"><img src="${_esc(logoUrl)}" alt="โลโก้"/></div>` : '<div style="height:5mm;"></div>'}
    <div class="p2-title">มาตรฐานการเรียนรู้และตัวชี้วัด/รายภาค</div>

    <!-- Header -->
    <div class="p2-hdr">
      <!-- คอลัมน์ซ้าย -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รายวิชา</span>
          <span class="p2-uline p2-uline-fill">${_esc(ms.subject_name??'')}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">${levelLbl}</span>
          <span class="p2-uline p2-uline-fill">${_esc(_shortRoom(cls.class_name??''))}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ครูผู้สอน</span>
          <span class="p2-uline p2-uline-fill">${_esc(teacher?.full_name??'')}</span>
        </div>
      </div>
      <!-- คอลัมน์ขวา -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รหัสวิชา</span>
          <span class="p2-uline">${_esc(ms.subject_code??'')}</span>
          <span class="p2-label">กลุ่มสาระการเรียนรู้</span>
          <span class="p2-uline p2-uline-fill">${_esc(deptNameTH)}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ภาคเรียนที่</span>
          <span class="p2-uline">${_esc(String(semester))}</span>
          <span class="p2-label">ปีการศึกษา</span>
          <span class="p2-uline">${_esc(String(academicYear))}</span>
          <span class="p2-label">เวลา</span>
          <span class="p2-uline p2-uline-fill"></span>
          <span class="p2-label">ชั่วโมง</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">จำนวน</span>
          <span class="p2-uline">${_esc(String(credit))}</span>
          <span class="p2-label">หน่วยกิต</span>
        </div>
      </div>
    </div>

    <!-- Standards Table -->
    <table class="std-table">
      <thead>
        <tr>
          <th style="width:32mm;">${_esc(cols[0] ?? 'มาตรฐานการเรียนรู้')}</th>
          <th>${_esc(cols[1] ?? 'ตัวชี้วัด')}</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `<tr>
          <td class="std-row">${_esc(Array.isArray(row) ? row[0] ?? '' : '')}</td>
          <td class="std-row">${_esc(Array.isArray(row) ? row[1] ?? '' : '')}</td>
        </tr>`).join('')}
        <tr class="std-fill-row">
          <td></td><td></td>
        </tr>
      </tbody>
    </table>

    <!-- Footer: Objectives + คุณลักษณะ -->
    <div class="p2-footer">
      <div class="p2-obj">
        <p>จุดประสงค์วัดผลรายจุดประสงค์ ข้อที่ <u>${allObj}</u></p>
        <p>จุดประสงค์วัดผลกลางภาค ข้อที่ <u>${midObj}</u></p>
        <p>จุดประสงค์วัดผลปลายภาค ข้อที่ <u>${finalObj}</u></p>
      </div>
      <div class="p2-char">
        <div class="p2-char-title">คุณลักษณะอันพึงประสงค์</div>
        <div class="p2-char-grid">
          <div>${CHAR_L.map(t=>`<div>${_esc(t)}</div>`).join('')}</div>
          <div>${CHAR_R.map(t=>`<div>${_esc(t)}</div>`).join('')}</div>
        </div>
      </div>
    </div>

    <!-- Signature -->
    <div class="p2-sig">
      ลงชื่อ <span style="display:inline-block;border-bottom:.3mm dashed #555;min-width:60mm;text-align:center;padding:0 2mm;">
        ${d.dept?.head_name ? _esc(d.dept.head_name) : ''}
      </span> หัวหน้ากลุ่มสาระฯ
    </div>
  </div>`
}

// ─── Page 3: บันทึกการมาเรียน ─────────────────────────────────────────────────

const ROWS_PER_ATT_PAGE = 35

function _buildPage3(d) {
  const { cls, ms, credit, cfg, students, attMap, sessions, academicYear, semester, teacher } = d
  const pages = []
  for (let i = 0; i < students.length; i += ROWS_PER_ATT_PAGE) {
    const chunk = students.slice(i, i + ROWS_PER_ATT_PAGE)
    pages.push(_buildAttPage(d, chunk, i + 1))
  }
  return pages.join('')
}

function _buildAttPage(d, chunk, startNo) {
  const { cls, ms, teacher, academicYear, semester, cfg, prefix } = d
  const logoUrl = cfg?.[`${prefix}LogoBwUrl`] ?? cfg?.[`${prefix}LogoUrl`] ?? cfg?.samaiLogoBwUrl ?? cfg?.samaiLogoUrl ?? ''
  const ATT_COLS = 40
  // คำนวณให้ 40 คอลัมน์พอดี A4 (content width ~194mm หลังหักขอบ)
  // เลขที่:6 รหัส:13 ชื่อ:36 รวม:10 → เหลือ 129mm / 40 = 3.2mm
  const COL_W = '3.2mm'

  const rows = chunk.map((st, idx) => {
    const stAtt  = d.attMap[st.id] ?? {}
    const absent = []
    for (const [sessNum, status] of Object.entries(stAtt)) {
      if (status !== 'present') absent.push({ n: parseInt(sessNum), status })
    }
    absent.sort((a, b) => a.n - b.n)
    const total = absent.length

    const cells = Array.from({length: ATT_COLS}, (_, ci) => {
      const entry = absent[ci]
      if (!entry) return '<td></td>'
      const cls2 = entry.status === 'absent' ? 'att-absent'
        : entry.status === 'leave'  ? 'att-leave'
        : entry.status === 'sick'   ? 'att-sick' : 'att-absent'
      return `<td class="${cls2}">${entry.n}</td>`
    })

    return `<tr>
      <td class="text-center">${startNo + idx}</td>
      <td class="att-code text-center">${_esc(st.student_code??'')}</td>
      <td class="att-name">${_esc(st.full_name??'')}</td>
      ${cells.join('')}
      <td class="text-center font-bold">${total || ''}</td>
    </tr>`
  })

  const colHeaders = Array.from({length: ATT_COLS}, (_, i) => `<th>${i+1}</th>`).join('')

  const legendColspan = 3 + ATT_COLS + 1

  return `
  <div class="page-tight">
    <div class="att-top">
      ${logoUrl
        ? `<div class="att-logo"><img src="${_esc(logoUrl)}" alt="โลโก้" /></div>`
        : '<div style="width:18mm;flex-shrink:0;"></div>'}
      <div class="att-info">
        <div class="att-title">บันทึกการมาเรียนของนักเรียนชั้น ${_esc(_shortRoom(cls.class_name))}</div>
        <div class="att-hdr-row">
          <span class="att-label">ปีการศึกษา</span>
          <span class="att-uline">${_esc(String(academicYear))}</span>
          <span class="att-label" style="margin-left:4mm;">ภาคเรียนที่</span>
          <span class="att-uline">${_esc(String(semester))}</span>
        </div>
        <div class="att-hdr-row2">
          <div class="att-hdr-col">
            <span class="att-label">รายวิชา</span>
            <span class="att-uline att-uline-fill">${_esc(ms.subject_name??'')}</span>
          </div>
          <div class="att-hdr-col">
            <span class="att-label">รหัสวิชา</span>
            <span class="att-uline att-uline-fill">${_esc(ms.subject_code??'')}</span>
          </div>
        </div>
        <div class="att-hdr-row">
          <span class="att-label">ครูผู้สอน</span>
          <span class="att-uline att-uline-fill">${_esc(teacher?.full_name??'')}</span>
        </div>
      </div>
    </div>
    <table class="att-table">
      <colgroup>
        <col style="width:6mm;"/>
        <col style="width:13mm;"/>
        <col style="width:36mm;"/>
        ${Array.from({length:ATT_COLS},()=>`<col style="width:${COL_W};"/>`).join('')}
        <col style="width:10mm;"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="${legendColspan}" style="text-align:left;font-weight:normal;padding:0.8mm 1mm;border-bottom:none;">
            บันทึกคาบที่สอนที่นักเรียนไม่ได้มาเรียน:&ensp;
            <span style="color:#c00;font-weight:700;">ขาด</span>&ensp;
            <span style="color:#00c;font-weight:700;">ลา</span>&ensp;
            <span style="color:#c60;font-weight:700;">ป่วย</span>
          </th>
        </tr>
        <tr>
          <th rowspan="2" style="font-size:7pt;">เลขที่</th>
          <th rowspan="2" style="font-size:7pt;">เลขประจำตัว</th>
          <th rowspan="2" style="font-size:7pt;">ชื่อ - สกุล</th>
          <th colspan="${ATT_COLS}" style="font-size:7pt;">บันทึกการไม่มาเรียน</th>
          <th rowspan="2" style="font-size:7pt;">รวมเวลา<br/>ไม่มาเรียน</th>
        </tr>
        <tr>${colHeaders}</tr>
      </thead>
      <tbody>${rows.join('')}</tbody>
    </table>
  </div>`
}

// ─── Page 4: คะแนนการจัดการเรียนรู้ ─────────────────────────────────────────

const ROWS_PER_SCORE_PAGE = 50

function _buildPage4(d) {
  const { students } = d
  const pages = []
  for (let si = 0; si < students.length; si += ROWS_PER_SCORE_PAGE) {
    pages.push(_buildScorePage(d, students.slice(si, si + ROWS_PER_SCORE_PAGE), si + 1))
  }
  return pages.join('')
}

function _buildScorePage(d, chunk, startNo) {
  const { cls, ms, teacher, academicYear, semester, scoreColumns, scoreMap } = d

  // แบ่ง between (ทุก col ก่อน final) และ final
  const finalIdx   = scoreColumns.findIndex(c => c.assignment_type === 'final' || c.assignment_name?.includes('ปลายภาค'))
  const betweenCols = finalIdx > 0  ? scoreColumns.slice(0, finalIdx) : scoreColumns.slice()
  const finalCols   = finalIdx >= 0 ? scoreColumns.slice(finalIdx) : []

  // เติม col ว่างให้ครบอย่างน้อย 5 ฝั่ง (ทำให้ตารางมีโครงสร้างสมบูรณ์เสมอ)
  const B_MIN = 5, F_MIN = 5
  const ECOL  = { id: null, assignment_name: '', max_score: '' }
  const allBetween = [...betweenCols, ...Array(Math.max(0, B_MIN - betweenCols.length)).fill(ECOL)]
  const allFinal   = [...finalCols,   ...Array(Math.max(0, F_MIN - finalCols.length)).fill(ECOL)]

  const betweenMax = betweenCols.reduce((s,c)=>s+(c.max_score??0),0)
  const finalMax   = finalCols.reduce((s,c)=>s+(c.max_score??0),0)

  // colspan ใช้ allBetween/allFinal (รวม padding)
  const leftSpan  = allBetween.length + 1
  const rightSpan = allFinal.length + 2
  const allSpan   = leftSpan + rightSpan
  // result: ประเมินอ่าน/คิดวิเคราะห์ | ประเมินคุณลักษณะ | ระดับ = 3
  const RES_COLS = 3
  const totalCols = 3 + allSpan + RES_COLS

  // adaptive row height: available ≈ 297 - top(16) - info(8) - header(~70) - sig(~25) - bottom(12) = 166mm
  const nDataRows = chunk.length + 1  // +1 แถวว่าง
  const rowH = Math.max(3.8, Math.min(5.8, Math.floor(160 / nDataRows * 10) / 10)).toFixed(1)

  // คำนวณคะแนน
  const rows = chunk.map((st, idx) => {
    const sc    = scoreMap[st.id] ?? {}
    const bScores = allBetween.map(c => c.id ? (sc[c.id] ?? '') : '')
    const fScores = allFinal.map(c => c.id ? (sc[c.id] ?? '') : '')
    const bSum  = betweenCols.reduce((s,c)=>s+(sc[c.id]??0),0)
    const fSum  = finalCols.reduce((s,c)=>s+(sc[c.id]??0),0)
    const total = bSum + fSum
    const bPct  = betweenMax > 0 ? bSum / betweenMax * 100 : 0
    const fPct  = finalMax   > 0 ? fSum / finalMax   * 100 : 0
    const grade = _calcGrade(total)

    return `<tr>
      <td>${startNo + idx}</td>
      <td>${_esc(st.student_code??'')}</td>
      <td class="gs-name">${_esc(st.full_name??'')}</td>
      ${bScores.map(v=>`<td>${v}</td>`).join('')}
      <td style="font-weight:700;">${bSum||''}</td>
      ${fScores.map(v=>`<td>${v}</td>`).join('')}
      <td style="font-weight:700;">${fSum||''}</td>
      <td style="font-weight:700;">${total||''}</td>
      <td></td>
      <td></td>
      <td style="font-weight:700;">${grade}</td>
    </tr>`
  })

  const emptyRow = `<tr><td colspan="${totalCols}"></td></tr>`

  const bW = betweenCols.length > 6 ? '5mm' : '5.8mm'
  const fW = finalCols.length   > 5 ? '5mm' : '5.5mm'

  return `
  <div class="score-wrap">
    <div class="score-top-info">
      <div class="sc-field"><span class="sc-lbl">รายวิชา</span><span class="sc-val">${_esc(ms.subject_name??'')}</span></div>
      <div class="sc-field"><span class="sc-lbl">รหัสวิชา</span><span class="sc-val">${_esc(ms.subject_code??'')}</span></div>
      <div class="sc-field"><span class="sc-lbl">ชั้น</span><span class="sc-val">${_esc(_shortRoom(cls.class_name))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ภาคเรียนที่</span><span class="sc-val">${_esc(String(semester))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ปีการศึกษา</span><span class="sc-val">${_esc(String(academicYear))}</span></div>
    </div>
    <table class="grade-sheet" style="--row-h:${rowH}mm">
      <colgroup>
        <col style="width:5mm;"/>
        <col style="width:12mm;"/>
        <col style="width:45mm;"/>
        ${allBetween.map(()=>`<col style="width:${bW};"/>`).join('')}
        <col style="width:7mm;"/>
        ${allFinal.map(()=>`<col style="width:${fW};"/>`).join('')}
        <col style="width:7mm;"/>
        <col style="width:8mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:8.5mm;"/>
      </colgroup>
      <thead>
        <tr>
          <th rowspan="5" class="v"><span>ที่</span></th>
          <th colspan="2" rowspan="2">ผู้เรียน</th>
          <th colspan="${allSpan}">วัดผลระหว่างภาค / ปลายภาค</th>
          <th rowspan="5" class="v"><span style="font-size:7px;">ประเมินการอ่านคิดวิเคราะห์และเขียน</span></th>
          <th rowspan="5" class="v"><span style="font-size:7px;">ประเมินคุณลักษณะอันพึงประสงค์</span></th>
          <th rowspan="5" class="v"><span>ระดับการเรียน</span></th>
        </tr>
        <tr>
          <th colspan="${allSpan}" style="font-size:7px;padding:1px;">อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${betweenMax} / ${finalMax}</th>
        </tr>
        <tr>
          <th colspan="2" rowspan="2">ชื่อ - สกุล</th>
          <th colspan="${allBetween.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนระหว่างเรียน/กลางภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนน<br/>ระหว่างภาค</span></th>
          <th colspan="${allFinal.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนปลายภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนน<br/>ปลายภาค</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนน<br/>100</span></th>
        </tr>
        <tr>
          ${allBetween.map(c=>`<th class="v" style="overflow:visible;"><span>${_esc(c.assignment_name??'')}</span></th>`).join('')}
          ${allFinal.map(c=>`<th class="v" style="overflow:visible;"><span>${_esc(c.assignment_name??'')}</span></th>`).join('')}
        </tr>
        <tr>
          <th class="score-full">เลขประจำตัว</th>
          <th class="score-full"></th>
          ${allBetween.map(c=>`<th class="score-full">${c.max_score??''}</th>`).join('')}
          <th class="score-full">${betweenMax||''}</th>
          ${allFinal.map(c=>`<th class="score-full">${c.max_score??''}</th>`).join('')}
          <th class="score-full">${finalMax||''}</th>
          <th class="score-full">${(betweenMax||finalMax) ? betweenMax + finalMax : ''}</th>
        </tr>
      </thead>
      <tbody>
        ${rows.join('')}
        ${emptyRow}
      </tbody>
    </table>
    <div class="score-sig">
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${_esc(teacher?.full_name??'')}</div>
        <div class="score-sig-role">ครูผู้สอน</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${_esc(d.dept?.head_name??'')}</div>
        <div class="score-sig-role">หัวหน้าหมวดวิชา</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${_esc(d.cfg[`${d.prefix}RegistrarName`]??'')}</div>
        <div class="score-sig-role">หัวหน้างานวัดผลและประเมินผล</div>
      </div>
    </div>
  </div>`
}
// ─── Page 5: รายละเอียดสัปดาห์/คาบ/วันที่สอน ────────────────────────────────

function _buildPage5(d) {
  const { cls, ms, credit, teacher, deptNameTH, academicYear, semester, sessions } = d

  // group sessions into chunks of 3 columns × N rows
  const COLS = 3
  const perCol = Math.ceil(sessions.length / COLS)
  const colGroups = Array.from({length: COLS}, (_, ci) =>
    sessions.slice(ci * perCol, (ci + 1) * perCol)
  )
  const maxRows = Math.max(...colGroups.map(g => g.length))

  let weekNum = 0
  let weekTrack = {}

  const tableRows = Array.from({length: maxRows}, (_, ri) => {
    const cells = colGroups.map(group => {
      const sess = group[ri]
      if (!sess) return '<td></td><td></td><td></td>'
      // compute week number
      if (!weekTrack[sess.n]) {
        const sessIdx = sessions.findIndex(s => s.n === sess.n)
        const perWeek = Math.round(credit * 2)
        weekTrack[sess.n] = Math.floor(sessIdx / perWeek) + 1
      }
      const wk = weekTrack[sess.n]
      const showWeek = ri === 0 || (colGroups[0][ri] && weekTrack[colGroups[0][ri].n] !== weekTrack[colGroups[0][Math.max(0,ri-1)]?.n])

      return `<td class="text-center">${wk}</td><td class="text-center">${sess.n}</td><td class="text-center">${_fmtDateTH(sess.ds)}</td>`
    })
    return `<tr>${cells.join('')}</tr>`
  })

  return `
  <div class="page">
    <div style="text-align:center;font-weight:700;font-size:11pt;margin-bottom:3mm;">รายละเอียดสัปดาห์/คาบ/วันที่สอน</div>
    <div style="font-size:9pt;margin-bottom:2mm;">
      <span>รายวิชา ${_esc(ms.subject_name??'')} &emsp; รหัสวิชา ${_esc(ms.subject_code??'')} &emsp; กลุ่มสาระการเรียนรู้ ${_esc(deptNameTH)}</span>
    </div>
    <div style="font-size:9pt;margin-bottom:2mm;">
      ระดับชั้นมัธยมศึกษา ${_esc(_shortRoom(cls.class_name))} &emsp; ภาคเรียนที่ ${semester} &emsp; ปีการศึกษา ${academicYear} &emsp; เวลา ชั่วโมง จำนวน ${credit} หน่วยกิต
    </div>
    <div style="font-size:9pt;margin-bottom:3mm;">ครูผู้สอน ${_esc(teacher?.full_name??'')}</div>

    <div style="text-align:center;font-weight:600;font-size:10pt;margin-bottom:2mm;">สัปดาห์/คาบ/วันที่สอน</div>
    <table class="date-table">
      <thead>
        <tr>
          ${Array.from({length:COLS},()=>'<th>สัปดาห์</th><th>คาบที่</th><th>วันที่/เดือน/ปี</th>').join('')}
        </tr>
      </thead>
      <tbody>${tableRows.join('')}</tbody>
    </table>
  </div>`
}

// ─── Full Document Builder ────────────────────────────────────────────────────

function _buildFullDoc(d, title) {
  return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8"/>
  <title>${_esc(title)}</title>
  <style>${_getCSS()}</style>
</head>
<body>
  ${_buildPage1(d)}
  ${_buildPage2(d)}
  ${_buildPage3(d)}
  ${_buildPage4(d)}
  ${_buildPage5(d)}
  <div style="text-align:center;margin:10mm;font-size:9pt;color:#666;">
    <button onclick="window.print()" style="padding:8px 24px;font-size:11pt;font-family:Sarabun,sans-serif;
      background:#1d4ed8;color:#fff;border:none;border-radius:8px;cursor:pointer;">
      🖨️ พิมพ์ / บันทึก PDF
    </button>
  </div>
</body>
</html>`
}

// ─── Page Viewer (full-screen modal + tabs) ──────────────────────────────────

function _singlePageDoc(pageHTML) {
  return `<!DOCTYPE html>
<html lang="th"><head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>${_getCSS()}
body{background:#fff;margin:0;}
@media print{@page{size:A4 portrait;margin:0;}.no-print{display:none!important;}}
</style></head>
<body>${pageHTML}</body></html>`
}

function _openViewer(d) {
  document.getElementById('pp5-viewer')?.remove()

  const pages = [
    { label: 'หน้าปก', fn: () => _buildPage1(d) },
    { label: 'มาตรฐาน/ตัวชี้วัด', fn: () => _buildPage2(d) },
    { label: 'บันทึกการมาเรียน', fn: () => _buildPage3(d) },
    { label: 'คะแนน', fn: () => _buildPage4(d) },
    { label: 'วันที่สอน', fn: () => _buildPage5(d) },
  ]

  const viewer = document.createElement('div')
  viewer.id = 'pp5-viewer'
  viewer.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#374151;'

  const btnStyle = (active) =>
    `border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-family:Sarabun,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;` +
    (active ? 'background:#2563eb;color:#fff;' : 'background:#4b5563;color:#d1d5db;')

  viewer.innerHTML = `
    <div style="background:#111827;padding:8px 12px;display:flex;align-items:center;gap:6px;flex-shrink:0;overflow-x:auto;">
      <button id="pp5-v-close" style="${btnStyle(false)}background:#dc2626;color:#fff;">✕ ปิด</button>
      <button id="pp5-v-print" style="${btnStyle(false)}background:#059669;color:#fff;">🖨️ พิมพ์หน้านี้</button>
      <button id="pp5-v-printall" style="${btnStyle(false)}background:#7c3aed;color:#fff;">🖨️ พิมพ์ทั้งหมด</button>
      <div style="width:1px;height:24px;background:#374151;flex-shrink:0;margin:0 2px;"></div>
      ${pages.map((p, i) => `
        <button class="pp5-vtab" data-i="${i}" style="${btnStyle(i===0)}">${p.label}</button>
      `).join('')}
    </div>
    <div style="flex:1;overflow:auto;display:flex;justify-content:center;align-items:flex-start;padding:20px;">
      <iframe id="pp5-iframe" style="border:none;box-shadow:0 4px 32px rgba(0,0,0,.5);background:#fff;width:210mm;height:297mm;" scrolling="no"></iframe>
    </div>`

  document.body.appendChild(viewer)

  const iframe   = viewer.querySelector('#pp5-iframe')
  const tabs     = [...viewer.querySelectorAll('.pp5-vtab')]
  let curIdx     = 0

  function showPage(i) {
    curIdx = i
    tabs.forEach((t, ti) => t.style.cssText = btnStyle(ti === i) + t.style.cssText.replace(/background:[^;]+;color:[^;]+;/g,''))
    // re-apply colors cleanly
    tabs.forEach((t, ti) => {
      if (ti === i) { t.style.background='#2563eb'; t.style.color='#fff' }
      else          { t.style.background='#4b5563'; t.style.color='#d1d5db' }
    })
    const html = _singlePageDoc(pages[i].fn())
    // attendance & score pages may be multi-page
    const isMulti = i === 2 || i === 3
    iframe.style.height = isMulti ? '900mm' : '297mm'
    const doc = iframe.contentDocument
    doc.open(); doc.write(html); doc.close()
  }

  showPage(0)

  tabs.forEach((t, i) => t.addEventListener('click', () => showPage(i)))

  viewer.querySelector('#pp5-v-close').addEventListener('click', () => viewer.remove())

  viewer.querySelector('#pp5-v-print').addEventListener('click', () => {
    iframe.contentWindow.focus()
    iframe.contentWindow.print()
  })

  viewer.querySelector('#pp5-v-printall').addEventListener('click', () => {
    const title = `ปพ5_${d.ms.subject_code??''}_${_shortRoom(d.cls.class_name)}`
    const html  = _buildFullDoc(d, title)
    const win   = window.open('', '_blank', 'width=900,height=700')
    if (!win) { showToast('กรุณาอนุญาต Popup ในเบราว์เซอร์','warning'); return }
    win.document.open(); win.document.write(html); win.document.close()
    setTimeout(() => win.print(), 600)
  })
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function openPP5Doc(classId) {
  showToast('กำลังโหลดข้อมูลเอกสาร...', 'info')
  try {
    const d = await _loadDocData(classId)
    _openViewer(d)
  } catch (err) {
    console.error('[pp5-doc]', err)
    showToast('โหลดเอกสารไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  }
}

export function openPP5CourseModal(courseClasses) {
  document.getElementById('pp5-course-modal')?.remove()

  const modal = document.createElement('div')
  modal.id = 'pp5-course-modal'
  modal.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 เปิด ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการดู</p>
      <div class="space-y-2 mb-5">
        ${courseClasses.map(c => `
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="radio" name="pp5-cls" class="w-4 h-4 accent-indigo-600" value="${c.id}" />
          <span class="text-sm text-gray-700">${_esc(_shortRoom(c.class_name))}</span>
        </label>`).join('')}
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-open-btn" class="flex-1 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700">เปิด</button>
      </div>
    </div>`

  document.body.appendChild(modal)
  modal.querySelector('#pp5-cancel').addEventListener('click', () => modal.remove())
  modal.querySelector('#pp5-open-btn').addEventListener('click', async () => {
    const sel = modal.querySelector('input[name="pp5-cls"]:checked')
    if (!sel) { showToast('กรุณาเลือกห้อง', 'warning'); return }
    modal.remove()
    await openPP5Doc(parseInt(sel.value))
  })
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
}
