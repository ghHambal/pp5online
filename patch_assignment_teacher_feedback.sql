-- เพิ่มช่องคอมเมนต์/feedback ของครูกลับไปหานักเรียน ในงานที่ส่งแล้ว (assignment_submissions)
-- เดิมมีแค่ note ที่นักเรียนเขียนถึงครูตอนส่ง แต่ไม่มีทางกลับให้ครูคอมเมนต์กลับเลย
--
-- วิธีรัน: คัดลอกทั้งไฟล์ไปรันใน Supabase SQL Editor ครั้งเดียว (idempotent รันซ้ำได้)

ALTER TABLE assignment_submissions
  ADD COLUMN IF NOT EXISTS teacher_feedback TEXT;

COMMENT ON COLUMN assignment_submissions.teacher_feedback IS
  'คอมเมนต์/feedback จากครูกลับไปหานักเรียนสำหรับงานชิ้นนี้ — แสดงในหน้ารายวิชาของนักเรียน';
