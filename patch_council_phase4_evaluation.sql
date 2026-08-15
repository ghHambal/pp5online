-- ระบบงานสภานักเรียน Phase 4 — ประเมินผลปฏิบัติหน้าที่ + ออกเกียรติบัตร
-- รวบรัดจากแผนเดิม (council_evaluation_periods/criteria/evaluations/results 4 ตาราง) เหลือ 2
-- ตาราง เพื่อความเรียบง่าย: เกณฑ์+น้ำหนัก (list, แก้ได้จากหน้าประเมินเอง) กับผลประเมิน 1 แถว/
-- สมาชิก/ปีการศึกษา เก็บคะแนนรายเกณฑ์เป็น jsonb แทนแยกตาราง — เพิ่มทีหลังได้ถ้าจำเป็นต้อง
-- มีหลายรอบประเมินต่อปี (ตอนนี้ตัดสินใจ 1 รอบ/ปีการศึกษา/สมาชิก 1 คน)

create table if not exists public.council_evaluation_criteria (
  id bigint generated always as identity primary key,
  name text not null,
  weight numeric not null default 10,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.council_evaluations (
  id bigint generated always as identity primary key,
  member_id bigint not null references public.council_members(id) on delete cascade,
  academic_year integer not null,
  scores jsonb not null default '{}'::jsonb, -- { "<criterion_id>": score }
  total_score numeric,
  max_score numeric,
  decision text check (decision in ('pass','improve','fail')),
  evaluator_teacher_id integer references public.teachers(id) on delete set null,
  comment text,
  evaluated_at timestamptz,
  certificate_no text,
  certificate_issued_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(member_id, academic_year)
);

alter table public.council_evaluation_criteria enable row level security;
alter table public.council_evaluations enable row level security;

create policy council_criteria_public_read on public.council_evaluation_criteria for select using (true);
create policy council_evaluations_public_read on public.council_evaluations for select using (true);
-- อ่านได้ทุกคน (ผลประเมิน/เกียรติบัตรควรเปิดให้เห็นเหมือน roster สาธารณะ) — เขียนได้เฉพาะ
-- แอดมิน/ครู (ครูที่ปรึกษาสภาประเมิน ไม่ใช่ตัวประธานประเมินตัวเอง จึงไม่ให้สิทธิ์ isChair เขียนตารางนี้)

create policy council_criteria_admin_write on public.council_evaluation_criteria for all
  using (get_user_role() in ('admin','teacher'))
  with check (get_user_role() in ('admin','teacher'));

create policy council_evaluations_admin_write on public.council_evaluations for all
  using (get_user_role() in ('admin','teacher'))
  with check (get_user_role() in ('admin','teacher'));

insert into public.council_evaluation_criteria (name, weight, sort_order) values
  ('การเข้าร่วมกิจกรรมของสภา', 20, 1),
  ('ความรับผิดชอบต่อหน้าที่', 20, 2),
  ('การทำงานร่วมกับทีม', 20, 3),
  ('ความคิดริเริ่มสร้างสรรค์', 20, 4),
  ('ระเบียบวินัยและการตรงต่อเวลา', 20, 5)
on conflict do nothing;
