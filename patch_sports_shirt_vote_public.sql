-- patch_sports_shirt_vote_public.sql
-- โหมดโหวตแบบเสื้อกีฬาสีแบบสาธารณะ (ไม่ต้องล็อกอิน) — นักเรียนกรอกรหัสนักเรียนเพื่อเข้าโหวตผ่านหน้าแยก
-- ยอมรับความเสี่ยง: ไม่มีการยืนยันตัวตนอื่นนอกจากรหัสนักเรียน (รหัสอาจรู้กันในกลุ่มเพื่อน) — เหมาะกับโหวตที่ stakes ต่ำเช่นนี้เท่านั้น
-- Run AFTER patch_sports_shirt_vote_gender_colors.sql in Supabase SQL Editor.

ALTER TABLE public.sports_portal_settings
  ADD COLUMN IF NOT EXISTS shirt_vote_public_enabled BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS shirt_vote_tutorial_url TEXT,
  ADD COLUMN IF NOT EXISTS shirt_vote_intro_url TEXT;

-- ข้อมูลตั้งค่าทั่วไปของหน้าสาธารณะ (ก่อนรู้รหัสนักเรียน) — ใช้แสดงปุ่มคลิปคู่มือ/แนะนำ และเช็คว่าเปิดโหมดนี้ไว้ไหม
CREATE OR REPLACE FUNCTION public.get_public_shirt_vote_config() RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path=public AS $$
DECLARE v_event events%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE;
BEGIN
  SELECT * INTO v_event FROM events WHERE status='active' ORDER BY academic_year DESC LIMIT 1;
  SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=v_event.id;
  RETURN jsonb_build_object(
    'enabled', COALESCE(v_cfg.shirt_vote_public_enabled,false),
    'tutorial_url', v_cfg.shirt_vote_tutorial_url,
    'intro_url', v_cfg.shirt_vote_intro_url
  );
END $$;

-- ค้นข้อมูลนักเรียน + รายการแบบเสื้อของเพศตัวเอง + โหวตปัจจุบัน (ถ้ามี) จากรหัสนักเรียน
CREATE OR REPLACE FUNCTION public.get_public_shirt_vote_bundle(p_code TEXT) RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path=public AS $$
DECLARE v_event events%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE; v_student students%ROWTYPE; v_designs JSONB;
BEGIN
  SELECT * INTO v_event FROM events WHERE status='active' ORDER BY academic_year DESC LIMIT 1;
  SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=v_event.id;
  IF NOT COALESCE(v_cfg.shirt_vote_public_enabled,false) THEN
    RETURN jsonb_build_object('error','public_mode_disabled');
  END IF;

  SELECT * INTO v_student FROM students WHERE student_code=trim(p_code) AND is_active IS TRUE;
  IF v_student.id IS NULL THEN
    RETURN jsonb_build_object('error','student_not_found');
  END IF;

  SELECT jsonb_agg(jsonb_build_object(
    'id', d.id, 'design_no', d.design_no, 'name', d.name, 'html_url', d.html_url,
    'sports_shirt_design_colors', COALESCE((
      SELECT jsonb_agg(jsonb_build_object('id',c.id,'color_name',c.color_name,'image_url',c.image_url,'display_order',c.display_order) ORDER BY c.display_order)
      FROM sports_shirt_design_colors c WHERE c.design_id=d.id
    ), '[]'::jsonb)
  ) ORDER BY d.design_no) INTO v_designs
  FROM sports_shirt_designs d
  WHERE d.event_id=v_event.id AND d.gender=v_student.gender;

  RETURN jsonb_build_object(
    'student', jsonb_build_object('id',v_student.id,'full_name',v_student.full_name,'image_url',v_student.image_url,'main_room',v_student.main_room,'gender',v_student.gender),
    'designs', COALESCE(v_designs,'[]'::jsonb),
    'my_design_id', (SELECT design_id::text FROM sports_shirt_votes WHERE event_id=v_event.id AND student_id=v_student.id),
    'vote_enabled', COALESCE(v_cfg.shirt_vote_enabled,false),
    'vote_opens_at', v_cfg.shirt_vote_opens_at,
    'vote_closes_at', v_cfg.shirt_vote_closes_at
  );
END $$;

-- บันทึกโหวตแบบสาธารณะ (ไม่มี auth.uid() — ยืนยันตัวตนด้วยรหัสนักเรียนเท่านั้น)
CREATE OR REPLACE FUNCTION public.cast_public_shirt_vote(p_code TEXT, p_design UUID) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_event events%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE; v_student students%ROWTYPE; v_design sports_shirt_designs%ROWTYPE;
BEGIN
  SELECT * INTO v_event FROM events WHERE status='active' ORDER BY academic_year DESC LIMIT 1;
  SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=v_event.id;
  IF NOT COALESCE(v_cfg.shirt_vote_public_enabled,false) THEN RAISE EXCEPTION 'public vote mode disabled'; END IF;
  IF NOT COALESCE(v_cfg.shirt_vote_enabled,false) OR (v_cfg.shirt_vote_opens_at IS NOT NULL AND now()<v_cfg.shirt_vote_opens_at) OR (v_cfg.shirt_vote_closes_at IS NOT NULL AND now()>v_cfg.shirt_vote_closes_at) THEN RAISE EXCEPTION 'shirt vote is closed'; END IF;

  SELECT * INTO v_student FROM students WHERE student_code=trim(p_code) AND is_active IS TRUE;
  IF v_student.id IS NULL THEN RAISE EXCEPTION 'student not found'; END IF;

  SELECT * INTO v_design FROM sports_shirt_designs WHERE id=p_design AND event_id=v_event.id;
  IF v_design.id IS NULL THEN RAISE EXCEPTION 'invalid design'; END IF;
  IF v_design.gender IS DISTINCT FROM v_student.gender THEN RAISE EXCEPTION 'design gender mismatch'; END IF;

  INSERT INTO sports_shirt_votes(event_id,student_id,design_id,voted_at,updated_at)
  VALUES(v_event.id,v_student.id,p_design,now(),now())
  ON CONFLICT(event_id,student_id) DO UPDATE SET design_id=excluded.design_id,updated_at=now();

  RETURN jsonb_build_object('ok', true);
END $$;

GRANT EXECUTE ON FUNCTION public.get_public_shirt_vote_config() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_public_shirt_vote_bundle(TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.cast_public_shirt_vote(TEXT,UUID) TO anon, authenticated;
