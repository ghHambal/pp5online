-- เติมผู้รับผิดชอบหลักจากเอกสารรายชื่อคณะกรรมการกีฬา
-- ใช้ teacher_code เป็นตัวอ้างอิงครูในระบบ ปพ.5 แทนการฝัง profile UUID
-- และเติมเฉพาะรายการที่ยังไม่มีผู้รับผิดชอบเท่านั้น

WITH assignments (sport_code, teacher_code) AS (
  VALUES
    ('SP013', '2059'), ('SP014', '2059'),
    ('AT044', '1075'), ('AT046', '1075'), ('AT048', '1075'), ('AT050', '1075'),
    ('SP035', '1039'), ('SP036', '1039'), ('SP037', '1039'), ('SP038', '1039'),
    ('SP039', '1039'), ('SP040', '1039'), ('SP041', '1039'), ('SP042', '1039'),
    ('FK071', '1021'),
    ('FK095', '2016'), ('FK096', '2016'), ('FK097', '2016'),
    ('FK098', '2016'), ('FK099', '2016'), ('FK100', '2016'),
    ('FK073', '1079')
)
UPDATE public.sports AS s
SET responsible_teacher_id = t.profile_id
FROM assignments AS a
JOIN public.teachers AS t
  ON t.teacher_code = a.teacher_code
 AND t.profile_id IS NOT NULL
WHERE s.code = a.sport_code
  AND s.event_id IN (
    SELECT e.id
    FROM public.events AS e
    WHERE e.academic_year = 2569
      AND e.status = 'active'
  )
  AND s.is_active IS TRUE
  AND s.responsible_teacher_id IS NULL;
