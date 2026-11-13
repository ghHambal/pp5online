-- Council advisor permissions, assigned rosters, and complete team nominations.

-- Council advisors have the same council data editing rights as administrators.
-- A regular teacher must never gain these rights just by having role='teacher'.
drop policy if exists council_members_admin_write on public.council_members;
create policy council_members_council_staff_write
  on public.council_members for all to authenticated
  using (public.is_council_staff())
  with check (public.is_council_staff());

drop policy if exists council_positions_admin_write on public.council_positions;
create policy council_positions_council_staff_write
  on public.council_positions for all to authenticated
  using (public.is_council_staff())
  with check (public.is_council_staff());

drop policy if exists council_nominations_teacher_decide on public.council_nominations;
create policy council_nominations_council_staff_decide
  on public.council_nominations for update to authenticated
  using (public.is_council_staff())
  with check (public.is_council_staff());

drop policy if exists council_nominations_read on public.council_nominations;
create policy council_nominations_council_staff_read
  on public.council_nominations for select to authenticated
  using (
    public.is_council_staff()
    or proposed_by_student_id in (select s.id from public.students s where s.profile_id = auth.uid())
  );

alter table public.council_members
  add column if not exists position_role text
    check (position_role is null or position_role in ('head', 'member'));

create table if not exists public.council_team_proposals (
  id bigint generated always as identity primary key,
  term_id bigint not null references public.council_terms(id) on delete restrict,
  gender text not null check (gender in ('M', 'W')),
  proposed_by_student_id integer not null references public.students(id) on delete restrict,
  status text not null default 'proposed' check (status in ('proposed', 'approved', 'rejected')),
  comment text,
  decided_by_teacher_id integer references public.teachers(id) on delete set null,
  decided_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.council_team_proposal_members (
  id bigint generated always as identity primary key,
  proposal_id bigint not null references public.council_team_proposals(id) on delete cascade,
  application_id bigint not null references public.council_applications(id) on delete restrict,
  position_id bigint not null references public.council_positions(id) on delete restrict,
  position_role text not null check (position_role in ('head', 'member')),
  created_at timestamptz not null default now(),
  unique (proposal_id, application_id),
  unique (proposal_id, position_id, position_role, application_id)
);

create index if not exists council_team_proposals_term_status_idx
  on public.council_team_proposals (term_id, status, gender);
create unique index if not exists council_team_proposals_one_pending_per_term_gender_idx
  on public.council_team_proposals (term_id, gender) where status = 'proposed';
create index if not exists council_team_proposal_members_proposal_idx
  on public.council_team_proposal_members (proposal_id, position_id, position_role);

alter table public.council_team_proposals enable row level security;
alter table public.council_team_proposal_members enable row level security;
revoke all on table public.council_team_proposals, public.council_team_proposal_members
  from public, anon, authenticated;
grant select on public.council_team_proposals, public.council_team_proposal_members to authenticated;

drop policy if exists council_team_proposals_read on public.council_team_proposals;
create policy council_team_proposals_read
  on public.council_team_proposals for select to authenticated
  using (
    public.is_council_staff()
    or proposed_by_student_id in (select s.id from public.students s where s.profile_id = auth.uid())
  );

drop policy if exists council_team_proposal_members_read on public.council_team_proposal_members;
create policy council_team_proposal_members_read
  on public.council_team_proposal_members for select to authenticated
  using (exists (
    select 1 from public.council_team_proposals p
    where p.id = proposal_id and (
      public.is_council_staff()
      or p.proposed_by_student_id in (select s.id from public.students s where s.profile_id = auth.uid())
    )
  ));

create or replace function public.propose_council_team(
  p_term_id bigint,
  p_gender text,
  p_teams jsonb
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student_id integer;
  v_proposal_id bigint;
  v_position record;
  v_selected_count integer;
  v_head_count integer;
  v_member_count integer;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if p_gender is null or p_gender not in ('M', 'W') then raise exception 'invalid council gender'; end if;
  if p_teams is null or jsonb_typeof(p_teams) <> 'array' then raise exception 'team list is required'; end if;

  select s.id into v_student_id
  from public.students s
  join public.council_members cm on cm.student_id = s.id and cm.term_id = p_term_id and cm.status = 'active'
  join public.council_positions cp on cp.id = cm.position_id and cp.is_elected = true and cp.gender = p_gender
  where s.profile_id = auth.uid()
  limit 1;
  if v_student_id is null then raise exception 'active council president required'; end if;
  if not exists (select 1 from public.council_terms t where t.id = p_term_id and t.status in ('active', 'upcoming')) then
    raise exception 'council term is not editable';
  end if;
  if exists (select 1 from public.council_team_proposals p where p.term_id = p_term_id and p.gender = p_gender and p.status = 'proposed') then
    raise exception 'a team proposal is already awaiting review';
  end if;

  for v_position in
    select p.id, p.seats_count, p.position_name
    from public.council_positions p
    where p.gender = p_gender and p.is_active and not p.is_elected
      and p.position_name like 'ฝ่าย%' and p.position_name <> 'ยังไม่ระบุฝ่าย'
    order by p.sort_order, p.id
  loop
    select
      count(*)::integer,
      count(*) filter (where item.value->>'role' = 'head')::integer,
      count(*) filter (where item.value->>'role' = 'member')::integer
    into v_selected_count, v_head_count, v_member_count
    from jsonb_array_elements(p_teams) as item(value)
    where (item.value->>'position_id')::bigint = v_position.id;

    if v_head_count <> 1 or v_member_count < 1 then
      raise exception 'each department needs one head and at least one member: %', v_position.position_name;
    end if;
    if v_selected_count > v_position.seats_count then
      raise exception 'department exceeds available seats: %', v_position.position_name;
    end if;
  end loop;

  if exists (
    select 1 from jsonb_array_elements(p_teams) as item(value)
    left join public.council_positions p on p.id = (item.value->>'position_id')::bigint
    where p.id is null or p.gender <> p_gender or not p.is_active or p.is_elected
      or p.position_name not like 'ฝ่าย%' or p.position_name = 'ยังไม่ระบุฝ่าย'
      or item.value->>'role' not in ('head', 'member')
      or not exists (
        select 1 from public.council_applications a
        where a.id = (item.value->>'application_id')::bigint
          and a.position_id = p.id and a.term_id = p_term_id
          and a.status = 'interviewed' and a.deleted_at is null
      )
  ) then raise exception 'team contains an ineligible applicant or department'; end if;

  if (select count(*) from jsonb_array_elements(p_teams)) < 2 then
    raise exception 'complete team proposal is required';
  end if;
  if exists (
    select 1 from jsonb_array_elements(p_teams) as item(value)
    join public.council_applications a on a.id = (item.value->>'application_id')::bigint
    group by a.student_id having count(*) > 1
  ) then raise exception 'a student can only hold one proposed role'; end if;

  insert into public.council_team_proposals (term_id, gender, proposed_by_student_id)
  values (p_term_id, p_gender, v_student_id)
  returning id into v_proposal_id;

  insert into public.council_team_proposal_members (proposal_id, application_id, position_id, position_role)
  select v_proposal_id, (item.value->>'application_id')::bigint,
    (item.value->>'position_id')::bigint, item.value->>'role'
  from jsonb_array_elements(p_teams) as item(value);
  return v_proposal_id;
end;
$$;

create or replace function public.decide_council_team_proposal(
  p_proposal_id bigint,
  p_approve boolean,
  p_comment text default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_proposal public.council_team_proposals%rowtype;
  v_member record;
  v_teacher_id integer;
begin
  if auth.uid() is null or not public.is_council_staff() then
    raise exception 'council advisor or administrator required';
  end if;
  if p_approve is null then raise exception 'decision is required'; end if;
  select t.id into v_teacher_id from public.teachers t where t.profile_id = auth.uid() limit 1;
  if not p_approve and nullif(btrim(p_comment), '') is null then
    raise exception 'rejection comment is required';
  end if;
  select * into v_proposal from public.council_team_proposals where id = p_proposal_id for update;
  if not found or v_proposal.status <> 'proposed' then raise exception 'proposal is not pending'; end if;

  if p_approve then
    for v_member in
      select pm.*, a.student_id, a.academic_year, a.term_id
      from public.council_team_proposal_members pm
      join public.council_applications a on a.id = pm.application_id
      where pm.proposal_id = v_proposal.id
      for update of a
    loop
      if v_member.term_id <> v_proposal.term_id or not exists (
        select 1 from public.council_applications a
        where a.id = v_member.application_id and a.status = 'interviewed' and a.deleted_at is null
      ) then raise exception 'team application is no longer eligible'; end if;
      insert into public.council_members (
        position_id, student_id, academic_year, term_id, source, status,
        term_start_date, appointment_method, position_role
      ) values (
        v_member.position_id, v_member.student_id, v_member.academic_year, v_member.term_id,
        'appointed', 'active', current_date, 'chair_nomination', v_member.position_role
      ) on conflict (academic_year, student_id, position_id) where status = 'active'
        do update set updated_at = now(), position_role = excluded.position_role;
      update public.council_applications set status = 'appointed', updated_at = now()
      where id = v_member.application_id;
    end loop;
  end if;

  update public.council_team_proposals
  set status = case when p_approve then 'approved' else 'rejected' end,
      decided_by_teacher_id = v_teacher_id,
      decided_at = now(), comment = nullif(btrim(p_comment), '')
  where id = v_proposal.id;
end;
$$;

revoke all on function public.propose_council_team(bigint, text, jsonb) from public, anon;
revoke all on function public.decide_council_team_proposal(bigint, boolean, text) from public, anon;
grant execute on function public.propose_council_team(bigint, text, jsonb) to authenticated;
grant execute on function public.decide_council_team_proposal(bigint, boolean, text) to authenticated;
