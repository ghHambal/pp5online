// supabase/functions/send-push/index.ts
// ยิง Web Push จริงไปหาอุปกรณ์ที่สมัคร push_subscriptions ไว้ ใช้ VAPID (RFC 8292)
// เรียกจากฝั่ง client ผ่าน supabase.functions.invoke('send-push', { body: {...} })
// - แอดมิน/is_also_admin: ยิงได้ทั้ง target: 'all_teachers'/'all_students' หรือ profileIds ที่ระบุเอง (ไม่จำกัดขอบเขต)
// - ครูทั่วไป: ยิงได้เฉพาะ profileIds ที่เป็น "นักเรียนในวิชาที่ตัวเองสอน" เท่านั้น (เช็คจริงฝั่งเซิร์ฟเวอร์ ไม่เชื่อ client)
// - target: 'terangganu_missing_passport' / 'terangganu_incomplete_survey': ผู้รับผิดชอบค่าย TERANGGANU ยิงได้
//   (ไม่ต้องเป็นแอดมิน) — สิทธิ์และรายชื่อเป้าหมายตรวจ/คำนวณผ่าน RPC ของระบบนั้นๆ (ดู TERANGGANU_RPC_TARGETS ด้านล่าง)
//   ด้วย JWT ของผู้เรียกเอง (แต่ละ RPC เช็ค terangganu_can(...,'settings') เอง) — เพิ่ม target ใหม่ได้โดยเพิ่ม entry ในแมปนี้
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'
import webpush from 'npm:web-push@3.6.7'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

