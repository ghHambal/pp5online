-- Phase 5: โปรไฟล์ผู้สมัครเต็มรูปแบบ (สโลแกน/วิสัยทัศน์/นโยบาย/ประสบการณ์) ตามสเปคข้อ 6.2/8.11
-- (2026-08-16) — รันแล้วผ่าน Supabase MCP เก็บไว้เป็นบันทึกถาวร ไม่ต้องรันซ้ำ

alter table council_candidates
  add column if not exists slogan text,
  add column if not exists vision text,
  add column if not exists policies jsonb default '[]'::jsonb,
  add column if not exists experience jsonb default '[]'::jsonb;

-- อัปเดต RPC หน้าโหวต kiosk (council-election.html) ให้ส่งฟิลด์โปรไฟล์ใหม่ + เกรด (join
-- ย้อนไป council_applications ผ่าน application_id) ไปแสดงในปุ่ม "ดูรายละเอียด" ของหน้าโหวตด้วย
-- โครงสร้างฟังก์ชันเดิมเหมือน patch_council_election_public_vote.sql ทุกจุด เปลี่ยนแค่
-- jsonb_build_object ของผู้สมัครแต่ละคนกับเพิ่ม left join council_applications
create or replace function public.get_public_council_election_bundle(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student record;
  v_gender text;
  v_election record;
  v_candidates jsonb;
  v_my_vote bigint;
  v_thank_you text;
begin
  select id, full_name, image_url, photo_url, main_room, gender
    into v_student
    from students
    where student_code = trim(p_code) and coalesce(is_active, true) = true
    limit 1;

  if v_student.id is null then
    return jsonb_build_object('error', 'student_not_found');
  end if;

  v_gender := case when v_student.gender in ('ชาย','M') then 'M'
                   when v_student.gender in ('หญิง','W') then 'W' end;
  if v_gender is null then
    return jsonb_build_object('error', 'gender_unknown');
  end if;

  select value into v_thank_you from system_config where key = 'council_election_thank_you_message';

  select * into v_election
    from council_election_config
    where gender = v_gender
    order by (opens_at is not null and opens_at <= now() and (closes_at is null or closes_at > now())) desc,
             academic_year desc
    limit 1;

  if v_election.id is null then
    return jsonb_build_object('error', 'election_not_found', 'student', jsonb_build_object(
      'full_name', v_student.full_name, 'image_url', coalesce(v_student.image_url, v_student.photo_url),
      'main_room', v_student.main_room));
  end if;

  select candidate_id into v_my_vote from council_votes
    where election_config_id = v_election.id and voter_student_id = v_student.id;

  select coalesce(jsonb_agg(jsonb_build_object(
      'id', c.id, 'ballot_number', c.ballot_number, 'campaign_statement', c.campaign_statement,
      'slogan', c.slogan, 'vision', c.vision, 'policies', coalesce(c.policies, '[]'::jsonb), 'experience', coalesce(c.experience, '[]'::jsonb),
      'gpa_general', a.gpa_general, 'gpa_religious', a.gpa_religious,
      'full_name', s2.full_name, 'image_url', coalesce(s2.image_url, s2.photo_url), 'main_room', s2.main_room
    ) order by c.ballot_number), '[]'::jsonb)
    into v_candidates
    from council_candidates c
    join students s2 on s2.id = c.student_id
    left join council_applications a on a.id = c.application_id
    where c.election_config_id = v_election.id;

  return jsonb_build_object(
    'student', jsonb_build_object('full_name', v_student.full_name,
      'image_url', coalesce(v_student.image_url, v_student.photo_url), 'main_room', v_student.main_room),
    'election_id', v_election.id, 'gender', v_gender,
    'is_open', (v_election.opens_at is not null and v_election.opens_at <= now()
      and (v_election.closes_at is null or v_election.closes_at > now())),
    'candidates', v_candidates,
    'already_voted_candidate_id', v_my_vote,
    'thank_you_message', v_thank_you
  );
end;
$$;
