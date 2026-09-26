-- แก้รายชื่อผู้ได้รับรางวัลของรายการประเภททีม/ทีมคู่
-- ไม่เพิ่มข้อมูลซ้ำใน race_results เพราะ race_results ใช้จัดอันดับผลการแข่งขัน
-- และต้องเก็บผู้ทำผล/ตัวแทนที่บันทึกไว้เพียงรายการเดียวต่อสี
CREATE OR REPLACE FUNCTION private.awards_result(p_sport uuid) RETURNS jsonb
LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
SELECT coalesce(jsonb_agg(jsonb_build_object(
  'medal', a.medal_type,
  'color_id', a.team_color_id,
  'color', c.name,
  'recipients',
  CASE
    -- รายการเหล่านี้เป็นทีม/ทีมคู่ แม้ใช้ result_format แบบเวลา/คะแนน
    -- จึงต้องมอบเหรียญให้สมาชิกทุกคนในทะเบียนของสีที่ได้รางวัล
    WHEN s.result_format IN ('timed_race','scored_contest')
      AND s.name ~ '(4x100|4x200|วิ่งกระสอบ|วิ่งผลัดสามขา|วิ่งสามขา|เอแมท|ยิงธนู\(คู่\))'
    THEN (
      SELECT coalesce(jsonb_agg(jsonb_build_object(
        'id', st.id,
        'name', st.full_name,
        'room', st.main_room,
        'team', to_jsonb(r)->>'team_label'
      ) ORDER BY st.id), '[]'::jsonb)
      FROM public.registrations r
      JOIN public.students st ON st.id=r.student_id
      WHERE r.event_id=a.event_id
        AND r.sport_id=a.sport_id
        AND r.team_color_id=a.team_color_id
    )
    WHEN s.result_format IN ('timed_race','scored_contest') THEN (
      SELECT coalesce(jsonb_agg(jsonb_build_object(
        'id', r.student_id,
        'name', st.full_name,
        'room', st.main_room
      ) ORDER BY r.rn), '[]'::jsonb)
      FROM (
        SELECT rr.*, row_number() OVER (
          ORDER BY CASE WHEN s.sort_direction='desc' THEN -rr.value ELSE rr.value END, rr.id
        ) rn
        FROM public.race_results rr
        WHERE rr.sport_id=s.id
          AND rr.round='final'
          AND rr.value IS NOT NULL
      ) r
      JOIN public.students st ON st.id=r.student_id
      WHERE r.rn=CASE a.medal_type WHEN 'gold' THEN 1 WHEN 'silver' THEN 2 ELSE 3 END
        AND r.team_color_id=a.team_color_id
        AND NOT EXISTS (
          SELECT 1
          FROM public.race_results tied
          WHERE tied.sport_id=s.id
            AND tied.round='final'
            AND tied.value=r.value
            AND tied.student_id<>r.student_id
        )
    )
    ELSE (
      SELECT coalesce(jsonb_agg(jsonb_build_object(
        'id', st.id,
        'name', st.full_name,
        'room', st.main_room,
        'team', to_jsonb(r)->>'team_label'
      ) ORDER BY st.id), '[]'::jsonb)
      FROM public.registrations r
      JOIN public.students st ON st.id=r.student_id
      WHERE r.event_id=a.event_id
        AND r.sport_id=a.sport_id
        AND r.team_color_id=a.team_color_id
    )
  END
) ORDER BY CASE a.medal_type WHEN 'gold' THEN 1 WHEN 'silver' THEN 2 ELSE 3 END,a.team_color_id), '[]'::jsonb)
FROM public.medal_awards a
JOIN public.sports s ON s.id=a.sport_id
JOIN public.team_colors c ON c.id=a.team_color_id
WHERE a.sport_id=p_sport;
$$;

-- หากมี snapshot พิธีมอบที่สร้างไว้ก่อนแก้ไข ให้ใช้รายชื่อทีมฉบับเต็มด้วย
UPDATE public.sports_award_ceremonies c
SET result_snapshot=private.awards_result(c.sport_id)
FROM public.sports s
WHERE c.sport_id=s.id
  AND s.name ~ '(4x100|4x200|วิ่งกระสอบ|วิ่งผลัดสามขา|วิ่งสามขา|เอแมท|ยิงธนู\(คู่\))';
