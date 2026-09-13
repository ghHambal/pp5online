-- ศูนย์มอบเหรียญ: apply only when release is explicitly requested.
-- Requires existing sports module, race_results and sports_gallery_photos.
BEGIN;
CREATE SCHEMA IF NOT EXISTS private;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;
CREATE TABLE public.sports_award_staff (
 event_id uuid NOT NULL REFERENCES public.events(id),
 profile_id uuid NOT NULL REFERENCES public.profiles(id),
 assigned_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(event_id,profile_id)
);
CREATE TABLE public.sports_award_ceremonies (
 event_id uuid NOT NULL REFERENCES public.events(id),
 sport_id uuid PRIMARY KEY REFERENCES public.sports(id),
 delivered_at timestamptz,
 delivered_by uuid REFERENCES public.profiles(id),
 recorder_name text NOT NULL,
 result_snapshot jsonb NOT NULL,
 revision integer NOT NULL DEFAULT 1
);
CREATE TABLE public.sports_award_history (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 event_id uuid NOT NULL REFERENCES public.events(id),
 sport_id uuid NOT NULL REFERENCES public.sports(id),
 action text NOT NULL,
 actor_id uuid,
 actor_name text NOT NULL,
 reason text,
 snapshot jsonb NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ON public.sports_award_ceremonies(event_id);
CREATE INDEX ON public.sports_award_history(event_id,sport_id,created_at DESC);
CREATE TABLE private.sports_award_config (
 singleton boolean PRIMARY KEY DEFAULT true CHECK(singleton), password_hash text NOT NULL
);
INSERT INTO private.sports_award_config VALUES (true,'$2a$10$sGgn1UbqQIEmW6sI14RukuTLWOgzsGhXKDdZHKBkj5mPK3HLarP6i');
CREATE TABLE private.sports_award_uploads (
 path text PRIMARY KEY, event_id uuid NOT NULL, sport_id uuid NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now(), photo_id uuid
);
ALTER TABLE public.sports_award_staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_award_ceremonies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_award_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE private.sports_award_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE private.sports_award_uploads ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.sports_award_staff,public.sports_award_ceremonies,public.sports_award_history FROM anon,authenticated;
REVOKE ALL ON private.sports_award_config,private.sports_award_uploads FROM PUBLIC,anon,authenticated;

CREATE FUNCTION private.awards_admin() RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
 SELECT auth.uid() IS NOT NULL AND (EXISTS(SELECT 1 FROM public.profiles WHERE id=auth.uid() AND (role='admin' OR is_also_admin IS TRUE))
 OR EXISTS(SELECT 1 FROM public.teachers t WHERE t.profile_id=auth.uid() AND (t.staff_type='แอดมิน' OR 'house_color_admin'=ANY(coalesce(t.positions,ARRAY[t.position]))))
 OR EXISTS(SELECT 1 FROM public.teachers t JOIN public.role_permissions r ON r.position=ANY(coalesce(t.positions,ARRAY[t.position])) WHERE t.profile_id=auth.uid() AND r.feature='menu_sports_admin' AND r.allowed IS TRUE));
$$;
CREATE FUNCTION private.awards_access(p_event uuid,p_password text) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
 SELECT private.awards_admin() OR EXISTS(SELECT 1 FROM public.sports_award_staff WHERE event_id=p_event AND profile_id=auth.uid())
 OR (coalesce(p_password,'')<>'' AND EXISTS(SELECT 1 FROM private.sports_award_config WHERE password_hash=extensions.crypt(p_password,password_hash)));
$$;
-- Exclude row IDs/timestamps: re-saving unchanged results must not invalidate a ceremony.
CREATE FUNCTION private.awards_result(p_sport uuid) RETURNS jsonb LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
 SELECT coalesce(jsonb_agg(jsonb_build_object('medal',a.medal_type,'color_id',a.team_color_id,'color',c.name,'recipients',
 CASE WHEN s.result_format IN ('timed_race','scored_contest') THEN
  (SELECT coalesce(jsonb_agg(jsonb_build_object('id',r.student_id,'name',st.full_name,'room',st.main_room) ORDER BY r.rn),'[]'::jsonb)
   FROM (SELECT rr.*,row_number() OVER(ORDER BY CASE WHEN s.sort_direction='desc' THEN -rr.value ELSE rr.value END,rr.id) rn
    FROM public.race_results rr WHERE rr.sport_id=s.id AND rr.round='final' AND rr.value IS NOT NULL) r
   JOIN public.students st ON st.id=r.student_id
   WHERE r.rn=CASE a.medal_type WHEN 'gold' THEN 1 WHEN 'silver' THEN 2 ELSE 3 END AND r.team_color_id=a.team_color_id
   AND NOT EXISTS(SELECT 1 FROM public.race_results tied WHERE tied.sport_id=s.id AND tied.round='final' AND tied.value=r.value AND tied.student_id<>r.student_id))
 ELSE (SELECT coalesce(jsonb_agg(jsonb_build_object('id',st.id,'name',st.full_name,'room',st.main_room,'team',to_jsonb(r)->>'team_label') ORDER BY st.id),'[]'::jsonb)
   FROM public.registrations r JOIN public.students st ON st.id=r.student_id WHERE r.event_id=a.event_id AND r.sport_id=a.sport_id AND r.team_color_id=a.team_color_id) END)
 ORDER BY CASE a.medal_type WHEN 'gold' THEN 1 WHEN 'silver' THEN 2 ELSE 3 END,a.team_color_id),'[]'::jsonb)
 FROM public.medal_awards a JOIN public.sports s ON s.id=a.sport_id JOIN public.team_colors c ON c.id=a.team_color_id WHERE a.sport_id=p_sport;
$$;
CREATE FUNCTION public.sports_awards_access(p_event uuid DEFAULT NULL) RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path='' AS $$
DECLARE e uuid:=p_event;
BEGIN
 IF e IS NULL THEN SELECT id INTO e FROM public.events WHERE status='active' ORDER BY academic_year DESC LIMIT 1; END IF;
 RETURN jsonb_build_object('event_id',e,'allowed',coalesce(private.awards_access(e,NULL),false),'admin',private.awards_admin());
END $$;

CREATE FUNCTION public.sports_awards_staff(p_event uuid,p_profile uuid DEFAULT NULL,p_enabled boolean DEFAULT NULL) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 IF NOT private.awards_admin() THEN RAISE EXCEPTION 'ไม่มีสิทธิ์จัดการทีมมอบเหรียญ'; END IF;
 IF p_profile IS NOT NULL THEN
  IF p_enabled IS NULL THEN RAISE EXCEPTION 'กรุณาระบุการมอบหมาย'; END IF;
  IF NOT EXISTS(SELECT 1 FROM public.teachers WHERE profile_id=p_profile) THEN RAISE EXCEPTION 'ไม่พบบัญชีครู'; END IF;
  IF p_enabled THEN INSERT INTO public.sports_award_staff(event_id,profile_id) VALUES(p_event,p_profile) ON CONFLICT DO NOTHING;
  ELSE DELETE FROM public.sports_award_staff WHERE event_id=p_event AND profile_id=p_profile; END IF;
 END IF;
 RETURN (SELECT coalesce(jsonb_agg(jsonb_build_object('profile_id',t.profile_id,'name',t.full_name,'assigned',a.profile_id IS NOT NULL) ORDER BY t.full_name),'[]'::jsonb)
 FROM public.teachers t LEFT JOIN public.sports_award_staff a ON a.profile_id=t.profile_id AND a.event_id=p_event WHERE t.profile_id IS NOT NULL);
END $$;

CREATE FUNCTION public.sports_awards_list(p_event uuid,p_password text DEFAULT NULL) RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path='' AS $$
BEGIN
 IF NOT coalesce(private.awards_access(p_event,p_password),false) THEN RAISE EXCEPTION 'ไม่มีสิทธิ์หรือรหัสผ่านไม่ถูกต้อง' USING ERRCODE='42501'; END IF;
 RETURN jsonb_build_object('admin',private.awards_admin(),'account',coalesce(private.awards_access(p_event,NULL),false),
 'colors',(SELECT coalesce(jsonb_agg(jsonb_build_object('id',c.id,'name',c.name,'logo_url',to_jsonb(c)->>'logo_url')),'[]'::jsonb) FROM public.team_colors c WHERE c.event_id=p_event),
 'rows',(SELECT coalesce(jsonb_agg(jsonb_build_object('id',s.id,'name',s.name,'gender',s.gender,'level',s.education_level,'format',s.result_format,
 'ready', (SELECT count(DISTINCT medal_type)=3 FROM public.medal_awards WHERE sport_id=s.id),
 'result',private.awards_result(s.id),'fingerprint',md5(private.awards_result(s.id)::text),
 'delivered_at',c.delivered_at,'recorder',c.recorder_name,'revision',coalesce(c.revision,0),
 'changed',c.delivered_at IS NOT NULL AND c.result_snapshot IS DISTINCT FROM private.awards_result(s.id),
 'delivered_result',c.result_snapshot,
 'photos',(SELECT coalesce(jsonb_agg(jsonb_build_object('id',p.id,'url',p.photo_url)),'[]'::jsonb) FROM public.sports_gallery_photos p WHERE p.sport_id=s.id AND p.custom_label='พิธีมอบเหรียญ'),
 'history',(SELECT coalesce(jsonb_agg(jsonb_build_object('action',h.action,'name',h.actor_name,'at',h.created_at,'reason',h.reason) ORDER BY h.created_at DESC),'[]'::jsonb) FROM public.sports_award_history h WHERE h.sport_id=s.id)
 ) ORDER BY s.name),'[]'::jsonb) FROM public.sports s LEFT JOIN public.sports_award_ceremonies c ON c.sport_id=s.id
 WHERE s.event_id=p_event AND (EXISTS(SELECT 1 FROM public.medal_awards a WHERE a.sport_id=s.id GROUP BY a.sport_id HAVING count(DISTINCT a.medal_type)=3) OR c.sport_id IS NOT NULL)));
END $$;

CREATE FUNCTION public.sports_awards_save(p_event uuid,p_sport uuid,p_fingerprint text,p_revision integer,p_delivered boolean,p_password text DEFAULT NULL,p_name text DEFAULT NULL,p_reason text DEFAULT NULL) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE snap jsonb; current_row public.sports_award_ceremonies; actor text;
BEGIN
 IF NOT coalesce(private.awards_access(p_event,p_password),false) THEN RAISE EXCEPTION 'ไม่มีสิทธิ์หรือรหัสผ่านไม่ถูกต้อง'; END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(p_sport::text,0));
 IF NOT EXISTS(SELECT 1 FROM public.sports WHERE id=p_sport AND event_id=p_event) THEN RAISE EXCEPTION 'ไม่พบรายการ'; END IF;
 SELECT * INTO current_row FROM public.sports_award_ceremonies WHERE sport_id=p_sport;
 IF p_delivered IS NULL THEN RAISE EXCEPTION 'กรุณาระบุสถานะการมอบ'; END IF;
 IF coalesce(current_row.revision,0) IS DISTINCT FROM p_revision THEN RAISE EXCEPTION 'สถานะเปลี่ยนแล้ว กรุณารีเฟรชก่อนบันทึก'; END IF;
 snap:=private.awards_result(p_sport);
 IF md5(snap::text) IS DISTINCT FROM p_fingerprint THEN RAISE EXCEPTION 'ผลการแข่งขันเปลี่ยนแล้ว กรุณารีเฟรช'; END IF;
 IF p_delivered THEN
  IF current_row.delivered_at IS NOT NULL THEN RAISE EXCEPTION 'รายการนี้มอบแล้ว'; END IF;
  IF (SELECT count(DISTINCT medal_type) FROM public.medal_awards WHERE sport_id=p_sport)<>3 THEN RAISE EXCEPTION 'ผลเหรียญยังไม่ครบ'; END IF;
 ELSE
  IF NOT private.awards_admin() OR length(trim(coalesce(p_reason,'')))=0 THEN RAISE EXCEPTION 'เฉพาะผู้ดูแลที่ระบุเหตุผลสามารถย้อนสถานะได้'; END IF;
 END IF;
 IF private.awards_access(p_event,NULL) THEN SELECT full_name INTO actor FROM public.teachers WHERE profile_id=auth.uid() LIMIT 1; actor:=coalesce(actor,'ผู้ดูแล');
 ELSE actor:=trim(coalesce(p_name,'')); END IF;
 IF length(actor)<2 OR length(actor)>150 THEN RAISE EXCEPTION 'กรุณาระบุชื่อผู้บันทึก 2–150 ตัวอักษร'; END IF;
 INSERT INTO public.sports_award_ceremonies(event_id,sport_id,delivered_at,delivered_by,recorder_name,result_snapshot,revision)
 VALUES(p_event,p_sport,CASE WHEN p_delivered THEN now() END,auth.uid(),actor,snap,coalesce(current_row.revision,0)+1)
 ON CONFLICT(sport_id) DO UPDATE SET delivered_at=excluded.delivered_at,delivered_by=excluded.delivered_by,recorder_name=excluded.recorder_name,result_snapshot=excluded.result_snapshot,revision=excluded.revision;
 INSERT INTO public.sports_award_history(event_id,sport_id,action,actor_id,actor_name,reason,snapshot)
 VALUES(p_event,p_sport,CASE WHEN p_delivered THEN 'มอบแล้ว' ELSE 'ย้อนเป็นยังไม่ได้มอบ' END,auth.uid(),actor,p_reason,snap);
