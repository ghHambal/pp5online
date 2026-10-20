const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
}
const reply = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: cors })
const callback = 'pp5ServerReply'

export function validateGasUrl(value, redirect = false) {
  const url = new URL(value)
  const hosts = redirect ? ['script.google.com', 'script.googleusercontent.com'] : ['script.google.com']
  if (url.protocol !== 'https:' || url.username || url.password || url.port || !hosts.includes(url.hostname) ||
      (!redirect && !/^\/macros\/s\/[a-zA-Z0-9_-]+\/exec$/.test(url.pathname))) {
    throw new Error('Central GAS URL ต้องเป็น https://script.google.com/macros/s/.../exec')
  }
  return url
}

export function parseGasResponse(text) {
  const match = text.trim().match(/^pp5ServerReply\s*\(([\s\S]*)\);?$/)
  if (!match) throw new Error('GAS ไม่ได้ตอบกลับเป็นข้อมูล กรุณาตรวจ deployment และสิทธิ์ Web App')
  const result = JSON.parse(match[1])
  if (!result || typeof result !== 'object' || Array.isArray(result)) throw new Error('รูปแบบคำตอบ GAS ไม่ถูกต้อง')
  return result
}

export async function callGas(gasUrl, payload, fetchImpl = fetch) {
  let url = validateGasUrl(gasUrl)
  url.search = ''
  url.searchParams.set('callback', callback)
  for (const [key, value] of Object.entries(payload)) url.searchParams.set(key, String(value))
  const signal = AbortSignal.timeout(payload.action === 'student_sync_capabilities' ? 30000 : 100000)
  for (let redirects = 0; redirects <= 5; redirects++) {
    const res = await fetchImpl(url.toString(), { redirect: 'manual', signal })
    if ([301, 302, 303, 307, 308].includes(res.status)) {
      const location = res.headers.get('location')
      if (!location) throw new Error('GAS ส่ง redirect ที่ไม่ครบ')
      url = validateGasUrl(new URL(location, url).toString(), true)
      continue
    }
    if (!res.ok) throw new Error('GAS ตอบ HTTP ' + res.status)
    return parseGasResponse(await res.text())
  }
  throw new Error('GAS ส่ง redirect มากเกินไป')
}

export function createStudentSyncHandler({ createClient, env, fetchImpl = fetch }) {
  return async req => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
    if (req.method !== 'POST') return reply({ ok: false, error: 'method not allowed' }, 405)
    let stage = 'auth'
    try {
      const authorization = req.headers.get('authorization') || ''
      const token = authorization.match(/^Bearer\s+(.+)$/i)?.[1]
      if (!token) return reply({ ok: false, error: 'กรุณาเข้าสู่ระบบใหม่' }, 401)
      const caller = createClient(env.url, env.anonKey, {
        global: { headers: { Authorization: authorization } },
        auth: { persistSession: false, autoRefreshToken: false },
      })
      const { data: { user }, error: authError } = await caller.auth.getUser(token)
      if (authError || !user) return reply({ ok: false, error: 'กรุณาเข้าสู่ระบบใหม่' }, 401)
      const admin = createClient(env.url, env.serviceKey, { auth: { persistSession: false, autoRefreshToken: false } })
      const { data: profile, error: profileError } = await admin.from('profiles')
        .select('role,is_also_admin').eq('id', user.id).maybeSingle()
      if (profileError || !profile || (profile.role !== 'admin' && profile.is_also_admin !== true)) {
        return reply({ ok: false, error: 'เฉพาะแอดมินเท่านั้นที่ซิงก์นักเรียนได้' }, 403)
      }
      stage = 'validate'
      const body = await req.json()
      if (!['preview', 'sync'].includes(body.operation)) throw new Error('คำสั่งไม่ถูกต้อง')
      const sourceSheetId = String(body.sourceSheetId || '')
      const tabName = String(body.tabName || '').trim()
      const headerRow = Number(body.headerRow)
      if (!/^[a-zA-Z0-9_-]{20,}$/.test(sourceSheetId) || !tabName || tabName.length > 100 ||
          !Number.isInteger(headerRow) || headerRow < 1) throw new Error('กรุณาตรวจ Sheet ID ชื่อแท็บ และแถวหัวตาราง')
      if (body.operation === 'sync' && !/^[a-zA-Z0-9_=-]{40,100}$/.test(String(body.expectedFingerprint || ''))) {
        throw new Error('กรุณาตรวจสอบรายชื่อก่อนยืนยันซิงก์')
      }
      stage = 'config'
      const { data: config, error: configError } = await admin.from('system_config')
        .select('value').eq('key', 'centralGasUrl').maybeSingle()
      if (configError || !config?.value) throw new Error('ยังไม่ได้ตั้งค่า Central GAS URL')
      stage = 'capabilities'
      const capability = await callGas(config.value, { action: 'student_sync_capabilities' }, fetchImpl)
      if (capability.ok !== true || capability.studentSyncVersion !== 2) {
        throw new Error('Central GAS ยังเป็นรุ่นเก่า กรุณา Deploy New version ของ gas/pp5-sync.gs')
      }
      stage = body.operation
      const result = await callGas(config.value, {
        action: body.operation === 'preview' ? 'preview_students_sync' : 'sync_students_now',
        sourceSheetId, tabName, headerRow,
        ...(body.operation === 'sync' ? { expectedFingerprint: body.expectedFingerprint } : {}),
      }, fetchImpl)
      if (result.ok !== true) throw new Error(result.error || 'GAS ทำงานไม่สำเร็จ')
      if (body.operation === 'preview' ? !result.fingerprint : !Number.isInteger(result.written)) {
        throw new Error('GAS ตอบกลับไม่ครบ กรุณาตรวจ deployment')
      }
      return reply(result)
    } catch (err) {
      const timeout = err?.name === 'TimeoutError' || err?.name === 'AbortError'
      return reply({ ok: false, stage, mayHaveWritten: stage === 'sync',
        error: timeout ? 'รอคำตอบจาก GAS นานเกินไป' : (err?.message || 'เชื่อมต่อ GAS ไม่สำเร็จ') })
    }
  }
}
