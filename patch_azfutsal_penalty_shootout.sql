alter table public.azfutsal_matches
  add column if not exists is_penalty_shootout boolean not null default false,
  add column if not exists penalty_score_a integer,
  add column if not exists penalty_score_b integer;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'azfutsal_matches_penalty_scores_nonnegative'
      and conrelid = 'public.azfutsal_matches'::regclass
  ) then
    alter table public.azfutsal_matches
      add constraint azfutsal_matches_penalty_scores_nonnegative
      check (
        (penalty_score_a is null or penalty_score_a >= 0)
        and (penalty_score_b is null or penalty_score_b >= 0)
      ) not valid;
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'azfutsal_matches_penalty_shootout_valid'
      and conrelid = 'public.azfutsal_matches'::regclass
  ) then
    alter table public.azfutsal_matches
      add constraint azfutsal_matches_penalty_shootout_valid
      check (
        (
          is_penalty_shootout = false
          and penalty_score_a is null
          and penalty_score_b is null
        )
        or
        (
          is_penalty_shootout = true
          and score_a is not null
          and score_b is not null
          and score_a = score_b
          and penalty_score_a is not null
          and penalty_score_b is not null
          and penalty_score_a <> penalty_score_b
        )
      ) not valid;
  end if;
end $$;

alter table public.azfutsal_matches
  validate constraint azfutsal_matches_penalty_scores_nonnegative;

alter table public.azfutsal_matches
  validate constraint azfutsal_matches_penalty_shootout_valid;

comment on column public.azfutsal_matches.is_penalty_shootout is
  'True when a tied knockout match is decided by kicks from the penalty mark.';

comment on column public.azfutsal_matches.penalty_score_a is
  'Penalty shootout score for team A; excluded from goals and top-scorer statistics.';

comment on column public.azfutsal_matches.penalty_score_b is
  'Penalty shootout score for team B; excluded from goals and top-scorer statistics.';
