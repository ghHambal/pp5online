\set ON_ERROR_STOP on
CREATE SCHEMA auth;
CREATE SCHEMA private;
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql AS $$ SELECT nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
CREATE TABLE public.events(id uuid PRIMARY KEY,status text,academic_year integer);
CREATE TABLE public.teachers(profile_id uuid,full_name text);
INSERT INTO events VALUES('00000000-0000-0000-0000-000000000001','active',2569);
CREATE TABLE private.fixture(snapshot jsonb);
INSERT INTO private.fixture VALUES('{"students":[{"id":"a","main_room":"ม.1/1","full_name":"ก","color_name":"แดง"},{"id":"b","main_room":"ม.1/1","full_name":"ข","color_name":"ฟ้า"},{"id":"c","main_room":"ม.1/1","full_name":"ค"},{"id":"a","main_room":"ม.1/1","full_name":"ก","color_name":"แดง"}],"shirt_requests":[{"student_id":"a","status":"confirmed","confirmed_size":"M"},{"student_id":"b","status":"advisor_updated","requested_size":"L"},{"student_id":"c","status":"pending","requested_size":"S"}]}');
CREATE FUNCTION public.get_public_sports_shirt_snapshot(p_password text) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$ BEGIN IF p_password IS DISTINCT FROM 'shirt-test-only' THEN RAISE EXCEPTION 'invalid password'; END IF; RETURN (SELECT snapshot FROM private.fixture); END $$;
\ir ../supabase/migrations/20260913171949_sports_shirt_handoffs.sql
CREATE FUNCTION private.expect_failure(statement text) RETURNS void LANGUAGE plpgsql AS $$ BEGIN BEGIN EXECUTE statement; EXCEPTION WHEN OTHERS THEN RETURN; END; RAISE EXCEPTION 'Unexpected success: %',statement; END $$;
DO $$
DECLARE snap jsonb; r jsonb; res jsonb; req uuid:=gen_random_uuid(); issue uuid:=gen_random_uuid(); ev uuid:='00000000-0000-0000-0000-000000000001'; data jsonb:='{"quantity":1,"receiver_kind":"advisor","receiver_name":"ครูทดสอบ","recorder_name":"ทีมเสื้อ","note":"ขาดหนึ่งตัว","has_issue":true}'; hash text;
BEGIN
 PERFORM private.expect_failure($q$SELECT public.get_sports_shirt_handoff_snapshot('wrong')$q$);
 IF has_table_privilege('anon','public.sports_shirt_handoffs','INSERT') OR has_table_privilege('authenticated','public.sports_shirt_handoffs','SELECT') THEN RAISE EXCEPTION 'Direct table access exposed'; END IF;
 snap:=public.get_sports_shirt_handoff_snapshot('shirt-test-only');r:=snap->'handoff_rooms'->0;hash:=r->>'target_hash';
 IF jsonb_array_length(r->'target')<>3 THEN RAISE EXCEPTION 'Dedup failed'; END IF;
 res:=public.save_sports_shirt_handoff('shirt-test-only',ev,'ม.1/1','receive',0,hash,req,data);
 IF res IS DISTINCT FROM public.save_sports_shirt_handoff('shirt-test-only',ev,'ม.1/1','receive',0,hash,req,data) THEN RAISE EXCEPTION 'Retry failed'; END IF;
 IF (SELECT count(*) FROM sports_shirt_handoffs)<>1 THEN RAISE EXCEPTION 'Duplicate receipt'; END IF;
 PERFORM private.expect_failure(format('SELECT public.save_sports_shirt_handoff(%L,%L,%L,%L,0,%L,%L,%L)','shirt-test-only',ev,'ม.1/1','receive',hash,gen_random_uuid(),data));
 PERFORM private.expect_failure(format('SELECT public.save_sports_shirt_handoff(%L,%L,%L,%L,1,%L,%L,%L)','shirt-test-only',ev,'ม.1/1','receive','changed',gen_random_uuid(),data));
 PERFORM private.expect_failure(format('SELECT public.save_sports_shirt_handoff(%L,%L,%L,%L,1,%L,%L,%L)','shirt-test-only',ev,'ม.1/1','receive',hash,req,data||'{"quantity":2}'::jsonb));
 PERFORM private.expect_failure(format('SELECT public.save_sports_shirt_handoff(%L,%L,%L,%L,1,%L,%L,%L)','shirt-test-only',ev,'ม.1/1','receive',hash,gen_random_uuid(),data||'{"quantity":2}'::jsonb));
 PERFORM public.save_sports_shirt_handoff('shirt-test-only',ev,'ม.1/1','receive',1,hash,gen_random_uuid(),data||'{"has_issue":false}'::jsonb);
 PERFORM private.expect_failure(format('SELECT public.save_sports_shirt_handoff(%L,%L,%L,%L,2,%L,%L,%L)','shirt-test-only',ev,'ม.1/1','receive',hash,gen_random_uuid(),data));
 PERFORM public.save_sports_shirt_handoff('shirt-test-only',ev,'ม.1/1','issue',2,hash,issue,'{"note":"เปลี่ยนไซซ์","recorder_name":"ทีมเสื้อ"}');
 PERFORM public.save_sports_shirt_handoff('shirt-test-only',ev,'ม.1/1','resolve',3,hash,gen_random_uuid(),jsonb_build_object('issue_id',issue,'note','เปลี่ยนให้แล้ว','recorder_name','ทีมเสื้อ'));
 PERFORM public.save_sports_shirt_handoff('shirt-test-only',ev,'ม.1/1','reopen',4,hash,gen_random_uuid(),jsonb_build_object('issue_id',issue,'note','ยังต้องติดตาม','recorder_name','ทีมเสื้อ'));
 PERFORM public.save_sports_shirt_handoff('shirt-test-only',ev,'ม.1/1','cancel',5,hash,gen_random_uuid(),jsonb_build_object('receipt_id',req,'note','ลงผิด','recorder_name','ทีมเสื้อ'));
 IF (SELECT sum(quantity) FROM sports_shirt_handoffs WHERE cancelled_at IS NULL)<>1 OR (SELECT count(*) FROM sports_shirt_handoff_history)<>6 THEN RAISE EXCEPTION 'History/cancel failure'; END IF;
 IF NOT EXISTS(SELECT 1 FROM sports_shirt_handoff_history WHERE action='resolve' AND result->>'note'='เปลี่ยนให้แล้ว') THEN RAISE EXCEPTION 'Lost resolution history'; END IF;
 RAISE NOTICE 'PASS: gate, RLS, dedup, partial, complete, quantity bounds, retries, stale writes, issues, resolution history, cancellation';
END $$;
