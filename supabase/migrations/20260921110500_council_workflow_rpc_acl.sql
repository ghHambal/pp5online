-- The project grants EXECUTE to anon through role defaults; revoke it explicitly.
revoke execute on function public.appoint_council_member_atomic(bigint, bigint, integer, integer, integer) from anon;
grant execute on function public.appoint_council_member_atomic(bigint, bigint, integer, integer, integer) to authenticated;
