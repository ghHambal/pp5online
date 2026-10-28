-- The election kiosk is used by voters without a PP5 account session.
-- Keep voter identity, election timing, candidate validity, and duplicate-vote
-- checks inside SECURITY DEFINER RPCs; settings and reset actions keep their
-- separate administrator protections.

create or replace function public.get_public_council_election_bundle(p_code text)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare
  v_student record;
  v_gender text;
  v_election record;
  v_candidates jsonb;
  v_my_vote bigint;
  v_did_vote boolean;
  v_abstained boolean;
  v_thank_you text;
begin
  select id,full_name,image_url,photo_url,main_room,gender into v_student
  from public.students where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;
  if v_student.id is null then return jsonb_build_object('error','student_not_found'); end if;
  v_gender := case when v_student.gender in ('ชาย','M') then 'M' when v_student.gender in ('หญิง','W') then 'W' end;
  if v_gender is null then return jsonb_build_object('error','gender_unknown'); end if;

  select value into v_thank_you from public.system_config where key='council_election_thank_you_message';
  select * into v_election from public.council_election_config
  where term_id=public._council_election_page_term_id() and gender=v_gender and candidates_published=true
  order by (opens_at is not null and opens_at<=now() and (closes_at is null or closes_at>now())) desc,academic_year desc limit 1;
  if v_election.id is null then
    return jsonb_build_object('error','election_not_found','student',jsonb_build_object(
      'full_name',v_student.full_name,'image_url',coalesce(v_student.image_url,v_student.photo_url),'main_room',v_student.main_room));
  end if;

  select candidate_id,(vote_kind='abstain') into v_my_vote,v_abstained
  from public.council_votes where election_config_id=v_election.id and voter_student_id=v_student.id;
  v_did_vote := found;
  select coalesce(jsonb_agg(jsonb_build_object(
    'id',c.id,'ballot_number',c.ballot_number,'campaign_statement',c.campaign_statement,
    'slogan',c.slogan,'vision',c.vision,'policies',coalesce(c.policies,'[]'::jsonb),'experience',coalesce(c.experience,'[]'::jsonb),
    'gpa_general',a.gpa_general,'gpa_religious',a.gpa_religious,'full_name',s.full_name,
    'image_url',coalesce(s.image_url,s.photo_url),'main_room',s.main_room
  ) order by c.ballot_number),'[]'::jsonb) into v_candidates
  from public.council_candidates c join public.students s on s.id=c.student_id
  left join public.council_applications a on a.id=c.application_id
  where c.election_config_id=v_election.id and c.status='published';

  return jsonb_build_object(
    'student',jsonb_build_object('full_name',v_student.full_name,'image_url',coalesce(v_student.image_url,v_student.photo_url),'main_room',v_student.main_room),
    'election_id',v_election.id,'gender',v_gender,
    'is_open',(v_election.opens_at is not null and v_election.opens_at<=now() and (v_election.closes_at is null or v_election.closes_at>now())),
    'candidates',v_candidates,'already_voted_candidate_id',v_my_vote,'already_voted',coalesce(v_did_vote,false),
    'already_abstained',coalesce(v_abstained,false),'thank_you_message',v_thank_you
  );
end;
$$;
revoke all on function public.get_public_council_election_bundle(text) from public;
grant execute on function public.get_public_council_election_bundle(text) to anon,authenticated;

create or replace function public.get_public_council_election_bundle_v2(p_code text)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare
  v_student record;
  v_teacher_id integer;
  v_personnel_id uuid;
  v_term_id bigint := public._council_election_page_term_id();
  v_ballots jsonb := '[]'::jsonb;
  v_election record;
  v_candidates jsonb;
  v_vote record;
  v_did_vote boolean;
  v_is_1087 boolean := trim(p_code)='1087' and public.is_council_election_tester_1087();
  v_legacy jsonb;
