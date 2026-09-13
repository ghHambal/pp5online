-- Apply before deploying autoscale-tick. Never resets existing schedule/state.
begin;

create or replace function public.autoscale_config_admin()
returns boolean language sql stable security definer set search_path = public
as $$
  select exists (select 1 from public.profiles where id = auth.uid()
    and (role = 'admin' or is_also_admin is true));
$$;
revoke all on function public.autoscale_config_admin() from public;
grant execute on function public.autoscale_config_admin() to anon, authenticated;

alter table public.system_config enable row level security;
-- Restrictive policies protect these keys even when an older permissive policy
-- permits broad config writes. service_role bypasses RLS for state/lease writes.
drop policy if exists autoscale_write_guard on public.system_config;
create policy autoscale_write_guard on public.system_config as restrictive
for all to anon, authenticated
using (
  key not in ('autoscaleSchedule', 'autoscaleState', 'autoscaleLock')
  or key = 'autoscaleSchedule' and public.autoscale_config_admin()
  or key in ('autoscaleState', 'autoscaleLock') and public.autoscale_config_admin()
)
with check (
  key not in ('autoscaleSchedule', 'autoscaleState', 'autoscaleLock')
  or key = 'autoscaleSchedule' and public.autoscale_config_admin()
);
drop policy if exists autoscale_admin_read on public.system_config;
create policy autoscale_admin_read on public.system_config for select to authenticated
using (key in ('autoscaleSchedule', 'autoscaleState', 'autoscaleLock') and public.autoscale_config_admin());
drop policy if exists autoscale_admin_schedule on public.system_config;
create policy autoscale_admin_schedule on public.system_config for all to authenticated
using (key = 'autoscaleSchedule' and public.autoscale_config_admin())
with check (key = 'autoscaleSchedule' and public.autoscale_config_admin());

-- State/lock are service-managed; authenticated admin cannot delete/update them.
drop policy if exists autoscale_no_state_update on public.system_config;
create policy autoscale_no_state_update on public.system_config as restrictive
for update to anon, authenticated using (key not in ('autoscaleState', 'autoscaleLock'));
drop policy if exists autoscale_no_state_delete on public.system_config;
create policy autoscale_no_state_delete on public.system_config as restrictive
for delete to anon, authenticated using (key not in ('autoscaleState', 'autoscaleLock'));

insert into public.system_config (key, value, updated_at)
values ('autoscaleSchedule', '{"schemaVersion":1,"enabled":false,"periods":[]}', now()),
       ('autoscaleLock', '1970-01-01T00:00:00.000Z', now())
on conflict (key) do nothing;
commit;
