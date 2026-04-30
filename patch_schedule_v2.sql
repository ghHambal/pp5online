-- patch_schedule_v2.sql
-- เพิ่ม subject_name, class_name, teacher_name + รองรับ span 1-4
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE teacher_schedules
  ADD COLUMN IF NOT EXISTS subject_name TEXT,
  ADD COLUMN IF NOT EXISTS class_name   TEXT,
  ADD COLUMN IF NOT EXISTS teacher_name TEXT;

-- ขยาย span_periods รองรับ 1-4 (เดิม 1-2)
ALTER TABLE teacher_schedules
  DROP CONSTRAINT IF EXISTS teacher_schedules_span_periods_check;
ALTER TABLE teacher_schedules
  ADD CONSTRAINT teacher_schedules_span_periods_check
  CHECK (span_periods BETWEEN 1 AND 4);

-- system_config: เพิ่ม geminiModel ถ้าไม่มี
INSERT INTO system_config (key, value) VALUES ('geminiModel', 'gemini-2.5-flash')
ON CONFLICT (key) DO NOTHING;
