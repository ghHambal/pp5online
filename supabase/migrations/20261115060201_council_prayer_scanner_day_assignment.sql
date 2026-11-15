-- Let authorized Ibadat council staff assign days only to active council scanners.
create or replace function public.set_council_prayer_scanner_day(
  p_student_id bigint,
  p_day text,
  p_enabled boolean
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_student_code text;
  v_config_key text;
  v_config_value text;
  v_codes text[];
begin
  if p_student_id is null or p_enabled is null then
    raise exception 'student and enabled flag are required';
  end if;

  if p_day is null or p_day not in ('Sun', 'Mon', 'Tue', 'Wed', 'Thu') then
    raise exception 'invalid prayer scanner day';
  end if;

  if not public.is_council_ibadat_prayer_scanner() then
    raise exception 'not authorized to manage council prayer scanners' using errcode = '42501';
  end if;

  select s.student_code
    into v_student_code
  from public.students s
  where s.id = p_student_id
    and s.can_scan_prayer is true
    and exists (
      select 1
      from public.council_members cm
      join public.council_terms ct on ct.id = cm.term_id
      where cm.student_id = s.id
        and cm.status = 'active'
        and ct.status = 'active'
    );

  if not found or nullif(btrim(v_student_code), '') is null then
    raise exception 'student must be an active council scanner in the active term';
  end if;

  v_config_key := 'prayerScanner' || p_day;
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(v_config_key, 0));

  select value
    into v_config_value
  from public.system_config
  where key = v_config_key
  for update;

  select coalesce(array_agg(code order by first_ordinal), '{}'::text[])
    into v_codes
  from (
    select btrim(parts.part) as code, min(parts.ordinality) as first_ordinal
    from pg_catalog.regexp_split_to_table(coalesce(v_config_value, ''), '[,[:space:]]+')
      with ordinality as parts(part, ordinality)
    where btrim(parts.part) <> ''
    group by btrim(parts.part)
  ) existing_codes;

  if p_enabled then
    if not (v_student_code = any(v_codes)) then
      v_codes := array_append(v_codes, v_student_code);
    end if;
  else
    select coalesce(array_agg(code order by ordinality), '{}'::text[])
      into v_codes
    from unnest(v_codes) with ordinality as assigned(code, ordinality)
    where code <> v_student_code;
  end if;

  insert into public.system_config (key, value, updated_at)
  values (v_config_key, array_to_string(v_codes, ','), now())
  on conflict (key) do update
    set value = excluded.value,
        updated_at = excluded.updated_at;

  return true;
end;
$$;

revoke all on function public.set_council_prayer_scanner_day(bigint, text, boolean) from public, anon;
grant execute on function public.set_council_prayer_scanner_day(bigint, text, boolean) to authenticated;
