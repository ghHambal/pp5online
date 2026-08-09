-- เพิ่มสถานะ "ตรวจแล้ว" แยกจาก "ให้คะแนนแล้ว" ในงานที่มอบหมาย (assignment_submissions)
-- ใช้แสดง 3 สถานะในหน้าตรวจงาน: ยังไม่ตรวจ / ตรวจแล้วยังไม่ให้คะแนน / ตรวจแล้วให้คะแนนแล้ว
-- (สถานะ "ให้คะแนนแล้ว" เช็คจากตาราง assignment_score_contributions ที่มีอยู่แล้ว ไม่ต้องเพิ่มคอลัมน์)
--
-- รันแล้วบน production ผ่าน MCP เมื่อ 2026-08-06 — ไฟล์นี้เก็บไว้เป็นหลักฐาน/สำหรับ environment อื่น

ALTER TABLE assignment_submissions
  ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMPTZ;

COMMENT ON COLUMN assignment_submissions.reviewed_at IS
  'เวลาที่ครูเปิดดู/ตรวจงานชิ้นนี้ครั้งแรก — ใช้แยกสถานะ "ยังไม่ตรวจ" กับ "ตรวจแล้ว" (คนละเรื่องกับการให้คะแนน)';
