-- Keep one outstanding-athlete award per student in each sport/event.
-- The partial index preserves legacy rows that have no resolved student or sport.
create unique index if not exists outstanding_athletes_event_sport_student_uidx
  on public.outstanding_athletes (event_id, sport_id, student_id)
  where event_id is not null and sport_id is not null and student_id is not null;
