-- แยกการล้างผลการแข่งขันออกจากโปรแกรม/ผังการประกบคู่
-- ใช้เฉพาะผู้ดูแลระบบ AZIZGAMES ที่ผ่านการตรวจสอบสิทธิ์แล้ว

create or replace function public.azizgames_clear_match_results(p_event_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, private, pg_temp
as $$
declare
  v_match_count integer;
begin
  if not private.azizgames_is_admin() then
    raise exception 'ไม่มีสิทธิ์ล้างผลการแข่งขัน' using errcode = '42501';
  end if;

  delete from public.match_events
  where match_id in (select id from public.matches where event_id = p_event_id);

  delete from public.checkins
  where match_id in (select id from public.matches where event_id = p_event_id);

  delete from public.daily_checkins where event_id = p_event_id;
  delete from public.race_results where event_id = p_event_id;
  delete from public.medal_awards where event_id = p_event_id;

  -- ล้างเฉพาะค่าผล/สถานะสด แต่คงโปรแกรม เวลา สนาม รอบ และคู่แข่งขันไว้
  update public.matches
  set score_a = null,
      score_b = null,
      winner_team_color_id = null,
      status = 'pending',
      recorded_by = null,
      clock_status = 'not_started',
      clock_half = 1,
      clock_started_at = null,
      clock_elapsed_before = 0,
      clock_half_started_elapsed = 0,
      fouls_a = 0,
      fouls_b = 0,
      mvp_student_id = null,
      sets_history = '[]'::jsonb,
      current_set_a = 0,
      current_set_b = 0,
      rounds_won_a = 0,
      rounds_won_b = 0,
      rounds_draws = 0,
      rounds_log = '[]'::jsonb,
      race_score_a = 0,
      race_score_b = 0,
      race_end_history = '[]'::jsonb,
      race_games_won_a = 0,
      race_games_won_b = 0,
      race_games_history = '[]'::jsonb,
      updated_at = now()
  where event_id = p_event_id;

  get diagnostics v_match_count = row_count;

  -- ผู้ผ่านเข้ารอบเป็นข้อมูลที่คำนวณจากผล จึงต้องเริ่มคำนวณใหม่เมื่อเคลียร์ผล
  update public.sports
  set qualified_student_ids = null,
      updated_at = now()
  where event_id = p_event_id;

  return jsonb_build_object('ok', true, 'matches_reset', v_match_count);
end;
$$;

create or replace function public.azizgames_clear_competition_program(p_event_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, private, pg_temp
as $$
declare
  v_match_count integer;
begin
  if not private.azizgames_is_admin() then
    raise exception 'ไม่มีสิทธิ์ล้างโปรแกรมการแข่งขัน' using errcode = '42501';
  end if;

  -- ล้างข้อมูลผลที่อ้างอิงโปรแกรมก่อน แล้วจึงลบโปรแกรม/ผังการแข่งขัน
  delete from public.match_events
  where match_id in (select id from public.matches where event_id = p_event_id);

  delete from public.checkins
  where match_id in (select id from public.matches where event_id = p_event_id);

  delete from public.daily_checkins where event_id = p_event_id;
  delete from public.race_results where event_id = p_event_id;
  delete from public.medal_awards where event_id = p_event_id;
  update public.sports
  set qualified_student_ids = null,
      updated_at = now()
  where event_id = p_event_id;

  delete from public.matches where event_id = p_event_id;
  get diagnostics v_match_count = row_count;

  return jsonb_build_object('ok', true, 'matches_deleted', v_match_count);
end;
$$;

revoke all on function public.azizgames_clear_match_results(uuid) from public;
revoke all on function public.azizgames_clear_competition_program(uuid) from public;
grant execute on function public.azizgames_clear_match_results(uuid) to authenticated;
grant execute on function public.azizgames_clear_competition_program(uuid) to authenticated;

notify pgrst, 'reload schema';
