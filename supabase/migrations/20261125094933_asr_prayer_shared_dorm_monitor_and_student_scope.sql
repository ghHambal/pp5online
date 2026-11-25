-- Allow one shared dorm-guardian profile to monitor every active dorm, while
-- keeping students on a self-only commuter dashboard.

create or replace function public.asr_prayer_my_access()
returns jsonb
language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare
  v_uid uuid := auth.uid();
  v_admin boolean;
  v_rows jsonb;
  v_student_id integer;
  v_student_only boolean;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  v_admin := public.asr_prayer_is_admin();
  select coalesce(jsonb_agg(jsonb_build_object(
    'role',a.role_key,'scope_type',a.scope_type,'scope_value',a.scope_value,'student_id',a.student_id
  )), '[]'::jsonb) into v_rows
  from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active;

  select s.id into v_student_id
  from public.students s
  where s.profile_id=v_uid and s.is_active is true and s.gender='หญิง'
    and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)
  limit 1;
  v_student_only := not v_admin and v_student_id is not null and jsonb_array_length(v_rows)=0;

  return jsonb_build_object(
    'is_admin',v_admin,
    'can_manage',v_admin or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key in ('delegate','color_manager')),
    'can_manage_global',v_admin or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='delegate'),
    'can_manage_schedule',v_admin or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key in ('delegate','color_manager')),
    'can_view_all',v_admin or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='report_viewer'),
    'can_view_commuter',v_student_only,
    'student_id',case when v_student_only then v_student_id else null end,
    'assignments',v_rows,
    'settings',(select to_jsonb(s) - 'id' - 'updated_by_profile_id' - 'updated_at' from public.asr_prayer_settings s where s.id=1)
  );
end $$;
revoke all on function public.asr_prayer_my_access() from public, anon;
grant execute on function public.asr_prayer_my_access() to authenticated;

create or replace function public.asr_prayer_set_dorm_access_all(
  p_profile_id uuid, p_role text, p_enabled boolean
)
returns integer
language plpgsql security definer set search_path = pg_catalog, public as $$
declare
  v_uid uuid := auth.uid();
  v_count integer;
begin
  if v_uid is null or not public.asr_prayer_is_admin() then raise exception 'admin access required' using errcode='42501'; end if;
  if p_role not in ('dorm_scanner','dorm_monitor') or p_enabled is null then raise exception 'invalid dorm permission'; end if;
  if not exists(select 1 from public.profiles where id=p_profile_id) then raise exception 'ไม่พบบัญชีผู้ใช้'; end if;

  if p_enabled then
    insert into public.asr_prayer_access(profile_id,role_key,scope_type,scope_value,granted_by_profile_id)
    select p_profile_id,p_role,'dorm',d.name,v_uid
    from public.asr_prayer_dorms d where d.is_active
    on conflict (profile_id,role_key,scope_type,scope_value) where is_active
    do update set updated_at=now(),granted_by_profile_id=excluded.granted_by_profile_id;
    get diagnostics v_count = row_count;
  else
    update public.asr_prayer_access a set is_active=false,updated_at=now()
    where a.profile_id=p_profile_id and a.role_key=p_role and a.scope_type='dorm' and a.is_active;
    get diagnostics v_count = row_count;
  end if;

  insert into public.asr_prayer_audit_logs(actor_profile_id,action,details)
  values(v_uid,'all_dorm_access_changed',jsonb_build_object('profile_id',p_profile_id,'role',p_role,'enabled',p_enabled,'affected_dorms',v_count));
  return v_count;
end $$;
revoke all on function public.asr_prayer_set_dorm_access_all(uuid,text,boolean) from public, anon;
grant execute on function public.asr_prayer_set_dorm_access_all(uuid,text,boolean) to authenticated;

