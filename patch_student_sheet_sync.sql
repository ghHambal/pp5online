-- patch_student_sheet_sync.sql
-- ตั้งค่าซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet ผ่าน Central GAS
-- รัน 1 ครั้งใน Supabase SQL Editor

INSERT INTO public.system_config (key, value) VALUES
  ('studentSyncSheetId', ''),
  ('studentSyncTabName', ''),
  ('studentSyncHeaderRow', '1')
ON CONFLICT (key) DO NOTHING;
