-- patch_prayer_rls.sql
-- เพิ่มสิทธิ์ให้ Admin จัดการ prayer_records ได้ทุกอย่าง
-- รัน 1 ครั้งใน Supabase SQL Editor

-- 1. Admin สามารถ SELECT, INSERT, UPDATE, DELETE ได้ทั้งหมด
CREATE POLICY "prayer_admin_all"
  ON prayer_records
  FOR ALL
  TO authenticated
  USING     (get_user_role() = 'admin')
  WITH CHECK(get_user_role() = 'admin');

-- 2. ถ้ายังไม่มี policy SELECT สำหรับครู ให้เพิ่ม (ข้ามถ้ามีแล้ว)
-- CREATE POLICY "prayer_teacher_select" ...  (ดูจาก Supabase Dashboard → Policies ก่อน)

-- 3. Allow teacher_id = NULL (สำหรับ admin บันทึกโดยไม่ระบุครู)
ALTER TABLE prayer_records ALTER COLUMN teacher_id DROP NOT NULL;
