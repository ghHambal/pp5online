-- ผู้ได้รับเหรียญของทุกประเภทต้องเป็นนักกีฬาทุกคนที่ลงทะเบียนอยู่ในสีของรายการ
-- รวมถึงตัวสำรอง ไม่จำกัดเฉพาะผู้ที่ปรากฏในผลรายบุคคลหรือผู้เล่นตัวจริง
BEGIN;

CREATE OR REPLACE FUNCTION private.awards_result(p_sport uuid)
RETURNS jsonb
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
SELECT coalesce(jsonb_agg(
  jsonb_build_object(
    'medal', a.medal_type,
    'color_id', a.team_color_id,
    'color', c.name,
    'recipients', (
      SELECT coalesce(jsonb_agg(
        jsonb_build_object(
          'id', st.id,
          'name', st.full_name,
          'room', st.main_room,
          'team', to_jsonb(r)->>'team_label'
        )
        ORDER BY st.id
      ), '[]'::jsonb)
      FROM public.registrations r
      JOIN public.students st ON st.id = r.student_id
      WHERE r.event_id = a.event_id
        AND r.sport_id = a.sport_id
        AND r.team_color_id = a.team_color_id
    )
  )
  ORDER BY CASE a.medal_type WHEN 'gold' THEN 1 WHEN 'silver' THEN 2 ELSE 3 END,
           a.team_color_id
), '[]'::jsonb)
FROM public.medal_awards a
JOIN public.team_colors c ON c.id = a.team_color_id
WHERE a.sport_id = p_sport;
$$;

-- ปรับ snapshot ของรายการที่สรุป/มอบไปแล้วให้มีรายชื่อสมาชิกทีมครบถ้วนด้วย
UPDATE public.sports_award_ceremonies c
SET result_snapshot = private.awards_result(c.sport_id),
    revision = c.revision + 1
WHERE c.result_snapshot IS DISTINCT FROM private.awards_result(c.sport_id);

COMMIT;
