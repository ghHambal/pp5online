-- AZFUTSALCUP: ใบเสร็จรับเงินคืนค่าประกันทีม
-- เก็บ snapshot ตอนผู้จัดยืนยัน เพื่อให้ยอดและรายละเอียดในใบเสร็จไม่เปลี่ยนย้อนหลัง

create sequence if not exists public.azfutsal_refund_receipt_seq;

create table if not exists public.azfutsal_refunds (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.azfutsal_teams(id) on delete cascade,
  payment_id uuid not null references public.azfutsal_payments(id) on delete restrict,
  receipt_no text not null unique,
  deposit_amount numeric not null check (deposit_amount >= 0),
  operation_fee numeric not null check (operation_fee >= 0),
  yellow_count integer not null default 0 check (yellow_count >= 0),
  yellow_rate numeric not null default 0 check (yellow_rate >= 0),
  yellow_deduction numeric not null default 0 check (yellow_deduction >= 0),
  red_count integer not null default 0 check (red_count >= 0),
  red_rate numeric not null default 0 check (red_rate >= 0),
  red_deduction numeric not null default 0 check (red_deduction >= 0),
  refund_amount numeric not null check (refund_amount >= 0),
  deduction_snapshot jsonb not null default '[]'::jsonb check (jsonb_typeof(deduction_snapshot) = 'array'),
  logo_url text,
  confirmed_by uuid references public.profiles(id) on delete set null,
  confirmed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (team_id),
  unique (payment_id)
);

create or replace function public.azfutsal_refund_receipt_no()
returns trigger
language plpgsql
set search_path = public
as $$
declare
  thai_year integer;
begin
  if new.receipt_no is null or btrim(new.receipt_no) = '' then
    thai_year := extract(year from timezone('Asia/Bangkok', coalesce(new.confirmed_at, now())))::integer + 543;
    new.receipt_no := 'AZRF-' || thai_year::text || '-' || lpad(nextval('public.azfutsal_refund_receipt_seq')::text, 4, '0');
  end if;
  return new;
end;
$$;

drop trigger if exists azfutsal_refunds_receipt_no on public.azfutsal_refunds;
create trigger azfutsal_refunds_receipt_no
before insert on public.azfutsal_refunds
for each row execute function public.azfutsal_refund_receipt_no();

alter table public.azfutsal_refunds enable row level security;

drop policy if exists azfutsal_refunds_public_read on public.azfutsal_refunds;
create policy azfutsal_refunds_public_read
on public.azfutsal_refunds for select
using (true);

drop policy if exists azfutsal_refunds_admin_insert on public.azfutsal_refunds;
create policy azfutsal_refunds_admin_insert
on public.azfutsal_refunds for insert
with check (
  public.is_azfutsal_admin()
  and confirmed_by = (select auth.uid())
  and exists (
    select 1
    from public.azfutsal_payments payment
    where payment.id = azfutsal_refunds.payment_id
      and payment.team_id = azfutsal_refunds.team_id
      and payment.status = 'verified'
  )
);

revoke select on public.azfutsal_refunds from anon, authenticated;
grant select (
  id, team_id, receipt_no, deposit_amount, operation_fee,
  yellow_count, yellow_rate, yellow_deduction,
  red_count, red_rate, red_deduction, refund_amount,
  deduction_snapshot, logo_url, confirmed_at, created_at
) on public.azfutsal_refunds to anon, authenticated;
grant insert on public.azfutsal_refunds to authenticated;
grant usage, select on sequence public.azfutsal_refund_receipt_seq to authenticated;

drop index if exists public.azfutsal_refunds_confirmed_at_idx;
create index if not exists azfutsal_refunds_confirmed_by_idx
on public.azfutsal_refunds (confirmed_by);

comment on table public.azfutsal_refunds is
'Snapshot ใบเสร็จรับเงินคืนค่าประกันทีมหลังผู้จัดยืนยัน โดย deduction_snapshot ไม่มีข้อมูลรายบุคคล';
