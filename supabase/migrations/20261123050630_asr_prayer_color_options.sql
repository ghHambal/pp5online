create or replace function public.asr_prayer_house_colors()
returns jsonb
language plpgsql stable security definer
set search_path = pg_catalog, public
as $$
declare
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'authentication required' using errcode='42501';
  end if;
  if not public.asr_prayer_is_admin()
     and not exists (
       select 1 from public.asr_prayer_access a
       where a.profile_id=v_uid and a.is_active and a.role_key='delegate'
     ) then
    raise exception 'not authorized to manage Asr prayer assignments' using errcode='42501';
  end if;

  return (
    select coalesce(jsonb_agg(colors.color order by colors.color), '[]'::jsonb)
    from (
      select distinct btrim(s.house_color) as color
      from public.students s
      where s.is_active is true
        and nullif(btrim(s.house_color), '') is not null
        and btrim(s.house_color) <> '#N/A'
    ) colors
  );
end;
$$;

revoke all on function public.asr_prayer_house_colors() from public, anon;
grant execute on function public.asr_prayer_house_colors() to authenticated;
