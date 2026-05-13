-- รัน SQL นี้ใน Supabase SQL Editor ก่อนใช้งานฟีเจอร์เชื่อมโยงตารางสอน
create table if not exists class_schedule_links (
  id                  serial primary key,
  class_id            int not null references classes(id) on delete cascade,
  teacher_schedule_id int not null references teacher_schedules(id) on delete cascade,
  unique(class_id, teacher_schedule_id)
);
