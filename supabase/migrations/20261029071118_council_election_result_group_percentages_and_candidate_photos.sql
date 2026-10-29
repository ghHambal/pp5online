create or replace function public.get_council_election_results()
returns jsonb language plpgsql stable security definer set search_path=public,pg_temp
as $$
declare
  v_term_id bigint := public._council_election_page_term_id();
  v_is_tester boolean := coalesce(public.is_council_election_tester_1087(),false);
  v_show_after_close boolean := false;
  v_all_closed boolean := false;
  v_ballot_count integer := 0;
  v_results jsonb := '[]'::jsonb;
  v_ballot record;
  v_candidates jsonb;
  v_vote_total integer;
  v_abstentions integer;
  v_student_vote_total integer;
  v_student_abstentions integer;
  v_staff_vote_total integer;
  v_staff_abstentions integer;
begin
  select coalesce(s.show_results_after_close,false) into v_show_after_close
    from public.council_election_page_settings s where s.term_id=v_term_id;
  select count(*),coalesce(bool_and(e.closes_at is not null and e.closes_at<=now()),false)
    into v_ballot_count,v_all_closed
    from public.council_election_config e where e.term_id=v_term_id and e.gender in ('M','W');
  v_all_closed := v_ballot_count=2 and v_all_closed;

  if not v_is_tester and not (v_show_after_close and v_all_closed) then
    return jsonb_build_object('visible',false,'live_access',false,'public_access',false,'updated_at',now());
  end if;

  for v_ballot in
    select e.id,e.gender,e.closes_at,e.results_published_at
    from public.council_election_config e
    where e.term_id=v_term_id and e.gender in ('M','W')
    order by case e.gender when 'M' then 1 else 2 end
  loop
    select coalesce(jsonb_agg(jsonb_build_object(
        'candidate_id',c.id,'ballot_number',c.ballot_number,'full_name',s.full_name,
        'image_url',coalesce(nullif(c.photo_url,''),nullif(s.image_url,''),nullif(s.photo_url,'')),
        'room',s.main_room,'votes',coalesce(vc.votes,0),
        'student_votes',coalesce(vc.student_votes,0),'staff_votes',coalesce(vc.staff_votes,0)
      ) order by coalesce(vc.votes,0) desc,c.ballot_number),'[]'::jsonb)
      into v_candidates
      from public.council_candidates c
      join public.students s on s.id=c.student_id
      left join lateral (
        select count(*) filter (where cv.vote_kind='candidate')::integer as votes,
          count(*) filter (where cv.vote_kind='candidate' and cv.voter_student_id is not null)::integer as student_votes,
          count(*) filter (where cv.vote_kind='candidate' and cv.voter_student_id is null and (cv.voter_teacher_id is not null or cv.voter_personnel_id is not null or cv.voter_council_personnel_id is not null))::integer as staff_votes
        from public.council_votes cv
        where cv.election_config_id=v_ballot.id and cv.candidate_id=c.id
      ) vc on true
      where c.election_config_id=v_ballot.id and c.status='published';

    select count(*)::integer,
      count(*) filter (where cv.vote_kind='abstain')::integer,
      count(*) filter (where cv.voter_student_id is not null)::integer,
      count(*) filter (where cv.voter_student_id is not null and cv.vote_kind='abstain')::integer,
      count(*) filter (where cv.voter_student_id is null and (cv.voter_teacher_id is not null or cv.voter_personnel_id is not null or cv.voter_council_personnel_id is not null))::integer,
      count(*) filter (where cv.voter_student_id is null and (cv.voter_teacher_id is not null or cv.voter_personnel_id is not null or cv.voter_council_personnel_id is not null) and cv.vote_kind='abstain')::integer
      into v_vote_total,v_abstentions,v_student_vote_total,v_student_abstentions,v_staff_vote_total,v_staff_abstentions
      from public.council_votes cv where cv.election_config_id=v_ballot.id;

    v_results := v_results || jsonb_build_array(jsonb_build_object(
      'election_id',v_ballot.id,'gender',v_ballot.gender,'closes_at',v_ballot.closes_at,
      'results_published_at',v_ballot.results_published_at,
      'vote_total',coalesce(v_vote_total,0),'abstentions',coalesce(v_abstentions,0),
      'student_vote_total',coalesce(v_student_vote_total,0),'student_abstentions',coalesce(v_student_abstentions,0),
      'staff_vote_total',coalesce(v_staff_vote_total,0),'staff_abstentions',coalesce(v_staff_abstentions,0),
      'candidates',v_candidates
    ));
  end loop;
  return jsonb_build_object(
    'visible',true,'live_access',v_is_tester,'public_access',not v_is_tester and v_show_after_close and v_all_closed,
    'show_after_close',v_show_after_close,'all_closed',v_all_closed,'results',v_results,'updated_at',now()
  );
end;
$$;
revoke all on function public.get_council_election_results() from public,anon,authenticated;
grant execute on function public.get_council_election_results() to anon,authenticated;
