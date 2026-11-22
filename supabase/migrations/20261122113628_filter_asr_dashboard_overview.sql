do $$
declare
  v_definition text;
  v_room_filter text := $filter$where s.is_active and s.gender='หญิง'
      and (left(btrim(coalesce(s.main_room,'')),3)<>'ม.6' or (
        strpos(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/')>0
        and split_part(split_part(btrim(coalesce(s.main_room,'')),' ',1),'/',2)<>'0'
      ))$filter$;
begin
  select pg_get_functiondef('public.asr_prayer_dashboard(date)'::regprocedure)
    into v_definition;
  if position($find$where s.is_active and s.gender='หญิง'$find$ in v_definition) = 0 then
    raise exception 'Expected Asr dashboard student filters were not found';
  end if;
  v_definition := replace(v_definition,
    $find$where s.is_active and s.gender='หญิง'$find$,
    v_room_filter);
  if position('and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)' in v_definition) = 0 then
    raise exception 'Expected commuter cohort exclusion was not found';
  end if;
  v_definition := replace(v_definition,
    'and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)',
    'and nullif(btrim(s.house_color),'''') is not null and btrim(s.house_color)<>''#N/A'' and not exists(select 1 from public.asr_prayer_dorm_roster r where r.student_id=s.id and r.is_active)');
  execute v_definition;
end $$;