begin
  if nullif(trim(coalesce(p_code,'')),'') is null then return jsonb_build_object('error','voter_not_found'); end if;
  select id,full_name,image_url,photo_url,main_room,gender into v_student
  from public.students where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;
  if v_student.id is not null then
    v_legacy := public.get_public_council_election_bundle(p_code);
    if v_legacy ? 'error' then return v_legacy; end if;
    return v_legacy || jsonb_build_object('voter_type','student','ballots',jsonb_build_array(
      jsonb_build_object('election_id',v_legacy->'election_id','gender',v_legacy->'gender',
        'is_open',v_legacy->'is_open','candidates',v_legacy->'candidates',
        'already_voted',v_legacy->'already_voted','already_voted_candidate_id',v_legacy->'already_voted_candidate_id',
        'already_abstained',v_legacy->'already_abstained','thank_you_message',v_legacy->'thank_you_message')
    ));
  end if;

  select id into v_teacher_id from public.teachers where teacher_code=trim(p_code) limit 1;
  if v_teacher_id is null and trim(p_code) like 'personnel:%' then
    begin
      select id into v_personnel_id from public.sports_shirt_personnel_requests
      where id=substring(trim(p_code) from 11)::uuid
        and event_id=public._council_current_personnel_roster_event_id();
    exception when invalid_text_representation then v_personnel_id := null;
    end;
  end if;
  if v_teacher_id is null and v_personnel_id is null then return jsonb_build_object('error','voter_not_found'); end if;

  for v_election in
    select e.* from public.council_election_config e
    where e.term_id=v_term_id and e.gender in ('M','W') and e.candidates_published=true
    order by case e.gender when 'M' then 1 else 2 end, e.academic_year desc
  loop
    select coalesce(jsonb_agg(jsonb_build_object(
      'id',c.id,'ballot_number',c.ballot_number,'campaign_statement',c.campaign_statement,
      'slogan',c.slogan,'vision',c.vision,'policies',coalesce(c.policies,'[]'::jsonb),'experience',coalesce(c.experience,'[]'::jsonb),
      'gpa_general',a.gpa_general,'gpa_religious',a.gpa_religious,'full_name',s.full_name,
      'image_url',coalesce(s.image_url,s.photo_url),'main_room',s.main_room
    ) order by c.ballot_number),'[]'::jsonb) into v_candidates
    from public.council_candidates c join public.students s on s.id=c.student_id
    left join public.council_applications a on a.id=c.application_id
    where c.election_config_id=v_election.id and c.status='published';
    if v_teacher_id is not null then
      select candidate_id,(vote_kind='abstain') as abstained into v_vote
      from public.council_votes where election_config_id=v_election.id and voter_teacher_id=v_teacher_id;
    else
      select candidate_id,(vote_kind='abstain') as abstained into v_vote
      from public.council_votes where election_config_id=v_election.id and voter_personnel_id=v_personnel_id;
    end if;
    v_did_vote := found;
    v_ballots := v_ballots || jsonb_build_array(jsonb_build_object(
      'election_id',v_election.id,'gender',v_election.gender,
      'is_open',v_is_1087 or (v_election.opens_at is not null and v_election.opens_at<=now() and (v_election.closes_at is null or v_election.closes_at>now())),
      'candidates',v_candidates,'already_voted',v_did_vote,
      'already_voted_candidate_id',case when v_did_vote then v_vote.candidate_id else null end,
      'already_abstained',case when v_did_vote then v_vote.abstained else false end,
      'thank_you_message',coalesce((select value from public.system_config where key='council_election_thank_you_message'),'ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ')
    ));
  end loop;
  if jsonb_array_length(v_ballots)=0 then return jsonb_build_object('error','election_not_found'); end if;
  return jsonb_build_object('voter_type',case when v_teacher_id is not null then 'teacher' else 'personnel' end,'teacher_id',v_teacher_id,
    'student',jsonb_build_object(
      'full_name',case when v_teacher_id is not null then (select full_name from public.teachers where id=v_teacher_id) else (select full_name from public.sports_shirt_personnel_requests where id=v_personnel_id) end,
      'main_room',case when v_teacher_id is not null then 'ครู' else 'บุคลากร' end),
    'ballots',v_ballots,'is_1087_tester',v_is_1087);
end;
$$;
revoke all on function public.get_public_council_election_bundle_v2(text) from public;
grant execute on function public.get_public_council_election_bundle_v2(text) to anon,authenticated;

