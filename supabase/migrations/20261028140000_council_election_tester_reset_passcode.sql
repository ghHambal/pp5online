-- Allow the 1087 tester code to identify its special ballot in kiosk mode.
-- The destructive reset action is separately guarded by the private admin code
-- and is callable only through the service-role Edge Function.
do $$
declare
  v_definition text;
begin
  v_definition := pg_get_functiondef('public.get_public_council_election_bundle_v2(text)'::regprocedure);
  if position('trim(p_code)=''1087'' and public.is_council_election_tester_1087()' in v_definition)=0 then
    raise exception 'Unexpected council election bundle definition; refusing to alter tester gate';
  end if;
  v_definition := replace(v_definition,
    'trim(p_code)=''1087'' and public.is_council_election_tester_1087()',
    'trim(p_code)=''1087''');
  execute v_definition;

  v_definition := pg_get_functiondef('public.cast_public_council_vote(text,bigint,bigint)'::regprocedure);
  if position('v_is_1087 := trim(p_code)=''1087'' and public.is_council_election_tester_1087()' in v_definition)=0 then
    raise exception 'Unexpected council election vote definition; refusing to alter tester window gate';
  end if;
  v_definition := replace(v_definition,
    'v_is_1087 := trim(p_code)=''1087'' and public.is_council_election_tester_1087()',
    'v_is_1087 := trim(p_code)=''1087''');
  execute v_definition;
end;
$$;

create or replace function public.reset_current_council_election_votes_with_passcode(p_admin_code text)
returns jsonb language plpgsql security definer set search_path=public,private,extensions
as $$
declare
  v_teacher_id integer;
  v_term_id bigint;
  v_deleted integer;
begin
  if not private._council_election_settings_code_matches(p_admin_code) then
    raise exception 'รหัสผู้ดูแลไม่ถูกต้อง' using errcode='42501';
  end if;
  select id into v_teacher_id from public.teachers where teacher_code='1087' limit 1;
  if v_teacher_id is null then raise exception 'ไม่พบผู้ดูแลรหัส 1087'; end if;
  v_term_id := public._council_election_page_term_id();
  if v_term_id is null then raise exception 'no current council election'; end if;
  if exists (
    select 1 from public.council_election_config e where e.term_id=v_term_id
      and e.results_published_at is not null
  ) then raise exception 'results are already published'; end if;
  if exists (
    select 1 from public.council_election_config e where e.term_id=v_term_id
      and e.opens_at is not null and e.opens_at<=now() and (e.closes_at is null or e.closes_at>now())
  ) then raise exception 'cannot reset votes while an election is open'; end if;

  delete from public.council_votes v using public.council_election_config e
  where v.election_config_id=e.id and e.term_id=v_term_id;
  get diagnostics v_deleted = row_count;
  insert into public.council_election_vote_reset_audit(term_id,reset_by_teacher_id,deleted_vote_count)
  values(v_term_id,v_teacher_id,v_deleted);
  return jsonb_build_object('ok',true,'deleted_vote_count',v_deleted,'term_id',v_term_id);
end;
$$;
revoke all on function public.reset_current_council_election_votes_with_passcode(text) from public,anon,authenticated;
grant execute on function public.reset_current_council_election_votes_with_passcode(text) to service_role;
revoke all on function public.reset_current_council_election_votes() from public,anon,authenticated,service_role;
