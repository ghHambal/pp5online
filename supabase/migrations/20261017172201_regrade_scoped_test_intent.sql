create policy regrade_subjects_test_student_declare on public.regrade_subjects
for update to authenticated
using (
 status = 'ยังไม่แจ้ง'
 and exists (
 select 1 from public.students s
 where s.id = regrade_subjects.student_id and s.profile_id = (select auth.uid())
 and coalesce((select value from public.regrade_config where key='intent_test_subjects')->s.id::text,'[]'::jsonb)
 @> jsonb_build_array(regrade_subjects.id)
 )
)
with check (
 status = 'จำนงแล้ว'
 and exists (
 select 1 from public.students s
 where s.id = regrade_subjects.student_id and s.profile_id = (select auth.uid())
 and coalesce((select value from public.regrade_config where key='intent_test_subjects')->s.id::text,'[]'::jsonb)
 @> jsonb_build_array(regrade_subjects.id)
 )
);
