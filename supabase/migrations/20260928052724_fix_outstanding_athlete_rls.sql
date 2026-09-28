-- ให้สิทธิ์ผู้ดูแลกีฬาที่ผ่าน can_manage_azizgames() บันทึกนักกีฬาดีเด่นได้
-- ให้ policy ใช้ตัวตรวจสิทธิ์เดียวกับหน้า AZIZGAMES ซึ่งรองรับทั้ง admin profile
-- และผู้ที่ได้รับสิทธิ์ผ่าน role_permissions / menu_sports_admin
BEGIN;

DROP POLICY IF EXISTS azizgames_outstanding_admin_all ON public.outstanding_athletes;

CREATE POLICY azizgames_outstanding_admin_all
  ON public.outstanding_athletes
  FOR ALL
  TO authenticated
  USING (private.azizgames_is_admin())
  WITH CHECK (private.azizgames_is_admin());

COMMIT;
