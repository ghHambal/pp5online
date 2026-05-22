// =========================================================================
// pp5-sync.gs — ระบบ ปพ.5 ออนไลน์  |  Central GAS (Admin ดูแล)
// =========================================================================
//
// ไฟล์นี้เป็น "Central GAS" — Admin deploy ครั้งเดียว ใช้ร่วมทุกห้องเรียน
//
// ✅ Admin เป็นคนติดตั้ง ครูไม่ต้องทำอะไร
//
// วิธีติดตั้ง (Admin ทำครั้งเดียว):
//   1. เปิด Google Sheet ต้นฉบับของ Admin (ไฟล์ที่เป็น Library)
//   2. เลือก Extensions → Apps Script
//   3. วางโค้ดนี้ลงใน Code.gs (หรือสร้างไฟล์ใหม่ชื่อ Sync.gs ก็ได้)
//   4. กด Deploy → New deployment
//      - Type:          Web app
//      - Execute as:    Me  ← สำคัญ (รันด้วยบัญชี Admin)
//      - Who has access: Anyone
//   5. Copy Web App URL → วางใน Admin → ตั้งค่าระบบ → 🔗 Sync Engine → Central GAS URL
//   6. สำหรับซิงก์นักเรียนจาก Google Sheet:
//      - Project Settings → Script Properties
//      - เพิ่ม SUPABASE_URL = https://xxxx.supabase.co
//      - เพิ่ม SUPABASE_SERVICE_ROLE_KEY = service_role key
//      - ตั้งค่า Sheet ID/Tab ในหน้า Admin → ตั้งค่าระบบ → นักเรียน
//      - ถ้าต้องการรันรายสัปดาห์ ให้รัน installWeeklyStudentSyncTrigger() หนึ่งครั้ง
//
// เงื่อนไข: ชีทของครูต้องแชร์ edit ให้ email ของ Admin
//   (ทำได้ง่ายเพราะ Admin เป็นคนสร้างสำเนาให้ครูอยู่แล้ว)
//
// =========================================================================

// ─── จุดรับ HTTP GET ─────────────────────────────────────────────────────────
// รับ request แบบ GET (ใช้ JSONP เพราะ browser ไม่อนุญาต cross-origin fetch)
// action ที่รองรับ:
//   copy_sheet_template  → ทำสำเนา Google Sheet ต้นฉบับให้ครู
//   sync_students_now    → ซิงก์ข้อมูลนักเรียนจากชีทเข้า Supabase ทันที
function doGet(e) {
  try {
    var payload = e.parameter || {}
    var action = payload.action
    if (action === 'copy_sheet_template') return _jsonp(e, _copySheetTemplate(payload))
    if (action === 'sync_students_now') return _jsonp(e, _syncStudentsFromSheet(payload))
    return _jsonp(e, { ok: false, error: 'Unknown action: ' + action })
  } catch (err) {
    return _jsonp(e, { ok: false, error: err.message })
  }
}

// ─── จุดรับ HTTP POST ────────────────────────────────────────────────────────
// รับ request แบบ POST สำหรับงานที่ส่งข้อมูลจำนวนมาก
// action ที่รองรับ:
//   sync_attendance          → บันทึกการเช็คชื่อลงชีทครู
//   sync_scores              → บันทึกคะแนนลงชีทครู
//   sync_cells               → เขียนข้อมูลลง cell ที่ระบุตรงๆ
//   sync_table               → upsert ตารางข้อมูลโดย match header
//   share_sheet_view         → เปิดชีทให้อ่านสาธารณะ
//   sync_students_from_sheet → ซิงก์นักเรียนจากชีท (เรียกแบบ POST)
function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents)
    var action  = payload.action

    if (action === 'sync_attendance') return _syncAttendance(payload)
    if (action === 'sync_scores')     return _syncScores(payload)
    if (action === 'sync_cells')      return _syncCells(payload)
    if (action === 'sync_table')      return _syncTable(payload)
    if (action === 'share_sheet_view') return _shareSheetView(payload)
    if (action === 'sync_students_from_sheet') return _json(_syncStudentsFromSheet(payload))

    return _json({ ok: false, error: 'Unknown action: ' + action })
  } catch (err) {
    return _json({ ok: false, error: err.message })
  }
}

