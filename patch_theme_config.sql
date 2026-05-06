-- ============================================================
-- Patch: default theme keys for admin/teacher/student/login
-- รันใน Supabase SQL Editor ถ้าต้องการเติมค่าเริ่มต้นให้ฐานข้อมูลเดิม
-- ============================================================

INSERT INTO public.system_config (key, value) VALUES
  ('appColor', '#007bff'),
  ('loginColor', '#4f46e5'),
  ('adminColor', '#4f46e5'),
  ('teacherDefaultColor', '#059669'),
  ('teacherLanguageColor', '#2563eb'),
  ('teacherLifeColor', '#059669'),
  ('teacherAcademicColor', '#ea580c'),
  ('teacherVocColor', '#7c3aed'),
  ('teacherReligionColor', '#b45309'),
  ('studentColor', '#0891b2'),
  ('loginLogoUrl', '')
ON CONFLICT (key) DO NOTHING;
