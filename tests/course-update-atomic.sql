\set ON_ERROR_STOP on
CREATE ROLE anon;
CREATE ROLE authenticated;
CREATE SCHEMA auth;
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql AS $$
 SELECT nullif(current_setting('request.jwt.claim.sub',true),'')::uuid
$$;
CREATE TABLE profiles(id uuid PRIMARY KEY,role text);
CREATE TABLE teachers(id integer PRIMARY KEY,profile_id uuid REFERENCES profiles);
CREATE TABLE master_subjects(id integer PRIMARY KEY,teacher_id integer REFERENCES teachers,
 dept text,subject_group text,learning_area text,subject_code text,subject_name text NOT NULL,
 credit numeric(3,1),grade_level text);
CREATE TABLE subject_co_teachers(subject_id integer REFERENCES master_subjects,
 teacher_id integer REFERENCES teachers,PRIMARY KEY(subject_id,teacher_id));
INSERT INTO profiles VALUES
 ('00000000-0000-0000-0000-000000000001','teacher'),
 ('00000000-0000-0000-0000-000000000002','teacher'),
 ('00000000-0000-0000-0000-000000000003','teacher'),
 ('00000000-0000-0000-0000-000000000004','admin');
INSERT INTO teachers SELECT n,('00000000-0000-0000-0000-00000000000'||n)::uuid FROM generate_series(1,3) n;
INSERT INTO master_subjects(id,teacher_id,subject_name) VALUES(10,1,'before');
INSERT INTO subject_co_teachers VALUES(10,2);
ALTER TABLE master_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE subject_co_teachers ENABLE ROW LEVEL SECURITY;
-- Deliberately reproduce a recursive policy. The new authorized RPC must still save.
CREATE POLICY recursive_subject ON master_subjects FOR ALL TO authenticated
 USING(EXISTS(SELECT 1 FROM master_subjects s WHERE s.id=master_subjects.id));
GRANT USAGE ON SCHEMA public,auth TO authenticated;
GRANT SELECT,UPDATE ON master_subjects TO authenticated;
\ir ../patch_course_update_atomic.sql
SET ROLE authenticated;
SELECT set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000001',false);
DO $$ BEGIN
 BEGIN
  UPDATE master_subjects SET subject_name='broken' WHERE id=10;
  RAISE EXCEPTION 'Expected recursion';
 EXCEPTION WHEN invalid_object_definition THEN NULL; END;
END $$;
SELECT update_subject_atomic(10,'{"subject_name":"owner saved"}',ARRAY[2,2]);
DO $$ BEGIN
 BEGIN
  PERFORM update_subject_atomic(10,'{"subject_name":"partial"}',ARRAY[999]);
  RAISE EXCEPTION 'Expected invalid teacher';
 EXCEPTION WHEN foreign_key_violation THEN NULL; END;
 BEGIN
  PERFORM update_subject_atomic(10,'{"teacher_id":3}',NULL);
  RAISE EXCEPTION 'Expected owner transfer denied';
 EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 BEGIN
  PERFORM update_subject_atomic(10,'{"id":999}',NULL);
  RAISE EXCEPTION 'Expected forbidden field';
 EXCEPTION WHEN invalid_parameter_value THEN NULL; END;
END $$;
RESET ROLE;
DO $$ BEGIN
 IF (SELECT subject_name FROM master_subjects WHERE id=10)<>'owner saved'
 OR (SELECT count(*) FROM subject_co_teachers WHERE subject_id=10)<>1 THEN
  RAISE EXCEPTION 'Rollback/deduplication failed'; END IF;
END $$;
SET ROLE authenticated;
SELECT set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000003',false);
DO $$ BEGIN
 BEGIN
  PERFORM update_subject_atomic(10,'{"subject_name":"intruder"}',ARRAY[3]);
  RAISE EXCEPTION 'Expected outsider denied';
 EXCEPTION WHEN insufficient_privilege THEN NULL; END;
END $$;
SELECT set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000002',false);
SELECT update_subject_atomic(10,'{"subject_name":"co saved"}',ARRAY[2]);
DO $$ BEGIN
 BEGIN
  PERFORM update_subject_atomic(10,'{}','{}');
  RAISE EXCEPTION 'Expected co-teacher roster edit denied';
 EXCEPTION WHEN insufficient_privilege THEN NULL; END;
END $$;
SELECT set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000004',false);
SELECT update_subject_atomic(10,'{"subject_name":"admin saved"}',NULL);
RESET ROLE;
DO $$ BEGIN
 IF (SELECT subject_name FROM master_subjects WHERE id=10)<>'admin saved'
 OR NOT EXISTS(SELECT 1 FROM subject_co_teachers WHERE subject_id=10 AND teacher_id=2) THEN
  RAISE EXCEPTION 'Admin save did not preserve roster'; END IF;
 IF has_function_privilege('anon','public.update_subject_atomic(integer,jsonb,integer[])','EXECUTE') THEN
  RAISE EXCEPTION 'Anonymous execution granted'; END IF;
END $$;
SET ROLE authenticated;
SELECT set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000001',false);
SELECT update_subject_atomic(10,'{}','{}');
RESET ROLE;
DO $$ BEGIN
 IF EXISTS(SELECT 1 FROM subject_co_teachers WHERE subject_id=10) THEN
  RAISE EXCEPTION 'Owner cannot disable co-teaching'; END IF;
END $$;
SELECT 'Course save: recursion bypass, authorization, roster preservation and rollback passed' AS result;
