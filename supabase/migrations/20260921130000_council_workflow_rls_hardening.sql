-- Restrict council workflow access to administrators and assigned council advisors.

create or replace function public.is_council_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(get_user_role(), '') = 'admin'
    or exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and p.is_also_admin = true
    )
    or exists (
      select 1
      from public.teachers t
      where t.profile_id = auth.uid()
        and (
          t.position = 'council_advisor'
          or 'council_advisor' = any(coalesce(t.positions, '{}'::text[]))
        )
    );
$$;

revoke all on function public.is_council_staff() from public;
revoke execute on function public.is_council_staff() from anon;
grant execute on function public.is_council_staff() to authenticated;

drop policy if exists council_applications_teacher_admin on public.council_applications;
create policy council_applications_teacher_admin
  on public.council_applications
  for all to authenticated
  using (public.is_council_staff())
  with check (public.is_council_staff());

drop policy if exists council_interviews_teacher_admin on public.council_interviews;
create policy council_interviews_teacher_admin
  on public.council_interviews
  for all to authenticated
  using (public.is_council_staff())
  with check (public.is_council_staff());

drop policy if exists council_candidates_admin_write on public.council_candidates;
create policy council_candidates_admin_write
  on public.council_candidates
  for all to authenticated
  using (public.is_council_staff())
  with check (public.is_council_staff());

drop policy if exists council_election_config_admin_write on public.council_election_config;
create policy council_election_config_admin_write
  on public.council_election_config
  for all to authenticated
  using (public.is_council_staff())
  with check (public.is_council_staff());

create or replace function public.appoint_council_member_atomic(
  p_application_id bigint,
  p_position_id bigint,
  p_student_id integer,
  p_academic_year integer,
  p_appointed_by_teacher_id integer default null
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_member_id bigint;
begin
  if not public.is_council_staff() then
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