// ─── ส่ง response กลับแบบ JSONP ──────────────────────────────────────────────
// ห่อ JSON ด้วยชื่อ callback function เพื่อให้ browser โหลดผ่าน <script> tag ได้
// (หลีกเลี่ยงปัญหา CORS ของ GAS Web App)
function _jsonp(e, obj) {
  var callback = (e.parameter && e.parameter.callback) || 'callback'
  var body = callback + '(' + JSON.stringify(obj) + ');'
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT)
}

// ─── ทำสำเนา Google Sheet ต้นฉบับให้ครู ─────────────────────────────────────
// รับ templateSheetId (ID ของไฟล์ต้นฉบับ) แล้ว makeCopy
// ถ้าระบุ targetEmail จะ addEditor ให้ครูคนนั้นด้วย
// คืน: { ok, newSheetId, url, name, sharedTo }
function _copySheetTemplate(payload) {
  if (!payload.templateSheetId) return { ok: false, error: 'Missing templateSheetId' }
  var name = payload.fileName || 'สำเนาไฟล์ ปพ.5'
  var targetEmail = payload.targetEmail || ''
  var file = DriveApp.getFileById(payload.templateSheetId)
  var copy = file.makeCopy(name)
  if (targetEmail) {
    copy.addEditor(targetEmail)
  }
  return {
    ok: true,
    newSheetId: copy.getId(),
    url: copy.getUrl(),
    name: copy.getName(),
    sharedTo: targetEmail,
  }
}

// ─── เปิดชีทให้อ่านได้แบบสาธารณะ ─────────────────────────────────────────────
// ใช้เมื่อต้องการให้นักเรียน/ผู้ปกครองเปิดดูชีทผ่านลิงก์ได้โดยไม่ต้อง login
function _shareSheetView(payload) {
  if (!payload.sheetId) return _json({ ok: false, error: 'Missing sheetId' })

  var file = DriveApp.getFileById(payload.sheetId)
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW)

  return _json({ ok: true, sheetId: payload.sheetId, url: file.getUrl() })
}

// ─── บันทึกการเช็คชื่อลงชีทครู ──────────────────────────────────────────────
// อ่านรหัสนักเรียนจาก studentColRange แล้วหาแถวที่ตรง
// จากนั้นเขียนสถานะ (ม/ข/ส/ก/ป) ลงคอลัมน์คาบที่ระบุ
// payload: { sheetId, tabName, studentColRange, attStartCol,
//            records: [{studentCode, sessionIndex, status}] }
function _syncAttendance(payload) {
  var ss    = SpreadsheetApp.openById(payload.sheetId)
  var sheet = ss.getSheetByName(payload.tabName)
  if (!sheet) return _json({ ok: false, error: 'ไม่พบแท็บ: ' + payload.tabName })

  var codeToRow = _buildStudentRowMap(sheet, payload.studentColRange)

  payload.records.forEach(function(r) {
    var row = codeToRow[String(r.studentCode)]
    if (!row) return
    var col = payload.attStartCol + r.sessionIndex  // N(14) + 0, 1, 2, ...
    sheet.getRange(row, col).setValue(r.status)
  })

  SpreadsheetApp.flush()
  return _json({ ok: true, written: payload.records.length })
}

