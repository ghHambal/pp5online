import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { makeGpaFixture, createGpaClient } from './fixtures/gpa-data.mjs'
import { loadGpa, uiGpa } from './h1-gpa-loader.mjs'
const plain = value => JSON.parse(JSON.stringify(value))
async function run(db, before = false, options) {
  const client = createGpaClient(db, options)
  const value = await (await loadGpa(client, before))(1)
  return { value: plain(value), calls: client.calls, gpa: [uiGpa(value.samai), uiGpa(value.sasana)] }
}
const rows = value => [...value.samai, ...value.sasana]

test('H1 20 subjects: full before/after data + weighted GPA parity, 41 -> 6 reads', async () => {
  const db = makeGpaFixture(), before = await run(db, true), after = await run(db)
  assert.deepEqual(after.value, before.value); assert.deepEqual(after.gpa, before.gpa)
  assert.deepEqual(after.gpa, ['3.60', '4.00'])
  assert.equal(before.calls.length, 41); assert.equal(after.calls.length, 6)
  const result = new Map(rows(after.value).map(r => [r.classId, r]))
  assert.equal(result.get(1).score, 0); assert.equal(result.get(1).grade, 0)
  assert.equal(result.get(3).grade, null); assert.equal(result.get(3).scoredCount, 3)
  assert.equal(result.get(4).grade, null); assert.equal(result.get(4).scoredCount, 3)
  assert.equal(result.get(2).score, 33); assert.equal(result.get(2).grade, 4)
  assert.equal(result.get(7).hasRetake, true); assert.equal(result.get(7).score, 38)
  assert.ok(after.value.samai.some(r => r.classId === 5))
  assert.ok(after.value.sasana.some(r => r.classId === 6))
  assert.equal(result.get(1).totalCols, 4, 'special and SQL-null types stay excluded')
  for (const q of after.calls.filter(q => q.table === 'student_scores')) {
    assert.ok(q.filters.some(f => f[0] === 'eq' && f[1] === 'student_id' && f[2] === 1))
  }
  console.log('H1 normal: 41 -> 6 reads; GPA 3.60 / 4.00 identical')
})

test('source_class_id preserves enrolled-class GPA semantics; source scores are not substituted', async () => {
  const db = makeGpaFixture(2), before = await run(db, true), after = await run(db)
  assert.deepEqual(after.value, before.value)
  assert.equal(after.value.sasana[0].grade, 4, 'own class scores win over zero scores in source fixture')
  assert.ok(after.calls.filter(q => q.table === 'class_score_columns').every(q => !q.filters.find(f => f[0] === 'in')[2].includes(999999)))
})

test('batch columns/scores over default cap: complete parity, 81 -> 17 reads', async () => {
  const db = makeGpaFixture(40, 30), before = await run(db, true), after = await run(db)
  assert.ok(db.class_score_columns.length > 1000 && db.student_scores.length > 1000)
  assert.deepEqual(after.value, before.value); assert.deepEqual(after.gpa, before.gpa)
  assert.equal(before.calls.length, 81); assert.equal(after.calls.length, 17)
  assert.equal(rows(after.value).reduce((s, r) => s + r.totalCols, 0), 1200)
  for (const q of after.calls) for (const f of q.filters.filter(f => f[0] === 'in')) assert.ok(f[2].length <= 200)
  console.log('H1 40 x 30: 81 -> 17 reads; 1,200 columns preserved')
})

test('server cap smaller than requested limit: short pages are not mistaken for EOF', async () => {
  const db = makeGpaFixture(), oracle = await run(db, true, { cap: Infinity })
  const after = await run(db, false, { cap: 3 })
  assert.deepEqual(after.value, oracle.value); assert.deepEqual(after.gpa, oracle.gpa)
  assert.ok(after.calls.some(q => q.table === 'class_students' && q.filters.some(f => f[0] === 'gt' && f[1] === 'id')))
  assert.ok(after.calls.some(q => q.filters.some(f => f[0] === 'gt' && f[1] === 'id')))
  assert.ok(after.calls.some(q => q.filters.some(f => f[0] === 'gt' && f[1] === 'assignment_id')))
})

