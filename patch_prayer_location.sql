-- patch_prayer_location.sql
-- รันไฟล์นี้ 1 ครั้งใน Supabase SQL Editor เพื่อรองรับการเก็บพิกัดจุดละหมาดและเวลาเช็คชื่อ
ALTER TABLE prayer_records ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE prayer_records ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();
