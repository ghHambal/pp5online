-- Phase 3: สมัคร wizard 4 ขั้น — เพิ่มคอลัมน์ที่ยังไม่มีตามสเปคข้อ 6.2 (2026-08-16)
alter table council_applications
  add column if not exists gpa_general numeric(3,2),
  add column if not exists gpa_religious numeric(3,2),
  add column if not exists intro_video_url text;
