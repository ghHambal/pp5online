-- ระบบ "แจ้งขอทำบัตร QR Code" ฉบับจริง — ยกเลิกแนวทางเดิมที่ฝากไว้ใน app_feedback
-- (category='qr_card_request', patch_feedback_qr_card_request.sql) เพราะพบว่าระบบมี
-- qr_reissue_logs (ประวัติออก QR ใหม่ที่ครู/แอดมินบันทึกอยู่แล้วในหน้า "พิมพ์ QR Code นักเรียน")
-- อยู่ก่อนแล้ว — ทำใหม่ให้ต่อยอดจากระบบนี้แทน ไม่ปนกับ Feedback ทั่วไป

-- ── ล้างของเดิมที่ทำไว้ผิดทาง (คอลัมน์ยังไม่มีใครใช้แล้วหลังแก้โค้ด) ─────────────
alter table app_feedback drop column if exists qr_printed_at;
alter table app_feedback drop column if exists qr_picked_up_at;
alter table app_feedback drop column if exists qr_fine_paid_at;
-- get_admin_profile_ids() ยังใช้ต่อ (reuse สำหรับแจ้งเตือนแอดมินทุกกรณี) ไม่ต้องลบ

-- ── คำขอทำบัตร QR Code ที่นักเรียนแจ้งเอง (สถานะรอดำเนินการ) ────────────────────
create table if not exists qr_reissue_requests (
  id bigint generated always as identity primary key,
  student_id integer not null references students(id) on delete cascade,
  requested_at timestamptz not null default now(),
  printed_at timestamptz,
  picked_up_at timestamptz,
  fine_paid_at timestamptz,
  reissue_log_id bigint references qr_reissue_logs(id) on delete set null
);
create index if not exists qr_reissue_requests_student_idx on qr_reissue_requests(student_id);

alter table qr_reissue_requests enable row level security;

-- นักเรียนแจ้งคำขอของตัวเองและดูของตัวเองได้
create policy qr_reissue_requests_student_read on qr_reissue_requests for select
  using (exists (select 1 from students s where s.id = student_id and s.profile_id = auth.uid()));
create policy qr_reissue_requests_student_insert on qr_reissue_requests for insert
  with check (exists (select 1 from students s where s.id = student_id and s.profile_id = auth.uid()));

-- แอดมิน + ครูที่ได้รับสิทธิ์ (qr_reissue_managers) ดู/แก้ไข/ลบได้ทั้งหมด
create policy qr_reissue_requests_manager_all on qr_reissue_requests for all
  using (
    get_user_role() = 'admin'
    or exists (select 1 from profiles where id = auth.uid() and is_also_admin = true)
    or exists (select 1 from qr_reissue_managers where profile_id = auth.uid())
  )
  with check (
    get_user_role() = 'admin'
    or exists (select 1 from profiles where id = auth.uid() and is_also_admin = true)
    or exists (select 1 from qr_reissue_managers where profile_id = auth.uid())
  );

comment on table qr_reissue_requests is 'คำขอทำบัตร QR Code ที่นักเรียนแจ้งความจำนงเอง — พอทำเสร็จจริงจะสร้างแถวคู่กันใน qr_reissue_logs ด้วย';

-- ── มอบสิทธิ์ครูให้เข้าหน้า "พิมพ์ QR Code นักเรียน" + จัดการคำขอได้เหมือนแอดมิน ─────────
create table if not exists qr_reissue_managers (
  profile_id uuid primary key references profiles(id) on delete cascade,
  granted_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table qr_reissue_managers enable row level security;
create policy qr_reissue_managers_read on qr_reissue_managers for select using (true);
create policy qr_reissue_managers_write on qr_reissue_managers for all
  using (get_user_role() = 'admin' or exists (select 1 from profiles where id = auth.uid() and is_also_admin = true))
  with check (get_user_role() = 'admin' or exists (select 1 from profiles where id = auth.uid() and is_also_admin = true));

comment on table qr_reissue_managers is 'ครูที่แอดมินมอบสิทธิ์ให้เข้าหน้าพิมพ์/จัดการคำขอ QR Code ได้เหมือนแอดมิน (แยกจากสิทธิ์ครูที่ปรึกษาพิมพ์เฉพาะห้องตัวเอง)';
