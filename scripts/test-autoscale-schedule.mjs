import assert from 'node:assert/strict';
import { emptySchedule, scheduleSegmentsForDate, scheduledTier, validateSchedule } from '../supabase/functions/autoscale-tick/schedule.js';
import { COMPUTE_PRICES, estimateComputeCost } from '../js/autoscale-cost.js';

const atBangkok = (date, time) => new Date(`${date}T${time}:00+07:00`);
const config = {
  schemaVersion: 2,
  enabled: true,
  timezone: 'Asia/Bangkok',
  defaultTier: 'ci_micro',
  rules: [
    { id: 'night', startDate: '2026-09-14', endDate: '2026-09-30', days: [1, 2, 3, 4, 5], start: '20:00', end: '02:00', targetTier: 'ci_small', label: 'ช่วงค่ำ' },
    { id: 'early', startDate: '2026-09-15', endDate: '2026-09-30', days: [2, 3, 4, 5, 6], start: '02:00', end: '05:00', targetTier: 'ci_micro', label: 'ช่วงใช้งานต่ำ' },
    { id: 'school', startDate: '2026-09-15', endDate: '2026-09-30', days: [2, 3, 4, 5, 6], start: '07:00', end: '19:00', targetTier: 'ci_medium', label: 'ช่วงเรียน' },
  ],
};

assert.equal(scheduledTier(emptySchedule()), null);
assert.equal(scheduledTier(config, atBangkok('2026-09-15', '01:00')), 'ci_small');
assert.equal(scheduledTier(config, atBangkok('2026-09-15', '03:00')), 'ci_micro');
assert.equal(scheduledTier(config, atBangkok('2026-09-15', '06:00')), 'ci_micro');
assert.equal(scheduledTier(config, atBangkok('2026-09-15', '08:00')), 'ci_medium');
assert.equal(scheduledTier(config, atBangkok('2026-09-15', '20:00')), 'ci_small');
assert.equal(scheduledTier(config, atBangkok('2026-10-01', '08:00')), 'ci_micro');

const segments = scheduleSegmentsForDate(config, '2026-09-15');
assert.deepEqual(segments.map(segment => [segment.start, segment.end, segment.targetTier]), [
  [0, 120, 'ci_small'], [120, 420, 'ci_micro'], [420, 1140, 'ci_medium'], [1140, 1200, 'ci_micro'], [1200, 1440, 'ci_small'],
]);

const overlap = structuredClone(config);
overlap.rules.push({ id: 'peak', startDate: '2026-09-15', endDate: '2026-09-15', days: [2], start: '10:00', end: '12:00', targetTier: 'ci_medium', label: 'ซ้อนระดับสูงสุด' });
assert.equal(scheduledTier(overlap, atBangkok('2026-09-15', '11:00')), 'ci_medium');

const legacy = { schemaVersion: 1, enabled: true, periods: [{ startDate: '2026-09-15', endDate: '2026-09-30', days: Array.from({ length: 7 }, () => ({ enabled: true, start: '07:00', end: '19:00' })) }] };
assert.equal(validateSchedule(legacy).schemaVersion, 2);
assert.equal(scheduledTier(legacy, atBangkok('2026-09-15', '08:00')), 'ci_medium');

const invalid = structuredClone(config);
invalid.rules[0].startDate = '2026-02-30';
assert.throws(() => validateSchedule(invalid));
invalid.rules[0].startDate = '2026-09-14';
invalid.rules[0].end = '20:00';
assert.throws(() => validateSchedule(invalid));
assert.throws(() => validateSchedule({ ...emptySchedule(), enabled: true }));

const costs = estimateComputeCost(config, '2026-09-15').day;
assert.equal(costs.smallHours, 6);
assert.equal(costs.mediumHours, 12);
assert.equal(costs.microHours, 6);
assert.ok(Math.abs(costs.usd - (6 * COMPUTE_PRICES.ci_small + 12 * COMPUTE_PRICES.ci_medium + 6 * COMPUTE_PRICES.ci_micro)) < 1e-10);
assert.equal(estimateComputeCost(config, '2026-09-15').month.days, 30);
assert.equal(estimateComputeCost(emptySchedule(), '2028-02-10').month.days, 29);
console.log('autoscale schedule and costs: three tiers, overnight rules, legacy migration, overlap and estimates passed');
