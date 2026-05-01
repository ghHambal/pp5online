// sync.js — ซิงค์ข้อมูลไปยัง Google Sheet ผ่าน Central GAS (Admin deploy ครั้งเดียว)

const SHEET_TAB = 'หน้าหลัก'
const STU_RANGE = 'J8:J72'
const ATT_START = 14  // Column N

const ATT_MAP = {
  present: 'ม',
  absent:  'ข',
  late:    'ส',
  excused: 'ก',
  sick:    'ป',
}

// cache config ไม่ต้องดึงซ้ำในรอบเดียวกัน
let _cfgCache = null

async function _getGasUrl() {
  if (!_cfgCache) {
    const { getSystemConfig } = await import('./api.js')
    _cfgCache = await getSystemConfig()
  }
  const url = _cfgCache.centralGasUrl
  if (!url) throw new Error('ยังไม่ได้ตั้งค่า Central GAS URL — ไปที่ Admin → ตั้งค่าระบบ → 🔗 Sync Engine')
  return url
}

async function _post(gasUrl, payload) {
  // GAS Web App: ต้องใช้ mode:no-cors เพราะ GAS ไม่ส่ง CORS headers ให้ browser
  // → response เป็น opaque (ไม่อ่านได้) แต่ GAS ยังคง execute และเขียนชีทสำเร็จ
  try {
    await fetch(gasUrl, {
      method:   'POST',
      mode:     'no-cors',
      redirect: 'follow',
      headers:  { 'Content-Type': 'text/plain;charset=utf-8' },
      body:     JSON.stringify(payload),
    })
  } catch (err) {
    throw new Error('เชื่อมต่อ GAS ไม่สำเร็จ: ' + (err.message ?? ''))
  }
}

// ─── Part 1: ชีทรายวิชาครู ────────────────────────────────────────────────────

/**
 * Sync เช็คชื่อทั้งหมดของ class ไปยังชีทครู
 * @param {string} sheetId  - Google Sheet ID ของห้องเรียน
 * @param {Array}  sessions - [{n, ds}] เรียงตามลำดับ
 * @param {Object} attMap   - {studentId: {sessionNumber: status}}
 * @param {Array}  students - [{id, student_code}]
 */
export async function syncAttendance(sheetId, sessions, attMap, students) {
  if (!sheetId) throw new Error('ยังไม่ได้ตั้งค่า Google Sheet ID — แก้ไขในหน้า "แก้ไขห้องเรียน"')
  const gasUrl = await _getGasUrl()

  const records = []
  for (const s of students) {
    for (let i = 0; i < sessions.length; i++) {
      const status = attMap[s.id]?.[sessions[i].n]
      if (!status) continue
      records.push({
        studentCode:  String(s.student_code),
        sessionIndex: i,
        status:       ATT_MAP[status] ?? status,
      })
    }
  }

  await _post(gasUrl, {
    action:          'sync_attendance',
    sheetId,
    tabName:         SHEET_TAB,
    studentColRange: STU_RANGE,
    attStartCol:     ATT_START,
    records,
  })
}

/**
 * Sync คะแนนทั้งหมดของ class ไปยังชีทครู
 * @param {string} sheetId       - Google Sheet ID
 * @param {Array}  scoreColumns  - [{id, sheet_column}]
 * @param {Array}  scores        - [{student_id, assignment_id, final_score}]
 * @param {Array}  students      - [{id, student_code}]
 */
export async function syncScores(sheetId, scoreColumns, scores, students) {
  if (!sheetId) throw new Error('ยังไม่ได้ตั้งค่า Google Sheet ID')
  const gasUrl = await _getGasUrl()

  // รองรับทั้ง sheet_column (class_score_columns) และ sheet_col (central)
  const colMap = Object.fromEntries(
    scoreColumns.map(c => [c.id, c.sheet_column ?? c.sheet_col])
  )
  const stuMap = Object.fromEntries(students.map(s => [s.id, s.student_code]))

  // รองรับทั้ง assignment_id และ score_column_id (getStudentScores returns score_column_id)
  const records = scores
    .filter(sc => colMap[sc.assignment_id ?? sc.score_column_id] && stuMap[sc.student_id])
    .map(sc => ({
      studentCode: String(stuMap[sc.student_id]),
      colLetter:   colMap[sc.assignment_id ?? sc.score_column_id],
      value:       sc.final_score ?? sc.score ?? '',
    }))

  await _post(gasUrl, {
    action:          'sync_scores',
    sheetId,
    tabName:         SHEET_TAB,
    studentColRange: STU_RANGE,
    records,
  })
}

