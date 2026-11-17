-- Shared council officers may be selected from either gender roster without
-- replacing their existing department membership.
create table if not exists public.council_officer_assignments (
  term_id bigint not null references public.council_terms(id) on delete restrict,
  role_key text not null check (role_key in ('secretary', 'treasurer')),
  student_id integer references public.students(id) on delete set null,
  assigned_by_profile_id uuid references public.profiles(id) on delete set null,
  updated_at timestamptz not null default now(),
  primary key (term_id, role_key)
);

create unique index if not exists council_officer_assignments_one_role_per_student_idx
  on public.council_officer_assignments(term_id, student_id)
  where student_id is not null;

alter table public.council_officer_assignments enable row level security;
revoke all on public.council_officer_assignments from public, anon, authenticated;
grant select on public.council_officer_assignments to authenticated;

drop policy if exists council_officer_assignments_read on public.council_officer_assignments;
create policy council_officer_assignments_read
  on public.council_officer_assignments for select to authenticated
  using (auth.uid() is not null);

create or replace function public.assign_council_officer(
  p_term_id bigint,
  p_role_key text,
  p_student_id integer default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or not public.is_council_staff() then
    raise exception 'not authorized to assign council officers';
  end if;
  if p_role_key is null or p_role_key not in ('secretary', 'treasurer') then
    raise exception 'invalid council officer role';
  end if;
  if not exists (
    select 1 from public.council_terms t
    where t.id = p_term_id and t.status in ('active', 'upcoming')
  ) then
    raise exception 'council term is not editable';
  end if;
  if p_student_id is not null and not exists (
    select 1 from public.council_members cm
    where cm.term_id = p_term_id and cm.student_id = p_student_id and cm.status = 'active'
  ) then
    raise exception 'selected student must be an active council member in this term';
  end if;
  if p_student_id is not null and exists (
    select 1 from public.council_officer_assignments a
    where a.term_id = p_term_id and a.student_id = p_student_id and a.role_key <> p_role_key
  ) then
    raise exception 'student already holds another shared council office';
  end if;

  insert into public.council_officer_assignments(term_id, role_key, student_id, assigned_by_profile_id, updated_at)
  values (p_term_id, p_role_key, p_student_id, auth.uid(), now())
  on conflict (term_id, role_key) do update
    set student_id = excluded.student_id,
        assigned_by_profile_id = excluded.assigned_by_profile_id,
        updated_at = excluded.updated_at;
end;
$$;
revoke all on function public.assign_council_officer(bigint, text, integer) from public, anon;
grant execute on function public.assign_council_officer(bigint, text, integer) to authenticated;

-- Stop offering the former gender-specific duplicates; historical memberships
-- remain intact and are still linked to their original positions.
update public.council_positions
set is_active = false
where position_name in ('เลขานุการ', 'เหรัญญิก') and is_active = true;

-- Keep existing treasurer-head access working while granting the new shared
-- treasurer assignment the same savings-management permission.
create or replace function public.can_manage_council_savings(p_term_id bigint)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select auth.uid() is not null and (
    public.is_council_staff()
    or exists (
      select 1
      from public.students s
      join public.council_members cm on cm.student_id = s.id
      join public.council_positions cp on cp.id = cm.position_id
      where s.profile_id = auth.uid()
        and cm.term_id = p_term_id
        and cm.status = 'active'
        and cm.position_role = 'head'
        and cp.position_name ilike '%เหรัญญิก%'
    )
    or exists (
      select 1
      from public.council_officer_assignments a
      join public.students s on s.id = a.student_id
      where a.term_id = p_term_id
        and a.role_key = 'treasurer'
        and s.profile_id = auth.uid()
        and exists (
          select 1 from public.council_members cm
          where cm.term_id = a.term_id and cm.student_id = a.student_id and cm.status = 'active'
        )
    )
  );
$$;
revoke all on function public.can_manage_council_savings(bigint) from public, anon;
grant execute on function public.can_manage_council_savings(bigint) to authenticated;
