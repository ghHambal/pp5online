import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'

// สามารถส่ง Service Role Key ผ่าน ENV หรือ Argument ได้
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.argv[2] || SUPABASE_ANON_KEY

if (key === SUPABASE_ANON_KEY) {
  console.log('⚠️ กำลังรันด้วย ANON_KEY ซึ่งอาจส่งผลให้ติดสิทธิ์ RLS (42501)')
  console.log('แนะนำให้รันโดยใส่ Service Role Key:')
  console.log('  node scratch/create_announcement.js <your_service_role_key>')
  console.log('หรือคัดลอกคำสั่ง SQL ไปรันใน Supabase SQL Editor แทน\n')
}

const supabase = createClient(SUPABASE_URL, key)

async function create() {
  const title = '📢 ใหม่! ฟีเจอร์สแกน QR Code เช็คชื่อคาบเรียนผ่านกล้องมือถือ'
  const body = `คุณครูสามารถเช็คชื่อนักเรียนเข้าเรียนในแต่ละคาบได้รวดเร็วยิ่งขึ้นแล้ววันนี้!

✨ **วิธีใช้งาน:**
1. เปิดห้องเรียนคอร์สวิชาและเลือกหน้าต่าง **"เช็คชื่อรายคาบ"** ตามปกติ
2. กดปุ่ม **"📷 สแกน QR"** สีน้ำเงินที่อยู่บริเวณมุมขวาบนของหัวหน้าต่าง
3. หันกล้องไปสแกนรหัส QR Code ประจำตัวนักเรียนจากพอร์ทัลนักเรียน (ระบบจะตรวจสอบเวลาความปลอดภัย 60 วินาทีเพื่อป้องกันภาพแคปเจอร์หน้าจอ)
4. เมื่อสแกนผ่าน ระบบจะมาร์คสถานะนักเรียนคนนั้นเป็น **"มา"** ทันที พร้อมเสียง Beep ตอบรับและเอฟเฟกต์สีเขียว
5. พิเศษ! เมื่อปิดกล้องสแกน **นักเรียนทุกคนที่ไม่ได้สแกนในรอบนี้ จะถูกเปลี่ยนสถานะเป็น "ขาด" ให้โดยอัตโนมัติ** คุณครูไม่ต้องไล่เช็คทีละคน

🔒 **สิทธิ์การใช้งาน:**
- คุณครูผู้สนับสนุนโครงการ (Supporter Tier): ใช้งานได้ไม่จำกัดคาบ/ครั้ง
- คุณครูทั่วไป: สามารถทดลองสแกนใช้งานได้ฟรี **2 ครั้งต่อสัปดาห์** (โควต้ารีเซ็ตใหม่ทุกวันจันทร์)`

  const { data, error } = await supabase.from('announcements')
    .insert({
      title,
      body,
      is_active: true,
      priority: 2,
      ann_type: 'general',
      schedule_filter: 'all',
      updated_at: new Date().toISOString()
    })
    .select()

  if (error) {
    console.error('❌ Failed to create announcement:', error)
  } else {
    console.log('✅ Successfully created announcement:', data)
  }
}

create()

