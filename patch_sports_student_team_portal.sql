-- PP5 Online: student sports portal, shirt-size approval, and team workspace.
-- Run AFTER patch_sports_module.sql in Supabase SQL Editor.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

ALTER TABLE public.team_colors
  ADD COLUMN IF NOT EXISTS motto TEXT,
  ADD COLUMN IF NOT EXISTS mascot TEXT,
  ADD COLUMN IF NOT EXISTS secondary_color TEXT,
  ADD COLUMN IF NOT EXISTS cover_image_url TEXT;

CREATE TABLE IF NOT EXISTS public.sports_portal_settings (
  event_id UUID PRIMARY KEY REFERENCES public.events(id) ON DELETE CASCADE,
  student_portal_enabled BOOLEAN NOT NULL DEFAULT true,
  shirt_request_enabled BOOLEAN NOT NULL DEFAULT false,
  shirt_summary_enabled BOOLEAN NOT NULL DEFAULT true,
  team_workspace_enabled BOOLEAN NOT NULL DEFAULT true,
  shirt_request_opens_at TIMESTAMPTZ,
  shirt_request_closes_at TIMESTAMPTZ,
  allowed_sizes TEXT[] NOT NULL DEFAULT ARRAY['S','M','L','XL','2XL','3XL'],
  updated_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.sports_shirt_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  requested_size TEXT,
  confirmed_size TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','confirmed','advisor_updated')),
  requested_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  requested_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  confirmed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  confirmed_at TIMESTAMPTZ,
  advisor_note TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, student_id)
);

CREATE TABLE IF NOT EXISTS public.sports_team_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  teacher_id INTEGER REFERENCES public.teachers(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES public.students(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('lead_teacher','teacher','staff_lead','staff')),
  permissions JSONB NOT NULL DEFAULT '{"members":true,"registrations":true,"announcements":true,"tasks":true,"shirt_summary":true}'::jsonb,
  is_active BOOLEAN NOT NULL DEFAULT true,
  starts_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ends_at TIMESTAMPTZ,
  appointed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, team_color_id, profile_id)
);

