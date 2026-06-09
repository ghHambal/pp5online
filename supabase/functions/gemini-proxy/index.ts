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
  const cfg: Record<string, string> = Object.fromEntries((rows ?? []).map((r: { key: string; value: string }) => [r.key, r.value]))

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

  // ── Route by keyType ────────────────────────────────────────────────────────
  if (body.keyType === 'donation') {
    const model = (cfg.donationGeminiModel ?? '').trim() || 'gemini-2.5-flash'
    const keys = [1, 2, 3, 4].map(i => (cfg[`donationGeminiKey${i}`] ?? '').trim()).filter(Boolean)
    if (!keys.length) return jsonErr('ยังไม่ได้ตั้งค่า Donation Gemini API Key ในหน้าแอดมิน')

    let lastMsg = ''
    for (const k of keys) {
      const res = await callGemini(k, model, body.prompt, undefined, undefined, body.maxTokens)
      if (res.ok) return json200(await res.json())
      const d = await res.json().catch(() => ({}))
      const msg: string = (d as { error?: { message?: string } })?.error?.message ?? `HTTP ${res.status}`
      if (res.status === 429 || res.status === 503 || msg.toLowerCase().includes('quota')) { lastMsg = msg; continue }
      return jsonErr(msg)
    }
    return jsonErr(`ทุก Key หมด quota: ${lastMsg}`)
  }

  // schedule (default)
  const dept = body.dept ?? ''
  const apiKey = (dept && cfg[`geminiKey_${dept}`]) || cfg['geminiApiKey'] || ''
  if (!apiKey) return jsonErr('ยังไม่ได้ตั้งค่า Gemini API Key ในหน้าแอดมิน')
  const model = (cfg.geminiModel ?? '').trim() || 'gemini-2.5-flash'
  const res = await callGemini(apiKey, model, body.prompt, body.imageBase64, body.imageMimeType, body.maxTokens)
  return json200(await res.json())
})
