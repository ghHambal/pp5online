-- แก้ต้นตอบั๊ก: admin_update_student_auth() ตอนสร้างบัญชี auth.users ใหม่ให้นักเรียนที่ยังไม่เคยเปิดใช้งาน
-- (จากปุ่ม "ตั้งรหัสผ่านเริ่มต้น/รีเซ็ตรหัสผ่าน" ของครูที่ปรึกษา/แอดมิน) ไม่เคยใส่ค่าคอลัมน์ token 8 ตัว
-- (confirmation_token, recovery_token, email_change_token_new, email_change,
--  email_change_token_current, phone_change, phone_change_token, reauthentication_token)
-- ตอน INSERT INTO auth.users เลย ซึ่งคอลัมน์เหล่านี้ไม่มี DEFAULT '' ที่ระดับตาราง (default เป็น NULL)
-- ทำให้ตกเป็น NULL แทนที่จะเป็นสตริงว่างตามที่ GoTrue คาด — เป็นผลให้ทั้งนักเรียนล็อกอินไม่ได้
-- (GoTrue error ตอนสแกนแถวนี้เพื่อตรวจรหัสผ่าน) และแอดมินลบบัญชีจากหน้า Supabase Studio ไม่ได้
-- ("Database error loading user") — เจอจริง 38 บัญชีที่สร้างผ่านฟังก์ชันนี้ตั้งแต่มีมา
-- แก้ไปแล้ว: เติมค่าว่างให้ 38 บัญชีเดิมทั้งหมดตรงๆ ผ่าน UPDATE (ไม่กระทบข้อมูลอื่น)
-- ไฟล์นี้แก้ตัวฟังก์ชันเอง กันไม่ให้เกิดซ้ำกับนักเรียนคนถัดไป
CREATE OR REPLACE FUNCTION public.admin_update_student_auth(p_student_id integer, p_new_email text DEFAULT NULL::text, p_new_password text DEFAULT NULL::text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_profile_id UUID;
  v_student_code TEXT;
  v_email TEXT;
  v_instance_id UUID;
  v_caller_teacher_id INT;
  v_is_advisor BOOLEAN;
  v_orphan_auth_id UUID;
BEGIN
  IF get_user_role() <> 'admin' THEN
    SELECT id INTO v_caller_teacher_id FROM teachers WHERE profile_id = auth.uid();
    SELECT EXISTS (
      SELECT 1 FROM homeroom_teachers h
      JOIN students s ON s.id = p_student_id
      WHERE h.teacher_id = v_caller_teacher_id
        AND (
          (h.category = 'ศาสนา' AND s.religion_room = h.main_room)
          OR (COALESCE(h.category,'สามัญ') <> 'ศาสนา' AND s.main_room = h.main_room)
        )
    ) INTO v_is_advisor;
    IF NOT v_is_advisor THEN
      RAISE EXCEPTION 'permission denied';
    END IF;
  END IF;

  SELECT profile_id, student_code INTO v_profile_id, v_student_code
  FROM students
  WHERE id = p_student_id;

  IF v_student_code IS NULL THEN
    RAISE EXCEPTION 'ไม่พบนักเรียนคนนี้';
  END IF;

  IF v_profile_id IS NULL THEN
    IF p_new_password IS NULL OR TRIM(p_new_password) = '' THEN
      RAISE EXCEPTION 'กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดใช้งานบัญชี';
    END IF;

    v_email := COALESCE(NULLIF(TRIM(p_new_email), ''), 'stu' || v_student_code || '@student.pp5.local');

    -- กันกรณีข้อมูลเสียค้างจากอดีต: มีบัญชี auth.users ของอีเมลนี้อยู่แล้วแต่ยังไม่ได้ผูกกับนักเรียนคนไหน
    -- (เช่น เคยสร้างไว้ครั้งก่อนแต่ขั้นตอนผูก profile_id ล้มเหลว) — ผูกของเดิมกลับแทนสร้างซ้ำ กัน error ซ้ำเดิม
    SELECT id INTO v_orphan_auth_id FROM auth.users WHERE email = v_email;
    IF v_orphan_auth_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM students WHERE profile_id = v_orphan_auth_id) THEN
      UPDATE auth.users
      SET encrypted_password = extensions.crypt(TRIM(p_new_password), extensions.gen_salt('bf', 10))
      WHERE id = v_orphan_auth_id;
      UPDATE public.profiles SET role = 'student' WHERE id = v_orphan_auth_id;
      UPDATE public.students SET profile_id = v_orphan_auth_id WHERE id = p_student_id;
      RETURN TRUE;
    END IF;

    v_profile_id := gen_random_uuid();
    v_instance_id := COALESCE((SELECT instance_id FROM auth.users LIMIT 1), '00000000-0000-0000-0000-000000000000'::uuid);

    -- เพิ่มคอลัมน์ token 8 ตัวเข้า INSERT พร้อมค่า '' ตรงๆ (ห้ามปล่อยให้ fallback ไปใช้ DEFAULT
    -- ของตาราง เพราะ auth.users ไม่ได้ตั้ง DEFAULT '' ให้ทุกคอลัมน์ — บางตัว default เป็น NULL จริง)
    INSERT INTO auth.users (
      instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at, is_sso_user, is_anonymous,
      confirmation_token, recovery_token, email_change_token_new, email_change,
      email_change_token_current, phone_change, phone_change_token, reauthentication_token
    ) VALUES (
      v_instance_id, v_profile_id, 'authenticated', 'authenticated',
      v_email, extensions.crypt(TRIM(p_new_password), extensions.gen_salt('bf', 10)), now(),
      '{"provider":"email","providers":["email"]}'::jsonb, jsonb_build_object('role', 'student'),
      now(), now(), false, false,
      '', '', '', '', '', '', '', ''
    );

    INSERT INTO auth.identities (id, provider_id, user_id, identity_data, provider, created_at, updated_at)
    VALUES (
      gen_random_uuid(), v_profile_id::text, v_profile_id,
      jsonb_build_object('sub', v_profile_id::text, 'email', v_email),
      'email', now(), now()
    );

    UPDATE public.profiles SET role = 'student' WHERE id = v_profile_id;
    UPDATE public.students SET profile_id = v_profile_id WHERE id = p_student_id;

    RETURN TRUE;
  END IF;

  IF p_new_email IS NOT NULL AND TRIM(p_new_email) <> '' THEN
    UPDATE auth.users
    SET email = TRIM(p_new_email),
        email_confirmed_at = COALESCE(email_confirmed_at, now())
    WHERE id = v_profile_id;
  END IF;

  IF p_new_password IS NOT NULL AND TRIM(p_new_password) <> '' THEN
    UPDATE auth.users
    SET encrypted_password = extensions.crypt(TRIM(p_new_password), extensions.gen_salt('bf', 10))
    WHERE id = v_profile_id;
  END IF;

  RETURN TRUE;
END;
$function$;
