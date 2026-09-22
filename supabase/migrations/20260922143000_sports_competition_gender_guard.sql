-- Keep schedule pairings gender-safe in the shared AZIZGAMES matches table.
-- The UI filters the colors for convenience; this RPC guard is authoritative.

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

  IF v_sport.gender IS NOT NULL AND v_sport.gender <> 'Coed' THEN
    IF p_team_a_color_id IS NOT NULL AND NOT EXISTS (
      SELECT 1 FROM public.team_colors c
      WHERE c.id = p_team_a_color_id AND c.event_id = p_event
        AND (c.gender = v_sport.gender OR c.gender = 'Coed')
    ) THEN
      RAISE EXCEPTION 'สีทีม A ไม่ตรงกับเพศของรายการแข่งขัน';
    END IF;
    IF p_team_b_color_id IS NOT NULL AND NOT EXISTS (
      SELECT 1 FROM public.team_colors c
      WHERE c.id = p_team_b_color_id AND c.event_id = p_event
        AND (c.gender = v_sport.gender OR c.gender = 'Coed')
    ) THEN
      RAISE EXCEPTION 'สีทีม B ไม่ตรงกับเพศของรายการแข่งขัน';
    END IF;
  ELSE
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

GRANT EXECUTE ON FUNCTION public.upsert_sports_competition_match(UUID, UUID, UUID, INTEGER, TEXT, UUID, UUID, DATE, TIME, TEXT, TEXT) TO authenticated;
