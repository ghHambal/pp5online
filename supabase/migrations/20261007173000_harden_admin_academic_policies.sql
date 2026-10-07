-- Keep dashboard admins and is_also_admin users consistent across academic tools.

drop policy if exists teacher_schedules_admin_all on public.teacher_schedules;
create policy teacher_schedules_admin_all
  on public.teacher_schedules
  for all to authenticated
  using (
    public.get_user_role() = 'admin'
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.is_also_admin is true
    )
  )
  with check (
    public.get_user_role() = 'admin'
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.is_also_admin is true
    )
  );

drop policy if exists subjects_admin on public.master_subjects;
create policy subjects_admin
  on public.master_subjects
  for all to authenticated
  using (
    public.get_user_role() = 'admin'
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.is_also_admin is true
    )
  )
  with check (
    public.get_user_role() = 'admin'
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.is_also_admin is true
    )
  );
