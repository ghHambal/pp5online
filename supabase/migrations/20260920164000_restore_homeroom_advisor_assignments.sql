-- Restore regular advisors where a legacy duplicate was replaced by the
-- same teacher currently assigned to the corresponding religion room.
-- The archived row is the only source of truth used here; no teacher is guessed.
with candidates as (
  select distinct on (regular.id)
    regular.id,
    archived.teacher_id as restored_teacher_id
  from public.homeroom_teachers regular
  join public.homeroom_teachers religion
    on religion.category = 'ศาสนา'
   and religion.academic_year = regular.academic_year
   and religion.semester = regular.semester
   and split_part(regular.main_room, ' ', 2) = split_part(religion.main_room, ' ', 2)
   and religion.teacher_id = regular.teacher_id
  join public.homeroom_teacher_assignment_archive archived
    on archived.main_room = regular.main_room
   and archived.category <> 'ศาสนา'
   and archived.academic_year = regular.academic_year
   and archived.semester = regular.semester
   and archived.teacher_id is distinct from religion.teacher_id
  where regular.category <> 'ศาสนา'
    and regular.academic_year = 2569
    and regular.semester = 1
  order by regular.id, archived.original_id desc
)
update public.homeroom_teachers current_assignment
set teacher_id = candidates.restored_teacher_id
from candidates
where current_assignment.id = candidates.id;