create or replace function public.cast_public_council_vote(p_code text,p_candidate_id bigint,p_election_config_id bigint)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare
  v_student_id integer;
  v_teacher_id integer;
  v_personnel_id uuid;
  v_gender text;
  v_is_1087 boolean := false;
  v_vote_id bigint;
  v_now timestamptz := clock_timestamp();
begin
  if nullif(trim(coalesce(p_code,'')),'') is null then return jsonb_build_object('error','voter_not_found'); end if;
  select id,case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end
  into v_student_id,v_gender from public.students
  where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;

  if v_student_id is null then
    select id into v_teacher_id from public.teachers where teacher_code=trim(p_code) limit 1;
    v_is_1087 := trim(p_code)='1087' and public.is_council_election_tester_1087();
    if v_teacher_id is null and trim(p_code) like 'personnel:%' then
      begin
        select id into v_personnel_id from public.sports_shirt_personnel_requests
        where id=substring(trim(p_code) from 11)::uuid
          and event_id=public._council_current_personnel_roster_event_id();
      exception when invalid_text_representation then v_personnel_id := null;
      end;
    end if;
    if v_teacher_id is null and v_personnel_id is null then return jsonb_build_object('error','voter_not_found'); end if;
  end if;

  if not exists (
    select 1 from public.council_election_config e
    where e.id=p_election_config_id and e.term_id=public._council_election_page_term_id()
      and e.gender in ('M','W') and e.candidates_published=true and e.results_published_at is null
      and (v_student_id is null or e.gender=v_gender)
  ) then return jsonb_build_object('error','election_not_open'); end if;

  perform 1 from public.council_election_config where id=p_election_config_id for update;
  if not v_is_1087 and not exists (
    select 1 from public.council_election_config e where e.id=p_election_config_id
      and e.opens_at is not null and e.opens_at<=v_now and (e.closes_at is null or e.closes_at>v_now)
  ) then return jsonb_build_object('error','election_not_open'); end if;
  if p_candidate_id is not null and not exists (
    select 1 from public.council_candidates where id=p_candidate_id and election_config_id=p_election_config_id and status='published'
  ) then return jsonb_build_object('error','candidate_not_available'); end if;

  if v_student_id is not null then
    insert into public.council_votes(election_config_id,candidate_id,voter_student_id,vote_kind)
    values(p_election_config_id,p_candidate_id,v_student_id,case when p_candidate_id is null then 'abstain' else 'candidate' end)
    on conflict(election_config_id,voter_student_id) do nothing returning id into v_vote_id;
  elsif v_teacher_id is not null then
    insert into public.council_votes(election_config_id,candidate_id,voter_teacher_id,vote_kind)
    values(p_election_config_id,p_candidate_id,v_teacher_id,case when p_candidate_id is null then 'abstain' else 'candidate' end)
    on conflict(election_config_id,voter_teacher_id) where voter_teacher_id is not null do nothing returning id into v_vote_id;
  else
    insert into public.council_votes(election_config_id,candidate_id,voter_personnel_id,vote_kind)
    values(p_election_config_id,p_candidate_id,v_personnel_id,case when p_candidate_id is null then 'abstain' else 'candidate' end)
    on conflict(election_config_id,voter_personnel_id) where voter_personnel_id is not null do nothing returning id into v_vote_id;
  end if;
  if v_vote_id is null then return jsonb_build_object('error','already_voted'); end if;
  return jsonb_build_object('ok',true,'vote_kind',case when p_candidate_id is null then 'abstain' else 'candidate' end,'counted_as_official_vote',true);
end;
$$;
revoke all on function public.cast_public_council_vote(text,bigint,bigint) from public;
grant execute on function public.cast_public_council_vote(text,bigint,bigint) to anon,authenticated;

create or replace function public.get_public_council_personnel_roster()
returns jsonb language sql stable security definer set search_path=public
as $$
  select coalesce(jsonb_agg(jsonb_build_object('id',p.id,'full_name',p.full_name) order by p.full_name),'[]'::jsonb)
  from public.sports_shirt_personnel_requests p
  where p.event_id=public._council_current_personnel_roster_event_id()
$$;
revoke all on function public.get_public_council_personnel_roster() from public;
grant execute on function public.get_public_council_personnel_roster() to anon,authenticated;
