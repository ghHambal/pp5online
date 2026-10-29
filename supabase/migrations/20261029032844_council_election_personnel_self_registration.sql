-- Keep election-only personnel registrations separate from sports shirt requests.
create table if not exists public.council_election_personnel (
  id uuid primary key default gen_random_uuid(),
  term_id bigint not null references public.council_terms(id) on delete restrict,
  full_name text not null check (char_length(btrim(full_name)) between 2 and 120),
  gender text not null check (gender in ('M','W')),
  registered_at timestamptz not null default now()
);
create unique index if not exists council_election_personnel_term_name_uidx
  on public.council_election_personnel
    (term_id, lower(regexp_replace(btrim(full_name), '[[:space:]]+', ' ', 'g')));
alter table public.council_election_personnel enable row level security;
revoke all on public.council_election_personnel from public, anon, authenticated;

alter table public.council_votes
  add column if not exists voter_council_personnel_id uuid
    references public.council_election_personnel(id) on delete restrict;
create unique index if not exists council_votes_election_council_personnel_unique
  on public.council_votes(election_config_id, voter_council_personnel_id)
  where voter_council_personnel_id is not null;
alter table public.council_votes
  drop constraint if exists council_votes_exactly_one_voter_identity;
alter table public.council_votes
  add constraint council_votes_exactly_one_voter_identity
  check (num_nonnulls(voter_student_id, voter_teacher_id, voter_personnel_id, voter_council_personnel_id) = 1);

create or replace function public.register_council_election_personnel(p_full_name text, p_gender text)
returns jsonb language plpgsql security definer set search_path=public,pg_temp
as $$
declare
  v_term_id bigint := public._council_election_page_term_id();
  v_event_id uuid := public._council_current_personnel_roster_event_id();
  v_full_name text := regexp_replace(btrim(coalesce(p_full_name,'')), '[[:space:]]+', ' ', 'g');
  v_name_key text;
  v_match_count integer;
  v_old_id uuid;
  v_old_gender text;
  v_new_id uuid;
  v_new_gender text;
begin
  if v_term_id is null then raise exception 'ไม่พบวาระเลือกตั้งปัจจุบัน'; end if;
  if char_length(v_full_name) < 2 or char_length(v_full_name) > 120 then
    raise exception 'กรอกชื่อ-สกุล 2 ถึง 120 ตัวอักษร';
  end if;
  if p_gender not in ('M','W') then raise exception 'เลือกเพศให้ถูกต้อง'; end if;
  v_name_key := lower(v_full_name);

  select count(*) into v_match_count
  from public.sports_shirt_personnel_requests p
  where p.event_id=v_event_id
    and lower(regexp_replace(btrim(p.full_name), '[[:space:]]+', ' ', 'g'))=v_name_key;
  if v_match_count > 1 then raise exception 'พบชื่อซ้ำในทะเบียนเดิม กรุณาให้ผู้ดูแลตรวจสอบ'; end if;
  if v_match_count = 1 then
    select p.id,p.gender into v_old_id,v_old_gender
    from public.sports_shirt_personnel_requests p
    where p.event_id=v_event_id
      and lower(regexp_replace(btrim(p.full_name), '[[:space:]]+', ' ', 'g'))=v_name_key;
    if v_old_gender <> p_gender then raise exception 'ชื่อมีอยู่แล้วแต่ข้อมูลเพศไม่ตรง กรุณาให้ผู้ดูแลตรวจสอบ'; end if;
    return jsonb_build_object('ok',true,'voter_code','personnel:'||v_old_id::text,'existing',true);
  end if;

  select p.id,p.gender into v_new_id,v_new_gender
  from public.council_election_personnel p
  where p.term_id=v_term_id
    and lower(regexp_replace(btrim(p.full_name), '[[:space:]]+', ' ', 'g'))=v_name_key
  limit 1;
  if v_new_id is not null then
    if v_new_gender <> p_gender then raise exception 'ชื่อมีอยู่แล้วแต่ข้อมูลเพศไม่ตรง กรุณาให้ผู้ดูแลตรวจสอบ'; end if;
    return jsonb_build_object('ok',true,'voter_code','election-personnel:'||v_new_id::text,'existing',true);
  end if;

  insert into public.council_election_personnel(term_id,full_name,gender)
  values(v_term_id,v_full_name,p_gender)
  returning id into v_new_id;
  return jsonb_build_object('ok',true,'voter_code','election-personnel:'||v_new_id::text,'existing',false);
end;
$$;
revoke all on function public.register_council_election_personnel(text,text) from public,anon,authenticated;
grant execute on function public.register_council_election_personnel(text,text) to service_role;

