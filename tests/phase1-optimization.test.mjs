// Run: node --experimental-vm-modules --test tests/phase1-optimization.test.mjs
// Baseline is the unchanged source revision recorded before Phase 1.
import test from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'

const baseline = '0fb45d585b88ec136d88aec22026423fb88b282e'
const read = (file, before = false) => before
  ? execFileSync('git', ['show', `${baseline}:${file}`], { encoding: 'utf8' })
  : readFileSync(file, 'utf8')
const json = value => JSON.parse(JSON.stringify(value))
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function mockClient(respond = () => ({ data: [], error: null })) {
  const calls = [], listeners = []
  let session = { access_token: 'test-token-A', user: { id: 'user-A' } }
  const client = {
    calls,
    auth: {
      getSession: async () => ({ data: { session }, error: null }),
      onAuthStateChange: fn => { listeners.push(fn); return { data: { subscription: { unsubscribe() {} } } } },
    },
    emitAuth(event) { listeners.forEach(fn => fn(event, session)) },
    switchSession(next) { session = next; listeners.forEach(fn => fn(next ? 'SIGNED_IN' : 'SIGNED_OUT', next)) },
    from: table => builder(table),
    rpc: (table, params) => builder(table, params),
  }
  function builder(table, params) {
    const q = { table, params, filters: [], columns: null }
    const chain = new Proxy({}, { get(_, method) {
      if (method === 'then') return (resolve, reject) => {
        calls.push(q)
        return delay(5).then(() => respond(q, calls)).then(resolve, reject)
      }
      return (...args) => {
        if (method === 'select') q.columns = args[0]
        else if (method === 'single' || method === 'maybeSingle') q.single = true
        else q.filters.push([method, ...args])
        return chain
      }
    } })
    return chain
  }
  return client
}

async function modules(client, before = false) {
  const stored = new Map()
  const context = vm.createContext({ console: { warn() {}, error() {} }, structuredClone,
    setTimeout, clearTimeout, sessionStorage: { getItem: key => stored.get(key) ?? null } })
  const cache = new Map()
  function load(file) {
    if (cache.has(file)) return cache.get(file)
    let mod
    if (file === 'js/supabase.js') mod = new vm.SyntheticModule(['supabase'], function () { this.setExport('supabase', client) }, { context })
    else if (file === 'js/teacher-views-utils.js') mod = new vm.SyntheticModule(['_generateSessions', '_dateInputValue'], function () {
      this.setExport('_generateSessions', () => []); this.setExport('_dateInputValue', () => '')
    }, { context })
    else mod = new vm.SourceTextModule(read(file, before), { context, identifier: file })
    cache.set(file, mod)
    return mod
  }
  return { stored, async get(file) { const mod = load(file); await mod.link((specifier, parent) => load(path.posix.normalize(path.posix.join(path.posix.dirname(parent.identifier), specifier)))); await mod.evaluate(); return mod.namespace } }
}

const owned = { id: 11, subject_name: 'Math', teacher_id: 7 }
const co = { id: 12, subject_name: 'Science', teacher_id: 8 }
function fixtures(q) {
  const filter = (op, col) => q.filters.find(f => f[0] === op && f[1] === col)?.[2]
  let data = []
  if (q.table === 'master_subjects') data = [owned]
  if (q.table === 'subject_co_teachers') data = [{ subject_id: 11, master_subjects: owned }, { subject_id: 12, master_subjects: co }]
  if (q.table === 'classes') data = q.single ? { skill_group: 'วิชาการ' } : [
    { id: 101, course_id: 11, academic_year: 2569, semester: 1 },
    { id: 102, course_id: 12, academic_year: 2568, semester: 2 },
  ].filter(c => !filter('in', 'course_id') || filter('in', 'course_id').includes(c.course_id))
  if (q.table === 'system_config') data = [{ key: 'academicYear', value: '2569' }, { key: 'semester', value: '1' }]
  if (q.table === 'teachers') data = { id: 7, profile_id: 'user-A', teachers_quota: { is_paid: false } }
  if (q.table === 'class_score_columns') data = [{ id: 21, assignment_type: 'midterm', max_score: 50 }, { id: 22, assignment_type: 'final', max_score: 50 }]
  if (q.table === 'student_scores') data = [
    { student_id: 1, assignment_id: 21, original_score: 0, final_score: 0, retake_score: null, score_history: [] },
    { student_id: 1, assignment_id: 22, original_score: 10.25, final_score: 12.75, retake_score: 12.75, score_history: [{ d: 10.25 }, { d: 2.5 }] },
    { student_id: 2, assignment_id: 21, original_score: null, final_score: null, retake_score: null },
  ]
  if (q.table === 'score_column_config') {
    data = [
      { assignment_type: 'กลางภาค', allowed_columns: 'D, E, D', is_fixed: true },
      { assignment_type: 'ปลายภาค', allowed_columns: ['F', 'G'], is_fixed: false },
      { assignment_type: 'ระหว่างเรียน', allowed_columns: null, is_fixed: false },
    ].filter(row => !filter('eq', 'assignment_type') || row.assignment_type === filter('eq', 'assignment_type'))
  }
  return { data, error: null, count: 0 }
}

