-- PP5 Online: เช็คชื่อนักกีฬาเข้าค่ายสี/วันงานกีฬาสีจริง ผ่านสแกน QR ประจำตัวนักเรียน
-- (สแกนโดยพ่อสี/แม่สี ครูประจำสี หรือนักเรียนสต๊าฟที่ได้รับมอบสิทธิ์ "attendance")
-- Re-runnable patch: safe to run again. Run AFTER patch_sports_student_team_portal.sql

CREATE TABLE IF NOT EXISTS public.sports_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  session_date DATE NOT NULL DEFAULT CURRENT_DATE,
  session_type TEXT NOT NULL DEFAULT 'pre_event' CHECK(session_type IN ('pre_event','event_day')),
  method TEXT NOT NULL DEFAULT 'qr' CHECK(method IN ('qr','manual')),
  scanned_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(),
  scanned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, student_id, session_date)
);

CREATE INDEX IF NOT EXISTS idx_sports_attendance_team_date ON public.sports_attendance(team_color_id, session_date);
CREATE INDEX IF NOT EXISTS idx_sports_attendance_student ON public.sports_attendance(student_id);

-- อนุญาตให้พ่อสี/แม่สีมอบสิทธิ์ "attendance" ให้นักเรียนสต๊าฟได้เพิ่มเติมจาก 5 สิทธิ์เดิม
-- (สมาชิกเดิมก่อนหน้านี้ไม่มีคีย์นี้ในคอลัมน์ permissions — ฝั่ง client เช็คด้วย `!== false`
-- ทุกจุดอยู่แล้ว จึงถือว่า "เปิดใช้งาน" โดยปริยายสำหรับสมาชิกเดิม ไม่ต้อง backfill คอลัมน์)
ALTER TABLE public.sports_team_memberships
  ALTER COLUMN permissions SET DEFAULT '{"members":true,"registrations":true,"announcements":true,"tasks":true,"shirt_summary":true,"attendance":true}'::jsonb;

CREATE OR REPLACE FUNCTION public.is_student_in_sports_team(p_team UUID, p_student INTEGER) RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 SELECT EXISTS(
   SELECT 1 FROM students s LEFT JOIN team_colors c ON c.id=p_team
   WHERE s.id=p_student AND s.is_active IS TRUE AND (s.team_color_id=p_team OR s.house_color=c.name)
 );
$$;

ALTER TABLE public.sports_attendance ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "attendance_scope" ON public.sports_attendance;
CREATE POLICY "attendance_scope" ON public.sports_attendance FOR ALL TO authenticated
  USING (public.is_team_member(team_color_id,'attendance'))
  WITH CHECK (public.is_team_member(team_color_id,'attendance') AND public.is_student_in_sports_team(team_color_id,student_id));

GRANT SELECT, INSERT, UPDATE, DELETE ON public.sports_attendance TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_student_in_sports_team(UUID,INTEGER) TO authenticated;
