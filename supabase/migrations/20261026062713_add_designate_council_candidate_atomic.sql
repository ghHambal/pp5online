-- Allow council staff to add an already-designated chair member to the election roster.
-- The operation is explicit and audited; the new candidate remains a draft.
create or replace function public.add_designate_council_candidate_atomic(
  p_election_config_id bigint,
  p_student_id integer
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_election public.council_election_config%rowtype;
  v_position_id bigint;
  v_member_id bigint;
  v_application_id bigint;
  v_candidate_id bigint;
  v_ballot_number integer;
begin
  if not public.is_council_staff() then
    raise exception 'not authorized to add council candidate';
  end if;

  select * into v_election
  from public.council_election_config
  where id = p_election_config_id
  for update;
  if not found then raise exception 'election configuration not found'; end if;
  if v_election.results_published_at is not null
     or exists (select 1 from public.council_votes where election_config_id = v_election.id) then
    raise exception 'candidate list is locked after voting starts';
  end if;

  select p.id into v_position_id
  from public.council_positions p
  where p.gender = v_election.gender and p.is_elected = true and p.is_active = true
  order by p.sort_order
  limit 1;
  if v_position_id is null then raise exception 'elected chair position not found'; end if;

  select m.id into v_member_id
  from public.council_members m
  join public.council_positions p on p.id = m.position_id
  join public.council_terms t on t.id = m.term_id
  join public.students s on s.id = m.student_id
  where m.term_id = v_election.term_id
    and m.student_id = p_student_id
    and m.position_id = v_position_id
    and m.status = 'designate'
    and t.status in ('active', 'upcoming')
    and coalesce(s.is_active, true) = true
    and case
      when s.gender in ('หญิง', 'W') then 'W'
      when s.gender in ('ชาย', 'M') then 'M'
      else null
    end = v_election.gender
  for update of m;
  if v_member_id is null then
    raise exception 'student is not a designated chair member for this election term and gender';
  end if;

  if exists (
    select 1 from public.council_candidates c
    where c.election_config_id = v_election.id and c.student_id = p_student_id
  ) then
    raise exception 'student is already on this candidate list';
  end if;

  select a.id into v_application_id
  from public.council_applications a
  where a.term_id = v_election.term_id
    and a.student_id = p_student_id
    and a.position_id = v_position_id
    and a.deleted_at is null
    and a.status <> 'rejected'
  order by a.created_at desc
  limit 1
  for update;

  if v_application_id is null then
    insert into public.council_applications (
      student_id, position_id, academic_year, term_id, status
    ) values (
      p_student_id, v_position_id, v_election.academic_year, v_election.term_id, 'candidate'
    ) returning id into v_application_id;
  else
    update public.council_applications
    set status = 'candidate', updated_at = now()
    where id = v_application_id;
  end if;

  select coalesce(max(c.ballot_number), 0) + 1 into v_ballot_number
  from public.council_candidates c
  where c.election_config_id = v_election.id;

  insert into public.council_candidates (
    election_config_id, application_id, student_id, ballot_number, status
  ) values (
    v_election.id, v_application_id, p_student_id, v_ballot_number, 'draft'
  ) returning id into v_candidate_id;

  insert into public.council_member_audit_logs (
    term_id, member_id, action, actor_profile_id, after_data
  ) values (
    v_election.term_id, v_member_id, 'designate_added_to_chair_candidate_roster', auth.uid(),
    jsonb_build_object(
      'candidate_id', v_candidate_id,
      'application_id', v_application_id,
      'election_config_id', v_election.id,
      'student_id', p_student_id,
      'gender', v_election.gender,
      'status', 'draft',
      'direct_appointment', true
    )
  );

  return v_candidate_id;
end;
$$;

revoke all on function public.add_designate_council_candidate_atomic(bigint, integer) from public, anon;
grant execute on function public.add_designate_council_candidate_atomic(bigint, integer) to authenticated;