create or replace function public.get_public_council_personnel_roster()
returns jsonb language sql stable security definer set search_path=public
as $$
  select coalesce(jsonb_agg(jsonb_build_object('id',r.id,'full_name',r.full_name,'voter_code',r.voter_code) order by r.full_name),'[]'::jsonb)
  from (
    select p.id::text as id,p.full_name,'personnel:'||p.id::text as voter_code
    from public.sports_shirt_personnel_requests p
    where p.event_id=public._council_current_personnel_roster_event_id()
    union all
    select p.id::text as id,p.full_name,'election-personnel:'||p.id::text as voter_code
    from public.council_election_personnel p
    where p.term_id=public._council_election_page_term_id()
  ) r
$$;
revoke all on function public.get_public_council_personnel_roster() from public;
grant execute on function public.get_public_council_personnel_roster() to anon,authenticated;

create or replace function public.get_public_council_election_turnout()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
declare v_term_id bigint; v_total bigint; v_student_voted bigint; v_staff_ballots bigint; v_opens timestamptz; v_closes timestamptz;
begin
  v_term_id := public._council_election_page_term_id();
  select count(*) into v_total from public.students;
  if v_term_id is null then
    return jsonb_build_object('total_students',v_total,'voted_count',0,'staff_voted_ballots',0,'percent',0,'opens_at',null,'closes_at',null,'term_id',null);
  end if;
  select count(distinct v.voter_student_id),
      count(*) filter(where v.voter_teacher_id is not null or v.voter_personnel_id is not null or v.voter_council_personnel_id is not null),
      min(e.opens_at),max(e.closes_at)
    into v_student_voted,v_staff_ballots,v_opens,v_closes
  from public.council_election_config e
  left join public.council_votes v on v.election_config_id=e.id
  where e.term_id=v_term_id;
  return jsonb_build_object(
    'total_students',v_total,'voted_count',v_student_voted,'staff_voted_ballots',v_staff_ballots,
    'percent',case when v_total=0 then 0 else round(v_student_voted*100.0/v_total,2) end,
    'opens_at',v_opens,'closes_at',v_closes,'term_id',v_term_id
  );
end;
$$;
revoke all on function public.get_public_council_election_turnout() from public;
grant execute on function public.get_public_council_election_turnout() to anon,authenticated;

create or replace function public.get_public_council_election_staff_position_turnout()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
declare
  v_term_id bigint := public._council_election_page_term_id();
  v_teacher_total bigint;
  v_personnel_total bigint;
  v_values jsonb;
begin
  select count(*) into v_teacher_total from public.teachers;
  select
    (select count(*) from public.sports_shirt_personnel_requests p where p.event_id=public._council_current_personnel_roster_event_id())
    + (select count(*) from public.council_election_personnel p where p.term_id=v_term_id)
    into v_personnel_total;

  select jsonb_build_object(
    'male',jsonb_build_object(
      'teachers_total',v_teacher_total,
      'teachers_voted',count(distinct v.voter_teacher_id) filter(where e.gender='M'),
      'personnel_total',v_personnel_total,
      'personnel_voted',count(distinct v.voter_personnel_id) filter(where e.gender='M') + count(distinct v.voter_council_personnel_id) filter(where e.gender='M')
    ),
    'female',jsonb_build_object(
      'teachers_total',v_teacher_total,
      'teachers_voted',count(distinct v.voter_teacher_id) filter(where e.gender='W'),
      'personnel_total',v_personnel_total,
      'personnel_voted',count(distinct v.voter_personnel_id) filter(where e.gender='W') + count(distinct v.voter_council_personnel_id) filter(where e.gender='W')
    )
  ) into v_values
  from public.council_election_config e
  left join public.council_votes v on v.election_config_id=e.id
  where e.term_id=v_term_id and e.gender in ('M','W');

  return coalesce(v_values,jsonb_build_object(
    'male',jsonb_build_object('teachers_total',v_teacher_total,'teachers_voted',0,'personnel_total',v_personnel_total,'personnel_voted',0),
    'female',jsonb_build_object('teachers_total',v_teacher_total,'teachers_voted',0,'personnel_total',v_personnel_total,'personnel_voted',0)
  ));
end;
$$;
revoke all on function public.get_public_council_election_staff_position_turnout() from public;
grant execute on function public.get_public_council_election_staff_position_turnout() to anon,authenticated;

create or replace function public.cast_public_council_vote(p_code text,p_candidate_id bigint,p_election_config_id bigint)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare
  v_student_id integer;
  v_teacher_id integer;
  v_personnel_id uuid;
  v_council_personnel_id uuid;
  v_gender text;
  v_is_1087 boolean := trim(p_code)='1087';
  v_vote_id bigint;
  v_now timestamptz := clock_timestamp();
