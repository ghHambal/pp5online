-- ตาราง classrooms (ห้องเรียนในโรงเรียน)
create table if not exists classrooms (
  id              serial primary key,
  building        text not null,       -- อาคาร 1, 2, 3...
  room_number     text not null,       -- 121, 531, 6S...
  name            text,                -- ชื่อห้อง (ถ้ามี) เช่น ห้องสมุด
  is_teaching_room boolean default true, -- false = ห้องพิเศษ
  unique(building, room_number)
);

alter table classrooms enable row level security;
create policy "public_read_classrooms" on classrooms for select using (true);
create policy "admin_manage_classrooms" on classrooms for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- เพิ่มคอลัมน์ classroom_id ใน classes
alter table classes add column if not exists classroom_id int references classrooms(id) on delete set null;

-- ─── INSERT: อาคาร 1 ──────────────────────────────────────────────────────────
insert into classrooms (building, room_number, name, is_teaching_room) values
-- ชั้นล่าง
('อาคาร 1', '121', null, true),
('อาคาร 1', '122', null, true),
('อาคาร 1', '123', null, true),
('อาคาร 1', '124', null, true),
('อาคาร 1', '128', 'ห้องพักครู', false),
('อาคาร 1', '129', null, true),
('อาคาร 1', '1210', null, true),
('อาคาร 1', '1211', null, true),
('อาคาร 1', '1212', null, true),
('อาคาร 1', '1213', null, true),
('อาคาร 1', '1214', null, true),
('อาคาร 1', '1215', null, true),
-- ชั้นกลาง
('อาคาร 1', '131', null, true),
('อาคาร 1', '132', null, true),
('อาคาร 1', '133', null, true),
('อาคาร 1', '134', null, true),
('อาคาร 1', '138', null, true),
('อาคาร 1', '139', null, true),
('อาคาร 1', '1310', null, true),
('อาคาร 1', '1311', null, true),
('อาคาร 1', '1312', null, true),
('อาคาร 1', '1313', null, true),
('อาคาร 1', '1314', null, true),
('อาคาร 1', '1315', null, true),
-- ชั้นบน / ปีก
('อาคาร 1', '125', null, true),
('อาคาร 1', '126', 'ห้องทะเบียน', false),
('อาคาร 1', '127', null, true),
('อาคาร 1', '135', null, true),
('อาคาร 1', '136', null, true),
('อาคาร 1', '137', null, true),
-- ห้องพิเศษ
('อาคาร 1', 'กิจการ', 'ห้องกิจการนักเรียน', false),
('อาคาร 1', 'ถ่าย', 'ห้องถ่ายเอกสาร', false),
('อาคาร 1', 'สมุด', 'ห้องสมุด', false),
('อาคาร 1', 'ประชุม1', 'ห้องประชุม 1', false),
('อาคาร 1', 'รับรอง', 'ห้องรับรอง', false),
('อาคาร 1', 'ยอ', 'ห้อง ยอ./ผู้จัดการ', false),
('อาคาร 1', 'ปชส', 'ห้องประชาสัมพันธ์', false),
('อาคาร 1', 'การเงิน', 'ห้องสำนักงาน/ธุรการการเงิน', false),
('อาคาร 1', 'บุคลากร', 'ห้องบุคลากร', false),
('อาคาร 1', 'วิชาการสามัญ', 'ห้องวิชาการสามัญ', false),
('อาคาร 1', 'วิชาการศาสนา', 'ห้องวิชาการศาสนา', false)
on conflict (building, room_number) do nothing;

-- ─── INSERT: อาคาร 2 ──────────────────────────────────────────────────────────
insert into classrooms (building, room_number, name, is_teaching_room) values
('อาคาร 2', '211', 'ห้องหมวดสังคม', false),
('อาคาร 2', '212-213', 'ห้องปฏิบัติการวิทยาศาสตร์', false),
('อาคาร 2', '214', 'ห้องอัลกุรอาน', true),
('อาคาร 2', '215', 'ห้องภาษาไทย', true),
('อาคาร 2', '216', null, true),
('อาคาร 2', '217', null, true),
('อาคาร 2', '218', null, true)
on conflict (building, room_number) do nothing;

