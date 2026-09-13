// Supabase official compute prices, verified 2026-09-13.
// https://supabase.com/docs/guides/platform/compute-and-disk
import { validateSchedule } from '../supabase/functions/autoscale-tick/schedule.js';
export const COMPUTE_PRICES = { ci_micro: 0.01344, ci_medium: 0.0822 };

export function estimateComputeCost(config, date) {
  validateSchedule({ ...config, enabled: false });
  const base = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(base.getTime()) || base.toISOString().slice(0, 10) !== date) throw new Error('วันที่ประมาณค่าใช้จ่ายไม่ถูกต้อง');
  const daily = day => {
    const key = day.toISOString().slice(0, 10);
    const minutes = value => Number(value.slice(0, 2)) * 60 + Number(value.slice(3));
    const ranges = config.periods.filter(p => key >= p.startDate && key <= p.endDate && p.days[day.getUTCDay()].enabled).map(p => p.days[day.getUTCDay()]).map(d => [minutes(d.start), minutes(d.end)]).sort((a, b) => a[0] - b[0]);
    let end = 0;
    let mediumMinutes = 0;
    for (const [start, stop] of ranges) { mediumMinutes += Math.max(0, stop - Math.max(start, end)); end = Math.max(end, stop); }
    const mediumHours = mediumMinutes / 60;
    return { mediumHours, usd: mediumHours * COMPUTE_PRICES.ci_medium + (24 - mediumHours) * COMPUTE_PRICES.ci_micro };
  };
  const total = (start, count) => {
    let usd = 0, mediumHours = 0;
    for (let i = 0; i < count; i++) { const day = daily(new Date(start.getTime() + i * 86400000)); usd += day.usd; mediumHours += day.mediumHours; }
    return { usd, mediumHours, days: count };
  };
  const monday = new Date(base.getTime() - ((base.getUTCDay() + 6) % 7) * 86400000);
  const month = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), 1));
  return { day: total(base, 1), week: total(monday, 7), month: total(month, new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth() + 1, 0)).getUTCDate()) };
}
