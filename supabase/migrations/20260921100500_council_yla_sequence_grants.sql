-- Keep the YLA sequence grants scoped to the six new identity sequences.
revoke usage, select on sequence
  public.council_yla_events_id_seq,
  public.council_yla_participants_id_seq,
  public.council_yla_attendance_id_seq,
  public.council_yla_criteria_id_seq,
  public.council_yla_scores_id_seq,
  public.council_yla_results_id_seq
  from authenticated;

grant usage, select on sequence
  public.council_yla_events_id_seq,
  public.council_yla_participants_id_seq,
  public.council_yla_attendance_id_seq,
  public.council_yla_criteria_id_seq,
  public.council_yla_scores_id_seq,
  public.council_yla_results_id_seq
  to authenticated;
