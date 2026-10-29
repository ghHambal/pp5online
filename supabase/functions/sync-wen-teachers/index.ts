import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'

const PP5_URL = Deno.env.get('SUPABASE_URL')!
const PP5_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const PP5_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const WEN_URL = Deno.env.get('WEN_SUPABASE_URL') || 'https://zhjqkylesnhcotpkzoxr.supabase.co'
const WEN_SERVICE_ROLE_KEY = Deno.env.get('WEN_SUPABASE_SERVICE_ROLE_KEY') || ''

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
}

type Teacher = { teacher_code: string; full_name: string }
type SyncItem = { code: string; source_name: string; wen_name: string | null; action: 'add' | 'rename' }

const response = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: corsHeaders })

function normalizeTeacherCode(value: unknown) {
  return String(value ?? '').trim()
}

async function readSyncPreview(pp5Admin: ReturnType<typeof createClient>, wenAdmin: ReturnType<typeof createClient>) {
  const [sourceResult, wenResult] = await Promise.all([
    pp5Admin.from('teachers').select('teacher_code,full_name').not('teacher_code', 'is', null),
    wenAdmin.from('teachers').select('id,name'),
  ])
  if (sourceResult.error) throw new Error(`อ่านรายชื่อจาก ปพ.5 ไม่สำเร็จ: ${sourceResult.error.message}`)
  if (wenResult.error) throw new Error(`อ่านรายชื่อจากระบบเวรไม่สำเร็จ: ${wenResult.error.message}`)

  const sourceCounts = new Map<string, number>()
  const sources: Teacher[] = []
  const conflicts: Array<{ code: string; name: string; reason: string }> = []
  for (const row of sourceResult.data || []) {
    const code = normalizeTeacherCode(row.teacher_code)
    const name = String(row.full_name ?? '').trim()
    if (!/^\d{4}$/.test(code) || !name) {
      if (code || name) conflicts.push({ code: code || '—', name: name || '—', reason: 'รหัสครูต้องเป็นตัวเลข 4 หลักและต้องมีชื่อ' })
      continue
    }
    sourceCounts.set(code, (sourceCounts.get(code) || 0) + 1)
    sources.push({ teacher_code: code, full_name: name })
  }

  const duplicateCodes = new Set([...sourceCounts].filter(([, count]) => count > 1).map(([code]) => code))
  for (const code of duplicateCodes) conflicts.push({
    code,
    name: sources.filter(t => t.teacher_code === code).map(t => t.full_name).join(' / '),
    reason: 'รหัสซ้ำใน ปพ.5 จึงข้ามเพื่อป้องกันจับคู่ผิดคน',
  })

  const wenByCode = new Map<string, string>()
  for (const row of wenResult.data || []) wenByCode.set(String(row.id).trim(), String(row.name ?? '').trim())

  const items: SyncItem[] = []
  let unchanged = 0
  for (const teacher of sources) {
    const code = teacher.teacher_code
    if (duplicateCodes.has(code)) continue
    if (!wenByCode.has(code)) {
      items.push({ code, source_name: teacher.full_name, wen_name: null, action: 'add' })
    } else if (wenByCode.get(code) !== teacher.full_name) {
      items.push({ code, source_name: teacher.full_name, wen_name: wenByCode.get(code) || '', action: 'rename' })
    } else {
      unchanged++
    }
  }

  return { items, conflicts, unchanged }
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return response({ error: 'method not allowed' }, 405)

  try {
    const authHeader = req.headers.get('Authorization') || ''
    const jwt = authHeader.replace(/^Bearer\s+/i, '')
    if (!jwt) return response({ error: 'กรุณาเข้าสู่ระบบ ปพ.5 ใหม่' }, 401)

    const pp5Admin = createClient(PP5_URL, PP5_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
    const caller = createClient(PP5_URL, PP5_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    })
    const { data: { user }, error: userError } = await caller.auth.getUser(jwt)
    if (userError || !user) return response({ error: 'ไม่พบผู้ใช้ที่เข้าสู่ระบบ' }, 401)

    const { data: actor, error: actorError } = await pp5Admin
      .from('profiles').select('role,is_also_admin').eq('id', user.id).maybeSingle()
    if (actorError) throw new Error(`ตรวจสิทธิ์ผู้ดูแลไม่สำเร็จ: ${actorError.message}`)
    if (actor?.role !== 'admin' && actor?.is_also_admin !== true) {
      return response({ error: 'ฟังก์ชันนี้ให้ผู้ดูแลระบบใช้งานเท่านั้น' }, 403)
    }
    if (!WEN_SERVICE_ROLE_KEY) {
      return response({ error: 'ระบบซิงก์ยังไม่ได้ตั้งค่า secret สำหรับระบบเวรใน Supabase' }, 503)
    }

    const wenAdmin = createClient(WEN_URL, WEN_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
    const body = await req.json().catch(() => ({}))
    const preview = await readSyncPreview(pp5Admin, wenAdmin)

    if (body.action === 'preview') {
      return response({
        items: preview.items,
        conflicts: preview.conflicts,
        unchanged: preview.unchanged,
        counts: {
          add: preview.items.filter(item => item.action === 'add').length,
          rename: preview.items.filter(item => item.action === 'rename').length,
          unchanged: preview.unchanged,
          conflicts: preview.conflicts.length,
        },
      })
    }

    if (body.action !== 'apply' || !Array.isArray(body.codes) || body.codes.length > 1000) {
      return response({ error: 'คำขอซิงก์ไม่ถูกต้อง' }, 400)
    }

    const selectedCodes = [...new Set(body.codes.map(normalizeTeacherCode))]
    const allowedItems = new Map(preview.items.map(item => [item.code, item]))
    const invalidCodes = selectedCodes.filter(code => !allowedItems.has(code))
    if (invalidCodes.length) return response({
      error: 'ข้อมูลรายชื่อเปลี่ยนหลังจากแสดงตัวอย่าง กรุณากดอัปเดตเพื่อโหลดตัวอย่างใหม่',
      stale: true,
    }, 409)

    let added = 0
    let renamed = 0
    const failures: Array<{ code: string; error: string }> = []
    for (const code of selectedCodes) {
      const item = allowedItems.get(code)!
      if (item.action === 'add') {
        const { error } = await wenAdmin.from('teachers').insert({ id: item.code, name: item.source_name, role: 'teacher' })
        if (error) failures.push({ code, error: error.message })
        else added++
      } else {
        const { data, error } = await wenAdmin.from('teachers')
          .update({ name: item.source_name }).eq('id', item.code).select('id').maybeSingle()
        if (error) failures.push({ code, error: error.message })
        else if (!data) failures.push({ code, error: 'ไม่พบรหัสครูในระบบเวรขณะบันทึก' })
        else renamed++
      }
    }

    return response({ added, renamed, failed: failures.length, failures, unchanged: preview.unchanged })
  } catch (error) {
    console.error('sync-wen-teachers failed:', error)
    return response({ error: error instanceof Error ? error.message : 'ซิงก์รายชื่อไม่สำเร็จ' }, 500)
  }
})
