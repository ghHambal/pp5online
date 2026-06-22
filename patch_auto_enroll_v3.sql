-- patch_auto_enroll_v3.sql
-- อัปเดต RPC auto_enroll_students_by_room ให้:
-- 1. ใช้ ON CONFLICT DO NOTHING เพื่อไม่ให้การซิงก์ดึงนักเรียนที่ครูกด "ไม่เรียน" (is_active = false) กลับมาเป็น "กำลังเรียน"
-- 2. ไม่กระจาย students.is_active=false ไปยัง class_students ทุกห้องโดยอัตโนมัติ
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
  -- เพิ่มนักเรียนที่มีสถานะ active ในระบบเข้าห้องเรียน (เฉพาะคนที่ยังไม่เคยมีบันทึกลงเรียนวิชานั้น)
  -- match main_room หรือ religion_room กับ class_name
  INSERT INTO class_students (class_id, student_id, is_active)
  SELECT DISTINCT c.id, s.id, true
  FROM classes c
  JOIN students s
    ON s.main_room = c.class_name
    OR s.religion_room = c.class_name
  WHERE s.is_active = true
  ON CONFLICT (class_id, student_id)
    DO NOTHING; -- ไม่เขียนทับสถานะเดิมที่ครูตั้งใจปิดไว้ (is_active = false)

  GET DIAGNOSTICS enrolled_count = ROW_COUNT;

  -- ห้ามปิด class_students ตามสถานะส่วนกลางแบบอัตโนมัติ
  -- เพราะ sync ที่อ่านชีตผิดเพียงครั้งเดียวอาจกระทบทุกห้อง
  deactivated_count := 0;

  RETURN json_build_object(
    'ok',          true,
    'enrolled',    enrolled_count,
    'deactivated', deactivated_count
  );
END;
$$;
