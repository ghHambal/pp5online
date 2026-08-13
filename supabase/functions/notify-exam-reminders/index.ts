// supabase/functions/notify-exam-reminders/index.ts
// เรียกวันละ 2 ครั้งโดย pg_cron (ผ่าน pg_net) — ครั้งเช้า (07:00 ไทย) เช็คคำร้องขอสอบที่อนุมัติแล้ว
// และนัดสอบ "วันนี้" (reminderType='same_day'), ครั้งเย็น (18:00 ไทย) เช็คที่นัดสอบ "พรุ่งนี้"
// (reminderType='day_before') แล้วยิง push แจ้งเตือนไปหาครูเจ้าของวิชา + ครูร่วมสอน (subject_co_teachers)
// ข้ามคำร้องที่ exam_attended ไม่ใช่ null แล้ว (ครูบันทึกผลไปแล้ว ไม่ต้องเตือนซ้ำ)
// กันส่งซ้ำด้วยตาราง exam_reminder_log (unique ต่อ teacher_id + วันที่นัดสอบ + ประเภทการเตือน)
//
// ไม่ใช้ verify_jwt เพราะเรียกจาก cron ไม่มี user session — ป้องกันด้วย shared secret header แทน
// (ใช้ CRON_SECRET/VAPID key fallback ชุดเดียวกับ notify-upcoming-periods เพื่อความสอดคล้อง)
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

const corsHeaders = { 'Content-Type': 'application/json' }

type ExamRequestRow = {
  id: number
  request_type: string
  requested_period_no: number | null
  students: { full_name: string } | null
  classes: { class_name: string | null; master_subjects: { id: number; subject_name: string | null; teacher_id: number | null } | null } | null
}

Deno.serve(async (req: Request) => {
  if (req.headers.get('x-cron-secret') !== CRON_SECRET) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: corsHeaders })
  }

  const { reminderType } = await req.json().catch(() => ({}))
  if (reminderType !== 'day_before' && reminderType !== 'same_day') {
    return new Response(JSON.stringify({ error: 'invalid reminderType' }), { status: 400, headers: corsHeaders })
  }

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

  // เวลาไทย (UTC+7, ไม่มี DST) คำนวณด้วยการชิฟต์นาฬิกาแทนพึ่ง timezone db
  const now = new Date()
  const th = new Date(now.getTime() + 7 * 3600 * 1000)
  const offsetDays = reminderType === 'day_before' ? 1 : 0
  const target = new Date(th.getTime() + offsetDays * 86400 * 1000)
  const targetDateStr = target.toISOString().slice(0, 10)

  const { data: requests } = await admin.from('exam_requests')
    .select(`
      id, request_type, requested_period_no,
      students ( full_name ),
      classes ( class_name, master_subjects ( id, subject_name, teacher_id ) )
    `)
    .eq('status', 'approved')
    .is('exam_attended', null)
    .eq('requested_date', targetDateStr)

  if (!requests || !requests.length) {
    return new Response(JSON.stringify({ checked: 0 }), { headers: corsHeaders })
  }

  const rows = requests as unknown as ExamRequestRow[]
  const subjectIds = [...new Set(rows.map(r => r.classes?.master_subjects?.id).filter((x): x is number => !!x))]
  const { data: coRows } = subjectIds.length
    ? await admin.from('subject_co_teachers').select('subject_id, teacher_id').in('subject_id', subjectIds)
    : { data: [] as { subject_id: number; teacher_id: number }[] }

  // จับคู่ครูที่ต้องรู้เรื่องนี้ต่อคำร้อง: เจ้าของวิชา + ครูร่วมสอนทุกคน
  const teacherMap = new Map<number, ExamRequestRow[]>()
  for (const r of rows) {
    const subj = r.classes?.master_subjects
    if (!subj) continue
    const teacherIds = new Set<number>()
    if (subj.teacher_id) teacherIds.add(subj.teacher_id)
    for (const co of (coRows ?? [])) if (co.subject_id === subj.id) teacherIds.add(co.teacher_id)
    for (const tid of teacherIds) {
      if (!teacherMap.has(tid)) teacherMap.set(tid, [])
      teacherMap.get(tid)!.push(r)
    }
  }

  let sent = 0, skippedDup = 0, teachersNotified = 0
  for (const [teacherId, reqs] of teacherMap) {
    const { data: already } = await admin.from('exam_reminder_log')
      .select('id').eq('teacher_id', teacherId).eq('reminder_date', targetDateStr).eq('reminder_type', reminderType).maybeSingle()
    if (already) { skippedDup++; continue }

    // บันทึกว่าเช็คแล้ว "ก่อน" ยิง push เสมอ กันกรณี error ระหว่างส่งแล้ววนมายิงซ้ำ
    await admin.from('exam_reminder_log').insert({ teacher_id: teacherId, reminder_date: targetDateStr, reminder_type: reminderType })

    const { data: teacherRow } = await admin.from('teachers').select('profile_id').eq('id', teacherId).maybeSingle()
    const profileId = teacherRow?.profile_id
    if (!profileId) continue

    const { data: subs } = await admin.from('push_subscriptions')
      .select('id, endpoint, p256dh, auth').eq('profile_id', profileId)
    if (!subs || !subs.length) continue

    const title = reminderType === 'day_before' ? '📅 พรุ่งนี้มีนักเรียนนัดสอบ' : '⏰ วันนี้มีนักเรียนนัดสอบ'
    const body = reqs.length === 1
      ? `${reqs[0].students?.full_name ?? 'นักเรียน'} — ${reqs[0].request_type}${reqs[0].classes?.master_subjects?.subject_name ? ' · ' + reqs[0].classes.master_subjects.subject_name : ''}${reqs[0].requested_period_no ? ' · คาบ ' + reqs[0].requested_period_no : ''}`
      : `มีนักเรียนนัดสอบทั้งหมด ${reqs.length} คน แตะเพื่อดูรายชื่อ`
    const payload = JSON.stringify({ title, body, url: 'teacher.html', tag: 'exam-reminder' })

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
    teachersNotified++
  }

  return new Response(
    JSON.stringify({ checked: rows.length, teachers: teacherMap.size, teachersNotified, sent, skippedDup }),
    { headers: corsHeaders },
  )
})
