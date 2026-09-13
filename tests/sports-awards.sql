-- Local fixture database only. Run after fixtures/sports-awards-schema.sql + migration.
\set ON_ERROR_STOP on
BEGIN;
UPDATE private.sports_award_config SET password_hash=extensions.crypt('awards-test-only',extensions.gen_salt('bf'));
INSERT INTO profiles VALUES ('10000000-0000-0000-0000-000000000001','admin',false),('10000000-0000-0000-0000-000000000002','teacher',false),('10000000-0000-0000-0000-000000000003','teacher',false);
INSERT INTO teachers VALUES (1,'10000000-0000-0000-0000-000000000001','ผู้ดูแล',NULL,'{}',NULL),(2,'10000000-0000-0000-0000-000000000002','ครูทีมมอบ',NULL,'{}',NULL);
INSERT INTO events VALUES ('20000000-0000-0000-0000-000000000001','active',2569),('20000000-0000-0000-0000-000000000002','closed',2568);
INSERT INTO sports VALUES ('30000000-0000-0000-0000-000000000001','20000000-0000-0000-0000-000000000001','วิ่ง 100 เมตร','M','ม.ต้น','timed_race','asc'),('30000000-0000-0000-0000-000000000002','20000000-0000-0000-0000-000000000001','ฟุตบอล','W','ม.ปลาย','bracket','desc');
INSERT INTO students VALUES(1,'นักเรียน ก','ม.1/1'),(2,'นักเรียน ข','ม.1/2'),(3,'นักเรียน ค','ม.1/3');
INSERT INTO team_colors VALUES ('40000000-0000-0000-0000-000000000001','20000000-0000-0000-0000-000000000001','แดง'),('40000000-0000-0000-0000-000000000002','20000000-0000-0000-0000-000000000001','ฟ้า');
INSERT INTO race_results SELECT gen_random_uuid(),'20000000-0000-0000-0000-000000000001','30000000-0000-0000-0000-000000000001',id,CASE WHEN id<3 THEN '40000000-0000-0000-0000-000000000001'::uuid ELSE '40000000-0000-0000-0000-000000000002'::uuid END,10+id,'final' FROM students;
INSERT INTO medal_awards SELECT gen_random_uuid(),event_id,sport_id,team_color_id,CASE student_id WHEN 1 THEN 'gold' WHEN 2 THEN 'silver' ELSE 'bronze' END FROM race_results;
UPDATE team_colors SET logo_url='https://example.com/red.png' WHERE name='แดง';
SET LOCAL ROLE anon;
DO $$ BEGIN
 IF (public.sports_awards_access()->>'allowed')::boolean THEN RAISE EXCEPTION 'anonymous account access'; END IF;
 BEGIN PERFORM public.sports_awards_list('20000000-0000-0000-0000-000000000001','wrong'); RAISE EXCEPTION 'wrong password accepted'; EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 BEGIN PERFORM public.sports_awards_staff('20000000-0000-0000-0000-000000000001'); RAISE EXCEPTION 'anonymous staff management'; EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 BEGIN INSERT INTO public.sports_award_staff VALUES('20000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000003',now()); RAISE EXCEPTION 'direct write allowed'; EXCEPTION WHEN insufficient_privilege THEN NULL; END;
END $$;
DO $$ DECLARE row jsonb; BEGIN
 IF NOT EXISTS(SELECT 1 FROM jsonb_array_elements(public.sports_awards_list('20000000-0000-0000-0000-000000000001','awards-test-only')->'colors') c WHERE c->>'logo_url'='https://example.com/red.png') THEN RAISE EXCEPTION 'color logos missing'; END IF;
 row:=public.sports_awards_list('20000000-0000-0000-0000-000000000001','awards-test-only')->'rows'->0;
 IF row->'result'->0->'recipients'->0->>'name'<>'นักเรียน ก' OR row->'result'->1->'recipients'->0->>'name'<>'นักเรียน ข' THEN RAISE EXCEPTION 'same color individual medals wrong'; END IF;
 PERFORM public.sports_awards_save('20000000-0000-0000-0000-000000000001',(row->>'id')::uuid,row->>'fingerprint',0,true,'awards-test-only','ทีมงาน');
 BEGIN PERFORM public.sports_awards_save('20000000-0000-0000-0000-000000000001',(row->>'id')::uuid,row->>'fingerprint',0,true,'awards-test-only','ทีมงาน'); RAISE EXCEPTION 'duplicate accepted'; EXCEPTION WHEN raise_exception THEN IF SQLERRM='duplicate accepted' THEN RAISE; END IF; END;
 BEGIN PERFORM public.sports_awards_save('20000000-0000-0000-0000-000000000001',(row->>'id')::uuid,row->>'fingerprint',1,false,'awards-test-only','ทีมงาน','ผิด'); RAISE EXCEPTION 'anonymous undo'; EXCEPTION WHEN raise_exception THEN IF SQLERRM='anonymous undo' THEN RAISE; END IF; END;