// ─── Part 2: ชีทกลาง (Life Skill, Reading, Prayer) ──────────────────────────

/**
 * Sync คะแนนพิเศษทั้งห้องไปยังชีทกลาง
 * @param {string} sheetId  - Sheet ID ของชีทกลาง
 * @param {string} tabName  - ชื่อแท็บในชีทกลาง
 * @param {Array}  columns  - [{id, sheet_col}]
 * @param {Array}  scores   - [{student_id, column_id, score}]
 * @param {Array}  students - [{id, student_code}]
 */
export async function syncCentralBatch(sheetId, tabName, columns, scores, students) {
  if (!sheetId) throw new Error('ยังไม่ได้ตั้งค่า Sheet ID สำหรับชีทกลาง')
  const gasUrl = await _getGasUrl()

  const colMap = Object.fromEntries(columns.map(c => [c.id, c.sheet_col]))
  const stuMap = Object.fromEntries(students.map(s => [s.id, s.student_code]))

  const records = scores
    .filter(sc => colMap[sc.column_id] && stuMap[sc.student_id])
    .map(sc => ({
      studentCode: String(stuMap[sc.student_id]),
      colLetter:   colMap[sc.column_id],
      value:       sc.score ?? '',
    }))

  await _post(gasUrl, {
    action:          'sync_scores',
    sheetId,
    tabName:         tabName || SHEET_TAB,
    studentColRange: STU_RANGE,
    records,
  })
}

/**
 * Sync คะแนนพิเศษรายนักเรียน 1 เซลล์ไปยังชีทกลาง
 */
export async function syncCentralScore(sheetId, tabName, studentCode, colLetter, value) {
  if (!sheetId || !colLetter) throw new Error('ยังไม่ได้ตั้งค่า Sheet ID หรือคอลัมน์')
  const gasUrl = await _getGasUrl()

  await _post(gasUrl, {
    action:          'sync_scores',
    sheetId,
    tabName:         tabName || SHEET_TAB,
    studentColRange: STU_RANGE,
    records: [{ studentCode: String(studentCode), colLetter, value }],
  })
}

// ─── Class Info Sync (ข้อมูลรายวิชา → เซลล์ที่ Admin กำหนด) ─────────────────

/**
 * Sync ข้อมูลรายวิชา (ชื่อวิชา, รหัส, ครู, วันสอน ฯลฯ) ลงเซลล์ที่กำหนด
 * @param {string} sheetId     - Google Sheet ID ของห้องเรียน
 * @param {Object} classData   - ข้อมูลห้อง (master_subjects, day1_date...day6_date)
 * @param {Object} teacherData - {full_name, phone}
 * @param {Object} extraData   - {headStudentName, deptName, headDeptName}
 */
