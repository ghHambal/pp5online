-- ระบบอนุมัติใบโครงการ 3 ระดับ + ลายเซ็นครู + ผูกครูที่ปรึกษากับฝ่าย (2026-08-16)
-- ผู้ใช้ปรึกษาแล้วให้แบบฟอร์มจริงของโรงเรียน (แบบเสนอโครงการ YLA) มาปรับ schema ให้ตรง
-- รันแล้วผ่าน Supabase MCP เก็บไว้เป็นบันทึกถาวร ไม่ต้องรันซ้ำ
--
-- Flow ที่ตกลงกัน:
--   origin='teacher' (ครูที่ปรึกษาริเริ่มเอง): draft → pending_dept_head → pending_director → approved
--   origin='council'  (สภานักเรียนริเริ่มเอง, ประธานร่างเท่านั้น เหมือนเดิม):
--     draft → pending_advisor (ครูที่ปรึกษาประจำฝ่ายที่เลือกตอนร่าง) → pending_dept_head → pending_director → approved
--   ตีกลับขั้นไหนก็ได้ → กลับเป็น draft พร้อมบันทึกเหตุผล (last_rejected_*) แก้ไขแล้วส่งใหม่ได้
--   ไม่มีสถานะ 'rejected' ถาวร — ตีกลับ = กลับไปแก้ไขเสมอ ไม่ใช่จบกระบวนการ
--
-- RLS: ไม่ต้องเพิ่ม policy ใหม่ให้ council_documents เลย — policy เดิม
-- (council_documents_admin_chair_write) เปิดกว้างให้ role='teacher' ทุกคน + admin + is_also_admin
-- + ประธานสภา (isChair) เขียนได้อยู่แล้ว ครอบคลุมทั้ง 3 บทบาทใหม่ (ครูที่ปรึกษาฝ่าย/หัวหน้าฝ่าย
-- กิจการนักเรียน/ผู้อำนวยการ ล้วนเป็น role='teacher') — ฝั่ง UI เท่านั้นที่จำกัดว่าใครเห็นปุ่มไหน
-- ตาม convention เดียวกับที่ตัดสินใจไว้แล้วหลายจุดในโปรเจกต์นี้ (เช่น council_positions_admin_write)

alter table teachers add column if not exists signature_url text;

create table if not exists council_advisor_positions (
  teacher_id integer references teachers(id) on delete cascade,
  position_id bigint references council_positions(id) on delete cascade,
  primary key (teacher_id, position_id)
);
alter table council_advisor_positions enable row level security;
create policy council_advisor_positions_read on council_advisor_positions for select using (true);
create policy council_advisor_positions_admin_write on council_advisor_positions for all
  using (get_user_role() = 'admin')
  with check (get_user_role() = 'admin');

alter table council_documents
  add column if not exists origin text not null default 'council',
  add column if not exists created_by_teacher_id integer references teachers(id),
  add column if not exists position_id bigint references council_positions(id),
  add column if not exists plan_area text,
  add column if not exists project_type text,
  add column if not exists school_strategy text,
  add column if not exists education_standard text,
  add column if not exists responsible_persons jsonb default '[]'::jsonb,
  add column if not exists objectives jsonb default '[]'::jsonb,
  add column if not exists goals_quantitative jsonb default '[]'::jsonb,
  add column if not exists goals_qualitative jsonb default '[]'::jsonb,
  add column if not exists work_steps jsonb default '[]'::jsonb,
  add column if not exists duration_text text,
  add column if not exists location_text text,
  add column if not exists budget_items jsonb default '[]'::jsonb,
  add column if not exists stakeholders jsonb default '[]'::jsonb,
  add column if not exists evaluation_items jsonb default '[]'::jsonb,
  add column if not exists expected_results jsonb default '[]'::jsonb,
  add column if not exists advisor_decided_by_teacher_id integer references teachers(id),
  add column if not exists advisor_decided_at timestamptz,
  add column if not exists advisor_comment text,
  add column if not exists dept_head_decided_by_teacher_id integer references teachers(id),
  add column if not exists dept_head_decided_at timestamptz,
  add column if not exists dept_head_comment text,
  add column if not exists dept_head_signature_url text,
  add column if not exists director_decided_by_teacher_id integer references teachers(id),
  add column if not exists director_decided_at timestamptz,
  add column if not exists director_comment text,
  add column if not exists director_signature_url text,
  add column if not exists last_rejected_stage text,
  add column if not exists last_rejected_by_teacher_id integer references teachers(id),
  add column if not exists last_rejected_at timestamptz,
  add column if not exists last_rejection_comment text;

alter table council_documents drop constraint if exists council_documents_status_check;
alter table council_documents add constraint council_documents_status_check
  check (status = any (array['draft','pending_advisor','pending_dept_head','pending_director','approved']));

alter table council_documents drop constraint if exists council_documents_origin_check;
alter table council_documents add constraint council_documents_origin_check
  check (origin = any (array['teacher','council']));

-- คอลัมน์เก่า (objective ข้อความเดี่ยว, owner_text, approved_by_teacher_id, approval_comment)
-- ยังอยู่ครบ ไม่ได้ลบ — โค้ดฝั่งแอปเลิกใช้แล้วแทนที่ด้วยฟิลด์ใหม่ข้างบนทั้งหมด (ตั้งใจไม่ DROP
-- เผื่อมีการอ้างอิงอื่นที่ไม่รู้ตัว ความเสี่ยงต่ำที่จะเก็บคอลัมน์ที่ไม่ใช้ไว้เฉยๆ)
