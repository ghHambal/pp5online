-- The central pairing reset writes a distinct audit action so it can be
-- distinguished from ordinary schedule updates.
BEGIN;

ALTER TABLE public.sports_competition_schedule_audit
  DROP CONSTRAINT IF EXISTS sports_competition_schedule_audit_action_check;

ALTER TABLE public.sports_competition_schedule_audit
  ADD CONSTRAINT sports_competition_schedule_audit_action_check
  CHECK (action IN ('insert', 'update', 'reset_pairing'));

COMMIT;
