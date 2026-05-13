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

function _jsonp(e, obj) {
  var callback = (e.parameter && e.parameter.callback) || 'callback'
  var body = callback + '(' + JSON.stringify(obj) + ');'
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT)
}

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

// ─── Sync Students from Google Sheet → Supabase students ────────────────────
// อ่านชีทนักเรียนของโรงเรียน แล้ว upsert เข้า students ด้วย student_code
// รองรับหัวคอลัมน์ไทย/อังกฤษ เช่น รหัสนักเรียน, ชื่อ-สกุล, ห้องสามัญ,
// ห้องศาสนา, รูปภาพ, ประจำสี, ไซด์เสื้อกีฬาสี

function syncStudentsFromSheetNow() {
  return _syncStudentsFromSheet({})
}

function runWeeklyStudentSync() {
  return _syncStudentsFromSheet({})
}

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

function _syncStudentsFromSheet(payload) {
  var cfg = _getStudentSyncConfig(payload || {})
  var sheetId = cfg.sheetId
  var tabName = cfg.tabName
  var headerRow = cfg.headerRow || 1

  if (!sheetId) return { ok: false, error: 'Missing student sync Sheet ID' }

  var ss = SpreadsheetApp.openById(sheetId)
  var sheet = tabName ? ss.getSheetByName(tabName) : ss.getSheets()[0]
  if (!sheet) return { ok: false, error: 'ไม่พบแท็บข้อมูลนักเรียน: ' + tabName }

  var lastRow = sheet.getLastRow()
  var lastCol = sheet.getLastColumn()
  if (lastRow <= headerRow || !lastCol) {
    return { ok: true, read: 0, written: 0, skipped: 0, message: 'ไม่พบข้อมูลหลังหัวตาราง' }
  }

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

    if (!record.student_code || !record.full_name) {
      skipped++
      return
    }
    records.push(record)
  })

  var written = _upsertStudentsToSupabase(records)
  return {
    ok: true,
    read: values.length,
    written: written,
    skipped: skipped,
    sheetId: sheetId,
    tabName: sheet.getName(),
  }
}

function _getStudentSyncConfig(payload) {
  var props = PropertiesService.getScriptProperties()
  var cfg = {
    sheetId: _extractSpreadsheetId(props.getProperty('STUDENT_SYNC_SHEET_ID') || ''),
    tabName: payload.tabName || props.getProperty('STUDENT_SYNC_TAB_NAME') || '',
    headerRow: parseInt(payload.headerRow || props.getProperty('STUDENT_SYNC_HEADER_ROW') || '1', 10) || 1,
  }

  if (cfg.sheetId) return cfg

  var sys = _getSystemConfigValues(['studentSyncSheetId', 'studentSyncTabName', 'studentSyncHeaderRow'])
  cfg.sheetId = _extractSpreadsheetId(sys.studentSyncSheetId || '')
  cfg.tabName = cfg.tabName || sys.studentSyncTabName || ''
  cfg.headerRow = parseInt(sys.studentSyncHeaderRow || cfg.headerRow || '1', 10) || 1
  return cfg
}

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

function _buildStudentHeaderMap(headers) {
  var aliases = {
    student_code: ['student_code', 'student_id', 'รหัสนักเรียน', 'เลขประจำตัว', 'รหัส'],
    full_name: ['full_name', 'student_name', 'name', 'ชื่อ-สกุล', 'ชื่อสกุล', 'ชื่อนักเรียน', 'นักเรียน'],
    main_room: ['main_room', 'grade_general', 'ห้องสามัญ', 'ชั้นสามัญ', 'ห้อง', 'ชั้นเรียน'],
    religion_room: ['religion_room', 'grade_religion', 'ห้องศาสนา', 'ชั้นศาสนา'],
    gender: ['gender', 'เพศ'],
    image_url: ['image_url', 'photo_url', 'รูป', 'รูปภาพ', 'รูปนักเรียน', 'ลิงก์รูป', 'url รูป'],
    house_color: ['house_color', 'ประจำสี', 'สี', 'สีกีฬา', 'สีประจำ'],
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

function _upsertStudentsToSupabase(records) {
  if (!records.length) return 0
  var endpoint = _supabaseEndpoint()
  var url = endpoint.url + '/rest/v1/students?on_conflict=student_code'
  var written = 0

  for (var i = 0; i < records.length; i += 200) {
    var chunk = records.slice(i, i + 200)
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

function _supabaseEndpoint() {
  var props = PropertiesService.getScriptProperties()
  var url = String(props.getProperty('SUPABASE_URL') || '').replace(/\/$/, '')
  var key = props.getProperty('SUPABASE_SERVICE_ROLE_KEY') || ''
  if (!url || !key) throw new Error('ยังไม่ได้ตั้ง SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY ใน Script Properties')
  return { url: url, key: key }
}

function _normalizeHeader(value) {
  return String(value || '').trim().toLowerCase().replace(/[\s_\-–—/().]+/g, '')
}

function _cleanCell(value) {
  if (value === null || value === undefined) return ''
  if (value instanceof Date) return Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd')
  return String(value).trim()
}

function _extractImageUrlFromFormula(formula) {
  var m = String(formula || '').match(/IMAGE\(\s*["']([^"']+)["']/i)
  return m ? m[1] : ''
}

function _extractSpreadsheetId(value) {
  var raw = String(value || '').trim()
  if (!raw) return ''
  var m = raw.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/)
  return m ? m[1] : raw
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
