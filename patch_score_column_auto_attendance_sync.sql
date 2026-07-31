-- เพิ่มความสามารถ "ดึงคะแนนจากเช็คชื่ออัตโนมัติ" ให้คอลัมน์คะแนน custom ของครู
-- (เดิมมีเฉพาะวิชากลุ่มศาสนา ผูกตายกับคอลัมน์ชื่อ "คะแนนมาเรียน"/"คะแนนละหมาด" เท่านั้น)
--
-- วิธีรัน: คัดลอกทั้งไฟล์ไปรันใน Supabase SQL Editor ครั้งเดียว (idempotent รันซ้ำได้)

ALTER TABLE class_score_columns
  ADD COLUMN IF NOT EXISTS auto_attendance_sync BOOLEAN NOT NULL DEFAULT false;

COMMENT ON COLUMN class_score_columns.auto_attendance_sync IS
  'true = ครูเปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติแล้ว ระบบจะคำนวณ %มาเรียนใส่คอลัมน์นี้ทุกครั้งที่เปิดหน้าบันทึกคะแนน (ข้ามแถวที่ครูเคยแก้คะแนนด้วยมือไว้)';
