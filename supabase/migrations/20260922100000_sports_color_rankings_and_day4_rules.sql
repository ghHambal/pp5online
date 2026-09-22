-- จัดโครงสร้างการประเมินวันกีฬาสีจริงวันที่ 4 และเพิ่มคะแนนแยกหมวดใน color_totals
-- ใช้ view เดียวกันทั้ง AZIZGAMES, หน้าจัดการสีของฉัน และหน้าประเมินสี

-- วันกีฬาสีจริงวันที่ 4 ใช้เฉพาะอีบาดัตและการเข้าแถว/เช็คชื่อ
UPDATE public.sports_score_criteria c
SET is_active = false
FROM public.sports_evaluation_sessions s
WHERE c.session_id = s.id
  AND s.session_type = 'sports_day'
  AND s.day_no = 4
  AND c.category = 'sports_day'
  AND c.group_key IN ('athlete', 'staff', 'cleanliness', 'supporters');

-- ย้ายหัวข้อวันเปิดฯ จากกองเชียร์มาอยู่ในการเข้าแถว/เช็คชื่อ
UPDATE public.sports_score_criteria c
SET group_key = 'morning_attendance',
    group_name = 'การเข้าแถวตอนเช้า / การเช็คชื่อ',
    is_active = true
FROM public.sports_evaluation_sessions s
WHERE c.session_id = s.id
  AND s.session_type = 'sports_day'
  AND s.day_no = 4
  AND c.category = 'sports_day'
  AND c.name ILIKE 'วันเปิด%';

CREATE OR REPLACE VIEW public.color_totals AS
WITH medal_totals AS (
  SELECT
    ma.event_id,
    ma.team_color_id,
    count(*) FILTER (WHERE ma.medal_type = 'gold') AS gold_count,
    count(*) FILTER (WHERE ma.medal_type = 'silver') AS silver_count,
    count(*) FILTER (WHERE ma.medal_type = 'bronze') AS bronze_count,
    COALESCE(sum(ma.points), 0)::bigint AS medal_points,
    COALESCE(sum(ma.points) FILTER (
      WHERE upper(left(COALESCE(s.code, ''), 2)) IN ('SP', 'AT')
    ), 0)::numeric AS sports_total,
    COALESCE(sum(ma.points) FILTER (
      WHERE upper(left(COALESCE(s.code, ''), 2)) = 'FK'
    ), 0)::numeric AS folk_skill_total
  FROM public.medal_awards ma
  LEFT JOIN public.sports s ON s.id = ma.sport_id
  GROUP BY ma.event_id, ma.team_color_id
),
legacy_totals AS (
  SELECT
    cs.event_id,
    cs.team_color_id,
    COALESCE(sum(cs.points) FILTER (
      WHERE COALESCE(sc.group_name, sc.name) IN ('academic', 'วิชาการ')
    ), 0)::numeric AS academic_total,
    COALESCE(sum(cs.points) FILTER (
      WHERE COALESCE(sc.group_name, sc.name) IN ('sport', 'กีฬา')
    ), 0)::numeric AS sport_score_total
  FROM public.color_scores cs
  LEFT JOIN public.score_categories sc ON sc.id = cs.category_id
  GROUP BY cs.event_id, cs.team_color_id
),
judge_avg AS (
  SELECT
    e.criteria_id,
    e.team_color_id,
    avg(e.score) AS avg_score
  FROM public.sports_score_entries e
  GROUP BY e.criteria_id, e.team_color_id
),
judge_totals AS (
  SELECT
    sc.event_id,
    ja.team_color_id,
    COALESCE(sum(ja.avg_score) FILTER (
      WHERE sc.category = 'parade'
        AND COALESCE(sc.is_active, true)
    ), 0)::numeric AS parade_total,
    COALESCE(sum(ja.avg_score) FILTER (
      WHERE sc.category = 'page'
        AND COALESCE(sc.is_active, true)
    ), 0)::numeric AS page_total,
    COALESCE(sum(ja.avg_score) FILTER (
      WHERE sc.category = 'color_eval'
        AND COALESCE(sc.is_active, true)
    ), 0)::numeric AS color_eval_total,
    COALESCE(sum(ja.avg_score) FILTER (
      WHERE sc.category = 'sports_day'
        AND sc.group_key = 'worship'
        AND s.session_type = 'sports_day'
        AND s.day_no = 4
        AND COALESCE(sc.is_active, true)
    ), 0)::numeric AS ibadat_total
  FROM public.sports_score_criteria sc
  LEFT JOIN public.sports_evaluation_sessions s ON s.id = sc.session_id
  JOIN judge_avg ja ON ja.criteria_id = sc.id
  GROUP BY sc.event_id, ja.team_color_id
)
SELECT
  tc.id AS team_color_id,
  tc.event_id,
  tc.name AS color_name,
  tc.gender,
  COALESCE(jt.parade_total, 0)::numeric AS parade_total,
  COALESCE(lt.academic_total, 0)::numeric AS academic_total,
  COALESCE(lt.sport_score_total, 0)::numeric AS sport_score_total,
  COALESCE(jt.page_total, 0)::numeric AS page_total,
  COALESCE(mt.gold_count, 0)::bigint AS gold_count,
  COALESCE(mt.silver_count, 0)::bigint AS silver_count,
  COALESCE(mt.bronze_count, 0)::bigint AS bronze_count,
  COALESCE(mt.medal_points, 0)::bigint AS medal_points,
  (
    COALESCE(jt.parade_total, 0)
    + COALESCE(lt.academic_total, 0)
    + COALESCE(lt.sport_score_total, 0)
    + COALESCE(jt.page_total, 0)
    + COALESCE(jt.color_eval_total, 0)
    + COALESCE(jt.ibadat_total, 0)
    + COALESCE(mt.medal_points, 0)::numeric
  )::numeric AS grand_total,
  COALESCE(jt.color_eval_total, 0)::numeric AS color_eval_total,
  COALESCE(mt.sports_total, 0)::numeric AS sports_total,
  COALESCE(mt.folk_skill_total, 0)::numeric AS folk_skill_total,
  COALESCE(jt.ibadat_total, 0)::numeric AS ibadat_total
FROM public.team_colors tc
LEFT JOIN medal_totals mt
  ON mt.event_id = tc.event_id
 AND mt.team_color_id = tc.id
LEFT JOIN legacy_totals lt
  ON lt.event_id = tc.event_id
 AND lt.team_color_id = tc.id
LEFT JOIN judge_totals jt
  ON jt.event_id = tc.event_id
 AND jt.team_color_id = tc.id;
