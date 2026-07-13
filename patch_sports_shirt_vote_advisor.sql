-- patch_sports_shirt_vote_advisor.sql
-- ให้ครูที่ปรึกษาสามัญโหวตแบบเสื้อกีฬาสีแทนนักเรียนในห้องตัวเองได้โดยตรง (ไม่ต้องมีขั้นยืนยันแยกแบบไซซ์เสื้อ)
-- ใช้กับนักเรียน ม.1-2 ที่ไม่สะดวกพกโทรศัพท์มาโรงเรียน
-- Run AFTER patch_sports_shirt_vote_public.sql in Supabase SQL Editor.

CREATE OR REPLACE FUNCTION public.advisor_cast_shirt_vote_for_student(p_event UUID, p_student INTEGER, p_design UUID) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_teacher INTEGER; v_student students%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE; v_design sports_shirt_designs%ROWTYPE; v_allowed BOOLEAN;
BEGIN
  SELECT id INTO v_teacher FROM teachers WHERE profile_id=auth.uid();
  SELECT * INTO v_student FROM students WHERE id=p_student AND is_active IS TRUE;
  IF v_student.id IS NULL THEN RAISE EXCEPTION 'student not found'; END IF;

  SELECT EXISTS(
    SELECT 1 FROM homeroom_teachers h
    WHERE h.teacher_id=v_teacher AND h.category='สามัญ' AND h.main_room=v_student.main_room
  ) OR public.is_sports_admin() INTO v_allowed;
  IF NOT v_allowed THEN RAISE EXCEPTION 'not this student advisor'; END IF;

  SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=p_event;
  IF NOT COALESCE(v_cfg.shirt_vote_enabled,false)
     OR (v_cfg.shirt_vote_opens_at IS NOT NULL AND now()<v_cfg.shirt_vote_opens_at)
     OR (v_cfg.shirt_vote_closes_at IS NOT NULL AND now()>v_cfg.shirt_vote_closes_at)
  THEN RAISE EXCEPTION 'shirt vote is closed'; END IF;

  SELECT * INTO v_design FROM sports_shirt_designs WHERE id=p_design AND event_id=p_event;
  IF v_design.id IS NULL THEN RAISE EXCEPTION 'invalid design'; END IF;
  IF v_design.gender IS DISTINCT FROM v_student.gender THEN RAISE EXCEPTION 'design gender mismatch'; END IF;

  INSERT INTO sports_shirt_votes(event_id,student_id,design_id,voted_at,updated_at)
  VALUES(p_event,p_student,p_design,now(),now())
  ON CONFLICT(event_id,student_id) DO UPDATE SET design_id=excluded.design_id,updated_at=now();

  RETURN jsonb_build_object('ok', true);
END $$;

GRANT EXECUTE ON FUNCTION public.advisor_cast_shirt_vote_for_student(UUID,INTEGER,UUID) TO authenticated;

-- ให้ครูที่ปรึกษาสามัญอ่านโหวตปัจจุบันของนักเรียนในห้องตัวเองได้ (แสดงสถานะในตารางรายชื่อ)
DROP POLICY IF EXISTS "shirt_votes_advisor_read" ON public.sports_shirt_votes;
CREATE POLICY "shirt_votes_advisor_read" ON public.sports_shirt_votes FOR SELECT TO authenticated USING (
  student_id IN (
    SELECT s.id FROM students s
    JOIN homeroom_teachers h ON h.main_room = s.main_room AND h.category = 'สามัญ'
    JOIN teachers t ON t.id = h.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);
