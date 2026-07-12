-- patch_sports_shirt_vote.sql
-- ระบบโหวตดีไซน์เสื้อกีฬาสี (4 แบบ ใช้ร่วมกันทั้งชายและหญิง)
-- Run AFTER patch_sports_student_team_portal.sql in Supabase SQL Editor.

ALTER TABLE public.sports_portal_settings
  ADD COLUMN IF NOT EXISTS shirt_vote_enabled BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS shirt_vote_opens_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS shirt_vote_closes_at TIMESTAMPTZ;

CREATE TABLE IF NOT EXISTS public.sports_shirt_designs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  design_no INTEGER NOT NULL CHECK (design_no BETWEEN 1 AND 4),
  name TEXT,
  image_url TEXT,
  html_url TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, design_no)
);

CREATE TABLE IF NOT EXISTS public.sports_shirt_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  design_id UUID NOT NULL REFERENCES public.sports_shirt_designs(id) ON DELETE CASCADE,
  voted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, student_id)
);

CREATE TABLE IF NOT EXISTS public.sports_shirt_vote_managers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  teacher_id INTEGER NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  granted_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, teacher_id)
);

CREATE INDEX IF NOT EXISTS idx_shirt_votes_event_design ON public.sports_shirt_votes(event_id, design_id);

CREATE OR REPLACE FUNCTION public.can_view_shirt_vote_dashboard(p_event UUID) RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 SELECT public.is_sports_admin()
 OR EXISTS(SELECT 1 FROM sports_shirt_vote_managers WHERE event_id=p_event AND profile_id=auth.uid()); $$;

CREATE OR REPLACE FUNCTION public.cast_my_shirt_vote(p_event UUID, p_design UUID) RETURNS public.sports_shirt_votes
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_student students%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE; v_design sports_shirt_designs%ROWTYPE; v_row sports_shirt_votes%ROWTYPE;
BEGIN
 SELECT * INTO v_student FROM students WHERE profile_id=auth.uid() AND is_active IS TRUE;
 IF v_student.id IS NULL THEN RAISE EXCEPTION 'student profile not found'; END IF;
 SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=p_event;
 IF NOT COALESCE(v_cfg.shirt_vote_enabled,false) OR (v_cfg.shirt_vote_opens_at IS NOT NULL AND now()<v_cfg.shirt_vote_opens_at) OR (v_cfg.shirt_vote_closes_at IS NOT NULL AND now()>v_cfg.shirt_vote_closes_at) THEN RAISE EXCEPTION 'shirt vote is closed'; END IF;
 SELECT * INTO v_design FROM sports_shirt_designs WHERE id=p_design AND event_id=p_event;
 IF v_design.id IS NULL THEN RAISE EXCEPTION 'invalid design'; END IF;
 INSERT INTO sports_shirt_votes(event_id,student_id,design_id,voted_at,updated_at)
 VALUES(p_event,v_student.id,p_design,now(),now())
 ON CONFLICT(event_id,student_id) DO UPDATE SET design_id=excluded.design_id,updated_at=now()
 RETURNING * INTO v_row; RETURN v_row;
END $$;

ALTER TABLE public.sports_shirt_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_shirt_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_shirt_vote_managers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "shirt_designs_read" ON public.sports_shirt_designs;
DROP POLICY IF EXISTS "shirt_designs_admin" ON public.sports_shirt_designs;
DROP POLICY IF EXISTS "shirt_votes_self_read" ON public.sports_shirt_votes;
DROP POLICY IF EXISTS "shirt_vote_managers_admin" ON public.sports_shirt_vote_managers;

CREATE POLICY "shirt_designs_read" ON public.sports_shirt_designs FOR SELECT TO authenticated USING(true);
CREATE POLICY "shirt_designs_admin" ON public.sports_shirt_designs FOR ALL TO authenticated USING(public.is_sports_admin()) WITH CHECK(public.is_sports_admin());
CREATE POLICY "shirt_votes_self_read" ON public.sports_shirt_votes FOR SELECT TO authenticated USING(
  student_id IN (SELECT id FROM students WHERE profile_id=auth.uid())
  OR public.can_view_shirt_vote_dashboard(event_id)
);
CREATE POLICY "shirt_vote_managers_admin" ON public.sports_shirt_vote_managers FOR ALL TO authenticated USING(public.is_sports_admin()) WITH CHECK(public.is_sports_admin());

GRANT SELECT ON public.sports_shirt_designs, public.sports_shirt_votes, public.sports_shirt_vote_managers TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.sports_shirt_designs, public.sports_shirt_vote_managers TO authenticated;
GRANT EXECUTE ON FUNCTION public.cast_my_shirt_vote(UUID,UUID), public.can_view_shirt_vote_dashboard(UUID) TO authenticated;

-- Storage bucket สำหรับรูป PNG และไฟล์ HTML (3D viewer) ของแบบเสื้อ
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('shirt-designs', 'shirt-designs', true, 5242880, ARRAY['image/png','image/jpeg','image/webp','text/html'])
ON CONFLICT (id) DO UPDATE SET public = true, file_size_limit = 5242880;

DROP POLICY IF EXISTS "shirt-designs public read" ON storage.objects;
CREATE POLICY "shirt-designs public read" ON storage.objects FOR SELECT TO public USING (bucket_id = 'shirt-designs');

DROP POLICY IF EXISTS "shirt-designs admin write" ON storage.objects;
CREATE POLICY "shirt-designs admin write" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'shirt-designs' AND public.is_sports_admin());

DROP POLICY IF EXISTS "shirt-designs admin update" ON storage.objects;
CREATE POLICY "shirt-designs admin update" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'shirt-designs' AND public.is_sports_admin()) WITH CHECK (bucket_id = 'shirt-designs' AND public.is_sports_admin());

DROP POLICY IF EXISTS "shirt-designs admin delete" ON storage.objects;
CREATE POLICY "shirt-designs admin delete" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'shirt-designs' AND public.is_sports_admin());

-- สร้าง 4 แบบเสื้อเปล่าให้ event ที่ active อยู่ (แอดมินค่อยอัปโหลดรูปทีหลัง)
INSERT INTO public.sports_shirt_designs(event_id, design_no, name, display_order)
SELECT e.id, n, 'แบบที่ ' || n, n
FROM public.events e, generate_series(1,4) AS n
WHERE e.status = 'active'
ON CONFLICT (event_id, design_no) DO NOTHING;
