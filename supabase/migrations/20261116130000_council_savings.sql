-- Council savings ledger: members can see their own history and the council total;
-- advisors and active heads of the treasurer department can manage the full term.

create table if not exists public.council_savings_transactions (
  id bigint generated always as identity primary key,
  term_id bigint not null references public.council_terms(id) on delete restrict,
  membership_id bigint not null references public.council_members(id) on delete restrict,
  entry_type text not null check (entry_type in ('deposit', 'reversal')),
  amount numeric(12,2) not null check (amount > 0),
  deposit_date date not null default (now() at time zone 'Asia/Bangkok')::date,
  week_start date not null,
  payment_method text not null default 'cash' check (payment_method in ('cash', 'transfer', 'other')),
  note text not null default '' check (char_length(note) <= 500),
  reversal_of_id bigint references public.council_savings_transactions(id) on delete restrict,
  recorded_by_profile_id uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  constraint council_savings_week_starts_monday check (extract(isodow from week_start) = 1),
  constraint council_savings_entry_reversal_shape check (
    (entry_type = 'deposit' and reversal_of_id is null)
    or (entry_type = 'reversal' and reversal_of_id is not null)
  )
);

create index if not exists council_savings_term_week_idx
  on public.council_savings_transactions(term_id, week_start desc, membership_id);
create unique index if not exists council_savings_one_reversal_per_entry_idx
  on public.council_savings_transactions(reversal_of_id)
  where reversal_of_id is not null;

alter table public.council_savings_transactions enable row level security;
revoke all on public.council_savings_transactions from anon, authenticated;
grant select on public.council_savings_transactions to authenticated;

create or replace function public.can_manage_council_savings(p_term_id bigint)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select auth.uid() is not null and (
    public.is_council_staff()
    or exists (
      select 1
      from public.students s
      join public.council_members cm on cm.student_id = s.id
      join public.council_positions cp on cp.id = cm.position_id
      where s.profile_id = auth.uid()
        and cm.term_id = p_term_id
        and cm.status = 'active'
        and cm.position_role = 'head'
        and cp.position_name ilike '%เหรัญญิก%'
    )
  );
$$;
revoke all on function public.can_manage_council_savings(bigint) from public, anon;
grant execute on function public.can_manage_council_savings(bigint) to authenticated;

create or replace function public.can_view_council_savings(p_term_id bigint, p_membership_id bigint)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select auth.uid() is not null and (
    public.can_manage_council_savings(p_term_id)
    or exists (
      select 1
      from public.council_members cm
      join public.students s on s.id = cm.student_id
      where cm.id = p_membership_id
        and cm.term_id = p_term_id
        and cm.status = 'active'
        and s.profile_id = auth.uid()
    )
  );
$$;
revoke all on function public.can_view_council_savings(bigint, bigint) from public, anon;
grant execute on function public.can_view_council_savings(bigint, bigint) to authenticated;

create policy council_savings_read_authorized
  on public.council_savings_transactions
  for select to authenticated
  using (public.can_view_council_savings(term_id, membership_id));

create or replace function public.get_council_savings_overview(p_term_id bigint)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_manager boolean;
  v_week_start date := date_trunc('week', (now() at time zone 'Asia/Bangkok')::date::timestamp)::date;
  v_total numeric(14,2);
  v_week_total numeric(14,2);
  v_contributors integer;
  v_members jsonb := '[]'::jsonb;
  v_transactions jsonb := '[]'::jsonb;
  v_my_member_id bigint;
begin
  if v_uid is null then raise exception 'authentication required'; end if;

  v_manager := public.can_manage_council_savings(p_term_id);
  select cm.id into v_my_member_id
  from public.council_members cm
  join public.students s on s.id = cm.student_id
  where cm.term_id = p_term_id and cm.status = 'active' and s.profile_id = v_uid
  order by cm.id limit 1;
  if not v_manager and v_my_member_id is null then raise exception 'not authorized'; end if;

  select coalesce(sum(case when x.entry_type = 'deposit' then x.amount else -x.amount end), 0)::numeric(14,2)
    into v_total
  from public.council_savings_transactions x where x.term_id = p_term_id;
  select coalesce(sum(w.net_amount), 0)::numeric(14,2), count(*) filter (where w.net_amount > 0)::integer
    into v_week_total, v_contributors
  from (
    select x.membership_id,
      sum(case when x.entry_type = 'deposit' then x.amount else -x.amount end) as net_amount
    from public.council_savings_transactions x
    where x.term_id = p_term_id and x.week_start = v_week_start
    group by x.membership_id
  ) w;

  if v_manager then
    select coalesce(jsonb_agg(to_jsonb(m) order by m.full_name), '[]'::jsonb)
      into v_members
    from (
      select cm.id as membership_id, cm.student_id, s.full_name, s.student_code, s.main_room,
        cp.position_name, cm.position_role,
        coalesce(sum(case when x.entry_type = 'deposit' then x.amount else -x.amount end), 0)::numeric(14,2) as total_amount,
        coalesce(sum(case when x.week_start = v_week_start then case when x.entry_type = 'deposit' then x.amount else -x.amount end else 0 end), 0)::numeric(14,2) as this_week_amount
      from public.council_members cm
      join public.students s on s.id = cm.student_id
      join public.council_positions cp on cp.id = cm.position_id
      left join public.council_savings_transactions x on x.membership_id = cm.id and x.term_id = p_term_id
      where cm.term_id = p_term_id and cm.status = 'active'
      group by cm.id, cm.student_id, s.full_name, s.student_code, s.main_room, cp.position_name, cm.position_role
    ) m;
  end if;

  select coalesce(jsonb_agg(to_jsonb(t) order by t.deposit_date desc, t.created_at desc), '[]'::jsonb)
    into v_transactions
  from (
    select x.id, x.membership_id, x.entry_type, x.amount, x.deposit_date, x.week_start,
      x.payment_method, x.note, x.reversal_of_id, x.recorded_by_profile_id,
      coalesce(recorder.full_name, p.user_code, 'ผู้บันทึก') as recorded_by_name,
      x.created_at, s.full_name as student_name, s.student_code
    from public.council_savings_transactions x
    join public.council_members cm on cm.id = x.membership_id
    join public.students s on s.id = cm.student_id
    left join public.profiles p on p.id = x.recorded_by_profile_id
    left join public.teachers recorder on recorder.profile_id = x.recorded_by_profile_id
    where x.term_id = p_term_id and (v_manager or x.membership_id = v_my_member_id)
    order by x.deposit_date desc, x.created_at desc
    limit 500
  ) t;

  return jsonb_build_object(
    'term_id', p_term_id,
    'week_start', v_week_start,
    'total_amount', v_total,
    'this_week_amount', v_week_total,
    'contributors_this_week', v_contributors,
    'member_count', (select count(*) from public.council_members cm where cm.term_id=p_term_id and cm.status='active'),
    'is_manager', v_manager,
    'my_membership_id', v_my_member_id,
    'members', v_members,
    'transactions', v_transactions
  );