test('one class over 1,000 columns: match unchanged formula on FULL data, not truncated baseline', async () => {
  const db = makeGpaFixture(1, 1205)
  // Last score is absent: ignoring it would incorrectly treat the class as complete.
  db.student_scores = db.student_scores.filter(s => s.assignment_id !== 1205)
  const truncated = await run(db, true), oracle = await run(db, true, { cap: Infinity }), after = await run(db)
  assert.equal(truncated.value.samai[0].totalCols, 1000)
  assert.equal(truncated.value.samai[0].grade, 0)
  assert.equal(after.value.samai[0].totalCols, 1205)
  assert.equal(after.value.samai[0].scoredCount, 1204)
  assert.equal(after.value.samai[0].grade, null)
  assert.deepEqual(after.value, oracle.value); assert.deepEqual(after.gpa, oracle.gpa)
  console.log(`H1 single class 1,205 columns: ${truncated.calls.length} truncated reads -> ${after.calls.length} complete reads; full-data formula parity`)
})

test('over 1,000 enrollments and IDs across chunks: no omitted classes', async () => {
  const db = makeGpaFixture(1005, 1), oracle = await run(db, true, { cap: Infinity }), after = await run(db)
  assert.equal(rows(after.value).length, 1005)
  assert.deepEqual(after.value, oracle.value); assert.deepEqual(after.gpa, oracle.gpa)
})

test('empty enrollment, no columns, inaccessible nested metadata, original fallback and zero max', async () => {
  for (const mode of ['empty', 'no-columns', 'no-metadata', 'original-fallback', 'zero-max']) {
    const db = makeGpaFixture(2)
    if (mode === 'empty') db.class_students = []
    if (mode === 'no-columns') db.class_score_columns = []
    if (mode === 'no-metadata') { db.class_students[0].classes = null; db.class_students[1].classes.master_subjects = null }
    if (mode === 'original-fallback') db.student_scores.forEach(s => { s.final_score = null })
    if (mode === 'zero-max') db.class_score_columns.forEach(c => { c.max_score = 0 })
    const before = await run(db, true), after = await run(db)
    assert.deepEqual(after.value, before.value, mode); assert.deepEqual(after.gpa, before.gpa, mode)
    if (mode === 'empty') assert.equal(after.calls.length, 1)
    if (mode === 'no-columns') assert.equal(after.calls.filter(q => q.table === 'student_scores').length, 0)
  }
})

test('query errors reject the whole GPA load rather than using a partial page as valid grades', async () => {
  for (const failTable of ['class_students', 'class_score_columns', 'student_scores']) {
    await assert.rejects(run(makeGpaFixture(), false, { failTable }), e => e.code === '57014')
  }
})

test('no settled GPA cache; subsequent overview reads see score changes', async () => {
  const db = makeGpaFixture(2), client = createGpaClient(db), getGpa = await loadGpa(client)
  assert.equal((await getGpa(1)).samai[0].grade, 0)
  db.student_scores.filter(s => s.student_id === 1 && s.assignment_id <= 4).forEach(s => { s.final_score = 10 })
  assert.equal((await getGpa(1)).samai[0].grade, 4)
  assert.equal(client.calls.length, 12)
})

test('all GPA calculation and grouping code is retained verbatim apart from async map delimiter', () => {
  const before = readFileSync('tests/fixtures/student-gpa-before.js', 'utf8')
  const after = readFileSync('js/student-api.js', 'utf8')
  const extract = text => text.slice(text.indexOf('    const scoredCount = cols.filter'), text.indexOf('// ─── ขอย้ายวิชา') < 0 ? text.length : text.indexOf('// ─── ขอย้ายวิชา')).trim()
  assert.equal(extract(after), extract(before).replace('  }))', '  })'))
})


test('failure after successful pages never returns a partial GPA', async () => {
  for (const failAt of [2, 4, 6]) {
    await assert.rejects(run(makeGpaFixture(), false, { failAt }), e => e.code === '57014')
  }
})

test('nullable enrollment class_id is skipped without losing valid GPA rows', async () => {
  const db = makeGpaFixture(2)
  db.class_students.push({ id: 3, class_id: null, student_id: 1, classes: null })
  const before = await run(db, true), after = await run(db, false, { cap: 2 })
  assert.deepEqual(after.value, before.value); assert.deepEqual(after.gpa, before.gpa)
})
