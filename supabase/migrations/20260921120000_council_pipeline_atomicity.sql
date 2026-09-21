-- Make interview scoring and candidate promotion transactional.

create or replace function public.save_council_interview_score_atomic(
  p_interview_id bigint,
  p_application_id bigint,
  p_score numeric,
  p_scores jsonb,
  p_result text,
  p_comment text default null
)
returns void
language plpgsql
set search_path = public
as $$
begin
  if coalesce(get_user_role(), '') <> all (array['admin', 'teacher']) then
    raise exception 'not authorized to score council interview';
  end if;
  if p_result not in ('pass', 'fail') then
    raise exception 'invalid interview result';
  end if;
  if p_score is null or p_score < 0 then
    raise exception 'invalid interview score';
  end if;
  if p_scores is not null and jsonb_typeof(p_scores) <> 'object' then
    raise exception 'invalid interview score detail';
  end if;
  if not exists (
    select 1
    from public.council_interviews i
    join public.council_applications a on a.id = i.application_id
    where i.id = p_interview_id
      and i.application_id = p_application_id
      and a.deleted_at is null
      and a.status in ('interview_scheduled', 'interviewed')
  ) then
    raise exception 'interview is not eligible for scoring';
  end if;

  update public.council_interviews
  set score = p_score, scores = coalesce(p_scores, '{}'::jsonb), result = p_result,
      comment = p_comment, updated_at = now()
  where id = p_interview_id and application_id = p_application_id;

  update public.council_applications
  set status = case when p_result = 'pass' then 'interviewed' else 'rejected' end,
      updated_at = now()
  where id = p_application_id;
end;
$$;

create or replace function public.promote_council_candidate_atomic(
  p_application_id bigint,
  p_student_id integer,
  p_election_config_id bigint,
  p_campaign_statement text,
  p_photo_url text
)
returns bigint
language plpgsql
set search_path = public
as $$
declare
  v_candidate_id bigint;
  v_position_gender text;
  v_is_elected boolean;
  v_academic_year integer;
  v_next_ballot integer;
begin
  if coalesce(get_user_role(), '') <> all (array['admin', 'teacher']) then
    raise exception 'not authorized to promote council candidate';
  end if;

  select cp.gender, cp.is_elected, a.academic_year
    into v_position_gender, v_is_elected, v_academic_year
  from public.council_applications a
  join public.council_positions cp on cp.id = a.position_id
  where a.id = p_application_id
    and a.student_id = p_student_id
    and a.status in ('interviewed', 'candidate')
    and a.deleted_at is null;
  if not found or not v_is_elected then
    raise exception 'application is not eligible for election candidate promotion';
  end if;

  perform 1
  from public.council_election_config ec
  where ec.id = p_election_config_id
    and ec.gender = v_position_gender
    and ec.academic_year = v_academic_year
  for update;
  if not found then
    raise exception 'election configuration does not match application';
  end if;

  select coalesce(max(ballot_number), 0) + 1
    into v_next_ballot
  from public.council_candidates
  where election_config_id = p_election_config_id;

  insert into public.council_candidates (
    election_config_id, application_id, student_id, ballot_number,
    campaign_statement, photo_url
  ) values (
    p_election_config_id, p_application_id, p_student_id, v_next_ballot,
    p_campaign_statement, p_photo_url
  )
  on conflict (election_config_id, student_id)
  do update set campaign_statement = excluded.campaign_statement,
                photo_url = excluded.photo_url
  returning id into v_candidate_id;

  update public.council_applications
  set status = 'candidate', updated_at = now()
  where id = p_application_id;

  return v_candidate_id;
end;
$$;

revoke all on function public.save_council_interview_score_atomic(bigint, bigint, numeric, jsonb, text, text) from public;
revoke execute on function public.save_council_interview_score_atomic(bigint, bigint, numeric, jsonb, text, text) from anon;
grant execute on function public.save_council_interview_score_atomic(bigint, bigint, numeric, jsonb, text, text) to authenticated;

revoke all on function public.promote_council_candidate_atomic(bigint, integer, bigint, text, text) from public;
revoke execute on function public.promote_council_candidate_atomic(bigint, integer, bigint, text, text) from anon;
grant execute on function public.promote_council_candidate_atomic(bigint, integer, bigint, text, text) to authenticated;
