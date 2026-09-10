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
async function getTargetRecipientsOnce() {
  const posQuery = `position.in.(${NOTIFY_POSITIONS.join(',')}),positions.ov.{${NOTIFY_POSITIONS.join(',')}}`
  const [byPosition, byDelegatedAdmin] = await Promise.all([
    admin.from('teachers').select('id, profile_id').or(posQuery),
    admin.from('teachers').select('id, profile_id, profiles!inner(is_also_admin)').eq('profiles.is_also_admin', true),
  ])
  if (byPosition.error) throw new Error(`query ตำแหน่งล้มเหลว: ${byPosition.error.message}`)
  if (byDelegatedAdmin.error) throw new Error(`query is_also_admin ล้มเหลว: ${byDelegatedAdmin.error.message}`)
  const rows = [...(byPosition.data ?? []), ...(byDelegatedAdmin.data ?? [])] as { id: number; profile_id: string | null }[]
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
  try {
    const state = await runAutoscale()
    return new Response(JSON.stringify({ ok: true, state }), { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    console.error('autoscale-tick ล้มเหลว:', err)
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 })
  }
})
