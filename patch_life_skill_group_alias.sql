-- Normalize legacy life-skill aliases after deploying the matching frontend.
-- The frontend accepts both "ชีวิต" and "ทักษะชีวิต"; this keeps existing rows
-- compatible with the current life-skill sync trigger and future writes.
BEGIN;

UPDATE public.classes
SET skill_group = 'ชีวิต'
WHERE btrim(coalesce(skill_group, '')) = 'ทักษะชีวิต';

UPDATE public.master_subjects
SET skill_group = 'ชีวิต'
WHERE btrim(coalesce(skill_group, '')) = 'ทักษะชีวิต';

COMMIT;
