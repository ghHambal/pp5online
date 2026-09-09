#!/usr/bin/env node
// ─── DB Auto-scale ──────────────────────────────────────────────────────────
// ตรวจสถานะ PostgREST/Database ของ PP5_Online ทุก 5 นาที (เรียกจาก
// .github/workflows/db-autoscale.yml) ถ้าเจอไม่ปกติ อัปเกรด compute เป็น
// Medium อัตโนมัติ (เพดานสูงสุดที่ตกลงกันไว้) แล้วลดกลับ Micro เองเมื่อระบบ
// ปกติต่อเนื่องนานพอ (กันเด้งขึ้น-ลงถี่เกินไป เพราะ resize แต่ละครั้งมี
// downtime สั้นๆ)
//
// state (จำนวนครั้งที่ตรวจแล้วปกติติดต่อกัน) เก็บเป็นไฟล์ JSON ที่ไฟล์
// เรียกสคริปต์นี้ (workflow) เตรียม/เซฟกลับผ่าน git branch แยกต่างหาก —
// สคริปต์นี้อ่าน/เขียนแค่ path ที่รับมาทาง argv เท่านั้น ไม่ยุ่งกับ git เอง
//
// ทุกครั้งที่ปรับ compute จะแจ้งเตือนกลุ่มแอดมิน/หัวหน้าวิชาการ/ผู้บริหาร 2 ทาง:
// (1) ประกาศป๊อบอัพเข้าระบบเดิม (ตาราง announcements) และ (2) Web Push จริง
// ผ่าน edge function send-push (เด้งแจ้งเตือนระดับเครื่อง เหมือนตอนนักเรียน
// ขอทำบัตร QR Code ใหม่ ไม่ว่าผู้รับจะเปิดแอปหน้าไหนอยู่ก็ตาม) — ต้องตั้ง
// SUPABASE_SERVICE_ROLE_KEY ไว้ ไม่งั้นจะข้ามทั้ง 2 ส่วนนี้ไปเฉยๆ (ยังทำงาน
// ส่วน resize ได้ตามปกติ)

import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const PROJECT_REF = process.env.SUPABASE_PROJECT_REF
const PAT = process.env.SUPABASE_ACCESS_TOKEN
const NOTIFY_WEBHOOK_URL = process.env.NOTIFY_WEBHOOK_URL || ''
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const DOWNGRADE_AFTER_HEALTHY_CHECKS = Number(process.env.DOWNGRADE_AFTER_HEALTHY_CHECKS || 18) // 18*5min = 90 นาที
const STATE_PATH = process.argv[2] || '.autoscale-state.json'
const MANAGEMENT_API = 'https://api.supabase.com/v1'
const REST_URL = `https://${PROJECT_REF}.supabase.co/rest/v1`
const CEILING_TIER = 'ci_medium' // เพดานสูงสุด — ตกลงกับผู้ใช้แล้วว่าไม่ auto-upgrade เกินนี้โดยไม่ถามก่อน
const NORMAL_TIER = 'ci_micro'

if (!PROJECT_REF || !PAT) {
  console.error('ขาด env SUPABASE_PROJECT_REF หรือ SUPABASE_ACCESS_TOKEN')
  process.exit(1)
}

function loadState() {
  if (!existsSync(STATE_PATH)) return { consecutiveHealthyChecks: 0, lastAction: null }
  try {
    return JSON.parse(readFileSync(STATE_PATH, 'utf8'))
  } catch {
    return { consecutiveHealthyChecks: 0, lastAction: null }
  }
}

function saveState(state) {
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2))
}

async function mgmtFetch(path, options = {}) {
  const res = await fetch(`${MANAGEMENT_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${PAT}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  const text = await res.text()
  let json
  try { json = text ? JSON.parse(text) : null } catch { json = text }
  if (!res.ok) throw new Error(`${options.method || 'GET'} ${path} -> HTTP ${res.status}: ${text}`)
  return json
}

// หาว่าใครควรเห็นแจ้งเตือนนี้บ้าง: แอดมิน (is_also_admin=true), หัวหน้าวิชาการ
// ทุกสาย (academic_samai/religion/pvch), และผู้บริหาร (executive) — คำนวณสด
// ทุกครั้งเผื่อมีการมอบหมายตำแหน่งเปลี่ยนในอนาคต ไม่ hardcode รายชื่อตายตัว
const NOTIFY_POSITIONS = ['academic_samai', 'academic_religion', 'academic_pvch', 'executive']

async function getTargetRecipients() {
  const posQuery = `position.in.(${NOTIFY_POSITIONS.join(',')}),positions.ov.{${NOTIFY_POSITIONS.join(',')}}`
  const [byPosition, byDelegatedAdmin] = await Promise.all([
    restGet(`/teachers?select=id,profile_id&or=(${posQuery})`),
    restGet(`/teachers?select=id,profile_id,profiles!inner(is_also_admin)&profiles.is_also_admin=eq.true`),
  ])
  const rows = [...byPosition, ...byDelegatedAdmin]
  const teacherIds = [...new Set(rows.map(r => r.id))]
  const profileIds = [...new Set(rows.map(r => r.profile_id).filter(Boolean))]
  return { teacherIds, profileIds }
}

async function restGet(path) {
  const res = await fetch(`${REST_URL}${path}`, {
    headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` },
  })
  if (!res.ok) throw new Error(`GET ${path} -> HTTP ${res.status}: ${await res.text()}`)
  return res.json()
}

