-- Return only the athlete roster for competition items the current teacher is
-- allowed to manage. Keep this separate from the lightweight schedule
-- workspace so the page does not load registration rows until the teacher
-- asks to print the list.

CREATE OR REPLACE FUNCTION public.get_sports_competition_manager_roster(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user UUID := auth.uid();
  v_is_admin BOOLEAN;
  v_rows JSONB;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM public.events
    WHERE id = p_event AND status = 'active'
  ) THEN
    RAISE EXCEPTION 'ไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน';
  END IF;

  v_is_admin := public.is_sports_competition_admin();

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'registration_id', r.id,
    'sport_id', s.id,
    'sport_code', s.code,
    'sport_name', s.name,
    'sport_category', s.category,
    'sport_gender', s.gender,
    'sport_order', s.display_order,
    'student_id', st.id,
    'student_code', st.student_code,
    'student_name', st.full_name,
    'main_room', st.main_room,
    'image_url', COALESCE(st.image_url, st.photo_url),
    'team_color_id', c.id,
    'team_color_name', c.name,
    'team_color_hex', c.hex_color,
    'team_color_order', c.display_order,
    'jersey_number', r.jersey_number
  ) ORDER BY s.display_order, s.code, s.name,
             c.display_order, c.name,
             st.student_code, st.full_name), '[]'::JSONB)
  INTO v_rows
  FROM public.registrations r
  JOIN public.sports s
    ON s.id = r.sport_id
   AND s.event_id = p_event
   AND s.is_active IS TRUE
  JOIN public.students st ON st.id = r.student_id
  JOIN public.team_colors c
    ON c.id = r.team_color_id
   AND c.event_id = p_event
  WHERE r.event_id = p_event
    AND (v_is_admin OR s.responsible_teacher_id = v_user);

  RETURN v_rows;
END;
$$;

REVOKE ALL ON FUNCTION public.get_sports_competition_manager_roster(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_manager_roster(UUID) TO authenticated;
