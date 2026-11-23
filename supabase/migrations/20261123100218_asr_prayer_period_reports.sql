-- Period-based Asr reports. Tracking starts on the original Asr launch date so
-- the monthly view does not count dates from before the feature existed.
alter table public.asr_prayer_settings
  add column if not exists tracking_started_on date not null default date '2026-11-22';

create or replace function public.asr_prayer_dashboard_period(
  p_period_key text,
  p_anchor_date date default null,
  p_room text default null,
  p_color text default null,
  p_dorm text default null
)
returns jsonb
language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare
  v_uid uuid := auth.uid();
  v_today date := (now() at time zone 'Asia/Bangkok')::date;
  v_anchor date := coalesce(p_anchor_date, (now() at time zone 'Asia/Bangkok')::date);
  v_start date;
  v_end date;
  v_tracking_start date;
  v_tracking_end date;
  v_global boolean;
  v_result jsonb;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  if p_period_key not in ('day','week','month') then raise exception 'invalid Asr report period' using errcode='22023'; end if;
  if v_anchor > v_today then raise exception 'เลือกวันที่ในอนาคตไม่ได้' using errcode='22023'; end if;

  v_global := public.asr_prayer_is_admin() or exists (
    select 1 from public.asr_prayer_access a
    where a.profile_id=v_uid and a.is_active and a.role_key='report_viewer'
  );
  if not v_global and not exists (
    select 1 from public.asr_prayer_access a
    where a.profile_id=v_uid and a.is_active and a.role_key in ('color_scanner','dorm_scanner','dorm_monitor')
  ) then raise exception 'not authorized to view Asr dashboard' using errcode='42501'; end if;

  select tracking_started_on,tracking_ends_on into v_tracking_start,v_tracking_end from public.asr_prayer_settings where id=1;
  v_tracking_start := coalesce(v_tracking_start, date '2026-11-22');
  if p_period_key='day' then
    v_start := v_anchor;
    v_end := v_anchor;
  elsif p_period_key='week' then
    v_start := v_anchor - extract(dow from v_anchor)::integer;
    v_end := least(v_start + 4, v_anchor);
  else
    v_start := date_trunc('month', v_anchor)::date;
    v_end := v_anchor;
  end if;
  v_start := greatest(v_start, v_tracking_start);
  if v_tracking_end is not null then v_end := least(v_end,v_tracking_end); end if;

  with cohort as (
    select s.id student_id,s.student_code,s.full_name,s.main_room,s.house_color,s.image_url,
      'commuter'::text round_key,'color'::text scope_type,btrim(s.house_color) scope_value,null::text dorm_name
    from public.students s
    where s.is_active is true and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (
        strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0
        and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'
      ))
      and nullif(btrim(s.house_color),'') is not null and btrim(s.house_color)<>'#N/A'
      and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)
    union all
    select s.id,s.student_code,s.full_name,s.main_room,s.house_color,s.image_url,
      'dorm','dorm',d.name,d.name
    from public.students s
    join public.asr_prayer_dorm_roster r on r.student_id=s.id and r.is_active
    join public.asr_prayer_dorms d on d.id=r.dorm_id and d.is_active
    where s.is_active is true and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (
        strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0
        and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'
      ))
  ), scoped as (
    select c.* from cohort c
    where v_global or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and (
      (a.role_key='color_scanner' and c.round_key='commuter' and a.scope_value=c.scope_value)
      or (a.role_key in ('dorm_scanner','dorm_monitor') and c.round_key='dorm' and a.scope_value=c.scope_value)
    ))
  ), filtered as (
    select s.* from scoped s
    where (nullif(btrim(p_room),'') is null or s.main_room=btrim(p_room))
      and (nullif(btrim(p_color),'') is null or s.house_color=btrim(p_color))
      and (nullif(btrim(p_dorm),'') is null or s.dorm_name=btrim(p_dorm))
  ), calendar as (
    select g.day_value::date check_date
    from generate_series(v_start::timestamp, v_end::timestamp, interval '1 day') g(day_value)
    where p_period_key='day' or extract(dow from g.day_value)::integer between 0 and 4
  ), marks as (
    select f.*,cal.check_date,c.id checkin_id,
      (c.id is not null and c.round_key=f.round_key and c.scope_type=f.scope_type and c.scope_value=f.scope_value) matched,
      (c.id is not null and (c.round_key<>f.round_key or c.scope_type<>f.scope_type or c.scope_value<>f.scope_value)) mismatch,
      (c.id is null and (cal.check_date<v_today or (now() at time zone 'Asia/Bangkok')::time >= greatest(
        (select commuter_scan_end from public.asr_prayer_settings where id=1),
        (select dorm_scan_end from public.asr_prayer_settings where id=1)
      ))) finalized_missing
    from filtered f cross join calendar cal
    left join public.asr_prayer_checkins c on c.student_id=f.student_id and c.check_date=cal.check_date
  ), student_totals as (
    select student_id,student_code,full_name,main_room,house_color,image_url,round_key,scope_type,scope_value,dorm_name,
      count(*)::integer expected_days,
      count(*) filter(where matched)::integer scanned_days,
      count(*) filter(where finalized_missing)::integer missing_days,
      count(*) filter(where mismatch)::integer mismatch_days
    from marks group by student_id,student_code,full_name,main_room,house_color,image_url,round_key,scope_type,scope_value,dorm_name
  ), groups as (
    select round_key,scope_type,scope_value,
      sum(expected_days)::integer expected_count,
      sum(scanned_days)::integer scanned_count,
      (sum(expected_days)-sum(scanned_days))::integer pending_count,
      sum(mismatch_days)::integer mismatch_count,
      count(*)::integer student_count,
      count(*) filter(where scanned_days>0)::integer students_with_scan
    from student_totals group by round_key,scope_type,scope_value
  ), followup as (
    select * from student_totals where missing_days>0 or mismatch_days>0
    order by mismatch_days desc,missing_days desc,student_code limit 100
  )
  select jsonb_build_object(
    'period',p_period_key,'anchor_date',v_anchor,'start_date',v_start,'end_date',v_end,
    'tracking_started_on',v_tracking_start,
    'school_days',(select count(*) from calendar),
    'groups',coalesce((select jsonb_agg(jsonb_build_object(
      'round',round_key,'scope_type',scope_type,'scope_value',scope_value,
      'eligible',expected_count,'scanned',scanned_count,'pending',pending_count,
      'mismatches',mismatch_count,'student_count',student_count,'students_with_scan',students_with_scan,
      'percent',case when expected_count=0 then 0 else round(100.0*scanned_count/expected_count,1) end
    ) order by round_key,scope_value) from groups),'[]'::jsonb),
    'followup',coalesce((select jsonb_agg(jsonb_build_object(
      'student_id',student_id,'student_code',student_code,'full_name',full_name,'main_room',main_room,
      'house_color',house_color,'dorm_name',dorm_name,'image_url',image_url,'round',round_key,'scope_value',scope_value,
      'expected_days',expected_days,'scanned_days',scanned_days,'missing_days',missing_days,'mismatch_days',mismatch_days
    ) order by mismatch_days desc,missing_days desc,student_code) from followup),'[]'::jsonb),
    'followup_total',(select count(*) from student_totals where missing_days>0 or mismatch_days>0),
    'filter_options',jsonb_build_object(
      'rooms',coalesce((select jsonb_agg(x.value order by x.value) from (select distinct main_room value from scoped where nullif(main_room,'') is not null) x),'[]'::jsonb),
      'colors',coalesce((select jsonb_agg(x.value order by x.value) from (select distinct house_color value from scoped where nullif(house_color,'') is not null and house_color<>'#N/A') x),'[]'::jsonb),
      'dorms',coalesce((select jsonb_agg(x.value order by x.value) from (select distinct dorm_name value from scoped where dorm_name is not null) x),'[]'::jsonb)
    )
  ) into v_result;
  return v_result;
