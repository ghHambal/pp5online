-- Per-activity print header and typography for YLA registration rosters.
alter table public.council_yla_events
  add column if not exists roster_title text,
  add column if not exists roster_subtitle text,
  add column if not exists roster_logo_url text,
  add column if not exists roster_font_size integer not null default 14,
  add column if not exists roster_columns jsonb;

alter table public.council_yla_events
  drop constraint if exists council_yla_events_roster_font_size_check,
  add constraint council_yla_events_roster_font_size_check
    check (roster_font_size between 12 and 18);
