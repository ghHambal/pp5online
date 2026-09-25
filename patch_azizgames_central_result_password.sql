-- โหมดกองกลาง: บันทึกสกอร์สรุปจากใบบันทึกผลโดยไม่ต้องระบุผู้ทำประตู/ผู้ทำคะแนน
-- ใช้รหัสผ่านตรวจที่ฐานข้อมูล ไม่พึ่งการตรวจเฉพาะฝั่งหน้าเว็บ

create table if not exists private.azizgames_result_override_config (
  singleton boolean primary key default true check (singleton is true),
  password_hash text not null,
  updated_at timestamptz not null default now()
);

insert into private.azizgames_result_override_config(singleton, password_hash)
values (true, extensions.crypt('azgame26', extensions.gen_salt('bf')))
on conflict (singleton) do nothing;

revoke all on private.azizgames_result_override_config from public, anon, authenticated;

create or replace function public.sports_central_write(
  p_gate_password text,
  p_action text,
  p_payload jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public, private, extensions, pg_temp
as $$
declare
  v_match public.matches;
  v_row jsonb;
  v_id uuid;
  v_event uuid;
  v_sport uuid;
  v_gold numeric;
  v_silver numeric;
  v_bronze numeric;
  v_template text;
  v_finished integer;
begin
  if not exists (
    select 1
    from private.azizgames_result_override_config c
    where extensions.crypt(coalesce(p_gate_password, ''), c.password_hash) = c.password_hash
  ) then
    raise exception 'รหัสผ่านโหมดกองกลางไม่ถูกต้อง' using errcode='42501';
  end if;

  if p_action = 'verify' then
    return jsonb_build_object('ok', true);
  end if;
  if p_action <> 'finalizeMatch' then
    raise exception 'ไม่รองรับคำสั่งโหมดกองกลางนี้';
  end if;

  v_id := coalesce(nullif(p_payload->>'id','')::uuid, nullif(p_payload->>'matchId','')::uuid);
  select * into v_match from public.matches where id = v_id;
  if not found then raise exception 'ไม่พบคู่แข่งขัน'; end if;
  v_event := v_match.event_id;
  v_sport := v_match.sport_id;

  if coalesce(p_payload->'fields','{}'::jsonb) ? 'winner_team_color_id'
    and nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid is not null
    and nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid is distinct from v_match.team_a_color_id
    and nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid is distinct from v_match.team_b_color_id then
    raise exception 'ทีมผู้ชนะไม่อยู่ในคู่แข่งขันนี้';
  end if;

  v_row := private.azizgames_apply_match_fields(v_id, coalesce(p_payload->'fields','{}'::jsonb));
  select * into v_match from public.matches where id = v_id;

  if v_match.status = 'done' and v_match.winner_team_color_id is not null
    and v_match.round_name in ('นัดชิงชนะเลิศ','นัดชิงอันดับที่ 3') then
    select coalesce(s.medal_points_gold,(select (value->>'gold')::numeric from public.settings where key='medal_points_default'),40),
      coalesce(s.medal_points_silver,(select (value->>'silver')::numeric from public.settings where key='medal_points_default'),30),
      coalesce(s.medal_points_bronze,(select (value->>'bronze')::numeric from public.settings where key='medal_points_default'),20),
      s.bracket_template
    into v_gold,v_silver,v_bronze,v_template
    from public.sports s where s.id = v_sport;

    if v_match.round_name = 'นัดชิงชนะเลิศ' then
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

  v_template := coalesce((select bracket_template from public.sports where id=v_sport),'page_playoff_7');
  v_finished := v_match.round;
  if v_template='page_playoff_7' then
    if v_finished=1 then
      update public.matches set team_a_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=3;
      update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=4;
    elsif v_finished=2 then
      update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=3;
      update public.matches set team_b_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=4;
    elsif v_finished=3 then
      update public.matches set team_a_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=7;
      update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=5;
    elsif v_finished=4 then
      update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=5;
      update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=6;
    elsif v_finished=5 then
      update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=7;
      update public.matches set team_b_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=6;
    end if;
  elsif v_template='single_elim_4' then
    if v_finished=1 then
      update public.matches set team_a_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=4;
      update public.matches set team_a_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=3;
    elsif v_finished=2 then
      update public.matches set team_b_color_id=v_match.winner_team_color_id where sport_id=v_sport and round=4;
      update public.matches set team_b_color_id=case when v_match.winner_team_color_id=v_match.team_a_color_id then v_match.team_b_color_id else v_match.team_a_color_id end where sport_id=v_sport and round=3;
    end if;
  end if;

  return v_row;
end;
$$;

revoke all on function public.sports_central_write(text,text,jsonb) from public;
grant execute on function public.sports_central_write(text,text,jsonb) to anon, authenticated;
