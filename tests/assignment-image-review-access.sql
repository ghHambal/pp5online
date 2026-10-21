-- All changes, including test Storage metadata, are rolled back.
begin;
create temp table review_test_context as
select s.id as submission_id,s.submitted_at, f->>'url' as source_url,t.profile_id as teacher_profile,st.profile_id as student_profile,
 (select t2.profile_id from teachers t2 join profiles p on p.id=t2.profile_id where t2.id<>t.id and p.role<>'admin' and not coalesce(p.is_also_admin,false) limit 1) as other_teacher,
 (select s2.profile_id from students s2 where s2.id<>st.id and s2.profile_id is not null limit 1) as other_student
from assignment_submissions s join class_assignments a on a.id=s.assignment_id
join classes c on c.id=a.class_id join master_subjects ms on ms.id=c.course_id
join teachers t on t.id=ms.teacher_id join students st on st.id=s.student_id
cross join lateral jsonb_array_elements(s.file_urls) f
where t.profile_id is not null and st.profile_id is not null
and f->>'url' ~* '\.(png|jpg|jpeg|webp)(\?|$)'
limit 1;
create temp table review_test_results(label text, passed boolean);
grant select on review_test_context to authenticated;
grant select,insert on review_test_results to authenticated;
set local role authenticated;
select set_config('request.jwt.claim.sub',(select teacher_profile::text from review_test_context),true);
do $$ declare c record; r record; begin
 select * into strict c from review_test_context;
 select * into r from save_assignment_image_review(c.submission_id,c.source_url,c.submitted_at,'[{"type":"pen","points":[[0.1,0.2]],"color":"#dc2626","width":0.004}]'::jsonb,0,null);
 if r.version<>1 then raise exception 'draft failed'; end if;
 insert into review_test_results values('teacher can save draft',true);
 begin
  perform save_assignment_image_review(c.submission_id,c.source_url,c.submitted_at,'[]',0,null);
  raise exception 'CAS failed to reject';
 exception when raise_exception then if sqlerrm not like '%อีกหน้าต่าง%' then raise; end if; end;
 insert into review_test_results values('conflicting editor rejected',true);
 begin
  perform save_assignment_image_review(c.submission_id,c.source_url,c.submitted_at+interval '1 second','[]',1,null);
  raise exception 'revision check failed';
 exception when raise_exception then if sqlerrm not like '%ส่งงานใหม่%' then raise; end if; end;
 insert into review_test_results values('wrong submission revision rejected',true);
 begin
  perform * from public.assignment_image_reviews;
  raise exception 'direct table access allowed';
 exception when insufficient_privilege then null; end;
 insert into review_test_results values('direct table access denied',true);
end $$;
select set_config('request.jwt.claim.sub',(select student_profile::text from review_test_context),true);
do $$ declare c record; begin
 select * into c from review_test_context;
 if exists(select 1 from get_assignment_image_reviews(array[c.submission_id])) then raise exception 'draft leaked to student'; end if;
 begin
  perform save_assignment_image_review(c.submission_id,c.source_url,c.submitted_at,'[]',1,null);
  raise exception 'student write allowed';
 exception when insufficient_privilege then null; end;
 insert into review_test_results values('student cannot see drafts or write reviews',true);
end $$;
reset role;
insert into storage.objects(bucket_id,name)
select 'assignment-reviews',teacher_profile::text||'/'||submission_id::text||'/transactional-review-test.png' from review_test_context;
set local role authenticated;
select set_config('request.jwt.claim.sub',(select teacher_profile::text from review_test_context),true);
do $$ declare c record; r record; begin
 select * into c from review_test_context;
 select * into r from save_assignment_image_review(c.submission_id,c.source_url,c.submitted_at,'[]',1,c.teacher_profile::text||'/'||c.submission_id::text||'/transactional-review-test.png');
 if r.published_path is null or r.published_at is null or r.version<>2 then raise exception 'publish failed'; end if;
 -- Editing a draft after publishing must preserve the previously published image.
 select * into r from save_assignment_image_review(c.submission_id,c.source_url,c.submitted_at,'[{"type":"text","x":0.2,"y":0.3,"text":"private draft","color":"#dc2626","width":0.004}]',2,null);
 if r.published_path is null or r.version<>3 then raise exception 'draft replaced published image'; end if;
 insert into review_test_results values('publish and subsequent draft preserve published image',true);
end $$;
select set_config('request.jwt.claim.sub',(select student_profile::text from review_test_context),true);
do $$ declare c record; r record; begin
 select * into c from review_test_context;
 select * into strict r from get_assignment_image_reviews(array[c.submission_id]);
 if r.strokes is not null or r.version is not null or r.published_path is null then raise exception 'private draft data leaked'; end if;
 if not exists(select 1 from storage.objects where bucket_id='assignment-reviews' and name=r.published_path) then raise exception 'student cannot read own reviewed image'; end if;
 insert into review_test_results values('student sees published image but no private draft',true);
end $$;
select set_config('request.jwt.claim.sub',(select other_student::text from review_test_context),true);
do $$ declare c record; begin
 select * into c from review_test_context;
 if exists(select 1 from get_assignment_image_reviews(array[c.submission_id])) then raise exception 'review leaked to other student'; end if;
 if exists(select 1 from storage.objects where bucket_id='assignment-reviews' and name like '%/transactional-review-test.png') then raise exception 'image leaked to other student'; end if;
 insert into review_test_results values('other student cannot read review or image',true);
end $$;
select set_config('request.jwt.claim.sub',(select other_teacher::text from review_test_context),true);
do $$ declare c record; begin
 select * into c from review_test_context;
 if public.can_manage_assignment_image_review(c.submission_id) then raise exception 'other teacher has access'; end if;
 begin
  perform save_assignment_image_review(c.submission_id,c.source_url,c.submitted_at,'[]',3,null);
  raise exception 'other teacher wrote review';
 exception when insufficient_privilege then null; end;
 insert into review_test_results values('unrelated teacher cannot edit review',true);
end $$;
reset role;
select jsonb_agg(to_jsonb(r)) as results from review_test_results r;
rollback;
