-- patch_prayer_location.sql
-- รันไฟล์นี้ 1 ครั้งใน Supabase SQL Editor เพื่อรองรับการเก็บพิกัดจุดละหมาดและเวลาเช็คชื่อ
ALTER TABLE prayer_records ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE prayer_records ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

-- เปิดใช้งาน Realtime (Replication) สำหรับตาราง prayer_records เพื่อการรับส่งข้อมูลแบบทันที
BEGIN;
  ALTER PUBLICATION supabase_realtime DROP TABLE IF EXISTS prayer_records;
  ALTER PUBLICATION supabase_realtime ADD TABLE prayer_records;
COMMIT;