CREATE TABLE IF NOT EXISTS public.sports_team_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  title TEXT NOT NULL, detail TEXT, status TEXT NOT NULL DEFAULT 'todo' CHECK(status IN ('todo','doing','review','done')),
  priority TEXT NOT NULL DEFAULT 'normal' CHECK(priority IN ('low','normal','high')),
  due_at TIMESTAMPTZ, assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(), created_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.sports_team_announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  title TEXT NOT NULL, body TEXT, target_group TEXT NOT NULL DEFAULT 'all', is_pinned BOOLEAN NOT NULL DEFAULT false,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(), created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.sports_team_identity_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  proposed_logo_url TEXT, proposed_name TEXT, proposed_motto TEXT, proposed_mascot TEXT,
  proposed_hex_color TEXT, proposed_secondary_color TEXT, proposed_cover_image_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','pending_lead','returned','pending_admin','approved','rejected','cancelled')),
  submitted_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(), submitted_at TIMESTAMPTZ,
  lead_reviewed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL, lead_reviewed_at TIMESTAMPTZ, lead_comment TEXT,
  admin_reviewed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL, admin_reviewed_at TIMESTAMPTZ, admin_comment TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.sports_audit_log (
  id BIGSERIAL PRIMARY KEY, event_id UUID, entity_type TEXT NOT NULL, entity_id TEXT,
  action TEXT NOT NULL, old_data JSONB, new_data JSONB, actor_id UUID DEFAULT auth.uid(), created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_shirt_requests_student ON public.sports_shirt_requests(student_id);
CREATE INDEX IF NOT EXISTS idx_shirt_requests_event_status ON public.sports_shirt_requests(event_id,status);
CREATE INDEX IF NOT EXISTS idx_team_memberships_profile ON public.sports_team_memberships(profile_id,is_active);

CREATE OR REPLACE FUNCTION public.is_sports_admin() RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 SELECT EXISTS(SELECT 1 FROM profiles WHERE id=auth.uid() AND (role='admin' OR is_also_admin IS TRUE)); $$;

CREATE OR REPLACE FUNCTION public.is_team_member(p_team UUID, p_permission TEXT DEFAULT NULL) RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 SELECT public.is_sports_admin() OR EXISTS(SELECT 1 FROM sports_team_memberships m WHERE m.profile_id=auth.uid() AND m.team_color_id=p_team AND m.is_active AND (m.ends_at IS NULL OR m.ends_at>now()) AND (p_permission IS NULL OR COALESCE((m.permissions->>p_permission)::boolean,false))); $$;

CREATE OR REPLACE FUNCTION public.can_view_sports_shirt_summary() RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 SELECT public.is_sports_admin()
 OR EXISTS(SELECT 1 FROM sports_team_memberships WHERE profile_id=auth.uid() AND is_active AND COALESCE((permissions->>'shirt_summary')::boolean,false))
 OR EXISTS(SELECT 1 FROM teachers t JOIN role_permissions rp ON rp.position=ANY(COALESCE(t.positions,ARRAY[t.position])) WHERE t.profile_id=auth.uid() AND rp.feature='menu_sports_admin' AND rp.allowed); $$;

CREATE OR REPLACE FUNCTION public.request_my_sports_shirt_size(p_event UUID,p_size TEXT) RETURNS public.sports_shirt_requests
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_student students%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE; v_row sports_shirt_requests%ROWTYPE;
BEGIN
 SELECT * INTO v_student FROM students WHERE profile_id=auth.uid() AND is_active IS TRUE;
 IF v_student.id IS NULL THEN RAISE EXCEPTION 'student profile not found'; END IF;
 SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=p_event;
 IF NOT COALESCE(v_cfg.shirt_request_enabled,false) OR (v_cfg.shirt_request_opens_at IS NOT NULL AND now()<v_cfg.shirt_request_opens_at) OR (v_cfg.shirt_request_closes_at IS NOT NULL AND now()>v_cfg.shirt_request_closes_at) THEN RAISE EXCEPTION 'shirt request is closed'; END IF;
 IF NOT (p_size=ANY(v_cfg.allowed_sizes)) THEN RAISE EXCEPTION 'invalid shirt size'; END IF;
 INSERT INTO sports_shirt_requests(event_id,student_id,requested_size,status,requested_by,requested_at,confirmed_size,confirmed_by,confirmed_at,updated_at)
 VALUES(p_event,v_student.id,p_size,'pending',auth.uid(),now(),NULL,NULL,NULL,now())
 ON CONFLICT(event_id,student_id) DO UPDATE SET requested_size=excluded.requested_size,status='pending',requested_by=auth.uid(),requested_at=now(),confirmed_size=NULL,confirmed_by=NULL,confirmed_at=NULL,updated_at=now()
 RETURNING * INTO v_row; RETURN v_row;
END $$;

CREATE OR REPLACE FUNCTION public.advisor_confirm_sports_shirt(p_event UUID,p_student INTEGER,p_size TEXT,p_note TEXT DEFAULT NULL) RETURNS public.sports_shirt_requests
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_student students%ROWTYPE; v_teacher INTEGER; v_allowed BOOLEAN; v_row sports_shirt_requests%ROWTYPE;
BEGIN
 SELECT id INTO v_teacher FROM teachers WHERE profile_id=auth.uid(); SELECT * INTO v_student FROM students WHERE id=p_student;
 SELECT EXISTS(SELECT 1 FROM homeroom_teachers h WHERE h.teacher_id=v_teacher AND h.category='สามัญ' AND h.main_room=v_student.main_room) OR public.is_sports_admin() INTO v_allowed;
 IF NOT v_allowed THEN RAISE EXCEPTION 'not this student advisor'; END IF;
 INSERT INTO sports_shirt_requests(event_id,student_id,requested_size,confirmed_size,status,requested_by,confirmed_by,confirmed_at,advisor_note,updated_at)
 VALUES(p_event,p_student,p_size,p_size,'advisor_updated',auth.uid(),auth.uid(),now(),p_note,now())
 ON CONFLICT(event_id,student_id) DO UPDATE SET requested_size=COALESCE(sports_shirt_requests.requested_size,p_size),confirmed_size=p_size,status=CASE WHEN sports_shirt_requests.requested_size=p_size THEN 'confirmed' ELSE 'advisor_updated' END,confirmed_by=auth.uid(),confirmed_at=now(),advisor_note=p_note,updated_at=now()
 RETURNING * INTO v_row;
 UPDATE students SET sports_shirt_size=p_size,shirt_size=p_size WHERE id=p_student; RETURN v_row;
END $$;

CREATE OR REPLACE FUNCTION public.review_team_identity(p_request UUID,p_decision TEXT,p_comment TEXT DEFAULT NULL) RETURNS public.sports_team_identity_requests
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE r sports_team_identity_requests%ROWTYPE; is_lead BOOLEAN; is_admin BOOLEAN;
BEGIN
 SELECT * INTO r FROM sports_team_identity_requests WHERE id=p_request FOR UPDATE; IF r.id IS NULL THEN RAISE EXCEPTION 'request not found'; END IF;
 is_admin:=public.is_sports_admin();
 SELECT EXISTS(SELECT 1 FROM sports_team_memberships WHERE profile_id=auth.uid() AND team_color_id=r.team_color_id AND role='lead_teacher' AND is_active) INTO is_lead;
 IF r.status='pending_lead' THEN
   IF NOT is_lead OR r.submitted_by=auth.uid() THEN RAISE EXCEPTION 'lead approval required and self approval is not allowed'; END IF;
   UPDATE sports_team_identity_requests SET status=CASE WHEN p_decision='approve' THEN 'pending_admin' WHEN p_decision='return' THEN 'returned' ELSE 'rejected' END,lead_reviewed_by=auth.uid(),lead_reviewed_at=now(),lead_comment=p_comment,updated_at=now() WHERE id=p_request RETURNING * INTO r;
 ELSIF r.status='pending_admin' THEN
   IF NOT is_admin THEN RAISE EXCEPTION 'admin approval required'; END IF;
   IF p_decision='approve' THEN
     UPDATE team_colors SET logo_url=COALESCE(r.proposed_logo_url,logo_url),name=COALESCE(r.proposed_name,name),motto=COALESCE(r.proposed_motto,motto),mascot=COALESCE(r.proposed_mascot,mascot),hex_color=COALESCE(r.proposed_hex_color,hex_color),secondary_color=COALESCE(r.proposed_secondary_color,secondary_color),cover_image_url=COALESCE(r.proposed_cover_image_url,cover_image_url) WHERE id=r.team_color_id;
   END IF;
   UPDATE sports_team_identity_requests SET status=CASE WHEN p_decision='approve' THEN 'approved' WHEN p_decision='return' THEN 'returned' ELSE 'rejected' END,admin_reviewed_by=auth.uid(),admin_reviewed_at=now(),admin_comment=p_comment,updated_at=now() WHERE id=p_request RETURNING * INTO r;
 ELSE RAISE EXCEPTION 'request is not reviewable'; END IF; RETURN r;
END $$;

ALTER TABLE public.sports_portal_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_shirt_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_team_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_team_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_team_announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_team_identity_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "sports_portal_settings_read" ON public.sports_portal_settings FOR SELECT TO authenticated USING(true);
CREATE POLICY "sports_portal_settings_admin" ON public.sports_portal_settings FOR ALL TO authenticated USING(public.is_sports_admin()) WITH CHECK(public.is_sports_admin());
CREATE POLICY "shirt_self_read" ON public.sports_shirt_requests FOR SELECT TO authenticated USING(student_id IN(SELECT id FROM students WHERE profile_id=auth.uid()) OR public.can_view_sports_shirt_summary() OR student_id IN(SELECT s.id FROM students s JOIN teachers t ON t.profile_id=auth.uid() JOIN homeroom_teachers h ON h.teacher_id=t.id AND h.category='สามัญ' AND h.main_room=s.main_room));
CREATE POLICY "team_membership_read" ON public.sports_team_memberships FOR SELECT TO authenticated USING(profile_id=auth.uid() OR public.is_sports_admin() OR public.is_team_member(team_color_id));
CREATE POLICY "team_membership_admin" ON public.sports_team_memberships FOR ALL TO authenticated USING(public.is_sports_admin()) WITH CHECK(public.is_sports_admin());
CREATE POLICY "team_tasks_scope" ON public.sports_team_tasks FOR ALL TO authenticated USING(public.is_team_member(team_color_id,'tasks')) WITH CHECK(public.is_team_member(team_color_id,'tasks'));
CREATE POLICY "team_ann_scope" ON public.sports_team_announcements FOR ALL TO authenticated USING(public.is_team_member(team_color_id,'announcements')) WITH CHECK(public.is_team_member(team_color_id,'announcements'));
CREATE POLICY "identity_scope_read" ON public.sports_team_identity_requests FOR SELECT TO authenticated USING(public.is_team_member(team_color_id) OR public.is_sports_admin());
CREATE POLICY "identity_scope_insert" ON public.sports_team_identity_requests FOR INSERT TO authenticated WITH CHECK(public.is_team_member(team_color_id));
CREATE POLICY "identity_scope_update" ON public.sports_team_identity_requests FOR UPDATE TO authenticated USING(public.is_team_member(team_color_id) OR public.is_sports_admin());
CREATE POLICY "audit_admin_read" ON public.sports_audit_log FOR SELECT TO authenticated USING(public.is_sports_admin());

GRANT SELECT ON public.sports_portal_settings,public.sports_shirt_requests,public.sports_team_memberships,public.sports_team_tasks,public.sports_team_announcements,public.sports_team_identity_requests TO authenticated;
GRANT INSERT,UPDATE,DELETE ON public.sports_portal_settings,public.sports_team_memberships TO authenticated;
GRANT INSERT,UPDATE,DELETE ON public.sports_team_tasks,public.sports_team_announcements,public.sports_team_identity_requests TO authenticated;
GRANT EXECUTE ON FUNCTION public.request_my_sports_shirt_size(UUID,TEXT),public.advisor_confirm_sports_shirt(UUID,INTEGER,TEXT,TEXT),public.review_team_identity(UUID,TEXT,TEXT) TO authenticated;

INSERT INTO public.sports_portal_settings(event_id)
SELECT id FROM public.events WHERE status='active' ORDER BY academic_year DESC LIMIT 1 ON CONFLICT(event_id) DO NOTHING;