export async function syncClassInfo(sheetId, classData, teacherData = {}, extraData = {}) {
  if (!sheetId) throw new Error('ยังไม่ได้ตั้งค่า Google Sheet ID')
  const gasUrl = await _getGasUrl()
  if (!_cfgCache) {
    const { getSystemConfig } = await import('./api.js')
    _cfgCache = await getSystemConfig()
  }
  const cfg = _cfgCache
  const ms  = classData.master_subjects ?? {}

  const _cell = (key, value) => {
    const c = cfg[key]
    return c ? { cell: c, value: value ?? '' } : null
  }

  const _fmtDate = (d) => {
    if (!d) return ''
    const dt = new Date(d)
    return `${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()+543}`
  }

  // ชื่อวิชาฟอร์แมต: ชื่อวิชา_(รหัส)_ชื่อครู
  const subjectNameFmt = ms.subject_name
    ? `${ms.subject_name}_(${ms.subject_code ?? ''})_${teacherData.full_name ?? ''}`
    : ''

  const cells = [
    _cell('classInfoSubjectNameCell', subjectNameFmt),
    _cell('classInfoSubjectCodeCell', ms.subject_code),
    _cell('classInfoCreditCell',      ms.credit),
    _cell('classInfoGradeCell',       classData.class_name),
    _cell('classInfoHeadStudentCell', extraData.headStudentName),
    _cell('classInfoDay1Cell',        _fmtDate(classData.day1_date)),
    _cell('classInfoDay2Cell',        _fmtDate(classData.day2_date)),
    _cell('classInfoDay3Cell',        _fmtDate(classData.day3_date)),
    _cell('classInfoDay4Cell',        _fmtDate(classData.day4_date)),
    _cell('classInfoDay5Cell',        _fmtDate(classData.day5_date)),
    _cell('classInfoDay6Cell',        _fmtDate(classData.day6_date)),
    _cell('classInfoTeacherNameCell', teacherData.full_name),
    _cell('classInfoTeacherPhoneCell',teacherData.phone),
    _cell('classInfoDeptCell',        extraData.deptName),
    _cell('classInfoHeadDeptCell',    extraData.headDeptName),
  ].filter(Boolean)

  await _post(gasUrl, {
    action:  'sync_cells',
    sheetId,
    tabName: cfg.classInfoTab || 'หน้าหลัก',
    cells,
  })
}

// ─── Prayer Sheet Sync (Solat tab) ───────────────────────────────────────────
// status label map เหมือนใน teacher-views.js
const PRAYER_LABEL = { pray: '/', absent: 'X', usor: 'U', followed: '-', avoid: 'N' }

/**
 * Sync ข้อมูลละหมาดทั้งห้องไปยัง Sheet (Solat tab)
 * @param {string} sheetId         - Google Sheet ID ของชีทกลาง
 * @param {string} tabName         - ชื่อแท็บ (default 'Solat')
 * @param {string} studentColRange - ช่วงรหัสนักเรียน เช่น 'A3:A73'
 * @param {Array}  orderedDates    - วันทั้งหมดเรียงตามลำดับ ['2568-05-01', ...]
 * @param {Object} prayMap         - {studentId: {dateStr: status}}
 * @param {Array}  students        - [{id, student_code}]
 */
export async function syncPrayerSheet(sheetId, tabName, studentColRange, orderedDates, prayMap, students) {
  if (!sheetId) throw new Error('ยังไม่ได้ตั้งค่า Prayer Sheet ID — ไปที่ Admin → ตั้งค่าระบบ')
  const gasUrl = await _getGasUrl()

  const records = []
  for (const s of students) {
    for (let i = 0; i < orderedDates.length; i++) {
      const ds     = orderedDates[i]
      const status = prayMap[s.id]?.[ds]
      if (!status) continue
      records.push({
        studentCode:  String(s.student_code),
        sessionIndex: i,
        status:       PRAYER_LABEL[status] ?? status,
      })
    }
  }

  // DEBUG
  console.log('[syncPrayer] students:', students.length,
    '| orderedDates:', orderedDates.length,
    '| records to send:', records.length,
    '| tabName:', tabName)
  console.log('[syncPrayer] sample studentCodes in records:',
    [...new Set(records.map(r => r.studentCode))].slice(0, 10))
  console.log('[syncPrayer] sample students from _stuList:',
    students.slice(0, 5).map(s => ({ id: s.id, code: s.student_code })))

  await _post(gasUrl, {
    action:          'sync_attendance',  // ใช้ action เดียวกับเช็คชื่อ
    sheetId,
    tabName:         tabName || 'Solat',
    studentColRange: studentColRange || 'A3:A3000',
    attStartCol:     4,                  // column D
    records,
  })
}

// รีเซ็ต cache เมื่อ config เปลี่ยน (เรียกจาก admin settings)
export function clearSyncCache() { _cfgCache = null }
