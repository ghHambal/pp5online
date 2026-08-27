-- patch_certificates_central_system.sql
-- ระบบเกียรติบัตรกลาง (Central Certificate System) — ใช้ร่วมกันได้ทุกระบบ (ครูทุกคนสร้างเทมเพลต/
-- ออกเกียรติบัตรได้เอง, นักเรียนดูรวมที่หน้า "บัตรของฉัน") ย้ายระบบเกียรติบัตรกิจกรรมสภานักเรียนเข้ามา
-- เป็นระบบแรกที่ใช้เอนจินนี้
--
-- หมายเหตุ: migration นี้ถูก apply เข้า production ผ่าน Supabase MCP ไปแล้ว (2026-08-27) ไฟล์นี้เป็น
-- historical record ตามธรรมเนียมของโปรเจกต์เท่านั้น รันซ้ำได้อย่างปลอดภัย (create table/policy มี
-- if not exists / ลำดับตรงกับที่ apply จริง) แต่ data-migration ส่วนท้ายรันซ้ำไม่ได้ (จะ insert ซ้ำ)
-- เพราะตอน apply จริงพบว่า council_certificate_templates/council_activity_certificates ยังว่างอยู่ (0 แถว)
-- จึงยืนยันได้ว่า migration สะอาด ไม่มีข้อมูลสูญหาย

-- ═══ Schema ═══
create table if not exists public.certificate_templates (
  id bigint generated always as identity primary key,
  name text not null,
  type text not null check (type in ('preset','custom')),
  preset_key text,
  background_image_url text,
  layout jsonb,
  created_by_teacher_id integer references teachers(id) on delete set null,
  legacy_council_template_id bigint unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
comment on table public.certificate_templates is 'เทมเพลตเกียรติบัตรกลาง — pool ที่ครูทุกคนสร้าง/ใช้ร่วมกันได้ (อ่านได้ทุกคน แก้ได้เฉพาะเจ้าของ/แอดมิน)';

alter table certificate_templates enable row level security;
create policy certificate_templates_read on certificate_templates for select using (true);
create policy certificate_templates_admin_all on certificate_templates for all
  using (get_user_role() = 'admin' or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true))
  with check (get_user_role() = 'admin' or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true));
create policy certificate_templates_owner_all on certificate_templates for all
  using (created_by_teacher_id in (select id from teachers where profile_id = auth.uid()))
  with check (created_by_teacher_id in (select id from teachers where profile_id = auth.uid()));

create sequence if not exists public.certificate_no_seq;

create table if not exists public.certificates (
  id bigint generated always as identity primary key,
  certificate_no text not null unique default (
    'CERT-' || (extract(year from now())::int + 543) || '-' || lpad(nextval('certificate_no_seq')::text, 6, '0')
  ),
  template_id bigint references certificate_templates(id) on delete set null,
  layout_snapshot jsonb,
  variables jsonb not null default '{}'::jsonb,
  student_id integer not null references students(id) on delete cascade,
  student_name text not null,
  title text,
  issued_by_teacher_id integer references teachers(id) on delete set null,
  source_system text,
  source_ref_id text,
  issued_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
comment on table public.certificates is 'เกียรติบัตรที่ออกแล้วจริง — เก็บ layout_snapshot ของตัวเอง (ไม่ join เทมเพลตสดตอน render) กันแก้/ลบเทมเพลตทีหลังแล้วใบเก่าเปลี่ยนหน้าตา. source_system/source_ref_id ใช้ tag ว่าออกจากระบบไหน (null = ครูออกเองทั่วไป)';

create index if not exists certificates_student_idx on certificates(student_id);
create index if not exists certificates_issued_by_idx on certificates(issued_by_teacher_id);
create unique index if not exists certificates_source_student_uidx on certificates(source_system, source_ref_id, student_id) where source_system is not null;

alter table certificates enable row level security;
create policy certificates_student_read on certificates for select
  using (exists (select 1 from students s where s.id = certificates.student_id and s.profile_id = auth.uid()));
create policy certificates_admin_all on certificates for all
  using (get_user_role() = 'admin' or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true))
  with check (get_user_role() = 'admin' or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true));
create policy certificates_issuer_all on certificates for all
  using (issued_by_teacher_id in (select id from teachers where profile_id = auth.uid()))
  with check (
    get_user_role() = ANY (array['admin','teacher'])
    and issued_by_teacher_id in (select id from teachers where profile_id = auth.uid())
  );

-- ═══ Data migration (ครั้งเดียว) — ย้ายเทมเพลต+ใบที่ออกแล้วของระบบสภานักเรียนเข้าระบบกลาง ═══
-- ตารางเดิม (council_certificate_templates/council_activity_certificates) ไม่ลบ เก็บไว้เป็น fallback เฉยๆ
insert into certificate_templates (name, type, preset_key, background_image_url, layout, created_at, legacy_council_template_id)
select name, type, preset_key, background_image_url, layout, created_at, id
from council_certificate_templates;

alter table council_activity_certificate_rules drop constraint if exists council_activity_certificate_rules_template_id_fkey;
update council_activity_certificate_rules r
set template_id = ct.id
from certificate_templates ct
where ct.legacy_council_template_id = r.template_id;
alter table council_activity_certificate_rules
  add constraint council_activity_certificate_rules_template_id_fkey
  foreign key (template_id) references certificate_templates(id) on delete set null;

insert into certificates (
  template_id, layout_snapshot, student_id, student_name, title,
  issued_by_teacher_id, source_system, source_ref_id, issued_at, certificate_no, created_at
)
select
  ct.id, ct.layout, cac.student_id, s.full_name, a.title,
  cac.decided_by_teacher_id, 'council_activity', cac.activity_id::text, cac.issued_at, cac.certificate_no, cac.created_at
from council_activity_certificates cac
join council_activities a on a.id = cac.activity_id
join students s on s.id = cac.student_id
left join council_activity_certificate_rules r on r.activity_id = cac.activity_id
left join certificate_templates ct on ct.id = r.template_id
where cac.issued_at is not null;
