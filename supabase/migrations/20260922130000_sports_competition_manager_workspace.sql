-- PP5 sports competition manager workspace
-- Uses the shared AZIZGAMES tables: sports, matches, registrations, team_colors.
-- A teacher is responsible for a competition when sports.responsible_teacher_id
-- points to the teacher's PP5 profile_id.

ALTER TABLE public.sports_portal_settings
  ADD COLUMN IF NOT EXISTS competition_edit_closes_at TIMESTAMPTZ;

-- The current 2569 event may be edited until the start of 25 September 2026
-- (Asia/Bangkok). Future events can set their own deadline in this column.
UPDATE public.sports_portal_settings s
SET competition_edit_closes_at = TIMESTAMPTZ '2026-09-25 00:00:00+07'
FROM public.events e
WHERE s.event_id = e.id
  AND e.status = 'active'
  AND e.academic_year = 2569
  AND s.competition_edit_closes_at IS NULL;

CREATE TABLE IF NOT EXISTS public.sports_competition_schedule_audit (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id    UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  sport_id    UUID NOT NULL REFERENCES public.sports(id) ON DELETE CASCADE,
  match_id    UUID REFERENCES public.matches(id) ON DELETE SET NULL,
  action      TEXT NOT NULL CHECK (action IN ('insert', 'update')),
  old_data    JSONB,
  new_data    JSONB NOT NULL,
  actor_id    UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS sports_competition_schedule_audit_match_idx
  ON public.sports_competition_schedule_audit(match_id, created_at DESC);

ALTER TABLE public.sports_competition_schedule_audit ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_sports_competition_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles p
    WHERE p.id = auth.uid()
      AND (p.role = 'admin' OR p.is_also_admin IS TRUE)
  )
  OR EXISTS (
    SELECT 1
    FROM public.teachers t
    WHERE t.profile_id = auth.uid()
      AND (
        t.staff_type = 'แอดมิน'
        OR t.position = 'admin'
        OR 'house_color_admin' = ANY(COALESCE(t.positions, ARRAY[t.position]))
      )
  )
  OR EXISTS (
    SELECT 1
    FROM public.teachers t
    JOIN public.role_permissions rp
      ON rp.position = ANY(COALESCE(t.positions, ARRAY[t.position]))
    WHERE t.profile_id = auth.uid()
      AND rp.feature = 'menu_sports_admin'
      AND rp.allowed IS TRUE
  );
$$;

DROP POLICY IF EXISTS sports_competition_schedule_audit_admin_read
  ON public.sports_competition_schedule_audit;
CREATE POLICY sports_competition_schedule_audit_admin_read
  ON public.sports_competition_schedule_audit
  FOR SELECT TO authenticated
  USING (public.is_sports_competition_admin());

