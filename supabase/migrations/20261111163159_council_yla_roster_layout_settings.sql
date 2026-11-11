-- Persist page orientation and row sizing for activity registration rosters.
alter table public.council_yla_events
  add column if not exists roster_row_height integer not null default 34,
  add column if not exists roster_page_size text not null default 'portrait';

alter table public.council_yla_events
  drop constraint if exists council_yla_events_roster_row_height_check,
  add constraint council_yla_events_roster_row_height_check
    check (roster_row_height between 24 and 90),
  drop constraint if exists council_yla_events_roster_page_size_check,
  add constraint council_yla_events_roster_page_size_check
    check (roster_page_size in ('portrait', 'landscape'));
