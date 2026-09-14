-- Apply before deploying the frontend that calls update_subject_atomic.
-- Keep existing table RLS; only this narrowly scoped save uses explicit authorization.
BEGIN;
CREATE OR REPLACE FUNCTION public.update_subject_atomic(
  p_subject_id integer, p_payload jsonb, p_co_teacher_ids integer[] DEFAULT NULL
) RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  v_old public.master_subjects%ROWTYPE;
  v_new public.master_subjects%ROWTYPE;
  v_admin boolean;
  v_owner boolean;
  v_co boolean;
  v_existing integer[];
  v_requested integer[];
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'กรุณาเข้าสู่ระบบ' USING ERRCODE='42501'; END IF;
  IF p_payload IS NULL OR jsonb_typeof(p_payload) <> 'object' THEN
    RAISE EXCEPTION 'ข้อมูลคอร์สไม่ถูกต้อง' USING ERRCODE='22023';
  END IF;
  IF EXISTS (SELECT 1 FROM jsonb_object_keys(p_payload) AS k(key)
    WHERE key NOT IN ('teacher_id','dept','subject_group','learning_area','subject_code','subject_name','credit','grade_level')) THEN
    RAISE EXCEPTION 'มีช่องข้อมูลที่ไม่อนุญาตให้แก้ไข' USING ERRCODE='22023';
  END IF;
  SELECT * INTO v_old FROM public.master_subjects WHERE id=p_subject_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'ไม่พบคอร์สหรือไม่มีสิทธิ์แก้ไข' USING ERRCODE='42501'; END IF;
  SELECT EXISTS(SELECT 1 FROM public.profiles WHERE id=auth.uid() AND role::text='admin') INTO v_admin;
  SELECT EXISTS(SELECT 1 FROM public.teachers WHERE id=v_old.teacher_id AND profile_id=auth.uid()) INTO v_owner;
  SELECT EXISTS(SELECT 1 FROM public.subject_co_teachers s JOIN public.teachers t ON t.id=s.teacher_id
    WHERE s.subject_id=p_subject_id AND t.profile_id=auth.uid()) INTO v_co;
  IF NOT (v_admin OR v_owner OR v_co) THEN
    RAISE EXCEPTION 'ไม่พบคอร์สหรือไม่มีสิทธิ์แก้ไข' USING ERRCODE='42501';
  END IF;
  SELECT * INTO v_new FROM jsonb_populate_record(v_old,p_payload);
  IF NOT v_admin AND v_new.teacher_id IS DISTINCT FROM v_old.teacher_id THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่เปลี่ยนครูเจ้าของคอร์สได้' USING ERRCODE='42501';
  END IF;
  IF nullif(btrim(v_new.subject_name),'') IS NULL THEN
    RAISE EXCEPTION 'กรุณากรอกชื่อวิชา' USING ERRCODE='22023';
  END IF;
  IF p_co_teacher_ids IS NOT NULL THEN
    IF array_position(p_co_teacher_ids,NULL) IS NOT NULL THEN
      RAISE EXCEPTION 'รายชื่อครูร่วมสอนไม่ถูกต้อง' USING ERRCODE='22023';
    END IF;
    SELECT coalesce(array_agg(DISTINCT x ORDER BY x),'{}'::integer[]) INTO v_requested
      FROM unnest(p_co_teacher_ids) AS x;
    SELECT coalesce(array_agg(teacher_id ORDER BY teacher_id),'{}'::integer[]) INTO v_existing
      FROM public.subject_co_teachers WHERE subject_id=p_subject_id;
    IF NOT (v_admin OR v_owner) AND v_requested IS DISTINCT FROM v_existing THEN
      RAISE EXCEPTION 'เฉพาะเจ้าของคอร์สหรือแอดมินที่แก้รายชื่อครูร่วมสอนได้' USING ERRCODE='42501';
    END IF;
  END IF;
  UPDATE public.master_subjects SET teacher_id=v_new.teacher_id, dept=v_new.dept,
    subject_group=v_new.subject_group, learning_area=v_new.learning_area,
    subject_code=v_new.subject_code, subject_name=v_new.subject_name,
    credit=v_new.credit, grade_level=v_new.grade_level WHERE id=p_subject_id;
  IF p_co_teacher_ids IS NOT NULL THEN
    DELETE FROM public.subject_co_teachers WHERE subject_id=p_subject_id AND NOT (teacher_id=ANY(v_requested));
    INSERT INTO public.subject_co_teachers(subject_id,teacher_id)
      SELECT p_subject_id,x FROM unnest(v_requested) AS x ON CONFLICT DO NOTHING;
  END IF;
END;
$$;
REVOKE ALL ON FUNCTION public.update_subject_atomic(integer,jsonb,integer[]) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.update_subject_atomic(integer,jsonb,integer[]) TO authenticated;
COMMIT;
