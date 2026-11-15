-- Reusable named layouts for council print rosters. Templates are personal to the
-- signed-in user so a saved layout is available across devices without exposing
-- another user's uploaded logo URL or preferences.
create table if not exists public.council_roster_templates (
  id bigint generated always as identity primary key,
  owner_profile_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  template_scope text not null check (template_scope in ('yla', 'council_attendance', 'roster')),
  name text not null check (length(btrim(name)) between 1 and 80),
  settings jsonb not null check (jsonb_typeof(settings) = 'object'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_profile_id, template_scope, name)
);

alter table public.council_roster_templates enable row level security;
drop policy if exists council_roster_templates_owner_access on public.council_roster_templates;
create policy council_roster_templates_owner_access on public.council_roster_templates
  for all to authenticated
  using (owner_profile_id = auth.uid())
  with check (owner_profile_id = auth.uid());
grant select, insert, update, delete on public.council_roster_templates to authenticated;
grant usage, select on sequence public.council_roster_templates_id_seq to authenticated;

-- A daily council duty log is separate from prayer check-ins and scheduled-event
-- attendance. It records whether a council member carried out a specific duty.
create table if not exists public.council_daily_duty_attendance (
  id bigint generated always as identity primary key,
  term_id bigint not null references public.council_terms(id) on delete restrict,
  membership_id bigint not null references public.council_members(id) on delete restrict,
  duty_date date not null,
  duty_type text not null check (duty_type in ('assembly', 'dhuhr', 'asr')),
  status text not null check (status in ('present', 'late', 'absent', 'excused')),
  note text,
  recorded_by_profile_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (term_id, membership_id, duty_date, duty_type)
);
create index if not exists council_daily_duty_lookup_idx
  on public.council_daily_duty_attendance (term_id, duty_date, duty_type, membership_id);
alter table public.council_daily_duty_attendance enable row level security;
revoke all on public.council_daily_duty_attendance from anon, authenticated;

create or replace function public.can_manage_council_daily_duty(p_term_id bigint, p_position_id bigint)
returns boolean
language sql stable security definer set search_path = ''
as $$
  select coalesce(public.get_user_role() = 'admin', false)
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_also_admin)
    or exists (
      select 1 from public.teachers t
      join public.council_advisor_positions ap on ap.teacher_id = t.id
      where t.profile_id = auth.uid() and ap.position_id = p_position_id
    )
    or exists (
      select 1 from public.students s
      join public.council_members chair on chair.student_id = s.id
      join public.council_positions chair_position on chair_position.id = chair.position_id
      join public.council_members target_member on target_member.term_id = chair.term_id
      join public.council_positions target_position on target_position.id = target_member.position_id
      where s.profile_id = auth.uid()
        and chair.term_id = p_term_id and chair.status = 'active'
        and chair_position.is_elected and chair_position.gender = target_position.gender
        and target_member.position_id = p_position_id and target_member.status = 'active'
    );
$$;
revoke all on function public.can_manage_council_daily_duty(bigint, bigint) from public, anon;
grant execute on function public.can_manage_council_daily_duty(bigint, bigint) to authenticated;

create or replace function public.get_council_daily_duty_attendance(
  p_term_id bigint, p_duty_date date, p_duty_type text
)
returns table(membership_id bigint, status text, note text)
language plpgsql stable security definer set search_path = ''
as $$
begin
  if auth.uid() is null or p_term_id is null or p_duty_date is null
     or p_duty_type is null or p_duty_type not in ('assembly', 'dhuhr', 'asr') then
    raise exception 'invalid request' using errcode = '22023';
  end if;
  if not exists (
    select 1 from public.council_members cm
    where cm.term_id = p_term_id and cm.status = 'active'
      and public.can_manage_council_daily_duty(p_term_id, cm.position_id)
  ) then
    raise exception 'not authorized to view council daily duties' using errcode = '42501';
  end if;
  return query
    select d.membership_id, d.status, d.note
    from public.council_daily_duty_attendance d
    join public.council_members cm on cm.id = d.membership_id and cm.term_id = d.term_id
    where d.term_id = p_term_id and d.duty_date = p_duty_date and d.duty_type = p_duty_type
      and public.can_manage_council_daily_duty(d.term_id, cm.position_id);
