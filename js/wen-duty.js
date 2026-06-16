import { createClient } from '@supabase/supabase-js'
import { _DAYS_TH_FULL } from './teacher-views-utils.js'

// ระบบ "เวร" (อาซิซสถาน) เป็น Supabase project แยกจาก ปพ.5 — ใช้ teacher_code/id
// (รหัสครู 4 หลัก) เป็นกุญแจร่วมกันระหว่างสองระบบ ไม่ต้องทำ mapping เพิ่ม
const WEN_URL      = 'https://zhjqkylesnhcotpkzoxr.supabase.co'
const WEN_ANON_KEY = 'sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n'

let _wenClient = null

function _wenWeekNumber(dateStr, weekStartDate, totalWeeks) {
  const start  = new Date(weekStartDate + 'T00:00:00')
  const target = new Date(dateStr       + 'T00:00:00')
  const days   = Math.floor((target - start) / 86400000)
  if (days < 0) return null
  const w = Math.floor(days / 7) + 1
  return w <= totalWeeks ? w : null
}

// item เป็น "teacherId" (มอบหมายทุกวัน) หรือ "วัน:teacherId" (มอบหมายเฉพาะวัน)
function _matchesTeacherToday(item, teacherCode, todayName) {
  const [day, id] = item.includes(':') ? item.split(':') : [null, item]
  return (day === null || day === todayName) && id === teacherCode
}

// คำนวณเกรดเวร (A/B/C) สำหรับครูคนนี้จาก wen Supabase
// โมเดล: per-week compliance(60%) + punctuality(40%), grace period สัปดาห์ 1-5 = 100 คะแนน
// คืน { grade, score, week } หรือ null ถ้าดึงข้อมูลไม่ได้ / ครูไม่มีเวร
export async function getTodayDutyGrade(teacherCode) {
  if (!teacherCode) return null
  if (!_wenClient) _wenClient = createClient(WEN_URL, WEN_ANON_KEY)

  const [reportsRes, pointsRes, settingsRes] = await Promise.all([
    _wenClient.from('reports').select('date,status,is_late').eq('teacher_id', String(teacherCode)),
    _wenClient.from('duty_points').select('assigned_to'),
    _wenClient.from('settings').select('week_start_date,total_weeks').single(),
  ])

  const sett          = settingsRes.data || {}
  const weekStartDate = sett.week_start_date
  const totalWeeks    = sett.total_weeks || 20
  if (!weekStartDate) return null

  const todayStr   = new Date().toISOString().slice(0, 10)
  const currentWeek = _wenWeekNumber(todayStr, weekStartDate, totalWeeks) || 1

  // Grace period: สัปดาห์ 1-5 ทุกคนได้คะแนนเต็ม
  if (currentWeek <= 5) return { grade: 'A', score: 100, week: currentWeek }

  // นับจำนวนจุดเวรที่ครูรับผิดชอบต่อสัปดาห์
  const code = String(teacherCode)
  let weeklyDuties = 0
  for (const p of (pointsRes.data || [])) {
    for (const item of (p.assigned_to || [])) {
      const id = item.includes(':') ? item.split(':')[1] : item
      if (id === code) weeklyDuties++
    }
  }
  if (weeklyDuties === 0) return null

  // จัดรายงานตามสัปดาห์
  const byWeek = {}
  for (const r of (reportsRes.data || [])) {
    const w = _wenWeekNumber(r.date, weekStartDate, totalWeeks)
    if (w !== null) { if (!byWeek[w]) byWeek[w] = []; byWeek[w].push(r) }
  }

  const GRACE_WEEKS  = 5
  const EXAM_WEEKS   = 2
  const scoringWeeks = Math.min(currentWeek, totalWeeks - EXAM_WEEKS)

  let totalScore = 0
  for (let w = 1; w <= scoringWeeks; w++) {
    if (w <= GRACE_WEEKS) {
      totalScore += 100
    } else {
      const wr         = byWeek[w] || []
      const checkins   = wr.length
      const lates      = wr.filter(r => r.is_late).length
      const ontimes    = checkins - lates
      const compliance = Math.min(100, Math.round(checkins / weeklyDuties * 100))
      const punctuality = checkins > 0 ? Math.max(0, Math.round(ontimes / checkins * 100)) : 100
      totalScore += Math.round(compliance * 0.6 + punctuality * 0.4)
    }
  }

  const avgScore = Math.round(totalScore / scoringWeeks)
  const grade    = avgScore >= 90 ? 'A' : avgScore >= 75 ? 'B' : 'C'
  return { grade, score: avgScore, week: currentWeek }
}

// คืนรายการจุดเวรของครูคนนี้สำหรับ "วันนี้" — [{ name, time }] หรือ [] ถ้าไม่มีเวร/ดึงข้อมูลไม่ได้
export async function getTodayDuty(teacherCode) {
  if (!teacherCode) return []
  if (!_wenClient) _wenClient = createClient(WEN_URL, WEN_ANON_KEY)

  const { data, error } = await _wenClient.from('duty_points').select('name, time, assigned_to')
  if (error || !data) return []

  const code  = String(teacherCode)
  const today = _DAYS_TH_FULL[new Date().getDay()]

  return data
    .filter(p => (p.assigned_to ?? []).some(item => _matchesTeacherToday(item, code, today)))
    .map(p => {
      const [start_time, end_time] = String(p.time ?? '').split('-').map(s => s.trim())
      return { name: p.name, time: p.time, start_time, end_time }
    })
}
