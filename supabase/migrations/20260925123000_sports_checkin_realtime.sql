-- ให้หน้ารับรายงานตัวและจอใหญ่ติดตามสถานะเดียวกันแบบ Realtime
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'daily_checkins'
  ) then
    alter publication supabase_realtime add table public.daily_checkins;
  end if;
end
$$;
