-- ฟีเจอร์: นักเรียนแจ้งขอรีเซ็ทรหัสผ่านผ่านระบบ Feedback + แบนเนอร์แจ้งเตือนหน้า login
--
-- บริบท: เดิมนักเรียนที่ลืมรหัสผ่านและไม่มีอีเมลส่วนตัวผูกไว้ (self-service email recovery
-- ใช้ไม่ได้) ต้องติดต่อครู/แอดมินเองนอกระบบ ตอนนี้เพิ่มช่องทางในแอป:
-- หน้าโปรไฟล์นักเรียน -> ปุ่ม "รีเซ็ทรหัสผ่าน" -> ยืนยันในป๊อบอัพ -> ส่งเข้า Feedback
-- (หมวด password_reset พร้อมรหัสนักเรียน+ห้องสามัญ+ห้องศาสนาที่แอดมินเห็นอยู่แล้ว)
-- -> แอดมินกดปุ่มเดียวในหน้า Feedback รีเซ็ทให้ (รหัสผ่านใหม่ = รหัสนักเรียน) -> ตอบกลับ
-- อัตโนมัติใน Feedback + นักเรียนเห็นแบนเนอร์แจ้งเตือนตอนหน้ากรอกรหัสผ่านล็อกอินครั้งถัดไป
--
-- รันแล้วบน production ผ่าน MCP เมื่อ 2026-08-17 — ไฟล์นี้เก็บไว้เป็นหลักฐาน/สำหรับ environment อื่น

ALTER TABLE students ADD COLUMN IF NOT EXISTS password_reset_notice_at timestamptz;

-- ขยาย lookup_student_by_code (ใช้ตอน login นักเรียน, SECURITY DEFINER ให้ anon เรียกได้)
-- ให้คืนค่า password_reset_notice_at มาด้วย เพื่อโชว์แบนเนอร์ที่หน้า step-login
DROP FUNCTION IF EXISTS public.lookup_student_by_code(text);

CREATE FUNCTION public.lookup_student_by_code(p_student_code text)
 RETURNS TABLE(id integer, student_code text, full_name text, main_room text, image_url text, has_account boolean, login_email text, password_reset_notice_at timestamptz)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN QUERY
  SELECT
    s.id::INT,
    s.student_code::TEXT,
    s.full_name::TEXT,
    s.main_room::TEXT,
    s.image_url::TEXT,
    (s.profile_id IS NOT NULL)                                AS has_account,
    CASE WHEN s.profile_id IS NOT NULL
         THEN (SELECT u.email::TEXT FROM auth.users u WHERE u.id = s.profile_id)
         ELSE NULL
    END::TEXT                                                 AS login_email,
    s.password_reset_notice_at
  FROM students s
  WHERE s.student_code = p_student_code
  LIMIT 1;
END;
$function$;

GRANT EXECUTE ON FUNCTION public.lookup_student_by_code(text) TO anon, authenticated;

-- เคลียร์ flag แบนเนอร์หลังโชว์แล้ว — เรียกจากหน้า login ตอนยังไม่ล็อกอิน (ต้องเป็น anon callable)
CREATE OR REPLACE FUNCTION public.ack_password_reset_notice(p_student_code text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  UPDATE students SET password_reset_notice_at = NULL WHERE student_code = p_student_code;
END;
$function$;

GRANT EXECUTE ON FUNCTION public.ack_password_reset_notice(text) TO anon, authenticated;
