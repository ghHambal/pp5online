-- Persist roster and activity-title typography per YLA event.
alter table public.council_yla_events
  add column if not exists roster_font_family text not null default 'tahoma',
  add column if not exists roster_title_font_family text not null default 'tahoma',
  add column if not exists roster_title_weight integer not null default 700;

alter table public.council_yla_events
  drop constraint if exists council_yla_events_roster_font_family_check,
  add constraint council_yla_events_roster_font_family_check
    check (roster_font_family in ('tahoma', 'sarabun', 'noto_sans_thai', 'arial', 'th_sarabun_new')),
  drop constraint if exists council_yla_events_roster_title_font_family_check,
  add constraint council_yla_events_roster_title_font_family_check
    check (roster_title_font_family in ('tahoma', 'sarabun', 'noto_sans_thai', 'arial', 'th_sarabun_new')),
  drop constraint if exists council_yla_events_roster_title_weight_check,
  add constraint council_yla_events_roster_title_weight_check
    check (roster_title_weight in (400, 500, 600, 700, 800, 900));