// ─── บันทึกคะแนนลงชีทครู ────────────────────────────────────────────────────
// หาแถวนักเรียนจากรหัส แล้วเขียนค่าคะแนนลงคอลัมน์ที่ระบุด้วย letter (A, B, C, ...)
// payload: { sheetId, tabName, studentColRange,
//            records: [{studentCode, colLetter, value}] }
function _syncScores(payload) {
  var ss    = SpreadsheetApp.openById(payload.sheetId)
  var sheet = ss.getSheetByName(payload.tabName)
  if (!sheet) return _json({ ok: false, error: 'ไม่พบแท็บ: ' + payload.tabName })

  var codeToRow = _buildStudentRowMap(sheet, payload.studentColRange)

  payload.records.forEach(function(r) {
    var row = codeToRow[String(r.studentCode)]
    if (!row) return
    var col = _letterToCol(r.colLetter)
    sheet.getRange(row, col).setValue(r.value)
  })

  SpreadsheetApp.flush()
  return _json({ ok: true, written: payload.records.length })
}

// ─── เขียนข้อมูลลง cell ที่ระบุโดยตรง ───────────────────────────────────────
// ใช้สำหรับข้อมูลรายวิชา เช่น ชื่อวิชา, หน่วยกิต, ชื่อครู
// payload: { sheetId, tabName, cells: [{cell: 'C9', value: 'คณิตศาสตร์'}, ...] }
function _syncCells(payload) {
  var ss    = SpreadsheetApp.openById(payload.sheetId)
  var sheet = ss.getSheetByName(payload.tabName)
  if (!sheet) return _json({ ok: false, error: 'ไม่พบแท็บ: ' + payload.tabName })

  payload.cells.forEach(function(c) {
    if (!c.cell) return
    sheet.getRange(c.cell).setValue(c.value ?? '')
  })

  SpreadsheetApp.flush()
  return _json({ ok: true, written: payload.cells.length })
}

// ─── Upsert ตารางข้อมูลโดย match header ──────────────────────────────────────
// ใช้สำหรับซิงก์ข้อมูลรายวิชาทั้งตาราง เช่น ข้อมูลวิชาในชีท ปพ.5
// ถ้ายังไม่มี header จะสร้างให้ / ถ้ามีแล้วจะเพิ่ม header ใหม่ต่อท้าย
// แถวจะถูก upsert โดย match ด้วย keyField (เช่น subject_code)
// payload: { sheetId, tabName, headers, keyField, records }
function _syncTable(payload) {
  var ss = SpreadsheetApp.openById(payload.sheetId)
  var sheet = ss.getSheetByName(payload.tabName)
  if (!sheet) sheet = ss.insertSheet(payload.tabName)

  var headers = payload.headers || []
  var keyField = payload.keyField || 'subject_code'
  var records = payload.records || []
  if (!records.length && payload.rows) {
    records = payload.rows.map(function(row) {
      var obj = {}
      headers.forEach(function(h, i) { obj[h] = row[i] })
      return obj
    })
  }
  if (!headers.length) return _json({ ok: false, error: 'No headers provided' })
  if (headers.indexOf(keyField) === -1) headers.unshift(keyField)

  var lastCol = sheet.getLastColumn()
  var lastRow = sheet.getLastRow()
  var currentHeaders = lastCol
    ? sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function(h) { return String(h).trim() })
    : []

  if (!currentHeaders.length || currentHeaders.every(function(h) { return !h })) {
    currentHeaders = headers.slice()
    sheet.getRange(1, 1, 1, currentHeaders.length).setValues([currentHeaders])
  } else {
    headers.forEach(function(h) {
      if (currentHeaders.indexOf(h) === -1) currentHeaders.push(h)
    })
    sheet.getRange(1, 1, 1, currentHeaders.length).setValues([currentHeaders])
  }

  var colByHeader = {}
  currentHeaders.forEach(function(h, i) {
    if (h) colByHeader[h] = i + 1
  })

  var keyCol = colByHeader[keyField]
  if (!keyCol) return _json({ ok: false, error: 'Missing key header: ' + keyField })

  var rowByKey = {}
  lastRow = sheet.getLastRow()
  if (lastRow >= 2) {
    var keyValues = sheet.getRange(2, keyCol, lastRow - 1, 1).getValues()
    keyValues.forEach(function(row, i) {
      var key = String(row[0]).trim()
      if (key) rowByKey[key] = i + 2
    })
  }

  var written = 0
  records.forEach(function(record) {
    var key = String(record[keyField] || '').trim()
    if (!key) return
    var rowIndex = rowByKey[key]
    if (!rowIndex) {
      rowIndex = sheet.getLastRow() + 1
      rowByKey[key] = rowIndex
    }
    headers.forEach(function(h) {
      var col = colByHeader[h]
      if (!col) return
      sheet.getRange(rowIndex, col).setValue(record[h] ?? '')
    })
    written++
  })

  SpreadsheetApp.flush()
  return _json({ ok: true, written: written, mode: 'upsert_by_header' })
}

