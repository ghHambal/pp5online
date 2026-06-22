-- patch_recover_student_sync_incident.sql
-- HOTFIX สำหรับเหตุการณ์: อ่าน 2616 แถว / บันทึก 76 คน / ซ่อน 1000 คน
-- รัน 1 ครั้งใน Supabase SQL Editor หลังตรวจว่า student_sync_logs มีเหตุการณ์นี้

BEGIN;

CREATE TEMP TABLE _student_sync_incident ON COMMIT DROP AS
SELECT
  id,
  synced_at,
  new_students,
  deactivated_students
FROM public.student_sync_logs
WHERE read_count = 2616
  AND written_count = 76
  AND deactivated_count = 1000
ORDER BY synced_at DESC
LIMIT 1;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM _student_sync_incident) THEN
    RAISE EXCEPTION
      'ไม่พบ sync log เหตุการณ์ 2616/76/1000 จึงยกเลิกเพื่อป้องกันการแก้ข้อมูลผิดรอบ';
  END IF;
END;
$$;

CREATE TEMP TABLE _restore_student_codes ON COMMIT DROP AS
SELECT DISTINCT item->>'student_code' AS student_code
FROM _student_sync_incident,
LATERAL jsonb_array_elements(deactivated_students) AS item
WHERE COALESCE(item->>'student_code', '') <> '';

CREATE TEMP TABLE _bogus_student_codes ON COMMIT DROP AS
SELECT DISTINCT item->>'student_code' AS student_code
FROM _student_sync_incident,
LATERAL jsonb_array_elements(new_students) AS item
WHERE COALESCE(item->>'student_code', '') <> '';

-- เปิดกลับเฉพาะนักเรียนจริงที่ log ระบุว่าถูกซ่อนในรอบเสีย
UPDATE public.students AS s
SET is_active = true
FROM _restore_student_codes AS r
WHERE s.student_code = r.student_code;

-- กู้สถานะห้องเรียนของนักเรียนชุดเดียวกัน
UPDATE public.class_students AS cs
SET is_active = true
FROM public.students AS s
JOIN _restore_student_codes AS r
  ON r.student_code = s.student_code
WHERE cs.student_id = s.id;

-- ลบเฉพาะ 76 รายการที่ถูกสร้างใหม่จากชีตผิดในรอบเหตุการณ์
DELETE FROM public.students AS s
USING _bogus_student_codes AS b
WHERE s.student_code = b.student_code
  AND NOT EXISTS (
    SELECT 1
    FROM _restore_student_codes AS r
    WHERE r.student_code = s.student_code
  );

-- RPC แบบ conservative:
-- เพิ่มคนที่ยังไม่มี enrollment แต่ไม่เขียนทับสถานะ "ไม่เรียน" ที่ครูตั้งเอง
-- และไม่กระจาย students.is_active=false ไปปิดทุกห้อง
CREATE OR REPLACE FUNCTION public.auto_enroll_students_by_room()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  enrolled_count INT := 0;
BEGIN
  INSERT INTO public.class_students (class_id, student_id, is_active)
  SELECT DISTINCT c.id, s.id, true
  FROM public.classes AS c
  JOIN public.students AS s
    ON s.main_room = c.class_name
    OR s.religion_room = c.class_name
  WHERE s.is_active = true
  ON CONFLICT (class_id, student_id) DO NOTHING;

  GET DIAGNOSTICS enrolled_count = ROW_COUNT;

  RETURN json_build_object(
    'ok', true,
    'enrolled', enrolled_count,
    'deactivated', 0
  );
END;
$$;

REVOKE ALL ON FUNCTION public.auto_enroll_students_by_room() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.auto_enroll_students_by_room() TO authenticated;
GRANT EXECUTE ON FUNCTION public.auto_enroll_students_by_room() TO service_role;

COMMIT;

-- ผลตรวจหลังรัน: active ควรกลับมา และ inactive ไม่ควรเป็นทุกแถว
SELECT
  count(*) AS total_students,
  count(*) FILTER (WHERE is_active = true) AS active_students,
  count(*) FILTER (WHERE is_active = false) AS inactive_students
FROM public.students;

SELECT
  count(*) AS total_enrollments,
  count(*) FILTER (WHERE is_active = true) AS active_enrollments,
  count(*) FILTER (WHERE is_active = false) AS inactive_enrollments
FROM public.class_students;
