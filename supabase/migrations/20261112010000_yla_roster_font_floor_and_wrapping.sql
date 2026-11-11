-- Allow smaller YLA roster fonts; the client clamps to a positive value.
alter table public.council_yla_events
  drop constraint if exists council_yla_events_roster_font_size_check;
