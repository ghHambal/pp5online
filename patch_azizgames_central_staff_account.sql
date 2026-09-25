-- บัญชีเจ้าหน้าที่กองกลางสำหรับเข้าสู่ระบบ AZIZGAMES โดยตรง
-- ไม่ใช้บัญชีแอดมินของ ปพ.5 และไม่แสดงรหัสผ่านแบบ plaintext ในฐานข้อมูล

do $$
declare
  v_event_id uuid := '00000000-0000-0000-0000-000000000001';
  v_official_id uuid;
begin
  select id into v_official_id
  from public.sports_officials
  where event_id = v_event_id
    and lower(username) = 'ag2026'
  order by created_at
  limit 1;

  if v_official_id is null then
    insert into public.sports_officials
      (event_id, full_name, contact, username, pin, pin_hash, status, approved_at)
    values
      (v_event_id, 'เจ้าหน้าที่กองกลาง AZIZGAMES', null, 'ag2026', null,
       '$2a$10$Rimcih.GJrx9yULcaHHyTecpLNWslTQd5z1ohpDDZCpyGsXadKbzi',
       'approved', now())
    returning id into v_official_id;
  else
    update public.sports_officials
    set full_name = 'เจ้าหน้าที่กองกลาง AZIZGAMES',
        pin = null,
        pin_hash = '$2a$10$Rimcih.GJrx9yULcaHHyTecpLNWslTQd5z1ohpDDZCpyGsXadKbzi',
        status = 'approved',
        approved_at = coalesce(approved_at, now())
    where id = v_official_id;
  end if;

  -- บัญชีกองกลางต้องเห็นและบันทึกผลได้ทุกรายการแข่งขันที่เปิดใช้งาน
  delete from public.sports_official_assignments where official_id = v_official_id;
  insert into public.sports_official_assignments (official_id, sport_id)
  select v_official_id, s.id
  from public.sports s
  where s.event_id = v_event_id and s.is_active is true;
end;
$$;

notify pgrst, 'reload schema';
