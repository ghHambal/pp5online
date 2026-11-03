create or replace function public.prevent_regrade_intent_without_teacher()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if new.status = 'จำนงแล้ว'
     and new.teacher_id is null
     and (tg_op = 'INSERT' or old.status is distinct from new.status) then
    raise exception using
      errcode = '23514',
      message = 'รายวิชายังไม่มีครูผู้สอน กรุณารอหรือติดต่อหัวหน้ากลุ่มสาระให้มอบหมายครูก่อนแจ้งความจำนง';
  end if;
  return new;
end;
$$;

revoke all on function public.prevent_regrade_intent_without_teacher() from public, anon, authenticated;

drop trigger if exists prevent_regrade_intent_without_teacher on public.regrade_subjects;
create trigger prevent_regrade_intent_without_teacher
  before insert or update of status, teacher_id
  on public.regrade_subjects
  for each row
  execute function public.prevent_regrade_intent_without_teacher();
