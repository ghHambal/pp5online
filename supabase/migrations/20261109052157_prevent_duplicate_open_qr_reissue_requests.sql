-- Preserve historical duplicate requests, but serialize every new student
-- request and prevent authenticated clients from inserting around the RPC.
drop policy if exists qr_reissue_requests_student_insert
  on public.qr_reissue_requests;
revoke insert on table public.qr_reissue_requests from public, anon, authenticated;

-- Create the feedback thread and QR request atomically. The advisory lock and
-- the subsequent duplicate check are separate SQL statements, so a concurrent
-- request sees the first transaction's committed request before proceeding.
create or replace function public.submit_qr_reissue_request(
  p_student_id integer,
  p_sender_name text
)
returns bigint
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_profile_id uuid := auth.uid();
  v_feedback_id bigint;
  v_request_id bigint;
begin
  if v_profile_id is null then
    raise exception 'Authentication required' using errcode = '42501';
  end if;

  if not exists (
    select 1
    from public.students s
    where s.id = p_student_id
      and s.profile_id = v_profile_id
  ) then
    raise exception 'Student profile does not match the signed-in user' using errcode = '42501';
  end if;

  perform pg_advisory_xact_lock(hashtext('qr_reissue_requests'), p_student_id);

  if exists (
    select 1
    from public.qr_reissue_requests r
    where r.student_id = p_student_id
      and r.picked_up_at is null
  ) then
    raise exception 'QR_REISSUE_REQUEST_ALREADY_OPEN'
      using errcode = '23505',
            detail = 'Student already has an open QR reissue request.';
  end if;

  insert into public.app_feedback (profile_id, sender_role, sender_name, category, message)
  values (
    v_profile_id,
    'student',
    coalesce(nullif(btrim(p_sender_name), ''), 'นักเรียน'),
    'qr_card_request',
    'แจ้งขอทำบัตร QR Code ใหม่'
  )
  returning id into v_feedback_id;

  insert into public.qr_reissue_requests (student_id, feedback_id)
  values (p_student_id, v_feedback_id)
  returning id into v_request_id;

  return v_request_id;
end;
$$;

revoke all on function public.submit_qr_reissue_request(integer, text) from public, anon;
grant execute on function public.submit_qr_reissue_request(integer, text) to authenticated;
