// Start Vite on 127.0.0.1:4173, then: node tests/phase1-browser.mjs
// All Supabase data is mocked; external traffic is blocked. No production writes.
import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
const base = 'http://127.0.0.1:4173'
const revision = '0fb45d585b88ec136d88aec22026423fb88b282e'
const source = (f, before) => before ? execFileSync('git', ['show', `${revision}:${f}`], { encoding: 'utf8' }) : readFileSync(f, 'utf8')
const browser = await chromium.launch({ headless: true })

async function setup(before, mode) {
  const context = await browser.newContext()
  await context.addInitScript(({ mode }) => {
    window.__calls = []; window.__authListeners = []; window.__optionalResolvers = []
    window.__optionalBlocked = mode === 'login'; window.__error = null
    window.__releaseExtras = () => { window.__optionalBlocked = false; window.__optionalResolvers.splice(0).forEach(fn => fn()) }
    const cols = [
      { id: 21, assignment_name: 'กลางภาค', assignment_type: 'midterm', max_score: 50, column_type: 'regular', sort_order: 1 },
      { id: 22, assignment_name: 'ปลายภาค', assignment_type: 'final', max_score: 50, column_type: 'regular', sort_order: 2 },
    ]
    const subject = { id: 11, teacher_id: 7, subject_code: 'M101', subject_name: 'คณิตศาสตร์', subject_group: 'ACDM', credit: 1 }
    const cls = { id: 101, course_id: 11, class_name: 'ม.1/1', skill_group: 'วิชาการ', academic_year: 2569, semester: 1, master_subjects: subject }
    window.__class = cls
    const builder = (table, params) => {
      const q = { table, params, filters: [], columns: '' }
      const chain = new Proxy({}, { get(_, method) {
        if (method === 'then') return async (resolve, reject) => {
          try {
            window.__calls.push(q)
            if (window.__optionalBlocked && ['system_config', 'login_logs'].includes(table)) await new Promise(r => window.__optionalResolvers.push(r))
            await new Promise(r => setTimeout(r, 10))
            if (window.__error && (params || table === 'teachers')) return resolve({ data: null, error: window.__error })
            let data = []
            if (table === 'system_config') data = [{ key: 'academicYear', value: '2569' }, { key: 'semester', value: '1' }]
            if (table === 'lookup_student_by_code') data = [{ id: 1, student_code: '00001', full_name: 'นักเรียนทดสอบ', profile_id: 'student-test', has_account: true, login_email: 'test@example.invalid', email: 'test@example.invalid' }]
            if (table === 'master_subjects') data = [subject]
            if (table === 'subject_co_teachers') data = [{ subject_id: 12, master_subjects: { ...subject, id: 12, teacher_id: 8, subject_name: 'วิชาครูร่วม' } }]
            if (table === 'classes') data = q.single ? { skill_group: 'วิชาการ' } : [cls, { ...cls, id: 102, course_id: 12 }]
            if (table === 'class_students') data = [
              { id: 1, is_active: true, students: { id: 1, student_code: '00001', full_name: 'นักเรียนทดสอบหนึ่ง' } },
              { id: 2, is_active: true, students: { id: 2, student_code: '00002', full_name: 'นักเรียนทดสอบสอง' } },
            ]
            if (table === 'class_score_columns') data = q.filters.some(f => f[1] === 'auto_attendance_sync') ? [] : cols
            if (table === 'student_scores') data = [
              { student_id: 1, assignment_id: 21, original_score: 0, final_score: 0, score_history: [] },
              { student_id: 1, assignment_id: 22, original_score: 10.25, final_score: 12.75, retake_score: 12.75, score_history: [{ d: 10.25 }, { d: 2.5 }] },
              { student_id: 2, assignment_id: 21, original_score: null, final_score: null },
            ]
            if (table === 'score_column_config') data = ['กลางภาค', 'ปลายภาค', 'ระหว่างเรียน'].map(assignment_type => ({ assignment_type, allowed_columns: 'D,E', is_fixed: false }))
            if (table === 'class_score_display_settings') data = { rounding: null }
            if (q.single && Array.isArray(data)) data = data[0] ?? null
            resolve({ data, error: null, count: 0 })
          } catch (error) { reject(error) }
        }
        return (...args) => {
          if (method === 'select') q.columns = args[0]
          else if (method === 'single' || method === 'maybeSingle') q.single = true
          else { q.filters.push([method, ...args]); if (['insert', 'upsert', 'update', 'delete'].includes(method)) throw new Error(`Unexpected write: ${table}.${method}`) }
          return chain
        }
      } })
      return chain
    }
    window.__supabase = {
      from: table => builder(table), rpc: (table, params) => builder(table, params),
      auth: {
        getSession: async () => ({ data: { session: mode === 'login' ? null : { access_token: 'test-token', user: { id: 'teacher-test' } } } }),
        getUser: async () => ({ data: { user: { id: 'teacher-test' } } }),
        onAuthStateChange: fn => { window.__authListeners.push(fn); return { data: { subscription: { unsubscribe() {} } } } },
        signInWithPassword: async args => { window.__calls.push({ table: 'AUTH', args }); return { data: {}, error: null } },
      },
    }
  }, { mode })
  await context.route('**/*', async route => {
    const url = new URL(route.request().url())
    if (url.origin !== base) return route.abort()
    if (url.pathname.endsWith('/js/supabase.js')) return route.fulfill({ contentType: 'application/javascript', body: 'export const supabase = window.__supabase' })
    if (url.pathname === '/phase1-harness.html') return route.fulfill({ contentType: 'text/html', body: '<html><body><h1 id="page-title"></h1><main id="main-content"></main></body></html>' })
    if (before && /\/(js\/api.js|js\/teacher-views-grades.js|js\/prayer-dashboard.js|student-login.html)$/.test(url.pathname)) {
      const f = url.pathname.match(/(js\/api.js|js\/teacher-views-grades.js|js\/prayer-dashboard.js|student-login.html)$/)[1]
      return route.fulfill({ contentType: f.endsWith('html') ? 'text/html' : 'application/javascript', body: source(f, true).replaceAll("from '/js/", "from '/pp5online/js/") })
    }
    return route.continue()
  })
  const page = await context.newPage()
  page.setDefaultTimeout(10000)
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  return { context, page, errors }
}

