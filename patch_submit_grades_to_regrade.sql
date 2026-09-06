-- ปุ่ม "ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า" ในหน้าบันทึกคะแนนของครู (pp5 ปกติ)
-- รันจริงบน production แล้วเมื่อ 2026-09-07 ผ่าน Supabase MCP — ไฟล์นี้เก็บไว้เป็นหลักฐาน/อ้างอิงใน repo เท่านั้น
--
-- บริบท: ระบบแก้ค้างเก่า (regrade_subjects) เดิมมีทางเข้าข้อมูลแค่ทางเดียวคืออัปโหลด CSV (source='csv')
-- สำหรับข้อมูลเทอมเก่า ส่วนแผนเดิมที่จะดึงข้อมูลเทอมปัจจุบันอัตโนมัติจากระบบ ปพ.5 (source='live')
-- ไม่เคยถูกสร้างจริง งานนี้เติมช่องว่างนั้นด้วยปุ่มที่ครูกดเองต่อห้องเรียน (ไม่ใช่อัตโนมัติเต็มรูปแบบ
-- เพราะต้องให้ครูเป็นคนยืนยันว่าให้คะแนนครบแล้วจริง)

-- RPC: รับรายชื่อนักเรียนที่ "ติด" ที่ฝั่ง JS คำนวณไว้แล้ว (ตรงกับตัวเลขบนจอเป๊ะ เพราะสูตรเกรด
-- มีการรวม formula/bonus column ที่ซับซ้อน ให้ฝั่ง client คำนวณแทนการคำนวณซ้ำใน SQL) แล้ว join หา
-- subject/teacher/semester ฝั่ง server เอง (ไม่เชื่อค่าที่ client ส่งมานอกจาก student_id/grade_failed_at)
-- ก่อน upsert เข้า regrade_subjects — ตรวจสิทธิ์ว่าเป็นครูเจ้าของวิชานั้นจริงก่อนเสมอ
create or replace function public.submit_class_grades_to_regrade(p_class_id integer, p_failing jsonb)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_teacher_id integer;
  v_subject_code text;
  v_subject_name text;
  v_subject_group text;
  v_grade_level text;
  v_category text;
  v_semester text;
  v_teacher_name text;
  v_inserted integer := 0;
  v_item jsonb;
  v_student_id integer;
  v_grade_failed_at text;
  v_new_id bigint;
begin
  select ms.teacher_id, ms.subject_code, ms.subject_name, ms.subject_group, ms.grade_level
  into v_teacher_id, v_subject_code, v_subject_name, v_subject_group, v_grade_level
  from public.classes c
  join public.master_subjects ms on ms.id = c.course_id
  where c.id = p_class_id;

  if v_teacher_id is null then
    raise exception 'ไม่พบวิชานี้';
  end if;

  if not exists (
    select 1 from public.teachers t
    where t.id = v_teacher_id and t.profile_id = auth.uid()
  ) then
    raise exception 'not authorized';
  end if;

  v_category := case when v_subject_group like 'AGM%' then 'ศาสนา' else 'สามัญ' end;
  select full_name into v_teacher_name from public.teachers where id = v_teacher_id;

  select
    (select value from public.system_config where key = 'semester') || '/' ||
    (select value from public.system_config where key = 'academicYear')
  into v_semester;

  for v_item in select * from jsonb_array_elements(coalesce(p_failing, '[]'::jsonb))
  loop
    v_new_id := null;
    v_student_id := (v_item->>'student_id')::integer;
    v_grade_failed_at := nullif(trim(v_item->>'grade_failed_at'), '');

    if v_student_id is null or v_grade_failed_at is null then
      continue;
    end if;
    if not exists (select 1 from public.class_students where class_id = p_class_id and student_id = v_student_id) then
      continue;
    end if;

    insert into public.regrade_subjects
      (student_id, teacher_id, subject_code, subject_name, category, class_level, semester, grade_failed_at, status, source, teacher_name_raw)
    values
      (v_student_id, v_teacher_id, v_subject_code, v_subject_name, v_category, v_grade_level, v_semester, v_grade_failed_at, 'ยังไม่แจ้ง', 'live', v_teacher_name)
    on conflict (student_id, subject_code, semester) do nothing
    returning id into v_new_id;

    if v_new_id is not null then v_inserted := v_inserted + 1; end if;
  end loop;

  return json_build_object(
    'ok', true,
    'total_failing', jsonb_array_length(coalesce(p_failing, '[]'::jsonb)),
    'submitted', v_inserted
  );
end;
$function$;

-- ฝั่ง JS ที่ต้องแก้คู่กัน (ทำแล้วในคอมมิตเดียวกับ patch นี้):
--   - js/regrade-api.js: เพิ่ม submitClassGradesToRegrade(classId, failingList) เรียก RPC นี้
--   - js/regrade.js renderSettings(): เพิ่มช่องวันที่ regrade_config.live_submit_open_date
--     (jsonb key/value เดิม ไม่ต้อง migration แยก) ใต้หัวข้อ "กำหนดเวลาตอบรับของครูผู้สอน"
--   - js/teacher-views-grades.js renderGradesGrid(): โหลด getRegradeConfig() เพิ่มใน Promise.all,
--     คำนวณ showRegradeSubmitBtn จากวันที่ปัจจุบัน >= live_submit_open_date, เพิ่มปุ่มในแถบ toggle bar
--     คำนวณรายชื่อ "ติด" จาก _calcGradeRow(s.id) (grade===0) รวมกับ scoreMap[s.id]['__force']
--     (ค่าบังคับเกรดที่ตั้งไว้ในเซสชันนี้) ก่อนส่ง — ดู [[project_regrade_kae_khang_kao]] หมายเหตุสำคัญ
--     ด้านล่าง เรื่อง __force ไม่ได้ persist ข้ามเซสชันจริง (บั๊กเดิมที่มีอยู่ก่อนแล้ว ไม่ได้แก้ในงานนี้)
