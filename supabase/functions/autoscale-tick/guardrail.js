export const DEFAULT_GUARDRAIL = {
  minimumMediumHoldMinutes: 60,
  healthyStreakRequired: 3,
  recoveryLockMinutes: 60,
}

export function normalizeGuardrail(raw = {}) {
  const number = (value, fallback, min, max) => {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? Math.max(min, Math.min(max, parsed)) : fallback
  }
  return {
    minimumMediumHoldMinutes: number(raw.minimumMediumHoldMinutes, DEFAULT_GUARDRAIL.minimumMediumHoldMinutes, 0, 24 * 60),
    healthyStreakRequired: Math.round(number(raw.healthyStreakRequired, DEFAULT_GUARDRAIL.healthyStreakRequired, 1, 12)),
    recoveryLockMinutes: number(raw.recoveryLockMinutes, DEFAULT_GUARDRAIL.recoveryLockMinutes, 0, 24 * 60),
  }
}

export function evaluateDownscaleGuardrail({
  state = {},
  currentTier,
  targetTier,
  now = new Date(),
  healthKnown = false,
  healthy = false,
  guardrail = DEFAULT_GUARDRAIL,
}) {
  const normalized = normalizeGuardrail(guardrail)
  const nowMs = new Date(now).getTime()
  const defer = reason => ({ allow: false, decision: 'downgrade_deferred', reason, guardrail: normalized })
  if (currentTier !== 'ci_medium' || targetTier !== 'ci_micro') return { allow: true, decision: 'not_a_downscale', reason: null, guardrail: normalized }
  if (!healthKnown || !healthy) return defer('health_unknown_or_unhealthy')
  if (state.pendingTier) return defer('resize_in_progress')
  if (state.criticalServiceState) return defer('critical_service_state')
  if (state.holdUntil && nowMs < Date.parse(state.holdUntil)) return defer('minimum_medium_hold')
  if (state.recoveryLockUntil && nowMs < Date.parse(state.recoveryLockUntil)) return defer('recovery_lock')
  if (Number(state.consecutiveHealthyChecks || 0) < normalized.healthyStreakRequired) return defer('healthy_streak')
  if (state.lastFailedHealthAt && nowMs - Date.parse(state.lastFailedHealthAt) < normalized.recoveryLockMinutes * 60 * 1000) return defer('recent_failed_health')
  return { allow: true, decision: 'downgrade_allowed', reason: 'guardrail_passed', guardrail: normalized }
}

export function holdAfterMediumConfirmation(state, now = new Date(), guardrail = DEFAULT_GUARDRAIL) {
  const normalized = normalizeGuardrail(guardrail)
  const holdUntil = new Date(new Date(now).getTime() + normalized.minimumMediumHoldMinutes * 60 * 1000).toISOString()
  return { ...state, holdUntil, recoveryLockUntil: holdUntil, lastScaleUpConfirmedAt: new Date(now).toISOString() }
}
