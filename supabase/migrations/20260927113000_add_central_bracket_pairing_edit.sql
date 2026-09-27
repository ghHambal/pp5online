-- Allow the central results desk to correct pending pairings across every sport.
-- Completed/live matches are intentionally protected so changing a pairing cannot
-- silently rewrite an official result or medal record.

CREATE OR REPLACE FUNCTION public.sports_central_update_pairing(
  p_gate_password TEXT,
  p_match_id UUID,
  p_team_a_color_id UUID DEFAULT NULL,
  p_team_b_color_id UUID DEFAULT NULL
)
RETURNS public.matches
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_match public.matches;
  v_result public.matches;
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM private.azizgames_result_override_config c
    WHERE extensions.crypt(coalesce(p_gate_password, ''), c.password_hash) = c.password_hash
  ) THEN
    RAISE EXCEPTION 'รหัสผ่านโหมดกองกลางไม่ถูกต้อง' USING errcode = '42501';
  END IF;

  SELECT * INTO v_match
  FROM public.matches
  WHERE id = p_match_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'ไม่พบคู่แข่งขันที่ต้องการแก้ไข';
  END IF;

  IF coalesce(v_match.status, 'pending') IN ('live', 'done', 'กำลังแข่ง', 'เสร็จสิ้น')
     OR v_match.score_a IS NOT NULL
     OR v_match.score_b IS NOT NULL
     OR v_match.winner_team_color_id IS NOT NULL THEN
    RAISE EXCEPTION 'คู่แข่งขันนี้เริ่มหรือบันทึกผลแล้ว จึงแก้การประกบคู่ไม่ได้';
  END IF;

  IF p_team_a_color_id IS NOT NULL AND p_team_a_color_id = p_team_b_color_id THEN
    RAISE EXCEPTION 'ทีม A และทีม B ต้องเป็นคนละสี';
  END IF;

  IF p_team_a_color_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.team_colors c
    WHERE c.id = p_team_a_color_id AND c.event_id = v_match.event_id
  ) THEN
    RAISE EXCEPTION 'ไม่พบสีของทีม A ในกิจกรรมนี้';
  END IF;

  IF p_team_b_color_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.team_colors c
    WHERE c.id = p_team_b_color_id AND c.event_id = v_match.event_id
  ) THEN
    RAISE EXCEPTION 'ไม่พบสีของทีม B ในกิจกรรมนี้';
  END IF;

  UPDATE public.matches
  SET team_a_color_id = p_team_a_color_id,
      team_b_color_id = p_team_b_color_id,
      updated_at = now()
  WHERE id = p_match_id
  RETURNING * INTO v_result;

  RETURN v_result;
END;
$$;

REVOKE ALL ON FUNCTION public.sports_central_update_pairing(TEXT, UUID, UUID, UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_central_update_pairing(TEXT, UUID, UUID, UUID) TO anon, authenticated;
