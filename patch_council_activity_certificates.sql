-- ระบบสภานักเรียน: เช็คชื่อกิจกรรมสำหรับนักเรียนทั่วไป + ระบบเกียรติบัตรกิจกรรม
-- (เดิม council_activity_attendance ผูกกับ council_members.id เท่านั้น นักเรียนทั่วไปที่ไม่ใช่
-- สมาชิกสภาเช็คชื่อเข้าร่วมกิจกรรมของสภาไม่ได้เลย)

-- 1) กิจกรรม: เปิดให้นักเรียนทั่วไปเข้าร่วมได้ + มอบหมายผู้รับผิดชอบ (สมาชิกสภาคนใดก็ได้ ไม่บังคับประธาน)
alter table council_activities
  add column if not exists open_to_general boolean not null default false,
  add column if not exists owner_member_id bigint references council_members(id) on delete set null;

comment on column council_activities.open_to_general is 'true = เปิดให้นักเรียนทั่วไป (ไม่ใช่แค่สมาชิกสภา) เช็คชื่อเข้าร่วมได้';
comment on column council_activities.owner_member_id is 'สมาชิกสภา (ไม่จำเป็นต้องเป็นประธาน) ที่ได้รับมอบหมายให้จัดการกิจกรรมนี้โดยเฉพาะ — ตั้งเงื่อนไขเกียรติบัตร/เช็คชื่อได้แม้ไม่ใช่ประธาน/แอดมิน/ครูที่ปรึกษา';

-- 2) เช็คชื่อ: เปลี่ยนตัวหลักจาก member_id เป็น student_id (รองรับนักเรียนทั่วไป) — backfill จาก member_id เดิม
alter table council_activity_attendance
  add column if not exists student_id integer references students(id) on delete cascade;

update council_activity_attendance a
set student_id = cm.student_id
from council_members cm
where cm.id = a.member_id and a.student_id is null;

alter table council_activity_attendance alter column student_id set not null;
alter table council_activity_attendance alter column member_id drop not null;

alter table council_activity_attendance drop constraint if exists council_activity_attendance_member_id_fkey;
alter table council_activity_attendance add constraint council_activity_attendance_member_id_fkey
  foreign key (member_id) references council_members(id) on delete set null;

alter table council_activity_attendance drop constraint if exists council_activity_attendance_activity_id_member_id_key;
alter table council_activity_attendance add constraint council_activity_attendance_activity_student_key
  unique (activity_id, student_id);

comment on column council_activity_attendance.student_id is 'นักเรียนที่เช็คชื่อ — ตัวหลักเสมอ (รองรับทั้งสมาชิกสภาและนักเรียนทั่วไป)';
comment on column council_activity_attendance.member_id is 'ถ้าตอนเช็คชื่อ นักเรียนคนนี้เป็นสมาชิกสภา active อยู่ด้วย จะบันทึกไว้เผื่อใช้ query มุมมองสมาชิกสภา — null ได้ถ้าเป็นนักเรียนทั่วไปที่ไม่ใช่สมาชิกสภา';

