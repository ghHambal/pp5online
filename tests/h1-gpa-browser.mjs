// Start Vite on 127.0.0.1:4173; run node tests/h1-gpa-browser.mjs.
// Real Student Overview + GPA popup; all data is synthetic, no external access.
import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { makeGpaFixture } from './fixtures/gpa-data.mjs'
const base = 'http://127.0.0.1:4173'
const browser = await chromium.launch({ headless: true })
const beforeGpa = readFileSync('tests/fixtures/student-gpa-before.js', 'utf8').slice(readFileSync('tests/fixtures/student-gpa-before.js', 'utf8').indexOf('export async function getStudentGPA'))
try {
  for (const [classes, columns] of [[20, 4], [40, 30]]) {
    const snapshots = []
    for (const before of [true, false]) {
      const context = await browser.newContext()
      await context.route('**/*', async route => {
        const url = new URL(route.request().url())
        if (url.origin !== base) return route.abort()
        if (url.pathname.endsWith('/js/supabase.js')) return route.fulfill({ contentType: 'application/javascript', body: `
          import { createGpaClient } from '/pp5online/tests/fixtures/gpa-data.mjs'
          export const supabase = createGpaClient(${JSON.stringify(makeGpaFixture(classes, columns))})
          window.__client = supabase
        ` })
        if (url.pathname === '/h1-harness.html') return route.fulfill({ contentType: 'text/html', body: '<html><head><link rel="stylesheet" href="/pp5online/css/style.css"></head><body><main id="stu-content"></main></body></html>' })
        if (before && url.pathname.endsWith('/js/student-api.js')) {
          const current = readFileSync('js/student-api.js', 'utf8')
          const start = current.indexOf('// ─── GPA calculation'), end = current.indexOf('// ─── ขอย้ายวิชา')
          return route.fulfill({ contentType: 'application/javascript', body: current.slice(0, start) + beforeGpa + current.slice(end) })
        }
        return route.continue()
      })
      const page = await context.newPage()
      page.setDefaultTimeout(15000)
      const errors = []
      page.on('pageerror', error => errors.push(error.message))
      await page.goto(`${base}/h1-harness.html`)
      await page.evaluate(async () => {
        const { renderStudentOverview } = await import('/pp5online/js/student-views.js')
        await renderStudentOverview({ id: 1, full_name: 'นักเรียนทดสอบ', student_code: '00001', main_room: 'ม.1/1', religion_room: 'อป.1/1' })
      })
      await page.locator('#btn-stu-gpa').click()
      const snap = await page.evaluate(() => ({
        samai: document.getElementById('gpa-pop-samai').innerText,
        sasana: document.getElementById('gpa-pop-sasana').innerText,
        gpa: ['samai','sasana'].map(k => document.getElementById(`gpa-val-btn-${k}`).textContent),
        calls: __client.calls.length,
      }))
      snapshots.push(snap)
      await page.locator('[data-tab="sasana"]').click()
      assert.equal(await page.locator('#gpa-pop-sasana').evaluate(el => el.classList.contains('hidden')), false)
      await page.locator('#gpa-view-card').click()
      assert.equal(await page.locator('.gpa-pp5-btn').count(), classes)
      assert.deepEqual(errors, [])
      console.log(`H1 browser ${classes} subjects ${before ? 'before' : 'after'}: overview reads=${snap.calls}; GPA=${snap.gpa.join('/')}`)
      await context.close()
    }
    assert.deepEqual(snapshots[0].gpa, snapshots[1].gpa)
    assert.equal(snapshots[0].samai, snapshots[1].samai)
    assert.equal(snapshots[0].sasana, snapshots[1].sasana)
    assert.equal(snapshots[0].calls - snapshots[1].calls, classes === 20 ? 35 : 64)
    console.log(`Student Overview + GPA table/card parity passed (${classes} subjects)`)
  }
} finally { await browser.close() }