create or replace function public.asr_prayer_student_period(p_period_key text, p_anchor_date date default null)
returns jsonb
language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare
  v_uid uuid := auth.uid();
  v_today date := (now() at time zone 'Asia/Bangkok')::date;
  v_anchor date := coalesce(p_anchor_date,(now() at time zone 'Asia/Bangkok')::date);
  v_start date; v_end date; v_tracking_start date; v_tracking_end date;
  v_student_id integer; v_result jsonb;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  if p_period_key not in ('day','week','month') then raise exception 'invalid Asr report period' using errcode='22023'; end if;
  if v_anchor>v_today then raise exception 'เลือกวันที่ในอนาคตไม่ได้' using errcode='22023'; end if;
  select s.id into v_student_id from public.students s
  where s.profile_id=v_uid and s.is_active is true and s.gender='หญิง'
    and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)
  limit 1;
  if v_student_id is null or public.asr_prayer_is_admin() or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active)
  then raise exception 'student commuter access required' using errcode='42501'; end if;

  select tracking_started_on,tracking_ends_on into v_tracking_start,v_tracking_end from public.asr_prayer_settings where id=1;
  v_tracking_start:=coalesce(v_tracking_start,date '2026-11-22');
  if p_period_key='day' then v_start:=v_anchor;v_end:=v_anchor;
  elsif p_period_key='week' then v_start:=v_anchor-extract(dow from v_anchor)::integer;v_end:=least(v_start+4,v_anchor);
  else v_start:=date_trunc('month',v_anchor)::date;v_end:=v_anchor; end if;
  v_start:=greatest(v_start,v_tracking_start);
  if v_tracking_end is not null then v_end:=least(v_end,v_tracking_end); end if;

  with student as (
    select s.id student_id,s.student_code,s.full_name,s.main_room,s.house_color,s.image_url,
      btrim(s.house_color) scope_value
    from public.students s where s.id=v_student_id
      and nullif(btrim(s.house_color),'') is not null and btrim(s.house_color)<>'#N/A'
  ), calendar as (
    select g.day_value::date check_date from generate_series(v_start::timestamp,v_end::timestamp,interval '1 day') g(day_value)
    where p_period_key='day' or extract(dow from g.day_value)::integer between 0 and 4
  ), marks as (
    select s.*,cal.check_date,c.id checkin_id,
      (c.id is not null and c.round_key='commuter' and c.scope_type='color' and c.scope_value=s.scope_value) matched,
      (c.id is not null and (c.round_key<>'commuter' or c.scope_type<>'color' or c.scope_value<>s.scope_value)) mismatch,
      (c.id is null and (cal.check_date<v_today or (now() at time zone 'Asia/Bangkok')::time >=
        greatest((select commuter_scan_end from public.asr_prayer_settings where id=1),(select dorm_scan_end from public.asr_prayer_settings where id=1)))) finalized_missing
    from student s cross join calendar cal
    left join public.asr_prayer_checkins c on c.student_id=s.student_id and c.check_date=cal.check_date
  ), totals as (
    select student_id,student_code,full_name,main_room,house_color,image_url,scope_value,
      count(*)::integer expected_days,count(*) filter(where matched)::integer scanned_days,
      count(*) filter(where finalized_missing)::integer missing_days,count(*) filter(where mismatch)::integer mismatch_days
    from marks group by student_id,student_code,full_name,main_room,house_color,image_url,scope_value
  )
  select jsonb_build_object(
    'period',p_period_key,'anchor_date',v_anchor,'start_date',v_start,'end_date',v_end,
    'tracking_started_on',v_tracking_start,'school_days',(select count(*) from calendar),
    'groups',coalesce((select jsonb_agg(jsonb_build_object('round','commuter','scope_type','color','scope_value',scope_value,
      'eligible',expected_days,'scanned',scanned_days,'pending',expected_days-scanned_days,'mismatches',mismatch_days,
      'student_count',1,'students_with_scan',case when scanned_days>0 then 1 else 0 end,
      'percent',case when expected_days=0 then 0 else round(100.0*scanned_days/expected_days,1) end)) from totals),'[]'::jsonb),
    'followup',coalesce((select jsonb_agg(jsonb_build_object('student_id',student_id,'student_code',student_code,'full_name',full_name,
      'main_room',main_room,'house_color',house_color,'dorm_name',null,'image_url',image_url,'round','commuter','scope_value',scope_value,
      'expected_days',expected_days,'scanned_days',scanned_days,'missing_days',missing_days,'mismatch_days',mismatch_days))
      from totals where missing_days>0 or mismatch_days>0),'[]'::jsonb),
    'followup_total',(select count(*) from totals where missing_days>0 or mismatch_days>0),
    'students',coalesce((select jsonb_agg(jsonb_build_object('student_id',student_id,'student_code',student_code,'full_name',full_name,
      'main_room',main_room,'house_color',house_color,'dorm_name',null,'image_url',image_url,'round','commuter','scope_value',scope_value,
      'expected_days',expected_days,'scanned_days',scanned_days,'missing_days',missing_days,'mismatch_days',mismatch_days)) from totals),'[]'::jsonb),
    'filter_options',jsonb_build_object('rooms','[]'::jsonb,'colors','[]'::jsonb,'dorms','[]'::jsonb)
  ) into v_result;
  return v_result;
end $$;
revoke all on function public.asr_prayer_student_period(text,date) from public, anon;
grant execute on function public.asr_prayer_student_period(text,date) to authenticated;

create or replace function public.asr_prayer_student_period_students(p_period_key text,p_anchor_date date)
returns jsonb
language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare v_uid uuid:=auth.uid(); v_student_id integer; v_report jsonb;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  select s.id into v_student_id from public.students s
  where s.profile_id=v_uid and s.is_active is true and s.gender='หญิง'
    and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active) limit 1;
  if v_student_id is null or public.asr_prayer_is_admin() or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active)
  then raise exception 'student commuter access required' using errcode='42501'; end if;
  v_report:=public.asr_prayer_student_period(p_period_key,p_anchor_date);
  return coalesce(v_report->'students','[]'::jsonb);
end $$;
revoke all on function public.asr_prayer_student_period_students(text,date) from public, anon;
grant execute on function public.asr_prayer_student_period_students(text,date) to authenticated;
