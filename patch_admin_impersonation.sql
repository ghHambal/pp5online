-- Full teacher impersonation for PP5 admin.
-- Run in Supabase SQL Editor before using the impersonation button.

create table if not exists public.admin_impersonation_sessions (
  id uuid primary key default gen_random_uuid(),
  actor_profile_id uuid not null references public.profiles(id) on delete restrict,
  target_profile_id uuid not null references public.profiles(id) on delete restrict,
  target_teacher_id integer not null references public.teachers(id) on delete restrict,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  actor_ip inet,
  user_agent text
);

create index if not exists admin_impersonation_sessions_actor_idx
  on public.admin_impersonation_sessions(actor_profile_id, started_at desc);

alter table public.admin_impersonation_sessions enable row level security;

drop policy if exists "admin_impersonation_actor_read" on public.admin_impersonation_sessions;
create policy "admin_impersonation_actor_read"
on public.admin_impersonation_sessions for select to authenticated
using (actor_profile_id = auth.uid());

create or replace function public.start_admin_impersonation(p_target_profile_id uuid)
returns table(session_id uuid, actor_profile_id uuid, target_profile_id uuid, target_teacher_id integer, started_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_actor uuid := auth.uid();
  v_teacher_id integer;
  v_session public.admin_impersonation_sessions;
begin
  if v_actor is null or not exists (
    select 1 from public.profiles p
    where p.id = v_actor and (p.role = 'admin' or p.is_also_admin is true)
  ) then
    raise exception 'admin permission required';
  end if;

  select t.id into v_teacher_id
  from public.teachers t
  where t.profile_id = p_target_profile_id;

  if v_teacher_id is null then
    raise exception 'target teacher account not found';
  end if;

  update public.admin_impersonation_sessions
  set ended_at = now()
  where actor_profile_id = v_actor and ended_at is null;

  insert into public.admin_impersonation_sessions(actor_profile_id, target_profile_id, target_teacher_id)
  values (v_actor, p_target_profile_id, v_teacher_id)
  returning * into v_session;

  return query select v_session.id, v_session.actor_profile_id, v_session.target_profile_id,
    v_session.target_teacher_id, v_session.started_at;
end;
$$;

create or replace function public.end_admin_impersonation(p_session_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.admin_impersonation_sessions
  set ended_at = coalesce(ended_at, now())
  where id = p_session_id and actor_profile_id = auth.uid();
  return found;
end;
$$;

create or replace function public.validate_admin_impersonation(p_session_id uuid)
returns table(is_valid boolean, actor_profile_id uuid, target_profile_id uuid, target_teacher_id integer)
language sql
stable
security definer
set search_path = public
as $$
  select true, s.actor_profile_id, s.target_profile_id, s.target_teacher_id
  from public.admin_impersonation_sessions s
  where s.id = p_session_id
    and (s.actor_profile_id = auth.uid() or s.target_profile_id = auth.uid())
    and s.ended_at is null;
$$;

revoke all on function public.start_admin_impersonation(uuid) from public;
revoke all on function public.validate_admin_impersonation(uuid) from public;
revoke all on function public.end_admin_impersonation(uuid) from public;
grant execute on function public.start_admin_impersonation(uuid) to authenticated;
grant execute on function public.validate_admin_impersonation(uuid) to authenticated;
grant execute on function public.end_admin_impersonation(uuid) to authenticated;