begin
  if nullif(trim(coalesce(p_code,'')),'') is null then return jsonb_build_object('error','voter_not_found'); end if;
  select id,case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end
    into v_student_id,v_gender from public.students
    where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;

  if v_student_id is null then
    select id into v_teacher_id from public.teachers where teacher_code=trim(p_code) limit 1;
    if v_teacher_id is null and trim(p_code) like 'personnel:%' then
      begin
        select id into v_personnel_id from public.sports_shirt_personnel_requests
        where id=substring(trim(p_code) from 11)::uuid
          and event_id=public._council_current_personnel_roster_event_id();
      exception when invalid_text_representation then v_personnel_id := null;
      end;
    elsif v_teacher_id is null and trim(p_code) like 'election-personnel:%' then
      begin
        select id into v_council_personnel_id from public.council_election_personnel
        where id=substring(trim(p_code) from 20)::uuid
          and term_id=public._council_election_page_term_id();
      exception when invalid_text_representation then v_council_personnel_id := null;
      end;
    end if;
    if v_teacher_id is null and v_personnel_id is null and v_council_personnel_id is null then return jsonb_build_object('error','voter_not_found'); end if;
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
  elsif v_personnel_id is not null then
    insert into public.council_votes(election_config_id,candidate_id,voter_personnel_id,vote_kind)
    values(p_election_config_id,p_candidate_id,v_personnel_id,case when p_candidate_id is null then 'abstain' else 'candidate' end)
    on conflict(election_config_id,voter_personnel_id) where voter_personnel_id is not null do nothing returning id into v_vote_id;
  else
    insert into public.council_votes(election_config_id,candidate_id,voter_council_personnel_id,vote_kind)
    values(p_election_config_id,p_candidate_id,v_council_personnel_id,case when p_candidate_id is null then 'abstain' else 'candidate' end)
    on conflict(election_config_id,voter_council_personnel_id) where voter_council_personnel_id is not null do nothing returning id into v_vote_id;
  end if;
  if v_vote_id is null then return jsonb_build_object('error','already_voted'); end if;
  return jsonb_build_object('ok',true,'vote_kind',case when p_candidate_id is null then 'abstain' else 'candidate' end,'counted_as_official_vote',true);
end;
$$;
revoke all on function public.cast_public_council_vote(text,bigint,bigint) from public;
grant execute on function public.cast_public_council_vote(text,bigint,bigint) to anon,authenticated;

create or replace function public.get_public_council_election_bundle_v2(p_code text)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare
  v_student record;
  v_teacher_id integer;
  v_personnel_id uuid;
  v_council_personnel_id uuid;
  v_term_id bigint := public._council_election_page_term_id();
  v_thank_you text;
  v_ballots jsonb := '[]'::jsonb;
  v_election record;
  v_candidates jsonb;
  v_vote record;
  v_did_vote boolean;
  v_is_1087 boolean := trim(p_code)='1087';
  v_legacy jsonb;
  v_staff_name text;
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
      select id,full_name into v_personnel_id,v_staff_name from public.sports_shirt_personnel_requests
      where id=substring(trim(p_code) from 11)::uuid
        and event_id=public._council_current_personnel_roster_event_id();
    exception when invalid_text_representation then v_personnel_id := null;
    end;
  elsif v_teacher_id is null and trim(p_code) like 'election-personnel:%' then
    begin
      select id,full_name into v_council_personnel_id,v_staff_name from public.council_election_personnel
      where id=substring(trim(p_code) from 20)::uuid
        and term_id=v_term_id;
    exception when invalid_text_representation then v_council_personnel_id := null;
    end;
  end if;
  if v_teacher_id is null and v_personnel_id is null and v_council_personnel_id is null then return jsonb_build_object('error','voter_not_found'); end if;

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
      select candidate_id,(vote_kind='abstain') as abstained into v_vote from public.council_votes where election_config_id=v_election.id and voter_teacher_id=v_teacher_id;
    elsif v_personnel_id is not null then
      select candidate_id,(vote_kind='abstain') as abstained into v_vote from public.council_votes where election_config_id=v_election.id and voter_personnel_id=v_personnel_id;
    else
      select candidate_id,(vote_kind='abstain') as abstained into v_vote from public.council_votes where election_config_id=v_election.id and voter_council_personnel_id=v_council_personnel_id;
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
  if v_teacher_id is not null then
    select full_name into v_staff_name from public.teachers where id=v_teacher_id;
  end if;
  return jsonb_build_object('voter_type',case when v_teacher_id is not null then 'teacher' else 'personnel' end,'teacher_id',v_teacher_id,
    'student',jsonb_build_object('full_name',v_staff_name,'main_room',case when v_teacher_id is not null then 'ครู' else 'บุคลากร' end),
    'ballots',v_ballots,'is_1087_tester',v_is_1087);
end;
$$;
revoke all on function public.get_public_council_election_bundle_v2(text) from public;
grant execute on function public.get_public_council_election_bundle_v2(text) to anon,authenticated;
