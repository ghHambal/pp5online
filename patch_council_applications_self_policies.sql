-- เสริม RLS ให้นักเรียนสมัคร+ดูใบสมัคร/ผลสัมภาษณ์ของตัวเองได้ตรง (mirror exam_requests_self_* pattern)
-- รันแล้วบน production ผ่าน Supabase MCP (2026-08-14) — ไฟล์นี้เก็บไว้เป็นบันทึกประวัติ ไม่ต้องรันซ้ำ
-- ต่อจาก patch_council_phase1_tables.sql

create policy council_applications_self_insert on public.council_applications for insert
  with check (student_id in (select id from public.students where profile_id = auth.uid()));

create policy council_applications_self_read on public.council_applications for select
  using (student_id in (select id from public.students where profile_id = auth.uid()));

create policy council_applications_self_update on public.council_applications for update
  using (status = 'pending' and student_id in (select id from public.students where profile_id = auth.uid()))
  with check (student_id in (select id from public.students where profile_id = auth.uid()));

create policy council_applications_teacher_admin on public.council_applications for all
  using (get_user_role() in ('admin','teacher'))
  with check (get_user_role() in ('admin','teacher'));

create policy council_interviews_self_read on public.council_interviews for select
  using (application_id in (
    select id from public.council_applications
    where student_id in (select id from public.students where profile_id = auth.uid())
  ));

create policy council_interviews_teacher_admin on public.council_interviews for all
  using (get_user_role() in ('admin','teacher'))
  with check (get_user_role() in ('admin','teacher'));
