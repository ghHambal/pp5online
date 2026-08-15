-- Safely remove a student from the active TERANGGANU participant roster.
-- Survey submissions and financial records are intentionally retained for audit.

create or replace function public.remove_terangganu_participant(p_student_id integer)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_student public.students%rowtype;
  v_had_registration boolean := false;
  v_active_payments integer := 0;
begin
  if auth.uid() is null then
    raise exception 'กรุณาเข้าสู่ระบบใหม่';
  end if;

  select * into v_event
  from public.terangganu_camp_events
  where slug = 'terangganu-2026'
  limit 1;

  if v_event.id is null then
    raise exception 'ไม่พบกิจกรรม TERANGGANU 2026';
  end if;
  if not public.terangganu_can(v_event.id, 'settings') then
    raise exception 'ไม่มีสิทธิ์ลบรายชื่อนักเรียน';
  end if;

  select * into v_student
  from public.students
  where id = p_student_id
  limit 1;
  if v_student.id is null then
    raise exception 'ไม่พบนักเรียน';
  end if;

  if not exists (
    select 1
    from public.terangganu_camp_participants cp
    where cp.event_id = v_event.id
      and cp.student_id = p_student_id
      and cp.active = true
  ) then
    raise exception 'นักเรียนไม่ได้อยู่ในรายชื่อผู้เข้าร่วมแล้ว';
  end if;

  select exists (
    select 1
    from public.terangganu_camp_registrations r
    where r.event_id = v_event.id
      and r.student_id = p_student_id
  ) into v_had_registration;

  select count(*)::integer into v_active_payments
  from public.terangganu_camp_payments p
  where p.event_id = v_event.id
    and p.student_id = p_student_id
    and p.voided_at is null;

  update public.terangganu_camp_participants
  set active = false,
      updated_at = now()
  where event_id = v_event.id
    and student_id = p_student_id
    and active = true;

  return jsonb_build_object(
    'removed', true,
    'student_id', v_student.id,
    'student_code', v_student.student_code,
    'full_name', v_student.full_name,
    'registration_retained', v_had_registration,
    'payment_records_retained', v_active_payments
  );
end;
$$;

revoke all on function public.remove_terangganu_participant(integer) from public, anon;
grant execute on function public.remove_terangganu_participant(integer) to authenticated;
