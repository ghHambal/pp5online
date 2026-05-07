-- patch_admin_profile.sql
-- SECURITY DEFINER function ให้แอดมิน upsert ข้อมูลส่วนตัวใน teachers table
-- รัน 1 ครั้งใน Supabase SQL Editor

CREATE OR REPLACE FUNCTION public.upsert_admin_teacher_profile(
  p_profile_id UUID,
  p_full_name  TEXT DEFAULT NULL,
  p_username   TEXT DEFAULT NULL,
  p_login_email TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INT;
  v_result     JSONB;
BEGIN
  -- ตรวจว่า caller เป็น admin
  IF get_user_role() <> 'admin' THEN
    RAISE EXCEPTION 'permission denied';
  END IF;

  -- ตรวจว่ามี teacher record อยู่แล้วหรือไม่
  SELECT id INTO v_teacher_id
  FROM teachers WHERE profile_id = p_profile_id LIMIT 1;

  IF v_teacher_id IS NULL THEN
    -- สร้างใหม่
    INSERT INTO teachers (profile_id, full_name, username, login_email, staff_type)
    VALUES (p_profile_id,
            COALESCE(p_full_name, 'ผู้ดูแลระบบ'),
            p_username,
            p_login_email,
            'แอดมิน')
    RETURNING id INTO v_teacher_id;
  ELSE
    -- อัปเดตเฉพาะ field ที่ส่งมา
    UPDATE teachers SET
      full_name   = COALESCE(p_full_name,   full_name),
      username    = COALESCE(p_username,    username),
      login_email = COALESCE(p_login_email, login_email)
    WHERE id = v_teacher_id;
  END IF;

  v_result := jsonb_build_object(
    'id',       v_teacher_id,
    'username', p_username,
    'full_name', p_full_name
  );
  RETURN v_result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.upsert_admin_teacher_profile(UUID, TEXT, TEXT, TEXT)
  TO authenticated;