CREATE OR REPLACE FUNCTION public.get_my_sports_competition_sports(p_event UUID)
RETURNS TABLE (
  id UUID,
  code TEXT,
  name TEXT,
  category TEXT,
  gender TEXT,
  venue TEXT,
  responsible_teacher_id UUID,
  match_count INTEGER,
  registration_count INTEGER
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN;
  END IF;

  RETURN QUERY
  SELECT
    s.id,
    s.code,
    s.name,
    s.category,
    s.gender,
    s.venue,
    s.responsible_teacher_id,
    (SELECT COUNT(*)::INTEGER FROM public.matches m
     WHERE m.event_id = s.event_id AND m.sport_id = s.id) AS match_count,
    (SELECT COUNT(*)::INTEGER FROM public.registrations r
     WHERE r.event_id = s.event_id AND r.sport_id = s.id) AS registration_count
  FROM public.sports s
  WHERE s.event_id = p_event
    AND s.is_active IS TRUE
    AND (public.is_sports_competition_admin() OR s.responsible_teacher_id = auth.uid())
  ORDER BY s.display_order, s.code, s.name;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_sports_competition_manager_workspace(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_event public.events%ROWTYPE;
  v_cutoff TIMESTAMPTZ;
  v_is_admin BOOLEAN;
  v_has_assignment BOOLEAN;
  v_sports JSONB;
  v_matches JSONB;
  v_registrations JSONB;
  v_colors JSONB;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน';
  END IF;

  SELECT * INTO v_event FROM public.events
  WHERE id = p_event AND status = 'active';
  IF v_event.id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน';
  END IF;

  v_is_admin := public.is_sports_competition_admin();
  SELECT s.competition_edit_closes_at INTO v_cutoff
  FROM public.sports_portal_settings s
  WHERE s.event_id = p_event
  LIMIT 1;

  SELECT EXISTS (
    SELECT 1 FROM public.sports s
    WHERE s.event_id = p_event
      AND s.is_active IS TRUE
      AND s.responsible_teacher_id = auth.uid()
  ) INTO v_has_assignment;

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', s.id,
    'code', s.code,
    'name', s.name,
    'category', s.category,
    'gender', s.gender,
    'venue', s.venue,
    'max_athletes', s.max_athletes,
    'responsible_teacher_id', s.responsible_teacher_id,
    'match_count', (SELECT COUNT(*)::INTEGER FROM public.matches m WHERE m.event_id = s.event_id AND m.sport_id = s.id),
    'registration_count', (SELECT COUNT(*)::INTEGER FROM public.registrations r WHERE r.event_id = s.event_id AND r.sport_id = s.id)
    ) ORDER BY s.display_order, s.code, s.name), '[]'::JSONB)
  INTO v_sports
  FROM public.sports s
  WHERE s.event_id = p_event
    AND s.is_active IS TRUE
    AND (v_is_admin OR s.responsible_teacher_id = auth.uid());

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', m.id,
    'sport_id', m.sport_id,
    'sport_name', s.name,
    'sport_code', s.code,
    'round', m.round,
    'round_name', m.round_name,
    'team_a_color_id', m.team_a_color_id,
    'team_b_color_id', m.team_b_color_id,
    'team_a_name', a.name,
    'team_b_name', b.name,
    'scheduled_date', m.scheduled_date,
    'scheduled_time', m.scheduled_time,
    'venue', m.venue,
    'note', m.note,
    'status', m.status,
    'score_a', m.score_a,
    'score_b', m.score_b,
    'winner_team_color_id', m.winner_team_color_id
    ) ORDER BY s.display_order, s.code, m.round, m.scheduled_date NULLS LAST, m.scheduled_time NULLS LAST, m.created_at), '[]'::JSONB)
  INTO v_matches
  FROM public.matches m
  JOIN public.sports s ON s.id = m.sport_id AND s.event_id = p_event
  LEFT JOIN public.team_colors a ON a.id = m.team_a_color_id
  LEFT JOIN public.team_colors b ON b.id = m.team_b_color_id
  WHERE v_is_admin OR s.responsible_teacher_id = auth.uid();

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', r.id,
    'sport_id', r.sport_id,
    'student_id', r.student_id,
    'student_code', st.student_code,
    'student_name', st.full_name,
    'team_color_id', r.team_color_id,
    'team_color_name', tc.name,
    'jersey_number', r.jersey_number
    ) ORDER BY s.display_order, s.code, tc.name, st.student_code), '[]'::JSONB)
  INTO v_registrations
  FROM public.registrations r
  JOIN public.sports s ON s.id = r.sport_id AND s.event_id = p_event
  LEFT JOIN public.students st ON st.id = r.student_id
  LEFT JOIN public.team_colors tc ON tc.id = r.team_color_id
  WHERE v_is_admin OR s.responsible_teacher_id = auth.uid();

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', c.id,
    'name', c.name,
    'gender', c.gender,
    'hex_color', c.hex_color,
    'logo_url', c.logo_url
    ) ORDER BY c.display_order, c.name), '[]'::JSONB)
  INTO v_colors
  FROM public.team_colors c
  WHERE c.event_id = p_event;

  RETURN jsonb_build_object(
    'event', jsonb_build_object(
      'id', v_event.id,
      'name', v_event.name,
      'academic_year', v_event.academic_year,
      'status', v_event.status,
      'start_date', v_event.start_date,
      'end_date', v_event.end_date
    ),
    'cutoff_at', v_cutoff,
    'is_admin', v_is_admin,
    'has_assignment', v_has_assignment,
    'can_edit', v_is_admin OR (v_has_assignment AND v_cutoff IS NOT NULL AND now() < v_cutoff),
    'sports', v_sports,
    'matches', v_matches,
    'registrations', v_registrations,
    'colors', v_colors
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.upsert_sports_competition_match(
  p_event UUID,
  p_sport UUID,
  p_match_id UUID DEFAULT NULL,
  p_round INTEGER DEFAULT 1,
  p_round_name TEXT DEFAULT NULL,
  p_team_a_color_id UUID DEFAULT NULL,
  p_team_b_color_id UUID DEFAULT NULL,
  p_scheduled_date DATE DEFAULT NULL,
  p_scheduled_time TIME DEFAULT NULL,
  p_venue TEXT DEFAULT NULL,
  p_note TEXT DEFAULT NULL
)
RETURNS public.matches
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_sport public.sports%ROWTYPE;
  v_existing public.matches%ROWTYPE;
  v_result public.matches%ROWTYPE;
  v_cutoff TIMESTAMPTZ;
  v_is_admin BOOLEAN;
  v_action TEXT;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน';
  END IF;

  SELECT * INTO v_sport FROM public.sports
  WHERE id = p_sport AND event_id = p_event AND is_active IS TRUE;
  IF v_sport.id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบรายการแข่งขันนี้';
  END IF;

  v_is_admin := public.is_sports_competition_admin();
  IF NOT v_is_admin AND v_sport.responsible_teacher_id IS DISTINCT FROM auth.uid() THEN
    RAISE EXCEPTION 'คุณไม่มีสิทธิ์แก้ไขรายการแข่งขันนี้';
  END IF;

  SELECT s.competition_edit_closes_at INTO v_cutoff
  FROM public.sports_portal_settings s
  WHERE s.event_id = p_event
  LIMIT 1;
  IF NOT v_is_admin AND (v_cutoff IS NULL OR now() >= v_cutoff) THEN
    RAISE EXCEPTION 'หมดเวลาปรับโปรแกรมการแข่งขันแล้ว ระบบเปิดให้แก้ไขได้ก่อนวันที่ 25 เท่านั้น';
  END IF;

  IF p_team_a_color_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.team_colors c WHERE c.id = p_team_a_color_id AND c.event_id = p_event
  ) THEN
    RAISE EXCEPTION 'ไม่พบสีของทีม A ในกิจกรรมนี้';
  END IF;
  IF p_team_b_color_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.team_colors c WHERE c.id = p_team_b_color_id AND c.event_id = p_event
  ) THEN
    RAISE EXCEPTION 'ไม่พบสีของทีม B ในกิจกรรมนี้';
  END IF;

  IF p_match_id IS NULL THEN
    INSERT INTO public.matches (
      event_id, sport_id, round, round_name, team_a_color_id, team_b_color_id,
      scheduled_date, scheduled_time, venue, note, status, updated_at
    ) VALUES (
      p_event, p_sport, GREATEST(COALESCE(p_round, 1), 1), p_round_name,
      p_team_a_color_id, p_team_b_color_id, p_scheduled_date, p_scheduled_time,
      NULLIF(BTRIM(p_venue), ''), NULLIF(BTRIM(p_note), ''), 'pending', now()
    ) RETURNING * INTO v_result;
    v_action := 'insert';
  ELSE
    SELECT * INTO v_existing FROM public.matches
    WHERE id = p_match_id AND event_id = p_event AND sport_id = p_sport
    FOR UPDATE;
    IF v_existing.id IS NULL THEN
      RAISE EXCEPTION 'ไม่พบคู่แข่งขันที่ต้องการแก้ไข';
    END IF;
    IF v_existing.status IN ('live', 'done')
       OR v_existing.score_a IS NOT NULL
       OR v_existing.score_b IS NOT NULL
       OR v_existing.winner_team_color_id IS NOT NULL THEN
      RAISE EXCEPTION 'คู่แข่งขันนี้เริ่มบันทึกผลแล้ว จึงแก้คู่แข่งขันหรือเวลาไม่ได้';
    END IF;

    UPDATE public.matches
    SET round = GREATEST(COALESCE(p_round, round), 1),
        round_name = p_round_name,
        team_a_color_id = p_team_a_color_id,
        team_b_color_id = p_team_b_color_id,
        scheduled_date = p_scheduled_date,
        scheduled_time = p_scheduled_time,
        venue = NULLIF(BTRIM(p_venue), ''),
        note = NULLIF(BTRIM(p_note), ''),
        updated_at = now()
    WHERE id = p_match_id
    RETURNING * INTO v_result;
    v_action := 'update';
  END IF;

  INSERT INTO public.sports_competition_schedule_audit
    (event_id, sport_id, match_id, action, old_data, new_data, actor_id)
  VALUES
    (p_event, p_sport, v_result.id, v_action,
     CASE WHEN v_action = 'update' THEN to_jsonb(v_existing) ELSE NULL END,
     to_jsonb(v_result), auth.uid());

  RETURN v_result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_sports_competition_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_my_sports_competition_sports(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_manager_workspace(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.upsert_sports_competition_match(UUID, UUID, UUID, INTEGER, TEXT, UUID, UUID, DATE, TIME, TEXT, TEXT) TO authenticated;
