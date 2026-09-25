-- AZIZGAMES field-official security hardening
-- Keeps the existing register -> approve -> username/PIN workflow, but moves
-- authentication and every official write behind database-validated sessions.

create extension if not exists pgcrypto with schema extensions;
create schema if not exists private;
revoke all on schema private from public;

alter table public.sports_officials
  add column if not exists pin_hash text,
  alter column pin drop not null;

-- Upgrade any previously issued plaintext PINs before removing public access.
update public.sports_officials
set pin_hash = extensions.crypt(pin, extensions.gen_salt('bf', 10)),
    pin = null
where pin is not null
  and pin_hash is null;

create table if not exists private.sports_official_sessions (
  id uuid primary key default extensions.gen_random_uuid(),
  official_id uuid not null references public.sports_officials(id) on delete cascade,
  token_hash text not null unique,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  last_used_at timestamptz not null default now(),
  revoked_at timestamptz
);

create index if not exists sports_official_sessions_active_idx
  on private.sports_official_sessions (official_id, expires_at)
  where revoked_at is null;

create table if not exists private.sports_official_login_attempts (
  id bigint generated always as identity primary key,
  username text not null,
  attempted_at timestamptz not null default now(),
  successful boolean not null default false
);

create index if not exists sports_official_login_attempts_lookup_idx
  on private.sports_official_login_attempts (username, attempted_at desc);

revoke all on all tables in schema private from public, anon, authenticated;
revoke all on all sequences in schema private from public, anon, authenticated;

create or replace function private.azizgames_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and (p.role = 'admin' or p.is_also_admin is true)
  ) or exists (
    select 1
    from public.teachers t
    join public.role_permissions rp
      on rp."position" = any(coalesce(t.positions, array[t."position"]))
    where t.profile_id = auth.uid()
      and rp.feature = 'menu_sports_admin'
      and rp.allowed is true
  );
$$;

create or replace function private.azizgames_official_for_token(p_token text)
returns uuid
language sql
stable
security definer
set search_path = public, private, extensions, pg_temp
as $$
  select s.official_id
  from private.sports_official_sessions s
  join public.sports_officials o on o.id = s.official_id
  where s.token_hash = encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex')
    and s.revoked_at is null
    and s.expires_at > now()
    and o.status = 'approved'
  limit 1;
$$;

create or replace function private.azizgames_official_has_sport(p_official uuid, p_sport uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.sports_official_assignments a
    where a.official_id = p_official and a.sport_id = p_sport
  );
$$;

