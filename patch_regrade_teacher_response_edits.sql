-- อนุญาตให้ครูแก้/เปลี่ยน/ยกเลิกคำตอบแก้ค้างเก่าของตนเอง
-- ใช้ RPC เพื่อจำกัดคอลัมน์ที่แก้ได้ แทนการขยาย RLS UPDATE ให้แก้ทั้งแถว

create or replace function public.regrade_teacher_save_response(
  p_subject_id bigint,
  p_method text,
  p_due_text text,
  p_file_url text default null
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_updated bigint;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;
  if p_method not in ('นัดสอบปรับ', 'ให้งานแก้') then raise exception 'วิธีตอบรับไม่ถูกต้อง'; end if;
  if nullif(btrim(p_due_text), '') is null then raise exception 'กรุณาเลือกวันที่'; end if;

  update public.regrade_subjects rs
  set status = 'กำลังดำเนินการปรับแก้',
      method = p_method,
      due_text = btrim(p_due_text),
      file_url = nullif(btrim(coalesce(p_file_url, '')), ''),
      slip_url = null,
      assigned_at = now(),
      updated_at = now()
  where rs.id = p_subject_id
    and rs.status in ('จำนงแล้ว', 'กำลังดำเนินการปรับแก้')
    and exists (
      select 1 from public.teachers t
      where t.id = rs.teacher_id and t.profile_id = v_uid
    );

  get diagnostics v_updated = row_count;
  if v_updated <> 1 then raise exception 'ไม่พบรายการที่แก้ไขได้ หรือรายการถูกปิดงานแล้ว'; end if;
  return true;
end;
$$;

create or replace function public.regrade_teacher_cancel_response(p_subject_id bigint)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_updated bigint;
begin
  if v_uid is null then raise exception 'กรุณาเข้าสู่ระบบใหม่'; end if;

  update public.regrade_subjects rs
  set status = 'จำนงแล้ว',
      method = null,
      due_text = null,
      file_url = null,
      slip_url = null,
      assigned_at = null,
      updated_at = now()
  where rs.id = p_subject_id
    and rs.status = 'กำลังดำเนินการปรับแก้'
    and exists (
      select 1 from public.teachers t
      where t.id = rs.teacher_id and t.profile_id = v_uid
    );

  get diagnostics v_updated = row_count;
  if v_updated <> 1 then raise exception 'ไม่พบรายการที่ยกเลิกได้ หรือรายการถูกปิดงานแล้ว'; end if;
  return true;
end;
$$;

revoke all on function public.regrade_teacher_save_response(bigint, text, text, text) from public, anon;
revoke all on function public.regrade_teacher_cancel_response(bigint) from public, anon;
grant execute on function public.regrade_teacher_save_response(bigint, text, text, text) to authenticated;
grant execute on function public.regrade_teacher_cancel_response(bigint) to authenticated;
