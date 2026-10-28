-- Each election ballot must belong to exactly one student, teacher, or personnel identity.
alter table public.council_votes
  add constraint council_votes_exactly_one_voter_identity
  check (num_nonnulls(voter_student_id, voter_teacher_id, voter_personnel_id) = 1)
  not valid;

alter table public.council_votes
  validate constraint council_votes_exactly_one_voter_identity;