create or replace function private.azizgames_apply_match_fields(p_match uuid, p_fields jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_row public.matches;
begin
  update public.matches m set
    score_a = case when p_fields ? 'score_a' then p_fields->>'score_a' else m.score_a end,
    score_b = case when p_fields ? 'score_b' then p_fields->>'score_b' else m.score_b end,
    status = case when p_fields ? 'status' then p_fields->>'status' else m.status end,
    winner_team_color_id = case when p_fields ? 'winner_team_color_id' then nullif(p_fields->>'winner_team_color_id','')::uuid else m.winner_team_color_id end,
    note = case when p_fields ? 'note' then p_fields->>'note' else m.note end,
    recorded_by = case when p_fields ? 'recorded_by' then p_fields->>'recorded_by' else m.recorded_by end,
    scheduled_date = case when p_fields ? 'scheduled_date' then nullif(p_fields->>'scheduled_date','')::date else m.scheduled_date end,
    scheduled_time = case when p_fields ? 'scheduled_time' then nullif(p_fields->>'scheduled_time','')::time else m.scheduled_time end,
    venue = case when p_fields ? 'venue' then p_fields->>'venue' else m.venue end,
    clock_status = case when p_fields ? 'clock_status' then p_fields->>'clock_status' else m.clock_status end,
    clock_half = case when p_fields ? 'clock_half' then nullif(p_fields->>'clock_half','')::integer else m.clock_half end,
    clock_started_at = case when p_fields ? 'clock_started_at' then nullif(p_fields->>'clock_started_at','')::timestamptz else m.clock_started_at end,
    clock_elapsed_before = case when p_fields ? 'clock_elapsed_before' then nullif(p_fields->>'clock_elapsed_before','')::integer else m.clock_elapsed_before end,
    clock_half_started_elapsed = case when p_fields ? 'clock_half_started_elapsed' then nullif(p_fields->>'clock_half_started_elapsed','')::integer else m.clock_half_started_elapsed end,
    half_duration_minutes = case when p_fields ? 'half_duration_minutes' then nullif(p_fields->>'half_duration_minutes','')::integer else m.half_duration_minutes end,
    foul_bonus_threshold = case when p_fields ? 'foul_bonus_threshold' then nullif(p_fields->>'foul_bonus_threshold','')::integer else m.foul_bonus_threshold end,
    fouls_a = case when p_fields ? 'fouls_a' then nullif(p_fields->>'fouls_a','')::integer else m.fouls_a end,
    fouls_b = case when p_fields ? 'fouls_b' then nullif(p_fields->>'fouls_b','')::integer else m.fouls_b end,
    mvp_student_id = case when p_fields ? 'mvp_student_id' then nullif(p_fields->>'mvp_student_id','')::integer else m.mvp_student_id end,
    sets_best_of = case when p_fields ? 'sets_best_of' then nullif(p_fields->>'sets_best_of','')::integer else m.sets_best_of end,
    set_point_target = case when p_fields ? 'set_point_target' then nullif(p_fields->>'set_point_target','')::integer else m.set_point_target end,
    set_win_by = case when p_fields ? 'set_win_by' then nullif(p_fields->>'set_win_by','')::integer else m.set_win_by end,
    sets_history = case when p_fields ? 'sets_history' then p_fields->'sets_history' else m.sets_history end,
    current_set_a = case when p_fields ? 'current_set_a' then nullif(p_fields->>'current_set_a','')::integer else m.current_set_a end,
    current_set_b = case when p_fields ? 'current_set_b' then nullif(p_fields->>'current_set_b','')::integer else m.current_set_b end,
    rounds_best_of = case when p_fields ? 'rounds_best_of' then nullif(p_fields->>'rounds_best_of','')::integer else m.rounds_best_of end,
    rounds_won_a = case when p_fields ? 'rounds_won_a' then nullif(p_fields->>'rounds_won_a','')::integer else m.rounds_won_a end,
    rounds_won_b = case when p_fields ? 'rounds_won_b' then nullif(p_fields->>'rounds_won_b','')::integer else m.rounds_won_b end,
    rounds_draws = case when p_fields ? 'rounds_draws' then nullif(p_fields->>'rounds_draws','')::integer else m.rounds_draws end,
    rounds_log = case when p_fields ? 'rounds_log' then p_fields->'rounds_log' else m.rounds_log end,
    race_target = case when p_fields ? 'race_target' then nullif(p_fields->>'race_target','')::integer else m.race_target end,
    race_score_a = case when p_fields ? 'race_score_a' then nullif(p_fields->>'race_score_a','')::integer else m.race_score_a end,
    race_score_b = case when p_fields ? 'race_score_b' then nullif(p_fields->>'race_score_b','')::integer else m.race_score_b end,
    race_end_history = case when p_fields ? 'race_end_history' then p_fields->'race_end_history' else m.race_end_history end,
    race_games_best_of = case when p_fields ? 'race_games_best_of' then nullif(p_fields->>'race_games_best_of','')::integer else m.race_games_best_of end,
    race_games_won_a = case when p_fields ? 'race_games_won_a' then nullif(p_fields->>'race_games_won_a','')::integer else m.race_games_won_a end,
    race_games_won_b = case when p_fields ? 'race_games_won_b' then nullif(p_fields->>'race_games_won_b','')::integer else m.race_games_won_b end,
    race_games_history = case when p_fields ? 'race_games_history' then p_fields->'race_games_history' else m.race_games_history end,
    updated_at = now()
  where m.id = p_match
  returning m.* into v_row;

  if v_row.id is null then raise exception 'ไม่พบคู่แข่งขัน'; end if;
  return to_jsonb(v_row);
end;
$$;

create or replace function public.can_manage_azizgames()
returns boolean
language sql
stable
security definer
set search_path = public, private, pg_temp
as $$ select private.azizgames_is_admin(); $$;

create or replace function public.register_sports_official(
  p_event_id uuid,
  p_full_name text,
  p_contact text default null,
  p_sport_ids uuid[] default '{}'
)
returns jsonb
language plpgsql
security definer
set search_path = public, private, pg_temp
as $$
declare v_official public.sports_officials;
begin
  if length(trim(coalesce(p_full_name,''))) < 2 then raise exception 'กรุณาระบุชื่อ-นามสกุล'; end if;
  if array_length(p_sport_ids,1) is null then raise exception 'กรุณาเลือกรายการแข่งขันอย่างน้อย 1 รายการ'; end if;
  if exists (select 1 from unnest(p_sport_ids) x where not exists (
    select 1 from public.sports s where s.id=x and s.event_id=p_event_id and s.is_active is true
  )) then raise exception 'พบรายการกีฬาที่ไม่ถูกต้อง'; end if;

  insert into public.sports_officials(event_id,full_name,contact,status)
  values(p_event_id,trim(p_full_name),nullif(trim(coalesce(p_contact,'')),''),'pending')
  returning * into v_official;
  insert into public.sports_official_assignments(official_id,sport_id)
  select v_official.id,x from unnest(p_sport_ids) x;
  return jsonb_build_object('id',v_official.id,'status',v_official.status);
end;
$$;

create or replace function public.approve_sports_official(p_official_id uuid, p_sport_ids uuid[])
returns jsonb
language plpgsql
security definer
set search_path = public, private, extensions, pg_temp
as $$
declare
  v_official public.sports_officials;
  v_username text;
  v_pin text;
  v_bytes bytea;
  v_number bigint;
begin
  if not private.azizgames_is_admin() then raise exception 'ไม่มีสิทธิ์อนุมัติกรรมการ' using errcode='42501'; end if;
  select * into v_official from public.sports_officials where id=p_official_id for update;
  if v_official.id is null then raise exception 'ไม่พบคำขอลงทะเบียน'; end if;
  if array_length(p_sport_ids,1) is null then raise exception 'กรุณาเลือกรายการแข่งขันอย่างน้อย 1 รายการ'; end if;
  if exists (select 1 from unnest(p_sport_ids) x where not exists (
    select 1 from public.sports s where s.id=x and s.event_id=v_official.event_id and s.is_active is true
  )) then raise exception 'พบรายการกีฬาที่ไม่ถูกต้อง'; end if;

  if v_official.username is null then
    loop
      v_username := 'ref' || lpad((1 + floor(random()*9999))::integer::text,4,'0');
      exit when not exists(select 1 from public.sports_officials where username=v_username);
    end loop;
  else v_username := v_official.username;
  end if;
  v_bytes := extensions.gen_random_bytes(4);
  v_number := get_byte(v_bytes,0)::bigint*16777216 + get_byte(v_bytes,1)::bigint*65536 + get_byte(v_bytes,2)::bigint*256 + get_byte(v_bytes,3);
  v_pin := (100000 + (v_number % 900000))::text;

  update public.sports_officials set username=v_username,pin=null,
    pin_hash=extensions.crypt(v_pin,extensions.gen_salt('bf',10)),status='approved',approved_at=now()
  where id=p_official_id;
  delete from public.sports_official_assignments where official_id=p_official_id;
  insert into public.sports_official_assignments(official_id,sport_id)
  select p_official_id,x from unnest(p_sport_ids) x;
  update private.sports_official_sessions set revoked_at=now() where official_id=p_official_id and revoked_at is null;
  return jsonb_build_object('username',v_username,'pin',v_pin);
end;
$$;

create or replace function public.login_sports_official(p_username text, p_pin text)
returns jsonb
language plpgsql
security definer
set search_path = public, private, extensions, pg_temp
as $$
declare
  v_name text := lower(trim(coalesce(p_username,'')));
  v_official public.sports_officials;
  v_credential public.sports_competition_responsible_credentials;
  v_teacher_name text;
  v_token text;
  v_expires timestamptz := now()+interval '12 hours';
  v_sports uuid[];
begin
  delete from private.sports_official_login_attempts where attempted_at < now()-interval '7 days';
  if (select count(*) from private.sports_official_login_attempts where username=v_name and successful=false and attempted_at>now()-interval '15 minutes') >= 8 then
    raise exception 'ลองเข้าสู่ระบบผิดหลายครั้ง กรุณารอ 15 นาที';
  end if;
  -- ผู้รับผิดชอบรายการแข่งขันใช้บัญชีชุดเดียวกับที่ระบบสร้างให้ครู
  -- โดยไม่ต้องสร้างบัญชีกรรมการซ้ำในหน้าผู้ดูแล
  select c.* into v_credential
  from public.sports_competition_responsible_credentials c
  join public.events e on e.id=c.event_id and e.status='active'
  where lower(trim(c.username))=v_name
    and c.provision_status='ready'
  order by c.updated_at desc
  limit 1;

  if v_credential.id is not null then
    if v_credential.password <> coalesce(p_pin,'') then
      insert into private.sports_official_login_attempts(username,successful) values(v_name,false);
      return null;
    end if;

    select t.full_name into v_teacher_name
    from public.teachers t
    where t.profile_id=v_credential.teacher_profile_id;

    -- สร้างตัวแทนภายในสำหรับ session ของระบบเดิมแบบ idempotent
    select * into v_official
    from public.sports_officials
    where event_id=v_credential.event_id and lower(username)=v_name
    order by created_at
    limit 1;

    if v_official.id is null then
      insert into public.sports_officials
        (event_id,full_name,username,pin_hash,status,approved_at)
      values
        (v_credential.event_id,coalesce(v_teacher_name,'ครูผู้รับผิดชอบ'),v_credential.username,
         extensions.crypt(v_credential.password,extensions.gen_salt('bf',10)),'approved',now())
      returning * into v_official;
    else
      update public.sports_officials
      set full_name=coalesce(v_teacher_name,full_name),
          pin_hash=extensions.crypt(v_credential.password,extensions.gen_salt('bf',10)),
          status='approved',approved_at=coalesce(approved_at,now())
      where id=v_official.id
      returning * into v_official;
    end if;

    delete from public.sports_official_assignments where official_id=v_official.id;
    insert into public.sports_official_assignments(official_id,sport_id)
    select v_official.id,s.id
    from public.sports s
    where s.event_id=v_credential.event_id
      and s.responsible_teacher_id=v_credential.teacher_profile_id
      and s.is_active is true;
  else
    select * into v_official from public.sports_officials
    where lower(username)=v_name and status='approved' limit 1;
    if v_official.id is null or v_official.pin_hash is null or extensions.crypt(coalesce(p_pin,''),v_official.pin_hash)<>v_official.pin_hash then
      insert into private.sports_official_login_attempts(username,successful) values(v_name,false);
      return null;
    end if;
  end if;

  if v_official.id is null then
    insert into private.sports_official_login_attempts(username,successful) values(v_name,false);
    return null;
  end if;
  insert into private.sports_official_login_attempts(username,successful) values(v_name,true);
  v_token := encode(extensions.gen_random_bytes(32),'hex');
  insert into private.sports_official_sessions(official_id,token_hash,expires_at)
  values(v_official.id,encode(extensions.digest(v_token,'sha256'),'hex'),v_expires);
  select coalesce(array_agg(a.sport_id),'{}'::uuid[]) into v_sports from public.sports_official_assignments a where a.official_id=v_official.id;
  return jsonb_build_object('id',v_official.id,'username',v_official.username,'displayName',v_official.full_name,
    'role','official','assignedSportIds',to_jsonb(v_sports),'sessionToken',v_token,'sessionExpiresAt',v_expires);
end;
$$;

create or replace function public.validate_sports_official_session(p_session_token text)
returns jsonb
language plpgsql
security definer
set search_path = public, private, pg_temp
as $$
declare v_id uuid; v_o public.sports_officials; v_sports uuid[];
begin
  v_id := private.azizgames_official_for_token(p_session_token);
  if v_id is null then return null; end if;
  select * into v_o from public.sports_officials where id=v_id;
  select coalesce(array_agg(sport_id),'{}'::uuid[]) into v_sports from public.sports_official_assignments where official_id=v_id;
  return jsonb_build_object('id',v_o.id,'username',v_o.username,'displayName',v_o.full_name,'role','official',
    'assignedSportIds',to_jsonb(v_sports),'sessionToken',p_session_token,'sessionExpiresAt',
    (select expires_at from private.sports_official_sessions
      where token_hash=encode(extensions.digest(coalesce(p_session_token,''),'sha256'),'hex')
        and revoked_at is null limit 1));
end;
$$;

create or replace function public.logout_sports_official(p_session_token text)
returns boolean
language plpgsql
security definer
set search_path = private, extensions, pg_temp
as $$
begin
  update private.sports_official_sessions set revoked_at=now()
  where token_hash=encode(extensions.digest(coalesce(p_session_token,''),'sha256'),'hex') and revoked_at is null;
  return found;
end;
$$;

create or replace function public.sports_official_write(p_session_token text, p_action text, p_payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public, private, extensions, pg_temp
as $$
declare
  v_official uuid;
  v_sport uuid;
  v_event uuid;
  v_match public.matches;
  v_row jsonb;
  v_id uuid;
  v_student integer;
  v_team uuid;
  v_round text;
  v_n integer;
  v_gold numeric;
  v_silver numeric;
  v_bronze numeric;
  v_template text;
  v_finished integer;
  v_check_date date;
begin
  v_official := private.azizgames_official_for_token(p_session_token);
  if v_official is null then raise exception 'เซสชันกรรมการหมดอายุ กรุณาเข้าสู่ระบบใหม่' using errcode='42501'; end if;
  update private.sports_official_sessions set last_used_at=now()
  where official_id=v_official and token_hash=encode(extensions.digest(p_session_token,'sha256'),'hex');

  if p_action in ('matchPatch','finalizeMatch') then
    v_id := coalesce(nullif(p_payload->>'id','')::uuid,nullif(p_payload->>'matchId','')::uuid);
    select * into v_match from public.matches where id=v_id;
    v_sport:=v_match.sport_id; v_event:=v_match.event_id;
  elsif p_action in ('insertEvent','checkinUpsert') then
    select * into v_match from public.matches where id=(p_payload->>'match_id')::uuid;
    v_sport:=v_match.sport_id; v_event:=v_match.event_id;
  elsif p_action in ('deleteEvent','togglePenalty') then
    select m.* into v_match from public.match_events e join public.matches m on m.id=e.match_id where e.id=(p_payload->>'id')::uuid;
    v_sport:=v_match.sport_id; v_event:=v_match.event_id;
  elsif p_action='checkinDelete' then
    select m.* into v_match from public.checkins c join public.matches m on m.id=c.match_id where c.id=(p_payload->>'id')::uuid;
    v_sport:=v_match.sport_id; v_event:=v_match.event_id;
  elsif p_action in ('raceResultUpsert','cutRaceQualifiers','finalizeRaceResults','sportTrackFormat') then
    v_sport:=coalesce(nullif(p_payload->>'sport_id','')::uuid,nullif(p_payload->>'sportId','')::uuid);
    select event_id into v_event from public.sports where id=v_sport;
  elsif p_action in ('dailyCheckinUpsert','dailyCheckinDelete') then
    if p_action='dailyCheckinDelete' then
      select event_id,student_id into v_event,v_student from public.daily_checkins where id=(p_payload->>'id')::uuid;
    else
      v_event:=(p_payload->>'event_id')::uuid; v_student:=(p_payload->>'student_id')::integer;
      v_check_date:=(p_payload->>'check_in_date')::date;
    end if;
    if not exists (
      select 1 from public.registrations r join public.sports_official_assignments a on a.sport_id=r.sport_id
      where a.official_id=v_official and r.event_id=v_event and r.student_id=v_student
    ) then raise exception 'ไม่มีสิทธิ์รายงานตัวนักกีฬาคนนี้' using errcode='42501'; end if;
    if p_action='dailyCheckinUpsert' and not exists (
      select 1
      from public.registrations r
      join public.sports_official_assignments a on a.sport_id=r.sport_id and a.official_id=v_official
      join public.matches m on m.event_id=r.event_id and m.sport_id=r.sport_id and m.scheduled_date=v_check_date
      where r.event_id=v_event and r.student_id=v_student
    ) then
      raise exception 'นักกีฬาไม่มีตารางแข่งขันในวันที่เลือก' using errcode='22023';
    end if;
  else raise exception 'ไม่รองรับคำสั่งนี้';
  end if;

  if v_sport is not null and not private.azizgames_official_has_sport(v_official,v_sport) then
    raise exception 'ไม่มีสิทธิ์บันทึกรายการกีฬานี้' using errcode='42501';
  end if;

  if p_action='matchPatch' then
    return private.azizgames_apply_match_fields(v_id,coalesce(p_payload->'fields','{}'::jsonb));
  elsif p_action='insertEvent' then
    v_student:=(p_payload->>'student_id')::integer; v_team:=(p_payload->>'team_color_id')::uuid;
    if v_team is null or (v_team is distinct from v_match.team_a_color_id and v_team is distinct from v_match.team_b_color_id) or not exists(
      select 1 from public.registrations where event_id=v_event and sport_id=v_sport and student_id=v_student and team_color_id=v_team
    ) then raise exception 'นักกีฬาไม่อยู่ในทีมของคู่แข่งขันนี้'; end if;
    insert into public.match_events(match_id,team_color_id,student_id,event_type,minute,is_penalty,points)
    values(v_match.id,v_team,v_student,p_payload->>'event_type',nullif(p_payload->>'minute','')::integer,
      coalesce((p_payload->>'is_penalty')::boolean,false),coalesce(nullif(p_payload->>'points','')::integer,1))
    returning id into v_id;
    select to_jsonb(e) into v_row from public.match_events e where e.id=v_id;
    return v_row;
  elsif p_action='deleteEvent' then
    delete from public.match_events where id=(p_payload->>'id')::uuid; return jsonb_build_object('ok',found);
  elsif p_action='togglePenalty' then
    update public.match_events set is_penalty=coalesce((p_payload->>'is_penalty')::boolean,false) where id=(p_payload->>'id')::uuid;
    return jsonb_build_object('ok',found);
  elsif p_action='checkinUpsert' then
    v_student:=(p_payload->>'student_id')::integer; v_team:=(p_payload->>'team_color_id')::uuid;
    if v_team is null or (v_team is distinct from v_match.team_a_color_id and v_team is distinct from v_match.team_b_color_id) or not exists(
      select 1 from public.registrations where event_id=v_event and sport_id=v_sport and student_id=v_student and team_color_id=v_team
    ) then raise exception 'นักกีฬาไม่อยู่ในทีมของคู่แข่งขันนี้'; end if;
    insert into public.checkins(match_id,student_id,team_color_id,checked_in_by,checked_in_at)
    values(v_match.id,v_student,v_team,(select full_name from public.sports_officials where id=v_official),coalesce(nullif(p_payload->>'checked_in_at','')::timestamptz,now()))
    on conflict(match_id,student_id) do update set team_color_id=excluded.team_color_id,checked_in_by=excluded.checked_in_by,checked_in_at=excluded.checked_in_at
    returning id into v_id;
    select to_jsonb(c) into v_row from public.checkins c where c.id=v_id;
    return v_row;
  elsif p_action='checkinDelete' then
    delete from public.checkins where id=(p_payload->>'id')::uuid; return jsonb_build_object('ok',found);
  elsif p_action='dailyCheckinUpsert' then
    insert into public.daily_checkins(event_id,student_id,check_in_date,checked_in_by,checked_in_at)
    values(v_event,v_student,(p_payload->>'check_in_date')::date,(select full_name from public.sports_officials where id=v_official),coalesce(nullif(p_payload->>'checked_in_at','')::timestamptz,now()))
    on conflict(event_id,student_id,check_in_date) do update set checked_in_by=excluded.checked_in_by,checked_in_at=excluded.checked_in_at
    returning id into v_id;
    select to_jsonb(c) into v_row from public.daily_checkins c where c.id=v_id;
    return v_row;
  elsif p_action='dailyCheckinDelete' then
    delete from public.daily_checkins where id=(p_payload->>'id')::uuid; return jsonb_build_object('ok',found);
  elsif p_action='raceResultUpsert' then
    v_student:=(p_payload->>'student_id')::integer; v_team:=(p_payload->>'team_color_id')::uuid; v_round:=coalesce(p_payload->>'round','final');
    if not exists(select 1 from public.registrations where event_id=v_event and sport_id=v_sport and student_id=v_student and team_color_id=v_team)
      then raise exception 'นักกีฬาไม่ได้ลงทะเบียนรายการนี้'; end if;
    insert into public.race_results(event_id,sport_id,team_color_id,student_id,value,note,recorded_at,created_by,round,heat_number,lane_number)
    values(v_event,v_sport,v_team,v_student,nullif(p_payload->>'value','')::numeric,p_payload->>'note',now(),
      (select full_name from public.sports_officials where id=v_official),v_round,coalesce(nullif(p_payload->>'heat_number','')::integer,1),nullif(p_payload->>'lane_number','')::integer)
    on conflict(sport_id,student_id,round) do update set team_color_id=excluded.team_color_id,value=excluded.value,note=excluded.note,
      recorded_at=excluded.recorded_at,created_by=excluded.created_by,heat_number=excluded.heat_number,lane_number=excluded.lane_number
    returning id into v_id;
    select to_jsonb(r) into v_row from public.race_results r where r.id=v_id;
    return v_row;
  elsif p_action='cutRaceQualifiers' then
    v_n:=greatest(1,least(coalesce((p_payload->>'count')::integer,1),32));
    update public.sports s set qualified_student_ids=(
      select array_agg(x.student_id order by x.rn) from (
        select rr.student_id,row_number() over(order by case when s.sort_direction='desc' then -rr.value else rr.value end) rn
        from public.race_results rr where rr.sport_id=s.id and rr.round='qualify' and rr.value is not null
        order by rn limit v_n
      ) x
    ) where s.id=v_sport returning to_jsonb(s) into v_row;
    return v_row;
  elsif p_action='sportTrackFormat' then
    update public.sports s set track_format=p_payload->>'track_format',lane_count=case when p_payload->>'track_format'='lanes' then (p_payload->>'lane_count')::integer else null end
    where s.id=v_sport returning to_jsonb(s) into v_row; return v_row;
  elsif p_action='finalizeRaceResults' then
    if not exists(select 1 from public.race_results where sport_id=v_sport and round='final' and value is not null) then
      raise exception 'ยังไม่มีผลการแข่งขันให้บันทึก';
    end if;
    select coalesce(s.medal_points_gold,(select (value->>'gold')::numeric from public.settings where key='medal_points_default'),40),
      coalesce(s.medal_points_silver,(select (value->>'silver')::numeric from public.settings where key='medal_points_default'),30),
      coalesce(s.medal_points_bronze,(select (value->>'bronze')::numeric from public.settings where key='medal_points_default'),20)
    into v_gold,v_silver,v_bronze from public.sports s where s.id=v_sport;
    delete from public.medal_awards where sport_id=v_sport;
    insert into public.medal_awards(event_id,sport_id,team_color_id,medal_type,points,awarded_at)
    select v_event,v_sport,r.team_color_id,case r.rn when 1 then 'gold' when 2 then 'silver' else 'bronze' end,
      case r.rn when 1 then v_gold when 2 then v_silver else v_bronze end,now()
    from (select rr.team_color_id,row_number() over(order by case when s.sort_direction='desc' then -rr.value else rr.value end) rn
      from public.race_results rr join public.sports s on s.id=rr.sport_id where rr.sport_id=v_sport and rr.round='final' and rr.value is not null) r
    where r.rn<=3;
    return jsonb_build_object('ok',true);
  elsif p_action='finalizeMatch' then
    if coalesce(p_payload->'fields','{}'::jsonb) ? 'winner_team_color_id'
      and nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid is not null
      and nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid is distinct from v_match.team_a_color_id
      and nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid is distinct from v_match.team_b_color_id then
      raise exception 'ทีมผู้ชนะไม่อยู่ในคู่แข่งขันนี้';
    end if;
    v_row:=private.azizgames_apply_match_fields(v_id,coalesce(p_payload->'fields','{}'::jsonb));
    select * into v_match from public.matches where id=v_id;
    if v_match.status='done' and v_match.winner_team_color_id is not null and v_match.round_name in ('นัดชิงชนะเลิศ','นัดชิงอันดับที่ 3') then
      select coalesce(s.medal_points_gold,(select (value->>'gold')::numeric from public.settings where key='medal_points_default'),40),
        coalesce(s.medal_points_silver,(select (value->>'silver')::numeric from public.settings where key='medal_points_default'),30),
        coalesce(s.medal_points_bronze,(select (value->>'bronze')::numeric from public.settings where key='medal_points_default'),20),s.bracket_template
      into v_gold,v_silver,v_bronze,v_template from public.sports s where s.id=v_sport;
      if v_match.round_name='นัดชิงชนะเลิศ' then
        delete from public.medal_awards where sport_id=v_sport and medal_type in ('gold','silver');
        insert into public.medal_awards(event_id,sport_id,team_color_id,medal_type,points,awarded_at) values
          (v_event,v_sport,v_match.winner_team_color_id,'gold',v_gold,now()),
          (v_event,v_sport,case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end,'silver',v_silver,now());
      else
        delete from public.medal_awards where sport_id=v_sport and medal_type='bronze';
        insert into public.medal_awards(event_id,sport_id,team_color_id,medal_type,points,awarded_at)
        values(v_event,v_sport,v_match.winner_team_color_id,'bronze',v_bronze,now());
      end if;
    end if;
    v_template:=coalesce((select bracket_template from public.sports where id=v_sport),'page_playoff_7');
    v_finished:=v_match.round;
    if v_template='page_playoff_7' then
      if v_finished=1 then update public.matches set team_a_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=3; update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=4;
      elsif v_finished=2 then update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=3; update public.matches set team_b_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=4;
      elsif v_finished=3 then update public.matches set team_a_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=7; update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=5;
      elsif v_finished=4 then update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=5; update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=6;
      elsif v_finished=5 then update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=7; update public.matches set team_b_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=6; end if;
    elsif v_template='single_elim_4' then
      if v_finished=1 then update public.matches set team_a_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=4; update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=3;
      elsif v_finished=2 then update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=4; update public.matches set team_b_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=3; end if;
    end if;
    return v_row;
  end if;
  raise exception 'ไม่รองรับคำสั่งนี้';
end;
$$;

-- Remove browser-bypass policies. Public reads remain; writes require either an
-- authenticated PP5 admin/staff policy or the official session RPC above.
drop policy if exists azizgames_matches_anon_write on public.matches;
drop policy if exists azizgames_match_events_anon_write on public.match_events;
drop policy if exists azizgames_checkins_anon_write on public.checkins;
drop policy if exists azizgames_daily_checkins_anon_write on public.daily_checkins;
drop policy if exists azizgames_race_results_anon_write on public.race_results;
drop policy if exists azizgames_medal_awards_anon_write on public.medal_awards;
drop policy if exists azizgames_sports_anon_write on public.sports;
drop policy if exists azizgames_registrations_anon_write on public.registrations;

drop policy if exists sports_officials_admin_delete on public.sports_officials;
drop policy if exists sports_officials_admin_update on public.sports_officials;
drop policy if exists sports_officials_read on public.sports_officials;
drop policy if exists sports_officials_self_register on public.sports_officials;
drop policy if exists sports_official_assignments_all on public.sports_official_assignments;

create policy sports_officials_admin_select on public.sports_officials for select to authenticated using(private.azizgames_is_admin());
create policy sports_officials_admin_update on public.sports_officials for update to authenticated using(private.azizgames_is_admin()) with check(private.azizgames_is_admin());
create policy sports_officials_admin_delete on public.sports_officials for delete to authenticated using(private.azizgames_is_admin());
create policy sports_official_assignments_admin_all on public.sports_official_assignments for all to authenticated using(private.azizgames_is_admin()) with check(private.azizgames_is_admin());

revoke select,insert,update,delete,truncate on public.sports_officials,public.sports_official_assignments from anon;
revoke insert,update,delete,truncate on public.matches,public.match_events,
  public.checkins,public.daily_checkins,public.race_results,public.medal_awards,public.sports from anon;
revoke update,delete,truncate on public.registrations from anon;

revoke all on function private.azizgames_is_admin() from public;
revoke all on function private.azizgames_official_for_token(text) from public;
revoke all on function private.azizgames_official_has_sport(uuid,uuid) from public;
revoke all on function private.azizgames_apply_match_fields(uuid,jsonb) from public;
grant usage on schema private to authenticated;
grant execute on function private.azizgames_is_admin() to authenticated;

revoke all on function public.register_sports_official(uuid,text,text,uuid[]) from public;
revoke all on function public.can_manage_azizgames() from public;
revoke all on function public.approve_sports_official(uuid,uuid[]) from public;
revoke all on function public.login_sports_official(text,text) from public;
revoke all on function public.validate_sports_official_session(text) from public;
revoke all on function public.logout_sports_official(text) from public;
revoke all on function public.sports_official_write(text,text,jsonb) from public;
grant execute on function public.register_sports_official(uuid,text,text,uuid[]) to anon,authenticated;
grant execute on function public.can_manage_azizgames() to authenticated;
grant execute on function public.login_sports_official(text,text) to anon,authenticated;
grant execute on function public.validate_sports_official_session(text) to anon,authenticated;
grant execute on function public.logout_sports_official(text) to anon,authenticated;
grant execute on function public.sports_official_write(text,text,jsonb) to anon,authenticated;
grant execute on function public.approve_sports_official(uuid,uuid[]) to authenticated;

notify pgrst,'reload schema';
