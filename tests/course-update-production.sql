-- Production verification: saves existing values and rolls back all test writes.
BEGIN;
DO $$ DECLARE sid integer; uid uuid; old_name text; co_ids integer[]; BEGIN
 SELECT ms.id,t.profile_id,ms.subject_name INTO sid,uid,old_name FROM public.master_subjects ms JOIN public.teachers t ON t.id=ms.teacher_id WHERE t.teacher_code='1023' AND t.profile_id IS NOT NULL ORDER BY ms.id LIMIT 1;
 IF sid IS NULL THEN RAISE EXCEPTION 'Missing test course'; END IF;
 SELECT coalesce(array_agg(teacher_id),'{}'::integer[]) INTO co_ids FROM public.subject_co_teachers WHERE subject_id=sid;
 PERFORM set_config('request.jwt.claim.sub',uid::text,true);
 EXECUTE 'SET LOCAL ROLE authenticated';
 PERFORM public.update_subject_atomic(sid,jsonb_build_object('subject_name',old_name),co_ids);
 EXECUTE 'RESET ROLE';
 IF (SELECT subject_name FROM public.master_subjects WHERE id=sid) IS DISTINCT FROM old_name THEN RAISE EXCEPTION 'Unexpected course change'; END IF;
END $$;
ROLLBACK;
SELECT 'teacher_1023_save_passed_and_rolled_back' as verification, to_regprocedure('public.update_subject_atomic(integer,jsonb,integer[])') as installed;
