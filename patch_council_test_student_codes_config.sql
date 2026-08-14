-- รายชื่อรหัสนักเรียนที่ให้ทดสอบระบบสภานักเรียนได้ แม้ปิดสวิตช์ "แสดงเมนูให้ทุกคนเห็น" ไว้
-- (council_visible_to_all=false) — ตั้งค่าได้จากหน้าตั้งค่าแอดมิน แท็บ "สภานักเรียน"
-- รันแล้วบน production ผ่าน Supabase MCP (2026-08-14) ไม่ต้องรันซ้ำ

insert into public.system_config (key, value) values ('council_test_student_codes', '')
on conflict (key) do nothing;