// ─── ซิงก์นักเรียนจาก Google Sheet → Supabase ───────────────────────────────
// อ่านชีทนักเรียนของโรงเรียน แล้ว upsert เข้า students ด้วย student_code
// รองรับหัวคอลัมน์ไทย/อังกฤษ เช่น รหัสนักเรียน, ชื่อ-สกุล, ห้องสามัญ,
// ห้องศาสนา, รูปภาพ, ประจำสี, ไซด์เสื้อกีฬาสี

// ฟังก์ชันสำหรับเรียกด้วยตนเองใน GAS editor (ทดสอบ)
function syncStudentsFromSheetNow() {
  return _syncStudentsFromSheet({})
}

// ฟังก์ชันที่ trigger รายสัปดาห์จะเรียกโดยอัตโนมัติ (ทุกวันจันทร์ 03:00)
function runWeeklyStudentSync() {
  return _syncStudentsFromSheet({})
}

// ติดตั้ง trigger รายสัปดาห์ — รันครั้งเดียวใน GAS editor
// จะลบ trigger เก่าก่อนถ้ามีอยู่แล้ว แล้วสร้างใหม่
function installWeeklyStudentSyncTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === 'runWeeklyStudentSync') {
      ScriptApp.deleteTrigger(trigger)
    }
  })

  ScriptApp.newTrigger('runWeeklyStudentSync')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(3)
    .create()

  return { ok: true, trigger: 'runWeeklyStudentSync', schedule: 'MONDAY 03:00' }
}