test('H3 before/after: concurrent teacher context preserves co-teachers and all terms', async () => {
  const results = []
  for (const before of [true, false]) {
    const client = mockClient(fixtures), loader = await modules(client, before), api = await loader.get('js/api.js')
    const result = await Promise.all([
      api.getMySubjects(7), api.getMyClasses(7), api.getMyClasses(7),
      api.getSystemConfig(), api.getSystemConfig(), api.getMyTeacherProfile('user-A'), api.getMyTeacherProfile('user-A'),
    ])
    results.push({ result: json(result), count: client.calls.length })
    assert.equal(result[1].length, 2)
    result[1][0].id = 999
    if (!before) assert.equal(result[2][0].id, 101, 'consumers have independent mutable copies')
  }
  assert.deepEqual(results[0].result, results[1].result)
  assert.equal(results[0].count, 12)
  assert.equal(results[1].count, 5)
  console.log(`H3 concurrent context requests: ${results[0].count} -> ${results[1].count}`)
})

test('H3 no settled cache, failure is evicted, missing teacher remains fail closed', async () => {
  let fail = true
  const client = mockClient(q => fail ? { data: null, error: { code: '57014', message: 'timeout' } } : fixtures(q))
  const api = await (await modules(client)).get('js/api.js')
  await assert.rejects(api.getSystemConfig(), e => e.code === '57014')
  fail = false
  await api.getSystemConfig(); await api.getSystemConfig()
  assert.equal(client.calls.length, 3)
  assert.deepEqual(json(await api.getMySubjects(null)), [])
  assert.deepEqual(json(await api.getMyClasses(null)), [])
  assert.equal(client.calls.length, 3)
})

test('H3 rejects late results on logout, role-token/user switch and impersonation change', async () => {
  for (const mode of ['logout', 'role', 'user', 'impersonation']) {
    const client = mockClient(fixtures), loader = await modules(client), api = await loader.get('js/api.js')
    const old = api.getSystemConfig()
    const rejection = assert.rejects(old, e => e.code === 'READ_SCOPE_CHANGED')
    await delay(1)
    if (mode === 'impersonation') loader.stored.set('impersonated_teacher', JSON.stringify({ id: 9, profile_id: 'user-B', session_id: 'imp-B' }))
    else client.switchSession(mode === 'logout' ? null : { access_token: `new-${mode}`, user: { id: mode === 'role' ? 'user-A' : 'user-B' } })
    await api.getSystemConfig(); await rejection
    assert.equal(client.calls.length, 2, mode)
  }
})

test('H6 teacher retries ONLY a missing overview_prefs column', async () => {
  for (const error of [
    { code: '57014', message: 'timeout' }, { code: '42501', message: 'permission denied' },
    { code: '', message: 'TypeError: Failed to fetch' }, { code: '42703', message: 'column other_column does not exist' },
    { code: '42703', message: 'column teachers.overview_prefs does not exist' },
    { code: 'PGRST204', message: "Could not find the 'overview_prefs' column" },
  ]) {
    const client = mockClient((q, calls) => calls.length === 1 ? { data: null, error } : fixtures(q))
    const api = await (await modules(client)).get('js/api.js')
    if (error.message.includes('overview_prefs')) { assert.equal((await api.getMyTeacherProfile('user-A')).id, 7); assert.equal(client.calls.length, 2) }
    else { await assert.rejects(api.getMyTeacherProfile('user-A'), e => e.code === error.code); assert.equal(client.calls.length, 1) }
  }
})

test('H6 enrollment empty is authoritative; errors do not create fallback reads', async () => {
  for (const error of [null, { code: '57014' }, { code: '42501' }, { code: '', message: 'network' }]) {
    const client = mockClient(() => ({ data: error ? null : [], error }))
    const api = await (await modules(client)).get('js/student-api.js')
    if (error) await assert.rejects(api.getMyEnrolledClasses(1), e => e.code === error.code)
    else assert.deepEqual(json(await api.getMyEnrolledClasses(1)), [])
    assert.equal(client.calls.length, 1)
  }
})

