-- เพิ่มรอบวันเข้าสีที่ยังไม่มีข้อมูล โดยไม่สร้างคะแนนหรือหัวข้อปลอม
INSERT INTO public.sports_evaluation_sessions
  (event_id, session_key, session_type, day_no, name, status)
SELECT e.id, v.session_key, 'color_day', v.day_no, v.name, 'upcoming'
FROM (SELECT DISTINCT event_id FROM public.sports_evaluation_sessions) e
CROSS JOIN (VALUES
  ('color_day_2', 2, 'วันเข้าสีครั้งที่ 2'),
  ('color_rehearsal', 3, 'วันซ้อมใหญ่')
) v(session_key, day_no, name)
ON CONFLICT (event_id, session_key) DO NOTHING;
