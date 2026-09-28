-- อนุญาตแอดมินและกรรมการกองกลาง ag2026 ให้ดูภาพรวมรายการแข่งขัน
BEGIN;

DROP FUNCTION IF EXISTS public.sports_admin_competition_overview(uuid);

CREATE OR REPLACE FUNCTION public.sports_admin_competition_overview(
  p_event uuid DEFAULT NULL,
  p_session_token text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_event uuid := p_event;
  v_official uuid;
BEGIN
  v_official := private.azizgames_official_for_token(p_session_token);

  IF NOT private.awards_admin()
     AND NOT EXISTS (
       SELECT 1
       FROM public.sports_officials o
       WHERE o.id = v_official
         AND lower(o.username) = 'ag2026'
         AND o.status = 'approved'
     ) THEN
    RAISE EXCEPTION 'เฉพาะแอดมินหรือกรรมการกองกลางเท่านั้นที่ดูภาพรวมรายการแข่งขันได้' USING errcode = '42501';
  END IF;

  IF v_event IS NULL THEN
    SELECT id INTO v_event
    FROM public.events
    WHERE status = 'active'
    ORDER BY academic_year DESC
    LIMIT 1;
  END IF;

  RETURN jsonb_build_object(
    'event_id', v_event,
    'rows', (
      SELECT coalesce(jsonb_agg(
        jsonb_build_object(
          'id', s.id,
          'match_id', (
            SELECT m.id FROM public.matches m
            WHERE m.event_id = s.event_id AND m.sport_id = s.id
            ORDER BY m.round NULLS LAST, m.id LIMIT 1
          ),
          'name', s.name,
          'gender', s.gender,
          'level', s.education_level,
          'format', s.result_format,
          'bracket_template', s.bracket_template,
          'match_total', (
            SELECT count(*)::integer FROM public.matches m
            WHERE m.event_id = s.event_id AND m.sport_id = s.id
          ),
          'match_done', (
            SELECT count(*)::integer FROM public.matches m
            WHERE m.event_id = s.event_id AND m.sport_id = s.id AND m.status = 'done'
          ),
          'medal_types', (
            SELECT count(DISTINCT a.medal_type)::integer FROM public.medal_awards a
            WHERE a.sport_id = s.id
          ),
          'finished', (
            SELECT count(DISTINCT a.medal_type) = 3 FROM public.medal_awards a
            WHERE a.sport_id = s.id
          ),
          'medals', (
            SELECT coalesce(jsonb_agg(
              jsonb_build_object(
                'medal', a.medal_type,
                'color_id', a.team_color_id,
                'color', c.name,
                'logo_url', to_jsonb(c)->>'logo_url'
              )
              ORDER BY CASE a.medal_type WHEN 'gold' THEN 1 WHEN 'silver' THEN 2 WHEN 'bronze' THEN 3 ELSE 4 END, c.name
            ), '[]'::jsonb)
            FROM public.medal_awards a
            LEFT JOIN public.team_colors c ON c.id = a.team_color_id
            WHERE a.sport_id = s.id
          ),
          'sent', c.sport_id IS NOT NULL,
          'sent_revision', coalesce(c.revision, 0),
          'changed_after_send', c.sport_id IS NOT NULL
            AND c.result_snapshot IS DISTINCT FROM private.awards_result(s.id),
          'delivered_at', c.delivered_at,
          'photos', (
            SELECT coalesce(jsonb_agg(jsonb_build_object('id', p.id, 'url', p.photo_url)), '[]'::jsonb)
            FROM public.sports_gallery_photos p
            WHERE p.sport_id = s.id AND p.custom_label = 'พิธีมอบเหรียญ'
          )
        )
        ORDER BY CASE s.gender WHEN 'M' THEN 1 WHEN 'W' THEN 2 ELSE 3 END, s.name
      ), '[]'::jsonb)
      FROM public.sports s
      LEFT JOIN public.sports_award_ceremonies c ON c.sport_id = s.id
      WHERE s.event_id = v_event AND s.is_active IS TRUE
    )
  );
END;
$$;

REVOKE ALL ON FUNCTION public.sports_admin_competition_overview(uuid, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_admin_competition_overview(uuid, text) TO anon, authenticated;

NOTIFY pgrst, 'reload schema';
COMMIT;
