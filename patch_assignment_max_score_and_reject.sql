-- เพิ่ม 2 ความสามารถให้ระบบงานที่มอบหมาย (Smart Classroom):
-- 1) คะแนนเต็มต่องาน (แยกจากคะแนนเต็มของคอลัมน์คะแนนที่ผูกไว้ ซึ่งอาจสะสมจากหลายงาน)
-- 2) ครูตีกลับงานให้แก้ไข พร้อมเหตุผล แล้วนักเรียนส่งใหม่ได้
--
-- รันแล้วบน production ผ่าน MCP เมื่อ 2026-08-06 — ไฟล์นี้เก็บไว้เป็นหลักฐาน/สำหรับ environment อื่น

ALTER TABLE class_assignments
  ADD COLUMN IF NOT EXISTS max_score NUMERIC;

COMMENT ON COLUMN class_assignments.max_score IS
  'คะแนนเต็มของงานชิ้นนี้โดยเฉพาะ — ถ้าไม่ระบุ (null) จะใช้ max_score ของคอลัมน์คะแนนที่ผูกไว้แทน (พฤติกรรมเดิม)';

ALTER TABLE assignment_submissions
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'submitted'
    CHECK (status IN ('submitted', 'rejected'));

COMMENT ON COLUMN assignment_submissions.status IS
  'submitted = ปกติ, rejected = ครูตีกลับให้แก้ไข (เหตุผลเก็บใน teacher_feedback) รอนักเรียนส่งใหม่';
