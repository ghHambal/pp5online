-- Use the competition-responsible credentials as a dedicated AZIZGAMES login.
-- The dedicated Auth user is intentionally separate from the teacher's PP5
-- account, so changing the sports password never changes the PP5 password.

ALTER TABLE public.sports_competition_responsible_credentials
  ADD COLUMN IF NOT EXISTS auth_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS auth_email TEXT,
  ADD COLUMN IF NOT EXISTS provision_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (provision_status IN ('pending', 'ready', 'error')),
  ADD COLUMN IF NOT EXISTS provisioned_at TIMESTAMPTZ;

CREATE UNIQUE INDEX IF NOT EXISTS sports_competition_credentials_auth_user_idx
  ON public.sports_competition_responsible_credentials(auth_user_id)
  WHERE auth_user_id IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS sports_competition_credentials_auth_email_idx
  ON public.sports_competition_responsible_credentials(auth_email)
  WHERE auth_email IS NOT NULL;

-- The public login page only receives the internal Auth email alias. It never
-- receives the password or the credential row itself.
CREATE OR REPLACE FUNCTION public.resolve_sports_competition_login_email(p_identifier TEXT)
RETURNS TEXT
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT c.auth_email
  FROM public.sports_competition_responsible_credentials c
  JOIN public.events e ON e.id = c.event_id AND e.status = 'active'
  WHERE BTRIM(c.username) = BTRIM(COALESCE(p_identifier, ''))
    AND c.provision_status = 'ready'
    AND c.auth_email IS NOT NULL
  ORDER BY c.updated_at DESC
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.resolve_sports_competition_login_email(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.resolve_sports_competition_login_email(TEXT) TO anon, authenticated;

-- Existing teachers can still use their PP5 profile directly. A dedicated
-- AZIZGAMES profile is also treated as the original responsible teacher for
-- the selected event, but only through this server-side helper.
CREATE OR REPLACE FUNCTION public.is_sports_competition_responsible(
  p_event UUID,
  p_teacher_profile_id UUID
)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT auth.uid() IS NOT NULL
    AND (
      p_teacher_profile_id = auth.uid()
      OR EXISTS (
        SELECT 1
        FROM public.sports_competition_responsible_credentials c
        WHERE c.event_id = p_event
          AND c.teacher_profile_id = p_teacher_profile_id
          AND c.auth_user_id = auth.uid()
          AND c.provision_status = 'ready'
      )
    );
$$;

REVOKE ALL ON FUNCTION public.is_sports_competition_responsible(UUID, UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_sports_competition_responsible(UUID, UUID) TO authenticated;

CREATE OR REPLACE FUNCTION public.get_sports_competition_responsible_credentials(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_rows JSONB;
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่ดูข้อมูลเข้าสู่ระบบผู้รับผิดชอบได้';
  END IF;

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'teacher_profile_id', people.teacher_profile_id,
    'teacher_name', people.teacher_name,
    'teacher_code', people.teacher_code,
    'teacher_title', people.teacher_title,
    'teacher_staff_type', people.teacher_staff_type,
    'credential_id', c.id,
    'username', c.username,
    'password', c.password,
    'credential_status', CASE WHEN c.id IS NULL THEN 'missing' ELSE 'ready' END,
    'auth_user_id', c.auth_user_id,
    'auth_email', c.auth_email,
    'provision_status', COALESCE(c.provision_status, 'pending'),
    'provisioned_at', c.provisioned_at,
    'sports', people.sports
    ) ORDER BY people.teacher_name), '[]'::JSONB)
  INTO v_rows
  FROM (
    SELECT
      s.responsible_teacher_id AS teacher_profile_id,
      applicant.full_name AS teacher_name,
      applicant.teacher_code,
      CASE
        WHEN applicant.full_name ILIKE 'นางสาว%' THEN 'นางสาว'
        WHEN applicant.full_name ILIKE 'นาย%' THEN 'นาย'
        WHEN applicant.full_name ILIKE 'นาง%' THEN 'นาง'
        WHEN applicant.full_name ~* '^ดร\.' THEN 'ดร.'
        WHEN applicant.full_name ~* '^(mr\.|mrs\.|ms\.)'
          THEN UPPER(SPLIT_PART(applicant.full_name, ' ', 1))
        ELSE COALESCE(NULLIF(applicant.staff_type, ''), 'ครู')
      END AS teacher_title,
      applicant.staff_type AS teacher_staff_type,
      jsonb_agg(jsonb_build_object(
        'sport_id', s.id,
        'sport_code', s.code,
        'sport_name', s.name,
        'sport_gender', s.gender
        ) ORDER BY s.display_order, s.code, s.name) AS sports
    FROM public.sports s
    JOIN public.teachers applicant ON applicant.profile_id = s.responsible_teacher_id
    WHERE s.event_id = p_event
      AND s.is_active IS TRUE
      AND s.responsible_teacher_id IS NOT NULL
    GROUP BY s.responsible_teacher_id, applicant.full_name, applicant.teacher_code,
             applicant.staff_type
  ) people
  LEFT JOIN public.sports_competition_responsible_credentials c
    ON c.event_id = p_event
   AND c.teacher_profile_id = people.teacher_profile_id;

  RETURN v_rows;
