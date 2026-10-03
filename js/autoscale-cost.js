import { scheduleSegmentsForDate, tierLabel, tierRank, validateSchedule } from '../supabase/functions/autoscale-tick/schedule.js';

// Estimate only. Keep this table easy to update when the Supabase price page changes.
// Small is the price shown in the admin reference screenshot on 2026-10-03.
export const COMPUTE_PRICES = { ci_micro: 0.01344, ci_small: 0.0206, ci_medium: 0.0822 };

const addDays = (date, amount) => {
  const next = new Date(date.getTime());
  next.setUTCDate(next.getUTCDate() + amount);
  return next;
};

const dateKey = date => date.toISOString().slice(0, 10);

function emptyTierHours() {
  return Object.fromEntries(Object.keys(COMPUTE_PRICES).map(tier => [tier, 0]));
}

function summarizeDay(config, date) {
  const tierMinutes = emptyTierHours();
  for (const segment of scheduleSegmentsForDate(config, dateKey(date))) {
    tierMinutes[segment.targetTier] += segment.end - segment.start;
  }
  const tierHours = Object.fromEntries(Object.entries(tierMinutes).map(([tier, minutes]) => [tier, minutes / 60]));
  const usd = Object.entries(tierHours).reduce((sum, [tier, hours]) => sum + hours * COMPUTE_PRICES[tier], 0);
  return {
    ...tierHours,
    tierHours,
    tierMinutes,
    usd,
    mediumHours: tierHours.ci_medium,
    smallHours: tierHours.ci_small,
    microHours: tierHours.ci_micro,
  };
}

function summarizeRange(config, start, count) {
  const total = { usd: 0, days: count, tierHours: emptyTierHours() };
  for (let index = 0; index < count; index += 1) {
    const day = summarizeDay(config, addDays(start, index));
    total.usd += day.usd;
    for (const tier of Object.keys(total.tierHours)) total.tierHours[tier] += day.tierHours[tier];
  }
  return {
    ...total,
    mediumHours: total.tierHours.ci_medium,
    smallHours: total.tierHours.ci_small,
    microHours: total.tierHours.ci_micro,
  };
}

export function estimateComputeCost(rawConfig, date) {
  const config = validateSchedule(rawConfig);
  const base = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(base.getTime()) || dateKey(base) !== date) throw new Error('วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง');
  const monday = addDays(base, -((base.getUTCDay() + 6) % 7));
  const month = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), 1));
  const monthDays = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth() + 1, 0)).getUTCDate();
  const result = {
    day: summarizeRange(config, base, 1),
    week: summarizeRange(config, monday, 7),
    month: summarizeRange(config, month, monthDays),
  };
  result.defaultTier = config.defaultTier;
  result.defaultTierLabel = tierLabel(config.defaultTier);
  result.tierOrder = Object.keys(COMPUTE_PRICES).sort((a, b) => tierRank(a) - tierRank(b));
  return result;
}
