-- patch_prayer_scanned_by.sql
-- 1. เพิ่มคอลัมน์ scanned_by ในตาราง prayer_records เพื่อระบุผู้ทำการสแกน/เช็คชื่อ
ALTER TABLE public.prayer_records ADD COLUMN IF NOT EXISTS scanned_by TEXT;

-- 2. ปรับปรุงฟังก์ชัน save_prayer_admin ให้รองรับพารามิเตอร์ p_scanned_by แบบไม่บังคับ (Default NULL)
CREATE OR REPLACE FUNCTION public.save_prayer_admin(
  p_student_id INT,
  p_room TEXT,
  p_date DATE,
  p_status TEXT,
  p_week_number INT,
  p_scanned_by TEXT DEFAULT NULL
) RETURNS VOID AS $$
BEGIN
  DELETE FROM public.prayer_records
  WHERE student_id = p_student_id AND check_date = p_date;
  
  IF p_status IS NOT NULL THEN
    INSERT INTO public.prayer_records (student_id, main_room, check_date, status, week_number, scanned_by)
    VALUES (p_student_id, p_room, p_date, p_status, p_week_number, p_scanned_by);
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