// ฟังก์ชันหลักสำหรับซิงก์นักเรียน — เรียกได้ทั้งจาก GET, POST, และ trigger
// ขั้นตอน: อ่านชีท → แปลง header → สร้าง records → upsert students (is_active=true)
//          → ซ่อนนักเรียนที่ไม่อยู่ใน sheet (is_active=false) → บันทึก log → auto-enroll
function _syncStudentsFromSheet(payload) {
  var cfg = _getStudentSyncConfig(payload || {})
  var sheetId = cfg.sheetId
  var tabName = cfg.tabName
  var headerRow = cfg.headerRow || 1
  var triggeredBy = payload && payload.triggeredBy === 'auto' ? 'auto' : 'manual'

  if (!sheetId) return { ok: false, error: 'Missing student sync Sheet ID' }

  var ss = SpreadsheetApp.openById(sheetId)
  var sheet = tabName ? ss.getSheetByName(tabName) : ss.getSheets()[0]
  if (!sheet) return { ok: false, error: 'ไม่พบแท็บข้อมูลนักเรียน: ' + tabName }

  var lastRow = sheet.getLastRow()
  var lastCol = sheet.getLastColumn()
  if (lastRow <= headerRow || !lastCol) {
    return { ok: true, read: 0, written: 0, skipped: 0, message: 'ไม่พบข้อมูลหลังหัวตาราง' }
  }

  // อ่าน header และข้อมูลทั้งหมด (รวม formula สำหรับดึง URL รูปภาพ)
  var headers = sheet.getRange(headerRow, 1, 1, lastCol).getValues()[0].map(function(h) {
    return String(h || '').trim()
  })
  var values = sheet.getRange(headerRow + 1, 1, lastRow - headerRow, lastCol).getValues()
  var formulas = sheet.getRange(headerRow + 1, 1, lastRow - headerRow, lastCol).getFormulas()
  var headerMap = _buildStudentHeaderMap(headers)
  var records = []
  var skipped = 0

  values.forEach(function(row, rowIndex) {
    var record = {}
    Object.keys(headerMap).forEach(function(field) {
      var colIndex = headerMap[field]
      var value = row[colIndex]
      if (field === 'image_url' && !value) value = _extractImageUrlFromFormula(formulas[rowIndex][colIndex])
      value = _cleanCell(value)
      if (field === 'student_code') value = String(value).replace(/\.0$/, '').trim()
      if (value !== '') record[field] = value
    })
    if (!record.student_code || !record.full_name) { skipped++; return }
    record.is_active = true
    records.push(record)
  })

  // รหัสนักเรียนทั้งหมดที่อยู่ใน sheet นี้
  var sheetCodes = {}
  records.forEach(function(r) { sheetCodes[r.student_code] = true })

  // ดึงนักเรียนที่ active อยู่ในระบบก่อน sync เพื่อเปรียบเทียบ (สำหรับ log เท่านั้น)
  var beforeActive = _fetchActiveStudents()
  var beforeCodes = {}
  beforeActive.forEach(function(s) { beforeCodes[s.student_code] = true })

  // ซ่อนนักเรียนทุกคนก่อน แล้ว upsert จะ re-activate เฉพาะคนที่อยู่ใน sheet
  // (หลีกเลี่ยงปัญหา URL ยาวเกินเมื่อส่ง student_code=in.(....))
  _deactivateAllStudents()

  var written = _upsertStudentsToSupabase(records)

  // คำนวณ log: ใหม่ = อยู่ใน sheet แต่ไม่มีใน beforeActive
  var newStudents = records.filter(function(r) { return !beforeCodes[r.student_code] })
    .map(function(r) { return { student_code: r.student_code, full_name: r.full_name } })

  // ซ่อน = อยู่ใน beforeActive แต่ไม่อยู่ใน sheet
  var deactivatedStudents = beforeActive
    .filter(function(s) { return !sheetCodes[s.student_code] })
    .map(function(s) { return { student_code: s.student_code, full_name: s.full_name } })

  // บันทึก sync log
  _insertSyncLog({
    triggered_by: triggeredBy,
    read_count: values.length,
    written_count: written,
    new_count: newStudents.length,
    deactivated_count: toDeactivate.length,
    new_students: newStudents,
    deactivated_students: deactivatedStudents,
    sheet_id: sheetId,
    tab_name: sheet.getName(),
  })

  _autoEnrollStudentsByMainRoom()

  return {
    ok: true,
    read: values.length,
    written: written,
    skipped: skipped,
    newCount: newStudents.length,
    deactivatedCount: toDeactivate.length,
    newStudents: newStudents,
    deactivatedStudents: deactivatedStudents,
    sheetId: sheetId,
    tabName: sheet.getName(),
  }
}

// ─── ดึงรายชื่อนักเรียนที่ active ทั้งหมดจาก Supabase ───────────────────────
function _fetchActiveStudents() {
  var endpoint = _supabaseEndpoint()
  var url = endpoint.url + '/rest/v1/students?is_active=eq.true&select=student_code,full_name&limit=10000'
  var resp = UrlFetchApp.fetch(url, {
    method: 'get',
    muteHttpExceptions: true,
    headers: {
      apikey: endpoint.key,
      Authorization: 'Bearer ' + endpoint.key,
    },
  })
  if (resp.getResponseCode() !== 200) return []
  try { return JSON.parse(resp.getContentText()) || [] } catch(e) { return [] }
}

