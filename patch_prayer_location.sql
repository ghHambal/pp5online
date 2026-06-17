-- patch_prayer_location.sql
-- รันไฟล์นี้ 1 ครั้งใน Supabase SQL Editor เพื่อรองรับการเก็บพิกัดจุดละหมาดและเวลาเช็คชื่อ
ALTER TABLE prayer_records ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE prayer_records ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

-- เปิดใช้งาน Realtime (Replication) สำหรับตาราง prayer_records แบบปลอดภัย (ถ้ามีอยู่แล้วจะไม่รันซ้ำเพื่อเลี่ยง error)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_publication_rel pr
    JOIN pg_publication p ON p.oid = pr.prpubid
    JOIN pg_class c ON c.oid = pr.prrelid
    WHERE p.pubname = 'supabase_realtime' AND c.relname = 'prayer_records'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE prayer_records';
  END IF;
END $$;
