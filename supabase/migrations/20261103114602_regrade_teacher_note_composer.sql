alter table public.regrade_subjects
  add column if not exists teacher_note text,
  add column if not exists teacher_note_style jsonb,
  add column if not exists teacher_note_image_url text;

comment on column public.regrade_subjects.teacher_note is
  'คำชี้แจงจากครูที่แสดงให้นักเรียนเห็นในระบบแก้ค้างเก่า';
comment on column public.regrade_subjects.teacher_note_style is
  'รูปแบบตัวอักษร สี และขนาดของคำชี้แจง';
comment on column public.regrade_subjects.teacher_note_image_url is
  'ภาพคำชี้แจงที่ระบบสร้างเพื่อเปิดหรือดาวน์โหลด';

create or replace function public.regrade_teacher_save_response(
  p_subject_id bigint,
  p_method text,
  p_due_text text,
  p_file_url text,
  p_teacher_note text,
  p_teacher_note_style jsonb,
  p_teacher_note_image_url text
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_uid uuid := auth.uid();
  v_updated bigint;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;
  if length(coalesce(p_teacher_note, '')) > 5000 then raise exception 'คำชี้แจงยาวเกิน 5,000 ตัวอักษร'; end if;

  perform public.regrade_teacher_save_response(p_subject_id, p_method, p_due_text, p_file_url);

  update public.regrade_subjects rs
  set teacher_note = nullif(btrim(coalesce(p_teacher_note, '')), ''),
      teacher_note_style = case when jsonb_typeof(p_teacher_note_style) = 'object' then p_teacher_note_style else null end,
      teacher_note_image_url = nullif(btrim(coalesce(p_teacher_note_image_url, '')), ''),
      updated_at = now()
  where rs.id = p_subject_id
    and exists (select 1 from public.teachers t where t.id = rs.teacher_id and t.profile_id = v_uid);

  get diagnostics v_updated = row_count;
  if v_updated <> 1 then raise exception 'บันทึกคำชี้แจงไม่สำเร็จ'; end if;
  return true;
end;
$function$;

create or replace function public.regrade_teacher_save_responses(
  p_subject_ids bigint[],
  p_method text,
  p_due_text text,
  p_file_url text,
  p_teacher_note text,
  p_teacher_note_style jsonb,
  p_teacher_note_image_url text
)
returns integer
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_uid uuid := auth.uid();
  v_teacher_id integer;
  v_updated integer;
  v_notes_updated integer;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;
  if length(coalesce(p_teacher_note, '')) > 5000 then raise exception 'คำชี้แจงยาวเกิน 5,000 ตัวอักษร'; end if;

  v_updated := public.regrade_teacher_save_responses(p_subject_ids, p_method, p_due_text, p_file_url);

  select t.id into v_teacher_id from public.teachers t where t.profile_id = v_uid;
  update public.regrade_subjects rs
  set teacher_note = nullif(btrim(coalesce(p_teacher_note, '')), ''),
      teacher_note_style = case when jsonb_typeof(p_teacher_note_style) = 'object' then p_teacher_note_style else null end,
      teacher_note_image_url = nullif(btrim(coalesce(p_teacher_note_image_url, '')), ''),
      updated_at = now()
  where rs.id = any(p_subject_ids)
    and rs.teacher_id = v_teacher_id
    and rs.status = 'กำลังดำเนินการปรับแก้';

  get diagnostics v_notes_updated = row_count;
  if v_notes_updated <> v_updated then raise exception 'บันทึกคำชี้แจงไม่ครบทุกคน'; end if;
  return v_updated;
end;
$function$;

revoke all on function public.regrade_teacher_save_response(bigint, text, text, text, text, jsonb, text) from public, anon;
grant execute on function public.regrade_teacher_save_response(bigint, text, text, text, text, jsonb, text) to authenticated;
revoke all on function public.regrade_teacher_save_responses(bigint[], text, text, text, text, jsonb, text) from public, anon;
grant execute on function public.regrade_teacher_save_responses(bigint[], text, text, text, text, jsonb, text) to authenticated;
