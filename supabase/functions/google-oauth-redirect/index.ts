// supabase/functions/google-oauth-redirect/index.ts
// รับ POST callback จาก Google Identity Services (ux_mode:'redirect') ตอนนักเรียนกด
// "ดำเนินการต่อโดยใช้ Google" ในป๊อปอัพเชื่อมอีเมลส่วนตัว (js/student-views.js: openEmailLinkPrompt)
//
// เดิมใช้ popup mode แต่ Safari บล็อก third-party cookie ทำให้ Google จำบัญชีที่ล็อกอิน
// อยู่ในเครื่องไม่ได้ ต้องพิมพ์อีเมล/รหัสผ่านเองทุกครั้ง (ขัดจุดประสงค์ "เลือกบัญชีที่ล็อกอินอยู่
// ได้เลย") — เปลี่ยนเป็น redirect เต็มรูปแบบ (top-level navigation) แทน ซึ่งต้องมีปลายทางรับ POST
// จริง (GitHub Pages เป็น static site รับ POST เองไม่ได้) เลยใช้ Edge Function นี้เป็นตัวรับแทน
// แล้ว redirect กลับไปหน้า student.html พร้อมอีเมลที่ยืนยันแล้วผ่าน query param
//
// ⚠️ ฟังก์ชันนี้ต้อง deploy แบบปิด "Enforce JWT Verification" เพราะ Google POST มาแบบไม่มี
// Supabase JWT ใดๆ (ตั้งตอน deploy ด้วย --no-verify-jwt หรือ toggle ปิดใน Dashboard ทีหลัง)
// และต้องเพิ่ม URL ของฟังก์ชันนี้ (หลัง deploy แล้ว) เป็น "Authorized redirect URI" ของ
// OAuth Client ID ตัวเดียวกับ GOOGLE_CLIENT_ID ด้านล่าง ใน Google Cloud Console ด้วย
//
// หมายเหตุความปลอดภัย: ข้ามการเช็ค g_csrf_token cookie แบบ double-submit ตามที่ Google แนะนำ
// (เพราะ login_uri อยู่คนละโดเมนกับหน้าที่เริ่ม flow ทำให้ cookie ข้ามโดเมนไม่ได้แน่นอน) แต่ยัง
// verify ลายเซ็น JWT ของ Google เต็มรูปแบบ (เข้มกว่าฝั่ง client เดิมที่แค่ decode ไม่ verify เลย)
// ผลลัพธ์สุดท้ายคือแค่ "อีเมลไหนจะถูกเสนอให้เชื่อม" — การบันทึกจริงยังผ่าน updateStudentEmail()
// ที่ยึด session ของนักเรียนคนที่ล็อกอินอยู่ตอนนั้นเป็นหลักอยู่ดี (เขียนได้แค่แถวของตัวเอง)
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { jwtVerify, createRemoteJWKSet } from 'npm:jose@5'

const GOOGLE_CLIENT_ID = '311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com'
const APP_RETURN_URL = 'https://ghhambal.github.io/pp5online/student.html'
const JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))

function redirectWith(params: Record<string, string>) {
  const url = new URL(APP_RETURN_URL)
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v)
  return new Response(null, { status: 302, headers: { Location: url.toString() } })
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') return redirectWith({ google_email_error: 'method' })

  try {
    const form = await req.formData()
    const credential = form.get('credential')
    if (!credential || typeof credential !== 'string') {
      return redirectWith({ google_email_error: 'missing_credential' })
    }

    const { payload } = await jwtVerify(credential, JWKS, {
      issuer: ['https://accounts.google.com', 'accounts.google.com'],
      audience: GOOGLE_CLIENT_ID,
    })

    const email = typeof payload.email === 'string' ? payload.email : ''
    const emailVerified = payload.email_verified === true
    if (!email || !emailVerified) return redirectWith({ google_email_error: 'unverified' })

    return redirectWith({ google_email: email })
  } catch (err) {
    console.error('google-oauth-redirect error:', err)
    return redirectWith({ google_email_error: 'invalid_token' })
  }
})
