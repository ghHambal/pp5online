-- patch_prayer_scan_history_student_read.sql
-- เพิ่ม RLS SELECT policy ให้นักเรียนที่มีสิทธิ์สแกน (can_scan_prayer=true) อ่าน record ที่ "ตัวเองเป็นคนสแกน"
-- ของนักเรียนคนอื่นได้ (ผ่าน scanner_code) เพื่อรองรับหน้า "ประวัติการสแกนของฉัน"
-- (เดิมมีแค่ prayer_records_student_self_read ที่ให้เห็นเฉพาะ record ของตัวเอง ไม่พอสำหรับดูประวัติที่ตัวเองสแกนให้คนอื่น)
-- รัน 1 ครั้งใน Supabase SQL Editor

DROP POLICY IF EXISTS "prayer_records_scanner_history_select" ON public.prayer_records;

CREATE POLICY "prayer_records_scanner_history_select"
  ON public.prayer_records
  FOR SELECT
  TO authenticated
  USING (
    scanner_code = (
      SELECT student_code FROM public.students
      WHERE profile_id = auth.uid() AND can_scan_prayer = true
    )
  );
