import { createClient } from '@supabase/supabase-js'
import { _DAYS_TH_FULL } from './teacher-views-utils.js'

// ระบบ "เวร" (อาซิซสถาน) เป็น Supabase project แยกจาก ปพ.5 — ใช้ teacher_code/id
// (รหัสครู 4 หลัก) เป็นกุญแจร่วมกันระหว่างสองระบบ ไม่ต้องทำ mapping เพิ่ม
const WEN_URL      = 'https://zhjqkylesnhcotpkzoxr.supabase.co'
const WEN_ANON_KEY = 'sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n'

let _wenClient = null

// item เป็น "teacherId" (มอบหมายทุกวัน) หรือ "วัน:teacherId" (มอบหมายเฉพาะวัน)
function _matchesTeacherToday(item, teacherCode, todayName) {
  const [day, id] = item.includes(':') ? item.split(':') : [null, item]
  return (day === null || day === todayName) && id === teacherCode
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
