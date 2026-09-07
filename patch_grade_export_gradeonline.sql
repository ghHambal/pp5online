-- ตารางกลาง staging สำหรับส่งคะแนนรวม+เกรดจากหน้าบันทึกคะแนน pp5-online ออกไปให้
-- บุ๊กมาร์ก gradeonline-bridge-push.js (รันตอนอยู่ที่ azizstan.net/regist/GradeOnline/Evaluate)
-- มาดึงไปกรอกอัตโนมัติ — ทิศทางเดียวกับ pp5_attendance_export (ดูโค้ดคู่กันที่
-- js/teacher-views-attendance.js / public/js/studentcare-bridge-push.js)
--
-- ต่างจากฝั่งเช็คชื่อตรงที่หน้า GradeOnline ไม่มีตัวกรองห้อง/วันที่ให้ script อ่านค่าเองได้
-- (ไม่เคยเห็นโครงสร้าง DOM จริง) จึงใช้ share_code สุ่ม 6 ตัวแทน — ครูคัดลอกโค้ดจาก pp5
-- ไปวางตอนรันบุ๊กมาร์กแทนการเดา selector ของหน้าเว็บภายนอก

create table if not exists pp5_grade_export (
  id uuid primary key default gen_random_uuid(),
  teacher_id integer,
  class_id integer not null,
  share_code text not null,
  subject_name text,
  main_room text,
  student_code text not null,
  student_name text,
  total numeric(5,2),
  grade text,
  exported_at timestamptz not null default now()
);

create index if not exists idx_pp5_grade_export_share_code on pp5_grade_export (share_code);
create unique index if not exists uq_pp5_grade_export_class_student on pp5_grade_export (class_id, student_code);

alter table pp5_grade_export enable row level security;

-- อ่านได้แบบ anon ด้วย anon key เหมือน pp5_attendance_export — ปลอดภัยด้วย share_code
-- แบบสุ่มที่ไม่มีใครเดาได้ ไม่ใช่ auth จริง (ยอมรับความเสี่ยงระดับเดียวกับตารางพี่น้อง)
drop policy if exists pp5_grade_export_anon_select on pp5_grade_export;
create policy pp5_grade_export_anon_select on pp5_grade_export
  for select to anon using (true);

drop policy if exists pp5_grade_export_auth_all on pp5_grade_export;
create policy pp5_grade_export_auth_all on pp5_grade_export
  for all to authenticated using (true) with check (true);
