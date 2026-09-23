import assert from 'node:assert/strict'
import {
  defaultWorkloadConfig,
  isWorkloadActive,
  nextWorkloadTransition,
  normalizeWorkloadConfig,
  workloadState,
} from '../js/workload-schedule.js'

const config = defaultWorkloadConfig()
config.features.prayer_monitor = { ...config.features.prayer_monitor, mode: 'AUTO', start: '12:10', end: '13:15' }
assert.equal(isWorkloadActive('prayer_monitor', new Date('2026-09-14T05:00:00Z'), config), false)
assert.equal(isWorkloadActive('prayer_monitor', new Date('2026-09-14T05:30:00Z'), config), true)
assert.equal(workloadState('prayer_monitor', new Date('2026-09-14T05:30:00Z'), config).status, 'ACTIVE')
assert.equal(isWorkloadActive('prayer_monitor', new Date('2026-09-14T06:16:00Z'), config), false)

config.features.prayer_monitor.mode = 'ON'
assert.equal(isWorkloadActive('prayer_monitor', new Date('2026-09-14T06:16:00Z'), config), true)
config.features.prayer_monitor.mode = 'OFF'
assert.equal(isWorkloadActive('prayer_monitor', new Date('2026-09-14T05:30:00Z'), config), false)

config.features.azizgames = { ...config.features.azizgames, mode: 'AUTO', dateFrom: '2026-09-20', dateTo: '2026-09-25' }
assert.equal(isWorkloadActive('azizgames', new Date('2026-09-19T05:00:00Z'), config), false)
assert.equal(isWorkloadActive('azizgames', new Date('2026-09-21T05:00:00Z'), config), true)
assert.equal(isWorkloadActive('azizgames', new Date('2026-09-26T05:00:00Z'), config), false)

config.features.leave_monitor = { ...config.features.leave_monitor, start: '23:00', end: '01:00', days: [false, true, true, true, true, true, false] }
assert.equal(isWorkloadActive('leave_monitor', new Date('2026-09-14T16:30:00Z'), config), true) // Mon 23:30 Bangkok
assert.equal(isWorkloadActive('leave_monitor', new Date('2026-09-15T19:30:00Z'), config), false) // Wed 02:30 Bangkok

config.features.prayer_monitor.mode = 'AUTO'
const transition = nextWorkloadTransition('prayer_monitor', new Date('2026-09-14T05:00:00Z'), normalizeWorkloadConfig(config))
assert.ok(transition)
assert.equal(new Date(transition).toISOString(), '2026-09-14T05:10:00.000Z')
console.log('workload scheduler: AUTO/ON/OFF, date range, timezone, transition and cross-midnight assertions passed')
