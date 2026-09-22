-- Make public voting idempotent under concurrent requests and publish results atomically.

create or replace function public.cast_public_council_vote(
  p_code text,
  p_candidate_id bigint
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student_id integer;
  v_gender text;
  v_election_id bigint;
  v_vote_id bigint;
begin
  select id,
         case when gender in ('ชาย', 'M') then 'M'
              when gender in ('หญิง', 'W') then 'W' end
    into v_student_id, v_gender
  from public.students
  where student_code = trim(p_code)
    and coalesce(is_active, true) = true
  limit 1;

  if v_student_id is null then
    return jsonb_build_object('error', 'student_not_found');
  end if;

  select e.id into v_election_id
  from public.council_election_config e
  join public.council_candidates c on c.election_config_id = e.id
  where c.id = p_candidate_id
    and e.gender = v_gender
    and e.opens_at is not null
    and e.opens_at <= now()
    and (e.closes_at is null or e.closes_at > now())
    and e.results_published_at is null;

  if v_election_id is null then
    return jsonb_build_object('error', 'election_not_open');
  end if;

  insert into public.council_votes (election_config_id, candidate_id, voter_student_id)
  values (v_election_id, p_candidate_id, v_student_id)
  on conflict (election_config_id, voter_student_id) do nothing
  returning id into v_vote_id;

  if v_vote_id is null then
    return jsonb_build_object('error', 'already_voted');
  end if;

  return jsonb_build_object('ok', true);
end;
$$;

create or replace function public.publish_council_election_results_atomic(
  p_election_config_id bigint
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_election public.council_election_config%rowtype;
  v_position_id bigint;
  v_winner_student_id integer;
  v_member_id bigint;
begin
  if not public.is_council_staff() then
    raise exception 'not authorized to publish council election results';
  end if;

  select * into v_election
  from public.council_election_config
  where id = p_election_config_id
    and closes_at is not null
    and closes_at <= now()
    and results_published_at is null
  for update;
  if not found then
    raise exception 'election is not eligible for result publication';
  end if;

  select id into v_position_id
  from public.council_positions
  where gender = v_election.gender
    and is_elected = true
    and is_active = true
  order by sort_order, id
  limit 1;
  if v_position_id is null then
    raise exception 'elected council position is not configured';
  end if;

  select c.student_id into v_winner_student_id
  from public.council_candidates c
  left join public.council_votes v
    on v.candidate_id = c.id
   and v.election_config_id = v_election.id
  where c.election_config_id = v_election.id
  group by c.id, c.student_id, c.ballot_number
  order by count(v.id) desc, c.ballot_number asc, c.id asc
  limit 1;
  if v_winner_student_id is null then
    raise exception 'no election candidates found';
  end if;

  insert into public.council_members (
    position_id, student_id, academic_year, source, status, term_start_date
  ) values (
    v_position_id, v_winner_student_id, v_election.academic_year,
    'elected', 'active', current_date
  )
  on conflict (academic_year, student_id, position_id) where status = 'active'
  do update set updated_at = now()
  returning id into v_member_id;

  update public.council_election_config
  set results_published_at = now()
  where id = v_election.id;

  return v_member_id;
end;
$$;

revoke all on function public.cast_public_council_vote(text, bigint) from public;
grant execute on function public.cast_public_council_vote(text, bigint) to anon, authenticated;

revoke all on function public.publish_council_election_results_atomic(bigint) from public;
revoke execute on function public.publish_council_election_results_atomic(bigint) from anon;
grant execute on function public.publish_council_election_results_atomic(bigint) to authenticated;
