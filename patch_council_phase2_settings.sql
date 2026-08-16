-- Phase 2: หน้าตั้งค่า 4 แท็บ + CRUD council_positions + council_interview_criteria
-- ตามสเปคส่งมอบ หัวข้อ 6.3/6.4/7/8.18 (2026-08-16)

-- ─── ตำแหน่งในสภา — เปิดให้ครูเขียนได้ด้วย (เดิม admin/is_also_admin เท่านั้น) ─────────────
-- ตาม role table หัวข้อ 4: ครูที่ปรึกษาสภาเห็น "เกือบทุกหน้าเหมือนแอดมิน (ยกเว้นมอบสิทธิ์)"
-- ใช้ role='teacher' แบบกว้าง (client-side ค่อยจำกัดเมนูตั้งค่าให้เห็นเฉพาะ isAdmin/isCouncilAdvisor)
-- มิเช่นนั้นต้องเขียน RLS join teachers.position ซึ่งซับซ้อนเกินจำเป็น — ตรงกับ convention เดิม
-- ที่ใช้กับ council_evaluation_criteria (council_criteria_admin_write) อยู่แล้ว
drop policy if exists council_positions_admin_write on council_positions;
create policy council_positions_admin_write on council_positions for all using (
  get_user_role() = any (array['admin','teacher']) or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
) with check (
  get_user_role() = any (array['admin','teacher']) or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
);

-- ─── หัวข้อสัมภาษณ์ (ให้คะแนนรายหัวข้อ) — ตารางใหม่ตามสเปคข้อ 6.3 ──────────────────────────
create table if not exists council_interview_criteria (
  id bigint generated always as identity primary key,
  name text not null,
  weight int not null default 10,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table council_interview_criteria enable row level security;

drop policy if exists council_interview_criteria_public_read on council_interview_criteria;
create policy council_interview_criteria_public_read on council_interview_criteria for select using (true);

drop policy if exists council_interview_criteria_admin_write on council_interview_criteria;
create policy council_interview_criteria_admin_write on council_interview_criteria for all using (
  get_user_role() = any (array['admin','teacher']) or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
) with check (
  get_user_role() = any (array['admin','teacher']) or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
);

-- seed เริ่มต้น 5 หัวข้อๆ ละ 10 คะแนน (ตามสเปคข้อ 8.5 "5 หัวข้อ ๆ ละ 10") — seed ครั้งเดียว
insert into council_interview_criteria (name, weight, sort_order)
select v.name, v.weight, v.sort_order
from (values
  ('บุคลิกภาพและการสื่อสาร', 10, 1),
  ('ความรู้ความเข้าใจบทบาทสภานักเรียน', 10, 2),
  ('วิสัยทัศน์และแนวคิดการทำงาน', 10, 3),
  ('ทัศนคติและความพร้อมในการทำงาน', 10, 4),
  ('ไหวพริบและการแก้ปัญหาเฉพาะหน้า', 10, 5)
) as v(name, weight, sort_order)
where not exists (select 1 from council_interview_criteria);

-- ─── เพิ่ม system_config keys ที่ยังไม่มี (ไม่ทับค่าที่แอดมินตั้งไว้แล้ว) ──────────────────────
insert into system_config (key, value) values
  ('council_min_gpa_religious', '2.50'),
  ('council_apply_opens_at', ''),
  ('council_apply_closes_at', ''),
  ('council_video_max_minutes', '3'),
  ('council_video_brief', '["แนะนำตัวเองสั้นๆ","เหตุผลที่อยากสมัครตำแหน่งนี้","แนวคิด/นโยบายที่อยากทำถ้าได้รับเลือก","ประสบการณ์ที่เกี่ยวข้อง","คำขอบคุณ/ปิดท้าย"]'),
  ('council_theme_side_m', '#14563b'),
  ('council_theme_side_w', '#a3134f'),
  ('council_signer_advisor_name', 'ครูที่ปรึกษาสภานักเรียน'),
  ('council_signer_director_name', 'ผู้อำนวยการโรงเรียน'),
  ('council_modules', '{"candidates":true,"news":true,"interview":true,"appoint":true,"evaluate":true,"certissue":true,"docs":true,"perms":true,"chairteam":true,"chairtasks":true}')
on conflict (key) do nothing;