end $$;

create or replace function public.asr_prayer_dashboard_period_students(
  p_period_key text,
  p_anchor_date date,
  p_round_key text,
  p_scope_value text,
  p_room text default null,
  p_color text default null,
  p_dorm text default null
)
returns jsonb
language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare
  v_uid uuid := auth.uid();
  v_today date := (now() at time zone 'Asia/Bangkok')::date;
  v_anchor date := coalesce(p_anchor_date, (now() at time zone 'Asia/Bangkok')::date);
  v_start date;
  v_end date;
  v_tracking_start date;
  v_tracking_end date;
  v_global boolean;
  v_students jsonb;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  if p_period_key not in ('day','week','month') or p_round_key not in ('commuter','dorm') then raise exception 'invalid Asr report scope' using errcode='22023'; end if;
  if v_anchor > v_today then raise exception 'เลือกวันที่ในอนาคตไม่ได้' using errcode='22023'; end if;
  v_global := public.asr_prayer_is_admin() or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='report_viewer');
  if not v_global and not exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key in ('color_scanner','dorm_scanner','dorm_monitor')) then raise exception 'not authorized to view Asr dashboard' using errcode='42501'; end if;
  select tracking_started_on,tracking_ends_on into v_tracking_start,v_tracking_end from public.asr_prayer_settings where id=1;
  v_tracking_start := coalesce(v_tracking_start, date '2026-11-22');
  if p_period_key='day' then v_start:=v_anchor;v_end:=v_anchor;
  elsif p_period_key='week' then v_start:=v_anchor-extract(dow from v_anchor)::integer;v_end:=least(v_start+4,v_anchor);
  else v_start:=date_trunc('month',v_anchor)::date;v_end:=v_anchor; end if;
  v_start:=greatest(v_start,v_tracking_start);
  if v_tracking_end is not null then v_end:=least(v_end,v_tracking_end); end if;
  with cohort as (
    select s.id student_id,s.student_code,s.full_name,s.main_room,s.house_color,s.image_url,
      'commuter'::text round_key,'color'::text scope_type,btrim(s.house_color) scope_value,null::text dorm_name
    from public.students s
    where p_round_key='commuter' and s.is_active is true and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0 and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'))
      and nullif(btrim(s.house_color),'') is not null and btrim(s.house_color)<>'#N/A'
      and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)
    union all
    select s.id,s.student_code,s.full_name,s.main_room,s.house_color,s.image_url,'dorm','dorm',d.name,d.name
    from public.students s join public.asr_prayer_dorm_roster r on r.student_id=s.id and r.is_active join public.asr_prayer_dorms d on d.id=r.dorm_id and d.is_active
    where p_round_key='dorm' and s.is_active is true and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0 and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'))
  ), scoped as (
    select c.* from cohort c where c.round_key=p_round_key and c.scope_value=p_scope_value
      and (nullif(btrim(p_room),'') is null or c.main_room=btrim(p_room))
      and (nullif(btrim(p_color),'') is null or c.house_color=btrim(p_color))
      and (nullif(btrim(p_dorm),'') is null or c.dorm_name=btrim(p_dorm))
      and (v_global or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and (
        (a.role_key='color_scanner' and c.round_key='commuter' and a.scope_value=c.scope_value)
        or (a.role_key in ('dorm_scanner','dorm_monitor') and c.round_key='dorm' and a.scope_value=c.scope_value)
      )))
  ), calendar as (
    select g.day_value::date check_date from generate_series(v_start::timestamp,v_end::timestamp,interval '1 day') g(day_value)
    where p_period_key='day' or extract(dow from g.day_value)::integer between 0 and 4
  ), marks as (
    select s.*,cal.check_date,c.id checkin_id,
      (c.id is not null and c.round_key=s.round_key and c.scope_type=s.scope_type and c.scope_value=s.scope_value) matched,
      (c.id is not null and (c.round_key<>s.round_key or c.scope_type<>s.scope_type or c.scope_value<>s.scope_value)) mismatch,
      (c.id is null and (cal.check_date<v_today or (now() at time zone 'Asia/Bangkok')::time >= greatest(
        (select commuter_scan_end from public.asr_prayer_settings where id=1),
        (select dorm_scan_end from public.asr_prayer_settings where id=1)
      ))) finalized_missing
    from scoped s cross join calendar cal left join public.asr_prayer_checkins c on c.student_id=s.student_id and c.check_date=cal.check_date
  ), totals as (
    select student_id,student_code,full_name,main_room,house_color,dorm_name,image_url,round_key,scope_value,
      count(*)::integer expected_days,count(*) filter(where matched)::integer scanned_days,
      count(*) filter(where finalized_missing)::integer missing_days,count(*) filter(where mismatch)::integer mismatch_days
    from marks group by student_id,student_code,full_name,main_room,house_color,dorm_name,image_url,round_key,scope_value
  )
  select coalesce(jsonb_agg(jsonb_build_object(
    'student_id',student_id,'student_code',student_code,'full_name',full_name,'main_room',main_room,
    'house_color',house_color,'dorm_name',dorm_name,'image_url',image_url,'round',round_key,'scope_value',scope_value,
    'expected_days',expected_days,'scanned_days',scanned_days,'missing_days',missing_days,'mismatch_days',mismatch_days
  ) order by mismatch_days desc,missing_days desc,full_name) ,'[]'::jsonb) into v_students from totals;
  return v_students;
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
    select s.id student_id,s.student_code,s.full_name,s.main_room,s.house_color,s.image_url,'commuter'::text round_key,'color'::text scope_type,btrim(s.house_color) scope_value,null::text dorm_name
    from public.students s where p_round_key='commuter' and s.is_active and s.gender='หญิง' and nullif(btrim(s.house_color),'') is not null and btrim(s.house_color)<>'#N/A'
      and btrim(s.house_color)=p_scope_value and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)
    union all
    select s.id,s.student_code,s.full_name,s.main_room,s.house_color,s.image_url,'dorm','dorm',d.name,d.name
    from public.students s join public.asr_prayer_dorm_roster r on r.student_id=s.id and r.is_active join public.asr_prayer_dorms d on d.id=r.dorm_id and d.is_active
    where p_round_key='dorm' and d.name=p_scope_value and s.is_active and s.gender='หญิง'
  )
  select coalesce(jsonb_agg(jsonb_build_object(
    'student_code',e.student_code,'full_name',e.full_name,'main_room',e.main_room,'house_color',e.house_color,
    'dorm_name',e.dorm_name,'image_url',e.image_url,'scanned',c.id is not null,'recorded_at',c.recorded_at
  ) order by e.main_room,e.student_code),'[]'::jsonb) into v_students
  from eligible e left join public.asr_prayer_checkins c on c.student_id=e.student_id and c.check_date=v_date
  where v_global or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.scope_type=v_scope_type and a.scope_value=e.scope_value and (
    (a.role_key='color_scanner' and e.round_key='commuter') or (a.role_key in ('dorm_scanner','dorm_monitor') and e.round_key='dorm')
  ));
  return v_students;
end $$;

revoke all on function public.asr_prayer_dashboard_period(text,date,text,text,text) from public, anon;
grant execute on function public.asr_prayer_dashboard_period(text,date,text,text,text) to authenticated;
revoke all on function public.asr_prayer_dashboard_period_students(text,date,text,text,text,text,text) from public, anon;
grant execute on function public.asr_prayer_dashboard_period_students(text,date,text,text,text,text,text) to authenticated;
revoke all on function public.asr_prayer_dashboard_students(date,text,text) from public, anon;
grant execute on function public.asr_prayer_dashboard_students(date,text,text) to authenticated;
