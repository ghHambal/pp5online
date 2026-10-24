-- Correct the current council term, create the next term, and promote the
-- complete 2569 applicant roster to designate membership without closing the
-- current term. The change is intentionally idempotent.
do $$
declare
  v_current_term_id bigint;
  v_new_term_id bigint;
begin
  select id into v_current_term_id
  from public.council_terms
  where status = 'active'
  order by id desc
  limit 1
  for update;

  if v_current_term_id is null then
    raise exception 'active council term not found';
  end if;

  update public.council_terms
  set term_label = 'วาระ 2/68 – 1/69',
      academic_year = 2568,
      start_semester = 2,
      start_year = 2568,
      end_semester = 1,
      end_year = 2569,
      updated_at = now()
  where id = v_current_term_id;

  select id into v_new_term_id
  from public.council_terms
  where start_semester = 2 and start_year = 2569
    and end_semester = 1 and end_year = 2570
  order by id desc
  limit 1
  for update;

  if v_new_term_id is null then
    insert into public.council_terms (
      term_label, academic_year, start_semester, start_year,
      end_semester, end_year, status
    ) values (
      'วาระ 2/69 – 1/70', 2569, 2, 2569, 1, 2570, 'upcoming'
    ) returning id into v_new_term_id;
  else
    update public.council_terms
    set term_label = 'วาระ 2/69 – 1/70', academic_year = 2569,
        status = case when status = 'closed' then 'upcoming' else status end,
        updated_at = now()
    where id = v_new_term_id;
  end if;

  -- Operational records already attached to the serving council remain with
  -- the corrected current term and year.
  update public.council_members set academic_year = 2568, updated_at = now()
  where term_id = v_current_term_id;
  update public.council_activities set academic_year = 2568, updated_at = now()
  where term_id = v_current_term_id;
  update public.council_documents set academic_year = 2568, updated_at = now()
  where term_id = v_current_term_id;
  update public.council_evaluations set academic_year = 2568, updated_at = now()
  where term_id = v_current_term_id;
  update public.council_yla_events set academic_year = 2568, updated_at = now()
  where term_id = v_current_term_id;

  -- The 2569 recruitment and election data belongs to the upcoming term.
  update public.council_applications
  set term_id = v_new_term_id, academic_year = 2569, updated_at = now()
  where deleted_at is null and academic_year = 2569;
  update public.council_election_config
  set term_id = v_new_term_id, academic_year = 2569, updated_at = now()
  where academic_year = 2569 and results_published_at is null;

  insert into public.council_members (
    term_id, position_id, student_id, academic_year, source, status,
    term_start_date, appointment_method, appointment_reason
  )
  select
    v_new_term_id, a.position_id, a.student_id, 2569, 'appointed', 'designate',
    null, 'direct', 'บรรจุจากบัญชีผู้สมัครทั้งหมดเป็นว่าที่สภานักเรียน วาระ 2/69 – 1/70'
  from public.council_applications a
  where a.term_id = v_new_term_id and a.deleted_at is null
    and not exists (
      select 1 from public.council_members m
      where m.term_id = v_new_term_id and m.student_id = a.student_id
        and m.position_id = a.position_id and m.status in ('designate', 'active')
    );

  insert into public.council_candidates (
    election_config_id, application_id, student_id, ballot_number,
    campaign_statement, photo_url, status
  )
  select
    e.id, a.id, a.student_id,
    row_number() over (partition by e.id order by a.created_at, a.id)::integer,
    a.motivation, a.photo_url, 'draft'
  from public.council_applications a
  join public.council_positions p on p.id = a.position_id and p.is_elected = true
  join public.council_election_config e
    on e.term_id = v_new_term_id and e.gender = p.gender
  where a.term_id = v_new_term_id and a.deleted_at is null
    and not exists (
      select 1 from public.council_candidates c
      where c.election_config_id = e.id and c.student_id = a.student_id
    );

  update public.council_applications a
  set status = case when p.is_elected then 'candidate' else 'appointed' end,
      updated_at = now()
  from public.council_positions p
  where a.position_id = p.id and a.term_id = v_new_term_id
    and a.deleted_at is null;

  insert into public.council_member_audit_logs (
    term_id, member_id, action, after_data
  )
  select v_new_term_id, m.id, 'member_designated_from_2569_applicant_roster', to_jsonb(m)
  from public.council_members m
  where m.term_id = v_new_term_id
    and not exists (
      select 1 from public.council_member_audit_logs l
      where l.member_id = m.id and l.action = 'member_designated_from_2569_applicant_roster'
    );

  insert into public.system_config(key, value) values
    ('council_term_start_semester', '2'),
    ('council_term_start_year', '2568'),
    ('council_term_end_semester', '1'),
    ('council_term_end_year', '2569')
  on conflict (key) do update set value = excluded.value;
end;
$$;
