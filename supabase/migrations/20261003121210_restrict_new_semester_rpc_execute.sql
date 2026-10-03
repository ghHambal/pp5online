-- The legacy RPC migration granted EXECUTE to anon.
-- This function changes school-wide semester state and must not be callable by anon.

revoke execute on function public.admin_start_new_semester(integer, integer) from anon;
grant execute on function public.admin_start_new_semester(integer, integer) to authenticated;
grant execute on function public.admin_start_new_semester(integer, integer) to service_role;
