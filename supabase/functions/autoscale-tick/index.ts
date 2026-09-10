// supabase/functions/autoscale-tick/index.ts
// ─── DB Auto-scale (native Supabase, ตัดปัญหา GitHub Actions schedule ไม่นิ่ง) ──
// pg_cron เรียกฟังก์ชันนี้ทุก 5 นาทีโดยตรงผ่าน pg_net (ดู SQL migration คู่กัน)
// ย้ายมาจาก scripts/db-autoscale.mjs (GitHub Actions) — ตรรกะเดิมทุกจุด เพราะ
// ผ่านการทดสอบจริงกับ production มาแล้ว แค่พอร์ตจาก Node เป็น Deno และเปลี่ยน
// ที่เก็บ state จาก git branch เป็นตาราง system_config (เร็วกว่า ไม่ต้องยุ่ง git)
//
// อ่าน AUTOSCALE_HANDOFF.md ที่ root ของ repo ก่อนแก้ไขไฟล์นี้ — มีบริบทเต็ม
// หมายเหตุ: secret ชื่อ MANAGEMENT_ACCESS_TOKEN ห้ามขึ้นต้นด้วย SUPABASE_
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const PAT = Deno.env.get('MANAGEMENT_ACCESS_TOKEN')!
const PROJECT_REF = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1] ?? ''
const MANAGEMENT_API = 'https://api.supabase.com/v1'
const CEILING_TIER = 'ci_medium'
const NORMAL_TIER = 'ci_micro'
const DOWNGRADE_AFTER_HEALTHY_CHECKS = 18 // 18*5min = 90 นาที
const POST_RESIZE_SETTLE_MS = 15000
const NOTIFY_POSITIONS = ['academic_samai', 'academic_religion', 'academic_pvch', 'executive']

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

