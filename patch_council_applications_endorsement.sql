-- ครูที่ปรึกษาสามัญต้องยืนยัน (รับรอง/ไม่รับรอง) ใบสมัครสภานักเรียนของนักเรียนในห้องตัวเอง
-- พร้อมคอมเมนต์ (เลือกจากประโยคสำเร็จรูปได้ แต่แก้ไขเพิ่มเติมได้เสมอ — mirror pattern
-- ของ supervisor_comment_phrases เดิม) รันแล้วบน production ผ่าน Supabase MCP (2026-08-14)
-- ไม่ต้องรันซ้ำ

alter table public.council_applications
  add column if not exists endorsement_comment text,
  add column if not exists endorsed_at timestamptz;

comment on column public.council_applications.endorsing_teacher_id is 'ครูที่ปรึกษาสามัญที่ยืนยัน (รับรอง/ไม่รับรอง) ใบสมัครนี้';
comment on column public.council_applications.endorsement_comment is 'คอมเมนต์จากครูที่ปรึกษาสามัญตอนยืนยัน — เลือกจากประโยคสำเร็จรูปได้แล้วแก้ไขเพิ่มได้';
comment on column public.council_applications.endorsed_at is 'เวลาที่ครูที่ปรึกษายืนยัน (รับรองหรือไม่รับรองก็ได้) — null = ยังไม่ยืนยัน';

create table if not exists public.council_endorsement_phrases (
  id bigint generated always as identity primary key,
  phrase text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);
alter table public.council_endorsement_phrases enable row level security;
create policy council_endorsement_phrases_read on public.council_endorsement_phrases for select using (true);
create policy council_endorsement_phrases_admin_write on public.council_endorsement_phrases for all
  using (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true))
  with check (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true));

insert into public.council_endorsement_phrases (phrase, sort_order) values
  ('นักเรียนมีความรับผิดชอบดี ตรงต่อเวลา เหมาะสมกับตำแหน่งนี้', 1),
  ('มีภาวะผู้นำ กล้าแสดงออก ทำงานร่วมกับผู้อื่นได้ดี', 2),
  ('ขยัน ตั้งใจเรียน ผลการเรียนอยู่ในเกณฑ์ดี', 3),
  ('เคยมีประสบการณ์ทำกิจกรรม/งานจิตอาสามาก่อน', 4),
  ('ยังไม่เคยแสดงความรับผิดชอบในกิจกรรมที่ผ่านมา ควรพิจารณาเพิ่มเติม', 5);

create policy council_applications_homeroom_advisor_read on public.council_applications for select
  using (
    exists (
      select 1 from public.students s
      join public.homeroom_teachers ht on ht.main_room = s.main_room and ht.category = 'สามัญ'
      join public.teachers t on t.id = ht.teacher_id
      where s.id = council_applications.student_id and t.profile_id = auth.uid()
    )
  );

create policy council_applications_homeroom_advisor_update on public.council_applications for update
  using (
    exists (
      select 1 from public.students s
      join public.homeroom_teachers ht on ht.main_room = s.main_room and ht.category = 'สามัญ'
      join public.teachers t on t.id = ht.teacher_id
      where s.id = council_applications.student_id and t.profile_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.students s
      join public.homeroom_teachers ht on ht.main_room = s.main_room and ht.category = 'สามัญ'
      join public.teachers t on t.id = ht.teacher_id
      where s.id = council_applications.student_id and t.profile_id = auth.uid()
    )
  );
