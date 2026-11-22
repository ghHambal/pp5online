do $$
declare
  v_definition text;
begin
  select pg_get_functiondef('public.asr_prayer_admin_data()'::regprocedure)
    into v_definition;
  if position('order by s.student_id' in v_definition) = 0 then
    raise exception 'Expected Asr admin data sort expression was not found';
  end if;
  execute replace(v_definition, 'order by s.student_id', 'order by a.student_id');
end $$;
