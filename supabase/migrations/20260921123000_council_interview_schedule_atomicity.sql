-- Make council interview scheduling and application status transition atomic.

create or replace function public.schedule_council_interview_atomic(
  p_application_id bigint,
  p_scheduled_at timestamptz,
  p_location text default null,
  p_interviewer_teacher_id integer default null,
  p_interview_id bigint default null
)
returns bigint
language plpgsql
set search_path = public
as $$
declare
  v_application public.council_applications%rowtype;
  v_interview_id bigint;
  v_peer_required boolean;
begin
  if coalesce(get_user_role(), '') <> all (array['admin', 'teacher']) then
    raise exception 'not authorized to schedule council interview';
  end if;
  if p_scheduled_at is null then
    raise exception 'interview date and time are required';
  end if;

  select * into v_application
  from public.council_applications
  where id = p_application_id
    and deleted_at is null
    and status in ('pending', 'interview_scheduled')
    and endorsed_at is not null
  for update;
  if not found then
    raise exception 'application is not eligible for interview scheduling';
  end if;

  select coalesce(nullif(value, ''), 'false') = 'true'
    into v_peer_required
  from public.system_config
  where key = 'council_require_peer_endorsement';
  if coalesce(v_peer_required, false)
     and v_application.peer_endorsed_at is null
     and not exists (
       select 1
       from public.council_members cm
       where cm.student_id = v_application.student_id
         and cm.status = 'active'
     ) then
    raise exception 'peer endorsement is required before interview scheduling';
  end if;

  if p_interview_id is not null then
    update public.council_interviews
    set scheduled_at = p_scheduled_at,
        location = p_location,
        interviewer_teacher_id = p_interviewer_teacher_id,
        updated_at = now()
    where id = p_interview_id
      and application_id = p_application_id;
    if not found then
      raise exception 'interview does not belong to application';
    end if;
    v_interview_id := p_interview_id;
  else
    select id into v_interview_id
    from public.council_interviews
    where application_id = p_application_id
    order by id desc
    limit 1
    for update;

    if v_interview_id is null then
      insert into public.council_interviews (
        application_id, scheduled_at, location, interviewer_teacher_id
      ) values (
        p_application_id, p_scheduled_at, p_location, p_interviewer_teacher_id
      ) returning id into v_interview_id;
    else
      update public.council_interviews
      set scheduled_at = p_scheduled_at,
          location = p_location,
          interviewer_teacher_id = p_interviewer_teacher_id,
          updated_at = now()
      where id = v_interview_id;
    end if;
  end if;

  update public.council_applications
  set status = 'interview_scheduled', updated_at = now()
  where id = p_application_id;

  return v_interview_id;
end;
$$;

revoke all on function public.schedule_council_interview_atomic(bigint, timestamptz, text, integer, bigint) from public;
revoke execute on function public.schedule_council_interview_atomic(bigint, timestamptz, text, integer, bigint) from anon;
grant execute on function public.schedule_council_interview_atomic(bigint, timestamptz, text, integer, bigint) to authenticated;
