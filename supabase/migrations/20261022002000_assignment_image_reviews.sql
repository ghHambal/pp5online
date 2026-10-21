-- Image reviews are separate from the student's original submission.
create table public.assignment_image_reviews (
 id bigint generated always as identity primary key,
 submission_id bigint not null references public.assignment_submissions(id) on delete cascade,
 source_url text not null check (length(source_url) between 1 and 2048),
 source_submitted_at timestamptz not null,
 strokes jsonb not null default '[]'::jsonb check (jsonb_typeof(strokes) = 'array' and octet_length(strokes::text) <= 2000000),
 version integer not null default 1,
 published_path text,
 published_at timestamptz,
 updated_at timestamptz not null default now(),
 updated_by uuid not null references public.profiles(id),
 unique (submission_id, source_submitted_at, source_url)
);
alter table public.assignment_image_reviews enable row level security;
revoke all on public.assignment_image_reviews from anon, authenticated;
create policy review_rpc_only on public.assignment_image_reviews for all to authenticated using (false) with check (false);

create or replace function public.can_manage_assignment_image_review(p_submission_id bigint)
returns boolean language sql stable security definer set search_path = public as $$
 select auth.uid() is not null and (
 exists (select 1 from public.profiles p where p.id=auth.uid() and (p.role='admin' or p.is_also_admin))
 or exists (select 1 from public.assignment_submissions s
 join public.class_assignments a on a.id=s.assignment_id
 join public.classes c on c.id=a.class_id
 join public.master_subjects ms on ms.id=c.course_id
 join public.teachers t on t.id=ms.teacher_id
 where s.id=p_submission_id and t.profile_id=auth.uid())
 );
$$;
revoke all on function public.can_manage_assignment_image_review(bigint) from public, anon;
grant execute on function public.can_manage_assignment_image_review(bigint) to authenticated;

create or replace function public.get_assignment_image_reviews(p_submission_ids bigint[])
returns table(id bigint, submission_id bigint, source_url text, source_submitted_at timestamptz,
 strokes jsonb, version integer, published_path text, published_at timestamptz, updated_at timestamptz)
language sql stable security definer set search_path = public as $$
 select r.id,r.submission_id,r.source_url,r.source_submitted_at,
 case when public.can_manage_assignment_image_review(r.submission_id) then r.strokes else null end,
 case when public.can_manage_assignment_image_review(r.submission_id) then r.version else null end,
 r.published_path,r.published_at,r.updated_at
 from public.assignment_image_reviews r
 where auth.uid() is not null and r.submission_id=any(p_submission_ids)
 and (public.can_manage_assignment_image_review(r.submission_id)
 or (r.published_path is not null and exists (
 select 1 from public.assignment_submissions s join public.students st on st.id=s.student_id
 where s.id=r.submission_id and st.profile_id=auth.uid())))
 order by r.source_submitted_at desc, r.id;
$$;
revoke all on function public.get_assignment_image_reviews(bigint[]) from public, anon;
grant execute on function public.get_assignment_image_reviews(bigint[]) to authenticated;

create or replace function public.save_assignment_image_review(
 p_submission_id bigint, p_source_url text, p_source_submitted_at timestamptz,
 p_strokes jsonb, p_expected_version integer, p_published_path text default null)
returns public.assignment_image_reviews
language plpgsql security definer set search_path = public as $$
declare s public.assignment_submissions; r public.assignment_image_reviews;
begin
 if not public.can_manage_assignment_image_review(p_submission_id) then
  raise exception 'ไม่มีสิทธิ์ตรวจงานนี้' using errcode='42501';
 end if;
 select * into s from public.assignment_submissions where id=p_submission_id for update;
 if not found or s.submitted_at is distinct from p_source_submitted_at
 or not exists(select 1 from jsonb_array_elements(coalesce(s.file_urls,'[]'::jsonb)) f where f->>'url'=p_source_url) then
  raise exception 'นักเรียนส่งงานใหม่แล้ว กรุณาปิดและเปิดงานรอบล่าสุดก่อนตรวจ';
 end if;
 if jsonb_typeof(p_strokes) is distinct from 'array' or octet_length(p_strokes::text)>2000000 or jsonb_array_length(p_strokes)>20000 then
  raise exception 'ข้อมูลลายเส้นไม่ถูกต้องหรือมีขนาดใหญ่เกินไป';
 end if;
 select * into r from public.assignment_image_reviews where submission_id=p_submission_id
 and source_url=p_source_url and source_submitted_at=p_source_submitted_at for update;
 if coalesce(r.version,0) is distinct from p_expected_version then
  raise exception 'ผลตรวจถูกแก้ไขจากอีกหน้าต่างแล้ว กรุณาเปิดใหม่ก่อนบันทึก';
 end if;
 if p_published_path is not null and not exists(
 select 1 from storage.objects o where o.bucket_id='assignment-reviews' and o.name=p_published_path
 and (storage.foldername(o.name))[1]=auth.uid()::text
 and (storage.foldername(o.name))[2]=p_submission_id::text
 ) then raise exception 'ไม่พบไฟล์ฉบับตรวจที่อัปโหลด'; end if;
 insert into public.assignment_image_reviews(submission_id,source_url,source_submitted_at,strokes,updated_by,published_path,published_at)
 values(p_submission_id,p_source_url,p_source_submitted_at,p_strokes,auth.uid(),p_published_path,case when p_published_path is not null then now() end)
 on conflict(submission_id,source_submitted_at,source_url) do update set
 strokes=excluded.strokes,version=assignment_image_reviews.version+1,updated_at=now(),updated_by=auth.uid(),
 published_path=coalesce(excluded.published_path,assignment_image_reviews.published_path),
 published_at=coalesce(excluded.published_at,assignment_image_reviews.published_at)
 returning * into r;
 return r;
end;
$$;
revoke all on function public.save_assignment_image_review(bigint,text,timestamptz,jsonb,integer,text) from public, anon;
grant execute on function public.save_assignment_image_review(bigint,text,timestamptz,jsonb,integer,text) to authenticated;

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('assignment-reviews','assignment-reviews',false,15728640,array['image/png']);
create policy review_image_teacher_upload on storage.objects for insert to authenticated with check (
 bucket_id='assignment-reviews' and (storage.foldername(name))[1]=auth.uid()::text
 and case when (storage.foldername(name))[2] ~ '^[0-9]{1,18}$'
 then public.can_manage_assignment_image_review(((storage.foldername(name))[2])::bigint) else false end
);
create policy review_image_authorized_read on storage.objects for select to authenticated using (
 bucket_id='assignment-reviews' and (
 ((storage.foldername(name))[1]=auth.uid()::text and case when (storage.foldername(name))[2] ~ '^[0-9]{1,18}$'
 then public.can_manage_assignment_image_review(((storage.foldername(name))[2])::bigint) else false end)
 or exists(select 1 from public.get_assignment_image_reviews(array[
 case when (storage.foldername(name))[2] ~ '^[0-9]{1,18}$' then ((storage.foldername(name))[2])::bigint end
 ]) r where r.published_path=name)
 ));