-- ─── INSERT: อาคาร 3 ──────────────────────────────────────────────────────────
insert into classrooms (building, room_number, name, is_teaching_room) values
('อาคาร 3', '311', 'ห้องหมวดภาษาอังกฤษ', false),
('อาคาร 3', '312', 'ห้องภาษาอาหรับ', false),
('อาคาร 3', '313', 'ห้องหมวดภาษามลายู', false),
('อาคาร 3', '314', null, true),
('อาคาร 3', '315', null, true),
('อาคาร 3', '316', null, true),
('อาคาร 3', '317', null, true),
('อาคาร 3', '318-319', 'ห้องพยาบาล', false)
on conflict (building, room_number) do nothing;

-- ─── INSERT: อาคาร 4 ──────────────────────────────────────────────────────────
insert into classrooms (building, room_number, name, is_teaching_room) values
('อาคาร 4', 'สภา', 'ห้องสภานักเรียน', false),
('อาคาร 4', 'ดาราศาสตร์', 'ชมรมดาราศาสตร์/ชมรมถ่ายภาพ', false),
('อาคาร 4', 'รด', 'ห้องนักศึกษาวิชาทหาร', false),
('อาคาร 4', 'สหกรณ์', 'สหกรณ์โรงเรียน', false)
on conflict (building, room_number) do nothing;

-- ─── INSERT: อาคาร 5 ──────────────────────────────────────────────────────────
insert into classrooms (building, room_number, name, is_teaching_room) values
-- ชั้น 2
('อาคาร 5', '521', null, true),
('อาคาร 5', '522', null, true),
('อาคาร 5', '523', null, true),
('อาคาร 5', '524', null, true),
('อาคาร 5', '525', null, true),
('อาคาร 5', '526', null, true),
('อาคาร 5', '527', null, true),
('อาคาร 5', '528', null, true),
('อาคาร 5', '529', null, true),
('อาคาร 5', '5210', null, true),
('อาคาร 5', '5211', null, true),
('อาคาร 5', '5212', null, true),
-- ชั้น 3
('อาคาร 5', '531', null, true),
('อาคาร 5', '532', null, true),
('อาคาร 5', '533', null, true),
('อาคาร 5', '534', null, true),
('อาคาร 5', '535', null, true),
('อาคาร 5', '536', null, true),
('อาคาร 5', '537', null, true),
('อาคาร 5', '538', null, true),
('อาคาร 5', '539', null, true),
('อาคาร 5', '5310', null, true),
('อาคาร 5', '5311', null, true),
('อาคาร 5', '5312', null, true),
-- ห้องพิเศษ
('อาคาร 5', 'computer4', 'ห้องปฏิบัติ Computer 4', false),
('อาคาร 5', 'ประชุม2', 'ห้องประชุม 2', false),
('อาคาร 5', 'อาหารชาย', 'โรงอาหารชาย', false)
on conflict (building, room_number) do nothing;

-- ─── INSERT: อาคาร 6 ──────────────────────────────────────────────────────────
insert into classrooms (building, room_number, name, is_teaching_room) values
-- ชั้น 1
('อาคาร 6', '611-612', 'ห้องปฏิบัติการวิทยาศาสตร์', false),
('อาคาร 6', '613', 'ห้องปฏิบัติการหุ่นยนต์', false),
('อาคาร 6', '614', null, true),
('อาคาร 6', '615', null, true),
('อาคาร 6', '616', null, true),
('อาคาร 6', '617', null, true),
('อาคาร 6', '618', null, true),
('อาคาร 6', '619', null, true),
-- ชั้น 2
('อาคาร 6', '621', null, true),
('อาคาร 6', '622', null, true),
('อาคาร 6', '623', null, true),
('อาคาร 6', '624', null, true),
('อาคาร 6', '625', null, true),
('อาคาร 6', '626', null, true),
('อาคาร 6', '627', null, true),
('อาคาร 6', '628', null, true),
('อาคาร 6', '629', null, true)
on conflict (building, room_number) do nothing;
