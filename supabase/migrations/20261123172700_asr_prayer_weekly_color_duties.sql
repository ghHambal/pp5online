-- Store color scanner duties as recurring weekly schedules (Sunday through Thursday).
-- Preserve the weekday of any pre-existing dated assignment, collapsing repeats.
alter table public.asr_prayer_color_duties add column if not exists day_of_week smallint;
update public.asr_prayer_color_duties set day_of_week=extract(dow from duty_date)::smallint where day_of_week is null;

delete from public.asr_prayer_color_duties a
using public.asr_prayer_color_duties b
where a.day_of_week=b.day_of_week and a.house_color=b.house_color and a.student_id=b.student_id
  and (a.duty_date<b.duty_date or (a.duty_date=b.duty_date and a.id<b.id));

alter table public.asr_prayer_color_duties drop constraint if exists asr_prayer_color_duty_date_school_days;
alter table public.asr_prayer_color_duties drop constraint if exists asr_prayer_color_duty_unique;
alter table public.asr_prayer_color_duties alter column day_of_week set not null;
alter table public.asr_prayer_color_duties add constraint asr_prayer_color_duty_weekday check (day_of_week between 0 and 4);
alter table public.asr_prayer_color_duties add constraint asr_prayer_color_duty_weekday_unique unique (day_of_week,house_color,student_id);
drop index if exists public.asr_prayer_color_duties_date_color_idx;
create index if not exists asr_prayer_color_duties_weekday_color_idx on public.asr_prayer_color_duties(day_of_week,house_color,student_id);
alter table public.asr_prayer_color_duties drop column duty_date;

create or replace function public.asr_prayer_color_schedule_data()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public as $$
declare v_uid uuid:=auth.uid(); v_global boolean; v_colors jsonb; v_scanners jsonb; v_duties jsonb; v_settings jsonb;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  v_global:=public.asr_prayer_is_admin() or exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='delegate');
  if not v_global and not exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='color_manager') then raise exception 'not authorized to manage color schedules' using errcode='42501'; end if;
  select to_jsonb(s)-'id'-'updated_by_profile_id'-'updated_at' into v_settings from public.asr_prayer_settings s where s.id=1;
  select coalesce(jsonb_agg(distinct a.scope_value order by a.scope_value),'[]'::jsonb) into v_colors
    from public.asr_prayer_access a where a.is_active and a.role_key='color_manager' and (v_global or a.profile_id=v_uid);
  if v_global then
    select coalesce(jsonb_agg(x.color order by x.color),'[]'::jsonb) into v_colors from (
      select distinct btrim(house_color) color from public.students where is_active and gender='หญิง' and nullif(btrim(house_color),'') is not null and btrim(house_color)<>'#N/A'
    ) x;
  end if;
  select coalesce(jsonb_agg(jsonb_build_object('student_id',s.id,'full_name',s.full_name,'student_code',s.student_code,'main_room',s.main_room,'house_color',s.house_color) order by s.house_color,s.main_room,s.full_name),'[]'::jsonb) into v_scanners
    from public.asr_prayer_access a join public.students s on s.id=a.student_id
    where a.is_active and a.role_key='color_scanner' and (v_global or exists(select 1 from public.asr_prayer_access m where m.profile_id=v_uid and m.student_id=a.student_id and m.is_active and m.role_key='color_manager' and m.scope_value=a.scope_value));
  select coalesce(jsonb_agg(jsonb_build_object('id',d.id,'day_of_week',d.day_of_week,'house_color',d.house_color,'student_id',d.student_id,'full_name',s.full_name,'student_code',s.student_code,'main_room',s.main_room) order by d.day_of_week,d.house_color,s.full_name),'[]'::jsonb) into v_duties
    from public.asr_prayer_color_duties d join public.students s on s.id=d.student_id
    where v_global or exists(select 1 from public.asr_prayer_access m where m.profile_id=v_uid and m.is_active and m.role_key='color_manager' and m.scope_value=d.house_color);
  return jsonb_build_object('settings',v_settings,'colors',v_colors,'scanners',v_scanners,'duties',v_duties,
    'color_managers',(select coalesce(jsonb_agg(jsonb_build_object('student_id',a.student_id,'scope_value',a.scope_value,'full_name',s.full_name,'student_code',s.student_code,'main_room',s.main_room) order by a.scope_value,s.full_name),'[]'::jsonb)
      from public.asr_prayer_access a left join public.students s on s.id=a.student_id where a.is_active and a.role_key='color_manager'
        and exists(select 1 from public.asr_prayer_access c where c.student_id=a.student_id and c.is_active and c.role_key='color_scanner' and c.scope_value=a.scope_value)
        and (v_global or a.profile_id=v_uid)));
