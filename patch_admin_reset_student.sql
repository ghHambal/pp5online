-- patch_admin_reset_student.sql
-- ฟังก์ชันยกระดับสิทธิ์ (SECURITY DEFINER) สำหรับจัดการและยืนยันการตั้งค่าอีเมล/รหัสผ่านผู้ใช้งานนักเรียน
-- รัน 1 ครั้งใน Supabase SQL Editor

-- 1. ฟังก์ชันสำหรับแอดมิน อัปเดตข้อมูลอีเมลและรหัสผ่านของนักเรียนผ่านแดชบอร์ด
CREATE OR REPLACE FUNCTION public.admin_update_student_auth(
  p_student_id INT,
  p_new_email TEXT DEFAULT NULL,
  p_new_password TEXT DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_profile_id UUID;
BEGIN
  -- ตรวจสอบสิทธิ์ว่าผู้เรียกเป็นแอดมิน
  IF get_user_role() <> 'admin' THEN
    RAISE EXCEPTION 'permission denied';
  END IF;

  -- ดึง profile_id ของนักเรียนคนนี้
  SELECT profile_id INTO v_profile_id
  FROM students
  WHERE id = p_student_id;

  IF v_profile_id IS NULL THEN
    RAISE EXCEPTION 'นักเรียนคนนี้ยังไม่ได้ทำการสร้างบัญชีเข้าใช้งาน';
  END IF;

  -- อัปเดตอีเมลใน auth.users (ถ้ามีการระบุมา)
  IF p_new_email IS NOT NULL AND TRIM(p_new_email) <> '' THEN
    UPDATE auth.users
    SET email = TRIM(p_new_email),
        normalized_email = LOWER(TRIM(p_new_email)),
        email_confirmed_at = COALESCE(email_confirmed_at, now())
    WHERE id = v_profile_id;
  END IF;

  -- อัปเดตรหัสผ่านใน auth.users ด้วยการเข้ารหัส bcrypt (ถ้ามีการระบุมา)
  IF p_new_password IS NOT NULL AND TRIM(p_new_password) <> '' THEN
    UPDATE auth.users
    SET encrypted_password = crypt(TRIM(p_new_password), gen_salt('bf', 10))
    WHERE id = v_profile_id;
  END IF;

  RETURN TRUE;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_update_student_auth(INT, TEXT, TEXT) TO authenticated;


-- 2. ฟังก์ชันสำหรับนักเรียน ยืนยันตัวตนเพื่อขอผูกอีเมลจริงสำหรับรับลิงก์รีเซ็ตรหัสผ่าน
CREATE OR REPLACE FUNCTION public.student_request_password_reset(
  p_student_code TEXT,
  p_full_name TEXT,
  p_main_room TEXT,
  p_new_email TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_student_id INT;
  v_profile_id UUID;
BEGIN
  -- ตรวจสอบข้อมูลนักเรียนว่า รหัส ชื่อ-นามสกุล และห้องเรียน ตรงกันทุกประการ
  SELECT id, profile_id INTO v_student_id, v_profile_id
  FROM students
  WHERE student_code = TRIM(p_student_code)
    AND TRIM(LOWER(full_name)) = TRIM(LOWER(p_full_name))
    AND TRIM(LOWER(main_room)) = TRIM(LOWER(p_main_room))
  LIMIT 1;

  IF v_student_id IS NULL THEN
    RAISE EXCEPTION 'ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบรหัส ชื่อ-นามสกุล หรือห้องเรียนประจำ';
  END IF;

  IF v_profile_id IS NULL THEN
    RAISE EXCEPTION 'นักเรียนรหัสนี้ยังไม่ได้ทำการสร้างบัญชีเข้าใช้งาน (เปิดสิทธิ์ใช้งานครั้งแรกก่อน)';
  END IF;

  -- อัปเดตอีเมลจำลองของนักเรียนคนนี้ให้เป็นอีเมลจริง เพื่อให้ระบบจัดส่งอีเมลรีเซ็ตออกไปได้
  UPDATE auth.users
  SET email = TRIM(p_new_email),
      normalized_email = LOWER(TRIM(p_new_email)),
      email_confirmed_at = COALESCE(email_confirmed_at, now()),
      email_change_confirm_status = 0
  WHERE id = v_profile_id;

  RETURN TRUE;
END;
$$;

-- อนุญาตให้บุคคลทั่วไป (ก่อนล็อกอิน) สามารถเรียกใช้งานฟังก์ชันยืนยันตัวตนนี้ได้
GRANT EXECUTE ON FUNCTION public.student_request_password_reset(TEXT, TEXT, TEXT, TEXT) TO anon, authenticated;
