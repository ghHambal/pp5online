-- patch_supervisor_positions_array_fix.sql
-- บันทึกไว้เป็นหลักฐาน — รันแล้วจริงผ่าน Supabase migration (2026-08-02)
--
-- บั๊ก: หัวหน้ากลุ่ม/ครูตรวจปพ.5 บางคน เปิดเอกสาร ปพ.5 ข้อมูลมาไม่ครบทุกหน้า
-- (บ้างมาแค่ 1-2 หน้า) เพราะ policy "supervisor_read" หลายตัวเช็คเฉพาะคอลัมน์
-- teachers.position (เดี่ยว, ของเก่า) แต่ตอนนี้ระบบ assign บทบาทผ่าน
-- teachers.positions (array) เป็นหลัก — ครูที่มี position เดี่ยว = NULL แต่มี
-- positions array (เช่น religion_subgroup_head, classroom_leaders_admin) จะไม่ได้
-- สิทธิ์ supervisor เลย ตรวจสอบจริงพบครู 16+ คนอยู่ในสภาพนี้
--
-- แก้โดยเปลี่ยนทุก policy ที่เช็ค `position IS NOT NULL` ให้เช็คทั้งสองคอลัมน์:
--   (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
-- ตามแพทเทิร์นที่ถูกต้องอยู่แล้วใน prayer_records_supervisor_select
--
-- ตารางที่แก้ (12 policy):
--   attendances, class_students, student_scores, class_score_columns,
--   course_doc_page2, teacher_schedules, class_schedule_links, teacher_room_colors,
--   announcement_acks, announcement_rsvp, work_calendar_events, work_calendar_items
--
-- ดู patch_supervisor_read_policies.sql และ patch_supervisor_schedule_read.sql
-- สำหรับ SQL เต็มของ 3-4 ตารางแรก (อัปเดตไฟล์เดิมแล้ว)

-- course_doc_page2 (ปพ.5 หน้า 2 — ก่อนหน้านี้ไม่เคยมีไฟล์ track ไว้ในเครื่อง)
DROP POLICY IF EXISTS "course_doc_page2_supervisor_read" ON public.course_doc_page2;
CREATE POLICY "course_doc_page2_supervisor_read"
ON public.course_doc_page2
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
  )
  OR EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND is_also_admin = true
  )
);

-- announcement_acks
DROP POLICY IF EXISTS "acks_read_supervisor" ON public.announcement_acks;
CREATE POLICY "acks_read_supervisor"
ON public.announcement_acks
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
  )
  OR EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin = true)
  )
);

-- announcement_rsvp
DROP POLICY IF EXISTS "supervisor read all rsvp" ON public.announcement_rsvp;
CREATE POLICY "supervisor read all rsvp"
ON public.announcement_rsvp
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
  )
);

-- work_calendar_events
DROP POLICY IF EXISTS "wce_supervisor_write" ON public.work_calendar_events;
CREATE POLICY "wce_supervisor_write"
ON public.work_calendar_events
FOR ALL TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin = true)
  )
  OR EXISTS (
    SELECT 1 FROM public.teachers t
    WHERE t.profile_id = auth.uid()
    AND (t.position IS NOT NULL OR (t.positions IS NOT NULL AND cardinality(t.positions) > 0))
  )
);

-- work_calendar_items
DROP POLICY IF EXISTS "wci_supervisor_write" ON public.work_calendar_items;
CREATE POLICY "wci_supervisor_write"
ON public.work_calendar_items
FOR ALL TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin = true)
  )
  OR EXISTS (
    SELECT 1 FROM public.teachers t
    WHERE t.profile_id = auth.uid()
    AND (t.position IS NOT NULL OR (t.positions IS NOT NULL AND cardinality(t.positions) > 0))
  )
);
