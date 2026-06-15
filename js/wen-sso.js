// SSO เชื่อมไปยังระบบ "เวร" (อาซิซสถาน) — เก็บรหัสผ่านของครู (plaintext) ไว้ใน
// sessionStorage ตอนล็อกอินสำเร็จ เพื่อส่งต่อให้ wen ลองล็อกอินอัตโนมัติ
const WEN_URL     = 'https://ghhambal.github.io/wen/'
const SSO_PWD_KEY = 'pp5_wen_sso_pwd'

export function storeSsoPassword(password) {
  try { sessionStorage.setItem(SSO_PWD_KEY, password) } catch {}
}

export function clearSsoPassword() {
  try { sessionStorage.removeItem(SSO_PWD_KEY) } catch {}
}

export function getSsoPassword() {
  try { return sessionStorage.getItem(SSO_PWD_KEY) } catch { return null }
}

// สร้าง URL เปิดระบบเวร พร้อมรหัสครู + รหัสผ่าน (ถ้ามี) ผ่าน hash
// เพื่อให้ wen ลองล็อกอินอัตโนมัติ — wen ฝั่งรับค่ายังอยู่ระหว่างพัฒนา (Phase 4)
export function buildWenSsoUrl(teacherCode) {
  const params = new URLSearchParams({ id: String(teacherCode ?? '') })
  const pwd = getSsoPassword()
  if (pwd) params.set('pwd', pwd)
  return `${WEN_URL}#sso?${params.toString()}`
}