test('H6 missing enrollment RPC preserves legacy path but does not retry denied embeds', async () => {
  for (const denied of [false, true]) {
    const client = mockClient(q => q.params
      ? { data: null, error: { code: 'PGRST202', message: 'Could not find public.get_student_enrolled_classes' } }
      : denied ? { data: null, error: { code: '42501' } } : { data: [{ classes: { id: 101 } }], error: null })
    const api = await (await modules(client)).get('js/student-api.js')
    if (denied) await assert.rejects(api.getMyEnrolledClasses(1), e => e.code === '42501')
    else assert.deepEqual(json(await api.getMyEnrolledClasses(1)), [{ id: 101 }])
    assert.equal(client.calls.length, 2)
  }
})

test('H4 before/after: identical score rows and column options, 9 reads -> 4', async () => {
  const results = [], types = ['กลางภาค', 'ปลายภาค', 'ระหว่างเรียน']
  for (const before of [true, false]) {
    const client = mockClient(fixtures), api = await (await modules(client, before)).get('js/api.js')
    let cols, scores, opts
    if (before) [cols, scores, ...opts] = await Promise.all([api.getScoreColumns(101), api.getStudentScores(101), ...types.map(t => api.getSheetColumnOptions(102, t))])
    else {
      const columnsPromise = api.getScoreColumns(101)
      ;[cols, scores, opts] = await Promise.all([columnsPromise, columnsPromise.then(c => api.getStudentScores(101, c)), api.getSheetColumnOptionsForTypes(102, types)])
    }
    results.push({ data: json({ cols, scores, opts }), count: client.calls.length })
    assert.ok(client.calls.filter(c => c.table === 'class_score_columns').every(c => c.filters.some(f => f[1] === 'class_id' && f[2] === 101)))
    assert.ok(client.calls.filter(c => c.table === 'classes').every(c => c.filters.some(f => f[1] === 'id' && f[2] === 102)))
  }
  assert.deepEqual(results[0].data, results[1].data)
  assert.equal(results[0].count, 9); assert.equal(results[1].count, 4)
  console.log('H4 columns/config/score reads: 9 -> 4; virtual source class scope preserved')
})

test('H4 empty columns skip score reads and fresh reads remain fresh after changes', async () => {
  const client = mockClient(fixtures), api = await (await modules(client)).get('js/api.js')
  assert.deepEqual(json(await api.getStudentScores(101, [])), [])
  assert.equal(client.calls.length, 0)
  await api.getStudentScores(101); await api.getStudentScores(101)
  assert.equal(client.calls.length, 4)
})

test('score saving and GPA calculation source are unchanged', () => {
  const extract = (source, start, end) => source.slice(source.indexOf(start), source.indexOf(end, source.indexOf(start)))
  assert.equal(extract(read('js/api.js'), 'export async function saveStudentScore(', '// ─── Prayer Records'), extract(read('js/api.js', true), 'export async function saveStudentScore(', '// ─── Prayer Records'))
  assert.equal(extract(read('js/student-api.js'), '    const scoredCount = cols.filter', '  const valid = results.filter'), extract(read('js/student-api.js', true), '    const scoredCount = cols.filter', '  const valid = results.filter').replace('  }))', '  })'))
  assert.equal(extract(read('js/student-api.js'), '  const valid = results.filter', '// ─── ขอย้ายวิชา'), extract(read('js/student-api.js', true), '  const valid = results.filter', '// ─── ขอย้ายวิชา'))
  assert.equal(extract(read('js/teacher-views-grades.js'), "      tbl.addEventListener('change'", '      // ── Delta preview'), extract(read('js/teacher-views-grades.js', true), "      tbl.addEventListener('change'", '      // ── Delta preview'))
})

test('H6 before/after timeout request counts: profile 2 -> 1, enrollment 3 -> 1', async () => {
  for (const [file, fn, arg, baselineCalls] of [
    ['js/api.js', 'getMyTeacherProfile', 'user-A', 2],
    ['js/student-api.js', 'getMyEnrolledClasses', 1, 3],
  ]) {
    const counts = []
    for (const before of [true, false]) {
      const client = mockClient(() => ({ data: null, error: { code: '57014', message: 'statement timeout' } }))
      const api = await (await modules(client, before)).get(file)
      await assert.rejects(api[fn](arg), e => e.code === '57014')
      counts.push(client.calls.length)
    }
    assert.deepEqual(counts, [baselineCalls, 1])
    console.log(`H6 ${fn} timeout requests: ${counts.join(' -> ')}`)
  }
})

test('anonymous reads and repeated same-session auth notifications do not poison dedup', async () => {
  const client = mockClient(fixtures)
  client.switchSession(null)
  const loader = await modules(client), api = await loader.get('js/api.js')
  const pending = api.getSystemConfig()
  await delay(1)
  client.emitAuth('INITIAL_SESSION')
  client.emitAuth('SIGNED_IN')
  const value = await pending
  assert.equal(value.academicYear, '2569')
  assert.equal(client.calls.length, 1)
})