try {
  for (const before of [true, false]) {
    const { context, page, errors } = await setup(before, 'login')
    await page.goto(`${base}/pp5online/student-login.html`, { waitUntil: 'domcontentloaded' })
    await page.waitForFunction(() => window.__calls.some(c => c.table === 'system_config'))
    await page.locator('#inp-code').fill('00001')
    await page.locator('#btn-next').click()
    if (before) {
      await page.waitForTimeout(100)
      assert.equal(await page.evaluate(() => __calls.filter(c => c.table === 'lookup_student_by_code').length), 0)
      await page.evaluate(() => __releaseExtras())
      await page.waitForFunction(() => __authListeners.length > 0)
      await page.locator('#btn-next').click()
    }
    await page.waitForFunction(() => __calls.some(c => c.table === 'lookup_student_by_code'))
    if (!before) assert.equal(await page.evaluate(() => __optionalBlocked), true)
    await page.evaluate(() => __authListeners.forEach(fn => fn('PASSWORD_RECOVERY', {})))
    assert.equal(await page.locator('#modal-reset-pw').evaluate(el => el.classList.contains('hidden')), false)
    await page.evaluate(() => document.getElementById('modal-reset-pw').classList.add('hidden'))
    await page.locator('#inp-password').fill('test-password')
    await page.locator('#btn-login').click()
    await page.waitForFunction(() => __calls.some(c => c.table === 'AUTH'))
    assert.deepEqual(errors, [])
    console.log(`C1 ${before ? 'before: blocked until extras finish' : 'after: lookup + Auth work while extras are pending'}`)
    await context.close()
  }

  for (const before of [true, false]) {
    const { context, page, errors } = await setup(before, 'prayer')
    await page.addInitScript(() => { window.__error = { code: '57014', message: 'statement timeout' } })
    await page.goto(`${base}/pp5online/prayer-dashboard.html`)
    await page.waitForFunction(() => __calls.some(c => c.table === 'get_public_prayer_dashboard_snapshot'))
    await page.waitForTimeout(150)
    const calls = await page.evaluate(() => __calls.map(c => c.table))
    assert.equal(calls.length, before ? 3 : 1)
    assert.deepEqual(errors, [])
    console.log(`H6 prayer timeout ${before ? 'before' : 'after'} requests=${calls.length}; polling unchanged`)
    await context.close()
  }

  const snapshots = []
  for (const before of [true, false]) {
    const { context, page, errors } = await setup(before, 'grid')
    await page.goto(`${base}/phase1-harness.html`)
    await page.evaluate(async () => {
      const { renderGradesGrid } = await import('/pp5online/js/teacher-views-grades.js')
      await renderGradesGrid({ id: 7, full_name: 'ครูทดสอบ' }, window.__class)
    })
    await page.locator('.grade-input').first().waitFor()
    const snap = await page.evaluate(() => ({
      inputs: [...document.querySelectorAll('.grade-input')].map(el => ({ student: el.dataset.sid, col: el.dataset.col, value: el.value })),
      totals: [...document.querySelectorAll('[id^="gtotal-"],[id^="ggrade-"],[id^="gmid-"],[id^="gfin-"]')].map(el => [el.id, el.textContent]),
      calls: __calls.length,
    }))
    snapshots.push(snap)
    // Navigate through the real class view into the real grade view again.
    await page.evaluate(async () => {
      const { renderMyClasses } = await import('/pp5online/js/teacher-views-classes.js')
      await renderMyClasses({ id: 7, full_name: 'ครูทดสอบ' })
    })
    assert.ok(await page.locator('#main-content').innerText().then(t => t.includes('ม.1/1')))
    await page.evaluate(async () => {
      const { renderGradesGrid } = await import('/pp5online/js/teacher-views-grades.js')
      await renderGradesGrid({ id: 7, full_name: 'ครูทดสอบ' }, window.__class)
    })
    assert.equal(await page.locator('.grade-input').count(), snap.inputs.length)
    assert.deepEqual(errors, [])
    console.log(`H4 browser ${before ? 'before' : 'after'} grid requests=${snap.calls}; class navigation OK`)
    await context.close()
  }
  assert.deepEqual(snapshots[0].inputs, snapshots[1].inputs)
  assert.deepEqual(snapshots[0].totals, snapshots[1].totals)
  assert.equal(snapshots[0].calls - snapshots[1].calls, 5)
  console.log('Browser score cells/totals/grades before and after are identical')
} finally { await browser.close() }
