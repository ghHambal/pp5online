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

import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const PROJECT_REF = process.env.SUPABASE_PROJECT_REF
const PAT = process.env.SUPABASE_ACCESS_TOKEN
const NOTIFY_WEBHOOK_URL = process.env.NOTIFY_WEBHOOK_URL || ''
const DOWNGRADE_AFTER_HEALTHY_CHECKS = Number(process.env.DOWNGRADE_AFTER_HEALTHY_CHECKS || 18) // 18*5min = 90 นาที
const STATE_PATH = process.argv[2] || '.autoscale-state.json'
const MANAGEMENT_API = 'https://api.supabase.com/v1'
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

async function notify(message) {
  console.log('[notify]', message)
  if (!NOTIFY_WEBHOOK_URL) return
  try {
    await fetch(NOTIFY_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
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
    ?? addons?.available_addons?.find(a => a.type === 'compute_instance' && a.variant?.identifier)
  return current?.variant?.identifier ?? current?.addon_variant ?? NORMAL_TIER
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
        await notify('⚠️ ระบบ PP5 Online ตรวจพบสถานะไม่ปกติ (PostgREST/Database) — อัปเกรด compute เป็น Medium ให้อัตโนมัติแล้ว')
      } catch (e) {
        console.error('สั่ง resize ไม่สำเร็จ (จะลองใหม่รอบถัดไป):', e.message)
        state.lastAction = `upgrade attempt failed @ ${new Date().toISOString()}: ${e.message}`
        await notify('🔴 ระบบ PP5 Online ไม่ปกติหนัก และ resize อัตโนมัติยังไม่สำเร็จ (โปรเจกต์อาจ unhealthy เกินกว่าจะ resize ได้ตอนนี้) — จะลองใหม่อัตโนมัติใน 5 นาที ถ้ายังไม่หายควรเช็ค Dashboard ด้วยตัวเองด่วน')
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
        await notify('✅ ระบบ PP5 Online ปกติต่อเนื่องแล้ว — ลด compute กลับ Micro ให้อัตโนมัติ')
      } catch (e) {
        console.error('สั่ง downgrade ไม่สำเร็จ (จะลองใหม่รอบถัดไป):', e.message)
        state.lastAction = `downgrade attempt failed @ ${new Date().toISOString()}: ${e.message}`
      }
    }
  }

  saveState(state)
  console.log('[state]', JSON.stringify(state))
}

main().catch(e => {
  console.error('autoscale run ล้มเหลว:', e)
  process.exit(1)
})