END $$;

CREATE FUNCTION public.sports_awards_photo(p_event uuid,p_sport uuid,p_password text DEFAULT NULL,p_path text DEFAULT NULL) RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE path_value text; photo uuid;
BEGIN
 IF NOT coalesce(private.awards_access(p_event,p_password),false) THEN RAISE EXCEPTION 'ไม่มีสิทธิ์หรือรหัสผ่านไม่ถูกต้อง'; END IF;
 IF NOT EXISTS(SELECT 1 FROM public.sports_award_ceremonies WHERE sport_id=p_sport AND event_id=p_event AND delivered_at IS NOT NULL) THEN RAISE EXCEPTION 'กรุณาบันทึกการมอบก่อนเพิ่มรูป'; END IF;
 IF p_path IS NULL THEN
  path_value:='awards/'||p_event||'/'||p_sport||'/'||gen_random_uuid()||'.jpg';
  INSERT INTO private.sports_award_uploads(path,event_id,sport_id) VALUES(path_value,p_event,p_sport);
  RETURN path_value;
 END IF;
 SELECT photo_id INTO photo FROM private.sports_award_uploads WHERE path=p_path AND event_id=p_event AND sport_id=p_sport FOR UPDATE;
 IF NOT FOUND THEN RAISE EXCEPTION 'ไม่พบรายการอัปโหลด'; END IF;
 IF photo IS NOT NULL THEN RETURN photo::text; END IF;
 IF NOT EXISTS(SELECT 1 FROM storage.objects WHERE bucket_id='sports-gallery' AND name=p_path) THEN RAISE EXCEPTION 'รูปยังอัปโหลดไม่สำเร็จ'; END IF;
 INSERT INTO public.sports_gallery_photos(event_id,sport_id,team_color_id,category,custom_label,caption,photo_url,uploaded_by)
 SELECT p_event,p_sport,NULL,'staff','พิธีมอบเหรียญ','พิธีมอบเหรียญ · '||name,
 'https://isupghduywzqbmnjgtip.supabase.co/storage/v1/object/public/sports-gallery/'||p_path,auth.uid() FROM public.sports WHERE id=p_sport RETURNING id INTO photo;
 UPDATE private.sports_award_uploads SET photo_id=photo WHERE path=p_path;
 RETURN photo::text;