END;
$$;

CREATE OR REPLACE FUNCTION public.upsert_sports_competition_responsible_credential(
  p_event UUID,
  p_teacher_profile_id UUID,
  p_username TEXT,
  p_password TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_username TEXT := BTRIM(COALESCE(p_username, ''));
  v_password TEXT := BTRIM(COALESCE(p_password, ''));
  v_row public.sports_competition_responsible_credentials%ROWTYPE;
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่แก้ไขข้อมูลเข้าสู่ระบบได้';
  END IF;
  IF v_username !~ '^[0-9]{4}$' THEN
    RAISE EXCEPTION 'Username ต้องเป็นเลขประจำตัวครู 4 หลัก';
  END IF;
  IF v_password = '' THEN
    RAISE EXCEPTION 'กรุณากำหนดรหัสผ่าน';
  END IF;
  IF NOT EXISTS (
    SELECT 1
    FROM public.sports s
    WHERE s.event_id = p_event
      AND s.is_active IS TRUE
      AND s.responsible_teacher_id = p_teacher_profile_id
  ) THEN
    RAISE EXCEPTION 'ครูคนนี้ยังไม่มีรายการแข่งขันที่กำหนดเป็นผู้รับผิดชอบ';
  END IF;

  INSERT INTO public.sports_competition_responsible_credentials
    (event_id, teacher_profile_id, username, password, created_by, updated_by,
     provision_status, provisioned_at)
  VALUES
    (p_event, p_teacher_profile_id, v_username, v_password, auth.uid(), auth.uid(),
     'pending', NULL)
  ON CONFLICT (event_id, teacher_profile_id)
  DO UPDATE SET
    username = EXCLUDED.username,
    password = EXCLUDED.password,
    updated_by = auth.uid(),
    updated_at = now(),
    provision_status = 'pending',
    provisioned_at = NULL
  RETURNING * INTO v_row;

  RETURN jsonb_build_object(
    'id', v_row.id,
    'event_id', v_row.event_id,
    'teacher_profile_id', v_row.teacher_profile_id,
    'username', v_row.username,
    'password', v_row.password,
    'provision_status', v_row.provision_status,
    'updated_at', v_row.updated_at
  );
END;
$$;

-- Replace the direct profile comparisons in the manager workspace with the
-- server-side helper so dedicated sports accounts see only their own sports.
CREATE OR REPLACE FUNCTION public.get_my_sports_competition_sports(p_event UUID)
RETURNS TABLE (
  id UUID, code TEXT, name TEXT, category TEXT, gender TEXT, venue TEXT,
  responsible_teacher_id UUID, match_count INTEGER, registration_count INTEGER
)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN; END IF;
  RETURN QUERY
  SELECT s.id, s.code, s.name, s.category, s.gender, s.venue,
    s.responsible_teacher_id,
    (SELECT COUNT(*)::INTEGER FROM public.matches m WHERE m.event_id = s.event_id AND m.sport_id = s.id),
    (SELECT COUNT(*)::INTEGER FROM public.registrations r WHERE r.event_id = s.event_id AND r.sport_id = s.id)
  FROM public.sports s
  WHERE s.event_id = p_event AND s.is_active IS TRUE
    AND (public.is_sports_competition_admin() OR public.is_sports_competition_responsible(p_event, s.responsible_teacher_id))
  ORDER BY s.display_order, s.code, s.name;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_sports_competition_manager_workspace(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
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
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน'; END IF;
  SELECT * INTO v_event FROM public.events WHERE id = p_event AND status = 'active';
  IF v_event.id IS NULL THEN RAISE EXCEPTION 'ไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน'; END IF;
  v_is_admin := public.is_sports_competition_admin();
  SELECT s.competition_edit_closes_at INTO v_cutoff
  FROM public.sports_portal_settings s WHERE s.event_id = p_event LIMIT 1;
  SELECT EXISTS (
    SELECT 1 FROM public.sports s
    WHERE s.event_id = p_event AND s.is_active IS TRUE
      AND public.is_sports_competition_responsible(p_event, s.responsible_teacher_id)
  ) INTO v_has_assignment;

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', s.id, 'code', s.code, 'name', s.name, 'category', s.category,
    'gender', s.gender, 'venue', s.venue, 'max_athletes', s.max_athletes,
    'responsible_teacher_id', s.responsible_teacher_id,
    'match_count', (SELECT COUNT(*)::INTEGER FROM public.matches m WHERE m.event_id = s.event_id AND m.sport_id = s.id),
    'registration_count', (SELECT COUNT(*)::INTEGER FROM public.registrations r WHERE r.event_id = s.event_id AND r.sport_id = s.id)
    ) ORDER BY s.display_order, s.code, s.name), '[]'::JSONB)
  INTO v_sports FROM public.sports s
  WHERE s.event_id = p_event AND s.is_active IS TRUE
    AND (v_is_admin OR public.is_sports_competition_responsible(p_event, s.responsible_teacher_id));

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', m.id, 'sport_id', m.sport_id, 'sport_name', s.name, 'sport_code', s.code,
    'round', m.round, 'round_name', m.round_name, 'team_a_color_id', m.team_a_color_id,
    'team_b_color_id', m.team_b_color_id, 'team_a_name', a.name, 'team_b_name', b.name,
    'scheduled_date', m.scheduled_date, 'scheduled_time', m.scheduled_time,
    'venue', m.venue, 'note', m.note, 'status', m.status, 'score_a', m.score_a,
    'score_b', m.score_b, 'winner_team_color_id', m.winner_team_color_id
    ) ORDER BY s.display_order, s.code, m.round, m.scheduled_date NULLS LAST,
      m.scheduled_time NULLS LAST, m.created_at), '[]'::JSONB)
  INTO v_matches FROM public.matches m
  JOIN public.sports s ON s.id = m.sport_id AND s.event_id = p_event
  LEFT JOIN public.team_colors a ON a.id = m.team_a_color_id
  LEFT JOIN public.team_colors b ON b.id = m.team_b_color_id
  WHERE v_is_admin OR public.is_sports_competition_responsible(p_event, s.responsible_teacher_id);

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', r.id, 'sport_id', r.sport_id, 'student_id', r.student_id,
    'student_code', st.student_code, 'student_name', st.full_name,
    'team_color_id', r.team_color_id, 'team_color_name', tc.name,
    'jersey_number', r.jersey_number
    ) ORDER BY s.display_order, s.code, tc.name, st.student_code), '[]'::JSONB)
  INTO v_registrations FROM public.registrations r
  JOIN public.sports s ON s.id = r.sport_id AND s.event_id = p_event
  LEFT JOIN public.students st ON st.id = r.student_id
  LEFT JOIN public.team_colors tc ON tc.id = r.team_color_id
  WHERE v_is_admin OR public.is_sports_competition_responsible(p_event, s.responsible_teacher_id);

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', c.id, 'name', c.name, 'gender', c.gender,
    'hex_color', c.hex_color, 'logo_url', c.logo_url
    ) ORDER BY c.display_order, c.name), '[]'::JSONB)
  INTO v_colors FROM public.team_colors c WHERE c.event_id = p_event;

  RETURN jsonb_build_object(
    'event', jsonb_build_object('id', v_event.id, 'name', v_event.name,
      'academic_year', v_event.academic_year, 'status', v_event.status,
      'start_date', v_event.start_date, 'end_date', v_event.end_date),
    'cutoff_at', v_cutoff, 'is_admin', v_is_admin, 'has_assignment', v_has_assignment,
    'can_edit', v_is_admin OR (v_has_assignment AND v_cutoff IS NOT NULL AND now() < v_cutoff),
    'sports', v_sports, 'matches', v_matches, 'registrations', v_registrations,
    'colors', v_colors
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.upsert_sports_competition_match(
  p_event UUID, p_sport UUID, p_match_id UUID DEFAULT NULL, p_round INTEGER DEFAULT 1,
  p_round_name TEXT DEFAULT NULL, p_team_a_color_id UUID DEFAULT NULL,
  p_team_b_color_id UUID DEFAULT NULL, p_scheduled_date DATE DEFAULT NULL,
  p_scheduled_time TIME DEFAULT NULL, p_venue TEXT DEFAULT NULL, p_note TEXT DEFAULT NULL
)
RETURNS public.matches
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  v_sport public.sports%ROWTYPE;
  v_existing public.matches%ROWTYPE;
  v_result public.matches%ROWTYPE;
  v_cutoff TIMESTAMPTZ;
  v_is_admin BOOLEAN;
  v_action TEXT;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน'; END IF;
  SELECT * INTO v_sport FROM public.sports
  WHERE id = p_sport AND event_id = p_event AND is_active IS TRUE;
  IF v_sport.id IS NULL THEN RAISE EXCEPTION 'ไม่พบรายการแข่งขันนี้'; END IF;
  v_is_admin := public.is_sports_competition_admin();
  IF NOT v_is_admin AND NOT public.is_sports_competition_responsible(p_event, v_sport.responsible_teacher_id) THEN
    RAISE EXCEPTION 'คุณไม่มีสิทธิ์แก้ไขรายการแข่งขันนี้';
  END IF;
  SELECT s.competition_edit_closes_at INTO v_cutoff
  FROM public.sports_portal_settings s WHERE s.event_id = p_event LIMIT 1;
  IF NOT v_is_admin AND (v_cutoff IS NULL OR now() >= v_cutoff) THEN
    RAISE EXCEPTION 'หมดเวลาปรับโปรแกรมการแข่งขันแล้ว ระบบเปิดให้แก้ไขได้ก่อนวันที่ 25 เท่านั้น';
  END IF;
  IF p_team_a_color_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.team_colors c WHERE c.id = p_team_a_color_id AND c.event_id = p_event
  ) THEN RAISE EXCEPTION 'ไม่พบสีของทีม A ในกิจกรรมนี้'; END IF;
  IF p_team_b_color_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.team_colors c WHERE c.id = p_team_b_color_id AND c.event_id = p_event
  ) THEN RAISE EXCEPTION 'ไม่พบสีของทีม B ในกิจกรรมนี้'; END IF;

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
    WHERE id = p_match_id AND event_id = p_event AND sport_id = p_sport FOR UPDATE;
    IF v_existing.id IS NULL THEN RAISE EXCEPTION 'ไม่พบคู่แข่งขันที่ต้องการแก้ไข'; END IF;
    IF v_existing.status IN ('live', 'done') OR v_existing.score_a IS NOT NULL
       OR v_existing.score_b IS NOT NULL OR v_existing.winner_team_color_id IS NOT NULL THEN
      RAISE EXCEPTION 'คู่แข่งขันนี้เริ่มบันทึกผลแล้ว จึงแก้คู่แข่งขันหรือเวลาไม่ได้';
    END IF;
    UPDATE public.matches SET
      round = GREATEST(COALESCE(p_round, round), 1), round_name = p_round_name,
      team_a_color_id = p_team_a_color_id, team_b_color_id = p_team_b_color_id,
      scheduled_date = p_scheduled_date, scheduled_time = p_scheduled_time,
      venue = NULLIF(BTRIM(p_venue), ''), note = NULLIF(BTRIM(p_note), ''), updated_at = now()
    WHERE id = p_match_id RETURNING * INTO v_result;
    v_action := 'update';
  END IF;

  INSERT INTO public.sports_competition_schedule_audit
    (event_id, sport_id, match_id, action, old_data, new_data, actor_id)
  VALUES (p_event, p_sport, v_result.id, v_action,
    CASE WHEN v_action = 'update' THEN to_jsonb(v_existing) ELSE NULL END,
    to_jsonb(v_result), auth.uid());
  RETURN v_result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_my_sports_competition_sports(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_manager_workspace(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.upsert_sports_competition_match(UUID, UUID, UUID, INTEGER, TEXT, UUID, UUID, DATE, TIME, TEXT, TEXT) TO authenticated;
