alter table public.regrade_subjects
  add column if not exists work_url text;

comment on column public.regrade_subjects.work_url is
  'ลิงก์ URL งานหรือเอกสารที่ครูมอบหมาย แยกจากไฟล์แนบ';

-- RPC สำหรับการตอบรับรายคนและเป็นชุด รับลิงก์งานเป็นฟิลด์แยกจากไฟล์แนบ
create or replace function public.regrade_teacher_save_response(
  p_subject_id bigint,
  p_method text,
  p_due_text text,
  p_file_url text,
  p_teacher_note text,
  p_teacher_note_style jsonb,
  p_teacher_note_image_url text,
  p_work_url text
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_uid uuid := auth.uid();
  v_updated integer;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;
  if nullif(btrim(coalesce(p_work_url, '')), '') is not null and (
    length(btrim(p_work_url)) > 2000
    or btrim(p_work_url) !~* '^https?://[^[:space:]]+$'
    or btrim(p_work_url) ~* '^https?://[^/@]+:[^/@]+@'
  ) then raise exception 'ลิงก์งานต้องเป็น URL http หรือ https ที่ถูกต้อง'; end if;

  perform public.regrade_teacher_save_response(
    p_subject_id, p_method, p_due_text, p_file_url,
    p_teacher_note, p_teacher_note_style, p_teacher_note_image_url
  );

  update public.regrade_subjects rs
  set work_url = case when p_method = 'ให้งานแก้' then nullif(btrim(coalesce(p_work_url, '')), '') else null end,
      updated_at = now()
  where rs.id = p_subject_id
    and exists (select 1 from public.teachers t where t.id = rs.teacher_id and t.profile_id = v_uid);
  get diagnostics v_updated = row_count;
  if v_updated <> 1 then raise exception 'บันทึกลิงก์งานไม่สำเร็จ'; end if;
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
  p_teacher_note_image_url text,
  p_work_url text
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
  v_links_updated integer;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;
  if nullif(btrim(coalesce(p_work_url, '')), '') is not null and (
    length(btrim(p_work_url)) > 2000
    or btrim(p_work_url) !~* '^https?://[^[:space:]]+$'
    or btrim(p_work_url) ~* '^https?://[^/@]+:[^/@]+@'
  ) then raise exception 'ลิงก์งานต้องเป็น URL http หรือ https ที่ถูกต้อง'; end if;

  v_updated := public.regrade_teacher_save_responses(
    p_subject_ids, p_method, p_due_text, p_file_url,
    p_teacher_note, p_teacher_note_style, p_teacher_note_image_url
  );
  select t.id into v_teacher_id from public.teachers t where t.profile_id = v_uid;
  update public.regrade_subjects rs
  set work_url = case when p_method = 'ให้งานแก้' then nullif(btrim(coalesce(p_work_url, '')), '') else null end,
      updated_at = now()
  where rs.id = any(p_subject_ids)
    and rs.teacher_id = v_teacher_id
    and rs.status = 'กำลังดำเนินการปรับแก้';
  get diagnostics v_links_updated = row_count;
  if v_links_updated <> v_updated then raise exception 'บันทึกลิงก์งานไม่ครบทุกคน'; end if;
  return v_updated;
end;
$function$;

-- แก้คำตอบเป็นชุด เฉพาะรายการที่ครูเจ้าของตอบรับไปแล้ว
create or replace function public.regrade_teacher_update_responses(
  p_subject_ids bigint[],
  p_method text,
  p_due_text text,
  p_file_url text,
  p_teacher_note text,
  p_teacher_note_style jsonb,
  p_teacher_note_image_url text,
  p_work_url text,
  p_preserve_file_if_empty boolean,
  p_preserve_note_if_untouched boolean,
  p_preserve_work_url_if_empty boolean
)
returns integer
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_uid uuid := auth.uid();
  v_teacher_id integer;
  v_requested_count integer;
  v_valid_count integer;
  v_group_count integer;
  v_updated integer;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;
  if p_method is null or p_method not in ('นัดสอบปรับ', 'ให้งานแก้') then raise exception 'วิธีตอบรับไม่ถูกต้อง'; end if;
  if nullif(btrim(p_due_text), '') is null then raise exception 'กรุณาเลือกวันที่'; end if;
  if length(coalesce(p_teacher_note, '')) > 5000 then raise exception 'คำชี้แจงยาวเกิน 5,000 ตัวอักษร'; end if;
  if p_method = 'ให้งานแก้' and nullif(btrim(coalesce(p_work_url, '')), '') is not null and (
    length(btrim(p_work_url)) > 2000
    or btrim(p_work_url) !~* '^https?://[^[:space:]]+$'
    or btrim(p_work_url) ~* '^https?://[^/@]+:[^/@]+@'
  ) then raise exception 'ลิงก์งานต้องเป็น URL http หรือ https ที่ถูกต้อง'; end if;
  if p_subject_ids is null or cardinality(p_subject_ids) < 1 or cardinality(p_subject_ids) > 500 then
    raise exception 'กรุณาเลือกรายการนักเรียน 1 ถึง 500 คน';
  end if;
  if array_position(p_subject_ids, null) is not null then raise exception 'รายการที่เลือกไม่ถูกต้อง'; end if;

  select count(distinct selected_id)::integer into v_requested_count
  from unnest(p_subject_ids) as selected(selected_id);
  if v_requested_count <> cardinality(p_subject_ids) then raise exception 'มีรายการซ้ำในชุดที่เลือก'; end if;

  select t.id into v_teacher_id from public.teachers t where t.profile_id = v_uid;
  if v_teacher_id is null then raise exception 'ไม่พบบัญชีครูผู้สอน'; end if;

  perform rs.id from public.regrade_subjects rs
  where rs.id = any(p_subject_ids) order by rs.id for update;

  select count(distinct (rs.subject_code, rs.semester, rs.category))::integer
  into v_group_count from public.regrade_subjects rs where rs.id = any(p_subject_ids);
  if v_group_count <> 1 then raise exception 'กรุณาเลือกนักเรียนจากรายวิชาและภาคเรียนเดียวกัน'; end if;

  select count(*)::integer into v_valid_count
  from public.regrade_subjects rs
  where rs.id = any(p_subject_ids)
    and rs.teacher_id = v_teacher_id
    and rs.status = 'กำลังดำเนินการปรับแก้';
  if v_valid_count <> v_requested_count then
    raise exception 'รายการที่เลือกมีข้อมูลที่ไม่อยู่ในความรับผิดชอบ หรือไม่ได้อยู่ระหว่างดำเนินการ กรุณาโหลดข้อมูลใหม่';
  end if;

  update public.regrade_subjects rs
  set method = p_method,
      due_text = btrim(p_due_text),
      file_url = case
        when p_method <> 'ให้งานแก้' then null
        when p_preserve_file_if_empty and nullif(btrim(coalesce(p_file_url, '')), '') is null then rs.file_url
        else nullif(btrim(coalesce(p_file_url, '')), '')
      end,
      work_url = case
        when p_method <> 'ให้งานแก้' then null
        when nullif(btrim(coalesce(p_work_url, '')), '') is not null then btrim(p_work_url)
        when p_preserve_work_url_if_empty then rs.work_url
        else null
      end,
      teacher_note = case when p_preserve_note_if_untouched then rs.teacher_note else nullif(btrim(coalesce(p_teacher_note, '')), '') end,
      teacher_note_style = case
        when p_preserve_note_if_untouched then rs.teacher_note_style
        when jsonb_typeof(p_teacher_note_style) = 'object' then p_teacher_note_style
        else null
      end,
      teacher_note_image_url = case when p_preserve_note_if_untouched then rs.teacher_note_image_url else nullif(btrim(coalesce(p_teacher_note_image_url, '')), '') end,
      slip_url = null,
      assigned_at = now(),
      updated_at = now()
  where rs.id = any(p_subject_ids)
    and rs.teacher_id = v_teacher_id
    and rs.status = 'กำลังดำเนินการปรับแก้';

  get diagnostics v_updated = row_count;
  if v_updated <> v_requested_count then raise exception 'บันทึกไม่ครบทุกคน กรุณาโหลดข้อมูลใหม่แล้วลองอีกครั้ง'; end if;
  return v_updated;
end;
$function$;

revoke all on function public.regrade_teacher_save_response(bigint, text, text, text, text, jsonb, text, text) from public, anon;
grant execute on function public.regrade_teacher_save_response(bigint, text, text, text, text, jsonb, text, text) to authenticated;
revoke all on function public.regrade_teacher_save_responses(bigint[], text, text, text, text, jsonb, text, text) from public, anon;
grant execute on function public.regrade_teacher_save_responses(bigint[], text, text, text, text, jsonb, text, text) to authenticated;
revoke all on function public.regrade_teacher_update_responses(bigint[], text, text, text, text, jsonb, text, text, boolean, boolean, boolean) from public, anon;
grant execute on function public.regrade_teacher_update_responses(bigint[], text, text, text, text, jsonb, text, text, boolean, boolean, boolean) to authenticated;