end $$;
revoke all on function public.asr_prayer_color_schedule_data() from public, anon;
grant execute on function public.asr_prayer_color_schedule_data() to authenticated;

drop function if exists public.asr_prayer_save_color_duty(date,text,integer[]);
create or replace function public.asr_prayer_save_color_duty(p_day_of_week smallint,p_color text,p_student_ids integer[])
returns jsonb language plpgsql security definer set search_path = pg_catalog, public as $$
declare v_uid uuid:=auth.uid(); v_color text:=nullif(btrim(p_color),''); v_ids integer[]; v_count integer;
begin
  if v_uid is null then raise exception 'authentication required' using errcode='42501'; end if;
  if not public.asr_prayer_is_admin() and not exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='delegate')
    and not exists(select 1 from public.asr_prayer_access a where a.profile_id=v_uid and a.is_active and a.role_key='color_manager' and a.scope_value=btrim(coalesce(p_color,''))
      and exists(select 1 from public.asr_prayer_access c where c.student_id=a.student_id and c.is_active and c.role_key='color_scanner' and c.scope_value=a.scope_value))
  then raise exception 'ไม่มีสิทธิ์จัดเวรสีนี้' using errcode='42501'; end if;
  if p_day_of_week is null or p_day_of_week not between 0 and 4 or v_color is null then raise exception 'เลือกวันอาทิตย์ถึงวันพฤหัสบดีและสีให้ถูกต้อง'; end if;
  select coalesce(array_agg(distinct x),'{}'::integer[]) into v_ids from unnest(coalesce(p_student_ids,'{}'::integer[])) x where x is not null;
  select count(*) into v_count from public.students s where s.id=any(v_ids) and s.is_active and s.gender='หญิง'
    and left(coalesce(s.main_room,''),3)='ม.6' and btrim(coalesce(s.house_color,''))=v_color
    and exists(select 1 from public.asr_prayer_access a where a.student_id=s.id and a.is_active and a.role_key='color_scanner' and a.scope_value=v_color);
  if v_count<>cardinality(v_ids) then raise exception 'เลือกได้เฉพาะผู้สแกนที่ได้รับมอบหมายในสีนั้น'; end if;
  delete from public.asr_prayer_color_duties where day_of_week=p_day_of_week and house_color=v_color;
  insert into public.asr_prayer_color_duties(day_of_week,house_color,student_id,assigned_by_profile_id)
    select p_day_of_week,v_color,x,v_uid from unnest(v_ids) x;
  insert into public.asr_prayer_audit_logs(actor_profile_id,action,details) values(v_uid,'weekly_color_duty_saved',jsonb_build_object('day_of_week',p_day_of_week,'color',v_color,'student_ids',v_ids,'count',cardinality(v_ids)));
  return jsonb_build_object('day_of_week',p_day_of_week,'house_color',v_color,'assigned_count',cardinality(v_ids));
end $$;
revoke all on function public.asr_prayer_save_color_duty(smallint,text,integer[]) from public, anon;
grant execute on function public.asr_prayer_save_color_duty(smallint,text,integer[]) to authenticated;
