import assert from 'node:assert/strict'
import vm from 'node:vm'
import { readFile } from 'node:fs/promises'
import { regradeChanges, safeRegradeUrl, regradeRecordId } from '../js/regrade-notification-model.js'
const pending = { id: 1, status: 'จำนงแล้ว', declared_at: 'a' }
const assigned = { ...pending, status: 'กำลังดำเนินการปรับแก้', method: 'ให้งานแก้', due_text: '2026-10-30', file_url: 'https://example.com/a.pdf' }
const map = rows => new Map(rows.map(row => [row.id, row]))
assert.deepEqual(regradeChanges(null, [pending], 'teacher'), [])
assert.deepEqual(regradeChanges(map([pending]), [pending], 'teacher'), [])
assert.equal(regradeChanges(map([pending]), [{ ...pending, id: 2 }], 'teacher').length, 1, 'same total, different student still notifies')
assert.equal(regradeChanges(map([pending]), [assigned], 'student').length, 1)
assert.equal(regradeChanges(map([assigned]), [{ ...assigned, file_url: 'https://example.com/new.pdf' }], 'student').length, 1, 'edited work notifies')
assert.equal(regradeChanges(map([assigned]), [pending], 'student').length, 1, 'cancel notifies')
assert.deepEqual(regradeChanges(map([assigned]), [assigned], 'student'), [])
assert.equal(safeRegradeUrl('javascript:alert(1)'), null)
assert.equal(safeRegradeUrl('data:text/html,x'), null)
assert.equal(safeRegradeUrl('https://user:password@example.com'), null)
assert.equal(regradeRecordId('1<script>'), null)
assert.equal(regradeRecordId('19856'), 19856)

const listeners = {}
let opened, navigated, focused = false
const scope = 'https://example.com/pp5online/'
const self = { registration: { scope }, addEventListener: (name, fn) => { listeners[name] = fn }, clients: { matchAll: async () => [{ url: scope + 'teacher.html', focused: true, focus: () => { focused = true } }], openWindow: async url => { opened = url } } }
vm.runInNewContext(await readFile(new URL('../public/sw.js', import.meta.url), 'utf8'), { self, URL })
let promise
listeners.notificationclick({ notification: { close() {}, data: { url: 'regrade.html?subject=19856' } }, waitUntil(p) { promise = p } })
await promise
assert.equal(opened, scope + 'regrade.html?subject=19856')
assert.equal(focused, false, 'unrelated focused tab must not swallow record navigation')
self.clients.matchAll = async () => [{ url: scope + 'regrade.html?subject=1', navigate: async url => { navigated = url; return { focus() { focused = true } } } }]
listeners.notificationclick({ notification: { close() {}, data: { url: 'regrade.html?subject=19857' } }, waitUntil(p) { promise = p } })
await promise
assert.equal(navigated, scope + 'regrade.html?subject=19857')
assert(focused)
console.log('Notification events, unsafe links and Push record navigation passed')
