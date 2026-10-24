drop policy if exists council_candidates_public_read on public.council_candidates;
drop policy if exists council_candidates_published_or_staff_read on public.council_candidates;

create policy council_candidates_published_or_staff_read
  on public.council_candidates for select to authenticated
  using (status in ('published', 'elected') or public.is_council_staff());
