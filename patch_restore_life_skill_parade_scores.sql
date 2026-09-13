-- เติม/ซ่อมคะแนน "เดินสวนสนาม" ปี 2569 ภาค 1 ให้ครบตามห้องปัจจุบัน
-- กติกา: นักเรียนที่อยู่ห้องเดียวกันต้องได้คะแนนเท่ากัน
-- ใช้ค่าฐานนิยมของคะแนนที่ยังสมบูรณ์ในห้องนั้น และใช้ค่าจากชีทเดิมเฉพาะห้องที่ไม่มีค่าฐานเหลืออยู่

WITH parade_col AS (
  SELECT id
  FROM public.life_skill_columns
  WHERE name = 'เดินสวนสนาม'
    AND academic_year = 2569
    AND semester = 1
    AND category = 'สามัญ'
),
room_scores AS (
  SELECT st.main_room, mode() WITHIN GROUP (ORDER BY ls.score) AS score
  FROM public.students st
  JOIN public.life_skill_scores ls
    ON ls.student_id = st.id
   AND ls.column_id = (SELECT id FROM parade_col)
  WHERE st.is_active = true
    AND st.main_room IS NOT NULL
    AND ls.score IS NOT NULL
  GROUP BY st.main_room
),
fallback_scores(main_room, score) AS (
  VALUES
    ('ม.2/15 Alhamdulillah', 9::numeric),
    ('ม.3/15 Alhamdulillah', 9::numeric),
    ('ม.6/0', 9::numeric),
    ('ปวช.3/1', 7::numeric)
),
desired AS (
  SELECT
    st.id AS student_id,
    pc.id AS column_id,
    COALESCE(rs.score, fs.score) AS score
  FROM public.students st
  CROSS JOIN parade_col pc
  LEFT JOIN room_scores rs ON rs.main_room = st.main_room
  LEFT JOIN fallback_scores fs ON fs.main_room = st.main_room
  WHERE st.is_active = true
    AND st.main_room IS NOT NULL
    AND btrim(st.main_room) <> ''
)
INSERT INTO public.life_skill_scores(student_id, column_id, score, updated_by, updated_at)
SELECT student_id, column_id, score, NULL, now()
FROM desired
WHERE score IS NOT NULL
ON CONFLICT (student_id, column_id) DO UPDATE
SET score = EXCLUDED.score,
    updated_by = NULL,
    updated_at = EXCLUDED.updated_at
WHERE public.life_skill_scores.score IS DISTINCT FROM EXCLUDED.score;
