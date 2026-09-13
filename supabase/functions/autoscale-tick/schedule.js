export function validateSchedule(config) {
  if (!config || config.schemaVersion !== 1 || typeof config.enabled !== 'boolean' || !Array.isArray(config.periods)) throw new Error('รูปแบบตารางเวลาไม่ถูกต้อง');
  if (config.periods.length > 30) throw new Error('เพิ่มช่วงวันที่ได้ไม่เกิน 30 ช่วง');
  const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
  for (const period of config.periods) {
    if (!validDate(period.startDate) || !validDate(period.endDate) || period.startDate > period.endDate) throw new Error('กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง');
    if (!Array.isArray(period.days) || period.days.length !== 7) throw new Error('ต้องกำหนดเวลาครบทั้ง 7 วัน');
    for (const day of period.days) {
      if (typeof day.enabled !== 'boolean') throw new Error('สถานะวันไม่ถูกต้อง');
      if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(day.start) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(day.end) || day.start >= day.end) throw new Error('เวลาเริ่มต้องก่อนเวลาสิ้นสุดภายในวันเดียวกัน');
    }
  }
  if (config.enabled && !config.periods.some(p => p.days.some(d => d.enabled))) throw new Error('กรุณากำหนดอย่างน้อยหนึ่งวันก่อนเปิดใช้งาน');
  return config;
}

export function scheduledTier(config, now = new Date()) {
  validateSchedule(config);
  if (!config.enabled) return null; // ปิด = ไม่ส่งคำสั่งปรับเครื่อง ไม่กลับไปใช้ health autoscale
  const local = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const date = local.toISOString().slice(0, 10);
  const time = local.toISOString().slice(11, 16);
  const weekday = local.getUTCDay();
  return config.periods.some(p => date >= p.startDate && date <= p.endDate && p.days[weekday].enabled && time >= p.days[weekday].start && time < p.days[weekday].end) ? 'ci_medium' : 'ci_micro';
}

export const emptySchedule = () => ({ schemaVersion: 1, enabled: false, periods: [] });
