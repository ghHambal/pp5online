-- ครูที่ยังไม่ถึงระดับโดเนทที่ปลดล็อก Smart Classroom เลือกใช้ฟรีได้ 1 ห้องเรียน
-- ล็อกถาวรเมื่อเลือกแล้ว ต้องให้แอดมินรีเซ็ตถึงจะเปลี่ยนห้องได้ (หน้าตั้งค่า > แพ็กเกจ > Donation)
alter table teachers
  add column smart_classroom_free_class_id integer references classes(id) on delete set null;

comment on column teachers.smart_classroom_free_class_id is 'ห้องเรียนที่ครู (ระดับโดเนทยังไม่ถึงเกณฑ์ Smart Classroom) เลือกใช้ฟรีได้ 1 ห้อง — ล็อกถาวรเมื่อเลือกแล้ว ต้องให้แอดมินรีเซ็ตถึงจะเปลี่ยนได้ (js/teacher-views-smart-classroom.js)';

-- FK constraint name (ตรวจยืนยันแล้ว): teachers_smart_classroom_free_class_id_fkey
