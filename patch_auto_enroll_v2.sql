-- patch_auto_enroll_v2.sql
-- อัปเดต RPC auto_enroll_students_by_room ให้:
-- 1. match ทั้ง main_room และ religion_room กับ class_name
-- 2. re-activate class_students เมื่อนักเรียนกลับมา is_active=true
-- 3. deactivate class_students เมื่อนักเรียน is_active=false
-- รัน 1 ครั้งใน Supabase SQL Editor

CREATE OR REPLACE FUNCTION public.auto_enroll_students_by_room()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  enrolled_count INT := 0;
  deactivated_count INT := 0;
BEGIN
  -- เพิ่ม/re-activate นักเรียน active เข้าห้องเรียน
  -- match main_room หรือ religion_room กับ class_name
  INSERT INTO class_students (class_id, student_id, is_active)
  SELECT DISTINCT c.id, s.id, true
  FROM classes c
  JOIN students s
    ON s.main_room = c.class_name
    OR s.religion_room = c.class_name
  WHERE s.is_active = true
  ON CONFLICT (class_id, student_id)
    DO UPDATE SET is_active = true;

  GET DIAGNOSTICS enrolled_count = ROW_COUNT;

  -- ซ่อนนักเรียนใน class_students ที่ students.is_active = false
  UPDATE class_students cs
  SET is_active = false
  FROM students s
  WHERE cs.student_id = s.id
    AND s.is_active = false
    AND cs.is_active = true;

  GET DIAGNOSTICS deactivated_count = ROW_COUNT;

  RETURN json_build_object(
    'ok',          true,
    'enrolled',    enrolled_count,
    'deactivated', deactivated_count
  );
END;
$$;
