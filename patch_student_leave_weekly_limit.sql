-- patch_student_leave_weekly_limit.sql
-- เพิ่มโควต้าจำนวนครั้งสูงสุดที่นักเรียน 1 คนขอออกนอกห้องได้ต่อสัปดาห์ (ปรับได้ต่อห้องเรียน/วิชา)
-- เดิมระบบล็อกไว้ 1 ครั้งตายตัว (ดู hasStudentLeftAlready ใน js/api.js) ปรับให้ตั้งค่าได้เหมือน max_active

ALTER TABLE public.class_leave_settings
  ADD COLUMN IF NOT EXISTS max_per_student_week INTEGER NOT NULL DEFAULT 2
  CHECK (max_per_student_week BETWEEN 1 AND 14);

INSERT INTO public.system_config (key, value)
VALUES ('leaveDefaultMaxPerStudentWeek', '2')
ON CONFLICT (key) DO NOTHING;
