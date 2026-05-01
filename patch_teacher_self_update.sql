-- patch_teacher_self_update.sql
-- เพิ่ม RLS policy ให้ครูสามารถ update ข้อมูลของตัวเองใน teachers table ได้
-- รัน 1 ครั้งใน Supabase SQL Editor

-- ครูสามารถแก้ไขข้อมูลของตัวเองได้ (เฉพาะแถวที่ profile_id = auth.uid())
-- ไม่สามารถแก้ไขข้อมูลของครูคนอื่นได้
CREATE POLICY "teachers_self_update" ON teachers
  FOR UPDATE TO authenticated
  USING     (profile_id = auth.uid())
  WITH CHECK (profile_id = auth.uid());
