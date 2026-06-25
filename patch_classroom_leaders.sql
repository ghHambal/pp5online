-- ─── PATCH: CLASSROOM LEADERS & CERTIFICATE LINKS ───────────────────
-- เพิ่มคอลัมน์เก็บข้อมูลรองหัวหน้าห้องเรียนและเกียรติบัตร (หัวหน้า/รองหัวหน้า)

-- 1. เพิ่มคอลัมน์ vice_head_student_id ในตาราง classes
ALTER TABLE classes 
  ADD COLUMN IF NOT EXISTS vice_head_student_id INT;

-- 2. ผูก Foreign Key จาก vice_head_student_id ไปยังตาราง students
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'fk_vice_head_student'
  ) THEN
    ALTER TABLE classes
      ADD CONSTRAINT fk_vice_head_student
      FOREIGN KEY (vice_head_student_id) REFERENCES students(id) ON DELETE SET NULL;
  END IF;
END
$$;

-- 3. เพิ่มคอลัมน์เก็บลิงก์เกียรติบัตรสำหรับหัวหน้าและรองหัวหน้าห้อง
ALTER TABLE classes 
  ADD COLUMN IF NOT EXISTS head_cert_url TEXT,
  ADD COLUMN IF NOT EXISTS vice_head_cert_url TEXT;

-- 4. แจ้งการอัปเดตระบบเสร็จสิ้น
COMMENT ON COLUMN classes.vice_head_student_id IS 'รหัสนักเรียนที่เป็นรองหัวหน้าห้องประจำชั้น';
COMMENT ON COLUMN classes.head_cert_url IS 'ลิงก์รูปภาพหรือ PDF เกียรติบัตรของหัวหน้าห้อง';
COMMENT ON COLUMN classes.vice_head_cert_url IS 'ลิงก์รูปภาพหรือ PDF เกียรติบัตรของรองหัวหน้าห้อง';
