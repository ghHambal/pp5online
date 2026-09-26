-- Ensure the central results account keeps access to every active competition.
-- This is intentionally additive: it does not remove assignments granted to
-- competition-responsible teachers or other field officials.

do $$
declare
  v_event_id uuid := '00000000-0000-0000-0000-000000000001';
  v_official_id uuid;
begin
  select id
    into v_official_id
  from public.sports_officials
  where event_id = v_event_id
    and lower(username) = 'ag2026'
    and status = 'approved'
  order by created_at
  limit 1;

  if v_official_id is null then
    raise exception 'ไม่พบบัญชีกรรมการกองกลาง ag2026';
  end if;

  insert into public.sports_official_assignments (official_id, sport_id)
  select v_official_id, s.id
  from public.sports s
  where s.event_id = v_event_id
    and s.is_active is true
    and not exists (
      select 1
      from public.sports_official_assignments a
      where a.official_id = v_official_id
        and a.sport_id = s.id
    );
end;
$$;
