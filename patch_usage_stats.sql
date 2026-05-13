-- เพิ่มคอลัมน์ last_seen_at สำหรับติดตามการเข้าใช้งาน
alter table teachers add column if not exists last_seen_at timestamptz;
alter table students  add column if not exists last_seen_at timestamptz;

-- ครูอัปเดต last_seen_at ของตัวเองได้
create policy if not exists "teacher_update_last_seen"
  on teachers for update
  using (profile_id = auth.uid())
  with check (profile_id = auth.uid());

-- นักเรียนอัปเดต last_seen_at ของตัวเองได้
create policy if not exists "student_update_last_seen"
  on students for update
  using (profile_id = auth.uid())
  with check (profile_id = auth.uid());
