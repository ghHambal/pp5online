// supabase/functions/notify-upcoming-periods/index.ts
// เรียกทุก 1 นาทีโดย pg_cron (ผ่าน pg_net) — เช็คว่ามีคาบสอนของครูคนไหนใกล้เริ่มในอีก
// REMINDER_MINUTES_BEFORE นาทีไหม ถ้ามีและครูคนนั้นโดเนทระดับ 1 ขึ้นไป (ตาม donationMinAmount
// จาก system_config) จะยิง push แจ้งเตือนไปหาอุปกรณ์ที่สมัคร push_subscriptions ไว้
// กันส่งซ้ำด้วยตาราง period_reminder_log (unique ต่อ teacher_schedule_id + วันที่จริง)
//
// ไม่ใช้ verify_jwt เพราะเรียกจาก cron ไม่มี user session — ป้องกันด้วย shared secret header แทน
// (CRON_SECRET เป็น hardcoded fallback เหมือน VAPID key ของ send-push — ควรย้ายเป็น secret จริงภายหลัง)
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'
import webpush from 'npm:web-push@3.6.7'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const CRON_SECRET = Deno.env.get('CRON_SECRET') || 'pp5-period-reminder-cron-9f3a1c'

const VAPID_PUBLIC_KEY  = Deno.env.get('VAPID_PUBLIC_KEY')  || 'BFgbl8o4NOgaOf-h1CsQD5DurB94YWYPWJBJ28_wM9kn8AqjB1-j0KPbMqp2SOgg36N59bz9j_Z1nAeJfpNg6YE'
const VAPID_PRIVATE_KEY = Deno.env.get('VAPID_PRIVATE_KEY') || '_zZPwp5gPEYOo5PwYPASA5yjZbaQ3DFKkWKmWlon0jc'
const VAPID_SUBJECT     = Deno.env.get('VAPID_SUBJECT')     || 'mailto:kruhambalwaji@gmail.com'
webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)

const REMINDER_MINUTES_BEFORE = 5

const corsHeaders = { 'Content-Type': 'application/json' }

Deno.serve(async (req: Request) => {
  if (req.headers.get('x-cron-secret') !== CRON_SECRET) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: corsHeaders })
  }

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

  // เวลาไทย (UTC+7, ไม่มี DST) คำนวณด้วยการชิฟต์นาฬิกาแทนพึ่ง timezone db
  const now = new Date()
  const th = new Date(now.getTime() + 7 * 3600 * 1000)
  const dow = th.getUTCDay()
  const nowMin = th.getUTCHours() * 60 + th.getUTCMinutes()
  const targetMin = nowMin + REMINDER_MINUTES_BEFORE
  const todayStr = th.toISOString().slice(0, 10)

  const { data: cfgRows } = await admin.from('system_config').select('key,value')
    .in('key', ['academicYear', 'semester', 'donationMinAmount'])
  const cfg = Object.fromEntries((cfgRows ?? []).map((r: { key: string; value: string }) => [r.key, r.value]))
  const academicYear = parseInt(cfg.academicYear) || new Date().getFullYear() + 543
  const semester = parseInt(cfg.semester) || 1
  const tier1Amount = parseInt(cfg.donationMinAmount) || 49

  const { data: periods } = await admin.from('school_periods')
    .select('period_no, start_time').eq('day_type', 'regular')
  const matchPeriodNos = (periods ?? [])
    .filter((p: { start_time: string }) => {
      const [ph, pm] = p.start_time.split(':').map(Number)
      return ph * 60 + pm === targetMin
    })
    .map((p: { period_no: number }) => p.period_no)

  if (!matchPeriodNos.length) {
    return new Response(JSON.stringify({ checked: 0 }), { headers: corsHeaders })
  }

  const { data: schedules } = await admin.from('teacher_schedules')
    .select('id, teacher_id, subject_name, class_name, teachers(profile_id)')
    .eq('academic_year', academicYear).eq('semester', semester)
    .eq('day_of_week', dow).in('period_no', matchPeriodNos)

  if (!schedules || !schedules.length) {
    return new Response(JSON.stringify({ checked: 0 }), { headers: corsHeaders })
  }

  let sent = 0, skippedTier = 0, skippedDup = 0
  for (const sch of schedules as Array<{ id: number; teacher_id: number; subject_name: string | null; class_name: string | null; teachers: { profile_id: string | null } | null }>) {
    const { data: already } = await admin.from('period_reminder_log')
      .select('id').eq('teacher_schedule_id', sch.id).eq('reminder_date', todayStr).maybeSingle()
    if (already) { skippedDup++; continue }

    const { data: donRows } = await admin.from('payment_requests')
      .select('amount').eq('teacher_id', sch.teacher_id).eq('package_type', 'donation').eq('status', 'approved')
    const totalApproved = (donRows ?? []).reduce((s: number, r: { amount: number }) => s + (Number(r.amount) || 0), 0)
    if (totalApproved < tier1Amount) { skippedTier++; continue }

    // บันทึกว่าเช็คแล้ว "ก่อน" ยิง push เสมอ กันกรณี error ระหว่างส่งแล้ววนมายิงซ้ำในนาทีถัดไป
    await admin.from('period_reminder_log').insert({ teacher_schedule_id: sch.id, reminder_date: todayStr })

    const profileId = sch.teachers?.profile_id
    if (!profileId) continue

    const { data: subs } = await admin.from('push_subscriptions')
      .select('id, endpoint, p256dh, auth').eq('profile_id', profileId)
    if (!subs || !subs.length) continue

    const payload = JSON.stringify({
      title: '⏰ ใกล้ถึงเวลาสอนแล้ว',
      body: `อีก ${REMINDER_MINUTES_BEFORE} นาที คาบ${sch.subject_name ? ' ' + sch.subject_name : ''}${sch.class_name ? ' · ' + sch.class_name : ''}`,
      url: 'teacher.html',
      tag: 'period-reminder',
    })
    const deadIds: number[] = []
    await Promise.all(subs.map(async (s: { id: number; endpoint: string; p256dh: string; auth: string }) => {
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload)
        sent++
      } catch (err) {
        const statusCode = (err as { statusCode?: number })?.statusCode
        if (statusCode === 404 || statusCode === 410) deadIds.push(s.id)
      }
    }))
    if (deadIds.length) await admin.from('push_subscriptions').delete().in('id', deadIds)
  }

  return new Response(
    JSON.stringify({ checked: schedules.length, sent, skippedTier, skippedDup }),
    { headers: corsHeaders },
  )
})