-- 3) RLS เพิ่ม: ผู้รับผิดชอบกิจกรรม (owner_member_id) จัดการกิจกรรม/เช็คชื่อของกิจกรรมตัวเองได้
-- (เดิมเขียนได้แค่ admin/is_also_admin/ประธานสภาเท่านั้น — เพิ่มเป็น policy ใหม่ OR กับของเดิม)
create policy council_attendance_owner_write on council_activity_attendance for all
  using (
    exists (
      select 1 from council_activities a
      join council_members cm on cm.id = a.owner_member_id
      join students s on s.id = cm.student_id
      where a.id = council_activity_attendance.activity_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  )
  with check (
    exists (
      select 1 from council_activities a
      join council_members cm on cm.id = a.owner_member_id
      join students s on s.id = cm.student_id
      where a.id = council_activity_attendance.activity_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  );

create policy council_activities_owner_write on council_activities for update
  using (
    exists (
      select 1 from council_members cm join students s on s.id = cm.student_id
      where cm.id = council_activities.owner_member_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  )
  with check (
    exists (
      select 1 from council_members cm join students s on s.id = cm.student_id
      where cm.id = council_activities.owner_member_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  );

-- 4) เทมเพลตเกียรติบัตร — ดีไซน์สำเร็จรูป (preset_key) หรืออัปโหลดพื้นหลังเอง (background_image_url)
create table if not exists council_certificate_templates (
  id bigint generated always as identity primary key,
  name text not null,
  type text not null check (type in ('preset','custom')),
  preset_key text,
  background_image_url text,
  created_at timestamptz not null default now()
);
alter table council_certificate_templates enable row level security;
create policy council_certificate_templates_read on council_certificate_templates for select using (true);
create policy council_certificate_templates_write on council_certificate_templates for all
  using (get_user_role() = ANY (array['admin','teacher']) or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true))
  with check (get_user_role() = ANY (array['admin','teacher']) or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true));

comment on table council_certificate_templates is 'เทมเพลตเกียรติบัตรกิจกรรม — เลือกดีไซน์สำเร็จรูป (preset_key) หรืออัปโหลดพื้นหลังเอง (background_image_url)';

-- 5) เงื่อนไขการรับเกียรติบัตรต่อกิจกรรม
create table if not exists council_activity_certificate_rules (
  activity_id bigint primary key references council_activities(id) on delete cascade,
  template_id bigint references council_certificate_templates(id) on delete set null,
  min_attendance_count integer,
  required_dates jsonb not null default '[]'::jsonb,
  notes text,
  updated_at timestamptz not null default now()
);
alter table council_activity_certificate_rules enable row level security;
create policy council_activity_certificate_rules_read on council_activity_certificate_rules for select using (true);
create policy council_activity_certificate_rules_write on council_activity_certificate_rules for all
  using (
    get_user_role() = ANY (array['admin','teacher'])
    or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true)
    or exists (
      select 1 from council_activities a
      join council_members cm on cm.id = a.owner_member_id
      join students s on s.id = cm.student_id
      where a.id = council_activity_certificate_rules.activity_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  )
  with check (
    get_user_role() = ANY (array['admin','teacher'])
    or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true)
    or exists (
      select 1 from council_activities a
      join council_members cm on cm.id = a.owner_member_id
      join students s on s.id = cm.student_id
      where a.id = council_activity_certificate_rules.activity_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  );

comment on table council_activity_certificate_rules is 'เงื่อนไขการรับเกียรติบัตรต่อกิจกรรม — จำนวนครั้งขั้นต่ำ/วันที่บังคับ ตั้งโดยแอดมิน/ครูที่ปรึกษาสภา/สมาชิกสภาที่เป็นผู้รับผิดชอบกิจกรรมนั้นๆ';

-- 6) สถานะเกียรติบัตรต่อนักเรียน — override ผลคำนวณอัตโนมัติได้ + บันทึกตอนออกเกียรติบัตรจริง
create table if not exists council_activity_certificates (
  id bigint generated always as identity primary key,
  activity_id bigint not null references council_activities(id) on delete cascade,
  student_id integer not null references students(id) on delete cascade,
  override_decision text check (override_decision in ('pass','fail')),
  decided_by_teacher_id integer references teachers(id) on delete set null,
  decided_by_member_id bigint references council_members(id) on delete set null,
  comment text,
  certificate_no text,
  issued_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (activity_id, student_id)
);
alter table council_activity_certificates enable row level security;
create policy council_activity_certificates_read on council_activity_certificates for select using (true);
create policy council_activity_certificates_write on council_activity_certificates for all
  using (
    get_user_role() = ANY (array['admin','teacher'])
    or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true)
    or exists (
      select 1 from council_activities a
      join council_members cm on cm.id = a.owner_member_id
      join students s on s.id = cm.student_id
      where a.id = council_activity_certificates.activity_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  )
  with check (
    get_user_role() = ANY (array['admin','teacher'])
    or exists(select 1 from profiles where id=auth.uid() and is_also_admin=true)
    or exists (
      select 1 from council_activities a
      join council_members cm on cm.id = a.owner_member_id
      join students s on s.id = cm.student_id
      where a.id = council_activity_certificates.activity_id and s.profile_id = auth.uid() and cm.status = 'active'
    )
  );

comment on table council_activity_certificates is 'สถานะเกียรติบัตรกิจกรรมต่อนักเรียน — override_decision ใช้ override ผลคำนวณอัตโนมัติจากเงื่อนไข, issued_at/certificate_no ตั้งตอนออกเกียรติบัตรจริง';

-- 7) ครูที่ปรึกษาสภาควรจัดการกิจกรรม/เช็คชื่อ/เกียรติบัตรได้เหมือนตารางอื่นๆ ของสภา (เดิม RLS
-- 2 ตารางนี้เปิดแค่ admin/is_also_admin/ประธานสภา ไม่มี role='teacher' เหมือนตารางส่วนใหญ่ — ช่องโหว่เดิม)
create policy council_activities_teacher_write on council_activities for all
  using (get_user_role() = 'teacher') with check (get_user_role() = 'teacher');

create policy council_attendance_teacher_write on council_activity_attendance for all
  using (get_user_role() = 'teacher') with check (get_user_role() = 'teacher');
