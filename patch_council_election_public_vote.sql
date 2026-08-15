-- โหวตเลือกตั้งสภานักเรียน — ต้องเป็นจุดลงคะแนนแยกที่มีครู/เจ้าหน้าที่คุม (kiosk) ห้ามโหวต
-- ผ่านมือถือนักเรียนเองด้วย session ที่ล็อกอินอยู่ (ตัดสินใจย้ำอีกครั้ง 2026-08-15 — Phase 2
-- เดิมพลาดเปิดช่องโหวตแบบ self-service ผ่าน council.js ไปแล้ว ต้องปิดและย้ายไปหน้าแยก)
--
-- Mirror pattern shirt-vote-public: SECURITY DEFINER RPC 2 ตัว ทำงานด้วย anon key ไม่ต้อง login
-- session เลย — กรอกรหัสนักเรียน → ระบบค้นหา+โชว์รูปให้ยืนยันตัวตน (ครูที่คุมจุดลงคะแนนคือ
-- safeguard หลักกันสวมรอย) → เลือกผู้สมัคร → บันทึกคะแนน (กันโหวตซ้ำแบบ hard block ไม่ใช่
-- upsert เหมือน shirt vote เพราะการเลือกตั้งสภาต้องล็อกครั้งเดียวจริง)

-- ปิดช่องโหวตแบบ session-based ที่เปิดไว้ผิดพลาดใน patch_council_phase2_pipeline.sql
drop policy if exists council_votes_self_insert on public.council_votes;
drop policy if exists council_votes_self_read on public.council_votes;

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
      'full_name', s2.full_name, 'image_url', coalesce(s2.image_url, s2.photo_url), 'main_room', s2.main_room
    ) order by c.ballot_number), '[]'::jsonb)
    into v_candidates
    from council_candidates c join students s2 on s2.id = c.student_id
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

create or replace function public.cast_public_council_vote(p_code text, p_candidate_id bigint)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student_id integer;
  v_gender text;
  v_election_id bigint;
begin
  select id, case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end
    into v_student_id, v_gender
    from students where student_code = trim(p_code) and coalesce(is_active, true) = true limit 1;

  if v_student_id is null then
    return jsonb_build_object('error', 'student_not_found');
  end if;

  select e.id into v_election_id
    from council_election_config e
    join council_candidates c on c.election_config_id = e.id
    where c.id = p_candidate_id and e.gender = v_gender
      and e.opens_at is not null and e.opens_at <= now()
      and (e.closes_at is null or e.closes_at > now());

  if v_election_id is null then
    return jsonb_build_object('error', 'election_not_open');
  end if;

  if exists (select 1 from council_votes where election_config_id = v_election_id and voter_student_id = v_student_id) then
    return jsonb_build_object('error', 'already_voted');
  end if;

  insert into council_votes (election_config_id, candidate_id, voter_student_id)
    values (v_election_id, p_candidate_id, v_student_id);

  return jsonb_build_object('ok', true);
end;
$$;

grant execute on function public.get_public_council_election_bundle(text) to anon, authenticated;
grant execute on function public.cast_public_council_vote(text, bigint) to anon, authenticated;