// ─── ซ่อนนักเรียนทั้งหมดก่อน sync (set is_active = false ทุกคน) ──────────────
// upsert ขั้นต่อไปจะ re-activate เฉพาะคนที่อยู่ใน sheet
// ใช้ id=gt.0 แทน student_code=in.(list) เพื่อหลีกเลี่ยง URL ยาวเกิน GAS limit
function _deactivateAllStudents() {
  var endpoint = _supabaseEndpoint()
  UrlFetchApp.fetch(endpoint.url + '/rest/v1/students?id=gt.0', {
    method: 'patch',
    muteHttpExceptions: true,
    contentType: 'application/json',
    headers: {
      apikey: endpoint.key,
      Authorization: 'Bearer ' + endpoint.key,
      Prefer: 'return=minimal',
    },
    payload: JSON.stringify({ is_active: false }),
  })
}

// ─── บันทึก sync log เข้า student_sync_logs ──────────────────────────────────
function _insertSyncLog(data) {
  var endpoint = _supabaseEndpoint()
  UrlFetchApp.fetch(endpoint.url + '/rest/v1/student_sync_logs', {
    method: 'post',
    muteHttpExceptions: true,
    contentType: 'application/json',
    headers: {
      apikey: endpoint.key,
      Authorization: 'Bearer ' + endpoint.key,
      Prefer: 'return=minimal',
    },
    payload: JSON.stringify(data),
  })
}

// ─── ลงทะเบียนนักเรียนเข้าห้องเรียนอัตโนมัติ ────────────────────────────────
// เรียก Supabase RPC auto_enroll_students_by_room ซึ่งจะ match
// students.main_room กับ classes.class_name แล้ว upsert เข้า class_students
// ทำให้นักเรียนปรากฏในหน้าห้องเรียนของครูทันทีหลังซิงก์
function _autoEnrollStudentsByMainRoom() {
  var endpoint = _supabaseEndpoint()
  UrlFetchApp.fetch(endpoint.url + '/rest/v1/rpc/auto_enroll_students_by_room', {
    method: 'post',
    muteHttpExceptions: true,
    contentType: 'application/json',
    headers: {
      apikey: endpoint.key,
      Authorization: 'Bearer ' + endpoint.key,
    },
    payload: '{}',
  })
}

// ─── อ่านการตั้งค่าซิงก์นักเรียน ─────────────────────────────────────────────
// ลำดับความสำคัญ: payload → Script Properties → Supabase system_config
// ทำให้ตั้งค่าได้ทั้งใน GAS และในหน้า Admin ของระบบ
function _getStudentSyncConfig(payload) {
  var props = PropertiesService.getScriptProperties()
  var cfg = {
    sheetId: _extractSpreadsheetId(props.getProperty('STUDENT_SYNC_SHEET_ID') || ''),
    tabName: payload.tabName || props.getProperty('STUDENT_SYNC_TAB_NAME') || '',
    headerRow: parseInt(payload.headerRow || props.getProperty('STUDENT_SYNC_HEADER_ROW') || '1', 10) || 1,
  }

  // ถ้ามี Script Properties แล้วไม่ต้องดึงจาก Supabase
  if (cfg.sheetId) return cfg

  var sys = _getSystemConfigValues(['studentSyncSheetId', 'studentSyncTabName', 'studentSyncHeaderRow'])
  cfg.sheetId = _extractSpreadsheetId(sys.studentSyncSheetId || '')
  cfg.tabName = cfg.tabName || sys.studentSyncTabName || ''
  cfg.headerRow = parseInt(sys.studentSyncHeaderRow || cfg.headerRow || '1', 10) || 1
  return cfg
}