// VAPID: อ่านจาก secret ก่อนเสมอ (แนะนำให้ตั้งผ่าน `supabase secrets set` ในอนาคต)
// มี fallback เป็นคู่กุญแจที่สร้างไว้แล้ว เพื่อให้ฟีเจอร์ใช้งานได้ทันทีโดยไม่ต้องตั้ง secret ก่อน
const VAPID_PUBLIC_KEY  = Deno.env.get('VAPID_PUBLIC_KEY')  || 'BFgbl8o4NOgaOf-h1CsQD5DurB94YWYPWJBJ28_wM9kn8AqjB1-j0KPbMqp2SOgg36N59bz9j_Z1nAeJfpNg6YE'
const VAPID_PRIVATE_KEY = Deno.env.get('VAPID_PRIVATE_KEY') || '_zZPwp5gPEYOo5PwYPASA5yjZbaQ3DFKkWKmWlon0jc'
const VAPID_SUBJECT     = Deno.env.get('VAPID_SUBJECT')     || 'mailto:kruhambalwaji@gmail.com'

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const MAX_TEACHER_TARGETS = 60 // ครูทั่วไปยิงได้ครั้งละไม่เกินกี่คน กันการยิงเป็น broadcast

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method not allowed' }), { status: 405, headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization') ?? ''
    const jwt = authHeader.replace('Bearer ', '')
    if (!jwt) return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: corsHeaders })

    const supabaseUser = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    })
    const { data: { user }, error: userErr } = await supabaseUser.auth.getUser(jwt)
    if (userErr || !user) {
      return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: corsHeaders })
    }

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

    // เช็คสิทธิ์ผู้เรียกจริงฝั่งเซิร์ฟเวอร์ (ไม่เชื่อ flag ที่ client ส่งมา)
    const { data: callerProfile } = await admin
      .from('profiles').select('role, is_also_admin').eq('id', user.id).maybeSingle()
    const isAdmin = callerProfile?.role === 'admin' || callerProfile?.is_also_admin === true

    const payload = await req.json()
    const { title, body: msgBody, url, tag, profileIds, target } = payload
    if (!title) return new Response(JSON.stringify({ error: 'ต้องระบุ title' }), { status: 400, headers: corsHeaders })

    let targetIds: string[] | null = Array.isArray(profileIds) ? profileIds : null

    // target ที่คำนวณรายชื่อ+สิทธิ์ผ่าน RPC ของระบบย่อยเอง (ดูหมายเหตุด้านบน) — เพิ่ม target ใหม่ที่นี่ได้เรื่อยๆ
    const TERANGGANU_RPC_TARGETS: Record<string, { rpc: string, emptyMessage: string }> = {
      terangganu_missing_passport: { rpc: 'get_terangganu_missing_passport_targets', emptyMessage: 'ไม่มีใครขาดข้อมูลหนังสือเดินทางแล้ว' },
      terangganu_incomplete_survey: { rpc: 'get_terangganu_incomplete_survey_targets', emptyMessage: 'ทุกคนกรอกแบบสำรวจครบแล้ว' },
    }
    const terangganuTarget = target ? TERANGGANU_RPC_TARGETS[target] : undefined

    if (!targetIds && terangganuTarget) {
      const { data: ids, error: rpcErr } = await supabaseUser.rpc(terangganuTarget.rpc)
      if (rpcErr) return new Response(JSON.stringify({ error: rpcErr.message }), { status: 403, headers: corsHeaders })
      targetIds = Array.isArray(ids) ? ids : []
      if (!targetIds.length) {
        return new Response(JSON.stringify({ sent: 0, message: terangganuTarget.emptyMessage }), { status: 200, headers: corsHeaders })
      }
    } else if (isAdmin) {
      if (!targetIds && target === 'all_teachers') {
        const { data: teachers } = await admin.from('teachers').select('profile_id').not('profile_id', 'is', null)
        targetIds = (teachers ?? []).map((t: { profile_id: string }) => t.profile_id)
      } else if (!targetIds && target === 'all_students') {
        const { data: students } = await admin.from('students').select('profile_id').not('profile_id', 'is', null)
        targetIds = (students ?? []).map((s: { profile_id: string }) => s.profile_id)
      }
    } else {
      // ครูทั่วไป (ไม่ใช่แอดมิน) — ยิงได้เฉพาะนักเรียนในวิชาที่ตัวเองสอนเท่านั้น
      const { data: callerTeacher } = await admin.from('teachers').select('id').eq('profile_id', user.id).maybeSingle()
      if (!callerTeacher) {
        return new Response(JSON.stringify({ error: 'forbidden' }), { status: 403, headers: corsHeaders })
      }
      if (!targetIds || !targetIds.length) {
        return new Response(JSON.stringify({ error: 'ต้องระบุ profileIds' }), { status: 400, headers: corsHeaders })
      }
      if (targetIds.length > MAX_TEACHER_TARGETS) {
        return new Response(JSON.stringify({ error: `ส่งได้ครั้งละไม่เกิน ${MAX_TEACHER_TARGETS} คน` }), { status: 400, headers: corsHeaders })
      }

      const { data: mySubjects } = await admin.from('master_subjects').select('id').eq('teacher_id', callerTeacher.id)
      const subjectIds = (mySubjects ?? []).map((s: { id: number }) => s.id)
      const { data: myClasses } = subjectIds.length
        ? await admin.from('classes').select('id').in('course_id', subjectIds)
        : { data: [] }
      const classIds = (myClasses ?? []).map((c: { id: number }) => c.id)
      const { data: myStudentRows } = classIds.length
        ? await admin.from('class_students').select('students(profile_id)').in('class_id', classIds)
        : { data: [] }
      const allowedProfileIds = new Set(
        (myStudentRows ?? [])
          .map((r: { students?: { profile_id?: string } | { profile_id?: string }[] }) =>
            Array.isArray(r.students) ? r.students[0]?.profile_id : r.students?.profile_id)
          .filter(Boolean)
      )
      const notAllowed = targetIds.filter(id => !allowedProfileIds.has(id))
      if (notAllowed.length) {
        return new Response(JSON.stringify({ error: 'มีผู้รับที่ไม่ได้อยู่ในความรับผิดชอบของคุณ' }), { status: 403, headers: corsHeaders })
      }
    }

    if (!targetIds || !targetIds.length) {
      return new Response(JSON.stringify({ error: 'ไม่พบกลุ่มเป้าหมาย (ระบุ profileIds หรือ target)' }), { status: 400, headers: corsHeaders })
    }

    const { data: subs } = await admin
      .from('push_subscriptions').select('id, endpoint, p256dh, auth').in('profile_id', targetIds)
    if (!subs || !subs.length) {
      return new Response(JSON.stringify({ sent: 0, message: 'ยังไม่มีใครสมัครรับ push ในกลุ่มเป้าหมายนี้' }), { status: 200, headers: corsHeaders })
    }

    const notifPayload = JSON.stringify({ title, body: msgBody ?? '', url: url ?? 'teacher.html', tag: tag ?? undefined })
    let sent = 0
    const deadIds: number[] = []

    await Promise.all(subs.map(async (s: { id: number, endpoint: string, p256dh: string, auth: string }) => {
      try {
        await webpush.sendNotification(
          { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
          notifPayload,
        )
        sent++
      } catch (err) {
        const statusCode = (err as { statusCode?: number })?.statusCode
        if (statusCode === 404 || statusCode === 410) deadIds.push(s.id)
      }
    }))

    if (deadIds.length) {
      await admin.from('push_subscriptions').delete().in('id', deadIds)
    }

    return new Response(
      JSON.stringify({ sent, pruned: deadIds.length, totalSubscriptions: subs.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders })
  }
})
