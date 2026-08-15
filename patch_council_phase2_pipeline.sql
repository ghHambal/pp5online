-- ระบบงานสภานักเรียน Phase 2 — เปิดใช้ pipeline ที่มีตารางอยู่แล้วแต่ยังไม่มี RLS ครบ:
-- นัดสัมภาษณ์/ให้คะแนน (council_interviews) → ตั้งเป็นผู้สมัครเลือกตั้ง (council_candidates)
-- → โหวต (council_votes) → ประกาศผล/แต่งตั้ง (council_members)
-- รันผ่าน Supabase MCP แล้ว (ดูวันที่ commit) — ไฟล์นี้เก็บไว้เป็นบันทึกประวัติ ไม่ต้องรันซ้ำ
--
-- council_applications + council_interviews มี self/teacher/admin policies ครบแล้วจาก
-- patch_council_applications_self_policies.sql — ที่ยังขาดคือ council_candidates (เขียนได้
-- เฉพาะ public read) และ council_votes (เปิด RLS ไว้เฉยๆ ไม่มี policy เลยสักตัว)

create policy council_candidates_admin_write on public.council_candidates for all
  using (get_user_role() in ('admin','teacher'))
  with check (get_user_role() in ('admin','teacher'));

create policy council_votes_self_insert on public.council_votes for insert
  with check (voter_student_id in (select id from public.students where profile_id = auth.uid()));

create policy council_votes_self_read on public.council_votes for select
  using (voter_student_id in (select id from public.students where profile_id = auth.uid()));

create policy council_votes_admin_read on public.council_votes for select
  using (get_user_role() in ('admin','teacher'));
