-- patch_exam_requests.sql
-- เพิ่ม field ติดตามผลการสอบหลังอนุมัติ
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE exam_requests
  ADD COLUMN IF NOT EXISTS exam_attended BOOLEAN DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS exam_score    NUMERIC(5,2) DEFAULT NULL;

-- RLS: ครูเจ้าของห้องอัปเดต exam_requests ได้
DROP POLICY IF EXISTS "exam_requests_teacher_own" ON exam_requests;

CREATE POLICY "exam_requests_teacher_own" ON exam_requests
  FOR ALL TO authenticated
  USING (
    class_id IN (
      SELECT c.id FROM classes c
      JOIN master_subjects ms ON ms.id = c.course_id
      WHERE ms.teacher_id IN (
        SELECT id FROM teachers WHERE profile_id = auth.uid()
      )
    )
    OR get_user_role() = 'admin'
  );

-- ตรวจสอบ
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'exam_requests'
ORDER BY ordinal_position;
