-- Restore all turnout fields consumed by the public dashboard, including election-only personnel.
create or replace function public.get_public_council_election_turnout()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
declare
  v_term_id bigint;
  v_total bigint;
  v_voted bigint := 0;
  v_male_total bigint;
  v_female_total bigint;
  v_unknown_total bigint;
  v_male_voted bigint := 0;
  v_female_voted bigint := 0;
  v_unknown_voted bigint := 0;
  v_classes jsonb := '[]'::jsonb;
  v_staff jsonb;
  v_staff_ballots bigint := 0;
  v_opens timestamptz;
  v_closes timestamptz;
begin
  v_term_id := public._council_election_page_term_id();
  select count(*),
    count(*) filter(where gender_key='M'),
    count(*) filter(where gender_key='W'),
    count(*) filter(where gender_key is null)
    into v_total,v_male_total,v_female_total,v_unknown_total
  from (
    select case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end as gender_key
    from public.students
  ) s;

  if v_term_id is not null then
    with student_votes as (
      select distinct v.voter_student_id
      from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
      where e.term_id=v_term_id and v.voter_student_id is not null
    )
    select count(distinct s.id) filter(where sv.voter_student_id is not null),
      count(distinct s.id) filter(where s.gender in ('ชาย','M') and sv.voter_student_id is not null),
      count(distinct s.id) filter(where s.gender in ('หญิง','W') and sv.voter_student_id is not null),
      count(distinct s.id) filter(where s.gender not in ('ชาย','M','หญิง','W') and sv.voter_student_id is not null or s.gender is null and sv.voter_student_id is not null)
      into v_voted,v_male_voted,v_female_voted,v_unknown_voted
    from public.students s left join student_votes sv on sv.voter_student_id=s.id;

    with student_votes as (
      select distinct v.voter_student_id
      from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
      where e.term_id=v_term_id and v.voter_student_id is not null
    )
    select coalesce(jsonb_agg(jsonb_build_object(
      'room',room_name,'total',total_count,'voted',voted_count,
      'male_total',male_total,'male_voted',male_voted,
      'female_total',female_total,'female_voted',female_voted,
      'unknown_total',unknown_total,'unknown_voted',unknown_voted
    ) order by room_name),'[]'::jsonb)
    into v_classes
    from (
      select coalesce(nullif(trim(s.main_room),''),'ไม่ระบุห้อง') as room_name,
        count(*) as total_count,
        count(*) filter(where sv.voter_student_id is not null) as voted_count,
        count(*) filter(where s.gender in ('ชาย','M')) as male_total,
        count(*) filter(where s.gender in ('ชาย','M') and sv.voter_student_id is not null) as male_voted,
        count(*) filter(where s.gender in ('หญิง','W')) as female_total,
        count(*) filter(where s.gender in ('หญิง','W') and sv.voter_student_id is not null) as female_voted,
        count(*) filter(where s.gender not in ('ชาย','M','หญิง','W') or s.gender is null) as unknown_total,
        count(*) filter(where (s.gender not in ('ชาย','M','หญิง','W') or s.gender is null) and sv.voter_student_id is not null) as unknown_voted
      from public.students s left join student_votes sv on sv.voter_student_id=s.id
      group by coalesce(nullif(trim(s.main_room),''),'ไม่ระบุห้อง')
    ) rooms;

    select count(*) filter(where v.voter_teacher_id is not null or v.voter_personnel_id is not null or v.voter_council_personnel_id is not null),min(e.opens_at),max(e.closes_at)
      into v_staff_ballots,v_opens,v_closes
    from public.council_election_config e left join public.council_votes v on v.election_config_id=e.id
    where e.term_id=v_term_id;
  end if;

  with teacher_voters as (
    select distinct v.voter_teacher_id
    from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
    where e.term_id=v_term_id and v.voter_teacher_id is not null
  ), personnel_roster as (
    select 'legacy:'||p.id::text as voter_key,p.gender
    from public.sports_shirt_personnel_requests p
    where p.event_id=public._council_current_personnel_roster_event_id()
    union all
    select 'election:'||p.id::text as voter_key,p.gender
    from public.council_election_personnel p
    where p.term_id=v_term_id
  ), personnel_voters as (
    select distinct 'legacy:'||v.voter_personnel_id::text as voter_key
    from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
    where e.term_id=v_term_id and v.voter_personnel_id is not null
    union
    select distinct 'election:'||v.voter_council_personnel_id::text as voter_key
    from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
    where e.term_id=v_term_id and v.voter_council_personnel_id is not null
  ), personnel_totals as (
    select count(*) as total,
      count(*) filter(where p.gender in ('ชาย','M')) as male_total,
      count(*) filter(where p.gender in ('หญิง','W')) as female_total,
      count(*) filter(where p.gender not in ('ชาย','M','หญิง','W') or p.gender is null) as unknown_total,
      count(*) filter(where pv.voter_key is not null) as voted,
      count(*) filter(where p.gender in ('ชาย','M') and pv.voter_key is not null) as male_voted,
      count(*) filter(where p.gender in ('หญิง','W') and pv.voter_key is not null) as female_voted,
      count(*) filter(where (p.gender not in ('ชาย','M','หญิง','W') or p.gender is null) and pv.voter_key is not null) as unknown_voted
    from personnel_roster p
    left join personnel_voters pv on pv.voter_key=p.voter_key
  ), teacher_totals as (
    select count(*) as total,(select count(*) from teacher_voters) as voted from public.teachers
  )
  select jsonb_build_object(
    'teachers',jsonb_build_object('total',t.total,'voted',t.voted,'gender_data_available',false),
    'personnel',jsonb_build_object('total',p.total,'voted',p.voted,
      'male_total',p.male_total,'male_voted',p.male_voted,
      'female_total',p.female_total,'female_voted',p.female_voted,
      'unknown_total',p.unknown_total,'unknown_voted',p.unknown_voted),
    'voted_people',t.voted+p.voted
  ) into v_staff from teacher_totals t cross join personnel_totals p;

  return jsonb_build_object(
    'total_students',v_total,'voted_count',v_voted,
    'percent',case when v_total=0 then 0 else round(v_voted*100.0/v_total,2) end,
    'student_breakdown',jsonb_build_object(
      'male',jsonb_build_object('total',v_male_total,'voted',v_male_voted,'percent',case when v_male_total=0 then 0 else round(v_male_voted*100.0/v_male_total,2) end),
      'female',jsonb_build_object('total',v_female_total,'voted',v_female_voted,'percent',case when v_female_total=0 then 0 else round(v_female_voted*100.0/v_female_total,2) end),
      'unknown',jsonb_build_object('total',v_unknown_total,'voted',v_unknown_voted)
    ),
    'classes',v_classes,'staff_breakdown',v_staff,'staff_voted_ballots',v_staff_ballots,
    'opens_at',v_opens,'closes_at',v_closes,'term_id',v_term_id
  );
end;
$$;
revoke all on function public.get_public_council_election_turnout() from public;
grant execute on function public.get_public_council_election_turnout() to anon,authenticated;
