-- These RPCs operate only for authenticated department heads or the explicitly
-- authorized admin. Remove the legacy explicit anon grants as well as PUBLIC.
revoke all on function public.assign_regrade_subject_teacher_bulk(text, text, integer) from public, anon;
revoke all on function public.assign_regrade_subject_teacher_by_ids(bigint[], integer) from public, anon;
grant execute on function public.assign_regrade_subject_teacher_bulk(text, text, integer) to authenticated;
grant execute on function public.assign_regrade_subject_teacher_by_ids(bigint[], integer) to authenticated;
