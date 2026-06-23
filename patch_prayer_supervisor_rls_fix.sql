-- patch_prayer_supervisor_rls_fix.sql
-- แก้ไข RLS SELECT policy "prayer_records_supervisor_select" ของ table prayer_records
-- เพื่อรองรับครูที่เป็นแอดมินร่วม (is_also_admin = true) และครูที่มีตำแหน่งบันทึกใน array (positions) เช่น religion_group_head
-- รันไฟล์นี้ใน Supabase SQL Editor 1 ครั้ง

-- 1. ลบ policy เดิม
DROP POLICY IF EXISTS "prayer_records_supervisor_select" ON public.prayer_records;

-- 2. สร้าง policy ใหม่ที่มีความครอบคลุมขึ้น
CREATE POLICY "prayer_records_supervisor_select"
  ON public.prayer_records
  FOR SELECT
  TO authenticated
  USING (
    -- 2.1 ผู้ดูแลระบบ (role = admin) หรือ แอดมินร่วม (is_also_admin = true)
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid()
        AND (role = 'admin' OR is_also_admin = true)
    )
    OR
    -- 2.2 ครูที่มีตำแหน่งใน position (คอลัมน์เดี่ยว) หรือ positions (คอลัมน์ array เช่น religion_group_head)
    EXISTS (
      SELECT 1 FROM public.teachers
      WHERE profile_id = auth.uid()
        AND (
          position IS NOT NULL 
          OR (positions IS NOT NULL AND cardinality(positions) > 0)
        )
    )
  );
