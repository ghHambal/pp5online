create table if not exists public.council_election_turnout_signals (
  term_id bigint primary key references public.council_terms(id) on delete cascade,
  updated_at timestamptz not null default now()
);
alter table public.council_election_turnout_signals enable row level security;
revoke all on public.council_election_turnout_signals from public,anon,authenticated;
drop policy if exists council_election_turnout_signals_read on public.council_election_turnout_signals;
create policy council_election_turnout_signals_read on public.council_election_turnout_signals
  for select to anon,authenticated using (true);
grant select on public.council_election_turnout_signals to anon,authenticated;

create or replace function public._touch_council_election_turnout_signal(p_term_id bigint)
returns void language sql security definer set search_path=public
as $$
  insert into public.council_election_turnout_signals(term_id,updated_at)
  values(p_term_id,clock_timestamp())
  on conflict(term_id) do update set updated_at=excluded.updated_at
$$;
revoke all on function public._touch_council_election_turnout_signal(bigint) from public,anon,authenticated;

create or replace function public._council_election_vote_turnout_signal_trigger()
returns trigger language plpgsql security definer set search_path=public
as $$
declare v_term_id bigint;
begin
  select term_id into v_term_id from public.council_election_config where id=new.election_config_id;
  if v_term_id is not null then perform public._touch_council_election_turnout_signal(v_term_id); end if;
  return new;
end;
$$;
revoke all on function public._council_election_vote_turnout_signal_trigger() from public,anon,authenticated;
drop trigger if exists council_votes_turnout_signal on public.council_votes;
create trigger council_votes_turnout_signal after insert on public.council_votes
  for each row execute function public._council_election_vote_turnout_signal_trigger();

do $$ begin
  if exists(select 1 from pg_publication where pubname='supabase_realtime')
     and not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='council_election_turnout_signals') then
    alter publication supabase_realtime add table public.council_election_turnout_signals;
  end if;
end $$;

create or replace function public.reset_current_council_election_votes()
returns jsonb language plpgsql security definer set search_path=public
as $$
declare v_teacher_id integer; v_term_id bigint; v_deleted integer;
begin
  if not public.is_council_election_tester_1087() then
    raise exception 'only authenticated teacher 1087 can reset election votes' using errcode='42501';
  end if;
  select id into v_teacher_id from public.teachers where teacher_code='1087' and profile_id=auth.uid();
  v_term_id := public._council_election_page_term_id();
  if v_term_id is null then raise exception 'no current council election'; end if;
  if exists(select 1 from public.council_election_config e where e.term_id=v_term_id and e.results_published_at is not null) then
    raise exception 'results are already published';
  end if;
  if exists(select 1 from public.council_election_config e where e.term_id=v_term_id and e.opens_at is not null and e.opens_at<=now() and (e.closes_at is null or e.closes_at>now())) then
    raise exception 'cannot reset votes while an election is open';
  end if;
  delete from public.council_votes v using public.council_election_config e
  where v.election_config_id=e.id and e.term_id=v_term_id;
  get diagnostics v_deleted = row_count;
  insert into public.council_election_vote_reset_audit(term_id,reset_by_teacher_id,deleted_vote_count)
  values(v_term_id,v_teacher_id,v_deleted);
  perform public._touch_council_election_turnout_signal(v_term_id);
  return jsonb_build_object('ok',true,'deleted_vote_count',v_deleted,'term_id',v_term_id);
end;
$$;
revoke all on function public.reset_current_council_election_votes() from public,anon;
grant execute on function public.reset_current_council_election_votes() to authenticated;