end;
$$;
revoke all on function public.get_council_savings_overview(bigint) from public, anon;
grant execute on function public.get_council_savings_overview(bigint) to authenticated;

create or replace function public.record_council_savings_deposit(
  p_term_id bigint,
  p_membership_id bigint,
  p_amount numeric,
  p_deposit_date date,
  p_payment_method text,
  p_note text default ''
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_id bigint;
begin
  if auth.uid() is null or not public.can_manage_council_savings(p_term_id) then
    raise exception 'not authorized';
  end if;
  if p_amount is null or p_amount <= 0 or p_amount > 100000 then raise exception 'invalid amount'; end if;
  if coalesce(p_payment_method, '') not in ('cash', 'transfer', 'other') then raise exception 'invalid payment method'; end if;
  if char_length(coalesce(p_note, '')) > 500 then raise exception 'note is too long'; end if;
  if not exists (
    select 1 from public.council_members cm
    where cm.id = p_membership_id and cm.term_id = p_term_id and cm.status = 'active'
  ) then raise exception 'active council member not found'; end if;
  if not exists (select 1 from public.council_terms t where t.id=p_term_id and t.status in ('active','upcoming')) then
    raise exception 'savings can only be recorded for an active or upcoming term';
  end if;

  insert into public.council_savings_transactions(
    term_id, membership_id, entry_type, amount, deposit_date, week_start,
    payment_method, note, recorded_by_profile_id
  ) values (
    p_term_id, p_membership_id, 'deposit', p_amount, coalesce(p_deposit_date, (now() at time zone 'Asia/Bangkok')::date),
    date_trunc('week', coalesce(p_deposit_date, (now() at time zone 'Asia/Bangkok')::date)::timestamp)::date,
    p_payment_method, coalesce(p_note, ''), auth.uid()
  ) returning id into v_id;
  return v_id;
end;
$$;
revoke all on function public.record_council_savings_deposit(bigint, bigint, numeric, date, text, text) from public, anon;
grant execute on function public.record_council_savings_deposit(bigint, bigint, numeric, date, text, text) to authenticated;

create or replace function public.reverse_council_savings_deposit(p_transaction_id bigint, p_reason text)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_original public.council_savings_transactions%rowtype;
  v_id bigint;
begin
  select * into v_original from public.council_savings_transactions where id=p_transaction_id;
  if not found then raise exception 'savings transaction not found'; end if;
  if auth.uid() is null or not public.can_manage_council_savings(v_original.term_id) then
    raise exception 'not authorized';
  end if;
  if v_original.entry_type <> 'deposit' then raise exception 'only a deposit can be reversed'; end if;
  if exists (select 1 from public.council_savings_transactions where reversal_of_id=v_original.id) then
    raise exception 'deposit already reversed';
  end if;
  if char_length(btrim(coalesce(p_reason, ''))) < 3 or char_length(p_reason) > 500 then
    raise exception 'a reversal reason is required';
  end if;

  insert into public.council_savings_transactions(
    term_id, membership_id, entry_type, amount, deposit_date, week_start,
    payment_method, note, reversal_of_id, recorded_by_profile_id
  ) values (
    v_original.term_id, v_original.membership_id, 'reversal', v_original.amount,
    v_original.deposit_date, v_original.week_start, v_original.payment_method,
    'ยกเลิกรายการ #' || v_original.id || ': ' || btrim(p_reason), v_original.id, auth.uid()
  ) returning id into v_id;
  return v_id;
end;
$$;
revoke all on function public.reverse_council_savings_deposit(bigint, text) from public, anon;
grant execute on function public.reverse_council_savings_deposit(bigint, text) to authenticated;
