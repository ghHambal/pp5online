-- แก้บั๊ก: รีเซ็ตรหัสผ่านนักเรียนที่ "ยังไม่เคยเปิดบัญชี" ไม่สำเร็จ (ทั้งฝั่งครูที่ปรึกษาและแอดมิน)
--
-- root cause จริง: มีนักเรียน 4 คนที่มีบัญชี auth.users ถูกสร้างไว้แล้วตั้งแต่ 13 ก.ค. 2569
-- (อีเมล stu{รหัส}@student.pp5.local) แต่ students.profile_id ไม่ได้ถูกผูกกลับ (ค้างจาก batch
-- operation ที่ล้มเหลวตอนขั้นตอนสุดท้าย) — พอกดรีเซ็ต ระบบเห็น profile_id เป็น null เลยพยายาม
-- "สร้างบัญชีใหม่" แต่ชนกับอีเมลเดิมที่มีอยู่แล้ว (unique constraint) ทำให้ error แบบไม่ชัดเจน
--
-- แก้ไป 2 ชั้น:
-- 1) ผูกบัญชีที่ค้างของ 4 คนที่เจอจริงกลับให้แล้ว (รันแล้วบน production)
-- 2) แก้ admin_update_student_auth ให้ตรวจก่อนว่ามีบัญชี orphan (อีเมลตรงแต่ไม่มีใครผูกอยู่) ไหม
--    ถ้ามี ให้ผูกกลับ+ตั้งรหัสผ่านใหม่แทนพยายามสร้างซ้ำ กันปัญหานี้เกิดซ้ำในอนาคต
--
-- รันแล้วบน production ผ่าน MCP เมื่อ 2026-08-11 — ไฟล์นี้เก็บไว้เป็นหลักฐาน/สำหรับ environment อื่น

-- ── ขั้นที่ 1: ผูกบัญชีค้างกลับ (idempotent — รันซ้ำได้ ไม่มีอะไรให้แก้แล้วจะไม่ทำอะไร) ──
WITH orphaned AS (
  SELECT s.id as student_id, u.id as auth_id
  FROM students s
  JOIN auth.users u ON u.email = 'stu' || s.student_code || '@student.pp5.local'
  WHERE s.profile_id IS NULL
    AND NOT EXISTS (SELECT 1 FROM students s2 WHERE s2.profile_id = u.id)
)
UPDATE students s
SET profile_id = o.auth_id
FROM orphaned o
WHERE s.id = o.student_id;

-- ── ขั้นที่ 2: แก้ฟังก์ชันให้ป้องกันปัญหานี้ในอนาคต ──
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

    INSERT INTO auth.users (
      instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at, is_sso_user, is_anonymous
    ) VALUES (
      v_instance_id, v_profile_id, 'authenticated', 'authenticated',
      v_email, extensions.crypt(TRIM(p_new_password), extensions.gen_salt('bf', 10)), now(),
      '{"provider":"email","providers":["email"]}'::jsonb, jsonb_build_object('role', 'student'),
      now(), now(), false, false
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
