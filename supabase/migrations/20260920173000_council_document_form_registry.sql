-- Council document form registry and immutable approved snapshot
-- Extends the existing council_documents workflow without creating a second document table.

alter table public.council_documents
  add column if not exists form_key text not null default 'FORM_09_1_PROJECT_PROPOSAL',
  add column if not exists form_version integer not null default 1,
  add column if not exists document_revision integer not null default 1,
  add column if not exists approved_snapshot jsonb,
  add column if not exists approved_snapshot_at timestamptz,
  add column if not exists approved_snapshot_by_teacher_id integer references public.teachers(id) on delete set null;

alter table public.council_documents
  drop constraint if exists council_documents_form_version_check;
alter table public.council_documents
  add constraint council_documents_form_version_check check (form_version > 0);

alter table public.council_documents
  drop constraint if exists council_documents_revision_check;
alter table public.council_documents
  add constraint council_documents_revision_check check (document_revision > 0);

create index if not exists council_documents_form_status_year_idx
  on public.council_documents (academic_year, form_key, status, updated_at desc);

create or replace function public.council_documents_capture_approved_snapshot()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if tg_op = 'UPDATE' and old.status = 'approved' then
    if new is distinct from old then
      raise exception 'approved council document is immutable; create a new revision';
    end if;
    return new;
  end if;

  if new.status = 'approved' and (tg_op = 'INSERT' or old.status <> 'approved') then
    new.approved_snapshot_at := coalesce(new.approved_snapshot_at, now());
    new.approved_snapshot_by_teacher_id := coalesce(
      new.approved_snapshot_by_teacher_id,
      new.director_decided_by_teacher_id,
      new.dept_head_decided_by_teacher_id,
      new.advisor_decided_by_teacher_id
    );
    new.approved_snapshot := to_jsonb(new);
  end if;
  return new;
end;
$$;

drop trigger if exists council_documents_capture_approved_snapshot on public.council_documents;
create trigger council_documents_capture_approved_snapshot
before insert or update on public.council_documents
for each row execute function public.council_documents_capture_approved_snapshot();
