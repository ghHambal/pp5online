-- เพิ่มสิทธิ์ให้สมาชิกสภาที่ได้รับมอบหมาย "สร้าง" กิจกรรม/การประชุมใหม่เองได้ทันที (เดิมทำได้แค่
-- จัดการกิจกรรมที่มีอยู่แล้วผ่าน owner_member_id) + เกณฑ์ % เช็คชื่อภาพรวมสำหรับประเมินความเป็น
-- สมาชิกสภา (แยกจากเกณฑ์ min_attendance_count รายกิจกรรมเดิมที่ผูกกับเกียรติบัตรอย่างเดียว)

alter table council_activities
  add column if not exists counts_for_evaluation boolean not null default true;
comment on column council_activities.counts_for_evaluation is
  'กิจกรรมนี้นับรวมในเกณฑ์ % เช็คชื่อสำหรับประเมินความเป็นสมาชิกสภาหรือไม่ (ปิดได้รายกิจกรรม เช่น ประชุมย่อยที่ไม่ควรนับ)';

alter table council_members
  add column if not exists can_create_activities boolean not null default false;
comment on column council_members.can_create_activities is
  'สิทธิ์สร้างกิจกรรม/การประชุมใหม่เองได้ทันที นอกเหนือจากประธานสภา ตั้งได้เฉพาะผ่าน RPC set_council_member_can_create (แอดมินตั้งให้ใครก็ได้ ประธานสภาตั้งได้เฉพาะสมาชิกเพศเดียวกับตัวเอง)';

-- สมาชิกสภาที่ได้รับสิทธิ์ (can_create_activities=true) สร้างกิจกรรมได้เอง แต่ owner_member_id
-- ของแถวใหม่ต้องเป็นตัวเองเท่านั้น (กันมอบหมายกิจกรรมให้คนอื่นแทนที่ประธาน/แอดมิน)
create policy council_activities_delegated_creator_insert
  on council_activities for insert
  with check (
    exists (
      select 1 from council_members cm
      join students s on s.id = cm.student_id
      where s.profile_id = auth.uid()
        and cm.status = 'active'
        and cm.can_create_activities = true
        and cm.id = council_activities.owner_member_id
    )
  );

-- มอบ/ถอนสิทธิ์ can_create_activities — แอดมินมอบให้ใครก็ได้, ประธานสภามอบได้เฉพาะสมาชิกเพศเดียวกับตัวเอง
create or replace function set_council_member_can_create(p_member_id bigint, p_value boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
  v_chair_gender text;
  v_target_gender text;
begin
  select (get_user_role() = 'admin')
      or exists(select 1 from profiles where id = auth.uid() and is_also_admin = true)
    into v_is_admin;

  select cp.gender into v_chair_gender
  from council_members cm
  join council_positions cp on cp.id = cm.position_id
  join students s on s.id = cm.student_id
  where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
  limit 1;

  select cp.gender into v_target_gender
  from council_members cm
  join council_positions cp on cp.id = cm.position_id
  where cm.id = p_member_id;

  if v_target_gender is null then
    raise exception 'ไม่พบสมาชิกสภาคนนี้';
  end if;

  if not (v_is_admin or (v_chair_gender is not null and v_chair_gender = v_target_gender)) then
    raise exception 'ไม่มีสิทธิ์มอบหมายสิทธิ์สร้างกิจกรรมให้สมาชิกคนนี้';
  end if;

  update council_members set can_create_activities = p_value where id = p_member_id;
end;
$$;

grant execute on function set_council_member_can_create(bigint, boolean) to authenticated;
