import assert from 'node:assert/strict'
import { evaluateDownscaleGuardrail, holdAfterMediumConfirmation } from '../supabase/functions/autoscale-tick/guardrail.js'

const now = new Date('2026-09-24T00:00:00Z')
const base = { consecutiveHealthyChecks: 3, lastHealthStatus: 'healthy' }

let result = evaluateDownscaleGuardrail({ state: base, currentTier: 'ci_medium', targetTier: 'ci_micro', now, healthKnown: true, healthy: true })
assert.equal(result.allow, true)

const held = holdAfterMediumConfirmation({}, now, { minimumMediumHoldMinutes: 60, healthyStreakRequired: 3, recoveryLockMinutes: 60 })
result = evaluateDownscaleGuardrail({ state: { ...base, ...held }, currentTier: 'ci_medium', targetTier: 'ci_micro', now: new Date('2026-09-24T00:30:00Z'), healthKnown: true, healthy: true })
assert.equal(result.allow, false)
assert.equal(result.reason, 'minimum_medium_hold')

result = evaluateDownscaleGuardrail({ state: { ...base, consecutiveHealthyChecks: 0 }, currentTier: 'ci_medium', targetTier: 'ci_micro', now, healthKnown: true, healthy: true })
assert.equal(result.allow, false)
assert.equal(result.reason, 'healthy_streak')

result = evaluateDownscaleGuardrail({ state: base, currentTier: 'ci_medium', targetTier: 'ci_micro', now, healthKnown: false, healthy: false })
assert.equal(result.allow, false)
assert.equal(result.reason, 'health_unknown_or_unhealthy')

result = evaluateDownscaleGuardrail({ state: { ...base, criticalServiceState: true }, currentTier: 'ci_medium', targetTier: 'ci_micro', now, healthKnown: true, healthy: true })
assert.equal(result.allow, false)
assert.equal(result.reason, 'critical_service_state')

result = evaluateDownscaleGuardrail({ state: { ...base, recoveryLockUntil: '2026-09-24T01:00:00Z' }, currentTier: 'ci_medium', targetTier: 'ci_micro', now, healthKnown: true, healthy: true })
assert.equal(result.allow, false)
assert.equal(result.reason, 'recovery_lock')

console.log('autoscale guardrail: hold, healthy streak, unknown health, critical state and recovery lock assertions passed')