end;
$$;
revoke all on function public.get_council_daily_duty_attendance(bigint, date, text) from public, anon;
grant execute on function public.get_council_daily_duty_attendance(bigint, date, text) to authenticated;

create or replace function public.save_council_daily_duty_attendance(
  p_term_id bigint, p_duty_date date, p_duty_type text, p_entries jsonb
)
returns integer
language plpgsql security definer set search_path = ''
as $$
declare
  v_entry jsonb;
  v_membership_id bigint;
  v_status text;
  v_note text;
  v_position_id bigint;
  v_saved integer := 0;
begin
  if auth.uid() is null or p_term_id is null or p_duty_date is null or p_duty_type is null
     or p_duty_type not in ('assembly', 'dhuhr', 'asr')
     or jsonb_typeof(p_entries) <> 'array' then
    raise exception 'invalid request' using errcode = '22023';
  end if;
  if jsonb_array_length(p_entries) > 500 then raise exception 'too many attendance entries'; end if;
  for v_entry in select value from jsonb_array_elements(p_entries)
  loop
    v_membership_id := nullif(v_entry->>'membership_id', '')::bigint;
    v_status := v_entry->>'status';
    v_note := nullif(left(btrim(coalesce(v_entry->>'note', '')), 500), '');
    if v_membership_id is null or v_status is null or v_status not in ('present', 'late', 'absent', 'excused') then
      raise exception 'invalid attendance entry' using errcode = '22023';
    end if;
    select cm.position_id into v_position_id
    from public.council_members cm
    where cm.id = v_membership_id and cm.term_id = p_term_id and cm.status = 'active';
    if not found or not public.can_manage_council_daily_duty(p_term_id, v_position_id) then
      raise exception 'not authorized for council member %', v_membership_id using errcode = '42501';
    end if;
    insert into public.council_daily_duty_attendance
      (term_id, membership_id, duty_date, duty_type, status, note, recorded_by_profile_id, updated_at)
    values (p_term_id, v_membership_id, p_duty_date, p_duty_type, v_status, v_note, auth.uid(), now())
    on conflict (term_id, membership_id, duty_date, duty_type) do update
      set status = excluded.status, note = excluded.note,
          recorded_by_profile_id = excluded.recorded_by_profile_id, updated_at = now();
    v_saved := v_saved + 1;
  end loop;
  return v_saved;
end;
$$;
revoke all on function public.save_council_daily_duty_attendance(bigint, date, text, jsonb) from public, anon;
grant execute on function public.save_council_daily_duty_attendance(bigint, date, text, jsonb) to authenticated;

create or replace function public.get_council_daily_duty_summary(p_term_id bigint)
returns table(membership_id bigint, total_count bigint, present_count bigint, late_count bigint, absent_count bigint, excused_count bigint, duty_rate numeric)
language plpgsql stable security definer set search_path = ''
as $$
begin
  if auth.uid() is null or not exists (
    select 1 from public.council_members cm
    where cm.term_id = p_term_id and cm.status = 'active'
      and public.can_manage_council_daily_duty(p_term_id, cm.position_id)
  ) then
    raise exception 'not authorized to view council daily duty summary' using errcode = '42501';
  end if;
  return query
    select d.membership_id, count(*)::bigint,
      count(*) filter (where d.status = 'present')::bigint,
      count(*) filter (where d.status = 'late')::bigint,
      count(*) filter (where d.status = 'absent')::bigint,
      count(*) filter (where d.status = 'excused')::bigint,
      round(100.0 * count(*) filter (where d.status in ('present','late')) / nullif(count(*) filter (where d.status <> 'excused'), 0), 1)
    from public.council_daily_duty_attendance d
    join public.council_members cm on cm.id = d.membership_id
    where d.term_id = p_term_id
      and public.can_manage_council_daily_duty(d.term_id, cm.position_id)
    group by d.membership_id;
end;
$$;
revoke all on function public.get_council_daily_duty_summary(bigint) from public, anon;
grant execute on function public.get_council_daily_duty_summary(bigint) to authenticated;