async function mgmtFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${MANAGEMENT_API}${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${PAT}`, 'Content-Type': 'application/json', ...(options.headers || {}) },
  })
  const text = await res.text()
  let json
  try { json = text ? JSON.parse(text) : null } catch { json = text }
  if (!res.ok) throw new Error(`${options.method || 'GET'} ${path} -> HTTP ${res.status}: ${text}`)
  return json
}

// system_config.value เป็นคอลัมน์ text ไม่ใช่ jsonb — ต้อง stringify/parse เอง
async function loadState() {
  const { data } = await admin.from('system_config').select('value').eq('key', 'autoscaleState').maybeSingle()
  if (!data?.value) return { consecutiveHealthyChecks: 0, lastAction: null }
  try { return JSON.parse(data.value) } catch { return { consecutiveHealthyChecks: 0, lastAction: null } }
}

async function saveState(state: Record<string, unknown>) {
  await admin.from('system_config').upsert(
    { key: 'autoscaleState', value: JSON.stringify(state), updated_at: new Date().toISOString() },
    { onConflict: 'key' },
  )
}

// กันการชนกันแบบ lease lock ผ่านแถวเดียวใน system_config (key='autoscaleLock',
// value=ISO timestamp ตอนคว้าล็อก) แทน Postgres advisory lock — ลองแล้วจริง
// 2026-09-10 พบว่า advisory lock (session-level) ใช้ไม่ได้กับสภาพแวดล้อมนี้
// เพราะ supabase-js ผ่าน connection pooler ที่แต่ละ query อาจได้ backend
// connection คนละตัว ทำให้ล็อกที่คว้าไว้ในคำสั่งหนึ่ง ปลดล็อกจากอีกคำสั่งไม่ได้
// (ต้อง pg_terminate_backend ถึงจะหลุด) — เปลี่ยนมาใช้แถวข้อมูลธรรมดาที่ไม่ยึด
// ติด session แทน ปลอดภัยกับ pooler และ self-heal อัตโนมัติถ้า invocation ก่อน
// หน้าตายกลางคันไม่ทันปลดล็อก (ถือว่าล็อกหมดอายุถ้าเก่ากว่า LOCK_STALE_MS)
const LOCK_STALE_MS = 4 * 60 * 1000 // 4 นาที (สั้นกว่ารอบ 5 นาทีของ trigger)

async function tryAcquireLock(): Promise<boolean> {
  const now = new Date().toISOString()
  const staleThreshold = new Date(Date.now() - LOCK_STALE_MS).toISOString()
  const { data, error } = await admin
    .from('system_config')
    .update({ value: now, updated_at: now })
    .eq('key', 'autoscaleLock')
    .lt('value', staleThreshold)
    .select()
  if (error) throw error
  return !!data && data.length > 0
}

async function releaseLock() {
  await admin
    .from('system_config')
    .update({ value: '1970-01-01T00:00:00.000Z', updated_at: new Date().toISOString() })
    .eq('key', 'autoscaleLock')
}

async function checkHealthy() {
  const services = await mgmtFetch(`/projects/${PROJECT_REF}/health?services=rest,db`)
  console.log('[health raw]', JSON.stringify(services))
  const list = Array.isArray(services) ? services : (services?.services ?? [])
  if (!list.length) throw new Error('health endpoint คืนค่าว่างผิดปกติ')
  return list.every((s: { status?: string; healthy?: boolean }) => {
    const status = String(s.status ?? s.healthy ?? '').toLowerCase()
    if (status === 'true') return true
    if (status === 'false') return false
    return status.includes('healthy') && !status.includes('unhealthy')
  })
}

async function getCurrentTier() {
  const addons = await mgmtFetch(`/projects/${PROJECT_REF}/billing/addons`)
  const current = addons?.selected_addons?.find((a: { type: string }) => a.type === 'compute_instance')
  console.log('[selected compute addon]', JSON.stringify(current))
  return current?.variant?.id ?? NORMAL_TIER
}

async function setComputeTier(tier: string) {
  await mgmtFetch(`/projects/${PROJECT_REF}/billing/addons`, {
    method: 'PATCH',
    body: JSON.stringify({ addon_type: 'compute_instance', addon_variant: tier }),
  })
}

// เช็ค error ของแต่ละ query ตรงๆ แทนการปล่อยให้เงียบแล้วได้ array ว่างกลับมา
// (เจอบั๊กจริง: ตอน DB โหลดหนัก query ล้มเหลว แต่โค้ดเดิม ?? [] กลืน error
// ไปเฉยๆ ทำให้ notify() คิดว่า "ไม่มีผู้รับ" ทั้งที่จริงคือ query พังต่างหาก)
//
// 2026-09-10 เจอบั๊กที่ 2 ต่อยอดจากอันนี้: ทั้งสอง query สำเร็จ (ไม่มี .error)
// แต่ได้ data ว่างทั้งคู่ ทั้งที่ตรวจ SQL ตรงแล้วมีแถวจริง — สาเหตุคือ
// .or(posQuery) ใช้ operator `ov` (array overlaps) กับ syntax `{val1,val2}`
// ซึ่ง PostgREST ตีความ comma ข้างในเป็นตัวแบ่งเงื่อนไขของ or() เอง (ไม่ใช่
// ตัวแบ่งสมาชิก array) ทำให้ query พังแบบเงียบ (คืน data ว่างแทนที่จะ error)
// แก้โดยเปลี่ยนเป็น 2 query แยกกันแล้ว merge เอง แทนการยัดรวมใน .or() เดียว
async function getTargetRecipientsOnce() {
  const [byPositionCol, byPositionsArr, byDelegatedAdmin] = await Promise.all([
    admin.from('teachers').select('id, profile_id').in('position', NOTIFY_POSITIONS),
    admin.from('teachers').select('id, profile_id').overlaps('positions', NOTIFY_POSITIONS),
    admin.from('teachers').select('id, profile_id, profiles!inner(is_also_admin)').eq('profiles.is_also_admin', true),
  ])
  if (byPositionCol.error) throw new Error(`query position ล้มเหลว: ${byPositionCol.error.message}`)
  if (byPositionsArr.error) throw new Error(`query positions[] ล้มเหลว: ${byPositionsArr.error.message}`)
  if (byDelegatedAdmin.error) throw new Error(`query is_also_admin ล้มเหลว: ${byDelegatedAdmin.error.message}`)
  const rows = [
    ...(byPositionCol.data ?? []),
    ...(byPositionsArr.data ?? []),
    ...(byDelegatedAdmin.data ?? []),
  ] as { id: number; profile_id: string | null }[]
  const teacherIds = [...new Set(rows.map(r => r.id))]
  const profileIds = [...new Set(rows.map(r => r.profile_id).filter(Boolean))] as string[]
  return { teacherIds, profileIds }
}

// retry 1 ครั้งถ้าพัง (มักเกิดตอน DB ยังไม่นิ่งดีหลัง resize) ก่อนจะยอมแพ้จริง
async function getTargetRecipients() {
  try {
    return await getTargetRecipientsOnce()
  } catch (e) {
    console.error('[notify] หาผู้รับรอบแรกล้มเหลว จะลองอีกครั้งใน 10 วิ:', (e as Error).message)
    await sleep(10000)
    return await getTargetRecipientsOnce()
  }
}

async function postAnnouncement(title: string, body: string, teacherIds: number[]) {
  const { error } = await admin.from('announcements').insert({
    title, body, is_active: true, priority: 8, creator_role: 'admin', ann_type: 'system',
    audience: 'teacher', target_teacher_ids: teacherIds, updated_at: new Date().toISOString(),
  })
  if (error) throw error
  console.log('[in-app announcement] โพสต์สำเร็จ')
}

async function sendPushNotification(title: string, body: string, profileIds: string[]) {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/send-push`, {
    method: 'POST',
    headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body, url: 'dashboard.html', profileIds }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(json)}`)
  console.log('[push] ผลส่ง:', JSON.stringify(json))
}

async function notify(title: string, message: string) {
  console.log('[notify]', title, '-', message)
  try {
    const { teacherIds, profileIds } = await getTargetRecipients()
    console.log('[notify] ผู้รับ teacher_id:', teacherIds, 'profile_id:', profileIds)
    if (!teacherIds.length) {
      console.warn('[notify] ข้าม — หาผู้รับที่ตรงเงื่อนไขไม่เจอเลย')
      return
    }
    await postAnnouncement(title, message, teacherIds).catch(e => console.error('[in-app announcement] โพสต์ไม่สำเร็จ:', e.message))
    await sendPushNotification(title, message, profileIds).catch(e => console.error('[push] ส่งไม่สำเร็จ:', e.message))
  } catch (e) {
    console.error('[notify] หาผู้รับไม่สำเร็จ:', (e as Error).message)
  }
}

async function runAutoscale() {
  const state = await loadState()
  const currentTier = await getCurrentTier().catch(e => {
    console.error('อ่าน tier ปัจจุบันไม่สำเร็จ (จะถือว่าเป็น micro):', e.message)
    return NORMAL_TIER
  })
  console.log('[tier ปัจจุบัน]', currentTier)

  const healthy = await checkHealthy().catch(e => {
    console.error('health check ล้มเหลว ถือว่าไม่ปกติไว้ก่อน:', e.message)
    return false
  })

  if (!healthy) {
    state.consecutiveHealthyChecks = 0
    if (currentTier !== CEILING_TIER) {
      try {
        await setComputeTier(CEILING_TIER)
        state.lastAction = `upgrade -> ${CEILING_TIER} @ ${new Date().toISOString()}`
        await sleep(POST_RESIZE_SETTLE_MS)
        await notify(
          '⚠️ ระบบ PP5 Online ปรับ compute อัตโนมัติ',
          'ตรวจพบระบบมีผู้ใช้งานพร้อมกันหนาแน่น (PostgREST/Database ไม่ปกติ) ได้อัปเกรด compute เป็น Medium ให้อัตโนมัติแล้วเพื่อรองรับโหลด หากพบว่าระบบยังโหลดช้าอยู่ กรุณารอสักครู่แล้วลองใหม่อีกครั้ง',
        )
      } catch (e) {
        console.error('สั่ง resize ไม่สำเร็จ (จะลองใหม่รอบถัดไป):', (e as Error).message)
        state.lastAction = `upgrade attempt failed @ ${new Date().toISOString()}: ${(e as Error).message}`
        await notify(
          '🔴 ระบบ PP5 Online มีปัญหาหนัก',
          'ระบบไม่ปกติต่อเนื่อง และสคริปต์อัปเกรด compute อัตโนมัติยังไม่สำเร็จ จะลองใหม่อัตโนมัติทุก 5 นาที หากยังไม่ดีขึ้น กรุณาแจ้งผู้ดูแลระบบให้เข้าไปตรวจสอบด้วยตนเองด่วน',
        )
      }
    } else {
      console.log('อยู่ที่เพดานสูงสุด (Medium) แล้ว ไม่ต้องอัปเกรดเพิ่ม')
    }
  } else {
    state.consecutiveHealthyChecks = (state.consecutiveHealthyChecks || 0) + 1
    console.log(`ปกติต่อเนื่อง ${state.consecutiveHealthyChecks}/${DOWNGRADE_AFTER_HEALTHY_CHECKS} ครั้ง`)
    if (currentTier !== NORMAL_TIER && state.consecutiveHealthyChecks >= DOWNGRADE_AFTER_HEALTHY_CHECKS) {
      try {
        await setComputeTier(NORMAL_TIER)
        state.consecutiveHealthyChecks = 0
        state.lastAction = `downgrade -> ${NORMAL_TIER} @ ${new Date().toISOString()}`
        await sleep(POST_RESIZE_SETTLE_MS)
        await notify(
          '✅ ระบบ PP5 Online กลับสู่ปกติแล้ว',
          'ระบบใช้งานได้ปกติต่อเนื่องมาสักพักแล้ว ได้ลด compute กลับเป็น Micro ให้อัตโนมัติเรียบร้อย',
        )
      } catch (e) {
        console.error('สั่ง downgrade ไม่สำเร็จ (จะลองใหม่รอบถัดไป):', (e as Error).message)
        state.lastAction = `downgrade attempt failed @ ${new Date().toISOString()}: ${(e as Error).message}`
      }
    }
  }

  await saveState(state)
  console.log('[state]', JSON.stringify(state))
  return state
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method not allowed' }), { status: 405 })
  }
  // โหมดทดสอบ path แจ้งเตือนอย่างเดียว ไม่แตะ compute เลย (ยิงพร้อม header
  // X-Test-Notify: 1) — เทียบเท่า --test-notify ของสคริปต์เดิมที่หายไปตอนพอร์ต
  if (req.headers.get('x-test-notify') === '1') {
    try {
      const recipients = await getTargetRecipients()
      await notify(
        '🧪 ทดสอบระบบแจ้งเตือน Auto-scale',
        'นี่คือข้อความทดสอบ ยืนยันว่าระบบหาผู้รับและส่งแจ้งเตือน (ประกาศในแอป + Web Push) ทำงานถูกต้องแล้ว หลังแก้บั๊กที่ทำให้หาผู้รับไม่เจอ',
      )
      return new Response(JSON.stringify({ ok: true, recipients }), { headers: { 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 })
    }
  }
  // กันการชนกัน: มี trigger 2 ตัวอิสระต่อกัน (pg_cron ในโปรเจกต์ + cron-job.org
  // ข้างนอก) ยิงเข้ามาใกล้เคียงกันได้ทุกรอบ + pg_cron เองก็ไล่ตามงานค้างได้ตอน
  // DB โหลดหนัก ทำให้เกิด invocation ซ้อนกันจริง ก่อนหน้านี้ใช้ read-modify-write
  // ธรรมดาเก็บ state ทำให้ consecutiveHealthyChecks อ่านค่าเก่าค้าง เกิด downgrade
  // ก่อนเวลาจริง (เหตุการณ์จริง 2026-09-10 14:20 น. ไทย) แก้ด้วย lease lock
  // แถวใน system_config (ดูฟังก์ชัน tryAcquireLock/releaseLock ด้านบน)
  const gotLock = await tryAcquireLock().catch(e => {
    console.error('เช็คล็อกไม่สำเร็จ (จะถือว่าไม่ได้ล็อก ข้ามรอบนี้):', (e as Error).message)
    return false
  })
  if (!gotLock) {
    console.log('มี invocation อื่นกำลังทำงานอยู่ (หรือเช็คล็อกพลาด) ข้ามรอบนี้ไปกันชนกัน')
    return new Response(JSON.stringify({ ok: true, skipped: true }), { headers: { 'Content-Type': 'application/json' } })
  }
  try {
    const state = await runAutoscale()
    return new Response(JSON.stringify({ ok: true, state }), { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    console.error('autoscale-tick ล้มเหลว:', err)
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 })
  } finally {
    await releaseLock().catch(e => console.error('ปลดล็อกไม่สำเร็จ:', (e as Error).message))
  }
})