// ─── ดึงค่า config จาก Supabase system_config ────────────────────────────────
// รับ array ของ key แล้วคืน object { key: value }
// ใช้ service_role key เพื่อให้อ่านได้แม้ RLS เปิดอยู่
function _getSystemConfigValues(keys) {
  var endpoint = _supabaseEndpoint()
  var url = endpoint.url + '/rest/v1/system_config?select=key,value&key=in.(' + keys.join(',') + ')'
  var resp = UrlFetchApp.fetch(url, {
    method: 'get',
    muteHttpExceptions: true,
    headers: {
      apikey: endpoint.key,
      Authorization: 'Bearer ' + endpoint.key,
    },
  })
  var code = resp.getResponseCode()
  if (code < 200 || code >= 300) {
    throw new Error('อ่าน system_config ไม่สำเร็จ: ' + resp.getContentText())
  }
  var rows = JSON.parse(resp.getContentText() || '[]')
  var out = {}
  rows.forEach(function(row) { out[row.key] = row.value })
  return out
}

// ─── แปลง header ของชีทให้ตรงกับ field ใน Supabase ──────────────────────────
// รองรับชื่อหัวคอลัมน์ทั้งภาษาไทยและอังกฤษ
// คืน map ของ { fieldName: columnIndex } สำหรับใช้อ่านข้อมูลแต่ละแถว
function _buildStudentHeaderMap(headers) {
  var aliases = {
    student_code:      ['student_code', 'student_id', 'รหัสนักเรียน', 'เลขประจำตัว', 'รหัส'],
    full_name:         ['full_name', 'student_name', 'name', 'ชื่อ-สกุล', 'ชื่อสกุล', 'ชื่อนักเรียน', 'นักเรียน'],
    main_room:         ['main_room', 'grade_general', 'ห้องสามัญ', 'ชั้นสามัญ', 'ห้อง', 'ชั้นเรียน'],
    religion_room:     ['religion_room', 'grade_religion', 'ห้องศาสนา', 'ชั้นศาสนา'],
    gender:            ['gender', 'เพศ'],
    image_url:         ['image_url', 'photo_url', 'รูป', 'รูปภาพ', 'รูปนักเรียน', 'ลิงก์รูป', 'url รูป'],
    house_color:       ['house_color', 'ประจำสี', 'สี', 'สีกีฬา', 'สีประจำ'],
    sports_shirt_size: ['sports_shirt_size', 'shirt_size', 'ไซด์เสื้อกีฬาสี', 'ไซซ์เสื้อกีฬาสี', 'ไซด์เสื้อ', 'ไซซ์เสื้อ', 'size'],
  }
  var normalizedHeaders = headers.map(_normalizeHeader)
  var map = {}

  Object.keys(aliases).forEach(function(field) {
    aliases[field].some(function(alias) {
      var idx = normalizedHeaders.indexOf(_normalizeHeader(alias))
      if (idx >= 0) {
        map[field] = idx
        return true
      }
      return false
    })
  })
  return map
}

