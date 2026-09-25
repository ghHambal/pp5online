-- Keep roster RPC callable only by signed-in users. Revoke anon explicitly
-- because Supabase projects can retain a direct anon ACL on existing functions.
REVOKE ALL ON FUNCTION public.get_sports_competition_manager_roster(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_manager_roster(UUID) TO authenticated;
