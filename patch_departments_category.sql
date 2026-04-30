-- เพิ่ม category column ใน departments (สามัญ / ศาสนา)
ALTER TABLE departments ADD COLUMN IF NOT EXISTS category TEXT CHECK (category IN ('สามัญ', 'ศาสนา'));

-- เพิ่ม phone column ใน master_subjects (เก็บเบอร์ติดต่อครูประจำวิชา)
ALTER TABLE master_subjects ADD COLUMN IF NOT EXISTS phone TEXT;

-- Policy สำหรับ departments: admin และ teacher ที่ login แล้วอ่านได้
-- (ถ้ายังไม่มี)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'departments' AND policyname = 'dept_read'
  ) THEN
    CREATE POLICY "dept_read" ON departments FOR SELECT TO authenticated USING (true);
  END IF;
END $$;
