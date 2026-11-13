-- Allow the assigned council advisor and the appointed head of Ibadat to use
-- the existing student-council prayer scanner without granting the scanner
-- permission to other teachers or council members.

create or replace function public.is_council_ibadat_prayer_scanner()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select
    exists (
      select 1
      from public.teachers t
      join public.council_advisor_positions ap on ap.teacher_id = t.id
      join public.council_positions p on p.id = ap.position_id
      where t.profile_id = (select auth.uid())
        and p.is_active is true
        and p.position_name = 'ฝ่ายอีบาดัต'
    )
    or exists (
      select 1
      from public.students s
      join public.council_members cm on cm.student_id = s.id
      join public.council_positions p on p.id = cm.position_id
      join public.council_terms ct on ct.id = cm.term_id
      where s.profile_id = (select auth.uid())
        and cm.status = 'active'
        and cm.position_role = 'head'
        and p.is_active is true
        and p.position_name = 'ฝ่ายอีบาดัต'
        and ct.status = 'active'
    );
$$;

revoke all on function public.is_council_ibadat_prayer_scanner() from public, anon;
grant execute on function public.is_council_ibadat_prayer_scanner() to authenticated;

-- Let only the assigned Ibadat advisor or appointed Ibadat head manage scanner
-- permissions for students who are active council members in the active term.
create or replace function public.set_council_prayer_scanners(
  p_student_ids bigint[],
  p_enabled boolean
)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student_ids bigint[];
  v_eligible_count integer;
  v_updated_count integer;
begin
  if p_enabled is null then
    raise exception 'enabled flag is required';
  end if;

  if not public.is_council_ibadat_prayer_scanner() then
    raise exception 'not authorized to manage council prayer scanners' using errcode = '42501';
  end if;

  select coalesce(array_agg(distinct id), '{}'::bigint[])
    into v_student_ids
  from unnest(coalesce(p_student_ids, '{}'::bigint[])) as requested(id)
  where id is not null;

  if cardinality(v_student_ids) = 0 then
    raise exception 'select at least one council student';
  end if;

  select count(distinct cm.student_id)::integer
    into v_eligible_count
  from public.council_members cm
  join public.council_terms ct on ct.id = cm.term_id
  where cm.student_id = any(v_student_ids)
    and cm.status = 'active'
    and ct.status = 'active';

  if v_eligible_count <> cardinality(v_student_ids) then
    raise exception 'all selected students must be active council members in the active term';
  end if;

  update public.students s
  set can_scan_prayer = p_enabled
  where s.id = any(v_student_ids)
    and s.can_scan_prayer is distinct from p_enabled;

  get diagnostics v_updated_count = row_count;
  return v_updated_count;
end;
$$;

revoke all on function public.set_council_prayer_scanners(bigint[], boolean) from public, anon;
grant execute on function public.set_council_prayer_scanners(bigint[], boolean) to authenticated;

drop policy if exists prayer_records_scanner_select on public.prayer_records;
create policy prayer_records_scanner_select
  on public.prayer_records for select to authenticated
  using (
    exists (
      select 1 from public.students s
      where s.profile_id = (select auth.uid()) and s.can_scan_prayer is true
    )
    or public.is_council_ibadat_prayer_scanner()
  );

drop policy if exists prayer_records_scanner_insert on public.prayer_records;
create policy prayer_records_scanner_insert
  on public.prayer_records for insert to authenticated
  with check (
    exists (
      select 1 from public.students s
      where s.profile_id = (select auth.uid()) and s.can_scan_prayer is true
    )
    or public.is_council_ibadat_prayer_scanner()
  );

drop policy if exists prayer_records_scanner_delete on public.prayer_records;
create policy prayer_records_scanner_delete
  on public.prayer_records for delete to authenticated
  using (
    exists (
      select 1 from public.students s
      where s.profile_id = (select auth.uid()) and s.can_scan_prayer is true
    )
    or public.is_council_ibadat_prayer_scanner()
  );
