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

  const dept = depts.find(d => d.dept_name === ms.dept) ?? null

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

  // homeroom advisors for this room
  const classRoom  = cls.class_name ?? ''
  const hrSamai    = homerooms.find(h => h.category !== 'ศาสนา' && h.main_room === classRoom) ?? null
  const hrReligion = homerooms.find(h => h.category === 'ศาสนา' && h.main_room === classRoom) ?? null

  return { cls, ms, credit, prefix, cfg, students, attMap, scoreColumns, scoreMap, teacher, dept, courseDoc, sessions, hrSamai, hrReligion, academicYear, semester }
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
    .page:last-child, .page-tight:last-child { page-break-after: avoid; }

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
    .page-p1 .logo {
      position: absolute; top: 17.6mm; left: 50%;
      transform: translateX(-50%);
      display: block; width: 18.5mm; height: 18.5mm; object-fit: contain;
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
    .page-p1 .uline-xl { display: block; min-height: 5.2mm; border-bottom: .35mm dotted #777; text-align: center; line-height: 5mm; font-weight: 600; }
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
    .p2-hdr { font-size: 9.5pt; margin-bottom: 2mm; }
    .p2-hdr table { border: none; }
    .p2-hdr td    { border: none; padding: 1px 2px; }
    .std-table td:first-child { width: 28mm; }
    .std-table td { height: 7.5mm; font-size: 9.5pt; }
    .obj-row  { font-size: 9pt; margin-top: 2mm; }
    .char-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 4mm; font-size: 9pt; margin-top: 2mm; }

    /* ── Page 3 attendance ── */
    .att-hdr   { font-size: 9pt; margin-bottom: 1.5mm; }
    .att-legend { font-size: 8pt; margin-bottom: 1.5mm; }
    .att-table  { table-layout: fixed; font-size: 6.5pt; }
    .att-table th { padding: 1px; font-size: 6.5pt; }
    .att-table td { padding: 0 1px; font-size: 6.5pt; text-align: center; }
    .att-name  { text-align: left !important; font-size: 7.5pt; white-space: nowrap; overflow: hidden; }
    .att-code  { font-size: 7pt; }
    .att-absent { color: #c00; font-weight: 700; }
    .att-leave  { color: #00c; font-weight: 700; }
    .att-sick   { color: #c60; font-weight: 700; }

    /* ── Page 4 scores ── */
    .score-table { table-layout: fixed; }
    .score-table th.normal { font-size: 8pt; padding: 2px 3px; vertical-align: middle; }
    .score-table th.vcol  { padding: 1px; vertical-align: bottom; height: 24mm; overflow: hidden; }
    .score-table th.vcol .vwrap {
      display: block; transform: rotate(-90deg); transform-origin: center center;
      white-space: nowrap; font-size: 7pt; font-weight: 600;
      width: 22mm; margin: auto; text-align: left;
    }
    .score-table td { font-size: 8pt; padding: 1px 2px; text-align: center; }
    .score-table td.nm { text-align: left; font-size: 8pt; white-space: nowrap; overflow: hidden; }
    .score-sig { margin-top: 6mm; display: flex; justify-content: space-between; font-size: 9pt; gap: 4mm; }
    .score-sig-block { flex: 1; text-align: center; }

    /* ── Page 5 ── */
    .date-table th { font-size: 9pt; padding: 2px 4px; }
    .date-table td { font-size: 9pt; padding: 2px 4px; text-align: center; }
  `
}

// ─── Page 1: หน้าปก ───────────────────────────────────────────────────────────

function _buildPage1(d) {
  const { cls, ms, credit, prefix, cfg, students, scoreColumns, scoreMap, teacher, dept, hrSamai, hrReligion, academicYear, semester } = d

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
  const maxTotal = scoreColumns.reduce((s, c) => s + (c.full_score ?? 0), 0)
  const gradeCounts = { 4:0, '3.5':0, 3:0, '2.5':0, 2:0, '1.5':0, 1:0, 0:0 }
  const evalReadCount  = { ดีเยี่ยม:0, ดี:0, ผ่าน:0, ไม่ผ่าน:0 }
  const evalCharCount  = { ดีเยี่ยม:0, ดี:0, ผ่าน:0, ไม่ผ่าน:0 }
  const readCol  = scoreColumns.find(c => (c.column_name ?? '').includes('อ่าน'))
  const charCol  = scoreColumns.find(c => (c.column_name ?? '').includes('คุณลักษณะ') || (c.column_name ?? '').includes('จิตพิสัย'))

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
        const lbl = _evalLabel((rs / (readCol.full_score || 1)) * 100)
        evalReadCount[lbl]++
      }
    }
    if (charCol) {
      const cs = stScores[charCol.id]
      if (cs != null) {
        const lbl = _evalLabel((cs / (charCol.full_score || 1)) * 100)
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
      <span>กลุ่มสาระการเรียนรู้</span><span class="uline w-md">${_esc(ms.dept??'')}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${_esc(ms.subject_code??'')}</span>
    </div>` : `
    <div class="info-line">
      <span>กลุ่มสาระการเรียนรู้</span><span class="uline w-md">${_esc(ms.dept??'')}</span>
      <span>รายวิชา</span><span class="uline w-lg">${_esc(ms.subject_name??'')}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${_esc(ms.subject_code??'')}</span>
    </div>`

  const gradeRow = [4,'3.5',3,'2.5',2,'1.5',1,0].map(g=>`<td>${gradeCounts[String(g)]||''}</td>`).join('')
  const readRow  = ['ดีเยี่ยม','ดี','ผ่าน','ไม่ผ่าน'].map(k=>`<td>${evalReadCount[k]||''}</td>`).join('')
  const charRow  = ['ดีเยี่ยม','ดี','ผ่าน','ไม่ผ่าน'].map(k=>`<td>${evalCharCount[k]||''}</td>`).join('')

  return `
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${logoUrl ? `<img class="logo" src="${_esc(logoUrl)}" alt="ตราโรงเรียน" />` : ''}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${lblLeft};">${levelLbl}</div>
      <div class="checks" style="left:${chkLeft};">${checksHTML}</div>
    </section>

    <div class="school">${schoolName}</div>
    <div class="school-sub">${schoolAddress}</div>

    <section class="info">
      <div class="info-line">
        <span>${levelLbl}</span><span class="uline w-sm">${_esc(cls.class_name)}</span>
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
  const { cls, ms, credit, cfg, courseDoc, teacher, academicYear, semester } = d

  const cols    = Array.isArray(courseDoc?.columns) ? courseDoc.columns : ['มาตรฐานการเรียนรู้','ตัวชี้วัด']
  const rows    = Array.isArray(courseDoc?.rows)    ? courseDoc.rows    : Array.from({length:20},()=>cols.map(()=>''))
  const midObj  = _esc(courseDoc?.midterm_objectives  ?? '')
  const finalObj= _esc(courseDoc?.final_objectives    ?? '')
  const allObj  = _esc(courseDoc?.all_objectives      ?? '')

  const CHAR_TRAITS = [
    '1 รักชาติ ศาสน์ กษัตริย์', '2 ซื่อสัตย์สุจริต', '3 มีวินัย',
    '4 ใฝ่เรียนรู้', '5 อยู่อย่างพอเพียง', '6 มุ่งมั่นในการทำงาน',
    '7 รักความเป็นไทย', '8 มีจิตสาธารณะ', '9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ',
  ]

  return `
  <div class="page">
    <div style="text-align:center;font-weight:700;font-size:11pt;margin-bottom:3mm;">มาตรฐานการเรียนรู้และตัวชี้วัด/รายภาค</div>
    <div class="p2-header">
      <table style="border:none;width:100%;">
        <tr>
          <td style="border:none;width:50%;">รายวิชา <u>${_esc(ms.subject_name??'')}</u></td>
          <td style="border:none;">รหัสวิชา <u>${_esc(ms.subject_code??'')}</u> กลุ่มสาระการเรียนรู้ <u>${_esc(ms.dept??'')}</u></td>
        </tr>
        <tr>
          <td style="border:none;">ระดับชั้น <u>${_esc(cls.class_name??'')}</u></td>
          <td style="border:none;">ภาคเรียนที่ <u>${semester}</u> ปีการศึกษา <u>${academicYear}</u> เวลา ชั่วโมง จำนวน <u>${credit}</u> หน่วยกิต</td>
        </tr>
        <tr>
          <td style="border:none;">ครูผู้สอน <u>${_esc(teacher?.full_name??'')}</u></td>
          <td style="border:none;"></td>
        </tr>
      </table>
    </div>

    <table class="std-table" style="font-size:9.5pt;">
      <thead>
        <tr>${cols.map(c=>`<th>${_esc(c)}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${rows.map(row=>`<tr>${row.map(cell=>`<td style="height:8mm;">${_esc(cell)}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>

    <div class="obj-section">
      <p>จุดประสงค์วัดผลรายจุดประสงค์ ข้อที่ <u>${_esc(allObj)}</u>&nbsp;&nbsp;&nbsp; <strong>คุณลักษณะอันพึงประสงค์</strong></p>
      <p style="margin-top:1mm;">จุดประสงค์วัดผลกลางภาค ข้อที่ <u>${_esc(midObj)}</u></p>
      <p style="margin-top:1mm;">จุดประสงค์วัดผลปลายภาค ข้อที่ <u>${_esc(finalObj)}</u></p>
    </div>

    <div class="char-list" style="margin-top:2mm;">
      ${CHAR_TRAITS.map(t=>`<div class="char-item">${_esc(t)}</div>`).join('')}
    </div>

    <div style="margin-top:auto;padding-top:4mm;text-align:right;font-size:9.5pt;">
      ลงชื่อ ............................................. หัวหน้ากลุ่มสาระฯ
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
  const { cls, ms, teacher, academicYear, semester } = d
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

  return `
  <div class="page-tight">
    <div style="text-align:center;font-weight:700;font-size:10pt;margin-bottom:1.5mm;">
      บันทึกการมาเรียนของนักเรียนชั้น ${_esc(cls.class_name)}
    </div>
    <div class="att-hdr">
      ปีการศึกษา ${academicYear} &nbsp; ภาคเรียนที่ ${semester} &nbsp;
      รายวิชา ${_esc(ms.subject_name??'')} รหัสวิชา ${_esc(ms.subject_code??'')} &nbsp;
      ครูผู้สอน ${_esc(teacher?.full_name??'')}
    </div>
    <div class="att-legend">
      บันทึกคาบที่สอนที่นักเรียนไม่ได้มาเรียน:
      <span class="att-absent">ขาด</span>&ensp;
      <span class="att-leave">ลา</span>&ensp;
      <span class="att-sick">ป่วย</span>
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

const ROWS_PER_SCORE_PAGE = 30
const MAX_SCORE_COLS = 8

function _buildPage4(d) {
  const { students, scoreColumns, scoreMap } = d
  const pages = []
  // แบ่ง scoreColumns เป็นกลุ่มถ้ามีเยอะเกิน
  for (let ci = 0; ci < Math.max(1, Math.ceil(scoreColumns.length / MAX_SCORE_COLS)); ci++) {
    const colSlice = scoreColumns.slice(ci * MAX_SCORE_COLS, (ci + 1) * MAX_SCORE_COLS)
    for (let si = 0; si < students.length; si += ROWS_PER_SCORE_PAGE) {
      const studentChunk = students.slice(si, si + ROWS_PER_SCORE_PAGE)
      pages.push(_buildScorePage(d, studentChunk, colSlice, si + 1, ci === 0))
    }
  }
  return pages.join('')
}

function _buildScorePage(d, chunk, colSlice, startNo, showRatio) {
  const { cls, ms, credit, teacher, academicYear, semester, scoreColumns, scoreMap } = d

  const maxTotal = scoreColumns.reduce((s, c) => s + (c.full_score ?? 0), 0)
  const sliceMax = colSlice.reduce((s, c) => s + (c.full_score ?? 0), 0)
  const isLast   = colSlice.length === scoreColumns.slice(colSlice.length * -1).length || scoreColumns.length <= MAX_SCORE_COLS

  const rows = chunk.map((st, idx) => {
    const stScores = scoreMap[st.id] ?? {}
    const sliceSum = colSlice.reduce((s, c) => s + (stScores[c.id] ?? 0), 0)
    const allSum   = scoreColumns.reduce((s, c) => s + (stScores[c.id] ?? 0), 0)
    const pct      = maxTotal > 0 ? (allSum / maxTotal) * 100 : null
    const grade    = pct !== null ? _calcGrade(pct) : ''

    return `<tr>
      <td class="text-center">${startNo + idx}</td>
      <td class="text-center text-xs">${_esc(st.student_code??'')}</td>
      <td class="name-cell">${_esc(st.full_name??'')}</td>
      ${colSlice.map(c => `<td class="text-center">${stScores[c.id] ?? ''}</td>`).join('')}
      <td class="text-center font-bold">${sliceSum || ''}</td>
      ${isLast ? `<td class="text-center font-bold">${allSum || ''}</td>
      <td class="text-center font-bold">${grade !== '' ? grade : ''}</td>` : ''}
    </tr>`
  })

  const formative  = scoreColumns.filter(c => c.assignment_type === 'formative' || (!c.assignment_type && c.column_name !== 'สอบกลางภาค' && c.column_name !== 'สอบปลายภาค'))
  const midScore   = scoreColumns.find(c => c.assignment_type === 'midterm' || c.column_name?.includes('กลางภาค'))
  const finalScore = scoreColumns.find(c => c.assignment_type === 'final'   || c.column_name?.includes('ปลายภาค'))
  const between    = formative.reduce((s,c)=>s+(c.full_score??0),0) + (midScore?.full_score ?? 0)
  const finalMax   = finalScore?.full_score ?? 0
  const ratioStr   = `อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${between} / ${finalMax}`

  const vHeader = (name, score) => `
    <th class="vcol">
      <span class="vwrap">${_esc(name)}<br/>(${score ?? ''})</span>
    </th>`

  return `
  <div class="page">
    <div style="text-align:center;font-weight:700;font-size:11pt;margin-bottom:2mm;">คะแนนการจัดการเรียนรู้</div>
    <div style="font-size:9pt;margin-bottom:1mm;">
      รายวิชา ${_esc(ms.subject_name??'')} รหัสวิชา ${_esc(ms.subject_code??'')} ชั้น ${_esc(cls.class_name??'')}
      ภาคเรียนที่ ${semester} ปีการศึกษา ${academicYear}
    </div>
    ${showRatio ? `<div style="font-size:8.5pt;margin-bottom:2mm;">${ratioStr}</div>` : ''}
    <table class="score-table">
      <thead>
        <tr>
          <th class="normal" style="width:8mm;">เลขที่</th>
          <th class="normal" style="width:15mm;">รหัส</th>
          <th class="normal" style="width:40mm;text-align:left;">ชื่อ - สกุล</th>
          ${colSlice.map(c => vHeader(c.column_name ?? '', c.full_score)).join('')}
          <th class="normal" style="width:14mm;">รวม<br/>(${sliceMax})</th>
          ${isLast ? `<th class="normal" style="width:18mm;">รวมทั้งหมด<br/>(${maxTotal})</th>
                      <th class="normal" style="width:12mm;">ระดับผล<br/>การเรียน</th>` : ''}
        </tr>
      </thead>
      <tbody>${rows.join('')}</tbody>
    </table>
    <div class="score-sig">
      <div class="score-sig-block">
        ลงชื่อ ................................................<br/>
        ครูผู้สอน<br/>
        <span style="font-size:8.5pt;">(${_esc(teacher?.full_name??'')})</span>
      </div>
      <div class="score-sig-block">
        ลงชื่อ ................................................<br/>
        หัวหน้าหมวดวิชา<br/>
        <span style="font-size:8.5pt;">(${_esc(d.dept?.head_name??'')})</span>
      </div>
      <div class="score-sig-block">
        ลงชื่อ ................................................<br/>
        หัวหน้างานวัดผลและประเมินผล<br/>
        <span style="font-size:8.5pt;">(${_esc(d.cfg[`${d.prefix}RegistrarName`]??'')})</span>
      </div>
    </div>
  </div>`
}

// ─── Page 5: รายละเอียดสัปดาห์/คาบ/วันที่สอน ────────────────────────────────

function _buildPage5(d) {
  const { cls, ms, credit, teacher, academicYear, semester, sessions } = d

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
      <span>รายวิชา ${_esc(ms.subject_name??'')} &emsp; รหัสวิชา ${_esc(ms.subject_code??'')} &emsp; กลุ่มสาระการเรียนรู้ ${_esc(ms.dept??'')}</span>
    </div>
    <div style="font-size:9pt;margin-bottom:2mm;">
      ระดับชั้นมัธยมศึกษา ${_esc(cls.class_name??'')} &emsp; ภาคเรียนที่ ${semester} &emsp; ปีการศึกษา ${academicYear} &emsp; เวลา ชั่วโมง จำนวน ${credit} หน่วยกิต
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

// ─── Public API ───────────────────────────────────────────────────────────────

export async function openPP5Doc(classId) {
  showToast('กำลังโหลดข้อมูลเอกสาร...', 'info')
  try {
    const d     = await _loadDocData(classId)
    const title = `ปพ5_${d.ms.subject_code ?? d.ms.subject_name ?? ''}_${d.cls.class_name ?? ''}`
    const html  = _buildFullDoc(d, title)
    const win   = window.open('', '_blank', 'width=900,height=700')
    if (!win) { showToast('กรุณาอนุญาต Popup ในเบราว์เซอร์', 'warning'); return }
    win.document.open()
    win.document.write(html)
    win.document.close()
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
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 พิมพ์ ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการพิมพ์</p>
      <div class="space-y-2 mb-5">
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="checkbox" id="pp5-all" class="w-4 h-4 rounded accent-indigo-600" />
          <span class="font-semibold text-sm text-gray-700">ทุกห้อง</span>
        </label>
        <div class="border-t pt-2 space-y-1">
          ${courseClasses.map(c => `
          <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
            <input type="checkbox" class="pp5-cls-check w-4 h-4 rounded accent-indigo-600" value="${c.id}" />
            <span class="text-sm text-gray-700">${_esc(c.class_name)}</span>
          </label>`).join('')}
        </div>
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-print-btn" class="flex-1 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">พิมพ์</button>
      </div>
    </div>`

  document.body.appendChild(modal)

  const allChk = modal.querySelector('#pp5-all')
  const clsChks = [...modal.querySelectorAll('.pp5-cls-check')]

  allChk.addEventListener('change', () => {
    clsChks.forEach(ch => { ch.checked = allChk.checked })
  })
  clsChks.forEach(ch => {
    ch.addEventListener('change', () => {
      allChk.checked = clsChks.every(c => c.checked)
    })
  })

  modal.querySelector('#pp5-cancel').addEventListener('click', () => modal.remove())

  modal.querySelector('#pp5-print-btn').addEventListener('click', async () => {
    const selected = clsChks.filter(ch => ch.checked).map(ch => parseInt(ch.value))
    if (!selected.length) { showToast('กรุณาเลือกอย่างน้อย 1 ห้อง', 'warning'); return }
    modal.remove()
    for (const classId of selected) {
      await openPP5Doc(classId)
      if (selected.length > 1) await new Promise(r => setTimeout(r, 800))
    }
  })

  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
}
