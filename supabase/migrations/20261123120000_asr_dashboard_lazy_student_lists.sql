create or replace function public.asr_prayer_dashboard(p_check_date date default null)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare
  v_uid uuid:=auth.uid();
  v_date date:=coalesce(p_check_date,(now() at time zone 'Asia/Bangkok')::date);
  v_global boolean;
  v_result jsonb;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  v_global:=public.asr_prayer_is_admin() or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='report_viewer');
  if not v_global and not exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key in ('color_scanner','dorm_scanner','dorm_monitor')) then raise exception 'not authorized to view Asr dashboard' using errcode='42501'; end if;
  with eligible as (
    select s.id student_id,s.house_color,'commuter'::text round_key,'color'::text scope_type,btrim(s.house_color) scope_value
    from public.students s
    where s.is_active and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (
        strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0
        and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'
      ))
      and nullif(btrim(s.house_color),'') is not null and btrim(s.house_color)<>'#N/A'
      and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)
    union all
    select s.id,s.house_color,'dorm','dorm',d.name
    from public.students s
    join public.asr_prayer_dorm_roster r on r.student_id=s.id and r.is_active
    join public.asr_prayer_dorms d on d.id=r.dorm_id and d.is_active
    where s.is_active and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (
        strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0
        and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'
      ))
  ), visible as (
    select e.round_key,e.scope_type,e.scope_value,c.id checkin_id
    from eligible e
    left join public.asr_prayer_checkins c on c.student_id=e.student_id and c.check_date=v_date
    where v_global or exists(
      select 1 from public.asr_prayer_access a
      where a.profile_id=v_uid and a.is_active and (
        (a.role_key='color_scanner' and e.round_key='commuter' and a.scope_value=e.scope_value)
        or (a.role_key in ('dorm_scanner','dorm_monitor') and e.round_key='dorm' and a.scope_value=e.scope_value)
      )
    )
  ), groups as (
    select round_key,scope_type,scope_value,count(*) eligible_count,count(checkin_id) checked_count
    from visible group by round_key,scope_type,scope_value
  )
  select jsonb_build_object('date',v_date,'groups',coalesce((
    select jsonb_agg(jsonb_build_object(
      'round',round_key,'scope_type',scope_type,'scope_value',scope_value,
      'eligible',eligible_count,'scanned',checked_count,'pending',eligible_count-checked_count,
      'percent',case when eligible_count=0 then 0 else round(100.0*checked_count/eligible_count,1) end
    ) order by round_key,scope_value) from groups
  ),'[]'::jsonb)) into v_result;
  return v_result;
end $$;

create or replace function public.asr_prayer_dashboard_students(
  p_check_date date,
  p_round_key text,
  p_scope_value text
)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare
  v_uid uuid:=auth.uid();
  v_date date:=coalesce(p_check_date,(now() at time zone 'Asia/Bangkok')::date);
  v_global boolean;
  v_scope_type text;
  v_students jsonb;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  if p_round_key not in ('commuter','dorm') then raise exception 'invalid Asr prayer round' using errcode='22023'; end if;
  v_scope_type:=case when p_round_key='commuter' then 'color' else 'dorm' end;
  v_global:=public.asr_prayer_is_admin() or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='report_viewer');
  if not v_global and not exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key in ('color_scanner','dorm_scanner','dorm_monitor')) then raise exception 'not authorized to view Asr dashboard' using errcode='42501'; end if;
  with eligible as (
    select s.id student_id,s.student_code,s.full_name,s.main_room,'commuter'::text round_key,'color'::text scope_type,btrim(s.house_color) scope_value
    from public.students s
    where p_round_key='commuter' and s.is_active and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (
        strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0
        and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'
      ))
      and nullif(btrim(s.house_color),'') is not null and btrim(s.house_color)<>'#N/A'
      and btrim(s.house_color)=p_scope_value
      and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)
    union all
    select s.id,s.student_code,s.full_name,s.main_room,'dorm','dorm',d.name
    from public.students s
    join public.asr_prayer_dorm_roster r on r.student_id=s.id and r.is_active
    join public.asr_prayer_dorms d on d.id=r.dorm_id and d.is_active
    where p_round_key='dorm' and d.name=p_scope_value and s.is_active and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (
        strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0
        and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'
      ))
  )
  select coalesce(jsonb_agg(jsonb_build_object(
    'student_code',e.student_code,'full_name',e.full_name,'main_room',e.main_room,
    'scanned',c.id is not null,'recorded_at',c.recorded_at
  ) order by e.main_room,e.student_code),'[]'::jsonb) into v_students
  from eligible e
  left join public.asr_prayer_checkins c on c.student_id=e.student_id and c.check_date=v_date
  where v_global or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.scope_type=v_scope_type and a.scope_value=e.scope_value and (
    (a.role_key='color_scanner' and e.round_key='commuter') or (a.role_key in ('dorm_scanner','dorm_monitor') and e.round_key='dorm')
  ));
  return v_students;
end $$;

revoke all on function public.asr_prayer_dashboard(date) from public, anon;
grant execute on function public.asr_prayer_dashboard(date) to authenticated;
revoke all on function public.asr_prayer_dashboard_students(date,text,text) from public, anon;
grant execute on function public.asr_prayer_dashboard_students(date,text,text) to authenticated;
