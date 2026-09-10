-- patch_autoscale_advisory_lock.sql
-- แก้ race condition ของ autoscale-tick (ดู AUTOSCALE_HANDOFF.md หัวข้อ 6.3)
-- ตอน pg_cron + cron-job.org ยิงเข้ามาใกล้กัน (หรือ pg_cron ไล่ตามงานค้าง) เกิด
-- invocation ซ้อนกันหลายตัว อ่าน/เขียน state แบบ read-modify-write ธรรมดา
-- ทำให้ consecutiveHealthyChecks อ่านค่าเก่าค้าง เกิด downgrade ก่อนเวลาจริง
-- (เกิดขึ้นจริง 2026-09-10 14:20 น. ไทย อัปเกรดแล้วโดนดาวน์เกรดกลับใน 5 นาที)
--
-- ชื่อไฟล์นี้ยังคงเดิม (advisory_lock) เพื่อ traceability แต่ "วิธีแก้จริง" ที่ใช้
-- งานบน production ไม่ใช่ Postgres advisory lock แล้ว — ลองแล้วจริง 2026-09-10
-- พบว่า advisory lock (session-level) ใช้ไม่ได้กับ edge function ที่ผ่าน
-- connection pooler เพราะแต่ละ query จาก supabase-js อาจได้ backend connection
-- คนละตัว ทำให้ล็อกที่คว้าไว้ในคำสั่งหนึ่ง ปลดล็อกจากอีกคำสั่งไม่ได้ (lock ค้าง
-- ทั้งระบบสำเร็จ 1 ครั้งจริงระหว่างทดสอบ ต้อง pg_terminate_backend ถึงจะหลุด)
--
-- วิธีแก้จริงที่ใช้แทน: lease lock เป็นแถวธรรมดาใน system_config
-- (key='autoscaleLock', value=ISO timestamp ตอนคว้าล็อก) — ดูฟังก์ชัน
-- tryAcquireLock()/releaseLock() ใน supabase/functions/autoscale-tick/index.ts
-- ปลอดภัยกับ pooler เพราะเป็น UPDATE...WHERE ธรรมดา ไม่ยึดติด session ใดๆ
-- และ self-heal อัตโนมัติถ้า invocation ก่อนหน้าตายกลางคันไม่ทันปลดล็อก
-- (ถือว่าล็อกหมดอายุถ้าเก่ากว่า LOCK_STALE_MS = 4 นาที)

-- สร้างแถว lock เริ่มต้น (รันครั้งเดียว ไม่ต้องรันซ้ำถ้ามีแถวอยู่แล้ว)
insert into system_config (key, value, updated_at)
values ('autoscaleLock', '1970-01-01T00:00:00.000Z', now())
on conflict (key) do nothing;
