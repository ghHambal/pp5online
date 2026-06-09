import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
const json200 = (body: unknown) =>
  new Response(JSON.stringify(body), { headers: { ...CORS, 'Content-Type': 'application/json' } })
const jsonErr = (msg: string, status = 200) =>
  new Response(JSON.stringify({ error: { message: msg } }), { status, headers: { ...CORS, 'Content-Type': 'application/json' } })

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS })

  // ── Auth ────────────────────────────────────────────────────────────────────
  const authHeader = req.headers.get('Authorization')
  if (!authHeader) return jsonErr('Unauthorized', 401)

  const userSb = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } },
  )
  const { data: { user }, error: authErr } = await userSb.auth.getUser()
  if (authErr || !user) return jsonErr('Unauthorized', 401)

  // ── Parse body ──────────────────────────────────────────────────────────────
  let body: {
    keyType: 'schedule' | 'donation'
    dept?: string
    prompt: string
    imageBase64?: string
    imageMimeType?: string
    maxTokens?: number
  }
  try { body = await req.json() } catch { return jsonErr('Invalid JSON', 400) }

  // ── Load system_config ──────────────────────────────────────────────────────
  const sb = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )
  const { data: rows } = await sb.from('system_config').select('key, value')
  const cfg: Record<string, string> = Object.fromEntries(
    (rows ?? []).map((r: { key: string; value: string }) => [r.key, r.value])
  )

  // ── Helper: call Gemini ─────────────────────────────────────────────────────
  const callGemini = (apiKey: string, model: string, prompt: string, imageBase64?: string, imageMimeType?: string, maxTokens?: number) => {
    const parts: unknown[] = [{ text: prompt }]
    if (imageBase64 && imageMimeType) parts.push({ inline_data: { mime_type: imageMimeType, data: imageBase64 } })
    const reqBody: Record<string, unknown> = { contents: [{ parts }] }
    if (maxTokens) reqBody.generationConfig = { maxOutputTokens: maxTokens }
    return fetch(
      `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(reqBody) },
    )
  }

  // ── Key rotation helper ─────────────────────────────────────────────────────
  const tryKeys = async (keys: string[], model: string, prompt: string, imageBase64?: string, imageMimeType?: string, maxTokens?: number) => {
    let lastMsg = ''
    for (const k of keys) {
      const res = await callGemini(k, model, prompt, imageBase64, imageMimeType, maxTokens)
      if (res.ok) return json200(await res.json())
      const d = await res.json().catch(() => ({}))
      const msg: string = (d as { error?: { message?: string } })?.error?.message ?? `HTTP ${res.status}`
      const skip = res.status === 429 || res.status === 503
        || msg.toLowerCase().includes('quota')
        || msg.toLowerCase().includes('suspended')
        || msg.toLowerCase().includes('permission denied')
      if (skip) { lastMsg = msg; continue }
      return jsonErr(msg)
    }
    return jsonErr(`ทุก Key ใช้งานไม่ได้: ${lastMsg}`)
  }

  // ── Route by keyType ────────────────────────────────────────────────────────
  if (body.keyType === 'donation') {
    const model = (cfg.donationGeminiModel ?? '').trim() || 'gemini-2.5-flash'
    const keys = [1, 2, 3, 4].map(i => (cfg[`donationGeminiKey${i}`] ?? '').trim()).filter(Boolean)
    if (!keys.length) return jsonErr('ยังไม่ได้ตั้งค่า Donation Gemini API Key ในหน้าแอดมิน')
    return tryKeys(keys, model, body.prompt, undefined, undefined, body.maxTokens)
  }

  // ── schedule (default) ──────────────────────────────────────────────────────
  const model = (cfg.geminiModel ?? '').trim() || 'gemini-2.5-flash'
  const dept = body.dept ?? ''

  // ลอง dept key ก่อน (ไม่ rotation — dept key มีแค่อันเดียวต่อกลุ่มสาระ)
  const deptKey = (dept && cfg[`geminiKey_${dept}`]) ? cfg[`geminiKey_${dept}`].trim() : ''
  if (deptKey) {
    const res = await callGemini(deptKey, model, body.prompt, body.imageBase64, body.imageMimeType, body.maxTokens)
    if (res.ok) return json200(await res.json())
    const d = await res.json().catch(() => ({}))
    const msg: string = (d as { error?: { message?: string } })?.error?.message ?? `HTTP ${res.status}`
    const skip = res.status === 429 || res.status === 503
      || msg.toLowerCase().includes('quota')
      || msg.toLowerCase().includes('suspended')
      || msg.toLowerCase().includes('permission denied')
    // ถ้า dept key ถูกระงับ → ตกไปใช้ fallback rotation
    if (!skip) return jsonErr(msg)
  }

  // fallback rotation: geminiApiKey, geminiApiKey2 … geminiApiKey5
  const fallbackKeys = ['geminiApiKey', 'geminiApiKey2', 'geminiApiKey3', 'geminiApiKey4', 'geminiApiKey5']
    .map(k => (cfg[k] ?? '').trim())
    .filter(Boolean)
  if (!fallbackKeys.length) return jsonErr('ยังไม่ได้ตั้งค่า Gemini API Key ในหน้าแอดมิน')
  return tryKeys(fallbackKeys, model, body.prompt, body.imageBase64, body.imageMimeType, body.maxTokens)
})