END $$;
-- Reserved random paths are short-lived upload capabilities, issued only after access checks.
CREATE FUNCTION public.sports_awards_upload_allowed(p_path text) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
 SELECT EXISTS(SELECT 1 FROM private.sports_award_uploads WHERE path=p_path AND created_at>now()-interval '30 minutes' AND photo_id IS NULL);
$$;
CREATE POLICY awards_gallery_insert_guard ON public.sports_gallery_photos AS RESTRICTIVE FOR INSERT TO anon,authenticated WITH CHECK(custom_label IS DISTINCT FROM 'พิธีมอบเหรียญ');
CREATE POLICY awards_gallery_update_guard ON public.sports_gallery_photos AS RESTRICTIVE FOR UPDATE TO anon,authenticated USING(custom_label IS DISTINCT FROM 'พิธีมอบเหรียญ') WITH CHECK(custom_label IS DISTINCT FROM 'พิธีมอบเหรียญ');
CREATE POLICY awards_gallery_delete_guard ON public.sports_gallery_photos AS RESTRICTIVE FOR DELETE TO anon,authenticated USING(custom_label IS DISTINCT FROM 'พิธีมอบเหรียญ');
CREATE POLICY awards_storage_insert_guard ON storage.objects AS RESTRICTIVE FOR INSERT TO anon,authenticated WITH CHECK(bucket_id<>'sports-gallery' OR name NOT LIKE 'awards/%' OR public.sports_awards_upload_allowed(name));
CREATE POLICY awards_storage_update_guard ON storage.objects AS RESTRICTIVE FOR UPDATE TO anon,authenticated USING(bucket_id<>'sports-gallery' OR name NOT LIKE 'awards/%') WITH CHECK(bucket_id<>'sports-gallery' OR name NOT LIKE 'awards/%');
CREATE POLICY awards_storage_delete_guard ON storage.objects AS RESTRICTIVE FOR DELETE TO anon,authenticated USING(bucket_id<>'sports-gallery' OR name NOT LIKE 'awards/%');
REVOKE ALL ON FUNCTION private.awards_admin(),private.awards_access(uuid,text),private.awards_result(uuid) FROM PUBLIC,anon,authenticated;
REVOKE ALL ON FUNCTION public.sports_awards_access(uuid),public.sports_awards_staff(uuid,uuid,boolean),public.sports_awards_list(uuid,text),public.sports_awards_save(uuid,uuid,text,integer,boolean,text,text,text),public.sports_awards_photo(uuid,uuid,text,text),public.sports_awards_upload_allowed(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_awards_access(uuid),public.sports_awards_list(uuid,text),public.sports_awards_save(uuid,uuid,text,integer,boolean,text,text,text),public.sports_awards_photo(uuid,uuid,text,text),public.sports_awards_upload_allowed(text) TO anon,authenticated;
GRANT EXECUTE ON FUNCTION public.sports_awards_staff(uuid,uuid,boolean) TO authenticated;
COMMIT;
