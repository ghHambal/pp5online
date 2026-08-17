-- ระบุกลุ่มเป้าหมายของประกาศ (ครูเท่านั้น / นักเรียนเท่านั้น / ทั้งสองฝ่าย)
-- ใช้กรองใน getActiveAnnouncements(forRole) ฝั่ง client (js/api.js)
alter table announcements
  add column audience text not null default 'all'
  check (audience in ('all','teacher','student'));

comment on column announcements.audience is 'กลุ่มเป้าหมายของประกาศ: all=ทุกคน, teacher=ครูเท่านั้น, student=นักเรียนเท่านั้น (ใช้กรองใน getActiveAnnouncements)';
