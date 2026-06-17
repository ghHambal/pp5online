-- patch_prayer_location.sql
-- รันไฟล์นี้ 1 ครั้งใน Supabase SQL Editor เพื่อรองรับการเก็บพิกัดจุดละหมาดจากเครื่องสแกน

ALTER TABLE prayer_records ADD COLUMN IF NOT EXISTS location TEXT;
