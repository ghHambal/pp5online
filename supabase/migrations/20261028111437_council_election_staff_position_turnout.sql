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
  select count(*) into v_personnel_total
  from public.sports_shirt_personnel_requests p
  where p.event_id=public._council_current_personnel_roster_event_id();

  select jsonb_build_object(
    'male',jsonb_build_object(
      'teachers_total',v_teacher_total,
      'teachers_voted',count(distinct v.voter_teacher_id) filter(where e.gender='M'),
      'personnel_total',v_personnel_total,
      'personnel_voted',count(distinct v.voter_personnel_id) filter(where e.gender='M')
    ),
    'female',jsonb_build_object(
      'teachers_total',v_teacher_total,
      'teachers_voted',count(distinct v.voter_teacher_id) filter(where e.gender='W'),
      'personnel_total',v_personnel_total,
      'personnel_voted',count(distinct v.voter_personnel_id) filter(where e.gender='W')
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
