-- ผู้ใช้ขอเพิ่มขั้นตอน "รับรองจากสภานักเรียนปัจจุบัน" ควบคู่กับครูที่ปรึกษาสามัญ (2026-08-16)
-- ตัดสินใจจากคำตอบผู้ใช้ตรงๆ:
--   1. สมาชิกสภาคนไหนก็ได้ (เพศเดียวกันกับตำแหน่งที่สมัคร) รับรอง 1 คนก็พอ
--   2. เกิดขึ้นพร้อมกับครูที่ปรึกษาสามัญ (ก่อนนัดสัมภาษณ์) ไม่ใช่ทีหลัง
--   3. ผู้สมัครที่เป็นสมาชิกสภาปัจจุบันอยู่แล้ว (ลงสมัครตำแหน่งใหม่) ข้ามขั้นตอนนี้ไปเลย
--   4. เปิด/ปิดบังคับได้จากหน้าตั้งค่า (council_require_peer_endorsement)
-- รันแล้วผ่าน Supabase MCP เก็บไว้เป็นบันทึกถาวร ไม่ต้องรันซ้ำ

alter table council_applications
  add column if not exists peer_endorsed_by_member_id bigint references council_members(id),
  add column if not exists peer_endorsement_comment text,
  add column if not exists peer_endorsed_at timestamptz;

insert into system_config (key, value) values
  ('council_require_peer_endorsement', 'false')
on conflict (key) do nothing;

-- ให้สมาชิกสภา active คนไหนก็ได้ (ตำแหน่งเพศเดียวกับที่ผู้สมัครเลือก) update แถวใบสมัครได้
-- (row-level เท่านั้น ไม่ได้จำกัดคอลัมน์ — เหมือน convention เดิมของ council_positions_admin_write
-- ที่ยอมรับความเสี่ยงเดียวกันนี้แล้วใน Phase 2 เพื่อความเรียบง่าย)
create policy council_applications_peer_endorse_write on council_applications for update
  using (
    exists (
      select 1 from council_members cm
      join council_positions cp on cp.id = cm.position_id
      join council_positions target_pos on target_pos.id = council_applications.position_id
      where cm.status = 'active' and cp.gender = target_pos.gender
        and cm.student_id in (select id from students where profile_id = auth.uid())
    )
  )
  with check (
    exists (
      select 1 from council_members cm
      join council_positions cp on cp.id = cm.position_id
      join council_positions target_pos on target_pos.id = council_applications.position_id
      where cm.status = 'active' and cp.gender = target_pos.gender
        and cm.student_id in (select id from students where profile_id = auth.uid())
    )
  );