// โพสต์ประกาศป๊อบอัพเข้าระบบเดิม (ตาราง announcements) ให้เฉพาะแอดมิน/หัวหน้า
// วิชาการ/ผู้บริหารเห็นตอนเข้าแอป เหมือนประกาศที่แอดมินโพสต์เอง — ต้องใช้
// service_role key เพราะ RLS จำกัดเฉพาะ admin/สิทธิ์ announce_create เท่านั้น
async function postAnnouncement(title, body, teacherIds) {
  const res = await fetch(`${REST_URL}/announcements`, {
    method: 'POST',
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      title, body,
      is_active: true,
      priority: 8,
      creator_role: 'admin',
      ann_type: 'system',
      audience: 'teacher',
      target_teacher_ids: teacherIds,
      updated_at: new Date().toISOString(),
    }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  console.log('[in-app announcement] โพสต์สำเร็จ')
}

// ยิง Web Push จริง (เด้งแจ้งเตือนระดับเครื่อง/เบราว์เซอร์ ไม่ว่าผู้รับจะเปิด
// แอปหน้าไหนอยู่ก็ตาม) ใช้ edge function send-push ตัวเดียวกับที่ระบบขอ QR
// Code ใหม่ใช้อยู่แล้ว — เรียกด้วย service_role key ตรงๆ (โหมด "ระบบอัตโนมัติ
// ฝั่งเซิร์ฟเวอร์" ที่ปรับให้รองรับแล้ว) ผู้รับต้องเคยกดอนุญาต push ในแอปก่อน
// ถึงจะได้รับจริง (ของเสริม ไม่บล็อกงานหลักถ้าพลาด)
async function sendPushNotification(title, body, profileIds) {
  const res = await fetch(`https://${PROJECT_REF}.supabase.co/functions/v1/send-push`, {
    method: 'POST',
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body, url: 'dashboard.html', profileIds }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(json)}`)
  console.log('[push] ผลส่ง:', JSON.stringify(json))
}

async function notify(title, message) {
  console.log('[notify]', title, '-', message)

  if (!SERVICE_ROLE_KEY) {
    console.log('[notify] ข้ามประกาศในแอป/push — ไม่ได้ตั้ง SUPABASE_SERVICE_ROLE_KEY ไว้')
  } else {
    try {
      const { teacherIds, profileIds } = await getTargetRecipients()
      console.log('[notify] ผู้รับ teacher_id:', teacherIds, 'profile_id:', profileIds)
      if (!teacherIds.length) {
        console.warn('[notify] ข้าม — หาผู้รับที่ตรงเงื่อนไขไม่เจอเลย (ไม่มีใครถือตำแหน่งที่กำหนด)')
      } else {
        await postAnnouncement(title, message, teacherIds).catch(e =>
          console.error('[in-app announcement] โพสต์ไม่สำเร็จ:', e.message))
        await sendPushNotification(title, message, profileIds).catch(e =>
          console.error('[push] ส่งไม่สำเร็จ:', e.message))
      }
    } catch (e) {
      console.error('[notify] หาผู้รับไม่สำเร็จ:', e.message)
    }
  }

  if (!NOTIFY_WEBHOOK_URL) return
  try {
    await fetch(NOTIFY_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: `${title}\n${message}` }),
    })
  } catch (e) {
    console.error('ส่งแจ้งเตือนไม่สำเร็จ:', e.message)
  }
}

// เช็คสุขภาพ rest (PostgREST) และ db — ยอมรับหลายรูปแบบ field เพราะ response
// shape จริงอาจต่างจาก doc เล็กน้อย ถือว่า "ไม่ปกติ" ถ้าเจอสัญญาณผิดปกติจุดใดจุดหนึ่ง
// หรือถ้าตัว health-check เองล้มเหลว/timeout (ปลอดภัยไว้ก่อน)
async function checkHealthy() {
  const services = await mgmtFetch(`/projects/${PROJECT_REF}/health?services=rest,db`)
  console.log('[health raw]', JSON.stringify(services))
  const list = Array.isArray(services) ? services : (services?.services ?? [])
  if (!list.length) throw new Error('health endpoint คืนค่าว่างผิดปกติ')
  return list.every(s => {
    const status = String(s.status ?? s.healthy ?? '').toLowerCase()
    if (status === 'true') return true
    if (status === 'false') return false
    return status.includes('healthy') && !status.includes('unhealthy')
  })
}

async function getCurrentTier() {
  const addons = await mgmtFetch(`/projects/${PROJECT_REF}/billing/addons`)
  const current = addons?.selected_addons?.find(a => a.type === 'compute_instance')
  console.log('[selected compute addon]', JSON.stringify(current))
  return current?.variant?.id ?? NORMAL_TIER
}

async function setComputeTier(tier) {
  await mgmtFetch(`/projects/${PROJECT_REF}/billing/addons`, {
    method: 'PATCH',
    body: JSON.stringify({ addon_type: 'compute_instance', addon_variant: tier }),
  })
}

async function main() {
  const state = loadState()
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
      // Supabase ปฏิเสธ resize ถ้าโปรเจกต์ unhealthy หนักมาก (เช่น DB ต่อไม่ติดเลย)
      // ต้องรอให้ฟื้นตัวบางส่วนก่อนถึงจะสั่ง resize ผ่าน — ปล่อยให้ retry รอบถัดไป
      // (อีก 5 นาที) แทนที่จะทำให้ทั้ง run ล้มเหลว
      try {
        await setComputeTier(CEILING_TIER)
        state.lastAction = `upgrade -> ${CEILING_TIER} @ ${new Date().toISOString()}`
        await notify(
          '⚠️ ระบบ PP5 Online ปรับ compute อัตโนมัติ',
          'ตรวจพบระบบมีผู้ใช้งานพร้อมกันหนาแน่น (PostgREST/Database ไม่ปกติ) ได้อัปเกรด compute เป็น Medium ให้อัตโนมัติแล้วเพื่อรองรับโหลด หากพบว่าระบบยังโหลดช้าอยู่ กรุณารอสักครู่แล้วลองใหม่อีกครั้ง'
        )
      } catch (e) {
        console.error('สั่ง resize ไม่สำเร็จ (จะลองใหม่รอบถัดไป):', e.message)
        state.lastAction = `upgrade attempt failed @ ${new Date().toISOString()}: ${e.message}`
        await notify(
          '🔴 ระบบ PP5 Online มีปัญหาหนัก',
          'ระบบไม่ปกติต่อเนื่อง และสคริปต์อัปเกรด compute อัตโนมัติยังไม่สำเร็จ (อาจไม่ปกติเกินกว่าจะปรับได้ตอนนี้) จะลองใหม่อัตโนมัติทุก 5 นาที หากยังไม่ดีขึ้น กรุณาแจ้งผู้ดูแลระบบให้เข้าไปตรวจสอบด้วยตนเองด่วน'
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
        await notify(
          '✅ ระบบ PP5 Online กลับสู่ปกติแล้ว',
          'ระบบใช้งานได้ปกติต่อเนื่องมาสักพักแล้ว ได้ลด compute กลับเป็น Micro ให้อัตโนมัติเรียบร้อย'
        )
      } catch (e) {
        console.error('สั่ง downgrade ไม่สำเร็จ (จะลองใหม่รอบถัดไป):', e.message)
        state.lastAction = `downgrade attempt failed @ ${new Date().toISOString()}: ${e.message}`
      }
    }
  }

  saveState(state)
  console.log('[state]', JSON.stringify(state))
}

// โหมดทดสอบเฉพาะ path แจ้งเตือน (ไม่แตะ compute เลย) — เรียกด้วย
// `node scripts/db-autoscale.mjs --test-notify`
async function testNotifyOnly() {
  await notify(
    '🧪 ทดสอบระบบแจ้งเตือน auto-scale',
    'นี่คือข้อความทดสอบ ยืนยันว่า target audience (แอดมิน/หัวหน้าวิชาการ/ผู้บริหาร) และการโพสต์ประกาศทำงานถูกต้อง ไม่มีผลกับ compute จริงแต่อย่างใด'
  )
}

if (process.argv.includes('--test-notify')) {
  testNotifyOnly().catch(e => {
    console.error('ทดสอบแจ้งเตือนล้มเหลว:', e)
    process.exit(1)
  })
} else {
  main().catch(e => {
    console.error('autoscale run ล้มเหลว:', e)
    process.exit(1)
  })
}
