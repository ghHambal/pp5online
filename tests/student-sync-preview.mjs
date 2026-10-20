import assert from 'node:assert/strict'
import vm from 'node:vm'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'

const source = readFileSync(new URL('../gas/pp5-sync.gs', import.meta.url), 'utf8')
const ctx = vm.createContext({ console, Utilities: {
  DigestAlgorithm: { SHA_256: 'sha256' }, Charset: { UTF_8: 'utf8' },
  computeDigest: (_, data) => createHash('sha256').update(data).digest(),
  base64EncodeWebSafe: data => Buffer.from(data).toString('base64url'),
} })
vm.runInContext(source, ctx)
let rows = [['12345', 'เดิม', 'ม.2/1'], ['12346', 'ใหม่', 'ม.2/2']]
let existing = [{ student_code: '12345', full_name: 'เดิม', main_room: 'ม.2/0', is_active: true },
  { student_code: '12347', full_name: 'ไม่พบ', is_active: true }]
const calls = []
ctx._getStudentSyncConfig = () => ({ sheetId: 'sheet', tabName: 'studentsData', headerRow: 1, academicYear: '2569', semester: '2' })
ctx.SpreadsheetApp = { openById: () => ({ getSheetByName: () => ({
  getLastRow: () => rows.length + 1, getLastColumn: () => 3, getName: () => 'studentsData',
  getRange: (r) => ({ getValues: () => r === 1 ? [['student_code', 'full_name', 'main_room']] : rows,
    getFormulas: () => rows.map(() => ['', '', '']) }),
}) }) }
ctx._fetchStudentsForSync = () => structuredClone(existing)
ctx._upsertStudentsToSupabase = records => { calls.push(['write', records]); return records.length }
ctx._insertSyncLog = log => calls.push(['log', log])
ctx._autoEnrollStudentsByMainRoom = () => calls.push(['enroll'])
const run = options => ctx._syncStudentsFromSheetUnlocked(options)
let preview = run({ dryRun: true })
assert.equal(preview.newCount, 1)
assert.equal(preview.changedCount, 1)
assert.equal(preview.missingCount, 1)
assert.equal(calls.length, 0, 'preview must never write or enroll')
assert.equal(run({ expectedFingerprint: preview.fingerprint }).written, 2)
assert.equal(calls[1][1].deactivated_count, 0)
rows[0][2] = 'ม.2/3'
assert.throws(() => run({ expectedFingerprint: preview.fingerprint }), /ข้อมูลเปลี่ยน/)
assert.equal(calls.length, 3, 'stale confirmation must not write')
rows.push(['12345', 'ซ้ำ', 'ม.2/4'])
preview = run({ dryRun: true })
assert.equal(preview.canSync, false)
assert.equal(preview.duplicateCount, 1)
assert.throws(() => run({ expectedFingerprint: preview.fingerprint }), /รหัสนักเรียนซ้ำ/)
rows = [['12345', 'เดิม', '']]
existing[0].is_active = false
preview = run({ dryRun: true })
assert.equal(preview.newCount, 0)
assert.equal(preview.reactivatedCount, 1)
run({ expectedFingerprint: preview.fingerprint })
assert.equal(calls.at(-3)[1][0].main_room, 'ม.2/0', 'blank source must preserve existing room')
assert.throws(() => { rows = []; run({ dryRun: true }) }, /ไม่พบข้อมูล/)

// Exercise real pagination and config precedence separately.
const db = vm.createContext({})
vm.runInContext(source, db)
db._supabaseEndpoint = () => ({ url: 'https://example.test', key: 'test' })
let requests = 0
db.UrlFetchApp = { fetch: url => {
  requests++
  assert.match(url, requests === 1 ? /offset=0$/ : /offset=1000$/)
  return { getResponseCode: () => 200, getContentText: () => JSON.stringify(Array.from({length: requests === 1 ? 1000 : 5}, (_, i) => ({ student_code: String(i) }))) }
} }
assert.equal(db._fetchStudentsForSync().length, 1005)
db.UrlFetchApp.fetch = () => ({ getResponseCode: () => 500 })
assert.throws(() => db._fetchStudentsForSync(), /อ่านรายชื่อ/)
db.PropertiesService = { getScriptProperties: () => ({ getProperty: () => 'old-sheet' }) }
db._getSystemConfigValues = () => ({ studentSyncSheetId: 'new-sheet', studentSyncTabName: 'new-tab', studentSyncHeaderRow: '2' })
assert.equal(db._getStudentSyncConfig({}).sheetId, 'new-sheet')
assert.equal(db._getStudentSyncConfig({ sourceSheetId: 'manual-sheet' }).sheetId, 'manual-sheet')
assert.throws(() => db._getStudentSyncConfig({ headerRow: '1.5' }), /จำนวนเต็ม/)
let released = 0
db.LockService = { getScriptLock: () => ({ tryLock: () => false, releaseLock: () => released++ }) }
assert.throws(() => db._syncStudentsFromSheet({}), /กำลังทำงาน/)
db.LockService.getScriptLock = () => ({ tryLock: () => true, releaseLock: () => released++ })
db._syncStudentsFromSheetUnlocked = () => { throw new Error('test failure') }
assert.throws(() => db._syncStudentsFromSheet({}), /test failure/)
assert.equal(released, 1, 'lock must release even on failure')
console.log('Student sync preview: passed (no writes, counts, duplicate/stale guards, blanks, pagination, config precedence, lock)')
