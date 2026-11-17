-- Let administrators choose which current council gender roster may hold both
-- shared officer roles in each term. The immediate operational default is M.
create table if not exists public.council_officer_settings (
  term_id bigint primary key references public.council_terms(id) on delete restrict,
  dual_role_genders text[] not null default array['M']::text(),
  updated_by_profile_id uuid references public.profiles(id) on delete set null,
  updated_at timestamptz not null default now(),
  constraint council_officer_settings_valid_genders
    check (dual_role_genders <@ array['M', 'W']::text[])
);

insert into public.council_officer_settings(term_id)
select id from public.council_terms where status in ('active', 'upcoming')
on conflict (term_id) do nothing;

alter table public.council_officer_settings enable row level security;
revoke all on public.council_officer_settings from public, anon, authenticated;
grant select on public.council_officer_settings to authenticated;
drop policy if exists council_officer_settings_read on public.council_officer_settings;
create policy council_officer_settings_read on public.council_officer_settings
  for select to authenticated using (auth.uid() is not null);

-- A student may now occupy both central roles when their roster gender is
-- enabled for the selected term. Database checks remain authoritative.
drop index if exists public.council_officer_assignments_one_role_per_student_idx;

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
declare
  v_gender text;
  v_allowed_genders text[];
begin
  if auth.uid() is null or not public.is_council_staff() then
    raise exception 'not authorized to assign council officers';
  end if;
  if p_role_key is null or p_role_key not in ('secretary', 'treasurer') then
    raise exception 'invalid council officer role';
  end if;

  perform 1 from public.council_terms t
  where t.id = p_term_id and t.status in ('active', 'upcoming')
  for update;
  if not found then
    raise exception 'council term is not editable';
  end if;

  if p_student_id is not null then
    select cp.gender into v_gender
    from public.council_members cm
    join public.council_positions cp on cp.id = cm.position_id
    where cm.term_id = p_term_id and cm.student_id = p_student_id and cm.status = 'active'
    limit 1;
    if not found then
      raise exception 'selected student must be an active council member in this term';
    end if;

    if exists (
      select 1 from public.council_officer_assignments a
      where a.term_id = p_term_id and a.student_id = p_student_id and a.role_key <> p_role_key
    ) then
      select coalesce(s.dual_role_genders, array['M']::text[]) into v_allowed_genders
      from public.council_officer_settings s where s.term_id = p_term_id;
      if not coalesce(v_gender = any(v_allowed_genders), false) then
        raise exception 'this gender roster is not enabled to hold both shared officer roles';
      end if;
    end if;
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

create or replace function public.save_council_officer_settings(
  p_term_id bigint,
  p_dual_role_genders text[]
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_genders text[] := coalesce(p_dual_role_genders, array[]::text[]);
begin
  if auth.uid() is null or not public.is_council_staff() then
    raise exception 'not authorized to change council officer settings';
  end if;

  perform 1 from public.council_terms t
  where t.id = p_term_id and t.status in ('active', 'upcoming')
  for update;
  if not found then
    raise exception 'council term is not editable';
  end if;
  if not (v_genders <@ array['M', 'W']::text[])
    or cardinality(v_genders) <> (select count(distinct gender) from unnest(v_genders) as items(gender)) then
    raise exception 'dual-role genders must be selected from M and W without duplicates';
  end if;

  if exists (
    select 1
    from public.council_officer_assignments a
    join public.council_members cm on cm.term_id = a.term_id and cm.student_id = a.student_id and cm.status = 'active'
    join public.council_positions cp on cp.id = cm.position_id
    where a.term_id = p_term_id and a.student_id is not null
      and cp.gender <> all(v_genders)
      and exists (
        select 1 from public.council_officer_assignments other_role
        where other_role.term_id = a.term_id and other_role.student_id = a.student_id
          and other_role.role_key <> a.role_key
      )
  ) then
    raise exception 'clear or reassign the current dual-role holder before disabling their gender roster';
  end if;

  insert into public.council_officer_settings(term_id, dual_role_genders, updated_by_profile_id, updated_at)
  values (p_term_id, v_genders, auth.uid(), now())
  on conflict (term_id) do update
    set dual_role_genders = excluded.dual_role_genders,
        updated_by_profile_id = excluded.updated_by_profile_id,
        updated_at = excluded.updated_at;
end;
$$;
revoke all on function public.save_council_officer_settings(bigint, text[]) from public, anon;
grant execute on function public.save_council_officer_settings(bigint, text[]) to authenticated;
