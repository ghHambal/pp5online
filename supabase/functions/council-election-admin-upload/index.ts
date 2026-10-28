import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"

const url = Deno.env.get("SUPABASE_URL")!
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const admin = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
})

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
}

function respond(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders })
}

async function requestKey(request: Request) {
  const ip = request.headers.get("cf-connecting-ip")
    || request.headers.get("x-real-ip")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "unknown"
  const userAgent = request.headers.get("user-agent") || "unknown"
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${ip}|${userAgent}`))
  return Array.from(new Uint8Array(bytes), (value) => value.toString(16).padStart(2, "0")).join("")
}

async function authorize(request: Request, passcode: string): Promise<{ ok: true } | { ok: false; error: string; status: number }> {
  const clientKey = await requestKey(request)
  const { data: allowedToTry, error: rateError } = await admin.rpc("council_election_settings_rate_gate", {
    p_client_key: clientKey,
    p_success: false,
  })
  if (rateError || allowedToTry !== true) return { ok: false, error: "ลองรหัสหลายครั้งเกินไป กรุณารอสักครู่", status: 429 }

  const { data: valid, error } = await admin.rpc("verify_council_election_settings_passcode", { p_code: passcode })
  if (error || valid !== true) return { ok: false, error: "รหัสไม่ถูกต้อง", status: 401 }

  await admin.rpc("council_election_settings_rate_gate", { p_client_key: clientKey, p_success: true })
  return { ok: true }
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders })
  if (request.method !== "POST") return respond({ error: "Method not allowed" }, 405)

  try {
    let action: string
    let passcode: string
    let body: Record<string, unknown> = {}
    let form: FormData | null = null
    if (request.headers.get("content-type")?.includes("multipart/form-data")) {
      form = await request.formData()
      action = String(form.get("action") || "upload")
      passcode = String(form.get("passcode") || "")
    } else {
      body = await request.json()
      action = String(body.action || "verify")
      passcode = String(body.passcode || "")
    }
    if (!passcode) return respond({ error: "กรอกรหัสผู้ดูแล" }, 400)

    const authorization = await authorize(request, passcode)
    if (!authorization.ok) return respond({ error: authorization.error }, authorization.status)
    if (action === "verify") return respond({ ok: true })

    if (action === "reset") {
      const { data, error } = await admin.rpc("reset_current_council_election_votes_with_passcode", {
        p_admin_code: passcode,
      })
      if (error) return respond({ error: error.message }, 400)
      if (!data?.ok) return respond({ error: "รีเซ็ตคะแนนไม่สำเร็จ" }, 400)
      return respond(data)
    }

    if (action === "save") {
      const settings = body.settings
      if (!settings || typeof settings !== "object" || Array.isArray(settings)) return respond({ error: "ข้อมูลการตั้งค่าไม่ถูกต้อง" }, 400)
      const { data, error } = await admin.rpc("save_council_election_page_settings", {
        p_settings: { ...(settings as Record<string, unknown>), admin_code: passcode },
      })
      if (error) return respond({ error: error.message }, 400)
      return respond({ ok: true, settings: data })
    }

    if (action === "upload") {
      const submittedTermId = String(form?.get("term_id") || "")
      const file = form?.get("file")
      if (!(file instanceof File) || file.type !== "image/png" || file.size < 1 || file.size > 3 * 1024 * 1024) {
        return respond({ error: "เลือกไฟล์ PNG ที่มีขนาดไม่เกิน 3 MB" }, 400)
      }
      const { data: settings, error: settingsError } = await admin.rpc("get_public_council_election_page_settings")
      if (settingsError || !settings?.term_id || String(settings.term_id) !== submittedTermId) {
        return respond({ error: "ไม่พบเทอมการเลือกตั้งปัจจุบัน" }, 400)
      }
      const path = `${settings.term_id}/header-${crypto.randomUUID()}.png`
      const { error: uploadError } = await admin.storage
        .from("council-election-assets")
        .upload(path, file, { contentType: "image/png", cacheControl: "3600", upsert: false })
      if (uploadError) return respond({ error: uploadError.message }, 400)
      return respond({ path })
    }

    return respond({ error: "Unknown action" }, 400)
  } catch (error) {
    return respond({ error: error instanceof Error ? error.message : "อัปโหลดภาพไม่สำเร็จ" }, 500)
  }
})
