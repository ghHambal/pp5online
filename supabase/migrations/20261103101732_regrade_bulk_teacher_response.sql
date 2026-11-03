-- ตอบรับคำร้องแก้ค้างเก่าหลายคนในวิชาเดียวกันแบบ atomic
-- จำกัดสิทธิ์ไว้ที่ครูเจ้าของทุกรายการ และรับเฉพาะรายการที่ยังจำนงแล้ว
create or replace function public.regrade_teacher_save_responses(
  p_subject_ids bigint[],
  p_method text,
  p_due_text text,
  p_file_url text default null
)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_teacher_id integer;
  v_subject_code text;
  v_semester text;
  v_category text;
  v_requested_count integer;
  v_valid_count integer;
  v_updated integer;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;
  if p_method is null or p_method not in ('นัดสอบปรับ', 'ให้งานแก้') then raise exception 'วิธีตอบรับไม่ถูกต้อง'; end if;
  if nullif(btrim(p_due_text), '') is null then raise exception 'กรุณาเลือกวันที่'; end if;
  if p_subject_ids is null or cardinality(p_subject_ids) < 1 or cardinality(p_subject_ids) > 500 then
    raise exception 'กรุณาเลือกรายการนักเรียน 1 ถึง 500 คน';
  end if;
  if array_position(p_subject_ids, null) is not null then raise exception 'รายการที่เลือกไม่ถูกต้อง'; end if;

  select count(distinct selected_id)::integer
  into v_requested_count
  from unnest(p_subject_ids) as selected(selected_id);
  if v_requested_count <> cardinality(p_subject_ids) then raise exception 'มีรายการซ้ำในชุดที่เลือก'; end if;

  select t.id into v_teacher_id
  from public.teachers t
  where t.profile_id = v_uid;
  if v_teacher_id is null then raise exception 'ไม่พบบัญชีครูผู้สอน'; end if;

  -- ล็อกแถวก่อนตรวจสถานะ ป้องกันการตอบรับซ้ำ/เปลี่ยนสถานะพร้อมกัน
  perform rs.id
  from public.regrade_subjects rs
  where rs.id = any(p_subject_ids)
  order by rs.id
  for update;

  select rs.subject_code, rs.semester, rs.category
  into v_subject_code, v_semester, v_category
  from public.regrade_subjects rs
  where rs.id = any(p_subject_ids)
  order by rs.id
  limit 1;
  if not found then raise exception 'ไม่พบคำร้องที่เลือก'; end if;

  select count(*)::integer
  into v_valid_count
  from public.regrade_subjects rs
  where rs.id = any(p_subject_ids)
    and rs.teacher_id = v_teacher_id
    and rs.status = 'จำนงแล้ว'
    and rs.subject_code = v_subject_code
    and rs.semester is not distinct from v_semester
    and rs.category is not distinct from v_category;

  if v_valid_count <> v_requested_count then
    raise exception 'รายการที่เลือกมีคำร้องที่ไม่รอตอบรับ ไม่ใช่วิชาเดียวกัน หรือไม่ได้อยู่ในความรับผิดชอบของคุณ';
  end if;

  update public.regrade_subjects rs
  set status = 'กำลังดำเนินการปรับแก้',
      method = p_method,
      due_text = btrim(p_due_text),
      file_url = nullif(btrim(coalesce(p_file_url, '')), ''),
      slip_url = null,
      assigned_at = now(),
      updated_at = now()
  where rs.id = any(p_subject_ids)
    and rs.teacher_id = v_teacher_id
    and rs.status = 'จำนงแล้ว'
    and rs.subject_code = v_subject_code
    and rs.semester is not distinct from v_semester
    and rs.category is not distinct from v_category;

  get diagnostics v_updated = row_count;
  if v_updated <> v_requested_count then raise exception 'บันทึกไม่ครบทุกคน กรุณาโหลดข้อมูลใหม่แล้วลองอีกครั้ง'; end if;
  return v_updated;
end;
$$;

revoke all on function public.regrade_teacher_save_responses(bigint[], text, text, text) from public, anon;
grant execute on function public.regrade_teacher_save_responses(bigint[], text, text, text) to authenticated;
