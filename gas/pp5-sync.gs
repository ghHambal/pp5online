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
//
// เงื่อนไข: ชีทของครูต้องแชร์ edit ให้ email ของ Admin
//   (ทำได้ง่ายเพราะ Admin เป็นคนสร้างสำเนาให้ครูอยู่แล้ว)
//
// =========================================================================

function doGet(e) {
  try {
    var payload = e.parameter || {}
    var action = payload.action
    if (action === 'copy_sheet_template') return _jsonp(e, _copySheetTemplate(payload))
    return _jsonp(e, { ok: false, error: 'Unknown action: ' + action })
  } catch (err) {
    return _jsonp(e, { ok: false, error: err.message })
  }
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents)
    var action  = payload.action

    if (action === 'sync_attendance') return _syncAttendance(payload)
    if (action === 'sync_scores')     return _syncScores(payload)
    if (action === 'sync_cells')      return _syncCells(payload)
    if (action === 'sync_table')      return _syncTable(payload)
    if (action === 'share_sheet_view') return _shareSheetView(payload)

    return _json({ ok: false, error: 'Unknown action: ' + action })
  } catch (err) {
    return _json({ ok: false, error: err.message })
  }
}

function _jsonp(e, obj) {
  var callback = (e.parameter && e.parameter.callback) || 'callback'
  var body = callback + '(' + JSON.stringify(obj) + ');'
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT)
}

function _copySheetTemplate(payload) {
  if (!payload.templateSheetId) return { ok: false, error: 'Missing templateSheetId' }
  var name = payload.fileName || 'สำเนาไฟล์ ปพ.5'
  var file = DriveApp.getFileById(payload.templateSheetId)
  var copy = file.makeCopy(name)
  return {
    ok: true,
    newSheetId: copy.getId(),
    url: copy.getUrl(),
    name: copy.getName(),
  }
}

function _shareSheetView(payload) {
  if (!payload.sheetId) return _json({ ok: false, error: 'Missing sheetId' })

  var file = DriveApp.getFileById(payload.sheetId)
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW)

  return _json({ ok: true, sheetId: payload.sheetId, url: file.getUrl() })
}

// ─── Sync เช็คชื่อ ───────────────────────────────────────────────────────────
// payload: {
//   sheetId, tabName, studentColRange, attStartCol,
//   records: [{studentCode, sessionIndex, status}]
// }
// status values: ม=มา, ข=ขาด, ส=สาย, ก=ลากิจ, ป=ป่วย

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

// ─── Sync คะแนน ──────────────────────────────────────────────────────────────
// payload: {
//   sheetId, tabName, studentColRange,
//   records: [{studentCode, colLetter, value}]
// }

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

// ─── Sync Cells (ข้อมูลรายวิชา — ระบุ cell โดยตรง) ──────────────────────────
// payload: {
//   sheetId, tabName,
//   cells: [{cell: 'C9', value: 'คณิตศาสตร์'}, ...]
// }

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

// ─── Sync Table (จับคู่ด้วย header แล้วเพิ่ม/อัปเดตแถว) ───────────────────
// payload: {
//   sheetId, tabName,
//   headers: ['subject_group', ...],
//   keyField: 'subject_code',
//   records: [{subject_group:'ACDM', ...}]
// }

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

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

function _letterToCol(letter) {
  letter = String(letter).toUpperCase()
  var col = 0
  for (var i = 0; i < letter.length; i++) {
    col = col * 26 + letter.charCodeAt(i) - 64
  }
  return col
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}
