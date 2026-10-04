-- Allow the admin-only full backup workflow to read and restore every
-- application Storage object, including objects normally restricted to their
-- original owner. No anonymous or teacher access is added.

drop policy if exists pp5_full_backup_admin_read on storage.objects;
create policy pp5_full_backup_admin_read
  on storage.objects for select to authenticated
  using (get_user_role() = 'admin');

drop policy if exists pp5_full_backup_admin_insert on storage.objects;
create policy pp5_full_backup_admin_insert
  on storage.objects for insert to authenticated
  with check (get_user_role() = 'admin');

drop policy if exists pp5_full_backup_admin_update on storage.objects;
create policy pp5_full_backup_admin_update
  on storage.objects for update to authenticated
  using (get_user_role() = 'admin')
  with check (get_user_role() = 'admin');
