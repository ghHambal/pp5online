-- เพิ่มกลุ่มเป้าหมายใหม่ audience='futsal_player' — เฉพาะนักเรียนที่ลงทะเบียนเป็นนักกีฬาใน azfutsal_players
-- ใช้กรองใน student.js (_loadAnnouncementBanners) ฝั่ง client เทียบกับ _futsalRegistered
alter table announcements
  drop constraint announcements_audience_check;
alter table announcements
  add constraint announcements_audience_check
  check (audience in ('all','teacher','student','futsal_player'));

comment on column announcements.audience is 'กลุ่มเป้าหมายของประกาศ: all=ทุกคน, teacher=ครูเท่านั้น, student=นักเรียนเท่านั้น, futsal_player=เฉพาะนักกีฬาที่ลงทะเบียนในระบบฟุตซอล (กรองฝั่ง client)';
