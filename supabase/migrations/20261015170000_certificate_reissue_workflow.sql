-- เก็บประวัติการออกเดิมไว้ และออกใบใหม่จาก layout ปัจจุบันของเทมเพลตแบบ atomic
alter table public.certificates
  add column if not exists reissued_from_id bigint references public.certificates(id) on delete set null,
  add column if not exists superseded_by_id bigint references public.certificates(id) on delete set null,
  add column if not exists superseded_at timestamptz;

create index if not exists certificates_reissued_from_id_idx
  on public.certificates (reissued_from_id);

create index if not exists certificates_superseded_by_id_idx
  on public.certificates (superseded_by_id);

create or replace function public.reissue_certificates(
  p_certificate_ids bigint[],
  p_issued_by_teacher_id integer
)
returns setof public.certificates
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_id bigint;
  v_original public.certificates%rowtype;
  v_template public.certificate_templates%rowtype;
  v_new public.certificates%rowtype;
begin
  for v_id in
    select distinct certificate_id
    from unnest(coalesce(p_certificate_ids, '{}'::bigint[])) as ids(certificate_id)
    order by certificate_id
  loop
    select * into v_original
    from public.certificates
    where id = v_id
      and issued_by_teacher_id = p_issued_by_teacher_id
      and superseded_by_id is null;

    if not found then
      raise exception 'ไม่พบเกียรติบัตรที่ยังใช้งานอยู่ หรือไม่มีสิทธิ์ออกใหม่: %', v_id;
    end if;

    select * into v_template
    from public.certificate_templates
    where id = v_original.template_id;

    if not found then
      raise exception 'ไม่พบ Template ปัจจุบันของเกียรติบัตร: %', v_id;
    end if;

    insert into public.certificates (
      template_id, layout_snapshot, variables, recipient_type, student_id,
      teacher_id, recipient_name, title, issued_by_teacher_id,
      source_system, source_ref_id, issued_at, reissued_from_id
    ) values (
      v_original.template_id, v_template.layout, v_original.variables, v_original.recipient_type, v_original.student_id,
      v_original.teacher_id, v_original.recipient_name, v_original.title, p_issued_by_teacher_id,
      v_original.source_system, v_original.source_ref_id, now(), v_original.id
    ) returning * into v_new;

    update public.certificates
    set superseded_by_id = v_new.id,
        superseded_at = now()
    where id = v_original.id;

    return next v_new;
  end loop;
end;
$$;

revoke all on function public.reissue_certificates(bigint[], integer) from public, anon;
grant execute on function public.reissue_certificates(bigint[], integer) to authenticated;