// ─── บันทึก records นักเรียนเข้า Supabase students ───────────────────────────
// ส่งทีละ 200 แถว (ป้องกัน payload ใหญ่เกิน)
// ใช้ on_conflict=student_code เพื่อ upsert — ถ้ามีรหัสซ้ำให้ merge แทนสร้างใหม่
function _upsertStudentsToSupabase(records) {
  if (!records.length) return 0
  var endpoint = _supabaseEndpoint()
  var url = endpoint.url + '/rest/v1/students?on_conflict=student_code'
  var written = 0

  // PostgREST PGRST102: ทุก row ใน batch ต้องมี key ชุดเดียวกัน
  // รวบรวม key ทั้งหมดที่มีในทุก record แล้ว fill null สำหรับที่ขาด
  var allKeys = {}
  records.forEach(function(r) { Object.keys(r).forEach(function(k) { allKeys[k] = true }) })
  var keys = Object.keys(allKeys)
  var normalized = records.map(function(r) {
    var row = {}
    keys.forEach(function(k) { row[k] = r.hasOwnProperty(k) ? r[k] : null })
    return row
  })

  for (var i = 0; i < normalized.length; i += 200) {
    var chunk = normalized.slice(i, i + 200)
    var resp = UrlFetchApp.fetch(url, {
      method: 'post',
      muteHttpExceptions: true,
      contentType: 'application/json',
      headers: {
        apikey: endpoint.key,
        Authorization: 'Bearer ' + endpoint.key,
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      payload: JSON.stringify(chunk),
    })
    var code = resp.getResponseCode()
    if (code < 200 || code >= 300) {
      throw new Error('บันทึก students ไม่สำเร็จ: ' + resp.getContentText())
    }
    written += chunk.length
  }
  return written
}

// ─── อ่าน Supabase endpoint จาก Script Properties ────────────────────────────
// ต้องตั้งค่า SUPABASE_URL และ SUPABASE_SERVICE_ROLE_KEY ก่อนใช้งาน
function _supabaseEndpoint() {
  var props = PropertiesService.getScriptProperties()
  var url = String(props.getProperty('SUPABASE_URL') || '').replace(/\/$/, '')
  var key = props.getProperty('SUPABASE_SERVICE_ROLE_KEY') || ''
  if (!url || !key) throw new Error('ยังไม่ได้ตั้ง SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY ใน Script Properties')
  return { url: url, key: key }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

// ทำให้ชื่อ header เป็น lowercase และลบ whitespace/เครื่องหมาย
// เพื่อให้ match ได้แม้ชื่อจะมีช่องว่างหรือตัวพิมพ์ต่างกัน
function _normalizeHeader(value) {
  return String(value || '').trim().toLowerCase().replace(/[\s_\-–—/().]+/g, '')
}

// แปลงค่าจากชีทให้เป็น string ที่สะอาด
// Date → yyyy-MM-dd, null/undefined → '', อื่นๆ → String.trim()
function _cleanCell(value) {
  if (value === null || value === undefined) return ''
  if (value instanceof Date) return Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd')
  return String(value).trim()
}

// ดึง URL รูปจาก formula =IMAGE("url") ในกรณีที่ cell แสดงเป็นรูปไม่ใช่ข้อความ
function _extractImageUrlFromFormula(formula) {
  var m = String(formula || '').match(/IMAGE\(\s*["']([^"']+)["']/i)
  return m ? m[1] : ''
}

// แยก Spreadsheet ID จาก URL หรือ ID ตรงๆ
// รองรับทั้ง "abc123" และ "https://docs.google.com/spreadsheets/d/abc123/edit"
function _extractSpreadsheetId(value) {
  var raw = String(value || '').trim()
  if (!raw) return ''
  var m = raw.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/)
  return m ? m[1] : raw
}

// สร้าง map ของ { รหัสนักเรียน: rowIndex } จาก range ที่กำหนด
// ใช้สำหรับหาแถวของนักเรียนเพื่อเขียนเช็คชื่อ/คะแนนได้เร็ว
function _buildStudentRowMap(sheet, rangeStr) {
  var parts    = rangeStr.match(/([A-Z]+)(\d+):([A-Z]+)(\d+)/)
  var startCol = _letterToCol(parts[1])
  var startRow = parseInt(parts[2])
  var endRow   = parseInt(parts[4])
  var values   = sheet.getRange(startRow, startCol, endRow - startRow + 1, 1).getValues()
  var map = {}
  values.forEach(function(row, i) {
    var code = String(row[0]).trim()
    if (code) map[code] = startRow + i
  })
  return map
}

// แปลง column letter เป็นตัวเลข เช่น A→1, B→2, Z→26, AA→27
function _letterToCol(letter) {
  letter = String(letter).toUpperCase()
  var col = 0
  for (var i = 0; i < letter.length; i++) {
    col = col * 26 + letter.charCodeAt(i) - 64
  }
  return col
}

// ส่ง response กลับแบบ JSON ปกติ (ใช้กับ doPost)
function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}