END $$;
-- Legacy open gallery/storage policies must not allow forged ceremony writes.
DO $$ DECLARE p text; photo text; BEGIN
 BEGIN INSERT INTO public.sports_gallery_photos(event_id,category,photo_url,custom_label) VALUES('20000000-0000-0000-0000-000000000001','staff','https://example.com/fake.jpg','พิธีมอบเหรียญ'); RAISE EXCEPTION 'forged gallery accepted'; EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 BEGIN INSERT INTO storage.objects(bucket_id,name) VALUES('sports-gallery','awards/fake.jpg'); RAISE EXCEPTION 'forged upload accepted'; EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 p:=public.sports_awards_photo('20000000-0000-0000-0000-000000000001','30000000-0000-0000-0000-000000000001','awards-test-only');
 INSERT INTO storage.objects(bucket_id,name) VALUES('sports-gallery',p);
 photo:=public.sports_awards_photo('20000000-0000-0000-0000-000000000001','30000000-0000-0000-0000-000000000001','awards-test-only',p);
 IF photo IS DISTINCT FROM public.sports_awards_photo('20000000-0000-0000-0000-000000000001','30000000-0000-0000-0000-000000000001','awards-test-only',p) THEN RAISE EXCEPTION 'photo retry duplicates'; END IF;
 DELETE FROM storage.objects WHERE name=p;
 IF NOT EXISTS(SELECT 1 FROM storage.objects WHERE name=p) THEN RAISE EXCEPTION 'ceremony photo deleted'; END IF;
END $$;
RESET ROLE;
SELECT set_config('request.jwt.claim.sub','10000000-0000-0000-0000-000000000001',true);
SET LOCAL ROLE authenticated;
SELECT jsonb_array_length(public.sports_awards_staff('20000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000002',true)) AS staff_count;
SELECT set_config('request.jwt.claim.sub','10000000-0000-0000-0000-000000000002',true);
DO $$ BEGIN
 IF NOT (public.sports_awards_access()->>'allowed')::boolean THEN RAISE EXCEPTION 'assigned teacher denied'; END IF;
 IF (public.sports_awards_access('20000000-0000-0000-0000-000000000002')->>'allowed')::boolean THEN RAISE EXCEPTION 'cross event access'; END IF;
 PERFORM public.sports_awards_list('20000000-0000-0000-0000-000000000001');
END $$;
SELECT set_config('request.jwt.claim.sub','10000000-0000-0000-0000-000000000001',true);
SELECT jsonb_array_length(public.sports_awards_staff('20000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000002',false));
SELECT set_config('request.jwt.claim.sub','10000000-0000-0000-0000-000000000002',true);
DO $$ BEGIN
 IF (public.sports_awards_access()->>'allowed')::boolean THEN RAISE EXCEPTION 'revoked teacher allowed'; END IF;
END $$;
RESET ROLE;
UPDATE team_colors SET logo_url='https://example.com/red-updated.png';
DO $$ BEGIN IF (public.sports_awards_list('20000000-0000-0000-0000-000000000001','awards-test-only')->'rows'->0->>'changed')::boolean THEN RAISE EXCEPTION 'logo change invalidated result'; END IF; END $$;
UPDATE race_results SET value=9 WHERE student_id=2;
SELECT set_config('request.jwt.claim.sub','10000000-0000-0000-0000-000000000001',true);
SET LOCAL ROLE authenticated;
DO $$ DECLARE r jsonb; BEGIN
 r:=public.sports_awards_list('20000000-0000-0000-0000-000000000001')->'rows'->0;
 IF NOT (r->>'changed')::boolean THEN RAISE EXCEPTION 'changed results not flagged'; END IF;
 PERFORM public.sports_awards_save('20000000-0000-0000-0000-000000000001',(r->>'id')::uuid,r->>'fingerprint',1,false,NULL,NULL,'ตรวจสอบผลใหม่');
 r:=public.sports_awards_list('20000000-0000-0000-0000-000000000001')->'rows'->0;
 IF r->>'delivered_at' IS NOT NULL OR jsonb_array_length(r->'history')<>2 THEN RAISE EXCEPTION 'undo/history failed'; END IF;
END $$;
ROLLBACK;
\echo 'PASS: password, roles, event scope, revocation, duplicate, individual results, result changes, history, protected uploads and gallery retry'
