-- Protect council appointment and election candidate workflow from duplicate requests.

create unique index if not exists council_members_active_student_position_key
  on public.council_members (academic_year, student_id, position_id)
  where status = 'active';

create unique index if not exists council_candidates_election_ballot_key
  on public.council_candidates (election_config_id, ballot_number)
  where ballot_number is not null;

create or replace function public.appoint_council_member_atomic(
  p_application_id bigint,
  p_position_id bigint,
  p_student_id integer,
  p_academic_year integer,
  p_appointed_by_teacher_id integer default null
)
returns bigint
language plpgsql
set search_path = public
as $$
declare
  v_member_id bigint;
begin
  if get_user_role() <> all (array['admin', 'teacher']) then
    raise exception 'not authorized to appoint council member';
  end if;

  if not exists (
    select 1
    from public.council_applications a
    where a.id = p_application_id
      and a.position_id = p_position_id
      and a.student_id = p_student_id
      and a.academic_year = p_academic_year
      and a.status in ('interviewed', 'candidate')
      and a.deleted_at is null
  ) then
    raise exception 'application is not eligible for appointment';
  end if;

  insert into public.council_members (
    position_id, student_id, academic_year, source, status,
    term_start_date, appointed_by_teacher_id
  ) values (
    p_position_id, p_student_id, p_academic_year, 'appointed', 'active',
    current_date, p_appointed_by_teacher_id
  )
  on conflict (academic_year, student_id, position_id) where status = 'active'
  do update set updated_at = now()
  returning id into v_member_id;

  update public.council_applications
  set status = 'appointed', updated_at = now()
  where id = p_application_id;

  return v_member_id;
end;
$$;

revoke all on function public.appoint_council_member_atomic(bigint, bigint, integer, integer, integer) from public;
revoke execute on function public.appoint_council_member_atomic(bigint, bigint, integer, integer, integer) from anon;
grant execute on function public.appoint_council_member_atomic(bigint, bigint, integer, integer, integer) to authenticated;
