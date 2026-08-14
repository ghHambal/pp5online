-- ปุ่มเปิด/ปิดการแสดงผลเมนู "ระบบสภานักเรียน" ในหน้าตั้งค่าแอดมิน (แท็บ "สภานักเรียน")
-- ปิดแล้วเห็นเฉพาะแอดมิน/ครูที่ is_also_admin — รันแล้วบน production ผ่าน Supabase MCP (2026-08-14)
-- ค่าเริ่มต้น 'true' เพื่อให้ตรงกับพฤติกรรมเดิมที่ทุกคนเห็นอยู่แล้วก่อนมีปุ่มนี้ ไม่ต้องรันซ้ำ

insert into public.system_config (key, value) values ('council_visible_to_all', 'true')
on conflict (key) do nothing;
